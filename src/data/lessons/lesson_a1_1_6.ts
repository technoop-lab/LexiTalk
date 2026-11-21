import { DetailedLessonData } from '../../types';

export const LESSON_A1_1_6_DATA: DetailedLessonData = {
  id: 'lesson_a1_1_6',
  unitId: 'unit_a1_1',
  title: 'Colors, Descriptions & Basic Adjectives',
  cefr: 'A1',
  icon: '🎨',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Colors, Physical Traits & Basic Adjectives',
    description: 'Learn how to describe physical appearance, objects, colors, and sizes using descriptive adjectives with the verb BE and adjective-noun word order.',
    descriptionsByLang: {
      hi: 'रंग, आकार, शारीरिक बनावट और वस्तुओं का वर्णन करना सीखें। Adjective + Noun और Verb BE के सही क्रम का अभ्यास करें।',
      es: 'Aprende a describir la apariencia física, objetos, colores y tamaños usando adjetivos descriptivos con el verbo BE y el orden adjetivo-sustantivo.',
      fr: 'Apprenez à décrire l\'apparence physique, les objets, les couleurs et les tailles avec les adjectifs.',
      de: 'Lernen Sie, Aussehen, Gegenstände, Farben und Größen mit Adjektiven und dem Verb BE zu beschreiben.',
      pt: 'Aprenda a descrever aparência, objetos, cores e tamanhos usando adjetivos descritivos.',
      zh: '学习使用颜色、尺寸和基础形容词描述人物外貌与物品特征。',
      ar: 'تعلم وصف المظهر الجسدي والأشياء والألوان والأحجام باستخدام الصفات وفعل BE.',
      ja: '色、サイズ、外見の特徴を表す基本的な形容詞と、BE動詞を用いた修飾の語順を学びます。',
      ru: 'Научитесь описывать внешность, предметы, цвета и размеры с помощью прилагательных.'
    },
    canDoStatements: [
      'Name 10 common colors and use them to describe personal objects',
      'Use opposite adjective pairs (big/small, new/old, tall/short, hot/cold)',
      'Place adjectives BEFORE nouns (e.g. "a red car", not "a car red")',
      'Use adjectives after the verb BE (e.g. "The building is tall")',
      'Describe people\'s basic physical appearance (tall, short, young, old)',
      'Ask and answer "What color is your bag?" and "Is it new?"'
    ],
    canDoByLang: {
      hi: [
        'सामान्य रंगों के नाम और वस्तुओं का रंग बताना',
        'विलोम विशेषण (big/small, new/old, tall/short) का प्रयोग करना',
        'Adjective को Noun से पहले रखना (उदा. "a red bag")',
        'Verb BE के बाद Adjective का उपयोग (उदा. "The car is blue")'
      ],
      es: [
        'Nombrar colores comunes y describir objetos personales',
        'Usar pares de adjetivos opuestos (big/small, new/old)',
        'Colocar adjetivos antes del sustantivo en inglés',
        'Describir la apariencia física básica de personas'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (20 items)
  vocabulary: [
    {
      id: 'v_color_red',
      word: 'red',
      phonetic: '/red/',
      meaning: 'Having the color of blood or a ripe strawberry',
      translationsByLang: { hi: 'लाल', es: 'rojo', fr: 'rouge', de: 'rot', pt: 'vermelho', zh: '红色', ar: 'أحمر', ja: '赤', ru: 'красный' },
      exampleSentence: 'She has a red notebook.',
      exampleTranslationByLang: { hi: 'उसके पास एक लाल नोटबुक है।', es: 'Ella tiene un cuaderno rojo.' },
      audioText: 'red',
      audioId: 'en_a1_u01_l06_v_red',
      slowAudioId: 'en_a1_u01_l06_v_red_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔴',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_color_blue',
      word: 'blue',
      phonetic: '/bluː/',
      meaning: 'Having the color of the clear sky or ocean',
      translationsByLang: { hi: 'नीला', es: 'azul', fr: 'bleu', de: 'blau', pt: 'azul', zh: '蓝色', ar: 'أزرق', ja: '青', ru: 'синий' },
      exampleSentence: 'My new passport is blue.',
      exampleTranslationByLang: { hi: 'मेरा नया पासपोर्ट नीला है।', es: 'Mi nuevo pasaporte es azul.' },
      audioText: 'blue',
      audioId: 'en_a1_u01_l06_v_blue',
      slowAudioId: 'en_a1_u01_l06_v_blue_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔵',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_color_black',
      word: 'black',
      phonetic: '/blæk/',
      meaning: 'Having the darkest color, like night',
      translationsByLang: { hi: 'काला', es: 'negro', fr: 'noir', de: 'schwarz', pt: 'preto', zh: '黑色', ar: 'أسود', ja: '黒', ru: 'чёрный' },
      exampleSentence: 'He wears a black jacket.',
      exampleTranslationByLang: { hi: 'वह एक काली जैकेट पहनता है।', es: 'Él lleva una chaqueta negra.' },
      audioText: 'black',
      audioId: 'en_a1_u01_l06_v_black',
      slowAudioId: 'en_a1_u01_l06_v_black_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⚫',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_color_white',
      word: 'white',
      phonetic: '/waɪt/',
      meaning: 'Having the color of fresh snow or milk',
      translationsByLang: { hi: 'सफ़ेद', es: 'blanco', fr: 'blanc', de: 'weiß', pt: 'branco', zh: '白色', ar: 'أبيض', ja: '白', ru: 'белый' },
      exampleSentence: 'The paper is clean and white.',
      exampleTranslationByLang: { hi: 'कागज़ साफ और सफेद है।', es: 'El papel está limpio y blanco.' },
      audioText: 'white',
      audioId: 'en_a1_u01_l06_v_white',
      slowAudioId: 'en_a1_u01_l06_v_white_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⚪',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_color_green',
      word: 'green',
      phonetic: '/ɡriːn/',
      meaning: 'Having the color of grass or leaves',
      translationsByLang: { hi: 'हरा', es: 'verde', fr: 'vert', de: 'grün', pt: 'verde', zh: '绿色', ar: 'أخضر', ja: '緑', ru: 'зелёный' },
      exampleSentence: 'They have a green umbrella.',
      exampleTranslationByLang: { hi: 'उनके पास एक हरा छाता है।', es: 'Ellos tienen un paraguas verde.' },
      audioText: 'green',
      audioId: 'en_a1_u01_l06_v_green',
      slowAudioId: 'en_a1_u01_l06_v_green_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🟢',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_color_yellow',
      word: 'yellow',
      phonetic: '/ˈjel.oʊ/',
      meaning: 'Having the color of lemons or sunshine',
      translationsByLang: { hi: 'पीला', es: 'amarillo', fr: 'jaune', de: 'gelb', pt: 'amarelo', zh: '黄色', ar: 'أصفر', ja: '黄色', ru: 'жёлтый' },
      exampleSentence: 'The taxi is bright yellow.',
      exampleTranslationByLang: { hi: 'टैक्सी चमकीली पीली है।', es: 'El taxi es de color amarillo brillante.' },
      audioText: 'yellow',
      audioId: 'en_a1_u01_l06_v_yellow',
      slowAudioId: 'en_a1_u01_l06_v_yellow_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🟡',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adj_big',
      word: 'big',
      phonetic: '/bɪɡ/',
      meaning: 'Large in size or extent',
      translationsByLang: { hi: 'बड़ा', es: 'grande', fr: 'grand', de: 'groß', pt: 'grande', zh: '大的', ar: 'كبير', ja: '大きい', ru: 'большой' },
      exampleSentence: 'London is a big city.',
      exampleTranslationByLang: { hi: 'लंदन एक बड़ा शहर है।', es: 'Londres es una ciudad grande.' },
      audioText: 'big',
      audioId: 'en_a1_u01_l06_v_big',
      slowAudioId: 'en_a1_u01_l06_v_big_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🐘',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adj_small',
      word: 'small',
      phonetic: '/smɔːl/',
      meaning: 'Little in size or amount',
      translationsByLang: { hi: 'छोटा', es: 'pequeño', fr: 'petit', de: 'klein', pt: 'pequeno', zh: '小的', ar: 'صغير', ja: '小さい', ru: 'маленький' },
      exampleSentence: 'I live in a small apartment.',
      exampleTranslationByLang: { hi: 'मैं एक छोटे से अपार्टमेंट में रहता हूँ।', es: 'Vivo en un apartamento pequeño.' },
      audioText: 'small',
      audioId: 'en_a1_u01_l06_v_small',
      slowAudioId: 'en_a1_u01_l06_v_small_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🐭',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adj_new',
      word: 'new',
      phonetic: '/njuː/',
      meaning: 'Recently made, bought, or discovered',
      translationsByLang: { hi: 'नया', es: 'nuevo', fr: 'nouveau', de: 'neu', pt: 'novo', zh: '新的', ar: 'جديد', ja: '新しい', ru: 'новый' },
      exampleSentence: 'This is my new laptop.',
      exampleTranslationByLang: { hi: 'यह मेरा नया लैपटॉप है।', es: 'Este es mi nuevo portátil.' },
      audioText: 'new',
      audioId: 'en_a1_u01_l06_v_new',
      slowAudioId: 'en_a1_u01_l06_v_new_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '✨',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adj_old',
      word: 'old',
      phonetic: '/oʊld/',
      meaning: 'Having existed for a long time; not young or new',
      translationsByLang: { hi: 'पुराना / वृद्ध', es: 'viejo / antiguo', fr: 'vieux / ancien', de: 'alt', pt: 'velho / antigo', zh: '旧的 / 年老的', ar: 'قديم / كبير السن', ja: '古い / 年老いた', ru: 'старый' },
      exampleSentence: 'That is an old building.',
      exampleTranslationByLang: { hi: 'वह एक पुरानी इमारत है।', es: 'Ese es un edificio antiguo.' },
      audioText: 'old',
      audioId: 'en_a1_u01_l06_v_old',
      slowAudioId: 'en_a1_u01_l06_v_old_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏛️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adj_tall',
      word: 'tall',
      phonetic: '/tɔːl/',
      meaning: 'Greater in height than average',
      translationsByLang: { hi: 'लंबा', es: 'alto', fr: 'grand (taille)', de: 'groß / hoch', pt: 'alto', zh: '高的', ar: 'طويل', ja: '背が高い', ru: 'высокий' },
      exampleSentence: 'My brother is very tall.',
      exampleTranslationByLang: { hi: 'मेरा भाई बहुत लंबा है।', es: 'Mi hermano es muy alto.' },
      audioText: 'tall',
      audioId: 'en_a1_u01_l06_v_tall',
      slowAudioId: 'en_a1_u01_l06_v_tall_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🦒',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adj_short',
      word: 'short',
      phonetic: '/ʃɔːrt/',
      meaning: 'Not tall or long in height/length',
      translationsByLang: { hi: 'छोटा / नाटा', es: 'bajo / corto', fr: 'court / petit', de: 'kurz / klein', pt: 'baixo / curto', zh: '矮的 / 短的', ar: 'قصير', ja: '背が低い / 短い', ru: 'низкий / короткий' },
      exampleSentence: 'She has short hair.',
      exampleTranslationByLang: { hi: 'उसके छोटे बाल हैं।', es: 'Ella tiene el pelo corto.' },
      audioText: 'short',
      audioId: 'en_a1_u01_l06_v_short',
      slowAudioId: 'en_a1_u01_l06_v_short_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📏',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adj_young',
      word: 'young',
      phonetic: '/jʌŋ/',
      meaning: 'In the early stage of life; not old',
      translationsByLang: { hi: 'युवा / छोटा', es: 'joven', fr: 'jeune', de: 'jung', pt: 'jovem', zh: '年轻的', ar: 'شاب / صغير السن', ja: '若い', ru: 'молодой' },
      exampleSentence: 'They are young students.',
      exampleTranslationByLang: { hi: 'वे युवा छात्र हैं।', es: 'Son estudiantes jóvenes.' },
      audioText: 'young',
      audioId: 'en_a1_u01_l06_v_young',
      slowAudioId: 'en_a1_u01_l06_v_young_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧒',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adj_good',
      word: 'good',
      phonetic: '/ɡʊd/',
      meaning: 'Of high quality; pleasant or competent',
      translationsByLang: { hi: 'अच्छा', es: 'bueno', fr: 'bon', de: 'gut', pt: 'bom', zh: '好的', ar: 'جيد', ja: '良い', ru: 'хороший' },
      exampleSentence: 'He is a good doctor.',
      exampleTranslationByLang: { hi: 'वह एक अच्छे डॉक्टर हैं।', es: 'Él es un buen médico.' },
      audioText: 'good',
      audioId: 'en_a1_u01_l06_v_good',
      slowAudioId: 'en_a1_u01_l06_v_good_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👍',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adj_bad',
      word: 'bad',
      phonetic: '/bæd/',
      meaning: 'Not good; poor in quality or unpleasant',
      translationsByLang: { hi: 'बुरा / खराब', es: 'malo', fr: 'mauvais', de: 'schlecht', pt: 'ruim / mau', zh: '坏的 / 差的', ar: 'سيء', ja: '悪い', ru: 'плохой' },
      exampleSentence: 'The weather is bad today.',
      exampleTranslationByLang: { hi: 'आज मौसम खराब है।', es: 'El tiempo está malo hoy.' },
      audioText: 'bad',
      audioId: 'en_a1_u01_l06_v_bad',
      slowAudioId: 'en_a1_u01_l06_v_bad_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👎',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adj_hot',
      word: 'hot',
      phonetic: '/hɑːt/',
      meaning: 'Having a high temperature',
      translationsByLang: { hi: 'गर्म', es: 'caliente / caluroso', fr: 'chaud', de: 'heiß', pt: 'quente', zh: '热的', ar: 'حار / ساخن', ja: '熱い / 暑い', ru: 'горячий / жаркий' },
      exampleSentence: 'I like hot coffee in the morning.',
      exampleTranslationByLang: { hi: 'मुझे सुबह गर्म कॉफी पसंद है।', es: 'Me gusta el café caliente por la mañana.' },
      audioText: 'hot',
      audioId: 'en_a1_u01_l06_v_hot',
      slowAudioId: 'en_a1_u01_l06_v_hot_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '☕',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adj_cold',
      word: 'cold',
      phonetic: '/koʊld/',
      meaning: 'Having a low temperature; not warm',
      translationsByLang: { hi: 'ठंडा', es: 'frío', fr: 'froid', de: 'kalt', pt: 'frio', zh: '冷的', ar: 'بارد', ja: '冷たい / 寒い', ru: 'холодный' },
      exampleSentence: 'Canada is very cold in winter.',
      exampleTranslationByLang: { hi: 'सर्दियों में कनाडा बहुत ठंडा होता है।', es: 'Canadá es muy frío en invierno.' },
      audioText: 'cold',
      audioId: 'en_a1_u01_l06_v_cold',
      slowAudioId: 'en_a1_u01_l06_v_cold_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '❄️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adj_fast',
      word: 'fast',
      phonetic: '/fæst/',
      meaning: 'Moving or acting with great speed',
      translationsByLang: { hi: 'तेज़', es: 'rápido', fr: 'rapide', de: 'schnell', pt: 'rápido', zh: '快的', ar: 'سريع', ja: '速い', ru: 'быстрый' },
      exampleSentence: 'That is a fast train.',
      exampleTranslationByLang: { hi: 'वह एक तेज ट्रेन है।', es: 'Ese es un tren rápido.' },
      audioText: 'fast',
      audioId: 'en_a1_u01_l06_v_fast',
      slowAudioId: 'en_a1_u01_l06_v_fast_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚄',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adj_slow',
      word: 'slow',
      phonetic: '/sloʊ/',
      meaning: 'Not moving quickly; taking a long time',
      translationsByLang: { hi: 'धीमा', es: 'lento', fr: 'lent', de: 'langsam', pt: 'lento', zh: '慢的', ar: 'بطيء', ja: '遅い', ru: 'медленный' },
      exampleSentence: 'The bus is very slow today.',
      exampleTranslationByLang: { hi: 'बस आज बहुत धीमी है।', es: 'El autobús va muy lento hoy.' },
      audioText: 'slow',
      audioId: 'en_a1_u01_l06_v_slow',
      slowAudioId: 'en_a1_u01_l06_v_slow_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🐢',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adj_easy',
      word: 'easy',
      phonetic: '/ˈiː.zi/',
      meaning: 'Not difficult; requiring little effort',
      translationsByLang: { hi: 'आसान / सरल', es: 'fácil', fr: 'facile', de: 'einfach / leicht', pt: 'fácil', zh: '容易的', ar: 'سهل', ja: '簡単', ru: 'лёгкий / простой' },
      exampleSentence: 'English grammar is easy to practice.',
      exampleTranslationByLang: { hi: 'अंग्रेजी व्याकरण का अभ्यास करना आसान है।', es: 'La gramática inglesa es fácil de practicar.' },
      audioText: 'easy',
      audioId: 'en_a1_u01_l06_v_easy',
      slowAudioId: 'en_a1_u01_l06_v_easy_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '✅',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks
  expressions: [
    {
      id: 'chunk_what_color',
      text: 'What color is it?',
      meaning: 'Question used to ask about the color of an object',
      translationsByLang: {
        hi: 'यह किस रंग का है?',
        es: '¿De qué color es?',
        fr: 'De quelle couleur est-ce ?',
        de: 'Welche Farbe hat es?'
      },
      audioText: 'What color is it?',
      audioId: 'en_a1_u01_l06_c_what_color',
      context: 'Asking about personal possessions (bags, cars, phones)',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_very_nice',
      text: 'It is very nice.',
      meaning: 'Formulaic phrase to compliment an item or situation',
      translationsByLang: {
        hi: 'यह बहुत अच्छा / सुंदर है।',
        es: 'Es muy bonito / agradable.',
        fr: 'C\'est très beau / agréable.',
        de: 'Es ist sehr schön.'
      },
      audioText: 'It is very nice.',
      audioId: 'en_a1_u01_l06_c_very_nice',
      context: 'Expressing positive feedback on clothes or belongings',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_big_and_tall',
      text: 'He is tall and young.',
      meaning: 'Combining multiple adjectives with "and"',
      translationsByLang: {
        hi: 'वह लंबा और युवा है।',
        es: 'Él es alto y joven.',
        fr: 'Il est grand et jeune.',
        de: 'Er ist groß und jung.'
      },
      audioText: 'He is tall and young.',
      audioId: 'en_a1_u01_l06_c_tall_young',
      context: 'Describing friends or family members',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 5 & 6: Grammar Discovery & Explanation
  grammar: {
    patterns: [
      {
        id: 'g_adj_position',
        title: 'Adjective Position: Before Nouns & After BE',
        rule: 'In English, adjectives NEVER change for plural nouns. They are placed (1) BEFORE a noun (a red car) or (2) AFTER the verb BE (The car is red).',
        formula: 'Pattern 1: [a/an] + [Adjective] + [Noun] | Pattern 2: [Subject] + [am/is/are] + [Adjective]',
        examples: [
          { sentence: 'It is a blue bag.', translation: 'यह एक नीला बैग है। / Es una bolsa azul.', audioText: 'It is a blue bag.', audioId: 'en_a1_u01_l06_g_ex1' },
          { sentence: 'The bag is blue.', translation: 'बैग नीला है। / La bolsa es azul.', audioText: 'The bag is blue.', audioId: 'en_a1_u01_l06_g_ex2' },
          { sentence: 'They are tall doctors.', translation: 'वे लंबे डॉक्टर हैं। / Son médicos altos.', audioText: 'They are tall doctors.', audioId: 'en_a1_u01_l06_g_ex3' }
        ],
        explanationByLang: {
          hi: 'अंग्रेजी में विशेषण (Adjectives) बहुवचन होने पर भी नहीं बदलते (कभी "reds bags" नहीं होता)। Adjective हमेशा संज्ञा से पहले (a red bag) या BE क्रिया के बाद (The bag is red) आता है।',
          es: 'En inglés los adjetivos NO tienen forma plural y van SIEMPRE antes del sustantivo (a blue car) o después del verbo BE (The car is blue).'
        }
      },
      {
        id: 'g_adjective_opposites',
        title: 'Adjective Opposites & Intensifier "Very"',
        rule: 'Use "very" before an adjective to increase its intensity. Common opposites: big/small, hot/cold, new/old, fast/slow.',
        formula: '[Subject] + [BE] + very + [Adjective]',
        examples: [
          { sentence: 'This laptop is very fast.', translation: 'यह लैपटॉप बहुत तेज़ है। / Este portátil es muy rápido.', audioText: 'This laptop is very fast.', audioId: 'en_a1_u01_l06_g_ex4' },
          { sentence: 'The tea is hot, not cold.', translation: 'चाय गर्म है, ठंडी नहीं। / El té está caliente, no frío.', audioText: 'The tea is hot, not cold.', audioId: 'en_a1_u01_l06_g_ex5' }
        ],
        explanationByLang: {
          hi: 'तीव्रता दर्शाने के लिए विशेषण से पहले "very" का प्रयोग करें (उदा. very big, very fast)।',
          es: 'Usa "very" antes de un adjetivo para intensificar su significado (muy grande, muy rápido).'
        }
      }
    ]
  },

  // SECTION 7: Common Mistakes
  commonMistakes: [
    {
      id: 'cm_l6_adj_after_noun',
      incorrect: 'I have a car red.',
      correct: 'I have a red car.',
      whyExplanation: 'In English, descriptive adjectives must come BEFORE the noun, unlike Spanish or French.',
      explanationsByLang: {
        hi: 'अंग्रेजी में Adjective हमेशा Noun से पहले आता है: "a red car", न कि "a car red".',
        es: 'En inglés el adjetivo se coloca ANTES del sustantivo: "a red car", no "a car red".',
        fr: 'En anglais, l\'adjectif se place avant le nom : "a red car".',
        de: 'Im Englischen steht das Adjektiv vor dem Nomen: "a red car".'
      }
    },
    {
      id: 'cm_l6_plural_adjective',
      incorrect: 'These are bigs houses.',
      correct: 'These are big houses.',
      whyExplanation: 'English adjectives never take an "-s" plural ending. Only the noun is pluralized.',
      explanationsByLang: {
        hi: 'अंग्रेजी में Adjective में कभी भी बहुवचन का "-s" नहीं लगता। सही रूप "big houses" है।',
        es: 'Los adjetivos en inglés son invariables y no llevan "-s" en plural: "big houses", no "bigs houses".',
        fr: 'Les adjectifs anglais ne s\'accordent pas au pluriel : "big houses".',
        de: 'Adjektive im Englischen haben keine Pluralendung: "big houses".'
      }
    }
  ],

  // SECTION 11: Dialogue
  dialogues: [
    {
      id: 'd_a1_1_6_lost_bag',
      title: 'Describing a Lost Backpack',
      context: 'At an airport information desk, Alex describes his missing backpack to the officer.',
      characters: [
        { id: 'char_alex', name: 'Alex', role: 'Passenger' },
        { id: 'char_officer', name: 'Officer', role: 'Airport Staff' }
      ],
      turns: [
        {
          id: 'turn_1',
          speakerId: 'char_alex',
          speakerName: 'Alex',
          text: 'Excuse me, my backpack is lost.',
          translationsByLang: { hi: 'माफ़ कीजिए, मेरा बैकपैक खो गया है।', es: 'Disculpe, mi mochila está perdida.' },
          audioText: 'Excuse me, my backpack is lost.',
          audioId: 'en_a1_u01_l06_d01_t1'
        },
        {
          id: 'turn_2',
          speakerId: 'char_officer',
          speakerName: 'Officer',
          text: 'What color is your backpack? Is it big or small?',
          translationsByLang: { hi: 'आपके बैकपैक का रंग क्या है? क्या यह बड़ा है या छोटा?', es: '¿De qué color es su mochila? ¿Es grande o pequeña?' },
          audioText: 'What color is your backpack? Is it big or small?',
          audioId: 'en_a1_u01_l06_d01_t2'
        },
        {
          id: 'turn_3',
          speakerId: 'char_alex',
          speakerName: 'Alex',
          text: 'It is a big black backpack. It is very new.',
          translationsByLang: { hi: 'यह एक बड़ा काला बैकपैक है। यह बिल्कुल नया है।', es: 'Es una mochila negra grande. Es muy nueva.' },
          audioText: 'It is a big black backpack. It is very new.',
          audioId: 'en_a1_u01_l06_d01_t3'
        },
        {
          id: 'turn_4',
          speakerId: 'char_officer',
          speakerName: 'Officer',
          text: 'Is this your black backpack on the desk?',
          translationsByLang: { hi: 'क्या मेज पर रखा यह काला बैकपैक आपका है?', es: '¿Es esta su mochila negra sobre el escritorio?' },
          audioText: 'Is this your black backpack on the desk?',
          audioId: 'en_a1_u01_l06_d01_t4'
        },
        {
          id: 'turn_5',
          speakerId: 'char_alex',
          speakerName: 'Alex',
          text: 'Yes, that is my backpack! Thank you very much.',
          translationsByLang: { hi: 'हाँ, वह मेरा बैकपैक है! आपका बहुत धन्यवाद।', es: '¡Sí, esa es mi mochila! Muchísimas gracias.' },
          audioText: 'Yes, that is my backpack! Thank you very much.',
          audioId: 'en_a1_u01_l06_d01_t5'
        }
      ]
    }
  ],

  // SECTION 8, 9, 10, 12, 13, 14, 15, 16: Practice Exercises
  practiceExercises: [
    {
      id: 'ex_l6_p1',
      lessonId: 'lesson_a1_1_6',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Select the correct adjective-noun word order:',
      sourceSentence: 'He drives a ___ car.',
      options: [
        { id: 'o1', text: 'blue', isCorrect: true },
        { id: 'o2', text: 'blues', isCorrect: false },
        { id: 'o3', text: 'a blue', isCorrect: false }
      ],
      explanation: 'In English, color adjectives come before the noun: "a blue car".'
    },
    {
      id: 'ex_l6_p2',
      lessonId: 'lesson_a1_1_6',
      stage: 8,
      type: 'fill_blank',
      prompt: 'Complete the sentence with the opposite of "big":',
      sourceSentence: 'This room is not big. It is very ___.',
      options: [
        { id: 'o1', text: 'small', isCorrect: true },
        { id: 'o2', text: 'tall', isCorrect: false },
        { id: 'o3', text: 'hot', isCorrect: false }
      ],
      explanation: 'The opposite of big is small.'
    },
    {
      id: 'ex_l6_p3',
      explanation: 'Adjectives come before the noun, and \'and\' joins two adjectives: \'a new and fast laptop\'. \'Old\' does not describe this laptop.',
      lessonId: 'lesson_a1_1_6',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Arrange the words to describe the laptop:',
      targetSentence: 'This is a new and fast laptop',
      wordBank: ['This', 'is', 'a', 'new', 'and', 'fast', 'laptop', 'old']
    },
    {
      id: 'ex_l6_p4',
      lessonId: 'lesson_a1_1_6',
      stage: 9,
      type: 'listening',
      prompt: 'Listen to the color description and choose what you hear:',
      audioText: 'She has a red umbrella',
      options: [
        { id: 'o1', text: 'She has a red umbrella', isCorrect: true },
        { id: 'o2', text: 'She has a blue umbrella', isCorrect: false },
        { id: 'o3', text: 'She has a green umbrella', isCorrect: false }
      ],
      explanation: 'The speaker clearly says "red umbrella".'
    },
    {
      id: 'ex_l6_p5',
      explanation: '\'Old\' describes the building. In this sentence the adjective comes after \'is\' and \'very\' gives the degree.',
      lessonId: 'lesson_a1_1_6',
      stage: 9,
      type: 'listen_and_type',
      prompt: 'Listen and write the phrase exactly:',
      audioText: 'The building is very old',
      targetSentence: 'The building is very old'
    },
    {
      id: 'ex_l6_p6',
      explanation: 'Ask about colour with \'What colour is...?\' The verb \'is\' agrees with the singular \'jacket\'.',
      lessonId: 'lesson_a1_1_6',
      stage: 10,
      type: 'word_ordering',
      prompt: 'Form a question asking for color:',
      targetSentence: 'What color is your jacket',
      wordBank: ['What', 'color', 'is', 'your', 'jacket', 'are', 'who']
    },
    {
      id: 'ex_l6_p7',
      explanation: 'Adjectives after \'is\' describe the subject: \'My new apartment is big and quiet.\' \'Is\' agrees with the singular subject.',
      lessonId: 'lesson_a1_1_6',
      stage: 12,
      type: 'speaking',
      prompt: 'Read this descriptive sentence aloud:',
      targetSentence: 'My new apartment is big and quiet.',
      audioText: 'My new apartment is big and quiet.'
    },
    {
      id: 'ex_l6_p8',
      explanation: 'Adjectives after \'is\' describe a noun: \'My car is blue and fast.\' Hindi: \'मेरी कार नीली और तेज है।\'',
      lessonId: 'lesson_a1_1_6',
      stage: 13,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'मेरी कार नीली और तेज है।',
      sourceTranslations: {
        hi: 'मेरी कार नीली और तेज है।',
        es: 'Mi coche es azul y rápido.'
      },
      targetSentence: 'My car is blue and fast',
      wordBank: ['My', 'car', 'is', 'blue', 'and', 'fast', 'slow', 'your']
    },
    {
      id: 'ex_l6_p9',
      lessonId: 'lesson_a1_1_6',
      stage: 14,
      type: 'fill_blank',
      prompt: 'Interleaved Practice (Combining Lesson 3 Kinship & Lesson 6 Adjectives):',
      sourceSentence: 'My father is ___ tall doctor.',
      options: [
        { id: 'o1', text: 'a', isCorrect: true },
        { id: 'o2', text: 'an', isCorrect: false },
        { id: 'o3', text: 'the', isCorrect: false }
      ],
      explanation: 'Use "a" before consonant sound /t/ in "tall doctor".'
    },
    {
      id: 'ex_l6_p10',
      lessonId: 'lesson_a1_1_6',
      stage: 15,
      type: 'error_correction',
      prompt: 'Correct the error in adjective placement:',
      sourceSentence: 'She bought a phone black.',
      options: [
        { id: 'o1', text: 'She bought a black phone.', isCorrect: true },
        { id: 'o2', text: 'She bought blacks phone.', isCorrect: false },
        { id: 'o3', text: 'She bought a phone blacks.', isCorrect: false }
      ],
      explanation: 'Adjectives must precede the noun: "a black phone".'
    },
    {
      id: 'ex_l6_p11',
      lessonId: 'lesson_a1_1_6',
      stage: 16,
      type: 'dialogue_completion',
      prompt: 'Choose the natural response to the officer:',
      sourceSentence: 'Officer: "What color is your suitcase?" -> Traveler: "___"',
      options: [
        { id: 'o1', text: 'It is dark green and very big.', isCorrect: true },
        { id: 'o2', text: 'I am from Canada.', isCorrect: false },
        { id: 'o3', text: 'He is my brother.', isCorrect: false }
      ],
      explanation: 'The question asks for the color of the suitcase.'
    },
    {
      id: 'ex_l6_p12',
      lessonId: 'lesson_a1_1_6',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Choose the opposite of "hot":',
      sourceSentence: 'The water is not hot. It is ___.',
      options: [
        { id: 'o1', text: 'cold', isCorrect: true },
        { id: 'o2', text: 'fast', isCorrect: false },
        { id: 'o3', text: 'old', isCorrect: false }
      ],
      explanation: 'Cold is the opposite of hot.'
    },
    {
      id: 'ex_l6_p13',
      lessonId: 'lesson_a1_1_6',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Choose the correct sentence:',
      sourceSentence: 'Describing plural objects:',
      options: [
        { id: 'o1', text: 'These are yellow pencils.', isCorrect: true },
        { id: 'o2', text: 'These are yellows pencils.', isCorrect: false },
        { id: 'o3', text: 'These pencils is yellow.', isCorrect: false }
      ],
      explanation: 'Adjectives do not take plural -s in English.'
    },
    {
      id: 'ex_l6_p14',
      explanation: '\'Old and wise\' describe the grandfather. \'Young\' would contradict \'old\', so it does not fit.',
      lessonId: 'lesson_a1_1_6',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the sentence:',
      targetSentence: 'Her grandfather is very old and wise',
      wordBank: ['Her', 'grandfather', 'is', 'very', 'old', 'and', 'wise', 'young']
    },
    {
      id: 'ex_l6_p15',
      explanation: '\'Hot and sunny\' describe the weather. Use \'is\' with the singular \'weather\'.',
      lessonId: 'lesson_a1_1_6',
      stage: 12,
      type: 'speaking',
      prompt: 'Say this sentence clearly into your microphone:',
      targetSentence: 'The weather today is hot and sunny.',
      audioText: 'The weather today is hot and sunny.'
    }
  ],

  // SECTION 16: Review Exercises
  reviewExercises: [
    {
      id: 'ex_l6_rev1',
      lessonId: 'lesson_a1_1_6',
      stage: 16,
      type: 'multiple_choice',
      prompt: 'Which sentence is grammatically correct?',
      sourceSentence: 'Adjective position test:',
      options: [
        { id: 'o1', text: 'This is a fast train.', isCorrect: true },
        { id: 'o2', text: 'This is a train fast.', isCorrect: false },
        { id: 'o3', text: 'This is train a fast.', isCorrect: false }
      ],
      explanation: 'Adjectives come before the noun: "a fast train".'
    },
    {
      id: 'ex_l6_rev2',
      lessonId: 'lesson_a1_1_6',
      stage: 16,
      type: 'fill_blank',
      prompt: 'Fill in the blank with the correct adjective:',
      sourceSentence: 'The math problem is not difficult. It is very ___.',
      options: [
        { id: 'o1', text: 'easy', isCorrect: true },
        { id: 'o2', text: 'slow', isCorrect: false },
        { id: 'o3', text: 'black', isCorrect: false }
      ],
      explanation: 'Easy means not difficult.'
    },
    {
      id: 'ex_l6_rev3',
      explanation: 'In a noun phrase, size comes before colour: \'a small white car\'. \'Big\' would repeat the size.',
      lessonId: 'lesson_a1_1_6',
      stage: 16,
      type: 'word_ordering',
      prompt: 'Reorder the words to form a correct sentence:',
      targetSentence: 'My mother has a small white car',
      wordBank: ['My', 'mother', 'has', 'a', 'small', 'white', 'car', 'big']
    },
    {
      id: 'ex_l6_rev4',
      explanation: '\'They\' is plural, so use \'are\': \'They are young and happy.\' Hindi: \'वे युवा और खुश हैं।\'',
      lessonId: 'lesson_a1_1_6',
      stage: 16,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'वे युवा और खुश हैं।',
      sourceTranslations: { hi: 'वे युवा और खुश हैं।', es: 'Ellos son jóvenes y felices.' },
      targetSentence: 'They are young and happy',
      wordBank: ['They', 'are', 'young', 'and', 'happy', 'is', 'we']
    }
  ],

  // SECTION 17: Assessment Exercises (10 items)
  assessmentExercises: [
    {
      id: 'ex_l6_a1',
      lessonId: 'lesson_a1_1_6',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'What is the opposite of "slow"?',
      sourceSentence: 'Opposite vocabulary check:',
      options: [
        { id: 'o1', text: 'fast', isCorrect: true },
        { id: 'o2', text: 'cold', isCorrect: false },
        { id: 'o3', text: 'short', isCorrect: false },
        { id: 'o4', text: 'small', isCorrect: false }
      ],
      explanation: 'Fast is the direct antonym of slow.'
    },
    {
      id: 'ex_l6_a2',
      lessonId: 'lesson_a1_1_6',
      stage: 17,
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct color word:',
      sourceSentence: 'The night sky is dark and ___.',
      options: [
        { id: 'o1', text: 'black', isCorrect: true },
        { id: 'o2', text: 'yellow', isCorrect: false },
        { id: 'o3', text: 'white', isCorrect: false },
        { id: 'o4', text: 'red', isCorrect: false }
      ],
      explanation: 'Black describes dark night skies.'
    },
    {
      id: 'ex_l6_a3',
      explanation: 'Adjectives come before the noun: \'a tall and strong man\'. \'He\' matches \'is\'.',
      lessonId: 'lesson_a1_1_6',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Build the descriptive sentence:',
      targetSentence: 'He is a tall and strong man',
      wordBank: ['He', 'is', 'a', 'tall', 'and', 'strong', 'man', 'she']
    },
    {
      id: 'ex_l6_a4',
      lessonId: 'lesson_a1_1_6',
      stage: 17,
      type: 'error_correction',
      prompt: 'Fix the plural adjective mistake:',
      sourceSentence: 'We have bigs apartments in Madrid.',
      options: [
        { id: 'o1', text: 'We have big apartments in Madrid.', isCorrect: true },
        { id: 'o2', text: 'We have bigs apartment in Madrid.', isCorrect: false },
        { id: 'o3', text: 'We have a bigs apartments in Madrid.', isCorrect: false }
      ],
      explanation: 'Adjectives never take plural "-s".'
    },
    {
      id: 'ex_l6_a5',
      lessonId: 'lesson_a1_1_6',
      stage: 17,
      type: 'listening',
      prompt: 'Listen and select the exact sentence:',
      audioText: 'The new hotel is very big',
      options: [
        { id: 'o1', text: 'The new hotel is very big', isCorrect: true },
        { id: 'o2', text: 'The old hotel is very big', isCorrect: false },
        { id: 'o3', text: 'The new hotel is very small', isCorrect: false }
      ],
      explanation: 'The audio clearly states "The new hotel is very big".'
    },
    {
      id: 'ex_l6_a6',
      explanation: 'When several adjectives come before a noun, put size before colour: \'a small red apple\'.',
      lessonId: 'lesson_a1_1_6',
      stage: 17,
      type: 'listen_and_type',
      prompt: 'Listen and type the sentence accurately:',
      audioText: 'It is a small red apple',
      targetSentence: 'It is a small red apple'
    },
    {
      id: 'ex_l6_a7',
      lessonId: 'lesson_a1_1_6',
      stage: 17,
      type: 'dialogue_completion',
      prompt: 'Select the best reply to the question:',
      sourceSentence: 'Question: "Is your coffee hot?" -> Reply: "___"',
      options: [
        { id: 'o1', text: 'Yes, it is very hot and fresh.', isCorrect: true },
        { id: 'o2', text: 'I am thirty years old.', isCorrect: false },
        { id: 'o3', text: 'These are my keys.', isCorrect: false }
      ],
      explanation: 'The reply directly answers about the coffee temperature.'
    },
    {
      id: 'ex_l6_a8',
      explanation: 'Adjectives after \'is\' describe the room: \'This room is clean and new.\' Hindi: \'यह कमरा साफ और नया है।\'',
      lessonId: 'lesson_a1_1_6',
      stage: 17,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'यह कमरा साफ और नया है।',
      sourceTranslations: { hi: 'यह कमरा साफ और नया है।', es: 'Esta habitación está limpia y nueva.' },
      targetSentence: 'This room is clean and new',
      wordBank: ['This', 'room', 'is', 'clean', 'and', 'new', 'old', 'that']
    },
    {
      id: 'ex_l6_a9',
      lessonId: 'lesson_a1_1_6',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Identify the correct adjective placement:',
      sourceSentence: 'Describing an object:',
      options: [
        { id: 'o1', text: 'She has a green umbrella.', isCorrect: true },
        { id: 'o2', text: 'She has an umbrella green.', isCorrect: false },
        { id: 'o3', text: 'She has green an umbrella.', isCorrect: false }
      ],
      explanation: 'Article + Adjective + Noun: "a green umbrella".'
    },
    {
      id: 'ex_l6_a10',
      explanation: 'Plural \'shoes\' takes \'are\', and \'those\' points to things at a distance: \'What colour are those new shoes?\'',
      lessonId: 'lesson_a1_1_6',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the final question:',
      targetSentence: 'What color are those new shoes',
      wordBank: ['What', 'color', 'are', 'those', 'new', 'shoes', 'is', 'that']
    }
  ]
};
