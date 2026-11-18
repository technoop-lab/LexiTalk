import { LessonConfigA2 } from './unit9_builder_helper';

// =========================================================================
// LESSON 130: Making Complaints & Seeking Solutions in Customer Service
// =========================================================================
export const LESSON_130_CONFIG: LessonConfigA2 = {
  num: 130,
  title: 'Making Complaints & Seeking Solutions in Customer Service',
  icon: '🛎️',
  estMin: 25,
  objTitle: 'Polite Customer Complaints, Resolving Service Failures & Demanding Redress',
  objDesc: 'Master polite yet firm communication when dealing with faulty goods, billing discrepancies, subpar hotel service, or restaurant mistakes, seeking refunds, replacements, or formal apologies.',
  objHi: 'खराब सामान, गलत बिल, होटल या रेस्तरां में खराब सेवा के लिए विनम्र लेकिन प्रभावी शिकायत करना और रिफंड या बदलाव मांगना सीखें।',
  objEs: 'Expresar quejas con cortesía y firmeza ante productos defectuosos, cobros indebidos o mal servicio en hoteles y restaurantes, pidiendo soluciones.',
  canDo: [
    'I can initiate a polite complaint using "I\'m afraid there is an issue with..." and "I\'m calling to complain about...".',
    'I can explain exact defects or billing errors calmly with concrete evidence.',
    'I can request appropriate remedies (refund, exchange, replacement, voucher, manager intervention).',
    'I can respond appropriately to customer service offers and negotiate fair resolutions.'
  ],
  canDoHi: [
    'मैं "I\'m afraid there is an issue with..." से विनम्रतापूर्वक शिकायत शुरू कर सकता हूँ।',
    'मैं शांत रहकर बिलिंग त्रुटियों या दोषपूर्ण वस्तुओं का सही विवरण दे सकता हूँ।',
    'मैं रिफंड, बदलाव (replacement) या मैनेजर से बात करने का अनुरोध कर सकता हूँ।',
    'मैं ग्राहक सेवा के प्रस्तावों का मूल्यांकन करके उचित समाधान पर सहमति जता सकता हूँ।'
  ],
  canDoEs: [
    'Puedo iniciar una queja educadamente con expresiones estándar.',
    'Puedo explicar fallos o cobros incorrectos con calma.',
    'Puedo solicitar reembolsos, cambios o hablar con el gerente.',
    'Puedo negociar soluciones justas en atención al cliente.'
  ],
  vocab: [
    { w: 'complaint', p: '/kəmˈpleɪnt/', m: 'a statement that something is unsatisfactory or unacceptable', hi: 'शिकायत / आपत्ति', es: 'queja / reclamación', fr: 'plainte / réclamation', de: 'Beschwerde / Reklamation', pt: 'reclamação / queixa', zh: '投诉 / 抱怨', ar: 'شكوى', ja: '苦情 / クレーム', ru: 'жалоба / претензия', ex: 'I would like to make a formal complaint about our hotel room.', exHi: 'मैं हमारे होटल के कमरे के बारे में एक औपचारिक शिकायत दर्ज करना चाहूँगा।', exEs: 'Me gustaría presentar una queja formal sobre nuestra habitación de hotel.', ic: '📝' },
    { w: 'defective', p: '/dɪˈfektɪv/', m: 'imperfect or faulty; not working as intended', hi: 'दोषपूर्ण / खराब', es: 'defectuoso / fallado', fr: 'défectueux', de: 'defekt / fehlerhaft', pt: 'defeituoso', zh: '有缺陷的 / 损坏的', ar: 'معيب / تالف', ja: '欠陥のある / 不良の', ru: 'дефектный / бракованный', ex: 'The blender I bought yesterday is completely defective.', exHi: 'मैंने कल जो ब्लेंडर खरीदा था वह पूरी तरह से खराब है।', exEs: 'La licuadora que compré ayer está completamente defectuosa.', ic: '⚠️' },
    { w: 'dissatisfied', p: '/dɪsˈsætɪsfaɪd/', m: 'not content or pleased with something', hi: 'असंतुष्ट / नाखुश', es: 'insatisfecho / descontento', fr: 'insatisfait / mécontent', de: 'unzufrieden', pt: 'insatisfeito', zh: '不满意', ar: 'غير راضٍ', ja: '不満な', ru: 'недовольный / неудовлетворенный', ex: 'The customer was dissatisfied with the cold soup and slow service.', exHi: 'ग्राहक ठंडे सूप और धीमी सेवा से असंतुष्ट था।', exEs: 'El cliente estaba insatisfecho con la sopa fría y el servicio lento.', ic: '😒' },
    { w: 'replacement', p: '/rɪˈpleɪsmənt/', m: 'a person or thing that takes the place of another', hi: 'बदलाव / नया पीस मिलना', es: 'reemplazo / sustitución', fr: 'remplacement', de: 'Ersatz / Umtausch', pt: 'substituição / reposição', zh: '更换品 / 换货', ar: 'استبدال / بديل', ja: '交換品 / 取り替え', ru: 'замена', ex: 'Could you provide a replacement for this cracked glass screen?', exHi: 'क्या आप इस टूटी हुई ग्लास स्क्रीन के बदले दूसरा नया पीस दे सकते हैं?', exEs: '¿Podría proporcionar un reemplazo para esta pantalla rota?', ic: '🔄' },
    { w: 'apologize', p: '/əˈpɒlədʒaɪz/', m: 'express regret for something that one has done wrong', hi: 'माफी मांगना / खेद व्यक्त करना', es: 'disculparse / pedir perdón', fr: 's\'excuser', de: 'sich entschuldigen', pt: 'pedir desculpas', zh: '道歉', ar: 'يعتذر', ja: '謝罪する / 謝る', ru: 'извиняться / приносить извинения', ex: 'The restaurant manager came over to apologize for the long wait.', exHi: 'रेस्तरां प्रबंधक लंबी प्रतीक्षा के लिए माफी मांगने आया।', exEs: 'El gerente del restaurante se acercó a disculparse por la larga espera.', ic: '🙏' },
    { w: 'overcharge', p: '/ˌəʊvəˈtʃɑːdʒ/', m: 'charge someone too much for something', hi: 'अधिक पैसे वसूलना / ज्यादा चार्ज करना', es: 'cobrar de más', fr: 'faire payer trop cher / surfacturer', de: 'zu viel berechnen', pt: 'cobrar a mais', zh: '多收费', ar: 'يغالي في السعر / يفرض رسوماً زائدة', ja: '過大請求する', ru: 'обсчитать / взять лишнее', ex: 'I noticed that you overcharged me for dessert on this bill.', exHi: 'मैंने देखा कि आपने इस बिल पर मिठाई के लिए मुझसे अधिक पैसे लिए हैं।', exEs: 'Noté que me cobró de más por el postre en esta cuenta.', ic: '💳' },
    { w: 'discrepancy', p: '/dɪˈskrepənsi/', m: 'an illogical or unexpected difference between two things', hi: 'विसंगति / अंतर / गड़बड़ी', es: 'discrepancia / diferencia', fr: 'divergence / écart', de: 'Diskrepanz / Abweichung', pt: 'discrepância', zh: '差异 / 不一致', ar: 'تضارب / عدم تطابق', ja: '相違 / 食い違い', ru: 'несоответствие / расхождение', ex: 'There is a ten-euro discrepancy between the receipt and price tag.', exHi: 'रसीद और मूल्य टैग के बीच दस यूरो का अंतर है।', exEs: 'Hay una discrepancia de diez euros entre el recibo y la etiqueta.', ic: '📊' },
    { w: 'unacceptable', p: '/ˌʌnəkˈseptəbl/', m: 'not satisfactory or allowable; objectionable', hi: 'अस्वीकार्य / जो बर्दाश्त न किया जा सके', es: 'inaceptable', fr: 'inacceptable', de: 'unannehmbar / inakzeptabel', pt: 'inaceitável', zh: '无法接受的', ar: 'غير مقبول', ja: '受け入れがたい / 容認できない', ru: 'неприемлемый', ex: 'Waiting two hours for room service is completely unacceptable.', exHi: 'रूम सर्विस के लिए दो घंटे इंतजार करना पूरी तरह से अस्वीकार्य है।', exEs: 'Esperar dos horas por el servicio de habitaciones es inaceptable.', ic: '🚫' },
    { w: 'faulty', p: '/ˈfɔːlti/', m: 'working badly or not working at all', hi: 'खराब / त्रुटिपूर्ण', es: 'defectuoso / averiado', fr: 'défaillant / défectueux', de: 'mangelhaft / fehlerhaft', pt: 'com defeito', zh: '有毛病的', ar: 'معطوب', ja: '不具合のある', ru: 'неисправный', ex: 'This faulty electronic kettle shuts off automatically after ten seconds.', exHi: 'यह खराब बिजली की केतली दस सेकंड के बाद अपने आप बंद हो जाती है।', exEs: 'Este hervidor defectuoso se apaga solo tras diez segundos.', ic: '⚡' },
    { w: 'courteous', p: '/ˈkɜːtiəs/', m: 'polite, respectful, or considerate in manner', hi: 'विनम्र / भद्र', es: 'cortés / educado', fr: 'courtois / poli', de: 'höflich / zuvorkommend', pt: 'cortês / educado', zh: '彬彬有礼的', ar: 'لبق / مهذب', ja: '礼儀正しい', ru: 'вежливый / учтивый', ex: 'The support staff was very courteous despite my frustration.', exHi: 'मेरी निराशा के बावजूद सहायता कर्मचारी बहुत विनम्र थे।', exEs: 'El personal de atención fue muy cortés a pesar de mi molestia.', ic: '🤝' },
    { w: 'receipt', p: '/rɪˈsiːt/', m: 'a printed statement showing that money was paid for goods or services', hi: 'रसीद / बिल', es: 'recibo / tique', fr: 'ticket de caisse / reçu', de: 'Quittung / Kassenbon', pt: 'recibo / cupom fiscal', zh: '购物凭证 / 收条', ar: 'إيصال دفع', ja: 'レシート / 領収書', ru: 'чек', ex: 'I have kept the original purchase receipt and warranty card.', exHi: 'मैंने मूल खरीद रसीद और वारंटी कार्ड को सुरक्षित रखा है।', exEs: 'He guardado el recibo de compra original y la tarjeta de garantía.', ic: '🧾' },
    { w: 'warranty', p: '/ˈwɒrənti/', m: 'a written guarantee issued to the purchaser of an article by its manufacturer', hi: 'वारंटी / गारंटी पत्र', es: 'garantía', fr: 'garantie', de: 'Garantie / Gewährleistung', pt: 'garantía', zh: '保修单', ar: 'ضمان', ja: '保証 / ワランティ', ru: 'гарантия', ex: 'The smartphone comes with a two-year manufacturer warranty.', exHi: 'स्मार्टफोन दो साल की निर्माता वारंटी के साथ आता है।', exEs: 'El teléfono viene con dos años de garantía del fabricante.', ic: '🛡️' },
    { w: 'exchange', p: '/ɪksˈtʃeɪndʒ/', m: 'give something and receive something else in return', hi: 'बदलना / एक्सचेंज करना', es: 'cambiar / canjear', fr: 'échanger', de: 'umtauschen', pt: 'trocar', zh: '调换 / 退换', ar: 'يبدل / يستبدل', ja: '交換する', ru: 'обменивать', ex: 'Can I exchange this shirt for a medium size?', exHi: 'क्या मैं इस शर्ट को मीडियम साइज से बदल सकता हूँ?', exEs: '¿Puedo cambiar esta camisa por una talla mediana?', ic: '👕' },
    { w: 'inconvenience', p: '/ˌɪnkənˈviːniəns/', m: 'trouble or difficulty caused to one\'s personal comfort or ease', hi: 'असुविधा / कष्ट', es: 'molestia / inconveniente', fr: 'désagrément / inconvénient', de: 'Unannehmlichkeit', pt: 'inconveniência / transtorno', zh: '不便 / 麻烦', ar: 'إزعاج / مشقة', ja: '不便 / 迷惑', ru: 'неудобство', ex: 'We sincerely apologize for any inconvenience caused by this delay.', exHi: 'इस देरी से हुई किसी भी असुविधा के लिए हम तहे दिल से माफी चाहते हैं।', exEs: 'Pedimos sinceras disculpas por cualquier inconveniente causado.', ic: '🙇' },
    { w: 'supervisor', p: '/ˈsuːpəvaɪzə/', m: 'a person who directs or oversees a person or activity in a store or hotel', hi: 'सुपरवाइजर / निरीक्षक', es: 'supervisor / encargado', fr: 'superviseur / responsable', de: 'Aufsichtsperson / Schichtleiter', pt: 'supervisor', zh: '主管 / 领班', ar: 'مشرف', ja: '主任 / 監督者', ru: 'руководитель / супервайзер', ex: 'May I speak with the on-duty floor supervisor, please?', exHi: 'क्या मैं ड्यूटी पर मौजूद फ्लोर सुपरवाइजर से बात कर सकता हूँ, कृपया?', exEs: '¿Puedo hablar con el supervisor de turno, por favor?', ic: '👔' },
    { w: 'resolve', p: '/rɪˈzɒlv/', m: 'settle or find a solution to a problem or dispute', hi: 'सुलझाना / हल करना', es: 'resolver / solucionar', fr: 'résoudre', de: 'lösen / beilegen', pt: 'resolver / solucionar', zh: '解决', ar: 'يحل / يسوي', ja: '解決する', ru: 'разрешать / улаживать', ex: 'We hope to resolve this billing inquiry within twenty-four hours.', exHi: 'हम चौबीस घंटों के भीतर इस बिलिंग पूछताछ को हल करने की उम्मीद करते हैं।', exEs: 'Esperamos resolver esta consulta de facturación en veinticuatro horas.', ic: '✅' },
    { w: 'satisfactory', p: '/ˌsætɪsˈfæktəri/', m: 'fulfilling expectations or needs; acceptable', hi: 'संतोषजनक', es: 'satisfactorio / adecuado', fr: 'satisfaisant', de: 'zufriedenstellend', pt: 'satisfatório', zh: '令人满意的', ar: 'مرضٍ', ja: '満足のいく', ru: 'удовлетворительный', ex: 'The store offered a completely satisfactory solution to our issue.', exHi: 'स्टोर ने हमारी समस्या का पूरी तरह से संतोषजनक समाधान पेश किया।', exEs: 'La tienda ofreció una solución totalmente satisfactoria a nuestro problema.', ic: '👍' },
    { w: 'underdone', p: '/ˌʌndəˈdʌn/', m: 'not cooked enough', hi: 'कच्चा / ठीक से न पका हुआ', es: 'poco cocido / crudo', fr: 'pas assez cuit', de: 'nicht durchgegart / halbgar', pt: 'malpassado / cru', zh: '未煮熟的', ar: 'غير ناضج تماماً', ja: '生焼けの / 加熱不足の', ru: 'недожаренный / недоваренный', ex: 'Excuse me, waiter, this roast chicken is completely underdone inside.', exHi: 'माफ कीजिए वेटर, यह रोस्ट चिकन अंदर से बिल्कुल कच्चा है।', exEs: 'Disculpe, camarero, este pollo asado está completamente crudo por dentro.', ic: '🍗' },
    { w: 'damaged', p: '/ˈdæmɪdʒd/', m: 'inflicted with physical harm that impairs value or usefulness', hi: 'क्षतिग्रस्त / टूटा-फूटा', es: 'dañado / estropeado', fr: 'endommagé / abîmé', de: 'beschädigt', pt: 'danificado', zh: '损坏的', ar: 'تالف / متضرر', ja: '破損した', ru: 'поврежденный', ex: 'The cardboard parcel arrived badly crushed and damaged.', exHi: 'गत्ते का पार्सल बुरी तरह कुचला हुआ और क्षतिग्रस्त आया था।', exEs: 'El paquete de cartón llegó muy aplastado y dañado.', ic: '📦' },
    { w: 'assurance', p: '/əˈʃʊərəns/', m: 'a positive declaration intended to give confidence; a promise', hi: 'आश्वासन / भरोसा', es: 'garantía / seguridad', fr: 'assurance / garantie', de: 'Zusicherung / Gewähr', pt: 'garantia / certeza', zh: '保证 / 确信', ar: 'تأكيد / طمأنة', ja: '保証 / 確約', ru: 'заверение / гарантия', ex: 'We need your personal assurance that the delivery will arrive on time.', exHi: 'हमें आपके व्यक्तिगत आश्वासन की आवश्यकता है कि डिलीवरी समय पर पहुंचेगी।', exEs: 'Necesitamos su seguridad de que la entrega llegará a tiempo.', ic: '🤝' }
  ],
  chunks: [
    { phrase: 'I\'m afraid there is a problem with...', meaning: 'polite diplomatic opening for a complaint', hi: 'मुझे खेद है लेकिन ... के साथ एक समस्या है', es: 'Me temo que hay un problema con...', fr: 'J\'ai bien peur qu\'il y ait un problème avec...', de: 'Ich fürchte, es gibt ein Problem mit...', pt: 'Receio que haja um problema com...', zh: '恐怕...出了问题', ar: 'أخشى أن هناك مشكلة في...', ja: '恐れ入りますが、〜に問題があります', ru: 'Боюсь, возникла проблема с...', note: 'Softens the confrontation while staying firm.', ic: '🛎️' },
    { phrase: 'I would like to request a refund', meaning: 'formally asking for money back', hi: 'मैं रिफंड का अनुरोध करना चाहूँगा', es: 'me gustaría solicitar un reembolso', fr: 'j\'aimerais demander un remboursement', de: 'ich möchte eine Rückerstattung beantragen', pt: 'gostaria de solicitar um reembolso', zh: '我想要申请退款', ar: 'أود أن أطلب استرداد أموالي', ja: '返金を求めたいのですが', ru: 'я хотел бы запросить возврат средств', note: 'Standard polite financial demand.', ic: '💵' },
    { phrase: 'Could I speak to the manager, please?', meaning: 'escalating issue to superior authority', hi: 'क्या मैं मैनेजर से बात कर सकता हूँ, कृपया?', es: '¿Podría hablar con el gerente, por favor?', fr: 'Pourrais-je parler au responsable, s\'il vous plaît ?', de: 'Könnte ich bitte den Geschäftsführer sprechen?', pt: 'Poderia falar com o gerente, por favor?', zh: '请问我可以和经理谈谈吗？', ar: 'هل يمكنني التحدث إلى المدير من فضلك؟', ja: '支配人とお話しできますでしょうか？', ru: 'Могу ли я поговорить с управляющим, пожалуйста?', note: 'Calm escalation formula.', ic: '👔' },
    { phrase: 'This is not what I ordered', meaning: 'pointing out incorrect product or food item delivered', hi: 'यह वह नहीं है जो मैंने ऑर्डर किया था', es: 'esto no es lo que pedí', fr: 'ce n\'est pas ce que j\'ai commandé', de: 'das ist nicht das, was ich bestellt habe', pt: 'isso não é o que eu pedi', zh: '这不是我点的东西', ar: 'هذا ليس ما طلبته', ja: 'これは私が注文したものではありません', ru: 'это не то, что я заказывал', note: 'Essential restaurant and retail phrase.', ic: '🍽️' },
    { phrase: 'I have the original receipt with me', meaning: 'confirming proof of purchase is ready', hi: 'मेरे पास मूल रसीद साथ में है', es: 'tengo el recibo original conmigo', fr: 'j\'ai le reçu original avec moi', de: 'ich habe den Originalbeleg bei mir', pt: 'estou com o recibo original aqui', zh: '我随身带了原始发票', ar: 'معي الإيصال الأصلي', ja: '手元にオリジナルの領収書があります', ru: 'у меня с собой оригинальный чек', note: 'Supports product exchange or return.', ic: '🧾' },
    { phrase: 'I am extremely disappointed with...', meaning: 'expressing strong dissatisfaction professionally', hi: 'मुझे ... से बहुत निराशा हुई है', es: 'estoy sumamente decepcionado con...', fr: 'je suis extrêmement déçu de...', de: 'ich bin äußerst enttäuscht von...', pt: 'estou extremamente desapontado com...', zh: '我对...非常失望', ar: 'أشعر بخيبة أمل شديدة من...', ja: '〜に大変失望しております', ru: 'я крайне разочарован...', note: 'Used for severe service failures.', ic: '😞' },
    { phrase: 'Could you replace it with a new one?', meaning: 'requesting identical non-defective item', hi: 'क्या आप इसे नए पीस से बदल सकते हैं?', es: '¿podría cambiarlo por uno nuevo?', fr: 'pourriez-vous le remplacer par un neuf ?', de: 'könnten Sie es durch ein neues ersetzen?', pt: 'você poderia trocá-lo por um novo?', zh: '你能给我换一个新的吗？', ar: 'هل يمكنك استبداله بآخر جديد؟', ja: '新品と交換していただけますか？', ru: 'не могли бы вы заменить его на новый?', note: 'Standard warranty replacement request.', ic: '🔄' },
    { phrase: 'We will look into this immediately', meaning: 'service agent pledge to investigate', hi: 'हम तुरंत इसकी जांच करेंगे', es: 'investigaremos esto de inmediato', fr: 'nous allons examiner cela immédiatement', de: 'wir werden dem sofort nachgehen', pt: 'vamos verificar isso imediatamente', zh: '我们会立即调查此事', ar: 'سننظر في هذا الأمر فوراً', ja: '直ちに調査いたします', ru: 'мы немедленно разберемся в этом', note: 'Customer service reassurance.', ic: '🔍' }
  ],
  grammar: {
    title: 'Polite Complaint Formulas & Remedial Requests',
    concept: 'Using courteous buffers ("I\'m afraid...", "I\'m sorry to say...") combined with clear modal requests ("Could you please refund / replace...?").',
    patterns: [
      {
        title: 'Diplomatic Openings for Complaints',
        structure: 'I\'m afraid there is a mistake / problem with [Item / Service].',
        rule: 'Start with "I\'m afraid..." or "Excuse me, but..." to express dissatisfaction without appearing aggressive.',
        examples: [
          { en: 'I\'m afraid there is a mistake on our bill; we were charged twice for water.', hi: 'मुझे खेद है कि हमारे बिल में एक गलती है; हमसे पानी के दो बार पैसे लिए गए हैं।', es: 'Me temo que hay un error en nuestra cuenta; nos cobraron el agua dos veces.' },
          { en: 'Excuse me, but this soup is cold.', hi: 'माफ कीजिए, लेकिन यह सूप ठंडा है।', es: 'Disculpe, pero esta sopa está fría.' }
        ]
      },
      {
        title: 'Requesting Specific Remedies with Modals',
        structure: 'Could you please + replace / refund / look into + [Object]?',
        rule: 'Clearly identify what outcome you want (refund, replacement, exchange, or manager review).',
        examples: [
          { en: 'Could you please refund the overcharged amount onto my credit card?', hi: 'क्या आप कृपया अधिक ली गई राशि मेरे क्रेडिट कार्ड में रिफंड कर सकते हैं?', es: '¿Podría reembolsar el importe cobrado de más en mi tarjeta?' },
          { en: 'Could you exchange this defective kettle for a working model?', hi: 'क्या आप इस खराब केतली को चालू मॉडल से बदल सकते हैं?', es: '¿Podría cambiar esta tetera defectuosa por un modelo que funcione?' }
        ]
      },
      {
        title: 'Escalating Politely: "May I / Could I speak to..."',
        structure: 'Could I please speak to the manager / person in charge?',
        rule: 'Use polite question inversion to ask for higher authority without raising your voice.',
        examples: [
          { en: 'Could I please speak to the general manager regarding this room issue?', hi: 'क्या मैं कमरे की इस समस्या के संबंध में जनरल मैनेजर से बात कर सकता हूँ?', es: '¿Podría hablar con el director general sobre este problema?' },
          { en: 'May I speak with the shift supervisor on duty?', hi: 'क्या मैं ड्यूटी पर मौजूद शिफ्ट सुपरवाइजर से बात कर सकता हूँ?', es: '¿Puedo hablar con el supervisor de turno?' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'I want that you give my money back immediately!',
      cor: 'I would like to request a full refund, please.',
      exp: 'Use professional language ("I would like to request a full refund") rather than demanding rudely.',
      hi: 'विनम्रता से कहें: "I would like to request a full refund, please".',
      es: 'Use fórmulas profesionales: "I would like to request a refund".'
    },
    {
      inc: 'There are a big mistake in this receipt.',
      cor: 'There is a big mistake on this receipt.',
      exp: '"Mistake" is singular ("There is") and we say "on this receipt", not "in".',
      hi: 'एकवचन के लिए "There is a mistake on this receipt" का प्रयोग करें।',
      es: 'Se dice "There is a mistake on this receipt".'
    },
    {
      inc: 'Could you to replace this defective item?',
      cor: 'Could you replace this defective item?',
      exp: 'Modal "could" is followed directly by base verb "replace" without "to".',
      hi: '"Could" के बाद "to" नहीं आता: "Could you replace...".',
      es: 'Después de "could" va el verbo base sin "to".'
    },
    {
      inc: 'I am calling for make a complaint.',
      cor: 'I am calling to make a complaint.',
      exp: 'Use infinitive of purpose "to make", not "for make".',
      hi: 'उद्देश्य बताने के लिए "to make a complaint" का प्रयोग करें।',
      es: 'Use el infinitivo con "to": "to make a complaint".'
    },
    {
      inc: 'The food was not good so I refused to paid.',
      cor: 'The food was not good so I refused to pay.',
      exp: 'After "refused to", use the base form "pay".',
      hi: '"Refused to" के बाद base verb "pay" आता है।',
      es: 'Después de "refused to" va el verbo base "pay".'
    }
  ],
  dialogues: [
    {
      title: 'Returning a Defective Item at an Electronics Store',
      context: 'Pooja visits customer service after her new blender stopped functioning on day two.',
      charA: { name: 'Pooja', av: '👩🏽', role: 'Customer' },
      charB: { name: 'Clerk', av: '👨🏼', role: 'Store Clerk' },
      turns: [
        { spk: 'Pooja', text: 'Hello. I\'m afraid there is a serious issue with this electric blender. I purchased it here on Saturday.', hi: 'नमस्ते। मुझे खेद है लेकिन इस इलेक्ट्रिक ब्लेंडर में एक गंभीर समस्या है। मैंने इसे शनिवार को यहाँ से खरीदा था।', es: 'Hola. Me temo que hay un problema grave con esta licuadora. La compré aquí el sábado.' },
        { spk: 'Clerk', text: 'I am sorry to hear that, ma\'am. What seems to be the trouble?', hi: 'यह सुनकर मुझे खेद हुआ, मैडम। क्या परेशानी आ रही है?', es: 'Lamento escuchar eso, señora. ¿Cuál parece ser el problema?' },
        { spk: 'Pooja', text: 'The motor overheated and stopped working completely after one use. I have the receipt and warranty card. Could you please replace it with a new one or offer a refund?', hi: 'एक बार उपयोग करने के बाद मोटर अधिक गर्म हो गई और पूरी तरह से बंद हो गई। मेरे पास रसीद और वारंटी कार्ड है। क्या आप कृपया इसे नए से बदल सकते हैं या रिफंड दे सकते हैं?', es: 'El motor se sobrecalentó y dejó de funcionar tras un uso. Tengo el recibo y garantía. ¿Podría cambiarla o reembolsarme?' },
        { spk: 'Clerk', text: 'Of course. Since you have the receipt within the 14-day return window, I will process an immediate replacement for you right now.', hi: 'बिल्कुल। चूंकि आपके पास 14-दिन की रिटर्न विंडो के भीतर रसीद है, मैं अभी आपके लिए तुरंत नया पीस प्रोसेस कर देता हूँ।', es: 'Por supuesto. Como tiene el recibo dentro del plazo de 14 días, procesaré un reemplazo inmediato ahora mismo.' }
      ]
    },
    {
      title: 'Polite Hotel Room Complaint',
      context: 'Daniel speaks with the hotel front desk about a non-functioning air conditioner and noisy street view.',
      charA: { name: 'Daniel', av: '👨🏻', role: 'Guest' },
      charB: { name: 'Receptionist', av: '👩🏾', role: 'Front Desk' },
      turns: [
        { spk: 'Daniel', text: 'Good evening. I\'m afraid the air conditioning in room 305 is broken, and the room is uncomfortably hot.', hi: 'शुभ संध्या। मुझे खेद है कि कमरा 305 में एयर कंडीशनिंग खराब है, और कमरा बहुत गर्म है।', es: 'Buenas noches. Me temo que el aire acondicionado de la habitación 305 no funciona y hace mucho calor.' },
        { spk: 'Receptionist', text: 'I apologize for the inconvenience, sir. Let me see if our maintenance technician can fix it immediately.', hi: 'असुविधा के लिए मैं माफी चाहती हूँ, महोदय। मुझे देखने दीजिए कि क्या हमारे रखरखाव तकनीशियन इसे तुरंत ठीक कर सकते हैं।', es: 'Le pido disculpas por las molestias, señor. Déjeme ver si el técnico puede arreglarlo de inmediato.' },
        { spk: 'Daniel', text: 'It is already 11 PM. Would it be possible to move us to a quiet room on a higher floor instead?', hi: 'रात के 11 बज चुके हैं। क्या इसके बजाय हमें किसी ऊपरी मंजिल पर एक शांत कमरे में शिफ्ट करना संभव होगा?', es: 'Ya son las 11 PM. ¿Sería posible cambiarnos a una habitación tranquila en un piso superior?' },
        { spk: 'Receptionist', text: 'Certainly, sir. We have a deluxe suite available on the fifth floor. Here are your new keycards. Please accept complimentary breakfast vouchers as an apology.', hi: 'निश्चित रूप से, महोदय। हमारे पास पांचवीं मंजिल पर एक डीलक्स सुइट उपलब्ध है। ये रहे आपके नए चाबी कार्ड। कृपया माफी के रूप में मुफ्त नाश्ते के वाउचर स्वीकार करें।', es: 'Por supuesto. Tenemos una suite disponible en el quinto piso. Aquí tiene sus llaves y vales de desayuno de cortesía.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_a2_9_130_p01',
      type: 'multiple_choice',
      prompt: 'Select the polite phrase to start a complaint:',
      options: [
        { id: '1', text: 'I\'m afraid there is a problem with our reservation.', isCorrect: true },
        { id: '2', text: 'You made a bad mistake give me money!', isCorrect: false },
        { id: '3', text: 'I want fight with the manager right now.', isCorrect: false },
        { id: '4', text: 'Why you give me broken things always?', isCorrect: false }
      ],
      correctAnswer: 'I\'m afraid there is a problem with our reservation.',
      explanation: '"I\'m afraid there is a problem with..." is standard polite diplomacy.'
    },
    {
      id: 'ex_a2_9_130_p02',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "Could you please refund the overcharged amount onto my credit _____?"',
      correctAnswer: 'card',
      explanation: 'Refund onto credit "card".'
    },
    {
      id: 'ex_a2_9_130_p03',
      type: 'word_ordering',
      prompt: 'Arrange into a polite escalation request:',
      tokens: ['Could', 'I', 'please', 'speak', 'to', 'the', 'duty', 'manager'],
      correctAnswer: 'Could I please speak to the duty manager',
      explanation: 'Polite request formula to speak with management.'
    },
    {
      id: 'ex_a2_9_130_p04',
      type: 'translation',
      prompt: 'Translate to English: "यह वह नहीं है जो मैंने ऑर्डर किया था।"',
      correctAnswer: 'This is not what I ordered.',
      acceptableAnswers: ["That is not what I ordered."],
      explanation: '"This is not what I ordered" is standard restaurant English.'
    },
    {
      id: 'ex_a2_9_130_p05',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence: "I am calling for make a formal complaint."',
      correctAnswer: 'I am calling to make a formal complaint.',
      explanation: 'Use infinitive "to make" rather than "for make".'
    },
    {
      id: 'ex_a2_9_130_p06',
      type: 'listening',
      prompt: 'Listen to the customer complaint and identify the desired solution:',
      audioText: 'Good afternoon. This electric kettle stopped working after three days. I have the receipt and would like to exchange it for a new one.',
      options: [
        { id: '1', text: 'Exchange the kettle for a new working unit', isCorrect: true },
        { id: '2', text: 'Get cash and buy groceries', isCorrect: false },
        { id: '3', text: 'Throw away the appliance in store', isCorrect: false },
        { id: '4', text: 'Ask for a cooking recipe', isCorrect: false }
      ],
      correctAnswer: 'Exchange the kettle for a new working unit',
      explanation: 'The customer explicitly asks to exchange it for a new one.'
    },
    {
      id: 'ex_a2_9_130_p07',
      type: 'listen_and_type',
      prompt: 'Listen and type the exact sentence:',
      audioText: 'I would like to request a full refund.',
      correctAnswer: 'I would like to request a full refund.',
      explanation: 'Type the sentence accurately.'
    },
    {
      id: 'ex_a2_9_130_p08',
      type: 'speaking',
      prompt: 'Read aloud clearly: "Excuse me, but there is an unexpected discrepancy on my final bill."',
      targetText: 'Excuse me, but there is an unexpected discrepancy on my final bill.',
      explanation: 'Speak clearly and calmly with professional tone.'
    },
    {
      id: 'ex_a2_9_130_p09',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nGuest: "Our shower has no hot water."\nManager: "We apologize for the inconvenience and will _____ into it immediately."',
      options: [
        { id: '1', text: 'look', isCorrect: true },
        { id: '2', text: 'looking', isCorrect: false },
        { id: '3', text: 'looked', isCorrect: false },
        { id: '4', text: 'looks', isCorrect: false }
      ],
      correctAnswer: 'look',
      explanation: 'Future modal "will look into".'
    },
    {
      id: 'ex_a2_9_130_p10',
      type: 'multiple_choice',
      prompt: 'What does "defective" mean?',
      options: [
        { id: '1', text: 'Faulty or broken; not working as intended.', isCorrect: true },
        { id: '2', text: 'Very expensive and luxurious.', isCorrect: false },
        { id: '3', text: 'Delivered before schedule.', isCorrect: false },
        { id: '4', text: 'Brand new and unopened.', isCorrect: false }
      ],
      correctAnswer: 'Faulty or broken; not working as intended.',
      explanation: '"Defective" means having flaws or malfunctions.'
    },
    {
      id: 'ex_a2_9_130_p11',
      type: 'match_pairs',
      prompt: 'Match each complaint phrase with its polite customer intention:',
      options: [
        { id: '1', text: 'I\'m afraid there is an issue → [polite problem introduction]' },
        { id: '2', text: 'Could you replace this? → [asking for a new working item]' },
        { id: '3', text: 'May I speak with the manager? → [polite escalation request]' },
        { id: '4', text: 'I have the original receipt → [providing proof of purchase]' }
      ],
      correctAnswer: 'matched',
      explanation: 'Customer complaint formulas.'
    },
    {
      id: 'ex_a2_9_130_p12',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "We sincerely apologize for the _____ (inconvenient/inconvenience) caused."',
      correctAnswer: 'inconvenience',
      explanation: '"Inconvenience" is the noun.'
    },
    {
      id: 'ex_a2_9_130_p13',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['The', 'manager', 'offered', 'us', 'a', 'complimentary', 'dessert'],
      correctAnswer: 'The manager offered us a complimentary dessert',
      explanation: 'Past simple ditransitive sentence.'
    },
    {
      id: 'ex_a2_9_130_p14',
      type: 'translation',
      prompt: 'Translate to English: "क्या आप कृपया इस दोषपूर्ण उत्पाद को बदल सकते हैं?"',
      correctAnswer: 'Could you please replace this defective product?',
      acceptableAnswers: ['Could you please exchange this defective product?'],
      explanation: '"Replace this defective product".'
    },
    {
      id: 'ex_a2_9_130_p15',
      type: 'multiple_choice',
      prompt: 'Select the grammatically correct sentence:',
      options: [
        { id: '1', text: 'The customer service representative resolved our issue quickly.', isCorrect: true },
        { id: '2', text: 'The customer service representative was resolve our issue.', isCorrect: false },
        { id: '3', text: 'The customer service representative resolved to our issue.', isCorrect: false },
        { id: '4', text: 'The customer service has resolve our issue yesterday.', isCorrect: false }
      ],
      correctAnswer: 'The customer service representative resolved our issue quickly.',
      explanation: 'Past Simple transitive verb "resolved our issue".'
    }
  ],
  review: [
    {
      id: 'ex_a2_9_130_r01',
      type: 'multiple_choice',
      prompt: 'Choose the correct sentence:',
      options: [
        { id: '1', text: 'I would like to speak to someone in charge, please.', isCorrect: true },
        { id: '2', text: 'I would like to speak to someone in charge please to.', isCorrect: false },
        { id: '3', text: 'I want speak to someone in charge.', isCorrect: false },
        { id: '4', text: 'I like speak with in charge person.', isCorrect: false }
      ],
      correctAnswer: 'I would like to speak to someone in charge, please.',
      explanation: '"I would like to speak to..." is standard polite English.'
    },
    {
      id: 'ex_a2_9_130_r02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "The customer was _____ (satisfy) with the replacement."',
      correctAnswer: 'satisfied',
      explanation: 'Adjective "satisfied".'
    },
    {
      id: 'ex_a2_9_130_r03',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['There', 'is', 'an', 'error', 'on', 'my', 'restaurant', 'bill'],
      correctAnswer: 'There is an error on my restaurant bill',
      explanation: 'Existential sentence describing a mistake on a bill.'
    },
    {
      id: 'ex_a2_9_130_r04',
      type: 'translation',
      prompt: 'Translate to English: "हम असुविधा के लिए क्षमा चाहते हैं।"',
      correctAnswer: 'We apologize for the inconvenience.',
      acceptableAnswers: ['We are sorry for the inconvenience.'],
      explanation: '"We apologize for the inconvenience".'
    },
    {
      id: 'ex_a2_9_130_r05',
      type: 'error_correction',
      prompt: 'Correct the error: "Could you to check this billing charge?"',
      correctAnswer: 'Could you check this billing charge?',
      explanation: 'Remove "to" after the modal "could".'
    }
  ],
  assessment: [
    {
      id: 'ex_a2_9_130_a01',
      type: 'multiple_choice',
      prompt: 'Which request is both polite and appropriate for a billing mistake?',
      options: [
        { id: '1', text: 'Excuse me, I believe there has been a slight billing mistake on this receipt.', isCorrect: true },
        { id: '2', text: 'You stole my money give it back right now!', isCorrect: false },
        { id: '3', text: 'Why you overcharge me without notice yesterday?', isCorrect: false },
        { id: '4', text: 'Receipt is error and wrong you pay me.', isCorrect: false }
      ],
      correctAnswer: 'Excuse me, I believe there has been a slight billing mistake on this receipt.',
      explanation: 'Courteous and effective professional complaint tone.'
    },
    {
      id: 'ex_a2_9_130_a02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "If the item is defective, the store will provide a full _____."',
      correctAnswer: 'refund',
      acceptableAnswers: ['replacement'],
      explanation: 'Full "refund" or "replacement".'
    },
    {
      id: 'ex_a2_9_130_a03',
      type: 'translation',
      prompt: 'Translate to English: "मैं इस टूटे हुए सामान के बदले नया पीस चाहता हूँ।"',
      correctAnswer: 'I would like a replacement for this damaged item.',
      acceptableAnswers: [
        'I would like a replacement for this broken item.',
        'I want a replacement for this damaged item.'
      ],
      explanation: '"Replacement for this damaged item".'
    },
    {
      id: 'ex_a2_9_130_a04',
      type: 'speaking',
      prompt: 'Read aloud clearly: "I would like to make a polite complaint regarding the room cleanliness and cold water in the shower."',
      targetText: 'I would like to make a polite complaint regarding the room cleanliness and cold water in the shower.',
      explanation: 'Speak clearly with professional composure.'
    },
    {
      id: 'ex_a2_9_130_a05',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['We', 'received', 'a', 'full', 'refund', 'on', 'Tuesday'],
      correctAnswer: 'We received a full refund on Tuesday',
      explanation: 'Past simple declarative sentence.'
    }
  ]
};

// =========================================================================
// LESSON 131: Health, Minor Illnesses, Pharmacies & Medical Consultations
// =========================================================================
export const LESSON_131_CONFIG: LessonConfigA2 = {
  num: 131,
  title: 'Health, Minor Illnesses, Pharmacies & Medical Consultations',
  icon: '💊',
  estMin: 25,
  objTitle: 'Describing Symptoms, Consulting Pharmacists & Following Medical Instructions',
  objDesc: 'Learn to describe health symptoms (fever, headache, sore throat, cough, allergy), ask pharmacists for over-the-counter medicine, understand dosage instructions, and book doctor appointments.',
  objHi: 'बीमारी के लक्षण (बुखार, सिरदर्द, खांसी), फार्मेसी में दवा मांगना, खुराक (dosage) समझना और डॉक्टर के साथ अपॉइंटमेंट लेना सीखें।',
  objEs: 'Describir síntomas (fiebre, dolor de cabeza, tos), pedir medicamentos en la farmacia, comprender dosis y pedir cita médica.',
  canDo: [
    'I can describe common physical symptoms and minor health problems clearly.',
    'I can ask a pharmacist for recommendations and understand over-the-counter medication.',
    'I can understand dosage frequencies ("take two tablets twice a day after meals").',
    'I can book a doctor\'s appointment and explain allergies or medical history.'
  ],
  canDoHi: [
    'मैं सामान्य शारीरिक लक्षणों (बुखार, सिरदर्द, गले में खराश) का स्पष्ट वर्णन कर सकता हूँ।',
    'मैं फार्मासिस्ट से दवा मांग सकता हूँ और काउंटर पर मिलने वाली दवाओं के बारे में पूछ सकता हूँ।',
    'मैं दवा की खुराक ("take two pills after meals") के निर्देशों को समझ सकता हूँ।',
    'मैं डॉक्टर से अपॉइंटमेंट बुक कर सकता हूँ और अपनी एलर्जी या मेडिकल इतिहास बता सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir síntomas comunes y problemas de salud leves.',
    'Puedo pedir medicamentos de venta libre en la farmacia.',
    'Puedo entender instrucciones de dosificación con precisión.',
    'Puedo pedir cita médica y explicar alergias o antecedentes.'
  ],
  vocab: [
    { w: 'symptom', p: '/ˈsɪmptəm/', m: 'a physical or mental feature indicating a condition of disease', hi: 'लक्षण', es: 'síntoma', fr: 'symptôme', de: 'Symptom / Krankheitszeichen', pt: 'sintoma', zh: '症状', ar: 'عرض (مرض)', ja: '症状', ru: 'симптом', ex: 'A high fever and persistent dry cough are common flu symptoms.', exHi: 'तेज़ बुखार और लगातार सूखी खांसी फ्लू के सामान्य लक्षण हैं।', exEs: 'La fiebre alta y la tos seca persistente son síntomas comunes de gripe.', ic: '🌡️' },
    { w: 'prescription', p: '/prɪˈskrɪpʃn/', m: 'an instruction written by a medical practitioner that authorizes a patient to be provided a medicine', hi: 'नुस्खा / डॉक्टर का पर्चा', es: 'receta médica', fr: 'ordonnance', de: 'Rezept (ärztlich)', pt: 'receita médica', zh: '处方 / 药方', ar: 'وصفة طبية', ja: '処方箋', ru: 'рецепт (врача)', ex: 'You need a valid doctor\'s prescription to purchase these antibiotics.', exHi: 'इन एंटीबायोटिक्स को खरीदने के लिए आपको डॉक्टर के वैध पर्चे की आवश्यकता है।', exEs: 'Necesita una receta médica válida para comprar estos antibióticos.', ic: '📄' },
    { w: 'pharmacist', p: '/ˈfɑːməsɪst/', m: 'a person who is professionally qualified to prepare and dispense medicinal drugs', hi: 'दवा विक्रेता / फार्मासिस्ट', es: 'farmacéutico', fr: 'pharmacien', de: 'Apotheker', pt: 'farmacêutico', zh: '药剂师', ar: 'صيدلي', ja: '薬剤師', ru: 'фармацевт / провизор', ex: 'The pharmacist explained how often I should take the eye drops.', exHi: 'फार्मासिस्ट ने समझाया कि मुझे कितनी बार आई ड्रॉप लेनी चाहिए।', exEs: 'El farmacéutico me explicó con qué frecuencia debía ponerme las gotas.', ic: '🧑‍⚕️' },
    { w: 'dosage', p: '/ˈdəʊsɪdʒ/', m: 'the size or frequency of a dose of a medicine or drug', hi: 'खुराक / मात्रा', es: 'dosis / posología', fr: 'posologie / dosage', de: 'Dosierung', pt: 'dosagem / posologia', zh: '剂量 / 用量', ar: 'جرعة', ja: '服用量 / 投与量', ru: 'дозировка / доза', ex: 'Never exceed the recommended daily dosage stated on the box.', exHi: 'बॉक्स पर बताई गई अनुशंसित दैनिक खुराक से अधिक कभी न लें।', exEs: 'Nunca exceda la dosis diaria recomendada indicada en la caja.', ic: '💊' },
    { w: 'headache', p: '/ˈhedeɪk/', m: 'a continuous pain in the head', hi: 'सिरदर्द', es: 'dolor de cabeza / cefalea', fr: 'mal de tête / céphalée', de: 'Kopfschmerzen', pt: 'dor de cabeça', zh: '头痛', ar: 'صداع', ja: '頭痛', ru: 'головная боль', ex: 'I have had a throbbing headache since this morning.', exHi: 'मुझे आज सुबह से तेज सिरदर्द हो रहा है।', exEs: 'He tenido un fuerte dolor de cabeza desde esta mañana.', ic: '🤕' },
    { w: 'fever', p: '/ˈfiːvə/', m: 'an abnormally high body temperature, usually accompanied by shivering', hi: 'बुखार', es: 'fiebre', fr: 'fièvre', de: 'Fieber', pt: 'febre', zh: '发烧', ar: 'حمى / حرارة', ja: '熱 / 発熱', ru: 'температура / жар', ex: 'The thermometer shows that the child has a high fever of 39°C.', exHi: 'थर्मामीटर दिखाता है कि बच्चे को 39°C का तेज़ बुखार है।', exEs: 'El termómetro muestra que el niño tiene fiebre alta de 39°C.', ic: '🌡️' },
    { w: 'sore throat', p: '/sɔː θrəʊt/', m: 'a condition marked by pain in the throat, typically caused by inflammation', hi: 'गले में खराश / दर्द', es: 'dolor de garganta', fr: 'mal de gorge', de: 'Halsschmerzen', pt: 'dor de garganta', zh: '喉咙痛', ar: 'التهاب الحلق', ja: 'のどの痛み', ru: 'боль в горле', ex: 'Drinking warm lemon honey water soothes a sore throat.', exHi: 'गर्म नींबू-शहद का पानी पीने से गले की खराश में आराम मिलता है।', exEs: 'Beber agua tibia con limón y miel alivia el dolor de garganta.', ic: '🧣' },
    { w: 'cough', p: '/kɒf/', m: 'expel air from the lungs with a sudden sharp sound', hi: 'खांसी / खांसना', es: 'tos / toser', fr: 'toux / tousser', de: 'Husten', pt: 'tosse / tossir', zh: '咳嗽', ar: 'سعال / كحة', ja: '咳 / 咳をする', ru: 'кашель / кашлять', ex: 'Take this herbal syrup to calm your dry nighttime cough.', exHi: 'अपनी रात की सूखी खांसी को शांत करने के लिए यह हर्बल सिरप लें।', exEs: 'Tome este jarabe de hierbas para calmar la tos seca nocturna.', ic: '🗣️' },
    { w: 'allergy', p: '/ˈælədʒi/', m: 'a damaging immune response by the body to a substance like pollen or food', hi: 'एलर्जी', es: 'alergia', fr: 'allergie', de: 'Allergie', pt: 'alergia', zh: '过敏', ar: 'حساسية', ja: 'アレルギー', ru: 'аллергия', ex: 'Do you have an allergy to penicillin or any other medications?', exHi: 'क्या आपको पेनिसिलिन या किसी अन्य दवा से एलर्जी है?', exEs: '¿Tiene alergia a la penicilina o a otros medicamentos?', ic: '🤧' },
    { w: 'drowsy', p: '/ˈdraʊzi/', m: 'sleepy and lethargic; half asleep', hi: 'नींद आना / सुस्ती लगना', es: 'somnoliento / adormilado', fr: 'somnolent / endormi', de: 'schläfrig / benommen', pt: 'sonolento', zh: '昏昏欲睡的', ar: 'نعسان / يشعر بالنعاس', ja: '眠気がある / うとうとした', ru: 'сонливый', ex: 'These antihistamine tablets might make you feel drowsy.', exHi: 'ये एंटीहिस्टामाइन गोलियां आपको सुस्ती या नींद ला सकती हैं।', exEs: 'Estas pastillas antihistamínicas pueden causarle somnolencia.', ic: '😴' },
    { w: 'ointment', p: '/ˈɔɪntmənt/', m: 'a smooth oily substance that is rubbed on the skin for medicinal purposes', hi: 'मरहम / ऑइंटमेंट', es: 'pomada / ungüento', fr: 'pommade / onguent', de: 'Salbe', pt: 'pomada', zh: '药膏 / 软膏', ar: 'مرهم', ja: '軟膏 / 塗り薬', ru: 'мазь', ex: 'Apply this soothing ointment to the skin rash twice daily.', exHi: 'इस सुखदायक मरहम को दिन में दो बार त्वचा के दाने पर लगाएं।', exEs: 'Aplique esta pomada calmante sobre la erupción dos veces al día.', ic: '🧴' },
    { w: 'painkiller', p: '/ˈpeɪnkɪlə/', m: 'a drug or medicine for relieving pain', hi: 'दर्द निवारक दवा / पेनकिलर', es: 'analgésico / calmante', fr: 'antidouleur / analgésique', de: 'Schmerzmittel', pt: 'analgésico', zh: '止痛药', ar: 'مسكن آلام', ja: '鎮痛剤 / 痛み止め', ru: 'обезболивающее', ex: 'Paracetamol is a common over-the-counter painkiller.', exHi: 'पैरासिटामोल एक सामान्य ओवर-द-काउंटर दर्द निवारक है।', exEs: 'El paracetamol es un analgésico común de venta libre.', ic: '💊' },
    { w: 'tablet', p: '/ˈtæblət/', m: 'a small disc or cylinder of compressed solid medicine', hi: 'गोली / टैबलेट', es: 'comprimido / pastilla', fr: 'comprimé', de: 'Tablette', pt: 'comprimido / pílula', zh: '药片', ar: 'قرص دواء', ja: '錠剤', ru: 'таблетка', ex: 'Swallow one tablet with a full glass of water after breakfast.', exHi: 'नाश्ते के बाद एक पूरा गिलास पानी के साथ एक गोली निगलें।', exEs: 'Trague un comprimido con un vaso lleno de agua después del desayuno.', ic: '⚪' },
    { w: 'capsule', p: '/ˈkæpsjuːl/', m: 'a small gelatinous case enclosing a dose of medication', hi: 'कैप्सूल', es: 'cápsula', fr: 'gélule / capsule', de: 'Kapsel', pt: 'cápsula', zh: '胶囊', ar: 'كبسولة', ja: 'カプセル剤', ru: 'капсула', ex: 'Take one antibiotic capsule every eight hours without missing.', exHi: 'बिना चूके हर आठ घंटे में एक एंटीबायोटिक कैप्सूल लें।', exEs: 'Tome una cápsula de antibiótico cada ocho horas sin falta.', ic: '💊' },
    { w: 'stomachache', p: '/ˈstʌməkeɪk/', m: 'a pain in a person\'s belly or stomach', hi: 'पेट दर्द', es: 'dolor de estómago', fr: 'mal de ventre / mal d\'estomac', de: 'Magenschmerzen / Bauchschmerzen', pt: 'dor de estômago', zh: '胃痛 / 肚子痛', ar: 'مغص / ألم في المعدة', ja: '胃痛 / 腹痛', ru: 'боль в животе / желудке', ex: 'Eating spicy street food gave me a bad stomachache.', exHi: 'मसालेदार स्ट्रीट फूड खाने से मेरे पेट में तेज दर्द हो गया।', exEs: 'Comer comida picante me causó un fuerte dolor de estómago.', ic: '😣' },
    { w: 'dizzy', p: '/ˈdɪzi/', m: 'having a sensation of spinning around and losing one\'s balance', hi: 'चक्कर आना / सिर घूमना', es: 'mareado', fr: 'vertigineux / pris de vertige', de: 'schwindelig', pt: 'tonto / com tontura', zh: '头晕目眩的', ar: 'يشعر بالدوار / دايخ', ja: 'めまいがする', ru: 'головокружительный / чувствующий головокружение', ex: 'Sit down immediately if you start to feel dizzy in the sun.', exHi: 'यदि आपको धूप में चक्कर आने लगे तो तुरंत बैठ जाएं।', exEs: 'Siéntese de inmediato si empieza a sentirse mareado bajo el sol.', ic: '😵' },
    { w: 'clinic', p: '/ˈklɪnɪk/', m: 'an establishment or hospital department where outpatients are given medical treatment', hi: 'क्लीनिक / औषधालय', es: 'clínica / ambulatorio', fr: 'clinique / cabinet médical', de: 'Klinik / Praxis', pt: 'clínica / posto de saúde', zh: '诊所', ar: 'عيادة', ja: '診療所 / クリニック', ru: 'клиника / поликлиника', ex: 'The community health clinic is open Monday through Saturday.', exHi: 'सामुदायिक स्वास्थ्य क्लिनिक सोमवार से शनिवार तक खुला रहता है।', exEs: 'La clínica comunitaria está abierta de lunes a sábado.', ic: '🏥' },
    { w: 'bandage', p: '/ˈbændɪdʒ/', m: 'a strip of material used to bind up a wound or protect an injury', hi: 'पट्टी / बैंडेज', es: 'venda / vendaje', fr: 'pansement / bandage', de: 'Verband / Pflaster', pt: 'curativo / atadura', zh: '绷带', ar: 'ضمادة', ja: '包帯 / 絆創膏', ru: 'бинт / повязка', ex: 'The nurse wrapped a clean bandage around his sprained ankle.', exHi: 'नर्स ने उसके मोच वाले टखने पर एक साफ पट्टी बांधी।', exEs: 'La enfermera le puso una venda limpia alrededor del tobillo torcido.', ic: '🩹' },
    { w: 'recover', p: '/rɪˈkʌvə/', m: 'return to a normal state of health, mind, or strength', hi: 'ठीक होना / स्वस्थ होना', es: 'recuperarse / restablecerse', fr: 'se rétablir / guérir', de: 'genesen / sich erholen', pt: 'recuperar-se / sarar', zh: '康复 / 痊愈', ar: 'يتعافى / يشفى', ja: '回復する / 治る', ru: 'выздоравливать / восстанавливаться', ex: 'With plenty of rest, you will fully recover in a few days.', exHi: 'भरपूर आराम करने से आप कुछ ही दिनों में पूरी तरह ठीक हो जाएंगे।', exEs: 'Con mucho descanso, se recuperará por completo en pocos días.', ic: '🌱' },
    { w: 'appointment', p: '/əˈpɔɪntmənt/', m: 'an arrangement to see someone, especially a doctor, at a specific time', hi: 'मुलाकात का समय / अपॉइंटमेंट', es: 'cita médica', fr: 'rendez-vous médical', de: 'Arzttermin', pt: 'consulta / hora marcada', zh: '就诊预约', ar: 'موعد طبي', ja: '予約 / 診察予約', ru: 'прием (у врача) / запись', ex: 'I have scheduled a dental appointment for Thursday afternoon.', exHi: 'मैंने गुरुवार दोपहर के लिए दंत चिकित्सक की अपॉइंटमेंट बुक की है।', exEs: 'He programado una cita con el dentista para el jueves por la tarde.', ic: '🗓️' }
  ],
  chunks: [
    { phrase: 'I have a sore throat and fever', meaning: 'listing primary physical symptoms to a health professional', hi: 'मुझे गले में खराश और बुखार है', es: 'tengo dolor de garganta y fiebre', fr: 'j\'ai mal à la gorge et de la fièvre', de: 'ich habe Halsschmerzen und Fieber', pt: 'estou com dor de garganta e febre', zh: '我喉咙痛并且发烧', ar: 'لدي التهاب في الحلق وحمى', ja: 'のどの痛みと熱があります', ru: 'у меня болит горло и температура', note: 'Standard symptom opener.', ic: '🤒' },
    { phrase: 'take two tablets twice a day', meaning: 'standard medical dosage frequency instruction', hi: 'दिन में दो बार दो गोलियां लें', es: 'tomar dos comprimidos dos veces al día', fr: 'prendre deux comprimés deux fois par jour', de: 'nehmen Sie zweimal täglich zwei Tabletten', pt: 'tome dois comprimidos duas vezes ao dia', zh: '每天两次，每次两片', ar: 'تناول قرصين مرتين يومياً', ja: '1日2回、2錠ずつ服用してください', ru: 'принимать по две таблетки два раза в день', note: 'Vital dosage formula.', ic: '💊' },
    { phrase: 'after meals on a full stomach', meaning: 'taking medicine with food to prevent gastric irritation', hi: 'भोजन के बाद भरे पेट पर', es: 'después de las comidas con el estómago lleno', fr: 'après les repas le ventre plein', de: 'nach den Mahlzeiten auf vollen Magen', pt: 'após as refeições com o estômago cheio', zh: '饭后饱腹服用', ar: 'بعد الوجبات على معدة ممتلئة', ja: '食後、胃が満たされた状態で', ru: 'после еды на полный желудок', note: 'Important medication safety chunk.', ic: '🍽️' },
    { phrase: 'I\'m allergic to penicillin', meaning: 'declaring an adverse drug reaction risk', hi: 'मुझे पेनिसिलिन से एलर्जी है', es: 'soy alérgico a la penicilina', fr: 'je suis allergique à la pénicilline', de: 'ich bin allergisch gegen Penicillin', pt: 'sou alérgico a penicilina', zh: '我对青霉素过敏', ar: 'لدي حساسية من البنسلين', ja: 'ペニシリンにアレルギーがあります', ru: 'у меня аллергия на пенициллин', note: 'Life-saving medical safety phrase.', ic: '⚠️' },
    { phrase: 'What do you recommend for...?', meaning: 'asking pharmacist for over-the-counter advice', hi: 'आप इसके लिए क्या दवा लेने की सलाह देते हैं?', es: '¿Qué me recomienda para...?', fr: 'Que me conseillez-vous pour... ?', de: 'Was empfehlen Sie gegen...?', pt: 'O que você recomenda para...?', zh: '你对...有什么推荐药吗？', ar: 'ماذا تنصح لـ...؟', ja: '〜には何がお勧めですか？', ru: 'Что вы порекомендуете от...?', note: 'Standard pharmacy consultation opener.', ic: '❓' },
    { phrase: 'make you feel drowsy', meaning: 'causing sleepiness as a side effect', hi: 'सुस्ती या नींद का अहसास कराना', es: 'provocar somnolencia / darle sueño', fr: 'provoquer de la somnolence', de: 'macht schläfrig', pt: 'dar sono / causar sonolência', zh: '会让你感到昏睡', ar: 'يسبب لك النعاس', ja: '眠気を引き起こす', ru: 'вызывать сонливость', note: 'Common warning on medicine packages.', ic: '😴' },
    { phrase: 'book a doctor\'s appointment', meaning: 'schedule a medical consultation visit', hi: 'डॉक्टर से मिलने का समय लेना', es: 'pedir cita con el médico', fr: 'prendre rendez-vous chez le médecin', de: 'einen Arzttermin vereinbaren', pt: 'marcar uma consulta médica', zh: '预约看医生', ar: 'حجز موعد عند الطبيب', ja: '医師の診察を予約する', ru: 'записаться на прием к врачу', note: 'Healthcare logistics chunk.', ic: '📅' },
    { phrase: 'get plenty of bed rest', meaning: 'resting adequately to aid bodily recovery', hi: 'बिस्तर पर भरपूर आराम करना', es: 'guardar mucho reposo en cama', fr: 'se reposer beaucoup au lit', de: 'viel Bettruhe einhalten', pt: 'ficar bastante de repouso na cama', zh: '多卧床休息', ar: 'الحصول على قسط وافر من الراحة', ja: 'ベッドで十分安静にする', ru: 'соблюдать строгий постельный режим', note: 'Common doctor advice.', ic: '🛏️' }
  ],
  grammar: {
    title: 'Describing Symptoms & Understanding Medical Dosage Instructions',
    concept: 'Using "have + symptom" (I have a fever), "feel + adjective" (I feel dizzy), and imperative dosage directives (Take two pills twice daily).',
    patterns: [
      {
        title: 'Describing Symptoms: "have a..." vs "feel..."',
        structure: 'Subject + have / has + a headache / a fever / a sore throat | Subject + feel(s) + dizzy / nauseous / drowsy',
        rule: 'Use "have a + noun" for bodily conditions, and "feel + adjective" for sensations.',
        examples: [
          { en: 'I have had a severe migraine since yesterday afternoon.', hi: 'मुझे कल दोपहर से तेज माइग्रेन हो रहा है।', es: 'He tenido una fuerte migraña desde ayer por la tarde.' },
          { en: 'She feels dizzy whenever she stands up quickly.', hi: 'जब भी वह तेजी से उठती है तो उसे चक्कर आते हैं।', es: 'Ella se siente mareada cada vez que se levanta rápido.' }
        ]
      },
      {
        title: 'Imperatives for Dosage Instructions',
        structure: '[Base Verb] + [Quantity] + [Frequency] + [Condition]',
        rule: 'Dosage instructions use concise imperatives: Take [X pills] [Y times a day] [after meals / with water].',
        examples: [
          { en: 'Take one capsule three times a day before meals.', hi: 'भोजन से पहले दिन में तीन बार एक कैप्सूल लें।', es: 'Tome una cápsula tres veces al día antes de las comidas.' },
          { en: 'Apply this cream sparingly twice daily to the affected area.', hi: 'प्रभावित हिस्से पर दिन में दो बार यह क्रीम थोड़ी मात्रा में लगाएं।', es: 'Aplique esta crema con moderación dos veces al día en la zona afectada.' }
        ]
      },
      {
        title: 'Declaring Allergies: "be allergic to..."',
        structure: 'Subject + am / is / are + allergic to + [Medication / Food / Substance]',
        rule: 'Use the preposition "to" after the adjective "allergic".',
        examples: [
          { en: 'I am allergic to aspirin and dairy products.', hi: 'मुझे एस्पिरिन और डेयरी उत्पादों से एलर्जी है।', es: 'Soy alérgico a la aspirina y a los productos lácteos.' },
          { en: 'Is the patient allergic to any known antibiotics?', hi: 'क्या मरीज को किसी ज्ञात एंटीबायोटिक से एलर्जी है?', es: '¿El paciente es alérgico a algún antibiótico conocido?' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'I am have a big headache.',
      cor: 'I have a bad headache.',
      exp: 'Use Present Simple "I have a headache" with the adjective "bad" or "severe", not "big".',
      hi: '"I have a bad headache" कहें।',
      es: 'Se dice "I have a bad headache".'
    },
    {
      inc: 'I am allergic of penicillin.',
      cor: 'I am allergic to penicillin.',
      exp: 'The adjective "allergic" strictly takes the preposition "to", never "of".',
      hi: '"Allergic" के साथ "to" आता है, "of" नहीं।',
      es: '"Allergic" se construye con "to": "allergic to".'
    },
    {
      inc: 'Take this pills two times in day.',
      cor: 'Take these pills twice a day.',
      exp: 'Use plural "these pills" and standard frequency expression "twice a day".',
      hi: '"Take these pills twice a day" सही रूप है।',
      es: 'Se dice "Take these pills twice a day".'
    },
    {
      inc: 'He feels himself dizzy.',
      cor: 'He feels dizzy.',
      exp: '"Feel" as a linking verb does not take a reflexive pronoun in English.',
      hi: '"He feels dizzy" कहें, "himself" न जोड़ें।',
      es: 'No se usa pronombre reflexivo: "He feels dizzy".'
    },
    {
      inc: 'Do you have something for cure the flu?',
      cor: 'Do you have something to treat the flu?',
      exp: 'Use the infinitive of purpose "to treat" or "for treating".',
      hi: '"To treat the flu" कहें।',
      es: 'Se dice "to treat the flu".'
    }
  ],
  dialogues: [
    {
      title: 'Consulting a Pharmacist for Cold Symptoms',
      context: 'Ananya visits a London pharmacy seeking medicine for a winter head cold.',
      charA: { name: 'Ananya', av: '👩🏽', role: 'Customer' },
      charB: { name: 'Pharmacist', av: '👨🏼', role: 'Pharmacist' },
      turns: [
        { spk: 'Ananya', text: 'Hello. I have had a runny nose, sore throat, and mild fever since yesterday. What do you recommend for these symptoms?', hi: 'नमस्ते। मुझे कल से बहती नाक, गले में खराश और हल्का बुखार है। आप इन लक्षणों के लिए क्या दवा लेने की सलाह देते हैं?', es: 'Hola. He tenido secreción nasal, dolor de garganta y fiebre leve desde ayer. ¿Qué me recomienda?' },
        { spk: 'Pharmacist', text: 'I recommend these cold and flu relief capsules. They contain paracetamol for the fever and a decongestant for your nose.', hi: 'मैं इन कोल्ड और फ्लू रिलीफ कैप्सूल की सलाह देता हूँ। इनमें बुखार के लिए पैरासिटामोल और बंद नाक के लिए डिकॉन्गेस्टेंट होता है।', es: 'Le recomiendo estas cápsulas. Contienen paracetamol para la fiebre y descongestionante.' },
        { spk: 'Ananya', text: 'How often should I take them, and do they cause drowsiness?', hi: 'मुझे इन्हें कितनी बार लेना चाहिए, और क्या इनसे नींद आती है?', es: '¿Con qué frecuencia debo tomarlas y causan somnolencia?' },
        { spk: 'Pharmacist', text: 'Take two capsules every six hours with water, but do not exceed eight capsules in 24 hours. This daytime formula is non-drowsy.', hi: 'पानी के साथ हर छह घंटे में दो कैप्सूल लें, लेकिन 24 घंटों में आठ कैप्सूल से अधिक न लें। यह दिन का फॉर्मूला गैर-सुस्ती वाला है।', es: 'Tome dos cápsulas cada seis horas con agua, máximo ocho en 24 horas. Esta fórmula no da sueño.' }
      ]
    },
    {
      title: 'Booking a Doctor\'s Appointment by Phone',
      context: 'Marcus calls the local health clinic to schedule an appointment for persistent back pain.',
      charA: { name: 'Marcus', av: '👨🏻', role: 'Patient' },
      charB: { name: 'Receptionist', av: '👩🏻', role: 'Clinic Staff' },
      turns: [
        { spk: 'Marcus', text: 'Good morning. I would like to book a doctor\'s appointment for this week, please.', hi: 'सुप्रभात। मैं इस सप्ताह के लिए डॉक्टर की अपॉइंटमेंट बुक करना चाहूँगा, कृपया।', es: 'Buenos días. Me gustaría pedir cita médica para esta semana, por favor.' },
        { spk: 'Receptionist', text: 'Certainly, sir. Dr. Watson has an opening on Wednesday at 2:30 PM. Would that work for you?', hi: 'निश्चित रूप से, महोदय। डॉ. वॉटसन के पास बुधवार दोपहर 2:30 बजे का समय उपलब्ध है। क्या यह आपके लिए ठीक रहेगा?', es: 'Por supuesto. La Dra. Watson tiene un hueco el miércoles a las 2:30 PM. ¿Le vendría bien?' },
        { spk: 'Marcus', text: 'Yes, Wednesday at 2:30 PM is perfect. Should I bring my past medical records?', hi: 'हाँ, बुधवार दोपहर 2:30 बजे का समय बिल्कुल सही है। क्या मुझे अपने पिछले मेडिकल रिकॉर्ड लाने चाहिए?', es: 'Sí, el miércoles a las 2:30 PM es perfecto. ¿Debería llevar mi historial médico?' },
        { spk: 'Receptionist', text: 'Yes, please bring any existing test reports and your identification card ten minutes prior to your slot.', hi: 'हाँ, कृपया अपने समय से दस मिनट पहले कोई भी मौजूदा टेस्ट रिपोर्ट और अपना पहचान पत्र लेकर आएं।', es: 'Sí, por favor traiga sus análisis y su documento de identidad diez minutos antes.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_a2_9_131_p01',
      type: 'multiple_choice',
      prompt: 'Select the correct preposition: "I am severely allergic _____ penicillin."',
      options: [
        { id: '1', text: 'to', isCorrect: true },
        { id: '2', text: 'of', isCorrect: false },
        { id: '3', text: 'with', isCorrect: false },
        { id: '4', text: 'from', isCorrect: false }
      ],
      correctAnswer: 'to',
      explanation: '"Allergic" takes the preposition "to".'
    },
    {
      id: 'ex_a2_9_131_p02',
      type: 'fill_blank',
      prompt: 'Complete the frequency instruction: "Take one tablet _____ (two times) a day after meals."',
      correctAnswer: 'twice',
      explanation: '"Twice a day" means two times a day.'
    },
    {
      id: 'ex_a2_9_131_p03',
      type: 'word_ordering',
      prompt: 'Arrange into a correct medical instruction:',
      tokens: ['Do', 'not', 'exceed', 'the', 'recommended', 'daily', 'dosage'],
      correctAnswer: 'Do not exceed the recommended daily dosage',
      explanation: 'Imperative warning sentence.'
    },
    {
      id: 'ex_a2_9_131_p04',
      type: 'translation',
      prompt: 'Translate to English: "मुझे कल रात से तेज बुखार और सिरदर्द है।"',
      correctAnswer: 'I have had a high fever and headache since last night.',
      acceptableAnswers: [
        'I have had a high fever and a headache since last night.',
        'I have a high fever and headache since last night.'
      ],
      explanation: 'Present Perfect state + "since last night".'
    },
    {
      id: 'ex_a2_9_131_p05',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence: "He feels himself dizzy in the heat."',
      correctAnswer: 'He feels dizzy in the heat.',
      explanation: 'Do not use reflexive "himself" after "feels".'
    },
    {
      id: 'ex_a2_9_131_p06',
      type: 'listening',
      prompt: 'Listen to the pharmacist\'s instructions and choose the correct daily dose limit:',
      audioText: 'Take one pill every eight hours with water. You must never take more than three pills in a single 24-hour period.',
      options: [
        { id: '1', text: 'Maximum three pills in 24 hours', isCorrect: true },
        { id: '2', text: 'Take ten pills with breakfast', isCorrect: false },
        { id: '3', text: 'Take one pill every hour', isCorrect: false },
        { id: '4', text: 'Take medicine on an empty stomach only', isCorrect: false }
      ],
      correctAnswer: 'Maximum three pills in 24 hours',
      explanation: 'The pharmacist states "never take more than three pills in a single 24-hour period".'
    },
    {
      id: 'ex_a2_9_131_p07',
      type: 'listen_and_type',
      prompt: 'Listen and type the exact sentence:',
      audioText: 'I would like to book a doctor appointment.',
      correctAnswer: 'I would like to book a doctor appointment.',
      acceptableAnswers: ["I would like to book a doctor's appointment."],
      explanation: 'Type the appointment booking request.'
    },
    {
      id: 'ex_a2_9_131_p08',
      type: 'speaking',
      prompt: 'Read aloud clearly: "Take two capsules twice daily with meals, and drink plenty of warm fluids."',
      targetText: 'Take two capsules twice daily with meals, and drink plenty of warm fluids.',
      explanation: 'Speak clearly with authoritative medical pacing.'
    },
    {
      id: 'ex_a2_9_131_p09',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nPatient: "Will this antihistamine make me sleepy?"\nDoctor: "Yes, this medication might make you feel _____."',
      options: [
        { id: '1', text: 'drowsy', isCorrect: true },
        { id: '2', text: 'drowsiness', isCorrect: false },
        { id: '3', text: 'drowsily', isCorrect: false },
        { id: '4', text: 'drowse', isCorrect: false }
      ],
      correctAnswer: 'drowsy',
      explanation: 'Feel + adjective "drowsy".'
    },
    {
      id: 'ex_a2_9_131_p10',
      type: 'multiple_choice',
      prompt: 'What is a "prescription"?',
      options: [
        { id: '1', text: 'An official authorization written by a doctor for medicine.', isCorrect: true },
        { id: '2', text: 'A cooking recipe for healthy vegetable soup.', isCorrect: false },
        { id: '3', text: 'A bill for parking at the hospital.', isCorrect: false },
        { id: '4', text: 'A gym membership card.', isCorrect: false }
      ],
      correctAnswer: 'An official authorization written by a doctor for medicine.',
      explanation: 'A prescription is a doctor\'s official medication order.'
    },
    {
      id: 'ex_a2_9_131_p11',
      type: 'match_pairs',
      prompt: 'Match each illness symptom with its body part:',
      options: [
        { id: '1', text: 'headache → [head / forehead]' },
        { id: '2', text: 'sore throat → [neck / throat]' },
        { id: '3', text: 'stomachache → [belly / abdomen]' },
        { id: '4', text: 'fever → [overall body temperature]' }
      ],
      correctAnswer: 'matched',
      explanation: 'Symptoms and body locations.'
    },
    {
      id: 'ex_a2_9_131_p12',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Apply the antiseptic _____ (ointment) to the cut twice a day."',
      correctAnswer: 'ointment',
      explanation: '"Ointment" is topical cream.'
    },
    {
      id: 'ex_a2_9_131_p13',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['She', 'has', 'had', 'a', 'fever', 'since', 'yesterday'],
      correctAnswer: 'She has had a fever since yesterday',
      explanation: 'Present perfect state + since yesterday.'
    },
    {
      id: 'ex_a2_9_131_p14',
      type: 'translation',
      prompt: 'Translate to English: "क्या मुझे इस दवा को खरीदने के लिए डॉक्टर के पर्चे की आवश्यकता है?"',
      correctAnswer: 'Do I need a prescription to buy this medicine?',
      acceptableAnswers: ['Do I need a doctor prescription to buy this medicine?'],
      explanation: '"Do I need a prescription to buy this medicine?".'
    },
    {
      id: 'ex_a2_9_131_p15',
      type: 'multiple_choice',
      prompt: 'Select the grammatically correct instruction:',
      options: [
        { id: '1', text: 'Swallow one tablet with water every six hours.', isCorrect: true },
        { id: '2', text: 'Swallow one tablet with water every six hour.', isCorrect: false },
        { id: '3', text: 'Swallowing one tablet with water every six hours.', isCorrect: false },
        { id: '4', text: 'To swallow one tablet with water six hours.', isCorrect: false }
      ],
      correctAnswer: 'Swallow one tablet with water every six hours.',
      explanation: 'Imperative verb form "Swallow" with plural "six hours".'
    }
  ],
  review: [
    {
      id: 'ex_a2_9_131_r01',
      type: 'multiple_choice',
      prompt: 'Choose the correct form:',
      options: [
        { id: '1', text: 'I am allergic to peanuts and tree nuts.', isCorrect: true },
        { id: '2', text: 'I am allergic with peanuts and tree nuts.', isCorrect: false },
        { id: '3', text: 'I am allergic of peanuts.', isCorrect: false },
        { id: '4', text: 'I have allergy for peanuts.', isCorrect: false }
      ],
      correctAnswer: 'I am allergic to peanuts and tree nuts.',
      explanation: '"Allergic to" is the correct preposition.'
    },
    {
      id: 'ex_a2_9_131_r02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Take this painkiller _____ (one time) a day in the morning."',
      correctAnswer: 'once',
      explanation: '"Once a day" means one time per day.'
    },
    {
      id: 'ex_a2_9_131_r03',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['You', 'should', 'get', 'plenty', 'of', 'bed', 'rest'],
      correctAnswer: 'You should get plenty of bed rest',
      explanation: 'Modal advice structure.'
    },
    {
      id: 'ex_a2_9_131_r04',
      type: 'translation',
      prompt: 'Translate to English: "खाना खाने के बाद यह गोली लें।"',
      correctAnswer: 'Take this pill after meals.',
      acceptableAnswers: ['Take this tablet after meals.', 'Take this pill after eating.'],
      explanation: '"Take this pill after meals".'
    },
    {
      id: 'ex_a2_9_131_r05',
      type: 'error_correction',
      prompt: 'Correct the error: "I have a sore neck and fever since three days."',
      correctAnswer: 'I have had a sore throat and fever for three days.',
      acceptableAnswers: [
        'I have had a sore neck and fever for three days.',
        'I have had a fever for three days.'
      ],
      explanation: 'Use Present Perfect ("have had") + "for three days".'
    }
  ],
  assessment: [
    {
      id: 'ex_a2_9_131_a01',
      type: 'multiple_choice',
      prompt: 'Which statement accurately describes symptoms and asks for advice?',
      options: [
        { id: '1', text: 'I have had a persistent dry cough and sore throat since Monday. What do you recommend?', isCorrect: true },
        { id: '2', text: 'I am having cough since Monday what you give?', isCorrect: false },
        { id: '3', text: 'I feel cough and fever since three days recommend me.', isCorrect: false },
        { id: '4', text: 'I have cough for Monday give medicines.', isCorrect: false }
      ],
      correctAnswer: 'I have had a persistent dry cough and sore throat since Monday. What do you recommend?',
      explanation: 'Accurate grammar with Present Perfect and "since Monday".'
    },
    {
      id: 'ex_a2_9_131_a02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Take two capsules _____ (three times) a day after meals."',
      correctAnswer: 'three times',
      explanation: '"Three times a day".'
    },
    {
      id: 'ex_a2_9_131_a03',
      type: 'translation',
      prompt: 'Translate to English: "मुझे एस्पिरिन से एलर्जी है।"',
      correctAnswer: 'I am allergic to aspirin.',
      acceptableAnswers: ['I have an allergy to aspirin.'],
      explanation: '"I am allergic to aspirin".'
    },
    {
      id: 'ex_a2_9_131_a04',
      type: 'speaking',
      prompt: 'Read aloud clearly: "The doctor prescribed antibiotics and advised me to take one capsule every eight hours with meals."',
      targetText: 'The doctor prescribed antibiotics and advised me to take one capsule every eight hours with meals.',
      explanation: 'Speak clearly with accurate medical vocabulary pronunciation.'
    },
    {
      id: 'ex_a2_9_131_a05',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['Do', 'not', 'take', 'medicine', 'on', 'an', 'empty', 'stomach'],
      correctAnswer: 'Do not take medicine on an empty stomach',
      explanation: 'Negative imperative medical warning.'
    }
  ]
};

// =========================================================================
// LESSON 132: Environmental Awareness, Sustainable Living & Recycling
// =========================================================================
export const LESSON_132_CONFIG: LessonConfigA2 = {
  num: 132,
  title: 'Environmental Awareness, Sustainable Living & Recycling',
  icon: '🌱',
  estMin: 25,
  objTitle: 'Discussing Eco-friendly Habits, Recycling & Environmental Protection',
  objDesc: 'Learn to discuss environmental issues (climate change, pollution, single-use plastic), describe sustainable lifestyle habits (recycling, composting, saving energy), and express collective responsibility using "we should / must protect...".',
  objHi: 'पर्यावरण के मुद्दों (प्रदूषण, प्लास्टिक कचरा), टिकाऊ जीवनशैली की आदतों (रीसाइक्लिंग, ऊर्जा की बचत) और पर्यावरण की रक्षा पर चर्चा करना सीखें।',
  objEs: 'Hablar de sostenibilidad, reciclaje, reducción de plásticos y responsabilidad ecológica usando "we should / must protect...".',
  canDo: [
    'I can talk about everyday sustainable habits (sorting recycling, saving electricity, reducing waste).',
    'I can discuss global environmental challenges (pollution, deforestation, climate change) at an A2 level.',
    'I can express obligation and necessity for environmental action using "must", "have to", and "should".',
    'I can suggest practical green alternatives (reusable bottles, public transit, solar power).'
  ],
  canDoHi: [
    'मैं दैनिक पर्यावरण-अनुकूल आदतों (कचरे का वर्गीकरण, बिजली की बचत, पुनः उपयोग) के बारे में बात कर सकता हूँ।',
    'मैं प्रदूषण, प्लास्टिक कचरे और जलवायु परिवर्तन जैसी चुनौतियों पर चर्चा कर सकता हूँ।',
    'मैं पर्यावरण संरक्षण की आवश्यकता व्यक्त करने के लिए "must", "have to" और "should" का उपयोग कर सकता हूँ।',
    'मैं व्यावहारिक हरित विकल्पों (पुन: प्रयोज्य बोतलें, सार्वजनिक परिवहन, सौर ऊर्जा) का सुझाव दे सकता हूँ।'
  ],
  canDoEs: [
    'Puedo hablar de hábitos sostenibles diarios como reciclar y ahorrar energía.',
    'Puedo comentar retos ambientales como la contaminación y el cambio climático.',
    'Puedo expresar obligaciones ecológicas con "must" y "should".',
    'Puedo proponer alternativas verdes como botellas reutilizables o transporte público.'
  ],
  vocab: [
    { w: 'recycle', p: '/ˌriːˈsaɪkl/', m: 'convert waste into reusable material', hi: 'पुनर्चक्रण करना / रीसायकल करना', es: 'reciclar', fr: 'recycler', de: 'recyceln / wiederverwerten', pt: 'reciclar', zh: '回收利用', ar: 'يعيد تدوير', ja: 'リサイクルする', ru: 'перерабатывать (отходы)', ex: 'Our community recycles paper, plastic, glass, and aluminum cans.', exHi: 'हमारा समुदाय कागज, प्लास्टिक, कांच और एल्युमीनियम के डिब्बों का पुनर्चक्रण करता है।', exEs: 'Nuestra comunidad recicla papel, plástico, vidrio y latas.', ic: '♻️' },
    { w: 'pollution', p: '/pəˈluːʃn/', m: 'the presence in or introduction into the environment of a substance with harmful effects', hi: 'प्रदूषण', es: 'contaminación', fr: 'pollution', de: 'Verschmutzung / Umweltverschmutzung', pt: 'poluição', zh: '污染', ar: 'تلوث', ja: '汚染 / 公害', ru: 'загрязнение', ex: 'Air pollution from heavy traffic is a serious problem in major cities.', exHi: 'भारी ट्रैफिक से होने वाला वायु प्रदूषण बड़े शहरों में एक गंभीर समस्या है।', exEs: 'La contaminación del aire por el tráfico es un problema grave.', ic: '🏭' },
    { w: 'sustainable', p: '/səˈsteɪnəbl/', m: 'able to be maintained at a certain rate or level without depleting natural resources', hi: 'टिकाऊ / पर्यावरण अनुकूल', es: 'sostenible / sustentable', fr: 'durable / soutenable', de: 'nachhaltig', pt: 'sustentável', zh: '可持续的', ar: 'مستدام', ja: '持続可能な / サステナブルな', ru: 'устойчивый / экологичный', ex: 'Solar and wind energy provide clean and sustainable electricity.', exHi: 'सौर और पवन ऊर्जा स्वच्छ और टिकाऊ बिजली प्रदान करती हैं।', exEs: 'La energía solar y eólica proporcionan electricidad limpia y sostenible.', ic: '☀️' },
    { w: 'renewable', p: '/rɪˈnjuːəbl/', m: 'capable of being replenished naturally within a short time', hi: 'नवीकरणीय / अक्षय ऊर्जा', es: 'renovable', fr: 'renouvelable', de: 'erneuerbar', pt: 'renovável', zh: '可再生的', ar: 'متجدد', ja: '再生可能な', ru: 'возобновляемый', ex: 'Investing in renewable energy reduces dependence on fossil fuels.', exHi: 'नवीकरणीय ऊर्जा में निवेश करने से जीवाश्म ईंधन पर निर्भरता कम होती है।', exEs: 'Invertir en energía renovable reduce la dependencia de combustibles fósiles.', ic: '🌱' },
    { w: 'plastic', p: '/ˈplæstɪk/', m: 'a synthetic material made from a wide range of organic polymers', hi: 'प्लास्टिक', es: 'plástico', fr: 'plastique', de: 'Plastik / Kunststoff', pt: 'plástico', zh: '塑料', ar: 'بلاستيك', ja: 'プラスチック', ru: 'пластик / пластмасса', ex: 'We must ban single-use plastic shopping bags to protect oceans.', exHi: 'महासागरों की रक्षा के लिए हमें एकल-उपयोग वाले प्लास्टिक बैग पर प्रतिबंध लगाना चाहिए।', exEs: 'Debemos prohibir las bolsas de plástico de un solo uso para proteger los océanos.', ic: '🛍️' },
    { w: 'reusable', p: '/ˌriːˈjuːzəbl/', m: 'able to be used again or more than once', hi: 'पुनः प्रयोज्य / बार-बार इस्तेमाल होने वाला', es: 'reutilizable', fr: 'réutilisable', de: 'wiederverwendbar', pt: 'reutilizável', zh: '可重复使用的', ar: 'قابل لإعادة الاستخدام', ja: '再利用可能な', ru: 'многоразовый', ex: 'Always carry a reusable stainless steel water bottle and canvas bag.', exHi: 'हमेशा दोबारा इस्तेमाल होने वाली पानी की बोतल और कैनवास बैग साथ रखें।', exEs: 'Lleva siempre una botella de agua y una bolsa de lona reutilizables.', ic: '🍶' },
    { w: 'environment', p: '/ɪnˈvaɪrənmənt/', m: 'the surroundings or conditions in which a person, animal, or plant lives', hi: 'पर्यावरण / परिवेश', es: 'medio ambiente / entorno', fr: 'environnement', de: 'Umwelt', pt: 'meio ambiente', zh: '环境', ar: 'بيئة', ja: '環境', ru: 'окружающая среда', ex: 'Protecting the natural environment is everyone\'s responsibility.', exHi: 'प्राकृतिक पर्यावरण की रक्षा करना हम सभी की जिम्मेदारी है।', exEs: 'Proteger el medio ambiente es responsabilidad de todos.', ic: '🌍' },
    { w: 'climate', p: '/ˈklaɪmət/', m: 'the weather conditions prevailing in an area in general or over a long period', hi: 'जलवायु / मौसम चक्र', es: 'clima', fr: 'climat', de: 'Klima', pt: 'clima', zh: '气候', ar: 'مناخ', ja: '気候', ru: 'климат', ex: 'Global climate change causes extreme heatwaves and unpredictable storms.', exHi: 'वैश्विक जलवायु परिवर्तन से अत्यधिक गर्मी और अनपेक्षित तूफान आते हैं।', exEs: 'El cambio climático global causa olas de calor extremas y tormentas.', ic: '🌡️' },
    { w: 'conserve', p: '/kənˈsɜːv/', m: 'protect something from harm or destruction; prevent wasteful use of a resource', hi: 'संरक्षण करना / बचाना', es: 'conservar / ahorrar', fr: 'préserver / économiser', de: 'schonen / bewahren', pt: 'conservar / poupar', zh: '节约 / 保护', ar: 'يحافظ على / يرشد', ja: '節約する / 保護する', ru: 'сохранять / беречь', ex: 'Turn off the running tap while brushing teeth to conserve clean water.', exHi: 'पानी के संरक्षण के लिए दांत ब्रश करते समय नल बंद कर दें।', exEs: 'Cierra el grifo mientras te lavas los dientes para conservar el agua.', ic: '🚰' },
    { w: 'compost', p: '/ˈkɒmpɒst/', m: 'decayed organic material used as a plant fertilizer', hi: 'जैविक खाद / कम्पोस्ट', es: 'compost / abono orgánico', fr: 'compost', de: 'Kompost', pt: 'composto orgânico', zh: '堆肥', ar: 'سماد عضوي', ja: '堆肥 / コンポスト', ru: 'компост', ex: 'We compost our fruit peels and coffee grounds in the garden.', exHi: 'हम अपने बगीचे में फलों के छिलके और कॉफी के अवशेषों से खाद बनाते हैं।', exEs: 'Hacemos compost con las cáscaras de fruta y posos de café en el jardín.', ic: '🍂' },
    { w: 'organic', p: '/ɔːˈɡænɪk/', m: 'produced without the use of chemical fertilizers or pesticides', hi: 'जैविक / ऑर्गेनिक', es: 'orgánico / ecológico', fr: 'biologique / bio', de: 'organisch / biologisch', pt: 'orgânico', zh: '有机的', ar: 'عضوي', ja: '有機の / オーガニックの', ru: 'органический', ex: 'Buying organic seasonal vegetables supports local sustainable farmers.', exHi: 'जैविक मौसमी सब्जियां खरीदने से स्थानीय किसानों को समर्थन मिलता है।', exEs: 'Comprar verduras orgánicas apoya a los agricultores sostenibles locales.', ic: '🥦' },
    { w: 'waste', p: '/weɪst/', m: 'material that is not wanted; the unusable remains or byproducts of something', hi: 'कचरा / अपशिष्ट', es: 'residuos / basura / desperdicio', fr: 'déchets / gaspillage', de: 'Müll / Abfall', pt: 'lixo / resíduos', zh: '废物 / 垃圾', ar: 'نفايات / مخلفات', ja: '廃棄物 / ゴミ', ru: 'отходы / мусор', ex: 'Our goal is to reduce household food waste by fifty percent.', exHi: 'हमारा लक्ष्य घरेलू खाद्य कचरे को पचास प्रतिशत तक कम करना है।', exEs: 'Nuestro objetivo es reducir el desperdicio de alimentos a la mitad.', ic: '🗑️' },
    { w: 'biodegradable', p: '/ˌbaɪəʊdɪˈɡreɪdəbl/', m: 'capable of being decomposed by bacteria or other living organisms', hi: 'बायोडिग्रेडेबल / प्राकृतिक रूप से गलने योग्य', es: 'biodegradable', fr: 'biodégradable', de: 'biologisch abbaubar', pt: 'biodegradável', zh: '可生物降解的', ar: 'قابل للتحلل الحيوي', ja: '生分解性の', ru: 'биоразлагаемый', ex: 'These takeaway coffee cups are made from 100% biodegradable bamboo.', exHi: 'ये टेकअवे कॉफी कप 100% बायोडिग्रेडेबल बांस से बने हैं।', exEs: 'Estos vasos de café están hechos de bambú 100% biodegradable.', ic: '🎋' },
    { w: 'wildlife', p: '/ˈwaɪldlaɪf/', m: 'wild animals collectively; the native fauna and flora of a region', hi: 'वन्यजीव', es: 'vida silvestre / fauna', fr: 'faune et flore sauvages', de: 'Tier- und Pflanzenwelt / Wildtiere', pt: 'vida selvagem / fauna', zh: '野生动物', ar: 'حياة برية', ja: '野生生物', ru: 'дикая природа', ex: 'Plastic litter in forests harms innocent wildlife and birds.', exHi: 'जंगलों में प्लास्टिक कचरा वन्यजीवों और पक्षियों को नुकसान पहुँचाता है।', exEs: 'La basura plástica en los bosques daña la fauna silvestre y las aves.', ic: '🦌' },
    { w: 'protect', p: '/prəˈtekt/', m: 'keep safe from harm or injury', hi: 'रक्षा करना / बचाना', es: 'proteger', fr: 'protéger', de: 'schützen', pt: 'proteger', zh: '保护', ar: 'يحمي', ja: '守る / 保護する', ru: 'защищать / беречь', ex: 'Everyone must act together to protect endangered species.', exHi: 'लुप्तप्राय प्रजातियों की रक्षा के लिए सभी को मिलकर काम करना चाहिए।', exEs: 'Todos debemos actuar juntos para proteger las especies en peligro.', ic: '🛡️' },
    { w: 'solar', p: '/ˈsəʊlə/', m: 'relating to or derived from the sun\'s rays', hi: 'सौर / सूर्य संबंधी', es: 'solar', fr: 'solaire', de: 'solar / Sonnen-', pt: 'solar', zh: '太阳能的', ar: 'شمسي', ja: '太陽の / ソーラーの', ru: 'солнечный', ex: 'Installing rooftop solar panels lowered our electricity bills significantly.', exHi: 'छत पर सौर पैनल लगाने से हमारे बिजली के बिल में काफी कमी आई।', exEs: 'Instalar paneles solares en el techo redujo nuestras facturas de luz.', ic: '☀️' },
    { w: 'footprint', p: '/ˈfʊtprɪnt/', m: 'the impact on the environment of human activity (carbon footprint)', hi: 'कार्बन पदचिह्न / प्रभाव', es: 'huella ecológica / huella de carbono', fr: 'empreinte carbone', de: 'Fußabdruck (ökologisch)', pt: 'pegada de carbono', zh: '碳足迹', ar: 'بصمة كربونية', ja: '環境負荷 / カーボンフットプリント', ru: 'экологический след', ex: 'Using public transport reduces your personal carbon footprint.', exHi: 'सार्वजनिक परिवहन का उपयोग आपके कार्बन पदचिह्न को कम करता है।', exEs: 'Usar el transporte público reduce tu huella de carbono personal.', ic: '👣' },
    { w: 'ocean', p: '/ˈəʊʃn/', m: 'a very large expanse of sea, in particular each of the main areas into which the sea is divided', hi: 'महासागर / समुद्र', es: 'océano', fr: 'océan', de: 'Ozean / Meer', pt: 'oceano', zh: '海洋', ar: 'محيط', ja: '大洋 / 海洋', ru: 'океан', ex: 'Millions of marine creatures suffer due to plastic waste in the ocean.', exHi: 'समुद्र में प्लास्टिक कचरे के कारण लाखों समुद्री जीव कष्ट झेलते हैं।', exEs: 'Millones de criaturas marinas sufren por el plástico en el océano.', ic: '🌊' },
    { w: 'ecosystem', p: '/ˈiːkəʊsɪstəm/', m: 'a biological community of interacting organisms and their physical environment', hi: 'पारिस्थितिकी तंत्र / इकोसिस्टम', es: 'ecosistema', fr: 'écosystème', de: 'Ökosystem', pt: 'ecossistema', zh: '生态系统', ar: 'نظام بيئي', ja: '生態系', ru: 'экосистема', ex: 'Coral reefs are among the most fragile ecosystems on Earth.', exHi: 'कोरल रीफ पृथ्वी पर सबसे नाजुक पारिस्थितिकी तंत्रों में से हैं।', exEs: 'Los arrecifes de coral están entre los ecosistemas más frágiles de la Tierra.', ic: '🐠' },
    { w: 'action', p: '/ˈækʃn/', m: 'the fact or process of doing something, typically to achieve an aim', hi: 'कार्रवाई / पहल', es: 'acción / medida', fr: 'action / mesure', de: 'Handeln / Maßnahme', pt: 'ação / medida', zh: '行动', ar: 'عمل / إجراء', ja: '行動 / 対策', ru: 'действие / мера', ex: 'We need urgent global action to combat deforestation.', exHi: 'वनों की कटाई से निपटने के लिए हमें तत्काल वैश्विक कार्रवाई की आवश्यकता है।', exEs: 'Necesitamos una acción global urgente para combatir la deforestación.', ic: '✊' }
  ],
  chunks: [
    { phrase: 'reduce, reuse, and recycle', meaning: 'the classic three-part principle of environmental stewardship', hi: 'कम उपयोग, पुन: उपयोग और पुनर्चक्रण', es: 'reducir, reutilizar y reciclar', fr: 'réduire, réutiliser et recycler', de: 'vermeiden, wiederverwenden und recyceln', pt: 'reduzir, reutilizar e reciclar', zh: '减量、复用、回收', ar: 'التقليل، إعادة الاستخدام، وإعادة التدوير', ja: 'リデュース・リユース・リサイクル', ru: 'сокращать, повторно использовать и перерабатывать', note: 'Core global environmental slogan.', ic: '♻️' },
    { phrase: 'reduce our carbon footprint', meaning: 'lower greenhouse gas emissions from daily choices', hi: 'अपने कार्बन पदचिह्न को कम करना', es: 'reducir nuestra huella de carbono', fr: 'réduire notre empreinte carbone', de: 'unseren CO2-Fußabdruck verringern', pt: 'reduzir nossa pegada de carbono', zh: '减少我们的碳足迹', ar: 'تقليل بصمتنا الكربونية', ja: '温室効果ガス排出量を減らす', ru: 'уменьшать наш углеродный след', note: 'Standard modern sustainability target.', ic: '👣' },
    { phrase: 'switch off the lights', meaning: 'turn off electric lights when leaving a room', hi: 'कमरे से बाहर जाते समय बत्तियां बंद करना', es: 'apagar las luces', fr: 'éteindre les lumières', de: 'das Licht ausschalten', pt: 'apagar as luzes', zh: '关灯', ar: 'إطفاء الأنوار', ja: '電気を消す', ru: 'выключать свет', note: 'Everyday energy-saving habit.', ic: '💡' },
    { phrase: 'single-use plastic', meaning: 'disposable items designed to be thrown away after one use', hi: 'एकल-उपयोग प्लास्टिक', es: 'plástico de un solo uso', fr: 'plastique à usage unique', de: 'Einwegplastik', pt: 'plástico descartável / de uso único', zh: '一次性塑料', ar: 'بلاستيك أحادي الاستخدام', ja: '使い捨てプラスチック', ru: 'одноразовый пластик', note: 'Major target of environmental regulation.', ic: '🥤' },
    { phrase: 'rely on renewable energy', meaning: 'use power generated by wind, water, or sun', hi: 'नवीकरणीय ऊर्जा पर निर्भर होना', es: 'depender de energía renovable', fr: 'compter sur les énergies renouvelables', de: 'sich auf erneuerbare Energien stützen', pt: 'depender de energia renovável', zh: '依赖可再生能源', ar: 'الاعتماد على الطاقة المتجددة', ja: '再生可能エネルギーに頼る', ru: 'полагаться на возобновляемую энергию', note: 'Clean energy policy chunk.', ic: '☀️' },
    { phrase: 'protect natural habitats', meaning: 'preserve ecosystems where animals and plants live', hi: 'प्राकृतिक आवासों की रक्षा करना', es: 'proteger los hábitats naturales', fr: 'protéger les habitats naturels', de: 'natürliche Lebensräume schützen', pt: 'proteger os habitats naturais', zh: '保护自然栖息地', ar: 'حماية الموائل الطبيعية', ja: '自然の生息地を守る', ru: 'защищать естественную среду обитания', note: 'Conservation concept.', ic: '🌲' },
    { phrase: 'sort the household rubbish', meaning: 'separate trash into recyclables, compost, and general waste', hi: 'घर के कचरे को अलग-अलग छांटना', es: 'clasificar la basura del hogar', fr: 'trier les déchets ménagers', de: 'den Hausmüll trennen', pt: 'separar o lixo doméstico', zh: '对生活垃圾进行分类', ar: 'فرز القمامة المنزلية', ja: '家庭ゴミを分別する', ru: 'сортировать бытовой мусор', note: 'Practical civic duty.', ic: '🗑️' },
    { phrase: 'for the sake of future generations', meaning: 'to protect the world for children who will come after us', hi: 'भावी पीढ़ियों के कल्याण के लिए', es: 'por el bien de las futuras generaciones', fr: 'pour le bien des générations futures', de: 'zum Wohl zukünftiger Generationen', pt: 'em prol das futuras gerações', zh: '为了子孙后代', ar: 'من أجل الأجيال القادمة', ja: '未来の世代のために', ru: 'ради будущих поколений', note: 'Moral justification for eco-action.', ic: '🌱' }
  ],
  grammar: {
    title: 'Expressing Ecological Obligation & Practical Suggestions: "Must", "Should", and "Have to"',
    concept: 'Using strong obligation ("We must protect the planet"), standard advice ("We should recycle plastic"), and necessity ("We have to reduce waste").',
    patterns: [
      {
        title: 'Strong Collective Duty with "Must"',
        structure: 'Subject (We / Everyone) + must + Base Verb',
        rule: 'Use "must" to declare urgent universal moral and practical duties.',
        examples: [
          { en: 'We must protect our oceans from toxic plastic pollution.', hi: 'हमें अपने महासागरों को जहरीले प्लास्टिक प्रदूषण से बचाना चाहिए।', es: 'Debemos proteger nuestros océanos de la contaminación por plásticos.' },
          { en: 'Governments must invest more in solar and wind infrastructure.', hi: 'सरकारों को सौर और पवन बुनियादी ढांचे में अधिक निवेश करना चाहिए।', es: 'Los gobiernos deben invertir más en infraestructura solar y eólica.' }
        ]
      },
      {
        title: 'Sensible Recommendations with "Should"',
        structure: 'Subject + should / shouldn\'t + Base Verb',
        rule: 'Use "should" to recommend actionable daily green habits.',
        examples: [
          { en: 'You should bring your own cloth shopping bags to the supermarket.', hi: 'आपको सुपरमार्केट में अपने कपड़े के शॉपिंग बैग ले जाने चाहिए।', es: 'Deberías llevar tus propias bolsas de tela al supermercado.' },
          { en: 'We shouldn\'t leave electrical appliances on standby mode all night.', hi: 'हमें रात भर बिजली के उपकरणों को स्टैंडबाय मोड पर नहीं छोड़ना चाहिए।', es: 'No deberíamos dejar los electrodomésticos en modo de espera toda la noche.' }
        ]
      },
      {
        title: 'Practical Necessity with "Have to / Need to"',
        structure: 'Subject + have to / need to + Base Verb',
        rule: 'Use "have to" or "need to" to describe practical steps required to preserve nature.',
        examples: [
          { en: 'We have to sort our plastic, paper, and food scraps every week.', hi: 'हमें हर हफ्ते अपने प्लास्टिक, कागज और खाने के कचरे को अलग करना होगा।', es: 'Tenemos que separar el plástico, papel y restos de comida cada semana.' },
          { en: 'Cities need to build better bicycle lanes to reduce car traffic.', hi: 'कार यातायात को कम करने के लिए शहरों को बेहतर साइकिल लेन बनाने की आवश्यकता है।', es: 'Las ciudades necesitan construir mejores carriles para bicicletas.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'We must to protect the environment.',
      cor: 'We must protect the environment.',
      exp: 'Modal "must" is followed directly by the base verb "protect" without "to".',
      hi: '"Must" के बाद "to" नहीं आता: "We must protect...".',
      es: 'Después de "must" va el verbo base sin "to".'
    },
    {
      inc: 'People should recycling more bottles.',
      cor: 'People should recycle more bottles.',
      exp: 'Modal "should" requires the base form "recycle", not the -ing form.',
      hi: '"Should" के बाद क्रिया का मूल रूप "recycle" आता है।',
      es: 'Después de "should" se usa el verbo base "recycle".'
    },
    {
      inc: 'We have to reduce the pollution of air.',
      cor: 'We have to reduce air pollution.',
      exp: 'Use the compound noun "air pollution" rather than the wordy "pollution of air".',
      hi: '"Air pollution" अधिक प्राकृतिक अंग्रेजी है।',
      es: 'Se dice "air pollution" en lugar de "pollution of air".'
    },
    {
      inc: 'Plastic is very dangerous for ocean wildlife.',
      cor: 'Plastic is very dangerous to / for ocean wildlife.',
      exp: 'Say "dangerous to wildlife" or "harmful to wildlife".',
      hi: '"Harmful to wildlife" या "dangerous for ocean wildlife" का प्रयोग करें।',
      es: 'Se dice "dangerous to/for wildlife".'
    },
    {
      inc: 'Everyone have to save electricity.',
      cor: 'Everyone has to save electricity.',
      exp: 'Indefinite pronoun "everyone" is grammatically singular and takes "has to".',
      hi: '"Everyone" एकवचन है, इसलिए "has to" आता है।',
      es: '"Everyone" es singular; se usa "has to".'
    }
  ],
  dialogues: [
    {
      title: 'Discussing Green Habits at Home',
      context: 'Liam and Tara discuss sorting household waste and saving electricity in their apartment.',
      charA: { name: 'Liam', av: '👨🏼', role: 'Roommate' },
      charB: { name: 'Tara', av: '👩🏾', role: 'Roommate' },
      turns: [
        { spk: 'Liam', text: 'Tara, I bought three separate color-coded bins for our kitchen so we can sort our rubbish properly.', hi: 'तारा, मैंने अपनी रसोई के लिए तीन अलग-अलग रंगीन डिब्बे खरीदे हैं ताकि हम अपने कचरे को ठीक से अलग कर सकें।', es: 'Tara, compré tres cubos separados para la cocina para separar la basura correctamente.' },
        { spk: 'Tara', text: 'That is wonderful, Liam! So blue is for paper, green is for organic food compost, and yellow is for plastic and metal cans?', hi: 'यह बहुत बढ़िया है, लियाम! तो नीला कागज के लिए है, हरा जैविक खाद के लिए है, और पीला प्लास्टिक और धातु के डिब्बों के लिए है?', es: '¡Qué bien, Liam! ¿El azul es para papel, verde para compost y amarillo para plástico y latas?' },
        { spk: 'Liam', text: 'Exactly. We should also try to turn off the lights and air conditioner whenever we leave a room.', hi: 'बिल्कुल। जब भी हम किसी कमरे से बाहर निकलें तो हमें बत्तियां और एयर कंडीशनर भी बंद करने का प्रयास करना चाहिए।', es: 'Exactamente. También deberíamos apagar las luces y el aire al salir de una habitación.' },
        { spk: 'Tara', text: 'I agree. Small daily habits make a big difference for the environment and lower our utility bills too!', hi: 'मैं सहमत हूँ। छोटी-छोटी दैनिक आदतें पर्यावरण के लिए बड़ा अंतर लाती हैं और हमारे बिजली-पानी के बिल भी कम करती हैं!', es: 'De acuerdo. ¡Los pequeños hábitos diarios marcan una gran diferencia y bajan las facturas!' }
      ]
    },
    {
      title: 'Community Tree Planting Campaign',
      context: 'Maya and Vikram volunteer for a local park reforestation initiative on World Environment Day.',
      charA: { name: 'Maya', av: '👩🏻', role: 'Volunteer' },
      charB: { name: 'Vikram', av: '👨🏽', role: 'Organizer' },
      turns: [
        { spk: 'Maya', text: 'Vikram, how many native trees are we planting in the municipal park today?', hi: 'विक्रम, आज हम नगरपालिका पार्क में कितने देशी पेड़ लगा रहे हैं?', es: 'Vikram, ¿cuántos árboles nativos vamos a plantar hoy en el parque municipal?' },
        { spk: 'Vikram', text: 'Our volunteer team aims to plant over two hundred oak and pine saplings by 3 PM.', hi: 'हमारी स्वयंसेवी टीम का लक्ष्य दोपहर 3 बजे तक दो सौ से अधिक ओक और पाइन के पौधे लगाना है।', es: 'Nuestro equipo tiene como objetivo plantar más de doscientos retoños para las 3 PM.' },
        { spk: 'Maya', text: 'That is inspiring! Planting trees absorbs carbon dioxide and creates safe habitats for local birds.', hi: 'यह बहुत प्रेरणादायक है! पेड़ लगाने से कार्बन डाइऑक्साइड अवशोषित होती है और स्थानीय पक्षियों के लिए सुरक्षित आवास बनता है।', es: '¡Es inspirador! Plantar árboles absorbe dióxido de carbono y crea hábitats para las aves.' },
        { spk: 'Vikram', text: 'Yes, we must take concrete local action if we want to protect our planet for future generations.', hi: 'हाँ, यदि हम भावी पीढ़ियों के लिए अपने ग्रह की रक्षा करना चाहते हैं तो हमें ठोस स्थानीय कार्रवाई करनी होगी।', es: 'Sí, debemos tomar medidas locales concretas para proteger nuestro planeta para las futuras generaciones.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_a2_9_132_p01',
      type: 'multiple_choice',
      prompt: 'Select the correct sentence expressing environmental necessity:',
      options: [
        { id: '1', text: 'We must protect our oceans from plastic waste.', isCorrect: true },
        { id: '2', text: 'We must to protect our oceans from plastic waste.', isCorrect: false },
        { id: '3', text: 'We must protecting our oceans from plastic waste.', isCorrect: false },
        { id: '4', text: 'We have protect our oceans from plastic waste.', isCorrect: false }
      ],
      correctAnswer: 'We must protect our oceans from plastic waste.',
      explanation: 'Modal "must" is followed directly by the base verb "protect".'
    },
    {
      id: 'ex_a2_9_132_p02',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "Using public transit helps to reduce your carbon _____."',
      correctAnswer: 'footprint',
      explanation: 'The phrase is "carbon footprint".'
    },
    {
      id: 'ex_a2_9_132_p03',
      type: 'word_ordering',
      prompt: 'Arrange the words to form a green habit recommendation:',
      tokens: ['You', 'should', 'turn', 'off', 'the', 'tap', 'while', 'brushing'],
      correctAnswer: 'You should turn off the tap while brushing',
      explanation: 'Advice sentence on saving water.'
    },
    {
      id: 'ex_a2_9_132_p04',
      type: 'translation',
      prompt: 'Translate to English: "हमें अपने दैनिक प्लास्टिक उपयोग को कम करना चाहिए।"',
      correctAnswer: 'We should reduce our daily plastic use.',
      acceptableAnswers: [
        'We should reduce our daily plastic usage.',
        'We ought to reduce our daily plastic consumption.'
      ],
      explanation: '"Reduce our daily plastic use".'
    },
    {
      id: 'ex_a2_9_132_p05',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence: "Everyone have to sort their recyclable waste."',
      correctAnswer: 'Everyone has to sort their recyclable waste.',
      explanation: '"Everyone" takes singular "has to".'
    },
    {
      id: 'ex_a2_9_132_p06',
      type: 'listening',
      prompt: 'Listen to the environmental presentation and select the primary benefit of solar energy:',
      audioText: 'Solar energy is completely renewable and clean. By installing rooftop panels, we generate electricity without releasing harmful greenhouse gases.',
      options: [
        { id: '1', text: 'It generates clean electricity without greenhouse gases', isCorrect: true },
        { id: '2', text: 'It uses expensive fossil fuels constantly', isCorrect: false },
        { id: '3', text: 'It pollutes fresh drinking water sources', isCorrect: false },
        { id: '4', text: 'It only works during heavy winter snow', isCorrect: false }
      ],
      correctAnswer: 'It generates clean electricity without greenhouse gases',
      explanation: 'The speaker states solar produces clean electricity without greenhouse gases.'
    },
    {
      id: 'ex_a2_9_132_p07',
      type: 'listen_and_type',
      prompt: 'Listen and type the exact sentence:',
      audioText: 'We should protect our natural environment.',
      correctAnswer: 'We should protect our natural environment.',
      explanation: 'Type the sentence accurately.'
    },
    {
      id: 'ex_a2_9_132_p08',
      type: 'speaking',
      prompt: 'Read aloud clearly: "We must reduce single-use plastics and switch to renewable energy sources for a sustainable future."',
      targetText: 'We must reduce single-use plastics and switch to renewable energy sources for a sustainable future.',
      explanation: 'Speak clearly with inspirational, confident pacing.'
    },
    {
      id: 'ex_a2_9_132_p09',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nTeacher: "What can students do to help the planet?"\nStudent: "We can _____ our food containers and water bottles instead of throwing them away."',
      options: [
        { id: '1', text: 'reuse', isCorrect: true },
        { id: '2', text: 'to reuse', isCorrect: false },
        { id: '3', text: 'reusing', isCorrect: false },
        { id: '4', text: 'reused', isCorrect: false }
      ],
      correctAnswer: 'reuse',
      explanation: 'Modal "can + base verb (reuse)".'
    },
    {
      id: 'ex_a2_9_132_p10',
      type: 'multiple_choice',
      prompt: 'What does "biodegradable" mean?',
      options: [
        { id: '1', text: 'Capable of being decomposed naturally by bacteria without causing pollution.', isCorrect: true },
        { id: '2', text: 'Made from synthetic radioactive metals.', isCorrect: false },
        { id: '3', text: 'Unsafe for human handling.', isCorrect: false },
        { id: '4', text: 'Unable to dissolve in water for centuries.', isCorrect: false }
      ],
      correctAnswer: 'Capable of being decomposed naturally by bacteria without causing pollution.',
      explanation: 'Biodegradable substances break down naturally.'
    },
    {
      id: 'ex_a2_9_132_p11',
      type: 'match_pairs',
      prompt: 'Match each environmental term with its definition:',
      options: [
        { id: '1', text: 'recycle → [convert waste into reusable material]' },
        { id: '2', text: 'compost → [decayed organic material used as fertilizer]' },
        { id: '3', text: 'solar power → [energy derived from sunlight]' },
        { id: '4', text: 'pollution → [harmful substances released into nature]' }
      ],
      correctAnswer: 'matched',
      explanation: 'Environmental vocabulary pairings.'
    },
    {
      id: 'ex_a2_9_132_p12',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Wind and solar are clean, _____ (renew) energy sources."',
      correctAnswer: 'renewable',
      explanation: '"Renewable" is the adjective.'
    },
    {
      id: 'ex_a2_9_132_p13',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['We', 'must', 'protect', 'endangered', 'wildlife', 'and', 'their', 'habitats'],
      correctAnswer: 'We must protect endangered wildlife and their habitats',
      explanation: 'Modal declarative sentence.'
    },
    {
      id: 'ex_a2_9_132_p14',
      type: 'translation',
      prompt: 'Translate to English: "सौर ऊर्जा एक स्वच्छ और टिकाऊ ऊर्जा स्रोत है।"',
      correctAnswer: 'Solar energy is a clean and sustainable energy source.',
      acceptableAnswers: ['Solar power is a clean and sustainable energy source.'],
      explanation: '"Solar energy is a clean and sustainable energy source".'
    },
    {
      id: 'ex_a2_9_132_p15',
      type: 'multiple_choice',
      prompt: 'Select the grammatically correct sentence:',
      options: [
        { id: '1', text: 'Cities should build more parks to improve air quality.', isCorrect: true },
        { id: '2', text: 'Cities should to build more parks.', isCorrect: false },
        { id: '3', text: 'Cities must building more parks.', isCorrect: false },
        { id: '4', text: 'Cities have building parks.', isCorrect: false }
      ],
      correctAnswer: 'Cities should build more parks to improve air quality.',
      explanation: 'Modal "should + base verb (build)".'
    }
  ],
  review: [
    {
      id: 'ex_a2_9_132_r01',
      type: 'multiple_choice',
      prompt: 'Choose the correct sentence:',
      options: [
        { id: '1', text: 'Everyone should do their part to reduce waste.', isCorrect: true },
        { id: '2', text: 'Everyone should to do their part to reduce waste.', isCorrect: false },
        { id: '3', text: 'Everyone should doing their part to reduce waste.', isCorrect: false },
        { id: '4', text: 'Everyone must to do their part.', isCorrect: false }
      ],
      correctAnswer: 'Everyone should do their part to reduce waste.',
      explanation: 'Modal "should + base verb".'
    },
    {
      id: 'ex_a2_9_132_r02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Always remember to _____ off the lights when leaving a room."',
      correctAnswer: 'switch',
      acceptableAnswers: ['turn'],
      explanation: '"Switch off" or "turn off".'
    },
    {
      id: 'ex_a2_9_132_r03',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['We', 'can', 'compost', 'vegetable', 'peels', 'in', 'the', 'garden'],
      correctAnswer: 'We can compost vegetable peels in the garden',
      explanation: 'Modal ability sentence.'
    },
    {
      id: 'ex_a2_9_132_r04',
      type: 'translation',
      prompt: 'Translate to English: "प्लास्टिक प्रदूषण समुद्री जीवों को नुकसान पहुंचाता है।"',
      correctAnswer: 'Plastic pollution harms marine life.',
      acceptableAnswers: [
        'Plastic pollution damages marine life.',
        'Plastic pollution harms ocean wildlife.'
      ],
      explanation: '"Plastic pollution harms marine life".'
    },
    {
      id: 'ex_a2_9_132_r05',
      type: 'error_correction',
      prompt: 'Correct the error: "We must to save water during drought."',
      correctAnswer: 'We must save water during drought.',
      acceptableAnswers: ['We must save water during a drought.'],
      explanation: 'Remove "to" after the modal "must".'
    }
  ],
  assessment: [
    {
      id: 'ex_a2_9_132_a01',
      type: 'multiple_choice',
      prompt: 'Which statement accurately expresses collective ecological responsibility?',
      options: [
        { id: '1', text: 'We must conserve natural resources for the sake of future generations.', isCorrect: true },
        { id: '2', text: 'We must to conserve natural resources for future generations.', isCorrect: false },
        { id: '3', text: 'We should conserving resources always.', isCorrect: false },
        { id: '4', text: 'Everyone have to pollute less.', isCorrect: false }
      ],
      correctAnswer: 'We must conserve natural resources for the sake of future generations.',
      explanation: 'Grammatically flawless modal obligation sentence.'
    },
    {
      id: 'ex_a2_9_132_a02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "We must eliminate single-use _____ (plastic) bags from grocery stores."',
      correctAnswer: 'plastic',
      explanation: '"Single-use plastic bags".'
    },
    {
      id: 'ex_a2_9_132_a03',
      type: 'translation',
      prompt: 'Translate to English: "हमें अपने ग्रह की रक्षा के लिए मिलकर काम करना चाहिए।"',
      correctAnswer: 'We should work together to protect our planet.',
      acceptableAnswers: [
        'We must work together to protect our planet.',
        'We ought to work together to protect our planet.'
      ],
      explanation: '"Work together to protect our planet".'
    },
    {
      id: 'ex_a2_9_132_a04',
      type: 'speaking',
      prompt: 'Read aloud clearly: "By sorting our recycling and choosing renewable solar energy, we can significantly reduce our carbon footprint."',
      targetText: 'By sorting our recycling and choosing renewable solar energy, we can significantly reduce our carbon footprint.',
      explanation: 'Speak clearly with smooth rhythm and confident delivery.'
    },
    {
      id: 'ex_a2_9_132_a05',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['Solar', 'energy', 'is', 'clean', 'and', 'completely', 'renewable'],
      correctAnswer: 'Solar energy is clean and completely renewable',
      explanation: 'Predicate adjective descriptive sentence.'
    }
  ]
};
