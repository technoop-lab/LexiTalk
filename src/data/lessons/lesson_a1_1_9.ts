import { DetailedLessonData } from '../../types';

export const LESSON_A1_1_9_DATA: DetailedLessonData = {
  id: 'lesson_a1_1_9',
  unitId: 'unit_a1_1',
  title: 'Present Simple Third-Person Singular (He, She, It)',
  cefr: 'A1',
  icon: '👤',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Describing Others: Third-Person Singular (-s / -es / -ies)',
    description: 'Master third-person singular Present Simple verbs (he, she, it), including spelling rules (-s, -es, -ies, irregular "has/does/goes") and pronunciation of final endings (/s/, /z/, /ɪz/).',
    descriptionsByLang: {
      hi: 'अन्य व्यक्तियों (He, She, It) की दिनचर्या और आदतों का वर्णन करना सीखें। क्रियाओं में -s, -es, -ies जोड़ने के नियम और irregular forms (has, goes, does) का अभ्यास करें।',
      es: 'Domina los verbos en tercera persona del singular (he, she, it) en Presente Simple, incluyendo reglas ortográficas (-s, -es, -ies, has, does, goes) y pronunciación (/s/, /z/, /ɪz/).',
      fr: 'Maîtrisez la troisième personne du singulier au Présent Simple (he, she, it) et les terminaisons en -s/-es/-ies.',
      de: 'Beherrschen Sie die 3. Person Singular im Present Simple (he, she, it) mit den Endungen -s, -es, -ies.',
      pt: 'Domine a terceira pessoa do singular no Presente Simples (he, she, it) e as regras de terminação em -s, -es e -ies.',
      zh: '掌握一般现在时第三人称单数（he/she/it）动词词尾变化规则（-s/-es/-ies及has/does/goes）及发音。',
      ar: 'أتقن تصريف الأفعال مع المفرد الغائب (he, she, it) في زمن المضارع البسيط وقواعد إضافة -s, -es, -ies.',
      ja: '三人称単数（he, she, it）を主語とする現在形の動詞語尾変化（-s, -es, -ies、不規則なhas/does/goes）と発音を学びます。',
      ru: 'Освойте формы третьего лица единственного числа (he, she, it) в Present Simple с окончаниями -s, -es, -ies.'
    },
    canDoStatements: [
      'Add "-s", "-es", or "-ies" accurately to verbs when subject is he, she, or it',
      'Use irregular third-person forms: have -> has, go -> goes, do -> does',
      'Pronounce final verb endings accurately (/s/ in speaks, /z/ in lives, /ɪz/ in watches)',
      'Describe a family member\'s or colleague\'s daily job and routine',
      'Avoid omitting the 3rd person "-s" suffix in speech and writing'
    ],
    canDoByLang: {
      hi: [
        'He, She, It के साथ क्रिया में सही -s, -es, -ies लगाना',
        'Irregular रूप (has, goes, does) का सही प्रयोग',
        'परिवार के किसी सदस्य या सहकर्मी की दिनचर्या का वर्णन करना'
      ],
      es: [
        'Agregar "-s", "-es" o "-ies" a los verbos con he, she o it',
        'Usar formas irregulares como has, goes y does',
        'Describir la rutina de un familiar o colega'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (20 items)
  vocabulary: [
    {
      id: 'v_v3_works',
      word: 'works',
      phonetic: '/wɝːks/',
      meaning: 'Engages in physical or mental activity as employment (3rd person singular)',
      translationsByLang: { hi: 'काम करता / करती है', es: 'trabaja', fr: 'travaille', de: 'arbeitet', pt: 'trabalha', zh: '工作', ar: 'يعمل / تعمل', ja: '働く', ru: 'работает' },
      exampleSentence: 'She works at a technology company.',
      exampleTranslationByLang: { hi: 'वह एक टेक्नोलॉजी कंपनी में काम करती है।', es: 'Ella trabaja en una empresa de tecnología.' },
      audioText: 'works',
      audioId: 'en_a1_u01_l09_v_works',
      slowAudioId: 'en_a1_u01_l09_v_works_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💼',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_v3_lives',
      word: 'lives',
      phonetic: '/lɪvz/',
      meaning: 'Resides in a specific place (3rd person singular)',
      translationsByLang: { hi: 'रहता / रहती है', es: 'vive', fr: 'vit', de: 'wohnt / lebt', pt: 'vive / mora', zh: '居住', ar: 'يعيش / تعيش', ja: '住んでいる', ru: 'живёт' },
      exampleSentence: 'My brother lives in Tokyo.',
      exampleTranslationByLang: { hi: 'मेरा भाई टोक्यो में रहता है।', es: 'Mi hermano vive en Tokio.' },
      audioText: 'lives',
      audioId: 'en_a1_u01_l09_v_lives',
      slowAudioId: 'en_a1_u01_l09_v_lives_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏠',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_v3_speaks',
      word: 'speaks',
      phonetic: '/spiːks/',
      meaning: 'Says words or knows a language (3rd person singular)',
      translationsByLang: { hi: 'बोलता / बोलती है', es: 'habla', fr: 'parle', de: 'spricht', pt: 'fala', zh: '说 / 讲', ar: 'يتحدث / تتحدث', ja: '話す', ru: 'говорит' },
      exampleSentence: 'David speaks English and Spanish fluently.',
      exampleTranslationByLang: { hi: 'डेविड धाराप्रवाह अंग्रेजी और स्पेनिश बोलता है।', es: 'David habla inglés y español con fluidez.' },
      audioText: 'speaks',
      audioId: 'en_a1_u01_l09_v_speaks',
      slowAudioId: 'en_a1_u01_l09_v_speaks_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🗣️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_v3_teaches',
      word: 'teaches',
      phonetic: '/ˈtiː.tʃɪz/',
      meaning: 'Instructs students in a subject or skill (3rd person singular)',
      translationsByLang: { hi: 'पढ़ाता / पढ़ाती है', es: 'enseña', fr: 'enseigne', de: 'unterrichtet / lehrt', pt: 'ensina', zh: '教 / 授课', ar: 'يُدرّس / تُدرّس', ja: '教える', ru: 'преподаёт / учит' },
      exampleSentence: 'Mrs. Clark teaches mathematics at the high school.',
      exampleTranslationByLang: { hi: 'श्रीमती क्लार्क हाई स्कूल में गणित पढ़ाती हैं।', es: 'La Sra. Clark enseña matemáticas en la escuela secundaria.' },
      audioText: 'teaches',
      audioId: 'en_a1_u01_l09_v_teaches',
      slowAudioId: 'en_a1_u01_l09_v_teaches_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👩‍🏫',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_v3_studies',
      word: 'studies',
      phonetic: '/ˈstʌd.iz/',
      meaning: 'Acquires knowledge through academic work (3rd person singular)',
      translationsByLang: { hi: 'पढ़ाई करता / करती है', es: 'estudia', fr: 'étudie', de: 'studiert / lernt', pt: 'estuda', zh: '学习', ar: 'يدرس / تدرس', ja: '勉強する', ru: 'учится / изучает' },
      exampleSentence: 'She studies medicine at the university.',
      exampleTranslationByLang: { hi: 'वह विश्वविद्यालय में चिकित्सा (मेडिसिन) की पढ़ाई करती है।', es: 'Ella estudia medicina en la universidad.' },
      audioText: 'studies',
      audioId: 'en_a1_u01_l09_v_studies',
      slowAudioId: 'en_a1_u01_l09_v_studies_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📚',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_v3_watches',
      word: 'watches',
      phonetic: '/ˈwɑː.tʃɪz/',
      meaning: 'Views programs or observes something carefully (3rd person singular)',
      translationsByLang: { hi: 'देखता / देखती है', es: 'mira / ve', fr: 'regarde', de: 'schaut / sieht', pt: 'assiste / vê', zh: '观看', ar: 'يشاهد / تشاهد', ja: '見る', ru: 'смотрит' },
      exampleSentence: 'He watches the evening news at 9:00 PM.',
      exampleTranslationByLang: { hi: 'वह रात 9:00 बजे शाम का समाचार देखता है।', es: 'Él ve las noticias de la noche a las 9:00 PM.' },
      audioText: 'watches',
      audioId: 'en_a1_u01_l09_v_watches',
      slowAudioId: 'en_a1_u01_l09_v_watches_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📺',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_v3_goes',
      word: 'goes',
      phonetic: '/ɡoʊz/',
      meaning: 'Travels or moves to a destination (3rd person singular of go)',
      translationsByLang: { hi: 'जाता / जाती है', es: 'va', fr: 'va', de: 'geht / fährt', pt: 'vai', zh: '去 / 前往', ar: 'يذهب / تذهب', ja: '行く', ru: 'идёт / едет' },
      exampleSentence: 'She goes to the gym every morning.',
      exampleTranslationByLang: { hi: 'वह रोज सुबह जिम जाती है।', es: 'Ella va al gimnasio todas las mañanas.' },
      audioText: 'goes',
      audioId: 'en_a1_u01_l09_v_goes',
      slowAudioId: 'en_a1_u01_l09_v_goes_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚶',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_v3_does',
      word: 'does',
      phonetic: '/dʌz/',
      meaning: 'Performs an action or activity (3rd person singular of do)',
      translationsByLang: { hi: 'करता / करती है', es: 'hace', fr: 'fait', de: 'macht / tut', pt: 'faz', zh: '做 / 执行', ar: 'يفعل / تفعل', ja: 'する', ru: 'делает' },
      exampleSentence: 'He does his homework after dinner.',
      exampleTranslationByLang: { hi: 'वह रात के खाने के बाद अपना होमवर्क करता है।', es: 'Él hace sus deberes después de cenar.' },
      audioText: 'does',
      audioId: 'en_a1_u01_l09_v_does',
      slowAudioId: 'en_a1_u01_l09_v_does_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '✍️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_v3_has',
      word: 'has',
      phonetic: '/hæz/',
      meaning: 'Possesses or experiences (3rd person singular of have)',
      translationsByLang: { hi: 'के पास है / करता है', es: 'tiene / toma', fr: 'a / prend', de: 'hat', pt: 'tem', zh: '有 / 拥有', ar: 'يملك / لديه', ja: '持っている / ある', ru: 'имеет / у него (неё) есть' },
      exampleSentence: 'She has a red car and a small dog.',
      exampleTranslationByLang: { hi: 'उसके पास एक लाल कार और एक छोटा कुत्ता है।', es: 'Ella tiene un coche rojo y un perro pequeño.' },
      audioText: 'has',
      audioId: 'en_a1_u01_l09_v_has',
      slowAudioId: 'en_a1_u01_l09_v_has_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚗',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_v3_plays',
      word: 'plays',
      phonetic: '/pleɪz/',
      meaning: 'Participates in a sport or game (3rd person singular)',
      translationsByLang: { hi: 'खेलता / खेलती है', es: 'juega', fr: 'joue', de: 'spielt', pt: 'joga / toca', zh: '玩 / 打球', ar: 'يلعب / تلعب', ja: '遊ぶ / 演奏する', ru: 'играет' },
      exampleSentence: 'My son plays football on Saturdays.',
      exampleTranslationByLang: { hi: 'मेरा बेटा शनिवार को फुटबॉल खेलता है।', es: 'Mi hijo juega al fútbol los sábados.' },
      audioText: 'plays',
      audioId: 'en_a1_u01_l09_v_plays',
      slowAudioId: 'en_a1_u01_l09_v_plays_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⚽',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_v3_reads',
      word: 'reads',
      phonetic: '/riːdz/',
      meaning: 'Looks at and understands written text (3rd person singular)',
      translationsByLang: { hi: 'पढ़ता / पढ़ती है', es: 'lee', fr: 'lit', de: 'liest', pt: 'lê', zh: '阅读', ar: 'يقرأ / تقرأ', ja: '読む', ru: 'читает' },
      exampleSentence: 'He reads the newspaper every morning.',
      exampleTranslationByLang: { hi: 'वह हर सुबह अखबार पढ़ता है।', es: 'Él lee el periódico todas las mañanas.' },
      audioText: 'reads',
      audioId: 'en_a1_u01_l09_v_reads',
      slowAudioId: 'en_a1_u01_l09_v_reads_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📰',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_v3_writes',
      word: 'writes',
      phonetic: '/raɪts/',
      meaning: 'Composes text or letters (3rd person singular)',
      translationsByLang: { hi: 'लिखता / लिखती है', es: 'escribe', fr: 'écrit', de: 'schreibt', pt: 'escreve', zh: '写 / 书写', ar: 'يكتب / تكتب', ja: '書く', ru: 'пишет' },
      exampleSentence: 'She writes emails to international clients.',
      exampleTranslationByLang: { hi: 'वह अंतरराष्ट्रीय ग्राहकों को ईमेल लिखती है।', es: 'Ella escribe correos a clientes internacionales.' },
      audioText: 'writes',
      audioId: 'en_a1_u01_l09_v_writes',
      slowAudioId: 'en_a1_u01_l09_v_writes_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '✍️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_v3_eats',
      word: 'eats',
      phonetic: '/iːts/',
      meaning: 'Consumes food (3rd person singular)',
      translationsByLang: { hi: 'खाता / खाती है', es: 'come', fr: 'mange', de: 'isst', pt: 'come', zh: '吃', ar: 'يأكل / تأكل', ja: '食べる', ru: 'ест' },
      exampleSentence: 'He eats healthy salad for lunch.',
      exampleTranslationByLang: { hi: 'वह दोपहर के भोजन में स्वास्थ्यवर्धक सलाद खाता है।', es: 'Él come ensalada saludable para almorzar.' },
      audioText: 'eats',
      audioId: 'en_a1_u01_l09_v_eats',
      slowAudioId: 'en_a1_u01_l09_v_eats_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥗',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_v3_drinks',
      word: 'drinks',
      phonetic: '/drɪŋks/',
      meaning: 'Consumes liquids (3rd person singular)',
      translationsByLang: { hi: 'पीता / पीती है', es: 'bebe / toma', fr: 'boit', de: 'trinkt', pt: 'bebe', zh: '喝', ar: 'يشرب / تشرب', ja: '飲む', ru: 'пьёт' },
      exampleSentence: 'She drinks green tea in the afternoon.',
      exampleTranslationByLang: { hi: 'वह दोपहर में ग्रीन टी पीती है।', es: 'Ella bebe té verde por la tarde.' },
      audioText: 'drinks',
      audioId: 'en_a1_u01_l09_v_drinks',
      slowAudioId: 'en_a1_u01_l09_v_drinks_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍵',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_v3_buys',
      word: 'buys',
      phonetic: '/baɪz/',
      meaning: 'Purchases goods with money (3rd person singular)',
      translationsByLang: { hi: 'खरीदता / खरीदती है', es: 'compra', fr: 'achète', de: 'kauft', pt: 'compra', zh: '买 / 购买', ar: 'يشتري / تشتري', ja: '買う', ru: 'покупает' },
      exampleSentence: 'He buys fresh bread from the bakery.',
      exampleTranslationByLang: { hi: 'वह बेकरी से ताज़ी ब्रेड खरीदता है।', es: 'Él compra pan fresco en la panadería.' },
      audioText: 'buys',
      audioId: 'en_a1_u01_l09_v_buys',
      slowAudioId: 'en_a1_u01_l09_v_buys_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍞',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_v3_drives',
      word: 'drives',
      phonetic: '/draɪvz/',
      meaning: 'Operates a motor vehicle (3rd person singular)',
      translationsByLang: { hi: 'गाड़ी चलाता / चलाती है', es: 'conduce / maneja', fr: 'conduit', de: 'fährt', pt: 'dirige', zh: '驾驶 / 开车', ar: 'يقود / تقود', ja: '運転する', ru: 'водит машину' },
      exampleSentence: 'My father drives to work every morning.',
      exampleTranslationByLang: { hi: 'मेरे पिता रोज सुबह गाड़ी चलाकर काम पर जाते हैं।', es: 'Mi padre conduce al trabajo todas las mañanas.' },
      audioText: 'drives',
      audioId: 'en_a1_u01_l09_v_drives',
      slowAudioId: 'en_a1_u01_l09_v_drives_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚗',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_v3_helps',
      word: 'helps',
      phonetic: '/helps/',
      meaning: 'Assists or supports someone (3rd person singular)',
      translationsByLang: { hi: 'मदद करता / करती है', es: 'ayuda', fr: 'aide', de: 'hilft', pt: 'ajuda', zh: '帮助', ar: 'يساعد / تساعد', ja: '助ける', ru: 'помогает' },
      exampleSentence: 'She helps new students in the class.',
      exampleTranslationByLang: { hi: 'वह कक्षा में नए छात्रों की मदद करती है।', es: 'Ella ayuda a los nuevos estudiantes en clase.' },
      audioText: 'helps',
      audioId: 'en_a1_u01_l09_v_helps',
      slowAudioId: 'en_a1_u01_l09_v_helps_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🤝',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_v3_travels',
      word: 'travels',
      phonetic: '/ˈtræv.əlz/',
      meaning: 'Journeys to different cities or countries (3rd person singular)',
      translationsByLang: { hi: 'यात्रा करता / करती है', es: 'viaja', fr: 'voyage', de: 'reist', pt: 'viaja', zh: '旅行', ar: 'يسافر / تسافر', ja: '旅行する', ru: 'путешествует' },
      exampleSentence: 'He travels for business every month.',
      exampleTranslationByLang: { hi: 'वह हर महीने काम के सिलसिले में यात्रा करता है।', es: 'Él viaja por negocios cada mes.' },
      audioText: 'travels',
      audioId: 'en_a1_u01_l09_v_travels',
      slowAudioId: 'en_a1_u01_l09_v_travels_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '✈️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_v3_washes',
      word: 'washes',
      phonetic: '/ˈwɑː.ʃɪz/',
      meaning: 'Cleans with water and soap (3rd person singular)',
      translationsByLang: { hi: 'धोता / धोती है', es: 'lava', fr: 'lave', de: 'wäscht', pt: 'lava', zh: '洗 / 清洗', ar: 'يغسل / تغسل', ja: '洗う', ru: 'моет / стирает' },
      exampleSentence: 'He washes his car on Sunday.',
      exampleTranslationByLang: { hi: 'वह रविवार को अपनी कार धोता है।', es: 'Él lava su coche el domingo.' },
      audioText: 'washes',
      audioId: 'en_a1_u01_l09_v_washes',
      slowAudioId: 'en_a1_u01_l09_v_washes_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧼',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_v3_relaxes',
      word: 'relaxes',
      phonetic: '/rɪˈlæk.sɪz/',
      meaning: 'Rests and enjoys quiet time (3rd person singular)',
      translationsByLang: { hi: 'आराम करता / करती है', es: 'se relaja / descansa', fr: 'se détend', de: 'entspannt sich', pt: 'relaxa', zh: '放松 / 休息', ar: 'يسترخي / تسترخي', ja: 'くつろぐ', ru: 'отдыхает' },
      exampleSentence: 'She relaxes by listening to music.',
      exampleTranslationByLang: { hi: 'वह संगीत सुनकर आराम करती है।', es: 'Ella se relaja escuchando música.' },
      audioText: 'relaxes',
      audioId: 'en_a1_u01_l09_v_relaxes',
      slowAudioId: 'en_a1_u01_l09_v_relaxes_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎧',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks
  expressions: [
    {
      id: 'chunk_he_works_at',
      text: 'He works at a bank in London.',
      meaning: 'Formula for stating someone else\'s job location',
      translationsByLang: {
        hi: 'वह लंदन के एक बैंक में काम करता है।',
        es: 'Él trabaja en un banco en Londres.',
        fr: 'Il travaille dans une banque à Londres.',
        de: 'Er arbeitet bei einer Bank in London.'
      },
      audioText: 'He works at a bank in London.',
      audioId: 'en_a1_u01_l09_c_works_bank',
      context: 'Talking about a colleague or friend\'s job',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_she_speaks_two',
      text: 'She speaks two languages.',
      meaning: 'Describing linguistic capability of another person',
      translationsByLang: {
        hi: 'वह दो भाषाएं बोलती है।',
        es: 'Ella habla dos idiomas.',
        fr: 'Elle parle deux langues.',
        de: 'Sie spricht zwei Sprachen.'
      },
      audioText: 'She speaks two languages.',
      audioId: 'en_a1_u01_l09_c_speaks_two',
      context: 'Introductions and profile descriptions',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_she_goes_to_work',
      text: 'She goes to work by train.',
      meaning: 'Stating third-person commuting method',
      translationsByLang: {
        hi: 'वह ट्रेन से काम पर जाती है।',
        es: 'Ella va al trabajo en tren.',
        fr: 'Elle va au travail en train.',
        de: 'Sie fährt mit dem Zug zur Arbeit.'
      },
      audioText: 'She goes to work by train.',
      audioId: 'en_a1_u01_l09_c_goes_train',
      context: 'Daily commute conversations',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 5 & 6: Grammar
  grammar: {
    patterns: [
      {
        id: 'g_third_person_s_rules',
        title: 'Third-Person Singular Spelling Rules (-s, -es, -ies)',
        rule: 'Add "-s" to most verbs (work -> works, live -> lives). Add "-es" to verbs ending in -ch, -sh, -ss, -x, -o (watch -> watches, teach -> teaches, go -> goes, do -> does). For consonant + y, change y to "-ies" (study -> studies). Irregular: have -> has.',
        formula: '[He / She / It / Singular Name] + [Verb + s/es/ies]',
        examples: [
          { sentence: 'He works hard every day.', translation: 'वह हर दिन कड़ी मेहनत करता है। / Él trabaja duro todos los días.', audioText: 'He works hard every day.', audioId: 'en_a1_u01_l09_g_ex1' },
          { sentence: 'She teaches English at university.', translation: 'वह विश्वविद्यालय में अंग्रेजी पढ़ाती है। / Ella enseña inglés en la universidad.', audioText: 'She teaches English at university.', audioId: 'en_a1_u01_l09_g_ex2' },
          { sentence: 'He has a fast car.', translation: 'उसके पास एक तेज़ कार है। / Él tiene un coche rápido.', audioText: 'He has a fast car.', audioId: 'en_a1_u01_l09_g_ex3' }
        ],
        explanationByLang: {
          hi: 'जब कर्ता He, She, It या कोई एकवचन नाम हो, तो क्रिया में -s/-es/-ies जोड़ा जाता है। -ch/-sh/-x/-ss/-o पर समाप्त होने वाले शब्दों में -es (watches, goes) और have का बदलकर "has" हो जाता है।',
          es: 'Con he, she, it añade "-s" (works), "-es" si termina en -ch/-sh/-ss/-x/-o (watches, goes), o "-ies" (studies). El verbo have cambia a "has".'
        }
      },
      {
        id: 'g_pronunciation_3rd_s',
        title: 'Pronunciation of Final -s Ending: /s/, /z/, /ɪz/',
        rule: 'Pronounce /s/ after voiceless sounds /p, t, k, f/ (speaks, writes). Pronounce /z/ after voiced sounds & vowels (lives, plays, reads). Pronounce extra syllable /ɪz/ after sibilants (watches, teaches, relaxes).',
        formula: '/s/ -> speaks, writes | /z/ -> lives, plays | /ɪz/ -> watches, teaches',
        examples: [
          { sentence: 'She speaks Italian.', translation: 'वह इतालवी बोलती है। (/s/)', audioText: 'She speaks Italian.', audioId: 'en_a1_u01_l09_g_ex4' },
          { sentence: 'He lives in Rome.', translation: 'वह रोम में रहता है। (/z/)', audioText: 'He lives in Rome.', audioId: 'en_a1_u01_l09_g_ex5' },
          { sentence: 'She watches movies.', translation: 'वह फिल्में देखती है। (/ɪz/)', audioText: 'She watches movies.', audioId: 'en_a1_u01_l09_g_ex6' }
        ],
        explanationByLang: {
          hi: 'क्रिया के अंतिम -s का उच्चारण 3 प्रकार से होता है: /s/ (speaks), /z/ (lives), और /ɪz/ (watches)।',
          es: 'El final -s se pronuncia /s/ (speaks), /z/ (lives) o como sílaba extra /ɪz/ (watches).'
        }
      }
    ]
  },

  // SECTION 7: Common Mistakes
  commonMistakes: [
    {
      id: 'cm_l9_missing_s',
      incorrect: 'He live in London and work in a bank.',
      correct: 'He lives in London and works in a bank.',
      whyExplanation: 'Always add "-s" or "-es" to the verb when the subject is he, she, it, or a singular noun.',
      explanationsByLang: {
        hi: 'He/She/It के साथ क्रिया में "-s" लगाना न भूलें: "He lives and works".',
        es: 'No olvides la "-s" en tercera persona del singular: "He lives and works".',
        fr: 'N\'oubliez pas le "-s" à la troisième personne : "He lives and works".',
        de: 'Vergessen Sie nicht das "-s" in der 3. Person: "He lives and works".'
      }
    },
    {
      id: 'cm_l9_she_haves',
      incorrect: 'She haves two brothers.',
      correct: 'She has two brothers.',
      whyExplanation: 'The third person of "have" is irregular: "has", never "haves".',
      explanationsByLang: {
        hi: '"have" का तीसरा पुरुष रूप "has" होता है, "haves" कभी नहीं।',
        es: 'La tercera persona de "have" es "has", nunca "haves".',
        fr: 'La troisième personne de "have" est "has".',
        de: 'Die 3. Person von "have" ist "has".'
      }
    }
  ],

  // SECTION 11: Dialogue
  dialogues: [
    {
      id: 'd_a1_1_9_coworker_profile',
      title: 'Describing a New Team Member',
      context: 'Emma tells Marco about their new colleague, Sarah.',
      characters: [
        { id: 'char_emma', name: 'Emma', role: 'Team Lead' },
        { id: 'char_marco', name: 'Marco', role: 'Engineer' }
      ],
      turns: [
        {
          id: 'turn_1',
          speakerId: 'char_marco',
          speakerName: 'Marco',
          text: 'Emma, who is the new woman in the office?',
          translationsByLang: { hi: 'एम्मा, दफ्तर में वह नई महिला कौन है?', es: 'Emma, ¿quién es la nueva mujer en la oficina?' },
          audioText: 'Emma, who is the new woman in the office?',
          audioId: 'en_a1_u01_l09_d01_t1'
        },
        {
          id: 'turn_2',
          speakerId: 'char_emma',
          speakerName: 'Emma',
          text: 'That is Sarah. She works as our new UX designer.',
          translationsByLang: { hi: 'वह सारा है। वह हमारी नई यूएक्स डिजाइनर के रूप में काम करती है।', es: 'Esa es Sarah. Trabaja como nuestra nueva diseñadora UX.' },
          audioText: 'That is Sarah. She works as our new UX designer.',
          audioId: 'en_a1_u01_l09_d01_t2'
        },
        {
          id: 'turn_3',
          speakerId: 'char_marco',
          speakerName: 'Marco',
          text: 'Where does she live? Does she speak French?',
          translationsByLang: { hi: 'वह कहाँ रहती है? क्या वह फ्रेंच बोलती है?', es: '¿Dónde vive ella? ¿Habla francés?' },
          audioText: 'Where does she live? Does she speak French?',
          audioId: 'en_a1_u01_l09_d01_t3'
        },
        {
          id: 'turn_4',
          speakerId: 'char_emma',
          speakerName: 'Emma',
          text: 'She lives in North London, and she speaks English and French fluently.',
          translationsByLang: { hi: 'वह उत्तरी लंदन में रहती है, और धाराप्रवाह अंग्रेजी और फ्रेंच बोलती है।', es: 'Vive en el norte de Londres y habla inglés y francés con fluidez.' },
          audioText: 'She lives in North London, and she speaks English and French fluently.',
          audioId: 'en_a1_u01_l09_d01_t4'
        },
        {
          id: 'turn_5',
          speakerId: 'char_marco',
          speakerName: 'Marco',
          text: 'That is great! I will say hello to her.',
          translationsByLang: { hi: 'यह बहुत बढ़िया है! मैं उससे नमस्ते कहूँगा।', es: '¡Eso es genial! Iré a saludarla.' },
          audioText: 'That is great! I will say hello to her.',
          audioId: 'en_a1_u01_l09_d01_t5'
        }
      ]
    }
  ],

  // SECTION 8, 9, 10, 12, 13, 14, 15, 16: Practice Exercises
  practiceExercises: [
    {
      id: 'ex_l9_p1',
      lessonId: 'lesson_a1_1_9',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Select the correct 3rd person singular verb form:',
      sourceSentence: 'My sister ___ French at university.',
      options: [
        { id: 'o1', text: 'studies', isCorrect: true },
        { id: 'o2', text: 'study', isCorrect: false },
        { id: 'o3', text: 'studys', isCorrect: false }
      ],
      explanation: 'Consonant + y changes to -ies: "studies".'
    },
    {
      id: 'ex_l9_p2',
      lessonId: 'lesson_a1_1_9',
      stage: 8,
      type: 'fill_blank',
      prompt: 'Complete with the irregular 3rd person form of "have":',
      sourceSentence: 'David ___ a new apartment in the city center.',
      options: [
        { id: 'o1', text: 'has', isCorrect: true },
        { id: 'o2', text: 'haves', isCorrect: false },
        { id: 'o3', text: 'have', isCorrect: false }
      ],
      explanation: 'The 3rd person singular of have is "has".'
    },
    {
      id: 'ex_l9_p3',
      explanation: '\'He\' is third person singular, so the verb takes -s: \'He drives to work every morning.\'',
      lessonId: 'lesson_a1_1_9',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the sentence about Alex:',
      targetSentence: 'He drives to work every morning',
      wordBank: ['He', 'drives', 'to', 'work', 'every', 'morning', 'drive', 'she']
    },
    {
      id: 'ex_l9_p4',
      lessonId: 'lesson_a1_1_9',
      stage: 9,
      type: 'listening',
      prompt: 'Listen to the third-person statement:',
      audioText: 'She teaches English at the school',
      options: [
        { id: 'o1', text: 'She teaches English at the school', isCorrect: true },
        { id: 'o2', text: 'She studies English at the school', isCorrect: false },
        { id: 'o3', text: 'She speaks English at the bank', isCorrect: false }
      ],
      explanation: 'The speaker states "She teaches English at the school".'
    },
    {
      id: 'ex_l9_p5',
      explanation: '\'Father\' is third person singular, so the verb takes -s: \'My father works in a hospital.\'',
      lessonId: 'lesson_a1_1_9',
      stage: 9,
      type: 'listen_and_type',
      prompt: 'Listen and write the phrase exactly:',
      audioText: 'My father works in a hospital',
      targetSentence: 'My father works in a hospital'
    },
    {
      id: 'ex_l9_p6',
      explanation: 'Verbs ending in -o take -es in the third person: \'go\' becomes \'goes\'. \'On Saturdays\' names the days.',
      lessonId: 'lesson_a1_1_9',
      stage: 10,
      type: 'word_ordering',
      prompt: 'Build the sentence:',
      targetSentence: 'She goes to the gym on Saturdays',
      wordBank: ['She', 'goes', 'to', 'the', 'gym', 'on', 'Saturdays', 'go', 'he']
    },
    {
      id: 'ex_l9_p7',
      explanation: '\'He\' is third person singular, so both \'speaks\' and \'lives\' take -s.',
      lessonId: 'lesson_a1_1_9',
      stage: 12,
      type: 'speaking',
      prompt: 'Read this sentence aloud focusing on the final -s sound:',
      targetSentence: 'He speaks three languages and lives in Madrid.',
      audioText: 'He speaks three languages and lives in Madrid.'
    },
    {
      id: 'ex_l9_p8',
      explanation: 'Verbs ending in -ch take -es in the third person: \'watch\' becomes \'watches\'. Hindi: \'मेरी माँ शाम को टीवी देखती हैं।\'',
      lessonId: 'lesson_a1_1_9',
      stage: 13,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'मेरी माँ शाम को टीवी देखती हैं।',
      sourceTranslations: {
        hi: 'मेरी माँ शाम को टीवी देखती हैं।',
        es: 'Mi madre ve la televisión por la tarde.'
      },
      targetSentence: 'My mother watches TV in the evening',
      wordBank: ['My', 'mother', 'watches', 'TV', 'in', 'the', 'evening', 'watch', 'she']
    },
    {
      id: 'ex_l9_p9',
      lessonId: 'lesson_a1_1_9',
      stage: 14,
      type: 'fill_blank',
      prompt: 'Interleaved Practice (Combining Lesson 3 Kinship & Lesson 9 Verbs):',
      sourceSentence: 'Her brother ___ as an engineer in Germany.',
      options: [
        { id: 'o1', text: 'works', isCorrect: true },
        { id: 'o2', text: 'work', isCorrect: false },
        { id: 'o3', text: 'working', isCorrect: false }
      ],
      explanation: 'Subject "Her brother" (he) takes 3rd person "works".'
    },
    {
      id: 'ex_l9_p10',
      lessonId: 'lesson_a1_1_9',
      stage: 15,
      type: 'error_correction',
      prompt: 'Fix the missing 3rd person singular ending:',
      sourceSentence: 'Carlos read a book every night.',
      options: [
        { id: 'o1', text: 'Carlos reads a book every night.', isCorrect: true },
        { id: 'o2', text: 'Carlos is read a book every night.', isCorrect: false },
        { id: 'o3', text: 'Carlos reading a book every night.', isCorrect: false }
      ],
      explanation: 'Add "-s" for singular name Carlos: "Carlos reads".'
    },
    {
      id: 'ex_l9_p11',
      lessonId: 'lesson_a1_1_9',
      stage: 16,
      type: 'dialogue_completion',
      prompt: 'Choose the appropriate response:',
      sourceSentence: 'Colleague: "Where does your brother live?" -> You: "___"',
      options: [
        { id: 'o1', text: 'He lives in Rome with his wife.', isCorrect: true },
        { id: 'o2', text: 'I wake up at seven.', isCorrect: false },
        { id: 'o3', text: 'It is a red backpack.', isCorrect: false }
      ],
      explanation: 'Correctly answers where the brother lives.'
    },
    {
      id: 'ex_l9_p12',
      lessonId: 'lesson_a1_1_9',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Choose the correct form of "go" for "she":',
      sourceSentence: 'Every morning she ___ to work.',
      options: [
        { id: 'o1', text: 'goes', isCorrect: true },
        { id: 'o2', text: 'gos', isCorrect: false },
        { id: 'o3', text: 'go', isCorrect: false }
      ],
      explanation: 'Verbs ending in -o add -es: "goes".'
    },
    {
      id: 'ex_l9_p13',
      lessonId: 'lesson_a1_1_9',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Which verb has the /ɪz/ pronunciation ending?',
      sourceSentence: 'Pronunciation check:',
      options: [
        { id: 'o1', text: 'teaches', isCorrect: true },
        { id: 'o2', text: 'speaks', isCorrect: false },
        { id: 'o3', text: 'plays', isCorrect: false }
      ],
      explanation: 'Verbs ending in -ch add /ɪz/: "teaches" (/ˈtiː.tʃɪz/).'
    },
    {
      id: 'ex_l9_p14',
      explanation: '\'She\' takes -s on both verbs: \'plays\' (the -y after a vowel stays) and \'drinks\'.',
      lessonId: 'lesson_a1_1_9',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Construct the sentence:',
      targetSentence: 'She plays tennis and drinks water',
      wordBank: ['She', 'plays', 'tennis', 'and', 'drinks', 'water', 'play', 'drink']
    },
    {
      id: 'ex_l9_p15',
      explanation: '\'My son\' is third person singular. \'Do\' becomes \'does\', and \'wash\' ends in -sh, so it takes -es: \'washes\'.',
      lessonId: 'lesson_a1_1_9',
      stage: 12,
      type: 'speaking',
      prompt: 'Say this sentence clearly into your microphone:',
      targetSentence: 'My son does his homework and washes his hands.',
      audioText: 'My son does his homework and washes his hands.'
    }
  ],

  // SECTION 16: Review Exercises
  reviewExercises: [
    {
      id: 'ex_l9_rev1',
      lessonId: 'lesson_a1_1_9',
      stage: 16,
      type: 'multiple_choice',
      prompt: 'Which sentence is grammatically correct?',
      sourceSentence: 'Third-person singular test:',
      options: [
        { id: 'o1', text: 'She writes emails every afternoon.', isCorrect: true },
        { id: 'o2', text: 'She write emails every afternoon.', isCorrect: false },
        { id: 'o3', text: 'She is write emails every afternoon.', isCorrect: false }
      ],
      explanation: 'Subject "She" requires "writes".'
    },
    {
      id: 'ex_l9_rev2',
      lessonId: 'lesson_a1_1_9',
      stage: 16,
      type: 'fill_blank',
      prompt: 'Fill in the correct form of "relax":',
      sourceSentence: 'On Sundays, he ___ at home.',
      options: [
        { id: 'o1', text: 'relaxes', isCorrect: true },
        { id: 'o2', text: 'relaxs', isCorrect: false },
        { id: 'o3', text: 'relax', isCorrect: false }
      ],
      explanation: 'Verbs ending in -x take -es: "relaxes".'
    },
    {
      id: 'ex_l9_rev3',
      explanation: '\'The doctor\' is a singular subject, so the verb takes -s: \'helps\'.',
      lessonId: 'lesson_a1_1_9',
      stage: 16,
      type: 'word_ordering',
      prompt: 'Assemble the sentence correctly:',
      targetSentence: 'The doctor helps sick people in the hospital',
      wordBank: ['The', 'doctor', 'helps', 'sick', 'people', 'in', 'the', 'hospital', 'help']
    },
    {
      id: 'ex_l9_rev4',
      explanation: '\'He\' is third person singular, so \'travel\' takes -s: \'travels\'. Hindi: \'वह हर महीने व्यापार के लिए यात्रा करता है।\'',
      lessonId: 'lesson_a1_1_9',
      stage: 16,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'वह हर महीने व्यापार के लिए यात्रा करता है।',
      sourceTranslations: { hi: 'वह हर महीने व्यापार के लिए यात्रा करता है।', es: 'Él viaja por negocios todos los meses.' },
      targetSentence: 'He travels for business every month',
      wordBank: ['He', 'travels', 'for', 'business', 'every', 'month', 'travel', 'she']
    }
  ],

  // SECTION 17: Assessment Exercises (10 items)
  assessmentExercises: [
    {
      id: 'ex_l9_a1',
      lessonId: 'lesson_a1_1_9',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Choose the correct form of "study" for "he":',
      sourceSentence: 'Subject-verb agreement:',
      options: [
        { id: 'o1', text: 'studies', isCorrect: true },
        { id: 'o2', text: 'studys', isCorrect: false },
        { id: 'o3', text: 'study', isCorrect: false },
        { id: 'o4', text: 'studying', isCorrect: false }
      ],
      explanation: 'Study becomes "studies".'
    },
    {
      id: 'ex_l9_a2',
      lessonId: 'lesson_a1_1_9',
      stage: 17,
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct form:',
      sourceSentence: 'Maria ___ two cups of coffee every morning.',
      options: [
        { id: 'o1', text: 'drinks', isCorrect: true },
        { id: 'o2', text: 'drink', isCorrect: false },
        { id: 'o3', text: 'is drink', isCorrect: false },
        { id: 'o4', text: 'drinking', isCorrect: false }
      ],
      explanation: 'Maria (she) pairs with "drinks".'
    },
    {
      id: 'ex_l9_a3',
      explanation: '\'Have\' changes to \'has\' with \'she\' (third person singular): \'She has a big house and a red car.\'',
      lessonId: 'lesson_a1_1_9',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Build the third-person sentence:',
      targetSentence: 'She has a big house and a red car',
      wordBank: ['She', 'has', 'a', 'big', 'house', 'and', 'a', 'red', 'car', 'have']
    },
    {
      id: 'ex_l9_a4',
      lessonId: 'lesson_a1_1_9',
      stage: 17,
      type: 'error_correction',
      prompt: 'Correct the irregular verb error:',
      sourceSentence: 'My teacher haves a lot of books.',
      options: [
        { id: 'o1', text: 'My teacher has a lot of books.', isCorrect: true },
        { id: 'o2', text: 'My teacher have a lot of books.', isCorrect: false },
        { id: 'o3', text: 'My teacher is have a lot of books.', isCorrect: false }
      ],
      explanation: 'The 3rd person singular of have is "has".'
    },
    {
      id: 'ex_l9_a5',
      lessonId: 'lesson_a1_1_9',
      stage: 17,
      type: 'listening',
      prompt: 'Listen and select what the speaker says:',
      audioText: 'David lives in London and works at a bank',
      options: [
        { id: 'o1', text: 'David lives in London and works at a bank', isCorrect: true },
        { id: 'o2', text: 'David lived in London and worked at a bank', isCorrect: false },
        { id: 'o3', text: 'David visits London and works at a hotel', isCorrect: false }
      ],
      explanation: 'The speaker states "David lives in London and works at a bank".'
    },
    {
      id: 'ex_l9_a6',
      explanation: '\'She\' is third person singular, so \'buy\' takes -s: \'buys\'.',
      lessonId: 'lesson_a1_1_9',
      stage: 17,
      type: 'listen_and_type',
      prompt: 'Listen and type the sentence accurately:',
      audioText: 'She buys fresh fruit every Saturday',
      targetSentence: 'She buys fresh fruit every Saturday'
    },
    {
      id: 'ex_l9_a7',
      lessonId: 'lesson_a1_1_9',
      stage: 17,
      type: 'dialogue_completion',
      prompt: 'Select the best reply:',
      sourceSentence: 'Manager: "What does Liam do?" -> Colleague: "___"',
      options: [
        { id: 'o1', text: 'He manages our technical team.', isCorrect: true },
        { id: 'o2', text: 'I am thirty years old.', isCorrect: false },
        { id: 'o3', text: 'It is ten o\'clock.', isCorrect: false }
      ],
      explanation: 'States Liam\'s job duties.'
    },
    {
      id: 'ex_l9_a8',
      explanation: '\'Teach\' ends in -ch, so the third person form is \'teaches\'. \'My sister\' is singular. Hindi: \'मेरी बहन एक नए स्कूल में गणित पढ़ाती है।\'',
      lessonId: 'lesson_a1_1_9',
      stage: 17,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'मेरी बहन एक नए स्कूल में गणित पढ़ाती है।',
      sourceTranslations: { hi: 'मेरी बहन एक नए स्कूल में गणित पढ़ाती है।', es: 'Mi hermana enseña matemáticas en una escuela nueva.' },
      targetSentence: 'My sister teaches math at a new school',
      wordBank: ['My', 'sister', 'teaches', 'math', 'at', 'a', 'new', 'school', 'teach', 'he']
    },
    {
      id: 'ex_l9_a9',
      lessonId: 'lesson_a1_1_9',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Which verb spelling is correct?',
      sourceSentence: 'Spelling rule for "watch":',
      options: [
        { id: 'o1', text: 'watches', isCorrect: true },
        { id: 'o2', text: 'watchs', isCorrect: false },
        { id: 'o3', text: 'watchies', isCorrect: false },
        { id: 'o4', text: 'watchez', isCorrect: false }
      ],
      explanation: 'Verbs ending in -ch add -es: "watches".'
    },
    {
      id: 'ex_l9_a10',
      explanation: '\'He\' is third person singular: \'relaxes\' (-x takes -es) and \'listens\' (-s).',
      lessonId: 'lesson_a1_1_9',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the final sentence:',
      targetSentence: 'He relaxes and listens to music after work',
      wordBank: ['He', 'relaxes', 'and', 'listens', 'to', 'music', 'after', 'work', 'relax', 'she']
    }
  ]
};
