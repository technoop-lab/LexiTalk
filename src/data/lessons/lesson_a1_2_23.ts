import { DetailedLessonData } from '../../types';

export const LESSON_A1_2_23_DATA: DetailedLessonData = {
  id: 'lesson_a1_2_23',
  unitId: 'unit_a1_2',
  title: 'Clothing, Colors, Sizes & Department Store Shopping',
  cefr: 'A1',
  icon: '👗',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Clothing Items, Colors, Fit and Department Store Interactions',
    description: 'Master clothing vocabulary (shirt, jacket, trousers, dress, shoes, sweater), color shades, sizes (S, M, L, XL), demonstratives (this, that, these, those), fit expressions ("too tight", "too big", "fits perfectly"), and retail store interactions (trying on clothes, asking for another size or color, returns and discounts).',
    descriptionsByLang: {
      hi: 'कपड़ों (shirt, trousers, jacket, shoes), रंगों, आकारों (small, medium, large), और डिमॉन्स्ट्रेटिव्स (this, that, these, those) का उपयोग करके कपड़ों की खरीदारी करना सीखें। फिटिंग ("too tight", "too small", "fits well") और ट्रायल रूम (fitting room) में बातचीत का अभ्यास करें।',
      es: 'Aprende vocabulario de ropa, colores, tallas (S, M, L, XL), demostrativos (this, that, these, those) y expresiones de ajuste ("too big", "too small", "fits well"). Practica compras en tiendas de ropa y uso del probador.',
      fr: 'Apprenez le vocabulaire des vêtements, des couleurs, des tailles et des démonstratifs pour faire du shopping dans un magasin.',
      de: 'Lernen Sie Kleidungsvokabular, Farben, Größen, Demonstrativpronomen und das Einkaufen im Modegeschäft.',
      pt: 'Aprenda vocabulário de roupas, cores, tamanhos, demonstrativos e expressões para compras em lojas de departamento.',
      zh: '掌握服装词汇、颜色、尺码（S/M/L/XL）、指示代词（this, that, these, those）及试衣间（fitting room）购物对话与尺寸评价（too tight, too big）。',
      ar: 'تعلم مفردات الملابس والألوان والمقاسات وأسماء الإشارة والتسوق في متاجر الملابس.',
      ja: '衣服の語彙、色、サイズ（S/M/L/XL）、指示代名詞（this, that, these, those）、試着やサイズ感（too big, fits well）の表現を学びます。',
      ru: 'Изучите одежду, цвета, размеры, указательные местоимения (this, that, these, those) и фразы для покупок в магазине одежды.'
    },
    canDoStatements: [
      'Identify and name basic clothing items and colors with accurate plurals (trousers, shoes, glasses)',
      'Use demonstratives accurately: "this shirt" (near/sing.), "that jacket" (far/sing.), "these shoes" (near/pl.), "those pants" (far/pl.)',
      'Ask to try on clothes: "Can I try this sweater on in the fitting room?"',
      'Express fit and size preferences: "It is too small. Do you have this in a medium or large?"',
      'Ask about prices, discounts, and payment methods in apparel stores'
    ],
    canDoByLang: {
      hi: [
        'कपड़ों के नाम और रंगों की पहचान करना',
        'डिमॉन्स्ट्रेटिव्स का सही प्रयोग: "this jacket", "those shoes"',
        'कपड़े पहनकर देखने का अनुरोध करना: "Can I try this on?"',
        'साइज और फिटिंग के बारे में बताना: "It is too tight, do you have a larger size?"'
      ],
      es: [
        'Nombrar prendas de vestir, colores y tallas',
        'Usar demostrativos correctamente: this/that/these/those',
        'Pedir probarse ropa en el probador: "Can I try this on?"',
        'Indicar si una prenda queda grande o pequeña: "It is too small"'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (25 items)
  vocabulary: [
    {
      id: 'v_u02_l23_shirt',
      word: 'shirt / T-shirt',
      phonetic: '/ʃɝːt/ /ˈtiː.ʃɝːt/',
      meaning: 'A garment for the upper body with collar, sleeves, and buttons, or a short-sleeved casual shirt',
      translationsByLang: { hi: 'कमीज / शर्ट / टी-शर्ट', es: 'camisa / camiseta', fr: 'chemise / t-shirt', de: 'Hemd / T-Shirt', pt: 'camisa / camiseta', zh: '衬衫 / T恤', ar: 'قميص / تي شيرت', ja: 'シャツ / Tシャツ', ru: 'рубашка / футболка' },
      exampleSentence: 'I wear a crisp white shirt to office meetings.',
      exampleTranslationByLang: { hi: 'मैं ऑफिस मीटिंग्स के लिए एक साफ सफेद शर्ट पहनता हूँ।', es: 'Llevo una camisa blanca impecable a las reuniones de oficina.' },
      audioText: 'shirt and T-shirt',
      audioId: 'en_a1_u02_l23_v_shirt',
      slowAudioId: 'en_a1_u02_l23_v_shirt_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👔',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_trousers_pants',
      word: 'trousers / pants (plural)',
      phonetic: '/ˈtraʊ.zɚz/ /pænts/',
      meaning: 'An outer garment covering the body from the waist to the ankles, with a separate part for each leg',
      translationsByLang: { hi: 'पतलून / पैंट', es: 'pantalones', fr: 'pantalon', de: 'Hose / Hosen', pt: 'calças', zh: '裤子 / 长裤', ar: 'بنطال / سروال', ja: 'ズボン / パンツ', ru: 'брюки / штаны' },
      exampleSentence: 'These black trousers fit very comfortably.',
      exampleTranslationByLang: { hi: 'यह काली पतलून बहुत आराम से फिट होती है।', es: 'Estos pantalones negros quedan muy cómodos.' },
      audioText: 'trousers and pants',
      audioId: 'en_a1_u02_l23_v_trousers',
      slowAudioId: 'en_a1_u02_l23_v_trousers_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👖',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_jacket_coat',
      word: 'jacket / coat',
      phonetic: '/ˈdʒæk.ɪt/ /koʊt/',
      meaning: 'An outer garment with sleeves extending down to the waist or hips',
      translationsByLang: { hi: 'जैकेट / कोट', es: 'chaqueta / abrigo / saco', fr: 'veste / manteau', de: 'Jacke / Mantel', pt: 'jaqueta / casaco', zh: '夹克 / 大衣 / 外套', ar: 'سترة / معطف', ja: 'ジャケット / コート', ru: 'куртка / пальто' },
      exampleSentence: 'Put on your warm winter coat before going outside.',
      exampleTranslationByLang: { hi: 'बाहर जाने से पहले अपना गर्म सर्दियों का कोट पहन लें।', es: 'Ponte el abrigo de invierno antes de salir.' },
      audioText: 'jacket and coat',
      audioId: 'en_a1_u02_l23_v_jacket',
      slowAudioId: 'en_a1_u02_l23_v_jacket_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧥',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_dress_skirt',
      word: 'dress / skirt',
      phonetic: '/dres/ /skɝːt/',
      meaning: 'A one-piece garment covering body and legs, or a separate lower-body garment',
      translationsByLang: { hi: 'ड्रेस / पोशाक / स्कर्ट', es: 'vestido / falda', fr: 'robe / jupe', de: 'Kleid / Rock', pt: 'vestido / saia', zh: '连衣裙 / 裙子', ar: 'فستان / تنورة', ja: 'ドレス / ワンピース / スカート', ru: 'платье / юбка' },
      exampleSentence: 'She is wearing a floral summer dress.',
      exampleTranslationByLang: { hi: 'उसने फूलों वाली गर्मियों की ड्रेस पहनी है।', es: 'Ella lleva un vestido de verano con estampado floral.' },
      audioText: 'dress and skirt',
      audioId: 'en_a1_u02_l23_v_dress_skirt',
      slowAudioId: 'en_a1_u02_l23_v_dress_skirt_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👗',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_shoes_boots',
      word: 'shoes / boots / sneakers',
      phonetic: '/ʃuːz/ /buːts/ /ˈsniː.kɚz/',
      meaning: 'Footwear with a rigid sole and heels, or casual athletic footwear',
      translationsByLang: { hi: 'जूते / बूट / स्नीकर्स', es: 'zapatos / botas / zapatillas', fr: 'chaussures / bottes / baskets', de: 'Schuhe / Stiefel / Turnschuhe', pt: 'sapatos / botas / tênis', zh: '鞋子 / 靴子 / 运动鞋', ar: 'أحذية / جزمات / أحذية رياضية', ja: '靴 / ブーツ / スニーカー', ru: 'туфли / обувь / ботинки / кроссовки' },
      exampleSentence: 'I need a new pair of comfortable walking shoes.',
      exampleTranslationByLang: { hi: 'मुझे आरामदायक चलने वाले जूतों की एक नई जोड़ी चाहिए।', es: 'Necesito un par nuevo de zapatos cómodos para caminar.' },
      audioText: 'shoes and boots and sneakers',
      audioId: 'en_a1_u02_l23_v_shoes',
      slowAudioId: 'en_a1_u02_l23_v_shoes_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👟',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_sweater_jumper',
      word: 'sweater / jumper',
      phonetic: '/ˈswet.ər/ /ˈdʒʌm.pɚ/',
      meaning: 'A knitted woolen garment worn on the upper body for warmth',
      translationsByLang: { hi: 'स्वेटर / जम्पर', es: 'jersey / suéter / chompa', fr: 'pull / chandail', de: 'Pullover / Strickjacke', pt: 'suéter / malha / blusão', zh: '毛衣 / 针织衫', ar: 'كنزة صوفية / بلوفر', ja: 'セーター / ニット', ru: 'свитер / джемпер' },
      exampleSentence: 'This wool sweater is very warm in winter.',
      exampleTranslationByLang: { hi: 'यह ऊनी स्वेटर सर्दियों में बहुत गर्म होता है।', es: 'Este jersey de lana es muy abrigado en invierno.' },
      audioText: 'sweater and jumper',
      audioId: 'en_a1_u02_l23_v_sweater',
      slowAudioId: 'en_a1_u02_l23_v_sweater_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧶',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_size',
      word: 'size (small, medium, large, XL)',
      phonetic: '/saɪz/',
      meaning: 'The relative dimensions or standard measurement of a clothing item',
      translationsByLang: { hi: 'साइज / आकार (छोटा, मध्यम, बड़ा)', es: 'talla / tamaño (pequeño, mediano, grande)', fr: 'taille (petit, moyen, grand)', de: 'Größe (S, M, L, XL)', pt: 'tamanho (P, M, G, GG)', zh: '尺码 / 尺寸（S, M, L, XL）', ar: 'المقاس (صغير، متوسط، كبير)', ja: 'サイズ（S、M、L、LL）', ru: 'размер (маленький, средний, большой)' },
      exampleSentence: 'Do you have this dress in a medium size?',
      exampleTranslationByLang: { hi: 'क्या आपके पास यह ड्रेस मीडियम साइज में है?', es: '¿Tiene este vestido en talla mediana?' },
      audioText: 'size small medium large and XL',
      audioId: 'en_a1_u02_l23_v_size',
      slowAudioId: 'en_a1_u02_l23_v_size_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📏',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_fitting_room',
      word: 'fitting room / changing room',
      phonetic: '/ˈfɪt.ɪŋ ˌruːm/',
      meaning: 'An enclosed booth in a clothing store where customers can try on garments',
      translationsByLang: { hi: 'फिटिंग रूम / ट्रायल रूम', es: 'probador', fr: 'cabine d\'essayage', de: 'Umkleidekabine', pt: 'provador', zh: '试衣间', ar: 'غرفة القياس / غرفة تبديل الملابس', ja: '試着室 / フィッティングルーム', ru: 'примерочная' },
      exampleSentence: 'The fitting rooms are located at the back of the store.',
      exampleTranslationByLang: { hi: 'फिटिंग रूम दुकान के पिछले हिस्से में स्थित हैं।', es: 'Los probadores están al fondo de la tienda.' },
      audioText: 'fitting room and changing room',
      audioId: 'en_a1_u02_l23_v_fitting_room',
      slowAudioId: 'en_a1_u02_l23_v_fitting_room_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚪',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_try_on',
      word: 'try on (tries on, trying on)',
      phonetic: '/traɪ ɑːn/',
      meaning: 'To put on a piece of clothing to see if it fits and looks good',
      translationsByLang: { hi: 'पहनकर देखना / ट्राई करना', es: 'probarse (ropa)', fr: 'essayer (des vêtements)', de: 'anprobieren', pt: 'experimentar / provar (roupa)', zh: '试穿', ar: 'يقيس (ملابس) / يجرّب', ja: '試着する / 着てみる', ru: 'примерять' },
      exampleSentence: 'Can I try on this blue jacket, please?',
      exampleTranslationByLang: { hi: 'क्या मैं यह नीली जैकेट पहनकर देख सकता हूँ, कृपया?', es: '¿Puedo probarme esta chaqueta azul, por favor?' },
      audioText: 'try on',
      audioId: 'en_a1_u02_l23_v_try_on',
      slowAudioId: 'en_a1_u02_l23_v_try_on_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧥',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_fit_tight_loose',
      word: 'fit / tight / loose',
      phonetic: '/fɪt/ /taɪt/ /luːs/',
      meaning: 'How clothes correspond to body dimensions (snug or roomy)',
      translationsByLang: { hi: 'फिट / तंग (टाइट) / ढीला (लूज)', es: 'quedar bien / apretado / holgado', fr: 'aller bien / serré / ample', de: 'passen / eng / locker', pt: 'servir / justo / folgado', zh: '合身 / 紧 / 宽松', ar: 'يناسب / ضيق / فضفاض', ja: 'フィットする / きつい / ゆったりした', ru: 'сидеть / тесный / свободный' },
      exampleSentence: 'These shoes are too tight, but those are too loose.',
      exampleTranslationByLang: { hi: 'ये जूते बहुत तंग हैं, लेकिन वे बहुत ढीले हैं।', es: 'Estos zapatos están demasiado apretados, pero aquellos son demasiado holgados.' },
      audioText: 'fit and tight and loose',
      audioId: 'en_a1_u02_l23_v_fit_tight_loose',
      slowAudioId: 'en_a1_u02_l23_v_fit_tight_loose_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👔',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_too_big_small',
      word: 'too big / too small',
      phonetic: '/tuː bɪɡ/ /tuː smɑːl/',
      meaning: 'Excessively large or excessively diminutive in dimensions',
      translationsByLang: { hi: 'बहुत बड़ा / बहुत छोटा', es: 'demasiado grande / demasiado pequeño', fr: 'trop grand / trop petit', de: 'zu groß / zu klein', pt: 'grande demais / pequeno demais', zh: '太大了 / 太小了', ar: 'كبير جداً / صغير جداً', ja: '大きすぎる / 小さすぎる', ru: 'слишком большой / слишком маленький' },
      exampleSentence: 'This sweater is too big for me; do you have a small?',
      exampleTranslationByLang: { hi: 'यह स्वेटर मेरे लिए बहुत बड़ा है; क्या आपके पास छोटा साइज है?', es: 'Este jersey me queda demasiado grande; ¿tiene una talla pequeña?' },
      audioText: 'too big and too small',
      audioId: 'en_a1_u02_l23_v_too_big_small',
      slowAudioId: 'en_a1_u02_l23_v_too_big_small_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📏',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_this_that',
      word: 'this / that (singular)',
      phonetic: '/ðɪs/ /ðæt/',
      meaning: 'Demonstrative pronouns pointing to nearby or distant single objects',
      translationsByLang: { hi: 'यह (पास) / वह (दूर)', es: 'este / ese / aquel', fr: 'ceci / cela / ce', de: 'dieser / jener', pt: 'este / esse / aquele', zh: '这个（近） / 那个（远）', ar: 'هذا (للقريب) / ذاك (للبعيد)', ja: 'これ（近く） / あれ（遠く）', ru: 'этот (близко) / тот (далеко)' },
      exampleSentence: 'I like this shirt, but that coat is too expensive.',
      exampleTranslationByLang: { hi: 'मुझे यह शर्ट पसंद है, लेकिन वह कोट बहुत महंगा है।', es: 'Me gusta esta camisa, pero aquel abrigo es demasiado caro.' },
      audioText: 'this and that',
      audioId: 'en_a1_u02_l23_v_this_that',
      slowAudioId: 'en_a1_u02_l23_v_this_that_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👉',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_these_those',
      word: 'these / those (plural)',
      phonetic: '/ðiːz/ /ðoʊz/',
      meaning: 'Demonstrative pronouns pointing to nearby or distant plural objects',
      translationsByLang: { hi: 'ये (पास) / वे (दूर)', es: 'estos / esos / aquellos', fr: 'ces ...-ci / ces ...-là', de: 'diese / jene', pt: 'estes / esses / aqueles', zh: '这些（近） / 那些（远）', ar: 'هؤلاء / أولئك', ja: 'これら（近く） / あれら（遠く）', ru: 'эти (близко) / те (далеко)' },
      exampleSentence: 'These shoes are eighty dollars, and those are ninety.',
      exampleTranslationByLang: { hi: 'ये जूते अस्सी डॉलर के हैं, और वे नब्बे के हैं।', es: 'Estos zapatos cuestan ochenta dólares y aquellos noventa.' },
      audioText: 'these and those',
      audioId: 'en_a1_u02_l23_v_these_those',
      slowAudioId: 'en_a1_u02_l23_v_these_those_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👉',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_colors',
      word: 'colors (black, white, blue, red, green, grey, brown)',
      phonetic: '/ˈkʌl.ɚz/',
      meaning: 'Visual perceptions produced by light wavelength',
      translationsByLang: { hi: 'रंग (काला, सफेद, नीला, लाल, हरा, धूसर, भूरा)', es: 'colores (negro, blanco, azul, rojo, verde, gris, marrón)', fr: 'couleurs (noir, blanc, bleu, rouge, vert, gris, marron)', de: 'Farben (schwarz, weiß, blau, rot, grün, grau, braun)', pt: 'cores (preto, branco, azul, vermelho, verde, cinza, marrom)', zh: '颜色（黑色、白色、蓝色、红色、绿色、灰色、棕色）', ar: 'الألوان (أسود، أبيض، أزرق، أحمر، أخضر، رمادي، بني)', ja: '色（黒、白、青、赤、緑、グレー、茶色）', ru: 'цвета (черный, белый, синий, красный, зеленый, серый, коричневый)' },
      exampleSentence: 'Do you have this shirt in navy blue or dark grey?',
      exampleTranslationByLang: { hi: 'क्या आपके पास यह शर्ट नेवी ब्लू या डार्क ग्रे में है?', es: '¿Tiene esta camisa en azul marino o gris oscuro?' },
      audioText: 'colors black white blue red green grey brown',
      audioId: 'en_a1_u02_l23_v_colors',
      slowAudioId: 'en_a1_u02_l23_v_colors_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎨',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_sale_discount',
      word: 'sale / discount / on sale',
      phonetic: '/seɪl/ /ˈdɪs.kaʊnt/',
      meaning: 'A period during which a store sells goods at reduced prices',
      translationsByLang: { hi: 'सेल / छूट / डिस्काउंट', es: 'rebajas / descuento / en oferta', fr: 'soldes / réduction / en promotion', de: 'Schlussverkauf / Rabatt / im Angebot', pt: 'liquidação / desconto / em promoção', zh: '特价 / 打折 / 促销', ar: 'تنزيلات / خصم / في العرض', ja: 'セール / 割引 / 特売', ru: 'распродажа / скидка / на скидке' },
      exampleSentence: 'All winter jackets are on sale with a twenty percent discount.',
      exampleTranslationByLang: { hi: 'सभी विंटर जैकेट बीस प्रतिशत छूट के साथ सेल पर हैं।', es: 'Todas las chaquetas de invierno están en oferta con un veinte por ciento de descuento.' },
      audioText: 'sale and discount and on sale',
      audioId: 'en_a1_u02_l23_v_sale_discount',
      slowAudioId: 'en_a1_u02_l23_v_sale_discount_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏷️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_expensive_cheap',
      word: 'expensive / cheap / affordable',
      phonetic: '/ɪkˈspen.sɪv/ /tʃiːp/',
      meaning: 'Costing a lot of money or costing very little money',
      translationsByLang: { hi: 'महंगा / सस्ता / किफायती', es: 'caro / barato / asequible', fr: 'cher / bon marché / abordable', de: 'teuer / billig / günstig', pt: 'caro / barato / acessível', zh: '贵的 / 便宜的 / 实惠的', ar: 'غالي الثمن / رخيص / معقول السعر', ja: '高い / 安い / 手頃な', ru: 'дорогой / дешевый / доступный' },
      exampleSentence: 'The designer coat is too expensive, but this one is affordable.',
      exampleTranslationByLang: { hi: 'डिज़ाइनर कोट बहुत महंगा है, लेकिन यह वाला किफायती है।', es: 'El abrigo de diseñador es demasiado caro, pero este es asequible.' },
      audioText: 'expensive and cheap and affordable',
      audioId: 'en_a1_u02_l23_v_expensive_cheap',
      slowAudioId: 'en_a1_u02_l23_v_expensive_cheap_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💰',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_socks_scarf',
      word: 'socks / scarf / gloves / hat',
      phonetic: '/sɑːks/ /skɑːrf/ /ɡlʌvz/ /hæt/',
      meaning: 'Clothing accessories worn on feet, neck, hands, or head',
      translationsByLang: { hi: 'मोज़े / मफलर (स्कार्फ) / दस्ताने / टोपी', es: 'calcetines / bufanda / guantes / sombrero / gorro', fr: 'chaussettes / écharpe / gants / chapeau', de: 'Socken / Schal / Handschuhe / Mütze', pt: 'meias / cachecol / luvas / chapéu', zh: '袜子 / 围巾 / 手套 / 帽子', ar: 'جوارب / وشاح / قفازات / قبعة', ja: '靴下 / マフラー / 手袋 / 帽子', ru: 'носки / шарф / перчатки / шапка' },
      exampleSentence: 'Wear a woolen scarf and gloves when it snows.',
      exampleTranslationByLang: { hi: 'बर्फबारी होने पर ऊनी मफलर और दस्ताने पहनें।', es: 'Ponte una bufanda de lana y guantes cuando nieve.' },
      audioText: 'socks scarf gloves and hat',
      audioId: 'en_a1_u02_l23_v_accessories',
      slowAudioId: 'en_a1_u02_l23_v_accessories_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧤',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_wear_verb',
      word: 'wear (wears, wearing)',
      phonetic: '/wer/',
      meaning: 'To have on one\'s body as clothing, decoration, or protection',
      translationsByLang: { hi: 'पहनना / पहने होना', es: 'llevar puesto / vestir / ponerse', fr: 'porter (un vêtement)', de: 'tragen / anhaben', pt: 'vestir / usar', zh: '穿 / 戴', ar: 'يرتدي / يلبس', ja: '着る / 身につける / 履く', ru: 'носить (одежду)' },
      exampleSentence: 'He wears a dark suit to the office on weekdays.',
      exampleTranslationByLang: { hi: 'वह सप्ताह के दिनों में ऑफिस में गहरा सूट पहनता है।', es: 'Lleva un traje oscuro a la oficina los días de diario.' },
      audioText: 'wear',
      audioId: 'en_a1_u02_l23_v_wear',
      slowAudioId: 'en_a1_u02_l23_v_wear_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👔',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_suit_tie',
      word: 'suit / tie',
      phonetic: '/suːt/ /taɪ/',
      meaning: 'Formal matching jacket and trousers set, and narrow strip of neck cloth',
      translationsByLang: { hi: 'सूट और टाई', es: 'traje y corbata', fr: 'costume et cravate', de: 'Anzug und Krawatte', pt: 'terno e gravata / fato e gravata', zh: '西装和领带', ar: 'بدلة رسمية وربطة عنق', ja: 'スーツとネクタイ', ru: 'костюм и галстук' },
      exampleSentence: 'He needs a navy suit and silk tie for the wedding.',
      exampleTranslationByLang: { hi: 'शादी के लिए उसे एक नेवी सूट और सिल्क की टाई चाहिए।', es: 'Necesita un traje azul marino y una corbata de seda para la boda.' },
      audioText: 'suit and tie',
      audioId: 'en_a1_u02_l23_v_suit_tie',
      slowAudioId: 'en_a1_u02_l23_v_suit_tie_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🤵',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_cotton_wool_leather',
      word: 'cotton / wool / leather / silk',
      phonetic: '/ˈkɑː.t̬ən/ /wʊl/ /ˈleð.ɚ/ /sɪlk/',
      meaning: 'Fabrics and raw materials used to manufacture clothing',
      translationsByLang: { hi: 'सूती (कॉटन) / ऊन / चमड़ा (लेदर) / रेशम (सिल्क)', es: 'algodón / lana / cuero / seda', fr: 'coton / laine / cuir / soie', de: 'Baumwolle / Wolle / Leder / Seide', pt: 'algodão / lã / couro / seda', zh: '棉 / 羊毛 / 皮革 / 丝绸', ar: 'قطن / صوف / جلد / حرير', ja: '綿（コットン） / ウール / 革（レザー） / シルク', ru: 'хлопок / шерсть / кожа / шелк' },
      exampleSentence: 'This summer shirt is made of one hundred percent pure cotton.',
      exampleTranslationByLang: { hi: 'यह गर्मियों की शर्ट सौ प्रतिशत शुद्ध सूती (कॉटन) से बनी है।', es: 'Esta camisa de verano es de cien por cien algodón puro.' },
      audioText: 'cotton wool leather and silk',
      audioId: 'en_a1_u02_l23_v_fabrics',
      slowAudioId: 'en_a1_u02_l23_v_fabrics_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧵',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_sales_assistant',
      word: 'sales assistant / shop clerk',
      phonetic: '/ˈseɪlz əˌsɪs.tənt/',
      meaning: 'A store worker who assists shoppers with sizes, products, and checkout',
      translationsByLang: { hi: 'सेल्स असिस्टेंट / दुकानदार / कर्मचारी', es: 'dependiente / vendedor de tienda', fr: 'vendeur / vendeuse', de: 'Verkäufer / Verkäuferin', pt: 'atendente / vendedor de loja', zh: '店员 / 导购员', ar: 'بائع في متجر / موظف مبيعات', ja: '店員 / ショップスタッフ', ru: 'продавец-консультант' },
      exampleSentence: 'The friendly sales assistant found my size in the stockroom.',
      exampleTranslationByLang: { hi: 'दोस्ताना सेल्स असिस्टेंट ने स्टोररूम से मेरा साइज ढूँढ़ दिया।', es: 'La amable dependienta encontró mi talla en el almacén.' },
      audioText: 'sales assistant and shop clerk',
      audioId: 'en_a1_u02_l23_v_sales_assistant',
      slowAudioId: 'en_a1_u02_l23_v_sales_assistant_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👩‍💼',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_look_for',
      word: 'look for (looking for)',
      phonetic: '/lʊk fɔːr/',
      meaning: 'To attempt to find a specific product or garment',
      translationsByLang: { hi: 'ढूँढ़ना / तलाश करना', es: 'buscar', fr: 'chercher', de: 'suchen nach', pt: 'procurar / buscar', zh: '寻找 / 找', ar: 'يبحث عن', ja: '探す', ru: 'искать' },
      exampleSentence: 'I am looking for a warm winter jacket.',
      exampleTranslationByLang: { hi: 'मैं सर्दियों की एक गर्म जैकेट ढूँढ़ रहा हूँ।', es: 'Estoy buscando una chaqueta de invierno abrigada.' },
      audioText: 'look for and looking for',
      audioId: 'en_a1_u02_l23_v_look_for',
      slowAudioId: 'en_a1_u02_l23_v_look_for_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔍',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_department_store',
      word: 'department store',
      phonetic: '/dɪˈpɑːrt.mənt ˌstɔːr/',
      meaning: 'A large retail shop divided into departments selling many kinds of goods',
      translationsByLang: { hi: 'डिपार्टमेंटल स्टोर / बड़ा मॉल', es: 'grandes almacenes / tienda departamental', fr: 'grand magasin', de: 'Kaufhaus / Warenhaus', pt: 'loja de departamentos / magazine', zh: '百货商场 / 百货公司', ar: 'متجر متعدد الأقسام / مجمع تجاري', ja: 'デパート / 百貨店', ru: 'универмаг' },
      exampleSentence: 'The department store has five floors of fashion and homeware.',
      exampleTranslationByLang: { hi: 'डिपार्टमेंटल स्टोर में फैशन और घरेलू सामान की पाँच मंजिलें हैं।', es: 'Los grandes almacenes tienen cinco plantas de moda y hogar.' },
      audioText: 'department store',
      audioId: 'en_a1_u02_l23_v_department_store',
      slowAudioId: 'en_a1_u02_l23_v_department_store_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏬',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_how_much_are_these',
      word: 'how much are these / those',
      phonetic: '/haʊ mʌtʃ ɑːr ðiːz/',
      meaning: 'Question asking the price of plural garments or shoes',
      translationsByLang: { hi: 'ये / वे कितने के हैं?', es: '¿cuánto cuestan estos / aquellos?', fr: 'combien coûtent ceux-ci / ceux-là ?', de: 'wie viel kosten diese / jene?', pt: 'quanto custam estes / aqueles?', zh: '这些/那些多少钱？', ar: 'كم سعر هذه / تلك؟', ja: 'これら（あれら）はいくらですか？', ru: 'сколько стоят эти / те?' },
      exampleSentence: 'How much are these leather boots?',
      exampleTranslationByLang: { hi: 'ये लेदर बूट कितने के हैं?', es: '¿Cuánto cuestan estas botas de cuero?' },
      audioText: 'how much are these and those',
      audioId: 'en_a1_u02_l23_v_how_much_plural',
      slowAudioId: 'en_a1_u02_l23_v_how_much_plural_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏷️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l23_it_suits_you',
      word: 'it suits you / it looks great',
      phonetic: '/ɪt suːts juː/',
      meaning: 'Compliment indicating that a garment enhances the person\'s appearance',
      translationsByLang: { hi: 'यह आप पर बहुत जंच रहा है / अच्छा लग रहा है', es: 'te queda genial / te favorece', fr: 'ça vous va très bien', de: 'es steht dir super / es passt zu Ihnen', pt: 'fica ótimo em você / combina com você', zh: '这件很适合你 / 穿起来很好看', ar: 'يناسبك جداً / يبدو رائعاً عليك', ja: 'とてもお似合いです', ru: 'вам это очень идет' },
      exampleSentence: 'That green sweater really suits you!',
      exampleTranslationByLang: { hi: 'वह हरा स्वेटर आप पर सचमुच बहुत जंच रहा है!', es: '¡Ese jersey verde realmente te queda genial!' },
      audioText: 'it suits you and it looks great',
      audioId: 'en_a1_u02_l23_v_suits_you',
      slowAudioId: 'en_a1_u02_l23_v_suits_you_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '✨',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks
  expressions: [
    {
      id: 'chunk_u02_l23_can_i_try_this_on',
      text: 'Excuse me, can I try this on in the fitting room?',
      meaning: 'Standard polite question before entering a store changing booth',
      translationsByLang: {
        hi: 'माफ़ कीजिए, क्या मैं इसे ट्रायल रूम में पहनकर देख सकता हूँ?',
        es: 'Disculpe, ¿puedo probarme esto en el probador?',
        fr: 'Excusez-moi, puis-je essayer ceci dans la cabine d\'essayage ?',
        de: 'Entschuldigung, kann ich das in der Umkleidekabine anprobieren?'
      },
      audioText: 'Excuse me, can I try this on in the fitting room?',
      audioId: 'en_a1_u02_l23_c_try_on_fitting',
      context: 'Apparel shopping and retail boutiques',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_u02_l23_do_you_have_in_medium',
      text: 'Do you have this jacket in a medium or large size?',
      meaning: 'Requesting an alternate garment size from the sales assistant',
      translationsByLang: {
        hi: 'क्या आपके पास यह जैकेट मीडियम या लार्ज साइज में है?',
        es: '¿Tiene esta chaqueta en talla mediana o grande?',
        fr: 'Avez-vous cette veste en taille M ou L ?',
        de: 'Haben Sie diese Jacke in Größe M oder L?'
      },
      audioText: 'Do you have this jacket in a medium or large size?',
      audioId: 'en_a1_u02_l23_c_have_in_medium',
      context: 'Asking shop staff for different stock sizes',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_u02_l23_fits_perfectly',
      text: 'It fits perfectly. I will take it!',
      meaning: 'Confirming purchase satisfaction after trying on clothes',
      translationsByLang: {
        hi: 'यह बिल्कुल सही फिट आया है। मैं इसे लूँगा!',
        es: 'Me queda perfecto. ¡Me lo llevo!',
        fr: 'Ça me va parfaitement. Je le prends !',
        de: 'Es passt perfekt. Ich nehme es!'
      },
      audioText: 'It fits perfectly. I will take it!',
      audioId: 'en_a1_u02_l23_c_fits_perfectly',
      context: 'Decision to buy at retail store',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 5 & 6: Grammar Rules
  grammar: {
    patterns: [
      {
        id: 'g_demonstratives_this_that_these_those',
        title: 'Demonstratives: This, That, These, Those',
        rule: 'Use "this" (singular/near) and "these" (plural/near) for items close to the speaker. Use "that" (singular/far) and "those" (plural/far) for items further away. Note that plural items like "trousers, pants, shoes, glasses" always take plural demonstratives and plural verbs ("These trousers are...").',
        formula: 'Singular: This + noun (near) | That + noun (far) -> is...\nPlural: These + nouns (near) | Those + nouns (far) -> are...',
        examples: [
          { sentence: 'This blue shirt is thirty dollars, but that black jacket is one hundred.', translation: 'यह नीली शर्ट तीस डॉलर की है, लेकिन वह काली जैकेट सौ डॉलर की है। / Esta camisa azul cuesta treinta dólares, pero aquella chaqueta negra cuesta cien.', audioText: 'This blue shirt is thirty dollars, but that black jacket is one hundred.', audioId: 'en_a1_u02_l23_g_ex1' },
          { sentence: 'These trousers are too long, and those shoes are too tight.', translation: 'यह पतलून बहुत लंबी है, और वे जूते बहुत तंग हैं। / Estos pantalones son demasiado largos y aquellos zapatos están muy apretados.', audioText: 'These trousers are too long, and those shoes are too tight.', audioId: 'en_a1_u02_l23_g_ex2' }
        ],
        explanationByLang: {
          hi: 'पास की एकवचन वस्तु के लिए "this", दूर की एकवचन के लिए "that"। पास के बहुवचन के लिए "these", दूर के बहुवचन के लिए "those" का प्रयोग करें। "trousers" और "shoes" के साथ हमेशा "these/those" और "are" आता है।',
          es: 'Usa "this/these" para lo cercano y "that/those" para lo lejano. Recuerda que prendas dobles como "trousers" y "shoes" son siempre plurales ("These trousers are...").'
        }
      },
      {
        id: 'g_too_adjective_for_fit',
        title: 'Expressing Excess: "Too" + Adjective',
        rule: 'Use "too" before an adjective to indicate an undesirable excess: "too big", "too small", "too tight", "too expensive".',
        formula: 'Subject + is / are + too + [Adjective]\nIt is too big / They are too small',
        examples: [
          { sentence: 'This coat is too big for me. Do you have a smaller size?', translation: 'यह कोट मेरे लिए बहुत बड़ा है। क्या आपके पास छोटा साइज है? / Este abrigo me queda demasiado grande. ¿Tiene una talla más pequeña?', audioText: 'This coat is too big for me. Do you have a smaller size?', audioId: 'en_a1_u02_l23_g_ex3' }
        ],
        explanationByLang: {
          hi: 'जब कोई कपड़ा जरूरत से ज्यादा बड़ा या छोटा हो तो "too" (too big, too small) का प्रयोग करें।',
          es: 'Usa "too" delante del adjetivo para indicar exceso indeseado: "too tight" (demasiado apretado), "too expensive" (demasiado caro).'
        }
      }
    ]
  },

  // SECTION 7: Common Mistakes
  commonMistakes: [
    {
      id: 'cm_u02_l23_this_trousers_is',
      incorrect: 'This trousers is too big.',
      correct: 'These trousers are too big. / This pair of trousers is too big.',
      whyExplanation: '"Trousers" and "pants" are grammatically plural in English. Use "these" and "are".',
      explanationsByLang: {
        hi: '"Trousers" बहुवचन है, इसलिए "These trousers are..." कहें।',
        es: '"Trousers" es plural en inglés: di siempre "These trousers are...", nunca "*This trousers is*".',
        fr: 'Dites "These trousers are", car c\'est un nom pluriel.',
        de: 'Sagen Sie "These trousers are".'
      }
    },
    {
      id: 'cm_u02_l23_very_small_vs_too_small',
      incorrect: 'I cannot wear it because it is very small.',
      correct: 'I cannot wear it because it is too small.',
      whyExplanation: 'Use "too" when a quality prevents you from doing something (excessive and problematic).',
      explanationsByLang: {
        hi: 'जब आकार के कारण पहनना संभव न हो तो "too small" का प्रयोग करें।',
        es: 'Usa "too small" (demasiado pequeño) cuando el tamaño supone un problema que impide usarlo.',
        fr: 'Utilisez "too small" pour exprimer un excès problématique.',
        de: 'Verwenden Sie "too small".'
      }
    }
  ],

  // SECTION 11: Realistic Mini Dialogues
  dialogues: [
    {
      id: 'd_u02_l23_shopping_in_boutique',
      title: 'Trying on a Jacket at a Clothing Store',
      context: 'David is shopping for a smart casual jacket and asks the sales assistant, Chloe, for advice and another size.',
      characters: [
        { id: 'char_chloe', name: 'Chloe', role: 'Sales Assistant' },
        { id: 'char_david', name: 'David', role: 'Customer' }
      ],
      turns: [
        {
          id: 'turn_1',
          speakerId: 'char_chloe',
          speakerName: 'Chloe',
          text: 'Hello! Are you looking for anything in particular today?',
          translationsByLang: { hi: 'नमस्ते! क्या आप आज कुछ खास ढूँढ़ रहे हैं?', es: '¡Hola! ¿Busca algo en particular hoy?' },
          audioText: 'Hello! Are you looking for anything in particular today?',
          audioId: 'en_a1_u02_l23_d01_t1'
        },
        {
          id: 'turn_2',
          speakerId: 'char_david',
          speakerName: 'David',
          text: 'Hi! Yes, I really like this navy blue jacket. Can I try it on, please?',
          translationsByLang: { hi: 'नमस्ते! हाँ, मुझे यह नेवी ब्लू जैकेट बहुत पसंद है। क्या मैं इसे पहनकर देख सकता हूँ, कृपया?', es: '¡Hola! Sí, me gusta mucho esta chaqueta azul marino. ¿Puedo probármela, por favor?' },
          audioText: 'Hi! Yes, I really like this navy blue jacket. Can I try it on, please?',
          audioId: 'en_a1_u02_l23_d01_t2'
        },
        {
          id: 'turn_3',
          speakerId: 'char_chloe',
          speakerName: 'Chloe',
          text: 'Of course! The fitting rooms are straight ahead on your left.',
          translationsByLang: { hi: 'बिल्कुल! फिटिंग रूम सीधे आगे आपकी बाईं ओर हैं।', es: '¡Por supuesto! Los probadores están recto a su izquierda.' },
          audioText: 'Of course! The fitting rooms are straight ahead on your left.',
          audioId: 'en_a1_u02_l23_d01_t3'
        },
        {
          id: 'turn_4',
          speakerId: 'char_david',
          speakerName: 'David',
          text: 'Thank you. ... Excuse me, this small is a bit too tight around the shoulders. Do you have it in medium?',
          translationsByLang: { hi: 'धन्यवाद। ... माफ़ कीजिए, यह छोटा साइज कंधों के पास थोड़ा तंग है। क्या आपके पास यह मीडियम में है?', es: 'Gracias. ... Disculpe, esta talla pequeña me queda un poco apretada de hombros. ¿La tiene en mediana?' },
          audioText: 'Thank you. Excuse me, this small is a bit too tight around the shoulders. Do you have it in medium?',
          audioId: 'en_a1_u02_l23_d01_t4'
        },
        {
          id: 'turn_5',
          speakerId: 'char_chloe',
          speakerName: 'Chloe',
          text: 'Yes, here is the medium. ... Wow, it fits you perfectly and the color really suits you!',
          translationsByLang: { hi: 'हाँ, यह रहा मीडियम। ... वाह, यह आप पर बिल्कुल सही फिट आया है और रंग भी आप पर बहुत जंच रहा है!', es: 'Sí, aquí tiene la mediana. ... ¡Vaya, le queda perfecta y el color realmente le favorece!' },
          audioText: 'Yes, here is the medium. Wow, it fits you perfectly and the color really suits you!',
          audioId: 'en_a1_u02_l23_d01_t5'
        },
        {
          id: 'turn_6',
          speakerId: 'char_david',
          speakerName: 'David',
          text: 'Great! How much is it? — It\'s seventy dollars with the sale discount. I will take it!',
          translationsByLang: { hi: 'शानदार! यह कितने का है? — सेल छूट के साथ यह सत्तर डॉलर का है। मैं इसे लूँगा!', es: '¡Genial! ¿Cuánto cuesta? — Son setenta dólares con el descuento de las rebajas. ¡Me la llevo!' },
          audioText: 'Great! How much is it? It\'s seventy dollars with the sale discount. I will take it!',
          audioId: 'en_a1_u02_l23_d01_t6'
        }
      ]
    }
  ],

  // SECTION 8, 9, 10, 12, 13, 14, 15: Practice Exercises (15 items)
  practiceExercises: [
    {
      id: 'ex_u02_l23_p1',
      lessonId: 'lesson_a1_2_23',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Select the correct demonstrative pronoun for plural pants nearby:',
      sourceSentence: '___ black trousers are very comfortable.',
      options: [
        { id: 'o1', text: 'These', isCorrect: true },
        { id: 'o2', text: 'This', isCorrect: false },
        { id: 'o3', text: 'That', isCorrect: false }
      ],
      explanation: 'Use "These" with plural nouns like trousers.'
    },
    {
      id: 'ex_u02_l23_p2',
      lessonId: 'lesson_a1_2_23',
      stage: 8,
      type: 'fill_blank',
      prompt: 'Complete the sentence indicating excessive tightness:',
      sourceSentence: 'These shoes are ___ small for my feet.',
      options: [
        { id: 'o1', text: 'too', isCorrect: true },
        { id: 'o2', text: 'to', isCorrect: false },
        { id: 'o3', text: 'two', isCorrect: false }
      ],
      explanation: 'Use "too" before adjectives to express excess.'
    },
    {
      id: 'ex_u02_l23_p3',
      explanation: '\'Can I try on...?\' is a polite request. \'The fitting room\' is the place to try clothes.',
      lessonId: 'lesson_a1_2_23',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the clothing request:',
      targetSentence: 'Can I try on this green jacket in the fitting room',
      wordBank: ['Can', 'I', 'try', 'on', 'this', 'green', 'jacket', 'in', 'the', 'fitting', 'room', 'is']
    },
    {
      id: 'ex_u02_l23_p4',
      lessonId: 'lesson_a1_2_23',
      stage: 9,
      type: 'listening',
      prompt: 'Listen to the customer\'s size inquiry:',
      audioText: 'Do you have this cotton shirt in a large size',
      options: [
        { id: 'o1', text: 'Do you have this cotton shirt in a large size', isCorrect: true },
        { id: 'o2', text: 'Do you have those leather boots in brown', isCorrect: false },
        { id: 'o3', text: 'How much are these white shoes on sale', isCorrect: false }
      ],
      explanation: 'The customer asks for a cotton shirt in large.'
    },
    {
      id: 'ex_u02_l23_p5',
      explanation: '\'Suits you\' means the item looks good on you. \'That blue wool sweater\' is the subject.',
      lessonId: 'lesson_a1_2_23',
      stage: 9,
      type: 'listen_and_type',
      prompt: 'Listen and transcribe the compliment:',
      audioText: 'That blue wool sweater really suits you',
      targetSentence: 'That blue wool sweater really suits you'
    },
    {
      id: 'ex_u02_l23_p6',
      explanation: '\'How much are...?\' asks for the price with plural items like \'boots\'. \'Those\' is used for items at a distance.',
      lessonId: 'lesson_a1_2_23',
      stage: 10,
      type: 'word_ordering',
      prompt: 'Construct the price question for shoes:',
      targetSentence: 'Excuse me how much are those brown leather boots',
      wordBank: ['Excuse', 'me', 'how', 'much', 'are', 'those', 'brown', 'leather', 'boots', 'is', 'do']
    },
    {
      id: 'ex_u02_l23_p7',
      explanation: '\'It fits me perfectly\' means it is the right size. \'I will take it\' means I am buying it.',
      lessonId: 'lesson_a1_2_23',
      stage: 12,
      type: 'speaking',
      prompt: 'Speak this sentence into your microphone:',
      targetSentence: 'It fits me perfectly and it feels very comfortable. I will take it!',
      audioText: 'It fits me perfectly and it feels very comfortable. I will take it!'
    },
    {
      id: 'ex_u02_l23_p8',
      explanation: '\'In a medium size\' describes the size. \'Do you have this jacket?\' asks about availability. Hindi: \'क्या आपके पास यह जैकेट मीडियम साइज में है?\'',
      lessonId: 'lesson_a1_2_23',
      stage: 13,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'क्या आपके पास यह जैकेट मीडियम साइज में है?',
      sourceTranslations: {
        hi: 'क्या आपके पास यह जैकेट मीडियम साइज में है?',
        es: '¿Tiene esta chaqueta en talla mediana?'
      },
      targetSentence: 'Do you have this jacket in a medium size',
      wordBank: ['Do', 'you', 'have', 'this', 'jacket', 'in', 'a', 'medium', 'size', 'is', 'are']
    },
    {
      id: 'ex_u02_l23_p9',
      lessonId: 'lesson_a1_2_23',
      stage: 14,
      type: 'fill_blank',
      prompt: 'Interleaved Practice (Combining Unit 1 Present Continuous & Clothing):',
      sourceSentence: 'He ___ a dark grey suit and a red tie today.',
      options: [
        { id: 'o1', text: 'is wearing', isCorrect: true },
        { id: 'o2', text: 'wears to', isCorrect: false },
        { id: 'o3', text: 'are wear', isCorrect: false }
      ],
      explanation: 'Use present continuous "is wearing" for what someone is dressed in today.'
    },
    {
      id: 'ex_u02_l23_p10',
      lessonId: 'lesson_a1_2_23',
      stage: 15,
      type: 'error_correction',
      prompt: 'Fix the demonstrative and plural error:',
      sourceSentence: 'This shoes is too small.',
      options: [
        { id: 'o1', text: 'These shoes are too small.', isCorrect: true },
        { id: 'o2', text: 'This shoe are too small.', isCorrect: false },
        { id: 'o3', text: 'These shoe is too small.', isCorrect: false }
      ],
      explanation: '"Shoes" is plural: "These shoes are too small".'
    },
    {
      id: 'ex_u02_l23_p11',
      lessonId: 'lesson_a1_2_23',
      stage: 16,
      type: 'dialogue_completion',
      prompt: 'Select the best shop clerk answer:',
      sourceSentence: 'Customer: "Where are the fitting rooms, please?" -> Clerk: "___"',
      options: [
        { id: 'o1', text: 'They are straight ahead, next to the mirrors.', isCorrect: true },
        { id: 'o2', text: 'I wake up at seven o\'clock.', isCorrect: false },
        { id: 'o3', text: 'Two loaves of bread, please.', isCorrect: false }
      ],
      explanation: 'Gives location of the fitting rooms.'
    },
    {
      id: 'ex_u02_l23_p12',
      lessonId: 'lesson_a1_2_23',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Which word means an enclosed booth in a store for trying on garments?',
      sourceSentence: 'Retail location:',
      options: [
        { id: 'o1', text: 'fitting room', isCorrect: true },
        { id: 'o2', text: 'platform', isCorrect: false },
        { id: 'o3', text: 'supermarket', isCorrect: false }
      ],
      explanation: '"fitting room" is where customers try on clothes.'
    },
    {
      id: 'ex_u02_l23_p13',
      lessonId: 'lesson_a1_2_23',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Which demonstrative pronoun is used for distant singular objects ("that jacket over there")?',
      sourceSentence: 'Grammar demonstrative check:',
      options: [
        { id: 'o1', text: 'that', isCorrect: true },
        { id: 'o2', text: 'these', isCorrect: false },
        { id: 'o3', text: 'this', isCorrect: false }
      ],
      explanation: '"that" is singular and distant.'
    },
    {
      id: 'ex_u02_l23_p14',
      explanation: '\'Are on sale\' is the passive form in the present. \'With a discount\' explains the offer.',
      lessonId: 'lesson_a1_2_23',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the sentence:',
      targetSentence: 'All winter coats are on sale with a discount',
      wordBank: ['All', 'winter', 'coats', 'are', 'on', 'sale', 'with', 'a', 'discount', 'is']
    },
    {
      id: 'ex_u02_l23_p15',
      explanation: '\'Do you have this dress in small or medium?\' asks about sizes. \'Excuse me\' is a polite opening.',
      lessonId: 'lesson_a1_2_23',
      stage: 12,
      type: 'speaking',
      prompt: 'Speak this sentence clearly into your microphone:',
      targetSentence: 'Excuse me, do you have this dress in small or medium?',
      audioText: 'Excuse me, do you have this dress in small or medium?'
    }
  ],

  // SECTION 16: Review Exercises (4 items)
  reviewExercises: [
    {
      id: 'ex_u02_l23_rev1',
      lessonId: 'lesson_a1_2_23',
      stage: 16,
      type: 'multiple_choice',
      prompt: 'Which sentence is grammatically correct?',
      sourceSentence: 'Grammar review:',
      options: [
        { id: 'o1', text: 'Those black trousers are too long for me.', isCorrect: true },
        { id: 'o2', text: 'That black trousers is too long for me.', isCorrect: false },
        { id: 'o3', text: 'This black trousers is too long for me.', isCorrect: false }
      ],
      explanation: 'Use plural demonstratives "Those" and verb "are" with trousers.'
    },
    {
      id: 'ex_u02_l23_rev2',
      lessonId: 'lesson_a1_2_23',
      stage: 16,
      type: 'fill_blank',
      prompt: 'Complete the sentence:',
      sourceSentence: 'The green wool scarf really ___ your eyes!',
      options: [
        { id: 'o1', text: 'suits', isCorrect: true },
        { id: 'o2', text: 'wears', isCorrect: false },
        { id: 'o3', text: 'tries', isCorrect: false }
      ],
      explanation: '"suits" means looks attractive on someone.'
    },
    {
      id: 'ex_u02_l23_rev3',
      explanation: '\'Made of\' gives the material. \'This cotton shirt\' is singular, but the sentence uses \'is made\' (not \'are\').',
      lessonId: 'lesson_a1_2_23',
      stage: 16,
      type: 'word_ordering',
      prompt: 'Build the sentence:',
      targetSentence: 'This cotton shirt is made of pure natural fabric',
      wordBank: ['This', 'cotton', 'shirt', 'is', 'made', 'of', 'pure', 'natural', 'fabric', 'are']
    },
    {
      id: 'ex_u02_l23_rev4',
      explanation: '\'It fits perfectly\' means the size is right. \'I will take it\' means buying it. Hindi: \'यह बिल्कुल सही फिट है। मैं इसे लूँगा!\'',
      lessonId: 'lesson_a1_2_23',
      stage: 16,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'यह बिल्कुल सही फिट है। मैं इसे लूँगा!',
      sourceTranslations: { hi: 'यह बिल्कुल सही फिट है। मैं इसे लूँगा!', es: 'Me queda perfecto. ¡Me lo llevo!' },
      targetSentence: 'It fits perfectly I will take it',
      wordBank: ['It', 'fits', 'perfectly', 'I', 'will', 'take', 'it', 'are', 'is', 'too']
    }
  ],

  // SECTION 17: Assessment Exercises (10 items)
  assessmentExercises: [
    {
      id: 'ex_u02_l23_a1',
      lessonId: 'lesson_a1_2_23',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Choose the correct demonstrative: "___ boots over there are made of genuine leather."',
      sourceSentence: 'Grammar test:',
      options: [
        { id: 'o1', text: 'Those', isCorrect: true },
        { id: 'o2', text: 'That', isCorrect: false },
        { id: 'o3', text: 'This', isCorrect: false },
        { id: 'o4', text: 'These', isCorrect: false }
      ],
      explanation: '"over there" indicates distance with plural "boots" -> "Those".'
    },
    {
      id: 'ex_u02_l23_a2',
      lessonId: 'lesson_a1_2_23',
      stage: 17,
      type: 'fill_blank',
      prompt: 'Select the missing word: "Can I try ___ this jacket in the fitting room?"',
      sourceSentence: 'Phrasal verb test:',
      options: [
        { id: 'o1', text: 'on', isCorrect: true },
        { id: 'o2', text: 'at', isCorrect: false },
        { id: 'o3', text: 'in', isCorrect: false },
        { id: 'o4', text: 'for', isCorrect: false }
      ],
      explanation: 'The phrasal verb is "try on".'
    },
    {
      id: 'ex_u02_l23_a3',
      explanation: '\'A larger size\' is a comparative request. \'Do you have this dress in...?\' asks about availability.',
      lessonId: 'lesson_a1_2_23',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the size inquiry:',
      targetSentence: 'Do you have this dress in a larger size please',
      wordBank: ['Do', 'you', 'have', 'this', 'dress', 'in', 'a', 'larger', 'size', 'please', 'is']
    },
    {
      id: 'ex_u02_l23_a4',
      lessonId: 'lesson_a1_2_23',
      stage: 17,
      type: 'error_correction',
      prompt: 'Correct the sentence:',
      sourceSentence: 'This pants is too much tight.',
      options: [
        { id: 'o1', text: 'These pants are too tight.', isCorrect: true },
        { id: 'o2', text: 'This pant is too tight.', isCorrect: false },
        { id: 'o3', text: 'These pants is too much tight.', isCorrect: false }
      ],
      explanation: '"These pants are too tight".'
    },
    {
      id: 'ex_u02_l23_a5',
      lessonId: 'lesson_a1_2_23',
      stage: 17,
      type: 'listening',
      prompt: 'Listen and select what the speaker says:',
      audioText: 'These leather shoes are eighty dollars with the sale discount',
      options: [
        { id: 'o1', text: 'These leather shoes are eighty dollars with the sale discount', isCorrect: true },
        { id: 'o2', text: 'Those cotton shirts are fifty dollars in the boutique', isCorrect: false },
        { id: 'o3', text: 'The fitting room is located behind the payment counter', isCorrect: false }
      ],
      explanation: 'The speaker quotes eighty dollars for the leather shoes.'
    },
    {
      id: 'ex_u02_l23_a6',
      explanation: '\'Where are...?\' is used with the plural \'the fitting rooms\'. \'Please\' is a polite ending.',
      lessonId: 'lesson_a1_2_23',
      stage: 17,
      type: 'listen_and_type',
      prompt: 'Listen and transcribe accurately:',
      audioText: 'Where are the fitting rooms please',
      targetSentence: 'Where are the fitting rooms please'
    },
    {
      id: 'ex_u02_l23_a7',
      lessonId: 'lesson_a1_2_23',
      stage: 17,
      type: 'dialogue_completion',
      prompt: 'Select the best response:',
      sourceSentence: 'Sales Assistant: "How does the sweater feel?" -> Customer: "___"',
      options: [
        { id: 'o1', text: 'It fits perfectly and it\'s very comfortable. I will buy it.', isCorrect: true },
        { id: 'o2', text: 'I take the bus to university.', isCorrect: false },
        { id: 'o3', text: 'Turn left at the roundabout.', isCorrect: false }
      ],
      explanation: 'Direct evaluation of garment fit and comfort.'
    },
    {
      id: 'ex_u02_l23_a8',
      explanation: '\'Too small\' means smaller than needed. \'These shoes\' is plural, so \'are\' is used. Hindi: \'ये जूते मेरे लिए बहुत छोटे हैं।\'',
      lessonId: 'lesson_a1_2_23',
      stage: 17,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'ये जूते मेरे लिए बहुत छोटे हैं।',
      sourceTranslations: { hi: 'ये जूते मेरे लिए बहुत छोटे हैं।', es: 'Estos zapatos son demasiado pequeños para mí.' },
      targetSentence: 'These shoes are too small for me',
      wordBank: ['These', 'shoes', 'are', 'too', 'small', 'for', 'me', 'is', 'this']
    },
    {
      id: 'ex_u02_l23_a9',
      lessonId: 'lesson_a1_2_23',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Which fabric is produced naturally by silkworms and used for luxury ties and dresses?',
      sourceSentence: 'Fabric check:',
      options: [
        { id: 'o1', text: 'silk', isCorrect: true },
        { id: 'o2', text: 'wool', isCorrect: false },
        { id: 'o3', text: 'leather', isCorrect: false },
        { id: 'o4', text: 'cotton', isCorrect: false }
      ],
      explanation: '"silk" is made by silkworms.'
    },
    {
      id: 'ex_u02_l23_a10',
      explanation: '\'That green jacket\' is singular, so \'suits\' takes -s. \'Looks great\' means it looks good.',
      lessonId: 'lesson_a1_2_23',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the final sentence:',
      targetSentence: 'That green jacket really suits you and looks great',
      wordBank: ['That', 'green', 'jacket', 'really', 'suits', 'you', 'and', 'looks', 'great', 'is']
    }
  ]
};
