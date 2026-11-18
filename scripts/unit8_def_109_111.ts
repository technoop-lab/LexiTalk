import { LessonConfigA2 } from './unit8_builder_helper';

// =========================================================================
// LESSON 109: Travel Experiences & Unforeseen Journey Problems
// =========================================================================
export const LESSON_109_CONFIG: LessonConfigA2 = {
  num: 109,
  title: 'Travel Experiences & Unforeseen Journey Problems',
  icon: '🧳',
  estMin: 25,
  objTitle: 'Narrating Travel Anecdotes, Delays & Managing Journey Disruptions',
  objDesc: 'Describe past travel adventures, unexpected transit delays, lost luggage, and navigate travel emergencies using Past Simple vs Past Continuous with when/while.',
  objHi: 'यात्रा के अनुभव, अप्रत्याशित देरी, खोया हुआ सामान और यात्रा की समस्याओं का वर्णन करना सीखें।',
  objEs: 'Describir experiencias de viaje, retrasos imprevistos, pérdida de equipaje y emergencias usando Pasado Simple y Continuo con when/while.',
  canDo: [
    'I can narrate travel experiences and journey disruptions chronologically.',
    'I can combine Past Continuous (background action) and Past Simple (interrupting event) using "when" and "while".',
    'I can report missing luggage or delayed flights at an airport assistance desk.',
    'I can explain travel changes, missed train connections, and alternative routes.'
  ],
  canDoHi: [
    'मैं यात्रा के अनुभवों और यात्रा में आने वाली रुकावटों का क्रमवार वर्णन कर सकता हूँ।',
    'मैं "when" और "while" का उपयोग करके Past Continuous और Past Simple को जोड़ सकता हूँ।',
    'मैं हवाई अड्डे के सहायता डेस्क पर खोए सामान या देरी की रिपोर्ट कर सकता हूँ।',
    'मैं छूटी हुई ट्रेन और वैकल्पिक मार्गों के बारे में बातचीत कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo narrar experiencias de viaje e interrupciones cronológicamente.',
    'Puedo combinar Pasado Continuo y Pasado Simple usando "when" y "while".',
    'Puedo reportar equipaje perdido o vuelos retrasados en el mostrador del aeropuerto.',
    'Puedo explicar cambios de viaje, trenes perdidos y rutas alternativas.'
  ],
  vocab: [
    { w: 'delay', p: '/dɪˈleɪ/', m: 'a period of time by which something is late or postponed', hi: 'देरी / विलंब', es: 'retraso / demora', fr: 'retard', de: 'Verspätung', pt: 'atraso', zh: '延误', ar: 'تأخير', ja: '遅延', ru: 'задержка', ex: 'Our flight suffered a two-hour weather delay.', exHi: 'मौसम की वजह से हमारी उड़ान में दो घंटे की देरी हुई।', exEs: 'Nuestro vuelo sufrió un retraso de dos horas por el clima.', ic: '⏱️' },
    { w: 'cancelled', p: '/ˈkænsld/', m: 'decided that an organized event or transport will not take place', hi: 'रद्द / निरस्त', es: 'cancelado', fr: 'annulé', de: 'storniert / ausgefallen', pt: 'cancelado', zh: '已取消的', ar: 'ملغى', ja: '欠航になった', ru: 'отмененный', ex: 'The direct train to Edinburgh was cancelled due to track maintenance.', exHi: 'ट्रैक रखरखाव के कारण एडिनबर्ग की सीधी ट्रेन रद्द कर दी गई।', exEs: 'El tren directo a Edimburgo fue cancelado.', ic: '❌' },
    { w: 'luggage', p: '/ˈlʌɡɪdʒ/', m: 'suitcases or other bags in which to pack personal belongings for traveling', hi: 'सामान / बैगेज', es: 'equipaje', fr: 'bagages', de: 'Gepäck', pt: 'bagagem', zh: '行李', ar: 'أمتعة', ja: '荷物', ru: 'багаж', ex: 'I waited at the carousel, but my luggage did not appear.', exHi: 'मैंने कन्वेयर बेल्ट पर इंतजार किया, लेकिन मेरा सामान नहीं आया।', exEs: 'Esperé en la cinta, pero mi equipaje no apareció.', ic: '🧳' },
    { w: 'connection', p: '/kəˈnekʃn/', m: 'a transfer between different vehicles or flights on a journey', hi: 'कनेक्टिंग ट्रेन/फ्लाइट', es: 'conexión (vuelo/tren)', fr: 'correspondance', de: 'Anschluss', pt: 'conexão', zh: '转乘 / 联运', ar: 'رحلة متابعة / ربط', ja: '乗り継ぎ', ru: 'пересадка', ex: 'Because of the first flight delay, we missed our connecting flight.', exHi: 'पहली उड़ान में देरी के कारण, हमारी कनेक्टिंग फ्लाइट छूट गई।', exEs: 'Debido al retraso del primer vuelo, perdimos la conexión.', ic: '🔄' },
    { w: 'boarding pass', p: '/ˈbɔːdɪŋ pɑːs/', m: 'a pass that gives permission to board an aircraft', hi: 'बोर्डिंग पास', es: 'tarjeta de embarque', fr: 'carte d\'embarquement', de: 'Bordkarte', pt: 'cartão de embarque', zh: '登机牌', ar: 'بطاقة صعود الطائرة', ja: '搭乗券', ru: 'посадочный талон', ex: 'Please have your passport and boarding pass ready at the gate.', exHi: 'कृपया गेट पर अपना पासपोर्ट और बोर्डिंग पास तैयार रखें।', exEs: 'Tenga listos su pasaporte y tarjeta de embarque.', ic: '🎫' },
    { w: 'customs', p: '/ˈkʌstəmz/', m: 'the official department that checks goods brought into a country', hi: 'सीमा शुल्क विभाग (कस्टम्स)', es: 'aduana', fr: 'douane', de: 'Zoll', pt: 'alfândega', zh: '海关', ar: 'جمارك', ja: '税関', ru: 'таможня', ex: 'We went through international customs without any issues.', exHi: 'हम बिना किसी समस्या के अंतरराष्ट्रीय कस्टम से होकर गुजरे।', exEs: 'Pasamos por la aduana internacional sin problemas.', ic: '🛂' },
    { w: 'terminal', p: '/ˈtɜːmɪnl/', m: 'a building at an airport where passengers arrive and depart', hi: 'टर्मिनल (हवाई अड्डा)', es: 'terminal', fr: 'terminal', de: 'Terminal', pt: 'terminal', zh: '航站楼', ar: 'صالة المطار', ja: 'ターミナル', ru: 'терминал', ex: 'Our departure gate is located in Terminal 3.', exHi: 'हमारा प्रस्थान गेट टर्मिनल 3 में स्थित है।', exEs: 'Nuestra puerta de salida está en la Terminal 3.', ic: '🏢' },
    { w: 'shuttle', p: '/ˈʃʌtl/', m: 'a vehicle that travels regularly between two places', hi: 'शटल बस / गाड़ी', es: 'autobús lanzadera / transporte', fr: 'navette', de: 'Shuttlebus', pt: 'ônibus de traslado', zh: '班车', ar: 'حافلة مكوكية', ja: 'シャトルバス', ru: 'шаттл', ex: 'A free hotel shuttle operates every thirty minutes.', exHi: 'हर तीस मिनट में एक मुफ्त होटल शटल बस चलती है।', exEs: 'Un transporte gratuito del hotel sale cada 30 minutos.', ic: '🚌' },
    { w: 'compensation', p: '/ˌkɒmpenˈseɪʃn/', m: 'something, typically money, awarded to someone for loss or inconvenience', hi: 'मुआवजा', es: 'compensación / indemnización', fr: 'indemnisation', de: 'Entschädigung', pt: 'compensação', zh: '赔偿 / 补偿', ar: 'تعويض', ja: '補償 / 賠償金', ru: 'компенсация', ex: 'The airline provided food vouchers as compensation for the delay.', exHi: 'एयरलाइन ने देरी के मुआवजे के रूप में भोजन वाउचर प्रदान किए।', exEs: 'La aerolínea otorgó vales de comida como compensación.', ic: '💵' },
    { w: 'rebook', p: '/ˌriːˈbʊk/', m: 'book a passenger onto a different flight or journey', hi: 'दोबारा टिकट बुक करना', es: 'reprogramar / reservar de nuevo', fr: 'réserver à nouveau', de: 'umbuchen', pt: 'remarcar', zh: '改签', ar: 'إعادة حجز', ja: '予約を取り直す', ru: 'перебронировать', ex: 'The agent rebooked us onto the next morning flight.', exHi: 'एजेंट ने हमें अगली सुबह की उड़ान पर रीबुक कर दिया।', exEs: 'El agente nos reservó en el vuelo de la mañana siguiente.', ic: '📅' },
    { w: 'unforeseen', p: '/ˌʌnfɔːˈsiːn/', m: 'not anticipated or predicted', hi: 'अप्रत्याशित / अचानक', es: 'imprevisto', fr: 'imprévu', de: 'unvorhergesehen', pt: 'imprevisto', zh: '意料之外的', ar: 'غير متوقع', ja: '予期せぬ', ru: 'непредвиденный', ex: 'Due to unforeseen technical issues, the train stopped midway.', exHi: 'अप्रत्याशित तकनीकी समस्याओं के कारण ट्रेन बीच रास्ते में रुक गई।', exEs: 'Por problemas imprevistos, el tren se detuvo.', ic: '⚡' },
    { w: 'itinerary', p: '/aɪˈtɪnərəri/', m: 'a planned route or journey schedule', hi: 'यात्रा कार्यक्रम / योजना', es: 'itinerario', fr: 'itinéraire', de: 'Reiseplan', pt: 'itinerário', zh: '行程单', ar: 'خطة الرحلة', ja: '旅程', ru: 'маршрут', ex: 'Check your travel itinerary for departure times and hotel check-in.', exHi: 'प्रस्थान समय और होटल चेक-इन के लिए अपना यात्रा कार्यक्रम देखें।', exEs: 'Revise su itinerario para los horarios y el hotel.', ic: '🗺️' },
    { w: 'lost-and-found', p: '/ˌlɒst ənd ˈfaʊnd/', m: 'a place where lost property is kept to be claimed', hi: 'खोया-पाया विभाग', es: 'objetos perdidos', fr: 'objets trouvés', de: 'Fundbüro', pt: 'achados e perdidos', zh: '失物招领处', ar: 'قسم المفقودات', ja: '遺失物取扱所', ru: 'бюро находок', ex: 'I retrieved my forgotten laptop from the airport lost-and-found.', exHi: 'मैंने एयरपोर्ट के लॉस्ट-एंड-फाउंड से अपना भूला हुआ लैपटॉप वापस प्राप्त किया।', exEs: 'Recuperé mi portátil de la oficina de objetos perdidos.', ic: '🔍' },
    { w: 'voucher', p: '/ˈvaʊtʃər/', m: 'a document that can be exchanged for goods or services', hi: 'वाउचर / कूपन', es: 'cupón / vale', fr: 'bon d\'achat', de: 'Gutschein', pt: 'vale / cupom', zh: '凭证 / 代金券', ar: 'قسيمة', ja: '引換券', ru: 'ваучер', ex: 'They gave us a dinner voucher for the airport restaurant.', exHi: 'उन्होंने हमें एयरपोर्ट रेस्टोरेंट के लिए एक डिनर वाउचर दिया।', exEs: 'Nos dieron un cupón para cenar en el restaurante.', ic: '🎟️' },
    { w: 'announcement', p: '/əˈnaʊnsmənt/', m: 'a formal public statement made over a speaker', hi: 'घोषणा / एलान', es: 'anuncio', fr: 'annonce', de: 'Durchsage', pt: 'anúncio', zh: '通告 / 播音', ar: 'إعلان', ja: 'アナウンス', ru: 'объявление', ex: 'We listened carefully to the gate change announcement.', exHi: 'हमने गेट बदलने की घोषणा को ध्यान से सुना।', exEs: 'Escuchamos atentamente el anuncio de cambio de puerta.', ic: '📢' },
    { w: 'overbooked', p: '/ˌəʊvəˈbʊkt/', m: 'having sold more tickets than there are seats available', hi: 'ओवरबुक्ड (क्षमता से अधिक बुक)', es: 'sobrevendido / sobrecargado', fr: 'surréservé', de: 'überbucht', pt: 'com excesso de reservas', zh: '超额预订的', ar: 'محجوز بالكامل مع فائض', ja: '満席以上の予約がある', ru: 'переполненный (сверх нормы)', ex: 'The flight was overbooked, so volunteers were asked to take a later plane.', exHi: 'फ्लाइट ओवरबुक्ड थी, इसलिए स्वयंसेवकों को बाद का विमान लेने के लिए कहा गया।', exEs: 'El vuelo estaba sobrevendido y pidieron voluntarios.', ic: '👥' },
    { w: 'refund', p: '/ˈriːfʌnd/', m: 'a repayment of money, typically to a dissatisfied customer', hi: 'रिफंड / धनवापसी', es: 'reembolso', fr: 'remboursement', de: 'Rückerstattung', pt: 'reembolso', zh: '退款', ar: 'استرداد المبلغ', ja: '払い戻し', ru: 'возврат денег', ex: 'I requested a full refund for the cancelled train ticket.', exHi: 'मैंने रद्द किए गए ट्रेन टिकट के लिए पूरे रिफंड का अनुरोध किया।', exEs: 'Solicité un reembolso completo del boleto cancelado.', ic: '💳' },
    { w: 'turbulence', p: '/ˈtɜːbjələns/', m: 'violent or unsteady movement of air or water during flight', hi: 'हवाई अशांति / हिचकोले (टर्बुलेंस)', es: 'turbulencia', fr: 'turbulences', de: 'Turbulenzen', pt: 'turbulência', zh: '颠簸', ar: 'مطبات هوائية', ja: '乱気流', ru: 'турбулентность', ex: 'Please fasten your seatbelts during severe turbulence.', exHi: 'तेज टर्बुलेंस के दौरान कृपया अपनी सीटबेल्ट बांध लें।', exEs: 'Por favor, abróchense los cinturones durante la turbulencia.', ic: '💺' },
    { w: 'stranded', p: '/ˈstrændɪd/', m: 'left without the means to move from a place', hi: 'फंसा हुआ / बेसहारा', es: 'varado / atrapado', fr: 'bloqué', de: 'gestrandet', pt: 'preso / desamparado', zh: '滞留的', ar: 'عالق', ja: '立ち往生した', ru: 'застрявший', ex: 'Hundreds of travelers were stranded at the station overnight.', exHi: 'सैकड़ों यात्री रात भर स्टेशन पर फंसे रहे।', exEs: 'Cientos de viajeros quedaron varados en la estación.', ic: '🚉' },
    { w: 'straightforward', p: '/ˌstreɪtˈfɔːwəd/', m: 'uncomplicated and easy to do or understand', hi: 'सरल और सीधा', es: 'sencillo / directo', fr: 'simple / direct', de: 'unkompliziert', pt: 'direto / simples', zh: '简单明了的', ar: 'مباشر وبسيط', ja: '分かりやすい', ru: 'простой / прямолинейный', ex: 'The passport control process was very quick and straightforward.', exHi: 'पासपोर्ट नियंत्रण प्रक्रिया बहुत त्वरित और सरल थी।', exEs: 'El control de pasaportes fue muy rápido y sencillo.', ic: '✔️' }
  ],
  chunks: [
    { phrase: 'miss a connecting flight', meaning: 'arrive too late to board the next plane', hi: 'कनेक्टिंग फ्लाइट छूट जाना', es: 'perder un vuelo de conexión', fr: 'rater un vol de correspondance', de: 'einen Anschlussflug verpassen', pt: 'perder um voo de conexão', zh: '错过中转航班', ar: 'تفويت رحلة المتابعة', ja: '乗り継ぎ便に乗り遅れる', ru: 'опоздать на пересадку', note: 'Standard phrase for transit disruption.', ic: '✈️' },
    { phrase: 'file a lost luggage report', meaning: 'officially register missing baggage with an airline', hi: 'खोए सामान की आधिकारिक रिपोर्ट दर्ज करना', es: 'hacer un reporte de equipaje perdido', fr: 'déclarer la perte d\'un bagage', de: 'eine Verlustanzeige aufgeben', pt: 'registrar perda de bagagem', zh: '提交行李遗失报告', ar: 'تقديم بلاغ عن فقدان أمتعة', ja: 'ロストバゲージの手続きをする', ru: 'подать заявление об утере багажа', note: 'Essential airport customer service procedure.', ic: '📋' },
    { phrase: 'due to bad weather conditions', meaning: 'because of adverse storm or rain', hi: 'खराब मौसम के कारण', es: 'debido a malas condiciones climáticas', fr: 'en raison du mauvais temps', de: 'aufgrund schlechten Wetters', pt: 'devido ao mau tempo', zh: '由于恶劣天气原因', ar: 'بسبب سوء الأحوال الجوية', ja: '悪天候のため', ru: 'из-за плохих погодных условий', note: 'Official reason often given in travel announcements.', ic: '🌧️' },
    { phrase: 'rebook on the next available flight', meaning: 'transfer passenger ticket to the soonest open plane', hi: 'अगली उपलब्ध उड़ान पर टिकट बुक करना', es: 'reprogramar en el siguiente vuelo disponible', fr: 'reprogrammer sur le prochain vol', de: 'auf den nächsten verfügbaren Flug umbuchen', pt: 'remarcar para o próximo voo disponível', zh: '改签到下一个有座航班', ar: 'إعادة الحجز على أقرب رحلة متاحة', ja: '次の空席のある便に振り替える', ru: 'пересадить на ближайший рейс', note: 'Key solution requested by delayed travelers.', ic: '🔄' },
    { phrase: 'make a claim for compensation', meaning: 'request monetary payout for delay or lost items', hi: 'मुआवजे के लिए दावा करना', es: 'reclamar una compensación', fr: 'faire une demande d\'indemnisation', de: 'einen Entschädigungsanspruch geltend machen', pt: 'solicitar compensação', zh: '申请赔偿', ar: 'تقديم طلب تعويض', ja: '補償を請求する', ru: 'подать заявку на компенсацию', note: 'Passenger rights legal phrase.', ic: '💵' },
    { phrase: 'while I was waiting for', meaning: 'during the continuous time period of waiting', hi: 'जब मैं इंतजार कर रहा था', es: 'mientras estaba esperando a', fr: 'pendant que j\'attendais', de: 'während ich wartete auf', pt: 'enquanto eu estava esperando', zh: '当我正在等待时', ar: 'بينما كنت أنتظر', ja: '〜を待っている間に', ru: 'пока я ждал', note: 'Past continuous time clause introducing an interrupted narrative.', ic: '⏳' },
    { phrase: 'arrive safe and sound', meaning: 'reach a destination without injury or harm', hi: 'सकुशल और सही-सलामत पहुँचना', es: 'llegar sano y salvo', fr: 'arriver sain et sauf', de: 'wohlbehalten ankommen', pt: 'chegar são e salvo', zh: '平安抵达', ar: 'الوصول سالماً غانماً', ja: '無事に到着する', ru: 'добраться в целости и сохранности', note: 'Natural idiomatic expression upon journey completion.', ic: '🏡' },
    { phrase: 'have a smooth journey', meaning: 'travel without unexpected problems or stress', hi: 'सुखद और निर्बाध यात्रा होना', es: 'tener un viaje tranquilo / sin contratiempos', fr: 'faire un bon voyage sans accroc', de: 'eine reibungslose Reise haben', pt: 'ter uma viagem tranquila', zh: '旅途顺利', ar: 'رحلة ميسرة وسلسة', ja: '順調な旅をする', ru: 'гладкая поездка', note: 'Common polite wish or review expression.', ic: '✨' }
  ],
  grammar: {
    title: 'Past Continuous vs Past Simple with "When" & "While"',
    concept: 'Using the Past Continuous for ongoing background actions and the Past Simple for shorter, interrupting actions during travel narratives.',
    patterns: [
      {
        title: 'Background Action Interrupted by an Event (While + Past Continuous, Past Simple)',
        structure: 'While + Subject + was/were + Verb-ing, Subject + Past Simple',
        rule: 'Use "while" with the Past Continuous to describe the continuous situation in progress when a sudden event occurred.',
        examples: [
          { en: 'While we were waiting at the gate, the airline announced a delay.', hi: 'जब हम गेट पर इंतजार कर रहे थे, तभी एयरलाइन ने देरी की घोषणा की।', es: 'Mientras esperábamos en la puerta, la aerolínea anunció un retraso.' },
          { en: 'While I was flying to Madrid, the plane experienced severe turbulence.', hi: 'जब मैं मैड्रिड के लिए उड़ान भर रहा था, विमान में तेज टर्बुलेंस हुआ।', es: 'Mientras volaba a Madrid, el avión sufrió fuertes turbulencias.' }
        ]
      },
      {
        title: 'Interrupting Event with "When" (Past Continuous + When + Past Simple)',
        structure: 'Subject + was/were + Verb-ing + when + Subject + Past Simple',
        rule: 'Use "when" right before the specific completed action that interrupted the longer activity.',
        examples: [
          { en: 'I was looking for my passport when I realized I left it at home.', hi: 'मैं अपना पासपोर्ट ढूंढ रहा था जब मुझे एहसास हुआ कि मैं इसे घर पर छोड़ आया हूँ।', es: 'Estaba buscando mi pasaporte cuando me di cuenta de que lo olvidé en casa.' },
          { en: 'They were boarding the train when the whistle blew.', hi: 'वे ट्रेन में चढ़ रहे थे जब सीटी बजी।', es: 'Estaban subiendo al tren cuando sonó el silbato.' }
        ]
      },
      {
        title: 'Sequencing Past Events (First, Then, After that, Finally)',
        structure: 'Time Connector + Subject + Past Simple Verb + Complement',
        rule: 'Organize personal travel stories clearly by using sequence words in simple past.',
        examples: [
          { en: 'First our flight was delayed, and then we missed our connection.', hi: 'पहले हमारी उड़ान में देरी हुई, और फिर हमारी कनेक्टिंग ट्रेन/फ्लाइट छूट गई।', es: 'Primero se retrasó nuestro vuelo y luego perdimos la conexión.' },
          { en: 'Finally, the airline staff found our missing suitcases.', hi: 'आखिरकार, एयरलाइन कर्मचारियों ने हमारे खोए हुए सूटकेस ढूंढ निकाले।', es: 'Finalmente, el personal de la aerolínea encontró nuestras maletas.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'While I waited at the gate, the plane was leaving.',
      cor: 'While I was waiting at the gate, the plane left.',
      exp: 'Use Past Continuous (was waiting) for the background state and Past Simple (left) for the completed event.',
      hi: 'लंबी जारी क्रिया के लिए Past Continuous (was waiting) और मुख्य घटना के लिए Past Simple (left) का प्रयोग करें।'
    },
    {
      inc: 'I lost my luggages at the airport.',
      cor: 'I lost my luggage at the airport.',
      exp: '"Luggage" is an uncountable noun and does not take an "s".',
      hi: '"Luggage" uncountable noun है, इसमें "s" नहीं जोड़ा जाता।'
    },
    {
      inc: 'We arrived to London at six o\'clock.',
      cor: 'We arrived in London at six o\'clock.',
      exp: 'Use "arrive in" for cities and countries; "arrive at" for specific places (airports, stations). Never "arrive to".',
      hi: 'शहरों के लिए "arrive in" का प्रयोग करें, "arrive to" गलत है।'
    },
    {
      inc: 'The flight was delay because storm.',
      cor: 'The flight was delayed because of the storm.',
      exp: 'Use the passive participle "delayed" and prepositional phrase "because of".',
      hi: '"The flight was delayed because of the storm" सही वाक्य है।'
    },
    {
      inc: 'I was having a lost luggage.',
      cor: 'My luggage was lost. / I had lost luggage.',
      exp: 'Do not use continuous "was having" for states of possession or loss.',
      hi: 'सामान खोने की स्थिति के लिए "My luggage was lost" कहें।'
    }
  ],
  dialogues: [
    {
      title: 'At the Airport Baggage Help Desk',
      context: 'Dev speaks with an airline customer service agent after his suitcase did not arrive.',
      charA: { name: 'Dev', av: '👨', role: 'Passenger' },
      charB: { name: 'Agent', av: '👩‍💼', role: 'Baggage Services' },
      turns: [
        { spk: 'Dev', text: 'Excuse me, I just arrived on flight BA 142 from Mumbai, but my suitcase did not appear on the carousel.', hi: 'माफ़ कीजिए, मैं अभी मुंबई से फ्लाइट BA 142 से आया हूँ, लेकिन मेरा सूटकेस कन्वेयर बेल्ट पर नहीं आया।', es: 'Disculpe, llegué en el vuelo BA 142 de Mumbai pero mi maleta no apareció.' },
        { spk: 'Agent', text: 'I am very sorry to hear that. Do you have your baggage claim tag and boarding pass?', hi: 'यह सुनकर मुझे बहुत खेद है। क्या आपके पास आपका बैगेज क्लेम टैग और बोर्डिंग पास है?', es: 'Lamento mucho escuchar eso. ¿Tiene su etiqueta de equipaje y tarjeta de embarque?' },
        { spk: 'Dev', text: 'Yes, here they are. It is a large black suitcase with red ribbons on the handle.', hi: 'हाँ, ये रहे। यह एक बड़ा काला सूटकेस है जिसके हैंडल पर लाल रिबन बंधे हैं।', es: 'Sí, aquí están. Es una maleta grande negra con cintas rojas en el asa.' },
        { spk: 'Agent', text: 'Thank you. I have filed the report. Our system shows it was transferred to the next flight arriving tonight. We will deliver it to your hotel.', hi: 'धन्यवाद। मैंने रिपोर्ट दर्ज कर ली है। हमारा सिस्टम दिखाता है कि इसे आज रात आने वाली अगली उड़ान में भेजा गया है। हम इसे आपके होटल तक पहुंचा देंगे।', es: 'Gracias. He registrado el reporte. Llegará esta noche y se la enviaremos al hotel.' },
        { spk: 'Dev', text: 'That is a relief. Thank you for your assistance!', hi: 'यह बहुत राहत की बात है। आपकी सहायता के लिए धन्यवाद!', es: 'Qué alivio. ¡Muchas gracias por su ayuda!' }
      ]
    },
    {
      title: 'Missed Connection at the Train Station',
      context: 'Elena explains her missed train connection to the station ticketing agent.',
      charA: { name: 'Elena', av: '👩', role: 'Traveler' },
      charB: { name: 'Station Clerk', av: '👨‍💼', role: 'Rail Operator' },
      turns: [
        { spk: 'Elena', text: 'Good afternoon. While our previous train was approaching the station, it stopped for thirty minutes due to signal failure.', hi: 'शुभ दोपहर। जब हमारी पिछली ट्रेन स्टेशन आ रही थी, तो सिग्नल खराब होने के कारण वह तीस मिनट रुक गई।', es: 'Buenas tardes. Mientras nuestro tren se acercaba, se detuvo 30 minutos por una falla.' },
        { spk: 'Station Clerk', text: 'I see. Did you miss your connecting train to Paris?', hi: 'मैं समझ गया। क्या आपकी पेरिस जाने वाली कनेक्टिंग ट्रेन छूट गई?', es: 'Ya veo. ¿Perdió su tren de conexión a París?' },
        { spk: 'Elena', text: 'Yes, it departed ten minutes ago. Could you please validate my ticket for the next departure?', hi: 'हाँ, वह दस मिनट पहले रवाना हो गई। क्या आप कृपया अगली ट्रेन के लिए मेरा टिकट मान्य कर सकते हैं?', es: 'Sí, salió hace 10 minutos. ¿Podría validar mi boleto para la siguiente salida?' },
        { spk: 'Station Clerk', text: 'Certainly! There is another express train leaving from Platform 4 at 16:45. Here is your updated reservation.', hi: 'निश्चित रूप से! 16:45 पर प्लेटफॉर्म 4 से एक और एक्सप्रेस ट्रेन छूट रही है। यह आपका अपडेटेड आरक्षण है।', es: '¡Con gusto! Hay otro tren expreso a las 16:45 por la Vía 4. Aquí tiene su reserva.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_u08_l109_p1',
      type: 'multiple_choice',
      prompt: 'Select the correct form to complete the travel narrative:',
      question: 'Select the correct form to complete the travel narrative:',
      options: [
        'While we were waiting for boarding, the gate changed.',
        'While we waited for boarding, the gate was changing.',
        'While we are waiting, the gate changed.',
        'While we was waiting, the gate changed.'
      ],
      correctAnswer: 'While we were waiting for boarding, the gate changed.',
      explanation: 'Use "While + were waiting" (continuous background) and "changed" (past simple event).'
    },
    {
      id: 'ex_u08_l109_p2',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the correct uncountable noun:',
      sourceSentence: 'The airline staff helped me track my missing _____.',
      targetSentence: 'The airline staff helped me track my missing luggage.',
      options: [
        { id: '1', text: 'luggage', isCorrect: true },
        { id: '2', text: 'luggages', isCorrect: false },
        { id: '3', text: 'a luggage', isCorrect: false },
        { id: '4', text: 'baggage items count', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l109_p3',
      type: 'word_ordering',
      prompt: 'Order the words to describe a missed transit connection:',
      targetSentence: 'Because of the delay we missed our connecting flight to Rome',
      wordBank: ['Because', 'of', 'the', 'delay', 'we', 'missed', 'our', 'connecting', 'flight', 'to', 'Rome']
    },
    {
      id: 'ex_u08_l109_p4',
      type: 'error_correction',
      prompt: 'Correct the preposition error in this travel sentence:',
      sourceSentence: 'We finally arrived to Tokyo after a twelve-hour direct flight.',
      targetSentence: 'We finally arrived in Tokyo after a twelve-hour direct flight.',
      explanation: 'Always use "arrive in" for cities and countries, not "arrive to".'
    },
    {
      id: 'ex_u08_l109_p5',
      type: 'translation',
      prompt: 'Translate into English: "जब मैं अपनी कॉफी पी रहा था, तभी घोषणा हुई।"',
      sourceSentence: 'जब मैं अपनी कॉफी पी रहा था, तभी घोषणा हुई।',
      targetSentence: 'While I was drinking my coffee, the announcement was made.',
      wordBank: ['While', 'I', 'was', 'drinking', 'my', 'coffee', 'the', 'announcement', 'was', 'made']
    },
    {
      id: 'ex_u08_l109_p6',
      type: 'match_pairs',
      prompt: 'Match travel terms with their definitions:',
      options: [
        { id: 'm1', text: 'Connecting flight' },
        { id: 'm1_m', text: 'Transfer between planes / कनेक्टिंग फ्लाइट' },
        { id: 'm2', text: 'Boarding pass' },
        { id: 'm2_m', text: 'Document to board plane / बोर्डिंग पास' },
        { id: 'm3', text: 'Compensation' },
        { id: 'm3_m', text: 'Money for delay / मुआवजा' },
        { id: 'm4', text: 'Turbulence' },
        { id: 'm4_m', text: 'Rough air movement / टर्बुलेंस' }
      ]
    },
    {
      id: 'ex_u08_l109_p7',
      type: 'listening',
      prompt: 'Listen to the airport announcement:',
      audioText: 'Attention passengers on flight 305: your departure gate has moved to Terminal 2, Gate B14.',
      targetSentence: 'Attention passengers on flight 305: your departure gate has moved to Terminal 2, Gate B14.',
      options: [
        { id: '1', text: 'Gate changed to Terminal 2, Gate B14', isCorrect: true },
        { id: '2', text: 'Flight cancelled until tomorrow', isCorrect: false },
        { id: '3', text: 'Free meals served at Gate A1', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l109_p8',
      type: 'speaking',
      prompt: 'Speak this complaint clearly into your microphone:',
      targetSentence: 'Our train was delayed by two hours due to severe weather conditions.',
      audioText: 'Our train was delayed by two hours due to severe weather conditions.'
    },
    {
      id: 'ex_u08_l109_p9',
      type: 'dialogue_completion',
      prompt: 'Complete the response at the customer help desk:',
      sourceSentence: 'Passenger: My flight was cancelled. Can you rebook me on the next flight?\nAgent: _____',
      targetSentence: 'Agent: Yes, I can rebook you on the 8:00 AM flight tomorrow morning.',
      options: [
        { id: '1', text: 'Yes, I can rebook you on the 8:00 AM flight tomorrow morning.', isCorrect: true },
        { id: '2', text: 'I am not having luggage.', isCorrect: false },
        { id: '3', text: 'You arrived to the station.', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l109_p10',
      type: 'listen_and_type',
      prompt: 'Listen and type the sentence accurately:',
      audioText: 'We arrived safe and sound after a very long journey.',
      targetSentence: 'We arrived safe and sound after a very long journey.',
      wordBank: ['We', 'arrived', 'safe', 'and', 'sound', 'after', 'a', 'very', 'long', 'journey']
    }
  ],
  review: [
    {
      id: 'ex_u08_l109_r1',
      type: 'multiple_choice',
      prompt: 'Choose the correct sequence of verb tenses:',
      question: 'Choose the correct sequence of verb tenses:',
      options: [
        'He was sleeping on the plane when the pilot spoke.',
        'He slept on the plane when the pilot was speaking.',
        'He was sleeping when the pilot was spoke.',
        'He had slept while the pilot spoke.'
      ],
      correctAnswer: 'He was sleeping on the plane when the pilot spoke.',
      explanation: '"Was sleeping" sets the ongoing background; "spoke" is the interrupting action.'
    },
    {
      id: 'ex_u08_l109_r2',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the correct term for being stranded:',
      sourceSentence: 'Due to the snowstorm, hundreds of passengers were _____ at the airport.',
      targetSentence: 'Due to the snowstorm, hundreds of passengers were stranded at the airport.',
      options: [
        { id: '1', text: 'stranded', isCorrect: true },
        { id: '2', text: 'straightforward', isCorrect: false },
        { id: '3', text: 'turbulent', isCorrect: false },
        { id: '4', text: 'customs', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l109_r3',
      type: 'word_ordering',
      prompt: 'Assemble the sentence reporting missing property:',
      targetSentence: 'I filed a lost luggage report at the airline customer desk',
      wordBank: ['I', 'filed', 'a', 'lost', 'luggage', 'report', 'at', 'the', 'airline', 'customer', 'desk']
    },
    {
      id: 'ex_u08_l109_r4',
      type: 'error_correction',
      prompt: 'Fix the error in this past narrative:',
      sourceSentence: 'The flight was delay because bad weather conditions.',
      targetSentence: 'The flight was delayed because of bad weather conditions.',
      explanation: 'Use the adjective "delayed" and include "of" after "because".'
    },
    {
      id: 'ex_u08_l109_r5',
      type: 'translation',
      prompt: 'Translate into English: "जब हम सुरक्षा जांच से गुजर रहे थे, तो मुझे अपना टिकट नहीं मिला।"',
      sourceSentence: 'जब हम सुरक्षा जांच से गुजर रहे थे, तो मुझे अपना टिकट नहीं मिला।',
      targetSentence: 'While we were going through security, I could not find my ticket.',
      wordBank: ['While', 'we', 'were', 'going', 'through', 'security', 'I', 'could', 'not', 'find', 'my', 'ticket']
    },
    {
      id: 'ex_u08_l109_r6',
      type: 'speaking',
      prompt: 'Speak this sentence with clear expression:',
      targetSentence: 'The airline provided a food voucher and hotel accommodation.',
      audioText: 'The airline provided a food voucher and hotel accommodation.'
    },
    {
      id: 'ex_u08_l109_r7',
      type: 'recognition',
      prompt: 'Identify the purpose of a boarding pass:',
      question: 'What is the primary function of a boarding pass?',
      options: ['Permission to enter the plane', 'Receipt for shopping at duty-free'],
      correctAnswer: 'Permission to enter the plane',
      explanation: 'A boarding pass authorizes a passenger to board a specific flight.'
    },
    {
      id: 'ex_u08_l109_r8',
      type: 'fill_blank',
      prompt: 'Choose the appropriate connector:',
      sourceSentence: 'First we checked in our bags, and _____ we proceeded to the departure gate.',
      targetSentence: 'First we checked in our bags, and then we proceeded to the departure gate.',
      options: [
        { id: '1', text: 'then', isCorrect: true },
        { id: '2', text: 'while', isCorrect: false },
        { id: '3', text: 'during', isCorrect: false },
        { id: '4', text: 'because', isCorrect: false }
      ]
    }
  ],
  assessment: [
    {
      id: 'ex_u08_l109_a1',
      type: 'multiple_choice',
      prompt: 'Choose the sentence that correctly combines Past Continuous and Past Simple:',
      question: 'Choose the sentence that correctly combines Past Continuous and Past Simple:',
      options: [
        'While I was walking to the gate, I heard the final boarding call.',
        'While I walked to the gate, I was hearing the final call.',
        'When I was walking, I was hearing the call.',
        'I walked to the gate while I heard the call.'
      ],
      correctAnswer: 'While I was walking to the gate, I heard the final boarding call.',
      explanation: '"While + was walking" sets the duration; "heard" is the single event.'
    },
    {
      id: 'ex_u08_l109_a2',
      type: 'word_ordering',
      prompt: 'Construct the assessment statement:',
      targetSentence: 'We requested compensation for our cancelled international flight',
      wordBank: ['We', 'requested', 'compensation', 'for', 'our', 'cancelled', 'international', 'flight']
    },
    {
      id: 'ex_u08_l109_a3',
      type: 'fill_blank',
      prompt: 'Complete with the right transit term:',
      sourceSentence: 'The hotel operates a complimentary _____ to and from the airport terminal.',
      targetSentence: 'The hotel operates a complimentary shuttle to and from the airport terminal.',
      options: [
        { id: '1', text: 'shuttle', isCorrect: true },
        { id: '2', text: 'turbulence', isCorrect: false },
        { id: '3', text: 'customs', isCorrect: false },
        { id: '4', text: 'itinerary', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l109_a4',
      type: 'translation',
      prompt: 'Translate into English: "हमारी उड़ान में तीन घंटे की देरी हुई, लेकिन हम सुरक्षित पहुँच गए।"',
      sourceSentence: 'हमारी उड़ान में तीन घंटे की देरी हुई, लेकिन हम सुरक्षित पहुँच गए।',
      targetSentence: 'Our flight was delayed by three hours, but we arrived safe and sound.',
      wordBank: ['Our', 'flight', 'was', 'delayed', 'by', 'three', 'hours', 'but', 'we', 'arrived', 'safe', 'and', 'sound']
    },
    {
      id: 'ex_u08_l109_a5',
      type: 'error_correction',
      prompt: 'Find and fix the error in the sentence:',
      sourceSentence: 'I have three luggages with me on this train journey.',
      targetSentence: 'I have three pieces of luggage with me on this train journey.',
      explanation: 'Count luggage with "pieces of luggage", not "luggages".'
    },
    {
      id: 'ex_u08_l109_a6',
      type: 'listening',
      prompt: 'Listen to the travel experience and answer the question:',
      audioText: 'While we were driving through the mountains, our car broke down, so we called roadside assistance.',
      targetSentence: 'While we were driving through the mountains, our car broke down, so we called roadside assistance.',
      options: [
        { id: '1', text: 'The car broke down in the mountains', isCorrect: true },
        { id: '2', text: 'They bought a new car on the spot', isCorrect: false },
        { id: '3', text: 'The flight arrived ahead of time', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l109_a7',
      type: 'speaking',
      prompt: 'Speak this mastery sentence clearly:',
      targetSentence: 'While we were waiting for the train, we met an old friend from university.',
      audioText: 'While we were waiting for the train, we met an old friend from university.'
    },
    {
      id: 'ex_u08_l109_a8',
      type: 'personal_production',
      prompt: 'Write a short story about a time your travel plan was delayed or changed:',
      targetSentence: 'While I was traveling to London last year, my flight was delayed due to heavy rain, so I spent three hours reading at the gate.'
    }
  ]
};

// =========================================================================
// LESSON 110: Making Recommendations, Suggestions & Giving Friendly Advice
// =========================================================================
export const LESSON_110_CONFIG: LessonConfigA2 = {
  num: 110,
  title: 'Making Recommendations, Suggestions & Giving Friendly Advice',
  icon: '💡',
  estMin: 25,
  objTitle: 'Offering Suggestions, Recommending Experiences & Giving Practical Advice',
  objDesc: 'Learn to suggest activities, recommend restaurants, tourist spots, and give friendly advice using modals (should, shouldn\'t, ought to) and suggestions (Why don\'t you..., How about + -ing).',
  objHi: 'सुझाव देना, गतिविधियों व स्थानों की सिफारिश करना और मित्रवत सलाह देना सीखें।',
  objEs: 'Hacer sugerencias, recomendar lugares y dar consejos amistosos usando should, shouldn\'t, Why don\'t you y How about + -ing.',
  canDo: [
    'I can recommend local restaurants, museums, and attractions to visitors.',
    'I can give friendly advice using "You should / shouldn\'t" and "Why don\'t you...".',
    'I can make interactive suggestions with "How about + Verb-ing" and "Let\'s + Verb".',
    'I can respond politely to suggestions by accepting or offering alternatives.'
  ],
  canDoHi: [
    'मैं आगंतुकों को स्थानीय रेस्तरां, संग्रहालयों और आकर्षणों की सिफारिश कर सकता हूँ।',
    'मैं "You should / shouldn\'t" और "Why don\'t you..." का उपयोग करके सलाह दे सकता हूँ।',
    'मैं "How about + -ing" और "Let\'s..." के साथ सुझाव दे सकता हूँ।',
    'मैं सुझावों को विनम्रता से स्वीकार या वैकल्पिक विचार प्रस्तुत कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo recomendar restaurantes locales, museos y atracciones a visitantes.',
    'Puedo dar consejos amistosos usando "You should / shouldn\'t" y "Why don\'t you...".',
    'Puedo hacer sugerencias con "How about + gerundio" y "Let\'s + verbo".',
    'Puedo responder educadamente aceptando o proponiendo alternativas.'
  ],
  vocab: [
    { w: 'recommend', p: '/ˌrekəˈmend/', m: 'suggest something as being good or suitable for a particular purpose', hi: 'सिफारिश करना / सुझाव देना', es: 'recomendar', fr: 'recommander', de: 'empfehlen', pt: 'recomendar', zh: '推荐', ar: 'يوصي بـ', ja: '勧める', ru: 'рекомендовать', ex: 'I highly recommend trying the seafood pasta at this restaurant.', exHi: 'मैं इस रेस्तरां में सीफूड पास्ता आजमाने की अत्यधिक सिफारिश करता हूँ।', exEs: 'Recomiendo mucho probar la pasta de mariscos aquí.', ic: '⭐' },
    { w: 'suggestion', p: '/səˈdʒestʃən/', m: 'an idea or plan put forward for consideration', hi: 'सुझाव / राय', es: 'sugerencia / propuesta', fr: 'suggestion', de: 'Vorschlag', pt: 'sugestão', zh: '建议', ar: 'اقتراح', ja: '提案', ru: 'предложение', ex: 'Do you have any suggestions for a good weekend day trip?', exHi: 'क्या आपके पास सप्ताहांत की अच्छी एक दिवसीय यात्रा के लिए कोई सुझाव है?', exEs: '¿Tienes alguna sugerencia para una excursión de fin de semana?', ic: '💭' },
    { w: 'worth', p: '/wɜːθ/', m: 'sufficiently rewarding, valuable, or interesting to justify doing', hi: 'लायक / उपयोगी (करने योग्य)', es: 'que vale la pena', fr: 'valoir la peine', de: 'wert sein', pt: 'valer a pena', zh: '值得的', ar: 'يستحق', ja: '価値がある', ru: 'стоящий', ex: 'The national art museum is definitely worth visiting.', exHi: 'राष्ट्रीय कला संग्रहालय निश्चित रूप से देखने लायक है।', exEs: 'El museo de arte nacional definitivamente vale la pena visitar.', ic: '💎' },
    { w: 'must-see', p: '/ˈmʌst siː/', m: 'something that is so good or important that everyone should see it', hi: 'अवश्य देखने योग्य', es: 'imprescindible de ver', fr: 'incontournable', de: 'ein Muss', pt: 'imperdível', zh: '必看的', ar: 'يجب رؤيته', ja: '必見の', ru: 'обязательный к просмотру', ex: 'The sunset from the castle hill is a must-see attraction.', exHi: 'महल की पहाड़ी से सूर्यास्त का दृश्य अवश्य देखने योग्य आकर्षण है।', exEs: 'El atardecer desde la colina del castillo es imperdible.', ic: '👀' },
    { w: 'advice', p: '/ədˈvaɪs/', m: 'guidance or recommendations offered with regard to prudent future action', hi: 'सलाह / परामर्श', es: 'consejo', fr: 'conseil', de: 'Rat / Ratschlag', pt: 'conselho', zh: '建议 / 忠告', ar: 'نصيحة', ja: '助言', ru: 'совет', ex: 'Thank you for your helpful advice on learning English.', exHi: 'अंग्रेजी सीखने पर आपकी उपयोगी सलाह के लिए धन्यवाद।', exEs: 'Gracias por tu útil consejo sobre aprender inglés.', ic: '🗣️' },
    { w: 'option', p: '/ˈɒpʃn/', m: 'a thing that is or may be chosen', hi: 'विकल्प', es: 'opción', fr: 'option / choix', de: 'Option / Auswahl', pt: 'opção', zh: '选择', ar: 'خيار', ja: '選択肢', ru: 'вариант', ex: 'We have several good options for dinner tonight.', exHi: 'आज रात के खाने के लिए हमारे पास कई अच्छे विकल्प हैं।', exEs: 'Tenemos varias buenas opciones para cenar hoy.', ic: '🔀' },
    { w: 'tip', p: '/tɪp/', m: 'a small piece of practical information or advice', hi: 'नुस्खा / व्यावहारिक सुझाव', es: 'consejo práctico / tip', fr: 'astuce / conseil', de: 'Tipp', pt: 'dica', zh: '小窍门 / 提示', ar: 'نصيحة سريعة', ja: 'コツ / 助言', ru: 'полезный совет', ex: 'Here is a useful tip: book museum tickets online to skip queues.', exHi: 'यहाँ एक उपयोगी सुझाव है: कतारों से बचने के लिए संग्रहालय के टिकट ऑनलाइन बुक करें।', exEs: 'Un consejo útil: reserva las entradas online para evitar colas.', ic: '💡' },
    { w: 'atmosphere', p: '/ˈætməsfɪər/', m: 'the pervading tone or mood of a place, situation, or work of art', hi: 'माहौल / वातावरण', es: 'ambiente / atmósfera', fr: 'ambiance', de: 'Atmosphäre', pt: 'ambiente', zh: '氛围', ar: 'أجواء', ja: '雰囲気', ru: 'атмосфера', ex: 'This traditional cafe has a warm and relaxing atmosphere.', exHi: 'इस पारंपरिक कैफे में एक गर्मजोशी भरा और आरामदायक माहौल है।', exEs: 'Este café tradicional tiene un ambiente cálido y relajante.', ic: '☕' },
    { w: 'authentic', p: '/ɔːˈθentɪk/', m: 'of undisputed origin; genuine and traditional', hi: 'प्रामाणिक / असली', es: 'auténtico', fr: 'authentique', de: 'authentisch', pt: 'autêntico', zh: '正宗的', ar: 'أصيل', ja: '本格的な', ru: 'подлинный / аутентичный', ex: 'If you want authentic Italian pizza, go to Luigi\'s.', exHi: 'यदि आप असली इतालवी पिज्जा चाहते हैं, तो लुइगी के यहाँ जाएँ।', exEs: 'Si quieres auténtica pizza italiana, ve a Luigi\'s.', ic: '🍕' },
    { w: 'scenery', p: '/ˈsiːnəri/', m: 'the natural features of a landscape considered in terms of their appearance', hi: 'प्राकृतिक दृश्य / नजारे', es: 'paisaje', fr: 'paysage', de: 'Landschaft', pt: 'cenário / paisagem', zh: '风景', ar: 'مناظر طبيعية', ja: '景色', ru: 'пейзаж', ex: 'The mountain train ride offers breathtaking scenery.', exHi: 'पहाड़ी ट्रेन की सवारी मनमोहक प्राकृतिक दृश्य प्रदान करती है।', exEs: 'El viaje en tren por la montaña ofrece un paisaje impresionante.', ic: '🏞️' },
    { w: 'lively', p: '/ˈlaɪvli/', m: 'full of life and energy; active and outgoing', hi: 'जीवंत / चहल-पहल भरा', es: 'animado / lleno de vida', fr: 'animé', de: 'lebhaft', pt: 'animado', zh: '热闹的', ar: 'مفعم بالحيوية', ja: '活気のある', ru: 'оживленный', ex: 'The downtown night market is always very lively.', exHi: 'शहर का रात का बाजार हमेशा बहुत चहल-पहल भरा रहता है।', exEs: 'El mercado nocturno del centro siempre está muy animado.', ic: '🏮' },
    { w: 'cozy', p: '/ˈkəʊzi/', m: 'giving a feeling of comfort, warmth, and relaxation', hi: 'आरामदेह / सुखद', es: 'acogedor', fr: 'chaleureux / douillet', de: 'gemütlich', pt: 'aconchegante', zh: '温馨舒适的', ar: 'مريح ودافئ', ja: '居心地の良い', ru: 'уютный', ex: 'We found a cozy corner bookstore with hot tea.', exHi: 'हमें गर्म चाय वाली एक आरामदायक कोने की किताबों की दुकान मिली।', exEs: 'Encontramos una acogedora librería con té caliente.', ic: '🛋️' },
    { w: 'overrated', p: '/ˌəʊvəˈreɪtɪd/', m: 'rated or valued too highly; not as good as people claim', hi: 'अतिरंजित / अपेक्षा से कमतर', es: 'sobrevalorado', fr: 'surévalué', de: 'überbewertet', pt: 'superestimado', zh: '被高估的', ar: 'مبالغ في تقديره', ja: '過大評価された', ru: 'переоцененный', ex: 'In my opinion, that expensive restaurant is completely overrated.', exHi: 'मेरी राय में, वह महंगा रेस्तरां पूरी तरह से जरूरत से ज्यादा सराहा गया है।', exEs: 'En mi opinión, ese restaurante caro está muy sobrevalorado.', ic: '👎' },
    { w: 'affordable', p: '/əˈfɔːdəbl/', m: 'inexpensive; reasonably priced', hi: 'सस्ता / किफायती', es: 'asequible / económico', fr: 'abordable', de: 'erschwinglich', pt: 'acessível / barato', zh: '价格合理的', ar: 'بأسعار معقولة', ja: '手頃な価格の', ru: 'доступный по цене', ex: 'The local market serves delicious and affordable street food.', exHi: 'स्थानीय बाजार में स्वादिष्ट और किफायती स्ट्रीट फूड मिलता है।', exEs: 'El mercado local ofrece comida callejera deliciosa y asequible.', ic: '🏷️' },
    { w: 'guided tour', p: '/ˌɡaɪdɪd ˈtʊər/', m: 'a tour of a historic site led by an expert guide', hi: 'गाइडेड टूर / मार्गदर्शक के साथ भ्रमण', es: 'visita guiada', fr: 'visite guidée', de: 'geführte Tour', pt: 'visita guiada', zh: '有导游的游览', ar: 'جولة مع مرشد', ja: 'ガイド付きツアー', ru: 'экскурсия с гидом', ex: 'I suggest booking a guided tour of the historic fortress.', exHi: 'मैं ऐतिहासिक किले के गाइडेड टूर को बुक करने का सुझाव देता हूँ।', exEs: 'Sugiero reservar una visita guiada de la fortaleza.', ic: '🚩' },
    { w: 'souvenir', p: '/ˌsuːvəˈnɪər/', m: 'a thing kept as a reminder of a person, place, or event', hi: 'स्मृति चिन्ह / यादगार वस्तु', es: 'recuerdo / souvenir', fr: 'souvenir', de: 'Souvenir', pt: 'lembrança / souvenir', zh: '纪念品', ar: 'تذكار', ja: 'お土産', ru: 'сувенир', ex: 'I bought handmade ceramic bowls as a souvenir of my trip.', exHi: 'मैंने अपनी यात्रा के स्मृति चिन्ह के रूप में हस्तनिर्मित सिरेमिक कटोरे खरीदे।', exEs: 'Compré cuencos de cerámica como recuerdo de mi viaje.', ic: '🏺' },
    { w: 'hidden gem', p: '/ˌhɪdn ˈdʒem/', m: 'something wonderful that is not widely known', hi: 'अनोखी/छुपी हुई बेहतरीन जगह', es: 'joya oculta', fr: 'perle rare', de: 'Geheimtipp', pt: 'joia escondida', zh: '隐秘宝藏地点', ar: 'جوهرة مخفية', ja: '隠れた名所', ru: 'скрытая жемчужина', ex: 'This quiet rooftop cafe is a real hidden gem in the city.', exHi: 'यह शांत रूफटॉप कैफे शहर में वास्तव में एक छुपा हुआ रत्न है।', exEs: 'Este café en la azotea es una verdadera joya oculta.', ic: '💎' },
    { w: 'heritage', p: '/ˈherɪtɪdʒ/', m: 'property, traditions, or culture inherited from past generations', hi: 'विरासत / धरोहर', es: 'patrimonio / herencia', fr: 'patrimoine', de: 'Kulturerbe', pt: 'patrimônio', zh: '文化遗产', ar: 'تراث', ja: '遺産', ru: 'наследие', ex: 'The city center is recognized as a world heritage site.', exHi: 'शहर के केंद्र को विश्व धरोहर स्थल के रूप में मान्यता प्राप्त है।', exEs: 'El centro histórico es reconocido como patrimonio mundial.', ic: '🏛️' },
    { w: 'specialty', p: '/ˈspeʃəlti/', m: 'a product, especially food, that a place is famous for', hi: 'खासियत / विशिष्ट व्यंजन', es: 'especialidad', fr: 'spécialité', de: 'Spezialität', pt: 'especialidade', zh: '招牌特产', ar: 'تخصص / طبق مميز', ja: '名物', ru: 'фирменное блюдо / специальность', ex: 'Mango pudding is the chef\'s house specialty.', exHi: 'आम का हलवा शेफ का खास व्यंजन है।', exEs: 'El pudín de mango es la especialidad de la casa.', ic: '🍮' },
    { w: 'convenient', p: '/kənˈviːniənt/', m: 'fitting in well with a person\'s needs, activities, and plans', hi: 'सुविधाजनक', es: 'conveniente / cómodo', fr: 'pratique', de: 'bequem / praktisch', pt: 'conveniente', zh: '方便的', ar: 'مريح ومناسب', ja: '便利な', ru: 'удобный', ex: 'Taking the metro is the most convenient way to explore.', exHi: 'मेट्रो लेना घूमने का सबसे सुविधाजनक तरीका है।', exEs: 'Tomar el metro es la forma más conveniente de explorar.', ic: '🚇' }
  ],
  chunks: [
    { phrase: 'why don\'t you', meaning: 'polite suggestion formula', hi: 'आप क्यों नहीं करते... (सुझाव)', es: '¿por qué no...?', fr: 'pourquoi ne pas...?', de: 'warum machst du nicht...?', pt: 'por que você não...?', zh: '你为什么不...', ar: 'لمَ لا...', ja: '〜してみてはどうですか？', ru: 'почему бы вам не...', note: 'Followed by bare infinitive: "Why don\'t you visit the museum?"', ic: '💡' },
    { phrase: 'how about + verb-ing', meaning: 'interactive collaborative suggestion', hi: 'कैसा रहेगा अगर हम... करें', es: '¿qué tal si...?', fr: 'que dirais-tu de...?', de: 'wie wäre es mit...?', pt: 'que tal...?', zh: '做...怎么样？', ar: 'ما رأيك في...', ja: '〜するのはどうですか？', ru: 'как насчет того, чтобы...', note: 'Followed by gerund: "How about having dinner by the river?"', ic: '🍽️' },
    { phrase: 'you definitely should', meaning: 'strong positive recommendation', hi: 'आपको निश्चित रूप से... करना चाहिए', es: 'definitivamente deberías', fr: 'tu devrais absolument', de: 'du solltest unbedingt', pt: 'você definitivamente deveria', zh: '你一定要...', ar: 'عليك بالتأكيد أن...', ja: '絶対に〜すべきです', ru: 'вам определенно стоит...', note: 'Modifies modal "should" with adverb for enthusiasm.', ic: '⭐' },
    { phrase: 'it is well worth visiting', meaning: 'the experience justifies the time and effort', hi: 'यह अवश्य देखने लायक है', es: 'vale mucho la pena visitarlo', fr: 'cela vaut vraiment le détour', de: 'es lohnt sich sehr zu besuchen', pt: 'vale muito a pena visitar', zh: '非常值得一去', ar: 'يستحق الزيارة جداً', ja: '訪れる価値が十分にある', ru: 'это определенно стоит посетить', note: '"Worth" is followed by a gerund (-ing).', ic: '🏛️' },
    { phrase: 'if I were you, I would', meaning: 'giving advice from one\'s own perspective', hi: 'अगर मैं आपकी जगह होता, तो मैं...', es: 'si yo fuera tú, yo...', fr: 'si j\'étais toi, je...', de: 'wenn ich du wäre, würde ich...', pt: 'se eu fosse você, eu...', zh: '如果我是你，我会...', ar: 'لو كنت مكانك لـ...', ja: 'もし私があなたなら〜します', ru: 'на вашем месте я бы...', note: 'A2 polite conditional formula for friendly advice.', ic: '🤝' },
    { phrase: 'take my advice and', meaning: 'emphatic recommendation based on experience', hi: 'मेरी सलाह मानो और...', es: 'sigue mi consejo y...', fr: 'suis mon conseil et...', de: 'nimm meinen Rat an und...', pt: 'siga meu conselho e...', zh: '听我的建议...', ar: 'خذ بنصيحتي و...', ja: '私のアドバイスを聞いて...', ru: 'послушай моего совета и...', note: 'Informal colloquial advice starter.', ic: '🗣️' },
    { phrase: 'whatever you do, don\'t', meaning: 'strong warning against a specific mistake', hi: 'चाहे कुछ भी हो, ऐसा मत करना', es: 'hagas lo que hagas, no...', fr: 'quoi que tu fasses, ne...', de: 'was auch immer du tust, bloß nicht...', pt: 'faça o que fizer, não...', zh: '无论如何都别...', ar: 'مهما فعلت، إياك أن...', ja: '何があっても〜しないで', ru: 'что бы ты ни делал, не...', note: 'Used to prevent tourist traps or common errors.', ic: '⚠️' },
    { phrase: 'that sounds like a great idea', meaning: 'enthusiastic acceptance of a suggestion', hi: 'यह बहुत बढ़िया विचार लगता है', es: 'eso suena como una gran idea', fr: 'ça a l\'air d\'une excellente idée', de: 'das klingt nach einer tollen Idee', pt: 'parece uma ótima ideia', zh: '听起来是个好主意', ar: 'تبدو فكرة رائعة', ja: '素晴らしいアイデアですね', ru: 'звучит как отличная идея', note: 'Standard polite acceptance in dialogues.', ic: '🎉' }
  ],
  grammar: {
    title: 'Modals for Advice (Should / Shouldn\'t) & Making Suggestions (Why don\'t you / How about)',
    concept: 'Formulating friendly advice with modals and making suggestions using bare infinitives and gerunds.',
    patterns: [
      {
        title: 'Giving Advice with Should / Shouldn\'t',
        structure: 'Subject + should / shouldn\'t + Bare Infinitive Verb',
        rule: 'Use "should" to express that an action is a good idea, and "shouldn\'t" for a bad idea.',
        examples: [
          { en: 'You should buy your tickets online in advance.', hi: 'आपको अपने टिकट पहले से ऑनलाइन खरीदने चाहिए।', es: 'Deberías comprar tus boletos en línea por adelantado.' },
          { en: 'You shouldn\'t carry large amounts of cash while traveling.', hi: 'यात्रा करते समय आपको बड़ी मात्रा में नकदी नहीं रखनी चाहिए।', es: 'No deberías llevar grandes cantidades de efectivo al viajar.' }
        ]
      },
      {
        title: 'Suggestions with "Why don\'t you...?" (Bare Infinitive)',
        structure: 'Why don\'t + Subject (you / we) + Bare Infinitive Verb + ?',
        rule: 'Proposes an idea in a polite question form using the base form of the verb.',
        examples: [
          { en: 'Why don\'t you try the seafood pasta at the harbor?', hi: 'आप बंदरगाह पर सीफूड पास्ता क्यों नहीं आजमाते?', es: '¿Por qué no pruebas la pasta de mariscos en el puerto?' },
          { en: 'Why don\'t we rent bicycles and ride along the beach?', hi: 'हम साइकिल किराए पर लेकर समुद्र तट पर क्यों नहीं चलते?', es: '¿Por qué no alquilamos bicicletas y paseamos por la playa?' }
        ]
      },
      {
        title: 'Suggestions with "How about / What about + -ing"',
        structure: 'How about / What about + Verb-ing / Noun + ?',
        rule: 'Always use a gerund (-ing) after "How about" or "What about" when proposing an activity.',
        examples: [
          { en: 'How about having lunch at that cozy Italian cafe?', hi: 'उस आरामदायक इतालवी कैफे में दोपहर का भोजन करने के बारे में क्या ख्याल है?', es: '¿Qué tal si almorzamos en ese acogedor café italiano?' },
          { en: 'What about visiting the botanical gardens this afternoon?', hi: 'आज दोपहर बॉटनिकल गार्डन देखने के बारे में क्या विचार है?', es: '¿Qué tal visitar los jardines botánicos esta tarde?' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'How about to visit the museum today?',
      cor: 'How about visiting the museum today?',
      exp: '"How about" must be followed by a gerund (-ing), never a to-infinitive.',
      hi: '"How about" के बाद Verb-ing (visiting) आता है, "to visit" गलत है।'
    },
    {
      inc: 'You should to carry an umbrella.',
      cor: 'You should carry an umbrella.',
      exp: 'Modal verbs like "should" are followed by the bare infinitive without "to".',
      hi: 'Modal "should" के बाद "to" नहीं लगता: "should carry"।'
    },
    {
      inc: 'She gave me many good advices.',
      cor: 'She gave me a lot of good advice.',
      exp: '"Advice" is uncountable; it never takes a plural "s". Use "pieces of advice" or "a lot of advice".',
      hi: '"Advice" uncountable noun है, इसमें "s" (advices) नहीं लगता।'
    },
    {
      inc: 'Why don\'t you trying the local tea?',
      cor: 'Why don\'t you try the local tea?',
      exp: '"Why don\'t you" is followed by the bare base form (try), not the -ing form.',
      hi: '"Why don\'t you" के बाद base verb (try) आता है।'
    },
    {
      inc: 'The palace is worth to see.',
      cor: 'The palace is worth seeing.',
      exp: '"Worth" is followed by a gerund (-ing): "worth seeing" or "worth visiting".',
      hi: '"Worth" के बाद gerund (-ing) आता है: "worth seeing"।'
    }
  ],
  dialogues: [
    {
      title: 'Planning Sightseeing in the City',
      context: 'Chloe asks her local friend Farhan for recommendations on spending a free Saturday.',
      charA: { name: 'Chloe', av: '👩', role: 'Tourist' },
      charB: { name: 'Farhan', av: '👨', role: 'Local Resident' },
      turns: [
        { spk: 'Chloe', text: 'Farhan, I have a free Saturday in town. What do you recommend I see first?', hi: 'फरहान, मेरे पास शहर में एक खाली शनिवार है। आप सबसे पहले क्या देखने की सलाह देते हैं?', es: 'Farhan, tengo un sábado libre. ¿Qué me recomiendas ver primero?' },
        { spk: 'Farhan', text: 'You definitely should visit the old palace in the morning. The architecture and gardens are stunning.', hi: 'आपको निश्चित रूप से सुबह पुराने महल का दौरा करना चाहिए। वास्तुकला और बगीचे शानदार हैं।', es: 'Definitivamente deberías visitar el palacio antiguo por la mañana. Los jardines son increíbles.' },
        { spk: 'Chloe', text: 'That sounds lovely! And where should I go for lunch afterward?', hi: 'यह बहुत अच्छा लगता है! और उसके बाद मुझे दोपहर के भोजन के लिए कहाँ जाना चाहिए?', es: '¡Suena encantador! ¿Y adónde debería ir a almorzar después?' },
        { spk: 'Farhan', text: 'Why don\'t you head to the riverside market? There is a cozy seafood spot that is a real hidden gem.', hi: 'आप नदी किनारे के बाजार में क्यों नहीं जातीं? वहाँ एक आरामदायक सीफूड की दुकान है जो सचमुच एक छुपा हुआ रत्न है।', es: '¿Por qué no vas al mercado junto al río? Hay un lugar de mariscos acogedor.' },
        { spk: 'Chloe', text: 'How about joining me for lunch if you are free?', hi: 'यदि आप खाली हैं तो मेरे साथ दोपहर के भोजन में शामिल होने के बारे में क्या ख्याल है?', es: '¿Qué tal si me acompañas a almorzar si estás libre?' },
        { spk: 'Farhan', text: 'That sounds like a great idea! I would love to. Let\'s meet outside the palace gate at noon.', hi: 'यह बहुत बढ़िया विचार है! मुझे बहुत खुशी होगी। चलो दोपहर में महल के गेट के बाहर मिलते हैं।', es: '¡Me parece una gran idea! Me encantaría. Encontrémonos afuera del palacio al mediodía.' }
      ]
    },
    {
      title: 'Giving Practical Travel Advice',
      context: 'Anita gives travel tips to Mateo before his first trip to the mountains.',
      charA: { name: 'Anita', av: '👩', role: 'Experienced Hiker' },
      charB: { name: 'Mateo', av: '👨', role: 'Beginner Traveler' },
      turns: [
        { spk: 'Mateo', text: 'Anita, do you have any tips for hiking in the national park this weekend?', hi: 'अनीता, क्या आपके पास इस सप्ताहांत राष्ट्रीय उद्यान में हाइकिंग के लिए कोई सुझाव है?', es: 'Anita, ¿tienes algún consejo para hacer senderismo en el parque este fin de semana?' },
        { spk: 'Anita', text: 'First of all, you should pack warm layers and sturdy waterproof boots. The weather changes fast.', hi: 'सबसे पहले, आपको गर्म कपड़े और मजबूत वाटरप्रूफ जूते पैक करने चाहिए। मौसम तेजी से बदलता है।', es: 'Primero, deberías empacar ropa abrigada y botas impermeables. El clima cambia rápido.' },
        { spk: 'Mateo', text: 'Good point. Should I book a guided tour or hike on my own?', hi: 'सही बात है। क्या मुझे गाइडेड टूर बुक करना चाहिए या अकेले हाइकिंग करनी चाहिए?', es: 'Buen punto. ¿Debería reservar una visita guiada o caminar por mi cuenta?' },
        { spk: 'Anita', text: 'If I were you, I would take a guided tour for the summit trail. It is much safer and very informative.', hi: 'अगर मैं आपकी जगह होती, तो मैं चोटी के रास्ते के लिए एक गाइडेड टूर लेती। यह बहुत सुरक्षित और जानकारीपूर्ण है।', es: 'Si fuera tú, tomaría una visita guiada para la cumbre. Es más seguro e informativo.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_u08_l110_p1',
      type: 'multiple_choice',
      prompt: 'Select the correct grammar for giving a suggestion with "How about":',
      question: 'Select the correct grammar for giving a suggestion with "How about":',
      options: [
        'How about visiting the art gallery this afternoon?',
        'How about to visit the art gallery this afternoon?',
        'How about visit the art gallery this afternoon?',
        'How about you to visit the art gallery?'
      ],
      correctAnswer: 'How about visiting the art gallery this afternoon?',
      explanation: '"How about" must be followed by a gerund (visiting).'
    },
    {
      id: 'ex_u08_l110_p2',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the correct modal verb:',
      sourceSentence: 'You _____ definitely try the local specialty; it is delicious!',
      targetSentence: 'You should definitely try the local specialty; it is delicious!',
      options: [
        { id: '1', text: 'should', isCorrect: true },
        { id: '2', text: 'ought', isCorrect: false },
        { id: '3', text: 'should to', isCorrect: false },
        { id: '4', text: 'must to', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l110_p3',
      type: 'word_ordering',
      prompt: 'Assemble the polite suggestion question:',
      targetSentence: 'Why don\'t you take a guided tour of the historic fortress',
      wordBank: ['Why', 'don\'t', 'you', 'take', 'a', 'guided', 'tour', 'of', 'the', 'historic', 'fortress']
    },
    {
      id: 'ex_u08_l110_p4',
      type: 'error_correction',
      prompt: 'Fix the uncountable noun error in the sentence:',
      sourceSentence: 'The tour guide gave us many useful advices about local transport.',
      targetSentence: 'The tour guide gave us a lot of useful advice about local transport.',
      explanation: '"Advice" is uncountable and never takes an "s".'
    },
    {
      id: 'ex_u08_l110_p5',
      type: 'translation',
      prompt: 'Translate into English: "यह प्राचीन महल निश्चित रूप से देखने लायक है।"',
      sourceSentence: 'यह प्राचीन महल निश्चित रूप से देखने लायक है।',
      targetSentence: 'This ancient palace is definitely worth visiting.',
      wordBank: ['This', 'ancient', 'palace', 'is', 'definitely', 'worth', 'visiting', 'to', 'visit']
    },
    {
      id: 'ex_u08_l110_p6',
      type: 'match_pairs',
      prompt: 'Match suggestion expressions with their functions:',
      options: [
        { id: 'm1', text: 'Why don\'t you...' },
        { id: 'm1_m', text: 'Bare infinitive suggestion / सुझाव' },
        { id: 'm2', text: 'How about...' },
        { id: 'm2_m', text: 'Gerund (-ing) proposal / विचार' },
        { id: 'm3', text: 'You should...' },
        { id: 'm3_m', text: 'Friendly advice modal / सलाह' },
        { id: 'm4', text: 'Hidden gem' },
        { id: 'm4_m', text: 'Unusual wonderful spot / छुपा रत्न' }
      ]
    },
    {
      id: 'ex_u08_l110_p7',
      type: 'listening',
      prompt: 'Listen to the restaurant recommendation:',
      audioText: 'If you want authentic Italian food at an affordable price, go to Luigi\'s on Green Street.',
      targetSentence: 'If you want authentic Italian food at an affordable price, go to Luigi\'s on Green Street.',
      options: [
        { id: '1', text: 'Authentic and affordable Italian food at Luigi\'s', isCorrect: true },
        { id: '2', text: 'Expensive French cuisine in the mall', isCorrect: false },
        { id: '3', text: 'Fast food burger chain', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l110_p8',
      type: 'speaking',
      prompt: 'Speak this advice clearly into your microphone:',
      targetSentence: 'If I were you, I would book the museum tickets online in advance.',
      audioText: 'If I were you, I would book the museum tickets online in advance.'
    },
    {
      id: 'ex_u08_l110_p9',
      type: 'dialogue_completion',
      prompt: 'Choose the most natural agreement response:',
      sourceSentence: 'Friend: Why don\'t we take a walk by the lake this evening?\nYou: _____',
      targetSentence: 'You: That sounds like a great idea! I would love some fresh air.',
      options: [
        { id: '1', text: 'That sounds like a great idea! I would love some fresh air.', isCorrect: true },
        { id: '2', text: 'My luggage is very broken.', isCorrect: false },
        { id: '3', text: 'I am doing new friends today.', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l110_p10',
      type: 'listen_and_type',
      prompt: 'Listen and write down the suggestion:',
      audioText: 'Why don\'t we try that new seafood restaurant tonight?',
      targetSentence: 'Why don\'t we try that new seafood restaurant tonight?',
      wordBank: ['Why', 'don\'t', 'we', 'try', 'that', 'new', 'seafood', 'restaurant', 'tonight']
    }
  ],
  review: [
    {
      id: 'ex_u08_l110_r1',
      type: 'multiple_choice',
      prompt: 'Which sentence is grammatically correct?',
      question: 'Which sentence is grammatically correct?',
      options: [
        'The botanical garden is well worth seeing.',
        'The botanical garden is well worth to see.',
        'The botanical garden is worth to be seen.',
        'The botanical garden is worth see.'
      ],
      correctAnswer: 'The botanical garden is well worth seeing.',
      explanation: '"Worth" requires a gerund (-ing): "worth seeing".'
    },
    {
      id: 'ex_u08_l110_r2',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the correct adjective:',
      sourceSentence: 'This small neighborhood bakery is a real _____ with amazing pastries.',
      targetSentence: 'This small neighborhood bakery is a real hidden gem with amazing pastries.',
      options: [
        { id: '1', text: 'hidden gem', isCorrect: true },
        { id: '2', text: 'overrated', isCorrect: false },
        { id: '3', text: 'stranded', isCorrect: false },
        { id: '4', text: 'clogged', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l110_r3',
      type: 'word_ordering',
      prompt: 'Assemble the advice sentence:',
      targetSentence: 'You shouldn\'t walk alone in dark alleys late at night',
      wordBank: ['You', 'shouldn\'t', 'walk', 'alone', 'in', 'dark', 'alleys', 'late', 'at', 'night']
    },
    {
      id: 'ex_u08_l110_r4',
      type: 'error_correction',
      prompt: 'Find and fix the infinitive error in the advice sentence:',
      sourceSentence: 'You should to bring a warm jacket for the evening boat tour.',
      targetSentence: 'You should bring a warm jacket for the evening boat tour.',
      explanation: 'Remove "to" after the modal verb "should".'
    },
    {
      id: 'ex_u08_l110_r5',
      type: 'translation',
      prompt: 'Translate into English: "अगर मैं तुम्हारी जगह होता, तो मैं ट्रेन लेता।"',
      sourceSentence: 'अगर मैं तुम्हारी जगह होता, तो मैं ट्रेन लेता।',
      targetSentence: 'If I were you, I would take the train.',
      wordBank: ['If', 'I', 'were', 'you', 'I', 'would', 'take', 'the', 'train', 'am', 'will']
    },
    {
      id: 'ex_u08_l110_r6',
      type: 'speaking',
      prompt: 'Speak this enthusiastic recommendation:',
      targetSentence: 'I highly recommend taking a guided walking tour of the historic quarter.',
      audioText: 'I highly recommend taking a guided walking tour of the historic quarter.'
    },
    {
      id: 'ex_u08_l110_r7',
      type: 'recognition',
      prompt: 'Identify whether this statement is a positive recommendation or a negative review:',
      question: '"The food was overpriced and completely overrated."',
      options: ['Negative Review', 'Positive Recommendation'],
      correctAnswer: 'Negative Review',
      explanation: '"Overpriced" and "overrated" indicate disappointment.'
    },
    {
      id: 'ex_u08_l110_r8',
      type: 'fill_blank',
      prompt: 'Choose the correct form to complete the suggestion:',
      sourceSentence: 'What about _____ a picnic in the botanical gardens on Sunday?',
      targetSentence: 'What about having a picnic in the botanical gardens on Sunday?',
      options: [
        { id: '1', text: 'having', isCorrect: true },
        { id: '2', text: 'have', isCorrect: false },
        { id: '3', text: 'to have', isCorrect: false },
        { id: '4', text: 'had', isCorrect: false }
      ]
    }
  ],
  assessment: [
    {
      id: 'ex_u08_l110_a1',
      type: 'multiple_choice',
      prompt: 'Choose the sentence with correct modal and suggestion syntax:',
      question: 'Choose the sentence with correct modal and suggestion syntax:',
      options: [
        'Why don\'t you ask the local tourist desk for a city map?',
        'Why don\'t you to ask the tourist desk for a map?',
        'Why don\'t you asking the tourist desk for a map?',
        'Why you don\'t ask the tourist desk for a map?'
      ],
      correctAnswer: 'Why don\'t you ask the local tourist desk for a city map?',
      explanation: '"Why don\'t you" is followed directly by the base verb "ask".'
    },
    {
      id: 'ex_u08_l110_a2',
      type: 'word_ordering',
      prompt: 'Construct the assessment statement:',
      targetSentence: 'The mountain view from the observation deck is a must-see',
      wordBank: ['The', 'mountain', 'view', 'from', 'the', 'observation', 'deck', 'is', 'a', 'must-see']
    },
    {
      id: 'ex_u08_l110_a3',
      type: 'fill_blank',
      prompt: 'Complete with the appropriate collocation:',
      sourceSentence: 'Whatever you do, _____ lose your passport and boarding pass.',
      targetSentence: 'Whatever you do, don\'t lose your passport and boarding pass.',
      options: [
        { id: '1', text: 'don\'t', isCorrect: true },
        { id: '2', text: 'not', isCorrect: false },
        { id: '3', text: 'no', isCorrect: false },
        { id: '4', text: 'never to', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l110_a4',
      type: 'translation',
      prompt: 'Translate into English: "आप दोपहर के भोजन के लिए उस आरामदायक कैफे को क्यों नहीं आजमाते?"',
      sourceSentence: 'आप दोपहर के भोजन के लिए उस आरामदायक कैफे को क्यों नहीं आजमाते?',
      targetSentence: 'Why don\'t you try that cozy cafe for lunch?',
      wordBank: ['Why', 'don\'t', 'you', 'try', 'that', 'cozy', 'cafe', 'for', 'lunch']
    },
    {
      id: 'ex_u08_l110_a5',
      type: 'error_correction',
      prompt: 'Find and fix the error in the sentence:',
      sourceSentence: 'How about to hire a local guide for the mountain trek?',
      targetSentence: 'How about hiring a local guide for the mountain trek?',
      explanation: 'Use the gerund "hiring" after "How about".'
    },
    {
      id: 'ex_u08_l110_a6',
      type: 'listening',
      prompt: 'Listen to the tourist recommendation:',
      audioText: 'The rooftop garden is open until sunset and offers spectacular panoramic views of the city.',
      targetSentence: 'The rooftop garden is open until sunset and offers spectacular panoramic views of the city.',
      options: [
        { id: '1', text: 'Rooftop garden offers spectacular views until sunset', isCorrect: true },
        { id: '2', text: 'The garden is closed on weekends', isCorrect: false },
        { id: '3', text: 'Tickets are only sold at midnight', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l110_a7',
      type: 'speaking',
      prompt: 'Speak this mastery advice statement clearly:',
      targetSentence: 'You should definitely visit the national park; the scenery is breathtaking.',
      audioText: 'You should definitely visit the national park; the scenery is breathtaking.'
    },
    {
      id: 'ex_u08_l110_a8',
      type: 'personal_production',
      prompt: 'Write two sentences recommending your favorite local place to a foreign tourist:',
      targetSentence: 'You should definitely visit the central park in the morning. Why don\'t you try the traditional tea at the lakeside cafe?'
    }
  ]
};

// =========================================================================
// LESSON 111: Customer Service: Polite Complaints, Faulty Items & Returns
// =========================================================================
export const LESSON_111_CONFIG: LessonConfigA2 = {
  num: 111,
  title: 'Customer Service: Polite Complaints, Faulty Items & Returns',
  icon: '🛍️',
  estMin: 25,
  objTitle: 'Managing Store Returns, Defective Products & Polite Customer Complaints',
  objDesc: 'Communicate effectively in retail and customer service situations: requesting refunds, exchanging damaged goods, and expressing dissatisfaction politely using indirect questions and formal requests.',
  objHi: 'दुकान में सामान बदलने, रिफंड मांगने और विनम्रतापूर्वक शिकायत दर्ज करने के तरीके सीखें।',
  objEs: 'Gestionar devoluciones, artículos defectuosos y quejas educadas usando preguntas indirectas y solicitudes formales.',
  canDo: [
    'I can explain that an item is faulty, damaged, or the wrong size.',
    'I can request an exchange or full refund presenting a receipt.',
    'I can use polite indirect complaint formulas like "I am afraid that..." and "I would like to speak to...".',
    'I can understand store warranty, exchange, and return policies.'
  ],
  canDoHi: [
    'मैं समझा सकता हूँ कि कोई वस्तु खराब, क्षतिग्रस्त या गलत आकार की है।',
    'मैं रसीद दिखाकर सामान बदलने या पूरे रिफंड का अनुरोध कर सकता हूँ।',
    'मैं "I am afraid that..." और "I would like to speak to..." जैसे विनम्र वाक्यांशों का उपयोग कर सकता हूँ।',
    'मैं स्टोर की वारंटी और रिटर्न नीतियों को समझ सकता हूँ।'
  ],
  canDoEs: [
    'Puedo explicar que un artículo está defectuoso, dañado o es de la talla equivocada.',
    'Puedo solicitar un cambio o reembolso completo presentando el recibo.',
    'Puedo usar fórmulas educadas como "I am afraid that..." y "I would like to speak to...".',
    'Puedo comprender las políticas de garantía y devolución de una tienda.'
  ],
  vocab: [
    { w: 'receipt', p: '/rɪˈsiːt/', m: 'a written acknowledgment that a specified article or sum of money has been received', hi: 'रसीद / बिल', es: 'recibo / comprobante', fr: 'reçu / ticket de caisse', de: 'Quittung / Kassenbon', pt: 'recibo / comprovante', zh: '收据 / 发票', ar: 'إيصال', ja: '領収書 / レシート', ru: 'чек / квитанция', ex: 'Please keep your receipt in case you need to return the shirt.', exHi: 'शर्ट वापस करने की स्थिति के लिए कृपया अपनी रसीद संभाल कर रखें।', exEs: 'Guarde su recibo por si necesita devolver la camisa.', ic: '🧾' },
    { w: 'refund', p: '/ˈriːfʌnd/', m: 'a repayment of a sum of money to a customer', hi: 'रिफंड / धनवापसी', es: 'reembolso', fr: 'remboursement', de: 'Rückerstattung', pt: 'reembolso', zh: '退款', ar: 'استرداد المبلغ', ja: '返金', ru: 'возврат денег', ex: 'Can I get a full refund to my original credit card?', exHi: 'क्या मुझे मेरे मूल क्रेडिट कार्ड पर पूरा रिफंड मिल सकता है?', exEs: '¿Puedo obtener un reembolso completo a mi tarjeta?', ic: '💳' },
    { w: 'exchange', p: '/ɪksˈtʃeɪndʒ/', m: 'give something and receive something else of the same kind in return', hi: 'अदला-बदली / बदलना', es: 'cambio / cambiar', fr: 'échange', de: 'Umtausch', pt: 'troca', zh: '更换 / 调换', ar: 'استبدال', ja: '交換', ru: 'обмен', ex: 'I would like to exchange these shoes for a larger size.', exHi: 'मैं इन जूतों को बड़े आकार के साथ बदलना चाहूँगा।', exEs: 'Me gustaría cambiar estos zapatos por una talla más grande.', ic: '🔄' },
    { w: 'faulty', p: '/ˈfɔːlti/', m: 'working badly or unreliably because of an imperfection', hi: 'खराब / दोषपूर्ण', es: 'defectuoso / fallado', fr: 'défectueux', de: 'fehlerhaft / defekt', pt: 'defeituoso', zh: '有缺陷的', ar: 'معيب / به خلل', ja: '欠陥のある', ru: 'неисправный', ex: 'The blender stopped working after two days because of a faulty motor.', exHi: 'खराब मोटर के कारण ब्लेंडर दो दिनों के बाद बंद हो गया।', exEs: 'La licuadora dejó de funcionar por un motor defectuoso.', ic: '⚡' },
    { w: 'damaged', p: '/ˈdæmɪdʒd/', m: 'inflicted with physical harm that impairs its value or usefulness', hi: 'क्षतिग्रस्त / टूटा हुआ', es: 'dañado / estropeado', fr: 'endommagé', de: 'beschädigt', pt: 'danificado', zh: '损坏的', ar: 'تالف', ja: '破損した', ru: 'поврежденный', ex: 'The box was crushed and the ceramic cup inside was damaged.', exHi: 'डिब्बा कुचला हुआ था और अंदर का सिरेमिक कप क्षतिग्रस्त हो गया था।', exEs: 'La caja estaba aplastada y la taza estaba dañada.', ic: '📦' },
    { w: 'defective', p: '/dɪˈfektɪv/', m: 'imperfect or faulty in structure or operation', hi: 'दोषपूर्ण / ख़ामी वाला', es: 'defectuoso', fr: 'défectueux', de: 'mangelhaft', pt: 'defeituoso', zh: '有毛病的', ar: 'معطوب', ja: '不具合のある', ru: 'бракованный', ex: 'The store replaced the defective headphones free of charge.', exHi: 'स्टोर ने खराब हेडफ़ोन को मुफ्त में बदल दिया।', exEs: 'La tienda reemplazó los auriculares defectuosos sin costo.', ic: '🎧' },
    { w: 'warranty', p: '/ˈwɒrənti/', m: 'a written guarantee promising to repair or replace an article if necessary', hi: 'वारंटी / गारंटी', es: 'garantía', fr: 'garantie', de: 'Garantie', pt: 'garantia', zh: '保修 / 质保', ar: 'ضمان', ja: '保証', ru: 'гарантия', ex: 'This laptop comes with a two-year manufacturer warranty.', exHi: 'यह लैपटॉप दो साल की निर्माता वारंटी के साथ आता है।', exEs: 'Esta laptop viene con dos años de garantía.', ic: '🛡️' },
    { w: 'complaint', p: '/kəmˈpleɪnt/', m: 'a statement that something is unsatisfactory or unacceptable', hi: 'शिकायत', es: 'queja / reclamación', fr: 'réclamation / plainte', de: 'Beschwerde', pt: 'reclamação', zh: '投诉 / 申诉', ar: 'شكوى', ja: '苦情 / クレーム', ru: 'жалоба', ex: 'I want to lodge a polite complaint about the poor customer service.', exHi: 'मैं खराब ग्राहक सेवा के बारे में एक शिकायत दर्ज कराना चाहता हूँ।', exEs: 'Quiero presentar una queja formal por el mal servicio.', ic: '📝' },
    { w: 'dissatisfied', p: '/dɪsˈsætɪsfaɪd/', m: 'not content or pleased with something', hi: 'असंतोषजनक / असंतुष्ट', es: 'insatisfecho', fr: 'insatisfait', de: 'unzufrieden', pt: 'insatisfeito', zh: '不满意', ar: 'غير راضٍ', ja: '不満な', ru: 'неудовлетворенный', ex: 'The customer was very dissatisfied with the long delay.', exHi: 'ग्राहक लंबी देरी से बहुत असंतुष्ट था।', exEs: 'El cliente estaba muy insatisfecho con el retraso.', ic: '😠' },
    { w: 'manager', p: '/ˈmænɪdʒər/', m: 'a person responsible for controlling or administering an organization or store', hi: 'प्रबंधक / मैनेजर', es: 'gerente / encargado', fr: 'gérant / responsable', de: 'Geschäftsführer', pt: 'gerente', zh: '经理', ar: 'مدير', ja: '店長 / 支配人', ru: 'менеджер / управляющий', ex: 'May I please speak with the store manager regarding this issue?', exHi: 'क्या मैं इस मुद्दे के संबंध में स्टोर मैनेजर से बात कर सकता हूँ?', exEs: '¿Podría hablar con el gerente de la tienda sobre este asunto?', ic: '👔' },
    { w: 'cashier', p: '/kæˈʃɪər/', m: 'a person handling payments and receipts in a store or bank', hi: 'खजांची / कैशियर', es: 'cajero', fr: 'caissier', de: 'Kassierer', pt: 'caixa', zh: '收银员', ar: 'صراف / كاشير', ja: 'レジ係', ru: 'кассир', ex: 'The cashier scanned each item and handed me the receipt.', exHi: 'कैशियर ने प्रत्येक वस्तु को स्कैन किया और मुझे रसीद सौंप दी।', exEs: 'El cajero escaneó cada artículo y me dio el recibo.', ic: '🏷️' },
    { w: 'policy', p: '/ˈpɒləsi/', m: 'a principle or rule adopted or proposed by an organization', hi: 'नीति / नियम', es: 'política', fr: 'politique', de: 'Richtlinie / Politik', pt: 'política', zh: '政策 / 规定', ar: 'سياسة', ja: '規定 / 方針', ru: 'политика / правила', ex: 'Our return policy allows thirty days for full refunds.', exHi: 'हमारी वापसी नीति पूर्ण रिफंड के लिए तीस दिनों की अनुमति देती है।', exEs: 'Nuestra política de devoluciones permite treinta días para reembolsos.', ic: '📜' },
    { w: 'store credit', p: '/ˌstɔː ˈkredɪt/', m: 'a voucher given by a store for the value of returned goods', hi: 'स्टोर क्रेडिट (दुकान में इस्तेमाल करने योग्य रकम)', es: 'crédito en tienda / vale', fr: 'avoir en magasin', de: 'Gutschrift', pt: 'crédito na loja', zh: '店内消费额度', ar: 'رصيد متجر', ja: 'ストアクレジット', ru: 'кредит магазина / ваучер', ex: 'Without a receipt, the store only offered store credit.', exHi: 'रसीद के बिना, स्टोर ने केवल स्टोर क्रेडिट की पेशकश की।', exEs: 'Sin recibo, la tienda solo ofreció crédito en tienda.', ic: '🏪' },
    { w: 'scratch', p: '/skrætʃ/', m: 'a mark or shallow cut made by a sharp object', hi: 'खरोंच', es: 'arañazo / rayón', fr: 'rayure', de: 'Kratzer', pt: 'arranhão', zh: '划痕', ar: 'خدش', ja: '傷 / ひっかき傷', ru: 'царапина', ex: 'There is a visible scratch on the screen of this new phone.', exHi: 'इस नए फोन की स्क्रीन पर एक साफ खरोंच है।', exEs: 'Hay un rayón visible en la pantalla de este teléfono nuevo.', ic: '📱' },
    { w: 'tag', p: '/tæɡ/', m: 'a label attached to an item giving information about price or brand', hi: 'टैग / लेबल', es: 'etiqueta', fr: 'étiquette', de: 'Preisschild / Etikett', pt: 'etiqueta', zh: '吊牌 / 标签', ar: 'بطاقة السعر', ja: '値札 / タグ', ru: 'бирка / ценник', ex: 'Items must have the original price tags attached for return.', exHi: 'वापसी के लिए वस्तुओं पर मूल मूल्य टैग लगे होने चाहिए।', exEs: 'Los artículos deben tener las etiquetas originales para la devolución.', ic: '🏷️' },
    { w: 'unacceptable', p: '/ˌʌnəkˈseptəbl/', m: 'not satisfactory or allowable; intolerable', hi: 'अस्वीकार्य', es: 'inaceptable', fr: 'inacceptable', de: 'inakzeptabel', pt: 'inaceitável', zh: '不可接受的', ar: 'غير مقبول', ja: '受け入れられない', ru: 'неприемлемый', ex: 'Waiting three weeks for a simple reply is completely unacceptable.', exHi: 'एक साधारण उत्तर के लिए तीन सप्ताह का इंतजार पूरी तरह से अस्वीकार्य है।', exEs: 'Esperar tres semanas por una respuesta es inaceptable.', ic: '🚫' },
    { w: 'apologize', p: '/əˈpɒlədʒaɪz/', m: 'express regret for something that one has done wrong', hi: 'माफी मांगना', es: 'disculparse / pedir perdón', fr: 's\'excuser', de: 'sich entschuldigen', pt: 'desculpar-se', zh: '道歉', ar: 'يعتذر', ja: '謝罪する', ru: 'извиняться', ex: 'We sincerely apologize for the inconvenience caused.', exHi: 'हुई असुविधा के लिए हम ईमानदारी से क्षमा चाहते हैं।', exEs: 'Nos disculpamos sinceramente por los inconvenientes.', ic: '🙏' },
    { w: 'inconvenience', p: '/ˌɪnkənˈviːniəns/', m: 'trouble or difficulty caused to one\'s personal comfort', hi: 'असुविधा / परेशानी', es: 'inconveniente / molestia', fr: 'désagrément', de: 'Unannehmlichkeit', pt: 'inconveniência / transtorno', zh: '不便 / 麻烦', ar: 'إزعاج / مشقة', ja: '不便 / 迷惑', ru: 'неудобство', ex: 'We are sorry for any inconvenience this maintenance caused.', exHi: 'इस रखरखाव से हुई किसी भी असुविधा के लिए हमें खेद है।', exEs: 'Lamentamos cualquier molestia que este mantenimiento haya causado.', ic: '⚠️' },
    { w: 'resolution', p: '/ˌrezəˈluːʃn/', m: 'a firm decision or solution to a problem', hi: 'समाधान / हल', es: 'resolución / solución', fr: 'résolution', de: 'Lösung', pt: 'resolução / solução', zh: '解决方案', ar: 'حل المشكلة', ja: '解決', ru: 'разрешение проблемы', ex: 'We hope to reach a quick and fair resolution to your complaint.', exHi: 'हम आपकी शिकायत का त्वरित और निष्पक्ष समाधान निकालने की उम्मीद करते हैं।', exEs: 'Esperamos llegar a una solución rápida y justa.', ic: '🤝' },
    { w: 'fitting room', p: '/ˈfɪtɪŋ ruːm/', m: 'a room in a shop where one can try on clothes', hi: 'ट्रायल रूम / कपड़े पहनकर देखने का कमरा', es: 'probador', fr: 'cabine d\'essayage', de: 'Umkleidekabine', pt: 'provador', zh: '试衣间', ar: 'غرفة القياس', ja: '試着室', ru: 'примерочная', ex: 'You can try on these trousers in the fitting room over there.', exHi: 'आप वहाँ फिटिंग रूम में इन पतलूनों को पहनकर देख सकते हैं।', exEs: 'Puede probarse estos pantalones en el probador de allí.', ic: '👗' }
  ],
  chunks: [
    { phrase: 'I would like to speak to the manager', meaning: 'polite request to escalate an issue', hi: 'मैं प्रबंधक से बात करना चाहूँगा', es: 'me gustaría hablar con el gerente', fr: 'je voudrais parler au responsable', de: 'ich möchte bitte den Manager sprechen', pt: 'gostaria de falar com o gerente', zh: '我想和经理谈谈', ar: 'أود التحدث إلى المدير', ja: '店長とお話ししたいのですが', ru: 'я хотел бы поговорить с менеджером', note: 'Standard polite escalation formula in retail.', ic: '👔' },
    { phrase: 'I am afraid that', meaning: 'polite phrase introducing disappointing news or a complaint', hi: 'मुझे खेद है कि...', es: 'me temo que...', fr: 'j\'ai bien peur que...', de: 'ich fürchte, dass...', pt: 'receio que...', zh: '恐怕...', ar: 'أخشى أن...', ja: '恐れ入りますが...', ru: 'боюсь, что...', note: 'Softens a complaint or refusal diplomatically.', ic: '😟' },
    { phrase: 'could you please exchange this for', meaning: 'requesting a replacement item', hi: 'क्या आप कृपया इसे... से बदल सकते हैं?', es: '¿podría cambiar esto por...?', fr: 'pourriez-vous échanger ceci contre...?', de: 'könnten Sie das bitte umtauschen gegen...?', pt: 'você poderia trocar isso por...?', zh: '您能帮我把这个换成...吗？', ar: 'هل يمكنك استبدال هذا بـ...', ja: 'これを〜と交換していただけますか？', ru: 'не могли бы вы обменять это на...', note: 'Essential customer retail request.', ic: '🔄' },
    { phrase: 'there is a defect in', meaning: 'identifying a manufacturing flaw', hi: 'में एक ख़ामी/दोष है', es: 'hay un defecto en', fr: 'il y a un défaut dans', de: 'es gibt einen Mangel an', pt: 'há um defeito em', zh: '...存在瑕疵', ar: 'يوجد عيب في', ja: '〜に欠陥があります', ru: 'в этом есть дефект', note: 'Precise description of faulty goods.', ic: '🔍' },
    { phrase: 'as long as you have the receipt', meaning: 'conditional upon proof of purchase', hi: 'जब तक आपके पास रसीद है', es: 'siempre y cuando tenga el recibo', fr: 'tant que vous avez le ticket', de: 'solange Sie den Beleg haben', pt: 'desde que você tenha o comprovante', zh: '只要您保留了收据', ar: 'طالما لديك الإيصال', ja: 'レシートをお持ちであれば', ru: 'при условии наличия чека', note: 'Store clerk condition for returns/refunds.', ic: '🧾' },
    { phrase: 'under warranty', meaning: 'covered by manufacturer guarantee for free repair', hi: 'वारंटी के तहत', es: 'bajo garantía', fr: 'sous garantie', de: 'unter Garantie', pt: 'na garantia', zh: '在保修期内', ar: 'تحت الضمان', ja: '保証期間内である', ru: 'на гарантии', note: 'Essential for electronics and appliances.', ic: '🛡️' },
    { phrase: 'I am not satisfied with', meaning: 'polite declaration of poor quality or service', hi: 'मैं... से संतुष्ट नहीं हूँ', es: 'no estoy satisfecho con', fr: 'je ne suis pas satisfait de', de: 'ich bin nicht zufrieden mit', pt: 'não estou satisfeito com', zh: '我对...不太满意', ar: 'لست راضياً عن', ja: '〜に満足していません', ru: 'я не удовлетворен...', note: 'Direct but polite expression of customer dissatisfaction.', ic: '⚖️' },
    { phrase: 'issue a full refund', meaning: 'return all money paid to the customer', hi: 'पूरा रिफंड जारी करना', es: 'emitir un reembolso completo', fr: 'effectuer un remboursement intégral', de: 'den vollen Betrag erstatten', pt: 'emitir reembolso total', zh: '全额退款', ar: 'إصدار استرداد كامل', ja: '全額返金する', ru: 'оформить полный возврат средств', note: 'Formal retail transaction phrase.', ic: '💵' }
  ],
  grammar: {
    title: 'Polite Requests, Indirect Complaints & Conditional Return Phrases',
    concept: 'Using "I would like to...", "Could you please...", and softening expressions ("I am afraid that...") for effective customer service communication.',
    patterns: [
      {
        title: 'Polite Requests with "I would like to..." & "Could you please..."',
        structure: 'I would like + to-infinitive / Could you please + bare infinitive + ?',
        rule: 'Use conditional modals to make requests sound respectful and professional.',
        examples: [
          { en: 'I would like to return this jacket, please.', hi: 'मैं कृपया इस जैकेट को वापस करना चाहूँगा।', es: 'Me gustaría devolver esta chaqueta, por favor.' },
          { en: 'Could you please check if you have this in size medium?', hi: 'क्या आप कृपया देख सकते हैं कि क्या आपके पास यह मध्यम आकार में है?', es: '¿Podría comprobar si tiene esto en talla mediana?' }
        ]
      },
      {
        title: 'Softening Complaints with "I am afraid that..."',
        structure: 'I am afraid (that) + Clause (Subject + Verb)',
        rule: 'Use "I am afraid that" to soften bad news or politely state that an item has a defect.',
        examples: [
          { en: 'I am afraid that this coffee maker does not turn on.', hi: 'मुझे खेद है कि यह कॉफी मेकर चालू नहीं हो रहा है।', es: 'Me temo que esta cafetera no enciende.' },
          { en: 'I am afraid the zipper is broken on this bag.', hi: 'मुझे खेद है कि इस बैग की ज़िप टूटी हुई है।', es: 'Me temo que la cremallera está rota.' }
        ]
      },
      {
        title: 'Explaining Reasons with "Because" & "Due to"',
        structure: 'Subject + Verb + because + Clause / due to + Noun Phrase',
        rule: 'Provide clear reasons for returns (wrong size, defective part, missing accessories).',
        examples: [
          { en: 'I want to exchange it because it is too tight.', hi: 'मैं इसे बदलना चाहता हूँ क्योंकि यह बहुत तंग है।', es: 'Quiero cambiarlo porque me queda muy ajustado.' },
          { en: 'We cannot process a refund due to company policy without a receipt.', hi: 'हम रसीद के बिना कंपनी नीति के कारण रिफंड प्रोसेस नहीं कर सकते।', es: 'No podemos procesar un reembolso debido a la política de la empresa.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'Give me my money back immediately!',
      cor: 'Could you please issue a refund for this faulty item?',
      exp: 'Direct demands sound rude in English. Use polite modals (Could you please issue a refund).',
      hi: 'विनम्रता से बात करने के लिए "Could you please issue a refund..." का प्रयोग करें।'
    },
    {
      inc: 'I want to change this shirt to a bigger.',
      cor: 'I would like to exchange this shirt for a larger size.',
      exp: 'Use "exchange for" (not change to), and specify "a larger size" (not "a bigger").',
      hi: 'सामान बदलने के लिए "exchange for a larger size" कहें।'
    },
    {
      inc: 'The screen is having a scratch.',
      cor: 'The screen has a scratch. / There is a scratch on the screen.',
      exp: 'Use Present Simple (has/is) to describe a permanent physical defect.',
      hi: 'खरोंच जैसी स्थायी कमी के लिए "The screen has a scratch" कहें।'
    },
    {
      inc: 'I am afraid because the item is broken.',
      cor: 'I am afraid that the item is broken.',
      exp: '"I am afraid that" is an introductory polite formula; do not insert "because" after it.',
      hi: '"I am afraid that the item is broken" सही संरचना है।'
    },
    {
      inc: 'I don\'t have the recipe of the purchase.',
      cor: 'I don\'t have the receipt for the purchase.',
      exp: '"Recipe" is for cooking instructions; proof of purchase is a "receipt".',
      hi: 'दुकान की रसीद को "receipt" कहते हैं, "recipe" नहीं।'
    }
  ],
  dialogues: [
    {
      title: 'Returning a Faulty Electronic Kettle',
      context: 'Raj returns a defective electric kettle to the customer service counter.',
      charA: { name: 'Raj', av: '👨', role: 'Customer' },
      charB: { name: 'Customer Service Clerk', av: '👩‍💼', role: 'Service Desk' },
      turns: [
        { spk: 'Raj', text: 'Good morning. I would like to return this electric kettle. I bought it yesterday, but it does not heat water.', hi: 'शुभ प्रभात। मैं इस इलेक्ट्रिक केतली को वापस करना चाहूँगा। मैंने इसे कल खरीदा था, लेकिन यह पानी गर्म नहीं करती है।', es: 'Buenos días. Me gustaría devolver este hervidor eléctrico. Lo compré ayer pero no calienta agua.' },
        { spk: 'Customer Service Clerk', text: 'I am sorry for the inconvenience. Do you have the purchase receipt with you?', hi: 'असुविधा के लिए मुझे खेद है। क्या आपके पास खरीद की रसीद है?', es: 'Lamento las molestias. ¿Tiene el recibo de compra?' },
        { spk: 'Raj', text: 'Yes, here is the receipt and the original box with all the accessories.', hi: 'हाँ, यह रही रसीद और सभी सामानों के साथ मूल डिब्बा।', es: 'Sí, aquí tiene el recibo y la caja original con los accesorios.' },
        { spk: 'Customer Service Clerk', text: 'Thank you. Would you prefer an exchange for a new kettle or a full refund to your card?', hi: 'धन्यवाद। क्या आप एक नई केतली के लिए एक्सचेंज पसंद करेंगे या अपने कार्ड पर पूरा रिफंड?', es: 'Gracias. ¿Prefiere un cambio por otro nuevo o un reembolso a su tarjeta?' },
        { spk: 'Raj', text: 'I would prefer a full refund, please.', hi: 'मैं पूरा रिफंड लेना पसंद करूँगा।', es: 'Preferiría un reembolso completo, por favor.' },
        { spk: 'Customer Service Clerk', text: 'Certainly! I have processed the refund. It will appear in your account within two business days.', hi: 'निश्चित रूप से! मैंने रिफंड प्रोसेस कर दिया है। यह दो कार्यदिवसों के भीतर आपके खाते में दिखाई देगा।', es: '¡Por supuesto! He procesado el reembolso. Aparecerá en su cuenta en dos días hábiles.' }
      ]
    },
    {
      title: 'Exchanging a Shirt for the Right Size',
      context: 'Camila asks a store assistant to exchange a sweater she received as a gift.',
      charA: { name: 'Camila', av: '👩', role: 'Shopper' },
      charB: { name: 'Store Assistant', av: '👨‍💼', role: 'Sales Associate' },
      turns: [
        { spk: 'Camila', text: 'Excuse me, could you please help me? I received this sweater as a gift, but it is too small.', hi: 'माफ़ कीजिए, क्या आप कृपया मेरी मदद कर सकते हैं? मुझे यह स्वेटर उपहार में मिला था, लेकिन यह बहुत छोटा है।', es: 'Disculpe, ¿podría ayudarme? Recibí este suéter de regalo pero me queda muy pequeño.' },
        { spk: 'Store Assistant', text: 'Of course! As long as the price tags are still attached, we can exchange it for a larger size.', hi: 'बेशक! जब तक मूल्य टैग लगे हुए हैं, हम इसे बड़े आकार के लिए बदल सकते हैं।', es: '¡Claro! Mientras las etiquetas sigan puestas, podemos cambiarlo por una talla más grande.' },
        { spk: 'Camila', text: 'Yes, the tags are intact. Do you have a medium in navy blue?', hi: 'हाँ, टैग बिल्कुल सही सलामत हैं। क्या आपके पास नेवी ब्लू में मीडियम साइज है?', es: 'Sí, las etiquetas están intactas. ¿Tienen talla mediana en azul marino?' },
        { spk: 'Store Assistant', text: 'Let me check our stockroom. Yes, here is one! You can try it in the fitting room.', hi: 'मुझे स्टॉक रूम में देखने दीजिए। हाँ, यह रहा एक! आप इसे फिटिंग रूम में पहनकर देख सकती हैं।', es: 'Déjeme revisar el almacén. ¡Sí, aquí hay uno! Puede probárselo en el probador.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_u08_l111_p1',
      type: 'multiple_choice',
      prompt: 'Select the most polite way to request a store refund:',
      question: 'Select the most polite way to request a store refund:',
      options: [
        'Could you please issue a refund for this faulty item?',
        'Give me my money back right now!',
        'I am demanding refund immediately.',
        'You must refund my money today.'
      ],
      correctAnswer: 'Could you please issue a refund for this faulty item?',
      explanation: '"Could you please issue a refund..." is polite, formal, and effective in customer service.'
    },
    {
      id: 'ex_u08_l111_p2',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the correct proof of purchase word:',
      sourceSentence: 'You need to present the original _____ to claim a refund.',
      targetSentence: 'You need to present the original receipt to claim a refund.',
      options: [
        { id: '1', text: 'receipt', isCorrect: true },
        { id: '2', text: 'recipe', isCorrect: false },
        { id: '3', text: 'prescription', isCorrect: false },
        { id: '4', text: 'menu', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l111_p3',
      type: 'word_ordering',
      prompt: 'Assemble the polite complaint opening:',
      targetSentence: 'I am afraid that this electric kettle stopped working',
      wordBank: ['I', 'am', 'afraid', 'that', 'this', 'electric', 'kettle', 'stopped', 'working']
    },
    {
      id: 'ex_u08_l111_p4',
      type: 'error_correction',
      prompt: 'Fix the vocabulary confusion in this customer request:',
      sourceSentence: 'I brought the recipe so I can return these damaged headphones.',
      targetSentence: 'I brought the receipt so I can return these damaged headphones.',
      explanation: 'Use "receipt" for proof of purchase, not "recipe" (cooking instructions).'
    },
    {
      id: 'ex_u08_l111_p5',
      type: 'translation',
      prompt: 'Translate into English: "क्या मैं इस कमीज को बड़े साइज में बदल सकता हूँ?"',
      sourceSentence: 'क्या मैं इस कमीज को बड़े साइज में बदल सकता हूँ?',
      targetSentence: 'Could I exchange this shirt for a larger size?',
      wordBank: ['Could', 'I', 'exchange', 'this', 'shirt', 'for', 'a', 'larger', 'size', 'change']
    },
    {
      id: 'ex_u08_l111_p6',
      type: 'match_pairs',
      prompt: 'Match retail customer terms with their meanings:',
      options: [
        { id: 'm1', text: 'Receipt' },
        { id: 'm1_m', text: 'Proof of purchase / रसीद' },
        { id: 'm2', text: 'Refund' },
        { id: 'm2_m', text: 'Money returned / धनवापसी' },
        { id: 'm3', text: 'Exchange' },
        { id: 'm3_m', text: 'Swap for another size / बदलना' },
        { id: 'm4', text: 'Faulty' },
        { id: 'm4_m', text: 'Defective or broken / खराब' }
      ]
    },
    {
      id: 'ex_u08_l111_p7',
      type: 'listening',
      prompt: 'Listen to the store policy:',
      audioText: 'Customers may exchange unworn clothing with tags within thirty days of purchase.',
      targetSentence: 'Customers may exchange unworn clothing with tags within thirty days of purchase.',
      options: [
        { id: '1', text: 'Exchange unworn clothing with tags within 30 days', isCorrect: true },
        { id: '2', text: 'No returns or exchanges under any circumstance', isCorrect: false },
        { id: '3', text: 'Items can only be returned after one year', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l111_p8',
      type: 'speaking',
      prompt: 'Speak this polite customer request clearly:',
      targetSentence: 'I would like to speak to the store manager regarding a defective product.',
      audioText: 'I would like to speak to the store manager regarding a defective product.'
    },
    {
      id: 'ex_u08_l111_p9',
      type: 'dialogue_completion',
      prompt: 'Choose the standard retail response:',
      sourceSentence: 'Customer: This toaster does not turn on. Can I exchange it?\nClerk: _____',
      targetSentence: 'Clerk: Certainly! As long as you have the receipt, I will get you a new one.',
      options: [
        { id: '1', text: 'Certainly! As long as you have the receipt, I will get you a new one.', isCorrect: true },
        { id: '2', text: 'I am doing friends at the airport.', isCorrect: false },
        { id: '3', text: 'My flight is overbooked.', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l111_p10',
      type: 'listen_and_type',
      prompt: 'Listen and write down the store announcement:',
      audioText: 'Please keep your receipt for any returns or exchanges.',
      targetSentence: 'Please keep your receipt for any returns or exchanges.',
      wordBank: ['Please', 'keep', 'your', 'receipt', 'for', 'any', 'returns', 'or', 'exchanges']
    }
  ],
  review: [
    {
      id: 'ex_u08_l111_r1',
      type: 'multiple_choice',
      prompt: 'Which phrase is used to soften a customer complaint politely?',
      question: 'Which phrase is used to soften a customer complaint politely?',
      options: [
        'I am afraid that...',
        'I am angry that...',
        'You did bad that...',
        'Listen to me that...'
      ],
      correctAnswer: 'I am afraid that...',
      explanation: '"I am afraid that..." is the diplomatic formula to introduce a complaint or problem.'
    },
    {
      id: 'ex_u08_l111_r2',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the right preposition:',
      sourceSentence: 'This blender is still _____ warranty for another six months.',
      targetSentence: 'This blender is still under warranty for another six months.',
      options: [
        { id: '1', text: 'under', isCorrect: true },
        { id: '2', text: 'in', isCorrect: false },
        { id: '3', text: 'with', isCorrect: false },
        { id: '4', text: 'on', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l111_r3',
      type: 'word_ordering',
      prompt: 'Assemble the exchange request sentence:',
      targetSentence: 'Could you please check if this sweater is available in size small',
      wordBank: ['Could', 'you', 'please', 'check', 'if', 'this', 'sweater', 'is', 'available', 'in', 'size', 'small']
    },
    {
      id: 'ex_u08_l111_r4',
      type: 'error_correction',
      prompt: 'Fix the error in this dialogue line:',
      sourceSentence: 'I want to change this trousers to a smaller size.',
      targetSentence: 'I would like to exchange these trousers for a smaller size.',
      explanation: 'Use "exchange these trousers for" (trousers is plural).'
    },
    {
      id: 'ex_u08_l111_r5',
      type: 'translation',
      prompt: 'Translate into English: "खराब मोटर के कारण स्टोर ने पूरा रिफंड जारी किया।"',
      sourceSentence: 'खराब मोटर के कारण स्टोर ने पूरा रिफंड जारी किया।',
      targetSentence: 'The store issued a full refund due to the faulty motor.',
      wordBank: ['The', 'store', 'issued', 'a', 'full', 'refund', 'due', 'to', 'the', 'faulty', 'motor']
    },
    {
      id: 'ex_u08_l111_r6',
      type: 'speaking',
      prompt: 'Speak this sentence with polite tone:',
      targetSentence: 'I am afraid there is a defect in the zipper of this jacket.',
      audioText: 'I am afraid there is a defect in the zipper of this jacket.'
    },
    {
      id: 'ex_u08_l111_r7',
      type: 'recognition',
      prompt: 'Identify what "store credit" means in retail:',
      question: 'What is store credit?',
      options: ['A voucher to spend money at the same store', 'Cash handed back immediately'],
      correctAnswer: 'A voucher to spend money at the same store',
      explanation: 'Store credit allows the customer to purchase other items at that store.'
    },
    {
      id: 'ex_u08_l111_r8',
      type: 'fill_blank',
      prompt: 'Select the correct adjective for an intolerable service experience:',
      sourceSentence: 'Waiting three weeks for a simple replacement is completely _____.',
      targetSentence: 'Waiting three weeks for a simple replacement is completely unacceptable.',
      options: [
        { id: '1', text: 'unacceptable', isCorrect: true },
        { id: '2', text: 'authentic', isCorrect: false },
        { id: '3', text: 'convenient', isCorrect: false },
        { id: '4', text: 'lively', isCorrect: false }
      ]
    }
  ],
  assessment: [
    {
      id: 'ex_u08_l111_a1',
      type: 'multiple_choice',
      prompt: 'Choose the grammatically and diplomatically correct customer service sentence:',
      question: 'Choose the grammatically and diplomatically correct customer service sentence:',
      options: [
        'I would like to exchange this item because it is damaged.',
        'I want that you change this because broke.',
        'Change this item immediately to me.',
        'I am demanding a change of item.'
      ],
      correctAnswer: 'I would like to exchange this item because it is damaged.',
      explanation: '"I would like to exchange this item because it is damaged" uses natural polite English.'
    },
    {
      id: 'ex_u08_l111_a2',
      type: 'word_ordering',
      prompt: 'Construct the assessment statement:',
      targetSentence: 'We apologize for the inconvenience and will issue a full refund',
      wordBank: ['We', 'apologize', 'for', 'the', 'inconvenience', 'and', 'will', 'issue', 'a', 'full', 'refund']
    },
    {
      id: 'ex_u08_l111_a3',
      type: 'fill_blank',
      prompt: 'Complete with the appropriate customer service term:',
      sourceSentence: 'The screen of my new smartphone has a deep _____ right across the center.',
      targetSentence: 'The screen of my new smartphone has a deep scratch right across the center.',
      options: [
        { id: '1', text: 'scratch', isCorrect: true },
        { id: '2', text: 'warranty', isCorrect: false },
        { id: '3', text: 'receipt', isCorrect: false },
        { id: '4', text: 'fitting room', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l111_a4',
      type: 'translation',
      prompt: 'Translate into English: "क्या मैं कृपया इस खराब उत्पाद के बारे में प्रबंधक से बात कर सकता हूँ?"',
      sourceSentence: 'क्या मैं कृपया इस खराब उत्पाद के बारे में प्रबंधक से बात कर सकता हूँ?',
      targetSentence: 'Could I please speak to the manager regarding this faulty product?',
      wordBank: ['Could', 'I', 'please', 'speak', 'to', 'the', 'manager', 'regarding', 'this', 'faulty', 'product']
    },
    {
      id: 'ex_u08_l111_a5',
      type: 'error_correction',
      prompt: 'Find and fix the error in the sentence:',
      sourceSentence: 'The customer service clerk apologized for the delay and give a voucher.',
      targetSentence: 'The customer service clerk apologized for the delay and gave a voucher.',
      explanation: 'Maintain consistent past tense: "apologized and gave".'
    },
    {
      id: 'ex_u08_l111_a6',
      type: 'listening',
      prompt: 'Listen to the customer service resolution:',
      audioText: 'We have processed your full refund, and a confirmation email has been sent to you.',
      targetSentence: 'We have processed your full refund, and a confirmation email has been sent to you.',
      options: [
        { id: '1', text: 'Full refund processed with email confirmation', isCorrect: true },
        { id: '2', text: 'Refund request was rejected', isCorrect: false },
        { id: '3', text: 'Customer must pay extra fees', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l111_a7',
      type: 'speaking',
      prompt: 'Speak this mastery statement clearly:',
      targetSentence: 'Could you please exchange this shirt for a larger size as long as I have the receipt?',
      audioText: 'Could you please exchange this shirt for a larger size as long as I have the receipt?'
    },
    {
      id: 'ex_u08_l111_a8',
      type: 'personal_production',
      prompt: 'Write a polite two-sentence customer message requesting an exchange for a damaged product:',
      targetSentence: 'Hello, I am afraid that the headphones I bought yesterday are defective and will not turn on. Could you please exchange them for a working pair?'
    }
  ]
};
