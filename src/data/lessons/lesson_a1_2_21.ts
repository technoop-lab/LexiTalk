import { DetailedLessonData } from '../../types';

export const LESSON_A1_2_21_DATA: DetailedLessonData = {
  id: 'lesson_a1_2_21',
  unitId: 'unit_a1_2',
  title: 'Food, Supermarket Shopping & Countable / Uncountable Nouns',
  cefr: 'A1',
  icon: '🛒',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Food Vocabulary, Supermarket Shopping, and Countable vs. Uncountable Nouns',
    description: 'Master countable and uncountable food items, partitives/containers (a bottle of, a kilo of, a slice of, a packet of), and quantifiers (some, any, much, many, a lot of). Practice asking for groceries, inquiring about prices, and ordering at market stalls and supermarket counters.',
    descriptionsByLang: {
      hi: 'गणनीय (Countable) और अगणनीय (Uncountable) खाद्य पदार्थों, परिमाणक शब्दों (some, any, much, many, a lot of) और कंटेनर्स (a bottle of, a kilo of, a box of) का उपयोग सीखें। सुपरमार्केट में खरीदारी करने और कीमतों के बारे में बातचीत करने का अभ्यास करें।',
      es: 'Aprende vocabulario de comida, sustantivos contables e incontables, cuantificadores (some, any, much, many, a lot of) y envases/unidades (a bottle of, a kilo of). Practica hacer la compra en el supermercado y pedir precios.',
      fr: 'Apprenez le vocabulaire de la nourriture, les noms dénombrables et indénombrables, et les quantificateurs pour faire ses courses.',
      de: 'Lernen Sie Lebensmittel-Vokabular, zählbare und unzählbare Nomen sowie Mengenangaben für den Einkauf im Supermarkt.',
      pt: 'Aprenda vocabulário de alimentos, substantivos contáveis e incontáveis e quantificadores para compras.',
      zh: '掌握食物词汇、可数与不可数名词、数量词（some, any, much, many, a lot of）及容器/度量单位（a bottle of, a kilo of），并在超市与菜市场熟练应用。',
      ar: 'تعلم مفردات الطعام والأسماء المعدودة وغير المعدودة ومحددات الكمية لشراء البقالة.',
      ja: '食品の語彙、可算・不可算名詞、数量詞（some, any, much, many）、容器・単位表現（a bottle of, a kilo of）を学び、スーパーでの買い物表現を習得します。',
      ru: 'Изучите лексику продуктов питания, исчисляемые и неисчисляемые существительные, а также квантификаторы для покупок.'
    },
    canDoStatements: [
      'Distinguish countable foods (apples, eggs, tomatoes) from uncountable foods (milk, bread, rice, cheese)',
      'Use "some" in affirmative statements and "any" in questions and negatives',
      'Use containers and measurements: "a bottle of water", "two kilos of rice", "a loaf of bread"',
      'Ask about quantities and prices: "How much is this cheese?", "How many apples do we need?"',
      'Conduct a full grocery transaction at a market stall or supermarket checkout'
    ],
    canDoByLang: {
      hi: [
        'काउंटेबल (apples, eggs) और अनकाउंटेबल (milk, rice) खाद्य पदार्थों में अंतर समझना',
        'स्वीकारात्मक वाक्यों में "some" और प्रश्न/नकारात्मक में "any" का प्रयोग करना',
        'माप और कंटेनर बताना: "a bottle of milk", "a kilo of apples"',
        'मात्रा और कीमत पूछना: "How much is this?", "How many eggs?"'
      ],
      es: [
        'Diferenciar sustantivos contables e incontables en alimentos',
        'Usar "some" y "any" de forma adecuada',
        'Expresar cantidades con envases y pesos: "a bottle of milk", "a kilo of tomatoes"',
        'Preguntar cantidades y precios en el supermercado'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (25 items)
  vocabulary: [
    {
      id: 'v_u02_l21_apple',
      word: 'apple (apples)',
      phonetic: '/ˈæp.əl/',
      meaning: 'A round fruit with red, yellow, or green skin and crisp flesh',
      translationsByLang: { hi: 'सेब', es: 'manzana', fr: 'pomme', de: 'Apfel', pt: 'maçã', zh: '苹果', ar: 'تفاحة', ja: 'りんご', ru: 'яблоко' },
      exampleSentence: 'We need five red apples for the dessert.',
      exampleTranslationByLang: { hi: 'हमें मिठाई के लिए पाँच लाल सेब चाहिए।', es: 'Necesitamos cinco manzanas rojas para el postre.' },
      audioText: 'apple and apples',
      audioId: 'en_a1_u02_l21_v_apple',
      slowAudioId: 'en_a1_u02_l21_v_apple_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍎',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_banana',
      word: 'banana (bananas)',
      phonetic: '/bəˈnæn.ə/',
      meaning: 'A long curved fruit with a thick yellow skin and soft sweet flesh',
      translationsByLang: { hi: 'केला', es: 'plátano / banana', fr: 'banane', de: 'Banane', pt: 'banana', zh: '香蕉', ar: 'موزة', ja: 'バナナ', ru: 'банан' },
      exampleSentence: 'I eat a ripe banana for breakfast every day.',
      exampleTranslationByLang: { hi: 'मैं हर दिन नाश्ते में एक पका हुआ केला खाता हूँ।', es: 'Como un plátano maduro en el desayuno todos los días.' },
      audioText: 'banana and bananas',
      audioId: 'en_a1_u02_l21_v_banana',
      slowAudioId: 'en_a1_u02_l21_v_banana_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍌',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_tomato',
      word: 'tomato (tomatoes)',
      phonetic: '/təˈmeɪ.toʊ/',
      meaning: 'A glossy red fruit eaten raw in salads or cooked as a vegetable',
      translationsByLang: { hi: 'टमाटर', es: 'tomate', fr: 'tomate', de: 'Tomate', pt: 'tomate', zh: '西红柿 / 番茄', ar: 'طماطم / بندورة', ja: 'トマト', ru: 'помидор / томат' },
      exampleSentence: 'Buy one kilo of fresh tomatoes at the market.',
      exampleTranslationByLang: { hi: 'बाजार से एक किलो ताजे टमाटर खरीदें।', es: 'Compra un kilo de tomates frescos en el mercado.' },
      audioText: 'tomato and tomatoes',
      audioId: 'en_a1_u02_l21_v_tomato',
      slowAudioId: 'en_a1_u02_l21_v_tomato_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍅',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_potato',
      word: 'potato (potatoes)',
      phonetic: '/pəˈteɪ.toʊ/',
      meaning: 'A starchy plant tuber that is cooked and eaten as a staple vegetable',
      translationsByLang: { hi: 'आलू', es: 'patata / papa', fr: 'pomme de terre', de: 'Kartoffel', pt: 'batata', zh: '土豆 / 马铃薯', ar: 'بطاطس / بطاطا', ja: 'じゃがいも / ポテト', ru: 'картофель / картошка' },
      exampleSentence: 'We bake three large potatoes for dinner.',
      exampleTranslationByLang: { hi: 'हम रात के खाने के लिए तीन बड़े आलू भूनते हैं।', es: 'Horneamos tres patatas grandes para la cena.' },
      audioText: 'potato and potatoes',
      audioId: 'en_a1_u02_l21_v_potato',
      slowAudioId: 'en_a1_u02_l21_v_potato_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥔',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_egg',
      word: 'egg (eggs)',
      phonetic: '/eɡ/',
      meaning: 'An oval object laid by female birds, eaten as food',
      translationsByLang: { hi: 'अंडा', es: 'huevo', fr: 'œuf', de: 'Ei', pt: 'ovo', zh: '鸡蛋 / 蛋', ar: 'بيضة', ja: '卵 / エッグ', ru: 'яйцо' },
      exampleSentence: 'There are a dozen fresh eggs in the refrigerator.',
      exampleTranslationByLang: { hi: 'फ्रिज में एक दर्जन ताजे अंडे हैं।', es: 'Hay una docena de huevos frescos en la nevera.' },
      audioText: 'egg and eggs',
      audioId: 'en_a1_u02_l21_v_egg',
      slowAudioId: 'en_a1_u02_l21_v_egg_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥚',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_bread',
      word: 'bread (uncountable)',
      phonetic: '/bred/',
      meaning: 'Food made of flour, water, and yeast mixed together and baked',
      translationsByLang: { hi: 'ब्रेड / रोटी / डबलरोटी', es: 'pan', fr: 'pain', de: 'Brot', pt: 'pão', zh: '面包', ar: 'خبز', ja: 'パン', ru: 'хлеб' },
      exampleSentence: 'Could you buy a fresh loaf of whole wheat bread?',
      exampleTranslationByLang: { hi: 'क्या आप गेहूं की एक ताज़ा ब्रेड खरीद सकते हैं?', es: '¿Podrías comprar una barra de pan integral fresca?' },
      audioText: 'bread',
      audioId: 'en_a1_u02_l21_v_bread',
      slowAudioId: 'en_a1_u02_l21_v_bread_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍞',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_milk',
      word: 'milk (uncountable)',
      phonetic: '/mɪlk/',
      meaning: 'An opaque white fluid rich in fat and protein secreted by cows',
      translationsByLang: { hi: 'दूध', es: 'leche', fr: 'lait', de: 'Milch', pt: 'leite', zh: '牛奶', ar: 'حليب / لبن', ja: '牛乳 / ミルク', ru: 'молоко' },
      exampleSentence: 'Is there any cold milk in the fridge?',
      exampleTranslationByLang: { hi: 'क्या फ्रिज में थोड़ा ठंडा दूध है?', es: '¿Hay algo de leche fría en la nevera?' },
      audioText: 'milk',
      audioId: 'en_a1_u02_l21_v_milk',
      slowAudioId: 'en_a1_u02_l21_v_milk_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥛',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_cheese',
      word: 'cheese (uncountable)',
      phonetic: '/tʃiːz/',
      meaning: 'A food made from the pressed curds of milk',
      translationsByLang: { hi: 'पनीर / चीज़', es: 'queso', fr: 'fromage', de: 'Käse', pt: 'queijo', zh: '奶酪 / 芝士', ar: 'جبن / جبنة', ja: 'チーズ', ru: 'сыр' },
      exampleSentence: 'I would like two hundred grams of cheddar cheese, please.',
      exampleTranslationByLang: { hi: 'मुझे दो सौ ग्राम चेडर चीज़ चाहिए, कृपया।', es: 'Quisiera doscientos gramos de queso cheddar, por favor.' },
      audioText: 'cheese',
      audioId: 'en_a1_u02_l21_v_cheese',
      slowAudioId: 'en_a1_u02_l21_v_cheese_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧀',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_rice',
      word: 'rice (uncountable)',
      phonetic: '/raɪs/',
      meaning: 'The grains of a cereal plant cooked and consumed as food',
      translationsByLang: { hi: 'चावल', es: 'arroz', fr: 'riz', de: 'Reis', pt: 'arroz', zh: '大米 / 米饭', ar: 'أرز', ja: '米 / ご飯', ru: 'рис' },
      exampleSentence: 'We cook white rice with steamed vegetables.',
      exampleTranslationByLang: { hi: 'हम उबली हुई सब्जियों के साथ सफेद चावल पकाते हैं।', es: 'Cocinamos arroz blanco con verduras al vapor.' },
      audioText: 'rice',
      audioId: 'en_a1_u02_l21_v_rice',
      slowAudioId: 'en_a1_u02_l21_v_rice_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍚',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_butter',
      word: 'butter (uncountable)',
      phonetic: '/ˈbʌt̬.ɚ/',
      meaning: 'A pale yellow fatty food substance made by churning cream',
      translationsByLang: { hi: 'मक्खन', es: 'mantequilla', fr: 'beurre', de: 'Butter', pt: 'manteiga', zh: '黄油', ar: 'زبدة', ja: 'バター', ru: 'сливочное масло' },
      exampleSentence: 'Spread some butter on your warm toast.',
      exampleTranslationByLang: { hi: 'अपने गर्म टोस्ट पर थोड़ा मक्खन लगाएं।', es: 'Unta un poco de mantequilla en tu tostada caliente.' },
      audioText: 'butter',
      audioId: 'en_a1_u02_l21_v_butter',
      slowAudioId: 'en_a1_u02_l21_v_butter_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧈',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_water',
      word: 'water (uncountable)',
      phonetic: '/ˈwɑː.t̬ɚ/',
      meaning: 'Clear colorless odorless liquid essential for human life',
      translationsByLang: { hi: 'पानी / जल', es: 'agua', fr: 'eau', de: 'Wasser', pt: 'água', zh: '水', ar: 'ماء / مياه', ja: '水 / ウォーター', ru: 'вода' },
      exampleSentence: 'Please bring me a glass of cold water.',
      exampleTranslationByLang: { hi: 'कृपया मेरे लिए एक गिलास ठंडा पानी लाएं।', es: 'Por favor, tráeme un vaso de agua fría.' },
      audioText: 'water',
      audioId: 'en_a1_u02_l21_v_water',
      slowAudioId: 'en_a1_u02_l21_v_water_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💧',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_coffee_tea',
      word: 'coffee / tea',
      phonetic: '/ˈkɑː.fi/ /tiː/',
      meaning: 'Hot brewed beverages made from roasted beans or cured leaves',
      translationsByLang: { hi: 'कॉफ़ी / चाय', es: 'café / té', fr: 'café / thé', de: 'Kaffee / Tee', pt: 'café / chá', zh: '咖啡 / 茶', ar: 'قهوة / شاي', ja: 'コーヒー / お茶', ru: 'кофе / чай' },
      exampleSentence: 'Do you drink coffee or tea with your breakfast?',
      exampleTranslationByLang: { hi: 'क्या आप नाश्ते में कॉफ़ी पीते हैं या चाय?', es: '¿Tomas café o té con el desayuno?' },
      audioText: 'coffee and tea',
      audioId: 'en_a1_u02_l21_v_coffee_tea',
      slowAudioId: 'en_a1_u02_l21_v_coffee_tea_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '☕',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_bottle_of',
      word: 'a bottle of',
      phonetic: '/ə ˈbɑː.t̬əl əv/',
      meaning: 'A glass or plastic container with a narrow neck holding liquid',
      translationsByLang: { hi: 'एक बोतल ...', es: 'una botella de', fr: 'une bouteille de', de: 'eine Flasche', pt: 'uma garrafa de', zh: '一瓶……', ar: 'زجاجة من / قنينة من', ja: '一本（一瓶）の〜', ru: 'бутылка ...' },
      exampleSentence: 'We need a bottle of olive oil and a bottle of water.',
      exampleTranslationByLang: { hi: 'हमें जैतून के तेल की एक बोतल और पानी की एक बोतल चाहिए।', es: 'Necesitamos una botella de aceite de oliva y una botella de agua.' },
      audioText: 'a bottle of',
      audioId: 'en_a1_u02_l21_v_bottle_of',
      slowAudioId: 'en_a1_u02_l21_v_bottle_of_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍾',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_kilo_of',
      word: 'a kilo of / a kilogram of',
      phonetic: '/ə ˈkiː.loʊ əv/',
      meaning: 'A metric unit of weight equal to 1,000 grams',
      translationsByLang: { hi: 'एक किलो ...', es: 'un kilo de', fr: 'un kilo de', de: 'ein Kilo', pt: 'um quilo de', zh: '一公斤 / 一千克……', ar: 'كيلوغرام من', ja: '1キロの〜', ru: 'килограмм ...' },
      exampleSentence: 'Please give me two kilos of fresh potatoes.',
      exampleTranslationByLang: { hi: 'कृपया मुझे दो किलो ताजे आलू दें।', es: 'Por favor, deme dos kilos de patatas frescas.' },
      audioText: 'a kilo of and a kilogram of',
      audioId: 'en_a1_u02_l21_v_kilo_of',
      slowAudioId: 'en_a1_u02_l21_v_kilo_of_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⚖️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_slice_of',
      word: 'a slice of / a loaf of',
      phonetic: '/ə slaɪs əv/',
      meaning: 'A thin piece cut from a larger piece of bread, cheese, or meat',
      translationsByLang: { hi: 'एक टुकड़ा / स्लाइस / ब्रेड का पैकेट', es: 'una rebanada de / una barra de', fr: 'une tranche de / une miche de', de: 'eine Scheibe / ein Laib', pt: 'uma fatia de / um pão de', zh: '一片…… / 一条（面包）', ar: 'شريحة من / رغيف من', ja: '一枚の〜 / 一斤のパン', ru: 'ломтик ... / буханка ...' },
      exampleSentence: 'Would you like a slice of cake with your coffee?',
      exampleTranslationByLang: { hi: 'क्या आप अपनी कॉफ़ी के साथ केक का एक टुकड़ा पसंद करेंगे?', es: '¿Te gustaría una porción de tarta con el café?' },
      audioText: 'a slice of and a loaf of',
      audioId: 'en_a1_u02_l21_v_slice_of',
      slowAudioId: 'en_a1_u02_l21_v_slice_of_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍰',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_packet_box',
      word: 'a packet of / a box of',
      phonetic: '/ə ˈpæk.ɪt əv/',
      meaning: 'A small paper or cardboard container holding dry food goods',
      translationsByLang: { hi: 'एक पैकेट / एक डिब्बा', es: 'un paquete de / una caja de', fr: 'un paquet de / une boîte de', de: 'eine Packung / eine Schachtel', pt: 'um pacote de / uma caixa de', zh: '一包…… / 一盒……', ar: 'علبة من / كيس من', ja: '一袋の〜 / 一箱の〜', ru: 'пачка ... / коробка ...' },
      exampleSentence: 'We bought a box of cereal and a packet of tea.',
      exampleTranslationByLang: { hi: 'हमने अनाज का एक डिब्बा और चाय का एक पैकेट खरीदा।', es: 'Compramos una caja de cereales y un paquete de té.' },
      audioText: 'a packet of and a box of',
      audioId: 'en_a1_u02_l21_v_packet_box',
      slowAudioId: 'en_a1_u02_l21_v_packet_box_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📦',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_supermarket',
      word: 'supermarket / grocery store',
      phonetic: '/ˈsuː.pɚˌmɑːr.kɪt/',
      meaning: 'A large self-service shop selling foods and household goods',
      translationsByLang: { hi: 'सुपरमार्केट / किराने की दुकान', es: 'supermercado / tienda de comestibles', fr: 'supermarché / épicerie', de: 'Supermarkt / Lebensmittelgeschäft', pt: 'supermercado / mercearia', zh: '超市 / 杂货店', ar: 'سوبرماركت / متجر بقالة', ja: 'スーパーマーケット / 食料品店', ru: 'супермаркет / продуктовый магазин' },
      exampleSentence: 'I go to the local supermarket every Saturday morning.',
      exampleTranslationByLang: { hi: 'मैं हर शनिवार सुबह स्थानीय सुपरमार्केट जाता हूँ।', es: 'Voy al supermercado local todos los sábados por la mañana.' },
      audioText: 'supermarket and grocery store',
      audioId: 'en_a1_u02_l21_v_supermarket',
      slowAudioId: 'en_a1_u02_l21_v_supermarket_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏬',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_shopping_cart',
      word: 'shopping cart / trolley / basket',
      phonetic: '/ˈʃɑː.pɪŋ ˌkɑːrt/',
      meaning: 'A wheeled vehicle or handheld basket provided by a shop for groceries',
      translationsByLang: { hi: 'शॉपिंग कार्ट / ट्रॉली / टोकरी', es: 'carrito de la compra / cesta', fr: 'chariot / caddie / panier', de: 'Einkaufswagen / Einkaufskorb', pt: 'carrinho de compras / cesta', zh: '购物车 / 购物篮', ar: 'عربة تسوق / سلة تسوق', ja: 'ショッピングカート / 買い物カゴ', ru: 'тележка для покупок / корзина' },
      exampleSentence: 'Put the vegetables into the shopping cart.',
      exampleTranslationByLang: { hi: 'सब्जियों को शॉपिंग कार्ट में रखें।', es: 'Pon las verduras en el carrito de la compra.' },
      audioText: 'shopping cart and trolley and basket',
      audioId: 'en_a1_u02_l21_v_shopping_cart',
      slowAudioId: 'en_a1_u02_l21_v_shopping_cart_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🛒',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_checkout_cashier',
      word: 'checkout / cashier / cash register',
      phonetic: '/ˈtʃek.aʊt/ /kæʃˈɪr/',
      meaning: 'A point at which goods are paid for in a supermarket',
      translationsByLang: { hi: 'चेकआउट / कैशियर / बिलिंग काउंटर', es: 'caja / cajero / mostrador de cobro', fr: 'caisse / caissier', de: 'Kasse / Kassierer', pt: 'caixa / operador de caixa', zh: '收银台 / 收银员', ar: 'صندوق الدفع / محاسب الصندوق', ja: 'レジ / 会計カウンター / レジ係', ru: 'касса / кассир' },
      exampleSentence: 'Pay for your groceries at checkout counter three.',
      exampleTranslationByLang: { hi: 'चेकआउट काउंटर तीन पर अपने किराने के सामान का भुगतान करें।', es: 'Paga tus compras en la caja número tres.' },
      audioText: 'checkout and cashier and cash register',
      audioId: 'en_a1_u02_l21_v_checkout_cashier',
      slowAudioId: 'en_a1_u02_l21_v_checkout_cashier_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💳',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_how_much_many',
      word: 'how much / how many',
      phonetic: '/haʊ mʌtʃ/ /haʊ ˈmen.i/',
      meaning: 'Questions asking for quantity or price of items',
      translationsByLang: { hi: 'कितना / कितने', es: 'cuánto / cuántos', fr: 'combien / combien de', de: 'wie viel / wie viele', pt: 'quanto / quantos', zh: '多少（价格/不可数） / 多少个（可数）', ar: 'كم / كم عدد', ja: 'いくら / いくつ', ru: 'сколько (цена/неисч.) / сколько (исч.)' },
      exampleSentence: 'How much is the cheese, and how many tomatoes do you want?',
      exampleTranslationByLang: { hi: 'चीज़ कितने का है, और आपको कितने टमाटर चाहिए?', es: '¿Cuánto cuesta el queso y cuántos tomates quieres?' },
      audioText: 'how much and how many',
      audioId: 'en_a1_u02_l21_v_how_much_many',
      slowAudioId: 'en_a1_u02_l21_v_how_much_many_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '❓',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_some_any',
      word: 'some / any',
      phonetic: '/sʌm/ /ˈen.i/',
      meaning: 'Determiners expressing an unspecified amount or number',
      translationsByLang: { hi: 'कुछ / कोई / थोड़ा', es: 'algo de / algún / nada de', fr: 'du / de la / des / aucun', de: 'etwas / einige / keine', pt: 'algum / alguns / nenhum', zh: '一些 / 任何', ar: 'بعض / أي', ja: 'いくつかの / 少しの / 何か', ru: 'несколько / немного / какой-либо' },
      exampleSentence: 'We have some apples, but we don\'t have any milk.',
      exampleTranslationByLang: { hi: 'हमारे पास कुछ सेब हैं, लेकिन हमारे पास बिल्कुल दूध नहीं है।', es: 'Tenemos algunas manzanas, pero no tenemos nada de leche.' },
      audioText: 'some and any',
      audioId: 'en_a1_u02_l21_v_some_any',
      slowAudioId: 'en_a1_u02_l21_v_some_any_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⚖️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_a_lot_of',
      word: 'a lot of / lots of',
      phonetic: '/ə lɑːt əv/',
      meaning: 'A large quantity or number of something',
      translationsByLang: { hi: 'बहुत सारा / काफी मात्रा में', es: 'mucho / un montón de', fr: 'beaucoup de', de: 'viel / viele', pt: 'muito / um monte de', zh: '很多 / 大量', ar: 'الكثير من', ja: 'たくさんの / 多くの', ru: 'много' },
      exampleSentence: 'There are a lot of fresh vegetables in this aisle.',
      exampleTranslationByLang: { hi: 'इस कतार में बहुत सारी ताज़ी सब्जियाँ हैं।', es: 'Hay muchas verduras frescas en este pasillo.' },
      audioText: 'a lot of and lots of',
      audioId: 'en_a1_u02_l21_v_a_lot_of',
      slowAudioId: 'en_a1_u02_l21_v_a_lot_of_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧺',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_receipt',
      word: 'receipt / bill',
      phonetic: '/rɪˈsiːt/',
      meaning: 'A printed slip confirming payment of goods received',
      translationsByLang: { hi: 'रसीद / पर्ची', es: 'recibo / tique de compra', fr: 'reçu / ticket de caisse', de: 'Quittung / Kassenbon', pt: 'recibo / talão / cupom fiscal', zh: '小票 / 收据', ar: 'إيصال دفع / فاتورة', ja: 'レシート / 領収書', ru: 'чек / квитанция' },
      exampleSentence: 'Here is your change and your receipt.',
      exampleTranslationByLang: { hi: 'यह रहे आपके बचे हुए पैसे और आपकी रसीद।', es: 'Aquí tiene su cambio y su recibo.' },
      audioText: 'receipt and bill',
      audioId: 'en_a1_u02_l21_v_receipt',
      slowAudioId: 'en_a1_u02_l21_v_receipt_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧾',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_fresh',
      word: 'fresh / organic',
      phonetic: '/freʃ/',
      meaning: 'Recently made or harvested; not stale or preserved',
      translationsByLang: { hi: 'ताज़ा / ऑर्गेनिक', es: 'fresco / ecológico / orgánico', fr: 'frais / bio', de: 'frisch / bio', pt: 'fresco / orgânico', zh: '新鲜的 / 有机的', ar: 'طازج / عضوي', ja: '新鮮な / オーガニックの', ru: 'свежий / органический' },
      exampleSentence: 'The bakery sells fresh bread every morning at seven.',
      exampleTranslationByLang: { hi: 'बेकरी हर सुबह सात बजे ताज़ी ब्रेड बेचती है।', es: 'La panadería vende pan fresco todas las mañanas a las siete.' },
      audioText: 'fresh and organic',
      audioId: 'en_a1_u02_l21_v_fresh',
      slowAudioId: 'en_a1_u02_l21_v_fresh_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌱',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l21_shopping_list',
      word: 'shopping list',
      phonetic: '/ˈʃɑː.pɪŋ ˌlɪst/',
      meaning: 'A written list of items needed to be bought',
      translationsByLang: { hi: 'खरीदारी की सूची / शॉपिंग लिस्ट', es: 'lista de la compra', fr: 'liste de courses', de: 'Einkaufsliste', pt: 'lista de compras', zh: '购物清单', ar: 'قائمة التسوق', ja: '買い物リスト', ru: 'список покупок' },
      exampleSentence: 'Write down eggs and butter on the shopping list.',
      exampleTranslationByLang: { hi: 'शॉपिंग लिस्ट में अंडे और मक्खन लिख लें।', es: 'Apunta huevos y mantequilla en la lista de la compra.' },
      audioText: 'shopping list',
      audioId: 'en_a1_u02_l21_v_shopping_list',
      slowAudioId: 'en_a1_u02_l21_v_shopping_list_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📝',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks
  expressions: [
    {
      id: 'chunk_u02_l21_how_much_is_this',
      text: 'How much is a kilo of tomatoes, please?',
      meaning: 'Standard formula for asking the price of weighed produce',
      translationsByLang: {
        hi: 'एक किलो टमाटर कितने का है, कृपया?',
        es: '¿Cuánto cuesta un kilo de tomates, por favor?',
        fr: 'Combien coûte un kilo de tomates, s\'il vous plaît ?',
        de: 'Wie viel kostet ein Kilo Tomaten, bitte?'
      },
      audioText: 'How much is a kilo of tomatoes, please?',
      audioId: 'en_a1_u02_l21_c_how_much_tomatoes',
      context: 'Market and supermarket produce stands',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_u02_l21_i_would_like_some',
      text: 'I would like some cheese and a bottle of milk.',
      meaning: 'Polite ordering expression combining uncountables and containers',
      translationsByLang: {
        hi: 'मुझे थोड़ा चीज़ और दूध की एक बोतल चाहिए।',
        es: 'Quisiera un poco de queso y una botella de leche.',
        fr: 'Je voudrais du fromage et une bouteille de lait.',
        de: 'Ich hätte gerne etwas Käse und eine Flasche Milch.'
      },
      audioText: 'I would like some cheese and a bottle of milk.',
      audioId: 'en_a1_u02_l21_c_would_like_cheese',
      context: 'Grocery counters and deli sections',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_u02_l21_anything_else',
      text: 'Would you like anything else today?',
      meaning: 'Standard shopkeeper closing inquiry before ringing up the bill',
      translationsByLang: {
        hi: 'क्या आप आज कुछ और लेना चाहेंगे?',
        es: '¿Desea alguna otra cosa hoy?',
        fr: 'Désirez-vous autre chose aujourd\'hui ?',
        de: 'Möchten Sie heute noch etwas anderes?'
      },
      audioText: 'Would you like anything else today?',
      audioId: 'en_a1_u02_l21_c_anything_else',
      context: 'Cashier checkout interactions',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 5 & 6: Grammar Rules
  grammar: {
    patterns: [
      {
        id: 'g_countable_vs_uncountable_food',
        title: 'Countable vs. Uncountable Food Nouns',
        rule: 'Countable nouns can be counted individually and have plural forms with "-s" (apple/apples, egg/eggs, tomato/tomatoes). Uncountable nouns are treated as masses or liquids and do not take plural "-s" (water, milk, rice, bread, cheese, butter).',
        formula: 'Countable: an apple -> three apples\nUncountable: milk (never *milks*), bread (never *breads*) -> a bottle of milk, two loaves of bread',
        examples: [
          { sentence: 'We need six eggs and some fresh milk.', translation: 'हमें छह अंडे और कुछ ताज़ा दूध चाहिए। / Necesitamos seis huevos y algo de leche fresca.', audioText: 'We need six eggs and some fresh milk.', audioId: 'en_a1_u02_l21_g_ex1' },
          { sentence: 'There are two loaves of bread on the counter.', translation: 'काउंटर पर ब्रेड के दो पैकेट हैं। / Hay dos barras de pan en el mostrador.', audioText: 'There are two loaves of bread on the counter.', audioId: 'en_a1_u02_l21_g_ex2' }
        ],
        explanationByLang: {
          hi: 'काउंटेबल संज्ञाओं का बहुवचन (apples, eggs) होता है। अनकाउंटेबल संज्ञाएं (milk, rice, cheese) हमेशा एकवचन रूप में रहती हैं।',
          es: 'Los nombres contables tienen plural (apples, eggs). Los incontables no llevan "s" final (milk, rice, cheese, bread).'
        }
      },
      {
        id: 'g_some_vs_any_quantifiers',
        title: 'Quantifiers: "Some" vs "Any"',
        rule: 'Use "some" in positive affirmative sentences with plural countables or uncountables. Use "any" in negative sentences (with don\'t/doesn\'t/isn\'t/aren\'t) and general questions.',
        formula: 'Affirmative (+): Subject + have/has + some + [plural noun / uncountable]\nNegative (-): Subject + don\'t/doesn\'t have + any + [plural noun / uncountable]\nQuestion (?): Do you have + any + [plural noun / uncountable]?',
        examples: [
          { sentence: 'We have some apples, but we don\'t have any butter.', translation: 'हमारे पास कुछ सेब हैं, लेकिन हमारे पास बिल्कुल मक्खन नहीं है। / Tenemos algunas manzanas, pero no tenemos nada de mantequilla.', audioText: 'We have some apples, but we don\'t have any butter.', audioId: 'en_a1_u02_l21_g_ex3' },
          { sentence: 'Do you have any fresh tomatoes? — Yes, we have some.', translation: 'क्या आपके पास ताजे टमाटर हैं? — हाँ, हमारे पास कुछ हैं। / ¿Tiene tomates frescos? — Sí, tenemos algunos.', audioText: 'Do you have any fresh tomatoes? Yes, we have some.', audioId: 'en_a1_u02_l21_g_ex4' }
        ],
        explanationByLang: {
          hi: 'सकारात्मक कथनों में "some" का प्रयोग करें। नकारात्मक और प्रश्नों में "any" का प्रयोग करें।',
          es: 'Usa "some" en oraciones afirmativas ("we have some cheese"). Usa "any" en preguntas y oraciones negativas ("we don\'t have any cheese").'
        }
      },
      {
        id: 'g_how_much_how_many',
        title: 'Asking Quantities: "How much" vs "How many"',
        rule: 'Use "How many" with countable plural nouns. Use "How much" with uncountable nouns and when asking for prices.',
        formula: 'How many + [plural countable noun] + do you need?\nHow much + [uncountable noun] + is there?\nHow much is/are + [item]?',
        examples: [
          { sentence: 'How many bananas do you want? — Three bananas, please.', translation: 'आपको कितने केले चाहिए? — तीन केले, कृपया। / ¿Cuántos plátanos quieres? — Tres plátanos, por favor.', audioText: 'How many bananas do you want? Three bananas, please.', audioId: 'en_a1_u02_l21_g_ex5' },
          { sentence: 'How much is a kilo of cheese? — It is twelve dollars.', translation: 'एक किलो चीज़ कितने का है? — यह बारह डॉलर का है। / ¿Cuánto cuesta un kilo de queso? — Cuesta doce dólares.', audioText: 'How much is a kilo of cheese? It is twelve dollars.', audioId: 'en_a1_u02_l21_g_ex6' }
        ],
        explanationByLang: {
          hi: 'गिनने योग्य वस्तुओं के लिए "How many" और अनगिनत वस्तुओं तथा कीमतों के लिए "How much" का प्रयोग करें।',
          es: 'Usa "How many" con contables en plural ("How many eggs?") y "How much" con incontables y precios ("How much milk?", "How much is this?").'
        }
      }
    ]
  },

  // SECTION 7: Common Mistakes
  commonMistakes: [
    {
      id: 'cm_u02_l21_uncountable_plural',
      incorrect: 'I bought two breads and three milks.',
      correct: 'I bought two loaves of bread and three bottles of milk.',
      whyExplanation: 'Bread and milk are uncountable. Use partitive containers like "loaves of" and "bottles of".',
      explanationsByLang: {
        hi: '"breads" या "milks" न कहें। "loaves of bread" और "bottles of milk" कहें।',
        es: 'No digas "*two breads*". Di "two loaves of bread" o "two bottles of milk".',
        fr: 'Dites "two bottles of milk" et non "*two milks*".',
        de: 'Sagen Sie "two bottles of milk".'
      }
    },
    {
      id: 'cm_u02_l21_how_much_apples',
      incorrect: 'How much apples do you want?',
      correct: 'How many apples do you want?',
      whyExplanation: 'Apples are countable plural nouns, so use "How many", not "How much".',
      explanationsByLang: {
        hi: 'Apples काउंटेबल हैं, इसलिए "How many apples" का प्रयोग करें।',
        es: 'Como "apples" es contable plural, usa "How many", nunca "*How much*".',
        fr: 'Utilisez "How many" avec les noms dénombrables au pluriel.',
        de: 'Verwenden Sie "How many" für zählbare Nomen.'
      }
    }
  ],

  // SECTION 11: Realistic Mini Dialogues
  dialogues: [
    {
      id: 'd_u02_l21_at_the_grocery_market',
      title: 'Shopping at the Grocery Stall',
      context: 'Elena is buying fresh produce and dairy from Arthur at the local farmers\' market.',
      characters: [
        { id: 'char_elena', name: 'Elena', role: 'Customer' },
        { id: 'char_arthur', name: 'Arthur', role: 'Vendor' }
      ],
      turns: [
        {
          id: 'turn_1',
          speakerId: 'char_arthur',
          speakerName: 'Arthur',
          text: 'Good afternoon! How can I help you today?',
          translationsByLang: { hi: 'शुभ दोपहर! आज मैं आपकी क्या मदद कर सकता हूँ?', es: '¡Buenas tardes! ¿En qué puedo ayudarle hoy?' },
          audioText: 'Good afternoon! How can I help you today?',
          audioId: 'en_a1_u02_l21_d01_t1'
        },
        {
          id: 'turn_2',
          speakerId: 'char_elena',
          speakerName: 'Elena',
          text: 'Hello! I would like one kilo of red apples and two kilos of potatoes, please.',
          translationsByLang: { hi: 'नमस्ते! मुझे एक किलो लाल सेब और दो किलो आलू चाहिए, कृपया।', es: '¡Hola! Quisiera un kilo de manzanas rojas y dos kilos de patatas, por favor.' },
          audioText: 'Hello! I would like one kilo of red apples and two kilos of potatoes, please.',
          audioId: 'en_a1_u02_l21_d01_t2'
        },
        {
          id: 'turn_3',
          speakerId: 'char_arthur',
          speakerName: 'Arthur',
          text: 'Certainly. Do you need any fresh eggs or cheddar cheese today?',
          translationsByLang: { hi: 'ज़रूर। क्या आपको आज ताजे अंडे या चेडर चीज़ चाहिए?', es: 'Por supuesto. ¿Necesita huevos frescos o queso cheddar hoy?' },
          audioText: 'Certainly. Do you need any fresh eggs or cheddar cheese today?',
          audioId: 'en_a1_u02_l21_d01_t3'
        },
        {
          id: 'turn_4',
          speakerId: 'char_elena',
          speakerName: 'Elena',
          text: 'Yes, I need six eggs. How much is the cheddar cheese?',
          translationsByLang: { hi: 'हाँ, मुझे छह अंडे चाहिए। चेडर चीज़ कितने का है?', es: 'Sí, necesito seis huevos. ¿Cuánto cuesta el queso cheddar?' },
          audioText: 'Yes, I need six eggs. How much is the cheddar cheese?',
          audioId: 'en_a1_u02_l21_d01_t4'
        },
        {
          id: 'turn_5',
          speakerId: 'char_arthur',
          speakerName: 'Arthur',
          text: 'It is four dollars for two hundred grams. Anything else?',
          translationsByLang: { hi: 'दो सौ ग्राम के लिए यह चार डॉलर का है। कुछ और?', es: 'Son cuatro dólares por doscientos gramos. ¿Algo más?' },
          audioText: 'It is four dollars for two hundred grams. Anything else?',
          audioId: 'en_a1_u02_l21_d01_t5'
        },
        {
          id: 'turn_6',
          speakerId: 'char_elena',
          speakerName: 'Elena',
          text: 'No, that is all, thank you! Here is ten dollars.',
          translationsByLang: { hi: 'नहीं, बस इतना ही, धन्यवाद! यह रहे दस डॉलर।', es: 'No, eso es todo, ¡gracias! Aquí tiene diez dólares.' },
          audioText: 'No, that is all, thank you! Here is ten dollars.',
          audioId: 'en_a1_u02_l21_d01_t6'
        }
      ]
    }
  ],

  // SECTION 8, 9, 10, 12, 13, 14, 15: Practice Exercises (15 items)
  practiceExercises: [
    {
      id: 'ex_u02_l21_p1',
      lessonId: 'lesson_a1_2_21',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Select the correct quantifier for this negative sentence:',
      sourceSentence: 'We don\'t have ___ butter in the kitchen.',
      options: [
        { id: 'o1', text: 'any', isCorrect: true },
        { id: 'o2', text: 'some', isCorrect: false },
        { id: 'o3', text: 'a', isCorrect: false }
      ],
      explanation: 'Use "any" in negative sentences.'
    },
    {
      id: 'ex_u02_l21_p2',
      lessonId: 'lesson_a1_2_21',
      stage: 8,
      type: 'fill_blank',
      prompt: 'Complete the quantity question for countable items:',
      sourceSentence: 'How ___ eggs do you need for the cake?',
      options: [
        { id: 'o1', text: 'many', isCorrect: true },
        { id: 'o2', text: 'much', isCorrect: false },
        { id: 'o3', text: 'any', isCorrect: false }
      ],
      explanation: 'Use "How many" with countable plural nouns like eggs.'
    },
    {
      id: 'ex_u02_l21_p3',
      lessonId: 'lesson_a1_2_21',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the grocery request sentence:',
      targetSentence: 'I would like two kilos of fresh tomatoes please',
      wordBank: ['I', 'would', 'like', 'two', 'kilos', 'of', 'fresh', 'tomatoes', 'please', 'is']
    },
    {
      id: 'ex_u02_l21_p4',
      lessonId: 'lesson_a1_2_21',
      stage: 9,
      type: 'listening',
      prompt: 'Listen to the grocery order:',
      audioText: 'We need a bottle of milk and a loaf of bread',
      options: [
        { id: 'o1', text: 'We need a bottle of milk and a loaf of bread', isCorrect: true },
        { id: 'o2', text: 'We need three kilos of rice and four apples', isCorrect: false },
        { id: 'o3', text: 'There is some cheese in the refrigerator', isCorrect: false }
      ],
      explanation: 'The customer orders milk and a loaf of bread.'
    },
    {
      id: 'ex_u02_l21_p5',
      lessonId: 'lesson_a1_2_21',
      stage: 9,
      type: 'listen_and_type',
      prompt: 'Listen and transcribe the price question:',
      audioText: 'How much is a kilo of cheddar cheese',
      targetSentence: 'How much is a kilo of cheddar cheese'
    },
    {
      id: 'ex_u02_l21_p6',
      lessonId: 'lesson_a1_2_21',
      stage: 10,
      type: 'word_ordering',
      prompt: 'Construct the question for the vendor:',
      targetSentence: 'Do you have any fresh bananas today',
      wordBank: ['Do', 'you', 'have', 'any', 'fresh', 'bananas', 'today', 'are', 'is']
    },
    {
      id: 'ex_u02_l21_p7',
      lessonId: 'lesson_a1_2_21',
      stage: 12,
      type: 'speaking',
      prompt: 'Speak this sentence into your microphone:',
      targetSentence: 'Could I have a bottle of olive oil and some cheese, please?',
      audioText: 'Could I have a bottle of olive oil and some cheese, please?'
    },
    {
      id: 'ex_u02_l21_p8',
      lessonId: 'lesson_a1_2_21',
      stage: 13,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'हमारे पास कुछ सेब हैं, लेकिन हमारे पास दूध नहीं है।',
      sourceTranslations: {
        hi: 'हमारे पास कुछ सेब हैं, लेकिन हमारे पास दूध नहीं है।',
        es: 'Tenemos algunas manzanas, pero no tenemos leche.'
      },
      targetSentence: 'We have some apples but we do not have any milk',
      wordBank: ['We', 'have', 'some', 'apples', 'but', 'we', 'do', 'not', 'have', 'any', 'milk', 'is']
    },
    {
      id: 'ex_u02_l21_p9',
      lessonId: 'lesson_a1_2_21',
      stage: 14,
      type: 'fill_blank',
      prompt: 'Interleaved Practice (Combining Unit 1 Have/Has with Quantifiers):',
      sourceSentence: 'She ___ some organic tea on her kitchen shelf.',
      options: [
        { id: 'o1', text: 'has', isCorrect: true },
        { id: 'o2', text: 'have', isCorrect: false },
        { id: 'o3', text: 'is having', isCorrect: false }
      ],
      explanation: 'Third person singular "she" takes "has".'
    },
    {
      id: 'ex_u02_l21_p10',
      lessonId: 'lesson_a1_2_21',
      stage: 15,
      type: 'error_correction',
      prompt: 'Fix the quantifier and noun error:',
      sourceSentence: 'I want to buy three breads and many milks.',
      options: [
        { id: 'o1', text: 'I want to buy three loaves of bread and some milk.', isCorrect: true },
        { id: 'o2', text: 'I want to buy three bread and many milk.', isCorrect: false },
        { id: 'o3', text: 'I want to buy three pieces bread and milk.', isCorrect: false }
      ],
      explanation: 'Bread and milk are uncountable: use "loaves of bread" and "some milk".'
    },
    {
      id: 'ex_u02_l21_p11',
      lessonId: 'lesson_a1_2_21',
      stage: 16,
      type: 'dialogue_completion',
      prompt: 'Select the best cashier response:',
      sourceSentence: 'Cashier: "That is twelve dollars in total. How would you like to pay?" -> Customer: "___"',
      options: [
        { id: 'o1', text: 'By debit card, please. Here is my card.', isCorrect: true },
        { id: 'o2', text: 'I go to work on foot.', isCorrect: false },
        { id: 'o3', text: 'Turn left at the traffic lights.', isCorrect: false }
      ],
      explanation: 'Answers the payment method question directly.'
    },
    {
      id: 'ex_u02_l21_p12',
      lessonId: 'lesson_a1_2_21',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Which of the following nouns is UNCOUNTABLE in English?',
      sourceSentence: 'Grammar classification:',
      options: [
        { id: 'o1', text: 'rice', isCorrect: true },
        { id: 'o2', text: 'egg', isCorrect: false },
        { id: 'o3', text: 'potato', isCorrect: false }
      ],
      explanation: '"rice" is an uncountable mass noun.'
    },
    {
      id: 'ex_u02_l21_p13',
      lessonId: 'lesson_a1_2_21',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Which container expression fits correctly with "cereal"?',
      sourceSentence: 'Partitive phrase:',
      options: [
        { id: 'o1', text: 'a box of cereal', isCorrect: true },
        { id: 'o2', text: 'a bottle of cereal', isCorrect: false },
        { id: 'o3', text: 'a slice of cereal', isCorrect: false }
      ],
      explanation: 'Dry cereal comes in a box.'
    },
    {
      id: 'ex_u02_l21_p14',
      lessonId: 'lesson_a1_2_21',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the sentence:',
      targetSentence: 'There are a lot of fresh vegetables in the basket',
      wordBank: ['There', 'are', 'a', 'lot', 'of', 'fresh', 'vegetables', 'in', 'the', 'basket', 'is']
    },
    {
      id: 'ex_u02_l21_p15',
      lessonId: 'lesson_a1_2_21',
      stage: 12,
      type: 'speaking',
      prompt: 'Speak this phrase clearly into your microphone:',
      targetSentence: 'How much is a kilo of red tomatoes, please?',
      audioText: 'How much is a kilo of red tomatoes, please?'
    }
  ],

  // SECTION 16: Review Exercises (4 items)
  reviewExercises: [
    {
      id: 'ex_u02_l21_rev1',
      lessonId: 'lesson_a1_2_21',
      stage: 16,
      type: 'multiple_choice',
      prompt: 'Which sentence is grammatically correct?',
      sourceSentence: 'Grammar review:',
      options: [
        { id: 'o1', text: 'Do you have any butter in the fridge?', isCorrect: true },
        { id: 'o2', text: 'Do you have some butters in the fridge?', isCorrect: false },
        { id: 'o3', text: 'Do you have any butters in the fridge?', isCorrect: false }
      ],
      explanation: 'Butter is uncountable and questions use "any".'
    },
    {
      id: 'ex_u02_l21_rev2',
      lessonId: 'lesson_a1_2_21',
      stage: 16,
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct quantifier:',
      sourceSentence: 'There is ___ milk in the bottle, but not much.',
      options: [
        { id: 'o1', text: 'some', isCorrect: true },
        { id: 'o2', text: 'any', isCorrect: false },
        { id: 'o3', text: 'many', isCorrect: false }
      ],
      explanation: 'Use "some" in affirmative statements.'
    },
    {
      id: 'ex_u02_l21_rev3',
      lessonId: 'lesson_a1_2_21',
      stage: 16,
      type: 'word_ordering',
      prompt: 'Build the sentence:',
      targetSentence: 'We bought two loaves of whole wheat bread',
      wordBank: ['We', 'bought', 'two', 'loaves', 'of', 'whole', 'wheat', 'bread', 'are']
    },
    {
      id: 'ex_u02_l21_rev4',
      lessonId: 'lesson_a1_2_21',
      stage: 16,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'क्या आपको आज कुछ और चाहिए? — नहीं, बस इतना ही, धन्यवाद।',
      sourceTranslations: { hi: 'क्या आपको आज कुछ और चाहिए? — नहीं, बस इतना ही, धन्यवाद।', es: '¿Desea alguna otra cosa hoy? — No, eso es todo, gracias.' },
      targetSentence: 'Would you like anything else today No that is all thank you',
      wordBank: ['Would', 'you', 'like', 'anything', 'else', 'today', 'No', 'that', 'is', 'all', 'thank', 'you']
    }
  ],

  // SECTION 17: Assessment Exercises (10 items)
  assessmentExercises: [
    {
      id: 'ex_u02_l21_a1',
      lessonId: 'lesson_a1_2_21',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Choose the correct word: "How ___ water do you drink each day?"',
      sourceSentence: 'Quantifier test:',
      options: [
        { id: 'o1', text: 'much', isCorrect: true },
        { id: 'o2', text: 'many', isCorrect: false },
        { id: 'o3', text: 'any', isCorrect: false },
        { id: 'o4', text: 'a lot', isCorrect: false }
      ],
      explanation: 'Water is uncountable, so use "How much".'
    },
    {
      id: 'ex_u02_l21_a2',
      lessonId: 'lesson_a1_2_21',
      stage: 17,
      type: 'fill_blank',
      prompt: 'Select the correct quantifier: "I don\'t have ___ money in my wallet."',
      sourceSentence: 'Sentence completion:',
      options: [
        { id: 'o1', text: 'any', isCorrect: true },
        { id: 'o2', text: 'some', isCorrect: false },
        { id: 'o3', text: 'many', isCorrect: false },
        { id: 'o4', text: 'a', isCorrect: false }
      ],
      explanation: 'Use "any" in negative sentences.'
    },
    {
      id: 'ex_u02_l21_a3',
      lessonId: 'lesson_a1_2_21',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the request:',
      targetSentence: 'Could I have a bottle of water please',
      wordBank: ['Could', 'I', 'have', 'a', 'bottle', 'of', 'water', 'please', 'is', 'do']
    },
    {
      id: 'ex_u02_l21_a4',
      lessonId: 'lesson_a1_2_21',
      stage: 17,
      type: 'error_correction',
      prompt: 'Correct the sentence:',
      sourceSentence: 'We need three milks and two cheeses.',
      options: [
        { id: 'o1', text: 'We need three bottles of milk and some cheese.', isCorrect: true },
        { id: 'o2', text: 'We need three milk and two cheese.', isCorrect: false },
        { id: 'o3', text: 'We need three piece of milk and cheeses.', isCorrect: false }
      ],
      explanation: 'Use containers: "three bottles of milk and some cheese".'
    },
    {
      id: 'ex_u02_l21_a5',
      lessonId: 'lesson_a1_2_21',
      stage: 17,
      type: 'listening',
      prompt: 'Listen and select what the customer requests:',
      audioText: 'I would like one kilo of red apples and a bottle of olive oil',
      options: [
        { id: 'o1', text: 'I would like one kilo of red apples and a bottle of olive oil', isCorrect: true },
        { id: 'o2', text: 'I would like two boxes of tea and three eggs', isCorrect: false },
        { id: 'o3', text: 'There are five bananas in the shopping cart', isCorrect: false }
      ],
      explanation: 'The audio clearly states one kilo of apples and a bottle of olive oil.'
    },
    {
      id: 'ex_u02_l21_a6',
      lessonId: 'lesson_a1_2_21',
      stage: 17,
      type: 'listen_and_type',
      prompt: 'Listen and transcribe accurately:',
      audioText: 'There is some cheese in the refrigerator',
      targetSentence: 'There is some cheese in the refrigerator'
    },
    {
      id: 'ex_u02_l21_a7',
      lessonId: 'lesson_a1_2_21',
      stage: 17,
      type: 'dialogue_completion',
      prompt: 'Select the best response:',
      sourceSentence: 'Customer: "How much are the organic bananas?" -> Vendor: "___"',
      options: [
        { id: 'o1', text: 'They are two dollars and twenty cents a kilo.', isCorrect: true },
        { id: 'o2', text: 'I take the metro to work.', isCorrect: false },
        { id: 'o3', text: 'Turn right at the traffic lights.', isCorrect: false }
      ],
      explanation: 'Answers the price inquiry directly.'
    },
    {
      id: 'ex_u02_l21_a8',
      lessonId: 'lesson_a1_2_21',
      stage: 17,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'क्या आपके पास कोई ताज़ा मक्खन है?',
      sourceTranslations: { hi: 'क्या आपके पास कोई ताज़ा मक्खन है?', es: '¿Tiene mantequilla fresca?' },
      targetSentence: 'Do you have any fresh butter',
      wordBank: ['Do', 'you', 'have', 'any', 'fresh', 'butter', 'some', 'is', 'are']
    },
    {
      id: 'ex_u02_l21_a9',
      lessonId: 'lesson_a1_2_21',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Which word means the printed slip showing proof of payment?',
      sourceSentence: 'Checkout term:',
      options: [
        { id: 'o1', text: 'receipt', isCorrect: true },
        { id: 'o2', text: 'delay', isCorrect: false },
        { id: 'o3', text: 'platform', isCorrect: false },
        { id: 'o4', text: 'curtain', isCorrect: false }
      ],
      explanation: '"receipt" is proof of payment.'
    },
    {
      id: 'ex_u02_l21_a10',
      lessonId: 'lesson_a1_2_21',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the final sentence:',
      targetSentence: 'Put all the groceries into the shopping cart',
      wordBank: ['Put', 'all', 'the', 'groceries', 'into', 'the', 'shopping', 'cart', 'is', 'on']
    }
  ]
};
