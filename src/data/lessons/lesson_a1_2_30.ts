import { DetailedLessonData } from '../../types';

export const LESSON_A1_2_30_DATA: DetailedLessonData = {
  id: 'lesson_a1_2_30',
  unitId: 'unit_a1_2',
  title: 'Future Plans & Capstone Review (Be Going To)',
  cefr: 'A1',
  icon: '🚀',
  estimatedMinutes: 30,
  learningObjective: {
    title: 'Expressing Future Plans, Intentions & Unit 2 Comprehensive Capstone Mastery',
    description: 'Master "be going to + base verb" for planned future actions (affirmative: "I am going to travel", negative: "She isn\'t going to attend", interrogative: "Are you going to study?"), future time expressions (tomorrow, tomorrow evening, next week, next month, next summer, this weekend), making predictions based on present evidence ("Look at the clouds, it\'s going to rain"), and synthesize all core competencies of Unit 2 (A1.2 Level Completion).',
    descriptionsByLang: {
      hi: 'भविष्य की योजनाओं और इरादों को व्यक्त करने के लिए "be going to + base verb" (I am going to travel, We are going to buy) का प्रयोग सीखें। भविष्य के समय सूचक (tomorrow, next week, this weekend), प्रत्यक्ष साक्ष्य के आधार पर भविष्यवाणियां ("It\'s going to rain") और यूनिट 2 की सभी प्रमुख दक्षताओं की व्यापक समीक्षा व कैपस्टोन अभ्यास करें।',
      es: 'Aprende a expresar planes futuros, intenciones y predicciones con evidencia usando la estructura "be going to + verbo base" ("I am going to travel", "¿What are you going to do?"). Domina marcadores de tiempo futuro (tomorrow, next week) e integra todos los conocimientos de la Unidad 2 (A1.2).',
      fr: 'Apprenez à exprimer vos projets d\'avenir avec "be going to" et révisez l\'Unité 2.',
      de: 'Lernen Sie Zukunftspläne und Absichten mit "be going to" auszudrücken und schließen Sie Einheit 2 ab.',
      pt: 'Aprenda a expressar planos futuros com "be going to" e faça a revisão capstone da Unidade 2.',
      zh: '掌握 "be going to + 动词原形" 表达已决定的未来计划、意图与基于当前迹象的预测（"I\'m going to travel", "It\'s going to rain"），熟练运用未来时间状语（tomorrow, next week, this weekend），并完成 Unit 2（A1.2阶段）的综合毕业总结。',
      ar: 'تعلم التعبير عن الخطط المستقبلية والنوايا باستخدام be going to ومراجعة مهارات الوحدة الثانية الشاملة.',
      ja: '「be going to + 動詞の原形」を使った未来の予定・意図（I\'m going to travel）や根拠のある予測（It\'s going to rain）、未来の時間表現、そして Unit 2 の総仕上げを行います。',
      ru: 'Освойте выражение будущих планов и намерений с помощью "be going to", маркеры будущего времени и завершите модуль Unit 2.'
    },
    canDoStatements: [
      'Express planned future intentions using "be going to": "I am going to visit my family next weekend", "We are going to start a course"',
      'Form negative future intentions: "He isn\'t going to work tomorrow", "They aren\'t going to move"',
      'Ask about future plans: "What are you going to do this summer?", "Are you going to buy a new car?"',
      'Use future time markers: "tomorrow morning", "next Friday", "in two weeks", "next year"',
      'Synthesize and review all major grammar and vocabulary domains from Unit 2 (A1.2 CEFR mastery)'
    ],
    canDoByLang: {
      hi: [
        'भविष्य की योजनाएं बताना: "I am going to learn Spanish"',
        'नकारात्मक योजनाएं: "She isn\'t going to travel tomorrow"',
        'योजनाओं के बारे में पूछना: "What are you going to do this weekend?"',
        'यूनिट 2 के सभी विषयों का समग्र ज्ञान'
      ],
      es: [
        'Expresar planes futuros: "I\'m going to travel"',
        'Hacer preguntas sobre el futuro: "¿What are you going to do?"',
        'Usar marcadores futuros: tomorrow, next week, in two months'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (25 items)
  vocabulary: [
    {
      id: 'v_u02_l30_going_to',
      word: 'be going to (do something)',
      phonetic: '/biː ˈɡoʊ.ɪŋ tuː/',
      meaning: 'Grammatical structure used to express pre-planned future intentions and immediate predictions',
      translationsByLang: { hi: 'करने जा रहा हूँ / योजना है (भविष्य सूचक)', es: 'ir a (hacer algo) / tener planeado', fr: 'aller (faire quelque chose)', de: 'vorhaben / werden (Zukunft)', pt: 'ir (fazer algo) / planejar', zh: '打算 / 将要（做某事）', ar: 'سوف / يخطط للقيام بـ', ja: '〜する予定である / 〜するつもりだ', ru: 'собираться (делать что-либо)' },
      exampleSentence: 'I am going to study international business in Canada next year.',
      exampleTranslationByLang: { hi: 'मैं अगले साल कनाडा में अंतर्राष्ट्रीय व्यापार का अध्ययन करने जा रहा हूँ।', es: 'Voy a estudiar negocios internacionales en Canadá el próximo año.' },
      audioText: 'be going to',
      audioId: 'en_a1_u02_l30_v_goingto',
      slowAudioId: 'en_a1_u02_l30_v_goingto_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎯',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_tomorrow',
      word: 'tomorrow / tomorrow morning',
      phonetic: '/təˈmɔːr.oʊ/',
      meaning: 'On the day after today',
      translationsByLang: { hi: 'कल / कल सुबह (आने वाला कल)', es: 'mañana / mañana por la mañana', fr: 'demain / demain matin', de: 'morgen / morgen früh', pt: 'amanhã / amanhã de manhã', zh: '明天 / 明天上午', ar: 'غداً / صباح الغد', ja: '明日（あした） / 明日の朝', ru: 'завтра / завтра утром' },
      exampleSentence: 'We are going to meet at the central library tomorrow at 10 AM.',
      exampleTranslationByLang: { hi: 'हम कल सुबह 10 बजे सेंट्रल लाइब्रेरी में मिलने वाले हैं।', es: 'Nos vamos a encontrar en la biblioteca central mañana a las 10 de la mañana.' },
      audioText: 'tomorrow',
      audioId: 'en_a1_u02_l30_v_tomorrow',
      slowAudioId: 'en_a1_u02_l30_v_tomorrow_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌅',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_next_week_month',
      word: 'next week / next month / next year',
      phonetic: '/nekst wiːk/ /nekst jɪr/',
      meaning: 'In the calendar period coming immediately after the present one',
      translationsByLang: { hi: 'अगले हफ्ते / अगले महीने / अगले साल', es: 'la próxima semana / el próximo mes / el próximo año', fr: 'la semaine prochaine / le mois prochain / l\'année prochaine', de: 'nächste Woche / nächsten Monat / nächstes Jahr', pt: 'semana que vem / mês que vem / ano que vem', zh: '下周 / 下个月 / 明年', ar: 'الأسبوع القادم / الشهر القادم / العام القادم', ja: '来週 / 来月 / 来年', ru: 'на следующей неделе / в следующем месяце / в следующем году' },
      exampleSentence: 'She is going to start her new job next month.',
      exampleTranslationByLang: { hi: 'वह अगले महीने अपनी नई नौकरी शुरू करने जा रही है।', es: 'Ella va a comenzar su nuevo trabajo el próximo mes.' },
      audioText: 'next week and next year',
      audioId: 'en_a1_u02_l30_v_nextweek',
      slowAudioId: 'en_a1_u02_l30_v_nextweek_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🗓️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_tonight',
      word: 'tonight / this evening',
      phonetic: '/təˈnaɪt/',
      meaning: 'During the evening or night of the present day',
      translationsByLang: { hi: 'आज रात / आज शाम', es: 'esta noche / esta tarde-noche', fr: 'ce soir / cette nuit', de: 'heute Abend / heute Nacht', pt: 'hoje à noite', zh: '今晚 / 今天晚上', ar: 'الليلة / هذا المساء', ja: '今夜 / 今晩', ru: 'сегодня вечером / сегодня ночью' },
      exampleSentence: 'Are you going to cook dinner at home tonight?',
      exampleTranslationByLang: { hi: 'क्या आप आज रात घर पर खाना बनाने जा रहे हैं?', es: '¿Vas a cocinar la cena en casa esta noche?' },
      audioText: 'tonight',
      audioId: 'en_a1_u02_l30_v_tonight',
      slowAudioId: 'en_a1_u02_l30_v_tonight_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌃',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_soon_later',
      word: 'soon / later (in an hour)',
      phonetic: '/suːn/ /ˈleɪ.t̬ɚ/',
      meaning: 'In a short time / at a subsequent time in the near future',
      translationsByLang: { hi: 'जल्द ही / बाद में (एक घंटे में)', es: 'pronto / más tarde (en una hora)', fr: 'bientôt / plus tard', de: 'bald / später (in einer Stunde)', pt: 'em breve / mais tarde', zh: '很快 / 稍后（一小时后）', ar: 'قريباً / لاحقاً (بعد ساعة)', ja: 'もうすぐ / あとで（1時間後に）', ru: 'скоро / позже (через час)' },
      exampleSentence: 'The train is going to arrive soon, please get ready.',
      exampleTranslationByLang: { hi: 'ट्रेन जल्द ही आने वाली है, कृपया तैयार हो जाएं।', es: 'El tren va a llegar pronto, por favor prepárense.' },
      audioText: 'soon and later',
      audioId: 'en_a1_u02_l30_v_soon',
      slowAudioId: 'en_a1_u02_l30_v_soon_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⏱️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_travel_abroad',
      word: 'travel abroad',
      phonetic: '/ˈtræv.əl əˈbrɑːd/',
      meaning: 'Journey to a foreign country across international borders',
      translationsByLang: { hi: 'विदेश यात्रा करना', es: 'viajar al extranjero', fr: 'voyager à l\'étranger', de: 'ins Ausland reisen', pt: 'viajar para o exterior', zh: '出国旅行', ar: 'السفر إلى الخارج', ja: '海外旅行をする', ru: 'путешествовать за границу' },
      exampleSentence: 'They are going to travel abroad to Portugal this summer.',
      exampleTranslationByLang: { hi: 'वे इस गर्मी में पुर्तगाल की विदेश यात्रा करने जा रहे हैं।', es: 'Ellos van a viajar al extranjero a Portugal este verano.' },
      audioText: 'travel abroad',
      audioId: 'en_a1_u02_l30_v_abroad',
      slowAudioId: 'en_a1_u02_l30_v_abroad_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '✈️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_plan_intention',
      word: 'plan / intention',
      phonetic: '/plæn/ /ɪnˈten.ʃən/',
      meaning: 'A decided arrangement or formulated aim for future execution',
      translationsByLang: { hi: 'योजना / इरादा', es: 'plan / intención', fr: 'plan / projet / intention', de: 'Plan / Absicht', pt: 'plano / intenção', zh: '计划 / 意图', ar: 'خطة / نية', ja: '計画 / 意図', ru: 'план / намерение' },
      exampleSentence: 'What are your plans for the upcoming winter holidays?',
      exampleTranslationByLang: { hi: 'आगामी सर्दियों की छुट्टियों के लिए आपकी क्या योजनाएं हैं?', es: '¿Cuáles son tus planes para las próximas vacaciones de invierno?' },
      audioText: 'plan and intention',
      audioId: 'en_a1_u02_l30_v_plan',
      slowAudioId: 'en_a1_u02_l30_v_plan_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📋',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_move_house',
      word: 'move house / relocate',
      phonetic: '/muːv haʊs/',
      meaning: 'Change one\'s place of permanent residence to a new home',
      translationsByLang: { hi: 'घर बदलना / नया घर लेना', es: 'mudarse de casa / trasladarse', fr: 'déménager', de: 'umziehen (Wohnungswechsel)', pt: 'mudar de casa', zh: '搬家 / 迁移', ar: 'الانتقال إلى منزل جديد', ja: '引っ越しをする', ru: 'переезжать (в новый дом)' },
      exampleSentence: 'We are going to move to a larger house in July.',
      exampleTranslationByLang: { hi: 'हम जुलाई में एक बड़े घर में जाने वाले हैं।', es: 'Nos vamos a mudar a una casa más grande en julio.' },
      audioText: 'move house',
      audioId: 'en_a1_u02_l30_v_movehouse',
      slowAudioId: 'en_a1_u02_l30_v_movehouse_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📦',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_celebrate',
      word: 'celebrate a birthday / milestone',
      phonetic: '/ˈsel.ə.breɪt/',
      meaning: 'Acknowledge an important day or event with festive social activity',
      translationsByLang: { hi: 'जन्मदिन / मील का पत्थर मनाना (उत्सव)', es: 'celebrar un cumpleaños / hito', fr: 'fêter / célébrer un anniversaire', de: 'einen Geburtstag feiern', pt: 'comemorar / celebrar um aniversário', zh: '庆祝生日 / 里程碑', ar: 'يحتفل بعيد ميلاد', ja: '誕生日や記念日を祝う', ru: 'праздновать день рождения' },
      exampleSentence: 'I am going to celebrate my 30th birthday with a dinner party.',
      exampleTranslationByLang: { hi: 'मैं डिनर पार्टी के साथ अपना 30वां जन्मदिन मनाने जा रहा हूँ।', es: 'Voy a celebrar mi 30º cumpleaños con una cena.' },
      audioText: 'celebrate',
      audioId: 'en_a1_u02_l30_v_celebrate',
      slowAudioId: 'en_a1_u02_l30_v_celebrate_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎂',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_start_finish_future',
      word: 'start / graduate / finish',
      phonetic: '/stɑːrt/ /ˈɡrædʒ.u.eɪt/',
      meaning: 'Key future academic and career transition milestones',
      translationsByLang: { hi: 'शुरू करना / स्नातक होना (ग्रेजुएट) / पूरा करना', es: 'comenzar / graduarse / terminar', fr: 'commencer / obtenir son diplôme / terminer', de: 'beginnen / graduieren / abschließen', pt: 'começar / se formar / terminar', zh: '开始 / 毕业 / 结束', ar: 'يبدأ / يتخرج / ينهي', ja: '始める / 卒業する / 終える', ru: 'начинать / оканчивать вуз / завершать' },
      exampleSentence: 'He is going to graduate from medical school next spring.',
      exampleTranslationByLang: { hi: 'वह अगली वसंत में मेडिकल स्कूल से ग्रेजुएट होने जा रहा है।', es: 'Él se va a graduar de la facultad de medicina la próxima primavera.' },
      audioText: 'start and graduate',
      audioId: 'en_a1_u02_l30_v_milestones',
      slowAudioId: 'en_a1_u02_l30_v_milestones_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎓',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_rain_prediction',
      word: 'it\'s going to rain / snow',
      phonetic: '/ɪts ˈɡoʊ.ɪŋ tuː reɪn/',
      meaning: 'Meteorological prediction based on visible dark clouds or atmospheric evidence',
      translationsByLang: { hi: 'बारिश होने वाली है / बर्फबारी होने वाली है', es: 'va a llover / va a nevar', fr: 'il va pleuvoir / il va neiger', de: 'es wird regnen / schneien', pt: 'vai chover / vai nevar', zh: '要下雨了 / 要下雪了', ar: 'إنها ستمطر / ستثلج', ja: '雨が降りそうだ / 雪が降りそうだ', ru: 'собирается дождь / пойдет снег' },
      exampleSentence: 'Look at those dark grey clouds; it is going to rain.',
      exampleTranslationByLang: { hi: 'उन काले बादलों को देखो; बारिश होने वाली है।', es: 'Mira esas nubes oscuras; va a llover.' },
      audioText: 'it is going to rain',
      audioId: 'en_a1_u02_l30_v_rainpred',
      slowAudioId: 'en_a1_u02_l30_v_rainpred_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌧️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_attend_event',
      word: 'attend a conference / webinar',
      phonetic: '/əˈtend/',
      meaning: 'Be present at a professional or educational meeting in the future',
      translationsByLang: { hi: 'सम्मेलन / वेबिनार में भाग लेना', es: 'asistir a una conferencia / seminario', fr: 'assister à une conférence / webinaire', de: 'an einer Konferenz teilnehmen', pt: 'participar de uma conferência', zh: '参加会议 / 在线研讨会', ar: 'حضور مؤتمر / ندوة عبر الإنترنت', ja: '会議やセミナーに出席する', ru: 'посещать конференцию / вебинар' },
      exampleSentence: 'I am going to attend an AI conference in London next month.',
      exampleTranslationByLang: { hi: 'मैं अगले महीने लंदन में एक एआई सम्मेलन में भाग लेने जा रहा हूँ।', es: 'Voy a asistir a una conferencia sobre IA en Londres el próximo mes.' },
      audioText: 'attend a conference',
      audioId: 'en_a1_u02_l30_v_attend',
      slowAudioId: 'en_a1_u02_l30_v_attend_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎤',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_learn_new_skill',
      word: 'learn a new language / instrument',
      phonetic: '/lɝːn/',
      meaning: 'Acquire knowledge or technical skill in a new domain',
      translationsByLang: { hi: 'नई भाषा / वाद्य यंत्र सीखना', es: 'aprender un nuevo idioma / instrumento', fr: 'apprendre une nouvelle langue / instrument', de: 'eine neue Sprache / ein Instrument lernen', pt: 'aprender um novo idioma / instrumento', zh: '学习一门新语言 / 乐器', ar: 'تعلم لغة جديدة / آلة موسيقية', ja: '新しい言語や楽器を習う', ru: 'учить новый язык / инструмент' },
      exampleSentence: 'I am going to learn conversational German this autumn.',
      exampleTranslationByLang: { hi: 'मैं इस पतझड़ में संवादात्मक जर्मन सीखने जा रहा हूँ।', es: 'Voy a aprender alemán conversacional este otoño.' },
      audioText: 'learn a new language',
      audioId: 'en_a1_u02_l30_v_learnskill',
      slowAudioId: 'en_a1_u02_l30_v_learnskill_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📖',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_save_money',
      word: 'save money / buy a car',
      phonetic: '/seɪv ˈmʌn.i/',
      meaning: 'Keep money rather than spend it to purchase a future asset',
      translationsByLang: { hi: 'पैसे बचाना / कार खरीदना', es: 'ahorrar dinero / comprar un coche', fr: 'économiser de l\'argent / acheter une voiture', de: 'Geld sparen / ein Auto kaufen', pt: 'economizar dinheiro / comprar um carro', zh: '存钱 / 买车', ar: 'ادخار المال / شراء سيارة', ja: 'お金を貯める / 車を買う', ru: 'копить деньги / покупать машину' },
      exampleSentence: 'We are going to save money to buy a new family electric car.',
      exampleTranslationByLang: { hi: 'हम एक नई पारिवारिक इलेक्ट्रिक कार खरीदने के लिए पैसे बचाने जा रहे हैं।', es: 'Vamos a ahorrar dinero para comprar un coche eléctrico familiar.' },
      audioText: 'save money',
      audioId: 'en_a1_u02_l30_v_savemoney',
      slowAudioId: 'en_a1_u02_l30_v_savemoney_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💰',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_relax_rest_future',
      word: 'relax / take time off',
      phonetic: '/rɪˈlæks/ /teɪk taɪm ɑːf/',
      meaning: 'Rest and engage in leisure recreation free from work duties',
      translationsByLang: { hi: 'आराम करना / छुट्टी लेना', es: 'relajarse / tomarse unos días libres', fr: 'se détendre / prendre un congé', de: 'sich entspannen / sich frei nehmen', pt: 'relaxar / tirar uma folga', zh: '放松 / 休假', ar: 'الاسترخاء / أخذ إجازة', ja: 'リラックスする / 休暇を取る', ru: 'отдыхать / брать отгул' },
      exampleSentence: 'I am going to relax at home and read books this weekend.',
      exampleTranslationByLang: { hi: 'मैं इस वीकेंड घर पर आराम करने और किताबें पढ़ने जा रहा हूँ।', es: 'Me voy a relajar en casa y leer libros este fin de semana.' },
      audioText: 'relax and take time off',
      audioId: 'en_a1_u02_l30_v_relax',
      slowAudioId: 'en_a1_u02_l30_v_relax_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧘',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_visit_relatives',
      word: 'visit relatives / grandparents',
      phonetic: '/ˈvɪz.ɪt ˈrel.ə.tɪvz/',
      meaning: 'Go to spend time with extended family members',
      translationsByLang: { hi: 'रिश्तेदारों / दादा-दादी से मिलने जाना', es: 'visitar a los familiares / abuelos', fr: 'rendre visite à la famille / grands-parents', de: 'Verwandte / Großeltern besuchen', pt: 'visitar parentes / avós', zh: '拜访亲戚 / 祖父母', ar: 'زيارة الأقارب / الأجداد', ja: '親戚や祖父母を訪ねる', ru: 'навещать родственников / бабушку и дедушку' },
      exampleSentence: 'We are going to visit our grandparents in Chicago next Sunday.',
      exampleTranslationByLang: { hi: 'हम अगले रविवार को शिकागो में अपने दादा-दादी से मिलने जा रहे हैं।', es: 'Vamos a visitar a nuestros abuelos en Chicago el próximo domingo.' },
      audioText: 'visit relatives',
      audioId: 'en_a1_u02_l30_v_relatives',
      slowAudioId: 'en_a1_u02_l30_v_relatives_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👵',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_join_gym',
      word: 'join a gym / start running',
      phonetic: '/dʒɔɪn ə dʒɪm/',
      meaning: 'Enroll in a fitness center or initiate an athletic fitness routine',
      translationsByLang: { hi: 'जिम जॉइन करना / दौड़ना शुरू करना', es: 'apuntarse al gimnasio / empezar a correr', fr: 's\'inscrire à la salle de sport', de: 'sich im Fitnessstudio anmelden', pt: 'entrar na academia / começar a correr', zh: '加入健身房 / 开始跑步', ar: 'الاشتراك في نادٍ رياضي', ja: 'ジムに入会する / ランニングを始める', ru: 'записаться в спортзал / начать бегать' },
      exampleSentence: 'He is going to join a local gym to improve his fitness.',
      exampleTranslationByLang: { hi: 'वह अपनी फिटनेस सुधारने के लिए एक स्थानीय जिम में शामिल होने जा रहा है।', es: 'Él se va a apuntar a un gimnasio local para mejorar su forma física.' },
      audioText: 'join a gym',
      audioId: 'en_a1_u02_l30_v_gym',
      slowAudioId: 'en_a1_u02_l30_v_gym_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏋️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_cook_special_meal',
      word: 'cook a special dinner',
      phonetic: '/kʊk ə ˈspeʃ.əl ˈdɪn.ɚ/',
      meaning: 'Prepare a gourmet meal for an anniversary or special gathering',
      translationsByLang: { hi: 'एक विशेष रात्रिभोज पकाना', es: 'cocinar una cena especial', fr: 'préparer un dîner spécial', de: 'ein besonderes Abendessen kochen', pt: 'cozinhar um jantar especial', zh: '做一顿特别的晚餐', ar: 'طبخ عشاء خاص', ja: '特別なディナーを作る', ru: 'готовить особенный ужин' },
      exampleSentence: 'I am going to cook a special Italian dinner for our anniversary.',
      exampleTranslationByLang: { hi: 'मैं हमारी सालगिरह के लिए एक विशेष इतालवी रात्रिभोज पकाने जा रहा हूँ।', es: 'Voy a cocinar una cena especial italiana para nuestro aniversario.' },
      audioText: 'cook a special dinner',
      audioId: 'en_a1_u02_l30_v_specialdinner',
      slowAudioId: 'en_a1_u02_l30_v_specialdinner_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍷',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_graduate_pass_exam',
      word: 'pass the exam / get a certificate',
      phonetic: '/pæs ði ɪɡˈzæm/',
      meaning: 'Successfully achieve qualification standards on an official evaluation',
      translationsByLang: { hi: 'परीक्षा पास करना / प्रमाणपत्र प्राप्त करना', es: 'aprobar el examen / obtener un certificado', fr: 'réussir l\'examen / obtenir un certificat', de: 'die Prüfung bestehen / ein Zertifikat erhalten', pt: 'passar no exame / obter certificado', zh: '通过考试 / 获得证书', ar: 'اجتياز الاختبار / الحصول على شهادة', ja: '試験に合格する / 証明書を取得する', ru: 'сдать экзамен / получить сертификат' },
      exampleSentence: 'If you study every day, you are going to pass the CEFR A1 exam easily.',
      exampleTranslationByLang: { hi: 'यदि आप प्रतिदिन अध्ययन करते हैं, तो आप आसानी से CEFR A1 परीक्षा उत्तीर्ण कर लेंगे।', es: 'Si estudias todos los días, vas a aprobar el examen CEFR A1 fácilmente.' },
      audioText: 'pass the exam',
      audioId: 'en_a1_u02_l30_v_passexam',
      slowAudioId: 'en_a1_u02_l30_v_passexam_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📜',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_next_weekend',
      word: 'this weekend / next weekend',
      phonetic: '/ðɪs ˈwiːk.end/ /nekst ˈwiːk.end/',
      meaning: 'The Saturday and Sunday coming immediately or the following week',
      translationsByLang: { hi: 'इस वीकेंड / अगले वीकेंड', es: 'este fin de semana / el próximo fin de semana', fr: 'ce week-end / le week-end prochain', de: 'dieses Wochenende / nächstes Wochenende', pt: 'este fim de semana / próximo fim de semana', zh: '这个周末 / 下个周末', ar: 'عطلة نهاية هذا الأسبوع / الأسبوع القادم', ja: '今週末 / 来週末', ru: 'в эти выходные / в следующие выходные' },
      exampleSentence: 'What are you going to do this weekend?',
      exampleTranslationByLang: { hi: 'आप इस सप्ताहांत क्या करने जा रहे हैं?', es: '¿Qué vas a hacer este fin de semana?' },
      audioText: 'this weekend',
      audioId: 'en_a1_u02_l30_v_thisweekend',
      slowAudioId: 'en_a1_u02_l30_v_thisweekend_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏕️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_in_two_days',
      word: 'in two days / in three weeks',
      phonetic: '/ɪn tuː deɪz/',
      meaning: 'Time expression indicating an event occurring after a specified duration',
      translationsByLang: { hi: 'दो दिनों में / तीन हफ्तों में (भविष्य)', es: 'en dos días / en tres semanas', fr: 'dans deux jours / dans trois semaines', de: 'in zwei Tagen / in drei Wochen', pt: 'em dois dias / em três semanas', zh: '两天后 / 三周后', ar: 'خلال يومين / خلال ثلاثة أسابيع', ja: '2日後に / 3週間後に', ru: 'через два дня / через три недели' },
      exampleSentence: 'The conference begins in two days.',
      exampleTranslationByLang: { hi: 'सम्मेलन दो दिनों में शुरू होने वाला है।', es: 'La conferencia empieza en dos días.' },
      audioText: 'in two days',
      audioId: 'en_a1_u02_l30_v_intwodays',
      slowAudioId: 'en_a1_u02_l30_v_intwodays_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⏳',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_aspirations_goals',
      word: 'goals / dreams / aspirations',
      phonetic: '/ɡoʊlz/ /driːmz/',
      meaning: 'Desired long-term future achievements and intentions',
      translationsByLang: { hi: 'लक्ष्य / सपने / आकांक्षाएं', es: 'metas / sueños / aspiraciones', fr: 'objectifs / rêves / aspirations', de: 'Ziele / Träume / Bestrebungen', pt: 'metas / sonhos / aspirações', zh: '目标 / 梦想 / 抱负', ar: 'أهداف / أحلام / طموحات', ja: '目標 / 夢 / 志望', ru: 'цели / мечты / стремления' },
      exampleSentence: 'Setting clear goals helps you achieve your dreams.',
      exampleTranslationByLang: { hi: 'स्पष्ट लक्ष्य निर्धारित करने से आपको अपने सपनों को प्राप्त करने में मदद मिलती है।', es: 'Establecer metas claras te ayuda a alcanzar tus sueños.' },
      audioText: 'goals and dreams',
      audioId: 'en_a1_u02_l30_v_goals',
      slowAudioId: 'en_a1_u02_l30_v_goals_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌟',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_capstone_mastery',
      word: 'CEFR A1 Mastery (Complete)',
      phonetic: '/ˈmæs.tɚ.i/',
      meaning: 'Comprehensive command of foundational basic English communication competencies',
      translationsByLang: { hi: 'CEFR A1 प्रवीणता (पूर्ण)', es: 'Dominio CEFR A1 (Completado)', fr: 'Maîtrise CEFR A1 (Complète)', de: 'CEFR A1 Beherrschung (Abgeschlossen)', pt: 'Domínio CEFR A1 (Completo)', zh: '欧洲语言框架 A1 等级掌握（圆满完成）', ar: 'إتقان المستوى الأول CEFR A1 (مكتمل)', ja: 'CEFR A1 レベル修了（完全達成）', ru: 'Владение уровнем CEFR A1 (Завершено)' },
      exampleSentence: 'Congratulations! You have completed all 30 foundational lessons of CEFR A1.',
      exampleTranslationByLang: { hi: 'बधाई हो! आपने CEFR A1 के सभी 30 मूलभूत पाठ पूरे कर लिए हैं।', es: '¡Felicidades! Has completado las 30 lecciones fundamentales de CEFR A1.' },
      audioText: 'CEFR A1 Mastery',
      audioId: 'en_a1_u02_l30_v_mastery',
      slowAudioId: 'en_a1_u02_l30_v_mastery_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏆',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_review_practice',
      word: 'review / consolidate',
      phonetic: '/rɪˈvjuː/ /kənˈsɑː.lə.deɪt/',
      meaning: 'Assess and reinforce acquired knowledge across all units',
      translationsByLang: { hi: 'पुनरावलोकन करना / मजबूत करना', es: 'repasar / consolidar', fr: 'réviser / consolider', de: 'wiederholen / festigen', pt: 'revisar / consolidar', zh: '复习 / 巩固', ar: 'مراجعة / ترسيخ المكتسبات', ja: '復習する / 定着させる', ru: 'повторять / закреплять' },
      exampleSentence: 'Reviewing vocabulary daily strengthens your long-term memory.',
      exampleTranslationByLang: { hi: 'रोजाना शब्दावली की समीक्षा करने से आपकी दीर्घकालिक याददाश्त मजबूत होती है।', es: 'Repasar el vocabulario a diario fortalece la memoria a largo plazo.' },
      audioText: 'review and consolidate',
      audioId: 'en_a1_u02_l30_v_review',
      slowAudioId: 'en_a1_u02_l30_v_review_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔄',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l30_future_success',
      word: 'success / continue to A2',
      phonetic: '/səkˈses/ /kənˈtɪn.juː/',
      meaning: 'Accomplishment of an aim and advancing to the next CEFR elementary level',
      translationsByLang: { hi: 'सफलता / A2 स्तर की ओर आगे बढ़ना', es: 'éxito / continuar al nivel A2', fr: 'succès / continuer vers le niveau A2', de: 'Erfolg / weiter zu A2', pt: 'sucesso / continuar para o nível A2', zh: '成功 / 迈向 A2 初级进阶', ar: 'نجاح / المتابعة إلى مستوى A2', ja: '成功 / A2 レベルへ進む', ru: 'успех / переход на уровень A2' },
      exampleSentence: 'We wish you great success as you continue to Level A2!',
      exampleTranslationByLang: { hi: 'स्तर A2 की ओर बढ़ते हुए हम आपकी बड़ी सफलता की कामना करते हैं!', es: '¡Te deseamos mucho éxito al continuar con el nivel A2!' },
      audioText: 'success and continue',
      audioId: 'en_a1_u02_l30_v_success',
      slowAudioId: 'en_a1_u02_l30_v_success_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎉',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks & Expressions (10 items)
  expressions: [
    {
      id: 'exp_u02_l30_01',
      phrase: 'What are you going to do this weekend?',
      meaning: 'Universal social inquiry asking about planned future recreation',
      translationsByLang: {
        hi: 'आप इस सप्ताहांत क्या करने जा रहे हैं?',
        es: '¿Qué vas a hacer este fin de semana?',
        fr: 'Que vas-tu faire ce week-end ?',
        de: 'Was wirst du dieses Wochenende machen?',
        pt: 'O que você vai fazer neste fim de semana?',
        zh: '这个周末你打算做什么？',
        ar: 'ماذا ستفعل في عطلة نهاية هذا الأسبوع؟',
        ja: '今週末は何をする予定ですか？',
        ru: 'Что вы собираетесь делать в эти выходные?'
      },
      context: 'Friday workplace and friendly conversations.',
      audioId: 'en_a1_u02_l30_exp_01'
    },
    {
      id: 'exp_u02_l30_02',
      phrase: 'I am going to travel to Italy next summer.',
      meaning: 'Stating a major planned international vacation intention',
      translationsByLang: {
        hi: 'मैं अगली गर्मियों में इटली की यात्रा करने जा रहा हूँ।',
        es: 'Voy a viajar a Italia el próximo verano.',
        fr: 'Je vais voyager en Italie l\'été prochain.',
        de: 'Ich werde nächsten Sommer nach Italien reisen.',
        pt: 'Vou viajar para a Itália no próximo verão.',
        zh: '我明年夏天打算去意大利旅游。',
        ar: 'سوف أسافر إلى إيطاليا في الصيف القادم.',
        ja: '来年の夏にイタリアへ旅行する予定です。',
        ru: 'Следующим летом я собираюсь поехать в Италию.'
      },
      context: 'Vacation planning discussions.',
      audioId: 'en_a1_u02_l30_exp_02'
    },
    {
      id: 'exp_u02_l30_03',
      phrase: 'Look at those dark clouds! It is going to rain.',
      meaning: 'Immediate weather prediction based on visible present evidence',
      translationsByLang: {
        hi: 'उन काले बादलों को देखो! बारिश होने वाली है।',
        es: '¡Mira esas nubes oscuras! Va a llover.',
        fr: 'Regarde ces nuages sombres ! Il va pleuvoir.',
        de: 'Schau dir diese dunklen Wolken an! Es wird regnen.',
        pt: 'Olha aquelas nuvens escuras! Vai chover.',
        zh: '看那些乌云！要下雨了。',
        ar: 'انظر إلى تلك الغيوم الداكنة! إنها ستمطر.',
        ja: 'あの黒い雲を見て！雨が降りそうだよ。',
        ru: 'Посмотри на эти темные тучи! Собирается дождь.'
      },
      context: 'Immediate situational deduction.',
      audioId: 'en_a1_u02_l30_exp_03'
    },
    {
      id: 'exp_u02_l30_04',
      phrase: 'Are you going to buy that new laptop?',
      meaning: 'Inquiring about someone\'s planned consumer purchase',
      translationsByLang: {
        hi: 'क्या आप वह नया लैपटॉप खरीदने जा रहे हैं?',
        es: '¿Vas a comprar ese portátil nuevo?',
        fr: 'Vas-tu acheter ce nouvel ordinateur portable ?',
        de: 'Wirst du dir diesen neuen Laptop kaufen?',
        pt: 'Você vai comprar aquele laptop novo?',
        zh: '你打算买那台新笔记本电脑吗？',
        ar: 'هل ستشتري ذلك الحاسوب المحمول الجديد؟',
        ja: 'あの新しいノートパソコンを買うつもりですか？',
        ru: 'Вы собираетесь купить этот новый ноутбук?'
      },
      context: 'Shopping discussion.',
      audioId: 'en_a1_u02_l30_exp_04'
    },
    {
      id: 'exp_u02_l30_05',
      phrase: 'No, I am not. It is too expensive.',
      meaning: 'Negative future intention with causal financial justification',
      translationsByLang: {
        hi: 'नहीं, मैं नहीं खरीदने जा रहा हूँ। यह बहुत महंगा है।',
        es: 'No, no lo voy a comprar. Es demasiado caro.',
        fr: 'Non, c\'est trop cher.',
        de: 'Nein, mache ich nicht. Es ist zu teuer.',
        pt: 'Não, não vou. É caro demais.',
        zh: '不，我不打算买。太贵了。',
        ar: 'لا، لن أفعل. إنه باهظ الثمن للغاية.',
        ja: 'いいえ、買いません。高すぎます。',
        ru: 'Нет, не собираюсь. Это слишком дорого.'
      },
      context: 'Consumer decision making.',
      audioId: 'en_a1_u02_l30_exp_05'
    },
    {
      id: 'exp_u02_l30_06',
      phrase: 'We are going to celebrate our wedding anniversary on Saturday.',
      meaning: 'Announcing a planned milestone family celebration',
      translationsByLang: {
        hi: 'हम शनिवार को अपनी शादी की सालगिरह मनाने जा रहे हैं।',
        es: 'Vamos a celebrar nuestro aniversario de bodas el sábado.',
        fr: 'Nous allons fêter notre anniversaire de mariage samedi.',
        de: 'Wir werden am Samstag unseren Hochzeitstag feiern.',
        pt: 'Vamos comemorar nosso aniversário de casamento no sábado.',
        zh: '我们周六打算庆祝结婚纪念日。',
        ar: 'سنحتفل بذكرى زواجنا يوم السبت.',
        ja: '土曜日に結婚記念日を祝う予定です。',
        ru: 'В субботу мы собираемся отметить годовщину свадьбы.'
      },
      context: 'Special event invitation.',
      audioId: 'en_a1_u02_l30_exp_06'
    },
    {
      id: 'exp_u02_l30_07',
      phrase: 'I am going to take a long rest tonight.',
      meaning: 'Expressing an intention to relax and recover energy',
      translationsByLang: {
        hi: 'मैं आज रात लंबा आराम करने जा रहा हूँ।',
        es: 'Voy a descansar bastante esta noche.',
        fr: 'Je vais bien me reposer ce soir.',
        de: 'Ich werde mich heute Abend lange ausruhen.',
        pt: 'Vou descansar bastante esta noite.',
        zh: '我今晚打算好好休息一下。',
        ar: 'سوف آخذ قسطاً طويلاً من الراحة الليلة.',
        ja: '今夜はゆっくり休むつもりです。',
        ru: 'Сегодня вечером я собираюсь хорошо отдохнуть.'
      },
      context: 'Evening self-care plan.',
      audioId: 'en_a1_u02_l30_exp_07'
    },
    {
      id: 'exp_u02_l30_08',
      phrase: 'She isn\'t going to work tomorrow because she has a doctor\'s appointment.',
      meaning: 'Explaining scheduled future absence from workplace',
      translationsByLang: {
        hi: 'वह कल काम पर नहीं जाने वाली है क्योंकि उसका डॉक्टर के साथ अपॉइंटमेंट है।',
        es: 'Ella no va a trabajar mañana porque tiene cita con el médico.',
        fr: 'Elle ne va pas travailler demain car elle a un rendez-vous médical.',
        de: 'Sie wird morgen nicht arbeiten, da sie einen Arzttermin hat.',
        pt: 'Ela não vai trabalhar amanhã porque tem consulta médica.',
        zh: '她明天不去上班，因为她预约了看医生。',
        ar: 'هي لن تعمل غداً لأن لديها موعداً عند الطبيب.',
        ja: '彼女は医師の予約があるため、明日は仕事を休みます。',
        ru: 'Она не пойдет завтра на работу, потому что записана к врачу.'
      },
      context: 'Workplace schedule explanation.',
      audioId: 'en_a1_u02_l30_exp_08'
    },
    {
      id: 'exp_u02_l30_09',
      phrase: 'Congratulations on completing CEFR A1!',
      meaning: 'Formal celebratory praise upon finishing the foundational English curriculum',
      translationsByLang: {
        hi: 'CEFR A1 पूरा करने पर बहुत-बहुत बधाई!',
        es: '¡Felicitaciones por completar el nivel CEFR A1!',
        fr: 'Félicitations pour avoir terminé le niveau CEFR A1 !',
        de: 'Herzlichen Glückwunsch zum Abschluss von CEFR A1!',
        pt: 'Parabéns por concluir o nível CEFR A1!',
        zh: '祝贺你圆满完成 CEFR A1 阶段课程！',
        ar: 'تهانينا الحارة على إتمام مستوى CEFR A1 بنجاح!',
        ja: 'CEFR A1 レベル修了おめでとうございます！',
        ru: 'Поздравляем с успешным завершением уровня CEFR A1!'
      },
      context: 'Academic milestone graduation.',
      audioId: 'en_a1_u02_l30_exp_09'
    },
    {
      id: 'exp_u02_l30_10',
      phrase: 'I am ready to continue to Level A2.',
      meaning: 'Confident expression of readiness for the next stage of English acquisition',
      translationsByLang: {
        hi: 'मैं लेवल A2 की ओर आगे बढ़ने के लिए तैयार हूँ।',
        es: 'Estoy listo para continuar al nivel A2.',
        fr: 'Je suis prêt à passer au niveau A2.',
        de: 'Ich bin bereit, mit Level A2 fortzufahren.',
        pt: 'Estou pronto para avançar para o nível A2.',
        zh: '我已经准备好继续挑战 A2 级别了！',
        ar: 'أنا مستعد تماماً للانتقال إلى المستوى A2.',
        ja: 'A2 レベルへ進む準備ができました。',
        ru: 'Я готов продолжить обучение на уровне A2.'
      },
      context: 'Learner self-efficacy declaration.',
      audioId: 'en_a1_u02_l30_exp_10'
    }
  ],

  // SECTION 5: Grammar Rules (3 items)
  grammar: {
    patterns: [
    {
      id: 'g_u02_l30_01',
      title: 'Structure of "BE GOING TO": Subject + [am/is/are] + going to + Base Verb',
      explanation: 'Form future plans with the appropriate present tense of "to be" (am/is/are) + "going to" + the BASE FORM of the main verb: "I am going to visit", "She is going to study", "We are going to move". Never use "-s" or "-ed" on the main verb.',
      rulesByLang: {
        hi: 'भविष्य की योजना: Subject + am/is/are + going to + क्रिया का मूल रूप (base verb)। जैसे: "I am going to visit my friend", "She is going to buy a car"। मुख्य क्रिया में कभी भी -s या -ed न जोड़ें।',
        es: 'Estructura: Sujeto + am/is/are + going to + verbo base. "I am going to travel", "She is going to buy".',
        fr: 'Structure : Sujet + am/is/are + going to + verbe à la base.',
        de: 'Struktur: Subjekt + am/is/are + going to + Infinitiv.',
        pt: 'Estrutura: Sujeito + am/is/are + going to + forma base do verbo.',
        zh: '肯定结构：主语 + am/is/are + going to + 动词原形。如："I am going to travel"（我打算去旅行），"She is going to buy a house"（她打算买房）。后面的动词永远用原形。',
        ar: 'التركيب: الفاعل + am/is/are + going to + المصدر: I am going to travel.',
        ja: '構文：主語 + am/is/are + going to + 動詞の原形（"I am going to study"）。',
        ru: 'Структура: Подлежащее + am/is/are + going to + начальная форма глагола ("I am going to travel").'
      },
      examples: [
        { sentence: 'I am going to visit my grandparents this weekend.', translation: 'Voy a visitar a mis abuelos este fin de semana.' },
        { sentence: 'He is going to start a new job in September.', translation: 'Él va a comenzar un nuevo trabajo en septiembre.' },
        { sentence: 'They are going to buy a new house next year.', translation: 'Ellos van a comprar una casa nueva el próximo año.' }
      ]
    },
    {
      id: 'g_u02_l30_02',
      title: 'Negative & Interrogative with "BE GOING TO"',
      explanation: 'Negative: Subject + am not / isn\'t / aren\'t + going to + base verb ("I\'m not going to attend"). Questions: [Am/Is/Are] + Subject + going to + base verb? ("Are you going to cook?"). Wh-Questions: "What are you going to do tonight?".',
      rulesByLang: {
        hi: 'नकारात्मक: Subject + am not / isn\'t / aren\'t + going to + base verb ("We aren\'t going to leave")। प्रश्न: Am/Is/Are + Subject + going to + base verb? ("Are you going to study?")। Wh-प्रश्न: "What are you going to do?"।',
        es: 'Negativo: Sujeto + am not/isn\'t/aren\'t + going to + verbo base. Preguntas: "¿Are you going to visit?". Wh-questions: "¿What are you going to do?".',
        fr: 'Négatif : am not / isn\'t / aren\'t going to. Question : Are you going to...?',
        de: 'Negativ: isn\'t/aren\'t going to. Frage: Are you going to...?',
        pt: 'Negativo: isn\'t/aren\'t going to. Pergunta: Are you going to...?',
        zh: '否定句：主语 + am not / isn\'t / aren\'t + going to + 动词原形（"She isn\'t going to work"）。疑问句将 be 动词提前："Are you going to travel?"。特殊疑问句："What are you going to do?"。',
        ar: 'النفي: isn\'t / aren\'t going to والسؤال: Are you going to visit؟',
        ja: '否定文は「am not / isn\'t / aren\'t + going to + 原形」、疑問文は「Be動詞 + 主語 + going to + 原形?」（Are you going to cook?）。',
        ru: 'Отрицание: isn\'t/aren\'t going to. Вопрос: Are you going to + глагол?'
      },
      examples: [
        { sentence: 'She isn\'t going to come to the party tonight.', translation: 'Ella no va a venir a la fiesta esta noche.' },
        { sentence: 'Are you going to watch the soccer game tomorrow?', translation: '¿Vas a ver el partido de fútbol mañana?' },
        { sentence: 'What are you going to make for dinner?', translation: '¿Qué vas a preparar para la cena?' }
      ]
    },
    {
      id: 'g_u02_l30_03',
      title: 'Unit 2 Capstone Integration: Present, Past & Future Synthesis',
      explanation: 'In CEFR A1, you now control all three foundational time frames: Present Simple for routines ("I live in Madrid, I work daily"), Past Simple for completed actions ("Yesterday I worked, I bought food"), and "Be Going To" for future plans ("Tomorrow I am going to travel").',
      rulesByLang: {
        hi: 'यूनिट 2 कैपस्टोन संश्लेषण: अब आप तीनों मुख्य कालखंडों पर नियंत्रण रखते हैं: वर्तमान दिनचर्या के लिए Present Simple ("I work daily"), बीते कार्यों के लिए Past Simple ("Yesterday I worked, I went"), और भविष्य की योजनाओं के लिए Be Going To ("Tomorrow I am going to travel")।',
        es: 'Síntesis de los tres tiempos fundamentales: Presente Simple (rutinas: "I work"), Pasado Simple (acciones pasadas: "I worked, I went") y Futuro con Be Going To (planes: "I am going to work").',
        fr: 'Synthèse des trois temps fondamentaux : Présent, Passé, Futur avec going to.',
        de: 'Synthese der drei Grundzeitformen: Präsens, Präteritum und Zukunft mit going to.',
        pt: 'Síntese dos três tempos verbais: Presente, Passado e Futuro com going to.',
        zh: 'Unit 2 综合时态总览：现在时表达日常规律（"I work every day"），过去时叙述已完成事件（"Yesterday I worked, I went"），以及 "be going to" 规划未来（"Tomorrow I am going to study"）。',
        ar: 'خلاصة أزمنة المستوى الأول: المضارع البسيط للروتين، الماضي البسيط للأحداث المكتملة، و be going to للخطط المستقبلية.',
        ja: 'Unit 2 の総仕上げ：現在の習慣（Present Simple）、過去の出来事（Past Simple）、未来の計画（Be going to）の3つの基本時制を完全に使いこなします。',
        ru: 'Итоговый обзор времен: Present Simple (рутина), Past Simple (прошедшие действия) и Be going to (будущие планы).'
      },
      examples: [
        { sentence: 'I usually take the train, but yesterday I drove, and tomorrow I am going to cycle.', translation: 'Normalmente tomo el tren, pero ayer conduje y mañana voy a ir en bicicleta.' },
        { sentence: 'She lived in Rome in 2020, lives in London now, and is going to move to Berlin next year.', translation: 'Vivió en Roma en 2020, vive en Londres ahora y se va a mudar a Berlín el próximo año.' },
        { sentence: 'Did you finish your work yesterday? — Yes, so today I am going to relax.', translation: '¿Terminaste tu trabajo ayer? — Sí, así que hoy voy a descansar.' }
      ]
    }
    ]
  },

  // SECTION 6: Common Learner Mistakes (5 items)
  commonMistakes: [
    {
      id: 'cm_u02_l30_01',
      incorrect: 'I am going to visiting my aunt.',
      correct: 'I am going to visit my aunt.',
      explanation: 'Always use the base form (bare infinitive) "visit" after "going to", never "-ing".',
      explanationByLang: {
        hi: '"going to" के बाद हमेशा क्रिया का मूल रूप "visit" आता है, "visiting" नहीं।',
        es: 'Usa el verbo base después de "going to": "going to visit", nunca "going to visiting".',
        fr: 'Utilisez le verbe à la base : "going to visit".',
        de: 'Verwenden Sie den Infinitiv: "going to visit".',
        pt: 'Use a forma base: "going to visit".',
        zh: 'going to 后面接动词原形，应说 "going to visit"，不可加 -ing。',
        ar: 'بعد going to نستخدم المصدر بدون ing: going to visit.',
        ja: '"going to" の後は動詞の原形にします（"going to visit"）。',
        ru: 'После "going to" используется начальная форма глагола: "going to visit".'
      }
    },
    {
      id: 'cm_u02_l30_02',
      incorrect: 'She going to buy a new car.',
      correct: 'She is going to buy a new car.',
      explanation: 'Do NOT omit the auxiliary verb "to be" (is/am/are). Always say "She is going to...".',
      explanationByLang: {
        hi: 'Be क्रिया (is/am/are) को न भूलें। "She is going to..." कहें।',
        es: 'No olvides el verbo "to be": "She is going to buy", no "She going to buy".',
        fr: 'N\'oubliez pas "is" : "She is going to buy".',
        de: 'Vergessen Sie nicht das "is": "She is going to buy".',
        pt: 'Não esqueça o "is": "She is going to buy".',
        zh: '切勿遗漏 be 动词，必须说 "She is going to buy"。',
        ar: 'لا تنسَ استخدام فعل الكينونة is: She is going to buy.',
        ja: 'be動詞を忘れないでください。"She is going to buy" と言います。',
        ru: 'Не забывайте глагол "to be": "She is going to buy".'
      }
    },
    {
      id: 'cm_u02_l30_03',
      incorrect: 'I am go to travel next week.',
      correct: 'I am going to travel next week.',
      explanation: 'The structure requires "going to", not "go to".',
      explanationByLang: {
        hi: 'सही संरचना "I am going to travel" है, "I am go to" नहीं।',
        es: 'La estructura correcta es "am going to travel", no "am go to".',
        fr: 'Dites "I am going to travel".',
        de: 'Es heißt "I am going to travel".',
        pt: 'Diga "I am going to travel".',
        zh: '句型是 "am going to travel"，不能漏掉 -ing 写成 "am go to"。',
        ar: 'التركيب الصحيح هو I am going to travel.',
        ja: '「〜する予定」は "I am going to travel" です。',
        ru: 'Правильно: "I am going to travel".'
      }
    },
    {
      id: 'cm_u02_l30_04',
      incorrect: 'Are you going to next year?',
      correct: 'What are you going to do next year?',
      explanation: '"Going to" must always be followed by a main action verb (like "do", "travel", "study").',
      explanationByLang: {
        hi: '"going to" के बाद एक मुख्य क्रिया (जैसे do, study) होना आवश्यक है।',
        es: 'Siempre se necesita un verbo principal tras "going to": "¿What are you going to do next year?".',
        fr: 'Il faut un verbe principal après "going to".',
        de: 'Nach "going to" muss ein Vollverb stehen.',
        pt: 'É necessário um verbo de ação após "going to".',
        zh: '"going to" 后面必须跟一个动词（如 do, visit, travel）。',
        ar: 'يجب أن يتبع going to فعل أساسي مثل do أو travel.',
        ja: '"going to" の後には必ず本動詞（do や study など）を置きます。',
        ru: 'После "going to" обязательно должен следовать смысловой глагол.'
      }
    },
    {
      id: 'cm_u02_l30_05',
      incorrect: 'It is going rain.',
      correct: 'It is going to rain.',
      explanation: 'Do not omit the particle "to" before the base verb: "going TO rain".',
      explanationByLang: {
        hi: '"to" को न छोड़ें: "It is going to rain" कहें।',
        es: 'No olvides la partícula "to": "It is going to rain".',
        fr: 'N\'oubliez pas "to" : "It is going to rain".',
        de: 'Vergessen Sie nicht das "to": "It is going to rain".',
        pt: 'Não esqueça o "to": "It is going to rain".',
        zh: '千万不要漏掉介词 "to"，必须说 "It is going to rain"。',
        ar: 'لا تنسَ حرف to: It is going to rain.',
        ja: '"to" を抜かさないでください。"It is going to rain" です。',
        ru: 'Не пропускайте частицу "to": "It is going to rain".'
      }
    }
  ],

  // SECTION 7: Realistic Dialogues (3 items)
  dialogues: [
    {
      id: 'd_u02_l30_01',
      title: 'Planning the Upcoming Weekend',
      context: 'Maya and Julian discuss their upcoming weekend plans and weather forecast.',
      turns: [
        {
          speaker: 'Maya',
          text: 'Julian, do you have any plans for this Saturday?',
          translationByLang: {
            hi: 'जूलियन, क्या इस शनिवार के लिए आपकी कोई योजना है?',
            es: 'Julian, ¿tienes algún plan para este sábado?'
          },
          audioId: 'en_a1_u02_l30_d01_01'
        },
        {
          speaker: 'Julian',
          text: 'Yes! My friends and I are going to rent mountain bikes and ride through the pine forest. The weather forecast says it is going to be clear and sunny.',
          translationByLang: {
            hi: 'हाँ! मैं और मेरे दोस्त माउंटेन बाइक किराए पर लेने और चीड़ के जंगल में सवारी करने जा रहे हैं। मौसम के पूर्वानुमान का कहना है कि आसमान साफ और धूप खिली रहेगी।',
            es: '¡Sí! Mis amigos y yo vamos a alquilar bicicletas de montaña y recorrer el bosque de pinos. El pronóstico del tiempo dice que va a estar despejado y soleado.'
          },
          audioId: 'en_a1_u02_l30_d01_02'
        },
        {
          speaker: 'Maya',
          text: 'That sounds amazing! Are you going to camp there overnight?',
          translationByLang: {
            hi: 'यह अद्भुत लगता है! क्या आप रात भर वहां कैंप करने जा रहे हैं?',
            es: '¡Suena fantástico! ¿Van a acampar allí toda la noche?'
          },
          audioId: 'en_a1_u02_l30_d01_03'
        },
        {
          speaker: 'Julian',
          text: 'No, we aren\'t going to camp. We are going to return home in the evening and have a barbecue dinner in my garden.',
          translationByLang: {
            hi: 'नहीं, हम कैंप नहीं करने जा रहे हैं। हम शाम को घर लौटेंगे और मेरे बगीचे में बारबेक्यू डिनर करेंगे।',
            es: 'No, no vamos a acampar. Vamos a volver a casa por la tarde y hacer una barbacoa en mi jardín.'
          },
          audioId: 'en_a1_u02_l30_d01_04'
        }
      ]
    },
    {
      id: 'd_u02_l30_02',
      title: 'Future Goals & Learning English',
      context: 'Teacher Laura and student Ahmed talk about long-term goals after completing CEFR A1.',
      turns: [
        {
          speaker: 'Laura',
          text: 'Congratulations Ahmed on finishing your A1 English course! What are your next learning goals?',
          translationByLang: {
            hi: 'अहमद, अपना A1 अंग्रेज़ी कोर्स पूरा करने पर बधाई! आपके अगले सीखने के लक्ष्य क्या हैं?',
            es: '¡Felicidades Ahmed por terminar tu curso de inglés A1! ¿Cuáles son tus próximos objetivos?'
          },
          audioId: 'en_a1_u02_l30_d02_01'
        },
        {
          speaker: 'Ahmed',
          text: 'Thank you teacher Laura! Next month, I am going to start Level A2. I want to speak English fluently so I can work in international logistics.',
          translationByLang: {
            hi: 'धन्यवाद शिक्षिका लौरा! अगले महीने, मैं लेवल A2 शुरू करने जा रहा हूँ। मैं धाराप्रवाह अंग्रेजी बोलना चाहता हूँ ताकि मैं अंतर्राष्ट्रीय लॉजिस्टिक्स में काम कर सकूँ।',
            es: '¡Muchas gracias profesora Laura! El próximo mes voy a empezar el nivel A2. Quiero hablar inglés con fluidez para poder trabajar en logística internacional.'
          },
          audioId: 'en_a1_u02_l30_d02_02'
        },
        {
          speaker: 'Laura',
          text: 'That is a fantastic ambition. Are you also going to practice speaking with language partners?',
          translationByLang: {
            hi: 'यह एक शानदार महत्वाकांक्षा है। क्या आप भाषा सहयोगियों के साथ बोलने का अभ्यास भी करने जा रहे हैं?',
            es: 'Esa es una ambición fantástica. ¿Vas también a practicar la conversación con compañeros?'
          },
          audioId: 'en_a1_u02_l30_d02_03'
        },
        {
          speaker: 'Ahmed',
          text: 'Yes, I am going to join an online conversation club every Tuesday and Thursday evening.',
          translationByLang: {
            hi: 'हाँ, मैं हर मंगलवार और गुरुवार की शाम को एक ऑनलाइन वार्तालाप क्लब में शामिल होने जा रहा हूँ।',
            es: 'Sí, me voy a unir a un club de conversación en línea todos los martes y jueves por la noche.'
          },
          audioId: 'en_a1_u02_l30_d02_04'
        }
      ]
    },
    {
      id: 'd_u02_l30_03',
      title: 'Capstone Review: Retrospect and Future Horizons',
      context: 'Two learners, Gabriel and Sophia, reflect on their journey from Lesson 1 to Lesson 30.',
      turns: [
        {
          speaker: 'Gabriel',
          text: 'Sophia, look how much we learned! In Unit 1 we learned greetings, numbers, and daily routines.',
          translationByLang: {
            hi: 'सोफिया, देखो हमने कितना कुछ सीखा! यूनिट 1 में हमने अभिवादन, संख्याएँ और दैनिक दिनचर्या सीखी थी।',
            es: 'Sophia, ¡mira cuánto hemos aprendido! En la Unidad 1 aprendimos saludos, números y rutinas diarias.'
          },
          audioId: 'en_a1_u02_l30_d03_01'
        },
        {
          speaker: 'Sophia',
          text: 'And in Unit 2, we learned how to buy clothes, order restaurant food, navigate towns, describe past events, and talk about future plans!',
          translationByLang: {
            hi: 'और यूनिट 2 में, हमने कपड़े खरीदना, रेस्तरां का खाना ऑर्डर करना, शहरों में रास्ता पूछना, पुरानी घटनाओं का वर्णन करना और भविष्य की योजनाओं के बारे में बात करना सीखा!',
            es: '¡Y en la Unidad 2 aprendimos a comprar ropa, pedir comida en restaurantes, movernos por la ciudad, describir el pasado y hablar de planes futuros!'
          },
          audioId: 'en_a1_u02_l30_d03_02'
        },
        {
          speaker: 'Gabriel',
          text: 'I feel so much more confident speaking in English now. We are definitely ready for Level A2!',
          translationByLang: {
            hi: 'अब मैं अंग्रेजी में बोलने में बहुत अधिक आत्मविश्वास महसूस करता हूँ। हम निश्चित रूप से लेवल A2 के लिए तैयार हैं!',
            es: 'Ahora me siento mucho más seguro hablando en inglés. ¡Definitivamente estamos listos para el nivel A2!'
          },
          audioId: 'en_a1_u02_l30_d03_03'
        },
        {
          speaker: 'Sophia',
          text: 'Let\'s celebrate our achievement today and keep practicing every day!',
          translationByLang: {
            hi: 'आइए आज अपनी इस उपलब्धि का जश्न मनाएं और हर दिन अभ्यास जारी रखें!',
            es: '¡Celebremos nuestro logro hoy y sigamos practicando todos los días!'
          },
          audioId: 'en_a1_u02_l30_d03_04'
        }
      ]
    }
  ],

  // SECTION 8: Practice Exercises (15 items)
  practiceExercises: [
    {
      id: 'ex_u02_l30_p01',
      lessonId: 'lesson_a1_2_30',
      type: 'multiple_choice',
      prompt: 'Complete the sentence: "I _______ to travel to Japan next spring."',
      options: [
        { id: 'a', text: 'am going', isCorrect: true },
        { id: 'b', text: 'going', isCorrect: false },
        { id: 'c', text: 'am go', isCorrect: false },
        { id: 'd', text: 'is going', isCorrect: false }
      ],
      explanation: 'Subject "I" takes "am going".'
    },
    {
      id: 'ex_u02_l30_p02',
      lessonId: 'lesson_a1_2_30',
      type: 'fill_in_blank',
      prompt: 'Fill in the blank: "She is going to _______ (start) university in September."',
      correctAnswer: 'start',
      options: [
        { id: 'opt_1', text: 'start', isCorrect: true },
        { id: 'opt_2', text: 'starts', isCorrect: false },
        { id: 'opt_3', text: 'starting', isCorrect: false },
        { id: 'opt_4', text: 'started', isCorrect: false }
      ],
      explanation: 'After "is going to", use base verb "start".'
    },
    {
      id: 'ex_u02_l30_p03',
      lessonId: 'lesson_a1_2_30',
      type: 'multiple_choice',
      prompt: 'Which future question is grammatically correct?',
      options: [
        { id: 'a', text: 'What are you going to do this weekend?', isCorrect: true },
        { id: 'b', text: 'What you are going to do?', isCorrect: false },
        { id: 'c', text: 'What do you going to do?', isCorrect: false },
        { id: 'd', text: 'What are you go to do?', isCorrect: false }
      ],
      explanation: '"What are you going to do...?" has the correct inverted auxiliary verb order.'
    },
    {
      id: 'ex_u02_l30_p04',
      lessonId: 'lesson_a1_2_30',
      type: 'reorder',
      prompt: 'Arrange the words to make a future intention:',
      words: ['We', 'are', 'going', 'to', 'visit', 'our', 'grandparents.'],
      correctOrder: ['We', 'are', 'going', 'to', 'visit', 'our', 'grandparents.'],
      explanation: 'Subject + are going to + base verb + object.'
    },
    {
      id: 'ex_u02_l30_p05',
      lessonId: 'lesson_a1_2_30',
      type: 'match_pairs',
      prompt: 'Match subject with the correct form of "be going to":',
      pairs: [
        { id: 'p1', left: 'I', right: 'am going to' },
        { id: 'p2', left: 'He / She / It', right: 'is going to' },
        { id: 'p3', left: 'You / We / They', right: 'are going to' },
        { id: 'p4', left: 'Negative (We)', right: 'aren\'t going to' }
      ]
    },
    {
      id: 'ex_u02_l30_p06',
      lessonId: 'lesson_a1_2_30',
      type: 'fill_in_blank',
      prompt: 'Complete with the negative: "He _______ (not attend) the meeting tomorrow because he is traveling."',
      correctAnswer: 'isn\'t going to attend',
      options: [
        { id: 'opt_1', text: 'isn\'t going to attend', isCorrect: true },
        { id: 'opt_2', text: 'not going to attend', isCorrect: false },
        { id: 'opt_3', text: 'doesn\'t going to attend', isCorrect: false },
        { id: 'opt_4', text: 'won\'t attend to', isCorrect: false }
      ],
      explanation: '"isn\'t going to attend" is the correct negative form.'
    },
    {
      id: 'ex_u02_l30_p07',
      lessonId: 'lesson_a1_2_30',
      type: 'multiple_choice',
      prompt: 'Look at the heavy black clouds! What is going to happen?',
      options: [
        { id: 'a', text: 'It is going to rain.', isCorrect: true },
        { id: 'b', text: 'It was rain.', isCorrect: false },
        { id: 'c', text: 'It rains yesterday.', isCorrect: false },
        { id: 'd', text: 'It is rain to go.', isCorrect: false }
      ],
      explanation: '"It is going to rain" predicts future events from current evidence.'
    },
    {
      id: 'ex_u02_l30_p08',
      lessonId: 'lesson_a1_2_30',
      type: 'reorder',
      prompt: 'Order the words to ask a Yes/No future question:',
      words: ['Are', 'you', 'going', 'to', 'buy', 'that', 'car?'],
      correctOrder: ['Are', 'you', 'going', 'to', 'buy', 'that', 'car?'],
      explanation: 'Are you going to buy that car?'
    },
    {
      id: 'ex_u02_l30_p09',
      lessonId: 'lesson_a1_2_30',
      type: 'multiple_choice',
      prompt: 'Select the sentence with accurate time marker usage:',
      options: [
        { id: 'a', text: 'They are going to move next month.', isCorrect: true },
        { id: 'b', text: 'They are going to move the next month ago.', isCorrect: false },
        { id: 'c', text: 'They moved next month.', isCorrect: false },
        { id: 'd', text: 'They going to move next month.', isCorrect: false }
      ],
      explanation: '"They are going to move next month" correctly expresses future intention.'
    },
    {
      id: 'ex_u02_l30_p10',
      lessonId: 'lesson_a1_2_30',
      type: 'fill_in_blank',
      prompt: 'Fill in the blank: "I am going to _______ (cook) a special Italian dinner tonight."',
      correctAnswer: 'cook',
      options: [
        { id: 'opt_1', text: 'cook', isCorrect: true },
        { id: 'opt_2', text: 'cooked', isCorrect: false },
        { id: 'opt_3', text: 'cooking', isCorrect: false },
        { id: 'opt_4', text: 'cooks', isCorrect: false }
      ],
      explanation: 'Base form "cook" follows "going to".'
    },
    {
      id: 'ex_u02_l30_p11',
      lessonId: 'lesson_a1_2_30',
      type: 'match_pairs',
      prompt: 'Match tense with its communicative function:',
      pairs: [
        { id: 'p1', left: 'Present Simple ("I work")', right: 'Daily habits and general truths' },
        { id: 'p2', left: 'Past Simple ("I worked")', right: 'Completed events in the past' },
        { id: 'p3', left: 'Be Going To ("I am going to work")', right: 'Pre-planned future intentions' },
        { id: 'p4', left: 'Modal Can ("I can speak")', right: 'Physical abilities and permissions' }
      ]
    },
    {
      id: 'ex_u02_l30_p12',
      lessonId: 'lesson_a1_2_30',
      type: 'multiple_choice',
      prompt: 'Which sentence has an ERROR?',
      options: [
        { id: 'a', text: 'She is going to buying a house.', isCorrect: true },
        { id: 'b', text: 'She is going to buy a house.', isCorrect: false },
        { id: 'c', text: 'She isn\'t going to buy a house.', isCorrect: false },
        { id: 'd', text: 'Is she going to buy a house?', isCorrect: false }
      ],
      explanation: '"going to buying" is an error; it must be "going to buy".'
    },
    {
      id: 'ex_u02_l30_p13',
      lessonId: 'lesson_a1_2_30',
      type: 'fill_in_blank',
      prompt: 'Complete the short answer: "Are you going to study tonight?" — "Yes, I _______."',
      correctAnswer: 'am',
      options: [
        { id: 'opt_1', text: 'am', isCorrect: true },
        { id: 'opt_2', text: 'do', isCorrect: false },
        { id: 'opt_3', text: 'will', isCorrect: false },
        { id: 'opt_4', text: 'have', isCorrect: false }
      ],
      explanation: 'Short answer matches the auxiliary "am": "Yes, I am".'
    },
    {
      id: 'ex_u02_l30_p14',
      lessonId: 'lesson_a1_2_30',
      type: 'reorder',
      prompt: 'Arrange the sentence to express graduation milestone:',
      words: ['He', 'is', 'going', 'to', 'graduate', 'next', 'spring.'],
      correctOrder: ['He', 'is', 'going', 'to', 'graduate', 'next', 'spring.'],
      explanation: 'He is going to graduate next spring.'
    },
    {
      id: 'ex_u02_l30_p15',
      lessonId: 'lesson_a1_2_30',
      type: 'multiple_choice',
      prompt: 'How do you say: "हम अगले हफ्ते मिलने वाले हैं"?',
      options: [
        { id: 'a', text: 'We are going to meet next week.', isCorrect: true },
        { id: 'b', text: 'We meet next week ago.', isCorrect: false },
        { id: 'c', text: 'We was meet next week.', isCorrect: false },
        { id: 'd', text: 'We did going to meet.', isCorrect: false }
      ],
      explanation: '"We are going to meet next week" expresses future planned meeting.'
    }
  ],

  // SECTION 9: Review Exercises (5 items)
  reviewExercises: [
    {
      id: 'ex_u02_l30_r01',
      lessonId: 'lesson_a1_2_30',
      type: 'multiple_choice',
      prompt: 'Select the sentence combining Past Simple and Future "going to" correctly:',
      options: [
        { id: 'a', text: 'Yesterday I finished my work, and tomorrow I am going to relax.', isCorrect: true },
        { id: 'b', text: 'Yesterday I finish work and tomorrow I am relax.', isCorrect: false },
        { id: 'c', text: 'Yesterday I was finished and tomorrow I going to relax.', isCorrect: false },
        { id: 'd', text: 'Yesterday I did finish and tomorrow I relaxed.', isCorrect: false }
      ],
      explanation: '"finished" (past) and "am going to relax" (future) are both accurate.'
    },
    {
      id: 'ex_u02_l30_r02',
      lessonId: 'lesson_a1_2_30',
      type: 'fill_in_blank',
      prompt: 'Fill in the blank: "Where _______ you going to stay during your holiday in Spain?"',
      correctAnswer: 'are',
      options: [
        { id: 'opt_1', text: 'are', isCorrect: true },
        { id: 'opt_2', text: 'is', isCorrect: false },
        { id: 'opt_3', text: 'do', isCorrect: false },
        { id: 'opt_4', text: 'did', isCorrect: false }
      ],
      explanation: 'Subject "you" takes "are".'
    },
    {
      id: 'ex_u02_l30_r03',
      lessonId: 'lesson_a1_2_30',
      type: 'match_pairs',
      prompt: 'Match the question with the response:',
      pairs: [
        { id: 'p1', left: 'What are you going to cook?', right: 'Homemade pasta with pesto.' },
        { id: 'p2', left: 'Where are they going to travel?', right: 'To Greece and Turkey.' },
        { id: 'p3', left: 'When is he going to arrive?', right: 'Tomorrow evening at 7 PM.' },
        { id: 'p4', left: 'Are you going to join the gym?', right: 'Yes, on Monday morning.' }
      ]
    },
    {
      id: 'ex_u02_l30_r04',
      lessonId: 'lesson_a1_2_30',
      type: 'reorder',
      prompt: 'Order the words to celebrate curriculum completion:',
      words: ['I', 'am', 'ready', 'to', 'continue', 'to', 'Level', 'A2.'],
      correctOrder: ['I', 'am', 'ready', 'to', 'continue', 'to', 'Level', 'A2.'],
      explanation: 'I am ready to continue to Level A2.'
    },
    {
      id: 'ex_u02_l30_r05',
      lessonId: 'lesson_a1_2_30',
      type: 'multiple_choice',
      prompt: 'Which future expression means "the day after today"?',
      options: [
        { id: 'a', text: 'Tomorrow', isCorrect: true },
        { id: 'b', text: 'Yesterday', isCorrect: false },
        { id: 'c', text: 'Last night', isCorrect: false },
        { id: 'd', text: 'Two days ago', isCorrect: false }
      ],
      explanation: '"Tomorrow" means the day after today.'
    }
  ],

  // SECTION 10: Assessment Exercises (5 items)
  assessmentExercises: [
    {
      id: 'ex_u02_l30_a01',
      lessonId: 'lesson_a1_2_30',
      type: 'multiple_choice',
      prompt: 'Choose the sentence with flawless future grammar:',
      options: [
        { id: 'a', text: 'We are going to celebrate our success with all our friends.', isCorrect: true },
        { id: 'b', text: 'We going to celebrate our success.', isCorrect: false },
        { id: 'c', text: 'We are go to celebrating our success.', isCorrect: false },
        { id: 'd', text: 'We are going celebrate our success.', isCorrect: false }
      ],
      explanation: '"We are going to celebrate..." satisfies all structural rules.'
    },
    {
      id: 'ex_u02_l30_a02',
      lessonId: 'lesson_a1_2_30',
      type: 'fill_in_blank',
      prompt: 'Complete the sentence: "Look at the dark clouds, it is going _______ rain soon!"',
      correctAnswer: 'to',
      options: [
        { id: 'opt_1', text: 'to', isCorrect: true },
        { id: 'opt_2', text: 'for', isCorrect: false },
        { id: 'opt_3', text: 'in', isCorrect: false },
        { id: 'opt_4', text: 'at', isCorrect: false }
      ],
      explanation: 'Structure requires particle "to": "going to rain".'
    },
    {
      id: 'ex_u02_l30_a03',
      lessonId: 'lesson_a1_2_30',
      type: 'reorder',
      prompt: 'Reorder the words to form a future question:',
      words: ['What', 'are', 'your', 'plans', 'for', 'next', 'year?'],
      correctOrder: ['What', 'are', 'your', 'plans', 'for', 'next', 'year?'],
      explanation: 'What are your plans for next year?'
    },
    {
      id: 'ex_u02_l30_a04',
      lessonId: 'lesson_a1_2_30',
      type: 'multiple_choice',
      prompt: 'What have you completed across Lessons 1 through 30?',
      options: [
        { id: 'a', text: 'Full CEFR A1 Foundational English Curriculum (Units 1 & 2)', isCorrect: true },
        { id: 'b', text: 'Only business writing', isCorrect: false },
        { id: 'c', text: 'Only pronunciation drills', isCorrect: false },
        { id: 'd', text: 'Advanced academic literature', isCorrect: false }
      ],
      explanation: 'Lessons 1–30 constitute the complete CEFR A1 curriculum.'
    },
    {
      id: 'ex_u02_l30_a05',
      lessonId: 'lesson_a1_2_30',
      type: 'match_pairs',
      prompt: 'Match English milestone chunk with its meaning:',
      pairs: [
        { id: 'p1', left: 'travel abroad', right: 'Visit a foreign country' },
        { id: 'p2', left: 'move house', right: 'Change home residence' },
        { id: 'p3', left: 'pass the exam', right: 'Achieve passing grade' },
        { id: 'p4', left: 'graduate', right: 'Complete an academic degree' }
      ]
    }
  ]
};
