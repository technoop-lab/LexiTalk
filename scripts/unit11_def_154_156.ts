import { LessonConfigA2 } from './unit11_builder_helper';

// =========================================================================
// LESSON 154: Recommending Options & Comparing Alternatives
// =========================================================================
export const LESSON_154_CONFIG: LessonConfigA2 = {
  num: 154,
  title: 'Recommending Options & Comparing Alternatives',
  icon: '⚖️',
  estMin: 25,
  objTitle: 'Advanced Comparative Structures & Making Product/Service Recommendations',
  objDesc: 'Master comparing products, venues, and travel options using intensifiers ("much more expensive", "far better", "considerably faster") and equality comparisons ("not as convenient as", "just as reliable as").',
  objHi: 'उत्पादों, स्थानों और विकल्पों की तुलना करने के लिए तीव्र तुलनात्मक संरचनाओं ("much more", "far better", "not as... as") का उपयोग करना सीखें।',
  objEs: 'Comparar productos, lugares y alternativas con intensificadores ("much more", "far better") y comparaciones de igualdad ("not as... as").',
  canDo: [
    'I can compare two or more options in detail using intensifiers ("much / far / slightly + comparative").',
    'I can use "not as ... as" to describe differences in convenience, price, or quality.',
    'I can recommend the most suitable option based on budget and user preferences.',
    'I can weigh pros and cons when making everyday consumer decisions.'
  ],
  canDoHi: [
    'मैं "much / far / slightly" के साथ दो या अधिक विकल्पों की विस्तार से तुलना कर सकता हूँ।',
    'मैं सुविधा, कीमत या गुणवत्ता में अंतर बताने के लिए "not as ... as" का उपयोग कर सकता हूँ।',
    'मैं बजट और प्राथमिकताओं के आधार पर सबसे उपयुक्त विकल्प की सिफारिश कर सकता हूँ।',
    'मैं रोजमर्रा के फैसलों में फायदे और नुकसान की तुलना कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo comparar opciones usando intensificadores ("much / far / slightly + comparativo").',
    'Puedo usar "not as ... as" para describir diferencias de precio, comodidad o calidad.',
    'Puedo recomendar la opción más adecuada según el presupuesto y las preferencias.',
    'Puedo evaluar pros y contras al tomar decisiones de consumo cotidianas.'
  ],
  vocab: [
    { w: 'alternative', p: '/ɔːlˈtɜːnətɪv/', m: 'one of two or more available possibilities', hi: 'विकल्प', es: 'alternativa / opción', fr: 'alternative', de: 'Alternative', pt: 'alternativa', zh: '供选择的事物', ar: 'بديل', ja: '選択肢 / 代替案', ru: 'альтернатива / вариант', ex: 'Taking the high-speed train is a greener alternative to flying.', exHi: 'हाई-स्पीड ट्रेन लेना उड़ान का एक अधिक पर्यावरण-अनुकूल विकल्प है।', exEs: 'Tomar el tren de alta velocidad es una alternativa más ecológica que volar.', ic: '🔀' },
    { w: 'convenient', p: '/kənˈviːniənt/', m: 'fitting in well with a person\'s needs, activities, or plans', hi: 'सुविधाजनक', es: 'conveniente / práctico', fr: 'pratique', de: 'bequem / praktisch', pt: 'conveniente / prático', zh: '便利的', ar: 'مريح / ملائم', ja: '便利な', ru: 'удобный', ex: 'The downtown hotel is far more convenient for sightseeing.', exHi: 'डाउनटाउन होटल दर्शनीय स्थलों की यात्रा के लिए कहीं अधिक सुविधाजनक है।', exEs: 'El hotel del centro es mucho más conveniente para hacer turismo.', ic: '🏨' },
    { w: 'affordable', p: '/əˈfɔːdəbl/', m: 'inexpensive; reasonably priced', hi: 'सस्ता / किफायती', es: 'asequible / económico', fr: 'abordable', de: 'erschwinglich', pt: 'acessível / em conta', zh: '买得起的 / 实惠的', ar: 'في المتناول', ja: '手頃な価格の', ru: 'доступный по цене', ex: 'This hostel offers clean and affordable accommodation for students.', exHi: 'यह हॉस्टल छात्रों के लिए साफ और किफायती आवास प्रदान करता है।', exEs: 'Este albergue ofrece alojamiento limpio y asequible para estudiantes.', ic: '🏷️' },
    { w: 'reliable', p: '/rɪˈlaɪəbl/', m: 'consistently good in quality or performance; able to be trusted', hi: 'भरोसेमंद / विश्वसनीय', es: 'fiable / confiable', fr: 'fiable', de: 'zuverlässig', pt: 'confiável', zh: '可靠的', ar: 'موثوق', ja: '信頼できる', ru: 'надежный', ex: 'Public transport in this city is remarkably reliable and punctual.', exHi: 'इस शहर में सार्वजनिक परिवहन उल्लेखनीय रूप से विश्वसनीय और समय का पाबंद है।', exEs: 'El transporte público en esta ciudad es notablemente fiable y puntual.', ic: '🛡️' },
    { w: 'durable', p: '/ˈdjʊərəbl/', m: 'able to withstand wear, pressure, or damage; hard-wearing', hi: 'टिकाऊ / मजबूत', es: 'duradero / resistente', fr: 'durable', de: 'haltbar / strapazierfähig', pt: 'durável', zh: '耐用的', ar: 'متين', ja: '耐久性のある', ru: 'долговечный', ex: 'Leather boots are slightly more expensive, but far more durable.', exHi: 'चमड़े के जूते थोड़े अधिक महंगे हैं, लेकिन कहीं अधिक टिकाऊ हैं।', exEs: 'Las botas de cuero son un poco más caras, pero mucho más duraderas.', ic: '🥾' },
    { w: 'feature', p: '/ˈfiːtʃə/', m: 'a distinctive attribute or aspect of something', hi: 'विशेषता / खूबी', es: 'característica / función', fr: 'caractéristique', de: 'Merkmal / Funktion', pt: 'recurso / característica', zh: '特色 / 功能', ar: 'ميزة / خاصية', ja: '特徴 / 機能', ru: 'особенность / функция', ex: 'The battery saving feature extends phone life by five hours.', exHi: 'बैटरी बचत सुविधा फोन के जीवन को पांच घंटे बढ़ा देती है।', exEs: 'La función de ahorro de batería extiende la duración del teléfono cinco horas.', ic: '📱' },
    { w: 'superior', p: '/suːˈpɪəriə/', m: 'higher in quality, status, or effectiveness than others', hi: 'बेहतर / उत्कृष्ट', es: 'superior / de mejor calidad', fr: 'supérieur', de: 'überlegen / besser', pt: 'superior', zh: '更优越的', ar: 'متفوق / أفضل', ja: '優れた', ru: 'превосходящий / лучший', ex: 'The sound quality of these headphones is superior to that of the older model.', exHi: 'इन हेडफ़ोन की ध्वनि गुणवत्ता पुराने मॉडल की तुलना में बेहतर है।', exEs: 'La calidad de sonido de estos auriculares es superior a la del modelo anterior.', ic: '🎧' },
    { w: 'inferior', p: '/ɪnˈfɪəriə/', m: 'lower in rank, status, or quality', hi: 'घटिया / कमतर', es: 'inferior', fr: 'inférieur', de: 'minderwertig', pt: 'inferior', zh: '较差的', ar: 'أقل جودة', ja: '劣った', ru: 'худший / уступающий', ex: 'Cheap plastic cases are often inferior in shock protection.', exHi: 'सस्ते प्लास्टिक के केस अक्सर झटके से सुरक्षा में कमतर होते हैं।', exEs: 'Las fundas de plástico baratas suelen ser inferiores en protección contra golpes.', ic: '📉' },
    { w: 'efficient', p: '/ɪˈfɪʃnt/', m: 'performing in the best possible manner with the least waste of time and effort', hi: 'कुशल / सक्षम', es: 'eficiente', fr: 'efficace', de: 'effizient', pt: 'eficiente', zh: '效率高的', ar: 'كفء', ja: '効率的な', ru: 'эффективный', ex: 'Electric cars are considerably more energy-efficient than petrol vehicles.', exHi: 'इलेक्ट्रिक कारें पेट्रोल वाहनों की तुलना में काफी अधिक ऊर्जा-कुशल हैं।', exEs: 'Los coches eléctricos son considerablemente más eficientes que los de gasolina.', ic: '⚡' },
    { w: 'spacious', p: '/ˈspeɪʃəs/', m: 'having ample space; roomy', hi: 'खुला / बड़ा / विशाल', es: 'espacioso / amplio', fr: 'spacieux', de: 'geräumig', pt: 'espaçoso', zh: '宽敞的', ar: 'واسع / فسيح', ja: '広々とした', ru: 'просторный', ex: 'The new apartment is much more spacious than our old flat.', exHi: 'नया अपार्टमेंट हमारे पुराने फ्लैट की तुलना में बहुत अधिक विशाल है।', exEs: 'El nuevo apartamento es mucho más espacioso que nuestro antiguo piso.', ic: '🏠' },
    { w: 'compact', p: '/kəmˈpækt/', m: 'closely and neatly packed together; taking up little space', hi: 'छोटा / सघन', es: 'compacto', fr: 'compact', de: 'kompakt', pt: 'compacto', zh: '紧凑的', ar: 'مدمج / صغير', ja: 'コンパクトな', ru: 'компактный', ex: 'I prefer a compact laptop because it fits easily into my backpack.', exHi: 'मुझे एक कॉम्पैक्ट लैपटॉप पसंद है क्योंकि यह मेरे बैकपैक में आसानी से फिट हो जाता है।', exEs: 'Prefiero una computadora portátil compacta porque cabe fácilmente en mi mochila.', ic: '💻' },
    { w: 'versatile', p: '/ˈvɜːsətaɪl/', m: 'able to adapt or be adapted to many different functions or activities', hi: 'बहुमुखी / बहुउपयोगी', es: 'versátil / polivalente', fr: 'polyvalent', de: 'vielseitig', pt: 'versátil', zh: '多功能的', ar: 'متعدد الاستخدامات', ja: '多用途の / 万能な', ru: 'универсальный', ex: 'This jacket is versatile enough for both hiking and office wear.', exHi: 'यह जैकेट हाइकिंग और ऑफिस दोनों के लिए उपयुक्त और बहुमुखी है।', exEs: 'Esta chaqueta es lo suficientemente versátil para caminatas y para la oficina.', ic: '🧥' },
    { w: 'trade-off', p: '/ˈtreɪd ɒf/', m: 'a balance achieved between two desirable but incompatible features; a compromise', hi: 'सौदा / समझौता / संतुलन', es: 'compensación / equilibrio', fr: 'compromis', de: 'Kompromiss / Abwägung', pt: 'compromisso / troca', zh: '权衡 / 折衷', ar: 'مفاضلة / تسوية', ja: 'トレードオフ / 妥協点', ru: 'компромисс / баланс', ex: 'Choosing a smaller car is a trade-off between price and comfort.', exHi: 'छोटी कार चुनना कीमत और आराम के बीच का एक समझौता है।', exEs: 'Elegir un coche más pequeño es una compensación entre precio y comodidad.', ic: '⚖️' },
    { w: 'preference', p: '/ˈprefrəns/', m: 'a greater liking for one alternative over another', hi: 'प्राथमिकता / पसंद', es: 'preferencia', fr: 'préférence', de: 'Vorliebe / Präferenz', pt: 'preferência', zh: '偏好', ar: 'تفضيل', ja: '好み / 優先傾向', ru: 'предпочтение', ex: 'Do you have a preference for vegetarian food?', exHi: 'क्या आपकी शाकाहारी भोजन के लिए कोई प्राथमिकता है?', exEs: '¿Tienes preferencia por la comida vegetariana?', ic: '❤️' },
    { w: 'warranty', p: '/ˈwɒrənti/', m: 'a written guarantee promising to repair or replace an article if necessary', hi: 'वारंटी / गारंटी', es: 'garantía', fr: 'garantie', de: 'Garantie', pt: 'garantia', zh: '保修 / 保单', ar: 'ضمان', ja: '保証', ru: 'гарантия', ex: 'The microwave comes with a two-year manufacturer warranty.', exHi: 'माइक्रोवेव दो साल की निर्माता वारंटी के साथ आता है।', exEs: 'El microondas viene con una garantía del fabricante de dos años.', ic: '📜' },
    { w: 'upgrade', p: '/ˈʌpɡreɪd/', m: 'an act of raising something to a higher standard or version', hi: 'उन्नयन / अपग्रेड', es: 'mejora / actualización', fr: 'mise à niveau', de: 'Aufwertung / Upgrade', pt: 'atualização / upgrade', zh: '升级', ar: 'ترقية', ja: 'アップグレード', ru: 'обновление / апгрейд', ex: 'Upgrading the processor will make the system run considerably faster.', exHi: 'प्रोसेसर को अपग्रेड करने से सिस्टम काफी तेजी से चलेगा।', exEs: 'Actualizar el procesador hará que el sistema funcione considerablemente más rápido.', ic: '🚀' },
    { w: 'luxurious', p: '/lʌɡˈʒʊəriəs/', m: 'extremely comfortable, elegant, or enjoyable, especially in a way that involves great expense', hi: 'आलीशान / भव्य', es: 'lujoso', fr: 'luxueux', de: 'luxuriös', pt: 'luxuoso', zh: '奢华的', ar: 'فاخر', ja: '贅沢な / 豪華な', ru: 'роскошный', ex: 'The resort has luxurious suites overlooking the ocean.', exHi: 'रिसॉर्ट में समुद्र के सामने आलीशान सुइट्स हैं।', exEs: 'El complejo cuenta con lujosas suites con vistas al océano.', ic: '✨' },
    { w: 'economical', p: '/ˌiːkəˈnɒmɪkl/', m: 'giving good value or return in relation to the money, time, or effort expended', hi: 'किफायती / मितव्ययी', es: 'económico / ahorrativo', fr: 'économique', de: 'sparsam / wirtschaftlich', pt: 'econômico', zh: '节约的 / 经济的', ar: 'اقتصادي', ja: '経済的な', ru: 'экономный / выгодный', ex: 'Cooking at home is far more economical than eating at restaurants.', exHi: 'घर पर खाना बनाना रेस्तरां में खाने की तुलना में कहीं अधिक किफायती है।', exEs: 'Cocinar en casa es mucho más económico que comer en restaurantes.', ic: '💰' },
    { w: 'standout', p: '/ˈstændaʊt/', m: 'a person or thing that is remarkably superior or noticeable', hi: 'उत्कृष्ट / सबसे अलग', es: 'destacado / sobresaliente', fr: 'remarquable', de: 'herausragend', pt: 'destaque', zh: '出众的', ar: 'متميز / بارز', ja: '際立ったもの', ru: 'выдающийся', ex: 'The battery performance was the standout feature in our technical test.', exHi: 'हमारे तकनीकी परीक्षण में बैटरी का प्रदर्शन सबसे उत्कृष्ट विशेषता थी।', exEs: 'El rendimiento de la batería fue la característica destacada en nuestra prueba técnica.', ic: '⭐' },
    { w: 'evaluate', p: '/ɪˈvæljueɪt/', m: 'form an idea of the amount, number, or value of; assess', hi: 'मूल्यांकन करना', es: 'evaluar / valorar', fr: 'évaluer', de: 'bewerten / einschätzen', pt: 'avaliar', zh: '评估', ar: 'يقيم / يثمن', ja: '評価する', ru: 'оценивать', ex: 'We must evaluate both options before signing the lease.', exHi: 'पट्टे पर हस्ताक्षर करने से पहले हमें दोनों विकल्पों का मूल्यांकन करना होगा।', exEs: 'Debemos evaluar ambas opciones antes de firmar el contrato de arrendamiento.', ic: '📊' }
  ],
  chunks: [
    { phrase: 'much more... than', meaning: 'used to emphasize a large difference in an attribute', hi: 'की तुलना में बहुत अधिक...', es: 'mucho más... que', fr: 'beaucoup plus... que', de: 'viel mehr... als', pt: 'muito mais... do que', zh: '远比...更...', ar: 'أكثر بكثير... من', ja: '〜よりはるかに...', ru: 'намного больше..., чем', note: 'Intensifier with multi-syllable adjectives: "This hotel is much more expensive than that one."', ic: '📈' },
    { phrase: 'not as... as', meaning: 'less than something else in a particular quality', hi: 'उतना... नहीं जितना कि...', es: 'no tan... como', fr: 'pas aussi... que', de: 'nicht so... wie', pt: 'não tão... quanto', zh: '不如...那样...', ar: 'ليس بـ... مثل', ja: '〜ほど...ではない', ru: 'не такой..., как', note: 'Equality structure with negative: "The bus is not as fast as the metro."', ic: '↔️' },
    { phrase: 'far better', meaning: 'significantly superior in quality or performance', hi: 'कहीं बेहतर', es: 'mucho mejor', fr: 'bien meilleur', de: 'weitaus besser', pt: 'muito melhor', zh: '好得多', ar: 'أفضل بكثير', ja: 'はるかに良い', ru: 'гораздо лучше', note: 'Intensifier for irregular comparative "better": "Her spoken English is far better now."', ic: '🌟' },
    { phrase: 'considerably faster', meaning: 'noticeably higher in speed', hi: 'काफी तेज', es: 'considerablemente más rápido', fr: 'considérablement plus rapide', de: 'erheblich schneller', pt: 'consideravelmente mais rápido', zh: '快得多', ar: 'أسرع بكثير', ja: 'かなり速い', ru: 'значительно быстрее', note: 'Formal intensifier: "The express train is considerably faster."', ic: '🚅' },
    { phrase: 'weigh the pros and cons', meaning: 'carefully compare advantages and disadvantages', hi: 'फायदे और नुकसान की तुलना करना', es: 'sopesar los pros y los contras', fr: 'peser le pour et le contre', de: 'die Vor- und Nachteile abwägen', pt: 'pesar os prós e os contras', zh: '权衡利弊', ar: 'موازنة الإيجابيات والسلبيات', ja: 'メリットとデメリットを比較検討する', ru: 'взвесить за и против', note: 'Idiomatic decision-making phrase.', ic: '⚖️' },
    { phrase: 'all things considered', meaning: 'taking everything into account; overall', hi: 'सब बातों को ध्यान में रखते हुए', es: 'considerándolo todo / en general', fr: 'tout bien considéré', de: 'alles in allem', pt: 'considerando tudo', zh: '综合考虑', ar: 'مع أخذ كل الأمور في الاعتبار', ja: 'すべてを考慮すると', ru: 'учитывая все обстоятельства', note: 'Discourse marker for final judgment: "All things considered, this laptop is the best value."', ic: '🤔' },
    { phrase: 'best value for money', meaning: 'the highest quality product for the lowest fair price', hi: 'पैसों का सर्वोत्तम मूल्य / सबसे किफायती सौदा', es: 'mejor relación calidad-precio', fr: 'meilleur rapport qualité-prix', de: 'bestes Preis-Leistungs-Verhältnis', pt: 'melhor custo-benefício', zh: '性价比最高', ar: 'أفضل قيمة مقابل السعر', ja: '最もコストパフォーマンスが高い', ru: 'лучшее соотношение цены и качества', note: 'Crucial consumer phrase.', ic: '🏷️' },
    { phrase: 'suit your needs', meaning: 'be appropriate or satisfying for someone\'s requirements', hi: 'आपकी आवश्यकताओं के अनुकूल होना', es: 'adaptarse a tus necesidades', fr: 'convenir à vos besoins', de: 'Ihren Bedürfnissen entsprechen', pt: 'atender às suas necessidades', zh: '满足你的需求', ar: 'يناسب احتياجاتك', ja: 'あなたのニーズに合う', ru: 'соответствовать вашим потребностям', note: 'Recommendation phrase: "Option A will suit your needs perfectly."', ic: '👌' }
  ],
  grammar: {
    title: 'Intensifying Comparatives & Structures of Equality ("Not as ... as")',
    concept: 'Modifying comparative adjectives with adverbs of degree ("much", "far", "a lot", "slightly", "a bit") to express nuance, and using "as ... as" / "not as ... as" for comparisons of similarity and degree.',
    patterns: [
      {
        title: 'Intensifying Comparatives: "much / far / slightly + Comparative"',
        structure: 'Subject + Verb + (much / far / slightly) + Comparative Adjective + than + Object',
        rule: 'Place "much", "far", or "a lot" before a comparative to show a big difference, or "slightly" / "a bit" for a small difference.',
        examples: [
          { en: 'The express train is far faster than the regional bus.', hi: 'एक्सप्रेस ट्रेन क्षेत्रीय बस की तुलना में कहीं अधिक तेज़ है।', es: 'El tren expreso es mucho más rápido que el autobús regional.' },
          { en: 'Model B is slightly more expensive, but it has double the memory.', hi: 'मॉडल बी थोड़ा अधिक महंगा है, लेकिन इसमें दोगुनी मेमोरी है।', es: 'El modelo B es un poco más caro, pero tiene el doble de memoria.' }
        ]
      },
      {
        title: 'Comparisons of Equality and Inequality: "(not) as ... as"',
        structure: 'Subject + Verb + (not) as + Base Adjective + as + Object',
        rule: 'Use "as + base adjective + as" to show equality, and "not as + base adjective + as" to say one thing has less of a quality than another.',
        examples: [
          { en: 'This budget laptop is not as heavy as my old one.', hi: 'यह बजट लैपटॉप मेरे पुराने लैपटॉप जितना भारी नहीं है।', es: 'Esta computadora portátil económica no es tan pesada como la anterior.' },
          { en: 'Online customer support is just as effective as in-person assistance.', hi: 'ऑनलाइन ग्राहक सहायता व्यक्तिगत सहायता जितनी ही प्रभावी है।', es: 'La atención al cliente en línea es tan efectiva como la asistencia en persona.' }
        ]
      },
      {
        title: 'Recommending the Best Option: "If you ask me...", "I would go with..."',
        structure: 'If you want + [Priority], I would recommend / go with + [Option]',
        rule: 'Provide structured recommendations by matching the listener\'s stated criteria to specific product strengths.',
        examples: [
          { en: 'If you want reliability and good battery life, I would go with Model X.', hi: 'यदि आप विश्वसनीयता और अच्छी बैटरी चाहते हैं, तो मैं मॉडल एक्स चुनने की सलाह दूंगा।', es: 'Si deseas fiabilidad y buena duración de la batería, yo elegiría el Modelo X.' },
          { en: 'All things considered, the downtown apartment is the best value for money.', hi: 'सब बातों को ध्यान में रखते हुए, डाउनटाउन अपार्टमेंट पैसों का सर्वोत्तम मूल्य है।', es: 'Considerándolo todo, el apartamento del centro tiene la mejor relación calidad-precio.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'The train is more cheaper than the flight.',
      cor: 'The train is much cheaper than the flight.',
      exp: 'Never combine "more" with a one-syllable comparative ending in "-er". Say "much cheaper" or "cheaper".',
      hi: '"more cheaper" न कहें; "much cheaper" या केवल "cheaper" का प्रयोग करें।',
      es: 'No combines "more" con comparativos en "-er". Di "much cheaper" o "cheaper".'
    },
    {
      inc: 'This phone is not as faster as that one.',
      cor: 'This phone is not as fast as that one.',
      exp: 'Between "as ... as", always use the base adjective ("fast"), NOT the comparative form ("faster").',
      hi: '"as ... as" के बीच हमेशा मूल विशेषण ("fast") आता है, comparative ("faster") नहीं।',
      es: 'Entre "as ... as" usa el adjetivo base ("fast"), no la forma comparativa.'
    },
    {
      inc: 'Option A is far more better than Option B.',
      cor: 'Option A is far better than Option B.',
      exp: '"Better" is already comparative. Do not add "more". Use "far better".',
      hi: '"more better" गलत है; "far better" या "much better" कहें।',
      es: '"better" ya es comparativo. No agregues "more"; di "far better".'
    },
    {
      inc: 'The bus is less faster than the train.',
      cor: 'The bus is slower than the train. / The bus is not as fast as the train.',
      exp: 'Avoid "less faster". Use "slower" or "not as fast as".',
      hi: '"less faster" के स्थान पर "slower" या "not as fast as" का प्रयोग करें।',
      es: 'Usa "slower" o "not as fast as" en lugar de "less faster".'
    },
    {
      inc: 'All things consider, this option is best.',
      cor: 'All things considered, this option is the best.',
      exp: 'The fixed expression is "All things considered", with past participle "considered".',
      hi: 'सही मुहावरा "All things considered" है।',
      es: 'La expresión fija es "All things considered".'
    }
  ],
  dialogues: [
    {
      title: 'Comparing Travel Options for a Business Trip',
      context: 'Hannah and Lucas compare flights and high-speed rail for a trip to Chicago.',
      charA: { name: 'Hannah', av: '👩‍💼', role: 'Event Planner' },
      charB: { name: 'Lucas', av: '👨‍💼', role: 'Marketing Specialist' },
      turns: [
        { spk: 'Hannah', text: 'Lucas, have you evaluated the travel alternatives for our trip next Tuesday?', hi: 'लुकास, क्या आपने अगले मंगलवार को हमारी यात्रा के विकल्पों का मूल्यांकन किया है?', es: 'Lucas, ¿has evaluado las alternativas de viaje para nuestro viaje del próximo martes?' },
        { spk: 'Lucas', text: 'Yes. The flight is considerably faster, but the train ticket is much cheaper and far more relaxing.', hi: 'हाँ। उड़ान काफी तेज़ है, लेकिन ट्रेन का टिकट बहुत सस्ता और कहीं अधिक आरामदायक है।', es: 'Sí. El vuelo es considerablemente más rápido, pero el billete de tren es mucho más barato y mucho más relajante.' },
        { spk: 'Hannah', text: 'The airport is also not as convenient as the downtown train station.', hi: 'हवाई अड्डा भी डाउनटाउन ट्रेन स्टेशन जितना सुविधाजनक नहीं है।', es: 'El aeropuerto tampoco es tan conveniente como la estación de tren del centro.' },
        { spk: 'Lucas', text: 'All things considered, taking the train offers the best value for money and avoids airport security lines.', hi: 'सब बातों को ध्यान में रखते हुए, ट्रेन लेना पैसों का सबसे अच्छा मूल्य देता है और हवाई अड्डे की सुरक्षा लाइनों से बचाता है।', es: 'Considerándolo todo, tomar el tren ofrece la mejor relación calidad-precio y evita las filas de seguridad.' }
      ]
    },
    {
      title: 'Choosing a New Work Laptop',
      context: 'Zara helps Oliver choose between two lightweight computers.',
      charA: { name: 'Zara', av: '👩‍💻', role: 'IT Support' },
      charB: { name: 'Oliver', av: '👨‍💻', role: 'Graphic Designer' },
      turns: [
        { spk: 'Oliver', text: 'Zara, I am trying to decide between the Pro 14 and the Air 13. Which one do you recommend?', hi: 'ज़ारा, मैं प्रो 14 और एयर 13 के बीच निर्णय लेने की कोशिश कर रहा हूँ। आप किसकी सिफारिश करती हैं?', es: 'Zara, estoy tratando de decidir entre el Pro 14 y el Air 13. ¿Cuál recomiendas?' },
        { spk: 'Zara', text: 'The Air 13 is slightly lighter, but the Pro 14 has a far better graphics card for your design software.', hi: 'एयर 13 थोड़ा हल्का है, लेकिन प्रो 14 में आपके डिज़ाइन सॉफ़्टवेयर के लिए कहीं बेहतर ग्राफ़िक्स कार्ड है।', es: 'El Air 13 es un poco más ligero, pero el Pro 14 tiene una tarjeta gráfica mucho mejor para tu software de diseño.' },
        { spk: 'Oliver', text: 'Is the battery life on the Pro just as reliable as on the Air?', hi: 'क्या प्रो पर बैटरी लाइफ एयर जितनी ही भरोसेमंद है?', es: '¿La duración de la batería del Pro es tan confiable como la del Air?' },
        { spk: 'Zara', text: 'Yes, it lasts over twelve hours. If you want maximum rendering power, the Pro 14 will suit your needs perfectly.', hi: 'हाँ, यह बारह घंटे से अधिक चलती है। यदि आप अधिकतम रेंडरिंग शक्ति चाहते हैं, तो प्रो 14 आपकी आवश्यकताओं के बिल्कुल अनुकूल होगा।', es: 'Sí, dura más de doce horas. Si deseas máxima potencia de renderizado, el Pro 14 se adaptará perfectamente a tus necesidades.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_a2_11_154_p01',
      type: 'multiple_choice',
      prompt: 'Choose the correct comparative intensifier: "The express train is _____ faster than driving during rush hour."',
      options: ['far', 'more', 'as', 'very much more'],
      correctAnswer: 'far',
      explanation: '"Far faster" uses the intensifier "far" with the comparative adjective.'
    },
    {
      id: 'ex_a2_11_154_p02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "This budget phone is not _____ expensive as the flagship model."',
      correctAnswer: 'as',
      explanation: 'Structure of inequality: "not as + adjective + as".'
    },
    {
      id: 'ex_a2_11_154_p03',
      type: 'word_ordering',
      prompt: 'Arrange into a correct comparative sentence:',
      words: ['The', 'new', 'office', 'is', 'much', 'more', 'spacious', 'than', 'before.'],
      correctAnswer: 'The new office is much more spacious than before.',
      explanation: 'Subject + Verb + much more + Adjective + than + Rest.'
    },
    {
      id: 'ex_a2_11_154_p04',
      type: 'translation',
      prompt: 'Translate into English: "यह विकल्प पहले वाले से कहीं बेहतर है।"',
      targetSentence: 'This option is far better than the previous one.',
      correctAnswer: 'This option is far better than the previous one.',
      explanation: '"Far better" expresses significant superiority.'
    },
    {
      id: 'ex_a2_11_154_p05',
      type: 'error_correction',
      prompt: 'Correct the comparative error in this sentence:',
      errorSentence: 'Taking a taxi is more cheaper than renting a car for one day.',
      correctAnswer: 'Taking a taxi is much cheaper than renting a car for one day.',
      explanation: 'Never say "more cheaper"; use "much cheaper" or "cheaper".'
    },
    {
      id: 'ex_a2_11_154_p06',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "as ... as"?',
      options: [
        'The tablet is just as versatile as a laptop for reading.',
        'The tablet is just as more versatile as a laptop for reading.',
        'The tablet is just as versatile than a laptop for reading.',
        'The tablet is not as versatile than a laptop for reading.'
      ],
      correctAnswer: 'The tablet is just as versatile as a laptop for reading.',
      explanation: 'Use base adjective between "as ... as".'
    },
    {
      id: 'ex_a2_11_154_p07',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "All things _____, this second-hand car is the most practical choice."',
      correctAnswer: 'considered',
      explanation: 'The fixed idiom is "All things considered".'
    },
    {
      id: 'ex_a2_11_154_p08',
      type: 'word_ordering',
      prompt: 'Order the words to create an idiomatic phrase:',
      words: ['We', 'must', 'weigh', 'the', 'pros', 'and', 'cons', 'carefully.'],
      correctAnswer: 'We must weigh the pros and cons carefully.',
      explanation: 'Subject + Modal + weigh the pros and cons + Adverb.'
    },
    {
      id: 'ex_a2_11_154_p09',
      type: 'translation',
      prompt: 'Translate into English: "यह रेस्टोरेंट हमारे सामान्य स्थान जितना महंगा नहीं है।"',
      targetSentence: 'This restaurant is not as expensive as our usual place.',
      correctAnswer: 'This restaurant is not as expensive as our usual place.',
      explanation: '"not as expensive as" expresses lower cost with base adjective.'
    },
    {
      id: 'ex_a2_11_154_p10',
      type: 'error_correction',
      prompt: 'Fix the error in the equality structure:',
      errorSentence: 'My new smartphone is not as heavier as my old tablet.',
      correctAnswer: 'My new smartphone is not as heavy as my old tablet.',
      explanation: 'Use the base form "heavy" inside "not as ... as".'
    },
    {
      id: 'ex_a2_11_154_p11',
      type: 'multiple_choice',
      prompt: 'What is meant by "best value for money"?',
      options: [
        'The highest quality and benefit relative to its price',
        'The most expensive luxury brand available',
        'The cheapest product regardless of quality',
        'A product sold without any warranty'
      ],
      correctAnswer: 'The highest quality and benefit relative to its price',
      explanation: 'Value for money balances price and performance.'
    },
    {
      id: 'ex_a2_11_154_p12',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "This plan will _____ your needs if you travel frequently."',
      correctAnswer: 'suit',
      explanation: 'The collocation is "suit your needs".'
    },
    {
      id: 'ex_a2_11_154_p13',
      type: 'word_ordering',
      prompt: 'Arrange the words to form a recommendation:',
      words: ['I', 'would', 'go', 'with', 'the', 'hybrid', 'model', 'for', 'fuel', 'savings.'],
      correctAnswer: 'I would go with the hybrid model for fuel savings.',
      explanation: 'I would go with + Noun Phrase + Prepositional reason.'
    },
    {
      id: 'ex_a2_11_154_p14',
      type: 'translation',
      prompt: 'Translate into English: "इलेक्ट्रिक हीटर पारंपरिक हीटर से काफी अधिक कुशल है।"',
      targetSentence: 'The electric heater is considerably more efficient than the traditional heater.',
      correctAnswer: 'The electric heater is considerably more efficient than the traditional heater.',
      explanation: '"considerably more efficient than" uses a strong intensifier.'
    },
    {
      id: 'ex_a2_11_154_p15',
      type: 'multiple_choice',
      prompt: 'Choose the most suitable word: "A two-year _____ guarantees free repairs if the appliance breaks down."',
      options: ['warranty', 'alternative', 'trade-off', 'preference'],
      correctAnswer: 'warranty',
      explanation: 'A "warranty" is a written guarantee for product repairs.'
    }
  ],
  review: [
    {
      id: 'ex_a2_11_154_r01',
      type: 'multiple_choice',
      prompt: 'Which sentence has NO grammatical error?',
      options: [
        'The downtown venue is much more convenient than the suburb hall.',
        'The downtown venue is more convenient than the suburb hall much.',
        'The downtown venue is far convenient than the suburb hall.',
        'The downtown venue is more cheaper than the suburb hall.'
      ],
      correctAnswer: 'The downtown venue is much more convenient than the suburb hall.',
      explanation: '"Much more convenient than" correctly intensifies a multi-syllable comparative.'
    },
    {
      id: 'ex_a2_11_154_r02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "His English writing is _____ better than it was six months ago."',
      correctAnswer: 'far',
      explanation: '"Far better" or "much better" modifies the comparative "better".'
    },
    {
      id: 'ex_a2_11_154_r03',
      type: 'error_correction',
      prompt: 'Correct the error:',
      errorSentence: 'The second laptop is far more better for 3D animation.',
      correctAnswer: 'The second laptop is far better for 3D animation.',
      explanation: 'Remove "more" before "better".'
    },
    {
      id: 'ex_a2_11_154_r04',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      words: ['This', 'hotel', 'is', 'not', 'as', 'luxurious', 'as', 'the', 'resort.'],
      correctAnswer: 'This hotel is not as luxurious as the resort.',
      explanation: 'Subject + Verb + not as + Adjective + as + Object.'
    },
    {
      id: 'ex_a2_11_154_r05',
      type: 'translation',
      prompt: 'Translate into English: "सब बातों पर विचार करने के बाद, यह हमारे लिए सबसे अच्छा सौदा है।"',
      targetSentence: 'All things considered, this is the best deal for us.',
      correctAnswer: 'All things considered, this is the best deal for us.',
      explanation: '"All things considered, this is the best deal for us" uses standard idioms.'
    }
  ],
  assessment: [
    {
      id: 'ex_a2_11_154_a01',
      type: 'multiple_choice',
      prompt: 'Which response provides the best comparative advice?\nA: "Should I take the local train or the express?"\nB: "____"',
      options: [
        'The express is slightly more expensive, but considerably faster and more comfortable.',
        'The express is more faster so you take it.',
        'The local train is not as slower as the express.',
        'All things consider, both are same.'
      ],
      correctAnswer: 'The express is slightly more expensive, but considerably faster and more comfortable.',
      explanation: 'Uses appropriate comparative intensifiers and balanced reasoning.'
    },
    {
      id: 'ex_a2_11_154_a02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Renting an apartment outside the center is far more _____ than living in the city."',
      correctAnswer: 'affordable',
      explanation: '"affordable" means reasonably priced.'
    },
    {
      id: 'ex_a2_11_154_a03',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nShopper: "Which washing machine lasts longer?"\nClerk: "_____"',
      options: [
        'Model X is built with stainless steel, so it is far more durable than Model Y.',
        'Model X is more cheaper than Model Y.',
        'Model X is not as durable than Model Y.',
        'Because of steel, it is more better.'
      ],
      correctAnswer: 'Model X is built with stainless steel, so it is far more durable than Model Y.',
      explanation: 'Accurate comparative construction with "far more durable than".'
    },
    {
      id: 'ex_a2_11_154_a04',
      type: 'speaking',
      prompt: 'Read aloud clearly with natural rhythm: "All things considered, the hybrid vehicle offers the best value for money due to lower fuel consumption."',
      targetSentence: 'All things considered, the hybrid vehicle offers the best value for money due to lower fuel consumption.',
      correctAnswer: 'All things considered, the hybrid vehicle offers the best value for money due to lower fuel consumption.',
      explanation: 'Ensure smooth pronunciation of "considered", "vehicle", and "consumption".'
    },
    {
      id: 'ex_a2_11_154_a05',
      type: 'translation',
      prompt: 'Translate into English: "यह नया सॉफ्टवेयर पुराने संस्करण की तुलना में कहीं अधिक विश्वसनीय है।"',
      targetSentence: 'This new software is far more reliable than the old version.',
      correctAnswer: 'This new software is far more reliable than the old version.',
      explanation: '"far more reliable than" accurately translates "कहीं अधिक विश्वसनीय".'
    }
  ]
};

// =========================================================================
// LESSON 155: Planning Social Events, Celebrations & Organizing Activities
// =========================================================================
export const LESSON_155_CONFIG: LessonConfigA2 = {
  num: 155,
  title: 'Planning Social Events, Celebrations & Organizing Activities',
  icon: '🎉',
  estMin: 25,
  objTitle: 'Coordinating Event Logistics, Future Intentions & Suggestions with "Shall We"',
  objDesc: 'Learn to organize gatherings, book venues, arrange refreshments, express fixed future plans with Present Continuous ("We are hosting a party on Friday"), intentions with "going to", and make collaborative suggestions with "Shall we...?".',
  objHi: 'समारोहों और कार्यक्रमों की योजना बनाना, "be going to", प्रेजेंट कंटीन्यूअस और "Shall we...?" के साथ कार्यक्रम का समन्वय करना सीखें।',
  objEs: 'Organizar eventos y celebraciones usando Present Continuous para planes fijos, "going to" para intenciones y "Shall we...?" para sugerencias.',
  canDo: [
    'I can plan and coordinate an event, including venue, guest list, and catering.',
    'I can use the Present Continuous to talk about confirmed future arrangements.',
    'I can make spontaneous and collaborative group suggestions using "Shall we...?".',
    'I can delegate party preparations and confirm attendance numbers.'
  ],
  canDoHi: [
    'मैं स्थल, अतिथि सूची और खानपान सहित किसी कार्यक्रम की योजना बना सकता हूँ।',
    'मैं निश्चित भविष्य की व्यवस्थाओं के बारे में बात करने के लिए प्रेजेंट कंटीन्यूअस का उपयोग कर सकता हूँ।',
    'मैं "Shall we...?" का उपयोग करके समूह के लिए सुझाव दे सकता हूँ।',
    'मैं पार्टी की तैयारियों को बांट सकता हूँ और उपस्थित लोगों की संख्या की पुष्टि कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo planificar y coordinar un evento, incluyendo el lugar, la lista de invitados y el catering.',
    'Puedo usar el Present Continuous para hablar de planes futuros confirmados.',
    'Puedo hacer sugerencias de grupo usando "Shall we...?".',
    'Puedo delegar preparativos para una fiesta y confirmar la asistencia.'
  ],
  vocab: [
    { w: 'celebration', p: '/ˌselɪˈbreɪʃn/', m: 'the action of marking one\'s pleasure at an important event or occasion', hi: 'उत्सव / समारोह', es: 'celebración / fiesta', fr: 'célébration', de: 'Feier', pt: 'celebração', zh: '庆祝', ar: 'احتفال', ja: '祝賀 / お祝い', ru: 'празднование', ex: 'We are organizing a surprise celebration for Nina\'s promotion.', exHi: 'हम नीना की पदोन्नति के लिए एक सरप्राइज उत्सव का आयोजन कर रहे हैं।', es: 'Estamos organizando una celebración sorpresa por el ascenso de Nina.', ic: '🎊' },
    { w: 'venue', p: '/ˈvenjuː/', m: 'the place where something happens, especially an organized event', hi: 'कार्यक्रम स्थल / जगह', es: 'lugar del evento / sede', fr: 'lieu', de: 'Veranstaltungsort', pt: 'local do evento', zh: '场地', ar: 'مكان الفعالية', ja: '会場', ru: 'место проведения', ex: 'The rooftop terrace is the perfect venue for our summer party.', exHi: 'रूफटॉप टैरेस हमारी समर पार्टी के लिए एकदम सही स्थल है।', exEs: 'La terraza de la azotea es el lugar perfecto para nuestra fiesta de verano.', ic: '🏛️' },
    { w: 'invitation', p: '/ˌɪnvɪˈteɪʃn/', m: 'a written or spoken request inviting someone to attend an event', hi: 'निमंत्रण / न्योता', es: 'invitación', fr: 'invitation', de: 'Einladung', pt: 'convite', zh: '邀请', ar: 'دعوة', ja: '招待 / 招待状', ru: 'приглашение', ex: 'Did you send out the digital invitations for the farewell dinner?', exHi: 'क्या आपने विदाई रात्रिभोज के लिए डिजिटल निमंत्रण भेजे थे?', exEs: '¿Enviaste las invitaciones digitales para la cena de despedida?', ic: '💌' },
    { w: 'refreshments', p: '/rɪˈfreʃmənts/', m: 'food and drinks provided at a conference, meeting, or event', hi: 'जलपान / नाश्ता और पेय', es: 'refrigerios / bebidas y aperitivos', fr: 'rafraîchissements', de: 'Erfrischungen', pt: 'lanches e bebidas', zh: '点心饮料', ar: 'مرطبات / مأكولات خفيفة', ja: '軽食・飲み物', ru: 'угощения / напитки', ex: 'Complimentary refreshments will be served during the intermission.', exHi: 'मध्यांतर के दौरान निःशुल्क जलपान परोसा जाएगा।', exEs: 'Se servirán refrigerios de cortesía durante el intermedio.', ic: '🥪' },
    { w: 'caterer', p: '/ˈkeɪtərə/', m: 'a person or company providing food and drink at a social event', hi: 'खानपान प्रबंधक / कैटरर', es: 'servicio de catering / banquetes', fr: 'traiteur', de: 'Caterer', pt: 'serviço de bufê', zh: '宴席承办商', ar: 'متعهد تقديم الطعام', ja: 'ケータリング業者', ru: 'кейтерер / поставщик питания', ex: 'We hired a professional caterer who specializes in Mediterranean cuisine.', exHi: 'हमने एक पेशेवर कैटरर को काम पर रखा है जो भूमध्यसागरीय व्यंजनों में माहिर है।', exEs: 'Contratamos a un servicio de banquetes especializado en cocina mediterránea.', ic: '👨‍🍳' },
    { w: 'attendee', p: '/əˌtenˈdiː/', m: 'a person who attends a conference or event', hi: 'उपस्थित व्यक्ति / प्रतिभागी', es: 'asistente / participante', fr: 'participant', de: 'Teilnehmer', pt: 'participante', zh: '与会者', ar: 'حاضر / مشارك', ja: '出席者', ru: 'участник / присутствующий', ex: 'Over fifty attendees confirmed their presence for the workshop.', exHi: 'कार्यशाला के लिए पचास से अधिक प्रतिभागियों ने अपनी उपस्थिति की पुष्टि की।', exEs: 'Más de cincuenta asistentes confirmaron su presencia para el taller.', ic: '👥' },
    { w: 'decorate', p: '/ˈdekəreɪt/', m: 'make something look more attractive by adding ornaments or color', hi: 'सजाना / संवारना', es: 'decorar', fr: 'décorer', de: 'dekorieren / schmücken', pt: 'decorar', zh: '装饰', ar: 'يزين', ja: '飾り付ける', ru: 'украшать', ex: 'We will decorate the hall with fairy lights and colorful banners.', exHi: 'हम हॉल को फेयरी लाइट्स और रंगीन बैनरों से सजाएंगे।', exEs: 'Decoraremos el salón con luces y pancartas coloridas.', ic: '🎈' },
    { w: 'organize', p: '/ˈɔːɡənaɪz/', m: 'make arrangements or preparations for an event or activity', hi: 'आयोजित करना / व्यवस्था करना', es: 'organizar', fr: 'organiser', de: 'organisieren', pt: 'organizar', zh: '组织', ar: 'ينظم', ja: '企画する / 組織する', ru: 'организовывать', ex: 'Who is going to organize the team building games?', exHi: 'टीम निर्माण खेलों का आयोजन कौन करने जा रहा है?', exEs: '¿Quién va a organizar los juegos de integración de equipo?', ic: '📋' },
    { w: 'itinerary', p: '/aɪˈtɪnərəri/', m: 'a planned route or journey; an event schedule', hi: 'यात्रा कार्यक्रम / कार्यक्रम सूची', es: 'itinerario / programa', fr: 'itinéraire', de: 'Reiseplan / Ablauf', pt: 'itinerário', zh: '行程', ar: 'برنامج الرحلة', ja: '旅程 / スケジュール', ru: 'план поездки / расписание', ex: 'The party itinerary includes dinner, speeches, and live acoustic music.', exHi: 'पार्टी के कार्यक्रम में रात का खाना, भाषण और लाइव ध्वनिक संगीत शामिल है।', exEs: 'El itinerario de la fiesta incluye cena, discursos y música acústica en vivo.', ic: '🗺️' },
    { w: 'gathering', p: '/ˈɡæðərɪŋ/', m: 'an assembly or meeting of people, especially for a social purpose', hi: 'सभा / मिलन समारोह', es: 'reunión / encuentro social', fr: 'rassemblement', de: 'Treffen / Zusammenkunft', pt: 'reunião / encontro', zh: '聚会', ar: 'تجمع / لقاء', ja: '集まり / 会合', ru: 'сбор / встреча', ex: 'Our family hosts an informal gathering every holiday weekend.', exHi: 'हमारा परिवार हर छुट्टी के सप्ताहांत में एक अनौपचारिक मिलन समारोह आयोजित करता है।', exEs: 'Nuestra familia organiza un encuentro informal cada fin de semana festivo.', ic: '🏡' },
    { w: 'entertainment', p: '/ˌentəˈteɪnmənt/', m: 'the action of providing amusement or enjoyment', hi: 'मनोरंजन', es: 'entretenimiento / animación', fr: 'divertissement', de: 'Unterhaltung', pt: 'entretenimento', zh: '娱乐', ar: 'ترفيه', ja: 'エンターテインメント', ru: 'развлечение', ex: 'We booked a local jazz band for our evening entertainment.', exHi: 'हमने अपने शाम के मनोरंजन के लिए एक स्थानीय जैज़ बैंड बुक किया।', exEs: 'Reservamos una banda local de jazz para nuestro entretenimiento nocturno.', ic: '🎷' },
    { w: 'budget', p: '/ˈbʌdʒɪt/', m: 'an estimate of income and expenditure for a set period', hi: 'बजट / आय-व्यय योजना', es: 'presupuesto', fr: 'budget', de: 'Budget', pt: 'orçamento', zh: '预算', ar: 'ميزانية', ja: '予算', ru: 'бюджет', ex: 'We must keep the total celebration expenses within our allocated budget.', exHi: 'हमें कुल उत्सव खर्चों को अपने आबंटित बजट के भीतर रखना होगा।', exEs: 'Debemos mantener los gastos totales de la celebración dentro de nuestro presupuesto asignado.', ic: '💰' },
    { w: 'host', p: '/həʊst/', m: 'a person who receives or entertains other people as guests', hi: 'मेजबान / मेजबानी करना', es: 'anfitrión / ser anfitrión', fr: 'hôte / accueillir', de: 'Gastgeber', pt: 'anfitrião', zh: '主办 / 主持', ar: 'يستضيف / مضيف', ja: '主催者 / 主催する', ru: 'хозяин / принимать гостей', ex: 'Raj and Priya are hosting a housewarming party this Saturday.', exHi: 'राज और प्रिया इस शनिवार को गृह प्रवेश पार्टी की मेजबानी कर रहे हैं।', exEs: 'Raj y Priya son los anfitriones de una fiesta de inauguración este sábado.', ic: '🏠' },
    { w: 'reserve', p: '/rɪˈzɜːv/', m: 'arrange for a room, seat, or venue to be kept for use by a particular person', hi: 'आरक्षित करना / बुक करना', es: 'reservar', fr: 'réserver', de: 'reservieren', pt: 'reservar', zh: '预订', ar: 'يحجز', ja: '予約する', ru: 'бронировать', ex: 'I reserved a private dining hall for twenty guests.', exHi: 'मैंने बीस मेहमानों के लिए एक निजी डाइनिंग हॉल आरक्षित किया।', exEs: 'Reservé un comedor privado para veinte invitados.', ic: '🏷️' },
    { w: 'soundtrack', p: '/ˈsaʊndtræk/', m: 'a selection of recorded music for an occasion or party playlist', hi: 'संगीत सूची / साउंडट्रैक', es: 'lista de música / banda sonora', fr: 'bande sonore', de: 'Soundtrack / Playlist', pt: 'trilha sonora / playlist', zh: '背景音乐 / 歌单', ar: 'قائمة تشغيل الموسيقى', ja: '音楽プレイリスト', ru: 'плейлист / звуковая дорожка', ex: 'Leo curated an upbeat soundtrack for the reception.', exHi: 'लियो ने स्वागत समारोह के लिए एक उत्साहजनक संगीत सूची तैयार की।', exEs: 'Leo preparó una lista de música alegre para la recepción.', ic: '🎵' },
    { w: 'beverage', p: '/ˈbevərɪdʒ/', m: 'a drink, especially one other than water', hi: 'पेय पदार्थ', es: 'bebida', fr: 'boisson', de: 'Getränk', pt: 'bebida', zh: '饮料', ar: 'مشروب', ja: '飲み物', ru: 'напиток', ex: 'Hot and cold beverages will be available at the entrance counter.', exHi: 'प्रवेश काउंटर पर गर्म और ठंडे पेय पदार्थ उपलब्ध होंगे।', exEs: 'Habrá bebidas frías y calientes disponibles en el mostrador de entrada.', ic: '🍹' },
    { w: 'anniversary', p: '/ˌænɪˈvɜːsəri/', m: 'the date on which an event took place in a previous year', hi: 'वर्षगांठ / सालगिरह', es: 'aniversario', fr: 'anniversaire', de: 'Jubiläum / Jahrestag', pt: 'aniversário', zh: '周年纪念日', ar: 'ذكرى سنوية', ja: '記念日', ru: 'годовщина / юбилей', ex: 'The company is celebrating its tenth anniversary next month.', exHi: 'कंपनी अगले महीने अपनी दसवीं वर्षगांठ मना रही है।', exEs: 'La empresa celebra su décimo aniversario el próximo mes.', ic: '🎂' },
    { w: 'ceremony', p: '/ˈserəməni/', m: 'a formal religious or public occasion, typically one celebrating a particular event', hi: 'समारोह / अनुष्ठान', es: 'ceremonia / acto formal', fr: 'cérémonie', de: 'Zeremonie', pt: 'cerimônia', zh: '仪式', ar: 'مراسم / حفل', ja: '式典', ru: 'церемония', ex: 'The awards ceremony begins promptly at seven o\'clock.', exHi: 'पुरस्कार समारोह ठीक सात बजे शुरू होता है।', exEs: 'La ceremonia de entrega de premios comienza puntualmente a las siete en punto.', ic: '🏆' },
    { w: 'headcount', p: '/ˈhedkaʊnt/', m: 'a total count of people, especially attendees at an event', hi: 'उपस्थित लोगों की कुल संख्या', es: 'conteo de asistentes / número de personas', fr: 'nombre de participants', de: 'Kopfzahl / Teilnehmerzahl', pt: 'contagem de pessoas', zh: '总人数', ar: 'إجمالي عدد الحضور', ja: '参加人数', ru: 'количество участников', ex: 'We need an exact headcount before placing the catering order.', exHi: 'कैटरिंग ऑर्डर देने से पहले हमें लोगों की सटीक संख्या चाहिए।', exEs: 'Necesitamos un recuento exacto antes de hacer el pedido del banquete.', ic: '🔢' },
    { w: 'spontaneous', p: '/spɒnˈteɪniəs/', m: 'performed or occurring as a result of a sudden impulse and without premeditation', hi: 'सहज / अचानक', es: 'espontáneo', fr: 'spontané', de: 'spontan', pt: 'espontâneo', zh: '自发的', ar: 'عفوي', ja: '自発的な / その場の思いつきの', ru: 'спонтанный', ex: 'We threw a spontaneous pizza party after completing the exam.', exHi: 'परीक्षा पूरी करने के बाद हमने अचानक पिज्जा पार्टी रखी।', exEs: 'Organizamos una fiesta de pizza espontánea después de terminar el examen.', ic: '🍕' }
  ],
  chunks: [
    { phrase: 'Shall we...?', meaning: 'collaborative suggestion formula for group decisions', hi: 'क्या हम ... करें?', es: '¿Hacemos... ? / ¿Qué tal si...?', fr: 'Et si nous... ?', de: 'Sollen wir...?', pt: 'Que tal nós...?', zh: '我们要不要...？', ar: 'هل نـ...؟', ja: '〜しましょうか？', ru: 'давайте мы...?', note: 'Used with base verb: "Shall we book the rooftop table?"', ic: '💡' },
    { phrase: 'send out invitations', meaning: 'distribute invitations to guests', hi: 'निमंत्रण भेजना', es: 'enviar invitaciones', fr: 'envoyer les invitations', de: 'Einladungen verschicken', pt: 'enviar convites', zh: '发送邀请函', ar: 'إرسال الدعوات', ja: '招待状を送る', ru: 'разослать приглашения', note: 'Standard collocation: "Let\'s send out invitations this morning."', ic: '💌' },
    { phrase: 'RSVP by', meaning: 'request for response to an invitation before a deadline', hi: 'तक उपस्थिति की पुष्टि करें', es: 'confirmar asistencia antes del', fr: 'répondre avant le', de: 'Rückmeldung bis zum', pt: 'confirmar presença até', zh: '请在...前回复', ar: 'يرجى تأكيد الحضور قبل', ja: '〜までに返信してください', ru: 'подтвердить участие до', note: 'Abbreviation from French Répondez s\'il vous plaît: "Please RSVP by Wednesday."', ic: '📅' },
    { phrase: 'host a party', meaning: 'organize and provide hospitality for a social gathering', hi: 'पार्टी की मेजबानी करना', es: 'organizar una fiesta / ser anfitrión', fr: 'organiser une fête', de: 'eine Party veranstalten', pt: 'dar uma festa', zh: '举办派对', ar: 'إقامة حفلة', ja: 'パーティーを開く', ru: 'устроить вечеринку', note: 'Common verb-noun collocation: "They are hosting a party."', ic: '🎉' },
    { phrase: 'make arrangements for', meaning: 'plan and prepare logistics for an upcoming event', hi: 'के लिए व्यवस्था करना', es: 'hacer preparativos para', fr: 'prendre des dispositions pour', de: 'Vorkehrungen treffen für', pt: 'fazer arranjos para', zh: '为...做安排', ar: 'القيام بالترتيبات لـ', ja: '〜の手配をする', ru: 'сделать приготовления для', note: 'Formal planning phrase: "I will make arrangements for the audio system."', ic: '📋' },
    { phrase: 'in charge of catering', meaning: 'having responsibility for food and drink provision', hi: 'खानपान का प्रभारी होना', es: 'a cargo de la comida y bebida', fr: 'en charge de la restauration', de: 'zuständig für das Catering', pt: 'encarregado do bufê', zh: '负责餐饮', ar: 'مسؤول عن تقديم الطعام', ja: 'ケータリング担当', ru: 'отвечающий за питание', note: 'Describes role assignment: "Who is in charge of catering?"', ic: '🍽️' },
    { phrase: 'throw a celebration', meaning: 'hold an informal party or social event', hi: 'समारोह का आयोजन करना', es: 'hacer una celebración', fr: 'organiser une fête', de: 'eine Feier schmeißen', pt: 'dar uma comemoração', zh: '举办庆祝会', ar: 'إقامة احتفال', ja: 'お祝いをする', ru: 'устроить праздник', note: 'Casual idiom: "Let\'s throw a celebration for his graduation."', ic: '🥳' },
    { phrase: 'confirm attendance', meaning: 'officially verify that one will be present at an event', hi: 'उपस्थिति की पुष्टि करना', es: 'confirmar asistencia', fr: 'confirmer sa présence', de: 'die Teilnahme bestätigen', pt: 'confirmar presença', zh: '确认出席', ar: 'تأكيد الحضور', ja: '出席を確認する', ru: 'подтвердить присутствие', note: 'Formal register: "Please confirm your attendance by Friday."', ic: '✅' }
  ],
  grammar: {
    title: 'Future Arrangements (Present Continuous) & Group Suggestions ("Shall We")',
    concept: 'Using the Present Continuous for fixed, scheduled social arrangements with dates/venues ("We are meeting at eight"), "be going to" for intentions, and "Shall we + base verb" for group suggestions.',
    patterns: [
      {
        title: 'Fixed Social Arrangements: Present Continuous for Future',
        structure: 'Subject + am / is / are + Verb-ing + Future Time Expression',
        rule: 'Use Present Continuous when plans are already arranged and fixed with other people or booked at a venue.',
        examples: [
          { en: 'We are hosting a dinner party at the bistro this Friday.', hi: 'हम इस शुक्रवार को बिस्ट्रो में एक डिनर पार्टी की मेजबानी कर रहे हैं।', es: 'Estamos organizando una cena en el bistró este viernes.' },
          { en: 'She is flying to Rome next Tuesday for the wedding ceremony.', hi: 'वह शादी समारोह के लिए अगले मंगलवार को रोम जा रही है।', es: 'Ella viaja a Roma el próximo martes para la ceremonia de boda.' }
        ]
      },
      {
        title: 'Collaborative Suggestions & Inquiries: "Shall we ...?"',
        structure: 'Shall we + Base Verb + Rest?',
        rule: 'Use "Shall we" with first-person plural ("we") to make spontaneous offers or propose group decisions.',
        examples: [
          { en: 'Shall we order the food from the Italian caterer?', hi: 'क्या हम इतालवी कैटरर से खाना मंगवाएं?', es: '¿Pedimos la comida al servicio de catering italiano?' },
          { en: 'Shall we check the weather forecast before booking the garden?', hi: 'क्या हम बगीचे को बुक करने से पहले मौसम के पूर्वानुमान की जांच करें?', es: '¿Revisamos el pronóstico del tiempo antes de reservar el jardín?' }
        ]
      },
      {
        title: 'Intentions and Preparations: "be going to + Base Verb"',
        structure: 'Subject + am / is / are going to + Base Verb',
        rule: 'Use "going to" when expressing personal intentions or preparations that have been decided prior to the moment of speaking.',
        examples: [
          { en: 'I am going to decorate the room with colorful streamers.', hi: 'मैं कमरे को रंगीन फीतों से सजाने जा रहा हूँ।', es: 'Voy a decorar la habitación con serpentinas de colores.' },
          { en: 'They are going to send out invitations later this afternoon.', hi: 'वे आज दोपहर बाद निमंत्रण भेजने जा रहे हैं।', es: 'Van a enviar las invitaciones más tarde esta tarde.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'Shall we to book the private hall now?',
      cor: 'Shall we book the private hall now?',
      exp: 'Modal "Shall" must be followed by base verb without "to".',
      hi: '"Shall we" के बाद "to" न लगाएं; सीधे base verb का प्रयोग करें।',
      es: '"Shall we" va seguido del verbo base sin "to".'
    },
    {
      inc: 'We host a party this Saturday at eight.',
      cor: 'We are hosting a party this Saturday at eight.',
      exp: 'Use the Present Continuous ("are hosting") for specific, arranged future events.',
      hi: 'निश्चित भविष्य की व्यवस्था के लिए Present Continuous ("are hosting") का उपयोग करें।',
      es: 'Usa el Present Continuous ("are hosting") para planes futuros fijados.'
    },
    {
      inc: 'Please make an RSVP before Monday.',
      cor: 'Please RSVP by Monday.',
      exp: 'Use "RSVP" as a verb directly: "RSVP by Monday" (not "make an RSVP before").',
      hi: '"RSVP by Monday" का प्रयोग करें।',
      es: 'Usa "RSVP by Monday" directamente como verbo.'
    },
    {
      inc: 'Who is in charge for the decorations?',
      cor: 'Who is in charge of the decorations?',
      exp: 'The correct preposition is "in charge of" (not "for").',
      hi: '"in charge of" सही वाक्यांश है, "in charge for" नहीं।',
      es: 'La preposición correcta es "in charge of".'
    },
    {
      inc: 'Will we to order pizza tonight?',
      cor: 'Shall we order pizza tonight?',
      exp: 'For group suggestions, use "Shall we order", not "Will we to order".',
      hi: 'समूह के सुझाव के लिए "Shall we order" का प्रयोग करें।',
      es: 'Para sugerencias grupales, usa "Shall we order".'
    }
  ],
  dialogues: [
    {
      title: 'Organizing a Surprise Retirement Party',
      context: 'Carla and Marcus plan the schedule and refreshments for their manager\'s party.',
      charA: { name: 'Carla', av: '👩‍💼', role: 'Staff Coordinator' },
      charB: { name: 'Marcus', av: '👨‍💼', role: 'Team Lead' },
      turns: [
        { spk: 'Carla', text: 'Marcus, we are hosting Mr. Henderson\'s retirement party next Friday evening.', hi: 'मार्कस, हम अगले शुक्रवार की शाम को श्री हेंडरसन की सेवानिवृत्ति पार्टी की मेजबानी कर रहे हैं।', es: 'Marcus, organizaremos la fiesta de jubilación del Sr. Henderson el próximo viernes por la noche.' },
        { spk: 'Marcus', text: 'Exciting! Shall we reserve the lakeside restaurant terrace for the venue?', hi: 'रोमांचक! क्या हम कार्यक्रम स्थल के लिए झील के किनारे वाले रेस्तरां की छत आरक्षित करें?', es: '¡Emocionante! ¿Reservamos la terraza del restaurante junto al lago para el lugar?' },
        { spk: 'Carla', text: 'Great idea. I am in charge of sending out digital invitations and tracking headcount.', hi: 'बहुत अच्छा विचार। मैं डिजिटल निमंत्रण भेजने और उपस्थित लोगों की संख्या पर नज़र रखने की प्रभारी हूँ।', es: 'Gran idea. Estoy a cargo de enviar invitaciones digitales y hacer el recuento de personas.' },
        { spk: 'Marcus', text: 'And I am going to coordinate with the caterer to arrange vegetarian refreshments.', hi: 'और मैं शाकाहारी जलपान की व्यवस्था करने के लिए कैटरर के साथ समन्वय करने जा रहा हूँ।', es: 'Y voy a coordinar con el servicio de banquetes para organizar refrigerios vegetarianos.' }
      ]
    },
    {
      title: 'Planning Weekend Activities with Friends',
      context: 'Tina and Omar plan a spontaneous picnic and divide food preparations.',
      charA: { name: 'Tina', av: '👩', role: 'Friend' },
      charB: { name: 'Omar', av: '👨', role: 'Friend' },
      turns: [
        { spk: 'Tina', text: 'Omar, the forecast for Sunday is sunny. Shall we organize a picnic in the botanical garden?', hi: 'उमर, रविवार का मौसम धूप वाला रहने का अनुमान है। क्या हम बॉटनिकल गार्डन में पिकनिक का आयोजन करें?', es: 'Omar, el pronóstico para el domingo es soleado. ¿Organizamos un picnic en el jardín botánico?' },
        { spk: 'Omar', text: 'That sounds fantastic! We are meeting our classmates at eleven in the morning.', hi: 'यह बहुत बढ़िया लगता है! हम सुबह ग्यारह बजे अपने सहपाठियों से मिल रहे हैं।', es: '¡Eso suena fantástico! Nos reuniremos con nuestros compañeros de clase a las once de la mañana.' },
        { spk: 'Tina', text: 'I am going to bring homemade sandwiches and fresh fruit beverages.', hi: 'मैं घर के बने सैंडविच और ताजे फलों के पेय लाने जा रही हूँ।', es: 'Voy a llevar sándwiches caseros y bebidas de frutas frescas.' },
        { spk: 'Omar', text: 'And I will bring a portable speaker so we have an upbeat soundtrack for the afternoon.', hi: 'और मैं एक पोर्टेबल स्पीकर लाऊंगा ताकि हमारे पास दोपहर के लिए एक खुशनुमा संगीत सूची हो।', es: 'Y yo traeré un altavoz portátil para que tengamos buena música por la tarde.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_a2_11_155_p01',
      type: 'multiple_choice',
      prompt: 'Which modal verb is used for polite group suggestions: "_____ we reserve the private room for dinner?"',
      options: ['Shall', 'Will', 'Must', 'Ought'],
      correctAnswer: 'Shall',
      explanation: '"Shall we + base verb" is the classic suggestion formula for groups.'
    },
    {
      id: 'ex_a2_11_155_p02',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the correct preposition: "Who is in charge _____ booking the DJ for the party?"',
      correctAnswer: 'of',
      explanation: 'The phrase is "in charge of".'
    },
    {
      id: 'ex_a2_11_155_p03',
      type: 'word_ordering',
      prompt: 'Order the words to create a sentence describing future arrangements:',
      words: ['We', 'are', 'hosting', 'a', 'party', 'this', 'Friday', 'night.'],
      correctAnswer: 'We are hosting a party this Friday night.',
      explanation: 'Subject + are hosting + Object + Time expression.'
    },
    {
      id: 'ex_a2_11_155_p04',
      type: 'translation',
      prompt: 'Translate into English: "क्या हम पार्टी के लिए केक मंगवाएं?"',
      targetSentence: 'Shall we order the cake for the party?',
      correctAnswer: 'Shall we order the cake for the party?',
      explanation: '"Shall we order...?" translates as क्या हम मंगवाएं?'
    },
    {
      id: 'ex_a2_11_155_p05',
      type: 'error_correction',
      prompt: 'Find and correct the error:',
      errorSentence: 'Shall we to invite our new neighbors to the barbecue?',
      correctAnswer: 'Shall we invite our new neighbors to the barbecue?',
      explanation: 'Modal verb "Shall" takes a bare infinitive without "to".'
    },
    {
      id: 'ex_a2_11_155_p06',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses a confirmed future arrangement?',
      options: [
        'We are celebrating David\'s birthday at the Italian bistro tomorrow.',
        'We celebrate David\'s birthday at the Italian bistro tomorrow.',
        'We shall celebrating David\'s birthday at the Italian bistro tomorrow.',
        'We have celebrated David\'s birthday at the Italian bistro tomorrow.'
      ],
      correctAnswer: 'We are celebrating David\'s birthday at the Italian bistro tomorrow.',
      explanation: 'Present Continuous is used for fixed social arrangements.'
    },
    {
      id: 'ex_a2_11_155_p07',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Please _____ by Wednesday so we can finalize the catering numbers."',
      correctAnswer: 'RSVP',
      explanation: '"RSVP" means to respond and confirm attendance.'
    },
    {
      id: 'ex_a2_11_155_p08',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      words: ['They', 'are', 'going', 'to', 'decorate', 'the', 'hall', 'tomorrow.'],
      correctAnswer: 'They are going to decorate the hall tomorrow.',
      explanation: 'Subject + are going to + Base Verb + Object + Time.'
    },
    {
      id: 'ex_a2_11_155_p09',
      type: 'translation',
      prompt: 'Translate into English: "हम अगले सप्ताहांत निमंत्रण भेजने जा रहे हैं।"',
      targetSentence: 'We are going to send out invitations next weekend.',
      correctAnswer: 'We are going to send out invitations next weekend.',
      explanation: '"send out invitations" is the standard collocation.'
    },
    {
      id: 'ex_a2_11_155_p10',
      type: 'error_correction',
      prompt: 'Fix the preposition error:',
      errorSentence: 'She is in charge for purchasing beverages.',
      correctAnswer: 'She is in charge of purchasing beverages.',
      explanation: 'Use "in charge of", not "in charge for".'
    },
    {
      id: 'ex_a2_11_155_p11',
      type: 'multiple_choice',
      prompt: 'What does "venue" mean?',
      options: [
        'The location or place where an event is held',
        'A list of dishes on a food menu',
        'A formal written apology for being absent',
        'A musical instrument used by a band'
      ],
      correctAnswer: 'The location or place where an event is held',
      explanation: 'A "venue" is the location of an event.'
    },
    {
      id: 'ex_a2_11_155_p12',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "We need an accurate _____ before placing the lunch order."',
      correctAnswer: 'headcount',
      explanation: '"headcount" is the total number of people attending.'
    },
    {
      id: 'ex_a2_11_155_p13',
      type: 'word_ordering',
      prompt: 'Arrange into a polite suggestion:',
      words: ['Shall', 'we', 'check', 'the', 'guest', 'list', 'once', 'more?'],
      correctAnswer: 'Shall we check the guest list once more?',
      explanation: 'Shall we + Base Verb + Object + Adverbial phrase?'
    },
    {
      id: 'ex_a2_11_155_p14',
      type: 'translation',
      prompt: 'Translate into English: "वे अपनी शादी की सालगिरह मना रहे हैं।"',
      targetSentence: 'They are celebrating their wedding anniversary.',
      correctAnswer: 'They are celebrating their wedding anniversary.',
      explanation: '"wedding anniversary" translates as शादी की सालगिरह.'
    },
    {
      id: 'ex_a2_11_155_p15',
      type: 'multiple_choice',
      prompt: 'Choose the most suitable word: "Light _____ such as fruit platters and iced tea will be available."',
      options: ['refreshments', 'itineraries', 'venues', 'ceremonies'],
      correctAnswer: 'refreshments',
      explanation: '"Refreshments" refers to food snacks and drinks.'
    }
  ],
  review: [
    {
      id: 'ex_a2_11_155_r01',
      type: 'multiple_choice',
      prompt: 'Which form correctly asks for a group suggestion?',
      options: [
        'Shall we book the photographer today?',
        'Will we to book the photographer today?',
        'Do we shall book the photographer today?',
        'Shall we booking the photographer today?'
      ],
      correctAnswer: 'Shall we book the photographer today?',
      explanation: '"Shall we + base verb" is grammatically standard.'
    },
    {
      id: 'ex_a2_11_155_r02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Maria is _____ a farewell lunch for our department on Thursday."',
      correctAnswer: 'hosting',
      explanation: 'Present continuous "is hosting" describes a scheduled future event.'
    },
    {
      id: 'ex_a2_11_155_r03',
      type: 'error_correction',
      prompt: 'Correct the error:',
      errorSentence: 'We are going decorate the banquet hall with balloons.',
      correctAnswer: 'We are going to decorate the banquet hall with balloons.',
      explanation: 'Add "to": "going to decorate".'
    },
    {
      id: 'ex_a2_11_155_r04',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      words: ['Please', 'confirm', 'your', 'attendance', 'by', 'Friday', 'afternoon.'],
      correctAnswer: 'Please confirm your attendance by Friday afternoon.',
      explanation: 'Imperative polite request with time deadline.'
    },
    {
      id: 'ex_a2_11_155_r05',
      type: 'translation',
      prompt: 'Translate into English: "क्या हम कार्यक्रम के लिए डीजे बुक करें?"',
      targetSentence: 'Shall we book the DJ for the event?',
      correctAnswer: 'Shall we book the DJ for the event?',
      explanation: '"Shall we book the DJ for the event?" accurately translates the suggestion.'
    }
  ],
  assessment: [
    {
      id: 'ex_a2_11_155_a01',
      type: 'multiple_choice',
      prompt: 'Which sentence best coordinates party tasks among friends?',
      options: [
        'I am in charge of ordering refreshments, whereas you decorate the terrace.',
        'I am whereas ordering food because you do nothing.',
        'Shall we for to buy pizza now?',
        'We hosting party yesterday night.'
      ],
      correctAnswer: 'I am in charge of ordering refreshments, whereas you decorate the terrace.',
      explanation: 'Combines responsibility idiom "in charge of" with contrastive linker "whereas".'
    },
    {
      id: 'ex_a2_11_155_a02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Shall we _____ out the digital invitations before lunchtime?"',
      correctAnswer: 'send',
      explanation: 'Collocation is "send out invitations".'
    },
    {
      id: 'ex_a2_11_155_a03',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nFriend A: "The garden looks empty."\nFriend B: "_____"',
      options: [
        'Shall we hang some fairy lights and paper lanterns?',
        'We was decorating yesterday.',
        'Why not to leave it dark?',
        'Because of empty garden, nobody comes.'
      ],
      correctAnswer: 'Shall we hang some fairy lights and paper lanterns?',
      explanation: 'Offers an actionable, grammatically correct suggestion.'
    },
    {
      id: 'ex_a2_11_155_a04',
      type: 'speaking',
      prompt: 'Read aloud with enthusiasm: "We are hosting an anniversary celebration next Saturday, and over forty guests have confirmed their attendance!"',
      targetSentence: 'We are hosting an anniversary celebration next Saturday, and over forty guests have confirmed their attendance!',
      correctAnswer: 'We are hosting an anniversary celebration next Saturday, and over forty guests have confirmed their attendance!',
      explanation: 'Express positive excitement while keeping clear pronunciation of "anniversary" and "attendance".'
    },
    {
      id: 'ex_a2_11_155_a05',
      type: 'translation',
      prompt: 'Translate into English: "हम कल शाम को एक पार्टी आयोजित कर रहे हैं।"',
      targetSentence: 'We are hosting a party tomorrow evening.',
      correctAnswer: 'We are hosting a party tomorrow evening.',
      explanation: 'Uses Present Continuous "are hosting" for fixed future arrangements.'
    }
  ]
};

// =========================================================================
// LESSON 156: Social Invitations, Accepting, Declining & Giving Excuses
// =========================================================================
export const LESSON_156_CONFIG: LessonConfigA2 = {
  num: 156,
  title: 'Social Invitations, Accepting, Declining & Giving Excuses',
  icon: '💌',
  estMin: 25,
  objTitle: 'Extending Invitations, Polite Declines with Modals & Counter-Proposals',
  objDesc: 'Master inviting others using "Would you like to...?", enthusiastic acceptances ("I\'d love to!"), diplomatic refusals with "I\'m afraid I have to...", and proposing alternative times with "How about...?".',
  objHi: 'निमंत्रण देना ("Would you like to...?"), उत्साहपूर्वक स्वीकार करना, विनम्रतापूर्वक मना करना ("I\'m afraid...") और वैकल्पिक समय का प्रस्ताव देना सीखें।',
  objEs: 'Extender invitaciones ("Would you like to...?"), aceptar con entusiasmo, rechazar cortésmente con excusas ("I\'m afraid...") y proponer alternativas.',
  canDo: [
    'I can invite friends or colleagues to social events using "Would you like to...?" and "Are you free...?".',
    'I can accept invitations enthusiastically with details about timing.',
    'I can decline invitations politely by expressing regret and giving a clear, courteous excuse.',
    'I can suggest a counter-proposal or raincheck using "How about next week instead?".'
  ],
  canDoHi: [
    'मैं "Would you like to...?" का उपयोग करके सामाजिक कार्यक्रमों में आमंत्रित कर सकता हूँ।',
    'मैं उत्साहपूर्वक निमंत्रण स्वीकार कर सकता हूँ।',
    'मैं खेद व्यक्त करके और विनम्र कारण बताकर निमंत्रण को अस्वीकार कर सकता हूँ।',
    'मैं "How about next week instead?" का उपयोग करके वैकल्पिक समय का प्रस्ताव दे सकता हूँ।'
  ],
  canDoEs: [
    'Puedo invitar a amigos o colegas usando "Would you like to...?" y "Are you free...?".',
    'Puedo aceptar invitaciones con entusiasmo y confirmar detalles.',
    'Puedo rechazar invitaciones educadamente dando una excusa cortés.',
    'Puedo sugerir una fecha alternativa usando "How about...?".'
  ],
  vocab: [
    { w: 'invite', p: '/ɪnˈvaɪt/', m: 'make a polite, formal, or friendly request to someone to go somewhere or do something', hi: 'आमंत्रित करना / न्योता देना', es: 'invitar', fr: 'inviter', de: 'einladen', pt: 'convidar', zh: '邀请', ar: 'يدعو', ja: '招待する', ru: 'приглашать', ex: 'Would you like to invite your colleagues to the dinner?', exHi: 'क्या आप अपने सहकर्मियों को रात के खाने पर आमंत्रित करना चाहेंगे?', exEs: '¿Te gustaría invitar a tus colegas a cenar?', ic: '💌' },
    { w: 'accept', p: '/əkˈsept/', m: 'consent to receive or undertake an offer or invitation', hi: 'स्वीकार करना', es: 'aceptar', fr: 'accepter', de: 'annehmen / akzeptieren', pt: 'aceitar', zh: '接受', ar: 'يقبل', ja: '受け入れる', ru: 'принимать / соглашаться', ex: 'I am delighted to accept your kind invitation.', exHi: 'मुझे आपके उदार निमंत्रण को स्वीकार करते हुए बहुत खुशी हो रही है।', es: 'Estoy encantado de aceptar tu amable invitación.', ic: '✅' },
    { w: 'decline', p: '/dɪˈklaɪn/', m: 'politely refuse an invitation or offer', hi: 'अस्वीकार करना / मना करना', es: 'rechazar / declinar', fr: 'décliner / refuser', de: 'ablehnen', pt: 'recusar / declinar', zh: '谢绝', ar: 'يرفض بلباقة', ja: '辞退する / 断る', ru: 'отклонять / вежливо отказываться', ex: 'I must decline the invitation due to a prior family commitment.', exHi: 'पहले से तय पारिवारिक प्रतिबद्धता के कारण मुझे निमंत्रण अस्वीकार करना होगा।', exEs: 'Debo rechazar la invitación debido a un compromiso familiar previo.', ic: '❌' },
    { w: 'afraid', p: '/əˈfreɪd/', m: 'feeling regret or apologies for being unable to do something', hi: 'खेद होना / दुख होना', es: 'sintiendo pena / temeroso', fr: 'désolé / craindre', de: 'bedauernd', pt: 'lamento / receio', zh: '抱歉的', ar: 'يؤسفني', ja: '申し訳なく思う', ru: 'сожалеющий', ex: 'I am afraid I cannot join you this evening.', exHi: 'मुझे खेद है कि मैं आज शाम आपके साथ शामिल नहीं हो सकता।', es: 'Me temo que no puedo unirme a ustedes esta noche.', ic: '😔' },
    { w: 'commitment', p: '/kəˈmɪtmənt/', m: 'an engagement or obligation that restricts freedom of action', hi: 'प्रतिबद्धता / पूर्व निर्धारित कार्य', es: 'compromiso', fr: 'engagement', de: 'Verpflichtung', pt: 'compromisso', zh: '承诺 / 既定事务', ar: 'التزام', ja: '約束 / 予定', ru: 'обязательство / договоренность', ex: 'I have a previous commitment on Saturday afternoon.', exHi: 'शनिवार दोपहर को मेरी पहले से तय प्रतिबद्धता है।', exEs: 'Tengo un compromiso previo el sábado por la tarde.', ic: '📅' },
    { w: 'enthusiastic', p: '/ɪnˌθjuːziˈæstɪk/', m: 'having or showing intense and eager enjoyment, interest, or approval', hi: 'उत्साही / उत्सुक', es: 'entusiasta / emocionado', fr: 'enthousiaste', de: 'begeistert', pt: 'entusiasta', zh: '热情的', ar: 'متحمس', ja: '熱心な / 熱狂的な', ru: 'восторженный / энтузиаст', ex: 'Everyone was enthusiastic about the weekend mountain hike.', exHi: 'सप्ताहांत की पहाड़ी पदयात्रा को लेकर सभी लोग उत्साहित थे।', es: 'Todos estaban entusiasmados con la caminata de montaña del fin de semana.', ic: '😃' },
    { w: 'reschedule', p: '/ˌriːˈʃedjuːl/', m: 'change the time or date of a planned event', hi: 'पुनर्निर्धारित करना / नया समय तय करना', es: 'reprogramar / cambiar de fecha', fr: 'reprogrammer', de: 'umbuchen / verschieben', pt: 'reagendar', zh: '重新安排时间', ar: 'إعادة جدولة', ja: '日程を変更する', ru: 'переносить / перепланировать', ex: 'Could we reschedule our coffee meetup to next Wednesday?', exHi: 'क्या हम अपनी कॉफी मुलाकात को अगले बुधवार के लिए पुनर्निर्धारित कर सकते हैं?', exEs: '¿Podríamos reprogramar nuestro café para el próximo miércoles?', ic: '🔄' },
    { w: 'raincheck', p: '/ˈreɪntʃek/', m: 'a voucher or polite promise that an offer can be accepted at a later date', hi: 'अगली बार के लिए टालना (वादें के साथ)', es: 'dejarlo para otra ocasión', fr: 'remise à plus tard', de: 'Gutschein auf ein anderes Mal', pt: 'deixar para a próxima', zh: '改天赴约', ar: 'تأجيل لوقت لاحق', ja: 'またの機会に延期すること', ru: 'перенос на другой раз', ex: 'I am too busy tonight, but can I take a raincheck on dinner?', exHi: 'मैं आज रात बहुत व्यस्त हूँ, लेकिन क्या मैं रात के खाने को अगली बार के लिए टाल सकता हूँ?', exEs: 'Estoy demasiado ocupado esta noche, pero ¿puedo dejar la cena para otra ocasión?', ic: '🎟️' },
    { w: 'delighted', p: '/dɪˈlaɪtɪd/', m: 'feeling or showing great pleasure and happiness', hi: 'प्रसन्न / अति आनंदित', es: 'encantado / muy contento', fr: 'ravi', de: 'erfreut / entzückt', pt: 'encantado', zh: '高兴的', ar: 'مسرور للغاية', ja: '大喜びの', ru: 'очень рад / в восторге', ex: 'We would be delighted to attend your housewarming party.', exHi: 'हमें आपके गृह प्रवेश समारोह में शामिल होने पर बहुत खुशी होगी।', es: 'Estaríamos encantados de asistir a tu fiesta de inauguración.', ic: '✨' },
    { w: 'apology', p: '/əˈpɒlədʒi/', m: 'a regretful acknowledgment of an offense, failure, or inability to attend', hi: 'माफी / क्षमा याचना', es: 'disculpa', fr: 'excuse', de: 'Entschuldigung', pt: 'desculpa', zh: '道歉', ar: 'اعتذار', ja: 'お詫び', ru: 'извинение', ex: 'Please accept my sincere apologies for missing the presentation.', exHi: 'प्रस्तुति में न आने के लिए कृपया मेरी हार्दिक माफी स्वीकार करें।', es: 'Por favor, acepta mis sinceras disculpas por perder la presentación.', ic: '🙏' },
    { w: 'convenient', p: '/kənˈviːniənt/', m: 'fitting in well with a person\'s schedule or preferences', hi: 'सुविधाजनक', es: 'conveniente / adecuado', fr: 'pratique / convenable', de: 'passend / günstig', pt: 'conveniente', zh: '方便的', ar: 'مناسب', ja: '都合の良い', ru: 'удобный / подходящий', ex: 'Is Friday afternoon convenient for a brief phone call?', exHi: 'क्या शुक्रवार दोपहर एक संक्षिप्त फोन कॉल के लिए सुविधाजनक है?', es: '¿El viernes por la tarde te resulta conveniente para una breve llamada telefónica?', ic: '⏰' },
    { w: 'available', p: '/əˈveɪləbl/', m: 'free to do something; not busy with other appointments', hi: 'उपलब्ध / खाली', es: 'disponible / libre', fr: 'disponible', de: 'verfügbar / frei', pt: 'disponível', zh: '有空的', ar: 'متاح / متفرغ', ja: '空いている / 利用可能な', ru: 'свободный / доступный', ex: 'Are you available to join us for lunch at twelve?', exHi: 'क्या आप बारह बजे दोपहर के भोजन के लिए हमारे साथ शामिल होने के लिए उपलब्ध हैं?', es: '¿Estás disponible para unirte a nosotros a almorzar a las doce?', ic: '🟢' },
    { w: 'occasion', p: '/əˈkeɪʒn/', m: 'a particular event, celebration, or ceremony', hi: 'अवसर / मौका', es: 'ocasión / evento', fr: 'occasion', de: 'Anlass / Gelegenheit', pt: 'ocasião', zh: '场合 / 机会', ar: 'مناسبة', ja: '機会 / 行事', ru: 'повод / событие', ex: 'Her graduation was a truly memorable occasion for the whole family.', exHi: 'उसका स्नातक होना पूरे परिवार के लिए वास्तव में एक यादगार अवसर था।', es: 'Su graduación fue una ocasión verdaderamente memorable para toda la familia.', ic: '🎓' },
    { w: 'hesitate', p: '/ˈhezɪteɪt/', m: 'pause before saying or doing something through reluctance or uncertainty', hi: 'संकोच करना', es: 'dudar / vacilar', fr: 'hésiter', de: 'zögern', pt: 'hesitar', zh: '犹豫', ar: 'يتردد', ja: 'ためらう', ru: 'колебаться / стесняться', ex: 'Do not hesitate to bring a plus-one to the party.', exHi: 'पार्टी में किसी अन्य साथी को लाने में संकोच न करें।', es: 'No dudes en traer a un acompañante a la fiesta.', ic: '🤝' },
    { w: 'courteous', p: '/ˈkɜːtiəs/', m: 'polite, respectful, or considerate in manner', hi: 'शिष्ट / विनम्र', es: 'cortés / educado', fr: 'courtois', de: 'höflich', pt: 'cortês', zh: '有礼貌的', ar: 'مهذب / لبق', ja: '礼儀正しい', ru: 'любезный', ex: 'Sending a prompt reply to an invitation is courteous and appreciated.', exHi: 'निमंत्रण का तुरंत उत्तर भेजना विनम्र और सराहनीय है।', es: 'Enviar una respuesta rápida a una invitación es cortés y apreciado.', ic: '💌' },
    { w: 'grateful', p: '/ˈɡreɪtfl/', m: 'feeling or showing an appreciation of kindness; thankful', hi: 'आभारी / कृतज्ञ', es: 'agradecido', fr: 'reconnaissant', de: 'dankbar', pt: 'grato', zh: '感激的', ar: 'ممتن', ja: '感謝している', ru: 'благодарный', ex: 'I am extremely grateful for the kind invitation to your home.', exHi: 'मैं आपके घर आने के उदार निमंत्रण के लिए अत्यंत आभारी हूँ।', es: 'Estoy sumamente agradecido por la amable invitación a tu casa.', ic: '🙏' },
    { w: 'unfortunate', p: '/ʌnˈfɔːtʃənət/', m: 'regrettable or inappropriate; unlucky', hi: 'दुर्भाग्यपूर्ण / खेदजनक', es: 'desafortunado / lamentable', fr: 'malheureux / regrettable', de: 'bedauerlich', pt: 'lamentável', zh: '令人遗憾的', ar: 'مؤسف', ja: '不運な / 残念な', ru: 'досадный / неудачный', ex: 'It is unfortunate that she cannot attend the concert with us.', exHi: 'यह दुर्भाग्यपूर्ण है कि वह हमारे साथ संगीत कार्यक्रम में शामिल नहीं हो सकती।', es: 'Es lamentable que ella no pueda asistir al concierto con nosotros.', ic: '🌧️' },
    { w: 'prior', p: '/ˈpraɪə/', m: 'existing or coming before in time, order, or importance', hi: 'पूर्व / पहला', es: 'previo / anterior', fr: 'préalable / antérieur', de: 'vorherig', pt: 'prévio', zh: '在先的', ar: 'سابق', ja: '事前の / 先の', ru: 'предыдущий / предварительный', ex: 'Due to a prior appointment, I will arrive twenty minutes late.', exHi: 'पूर्व नियुक्ति के कारण, मैं बीस मिनट देर से पहुँचूँगा।', es: 'Debido a una cita previa, llegaré veinte minutos tarde.', ic: '⏰' },
    { w: 'spontaneous', p: '/spɒnˈteɪniəs/', m: 'done or said without prior planning', hi: 'तत्काल / स्वाभाविक', es: 'espontáneo', fr: 'spontané', de: 'spontan', pt: 'espontâneo', zh: '随性的', ar: 'تلقائي', ja: '思いつきの', ru: 'спонтанный', ex: 'We had a spontaneous dinner after work on Thursday.', exHi: 'हमने गुरुवार को काम के बाद अचानक रात का खाना खाया।', es: 'Tuvimos una cena espontánea después del trabajo el jueves.', ic: '🍽️' },
    { w: 'counter-proposal', p: '/ˈkaʊntə prəˈpəʊzl/', m: 'an alternative proposal made in response to an original offer', hi: 'जवाबी प्रस्ताव / वैकल्पिक सुझाव', es: 'contrapropuesta / propuesta alternativa', fr: 'contre-proposition', de: 'Gegenvorschlag', pt: 'contraproposta', zh: '反建议', ar: 'اقتراح بديل', ja: '対案 / 代替提案', ru: 'встречное предложение', ex: 'Since she was busy on Friday, she made a thoughtful counter-proposal for Sunday.', exHi: 'चूंकि वह शुक्रवार को व्यस्त थी, उसने रविवार के लिए एक विचारशील वैकल्पिक प्रस्ताव दिया।', es: 'Dado que estaba ocupada el viernes, hizo una atenta contrapropuesta para el domingo.', ic: '🔄' }
  ],
  chunks: [
    { phrase: 'Would you like to...?', meaning: 'standard polite formula for extending invitations', hi: 'क्या आप ... करना चाहेंगे?', es: '¿Te gustaría...?', fr: 'Aimeriez-vous... ?', de: 'Möchten Sie...?', pt: 'Você gostaria de...?', zh: '你想要...吗？', ar: 'هل تود أن...؟', ja: '〜しませんか？', ru: 'не хотите ли вы...?', note: 'Followed by base verb: "Would you like to join us for dinner?"', ic: '💌' },
    { phrase: 'I\'d love to, but...', meaning: 'enthusiastic refusal formula expressing regret followed by an excuse', hi: 'मुझे बहुत खुशी होती, लेकिन...', es: 'Me encantaría, pero...', fr: 'J\'aimerais beaucoup, mais...', de: 'Ich würde sehr gerne, aber...', pt: 'Eu adoraria, mas...', zh: '我很想去，但是...', ar: 'أود ذلك، ولكن...', ja: 'ぜひそうしたいのですが、...', ru: 'я бы с удовольствием, но...', note: 'Classic diplomatic decline pattern.', ic: '💔' },
    { phrase: 'I\'m afraid I have to...', meaning: 'polite phrase introducing an unavoidable obligation', hi: 'मुझे खेद है कि मुझे ... करना होगा', es: 'Me temo que tengo que...', fr: 'J\'ai bien peur de devoir...', de: 'Ich fürchte, ich muss...', pt: 'Receio que tenho que...', zh: '恐怕我必须...', ar: 'أخشى أنني مضطر إلى...', ja: '残念ながら〜しなければなりません', ru: 'к сожалению, я должен...', note: 'Used to decline gracefully: "I\'m afraid I have to study for an exam."', ic: '😔' },
    { phrase: 'take a raincheck', meaning: 'politely postpone an invitation to a future time', hi: 'अगली बार के लिए टालना', es: 'dejarlo para otra ocasión', fr: 'remettre ça à une autre fois', de: 'auf ein anderes Mal verschieben', pt: 'deixar para outra hora', zh: '改天再约', ar: 'تأجيل الدعوة لوقت آخر', ja: 'また今度にする', ru: 'отложить на следующий раз', note: 'Idiom: "Can I take a raincheck on that museum visit?"', ic: '🎟️' },
    { phrase: 'How about... instead?', meaning: 'proposing an alternative date or activity', hi: 'इसके बजाय ... कैसा रहेगा?', es: '¿Qué tal... en su lugar?', fr: 'Que diriez-vous de... à la place ?', de: 'Wie wäre es stattdessen mit...?', pt: 'Que tal... em vez disso?', zh: '换成...怎么样？', ar: 'ما رأيك في... بدلاً من ذلك؟', ja: '代わりに〜はどうですか？', ru: 'как насчет... вместо этого?', note: 'Followed by noun or gerund: "How about Sunday afternoon instead?"', ic: '🔄' },
    { phrase: 'Are you free on...?', meaning: 'checking someone\'s availability for a specific day', hi: 'क्या आप ... को खाली हैं?', es: '¿Estás libre el...?', fr: 'Êtes-vous libre le... ?', de: 'Hast du am... Zeit?', pt: 'Você está livre no...?', zh: '你...有空吗？', ar: 'هل أنت متفرغ في...؟', ja: '〜は空いていますか？', ru: 'вы свободны в...?', note: 'Everyday question: "Are you free on Saturday evening?"', ic: '📅' },
    { phrase: 'Count me in!', meaning: 'enthusiastic confirmation of participation in an event', hi: 'मुझे भी शामिल समझें!', es: '¡Cuenta conmigo!', fr: 'Comptez sur moi !', de: 'Ich bin dabei!', pt: 'Conte comigo!', zh: '算我一个！', ar: 'احسبني معكم!', ja: '私も参加します！', ru: 'я с вами! / запишите меня!', note: 'Informal acceptance phrase.', ic: '🙋' },
    { phrase: 'prior commitment', meaning: 'an existing plan or appointment that cannot be changed', hi: 'पूर्व निर्धारित प्रतिबद्धता / पहले से तय कार्यक्रम', es: 'compromiso previo', fr: 'engagement préalable', de: 'vorherige Verpflichtung', pt: 'compromisso anterior', zh: '事先的安排', ar: 'التزام سابق', ja: '先約', ru: 'предыдущая договоренность', note: 'Formal excuse: "I cannot attend due to a prior commitment."', ic: '🔒' }
  ],
  grammar: {
    title: 'Polite Invitations, Refusals & Counter-Proposals with Modals',
    concept: 'Using conditional structures ("Would you like to + verb"), diplomatic apologies ("I\'d love to, but...", "I\'m afraid I have to..."), and alternative suggestion formulas ("How about + noun/gerund").',
    patterns: [
      {
        title: 'Extending Invitations: "Would you like to + Base Verb?"',
        structure: 'Would you like to + Base Verb + Rest?',
        rule: 'Use "Would you like to" (not "Do you like to") when offering a specific future invitation.',
        examples: [
          { en: 'Would you like to come over for dinner on Saturday?', hi: 'क्या आप शनिवार को रात के खाने के लिए हमारे घर आना चाहेंगे?', es: '¿Te gustaría venir a cenar el sábado?' },
          { en: 'Would you like to join us for a movie tonight?', hi: 'क्या आप आज रात हमारे साथ फिल्म देखने चलना चाहेंगे?', es: '¿Te gustaría unirte a nosotros para ver una película esta noche?' }
        ]
      },
      {
        title: 'Diplomatic Declines: "I\'d love to, but I\'m afraid..."',
        structure: 'I would love to, but I am afraid (that) + Reason Clause',
        rule: 'Always acknowledge the kindness of the invitation first before stating your reason for declining.',
        examples: [
          { en: 'I\'d love to join you, but I\'m afraid I have to finish a project.', hi: 'मुझे आपके साथ शामिल होना अच्छा लगता, लेकिन मुझे खेद है कि मुझे एक प्रोजेक्ट पूरा करना है।', es: 'Me encantaría unirme, pero me temo que tengo que terminar un proyecto.' },
          { en: 'Thank you for the invite, but I have a prior commitment that evening.', hi: 'निमंत्रण के लिए धन्यवाद, लेकिन उस शाम मेरी पहले से तय प्रतिबद्धता है।', es: 'Gracias por la invitación, pero tengo un compromiso previo esa noche.' }
        ]
      },
      {
        title: 'Suggesting Alternative Plans: "How about + Gerund / Noun + instead?"',
        structure: 'How about + Noun / Verb-ing + instead?',
        rule: 'Follow up a polite decline with a counter-proposal to show that you genuinely want to meet another time.',
        examples: [
          { en: 'How about meeting for coffee on Sunday afternoon instead?', hi: 'इसके बजाय रविवार दोपहर कॉफी के लिए मिलना कैसा रहेगा?', es: '¿Qué tal si nos encontramos para tomar un café el domingo por la tarde?' },
          { en: 'Can I take a raincheck? How about next Friday instead?', hi: 'क्या मैं इसे अगली बार के लिए टाल सकता हूँ? इसके बजाय अगले शुक्रवार कैसा रहेगा?', es: '¿Puedo dejarlo para otra ocasión? ¿Qué tal el próximo viernes?' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'Do you like to come to my party tomorrow?',
      cor: 'Would you like to come to my party tomorrow?',
      exp: 'Use "Would you like to" for invitations. "Do you like" asks about general hobbies or preferences.',
      hi: 'निमंत्रण देने के लिए "Would you like to" का प्रयोग करें, "Do you like to" नहीं।',
      es: 'Usa "Would you like to" para invitaciones, no "Do you like".'
    },
    {
      inc: 'I would love to, but I have to do not go.',
      cor: 'I would love to, but I\'m afraid I cannot go.',
      exp: 'Use "I\'m afraid I cannot make it / go" to decline politely.',
      hi: 'विनम्रता से मना करने के लिए "I\'m afraid I cannot go" कहें।',
      es: 'Usa "I\'m afraid I cannot go" para rechazar educadamente.'
    },
    {
      inc: 'How about to meet next week instead?',
      cor: 'How about meeting next week instead?',
      exp: '"How about" must be followed by a gerund (-ing) or noun phrase, not "to + base verb".',
      hi: '"How about" के बाद Verb में "-ing" लगाएं ("How about meeting...").',
      es: '"How about" va seguido de gerundio (-ing), no de "to + verbo".'
    },
    {
      inc: 'Can I take raincheck?',
      cor: 'Can I take a raincheck?',
      exp: '"Raincheck" is a countable noun in this idiom: "take a raincheck".',
      hi: 'सही मुहावरा "take a raincheck" है (article "a" के साथ)।',
      es: 'La frase correcta es "take a raincheck" con el artículo "a".'
    },
    {
      inc: 'I am not coming because I am busy.',
      cor: 'I\'d love to come, but I have a prior commitment.',
      exp: 'In social English, "I am not coming" sounds harsh. Soften it diplomatically.',
      hi: 'सामाजिक बातचीत में सीधा मना करने के बजाय "I\'d love to, but..." का उपयोग करें।',
      es: 'Suaviza la respuesta usando "I\'d love to come, but I have a prior commitment".'
    }
  ],
  dialogues: [
    {
      title: 'Inviting a Colleague to a Weekend Concert',
      context: 'Liam invites Emily to an outdoor acoustic performance.',
      charA: { name: 'Liam', av: '👨‍💼', role: 'Colleague' },
      charB: { name: 'Emily', av: '👩‍💼', role: 'Colleague' },
      turns: [
        { spk: 'Liam', text: 'Emily, are you free this Saturday evening? Would you like to come to an outdoor jazz concert?', hi: 'एमिली, क्या आप इस शनिवार शाम को खाली हैं? क्या आप एक आउटडोर जैज़ कॉन्सर्ट में चलना चाहेंगी?', es: 'Emily, ¿estás libre este sábado por la noche? ¿Te gustaría venir a un concierto de jazz al aire libre?' },
        { spk: 'Emily', text: 'I\'d love to, but I\'m afraid I have a prior commitment with my family.', hi: 'मुझे बहुत अच्छा लगता, लेकिन मुझे खेद है कि मेरे परिवार के साथ मेरी पहले से तय प्रतिबद्धता है।', es: 'Me encantaría, pero me temo que tengo un compromiso previo con mi familia.' },
        { spk: 'Liam', text: 'No problem at all! Can we take a raincheck for next weekend?', hi: 'कोई बात नहीं! क्या हम अगले सप्ताहांत के लिए इसे टाल सकते हैं?', es: '¡No hay ningún problema! ¿Podemos dejarlo para el próximo fin de semana?' },
        { spk: 'Emily', text: 'Absolutely! How about having brunch on Sunday instead? Count me in for that!', hi: 'बिल्कुल! इसके बजाय रविवार को ब्रंच करना कैसा रहेगा? मुझे इसमें शामिल समझें!', es: '¡Absolutamente! ¿Qué tal un brunch el domingo en su lugar? ¡Cuenta conmigo para eso!' }
      ]
    },
    {
      title: 'Accepting a Dinner Invitation Enthusiastically',
      context: 'Sam invites Priya to celebrate the completion of their team project.',
      charA: { name: 'Sam', av: '👨‍💻', role: 'Software Engineer' },
      charB: { name: 'Priya', av: '👩‍💻', role: 'Product Designer' },
      turns: [
        { spk: 'Sam', text: 'Priya, our team is going out for Thai food on Thursday to celebrate. Would you like to join us?', hi: 'प्रिया, हमारी टीम जश्न मनाने के लिए गुरुवार को थाई खाना खाने जा रही है। क्या आप हमारे साथ शामिल होना चाहेंगी?', es: 'Priya, nuestro equipo saldrá a comer comida tailandesa el jueves para celebrar. ¿Te gustaría unirte?' },
        { spk: 'Priya', text: 'That sounds delightful! Count me in. What time are we meeting?', hi: 'यह बहुत बढ़िया लगता है! मुझे भी शामिल समझें। हम किस समय मिल रहे हैं?', es: '¡Eso suena encantador! Cuenta conmigo. ¿A qué hora nos reunimos?' },
        { spk: 'Sam', text: 'We are meeting at the restaurant at seven. I already reserved a large table.', hi: 'हम सात बजे रेस्तरां में मिल रहे हैं। मैंने पहले ही एक बड़ी मेज आरक्षित कर ली है।', es: 'Nos reuniremos en el restaurante a las siete. Ya reservé una mesa grande.' },
        { spk: 'Priya', text: 'Perfect! I am really looking forward to celebrating our project milestone together.', hi: 'बढ़िया! मैं एक साथ अपने प्रोजेक्ट के पड़ाव का जश्न मनाने के लिए वास्तव में उत्सुक हूँ।', es: '¡Perfecto! Tengo muchas ganas de celebrar juntos el hito de nuestro proyecto.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_a2_11_156_p01',
      type: 'multiple_choice',
      prompt: 'Choose the correct phrase to invite someone out: "_____ to come over for dinner on Friday?"',
      options: ['Would you like', 'Do you like', 'Will you like', 'Are you liking'],
      correctAnswer: 'Would you like',
      explanation: '"Would you like to + verb" is the standard invitation formula.'
    },
    {
      id: 'ex_a2_11_156_p02',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the polite decline expression: "I\'d love to, _____ I\'m afraid I have an exam tomorrow."',
      correctAnswer: 'but',
      explanation: 'Formula: "I\'d love to, but I\'m afraid...".'
    },
    {
      id: 'ex_a2_11_156_p03',
      type: 'word_ordering',
      prompt: 'Arrange into an enthusiastic acceptance:',
      words: ['That', 'sounds', 'great,', 'count', 'me', 'in!'],
      correctAnswer: 'That sounds great, count me in!',
      explanation: 'Idiomatic expression of acceptance.'
    },
    {
      id: 'ex_a2_11_156_p04',
      type: 'translation',
      prompt: 'Translate into English: "मुझे खेद है कि मेरी पहले से तय प्रतिबद्धता है।"',
      targetSentence: 'I am afraid I have a prior commitment.',
      correctAnswer: 'I am afraid I have a prior commitment.',
      explanation: '"I am afraid I have a prior commitment" is polite and formal.'
    },
    {
      id: 'ex_a2_11_156_p05',
      type: 'error_correction',
      prompt: 'Find and correct the grammatical error:',
      errorSentence: 'Do you like to join us for lunch this afternoon?',
      correctAnswer: 'Would you like to join us for lunch this afternoon?',
      explanation: 'Use "Would you like to" for a specific invitation.'
    },
    {
      id: 'ex_a2_11_156_p06',
      type: 'multiple_choice',
      prompt: 'What form should follow "How about...?"',
      options: [
        'meeting on Saturday instead',
        'to meet on Saturday instead',
        'meet on Saturday instead',
        'met on Saturday instead'
      ],
      correctAnswer: 'meeting on Saturday instead',
      explanation: '"How about" takes a gerund (-ing).'
    },
    {
      id: 'ex_a2_11_156_p07',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Can I take a _____ on dinner tonight? I am feeling exhausted."',
      correctAnswer: 'raincheck',
      explanation: 'The idiom is "take a raincheck".'
    },
    {
      id: 'ex_a2_11_156_p08',
      type: 'word_ordering',
      prompt: 'Order the words to ask about availability:',
      words: ['Are', 'you', 'free', 'for', 'coffee', 'this', 'afternoon?'],
      correctAnswer: 'Are you free for coffee this afternoon?',
      explanation: 'Are you free for + Noun + Time expression?'
    },
    {
      id: 'ex_a2_11_156_p09',
      type: 'translation',
      prompt: 'Translate into English: "क्या हम इसके बजाय रविवार को मिल सकते हैं?"',
      targetSentence: 'Could we meet on Sunday instead?',
      correctAnswer: 'Could we meet on Sunday instead?',
      explanation: '"Could we meet on Sunday instead?" is a polite counter-proposal.'
    },
    {
      id: 'ex_a2_11_156_p10',
      type: 'error_correction',
      prompt: 'Correct the error in this counter-proposal:',
      errorSentence: 'How about to reschedule our call for Monday?',
      correctAnswer: 'How about rescheduling our call for Monday?',
      explanation: 'Change "to reschedule" to the gerund "rescheduling".'
    },
    {
      id: 'ex_a2_11_156_p11',
      type: 'multiple_choice',
      prompt: 'What does "Count me in!" signify?',
      options: [
        'I happily accept the invitation and will attend',
        'I am declining because I dislike the event',
        'Please count how many people are coming',
        'I need more time before I decide'
      ],
      correctAnswer: 'I happily accept the invitation and will attend',
      explanation: 'An enthusiastic confirmation of attendance.'
    },
    {
      id: 'ex_a2_11_156_p12',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "We would be _____ to attend your graduation party."',
      correctAnswer: 'delighted',
      explanation: '"delighted" means very pleased or happy to attend.'
    },
    {
      id: 'ex_a2_11_156_p13',
      type: 'word_ordering',
      prompt: 'Arrange the words to form a polite decline:',
      words: ['I', 'am', 'afraid', 'I', 'cannot', 'make', 'it', 'tonight.'],
      correctAnswer: 'I am afraid I cannot make it tonight.',
      explanation: 'Subject + am afraid + Subject + cannot make it + Time.'
    },
    {
      id: 'ex_a2_11_156_p14',
      type: 'translation',
      prompt: 'Translate into English: "क्या आप हमारे साथ फिल्म देखने चलना चाहेंगे?"',
      targetSentence: 'Would you like to come to the movies with us?',
      correctAnswer: 'Would you like to come to the movies with us?',
      explanation: '"Would you like to come to the movies with us?" is a polite invitation.'
    },
    {
      id: 'ex_a2_11_156_p15',
      type: 'multiple_choice',
      prompt: 'Which response is the most polite and natural when someone invites you to an event you cannot attend?',
      options: [
        'I\'d love to, but I\'m afraid I have a prior appointment. Could we take a raincheck?',
        'No, I will not come because I am busy.',
        'Why did you invite me when I am working?',
        'Your invitation is declined.'
      ],
      correctAnswer: 'I\'d love to, but I\'m afraid I have a prior appointment. Could we take a raincheck?',
      explanation: 'Expresses enthusiasm, gives a polite excuse, and suggests a future raincheck.'
    }
  ],
  review: [
    {
      id: 'ex_a2_11_156_r01',
      type: 'multiple_choice',
      prompt: 'Which sentence is grammatically correct and polite?',
      options: [
        'Would you like to come over for dinner on Friday?',
        'Do you like coming over for dinner on Friday?',
        'Would you to come over for dinner on Friday?',
        'Are you liking to come over for dinner on Friday?'
      ],
      correctAnswer: 'Would you like to come over for dinner on Friday?',
      explanation: '"Would you like to + base verb" is correct.'
    },
    {
      id: 'ex_a2_11_156_r02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "How about _____ lunch together tomorrow instead?"',
      correctAnswer: 'having',
      explanation: 'Gerund "having" follows "How about".'
    },
    {
      id: 'ex_a2_11_156_r03',
      type: 'error_correction',
      prompt: 'Correct the error:',
      errorSentence: 'Can I take raincheck on that coffee date?',
      correctAnswer: 'Can I take a raincheck on that coffee date?',
      explanation: 'Add article "a": "take a raincheck".'
    },
    {
      id: 'ex_a2_11_156_r04',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      words: ['I', 'would', 'love', 'to,', 'but', 'I', 'must', 'work.'],
      correctAnswer: 'I would love to, but I must work.',
      explanation: 'Polite regret formula.'
    },
    {
      id: 'ex_a2_11_156_r05',
      type: 'translation',
      prompt: 'Translate into English: "मुझे भी शामिल समझें, मैं ज़रूर आऊँगा!"',
      targetSentence: 'Count me in, I will definitely come!',
      correctAnswer: 'Count me in, I will definitely come!',
      explanation: '"Count me in" expresses enthusiastic confirmation.'
    }
  ],
  assessment: [
    {
      id: 'ex_a2_11_156_a01',
      type: 'multiple_choice',
      prompt: 'How would you decline an invitation to an art exhibition while keeping the door open for another time?',
      options: [
        'Thank you so much! I\'d love to, but I have a prior commitment. Can we take a raincheck?',
        'I do not like art exhibitions so I am not coming.',
        'Because of bad timing, no.',
        'Why not you go alone?'
      ],
      correctAnswer: 'Thank you so much! I\'d love to, but I have a prior commitment. Can we take a raincheck?',
      explanation: 'Polite, appreciative, and constructive response.'
    },
    {
      id: 'ex_a2_11_156_a02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "I\'m _____ I have to attend a family wedding that weekend."',
      correctAnswer: 'afraid',
      explanation: '"I\'m afraid" politely introduces an unavoidable reason.'
    },
    {
      id: 'ex_a2_11_156_a03',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nHost: "Would you like to come to our housewarming on Sunday?"\nGuest: "_____"',
      options: [
        'I would be delighted to attend! Count me in.',
        'I am afraid I will come.',
        'Do you like housewarming parties?',
        'How about I do not visit?'
      ],
      correctAnswer: 'I would be delighted to attend! Count me in.',
      explanation: 'A warm, enthusiastic acceptance.'
    },
    {
      id: 'ex_a2_11_156_a04',
      type: 'speaking',
      prompt: 'Read aloud naturally: "I\'d love to join you for dinner on Saturday, but I\'m afraid I have a prior commitment. How about Sunday afternoon instead?"',
      targetSentence: 'I\'d love to join you for dinner on Saturday, but I\'m afraid I have a prior commitment. How about Sunday afternoon instead?',
      correctAnswer: 'I\'d love to join you for dinner on Saturday, but I\'m afraid I have a prior commitment. How about Sunday afternoon instead?',
      explanation: 'Demonstrate natural rhythm and tone when declining and offering a counter-proposal.'
    },
    {
      id: 'ex_a2_11_156_a05',
      type: 'translation',
      prompt: 'Translate into English: "क्या आप शनिवार को हमारे साथ दोपहर का भोजन करना चाहेंगे?"',
      targetSentence: 'Would you like to have lunch with us on Saturday?',
      correctAnswer: 'Would you like to have lunch with us on Saturday?',
      explanation: '"Would you like to have lunch with us on Saturday?" translates the invitation accurately.'
    }
  ]
};
