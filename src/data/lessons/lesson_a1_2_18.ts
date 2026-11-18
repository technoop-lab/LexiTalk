import { DetailedLessonData } from '../../types';

export const LESSON_A1_2_18_DATA: DetailedLessonData = {
  id: 'lesson_a1_2_18',
  unitId: 'unit_a1_2',
  title: 'Morning to Night: Extended Daily Routines & Time Sequencing',
  cefr: 'A1',
  icon: '⏰',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Describing Morning-to-Night Routines with Discourse Connectors',
    description: 'Master time sequence connectors (First, Then, After that, Next, Finally) alongside present simple habitual actions. Learn to describe complete morning, working, evening, and bedtime routines, express frequency and timing, and ask adult peers about their daily schedules.',
    descriptionsByLang: {
      hi: 'समय क्रम संयोजकों (First, Then, After that, Next, Finally) और प्रेजेंट सिंपल के साथ सुबह से रात तक की दिनचर्या का धाराप्रवाह वर्णन करना सीखें। समय, काम के घंटे और दैनिक आदतों पर चर्चा करें।',
      es: 'Aprende a narrar tu rutina diaria de la mañana a la noche utilizando conectores temporales (First, Then, After that, Next, Finally) y el presente simple habitual.',
      fr: 'Apprenez à décrire votre routine quotidienne du matin au soir avec des connecteurs temporels.',
      de: 'Lernen Sie, Ihren Tagesablauf von morgens bis abends mit Zeitverbindern zu beschreiben.',
      pt: 'Aprenda a narrar sua rotina diária usando conectores temporais e o presente simples.',
      zh: '掌握时间顺序连接词（First, Then, After that, Next, Finally）以及一般现在时，学会描述从早到晚的完整日常生活作息。',
      ar: 'تعلم سرد روتينك اليومي من الصباح إلى المساء باستخدام روابط التسلسل الزمني والمضارع البسيط.',
      ja: '時間の順序を表す接続詞（First, Then, After that, Next, Finally）と現在形を用いて、朝から晩までの日常ルーティンを論理的に説明する方法を学びます。',
      ru: 'Научитесь описывать распорядок дня с утра до вечера, используя временные связки и Present Simple.'
    },
    canDoStatements: [
      'Narrate a complete day using time sequence connectors: "First I wake up, then I take a shower..."',
      'Describe working day schedules: "I arrive at work at 8:30 and check emails"',
      'Discuss evening relaxation and bedtime habits: "After dinner, I read a book and go to sleep"',
      'Ask others about their schedules: "What time do you usually finish work?"',
      'Connect multiple routine clauses naturally without repetitive sentence structures'
    ],
    canDoByLang: {
      hi: [
        'समय क्रम संयोजकों से पूरे दिन का वर्णन करना: "First, Then, After that, Finally"',
        'काम और दिनचर्या के समय की व्याख्या करना: "I arrive at work at 8:30"',
        'शाम और सोने की आदतों पर चर्चा करना',
        'दूसरों से उनकी दिनचर्या के बारे में पूछना'
      ],
      es: [
        'Narrar un día completo usando conectores: "First, Then, After that, Finally"',
        'Describir horarios de trabajo y descanso',
        'Preguntar a otros sobre sus rutinas habituales'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (25 items)
  vocabulary: [
    {
      id: 'v_u02_l18_wake_up',
      word: 'wake up (wakes up)',
      phonetic: '/weɪk ʌp/',
      meaning: 'To stop sleeping and become conscious',
      translationsByLang: { hi: 'जागना / नींद से जागना', es: 'despertarse', fr: 'se réveiller', de: 'aufwachen', pt: 'acordar', zh: '醒来', ar: 'يستيقظ', ja: '起きる / 目が覚める', ru: 'просыпаться' },
      exampleSentence: 'I wake up at six o\'clock every morning.',
      exampleTranslationByLang: { hi: 'मैं हर सुबह छह बजे जागता हूँ।', es: 'Me despierto a las seis en punto todas las mañanas.' },
      audioText: 'wake up and wakes up',
      audioId: 'en_a1_u02_l18_v_wake_up',
      slowAudioId: 'en_a1_u02_l18_v_wake_up_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⏰',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_get_up',
      word: 'get out of bed / get up',
      phonetic: '/ɡet ʌp/',
      meaning: 'To rise physically from bed after waking',
      translationsByLang: { hi: 'बिस्तर से उठना', es: 'levantarse de la cama', fr: 'se lever', de: 'aufstehen', pt: 'levantar-se', zh: '起床', ar: 'ينهض من الفراش', ja: 'ベッドから出る / 起き上がる', ru: 'вставать с постели' },
      exampleSentence: 'He gets up ten minutes after his alarm rings.',
      exampleTranslationByLang: { hi: 'वह अलार्म बजने के दस मिनट बाद उठता है।', es: 'Él se levanta diez minutos después de que suena la alarma.' },
      audioText: 'get out of bed and get up',
      audioId: 'en_a1_u02_l18_v_get_up',
      slowAudioId: 'en_a1_u02_l18_v_get_up_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🛏️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_take_shower',
      word: 'take a shower / have a shower',
      phonetic: '/teɪk ə ˈʃaʊ.ɚ/',
      meaning: 'To wash oneself standing under a spray of water',
      translationsByLang: { hi: 'नहाना / शावर लेना', es: 'ducharse / tomar una ducha', fr: 'prendre une douche', de: 'duschen / eine Dusche nehmen', pt: 'tomar banho / tomar uma ducha', zh: '洗淋浴 / 洗澡', ar: 'يستحم / يأخذ دش', ja: 'シャワーを浴びる', ru: 'принимать душ' },
      exampleSentence: 'I always take a warm shower before breakfast.',
      exampleTranslationByLang: { hi: 'मैं हमेशा नाश्ते से पहले गर्म पानी से नहाता हूँ।', es: 'Siempre me doy una ducha tibia antes del desayuno.' },
      audioText: 'take a shower and have a shower',
      audioId: 'en_a1_u02_l18_v_take_shower',
      slowAudioId: 'en_a1_u02_l18_v_take_shower_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚿',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_brush_teeth',
      word: 'brush teeth',
      phonetic: '/brʌʃ tiːθ/',
      meaning: 'To clean one\'s teeth with a toothbrush and paste',
      translationsByLang: { hi: 'दाँत साफ करना / ब्रश करना', es: 'cepillarse los dientes / lavarse los dientes', fr: 'se brosser les dents', de: 'Zähne putzen', pt: 'escovar os dentes', zh: '刷牙', ar: 'ينظف أسنانه بالفرشاة', ja: '歯を磨く', ru: 'чистить зубы' },
      exampleSentence: 'She brushes her teeth twice a day.',
      exampleTranslationByLang: { hi: 'वह दिन में दो बार अपने दाँत ब्रश करती है।', es: 'Ella se cepilla los dientes dos veces al día.' },
      audioText: 'brush teeth',
      audioId: 'en_a1_u02_l18_v_brush_teeth',
      slowAudioId: 'en_a1_u02_l18_v_brush_teeth_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🪥',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_get_dressed',
      word: 'get dressed',
      phonetic: '/ɡet drest/',
      meaning: 'To put on clothes',
      translationsByLang: { hi: 'कपड़े पहनना / तैयार होना', es: 'vestirse / ponerse la ropa', fr: 's\'habiller', de: 'sich anziehen', pt: 'vestir-se / arrumar-se', zh: '穿衣服 / 穿好衣服', ar: 'يرتدي ملابسه', ja: '服を着る / 着替える', ru: 'одеваться' },
      exampleSentence: 'I get dressed quickly and comb my hair.',
      exampleTranslationByLang: { hi: 'मैं जल्दी से कपड़े पहनता हूँ और अपने बाल बनाता हूँ।', es: 'Me visto rápidamente y me peino el pelo.' },
      audioText: 'get dressed',
      audioId: 'en_a1_u02_l18_v_get_dressed',
      slowAudioId: 'en_a1_u02_l18_v_get_dressed_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👔',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_make_breakfast',
      word: 'make breakfast',
      phonetic: '/meɪk ˈbrek.fəst/',
      meaning: 'To prepare the morning meal',
      translationsByLang: { hi: 'नाश्ता बनाना', es: 'hacer el desayuno / preparar el desayuno', fr: 'préparer le petit-déjeuner', de: 'Frühstück machen', pt: 'fazer o café da manhã', zh: '做早餐 / 做早饭', ar: 'يحضر وجبة الإفطار', ja: '朝食を作る', ru: 'готовить завтрак' },
      exampleSentence: 'He makes fresh breakfast and drinks black coffee.',
      exampleTranslationByLang: { hi: 'वह ताजा नाश्ता बनाता है और ब्लैक कॉफी पीता है।', es: 'Él prepara un desayuno fresco y toma café solo.' },
      audioText: 'make breakfast',
      audioId: 'en_a1_u02_l18_v_make_breakfast',
      slowAudioId: 'en_a1_u02_l18_v_make_breakfast_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍳',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_leave_house',
      word: 'leave the house',
      phonetic: '/liːv ðə haʊs/',
      meaning: 'To exit one\'s home to travel to work or study',
      translationsByLang: { hi: 'घर से निकलना', es: 'salir de casa', fr: 'quitter la maison / partir de chez soi', de: 'das Haus verlassen', pt: 'sair de casa', zh: '出门 / 离开家', ar: 'يغادر المنزل', ja: '家を出る', ru: 'выходить из дома' },
      exampleSentence: 'We leave the house at seven thirty.',
      exampleTranslationByLang: { hi: 'हम साढ़े सात बजे घर से निकलते हैं।', es: 'Salimos de casa a las siete y media.' },
      audioText: 'leave the house',
      audioId: 'en_a1_u02_l18_v_leave_house',
      slowAudioId: 'en_a1_u02_l18_v_leave_house_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚪',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_catch_bus',
      word: 'catch the bus / take the train',
      phonetic: '/kætʃ ðə bʌs/',
      meaning: 'To board scheduled public transit in time',
      translationsByLang: { hi: 'बस पकड़ना / ट्रेन लेना', es: 'coger el autobús / tomar el tren', fr: 'prendre le bus / attraper le train', de: 'den Bus erwischen / nehmen', pt: 'pegar o ônibus / pegar o trem', zh: '赶公共汽车 / 乘公交车', ar: 'يلحق بالحافلة / يركب الباص', ja: 'バスに乗る / 間に合う', ru: 'сесть на автобус / успеть на поезд' },
      exampleSentence: 'I catch the bus at eight o\'clock.',
      exampleTranslationByLang: { hi: 'मैं आठ बजे बस पकड़ता हूँ।', es: 'Cojo el autobús a las ocho en punto.' },
      audioText: 'catch the bus and take the train',
      audioId: 'en_a1_u02_l18_v_catch_bus',
      slowAudioId: 'en_a1_u02_l18_v_catch_bus_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚌',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_arrive_work',
      word: 'arrive at work / get to work',
      phonetic: '/əˈraɪv æt wɝːk/',
      meaning: 'To reach the workplace',
      translationsByLang: { hi: 'काम पर पहुँचना / ऑफिस पहुँचना', es: 'llegar al trabajo', fr: 'arriver au travail', de: 'auf der Arbeit ankommen', pt: 'chegar ao trabalho', zh: '到达工作地点 / 上班', ar: 'يصل إلى العمل', ja: '職場に着く / 出勤する', ru: 'приходить на работу' },
      exampleSentence: 'She arrives at work early every day.',
      exampleTranslationByLang: { hi: 'वह हर दिन जल्दी काम पर पहुँचती है।', es: 'Ella llega temprano al trabajo todos los días.' },
      audioText: 'arrive at work and get to work',
      audioId: 'en_a1_u02_l18_v_arrive_work',
      slowAudioId: 'en_a1_u02_l18_v_arrive_work_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏢',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_check_emails',
      word: 'check emails',
      phonetic: '/tʃek ˈiː.meɪlz/',
      meaning: 'To open and read digital work correspondence',
      translationsByLang: { hi: 'ईमेल चेक करना', es: 'revisar los correos / mirar los emails', fr: 'consulter ses e-mails', de: 'E-Mails prüfen', pt: 'verificar os e-mails / checar emails', zh: '查收邮件', ar: 'يفحص رسائل البريد الإلكتروني', ja: 'メールをチェックする', ru: 'проверять электронную почту' },
      exampleSentence: 'First, I check my work emails and write replies.',
      exampleTranslationByLang: { hi: 'पहले मैं अपने काम के ईमेल चेक करता हूँ और जवाब लिखता हूँ।', es: 'Primero reviso mis correos del trabajo y escribo respuestas.' },
      audioText: 'check emails',
      audioId: 'en_a1_u02_l18_v_check_emails',
      slowAudioId: 'en_a1_u02_l18_v_check_emails_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📧',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_have_lunch',
      word: 'have lunch / eat lunch',
      phonetic: '/hæv lʌntʃ/',
      meaning: 'To eat the midday meal',
      translationsByLang: { hi: 'दोपहर का भोजन करना / लंच करना', es: 'almorzar / comer', fr: 'déjeuner / prendre le déjeuner', de: 'zu Mittag essen', pt: 'almoçar', zh: '吃午餐 / 吃午饭', ar: 'يتناول طعام الغداء', ja: '昼食をとる / ランチを食べる', ru: 'обедать' },
      exampleSentence: 'We have lunch in the cafeteria at one o\'clock.',
      exampleTranslationByLang: { hi: 'हम एक बजे कैफेटेरिया में लंच करते हैं।', es: 'Almorzamos en la cafetería a la una en punto.' },
      audioText: 'have lunch and eat lunch',
      audioId: 'en_a1_u02_l18_v_have_lunch',
      slowAudioId: 'en_a1_u02_l18_v_have_lunch_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥪',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_finish_work',
      word: 'finish work',
      phonetic: '/ˈfɪn.ɪʃ wɝːk/',
      meaning: 'To complete one\'s working day duties',
      translationsByLang: { hi: 'काम समाप्त करना / ऑफिस खत्म करना', es: 'terminar el trabajo / salir del trabajo', fr: 'finir le travail', de: 'die Arbeit beenden / Feierabend machen', pt: 'terminar o trabalho / sair do trabalho', zh: '下班 / 完成工作', ar: 'ينهي العمل', ja: '仕事を終える / 退勤する', ru: 'заканчивать работу' },
      exampleSentence: 'I finish work at five thirty in the evening.',
      exampleTranslationByLang: { hi: 'मैं शाम को साढ़े पांच बजे काम समाप्त करता हूँ।', es: 'Termino el trabajo a las cinco y media de la tarde.' },
      audioText: 'finish work',
      audioId: 'en_a1_u02_l18_v_finish_work',
      slowAudioId: 'en_a1_u02_l18_v_finish_work_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏁',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_get_home',
      word: 'get home / arrive home',
      phonetic: '/ɡet hoʊm/',
      meaning: 'To return to one\'s house after work',
      translationsByLang: { hi: 'घर पहुँचना', es: 'llegar a casa', fr: 'rentrer chez soi / arriver à la maison', de: 'nach Hause kommen', pt: 'chegar em casa', zh: '到家 / 回到家里', ar: 'يصل إلى المنزل / يعود للبيت', ja: '家に帰る / 帰宅する', ru: 'приходить домой' },
      exampleSentence: 'He gets home at six fifteen.',
      exampleTranslationByLang: { hi: 'वह सवा छह बजे घर पहुँचता है।', es: 'Él llega a casa a las seis y cuarto.' },
      audioText: 'get home and arrive home',
      audioId: 'en_a1_u02_l18_v_get_home',
      slowAudioId: 'en_a1_u02_l18_v_get_home_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏡',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_cook_dinner',
      word: 'cook dinner',
      phonetic: '/kʊk ˈdɪn.ɚ/',
      meaning: 'To prepare hot evening food',
      translationsByLang: { hi: 'रात का खाना पकाना / डिनर बनाना', es: 'cocinar la cena / preparar la cena', fr: 'préparer le dîner / cuisiner', de: 'Abendessen kochen', pt: 'fazer o jantar / cozinhar o jantar', zh: '做晚餐 / 做晚饭', ar: 'يطهو العشاء', ja: '夕食を作る / 晩ご飯を作る', ru: 'готовить ужин' },
      exampleSentence: 'Then, we cook dinner together in the kitchen.',
      exampleTranslationByLang: { hi: 'फिर हम रसोई में मिलकर डिनर पकाते हैं।', es: 'Luego cocinamos la cena juntos en la cocina.' },
      audioText: 'cook dinner',
      audioId: 'en_a1_u02_l18_v_cook_dinner',
      slowAudioId: 'en_a1_u02_l18_v_cook_dinner_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍲',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_wash_dishes',
      word: 'wash the dishes / do the dishes',
      phonetic: '/wɑːʃ ðə ˈdɪʃ.ɪz/',
      meaning: 'To clean plates, pots, and utensils after a meal',
      translationsByLang: { hi: 'बर्तन धोना', es: 'fregar los platos / lavar los platos', fr: 'faire la vaisselle / laver la vaisselle', de: 'abwaschen / das Geschirr spülen', pt: 'lavar a louça / lavar os pratos', zh: '洗碗 / 洗盘子', ar: 'يغسل الصحون / يجلي الأطباق', ja: '皿を洗う / 食器を洗う', ru: 'мыть посуду' },
      exampleSentence: 'I wash the dishes after dinner.',
      exampleTranslationByLang: { hi: 'मैं डिनर के बाद बर्तन धोता हूँ।', es: 'Lavo los platos después de cenar.' },
      audioText: 'wash the dishes and do the dishes',
      audioId: 'en_a1_u02_l18_v_wash_dishes',
      slowAudioId: 'en_a1_u02_l18_v_wash_dishes_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧽',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_relax',
      word: 'relax / unwind',
      phonetic: '/rɪˈlæks/',
      meaning: 'To rest and do enjoyable quiet activities',
      translationsByLang: { hi: 'आराम करना / रिलैक्स करना', es: 'relajarse / descansar', fr: 'se détendre / se relaxer', de: 'sich entspannen / ausruhen', pt: 'relaxar / descansar', zh: '放松 / 休息', ar: 'يسترخي / يستريح', ja: 'リラックスする / くつろぐ', ru: 'отдыхать / расслабляться' },
      exampleSentence: 'In the evening, I relax on the sofa.',
      exampleTranslationByLang: { hi: 'शाम को मैं सोफे पर आराम करता हूँ।', es: 'Por la noche, me relajo en el sofá.' },
      audioText: 'relax and unwind',
      audioId: 'en_a1_u02_l18_v_relax',
      slowAudioId: 'en_a1_u02_l18_v_relax_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🛋️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_read_book',
      word: 'read a book',
      phonetic: '/riːd ə bʊk/',
      meaning: 'To read literature for pleasure or study',
      translationsByLang: { hi: 'किताब पढ़ना', es: 'leer un libro', fr: 'lire un livre', de: 'ein Buch lesen', pt: 'ler um livro', zh: '看书 / 读书', ar: 'يقرأ كتاباً', ja: '本を読む', ru: 'читать книгу' },
      exampleSentence: 'She reads a book for thirty minutes before sleeping.',
      exampleTranslationByLang: { hi: 'वह सोने से पहले तीस मिनट किताब पढ़ती है।', es: 'Ella lee un libro durante treinta minutos antes de dormir.' },
      audioText: 'read a book',
      audioId: 'en_a1_u02_l18_v_read_book',
      slowAudioId: 'en_a1_u02_l18_v_read_book_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📖',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_go_to_sleep',
      word: 'go to sleep / go to bed',
      phonetic: '/ɡoʊ tuː sliːp/',
      meaning: 'To lay in bed and begin sleeping',
      translationsByLang: { hi: 'सोने जाना / सो जाना', es: 'irse a dormir / ir a la cama', fr: 'aller dormir / se coucher', de: 'schlafen gehen / ins Bett gehen', pt: 'ir dormir / ir para a cama', zh: '去睡觉 / 上床睡觉', ar: 'يخلد إلى النوم / يذهب للنوم', ja: '寝る / 眠りにつく', ru: 'ложиться спать / засыпать' },
      exampleSentence: 'Finally, I go to sleep at eleven o\'clock.',
      exampleTranslationByLang: { hi: 'अंत में मैं ग्यारह बजे सो जाता हूँ।', es: 'Finalmente, me voy a dormir a las once en punto.' },
      audioText: 'go to sleep and go to bed',
      audioId: 'en_a1_u02_l18_v_go_to_sleep',
      slowAudioId: 'en_a1_u02_l18_v_go_to_sleep_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌙',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_first',
      word: 'First, ...',
      phonetic: '/fɝːst/',
      meaning: 'At the beginning of a sequence of actions',
      translationsByLang: { hi: 'पहले / सबसे पहले', es: 'Primero / En primer lugar', fr: 'D\'abord / Premièrement', de: 'Zuerst / Erstens', pt: 'Primeiro / Em primeiro lugar', zh: '首先 / 第一', ar: 'أولاً', ja: 'まず / 最初に', ru: 'сначала / во-первых' },
      exampleSentence: 'First, I drink a glass of water.',
      exampleTranslationByLang: { hi: 'पहले मैं एक गिलास पानी पीता हूँ।', es: 'Primero, bebo un vaso de agua.' },
      audioText: 'First',
      audioId: 'en_a1_u02_l18_v_first',
      slowAudioId: 'en_a1_u02_l18_v_first_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '1️⃣',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_then',
      word: 'Then, ...',
      phonetic: '/ðen/',
      meaning: 'Next in order of time',
      translationsByLang: { hi: 'फिर / उसके बाद', es: 'Luego / Después / Entonces', fr: 'Ensuite / Puis', de: 'Dann / Danach', pt: 'Depois / Então', zh: '然后 / 接着', ar: 'ثم / بعد ذلك', ja: 'それから / 次に', ru: 'затем / потом' },
      exampleSentence: 'Then, I make a cup of coffee.',
      exampleTranslationByLang: { hi: 'फिर मैं एक कप कॉफी बनाता हूँ।', es: 'Luego, preparo una taza de café.' },
      audioText: 'Then',
      audioId: 'en_a1_u02_l18_v_then',
      slowAudioId: 'en_a1_u02_l18_v_then_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '2️⃣',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_after_that',
      word: 'After that, ...',
      phonetic: '/ˈæf.tɚ ðæt/',
      meaning: 'Following that previous action in time',
      translationsByLang: { hi: 'उसके बाद', es: 'Después de eso / Tras ello', fr: 'Après cela / Ensuite', de: 'Danach / Nachher', pt: 'Depois disso', zh: '在那之后', ar: 'بعد ذلك', ja: 'そのあとで', ru: 'после этого' },
      exampleSentence: 'After that, I take the bus to work.',
      exampleTranslationByLang: { hi: 'उसके बाद मैं काम के लिए बस पकड़ता हूँ।', es: 'Después de eso, cojo el autobús al trabajo.' },
      audioText: 'After that',
      audioId: 'en_a1_u02_l18_v_after_that',
      slowAudioId: 'en_a1_u02_l18_v_after_that_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '3️⃣',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_next',
      word: 'Next, ...',
      phonetic: '/nekst/',
      meaning: 'Immediately following in sequence',
      translationsByLang: { hi: 'आगे / इसके बाद', es: 'A continuación / Seguidamente', fr: 'Ensuite / Puis', de: 'Als Nächstes', pt: 'Em seguida / A seguir', zh: '接下来', ar: 'التالي / بعد ذلك', ja: '次に / 続いて', ru: 'далее / затем' },
      exampleSentence: 'Next, we have our team meeting.',
      exampleTranslationByLang: { hi: 'आगे हमारी टीम मीटिंग होती है।', es: 'A continuación, tenemos nuestra reunión de equipo.' },
      audioText: 'Next',
      audioId: 'en_a1_u02_l18_v_next',
      slowAudioId: 'en_a1_u02_l18_v_next_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⏭️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_finally',
      word: 'Finally, ...',
      phonetic: '/ˈfaɪ.nəl.i/',
      meaning: 'As the last step in a series of events',
      translationsByLang: { hi: 'अंत में / आखिरकार', es: 'Por último / Finalmente', fr: 'Enfin / Finalement', de: 'Schließlich / Zuletzt', pt: 'Finalmente / Por fim', zh: '最后', ar: 'أخيراً / في النهاية', ja: '最後に / 最終的に', ru: 'наконец / в заключение' },
      exampleSentence: 'Finally, I turn off the lights and sleep.',
      exampleTranslationByLang: { hi: 'अंत में मैं बत्तियां बंद करता हूँ और सो जाता हूँ।', es: 'Por último, apago las luces y me duermo.' },
      audioText: 'Finally',
      audioId: 'en_a1_u02_l18_v_finally',
      slowAudioId: 'en_a1_u02_l18_v_finally_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏁',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_routine',
      word: 'daily routine',
      phonetic: '/ˈdeɪ.li ruːˈtiːn/',
      meaning: 'A regular sequence of actions followed every day',
      translationsByLang: { hi: 'दैनिक दिनचर्या', es: 'rutina diaria', fr: 'routine quotidienne', de: 'Tagesroutine / Tagesablauf', pt: 'rotina diária', zh: '日常作息 / 日常惯例', ar: 'روتين يومي', ja: '毎日のルーティン / 日課', ru: 'ежедневный распорядок / рутина' },
      exampleSentence: 'Having a healthy daily routine helps you stay productive.',
      exampleTranslationByLang: { hi: 'एक स्वस्थ दिनचर्या आपको उत्पादक बने रहने में मदद करती है।', es: 'Tener una rutina diaria saludable te ayuda a ser productivo.' },
      audioText: 'daily routine',
      audioId: 'en_a1_u02_l18_v_routine',
      slowAudioId: 'en_a1_u02_l18_v_routine_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📅',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l18_early_late',
      word: 'early / late',
      phonetic: '/ˈɝː.li/ /leɪt/',
      meaning: 'Before or after the expected standard time',
      translationsByLang: { hi: 'जल्दी / देर से', es: 'temprano / tarde', fr: 'tôt / tard', de: 'früh / spät', pt: 'cedo / tarde', zh: '早 / 晚', ar: 'مبكراً / متأخراً', ja: '早い（早く） / 遅い（遅く）', ru: 'рано / поздно' },
      exampleSentence: 'I wake up early on weekdays, but late on Sundays.',
      exampleTranslationByLang: { hi: 'मैं कार्यदिवसों पर जल्दी उठता हूँ, लेकिन रविवार को देर से।', es: 'Me despierto temprano los días laborables, pero tarde los domingos.' },
      audioText: 'early and late',
      audioId: 'en_a1_u02_l18_v_early_late',
      slowAudioId: 'en_a1_u02_l18_v_early_late_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⏰',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks
  expressions: [
    {
      id: 'chunk_u02_l18_from_morning_to_night',
      text: 'From morning to night',
      meaning: 'Spanning the whole duration of the day',
      translationsByLang: {
        hi: 'सुबह से लेकर रात तक',
        es: 'De la mañana a la noche',
        fr: 'Du matin au soir',
        de: 'Von morgens bis abends'
      },
      audioText: 'From morning to night',
      audioId: 'en_a1_u02_l18_c_morning_to_night',
      context: 'Summarizing a full daily schedule',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_u02_l18_what_time_usually',
      text: 'What time do you usually finish work?',
      meaning: 'Asking someone about their regular daily end of work',
      translationsByLang: {
        hi: 'आप आमतौर पर कितने बजे काम खत्म करते हैं?',
        es: '¿A qué hora sueles terminar de trabajar?',
        fr: 'À quelle heure finissez-vous habituellement le travail ?',
        de: 'Um wie viel Uhr beenden Sie normalerweise die Arbeit?'
      },
      audioText: 'What time do you usually finish work?',
      audioId: 'en_a1_u02_l18_c_what_time_finish',
      context: 'Conversations about work-life balance',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_u02_l18_after_that_i_leave',
      text: 'After that, I leave for work.',
      meaning: 'Smooth sequencing phrase after breakfast or getting ready',
      translationsByLang: {
        hi: 'उसके बाद, मैं काम के लिए निकलता हूँ।',
        es: 'Después de eso, salgo para el trabajo.',
        fr: 'Après cela, je pars au travail.',
        de: 'Danach gehe ich zur Arbeit.'
      },
      audioText: 'After that, I leave for work.',
      audioId: 'en_a1_u02_l18_c_after_that_leave',
      context: 'Narrating your morning steps',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 5 & 6: Grammar Rules
  grammar: {
    patterns: [
      {
        id: 'g_time_sequencing_connectors',
        title: 'Time Sequencing Connectors (First, Then, After that, Next, Finally)',
        rule: 'Use time sequencing words at the start of clauses to indicate chronological progression. Always follow them with a comma in writing (except "then", where comma is optional).',
        formula: 'First, [Action 1]. Then, [Action 2]. After that, [Action 3]. Next, [Action 4]. Finally, [Action 5].',
        examples: [
          { sentence: 'First, I take a shower. Then, I have breakfast. After that, I catch the train.', translation: 'पहले मैं नहाता हूँ। फिर मैं नाश्ता करता हूँ। उसके बाद मैं ट्रेन पकड़ता हूँ। / Primero me ducho. Luego desayuno. Después de eso cojo el tren.', audioText: 'First, I take a shower. Then, I have breakfast. After that, I catch the train.', audioId: 'en_a1_u02_l18_g_ex1' },
          { sentence: 'Finally, I turn off my phone and go to sleep.', translation: 'अंत में मैं अपना फोन बंद करता हूँ और सो जाता हूँ। / Finalmente apago el móvil y me duermo.', audioText: 'Finally, I turn off my phone and go to sleep.', audioId: 'en_a1_u02_l18_g_ex2' }
        ],
        explanationByLang: {
          hi: 'घटनाओं के क्रम को दर्शाने के लिए First (पहले), Then (फिर), After that (उसके बाद), Next (आगे), Finally (अंत में) का उपयोग करें।',
          es: 'Conectores de secuencia para ordenar tu día: "First", "Then", "After that", "Next", "Finally".'
        }
      },
      {
        id: 'g_present_simple_routines_with_time',
        title: 'Present Simple for Habitual Schedules with Time Prepositions',
        rule: 'Combine present simple verbs with time prepositions: "at" for exact clock times ("at 7:00"), "in" for parts of the day ("in the morning/afternoon/evening"), and "on" for days ("on weekdays").',
        formula: '[Subject] + [Present Verb] + at [Time] / in [Part of Day]',
        examples: [
          { sentence: 'She arrives at work at 8:45 in the morning.', translation: 'वह सुबह 8:45 पर काम पर पहुँचती है। / Ella llega al trabajo a las 8:45 de la mañana.', audioText: 'She arrives at work at 8:45 in the morning.', audioId: 'en_a1_u02_l18_g_ex3' },
          { sentence: 'They cook dinner at 7:30 in the evening.', translation: 'वे शाम को 7:30 पर डिनर पकाते हैं। / Ellos cocinan la cena a las 7:30 de la tarde.', audioText: 'They cook dinner at 7:30 in the evening.', audioId: 'en_a1_u02_l18_g_ex4' }
        ],
        explanationByLang: {
          hi: 'निश्चित समय के लिए "at" (at 8:00) और दिन के पहर के लिए "in" (in the morning) का प्रयोग करें।',
          es: 'Usa "at" para horas exactas ("at 7:00") e "in" para momentos del día ("in the morning").'
        }
      }
    ]
  },

  // SECTION 7: Common Mistakes
  commonMistakes: [
    {
      id: 'cm_u02_l18_after_i_have',
      incorrect: 'After I have breakfast, then I go to work.',
      correct: 'After that, I go to work. / After breakfast, I go to work.',
      whyExplanation: 'Do not use "After" as a connector by itself without a noun or "that". Use "After that, ...".',
      explanationsByLang: {
        hi: 'अकेले "After" के बजाय "After that, ..." या "After breakfast, ..." का प्रयोग करें।',
        es: 'No digas "*After, I go*". Usa la frase completa "After that, I go..." o "After breakfast...".',
        fr: 'Dites "After that, ..." et non "*After, ...*".',
        de: 'Verwenden Sie "After that, ..." und nicht nur "*After, ...*".'
      }
    },
    {
      id: 'cm_u02_l18_then_i_am_going',
      incorrect: 'Then I am wake up at seven.',
      correct: 'Then I wake up at seven.',
      whyExplanation: 'Do not add "am" before habitual present simple verbs.',
      explanationsByLang: {
        hi: 'दैनिक दिनचर्या के लिए प्रेजेंट सिंपल (wake up) का प्रयोग करें, "am wake up" नहीं।',
        es: 'No mezcles el verbo "to be" con el presente simple habitual: di "I wake up", no "*I am wake up*".',
        fr: 'Dites "I wake up" et non "*I am wake up*".',
        de: 'Sagen Sie "I wake up" und nicht "*I am wake up*".'
      }
    }
  ],

  // SECTION 11: Realistic Mini Dialogues
  dialogues: [
    {
      id: 'd_u02_l18_daily_routine_chat',
      title: 'Discussing Daily Routines at the Office',
      context: 'Carlos and Anna are talking about their morning commutes and daily schedules during a coffee break.',
      characters: [
        { id: 'char_carlos', name: 'Carlos', role: 'Colleague' },
        { id: 'char_anna', name: 'Anna', role: 'Colleague' }
      ],
      turns: [
        {
          id: 'turn_1',
          speakerId: 'char_carlos',
          speakerName: 'Carlos',
          text: 'Anna, you always arrive so early at the office! What time do you wake up?',
          translationsByLang: { hi: 'अन्ना, तुम ऑफिस हमेशा इतनी जल्दी पहुँचती हो! तुम कितने बजे जागती हो?', es: '¡Anna, siempre llegas tan temprano a la oficina! ¿A qué hora te despiertas?' },
          audioText: 'Anna, you always arrive so early at the office! What time do you wake up?',
          audioId: 'en_a1_u02_l18_d01_t1'
        },
        {
          id: 'turn_2',
          speakerId: 'char_anna',
          speakerName: 'Anna',
          text: 'First, I wake up at six o\'clock. Then, I take a shower and make a healthy breakfast.',
          translationsByLang: { hi: 'पहले मैं छह बजे उठती हूँ। फिर मैं नहाती हूँ और एक स्वस्थ नाश्ता बनाती हूँ।', es: 'Primero me despierto a las seis en punto. Luego me ducho y preparo un desayuno saludable.' },
          audioText: 'First, I wake up at six o\'clock. Then, I take a shower and make a healthy breakfast.',
          audioId: 'en_a1_u02_l18_d01_t2'
        },
        {
          id: 'turn_3',
          speakerId: 'char_carlos',
          speakerName: 'Carlos',
          text: 'And after that, how do you travel to work?',
          translationsByLang: { hi: 'और उसके बाद, तुम काम पर कैसे आती हो?', es: '¿Y después de eso, cómo vas al trabajo?' },
          audioText: 'And after that, how do you travel to work?',
          audioId: 'en_a1_u02_l18_d01_t3'
        },
        {
          id: 'turn_4',
          speakerId: 'char_anna',
          speakerName: 'Anna',
          text: 'After that, I catch the bus at seven fifteen, and I arrive here at eight.',
          translationsByLang: { hi: 'उसके बाद मैं सवा सात बजे बस पकड़ती हूँ, और यहाँ आठ बजे पहुँच जाती हूँ।', es: 'Después de eso, cojo el autobús a las siete y cuarto y llego aquí a las ocho.' },
          audioText: 'After that, I catch the bus at seven fifteen, and I arrive here at eight.',
          audioId: 'en_a1_u02_l18_d01_t4'
        },
        {
          id: 'turn_5',
          speakerId: 'char_carlos',
          speakerName: 'Carlos',
          text: 'That is a very disciplined morning routine!',
          translationsByLang: { hi: 'यह बहुत ही अनुशासित सुबह की दिनचर्या है!', es: '¡Esa es una rutina matutina muy disciplinada!' },
          audioText: 'That is a very disciplined morning routine!',
          audioId: 'en_a1_u02_l18_d01_t5'
        }
      ]
    }
  ],

  // SECTION 8, 9, 10, 12, 13, 14, 15: Practice Exercises (15 items)
  practiceExercises: [
    {
      id: 'ex_u02_l18_p1',
      lessonId: 'lesson_a1_2_18',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Select the correct connector to begin a narrative sequence:',
      sourceSentence: '___, I wake up at six and brush my teeth.',
      options: [
        { id: 'o1', text: 'First', isCorrect: true },
        { id: 'o2', text: 'Finally', isCorrect: false },
        { id: 'o3', text: 'After', isCorrect: false }
      ],
      explanation: '"First" introduces the opening step.'
    },
    {
      id: 'ex_u02_l18_p2',
      lessonId: 'lesson_a1_2_18',
      stage: 8,
      type: 'fill_blank',
      prompt: 'Complete the sequence connector:',
      sourceSentence: 'Then I eat breakfast. After ___, I leave for work.',
      options: [
        { id: 'o1', text: 'that', isCorrect: true },
        { id: 'o2', text: 'this', isCorrect: false },
        { id: 'o3', text: 'there', isCorrect: false }
      ],
      explanation: 'The standard transition connector is "After that".'
    },
    {
      id: 'ex_u02_l18_p3',
      lessonId: 'lesson_a1_2_18',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the morning routine sentence:',
      targetSentence: 'First I take a shower and get dressed',
      wordBank: ['First', 'I', 'take', 'a', 'shower', 'and', 'get', 'dressed', 'am', 'is']
    },
    {
      id: 'ex_u02_l18_p4',
      lessonId: 'lesson_a1_2_18',
      stage: 9,
      type: 'listening',
      prompt: 'Listen to the evening schedule:',
      audioText: 'I finish work at five thirty and arrive home at six fifteen',
      options: [
        { id: 'o1', text: 'I finish work at five thirty and arrive home at six fifteen', isCorrect: true },
        { id: 'o2', text: 'I arrive at work at five thirty and leave home at six fifteen', isCorrect: false },
        { id: 'o3', text: 'I finish lunch at one thirty and cook dinner at six fifteen', isCorrect: false }
      ],
      explanation: 'The speaker completes work at 5:30 and reaches home at 6:15.'
    },
    {
      id: 'ex_u02_l18_p5',
      lessonId: 'lesson_a1_2_18',
      stage: 9,
      type: 'listen_and_type',
      prompt: 'Listen and type what you hear:',
      audioText: 'What time do you usually finish work',
      targetSentence: 'What time do you usually finish work'
    },
    {
      id: 'ex_u02_l18_p6',
      lessonId: 'lesson_a1_2_18',
      stage: 10,
      type: 'word_ordering',
      prompt: 'Form the question about waking up time:',
      targetSentence: 'What time do you wake up every morning',
      wordBank: ['What', 'time', 'do', 'you', 'wake', 'up', 'every', 'morning', 'are', 'does']
    },
    {
      id: 'ex_u02_l18_p7',
      lessonId: 'lesson_a1_2_18',
      stage: 12,
      type: 'speaking',
      prompt: 'Speak this routine sentence aloud into your microphone:',
      targetSentence: 'Finally, I read a book and go to sleep at eleven o\'clock.',
      audioText: 'Finally, I read a book and go to sleep at eleven o\'clock.'
    },
    {
      id: 'ex_u02_l18_p8',
      lessonId: 'lesson_a1_2_18',
      stage: 13,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'पहले मैं नाश्ता बनाता हूँ, फिर मैं बस पकड़ता हूँ।',
      sourceTranslations: {
        hi: 'पहले मैं नाश्ता बनाता हूँ, फिर मैं बस पकड़ता हूँ।',
        es: 'Primero preparo el desayuno, luego cojo el autobús.'
      },
      targetSentence: 'First I make breakfast then I catch the bus',
      wordBank: ['First', 'I', 'make', 'breakfast', 'then', 'I', 'catch', 'the', 'bus', 'finally', 'am']
    },
    {
      id: 'ex_u02_l18_p9',
      lessonId: 'lesson_a1_2_18',
      stage: 14,
      type: 'fill_blank',
      prompt: 'Interleaved Practice (Combining Unit 1 Days of Week & Routines):',
      sourceSentence: 'On ___, we wake up late and have a long breakfast.',
      options: [
        { id: 'o1', text: 'Sundays', isCorrect: true },
        { id: 'o2', text: 'clock', isCorrect: false },
        { id: 'o3', text: 'curtains', isCorrect: false }
      ],
      explanation: '"Sundays" is the plural day of the week.'
    },
    {
      id: 'ex_u02_l18_p10',
      lessonId: 'lesson_a1_2_18',
      stage: 15,
      type: 'error_correction',
      prompt: 'Fix the sequencing connector error:',
      sourceSentence: 'After, I wash the dishes and relax.',
      options: [
        { id: 'o1', text: 'After that, I wash the dishes and relax.', isCorrect: true },
        { id: 'o2', text: 'After this is, I wash the dishes and relax.', isCorrect: false },
        { id: 'o3', text: 'Aftering, I wash the dishes and relax.', isCorrect: false }
      ],
      explanation: 'Use "After that," as the introductory transition.'
    },
    {
      id: 'ex_u02_l18_p11',
      lessonId: 'lesson_a1_2_18',
      stage: 16,
      type: 'dialogue_completion',
      prompt: 'Select the best response:',
      sourceSentence: 'Colleague: "How do you spend your evenings?" -> You: "___"',
      options: [
        { id: 'o1', text: 'I cook dinner, relax on the sofa, and read.', isCorrect: true },
        { id: 'o2', text: 'It is ten dollars per kilo.', isCorrect: false },
        { id: 'o3', text: 'I am from Toronto.', isCorrect: false }
      ],
      explanation: 'Appropriately describes evening routine.'
    },
    {
      id: 'ex_u02_l18_p12',
      lessonId: 'lesson_a1_2_18',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Which verb phrase means "to wash plates and cutlery after eating"?',
      sourceSentence: 'Vocabulary test:',
      options: [
        { id: 'o1', text: 'wash the dishes', isCorrect: true },
        { id: 'o2', text: 'get dressed', isCorrect: false },
        { id: 'o3', text: 'check emails', isCorrect: false }
      ],
      explanation: '"wash the dishes" means cleaning kitchenware.'
    },
    {
      id: 'ex_u02_l18_p13',
      lessonId: 'lesson_a1_2_18',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Choose the correct preposition: "She arrives at work ___ eight o\'clock."',
      sourceSentence: 'Preposition of clock time:',
      options: [
        { id: 'o1', text: 'at', isCorrect: true },
        { id: 'o2', text: 'in', isCorrect: false },
        { id: 'o3', text: 'on', isCorrect: false }
      ],
      explanation: 'Use "at" with specific clock times ("at eight o\'clock").'
    },
    {
      id: 'ex_u02_l18_p14',
      lessonId: 'lesson_a1_2_18',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the sentence:',
      targetSentence: 'He checks his work emails every morning at nine',
      wordBank: ['He', 'checks', 'his', 'work', 'emails', 'every', 'morning', 'at', 'nine', 'on', 'is']
    },
    {
      id: 'ex_u02_l18_p15',
      lessonId: 'lesson_a1_2_18',
      stage: 12,
      type: 'speaking',
      prompt: 'Speak this sentence into your microphone:',
      targetSentence: 'I leave the house at seven thirty and walk to the station.',
      audioText: 'I leave the house at seven thirty and walk to the station.'
    }
  ],

  // SECTION 16: Review Exercises (4 items)
  reviewExercises: [
    {
      id: 'ex_u02_l18_rev1',
      lessonId: 'lesson_a1_2_18',
      stage: 16,
      type: 'multiple_choice',
      prompt: 'Which word signals the very last action of a routine?',
      sourceSentence: 'Sequencing review:',
      options: [
        { id: 'o1', text: 'Finally', isCorrect: true },
        { id: 'o2', text: 'First', isCorrect: false },
        { id: 'o3', text: 'Then', isCorrect: false }
      ],
      explanation: '"Finally" marks the concluding step.'
    },
    {
      id: 'ex_u02_l18_rev2',
      lessonId: 'lesson_a1_2_18',
      stage: 16,
      type: 'fill_blank',
      prompt: 'Complete the preposition:',
      sourceSentence: 'We have lunch in the cafeteria ___ one o\'clock.',
      options: [
        { id: 'o1', text: 'at', isCorrect: true },
        { id: 'o2', text: 'in', isCorrect: false },
        { id: 'o3', text: 'on', isCorrect: false }
      ],
      explanation: 'Use "at" before clock times.'
    },
    {
      id: 'ex_u02_l18_rev3',
      lessonId: 'lesson_a1_2_18',
      stage: 16,
      type: 'word_ordering',
      prompt: 'Build the routine sentence:',
      targetSentence: 'After that we cook dinner together in the kitchen',
      wordBank: ['After', 'that', 'we', 'cook', 'dinner', 'together', 'in', 'the', 'kitchen', 'is']
    },
    {
      id: 'ex_u02_l18_rev4',
      lessonId: 'lesson_a1_2_18',
      stage: 16,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'मैं रात ग्यारह बजे सोने जाता हूँ।',
      sourceTranslations: { hi: 'मैं रात ग्यारह बजे सोने जाता हूँ।', es: 'Me voy a dormir a las once de la noche.' },
      targetSentence: 'I go to sleep at eleven o\'clock at night',
      wordBank: ['I', 'go', 'to', 'sleep', 'at', 'eleven', 'o\'clock', 'at', 'night', 'in', 'am']
    }
  ],

  // SECTION 17: Assessment Exercises (10 items)
  assessmentExercises: [
    {
      id: 'ex_u02_l18_a1',
      lessonId: 'lesson_a1_2_18',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Choose the correct sequence word: "___, I wash my face and brush my teeth."',
      sourceSentence: 'Routine test:',
      options: [
        { id: 'o1', text: 'First', isCorrect: true },
        { id: 'o2', text: 'Finally', isCorrect: false },
        { id: 'o3', text: 'After', isCorrect: false },
        { id: 'o4', text: 'Because', isCorrect: false }
      ],
      explanation: '"First" introduces the initial action.'
    },
    {
      id: 'ex_u02_l18_a2',
      lessonId: 'lesson_a1_2_18',
      stage: 17,
      type: 'fill_blank',
      prompt: 'Select the correct 3rd person singular verb form:',
      sourceSentence: 'Elena ___ at work at eight forty-five every morning.',
      options: [
        { id: 'o1', text: 'arrives', isCorrect: true },
        { id: 'o2', text: 'arrive', isCorrect: false },
        { id: 'o3', text: 'arriving', isCorrect: false },
        { id: 'o4', text: 'is arrive', isCorrect: false }
      ],
      explanation: '3rd person singular requires "-s" (arrives).'
    },
    {
      id: 'ex_u02_l18_a3',
      lessonId: 'lesson_a1_2_18',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the sentence:',
      targetSentence: 'What time do you usually get home from work',
      wordBank: ['What', 'time', 'do', 'you', 'usually', 'get', 'home', 'from', 'work', 'are']
    },
    {
      id: 'ex_u02_l18_a4',
      lessonId: 'lesson_a1_2_18',
      stage: 17,
      type: 'error_correction',
      prompt: 'Correct the routine statement:',
      sourceSentence: 'Then I am leaving the house at eight.',
      options: [
        { id: 'o1', text: 'Then I leave the house at eight.', isCorrect: true },
        { id: 'o2', text: 'Then I am leave the house at eight.', isCorrect: false },
        { id: 'o3', text: 'Then I leaves the house at eight.', isCorrect: false }
      ],
      explanation: 'Use simple present "I leave" for daily habitual actions.'
    },
    {
      id: 'ex_u02_l18_a5',
      lessonId: 'lesson_a1_2_18',
      stage: 17,
      type: 'listening',
      prompt: 'Listen and select what the speaker says:',
      audioText: 'First I take a shower and then I make breakfast',
      options: [
        { id: 'o1', text: 'First I take a shower and then I make breakfast', isCorrect: true },
        { id: 'o2', text: 'First I make breakfast and then I leave the house', isCorrect: false },
        { id: 'o3', text: 'First I go to sleep and then I brush my teeth', isCorrect: false }
      ],
      explanation: 'The speaker takes a shower first, then makes breakfast.'
    },
    {
      id: 'ex_u02_l18_a6',
      lessonId: 'lesson_a1_2_18',
      stage: 17,
      type: 'listen_and_type',
      prompt: 'Listen and transcribe accurately:',
      audioText: 'After that I leave for work at eight thirty',
      targetSentence: 'After that I leave for work at eight thirty'
    },
    {
      id: 'ex_u02_l18_a7',
      lessonId: 'lesson_a1_2_18',
      stage: 17,
      type: 'dialogue_completion',
      prompt: 'Select the best completion:',
      sourceSentence: 'Friend: "Do you cook dinner every night?" -> You: "___"',
      options: [
        { id: 'o1', text: 'Yes, I usually cook fresh meals at seven in the evening.', isCorrect: true },
        { id: 'o2', text: 'No, I have three bedrooms.', isCorrect: false },
        { id: 'o3', text: 'It is opposite the station.', isCorrect: false }
      ],
      explanation: 'Direct answer about cooking routines.'
    },
    {
      id: 'ex_u02_l18_a8',
      lessonId: 'lesson_a1_2_18',
      stage: 17,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'अंत में, वह बत्तियां बंद करता है और सो जाता है।',
      sourceTranslations: { hi: 'अंत में, वह बत्तियां बंद करता है और सो जाता है।', es: 'Por último, él apaga las luces y se duerme.' },
      targetSentence: 'Finally he turns off the lights and goes to sleep',
      wordBank: ['Finally', 'he', 'turns', 'off', 'the', 'lights', 'and', 'goes', 'to', 'sleep', 'go', 'is']
    },
    {
      id: 'ex_u02_l18_a9',
      lessonId: 'lesson_a1_2_18',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Which phrase means "to stop sleeping and become awake"?',
      sourceSentence: 'Vocabulary check:',
      options: [
        { id: 'o1', text: 'wake up', isCorrect: true },
        { id: 'o2', text: 'cook dinner', isCorrect: false },
        { id: 'o3', text: 'catch the bus', isCorrect: false },
        { id: 'o4', text: 'wash the dishes', isCorrect: false }
      ],
      explanation: '"wake up" means to stop sleeping.'
    },
    {
      id: 'ex_u02_l18_a10',
      lessonId: 'lesson_a1_2_18',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the final sentence:',
      targetSentence: 'She relaxes on the sofa and reads a book',
      wordBank: ['She', 'relaxes', 'on', 'the', 'sofa', 'and', 'reads', 'a', 'book', 'relax', 'is']
    }
  ]
};
