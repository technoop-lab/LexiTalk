import { LessonConfigA2 } from './unit12_builder_helper';

// =========================================================================
// LESSON 169: Negotiating Simple Arrangements & Making Compromises
// =========================================================================
export const LESSON_169_CONFIG: LessonConfigA2 = {
  num: 169,
  title: 'Negotiating Simple Arrangements & Making Compromises',
  icon: '🤝',
  estMin: 25,
  objTitle: 'Conditionals in Negotiation (as long as, unless, if you can...)',
  objDesc: 'Learn to negotiate terms, reach mutual compromises on timelines and budgets, establish conditions using "as long as", "unless", and "on condition that", and make trade-offs politely.',
  objHi: 'शर्तों पर बातचीत करना, समय सीमा और बजट पर पारस्परिक समझौता करना, "as long as", "unless" और "on condition that" के साथ शर्तें निर्धारित करना और विनम्रता से समझौते करना सीखें।',
  objEs: 'Negociar términos, alcanzar compromisos mutuos sobre plazos y presupuestos, establecer condiciones usando "as long as", "unless" y hacer concesiones educadamente.',
  canDo: [
    'I can negotiate simple conditions and deadlines in work or daily life.',
    'I can use "as long as" and "provided that" to set agreed terms.',
    'I can use "unless" to express negative conditions (except if).',
    'I can propose reasonable compromises and accept or reject counter-offers politely.'
  ],
  canDoHi: [
    'मैं काम या दैनिक जीवन में सरल शर्तों और समय-सीमाओं पर बातचीत कर सकता हूँ।',
    'मैं सहमत शर्तों को निर्धारित करने के लिए "as long as" और "provided that" का उपयोग कर सकता हूँ।',
    'मैं नकारात्मक शर्तों (जब तक कि नहीं) को व्यक्त करने के लिए "unless" का उपयोग कर सकता हूँ।',
    'मैं उचित समझौते का प्रस्ताव रख सकता हूँ और विनम्रता से जवाबी प्रस्तावों को स्वीकार या अस्वीकार कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo negociar condiciones y plazos sencillos en el trabajo o la vida diaria.',
    'Puedo usar "as long as" y "provided that" para establecer términos acordados.',
    'Puedo usar "unless" para expresar condiciones negativas.',
    'Puedo proponer compromisos razonables y aceptar o rechazar contraofertas con cortesía.'
  ],
  vocab: [
    { w: 'negotiate', p: '/nɪˈɡəʊʃieɪt/', m: 'try to reach an agreement or compromise by discussion with others', hi: 'बातचीत करना / मोलभाव करना', es: 'negociar', fr: 'négocier', de: 'verhandeln', pt: 'negociar', zh: '谈判 / 协商', ar: 'يتفاوض', ja: '交渉する', ru: 'вести переговоры', ex: 'We need to negotiate the project delivery date with the supplier.', exHi: 'हमें आपूर्तिकर्ता के साथ प्रोजेक्ट डिलीवरी की तारीख पर बातचीत करने की आवश्यकता है।', exEs: 'Necesitamos negociar la fecha de entrega del proyecto con el proveedor.', ic: '🤝' },
    { w: 'compromise', p: '/ˈkɒmprəmaɪz/', m: 'an agreement in which each side gives up some demands', hi: 'समझौता / आपसी सहमति', es: 'compromiso / concesión mutua', fr: 'compromis', de: 'Kompromiss', pt: 'acordo / concessão', zh: '折中 / 妥协', ar: 'تسوية', ja: '妥協案', ru: 'компромисс', ex: 'Reaching a fair compromise satisfied both departments.', exHi: 'एक निष्पक्ष समझौते पर पहुंचने से दोनों विभाग संतुष्ट हुए।', exEs: 'Llegar a un compromiso justo satisfizo a ambos departamentos.', ic: '⚖️' },
    { w: 'trade-off', p: '/ˈtreɪdɒf/', m: 'a balance achieved between two desirable but incompatible features', hi: 'अदला-बदली / समझौता बिंदु', es: 'concesión / intercambio', fr: 'compromis / contrepartie', de: 'Kompromiss / Abwägung', pt: 'troca compensatória', zh: '权衡 / 取舍', ar: 'مقايضة', ja: 'トレードオフ / 取捨選択', ru: 'компромисс / уступка', ex: 'There is a trade-off between software speed and graphic quality.', exHi: 'सॉफ्टवेयर की गति और ग्राफिक गुणवत्ता के बीच एक समझौता है।', exEs: 'Hay una compensación entre la velocidad del software y la calidad gráfica.', ic: '🔄' },
    { w: 'concession', p: '/kənˈseʃn/', m: 'a thing that is granted, especially in response to demands', hi: 'रियायत / छूट', es: 'concesión', fr: 'concession', de: 'Zugeständnis', pt: 'concessão', zh: '让步', ar: 'تنازل', ja: '譲歩', ru: 'уступка', ex: 'The vendor offered a 10% discount as a goodwill concession.', exHi: 'विक्रेता ने सद्भावना रियायत के रूप में 10% की छूट की पेशकश की।', exEs: 'El proveedor ofreció un descuento del 10% como una concesión de buena voluntad.', ic: '🏷️' },
    { w: 'counter-offer', p: '/ˈkaʊntərˌɒfər/', m: 'an offer made in response to another offer', hi: 'जवाबी प्रस्ताव', es: 'contraoferta', fr: 'contre-proposition', de: 'Gegenangebot', pt: 'contraproposta', zh: '还价 / 反向报价', ar: 'عرض مقابل', ja: '逆提案 / カウンターオファー', ru: 'встречное предложение', ex: 'After reviewing their quote, we sent a reasonable counter-offer.', exHi: 'उनके कोटेशन की समीक्षा करने के बाद, हमने एक उचित जवाबी प्रस्ताव भेजा।', exEs: 'Después de revisar su presupuesto, enviamos una contraoferta razonable.', ic: '📩' },
    { w: 'flexible', p: '/ˈfleksəbl/', m: 'ready and able to change so as to adapt to different circumstances', hi: 'लचीला / अनुकूलनशील', es: 'flexible / adaptable', fr: 'flexible', de: 'flexibel', pt: 'flexível', zh: '灵活的', ar: 'مرن', ja: '柔軟な', ru: 'гибкий', ex: 'Our working hours are flexible as long as you complete 40 hours weekly.', exHi: 'हमारे काम के घंटे लचीले हैं जब तक आप साप्ताहिक 40 घंटे पूरे करते हैं।', exEs: 'Nuestras horas de trabajo son flexibles siempre que completes 40 horas semanales.', ic: '🤸' },
    { w: 'stipulation', p: '/ˌstɪpjuˈleɪʃn/', m: 'a condition or requirement that is specified or demanded as part of an agreement', hi: 'शर्त / अनुबंध की शर्त', es: 'estipulación / condición', fr: 'stipulation', de: 'Bedingung / Klausel', pt: 'estipulação / cláusula', zh: '规定条款', ar: 'شرط منصوص عليه', ja: '規定 / 条項', ru: 'условие / оговорка', ex: 'One strict stipulation was that all data must remain encrypted.', exHi: 'एक सख्त शर्त यह थी कि सारा डेटा एन्क्रिप्टेड रहना चाहिए।', exEs: 'Una estipulación estricta era que todos los datos debían permanecer cifrados.', ic: '📜' },
    { w: 'terms', p: '/tɜːmz/', m: 'conditions under which an action may be undertaken or agreement made', hi: 'नियम व शर्तें', es: 'términos y condiciones', fr: 'termes / conditions', de: 'Bedingungen / Konditionen', pt: 'termos e condições', zh: '条款 / 条件', ar: 'شروط', ja: '契約条件', ru: 'условия соглашения', ex: 'Let\'s review the payment terms before signing the contract.', exHi: 'अनुबंध पर हस्ताक्षर करने से पहले आइए भुगतान की शर्तों की समीक्षा करें।', exEs: 'Revisemos los términos de pago antes de firmar el contrato.', ic: '📑' },
    { w: 'agreement', p: '/əˈɡriːmənt/', m: 'harmony or accordance in opinion or feeling; a negotiated contract', hi: 'सहमति / समझौता ज्ञापन', es: 'acuerdo / convenio', fr: 'accord', de: 'Vereinbarung', pt: 'acordo', zh: '协议 / 共识', ar: 'اتفاقية', ja: '合意 / 協定', ru: 'соглашение / договор', ex: 'We reached a verbal agreement during yesterday\'s phone conference.', exHi: 'हम कल के फोन सम्मेलन के दौरान एक मौखिक समझौते पर पहुंचे।', exEs: 'Llegamos a un acuerdo verbal durante la conferencia telefónica de ayer.', ic: '🖋️' },
    { w: 'unless', p: '/ənˈles/', m: 'except if (used to introduce a condition)', hi: 'जब तक कि ... न', es: 'a menos que / a no ser que', fr: 'à moins que', de: 'es sei denn / außer wenn', pt: 'a menos que', zh: '除非', ar: 'إلا إذا / ما لم', ja: '〜でない限り', ru: 'если не / пока не', ex: 'We will cancel the picnic unless the weather clears up.', exHi: 'हम पिकनिक रद्द कर देंगे जब तक कि मौसम साफ न हो जाए।', exEs: 'Cancelaremos el picnic a menos que el tiempo mejore.', ic: '⚠️' },
    { w: 'acceptable', p: '/əkˈseptəbl/', m: 'able to be agreed on; suitable', hi: 'स्वीकार्य', es: 'aceptable / admisible', fr: 'acceptable', de: 'akzeptabel', pt: 'aceitável', zh: '可接受的', ar: 'مقبول', ja: '受け入れ可能な', ru: 'приемлемый', ex: 'A two-day extension on the deadline is completely acceptable.', exHi: 'समय सीमा में दो दिन का विस्तार पूरी तरह से स्वीकार्य है।', exEs: 'Una extensión de dos días en la fecha límite es completamente aceptable.', ic: '✅' },
    { w: 'settlement', p: '/ˈsetlmənt/', m: 'an official agreement intended to resolve a dispute or conflict', hi: 'निपटारा / समाधान', es: 'acuerdo / liquidación', fr: 'règlement / accord', de: 'Beilegung / Einigung', pt: 'acordo / resolução', zh: '清算 / 争端解决', ar: 'تسوية النزاع', ja: '和解 / 解決', ru: 'урегулирование', ex: 'Both lawyers negotiated a swift out-of-court settlement.', exHi: 'दोनों वकीलों ने अदालत के बाहर त्वरित समझौते पर बातचीत की।', exEs: 'Ambos abogados negociaron un rápido acuerdo extrajudicial.', ic: '⚖️' },
    { w: 'guarantee', p: '/ˌɡærənˈtiː/', m: 'a formal promise or assurance that certain conditions will be fulfilled', hi: 'आश्वासन / गारंटी', es: 'garantía / asegurar', fr: 'garantie', de: 'Garantie', pt: 'garantia', zh: '保证 / 担保', ar: 'ضمان', ja: '保証', ru: 'гарантия', ex: 'The supplier guaranteed free delivery if we order in bulk.', exHi: 'यदि हम थोक में ऑर्डर करते हैं तो आपूर्तिकर्ता ने मुफ्त डिलीवरी की गारंटी दी।', exEs: 'El proveedor garantizó la entrega gratuita si hacemos un pedido al por mayor.', ic: '🛡️' },
    { w: 'mutual', p: '/ˈmjuːtʃuəl/', m: 'experienced or done by each of two or more parties toward the other', hi: 'आपसी / परस्पर', es: 'mutuo / recíproco', fr: 'mutuel', de: 'gegenseitig / einvernehmlich', pt: 'mútuo', zh: '相互的 / 共同的', ar: 'متبادل', ja: '相互の', ru: 'взаимный', ex: 'Trust and respect are essential for mutual cooperation.', exHi: 'आपसी सहयोग के लिए विश्वास और सम्मान आवश्यक हैं।', exEs: 'La confianza y el respeto son esenciales para la cooperación mutua.', ic: '🤝' },
    { w: 'clause', p: '/klɔːz/', m: 'a particular and separate article, stipulation, or condition in a contract', hi: 'अनुबंध की धारा', es: 'cláusula / artículo', fr: 'clause', de: 'Klausel', pt: 'cláusula', zh: '条款 / 条文', ar: 'بند في العقد', ja: '条項', ru: 'пункт договора', ex: 'We added a confidentiality clause to the nondisclosure agreement.', exHi: 'हमने गैर-प्रकटीकरण समझौते में एक गोपनीयता खंड जोड़ा।', exEs: 'Agregamos una cláusula de confidencialidad al acuerdo de no divulgación.', ic: '📜' },
    { w: 'adjust', p: '/əˈdʒʌst/', m: 'alter or move something slightly in order to achieve the desired result', hi: 'समायोजित करना', es: 'ajustar / modificar', fr: 'ajuster', de: 'anpassen', pt: 'ajustar', zh: '调整', ar: 'يعدل / يضبط', ja: '調整する', ru: 'регулировать / настраивать', ex: 'We can adjust our schedule to fit your arrival time.', exHi: 'हम आपके आगमन के समय के अनुसार अपने कार्यक्रम को समायोजित कर सकते हैं।', exEs: 'Podemos ajustar nuestro horario para adaptarnos a su hora de llegada.', ic: '⚙️' },
    { w: 'condition', p: '/kənˈdɪʃn/', m: 'a state or circumstance required for an agreement to hold', hi: 'शर्त', es: 'condición', fr: 'condition', de: 'Bedingung', pt: 'condição', zh: '条件', ar: 'شرط', ja: '条件', ru: 'условие', ex: 'I will sign the document on one condition.', exHi: 'मैं एक शर्त पर दस्तावेज़ पर हस्ताक्षर करूँगा।', exEs: 'Firmaré el documento con una condición.', ic: '📌' },
    { w: 'deadline', p: '/ˈdedlaɪn/', m: 'the time limit by which an action must be completed', hi: 'अंतिम तिथि', es: 'plazo / fecha límite', fr: 'délai', de: 'Frist', pt: 'prazo', zh: '截止期限', ar: 'موعد نهائي', ja: '期限', ru: 'крайний срок', ex: 'We can extend the deadline if you need extra testing time.', exHi: 'यदि आपको अतिरिक्त परीक्षण समय की आवश्यकता है तो हम समय सीमा बढ़ा सकते हैं।', exEs: 'Podemos extender el plazo si necesitas tiempo adicional para las pruebas.', ic: '⏰' },
    { w: 'resolve', p: '/rɪˈzɒlv/', m: 'settle or find a solution to a problem or contentious matter', hi: 'सुलझाना', es: 'resolver / solucionar', fr: 'résoudre', de: 'lösen', pt: 'resolver', zh: '解决', ar: 'يحل', ja: '解決する', ru: 'разрешать', ex: 'Let\'s resolve the pricing discrepancy before finalizing the order.', exHi: 'आइए ऑर्डर को अंतिम रूप देने से पहले मूल्य निर्धारण विसंगति को सुलझाएं।', exEs: 'Resolvamos la discrepancia de precios antes de finalizar el pedido.', ic: '✅' },
    { w: 'proposal', p: '/prəˈpəʊzl/', m: 'a scheme or offer put forward for consideration', hi: 'प्रस्ताव', es: 'propuesta', fr: 'offre / proposition', de: 'Vorschlag', pt: 'proposta', zh: '提案', ar: 'عرض', ja: '提案', ru: 'предложение', ex: 'Their revised proposal looks much more attractive.', exHi: 'उनका संशोधित प्रस्ताव कहीं अधिक आकर्षक लग रहा है।', exEs: 'Su propuesta revisada parece mucho más atractiva.', ic: '📝' }
  ],
  chunks: [
    { phrase: 'as long as', meaning: 'provided that; on the condition that', hi: 'जब तक कि / बशर्ते कि', es: 'siempre y cuando / con tal de que', fr: 'pourvu que / tant que', de: 'solange / vorausgesetzt, dass', pt: 'contanto que / desde que', zh: '只要', ar: 'طالما أن', ja: '〜である限り', ru: 'при условии, что / пока', note: 'Condition linker: "I will agree as long as you deliver by Friday."', ic: '🔗' },
    { phrase: 'meet halfway', meaning: 'compromise with someone by making concessions from both sides', hi: 'बीच का रास्ता निकालना / आधा-आधा झुकना', es: 'ceder ambas partes / llegar a un punto medio', fr: 'faire des concessions mutuelles / couper la poire en deux', de: 'sich auf halbem Weg treffen', pt: 'chegar a um meio-termo', zh: '各让一步 / 达成折中', ar: 'التوصل إلى حل وسط', ja: '歩み寄る / 妥協する', ru: 'пойти на взаимные уступки', note: 'Negotiation idiom: "We wanted $100, they offered $80, so we met halfway at $90."', ic: '🤝' },
    { phrase: 'give and take', meaning: 'mutual concessions and flexibility in negotiations', hi: 'पारस्परिक लेन-देन और समझौता', es: 'el toma y daca / concesiones mutuas', fr: 'des concessions mutuelles', de: 'ein Geben und Nehmen', pt: 'toma lá, dá cá / cedência mútua', zh: '互相让步 / 妥协', ar: 'الأخذ والعطاء', ja: 'ギブアンドテイク / 譲り合い', ru: 'взаимные уступки / компромисс', note: 'Idiom: "Successful teamwork requires a healthy sense of give and take."', ic: '⚖️' },
    { phrase: 'provided that', meaning: 'on the condition or understanding that', hi: 'इस शर्त पर कि / बशर्ते', es: 'siempre que / a condición de que', fr: 'à condition que', de: 'unter der Bedingung, dass', pt: 'desde que / com a condição de que', zh: '倘若 / 在...条件下', ar: 'بشرط أن', ja: '〜という条件で', ru: 'при условии, если', note: 'Formal condition marker: "We accept the proposal provided that quality checks pass."', ic: '📜' },
    { phrase: 'drive a hard bargain', meaning: 'be aggressive and firm in negotiating good terms for oneself', hi: 'कड़ा मोलभाव करना', es: 'ser un negociador duro / regatear duro', fr: 'être dur en affaires', de: 'hart verhandeln', pt: 'ser duro na negociação', zh: '讨价还价很厉害', ar: 'المفاوضة بصرامة', ja: '厳しい交渉をする', ru: 'жестко торговаться', note: 'Idiomatic expression: "You drive a hard bargain, but I accept your offer."', ic: '💪' },
    { phrase: 'iron out the details', meaning: 'resolve the small problems or specific points of an agreement', hi: 'बारीकियों और छोटी समस्याओं को सुलझाना', es: 'afinar los detalles / limar asperezas', fr: 'régler les derniers détails', de: 'die Details klären', pt: 'ajustar os detalhes', zh: '敲定细节 / 解决小问题', ar: 'تسوية التفاصيل الدقيقة', ja: '詳細を詰める', ru: 'уладить детали', note: 'Collocation: "Let\'s schedule a 20-minute call to iron out the details."', ic: '🔨' },
    { phrase: 'deal breaker', meaning: 'a factor or issue that causes a negotiation to fail completely', hi: 'सौदा तोड़ने वाली बात / अस्वीकार्य शर्त', es: 'motivo de ruptura / punto innegociable', fr: 'élément rédhibitoire', de: 'K.-o.-Kriterium', pt: 'fator decisivo negativo / ponto inegociável', zh: '底线问题 / 导致谈判破裂的因素', ar: 'عامل مفسد للصفقة', ja: '交渉決裂の要因', ru: 'неприемлемое условие', note: 'Idiom: "Mandatory weekend shifts were a deal breaker for the candidate."', ic: '🚫' },
    { phrase: 'on condition that', meaning: 'with the requirement that', hi: 'इस शर्त पर कि', es: 'con la condición de que', fr: 'à la condition que', de: 'unter der Bedingung, dass', pt: 'com a condição de que', zh: '以...为条件', ar: 'على شرط أن', ja: '〜という条件で', ru: 'на условии, что', note: 'Condition chunk: "He was granted leave on condition that he finished the report."', ic: '📌' }
  ],
  grammar: {
    title: 'Conditional Linkers for Negotiation (as long as, unless, provided that)',
    concept: 'Stating terms, requirements, and exceptions in agreements without relying exclusively on "if".',
    patterns: [
      {
        title: 'Positive Condition Linkers (as long as / provided that)',
        structure: 'Main Clause (will + verb) + as long as / provided that + Present Simple Clause',
        rule: 'Use "as long as" or "provided that" to indicate that an outcome is guaranteed if the agreed condition is fulfilled.',
        examples: [
          { en: 'We will approve the discount as long as you pay within thirty days.', hi: 'जब तक आप तीस दिनों के भीतर भुगतान करते हैं, हम छूट को मंजूरी देंगे।', es: 'Aprobaremos el descuento siempre y cuando pague dentro de los treinta días.' },
          { en: 'The client will sign the contract provided that we deliver on time.', hi: 'ग्राहक अनुबंध पर हस्ताक्षर करेगा बशर्ते कि हम समय पर डिलीवरी दें।', es: 'El cliente firmará el contrato siempre que entreguemos a tiempo.' }
        ]
      },
      {
        title: 'Negative Condition Linker (unless = except if)',
        structure: 'Main Clause + unless + Present Simple affirmative verb',
        rule: '"Unless" means "if not" or "except if". Do NOT use a double negative after unless.',
        examples: [
          { en: 'We cannot proceed with the order unless we receive your confirmation.', hi: 'जब तक हमें आपकी पुष्टि नहीं मिलती, हम ऑर्डर को आगे नहीं बढ़ा सकते।', es: 'No podemos proceder con el pedido a menos que recibamos su confirmación.' },
          { en: 'Unless you finish the testing phase, we will not deploy the update.', hi: 'जब तक आप परीक्षण चरण पूरा नहीं करते, हम अपडेट जारी नहीं करेंगे।', es: 'A menos que termines la fase de prueba, no implementaremos la actualización.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'We will not start unless we don\'t get paid.', cor: 'We will not start unless we get paid.', exp: '"Unless" already contains a negative meaning ("except if"). Do not use a double negative with "don\'t" inside the unless clause.', hi: '"unless" के साथ "don\'t" का प्रयोग न करें, क्योंकि "unless" में पहले से नकारात्मक अर्थ होता है।', es: 'No uses doble negación después de "unless".' },
    { inc: 'I agree as long you finish on time.', cor: 'I agree as long as you finish on time.', exp: 'The full conjunction is "as long as", not "as long".', hi: 'सही वाक्यांश "as long as" है।', es: 'La conjunción completa es "as long as".' },
    { inc: 'We will meet in halfway.', cor: 'We will meet halfway.', exp: 'The idiom is "meet halfway", without the preposition "in".', hi: 'सही मुहावरा बिना "in" के "meet halfway" है।', es: 'El modismo es "meet halfway", sin la preposición "in".' },
    { inc: 'Provided what you sign, we will ship today.', cor: 'Provided that you sign, we will ship today.', exp: 'The formal conditional linker is "provided that", not "provided what".', hi: 'सही शर्त संयोजक "provided that" है।', es: 'El conector correcto es "provided that".' },
    { inc: 'Unless he will call, we will leave.', cor: 'Unless he calls, we will leave.', exp: 'In conditional clauses with "unless", use Present Simple ("calls"), not "will call".', hi: '"unless" वाले क्लॉज में "will" के बजाय Present Simple का प्रयोग करें।', es: 'En oraciones condicionales con "unless", usa el presente simple, no "will".' }
  ],
  dialogues: [
    {
      title: 'Negotiating a Project Delivery Date',
      context: 'Hannah (Client Consultant) and Marcus (Freelance Designer) negotiate timeline adjustments for a website redesign.',
      charA: { name: 'Hannah', av: '👩‍💼', role: 'Project Manager' },
      charB: { name: 'Marcus', av: '👨‍🎨', role: 'Lead Designer' },
      turns: [
        { spk: 'Hannah', text: 'Marcus, our client wants the complete design package by next Wednesday. Is that feasible for you?', hi: 'मार्कस, हमारा ग्राहक अगले बुधवार तक पूरा डिज़ाइन पैकेज चाहता है। क्या यह आपके लिए संभव है?', es: 'Marcus, nuestro cliente quiere el paquete de diseño completo para el próximo miércoles. ¿Es factible para ti?' },
        { spk: 'Marcus', text: 'Wednesday is very tight because I need to create twenty custom vector icons. Unless I get the brand assets today, I will need until Friday.', hi: 'बुधवार बहुत कठिन है क्योंकि मुझे बीस कस्टम वेक्टर आइकन बनाने हैं। जब तक मुझे आज ब्रांड एसेट नहीं मिल जाते, मुझे शुक्रवार तक का समय चाहिए होगा।', es: 'El miércoles es muy justo porque necesito crear veinte iconos vectoriales. A menos que reciba los recursos de la marca hoy, necesitaré hasta el viernes.' },
        { spk: 'Hannah', text: 'What if we meet halfway? If you deliver the homepage and user dashboard by Wednesday, you can deliver the remaining icons by Friday.', hi: 'कैसा रहेगा अगर हम बीच का रास्ता निकालें? यदि आप बुधवार तक होमपेज और उपयोगकर्ता डैशबोर्ड वितरित कर देते हैं, तो आप शेष आइकन शुक्रवार तक वितरित कर सकते हैं।', es: '¿Y si llegamos a un punto medio? Si entregas la página de inicio y el panel de usuario para el miércoles, puedes entregar los iconos restantes para el viernes.' },
        { spk: 'Marcus', text: 'That sounds like a fair compromise. I agree, as long as the client provides immediate feedback on the homepage drafts.', hi: 'यह एक उचित समझौता लगता है। मैं सहमत हूँ, बशर्ते कि ग्राहक होमपेज ड्राफ्ट पर तत्काल प्रतिक्रिया प्रदान करे।', es: 'Me parece un compromiso justo. Estoy de acuerdo, siempre y cuando el cliente proporcione comentarios inmediatos sobre los borradores.' },
        { spk: 'Hannah', text: 'Perfect! I will email the client and iron out the final schedule details right away.', hi: 'उत्तम! मैं तुरंत ग्राहक को ईमेल करूँगा और अंतिम समय-सारणी के विवरण को तय करूँगा।', es: '¡Perfecto! Enviaré un correo electrónico al cliente y coordinaré los detalles finales de inmediato.' }
      ]
    },
    {
      title: 'Settling Budget Discrepancies with a Vendor',
      context: 'Lucas (Procurement Officer) discusses invoice discounts with Sonia (Software Vendor).',
      charA: { name: 'Lucas', av: '👨‍💼', role: 'Procurement Officer' },
      charB: { name: 'Sonia', av: '👩‍💼', role: 'Software Vendor' },
      turns: [
        { spk: 'Lucas', text: 'Hello Sonia, we reviewed your enterprise proposal. The total cost is roughly 15% above our approved budget.', hi: 'नमस्ते सोनिया, हमने आपके एंटरप्राइज प्रस्ताव की समीक्षा की। कुल लागत हमारे स्वीकृत बजट से लगभग 15% अधिक है।', es: 'Hola Sonia, revisamos su propuesta empresarial. El costo total está aproximadamente un 15% por encima de nuestro presupuesto aprobado.' },
        { spk: 'Sonia', text: 'We understand, Lucas. We can offer a 10% discount on condition that you sign a two-year service agreement.', hi: 'हम समझते हैं, लुकास। यदि आप दो साल के सेवा समझौते पर हस्ताक्षर करते हैं तो हम 10% छूट दे सकते हैं।', es: 'Lo entendemos, Lucas. Podemos ofrecer un 10% de descuento con la condición de que firmen un acuerdo de servicio por dos años.' },
        { spk: 'Lucas', text: 'That is a reasonable trade-off. We accept provided that you include premium tech support at no extra charge.', hi: 'यह एक उचित समझौता है। हम इसे इस शर्त पर स्वीकार करते हैं कि आप बिना किसी अतिरिक्त शुल्क के प्रीमियम तकनीकी सहायता शामिल करें।', es: 'Es una compensación razonable. Aceptamos siempre que incluyan soporte técnico premium sin cargo adicional.' },
        { spk: 'Sonia', text: 'You drive a hard bargain, Lucas, but we have a deal! I will update the contract clauses immediately.', hi: 'आप कड़ा मोलभाव करते हैं, लुकास, लेकिन हमारी बात पक्की हुई! मैं तुरंत अनुबंध की धाराओं को अपडेट करूँगा।', es: '¡Eres un negociador duro, Lucas, pero tenemos un trato! Actualizaré las cláusulas del contrato de inmediato.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_169_p1',
      type: 'fill_blank',
      prompt: 'Select the correct conditional conjunction meaning "except if":',
      text: 'We cannot start the construction [blank] the city issues the permit.',
      options: [
        { id: '1', text: 'unless', isCorrect: true },
        { id: '2', text: 'as long as', isCorrect: false },
        { id: '3', text: 'provided that', isCorrect: false },
        { id: '4', text: 'therefore', isCorrect: false }
      ],
      correctAnswer: 'unless',
      explanation: '"Unless" means except if.'
    },
    {
      id: 'ex_169_p2',
      type: 'multiple_choice',
      prompt: 'Choose the sentence that correctly establishes a condition:',
      options: [
        { id: '1', text: 'I will sign the contract as long as you include free shipping.', isCorrect: true },
        { id: '2', text: 'I will sign the contract as long you include free shipping.', isCorrect: false },
        { id: '3', text: 'I will sign the contract unless you will include free shipping.', isCorrect: false },
        { id: '4', text: 'I will sign the contract provided what you include free shipping.', isCorrect: false }
      ],
      correctAnswer: 'I will sign the contract as long as you include free shipping.',
      explanation: '"As long as" correctly introduces the condition.'
    },
    {
      id: 'ex_169_p3',
      type: 'word_ordering',
      prompt: 'Arrange the words into a negotiation phrase:',
      tokens: ['Let', 'us', 'meet', 'halfway', 'on', 'the', 'project', 'price', '.'],
      correctOrder: ['Let', 'us', 'meet', 'halfway', 'on', 'the', 'project', 'price', '.'],
      explanation: 'Idiom: "meet halfway on...".'
    },
    {
      id: 'ex_169_p4',
      type: 'error_correction',
      prompt: 'Fix the error in this conditional sentence:',
      errorSentence: 'We cannot deliver on Monday unless you don\'t confirm the order today.',
      correctSentence: 'We cannot deliver on Monday unless you confirm the order today.',
      explanation: 'Remove "don\'t"; "unless" is already negative.'
    },
    {
      id: 'ex_169_p5',
      type: 'translation',
      prompt: 'Translate to English: "जब तक आप समय पर काम पूरा करते हैं, हम आपको बोनस देंगे।"',
      targetSentence: 'We will give you a bonus as long as you finish the work on time.',
      explanation: 'Use "as long as you finish" to express the positive condition.'
    },
    {
      id: 'ex_169_p6',
      type: 'multiple_choice',
      prompt: 'What does "a deal breaker" mean in business discussions?',
      options: [
        { id: '1', text: 'An unacceptable term that causes negotiations to fail', isCorrect: true },
        { id: '2', text: 'A friendly discount given at the end of the year', isCorrect: false },
        { id: '3', text: 'A signed contract that lasts for ten years', isCorrect: false },
        { id: '4', text: 'A coffee break during a long meeting', isCorrect: false }
      ],
      correctAnswer: 'An unacceptable term that causes negotiations to fail',
      explanation: 'A deal breaker is an issue that halts an agreement.'
    },
    {
      id: 'ex_169_p7',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the appropriate idiom:',
      text: 'Good partnerships depend on mutual [blank] and take.',
      options: [
        { id: '1', text: 'give', isCorrect: true },
        { id: '2', text: 'make', isCorrect: false },
        { id: '3', text: 'bring', isCorrect: false },
        { id: '4', text: 'send', isCorrect: false }
      ],
      correctAnswer: 'give',
      explanation: '"Give and take" is the fixed English idiom.'
    },
    {
      id: 'ex_169_p8',
      type: 'speaking',
      prompt: 'Speak this compromise statement aloud:',
      targetSentence: 'We are willing to adjust our delivery schedule provided that you approve the revised budget.',
      audioText: 'We are willing to adjust our delivery schedule provided that you approve the revised budget.',
      explanation: 'Pronounce "provided that" and "revised budget" clearly.'
    },
    {
      id: 'ex_169_p9',
      type: 'listening',
      prompt: 'Listen to the negotiation statement and select the condition:',
      audioText: 'We can accept your counter-offer on condition that payment is made within fifteen days.',
      options: [
        { id: '1', text: 'Payment must be completed within 15 days.', isCorrect: true },
        { id: '2', text: 'The client must hire three new designers.', isCorrect: false },
        { id: '3', text: 'The project will be canceled in 15 days.', isCorrect: false },
        { id: '4', text: 'The vendor will deliver the goods next year.', isCorrect: false }
      ],
      correctAnswer: 'Payment must be completed within 15 days.',
      explanation: 'The speaker states: "on condition that payment is made within fifteen days".'
    },
    {
      id: 'ex_169_p10',
      type: 'match_pairs',
      prompt: 'Match the negotiation terms with their definitions:',
      pairs: [
        { left: 'Counter-offer', right: 'Alternative proposal in response' },
        { left: 'Concession', right: 'Something granted in compromise' },
        { left: 'Iron out', right: 'Resolve small details' },
        { left: 'Deal breaker', right: 'Unacceptable condition' }
      ]
    }
  ],
  review: [
    {
      id: 'ex_169_r1',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "provided that"?',
      options: [
        { id: '1', text: 'We will renew the lease provided that the landlord paints the walls.', isCorrect: true },
        { id: '2', text: 'We will renew the lease provided what the landlord paints the walls.', isCorrect: false },
        { id: '3', text: 'We will renew the lease provided to the landlord paints.', isCorrect: false },
        { id: '4', text: 'Provided that will renew the lease landlord.', isCorrect: false }
      ],
      correctAnswer: 'We will renew the lease provided that the landlord paints the walls.',
      explanation: '"provided that + subject + present tense verb" is the correct structure.'
    },
    {
      id: 'ex_169_r2',
      type: 'word_ordering',
      prompt: 'Arrange the tokens into a conditional statement:',
      tokens: ['Unless', 'you', 'sign', 'the', 'contract', ',', 'we', 'cannot', 'ship', '.'],
      correctOrder: ['Unless', 'you', 'sign', 'the', 'contract', ',', 'we', 'cannot', 'ship', '.'],
      explanation: '"Unless + clause, main clause" structure.'
    },
    {
      id: 'ex_169_r3',
      type: 'fill_blank',
      prompt: 'Fill in the blank:',
      text: 'The two managers met to iron [blank] the remaining contract details.',
      options: [
        { id: '1', text: 'out', isCorrect: true },
        { id: '2', text: 'in', isCorrect: false },
        { id: '3', text: 'off', isCorrect: false },
        { id: '4', text: 'up', isCorrect: false }
      ],
      correctAnswer: 'out',
      explanation: 'The idiom is "iron out" (resolve details).'
    },
    {
      id: 'ex_169_r4',
      type: 'translation',
      prompt: 'Translate: "जब तक आप नियमों का पालन करेंगे, आपको कोई समस्या नहीं होगी।"',
      targetSentence: 'You will have no problems as long as you follow the rules.',
      explanation: '"as long as you follow the rules" expresses the condition clearly.'
    },
    {
      id: 'ex_169_r5',
      type: 'speaking',
      prompt: 'Speak this statement:',
      targetSentence: 'Let us meet halfway and find a solution that works for everyone.',
      audioText: 'Let us meet halfway and find a solution that works for everyone.',
      explanation: 'Deliver with friendly, diplomatic intonation.'
    },
    {
      id: 'ex_169_r6',
      type: 'error_correction',
      prompt: 'Correct the error:',
      errorSentence: 'We can accept the proposal as long you provide technical support.',
      correctSentence: 'We can accept the proposal as long as you provide technical support.',
      explanation: 'Use the complete conjunction "as long as".'
    }
  ],
  assessment: [
    {
      id: 'ex_169_a1',
      type: 'multiple_choice',
      prompt: 'Identify the grammatically correct sentence:',
      options: [
        { id: '1', text: 'We will accept your offer provided that the delivery takes place by Friday.', isCorrect: true },
        { id: '2', text: 'We will accept your offer unless the delivery will take place by Friday.', isCorrect: false },
        { id: '3', text: 'We accept your offer as long you delivering by Friday.', isCorrect: false },
        { id: '4', text: 'We will accept offer provided what delivery is on Friday.', isCorrect: false }
      ],
      correctAnswer: 'We will accept your offer provided that the delivery takes place by Friday.',
      explanation: '"provided that + Present Simple" correctly sets the requirement.'
    },
    {
      id: 'ex_169_a2',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the appropriate word:',
      text: 'You cannot enter the construction area [blank] you are wearing a safety helmet.',
      options: [
        { id: '1', text: 'unless', isCorrect: true },
        { id: '2', text: 'as long as', isCorrect: false },
        { id: '3', text: 'therefore', isCorrect: false },
        { id: '4', text: 'due to', isCorrect: false }
      ],
      correctAnswer: 'unless',
      explanation: '"Unless" means except if you wear a safety helmet.'
    },
    {
      id: 'ex_169_a3',
      type: 'word_ordering',
      prompt: 'Order the tokens to state a compromise:',
      tokens: ['They', 'agreed', 'to', 'the', 'discount', 'on', 'condition', 'that', 'we', 'paid', 'cash', '.'],
      correctOrder: ['They', 'agreed', 'to', 'the', 'discount', 'on', 'condition', 'that', 'we', 'paid', 'cash', '.'],
      explanation: 'Past tense condition structure: "on condition that we paid cash".'
    },
    {
      id: 'ex_169_a4',
      type: 'translation',
      prompt: 'Translate: "जब तक हमें आपका भुगतान नहीं मिल जाता, हम सामान नहीं भेज सकते।"',
      targetSentence: 'We cannot ship the goods unless we receive your payment.',
      explanation: '"cannot ship ... unless we receive" is the standard translation.'
    },
    {
      id: 'ex_169_a5',
      type: 'speaking',
      prompt: 'Speak this negotiation counter-offer:',
      targetSentence: 'We can accept your counter-offer as long as the delivery date is guaranteed.',
      audioText: 'We can accept your counter-offer as long as the delivery date is guaranteed.',
      explanation: 'Pronounce "counter-offer" and "guaranteed" accurately.'
    },
    {
      id: 'ex_169_a6',
      type: 'personal_production',
      prompt: 'Write two sentences describing a condition or compromise in your daily routine using "as long as" and "unless".',
      explanation: 'Example: "I will go for a run tomorrow morning as long as it does not rain. I will stay inside unless the weather is pleasant."'
    }
  ]
};

// =========================================================================
// LESSON 170: Making Plans with Constraints & Contingencies
// =========================================================================
export const LESSON_170_CONFIG: LessonConfigA2 = {
  num: 170,
  title: 'Making Plans with Constraints & Contingencies',
  icon: '📋',
  estMin: 25,
  objTitle: 'Contingency Clauses (in case of, just in case, backup plans)',
  objDesc: 'Learn to formulate realistic plans under time, budget, and logistical constraints, develop fallback plans (Plan B), and express contingencies using "in case of", "just in case", and modal abilities ("be able to").',
  objHi: 'समय, बजट और लॉजिस्टिक सीमाओं के तहत यथार्थवादी योजनाएं बनाना, बैकअप योजना (प्लान बी) तैयार करना, और "in case of", "just in case", "be able to" का उपयोग करके आकस्मिक योजनाओं को व्यक्त करना सीखें।',
  objEs: 'Formular planes realistas bajo restricciones de tiempo y presupuesto, desarrollar planes de respaldo (Plan B) y expresar contingencias con "in case of", "just in case" y "be able to".',
  canDo: [
    'I can discuss plans while accounting for practical constraints like budget or time.',
    'I can formulate contingency plans (Plan B) using "in case" and "just in case".',
    'I can use "in case of + noun" to describe emergency or backup procedures.',
    'I can explain what we will or won\'t be able to do under different circumstances.'
  ],
  canDoHi: [
    'मैं बजट या समय जैसी व्यावहारिक सीमाओं को ध्यान में रखते हुए योजनाओं पर चर्चा कर सकता हूँ।',
    'मैं "in case" और "just in case" का उपयोग करके आकस्मिक योजनाएँ (प्लान बी) तैयार कर सकता हूँ।',
    'मैं आपातकालीन या बैकअप प्रक्रियाओं का वर्णन करने के लिए "in case of + noun" का उपयोग कर सकता हूँ।',
    'मैं समझा सकता हूँ कि विभिन्न परिस्थितियों में हम क्या कर पाएंगे या क्या नहीं कर पाएंगे।'
  ],
  canDoEs: [
    'Puedo discutir planes teniendo en cuenta limitaciones prácticas como el presupuesto.',
    'Puedo formular planes de contingencia (Plan B) usando "in case" y "just in case".',
    'Puedo usar "in case of + sustantivo" para describir procedimientos de respaldo.',
    'Puedo explicar qué podremos o no podremos hacer en diferentes circunstancias.'
  ],
  vocab: [
    { w: 'contingency', p: '/kənˈtɪndʒənsi/', m: 'a future event or circumstance which is possible but cannot be predicted with certainty', hi: 'आकस्मिकता / संभावित संकट', es: 'contingencia / eventualidad', fr: 'contingence / imprévu', de: 'Eventualität / Notfall', pt: 'contingência', zh: '应急情况 / 偶然事件', ar: 'احتمال طارئ', ja: '不測の事態 / 緊急事態', ru: 'непредвиденное обстоятельство', ex: 'We must set aside 10% of the budget for unforeseen contingencies.', exHi: 'हमें अप्रत्याशित आकस्मिकताओं के लिए बजट का 10% अलग रखना होगा।', exEs: 'Debemos reservar el 10% del presupuesto para contingencias imprevistas.', ic: '🛡️' },
    { w: 'constraint', p: '/kənˈstreɪnt/', m: 'a limitation or restriction on what is possible', hi: 'बाध्यता / सीमा / रुकावट', es: 'restricción / limitación', fr: 'contrainte', de: 'Einschränkung', pt: 'restrição / limitação', zh: '约束 / 限制', ar: 'قيد / حصر', ja: '制約 / 制限', ru: 'ограничение', ex: 'Time constraints prevented us from testing every scenario.', exHi: 'समय की कमी ने हमें हर परिदृश्य का परीक्षण करने से रोक दिया।', exEs: 'Las restricciones de tiempo nos impidieron probar todos los escenarios.', ic: '⏳' },
    { w: 'fallback', p: '/ˈfɔːlbæk/', m: 'an alternative plan or option that may be used in an emergency', hi: 'वैकल्पिक योजना / बैकअप विकल्प', es: 'plan de respaldo / alternativa', fr: 'plan de secours', de: 'Rückfalloption / Notlösung', pt: 'plano de contingência / recuo', zh: '后备方案', ar: 'خطة احتياطية', ja: '代替案 / バックアップ', ru: 'запасной вариант', ex: 'Our fallback plan is to host the seminar online if it rains.', exHi: 'यदि बारिश होती है तो हमारा बैकअप प्लान सेमिनार को ऑनलाइन आयोजित करना है।', exEs: 'Nuestro plan de respaldo es organizar el seminario en línea si llueve.', ic: '🔀' },
    { w: 'buffer', p: '/ˈbʌfər/', m: 'an extra amount of something (such as time or money) kept as a safety margin', hi: 'सुरक्षा मार्जिन / अतिरिक्त समय या धन', es: 'margen de seguridad / colchón', fr: 'marge de sécurité', de: 'Puffer', pt: 'margem de segurança / reserva', zh: '缓冲 / 缓冲期', ar: 'هامش أمان', ja: 'バッファ / 余裕', ru: 'буфер / запас', ex: 'Let\'s leave a 30-minute buffer between meetings.', exHi: 'आइए बैठकों के बीच 30 मिनट का बफर रखें।', exEs: 'Dejemos un margen de 30 minutos entre reuniones.', ic: '⏱️' },
    { w: 'unforeseen', p: '/ˌʌnfɔːˈsiːn/', m: 'not anticipated or predicted; unexpected', hi: 'अप्रत्याशित / अनपेक्षित', es: 'imprevisto / inesperado', fr: 'imprévu', de: 'unvorhergesehen', pt: 'imprevisto', zh: '未预见的 / 意外的', ar: 'غير متوقع', ja: '予期せぬ', ru: 'непредвиденный', ex: 'Unforeseen traffic delays caused us to miss our flight.', exHi: 'अप्रत्याशित यातायात देरी के कारण हमारी उड़ान छूट गई।', exEs: 'Retrasos imprevistos de tráfico nos hicieron perder el vuelo.', ic: '⚡' },
    { w: 'allocate', p: '/ˈæləkeɪt/', m: 'distribute resources or duties for a particular purpose', hi: 'आबंटित करना / तय करना', es: 'asignar / destinar', fr: 'allouer / attribuer', de: 'zuweisen / bereitstellen', pt: 'alocar / destinar', zh: '分配 / 拨出', ar: 'يخصص', ja: '配分する / 割り当てる', ru: 'выделять / распределять', ex: 'We allocated $5,000 for local venue rental.', exHi: 'हमने स्थानीय स्थल किराए पर लेने के लिए $5,000 आवंटित किए।', exEs: 'Asignamos $5,000 para el alquiler del local.', ic: '💰' },
    { w: 'restrict', p: '/rɪˈstrɪkt/', m: 'put a limit on; keep under control', hi: 'प्रतिबंधित करना / सीमित करना', es: 'restringir / limitar', fr: 'restreindre', de: 'beschränken / einschränken', pt: 'restringir', zh: '限制', ar: 'يقيد', ja: '制限する', ru: 'ограничивать', ex: 'Budget cuts restrict our ability to hire more staff.', exHi: 'बजट में कटौती से अधिक कर्मचारियों को काम पर रखने की हमारी क्षमता सीमित हो जाती है।', exEs: 'Los recortes de presupuesto restringen nuestra capacidad para contratar más personal.', ic: '🔒' },
    { w: 'flexible', p: '/ˈfleksəbl/', m: 'capable of bending or being adapted easily', hi: 'लचीला', es: 'flexible', fr: 'flexible', de: 'flexibel', pt: 'flexível', zh: '可变通的', ar: 'مرن', ja: '柔軟な', ru: 'гибкий', ex: 'Keeping our itinerary flexible helps when trains are delayed.', exHi: 'अपने यात्रा कार्यक्रम को लचीला रखना ट्रेनों में देरी होने पर मदद करता है।', exEs: 'Mantener nuestro itinerario flexible ayuda cuando los trenes se retrasan.', ic: '🧘' },
    { w: 'priority', p: '/praɪˈɒrəti/', m: 'the fact or condition of being regarded as more important', hi: 'प्राथमिकता', es: 'prioridad', fr: 'priorité', de: 'Priorität', pt: 'prioridade', zh: '优先事项', ar: 'أولوية', ja: '優先事項', ru: 'приоритет', ex: 'Ensuring traveler safety is our top priority.', exHi: 'यात्रियों की सुरक्षा सुनिश्चित करना हमारी सर्वोच्च प्राथमिकता है।', exEs: 'Garantizar la seguridad de los viajeros es nuestra máxima prioridad.', ic: '⭐' },
    { w: 'scenario', p: '/səˈnɑːriəʊ/', m: 'a postulated sequence or development of events', hi: 'परिदृश्य / संभावित स्थिति', es: 'escenario / hipótesis', fr: 'scénario / hypothèse', de: 'Szenario', pt: 'cenário / hipótese', zh: '设想 / 场景', ar: 'سيناريو محتمل', ja: 'シナリオ / 想定', ru: 'сценарий / вариант развития', ex: 'We prepared strategies for best-case and worst-case scenarios.', exHi: 'हमने सर्वोत्तम और सबसे खराब स्थिति के परिदृश्यों के लिए रणनीतियाँ तैयार की हैं।', exEs: 'Preparamos estrategias para los mejores y peores escenarios.', ic: '🎭' },
    { w: 'safeguard', p: '/ˈseɪfɡɑːd/', m: 'a measure taken to protect someone or something or prevent something undesirable', hi: 'सुरक्षा उपाय / बचाव', es: 'salvaguardia / protección', fr: 'garde-fou / protection', de: 'Schutzmaßnahme', pt: 'salvaguarda / proteção', zh: '保障措施', ar: 'إجراء وقائي', ja: '安全対策 / 保護策', ru: 'предосторожность / гарантия', ex: 'Backing up files daily is an essential safeguard against data loss.', exHi: 'डेटा हानि से बचाव के लिए फ़ाइलों का दैनिक बैकअप लेना एक आवश्यक सुरक्षा उपाय है।', exEs: 'Hacer copias de seguridad diarias es una salvaguardia esencial contra la pérdida de datos.', ic: '🛡️' },
    { w: 'exceed', p: '/ɪkˈsiːd/', m: 'be greater in number or size than a quantity or limit', hi: 'से अधिक होना / पार करना', es: 'superar / exceder', fr: 'dépasser / excéder', de: 'überschreiten', pt: 'exceder / ultrapassar', zh: '超出 / 超过', ar: 'يتجاوز', ja: '超える', ru: 'превышать', ex: 'Our expenses must not exceed the quarterly allowance.', exHi: 'हमारे खर्च त्रैमासिक भत्ते से अधिक नहीं होने चाहिए।', exEs: 'Nuestros gastos no deben exceder la asignación trimestral.', ic: '📈' },
    { w: 'emergency', p: '/ɪˈmɜːdʒənsi/', m: 'a serious, unexpected, and often dangerous situation requiring immediate action', hi: 'आपातकाल', es: 'emergencia', fr: 'urgence', de: 'Notfall', pt: 'emergência', zh: '紧急情况', ar: 'حالة طوارئ', ja: '緊急事態', ru: 'чрезвычайная ситуация', ex: 'Keep the emergency exit clear at all times.', exHi: 'आपातकालीन निकास को हर समय खाली रखें।', exEs: 'Mantén la salida de emergencia despejada en todo momento.', ic: '🚨' },
    { w: 'reserve', p: '/rɪˈzɜːv/', m: 'retain for future use; an extra supply', hi: 'आरक्षित रखना / सुरक्षित निधि', es: 'reserva / apartar', fr: 'réserve', de: 'Reserve / Rücklage', pt: 'reserva', zh: '储备 / 预留', ar: 'احتياطي', ja: '予備 / 確保する', ru: 'запас / резерв', ex: 'We have a cash reserve in case of unexpected equipment repairs.', exHi: 'अप्रत्याशित उपकरण मरम्मत की स्थिति में हमारे पास नकद आरक्षित निधि है।', exEs: 'Tenemos una reserva de efectivo en caso de reparaciones inesperadas.', ic: '🏦' },
    { w: 'cancellation', p: '/ˌkænsəˈleɪʃn/', m: 'the action of revoking or annulling something', hi: 'रद्दीकरण', es: 'cancelación / anulación', fr: 'annulation', de: 'Stornierung / Absage', pt: 'cancelamento', zh: '取消', ar: 'إلغاء', ja: 'キャンセル / 取消', ru: 'отмена / аннулирование', ex: 'Check the hotel cancellation policy before booking.', exHi: 'बुकिंग करने से पहले होटल की रद्दीकरण नीति की जाँच करें।', exEs: 'Consulta la política de cancelación del hotel antes de reservar.', ic: '❌' },
    { w: 'alternative', p: '/ɔːlˈtɜːnətɪv/', m: 'available as another possibility', hi: 'वैकल्पिक', es: 'alternativo', fr: 'alternatif', de: 'alternativ', pt: 'alternativo', zh: '替代的', ar: 'بديل', ja: '代替の', ru: 'альтернативный', ex: 'We need an alternative route if the highway is closed.', exHi: 'यदि राजमार्ग बंद है तो हमें एक वैकल्पिक मार्ग की आवश्यकता है।', exEs: 'Necesitamos una ruta alternativa si la autopista está cerrada.', ic: '🛣️' },
    { w: 'capacity', p: '/kəˈpæsəti/', m: 'the maximum amount that something can contain or produce', hi: 'क्षमता', es: 'capacidad / aforo', fr: 'capacité', de: 'Kapazität', pt: 'capacidade', zh: '容量 / 负荷', ar: 'سعة / قدرة', ja: '収容能力 / 定員', ru: 'вместимость / емкость', ex: 'The conference room has reached its maximum capacity of 50 people.', exHi: 'सम्मेलन कक्ष 50 लोगों की अपनी अधिकतम क्षमता तक पहुँच गया है।', exEs: 'La sala de conferencias ha alcanzado su capacidad máxima de 50 personas.', ic: '👥' },
    { w: 'protocol', p: '/ˈprəʊtəkɒl/', m: 'the official procedure or system of rules governing affairs of state or occasions', hi: 'नियम / कार्यप्रणाली', es: 'protocolo / procedimiento', fr: 'protocole', de: 'Protokoll / Richtlinie', pt: 'protocolo', zh: '流程规范', ar: 'بروتوكول', ja: '規程 / プロトコル', ru: 'протокол / регламент', ex: 'Follow the safety protocol during fire drills.', exHi: 'आग लगने के अभ्यास के दौरान सुरक्षा प्रोटोकॉल का पालन करें।', exEs: 'Sigue el protocolo de seguridad durante los simulacros de incendio.', ic: '📋' },
    { w: 'feasible', p: '/ˈfiːzəbl/', m: 'conveniently doable given available resources', hi: 'संभव / साध्य', es: 'factible', fr: 'faisable', de: 'durchführbar', pt: 'viável', zh: '可行的', ar: 'مستطاع', ja: '実現可能な', ru: 'выполнимый', ex: 'Is it feasible to finish the painting by tomorrow morning?', exHi: 'क्या कल सुबह तक पेंटिंग पूरी करना संभव है?', exEs: '¿Es factible terminar la pintura para mañana por la mañana?', ic: '🎨' },
    { w: 'reimburse', p: '/ˌriːɪmˈbɜːs/', m: 'repay a person who has spent or lost money', hi: 'प्रतिपूर्ति करना / खर्च लौटाना', es: 'reembolsar', fr: 'rembourser', de: 'erstatten', pt: 'reembolsar', zh: '报销 / 偿还', ar: 'يعوض مالياً', ja: '払い戻す / 精算する', ru: 'возмещать расходы', ex: 'The company will reimburse your travel expenses.', exHi: 'कंपनी आपके यात्रा खर्च की प्रतिपूर्ति करेगी।', exEs: 'La empresa te reembolsará los gastos de viaje.', ic: '💵' }
  ],
  chunks: [
    { phrase: 'in case of', meaning: 'in the event of a particular occurrence (followed by noun)', hi: 'की स्थिति में / होने पर', es: 'en caso de', fr: 'en cas de', de: 'im Falle von', pt: 'em caso de', zh: '在...情况下 / 万一', ar: 'في حالة', ja: '〜の場合には', ru: 'в случае', note: 'Used with a noun: "In case of fire, use the stairs."', ic: '🚨' },
    { phrase: 'just in case', meaning: 'as a precaution against something that might happen', hi: 'एहतियात के तौर पर / कहीं ऐसा न हो कि', es: 'por si acaso / por si las dudas', fr: 'au cas où / par précaution', de: 'für alle Fälle / zur Sicherheit', pt: 'por via das dúvidas / por precaução', zh: '以防万一', ar: 'تحسباً لأي طارئ', ja: '念のため / 万が一に備えて', ru: 'на всякий случай', note: 'Sentence-ending precaution: "Take an umbrella just in case."', ic: '☔' },
    { phrase: 'plan B', meaning: 'an alternative strategy prepared in advance', hi: 'प्लान बी / वैकल्पिक योजना', es: 'plan B / plan alternativo', fr: 'plan B', de: 'Plan B', pt: 'plano B', zh: '后备计划 / B计划', ar: 'الخطة البديلة (ب)', ja: 'プランB / 代替計画', ru: 'план Б / запасной план', note: 'Idiom: "If the outdoor venue is canceled, what is our Plan B?"', ic: '🔀' },
    { phrase: 'be able to', meaning: 'have the capability or possibility to do something in the future', hi: 'करने में सक्षम होना', es: 'ser capaz de / poder', fr: 'être en mesure de / pouvoir', de: 'in der Lage sein zu / können', pt: 'ser capaz de / poder', zh: '能够', ar: 'أن يكون قادراً على', ja: '〜することができる', ru: 'быть в состоянии / мочь', note: 'Future modal ability: "We will be able to start once funds arrive."', ic: '💪' },
    { phrase: 'worst-case scenario', meaning: 'the most unpleasant or serious outcome that could happen', hi: 'सबसे खराब संभावित स्थिति', es: 'el peor de los casos', fr: 'le pire des scénarios', de: 'der schlimmste Fall', pt: 'o pior cenário possível', zh: '最坏的情况', ar: 'أسوأ سيناريو ممكن', ja: '最悪の事態', ru: 'худший сценарий', note: 'Risk management phrase: "In the worst-case scenario, the launch moves to May."', ic: '🌧️' },
    { phrase: 'leave a margin for error', meaning: 'allow extra time, money, or resources for unexpected mistakes', hi: 'गलतियों या अप्रत्याशित बाधाओं के लिए गुंजाइश छोड़ना', es: 'dejar un margen de error', fr: 'laisser une marge d\'erreur', de: 'einen Fehlerspielraum lassen', pt: 'deixar uma margem para erro', zh: '留出容错空间', ar: 'ترك مجال للخطأ', ja: '誤差の余地を残す', ru: 'оставить запас на ошибку', note: 'Collocation: "Always leave a 10% margin for error in budgets."', ic: '📐' },
    { phrase: 'as a precaution', meaning: 'taken in advance to prevent harm or risk', hi: 'सावधानी के तौर पर', es: 'como medida de precaución', fr: 'par mesure de précaution', de: 'als Vorsichtsmaßnahme', pt: 'como precaução', zh: '作为预防措施', ar: 'كإجراء احترازي', ja: '予防措置として', ru: 'в качестве меры предосторожности', note: 'Descriptive chunk: "We installed backup generators as a precaution."', ic: '🛡️' },
    { phrase: 'have something to fall back on', meaning: 'have an alternative option when primary plans fail', hi: 'असफल होने पर सहारा लेने के लिए कुछ होना', es: 'tener algo a lo que recurrir', fr: 'avoir une solution de repli', de: 'etwas haben, worauf man zurückgreifen kann', pt: 'ter onde se apoiar / ter um plano de reserva', zh: '有后路可退 / 有所依托', ar: 'وجود بديل يعتمد عليه', ja: '頼れる控えがある', ru: 'иметь запасной вариант для подстраховки', note: 'Idiom: "It is reassuring to have savings to fall back on."', ic: '💼' }
  ],
  grammar: {
    title: 'Contingency Clauses (in case of vs in case) & Future Ability (will be able to)',
    concept: 'Preparing for potential difficulties, expressing precautions, and stating future capabilities.',
    patterns: [
      {
        title: '"in case of + noun" vs "in case + clause"',
        structure: 'in case of + Noun Phrase | Main Clause + in case + Present Simple Clause',
        rule: 'Use "in case of" followed directly by a noun (e.g. emergency, rain). Use "in case" followed by a full subject-verb clause to explain the precaution reason.',
        examples: [
          { en: 'In case of emergency, press the alarm button.', hi: 'आपातकाल की स्थिति में, अलार्म बटन दबाएं।', es: 'En caso de emergencia, presione el botón de alarma.' },
          { en: 'I am taking my laptop charger in case the battery runs out.', hi: 'मैं अपना लैपटॉप चार्जर ले जा रहा हूँ कहीं बैटरी खत्म न हो जाए।', es: 'Llevo el cargador de mi portátil por si se acaba la batería.' }
        ]
      },
      {
        title: 'Future Ability with "will be able to"',
        structure: 'Subject + will / won\'t + be able to + Base Verb',
        rule: 'Because modal "can" has no future form, use "will be able to" to express capability or availability in future circumstances.',
        examples: [
          { en: 'If we book today, we will be able to secure the group discount.', hi: 'यदि हम आज बुकिंग करते हैं, तो हम समूह छूट प्राप्त करने में सक्षम होंगे।', es: 'Si reservamos hoy, podremos conseguir el descuento de grupo.' },
          { en: 'Without extra funding, we won\'t be able to hire external caterers.', hi: 'अतिरिक्त धन के बिना, हम बाहरी खानपान वालों को काम पर नहीं रख पाएंगे।', es: 'Sin fondos adicionales, no podremos contratar proveedores externos.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'In case of it rains, we will stay indoors.', cor: 'In case it rains, we will stay indoors. / In case of rain, we will stay indoors.', exp: '"In case of" must be followed by a noun ("rain"), whereas "in case" is followed by a clause ("it rains").', hi: '"in case of" के बाद संज्ञा ("rain") का प्रयोग करें; क्लॉज ("it rains") से पहले केवल "in case" आता है।', es: '"In case of" va seguido de un sustantivo, mientras que "in case" va seguido de una cláusula.' },
    { inc: 'We will can attend the conference next week.', cor: 'We will be able to attend the conference next week.', exp: 'Never combine "will" and "can". Use "will be able to" for future ability.', hi: '"will can" कभी न लिखें; भविष्य की क्षमता के लिए "will be able to" का उपयोग करें।', es: 'Nunca combines "will can". Usa "will be able to" para habilidad futura.' },
    { inc: 'Take an umbrella in case if it rains.', cor: 'Take an umbrella in case it rains.', exp: 'Do not combine "in case" and "if". Use either "in case it rains" or "if it rains".', hi: '"in case if" एक साथ न लिखें; केवल "in case it rains" लिखें।', es: 'No combines "in case if". Usa solo "in case it rains".' },
    { inc: 'What is our plan b?', cor: 'What is our Plan B?', exp: 'Capitalize "Plan B" as a standard named contingency idiom.', hi: '"Plan B" को उचित संज्ञा के रूप में बड़े अक्षरों में लिखें।', es: 'Escribe "Plan B" con mayúsculas.' },
    { inc: 'We left a buffer for prevent delays.', cor: 'We left a buffer to prevent delays.', exp: 'Use an infinitive of purpose ("to prevent") after buffer.', hi: 'उद्देश्य के लिए "to prevent" का प्रयोग करें।', es: 'Usa el infinitivo de propósito "to prevent".' }
  ],
  dialogues: [
    {
      title: 'Planning an Outdoor Corporate Event with Weather Contingencies',
      context: 'Zoe (Event Organizer) and Raj (Operations Director) discuss arrangements for the annual company retreat.',
      charA: { name: 'Zoe', av: '👩‍💼', role: 'Event Coordinator' },
      charB: { name: 'Raj', av: '👨‍💼', role: 'Operations Director' },
      turns: [
        { spk: 'Zoe', text: 'Raj, we have reserved the riverside pavilion for Saturday\'s retreat, but the forecast shows a 40% chance of showers.', hi: 'राज, हमने शनिवार के रिट्रीट के लिए नदी किनारे मंडप आरक्षित किया है, लेकिन पूर्वानुमान में 40% बारिश की संभावना दिखाई दे रही है।', es: 'Raj, reservamos el pabellón junto al río para el retiro del sábado, pero el pronóstico muestra un 40% de probabilidad de lluvia.' },
        { spk: 'Raj', text: 'We should definitely have a Plan B in place. What is our fallback venue in case of heavy rain?', hi: 'हमारे पास निश्चित रूप से एक प्लान बी होना चाहिए। भारी बारिश की स्थिति में हमारा वैकल्पिक स्थल क्या है?', es: 'Definitivamente deberíamos tener un Plan B. ¿Cuál es nuestro lugar de respaldo en caso de lluvia intensa?' },
        { spk: 'Zoe', text: 'The hotel adjacent to the park has an indoor banquet hall available. I have placed a temporary hold on it just in case.', hi: 'पार्क से सटे होटल में एक इनडोर बैंक्वेट हॉल उपलब्ध है। मैंने एहतियात के तौर पर इस पर अस्थायी रोक लगा दी है।', es: 'El hotel contiguo al parque tiene disponible un salón de banquetes. Lo he reservado temporalmente por si acaso.' },
        { spk: 'Raj', text: 'Excellent foresight, Zoe! Will we be able to transfer our catering order without incurring penalties?', hi: 'उत्कृष्ट दूरदर्शिता, ज़ोई! क्या हम बिना कोई जुर्माना लगाए अपने कैटरिंग ऑर्डर को स्थानांतरित करने में सक्षम होंगे?', es: '¡Excelente previsión, Zoe! ¿Podremos transferir nuestro pedido de catering sin penalizaciones?' },
        { spk: 'Zoe', text: 'Yes, as long as we confirm the final venue choice by Friday noon, there will be no extra fee.', hi: 'हाँ, बशर्ते हम शुक्रवार दोपहर तक अंतिम स्थल विकल्प की पुष्टि कर दें, कोई अतिरिक्त शुल्क नहीं लगेगा।', es: 'Sí, siempre que confirmemos la elección final del lugar antes del viernes al mediodía, no habrá ningún cargo adicional.' }
      ]
    },
    {
      title: 'Budget Constraints on IT Hardware Purchases',
      context: 'Amira reviews procurement limits with her financial supervisor Thomas.',
      charA: { name: 'Amira', av: '👩‍💻', role: 'IT Manager' },
      charB: { name: 'Thomas', av: '👨‍💼', role: 'Finance Director' },
      turns: [
        { spk: 'Amira', text: 'Thomas, our team requested ten high-performance laptops, but our budget constraints only allow for seven.', hi: 'थॉमस, हमारी टीम ने दस उच्च-प्रदर्शन लैपटॉप का अनुरोध किया, लेकिन हमारे बजट की कमी केवल सात की अनुमति देती है।', es: 'Thomas, nuestro equipo solicitó diez portátiles de alto rendimiento, pero nuestras limitaciones presupuestarias solo permiten siete.' },
        { spk: 'Thomas', text: 'Can we allocate funds from the travel budget, or do we need to stagger the purchases across two quarters?', hi: 'क्या हम यात्रा बजट से धन आवंटित कर सकते हैं, या हमें दो तिमाहियों में खरीदारी को बांटने की आवश्यकता है?', es: '¿Podemos asignar fondos del presupuesto de viajes o debemos escalonar las compras en dos trimestres?' },
        { spk: 'Amira', text: 'If we buy seven now and three in July, we will be able to stay well within our quarterly spending ceiling.', hi: 'यदि हम अभी सात और जुलाई में तीन खरीदते हैं, तो हम अपनी त्रैमासिक खर्च सीमा के भीतर रहने में सक्षम होंगे।', es: 'Si compramos siete ahora y tres en julio, podremos mantenernos dentro de nuestro límite de gasto trimestral.' },
        { spk: 'Thomas', text: 'That sounds prudent. Always leave a 5% buffer in case hardware prices fluctuate.', hi: 'यह समझदारी भरा लगता है। हार्डवेयर की कीमतों में उतार-चढ़ाव होने की स्थिति में हमेशा 5% बफर रखें।', es: 'Eso suena prudente. Deja siempre un margen del 5% en caso de que los precios del hardware fluctúen.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_170_p1',
      type: 'fill_blank',
      prompt: 'Select the correct phrase followed by a noun:',
      text: '[blank] fire, do not use the elevators.',
      options: [
        { id: '1', text: 'In case of', isCorrect: true },
        { id: '2', text: 'In case', isCorrect: false },
        { id: '3', text: 'Just in case', isCorrect: false },
        { id: '4', text: 'Because', isCorrect: false }
      ],
      correctAnswer: 'In case of',
      explanation: '"In case of" is followed by a noun ("fire").'
    },
    {
      id: 'ex_170_p2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses future ability?',
      options: [
        { id: '1', text: 'With extra training, our team will be able to use the software easily.', isCorrect: true },
        { id: '2', text: 'With extra training, our team will can use the software easily.', isCorrect: false },
        { id: '3', text: 'With extra training, our team able to use the software easily.', isCorrect: false },
        { id: '4', text: 'With extra training, our team is can use the software easily.', isCorrect: false }
      ],
      correctAnswer: 'With extra training, our team will be able to use the software easily.',
      explanation: 'Use "will be able to" to indicate future capability.'
    },
    {
      id: 'ex_170_p3',
      type: 'word_ordering',
      prompt: 'Arrange the tokens into a precautionary statement:',
      tokens: ['I', 'brought', 'an', 'umbrella', 'just', 'in', 'case', 'it', 'rains', '.'],
      correctOrder: ['I', 'brought', 'an', 'umbrella', 'just', 'in', 'case', 'it', 'rains', '.'],
      explanation: '"Just in case it rains" explains the precautionary reason.'
    },
    {
      id: 'ex_170_p4',
      type: 'error_correction',
      prompt: 'Fix the error in this contingency plan:',
      errorSentence: 'If the server fails, we will can switch to the backup system.',
      correctSentence: 'If the server fails, we will be able to switch to the backup system.',
      explanation: 'Replace "will can" with "will be able to".'
    },
    {
      id: 'ex_170_p5',
      type: 'translation',
      prompt: 'Translate to English: "आपात स्थिति के लिए हमारे पास एक बैकअप योजना होनी चाहिए।"',
      targetSentence: 'We must have a Plan B in case of an emergency.',
      explanation: '"have a Plan B in case of an emergency" accurately translates this.'
    },
    {
      id: 'ex_170_p6',
      type: 'multiple_choice',
      prompt: 'What is a "buffer" in schedule planning?',
      options: [
        { id: '1', text: 'Extra safety time kept between planned events', isCorrect: true },
        { id: '2', text: 'A heavy tool used for cleaning floors', isCorrect: false },
        { id: '3', text: 'An argument between two team members', isCorrect: false },
        { id: '4', text: 'A permanent ban on traveling', isCorrect: false }
      ],
      correctAnswer: 'Extra safety time kept between planned events',
      explanation: 'A buffer is an extra margin of time or money.'
    },
    {
      id: 'ex_170_p7',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the appropriate idiom:',
      text: 'In the [blank] scenario, we will have to reschedule the product launch to next year.',
      options: [
        { id: '1', text: 'worst-case', isCorrect: true },
        { id: '2', text: 'bad-case', isCorrect: false },
        { id: '3', text: 'worst-time', isCorrect: false },
        { id: '4', text: 'poor-case', isCorrect: false }
      ],
      correctAnswer: 'worst-case',
      explanation: 'The established phrase is "worst-case scenario".'
    },
    {
      id: 'ex_170_p8',
      type: 'speaking',
      prompt: 'Read this contingency statement aloud:',
      targetSentence: 'We have reserved an indoor conference room as a precaution in case of bad weather.',
      audioText: 'We have reserved an indoor conference room as a precaution in case of bad weather.',
      explanation: 'Maintain clear pace on "as a precaution in case of bad weather".'
    },
    {
      id: 'ex_170_p9',
      type: 'listening',
      prompt: 'Listen to the contingency plan and choose the fallback action:',
      audioText: 'If the flight is delayed, our fallback plan is to take the express train to Kyoto.',
      options: [
        { id: '1', text: 'Take the express train to Kyoto.', isCorrect: true },
        { id: '2', text: 'Cancel the entire trip and stay home.', isCorrect: false },
        { id: '3', text: 'Rent a private helicopter.', isCorrect: false },
        { id: '4', text: 'Wait at the airport for three days.', isCorrect: false }
      ],
      correctAnswer: 'Take the express train to Kyoto.',
      explanation: 'The speaker explicitly states: "take the express train to Kyoto".'
    },
    {
      id: 'ex_170_p10',
      type: 'match_pairs',
      prompt: 'Match the planning terms with their definitions:',
      pairs: [
        { left: 'Contingency', right: 'Possible future emergency' },
        { left: 'Constraint', right: 'Limitation on time or money' },
        { left: 'Fallback', right: 'Alternative backup plan' },
        { left: 'Buffer', right: 'Extra margin of safety' }
      ]
    }
  ],
  review: [
    {
      id: 'ex_170_r1',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "just in case"?',
      options: [
        { id: '1', text: 'I downloaded an offline map just in case we lose mobile signal.', isCorrect: true },
        { id: '2', text: 'I downloaded an offline map just in case of we lose signal.', isCorrect: false },
        { id: '3', text: 'I downloaded map just in case if we lose signal.', isCorrect: false },
        { id: '4', text: 'Just in case of we will lose signal downloaded map.', isCorrect: false }
      ],
      correctAnswer: 'I downloaded an offline map just in case we lose mobile signal.',
      explanation: '"Just in case + clause" correctly gives the reason.'
    },
    {
      id: 'ex_170_r2',
      type: 'word_ordering',
      prompt: 'Arrange the tokens into a future ability statement:',
      tokens: ['We', 'will', 'be', 'able', 'to', 'reimburse', 'your', 'travel', 'expenses', '.'],
      correctOrder: ['We', 'will', 'be', 'able', 'to', 'reimburse', 'your', 'travel', 'expenses', '.'],
      explanation: 'Pattern: "will be able to + verb".'
    },
    {
      id: 'ex_170_r3',
      type: 'fill_blank',
      prompt: 'Fill in the blank:',
      text: 'Our budget constraints [blank] our ability to hire additional contractors.',
      options: [
        { id: '1', text: 'restrict', isCorrect: true },
        { id: '2', text: 'reimburse', isCorrect: false },
        { id: '3', text: 'allocate', isCorrect: false },
        { id: '4', text: 'exceed', isCorrect: false }
      ],
      correctAnswer: 'restrict',
      explanation: '"Restrict" means limit or constrain.'
    },
    {
      id: 'ex_170_r4',
      type: 'translation',
      prompt: 'Translate: "अचानक देरी की स्थिति में हमेशा 20 मिनट का बफर रखें।"',
      targetSentence: 'Always leave a 20-minute buffer in case of unexpected delays.',
      explanation: '"in case of unexpected delays" pairs with "leave a buffer".'
    },
    {
      id: 'ex_170_r5',
      type: 'speaking',
      prompt: 'Speak this sentence aloud:',
      targetSentence: 'What is our fallback plan if the client does not approve the budget?',
      audioText: 'What is our fallback plan if the client does not approve the budget?',
      explanation: 'Stress "fallback plan" and "approve the budget".'
    },
    {
      id: 'ex_170_r6',
      type: 'error_correction',
      prompt: 'Correct the error:',
      errorSentence: 'In case of it snows, the school will close.',
      correctSentence: 'In case it snows, the school will close.',
      explanation: 'Use "In case" (not "In case of") before a subject and verb ("it snows").'
    }
  ],
  assessment: [
    {
      id: 'ex_170_a1',
      type: 'multiple_choice',
      prompt: 'Identify the sentence that correctly explains a contingency:',
      options: [
        { id: '1', text: 'We printed extra tickets just in case more guests arrive.', isCorrect: true },
        { id: '2', text: 'We printed extra tickets in case of more guests will arrive.', isCorrect: false },
        { id: '3', text: 'We printed extra tickets just in case if more guests.', isCorrect: false },
        { id: '4', text: 'We printed extra tickets because in case of more guests.', isCorrect: false }
      ],
      correctAnswer: 'We printed extra tickets just in case more guests arrive.',
      explanation: '"Just in case + Present Simple clause" expresses precautionary planning.'
    },
    {
      id: 'ex_170_a2',
      type: 'fill_blank',
      prompt: 'Choose the correct form to complete the sentence:',
      text: 'If we start early, we will [blank] finish before sunset.',
      options: [
        { id: '1', text: 'be able to', isCorrect: true },
        { id: '2', text: 'can', isCorrect: false },
        { id: '3', text: 'could to', isCorrect: false },
        { id: '4', text: 'being able to', isCorrect: false }
      ],
      correctAnswer: 'be able to',
      explanation: '"Will be able to" expresses future ability.'
    },
    {
      id: 'ex_170_a3',
      type: 'word_ordering',
      prompt: 'Arrange into an emergency protocol instruction:',
      tokens: ['In', 'case', 'of', 'power', 'failure', ',', 'switch', 'on', 'the', 'generator', '.'],
      correctOrder: ['In', 'case', 'of', 'power', 'failure', ',', 'switch', 'on', 'the', 'generator', '.'],
      explanation: '"In case of power failure, ..." is the correct imperative structure.'
    },
    {
      id: 'ex_170_a4',
      type: 'translation',
      prompt: 'Translate: "यदि मौसम खराब होता है, तो क्या हम बैठक को ऑनलाइन स्थानांतरित कर पाएंगे?"',
      targetSentence: 'If the weather gets bad, will we be able to move the meeting online?',
      explanation: '"will we be able to move..." asks about future ability under a condition.'
    },
    {
      id: 'ex_170_a5',
      type: 'speaking',
      prompt: 'Present this contingency plan clearly:',
      targetSentence: 'We prepared a comprehensive Plan B to ensure operations continue smoothly.',
      audioText: 'We prepared a comprehensive Plan B to ensure operations continue smoothly.',
      explanation: 'Articulate "comprehensive Plan B" with natural cadence.'
    },
    {
      id: 'ex_170_a6',
      type: 'personal_production',
      prompt: 'Write two sentences explaining a backup plan you made for a trip or event using "just in case" and "Plan B".',
      explanation: 'Example: "I packed an extra jacket just in case the evening gets cold. Our Plan B is to eat dinner inside the hotel if the terrace is closed."'
    }
  ]
};

// =========================================================================
// LESSON 171: Organizing Group Trips, Itineraries & Logistics
// =========================================================================
export const LESSON_171_CONFIG: LessonConfigA2 = {
  num: 171,
  title: 'Organizing Group Trips, Itineraries & Logistics',
  icon: '🗺️',
  estMin: 25,
  objTitle: 'Prepositions of Sequence & Modals of Logical Deduction (must be, can\'t be)',
  objDesc: 'Learn to coordinate group travel itineraries, manage schedules and meeting points, use sequential prepositions ("prior to", "upon arrival", "throughout"), and make logical deductions about travel situations using "must be" and "can\'t be".',
  objHi: 'समूह यात्रा कार्यक्रम का समन्वय करना, कार्यक्रम और मिलन स्थलों का प्रबंधन करना, अनुक्रमिक पूर्वसर्गों ("prior to", "upon arrival", "throughout") का उपयोग करना और "must be" तथा "can\'t be" से तार्किक निष्कर्ष निकालना सीखें।',
  objEs: 'Coordinar itinerarios de viaje grupales, gestionar horarios y puntos de encuentro, usar preposiciones secuenciales ("prior to", "upon arrival", "throughout") y hacer deducciones lógicas con "must be" y "can\'t be".',
  canDo: [
    'I can organize and explain a step-by-step group itinerary.',
    'I can use sequential prepositions like "prior to" and "upon arrival".',
    'I can make logical deductions about logistics using "must be" and "can\'t be".',
    'I can coordinate departure times, meeting points, and transport connections.'
  ],
  canDoHi: [
    'मैं चरण-दर-चरण समूह यात्रा कार्यक्रम को व्यवस्थित और समझा सकता हूँ।',
    'मैं "prior to" और "upon arrival" जैसे अनुक्रमिक पूर्वसर्गों का उपयोग कर सकता हूँ।',
    'मैं "must be" और "can\'t be" का उपयोग करके लॉजिस्टिक्स के बारे में तार्किक निष्कर्ष निकाल सकता हूँ।',
    'मैं प्रस्थान समय, मिलने के स्थानों और परिवहन संपर्कों का समन्वय कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo organizar y explicar un itinerario grupal paso a paso.',
    'Puedo usar preposiciones secuenciales como "prior to" y "upon arrival".',
    'Puedo hacer deducciones lógicas sobre logística usando "must be" y "can\'t be".',
    'Puedo coordinar horarios de salida, puntos de encuentro y conexiones.'
  ],
  vocab: [
    { w: 'itinerary', p: '/aɪˈtɪnərəri/', m: 'a planned route or journey schedule with dates and stops', hi: 'यात्रा कार्यक्रम / मार्ग सूची', es: 'itinerario / plan de viaje', fr: 'itinéraire', de: 'Reiseroute / Reiseplan', pt: 'itinerário', zh: '行程单 / 路线安排', ar: 'برنامج الرحلة', ja: '旅程 / 旅行日程', ru: 'маршрут / план поездки', ex: 'Our weekend itinerary includes three museum visits and a walking tour.', exHi: 'हमारे सप्ताहांत यात्रा कार्यक्रम में तीन संग्रहालयों का दौरा और एक पैदल यात्रा शामिल है।', exEs: 'Nuestro itinerario de fin de semana incluye tres visitas a museos y un recorrido a pie.', ic: '🗺️' },
    { w: 'logistics', p: '/ləˈdʒɪstɪks/', m: 'the detailed organization and implementation of a complex operation', hi: 'लॉजिस्टिक्स / व्यवस्था और प्रबंधन', es: 'logística', fr: 'logistique', de: 'Logistik', pt: 'logística', zh: '后勤 / 物流', ar: 'الخدمات اللوجستية', ja: '物流 / 運営管理', ru: 'логистика', ex: 'Handling the travel logistics for thirty students was challenging.', exHi: 'तीस छात्रों के लिए यात्रा रसद संभालना चुनौतीपूर्ण था।', exEs: 'Manejar la logística de viaje para treinta estudiantes fue un desafío.', ic: '🚚' },
    { w: 'meeting point', p: '/ˈmiːtɪŋ pɔɪnt/', m: 'an agreed place where people gather before starting an activity', hi: 'मिलन स्थल', es: 'punto de encuentro', fr: 'point de rendez-vous', de: 'Treffpunkt', pt: 'ponto de encontro', zh: '集合地点', ar: 'نقطة التجمع', ja: '集合場所', ru: 'место встречи / сбор', ex: 'Our group meeting point is right in front of the central fountain.', exHi: 'हमारा समूह मिलन स्थल केंद्रीय फव्वारे के ठीक सामने है।', exEs: 'Nuestro punto de encuentro grupal está justo enfrente de la fuente central.', ic: '📍' },
    { w: 'departure', p: '/dɪˈpɑːtʃər/', m: 'the action of leaving, especially to start a journey', hi: 'प्रस्थान / रवानगी', es: 'salida / partida', fr: 'départ', de: 'Abreise / Abfahrt', pt: 'partida / saída', zh: '出发 / 离港', ar: 'مغادرة', ja: '出発', ru: 'отправление / вылет', ex: 'The scheduled departure time for the bus is 7:30 AM sharp.', exHi: 'बस का निर्धारित प्रस्थान समय सुबह 7:30 बजे सटीक है।', exEs: 'La hora de salida programada para el autobús es a las 7:30 AM en punto.', ic: '🛫' },
    { w: 'arrival', p: '/əˈraɪvl/', m: 'the action or process of arriving at a destination', hi: 'आगमन / पहुंचना', es: 'llegada', fr: 'arrivée', de: 'Ankunft', pt: 'chegada', zh: '到达', ar: 'وصول', ja: '到着', ru: 'прибытие', ex: 'Upon arrival at the terminal, collect your luggage at belt 4.', exHi: 'टर्मिनल पर पहुंचने पर, बेल्ट 4 पर अपना सामान एकत्र करें।', exEs: 'A la llegada a la terminal, recoge tu equipaje en la cinta 4.', ic: '🛬' },
    { w: 'prior to', p: '/ˈpraɪər tuː/', m: 'before a particular time or event', hi: 'से पूर्व / से पहले', es: 'antes de / previo a', fr: 'avant / préalable à', de: 'vor / im Vorfeld von', pt: 'antes de / prévio a', zh: '在...之前', ar: 'قبل / قبيل', ja: '〜に先立って', ru: 'до / перед', ex: 'Please verify your passport expiration date prior to booking.', exHi: 'कृपया बुकिंग करने से पहले अपने पासपोर्ट की समाप्ति तिथि सत्यापित करें।', exEs: 'Por favor verifique la fecha de vencimiento de su pasaporte antes de reservar.', ic: '⏱️' },
    { w: 'throughout', p: '/θruːˈaʊt/', m: 'in every part of a place or during the whole period of time', hi: 'पूरे समय / सर्वत्र', es: 'a lo largo de / durante todo', fr: 'tout au long de', de: 'während / im gesamten', pt: 'ao longo de / durante todo', zh: '贯穿 / 整个期间', ar: 'طوال / في جميع أنحاء', ja: '〜の間ずっと / 至る所に', ru: 'на протяжении / повсюду', ex: 'Please keep your identification badge visible throughout the tour.', exHi: 'कृपया पूरे दौरे के दौरान अपना पहचान बैज दृश्यमान रखें।', exEs: 'Por favor mantén visible tu credencial de identificación durante todo el recorrido.', ic: '🌐' },
    { w: 'reservation', p: '/ˌrezəˈveɪʃn/', m: 'an arrangement to secure accommodations or seats in advance', hi: 'आरक्षण / बुकिंग', es: 'reserva', fr: 'réservation', de: 'Reservierung / Buchung', pt: 'reserva', zh: '预订', ar: 'حجز', ja: '予約', ru: 'бронирование', ex: 'I made a dinner reservation for eight people at the Italian bistro.', exHi: 'मैंने इतालवी बिस्ट्रो में आठ लोगों के लिए रात के खाने का आरक्षण कराया।', exEs: 'Hice una reserva para cenar para ocho personas en el bistró italiano.', ic: '🎫' },
    { w: 'accommodation', p: '/əˌkɒməˈdeɪʃn/', m: 'a room, group of rooms, or building in which someone may live or stay', hi: 'आवास / ठहरने का स्थान', es: 'alojamiento / hospedaje', fr: 'hébergement / logement', de: 'Unterkunft', pt: 'hospedagem / acomodação', zh: '住宿', ar: 'إقامة / سكن', ja: '宿泊施設', ru: 'жилье / размещение', ex: 'Hotel accommodation is included in the conference registration fee.', exHi: 'सम्मेलन पंजीकरण शुल्क में होटल आवास शामिल है।', exEs: 'El alojamiento en el hotel está incluido en la tarifa de inscripción.', ic: '🏨' },
    { w: 'charter', p: '/ˈtʃɑːtər/', m: 'hire a bus, aircraft, or boat for private group use', hi: 'किराए पर लेना (निजी समूह के लिए)', es: 'alquilar / fletar (un transporte privado)', fr: 'affréter / louer', de: 'chartern / mieten', pt: 'fretar', zh: '包租 (车辆/飞机)', ar: 'استئجار حافلة أو طائرة خاصة', ja: 'チャーターする / 貸し切る', ru: 'арендовать / фрахтовать', ex: 'We chartered a private minibus to transport our team to the airport.', exHi: 'हमने अपनी टीम को हवाई अड्डे तक ले जाने के लिए एक निजी मिनीबस किराए पर ली।', exEs: 'Alquilamos un minibús privado para transportar a nuestro equipo al aeropuerto.', ic: '🚐' },
    { w: 'punctual', p: '/ˈpʌŋktʃuəl/', m: 'happening or doing something at the agreed or proper time; on time', hi: 'समयनिष्ठ / समय का पाबंद', es: 'puntual', fr: 'ponctuel', de: 'pünktlich', pt: 'pontual', zh: '准时的 / 守时的', ar: 'دقيق في المواعيد', ja: '時間を守る / 時間通りの', ru: 'пунктуальный / точный', ex: 'Please be punctual so the tour bus does not leave without you.', exHi: 'कृपया समय के पाबंद रहें ताकि टूर बस आपके बिना न छूटे।', exEs: 'Por favor sé puntual para que el autobús turístico no se vaya sin ti.', ic: '⏰' },
    { w: 'coordinate', p: '/kəʊˈɔːdɪneɪt/', m: 'bring the different elements of an activity into an efficient relationship', hi: 'समन्वय करना', es: 'coordinar', fr: 'coordonner', de: 'koordinieren', pt: 'coordenar', zh: '协调', ar: 'ينسق', ja: '調整する / 統括する', ru: 'координировать', ex: 'Carlos will coordinate hotel check-ins for the entire delegation.', exHi: 'कार्लोस पूरे प्रतिनिधिमंडल के लिए होटल चेक-इन का समन्वय करेगा।', exEs: 'Carlos coordinará los registros del hotel para toda la delegación.', ic: '🔄' },
    { w: 'baggage', p: '/ˈbæɡɪdʒ/', m: 'personal belongings packed in suitcases for traveling', hi: 'सामान / बैगेज', es: 'equipaje', fr: 'bagages', de: 'Gepäck', pt: 'bagagem', zh: '行李', ar: 'أمتعة', ja: '手荷物', ru: 'багаж', ex: 'Each traveler is allowed one piece of checked baggage.', exHi: 'प्रत्येक यात्री को चेक-इन बैगेज के एक टुकड़े की अनुमति है।', exEs: 'A cada viajero se le permite una pieza de equipaje facturado.', ic: '🧳' },
    { w: 'check-in', p: '/ˈtʃekɪn/', m: 'the act of reporting one\'s arrival at an airport or hotel', hi: 'चेक-इन करना / आगमन दर्ज करना', es: 'registro / check-in', fr: 'enregistrement', de: 'Einchecken / Anmeldung', pt: 'check-in / registro de entrada', zh: '办理登机/入住', ar: 'تسجيل الوصول', ja: 'チェックイン', ru: 'регистрация', ex: 'Online check-in opens 24 hours prior to flight departure.', exHi: 'ऑनलाइन चेक-इन उड़ान प्रस्थान से 24 घंटे पहले खुलता है।', exEs: 'El check-in en línea se abre 24 horas antes de la salida del vuelo.', ic: '📲' },
    { w: 'connection', p: '/kəˈnekʃn/', m: 'a transfer between two different transport vehicles', hi: 'कनेक्शन / अगली गाड़ी या उड़ान', es: 'conexión / transbordo', fr: 'correspondance', de: 'Anschlussverbindung', pt: 'conexão / baldeação', zh: '转乘 / 中转航班', ar: 'رحلة متابعة', ja: '乗り継ぎ / 接続', ru: 'пересадка / стыковка', ex: 'We have a two-hour connection at Frankfurt Airport.', exHi: 'फ्रैंकफर्ट हवाई अड्डे पर हमारा दो घंटे का कनेक्शन है।', exEs: 'Tenemos una conexión de dos horas en el aeropuerto de Frankfurt.', ic: '✈️' },
    { w: 'sightseeing', p: '/ˈsaɪtsiːɪŋ/', m: 'the activity of visiting places of interest in a location', hi: 'दर्शनीय स्थलों की यात्रा', es: 'turismo / visitas turísticas', fr: 'visites touristiques', de: 'Besichtigungstour', pt: 'passeio turístico', zh: '观光游览', ar: 'معالم سياحية', ja: '観光', ru: 'осмотр достопримечательностей', ex: 'We allocated Sunday afternoon for historic sightseeing.', exHi: 'हमने रविवार दोपहर का समय ऐतिहासिक दर्शनीय स्थलों के लिए निर्धारित किया।', exEs: 'Asignamos el domingo por la tarde para visitas turísticas históricas.', ic: '🏛️' },
    { w: 'delegate', p: '/ˈdelɪɡət/', m: 'a person sent or authorized to represent others, especially at a conference', hi: 'प्रतिनिधि', es: 'delegado / representante', fr: 'délégué', de: 'Delegierter / Vertreter', pt: 'delegado / representante', zh: '代表', ar: 'مندوب / ممثل', ja: '代表 / 参加者', ru: 'делегат / представитель', ex: 'Over 200 delegates attended the clean energy summit.', exHi: '200 से अधिक प्रतिनिधियों ने स्वच्छ ऊर्जा शिखर सम्मेलन में भाग लिया।', exEs: 'Más de 200 delegados asistieron a la cumbre de energía limpia.', ic: '👥' },
    { w: 'boarding pass', p: '/ˈbɔːdɪŋ pɑːs/', m: 'a card that gives a passenger permission to board an aircraft', hi: 'बोर्डिंग पास', es: 'tarjeta de embarque', fr: 'carte d\'embarquement', de: 'Bordkarte', pt: 'cartão de embarque', zh: '登机牌', ar: 'بطاقة صعود الطائرة', ja: '搭乗券', ru: 'посадочный талон', ex: 'Have your digital boarding pass ready at gate 12.', exHi: 'गेट 12 पर अपना डिजिटल बोर्डिंग पास तैयार रखें।', exEs: 'Ten lista tu tarjeta de embarque digital en la puerta 12.', ic: '🎟️' },
    { w: 'terminal', p: '/ˈtɜːmɪnl/', m: 'a building at an airport or transport hub where journeys begin and end', hi: 'टर्मिनल / स्टेशन भवन', es: 'terminal', fr: 'terminal', de: 'Terminal', pt: 'terminal', zh: '航站楼 / 终点站', ar: 'صالة المطار', ja: 'ターミナル', ru: 'терминал', ex: 'International departures leave from Terminal 3.', exHi: 'अंतर्राष्ट्रीय प्रस्थान टर्मिनल 3 से रवाना होते हैं।', exEs: 'Las salidas internacionales salen de la Terminal 3.', ic: '🏢' },
    { w: 'guide', p: '/ɡaɪd/', m: 'a person who leads tourists or provides information about a place', hi: 'मार्गदर्शक / गाइड', es: 'guía turístico', fr: 'guide', de: 'Reiseleiter / Führer', pt: 'guia', zh: '导游', ar: 'مرشد سياحي', ja: 'ガイド / 案内人', ru: 'гид / экскурсовод', ex: 'Our local tour guide spoke fluent English and Japanese.', exHi: 'हमारे स्थानीय टूर गाइड ने धाराप्रवाह अंग्रेजी और जापानी भाषा बोली।', exEs: 'Nuestro guía turístico local hablaba inglés y japonés con fluidez.', ic: '🚩' }
  ],
  chunks: [
    { phrase: 'upon arrival', meaning: 'immediately after arriving at a destination', hi: 'पहुंचने पर / आगमन के तुरंत बाद', es: 'a la llegada / al llegar', fr: 'à l\'arrivée', de: 'bei Ankunft', pt: 'ao chegar / na chegada', zh: '到达后立即', ar: 'عند الوصول', ja: '到着次第', ru: 'по прибытии', note: 'Formal time sequencer: "Upon arrival, please check in at the front desk."', ic: '🛬' },
    { phrase: 'prior to departure', meaning: 'before leaving or starting the trip', hi: 'प्रस्थान से पहले', es: 'antes de la salida', fr: 'avant le départ', de: 'vor der Abreise', pt: 'antes da partida', zh: '起程之前', ar: 'قبل المغادرة', ja: '出発前に', ru: 'до отправления', note: 'Logistics collocation: "All bags must be tagged prior to departure."', ic: '🛫' },
    { phrase: 'must be', meaning: 'used to express strong logical certainty (it is surely true)', hi: 'निश्चित रूप से होना चाहिए / ज़रूर होगा', es: 'debe ser / sin duda es', fr: 'doit être', de: 'muss sein (sicherlich)', pt: 'deve ser (com certeza)', zh: '肯定 / 一定是', ar: 'يجب أن يكون (حتماً)', ja: '〜に違いない', ru: 'должно быть / наверняка', note: 'Deduction modal: "He has three suitcases; he must be staying for a month."', ic: '🔍' },
    { phrase: 'can\'t be', meaning: 'used to express strong logical impossibility (it is impossible)', hi: 'कदापि नहीं हो सकता / असंभव है', es: 'no puede ser (imposible)', fr: 'ne peut pas être', de: 'kann nicht sein (unmöglich)', pt: 'não pode ser', zh: '不可能 / 绝不是', ar: 'لا يمكن أن يكون', ja: '〜のはずがない', ru: 'не может быть', note: 'Deduction modal: "The gate can\'t be closed; it is only 2 PM."', ic: '🚫' },
    { phrase: 'make your way to', meaning: 'travel or move toward a specific designated location', hi: 'की ओर बढ़ना / जाना', es: 'dirigirse a / encaminarse hacia', fr: 'se diriger vers', de: 'sich begeben nach', pt: 'dirigir-se a', zh: '前往', ar: 'التوجه إلى', ja: '〜へ向かう', ru: 'направляться к', note: 'Instructional idiom: "Please make your way to platform 4."', ic: '🚶' },
    { phrase: 'on schedule', meaning: 'occurring at the planned time without delay', hi: 'समय पर / कार्यक्रम के अनुसार', es: 'a tiempo / según lo programado', fr: 'à l\'heure / selon l\'horaire', de: 'nach Plan / pünktlich', pt: 'dentro do cronograma / no horário', zh: '按时 / 准点', ar: 'في الموعد المحدد', ja: '予定通りに', ru: 'по расписанию / вовремя', note: 'Collocation: "The high-speed train arrived exactly on schedule."', ic: '⏱️' },
    { phrase: 'gather at the meeting point', meaning: 'assemble together at the agreed location', hi: 'मिलन स्थल पर एकत्रित होना', es: 'reunirse en el punto de encuentro', fr: 'se rassembler au point de rencontre', de: 'sich am Treffpunkt versammeln', pt: 'reunir-se no ponto de encontro', zh: '在集合地点汇合', ar: 'التجمع عند نقطة اللقاء', ja: '集合場所に集まる', ru: 'собраться в месте встречи', note: 'Group coordination chunk: "Please gather at the meeting point by 8:00 AM."', ic: '📍' },
    { phrase: 'throughout the journey', meaning: 'during the entire duration of the trip', hi: 'पूरी यात्रा के दौरान', es: 'durante todo el viaje', fr: 'tout au long du voyage', de: 'während der gesamten Reise', pt: 'durante toda a viagem', zh: '在整个旅途中', ar: 'طوال الرحلة', ja: '旅行中ずっと', ru: 'на протяжении всей поездки', note: 'Time span chunk: "Stay hydrated throughout the journey."', ic: '🌐' }
  ],
  grammar: {
    title: 'Prepositions of Time/Sequence (prior to, upon arrival, throughout) & Modals of Deduction (must be, can\'t be)',
    concept: 'Sequencing logistical events formally and expressing logical certainty or impossibility based on visible evidence.',
    patterns: [
      {
        title: 'Formal Time Sequencers (prior to, upon arrival, throughout)',
        structure: 'prior to + Noun / -ing | upon arrival (+ at/in) | throughout + Time/Place Noun',
        rule: '"Prior to" means before; "upon arrival" means right after arriving; "throughout" means during the entirety of an event.',
        examples: [
          { en: 'Prior to boarding, passengers must present their passports.', hi: 'बोर्डिंग से पहले, यात्रियों को अपना पासपोर्ट प्रस्तुत करना होगा।', es: 'Antes de abordar, los pasajeros deben presentar sus pasaportes.' },
          { en: 'Upon arrival in Tokyo, the tour bus will meet us at gate 3.', hi: 'टोक्यो आगमन पर, टूर बस गेट 3 पर हमसे मिलेगी।', es: 'A la llegada a Tokio, el autobús turístico nos esperará en la puerta 3.' }
        ]
      },
      {
        title: 'Modals of Deduction (must be / can\'t be)',
        structure: 'Subject + must be + Adjective / Noun (sure it is true) | Subject + can\'t be + Adjective / Noun (sure it is false)',
        rule: 'Use "must be" when evidence makes you almost 100% certain something is true. Use "can\'t be" when evidence proves something is impossible.',
        examples: [
          { en: 'The bus has thirty empty seats; it must be our group charter.', hi: 'बस में तीस खाली सीटें हैं; यह निश्चित रूप से हमारा समूह चार्टर होना चाहिए।', es: 'El autobús tiene treinta asientos vacíos; debe ser nuestro chárter grupal.' },
          { en: 'That can\'t be our flight; our departure is scheduled for 5 PM, not 2 PM.', hi: 'वह हमारी उड़ान नहीं हो सकती; हमारा प्रस्थान शाम 5 बजे निर्धारित है, दोपहर 2 बजे नहीं।', es: 'Ese no puede ser nuestro vuelo; nuestra salida está programada para las 5 PM, no para las 2 PM.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'Prior to leave the hotel, hand in your keys.', cor: 'Prior to leaving the hotel, hand in your keys.', exp: 'After the preposition "prior to", use a gerund ("leaving") or a noun phrase ("departure").', hi: '"prior to" के बाद gerund ("leaving") या संज्ञा का प्रयोग करें।', es: 'Después de "prior to", usa un gerundio ("leaving") o un sustantivo.' },
    { inc: 'Upon the arrival at the hotel, check in.', cor: 'Upon arrival at the hotel, check in.', exp: 'The standard fixed phrase is "upon arrival", without the article "the".', hi: 'सही वाक्यांश "upon arrival" है, बिना "the" के।', es: 'La frase fija es "upon arrival", sin el artículo "the".' },
    { inc: 'That mustn\'t be the right gate.', cor: 'That can\'t be the right gate.', exp: 'In standard English, use "can\'t be" (not "mustn\'t be") to express logical impossibility.', hi: 'तार्किक असंभवता के लिए "can\'t be" का प्रयोग करें, "mustn\'t be" का नहीं।', es: 'Para expresar imposibilidad lógica, usa "can\'t be", no "mustn\'t be".' },
    { inc: 'The train is on the schedule.', cor: 'The train is on schedule.', exp: 'The idiom is "on schedule" without the article "the".', hi: 'सही मुहावरा "on schedule" है।', es: 'La expresión correcta es "on schedule" sin "the".' },
    { inc: 'Make your ways to the gate.', cor: 'Make your way to the gate.', exp: 'The idiom is singular: "make your way to".', hi: 'सही मुहावरा एकवचन में "make your way to" है।', es: 'La expresión es en singular: "make your way to".' }
  ],
  dialogues: [
    {
      title: 'Briefing Group Travelers at the Airport Departure Hub',
      context: 'Ken (Tour Leader) briefs 15 travelers before clearing international security.',
      charA: { name: 'Ken', av: '👨‍💼', role: 'Tour Leader' },
      charB: { name: 'Lisa', av: '👩‍🌾', role: 'Group Traveler' },
      turns: [
        { spk: 'Ken', text: 'Attention everyone! Prior to passing through security, please ensure all liquids are in clear bags and your passports are ready.', hi: 'सभी ध्यान दें! सुरक्षा जांच से गुजरने से पहले, कृपया सुनिश्चित करें कि सभी तरल पदार्थ पारदर्शी बैग में हैं और आपके पासपोर्ट तैयार हैं।', es: '¡Atención a todos! Antes de pasar por seguridad, asegúrense de que todos los líquidos estén en bolsas transparentes y sus pasaportes listos.' },
        { spk: 'Lisa', text: 'Ken, what is our designated meeting point once we clear passport control?', hi: 'केन, पासपोर्ट नियंत्रण पार करने के बाद हमारा निर्धारित मिलन स्थल क्या है?', es: 'Ken, ¿cuál es nuestro punto de encuentro designado una vez que pasemos el control de pasaportes?' },
        { spk: 'Ken', text: 'Please make your way directly to Gate B14. We must gather there by 9:15 AM sharp for boarding.', hi: 'कृपया सीधे गेट B14 पर जाएं। हमें बोर्डिंग के लिए सुबह 9:15 बजे सटीक वहां इकट्ठा होना होगा।', es: 'Por favor diríjanse directamente a la Puerta B14. Debemos reunirnos allí a las 9:15 AM en punto para abordar.' },
        { spk: 'Lisa', text: 'Look at that huge crowd near gate B12. That must be the delayed flight to Rome.', hi: 'गेट B12 के पास उस भारी भीड़ को देखें। वह निश्चित रूप से रोम के लिए विलंबित उड़ान होनी चाहिए।', es: 'Mira esa gran multitud cerca de la puerta B12. Ese debe ser el vuelo retrasado a Roma.' },
        { spk: 'Ken', text: 'Yes, but our flight is completely on schedule. Upon arrival in Madrid, a chartered bus will take us to the hotel.', hi: 'हाँ, लेकिन हमारी उड़ान पूरी तरह से समय पर है। मैड्रिड पहुंचने पर, एक चार्टर्ड बस हमें होटल ले जाएगी।', es: 'Sí, pero nuestro vuelo está completamente a tiempo. A la llegada a Madrid, un autobús alquilado nos llevará al hotel.' }
      ]
    },
    {
      title: 'Reviewing the Daily Excursion Itinerary',
      context: 'Victor (Local Guide) explains the daily schedule to tourists at the hotel lobby.',
      charA: { name: 'Victor', av: '👨‍✈️', role: 'Local Guide' },
      charB: { name: 'Mei', av: '👩‍🎨', role: 'Tourist' },
      turns: [
        { spk: 'Victor', text: 'Good morning! Today\'s itinerary begins with a guided tour of the ancient castle, followed by lunch at the harbor.', hi: 'सुप्रभात! आज का यात्रा कार्यक्रम प्राचीन महल के निर्देशित दौरे से शुरू होता है, जिसके बाद बंदरगाह पर दोपहर का भोजन होता है।', es: '¡Buenos días! El itinerario de hoy comienza con una visita guiada al antiguo castillo, seguida de un almuerzo en el puerto.' },
        { spk: 'Mei', text: 'Is transportation provided throughout the entire day, Victor?', hi: 'क्या पूरे दिन परिवहन की व्यवस्था है, विक्टर?', es: '¿Se proporciona transporte durante todo el día, Víctor?' },
        { spk: 'Victor', text: 'Yes, our coach will stay with us throughout the excursion. Please keep your entry tickets safe.', hi: 'हाँ, हमारा कोच पूरे भ्रमण के दौरान हमारे साथ रहेगा। कृपया अपने प्रवेश टिकट सुरक्षित रखें।', es: 'Sí, nuestro autobús se quedará con nosotros durante toda la excursión. Por favor guarden sus entradas en un lugar seguro.' },
        { spk: 'Mei', text: 'Is that coach outside ours? The sign says "City Express".', hi: 'क्या बाहर वाली वह बस हमारी है? बोर्ड पर "सिटी एक्सप्रेस" लिखा है।', es: '¿Ese autobús de afuera es el nuestro? El letrero dice "City Express".' },
        { spk: 'Victor', text: 'No, that can\'t be ours; ours is a blue luxury minibus with the "Heritage Tours" logo.', hi: 'नहीं, वह हमारी नहीं हो सकती; हमारी "हेरिटेज टूर्स" लोगो वाली एक नीली लक्जरी मिनीबस है।', es: 'No, ese no puede ser el nuestro; el nuestro es un minibús azul de lujo con el logotipo de "Heritage Tours".' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_171_p1',
      type: 'fill_blank',
      prompt: 'Select the correct sequential preposition followed by a gerund:',
      text: '[blank] boarding the train, ensure you have your validated ticket.',
      options: [
        { id: '1', text: 'Prior to', isCorrect: true },
        { id: '2', text: 'Upon', isCorrect: false },
        { id: '3', text: 'Throughout', isCorrect: false },
        { id: '4', text: 'Unless', isCorrect: false }
      ],
      correctAnswer: 'Prior to',
      explanation: '"Prior to" means before.'
    },
    {
      id: 'ex_171_p2',
      type: 'multiple_choice',
      prompt: 'Choose the sentence that expresses logical deduction with certainty based on evidence:',
      options: [
        { id: '1', text: 'He is wearing a pilot uniform; he must be the flight captain.', isCorrect: true },
        { id: '2', text: 'He is wearing a pilot uniform; he can\'t be the flight captain.', isCorrect: false },
        { id: '3', text: 'He is wearing a pilot uniform; he mustn\'t be the flight captain.', isCorrect: false },
        { id: '4', text: 'He is wearing a pilot uniform; he maybe must be captain.', isCorrect: false }
      ],
      correctAnswer: 'He is wearing a pilot uniform; he must be the flight captain.',
      explanation: '"Must be" indicates strong logical deduction based on clear evidence.'
    },
    {
      id: 'ex_171_p3',
      type: 'word_ordering',
      prompt: 'Arrange the tokens into an arrival instruction:',
      tokens: ['Upon', 'arrival', 'in', 'Paris', ',', 'meet', 'at', 'gate', 'two', '.'],
      correctOrder: ['Upon', 'arrival', 'in', 'Paris', ',', 'meet', 'at', 'gate', 'two', '.'],
      explanation: 'Use the phrase "Upon arrival in + city, ...".'
    },
    {
      id: 'ex_171_p4',
      type: 'error_correction',
      prompt: 'Fix the logical deduction error:',
      errorSentence: 'That ticket mustn\'t be valid because the date expired last month.',
      correctSentence: 'That ticket can\'t be valid because the date expired last month.',
      explanation: 'Use "can\'t be" for logical impossibility, not "mustn\'t be".'
    },
    {
      id: 'ex_171_p5',
      type: 'translation',
      prompt: 'Translate to English: "होटल प्रस्थान से पहले अपने कमरे की चाबियां सौंप दें।"',
      targetSentence: 'Prior to departing the hotel, hand in your room keys.',
      explanation: '"Prior to departing" or "Prior to departure" correctly conveys this.'
    },
    {
      id: 'ex_171_p6',
      type: 'multiple_choice',
      prompt: 'What does "throughout the trip" mean?',
      options: [
        { id: '1', text: 'During the entire duration of the trip', isCorrect: true },
        { id: '2', text: 'Only during the first five minutes of travel', isCorrect: false },
        { id: '3', text: 'After the trip is completely finished', isCorrect: false },
        { id: '4', text: 'Whenever the trip is canceled', isCorrect: false }
      ],
      correctAnswer: 'During the entire duration of the trip',
      explanation: '"Throughout" means across the entire time period.'
    },
    {
      id: 'ex_171_p7',
      type: 'fill_blank',
      prompt: 'Complete the direction phrase:',
      text: 'Please make your [blank] to baggage claim area 3.',
      options: [
        { id: '1', text: 'way', isCorrect: true },
        { id: '2', text: 'ways', isCorrect: false },
        { id: '3', text: 'road', isCorrect: false },
        { id: '4', text: 'path', isCorrect: false }
      ],
      correctAnswer: 'way',
      explanation: 'The established idiom is "make your way to".'
    },
    {
      id: 'ex_171_p8',
      type: 'speaking',
      prompt: 'Read this travel instruction clearly:',
      targetSentence: 'Upon arrival at the airport, gather at the meeting point near the information desk.',
      audioText: 'Upon arrival at the airport, gather at the meeting point near the information desk.',
      explanation: 'Pronounce "Upon arrival" and "information desk" clearly.'
    },
    {
      id: 'ex_171_p9',
      type: 'listening',
      prompt: 'Listen to the travel update and identify the flight status:',
      audioText: 'Despite the morning fog, our chartered flight departed exactly on schedule.',
      options: [
        { id: '1', text: 'The chartered flight left on time.', isCorrect: true },
        { id: '2', text: 'The flight was canceled due to fog.', isCorrect: false },
        { id: '3', text: 'The flight was postponed until tomorrow.', isCorrect: false },
        { id: '4', text: 'The passengers took a train instead.', isCorrect: false }
      ],
      correctAnswer: 'The chartered flight left on time.',
      explanation: '"departed exactly on schedule" means on time.'
    },
    {
      id: 'ex_171_p10',
      type: 'match_pairs',
      prompt: 'Match the travel terms with their meanings:',
      pairs: [
        { left: 'Itinerary', right: 'Scheduled travel plan' },
        { left: 'Logistics', right: 'Detailed organization of travel' },
        { left: 'Meeting point', right: 'Agreed gathering location' },
        { left: 'Punctual', right: 'Arriving strictly on time' }
      ]
    }
  ],
  review: [
    {
      id: 'ex_171_r1',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "must be" for deduction?',
      options: [
        { id: '1', text: 'Look at the snow outside; it must be freezing cold.', isCorrect: true },
        { id: '2', text: 'Look at the snow outside; it can\'t be cold.', isCorrect: false },
        { id: '3', text: 'Look at the snow outside; it mustn\'t be cold.', isCorrect: false },
        { id: '4', text: 'Look at snow outside; it must to be cold.', isCorrect: false }
      ],
      correctAnswer: 'Look at the snow outside; it must be freezing cold.',
      explanation: '"Must be" conveys logical certainty supported by the snow.'
    },
    {
      id: 'ex_171_r2',
      type: 'word_ordering',
      prompt: 'Order the words into a logistical rule:',
      tokens: ['Prior', 'to', 'boarding', ',', 'show', 'your', 'digital', 'boarding', 'pass', '.'],
      correctOrder: ['Prior', 'to', 'boarding', ',', 'show', 'your', 'digital', 'boarding', 'pass', '.'],
      explanation: 'Use "Prior to boarding, ...".'
    },
    {
      id: 'ex_171_r3',
      type: 'fill_blank',
      prompt: 'Fill in the blank:',
      text: 'That [blank] be our guide; he is holding our group name sign.',
      options: [
        { id: '1', text: 'must', isCorrect: true },
        { id: '2', text: 'can\'t', isCorrect: false },
        { id: '3', text: 'would', isCorrect: false },
        { id: '4', text: 'shall', isCorrect: false }
      ],
      correctAnswer: 'must',
      explanation: 'The sign is evidence, so "must be" is the logical conclusion.'
    },
    {
      id: 'ex_171_r4',
      type: 'translation',
      prompt: 'Translate: "पूरे दौरे के दौरान कृपया अपने समूह के साथ रहें।"',
      targetSentence: 'Please stay with your group throughout the tour.',
      explanation: '"throughout the tour" indicates the entire duration.'
    },
    {
      id: 'ex_171_r5',
      type: 'speaking',
      prompt: 'Speak this instruction aloud:',
      targetSentence: 'Prior to departure, please check that you have all your personal belongings.',
      audioText: 'Prior to departure, please check that you have all your personal belongings.',
      explanation: 'Practice natural rhythm on "Prior to departure" and "personal belongings".'
    },
    {
      id: 'ex_171_r6',
      type: 'error_correction',
      prompt: 'Correct the error:',
      errorSentence: 'Upon the arrival at the station, we will buy tickets.',
      correctSentence: 'Upon arrival at the station, we will buy tickets.',
      explanation: 'Remove "the" from "upon arrival".'
    }
  ],
  assessment: [
    {
      id: 'ex_171_a1',
      type: 'multiple_choice',
      prompt: 'Identify the grammatically correct deduction statement:',
      options: [
        { id: '1', text: 'The museum lights are off and the door is locked; it can\'t be open.', isCorrect: true },
        { id: '2', text: 'The museum lights are off and door is locked; it mustn\'t be open.', isCorrect: false },
        { id: '3', text: 'The museum lights are off; it must to be closed open.', isCorrect: false },
        { id: '4', text: 'The museum lights are off; it not can be open.', isCorrect: false }
      ],
      correctAnswer: 'The museum lights are off and the door is locked; it can\'t be open.',
      explanation: '"Can\'t be open" correctly expresses logical impossibility based on locked doors.'
    },
    {
      id: 'ex_171_a2',
      type: 'fill_blank',
      prompt: 'Choose the appropriate sequential preposition:',
      text: 'All group members must check their passports [blank] departure.',
      options: [
        { id: '1', text: 'prior to', isCorrect: true },
        { id: '2', text: 'throughout', isCorrect: false },
        { id: '3', text: 'upon', isCorrect: false },
        { id: '4', text: 'unless', isCorrect: false }
      ],
      correctAnswer: 'prior to',
      explanation: '"Prior to departure" means before leaving.'
    },
    {
      id: 'ex_171_a3',
      type: 'word_ordering',
      prompt: 'Arrange into an itinerary direction:',
      tokens: ['Make', 'your', 'way', 'to', 'the', 'chartered', 'minibus', 'outside', '.'],
      correctOrder: ['Make', 'your', 'way', 'to', 'the', 'chartered', 'minibus', 'outside', '.'],
      explanation: 'Imperative instruction with "Make your way to...".'
    },
    {
      id: 'ex_171_a4',
      type: 'translation',
      prompt: 'Translate: "हवाई अड्डे पर पहुंचने पर हमारा टूर गाइड हमारा स्वागत करेगा।"',
      targetSentence: 'Upon arrival at the airport, our tour guide will greet us.',
      explanation: '"Upon arrival at the airport" is the exact formal expression.'
    },
    {
      id: 'ex_171_a5',
      type: 'speaking',
      prompt: 'Read this travel schedule announcement:',
      targetSentence: 'Our flight is completely on schedule and boarding will begin in fifteen minutes.',
      audioText: 'Our flight is completely on schedule and boarding will begin in fifteen minutes.',
      explanation: 'Pronounce "completely on schedule" and "fifteen minutes" clearly.'
    },
    {
      id: 'ex_171_a6',
      type: 'personal_production',
      prompt: 'Write two sentences describing a group trip plan using "prior to departure" and "upon arrival".',
      explanation: 'Example: "Prior to departure, we will gather at the train station entrance. Upon arrival in London, we will take a taxi directly to our hotel."'
    }
  ]
};
