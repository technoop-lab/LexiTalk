import { DetailedLessonData } from '../../types';

export const LESSON_A1_1_11_DATA: DetailedLessonData = {
  id: 'lesson_a1_1_11',
  unitId: 'unit_a1_1',
  title: 'Present Simple Negative (Don\'t / Doesn\'t)',
  cefr: 'A1',
  icon: '⛔',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Negations in the Present Simple',
    description: 'Learn how to form negative sentences in the Present Simple using auxiliary verbs "don\'t" (do not) for I/you/we/they and "doesn\'t" (does not) for he/she/it, followed by the base form of the verb.',
    descriptionsByLang: {
      hi: 'Present Simple में नकारात्मक (Negative) वाक्य बनाना सीखें। I/you/we/they के साथ "don\'t" और he/she/it के साथ "doesn\'t" का प्रयोग करें, और हमेशा क्रिया का मूल रूप (Base form) रखें।',
      es: 'Aprende a formar oraciones negativas en Presente Simple usando "don\'t" (I, you, we, they) y "doesn\'t" (he, she, it) seguidos de la forma base del verbo.',
      fr: 'Apprenez à former la négation au Présent Simple avec "don\'t" et "doesn\'t" suivis de la base verbale.',
      de: 'Lernen Sie die Verneinung im Present Simple mit "don\'t" und "doesn\'t" plus Grundform des Verbs.',
      pt: 'Aprenda a formar frases negativas no Presente Simples usando "don\'t" e "doesn\'t" seguidos do verbo base.',
      zh: '学习使用助动词 don\'t 和 doesn\'t 构成一般现在时否定句，掌握否定句中谓语动词一律用原形的规则。',
      ar: 'تعلم صياغة النفي في زمن المضارع البسيط باستخدام don\'t و doesn\'t متبوعة بالمصدر.',
      ja: 'don\'tとdoesn\'tを用いた現在形の否定文の作り方と、doesn\'tの後は動詞の原形に戻るルールを学びます。',
      ru: 'Научитесь строить отрицательные предложения в Present Simple с помощью don\'t и doesn\'t + начальная форма глагола.'
    },
    canDoStatements: [
      'Use "don\'t" + base verb with subjects I, you, we, and they',
      'Use "doesn\'t" + base verb with subjects he, she, and it (removing the "-s" from main verb)',
      'State foods, habits, and activities you do not do or like',
      'Describe things other people do not possess or do',
      'Identify and correct the common double-marking error (e.g. "*He doesn\'t works*")'
    ],
    canDoByLang: {
      hi: [
        'I/You/We/They के साथ "don\'t" + base verb का प्रयोग',
        'He/She/It के साथ "doesn\'t" + base verb का प्रयोग (क्रिया से -s हटाना)',
        'नापसंद और उन गतिविधियों का वर्णन करना जो आप या अन्य लोग नहीं करते'
      ],
      es: [
        'Usar "don\'t" con I, you, we, they y "doesn\'t" con he, she, it',
        'Recordar que tras "doesn\'t" el verbo vuelve a su forma base (sin -s)',
        'Expresar hábitos y preferencias negativas'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (20 items)
  vocabulary: [
    {
      id: 'v_neg_dont',
      word: 'don\'t',
      phonetic: '/doʊnt/',
      meaning: 'Contraction of "do not" (used with I, you, we, they)',
      translationsByLang: { hi: 'नहीं (do not)', es: 'no (contracción de do not)', fr: 'ne... pas', de: 'nicht (do not)', pt: 'não (do not)', zh: '不 (do not)', ar: 'لا (do not)', ja: '〜しない', ru: 'не (do not)' },
      exampleSentence: 'I don\'t drink coffee in the evening.',
      exampleTranslationByLang: { hi: 'मैं शाम को कॉफी नहीं पीता।', es: 'No tomo café por la tarde.' },
      audioText: 'don\'t',
      audioId: 'en_a1_u01_l11_v_dont',
      slowAudioId: 'en_a1_u01_l11_v_dont_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚫',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_neg_doesnt',
      word: 'doesn\'t',
      phonetic: '/ˈdʌz.ənt/',
      meaning: 'Contraction of "does not" (used with he, she, it)',
      translationsByLang: { hi: 'नहीं करता/करती (does not)', es: 'no (contracción de does not)', fr: 'ne... pas (3e pers)', de: 'nicht (does not)', pt: 'não (does not)', zh: '不 (does not)', ar: 'لا (does not)', ja: '〜しない (3人称)', ru: 'не (does not)' },
      exampleSentence: 'She doesn\'t eat meat.',
      exampleTranslationByLang: { hi: 'वह मांस (मीट) नहीं खाती।', es: 'Ella no come carne.' },
      audioText: 'doesn\'t',
      audioId: 'en_a1_u01_l11_v_doesnt',
      slowAudioId: 'en_a1_u01_l11_v_doesnt_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⛔',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_neg_like',
      word: 'like',
      phonetic: '/laɪk/',
      meaning: 'To find something pleasant or enjoyable',
      translationsByLang: { hi: 'पसंद करना', es: 'gustar', fr: 'aimer', de: 'mögen', pt: 'gostar', zh: '喜欢', ar: 'يحب / يعجبه', ja: '好む / 好きである', ru: 'нравиться / любить' },
      exampleSentence: 'We don\'t like noisy places.',
      exampleTranslationByLang: { hi: 'हमें शोर-शराबे वाली जगहें पसंद नहीं हैं।', es: 'No nos gustan los lugares ruidosos.' },
      audioText: 'like',
      audioId: 'en_a1_u01_l11_v_like',
      slowAudioId: 'en_a1_u01_l11_v_like_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👍',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_neg_know',
      word: 'know',
      phonetic: '/noʊ/',
      meaning: 'To possess knowledge or information about something',
      translationsByLang: { hi: 'जानना / पता होना', es: 'saber / conocer', fr: 'savoir / connaître', de: 'wissen / kennen', pt: 'saber / conhecer', zh: '知道 / 认识', ar: 'يعرف', ja: '知る / 知っている', ru: 'знать' },
      exampleSentence: 'I don\'t know the answer to this question.',
      exampleTranslationByLang: { hi: 'मुझे इस सवाल का जवाब नहीं पता।', es: 'No sé la respuesta a esta pregunta.' },
      audioText: 'know',
      audioId: 'en_a1_u01_l11_v_know',
      slowAudioId: 'en_a1_u01_l11_v_know_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💡',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_neg_understand',
      word: 'understand',
      phonetic: '/ˌʌn.dɚˈstænd/',
      meaning: 'To comprehend the meaning of words or ideas',
      translationsByLang: { hi: 'समझना', es: 'entender / comprender', fr: 'comprendre', de: 'verstehen', pt: 'entender / compreender', zh: '理解 / 明白', ar: 'يفهم', ja: '理解する', ru: 'понимать' },
      exampleSentence: 'He doesn\'t understand Italian.',
      exampleTranslationByLang: { hi: 'उसे इतालवी भाषा समझ नहीं आती।', es: 'Él no entiende italiano.' },
      audioText: 'understand',
      audioId: 'en_a1_u01_l11_v_understand',
      slowAudioId: 'en_a1_u01_l11_v_understand_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧠',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_neg_need',
      word: 'need',
      phonetic: '/niːd/',
      meaning: 'To require something essential',
      translationsByLang: { hi: 'जरूरत होना / आवश्यकता होना', es: 'necesitar', fr: 'avoir besoin de', de: 'brauchen / benötigen', pt: 'precisar', zh: '需要', ar: 'يحتاج', ja: '必要とする', ru: 'нуждаться / требоваться' },
      exampleSentence: 'You don\'t need a jacket today, it is warm.',
      exampleTranslationByLang: { hi: 'आज आपको जैकेट की जरूरत नहीं है, मौसम गर्म है।', es: 'No necesitas una chaqueta hoy, hace calor.' },
      audioText: 'need',
      audioId: 'en_a1_u01_l11_v_need',
      slowAudioId: 'en_a1_u01_l11_v_need_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧥',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_neg_want',
      word: 'want',
      phonetic: '/wɑːnt/',
      meaning: 'To have a desire for something',
      translationsByLang: { hi: 'चाहना / इच्छा होना', es: 'querer / desear', fr: 'vouloir', de: 'wollen / möchten', pt: 'querer', zh: '想要', ar: 'يريد', ja: '欲しい / 望む', ru: 'хотеть' },
      exampleSentence: 'They don\'t want sweet dessert.',
      exampleTranslationByLang: { hi: 'वे मीठा डेजर्ट नहीं चाहते।', es: 'Ellos no quieren postre dulce.' },
      audioText: 'want',
      audioId: 'en_a1_u01_l11_v_want',
      slowAudioId: 'en_a1_u01_l11_v_want_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍰',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_neg_eat_meat',
      word: 'eat meat',
      phonetic: '/iːt miːt/',
      meaning: 'To consume animal flesh as food',
      translationsByLang: { hi: 'मांस खाना', es: 'comer carne', fr: 'manger de la viande', de: 'Fleisch essen', pt: 'comer carne', zh: '吃肉', ar: 'يأكل اللحم', ja: '肉を食べる', ru: 'есть мясо' },
      exampleSentence: 'My sister is vegetarian; she doesn\'t eat meat.',
      exampleTranslationByLang: { hi: 'मेरी बहन शाकाहारी है; वह मांस नहीं खाती।', es: 'Mi hermana es vegetariana; ella no come carne.' },
      audioText: 'eat meat',
      audioId: 'en_a1_u01_l11_v_eat_meat',
      slowAudioId: 'en_a1_u01_l11_v_eat_meat_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥩',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_neg_drink_alcohol',
      word: 'drink alcohol',
      phonetic: '/drɪŋk ˈæl.kə.hɑːl/',
      meaning: 'To consume alcoholic beverages',
      translationsByLang: { hi: 'शराब पीना', es: 'beber alcohol', fr: 'boire de l\'alcool', de: 'Alkohol trinken', pt: 'beber álcool', zh: '饮酒 / 喝酒', ar: 'يشرب الكحول', ja: '酒を飲む', ru: 'пить алкоголь' },
      exampleSentence: 'I don\'t drink alcohol when I drive.',
      exampleTranslationByLang: { hi: 'जब मैं गाड़ी चलाता हूँ तो शराब नहीं पीता।', es: 'No bebo alcohol cuando conduzco.' },
      audioText: 'drink alcohol',
      audioId: 'en_a1_u01_l11_v_alcohol',
      slowAudioId: 'en_a1_u01_l11_v_alcohol_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍷',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_neg_smoke',
      word: 'smoke',
      phonetic: '/smoʊk/',
      meaning: 'To inhale cigarette or tobacco smoke',
      translationsByLang: { hi: 'धूम्रपान करना / सिगरेट पीना', es: 'fumar', fr: 'fumer', de: 'rauchen', pt: 'fumar', zh: '吸烟 / 抽烟', ar: 'يدخن', ja: 'タバコを吸う', ru: 'курить' },
      exampleSentence: 'He doesn\'t smoke cigarettes.',
      exampleTranslationByLang: { hi: 'वह सिगरेट नहीं पीता।', es: 'Él no fuma cigarrillos.' },
      audioText: 'smoke',
      audioId: 'en_a1_u01_l11_v_smoke',
      slowAudioId: 'en_a1_u01_l11_v_smoke_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚭',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_neg_drive_car',
      word: 'drive a car',
      phonetic: '/draɪv ə kɑːr/',
      meaning: 'To operate an automobile',
      translationsByLang: { hi: 'कार चलाना', es: 'conducir un coche', fr: 'conduire une voiture', de: 'Auto fahren', pt: 'dirigir um carro', zh: '开车', ar: 'يقود سيارة', ja: '車を運転する', ru: 'водить машину' },
      exampleSentence: 'She doesn\'t drive a car; she takes the metro.',
      exampleTranslationByLang: { hi: 'वह कार नहीं चलाती; वह मेट्रो से जाती है।', es: 'Ella no conduce coche; toma el metro.' },
      audioText: 'drive a car',
      audioId: 'en_a1_u01_l11_v_drive_car',
      slowAudioId: 'en_a1_u01_l11_v_drive_car_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚗',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_neg_live_alone',
      word: 'live alone',
      phonetic: '/lɪv əˈloʊn/',
      meaning: 'To reside by oneself without roommates or family',
      translationsByLang: { hi: 'अकेले रहना', es: 'vivir solo/a', fr: 'vivre seul/e', de: 'alleine wohnen', pt: 'morar sozinho/a', zh: '独自居住', ar: 'يعيش بمفرده', ja: '一人暮らしをする', ru: 'жить одному' },
      exampleSentence: 'I don\'t live alone; I live with two friends.',
      exampleTranslationByLang: { hi: 'मैं अकेले नहीं रहता; मैं दो दोस्तों के साथ रहता हूँ।', es: 'No vivo solo; vivo con dos amigos.' },
      audioText: 'live alone',
      audioId: 'en_a1_u01_l11_v_live_alone',
      slowAudioId: 'en_a1_u01_l11_v_live_alone_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👤',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_neg_work_weekends',
      word: 'work on weekends',
      phonetic: '/wɝːk ɑːn ˈwiːk.endz/',
      meaning: 'To perform job duties on Saturday or Sunday',
      translationsByLang: { hi: 'सप्ताहांत (वीकेंड) पर काम करना', es: 'trabajar los fines de semana', fr: 'travailler le week-end', de: 'am Wochenende arbeiten', pt: 'trabalhar nos fins de semana', zh: '周末工作', ar: 'يعمل في عطلة نهاية الأسبوع', ja: '週末に働く', ru: 'работать по выходным' },
      exampleSentence: 'We don\'t work on weekends.',
      exampleTranslationByLang: { hi: 'हम वीकेंड पर काम नहीं करते।', es: 'No trabajamos los fines de semana.' },
      audioText: 'work on weekends',
      audioId: 'en_a1_u01_l11_v_work_weekends',
      slowAudioId: 'en_a1_u01_l11_v_work_weekends_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏖️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_neg_have_pet',
      word: 'have a pet',
      phonetic: '/hæv ə pet/',
      meaning: 'To keep a domestic animal at home',
      translationsByLang: { hi: 'पालतू जानवर होना', es: 'tener una mascota', fr: 'avoir un animal de compagnie', de: 'ein Haustier haben', pt: 'ter um animal de estimação', zh: '养宠物', ar: 'يملك حيواناً أليفاً', ja: 'ペットを飼う', ru: 'иметь питомца' },
      exampleSentence: 'He doesn\'t have a pet in his apartment.',
      exampleTranslationByLang: { hi: 'उसके अपार्टमेंट में कोई पालतू जानवर नहीं है।', es: 'Él no tiene mascota en su apartamento.' },
      audioText: 'have a pet',
      audioId: 'en_a1_u01_l11_v_have_pet',
      slowAudioId: 'en_a1_u01_l11_v_have_pet_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🐕',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_neg_speak_french',
      word: 'speak French',
      phonetic: '/spiːk frentʃ/',
      meaning: 'To communicate in the French language',
      translationsByLang: { hi: 'फ्रेंच बोलना', es: 'hablar francés', fr: 'parler français', de: 'Französisch sprechen', pt: 'falar francês', zh: '讲法语', ar: 'يتحدث الفرنسية', ja: 'フランス語を話す', ru: 'говорить по-французски' },
      exampleSentence: 'I speak Spanish, but I don\'t speak French.',
      exampleTranslationByLang: { hi: 'मैं स्पेनिश बोलता हूँ, लेकिन मुझे फ्रेंच नहीं आती।', es: 'Hablo español, pero no hablo francés.' },
      audioText: 'speak French',
      audioId: 'en_a1_u01_l11_v_speak_french',
      slowAudioId: 'en_a1_u01_l11_v_speak_french_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🗣️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_neg_watch_tv',
      word: 'watch TV',
      phonetic: '/wɑːtʃ ˌtiːˈviː/',
      meaning: 'To view television programs',
      translationsByLang: { hi: 'टीवी देखना', es: 'ver la televisión', fr: 'regarder la télévision', de: 'fernsehen', pt: 'assistir TV', zh: '看电视', ar: 'يشاهد التلفاز', ja: 'テレビを見る', ru: 'смотреть телевизор' },
      exampleSentence: 'They don\'t watch TV; they prefer reading books.',
      exampleTranslationByLang: { hi: 'वे टीवी नहीं देखते; वे किताबें पढ़ना पसंद करते हैं।', es: 'Ellos no ven la televisión; prefieren leer libros.' },
      audioText: 'watch TV',
      audioId: 'en_a1_u01_l11_v_watch_tv',
      slowAudioId: 'en_a1_u01_l11_v_watch_tv_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📺',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_neg_wake_up_early',
      word: 'wake up early',
      phonetic: '/weɪk ʌp ˈɝː.li/',
      meaning: 'To rise at an early morning hour',
      translationsByLang: { hi: 'जल्दी जागना', es: 'despertarse temprano', fr: 'se réveiller tôt', de: 'früh aufwachen', pt: 'acordar cedo', zh: '早起', ar: 'يستيقظ مبكراً', ja: '早起きする', ru: 'рано просыпаться' },
      exampleSentence: 'On Sunday, I don\'t wake up early.',
      exampleTranslationByLang: { hi: 'रविवार को मैं जल्दी नहीं जागता।', es: 'El domingo no me despierto temprano.' },
      audioText: 'wake up early',
      audioId: 'en_a1_u01_l11_v_wake_early',
      slowAudioId: 'en_a1_u01_l11_v_wake_early_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌅',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_neg_drink_tea',
      word: 'drink tea',
      phonetic: '/drɪŋk tiː/',
      meaning: 'To consume hot brewed tea',
      translationsByLang: { hi: 'चाय पीना', es: 'tomar té', fr: 'boire du thé', de: 'Tee trinken', pt: 'beber chá', zh: '喝茶', ar: 'يشرب الشاي', ja: 'お茶を飲む', ru: 'пить чай' },
      exampleSentence: 'She doesn\'t drink tea; she only drinks water.',
      exampleTranslationByLang: { hi: 'वह चाय नहीं पीती; वह केवल पानी पीती है।', es: 'Ella no toma té; solo bebe agua.' },
      audioText: 'drink tea',
      audioId: 'en_a1_u01_l11_v_drink_tea',
      slowAudioId: 'en_a1_u01_l11_v_drink_tea_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍵',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_neg_live_here',
      word: 'live here',
      phonetic: '/lɪv hɪr/',
      meaning: 'To reside at this specific address or place',
      translationsByLang: { hi: 'यहाँ रहना', es: 'vivir aquí', fr: 'habiter ici', de: 'hier wohnen', pt: 'morar aqui', zh: '住在这里', ar: 'يعيش هنا', ja: 'ここに住む', ru: 'жить здесь' },
      exampleSentence: 'They don\'t live here anymore.',
      exampleTranslationByLang: { hi: 'वे अब यहाँ नहीं रहते।', es: 'Ellos ya no viven aquí.' },
      audioText: 'live here',
      audioId: 'en_a1_u01_l11_v_live_here',
      slowAudioId: 'en_a1_u01_l11_v_live_here_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📍',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_neg_buy_expensive',
      word: 'buy expensive things',
      phonetic: '/baɪ ɪkˈspen.sɪv θɪŋz/',
      meaning: 'To purchase high-cost items',
      translationsByLang: { hi: 'महंगी चीजें खरीदना', es: 'comprar cosas caras', fr: 'acheter des choses chères', de: 'teure Dinge kaufen', pt: 'comprar coisas caras', zh: '买昂贵的东西', ar: 'يشتري أشياء باهظة الثمن', ja: '高い物を買う', ru: 'покупать дорогие вещи' },
      exampleSentence: 'We don\'t buy expensive clothes.',
      exampleTranslationByLang: { hi: 'हम महंगे कपड़े नहीं खरीदते।', es: 'No compramos ropa cara.' },
      audioText: 'buy expensive things',
      audioId: 'en_a1_u01_l11_v_buy_expensive',
      slowAudioId: 'en_a1_u01_l11_v_buy_expensive_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏷️',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks
  expressions: [
    {
      id: 'chunk_i_dont_know',
      text: 'I don\'t know.',
      meaning: 'Expressing lack of information or certainty',
      translationsByLang: {
        hi: 'मुझे नहीं पता।',
        es: 'No lo sé.',
        fr: 'Je ne sais pas.',
        de: 'Ich weiß es nicht.'
      },
      audioText: 'I don\'t know.',
      audioId: 'en_a1_u01_l11_c_dont_know',
      context: 'Everyday conversations when answering questions',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_i_dont_understand',
      text: 'I don\'t understand.',
      meaning: 'Stating that you do not comprehend something said',
      translationsByLang: {
        hi: 'मुझे समझ नहीं आया।',
        es: 'No entiendo.',
        fr: 'Je ne comprends pas.',
        de: 'Ich verstehe nicht.'
      },
      audioText: 'I don\'t understand.',
      audioId: 'en_a1_u01_l11_c_dont_understand',
      context: 'Classroom and travel communication clarification',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_she_doesnt_like',
      text: 'She doesn\'t like spicy food.',
      meaning: 'Expressing someone else\'s food dislike',
      translationsByLang: {
        hi: 'उसे मसालेदार खाना पसंद नहीं है।',
        es: 'A ella no le gusta la comida picante.',
        fr: 'Elle n\'aime pas la nourriture épicée.',
        de: 'Sie mag kein scharfes Essen.'
      },
      audioText: 'She doesn\'t like spicy food.',
      audioId: 'en_a1_u01_l11_c_doesnt_like_spicy',
      context: 'Dining out and food preference discussions',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 5 & 6: Grammar
  grammar: {
    patterns: [
      {
        id: 'g_present_simple_negative_formula',
        title: 'Present Simple Negative Structure (Don\'t / Doesn\'t)',
        rule: 'For I, you, we, they: use "don\'t" + BASE VERB. For he, she, it: use "doesn\'t" + BASE VERB (the "-s" on the main verb is removed because "does" already carries it).',
        formula: '[I / You / We / They] + don\'t + [Base Verb] | [He / She / It] + doesn\'t + [Base Verb]',
        examples: [
          { sentence: 'I don\'t work on Sundays.', translation: 'मैं रविवार को काम नहीं करता। / No trabajo los domingos.', audioText: 'I don\'t work on Sundays.', audioId: 'en_a1_u01_l11_g_ex1' },
          { sentence: 'He doesn\'t live in Paris.', translation: 'वह पेरिस में नहीं रहता। / Él no vive en París.', audioText: 'He doesn\'t live in Paris.', audioId: 'en_a1_u01_l11_g_ex2' },
          { sentence: 'She doesn\'t have a car.', translation: 'उसके पास कार नहीं है। / Ella no tiene coche.', audioText: 'She doesn\'t have a car.', audioId: 'en_a1_u01_l11_g_ex3' }
        ],
        explanationByLang: {
          hi: 'नकारात्मक वाक्यों में I/You/We/They के साथ "don\'t" और He/She/It के साथ "doesn\'t" आता है। "doesn\'t" के बाद मुख्य क्रिया में कभी भी -s नहीं लगाते (उदा. "He doesn\'t work", "He doesn\'t works" गलत है)।',
          es: 'En oraciones negativas usa "don\'t" con I/you/we/they y "doesn\'t" con he/she/it. Después de "doesn\'t", el verbo SIEMPRE va en infinitivo/base sin "-s" (He doesn\'t work).'
        }
      },
      {
        id: 'g_negative_have_vs_has',
        title: 'Negative Possession: "doesn\'t have" (Never "*doesn\'t has*")',
        rule: 'In negative sentences with he/she/it, the irregular verb "have" returns to its base form: "doesn\'t have".',
        formula: '[He / She / It] + doesn\'t have + [Noun]',
        examples: [
          { sentence: 'She doesn\'t have a bicycle.', translation: 'उसके पास साइकिल नहीं है। / Ella no tiene bicicleta.', audioText: 'She doesn\'t have a bicycle.', audioId: 'en_a1_u01_l11_g_ex4' },
          { sentence: 'Mark doesn\'t have enough time.', translation: 'मार्क के पास पर्याप्त समय नहीं है। / Mark no tiene suficiente tiempo.', audioText: 'Mark doesn\'t have enough time.', audioId: 'en_a1_u01_l11_g_ex5' }
        ],
        explanationByLang: {
          hi: 'नकारात्मक वाक्यों में "doesn\'t" के बाद हमेशा "have" आता है, "doesn\'t has" कभी नहीं होता।',
          es: 'En oraciones negativas con he/she/it di "doesn\'t have", NUNCA "*doesn\'t has*".'
        }
      }
    ]
  },

  // SECTION 7: Common Mistakes
  commonMistakes: [
    {
      id: 'cm_l11_double_marking',
      incorrect: 'He doesn\'t works in a bank.',
      correct: 'He doesn\'t work in a bank.',
      whyExplanation: 'When "doesn\'t" is used, the main verb MUST be in base form without "-s".',
      explanationsByLang: {
        hi: '"doesn\'t" के बाद क्रिया में -s न जोड़ें: "He doesn\'t work" सही है।',
        es: 'No añadas "-s" al verbo si ya usas "doesn\'t": "He doesn\'t work".',
        fr: 'Ne mettez pas de "-s" après "doesn\'t" : "He doesn\'t work".',
        de: 'Kein "-s" nach "doesn\'t": "He doesn\'t work".'
      }
    },
    {
      id: 'cm_l11_not_alone',
      incorrect: 'I not like spicy food.',
      correct: 'I don\'t like spicy food.',
      whyExplanation: 'In English, you cannot use "not" alone with main verbs; you must use "don\'t" or "doesn\'t".',
      explanationsByLang: {
        hi: 'अंग्रेजी में केवल "not" नहीं लगाते, "don\'t like" या "doesn\'t like" का प्रयोग करें।',
        es: 'No uses "not" solo con verbos principales; debes usar "don\'t" o "doesn\'t".',
        fr: 'On ne peut pas utiliser "not" seul : utilisez "don\'t" ou "doesn\'t".',
        de: 'Nicht "not" alleine verwenden: nutzen Sie "don\'t" oder "doesn\'t".'
      }
    }
  ],

  // SECTION 11: Dialogue
  dialogues: [
    {
      id: 'd_a1_1_11_lunch_preferences',
      title: 'Discussing Food & Diet Preferences',
      context: 'Sophia and Lucas are deciding where to have lunch together.',
      characters: [
        { id: 'char_sophia', name: 'Sophia', role: 'Colleague' },
        { id: 'char_lucas', name: 'Lucas', role: 'Colleague' }
      ],
      turns: [
        {
          id: 'turn_1',
          speakerId: 'char_sophia',
          speakerName: 'Sophia',
          text: 'Let\'s go to the new Italian restaurant down the street.',
          translationsByLang: { hi: 'चलो सड़क के नुक्कड़ पर बने नए इतालवी रेस्तरां में चलते हैं।', es: 'Vayamos al nuevo restaurante italiano calle abajo.' },
          audioText: 'Let\'s go to the new Italian restaurant down the street.',
          audioId: 'en_a1_u01_l11_d01_t1'
        },
        {
          id: 'turn_2',
          speakerId: 'char_lucas',
          speakerName: 'Lucas',
          text: 'I don\'t eat cheese, but do they have fresh salads?',
          translationsByLang: { hi: 'मैं पनीर (चीज़) नहीं खाता, पर क्या उनके पास ताज़ा सलाद है?', es: 'No como queso, pero ¿tienen ensaladas frescas?' },
          audioText: 'I don\'t eat cheese, but do they have fresh salads?',
          audioId: 'en_a1_u01_l11_d01_t2'
        },
        {
          id: 'turn_3',
          speakerId: 'char_sophia',
          speakerName: 'Sophia',
          text: 'Yes, they do! And my friend Marco doesn\'t eat meat, and he loves their pasta.',
          translationsByLang: { hi: 'हाँ, बिल्कुल! और मेरा दोस्त मार्को मांस नहीं खाता, और उसे उनका पास्ता बहुत पसंद है।', es: '¡Sí, tienen! Y mi amigo Marco no come carne y le encanta su pasta.' },
          audioText: 'Yes, they do! And my friend Marco doesn\'t eat meat, and he loves their pasta.',
          audioId: 'en_a1_u01_l11_d01_t3'
        },
        {
          id: 'turn_4',
          speakerId: 'char_lucas',
          speakerName: 'Lucas',
          text: 'Great! I don\'t want to spend too much money today.',
          translationsByLang: { hi: 'बहुत बढ़िया! मैं आज ज्यादा पैसे खर्च नहीं करना चाहता।', es: '¡Genial! No quiero gastar demasiado dinero hoy.' },
          audioText: 'Great! I don\'t want to spend too much money today.',
          audioId: 'en_a1_u01_l11_d01_t4'
        },
        {
          id: 'turn_5',
          speakerId: 'char_sophia',
          speakerName: 'Sophia',
          text: 'Don\'t worry, their lunch menu is very cheap.',
          translationsByLang: { hi: 'चिंता मत करो, उनका लंच मेनू बहुत सस्ता है।', es: 'No te preocupes, su menú de mediodía es muy barato.' },
          audioText: 'Don\'t worry, their lunch menu is very cheap.',
          audioId: 'en_a1_u01_l11_d01_t5'
        }
      ]
    }
  ],

  // SECTION 8, 9, 10, 12, 13, 14, 15, 16: Practice Exercises
  practiceExercises: [
    {
      id: 'ex_l11_p1',
      lessonId: 'lesson_a1_1_11',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Select the correct negative auxiliary for "I":',
      sourceSentence: 'I ___ drink coffee at night.',
      options: [
        { id: 'o1', text: 'don\'t', isCorrect: true },
        { id: 'o2', text: 'doesn\'t', isCorrect: false },
        { id: 'o3', text: 'not', isCorrect: false }
      ],
      explanation: 'With subject "I", use "don\'t".'
    },
    {
      id: 'ex_l11_p2',
      lessonId: 'lesson_a1_1_11',
      stage: 8,
      type: 'fill_blank',
      prompt: 'Choose the correct form of the main verb after "doesn\'t":',
      sourceSentence: 'She doesn\'t ___ in an office.',
      options: [
        { id: 'o1', text: 'work', isCorrect: true },
        { id: 'o2', text: 'works', isCorrect: false },
        { id: 'o3', text: 'working', isCorrect: false }
      ],
      explanation: 'After "doesn\'t", always use the base form: "work".'
    },
    {
      id: 'ex_l11_p3',
      lessonId: 'lesson_a1_1_11',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the negative sentence:',
      targetSentence: 'We don\'t work on the weekend',
      wordBank: ['We', 'don\'t', 'work', 'on', 'the', 'weekend', 'doesn\'t', 'works']
    },
    {
      id: 'ex_l11_p4',
      lessonId: 'lesson_a1_1_11',
      stage: 9,
      type: 'listening',
      prompt: 'Listen and select the negative statement:',
      audioText: 'He doesn\'t have a car in London',
      options: [
        { id: 'o1', text: 'He doesn\'t have a car in London', isCorrect: true },
        { id: 'o2', text: 'He doesn\'t drive a car in London', isCorrect: false },
        { id: 'o3', text: 'He has a new car in London', isCorrect: false }
      ],
      explanation: 'The speaker states "He doesn\'t have a car in London".'
    },
    {
      id: 'ex_l11_p5',
      lessonId: 'lesson_a1_1_11',
      stage: 9,
      type: 'listen_and_type',
      prompt: 'Listen and write the phrase exactly:',
      audioText: 'I don\'t understand the question',
      targetSentence: 'I don\'t understand the question'
    },
    {
      id: 'ex_l11_p6',
      lessonId: 'lesson_a1_1_11',
      stage: 10,
      type: 'word_ordering',
      prompt: 'Build the sentence:',
      targetSentence: 'She doesn\'t eat meat or fish',
      wordBank: ['She', 'doesn\'t', 'eat', 'meat', 'or', 'fish', 'eats', 'don\'t']
    },
    {
      id: 'ex_l11_p7',
      lessonId: 'lesson_a1_1_11',
      stage: 12,
      type: 'speaking',
      prompt: 'Read this negative habit aloud:',
      targetSentence: 'I don\'t wake up early on Sunday mornings.',
      audioText: 'I don\'t wake up early on Sunday mornings.'
    },
    {
      id: 'ex_l11_p8',
      lessonId: 'lesson_a1_1_11',
      stage: 13,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'वह शराब नहीं पीता और धूम्रपान नहीं करता।',
      sourceTranslations: {
        hi: 'वह शराब नहीं पीता और धूम्रपान नहीं करता।',
        es: 'Él no bebe alcohol y no fuma.'
      },
      targetSentence: 'He doesn\'t drink alcohol and he doesn\'t smoke',
      wordBank: ['He', 'doesn\'t', 'drink', 'alcohol', 'and', 'he', 'doesn\'t', 'smoke', 'don\'t', 'drinks']
    },
    {
      id: 'ex_l11_p9',
      lessonId: 'lesson_a1_1_11',
      stage: 14,
      type: 'fill_blank',
      prompt: 'Interleaved Practice (Combining Lesson 10 Frequency & Lesson 11 Negative):',
      sourceSentence: 'They ___ usually buy expensive food.',
      options: [
        { id: 'o1', text: 'don\'t', isCorrect: true },
        { id: 'o2', text: 'doesn\'t', isCorrect: false },
        { id: 'o3', text: 'aren\'t', isCorrect: false }
      ],
      explanation: 'Subject "They" pairs with "don\'t".'
    },
    {
      id: 'ex_l11_p10',
      lessonId: 'lesson_a1_1_11',
      stage: 15,
      type: 'error_correction',
      prompt: 'Fix the double-marking error:',
      sourceSentence: 'Maria doesn\'t speaks English.',
      options: [
        { id: 'o1', text: 'Maria doesn\'t speak English.', isCorrect: true },
        { id: 'o2', text: 'Maria don\'t speak English.', isCorrect: false },
        { id: 'o3', text: 'Maria doesn\'t speaking English.', isCorrect: false }
      ],
      explanation: 'Remove "-s" after doesn\'t: "doesn\'t speak".'
    },
    {
      id: 'ex_l11_p11',
      lessonId: 'lesson_a1_1_11',
      stage: 16,
      type: 'dialogue_completion',
      prompt: 'Choose the appropriate response:',
      sourceSentence: 'Friend: "Do you want some hot tea?" -> You: "___"',
      options: [
        { id: 'o1', text: 'No, thanks. I don\'t drink hot tea.', isCorrect: true },
        { id: 'o2', text: 'Yes, it is next to the bank.', isCorrect: false },
        { id: 'o3', text: 'I am thirty-two.', isCorrect: false }
      ],
      explanation: 'Expresses tea preference.'
    },
    {
      id: 'ex_l11_p12',
      lessonId: 'lesson_a1_1_11',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Which auxiliary is used with "he", "she", and "it"?',
      sourceSentence: 'Grammar rule check:',
      options: [
        { id: 'o1', text: 'doesn\'t', isCorrect: true },
        { id: 'o2', text: 'don\'t', isCorrect: false },
        { id: 'o3', text: 'aren\'t', isCorrect: false }
      ],
      explanation: '"doesn\'t" is used with 3rd person singular.'
    },
    {
      id: 'ex_l11_p13',
      lessonId: 'lesson_a1_1_11',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Select the correct sentence with "have":',
      sourceSentence: 'Negative possession:',
      options: [
        { id: 'o1', text: 'He doesn\'t have a pet.', isCorrect: true },
        { id: 'o2', text: 'He doesn\'t has a pet.', isCorrect: false },
        { id: 'o3', text: 'He don\'t have a pet.', isCorrect: false }
      ],
      explanation: '"doesn\'t have" is the correct form.'
    },
    {
      id: 'ex_l11_p14',
      lessonId: 'lesson_a1_1_11',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Construct the sentence:',
      targetSentence: 'I don\'t know where the library is',
      wordBank: ['I', 'don\'t', 'know', 'where', 'the', 'library', 'is', 'doesn\'t']
    },
    {
      id: 'ex_l11_p15',
      lessonId: 'lesson_a1_1_11',
      stage: 12,
      type: 'speaking',
      prompt: 'Say this sentence clearly into your microphone:',
      targetSentence: 'My brother doesn\'t live in this city.',
      audioText: 'My brother doesn\'t live in this city.'
    }
  ],

  // SECTION 16: Review Exercises
  reviewExercises: [
    {
      id: 'ex_l11_rev1',
      lessonId: 'lesson_a1_1_11',
      stage: 16,
      type: 'multiple_choice',
      prompt: 'Which sentence is grammatically correct?',
      sourceSentence: 'Negative Present Simple:',
      options: [
        { id: 'o1', text: 'She doesn\'t watch television at night.', isCorrect: true },
        { id: 'o2', text: 'She doesn\'t watches television at night.', isCorrect: false },
        { id: 'o3', text: 'She don\'t watch television at night.', isCorrect: false }
      ],
      explanation: 'Subject "She" takes "doesn\'t" + base form "watch".'
    },
    {
      id: 'ex_l11_rev2',
      lessonId: 'lesson_a1_1_11',
      stage: 16,
      type: 'fill_blank',
      prompt: 'Fill in the blank with "don\'t" or "doesn\'t":',
      sourceSentence: 'My parents ___ live in an apartment.',
      options: [
        { id: 'o1', text: 'don\'t', isCorrect: true },
        { id: 'o2', text: 'doesn\'t', isCorrect: false },
        { id: 'o3', text: 'isn\'t', isCorrect: false }
      ],
      explanation: '"My parents" = they -> "don\'t".'
    },
    {
      id: 'ex_l11_rev3',
      lessonId: 'lesson_a1_1_11',
      stage: 16,
      type: 'word_ordering',
      prompt: 'Assemble the sentence correctly:',
      targetSentence: 'We don\'t need a big car in the city',
      wordBank: ['We', 'don\'t', 'need', 'a', 'big', 'car', 'in', 'the', 'city', 'needs']
    },
    {
      id: 'ex_l11_rev4',
      lessonId: 'lesson_a1_1_11',
      stage: 16,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'मुझे यह गाना पसंद नहीं है।',
      sourceTranslations: { hi: 'मुझे यह गाना पसंद नहीं है।', es: 'No me gusta esta canción.' },
      targetSentence: 'I don\'t like this song',
      wordBank: ['I', 'don\'t', 'like', 'this', 'song', 'doesn\'t', 'likes', 'not']
    }
  ],

  // SECTION 17: Assessment Exercises (10 items)
  assessmentExercises: [
    {
      id: 'ex_l11_a1',
      lessonId: 'lesson_a1_1_11',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Choose the correct negative auxiliary for "David":',
      sourceSentence: 'David ___ work on Friday afternoons.',
      options: [
        { id: 'o1', text: 'doesn\'t', isCorrect: true },
        { id: 'o2', text: 'don\'t', isCorrect: false },
        { id: 'o3', text: 'isn\'t', isCorrect: false },
        { id: 'o4', text: 'not', isCorrect: false }
      ],
      explanation: 'David (he) uses "doesn\'t".'
    },
    {
      id: 'ex_l11_a2',
      lessonId: 'lesson_a1_1_11',
      stage: 17,
      type: 'fill_blank',
      prompt: 'Complete with the correct base verb:',
      sourceSentence: 'My sister doesn\'t ___ coffee in the morning.',
      options: [
        { id: 'o1', text: 'drink', isCorrect: true },
        { id: 'o2', text: 'drinks', isCorrect: false },
        { id: 'o3', text: 'drinking', isCorrect: false },
        { id: 'o4', text: 'drank', isCorrect: false }
      ],
      explanation: 'Use base form "drink" after doesn\'t.'
    },
    {
      id: 'ex_l11_a3',
      lessonId: 'lesson_a1_1_11',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Build the negative sentence:',
      targetSentence: 'They don\'t speak French or Spanish at home',
      wordBank: ['They', 'don\'t', 'speak', 'French', 'or', 'Spanish', 'at', 'home', 'speaks']
    },
    {
      id: 'ex_l11_a4',
      lessonId: 'lesson_a1_1_11',
      stage: 17,
      type: 'error_correction',
      prompt: 'Fix the negative sentence error:',
      sourceSentence: 'He not like spicy food.',
      options: [
        { id: 'o1', text: 'He doesn\'t like spicy food.', isCorrect: true },
        { id: 'o2', text: 'He don\'t like spicy food.', isCorrect: false },
        { id: 'o3', text: 'He doesn\'t likes spicy food.', isCorrect: false }
      ],
      explanation: 'Use "doesn\'t like".'
    },
    {
      id: 'ex_l11_a5',
      lessonId: 'lesson_a1_1_11',
      stage: 17,
      type: 'listening',
      prompt: 'Listen and select what you hear:',
      audioText: 'We don\'t live alone in this apartment',
      options: [
        { id: 'o1', text: 'We don\'t live alone in this apartment', isCorrect: true },
        { id: 'o2', text: 'We don\'t work alone in this apartment', isCorrect: false },
        { id: 'o3', text: 'We don\'t stay alone in this house', isCorrect: false }
      ],
      explanation: 'The speaker says "We don\'t live alone in this apartment".'
    },
    {
      id: 'ex_l11_a6',
      lessonId: 'lesson_a1_1_11',
      stage: 17,
      type: 'listen_and_type',
      prompt: 'Listen and type the sentence accurately:',
      audioText: 'She doesn\'t drive to work',
      targetSentence: 'She doesn\'t drive to work'
    },
    {
      id: 'ex_l11_a7',
      lessonId: 'lesson_a1_1_11',
      stage: 17,
      type: 'dialogue_completion',
      prompt: 'Select the best reply:',
      sourceSentence: 'Colleague: "Where is Liam?" -> You: "___"',
      options: [
        { id: 'o1', text: 'I don\'t know. He isn\'t at his desk.', isCorrect: true },
        { id: 'o2', text: 'He has two brothers.', isCorrect: false },
        { id: 'o3', text: 'It is ten dollars.', isCorrect: false }
      ],
      explanation: 'Uses "I don\'t know" naturally.'
    },
    {
      id: 'ex_l11_a8',
      lessonId: 'lesson_a1_1_11',
      stage: 17,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'वे सप्ताहांत पर काम नहीं करते हैं।',
      sourceTranslations: { hi: 'वे सप्ताहांत पर काम नहीं करते हैं।', es: 'Ellos no trabajan los fines de semana.' },
      targetSentence: 'They don\'t work on the weekend',
      wordBank: ['They', 'don\'t', 'work', 'on', 'the', 'weekend', 'doesn\'t', 'works', 'at']
    },
    {
      id: 'ex_l11_a9',
      lessonId: 'lesson_a1_1_11',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses lack of possession?',
      sourceSentence: 'Possession negative:',
      options: [
        { id: 'o1', text: 'He doesn\'t have a bicycle.', isCorrect: true },
        { id: 'o2', text: 'He doesn\'t has a bicycle.', isCorrect: false },
        { id: 'o3', text: 'He has not a bicycle.', isCorrect: false },
        { id: 'o4', text: 'He don\'t have a bicycle.', isCorrect: false }
      ],
      explanation: '"doesn\'t have" is the grammatically correct negative form.'
    },
    {
      id: 'ex_l11_a10',
      lessonId: 'lesson_a1_1_11',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the final sentence:',
      targetSentence: 'I don\'t understand Italian but I speak English',
      wordBank: ['I', 'don\'t', 'understand', 'Italian', 'but', 'I', 'speak', 'English', 'doesn\'t', 'understands']
    }
  ]
};
