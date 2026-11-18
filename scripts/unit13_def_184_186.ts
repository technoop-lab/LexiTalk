import { LessonConfigA2 } from './unit13_builder_helper';

// =========================================================================
// LESSON 184: Ordering at Local Eateries, Food Markets & Dining Traditions
// =========================================================================
export const LESSON_184_CONFIG: LessonConfigA2 = {
  num: 184,
  title: 'Ordering at Local Eateries, Food Markets & Dining Traditions',
  icon: '🍽️',
  estMin: 25,
  objTitle: 'Polite Requests with "would like", "could we have", and Dietary Declarations',
  objDesc: 'Learn to navigate bustling food markets, local bistros, and authentic street food stalls, order meals politely using modal frames, ask for dish recommendations, and express dietary restrictions.',
  objHi: 'स्थानीय बाज़ारों और भोजनालयों में ऑर्डर करने, "would like" और "could we have" के साथ विनम्र अनुरोध करने, और आहार संबंधी प्राथमिकताओं को व्यक्त करना सीखें।',
  objEs: 'Pedir comida en mercados locales, puestos callejeros y restaurantes usando fórmulas de cortesía con "would like" y "could we have", y declarar restricciones dietéticas.',
  canDo: [
    'I can order food and drinks politely at street food stalls and sit-down restaurants.',
    'I can ask for recommendations regarding house specialties and daily specials.',
    'I can state food allergies and dietary preferences clearly (vegetarian, gluten-free, vegan).',
    'I can request the bill, clarify service charges, and calculate tips.'
  ],
  canDoHi: [
    'मैं स्ट्रीट फूड स्टॉल और रेस्तरां में विनम्रता से खाना और पेय ऑर्डर कर सकता हूँ।',
    'मैं विशेष व्यंजनों और दैनिक सिफारिशों के बारे में पूछ सकता हूँ।',
    'मैं खाद्य एलर्जी और आहार प्राथमिकताओं (शाकाहारी, ग्लूटेन-मुक्त) को स्पष्ट रूप से बता सकता हूँ।',
    'मैं बिल मांग सकता हूँ, सर्विस चार्ज को समझ सकता हूँ और टिप दे सकता हूँ।'
  ],
  canDoEs: [
    'Puedo pedir comida y bebida educadamente en puestos callejeros y restaurantes.',
    'Puedo pedir recomendaciones sobre especialidades de la casa y platos del día.',
    'Puedo indicar claramente alergias alimentarias y preferencias (vegetariano, sin gluten).',
    'Puedo pedir la cuenta, consultar cargos por servicio y calcular propinas.'
  ],
  vocab: [
    { w: 'appetizer', p: '/ˈæpɪtaɪzər/', m: 'a small dish of food served before the main course of a meal', hi: 'स्टार्टर / क्षुधावर्धक', es: 'aperitivo / entrada', fr: 'apéritif / entrée', de: 'Vorspeise', pt: 'aperitivo / entrada', zh: '前菜 / 开胃菜', ar: 'مقبلات', ja: '前菜 / アペタイザー', ru: 'закуска / аперитив', ex: 'We ordered crispy spring rolls as an appetizer.', exHi: 'हमने स्टार्टर के रूप में कुरकुरे स्प्रिंग रोल का ऑर्डर दिया।', exEs: 'Pedimos rollitos de primavera crujientes como aperitivo.', ic: '🥟' },
    { w: 'beverage', p: '/ˈbevərɪdʒ/', m: 'a drink, especially one other than water', hi: 'पेय पदार्थ', es: 'bebida', fr: 'boisson', de: 'Getränk', pt: 'bebida', zh: '饮料', ar: 'مشروب', ja: '飲み物 / 飲料', ru: 'напиток', ex: 'What hot or cold beverage would you like with breakfast?', exHi: 'नाश्ते के साथ आप कौन सा गर्म या ठंडा पेय लेना चाहेंगे?', exEs: '¿Qué bebida fría o caliente le gustaría con el desayuno?', ic: '🥤' },
    { w: 'specialty', p: '/ˈspeʃəlti/', m: 'a type of food or product that a person or restaurant is famous for', hi: 'विशेष व्यंजन / खासियत', es: 'especialidad', fr: 'spécialité', de: 'Spezialität', pt: 'especialidade', zh: '招牌菜 / 特产', ar: 'طبق مميز / تخصص', ja: '名物料理 / スペシャリティ', ru: 'фирменное блюдо', ex: 'Wood-fired margherita pizza is the restaurant\'s specialty.', exHi: 'लकड़ी की आंच पर बना मार्गेरिटा पिज्जा इस रेस्तरां की खासियत है।', exEs: 'La pizza margherita al horno de leña es la especialidad del restaurante.', ic: '🍕' },
    { w: 'vegetarian', p: '/ˌvedʒəˈteəriən/', m: 'a person who does not eat meat or fish, or food suitable for them', hi: 'शाकाहारी', es: 'vegetariano', fr: 'végétarien', de: 'vegetarisch / Vegetarier', pt: 'vegetariano', zh: '素食的 / 素食主义者', ar: 'نباتي', ja: 'ベジタリアンの / 菜食主義者', ru: 'вегетарианский', ex: 'Does this menu offer vegetarian options?', exHi: 'क्या इस मेनू में शाकाहारी विकल्प उपलब्ध हैं?', exEs: '¿Este menú ofrece opciones vegetarianas?', ic: '🥗' },
    { w: 'allergy', p: '/ˈælədʒi/', m: 'a damaging immune response by the body to a substance like nuts or shellfish', hi: 'एलर्जी', es: 'alergia', fr: 'allergie', de: 'Allergie', pt: 'alergia', zh: '过敏', ar: 'حساسية', ja: 'アレルギー', ru: 'аллергия', ex: 'Please inform the waiter if you have a peanut allergy.', exHi: 'यदि आपको मूंगफली से एलर्जी है तो कृपया वेटर को सूचित करें।', exEs: 'Por favor informe al camarero si tiene alergia al maní.', ic: '⚠️' },
    { w: 'bill', p: '/bɪl/', m: 'a printed or written statement of the money owed for food or drink', hi: 'बिल / भुगतान पर्ची', es: 'cuenta / factura', fr: 'addition / facture', de: 'Rechnung', pt: 'conta / fatura', zh: '账单', ar: 'فاتورة الحساب', ja: 'お会計 / 伝票', ru: 'счет', ex: 'Could we please have the bill when you are ready?', exHi: 'क्या हमें बिल मिल सकता है?', exEs: '¿Podríamos pedir la cuenta, por favor?', ic: '🧾' },
    { w: 'tip', p: '/tɪp/', m: 'a sum of money given to someone as a reward for their service', hi: 'टिप / बख्शीश', es: 'propina', fr: 'pourboire', de: 'Trinkgeld', pt: 'gorjeta', zh: '小费', ar: 'إكرامية / بقشيش', ja: 'チップ', ru: 'чаевые', ex: 'In many countries, leaving a ten percent tip is customary.', exHi: 'कई देशों में दस प्रतिशत टिप छोड़ना एक प्रथा है।', exEs: 'En muchos países, dejar una propina del diez por ciento es habitual.', ic: '💵' },
    { w: 'platter', p: '/ˈplætər/', m: 'a large flat dish or plate for serving food to a group', hi: 'बड़ी थाली / प्लेटर', es: 'bandeja / fuente de comida', fr: 'plateau / grand plat', de: 'Platte / Servierteller', pt: 'travessa / tábua', zh: '大拼盘 / 大拼碟', ar: 'طبق تقديم كبير', ja: '盛り合わせプレート / 大皿', ru: 'блюдо / ассорти', ex: 'We shared a Mediterranean mezze platter with hummus and olives.', exHi: 'हमने हम्मस और जैतून के साथ मेडिटेरेनियन मेज़े प्लेटर साझा किया।', exEs: 'Compartimos una bandeja de mezze mediterráneo con hummus y aceitunas.', ic: '🥙' },
    { w: 'delicious', p: '/dɪˈlɪʃəs/', m: 'highly pleasant to the taste', hi: 'स्वादिष्ट / लज़ीज़', es: 'delicioso / exquisito', fr: 'délicieux / savoureux', de: 'köstlich / lecker', pt: 'delicioso / gostoso', zh: '美味的 / 好吃的', ar: 'لذيذ / شهي', ja: 'とても美味しい / 絶品の', ru: 'вкусный / восхитительный', ex: 'The grilled salmon was absolutely delicious.', exHi: 'ग्रिल्ड सैल्मन मछली बेहद स्वादिष्ट थी।', exEs: 'El salmón a la parrilla estuvo absolutamente delicioso.', ic: '😋' },
    { w: 'stall', p: '/stɔːl/', m: 'a stand, booth, or compartment for the sale of goods in a market', hi: 'स्टॉल / दुकान', es: 'puesto / caseta de mercado', fr: 'étal / stand de marché', de: 'Marktstand / Bude', pt: 'barraca / quiosque', zh: '摊位 / 档口', ar: 'كشك / بسطة طعام', ja: '屋台 / 露店', ru: 'киоск / лоток', ex: 'This street food stall sells the best steamed dumplings in town.', exHi: 'यह स्ट्रीट फूड स्टॉल शहर में सबसे अच्छे मोमोज बेचता है।', exEs: 'Este puesto de comida callejera vende las mejores empanadas al vapor de la ciudad.', ic: '🏮' },
    { w: 'recommend', p: '/ˌrekəˈmend/', m: 'put forward someone or something with approval as being suitable for a purpose', hi: 'सिफारिश करना / सुझाव देना', es: 'recomendar / sugerir', fr: 'recommander', de: 'empfehlen', pt: 'recomendar', zh: '推荐', ar: 'يوصي بـ / يقترح', ja: 'おすすめする / 推薦する', ru: 'рекомендовать / советовать', ex: 'Which dessert would you recommend to a first-time visitor?', exHi: 'पहली बार आने वाले आगंतुक को आप कौन सी मिठाई की सिफारिश करेंगे?', exEs: '¿Qué postre recomendaría a alguien que viene por primera vez?', ic: '👍' },
    { w: 'side dish', p: '/ˈsaɪd dɪʃ/', m: 'a food item that accompanies the entrée or main course', hi: 'सह-व्यंजन / साइड डिश', es: 'guarnición / acompañamiento', fr: 'accompagnement', de: 'Beilage', pt: 'acompanhamento / guarnição', zh: '配菜 / 小菜', ar: 'طبق جانبي', ja: 'サイドメニュー / 付け合わせ', ru: 'гарнир / сайд-диш', ex: 'The roast chicken comes with a side dish of garlic potatoes.', exHi: 'रोस्ट चिकन लहसुन वाले आलू के साइड डिश के साथ आता है।', exEs: 'El pollo asado viene con una guarnición de patatas al ajo.', ic: '🍟' },
    { w: 'reservation', p: '/ˌrezəˈveɪʃn/', m: 'an arrangement to secure a seat, table, or room in advance', hi: 'आरक्षण / टेबल बुकिंग', es: 'reserva', fr: 'réservation', de: 'Reservierung', pt: 'reserva', zh: '预订 / 预定座位', ar: 'حجز طاولة', ja: '予約 / テーブル予約', ru: 'бронь / резервация', ex: 'We have a table reservation for four at 7:30 PM.', exHi: 'हमारे पास शाम 7:30 बजे चार लोगों के लिए टेबल आरक्षण है।', exEs: 'Tenemos una reserva de mesa para cuatro a las 7:30 PM.', ic: '📅' },
    { w: 'spicy level', p: '/ˈspaɪsi ˈlevl/', m: 'the degree of heat or pungency in a dish', hi: 'तीखेपन का स्तर', es: 'nivel de picante', fr: 'niveau de piquant', de: 'Schärfegrad', pt: 'nível de pimenta', zh: '辣度 / 辣味等级', ar: 'درجة الحرارة / مستوى الحار', ja: '辛さのレベル', ru: 'уровень остроты', ex: 'You can choose your spicy level from mild to extra hot.', exHi: 'आप हल्के से लेकर अत्यधिक तीखेपन का स्तर चुन सकते हैं।', exEs: 'Puede elegir su nivel de picante de suave a muy picante.', ic: '🌶️' },
    { w: 'gluten-free', p: '/ˈɡluːtn friː/', m: 'not containing gluten, a protein found in wheat, barley, and rye', hi: 'ग्लूटेन-मुक्त', es: 'sin gluten / para celíacos', fr: 'sans gluten', de: 'glutenfrei', pt: 'sem glúten', zh: '无麸质的', ar: 'خالٍ من الغلوتين', ja: 'グルテンフリーの', ru: 'безглютеновый', ex: 'Are these corn tortillas completely gluten-free?', exHi: 'क्या ये मक्के के टॉर्टिला पूरी तरह से ग्लूटेन-मुक्त हैं?', exEs: '¿Estas tortillas de maíz son completamente libres de gluten?', ic: '🌾' },
    { w: 'dessert', p: '/dɪˈzɜːt/', m: 'the sweet course eaten at the end of a meal', hi: 'मिठाई / मीठा व्यंजन', es: 'postre', fr: 'dessert', de: 'Dessert / Nachtisch', pt: 'sobremesa', zh: '甜点 / 甜品', ar: 'حلوى ما بعد الطعام', ja: 'デザート / 締めの一品', ru: 'десерт / сладкое', ex: 'We finished our meal with a rich mango dessert.', exHi: 'हमने अपने भोजन को एक स्वादिष्ट आम की मिठाई के साथ समाप्त किया।', exEs: 'Terminamos nuestra comida con un rico postre de mango.', ic: '🍰' },
    { w: 'server', p: '/ˈsɜːvər/', m: 'a person who serves food in a restaurant; waiter or waitress', hi: 'वेटर / परोसने वाला', es: 'camarero / mesero', fr: 'serveur / serveuse', de: 'Kellner / Bedienung', pt: 'garçom / atendente', zh: '服务员', ar: 'نادل / مقدم الطعام', ja: '給仕 / ウェイター', ru: 'официант', ex: 'Our server recommended the chef\'s seafood risotto.', exHi: 'हमारे सर्वर ने शेफ के सीफूड रिसोट्टो की सिफारिश की।', exEs: 'Nuestro mesero recomendó el risotto de mariscos del chef.', ic: '🤵' },
    { w: 'receipt', p: '/rɪˈsiːt/', m: 'a written acknowledgment of having received specified payment', hi: 'रसीद / पावती', es: 'recibo / comprobante', fr: 'reçu / ticket de caisse', de: 'Quittung / Kassenbon', pt: 'recibo / comprovante', zh: '收据 / 发票', ar: 'إيصال دفع', ja: 'レシート / 領収書', ru: 'квитанция / чек', ex: 'Keep your itemized receipt for expense reimbursement.', exHi: 'खर्च की प्रतिपूर्ति के लिए अपनी रसीद संभाल कर रखें।', exEs: 'Conserve su recibo detallado para el reembolso de gastos.', ic: '🧾' },
    { w: 'vendor', p: '/ˈvendər/', m: 'a person or company offering something for sale, especially street food', hi: 'विक्रेता / फेरीवाला', es: 'vendedor / puestero', fr: 'vendeur / marchand', de: 'Verkäufer / Händler', pt: 'vendedor ambulante', zh: '摊贩 / 商贩', ar: 'بائع متجول', ja: '屋台商人 / ベンダー', ru: 'продавец / уличный торговец', ex: 'The fruit vendor slices fresh pineapples for customers.', exHi: 'फल विक्रेता ग्राहकों के लिए ताजे अनानास काटता है।', exEs: 'El vendedor de fruta corta piñas frescas para los clientes.', ic: '🍍' },
    { w: 'takeaway', p: '/ˈteɪkəweɪ/', m: 'food purchased from a restaurant to be eaten elsewhere', hi: 'पैक कराया हुआ खाना / टेकअवे', es: 'para llevar / comida para llevar', fr: 'à emporter', de: 'Essen zum Mitnehmen', pt: 'comida para viagem / takeaway', zh: '外卖 / 打包', ar: 'طعام جاهز للتناول خارجاً', ja: 'テイクアウト / 持ち帰り', ru: 'еда навынос / тейкэвей', ex: 'We ordered Thai noodles for takeaway on our way home.', exHi: 'हमने घर जाते समय थाई नूडल्स पैक करवाए।', exEs: 'Pedimos fideos tailandeses para llevar de camino a casa.', ic: '🥡' }
  ],
  chunks: [
    { phrase: 'I would like to order', meaning: 'polite phrase to declare what meal you wish to have', hi: 'मैं ऑर्डर करना चाहूँगा', es: 'me gustaría pedir', fr: 'j\'aimerais commander', de: 'ich möchte gerne bestellen', pt: 'gostaria de pedir', zh: '我想点...', ar: 'أود أن أطلب', ja: '〜を注文したいのですが', ru: 'я хотел бы заказать', note: 'Standard polite restaurant phrase: "I would like to order the grilled sea bass."', ic: '🍽️' },
    { phrase: 'could we please have the bill', meaning: 'polite request to pay for the meal at the end', hi: 'क्या हमें बिल मिल सकता है', es: '¿nos trae la cuenta, por favor?', fr: 'pourrions-nous avoir l\'addition, s\'il vous plaît?', de: 'könnten wir bitte die Rechnung haben?', pt: 'poderia nos trazer a conta, por favor?', zh: '请结账 / 买单', ar: 'هل يمكننا الحصول على الفاتورة من فضلك', ja: 'お会計をお願いできますか', ru: 'можно нам счет, пожалуйста', note: 'Polite closing chunk: "Excuse me, could we please have the bill?"', ic: '🧾' },
    { phrase: 'what do you recommend', meaning: 'asking the waiter or local for their favorite dish suggestion', hi: 'आप क्या सुझाव देते हैं / क्या अच्छा है', es: '¿qué nos recomienda?', fr: 'que nous recommandez-vous?', de: 'was empfehlen Sie?', pt: 'o que você recomenda?', zh: '您有什么推荐的吗？', ar: 'ماذا تقترح لنا؟', ja: '何がおすすめですか？', ru: 'что вы порекомендуете?', note: 'Conversational dining chunk: "This is our first visit, what do you recommend?"', ic: '💡' },
    { phrase: 'on the side', meaning: 'served in a separate small container or plate', hi: 'अलग से परोसा जाना', es: 'aparte / al lado', fr: 'à part', de: 'separat dazu / extra', pt: 'à parte / de lado', zh: '单放 / 另放小碗', ar: 'على حدة / جانباً', ja: '別添えで', ru: 'отдельно / на гарнир', note: 'Customization: "Can I get the dressing on the side?"', ic: '🥣' },
    { phrase: 'is service included', meaning: 'asking if the tip or gratuity is already part of the total bill', hi: 'क्या सर्विस चार्ज शामिल है', es: '¿el servicio está incluido?', fr: 'le service est-il compris?', de: 'ist die Bedienung inbegriffen?', pt: 'o serviço está incluso?', zh: '服务费包含在内了吗？', ar: 'هل الخدمة مشمولة بالفاتورة؟', ja: 'サービス料は含まれていますか？', ru: 'включено ли обслуживание в счет?', note: 'Payment inquiry: "Excuse me, is service included in this total?"', ic: '💳' },
    { phrase: 'I am allergic to', meaning: 'declaring a medical allergy to a specific food substance', hi: 'मुझे ... से एलर्जी है', es: 'soy alérgico a', fr: 'je suis allergique à', de: 'ich bin allergisch gegen', pt: 'sou alérgico a', zh: '我对...过敏', ar: 'أعاني من حساسية تجاه', ja: '私は〜アレルギーです', ru: 'у меня аллергия на', note: 'Dietary warning: "Please note that I am allergic to shellfish."', ic: '⚠️' },
    { phrase: 'can we split the bill', meaning: 'asking to divide the payment equally among diners', hi: 'क्या हम बिल को अलग-अलग बांट सकते हैं', es: '¿podemos dividir la cuenta?', fr: 'pouvons-nous partager l\'addition?', de: 'können wir getrennt zahlen?', pt: 'podemos dividir a conta?', zh: '我们可以分开付吗？', ar: 'هل يمكننا تقسيم الفاتورة؟', ja: '別々に支払うことはできますか？', ru: 'можем ли мы разделить счет?', note: 'Group dining chunk: "Can we split the bill on two cards?"', ic: '👥' },
    { phrase: 'table for two please', meaning: 'standard greeting to request seating for two persons', hi: 'कृपया दो लोगों के लिए एक टेबल', es: 'una mesa para dos, por favor', fr: 'une table pour deux, s\'il vous plaît', de: 'einen Tisch für zwei, bitte', pt: 'uma mesa para dois, por favor', zh: '请给我们两位安排一张桌子', ar: 'طاولة لشخصين من فضلك', ja: '2名席をお願いします', ru: 'столик на двоих, пожалуйста', note: 'Host greeting: "Good evening! Table for two, please."', ic: '🪑' }
  ],
  grammar: {
    title: 'Polite Modal Requests with would like, could we have, and I\'ll have',
    concept: 'Using courteous modal phrasing for dining orders and dietary requests.',
    patterns: [
      {
        title: 'Polite Ordering Frames (I would like... / I\'ll have...)',
        structure: 'Subject + would like / \'d like + Noun / to Verb | Subject + will have / \'ll have + Noun',
        rule: 'Instead of direct "I want", native speakers use "I would like" or "I\'ll have" when ordering at restaurants and markets.',
        examples: [
          { en: 'I would like the grilled vegetable platter, please.', hi: 'मैं ग्रिल्ड वेजिटेबल प्लेटर लेना चाहूँगा, कृपया।', es: 'Me gustaría la bandeja de verduras a la parrilla, por favor.' },
          { en: 'I\'ll have a sparkling mineral water with lime.', hi: 'मैं नींबू के साथ एक मिनरल वाटर लूँगा।', es: 'Tomaré un agua mineral con gas y lima.' }
        ]
      },
      {
        title: 'Polite Inquiries and Requests with "Could we have..."',
        structure: 'Could + Subject + please + have + Noun?',
        rule: '"Could we have..." is the most standard, polite way to request items (menu, water, bill) from restaurant staff.',
        examples: [
          { en: 'Could we please have an extra set of cutlery?', hi: 'क्या हमें अतिरिक्त चम्मच-कांटे मिल सकते हैं?', es: '¿Podríamos pedir un juego extra de cubiertos, por favor?' },
          { en: 'Could we have the bill whenever you are ready?', hi: 'जब आप तैयार हों तो क्या हमें बिल मिल सकता है?', es: '¿Podríamos tener la cuenta cuando esté listo?' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'I want a coffee and the bill now.', cor: 'I would like a coffee and the bill, please.', exp: '"I want" sounds blunt and impolite to service staff. Use "I would like... please".', hi: '"I want" रूखा लगता है; वेटर से बात करते समय "I would like... please" का प्रयोग करें।', es: '"I want" suena muy brusco. Usa "I would like... please" para pedir cortésmente.' },
    { inc: 'Could you to bring more napkins?', cor: 'Could you bring more napkins, please?', exp: 'Modal verbs like "could" take a bare infinitive ("bring"), not "to bring".', hi: 'मोडल क्रिया "could" के बाद "to" न लगाएं, केवल मुख्य क्रिया ("bring") का प्रयोग करें।', es: 'Los verbos modales como "could" van seguidos del verbo en infinitivo sin "to".' },
    { inc: 'I am allergy for nuts.', cor: 'I am allergic to nuts.', exp: '"Allergy" is a noun. Use the adjective "allergic" with the preposition "to".', hi: 'विशेषण "allergic" के साथ "to" का प्रयोग करें: "I am allergic to nuts".', es: '"Allergy" es sustantivo. Usa el adjetivo "allergic to".' },
    { inc: 'Can we divide the ticket in four?', cor: 'Can we split the bill four ways?', exp: 'In restaurants, use "bill" (UK) or "check" (US) and "split the bill", not "ticket".', hi: 'रेस्तरां में बिल को विभाजित करने के लिए "split the bill" का प्रयोग करें।', es: 'Se dice "split the bill" o "split the check", no "divide the ticket".' },
    { inc: 'We would like order now.', cor: 'We would like to order now.', exp: '"Would like" requires "to + verb" when followed by an action.', hi: '"Would like" के बाद क्रिया होने पर "to + क्रिया" (to order) का उपयोग करें।', es: '"Would like" requiere "to + verbo" cuando precede a una acción.' }
  ],
  dialogues: [
    {
      title: 'Ordering at a Traditional Bistro',
      context: 'Liam and Maya order dinner at a local Italian eatery from their server, Marco.',
      charA: { name: 'Liam', av: '👨‍💼', role: 'Diner' },
      charB: { name: 'Marco', av: '🤵', role: 'Server' },
      turns: [
        { spk: 'Marco', text: 'Good evening! Welcome to Osteria Bella. Are you ready to order or would you like a few more minutes?', hi: 'शुभ संध्या! ओस्टेरिया बेला में आपका स्वागत है। क्या आप ऑर्डर देने के लिए तैयार हैं या कुछ और मिनट चाहेंगे?', es: '¡Buenas noches! Bienvenidos a Osteria Bella. ¿Están listos para ordenar o desean unos minutos más?' },
        { spk: 'Liam', text: 'Good evening! We are ready. To start, what do you recommend for an appetizer?', hi: 'शुभ संध्या! हम तैयार हैं। शुरुआत के लिए, आप स्टार्टर के रूप में क्या सुझाते हैं?', es: '¡Buenas noches! Estamos listos. Para empezar, ¿qué nos recomienda como aperitivo?' },
        { spk: 'Marco', text: 'Our fresh bruschetta with heirloom tomatoes and basil is very popular today.', hi: 'पारंपरिक टमाटर और तुलसी के साथ हमारी ताज़ा ब्रुशेटा आज बहुत लोकप्रिय है।', es: 'Nuestra bruschetta fresca con tomates tradicionales y albahaca es muy popular hoy.' },
        { spk: 'Liam', text: 'Wonderful! We would like the bruschetta, and for the main course, I\'ll have the mushroom risotto.', hi: 'बहुत बढ़िया! हम ब्रुशेटा लेना चाहेंगे, और मुख्य व्यंजन के लिए, मैं मशरूम रिसोट्टो लूँगा।', es: '¡Estupendo! Nos gustaría la bruschetta, y como plato principal, pediré el risotto de champiñones.' },
        { spk: 'Maya', text: 'And I would like the baked lasagna, please. Also, could we get the salad dressing on the side?', hi: 'और मुझे बेक्ड लज़ान्या चाहिए, कृपया। इसके अलावा, क्या हमें सलाद की ड्रेसिंग अलग से मिल सकती है?', es: 'Y a mí me gustaría la lasaña al horno, por favor. Además, ¿podríamos tener el aderezo de la ensalada aparte?' },
        { spk: 'Marco', text: 'Certainly! I will place your order with the kitchen right away.', hi: 'बिल्कुल! मैं अभी आपका ऑर्डर रसोई में भेजता हूँ।', es: '¡Por supuesto! Enviaré su pedido a la cocina de inmediato.' }
      ]
    },
    {
      title: 'Settling the Bill and Inquiring about Service',
      context: 'Maya asks about payment options and gratuity at the conclusion of dinner.',
      charA: { name: 'Maya', av: '👩‍💼', role: 'Customer' },
      charB: { name: 'Marco', av: '🤵', role: 'Server' },
      turns: [
        { spk: 'Maya', text: 'Excuse me Marco, everything was delicious! Could we please have the bill?', hi: 'माफ़ कीजिये मार्को, सब कुछ बहुत स्वादिष्ट था! क्या हमें बिल मिल सकता है?', es: 'Disculpe Marco, ¡todo estuvo delicioso! ¿Podríamos pedir la cuenta, por favor?' },
        { spk: 'Marco', text: 'Here is your bill. Take your time.', hi: 'यह आपका बिल है। आराम से देख लीजिये।', es: 'Aquí tiene su cuenta. Tómense su tiempo.' },
        { spk: 'Maya', text: 'Thank you. Is service included in the total, or should we add a tip?', hi: 'धन्यवाद। क्या कुल राशि में सर्विस चार्ज शामिल है, या हमें टिप अलग से जोड़नी चाहिए?', es: 'Gracias. ¿El servicio está incluido en el total o debemos añadir propina?' },
        { spk: 'Marco', text: 'Service is not included. You can add a tip on the card terminal if you wish.', hi: 'सर्विस चार्ज शामिल नहीं है। यदि आप चाहें तो कार्ड टर्मिनल पर टिप जोड़ सकते हैं।', es: 'El servicio no está incluido. Puede agregar una propina en la terminal de tarjeta si lo desea.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_184_p1',
      type: 'multiple_choice',
      prompt: 'Choose the most polite way to order a meal at a restaurant:',
      options: [
        { id: '1', text: 'I would like to order the grilled salmon, please.', isCorrect: true },
        { id: '2', text: 'I want the grilled salmon right now.', isCorrect: false },
        { id: '3', text: 'Give me the grilled salmon immediately.', isCorrect: false },
        { id: '4', text: 'I must have the grilled salmon.', isCorrect: false }
      ],
      correctAnswer: 'I would like to order the grilled salmon, please.',
      explanation: '"I would like to order... please" is the standard polite formulation.'
    },
    {
      id: 'ex_184_p2',
      type: 'fill_blank',
      prompt: 'Complete the polite request for the bill:',
      text: 'Excuse me, [blank] we please have the bill?',
      options: [
        { id: '1', text: 'could', isCorrect: true },
        { id: '2', text: 'must', isCorrect: false },
        { id: '3', text: 'did', isCorrect: false },
        { id: '4', text: 'shall', isCorrect: false }
      ],
      correctAnswer: 'could',
      explanation: '"Could we please have the bill?" is the standard polite question.'
    },
    {
      id: 'ex_184_p3',
      type: 'word_ordering',
      prompt: 'Arrange the words to state a dietary allergy correctly:',
      tokens: ['I', 'am', 'allergic', 'to', 'peanuts', 'and', 'shellfish', '.'],
      correctOrder: ['I', 'am', 'allergic', 'to', 'peanuts', 'and', 'shellfish', '.'],
      explanation: '"I am allergic to [food item]" expresses a dietary allergy.'
    },
    {
      id: 'ex_184_p4',
      type: 'error_correction',
      prompt: 'Correct the error in this dining request:',
      errorSentence: 'Could you to bring a glass of cold water?',
      correctSentence: 'Could you bring a glass of cold water?',
      explanation: 'Do not use "to" after the modal auxiliary "could".'
    },
    {
      id: 'ex_184_p5',
      type: 'translation',
      prompt: 'Translate to English: "क्या हम बिल को दो कार्डों में विभाजित कर सकते हैं?"',
      targetSentence: 'Can we split the bill on two cards?',
      explanation: '"split the bill on two cards" translates dividing payments.'
    },
    {
      id: 'ex_184_p6',
      type: 'multiple_choice',
      prompt: 'What does asking for sauce "on the side" mean?',
      options: [
        { id: '1', text: 'Served in a separate dish rather than poured on top', isCorrect: true },
        { id: '2', text: 'Eaten only after leaving the restaurant', isCorrect: false },
        { id: '3', text: 'Shared with strangers sitting at another table', isCorrect: false },
        { id: '4', text: 'Served completely cold from yesterday', isCorrect: false }
      ],
      correctAnswer: 'Served in a separate dish rather than poured on top',
      explanation: '"On the side" means served separately.'
    },
    {
      id: 'ex_184_p7',
      type: 'fill_blank',
      prompt: 'Select the correct adjective to describe non-meat options:',
      text: 'Our chef prepares several delicious [blank] dishes daily.',
      options: [
        { id: '1', text: 'vegetarian', isCorrect: true },
        { id: '2', text: 'carnivore', isCorrect: false },
        { id: '3', text: 'expired', isCorrect: false },
        { id: '4', text: 'frozen', isCorrect: false }
      ],
      correctAnswer: 'vegetarian',
      explanation: '"Vegetarian" dishes contain no meat or fish.'
    },
    {
      id: 'ex_184_p8',
      type: 'speaking',
      prompt: 'Speak this polite order clearly into your microphone:',
      targetSentence: 'I would like a table for two, and could we see the daily specials menu?',
      audioText: 'I would like a table for two, and could we see the daily specials menu?',
      explanation: 'Practice natural intonation and polite cadence.'
    },
    {
      id: 'ex_184_p9',
      type: 'listening',
      prompt: 'Listen to the customer and determine what they asked for:',
      audioText: 'Excuse me, could we please have the bill, and is service included in this amount?',
      options: [
        { id: '1', text: 'They asked for the bill and inquired about service charge.', isCorrect: true },
        { id: '2', text: 'They complained about cold soup.', isCorrect: false },
        { id: '3', text: 'They ordered five extra desserts.', isCorrect: false },
        { id: '4', text: 'They asked for a taxi to the airport.', isCorrect: false }
      ],
      correctAnswer: 'They asked for the bill and inquired about service charge.',
      explanation: 'The audio asks for the bill and whether service is included.'
    }
  ],
  review: [
    {
      id: 'ex_184_r1',
      type: 'multiple_choice',
      prompt: 'Choose the correct preposition:',
      text: 'Please make sure there are no peanuts because I am allergic [blank] nuts.',
      options: [
        { id: '1', text: 'to', isCorrect: true },
        { id: '2', text: 'for', isCorrect: false },
        { id: '3', text: 'with', isCorrect: false },
        { id: '4', text: 'at', isCorrect: false }
      ],
      correctAnswer: 'to',
      explanation: 'The adjective "allergic" collogates with "to".'
    },
    {
      id: 'ex_184_r2',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the appropriate word:',
      text: 'For dessert, we ordered a slice of warm apple pie with a scoop of [blank] cream.',
      options: [
        { id: '1', text: 'vanilla', isCorrect: true },
        { id: '2', text: 'salt', isCorrect: false },
        { id: '3', text: 'vinegar', isCorrect: false },
        { id: '4', text: 'pepper', isCorrect: false }
      ],
      correctAnswer: 'vanilla',
      explanation: '"Vanilla" ice cream is a classic dessert pairing.'
    },
    {
      id: 'ex_184_r3',
      type: 'word_ordering',
      prompt: 'Assemble the sentence correctly:',
      tokens: ['Could', 'we', 'please', 'have', 'the', 'bill', 'whenever', 'ready', '?'],
      correctOrder: ['Could', 'we', 'please', 'have', 'the', 'bill', 'whenever', 'ready', '?'],
      explanation: 'Polite request: "Could we please have the bill whenever ready?"'
    },
    {
      id: 'ex_184_r4',
      type: 'translation',
      prompt: 'Translate to English: "कृपया दो लोगों के लिए एक टेबल, और क्या आपके पास ग्लूटेन-मुक्त विकल्प हैं?"',
      targetSentence: 'A table for two please, and do you have gluten-free options?',
      explanation: '"table for two please" and "gluten-free options" are standard dining phrases.'
    }
  ],
  assessment: [
    {
      id: 'ex_184_a1',
      type: 'multiple_choice',
      prompt: 'Which phrase is the most courteous for requesting water?',
      options: [
        { id: '1', text: 'Could we please have a carafe of tap water?', isCorrect: true },
        { id: '2', text: 'Bring water now.', isCorrect: false },
        { id: '3', text: 'I want water quickly.', isCorrect: false },
        { id: '4', text: 'Give water.', isCorrect: false }
      ],
      correctAnswer: 'Could we please have a carafe of tap water?',
      explanation: '"Could we please have..." represents standard restaurant etiquette.'
    },
    {
      id: 'ex_184_a2',
      type: 'fill_blank',
      prompt: 'Choose the correct verb phrase:',
      text: 'I [blank] the seafood paella for my main course, please.',
      options: [
        { id: '1', text: '\'ll have', isCorrect: true },
        { id: '2', text: 'must to take', isCorrect: false },
        { id: '3', text: 'am having had', isCorrect: false },
        { id: '4', text: 'had taken', isCorrect: false }
      ],
      correctAnswer: '\'ll have',
      explanation: '"I\'ll have" is the natural spoken contraction for ordering food.'
    },
    {
      id: 'ex_184_a3',
      type: 'error_correction',
      prompt: 'Identify and fix the grammatical error:',
      errorSentence: 'We would like order two sparkling waters.',
      correctSentence: 'We would like to order two sparkling waters.',
      explanation: '"Would like" must be followed by an infinitive with "to" ("to order").'
    },
    {
      id: 'ex_184_a4',
      type: 'translation',
      prompt: 'Translate to English: "माफ़ कीजिये, क्या इस कुल राशि में सर्विस चार्ज शामिल है?"',
      targetSentence: 'Excuse me, is service included in this total amount?',
      explanation: '"is service included in this total amount" translates the bill inquiry.'
    }
  ]
};

// =========================================================================
// LESSON 185: Arts, Museums, Exhibitions & Cultural Heritage
// =========================================================================
export const LESSON_185_CONFIG: LessonConfigA2 = {
  num: 185,
  title: 'Arts, Museums, Exhibitions & Cultural Heritage',
  icon: '🏛️',
  estMin: 25,
  objTitle: 'Present & Past Passive Voice (is located, was founded, are exhibited) in Cultural Descriptions',
  objDesc: 'Learn to describe historic monuments, art galleries, museum artifacts, and architectural heritage using the basic Present and Past Passive Voice.',
  objHi: 'ऐतिहासिक स्मारकों, कला दीर्घाओं, संग्रहालय कलाकृतियों और स्थापत्य विरासत का वर्णन करने के लिए Present और Past Passive Voice (is built, was painted, are preserved) का उपयोग करना सीखें।',
  objEs: 'Describir monumentos históricos, galerías de arte, objetos de museos y patrimonio arquitectónico usando la voz pasiva en presente y pasado.',
  canDo: [
    'I can describe world-famous monuments, museums, and historical buildings.',
    'I can use the Past Passive (was built, was founded, was painted by) to explain origins.',
    'I can use the Present Passive (are displayed, is visited by) to describe current exhibitions.',
    'I can ask for museum audio guides, admission tickets, and guided tour times.'
  ],
  canDoHi: [
    'मैं विश्व प्रसिद्ध स्मारकों, संग्रहालयों और ऐतिहासिक इमारतों का वर्णन कर सकता हूँ।',
    'मैं इतिहास की व्याख्या करने के लिए Past Passive (was built, was painted) का उपयोग कर सकता हूँ।',
    'मैं वर्तमान प्रदर्शनियों का वर्णन करने के लिए Present Passive (are displayed, is preserved) का उपयोग कर सकता हूँ।',
    'मैं संग्रहालय के ऑडियो गाइड, टिकट और निर्देशित पर्यटन समय के बारे में पूछ सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir monumentos famosos, museos y edificios históricos.',
    'Puedo usar la voz pasiva en pasado (fue construido, fue pintado) para explicar orígenes.',
    'Puedo usar la voz pasiva en presente (se exhiben, es visitado por) para exposiciones actuales.',
    'Puedo pedir audioguías de museos, entradas y horarios de visitas guiadas.'
  ],
  vocab: [
    { w: 'monument', p: '/ˈmɒnjumənt/', m: 'a statue, building, or other structure erected to commemorate a notable person or event', hi: 'स्मारक', es: 'monumento', fr: 'monument', de: 'Denkmal / Monument', pt: 'monumento', zh: '纪念碑 / 历史古迹', ar: 'نصب تذكاري / معلَم', ja: '記念碑 / モニュメント', ru: 'памятник / монумент', ex: 'The ancient stone monument was erected over five hundred years ago.', exHi: 'प्राचीन पत्थर का स्मारक पांच सौ साल से भी पहले बनाया गया था।', exEs: 'El antiguo monumento de piedra fue erigido hace más de quinientos años.', ic: '🗿' },
    { w: 'exhibition', p: '/ˌeksɪˈbɪʃn/', m: 'a public display of works of art or items of interest held in an art gallery or museum', hi: 'प्रदर्शनी', es: 'exposición / muestra', fr: 'exposition', de: 'Ausstellung', pt: 'exposição', zh: '展览 / 展出', ar: 'معرض', ja: '展覧会 / 展示会', ru: 'выставка / экспозиция', ex: 'The museum is hosting an impressionist art exhibition this month.', exHi: 'संग्रहालय इस महीने एक प्रभाववादी कला प्रदर्शनी की मेजबानी कर रहा है।', exEs: 'El museo alberga una exposición de arte impresionista este mes.', ic: '🖼️' },
    { w: 'sculpture', p: '/ˈskʌlptʃər/', m: 'the art of making two- or three-dimensional representative or abstract forms', hi: 'मूर्तिकला / मूर्ति', es: 'escultura', fr: 'sculpture', de: 'Skulptur / Bildhauerei', pt: 'escultura', zh: '雕塑 / 雕像', ar: 'تمثال / منحوتة', ja: '彫刻 / 彫像', ru: 'скульптура / изваяние', ex: 'The bronze sculpture was crafted by a renowned Renaissance artist.', exHi: 'कांस्य मूर्ति का निर्माण एक प्रसिद्ध पुनर्जागरण कलाकार द्वारा किया गया था।', exEs: 'La escultura de bronce fue creada por un renombrado artista renacentista.', ic: '🗽' },
    { w: 'gallery', p: '/ˈɡæləri/', m: 'a room or building for the display or sale of works of art', hi: 'कला दीर्घा / गैलरी', es: 'galería de arte', fr: 'galerie d\'art', de: 'Galerie / Kunsthalle', pt: 'galeria de arte', zh: '美术馆 / 画廊', ar: 'معرض فني / صالة عرض', ja: '美術館 / ギャラリー', ru: 'галерея', ex: 'We spent the afternoon browsing paintings in the national gallery.', exHi: 'हमने दोपहर राष्ट्रीय कला दीर्घा में पेंटिंग देखते हुए बिताई।', exEs: 'Pasamos la tarde contemplando pinturas en la galería nacional.', ic: '🏛️' },
    { w: 'artifact', p: '/ˈɑːtɪfækt/', m: 'an object made by a human being, typically one of cultural or historical interest', hi: 'कलाकृति / ऐतिहासिक वस्तु', es: 'artefacto / pieza histórica', fr: 'artefact / pièce archéologique', de: 'Artefakt / historischer Gegenstand', pt: 'artefato / peça histórica', zh: '文物 / 手工艺品', ar: 'قطعة أثرية', ja: '工芸品 / 出土品', ru: 'артефакт / экспонат', ex: 'Ancient gold artifacts are preserved inside secure glass cases.', exHi: 'प्राचीन सोने की कलाकृतियाँ सुरक्षित कांच के बक्सों में रखी गई हैं।', exEs: 'Los antiguos artefactos de oro se conservan en vitrinas de vidrio seguras.', ic: '🏺' },
    { w: 'heritage', p: '/ˈherɪtɪdʒ/', m: 'property, traditions, or values that are inherited from past generations', hi: 'विरासत / धरोहर', es: 'patrimonio / herencia cultural', fr: 'patrimoine culturel', de: 'Erbe / Kulturerbe', pt: 'patrimônio cultural', zh: '文化遗产 / 传统', ar: 'تراث / إرث حضاري', ja: '遺産 / 伝統', ru: 'наследие / достояние', ex: 'The historic old town is recognized as a UNESCO World Heritage site.', exHi: 'ऐतिहासिक पुराने शहर को यूनेस्को विश्व धरोहर स्थल के रूप में मान्यता प्राप्त है।', exEs: 'El casco antiguo histórico es reconocido como sitio de Patrimonio Mundial de la UNESCO.', ic: '🏰' },
    { w: 'masterpiece', p: '/ˈmɑːstəpiːs/', m: 'a work of outstanding artistry, skill, or workmanship', hi: 'उत्कृष्ट कृति / मास्टरपीस', es: 'obra maestra', fr: 'chef-d\'œuvre', de: 'Meisterwerk', pt: 'obra-prima', zh: '杰作 / 传世名作', ar: 'تحفة فنية / عمل رائع', ja: '傑作 / 名作', ru: 'шедевр', ex: 'The Mona Lisa is considered Leonardo da Vinci\'s greatest masterpiece.', exHi: 'मोना लिसा को लियोनार्डो दा विंची की सबसे बड़ी उत्कृष्ट कृति माना जाता है।', exEs: 'La Mona Lisa es considerada la mayor obra maestra de Leonardo da Vinci.', ic: '🎨' },
    { w: 'architect', p: '/ˈɑːkɪtekt/', m: 'a person who designs buildings and oversees their construction', hi: 'वास्तुकार / आर्किटेक्ट', es: 'arquitecto', fr: 'architecte', de: 'Architekt', pt: 'arquiteto', zh: '建筑师', ar: 'مهندس معماري', ja: '建築家 / アーキテクト', ru: 'архитектор', ex: 'The cathedral was designed by a famous Gothic architect.', exHi: 'कैथेड्रल को एक प्रसिद्ध गॉथिक वास्तुकार द्वारा डिजाइन किया गया था।', exEs: 'La catedral fue diseñada por un famoso arquitecto gótico.', ic: '📐' },
    { w: 'display', p: '/dɪˈspleɪ/', m: 'put something in a prominent place in order that it may readily be seen', hi: 'प्रदर्शित करना / प्रदर्शन', es: 'exhibir / mostrar', fr: 'exposer / présenter', de: 'ausstellen / zeigen', pt: 'exibir / expor', zh: '陈列 / 展示', ar: 'عرض / يبرز', ja: '展示する / 飾る', ru: 'демонстрировать / выставлять', ex: 'Hundreds of rare coins are displayed in the numismatic room.', exHi: 'सैकड़ों दुर्लभ सिक्के मुद्रा कक्ष में प्रदर्शित किए गए हैं।', exEs: 'Cientos de monedas raras se exhiben en la sala numismática.', ic: '👁️' },
    { w: 'admission', p: '/ədˈmɪʃn/', m: 'the fee charged for entry to a museum or historic site', hi: 'प्रवेश शुल्क / प्रवेश', es: 'entrada / admisión', fr: 'droit d\'entrée / admission', de: 'Eintritt / Eintrittspreis', pt: 'entrada / ingresso', zh: '门票 / 入场费', ar: 'رسوم الدخول', ja: '入場料 / 入館', ru: 'входная плата / допуск', ex: 'General admission to the municipal museum is free on Sundays.', exHi: 'नगरपालिका संग्रहालय में रविवार को सामान्य प्रवेश निःशुल्क है।', exEs: 'La entrada general al museo municipal es gratuita los domingos.', ic: '🎟️' },
    { w: 'audio guide', p: '/ˈɔːdiəʊ ɡaɪd/', m: 'a recorded audio commentary providing information on museum exhibits', hi: 'ऑडियो गाइड', es: 'audioguía', fr: 'audioguide', de: 'Audioguide / Hörführung', pt: 'audioguia', zh: '语音导览', ar: 'دليل صوتي', ja: '音声ガイド', ru: 'аудиогид', ex: 'We rented an audio guide available in eight languages.', exHi: 'हमने आठ भाषाओं में उपलब्ध एक ऑडियो गाइड किराए पर लिया।', exEs: 'Alquilamos una audioguía disponible en ocho idiomas.', ic: '🎧' },
    { w: 'ancient', p: '/ˈeɪnʃənt/', m: 'belonging to the very distant past and no longer in existence', hi: 'प्राचीन / पुराना', es: 'antiguo / milenario', fr: 'ancien / antique', de: 'antik / uralt', pt: 'antigo / ancestral', zh: '古代的 / 古老的', ar: 'قديم / عتيق', ja: '古代の / 大昔の', ru: 'древний / старинный', ex: 'The museum exhibits ancient Egyptian papyrus scrolls.', exHi: 'संग्रहालय प्राचीन मिस्र के पपीरस स्क्रॉल प्रदर्शित करता है।', exEs: 'El museo exhibe antiguos rollos de papiro egipcios.', ic: '📜' },
    { w: 'portrait', p: '/ˈpɔːtreɪt/', m: 'a painting, drawing, or photograph of a person, especially depicting only the face or head and shoulders', hi: 'व्यक्तिचित्र / पोर्ट्रेट', es: 'retrato', fr: 'portrait', de: 'Porträt / Bildnis', pt: 'retrato', zh: '肖像画 / 人像', ar: 'لوحة شخصية / بورتريه', ja: '肖像画 / ポートレート', ru: 'портрет', ex: 'The royal portrait hangs prominently in the grand ballroom.', exHi: 'शाही व्यक्तिचित्र भव्य बॉलरूम में प्रमुखता से लटका हुआ है।', exEs: 'El retrato real cuelga en un lugar destacado del gran salón de baile.', ic: '🖼️' },
    { w: 'restore', p: '/rɪˈstɔːr/', m: 'bring back a building or work of art to its original condition', hi: 'पुनर्स्थापित करना / जीर्णोद्धार करना', es: 'restaurar / renovar', fr: 'restaurer', de: 'restaurieren / wiederherstellen', pt: 'restaurar', zh: '修复 / 还原', ar: 'يرمم / يعيد إلى حالته', ja: '修復する / 復元する', ru: 'реставрировать / восстанавливать', ex: 'The damaged fresco was carefully restored by art conservators.', exHi: 'कला संरक्षकों द्वारा क्षतिग्रस्त भित्तिचित्र को सावधानीपूर्वक पुनर्स्थापित किया गया था।', exEs: 'El fresco dañado fue cuidadosamente restaurado por conservadores de arte.', ic: '🖌️' },
    { w: 'collection', p: '/kəˈlekʃn/', m: 'a group of accumulated paintings, objects, or artifacts', hi: 'संग्रह / संकलन', es: 'colección', fr: 'collection', de: 'Sammlung / Kollektion', pt: 'coleção', zh: '藏品 / 收藏', ar: 'مجموعة مقتنيات', ja: 'コレクション / 所蔵品', ru: 'коллекция / собрание', ex: 'The museum houses a permanent collection of Roman pottery.', exHi: 'संग्रहालय में रोमन मिट्टी के बर्तनों का एक स्थायी संग्रह है।', exEs: 'El museo alberga una colección permanente de cerámica romana.', ic: '🏺' },
    { w: 'dome', p: '/dəʊm/', m: 'a rounded vault forming the roof of a building or structure', hi: 'गुंबद', es: 'cúpula', fr: 'dôme / coupole', de: 'Kuppel', pt: 'cúpula / domo', zh: '圆顶 / 穹顶', ar: 'قبة', ja: 'ドーム / 丸天井', ru: 'купол / свод', ex: 'The cathedral\'s magnificent dome dominates the city skyline.', exHi: 'कैथेड्रल का शानदार गुंबद शहर के क्षितिज पर हावी है।', exEs: 'La magnífica cúpula de la catedral domina el horizonte de la ciudad.', ic: '🏛️' },
    { w: 'guided tour', p: '/ˈɡaɪdɪd tʊər/', m: 'a tour of a historic place conducted by a knowledgeable guide', hi: 'निर्देशित भ्रमण / गाइडेड टूर', es: 'visita guiada / recorrido con guía', fr: 'visite guidée', de: 'Führung / geführte Tour', pt: 'visita guiada', zh: '导览游 / 有导游的参观', ar: 'جولة سياحية برفقة مرشد', ja: 'ガイド付きツアー', ru: 'экскурсия с гидом', ex: 'Join the free guided tour at 11:00 AM in the main courtyard.', exHi: 'मुख्य प्रांगण में सुबह 11:00 बजे निःशुल्क निर्देशित दौरे में शामिल हों।', exEs: 'Únase a la visita guiada gratuita a las 11:00 AM en el patio principal.', ic: '🚩' },
    { w: 'century', p: '/ˈsentʃəri/', m: 'a period of one hundred years', hi: 'शताब्दी / सदी', es: 'siglo', fr: 'siècle', de: 'Jahrhundert', pt: 'século', zh: '世纪 / 百年', ar: 'قرن / مائة عام', ja: '世紀', ru: 'век / столетие', ex: 'This fortress was built in the fourteenth century.', exHi: 'यह किला चौदहवीं शताब्दी में बनाया गया था।', exEs: 'Esta fortaleza fue construida en el siglo catorce.', ic: '⏳' },
    { w: 'carve', p: '/kɑːv/', m: 'cut a hard material in order to produce an aesthetically pleasing object', hi: 'तराशना / नक्काशी करना', es: 'tallar / esculpir', fr: 'sculpter / graver', de: 'schnitzen / meißeln', pt: 'esculpir / entalhar', zh: '雕刻 / 雕琢', ar: 'ينحت', ja: '彫刻する / 彫る', ru: 'высекать / вырезать', ex: 'The pillars were carved from single blocks of white marble.', exHi: 'खंभों को सफेद संगमरमर के एक ही ब्लॉक से तराशा गया था।', exEs: 'Los pilares fueron tallados a partir de bloques individuales de mármol blanco.', ic: '🗿' },
    { w: 'renovate', p: '/ˈrenəveɪt/', m: 'restore a building to a good state of repair', hi: 'नवीनीकरण करना / मरम्मत करना', es: 'renovar / reformar', fr: 'rénover', de: 'renovieren / sanieren', pt: 'reformar / renovar', zh: '翻新 / 修缮', ar: 'يجدد / يرمم مبنى', ja: '改装する / リノベーションする', ru: 'ремонтировать / обновлять', ex: 'The opera house was completely renovated last year.', exHi: 'ओपेरा हाउस का पिछले साल पूरी तरह से नवीनीकरण किया गया था।', exEs: 'La ópera fue completamente renovada el año pasado.', ic: '🔨' }
  ],
  chunks: [
    { phrase: 'was built in the', meaning: 'constructed during a specific historical period or century', hi: 'का निर्माण ... में हुआ था', es: 'fue construido en el', fr: 'a été construit au', de: 'wurde im ... erbaut', pt: 'foi construído no', zh: '建造于...', ar: 'تم بناؤه في', ja: '〜に建設された', ru: 'был построен в', note: 'Historical architecture chunk: "The castle was built in the twelfth century."', ic: '🏰' },
    { phrase: 'is considered a masterpiece', meaning: 'widely recognized by experts as a work of supreme artistic quality', hi: 'एक उत्कृष्ट कृति माना जाता है', es: 'es considerado una obra maestra', fr: 'est considéré comme un chef-d\'œuvre', de: 'gilt als Meisterwerk', pt: 'é considerado uma obra-prima', zh: '被公认为杰作', ar: 'تعتبر تحفة فنية', ja: '傑作と見なされている', ru: 'считается шедевром', note: 'Cultural praise: "This painting is considered a masterpiece of Renaissance art."', ic: '🎨' },
    { phrase: 'is located in the heart of', meaning: 'situated centrally in a city or historic district', hi: 'के केंद्र में स्थित है', es: 'está ubicado en el corazón de', fr: 'est situé au cœur de', de: 'befindet sich im Herzen von', pt: 'está localizado no coração de', zh: '坐落于...的中心地带', ar: 'يقع في قلب', ja: '〜の中心部に位置している', ru: 'расположен в самом сердце', note: 'Location description: "The art gallery is located in the heart of the capital."', ic: '📍' },
    { phrase: 'are on display', meaning: 'publicly shown and accessible to museum visitors', hi: 'प्रदर्शित हैं / देखने के लिए रखे गए हैं', es: 'están en exhibición', fr: 'sont exposés', de: 'sind ausgestellt', pt: 'estão em exibição', zh: '正在展出中', ar: 'معروضة للجمهور', ja: '展示されている', ru: 'выставлены на обозрение', note: 'Museum phrase: "Over three hundred gold coins are on display."', ic: '🏺' },
    { phrase: 'take a guided tour', meaning: 'participate in an organized visit led by an expert docent', hi: 'एक निर्देशित दौरे में भाग लेना', es: 'hacer una visita guiada', fr: 'faire une visite guidée', de: 'an einer Führung teilnehmen', pt: 'fazer um tour guiado', zh: '参加导览游', ar: 'القيام بجولة مع مرشد', ja: 'ガイドツアーに参加する', ru: 'взять экскурсию с гидом', note: 'Visitor activity: "We decided to take a guided tour of the palace."', ic: '🚶‍♂️' },
    { phrase: 'rich in cultural heritage', meaning: 'possessing abundant historical, artistic, and traditional value', hi: 'सांस्कृतिक विरासत से समृद्ध', es: 'rico en patrimonio cultural', fr: 'riche en patrimoine culturel', de: 'reich an kulturellem Erbe', pt: 'rico em patrimônio cultural', zh: '拥有丰富的文化遗产', ar: 'غني بالتراث الثقافي', ja: '文化遺産に恵まれた', ru: 'богатый культурным наследием', note: 'Descriptive chunk: "The ancient city is rich in cultural heritage."', ic: '🏛️' },
    { phrase: 'dates back to', meaning: 'originates from or was created at a specific past era', hi: 'का इतिहास ... पुराना है', es: 'se remonta a', fr: 'remonte à', de: 'geht zurück auf', pt: 'remonta a', zh: '追溯到...', ar: 'يعود تاريخه إلى', ja: '〜に遡る', ru: 'восходит к / датируется', note: 'Historical timeline: "This Roman amphitheater dates back to the first century."', ic: '⏳' },
    { phrase: 'prohibited inside the museum', meaning: 'strictly forbidden by regulations within the building', hi: 'संग्रहालय के अंदर प्रतिबंधित', es: 'prohibido dentro del museo', fr: 'interdit à l\'intérieur du musée', de: 'im Museum verboten', pt: 'proibido dentro do museu', zh: '馆内严禁...', ar: 'ممنوع داخل المتحف', ja: '館内では禁止されている', ru: 'запрещено внутри музея', note: 'Museum rule: "Flash photography is strictly prohibited inside the museum."', ic: '🚫' }
  ],
  grammar: {
    title: 'Present & Past Passive Voice (is/are + V3 & was/were + V3)',
    concept: 'Highlighting historical monuments, artworks, and exhibitions where the object or recipient of the action is the focal point.',
    patterns: [
      {
        title: 'Past Simple Passive for Historical Origins (was/were + V3)',
        structure: 'Subject + was / were + Past Participle (V3) (+ by + Agent)',
        rule: 'Use the Past Simple Passive to state when or by whom historic buildings, sculptures, and paintings were created.',
        examples: [
          { en: 'The cathedral was designed by a French architect in 1890.', hi: 'कैथेड्रल को 1890 में एक फ्रांसीसी वास्तुकार द्वारा डिजाइन किया गया था।', es: 'La catedral fue diseñada por un arquitecto francés en 1890.' },
          { en: 'These ancient frescoes were discovered fifty years ago.', hi: 'इन प्राचीन भित्तिचित्रों की खोज पचास साल पहले हुई थी।', es: 'Estos antiguos frescos fueron descubiertos hace cincuenta años.' }
        ]
      },
      {
        title: 'Present Simple Passive for Current Status (is/are + V3)',
        structure: 'Subject + is / are + Past Participle (V3)',
        rule: 'Use the Present Simple Passive to describe how artifacts and galleries are currently managed or displayed.',
        examples: [
          { en: 'The royal crown jewels are kept inside a secure vault.', hi: 'शाही मुकुट के आभूषण एक सुरक्षित तिजोरी के अंदर रखे जाते हैं।', es: 'Las joyas de la corona real se guardan dentro de una bóveda segura.' },
          { en: 'The art museum is visited by thousands of tourists every week.', hi: 'हर हफ्ते हजारों पर्यटकों द्वारा कला संग्रहालय का दौरा किया जाता है।', es: 'El museo de arte es visitado por miles de turistas cada semana.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'The palace was build in 1650.', cor: 'The palace was built in 1650.', exp: 'Passive voice requires the past participle form: "built", not the base form "build".', hi: 'Passive voice में क्रिया का तीसरा रूप V3 ("built") उपयोग करें, "build" नहीं।', es: 'La voz pasiva requiere el participio pasado: "built", no la forma base "build".' },
    { inc: 'This sculpture was painted for Picasso.', cor: 'This painting was painted by Picasso.', exp: 'Use "by" to introduce the creator/agent in passive sentences, not "for".', hi: 'Passive वाक्यों में कर्ता/निर्माता को दर्शाने के लिए "by" का प्रयोग करें, "for" का नहीं।', es: 'Usa "by" para indicar el autor en oraciones pasivas, no "for".' },
    { inc: 'The museum is locate in the city center.', cor: 'The museum is located in the city center.', exp: 'Use the passive adjective participle "located" ("is located"), not "locate".', hi: 'स्थान दर्शाने के लिए "is located" का उपयोग करें, "locate" का नहीं।', es: 'Se dice "is located" (está ubicado), no "is locate".' },
    { inc: 'Ancient artifacts are display here.', cor: 'Ancient artifacts are displayed here.', exp: 'In Present Passive, combine "are" with the past participle "displayed".', hi: 'Present Passive में "are" के साथ V3 ("displayed") लगाएं।', es: 'En presente pasivo, combina "are" con el participio "displayed".' },
    { inc: 'Flash photography is prohibit.', cor: 'Flash photography is prohibited.', exp: 'The passive participle is "prohibited" with "-ed", not the bare verb.', hi: 'Passive रूप में "prohibited" का प्रयोग करें।', es: 'El participio pasivo es "prohibited" terminado en "-ed".' }
  ],
  dialogues: [
    {
      title: 'Visiting the National Art Gallery',
      context: 'Elena and Daniel admire a Renaissance painting at the museum entrance.',
      charA: { name: 'Elena', av: '👩‍🎨', role: 'Art Student' },
      charB: { name: 'Daniel', av: '👨‍🎨', role: 'Tourist' },
      turns: [
        { spk: 'Daniel', text: 'Elena, this gallery is incredible! When was this historic building founded?', hi: 'एलेना, यह गैलरी अविश्वसनीय है! इस ऐतिहासिक इमारत की स्थापना कब हुई थी?', es: 'Elena, ¡esta galería es increíble! ¿Cuándo fue fundado este edificio histórico?' },
        { spk: 'Elena', text: 'It was founded in 1824, and the magnificent glass dome was added during a recent renovation.', hi: 'इसकी स्थापना 1824 में हुई थी, और हाल ही में नवीनीकरण के दौरान शानदार कांच का गुंबद जोड़ा गया था।', es: 'Fue fundado en 1824, y la magnífica cúpula de vidrio fue añadida durante una renovación reciente.' },
        { spk: 'Daniel', text: 'Look at that huge oil painting over there. Who was it painted by?', hi: 'वहाँ उस विशाल तेल चित्रकला को देखो। यह किसके द्वारा चित्रित की गई थी?', es: 'Mira esa enorme pintura al óleo de allí. ¿Por quién fue pintada?' },
        { spk: 'Elena', text: 'It was painted by Rembrandt in the seventeenth century. It is considered one of his greatest masterpieces.', hi: 'इसे सत्रहवीं शताब्दी में रेम्ब्रांट द्वारा चित्रित किया गया था। इसे उनकी सबसे बड़ी कृतियों में से एक माना जाता है।', es: 'Fue pintada por Rembrandt en el siglo diecisiete. Es considerada una de sus mayores obras maestras.' },
        { spk: 'Daniel', text: 'Let\'s get an audio guide so we can learn the history of every room.', hi: 'आइए एक ऑडियो गाइड लें ताकि हम हर कमरे का इतिहास जान सकें।', es: 'Consigamos una audioguía para poder aprender la historia de cada sala.' }
      ]
    },
    {
      title: 'Inquiring about Tickets and Museum Guidelines',
      context: 'Carlos buys tickets at the museum reception desk from the ticket agent, Sophie.',
      charA: { name: 'Carlos', av: '👨‍💼', role: 'Visitor' },
      charB: { name: 'Sophie', av: '👩‍💼', role: 'Ticket Officer' },
      turns: [
        { spk: 'Carlos', text: 'Hello! How much is general admission for two adults, and does it include the ancient sculpture exhibition?', hi: 'नमस्ते! दो वयस्कों के लिए सामान्य प्रवेश शुल्क कितना है, और क्या इसमें प्राचीन मूर्तिकला प्रदर्शनी शामिल है?', es: '¡Hola! ¿Cuánto cuesta la entrada general para dos adultos y está incluida la exposición de escultura antigua?' },
        { spk: 'Sophie', text: 'Admission is fifteen euros per adult, and all permanent galleries are included. Please note that flash photography is prohibited inside the museum.', hi: 'प्रवेश शुल्क प्रति वयस्क पंद्रह यूरो है, और सभी स्थायी दीर्घाएं शामिल हैं। कृपया ध्यान दें कि संग्रहालय के अंदर फ्लैश फोटोग्राफी प्रतिबंधित है।', es: 'La entrada cuesta quince euros por adulto e incluye todas las galerías permanentes. Tenga en cuenta que la fotografía con flash está prohibida dentro del museo.' },
        { spk: 'Carlos', text: 'Understood. Is there a guided tour starting soon?', hi: 'समझ गया। क्या जल्द ही कोई निर्देशित दौरा शुरू हो रहा है?', es: 'Entendido. ¿Hay alguna visita guiada que comience pronto?' },
        { spk: 'Sophie', text: 'Yes, a guided tour in English is scheduled at 2:00 PM in the grand foyer.', hi: 'हाँ, दोपहर 2:00 बजे भव्य फ़ोयर में अंग्रेजी में एक निर्देशित दौरा निर्धारित है।', es: 'Sí, hay una visita guiada en inglés programada a las 2:00 PM en el gran vestíbulo.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_185_p1',
      type: 'multiple_choice',
      prompt: 'Select the correct Past Passive verb form:',
      text: 'The famous bronze monument [blank] in 1780 by a renowned sculptor.',
      options: [
        { id: '1', text: 'was created', isCorrect: true },
        { id: '2', text: 'was creating', isCorrect: false },
        { id: '3', text: 'is creating', isCorrect: false },
        { id: '4', text: 'created by', isCorrect: false }
      ],
      correctAnswer: 'was created',
      explanation: 'Past Passive requires "was + Past Participle" ("was created").'
    },
    {
      id: 'ex_185_p2',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct preposition of agency:',
      text: 'This breathtaking landscape painting was painted [blank] Claude Monet.',
      options: [
        { id: '1', text: 'by', isCorrect: true },
        { id: '2', text: 'for', isCorrect: false },
        { id: '3', text: 'from', isCorrect: false },
        { id: '4', text: 'with', isCorrect: false }
      ],
      correctAnswer: 'by',
      explanation: 'Use "by" to indicate the artist or agent who performed the action.'
    },
    {
      id: 'ex_185_p3',
      type: 'word_ordering',
      prompt: 'Arrange the tokens into a correct passive sentence:',
      tokens: ['Ancient', 'gold', 'coins', 'are', 'displayed', 'in', 'the', 'museum', '.'],
      correctOrder: ['Ancient', 'gold', 'coins', 'are', 'displayed', 'in', 'the', 'museum', '.'],
      explanation: 'Present Passive structure: "Ancient gold coins are displayed in the museum."'
    },
    {
      id: 'ex_185_p4',
      type: 'error_correction',
      prompt: 'Correct the error in this art description:',
      errorSentence: 'The castle was build in the fourteenth century.',
      correctSentence: 'The castle was built in the fourteenth century.',
      explanation: 'The past participle of "build" is "built" (with a "t").'
    },
    {
      id: 'ex_185_p5',
      type: 'translation',
      prompt: 'Translate to English: "यह ऐतिहासिक संग्रहालय राजधानी के केंद्र में स्थित है।"',
      targetSentence: 'This historic museum is located in the heart of the capital.',
      explanation: '"is located in the heart of" translates के केंद्र में स्थित है.'
    },
    {
      id: 'ex_185_p6',
      type: 'multiple_choice',
      prompt: 'What is an "audio guide" at a cultural exhibition?',
      options: [
        { id: '1', text: 'A portable electronic device providing commentary on exhibits', isCorrect: true },
        { id: '2', text: 'A musical radio playing pop songs', isCorrect: false },
        { id: '3', text: 'A ticket that lets you touch all paintings', isCorrect: false },
        { id: '4', text: 'A loud speaker in the parking lot', isCorrect: false }
      ],
      correctAnswer: 'A portable electronic device providing commentary on exhibits',
      explanation: 'An audio guide offers recorded information about artworks.'
    },
    {
      id: 'ex_185_p7',
      type: 'fill_blank',
      prompt: 'Choose the correct participle for museum regulations:',
      text: 'Please remember that flash photography is strictly [blank] inside.',
      options: [
        { id: '1', text: 'prohibited', isCorrect: true },
        { id: '2', text: 'encouraged', isCorrect: false },
        { id: '3', text: 'sold', isCorrect: false },
        { id: '4', text: 'simmered', isCorrect: false }
      ],
      correctAnswer: 'prohibited',
      explanation: '"prohibited" means forbidden by rules.'
    },
    {
      id: 'ex_185_p8',
      type: 'speaking',
      prompt: 'Read this cultural description aloud clearly:',
      targetSentence: 'The ancient stone temple dates back to the third century and is visited by scholars worldwide.',
      audioText: 'The ancient stone temple dates back to the third century and is visited by scholars worldwide.',
      explanation: 'Pronounce "temple", "century", and "scholars" clearly.'
    },
    {
      id: 'ex_185_p9',
      type: 'listening',
      prompt: 'Listen to the museum announcement and select the scheduled event:',
      audioText: 'Attention visitors, the English guided tour of Renaissance masterpieces begins at two o\'clock in the grand foyer.',
      options: [
        { id: '1', text: 'The guided tour starts at 2:00 in the grand foyer.', isCorrect: true },
        { id: '2', text: 'The museum is closing right now.', isCorrect: false },
        { id: '3', text: 'All visitors must leave their bags in the car.', isCorrect: false },
        { id: '4', text: 'A new restaurant is opening in the basement.', isCorrect: false }
      ],
      correctAnswer: 'The guided tour starts at 2:00 in the grand foyer.',
      explanation: 'The announcement says the guided tour begins at 2:00 in the grand foyer.'
    }
  ],
  review: [
    {
      id: 'ex_185_r1',
      type: 'multiple_choice',
      prompt: 'Choose the correct passive structure:',
      text: 'The damaged fresco [blank] by expert art restorers last winter.',
      options: [
        { id: '1', text: 'was restored', isCorrect: true },
        { id: '2', text: 'is restoring', isCorrect: false },
        { id: '3', text: 'restores', isCorrect: false },
        { id: '4', text: 'was restore', isCorrect: false }
      ],
      correctAnswer: 'was restored',
      explanation: 'Past Passive requires "was + restored".'
    },
    {
      id: 'ex_185_r2',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the appropriate word:',
      text: 'This city is rich in cultural [blank] and attracts history enthusiasts.',
      options: [
        { id: '1', text: 'heritage', isCorrect: true },
        { id: '2', text: 'blizzard', isCorrect: false },
        { id: '3', text: 'appetizer', isCorrect: false },
        { id: '4', text: 'receipt', isCorrect: false }
      ],
      correctAnswer: 'heritage',
      explanation: '"cultural heritage" refers to historical traditions and monuments.'
    },
    {
      id: 'ex_185_r3',
      type: 'word_ordering',
      prompt: 'Assemble the sentence correctly:',
      tokens: ['This', 'sculpture', 'is', 'considered', 'a', 'masterpiece', 'of', 'art', '.'],
      correctOrder: ['This', 'sculpture', 'is', 'considered', 'a', 'masterpiece', 'of', 'art', '.'],
      explanation: '"is considered a masterpiece of art" is a passive praise formula.'
    },
    {
      id: 'ex_185_r4',
      type: 'translation',
      prompt: 'Translate to English: "यह प्राचीन किला चौदहवीं शताब्दी में बनाया गया था।"',
      targetSentence: 'This ancient fortress was built in the fourteenth century.',
      explanation: '"was built in the fourteenth century" uses the past passive.'
    }
  ],
  assessment: [
    {
      id: 'ex_185_a1',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly demonstrates the passive voice?',
      options: [
        { id: '1', text: 'The royal crown was designed by an Italian goldsmith.', isCorrect: true },
        { id: '2', text: 'The royal crown was design by an Italian goldsmith.', isCorrect: false },
        { id: '3', text: 'The royal crown designed for an Italian goldsmith.', isCorrect: false },
        { id: '4', text: 'An Italian goldsmith was designed the crown.', isCorrect: false }
      ],
      correctAnswer: 'The royal crown was designed by an Italian goldsmith.',
      explanation: 'Correct passive: "was designed by".'
    },
    {
      id: 'ex_185_a2',
      type: 'fill_blank',
      prompt: 'Select the correct verb form:',
      text: 'Over three thousand historic artifacts [blank] inside the archaeological museum.',
      options: [
        { id: '1', text: 'are preserved', isCorrect: true },
        { id: '2', text: 'is preserve', isCorrect: false },
        { id: '3', text: 'are preserving of', isCorrect: false },
        { id: '4', text: 'was preserve', isCorrect: false }
      ],
      correctAnswer: 'are preserved',
      explanation: 'Plural subject ("artifacts") + "are preserved".'
    },
    {
      id: 'ex_185_a3',
      type: 'error_correction',
      prompt: 'Find and fix the error in the sentence:',
      errorSentence: 'The magnificent marble statue was carve from a single stone block.',
      correctSentence: 'The magnificent marble statue was carved from a single stone block.',
      explanation: 'Use the past participle "carved" (with "-ed").'
    },
    {
      id: 'ex_185_a4',
      type: 'translation',
      prompt: 'Translate to English: "संग्रहालय के अंदर फोटोग्राफी की अनुमति नहीं है।"',
      targetSentence: 'Photography is not permitted inside the museum.',
      explanation: '"is not permitted inside the museum" uses the present passive.'
    }
  ]
};

// =========================================================================
// LESSON 186: Music, Concerts, Festivals & Live Performances
// =========================================================================
export const LESSON_186_CONFIG: LessonConfigA2 = {
  num: 186,
  title: 'Music, Concerts, Festivals & Live Performances',
  icon: '🎷',
  estMin: 25,
  objTitle: 'Question Tags (aren\'t you, didn\'t they, isn\'t it) for Engaging Conversation',
  objDesc: 'Learn to talk about musical genres, live concerts, outdoor festivals, theatrical stages, and sound atmospheres while mastering interactive question tags to confirm information and maintain lively social conversation.',
  objHi: 'संगीत शैलियों, लाइव कॉन्सर्ट, संगीत समारोहों और थिएटर के बारे में बात करने के लिए Question Tags (aren\'t you, didn\'t they, isn\'t it) का उपयोग करना सीखें।',
  objEs: 'Hablar sobre géneros musicales, conciertos en vivo, festivales al aire libre y escenarios usando question tags para confirmar información y mantener conversaciones dinámicas.',
  canDo: [
    'I can express musical tastes, favorite bands, and concert experiences.',
    'I can form and use question tags correctly (positive statement + negative tag, negative statement + positive tag).',
    'I can describe live performance atmospheres (crowd, stage, acoustics, energy).',
    'I can invite friends to music festivals and agree on ticket categories.'
  ],
  canDoHi: [
    'मैं संगीत की पसंद, पसंदीदा बैंड और कॉन्सर्ट के अनुभवों को व्यक्त कर सकता हूँ।',
    'मैं बातचीत में Question Tags (सकारात्मक वाक्य + नकारात्मक टैग) का सही उपयोग कर सकता हूँ।',
    'मैं लाइव प्रदर्शन के माहौल (भीड़, मंच, ध्वनि) का वर्णन कर सकता हूँ।',
    'मैं दोस्तों को संगीत समारोहों में आमंत्रित कर सकता हूँ और टिकट श्रेणियों पर सहमत हो सकता हूँ।'
  ],
  canDoEs: [
    'Puedo expresar gustos musicales, bandas favoritas y experiencias en conciertos.',
    'Puedo formar y usar question tags correctamente para confirmar información.',
    'Puedo describir la atmósfera de actuaciones en vivo (multitud, escenario, acústica).',
    'Puedo invitar a amigos a festivales de música y coordinar la compra de entradas.'
  ],
  vocab: [
    { w: 'concert', p: '/ˈkɒnsət/', m: 'a musical performance given in public by several performers or of several compositions', hi: 'संगीत कार्यक्रम / कॉन्सर्ट', es: 'concierto', fr: 'concert', de: 'Konzert', pt: 'show / concerto', zh: '音乐会 / 演唱会', ar: 'حفل موسيقي', ja: 'コンサート / 音楽会', ru: 'концерт', ex: 'The rock band performed a three-hour open-air concert.', exHi: 'रॉक बैंड ने तीन घंटे का ओपन-एयर कॉन्सर्ट प्रस्तुत किया।', exEs: 'La banda de rock ofreció un concierto al aire libre de tres horas.', ic: '🎸' },
    { w: 'festival', p: '/ˈfestɪvl/', m: 'an organized series of concerts, plays, or films, typically held annually', hi: 'उत्सव / संगीत समारोह', es: 'festival', fr: 'festival', de: 'Festival / Festspiele', pt: 'festival', zh: '音乐节 / 艺术节', ar: 'مهرجان', ja: 'フェスティバル / 音楽祭', ru: 'фестиваль', ex: 'Thousands of fans camped out at the weekend jazz festival.', exHi: 'सप्ताहांत जैज़ महोत्सव में हजारों प्रशंसकों ने डेरा डाला।', exEs: 'Miles de fanáticos acamparon en el festival de jazz del fin de semana.', ic: '🎪' },
    { w: 'venue', p: '/ˈvenjuː/', m: 'the place where something happens, especially an organized event such as a concert', hi: 'स्थान / आयोजन स्थल', es: 'lugar del evento / recinto', fr: 'lieu de spectacle / salle', de: 'Veranstaltungsort / Spielstätte', pt: 'local do evento / recinto', zh: '活动场地 / 演出场馆', ar: 'مكان الفعالية / قاعة العرض', ja: '会場 / ヴェニュー', ru: 'место проведения / площадка', ex: 'The historic theater is an acoustic venue for classical recitals.', exHi: 'ऐतिहासिक थिएटर शास्त्रीय गायन के लिए एक उत्कृष्ट आयोजन स्थल है।', exEs: 'El teatro histórico es un recinto acústico para recitales clásicos.', ic: '🏟️' },
    { w: 'performance', p: '/pəˈfɔːməns/', m: 'an act of staging or presenting a play, concert, or other form of entertainment', hi: 'प्रस्तुति / प्रदर्शन', es: 'actuación / presentación en vivo', fr: 'spectacle / représentation', de: 'Aufführung / Darbietung', pt: 'apresentação / performance', zh: '演出 / 表演', ar: 'عرض / أداء فني', ja: '公演 / パフォーマンス', ru: 'выступление / представление', ex: 'The violinist gave an unforgettable solo performance.', exHi: 'वायलिन वादक ने एक अविस्मरणीय एकल प्रस्तुति दी।', exEs: 'El violinista dio una actuación solista inolvidable.', ic: '🎻' },
    { w: 'audience', p: '/ˈɔːdiəns/', m: 'the assembled spectators or listeners at a public event like a play or concert', hi: 'दर्शक / श्रोतागण', es: 'público / audiencia', fr: 'public / spectateurs', de: 'Publikum / Zuschauer', pt: 'público / plateia', zh: '观众 / 听众', ar: 'جمهور / حاضرون', ja: '観客 / 聴衆', ru: 'аудитория / зрители', ex: 'The enthusiastic audience clapped and cheered for an encore.', exHi: 'उत्साही दर्शकों ने तालियां बजाईं और दोबारा गाने की मांग की।', exEs: 'El público entusiasta aplaudió y vitoreó pidiendo otra canción.', ic: '👏' },
    { w: 'acoustic', p: '/əˈkuːstɪk/', m: 'relating to sound or the sense of hearing; not having electrical amplification', hi: 'ध्वनिक / गैर-विद्युत वाद्य', es: 'acústico', fr: 'acoustique', de: 'akustisch', pt: 'acústico', zh: '声学的 / 原声的', ar: 'صوتي / بدون تضخيم كهربائي', ja: 'アコースティックの / 音響の', ru: 'акустический', ex: 'The singer played a simple acoustic guitar melody.', exHi: 'गायक ने एक सरल ध्वनिक गिटार की धुन बजाई।', exEs: 'El cantante tocó una melodía sencilla en guitarra acústica.', ic: '🎵' },
    { w: 'rhythm', p: '/ˈrɪðəm/', m: 'a strong, regular, repeated pattern of movement or sound', hi: 'ताल / लय', es: 'ritmo / compás', fr: 'rythme', de: 'Rhythmus / Takt', pt: 'ritmo', zh: '节奏 / 韵律', ar: 'إيقاع / رتم', ja: 'リズム / 拍子', ru: 'ритм / такт', ex: 'The lively salsa rhythm made everyone in the room dance.', exHi: 'जीवंत सालसा लय ने कमरे में मौजूद हर किसी को नाचने पर मजबूर कर दिया।', exEs: 'El animado ritmo de salsa hizo bailar a todos en la sala.', ic: '🥁' },
    { w: 'lyrics', p: '/ˈlɪrɪks/', m: 'the words of a popular song', hi: 'गीत के बोल / लिरिक्स', es: 'letras de canciones', fr: 'paroles de chanson', de: 'Liedtext / Songtext', pt: 'letras de música', zh: '歌词', ar: 'كلمات الأغنية', ja: '歌詞 / リリック', ru: 'слова песни / текст', ex: 'The meaningful lyrics express themes of hope and friendship.', exHi: 'सार्थक बोल आशा और मित्रता के विषयों को व्यक्त करते हैं।', exEs: 'Las letras significativas expresan temas de esperanza y amistad.', ic: '📝' },
    { w: 'atmosphere', p: '/ˈætməsfɪər/', m: 'the pervading tone or mood of a place, situation, or creative work', hi: 'माहौल / वातावरण', es: 'atmósfera / ambiente', fr: 'ambiance / atmosphère', de: 'Atmosphäre / Stimmung', pt: 'atmosfera / ambiente', zh: '氛围 / 气氛', ar: 'أجواء / جو عام', ja: '雰囲気 / アトモスフィア', ru: 'атмосфера / обстановка', ex: 'The festival had an electric and friendly atmosphere.', exHi: 'समारोह का माहौल बेहद ऊर्जावान और मैत्रीपूर्ण था।', exEs: 'El festival tuvo una atmósfera eléctrica y amigable.', ic: '✨' },
    { w: 'stage', p: '/steɪdʒ/', m: 'a raised floor or platform on which actors, entertainers, or musicians perform', hi: 'मंच / स्टेज', es: 'escenario / tarima', fr: 'scène / estrade', de: 'Bühne', pt: 'palco / tablado', zh: '舞台', ar: 'مسرح / خشبة العرض', ja: 'ステージ / 舞台', ru: 'сцена / подмостки', ex: 'Colorful spotlights illuminated the main outdoor stage.', exHi: 'रंगीन स्पॉटलाइट्स ने मुख्य आउटडोर मंच को रोशन किया।', exEs: 'Focos de colores iluminaron el escenario principal al aire libre.', ic: '🎭' },
    { w: 'band', p: '/bænd/', m: 'a group of musicians playing popular, jazz, or rock music together', hi: 'संगीत समूह / बैंड', es: 'banda / grupo musical', fr: 'groupe de musique / groupe', de: 'Band / Musikgruppe', pt: 'banda / grupo musical', zh: '乐队 / 乐团', ar: 'فرقة موسيقية', ja: 'バンド / 楽団', ru: 'музыкальная группа / бэнд', ex: 'My favorite indie band is touring Europe this autumn.', exHi: 'मेरा पसंदीदा इंडी बैंड इस शरद ऋतु में यूरोप का दौरा कर रहा है।', exEs: 'Mi banda indie favorita está de gira por Europa este otoño.', ic: '🎷' },
    { w: 'track', p: '/træk/', m: 'an individual song or piece of music on a recording', hi: 'गीत / ट्रैक', es: 'pista / canción grabada', fr: 'piste / morceau', de: 'Titel / Musikstück', pt: 'faixa / música', zh: '单曲 / 曲目', ar: 'أغنية / مقطع صوتي', ja: '曲 / トラック', ru: 'трек / композиция', ex: 'The opening track of the album became an instant global hit.', exHi: 'एल्बम का शुरुआती गाना तुरंत वैश्विक स्तर पर हिट हो गया।', exEs: 'La primera pista del álbum se convirtió en un éxito mundial instantáneo.', ic: '💿' },
    { w: 'tempo', p: '/ˈtempəʊ/', m: 'the speed at which a passage of music is or should be played', hi: 'गति / टेम्पो', es: 'tempo / velocidad musical', fr: 'tempo / cadence', de: 'Tempo / Geschwindigkeit', pt: 'andamento / tempo', zh: '节拍 / 速度', ar: 'سرعة الإيقاع / تمبو', ja: 'テンポ / 演奏速度', ru: 'темп', ex: 'The upbeat tempo kept the crowd jumping with excitement.', exHi: 'तेज़ गति ने भीड़ को उत्साह से उछलते रखा।', exEs: 'El tempo alegre mantuvo a la multitud saltando de emoción.', ic: '⏱️' },
    { w: 'vocalist', p: '/ˈvəʊkəlɪst/', m: 'a singer, especially one who performs with a pop group or jazz band', hi: 'गायक / गायिका', es: 'vocalista / cantante', fr: 'chanteur / vocaliste', de: 'Sänger / Vokalist', pt: 'vocalista / cantor', zh: '主唱 / 歌手', ar: 'مغنٍ / مطرب', ja: 'ボーカリスト / 歌手', ru: 'вокалист / певец', ex: 'The lead vocalist has an exceptionally powerful vocal range.', exHi: 'मुख्य गायक के पास असाधारण रूप से शक्तिशाली आवाज़ है।', exEs: 'El vocalista principal tiene un rango vocal excepcionalmente potente.', ic: '🎤' },
    { w: 'harmonize', p: '/ˈhɑːmənaɪz/', m: 'sing or produce musical notes in pleasing chords', hi: 'स्वर मिलाना / तालमेल बैठाना', es: 'armonizar', fr: 'harmoniser', de: 'harmonisieren / mehrstimmig singen', pt: 'harmonizar', zh: '和声 / 协调合唱', ar: 'ينغم / ينسجم صوتياً', ja: 'ハーモニーを奏でる / 和音を合わせる', ru: 'гармонировать / петь в унисон', ex: 'The choir members harmonize beautifully in four parts.', exHi: 'गायक मंडली के सदस्य चार भागों में खूबसूरती से स्वर मिलाते हैं।', exEs: 'Los miembros del coro armonizan maravillosamente en cuatro partes.', ic: '🎶' },
    { w: 'encore', p: '/ˈɒŋkɔːr/', m: 'a repeated or additional performance in response to applause', hi: 'पुनः प्रस्तुति / एनकोर', es: 'repetición / tema extra', fr: 'rappel / bis', de: 'Zugabe', pt: 'bis / número extra', zh: '返场演出 / 加演', ar: 'إعادة الأداء بطلب الجمهور', ja: 'アンコール', ru: 'бис / повторное выступление', ex: 'The band returned to the stage for a ten-minute encore.', exHi: 'बैंड दस मिनट की पुनः प्रस्तुति के लिए मंच पर लौटा।', exEs: 'La banda regresó al escenario para un bis de diez minutos.', ic: '🎉' },
    { w: 'lineup', p: '/ˈlaɪnʌp/', m: 'the set of artists or performers scheduled to appear at an event', hi: 'कलाकारों की सूची / लाइनअप', es: 'cartel / programación de artistas', fr: 'programmation / artistes à l\'affiche', de: 'Besetzung / Künstleraufgebot', pt: 'lineup / lista de atrações', zh: '演出阵容', ar: 'قائمة الفنانين المشاركين', ja: '出演者リスト / ラインナップ', ru: 'состав участников / лайн-ап', ex: 'The summer festival boasts an international lineup of indie acts.', exHi: 'ग्रीष्मकालीन उत्सव में इंडी कलाकारों का एक अंतरराष्ट्रीय लाइनअप है।', exEs: 'El festival de verano cuenta con un cartel internacional de artistas independientes.', ic: '📋' },
    { w: 'sold out', p: '/ˌsəʊld ˈaʊt/', m: 'having all tickets or items bought up completely', hi: 'सारे टिकट बिक जाना / सोल्ड आउट', es: 'agotado / entradas agotadas', fr: 'complet / guichets fermés', de: 'ausverkauft', pt: 'esgotado', zh: '售罄 / 票已售空', ar: 'نفدت التذاكر', ja: '売り切れ / 完売した', ru: 'все билеты распроданы / аншлаг', ex: 'Hurry up to buy tickets before the concert is sold out.', exHi: 'कॉन्सर्ट के सारे टिकट बिकने से पहले जल्दी से टिकट खरीद लें।', exEs: 'Date prisa para comprar entradas antes de que el concierto se agote.', ic: '🎟️' },
    { w: 'melody', p: '/ˈmelədi/', m: 'a sequence of musical notes that is musically satisfying; a tune', hi: 'मधुर धुन / तराना', es: 'melodía / tonada', fr: 'mélodie / air', de: 'Melodie / Weise', pt: 'melodia / tom', zh: '旋律 / 曲调', ar: 'لحن / نغمة', ja: 'メロディー / 旋律', ru: 'мелодия / мотив', ex: 'The catchy piano melody stayed in my head all day.', exHi: 'पियानो की आकर्षक धुन पूरे दिन मेरे दिमाग में घूमती रही।', exEs: 'La pegadiza melodía de piano se me quedó en la cabeza todo el día.', ic: '🎹' },
    { w: 'live stream', p: '/ˈlaɪv striːm/', m: 'a broadcast of an event transmitted live over the internet', hi: 'सीधा प्रसारण / लाइव स्ट्रीम', es: 'transmisión en vivo / directo', fr: 'diffusion en direct / live stream', de: 'Live-Stream / Direktübertragung', pt: 'transmissão ao vivo / live', zh: '现场直播 / 网络直播', ar: 'بث مباشر عبر الإنترنت', ja: 'ライブ配信 / 生配信', ru: 'прямой эфир / стрим', ex: 'Fans who could not attend watched the concert live stream.', exHi: 'जो प्रशंसक उपस्थित नहीं हो सके उन्होंने कॉन्सर्ट का लाइव स्ट्रीम देखा।', exEs: 'Los fanáticos que no pudieron asistir vieron la transmisión en vivo del concierto.', ic: '📡' }
  ],
  chunks: [
    { phrase: 'sing along with the band', meaning: 'vocalize the lyrics together with the performing musicians', hi: 'बैंड के साथ गाना', es: 'cantar junto con la banda', fr: 'chanter avec le groupe', de: 'mit der Band mitsingen', pt: 'cantar junto com a banda', zh: '跟着乐队一起合唱', ar: 'الغناء مع الفرقة الموسيقية', ja: 'バンドと一緒に歌う', ru: 'петь вместе с группой', note: 'Concert experience: "The entire stadium began to sing along with the band."', ic: '🎤' },
    { phrase: 'you love live music don\'t you', meaning: 'conversational tag question asking for confirmation of musical taste', hi: 'आपको लाइव संगीत पसंद है, है न?', es: 'te encanta la música en vivo, ¿verdad?', fr: 'tu aimes la musique en direct, n\'est-ce pas?', de: 'du liebst Live-Musik, nicht wahr?', pt: 'você adora música ao vivo, não é?', zh: '你很喜欢现场音乐，对吧？', ar: 'أنت تحب الموسيقى الحية، أليس كذلك؟', ja: '生演奏が好きですよね？', ru: 'ты ведь любишь живую музыку, правда?', note: 'Question tag structure: Positive statement + negative tag.', ic: '💬' },
    { phrase: 'put on an amazing show', meaning: 'deliver a sensational, highly entertaining performance', hi: 'एक शानदार शो प्रस्तुत करना', es: 'ofrecer un espectáculo increíble', fr: 'offrir un spectacle incroyable', de: 'eine fantastische Show abliefern', pt: 'dar um show incrível', zh: '呈现了一场精彩绝伦的演出', ar: 'تقديم عرض مذهل', ja: '素晴らしいショーを披露する', ru: 'устроить потрясающее шоу', note: 'Performance idiom: "The musicians really put on an amazing show tonight."', ic: '🌟' },
    { phrase: 'front row seats', meaning: 'chairs positioned closest to the performance stage', hi: 'सामने की पंक्ति की सीटें', es: 'asientos en primera fila', fr: 'places au premier rang', de: 'Plätze in der ersten Reihe', pt: 'assentos na primeira fileira', zh: '前排座位', ar: 'مقاعد الصف الأمامي', ja: '最前列の席', ru: 'места в первом ряду', note: 'Ticket choice: "We managed to book front row seats."', ic: '🪑' },
    { phrase: 'get caught up in the rhythm', meaning: 'become completely immersed and energized by the musical beat', hi: 'ताल में पूरी तरह खो जाना', es: 'dejarse llevar por el ritmo', fr: 'se laisser emporter par le rythme', de: 'vom Rhythmus mitgerissen werden', pt: 'deixar-se levar pelo ritmo', zh: '沉浸在音乐节奏中', ar: 'الاندماج مع إيقاع الموسيقى', ja: 'リズムに引き込まれる', ru: 'увлечься ритмом / раствориться в музыке', note: 'Atmospheric idiom: "It is impossible not to get caught up in the rhythm."', ic: '💃' },
    { phrase: 'the energy of the crowd', meaning: 'the collective enthusiasm and excitement of the audience', hi: 'भीड़ का जोश और ऊर्जा', es: 'la energía del público', fr: 'l\'énergie de la foule', de: 'die Energie der Menge', pt: 'a energia da multidão', zh: '观众席的热烈氛围', ar: 'طاقة وحماس الجمهور', ja: '観客の熱気', ru: 'энергетика толпы', note: 'Live event quality: "The energy of the crowd was infectious."', ic: '⚡' },
    { phrase: 'book tickets in advance', meaning: 'purchase admission passes well ahead of the event date', hi: 'पहले से टिकट बुक करना', es: 'reservar entradas con anticipación', fr: 'réserver des billets à l\'avance', de: 'Karten im Voraus buchen', pt: 'comprar ingressos com antecedência', zh: '提前购票 / 预订门票', ar: 'حجز التذاكر مسبقاً', ja: '事前にチケットを予約する', ru: 'забронировать билеты заранее', note: 'Travel planning: "We should book tickets in advance before they sell out."', ic: '🎟️' },
    { phrase: 'a world-class performance', meaning: 'an artistic show of the highest global standard', hi: 'विश्व स्तरीय प्रस्तुति', es: 'una actuación de clase mundial', fr: 'une performance de classe mondiale', de: 'eine Darbietung von Weltklasse', pt: 'uma apresentação de nível internacional', zh: '世界级的精彩演出', ar: 'أداء فني عالمي المستوى', ja: '世界最高峰のパフォーマンス', ru: 'выступление мирового уровня', note: 'High praise: "The symphony orchestra delivered a world-class performance."', ic: '🏆' }
  ],
  grammar: {
    title: 'Question Tags (Positive + Negative & Negative + Positive)',
    concept: 'Using question tags at the end of statements to engage conversation partners and invite agreement.',
    patterns: [
      {
        title: 'Positive Statement + Negative Tag',
        structure: 'Subject + Auxiliary/Be/Verb + ..., Auxiliary/Be (negative) + Pronoun?',
        rule: 'If the main statement is affirmative, the tag question is negative. For present simple verbs without an auxiliary, use do/does/did.',
        examples: [
          { en: 'You bought the concert tickets, didn\'t you?', hi: 'आपने कॉन्सर्ट के टिकट खरीदे थे, है न?', es: 'Compraste las entradas para el concierto, ¿verdad?' },
          { en: 'The sound acoustics are fantastic, aren\'t they?', hi: 'ध्वनि की गुणवत्ता शानदार है, है न?', es: 'La acústica es fantástica, ¿no es así?' }
        ]
      },
      {
        title: 'Negative Statement + Positive Tag',
        structure: 'Subject + Auxiliary/Be (negative) + ..., Auxiliary/Be (positive) + Pronoun?',
        rule: 'If the main statement is negative, the question tag uses the affirmative auxiliary.',
        examples: [
          { en: 'The concert wasn\'t too loud, was it?', hi: 'कॉन्सर्ट बहुत तेज़ नहीं था, क्या था?', es: 'El concierto no estuvo demasiado ruidoso, ¿verdad?' },
          { en: 'They don\'t perform classical music, do they?', hi: 'वे शास्त्रीय संगीत नहीं बजाते, क्या वे बजाते हैं?', es: 'No tocan música clásica, ¿verdad?' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'You like rock music, isn\'t it?', cor: 'You like rock music, don\'t you?', exp: 'Do not use a generic "isn\'t it" for every verb. With "you like", use the auxiliary tag "don\'t you?".', hi: 'हर वाक्य के अंत में "isn\'t it" न लगाएं; "you like" के लिए "don\'t you?" का प्रयोग करें।', es: 'No uses "isn\'t it" para todo. Con "you like", el tag correcto es "don\'t you?".' },
    { inc: 'She was at the festival, didn\'t she?', cor: 'She was at the festival, wasn\'t she?', exp: 'Match the auxiliary verb in the statement: "was" takes the tag "wasn\'t she?".', hi: 'मुख्य वाक्य में "was" होने पर टैग में "wasn\'t she?" का प्रयोग करें, "didn\'t" का नहीं।', es: 'Haz coincidir el verbo auxiliar: "was" lleva el tag "wasn\'t she?".' },
    { inc: 'The tickets aren\'t expensive, aren\'t they?', cor: 'The tickets aren\'t expensive, are they?', exp: 'A negative statement ("aren\'t expensive") requires a positive tag ("are they?").', hi: 'नकारात्मक वाक्य के साथ सकारात्मक टैग ("are they?") का प्रयोग करें।', es: 'Una oración negativa requiere un tag positivo ("are they?").' },
    { inc: 'We will see the concert tomorrow, don\'t we?', cor: 'We will see the concert tomorrow, won\'t we?', exp: 'The modal "will" takes the negative tag "won\'t we?".', hi: '"will" के साथ टैग "won\'t we?" बनता है।', es: 'El auxiliar "will" lleva el tag negativo "won\'t we?".' },
    { inc: 'The singer put on an amazing show, didn\'t it?', cor: 'The singer put on an amazing show, didn\'t she?', exp: 'Use a pronoun matching the person ("she" or "he"), not "it" for human performers.', hi: 'गायक के लिए सर्वनाम "she" या "he" का उपयोग करें, "it" का नहीं।', es: 'Usa el pronombre correspondiente a la persona ("she" o "he"), no "it".' }
  ],
  dialogues: [
    {
      title: 'Discussing an Upcoming Summer Music Festival',
      context: 'Lucas and Clara discuss buying passes for an open-air weekend festival.',
      charA: { name: 'Lucas', av: '🎧', role: 'Music Lover' },
      charB: { name: 'Clara', av: '🎸', role: 'Festival Enthusiast' },
      turns: [
        { spk: 'Lucas', text: 'Clara, you checked the festival lineup this morning, didn\'t you?', hi: 'क्लारा, आपने आज सुबह उत्सव के कलाकारों की सूची देखी थी, है न?', es: 'Clara, revisaste la cartelera del festival esta mañana, ¿verdad?' },
        { spk: 'Clara', text: 'Yes I did! My favorite indie band is headlining the main stage on Saturday night.', hi: 'हाँ, मैंने देखा! मेरा पसंदीदा इंडी बैंड शनिवार की रात मुख्य मंच पर प्रस्तुति दे रहा है।', es: '¡Sí, lo hice! Mi banda indie favorita encabeza el escenario principal el sábado por la noche.' },
        { spk: 'Lucas', text: 'The tickets aren\'t completely sold out yet, are they?', hi: 'टिकट अभी पूरी तरह से बिके नहीं हैं, क्या बिक गए हैं?', es: 'Las entradas aún no están completamente agotadas, ¿verdad?' },
        { spk: 'Clara', text: 'Not yet, but we should book them in advance today. The energy of the crowd is always unforgettable.', hi: 'अभी नहीं, लेकिन हमें आज ही पहले से बुक कर लेना चाहिए। भीड़ का जोश हमेशा अविस्मरणीय होता है।', es: 'Todavía no, pero deberíamos reservarlas con anticipación hoy. La energía del público siempre es inolvidable.' },
        { spk: 'Lucas', text: 'You\'ll drive us to the festival campsite, won\'t you?', hi: 'आप हमें उत्सव के कैम्प स्थल तक ले जाएँगी, है न?', es: 'Nos llevarás en coche al campamento del festival, ¿no es así?' },
        { spk: 'Clara', text: 'Of course! Pack your tent and let\'s get ready for a weekend of live music.', hi: 'बिल्कुल! अपना तंबू पैक करें और लाइव संगीत के सप्ताहांत के लिए तैयार हो जाएं।', es: '¡Por supuesto! Empaca tu tienda de campaña y preparémonos para un fin de semana de música en vivo.' }
      ]
    },
    {
      title: 'Debriefing after a Symphony Concert',
      context: 'Noah and Maya leave the concert hall after a live classical recital.',
      charA: { name: 'Noah', av: '🎻', role: 'Violinist' },
      charB: { name: 'Maya', av: '🎼', role: 'Concertgoer' },
      turns: [
        { spk: 'Maya', text: 'That violin soloist was phenomenal, wasn\'t she?', hi: 'वह वायलिन वादक असाधारण थी, है न?', es: 'Esa solista de violín estuvo fenomenal, ¿verdad?' },
        { spk: 'Noah', text: 'She certainly was. The acoustics in this hall are world-class, aren\'t they?', hi: 'वह निश्चित रूप से थी। इस हॉल की ध्वनिकी विश्व स्तरीय है, है न?', es: 'Ciertamente lo estuvo. La acústica de esta sala es de clase mundial, ¿no te parece?' },
        { spk: 'Maya', text: 'Absolutely. And the audience cheered for nearly ten minutes during the encore!', hi: 'बिल्कुल। और दर्शकों ने पुनः प्रस्तुति के दौरान लगभग दस मिनट तक जयकार की!', es: 'Absolutamente. ¡Y el público vitoreó durante casi diez minutos durante el bis!' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_186_p1',
      type: 'multiple_choice',
      prompt: 'Choose the correct question tag to complete the sentence:',
      text: 'You love acoustic guitar music, [blank]?',
      options: [
        { id: '1', text: 'don\'t you', isCorrect: true },
        { id: '2', text: 'isn\'t it', isCorrect: false },
        { id: '3', text: 'aren\'t you', isCorrect: false },
        { id: '4', text: 'didn\'t you', isCorrect: false }
      ],
      correctAnswer: 'don\'t you',
      explanation: 'Present Simple "You love" takes the tag "don\'t you?".'
    },
    {
      id: 'ex_186_p2',
      type: 'fill_blank',
      prompt: 'Select the correct tag for a negative statement:',
      text: 'The festival tickets weren\'t very expensive, [blank]?',
      options: [
        { id: '1', text: 'were they', isCorrect: true },
        { id: '2', text: 'weren\'t they', isCorrect: false },
        { id: '3', text: 'did they', isCorrect: false },
        { id: '4', text: 'are they', isCorrect: false }
      ],
      correctAnswer: 'were they',
      explanation: 'A negative statement with "weren\'t" takes the affirmative tag "were they?".'
    },
    {
      id: 'ex_186_p3',
      type: 'word_ordering',
      prompt: 'Arrange the words to form a correct statement with a question tag:',
      tokens: ['The', 'band', 'put', 'on', 'an', 'amazing', 'show', ',', 'didn\'t', 'they', '?'],
      correctOrder: ['The', 'band', 'put', 'on', 'an', 'amazing', 'show', ',', 'didn\'t', 'they', '?'],
      explanation: 'Past tense "put on" takes the question tag "didn\'t they?".'
    },
    {
      id: 'ex_186_p4',
      type: 'error_correction',
      prompt: 'Correct the error in this question tag:',
      errorSentence: 'She is a talented lead vocalist, isn\'t she not?',
      correctSentence: 'She is a talented lead vocalist, isn\'t she?',
      explanation: 'The tag is simply "isn\'t she?", without adding an extra "not".'
    },
    {
      id: 'ex_186_p5',
      type: 'translation',
      prompt: 'Translate to English: "पूरा स्टेडियम बैंड के साथ गाने लगा।"',
      targetSentence: 'The entire stadium began to sing along with the band.',
      explanation: '"sing along with the band" translates बैंड के साथ गाना.'
    },
    {
      id: 'ex_186_p6',
      type: 'multiple_choice',
      prompt: 'What does "encore" mean at a live performance?',
      options: [
        { id: '1', text: 'An additional song played in response to loud audience applause', isCorrect: true },
        { id: '2', text: 'A technical sound failure on the main stage', isCorrect: false },
        { id: '3', text: 'The ticket booth located outside the theater', isCorrect: false },
        { id: '4', text: 'A completely empty stadium', isCorrect: false }
      ],
      correctAnswer: 'An additional song played in response to loud audience applause',
      explanation: 'An "encore" is a bonus performance requested by the audience.'
    },
    {
      id: 'ex_186_p7',
      type: 'fill_blank',
      prompt: 'Choose the correct word to complete the description:',
      text: 'The sound quality and [blank] of this concert hall are world-class.',
      options: [
        { id: '1', text: 'acoustics', isCorrect: true },
        { id: '2', text: 'humidity', isCorrect: false },
        { id: '3', text: 'receipts', isCorrect: false },
        { id: '4', text: 'frost', isCorrect: false }
      ],
      correctAnswer: 'acoustics',
      explanation: '"Acoustics" refers to the properties of a room that determine how sound is transmitted.'
    },
    {
      id: 'ex_186_p8',
      type: 'speaking',
      prompt: 'Speak this conversational sentence with the tag question clearly:',
      targetSentence: 'The festival had an incredible atmosphere, didn\'t it?',
      audioText: 'The festival had an incredible atmosphere, didn\'t it?',
      explanation: 'Use rising intonation on "didn\'t it?" to invite confirmation.'
    },
    {
      id: 'ex_186_p9',
      type: 'listening',
      prompt: 'Listen to the music fan and determine their opinion:',
      audioText: 'The guitarist played an acoustic solo that was bursting with emotion, and the crowd gave her a standing ovation.',
      options: [
        { id: '1', text: 'The audience loved the acoustic solo and gave a standing ovation.', isCorrect: true },
        { id: '2', text: 'The guitarist forgot the chords and walked off stage.', isCorrect: false },
        { id: '3', text: 'The crowd asked for a full refund.', isCorrect: false },
        { id: '4', text: 'The concert was cancelled due to bad weather.', isCorrect: false }
      ],
      correctAnswer: 'The audience loved the acoustic solo and gave a standing ovation.',
      explanation: 'The audio describes high emotional praise and a standing ovation.'
    }
  ],
  review: [
    {
      id: 'ex_186_r1',
      type: 'multiple_choice',
      prompt: 'Choose the correct question tag:',
      text: 'You will come to the music festival with us, [blank]?',
      options: [
        { id: '1', text: 'won\'t you', isCorrect: true },
        { id: '2', text: 'will you', isCorrect: false },
        { id: '3', text: 'don\'t you', isCorrect: false },
        { id: '4', text: 'aren\'t you', isCorrect: false }
      ],
      correctAnswer: 'won\'t you',
      explanation: 'Affirmative "You will" takes the negative tag "won\'t you?".'
    },
    {
      id: 'ex_186_r2',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the appropriate word:',
      text: 'We should book tickets early before they are completely [blank] out.',
      options: [
        { id: '1', text: 'sold', isCorrect: true },
        { id: '2', text: 'simmered', isCorrect: false },
        { id: '3', text: 'carved', isCorrect: false },
        { id: '4', text: 'roasted', isCorrect: false }
      ],
      correctAnswer: 'sold',
      explanation: '"sold out" means all tickets have been purchased.'
    },
    {
      id: 'ex_186_r3',
      type: 'word_ordering',
      prompt: 'Assemble the sentence correctly:',
      tokens: ['They', 'put', 'on', 'a', 'world-class', 'performance', 'last', 'night', '.'],
      correctOrder: ['They', 'put', 'on', 'a', 'world-class', 'performance', 'last', 'night', '.'],
      explanation: 'Descriptive praise: "They put on a world-class performance last night."'
    },
    {
      id: 'ex_186_r4',
      type: 'translation',
      prompt: 'Translate to English: "गायक ने दर्शकों के लिए एक सुंदर गीत गाया, है न?"',
      targetSentence: 'The singer sang a beautiful song for the audience, didn\'t she?',
      explanation: '"The singer sang... didn\'t she?" translates the past statement with tag.'
    }
  ],
  assessment: [
    {
      id: 'ex_186_a1',
      type: 'multiple_choice',
      prompt: 'Which sentence has a correctly formed question tag?',
      options: [
        { id: '1', text: 'We haven\'t seen this indie band before, have we?', isCorrect: true },
        { id: '2', text: 'We haven\'t seen this indie band before, haven\'t we?', isCorrect: false },
        { id: '3', text: 'We haven\'t seen this indie band before, did we?', isCorrect: false },
        { id: '4', text: 'We haven\'t seen this indie band before, isn\'t it?', isCorrect: false }
      ],
      correctAnswer: 'We haven\'t seen this indie band before, have we?',
      explanation: 'Negative Present Perfect "haven\'t seen" takes affirmative tag "have we?".'
    },
    {
      id: 'ex_186_a2',
      type: 'fill_blank',
      prompt: 'Select the correct tag:',
      text: 'The lead guitarist is extremely skilled, [blank]?',
      options: [
        { id: '1', text: 'isn\'t he', isCorrect: true },
        { id: '2', text: 'is he', isCorrect: false },
        { id: '3', text: 'doesn\'t he', isCorrect: false },
        { id: '4', text: 'hasn\'t he', isCorrect: false }
      ],
      correctAnswer: 'isn\'t he',
      explanation: 'Present "is" takes "isn\'t he?".'
    },
    {
      id: 'ex_186_a3',
      type: 'error_correction',
      prompt: 'Find and fix the error in the sentence:',
      errorSentence: 'You went to the outdoor concert yesterday, isn\'t it?',
      correctSentence: 'You went to the outdoor concert yesterday, didn\'t you?',
      explanation: 'Past Simple "went" takes the past auxiliary tag "didn\'t you?".'
    },
    {
      id: 'ex_186_a4',
      type: 'translation',
      prompt: 'Translate to English: "भीड़ का उत्साह और ऊर्जा वास्तव में संक्रामक थी।"',
      targetSentence: 'The excitement and energy of the crowd was truly infectious.',
      explanation: '"energy of the crowd" translates भीड़ का उत्साह और ऊर्जा.'
    }
  ]
};
