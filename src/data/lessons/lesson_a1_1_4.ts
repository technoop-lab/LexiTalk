import { DetailedLessonData } from '../../types';

export const LESSON_A1_1_4_DATA: DetailedLessonData = {
  id: 'lesson_a1_1_4',
  unitId: 'unit_a1_1',
  title: 'Everyday Objects, Personal Belongings & Demonstratives',
  cefr: 'A1',
  icon: '🎒',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Everyday Objects, Personal Belongings & Demonstratives (This / That / These / Those)',
    description: 'Learn vocabulary for common personal items, classroom/office objects, form regular and irregular plurals, master near/far demonstratives (This/That/These/Those), and ask about ownership ("Whose is this?").',
    descriptionsByLang: {
      hi: 'दैनिक वस्तुओं (पेन, बैग, फोन, चाबियाँ, लैपटॉप) के नाम जानें, बहुवचन (Plurals) बनाएं, This/That/These/Those का सही प्रयोग करें, और स्वामित्व के सवाल पूछें।',
      es: 'Aprende vocabulario para objetos personales, forma plurales regulares e irregulares, domina los demostrativos (This/That/These/Those) y pregunta sobre pertenencias.',
      fr: 'Apprenez le vocabulaire des objets du quotidien, formez les pluriels et maîtrisez les démonstratifs (This/That/These/Those).',
      de: 'Lernen Sie Begriffe für Alltagsgegenstände, Pluralbildung und Demonstrativpronomen (This/That/These/Those).',
      pt: 'Aprenda o vocabulário de objetos do dia a dia, formação do plural e pronomes demonstrativos (This/That/These/Those).',
      zh: '掌握日常物品词汇、名词单复数规则以及指示代词（This/That/These/Those）的用法。',
      ar: 'تعلم مفردات الأشياء اليومية وصياغة الجمع واستخدام أسماء الإشارة (This/That/These/Those).',
      ja: '身の回りの持ち物の名前、複数形、指示代名詞（This/That/These/Those）を学びます。',
      ru: 'Изучите названия повседневных предметов, множественное число и указательные местоимения (This/That/These/Those).'
    },
    canDoStatements: [
      'Name personal, office, and classroom objects in English',
      'Form regular plurals with -s and -es, and identify irregular plurals',
      'Use "This" (near singular) and "That" (far singular) accurately with "is"',
      'Use "These" (near plural) and "Those" (far plural) accurately with "are"',
      'Ask and answer "What is this / that?" and "Whose keys are these?"',
      'Identify lost items and confirm ownership ("Is this your bag?")'
    ],
    canDoByLang: {
      hi: [
        'निजी और कार्यालय की वस्तुओं के नाम अंग्रेजी में बोलना',
        'संज्ञाओं के एकवचन और बहुवचन रूप बनाना',
        'This/That (एकवचन) और These/Those (बहुवचन) का सही उपयोग करना',
        '"What is this?" और "Whose bag is this?" जैसे प्रश्न पूछना और उत्तर देना',
        'खोई हुई वस्तुओं की पहचान और स्वामित्व की पुष्टि करना'
      ],
      es: [
        'Nombrar objetos personales y de oficina en inglés',
        'Formar plurales regulares e irregulares',
        'Usar This/That y These/Those con precisión',
        'Preguntar y responder sobre objetos y dueños'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (20 items)
  vocabulary: [
    {
      id: 'v_bag',
      word: 'bag',
      phonetic: '/bæɡ/',
      meaning: 'Container for carrying items',
      translationsByLang: { hi: 'थैला / बैग', es: 'bolso / bolsa', fr: 'sac', de: 'Tasche', pt: 'bolsa', zh: '包', ar: 'حقيبة', ja: 'バッグ', ru: 'сумка' },
      exampleSentence: 'This is my travel bag.',
      exampleTranslationByLang: { hi: 'यह मेरा यात्रा बैग है।', es: 'Este es mi bolso de viaje.' },
      audioText: 'bag',
      audioId: 'en_a1_u01_l04_v_bag',
      slowAudioId: 'en_a1_u01_l04_v_bag_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎒',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_book',
      word: 'book',
      phonetic: '/bʊk/',
      meaning: 'Written work of bound pages',
      translationsByLang: { hi: 'किताब / पुस्तक', es: 'libro', fr: 'livre', de: 'Buch', pt: 'livro', zh: '书', ar: 'كتاب', ja: '本', ru: 'книга' },
      exampleSentence: 'That book on the table is interesting.',
      exampleTranslationByLang: { hi: 'मेज पर वह किताब रोचक है।', es: 'Ese libro sobre la mesa es interesante.' },
      audioText: 'book',
      audioId: 'en_a1_u01_l04_v_book',
      slowAudioId: 'en_a1_u01_l04_v_book_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📖',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_key',
      word: 'key',
      phonetic: '/kiː/',
      meaning: 'Metal piece for opening locks',
      translationsByLang: { hi: 'चाबी', es: 'llave', fr: 'clé', de: 'Schlüssel', pt: 'chave', zh: '钥匙', ar: 'مفتاح', ja: '鍵', ru: 'ключ' },
      exampleSentence: 'Where is my house key?',
      exampleTranslationByLang: { hi: 'मेरे घर की चाबी कहाँ है?', es: '¿Dónde está la llave de mi casa?' },
      audioText: 'key',
      audioId: 'en_a1_u01_l04_v_key',
      slowAudioId: 'en_a1_u01_l04_v_key_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔑',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_phone',
      word: 'phone',
      phonetic: '/foʊn/',
      meaning: 'Mobile communication device',
      translationsByLang: { hi: 'फ़ोन / मोबाइल', es: 'teléfono / móvil', fr: 'téléphone', de: 'Telefon', pt: 'telefone / celular', zh: '电话', ar: 'هاتف', ja: '電話', ru: 'телефон' },
      exampleSentence: 'Is this your new phone?',
      exampleTranslationByLang: { hi: 'क्या यह आपका नया फोन है?', es: '¿Es este tu nuevo teléfono?' },
      audioText: 'phone',
      audioId: 'en_a1_u01_l04_v_phone',
      slowAudioId: 'en_a1_u01_l04_v_phone_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📱',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_laptop',
      word: 'laptop',
      phonetic: '/ˈlæptɑːp/',
      meaning: 'Portable computer',
      translationsByLang: { hi: 'लैपटॉप', es: 'portátil / laptop', fr: 'ordinateur portable', de: 'Laptop', pt: 'notebook', zh: '笔记本电脑', ar: 'حاسوب محمول', ja: 'ノートPC', ru: 'ноутбук' },
      exampleSentence: 'These laptops are for our team.',
      exampleTranslationByLang: { hi: 'ये लैपटॉप हमारी टीम के लिए हैं।', es: 'Estas laptops son para nuestro equipo.' },
      audioText: 'laptop',
      audioId: 'en_a1_u01_l04_v_laptop',
      slowAudioId: 'en_a1_u01_l04_v_laptop_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💻',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_pen',
      word: 'pen',
      phonetic: '/pen/',
      meaning: 'Writing instrument with ink',
      translationsByLang: { hi: 'कलम / पेन', es: 'bolígrafo / pluma', fr: 'stylo', de: 'Kugelschreiber', pt: 'caneta', zh: '钢笔', ar: 'قلم', ja: 'ペン', ru: 'ручка' },
      exampleSentence: 'Do you have a blue pen?',
      exampleTranslationByLang: { hi: 'क्या आपके पास नीला पेन है?', es: '¿Tienes un bolígrafo azul?' },
      audioText: 'pen',
      audioId: 'en_a1_u01_l04_v_pen',
      slowAudioId: 'en_a1_u01_l04_v_pen_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🖊️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_pencil',
      word: 'pencil',
      phonetic: '/ˈpensl/',
      meaning: 'Writing instrument with graphite',
      translationsByLang: { hi: 'पेंसिल', es: 'lápiz', fr: 'crayon', de: 'Bleistift', pt: 'lápis', zh: '铅笔', ar: 'قلم رصاص', ja: '鉛筆', ru: 'карандаш' },
      exampleSentence: 'These pencils are on the desk.',
      exampleTranslationByLang: { hi: 'ये पेंसिलें मेज पर हैं।', es: 'Estos lápices están en el escritorio.' },
      audioText: 'pencil',
      audioId: 'en_a1_u01_l04_v_pencil',
      slowAudioId: 'en_a1_u01_l04_v_pencil_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '✏️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_watch',
      word: 'watch',
      phonetic: '/wɑːtʃ/',
      meaning: 'Wrist timepiece',
      translationsByLang: { hi: 'कलाई घड़ी', es: 'reloj de pulsera', fr: 'montre', de: 'Armbanduhr', pt: 'relógio', zh: '手表', ar: 'ساعة يد', ja: '腕時計', ru: 'часы' },
      exampleSentence: 'That watch is very expensive.',
      exampleTranslationByLang: { hi: 'वह घड़ी बहुत महंगी है।', es: 'Ese reloj es muy caro.' },
      audioText: 'watch',
      audioId: 'en_a1_u01_l04_v_watch',
      slowAudioId: 'en_a1_u01_l04_v_watch_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⌚',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_glasses',
      word: 'glasses',
      phonetic: '/ˈɡlæsɪz/',
      meaning: 'Pair of lenses for eyesight',
      translationsByLang: { hi: 'चश्मा', es: 'gafas / lentes', fr: 'lunettes', de: 'Brille', pt: 'óculos', zh: '眼镜', ar: 'نظارات', ja: '眼鏡', ru: 'очки' },
      exampleSentence: 'Those glasses are on your head!',
      exampleTranslationByLang: { hi: 'वे चश्मे आपके सिर पर हैं!', es: '¡Esas gafas están en tu cabeza!' },
      audioText: 'glasses',
      audioId: 'en_a1_u01_l04_v_glasses',
      slowAudioId: 'en_a1_u01_l04_v_glasses_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👓',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_umbrella',
      word: 'umbrella',
      phonetic: '/ʌmˈbrelə/',
      meaning: 'Protection from rain',
      translationsByLang: { hi: 'छाता', es: 'paraguas', fr: 'parapluie', de: 'Regenschirm', pt: 'guarda-chuva', zh: '雨伞', ar: 'مظلة', ja: '傘', ru: 'зонт' },
      exampleSentence: 'Take this umbrella; it is raining.',
      exampleTranslationByLang: { hi: 'यह छाता ले लो; बारिश हो रही है।', es: 'Lleva este paraguas; está lloviendo.' },
      audioText: 'umbrella',
      audioId: 'en_a1_u01_l04_v_umbrella',
      slowAudioId: 'en_a1_u01_l04_v_umbrella_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '☂️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_wallet',
      word: 'wallet',
      phonetic: '/ˈwɑːlɪt/',
      meaning: 'Small pocket case for money',
      translationsByLang: { hi: 'बटुआ / वॉलेट', es: 'billetera / cartera', fr: 'portefeuille', de: 'Geldbörse', pt: 'carteira', zh: '钱包', ar: 'محفظة', ja: '財布', ru: 'кошелёк' },
      exampleSentence: 'My wallet is inside my bag.',
      exampleTranslationByLang: { hi: 'मेरा बटुआ मेरे बैग के अंदर है।', es: 'Mi billetera está dentro de mi bolso.' },
      audioText: 'wallet',
      audioId: 'en_a1_u01_l04_v_wallet',
      slowAudioId: 'en_a1_u01_l04_v_wallet_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👛',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_passport',
      word: 'passport',
      phonetic: '/ˈpæspɔːrt/',
      meaning: 'Official international travel document',
      translationsByLang: { hi: 'पासपोर्ट', es: 'pasaporte', fr: 'passeport', de: 'Reisepass', pt: 'passaporte', zh: '护照', ar: 'جواز سفر', ja: 'パスポート', ru: 'паспорт' },
      exampleSentence: 'This passport is valid for ten years.',
      exampleTranslationByLang: { hi: 'यह पासपोर्ट दस साल के लिए वैध है।', es: 'Este pasaporte es válido por diez años.' },
      audioText: 'passport',
      audioId: 'en_a1_u01_l04_v_passport',
      slowAudioId: 'en_a1_u01_l04_v_passport_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🛂',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_bottle',
      word: 'bottle',
      phonetic: '/ˈbɑːtl/',
      meaning: 'Container with narrow neck for liquid',
      translationsByLang: { hi: 'बोतल', es: 'botella', fr: 'bouteille', de: 'Flasche', pt: 'garrafa', zh: '瓶子', ar: 'زجاجة', ja: 'ボトル', ru: 'бутылка' },
      exampleSentence: 'That water bottle is mine.',
      exampleTranslationByLang: { hi: 'पानी की वह बोतल मेरी है।', es: 'Esa botella de agua es mía.' },
      audioText: 'bottle',
      audioId: 'en_a1_u01_l04_v_bottle',
      slowAudioId: 'en_a1_u01_l04_v_bottle_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧴',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_desk',
      word: 'desk',
      phonetic: '/desk/',
      meaning: 'Table used for working or study',
      translationsByLang: { hi: 'डेस्क / कार्य मेज', es: 'escritorio', fr: 'bureau', de: 'Schreibtisch', pt: 'escrivaninha', zh: '书桌', ar: 'مكتب', ja: 'デスク', ru: 'письменный стол' },
      exampleSentence: 'These books are on the desk.',
      exampleTranslationByLang: { hi: 'ये किताबें मेज पर हैं।', es: 'Estos libros están en el escritorio.' },
      audioText: 'desk',
      audioId: 'en_a1_u01_l04_v_desk',
      slowAudioId: 'en_a1_u01_l04_v_desk_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🖥️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_chair',
      word: 'chair',
      phonetic: '/tʃer/',
      meaning: 'Seat with back for one person',
      translationsByLang: { hi: 'कुर्सी', es: 'silla', fr: 'chaise', de: 'Stuhl', pt: 'cadeira', zh: '椅子', ar: 'كرسي', ja: '椅子', ru: 'стул' },
      exampleSentence: 'That chair is comfortable.',
      exampleTranslationByLang: { hi: 'वह कुर्सी आरामदायक है।', es: 'Esa silla es cómoda.' },
      audioText: 'chair',
      audioId: 'en_a1_u01_l04_v_chair',
      slowAudioId: 'en_a1_u01_l04_v_chair_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🪑',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_headphones',
      word: 'headphones',
      phonetic: '/ˈhedfoʊnz/',
      meaning: 'Audio device worn over ears',
      translationsByLang: { hi: 'हेडफोन', es: 'auriculares', fr: 'écouteurs', de: 'Kopfhörer', pt: 'fones de ouvido', zh: '耳机', ar: 'سماعات', ja: 'ヘッドホン', ru: 'наушники' },
      exampleSentence: 'Whose headphones are these?',
      exampleTranslationByLang: { hi: 'ये किसके हेडफोन हैं?', es: '¿De quién son estos auriculares?' },
      audioText: 'headphones',
      audioId: 'en_a1_u01_l04_v_headphones',
      slowAudioId: 'en_a1_u01_l04_v_headphones_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎧',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_this',
      word: 'this',
      phonetic: '/ðɪs/',
      meaning: 'Singular near item',
      translationsByLang: { hi: 'यह (पास)', es: 'este / esta', fr: 'ce / ceci', de: 'dieser / dieses', pt: 'este / esta', zh: '这', ar: 'هذا', ja: 'これ', ru: 'этот' },
      exampleSentence: 'This is my pen.',
      exampleTranslationByLang: { hi: 'यह मेरी कलम है।', es: 'Este es mi bolígrafo.' },
      audioText: 'this',
      audioId: 'en_a1_u01_l04_v_this',
      slowAudioId: 'en_a1_u01_l04_v_this_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👇',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_that',
      word: 'that',
      phonetic: '/ðæt/',
      meaning: 'Singular distant item',
      translationsByLang: { hi: 'वह (दूर)', es: 'ese / aquel', fr: 'ce / cela', de: 'jener / jenes', pt: 'aquele / aquela', zh: '那', ar: 'ذلك', ja: 'あれ', ru: 'тот' },
      exampleSentence: 'That is your bag.',
      exampleTranslationByLang: { hi: 'वह आपका बैग है।', es: 'Ese es tu bolso.' },
      audioText: 'that',
      audioId: 'en_a1_u01_l04_v_that',
      slowAudioId: 'en_a1_u01_l04_v_that_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👉',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_these',
      word: 'these',
      phonetic: '/ðiːz/',
      meaning: 'Plural near items',
      translationsByLang: { hi: 'ये (पास, बहुवचन)', es: 'estos / estas', fr: 'ces', de: 'diese (Pl.)', pt: 'estes / estas', zh: '这些', ar: 'هؤلاء', ja: 'これら', ru: 'эти' },
      exampleSentence: 'These are my notebooks.',
      exampleTranslationByLang: { hi: 'ये मेरी नोटबुक हैं।', es: 'Estos son mis cuadernos.' },
      audioText: 'these',
      audioId: 'en_a1_u01_l04_v_these',
      slowAudioId: 'en_a1_u01_l04_v_these_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👐',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_those',
      word: 'those',
      phonetic: '/ðoʊz/',
      meaning: 'Plural distant items',
      translationsByLang: { hi: 'वे (दूर, बहुवचन)', es: 'esos / aquellos', fr: 'ces (loin)', de: 'jene (Pl.)', pt: 'aqueles / aquelas', zh: '那些', ar: 'أولئك', ja: 'あれら', ru: 'те' },
      exampleSentence: 'Those bags are heavy.',
      exampleTranslationByLang: { hi: 'वे बैग भारी हैं।', es: 'Esos bolsos son pesados.' },
      audioText: 'those',
      audioId: 'en_a1_u01_l04_v_those',
      slowAudioId: 'en_a1_u01_l04_v_those_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👈',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks
  expressions: [
    {
      id: 'e_what_is_this',
      expression: 'What is this / What is that?',
      translationsByLang: { hi: 'यह क्या है? / वह क्या है?', es: '¿Qué es esto? / ¿Qué es eso?', fr: 'Qu\'est-ce que c\'est ?', de: 'Was ist das?', pt: 'O que é isto/aquilo?', zh: '这是什么/那是什么？', ar: 'ما هذا؟', ja: 'これは何ですか？', ru: 'Что это?' },
      usageNote: 'Standard formula for identifying an object.',
      audioText: 'What is this on the table?',
      audioId: 'en_a1_u01_l04_e_what_is_this',
      slowAudioId: 'en_a1_u01_l04_e_what_is_this_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '❓'
    },
    {
      id: 'e_whose_is_this',
      expression: 'Whose ... is this / are these?',
      translationsByLang: { hi: 'यह किसका ... है? / ये किसके ... हैं?', es: '¿De quién es este/son estos...?', fr: 'À qui est ce... ?', de: 'Wem gehört dieses...?', pt: 'De quem é este/são estes...?', zh: '这是谁的...？', ar: 'لمن هذا...؟', ja: 'これは誰の〜ですか？', ru: 'Чей это...?' },
      usageNote: 'Asking about the owner of an item.',
      audioText: 'Whose jacket is this?',
      audioId: 'en_a1_u01_l04_e_whose_is_this',
      slowAudioId: 'en_a1_u01_l04_e_whose_is_this_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔍'
    },
    {
      id: 'e_is_this_your',
      expression: 'Is this your...?',
      translationsByLang: { hi: 'क्या यह आपका ... है?', es: '¿Es este tu...?', fr: 'Est-ce votre... ?', de: 'Ist das dein/e...?', pt: 'Este é seu/sua...?', zh: '这是你的...吗？', ar: 'هل هذا لك؟', ja: 'これはあなたの〜ですか？', ru: 'Это ваш...?' },
      usageNote: 'Confirming if an item belongs to the listener.',
      audioText: 'Is this your umbrella? Yes, thank you!',
      audioId: 'en_a1_u01_l04_e_is_this_your',
      slowAudioId: 'en_a1_u01_l04_e_is_this_your_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🤝'
    }
  ],

  // SECTION 5 & 6: Grammar Rules
  grammar: {
    title: 'Demonstratives (This/That/These/Those) & Noun Plural Formation',
    concept: 'Use "This" (near) and "That" (far) with singular nouns and "is". Use "These" (near) and "Those" (far) with plural nouns and "are". Regular plurals add -s or -es.',
    conceptsByLang: {
      hi: 'पास की एक वस्तु: This is; दूर की एक वस्तु: That is। पास की कई वस्तुएं: These are; दूर की कई वस्तुएं: Those are।',
      es: 'Cerca singular: This is; Lejos singular: That is. Cerca plural: These are; Lejos plural: Those are.',
      fr: 'Proche singulier: This is; Éloigné singulier: That is. Proche pluriel: These are; Éloigné pluriel: Those are.',
      de: 'Nah Singular: This is; Fern Singular: That is. Nah Plural: These are; Fern Plural: Those are.',
      pt: 'Perto singular: This is; Longe singular: That is. Perto plural: These are; Longe plural: Those are.',
      zh: '近处单数用 This is，远处单数用 That is；近处复数用 These are，远处复数用 Those are。',
      ar: 'المفرد القريب: This is، والمفرد البعيد: That is. الجمع القريب: These are، والجمع البعيد: Those are.',
      ja: '近くの単数：This is、遠くの単数：That is。近くの複数：These are、遠くの複数：Those are。',
      ru: 'Близко (ед.ч.): This is; Далеко (ед.ч.): That is. Близко (мн.ч.): These are; Далеко (мн.ч.): Those are.'
    },
    verbBeExplanation: {
      title: 'Demonstrative Matrix',
      content: 'Near vs. Far / Singular vs. Plural alignment:',
      contractionsTable: [
        { full: 'This is a pen.', contracted: 'This is my pen.', meaningByLang: { hi: 'यह (पास) मेरी कलम है।', es: 'Este es mi bolígrafo.' } },
        { full: 'That is a laptop.', contracted: 'That is my laptop.', meaningByLang: { hi: 'वह (दूर) मेरा लैपटॉप है।', es: 'Esa es mi laptop.' } },
        { full: 'These are books.', contracted: 'These are my books.', meaningByLang: { hi: 'ये (पास) मेरी किताबें हैं।', es: 'Estos son mis libros.' } },
        { full: 'Those are keys.', contracted: 'Those are my keys.', meaningByLang: { hi: 'वे (दूर) मेरी चाबियाँ हैं।', es: 'Esas son mis llaves.' } }
      ]
    },
    patterns: [
      {
        structure: 'This/That + is + a/an + Singular Noun',
        explanation: 'Singular demonstrative pattern for nearby and distant items.',
        examples: [
          { english: 'This is an umbrella.', translationByLang: { hi: 'यह एक छाता है।', es: 'Este es un paraguas.' } },
          { english: 'That is a comfortable chair.', translationByLang: { hi: 'वह एक आरामदायक कुर्सी है।', es: 'Esa es una silla cómoda.' } }
        ]
      },
      {
        structure: 'These/Those + are + Plural Noun',
        explanation: 'Plural demonstrative pattern for groups of items.',
        examples: [
          { english: 'These are my new glasses.', translationByLang: { hi: 'ये मेरे नए चश्मे हैं।', es: 'Estas son mis nuevas gafas.' } },
          { english: 'Those are Sarah\'s keys.', translationByLang: { hi: 'वे सारा की चाबियाँ हैं।', es: 'Esas son las llaves de Sarah.' } }
        ]
      }
    ]
  },

  // SECTION 7: Common Mistakes
  commonMistakes: [
    {
      id: 'cm_these_is',
      incorrect: 'These is my books.',
      correct: 'These are my books.',
      whyExplanation: '"These" is plural and requires the plural verb "are", not "is".',
      explanationsByLang: {
        hi: '"These" बहुवचन है, इसलिए "is" के बजाय "are" का प्रयोग करें।'
      }
    },
    {
      id: 'cm_this_glasses',
      incorrect: 'This is a glasses.',
      correct: 'These are glasses. / This is a pair of glasses.',
      whyExplanation: '"Glasses" is always grammatically plural in English ("These are glasses").',
      explanationsByLang: {
        hi: '"Glasses" हमेशा बहुवचन होता है, इसलिए "These are glasses" कहें।'
      }
    }
  ],

  // SECTION 11: Mini Dialogues
  dialogues: [
    {
      id: 'd_lost_property',
      title: 'Lost Property in Meeting Room',
      context: 'Anna and Ben checking the meeting table after a presentation.',
      lines: [
        {
          speaker: 'Anna',
          avatar: '👩‍💼',
          text: 'Excuse me, is this your umbrella, Ben?',
          translationsByLang: { hi: 'माफ़ कीजिये, क्या यह आपका छाता है, बेन?', es: 'Disculpa, ¿es este tu paraguas, Ben?' },
          audioText: 'Excuse me, is this your umbrella, Ben?',
          audioId: 'en_a1_u01_l04_d1_1',
          voiceId: 'EN_TEACHER_01'
        },
        {
          speaker: 'Ben',
          avatar: '👨‍💼',
          text: 'No, that is not mine. My umbrella is black.',
          translationsByLang: { hi: 'नहीं, वह मेरा नहीं है। मेरा छाता काला है।', es: 'No, ese no es mío. Mi paraguas es negro.' },
          audioText: 'No, that is not mine. My umbrella is black.',
          audioId: 'en_a1_u01_l04_d1_2',
          voiceId: 'EN_TEACHER_01'
        },
        {
          speaker: 'Anna',
          avatar: '👩‍💼',
          text: 'Whose glasses are these on the table?',
          translationsByLang: { hi: 'मेज पर ये चश्मे किसके हैं?', es: '¿De quién son estas gafas en la mesa?' },
          audioText: 'Whose glasses are these on the table?',
          audioId: 'en_a1_u01_l04_d1_3',
          voiceId: 'EN_TEACHER_01'
        },
        {
          speaker: 'Ben',
          avatar: '👨‍💼',
          text: 'Those are Sarah\'s glasses. She is looking for them.',
          translationsByLang: { hi: 'वे सारा के चश्मे हैं। वह उन्हें ढूंढ रही है।', es: 'Esas son las gafas de Sarah. Las está buscando.' },
          audioText: 'Those are Sarah\'s glasses. She is looking for them.',
          audioId: 'en_a1_u01_l04_d1_4',
          voiceId: 'EN_TEACHER_01'
        }
      ]
    }
  ],

  // SECTION 8–15: Practice Exercises
  practiceExercises: [
    {
      id: 'pe_l4_1',
      type: 'multiple_choice',
      prompt: 'Identify the demonstrative for a single object close to you:',
      options: [
        { id: 'o1', text: 'This', isCorrect: true },
        { id: 'o2', text: 'That', isCorrect: false },
        { id: 'o3', text: 'Those', isCorrect: false }
      ],
      explanation: '"This" refers to one item nearby.'
    },
    {
      id: 'pe_l4_2',
      type: 'multiple_choice',
      prompt: 'Identify the demonstrative for multiple objects far from you:',
      options: [
        { id: 'o1', text: 'Those', isCorrect: true },
        { id: 'o2', text: 'These', isCorrect: false },
        { id: 'o3', text: 'This', isCorrect: false }
      ],
      explanation: '"Those" refers to plural items at a distance.'
    },
    {
      id: 'pe_l4_3',
      type: 'multiple_choice',
      prompt: 'Complete the sentence: "____ are my keys on the shelf over there."',
      options: [
        { id: 'o1', text: 'Those', isCorrect: true },
        { id: 'o2', text: 'This', isCorrect: false },
        { id: 'o3', text: 'That', isCorrect: false }
      ],
      explanation: 'Distant and plural takes "Those".'
    },
    {
      id: 'pe_l4_4',
      type: 'multiple_choice',
      prompt: 'Select the correct plural spelling for "watch":',
      options: [
        { id: 'o1', text: 'watches', isCorrect: true },
        { id: 'o2', text: 'watchs', isCorrect: false },
        { id: 'o3', text: 'watchies', isCorrect: false }
      ],
      explanation: 'Words ending in -ch add -es in plural.'
    },
    {
      id: 'pe_l4_5',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the correct demonstrative:',
      sourceSentence: '____ (near, plural) are my new headphones.',
      options: [
        { id: 'o1', text: 'These', isCorrect: true },
        { id: 'o2', text: 'This', isCorrect: false },
        { id: 'o3', text: 'Those', isCorrect: false }
      ],
      targetSentence: 'These',
      correctAnswer: 'These',
      explanation: 'Near + Plural = These.'
    },
    {
      id: 'pe_l4_6',
      type: 'fill_blank',
      prompt: 'Fill in the correct BE verb:',
      sourceSentence: 'What ____ that object on the desk?',
      options: [
        { id: 'o1', text: 'is', isCorrect: true },
        { id: 'o2', text: 'are', isCorrect: false },
        { id: 'o3', text: 'am', isCorrect: false }
      ],
      targetSentence: 'is',
      correctAnswer: 'is',
      explanation: '"That object" is singular, so it takes "is".'
    },
    {
      id: 'pe_l4_7',
      type: 'word_ordering',
      prompt: 'Construct the question asking about the owner of the bag:',
      targetSentence: 'Whose bag is this',
      wordBank: ['Whose', 'bag', 'is', 'this', 'are', 'these', 'my'],
      correctAnswer: 'Whose bag is this',
      explanation: 'Formula: Whose + noun + is + this?'
    },
    {
      id: 'pe_l4_8',
      type: 'word_ordering',
      prompt: 'Construct the statement identifying items nearby:',
      targetSentence: 'These are my passport and keys',
      wordBank: ['These', 'are', 'my', 'passport', 'and', 'keys', 'this', 'is'],
      correctAnswer: 'These are my passport and keys',
      explanation: 'Plural subject: These are + possessive + noun phrase.'
    },
    {
      id: 'pe_l4_9',
      type: 'error_correction',
      prompt: 'Correct the demonstrative agreement error:',
      errorSentence: 'These is my new laptop.',
      options: [
        { id: 'o1', text: 'This is my new laptop.', isCorrect: true },
        { id: 'o2', text: 'These are my new laptop.', isCorrect: false },
        { id: 'o3', text: 'That are my new laptop.', isCorrect: false }
      ],
      explanation: 'Singular "laptop" requires singular "This is".'
    },
    {
      id: 'pe_l4_10',
      type: 'dialogue_completion',
      prompt: 'Select the natural response in the lost item dialogue:',
      dialogueContext: {
        speakerA: 'Receptionist',
        lineA: 'Is this your umbrella?',
        speakerB: 'Ben'
      },
      options: [
        { id: 'o1', text: 'Yes, that is my umbrella. Thank you!', isCorrect: true },
        { id: 'o2', text: 'I am a software engineer.', isCorrect: false },
        { id: 'o3', text: 'No, they are my parents.', isCorrect: false }
      ],
      explanation: 'Direct answer confirming the lost umbrella.'
    },
    {
      id: 'pe_l4_11',
      type: 'listening',
      prompt: 'Listen and identify the object mentioned:',
      audioText: 'Whose water bottle is on the teacher\'s desk?',
      audioId: 'aud_l4_pe_11',
      options: [
        { id: 'o1', text: 'water bottle', isCorrect: true },
        { id: 'o2', text: 'laptop', isCorrect: false },
        { id: 'o3', text: 'glasses', isCorrect: false }
      ],
      explanation: 'The audio asks about the "water bottle".'
    },
    {
      id: 'pe_l4_12',
      type: 'listen_and_type',
      prompt: 'Listen and arrange the tiles to form the sentence:',
      audioText: 'Those are my sunglasses.',
      audioId: 'aud_l4_pe_12',
      targetSentence: 'Those are my sunglasses',
      wordBank: ['Those', 'are', 'my', 'sunglasses', 'This', 'is', 'a'],
      correctAnswer: 'Those are my sunglasses'
    },
    {
      id: 'pe_l4_13',
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'यह मेरी चाबी है।',
      sourceTranslations: { hi: 'यह मेरी चाबी है।', es: 'Esta es mi llave.' },
      targetSentence: 'This is my key',
      wordBank: ['This', 'is', 'my', 'key', 'That', 'keys', 'are'],
      correctAnswer: 'This is my key'
    },
    {
      id: 'pe_l4_14',
      type: 'speaking',
      prompt: 'Speak this demonstrative phrase clearly:',
      targetSentence: 'These books on the desk are mine.',
      audioText: 'These books on the desk are mine.'
    },
    {
      id: 'pe_l4_15',
      type: 'word_ordering',
      prompt: 'Interleaved Practice (L1–L4): Combine demonstrative, family member, and object:',
      targetSentence: 'This laptop is my father\'s and that phone is mine',
      wordBank: ['This', 'laptop', 'is', 'my', 'father\'s', 'and', 'that', 'phone', 'is', 'mine', 'these', 'are'],
      correctAnswer: 'This laptop is my father\'s and that phone is mine'
    }
  ],

  // SECTION 16: Review Exercises
  reviewExercises: [
    {
      id: 're_l4_1',
      type: 'multiple_choice',
      prompt: 'Review: Select the correct sentence for distant plural items:',
      options: [
        { id: 'o1', text: 'Those are our bags.', isCorrect: true },
        { id: 'o2', text: 'That are our bags.', isCorrect: false },
        { id: 'o3', text: 'These is our bags.', isCorrect: false }
      ]
    },
    {
      id: 're_l4_2',
      type: 'fill_blank',
      prompt: 'Review: Complete with "is" or "are":',
      sourceSentence: 'These ____ my sister\'s glasses.',
      options: [
        { id: 'o1', text: 'are', isCorrect: true },
        { id: 'o2', text: 'is', isCorrect: false },
        { id: 'o3', text: 'am', isCorrect: false }
      ],
      targetSentence: 'are',
      correctAnswer: 'are'
    },
    {
      id: 're_l4_3',
      type: 'word_ordering',
      prompt: 'Review: Construct the question asking what an object is:',
      targetSentence: 'What is that on the table',
      wordBank: ['What', 'is', 'that', 'on', 'the', 'table', 'are', 'this'],
      correctAnswer: 'What is that on the table'
    },
    {
      id: 're_l4_4',
      type: 'translation',
      prompt: 'Review Translation: Translate to English:',
      sourceSentence: 'वे मेरी किताबें हैं।',
      sourceTranslations: { hi: 'वे मेरी किताबें हैं।', es: 'Esos son mis libros.' },
      targetSentence: 'Those are my books',
      wordBank: ['Those', 'are', 'my', 'books', 'This', 'is', 'book'],
      correctAnswer: 'Those are my books'
    }
  ],

  // SECTION 17: Assessment Exercises
  assessmentExercises: [
    {
      id: 'ae_l4_1',
      type: 'multiple_choice',
      prompt: 'Mastery Test 1: Choose the correct demonstrative for an object near your hand:',
      options: [
        { id: 'o1', text: 'This pen is blue.', isCorrect: true },
        { id: 'o2', text: 'That pen are blue.', isCorrect: false },
        { id: 'o3', text: 'Those pen is blue.', isCorrect: false }
      ]
    },
    {
      id: 'ae_l4_2',
      type: 'multiple_choice',
      prompt: 'Mastery Test 2: Select the correct plural form:',
      options: [
        { id: 'o1', text: 'three umbrellas', isCorrect: true },
        { id: 'o2', text: 'three umbrellaes', isCorrect: false },
        { id: 'o3', text: 'three umbrellas\'', isCorrect: false }
      ]
    },
    {
      id: 'ae_l4_3',
      type: 'fill_blank',
      prompt: 'Mastery Test 3: Fill the correct demonstrative pronoun:',
      sourceSentence: 'Look over there at the window! ____ is a beautiful bird.',
      options: [
        { id: 'o1', text: 'That', isCorrect: true },
        { id: 'o2', text: 'This', isCorrect: false },
        { id: 'o3', text: 'These', isCorrect: false }
      ],
      targetSentence: 'That',
      correctAnswer: 'That'
    },
    {
      id: 'ae_l4_4',
      type: 'word_ordering',
      prompt: 'Mastery Test 4: Construct "Whose keys are these on the chair":',
      targetSentence: 'Whose keys are these on the chair',
      wordBank: ['Whose', 'keys', 'are', 'these', 'on', 'the', 'chair', 'is', 'this'],
      correctAnswer: 'Whose keys are these on the chair'
    },
    {
      id: 'ae_l4_5',
      type: 'word_ordering',
      prompt: 'Mastery Test 5: Construct "These laptops are for our students":',
      targetSentence: 'These laptops are for our students',
      wordBank: ['These', 'laptops', 'are', 'for', 'our', 'students', 'This', 'is'],
      correctAnswer: 'These laptops are for our students'
    },
    {
      id: 'ae_l4_6',
      type: 'listening',
      prompt: 'Mastery Test 6: Listen and identify what is being confirmed:',
      audioText: 'Is this your wallet, sir?',
      audioId: 'aud_l4_ae_6',
      options: [
        { id: 'o1', text: 'wallet', isCorrect: true },
        { id: 'o2', text: 'passport', isCorrect: false },
        { id: 'o3', text: 'watch', isCorrect: false }
      ]
    },
    {
      id: 'ae_l4_7',
      type: 'listen_and_type',
      prompt: 'Mastery Test 7: Listen and write the sentence:',
      audioText: 'Those watches are very expensive.',
      audioId: 'aud_l4_ae_7',
      targetSentence: 'Those watches are very expensive',
      wordBank: ['Those', 'watches', 'are', 'very', 'expensive', 'This', 'is'],
      correctAnswer: 'Those watches are very expensive'
    },
    {
      id: 'ae_l4_8',
      type: 'translation',
      prompt: 'Mastery Test 8: Translate into English:',
      sourceSentence: 'क्या यह आपका पासपोर्ट है?',
      sourceTranslations: { hi: 'क्या यह आपका पासपोर्ट है?', es: '¿Es este tu pasaporte?' },
      targetSentence: 'Is this your passport',
      wordBank: ['Is', 'this', 'your', 'passport', 'Are', 'these', 'my'],
      correctAnswer: 'Is this your passport'
    },
    {
      id: 'ae_l4_9',
      type: 'speaking',
      prompt: 'Mastery Test 9: Speak this statement clearly:',
      targetSentence: 'These are my keys and that is my bag.',
      audioText: 'These are my keys and that is my bag.'
    },
    {
      id: 'ae_l4_10',
      type: 'error_correction',
      prompt: 'Mastery Test 10: Correct the demonstrative and verb mismatch:',
      errorSentence: 'Those chair is broken.',
      options: [
        { id: 'o1', text: 'That chair is broken.', isCorrect: true },
        { id: 'o2', text: 'Those chair are broken.', isCorrect: false },
        { id: 'o3', text: 'This chairs is broken.', isCorrect: false }
      ],
      explanation: 'Singular noun "chair" requires singular demonstrative "That".'
    }
  ]
};
