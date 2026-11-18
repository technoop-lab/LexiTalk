import { DetailedLessonData } from '../../types';

export const LESSON_A1_2_22_DATA: DetailedLessonData = {
  id: 'lesson_a1_2_22',
  unitId: 'unit_a1_2',
  title: 'Ordering in a Restaurant & Café Conversations',
  cefr: 'A1',
  icon: '🍽️',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Ordering Meals, Politeness Strategies, and Dining Interactions',
    description: 'Master polite request formulas in dining contexts ("I would like / I\'d like...", "Could I have...", "Can we have the bill, please?"). Learn restaurant vocabulary (starter, main course, dessert, sparkling water, napkin, waiter/server), dietary preferences, and conversational etiquette for cafés and restaurants.',
    descriptionsByLang: {
      hi: 'रेस्तरां और कैफे में बातचीत, भोजन ऑर्डर करने के शिष्टाचार और विनम्र वाक्यों ("I would like...", "Could I have...", "Can we have the bill?") का उपयोग सीखें। मेनू शब्दावली (starter, main course, dessert, drinks, bill) और शाकाहारी/आहार प्राथमिकताओं को व्यक्त करने का अभ्यास करें।',
      es: 'Aprende a pedir comida y bebida en restaurantes y cafeterías con fórmulas de cortesía ("I\'d like...", "Could I have...", "Could you bring the bill, please?"). Domina vocabulario de menú (starter, main course, dessert), preferencias alimentarias y etiqueta en la mesa.',
      fr: 'Apprenez à commander au restaurant et au café avec des formules de politesse adaptées et le vocabulaire du menu.',
      de: 'Lernen Sie, in Restaurants und Cafés höflich Speisen und Getränke zu bestellen und die Rechnung zu verlangen.',
      pt: 'Aprenda a fazer pedidos em restaurantes e cafés usando estruturas formais de cortesia e vocabulário gastronômico.',
      zh: '掌握在餐厅与咖啡馆点餐的礼貌用语（"I would like...", "Could I have...", "The bill, please"）及菜单分段词汇（前菜、主菜、甜点、账单）。',
      ar: 'تعلم كيفية طلب الطعام والشراب في المطاعم والمقاهي باستخدام عبارات اللباقة وحساب الفاتورة.',
      ja: 'レストランやカフェでの注文、丁寧な依頼表現（"I would like...", "Could I have..."）、コース料理や伝票に関する英会話を学びます。',
      ru: 'Научитесь делать заказы в ресторане и кафе с помощью вежливых конструкций ("I would like...", "Can I have...") и изучите ресторанную лексику.'
    },
    canDoStatements: [
      'Order food and drinks politely: "I would like the grilled salmon and a bottle of sparkling water"',
      'Ask the server for recommendations: "What do you recommend for the main course?"',
      'Express dietary preferences: "Is this dish vegetarian / gluten-free?"',
      'Request the check/bill: "Could we have the bill, please? Do you accept credit cards?"',
      'Understand waiter questions: "Are you ready to order?", "Still or sparkling water?"'
    ],
    canDoByLang: {
      hi: [
        'विनम्रता से भोजन ऑर्डर करना: "I would like the pasta, please"',
        'सर्वर से सुझाव मांगना: "What do you recommend?"',
        'शाकाहारी प्राथमिकताएं पूछना: "Is this vegetarian?"',
        'बिल मांगना और भुगतान करना: "Can we have the bill, please?"'
      ],
      es: [
        'Pedir comida y bebida con cortesía: "I would like the chicken with rice"',
        'Preguntar recomendaciones al camarero',
        'Preguntar sobre opciones vegetarianas',
        'Pedir la cuenta: "Could we have the bill, please?"'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (25 items)
  vocabulary: [
    {
      id: 'v_u02_l22_menu',
      word: 'menu',
      phonetic: '/ˈmen.juː/',
      meaning: 'A list of the food and drink options available in a restaurant',
      translationsByLang: { hi: 'मेनू', es: 'menú / carta', fr: 'menu / carte', de: 'Speisekarte / Menü', pt: 'cardápio / menu', zh: '菜单', ar: 'قائمة الطعام / المنيو', ja: 'メニュー', ru: 'меню' },
      exampleSentence: 'Could we see the dinner menu, please?',
      exampleTranslationByLang: { hi: 'क्या हम रात के खाने का मेनू देख सकते हैं, कृपया?', es: '¿Podríamos ver la carta de la cena, por favor?' },
      audioText: 'menu',
      audioId: 'en_a1_u02_l22_v_menu',
      slowAudioId: 'en_a1_u02_l22_v_menu_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📜',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_waiter_server',
      word: 'waiter / waitress / server',
      phonetic: '/ˈweɪ.t̬ɚ/ /ˈsɝː.vɚ/',
      meaning: 'A person whose job is to serve customers at their tables in a restaurant',
      translationsByLang: { hi: 'वेटर / वेटरन / सर्वर', es: 'camarero / camarera / mesero', fr: 'serveur / serveuse', de: 'Kellner / Kellnerin / Bedienung', pt: 'garçom / garçonete / empregado de mesa', zh: '服务员 / 侍者', ar: 'نادل / نادلة', ja: 'ウェイター / ウェイトレス / サーバー', ru: 'официант / официантка' },
      exampleSentence: 'The server brings our drinks to the table.',
      exampleTranslationByLang: { hi: 'सर्वर हमारे पेय टेबल पर लाता है।', es: 'El camarero trae nuestras bebidas a la mesa.' },
      audioText: 'waiter and waitress and server',
      audioId: 'en_a1_u02_l22_v_waiter_server',
      slowAudioId: 'en_a1_u02_l22_v_waiter_server_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🤵',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_starter_appetizer',
      word: 'starter / appetizer',
      phonetic: '/ˈstɑːr.t̬ɚ/ /ˈæp.ə.taɪ.zɚ/',
      meaning: 'A small dish of food served before the main course of a meal',
      translationsByLang: { hi: 'स्टार्टर / ऐपेटाइज़र', es: 'entrante / aperitivo', fr: 'entrée / apéritif', de: 'Vorspeise / Appetithäppchen', pt: 'entrada / aperitivo', zh: '前菜 / 开胃菜', ar: 'مقبلات / طبق افتتاحي', ja: '前菜 / アペタイザー', ru: 'закуска / первое блюдо' },
      exampleSentence: 'For my starter, I would like the tomato soup.',
      exampleTranslationByLang: { hi: 'स्टार्टर के लिए, मैं टमाटर का सूप लेना चाहूँगा।', es: 'De entrante, me gustaría la sopa de tomate.' },
      audioText: 'starter and appetizer',
      audioId: 'en_a1_u02_l22_v_starter_appetizer',
      slowAudioId: 'en_a1_u02_l22_v_starter_appetizer_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥗',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_main_course',
      word: 'main course / entrée',
      phonetic: '/ˌmeɪn ˈkɔːrs/',
      meaning: 'The principal dish of a meal consisting of multiple courses',
      translationsByLang: { hi: 'मुख्य व्यंजन / मेन कोर्स', es: 'plato principal / segundo plato', fr: 'plat principal', de: 'Hauptgericht / Hauptspeise', pt: 'prato principal', zh: '主菜 / 主食', ar: 'الطبق الرئيسي', ja: 'メインディッシュ / 主菜', ru: 'основное блюдо / горячее' },
      exampleSentence: 'For the main course, I will have the grilled chicken with roasted potatoes.',
      exampleTranslationByLang: { hi: 'मेन कोर्स के लिए, मैं भुने हुए आलू के साथ ग्रिल्ड चिकन लूँगा।', es: 'De plato principal, tomaré el pollo a la plancha con patatas asadas.' },
      audioText: 'main course and entrée',
      audioId: 'en_a1_u02_l22_v_main_course',
      slowAudioId: 'en_a1_u02_l22_v_main_course_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍗',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_dessert',
      word: 'dessert',
      phonetic: '/dɪˈzɝːt/',
      meaning: 'The sweet course eaten at the end of a meal',
      translationsByLang: { hi: 'मीठा / डेज़र्ट', es: 'postre', fr: 'dessert', de: 'Dessert / Nachtisch', pt: 'sobremesa', zh: '甜点 / 甜品', ar: 'حلوى / طبق التحلية', ja: 'デザート / スイーツ', ru: 'десерт / сладкое' },
      exampleSentence: 'Would you like chocolate cake or fresh fruit for dessert?',
      exampleTranslationByLang: { hi: 'क्या आप मीठे में चॉकलेट केक या ताजे फल पसंद करेंगे?', es: '¿Te gustaría tarta de chocolate o fruta fresca de postre?' },
      audioText: 'dessert',
      audioId: 'en_a1_u02_l22_v_dessert',
      slowAudioId: 'en_a1_u02_l22_v_dessert_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍨',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_soup',
      word: 'soup',
      phonetic: '/suːp/',
      meaning: 'A liquid dish typically made by boiling meat, fish, or vegetables in stock',
      translationsByLang: { hi: 'सूप', es: 'sopa', fr: 'soupe / potage', de: 'Suppe', pt: 'sopa', zh: '汤', ar: 'حساء / شوربة', ja: 'スープ', ru: 'суп' },
      exampleSentence: 'The hot vegetable soup is delicious on cold days.',
      exampleTranslationByLang: { hi: 'ठंड के दिनों में गर्म सब्जियों का सूप बहुत स्वादिष्ट होता है।', es: 'La sopa caliente de verduras está deliciosa en los días fríos.' },
      audioText: 'soup',
      audioId: 'en_a1_u02_l22_v_soup',
      slowAudioId: 'en_a1_u02_l22_v_soup_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥣',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_salad',
      word: 'salad',
      phonetic: '/ˈsæl.əd/',
      meaning: 'A dish of mixed raw vegetables served cold with a dressing',
      translationsByLang: { hi: 'सलाद', es: 'ensalada', fr: 'salade', de: 'Salat', pt: 'salada', zh: '沙拉 / 凉拌菜', ar: 'سلطة', ja: 'サラダ', ru: 'салат' },
      exampleSentence: 'I would like a green salad with olive oil dressing.',
      exampleTranslationByLang: { hi: 'मुझे जैतून के तेल की ड्रेसिंग वाला हरा सलाद चाहिए।', es: 'Quisiera una ensalada verde aliñada con aceite de oliva.' },
      audioText: 'salad',
      audioId: 'en_a1_u02_l22_v_salad',
      slowAudioId: 'en_a1_u02_l22_v_salad_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥗',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_sparkling_still_water',
      word: 'sparkling / still water',
      phonetic: '/ˈspɑːr.klɪŋ/ /stɪl ˈwɑː.t̬ɚ/',
      meaning: 'Carbonated fizzy water or natural uncarbonated drinking water',
      translationsByLang: { hi: 'स्पार्कलिंग (सोडा) पानी / सादा पानी', es: 'agua con gas / agua sin gas', fr: 'eau gazeuse / eau plate', de: 'Mineralwasser mit Kohlensäure / stilles Wasser', pt: 'água com gás / água sem gás', zh: '气泡水 / 纯净水（无气）', ar: 'مياه غازية / مياه عادية (بدون غاز)', ja: '炭酸水（スパークリング） / スティルウォーター（無炭酸水）', ru: 'газированная вода / негазированная вода' },
      exampleSentence: 'Would you prefer still water or sparkling water?',
      exampleTranslationByLang: { hi: 'क्या आप सादा पानी पसंद करेंगे या स्पार्कलिंग पानी?', es: '¿Prefiere agua sin gas o agua con gas?' },
      audioText: 'sparkling and still water',
      audioId: 'en_a1_u02_l22_v_sparkling_still',
      slowAudioId: 'en_a1_u02_l22_v_sparkling_still_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍾',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_napkin',
      word: 'napkin / serviette',
      phonetic: '/ˈnæp.kɪn/',
      meaning: 'A piece of cloth or paper used at a meal to wipe fingers or lips',
      translationsByLang: { hi: 'नैपकिन / टिशू पेपर', es: 'servilleta', fr: 'serviette de table', de: 'Serviette', pt: 'guardanapo', zh: '餐巾纸 / 餐巾', ar: 'منديل مائدة', ja: 'ナプキン', ru: 'салфетка' },
      exampleSentence: 'Could you bring us two extra napkins, please?',
      exampleTranslationByLang: { hi: 'क्या आप हमारे लिए दो अतिरिक्त नैपकिन ला सकते हैं, कृपया?', es: '¿Podría traernos dos servilletas adicionales, por favor?' },
      audioText: 'napkin and serviette',
      audioId: 'en_a1_u02_l22_v_napkin',
      slowAudioId: 'en_a1_u02_l22_v_napkin_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧻',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_bill_check',
      word: 'bill / check',
      phonetic: '/bɪl/ /tʃek/',
      meaning: 'A printed statement of the total money owed for food and drink at a restaurant',
      translationsByLang: { hi: 'बिल / चेक', es: 'cuenta / factura', fr: 'addition / note', de: 'Rechnung', pt: 'conta', zh: '账单 / 结账单', ar: 'الفاتورة / حساب المطعم', ja: 'お会計 / 伝票 / チェック', ru: 'счет' },
      exampleSentence: 'Excuse me, could we have the bill, please?',
      exampleTranslationByLang: { hi: 'माफ़ कीजिए, क्या हमें बिल मिल सकता है, कृपया?', es: 'Disculpe, ¿nos trae la cuenta, por favor?' },
      audioText: 'bill and check',
      audioId: 'en_a1_u02_l22_v_bill_check',
      slowAudioId: 'en_a1_u02_l22_v_bill_check_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧾',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_tip',
      word: 'tip / gratuity',
      phonetic: '/tɪp/',
      meaning: 'A small sum of money given to a server for good service',
      translationsByLang: { hi: 'टिप / बख्शीश', es: 'propina', fr: 'pourboire', de: 'Trinkgeld', pt: 'gorjeta', zh: '小费', ar: 'بقشيش / إكرامية', ja: 'チップ', ru: 'чаевые' },
      exampleSentence: 'The service was excellent, so we left a generous tip.',
      exampleTranslationByLang: { hi: 'सेवा उत्कृष्ट थी, इसलिए हमने अच्छी टिप छोड़ी।', es: 'El servicio fue excelente, así que dejamos una buena propina.' },
      audioText: 'tip and gratuity',
      audioId: 'en_a1_u02_l22_v_tip',
      slowAudioId: 'en_a1_u02_l22_v_tip_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💵',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_vegetarian',
      word: 'vegetarian / vegan',
      phonetic: '/ˌvedʒ.əˈter.i.ən/',
      meaning: 'Food containing no meat or animal flesh',
      translationsByLang: { hi: 'शाकाहारी / वेजीटेरियन', es: 'vegetariano / vegano', fr: 'végétarien / végane', de: 'vegetarisch / vegan', pt: 'vegetariano / vegano', zh: '素食 / 纯素', ar: 'نباتي / خضري', ja: 'ベジタリアン（菜食） / ヴィーガン', ru: 'вегетарианский / веганский' },
      exampleSentence: 'Do you have any vegetarian pasta dishes on the menu?',
      exampleTranslationByLang: { hi: 'क्या मेनू में कोई शाकाहारी पास्ता व्यंजन हैं?', es: '¿Tienen algún plato de pasta vegetariano en la carta?' },
      audioText: 'vegetarian and vegan',
      audioId: 'en_a1_u02_l22_v_vegetarian',
      slowAudioId: 'en_a1_u02_l22_v_vegetarian_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥗',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_delicious',
      word: 'delicious / tasty',
      phonetic: '/dɪˈlɪʃ.əs/',
      meaning: 'Highly pleasant to the taste',
      translationsByLang: { hi: 'स्वादिष्ट / लजीज', es: 'delicioso / sabroso / rico', fr: 'délicieux / savoureux', de: 'köstlich / lecker', pt: 'delicioso / gostoso / saboroso', zh: '美味的 / 好吃的', ar: 'لذيذ / شهي', ja: '美味しい / 美味な', ru: 'вкусный / восхитительный' },
      exampleSentence: 'This pasta sauce is absolutely delicious.',
      exampleTranslationByLang: { hi: 'यह पास्ता सॉस वाकई बहुत स्वादिष्ट है।', es: 'Esta salsa para pasta está absolutamente deliciosa.' },
      audioText: 'delicious and tasty',
      audioId: 'en_a1_u02_l22_v_delicious',
      slowAudioId: 'en_a1_u02_l22_v_delicious_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '😋',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_order_verb',
      word: 'order (orders, ordering)',
      phonetic: '/ˈɔːr.dɚ/',
      meaning: 'To request food or drink to be made or brought in a restaurant',
      translationsByLang: { hi: 'ऑर्डर करना / मंगवाना', es: 'pedir / ordenar', fr: 'commander', de: 'bestellen', pt: 'pedir / encomendar', zh: '点餐 / 点菜', ar: 'يطلب (طعاماً أو شراباً)', ja: '注文する / オーダーする', ru: 'заказывать' },
      exampleSentence: 'Are you ready to order, or do you need a few more minutes?',
      exampleTranslationByLang: { hi: 'क्या आप ऑर्डर करने के लिए तैयार हैं, या आपको कुछ और मिनट चाहिए?', es: '¿Están listos para pedir, o necesitan unos minutos más?' },
      audioText: 'order',
      audioId: 'en_a1_u02_l22_v_order_verb',
      slowAudioId: 'en_a1_u02_l22_v_order_verb_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📋',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_recommend',
      word: 'recommend',
      phonetic: '/ˌrek.əˈmend/',
      meaning: 'To advise or suggest as being suitable or good',
      translationsByLang: { hi: 'सुझाव देना / सिफारिश करना', es: 'recomendar', fr: 'recommander / conseiller', de: 'empfehlen', pt: 'recomendar', zh: '推荐', ar: 'يوصي بـ / يقترح', ja: '勧める / おすすめする', ru: 'рекомендовать / советовать' },
      exampleSentence: 'What dish do you recommend for dinner tonight?',
      exampleTranslationByLang: { hi: 'आज रात के खाने के लिए आप किस व्यंजन का सुझाव देते हैं?', es: '¿Qué plato nos recomienda para cenar esta noche?' },
      audioText: 'recommend',
      audioId: 'en_a1_u02_l22_v_recommend',
      slowAudioId: 'en_a1_u02_l22_v_recommend_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⭐',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_table_for_two',
      word: 'a table for two / three',
      phonetic: '/ə ˈteɪ.bəl fɔːr tuː/',
      meaning: 'A dining table reserved or requested for a specific number of patrons',
      translationsByLang: { hi: 'दो / तीन लोगों के लिए टेबल', es: 'una mesa para dos / tres', fr: 'une table pour deux / trois', de: 'ein Tisch für zwei / drei', pt: 'uma mesa para dois / três', zh: '两人桌 / 三人桌', ar: 'طاولة لشخصين / لثلاثة أشخاص', ja: '2人（3人）用のテーブル', ru: 'столик на двоих / троих' },
      exampleSentence: 'Good evening, we would like a table for two by the window.',
      exampleTranslationByLang: { hi: 'शुभ संध्या, हम खिड़की के पास दो लोगों के लिए एक टेबल चाहेंगे।', es: 'Buenas noches, quisiéramos una mesa para dos junto a la ventana.' },
      audioText: 'a table for two and three',
      audioId: 'en_a1_u02_l22_v_table_for_two',
      slowAudioId: 'en_a1_u02_l22_v_table_for_two_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🪑',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_fork_knife_spoon',
      word: 'cutlery (fork, knife, spoon)',
      phonetic: '/ˈkʌt.lɚ.i/',
      meaning: 'Utensils used for eating and serving food',
      translationsByLang: { hi: 'कांटा, छुरी और चम्मच (कटलरी)', es: 'cubiertos (tenedor, cuchillo, cuchara)', fr: 'couverts (fourchette, couteau, cuillère)', de: 'Besteck (Gabel, Messer, Löffel)', pt: 'talheres (garfo, faca, colher)', zh: '餐具（叉子、餐刀、勺子）', ar: 'أدوات المائدة (شوكة، سكين، ملعقة)', ja: 'カトラリー（フォーク、ナイフ、スプーン）', ru: 'столовые приборы (вилка, нож, ложка)' },
      exampleSentence: 'Could I please have a clean fork and knife?',
      exampleTranslationByLang: { hi: 'क्या मुझे एक साफ कांटा और छुरी मिल सकती है, कृपया?', es: '¿Podría traerme un tenedor y un cuchillo limpios, por favor?' },
      audioText: 'cutlery fork knife spoon',
      audioId: 'en_a1_u02_l22_v_cutlery',
      slowAudioId: 'en_a1_u02_l22_v_cutlery_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍴',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_glass_cup',
      word: 'glass / cup / mug',
      phonetic: '/ɡlæs/ /kʌp/',
      meaning: 'Containers used for drinking beverages',
      translationsByLang: { hi: 'गिलास / कप / मग', es: 'vaso / taza / jarra', fr: 'verre / tasse / mug', de: 'Glas / Tasse / Becher', pt: 'copo / xícara / caneca', zh: '玻璃杯 / 茶杯 / 马克杯', ar: 'كوب / فنجان', ja: 'グラス / コップ / カップ', ru: 'стакан / чашка / кружка' },
      exampleSentence: 'A glass of orange juice and a cup of black coffee, please.',
      exampleTranslationByLang: { hi: 'एक गिलास संतरे का रस और एक कप ब्लैक कॉफ़ी, कृपया।', es: 'Un vaso de zumo de naranja y una taza de café solo, por favor.' },
      audioText: 'glass and cup and mug',
      audioId: 'en_a1_u02_l22_v_glass_cup',
      slowAudioId: 'en_a1_u02_l22_v_glass_cup_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥛',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_cheers',
      word: 'cheers / bon appétit',
      phonetic: '/tʃɪrz/',
      meaning: 'Friendly toast before drinking or wishing someone a good meal',
      translationsByLang: { hi: 'चीयर्स! / भोजन का आनंद लें!', es: '¡salud! / ¡buen provecho!', fr: 'santé ! / bon appétit !', de: 'Prost! / Guten Appetit!', pt: 'saúde! / bom apetite!', zh: '干杯！ / 祝你好胃口！', ar: 'في صحتك! / بالهناء والشفاء!', ja: '乾杯！ / いただきます！', ru: 'ваше здоровье! / приятного аппетита!' },
      exampleSentence: 'Cheers! To a wonderful holiday with good friends.',
      exampleTranslationByLang: { hi: 'चीयर्स! अच्छे दोस्तों के साथ शानदार छुट्टियों के नाम।', es: '¡Salud! Por unas vacaciones maravillosas con buenos amigos.' },
      audioText: 'cheers and bon appétit',
      audioId: 'en_a1_u02_l22_v_cheers',
      slowAudioId: 'en_a1_u02_l22_v_cheers_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥂',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_reservation',
      word: 'reservation / booking',
      phonetic: '/ˌrez.ɚˈveɪ.ʃən/',
      meaning: 'An arrangement to secure a restaurant table in advance',
      translationsByLang: { hi: 'आरक्षण / बुकिंग / रिज़र्वेशन', es: 'reserva', fr: 'réservation', de: 'Reservierung / Buchung', pt: 'reserva', zh: '预订 / 预定', ar: 'حجز مسبق', ja: '予約 / テーブル予約', ru: 'бронь / резервирование' },
      exampleSentence: 'I have a reservation for two people under the name Johnson.',
      exampleTranslationByLang: { hi: 'जॉनसन नाम से मेरे पास दो लोगों के लिए एक रिज़र्वेशन है।', es: 'Tengo una reserva para dos personas a nombre de Johnson.' },
      audioText: 'reservation and booking',
      audioId: 'en_a1_u02_l22_v_reservation',
      slowAudioId: 'en_a1_u02_l22_v_reservation_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📅',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_pay_card_cash',
      word: 'pay by card / in cash',
      phonetic: '/peɪ baɪ kɑːrd/',
      meaning: 'Methods of settling the restaurant bill',
      translationsByLang: { hi: 'कार्ड से / नकद भुगतान करना', es: 'pagar con tarjeta / en efectivo', fr: 'payer par carte / en espèces', de: 'mit Karte / bar bezahlen', pt: 'pagar com cartão / em dinheiro', zh: '刷卡 / 付现金', ar: 'الدفع بالبطاقة / نقداً', ja: 'カードで支払う / 現金で支払う', ru: 'платить картой / наличными' },
      exampleSentence: 'Can we pay separately by credit card?',
      exampleTranslationByLang: { hi: 'क्या हम क्रेडिट कार्ड द्वारा अलग-अलग भुगतान कर सकते हैं?', es: '¿Podemos pagar por separado con tarjeta de crédito?' },
      audioText: 'pay by card and in cash',
      audioId: 'en_a1_u02_l22_v_pay_methods',
      slowAudioId: 'en_a1_u02_l22_v_pay_methods_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💳',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_grilled_fried',
      word: 'grilled / roasted / fried',
      phonetic: '/ɡrɪld/ /ˈroʊ.stɪd/ /fraɪd/',
      meaning: 'Common cooking methods for restaurant dishes',
      translationsByLang: { hi: 'ग्रिल्ड / भुना हुआ / तला हुआ', es: 'a la plancha / asado / frito', fr: 'grillé / rôti / frit', de: 'gegrillt / geröstet / gebraten', pt: 'grelhado / assado / frito', zh: '烤的 / 煎炸的', ar: 'مشوي / محمص / مقلي', ja: 'グリルした / ローストした / 揚げた', ru: 'на гриле / запеченный / жареный' },
      exampleSentence: 'I prefer grilled salmon over fried fish.',
      exampleTranslationByLang: { hi: 'मैं तली हुई मछली की तुलना में ग्रिल्ड सैल्मन पसंद करता हूँ।', es: 'Prefiero el salmón a la plancha antes que el pescado frito.' },
      audioText: 'grilled and roasted and fried',
      audioId: 'en_a1_u02_l22_v_cooked_styles',
      slowAudioId: 'en_a1_u02_l22_v_cooked_styles_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍳',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_busy_full',
      word: 'busy / fully booked',
      phonetic: '/ˈbɪz.i/ /ˈfʊl.i bʊkt/',
      meaning: 'Having all tables occupied by patrons',
      translationsByLang: { hi: 'व्यस्त / पूरी तरह से बुक', es: 'concurrido / completo / lleno', fr: 'complet / très fréquenté', de: 'voll besetzt / ausgebucht', pt: 'lotado / esgotado', zh: '客满 / 预订已满', ar: 'مزدحم / محجوز بالكامل', ja: '混雑している / 満席', ru: 'занято / все забронировано' },
      exampleSentence: 'The café is very busy on Sunday mornings.',
      exampleTranslationByLang: { hi: 'रविवार की सुबह कैफे बहुत व्यस्त रहता है।', es: 'La cafetería está muy concurrida los domingos por la mañana.' },
      audioText: 'busy and fully booked',
      audioId: 'en_a1_u02_l22_v_busy_full',
      slowAudioId: 'en_a1_u02_l22_v_busy_full_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👥',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_spicy_sweet',
      word: 'spicy / sweet / salty',
      phonetic: '/ˈspaɪ.si/ /swiːt/ /ˈsɑːl.t̬i/',
      meaning: 'Adjectives describing food flavor and taste',
      translationsByLang: { hi: 'तीखा / मीठा / नमकीन', es: 'picante / dulce / salado', fr: 'épicé / sucré / salé', de: 'scharf / süß / salzig', pt: 'picante / doce / salgado', zh: '辣的 / 甜的 / 咸的', ar: 'حار / حلو / مالح', ja: '辛い / 甘い / 塩辛い', ru: 'острый / сладкий / соленый' },
      exampleSentence: 'Is this curry very spicy?',
      exampleTranslationByLang: { hi: 'क्या यह करी बहुत तीखी है?', es: '¿Este curry es muy picante?' },
      audioText: 'spicy and sweet and salty',
      audioId: 'en_a1_u02_l22_v_flavors',
      slowAudioId: 'en_a1_u02_l22_v_flavors_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌶️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l22_ready_to_order',
      word: 'ready to order',
      phonetic: '/ˈred.i tuː ˈɔːr.dɚ/',
      meaning: 'Prepared to inform the server of selected food items',
      translationsByLang: { hi: 'ऑर्डर करने के लिए तैयार', es: 'listo para pedir', fr: 'prêt à commander', de: 'bereit zu bestellen', pt: 'pronto para pedir', zh: '准备好点餐', ar: 'جاهز للطلب', ja: '注文の準備ができている', ru: 'готов сделать заказ' },
      exampleSentence: 'We are ready to order now, thank you.',
      exampleTranslationByLang: { hi: 'हम अब ऑर्डर करने के लिए तैयार हैं, धन्यवाद।', es: 'Ya estamos listos para pedir, gracias.' },
      audioText: 'ready to order',
      audioId: 'en_a1_u02_l22_v_ready_to_order',
      slowAudioId: 'en_a1_u02_l22_v_ready_to_order_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🙋‍♂️',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks
  expressions: [
    {
      id: 'chunk_u02_l22_table_for_two_please',
      text: 'Good evening, a table for two, please.',
      meaning: 'Standard greeting upon arriving at a restaurant',
      translationsByLang: {
        hi: 'शुभ संध्या, दो लोगों के लिए एक टेबल, कृपया।',
        es: 'Buenas noches, una mesa para dos, por favor.',
        fr: 'Bonsoir, une table pour deux, s\'il vous plaît.',
        de: 'Guten Abend, einen Tisch für zwei Personen, bitte.'
      },
      audioText: 'Good evening, a table for two, please.',
      audioId: 'en_a1_u02_l22_c_table_two',
      context: 'Restaurant reception / entrance',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_u02_l22_id_like_to_have',
      text: 'I would like the grilled salmon with roasted vegetables, please.',
      meaning: 'Polite formal restaurant ordering pattern',
      translationsByLang: {
        hi: 'मैं भुनी हुई सब्जियों के साथ ग्रिल्ड सैल्मन लेना चाहूँगा, कृपया।',
        es: 'Quisiera el salmón a la plancha con verduras asadas, por favor.',
        fr: 'Je voudrais le saumon grillé avec des légumes rôtis, s\'il vous plaît.',
        de: 'Ich hätte gerne den gegrillten Lachs mit Röstgemüse, bitte.'
      },
      audioText: 'I would like the grilled salmon with roasted vegetables, please.',
      audioId: 'en_a1_u02_l22_c_order_salmon',
      context: 'Ordering main meal with server',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_u02_l22_could_we_have_the_bill',
      text: 'Could we have the bill, please? Is service included?',
      meaning: 'Polite concluding request for the bill and service check',
      translationsByLang: {
        hi: 'क्या हमें बिल मिल सकता है, कृपया? क्या सर्विस चार्ज शामिल है?',
        es: '¿Nos trae la cuenta, por favor? ¿El servicio está incluido?',
        fr: 'Pourrions-nous avoir l\'addition, s\'il vous plaît ? Le service est-il compris ?',
        de: 'Könnten wir bitte die Rechnung haben? Ist der Service inbegriffen?'
      },
      audioText: 'Could we have the bill, please? Is service included?',
      audioId: 'en_a1_u02_l22_c_have_the_bill',
      context: 'End of dining experience',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 5 & 6: Grammar Rules
  grammar: {
    patterns: [
      {
        id: 'g_polite_would_like_restaurant',
        title: 'Polite Ordering: "I would like..." / "I\'d like..."',
        rule: 'In English restaurants, do not say "I want..." as it sounds blunt. Always use "I would like / I\'d like + [Noun or Infinitive]" or "Could I have + [Noun]?", followed by "please".',
        formula: 'I would like + [Dish / Beverage], please.\nCould I / we have + [Item], please?\nI will have + [Dish], please.',
        examples: [
          { sentence: 'I would like a bowl of tomato soup to start, please.', translation: 'शुरुआत के लिए मैं टमाटर के सूप का एक कटोरा लेना चाहूँगा, कृपया। / Quisiera un plato de sopa de tomate para empezar, por favor.', audioText: 'I would like a bowl of tomato soup to start, please.', audioId: 'en_a1_u02_l22_g_ex1' },
          { sentence: 'Could we have two glasses of sparkling water, please?', translation: 'क्या हमें स्पार्कलिंग पानी के दो गिलास मिल सकते हैं, कृपया? / ¿Podríamos tener dos vasos de agua con gas, por favor?', audioText: 'Could we have two glasses of sparkling water, please?', audioId: 'en_a1_u02_l22_g_ex2' }
        ],
        explanationByLang: {
          hi: 'रेस्तरां में "I want" के बजाय हमेशा "I would like" या "Could I have..." बोलें।',
          es: 'En restaurantes, nunca digas "*I want*". Usa siempre las fórmulas de cortesía "I would like...", "I\'d like...", "Could I have...".'
        }
      },
      {
        id: 'g_asking_recommendations_and_allergies',
        title: 'Asking for Recommendations & Inquiring Ingredients',
        rule: 'To ask the waiter for advice or check ingredients, use: "What do you recommend?" / "Does this contain [ingredient]?" / "Is this dish vegetarian?".',
        formula: 'What do you recommend for [course]?\nDoes this dish contain [dairy / nuts / meat]?',
        examples: [
          { sentence: 'What do you recommend for the main course? — The grilled sea bass is excellent.', translation: 'मेन कोर्स के लिए आप क्या सुझाव देते हैं? — ग्रिल्ड सी बास बहुत बढ़िया है। / ¿Qué recomienda de plato principal? — La lubina a la plancha es excelente.', audioText: 'What do you recommend for the main course? The grilled sea bass is excellent.', audioId: 'en_a1_u02_l22_g_ex3' }
        ],
        explanationByLang: {
          hi: 'सर्वर से सलाह लेने के लिए "What do you recommend?" का प्रयोग करें।',
          es: 'Pregunta al camarero: "What do you recommend?" o "¿Does this contain...?".'
        }
      }
    ]
  },

  // SECTION 7: Common Mistakes
  commonMistakes: [
    {
      id: 'cm_u02_l22_i_want_beer',
      incorrect: 'I want a coffee and chicken.',
      correct: 'I would like a coffee and the chicken, please. / Could I have a coffee, please?',
      whyExplanation: '"I want" sounds impolite in English dining. Always use "I would like" or "Could I have".',
      explanationsByLang: {
        hi: '"I want" अशिष्ट लगता है। हमेशा "I would like..." या "Could I have..." का प्रयोग करें।',
        es: 'Decir "*I want*" suena descortés y seco. Usa "I would like" o "Could I have".',
        fr: 'Utilisez "I would like" plutôt que "I want" pour être poli.',
        de: 'Sagen Sie "I would like" statt "I want".'
      }
    },
    {
      id: 'cm_u02_l22_give_me_bill',
      incorrect: 'Give me the bill.',
      correct: 'Could we have the bill, please? / The check, please.',
      whyExplanation: 'Direct commands sound rude to restaurant staff. Use polite modal questions.',
      explanationsByLang: {
        hi: 'बिल मांगने के लिए "Could we have the bill, please?" बोलें।',
        es: 'No ordenes "*Give me the bill*". Di "Could we have the bill, please?".',
        fr: 'Dites "Could we have the bill, please ?".',
        de: 'Sagen Sie "Could we have the bill, please?".'
      }
    }
  ],

  // SECTION 11: Realistic Mini Dialogues
  dialogues: [
    {
      id: 'd_u02_l22_dining_at_bistro',
      title: 'Dining at a City Bistro',
      context: 'Lucas and Clara are ordering dinner from their server, Mark, at a cozy downtown Italian bistro.',
      characters: [
        { id: 'char_mark', name: 'Mark', role: 'Server' },
        { id: 'char_lucas', name: 'Lucas', role: 'Customer' },
        { id: 'char_clara', name: 'Clara', role: 'Customer' }
      ],
      turns: [
        {
          id: 'turn_1',
          speakerId: 'char_mark',
          speakerName: 'Mark',
          text: 'Good evening! Are you ready to order, or would you like a few more minutes?',
          translationsByLang: { hi: 'शुभ संध्या! क्या आप ऑर्डर करने के लिए तैयार हैं, या आपको कुछ और मिनट चाहिए?', es: '¡Buenas noches! ¿Están listos para pedir o desean unos minutos más?' },
          audioText: 'Good evening! Are you ready to order, or would you like a few more minutes?',
          audioId: 'en_a1_u02_l22_d01_t1'
        },
        {
          id: 'turn_2',
          speakerId: 'char_lucas',
          speakerName: 'Lucas',
          text: 'Good evening! We are ready. For our starter, could we share a tomato and mozzarella salad?',
          translationsByLang: { hi: 'शुभ संध्या! हम तैयार हैं। स्टार्टर के लिए क्या हम एक टमाटर और मोज़ेरेला सलाद साझा कर सकते हैं?', es: '¡Buenas noches! Estamos listos. De entrante, ¿podríamos compartir una ensalada de tomate y mozzarella?' },
          audioText: 'Good evening! We are ready. For our starter, could we share a tomato and mozzarella salad?',
          audioId: 'en_a1_u02_l22_d01_t2'
        },
        {
          id: 'turn_3',
          speakerId: 'char_mark',
          speakerName: 'Mark',
          text: 'Of course. And for your main courses?',
          translationsByLang: { hi: 'बिल्कुल। और आपके मुख्य व्यंजन के लिए?', es: 'Por supuesto. ¿Y de platos principales?' },
          audioText: 'Of course. And for your main courses?',
          audioId: 'en_a1_u02_l22_d01_t3'
        },
        {
          id: 'turn_4',
          speakerId: 'char_clara',
          speakerName: 'Clara',
          text: 'I would like the grilled salmon with steamed vegetables, please. Is it gluten-free?',
          translationsByLang: { hi: 'मैं उबली हुई सब्जियों के साथ ग्रिल्ड सैल्मन लेना चाहूँगी, कृपया। क्या यह ग्लूटेन-मुक्त है?', es: 'Yo quisiera el salmón a la plancha con verduras al vapor, por favor. ¿Es sin gluten?' },
          audioText: 'I would like the grilled salmon with steamed vegetables, please. Is it gluten-free?',
          audioId: 'en_a1_u02_l22_d01_t4'
        },
        {
          id: 'turn_5',
          speakerId: 'char_mark',
          speakerName: 'Mark',
          text: 'Yes, madam, it is completely gluten-free. And to drink?',
          translationsByLang: { hi: 'हाँ, मैडम, यह पूरी तरह से ग्लूटेन-मुक्त है। और पीने के लिए?', es: 'Sí, señora, es completamente sin gluten. ¿Y de beber?' },
          audioText: 'Yes, madam, it is completely gluten-free. And to drink?',
          audioId: 'en_a1_u02_l22_d01_t5'
        },
        {
          id: 'turn_6',
          speakerId: 'char_lucas',
          speakerName: 'Lucas',
          text: 'A bottle of sparkling water for the table, please.',
          translationsByLang: { hi: 'टेबल के लिए स्पार्कलिंग पानी की एक बोतल, कृपया।', es: 'Una botella de agua con gas para la mesa, por favor.' },
          audioText: 'A bottle of sparkling water for the table, please.',
          audioId: 'en_a1_u02_l22_d01_t6'
        }
      ]
    }
  ],

  // SECTION 8, 9, 10, 12, 13, 14, 15: Practice Exercises (15 items)
  practiceExercises: [
    {
      id: 'ex_u02_l22_p1',
      lessonId: 'lesson_a1_2_22',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Select the most polite ordering phrase:',
      sourceSentence: '___ the roasted chicken with vegetables, please.',
      options: [
        { id: 'o1', text: 'I would like', isCorrect: true },
        { id: 'o2', text: 'I want to', isCorrect: false },
        { id: 'o3', text: 'Give me', isCorrect: false }
      ],
      explanation: '"I would like" is standard polite restaurant phrasing.'
    },
    {
      id: 'ex_u02_l22_p2',
      lessonId: 'lesson_a1_2_22',
      stage: 8,
      type: 'fill_blank',
      prompt: 'Complete the polite bill request:',
      sourceSentence: 'Could we ___ the bill, please?',
      options: [
        { id: 'o1', text: 'have', isCorrect: true },
        { id: 'o2', text: 'make', isCorrect: false },
        { id: 'o3', text: 'do', isCorrect: false }
      ],
      explanation: 'Use "Could we have the bill, please?".'
    },
    {
      id: 'ex_u02_l22_p3',
      lessonId: 'lesson_a1_2_22',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the dining request:',
      targetSentence: 'Good evening we would like a table for two please',
      wordBank: ['Good', 'evening', 'we', 'would', 'like', 'a', 'table', 'for', 'two', 'please', 'is']
    },
    {
      id: 'ex_u02_l22_p4',
      lessonId: 'lesson_a1_2_22',
      stage: 9,
      type: 'listening',
      prompt: 'Listen to the server\'s inquiry:',
      audioText: 'Would you prefer still water or sparkling water tonight',
      options: [
        { id: 'o1', text: 'Would you prefer still water or sparkling water tonight', isCorrect: true },
        { id: 'o2', text: 'Would you like some chocolate cake or coffee', isCorrect: false },
        { id: 'o3', text: 'Can I bring you the dinner bill right now', isCorrect: false }
      ],
      explanation: 'The server asks between still and sparkling water.'
    },
    {
      id: 'ex_u02_l22_p5',
      lessonId: 'lesson_a1_2_22',
      stage: 9,
      type: 'listen_and_type',
      prompt: 'Listen and transcribe the recommendation request:',
      audioText: 'What do you recommend for the main course',
      targetSentence: 'What do you recommend for the main course'
    },
    {
      id: 'ex_u02_l22_p6',
      lessonId: 'lesson_a1_2_22',
      stage: 10,
      type: 'word_ordering',
      prompt: 'Construct the dietary question:',
      targetSentence: 'Is this vegetable pasta dish suitable for vegetarians',
      wordBank: ['Is', 'this', 'vegetable', 'pasta', 'dish', 'suitable', 'for', 'vegetarians', 'are', 'do']
    },
    {
      id: 'ex_u02_l22_p7',
      lessonId: 'lesson_a1_2_22',
      stage: 12,
      type: 'speaking',
      prompt: 'Speak this sentence into your microphone:',
      targetSentence: 'Could we have the bill, please? We would like to pay by card.',
      audioText: 'Could we have the bill, please? We would like to pay by card.'
    },
    {
      id: 'ex_u02_l22_p8',
      lessonId: 'lesson_a1_2_22',
      stage: 13,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'स्टार्टर के लिए मैं टमाटर का सूप लेना चाहूँगा, कृपया।',
      sourceTranslations: {
        hi: 'स्टार्टर के लिए मैं टमाटर का सूप लेना चाहूँगा, कृपया।',
        es: 'De entrante, me gustaría la sopa de tomate, por favor.'
      },
      targetSentence: 'For my starter I would like the tomato soup please',
      wordBank: ['For', 'my', 'starter', 'I', 'would', 'like', 'the', 'tomato', 'soup', 'please', 'am']
    },
    {
      id: 'ex_u02_l22_p9',
      lessonId: 'lesson_a1_2_22',
      stage: 14,
      type: 'fill_blank',
      prompt: 'Interleaved Practice (Combining Unit 1 Simple Present & Dining):',
      sourceSentence: 'The chef ___ fresh bread every day at noon.',
      options: [
        { id: 'o1', text: 'bakes', isCorrect: true },
        { id: 'o2', text: 'bake', isCorrect: false },
        { id: 'o3', text: 'is bake', isCorrect: false }
      ],
      explanation: 'Singular subject "The chef" takes "bakes".'
    },
    {
      id: 'ex_u02_l22_p10',
      lessonId: 'lesson_a1_2_22',
      stage: 15,
      type: 'error_correction',
      prompt: 'Fix the blunt phrasing error:',
      sourceSentence: 'I want the salmon and give me water.',
      options: [
        { id: 'o1', text: 'I would like the salmon and a glass of water, please.', isCorrect: true },
        { id: 'o2', text: 'I wanting the salmon and gives me water.', isCorrect: false },
        { id: 'o3', text: 'I am want salmon with water.', isCorrect: false }
      ],
      explanation: 'Use polite phrases: "I would like the salmon and a glass of water, please".'
    },
    {
      id: 'ex_u02_l22_p11',
      lessonId: 'lesson_a1_2_22',
      stage: 16,
      type: 'dialogue_completion',
      prompt: 'Select the best server response:',
      sourceSentence: 'Customer: "Could you bring us two clean napkins, please?" -> Server: "___"',
      options: [
        { id: 'o1', text: 'Certainly! I will bring them right away.', isCorrect: true },
        { id: 'o2', text: 'Turn left at the roundabout.', isCorrect: false },
        { id: 'o3', text: 'The flight has a twenty-minute delay.', isCorrect: false }
      ],
      explanation: 'Prompt and polite affirmative response.'
    },
    {
      id: 'ex_u02_l22_p12',
      lessonId: 'lesson_a1_2_22',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Which word refers to the sweet course eaten at the end of a meal?',
      sourceSentence: 'Course name check:',
      options: [
        { id: 'o1', text: 'dessert', isCorrect: true },
        { id: 'o2', text: 'starter', isCorrect: false },
        { id: 'o3', text: 'corridor', isCorrect: false }
      ],
      explanation: '"dessert" is the sweet concluding course.'
    },
    {
      id: 'ex_u02_l22_p13',
      lessonId: 'lesson_a1_2_22',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'What do you say when proposing a toast with glasses?',
      sourceSentence: 'Social phrase:',
      options: [
        { id: 'o1', text: 'Cheers!', isCorrect: true },
        { id: 'o2', text: 'Excuse me!', isCorrect: false },
        { id: 'o3', text: 'Go straight on!', isCorrect: false }
      ],
      explanation: '"Cheers!" is the customary toast.'
    },
    {
      id: 'ex_u02_l22_p14',
      lessonId: 'lesson_a1_2_22',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the sentence:',
      targetSentence: 'We have a table reservation under the name Wilson',
      wordBank: ['We', 'have', 'a', 'table', 'reservation', 'under', 'the', 'name', 'Wilson', 'is']
    },
    {
      id: 'ex_u02_l22_p15',
      lessonId: 'lesson_a1_2_22',
      stage: 12,
      type: 'speaking',
      prompt: 'Speak this sentence clearly into your microphone:',
      targetSentence: 'Excuse me, could we have the bill, please?',
      audioText: 'Excuse me, could we have the bill, please?'
    }
  ],

  // SECTION 16: Review Exercises (4 items)
  reviewExercises: [
    {
      id: 'ex_u02_l22_rev1',
      lessonId: 'lesson_a1_2_22',
      stage: 16,
      type: 'multiple_choice',
      prompt: 'Which request is polite and natural in English?',
      sourceSentence: 'Politeness review:',
      options: [
        { id: 'o1', text: 'Could I have a bottle of sparkling water, please?', isCorrect: true },
        { id: 'o2', text: 'Bring me sparkling water right now.', isCorrect: false },
        { id: 'o3', text: 'I am needing sparkling water.', isCorrect: false }
      ],
      explanation: 'Use modal "Could I have..., please?".'
    },
    {
      id: 'ex_u02_l22_rev2',
      lessonId: 'lesson_a1_2_22',
      stage: 16,
      type: 'fill_blank',
      prompt: 'Complete the sentence:',
      sourceSentence: 'We left a ten-dollar ___ for the friendly server.',
      options: [
        { id: 'o1', text: 'tip', isCorrect: true },
        { id: 'o2', text: 'traffic', isCorrect: false },
        { id: 'o3', text: 'delay', isCorrect: false }
      ],
      explanation: '"tip" is money left for good service.'
    },
    {
      id: 'ex_u02_l22_rev3',
      lessonId: 'lesson_a1_2_22',
      stage: 16,
      type: 'word_ordering',
      prompt: 'Build the sentence:',
      targetSentence: 'The pasta dish is delicious and very flavorful',
      wordBank: ['The', 'pasta', 'dish', 'is', 'delicious', 'and', 'very', 'flavorful', 'are']
    },
    {
      id: 'ex_u02_l22_rev4',
      lessonId: 'lesson_a1_2_22',
      stage: 16,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'क्या हम क्रेडिट कार्ड से भुगतान कर सकते हैं? — हाँ, बिल्कुल।',
      sourceTranslations: { hi: 'क्या हम क्रेडिट कार्ड से भुगतान कर सकते हैं? — हाँ, बिल्कुल।', es: '¿Podemos pagar con tarjeta de crédito? — Sí, por supuesto.' },
      targetSentence: 'Can we pay by credit card Yes of course',
      wordBank: ['Can', 'we', 'pay', 'by', 'credit', 'card', 'Yes', 'of', 'course', 'is', 'do']
    }
  ],

  // SECTION 17: Assessment Exercises (10 items)
  assessmentExercises: [
    {
      id: 'ex_u02_l22_a1',
      lessonId: 'lesson_a1_2_22',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Choose the most polite option: "___ a cup of green tea, please."',
      sourceSentence: 'Restaurant test:',
      options: [
        { id: 'o1', text: 'I would like', isCorrect: true },
        { id: 'o2', text: 'I want to', isCorrect: false },
        { id: 'o3', text: 'Give to me', isCorrect: false },
        { id: 'o4', text: 'I am liking', isCorrect: false }
      ],
      explanation: '"I would like" is standard polite dining usage.'
    },
    {
      id: 'ex_u02_l22_a2',
      lessonId: 'lesson_a1_2_22',
      stage: 17,
      type: 'fill_blank',
      prompt: 'Select the missing word: "Would you like still or ___ water?"',
      sourceSentence: 'Beverage options:',
      options: [
        { id: 'o1', text: 'sparkling', isCorrect: true },
        { id: 'o2', text: 'spicy', isCorrect: false },
        { id: 'o3', text: 'sweet', isCorrect: false },
        { id: 'o4', text: 'fried', isCorrect: false }
      ],
      explanation: '"still or sparkling water" is the standard beverage choice.'
    },
    {
      id: 'ex_u02_l22_a3',
      lessonId: 'lesson_a1_2_22',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the bill request:',
      targetSentence: 'Excuse me could we have the bill please',
      wordBank: ['Excuse', 'me', 'could', 'we', 'have', 'the', 'bill', 'please', 'is', 'do']
    },
    {
      id: 'ex_u02_l22_a4',
      lessonId: 'lesson_a1_2_22',
      stage: 17,
      type: 'error_correction',
      prompt: 'Correct the sentence:',
      sourceSentence: 'Give us a table of two persons.',
      options: [
        { id: 'o1', text: 'We would like a table for two, please.', isCorrect: true },
        { id: 'o2', text: 'We want two tables for person.', isCorrect: false },
        { id: 'o3', text: 'Give us table for two peoples.', isCorrect: false }
      ],
      explanation: 'Say "We would like a table for two, please".'
    },
    {
      id: 'ex_u02_l22_a5',
      lessonId: 'lesson_a1_2_22',
      stage: 17,
      type: 'listening',
      prompt: 'Listen and select what the customer orders:',
      audioText: 'I would like the grilled salmon with salad and a bottle of sparkling water',
      options: [
        { id: 'o1', text: 'I would like the grilled salmon with salad and a bottle of sparkling water', isCorrect: true },
        { id: 'o2', text: 'I want fried chicken with roasted potatoes and red tea', isCorrect: false },
        { id: 'o3', text: 'We would like two bowls of tomato soup and coffee', isCorrect: false }
      ],
      explanation: 'The speaker clearly states salmon with salad and sparkling water.'
    },
    {
      id: 'ex_u02_l22_a6',
      lessonId: 'lesson_a1_2_22',
      stage: 17,
      type: 'listen_and_type',
      prompt: 'Listen and transcribe accurately:',
      audioText: 'Are you ready to order dinner now',
      targetSentence: 'Are you ready to order dinner now'
    },
    {
      id: 'ex_u02_l22_a7',
      lessonId: 'lesson_a1_2_22',
      stage: 17,
      type: 'dialogue_completion',
      prompt: 'Select the best response:',
      sourceSentence: 'Server: "Would you like to see the dessert menu?" -> Customer: "___"',
      options: [
        { id: 'o1', text: 'Yes, please! We would love to see the dessert options.', isCorrect: true },
        { id: 'o2', text: 'I take the metro on Mondays.', isCorrect: false },
        { id: 'o3', text: 'There are two wardrobes.', isCorrect: false }
      ],
      explanation: 'Direct affirmative response to the server\'s question.'
    },
    {
      id: 'ex_u02_l22_a8',
      lessonId: 'lesson_a1_2_22',
      stage: 17,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'क्या आप मेन कोर्स के लिए किसी व्यंजन का सुझाव दे सकते हैं?',
      sourceTranslations: { hi: 'क्या आप मेन कोर्स के लिए किसी व्यंजन का सुझाव दे सकते हैं?', es: '¿Qué plato recomienda de plato principal?' },
      targetSentence: 'What do you recommend for the main course',
      wordBank: ['What', 'do', 'you', 'recommend', 'for', 'the', 'main', 'course', 'is', 'are']
    },
    {
      id: 'ex_u02_l22_a9',
      lessonId: 'lesson_a1_2_22',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Which word refers to eating utensils like forks, knives, and spoons?',
      sourceSentence: 'Dining vocabulary check:',
      options: [
        { id: 'o1', text: 'cutlery', isCorrect: true },
        { id: 'o2', text: 'delay', isCorrect: false },
        { id: 'o3', text: 'traffic', isCorrect: false },
        { id: 'o4', text: 'roundabout', isCorrect: false }
      ],
      explanation: '"cutlery" refers to forks, knives, and spoons.'
    },
    {
      id: 'ex_u02_l22_a10',
      lessonId: 'lesson_a1_2_22',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the final sentence:',
      targetSentence: 'Can we pay separately by debit card please',
      wordBank: ['Can', 'we', 'pay', 'separately', 'by', 'debit', 'card', 'please', 'is']
    }
  ]
};
