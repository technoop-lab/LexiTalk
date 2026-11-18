import { DetailedLessonData } from '../../types';

export const LESSON_A1_1_13_DATA: DetailedLessonData = {
  id: 'lesson_a1_1_13',
  unitId: 'unit_a1_1',
  title: 'Food, Drinks & Ordering at a Café (Some / Any / A / An)',
  cefr: 'A1',
  icon: '☕',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Food & Drink Vocabulary, Countable/Uncountable & Café Ordering',
    description: 'Learn food and beverage vocabulary, understand the distinction between countable and uncountable nouns, master determiners (a/an, some, any), and practice polite ordering phrases at a café or restaurant.',
    descriptionsByLang: {
      hi: 'खाने-पीने की वस्तुओं (Food & Drinks) के नाम सीखें, गणनीय (Countable) और अगणनीय (Uncountable) संज्ञाओं में अंतर समझें, "a/an", "some", "any" का सही प्रयोग करें, और कैफ़े या रेस्तरां में विनम्रता से ऑर्डर करना सीखें।',
      es: 'Aprende vocabulario de comida y bebida, la distinción entre sustantivos contables e incontables, el uso de determinantes (a/an, some, any) y cómo pedir cortésmente en una cafetería o restaurante.',
      fr: 'Apprenez le vocabulaire de la nourriture et des boissons, les noms dénombrables/indénombrables et comment commander au café (some/any/a/an).',
      de: 'Lernen Sie Essen und Getränke, zählbare und unzählbare Nomen, some/any/a/an und wie man im Café bestellt.',
      pt: 'Aprenda vocabulário de comida e bebida, substantivos contáveis/incontáveis, some/any/a/an e como fazer pedidos em um café.',
      zh: '学习食物与饮料词汇、可数与不可数名词基础、限定词（a/an、some、any）的用法，以及在咖啡馆/餐厅礼貌点餐的表达。',
      ar: 'تعلم مفردات الطعام والشراب، والفرق بين الأسماء المعدودة وغير المعدودة، واستخدام some و any و a/an وكيفية الطلب في المقهى.',
      ja: '食べ物・飲み物の語彙、可算名詞・不可算名詞の区別、冠詞・数量詞（a/an, some, any）の用法、カフェでの丁寧な注文表現を学びます。',
      ru: 'Изучите лексику еды и напитков, разницу между исчисляемыми и неисчисляемыми существительными, употребление a/an, some, any и фразы для заказа в кафе.'
    },
    canDoStatements: [
      'Identify and name common foods and drinks (coffee, tea, water, juice, milk, bread, cheese, egg, sandwich, apple)',
      'Distinguish countable nouns (an apple, two sandwiches) from uncountable nouns (water, sugar, bread)',
      'Use "a/an" with singular countable nouns, "some" in positive sentences and requests, and "any" in negative sentences and questions',
      'Order food politely at a café using "Can I have... please?" and "I would like..."',
      'Ask for the bill: "Can we have the bill, please?"'
    ],
    canDoByLang: {
      hi: [
        'सामान्य खान-पान की वस्तुओं (coffee, tea, bread, cheese, apple, egg) के नाम जानना',
        'Countable (an apple, two eggs) और Uncountable (water, milk, sugar) का अंतर समझना',
        'Some और any का सही प्रयोग (पॉजिटिव में some, नेगेटिव/प्रश्न में any)',
        'कैफे में विनम्रतापूर्वक ऑर्डर देना ("Can I have a coffee, please?")'
      ],
      es: [
        'Nombrar alimentos y bebidas comunes',
        'Distinguir entre contables e incontables usando a/an, some y any',
        'Pedir educadamente en una cafetería ("Can I have... please?")'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (20 items)
  vocabulary: [
    {
      id: 'v_fd_coffee',
      word: 'coffee',
      phonetic: '/ˈkɑː.fi/',
      meaning: 'A hot beverage brewed from roasted coffee beans (uncountable)',
      translationsByLang: { hi: 'कॉफी', es: 'café', fr: 'café', de: 'Kaffee', pt: 'café', zh: '咖啡', ar: 'قهوة', ja: 'コーヒー', ru: 'кофе' },
      exampleSentence: 'I drink hot coffee with milk.',
      exampleTranslationByLang: { hi: 'मैं दूध वाली गर्म कॉफी पीता हूँ।', es: 'Tomo café caliente con leche.' },
      audioText: 'coffee',
      audioId: 'en_a1_u01_l13_v_coffee',
      slowAudioId: 'en_a1_u01_l13_v_coffee_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '☕',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_fd_tea',
      word: 'tea',
      phonetic: '/tiː/',
      meaning: 'A hot beverage made by infusing dried tea leaves in boiling water',
      translationsByLang: { hi: 'चाय', es: 'té', fr: 'thé', de: 'Tee', pt: 'chá', zh: '茶', ar: 'شاي', ja: 'お茶 / 紅茶', ru: 'чай' },
      exampleSentence: 'Would you like some black tea or green tea?',
      exampleTranslationByLang: { hi: 'क्या आप ब्लैक टी लेंगे या ग्रीन टी?', es: '¿Te gustaría té negro o té verde?' },
      audioText: 'tea',
      audioId: 'en_a1_u01_l13_v_tea',
      slowAudioId: 'en_a1_u01_l13_v_tea_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍵',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_fd_water',
      word: 'water',
      phonetic: '/ˈwɑː.t̬ɚ/',
      meaning: 'Clear colorless liquid essential for life (uncountable)',
      translationsByLang: { hi: 'पानी / जल', es: 'agua', fr: 'eau', de: 'Wasser', pt: 'água', zh: '水', ar: 'ماء', ja: '水', ru: 'вода' },
      exampleSentence: 'Can I have a glass of cold water, please?',
      exampleTranslationByLang: { hi: 'क्या मुझे एक गिलास ठंडा पानी मिल सकता है, कृपया?', es: '¿Me da un vaso de agua fría, por favor?' },
      audioText: 'water',
      audioId: 'en_a1_u01_l13_v_water',
      slowAudioId: 'en_a1_u01_l13_v_water_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💧',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_fd_juice',
      word: 'juice',
      phonetic: '/dʒuːs/',
      meaning: 'The natural liquid contained in fruit or vegetables',
      translationsByLang: { hi: 'जूस / रस', es: 'zumo / jugo', fr: 'jus', de: 'Saft', pt: 'suco', zh: '果汁', ar: 'عصير', ja: 'ジュース', ru: 'сок' },
      exampleSentence: 'I have fresh orange juice for breakfast.',
      exampleTranslationByLang: { hi: 'मैं नाश्ते में ताज़ा संतरे का जूस लेता हूँ।', es: 'Tomo zumo de naranja fresco para desayunar.' },
      audioText: 'juice',
      audioId: 'en_a1_u01_l13_v_juice',
      slowAudioId: 'en_a1_u01_l13_v_juice_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧃',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_fd_milk',
      word: 'milk',
      phonetic: '/mɪlk/',
      meaning: 'White liquid food produced by cows (uncountable)',
      translationsByLang: { hi: 'दूध', es: 'leche', fr: 'lait', de: 'Milch', pt: 'leite', zh: '牛奶', ar: 'حليب', ja: '牛乳 / ミルク', ru: 'молоко' },
      exampleSentence: 'Do you put milk in your coffee?',
      exampleTranslationByLang: { hi: 'क्या आप अपनी कॉफी में दूध डालते हैं?', es: '¿Le pones leche a tu café?' },
      audioText: 'milk',
      audioId: 'en_a1_u01_l13_v_milk',
      slowAudioId: 'en_a1_u01_l13_v_milk_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥛',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_fd_bread',
      word: 'bread',
      phonetic: '/bred/',
      meaning: 'Food made of baked flour and water dough (uncountable in English)',
      translationsByLang: { hi: 'ब्रेड / डबलरोटी', es: 'pan', fr: 'pain', de: 'Brot', pt: 'pão', zh: '面包', ar: 'خبز', ja: 'パン', ru: 'хлеб' },
      exampleSentence: 'We have fresh bread and butter.',
      exampleTranslationByLang: { hi: 'हमारे पास ताज़ी ब्रेड और मक्खन है।', es: 'Tenemos pan fresco y mantequilla.' },
      audioText: 'bread',
      audioId: 'en_a1_u01_l13_v_bread',
      slowAudioId: 'en_a1_u01_l13_v_bread_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍞',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_fd_cheese',
      word: 'cheese',
      phonetic: '/tʃiːz/',
      meaning: 'Food made from pressed milk curds (uncountable)',
      translationsByLang: { hi: 'पनीर / चीज़', es: 'queso', fr: 'fromage', de: 'Käse', pt: 'queijo', zh: '奶酪 / 芝士', ar: 'جبن', ja: 'チーズ', ru: 'сыр' },
      exampleSentence: 'I like a sandwich with tomato and cheese.',
      exampleTranslationByLang: { hi: 'मुझे टमाटर और पनीर वाला सैंडविच पसंद है।', es: 'Me gusta el sándwich con tomate y queso.' },
      audioText: 'cheese',
      audioId: 'en_a1_u01_l13_v_cheese',
      slowAudioId: 'en_a1_u01_l13_v_cheese_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧀',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_fd_egg',
      word: 'egg',
      phonetic: '/eɡ/',
      meaning: 'Oval reproductive body laid by birds, used as food (countable)',
      translationsByLang: { hi: 'अंडा', es: 'huevo', fr: 'œuf', de: 'Ei', pt: 'ovo', zh: '鸡蛋', ar: 'بيض', ja: '卵', ru: 'яйцо' },
      exampleSentence: 'I eat two boiled eggs every morning.',
      exampleTranslationByLang: { hi: 'मैं हर सुबह दो उबले अंडे खाता हूँ।', es: 'Como dos huevos cocidos cada mañana.' },
      audioText: 'egg',
      audioId: 'en_a1_u01_l13_v_egg',
      slowAudioId: 'en_a1_u01_l13_v_egg_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥚',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_fd_apple',
      word: 'apple',
      phonetic: '/ˈæp.əl/',
      meaning: 'Round sweet fruit with red or green skin (countable: an apple)',
      translationsByLang: { hi: 'सेब', es: 'manzana', fr: 'pomme', de: 'Apfel', pt: 'maçã', zh: '苹果', ar: 'تفاحة', ja: 'りんご', ru: 'яблоко' },
      exampleSentence: 'She eats an apple after lunch.',
      exampleTranslationByLang: { hi: 'वह लंच के बाद एक सेब खाती है।', es: 'Ella come una manzana después del almuerzo.' },
      audioText: 'apple',
      audioId: 'en_a1_u01_l13_v_apple',
      slowAudioId: 'en_a1_u01_l13_v_apple_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍎',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_fd_sandwich',
      word: 'sandwich',
      phonetic: '/ˈsæn.wɪtʃ/',
      meaning: 'Two slices of bread with a filling between them (countable)',
      translationsByLang: { hi: 'सैंडविच', es: 'sándwich / bocadillo', fr: 'sandwich', de: 'Sandwich / belegtes Brot', pt: 'sanduíche', zh: '三明治', ar: 'شطيرة', ja: 'サンドイッチ', ru: 'сэндвич / бутерброд' },
      exampleSentence: 'I order a chicken sandwich and a bottle of water.',
      exampleTranslationByLang: { hi: 'मैं एक चिकन सैंडविच और पानी की एक बोतल ऑर्डर करता हूँ।', es: 'Pido un sándwich de pollo y una botella de agua.' },
      audioText: 'sandwich',
      audioId: 'en_a1_u01_l13_v_sandwich',
      slowAudioId: 'en_a1_u01_l13_v_sandwich_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥪',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_fd_sugar',
      word: 'sugar',
      phonetic: '/ˈʃʊɡ.ɚ/',
      meaning: 'Sweet crystalline substance (uncountable)',
      translationsByLang: { hi: 'चीनी / शक्कर', es: 'azúcar', fr: 'sucre', de: 'Zucker', pt: 'açúcar', zh: '糖', ar: 'سكر', ja: '砂糖', ru: 'сахар' },
      exampleSentence: 'Do you take sugar in your tea?',
      exampleTranslationByLang: { hi: 'क्या आप अपनी चाय में चीनी लेते हैं?', es: '¿Tomas azúcar en el té?' },
      audioText: 'sugar',
      audioId: 'en_a1_u01_l13_v_sugar',
      slowAudioId: 'en_a1_u01_l13_v_sugar_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧂',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_fd_butter',
      word: 'butter',
      phonetic: '/ˈbʌt̬.ɚ/',
      meaning: 'Yellow fat food substance made from churned milk (uncountable)',
      translationsByLang: { hi: 'मक्खन', es: 'mantequilla', fr: 'beurre', de: 'Butter', pt: 'manteiga', zh: '黄油', ar: 'زبدة', ja: 'バター', ru: 'масло' },
      exampleSentence: 'I put some butter on the warm bread.',
      exampleTranslationByLang: { hi: 'मैं गर्म ब्रेड पर थोड़ा मक्खन लगाता हूँ।', es: 'Pongo un poco de mantequilla en el pan caliente.' },
      audioText: 'butter',
      audioId: 'en_a1_u01_l13_v_butter',
      slowAudioId: 'en_a1_u01_l13_v_butter_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧈',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_fd_menu',
      word: 'menu',
      phonetic: '/ˈmen.juː/',
      meaning: 'A printed list of food and drinks available at a restaurant',
      translationsByLang: { hi: 'मेनू (व्यंजन सूची)', es: 'menú / carta', fr: 'menu / carte', de: 'Speisekarte / Menü', pt: 'cardápio / menu', zh: '菜单', ar: 'قائمة الطعام', ja: 'メニュー', ru: 'меню' },
      exampleSentence: 'Could we see the breakfast menu, please?',
      exampleTranslationByLang: { hi: 'क्या हम नाश्ते का मेनू देख सकते हैं, कृपया?', es: '¿Podríamos ver el menú de desayuno, por favor?' },
      audioText: 'menu',
      audioId: 'en_a1_u01_l13_v_menu',
      slowAudioId: 'en_a1_u01_l13_v_menu_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📜',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_fd_bill',
      word: 'bill',
      phonetic: '/bɪl/',
      meaning: 'A statement of charges for food or drinks consumed (also called check in US)',
      translationsByLang: { hi: 'बिल / भुगतान पर्ची', es: 'cuenta / factura', fr: 'addition / facture', de: 'Rechnung', pt: 'conta', zh: '账单', ar: 'فاتورة / الحساب', ja: 'お会計 / 伝票', ru: 'счёт' },
      exampleSentence: 'Can we have the bill, please?',
      exampleTranslationByLang: { hi: 'क्या हमें बिल मिल सकता है, कृपया?', es: '¿Nos trae la cuenta, por favor?' },
      audioText: 'bill',
      audioId: 'en_a1_u01_l13_v_bill',
      slowAudioId: 'en_a1_u01_l13_v_bill_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧾',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_fd_waiter',
      word: 'waiter / waitress',
      phonetic: '/ˈweɪ.t̬ɚ / ˈweɪ.trəs/',
      meaning: 'A person who serves food and drinks in a restaurant',
      translationsByLang: { hi: 'वेटर / बैरा', es: 'camarero / camarera', fr: 'serveur / serveuse', de: 'Kellner / Kellnerin', pt: 'garçom / garçonete', zh: '服务员', ar: 'نادل / نادلة', ja: 'ウェイター / ウェイトレス', ru: 'официант / официантка' },
      exampleSentence: 'The waiter is very polite and friendly.',
      exampleTranslationByLang: { hi: 'वेटर बहुत विनम्र और मिलनसार है।', es: 'El camarero es muy educado y amable.' },
      audioText: 'waiter and waitress',
      audioId: 'en_a1_u01_l13_v_waiter',
      slowAudioId: 'en_a1_u01_l13_v_waiter_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧑‍🍳',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_det_some',
      word: 'some',
      phonetic: '/sʌm/',
      meaning: 'An unspecified amount or number (used in positive statements and polite requests)',
      translationsByLang: { hi: 'कुछ / थोड़ा', es: 'un poco de / algunos/as', fr: 'du / de la / des / un peu de', de: 'etwas / einige', pt: 'algum / alguma / alguns', zh: '一些 / 些许', ar: 'بعض', ja: 'いくつかの / 少しの', ru: 'немного / несколько' },
      exampleSentence: 'I would like some orange juice, please.',
      exampleTranslationByLang: { hi: 'मुझे थोड़ा संतरे का जूस चाहिए, कृपया।', es: 'Me gustaría un poco de zumo de naranja, por favor.' },
      audioText: 'some',
      audioId: 'en_a1_u01_l13_v_some',
      slowAudioId: 'en_a1_u01_l13_v_some_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '✨',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_det_any',
      word: 'any',
      phonetic: '/ˈen.i/',
      meaning: 'Used in negative statements (none) and standard questions (at all)',
      translationsByLang: { hi: 'कोई / कुछ (नकारात्मक/प्रश्न में)', es: 'nada de / ningún / algún', fr: 'aucun / de (négatif/interrogatif)', de: 'irgendein / kein (bei Verneinung)', pt: 'nenhum / alguma', zh: '任何 / 一些（用于否定或疑问）', ar: 'أي', ja: '（否定文で）何も〜ない / （疑問文で）何か', ru: 'какой-нибудь / никакой' },
      exampleSentence: 'We don\'t have any sugar at home.',
      exampleTranslationByLang: { hi: 'हमारे घर में बिल्कुल चीनी नहीं है।', es: 'No tenemos nada de azúcar en casa.' },
      audioText: 'any',
      audioId: 'en_a1_u01_l13_v_any',
      slowAudioId: 'en_a1_u01_l13_v_any_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '❓',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_fd_cup_of',
      word: 'a cup of',
      phonetic: '/ə kʌp ʌv/',
      meaning: 'A container measure used for hot drinks (tea, coffee)',
      translationsByLang: { hi: 'एक कप', es: 'una taza de', fr: 'une tasse de', de: 'eine Tasse', pt: 'uma xícara de', zh: '一杯（热饮）', ar: 'كوب من', ja: '一杯の（カップ）', ru: 'чашка' },
      exampleSentence: 'Can I have a cup of black coffee, please?',
      exampleTranslationByLang: { hi: 'क्या मुझे एक कप ब्लैक कॉफी मिल सकती है, कृपया?', es: '¿Me da una taza de café negro, por favor?' },
      audioText: 'a cup of',
      audioId: 'en_a1_u01_l13_v_cup_of',
      slowAudioId: 'en_a1_u01_l13_v_cup_of_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '☕',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_fd_glass_of',
      word: 'a glass of',
      phonetic: '/ə ɡlæs ʌv/',
      meaning: 'A container measure used for cold drinks (water, juice, milk)',
      translationsByLang: { hi: 'एक गिलास', es: 'un vaso de', fr: 'un verre de', de: 'ein Glas', pt: 'um copo de', zh: '一杯（玻璃杯/冷饮）', ar: 'كأس من', ja: 'グラス一杯の', ru: 'стакан' },
      exampleSentence: 'I drink a glass of water every morning.',
      exampleTranslationByLang: { hi: 'मैं हर सुबह एक गिलास पानी पीता हूँ।', es: 'Bebo un vaso de agua cada mañana.' },
      audioText: 'a glass of',
      audioId: 'en_a1_u01_l13_v_glass_of',
      slowAudioId: 'en_a1_u01_l13_v_glass_of_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥛',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_fd_order',
      word: 'order',
      phonetic: '/ˈɔːr.dɚ/',
      meaning: 'To request food or drinks to be served or delivered',
      translationsByLang: { hi: 'ऑर्डर करना / मंगाना', es: 'pedir / ordenar', fr: 'commander', de: 'bestellen', pt: 'pedir / encomendar', zh: '点餐 / 订购', ar: 'يطلب', ja: '注文する', ru: 'заказывать' },
      exampleSentence: 'Are you ready to order?',
      exampleTranslationByLang: { hi: 'क्या आप ऑर्डर करने के लिए तैयार हैं?', es: '¿Están listos para pedir?' },
      audioText: 'order',
      audioId: 'en_a1_u01_l13_v_order',
      slowAudioId: 'en_a1_u01_l13_v_order_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📋',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks
  expressions: [
    {
      id: 'chunk_can_i_have_please',
      text: 'Can I have a coffee, please?',
      meaning: 'Polite standard formula for ordering at a café',
      translationsByLang: {
        hi: 'क्या मुझे एक कॉफी मिल सकती है, कृपया?',
        es: '¿Me da un café, por favor?',
        fr: 'Puis-je avoir un café, s\'il vous plaît ?',
        de: 'Kann ich bitte einen Kaffee haben?'
      },
      audioText: 'Can I have a coffee, please?',
      audioId: 'en_a1_u01_l13_c_can_i_have',
      context: 'Ordering drinks and food at counters and tables',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_would_you_like_some',
      text: 'Would you like some water?',
      meaning: 'Polite offer of food or drink',
      translationsByLang: {
        hi: 'क्या आप थोड़ा पानी लेना चाहेंगे?',
        es: '¿Te gustaría un poco de agua?',
        fr: 'Aimeriez-vous de l\'eau ?',
        de: 'Möchten Sie etwas Wasser?'
      },
      audioText: 'Would you like some water?',
      audioId: 'en_a1_u01_l13_c_would_like_some',
      context: 'Hospitality and dining offers',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_the_bill_please',
      text: 'The bill, please.',
      meaning: 'Polite request to pay for the meal or drinks',
      translationsByLang: {
        hi: 'बिल दीजिए, कृपया।',
        es: 'La cuenta, por favor.',
        fr: 'L\'addition, s\'il vous plaît.',
        de: 'Die Rechnung, bitte.'
      },
      audioText: 'The bill, please.',
      audioId: 'en_a1_u01_l13_c_bill_please',
      context: 'Concluding a meal at a restaurant or café',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 5 & 6: Grammar
  grammar: {
    patterns: [
      {
        id: 'g_countable_vs_uncountable',
        title: 'Countable vs. Uncountable Nouns (A/An vs. Some)',
        rule: 'Countable nouns can be counted individually (an apple, two sandwiches). Uncountable nouns are liquids, grains, or concepts (water, milk, bread, cheese, sugar) and do NOT take "a/an" or plural "-s". Instead, use "some" or a container (a glass of water, a piece of cheese).',
        formula: 'Countable: a / an + Singular Noun | Uncountable: some + Mass Noun / a cup of / a glass of',
        examples: [
          { sentence: 'I eat an egg and some bread for breakfast.', translation: 'मैं नाश्ते में एक अंडा और थोड़ी ब्रेड खाता हूँ। / Como un huevo y algo de pan para desayunar.', audioText: 'I eat an egg and some bread for breakfast.', audioId: 'en_a1_u01_l13_g_ex1' },
          { sentence: 'Can I have a cup of coffee and a sandwich?', translation: 'क्या मुझे एक कप कॉफी और एक सैंडविच मिल सकता है? / ¿Me da una taza de café y un sándwich?', audioText: 'Can I have a cup of coffee and a sandwich?', audioId: 'en_a1_u01_l13_g_ex2' }
        ],
        explanationByLang: {
          hi: 'Countable nouns को गिना जा सकता है (an egg, a sandwich)। Uncountable nouns (water, milk, bread, sugar) को नहीं गिना जा सकता, इसलिए इनके आगे "a" नहीं लगता, "some" या "a cup/glass of" का प्रयोग होता है।',
          es: 'Los sustantivos contables se pueden contar (an apple, two sandwiches). Los incontables (water, bread, sugar) no llevan "a/an" ni plural; usan "some" o recipientes (a glass of water).'
        }
      },
      {
        id: 'g_some_vs_any_rules',
        title: 'Some vs. Any Rules',
        rule: 'Use "SOME" in affirmative sentences and polite requests/offers ("I want some milk", "Can I have some water?"). Use "ANY" in negative sentences and general questions ("We don\'t have any milk", "Do you have any sugar?").',
        formula: 'Affirmative / Request: some | Negative: don\'t / doesn\'t have any | Question: Do you have any...?',
        examples: [
          { sentence: 'We have some apples, but we don\'t have any oranges.', translation: 'हमारे पास कुछ सेब हैं, पर संतरे बिल्कुल नहीं हैं। / Tenemos algunas manzanas, pero no tenemos ninguna naranja.', audioText: 'We have some apples, but we don\'t have any oranges.', audioId: 'en_a1_u01_l13_g_ex3' },
          { sentence: 'Do you have any sugar?', translation: 'क्या आपके पास थोड़ी चीनी है? / ¿Tienes algo de azúcar?', audioText: 'Do you have any sugar?', audioId: 'en_a1_u01_l13_g_ex4' }
        ],
        explanationByLang: {
          hi: 'सकारात्मक वाक्यों और विनम्र निवेदन में "some" का प्रयोग करें। नकारात्मक और सामान्य प्रश्नों में "any" का प्रयोग करें।',
          es: 'Usa "some" en afirmativas y peticiones educadas. Usa "any" en negativas y preguntas generales.'
        }
      }
    ]
  },

  // SECTION 7: Common Mistakes
  commonMistakes: [
    {
      id: 'cm_l13_a_bread',
      incorrect: 'I want a bread and a water.',
      correct: 'I want some bread and a bottle/glass of water. / I want a sandwich.',
      whyExplanation: '"Bread" and "water" are uncountable in English; use "some bread" or "a glass of water".',
      explanationsByLang: {
        hi: 'अंग्रेजी में "bread" और "water" uncountable हैं। "a bread" के बजाय "some bread" या "a slice of bread" कहें।',
        es: 'En inglés "bread" y "water" son incontables: di "some bread" o "a glass of water", nunca "*a bread*".',
        fr: '"Bread" et "water" sont indénombrables : dites "some bread" ou "a glass of water".',
        de: '"Bread" und "water" sind unzählbar: sagen Sie "some bread" oder "a glass of water".'
      }
    },
    {
      id: 'cm_l13_some_in_negative',
      incorrect: 'I don\'t have some cheese.',
      correct: 'I don\'t have any cheese.',
      whyExplanation: 'In negative sentences, change "some" to "any": "I don\'t have any cheese".',
      explanationsByLang: {
        hi: 'नकारात्मक वाक्यों में "some" के स्थान पर "any" का प्रयोग करें: "I don\'t have any cheese".',
        es: 'En frases negativas usa "any", no "some": "I don\'t have any cheese".',
        fr: 'Dans les phrases négatives, utilisez "any" : "I don\'t have any cheese".',
        de: 'In negativen Sätzen nutzt man "any": "I don\'t have any cheese".'
      }
    }
  ],

  // SECTION 11: Dialogue
  dialogues: [
    {
      id: 'd_a1_1_13_cafe_order',
      title: 'Ordering at a Morning Café',
      context: 'Liam is at a London café ordering breakfast from the barista/waiter.',
      characters: [
        { id: 'char_waiter', name: 'Waiter', role: 'Server' },
        { id: 'char_liam', name: 'Liam', role: 'Customer' }
      ],
      turns: [
        {
          id: 'turn_1',
          speakerId: 'char_waiter',
          speakerName: 'Waiter',
          text: 'Good morning! Are you ready to order?',
          translationsByLang: { hi: 'सुप्रभात! क्या आप ऑर्डर करने के लिए तैयार हैं?', es: '¡Buenos días! ¿Está listo para pedir?' },
          audioText: 'Good morning! Are you ready to order?',
          audioId: 'en_a1_u01_l13_d01_t1'
        },
        {
          id: 'turn_2',
          speakerId: 'char_liam',
          speakerName: 'Liam',
          text: 'Yes, please. Can I have a cup of coffee with milk, and a cheese sandwich?',
          translationsByLang: { hi: 'हाँ, कृपया। क्या मुझे एक कप दूध वाली कॉफी और एक चीज़ सैंडविच मिल सकता है?', es: 'Sí, por favor. ¿Me da una taza de café con leche y un sándwich de queso?' },
          audioText: 'Yes, please. Can I have a cup of coffee with milk, and a cheese sandwich?',
          audioId: 'en_a1_u01_l13_d01_t2'
        },
        {
          id: 'turn_3',
          speakerId: 'char_waiter',
          speakerName: 'Waiter',
          text: 'Sure! Would you like any sugar with your coffee?',
          translationsByLang: { hi: 'ज़रूर! क्या आप अपनी कॉफी में चीनी लेना चाहेंगे?', es: '¡Claro! ¿Desea algo de azúcar con su café?' },
          audioText: 'Sure! Would you like any sugar with your coffee?',
          audioId: 'en_a1_u01_l13_d01_t3'
        },
        {
          id: 'turn_4',
          speakerId: 'char_liam',
          speakerName: 'Liam',
          text: 'No sugar, thank you. And could I also have a glass of cold water?',
          translationsByLang: { hi: 'चीनी नहीं, धन्यवाद। और क्या मुझे एक गिलास ठंडा पानी भी मिल सकता है?', es: 'Sin azúcar, gracias. ¿Y podría traerme también un vaso de agua fría?' },
          audioText: 'No sugar, thank you. And could I also have a glass of cold water?',
          audioId: 'en_a1_u01_l13_d01_t4'
        },
        {
          id: 'turn_5',
          speakerId: 'char_waiter',
          speakerName: 'Waiter',
          text: 'Of course. Coming right up!',
          translationsByLang: { hi: 'बिल्कुल। अभी लाता हूँ!', es: 'Por supuesto. ¡Enseguida se lo traigo!' },
          audioText: 'Of course. Coming right up!',
          audioId: 'en_a1_u01_l13_d01_t5'
        }
      ]
    }
  ],

  // SECTION 8, 9, 10, 12, 13, 14, 15, 16: Practice Exercises
  practiceExercises: [
    {
      id: 'ex_l13_p1',
      lessonId: 'lesson_a1_1_13',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Select the correct determiner for uncountable noun "milk":',
      sourceSentence: 'I would like ___ milk in my tea, please.',
      options: [
        { id: 'o1', text: 'some', isCorrect: true },
        { id: 'o2', text: 'a', isCorrect: false },
        { id: 'o3', text: 'an', isCorrect: false }
      ],
      explanation: 'Uncountable nouns take "some", not "a/an".'
    },
    {
      id: 'ex_l13_p2',
      lessonId: 'lesson_a1_1_13',
      stage: 8,
      type: 'fill_blank',
      prompt: 'Fill in with "some" or "any" in negative sentence:',
      sourceSentence: 'We don\'t have ___ fresh bread today.',
      options: [
        { id: 'o1', text: 'any', isCorrect: true },
        { id: 'o2', text: 'some', isCorrect: false },
        { id: 'o3', text: 'a', isCorrect: false }
      ],
      explanation: 'Use "any" in negative sentences.'
    },
    {
      id: 'ex_l13_p3',
      lessonId: 'lesson_a1_1_13',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the polite café ordering phrase:',
      targetSentence: 'Can I have a cup of coffee please',
      wordBank: ['Can', 'I', 'have', 'a', 'cup', 'of', 'coffee', 'please', 'some', 'glass']
    },
    {
      id: 'ex_l13_p4',
      lessonId: 'lesson_a1_1_13',
      stage: 9,
      type: 'listening',
      prompt: 'Listen to the customer request:',
      audioText: 'Could we have the bill please',
      options: [
        { id: 'o1', text: 'Could we have the bill please', isCorrect: true },
        { id: 'o2', text: 'Could we see the menu please', isCorrect: false },
        { id: 'o3', text: 'Could we have some water please', isCorrect: false }
      ],
      explanation: 'The speaker asks "Could we have the bill please".'
    },
    {
      id: 'ex_l13_p5',
      lessonId: 'lesson_a1_1_13',
      stage: 9,
      type: 'listen_and_type',
      prompt: 'Listen and write the phrase exactly:',
      audioText: 'I drink a glass of orange juice',
      targetSentence: 'I drink a glass of orange juice'
    },
    {
      id: 'ex_l13_p6',
      lessonId: 'lesson_a1_1_13',
      stage: 10,
      type: 'word_ordering',
      prompt: 'Build the question:',
      targetSentence: 'Do you have any green tea',
      wordBank: ['Do', 'you', 'have', 'any', 'green', 'tea', 'some', 'a']
    },
    {
      id: 'ex_l13_p7',
      lessonId: 'lesson_a1_1_13',
      stage: 12,
      type: 'speaking',
      prompt: 'Order this breakfast item aloud:',
      targetSentence: 'Can I have an egg and a slice of bread, please?',
      audioText: 'Can I have an egg and a slice of bread, please?'
    },
    {
      id: 'ex_l13_p8',
      lessonId: 'lesson_a1_1_13',
      stage: 13,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'क्या मुझे बिल मिल सकता है, कृपया?',
      sourceTranslations: {
        hi: 'क्या मुझे बिल मिल सकता है, कृपया?',
        es: '¿Me trae la cuenta, por favor?'
      },
      targetSentence: 'Can I have the bill please',
      wordBank: ['Can', 'I', 'have', 'the', 'bill', 'please', 'menu', 'a']
    },
    {
      id: 'ex_l13_p9',
      lessonId: 'lesson_a1_1_13',
      stage: 14,
      type: 'fill_blank',
      prompt: 'Interleaved Practice (Combining Lesson 6 Adjectives & Lesson 13 Food):',
      sourceSentence: 'I love ___ coffee in the morning and ___ water after running.',
      options: [
        { id: 'o1', text: 'hot / cold', isCorrect: true },
        { id: 'o2', text: 'big / small', isCorrect: false },
        { id: 'o3', text: 'new / old', isCorrect: false }
      ],
      explanation: 'Hot coffee and cold water are common adjective-noun pairs.'
    },
    {
      id: 'ex_l13_p10',
      lessonId: 'lesson_a1_1_13',
      stage: 15,
      type: 'error_correction',
      prompt: 'Fix the uncountable noun error:',
      sourceSentence: 'I want a bread and two waters.',
      options: [
        { id: 'o1', text: 'I want some bread and two bottles of water.', isCorrect: true },
        { id: 'o2', text: 'I want an bread and two water.', isCorrect: false },
        { id: 'o3', text: 'I want bread and water two.', isCorrect: false }
      ],
      explanation: '"Bread" is uncountable; water needs a measure like "bottles of water".'
    },
    {
      id: 'ex_l13_p11',
      lessonId: 'lesson_a1_1_13',
      stage: 16,
      type: 'dialogue_completion',
      prompt: 'Choose the polite reply from a server:',
      sourceSentence: 'Customer: "Can I have a coffee, please?" -> Server: "___"',
      options: [
        { id: 'o1', text: 'Sure! With milk or black?', isCorrect: true },
        { id: 'o2', text: 'I live in London.', isCorrect: false },
        { id: 'o3', text: 'It is ten o\'clock.', isCorrect: false }
      ],
      explanation: 'Asks a natural follow-up for a coffee order.'
    },
    {
      id: 'ex_l13_p12',
      lessonId: 'lesson_a1_1_13',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Which noun is countable and takes "an"?',
      sourceSentence: 'Countable vs uncountable:',
      options: [
        { id: 'o1', text: 'apple', isCorrect: true },
        { id: 'o2', text: 'sugar', isCorrect: false },
        { id: 'o3', text: 'milk', isCorrect: false }
      ],
      explanation: '"apple" is countable (an apple).'
    },
    {
      id: 'ex_l13_p13',
      lessonId: 'lesson_a1_1_13',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Which phrase is used for hot drinks?',
      sourceSentence: 'Container vocabulary:',
      options: [
        { id: 'o1', text: 'a cup of tea', isCorrect: true },
        { id: 'o2', text: 'a bottle of tea', isCorrect: false },
        { id: 'o3', text: 'a plate of tea', isCorrect: false }
      ],
      explanation: '"a cup of tea" is the standard collocated measure.'
    },
    {
      id: 'ex_l13_p14',
      lessonId: 'lesson_a1_1_13',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Construct the sentence:',
      targetSentence: 'She eats an apple and drinks orange juice',
      wordBank: ['She', 'eats', 'an', 'apple', 'and', 'drinks', 'orange', 'juice', 'a']
    },
    {
      id: 'ex_l13_p15',
      lessonId: 'lesson_a1_1_13',
      stage: 12,
      type: 'speaking',
      prompt: 'Say this request clearly into your microphone:',
      targetSentence: 'Could I have some butter and sugar, please?',
      audioText: 'Could I have some butter and sugar, please?'
    }
  ],

  // SECTION 16: Review Exercises
  reviewExercises: [
    {
      id: 'ex_l13_rev1',
      lessonId: 'lesson_a1_1_13',
      stage: 16,
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "any"?',
      sourceSentence: 'Grammar review:',
      options: [
        { id: 'o1', text: 'Do you have any cheese in the kitchen?', isCorrect: true },
        { id: 'o2', text: 'I have any cheese in the kitchen.', isCorrect: false },
        { id: 'o3', text: 'She eats any apple.', isCorrect: false }
      ],
      explanation: '"Any" is used in questions with uncountable or plural nouns.'
    },
    {
      id: 'ex_l13_rev2',
      lessonId: 'lesson_a1_1_13',
      stage: 16,
      type: 'fill_blank',
      prompt: 'Fill in the correct container measure for water:',
      sourceSentence: 'Can I have a ___ of cold water?',
      options: [
        { id: 'o1', text: 'glass', isCorrect: true },
        { id: 'o2', text: 'plate', isCorrect: false },
        { id: 'o3', text: 'fork', isCorrect: false }
      ],
      explanation: 'Use "a glass of water".'
    },
    {
      id: 'ex_l13_rev3',
      lessonId: 'lesson_a1_1_13',
      stage: 16,
      type: 'word_ordering',
      prompt: 'Assemble the sentence correctly:',
      targetSentence: 'We don\'t have any sugar for our coffee',
      wordBank: ['We', 'don\'t', 'have', 'any', 'sugar', 'for', 'our', 'coffee', 'some']
    },
    {
      id: 'ex_l13_rev4',
      lessonId: 'lesson_a1_1_13',
      stage: 16,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'क्या आप थोड़ी कॉफी लेना चाहेंगे?',
      sourceTranslations: { hi: 'क्या आप थोड़ी कॉफी लेना चाहेंगे?', es: '¿Te gustaría un poco de café?' },
      targetSentence: 'Would you like some coffee',
      wordBank: ['Would', 'you', 'like', 'some', 'coffee', 'any', 'a', 'do']
    }
  ],

  // SECTION 17: Assessment Exercises (10 items)
  assessmentExercises: [
    {
      id: 'ex_l13_a1',
      lessonId: 'lesson_a1_1_13',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Choose the correct determiner: "I want ___ sandwich."',
      sourceSentence: 'Article choice:',
      options: [
        { id: 'o1', text: 'a', isCorrect: true },
        { id: 'o2', text: 'an', isCorrect: false },
        { id: 'o3', text: 'some', isCorrect: false },
        { id: 'o4', text: 'any', isCorrect: false }
      ],
      explanation: '"sandwich" is a singular countable noun starting with a consonant.'
    },
    {
      id: 'ex_l13_a2',
      lessonId: 'lesson_a1_1_13',
      stage: 17,
      type: 'fill_blank',
      prompt: 'Complete the sentence with "some" or "any":',
      sourceSentence: 'There isn\'t ___ milk in the fridge.',
      options: [
        { id: 'o1', text: 'any', isCorrect: true },
        { id: 'o2', text: 'some', isCorrect: false },
        { id: 'o3', text: 'a', isCorrect: false },
        { id: 'o4', text: 'an', isCorrect: false }
      ],
      explanation: 'Use "any" in negative sentences.'
    },
    {
      id: 'ex_l13_a3',
      lessonId: 'lesson_a1_1_13',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Build the café ordering sentence:',
      targetSentence: 'Can I have a glass of water and the menu please',
      wordBank: ['Can', 'I', 'have', 'a', 'glass', 'of', 'water', 'and', 'the', 'menu', 'please']
    },
    {
      id: 'ex_l13_a4',
      lessonId: 'lesson_a1_1_13',
      stage: 17,
      type: 'error_correction',
      prompt: 'Correct the sentence error:',
      sourceSentence: 'I don\'t eat some meat.',
      options: [
        { id: 'o1', text: 'I don\'t eat any meat.', isCorrect: true },
        { id: 'o2', text: 'I don\'t eat a meat.', isCorrect: false },
        { id: 'o3', text: 'I not eat some meat.', isCorrect: false }
      ],
      explanation: 'Use "any" with uncountable meat in negative sentences.'
    },
    {
      id: 'ex_l13_a5',
      lessonId: 'lesson_a1_1_13',
      stage: 17,
      type: 'listening',
      prompt: 'Listen and select what the customer ordered:',
      audioText: 'I would like a cup of tea with milk and sugar',
      options: [
        { id: 'o1', text: 'I would like a cup of tea with milk and sugar', isCorrect: true },
        { id: 'o2', text: 'I would like a cup of coffee with milk and sugar', isCorrect: false },
        { id: 'o3', text: 'I would like a glass of water with lemon', isCorrect: false }
      ],
      explanation: 'The speaker says "I would like a cup of tea with milk and sugar".'
    },
    {
      id: 'ex_l13_a6',
      lessonId: 'lesson_a1_1_13',
      stage: 17,
      type: 'listen_and_type',
      prompt: 'Listen and type the sentence accurately:',
      audioText: 'We have some fresh bread and cheese',
      targetSentence: 'We have some fresh bread and cheese'
    },
    {
      id: 'ex_l13_a7',
      lessonId: 'lesson_a1_1_13',
      stage: 17,
      type: 'dialogue_completion',
      prompt: 'Select the best customer request at the end of a meal:',
      sourceSentence: 'You are finished eating at a café -> You: "___"',
      options: [
        { id: 'o1', text: 'Could we have the bill, please?', isCorrect: true },
        { id: 'o2', text: 'I am thirty years old.', isCorrect: false },
        { id: 'o3', text: 'The pharmacy is on the left.', isCorrect: false }
      ],
      explanation: 'Standard request to pay at a restaurant.'
    },
    {
      id: 'ex_l13_a8',
      lessonId: 'lesson_a1_1_13',
      stage: 17,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'क्या आपके पास कोई फल है?',
      sourceTranslations: { hi: 'क्या आपके पास कोई फल है?', es: '¿Tienes algo de fruta?' },
      targetSentence: 'Do you have any fruit',
      wordBank: ['Do', 'you', 'have', 'any', 'fruit', 'some', 'a', 'does']
    },
    {
      id: 'ex_l13_a9',
      lessonId: 'lesson_a1_1_13',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Which item is UNCOUNTABLE in English?',
      sourceSentence: 'Noun classification:',
      options: [
        { id: 'o1', text: 'bread', isCorrect: true },
        { id: 'o2', text: 'egg', isCorrect: false },
        { id: 'o3', text: 'apple', isCorrect: false },
        { id: 'o4', text: 'sandwich', isCorrect: false }
      ],
      explanation: '"Bread" is uncountable in English.'
    },
    {
      id: 'ex_l13_a10',
      lessonId: 'lesson_a1_1_13',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the final sentence:',
      targetSentence: 'I always have a glass of orange juice for breakfast',
      wordBank: ['I', 'always', 'have', 'a', 'glass', 'of', 'orange', 'juice', 'for', 'breakfast', 'some']
    }
  ]
};
