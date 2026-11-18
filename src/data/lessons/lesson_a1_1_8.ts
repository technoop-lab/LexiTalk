import { DetailedLessonData } from '../../types';

export const LESSON_A1_1_8_DATA: DetailedLessonData = {
  id: 'lesson_a1_1_8',
  unitId: 'unit_a1_1',
  title: 'Daily Routines & Present Simple (I, You, We, They)',
  cefr: 'A1',
  icon: '⏰',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Daily Routines & Present Simple Affirmative',
    description: 'Learn how to describe daily schedules, habitual actions, and morning/evening routines using Present Simple affirmative verbs with I, you, we, and they.',
    descriptionsByLang: {
      hi: 'अपनी दिनचर्या, सुबह की आदतों और दैनिक गतिविधियों का वर्णन करना सीखें। I, you, we, they के साथ Present Simple (सामान्य वर्तमान काल) की क्रियाओं का सही प्रयोग करें।',
      es: 'Aprende a describir tu rutina diaria, hábitos cotidianos y horarios de mañana y noche usando el Presente Simple afirmativo con I, you, we y they.',
      fr: 'Apprenez à décrire votre routine quotidienne et vos habitudes avec le Présent Simple (I, you, we, they).',
      de: 'Lernen Sie, Tagesabläufe und Gewohnheiten im Present Simple mit I, you, we und they zu beschreiben.',
      pt: 'Aprenda a descrever rotinas diárias e hábitos usando o Presente Simples com I, you, we e they.',
      zh: '学习使用一般现在时（主语为I/you/we/they）描述日常生活习惯和作息时间。',
      ar: 'تعلم وصف الروتين اليومي والعادات باستخدام زمن المضارع البسيط مع الضمائر I, you, we, they.',
      ja: 'I、you、we、theyを主語とする現在形の肯定文を用いて、日課や朝・夜の生活習慣を表現する方法を学びます。',
      ru: 'Научитесь описывать распорядок дня и привычки в Present Simple с местоимениями I, you, we, they.'
    },
    canDoStatements: [
      'Describe your complete morning and evening routine in chronological order',
      'Use common daily action verbs (wake up, have breakfast, go to work, eat dinner, sleep)',
      'Combine action verbs with clock times using the preposition "at" (e.g. "at 7:30 AM")',
      'Use time-of-day phrases (in the morning, in the afternoon, in the evening, at night)',
      'Ask and answer "What time do you wake up?" and "When do you start work?"',
      'Recycle places and transport vocabulary from earlier lessons'
    ],
    canDoByLang: {
      hi: [
        'अपनी सुबह और शाम की दिनचर्या का क्रमानुसार वर्णन करना',
        'दैनिक क्रियाओं (wake up, have breakfast, work, sleep) का उपयोग करना',
        'समय दर्शाने के लिए "at" का प्रयोग (उदा. "at 8:00 AM")',
        '"What time do you wake up?" पूछना व उत्तर देना'
      ],
      es: [
        'Describir la rutina diaria en orden cronológico',
        'Usar verbos de rutina (wake up, have breakfast, go to work)',
        'Combinar verbos con horas usando la preposición "at"'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (20 items)
  vocabulary: [
    {
      id: 'v_act_wake_up',
      word: 'wake up',
      phonetic: '/weɪk ʌp/',
      meaning: 'To stop sleeping and become conscious',
      translationsByLang: { hi: 'नींद से जागना', es: 'despertarse', fr: 'se réveiller', de: 'aufwachen', pt: 'acordar', zh: '醒来', ar: 'يستيقظ', ja: '目を覚ます', ru: 'просыпаться' },
      exampleSentence: 'I wake up at 6:30 AM every morning.',
      exampleTranslationByLang: { hi: 'मैं रोज सुबह 6:30 बजे जागता हूँ।', es: 'Me despierto a las 6:30 AM todas las mañanas.' },
      audioText: 'wake up',
      audioId: 'en_a1_u01_l08_v_wake_up',
      slowAudioId: 'en_a1_u01_l08_v_wake_up_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⏰',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_act_get_up',
      word: 'get up',
      phonetic: '/ɡet ʌp/',
      meaning: 'To rise from bed after sleeping',
      translationsByLang: { hi: 'बिस्तर से उठना', es: 'levantarse de la cama', fr: 'se lever', de: 'aufstehen', pt: 'levantar-se', zh: '起床', ar: 'ينهض من الفراش', ja: '起き上がる', ru: 'вставать с постели' },
      exampleSentence: 'I get up at 7:00 AM.',
      exampleTranslationByLang: { hi: 'मैं 7:00 बजे बिस्तर से उठता हूँ।', es: 'Me levanto a las 7:00 AM.' },
      audioText: 'get up',
      audioId: 'en_a1_u01_l08_v_get_up',
      slowAudioId: 'en_a1_u01_l08_v_get_up_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🛏️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_act_shower',
      word: 'take a shower',
      phonetic: '/teɪk ə ˈʃaʊ.ɚ/',
      meaning: 'To wash oneself under a spray of water',
      translationsByLang: { hi: 'नहाना / स्नान करना', es: 'ducharse / tomar una ducha', fr: 'prendre une douche', de: 'duschen / eine Dusche nehmen', pt: 'tomar um banho', zh: '淋浴 / 洗澡', ar: 'يستحم', ja: 'シャワーを浴びる', ru: 'принимать душ' },
      exampleSentence: 'I take a shower in the morning.',
      exampleTranslationByLang: { hi: 'मैं सुबह स्नान करता हूँ।', es: 'Tomo una ducha por la mañana.' },
      audioText: 'take a shower',
      audioId: 'en_a1_u01_l08_v_shower',
      slowAudioId: 'en_a1_u01_l08_v_shower_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚿',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_act_brush_teeth',
      word: 'brush teeth',
      phonetic: '/brʌʃ tiːθ/',
      meaning: 'To clean teeth with a toothbrush and toothpaste',
      translationsByLang: { hi: 'दांत साफ करना / ब्रश करना', es: 'lavarse los dientes', fr: 'se brosser les dents', de: 'Zähne putzen', pt: 'escovar os dentes', zh: '刷牙', ar: 'ينظف أسنانه', ja: '歯を磨く', ru: 'чистить зубы' },
      exampleSentence: 'I brush my teeth before breakfast.',
      exampleTranslationByLang: { hi: 'मैं नाश्ते से पहले अपने दाँत ब्रश करता हूँ।', es: 'Me lavo los dientes antes del desayuno.' },
      audioText: 'brush teeth',
      audioId: 'en_a1_u01_l08_v_brush_teeth',
      slowAudioId: 'en_a1_u01_l08_v_brush_teeth_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🪥',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_act_breakfast',
      word: 'have breakfast',
      phonetic: '/hæv ˈbrek.fəst/',
      meaning: 'To eat the first morning meal of the day',
      translationsByLang: { hi: 'नाश्ता करना', es: 'desayunar / tomar el desayuno', fr: 'prendre le petit-déjeuner', de: 'frühstücken', pt: 'tomar café da manhã', zh: '吃早餐', ar: 'يتناول الفطور', ja: '朝食を食べる', ru: 'завтракать' },
      exampleSentence: 'We have breakfast together at 8:00 AM.',
      exampleTranslationByLang: { hi: 'हम सब सुबह 8:00 बजे साथ में नाश्ता करते हैं।', es: 'Desayunamos juntos a las 8:00 AM.' },
      audioText: 'have breakfast',
      audioId: 'en_a1_u01_l08_v_breakfast',
      slowAudioId: 'en_a1_u01_l08_v_breakfast_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍳',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_act_drink_coffee',
      word: 'drink coffee',
      phonetic: '/drɪŋk ˈkɑː.fi/',
      meaning: 'To consume hot brewed coffee',
      translationsByLang: { hi: 'कॉफी पीना', es: 'tomar café', fr: 'boire du café', de: 'Kaffee trinken', pt: 'beber café', zh: '喝咖啡', ar: 'يشرب القهوة', ja: 'コーヒーを飲む', ru: 'пить кофе' },
      exampleSentence: 'I drink hot black coffee every morning.',
      exampleTranslationByLang: { hi: 'मैं हर सुबह गर्म ब्लैक कॉफी पीता हूँ।', es: 'Tomo café negro caliente todas las mañanas.' },
      audioText: 'drink coffee',
      audioId: 'en_a1_u01_l08_v_coffee',
      slowAudioId: 'en_a1_u01_l08_v_coffee_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '☕',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_act_leave_home',
      word: 'leave home',
      phonetic: '/liːv hoʊm/',
      meaning: 'To depart from one\'s house in the morning',
      translationsByLang: { hi: 'घर से निकलना', es: 'salir de casa', fr: 'quitter la maison', de: 'das Haus verlassen', pt: 'sair de casa', zh: '离开家 / 出门', ar: 'يغادر المنزل', ja: '家を出る', ru: 'выходить из дома' },
      exampleSentence: 'I leave home at 8:15 AM.',
      exampleTranslationByLang: { hi: 'मैं सुबह 8:15 बजे घर से निकलता हूँ।', es: 'Salgo de casa a las 8:15 AM.' },
      audioText: 'leave home',
      audioId: 'en_a1_u01_l08_v_leave_home',
      slowAudioId: 'en_a1_u01_l08_v_leave_home_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚪',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_act_go_work',
      word: 'go to work',
      phonetic: '/ɡoʊ tuː wɝːk/',
      meaning: 'To travel to one\'s place of employment',
      translationsByLang: { hi: 'काम पर जाना', es: 'ir al trabajo', fr: 'aller au travail', de: 'zur Arbeit gehen', pt: 'ir trabalhar', zh: '去上班', ar: 'يذهب إلى العمل', ja: '仕事に行く', ru: 'идти на работу' },
      exampleSentence: 'They go to work by metro.',
      exampleTranslationByLang: { hi: 'वे मेट्रो से काम पर जाते हैं।', es: 'Ellos van al trabajo en metro.' },
      audioText: 'go to work',
      audioId: 'en_a1_u01_l08_v_go_work',
      slowAudioId: 'en_a1_u01_l08_v_go_work_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💼',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_act_start_work',
      word: 'start work',
      phonetic: '/stɑːrt wɝːk/',
      meaning: 'To begin one\'s job duties for the day',
      translationsByLang: { hi: 'काम शुरू करना', es: 'empezar a trabajar', fr: 'commencer le travail', de: 'mit der Arbeit beginnen', pt: 'começar a trabalhar', zh: '开始工作', ar: 'يبدأ العمل', ja: '仕事を始める', ru: 'начинать работу' },
      exampleSentence: 'I start work at 9:00 AM sharp.',
      exampleTranslationByLang: { hi: 'मैं ठीक 9:00 बजे काम शुरू करता हूँ।', es: 'Empiezo a trabajar a las 9:00 AM en punto.' },
      audioText: 'start work',
      audioId: 'en_a1_u01_l08_v_start_work',
      slowAudioId: 'en_a1_u01_l08_v_start_work_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💻',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_act_have_lunch',
      word: 'have lunch',
      phonetic: '/hæv lʌntʃ/',
      meaning: 'To eat the midday meal',
      translationsByLang: { hi: 'दोपहर का भोजन करना / लंच करना', es: 'almorzar / comer al mediodía', fr: 'déjeuner', de: 'zu Mittag essen', pt: 'almoçar', zh: '吃午餐', ar: 'يتناول الغداء', ja: '昼食を食べる', ru: 'обедать' },
      exampleSentence: 'We have lunch at 1:00 PM in the cafeteria.',
      exampleTranslationByLang: { hi: 'हम कैफेटेरिया में दोपहर 1:00 बजे लंच करते हैं।', es: 'Almorzamos a la 1:00 PM en la cafetería.' },
      audioText: 'have lunch',
      audioId: 'en_a1_u01_l08_v_lunch',
      slowAudioId: 'en_a1_u01_l08_v_lunch_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥪',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_act_finish_work',
      word: 'finish work',
      phonetic: '/ˈfɪn.ɪʃ wɝːk/',
      meaning: 'To end one\'s working hours for the day',
      translationsByLang: { hi: 'काम समाप्त करना', es: 'terminar de trabajar', fr: 'finir le travail', de: 'Feierabend machen / Arbeit beenden', pt: 'terminar o trabalho', zh: '下班', ar: 'ينهي العمل', ja: '仕事を終える', ru: 'заканчивать работу' },
      exampleSentence: 'I finish work at 5:30 PM.',
      exampleTranslationByLang: { hi: 'मैं शाम 5:30 बजे काम समाप्त करता हूँ।', es: 'Termino de trabajar a las 5:30 PM.' },
      audioText: 'finish work',
      audioId: 'en_a1_u01_l08_v_finish_work',
      slowAudioId: 'en_a1_u01_l08_v_finish_work_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏁',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_act_arrive_home',
      word: 'arrive home',
      phonetic: '/əˈraɪv hoʊm/',
      meaning: 'To reach one\'s home after traveling',
      translationsByLang: { hi: 'घर पहुँचना', es: 'llegar a casa', fr: 'arriver à la maison', de: 'nach Hause kommen', pt: 'chegar em casa', zh: '到家', ar: 'يصل إلى المنزل', ja: '家に帰着する', ru: 'приходить домой' },
      exampleSentence: 'We arrive home at 6:30 PM.',
      exampleTranslationByLang: { hi: 'हम शाम 6:30 बजे घर पहुँचते हैं।', es: 'Llegamos a casa a las 6:30 PM.' },
      audioText: 'arrive home',
      audioId: 'en_a1_u01_l08_v_arrive_home',
      slowAudioId: 'en_a1_u01_l08_v_arrive_home_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏡',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_act_cook_dinner',
      word: 'cook dinner',
      phonetic: '/kʊk ˈdɪn.ɚ/',
      meaning: 'To prepare the evening meal',
      translationsByLang: { hi: 'रात का खाना पकाना', es: 'cocinar la cena', fr: 'cuisiner le dîner', de: 'Abendessen kochen', pt: 'cozinhar o jantar', zh: '做晚餐', ar: 'يطبخ العشاء', ja: '夕食を作る', ru: 'готовить ужин' },
      exampleSentence: 'I cook dinner with my roommate.',
      exampleTranslationByLang: { hi: 'मैं अपने रूममेट के साथ रात का खाना बनाता हूँ।', es: 'Cocino la cena con mi compañero de piso.' },
      audioText: 'cook dinner',
      audioId: 'en_a1_u01_l08_v_cook_dinner',
      slowAudioId: 'en_a1_u01_l08_v_cook_dinner_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍲',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_act_eat_dinner',
      word: 'eat dinner',
      phonetic: '/iːt ˈdɪn.ɚ/',
      meaning: 'To consume the evening meal',
      translationsByLang: { hi: 'रात का खाना खाना', es: 'cenar / comer la cena', fr: 'dîner', de: 'zu Abend essen', pt: 'jantar', zh: '吃晚餐', ar: 'يتناول العشاء', ja: '夕食を食べる', ru: 'ужинать' },
      exampleSentence: 'They eat dinner at 8:00 PM.',
      exampleTranslationByLang: { hi: 'वे रात 8:00 बजे खाना खाते हैं।', es: 'Ellos cenan a las 8:00 PM.' },
      audioText: 'eat dinner',
      audioId: 'en_a1_u01_l08_v_eat_dinner',
      slowAudioId: 'en_a1_u01_l08_v_eat_dinner_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍽️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_act_watch_tv',
      word: 'watch TV',
      phonetic: '/wɑːtʃ ˌtiːˈviː/',
      meaning: 'To view television programs for entertainment',
      translationsByLang: { hi: 'टीवी देखना', es: 'ver la televisión', fr: 'regarder la télévision', de: 'fernsehen', pt: 'assistir TV', zh: '看电视', ar: 'يشاهد التلفاز', ja: 'テレビを見る', ru: 'смотреть телевизор' },
      exampleSentence: 'In the evening, I watch TV for one hour.',
      exampleTranslationByLang: { hi: 'शाम को मैं एक घंटे टीवी देखता हूँ।', es: 'Por la tarde/noche, veo la televisión durante una hora.' },
      audioText: 'watch TV',
      audioId: 'en_a1_u01_l08_v_watch_tv',
      slowAudioId: 'en_a1_u01_l08_v_watch_tv_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📺',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_act_read_book',
      word: 'read a book',
      phonetic: '/riːd ə bʊk/',
      meaning: 'To read written literature or study material',
      translationsByLang: { hi: 'किताब पढ़ना', es: 'leer un libro', fr: 'lire un livre', de: 'ein Buch lesen', pt: 'ler um livro', zh: '看书 / 读书', ar: 'يقرأ كتاباً', ja: '本を読む', ru: 'читать книгу' },
      exampleSentence: 'I read a book before sleeping.',
      exampleTranslationByLang: { hi: 'मैं सोने से पहले एक किताब पढ़ता हूँ।', es: 'Leo un libro antes de dormir.' },
      audioText: 'read a book',
      audioId: 'en_a1_u01_l08_v_read_book',
      slowAudioId: 'en_a1_u01_l08_v_read_book_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📖',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_act_relax',
      word: 'relax',
      phonetic: '/rɪˈlæks/',
      meaning: 'To rest and do enjoyable quiet activities',
      translationsByLang: { hi: 'आराम करना', es: 'relajarse / descansar', fr: 'se détendre / se relaxer', de: 'sich entspannen', pt: 'relaxar', zh: '放松 / 休息', ar: 'يسترخي', ja: 'リラックスする / くつろぐ', ru: 'отдыхать / расслабляться' },
      exampleSentence: 'On Sunday afternoons, we relax at home.',
      exampleTranslationByLang: { hi: 'रविवार की दोपहर को हम घर पर आराम करते हैं।', es: 'Los domingos por la tarde descansamos en casa.' },
      audioText: 'relax',
      audioId: 'en_a1_u01_l08_v_relax',
      slowAudioId: 'en_a1_u01_l08_v_relax_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧘',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_act_go_bed',
      word: 'go to bed',
      phonetic: '/ɡoʊ tuː bed/',
      meaning: 'To get into bed to sleep for the night',
      translationsByLang: { hi: 'सोने जाना', es: 'irse a la cama / acostarse', fr: 'aller au lit', de: 'ins Bett gehen', pt: 'ir para a cama / deitar-se', zh: '上床睡觉', ar: 'يذهب إلى الفراش', ja: '床につく / 寝る', ru: 'ложиться спать' },
      exampleSentence: 'I go to bed at 11:00 PM.',
      exampleTranslationByLang: { hi: 'मैं रात 11:00 बजे सोने जाता हूँ।', es: 'Me voy a la cama a las 11:00 PM.' },
      audioText: 'go to bed',
      audioId: 'en_a1_u01_l08_v_go_bed',
      slowAudioId: 'en_a1_u01_l08_v_go_bed_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🛌',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_act_sleep',
      word: 'sleep',
      phonetic: '/sliːp/',
      meaning: 'To rest in natural slumber',
      translationsByLang: { hi: 'सोना', es: 'dormir', fr: 'dormir', de: 'schlafen', pt: 'dormir', zh: '睡觉', ar: 'ينام', ja: '眠る', ru: 'спать' },
      exampleSentence: 'I sleep for eight hours every night.',
      exampleTranslationByLang: { hi: 'मैं हर रात आठ घंटे सोता हूँ।', es: 'Duermo ocho horas cada noche.' },
      audioText: 'sleep',
      audioId: 'en_a1_u01_l08_v_sleep',
      slowAudioId: 'en_a1_u01_l08_v_sleep_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '😴',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_act_every_day',
      word: 'every day',
      phonetic: '/ˈev.ri deɪ/',
      meaning: 'On each day of the week without exception',
      translationsByLang: { hi: 'हर दिन / रोज़', es: 'todos los días / cada día', fr: 'tous les jours / chaque jour', de: 'jeden Tag', pt: 'todos os dias', zh: '每天', ar: 'كل يوم', ja: '毎日', ru: 'каждый день' },
      exampleSentence: 'We practice English every day.',
      exampleTranslationByLang: { hi: 'हम हर दिन अंग्रेजी का अभ्यास करते हैं।', es: 'Practicamos inglés todos los días.' },
      audioText: 'every day',
      audioId: 'en_a1_u01_l08_v_every_day',
      slowAudioId: 'en_a1_u01_l08_v_every_day_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📅',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks
  expressions: [
    {
      id: 'chunk_what_time_wake',
      text: 'What time do you wake up?',
      meaning: 'Asking someone about their morning waking time',
      translationsByLang: {
        hi: 'आप किस समय जागते हैं?',
        es: '¿A qué hora te despiertas?',
        fr: 'À quelle heure vous réveillez-vous ?',
        de: 'Um wie viel Uhr stehst du auf?'
      },
      audioText: 'What time do you wake up?',
      audioId: 'en_a1_u01_l08_c_wake_time',
      context: 'Conversations about morning schedules and habits',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_in_the_morning',
      text: 'in the morning / in the evening',
      meaning: 'Standard time-of-day phrases',
      translationsByLang: {
        hi: 'सुबह में / शाम को',
        es: 'por la mañana / por la tarde-noche',
        fr: 'le matin / le soir',
        de: 'am Morgen / am Abend'
      },
      audioText: 'in the morning and in the evening',
      audioId: 'en_a1_u01_l08_c_time_of_day',
      context: 'Describing when daily actions happen',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_at_seven_am',
      text: 'at seven o\'clock',
      meaning: 'Stating exact clock time with "at"',
      translationsByLang: {
        hi: 'सात बजे',
        es: 'a las siete en punto',
        fr: 'à sept heures',
        de: 'um sieben Uhr'
      },
      audioText: 'at seven o\'clock',
      audioId: 'en_a1_u01_l08_c_at_seven',
      context: 'Stating meeting or routine times',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 5 & 6: Grammar
  grammar: {
    patterns: [
      {
        id: 'g_present_simple_affirmative_base',
        title: 'Present Simple Affirmative (I, You, We, They)',
        rule: 'Use the base form of the verb (without -s) with subjects I, you, we, and they to describe habits, routines, and permanent facts.',
        formula: '[I / You / We / They] + [Base Verb] + [Time / Object]',
        examples: [
          { sentence: 'I wake up at 7:00 AM.', translation: 'मैं सुबह 7:00 बजे जागता हूँ। / Me despierto a las 7:00 AM.', audioText: 'I wake up at 7:00 AM.', audioId: 'en_a1_u01_l08_g_ex1' },
          { sentence: 'We work in an office in Madrid.', translation: 'हम मैड्रिड के एक कार्यालय में काम करते हैं। / Trabajamos en una oficina en Madrid.', audioText: 'We work in an office in Madrid.', audioId: 'en_a1_u01_l08_g_ex2' },
          { sentence: 'They eat dinner at 8:30 PM.', translation: 'वे रात 8:30 बजे खाना खाते हैं। / Ellos cenan a las 8:30 PM.', audioText: 'They eat dinner at 8:30 PM.', audioId: 'en_a1_u01_l08_g_ex3' }
        ],
        explanationByLang: {
          hi: 'आदतों और दिनचर्या के लिए I, you, we, they के साथ क्रिया का मूल रूप (Base form) उपयोग किया जाता है। क्रिया में कोई -s या am/is जोड़ने की आवश्यकता नहीं होती।',
          es: 'Para hábitos y rutinas con I, you, we, they usamos la forma base del verbo (sin -s ni verbo be).'
        }
      },
      {
        id: 'g_preposition_at_clock',
        title: 'Preposition "At" with Clock Times',
        rule: 'Always use "at" before specific clock times (at 6:00, at midnight, at noon).',
        formula: '[Action Verb] + at + [Clock Time]',
        examples: [
          { sentence: 'I leave home at 8:30.', translation: 'मैं 8:30 बजे घर से निकलता हूँ। / Salgo de casa a las 8:30.', audioText: 'I leave home at 8:30.', audioId: 'en_a1_u01_l08_g_ex4' },
          { sentence: 'We finish work at 5:00 PM.', translation: 'हम शाम 5:00 बजे काम पूरा करते हैं। / Terminamos de trabajar a las 5:00 PM.', audioText: 'We finish work at 5:00 PM.', audioId: 'en_a1_u01_l08_g_ex5' }
        ],
        explanationByLang: {
          hi: 'निश्चित समय बताने के लिए हमेशा "at" का प्रयोग करें (उदा. at 7:00 AM, at 9:30 PM)।',
          es: 'Usa "at" para indicar horas específicas de reloj (at 7:00 AM, at noon).'
        }
      }
    ]
  },

  // SECTION 7: Common Mistakes
  commonMistakes: [
    {
      id: 'cm_l8_am_verb',
      incorrect: 'I am wake up at 7:00 AM.',
      correct: 'I wake up at 7:00 AM.',
      whyExplanation: 'Do NOT use "am" with action verbs in the Present Simple. Just say "I wake up".',
      explanationsByLang: {
        hi: 'Present Simple में Action Verb से पहले "am" न लगाएँ। "I wake up" सही है, "I am wake up" गलत है।',
        es: 'No mezcles el verbo BE con verbos de acción en presente simple: di "I wake up", nunca "I am wake up".',
        fr: 'Ne pas utiliser "am" avec un verbe d\'action : dites "I wake up".',
        de: 'Nicht "am" mit Vollverben kombinieren: sagen Sie "I wake up".'
      }
    },
    {
      id: 'cm_l8_take_breakfast',
      incorrect: 'I take my breakfast at 8:00.',
      correct: 'I have breakfast at 8:00. / I eat breakfast at 8:00.',
      whyExplanation: 'In natural English, use "have breakfast" or "eat breakfast", not "take breakfast".',
      explanationsByLang: {
        hi: 'अंग्रेजी में भोजन करने के लिए "have breakfast" या "eat breakfast" कहा जाता है, "take breakfast" नहीं।',
        es: 'En inglés natural se dice "have breakfast" o "eat breakfast", no "take breakfast".',
        fr: 'On dit "have breakfast" ou "eat breakfast".',
        de: 'Man sagt "have breakfast" oder "eat breakfast".'
      }
    }
  ],

  // SECTION 11: Dialogue
  dialogues: [
    {
      id: 'd_a1_1_8_daily_routine',
      title: 'Comparing Morning Routines',
      context: 'Daniel and Liam talk about their morning routines before their English class.',
      characters: [
        { id: 'char_daniel', name: 'Daniel', role: 'Student' },
        { id: 'char_liam', name: 'Liam', role: 'Student' }
      ],
      turns: [
        {
          id: 'turn_1',
          speakerId: 'char_daniel',
          speakerName: 'Daniel',
          text: 'What time do you usually wake up, Liam?',
          translationsByLang: { hi: 'लियाम, आप आमतौर पर किस समय उठते हैं?', es: '¿A qué hora te sueles despertar, Liam?' },
          audioText: 'What time do you usually wake up, Liam?',
          audioId: 'en_a1_u01_l08_d01_t1'
        },
        {
          id: 'turn_2',
          speakerId: 'char_liam',
          speakerName: 'Liam',
          text: 'I wake up at 6:30 AM. I take a shower and drink coffee.',
          translationsByLang: { hi: 'मैं सुबह 6:30 बजे उठता हूँ। मैं स्नान करता हूँ और कॉफी पीता हूँ।', es: 'Me despierto a las 6:30 AM. Me ducho y tomo café.' },
          audioText: 'I wake up at 6:30 AM. I take a shower and drink coffee.',
          audioId: 'en_a1_u01_l08_d01_t2'
        },
        {
          id: 'turn_3',
          speakerId: 'char_daniel',
          speakerName: 'Daniel',
          text: 'Do you have breakfast at home?',
          translationsByLang: { hi: 'क्या आप घर पर नाश्ता करते हैं?', es: '¿Desayunas en casa?' },
          audioText: 'Do you have breakfast at home?',
          audioId: 'en_a1_u01_l08_d01_t3'
        },
        {
          id: 'turn_4',
          speakerId: 'char_liam',
          speakerName: 'Liam',
          text: 'Yes, I eat toast and fruit. Then I leave home at 8:00 AM.',
          translationsByLang: { hi: 'हाँ, मैं टोस्ट और फल खाता हूँ। फिर मैं सुबह 8:00 बजे घर से निकलता हूँ।', es: 'Sí, como tostadas y fruta. Luego salgo de casa a las 8:00 AM.' },
          audioText: 'Yes, I eat toast and fruit. Then I leave home at 8:00 AM.',
          audioId: 'en_a1_u01_l08_d01_t4'
        },
        {
          id: 'turn_5',
          speakerId: 'char_daniel',
          speakerName: 'Daniel',
          text: 'I also leave home at 8:00. We can take the bus together!',
          translationsByLang: { hi: 'मैं भी 8:00 बजे घर से निकलता हूँ। हम साथ में बस ले सकते हैं!', es: '¡Yo también salgo de casa a las 8:00! ¡Podemos tomar el autobús juntos!' },
          audioText: 'I also leave home at 8:00. We can take the bus together!',
          audioId: 'en_a1_u01_l08_d01_t5'
        }
      ]
    }
  ],

  // SECTION 8, 9, 10, 12, 13, 14, 15, 16: Practice Exercises
  practiceExercises: [
    {
      id: 'ex_l8_p1',
      lessonId: 'lesson_a1_1_8',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Select the correct verb form for "I":',
      sourceSentence: 'I ___ at 7:00 AM every morning.',
      options: [
        { id: 'o1', text: 'wake up', isCorrect: true },
        { id: 'o2', text: 'am wake up', isCorrect: false },
        { id: 'o3', text: 'waking up', isCorrect: false }
      ],
      explanation: 'With subject "I", use base form "wake up".'
    },
    {
      id: 'ex_l8_p2',
      lessonId: 'lesson_a1_1_8',
      stage: 8,
      type: 'fill_blank',
      prompt: 'Fill in the correct preposition of clock time:',
      sourceSentence: 'We start work ___ 9:00 AM.',
      options: [
        { id: 'o1', text: 'at', isCorrect: true },
        { id: 'o2', text: 'in', isCorrect: false },
        { id: 'o3', text: 'on', isCorrect: false }
      ],
      explanation: 'Use "at" before clock times.'
    },
    {
      id: 'ex_l8_p3',
      lessonId: 'lesson_a1_1_8',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the routine sentence:',
      targetSentence: 'I drink coffee and have breakfast',
      wordBank: ['I', 'drink', 'coffee', 'and', 'have', 'breakfast', 'tea', 'sleep']
    },
    {
      id: 'ex_l8_p4',
      lessonId: 'lesson_a1_1_8',
      stage: 9,
      type: 'listening',
      prompt: 'Listen to the routine and select what you hear:',
      audioText: 'They finish work at six in the evening',
      options: [
        { id: 'o1', text: 'They finish work at six in the evening', isCorrect: true },
        { id: 'o2', text: 'They start work at six in the morning', isCorrect: false },
        { id: 'o3', text: 'They leave home at seven in the evening', isCorrect: false }
      ],
      explanation: 'The speaker states "They finish work at six in the evening".'
    },
    {
      id: 'ex_l8_p5',
      lessonId: 'lesson_a1_1_8',
      stage: 9,
      type: 'listen_and_type',
      prompt: 'Listen and write the phrase exactly:',
      audioText: 'I go to bed at eleven',
      targetSentence: 'I go to bed at eleven'
    },
    {
      id: 'ex_l8_p6',
      lessonId: 'lesson_a1_1_8',
      stage: 10,
      type: 'word_ordering',
      prompt: 'Build the routine question:',
      targetSentence: 'What time do you leave home in the morning',
      wordBank: ['What', 'time', 'do', 'you', 'leave', 'home', 'in', 'the', 'morning', 'when']
    },
    {
      id: 'ex_l8_p7',
      lessonId: 'lesson_a1_1_8',
      stage: 12,
      type: 'speaking',
      prompt: 'Read this daily habit aloud:',
      targetSentence: 'I brush my teeth and take a shower.',
      audioText: 'I brush my teeth and take a shower.'
    },
    {
      id: 'ex_l8_p8',
      lessonId: 'lesson_a1_1_8',
      stage: 13,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'हम शाम को 8:00 बजे रात का खाना खाते हैं।',
      sourceTranslations: {
        hi: 'हम शाम को 8:00 बजे रात का खाना खाते हैं।',
        es: 'Cenamos a las 8:00 de la tarde.'
      },
      targetSentence: 'We eat dinner at eight in the evening',
      wordBank: ['We', 'eat', 'dinner', 'at', 'eight', 'in', 'the', 'evening', 'morning', 'they']
    },
    {
      id: 'ex_l8_p9',
      lessonId: 'lesson_a1_1_8',
      stage: 14,
      type: 'fill_blank',
      prompt: 'Interleaved Practice (Combining Lesson 7 Places & Lesson 8 Verbs):',
      sourceSentence: 'I work at a ___ in the city center.',
      options: [
        { id: 'o1', text: 'hospital', isCorrect: true },
        { id: 'o2', text: 'breakfast', isCorrect: false },
        { id: 'o3', text: 'shower', isCorrect: false }
      ],
      explanation: 'Hospital is a workplace location.'
    },
    {
      id: 'ex_l8_p10',
      lessonId: 'lesson_a1_1_8',
      stage: 15,
      type: 'error_correction',
      prompt: 'Fix the error in Present Simple usage:',
      sourceSentence: 'I am eat lunch at 1:00 PM.',
      options: [
        { id: 'o1', text: 'I eat lunch at 1:00 PM.', isCorrect: true },
        { id: 'o2', text: 'I am eating lunch at 1:00 PM.', isCorrect: false },
        { id: 'o3', text: 'I eats lunch at 1:00 PM.', isCorrect: false }
      ],
      explanation: 'Do not use "am" with Present Simple base verbs: "I eat lunch".'
    },
    {
      id: 'ex_l8_p11',
      lessonId: 'lesson_a1_1_8',
      stage: 16,
      type: 'dialogue_completion',
      prompt: 'Choose the natural answer to the schedule question:',
      sourceSentence: 'Colleague: "When do you start work?" -> You: "___"',
      options: [
        { id: 'o1', text: 'I start work at 9:00 AM.', isCorrect: true },
        { id: 'o2', text: 'It is a red car.', isCorrect: false },
        { id: 'o3', text: 'Next to the pharmacy.', isCorrect: false }
      ],
      explanation: 'Directly answers the time work starts.'
    },
    {
      id: 'ex_l8_p12',
      lessonId: 'lesson_a1_1_8',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Which phrase means to rest in the evening?',
      sourceSentence: 'Evening habit vocabulary:',
      options: [
        { id: 'o1', text: 'watch TV and relax', isCorrect: true },
        { id: 'o2', text: 'wake up early', isCorrect: false },
        { id: 'o3', text: 'leave home', isCorrect: false }
      ],
      explanation: 'Watching TV and relaxing are quiet evening activities.'
    },
    {
      id: 'ex_l8_p13',
      lessonId: 'lesson_a1_1_8',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Choose the correct sentence with "they":',
      sourceSentence: 'Habitual action:',
      options: [
        { id: 'o1', text: 'They arrive home at seven.', isCorrect: true },
        { id: 'o2', text: 'They are arrive home at seven.', isCorrect: false },
        { id: 'o3', text: 'They arrives home at seven.', isCorrect: false }
      ],
      explanation: 'They pairs with base form "arrive".'
    },
    {
      id: 'ex_l8_p14',
      lessonId: 'lesson_a1_1_8',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Construct the sentence:',
      targetSentence: 'We cook dinner together every night',
      wordBank: ['We', 'cook', 'dinner', 'together', 'every', 'night', 'at', 'sleep']
    },
    {
      id: 'ex_l8_p15',
      lessonId: 'lesson_a1_1_8',
      stage: 12,
      type: 'speaking',
      prompt: 'Say this routine into your microphone:',
      targetSentence: 'I read a book before I go to bed.',
      audioText: 'I read a book before I go to bed.'
    }
  ],

  // SECTION 16: Review Exercises
  reviewExercises: [
    {
      id: 'ex_l8_rev1',
      lessonId: 'lesson_a1_1_8',
      stage: 16,
      type: 'multiple_choice',
      prompt: 'Which verb phrase collocates with "breakfast"?',
      sourceSentence: 'Collocation review:',
      options: [
        { id: 'o1', text: 'have breakfast', isCorrect: true },
        { id: 'o2', text: 'make shower', isCorrect: false },
        { id: 'o3', text: 'brush breakfast', isCorrect: false }
      ],
      explanation: '"Have breakfast" is the standard collocation.'
    },
    {
      id: 'ex_l8_rev2',
      lessonId: 'lesson_a1_1_8',
      stage: 16,
      type: 'fill_blank',
      prompt: 'Fill in the correct time-of-day preposition:',
      sourceSentence: 'I drink coffee ___ the morning.',
      options: [
        { id: 'o1', text: 'in', isCorrect: true },
        { id: 'o2', text: 'at', isCorrect: false },
        { id: 'o3', text: 'on', isCorrect: false }
      ],
      explanation: 'Use "in the morning".'
    },
    {
      id: 'ex_l8_rev3',
      lessonId: 'lesson_a1_1_8',
      stage: 16,
      type: 'word_ordering',
      prompt: 'Assemble the sentence correctly:',
      targetSentence: 'They sleep for eight hours every night',
      wordBank: ['They', 'sleep', 'for', 'eight', 'hours', 'every', 'night', 'at']
    },
    {
      id: 'ex_l8_rev4',
      lessonId: 'lesson_a1_1_8',
      stage: 16,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'मैं रोज सुबह 7:00 बजे उठता हूँ।',
      sourceTranslations: { hi: 'मैं रोज सुबह 7:00 बजे उठता हूँ।', es: 'Me levanto a las 7:00 todas las mañanas.' },
      targetSentence: 'I get up at seven every morning',
      wordBank: ['I', 'get', 'up', 'at', 'seven', 'every', 'morning', 'am', 'we']
    }
  ],

  // SECTION 17: Assessment Exercises (10 items)
  assessmentExercises: [
    {
      id: 'ex_l8_a1',
      lessonId: 'lesson_a1_1_8',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Choose the correct base verb form:',
      sourceSentence: 'You ___ English very well.',
      options: [
        { id: 'o1', text: 'speak', isCorrect: true },
        { id: 'o2', text: 'speaks', isCorrect: false },
        { id: 'o3', text: 'are speak', isCorrect: false },
        { id: 'o4', text: 'speaking', isCorrect: false }
      ],
      explanation: 'With subject "You", use base form "speak".'
    },
    {
      id: 'ex_l8_a2',
      lessonId: 'lesson_a1_1_8',
      stage: 17,
      type: 'fill_blank',
      prompt: 'Fill in the blank with the correct time preposition:',
      sourceSentence: 'We have lunch ___ 12:30 PM.',
      options: [
        { id: 'o1', text: 'at', isCorrect: true },
        { id: 'o2', text: 'in', isCorrect: false },
        { id: 'o3', text: 'on', isCorrect: false },
        { id: 'o4', text: 'to', isCorrect: false }
      ],
      explanation: 'Use "at" with clock times.'
    },
    {
      id: 'ex_l8_a3',
      lessonId: 'lesson_a1_1_8',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Build the routine sentence:',
      targetSentence: 'I leave home at eight in the morning',
      wordBank: ['I', 'leave', 'home', 'at', 'eight', 'in', 'the', 'morning', 'you']
    },
    {
      id: 'ex_l8_a4',
      lessonId: 'lesson_a1_1_8',
      stage: 17,
      type: 'error_correction',
      prompt: 'Correct the sentence structure:',
      sourceSentence: 'We are wake up at 6:00 AM.',
      options: [
        { id: 'o1', text: 'We wake up at 6:00 AM.', isCorrect: true },
        { id: 'o2', text: 'We wakes up at 6:00 AM.', isCorrect: false },
        { id: 'o3', text: 'We are waking up at 6:00 AM.', isCorrect: false }
      ],
      explanation: 'Omit "are" in Present Simple routine descriptions: "We wake up".'
    },
    {
      id: 'ex_l8_a5',
      lessonId: 'lesson_a1_1_8',
      stage: 17,
      type: 'listening',
      prompt: 'Listen and select what the speaker does:',
      audioText: 'I cook dinner at seven thirty',
      options: [
        { id: 'o1', text: 'I cook dinner at seven thirty', isCorrect: true },
        { id: 'o2', text: 'I eat breakfast at seven thirty', isCorrect: false },
        { id: 'o3', text: 'I arrive home at seven thirty', isCorrect: false }
      ],
      explanation: 'The audio states "I cook dinner at seven thirty".'
    },
    {
      id: 'ex_l8_a6',
      lessonId: 'lesson_a1_1_8',
      stage: 17,
      type: 'listen_and_type',
      prompt: 'Listen and transcribe the sentence:',
      audioText: 'We finish work at five',
      targetSentence: 'We finish work at five'
    },
    {
      id: 'ex_l8_a7',
      lessonId: 'lesson_a1_1_8',
      stage: 17,
      type: 'dialogue_completion',
      prompt: 'Select the best reply:',
      sourceSentence: 'Friend: "What do you do in the evening?" -> You: "___"',
      options: [
        { id: 'o1', text: 'I cook dinner and watch TV.', isCorrect: true },
        { id: 'o2', text: 'It is ten dollars.', isCorrect: false },
        { id: 'o3', text: 'I am from Canada.', isCorrect: false }
      ],
      explanation: 'Describes evening activities.'
    },
    {
      id: 'ex_l8_a8',
      lessonId: 'lesson_a1_1_8',
      stage: 17,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'वे रात 11:00 बजे सोने जाते हैं।',
      sourceTranslations: { hi: 'वे रात 11:00 बजे सोने जाते हैं।', es: 'Ellos se van a la cama a las 11:00 de la noche.' },
      targetSentence: 'They go to bed at eleven at night',
      wordBank: ['They', 'go', 'to', 'bed', 'at', 'eleven', 'at', 'night', 'in', 'we']
    },
    {
      id: 'ex_l8_a9',
      lessonId: 'lesson_a1_1_8',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Complete with the natural action verb:',
      sourceSentence: 'Before I sleep, I ___ a book.',
      options: [
        { id: 'o1', text: 'read', isCorrect: true },
        { id: 'o2', text: 'cook', isCorrect: false },
        { id: 'o3', text: 'leave', isCorrect: false },
        { id: 'o4', text: 'take', isCorrect: false }
      ],
      explanation: '"Read a book" is the correct verb-noun pair.'
    },
    {
      id: 'ex_l8_a10',
      lessonId: 'lesson_a1_1_8',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the final question:',
      targetSentence: 'What time do they arrive home every evening',
      wordBank: ['What', 'time', 'do', 'they', 'arrive', 'home', 'every', 'evening', 'when', 'is']
    }
  ]
};
