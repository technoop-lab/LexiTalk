import { buildDetailedLessonA2_Unit14, LessonConfigA2 } from './unit14_builder_helper';
import { saveUnit14Lesson } from './enrich_unit14_helper';

// =========================================================================
// LESSON 197: Appointments, Public Offices & Administrative Requests
// =========================================================================
export const LESSON_197: LessonConfigA2 = {
  num: 197,
  title: 'Appointments, Public Offices & Administrative Requests',
  icon: '🏛️',
  estMin: 25,
  objTitle: 'Scheduling Appointments & Interacting at Public Offices',
  objDesc: 'Master scheduling appointments, queuing at municipal counters, understanding administrative numbers, and making polite formal requests.',
  objHi: 'अपॉइंटमेंट तय करने, नगर निगम/सरकारी कार्यालयों में कतारबद्ध होने, टोकन नंबर समझने और विनम्र औपचारिक अनुरोध करने का अभ्यास करें।',
  objEs: 'Programar citas, interactuar en oficinas públicas, comprender números de atención y realizar solicitudes formales educadas.',
  canDo: [
    'I can book, reschedule, or cancel appointments at public offices and clinics.',
    'I can take a queue number and understand ticket calling announcements.',
    'I can make polite administrative requests using "Could I possibly...", "I would like to enquire about...", and "May I ask...".',
    'I can explain public office service steps to a friend.'
  ],
  canDoHi: [
    'मैं सरकारी कार्यालयों और क्लीनिकों में अपॉइंटमेंट बुक, रीशेड्यूल या रद्द कर सकता हूँ।',
    'मैं टोकन नंबर ले सकता हूँ और टिकट पुकारने की घोषणाएं समझ सकता हूँ।',
    'मैं "Could I possibly...", "I would like to enquire about..." का उपयोग करके विनम्र अनुरोध कर सकता हूँ।',
    'मैं किसी मित्र को प्रशासनिक कार्यालय की प्रक्रिया समझा सकता हूँ।'
  ],
  canDoEs: [
    'Puedo reservar, reprogramar o cancelar citas en oficinas públicas y consultorios.',
    'Puedo tomar un número de turno y entender los anuncios de llamada.',
    'Puedo hacer solicitudes formales educadas usando fórmulas de cortesía.',
    'Puedo explicar los pasos de atención de una oficina pública a un amigo.'
  ],
  vocab: [
    { w: 'appointment', p: '/əˈpɔɪntmənt/', m: 'an arrangement to meet someone at a particular time', hi: 'मुलाकात का समय / अपॉइंटमेंट', es: 'cita programada', fr: 'rendez-vous', de: 'Termin', pt: 'agendamento / consulta', zh: '预约', ar: 'موعد', ja: '予約 / アポイントメント', ru: 'приём / встреча', ex: 'I have an appointment at the citizen services desk at two o\'clock.', exHi: 'नागरिक सेवा केंद्र पर दोपहर दो बजे मेरी अपॉइंटमेंट है।', exEs: 'Tengo una cita en la oficina de atención ciudadana a las dos.', ic: '📅' },
    { w: 'queue', p: '/kjuː/', m: 'a line of people waiting for something', hi: 'कतार / पंक्ति', es: 'fila / cola', fr: 'file d\'attente', de: 'Warteschlange', pt: 'fila', zh: '排队 / 队列', ar: 'طابور', ja: '列 / 順番待ち', ru: 'очередь', ex: 'Please take a ticket and wait in the queue.', exHi: 'कृपया टिकट लें और कतार में प्रतीक्षा करें।', exEs: 'Por favor tome un billete y espere en la fila.', ic: '🚶‍♂️' },
    { w: 'counter', p: '/ˈkaʊntər/', m: 'a long flat surface where customers are served', hi: 'सेवा खिड़की / काउंटर', es: 'mostrador / ventanilla', fr: 'guichet / comptoir', de: 'Schalter', pt: 'balcão / guichê', zh: '柜台 / 办事窗口', ar: 'شباك الخدمة', ja: '窓口 / カウンター', ru: 'окно обслуживания / стойка', ex: 'Ticket number 42, please proceed to counter three.', exHi: 'टिकट नंबर 42, कृपया काउंटर तीन पर जाएं।', exEs: 'Turno número 42, por favor acérquese a la ventanilla tres.', ic: '🏢' },
    { w: 'reschedule', p: '/ˌriːˈʃedjuːl/', m: 'to change the time or date of an appointment', hi: 'समय बदलना / पुनर्निर्धारित करना', es: 'reprogramar / cambiar de fecha', fr: 'reprogrammer / reporter', de: 'umbuchen / verschieben', pt: 'reagendar', zh: '重新安排时间', ar: 'إعادة جدولة', ja: '日程を変更する', ru: 'перенести на другое время', ex: 'Could I please reschedule my appointment for next Tuesday?', exHi: 'क्या मैं अपनी अपॉइंटमेंट अगले मंगलवार के लिए रीशेड्यूल कर सकता हूँ?', exEs: '¿Podría reprogramar mi cita para el próximo martes?', ic: '🔄' },
    { w: 'enquiry', p: '/ɪnˈkwaɪəri/', m: 'an act of asking for information', hi: 'पूछताछ', es: 'consulta / pregunta', fr: 'demande de renseignement', de: 'Anfrage / Erkundigung', pt: 'consulta / dúvida', zh: '咨询 / 询问', ar: 'استفسار', ja: '問い合わせ', ru: 'справка / запрос', ex: 'I am calling to make an enquiry about municipal parking permits.', exHi: 'मैं नगर निगम पार्किंग परमिट के बारे में पूछताछ करने के लिए कॉल कर रहा हूँ।', exEs: 'Llamo para hacer una consulta sobre los permisos de estacionamiento municipal.', ic: '❓' },
    { w: 'certificate', p: '/səˈtɪfɪkət/', m: 'an official document stating a particular fact', hi: 'प्रमाण पत्र', es: 'certificado', fr: 'certificat / attestation', de: 'Bescheinigung / Zertifikat', pt: 'certidão / certificado', zh: '证书 / 证明', ar: 'شهادة / وثيقة رسمية', ja: '証明書', ru: 'свидетельство / сертификат', ex: 'You need an official birth certificate for this registration.', exHi: 'इस पंजीकरण के लिए आपको एक आधिकारिक जन्म प्रमाण पत्र की आवश्यकता है।', exEs: 'Necesita un certificado de nacimiento oficial para este registro.', ic: '📜' },
    { w: 'validity', p: '/vəˈlɪdəti/', m: 'the state of being legally or officially acceptable', hi: 'वैधता', es: 'validez / vigencia', fr: 'validité', de: 'Gültigkeit', pt: 'validade', zh: '有效性 / 有效期', ar: 'صلاحية', ja: '有効性 / 期限', ru: 'срок действия / действительность', ex: 'What is the validity period of this temporary pass?', exHi: 'इस अस्थायी पास की वैधता अवधि क्या है?', exEs: '¿Cuál es el período de validez de este pase temporal?', ic: '⏳' },
    { w: 'fee', p: '/fiː/', m: 'an amount of money paid for an official service', hi: 'शुल्क / फीस', es: 'tasa / tarifa', fr: 'frais / tarif', de: 'Gebühr', pt: 'taxa / tarifa', zh: '规费 / 费用', ar: 'رسوم', ja: '手数料 / 料金', ru: 'сбор / госпошлина', ex: 'There is a processing fee of fifteen pounds.', exHi: 'पंद्रह पाउंड का प्रसंस्करण शुल्क है।', exEs: 'Hay una tasa de tramitación de quince libras.', ic: '💳' },
    { w: 'receipt', p: '/rɪˈsiːt/', m: 'a written acknowledgment that money or goods were received', hi: 'रसीद / पावती', es: 'recibo / comprobante', fr: 'reçu / quittance', de: 'Quittung / Beleg', pt: 'recibo / comprovante', zh: '收据 / 发票', ar: 'إيصال', ja: '領収書 / レシート', ru: 'квитанция / чек', ex: 'Keep this payment receipt until you collect your documents.', exHi: 'दस्तावेज़ प्राप्त करने तक यह भुगतान रसीद संभाल कर रखें।', exEs: 'Guarde este recibo de pago hasta que retire sus documentos.', ic: '🧾' },
    { w: 'in advance', p: '/ɪn ədˈvɑːns/', m: 'before a particular time or event', hi: 'अग्रिम में / पहले से', es: 'con antelación / por adelantado', fr: 'à l\'avance', de: 'im Voraus', pt: 'com antecedência', zh: '提前', ar: 'مسبقاً', ja: '事前に / 前もって', ru: 'заранее / предварительно', ex: 'All consultations must be booked three days in advance.', exHi: 'सभी परामर्श तीन दिन पहले बुक किए जाने चाहिए।', exEs: 'Todas las consultas deben reservarse con tres días de antelación.', ic: '⏰' },
    { w: 'officer', p: '/ˈɒfɪsər/', m: 'a person who holds a position of authority in an organization', hi: 'अधिकारी', es: 'funcionario / oficial', fr: 'agent / fonctionnaire', de: 'Beamter / Sachbearbeiter', pt: 'funcionário / agente', zh: '官员 / 经办人员', ar: 'موظف مسؤول', ja: '担当官 / 係員', ru: 'сотрудник / инспектор', ex: 'The immigration officer checked my documents thoroughly.', exHi: 'आव्रजन अधिकारी ने मेरे दस्तावेज़ों की गहन जांच की।', exEs: 'El funcionario de inmigración revisó mis documentos minuciosamente.', ic: '👮' },
    { w: 'stamp', p: '/stæmp/', m: 'an official mark stamped on a document to show validity', hi: 'आधिकारिक मुहर / ठप्पा', es: 'sello oficial', fr: 'tampon / cachet', de: 'Stempel', pt: 'carimbo', zh: '印章 / 盖印', ar: 'ختم رسمي', ja: '公印 / スタンプ', ru: 'печать / штамп', ex: 'The document requires an official stamp and signature.', exHi: 'दस्तावेज़ पर एक आधिकारिक मुहर और हस्ताक्षर की आवश्यकता है।', exEs: 'El documento requiere un sello oficial y una firma.', ic: '🛡️' },
    { w: 'guidance', p: '/ˈɡaɪdns/', m: 'advice or information aimed at resolving a problem', hi: 'मार्गदर्शन / सलाह', es: 'orientación / asesoramiento', fr: 'conseils / orientation', de: 'Beratung / Anleitung', pt: 'orientação', zh: '指导 / 指引', ar: 'إرشاد / توجيه', ja: '案内 / 指導', ru: 'руководство / разъяснение', ex: 'You can ask the information desk for guidance.', exHi: 'आप मार्गदर्शन के लिए सूचना पटल से पूछ सकते हैं।', exEs: 'Puede pedir orientación en el mostrador de información.', ic: '🧭' },
    { w: 'representative', p: '/ˌreprɪˈzentətɪv/', m: 'someone chosen to speak or act for someone else', hi: 'प्रतिनिधि', es: 'representante', fr: 'représentant', de: 'Vertreter', pt: 'representante', zh: '代表 / 代理人', ar: 'ممثل / وكيل', ja: '代理人 / 代表者', ru: 'представитель / доверенное лицо', ex: 'An authorized representative may submit the paperwork on your behalf.', exHi: 'एक अधिकृत प्रतिनिधि आपकी ओर से कागजी कार्रवाई जमा कर सकता है।', exEs: 'Un representante autorizado puede presentar la documentación en su nombre.', ic: '🤝' },
    { w: 'deadline', p: '/ˈdedlaɪn/', m: 'the latest time or date by which something should be completed', hi: 'अंतिम तिथि / समय-सीमा', es: 'fecha límite / plazo', fr: 'date limite', de: 'Frist / Abgabetermin', pt: 'prazo final', zh: '截止期限', ar: 'الموعد النهائي', ja: '締め切り', ru: 'крайний срок / дедлайн', ex: 'The deadline for permit renewal is the end of the month.', exHi: 'परमिट नवीनीकरण की अंतिम तिथि महीने के अंत तक है।', exEs: 'La fecha límite para la renovación del permiso es a finales de mes.', ic: '⏱️' }
  ],
  chunks: [
    { phrase: 'book an appointment', meaning: 'schedule an official time slot with a service provider', hi: 'अपॉइंटमेंट बुक करना', es: 'pedir una cita', fr: 'prendre un rendez-vous', de: 'einen Termin vereinbaren', pt: 'marcar uma consulta/horário', zh: '预约时间', ar: 'حجز موعد', ja: '予約を取る', ru: 'записаться на прием', note: 'Standard collocations: "I would like to book an appointment."', ic: '📅' },
    { phrase: 'take a ticket', meaning: 'pull a numbered slip from an automated queue dispenser', hi: 'टोकन/टिकट लेना', es: 'sacar un número', fr: 'prendre un ticket', de: 'eine Wartenummer ziehen', pt: 'tirar uma senha', zh: '取号', ar: 'سحب تذكرة انتظار', ja: '番号札を取る', ru: 'взять талон', note: 'Municipal instruction: "Please take a ticket upon arrival."', ic: '🎫' },
    { phrase: 'on someone\'s behalf', meaning: 'acting as a representative for another person', hi: 'किसी की ओर से', es: 'en nombre de / de parte de', fr: 'au nom de / de la part de', de: 'im Namen von', pt: 'em nome de alguém', zh: '代表某人', ar: 'نيابة عن شخص', ja: '〜の代わりに / 代理で', ru: 'от имени / по поручению', note: 'Formal context: "I am collecting this on my mother\'s behalf."', ic: '🤝' },
    { phrase: 'processing time', meaning: 'the duration required to complete an administrative action', hi: 'प्रसंस्करण समय', es: 'tiempo de tramitación', fr: 'délai de traitement', de: 'Bearbeitungszeit', pt: 'tempo de processamento', zh: '办理周期 / 处理时间', ar: 'مدة المعالجة', ja: '処理期間', ru: 'время обработки', note: 'Time frame: "The standard processing time is ten working days."', ic: '⏳' },
    { phrase: 'certified copy', meaning: 'an officially verified duplicate of an original document', hi: 'प्रमाणित प्रति', es: 'copia compulsada / certificada', fr: 'copie certifiée conforme', de: 'beglaubigte Kopie', pt: 'cópia autenticada', zh: '公证副本', ar: 'نسخة مصدقة', ja: '認証謄本', ru: 'заверенная копия', note: 'Legal requirement: "Please provide a certified copy of your degree."', ic: '📄' },
    { phrase: 'reach out to', meaning: 'contact someone for assistance or inquiry', hi: 'संपर्क करना', es: 'ponerse en contacto con', fr: 'contacter / s\'adresser à', de: 'sich wenden an', pt: 'entrar em contato com', zh: '联系', ar: 'التواصل مع', ja: '連絡を取る', ru: 'обратиться к кому-либо', note: 'Customer service: "Feel free to reach out to our support helpline."', ic: '📞' }
  ],
  grammar: {
    title: 'Polite Formal Requests & Embedded Questions in Inquiries',
    concept: 'Using modal verbs (Could, Would, May) and indirect question patterns for courteous public communication.',
    patterns: [
      {
        title: 'Polite Requests with Modals',
        structure: 'Could I / Would you mind + [verb structure] + please?',
        rule: 'Used at official desks to sound polite and respectful rather than demanding.',
        examples: [
          { en: 'Could I please renew my resident permit today?', hi: 'क्या मैं आज अपना निवासी परमिट नवीनीकृत कर सकता हूँ?', es: '¿Podría renovar mi permiso de residencia hoy, por favor?' },
          { en: 'Would you mind checking if my application is ready?', hi: 'क्या आप जांच सकते हैं कि मेरा आवेदन तैयार है या नहीं?', es: '¿Le importaría verificar si mi solicitud está lista?' }
        ]
      },
      {
        title: 'Indirect Questions for Inquiries',
        structure: 'Could you tell me + question word + subject + verb (statement order)',
        rule: 'In indirect questions, the word order changes back to normal subject-verb (not inversion).',
        examples: [
          { en: 'Could you tell me how much the renewal fee is?', hi: 'क्या आप मुझे बता सकते हैं कि नवीनीकरण शुल्क कितना है?', es: '¿Podría decirme cuánto cuesta la tasa de renovación?' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'Could you tell me where is the counter three?',
      cor: 'Could you tell me where counter three is?',
      exp: 'In indirect questions, use normal subject-verb word order: "where counter three is".',
      hi: 'अप्रत्यक्ष प्रश्नों में शब्द क्रम "where counter three is" होता है, न कि "where is counter three".',
      es: 'En preguntas indirectas, el orden es sujeto + verbo: "where counter three is".'
    },
    {
      inc: 'I want that you give me my certificate.',
      cor: 'I would like to collect my certificate, please.',
      exp: 'Saying "I want that you give me" is overly direct and grammatically incorrect. Use "I would like to collect..."',
      hi: 'विनम्रता के लिए "I would like to collect..." का उपयोग करें।',
      es: 'Para ser cortés en ventanilla, use "I would like to collect, please".'
    }
  ],
  dialogues: [
    {
      title: 'At the Town Hall Citizen Services Desk',
      context: 'Chloe is inquiring about renewing her parking permit at the municipal hall.',
      charA: { name: 'Officer', av: '👨‍💼', role: 'Municipal Clerk' },
      charB: { name: 'Chloe', av: '👩', role: 'Citizen' },
      turns: [
        { spk: 'Officer', text: 'Good morning. Ticket number 74, right? How may I assist you today?', hi: 'शुभ प्रभात। टिकट नंबर 74, सही? मैं आज आपकी क्या सहायता कर सकता हूँ?', es: 'Buenos días. Turno número 74, ¿verdad? ¿En qué puedo ayudarle hoy?' },
        { spk: 'Chloe', text: 'Good morning. Could you tell me what documents I need to renew my residential parking permit?', hi: 'शुभ प्रभात। क्या आप मुझे बता सकते हैं कि मुझे अपने आवासीय पार्किंग परमिट को नवीनीकृत करने के लिए किन दस्तावेज़ों की आवश्यकता है?', es: 'Buenos días. ¿Podría decirme qué documentos necesito para renovar mi permiso de estacionamiento residencial?' },
        { spk: 'Officer', text: 'Certainly. You will need your current vehicle registration and proof of residence from the last three months.', hi: 'बिल्कुल। आपको अपने वर्तमान वाहन पंजीकरण और पिछले तीन महीनों के निवास प्रमाण की आवश्यकता होगी।', es: 'Por supuesto. Necesitará el registro actual del vehículo y un comprobante de domicilio de los últimos tres meses.' },
        { spk: 'Chloe', text: 'I have both with me right here. How much is the renewal fee?', hi: 'मेरे पास यहाँ दोनों हैं। नवीनीकरण शुल्क कितना है?', es: 'Tengo ambos aquí conmigo. ¿Cuánto es la tasa de renovación?' },
        { spk: 'Officer', text: 'It is twenty-five pounds. You can pay by contactless card at the terminal.', hi: 'यह पच्चीस पाउंड है। आप टर्मिनल पर संपर्क रहित कार्ड द्वारा भुगतान कर सकते हैं।', es: 'Son veinticinco libras. Puede pagar con tarjeta sin contacto en la terminal.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_197_p1',
      type: 'multiple_choice',
      prompt: 'What does "reschedule an appointment" mean?',
      options: [
        { id: '1', text: 'To change the appointment to a different date or time', isCorrect: true },
        { id: '2', text: 'To arrive ten minutes early', isCorrect: false },
        { id: '3', text: 'To cancel without telling anyone', isCorrect: false },
        { id: '4', text: 'To pay double the price', isCorrect: false }
      ]
    },
    {
      id: 'ex_197_p2',
      type: 'fill_blank',
      prompt: 'Complete the polite inquiry with proper word order:',
      sourceSentence: 'Could you tell me where the information desk ____?',
      targetSentence: 'Could you tell me where the information desk is?',
      blankIndex: 7,
      options: [
        { id: '1', text: 'is', isCorrect: true },
        { id: '2', text: 'is it', isCorrect: false },
        { id: '3', text: 'it is located at', isCorrect: false },
        { id: '4', text: 'does be', isCorrect: false }
      ]
    },
    {
      id: 'ex_197_p3',
      type: 'translate_tiles',
      prompt: 'Translate to English: कृपया टिकट लें और कतार में प्रतीक्षा करें।',
      sourceSentence: 'Por favor tome un número y espere en la fila.',
      targetSentence: 'Please take a ticket and wait in the queue',
      wordBank: ['Please', 'take', 'a', 'ticket', 'and', 'wait', 'in', 'the', 'queue', 'door']
    },
    {
      id: 'ex_197_p4',
      type: 'word_order',
      prompt: 'Arrange the words to make a polite formal request:',
      targetSentence: 'I would like to enquire about permit renewals',
      wordBank: ['I', 'would', 'like', 'to', 'enquire', 'about', 'permit', 'renewals']
    },
    {
      id: 'ex_197_p5',
      type: 'error_correction',
      prompt: 'Fix the word order in the indirect question:',
      sentence: 'Do you know how much is the administration fee?',
      correctSentence: 'Do you know how much the administration fee is?',
      errorSentence: 'Do you know how much is the administration fee?',
      explanation: 'In indirect questions, the verb "is" goes after the subject "the administration fee".'
    },
    {
      id: 'ex_197_p6',
      type: 'match_pairs',
      prompt: 'Match public office phrases with their functions:',
      options: [
        { id: 'm1', text: 'Take a ticket → Join the digital queue' },
        { id: 'm2', text: 'Certified copy → Authenticated duplicate' },
        { id: 'm3', text: 'Processing fee → Administrative payment' },
        { id: 'm4', text: 'On someone\'s behalf → As someone\'s representative' }
      ]
    },
    {
      id: 'ex_197_p7',
      type: 'listening',
      prompt: 'Listen to the public announcement and choose the designated counter:',
      audioText: 'Ticket number B-14, please proceed to counter five for document collection.',
      options: [
        { id: '1', text: 'Ticket B-14 to Counter 5 for document collection', isCorrect: true },
        { id: '2', text: 'Ticket A-10 to Counter 2 for fee payment', isCorrect: false },
        { id: '3', text: 'Ticket B-14 to Counter 1 for photo capture', isCorrect: false },
        { id: '4', text: 'All tickets to Room 3', isCorrect: false }
      ]
    },
    {
      id: 'ex_197_p8',
      type: 'speak_sentence',
      prompt: 'Speak this courteous inquiry clearly:',
      targetSentence: 'Could I please book an appointment for tomorrow morning?',
      audioText: 'Could I please book an appointment for tomorrow morning?'
    },
    {
      id: 'ex_197_p9',
      type: 'dialogue_completion',
      prompt: 'Choose the most natural answer for the citizen:',
      context: 'Clerk: "Do you have your reference number with you?"',
      options: [
        { id: '1', text: 'Yes, it is written at the top of this email confirmation.', isCorrect: true },
        { id: '2', text: 'No, I don\'t like cooking pasta.', isCorrect: false },
        { id: '3', text: 'The weather is very cold outside.', isCorrect: false },
        { id: '4', text: 'I am playing football on Sunday.', isCorrect: false }
      ]
    },
    {
      id: 'ex_197_p10',
      type: 'reading_comprehension',
      prompt: 'Notice: "Town Hall Operating Hours: Monday–Friday 08:30–16:30. Appointments required for passport services. Walk-in queue available for general payments only." Can you walk in for a passport renewal without an appointment?',
      options: [
        { id: '1', text: 'No, passport services require an appointment', isCorrect: true },
        { id: '2', text: 'Yes, you can walk in anytime on Saturday', isCorrect: false },
        { id: '3', text: 'Yes, but only after 17:00', isCorrect: false },
        { id: '4', text: 'Only if you bring cash', isCorrect: false }
      ]
    },
    {
      id: 'ex_197_p11',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct noun:',
      sourceSentence: 'The official processing ____ is approximately ten business days.',
      targetSentence: 'The official processing time is approximately ten business days.',
      blankIndex: 3,
      options: [
        { id: '1', text: 'time', isCorrect: true },
        { id: '2', text: 'stamp', isCorrect: false },
        { id: '3', text: 'desk', isCorrect: false },
        { id: '4', text: 'queue', isCorrect: false }
      ]
    },
    {
      id: 'ex_197_p12',
      type: 'translate_tiles',
      prompt: 'Translate to English: क्या मुझे मूल दस्तावेज़ लाने की आवश्यकता है?',
      sourceSentence: '¿Necesito traer los documentos originales?',
      targetSentence: 'Do I need to bring the original documents',
      wordBank: ['Do', 'I', 'need', 'to', 'bring', 'the', 'original', 'documents', 'sign']
    },
    {
      id: 'ex_197_p13',
      type: 'multiple_choice',
      prompt: 'If you are picking up a certificate for your sister with an authorization letter, you are picking it up:',
      options: [
        { id: '1', text: 'on her behalf', isCorrect: true },
        { id: '2', text: 'in block capitals', isCorrect: false },
        { id: '3', text: 'under her condition', isCorrect: false },
        { id: '4', text: 'for her surname', isCorrect: false }
      ]
    },
    {
      id: 'ex_197_p14',
      type: 'dictation',
      prompt: 'Listen and write down the office instruction:',
      audioText: 'Please keep your payment receipt until your pass is issued.',
      targetSentence: 'Please keep your payment receipt until your pass is issued.'
    },
    {
      id: 'ex_197_p15',
      type: 'speaking',
      prompt: 'Ask the clerk politely when your requested certificate will be ready:',
      targetSentence: 'Could you please let me know when my certificate will be ready?'
    },
    {
      id: 'ex_197_p16',
      type: 'word_order',
      prompt: 'Arrange into a formal sentence:',
      targetSentence: 'All applicants must present two forms of identification',
      wordBank: ['All', 'applicants', 'must', 'present', 'two', 'forms', 'of', 'identification']
    },
    {
      id: 'ex_197_p17',
      type: 'fill_blank',
      prompt: 'Select the correct modal verb for polite permission:',
      sourceSentence: '____ I ask what time the municipal office closes on Fridays?',
      targetSentence: 'May I ask what time the municipal office closes on Fridays?',
      blankIndex: 0,
      options: [
        { id: '1', text: 'May', isCorrect: true },
        { id: '2', text: 'Must', isCorrect: false },
        { id: '3', text: 'Should to', isCorrect: false },
        { id: '4', text: 'Ought', isCorrect: false }
      ]
    },
    {
      id: 'ex_197_p18',
      type: 'error_correction',
      prompt: 'Correct the error in verb complementation:',
      sentence: 'I would like rescheduling my consultation.',
      correctSentence: 'I would like to reschedule my consultation.',
      errorSentence: 'I would like rescheduling my consultation.',
      explanation: '"Would like" is followed by the infinitive with to: "would like to reschedule".'
    },
    {
      id: 'ex_197_p19',
      type: 'multiple_choice',
      prompt: 'What should you do when you arrive at a public service center with an automated ticketing kiosk?',
      options: [
        { id: '1', text: 'Select your service on the screen and take a ticket', isCorrect: true },
        { id: '2', text: 'Shout your name loudly into the room', isCorrect: false },
        { id: '3', text: 'Go straight behind the staff desk', isCorrect: false },
        { id: '4', text: 'Leave without taking a number', isCorrect: false }
      ]
    },
    {
      id: 'ex_197_p20',
      type: 'translate_tiles',
      prompt: 'Translate to English: आपका प्रमाणपत्र तैयार है और एकत्र किया जा सकता है।',
      sourceSentence: 'Su certificado está listo y puede ser recogido.',
      targetSentence: 'Your certificate is ready and can be collected',
      wordBank: ['Your', 'certificate', 'is', 'ready', 'and', 'can', 'be', 'collected', 'delay']
    }
  ],
  review: [
    {
      id: 'ex_197_r1',
      type: 'multiple_choice',
      prompt: 'Spaced Retrieval: What does "in block capitals" mean on an application form?',
      options: [
        { id: '1', text: 'In uppercase printed letters', isCorrect: true },
        { id: '2', text: 'In small cursive writing', isCorrect: false },
        { id: '3', text: 'In pencil only', isCorrect: false },
        { id: '4', text: 'In red ink only', isCorrect: false }
      ]
    },
    {
      id: 'ex_197_r2',
      type: 'fill_blank',
      prompt: 'Spaced Retrieval: Complete the form field collocations:',
      sourceSentence: 'Please state your marital ____ on the registration document.',
      targetSentence: 'Please state your marital status on the registration document.',
      blankIndex: 4,
      options: [
        { id: '1', text: 'status', isCorrect: true },
        { id: '2', text: 'state', isCorrect: false },
        { id: '3', text: 'room', isCorrect: false },
        { id: '4', text: 'title', isCorrect: false }
      ]
    },
    {
      id: 'ex_197_r3',
      type: 'translate_tiles',
      prompt: 'Translate to English: क्या मुझे अग्रिम में अपॉइंटमेंट बुक करनी होगी?',
      sourceSentence: '¿Tengo que reservar una cita con antelación?',
      targetSentence: 'Do I have to book an appointment in advance',
      wordBank: ['Do', 'I', 'have', 'to', 'book', 'an', 'appointment', 'in', 'advance', 'late']
    },
    {
      id: 'ex_197_r4',
      type: 'word_order',
      prompt: 'Arrange into an inquiry question:',
      targetSentence: 'Could you tell me how long the wait is',
      wordBank: ['Could', 'you', 'tell', 'me', 'how', 'long', 'the', 'wait', 'is']
    },
    {
      id: 'ex_197_r5',
      type: 'listening',
      prompt: 'Listen to the clinic receptionist and choose the available time:',
      audioText: 'We have an opening on Thursday at half past two with Doctor Patel.',
      options: [
        { id: '1', text: 'Thursday at 2:30 with Doctor Patel', isCorrect: true },
        { id: '2', text: 'Friday at 9:00 with Doctor Smith', isCorrect: false },
        { id: '3', text: 'Wednesday at 11:30 with Doctor Gomez', isCorrect: false },
        { id: '4', text: 'Saturday morning at 8:00', isCorrect: false }
      ]
    },
    {
      id: 'ex_197_r6',
      type: 'speak_sentence',
      prompt: 'Speak this polite request:',
      targetSentence: 'I would like to reschedule my appointment to Friday afternoon.',
      audioText: 'I would like to reschedule my appointment to Friday afternoon.'
    },
    {
      id: 'ex_197_r7',
      type: 'error_correction',
      prompt: 'Fix the error in the sentence:',
      sentence: 'I am waiting in queue since one hour.',
      correctSentence: 'I have been waiting in the queue for one hour.',
      errorSentence: 'I am waiting in queue since one hour.',
      explanation: 'Use present perfect continuous "have been waiting" with "for one hour".'
    },
    {
      id: 'ex_197_r8',
      type: 'match_pairs',
      prompt: 'Match administrative words with their opposites or equivalents:',
      options: [
        { id: 'm1', text: 'In advance ↔ At the last minute' },
        { id: 'm2', text: 'Book an appointment ↔ Cancel an appointment' },
        { id: 'm3', text: 'Original document ↔ Certified photocopy' },
        { id: 'm4', text: 'Walk-in ↔ By appointment only' }
      ]
    },
    {
      id: 'ex_197_r9',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct preposition:',
      sourceSentence: 'The officer stamped the approval ____ the first page.',
      targetSentence: 'The officer stamped the approval on the first page.',
      blankIndex: 5,
      options: [
        { id: '1', text: 'on', isCorrect: true },
        { id: '2', text: 'to', isCorrect: false },
        { id: '3', text: 'into', isCorrect: false },
        { id: '4', text: 'underneath', isCorrect: false }
      ]
    },
    {
      id: 'ex_197_r10',
      type: 'translate_tiles',
      prompt: 'Translate to English: कृपया अपने नाम की पुकार का इंतज़ार करें।',
      sourceSentence: 'Por favor espere a que llamen su nombre.',
      targetSentence: 'Please wait for your name to be called',
      wordBank: ['Please', 'wait', 'for', 'your', 'name', 'to', 'be', 'called', 'shout']
    }
  ],
  assessment: [
    {
      id: 'ex_197_a1',
      type: 'reading_comprehension',
      prompt: 'Notice: "Civil Registry Service Notice: Due to scheduled system maintenance on Thursday, all document collection counters will close at 13:00. Applicants with afternoon appointments have been rebooked for Friday." What happens to people with appointments on Thursday afternoon?',
      options: [
        { id: '1', text: 'Their appointments have been automatically moved to Friday', isCorrect: true },
        { id: '2', text: 'They must wait outside in the queue until 18:00', isCorrect: false },
        { id: '3', text: 'They must pay a penalty fee to reschedule', isCorrect: false },
        { id: '4', text: 'Their files have been permanently cancelled', isCorrect: false }
      ]
    },
    {
      id: 'ex_197_a2',
      type: 'mediation',
      prompt: 'An elderly visitor does not understand how the ticketing machine works. Explain the steps clearly and politely to help them.',
      options: [
        { id: '1', text: 'Touch the button for your service on the screen, take the paper ticket, and sit down until your number appears on the display board.', isCorrect: true },
        { id: '2', text: 'Insert all your bank cards and sign the screen with a pen.', isCorrect: false },
        { id: '3', text: 'Walk straight to counter one and interrupt the person speaking.', isCorrect: false },
        { id: '4', text: 'Leave the building because the office is closed.', isCorrect: false }
      ],
      explanation: 'Mediation explains public office procedures plainly and step-by-step.'
    },
    {
      id: 'ex_197_a3',
      type: 'fill_blank',
      prompt: 'Complete the formal inquiry:',
      sourceSentence: 'Could you please let me know if there is an administration ____ for late submissions?',
      targetSentence: 'Could you please let me know if there is an administration fee for late submissions?',
      blankIndex: 10,
      options: [
        { id: '1', text: 'fee', isCorrect: true },
        { id: '2', text: 'game', isCorrect: false },
        { id: '3', text: 'stamp', isCorrect: false },
        { id: '4', text: 'ticket', isCorrect: false }
      ]
    },
    {
      id: 'ex_197_a4',
      type: 'writing_prompt',
      prompt: 'Write a brief email (3-4 sentences) to the city registry office requesting to reschedule your residency appointment due to unexpected travel.',
      targetSentence: 'Dear Sir or Madam, I am writing to request a rescheduling of my appointment on Thursday. Due to urgent travel, I will not be able to attend. Could we please move the appointment to next Monday at 10:00 AM? Thank you for your assistance.'
    },
    {
      id: 'ex_197_a5',
      type: 'speaking',
      prompt: 'Speak your response at the counter: "Good morning, how can I help you today?" Explain that you are here to collect a replacement ID card.',
      targetSentence: 'Good morning. I am here to collect my replacement identity card. Here is my reference number and collection receipt.'
    },
    {
      id: 'ex_197_a6',
      type: 'dictation',
      prompt: 'Listen and transcribe the clerk\'s instruction:',
      audioText: 'The official processing time is three to five business days.',
      targetSentence: 'The official processing time is three to five business days.'
    },
    {
      id: 'ex_197_a7',
      type: 'multiple_choice',
      prompt: 'Which phrase is most appropriate for a formal inquiry at a government desk?',
      options: [
        { id: '1', text: 'I would like to enquire about the application requirements, please.', isCorrect: true },
        { id: '2', text: 'Hey buddy, give me my papers now!', isCorrect: false },
        { id: '3', text: 'Tell me everything immediately.', isCorrect: false },
        { id: '4', text: 'Why is this so slow?', isCorrect: false }
      ]
    },
    {
      id: 'ex_197_a8',
      type: 'translate_tiles',
      prompt: 'Translate to English: क्या आप मुझे बता सकते हैं कि काउंटर नंबर चार कहाँ है?',
      sourceSentence: '¿Podría decirme dónde está la ventanilla número cuatro?',
      targetSentence: 'Could you tell me where counter number four is',
      wordBank: ['Could', 'you', 'tell', 'me', 'where', 'counter', 'number', 'four', 'is', 'desk']
    },
    {
      id: 'ex_197_a9',
      type: 'error_correction',
      prompt: 'Correct the error in this public office interaction:',
      sentence: 'I am here on behalf from my father.',
      correctSentence: 'I am here on behalf of my father.',
      errorSentence: 'I am here on behalf from my father.',
      explanation: 'The correct collocation is "on behalf of someone", not "on behalf from".'
    },
    {
      id: 'ex_197_a10',
      type: 'dialogue_completion',
      prompt: 'Choose the best completion for the conversation:',
      context: 'Clerk: "Here is your stamped certificate. Is there anything else I can help you with today?"',
      options: [
        { id: '1', text: 'No, that is everything. Thank you very much for your help!', isCorrect: true },
        { id: '2', text: 'I would like to buy three train tickets to Paris.', isCorrect: false },
        { id: '3', text: 'The food at the restaurant was delicious.', isCorrect: false },
        { id: '4', text: 'Can you drive me to the airport?', isCorrect: false }
      ]
    }
  ]
};

// =========================================================================
// LESSON 198: Postal Services, Packages, Customs & Declarations
// =========================================================================
export const LESSON_198: LessonConfigA2 = {
  num: 198,
  title: 'Postal Services, Packages, Customs & Declarations',
  icon: '📦',
  estMin: 25,
  objTitle: 'Sending Packages, International Mail, Customs & Duty Declarations',
  objDesc: 'Learn how to send parcels, track shipments, calculate postage rates, and complete international customs declaration forms.',
  objHi: 'पार्सल भेजने, शिपमेंट ट्रैक करने, डाक दरों की गणना करने और अंतरराष्ट्रीय सीमा शुल्क (Customs) घोषणा फॉर्म भरने का अभ्यास करें।',
  objEs: 'Enviar paquetes, rastrear envíos, calcular tarifas postales y completar declaraciones de aduanas.',
  canDo: [
    'I can send parcels, letters, and registered mail at the post office.',
    'I can understand international customs declarations and state item values.',
    'I can track packages using tracking numbers and inquire about delivery delays.',
    'I can explain postal customs rules to a friend.'
  ],
  canDoHi: [
    'मैं डाकघर से पार्सल, पत्र और पंजीकृत डाक भेज सकता हूँ।',
    'मैं अंतरराष्ट्रीय सीमा शुल्क घोषणाओं को समझ सकता हूँ और वस्तुओं के मूल्य बता सकता हूँ।',
    'मैं ट्रैकिंग नंबर का उपयोग करके पैकेज ट्रैक कर सकता हूँ और डिलीवरी में देरी की पूछताछ कर सकता हूँ।',
    'मैं किसी मित्र को डाक व कस्टम के नियम समझा सकता हूँ।'
  ],
  canDoEs: [
    'Puedo enviar paquetes, cartas y correo certificado en la oficina de correos.',
    'Puedo entender declaraciones de aduana e indicar el valor de los artículos.',
    'Puedo rastrear paquetes mediante un número de seguimiento y consultar sobre retrasos.',
    'Puedo explicar las normas aduaneras y postales a un amigo.'
  ],
  vocab: [
    { w: 'parcel', p: '/ˈpɑːsl/', m: 'an object or collection of objects wrapped in paper or packed in a box', hi: 'पार्सल / डाक का बंडल', es: 'paquete / bulto', fr: 'colis', de: 'Paket / Päckchen', pt: 'encomenda / pacote', zh: '包裹', ar: 'طرد بريدي', ja: '小包 / 荷物', ru: 'посылка / пакет', ex: 'I want to send this heavy parcel to Australia by airmail.', exHi: 'मैं इस भारी पार्सल को हवाई डाक द्वारा ऑस्ट्रेलिया भेजना चाहता हूँ।', exEs: 'Quiero enviar este paquete pesado a Australia por correo aéreo.', ic: '📦' },
    { w: 'postage', p: '/ˈpəʊstɪdʒ/', m: 'the charge for sending a piece of mail', hi: 'डाक व्यय / डाक महसूल', es: 'franqueo / costo de envío', fr: 'frais de port / affranchissement', de: 'Porto', pt: 'postagem / franquia', zh: '邮资 / 邮费', ar: 'أجرة البريد', ja: '送料 / 郵便料金', ru: 'почтовый сбор / оплата доставки', ex: 'Standard international postage costs eight euros.', exHi: 'मानक अंतरराष्ट्रीय डाक का खर्च आठ यूरो है।', exEs: 'El franqueo internacional estándar cuesta ocho euros.', ic: '📮' },
    { w: 'customs', p: '/ˈkʌstəmz/', m: 'the government department that collects taxes on goods brought into a country', hi: 'सीमा शुल्क विभाग / कस्टम्स', es: 'aduana', fr: 'douane', de: 'Zoll', pt: 'alfândega', zh: '海关', ar: 'جمارك', ja: '税関', ru: 'таможня', ex: 'All overseas packages must pass through customs inspection.', exHi: 'सभी विदेशी पैकेजों को सीमा शुल्क निरीक्षण से गुजरना होगा।', exEs: 'Todos los paquetes del extranjero deben pasar la inspección de aduanas.', ic: '🛃' },
    { w: 'tracking number', p: '/ˈtrækɪŋ ˈnʌmbər/', m: 'a unique code used to follow a package\'s shipping journey', hi: 'ट्रैकिंग नंबर', es: 'número de seguimiento / rastreo', fr: 'numéro de suivi', de: 'Sendungsnummer / Tracking-Nummer', pt: 'código de rastreamento', zh: '快递单号 / 追踪号码', ar: 'رقم التتبع', ja: '追跡番号', ru: 'трек-номер / номер отслеживания', ex: 'Enter your tracking number on the courier website to see the live status.', exHi: 'लाइव स्थिति देखने के लिए कूरियर वेबसाइट पर अपना ट्रैकिंग नंबर दर्ज करें।', exEs: 'Ingrese su número de seguimiento en el sitio web del servicio de mensajería para ver el estado en vivo.', ic: '🔢' },
    { w: 'declared value', p: '/dɪˈkleəd ˈvæljuː/', m: 'the stated monetary worth of goods for customs purposes', hi: 'घोषित मूल्य', es: 'valor declarado', fr: 'valeur déclarée', de: 'deklarierter Wert', pt: 'valor declarado', zh: '申报价值', ar: 'القيمة المصرح بها', ja: '申告価格', ru: 'заявленная стоимость', ex: 'The declared value of the handmade craft is fifty dollars.', exHi: 'हस्तनिर्मित शिल्प का घोषित मूल्य पचास डॉलर है।', exEs: 'El valor declarado de la artesanía hecha a mano es de cincuenta dólares.', ic: '🏷️' },
    { w: 'fragile', p: '/ˈfrædʒaɪl/', m: 'easily broken or damaged', hi: 'नाज़ुक / आसानी से टूटने वाला', es: 'frágil', fr: 'fragile', de: 'zerbrechlich', pt: 'frágil', zh: '易碎的', ar: 'قابل للكسر', ja: '壊れ物 / 割れ物', ru: 'хрупкий', ex: 'Please mark the box as fragile because it contains glass mugs.', exHi: 'कृपया बॉक्स पर "fragile" का निशान लगाएं क्योंकि इसमें कांच के मग हैं।', exEs: 'Por favor marque la caja como frágil porque contiene tazas de vidrio.', ic: '🍷' },
    { w: 'courier', p: '/ˈkʊriər/', m: 'a company or person that delivers letters and packages quickly', hi: 'कूरियर सेवा', es: 'empresa de mensajería / repartidor', fr: 'coursier / transporteur', de: 'Kurier / Paketdienst', pt: 'entregador / transportadora', zh: '快递员 / 快递公司', ar: 'خدمة التوصيل السريع / ساعي البريد', ja: '宅配業者 / クーリエ', ru: 'курьер / курьерская служба', ex: 'The courier will deliver the parcel directly to your doorstep.', exHi: 'कूरियर पार्सल सीधे आपके दरवाजे पर पहुंचाएगा।', exEs: 'El mensajero entregará el paquete directamente en su puerta.', ic: '🚚' },
    { w: 'registered mail', p: '/ˈredʒɪstəd meɪl/', m: 'mail tracked and signed for at every stage of transit', hi: 'पंजीकृत डाक / रजिस्टर्ड पोस्ट', es: 'correo certificado', fr: 'courrier recommandé', de: 'Einschreiben', pt: 'carta registrada', zh: '挂号信', ar: 'بريد مسجل', ja: '書留郵便', ru: 'заказное письмо / заказная почта', ex: 'Send sensitive legal contracts by registered mail for security.', exHi: 'सुरक्षा के लिए संवेदनशील कानूनी अनुबंध पंजीकृत डाक द्वारा भेजें।', exEs: 'Envíe los contratos legales importantes por correo certificado por seguridad.', ic: '✉️' },
    { w: 'weigh', p: '/weɪ/', m: 'to measure how heavy something is', hi: 'वजन करना / तौलना', es: 'pesar', fr: 'peser', de: 'wiegen', pt: 'pesar', zh: '称重', ar: 'وزن / يقيس الوزن', ja: '重さを量る', ru: 'взвешивать', ex: 'The clerk must weigh the parcel to calculate the postage.', exHi: 'डाक शुल्क की गणना के लिए क्लर्क को पार्सल का वजन करना होगा।', exEs: 'El empleado debe pesar el paquete para calcular el franqueo.', ic: '⚖️' },
    { w: 'duty', p: '/ˈdjuːti/', m: 'a tax paid on goods imported from abroad', hi: 'आयात कर / सीमा शुल्क (ड्यूटी)', es: 'arancel / impuesto aduanero', fr: 'droits de douane', de: 'Zollgebühr / Einfuhrabgabe', pt: 'imposto de importação', zh: '关税', ar: 'رسوم جمركية', ja: '関税', ru: 'таможенная пошлина', ex: 'You may have to pay import duty if the value exceeds one hundred euros.', exHi: 'यदि मूल्य एक सौ यूरो से अधिक है तो आपको आयात शुल्क देना पड़ सकता है।', exEs: 'Es posible que tenga que pagar aranceles si el valor supera los cien euros.', ic: '💰' },
    { w: 'contents', p: '/ˈkɒntents/', m: 'the items that are held inside a box or envelope', hi: 'सामग्री / अंदर रखी वस्तुएं', es: 'contenido', fr: 'contenu', de: 'Inhalt', pt: 'conteúdo', zh: '内装物品 / 物品内容', ar: 'المحتويات', ja: '中身 / 内容物', ru: 'содержимое / вложение', ex: 'List all package contents on the green customs sticker.', exHi: 'हरे सीमा शुल्क स्टिकर पर पैकेज की सभी सामग्रियों की सूची बनाएं।', exEs: 'Detalle todo el contenido del paquete en la pegatina verde de aduanas.', ic: '📋' },
    { w: 'prohibited', p: '/prəˈhɪbɪtɪd/', m: 'strictly forbidden by law or regulations', hi: 'प्रतिबंधित / मना किया हुआ', es: 'prohibido', fr: 'interdit', de: 'verboten / unzulässig', pt: 'proibido', zh: '违禁的 / 禁止的', ar: 'محظور / ممنوع', ja: '禁止された', ru: 'запрещённый', ex: 'Batteries and flammable liquids are prohibited from standard airmail.', exHi: 'मानक हवाई डाक में बैटरी और ज्वलनशील तरल पदार्थ प्रतिबंधित हैं।', exEs: 'Las baterías y los líquidos inflamables están prohibidos en el correo aéreo estándar.', ic: '🚫' },
    { w: 'envelope', p: '/ˈenvələʊp/', m: 'a flat paper container for a letter', hi: 'लिफाफा', es: 'sobre', fr: 'enveloppe', de: 'Briefumschlag', pt: 'envelope', zh: '信封', ar: 'ظرف بريدي', ja: '封筒', ru: 'конверт', ex: 'Write the recipient\'s address clearly on the front of the envelope.', exHi: 'लिफाफे के सामने वाले हिस्से पर प्राप्तकर्ता का पता स्पष्ट रूप से लिखें।', exEs: 'Escriba la dirección del destinatario claramente en el frente del sobre.', ic: '✉️' },
    { w: 'recipient', p: '/rɪˈsɪpiənt/', m: 'a person who receives something', hi: 'प्राप्तकर्ता', es: 'destinatario / receptor', fr: 'destinataire', de: 'Empfänger', pt: 'destinatário', zh: '收件人', ar: 'المستلم / المرسل إليه', ja: '受取人', ru: 'получатель / адресат', ex: 'The parcel will be handed over only to the named recipient.', exHi: 'पार्सल केवल नामित प्राप्तकर्ता को ही सौंपा जाएगा।', exEs: 'El paquete se entregará únicamente al destinatario indicado.', ic: '👤' },
    { w: 'sender', p: '/ˈsendər/', m: 'a person who sends something', hi: 'प्रेषक / भेजने वाला', es: 'remitente', fr: 'expéditeur', de: 'Absender', pt: 'remetente', zh: '发件人 / 寄件人', ar: 'المرسل', ja: '差出人', ru: 'отправитель', ex: 'Write the sender\'s return address in the top left corner.', exHi: 'ऊपरी बाएं कोने में प्रेषक का वापसी पता लिखें।', exEs: 'Escriba la dirección del remitente en la esquina superior izquierda.', ic: '📤' }
  ],
  chunks: [
    { phrase: 'send by airmail', meaning: 'dispatch mail via airplane for faster international delivery', hi: 'हवाई डाक से भेजना', es: 'enviar por correo aéreo', fr: 'envoyer par avion', de: 'per Luftpost versenden', pt: 'enviar por via aérea', zh: '航空邮寄', ar: 'إرسال بالبريد الجوي', ja: '航空便で送る', ru: 'отправить авиапочтой', note: 'Shipping option: "Would you prefer to send this by airmail or surface mail?"', ic: '✈️' },
    { phrase: 'customs declaration form', meaning: 'official slip (e.g. CN22/CN23) declaring goods and value for customs', hi: 'सीमा शुल्क घोषणा फॉर्म', es: 'formulario de declaración de aduanas', fr: 'déclaration en douane', de: 'Zollerklärung', pt: 'declaração alfandegária', zh: '海关申报单', ar: 'استمارة الإقرار الجمركي', ja: '税関告知書', ru: 'таможенная декларация', note: 'Document: "Please fill out this customs declaration form."', ic: '📜' },
    { phrase: 'handle with care', meaning: 'treat a package delicately to avoid damage', hi: 'सावधानी से संभालें', es: 'tratar con cuidado / frágil', fr: 'manipuler avec précaution', de: 'mit Vorsicht behandeln', pt: 'manusear com cuidado', zh: '小心轻放', ar: 'التعامل معها بحذر', ja: '取扱注意', ru: 'обращаться осторожно', note: 'Warning label: "Handle with care - ceramic contents inside."', ic: '⚠️' },
    { phrase: 'track your shipment', meaning: 'monitor the real-time shipping milestones of a package online', hi: 'अपनी खेप को ट्रैक करना', es: 'rastrear su envío', fr: 'suivre votre envoi', de: 'die Sendung verfolgen', pt: 'rastrear seu envio', zh: '追踪包裹进度', ar: 'تتبع شحنتك', ja: '荷物を追跡する', ru: 'отслеживать отправление', note: 'Service benefit: "You can track your shipment 24/7 with this code."', ic: '🔍' },
    { phrase: 'proof of postage', meaning: 'a receipt showing the exact date and location a parcel was accepted', hi: 'डाक भेजने का प्रमाण', es: 'comprobante de envío', fr: 'preuve de dépôt', de: 'Einlieferungsnachweis', pt: 'comprovante de postagem', zh: '邮寄凭证', ar: 'إثبات الإرسال البريدي', ja: '発送証明書', ru: 'подтверждение отправки', note: 'Receipt: "Keep your proof of postage safe in case of delay."', ic: '🧾' },
    { phrase: 'signature upon delivery', meaning: 'requiring the recipient to physically sign before handover', hi: 'डिलीवरी पर हस्ताक्षर', es: 'firma a la entrega', fr: 'remise contre signature', de: 'Zustellung gegen Unterschrift', pt: 'entrega sob assinatura', zh: '签收', ar: 'التوقيع عند الاستلام', ja: '配達時署名要', ru: 'доставка под подпись', note: 'Courier service: "This delivery option requires a signature upon delivery."', ic: '✍️' }
  ],
  grammar: {
    title: 'Conditional Options & Quantifiers for Weight/Dimensions',
    concept: 'Using conditionals (If you send it by..., it will cost...) and measurement phrases (weighs up to, measures 30 by 20 cm).',
    patterns: [
      {
        title: 'First Conditional for Postal Options',
        structure: 'If + Present Simple, will + Base Verb',
        rule: 'Used to explain delivery costs, timeframes, and consequences.',
        examples: [
          { en: 'If you choose express shipping, it will arrive in two working days.', hi: 'यदि आप एक्सप्रेस शिपिंग चुनते हैं, तो यह दो कार्य दिवसों में पहुंच जाएगा।', es: 'Si elige envío exprés, llegará en dos días hábiles.' },
          { en: 'If the parcel weighs over two kilograms, the postage will increase.', hi: 'यदि पार्सल का वजन दो किलोग्राम से अधिक है, तो डाक शुल्क बढ़ जाएगा।', es: 'Si el paquete pesa más de dos kilos, el franqueo aumentará.' }
        ]
      },
      {
        title: 'Quantifying Dimensions & Weight',
        structure: 'It weighs [number] [grams/kg] / It measures [X] cm by [Y] cm',
        rule: 'Standard descriptions for parcel specifications.',
        examples: [
          { en: 'This parcel weighs 850 grams.', hi: 'इस पार्सल का वजन 850 ग्राम है।', es: 'Este paquete pesa 850 gramos.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'How many weighs this parcel?',
      cor: 'How much does this parcel weigh? / What does this parcel weigh?',
      exp: '"Weigh" is a verb. Use "How much does it weigh?" or "What is the weight?".',
      hi: '"Weigh" एक क्रिया है। "How much does it weigh?" कहें।',
      es: '"Weigh" es un verbo. Diga "¿How much does it weigh?" o "¿What is its weight?".'
    },
    {
      inc: 'I declared that the box has value zero.',
      cor: 'I declared a commercial value of ten dollars for customs.',
      exp: 'Customs authorities do not accept zero value for physical items. State a realistic declared value.',
      hi: 'कस्टम्स फॉर्म में वस्तुओं का वास्तविक घोषित मूल्य (Declared Value) लिखना आवश्यक है।',
      es: 'La aduana requiere indicar un valor declarado real para los bienes transportados.'
    }
  ],
  dialogues: [
    {
      title: 'Sending a Gift Parcel Overseas at the Post Office',
      context: 'David is at the post office sending a birthday package to his sister in Canada.',
      charA: { name: 'Postal Clerk', av: '👨‍💼', role: 'Post Office Worker' },
      charB: { name: 'David', av: '🧔', role: 'Customer' },
      turns: [
        { spk: 'Postal Clerk', text: 'Good afternoon. Please place your parcel on the scales so I can weigh it.', hi: 'शुभ दोपहर। कृपया अपना पार्सल तराजू पर रखें ताकि मैं इसका वजन कर सकूँ।', es: 'Buenas tardes. Por favor coloque su paquete en la balanza para que pueda pesarlo.' },
        { spk: 'David', text: 'Sure. It weighs about one point two kilograms. I\'d like to send it by airmail with tracking.', hi: 'ज़रूर। इसका वजन लगभग 1.2 किलोग्राम है। मैं इसे ट्रैकिंग के साथ हवाई डाक से भेजना चाहता हूँ।', es: 'Claro. Pesa alrededor de 1,2 kilos. Me gustaría enviarlo por correo aéreo con seguimiento.' },
        { spk: 'Postal Clerk', text: 'That will be eighteen pounds fifty. You also need to complete this green customs declaration sticker.', hi: 'यह अठारह पाउंड पचास पेंस होगा। आपको यह हरा सीमा शुल्क घोषणा स्टिकर भी भरना होगा।', es: 'Serán dieciocho libras con cincuenta. También necesita rellenar esta pegatina verde de declaración aduanera.' },
        { spk: 'David', text: 'What should I write under contents and value?', hi: 'मुझे सामग्री और मूल्य के अंतर्गत क्या लिखना चाहिए?', es: '¿Qué debo poner en contenido y valor?' },
        { spk: 'Postal Clerk', text: 'Write "Cotton sweater and chocolates - gift" and write the estimated value in Canadian or British pounds.', hi: '"सूती स्वेटर और चॉकलेट - उपहार" लिखें और कनाडाई या ब्रिटिश पाउंड में अनुमानित मूल्य लिखें।', es: 'Escriba "Suéter de algodón y chocolates - regalo" y anote el valor estimado en libras o dólares canadienses.' },
        { spk: 'David', text: 'Done! Here is the form and my contactless payment card.', hi: 'हो गया! यह रहा फॉर्म और मेरा संपर्क रहित भुगतान कार्ड।', es: '¡Listo! Aquí tiene el formulario y mi tarjeta de pago.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_198_p1',
      type: 'multiple_choice',
      prompt: 'What does a "tracking number" allow you to do?',
      options: [
        { id: '1', text: 'Follow the shipping progress and location of your package online', isCorrect: true },
        { id: '2', text: 'Change the color of the post box', isCorrect: false },
        { id: '3', text: 'Open the parcel without paying for goods', isCorrect: false },
        { id: '4', text: 'Avoid customs duty illegally', isCorrect: false }
      ]
    },
    {
      id: 'ex_198_p2',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct shipping term:',
      sourceSentence: 'If the box contains glassware, make sure to mark it as ____.',
      targetSentence: 'If the box contains glassware, make sure to mark it as fragile.',
      blankIndex: 10,
      options: [
        { id: '1', text: 'fragile', isCorrect: true },
        { id: '2', text: 'prohibited', isCorrect: false },
        { id: '3', text: 'registered', isCorrect: false },
        { id: '4', text: 'heavy', isCorrect: false }
      ]
    },
    {
      id: 'ex_198_p3',
      type: 'translate_tiles',
      prompt: 'Translate to English: क्या आप इस पार्सल को तराजू पर रख सकते हैं?',
      sourceSentence: '¿Puede colocar este paquete en la balanza?',
      targetSentence: 'Can you place this parcel on the scale',
      wordBank: ['Can', 'you', 'place', 'this', 'parcel', 'on', 'the', 'scale', 'stamp']
    },
    {
      id: 'ex_198_p4',
      type: 'word_order',
      prompt: 'Arrange into a first conditional sentence about shipping:',
      targetSentence: 'If you choose express shipping it will arrive tomorrow',
      wordBank: ['If', 'you', 'choose', 'express', 'shipping', 'it', 'will', 'arrive', 'tomorrow']
    },
    {
      id: 'ex_198_p5',
      type: 'error_correction',
      prompt: 'Fix the error in the inquiry sentence:',
      sentence: 'How much weighs this registered envelope?',
      correctSentence: 'How much does this registered envelope weigh?',
      errorSentence: 'How much weighs this registered envelope?',
      explanation: 'Use auxiliary "does" with the base verb "weigh": "How much does it weigh?".'
    },
    {
      id: 'ex_198_p6',
      type: 'match_pairs',
      prompt: 'Match postal items with their definitions:',
      options: [
        { id: 'm1', text: 'Customs declaration → Form listing goods and value' },
        { id: 'm2', text: 'Proof of postage → Receipt confirming dispatch' },
        { id: 'm3', text: 'Prohibited items → Forbidden goods (e.g. explosives)' },
        { id: 'm4', text: 'Registered mail → Tracked delivery requiring signature' }
      ]
    },
    {
      id: 'ex_198_p7',
      type: 'listening',
      prompt: 'Listen to the postal clerk and identify the delivery estimate:',
      audioText: 'Standard airmail to Japan takes approximately five to seven working days.',
      options: [
        { id: '1', text: '5 to 7 working days by standard airmail', isCorrect: true },
        { id: '2', text: 'Over two months by sea freight', isCorrect: false },
        { id: '3', text: 'Next day delivery guaranteed', isCorrect: false },
        { id: '4', text: 'Exactly twenty-four hours', isCorrect: false }
      ]
    },
    {
      id: 'ex_198_p8',
      type: 'speak_sentence',
      prompt: 'Speak this customer request clearly:',
      targetSentence: 'I would like to send this registered letter to Germany, please.',
      audioText: 'I would like to send this registered letter to Germany, please.'
    },
    {
      id: 'ex_198_p9',
      type: 'dialogue_completion',
      prompt: 'Choose the most natural answer for the postal customer:',
      context: 'Clerk: "Would you like standard delivery or tracked express?"',
      options: [
        { id: '1', text: 'Tracked express, please, because it is an urgent gift.', isCorrect: true },
        { id: '2', text: 'I would like a cup of green tea.', isCorrect: false },
        { id: '3', text: 'I am learning to play the piano.', isCorrect: false },
        { id: '4', text: 'Where is the cinema?', isCorrect: false }
      ]
    },
    {
      id: 'ex_198_p10',
      type: 'reading_comprehension',
      prompt: 'Customs Notice: "Items valued under €45 sent as gifts between individuals are exempt from import duty. Goods over €150 are subject to both VAT and customs duty." What happens to a gift parcel valued at €35?',
      options: [
        { id: '1', text: 'It is exempt from import duty (no duty to pay)', isCorrect: true },
        { id: '2', text: 'It will be destroyed by customs', isCorrect: false },
        { id: '3', text: 'The recipient must pay double the price in tax', isCorrect: false },
        { id: '4', text: 'It cannot be sent by airmail', isCorrect: false }
      ]
    },
    {
      id: 'ex_198_p11',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct word:',
      sourceSentence: 'The package was delivered, but the ____ had to sign for it.',
      targetSentence: 'The package was delivered, but the recipient had to sign for it.',
      blankIndex: 7,
      options: [
        { id: '1', text: 'recipient', isCorrect: true },
        { id: '2', text: 'customs', isCorrect: false },
        { id: '3', text: 'postage', isCorrect: false },
        { id: '4', text: 'scale', isCorrect: false }
      ]
    },
    {
      id: 'ex_198_p12',
      type: 'translate_tiles',
      prompt: 'Translate to English: प्रेषक का पता लिफाफे के पीछे लिखें।',
      sourceSentence: 'Escriba la dirección del remitente en el reverso del sobre.',
      targetSentence: 'Write the sender address on the back of the envelope',
      wordBank: ['Write', 'the', 'sender', 'address', 'on', 'the', 'back', 'of', 'the', 'envelope']
    },
    {
      id: 'ex_198_p13',
      type: 'multiple_choice',
      prompt: 'Which of the following items is usually prohibited from international airmail?',
      options: [
        { id: '1', text: 'Flammable lighter fluid and loose lithium batteries', isCorrect: true },
        { id: '2', text: 'A printed cotton t-shirt', isCorrect: false },
        { id: '3', text: 'A paperback story book', isCorrect: false },
        { id: '4', text: 'A handwritten postcard', isCorrect: false }
      ]
    },
    {
      id: 'ex_198_p14',
      type: 'dictation',
      prompt: 'Listen and write down the tracking update message:',
      audioText: 'Your parcel has cleared customs and is out for delivery.',
      targetSentence: 'Your parcel has cleared customs and is out for delivery.'
    },
    {
      id: 'ex_198_p15',
      type: 'speaking',
      prompt: 'State the declared value of your parcel to the postal clerk:',
      targetSentence: 'The declared value of the handmade sweater is forty-five pounds.'
    },
    {
      id: 'ex_198_p16',
      type: 'word_order',
      prompt: 'Arrange into a clear sentence:',
      targetSentence: 'Please keep this receipt as your proof of postage',
      wordBank: ['Please', 'keep', 'this', 'receipt', 'as', 'your', 'proof', 'of', 'postage']
    },
    {
      id: 'ex_198_p17',
      type: 'fill_blank',
      prompt: 'Select the missing verb:',
      sourceSentence: 'The courier will ____ a note if no one is home to receive the package.',
      targetSentence: 'The courier will leave a note if no one is home to receive the package.',
      blankIndex: 3,
      options: [
        { id: '1', text: 'leave', isCorrect: true },
        { id: '2', text: 'weigh', isCorrect: false },
        { id: '3', text: 'prohibit', isCorrect: false },
        { id: '4', text: 'stamp', isCorrect: false }
      ]
    },
    {
      id: 'ex_198_p18',
      type: 'error_correction',
      prompt: 'Fix the error in the sentence:',
      sentence: 'I sent the box with airmail yesterday.',
      correctSentence: 'I sent the box by airmail yesterday.',
      errorSentence: 'I sent the box with airmail yesterday.',
      explanation: 'We say "by airmail", "by post", or "by courier", not "with airmail".'
    },
    {
      id: 'ex_198_p19',
      type: 'multiple_choice',
      prompt: 'What sticker should you request if a package contains fragile glass items?',
      options: [
        { id: '1', text: '"Fragile - Handle with Care"', isCorrect: true },
        { id: '2', text: '"Do Not Deliver"', isCorrect: false },
        { id: '3', text: '"No Address"', isCorrect: false },
        { id: '4', text: '"Return to Sender"', isCorrect: false }
      ]
    },
    {
      id: 'ex_198_p20',
      type: 'translate_tiles',
      prompt: 'Translate to English: आपका पैकेज सफलतापूर्वक वितरित कर दिया गया है।',
      sourceSentence: 'Su paquete ha sido entregado exitosamente.',
      targetSentence: 'Your package has been successfully delivered',
      wordBank: ['Your', 'package', 'has', 'been', 'successfully', 'delivered', 'lost', 'delay']
    }
  ],
  review: [
    {
      id: 'ex_198_r1',
      type: 'multiple_choice',
      prompt: 'Spaced Retrieval: How do you politely start an inquiry at an administrative desk?',
      options: [
        { id: '1', text: 'Could you please tell me...', isCorrect: true },
        { id: '2', text: 'Give me information about...', isCorrect: false },
        { id: '3', text: 'I order you to explain...', isCorrect: false },
        { id: '4', text: 'You must answer...', isCorrect: false }
      ]
    },
    {
      id: 'ex_198_r2',
      type: 'fill_blank',
      prompt: 'Spaced Retrieval: Complete the sentence with the correct noun:',
      sourceSentence: 'Please provide proof of ____, such as a recent utility bill.',
      targetSentence: 'Please provide proof of residence, such as a recent utility bill.',
      blankIndex: 4,
      options: [
        { id: '1', text: 'residence', isCorrect: true },
        { id: '2', text: 'postage', isCorrect: false },
        { id: '3', text: 'customs', isCorrect: false },
        { id: '4', text: 'courier', isCorrect: false }
      ]
    },
    {
      id: 'ex_198_r3',
      type: 'translate_tiles',
      prompt: 'Translate to English: क्या आप ट्रैकिंग नंबर के साथ स्थिति जांच सकते हैं?',
      sourceSentence: '¿Puede verificar el estado con el número de seguimiento?',
      targetSentence: 'Can you check the status with the tracking number',
      wordBank: ['Can', 'you', 'check', 'the', 'status', 'with', 'the', 'tracking', 'number', 'box']
    },
    {
      id: 'ex_198_r4',
      type: 'word_order',
      prompt: 'Arrange into a first conditional sentence:',
      targetSentence: 'If the parcel is heavy the postage will cost more',
      wordBank: ['If', 'the', 'parcel', 'is', 'heavy', 'the', 'postage', 'will', 'cost', 'more']
    },
    {
      id: 'ex_198_r5',
      type: 'listening',
      prompt: 'Listen to the customer service voice message:',
      audioText: 'Your parcel is being held at the local distribution depot awaiting customs clearance.',
      options: [
        { id: '1', text: 'Held at the local depot awaiting customs clearance', isCorrect: true },
        { id: '2', text: 'Delivered to your neighbor two days ago', isCorrect: false },
        { id: '3', text: 'Returned to sender due to wrong address', isCorrect: false },
        { id: '4', text: 'Lost during ocean transit', isCorrect: false }
      ]
    },
    {
      id: 'ex_198_r6',
      type: 'speak_sentence',
      prompt: 'Speak this confirmation clearly:',
      targetSentence: 'I have attached the green customs declaration sticker to the box.',
      audioText: 'I have attached the green customs declaration sticker to the box.'
    },
    {
      id: 'ex_198_r7',
      type: 'error_correction',
      prompt: 'Fix the grammatical error:',
      sentence: 'If you will send it today, it arrives on Friday.',
      correctSentence: 'If you send it today, it will arrive on Friday.',
      errorSentence: 'If you will send it today, it arrives on Friday.',
      explanation: 'In the if-clause of a first conditional, use present simple ("If you send"), not "will send".'
    },
    {
      id: 'ex_198_r8',
      type: 'match_pairs',
      prompt: 'Match shipping acronyms and terms:',
      options: [
        { id: 'm1', text: 'VAT → Value Added Tax' },
        { id: 'm2', text: 'ETA → Estimated Time of Arrival' },
        { id: 'm3', text: 'Airmail → Airplane mail transit' },
        { id: 'm4', text: 'Surface mail → Land or sea freight transit' }
      ]
    },
    {
      id: 'ex_198_r9',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct preposition:',
      sourceSentence: 'The package arrived ____ time without any damage.',
      targetSentence: 'The package arrived on time without any damage.',
      blankIndex: 3,
      options: [
        { id: '1', text: 'on', isCorrect: true },
        { id: '2', text: 'at', isCorrect: false },
        { id: '3', text: 'with', isCorrect: false },
        { id: '4', text: 'under', isCorrect: false }
      ]
    },
    {
      id: 'ex_198_r10',
      type: 'translate_tiles',
      prompt: 'Translate to English: पार्सल को सावधानी से संभालना होगा।',
      sourceSentence: 'El paquete debe ser manipulado con cuidado.',
      targetSentence: 'The parcel must be handled with care',
      wordBank: ['The', 'parcel', 'must', 'be', 'handled', 'with', 'care', 'broken']
    }
  ],
  assessment: [
    {
      id: 'ex_198_a1',
      type: 'reading_comprehension',
      prompt: 'Customs Declaration Notice: "Form CN22 must be attached to the exterior of all packages containing goods sent outside the European Union. Senders must clearly detail the contents, gross weight, and accurate commercial value in euros or local currency." Where should the CN22 form be placed?',
      options: [
        { id: '1', text: 'Attached to the exterior (outside) of the package', isCorrect: true },
        { id: '2', text: 'Hidden inside the box under the contents', isCorrect: false },
        { id: '3', text: 'Mailed separately in a private letter', isCorrect: false },
        { id: '4', text: 'Kept at home by the sender', isCorrect: false }
      ]
    },
    {
      id: 'ex_198_a2',
      type: 'mediation',
      prompt: 'Your classmate wants to send homemade sweets to their family overseas but does not understand why the post office clerk is handing them a green sticker. Explain what they need to write on the sticker.',
      options: [
        { id: '1', text: 'It is a customs declaration. You must write what is inside the package (e.g. "Sweets / Food") and how much it is worth so customs knows what is in the box.', isCorrect: true },
        { id: '2', text: 'It is a lottery ticket from the post office that gives you free stamps.', isCorrect: false },
        { id: '3', text: 'It means the post office cannot send food under any circumstance.', isCorrect: false },
        { id: '4', text: 'You should sign your name fifty times on it.', isCorrect: false }
      ],
      explanation: 'True mediation clarifies customs requirements in plain, accessible words.'
    },
    {
      id: 'ex_198_a3',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct verb:',
      sourceSentence: 'The clerk must ____ the package before printing the postage label.',
      targetSentence: 'The clerk must weigh the package before printing the postage label.',
      blankIndex: 3,
      options: [
        { id: '1', text: 'weigh', isCorrect: true },
        { id: '2', text: 'prohibit', isCorrect: false },
        { id: '3', text: 'reschedule', isCorrect: false },
        { id: '4', text: 'cancel', isCorrect: false }
      ]
    },
    {
      id: 'ex_198_a4',
      type: 'writing_prompt',
      prompt: 'Write a short message (3-4 sentences) to an online shop asking about the tracking status of your parcel that has not arrived yet.',
      targetSentence: 'Dear Customer Support, I ordered order number 84210 last week, but the package has not arrived. The tracking number shows that it has been held at customs for four days. Could you please check the shipment status and provide an update? Thank you.'
    },
    {
      id: 'ex_198_a5',
      type: 'speaking',
      prompt: 'Explain what you want to send at the postal counter:',
      targetSentence: 'Good morning. I would like to send this package of books to Australia by registered airmail.'
    },
    {
      id: 'ex_198_a6',
      type: 'dictation',
      prompt: 'Listen and transcribe the postal update:',
      audioText: 'A signature is required upon delivery for this registered parcel.',
      targetSentence: 'A signature is required upon delivery for this registered parcel.'
    },
    {
      id: 'ex_198_a7',
      type: 'multiple_choice',
      prompt: 'Why is it important to keep your "proof of postage" receipt?',
      options: [
        { id: '1', text: 'It proves you sent the package and contains your tracking reference for compensation claims', isCorrect: true },
        { id: '2', text: 'It serves as a train ticket for free travel', isCorrect: false },
        { id: '3', text: 'You can use it to open any mailbox in the city', isCorrect: false },
        { id: '4', text: 'It allows you to bypass customs tax automatically', isCorrect: false }
      ]
    },
    {
      id: 'ex_198_a8',
      type: 'translate_tiles',
      prompt: 'Translate to English: क्या पार्सल में कोई निषिद्ध वस्तुएं हैं?',
      sourceSentence: '¿Hay artículos prohibidos dentro del paquete?',
      targetSentence: 'Are there any prohibited items inside the parcel',
      wordBank: ['Are', 'there', 'any', 'prohibited', 'items', 'inside', 'the', 'parcel', 'allowed']
    },
    {
      id: 'ex_198_a9',
      type: 'error_correction',
      prompt: 'Fix the error in this postal conversation:',
      sentence: 'The declared value from this box is thirty euros.',
      correctSentence: 'The declared value of this box is thirty euros.',
      errorSentence: 'The declared value from this box is thirty euros.',
      explanation: 'Use the preposition "of": "the declared value of this box".'
    },
    {
      id: 'ex_198_a10',
      type: 'dialogue_completion',
      prompt: 'Choose the best completion for the post office exchange:',
      context: 'Clerk: "Here is your receipt with the tracking number circled at the bottom."',
      options: [
        { id: '1', text: 'Thank you very much. I will track it online tonight.', isCorrect: true },
        { id: '2', text: 'No, I don\'t know where the library is.', isCorrect: false },
        { id: '3', text: 'The movie starts at eight o\'clock.', isCorrect: false },
        { id: '4', text: 'I would like to order a pizza.', isCorrect: false }
      ]
    }
  ]
};

// =========================================================================
// LESSON 199: Education Systems, Courses & Campus Life
// =========================================================================
export const LESSON_199: LessonConfigA2 = {
  num: 199,
  title: 'Education Systems, Courses & Campus Life',
  icon: '🎓',
  estMin: 25,
  objTitle: 'Navigating Higher Education, Course Registration & Campus Facilities',
  objDesc: 'Explore university subjects, academic terms, lecture halls, campus facilities, and course registration procedures.',
  objHi: 'उच्च शिक्षा प्रणालियों, पाठ्यक्रम पंजीकरण, व्याख्यान कक्षों (Lecture Halls), परिसर सुविधाओं और शैक्षणिक शर्तों का अभ्यास करें।',
  objEs: 'Navegar por sistemas de educación superior, inscripción a cursos y uso de instalaciones universitarias.',
  canDo: [
    'I can describe my studies, academic subjects, and university course choices.',
    'I can find and ask about campus facilities like lecture halls, laboratories, and student unions.',
    'I can discuss degree types (Bachelor\'s, Master\'s) and semester schedules.',
    'I can explain university campus maps and course timetables to new students.'
  ],
  canDoHi: [
    'मैं अपनी पढ़ाई, शैक्षणिक विषयों और विश्वविद्यालय पाठ्यक्रम विकल्पों का वर्णन कर सकता हूँ।',
    'मैं लेक्चर हॉल, प्रयोगशालाओं और छात्र संघ जैसी परिसर सुविधाओं के बारे में पूछ सकता हूँ।',
    'मैं डिग्री प्रकारों (बैचलर, मास्टर) और सेमेस्टर समय सारिणी पर चर्चा कर सकता हूँ।',
    'मैं नए छात्रों को विश्वविद्यालय परिसर का नक्शा और समय सारिणी समझा सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir mis estudios, asignaturas académicas y opciones de cursos universitarios.',
    'Puedo encontrar y preguntar sobre instalaciones del campus como aulas magnas, laboratorios y centros de estudiantes.',
    'Puedo hablar sobre tipos de títulos y cronogramas semestrales.',
    'Puedo explicar mapas del campus y horarios a nuevos estudiantes.'
  ],
  vocab: [
    { w: 'degree', p: '/dɪˈɡriː/', m: 'an academic qualification given by a college or university after examination', hi: 'स्नातक उपाधि / डिग्री', es: 'título universitario / grado', fr: 'diplôme / licence', de: 'Hochschulabschluss / Grad', pt: 'diploma / graduação', zh: '学位 / 本科学位', ar: 'درجة علمية / شهادة جامعية', ja: '学位', ru: 'диплом / ученая степень', ex: 'She graduated with a Bachelor\'s degree in Computer Science.', exHi: 'उसने कंप्यूटर विज्ञान में स्नातक (बैचलर) की डिग्री के साथ स्नातक किया।', exEs: 'Ella se graduó con un título de grado en Ciencias de la Computación.', ic: '🎓' },
    { w: 'lecture hall', p: '/ˈlektʃər hɔːl/', m: 'a large room with rows of seats for university presentations', hi: 'व्याख्यान कक्ष / लेक्चर हॉल', es: 'aula magna / anfiteatro', fr: 'amphithéâtre', de: 'Hörsaal', pt: 'auditório / anfiteatro', zh: '阶梯教室 / 讲堂', ar: 'قاعة المحاضرات', ja: '講義室 / 大講堂', ru: 'лекционная аудитория', ex: 'The introductory biology class is held in lecture hall B.', exHi: 'जीव विज्ञान की परिचयात्मक कक्षा लेक्चर हॉल बी में आयोजित की जाती है।', exEs: 'La clase introductoria de biología se imparte en el aula magna B.', ic: '🏛️' },
    { w: 'semester', p: '/sɪˈmestər/', m: 'a half-year term in a school or university', hi: 'सत्र / सेमेस्टर', es: 'semestre', fr: 'semestre', de: 'Semester', pt: 'semestre', zh: '学期', ar: 'فصل دراسي', ja: '学期 / セメスター', ru: 'семестр', ex: 'The autumn semester begins in late September.', exHi: 'शरद ऋतु का सेमेस्टर सितंबर के अंत में शुरू होता है।', exEs: 'El semestre de otoño comienza a finales de septiembre.', ic: '🗓️' },
    { w: 'professor', p: '/prəˈfesər/', m: 'a university teacher of the highest rank', hi: 'प्राध्यापक / प्रोफेसर', es: 'profesor/a universitario/a', fr: 'professeur d\'université', de: 'Professor(in)', pt: 'professor(a) universitário(a)', zh: '教授', ar: 'أستاذ جامعي', ja: '教授', ru: 'профессор / преподаватель', ex: 'Professor Jenkins gave an inspiring presentation on renewable energy.', exHi: 'प्रोफेसर जेनकिंस ने नवीकरणीय ऊर्जा पर एक प्रेरणादायक प्रस्तुति दी।', exEs: 'El profesor Jenkins dio una presentación inspiradora sobre energía renovable.', ic: '👨‍🏫' },
    { w: 'campus', p: '/ˈkæmpəs/', m: 'the grounds and buildings of a university or college', hi: 'विश्वविद्यालय परिसर / कैंपस', es: 'campus universitario', fr: 'campus universitaire', de: 'Campus / Universitätsgelände', pt: 'campus', zh: '大学校园', ar: 'الحرم الجامعي', ja: 'キャンパス / 構内', ru: 'кампус / студенческий городок', ex: 'The main campus includes libraries, sports centers, and dormitories.', exHi: 'मुख्य परिसर में पुस्तकालय, खेल केंद्र और छात्रावास शामिल हैं।', exEs: 'El campus principal incluye bibliotecas, centros deportivos y residencias.', ic: '🏫' },
    { w: 'laboratory', p: '/ləˈbɒrətri/', m: 'a room equipped for scientific experiments and research', hi: 'प्रयोगशाला / लैब', es: 'laboratorio', fr: 'laboratoire', de: 'Labor', pt: 'laboratório', zh: '实验室', ar: 'مختبر', ja: '実験室 / 研究室', ru: 'лаборатория', ex: 'Chemistry students must wear protective goggles in the laboratory.', exHi: 'रसायन विज्ञान के छात्रों को प्रयोगशाला में सुरक्षात्मक चश्मा पहनना चाहिए।', exEs: 'Los estudiantes de química deben usar gafas protectoras en el laboratorio.', ic: '🔬' },
    { w: 'enroll', p: '/ɪnˈrəʊl/', m: 'to officially register as a member or student of a course', hi: 'दाखिला लेना / नामांकित होना', es: 'matricularse / inscribirse', fr: 's\'inscrire', de: 'sich einschreiben / immatrikulieren', pt: 'matricular-se / inscrever-se', zh: '注册 / 选课', ar: 'التسجيل / الالتحاق', ja: '入学する / 履修登録する', ru: 'зачисляться / записываться на курс', ex: 'You can enroll in elective modules through the student portal.', exHi: 'आप छात्र पोर्टल के माध्यम से वैकल्पिक मॉड्यूल में नामांकन कर सकते हैं।', exEs: 'Puede matricularse en módulos optativos a través del portal de estudiantes.', ic: '📝' },
    { w: 'tuition', p: '/tjuːˈɪʃn/', m: 'teaching or the money paid for university instruction', hi: 'शिक्षण शुल्क / ट्यूशन फीस', es: 'matrícula / tasas de enseñanza', fr: 'frais de scolarité', de: 'Studiengebühren / Unterricht', pt: 'mensalidade / taxas escolares', zh: '学费', ar: 'الرسوم الدراسية', ja: '授業料 / 学費', ru: 'плата за обучение', ex: 'International student tuition must be paid before the start of term.', exHi: 'अंतरराष्ट्रीय छात्रों की ट्यूशन फीस सत्र शुरू होने से पहले चुकानी होगी।', exEs: 'La matrícula de los estudiantes internacionales debe pagarse antes del inicio del período.', ic: '💳' },
    { w: 'dormitory', p: '/ˈdɔːmətri/', m: 'a large bedroom or residential building for university students', hi: 'छात्रावास / हॉस्टल', es: 'residencia estudiantil / dormitorio', fr: 'résidence universitaire', de: 'Studentenwohnheim', pt: 'alojamento estudantil / dormitório', zh: '学生宿舍', ar: 'سكن جامعي / مهجع', ja: '学生寮', ru: 'студенческое общежитие', ex: 'First-year students usually live in on-campus dormitories.', exHi: 'प्रथम वर्ष के छात्र आमतौर पर परिसर के छात्रावासों में रहते हैं।', exEs: 'Los estudiantes de primer año suelen vivir en residencias universitarias.', ic: '🛏️' },
    { w: 'faculty', p: '/ˈfæklti/', m: 'a department or group of departments in a university', hi: 'संकाय / फैकल्टी', es: 'facultad / cuerpo docente', fr: 'faculté / corps professoral', de: 'Fakultät / Fachbereich', pt: 'faculdade / corpo docente', zh: '院系 / 教职员', ar: 'كلية / هيئة التدريس', ja: '学部 / 教授陣', ru: 'факультет / преподавательский состав', ex: 'The Faculty of Engineering is located across the courtyard.', exHi: 'इंजीनियरिंग संकाय आंगन के पार स्थित है।', exEs: 'La Facultad de Ingeniería está ubicada cruzando el patio.', ic: '🏛️' },
    { w: 'elective', p: '/ɪˈlektɪv/', m: 'an optional academic course or subject', hi: 'वैकल्पिक विषय', es: 'asignatura optativa', fr: 'matière à option / cours optionnel', de: 'Wahlfach / Wahlmodul', pt: 'disciplina eletiva / optativa', zh: '选修课', ar: 'مادة اختيارية', ja: '選択科目', ru: 'факультатив / предмет по выбору', ex: 'Students must choose two electives each term.', exHi: 'छात्रों को प्रत्येक सत्र में दो वैकल्पिक विषय चुनने होंगे।', exEs: 'Los estudiantes deben elegir dos asignaturas optativas cada período.', ic: '📚' },
    { w: 'scholarship', p: '/ˈskɒləʃɪp/', m: 'a grant or financial award to support a student\'s education', hi: 'छात्रवृत्ति / स्कॉलरशिप', es: 'beca de estudios', fr: 'bourse d\'études', de: 'Stipendium', pt: 'bolsa de estudos', zh: '奖学金', ar: 'منحة دراسية', ja: '奨学金', ru: 'стипендия / грант на учебу', ex: 'She was awarded an academic scholarship for outstanding results.', exHi: 'उसे उत्कृष्ट परिणामों के लिए एक शैक्षणिक छात्रवृत्ति से सम्मानित किया गया।', exEs: 'Le otorgaron una beca académica por resultados sobresalientes.', ic: '🏆' },
    { w: 'syllabus', p: '/ˈsɪləbəs/', m: 'an outline of the subjects in a course of study', hi: 'पाठ्यक्रम / सिलेबस', es: 'programa de la asignatura / plan de estudios', fr: 'programme des cours', de: 'Lehrplan / Vorlesungsverzeichnis', pt: 'plano de ensino / ementa', zh: '教学大纲 / 课程表', ar: 'المنهج الدراسي', ja: 'シラバス / 講義要項', ru: 'учебная программа / силлабус', ex: 'Download the course syllabus from the online student portal.', exHi: 'ऑनलाइन छात्र पोर्टल से पाठ्यक्रम सिलेबस डाउनलोड करें।', exEs: 'Descargue el programa de la asignatura desde el portal de estudiantes.', ic: '📑' },
    { w: 'assignment', p: '/əˈsaɪnmənt/', m: 'a piece of academic work allocated to students', hi: 'गृहकार्य / कार्यभार (असाइनमेंट)', es: 'trabajo asignado / tarea', fr: 'devoir / travail à rendre', de: 'Hausarbeit / Aufgabe', pt: 'trabalho / tarefa acadêmica', zh: '作业 / 课程任务', ar: 'واجب دراسي / مهمة', ja: '課題 / レポート', ru: 'учебное задание / письменная работа', ex: 'Our first written assignment is due on Friday afternoon.', exHi: 'हमारा पहला लिखित असाइनमेंट शुक्रवार दोपहर को जमा होना है।', exEs: 'Nuestro primer trabajo escrito debe entregarse el viernes por la tarde.', ic: '📝' },
    { w: 'thesis', p: '/ˈθiːsɪs/', m: 'a long essay or research dissertation for a degree', hi: 'शोध प्रबंध / थीसिस', es: 'tesis / tesina', fr: 'thèse / mémoire', de: 'Abschlussarbeit / Dissertation', pt: 'tese / monografia', zh: '学位论文', ar: 'أطروحة / رسالة جامعية', ja: '学位論文 / 卒業論文', ru: 'дипломная работа / диссертация', ex: 'Master\'s candidates must submit a completed thesis.', exHi: 'मास्टर डिग्री के उम्मीदवारों को एक पूरा शोध प्रबंध (थीसिस) जमा करना होगा।', exEs: 'Los candidatos a maestría deben presentar una tesis completa.', ic: '📖' }
  ],
  chunks: [
    { phrase: 'major in', meaning: 'specialize in a specific primary academic discipline', hi: 'मुख्य विषय के रूप में पढ़ना (मेजर करना)', es: 'especializarse en / cursar como carrera principal', fr: 'se spécialiser en', de: 'sein Hauptfach haben in', pt: 'fazer faculdade de / especializar-se em', zh: '主修', ar: 'التخصص في', ja: '〜を専攻する', ru: 'специализироваться по / изучать как основной предмет', note: 'Academic idiom: "I plan to major in mechanical engineering."', ic: '🎓' },
    { phrase: 'attend lectures', meaning: 'be present for academic presentations given by professors', hi: 'व्याख्यानों में भाग लेना', es: 'asistir a clases magistrales', fr: 'assister aux cours magistraux', de: 'Vorlesungen besuchen', pt: 'assistir a palestras / aulas', zh: '听讲座 / 上大课', ar: 'حضور المحاضرات', ja: '講義に出席する', ru: 'посещать лекции', note: 'Collocation: "Full-time students must attend lectures regularly."', ic: '👨‍🏫' },
    { phrase: 'student union', meaning: 'an organization representing students and providing campus amenities', hi: 'छात्र संघ', es: 'asociación de estudiantes / centro de estudiantes', fr: 'bureau des étudiants (BDE)', de: 'Studierendenvertretung (AStA)', pt: 'grêmio estudantil / diretório acadêmico', zh: '学生会', ar: 'اتحاد الطلبة', ja: '学生自治会 / スチューデントユニオン', ru: 'студенческий совет / профсоюз студентов', note: 'Campus life: "The cafeteria and social clubs are based in the student union."', ic: '🏛️' },
    { phrase: 'submit an assignment', meaning: 'hand in academic work before the deadline', hi: 'असाइनमेंट जमा करना', es: 'entregar una tarea o trabajo', fr: 'rendre un devoir', de: 'eine Arbeit einreichen', pt: 'entregar um trabalho', zh: '提交作业', ar: 'تسليم الواجب', ja: '課題を提出する', ru: 'сдать учебную работу', note: 'Action: "Make sure you submit your assignment before midnight."', ic: '📤' },
    { phrase: 'study abroad', meaning: 'spend a semester or year at a foreign university', hi: 'विदेश में पढ़ाई करना', es: 'estudiar en el extranjero', fr: 'étudier à l\'étranger', de: 'im Ausland studieren', pt: 'estudarem no exterior / intercâmbio', zh: '出国留学', ar: 'الدراسة في الخارج', ja: '留学する', ru: 'учиться за границей', note: 'Exchange program: "She wants to study abroad in Spain for a semester."', ic: '✈️' },
    { phrase: 'course requirements', meaning: 'the specific prerequisites and credits needed to pass a course', hi: 'पाठ्यक्रम की आवश्यकताएं / शर्तें', es: 'requisitos del curso', fr: 'conditions du cours', de: 'Kursvoraussetzungen', pt: 'requisitos da disciplina', zh: '课程考核要求', ar: 'متطلبات المساق', ja: '履修要件', ru: 'требования учебного курса', note: 'Curriculum term: "Check the course requirements before enrolling."', ic: '📋' }
  ],
  grammar: {
    title: 'Defining Relative Clauses for Campus People & Facilities',
    concept: 'Using who, which, and where to clearly define people, subjects, and university locations.',
    patterns: [
      {
        title: 'Defining Places with "where"',
        structure: 'Noun (Place) + where + Subject + Verb',
        rule: 'Identifies campus facilities by the activity happening there without a preposition at the end.',
        examples: [
          { en: 'The library is the building where students study quietly.', hi: 'पुस्तकालय वह इमारत है जहाँ छात्र शांति से पढ़ते हैं।', es: 'La biblioteca es el edificio donde los estudiantes estudian en silencio.' },
          { en: 'The laboratory is the room where we conduct chemistry experiments.', hi: 'प्रयोगशाला वह कमरा है जहाँ हम रसायन विज्ञान के प्रयोग करते हैं।', es: 'El laboratorio es la sala donde realizamos experimentos de química.' }
        ]
      },
      {
        title: 'Defining People & Academic Subjects with "who" and "which"',
        structure: 'Person + who + Verb / Subject + which + Verb',
        rule: '"Who" is used for professors and tutors; "which" is used for modules and degrees.',
        examples: [
          { en: 'The professor who teaches economics is very knowledgeable.', hi: 'अर्थशास्त्र पढ़ाने वाले प्रोफेसर बहुत जानकार हैं।', es: 'El profesor que enseña economía sabe mucho.' },
          { en: 'This is the elective course which covers web design.', hi: 'यह वह वैकल्पिक पाठ्यक्रम है जो वेब डिज़ाइन को कवर करता है।', es: 'Este es el curso optativo que cubre diseño web.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'This is the lecture hall which we have classes.',
      cor: 'This is the lecture hall where we have classes. (or: which we have classes in)',
      exp: 'Use "where" for places of action, or "which" with a preposition ("in which / which we have classes in").',
      hi: 'स्थान के लिए "where" का प्रयोग करें: "the lecture hall where we have classes".',
      es: 'Use "where" para lugares: "the lecture hall where we have classes".'
    },
    {
      inc: 'I am doing my career in history.',
      cor: 'I am doing a degree in history. / I am majoring in history.',
      exp: 'In English, "career" means your working professional life. For university studies, say "degree" or "major in".',
      hi: 'विश्वविद्यालय की पढ़ाई के लिए "doing a degree in" या "majoring in" कहें, "career" नहीं।',
      es: 'En inglés, los estudios universitarios se llaman "degree" o "major", no "career".'
    }
  ],
  dialogues: [
    {
      title: 'Orientation Day for International Students',
      context: 'Hannah is showing Tariq around the university campus on orientation morning.',
      charA: { name: 'Hannah', av: '👩', role: 'Student Ambassador' },
      charB: { name: 'Tariq', av: '👨', role: 'First-Year Student' },
      turns: [
        { spk: 'Hannah', text: 'Welcome to campus, Tariq! What degree are you enrolled in this semester?', hi: 'परिसर में आपका स्वागत है, तारिक! इस सेमेस्टर में आपने किस डिग्री में दाखिला लिया है?', es: '¡Bienvenido al campus, Tariq! ¿En qué carrera estás matriculado este semestre?' },
        { spk: 'Tariq', text: 'Thank you, Hannah! I am majoring in Civil Engineering in the Faculty of Technology.', hi: 'धन्यवाद, हन्ना! मैं प्रौद्योगिकी संकाय में सिविल इंजीनियरिंग की पढ़ाई कर रहा हूँ।', es: '¡Gracias, Hannah! Me estoy especializando en Ingeniería Civil en la Facultad de Tecnología.' },
        { spk: 'Hannah', text: 'That\'s great! Over there is the science laboratory where you\'ll do practical work, and behind it is the main lecture hall.', hi: 'यह तो बहुत बढ़िया है! वहाँ विज्ञान प्रयोगशाला है जहाँ आप व्यावहारिक कार्य करेंगे, और इसके पीछे मुख्य लेक्चर हॉल है।', es: '¡Genial! Allí está el laboratorio de ciencias donde harás prácticas, y detrás está el aula magna principal.' },
        { spk: 'Tariq', text: 'And where can I pick up my student ID card and course syllabus?', hi: 'और मैं अपना छात्र पहचान पत्र और पाठ्यक्रम सिलेबस कहाँ से प्राप्त कर सकता हूँ?', es: '¿Y dónde puedo recoger mi carné de estudiante y el programa del curso?' },
        { spk: 'Hannah', text: 'At the Student Union building near the campus library. Let\'s walk over together.', hi: 'परिसर पुस्तकालय के पास छात्र संघ भवन में। चलिए साथ में चलते हैं।', es: 'En el edificio del Centro de Estudiantes cerca de la biblioteca. Vamos juntos.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_199_p1',
      type: 'multiple_choice',
      prompt: 'What does it mean to "major in" a subject at university?',
      options: [
        { id: '1', text: 'To choose that subject as your primary field of academic study', isCorrect: true },
        { id: '2', text: 'To fail your final exams', isCorrect: false },
        { id: '3', text: 'To work as the campus bus driver', isCorrect: false },
        { id: '4', text: 'To study only during summer vacation', isCorrect: false }
      ]
    },
    {
      id: 'ex_199_p2',
      type: 'fill_blank',
      prompt: 'Complete the defining relative clause for a campus facility:',
      sourceSentence: 'The library is the quiet building ____ students do research.',
      targetSentence: 'The library is the quiet building where students do research.',
      blankIndex: 6,
      options: [
        { id: '1', text: 'where', isCorrect: true },
        { id: '2', text: 'who', isCorrect: false },
        { id: '3', text: 'whose', isCorrect: false },
        { id: '4', text: 'which to', isCorrect: false }
      ]
    },
    {
      id: 'ex_199_p3',
      type: 'translate_tiles',
      prompt: 'Translate to English: मैं कंप्यूटर विज्ञान में डिग्री की पढ़ाई कर रहा हूँ।',
      sourceSentence: 'Estoy estudiando una carrera en ciencias de la computación.',
      targetSentence: 'I am doing a degree in computer science',
      wordBank: ['I', 'am', 'doing', 'a', 'degree', 'in', 'computer', 'science', 'career']
    },
    {
      id: 'ex_199_p4',
      type: 'word_order',
      prompt: 'Arrange into a campus sentence using a relative clause:',
      targetSentence: 'The professor who teaches mathematics is very helpful',
      wordBank: ['The', 'professor', 'who', 'teaches', 'mathematics', 'is', 'very', 'helpful']
    },
    {
      id: 'ex_199_p5',
      type: 'error_correction',
      prompt: 'Fix the error in relative pronoun choice:',
      sentence: 'This is the laboratory which students conduct biology experiments.',
      correctSentence: 'This is the laboratory where students conduct biology experiments.',
      errorSentence: 'This is the laboratory which students conduct biology experiments.',
      explanation: 'Use "where" because "the laboratory" is the place in which the action occurs.'
    },
    {
      id: 'ex_199_p6',
      type: 'match_pairs',
      prompt: 'Match higher education words with their meanings:',
      options: [
        { id: 'm1', text: 'Syllabus → Course outline and weekly plan' },
        { id: 'm2', text: 'Scholarship → Financial grant for education' },
        { id: 'm3', text: 'Elective → Optional academic course' },
        { id: 'm4', text: 'Dormitory → On-campus student residence' }
      ]
    },
    {
      id: 'ex_199_p7',
      type: 'listening',
      prompt: 'Listen to the university orientation announcement:',
      audioText: 'All first-year engineering students must attend the safety briefing in lecture hall C at ten o\'clock.',
      options: [
        { id: '1', text: 'Safety briefing in Lecture Hall C at 10:00', isCorrect: true },
        { id: '2', text: 'Chemistry test in the library at 14:00', isCorrect: false },
        { id: '3', text: 'Sports match in the stadium at 18:00', isCorrect: false },
        { id: '4', text: 'Campus tour starting at midnight', isCorrect: false }
      ]
    },
    {
      id: 'ex_199_p8',
      type: 'speak_sentence',
      prompt: 'Speak this academic introduction clearly:',
      targetSentence: 'I am enrolled in the autumn semester for business administration.',
      audioText: 'I am enrolled in the autumn semester for business administration.'
    },
    {
      id: 'ex_199_p9',
      type: 'dialogue_completion',
      prompt: 'Choose the most natural response for a university student:',
      context: 'Student advisor: "Have you chosen your elective modules for this term yet?"',
      options: [
        { id: '1', text: 'Yes, I registered for Environmental Policy and Digital Marketing.', isCorrect: true },
        { id: '2', text: 'No, I don\'t want to eat lunch today.', isCorrect: false },
        { id: '3', text: 'I forgot to buy an airplane ticket.', isCorrect: false },
        { id: '4', text: 'Where is the train station?', isCorrect: false }
      ]
    },
    {
      id: 'ex_199_p10',
      type: 'reading_comprehension',
      prompt: 'Campus Notice: "The library will be open 24 hours during the final exam period. Group study rooms on the second floor must be booked online at least 24 hours in advance." How can students use a group study room?',
      options: [
        { id: '1', text: 'They must book it online at least 24 hours in advance', isCorrect: true },
        { id: '2', text: 'They can walk in without booking anytime', isCorrect: false },
        { id: '3', text: 'They must pay cash at the door', isCorrect: false },
        { id: '4', text: 'Group study rooms are permanently closed', isCorrect: false }
      ]
    },
    {
      id: 'ex_199_p11',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct term:',
      sourceSentence: 'Students who receive an academic ____ do not have to pay full tuition fees.',
      targetSentence: 'Students who receive an academic scholarship do not have to pay full tuition fees.',
      blankIndex: 5,
      options: [
        { id: '1', text: 'scholarship', isCorrect: true },
        { id: '2', text: 'dormitory', isCorrect: false },
        { id: '3', text: 'queue', isCorrect: false },
        { id: '4', text: 'postage', isCorrect: false }
      ]
    },
    {
      id: 'ex_199_p12',
      type: 'translate_tiles',
      prompt: 'Translate to English: हमारा पहला असाइनमेंट शुक्रवार को जमा होना है।',
      sourceSentence: 'Nuestro primer trabajo debe entregarse el viernes.',
      targetSentence: 'Our first assignment is due on Friday',
      wordBank: ['Our', 'first', 'assignment', 'is', 'due', 'on', 'Friday', 'holiday']
    },
    {
      id: 'ex_199_p13',
      type: 'multiple_choice',
      prompt: 'Where would you find student club meetings, advisory services, and casual food courts on campus?',
      options: [
        { id: '1', text: 'At the Student Union building', isCorrect: true },
        { id: '2', text: 'Inside the chemical storage room', isCorrect: false },
        { id: '3', text: 'At the police headquarters', isCorrect: false },
        { id: '4', text: 'In the customs office', isCorrect: false }
      ]
    },
    {
      id: 'ex_199_p14',
      type: 'dictation',
      prompt: 'Listen and write down the course announcement:',
      audioText: 'The course syllabus is available to download from the student portal.',
      targetSentence: 'The course syllabus is available to download from the student portal.'
    },
    {
      id: 'ex_199_p15',
      type: 'speaking',
      prompt: 'Tell another student what degree you are pursuing and where your lectures take place:',
      targetSentence: 'I am studying for a Bachelor\'s degree in architecture, and my lectures are in hall four.'
    },
    {
      id: 'ex_199_p16',
      type: 'word_order',
      prompt: 'Arrange into a relative clause sentence:',
      targetSentence: 'This is the elective course which covers renewable energy',
      wordBank: ['This', 'is', 'the', 'elective', 'course', 'which', 'covers', 'renewable', 'energy']
    },
    {
      id: 'ex_199_p17',
      type: 'fill_blank',
      prompt: 'Select the correct academic term:',
      sourceSentence: 'Final-year undergraduate students must submit a research ____ before graduation.',
      targetSentence: 'Final-year undergraduate students must submit a research thesis before graduation.',
      blankIndex: 6,
      options: [
        { id: '1', text: 'thesis', isCorrect: true },
        { id: '2', text: 'parcel', isCorrect: false },
        { id: '3', text: 'customs', isCorrect: false },
        { id: '4', text: 'queue', isCorrect: false }
      ]
    },
    {
      id: 'ex_199_p18',
      type: 'error_correction',
      prompt: 'Correct the error in verb choice:',
      sentence: 'I will assist to all lectures this semester.',
      correctSentence: 'I will attend all lectures this semester.',
      errorSentence: 'I will assist to all lectures this semester.',
      explanation: 'In English, "attend" means to be present at classes ("attend lectures"). "Assist" means to help.'
    },
    {
      id: 'ex_199_p19',
      type: 'multiple_choice',
      prompt: 'What is a "semester"?',
      options: [
        { id: '1', text: 'One of the two main teaching periods of an academic year', isCorrect: true },
        { id: '2', text: 'A special type of graduation cap', isCorrect: false },
        { id: '3', text: 'A library book that is overdue', isCorrect: false },
        { id: '4', text: 'A sports trophy', isCorrect: false }
      ]
    },
    {
      id: 'ex_199_p20',
      type: 'translate_tiles',
      prompt: 'Translate to English: वह छात्र जो पुस्तकालय में काम करता है, बहुत दयालु है।',
      sourceSentence: 'El estudiante que trabaja en la biblioteca es muy amable.',
      targetSentence: 'The student who works in the library is very kind',
      wordBank: ['The', 'student', 'who', 'works', 'in', 'the', 'library', 'is', 'very', 'kind', 'where']
    }
  ],
  review: [
    {
      id: 'ex_199_r1',
      type: 'multiple_choice',
      prompt: 'Spaced Retrieval: If an item in a package can break easily, it is marked as:',
      options: [
        { id: '1', text: 'fragile', isCorrect: true },
        { id: '2', text: 'registered', isCorrect: false },
        { id: '3', text: 'declared', isCorrect: false },
        { id: '4', text: 'prohibited', isCorrect: false }
      ]
    },
    {
      id: 'ex_199_r2',
      type: 'fill_blank',
      prompt: 'Spaced Retrieval: Complete the polite indirect inquiry:',
      sourceSentence: 'Could you tell me where the citizen service counter ____?',
      targetSentence: 'Could you tell me where the citizen service counter is?',
      blankIndex: 7,
      options: [
        { id: '1', text: 'is', isCorrect: true },
        { id: '2', text: 'is it', isCorrect: false },
        { id: '3', text: 'does be', isCorrect: false },
        { id: '4', text: 'be', isCorrect: false }
      ]
    },
    {
      id: 'ex_199_r3',
      type: 'translate_tiles',
      prompt: 'Translate to English: वह प्रोफेसर जो भौतिकी पढ़ाते हैं, आज अनुपस्थित हैं।',
      sourceSentence: 'El profesor que enseña física está ausente hoy.',
      targetSentence: 'The professor who teaches physics is absent today',
      wordBank: ['The', 'professor', 'who', 'teaches', 'physics', 'is', 'absent', 'today', 'which']
    },
    {
      id: 'ex_199_r4',
      type: 'word_order',
      prompt: 'Arrange into a relative clause sentence:',
      targetSentence: 'This is the university where I completed my degree',
      wordBank: ['This', 'is', 'the', 'university', 'where', 'I', 'completed', 'my', 'degree']
    },
    {
      id: 'ex_199_r5',
      type: 'listening',
      prompt: 'Listen to the student conversation and identify the speaker\'s major:',
      audioText: 'I am in my second year majoring in modern history and literature.',
      options: [
        { id: '1', text: 'Second year majoring in modern history and literature', isCorrect: true },
        { id: '2', text: 'First year studying mechanical engineering', isCorrect: false },
        { id: '3', text: 'Graduating student in medicine', isCorrect: false },
        { id: '4', text: 'Law student in their fourth year', isCorrect: false }
      ]
    },
    {
      id: 'ex_199_r6',
      type: 'speak_sentence',
      prompt: 'Speak this university inquiry clearly:',
      targetSentence: 'Where is the lecture hall where the psychology seminar takes place?',
      audioText: 'Where is the lecture hall where the psychology seminar takes place?'
    },
    {
      id: 'ex_199_r7',
      type: 'error_correction',
      prompt: 'Fix the error in the sentence:',
      sentence: 'I will major on international relations.',
      correctSentence: 'I will major in international relations.',
      errorSentence: 'I will major on international relations.',
      explanation: 'The correct collocation is "major in [subject]", not "major on".'
    },
    {
      id: 'ex_199_r8',
      type: 'match_pairs',
      prompt: 'Match academic levels with degrees:',
      options: [
        { id: 'm1', text: 'Undergraduate → Bachelor\'s Degree (BA / BSc)' },
        { id: 'm2', text: 'Postgraduate → Master\'s Degree (MA / MSc)' },
        { id: 'm3', text: 'Doctoral research → PhD Degree' },
        { id: 'm4', text: 'Optional subject → Elective module' }
      ]
    },
    {
      id: 'ex_199_r9',
      type: 'fill_blank',
      prompt: 'Select the missing preposition:',
      sourceSentence: 'She lives ____ campus in the student residence halls.',
      targetSentence: 'She lives on campus in the student residence halls.',
      blankIndex: 2,
      options: [
        { id: '1', text: 'on', isCorrect: true },
        { id: '2', text: 'at to', isCorrect: false },
        { id: '3', text: 'into', isCorrect: false },
        { id: '4', text: 'over', isCorrect: false }
      ]
    },
    {
      id: 'ex_199_r10',
      type: 'translate_tiles',
      prompt: 'Translate to English: क्या आप छात्र संघ भवन में अध्ययन कर सकते हैं?',
      sourceSentence: '¿Puedes estudiar en el edificio del centro de estudiantes?',
      targetSentence: 'Can you study in the student union building',
      wordBank: ['Can', 'you', 'study', 'in', 'the', 'student', 'union', 'building', 'sign']
    }
  ],
  assessment: [
    {
      id: 'ex_199_a1',
      type: 'reading_comprehension',
      prompt: 'Course Registration Guidelines: "Students must complete 60 credits per semester. 40 credits must come from mandatory core modules in your department, and 20 credits may be selected from elective modules across any faculty." How many credits must be chosen from electives?',
      options: [
        { id: '1', text: '20 credits', isCorrect: true },
        { id: '2', text: '40 credits', isCorrect: false },
        { id: '3', text: '60 credits', isCorrect: false },
        { id: '4', text: 'Zero credits', isCorrect: false }
      ]
    },
    {
      id: 'ex_199_a2',
      type: 'mediation',
      prompt: 'A foreign exchange student is looking at a university schedule that reads: "BIOL101 - Lecture Hall 4 (Tue 10:00), Lab 2B (Thu 14:00)". Explain when and where they need to go for both classes.',
      options: [
        { id: '1', text: 'You have a lecture in Lecture Hall 4 on Tuesday at 10:00 AM, and practical laboratory work in Lab 2B on Thursday at 2:00 PM.', isCorrect: true },
        { id: '2', text: 'You only need to attend one class on Friday night.', isCorrect: false },
        { id: '3', text: 'Both classes were cancelled due to bad weather.', isCorrect: false },
        { id: '4', text: 'You must buy two textbooks before entering the canteen.', isCorrect: false }
      ],
      explanation: 'True mediation decodes academic timetables into actionable instructions.'
    },
    {
      id: 'ex_199_a3',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct relative pronoun:',
      sourceSentence: 'The academic advisor ____ helped me with course registration was very patient.',
      targetSentence: 'The academic advisor who helped me with course registration was very patient.',
      blankIndex: 3,
      options: [
        { id: '1', text: 'who', isCorrect: true },
        { id: '2', text: 'where', isCorrect: false },
        { id: '3', text: 'which', isCorrect: false },
        { id: '4', text: 'when', isCorrect: false }
      ]
    },
    {
      id: 'ex_199_a4',
      type: 'writing_prompt',
      prompt: 'Write a short paragraph (3-4 sentences) describing what subject you are studying (or would like to study) at university, which facilities you use most, and why.',
      targetSentence: 'I am majoring in Computer Science because I enjoy programming and technology. I spend most of my time in the computer laboratories and the main university library. In the evenings, I often meet friends at the student union to study together.'
    },
    {
      id: 'ex_199_a5',
      type: 'speaking',
      prompt: 'Introduce your university studies to a peer: state your major, year of study, and favorite elective course.',
      targetSentence: 'Hi, I am in my first year studying economics, and my favorite elective course is foreign languages.'
    },
    {
      id: 'ex_199_a6',
      type: 'dictation',
      prompt: 'Listen and transcribe the campus facility instruction:',
      audioText: 'The main library provides quiet study zones and private meeting rooms for students.',
      targetSentence: 'The main library provides quiet study zones and private meeting rooms for students.'
    },
    {
      id: 'ex_199_a7',
      type: 'multiple_choice',
      prompt: 'Which relative pronoun correctly connects a place of action in English?',
      options: [
        { id: '1', text: 'where', isCorrect: true },
        { id: '2', text: 'who', isCorrect: false },
        { id: '3', text: 'which to', isCorrect: false },
        { id: '4', text: 'whose', isCorrect: false }
      ]
    },
    {
      id: 'ex_199_a8',
      type: 'translate_tiles',
      prompt: 'Translate to English: छात्रवृत्ति ने मुझे अपनी ट्यूशन फीस का भुगतान करने में मदद की।',
      sourceSentence: 'La beca me ayudó a pagar mi matrícula universitaria.',
      targetSentence: 'The scholarship helped me pay my tuition fees',
      wordBank: ['The', 'scholarship', 'helped', 'me', 'pay', 'my', 'tuition', 'fees', 'stamp']
    },
    {
      id: 'ex_199_a9',
      type: 'error_correction',
      prompt: 'Correct the error in this academic statement:',
      sentence: 'The student which won the prize is from Japan.',
      correctSentence: 'The student who won the prize is from Japan.',
      errorSentence: 'The student which won the prize is from Japan.',
      explanation: 'Use "who" (or "that") for people, not "which".'
    },
    {
      id: 'ex_199_a10',
      type: 'dialogue_completion',
      prompt: 'Choose the best completion for the orientation discussion:',
      context: 'Hannah: "If you ever have questions about coursework, where should you go?"',
      options: [
        { id: '1', text: 'To the professor\'s office hours or the student academic center.', isCorrect: true },
        { id: '2', text: 'To the airport ticket counter.', isCorrect: false },
        { id: '3', text: 'To the city cinema on Tuesday.', isCorrect: false },
        { id: '4', text: 'I don\'t like riding bicycles.', isCorrect: false }
      ]
    }
  ]
};

console.log("Generating Lessons 197, 198, 199...");
saveUnit14Lesson(buildDetailedLessonA2_Unit14(LESSON_197));
saveUnit14Lesson(buildDetailedLessonA2_Unit14(LESSON_198));
saveUnit14Lesson(buildDetailedLessonA2_Unit14(LESSON_199));
