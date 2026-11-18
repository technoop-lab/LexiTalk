import { LessonConfigA2 } from './unit9_builder_helper';

// =========================================================================
// LESSON 127: Travel Disruptions, Flight Delays & Lost Luggage Solutions
// =========================================================================
export const LESSON_127_CONFIG: LessonConfigA2 = {
  num: 127,
  title: 'Travel Disruptions, Flight Delays & Lost Luggage Solutions',
  icon: '🧳',
  estMin: 25,
  objTitle: 'Handling Travel Emergencies, Flight Delays & Lost Property Claims',
  objDesc: 'Learn to explain travel disruptions, negotiate rebooking with airline agents, report lost baggage at airport service desks, and combine Past Continuous and Past Simple in crisis narratives.',
  objHi: 'यात्रा में व्यवधान, उड़ानों में देरी, खोए हुए सामान की रिपोर्ट और पास्ट कंटीन्यूअस व पास्ट सिंपल का उपयोग करके समस्याओं का समाधान करना सीखें।',
  objEs: 'Explicar contratiempos de viaje, retrasos de vuelos, reclamos de equipaje perdido y combinar el pasado continuo y simple en emergencias.',
  canDo: [
    'I can report delayed or cancelled flights at an airline customer service desk.',
    'I can file a lost property or missing luggage claim with specific descriptions.',
    'I can use "while + Past Continuous" with "Past Simple" to narrate what happened when disruptions occurred.',
    'I can ask for rebooking options, meal vouchers, or hotel compensation politely.'
  ],
  canDoHi: [
    'मैं एयरलाइन ग्राहक सेवा डेस्क पर उड़ान में देरी या रद्द होने की रिपोर्ट कर सकता हूँ।',
    'मैं सामान खो जाने पर बैग के रंग और विशेषताओं का विवरण देकर शिकायत दर्ज करा सकता हूँ।',
    'मैं घटनाओं का वर्णन करने के लिए "while + Past Continuous" और "Past Simple" का सही संयोजन कर सकता हूँ।',
    'मैं रीबुकिंग, भोजन वाउचर या होटल मुआवजे के लिए विनम्रतापूर्वक अनुरोध कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo informar sobre vuelos retrasados o cancelados en el mostrador.',
    'Puedo presentar un reclamo por equipaje perdido describiendo mis pertenencias.',
    'Puedo combinar el pasado continuo con el pasado simple para narrar incidentes.',
    'Puedo solicitar opciones de cambio de vuelo o compensación con cortesía.'
  ],
  vocab: [
    { w: 'disruption', p: '/dɪsˈrʌpʃn/', m: 'disturbance or problems which interrupt an event, activity, or process', hi: 'व्यवधान / रुकावट', es: 'interrupción / contratiempo', fr: 'perturbation', de: 'Störung / Unterbrechung', pt: 'interrupção / transtorno', zh: '中断 / 混乱', ar: 'تعطيل / اضطراب', ja: '混乱 / 運行障害', ru: 'сбой / нарушение', ex: 'Severe snowstorms caused major disruptions across all European airports.', exHi: 'भारी बर्फबारी के कारण सभी यूरोपीय हवाई अड्डों पर बड़ा व्यवधान उत्पन्न हुआ।', exEs: 'Las tormentas de nieve causaron grandes interrupciones en los aeropuertos.', ic: '⚠️' },
    { w: 'delayed', p: '/dɪˈleɪd/', m: 'late or slow; postponed beyond the planned time', hi: 'देरी से / विलंबित', es: 'retrasado / demorado', fr: 'retardé', de: 'verspätet', pt: 'atrasado', zh: '延误的', ar: 'متأخر', ja: '遅延した', ru: 'задержанный', ex: 'Our connection flight to Frankfurt was delayed by four hours.', exHi: 'फ्रैंकफर्ट के लिए हमारी कनेक्टिंग फ्लाइट चार घंटे लेट थी।', exEs: 'Nuestro vuelo de conexión a Fráncfort se retrasó cuatro horas.', ic: '🕒' },
    { w: 'cancelled', p: '/ˈkænsld/', m: 'abandoned or called off; not taking place', hi: 'रद्द किया गया / निरस्त', es: 'cancelado', fr: 'annulé', de: 'annulliert / gestrichen', pt: 'cancelado', zh: '已取消的', ar: 'ملغى', ja: '欠航した / キャンセルされた', ru: 'отмененный', ex: 'Passengers were distressed when the last train was cancelled.', exHi: 'जब आखिरी ट्रेन रद्द कर दी गई तो यात्री परेशान हो गए।', exEs: 'Los pasajeros se angustiaron cuando se canceló el último tren.', ic: '❌' },
    { w: 'luggage', p: '/ˈlʌɡɪdʒ/', m: 'suitcases or other bags in which to pack personal belongings for traveling', hi: 'सामान / बैगेज', es: 'equipaje', fr: 'bagages', de: 'Gepäck', pt: 'bagagem', zh: '行李', ar: 'أمتعة', ja: '手荷物', ru: 'багаж', ex: 'Did your checked luggage arrive on the carousel?', exHi: 'क्या आपका चेक-इन सामान कन्वेयर बेल्ट पर आया?', exEs: '¿Llegó tu equipaje facturado a la cinta transportadora?', ic: '🧳' },
    { w: 'carousel', p: '/ˌkærəˈsel/', m: 'a continuous moving conveyor belt from which passengers collect luggage', hi: 'सामान बेल्ट / कन्वेयर बेल्ट', es: 'cinta de equipajes', fr: 'tapis à bagages', de: 'Gepäckband', pt: 'esteira de bagagens', zh: '行李传送带', ar: 'سير الأمتعة', ja: '手荷物受取所コンベア', ru: 'лента выдачи багажа', ex: 'We waited near carousel four for almost forty minutes.', exHi: 'हमने लगभग चालीस मिनट तक बेल्ट नंबर चार के पास इंतजार किया।', exEs: 'Esperamos cerca de la cinta cuatro durante casi cuarenta minutos.', ic: '🔄' },
    { w: 'compensation', p: '/ˌkɒmpenˈseɪʃn/', m: 'something, typically money, awarded to someone in recognition of loss or suffering', hi: 'मुआवजा / क्षतिपूर्ति', es: 'compensación / indemnización', fr: 'indemnisation', de: 'Entschädigung', pt: 'compensação / indenização', zh: '补偿 / 赔偿', ar: 'تعويض', ja: '補償 / 賠償', ru: 'компенсация', ex: 'Airlines must provide statutory compensation for overnight flight delays.', exHi: 'रात भर की उड़ान में देरी के लिए एयरलाइनों को वैधानिक मुआवजा देना चाहिए।', exEs: 'Las aerolíneas deben proporcionar compensación legal por retrasos.', ic: '💰' },
    { w: 'voucher', p: '/ˈvaʊtʃə/', m: 'a document that can be exchanged for goods or services like meals or hotels', hi: 'वाउचर / कूपन', es: 'cupón / bono', fr: 'bon / coupon', de: 'Gutschein', pt: 'cupom / voucher', zh: '代金券 / 凭证', ar: 'قسيمة', ja: '引換券 / バウチャー', ru: 'ваучер / купон', ex: 'The airline agent handed us dinner vouchers for the terminal restaurant.', exHi: 'एयरलाइन एजेंट ने हमें टर्मिनल रेस्तरां के लिए डिनर वाउचर सौंपे।', exEs: 'El agente de la aerolínea nos dio vales de cena para el restaurante.', ic: '🎟️' },
    { w: 'rebook', p: '/ˌriːˈbʊk/', m: 'book a ticket or reservation again, often at a different time', hi: 'दोबारा बुक करना / नई बुकिंग करना', es: 'volver a reservar / cambiar vuelo', fr: 'réserver à nouveau', de: 'umbuchen', pt: 'remarcar / reservar novamente', zh: '重新预订 / 改签', ar: 'إعادة الحجز', ja: '再予約する / 便を変更する', ru: 'перебронировать', ex: 'The customer service desk rebooked us onto a direct morning flight.', exHi: 'ग्राहक सेवा डेस्क ने हमें सुबह की सीधी उड़ान पर फिर से बुक कर दिया।', exEs: 'El mostrador de atención nos cambió a un vuelo directo por la mañana.', ic: '🔁' },
    { w: 'boarding pass', p: '/ˈbɔːdɪŋ pɑːs/', m: 'a pass that gives an airline passenger permission to board an aircraft', hi: 'बोर्डिंग पास / विमान प्रवेश पत्र', es: 'tarjeta de embarque', fr: 'carte d\'embarquement', de: 'Bordkarte', pt: 'cartão de embarque', zh: '登机牌', ar: 'بطاقة صعود الطائرة', ja: '搭乗券', ru: 'посадочный талон', ex: 'Please have your passport and boarding pass ready at gate 12.', exHi: 'कृपया गेट 12 पर अपना पासपोर्ट और बोर्डिंग पास तैयार रखें।', exEs: 'Por favor, tenga listos su pasaporte y tarjeta de embarque.', ic: '🎫' },
    { w: 'claim', p: '/kleɪm/', m: 'a formal request for compensation or retrieval of property', hi: 'दावा / दावा प्रपत्र', es: 'reclamo / solicitud', fr: 'réclamation', de: 'Reklamation / Anspruch', pt: 'reclamação / sinistro', zh: '索赔 / 申领', ar: 'مطالبة / شكوى', ja: '請求 / 申告', ru: 'заявление / претензия', ex: 'We must file a missing property claim before leaving the terminal.', exHi: 'हमें टर्मिनल छोड़ने से पहले गुमशुदा सामान का दावा दायर करना होगा।', exEs: 'Debemos presentar un reclamo de propiedad perdida antes de salir.', ic: '📋' },
    { w: 'receipt', p: '/rɪˈsiːt/', m: 'a written acknowledgment that a specified article or sum of money has been received', hi: 'रसीद / पावती', es: 'recibo / comprobante', fr: 'reçu / quittance', de: 'Quittung / Beleg', pt: 'recibo / comprovante', zh: '收据', ar: 'إيصال', ja: '領収書 / レシート', ru: 'квитанция / чек', ex: 'Keep your baggage claim tag receipt safely in your wallet.', exHi: 'अपनी बैगेज क्लेम टैग रसीद को अपने बटुए में सुरक्षित रखें।', exEs: 'Guarda el recibo de tu etiqueta de equipaje en tu billetera.', ic: '🧾' },
    { w: 'suitcase', p: '/ˈsuːtkeɪs/', m: 'a case with a handle and a hinged lid, used for carrying clothes and other belongings', hi: 'सूटकेस / पेटी', es: 'maleta / valija', fr: 'valise', de: 'Koffer', pt: 'mala de viagem', zh: '行李箱', ar: 'حقيبة سفر', ja: 'スーツケース', ru: 'чемодан', ex: 'My missing suitcase is hard-shell, dark blue, with four wheels.', exHi: 'मेरा खोया हुआ सूटकेस हार्ड-शेल, गहरे नीले रंग का और चार पहियों वाला है।', exEs: 'Mi maleta perdida es rígida, azul oscuro, con cuatro ruedas.', ic: '🧳' },
    { w: 'refund', p: '/ˈriːfʌnd/', m: 'a repayment of a sum of money, typically to a dissatisfied customer', hi: 'रिफंड / पैसे वापस मिलना', es: 'reembolso / devolución', fr: 'remboursement', de: 'Rückerstattung', pt: 'reembolso', zh: '退款', ar: 'استرداد المبلغ', ja: '払い戻し / 返金', ru: 'возврат денег', ex: 'Are passengers entitled to a full cash refund if a flight is cancelled?', exHi: 'क्या उड़ान रद्द होने पर यात्री पूर्ण नकद रिफंड के हकदार हैं?', exEs: '¿Tienen los pasajeros derecho a un reembolso total si se cancela el vuelo?', ic: '💵' },
    { w: 'overnight', p: '/ˌəʊvəˈnaɪt/', m: 'done, occurring, or continuing during the night', hi: 'रात भर / रात का', es: 'nocturno / durante la noche', fr: 'de nuit / pour la nuit', de: 'über Nacht', pt: 'noturno / de um dia para o outro', zh: '过夜的', ar: 'طوال الليل', ja: '一晩中 / 宿泊を伴う', ru: 'с ночевкой / ночной', ex: 'The airline provided an overnight hotel room and free shuttle bus.', exHi: 'एयरलाइन ने रात भर के लिए होटल का कमरा और मुफ्त शटल बस प्रदान की।', exEs: 'La aerolínea proporcionó una habitación de hotel para la noche.', ic: '🏨' },
    { w: 'shuttle', p: '/ˈʃʌtl/', m: 'a vehicle that travels regularly between two points, such as an airport and hotel', hi: 'शटल बस / सीधी बस सेवा', es: 'autobús de enlace / lanzadera', fr: 'navette', de: 'Shuttlebus / Zubringer', pt: 'ônibus de traslado / transfer', zh: '穿梭巴士', ar: 'حافلة مكوكية', ja: 'シャトルバス', ru: 'трансфер / шаттл', ex: 'The hotel shuttle departs from terminal 2 every fifteen minutes.', exHi: 'होटल की शटल बस हर पंद्रह मिनट में टर्मिनल 2 से रवाना होती है।', exEs: 'El autobús del hotel sale de la terminal 2 cada quince minutos.', ic: '🚌' },
    { w: 'unattended', p: '/ˌʌnəˈtendɪd/', m: 'not being watched or taken care of', hi: 'लावारिस / बिना देखरेख के', es: 'desatendido / sin vigilancia', fr: 'sans surveillance', de: 'unbeaufsichtigt', pt: 'desacompanhado / sem vigilância', zh: '无人看管的', ar: 'متروك دون مراقبة', ja: '放置された / 目を離した', ru: 'оставленный без присмотра', ex: 'Never leave your luggage unattended anywhere in the airport.', exHi: 'हवाई अड्डे पर कहीं भी अपना सामान लावारिस न छोड़ें।', exEs: 'Nunca deje su equipaje desatendido en el aeropuerto.', ic: '🚫' },
    { w: 'announcement', p: '/əˈnaʊnsmənt/', m: 'a public and formal statement about an event or instruction', hi: 'घोषणा / लाउडस्पीकर पर सूचना', es: 'anuncio por megafonía', fr: 'annonce', de: 'Durchsage / Ankündigung', pt: 'anúncio / aviso sonoro', zh: '广播公告', ar: 'إعلان', ja: 'アナウンス / 告知', ru: 'объявление', ex: 'Listen carefully to the gate announcement for boarding changes.', exHi: 'बोर्डिंग में बदलाव के लिए गेट की घोषणा को ध्यान से सुनें।', exEs: 'Escuche atentamente el anuncio de la puerta de embarque.', ic: '📢' },
    { w: 'tag', p: '/tæɡ/', m: 'a label attached to luggage showing ownership and destination barcode', hi: 'बैगेज टैग / पहचान पर्ची', es: 'etiqueta de equipaje', fr: 'étiquette', de: 'Gepäckanhänger', pt: 'etiqueta', zh: '行李标签', ar: 'بطاقة تعريف الأمتعة', ja: '荷物タグ', ru: 'багажная бирка', ex: 'Ensure your phone number is written on the luggage tag.', exHi: 'सुनिश्चित करें कि बैगेज टैग पर आपका फोन नंबर लिखा है।', exEs: 'Asegúrese de que su número de teléfono esté en la etiqueta.', ic: '🏷️' },
    { w: 'frustrated', p: '/frʌˈstreɪtɪd/', m: 'feeling distressed or annoyed as a result of being unable to achieve something', hi: 'हताश / परेशान', es: 'frustrado / molesto', fr: 'frustré', de: 'frustriert', pt: 'frustrado', zh: '沮丧的', ar: 'محبط', ja: 'いらだった / 失望した', ru: 'разочарованный', ex: 'Passengers felt frustrated when the flight was delayed a third time.', exHi: 'जब उड़ान में तीसरी बार देरी हुई तो यात्री हताश महसूस करने लगे।', exEs: 'Los pasajeros se sintieron frustrados tras el tercer retraso.', ic: '😤' },
    { w: 'assistance', p: '/əˈsɪstəns/', m: 'the provision of money, resources, or information to help someone', hi: 'सहायता / मदद', es: 'asistencia / ayuda', fr: 'assistance / aide', de: 'Hilfe / Unterstützung', pt: 'assistência / auxílio', zh: '协助 / 援助', ar: 'مساعدة', ja: '援助 / 手助け', ru: 'помощь / содействие', ex: 'Please contact the help desk if you require special assistance.', exHi: 'यदि आपको विशेष सहायता की आवश्यकता है तो कृपया हेल्प डेस्क से संपर्क करें।', exEs: 'Comuníquese con el mostrador si necesita asistencia especial.', ic: '💁' }
  ],
  chunks: [
    { phrase: 'While I was waiting..., my flight was cancelled', meaning: 'narrating a background action interrupted by a disruption', hi: 'जब मैं इंतजार कर रहा था, तभी मेरी उड़ान रद्द हो गई', es: 'Mientras esperaba..., mi vuelo fue cancelado', fr: 'Pendant que j\'attendais..., mon vol a été annulé', de: 'Während ich wartete..., wurde mein Flug storniert', pt: 'Enquanto eu esperava..., meu voo foi cancelado', zh: '当我在等待时，我的航班被取消了', ar: 'بينما كنت أنتظر...، تم إلغاء رحلتي', ja: '待っている間に、私の便が欠航になりました', ru: 'Пока я ждал..., мой рейс отменили', note: 'Combines Past Continuous with Past Simple.', ic: '⏱️' },
    { phrase: 'file a lost baggage report', meaning: 'officially register a missing luggage claim', hi: 'खोए हुए सामान की आधिकारिक शिकायत दर्ज करना', es: 'presentar un informe de equipaje perdido', fr: 'déclarer un bagage perdu', de: 'einen Verlustbericht für Gepäck aufgeben', pt: 'fazer um relatório de bagagem perdida', zh: '申报行李遗失报告', ar: 'تقديم بلاغ عن فقدان الأمتعة', ja: '紛失手荷物の申告をする', ru: 'оформить заявление об утере багажа', note: 'Essential airport survival phrase.', ic: '📝' },
    { phrase: 'are we entitled to compensation?', meaning: 'asking about statutory passenger rights', hi: 'क्या हम मुआवजे के हकदार हैं?', es: '¿tenemos derecho a compensación?', fr: 'avons-nous droit à une indemnisation ?', de: 'haben wir Anspruch auf Entschädigung?', pt: 'temos direito a indenização?', zh: '我们有权获得赔偿吗？', ar: 'هل يحق لنا الحصول على تعويض؟', ja: '私たちは補償を受けられますか？', ru: 'имеем ли мы право на компенсацию?', note: 'Formal polite customer inquiry.', ic: '⚖️' },
    { phrase: 'rebook onto the next available flight', meaning: 'reserve a seat on the earliest alternative plane', hi: 'अगली उपलब्ध उड़ान में बुकिंग करवाना', es: 'reprogramar en el próximo vuelo disponible', fr: 'réserver sur le prochain vol disponible', de: 'auf den nächsten verfügbaren Flug umbuchen', pt: 'remarcar para o próximo voo disponível', zh: '改签至下一个可用航班', ar: 'إعادة الحجز على أقرب رحلة متاحة', ja: '次の利用可能な便に変更する', ru: 'перебронировать на следующий доступный рейс', note: 'Standard airline service request.', ic: '🔁' },
    { phrase: 'miss my connection', meaning: 'fail to arrive in time for the next leg of a journey', hi: 'कनेक्टिंग फ्लाइट या ट्रेन छूट जाना', es: 'perder mi conexión', fr: 'rater ma correspondance', de: 'meinen Anschluss verpassen', pt: 'perder minha conexão', zh: '错过我的转机/换乘', ar: 'تفوتني رحلة المتابعة', ja: '乗り継ぎに乗り遅れる', ru: 'опоздать на пересадку', note: 'Crucial travel emergency expression.', ic: '🏃' },
    { phrase: 'provide overnight accommodation', meaning: 'give a hotel room when delayed till morning', hi: 'रात भर ठहरने की व्यवस्था प्रदान करना', es: 'proporcionar alojamiento nocturno', fr: 'fournir un hébergement pour la nuit', de: 'eine Übernachtungsmöglichkeit bereitstellen', pt: 'fornecer acomodação noturna', zh: '提供过夜住宿', ar: 'توفير إقامة ليلية', ja: '宿泊先を提供する', ru: 'предоставить ночлег в гостинице', note: 'Airline obligation under passenger charter.', ic: '🏨' },
    { phrase: 'locate the missing items', meaning: 'find the lost articles or luggage', hi: 'गुमशुदा सामान का पता लगाना', es: 'localizar los artículos perdidos', fr: 'localiser les objets perdus', de: 'die vermissten Gegenstände ausfindig machen', pt: 'localizar os itens perdidos', zh: '找到丢失的物品', ar: 'تحديد موقع الأغراض المفقودة', ja: '紛失物を見つけ出す', ru: 'найти пропавшие вещи', note: 'Service agent assurance.', ic: '🔍' },
    { phrase: 'deliver directly to my hotel', meaning: 'transport the found baggage to the traveler\'s lodging', hi: 'सीधे मेरे होटल में पहुंचाना', es: 'entregar directamente en mi hotel', fr: 'livrer directement à mon hôtel', de: 'direkt an mein Hotel liefern', pt: 'entregar diretamente no meu hotel', zh: '直接送到我的酒店', ar: 'توصيلها مباشرة إلى فندقي', ja: '私のホテルまで直接届ける', ru: 'доставить прямо в мой отель', note: 'Luggage resolution detail.', ic: '🚚' }
  ],
  grammar: {
    title: 'Narrating Travel Crises: Past Continuous Interrupted by Past Simple',
    concept: 'Using "While + Subject + was/were + V-ing" (ongoing background situation) alongside "Past Simple" (the sudden event or disruption).',
    patterns: [
      {
        title: 'Background Situation (Past Continuous) + Sudden Disruption (Past Simple)',
        structure: 'While + Subject + was/were + Verb-ing, Subject + Past Simple Verb',
        rule: 'The longer ongoing action takes the Past Continuous (was/were + -ing); the interrupting event takes the Past Simple.',
        examples: [
          { en: 'While we were boarding the plane, the gate agent announced a technical delay.', hi: 'जब हम विमान में चढ़ रहे थे, तभी गेट एजेंट ने तकनीकी देरी की घोषणा की।', es: 'Mientras estábamos embarcando en el avión, el agente anunció un retraso técnico.' },
          { en: 'While I was waiting at the carousel, I realized my suitcase was missing.', hi: 'जब मैं कन्वेयर बेल्ट पर इंतजार कर रहा था, तब मुझे एहसास हुआ कि मेरा सूटकेस गायब था।', es: 'Mientras esperaba en la cinta, me di cuenta de que mi maleta no estaba.' }
        ]
      },
      {
        title: 'Polite Requests for Assistance & Vouchers',
        structure: 'Could you please + rebook / provide / arrange + [Object]?',
        rule: 'Use modal "Could you please..." to maintain composure and assert passenger rights politely.',
        examples: [
          { en: 'Could you please provide a meal voucher while we wait?', hi: 'क्या आप हमारे इंतजार के दौरान भोजन वाउचर प्रदान कर सकते हैं?', es: '¿Podría proporcionar un vale de comida mientras esperamos?' },
          { en: 'Could you please rebook us onto tomorrow morning\'s earliest flight?', hi: 'क्या आप कृपया हमें कल सुबह की सबसे पहली उड़ान में फिर से बुक कर सकते हैं?', es: '¿Podría cambiarnos al vuelo más temprano de mañana por la mañana?' }
        ]
      },
      {
        title: 'Describing Missing Luggage Accurately',
        structure: 'My bag is a [Size] [Color] [Material/Type] suitcase with [Feature].',
        rule: 'Order: size/type + color + distinctive characteristics (brand, barcode tag, wheels).',
        examples: [
          { en: 'It is a large dark-blue hard-shell suitcase with an orange ribbon.', hi: 'यह नारंगी रिबन वाला एक बड़ा गहरा नीला हार्ड-शेल सूटकेस है।', es: 'Es una maleta rígida grande, azul oscuro, con una cinta naranja.' },
          { en: 'It has a black luggage tag with my name written in bold letters.', hi: 'इस पर एक काला बैगेज टैग है जिस पर मेरा नाम बड़े अक्षरों में लिखा है।', es: 'Tiene una etiqueta negra con mi nombre escrito en letras grandes.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'While I waited at gate, the flight was leaving.',
      cor: 'While I was waiting at the gate, the flight left.',
      exp: 'The background continuous action requires "was waiting", and the finished event takes Past Simple "left".',
      hi: 'जारी कार्य के लिए "was waiting" और अचानक हुई घटना के लिए "left" का प्रयोग करें।',
      es: 'La acción de fondo lleva "was waiting" y el suceso puntual "left".'
    },
    {
      inc: 'The airline didn\'t give me no meal voucher.',
      cor: 'The airline didn\'t give me any meal voucher.',
      exp: 'Avoid double negatives in English. Use "any", not "no", with negative verbs.',
      hi: 'नकारात्मक वाक्यों में डबल नेगेटिव से बचें: "didn\'t give me any voucher".',
      es: 'Evite la doble negación: use "didn\'t give me any".'
    },
    {
      inc: 'Where can I file lost luggage?',
      cor: 'Where can I file a lost luggage report?',
      exp: 'The complete collocation is "file a lost luggage report" or "file a claim".',
      hi: 'सही मुहावरा "file a lost luggage report" या "claim" है।',
      es: 'La frase completa es "file a lost luggage report".'
    },
    {
      inc: 'My luggage is lose.',
      cor: 'My luggage is lost. / My luggage is missing.',
      exp: 'Use the past participle adjective "lost" or "missing", not the verb "lose".',
      hi: 'गुमशुदा सामान के लिए "lost" या "missing" का प्रयोग करें।',
      es: 'Se dice "My luggage is lost" o "missing".'
    },
    {
      inc: 'Could you rebook me on next flight please?',
      cor: 'Could you please rebook me onto the next flight?',
      exp: 'Include the preposition "onto" or "on the" with the definite article.',
      hi: '"Rebook me onto the next flight" कहें।',
      es: 'Se dice "rebook me onto the next flight".'
    }
  ],
  dialogues: [
    {
      title: 'Reporting a Missed Connection at the Help Desk',
      context: 'Dev speaks with an airport customer service agent after a delayed arrival in Frankfurt.',
      charA: { name: 'Dev', av: '👨🏾', role: 'Traveler' },
      charB: { name: 'Agent', av: '👩🏼', role: 'Airline Agent' },
      turns: [
        { spk: 'Dev', text: 'Good evening. Our flight from Mumbai arrived two hours late, and I have missed my connecting flight to London.', hi: 'शुभ संध्या। मुंबई से हमारी उड़ान दो घंटे देर से आई, और मेरी लंदन की कनेक्टिंग फ्लाइट छूट गई है।', es: 'Buenas noches. Nuestro vuelo de Mumbai llegó dos horas tarde y he perdido mi conexión a Londres.' },
        { spk: 'Agent', text: 'I am very sorry for the disruption, sir. Let me check the schedule. There is a morning flight at 7:30 AM.', hi: 'व्यवधान के लिए मुझे बहुत खेद है, महोदय। मुझे समय सारिणी देखने दीजिए। सुबह 7:30 बजे एक उड़ान है।', es: 'Lamento mucho el inconveniente, señor. Permítame revisar. Hay un vuelo matutino a las 7:30 AM.' },
        { spk: 'Dev', text: 'Could you please rebook me onto that flight and arrange overnight hotel accommodation?', hi: 'क्या आप कृपया मुझे उस उड़ान में फिर से बुक कर सकते हैं और रात भर होटल में ठहरने की व्यवस्था कर सकते हैं?', es: '¿Podría cambiarme a ese vuelo y organizar el alojamiento en un hotel para la noche?' },
        { spk: 'Agent', text: 'Certainly. Here is your new boarding pass, a hotel voucher for the airport hotel, and dinner coupons.', hi: 'निश्चित रूप से। यह रहा आपका नया बोर्डिंग पास, एयरपोर्ट होटल का वाउचर और डिनर कूपन।', es: 'Por supuesto. Aquí tiene su nueva tarjeta de embarque, un vale de hotel y cupones para la cena.' }
      ]
    },
    {
      title: 'Filing a Missing Luggage Report',
      context: 'Maria files a baggage claim at the airport baggage service desk.',
      charA: { name: 'Maria', av: '👩🏻', role: 'Passenger' },
      charB: { name: 'Officer', av: '👨🏽', role: 'Baggage Officer' },
      turns: [
        { spk: 'Maria', text: 'Excuse me, I waited at carousel three for an hour, but my checked suitcase never appeared.', hi: 'माफ कीजिए, मैंने बेल्ट नंबर तीन पर एक घंटे इंतजार किया, लेकिन मेरा चेक-इन सूटकेस नहीं आया।', es: 'Disculpe, esperé en la cinta tres durante una hora, pero mi maleta nunca apareció.' },
        { spk: 'Officer', text: 'We will file a missing baggage report right away. Do you have your baggage claim receipt?', hi: 'हम तुरंत गुमशुदा सामान की रिपोर्ट दर्ज करेंगे। क्या आपके पास अपनी बैगेज क्लेम रसीद है?', es: 'Abriremos un reporte de equipaje perdido de inmediato. ¿Tiene su recibo de reclamo de equipaje?' },
        { spk: 'Maria', text: 'Yes, here is the barcode tag. The suitcase is a medium black hard-shell bag with a bright yellow handle.', hi: 'हाँ, यह रहा बारकोड टैग। सूटकेस एक मध्यम काले रंग का हार्ड-शेल बैग है जिसमें चमकदार पीला हैंडल है।', es: 'Sí, aquí está la etiqueta. La maleta es rígida mediana, negra, con un asa amarilla brillante.' },
        { spk: 'Officer', text: 'Thank you. We have located it in Paris. We will deliver it directly to your hotel tomorrow morning.', hi: 'धन्यवाद। हमने पेरिस में इसका पता लगा लिया है। हम इसे कल सुबह सीधे आपके होटल में डिलीवर कर देंगे।', es: 'Gracias. La hemos localizado en París. Se la entregaremos directamente en su hotel mañana por la mañana.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_a2_9_127_p01',
      type: 'multiple_choice',
      prompt: 'Select the correct tense combination: "While we _____ in line, the airline announced the cancellation."',
      options: [
        { id: '1', text: 'were waiting', isCorrect: true },
        { id: '2', text: 'waited', isCorrect: false },
        { id: '3', text: 'are waiting', isCorrect: false },
        { id: '4', text: 'have waited', isCorrect: false }
      ],
      correctAnswer: 'were waiting',
      explanation: '"While + Past Continuous (were waiting)" describes the background ongoing action.'
    },
    {
      id: 'ex_a2_9_127_p02',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "Because our flight was delayed overnight, the airline provided a hotel _____."',
      correctAnswer: 'voucher',
      acceptableAnswers: ['room'],
      explanation: 'A hotel "voucher" or "room" is provided for overnight delays.'
    },
    {
      id: 'ex_a2_9_127_p03',
      type: 'word_ordering',
      prompt: 'Arrange the words to form a polite customer service request:',
      tokens: ['Could', 'you', 'please', 'rebook', 'me', 'onto', 'tomorrow', 'flight'],
      correctAnswer: 'Could you please rebook me onto tomorrow flight',
      explanation: 'Polite rebooking request formula.'
    },
    {
      id: 'ex_a2_9_127_p04',
      type: 'translation',
      prompt: 'Translate to English: "क्या हम भोजन वाउचर के हकदार हैं?"',
      correctAnswer: 'Are we entitled to meal vouchers?',
      acceptableAnswers: ['Are we entitled to a meal voucher?'],
      explanation: '"Entitled to" means legally or officially eligible for.'
    },
    {
      id: 'ex_a2_9_127_p05',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence: "My luggage is lose since yesterday."',
      correctAnswer: 'My luggage has been lost since yesterday.',
      acceptableAnswers: ['My luggage is lost since yesterday.'],
      explanation: 'Use "lost" (adjective/participle), not "lose".'
    },
    {
      id: 'ex_a2_9_127_p06',
      type: 'listening',
      prompt: 'Listen to the airport announcement and determine the resolution for passengers:',
      audioText: 'Attention passengers on flight BA 249: Due to bad weather, your flight is cancelled. Please proceed to desk 4 for hotel vouchers and rebooking.',
      options: [
        { id: '1', text: 'Go to desk 4 for hotel vouchers and rebooking', isCorrect: true },
        { id: '2', text: 'Board the plane immediately at gate 12', isCorrect: false },
        { id: '3', text: 'Collect luggage from carousel one', isCorrect: false },
        { id: '4', text: 'Wait two hours inside the aircraft', isCorrect: false }
      ],
      correctAnswer: 'Go to desk 4 for hotel vouchers and rebooking',
      explanation: 'The announcement instructs passengers to go to desk 4 for vouchers and rebooking.'
    },
    {
      id: 'ex_a2_9_127_p07',
      type: 'listen_and_type',
      prompt: 'Listen and type the exact sentence:',
      audioText: 'Our connecting flight was delayed by three hours.',
      correctAnswer: 'Our connecting flight was delayed by three hours.',
      explanation: 'Type the sentence with correct spelling and punctuation.'
    },
    {
      id: 'ex_a2_9_127_p08',
      type: 'speaking',
      prompt: 'Read aloud clearly: "While I was waiting at the baggage carousel, I noticed that my suitcase was damaged."',
      targetText: 'While I was waiting at the baggage carousel, I noticed that my suitcase was damaged.',
      explanation: 'Speak clearly, contrasting the continuous clause with the simple past clause.'
    },
    {
      id: 'ex_a2_9_127_p09',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nPassenger: "My bag did not arrive on the carousel."\nOfficer: "Please fill out this form so we can _____ a missing luggage claim."',
      options: [
        { id: '1', text: 'file', isCorrect: true },
        { id: '2', text: 'cancel', isCorrect: false },
        { id: '3', text: 'lose', isCorrect: false },
        { id: '4', text: 'delayed', isCorrect: false }
      ],
      correctAnswer: 'file',
      explanation: 'Collocation: "file a claim".'
    },
    {
      id: 'ex_a2_9_127_p10',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes a missing bag?',
      options: [
        { id: '1', text: 'It is a large black hard-shell suitcase with a red strap.', isCorrect: true },
        { id: '2', text: 'It is a suitcase black large with strap red.', isCorrect: false },
        { id: '3', text: 'It is a black large suitcase red ribbon have.', isCorrect: false },
        { id: '4', text: 'It was luggage black yesterday lost.', isCorrect: false }
      ],
      correctAnswer: 'It is a large black hard-shell suitcase with a red strap.',
      explanation: 'Correct adjective order and prepositional description.'
    },
    {
      id: 'ex_a2_9_127_p11',
      type: 'match_pairs',
      prompt: 'Match each airport emergency term with its explanation:',
      options: [
        { id: '1', text: 'carousel → [conveyor belt for picking up bags]' },
        { id: '2', text: 'voucher → [coupon for meal or hotel room]' },
        { id: '3', text: 'rebook → [change reservation to another flight]' },
        { id: '4', text: 'compensation → [financial repayment for delays]' }
      ],
      correctAnswer: 'matched',
      explanation: 'Key terms for airport disruptions.'
    },
    {
      id: 'ex_a2_9_127_p12',
      type: 'fill_blank',
      prompt: 'Complete the past continuous clause: "While they _____ (board) the plane, the captain made an announcement."',
      correctAnswer: 'were boarding',
      explanation: 'Plural subject "they" requires "were boarding".'
    },
    {
      id: 'ex_a2_9_127_p13',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['They', 'will', 'deliver', 'the', 'luggage', 'to', 'my', 'hotel'],
      correctAnswer: 'They will deliver the luggage to my hotel',
      explanation: 'Future simple sentence with direct object and prepositional phrase.'
    },
    {
      id: 'ex_a2_9_127_p14',
      type: 'translation',
      prompt: 'Translate to English: "मेरी कनेक्टिंग फ्लाइट छूट गई है।"',
      correctAnswer: 'I have missed my connecting flight.',
      acceptableAnswers: ['I missed my connecting flight.'],
      explanation: '"Missed my connecting flight".'
    },
    {
      id: 'ex_a2_9_127_p15',
      type: 'multiple_choice',
      prompt: 'Select the grammatically correct sentence:',
      options: [
        { id: '1', text: 'The airline provided an overnight hotel room and free breakfast.', isCorrect: true },
        { id: '2', text: 'The airline provide an overnight hotel room yesterday.', isCorrect: false },
        { id: '3', text: 'The airline was provided an overnight room to we.', isCorrect: false },
        { id: '4', text: 'The airline has provide an overnight hotel.', isCorrect: false }
      ],
      correctAnswer: 'The airline provided an overnight hotel room and free breakfast.',
      explanation: 'Correct past simple declarative sentence.'
    }
  ],
  review: [
    {
      id: 'ex_a2_9_127_r01',
      type: 'multiple_choice',
      prompt: 'Choose the correct sentence:',
      options: [
        { id: '1', text: 'While I was sleeping, the flight attendant served refreshments.', isCorrect: true },
        { id: '2', text: 'While I slept, the flight attendant was serve refreshments.', isCorrect: false },
        { id: '3', text: 'While I was sleep, the flight attendant served refreshments.', isCorrect: false },
        { id: '4', text: 'While I were sleeping, the flight attendant served refreshments.', isCorrect: false }
      ],
      correctAnswer: 'While I was sleeping, the flight attendant served refreshments.',
      explanation: 'Past Continuous "was sleeping" + Past Simple "served".'
    },
    {
      id: 'ex_a2_9_127_r02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Could you please rebook us _____ the next direct flight?"',
      correctAnswer: 'onto',
      acceptableAnswers: ['on'],
      explanation: 'Rebook "onto" or "on" a flight.'
    },
    {
      id: 'ex_a2_9_127_r03',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['We', 'filed', 'a', 'missing', 'property', 'claim', 'at', 'reception'],
      correctAnswer: 'We filed a missing property claim at reception',
      explanation: 'Past Simple narrative sentence.'
    },
    {
      id: 'ex_a2_9_127_r04',
      type: 'translation',
      prompt: 'Translate to English: "हमारा सूटकेस कल सुबह तक मिल जाएगा।"',
      correctAnswer: 'Our suitcase will be found by tomorrow morning.',
      acceptableAnswers: [
        'Our suitcase will be delivered by tomorrow morning.',
        'They will find our suitcase by tomorrow morning.'
      ],
      explanation: 'Future expression for baggage resolution.'
    },
    {
      id: 'ex_a2_9_127_r05',
      type: 'error_correction',
      prompt: 'Correct the error: "While he was walked to the gate, the door closed."',
      correctAnswer: 'While he was walking to the gate, the door closed.',
      explanation: 'Use "was walking" (-ing form) after "was".'
    }
  ],
  assessment: [
    {
      id: 'ex_a2_9_127_a01',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly combines Past Continuous with Past Simple during a disruption?',
      options: [
        { id: '1', text: 'While we were driving to the airport, our tire went flat.', isCorrect: true },
        { id: '2', text: 'While we drove to airport, our tire was going flat.', isCorrect: false },
        { id: '3', text: 'While we were drive to airport, our tire went flat.', isCorrect: false },
        { id: '4', text: 'While we had driven, our tire is flat.', isCorrect: false }
      ],
      correctAnswer: 'While we were driving to the airport, our tire went flat.',
      explanation: '"While we were driving" (ongoing) + "tire went flat" (interruption).'
    },
    {
      id: 'ex_a2_9_127_a02',
      type: 'fill_blank',
      prompt: 'Complete with the past form of "miss": "Because the train was delayed, I _____ my flight."',
      correctAnswer: 'missed',
      explanation: 'Past simple action "missed".'
    },
    {
      id: 'ex_a2_9_127_a03',
      type: 'translation',
      prompt: 'Translate to English: "कृपया क्या आप मुझे एक नया बोर्डिंग पास दे सकते हैं?"',
      correctAnswer: 'Could you please give me a new boarding pass?',
      acceptableAnswers: ['Could you please issue a new boarding pass?'],
      explanation: 'Polite request with "Could you please".'
    },
    {
      id: 'ex_a2_9_127_a04',
      type: 'speaking',
      prompt: 'Read aloud clearly: "The airline provided meal vouchers and rebooked all passengers onto the morning flight."',
      targetText: 'The airline provided meal vouchers and rebooked all passengers onto the morning flight.',
      explanation: 'Speak clearly with accurate stress and pronunciation.'
    },
    {
      id: 'ex_a2_9_127_a05',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['Never', 'leave', 'your', 'baggage', 'unattended', 'at', 'the', 'airport'],
      correctAnswer: 'Never leave your baggage unattended at the airport',
      explanation: 'Imperative safety warning syntax.'
    }
  ]
};

// =========================================================================
// LESSON 128: Housing, Renting, Landlords & Household Maintenance
// =========================================================================
export const LESSON_128_CONFIG: LessonConfigA2 = {
  num: 128,
  title: 'Housing, Renting, Landlords & Household Maintenance',
  icon: '🏡',
  estMin: 25,
  objTitle: 'Managing Tenancy, Requesting Household Repairs & Landlord Communication',
  objDesc: 'Learn to describe apartment features, understand lease terms, report maintenance issues (plumbing, heating, electricity), and politely request landlord repairs.',
  objHi: 'अपार्टमेंट किराए पर लेने, लीज की शर्तों, घरेलू समस्याओं (प्लंबिंग, बिजली) और मकान मालिक से मरम्मत का अनुरोध करने के लिए अंग्रेजी सीखें।',
  objEs: 'Describir viviendas, entender contratos de alquiler, reportar problemas de mantenimiento y solicitar reparaciones al propietario.',
  canDo: [
    'I can describe apartment features, amenities, and lease conditions.',
    'I can report household maintenance problems (leaking faucet, broken heating, electrical fault).',
    'I can write or say polite repair requests using "There is a problem with..." and "Could you send someone to fix...?"',
    'I can discuss rent payments, security deposits, and notice periods.'
  ],
  canDoHi: [
    'मैं अपार्टमेंट की विशेषताओं, सुविधाओं और लीज की शर्तों का वर्णन कर सकता हूँ।',
    'मैं घर की खराबी (पानी का रिसाव, हीटर खराब होना, बिजली की समस्या) की रिपोर्ट कर सकता हूँ।',
    'मैं मकान मालिक को विनम्रतापूर्वक मरम्मत संदेश ("There is a problem with...") लिख या बोल सकता हूँ।',
    'मैं किराए के भुगतान, सुरक्षा जमा (deposit) और नोटिस अवधि पर चर्चा कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir características de un apartamento y condiciones del contrato.',
    'Puedo reportar problemas domésticos como fugas o calefacción rota.',
    'Puedo solicitar reparaciones con fórmulas amables y claras.',
    'Puedo hablar de pagos, fianza y plazos de aviso.'
  ],
  vocab: [
    { w: 'landlord', p: '/ˈlændlɔːd/', m: 'a person who rents out land, a building, or an accommodation', hi: 'मकान मालिक', es: 'propietario / casero', fr: 'propriétaire', de: 'Vermieter', pt: 'proprietário / senhorio', zh: '房东', ar: 'مالك العقار', ja: '大家 / 家主', ru: 'арендодатель / домовладелец', ex: 'We must notify our landlord in writing before making any alterations.', exHi: 'कोई भी बदलाव करने से पहले हमें अपने मकान मालिक को लिखित रूप में सूचित करना होगा।', exEs: 'Debemos notificar a nuestro casero por escrito antes de hacer cambios.', ic: '🔑' },
    { w: 'tenant', p: '/ˈtenənt/', m: 'a person who occupies land or property rented from a landlord', hi: 'किरायेदार', es: 'inquilino / arrendatario', fr: 'locataire', de: 'Mieter', pt: 'inquilino', zh: '租客 / 房客', ar: 'مستأجر', ja: '借家人 / テナント', ru: 'арендатор / жилец', ex: 'The previous tenant kept the apartment in immaculate condition.', exHi: 'पिछले किरायेदार ने अपार्टमेंट को बेदाग स्थिति में रखा था।', exEs: 'El inquilino anterior mantuvo el apartamento en perfectas condiciones.', ic: '👤' },
    { w: 'lease', p: '/liːs/', m: 'a contract by which one party conveys land, property, or services to another for a specified time', hi: 'लीज / किराया अनुबंध', es: 'contrato de arrendamiento', fr: 'bail', de: 'Mietvertrag', pt: 'contrato de locação', zh: '租约', ar: 'عقد إيجار', ja: '賃貸契約', ru: 'договор аренды', ex: 'Our residential lease is valid for twelve calendar months.', exHi: 'हमारा आवासीय लीज बारह महीनों के लिए वैध है।', exEs: 'Nuestro contrato de arrendamiento residencial es válido por doce meses.', ic: '📄' },
    { w: 'deposit', p: '/dɪˈpɒzɪt/', m: 'a sum payable as a first installment on the purchase of something or as a pledge for return', hi: 'सुरक्षा जमा राशि / सिक्योरिटी डिपॉजिट', es: 'fianza / depósito', fr: 'dépôt de garantie / caution', de: 'Kaution', pt: 'depósito caução', zh: '押金', ar: 'عربون / تأمين', ja: '敷金 / 保証金', ru: 'залог / депозит', ex: 'Tenants must pay two months\' rent as a refundable security deposit.', exHi: 'किरायेदारों को रिफंडेबल सिक्योरिटी डिपॉजिट के रूप में दो महीने का किराया देना होगा।', exEs: 'Los inquilinos deben pagar dos meses de alquiler como fianza.', ic: '💵' },
    { w: 'maintenance', p: '/ˈmeɪntənəns/', m: 'the process of preserving a condition or situation or the state of being preserved', hi: 'रखरखाव / मेंटेनेंस', es: 'mantenimiento', fr: 'entretien / maintenance', de: 'Instandhaltung / Wartung', pt: 'manutenção', zh: '维护 / 保养', ar: 'صيانة', ja: '維持 / メンテナンス', ru: 'техническое обслуживание', ex: 'The building management fee covers general elevator maintenance.', exHi: 'भवन प्रबंधन शुल्क में लिफ्ट का सामान्य रखरखाव शामिल है।', exEs: 'La cuota del edificio cubre el mantenimiento general del ascensor.', ic: '🛠️' },
    { w: 'plumbing', p: '/ˈplʌmɪŋ/', m: 'the system of pipes, tanks, fittings, and other apparatus required for the water supply', hi: 'नलसाजी / प्लंबिंग', es: 'fontanería / plomería', fr: 'plomberie', de: 'Sanitäranlagen / Klempnerei', pt: 'encanamento / canalização', zh: '管道系统', ar: 'سباكة', ja: '配管設備', ru: 'водопровод / сантехника', ex: 'There is a severe plumbing issue under the kitchen sink.', exHi: 'रसोई के सिंक के नीचे प्लंबिंग की गंभीर समस्या है।', exEs: 'Hay un grave problema de plomería debajo del fregadero de la cocina.', ic: '🚰' },
    { w: 'leak', p: '/liːk/', m: 'an intentional or unintentional hole or crack through which liquid or gas escapes', hi: 'रिसाव / टपकना', es: 'goteo / fuga', fr: 'fuite', de: 'Leck / undichte Stelle', pt: 'vazamento / fuga', zh: '漏水 / 渗漏', ar: 'تسريب', ja: '水漏れ / 漏れ', ru: 'утечка / протечка', ex: 'The bathroom faucet has a constant leak that wastes clean water.', exHi: 'बाथरूम के नल से लगातार रिसाव हो रहा है जिससे पानी बर्बाद हो रहा है।', exEs: 'El grifo del baño tiene un goteo constante que desperdicia agua.', ic: '💧' },
    { w: 'heating', p: '/ˈhiːtɪŋ/', m: 'equipment or a system used to warm a building', hi: 'हीटिंग / घर गर्म रखने की प्रणाली', es: 'calefacción', fr: 'chauffage', de: 'Heizung', pt: 'aquecimento', zh: '供暖系统', ar: 'تدفئة', ja: '暖房', ru: 'отопление', ex: 'The central heating system stopped working during the cold snap.', exHi: 'कड़ाके की ठंड के दौरान सेंट्रल हीटिंग सिस्टम ने काम करना बंद कर दिया।', exEs: 'La calefacción central dejó de funcionar durante la ola de frío.', ic: '🔥' },
    { w: 'faucet', p: '/ˈfɔːsɪt/', m: 'a device by which a flow of liquid or gas from a pipe or container can be controlled', hi: 'नल / टोंटी', es: 'grifo', fr: 'robinet', de: 'Wasserhahn', pt: 'torneira', zh: '水龙头', ar: 'صنبور', ja: '蛇口', ru: 'кран (водопроводный)', ex: 'Could you send a plumber to fix the kitchen faucet?', exHi: 'क्या आप रसोई के नल को ठीक करने के लिए किसी प्लंबर को भेज सकते हैं?', exEs: '¿Podría enviar a un fontanero para arreglar el grifo de la cocina?', ic: '🚰' },
    { w: 'electrician', p: '/ɪˌlekˈtrɪʃn/', m: 'a person who installs and maintains electrical equipment', hi: 'इलेक्ट्रीशियन / बिजली मिस्त्री', es: 'electricista', fr: 'électricien', de: 'Elektriker', pt: 'eletricista', zh: '电工', ar: 'فني كهرباء', ja: '電気技師', ru: 'электрик', ex: 'We need an electrician to inspect the faulty power sockets.', exHi: 'खराब पावर सॉकेट की जांच के लिए हमें एक इलेक्ट्रीशियन की आवश्यकता है।', exEs: 'Necesitamos un electricista para inspeccionar los enchufes defectuosos.', ic: '⚡' },
    { w: 'plumber', p: '/ˈplʌmə/', m: 'a person who fits and repairs the pipes, fittings, and other apparatus of water supply', hi: 'प्लंबर / नलसाज', es: 'fontanero / plomero', fr: 'plombier', de: 'Klempner / Installateur', pt: 'encanador', zh: '水管工', ar: 'سباك', ja: '配管工', ru: 'сантехник', ex: 'The plumber replaced the cracked pipe in less than an hour.', exHi: 'प्लंबर ने एक घंटे से भी कम समय में टूटे हुए पाइप को बदल दिया।', exEs: 'El fontanero reemplazó la tubería rota en menos de una hora.', ic: '🔧' },
    { w: 'furnished', p: '/ˈfɜːnɪʃt/', m: 'provided with furniture and appliances', hi: 'फर्नीचर युक्त / सुसज्जित', es: 'amueblado', fr: 'meublé', de: 'möbliert', pt: 'mobiliado', zh: '带家具的', ar: 'مفروش', ja: '家具付きの', ru: 'меблированный', ex: 'We rented a fully furnished modern studio flat near the metro station.', exHi: 'हमने मेट्रो स्टेशन के पास एक पूरी तरह से सुसज्जित आधुनिक स्टूडियो फ्लैट किराए पर लिया।', exEs: 'Alquilamos un estudio moderno totalmente amueblado cerca del metro.', ic: '🛋️' },
    { w: 'amenity', p: '/əˈmiːnəti/', m: 'a desirable or useful feature or facility of a building or place', hi: 'सुविधा / सुख-सुविधा', es: 'comodidad / servicio', fr: 'équipement / commodité', de: 'Annehmlichkeit / Einrichtung', pt: 'comodidade / conveniência', zh: '便利设施', ar: 'مرفق / وسيلة راحة', ja: '設備 / アメニティ', ru: 'удобство / инфраструктура', ex: 'The residential complex includes luxury amenities such as a gym and pool.', exHi: 'आवासीय परिसर में जिम और पूल जैसी लक्जरी सुविधाएं शामिल हैं।', exEs: 'El complejo residencial incluye comodidades de lujo como gimnasio y piscina.', ic: '🏊' },
    { w: 'renovate', p: '/ˈrenəveɪt/', m: 'restore something old, especially a building, to a good state of repair', hi: 'नवीनीकरण करना / मरम्मत करके नया बनाना', es: 'renovar / reformar', fr: 'rénover', de: 'renovieren', pt: 'reformar / renovar', zh: '翻修 / 装修', ar: 'يجدد / يرمم', ja: '改装する / リノベーションする', ru: 'ремонтировать / обновлять', ex: 'The owners renovated the kitchen with modern quartz countertops.', exHi: 'मालिकों ने आधुनिक क्वार्ट्ज काउंटरटॉप्स के साथ रसोई का नवीनीकरण किया।', exEs: 'Los propietarios renovaron la cocina con encimeras modernas de cuarzo.', ic: '🔨' },
    { w: 'appliances', p: '/əˈplaɪənsɪz/', m: 'devices or pieces of equipment designed to perform a specific task, especially in the home', hi: 'घरेलू उपकरण (फ्रिज, वाशिंग मशीन)', es: 'electrodomésticos', fr: 'appareils électroménagers', de: 'Haushaltsgeräte', pt: 'eletrodomésticos', zh: '家用电器', ar: 'أجهزة منزلية', ja: '家電製品', ru: 'бытовая техника', ex: 'The rent includes brand new kitchen appliances such as a dishwasher.', exHi: 'किराए में डिशवॉशर जैसे नए रसोई उपकरण शामिल हैं।', exEs: 'El alquiler incluye electrodomésticos nuevos como lavavajillas.', ic: '🍳' },
    { w: 'utility', p: '/juːˈtɪləti/', m: 'a service such as water, gas, or electricity supplied for the public', hi: 'उपयोगिता बिल (बिजली, पानी, गैस)', es: 'servicio público / factura de suministros', fr: 'charges / services publics', de: 'Nebenkosten / Versorgung', pt: 'serviços públicos / contas', zh: '公共事业费(水电煤)', ar: 'مرافق عامة', ja: '公共料金 (電気・ガス・水道)', ru: 'коммунальные услуги', ex: 'Are water and electricity utilities included in the monthly rent?', exHi: 'क्या मासिक किराए में पानी और बिजली के बिल शामिल हैं?', exEs: '¿Están los suministros de agua y luz incluidos en el alquiler?', ic: '💡' },
    { w: 'balcony', p: '/ˈbælkəni/', m: 'a platform enclosed by a wall or bars on the outside of a building', hi: 'बालकनी / छज्जा', es: 'balcón', fr: 'balcon', de: 'Balkon', pt: 'varanda / sacada', zh: '阳台', ar: 'شرفة', ja: 'ベランダ / バルコニー', ru: 'балкон', ex: 'Our living room opens onto a spacious sunny balcony.', exHi: 'हमारा लिविंग रूम एक विशाल धूप वाली बालकनी में खुलता है।', exEs: 'Nuestra sala de estar da a un amplio balcón soleado.', ic: '🪴' },
    { w: 'spacious', p: '/ˈspeɪʃəs/', m: 'having ample space; large in area', hi: 'विशाल / खुला-खुला', es: 'espacioso / amplio', fr: 'spacieux', de: 'geräumig', pt: 'espaçoso / amplo', zh: '宽敞的', ar: 'واسع / فسيح', ja: '広々とした', ru: 'просторный', ex: 'The master bedroom is bright, spacious, and quiet.', exHi: 'मास्टर बेडरूम उज्ज्वल, विशाल और शांत है।', exEs: 'El dormitorio principal es luminoso, espacioso y tranquilo.', ic: '🛏️' },
    { w: 'notice', p: '/ˈnəʊtɪs/', m: 'notification or warning of something, especially termination of tenancy', hi: 'सूचना / नोटिस अवधि', es: 'aviso previo', fr: 'préavis', de: 'Kündigungsfrist / Benachrichtigung', pt: 'aviso prévio', zh: '解约通知', ar: 'إشعار مسبق', ja: '事前通知 / 予告', ru: 'уведомление / предупреждение', ex: 'Tenants must provide thirty days\' written notice before moving out.', exHi: 'किरायेदारों को बाहर जाने से पहले तीस दिनों का लिखित नोटिस देना होगा।', exEs: 'Los inquilinos deben dar un preaviso por escrito de treinta días.', ic: '📝' },
    { w: 'inspection', p: '/ɪnˈspekʃn/', m: 'careful examination or scrutiny of premises', hi: 'निरीक्षण / जांच', es: 'inspección / revisión', fr: 'inspection / état des lieux', de: 'Besichtigung / Inspektion', pt: 'inspeção / vistoria', zh: '房屋检查', ar: 'معاينة / تفتيش', ja: '点検 / 立ち会い検査', ru: 'осмотр / инспекция', ex: 'The landlord scheduled an annual property inspection for next Tuesday.', exHi: 'मकान मालिक ने अगले मंगलवार के लिए वार्षिक संपत्ति निरीक्षण निर्धारित किया।', exEs: 'El propietario programó una inspección anual para el próximo martes.', ic: '🔍' }
  ],
  chunks: [
    { phrase: 'There is a problem with the...', meaning: 'stating a household breakdown or defect', hi: '...के साथ एक समस्या है', es: 'Hay un problema con...', fr: 'Il y a un problème avec...', de: 'Es gibt ein Problem mit...', pt: 'Há um problema com...', zh: '...出了问题', ar: 'هناك مشكلة في...', ja: '〜に問題があります', ru: 'Есть проблема с...', note: 'Standard formula for reporting maintenance issues.', ic: '⚠️' },
    { phrase: 'Could you please send someone to fix...?', meaning: 'polite request for landlord repair services', hi: 'क्या आप कृपया मरम्मत के लिए किसी को भेज सकते हैं?', es: '¿Podría enviar a alguien para arreglar...?', fr: 'Pourriez-vous envoyer quelqu\'un pour réparer... ?', de: 'Könnten Sie bitte jemanden schicken, um... zu reparieren?', pt: 'Você poderia por favor enviar alguém para consertar...?', zh: '你能派人来修...吗？', ar: 'هل يمكنك إرسال شخص لإصلاح...؟', ja: '〜を修理する人を派遣していただけますか？', ru: 'Не могли бы вы прислать мастера, чтобы починить...?', note: 'Direct actionable request to landlords.', ic: '🔧' },
    { phrase: 'is making a strange noise', meaning: 'emitting abnormal sounds indicating a fault', hi: 'अजीब सी आवाज निकाल रहा है', es: 'está haciendo un ruido extraño', fr: 'fait un bruit bizarre', de: 'macht ein seltsames Geräusch', pt: 'está fazendo um barulho estranho', zh: '正在发出奇怪的声音', ar: 'يصدر صوتاً غريباً', ja: '変な音がしている', ru: 'издает странный шум', note: 'Used for malfunctioning appliances or pipes.', ic: '🔊' },
    { phrase: 'the hot water isn\'t working', meaning: 'the water heater is inactive or broken', hi: 'गर्म पानी नहीं आ रहा है', es: 'el agua caliente no funciona', fr: 'l\'eau chaude ne fonctionne pas', de: 'das Warmwasser funktioniert nicht', pt: 'a água quente não está funcionando', zh: '热水不能用', ar: 'الماء الساخن لا يعمل', ja: 'お湯が出ない', ru: 'горячая вода не работает', note: 'Emergency household maintenance issue.', ic: '🚿' },
    { phrase: 'give thirty days\' notice', meaning: 'inform landlord 30 days prior to ending lease', hi: 'तीस दिन का नोटिस देना', es: 'dar un aviso de treinta días', fr: 'donner un préavis de trente jours', de: 'eine 30-tägige Frist einhalten', pt: 'dar aviso prévio de trinta dias', zh: '提前三十天发出通知', ar: 'تقديم إشعار قبل ثلاثين يوماً', ja: '30日前に退去予告をする', ru: 'предупредить за тридцать дней', note: 'Standard tenancy contract requirement.', ic: '📅' },
    { phrase: 'utilities are included in the rent', meaning: 'bills for water/electricity are covered by rent amount', hi: 'किराए में बिजली-पानी के बिल शामिल हैं', es: 'los suministros están incluidos en el alquiler', fr: 'les charges sont comprises dans le loyer', de: 'Nebenkosten sind in der Miete enthalten', pt: 'as contas estão inclusas no aluguel', zh: '水电费包含在房租内', ar: 'المرافق مشمولة في الإيجار', ja: '光熱費は家賃に含まれている', ru: 'коммунальные услуги включены в аренду', note: 'Important lease negotiation chunk.', ic: '💡' },
    { phrase: 'get my security deposit back', meaning: 'receive refund of guarantee funds upon moving out', hi: 'अपनी सुरक्षा जमा राशि वापस पाना', es: 'recuperar mi fianza', fr: 'récupérer ma caution', de: 'meine Kaution zurückbekommen', pt: 'receber meu depósito de volta', zh: '拿回我的押金', ar: 'استرداد مبلغ التأمين', ja: '敷金を返金してもらう', ru: 'вернуть свой залог', note: 'Crucial tenant protection concept.', ic: '💰' },
    { phrase: 'as soon as possible', meaning: 'with the highest urgency', hi: 'जितनी जल्दी हो सके', es: 'tan pronto como sea posible', fr: 'dès que possible', de: 'so schnell wie möglich', pt: 'o mais rápido possível', zh: '尽快', ar: 'في أقرب وقت ممكن', ja: 'できるだけ早く', ru: 'как можно скорее', note: 'Used when requesting urgent plumbing/electrical repairs.', ic: '⚡' }
  ],
  grammar: {
    title: 'Reporting Household Faults & Making Polite Requests to Landlords',
    concept: 'Using existential sentences ("There is a leak / The heating is broken") and modal requests ("Could you please send an electrician...?").',
    patterns: [
      {
        title: 'Reporting Faults: "There is a problem with..." / "is broken"',
        structure: 'There is a problem with + [Item] | The [Item] + is broken / leaking / not working',
        rule: 'Use present state descriptions to report household defects clearly.',
        examples: [
          { en: 'There is a problem with the bathroom shower head.', hi: 'बाथरूम के शॉवर हेड में एक समस्या है।', es: 'Hay un problema con el cabezal de la ducha del baño.' },
          { en: 'The air conditioning unit is making a loud buzzing noise.', hi: 'एयर कंडीशनिंग यूनिट से तेज़ भनभनाहट की आवाज़ आ रही है।', es: 'El aire acondicionado está haciendo un zumbido fuerte.' }
        ]
      },
      {
        title: 'Polite Repair Requests: "Could you send someone to...?"',
        structure: 'Could you please send + [Tradesperson/someone] + to + Base Verb + [Item]?',
        rule: 'Standard polite business formula for contacting landlords or property managers.',
        examples: [
          { en: 'Could you please send a plumber to inspect the water pipe?', hi: 'क्या आप कृपया पानी के पाइप की जांच के लिए किसी प्लंबर को भेज सकते हैं?', es: '¿Podría enviar a un fontanero para revisar la tubería?' },
          { en: 'Could you arrange for an electrician to visit tomorrow morning?', hi: 'क्या आप कल सुबह किसी इलेक्ट्रीशियन के आने की व्यवस्था कर सकते हैं?', es: '¿Podría coordinar la visita de un electricista mañana por la mañana?' }
        ]
      },
      {
        title: 'Lease & Tenancy Rules: "Must / Have to + Base Verb"',
        structure: 'Tenants + must / have to + [Action] (pay rent by 1st / give 30 days\' notice)',
        rule: 'Use "must" or "have to" to state contractual tenancy obligations.',
        examples: [
          { en: 'Tenants have to pay rent by the first day of each month.', hi: 'किरायेदारों को हर महीने की पहली तारीख तक किराया देना होगा।', es: 'Los inquilinos deben pagar el alquiler el primer día de cada mes.' },
          { en: 'You must provide written notice before ending the lease.', hi: 'लीज समाप्त करने से पहले आपको लिखित नोटिस देना होगा।', es: 'Debe dar aviso por escrito antes de rescindir el contrato.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'The water tap is making a leak.',
      cor: 'The water tap is leaking. / There is a leak in the tap.',
      exp: 'Use the verb "is leaking" or the noun phrase "there is a leak".',
      hi: '"The tap is leaking" कहें।',
      es: 'Se dice "The tap is leaking" o "There is a leak".'
    },
    {
      inc: 'Could you send someone for fix the heating?',
      cor: 'Could you send someone to fix the heating?',
      exp: 'Use the infinitive of purpose "to fix", not "for fix".',
      hi: 'उद्देश्य बताने के लिए "to fix" का प्रयोग करें, "for fix" गलत है।',
      es: 'Se usa el infinitivo con "to": "to fix", no "for fix".'
    },
    {
      inc: 'The landlord didn\'t gave me the deposit back.',
      cor: 'The landlord didn\'t give me the deposit back.',
      exp: 'After the auxiliary "didn\'t", use the base form "give", not "gave".',
      hi: '"Didn\'t" के बाद base verb "give" का प्रयोग करें।',
      es: 'Después de "didn\'t" se usa el verbo base "give".'
    },
    {
      inc: 'Are the bills include in rent?',
      cor: 'Are the bills included in the rent?',
      exp: 'Passive construction requires past participle "included" and definite article "the rent".',
      hi: '"Are bills included in the rent?" सही रूप है।',
      es: 'Se dice "Are bills included in the rent?".'
    },
    {
      inc: 'There are a big problem with the electrical sockets.',
      cor: 'There is a big problem with the electrical sockets.',
      exp: 'The subject noun is singular ("a big problem"), so use "There is", not "There are".',
      hi: 'एक समस्या के लिए "There is a big problem" आता है।',
      es: '"A big problem" es singular, por lo tanto se usa "There is".'
    }
  ],
  dialogues: [
    {
      title: 'Reporting a Plumbing Emergency to the Landlord',
      context: 'Kiran calls her landlord, Mr. Henderson, regarding a burst pipe under the sink.',
      charA: { name: 'Kiran', av: '👩🏾', role: 'Tenant' },
      charB: { name: 'Mr. Henderson', av: '👨🏼', role: 'Landlord' },
      turns: [
        { spk: 'Kiran', text: 'Hello Mr. Henderson. I am calling because there is an urgent problem with the plumbing in apartment 4B.', hi: 'नमस्ते मिस्टर हेंडरसन। मैं इसलिए फोन कर रही हूँ क्योंकि अपार्टमेंट 4B में प्लंबिंग की एक गंभीर समस्या है।', es: 'Hola Sr. Henderson. Llamo porque hay un problema urgente con la plomería en el apartamento 4B.' },
        { spk: 'Mr. Henderson', text: 'Oh dear! What has happened, Kiran?', hi: 'अरे! क्या हुआ है, किरण?', es: '¡Vaya! ¿Qué ha sucedido, Kiran?' },
        { spk: 'Kiran', text: 'The pipe under the kitchen sink is leaking heavily and flooding the floor. Could you please send an emergency plumber as soon as possible?', hi: 'रसोई के सिंक के नीचे का पाइप बहुत तेजी से रिस रहा है और फर्श पर पानी भर रहा है। क्या आप कृपया जल्द से जल्द किसी आपातकालीन प्लंबर को भेज सकते हैं?', es: 'La tubería debajo del fregadero tiene una fuga fuerte e inunda el piso. ¿Podría enviar a un plomero de urgencia?' },
        { spk: 'Mr. Henderson', text: 'Please turn off the main water valve under the sink right now. I will dispatch our building plumber immediately.', hi: 'कृपया अभी सिंक के नीचे स्थित मुख्य पानी के वाल्व को बंद कर दें। मैं तुरंत हमारे भवन प्लंबर को भेजता हूँ।', es: 'Por favor, cierre la llave de paso del agua debajo del fregadero ahora mismo. Enviaré a nuestro fontanero de inmediato.' }
      ]
    },
    {
      title: 'Discussing Lease Renewal & Deposit',
      context: 'Rahul visits the leasing office to ask about renewing his one-year rental contract.',
      charA: { name: 'Rahul', av: '👨🏽', role: 'Tenant' },
      charB: { name: 'Agent', av: '👩🏻', role: 'Leasing Agent' },
      turns: [
        { spk: 'Rahul', text: 'Good morning. My twelve-month lease expires at the end of next month, and I would love to renew it for another year.', hi: 'सुप्रभात। मेरा बारह महीने का लीज अगले महीने के अंत में समाप्त हो रहा है, और मैं इसे एक और साल के लिए नवीनीकृत करना चाहूँगा।', es: 'Buenos días. Mi contrato de doce meses vence a finales del próximo mes y me gustaría renovarlo por otro año.' },
        { spk: 'Agent', text: 'We are delighted to hear that! You have been a wonderful tenant. The monthly rent will remain the same.', hi: 'यह सुनकर हमें बहुत खुशी हुई! आप एक बेहतरीन किरायेदार रहे हैं। मासिक किराया पहले जैसा ही रहेगा।', es: '¡Nos alegra mucho escucharlo! Ha sido un inquilino maravilloso. El alquiler mensual se mantendrá igual.' },
        { spk: 'Rahul', text: 'That is great news. Does my original security deposit carry over to the new lease contract?', hi: 'यह बहुत अच्छी खबर है। क्या मेरी मूल सुरक्षा जमा राशि नए लीज अनुबंध में आगे बढ़ जाएगी?', es: 'Esa es una gran noticia. ¿Mi fianza original se transfiere al nuevo contrato de arrendamiento?' },
        { spk: 'Agent', text: 'Yes, exactly. Your deposit remains protected in the government deposit scheme until you decide to move out.', hi: 'हाँ, बिल्कुल। आपकी जमा राशि तब तक सरकारी योजना में सुरक्षित रहती है जब तक आप बाहर जाने का फैसला नहीं करते।', es: 'Sí, exactamente. Su fianza permanece protegida hasta que decida mudarse.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_a2_9_128_p01',
      type: 'multiple_choice',
      prompt: 'Select the correct phrase to report a broken appliance: "The living room air conditioning unit _____ a loud vibrating sound."',
      options: [
        { id: '1', text: 'is making', isCorrect: true },
        { id: '2', text: 'is doing', isCorrect: false },
        { id: '3', text: 'has make', isCorrect: false },
        { id: '4', text: 'makes to', isCorrect: false }
      ],
      correctAnswer: 'is making',
      explanation: 'Use "is making a sound / noise" for appliance issues.'
    },
    {
      id: 'ex_a2_9_128_p02',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct preposition: "There is a leak _____ the bathroom ceiling."',
      correctAnswer: 'in',
      explanation: 'Use "in the ceiling".'
    },
    {
      id: 'ex_a2_9_128_p03',
      type: 'word_ordering',
      prompt: 'Arrange the words to form a polite repair request:',
      tokens: ['Could', 'you', 'please', 'send', 'a', 'plumber', 'to', 'fix', 'the', 'leak'],
      correctAnswer: 'Could you please send a plumber to fix the leak',
      explanation: 'Formula: Could you please send [person] to fix [item].'
    },
    {
      id: 'ex_a2_9_128_p04',
      type: 'translation',
      prompt: 'Translate to English: "क्या मासिक किराए में बिजली और पानी शामिल हैं?"',
      correctAnswer: 'Are utilities included in the monthly rent?',
      acceptableAnswers: [
        'Are electricity and water included in the monthly rent?',
        'Is electricity and water included in the monthly rent?'
      ],
      explanation: '"Utilities included in the rent" is standard real estate English.'
    },
    {
      id: 'ex_a2_9_128_p05',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence: "Could you please send an electrician for fix the power socket?"',
      correctAnswer: 'Could you please send an electrician to fix the power socket?',
      explanation: 'Change "for fix" to the infinitive "to fix".'
    },
    {
      id: 'ex_a2_9_128_p06',
      type: 'listening',
      prompt: 'Listen to the tenant\'s voicemail and identify the main complaint:',
      audioText: 'Hi, this is Alan in apartment 3B. The central heating has completely stopped working, and there is no hot water in the shower.',
      options: [
        { id: '1', text: 'The heating and hot water have stopped working', isCorrect: true },
        { id: '2', text: 'The elevator is broken', isCorrect: false },
        { id: '3', text: 'The rent has increased', isCorrect: false },
        { id: '4', text: 'The front door key is lost', isCorrect: false }
      ],
      correctAnswer: 'The heating and hot water have stopped working',
      explanation: 'The tenant clearly states the central heating and shower hot water are not working.'
    },
    {
      id: 'ex_a2_9_128_p07',
      type: 'listen_and_type',
      prompt: 'Listen and type the exact sentence:',
      audioText: 'Tenants must give thirty days notice before leaving.',
      correctAnswer: 'Tenants must give thirty days notice before leaving.',
      acceptableAnswers: ["Tenants must give thirty days' notice before leaving."],
      explanation: 'Type the exact sentence.'
    },
    {
      id: 'ex_a2_9_128_p08',
      type: 'speaking',
      prompt: 'Read aloud clearly: "Could you please send a technician to inspect the air conditioning as soon as possible?"',
      targetText: 'Could you please send a technician to inspect the air conditioning as soon as possible?',
      explanation: 'Speak with clear polite intonation and proper pronunciation.'
    },
    {
      id: 'ex_a2_9_128_p09',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nTenant: "When will the repair person arrive?"\nLandlord: "The electrician _____ between 10 AM and noon tomorrow."',
      options: [
        { id: '1', text: 'will visit', isCorrect: true },
        { id: '2', text: 'visited yesterday', isCorrect: false },
        { id: '3', text: 'was visiting since', isCorrect: false },
        { id: '4', text: 'has visit', isCorrect: false }
      ],
      correctAnswer: 'will visit',
      explanation: 'Future simple "will visit" for scheduled tomorrow repair.'
    },
    {
      id: 'ex_a2_9_128_p10',
      type: 'multiple_choice',
      prompt: 'What is a "security deposit"?',
      options: [
        { id: '1', text: 'A refundable sum of money paid in advance to protect against damage.', isCorrect: true },
        { id: '2', text: 'The monthly fee for parking a car.', isCorrect: false },
        { id: '3', text: 'A tax paid to the local police department.', isCorrect: false },
        { id: '4', text: 'The cost of buying furniture for the apartment.', isCorrect: false }
      ],
      correctAnswer: 'A refundable sum of money paid in advance to protect against damage.',
      explanation: 'A security deposit is a refundable guarantee held during tenancy.'
    },
    {
      id: 'ex_a2_9_128_p11',
      type: 'match_pairs',
      prompt: 'Match each household profession with their specialty:',
      options: [
        { id: '1', text: 'plumber → [fixes water pipes, sinks, and drainage]' },
        { id: '2', text: 'electrician → [repairs wiring, lights, and power outlets]' },
        { id: '3', text: 'landlord → [owns and rents out the property]' },
        { id: '4', text: 'tenant → [rents and lives in the property]' }
      ],
      correctAnswer: 'matched',
      explanation: 'Key housing roles and trade professions.'
    },
    {
      id: 'ex_a2_9_128_p12',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "The kitchen faucet has a constant _____ (leak) that needs fixing."',
      correctAnswer: 'leak',
      explanation: '"Leak" is the noun.'
    },
    {
      id: 'ex_a2_9_128_p13',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['Our', 'apartment', 'is', 'fully', 'furnished', 'with', 'modern', 'appliances'],
      correctAnswer: 'Our apartment is fully furnished with modern appliances',
      explanation: 'Passive descriptive sentence.'
    },
    {
      id: 'ex_a2_9_128_p14',
      type: 'translation',
      prompt: 'Translate to English: "रसोई के सिंक में कोई समस्या है।"',
      correctAnswer: 'There is a problem with the kitchen sink.',
      acceptableAnswers: ['There is an issue with the kitchen sink.'],
      explanation: '"There is a problem with the kitchen sink".'
    },
    {
      id: 'ex_a2_9_128_p15',
      type: 'multiple_choice',
      prompt: 'Select the grammatically correct statement:',
      options: [
        { id: '1', text: 'Tenants must keep the property clean and undamaged.', isCorrect: true },
        { id: '2', text: 'Tenants must to keep the property clean.', isCorrect: false },
        { id: '3', text: 'Tenants has to keep the property clean.', isCorrect: false },
        { id: '4', text: 'Tenants must keeping the property clean.', isCorrect: false }
      ],
      correctAnswer: 'Tenants must keep the property clean and undamaged.',
      explanation: 'Modal "must" is followed directly by the base verb "keep".'
    }
  ],
  review: [
    {
      id: 'ex_a2_9_128_r01',
      type: 'multiple_choice',
      prompt: 'Choose the correct form:',
      options: [
        { id: '1', text: 'Could you please arrange an inspection for Friday?', isCorrect: true },
        { id: '2', text: 'Could you to arrange an inspection for Friday?', isCorrect: false },
        { id: '3', text: 'Could you please arranging an inspection for Friday?', isCorrect: false },
        { id: '4', text: 'Would you mind arrange an inspection for Friday?', isCorrect: false }
      ],
      correctAnswer: 'Could you please arrange an inspection for Friday?',
      explanation: '"Could you please + base verb".'
    },
    {
      id: 'ex_a2_9_128_r02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "The apartment comes with a private sunny _____ overlooking the park."',
      correctAnswer: 'balcony',
      explanation: '"Balcony" fits the context.'
    },
    {
      id: 'ex_a2_9_128_r03',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['The', 'water', 'heater', 'stopped', 'working', 'this', 'morning'],
      correctAnswer: 'The water heater stopped working this morning',
      explanation: 'Past Simple sentence with gerund "working".'
    },
    {
      id: 'ex_a2_9_128_r04',
      type: 'translation',
      prompt: 'Translate to English: "मकान मालिक ने कल लीज पर हस्ताक्षर किए।"',
      correctAnswer: 'The landlord signed the lease yesterday.',
      acceptableAnswers: ['The landlord signed the contract yesterday.'],
      explanation: 'Past Simple with "yesterday".'
    },
    {
      id: 'ex_a2_9_128_r05',
      type: 'error_correction',
      prompt: 'Correct the error: "There are a leak under the washbasin."',
      correctAnswer: 'There is a leak under the washbasin.',
      explanation: '"A leak" is singular, so use "There is".'
    }
  ],
  assessment: [
    {
      id: 'ex_a2_9_128_a01',
      type: 'multiple_choice',
      prompt: 'Which request is both polite and appropriate for an urgent maintenance issue?',
      options: [
        { id: '1', text: 'Could you please send an emergency plumber to fix the burst pipe as soon as possible?', isCorrect: true },
        { id: '2', text: 'Send someone for fix the pipe right now yesterday!', isCorrect: false },
        { id: '3', text: 'Would you mind send a plumber for the pipe?', isCorrect: false },
        { id: '4', text: 'Could you to fix the burst pipe immediately please?', isCorrect: false }
      ],
      correctAnswer: 'Could you please send an emergency plumber to fix the burst pipe as soon as possible?',
      explanation: 'Grammatically sound and polite formula.'
    },
    {
      id: 'ex_a2_9_128_a02',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "We must give thirty days\' _____ before terminating the lease."',
      correctAnswer: 'notice',
      explanation: '"Thirty days\' notice" is standard.'
    },
    {
      id: 'ex_a2_9_128_a03',
      type: 'translation',
      prompt: 'Translate to English: "क्या आप कृपया टूटी हुई खिड़की की मरम्मत करवा सकते हैं?"',
      correctAnswer: 'Could you please have the broken window repaired?',
      acceptableAnswers: [
        'Could you please repair the broken window?',
        'Could you please fix the broken window?'
      ],
      explanation: 'Polite maintenance request.'
    },
    {
      id: 'ex_a2_9_128_a04',
      type: 'speaking',
      prompt: 'Read aloud clearly: "There is a severe leak under the kitchen sink, and we need an emergency plumber today."',
      targetText: 'There is a severe leak under the kitchen sink, and we need an emergency plumber today.',
      explanation: 'Speak clearly with urgent but polite tone.'
    },
    {
      id: 'ex_a2_9_128_a05',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['The', 'tenant', 'paid', 'the', 'security', 'deposit', 'on', 'Monday'],
      correctAnswer: 'The tenant paid the security deposit on Monday',
      explanation: 'Past Simple declarative sentence.'
    }
  ]
};

// =========================================================================
// LESSON 129: Giving Advice & Making Recommendations
// =========================================================================
export const LESSON_129_CONFIG: LessonConfigA2 = {
  num: 129,
  title: 'Giving Advice & Making Recommendations',
  icon: '💡',
  estMin: 25,
  objTitle: 'Expressing Advice, Helpful Suggestions & Practical Recommendations',
  objDesc: 'Learn to offer, ask for, and respond to advice using modal verbs ("should", "shouldn\'t", "ought to") and conversational suggestion patterns ("Why don\'t you...?", "You had better...", "If I were you...").',
  objHi: 'सलाह देने, सुझाव मांगने और सिफारिशें करने के लिए "should", "shouldn\'t", "Why don\'t you...?" और "If I were you..." का उपयोग सीखें।',
  objEs: 'Dar consejos, pedir sugerencias y hacer recomendaciones usando "should", "ought to", "Why don\'t you...?" y "If I were you...".',
  canDo: [
    'I can give practical everyday advice using "should" and "shouldn\'t + base verb".',
    'I can make friendly suggestions using "Why don\'t you...?" and "You could try...".',
    'I can give empathetic recommendations using "If I were you, I would...".',
    'I can ask for professional or personal advice when facing difficult choices.'
  ],
  canDoHi: [
    'मैं "should" और "shouldn\'t + base verb" का उपयोग करके व्यावहारिक सलाह दे सकता हूँ।',
    'मैं "Why don\'t you...?" और "You could try..." से दोस्ताना सुझाव दे सकता हूँ।',
    'मैं "If I were you, I would..." से व्यक्तिगत सिफारिशें कर सकता हूँ।',
    'मैं किसी निर्णय या दुविधा के समय दूसरों से मार्गदर्शन और सलाह मांग सकता हूँ।'
  ],
  canDoEs: [
    'Puedo dar consejos prácticos con "should" y "shouldn\'t".',
    'Puedo hacer sugerencias amistosas con "Why don\'t you...?".',
    'Puedo recomendar con empatía usando "If I were you, I would...".',
    'Puedo pedir consejo ante decisiones difíciles.'
  ],
  vocab: [
    { w: 'recommend', p: '/ˌrekəˈmend/', m: 'put forward someone or something with approval as being suitable for a purpose or role', hi: 'सिफारिश करना / सुझाव देना', es: 'recomendar', fr: 'recommander', de: 'empfehlen', pt: 'recomendar', zh: '推荐', ar: 'يوصي / يزكي', ja: '勧める / 推薦する', ru: 'рекомендовать', ex: 'Which local seafood restaurant would you recommend?', exHi: 'आप किस स्थानीय सीफ़ूड रेस्तरां की सिफारिश करेंगे?', exEs: '¿Qué restaurante local de mariscos recomendarías?', ic: '⭐' },
    { w: 'suggestion', p: '/səˈdʒestʃən/', m: 'an idea or plan put forward for consideration', hi: 'सुझाव / राय', es: 'sugerencia / propuesta', fr: 'suggestion / proposition', de: 'Vorschlag / Anregung', pt: 'sugestão', zh: '建议', ar: 'اقتراح', ja: '提案 / 示唆', ru: 'предложение / совет', ex: 'Do you have any practical suggestions for saving money on travel?', exHi: 'क्या आपके पास यात्रा पर पैसे बचाने के लिए कोई व्यावहारिक सुझाव हैं?', exEs: '¿Tienes alguna sugerencia práctica para ahorrar dinero en viajes?', ic: '💡' },
    { w: 'advice', p: '/ədˈvaɪs/', m: 'guidance or recommendations offered with regard to prudent future action', hi: 'सलाह / परामर्श (uncountable noun)', es: 'consejo (incontable)', fr: 'conseil', de: 'Rat / Ratschlag', pt: 'conselho', zh: '建议 / 劝告', ar: 'نصيحة', ja: '助言 / アドバイス', ru: 'совет', ex: 'She gave me valuable advice on preparing for the job interview.', exHi: 'उसने मुझे नौकरी के साक्षात्कार की तैयारी पर मूल्यवान सलाह दी।', exEs: 'Ella me dio un valioso consejo sobre cómo prepararme para la entrevista.', ic: '🗣️' },
    { w: 'advise', p: '/ədˈvaɪz/', m: 'offer suggestions about the best course of action to someone (verb)', hi: 'सलाह देना (verb)', es: 'aconsejar / asesorar', fr: 'conseiller', de: 'beraten / raten', pt: 'aconselhar', zh: '劝告 / 建议(动词)', ar: 'ينصح', ja: '助言する', ru: 'советовать / консультировать', ex: 'I strongly advise you to consult a qualified tax expert.', exHi: 'मैं आपको दृढ़ता से एक योग्य कर विशेषज्ञ से परामर्श करने की सलाह देता हूँ।', exEs: 'Te aconsejo encarecidamente consultar a un experto fiscal.', ic: '👨‍⚖️' },
    { w: 'sensible', p: '/ˈsensəbl/', m: 'chosen in accordance with wisdom or prudence; likely to be of benefit', hi: 'समझदारी भरा / व्यावहारिक', es: 'sensato / prudente', fr: 'sensé / raisonnable', de: 'vernünftig', pt: 'sensato / prudente', zh: '明智的 / 合理的', ar: 'حكيم / عقلاني', ja: '賢明な / 分別のある', ru: 'разумный / благоразумный', ex: 'It is sensible to carry an umbrella when rain is forecast.', exHi: 'बारिश का पूर्वानुमान होने पर छाता ले जाना समझदारी है।', exEs: 'Es sensato llevar un paraguas cuando se pronostica lluvia.', ic: '🧠' },
    { w: 'essential', p: '/ɪˈsenʃl/', m: 'absolutely necessary; extremely important', hi: 'अत्यंत आवश्यक / अनिवार्य', es: 'esencial / imprescindible', fr: 'essentiel / indispensable', de: 'unerlässlich / wesentlich', pt: 'essencial / indispensável', zh: '必不可少的', ar: 'ضروري / أساسي', ja: '不可欠な / 必須の', ru: 'существенный / необходимый', ex: 'Drinking plenty of water is essential in hot weather.', exHi: 'गर्म मौसम में खूब पानी पीना बेहद जरूरी है।', exEs: 'Beber mucha agua es esencial en climas cálidos.', ic: '💧' },
    { w: 'avoid', p: '/əˈvɔɪd/', m: 'keep away from or stop oneself from doing something', hi: 'बचना / दूर रहना', es: 'evitar', fr: 'éviter', de: 'vermeiden', pt: 'evitar', zh: '避免', ar: 'يتجنب', ja: '避ける / 回避する', ru: 'избегать / уклоняться', ex: 'You should avoid driving during peak rush hour.', exHi: 'आपको पीक रश ऑवर के दौरान गाड़ी चलाने से बचना चाहिए।', exEs: 'Deberías evitar conducir durante la hora pico.', ic: '🚫' },
    { w: 'consult', p: '/kənˈsʌlt/', m: 'seek information or advice from an expert or a book', hi: 'परामर्श लेना / सलाह लेना', es: 'consultar', fr: 'consulter', de: 'konsultieren / zu Rate ziehen', pt: 'consultar', zh: '请教 / 咨询', ar: 'يستشير', ja: '相談する / 診察を受ける', ru: 'консультироваться', ex: 'You ought to consult your doctor before starting heavy exercise.', exHi: 'भारी व्यायाम शुरू करने से पहले आपको अपने डॉक्टर से परामर्श लेना चाहिए।', exEs: 'Deberías consultar a tu médico antes de empezar ejercicio pesado.', ic: '🩺' },
    { w: 'consider', p: '/kənˈsɪdə/', m: 'think carefully about something, typically before making a decision', hi: 'विचार करना / सोचना', es: 'considerar / tener en cuenta', fr: 'envisager / considérer', de: 'in Betracht ziehen / überlegen', pt: 'considerar', zh: '考虑', ar: 'يفكر في / يعتبر', ja: '検討する / 考慮する', ru: 'рассматривать / обдумывать', ex: 'Why don\'t you consider taking an online graphic design course?', exHi: 'आप ऑनलाइन ग्राफिक डिज़ाइन कोर्स करने पर विचार क्यों नहीं करते?', exEs: '¿Por qué no consideras tomar un curso de diseño gráfico en línea?', ic: '🤔' },
    { w: 'option', p: '/ˈɒpʃn/', m: 'a thing that is or may be chosen', hi: 'विकल्प', es: 'opción / alternativa', fr: 'option / choix', de: 'Option / Wahlmöglichkeit', pt: 'opção', zh: '选项 / 抉择', ar: 'خيار', ja: '選択肢', ru: 'вариант / опция', ex: 'Let us explore all our options before signing the lease.', exHi: 'लीज पर हस्ताक्षर करने से पहले आइए अपने सभी विकल्पों का पता लगाएं।', exEs: 'Exploremos todas nuestras opciones antes de firmar el contrato.', ic: '🔀' },
    { w: 'alternative', p: '/ɔːlˈtɜːnətɪv/', m: 'one of two or more available possibilities', hi: 'वैकल्पिक / दूसरा रास्ता', es: 'alternativa', fr: 'alternative', de: 'Alternative', pt: 'alternativa', zh: '替代方案', ar: 'بديل', ja: '代替案', ru: 'альтернатива', ex: 'Riding a bicycle is an eco-friendly alternative to driving a car.', exHi: 'साइकिल चलाना कार चलाने का एक पर्यावरण अनुकूल विकल्प है।', exEs: 'Andar en bicicleta es una alternativa ecológica a conducir un coche.', ic: '🚲' },
    { w: 'benefit', p: '/ˈbenɪfɪt/', m: 'an advantage or profit gained from something', hi: 'लाभ / फायदा', es: 'beneficio / ventaja', fr: 'avantage / bénéfice', de: 'Vorteil / Nutzen', pt: 'benefício / vantagem', zh: '益处 / 好处', ar: 'فائدة / ميزة', ja: '利益 / メリット', ru: 'польза / выгода', ex: 'Regular meditation has proven benefits for mental focus.', exHi: 'नियमित ध्यान के मानसिक एकाग्रता के लिए सिद्ध लाभ हैं।', exEs: 'La meditación regular tiene beneficios comprobados para la mente.', ic: '🧘' },
    { w: 'risk', p: '/rɪsk/', m: 'a situation involving exposure to danger or loss', hi: 'जोखिम / खतरा', es: 'riesgo / peligro', fr: 'risque / danger', de: 'Risiko / Gefahr', pt: 'risco', zh: '风险', ar: 'خطر / مجازفة', ja: '危険 / リスク', ru: 'риск / опасность', ex: 'You shouldn\'t take unnecessary financial risks without research.', exHi: 'आपको शोध के बिना अनावश्यक वित्तीय जोखिम नहीं उठाने चाहिए।', exEs: 'No deberías correr riesgos financieros innecesarios sin investigar.', ic: '⚡' },
    { w: 'tip', p: '/tɪp/', m: 'a small but useful piece of practical advice', hi: 'सुझाव / नुस्खा / टिप', es: 'consejo útil / truco', fr: 'astuce / tuyau', de: 'Tipp / Hinweis', pt: 'dica', zh: '实用建议 / 秘诀', ar: 'نصيحة سريعة', ja: 'コツ / 助言', ru: 'полезный совет / подсказка', ex: 'Here is a handy tip for improving your English pronunciation.', exHi: 'आपके अंग्रेजी उच्चारण को बेहतर बनाने के लिए यहाँ एक आसान सुझाव है।', exEs: 'Aquí tienes un consejo útil para mejorar tu pronunciación en inglés.', ic: '📌' },
    { w: 'guidance', p: '/ˈɡaɪdns/', m: 'advice or information aimed at resolving a problem or difficulty', hi: 'मार्गदर्शन / दिशा-निर्देश', es: 'orientación / guía', fr: 'orientation / conseils', de: 'Führung / Anleitung', pt: 'orientação / aconselhamento', zh: '指导 / 指引', ar: 'إرشاد / توجيه', ja: '指導 / 案内', ru: 'руководство / наставление', ex: 'Beginners need proper guidance from experienced mentors.', exHi: 'शुरुआती लोगों को अनुभवी सलाहकारों से उचित मार्गदर्शन की आवश्यकता होती है।', exEs: 'Los principiantes necesitan una orientación adecuada de mentores.', ic: '🧭' },
    { w: 'effective', p: '/ɪˈfektɪv/', m: 'successful in producing a desired or intended result', hi: 'प्रभावी / असरदार', es: 'eficaz / efectivo', fr: 'efficace', de: 'wirksam / effektiv', pt: 'eficaz / efetivo', zh: '有效的', ar: 'فعال', ja: '効果的な', ru: 'эффективный / действенный', ex: 'Flashcards are an effective method for vocabulary memorization.', exHi: 'शब्दावली याद रखने के लिए फ्लैशकार्ड एक प्रभावी तरीका है।', exEs: 'Las tarjetas de memoria son un método eficaz para memorizar vocabulario.', ic: '🎯' },
    { w: 'caution', p: '/ˈkɔːʃn/', m: 'care taken to avoid danger or mistakes', hi: 'सावधानी / सतर्कता', es: 'precaución / cautela', fr: 'prudence / précaution', de: 'Vorsicht / Behutsamkeit', pt: 'cautela / precaução', zh: '谨慎 / 小心', ar: 'حذر / احتياط', ja: '用心 / 警戒', ru: 'осторожность / осмотрительность', ex: 'We must exercise caution when downloading unknown attachments.', exHi: 'अज्ञात अटैचमेंट डाउनलोड करते समय हमें सावधानी बरतनी चाहिए।', exEs: 'Debemos tener precaución al descargar archivos adjuntos desconocidos.', ic: '⚠️' },
    { w: 'solution', p: '/səˈluːʃn/', m: 'a means of solving a problem or dealing with a difficult situation', hi: 'समाधान / उपाय', es: 'solución', fr: 'solution', de: 'Lösung', pt: 'solução', zh: '解决方案', ar: 'حل', ja: '解決策 / ソリューション', ru: 'решение', ex: 'What is the most cost-effective solution to this technical issue?', exHi: 'इस तकनीकी समस्या का सबसे किफायती समाधान क्या है?', exEs: '¿Cuál es la solución más rentable para este problema técnico?', ic: '🧩' },
    { w: 'preferable', p: '/ˈprefrəbl/', m: 'more desirable or suitable', hi: 'बेहतर / अधिक उपयुक्त', es: 'preferible', fr: 'préférable', de: 'vorzuziehen / besser', pt: 'preferível', zh: '更好的 / 更可取的', ar: 'أفضل / مستحسن', ja: 'より望ましい', ru: 'предпочтительный', ex: 'Direct flights are always preferable to long connecting layovers.', exHi: 'लंबी कनेक्टिंग उड़ानों की तुलना में सीधी उड़ानें हमेशा बेहतर होती हैं।', exEs: 'Los vuelos directos son siempre preferibles a largas escalas.', ic: '✈️' },
    { w: 'perspective', p: '/pəˈspektɪv/', m: 'a particular attitude toward or way of regarding something; a point of view', hi: 'दृष्टिकोण / नजरिया', es: 'perspectiva / punto de vista', fr: 'perspective / point de vue', de: 'Perspektive / Blickwinkel', pt: 'perspectiva / ponto de vista', zh: '视角 / 观点', ar: 'وجهة نظر / منظور', ja: '視点 / 観点', ru: 'перспектива / точка зрения', ex: 'Listening to other people gives you a broader life perspective.', exHi: 'दूसरों की बात सुनने से आपको जीवन का व्यापक दृष्टिकोण मिलता है।', exEs: 'Escuchar a otras personas te da una perspectiva más amplia de la vida.', ic: '👓' }
  ],
  chunks: [
    { phrase: 'You should / shouldn\'t + verb', meaning: 'giving direct advice on what is good or bad to do', hi: 'आपको ऐसा करना चाहिए / नहीं करना चाहिए', es: 'Deberías / No deberías + verbo', fr: 'Tu devrais / Tu ne devrais pas + verbe', de: 'Du solltest / Du solltest nicht + Verb', pt: 'Você deveria / não deveria + verbo', zh: '你应该 / 不应该...', ar: 'ينبغي عليك / لا ينبغي عليك...', ja: '〜すべきだ / 〜すべきではない', ru: 'Вам следует / не следует делать...', note: 'Modal verb: base verb follows without "to".', ic: '💡' },
    { phrase: 'Why don\'t you + base verb...?', meaning: 'making a friendly and constructive suggestion', hi: 'आप ऐसा क्यों नहीं करते...?', es: '¿Por qué no + verbo...?', fr: 'Pourquoi ne pas + verbe... ?', de: 'Warum machst du nicht...?', pt: 'Por que você não + verbo...?', zh: '你为什么不...？', ar: 'لم لا تفعل...؟', ja: '〜してみてはどうですか？', ru: 'Почему бы вам не...?', note: 'Conversational formula for suggestions.', ic: '❓' },
    { phrase: 'If I were you, I would + verb', meaning: 'giving advice by imagining oneself in the other person\'s situation', hi: 'अगर मैं आपकी जगह होता, तो मैं ऐसा करता', es: 'Si yo fuera tú, yo + condicional', fr: 'Si j\'étais toi, je + conditionnel', de: 'Wenn ich du wäre, würde ich...', pt: 'Se eu fosse você, eu + verbo', zh: '如果我是你，我会...', ar: 'لو كنت مكانك، لفعلت...', ja: 'もし私があなたなら、〜します', ru: 'На вашем месте я бы сделал...', note: 'Subjunctive hypothetical advice formula.', ic: '👤' },
    { phrase: 'You had better + base verb', meaning: 'strong warning/advice with negative consequences if ignored', hi: 'आपके लिए बेहतर होगा कि आप ऐसा करें', es: 'Más te vale / Es mejor que + subjuntivo', fr: 'Tu ferais mieux de + infinitif', de: 'Du solltest besser...', pt: 'É melhor você + verbo', zh: '你最好...', ar: 'من الأفضل لك أن...', ja: '〜したほうがいい (警告的)', ru: 'Вам лучше сделать...', note: 'Contraction: "You\'d better leave now."', ic: '⚠️' },
    { phrase: 'take my advice', meaning: 'accept and follow recommended guidance', hi: 'मेरी सलाह मानना', es: 'seguir mi consejo', fr: 'suivre mes conseils', de: 'meinen Rat annehmen', pt: 'seguir meu conselho', zh: '听从我的建议', ar: 'الأخذ بنصيحتي', ja: '私の助言に従う', ru: 'последовать моему совету', note: 'Collocation with "advice" (noun).', ic: '🤝' },
    { phrase: 'it is worth a try', meaning: 'it is sensible to attempt it even if unsure of success', hi: 'यह कोशिश करने लायक है', es: 'vale la pena intentarlo', fr: 'cela vaut la peine d\'essayer', de: 'einen Versuch ist es wert', pt: 'vale a pena tentar', zh: '值得一试', ar: 'الأمر يستحق التجربة', ja: '試してみる価値はある', ru: 'стоит попробовать', note: 'Encouraging suggestion idiom.', ic: '🎯' },
    { phrase: 'What do you think I should do?', meaning: 'asking someone for their perspective and advice', hi: 'आपके अनुसार मुझे क्या करना चाहिए?', es: '¿Qué crees que debería hacer?', fr: 'Que penses-tu que je devrais faire ?', de: 'Was meinst du, was ich tun sollte?', pt: 'O que você acha que eu deveria fazer?', zh: '你觉得我应该怎么做？', ar: 'ماذا تعتقد أنه يجب علي فعله؟', ja: '私はどうすべきだと思いますか？', ru: 'Как вы думаете, что мне следует делать?', note: 'Standard advice-seeking question.', ic: '❓' },
    { phrase: 'I highly recommend that you...', meaning: 'giving an emphatic positive recommendation', hi: 'मैं आपको दृढ़ता से सलाह देता हूँ कि...', es: 'Te recomiendo encarecidamente que...', fr: 'Je te recommande vivement de...', de: 'Ich empfehle dir wärmstens, dass...', pt: 'Recomendo vivamente que você...', zh: '我强烈推荐你...', ar: 'أوصيك بشدة بـ...', ja: '強くお勧めします', ru: 'Я настоятельно рекомендую вам...', note: 'Strong professional recommendation opener.', ic: '🌟' }
  ],
  grammar: {
    title: 'Giving Advice & Suggestions: "Should", "Why Don\'t You", and "If I Were You"',
    concept: 'Using modal auxiliaries and conversational structures to recommend actions at varying degrees of formality and strength.',
    patterns: [
      {
        title: 'Modals for Advice: "Should / Shouldn\'t" & "Ought to"',
        structure: 'Subject + should / shouldn\'t / ought to + Base Verb',
        rule: '"Should" and "shouldn\'t" are followed directly by the base verb without "to". "Ought to" includes "to".',
        examples: [
          { en: 'You should get at least seven hours of sleep each night.', hi: 'आपको हर रात कम से कम सात घंटे की नींद लेनी चाहिए।', es: 'Deberías dormir al menos siete horas cada noche.' },
          { en: 'You shouldn\'t skip breakfast before a long exam.', hi: 'आपको लंबी परीक्षा से पहले नाश्ता नहीं छोड़ना चाहिए।', es: 'No deberías saltarte el desayuno antes de un examen largo.' }
        ]
      },
      {
        title: 'Friendly Suggestions: "Why don\'t you...?" & "You could try..."',
        structure: 'Why don\'t you + Base Verb (+ Object)? | You could try + Verb-ing (+ Object)',
        rule: 'Use "Why don\'t you..." for direct polite ideas, and "try + -ing" for experimental solutions.',
        examples: [
          { en: 'Why don\'t you ask your manager for feedback?', hi: 'आप अपने प्रबंधक से प्रतिक्रिया क्यों नहीं मांगते?', es: '¿Por qué no le pides comentarios a tu gerente?' },
          { en: 'You could try drinking herbal chamomile tea before bedtime.', hi: 'आप सोने से पहले हर्बल कैमोमाइल चाय पीने की कोशिश कर सकते हैं।', es: 'Podrías probar beber té de manzanilla antes de dormir.' }
        ]
      },
      {
        title: 'Hypothetical Empathetic Advice: "If I were you, I would..."',
        structure: 'If I were you, I would / wouldn\'t + Base Verb',
        rule: 'Use the fixed form "If I were you" (subjunctive) followed by "I would + base verb".',
        examples: [
          { en: 'If I were you, I would accept the new job offer.', hi: 'अगर मैं आपकी जगह होता, तो मैं नई नौकरी की पेशकश स्वीकार कर लेता।', es: 'Si yo fuera tú, aceptaría la nueva oferta de trabajo.' },
          { en: 'If I were you, I wouldn\'t sign the lease without reading all the clauses.', hi: 'अगर मैं आपकी जगह होता, तो मैं सभी शर्तों को पढ़े बिना लीज पर हस्ताक्षर नहीं करता।', es: 'Si yo fuera tú, no firmaría el contrato sin leer todas las cláusulas.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'You should to see a dentist.',
      cor: 'You should see a dentist.',
      exp: 'Modal verbs like "should" are followed directly by the base verb without "to".',
      hi: '"Should" के बाद "to" नहीं आता, सीधे क्रिया का मूल रूप (see) आता है।',
      es: 'Después de "should" va el verbo base sin "to".'
    },
    {
      inc: 'She gave me many good advices.',
      cor: 'She gave me a lot of good advice. / She gave me some good advice.',
      exp: '"Advice" is an uncountable noun in English; it never takes a plural -s.',
      hi: '"Advice" अनकाउंटेबल नाउन है, "advices" नहीं होता।',
      es: '"Advice" es incontable; no se dice "advices".'
    },
    {
      inc: 'Why you don\'t call the technician?',
      cor: 'Why don\'t you call the technician?',
      exp: 'In question form, the auxiliary "don\'t" precedes the subject pronoun "you".',
      hi: 'सवाल पूछते समय "Why don\'t you call..." का प्रयोग करें।',
      es: 'En preguntas se dice "Why don\'t you call...".'
    },
    {
      inc: 'If I was you, I will buy it.',
      cor: 'If I were you, I would buy it.',
      exp: 'In hypothetical advice, standard English uses "If I were you, I would...".',
      hi: 'काल्पनिक सलाह के लिए "If I were you, I would..." का प्रयोग करें।',
      es: 'Para consejos hipotéticos se dice "If I were you, I would...".'
    },
    {
      inc: 'You had better to leave now.',
      cor: 'You had better leave now.',
      exp: '"Had better" is followed by the bare infinitive without "to".',
      hi: '"Had better" के बाद बिना "to" के क्रिया आती है।',
      es: '"Had better" va seguido del verbo base sin "to".'
    }
  ],
  dialogues: [
    {
      title: 'Discussing a Career Dilemma',
      context: 'Sameer asks his mentor, Neha, for advice about changing departments at work.',
      charA: { name: 'Sameer', av: '👨🏽', role: 'Junior Analyst' },
      charB: { name: 'Neha', av: '👩🏾', role: 'Senior Mentor' },
      turns: [
        { spk: 'Sameer', text: 'Neha, I have received an invitation to join the product strategy team, but I am nervous about the steep learning curve. What do you think I should do?', hi: 'नेहा, मुझे उत्पाद रणनीति टीम में शामिल होने का निमंत्रण मिला है, लेकिन मैं नई चुनौतियों को लेकर थोड़ा घबराया हुआ हूँ। आपके अनुसार मुझे क्या करना चाहिए?', es: 'Neha, me han invitado a unirme al equipo de estrategia, pero estoy nervioso. ¿Qué crees que debería hacer?' },
        { spk: 'Neha', text: 'If I were you, Sameer, I would definitely accept the opportunity. You have proven analytical skills and will learn fast.', hi: 'अगर मैं तुम्हारी जगह होती, समीर, तो मैं निश्चित रूप से इस अवसर को स्वीकार कर लेती। तुम्हारे पास बेहतरीन विश्लेषणात्मक कौशल है और तुम जल्दी सीख जाओगे।', es: 'Si yo fuera tú, Sameer, definitivamente aceptaría. Tienes habilidades demostradas y aprenderás rápido.' },
        { spk: 'Sameer', text: 'Should I speak to my current team manager before giving my final answer?', hi: 'क्या मुझे अपना अंतिम उत्तर देने से पहले अपने वर्तमान टीम प्रबंधक से बात करनी चाहिए?', es: '¿Debería hablar con mi gerente actual antes de dar una respuesta definitiva?' },
        { spk: 'Neha', text: 'Yes, absolutely. You ought to be open and transparent with your manager. Why don\'t you schedule a one-on-one sync tomorrow morning?', hi: 'हाँ, बिल्कुल। आपको अपने मैनेजर के साथ खुला और पारदर्शी होना चाहिए। आप कल सुबह वन-ऑन-वन सिंक क्यों नहीं शेड्यूल कर लेते?', es: 'Sí, absolutamente. Deberías ser transparente. ¿Por qué no programas una reunión individual mañana?' }
      ]
    },
    {
      title: 'Recommending Travel Tips for a Trip to London',
      context: 'Sophie recommends itinerary tips to Leo for his upcoming holiday in London.',
      charA: { name: 'Sophie', av: '👩🏼', role: 'Frequent Traveler' },
      charB: { name: 'Leo', av: '👨🏻', role: 'Tourist' },
      turns: [
        { spk: 'Sophie', text: 'Leo, for your upcoming trip to London, you should purchase an Oyster travel card or use contactless payments on the Underground.', hi: 'लियो, अपनी आगामी लंदन यात्रा के लिए, आपको ऑयस्टर कार्ड खरीदना चाहिए या अंडरग्राउंड पर कॉन्टैक्टलेस भुगतान का उपयोग करना चाहिए।', es: 'Leo, para tu viaje a Londres, deberías comprar una tarjeta Oyster o usar pagos sin contacto.' },
        { spk: 'Leo', text: 'That sounds convenient! Which historical museums do you recommend visiting first?', hi: 'यह बहुत सुविधाजनक लगता है! आप पहले किन ऐतिहासिक संग्रहालयों में जाने की सलाह देती हैं?', es: '¡Eso suena conveniente! ¿Qué museos históricos recomiendas visitar primero?' },
        { spk: 'Sophie', text: 'I highly recommend the British Museum and the Natural History Museum. Both have free admission, so it is worth a visit!', hi: 'मैं ब्रिटिश संग्रहालय और प्राकृतिक इतिहास संग्रहालय की अत्यधिक अनुशंसा करती हूँ। दोनों में प्रवेश निःशुल्क है, इसलिए वहाँ जाना सार्थक है!', es: 'Recomiendo mucho el Museo Británico y el de Historia Natural. ¡Ambos son gratuitos, así que vale la pena!' },
        { spk: 'Leo', text: 'Thanks for the great tips, Sophie! I will definitely add both to my itinerary.', hi: 'शानदार सुझावों के लिए धन्यवाद, सोफी! मैं निश्चित रूप से दोनों को अपने यात्रा कार्यक्रम में शामिल करूँगा।', es: '¡Gracias por los excelentes consejos, Sophie! Sin duda los añadiré a mi itinerario.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_a2_9_129_p01',
      type: 'multiple_choice',
      prompt: 'Select the correct sentence giving advice:',
      options: [
        { id: '1', text: 'You should get a second opinion from a specialist.', isCorrect: true },
        { id: '2', text: 'You should to get a second opinion from a specialist.', isCorrect: false },
        { id: '3', text: 'You should getting a second opinion from a specialist.', isCorrect: false },
        { id: '4', text: 'You should got a second opinion from a specialist.', isCorrect: false }
      ],
      correctAnswer: 'You should get a second opinion from a specialist.',
      explanation: 'Modal "should" is followed directly by the base verb "get".'
    },
    {
      id: 'ex_a2_9_129_p02',
      type: 'fill_blank',
      prompt: 'Complete the suggestion: "Why _____ you ask the customer service manager for a refund?"',
      correctAnswer: "don't",
      acceptableAnswers: ['dont', 'do not'],
      explanation: 'Formula: "Why don\'t you + base verb...?"'
    },
    {
      id: 'ex_a2_9_129_p03',
      type: 'word_ordering',
      prompt: 'Arrange the words to form an empathetic advice sentence:',
      tokens: ['If', 'I', 'were', 'you', 'I', 'would', 'take', 'the', 'job'],
      correctAnswer: 'If I were you I would take the job',
      explanation: 'Hypothetical conditional advice formula.'
    },
    {
      id: 'ex_a2_9_129_p04',
      type: 'translation',
      prompt: 'Translate to English: "आपको बारिश में गाड़ी चलाने से बचना चाहिए।"',
      correctAnswer: 'You should avoid driving in the rain.',
      acceptableAnswers: ['You ought to avoid driving in the rain.'],
      explanation: '"You should avoid driving in the rain".'
    },
    {
      id: 'ex_a2_9_129_p05',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence: "He gave me many helpful advices."',
      correctAnswer: 'He gave me a lot of helpful advice.',
      acceptableAnswers: ['He gave me much helpful advice.', 'He gave me helpful advice.'],
      explanation: '"Advice" is uncountable; never say "advices".'
    },
    {
      id: 'ex_a2_9_129_p06',
      type: 'listening',
      prompt: 'Listen to the health professional and select the recommendation:',
      audioText: 'If you are experiencing eye fatigue after long screen hours, you should take a five-minute break every hour and look into the distance.',
      options: [
        { id: '1', text: 'Take a five-minute break every hour', isCorrect: true },
        { id: '2', text: 'Stop using computers completely', isCorrect: false },
        { id: '3', text: 'Buy expensive new eyeglasses immediately', isCorrect: false },
        { id: '4', text: 'Work continuously without stopping', isCorrect: false }
      ],
      correctAnswer: 'Take a five-minute break every hour',
      explanation: 'The speaker recommends taking a five-minute break every hour.'
    },
    {
      id: 'ex_a2_9_129_p07',
      type: 'listen_and_type',
      prompt: 'Listen and type the exact sentence:',
      audioText: 'What do you think I should do?',
      correctAnswer: 'What do you think I should do?',
      explanation: 'Type the exact advice question with question mark.'
    },
    {
      id: 'ex_a2_9_129_p08',
      type: 'speaking',
      prompt: 'Read aloud clearly: "If I were you, I would consult an experienced financial advisor before investing."',
      targetText: 'If I were you, I would consult an experienced financial advisor before investing.',
      explanation: 'Speak clearly with thoughtful, measured intonation.'
    },
    {
      id: 'ex_a2_9_129_p09',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nFriend: "I feel exhausted every afternoon at work."\nYou: "Why don\'t you _____ for a short walk outside after lunch?"',
      options: [
        { id: '1', text: 'go', isCorrect: true },
        { id: '2', text: 'to go', isCorrect: false },
        { id: '3', text: 'going', isCorrect: false },
        { id: '4', text: 'went', isCorrect: false }
      ],
      correctAnswer: 'go',
      explanation: '"Why don\'t you + base verb (go)".'
    },
    {
      id: 'ex_a2_9_129_p10',
      type: 'multiple_choice',
      prompt: 'Which phrase expresses the strongest warning?',
      options: [
        { id: '1', text: 'You had better lock the front door before leaving.', isCorrect: true },
        { id: '2', text: 'You could lock the front door maybe.', isCorrect: false },
        { id: '3', text: 'Why don\'t you think about locking the door?', isCorrect: false },
        { id: '4', text: 'You might consider locking the door.', isCorrect: false }
      ],
      correctAnswer: 'You had better lock the front door before leaving.',
      explanation: '"Had better" carries strong urgency and warning of negative outcomes.'
    },
    {
      id: 'ex_a2_9_129_p11',
      type: 'match_pairs',
      prompt: 'Match each advice structure with its communicative function:',
      options: [
        { id: '1', text: 'You should... → [standard general advice]' },
        { id: '2', text: 'Why don\'t you...? → [friendly casual suggestion]' },
        { id: '3', text: 'If I were you... → [empathetic hypothetical guidance]' },
        { id: '4', text: 'You had better... → [urgent warning with consequences]' }
      ],
      correctAnswer: 'matched',
      explanation: 'Nuances of advice and suggestion formulas.'
    },
    {
      id: 'ex_a2_9_129_p12',
      type: 'fill_blank',
      prompt: 'Complete the modal: "You _____ (ought) to double check your passport expiry date before booking flights."',
      correctAnswer: 'ought to',
      explanation: '"Ought to" expresses moral or practical obligation/advice.'
    },
    {
      id: 'ex_a2_9_129_p13',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['I', 'highly', 'recommend', 'visiting', 'the', 'botanical', 'gardens'],
      correctAnswer: 'I highly recommend visiting the botanical gardens',
      explanation: '"Recommend + gerund (-ing)" structure.'
    },
    {
      id: 'ex_a2_9_129_p14',
      type: 'translation',
      prompt: 'Translate to English: "अगर मैं आपकी जगह होता, तो मैं डॉक्टर से सलाह लेता।"',
      correctAnswer: 'If I were you, I would consult a doctor.',
      acceptableAnswers: [
        'If I were you, I would see a doctor.',
        'If I were you, I would talk to a doctor.'
      ],
      explanation: '"If I were you, I would consult a doctor".'
    },
    {
      id: 'ex_a2_9_129_p15',
      type: 'multiple_choice',
      prompt: 'Select the grammatically correct sentence:',
      options: [
        { id: '1', text: 'You shouldn\'t drink coffee late at night if you want good sleep.', isCorrect: true },
        { id: '2', text: 'You shouldn\'t to drink coffee late at night.', isCorrect: false },
        { id: '3', text: 'You shouldn\'t drinking coffee late at night.', isCorrect: false },
        { id: '4', text: 'You ought not drink coffee without to.', isCorrect: false }
      ],
      correctAnswer: 'You shouldn\'t drink coffee late at night if you want good sleep.',
      explanation: '"Shouldn\'t + base verb (drink)".'
    }
  ],
  review: [
    {
      id: 'ex_a2_9_129_r01',
      type: 'multiple_choice',
      prompt: 'Choose the correct form:',
      options: [
        { id: '1', text: 'Why don\'t you try studying in the quiet library?', isCorrect: true },
        { id: '2', text: 'Why you don\'t try studying in the quiet library?', isCorrect: false },
        { id: '3', text: 'Why don\'t you to try studying in the library?', isCorrect: false },
        { id: '4', text: 'Why not you try studying in the library?', isCorrect: false }
      ],
      correctAnswer: 'Why don\'t you try studying in the quiet library?',
      explanation: '"Why don\'t you + base verb".'
    },
    {
      id: 'ex_a2_9_129_r02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "If I _____ (be) in your position, I would discuss the budget with the director."',
      correctAnswer: 'were',
      acceptableAnswers: ['was'],
      explanation: 'Subjunctive "were" is preferred in formal conditional advice.'
    },
    {
      id: 'ex_a2_9_129_r03',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['You', 'should', 'always', 'back', 'up', 'your', 'important', 'files'],
      correctAnswer: 'You should always back up your important files',
      explanation: 'Modal + adverb + phrasal verb + object.'
    },
    {
      id: 'ex_a2_9_129_r04',
      type: 'translation',
      prompt: 'Translate to English: "यह विचार निश्चित रूप से आज़माने लायक है।"',
      correctAnswer: 'This idea is definitely worth a try.',
      acceptableAnswers: ['This idea is certainly worth trying.'],
      explanation: '"Worth a try" or "worth trying".'
    },
    {
      id: 'ex_a2_9_129_r05',
      type: 'error_correction',
      prompt: 'Correct the error: "You had better to take an umbrella today."',
      correctAnswer: 'You had better take an umbrella today.',
      explanation: 'Remove "to" after "had better".'
    }
  ],
  assessment: [
    {
      id: 'ex_a2_9_129_a01',
      type: 'multiple_choice',
      prompt: 'Which sentence offers advice in a correct, natural manner?',
      options: [
        { id: '1', text: 'If I were you, I would compare multiple insurance plans before choosing one.', isCorrect: true },
        { id: '2', text: 'If I was you, I will compare multiple plans.', isCorrect: false },
        { id: '3', text: 'You should to compare multiple plans before choose.', isCorrect: false },
        { id: '4', text: 'Why you don\'t compare multiple plans?', isCorrect: false }
      ],
      correctAnswer: 'If I were you, I would compare multiple insurance plans before choosing one.',
      explanation: 'Correct subjunctive conditional advice formulation.'
    },
    {
      id: 'ex_a2_9_129_a02',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the base verb "take": "You had better _____ your medicine after lunch."',
      correctAnswer: 'take',
      explanation: '"Had better" is followed by base verb "take".'
    },
    {
      id: 'ex_a2_9_129_a03',
      type: 'translation',
      prompt: 'Translate to English: "क्या आपके पास इस समस्या के लिए कोई सुझाव है?"',
      correctAnswer: 'Do you have any suggestions for this problem?',
      acceptableAnswers: [
        'Do you have any advice for this problem?',
        'Do you have any suggestion for this issue?'
      ],
      explanation: '"Do you have any suggestions for this problem?".'
    },
    {
      id: 'ex_a2_9_129_a04',
      type: 'speaking',
      prompt: 'Read aloud clearly: "Why don\'t you consider taking an intensive language course before relocating abroad?"',
      targetText: 'Why don\'t you consider taking an intensive language course before relocating abroad?',
      explanation: 'Speak clearly with friendly conversational pacing.'
    },
    {
      id: 'ex_a2_9_129_a05',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['You', 'ought', 'to', 'consult', 'a', 'tax', 'specialist'],
      correctAnswer: 'You ought to consult a tax specialist',
      explanation: '"Ought to + base verb" structure.'
    }
  ]
};
