import { DetailedLessonData } from '../../types';

export const LESSON_A1_1_14_DATA: DetailedLessonData = {
  id: 'lesson_a1_1_14',
  unitId: 'unit_a1_1',
  title: 'Hobbies, Preferences & Free Time (Like / Love / Hate + -ing)',
  cefr: 'A1',
  icon: '🎨',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Expressing Likes, Dislikes, Hobbies & Verb+-ing Patterns',
    description: 'Learn vocabulary for leisure activities and hobbies, express strong and mild preferences using "love", "like", "enjoy", "prefer", and "hate", and master the syntactic pattern of following preference verbs with nouns or gerunds (verb + -ing).',
    descriptionsByLang: {
      hi: 'शौक (Hobbies) और खाली समय की गतिविधियों का वर्णन करना सीखें। "love", "like", "enjoy", "prefer", "hate" के साथ संज्ञा (Noun) और Gerund (verb + -ing) का सही प्रयोग सीखें।',
      es: 'Aprende vocabulario de ocio y pasatiempos, expresa gustos y preferencias con "love", "like", "enjoy", "prefer" y "hate", y domina el patrón con gerundio (verbo + -ing).',
      fr: 'Apprenez à parler de vos loisirs et préférences avec "like/love/hate" + verbe en -ing.',
      de: 'Lernen Sie Hobbys und Freizeitaktivitäten mit "like/love/hate" + Gerundium (-ing) auszudrücken.',
      pt: 'Aprenda sobre hobbies e preferências usando "like/love/hate" + verbo no gerúndio (-ing).',
      zh: '学习业余爱好和空闲时间活动的词汇，掌握使用 like/love/enjoy/prefer/hate 后接名词或动名词（verb+-ing）表达喜好的语法句型。',
      ar: 'تعلم مفردات الهوايات وأوقات الفراغ والتعبير عن التفضيلات باستخدام like/love/hate متبوعة بـ verb+-ing.',
      ja: '趣味や余暇の活動に関する語彙と、like/love/hate/enjoyの後ろに動名詞（verb+-ing）や名詞を続ける表現方法を学びます。',
      ru: 'Изучите лексику хобби и свободного времени, научитесь выражать предпочтения с помощью like/love/hate + глагол с -ing.'
    },
    canDoStatements: [
      'Name common hobbies (listening to music, watching movies, playing guitar, swimming, traveling, cooking, taking photos)',
      'Express degrees of preference: love (>90%), like (>70%), enjoy (>70%), don\'t mind (50%), dislike / don\'t like (<30%), hate (0%)',
      'Use the correct structure: like / love / hate + Verb-ING (e.g. "I love cooking", "She likes swimming")',
      'Express comparison preferences: "I prefer tea to coffee" or "I prefer reading to watching TV"',
      'Ask and answer "What do you like doing in your free time?"'
    ],
    canDoByLang: {
      hi: [
        'शौक (music, swimming, cooking, travel) का अंग्रेजी में नाम लेना',
        'Like / love / hate के बाद verb + -ing का सही प्रयोग (उदा. "I like cooking")',
        '"What do you like doing in your free time?" पूछना और उत्तर देना'
      ],
      es: [
        'Nombrar pasatiempos y actividades de tiempo libre',
        'Usar la estructura like / love / hate + verbo en -ing',
        'Expresar preferencias con prefer... to...'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (20 items)
  vocabulary: [
    {
      id: 'v_hob_love',
      word: 'love',
      phonetic: '/lʌv/',
      meaning: 'To have a very strong fondness or passion for an activity or thing',
      translationsByLang: { hi: 'बहुत पसंद करना / प्यार करना', es: 'encantar / amar', fr: 'adorer / aimer beaucoup', de: 'lieben', pt: 'amar / adorar', zh: '热爱 / 非常喜欢', ar: 'يعشق / يحب كثيراً', ja: '大好きである', ru: 'очень любить / обожать' },
      exampleSentence: 'I love listening to jazz music.',
      exampleTranslationByLang: { hi: 'मुझे जैज़ संगीत सुनना बेहद पसंद है।', es: 'Me encanta escuchar música jazz.' },
      audioText: 'love',
      audioId: 'en_a1_u01_l14_v_love',
      slowAudioId: 'en_a1_u01_l14_v_love_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '❤️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_hob_enjoy',
      word: 'enjoy',
      phonetic: '/ɪnˈdʒɔɪ/',
      meaning: 'To take pleasure in an activity',
      translationsByLang: { hi: 'आनंद लेना / मजा लेना', es: 'disfrutar de', fr: 'apprécier / aimer', de: 'genießen', pt: 'apreciar / curtir', zh: '享受 / 喜爱', ar: 'يستمتع بـ', ja: '楽しむ', ru: 'наслаждаться / получать удовольствие' },
      exampleSentence: 'We enjoy walking in the city park.',
      exampleTranslationByLang: { hi: 'हम शहर के पार्क में टहलने का आनंद लेते हैं।', es: 'Disfrutamos paseando por el parque de la ciudad.' },
      audioText: 'enjoy',
      audioId: 'en_a1_u01_l14_v_enjoy',
      slowAudioId: 'en_a1_u01_l14_v_enjoy_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '😊',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_hob_prefer',
      word: 'prefer',
      phonetic: '/prɪˈfɝː/',
      meaning: 'To like one thing more than another',
      translationsByLang: { hi: 'अधिक प्राथमिकता देना / ज्यादा पसंद करना', es: 'preferir', fr: 'préférer', de: 'bevorzugen / lieber mögen', pt: 'preferir', zh: '更喜欢 / 偏好', ar: 'يفضل', ja: '〜をより好む', ru: 'предпочитать' },
      exampleSentence: 'I prefer tea to coffee.',
      exampleTranslationByLang: { hi: 'मुझे कॉफी की तुलना में चाय ज्यादा पसंद है।', es: 'Prefiero el té al café.' },
      audioText: 'prefer',
      audioId: 'en_a1_u01_l14_v_prefer',
      slowAudioId: 'en_a1_u01_l14_v_prefer_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⚖️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_hob_hate',
      word: 'hate',
      phonetic: '/heɪt/',
      meaning: 'To dislike intensely',
      translationsByLang: { hi: 'नफ़रत करना / सख्त नापसंद होना', es: 'odiar / detestar', fr: 'détester', de: 'hassen', pt: 'odiar / detestar', zh: '讨厌 / 憎恨', ar: 'يكره', ja: '嫌う / 大嫌いである', ru: 'ненавидеть' },
      exampleSentence: 'He hates waking up early on cold mornings.',
      exampleTranslationByLang: { hi: 'उसे ठंडी सुबह में जल्दी जागना सख्त नापसंद है।', es: 'Odia despertarse temprano en las mañanas frías.' },
      audioText: 'hate',
      audioId: 'en_a1_u01_l14_v_hate',
      slowAudioId: 'en_a1_u01_l14_v_hate_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '😠',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_hob_listen_music',
      word: 'listen to music',
      phonetic: '/ˈlɪs.ən tuː ˈmjuː.zɪk/',
      meaning: 'To hear and appreciate songs or instrumental audio (uses preposition "to")',
      translationsByLang: { hi: 'संगीत सुनना', es: 'escuchar música', fr: 'écouter de la musique', de: 'Musik hören', pt: 'ouvir música', zh: '听音乐', ar: 'يستمع إلى الموسيقى', ja: '音楽を聴く', ru: 'слушать музыку' },
      exampleSentence: 'I always listen to music when I study.',
      exampleTranslationByLang: { hi: 'जब मैं पढ़ाई करता हूँ तो हमेशा संगीत सुनता हूँ।', es: 'Siempre escucho música cuando estudio.' },
      audioText: 'listen to music',
      audioId: 'en_a1_u01_l14_v_listen_music',
      slowAudioId: 'en_a1_u01_l14_v_listen_music_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎧',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_hob_watch_movies',
      word: 'watch movies',
      phonetic: '/wɑːtʃ ˈmuː.viz/',
      meaning: 'To view cinematic films for pleasure',
      translationsByLang: { hi: 'फिल्में देखना', es: 'ver películas', fr: 'regarder des films', de: 'Filme schauen', pt: 'assistir a filmes', zh: '看电影', ar: 'يشاهد الأفلام', ja: '映画を見る', ru: 'смотреть фильмы' },
      exampleSentence: 'We like watching movies on Friday nights.',
      exampleTranslationByLang: { hi: 'हमें शुक्रवार की रात फिल्में देखना पसंद है।', es: 'Nos gusta ver películas los viernes por la noche.' },
      audioText: 'watch movies',
      audioId: 'en_a1_u01_l14_v_watch_movies',
      slowAudioId: 'en_a1_u01_l14_v_watch_movies_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎬',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_hob_play_guitar',
      word: 'play guitar',
      phonetic: '/pleɪ ɡɪˈtɑːr/',
      meaning: 'To perform acoustic or electric musical instrument',
      translationsByLang: { hi: 'गिटार बजाना', es: 'tocar la guitarra', fr: 'jouer de la guitare', de: 'Gitarre spielen', pt: 'tocar violão / guitarra', zh: '弹吉他', ar: 'يعزف على الغيتار', ja: 'ギターを弾く', ru: 'играть на гитаре' },
      exampleSentence: 'My friend plays the guitar in a band.',
      exampleTranslationByLang: { hi: 'मेरा दोस्त एक बैंड में गिटार बजाता है।', es: 'Mi amigo toca la guitarra en una banda.' },
      audioText: 'play guitar',
      audioId: 'en_a1_u01_l14_v_play_guitar',
      slowAudioId: 'en_a1_u01_l14_v_play_guitar_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎸',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_hob_play_football',
      word: 'play football',
      phonetic: '/pleɪ ˈfʊt.bɑːl/',
      meaning: 'To participate in soccer/football matches',
      translationsByLang: { hi: 'फुटबॉल खेलना', es: 'jugar al fútbol', fr: 'jouer au football', de: 'Fußball spielen', pt: 'jogar futebol', zh: '踢足球', ar: 'يلعب كرة القدم', ja: 'サッカーをする', ru: 'играть в футбол' },
      exampleSentence: 'They play football every Saturday morning.',
      exampleTranslationByLang: { hi: 'वे हर शनिवार सुबह फुटबॉल खेलते हैं।', es: 'Juegan al fútbol todos los sábados por la mañana.' },
      audioText: 'play football',
      audioId: 'en_a1_u01_l14_v_play_football',
      slowAudioId: 'en_a1_u01_l14_v_play_football_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⚽',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_hob_swim',
      word: 'swim',
      phonetic: '/swɪm/',
      meaning: 'To move through water by moving body limbs',
      translationsByLang: { hi: 'तैरना', es: 'nadar', fr: 'nager', de: 'schwimmen', pt: 'nadar', zh: '游泳', ar: 'يسبح', ja: '泳ぐ', ru: 'плавать' },
      exampleSentence: 'She loves swimming in the ocean.',
      exampleTranslationByLang: { hi: 'उसे समुद्र में तैरना बहुत पसंद है।', es: 'Le encanta nadar en el océano.' },
      audioText: 'swim',
      audioId: 'en_a1_u01_l14_v_swim',
      slowAudioId: 'en_a1_u01_l14_v_swim_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏊',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_hob_travel',
      word: 'travel',
      phonetic: '/ˈtræv.əl/',
      meaning: 'To journey to different countries or regions',
      translationsByLang: { hi: 'यात्रा करना / घूमना', es: 'viajar', fr: 'voyager', de: 'reisen', pt: 'viajar', zh: '旅行', ar: 'يسافر', ja: '旅行する', ru: 'путешествовать' },
      exampleSentence: 'We love traveling to historic European cities.',
      exampleTranslationByLang: { hi: 'हमें ऐतिहासिक यूरोपीय शहरों की यात्रा करना बहुत पसंद है।', es: 'Nos encanta viajar a ciudades históricas europeas.' },
      audioText: 'travel',
      audioId: 'en_a1_u01_l14_v_travel',
      slowAudioId: 'en_a1_u01_l14_v_travel_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '✈️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_hob_take_photos',
      word: 'take photos',
      phonetic: '/teɪk ˈfoʊ.t̬oʊz/',
      meaning: 'To capture pictures using a camera or smartphone',
      translationsByLang: { hi: 'तस्वीरें खींचना / फोटो लेना', es: 'hacer fotos / tomar fotos', fr: 'prendre des photos', de: 'Fotos machen', pt: 'tirar fotos', zh: '拍照 / 摄影', ar: 'يلتقط الصور', ja: '写真を撮る', ru: 'фотографировать' },
      exampleSentence: 'I enjoy taking photos of nature.',
      exampleTranslationByLang: { hi: 'मुझे प्रकृति की तस्वीरें खींचने में आनंद आता है।', es: 'Disfruto haciendo fotos de la naturaleza.' },
      audioText: 'take photos',
      audioId: 'en_a1_u01_l14_v_take_photos',
      slowAudioId: 'en_a1_u01_l14_v_take_photos_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📷',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_hob_read_books',
      word: 'read books',
      phonetic: '/riːd bʊks/',
      meaning: 'To read literature and novels for leisure',
      translationsByLang: { hi: 'किताबें पढ़ना', es: 'leer libros', fr: 'lire des livres', de: 'Bücher lesen', pt: 'ler livros', zh: '读书 / 阅读', ar: 'يقرأ الكتب', ja: '読書する / 本を読む', ru: 'читать книги' },
      exampleSentence: 'She loves reading books in the library.',
      exampleTranslationByLang: { hi: 'उसे लाइब्रेरी में किताबें पढ़ना बहुत पसंद है।', es: 'A ella le encanta leer libros en la biblioteca.' },
      audioText: 'read books',
      audioId: 'en_a1_u01_l14_v_read_books',
      slowAudioId: 'en_a1_u01_l14_v_read_books_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📚',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_hob_cook',
      word: 'cook',
      phonetic: '/kʊk/',
      meaning: 'To prepare delicious meals in the kitchen',
      translationsByLang: { hi: 'खाना बनाना / पकाना', es: 'cocinar', fr: 'cuisiner', de: 'kochen', pt: 'cozinhar', zh: '烹饪 / 做饭', ar: 'يطبخ', ja: '料理する', ru: 'готовить еду' },
      exampleSentence: 'I like cooking Italian pasta for my family.',
      exampleTranslationByLang: { hi: 'मुझे अपने परिवार के लिए इतालवी पास्ता बनाना पसंद है।', es: 'Me gusta cocinar pasta italiana para mi familia.' },
      audioText: 'cook',
      audioId: 'en_a1_u01_l14_v_cook',
      slowAudioId: 'en_a1_u01_l14_v_cook_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍲',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_hob_dance',
      word: 'dance',
      phonetic: '/dæns/',
      meaning: 'To move rhythmically to musical beats',
      translationsByLang: { hi: 'नाचना / नृत्य करना', es: 'bailar', fr: 'danser', de: 'tanzen', pt: 'dançar', zh: '跳舞', ar: 'يرقص', ja: '踊る / ダンスする', ru: 'танцевать' },
      exampleSentence: 'They love dancing salsa on Friday nights.',
      exampleTranslationByLang: { hi: 'उन्हें शुक्रवार की रात सालसा नाचना बहुत पसंद है।', es: 'Les encanta bailar salsa los viernes por la noche.' },
      audioText: 'dance',
      audioId: 'en_a1_u01_l14_v_dance',
      slowAudioId: 'en_a1_u01_l14_v_dance_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💃',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_hob_hobby',
      word: 'hobby',
      phonetic: '/ˈhɑː.bi/',
      meaning: 'An activity pursued for pleasure in one\'s spare time',
      translationsByLang: { hi: 'शौक / रुचि', es: 'pasatiempo / afición', fr: 'passe-temps / hobby', de: 'Hobby', pt: 'passatempo / hobby', zh: '业余爱好', ar: 'هواية', ja: '趣味', ru: 'хобби / увлечение' },
      exampleSentence: 'My favorite hobby is photography.',
      exampleTranslationByLang: { hi: 'मेरा पसंदीदा शौक फोटोग्राफी है।', es: 'Mi afición favorita es la fotografía.' },
      audioText: 'hobby',
      audioId: 'en_a1_u01_l14_v_hobby',
      slowAudioId: 'en_a1_u01_l14_v_hobby_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎯',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_hob_free_time',
      word: 'free time',
      phonetic: '/friː taɪm/',
      meaning: 'Time available when not working or studying',
      translationsByLang: { hi: 'खाली समय / फुर्सत का समय', es: 'tiempo libre', fr: 'temps libre', de: 'Freizeit', pt: 'tempo livre', zh: '空闲时间 / 业余时间', ar: 'وقت الفراغ', ja: '自由時間 / 暇な時間', ru: 'свободное время' },
      exampleSentence: 'What do you do in your free time?',
      exampleTranslationByLang: { hi: 'आप अपने खाली समय में क्या करते हैं?', es: '¿Qué haces en tu tiempo libre?' },
      audioText: 'free time',
      audioId: 'en_a1_u01_l14_v_free_time',
      slowAudioId: 'en_a1_u01_l14_v_free_time_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⏳',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_hob_favorite',
      word: 'favorite',
      phonetic: '/ˈfeɪ.vər.ɪt/',
      meaning: 'Preferred above all others of the same kind',
      translationsByLang: { hi: 'पसंदीदा / मनपसंद', es: 'favorito/a', fr: 'préféré/e', de: 'Lieblings-', pt: 'favorito/a', zh: '最喜爱的', ar: 'المفضل', ja: 'お気に入りの', ru: 'любимый' },
      exampleSentence: 'What is your favorite sport?',
      exampleTranslationByLang: { hi: 'आपका पसंदीदा खेल कौन सा है?', es: '¿Cuál es tu deporte favorito?' },
      audioText: 'favorite',
      audioId: 'en_a1_u01_l14_v_favorite',
      slowAudioId: 'en_a1_u01_l14_v_favorite_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⭐',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_hob_together',
      word: 'together',
      phonetic: '/təˈɡeð.ɚ/',
      meaning: 'With or in proximity to other people',
      translationsByLang: { hi: 'साथ में / एक साथ', es: 'juntos/as', fr: 'ensemble', de: 'zusammen / gemeinsam', pt: 'juntos/as', zh: '一起 / 共同', ar: 'معاً', ja: '一緒に', ru: 'вместе' },
      exampleSentence: 'We like cooking dinner together.',
      exampleTranslationByLang: { hi: 'हमें साथ में खाना बनाना पसंद है।', es: 'Nos gusta cocinar la cena juntos.' },
      audioText: 'together',
      audioId: 'en_a1_u01_l14_v_together',
      slowAudioId: 'en_a1_u01_l14_v_together_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👥',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_hob_alone',
      word: 'alone',
      phonetic: '/əˈloʊn/',
      meaning: 'Having no other people with you; by oneself',
      translationsByLang: { hi: 'अकेले', es: 'solo/a', fr: 'seul/e', de: 'alleine', pt: 'sozinho/a', zh: '独自 / 单独', ar: 'لوحده / بمفرده', ja: '一人で', ru: 'один / в одиночку' },
      exampleSentence: 'I prefer studying alone in a quiet room.',
      exampleTranslationByLang: { hi: 'मुझे एक शांत कमरे में अकेले पढ़ना ज्यादा पसंद है।', es: 'Prefiero estudiar solo en una habitación tranquila.' },
      audioText: 'alone',
      audioId: 'en_a1_u01_l14_v_alone',
      slowAudioId: 'en_a1_u01_l14_v_alone_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧘',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_hob_game',
      word: 'board game / video game',
      phonetic: '/ɡeɪm/',
      meaning: 'An activity played for amusement or competition according to rules',
      translationsByLang: { hi: 'खेल / गेम', es: 'juego / videojuego', fr: 'jeu / jeu vidéo', de: 'Spiel / Videospiel', pt: 'jogo / videogame', zh: '游戏', ar: 'لعبة', ja: 'ゲーム', ru: 'игра' },
      exampleSentence: 'We like playing board games on rainy days.',
      exampleTranslationByLang: { hi: 'हमें बारिश के दिनों में बोर्ड गेम खेलना पसंद है।', es: 'Nos gusta jugar a juegos de mesa los días de lluvia.' },
      audioText: 'board game and video game',
      audioId: 'en_a1_u01_l14_v_games',
      slowAudioId: 'en_a1_u01_l14_v_games_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎲',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks
  expressions: [
    {
      id: 'chunk_what_do_you_like_doing',
      text: 'What do you like doing in your free time?',
      meaning: 'Standard friendly question asking about someone\'s hobbies',
      translationsByLang: {
        hi: 'आप अपने खाली समय में क्या करना पसंद करते हैं?',
        es: '¿Qué te gusta hacer en tu tiempo libre?',
        fr: 'Qu\'aimez-vous faire pendant votre temps libre ?',
        de: 'Was machst du gerne in deiner Freizeit?'
      },
      audioText: 'What do you like doing in your free time?',
      audioId: 'en_a1_u01_l14_c_free_time_doing',
      context: 'Social conversations and getting-to-know-you chats',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_i_love_music',
      text: 'I love listening to music.',
      meaning: 'Strong passion for musical enjoyment',
      translationsByLang: {
        hi: 'मुझे संगीत सुनना बहुत पसंद है।',
        es: 'Me encanta escuchar música.',
        fr: 'J\'adore écouter de la musique.',
        de: 'Ich liebe es, Musik zu hören.'
      },
      audioText: 'I love listening to music.',
      audioId: 'en_a1_u01_l14_c_love_music',
      context: 'Sharing cultural and artistic interests',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_prefer_tea_to_coffee',
      text: 'I prefer tea to coffee.',
      meaning: 'Expressing relative beverage preference',
      translationsByLang: {
        hi: 'मुझे कॉफी से ज्यादा चाय पसंद है।',
        es: 'Prefiero el té al café.',
        fr: 'Je préfère le thé au café.',
        de: 'Ich bevorzuge Tee gegenüber Kaffee.'
      },
      audioText: 'I prefer tea to coffee.',
      audioId: 'en_a1_u01_l14_c_prefer_tea',
      context: 'Discussing food and drink preferences',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 5 & 6: Grammar
  grammar: {
    patterns: [
      {
        id: 'g_preference_verbs_gerund',
        title: 'Preference Verbs + Gerund (-ing) or Noun',
        rule: 'When verbs of preference (like, love, enjoy, hate, prefer) are followed by an action, the action verb takes the "-ing" form (gerund).',
        formula: 'Subject + [like / love / enjoy / hate / prefer] + [Verb-ING] / [Noun]',
        examples: [
          { sentence: 'I like swimming, but I hate running.', translation: 'मुझे तैरना पसंद है, पर दौड़ना सख्त नापसंद है। / Me gusta nadar, pero odio correr.', audioText: 'I like swimming, but I hate running.', audioId: 'en_a1_u01_l14_g_ex1' },
          { sentence: 'She enjoys cooking for her friends.', translation: 'उसे अपने दोस्तों के लिए खाना बनाने में आनंद आता है। / Ella disfruta cocinando para sus amigos.', audioText: 'She enjoys cooking for her friends.', audioId: 'en_a1_u01_l14_g_ex2' }
        ],
        explanationByLang: {
          hi: 'Like, love, enjoy, hate, prefer के बाद जब कोई क्रिया आती है, तो उसमें "-ing" जोड़ा जाता है (उदा. "I like swimming", "I love cooking")।',
          es: 'Tras verbos como like, love, enjoy, hate y prefer, los verbos siguientes llevan la terminación "-ing" (I like swimming, she loves cooking).'
        }
      },
      {
        id: 'g_prefer_x_to_y',
        title: 'Prefer X to Y Structure',
        rule: 'To compare preferences between two items or activities, use the preposition "to" (never "than").',
        formula: 'Subject + prefer + [Noun/Gerund A] + to + [Noun/Gerund B]',
        examples: [
          { sentence: 'We prefer staying at home to going out.', translation: 'हम बाहर जाने से ज्यादा घर पर रहना पसंद करते हैं। / Preferimos quedarnos en casa a salir.', audioText: 'We prefer staying at home to going out.', audioId: 'en_a1_u01_l14_g_ex3' },
          { sentence: 'David prefers Italian food to French food.', translation: 'डेविड फ्रेंच खाने से ज्यादा इतालवी खाना पसंद करता है। / David prefiere la comida italiana a la francesa.', audioText: 'David prefers Italian food to French food.', audioId: 'en_a1_u01_l14_g_ex4' }
        ],
        explanationByLang: {
          hi: 'दो चीजों में प्राथमिकता बताने के लिए "prefer ... to ..." का प्रयोग करें (उदा. "I prefer tea to coffee"), "than" न लगाएँ।',
          es: 'Para comparar preferencias usa "to", nunca "than": "I prefer tea to coffee".'
        }
      }
    ]
  },

  // SECTION 7: Common Mistakes
  commonMistakes: [
    {
      id: 'cm_l14_like_base_verb',
      incorrect: 'I like swim in the summer.',
      correct: 'I like swimming in the summer.',
      whyExplanation: 'Use the -ing form (swimming) after the preference verb "like".',
      explanationsByLang: {
        hi: '"like" के बाद क्रिया में -ing लगाएँ: "I like swimming", "I like swim" गलत है।',
        es: 'Usa el gerundio (-ing) tras "like": "I like swimming", nunca "*I like swim*".',
        fr: 'Utilisez la forme en -ing après "like" : "I like swimming".',
        de: 'Nutzen Sie die -ing Form nach "like": "I like swimming".'
      }
    },
    {
      id: 'cm_l14_prefer_than',
      incorrect: 'I prefer tea than coffee.',
      correct: 'I prefer tea to coffee.',
      whyExplanation: 'The verb "prefer" collocate with the preposition "to", not "than".',
      explanationsByLang: {
        hi: '"prefer" के साथ "to" आता है, "than" नहीं: "I prefer tea to coffee".',
        es: 'Con "prefer" usa "to", nunca "than": "I prefer tea to coffee".',
        fr: 'Dites "prefer tea to coffee", pas "*than coffee*".',
        de: 'Sagen Sie "prefer tea to coffee", nicht "*than coffee*".'
      }
    }
  ],

  // SECTION 11: Dialogue
  dialogues: [
    {
      id: 'd_a1_1_14_weekend_hobbies',
      title: 'Sharing Free Time Passions',
      context: 'Mia and Carlos talk about what they enjoy doing on weekends.',
      characters: [
        { id: 'char_mia', name: 'Mia', role: 'Student' },
        { id: 'char_carlos', name: 'Carlos', role: 'Student' }
      ],
      turns: [
        {
          id: 'turn_1',
          speakerId: 'char_mia',
          speakerName: 'Mia',
          text: 'Carlos, what do you like doing in your free time?',
          translationsByLang: { hi: 'कार्लोस, आप अपने खाली समय में क्या करना पसंद करते हैं?', es: 'Carlos, ¿qué te gusta hacer en tu tiempo libre?' },
          audioText: 'Carlos, what do you like doing in your free time?',
          audioId: 'en_a1_u01_l14_d01_t1'
        },
        {
          id: 'turn_2',
          speakerId: 'char_carlos',
          speakerName: 'Carlos',
          text: 'I love playing the guitar and listening to rock music. What about you?',
          translationsByLang: { hi: 'मुझे गिटार बजाना और रॉक संगीत सुनना बहुत पसंद है। आप क्या करती हैं?', es: 'Me encanta tocar la guitarra y escuchar música rock. ¿Y tú?' },
          audioText: 'I love playing the guitar and listening to rock music. What about you?',
          audioId: 'en_a1_u01_l14_d01_t2'
        },
        {
          id: 'turn_3',
          speakerId: 'char_mia',
          speakerName: 'Mia',
          text: 'I enjoy taking photos and cooking Italian food for my friends.',
          translationsByLang: { hi: 'मुझे तस्वीरें खींचने और दोस्तों के लिए इतालवी खाना बनाने में बहुत आनंद आता है।', es: 'Disfruto haciendo fotos y cocinando comida italiana para mis amigos.' },
          audioText: 'I enjoy taking photos and cooking Italian food for my friends.',
          audioId: 'en_a1_u01_l14_d01_t3'
        },
        {
          id: 'turn_4',
          speakerId: 'char_carlos',
          speakerName: 'Carlos',
          text: 'Do you like swimming or playing sports?',
          translationsByLang: { hi: 'क्या आपको तैरना या खेल खेलना पसंद है?', es: '¿Te gusta nadar o hacer deporte?' },
          audioText: 'Do you like swimming or playing sports?',
          audioId: 'en_a1_u01_l14_d01_t4'
        },
        {
          id: 'turn_5',
          speakerId: 'char_mia',
          speakerName: 'Mia',
          text: 'I like swimming, but I prefer reading a book on the beach!',
          translationsByLang: { hi: 'मुझे तैरना पसंद है, पर समुद्र तट पर किताब पढ़ना ज्यादा अच्छा लगता है!', es: '¡Me gusta nadar, pero prefiero leer un libro en la playa!' },
          audioText: 'I like swimming, but I prefer reading a book on the beach!',
          audioId: 'en_a1_u01_l14_d01_t5'
        }
      ]
    }
  ],

  // SECTION 8, 9, 10, 12, 13, 14, 15, 16: Practice Exercises
  practiceExercises: [
    {
      id: 'ex_l14_p1',
      lessonId: 'lesson_a1_1_14',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Select the correct verb form after "loves":',
      sourceSentence: 'She loves ___ to pop music.',
      options: [
        { id: 'o1', text: 'listening', isCorrect: true },
        { id: 'o2', text: 'listen', isCorrect: false },
        { id: 'o3', text: 'listens', isCorrect: false }
      ],
      explanation: 'Use gerund "-ing" after "loves": "listening".'
    },
    {
      id: 'ex_l14_p2',
      lessonId: 'lesson_a1_1_14',
      stage: 8,
      type: 'fill_blank',
      prompt: 'Fill in the correct preposition for comparing preferences:',
      sourceSentence: 'I prefer tea ___ coffee.',
      options: [
        { id: 'o1', text: 'to', isCorrect: true },
        { id: 'o2', text: 'than', isCorrect: false },
        { id: 'o3', text: 'from', isCorrect: false }
      ],
      explanation: 'Use "prefer X to Y".'
    },
    {
      id: 'ex_l14_p3',
      lessonId: 'lesson_a1_1_14',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the free time question:',
      targetSentence: 'What do you like doing in your free time',
      wordBank: ['What', 'do', 'you', 'like', 'doing', 'in', 'your', 'free', 'time', 'does']
    },
    {
      id: 'ex_l14_p4',
      lessonId: 'lesson_a1_1_14',
      stage: 9,
      type: 'listening',
      prompt: 'Listen to the speaker\'s hobby:',
      audioText: 'We enjoy playing football and swimming on Saturdays',
      options: [
        { id: 'o1', text: 'We enjoy playing football and swimming on Saturdays', isCorrect: true },
        { id: 'o2', text: 'We hate playing football and swimming on Saturdays', isCorrect: false },
        { id: 'o3', text: 'We like playing guitar and watching movies on Sundays', isCorrect: false }
      ],
      explanation: 'The speaker states "We enjoy playing football and swimming on Saturdays".'
    },
    {
      id: 'ex_l14_p5',
      lessonId: 'lesson_a1_1_14',
      stage: 9,
      type: 'listen_and_type',
      prompt: 'Listen and write the sentence accurately:',
      audioText: 'He loves taking photos of old buildings',
      targetSentence: 'He loves taking photos of old buildings'
    },
    {
      id: 'ex_l14_p6',
      lessonId: 'lesson_a1_1_14',
      stage: 10,
      type: 'word_ordering',
      prompt: 'Build the preference sentence:',
      targetSentence: 'She prefers reading books to watching movies',
      wordBank: ['She', 'prefers', 'reading', 'books', 'to', 'watching', 'movies', 'than', 'read']
    },
    {
      id: 'ex_l14_p7',
      lessonId: 'lesson_a1_1_14',
      stage: 12,
      type: 'speaking',
      prompt: 'State your hobby aloud into your microphone:',
      targetSentence: 'I enjoy cooking Italian pasta and listening to jazz.',
      audioText: 'I enjoy cooking Italian pasta and listening to jazz.'
    },
    {
      id: 'ex_l14_p8',
      lessonId: 'lesson_a1_1_14',
      stage: 13,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'उसे नई जगहों की यात्रा करना बहुत पसंद है।',
      sourceTranslations: {
        hi: 'उसे नई जगहों की यात्रा करना बहुत पसंद है।',
        es: 'A ella le encanta viajar a lugares nuevos.'
      },
      targetSentence: 'She loves traveling to new places',
      wordBank: ['She', 'loves', 'traveling', 'to', 'new', 'places', 'travel', 'love']
    },
    {
      id: 'ex_l14_p9',
      lessonId: 'lesson_a1_1_14',
      stage: 14,
      type: 'fill_blank',
      prompt: 'Interleaved Practice (Combining Lesson 10 Frequency & Lesson 14 Hobbies):',
      sourceSentence: 'I ___ play the guitar on Sunday afternoons.',
      options: [
        { id: 'o1', text: 'always', isCorrect: true },
        { id: 'o2', text: 'at', isCorrect: false },
        { id: 'o3', text: 'playing', isCorrect: false }
      ],
      explanation: 'Frequency adverb "always" precedes "play".'
    },
    {
      id: 'ex_l14_p10',
      lessonId: 'lesson_a1_1_14',
      stage: 15,
      type: 'error_correction',
      prompt: 'Fix the gerund error:',
      sourceSentence: 'They like watch movies together.',
      options: [
        { id: 'o1', text: 'They like watching movies together.', isCorrect: true },
        { id: 'o2', text: 'They likes watch movies together.', isCorrect: false },
        { id: 'o3', text: 'They like to watching movies together.', isCorrect: false }
      ],
      explanation: 'Use "-ing" form after like: "like watching".'
    },
    {
      id: 'ex_l14_p11',
      lessonId: 'lesson_a1_1_14',
      stage: 16,
      type: 'dialogue_completion',
      prompt: 'Choose the most natural answer:',
      sourceSentence: 'Friend: "Do you like dancing?" -> You: "___"',
      options: [
        { id: 'o1', text: 'Yes, I love dancing salsa with my friends.', isCorrect: true },
        { id: 'o2', text: 'It is ten dollars.', isCorrect: false },
        { id: 'o3', text: 'I leave home at eight.', isCorrect: false }
      ],
      explanation: 'Directly answers the hobby question with enthusiasm.'
    },
    {
      id: 'ex_l14_p12',
      lessonId: 'lesson_a1_1_14',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Which verb expresses the strongest negative feeling (0%)?',
      sourceSentence: 'Preference degrees:',
      options: [
        { id: 'o1', text: 'hate', isCorrect: true },
        { id: 'o2', text: 'like', isCorrect: false },
        { id: 'o3', text: 'prefer', isCorrect: false }
      ],
      explanation: '"Hate" represents intense dislike.'
    },
    {
      id: 'ex_l14_p13',
      lessonId: 'lesson_a1_1_14',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Choose the correct preposition with "listen":',
      sourceSentence: 'I listen ___ podcasts every morning.',
      options: [
        { id: 'o1', text: 'to', isCorrect: true },
        { id: 'o2', text: 'at', isCorrect: false },
        { id: 'o3', text: 'on', isCorrect: false }
      ],
      explanation: '"Listen" takes preposition "to".'
    },
    {
      id: 'ex_l14_p14',
      lessonId: 'lesson_a1_1_14',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Construct the sentence:',
      targetSentence: 'We like playing board games on rainy days',
      wordBank: ['We', 'like', 'playing', 'board', 'games', 'on', 'rainy', 'days', 'plays']
    },
    {
      id: 'ex_l14_p15',
      lessonId: 'lesson_a1_1_14',
      stage: 12,
      type: 'speaking',
      prompt: 'Say this preference into your microphone:',
      targetSentence: 'My favorite hobby is reading history books.',
      audioText: 'My favorite hobby is reading history books.'
    }
  ],

  // SECTION 16: Review Exercises
  reviewExercises: [
    {
      id: 'ex_l14_rev1',
      lessonId: 'lesson_a1_1_14',
      stage: 16,
      type: 'multiple_choice',
      prompt: 'Which sentence is grammatically correct?',
      sourceSentence: 'Preference structure:',
      options: [
        { id: 'o1', text: 'He enjoys cooking dinner for his family.', isCorrect: true },
        { id: 'o2', text: 'He enjoys cook dinner for his family.', isCorrect: false },
        { id: 'o3', text: 'He is enjoy cooking dinner for his family.', isCorrect: false }
      ],
      explanation: '"enjoys" takes the gerund "cooking".'
    },
    {
      id: 'ex_l14_rev2',
      lessonId: 'lesson_a1_1_14',
      stage: 16,
      type: 'fill_blank',
      prompt: 'Fill in with the correct -ing form:',
      sourceSentence: 'I hate ___ in long queues at the supermarket.',
      options: [
        { id: 'o1', text: 'waiting', isCorrect: true },
        { id: 'o2', text: 'wait', isCorrect: false },
        { id: 'o3', text: 'waits', isCorrect: false }
      ],
      explanation: 'Use "waiting" after "hate".'
    },
    {
      id: 'ex_l14_rev3',
      lessonId: 'lesson_a1_1_14',
      stage: 16,
      type: 'word_ordering',
      prompt: 'Assemble the sentence correctly:',
      targetSentence: 'They love swimming in the lake every summer',
      wordBank: ['They', 'love', 'swimming', 'in', 'the', 'lake', 'every', 'summer', 'swim']
    },
    {
      id: 'ex_l14_rev4',
      lessonId: 'lesson_a1_1_14',
      stage: 16,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'मुझे अकेले रहने से ज्यादा दोस्तों के साथ रहना पसंद है।',
      sourceTranslations: { hi: 'मुझे अकेले रहने से ज्यादा दोस्तों के साथ रहना पसंद है।', es: 'Prefiero estar con amigos a estar solo.' },
      targetSentence: 'I prefer being with friends to being alone',
      wordBank: ['I', 'prefer', 'being', 'with', 'friends', 'to', 'being', 'alone', 'than']
    }
  ],

  // SECTION 17: Assessment Exercises (10 items)
  assessmentExercises: [
    {
      id: 'ex_l14_a1',
      lessonId: 'lesson_a1_1_14',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Choose the correct form: "She likes ___ photos of flowers."',
      sourceSentence: 'Gerund usage:',
      options: [
        { id: 'o1', text: 'taking', isCorrect: true },
        { id: 'o2', text: 'take', isCorrect: false },
        { id: 'o3', text: 'takes', isCorrect: false },
        { id: 'o4', text: 'took', isCorrect: false }
      ],
      explanation: 'After "likes", use the gerund "taking".'
    },
    {
      id: 'ex_l14_a2',
      lessonId: 'lesson_a1_1_14',
      stage: 17,
      type: 'fill_blank',
      prompt: 'Complete the comparison of preference:',
      sourceSentence: 'We prefer traveling by train ___ driving a car.',
      options: [
        { id: 'o1', text: 'to', isCorrect: true },
        { id: 'o2', text: 'than', isCorrect: false },
        { id: 'o3', text: 'from', isCorrect: false },
        { id: 'o4', text: 'with', isCorrect: false }
      ],
      explanation: 'Use "prefer ... to ...".'
    },
    {
      id: 'ex_l14_a3',
      lessonId: 'lesson_a1_1_14',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Build the sentence:',
      targetSentence: 'He hates waking up early on Monday morning',
      wordBank: ['He', 'hates', 'waking', 'up', 'early', 'on', 'Monday', 'morning', 'wake']
    },
    {
      id: 'ex_l14_a4',
      lessonId: 'lesson_a1_1_14',
      stage: 17,
      type: 'error_correction',
      prompt: 'Correct the preposition error in the preference sentence:',
      sourceSentence: 'I prefer tea than coffee.',
      options: [
        { id: 'o1', text: 'I prefer tea to coffee.', isCorrect: true },
        { id: 'o2', text: 'I prefer tea from coffee.', isCorrect: false },
        { id: 'o3', text: 'I prefer tea with coffee.', isCorrect: false }
      ],
      explanation: 'Use "prefer X to Y".'
    },
    {
      id: 'ex_l14_a5',
      lessonId: 'lesson_a1_1_14',
      stage: 17,
      type: 'listening',
      prompt: 'Listen and select what the speaker says:',
      audioText: 'I love listening to music in my free time',
      options: [
        { id: 'o1', text: 'I love listening to music in my free time', isCorrect: true },
        { id: 'o2', text: 'I like listening to news in my free time', isCorrect: false },
        { id: 'o3', text: 'I enjoy playing the guitar in the morning', isCorrect: false }
      ],
      explanation: 'The speaker states "I love listening to music in my free time".'
    },
    {
      id: 'ex_l14_a6',
      lessonId: 'lesson_a1_1_14',
      stage: 17,
      type: 'listen_and_type',
      prompt: 'Listen and transcribe the sentence:',
      audioText: 'She enjoys swimming and playing tennis',
      targetSentence: 'She enjoys swimming and playing tennis'
    },
    {
      id: 'ex_l14_a7',
      lessonId: 'lesson_a1_1_14',
      stage: 17,
      type: 'dialogue_completion',
      prompt: 'Select the best response:',
      sourceSentence: 'Classmate: "What is your favorite hobby?" -> You: "___"',
      options: [
        { id: 'o1', text: 'My favorite hobby is reading classic books.', isCorrect: true },
        { id: 'o2', text: 'I am from Italy.', isCorrect: false },
        { id: 'o3', text: 'It is ten o\'clock.', isCorrect: false }
      ],
      explanation: 'Directly states favorite hobby.'
    },
    {
      id: 'ex_l14_a8',
      lessonId: 'lesson_a1_1_14',
      stage: 17,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'हम सप्ताहांत पर दोस्तों के साथ बोर्ड गेम खेलना पसंद करते हैं।',
      sourceTranslations: { hi: 'हम सप्ताहांत पर दोस्तों के साथ बोर्ड गेम खेलना पसंद करते हैं।', es: 'Nos gusta jugar a juegos de mesa con amigos el fin de semana.' },
      targetSentence: 'We like playing board games with friends on the weekend',
      wordBank: ['We', 'like', 'playing', 'board', 'games', 'with', 'friends', 'on', 'the', 'weekend', 'play']
    },
    {
      id: 'ex_l14_a9',
      lessonId: 'lesson_a1_1_14',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Which phrase is correctly formed with the preposition "to"?',
      sourceSentence: 'Collocation check:',
      options: [
        { id: 'o1', text: 'listen to music', isCorrect: true },
        { id: 'o2', text: 'hear to music', isCorrect: false },
        { id: 'o3', text: 'watch to movies', isCorrect: false },
        { id: 'o4', text: 'read to books', isCorrect: false }
      ],
      explanation: '"listen to music" is the standard verb-preposition pair.'
    },
    {
      id: 'ex_l14_a10',
      lessonId: 'lesson_a1_1_14',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the final question:',
      targetSentence: 'Do you prefer cooking at home or eating in restaurants',
      wordBank: ['Do', 'you', 'prefer', 'cooking', 'at', 'home', 'or', 'eating', 'in', 'restaurants', 'does']
    }
  ]
};
