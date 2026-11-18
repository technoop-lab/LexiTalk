import { DetailedLessonData } from '../../types';

export const LESSON_A1_2_25_DATA: DetailedLessonData = {
  id: 'lesson_a1_2_25',
  unitId: 'unit_a1_2',
  title: 'Hobbies, Free Time & Expressing Likes & Dislikes',
  cefr: 'A1',
  icon: '🎨',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Leisure Activities, Sports and Expressing Preferences with "like / love / hate + -ing"',
    description: 'Master free-time vocabulary (reading, cooking, swimming, photography, playing football/guitar, gardening, gaming, watching movies), expressing personal preferences using gerund structures ("I like swimming", "She loves reading", "They hate waiting"), asking about hobbies ("What do you like doing in your free time?"), and discussing weekend leisure pursuits.',
    descriptionsByLang: {
      hi: 'शौक और खाली समय की गतिविधियों (reading, cooking, playing music, swimming, painting) के लिए शब्दावली सीखें। "like / love / hate + -ing" (जैसे "I love swimming", "I hate waking up early") का प्रयोग करके अपनी पसंद और नापसंद व्यक्त करना और "What do you like doing in your free time?" जैसे प्रश्न पूछना सीखें।',
      es: 'Aprende vocabulario de pasatiempos y tiempo libre (leer, cocinar, nadar, tocar música, pintar) y cómo expresar gustos y preferencias usando "like / love / hate + -ing" (I like swimming, I hate waiting) y preguntar "¿Qué te gusta hacer en tu tiempo libre?".',
      fr: 'Apprenez le vocabulaire des loisirs et exprimez vos goûts avec "like / love / hate + -ing".',
      de: 'Lernen Sie Freizeitaktivitäten, Hobbys und das Ausdrücken von Vorlieben mit "like / love / hate + -ing".',
      pt: 'Aprenda vocabulário de passatempos e como expressar gostos e preferências com "like / love / hate + -ing".',
      zh: '掌握业余爱好与休闲活动词汇（阅读、烹饪、游泳、弹吉他、绘画等），使用 "like / love / hate + -ing" 结构表达喜好与厌恶，以及询问他人爱好的句型。',
      ar: 'تعلم مفردات الهوايات وأوقات الفراغ والتعبير عن الإعجاب وعدم الإعجاب باستخدام like / love / hate + -ing.',
      ja: '趣味や自由時間の活動に関する語彙と、"like / love / hate + -ing" を用いた好みの表現方法を学びます。',
      ru: 'Изучите хобби, занятия в свободное время и выражение предпочтений с помощью "like / love / hate + -ing".'
    },
    canDoStatements: [
      'Name 15+ common hobbies, sports, and leisure pursuits in English',
      'Express personal likes, loves, and dislikes using gerund verbs: "I love cooking Italian food", "I don\'t like jogging"',
      'Ask others about their hobbies: "What do you like doing at the weekend?", "Do you play any musical instruments?"',
      'Explain why you enjoy an activity: "I like painting because it is relaxing and creative"',
      'Discuss how often you practice hobbies: "I play tennis twice a week with my brother"'
    ],
    canDoByLang: {
      hi: [
        'शौक और खेलों के नाम बताना: reading, swimming, playing guitar',
        'पसंद और नापसंद व्यक्त करना: "I love listening to music", "I don\'t like cooking"',
        'दूसरों से उनकी रुचियों के बारे में पूछना: "What are your hobbies?"'
      ],
      es: [
        'Nombrar pasatiempos y deportes',
        'Expresar gustos y disgustos: "I love reading", "I hate cleaning"',
        'Preguntar a otros sobre su tiempo libre'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (25 items)
  vocabulary: [
    {
      id: 'v_u02_l25_hobby',
      word: 'hobby / hobbies',
      phonetic: '/ˈhɑː.bi/ /ˈhɑː.biz/',
      meaning: 'An activity done regularly in one\'s leisure time for pleasure',
      translationsByLang: { hi: 'शौक / रुचियां', es: 'pasatiempo / afición', fr: 'passe-temps / loisir', de: 'Hobby / Hobbys', pt: 'passatempo / hobby', zh: '爱好 / 业余爱好', ar: 'هواية / هوايات', ja: '趣味', ru: 'хобби / увлечение' },
      exampleSentence: 'My favorite hobby is landscape photography.',
      exampleTranslationByLang: { hi: 'मेरा पसंदीदा शौक प्राकृतिक फोटोग्राफी है।', es: 'Mi pasatiempo favorito es la fotografía de paisajes.' },
      audioText: 'hobby and hobbies',
      audioId: 'en_a1_u02_l25_v_hobby',
      slowAudioId: 'en_a1_u02_l25_v_hobby_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎨',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_reading',
      word: 'reading',
      phonetic: '/ˈriː.dɪŋ/',
      meaning: 'The action or skill of reading written or printed material',
      translationsByLang: { hi: 'पढ़ना / पठन', es: 'lectura / leer', fr: 'lecture / lire', de: 'Lesen', pt: 'leitura / ler', zh: '阅读 / 读书', ar: 'القراءة', ja: '読書', ru: 'чтение' },
      exampleSentence: 'I enjoy reading novels in the quiet evenings.',
      exampleTranslationByLang: { hi: 'मुझे शांत शामों में उपन्यास पढ़ना अच्छा लगता है।', es: 'Disfruto leyendo novelas en las tardes tranquilas.' },
      audioText: 'reading',
      audioId: 'en_a1_u02_l25_v_reading',
      slowAudioId: 'en_a1_u02_l25_v_reading_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📚',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_cooking',
      word: 'cooking',
      phonetic: '/ˈkʊk.ɪŋ/',
      meaning: 'The practice or skill of preparing food by combining, mixing, and heating ingredients',
      translationsByLang: { hi: 'खाना पकाना / कुकिंग', es: 'cocinar / cocina', fr: 'cuisine / cuisiner', de: 'Kochen', pt: 'cozinhar / culinária', zh: '烹饪 / 做饭', ar: 'الطبخ / الطهي', ja: '料理 / 自炊', ru: 'кулинария / готовка' },
      exampleSentence: 'He loves cooking spicy curries for his friends.',
      exampleTranslationByLang: { hi: 'वह अपने दोस्तों के लिए मसालेदार करी पकाना पसंद करता है।', es: 'Le encanta cocinar curry picante para sus amigos.' },
      audioText: 'cooking',
      audioId: 'en_a1_u02_l25_v_cooking',
      slowAudioId: 'en_a1_u02_l25_v_cooking_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍳',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_swimming',
      word: 'swimming',
      phonetic: '/ˈswɪm.ɪŋ/',
      meaning: 'The sport or activity of propelling oneself through water using the limbs',
      translationsByLang: { hi: 'तैरना / तैराकी', es: 'natación / nadar', fr: 'natation / nager', de: 'Schwimmen', pt: 'natação / nadar', zh: '游泳', ar: 'السباحة', ja: '水泳 / 泳ぐこと', ru: 'плавание' },
      exampleSentence: 'Swimming is great exercise for the whole body.',
      exampleTranslationByLang: { hi: 'तैराकी पूरे शरीर के लिए एक बेहतरीन व्यायाम है।', es: 'Nadar es un gran ejercicio para todo el cuerpo.' },
      audioText: 'swimming',
      audioId: 'en_a1_u02_l25_v_swimming',
      slowAudioId: 'en_a1_u02_l25_v_swimming_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏊',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_gaming',
      word: 'gaming / playing video games',
      phonetic: '/ˈɡeɪ.mɪŋ/',
      meaning: 'The action or practice of playing video games',
      translationsByLang: { hi: 'वीडियो गेम खेलना / गेमिंग', es: 'jugar videojuegos / gaming', fr: 'jeux vidéo / jouer aux jeux vidéo', de: 'Videospiele spielen / Gaming', pt: 'jogar videogame / gaming', zh: '玩电子游戏 / 游戏', ar: 'ألعاب الفيديو', ja: 'ゲームをすること', ru: 'компьютерные игры / гейминг' },
      exampleSentence: 'My younger brother spends Sunday afternoons gaming online with his friends.',
      exampleTranslationByLang: { hi: 'मेरा छोटा भाई रविवार दोपहर अपने दोस्तों के साथ ऑनलाइन गेम खेलने में बिताता है।', es: 'Mi hermano menor pasa los domingos por la tarde jugando videojuegos en línea con sus amigos.' },
      audioText: 'gaming and playing video games',
      audioId: 'en_a1_u02_l25_v_gaming',
      slowAudioId: 'en_a1_u02_l25_v_gaming_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎮',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_gardening',
      word: 'gardening',
      phonetic: '/ˈɡɑːr.dən.ɪŋ/',
      meaning: 'The activity of tending and cultivating a garden, especially as a pastime',
      translationsByLang: { hi: 'बागवानी', es: 'jardinería', fr: 'jardinage', de: 'Gartenarbeit / Gärtnern', pt: 'jardinagem', zh: '园艺 / 种花种草', ar: 'البستنة / العناية بالحديقة', ja: 'ガーデニング / 園芸', ru: 'садоводство' },
      exampleSentence: 'My grandmother finds gardening very peaceful.',
      exampleTranslationByLang: { hi: 'मेरी दादी को बागवानी बहुत शांतिपूर्ण लगती है।', es: 'Mi abuela encuentra la jardinería muy relajante.' },
      audioText: 'gardening',
      audioId: 'en_a1_u02_l25_v_gardening',
      slowAudioId: 'en_a1_u02_l25_v_gardening_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌱',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_photography',
      word: 'photography',
      phonetic: '/fəˈtɑː.ɡrə.fi/',
      meaning: 'The art or practice of taking and processing photographs',
      translationsByLang: { hi: 'फोटोग्राफी / तस्वीरें खींचना', es: 'fotografía', fr: 'photographie', de: 'Fotografie', pt: 'fotografia', zh: '摄影', ar: 'التصوير الفوتوغرافي', ja: '写真撮影 / フォトグラフィー', ru: 'фотография' },
      exampleSentence: 'She bought a new digital camera to learn photography.',
      exampleTranslationByLang: { hi: 'उसने फोटोग्राफी सीखने के लिए एक नया डिजिटल कैमरा खरीदा।', es: 'Compró una nueva cámara digital para aprender fotografía.' },
      audioText: 'photography',
      audioId: 'en_a1_u02_l25_v_photography',
      slowAudioId: 'en_a1_u02_l25_v_photography_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📷',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_painting_drawing',
      word: 'painting / drawing',
      phonetic: '/ˈpeɪn.tɪŋ/ /ˈdrɑː.ɪŋ/',
      meaning: 'The process or art of using paint or pencil to produce pictures',
      translationsByLang: { hi: 'चित्रकारी / पेंटिंग / स्केच बनाना', es: 'pintar / dibujar', fr: 'peinture / dessin', de: 'Malen / Zeichnen', pt: 'pintura / desenho', zh: '画画 / 绘画 / 素描', ar: 'الرسم / التلوين', ja: '絵画 / 絵を描くこと', ru: 'живопись / рисование' },
      exampleSentence: 'Painting with watercolors helps me express my creativity.',
      exampleTranslationByLang: { hi: 'वॉटरकलर से पेंटिंग करने से मुझे अपनी रचनात्मकता व्यक्त करने में मदद मिलती है।', es: 'Pintar con acuarelas me ayuda a expresar mi creatividad.' },
      audioText: 'painting and drawing',
      audioId: 'en_a1_u02_l25_v_painting',
      slowAudioId: 'en_a1_u02_l25_v_painting_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🖌️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_playing_guitar',
      word: 'playing guitar / piano',
      phonetic: '/ˈpleɪ.ɪŋ ɡɪˈtɑːr/ /piˈæn.oʊ/',
      meaning: 'Performing music on a stringed or keyboard instrument',
      translationsByLang: { hi: 'गिटार / पियानो बजाना', es: 'tocar la guitarra / el piano', fr: 'jouer de la guitare / du piano', de: 'Gitarre / Klavier spielen', pt: 'tocar violão / piano', zh: '弹吉他 / 弹钢琴', ar: 'العزف على الغيتار / البيانو', ja: 'ギター / ピアノを弾くこと', ru: 'игра на гитаре / пианино' },
      exampleSentence: 'He practices playing the acoustic guitar every evening.',
      exampleTranslationByLang: { hi: 'वह हर शाम ध्वनिक गिटार बजाने का अभ्यास करता है।', es: 'Él practica tocar la guitarra acústica todas las tardes.' },
      audioText: 'playing guitar and piano',
      audioId: 'en_a1_u02_l25_v_guitar',
      slowAudioId: 'en_a1_u02_l25_v_guitar_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎸',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_listening_music',
      word: 'listening to music',
      phonetic: '/ˈlɪs.ən.ɪŋ tuː ˈmjuː.zɪk/',
      meaning: 'Attending to musical sounds for leisure or enjoyment',
      translationsByLang: { hi: 'संगीत सुनना', es: 'escuchar música', fr: 'écouter de la musique', de: 'Musik hören', pt: 'ouvir música', zh: '听音乐', ar: 'الاستماع إلى الموسيقى', ja: '音楽を聴くこと', ru: 'прослушивание музыки' },
      exampleSentence: 'I wear headphones and like listening to classical music while studying.',
      exampleTranslationByLang: { hi: 'मैं हेडफ़ोन पहनता हूँ और पढ़ते समय शास्त्रीय संगीत सुनना पसंद करता हूँ।', es: 'Uso auriculares y me gusta escuchar música clásica mientras estudio.' },
      audioText: 'listening to music',
      audioId: 'en_a1_u02_l25_v_music',
      slowAudioId: 'en_a1_u02_l25_v_music_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎧',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_watching_movies',
      word: 'watching movies / films',
      phonetic: '/ˈwɑː.tʃɪŋ ˈmuː.viz/',
      meaning: 'Viewing films for entertainment at the cinema or streaming at home',
      translationsByLang: { hi: 'फिल्में देखना', es: 'ver películas', fr: 'regarder des films', de: 'Filme schauen', pt: 'assistir a filmes', zh: '看电影', ar: 'مشاهدة الأفلام', ja: '映画鑑賞', ru: 'просмотр фильмов' },
      exampleSentence: 'We love watching sci-fi movies on Netflix on Friday nights.',
      exampleTranslationByLang: { hi: 'हम शुक्रवार की रात नेटफ्लिक्स पर विज्ञान-कथा फिल्में देखना पसंद करते हैं।', es: 'Nos encanta ver películas de ciencia ficción en Netflix los viernes por la noche.' },
      audioText: 'watching movies and films',
      audioId: 'en_a1_u02_l25_v_movies',
      slowAudioId: 'en_a1_u02_l25_v_movies_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎬',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_playing_football',
      word: 'playing football / soccer',
      phonetic: '/ˈpleɪ.ɪŋ ˈfʊt.bɑːl/',
      meaning: 'Participating in a team game played with a spherical ball',
      translationsByLang: { hi: 'फुटबॉल खेलना', es: 'jugar al fútbol', fr: 'jouer au football', de: 'Fußball spielen', pt: 'jogar futebol', zh: '踢足球', ar: 'لعب كرة القدم', ja: 'サッカーをすること', ru: 'игра в футбол' },
      exampleSentence: 'They meet at the sports pitch every Saturday for playing football.',
      exampleTranslationByLang: { hi: 'वे फुटबॉल खेलने के लिए हर शनिवार खेल के मैदान पर मिलते हैं।', es: 'Se reúnen en la cancha de deportes todos los sábados para jugar al fútbol.' },
      audioText: 'playing football and soccer',
      audioId: 'en_a1_u02_l25_v_football',
      slowAudioId: 'en_a1_u02_l25_v_football_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⚽',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_running_jogging',
      word: 'running / jogging',
      phonetic: '/ˈrʌn.ɪŋ/ /ˈdʒɑː.ɡɪŋ/',
      meaning: 'Moving at a speed faster than walking as a sport or physical exercise',
      translationsByLang: { hi: 'दौड़ना / जॉगिंग करना', es: 'correr / hacer footing', fr: 'courir / faire du jogging', de: 'Laufen / Joggen', pt: 'correr / fazer cooper', zh: '跑步 / 慢跑', ar: 'الجري / الركض', ja: 'ランニング / ジョギング', ru: 'бег / пробежка' },
      exampleSentence: 'I go jogging in the park before breakfast.',
      exampleTranslationByLang: { hi: 'मैं नाश्ते से पहले पार्क में जॉगिंग करने जाता हूँ।', es: 'Salgo a correr en el parque antes del desayuno.' },
      audioText: 'running and jogging',
      audioId: 'en_a1_u02_l25_v_running',
      slowAudioId: 'en_a1_u02_l25_v_running_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏃',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_hiking',
      word: 'hiking',
      phonetic: '/ˈhaɪ.kɪŋ/',
      meaning: 'The activity of going for long, brisk walks in the country or mountain trails',
      translationsByLang: { hi: 'हाइकिंग / पहाड़ों में पैदल यात्रा', es: 'senderismo / excursión', fr: 'randonnée', de: 'Wandern', pt: 'caminhada na natureza / trilha', zh: '徒步旅行 / 远足', ar: 'المشي الجبلي / التنزه سيراً', ja: 'ハイキング / 登山', ru: 'хайкинг / пешие походы' },
      exampleSentence: 'We love hiking in the national park on sunny weekends.',
      exampleTranslationByLang: { hi: 'हमें धूप वाले सप्ताहांत में राष्ट्रीय उद्यान में हाइकिंग करना बहुत पसंद है।', es: 'Nos encanta hacer senderismo en el parque nacional los fines de semana soleados.' },
      audioText: 'hiking',
      audioId: 'en_a1_u02_l25_v_hiking',
      slowAudioId: 'en_a1_u02_l25_v_hiking_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥾',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_baking',
      word: 'baking',
      phonetic: '/ˈbeɪ.kɪŋ/',
      meaning: 'The activity of cooking bread, cakes, or pastries in an oven',
      translationsByLang: { hi: 'बेकिंग / केक और पेस्ट्री बनाना', es: 'hornear / repostería', fr: 'faire de la pâtisserie / cuisiner au four', de: 'Backen', pt: 'fazer bolos / confeitaria', zh: '烘焙 / 烤面包蛋糕', ar: 'الخبز / صنع الكعك والمعجنات', ja: 'お菓子作り / パン作り', ru: 'выпечка' },
      exampleSentence: 'She loves baking chocolate chip cookies on rainy days.',
      exampleTranslationByLang: { hi: 'उसे बरसात के दिनों में चॉकलेट चिप कुकीज बेक करना बहुत पसंद है।', es: 'Le encanta hornear galletas con chispas de chocolate en días lluviosos.' },
      audioText: 'baking',
      audioId: 'en_a1_u02_l25_v_baking',
      slowAudioId: 'en_a1_u02_l25_v_baking_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧁',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_traveling',
      word: 'traveling',
      phonetic: '/ˈtræv.əl.ɪŋ/',
      meaning: 'Going from one place to another, especially over a distance of some length to explore new cultures',
      translationsByLang: { hi: 'यात्रा करना / घूमना-फिरना', es: 'viajar', fr: 'voyager', de: 'Reisen', pt: 'viajar', zh: '旅行 / 旅游', ar: 'السفر والترحال', ja: '旅行すること', ru: 'путешествия' },
      exampleSentence: 'Traveling to new foreign countries expands your horizons.',
      exampleTranslationByLang: { hi: 'नए विदेशी देशों की यात्रा करने से आपका दृष्टिकोण विस्तृत होता है।', es: 'Viajar a nuevos países extranjeros amplía tus horizontes.' },
      audioText: 'traveling',
      audioId: 'en_a1_u02_l25_v_traveling',
      slowAudioId: 'en_a1_u02_l25_v_traveling_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '✈️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_dancing',
      word: 'dancing',
      phonetic: '/ˈdæn.sɪŋ/',
      meaning: 'Moving rhythmically to music, typically following a set sequence of steps',
      translationsByLang: { hi: 'नाचना / नृत्य', es: 'bailar / danza', fr: 'danser / danse', de: 'Tanzen', pt: 'dançar / dança', zh: '跳舞 / 舞蹈', ar: 'الرقص', ja: 'ダンス / 踊ること', ru: 'танцы' },
      exampleSentence: 'They take salsa dancing lessons every Tuesday evening.',
      exampleTranslationByLang: { hi: 'वे हर मंगलवार शाम सालसा डांस की कक्षाएं लेते हैं।', es: 'Toman clases de baile de salsa todos los martes por la noche.' },
      audioText: 'dancing',
      audioId: 'en_a1_u02_l25_v_dancing',
      slowAudioId: 'en_a1_u02_l25_v_dancing_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💃',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_free_time',
      word: 'free time / leisure time',
      phonetic: '/ˌfriː ˈtaɪm/',
      meaning: 'Time available for hobbies and recreation when of work and duties',
      translationsByLang: { hi: 'खाली समय / फुर्सत का समय', es: 'tiempo libre / ocio', fr: 'temps libre / loisirs', de: 'Freizeit', pt: 'tempo livre / lazer', zh: '业余时间 / 空闲时间', ar: 'وقت الفراغ', ja: '自由時間 / 暇な時間', ru: 'свободное время' },
      exampleSentence: 'What do you like to do in your free time?',
      exampleTranslationByLang: { hi: 'आप अपने खाली समय में क्या करना पसंद करते हैं?', es: '¿Qué te gusta hacer en tu tiempo libre?' },
      audioText: 'free time and leisure time',
      audioId: 'en_a1_u02_l25_v_freetime',
      slowAudioId: 'en_a1_u02_l25_v_freetime_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⏳',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_relaxing',
      word: 'relaxing',
      phonetic: '/rɪˈlæk.sɪŋ/',
      meaning: 'Resting from work or engaging in an enjoyable activity that reduces stress',
      translationsByLang: { hi: 'आरामदेह / तनावमुक्त होना', es: 'relajante / relajarse', fr: 'relaxant / se détendre', de: 'entspannend / Entspannung', pt: 'relaxante / relaxar', zh: '令人放松的 / 休闲', ar: 'مريح / الاسترخاء', ja: 'リラックスできる / のんびりすること', ru: 'расслабляющий / отдых' },
      exampleSentence: 'Taking a hot bath is very relaxing after a long work day.',
      exampleTranslationByLang: { hi: 'लंबे काम के दिन के बाद गर्म पानी से नहाना बहुत आरामदायक होता है।', es: 'Tomar un baño caliente es muy relajante después de un largo día de trabajo.' },
      audioText: 'relaxing',
      audioId: 'en_a1_u02_l25_v_relaxing',
      slowAudioId: 'en_a1_u02_l25_v_relaxing_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧘',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_exciting',
      word: 'exciting',
      phonetic: '/ɪkˈsaɪ.tɪŋ/',
      meaning: 'Causing great enthusiasm and eagerness; thrilling',
      translationsByLang: { hi: 'रोमांचक / उत्साहवर्धक', es: 'emocionante / apasionante', fr: 'passionnant / excitant', de: 'aufregend / spannend', pt: 'emocionante / empolgante', zh: '令人兴奋的 / 刺激的', ar: 'مثير / مشوق', ja: 'ワクワクする / 刺激的な', ru: 'захватывающий / волнующий' },
      exampleSentence: 'Rock climbing is an exciting outdoor sport.',
      exampleTranslationByLang: { hi: 'रॉक क्लाइम्बिंग एक रोमांचक आउटडोर खेल है।', es: 'La escalada en roca es un deporte al aire libre muy emocionante.' },
      audioText: 'exciting',
      audioId: 'en_a1_u02_l25_v_exciting',
      slowAudioId: 'en_a1_u02_l25_v_exciting_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🤩',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_boring',
      word: 'boring',
      phonetic: '/ˈbɔː.rɪŋ/',
      meaning: 'Not interesting; tedious and unexciting',
      translationsByLang: { hi: 'उबाऊ / नीरस', es: 'aburrido', fr: 'ennuyeux', de: 'langweilig', pt: 'chato / entediante', zh: '无聊的 / 乏味的', ar: 'ممل', ja: '退屈な / つまらない', ru: 'скучный' },
      exampleSentence: 'Sitting in traffic is so boring.',
      exampleTranslationByLang: { hi: 'ट्रैफ़िक में बैठे रहना बहुत उबाऊ है।', es: 'Estar atrapado en el tráfico es muy aburrido.' },
      audioText: 'boring',
      audioId: 'en_a1_u02_l25_v_boring',
      slowAudioId: 'en_a1_u02_l25_v_boring_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥱',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_favorite',
      word: 'favorite (favourite)',
      phonetic: '/ˈfeɪ.vər.ɪt/',
      meaning: 'Preferred before all others of the same kind',
      translationsByLang: { hi: 'पसंदीदा / मनपसंद', es: 'favorito / predilecto', fr: 'favori / préféré', de: 'Lieblings-', pt: 'favorito / preferido', zh: '最喜欢的', ar: 'مفضل', ja: 'お気に入りの / 好きな', ru: 'любимый' },
      exampleSentence: 'Tennis is my favorite weekend sport.',
      exampleTranslationByLang: { hi: 'टेनिस मेरा पसंदीदा सप्ताहांत खेल है।', es: 'El tenis es mi deporte de fin de semana favorito.' },
      audioText: 'favorite and favourite',
      audioId: 'en_a1_u02_l25_v_favorite',
      slowAudioId: 'en_a1_u02_l25_v_favorite_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⭐',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_gym_fitness',
      word: 'working out / gym',
      phonetic: '/ˈwɝːk.ɪŋ aʊt/ /dʒɪm/',
      meaning: 'Engaging in physical exercise to improve health and strength',
      translationsByLang: { hi: 'कसरत करना / जिम जाना', es: 'hacer ejercicio / entrenar / gimnasio', fr: 's\'entraîner / salle de sport', de: 'trainieren / Fitnessstudio', pt: 'malhar / fazer academia', zh: '健身 / 在健身房锻炼', ar: 'ممارسة الرياضة / النادي الرياضي', ja: '筋トレをする / ジムに行く', ru: 'тренировка / спортзал' },
      exampleSentence: 'I go to the gym for working out three days a week.',
      exampleTranslationByLang: { hi: 'मैं सप्ताह में तीन दिन कसरत करने के लिए जिम जाता हूँ।', es: 'Voy al gimnasio a entrenar tres días a la semana.' },
      audioText: 'working out and gym',
      audioId: 'en_a1_u02_l25_v_workout',
      slowAudioId: 'en_a1_u02_l25_v_workout_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏋️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_crafts_knitting',
      word: 'crafts / knitting',
      phonetic: '/kræfts/ /ˈnɪt.ɪŋ/',
      meaning: 'An activity involving skill in making things manually with hands or yarn',
      translationsByLang: { hi: 'हस्तशिल्प / बुनाई करना', es: 'manualidades / tejer', fr: 'bricolage / tricot', de: 'Basteln / Stricken', pt: 'artesanato / tricô', zh: '手工艺 / 编织', ar: 'الحرف اليدوية / الحياكة', ja: '手芸 / 編み物', ru: 'рукоделие / вязание' },
      exampleSentence: 'Knitting wool sweaters is a cozy winter pastime.',
      exampleTranslationByLang: { hi: 'ऊनी स्वेटर बुनना सर्दियों का एक आरामदायक शगल है।', es: 'Tejer suéteres de lana es un pasatiempo invernal muy acogedor.' },
      audioText: 'crafts and knitting',
      audioId: 'en_a1_u02_l25_v_crafts',
      slowAudioId: 'en_a1_u02_l25_v_crafts_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧶',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l25_camping',
      word: 'camping',
      phonetic: '/ˈkæm.pɪŋ/',
      meaning: 'The activity of spending a vacation living in a tent outdoors',
      translationsByLang: { hi: 'तंबू में रहना / कैंपिंग', es: 'acampar / campamento', fr: 'faire du camping', de: 'Campen / Zelten', pt: 'acampar / camping', zh: '露营 / 野营', ar: 'التخييم في الهواء الطلق', ja: 'キャンプ', ru: 'кемпинг / отдых в палатках' },
      exampleSentence: 'We pitch our tent and enjoy camping under the starry sky.',
      exampleTranslationByLang: { hi: 'हम अपना तंबू लगाते हैं और तारों भरे आसमान के नीचे कैंपिंग का आनंद लेते हैं।', es: 'Montamos nuestra tienda y disfrutamos acampando bajo el cielo estrellado.' },
      audioText: 'camping',
      audioId: 'en_a1_u02_l25_v_camping',
      slowAudioId: 'en_a1_u02_l25_v_camping_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⛺',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks & Expressions (10 items)
  expressions: [
    {
      id: 'exp_u02_l25_01',
      phrase: 'What do you like doing in your free time?',
      meaning: 'Polite and natural opening question to ask about hobbies and pastimes',
      translationsByLang: {
        hi: 'आप अपने खाली समय में क्या करना पसंद करते हैं?',
        es: '¿Qué te gusta hacer en tu tiempo libre?',
        fr: 'Qu\'aimez-vous faire pendant votre temps libre ?',
        de: 'Was machst du gerne in deiner Freizeit?',
        pt: 'O que você gosta de fazer no seu tempo livre?',
        zh: '你业余时间喜欢做什么？',
        ar: 'ماذا تحب أن تفعل في وقت فراغك؟',
        ja: '自由時間には何をするのが好きですか？',
        ru: 'Чем вы любите заниматься в свободное время?'
      },
      context: 'Social get-to-know-you conversations.',
      audioId: 'en_a1_u02_l25_exp_01'
    },
    {
      id: 'exp_u02_l25_02',
      phrase: 'I am really into photography.',
      meaning: 'Idiomatic expression meaning "I am very enthusiastic and passionate about photography"',
      translationsByLang: {
        hi: 'मुझे फोटोग्राफी का बहुत शौक है।',
        es: 'Me gusta mucho la fotografía / Me apasiona la fotografía.',
        fr: 'Je suis vraiment passionné par la photographie.',
        de: 'Ich interessiere mich sehr für Fotografie.',
        pt: 'Eu curto muito fotografia.',
        zh: '我非常喜欢摄影 / 我对摄影很着迷。',
        ar: 'أنا شغوف جداً بالتصوير الفوتوغرافي.',
        ja: '私は写真撮影にとてもハマっています。',
        ru: 'Я очень увлекаюсь фотографией.'
      },
      context: 'Stating a deep personal hobby interest.',
      audioId: 'en_a1_u02_l25_exp_02'
    },
    {
      id: 'exp_u02_l25_03',
      phrase: 'I love cooking homemade meals.',
      meaning: 'Expressing strong positive affection for preparing food at home',
      translationsByLang: {
        hi: 'मुझे घर का बना खाना पकाना बहुत पसंद है।',
        es: 'Me encanta cocinar comidas caseras.',
        fr: 'J\'adore cuisiner des plats faits maison.',
        de: 'Ich liebe es, hausgemachte Mahlzeiten zu kochen.',
        pt: 'Eu adoro cozinhar comida caseira.',
        zh: '我喜欢做家常菜。',
        ar: 'أحب طهي الوجبات المنزلية.',
        ja: '手料理を作るのが大好きです。',
        ru: 'Я обожаю готовить домашнюю еду.'
      },
      context: 'Discussing food and cooking habits.',
      audioId: 'en_a1_u02_l25_exp_03'
    },
    {
      id: 'exp_u02_l25_04',
      phrase: 'I don\'t mind doing the dishes.',
      meaning: 'Expressing that an activity is neutral and not annoying ("it is fine for me")',
      translationsByLang: {
        hi: 'मुझे बर्तन धोने में कोई परेशानी नहीं है।',
        es: 'No me molesta lavar los platos.',
        fr: 'Ça ne me dérange pas de faire la vaisselle.',
        de: 'Es macht mir nichts aus, das Geschirr zu spülen.',
        pt: 'Não me importo de lavar a louça.',
        zh: '我不介意洗碗。',
        ar: 'لا أمانع في غسل الأطباق.',
        ja: '皿洗いは別に嫌ではありません。',
        ru: 'Я не против помыть посуду.'
      },
      context: 'Expressing neutral tolerance for household chores.',
      audioId: 'en_a1_u02_l25_exp_04'
    },
    {
      id: 'exp_u02_l25_05',
      phrase: 'I can\'t stand waiting in long lines.',
      meaning: 'Strong expression of intense dislike ("I hate / I detest")',
      translationsByLang: {
        hi: 'मुझे लंबी कतारों में खड़ा रहना बिल्कुल बर्दाश्त नहीं होता।',
        es: 'No soporto hacer largas filas.',
        fr: 'Je ne supporte pas d\'attendre dans les longues files d\'attente.',
        de: 'Ich kann es nicht ausstehen, in langen Schlangen zu warten.',
        pt: 'Não suporto esperar em filas longas.',
        zh: '我受不了排长队。',
        ar: 'لا أطيق الانتظار في طوابير طويلة.',
        ja: '長い列に並んで待つのは耐えられません。',
        ru: 'Терпеть не могу стоять в длинных очередях.'
      },
      context: 'Expressing strong personal pet peeves.',
      audioId: 'en_a1_u02_l25_exp_05'
    },
    {
      id: 'exp_u02_l25_06',
      phrase: 'Are you good at playing chess?',
      meaning: 'Inquiring about someone\'s skill or competency in a specific activity',
      translationsByLang: {
        hi: 'क्या आप शतरंज खेलने में अच्छे हैं?',
        es: '¿Eres bueno jugando al ajedrez?',
        fr: 'Êtes-vous bon aux échecs ?',
        de: 'Bist du gut im Schachspielen?',
        pt: 'Você é bom em jogar xadrez?',
        zh: '你擅长下国际象棋吗？',
        ar: 'هل أنت ماهر في لعب الشطرنج؟',
        ja: 'チェスをするのは得意ですか？',
        ru: 'Вы хорошо играете в шахматы?'
      },
      context: 'Asking about games or abilities.',
      audioId: 'en_a1_u02_l25_exp_06'
    },
    {
      id: 'exp_u02_l25_07',
      phrase: 'It helps me unwind after work.',
      meaning: 'Explaining that a hobby reduces mental strain and promotes calm',
      translationsByLang: {
        hi: 'यह मुझे काम के बाद आराम और तनावमुक्त होने में मदद करता है।',
        es: 'Me ayuda a desconectar después del trabajo.',
        fr: 'Cela m\'aide à décompresser après le travail.',
        de: 'Es hilft mir, nach der Arbeit abzuschalten.',
        pt: 'Isso me ajuda a relaxar depois do trabalho.',
        zh: '这有助于我在下班后放松身心。',
        ar: 'يساعدني ذلك على الاسترخاء بعد يوم العمل.',
        ja: '仕事の後にリラックスするのに役立ちます。',
        ru: 'Это помогает мне расслабиться после работы.'
      },
      context: 'Explaining the psychological benefit of a hobby.',
      audioId: 'en_a1_u02_l25_exp_07'
    },
    {
      id: 'exp_u02_l25_08',
      phrase: 'Do you prefer tea or coffee?',
      meaning: 'Asking someone to choose between two options based on taste',
      translationsByLang: {
        hi: 'आप चाय पसंद करते हैं या कॉफी?',
        es: '¿Prefieres té o café?',
        fr: 'Préférez-vous le thé ou le café ?',
        de: 'Bevorzugst du Tee oder Kaffee?',
        pt: 'Você prefere chá ou café?',
        zh: '你更喜欢茶还是咖啡？',
        ar: 'هل تفضل الشاي أم القهوة؟',
        ja: '紅茶とコーヒーのどちらが好きですか？',
        ru: 'Вы предпочитаете чай или кофе?'
      },
      context: 'Offering refreshments or comparing tastes.',
      audioId: 'en_a1_u02_l25_exp_08'
    },
    {
      id: 'exp_u02_l25_09',
      phrase: 'I play guitar in my spare time.',
      meaning: 'Describing an instrumental hobby practiced during free hours',
      translationsByLang: {
        hi: 'मैं अपने खाली समय में गिटार बजाता हूँ।',
        es: 'Toco la guitarra en mi tiempo libre.',
        fr: 'Je joue de la guitare pendant mon temps libre.',
        de: 'Ich spiele Gitarre in meiner Freizeit.',
        pt: 'Toco violão no meu tempo livre.',
        zh: '我在业余时间弹吉他。',
        ar: 'أعزف على الغيتار في أوقات فراغي.',
        ja: '暇な時間にギターを弾きます。',
        ru: 'В свободное время я играю на гитаре.'
      },
      context: 'Sharing music hobbies.',
      audioId: 'en_a1_u02_l25_exp_09'
    },
    {
      id: 'exp_u02_l25_10',
      phrase: 'That sounds like a lot of fun!',
      meaning: 'Supportive conversational reaction expressing interest in someone\'s activity',
      translationsByLang: {
        hi: 'यह सुनने में बहुत मजेदार लगता है!',
        es: '¡Eso suena muy divertido!',
        fr: 'Ça a l\'air très amusant !',
        de: 'Das klingt nach viel Spaß!',
        pt: 'Isso parece muito divertido!',
        zh: '听起来很有意思！',
        ar: 'يبدو ذلك ممتعاً للغاية!',
        ja: 'とても楽しそうですね！',
        ru: 'Звучит очень весело!'
      },
      context: 'Responding enthusiastically to a friend\'s story.',
      audioId: 'en_a1_u02_l25_exp_10'
    }
  ],

  // SECTION 5: Grammar Rules (3 items)
  grammar: [
    {
      id: 'g_u02_l25_01',
      title: 'Verbs of Preference + Gerund (Verb + -ing)',
      explanation: 'After verbs of liking and disliking (like, love, enjoy, hate, prefer), we commonly use the -ing form (gerund) of the action verb: "I love swimming", "She enjoys reading", "They hate doing housework".',
      rulesByLang: {
        hi: 'पसंद और नापसंद दर्शाने वाली क्रियाओं (like, love, hate, enjoy) के बाद आमतौर पर क्रिया के -ing रूप (gerund) का प्रयोग होता है: जैसे "I like playing tennis", "He hates washing dishes"।',
        es: 'Detrás de verbos de gusto (like, love, enjoy, hate, prefer) usamos el verbo principal con la terminación -ing: "I love cooking", "They hate running".',
        fr: 'Après like, love, hate, enjoy, on utilise la forme en -ing.',
        de: 'Nach Verben der Vorliebe (like, love, hate, enjoy) verwenden wir das Gerundium (Verb + -ing).',
        pt: 'Após verbos de preferência (like, love, hate, enjoy), usamos a forma em -ing do verbo.',
        zh: '在表达喜好的动词（like, love, hate, enjoy, prefer）后，接动名词（动词-ing形式）：如 "I like swimming"、"She loves reading"。',
        ar: 'بعد أفعال التفضيل مثل like و love و hate و enjoy نستخدم صيغة اسم الفاعل (ing).',
        ja: '好みを表す動詞（like, love, hate, enjoy）の後には動名詞（動詞-ing）を続けます。',
        ru: 'После глаголов предпочтения (like, love, hate, enjoy) используется герундий (глагол с -ing).'
      },
      examples: [
        { sentence: 'I enjoy listening to classical music.', translation: 'Disfruto escuchando música clásica.' },
        { sentence: 'She likes reading historical novels.', translation: 'A ella le gusta leer novelas históricas.' },
        { sentence: 'We hate waiting in cold weather.', translation: 'Odiamos esperar con clima frío.' }
      ]
    },
    {
      id: 'g_u02_l25_02',
      title: 'Asking About Preferences: "Do you like + -ing?" & "What do you like doing?"',
      explanation: 'Use auxiliary DO / DOES to form questions about hobbies: "Do you like cooking?", "Does he like playing video games?", "What do you like doing on Sundays?".',
      rulesByLang: {
        hi: 'शौक और पसंद के बारे में पूछने के लिए DO / DOES का प्रयोग करें: "Do you like swimming?", "What do you like doing in your free time?"।',
        es: 'Para preguntar por aficiones usamos DO / DOES: "¿Do you like dancing?", "¿What do you like doing?".',
        fr: 'Pour poser des questions sur les goûts, on utilise "Do you like + -ing?".',
        de: 'Für Fragen verwenden wir "Do you like + -ing?" und "What do you like doing?".',
        pt: 'Para fazer perguntas sobre gostos, use "Do you like + -ing?".',
        zh: '询问爱好时使用助动词 Do/Does："Do you like swimming?"、"What do you like doing in your free time?"。',
        ar: 'لتكوين الأسئلة نستخدم Do you like + ing؟ أو What do you like doing؟',
        ja: '好みを尋ねるときは "Do you like + -ing?" や "What do you like doing?" を使います。',
        ru: 'Для вопросов о хобби используется "Do you like + -ing?" и "What do you like doing?".'
      },
      examples: [
        { sentence: 'Do you like playing basketball?', translation: '¿Te gusta jugar al baloncesto?' },
        { sentence: 'What does your brother like doing on weekends?', translation: '¿Qué le gusta hacer a tu hermano los fines de semana?' },
        { sentence: 'Does she enjoy baking cakes?', translation: '¿Ella disfruta horneando pasteles?' }
      ]
    },
    {
      id: 'g_u02_l25_03',
      title: 'Collocations: "Play" vs "Go" vs "Do" with Sports and Activities',
      explanation: 'Use PLAY for team games and ball sports (play football, play tennis, play chess, play guitar). Use GO for activities ending in -ing (go swimming, go hiking, go jogging, go camping). Use DO for individual martial arts and general exercises (do yoga, do martial arts, do gymnastics).',
      rulesByLang: {
        hi: 'खेलों के साथ सही क्रिया का चयन: PLAY का प्रयोग बॉल/टीम खेलों के लिए (play football, play chess), GO का प्रयोग -ing वाली गतिविधियों के लिए (go swimming, go hiking), और DO का प्रयोग व्यक्तिगत व्यायामों के लिए (do yoga, do gymnastics) होता है।',
        es: 'Usa PLAY para deportes de pelota y juegos (play tennis, play football). Usa GO para actividades terminadas en -ing (go swimming, go running). Usa DO para artes marciales y ejercicios individuales (do yoga, do karate).',
        fr: 'On utilise PLAY pour les jeux de balle, GO pour les verbes en -ing, et DO pour les exercices et arts martiaux.',
        de: 'Verwende PLAY für Ballspiele, GO für -ing Aktivitäten und DO für Gymnastik/Yoga.',
        pt: 'Use PLAY para esportes com bola, GO para atividades em -ing e DO para yoga/ginástica.',
        zh: '运动搭配规则：PLAY 用于球类及棋牌（play tennis/chess），GO 用于 -ing 活动（go swimming/hiking），DO 用于瑜伽及武术等个人锻炼（do yoga/karate）。',
        ar: 'استخدم PLAY مع ألعاب الكرة، و GO مع الأنشطة المنتهية بـ ing، و DO مع تمارين اليوغا والفنون القتالية.',
        ja: '球技には PLAY（play tennis）、-ing の活動には GO（go swimming）、体操やヨガには DO（do yoga）を使います。',
        ru: 'PLAY используется с играми с мячом, GO с активностями на -ing, DO с йогой и боевыми искусствами.'
      },
      examples: [
        { sentence: 'I play tennis every Wednesday evening.', translation: 'Juego al tenis todos los miércoles por la tarde.' },
        { sentence: 'We go hiking in the mountains every autumn.', translation: 'Vamos de senderismo a las montañas cada otoño.' },
        { sentence: 'She does yoga at home to relax.', translation: 'Ella hace yoga en casa para relajarse.' }
      ]
    }
  ],

  // SECTION 6: Common Learner Mistakes (5 items)
  commonMistakes: [
    {
      id: 'cm_u02_l25_01',
      incorrect: 'I like play football.',
      correct: 'I like playing football. / I like to play football.',
      explanation: 'After "like", use the gerund (-ing) or the infinitive with "to", never the bare infinitive.',
      explanationByLang: {
        hi: '"like" के बाद "playing" (gerund) या "to play" का प्रयोग करें, केवल "play" नहीं।',
        es: 'No digas "I like play". Di "I like playing" o "I like to play".',
        fr: 'Dites "I like playing".',
        de: 'Man sagt "I like playing", nicht "I like play".',
        pt: 'Diga "I like playing", não "I like play".',
        zh: 'like 后接动词时不能用原形，应说 "I like playing football"。',
        ar: 'قل I like playing football ولا تقل I like play.',
        ja: '"like" の後は "I like playing" または "I like to play" とします。',
        ru: 'Правильно: "I like playing football", а не "I like play".'
      }
    },
    {
      id: 'cm_u02_l25_02',
      incorrect: 'I go play swimming on Sunday.',
      correct: 'I go swimming on Sunday.',
      explanation: 'Do not combine "go" and "play" with -ing sports. Say "I go swimming" directly.',
      explanationByLang: {
        hi: '"go swimming" कहें, "go play swimming" गलत है।',
        es: 'Di "I go swimming", no "I go play swimming".',
        fr: 'Dites "I go swimming".',
        de: 'Sagen Sie "I go swimming".',
        pt: 'Diga "I go swimming".',
        zh: '去游泳表达为 "I go swimming"，不可将 go 和 play 连用。',
        ar: 'قل I go swimming مباشرة.',
        ja: '「泳ぎに行く」は "I go swimming" と言います。',
        ru: 'Правильно говорить "I go swimming".'
      }
    },
    {
      id: 'cm_u02_l25_03',
      incorrect: 'She plays the yoga in morning.',
      correct: 'She does yoga in the morning.',
      explanation: 'Use the verb "do" with yoga, gymnastics, and martial arts (not "play").',
      explanationByLang: {
        hi: 'योगा के साथ "do yoga" का प्रयोग करें, "play yoga" नहीं।',
        es: 'Para el yoga se usa el verbo "do": "do yoga", no "play yoga".',
        fr: 'On dit "do yoga".',
        de: 'Man sagt "do yoga", nicht "play yoga".',
        pt: 'Diga "do yoga", não "play yoga".',
        zh: '瑜伽搭配动词 do，应说 "do yoga"，不是 "play yoga"。',
        ar: 'نستخدم الفعل do مع اليوغا: do yoga.',
        ja: 'ヨガには "do yoga" を用います。',
        ru: 'С йогой используется глагол "do": "do yoga".'
      }
    },
    {
      id: 'cm_u02_l25_04',
      incorrect: 'I am playing guitar everyday. (habit)',
      correct: 'I play the guitar every day.',
      explanation: 'Use Present Simple (I play) for regular habitual hobbies, not Present Continuous. In British and standard English, we also often include "the" before musical instruments: "play the guitar".',
      explanationByLang: {
        hi: 'नियमित आदत या शौक के लिए Present Simple का प्रयोग करें: "I play the guitar every day"।',
        es: 'Para pasatiempos habituales usa el Present Simple: "I play the guitar every day".',
        fr: 'Utilisez le Present Simple pour les habitudes régulières.',
        de: 'Verwenden Sie Present Simple für regelmäßige Hobbys.',
        pt: 'Use o Present Simple para hábitos regulares.',
        zh: '描述日常固定爱好应使用一般现在时："I play the guitar every day"。',
        ar: 'استخدم المضارع البسيط للتعبير عن الهوايات والعادات المنتظمة.',
        ja: '日常的な趣味には現在形 "I play the guitar every day" を用います。',
        ru: 'Для постоянных хобби используется Present Simple: "I play the guitar every day".'
      }
    },
    {
      id: 'cm_u02_l25_05',
      incorrect: 'I no like gaming.',
      correct: 'I don\'t like gaming.',
      explanation: 'Form the negative in Present Simple using "don\'t" + verb, not "no" + verb.',
      explanationByLang: {
        hi: 'नकारात्मक के लिए "I don\'t like" कहें, "I no like" नहीं।',
        es: 'No digas "I no like". La forma correcta es "I don\'t like gaming".',
        fr: 'Dites "I don\'t like".',
        de: 'Sagen Sie "I don\'t like".',
        pt: 'Diga "I don\'t like gaming".',
        zh: '否定句应使用助动词 don\'t："I don\'t like gaming"。',
        ar: 'قل I don\'t like وليس I no like.',
        ja: '否定は "I don\'t like gaming" とします。',
        ru: 'Правильно: "I don\'t like gaming".'
      }
    }
  ],

  // SECTION 7: Realistic Dialogues (3 items)
  dialogues: [
    {
      id: 'd_u02_l25_01',
      title: 'Discussing Weekend Hobbies with a Colleague',
      context: 'Alex and Chloe are chatting at the office coffee station on a Monday morning.',
      turns: [
        {
          speaker: 'Alex',
          text: 'Hi Chloe! How was your weekend? Did you do anything fun?',
          translationByLang: {
            hi: 'नमस्ते क्लोई! आपका सप्ताहांत कैसा रहा? क्या आपने कुछ मजेदार किया?',
            es: '¡Hola, Chloe! ¿Qué tal tu fin de semana? ¿Hiciste algo divertido?'
          },
          audioId: 'en_a1_u02_l25_d01_01'
        },
        {
          speaker: 'Chloe',
          text: 'It was great! I spent Saturday morning gardening in my backyard, and on Sunday I went hiking with my sister in the pine hills.',
          translationByLang: {
            hi: 'यह बहुत बढ़िया था! मैंने शनिवार की सुबह अपने पिछवाड़े में बागवानी करने में बिताई, और रविवार को मैं अपनी बहन के साथ पाइन पहाड़ियों में हाइकिंग पर गई।',
            es: '¡Estuvo genial! Pasé el sábado por la mañana haciendo jardinería y el domingo fui de senderismo con mi hermana en las colinas de pinos.'
          },
          audioId: 'en_a1_u02_l25_d01_02'
        },
        {
          speaker: 'Alex',
          text: 'That sounds so refreshing! I love outdoor activities, but I usually spend my Sundays cooking and reading novels at home.',
          translationByLang: {
            hi: 'यह बहुत ताज़गी भरा लगता है! मुझे आउटडोर गतिविधियाँ बहुत पसंद हैं, लेकिन मैं आमतौर पर अपने रविवार घर पर खाना पकाने और उपन्यास पढ़ने में बिताता हूँ।',
            es: '¡Eso suena muy refrescante! Me encantan las actividades al aire libre, pero suelo pasar mis domingos cocinando y leyendo novelas en casa.'
          },
          audioId: 'en_a1_u02_l25_d01_03'
        },
        {
          speaker: 'Chloe',
          text: 'Cooking is wonderful too! Next weekend, do you want to join our hiking club? We are visiting the lake trail.',
          translationByLang: {
            hi: 'खाना पकाना भी अद्भुत है! अगले सप्ताहांत, क्या आप हमारे हाइकिंग क्लब में शामिल होना चाहते हैं? हम झील के रास्ते पर जा रहे हैं।',
            es: '¡Cocinar también es maravilloso! El próximo fin de semana, ¿quieres unirte a nuestro club de senderismo? Vamos al sendero del lago.'
          },
          audioId: 'en_a1_u02_l25_d01_04'
        }
      ]
    },
    {
      id: 'd_u02_l25_02',
      title: 'Joining a Community Sports Center',
      context: 'Daniel is inquiring about weekly activity classes at a local sports club.',
      turns: [
        {
          speaker: 'Receptionist',
          text: 'Welcome to City Sports Club! How can I help you today?',
          translationByLang: {
            hi: 'सिटी स्पोर्ट्स क्लब में आपका स्वागत है! आज मैं आपकी क्या मदद कर सकता हूँ?',
            es: '¡Bienvenido al Club Deportivo City! ¿En qué puedo ayudarle hoy?'
          },
          audioId: 'en_a1_u02_l25_d02_01'
        },
        {
          speaker: 'Daniel',
          text: 'Hi! I want to join some evening classes. What sports and activities do you offer on weekdays?',
          translationByLang: {
            hi: 'नमस्ते! मैं कुछ शाम की कक्षाओं में शामिल होना चाहता हूँ। आप कार्यदिवसों में कौन से खेल और गतिविधियाँ पेश करते हैं?',
            es: '¡Hola! Quiero unirme a algunas clases nocturnas. ¿Qué deportes y actividades ofrecen entre semana?'
          },
          audioId: 'en_a1_u02_l25_d02_02'
        },
        {
          speaker: 'Receptionist',
          text: 'We have swimming sessions on Monday, yoga and Pilates on Tuesday, and tennis tournaments on Thursday. Do you like team sports or individual workouts?',
          translationByLang: {
            hi: 'हमारे यहाँ सोमवार को तैराकी सत्र, मंगलवार को योग और पाइलेट्स, और गुरुवार को टेनिस टूर्नामेंट होते हैं। क्या आप टीम खेल या व्यक्तिगत कसरत पसंद करते हैं?',
            es: 'Tenemos sesiones de natación los lunes, yoga los martes y torneos de tenis los jueves. ¿Prefiere deportes de equipo o entrenamientos individuales?'
          },
          audioId: 'en_a1_u02_l25_d02_03'
        },
        {
          speaker: 'Daniel',
          text: 'I really enjoy swimming and doing yoga. I would like to sign up for the monthly membership pass, please!',
          translationByLang: {
            hi: 'मुझे तैराकी और योग करने में बहुत मज़ा आता है। मैं कृपया मासिक सदस्यता पास के लिए साइन अप करना चाहूँगा!',
            es: '¡Disfruto mucho nadar y hacer yoga! ¡Me gustaría registrarme para el pase de membresía mensual, por favor!'
          },
          audioId: 'en_a1_u02_l25_d02_04'
        }
      ]
    },
    {
      id: 'd_u02_l25_03',
      title: 'Discovering Musical Talents',
      context: 'Maya is visiting her friend Lucas\'s apartment and notices his musical instruments.',
      turns: [
        {
          speaker: 'Maya',
          text: 'Lucas, is that an electric guitar in the corner? Do you play in a band?',
          translationByLang: {
            hi: 'लुकास, क्या वह कोने में इलेक्ट्रिक गिटार है? क्या आप किसी बैंड में बजाते हैं?',
            es: 'Lucas, ¿esa es una guitarra eléctrica en la esquina? ¿Tocas en una banda?'
          },
          audioId: 'en_a1_u02_l25_d03_01'
        },
        {
          speaker: 'Lucas',
          text: 'Yes! I play the guitar, and my roommate plays the drums. We practice rock songs on Friday evenings.',
          translationByLang: {
            hi: 'हाँ! मैं गिटार बजाता हूँ, और मेरा रूममेट ड्रम बजाता है। हम शुक्रवार की शाम रॉक गानों का अभ्यास करते हैं।',
            es: '¡Sí! Toco la guitarra y mi compañero de cuarto toca la batería. Practicamos canciones de rock los viernes por la noche.'
          },
          audioId: 'en_a1_u02_l25_d03_02'
        },
        {
          speaker: 'Maya',
          text: 'That is so cool! How long have you been playing?',
          translationByLang: {
            hi: 'यह बहुत बढ़िया है! आप कितने समय से बजा रहे हैं?',
            es: '¡Eso es genial! ¿Cuánto tiempo llevas tocando?'
          },
          audioId: 'en_a1_u02_l25_d03_03'
        },
        {
          speaker: 'Lucas',
          text: 'For about three years. Playing music really helps me relax after a busy week.',
          translationByLang: {
            hi: 'लगभग तीन साल से। संगीत बजाने से मुझे व्यस्त सप्ताह के बाद आराम करने में बहुत मदद मिलती है।',
            es: 'Desde hace unos tres años. Tocar música realmente me ayuda a relajarme después de una semana ocupada.'
          },
          audioId: 'en_a1_u02_l25_d03_04'
        }
      ]
    }
  ],

  // SECTION 8: Practice Exercises (15 items)
  practiceExercises: [
    {
      id: 'ex_u02_l25_p01',
      lessonId: 'lesson_a1_2_25',
      type: 'multiple_choice',
      prompt: 'Choose the correct form to complete: "She loves _______ novels in the evening."',
      options: [
        { id: 'a', text: 'reading', isCorrect: true },
        { id: 'b', text: 'reads', isCorrect: false },
        { id: 'c', text: 'readed', isCorrect: false },
        { id: 'd', text: 'is read', isCorrect: false }
      ],
      explanation: 'Use the gerund (-ing) after "loves": "loves reading".'
    },
    {
      id: 'ex_u02_l25_p02',
      lessonId: 'lesson_a1_2_25',
      type: 'fill_in_blank',
      prompt: 'Complete the sentence with the correct verb: "We play tennis and _______ swimming every Saturday."',
      correctAnswer: 'go',
      options: [
        { id: 'opt_1', text: 'go', isCorrect: true },
        { id: 'opt_2', text: 'play', isCorrect: false },
        { id: 'opt_3', text: 'do', isCorrect: false },
        { id: 'opt_4', text: 'make', isCorrect: false }
      ],
      explanation: 'We say "go swimming" with -ing sports activities.'
    },
    {
      id: 'ex_u02_l25_p03',
      lessonId: 'lesson_a1_2_25',
      type: 'match_pairs',
      prompt: 'Match the verb with its correct activity collocation:',
      pairs: [
        { id: 'p1', left: 'Play', right: 'Football / Chess' },
        { id: 'p2', left: 'Go', right: 'Hiking / Swimming' },
        { id: 'p3', left: 'Do', right: 'Yoga / Martial arts' },
        { id: 'p4', left: 'Listen to', right: 'Music / Podcasts' }
      ]
    },
    {
      id: 'ex_u02_l25_p04',
      lessonId: 'lesson_a1_2_25',
      type: 'reorder',
      prompt: 'Order the words to make a correct question about hobbies:',
      words: ['What', 'do', 'you', 'like', 'doing', 'in', 'your', 'free', 'time?'],
      correctOrder: ['What', 'do', 'you', 'like', 'doing', 'in', 'your', 'free', 'time?'],
      explanation: 'What + do + subject + like doing + time expression?'
    },
    {
      id: 'ex_u02_l25_p05',
      lessonId: 'lesson_a1_2_25',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses a dislike?',
      options: [
        { id: 'a', text: 'I don\'t like waking up early on weekends.', isCorrect: true },
        { id: 'b', text: 'I no like wake up early.', isCorrect: false },
        { id: 'c', text: 'I not liking to wake up.', isCorrect: false },
        { id: 'd', text: 'I hate wake up early.', isCorrect: false }
      ],
      explanation: '"I don\'t like waking up early" uses the correct negative auxiliary and gerund form.'
    },
    {
      id: 'ex_u02_l25_p06',
      lessonId: 'lesson_a1_2_25',
      type: 'fill_in_blank',
      prompt: 'Complete the sentence: "Taking care of plants and flowers in the garden is called _______."',
      correctAnswer: 'gardening',
      options: [
        { id: 'opt_1', text: 'gardening', isCorrect: true },
        { id: 'opt_2', text: 'hiking', isCorrect: false },
        { id: 'opt_3', text: 'gaming', isCorrect: false },
        { id: 'opt_4', text: 'camping', isCorrect: false }
      ],
      explanation: 'Gardening is the activity of cultivating plants and flowers.'
    },
    {
      id: 'ex_u02_l25_p07',
      lessonId: 'lesson_a1_2_25',
      type: 'multiple_choice',
      prompt: 'What verb collocation is used for yoga?',
      options: [
        { id: 'a', text: 'Do yoga', isCorrect: true },
        { id: 'b', text: 'Play yoga', isCorrect: false },
        { id: 'c', text: 'Go yoga', isCorrect: false },
        { id: 'd', text: 'Make yoga', isCorrect: false }
      ],
      explanation: 'We use "do" with yoga, martial arts, and gymnastics.'
    },
    {
      id: 'ex_u02_l25_p08',
      lessonId: 'lesson_a1_2_25',
      type: 'reorder',
      prompt: 'Arrange the words to describe a musical hobby:',
      words: ['He', 'practices', 'playing', 'the', 'guitar', 'every', 'day.'],
      correctOrder: ['He', 'practices', 'playing', 'the', 'guitar', 'every', 'day.'],
      explanation: 'Subject + verb + gerund + object + frequency.'
    },
    {
      id: 'ex_u02_l25_p09',
      lessonId: 'lesson_a1_2_25',
      type: 'multiple_choice',
      prompt: 'Which hobby involves taking pictures with a camera?',
      options: [
        { id: 'a', text: 'Photography', isCorrect: true },
        { id: 'b', text: 'Knitting', isCorrect: false },
        { id: 'c', text: 'Baking', isCorrect: false },
        { id: 'd', text: 'Camping', isCorrect: false }
      ],
      explanation: 'Photography is taking photos with a camera.'
    },
    {
      id: 'ex_u02_l25_p10',
      lessonId: 'lesson_a1_2_25',
      type: 'fill_in_blank',
      prompt: 'Fill in the blank: "I hate _______ in long traffic jams because it is so boring."',
      correctAnswer: 'sitting',
      options: [
        { id: 'opt_1', text: 'sitting', isCorrect: true },
        { id: 'opt_2', text: 'sits', isCorrect: false },
        { id: 'opt_3', text: 'to sat', isCorrect: false },
        { id: 'opt_4', text: 'sit', isCorrect: false }
      ],
      explanation: 'Use the -ing form after "hate": "hate sitting".'
    },
    {
      id: 'ex_u02_l25_p11',
      lessonId: 'lesson_a1_2_25',
      type: 'match_pairs',
      prompt: 'Match the hobby to its equipment or location:',
      pairs: [
        { id: 'p1', left: 'Baking', right: 'Oven & cake pans' },
        { id: 'p2', left: 'Knitting', right: 'Yarn & needles' },
        { id: 'p3', left: 'Gaming', right: 'Controller & console' },
        { id: 'p4', left: 'Camping', right: 'Tent & sleeping bag' }
      ]
    },
    {
      id: 'ex_u02_l25_p12',
      lessonId: 'lesson_a1_2_25',
      type: 'multiple_choice',
      prompt: 'What does "I am really into cooking" mean?',
      options: [
        { id: 'a', text: 'I love and am enthusiastic about cooking', isCorrect: true },
        { id: 'b', text: 'I work inside a professional kitchen', isCorrect: false },
        { id: 'c', text: 'I dislike cooking food', isCorrect: false },
        { id: 'd', text: 'I only eat in restaurants', isCorrect: false }
      ],
      explanation: '"To be into something" means to enjoy it and be enthusiastic about it.'
    },
    {
      id: 'ex_u02_l25_p13',
      lessonId: 'lesson_a1_2_25',
      type: 'fill_in_blank',
      prompt: 'Complete the sentence: "We love going _______ in the mountains every summer."',
      correctAnswer: 'hiking',
      options: [
        { id: 'opt_1', text: 'hiking', isCorrect: true },
        { id: 'opt_2', text: 'guitar', isCorrect: false },
        { id: 'opt_3', text: 'tennis', isCorrect: false },
        { id: 'opt_4', text: 'yoga', isCorrect: false }
      ],
      explanation: 'We say "going hiking in the mountains".'
    },
    {
      id: 'ex_u02_l25_p14',
      lessonId: 'lesson_a1_2_25',
      type: 'reorder',
      prompt: 'Reorder the words to express personal preference:',
      words: ['I', 'prefer', 'drinking', 'tea', 'to', 'coffee.'],
      correctOrder: ['I', 'prefer', 'drinking', 'tea', 'to', 'coffee.'],
      explanation: 'Structure: Subject + prefer + item A + to + item B.'
    },
    {
      id: 'ex_u02_l25_p15',
      lessonId: 'lesson_a1_2_25',
      type: 'multiple_choice',
      prompt: 'Which of the following adjectives describes an activity that brings peace and lowers stress?',
      options: [
        { id: 'a', text: 'Relaxing', isCorrect: true },
        { id: 'b', text: 'Boring', isCorrect: false },
        { id: 'c', text: 'Exhausting', isCorrect: false },
        { id: 'd', text: 'Freezing', isCorrect: false }
      ],
      explanation: 'Relaxing means restful, calming, and stress-reducing.'
    }
  ],

  // SECTION 9: Review Exercises (5 items)
  reviewExercises: [
    {
      id: 'ex_u02_l25_r01',
      lessonId: 'lesson_a1_2_25',
      type: 'multiple_choice',
      prompt: 'Which sentence has NO grammatical errors?',
      options: [
        { id: 'a', text: 'My sister enjoys painting watercolors on Sundays.', isCorrect: true },
        { id: 'b', text: 'My sister enjoy paint watercolors.', isCorrect: false },
        { id: 'c', text: 'My sister enjoys to painting watercolors.', isCorrect: false },
        { id: 'd', text: 'My sister is enjoying paint.', isCorrect: false }
      ],
      explanation: '"enjoys painting" correctly uses third-person singular -s and gerund.'
    },
    {
      id: 'ex_u02_l25_r02',
      lessonId: 'lesson_a1_2_25',
      type: 'fill_in_blank',
      prompt: 'Complete with the correct activity: "Playing _______ on a console is very popular among teenagers."',
      correctAnswer: 'video games',
      options: [
        { id: 'opt_1', text: 'video games', isCorrect: true },
        { id: 'opt_2', text: 'hiking', isCorrect: false },
        { id: 'opt_3', text: 'gardening', isCorrect: false },
        { id: 'opt_4', text: 'yoga', isCorrect: false }
      ],
      explanation: 'Video games are played on consoles.'
    },
    {
      id: 'ex_u02_l25_r03',
      lessonId: 'lesson_a1_2_25',
      type: 'match_pairs',
      prompt: 'Match preference degree with example phrases:',
      pairs: [
        { id: 'p1', left: 'Love (++++)', right: 'I adore playing music' },
        { id: 'p2', left: 'Like (++)', right: 'I enjoy cycling' },
        { id: 'p3', left: 'Neutral (0)', right: 'I don\'t mind cleaning' },
        { id: 'p4', left: 'Hate (----)', right: 'I can\'t stand waiting' }
      ]
    },
    {
      id: 'ex_u02_l25_r04',
      lessonId: 'lesson_a1_2_25',
      type: 'reorder',
      prompt: 'Arrange the sentence:',
      words: ['They', 'go', 'camping', 'near', 'the', 'lake.'],
      correctOrder: ['They', 'go', 'camping', 'near', 'the', 'lake.'],
      explanation: 'Subject + go + camping + location.'
    },
    {
      id: 'ex_u02_l25_r05',
      lessonId: 'lesson_a1_2_25',
      type: 'multiple_choice',
      prompt: 'How do you ask a friend if they like playing video games?',
      options: [
        { id: 'a', text: 'Do you like playing video games?', isCorrect: true },
        { id: 'b', text: 'Are you like play video games?', isCorrect: false },
        { id: 'c', text: 'Does you play gaming?', isCorrect: false },
        { id: 'd', text: 'Do you liking games?', isCorrect: false }
      ],
      explanation: '"Do you like playing video games?" is the standard question structure.'
    }
  ],

  // SECTION 10: Assessment Exercises (5 items)
  assessmentExercises: [
    {
      id: 'ex_u02_l25_a01',
      lessonId: 'lesson_a1_2_25',
      type: 'multiple_choice',
      prompt: 'Select the correct sentence:',
      options: [
        { id: 'a', text: 'I hate doing the laundry on Monday mornings.', isCorrect: true },
        { id: 'b', text: 'I hate do the laundry on Monday.', isCorrect: false },
        { id: 'c', text: 'I am hate doing laundry.', isCorrect: false },
        { id: 'd', text: 'I don\'t hate do laundry.', isCorrect: false }
      ],
      explanation: '"I hate doing..." uses the correct gerund structure.'
    },
    {
      id: 'ex_u02_l25_a02',
      lessonId: 'lesson_a1_2_25',
      type: 'fill_in_blank',
      prompt: 'Complete the sentence: "On sunny afternoons, we love _______ in the outdoor swimming pool."',
      correctAnswer: 'swimming',
      options: [
        { id: 'opt_1', text: 'swimming', isCorrect: true },
        { id: 'opt_2', text: 'swims', isCorrect: false },
        { id: 'opt_3', text: 'to swam', isCorrect: false },
        { id: 'opt_4', text: 'swam', isCorrect: false }
      ],
      explanation: 'We love swimming.'
    },
    {
      id: 'ex_u02_l25_a03',
      lessonId: 'lesson_a1_2_25',
      type: 'reorder',
      prompt: 'Reorder the words to form a question:',
      words: ['Does', 'she', 'enjoy', 'baking', 'chocolate', 'cakes?'],
      correctOrder: ['Does', 'she', 'enjoy', 'baking', 'chocolate', 'cakes?'],
      explanation: 'Does + subject + enjoy + gerund + object?'
    },
    {
      id: 'ex_u02_l25_a04',
      lessonId: 'lesson_a1_2_25',
      type: 'multiple_choice',
      prompt: 'Which verb correctly completes: "They _______ soccer every Saturday at 10 AM."',
      options: [
        { id: 'a', text: 'play', isCorrect: true },
        { id: 'b', text: 'go', isCorrect: false },
        { id: 'c', text: 'do', isCorrect: false },
        { id: 'd', text: 'make', isCorrect: false }
      ],
      explanation: 'We use "play" for soccer/football.'
    },
    {
      id: 'ex_u02_l25_a05',
      lessonId: 'lesson_a1_2_25',
      type: 'match_pairs',
      prompt: 'Match the question with the most natural answer:',
      pairs: [
        { id: 'p1', left: 'What are your hobbies?', right: 'I love reading and gardening.' },
        { id: 'p2', left: 'Do you play any instruments?', right: 'Yes, I play the piano.' },
        { id: 'p3', left: 'Do you like jogging?', right: 'No, I prefer swimming.' },
        { id: 'p4', left: 'Why do you like yoga?', right: 'Because it is very relaxing.' }
      ]
    }
  ]
};
