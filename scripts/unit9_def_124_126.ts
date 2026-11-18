import { LessonConfigA2 } from './unit9_builder_helper';

// =========================================================================
// LESSON 124: Present Perfect with "Just", "Already", and "Yet"
// =========================================================================
export const LESSON_124_CONFIG: LessonConfigA2 = {
  num: 124,
  title: 'Present Perfect with "Just", "Already", and "Yet"',
  icon: '⏱️',
  estMin: 25,
  objTitle: 'Managing Daily Updates, News & Task Status with Just, Already & Yet',
  objDesc: 'Learn to report recent actions, unexpected completions, and pending tasks using the Present Perfect with "just", "already", and "yet" in personal and workplace contexts.',
  objHi: 'हाल ही में पूरे हुए काम ("just"), पहले से पूरे हो चुके काम ("already") और लंबित कार्यों ("yet") की जानकारी देना सीखें।',
  objEs: 'Informar sobre acciones recientes, completadas antes de lo previsto o pendientes usando "just", "already" y "yet".',
  canDo: [
    'I can report very recent events using "have/has just + past participle".',
    'I can state that a task is finished sooner than expected using "already".',
    'I can ask questions and state negative expectations using "yet" at the end of sentences.',
    'I can give clear, concise status updates in professional and personal daily check-ins.'
  ],
  canDoHi: [
    'मैं अभी-अभी पूरी हुई घटनाओं के लिए "have/has just + past participle" का उपयोग कर सकता हूँ।',
    'मैं समय से पहले पूरे हुए कार्यों के लिए "already" का सही प्रयोग कर सकता हूँ।',
    'मैं वाक्यों के अंत में "yet" लगाकर सवाल पूछ सकता हूँ और काम के बाकी होने की जानकारी दे सकता हूँ।',
    'मैं दैनिक बातचीत और कार्यस्थल में स्पष्ट स्टेटस अपडेट दे सकता हूँ।'
  ],
  canDoEs: [
    'Puedo informar de eventos muy recientes con "just".',
    'Puedo indicar que una tarea está terminada con "already".',
    'Puedo usar "yet" al final de preguntas y negaciones.',
    'Puedo dar actualizaciones de estado claras en el trabajo o vida cotidiana.'
  ],
  vocab: [
    { w: 'just', p: '/dʒʌst/', m: 'a very short time ago (with present perfect)', hi: 'बस अभी-अभी / थोड़ी देर पहले', es: 'acabar de / recién', fr: 'venir de / juste', de: 'gerade / soeben', pt: 'acabar de / recém', zh: '刚刚', ar: 'للتو', ja: 'ちょうど / たった今', ru: 'только что', ex: 'I have just received an urgent email from head office.', exHi: 'मुझे मुख्यालय से अभी-अभी एक ज़रूरी ईमेल मिला है।', exEs: 'Acabo de recibir un correo urgente de la sede central.', ic: '⚡' },
    { w: 'already', p: '/ɔːlˈredi/', m: 'before now or sooner than expected', hi: 'पहले ही / पहले से', es: 'ya', fr: 'déjà', de: 'bereits / schon', pt: 'já', zh: '已经', ar: 'بالفعل', ja: 'すでに / もう', ru: 'уже', ex: 'We have already finished the first phase of the project.', exHi: 'हम पहले ही परियोजना का पहला चरण पूरा कर चुके हैं।', exEs: 'Ya hemos terminado la primera fase del proyecto.', ic: '✅' },
    { w: 'yet', p: '/jet/', m: 'until now or up to the present time (in negatives and questions)', hi: 'अभी तक / अब तक', es: 'aún / todavía / ya (en preguntas)', fr: 'encore / déjà', de: 'noch / schon', pt: 'ainda / já (perguntas)', zh: '还 / 已经(问句中)', ar: 'حتى الآن / بعد', ja: 'まだ / もう', ru: 'еще / уже', ex: 'Has the delivery driver arrived yet?', exHi: 'क्या डिलीवरी ड्राइवर अभी तक आ गया है?', exEs: '¿Ha llegado ya el repartidor?', ic: '⏳' },
    { w: 'update', p: '/ʌpˈdeɪt/', m: 'make something more modern or give the latest news', hi: 'अद्यतन / ताज़ा जानकारी', es: 'actualización / poner al día', fr: 'mise à jour', de: 'Aktualisierung', pt: 'atualização', zh: '更新', ar: 'تحديث', ja: '最新情報 / 更新', ru: 'обновление', ex: 'Could you give our team a quick update on the budget?', exHi: 'क्या आप हमारी टीम को बजट पर त्वरित अपडेट दे सकते हैं?', exEs: '¿Podrías darnos una actualización rápida sobre el presupuesto?', ic: '🔄' },
    { w: 'deliver', p: '/dɪˈlɪvə/', m: 'bring and hand over goods or letters to the proper recipient', hi: 'पहुंचाना / सुपुर्द करना', es: 'entregar / repartir', fr: 'livrer', de: 'liefern / zustellen', pt: 'entregar', zh: '送达 / 递送', ar: 'يسلّم / يوصل', ja: '配達する', ru: 'доставлять', ex: 'The courier has just delivered our new office computers.', exHi: 'कूरियर ने अभी-अभी हमारे नए कार्यालय कंप्यूटर डिलीवर किए हैं।', exEs: 'El mensajero acaba de entregar nuestras nuevas computadoras.', ic: '📦' },
    { w: 'confirm', p: '/kənˈfɜːm/', m: 'establish the truth or correctness of something', hi: 'पुष्टि करना / पक्का करना', es: 'confirmar', fr: 'confirmer', de: 'bestätigen', pt: 'confirmar', zh: '确认', ar: 'يؤكد', ja: '確認する', ru: 'подтверждать', ex: 'Have you confirmed the restaurant reservation yet?', exHi: 'क्या आपने अभी तक रेस्तरां आरक्षण की पुष्टि की है?', exEs: '¿Ya has confirmado la reserva del restaurante?', ic: '✔️' },
    { w: 'invoice', p: '/ˈɪnvɔɪs/', m: 'a list of goods sent or services provided with a statement of the sum due', hi: 'चालान / बिल', es: 'factura', fr: 'facture', de: 'Rechnung', pt: 'fatura', zh: '发票', ar: 'فاتورة', ja: '請求書', ru: 'счет-фактура', ex: 'The accounting team has already paid the supplier invoice.', exHi: 'लेखा टीम ने पहले ही आपूर्तिकर्ता के बिल का भुगतान कर दिया है।', exEs: 'El equipo de contabilidad ya ha pagado la factura del proveedor.', ic: '🧾' },
    { w: 'agenda', p: '/əˈdʒendə/', m: 'a list of items to be discussed at a formal meeting', hi: 'कार्यसूची / एजेंडा', es: 'orden del día / agenda', fr: 'ordre du jour', de: 'Tagesordnung', pt: 'pauta / agenda', zh: '议程', ar: 'جدول أعمال', ja: '協議事項 / アジェンダ', ru: 'повестка дня', ex: 'I have just emailed the meeting agenda to all participants.', exHi: 'मैंने अभी-अभी सभी प्रतिभागियों को बैठक की कार्यसूची ईमेल की है।', exEs: 'Acabo de enviar por correo la agenda de la reunión.', ic: '📋' },
    { w: 'submit', p: '/səbˈmɪt/', m: 'present a proposal, application, or document for consideration', hi: 'जमा करना / प्रस्तुत करना', es: 'enviar / presentar', fr: 'soumettre', de: 'einreichen', pt: 'enviar / submeter', zh: '提交', ar: 'يقدم / يرسل', ja: '提出する', ru: 'подавать / отправлять', ex: 'Have all the candidates submitted their application forms yet?', exHi: 'क्या सभी उम्मीदवारों ने अपने आवेदन पत्र अभी तक जमा कर दिए हैं?', exEs: '¿Han enviado ya todos los candidatos sus formularios?', ic: '📥' },
    { w: 'printer', p: '/ˈprɪntə/', m: 'a machine for printing text or pictures onto paper', hi: 'प्रिंटर', es: 'impresora', fr: 'imprimante', de: 'Drucker', pt: 'impressora', zh: '打印机', ar: 'طابعة', ja: 'プリンター', ru: 'принтер', ex: 'The IT technician has already fixed the office printer.', exHi: 'आईटी तकनीशियन ने पहले ही कार्यालय प्रिंटर को ठीक कर दिया है।', exEs: 'El técnico de TI ya ha arreglado la impresora de la oficina.', ic: '🖨️' },
    { w: 'urgent', p: '/ˈɜːdʒənt/', m: 'requiring immediate action or attention', hi: 'अत्यावश्यक / ज़रूरी', es: 'urgente', fr: 'urgent', de: 'dringend', pt: 'urgente', zh: '紧急的', ar: 'عاجل', ja: '緊急の', ru: 'срочный', ex: 'We have just received an urgent message from the client.', exHi: 'हमें क्लाइंट से अभी-अभी एक ज़रूरी संदेश मिला है।', exEs: 'Acabamos de recibir un mensaje urgente del cliente.', ic: '🚨' },
    { w: 'cancel', p: '/ˈkænsl/', m: 'decide or announce that a planned event will not take place', hi: 'रद्द करना / निरस्त करना', es: 'cancelar', fr: 'annuler', de: 'absagen / stornieren', pt: 'cancelar', zh: '取消', ar: 'يلغي', ja: 'キャンセルする', ru: 'отменять', ex: 'The airline has just cancelled our evening flight due to fog.', exHi: 'एयरलाइन ने कोहरे के कारण हमारी शाम की उड़ान अभी-अभी रद्द कर दी है।', exEs: 'La aerolínea acaba de cancelar nuestro vuelo nocturno.', ic: '❌' },
    { w: 'prepare', p: '/prɪˈpeə/', m: 'make something ready for use or consideration', hi: 'तैयार करना', es: 'preparar', fr: 'préparer', de: 'vorbereiten', pt: 'preparar', zh: '准备', ar: 'يعد / يجهّز', ja: '準備する', ru: 'готовить / подготавливать', ex: 'I have already prepared the presentation slides for tomorrow.', exHi: 'मैंने कल के लिए प्रेजेंटेशन स्लाइड्स पहले ही तैयार कर ली हैं।', exEs: 'Ya he preparado las diapositivas de la presentación.', ic: '📊' },
    { w: 'reply', p: '/rɪˈplaɪ/', m: 'say or write something as an answer to someone', hi: 'उत्तर देना / जवाब देना', es: 'responder / contestar', fr: 'répondre', de: 'antworten', pt: 'responder', zh: '回复', ar: 'يرد / يجيب', ja: '返信する', ru: 'отвечать', ex: 'She hasn\'t replied to my text message yet.', exHi: 'उसने अभी तक मेरे टेक्स्ट संदेश का जवाब नहीं दिया है।', exEs: 'Ella no ha respondido a mi mensaje de texto todavía.', ic: '💬' },
    { w: 'download', p: '/ˌdaʊnˈləʊd/', m: 'copy data from one computer system to another', hi: 'डाउनलोड करना', es: 'descargar', fr: 'télécharger', de: 'herunterladen', pt: 'baixar', zh: '下载', ar: 'تحميل / تنزيل', ja: 'ダウンロードする', ru: 'скачивать', ex: 'Have you downloaded the latest software update yet?', exHi: 'क्या आपने अभी तक नवीनतम सॉफ़्टवेयर अपडेट डाउनलोड किया है?', exEs: '¿Ya has descargado la última actualización de software?', ic: '⬇️' },
    { w: 'schedule', p: '/ˈʃedjuːl/', m: 'a plan for carrying out a process or procedure, giving lists of intended events and times', hi: 'समय सारिणी / शेड्यूल', es: 'horario / agenda', fr: 'calendrier / emploi du temps', de: 'Zeitplan', pt: 'cronograma', zh: '时间表', ar: 'جدول زمني', ja: '日程 / スケジュール', ru: 'расписание / график', ex: 'We have already published the final conference schedule.', exHi: 'हम सम्मेलन की अंतिम समय सारिणी पहले ही प्रकाशित कर चुके हैं।', exEs: 'Ya hemos publicado el cronograma final de la conferencia.', ic: '🗓️' },
    { w: 'announce', p: '/əˈnaʊns/', m: 'make a formal public statement about a fact, occurrence, or intention', hi: 'घोषणा करना', es: 'anunciar', fr: 'annoncer', de: 'ankündigen', pt: 'anunciar', zh: '宣布', ar: 'يعلن', ja: '発表する', ru: 'объявлять', ex: 'The management has just announced the annual bonus.', exHi: 'प्रबंधन ने अभी-अभी वार्षिक बोनस की घोषणा की है।', exEs: 'La gerencia acaba de anunciar el bono anual.', ic: '📢' },
    { w: 'approve', p: '/əˈpruːv/', m: 'officially agree to or accept as satisfactory', hi: 'स्वीकृत करना / मंज़ूरी देना', es: 'aprobar', fr: 'approuver', de: 'genehmigen', pt: 'aprovar', zh: '批准', ar: 'يوافق على', ja: '承認する', ru: 'одобрять / утверждать', ex: 'The director has already approved our travel budget.', exHi: 'निदेशक ने हमारे यात्रा बजट को पहले ही मंजूरी दे दी है।', exEs: 'El director ya ha aprobado nuestro presupuesto de viaje.', ic: '👍' },
    { w: 'sign', p: '/saɪn/', m: 'write one\'s name on a letter, card, or document', hi: 'हस्ताक्षर करना / दस्तखत करना', es: 'firmar', fr: 'signer', de: 'unterschreiben', pt: 'assinar', zh: '签署', ar: 'يوقّع', ja: '署名する', ru: 'подписывать', ex: 'Have both parties signed the agreement yet?', exHi: 'क्या दोनों पक्षों ने अभी तक समझौते पर हस्ताक्षर कर दिए हैं?', exEs: '¿Han firmado ya ambas partes el acuerdo?', ic: '✍️' },
    { w: 'reminder', p: '/rɪˈmaɪndə/', m: 'a thing that causes someone to remember something', hi: 'याद दिलाने वाला संदेश / रिमाइंडर', es: 'recordatorio', fr: 'rappel', de: 'Erinnerung (Mitteilung)', pt: 'lembrete', zh: '提醒', ar: 'تذكير', ja: '通知 / リマインダー', ru: 'напоминание', ex: 'I have just sent a reminder about tomorrow\'s workshop.', exHi: 'मैंने कल की कार्यशाला के बारे में अभी-अभी एक रिमाइंडर भेजा है।', exEs: 'Acabo de enviar un recordatorio sobre el taller de mañana.', ic: '🔔' }
  ],
  chunks: [
    { phrase: 'have just + past participle', meaning: 'completed something only moments ago', hi: 'अभी-अभी कोई कार्य पूरा किया है', es: 'acabar de + infinitivo', fr: 'venir juste de + infinitif', de: 'gerade eben getan haben', pt: 'acabar de + infinitivo', zh: '刚刚做完...', ar: 'للتو انتهى من...', ja: 'たった今〜したところだ', ru: 'только что сделал...', note: '"Just" sits between have/has and the past participle: "I have just arrived."', ic: '⚡' },
    { phrase: 'have already + past participle', meaning: 'completed something sooner than expected', hi: 'पहले ही कोई कार्य पूरा कर लिया है', es: 'ya haber + participio', fr: 'avoir déjà + participe passé', de: 'bereits getan haben', pt: 'já ter + particípio', zh: '已经完成了...', ar: 'بالفعل قد فعل...', ja: 'すでに〜し終えた', ru: 'уже сделал...', note: 'Placed between auxiliary and past participle: "We have already eaten."', ic: '✅' },
    { phrase: 'haven\'t / hasn\'t + V3 ... yet', meaning: 'expected action has not occurred up to the present moment', hi: 'अभी तक यह कार्य नहीं हुआ है', es: 'no haber + participio ... todavía', fr: 'ne pas encore avoir + participe', de: 'noch nicht getan haben', pt: 'ainda não ter + particípio', zh: '还没有做...', ar: 'لم يفعل ذلك حتى الآن', ja: 'まだ〜していない', ru: 'еще не сделал...', note: '"Yet" is placed at the very end of negative clauses.', ic: '⏳' },
    { phrase: 'Have you + V3 ... yet?', meaning: 'asking if an expected action is completed up to now', hi: 'क्या आपने अभी तक यह कर लिया है?', es: '¿Ya has + participio...?', fr: 'As-tu déjà + participe... ?', de: 'Hast du schon + getan...?', pt: 'Você já + particípio...?', zh: '你已经做完...了吗？', ar: 'هل فعلت ذلك بعد؟', ja: 'もう〜しましたか？', ru: 'Вы уже сделали...?', note: '"Yet" goes at the end of the question.', ic: '❓' },
    { phrase: 'as we speak', meaning: 'at this very moment', hi: 'इसी समय / इस बातचीत के दौरान ही', es: 'en este preciso momento', fr: 'au moment où nous parlons', de: 'während wir sprechen', pt: 'neste exato momento', zh: '就在此时', ar: 'في هذه اللحظة بالذات', ja: 'まさに今', ru: 'в этот самый момент', note: 'Emphasizes immediate concurrent action.', ic: '⏱️' },
    { phrase: 'give a quick update', meaning: 'provide a brief status report', hi: 'संक्षिप्त स्थिति रिपोर्ट देना', es: 'dar una actualización rápida', fr: 'donner une mise à jour rapide', de: 'ein kurzes Update geben', pt: 'dar uma atualização rápida', zh: '提供简短更新', ar: 'تقديم تحديث سريع', ja: '簡単な報告をする', ru: 'кратко проинформировать', note: 'Standard workplace phrase.', ic: '📢' },
    { phrase: 'any minute now', meaning: 'very soon; almost immediately', hi: 'बस किसी भी पल / बहुत जल्द', es: 'en cualquier momento', fr: 'd\'une minute à l\'autre', de: 'jeden Augenblick', pt: 'a qualquer momento', zh: '随时可能', ar: 'في أية لحظة', ja: '今にも', ru: 'с минуты на минуту', note: 'Expectation expression.', ic: '⏰' },
    { phrase: 'keep me posted', meaning: 'continue to inform me about future developments', hi: 'मुझे आगे की जानकारी देते रहना', es: 'mantenme informado', fr: 'tiens-moi au courant', de: 'halte mich auf dem Laufenden', pt: 'mantenha-me informado', zh: '随时告知我最新进展', ar: 'أبقني على اطلاع', ja: '進捗を教えてね', ru: 'держи меня в курсе', note: 'Common closing phrase in collaborative work.', ic: '📬' }
  ],
  grammar: {
    title: 'Present Perfect with "Just", "Already", and "Yet": Word Order & Functions',
    concept: 'Using time adverbs with Present Perfect to signal recency (just), earliness/completion (already), and expectation (yet).',
    patterns: [
      {
        title: '"Just" for Very Recent Actions',
        structure: 'Subject + have / has + just + Past Participle (V3)',
        rule: 'Place "just" directly between the auxiliary have/has and the main past participle to denote an event finished moments ago.',
        examples: [
          { en: 'I have just finished the report.', hi: 'मैंने अभी-अभी रिपोर्ट पूरी की है।', es: 'Acabo de terminar el informe.' },
          { en: 'The train has just left the platform.', hi: 'ट्रेन अभी-अभी प्लेटफॉर्म से रवाना हुई है।', es: 'El tren acaba de salir del andén.' }
        ]
      },
      {
        title: '"Already" for Actions Completed Ahead of Schedule',
        structure: 'Subject + have / has + already + Past Participle (V3)',
        rule: 'Place "already" between have/has and the past participle to emphasize that an action is completed, often earlier than expected.',
        examples: [
          { en: 'We have already booked our hotel rooms.', hi: 'हम पहले ही अपने होटल के कमरे बुक कर चुके हैं।', es: 'Ya hemos reservado nuestras habitaciones de hotel.' },
          { en: 'She has already sent the invitation emails.', hi: 'वह निमंत्रण ईमेल पहले ही भेज चुकी है।', es: 'Ella ya ha enviado los correos de invitación.' }
        ]
      },
      {
        title: '"Yet" in Negatives and Questions (End Position)',
        structure: 'Negative: Subject + haven\'t / hasn\'t + V3 ... + yet. | Question: Have / Has + Subject + V3 ... + yet?',
        rule: 'Use "yet" at the end of negative statements and questions to indicate an action that is expected to happen soon.',
        examples: [
          { en: 'I haven\'t received the package yet.', hi: 'मुझे अभी तक पार्सल नहीं मिला है।', es: 'No he recibido el paquete todavía.' },
          { en: 'Has the manager signed the document yet?', hi: 'क्या प्रबंधक ने अभी तक दस्तावेज़ पर हस्ताक्षर किए हैं?', es: '¿Ha firmado ya el gerente el documento?' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'I have yet received the email.',
      cor: 'I haven\'t received the email yet.',
      exp: '"Yet" is used with negative verbs ("haven\'t received") and placed at the end of the clause.',
      hi: '"Yet" नकारात्मक वाक्यों के अंत में आता है: "haven\'t received ... yet".',
      es: '"Yet" se usa con verbos negativos al final de la oración.'
    },
    {
      inc: 'She already has finished her homework.',
      cor: 'She has already finished her homework.',
      exp: 'In standard English, "already" is placed between the auxiliary "has" and the participle "finished".',
      hi: '"Already" सहायक क्रिया "has" और मुख्य क्रिया के बीच आता है।',
      es: '"Already" se coloca entre "has" y el participio.'
    },
    {
      inc: 'I just have eaten lunch.',
      cor: 'I have just eaten lunch.',
      exp: '"Just" belongs between "have" and "eaten" ("have just eaten").',
      hi: '"Just" को "have" और क्रिया के तीसरे रूप के बीच रखें।',
      es: '"Just" se coloca entre "have" y el participio.'
    },
    {
      inc: 'Did the courier arrive yet?',
      cor: 'Has the courier arrived yet?',
      exp: 'In British and international standard English, "yet" strongly pairs with Present Perfect.',
      hi: '"Yet" वाले प्रश्नों में Present Perfect ("Has ... arrived yet?") का प्रयोग करें।',
      es: 'Con "yet" se usa el Presente Perfecto ("Has ... arrived yet?").'
    },
    {
      inc: 'We have already not seen the results.',
      cor: 'We haven\'t seen the results yet.',
      exp: 'Do not use "already" with negative verbs for expected results. Use "haven\'t ... yet".',
      hi: 'अपेक्षित लंबित कार्यों के लिए "haven\'t ... yet" का प्रयोग करें।',
      es: 'Para acciones no completadas se usa "haven\'t ... yet".'
    }
  ],
  dialogues: [
    {
      title: 'Workplace Project Check-in',
      context: 'Tanya and Rajiv review their presentation deliverables before an executive meeting.',
      charA: { name: 'Tanya', av: '👩🏽', role: 'Team Lead' },
      charB: { name: 'Rajiv', av: '👨🏾', role: 'Analyst' },
      turns: [
        { spk: 'Tanya', text: 'Rajiv, have you finished analyzing the quarterly sales data yet?', hi: 'राजीव, क्या आपने तिमाही बिक्री डेटा का विश्लेषण अभी तक पूरा कर लिया है?', es: 'Rajiv, ¿ya has terminado de analizar los datos de ventas trimestrales?' },
        { spk: 'Rajiv', text: 'Yes, Tanya! I have already completed the charts and uploaded them to the shared folder.', hi: 'हाँ, तान्या! मैंने पहले ही चार्ट तैयार कर लिए हैं और उन्हें शेयर्ड फ़ोल्डर में अपलोड कर दिया है।', es: '¡Sí, Tanya! Ya he completado los gráficos y los he subido a la carpeta compartida.' },
        { spk: 'Tanya', text: 'Fantastic work. Has the client confirmed their attendance for tomorrow\'s 10 AM review?', hi: 'शानदार काम। क्या क्लाइंट ने कल सुबह 10 बजे की समीक्षा के लिए अपनी उपस्थिति की पुष्टि अभी तक की है?', es: 'Fantástico trabajo. ¿Ha confirmado ya el cliente su asistencia para la revisión de mañana?' },
        { spk: 'Rajiv', text: 'I have just checked my inbox. Their director has just replied to confirm all three representatives will join.', hi: 'मैंने अभी-अभी अपना इनबॉक्स चेक किया है। उनके डायरेक्टर ने अभी-अभी पुष्टि की है कि तीनों प्रतिनिधि शामिल होंगे।', es: 'Acabo de revisar mi bandeja de entrada. Su director acaba de responder para confirmar que los tres representantes asistirán.' }
      ]
    },
    {
      title: 'Preparing for a Weekend Trip',
      context: 'Amit and Clara double-check their travel checklist before leaving for the airport.',
      charA: { name: 'Amit', av: '👨🏽', role: 'Traveler' },
      charB: { name: 'Clara', av: '👩🏼', role: 'Traveler' },
      turns: [
        { spk: 'Amit', text: 'Clara, have you packed your passport and travel insurance documents yet?', hi: 'क्लारा, क्या तुमने अपने पासपोर्ट और यात्रा बीमा के दस्तावेज़ अभी तक पैक कर लिए हैं?', es: 'Clara, ¿ya has empacado tu pasaporte y los documentos del seguro?' },
        { spk: 'Clara', text: 'I have already put my passport in my backpack, but I haven\'t printed the boarding passes yet.', hi: 'मैंने अपना पासपोर्ट पहले ही अपने बैग में रख लिया है, लेकिन मैंने अभी तक बोर्डिंग पास प्रिंट नहीं किए हैं।', es: 'Ya he puesto mi pasaporte en mi mochila, pero todavía no he impreso las tarjetas de embarque.' },
        { spk: 'Amit', text: 'Don\'t worry, I have just downloaded the digital passes onto my smartphone.', hi: 'चिंता मत करो, मैंने अभी-अभी अपने स्मार्टफोन पर डिजिटल पास डाउनलोड कर लिए हैं।', es: 'No te preocupes, acabo de descargar los pases digitales en mi teléfono inteligente.' },
        { spk: 'Clara', text: 'Perfect! The taxi has just pulled up outside our building, so we are ready to go.', hi: 'बढ़िया! टैक्सी अभी-अभी हमारी इमारत के बाहर आ गई है, इसलिए हम जाने के लिए तैयार हैं।', es: '¡Perfecto! El taxi acaba de llegar fuera de nuestro edificio, así que estamos listos para irnos.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_a2_9_124_p01',
      type: 'multiple_choice',
      prompt: 'Select the correct position of "just" in the sentence:',
      options: [
        { id: '1', text: 'She has just received a promotion notification.', isCorrect: true },
        { id: '2', text: 'She just has received a promotion notification.', isCorrect: false },
        { id: '3', text: 'She has received just a promotion notification.', isCorrect: false },
        { id: '4', text: 'She has received a promotion notification just.', isCorrect: false }
      ],
      correctAnswer: 'She has just received a promotion notification.',
      explanation: '"Just" is placed between the auxiliary "has" and the past participle "received".'
    },
    {
      id: 'ex_a2_9_124_p02',
      type: 'fill_blank',
      prompt: 'Complete the sentence with "already", "just", or "yet": "I haven\'t received an answer from customer support _____."',
      correctAnswer: 'yet',
      explanation: 'In negative sentences expressing expectation, "yet" is placed at the end.'
    },
    {
      id: 'ex_a2_9_124_p03',
      type: 'word_ordering',
      prompt: 'Arrange the words to form a correct workplace question:',
      tokens: ['Have', 'you', 'sent', 'the', 'project', 'proposal', 'yet'],
      correctAnswer: 'Have you sent the project proposal yet',
      explanation: 'Present perfect question ending with "yet".'
    },
    {
      id: 'ex_a2_9_124_p04',
      type: 'translation',
      prompt: 'Translate to English: "हमने पहले ही अपने टिकट बुक कर लिए हैं।"',
      correctAnswer: 'We have already booked our tickets.',
      acceptableAnswers: ['We have already booked our flight tickets.'],
      explanation: '"Have already booked" expresses completion ahead of time.'
    },
    {
      id: 'ex_a2_9_124_p05',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence: "He hasn\'t finished his lunch already."',
      correctAnswer: "He hasn't finished his lunch yet.",
      explanation: 'Use "yet" at the end of negative clauses, not "already".'
    },
    {
      id: 'ex_a2_9_124_p06',
      type: 'listening',
      prompt: 'Listen to the audio and select the current status of the order:',
      audioText: 'Good morning! The warehouse manager has just dispatched your package, and it will arrive by 4 PM.',
      options: [
        { id: '1', text: 'The package was just dispatched from the warehouse', isCorrect: true },
        { id: '2', text: 'The package has been cancelled by the customer', isCorrect: false },
        { id: '3', text: 'The warehouse has not processed the order yet', isCorrect: false },
        { id: '4', text: 'The delivery was returned to sender', isCorrect: false }
      ],
      correctAnswer: 'The package was just dispatched from the warehouse',
      explanation: 'The speaker says the manager "has just dispatched your package".'
    },
    {
      id: 'ex_a2_9_124_p07',
      type: 'listen_and_type',
      prompt: 'Listen and type the exact sentence:',
      audioText: 'The courier has just arrived at reception.',
      correctAnswer: 'The courier has just arrived at reception.',
      explanation: 'Type the exact sentence with correct capitalization and period.'
    },
    {
      id: 'ex_a2_9_124_p08',
      type: 'speaking',
      prompt: 'Read aloud clearly: "We have already submitted our budget proposal, but we haven\'t received feedback yet."',
      targetText: "We have already submitted our budget proposal, but we haven't received feedback yet.",
      explanation: 'Speak clearly with accurate stress on "already submitted" and "feedback yet".'
    },
    {
      id: 'ex_a2_9_124_p09',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nBoss: "Is the presentation ready for the stakeholders?"\nEmployee: "Yes, I _____ all the slides and rehearsed my talking points."',
      options: [
        { id: '1', text: 'have already finalized', isCorrect: true },
        { id: '2', text: 'am finalizing yet', isCorrect: false },
        { id: '3', text: 'have finalized yet', isCorrect: false },
        { id: '4', text: 'already finalize', isCorrect: false }
      ],
      correctAnswer: 'have already finalized',
      explanation: '"Have already finalized" shows the task is completely finished.'
    },
    {
      id: 'ex_a2_9_124_p10',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses an action that happened moments ago?',
      options: [
        { id: '1', text: 'I have just heard the news on the radio.', isCorrect: true },
        { id: '2', text: 'I have yet heard the news on the radio.', isCorrect: false },
        { id: '3', text: 'I have already not heard the news.', isCorrect: false },
        { id: '4', text: 'I just have heard the news yesterday.', isCorrect: false }
      ],
      correctAnswer: 'I have just heard the news on the radio.',
      explanation: '"Have just heard" expresses immediate recency.'
    },
    {
      id: 'ex_a2_9_124_p11',
      type: 'match_pairs',
      prompt: 'Match the adverb with its grammatical function in Present Perfect:',
      options: [
        { id: '1', text: 'just → [very recent action completed moments ago]' },
        { id: '2', text: 'already → [action completed earlier than expected]' },
        { id: '3', text: 'yet (negative) → [action has not happened up to now]' },
        { id: '4', text: 'yet (question) → [asking if expected action is done]' }
      ],
      correctAnswer: 'matched',
      explanation: 'Functions and placements of just, already, and yet.'
    },
    {
      id: 'ex_a2_9_124_p12',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Has the team leader approved your leave request _____?"',
      correctAnswer: 'yet',
      explanation: 'Question asking about an expected outcome ends with "yet".'
    },
    {
      id: 'ex_a2_9_124_p13',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['They', 'have', 'already', 'signed', 'the', 'lease', 'contract'],
      correctAnswer: 'They have already signed the lease contract',
      explanation: 'Subject + have already + V3 + object.'
    },
    {
      id: 'ex_a2_9_124_p14',
      type: 'translation',
      prompt: 'Translate to English: "ट्रेन अभी-अभी स्टेशन पर पहुंची है।"',
      correctAnswer: 'The train has just arrived at the station.',
      acceptableAnswers: ['The train has just reached the station.'],
      explanation: '"Has just arrived" conveys immediate recent arrival.'
    },
    {
      id: 'ex_a2_9_124_p15',
      type: 'multiple_choice',
      prompt: 'Choose the sentence with correct word order:',
      options: [
        { id: '1', text: 'She has already sent the email to the manager.', isCorrect: true },
        { id: '2', text: 'She already has sent the email to the manager.', isCorrect: false },
        { id: '3', text: 'She has sent already the email to the manager.', isCorrect: false },
        { id: '4', text: 'She has sent the email to the manager already not.', isCorrect: false }
      ],
      correctAnswer: 'She has already sent the email to the manager.',
      explanation: '"Already" is placed between "has" and the past participle "sent".'
    }
  ],
  review: [
    {
      id: 'ex_a2_9_124_r01',
      type: 'multiple_choice',
      prompt: 'Select the correct sentence:',
      options: [
        { id: '1', text: 'The flight has just landed on runway two.', isCorrect: true },
        { id: '2', text: 'The flight has landed just on runway two.', isCorrect: false },
        { id: '3', text: 'The flight just has landed on runway two.', isCorrect: false },
        { id: '4', text: 'The flight has yet landed on runway two.', isCorrect: false }
      ],
      correctAnswer: 'The flight has just landed on runway two.',
      explanation: 'Position of "just" between "has" and "landed".'
    },
    {
      id: 'ex_a2_9_124_r02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "We haven\'t received the official confirmation _____."',
      correctAnswer: 'yet',
      explanation: 'Negative clause ending with "yet".'
    },
    {
      id: 'ex_a2_9_124_r03',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['I', 'have', 'already', 'cleaned', 'the', 'entire', 'apartment'],
      correctAnswer: 'I have already cleaned the entire apartment',
      explanation: 'Subject + have already + V3 + object.'
    },
    {
      id: 'ex_a2_9_124_r04',
      type: 'translation',
      prompt: 'Translate to English: "क्या आपने अभी तक बिल का भुगतान किया है?"',
      correctAnswer: 'Have you paid the bill yet?',
      acceptableAnswers: ['Have you paid the invoice yet?'],
      explanation: 'Present perfect question with "yet".'
    },
    {
      id: 'ex_a2_9_124_r05',
      type: 'error_correction',
      prompt: 'Correct the error: "They have yet not decided where to go."',
      correctAnswer: "They haven't decided where to go yet.",
      explanation: 'Change to "haven\'t decided ... yet".'
    }
  ],
  assessment: [
    {
      id: 'ex_a2_9_124_a01',
      type: 'multiple_choice',
      prompt: 'Which statement correctly indicates that an action was finished moments ago?',
      options: [
        { id: '1', text: 'The doctor has just stepped into the examination room.', isCorrect: true },
        { id: '2', text: 'The doctor has stepped yet into the examination room.', isCorrect: false },
        { id: '3', text: 'The doctor already has not stepped into the room.', isCorrect: false },
        { id: '4', text: 'The doctor just stepped into room tomorrow.', isCorrect: false }
      ],
      correctAnswer: 'The doctor has just stepped into the examination room.',
      explanation: '"Has just stepped" indicates an action finished moments before.'
    },
    {
      id: 'ex_a2_9_124_a02',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "Has the engineer inspected the air conditioning unit _____?"',
      correctAnswer: 'yet',
      explanation: 'Questions asking about completion take "yet" at the end.'
    },
    {
      id: 'ex_a2_9_124_a03',
      type: 'translation',
      prompt: 'Translate to English: "मैंने अभी-अभी अपना कंप्यूटर बंद किया है।"',
      correctAnswer: 'I have just turned off my computer.',
      acceptableAnswers: [
        'I have just shut down my computer.',
        'I have just switched off my computer.'
      ],
      explanation: '"Have just turned off" describes a very recent action.'
    },
    {
      id: 'ex_a2_9_124_a04',
      type: 'speaking',
      prompt: 'Read aloud clearly: "We have already submitted the project report, but the client hasn\'t approved it yet."',
      targetText: "We have already submitted the project report, but the client hasn't approved it yet.",
      explanation: 'Speak clearly with proper rhythm on both clauses.'
    },
    {
      id: 'ex_a2_9_124_a05',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['She', 'has', 'already', 'booked', 'her', 'train', 'ticket'],
      correctAnswer: 'She has already booked her train ticket',
      explanation: 'Standard present perfect with "already".'
    }
  ]
};

// =========================================================================
// LESSON 125: Expressing Duration: Present Perfect with "For" and "Since"
// =========================================================================
export const LESSON_125_CONFIG: LessonConfigA2 = {
  num: 125,
  title: 'Expressing Duration: Present Perfect with "For" and "Since"',
  icon: '⏳',
  estMin: 25,
  objTitle: 'Talking About Duration of States & Habits with "For" and "Since"',
  objDesc: 'Learn to describe ongoing situations and states that started in the past and continue into the present using the Present Perfect with "How long...?", "for + duration", and "since + starting point".',
  objHi: 'अतीत से शुरू होकर वर्तमान तक जारी स्थितियों और अवधियों ("for" और "since") के बारे में बात करना सीखें।',
  objEs: 'Describir situaciones y estados que comenzaron en el pasado y continúan en el presente usando "for", "since" y "How long...?".',
  canDo: [
    'I can ask about the duration of an ongoing state using "How long have you + past participle?".',
    'I can use "for" to state a duration of time (for three years, for six months, for a long time).',
    'I can use "since" to state a starting point in time (since 2020, since yesterday, since college).',
    'I can avoid confusing Present Continuous with Present Perfect for duration of states.'
  ],
  canDoHi: [
    'मैं "How long have you + past participle?" से किसी स्थिति की अवधि के बारे में पूछ सकता हूँ।',
    'मैं समय की अवधि बताने के लिए "for" (for three years, for a week) का सही प्रयोग कर सकता हूँ।',
    'मैं शुरुआती बिंदु बताने के लिए "since" (since 2020, since morning) का सही प्रयोग कर सकता हूँ।',
    'मैं जारी स्थितियों की अवधि बताने के लिए Present Continuous के बजाय Present Perfect का सही प्रयोग कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo preguntar por la duración de un estado con "How long have you...?".',
    'Puedo usar "for" para periodos de tiempo.',
    'Puedo usar "since" para puntos de partida específicos.',
    'Puedo evitar usar el presente continuo erróneamente para duración de estados.'
  ],
  vocab: [
    { w: 'duration', p: '/djuˈreɪʃn/', m: 'the time during which something continues', hi: 'अवधि / समयकाल', es: 'duración', fr: 'durée', de: 'Dauer', pt: 'duração', zh: '持续时间', ar: 'مدة', ja: '期間 / 継続時間', ru: 'продолжительность', ex: 'What is the exact duration of the training program?', exHi: 'प्रशिक्षण कार्यक्रम की सटीक अवधि क्या है?', exEs: '¿Cuál es la duración exacta del programa de capacitación?', ic: '⏱️' },
    { w: 'decade', p: '/ˈdekeɪd/', m: 'a period of ten years', hi: 'दशक (दस वर्ष)', es: 'década', fr: 'décennie', de: 'Jahrzehnt', pt: 'década', zh: '十年', ar: 'عقد (عشر سنوات)', ja: '10年間 / ディケイド', ru: 'десятилетие', ex: 'They have lived in this quiet neighborhood for over a decade.', exHi: 'वे इस शांत पड़ोस में एक दशक से अधिक समय से रह रहे हैं।', exEs: 'Han vivido en este vecindario tranquilo durante más de una década.', ic: '🔟' },
    { w: 'colleague', p: '/ˈkɒliːɡ/', m: 'a person with whom one works in a profession or business', hi: 'सहकर्मी / साथ काम करने वाला', es: 'colega / compañero de trabajo', fr: 'collègue', de: 'Kollege', pt: 'colega', zh: '同事', ar: 'زميل عمل', ja: '同僚', ru: 'коллега', ex: 'We have been colleagues since we joined the company in 2019.', exHi: '2019 में कंपनी में शामिल होने के बाद से हम सहकर्मी हैं।', exEs: 'Hemos sido colegas desde que nos unimos a la empresa en 2019.', ic: '👥' },
    { w: 'resident', p: '/ˈrezɪdənt/', m: 'a person who lives somewhere permanently or on a long-term basis', hi: 'निवासी / रहने वाला', es: 'residente / habitante', fr: 'résident', de: 'Einwohner / Bewohner', pt: 'morador / residente', zh: '居民', ar: 'مقيم / ساكن', ja: '住民', ru: 'житель / резидент', ex: 'She has been a resident of this city for fifteen years.', exHi: 'वह पंद्रह वर्षों से इस शहर की निवासी हैं।', exEs: 'Ella ha sido residente de esta ciudad durante quince años.', ic: '🏡' },
    { w: 'member', p: '/ˈmembə/', m: 'an individual belonging to a group such as a club, society, or team', hi: 'सदस्य', es: 'miembro / socio', fr: 'membre', de: 'Mitglied', pt: 'membro / sócio', zh: '会员 / 成员', ar: 'عضو', ja: '会員 / メンバー', ru: 'член (организации)', ex: 'I have been a member of the local tennis club since last March.', exHi: 'मैं पिछले मार्च से स्थानीय टेनिस क्लब का सदस्य हूँ।', exEs: 'He sido miembro del club de tenis local desde marzo pasado.', ic: '🎾' },
    { w: 'know', p: '/nəʊ/', m: 'be acquainted with someone through familiarity or friendship', hi: 'जानना / परिचित होना', es: 'conocer / saber', fr: 'connaître', de: 'kennen / wissen', pt: 'conhecer / saber', zh: '认识 / 知道', ar: 'يعرف', ja: '知っている', ru: 'знать', ex: 'How long have you known your best friend?', exHi: 'आप अपने सबसे अच्छे दोस्त को कितने समय से जानते हैं?', exEs: '¿Cuánto tiempo hace que conoces a tu mejor amigo?', ic: '🤝' },
    { w: 'own', p: '/əʊn/', m: 'have something as one\'s possession', hi: 'स्वामित्व होना / अपना होना', es: 'poseer / ser dueño de', fr: 'posséder', de: 'besitzen', pt: 'possuir / ter', zh: '拥有', ar: 'يملك', ja: '所有する', ru: 'владеть', ex: 'He has owned this bakery for twelve years.', exHi: 'वह बारह वर्षों से इस बेकरी का मालिक है।', exEs: 'Él ha sido dueño de esta panadería durante doce años.', ic: '🥖' },
    { w: 'belong', p: '/bɪˈlɒŋ/', m: 'be the property of someone or be a member of a group', hi: 'का होना / संबंधित होना', es: 'pertenecer', fr: 'appartenir', de: 'gehören', pt: 'pertencer', zh: '属于', ar: 'ينتمي / يخص', ja: '所属する', ru: 'принадлежать', ex: 'This ancient house has belonged to our family since 1950.', exHi: 'यह पुराना घर 1950 से हमारे परिवार का है।', exEs: 'Esta casa antigua ha pertenecido a nuestra familia desde 1950.', ic: '🏛️' },
    { w: 'century', p: '/ˈsentʃəri/', m: 'a period of one hundred years', hi: 'शताब्दी / सौ वर्ष', es: 'siglo', fr: 'siècle', de: 'Jahrhundert', pt: 'século', zh: '世纪', ar: 'قرن', ja: '世紀', ru: 'век / столетие', ex: 'The historic library has stood in the city center for over a century.', exHi: 'ऐतिहासिक पुस्तकालय एक सदी से भी अधिक समय से शहर के केंद्र में स्थित है।', exEs: 'La biblioteca histórica ha estado en el centro durante más de un siglo.', ic: '📚' },
    { w: 'license', p: '/ˈlaɪsns/', m: 'a permit from an authority to own or use something, or do a particular thing', hi: 'लाइसेंस / अनुज्ञा पत्र', es: 'licencia / carné', fr: 'permis / licence', de: 'Führerschein / Lizenz', pt: 'licença / carteira', zh: '执照 / 驾照', ar: 'رخصة', ja: '免許 / ライセンス', ru: 'лицензия / права', ex: 'I have had my driver\'s license since I was eighteen.', exHi: 'मेरे पास अठारह साल की उम्र से मेरा ड्राइविंग लाइसेंस है।', exEs: 'Tengo mi licencia de conducir desde que tenía dieciocho años.', ic: '🪪' },
    { w: 'relationship', p: '/rɪˈleɪʃnʃɪp/', m: 'the way in which two or more people are connected or behave toward each other', hi: 'रिश्ता / संबंध', es: 'relación', fr: 'relation', de: 'Beziehung', pt: 'relacionamento', zh: '关系', ar: 'علاقة', ja: '関係', ru: 'отношения', ex: 'They have had a strong business relationship for five years.', exHi: 'पाँच वर्षों से उनका एक मजबूत व्यावसायिक संबंध है।', exEs: 'Han tenido una sólida relación comercial durante cinco años.', ic: '🤝' },
    { w: 'manager', p: '/ˈmænɪdʒə/', m: 'a person responsible for controlling or administering an organization or group', hi: 'प्रबंधक / मैनेजर', es: 'gerente / director', fr: 'directeur / responsable', de: 'Manager / Leiter', pt: 'gerente', zh: '经理', ar: 'مدير', ja: '支配人 / マネージャー', ru: 'менеджер / управляющий', ex: 'She has been the branch manager since last autumn.', exHi: 'वह पिछली शरद ऋतु से शाखा प्रबंधक हैं।', exEs: 'Ella ha sido la gerente de la sucursal desde el otoño pasado.', ic: '💼' },
    { w: 'generation', p: '/ˌdʒenəˈreɪʃn/', m: 'all of the people born and living at about the same time', hi: 'पीढ़ी', es: 'generación', fr: 'génération', de: 'Generation', pt: 'geração', zh: '世代 / 一代人', ar: 'جيل', ja: '世代', ru: 'поколение', ex: 'Our family has farmed this fertile land for three generations.', exHi: 'हमारा परिवार तीन पीढ़ियों से इस उपजाऊ भूमि पर खेती कर रहा है।', exEs: 'Nuestra familia ha cultivado esta tierra fértil durante tres generaciones.', ic: '🌾' },
    { w: 'interest', p: '/ˈɪntrəst/', m: 'the feeling of wanting to know or learn about something', hi: 'रुचि / दिलचस्पी', es: 'interés', fr: 'intérêt', de: 'Interesse', pt: 'interesse', zh: '兴趣', ar: 'اهتمام', ja: '関心 / 興味', ru: 'интерес', ex: 'He has had a keen interest in astronomy since childhood.', exHi: 'बचपन से ही उनकी खगोल विज्ञान में गहरी रुचि रही है।', exEs: 'Él ha tenido un gran interés en la astronomía desde la infancia.', ic: '🔭' },
    { w: 'apartment', p: '/əˈpɑːtmənt/', m: 'a suite of rooms forming one separate residence', hi: 'अपार्टमेंट / फ्लैट', es: 'apartamento / piso', fr: 'appartement', de: 'Wohnung', pt: 'apartamento', zh: '公寓', ar: 'شقة', ja: 'アパート / マンション', ru: 'квартира', ex: 'We have lived in this cozy apartment for six months.', exHi: 'हम छह महीने से इस आरामदायक अपार्टमेंट में रह रहे हैं।', exEs: 'Hemos vivido en este acogedor apartamento durante seis meses.', ic: '🏢' },
    { w: 'married', p: '/ˈmærid/', m: 'joined in marriage', hi: 'विवाहित / शादीशुदा', es: 'casado', fr: 'marié', de: 'verheiratet', pt: 'casado', zh: '已婚的', ar: 'متزوج', ja: '結婚している', ru: 'женатый / замужняя', ex: 'My parents have been married for thirty-five years.', exHi: 'मेरे माता-पिता की शादी को पैंतीस साल हो चुके हैं।', exEs: 'Mis padres han estado casados durante treinta y cinco años.', ic: '💍' },
    { w: 'semester', p: '/sɪˈmestə/', m: 'a half-year term in a school or college', hi: 'सत्र / सेमेस्टर', es: 'semestre', fr: 'semestre', de: 'Semester', pt: 'semestre', zh: '学期', ar: 'فصل دراسي', ja: '学期', ru: 'семестр', ex: 'She has studied modern linguistics for two semesters.', exHi: 'उसने दो सेमेस्टर से आधुनिक भाषा विज्ञान का अध्ययन किया है।', exEs: 'Ella ha estudiado lingüística moderna durante dos semestres.', ic: '📖' },
    { w: 'skill', p: '/skɪl/', m: 'the ability to do something well, usually gained through training or practice', hi: 'कौशल / हुनर', es: 'habilidad / destreza', fr: 'compétence', de: 'Fähigkeit / Fertigkeit', pt: 'habilidade', zh: '技能', ar: 'مهارة', ja: '技能 / スキル', ru: 'навык / умение', ex: 'He has practiced coding skills for four years.', exHi: 'उसने चार साल से कोडिंग कौशल का अभ्यास किया है।', exEs: 'Ha practicado habilidades de programación durante cuatro años.', ic: '💻' },
    { w: 'habit', p: '/ˈhæbɪt/', m: 'a settled or regular tendency or practice', hi: 'आदत', es: 'hábito / costumbre', fr: 'habitude', de: 'Gewohnheit', pt: 'hábito', zh: '习惯', ar: 'عادة', ja: '習慣', ru: 'привычка', ex: 'I have had the habit of morning jogging since college.', exHi: 'कॉलेज के समय से ही मुझे सुबह दौड़ने की आदत है।', exEs: 'He tenido el hábito de correr por la mañana desde la universidad.', ic: '🏃' },
    { w: 'passion', p: '/ˈpæʃn/', m: 'strong and barely controllable emotion or intense enthusiasm', hi: 'जुनून / अत्यधिक लगन', es: 'pasión', fr: 'passion', de: 'Leidenschaft', pt: 'paixão', zh: '热情 / 爱好', ar: 'شغف', ja: '情熱', ru: 'страсть / увлечение', ex: 'Photography has been her greatest passion for many years.', exHi: 'फोटोग्राफी कई वर्षों से उनका सबसे बड़ा जुनून रही है।', exEs: 'La fotografía ha sido su mayor pasión durante muchos años.', ic: '📷' }
  ],
  chunks: [
    { phrase: 'How long have you + V3...?', meaning: 'asking about the duration of an ongoing state or action', hi: 'आप कितने समय से ऐसा कर रहे हैं / हैं?', es: '¿Cuánto tiempo hace que + verbo...?', fr: 'Depuis combien de temps... ?', de: 'Wie lange hast du schon...?', pt: 'Há quanto tempo você...?', zh: '你...多久了？', ar: 'منذ متى وأنت...؟', ja: 'どのくらい長く〜していますか？', ru: 'Как долго вы...?', note: 'Core formula for asking about ongoing duration.', ic: '❓' },
    { phrase: 'for + period of time', meaning: 'specifying the length/duration of time', hi: 'समय की अवधि के लिए (उदा. तीन साल से)', es: 'durante / por + periodo de tiempo', fr: 'pendant / depuis + durée', de: 'seit + Zeitspanne', pt: 'por / durante + período', zh: '持续[时间段]', ar: 'لمدة [فترة زمنية]', ja: '〜の間', ru: 'в течение [периода]', note: 'Used with numbers/durations: "for five years", "for two hours".', ic: '📏' },
    { phrase: 'since + starting point', meaning: 'specifying the exact moment or date when something began', hi: 'किसी निश्चित समय या बिंदु से (उदा. 2020 से)', es: 'desde + punto en el tiempo', fr: 'depuis + point de départ', de: 'seit + Zeitpunkt', pt: 'desde + ponto no tempo', zh: '自[时间点]以来', ar: 'منذ [نقطة زمنية]', ja: '〜以来 / 〜から', ru: 'с [момента времени]', note: 'Used with dates, years, events: "since 2021", "since I was young".', ic: '📍' },
    { phrase: 'for as long as I can remember', meaning: 'throughout one\'s entire memory', hi: 'जब से मुझे याद है तब से', es: 'desde que tengo memoria', fr: 'd\'aussi loin que je me souvienne', de: 'solange ich mich erinnern kann', pt: 'desde que me lembro', zh: '从我有记忆起', ar: 'منذ أن بدأت أتذكر', ja: '覚えている限りずっと', ru: 'сколько я себя помню', note: 'Natural idiomatic time expression.', ic: '🧠' },
    { phrase: 'for a couple of years', meaning: 'for approximately two or three years', hi: 'दो-तीन साल से', es: 'durante un par de años', fr: 'pendant deux ou trois ans', de: 'seit ein paar Jahren', pt: 'por um par de anos', zh: '几年了', ar: 'لبضع سنوات', ja: '2〜3年の間', ru: 'пару лет', note: 'Very common colloquial duration phrase.', ic: '🗓️' },
    { phrase: 'since day one', meaning: 'from the very beginning of an endeavor', hi: 'शुरुआती दिन से ही', es: 'desde el primer día', fr: 'depuis le premier jour', de: 'vom ersten Tag an', pt: 'desde o primeiro dia', zh: '从第一天起', ar: 'منذ اليوم الأول', ja: '初日からずっと', ru: 'с самого первого дня', note: 'Emphasizes continuous commitment.', ic: '1️⃣' },
    { phrase: 'for quite some time', meaning: 'for a fairly long duration', hi: 'काफी समय से', es: 'durante bastante tiempo', fr: 'depuis un bon moment', de: 'schon seit geraumer Zeit', pt: 'por um bom tempo', zh: '已经有相当长一段时间了', ar: 'لفترة طويلة إلى حد ما', ja: 'かなり長い間', ru: 'довольно долгое время', note: 'Polite vague duration marker.', ic: '⏳' },
    { phrase: 'since we last met', meaning: 'from the previous occasion of seeing someone until now', hi: 'जब से हम पिछली बार मिले थे तब से', es: 'desde la última vez que nos vimos', fr: 'depuis notre dernière rencontre', de: 'seit unserem letzten Treffen', pt: 'desde a última vez que nos encontramos', zh: '自从我们上次见面以来', ar: 'منذ آخر لقاء لنا', ja: '前回会って以来', ru: 'с нашей последней встречи', note: 'Common in social greetings and catching up.', ic: '🤝' }
  ],
  grammar: {
    title: 'Present Perfect for Ongoing States: "For" (Duration) vs "Since" (Starting Point)',
    concept: 'Using have/has + past participle for states that began in the past and are still continuing right now.',
    patterns: [
      {
        title: '"For" + Total Duration of Time (Quantity)',
        structure: 'Subject + have / has + Past Participle + for + [Number + Time Unit]',
        rule: 'Use "for" when counting the total length of time (minutes, days, months, years, a long time).',
        examples: [
          { en: 'I have lived in this city for six years. (I still live here)', hi: 'मैं छह साल से इस शहर में रह रहा हूँ। (मैं अभी भी यहीं रहता हूँ)', es: 'He vivido en esta ciudad durante seis años. (Aún vivo aquí)' },
          { en: 'She has worked at this hospital for a long time.', hi: 'वह लंबे समय से इस अस्पताल में काम कर रही हैं।', es: 'Ella ha trabajado en este hospital durante mucho tiempo.' }
        ]
      },
      {
        title: '"Since" + Specific Starting Point (Date / Event)',
        structure: 'Subject + have / has + Past Participle + since + [Year / Day / Past Event Clause]',
        rule: 'Use "since" when naming the exact point in the past when the situation started.',
        examples: [
          { en: 'I have lived in this city since 2018.', hi: 'मैं 2018 से इस शहर में रह रहा हूँ।', es: 'He vivido en esta ciudad desde 2018.' },
          { en: 'We have known each other since we were in primary school.', hi: 'हम एक-दूसरे को तब से जानते हैं जब हम प्राथमिक स्कूल में थे।', es: 'Nos conocemos desde que estábamos en la escuela primaria.' }
        ]
      },
      {
        title: 'Asking Duration: "How long have you + V3...?"',
        structure: 'How long + have / has + Subject + Past Participle...?',
        rule: 'Ask "How long have you...?" to find out how much time has passed since a continuing state began.',
        examples: [
          { en: 'How long have you had this laptop?', hi: 'आपके पास यह लैपटॉप कितने समय से है?', es: '¿Cuánto tiempo hace que tienes esta computadora portátil?' },
          { en: 'How long has she been a doctor?', hi: 'वह कितने समय से डॉक्टर हैं?', es: '¿Cuánto tiempo hace que ella es médica?' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'I am living here since three years.',
      cor: 'I have lived here for three years. / I have been living here for three years.',
      exp: 'Do not use Present Continuous or "since" with a duration number. Use Present Perfect + "for three years".',
      hi: 'तीन साल की अवधि के लिए "since" नहीं, बल्कि "for three years" और Present Perfect आता है।',
      es: 'Para duración se usa "have lived ... for three years", no "am living ... since".'
    },
    {
      inc: 'She has worked here since five months.',
      cor: 'She has worked here for five months.',
      exp: '"Five months" is a duration of time, so use "for", not "since".',
      hi: '"Five months" समय की अवधि है, इसलिए "for" का प्रयोग करें।',
      es: '"Five months" es una duración; se debe usar "for".'
    },
    {
      inc: 'I have known him for 2015.',
      cor: 'I have known him since 2015.',
      exp: '2015 is a specific starting year, so use "since", not "for".',
      hi: '2015 एक निश्चित प्रारंभिक वर्ष है, इसलिए "since" का प्रयोग करें।',
      es: '2015 es un punto de inicio; se debe usar "since".'
    },
    {
      inc: 'How long time do you work here?',
      cor: 'How long have you worked here?',
      exp: 'To ask about ongoing work duration, use "How long have you worked here?".',
      hi: 'चल रही कार्य अवधि के लिए "How long have you worked here?" का प्रयोग करें।',
      es: 'Para preguntar por la duración se dice "How long have you worked here?".'
    },
    {
      inc: 'I know Sarah for ten years.',
      cor: 'I have known Sarah for ten years.',
      exp: 'For a state that began in the past and continues now, use Present Perfect ("have known"), not Present Simple.',
      hi: 'दस साल से जानने के लिए "have known" का प्रयोग आवश्यक है।',
      es: 'Se usa "have known" para estados que continúan en el presente.'
    }
  ],
  dialogues: [
    {
      title: 'Discussing Living in a New City',
      context: 'Zaid and Meera chat during a community meet-up about how long they have lived in Bangalore.',
      charA: { name: 'Zaid', av: '👨🏽', role: 'Software Engineer' },
      charB: { name: 'Meera', av: '👩🏾', role: 'UX Designer' },
      turns: [
        { spk: 'Zaid', text: 'Meera, how long have you lived in Bangalore?', hi: 'मीरा, तुम बैंगलोर में कितने समय से रह रही हो?', es: 'Meera, ¿cuánto tiempo hace que vives en Bangalore?' },
        { spk: 'Meera', text: 'I have lived here for four years. I relocated here in 2020 after graduating.', hi: 'मैं यहाँ चार साल से रह रही हूँ। मैं 2020 में ग्रेजुएशन के बाद यहाँ आई थी।', es: 'He vivido aquí durante cuatro años. Me mudé aquí en 2020 después de graduarme.' },
        { spk: 'Zaid', text: 'Have you worked at the same tech company since you arrived?', hi: 'क्या तुम जब से आई हो तब से उसी टेक कंपनी में काम कर रही हो?', es: '¿Has trabajado en la misma empresa de tecnología desde que llegaste?' },
        { spk: 'Meera', text: 'Yes, I have been with my current team since day one! What about you, Zaid?', hi: 'हाँ, मैं पहले दिन से अपनी मौजूदा टीम के साथ हूँ! तुम्हारे बारे में क्या, ज़ैद?', es: '¡Sí, he estado con mi equipo actual desde el primer día! ¿Y tú, Zaid?' }
      ]
    },
    {
      title: 'Long-term Friendships & Shared History',
      context: 'Nora and Leo meet an old schoolmate at a café.',
      charA: { name: 'Nora', av: '👩🏻', role: 'Teacher' },
      charB: { name: 'Leo', av: '👨🏼', role: 'Musician' },
      turns: [
        { spk: 'Nora', text: 'Leo, how long have you and Marcus known each other?', hi: 'लियो, तुम और मार्कस एक-दूसरे को कितने समय से जानते हो?', es: 'Leo, ¿cuánto tiempo hace que Marcus y tú se conocen?' },
        { spk: 'Leo', text: 'We have known each other since primary school! We have been best friends for almost twenty years.', hi: 'हम प्राथमिक विद्यालय के समय से एक-दूसरे को जानते हैं! हम लगभग बीस वर्षों से सबसे अच्छे दोस्त हैं।', es: '¡Nos conocemos desde la escuela primaria! Hemos sido mejores amigos durante casi veinte años.' },
        { spk: 'Nora', text: 'That is wonderful. Has he played in your band for a long time too?', hi: 'यह बहुत बढ़िया है। क्या वह भी लंबे समय से आपके बैंड में बजा रहा है?', es: 'Eso es maravilloso. ¿Él también ha tocado en tu banda durante mucho tiempo?' },
        { spk: 'Leo', text: 'Yes, he has played drums with us since we formed the group in 2016.', hi: 'हाँ, जब से हमने 2016 में ग्रुप बनाया था तब से वह हमारे साथ ड्रम बजा रहा है।', es: 'Sí, ha tocado la batería con nosotros desde que formamos el grupo en 2016.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_a2_9_125_p01',
      type: 'multiple_choice',
      prompt: 'Choose "for" or "since" to complete: "She has worked as a medical researcher _____ 2017."',
      options: [
        { id: '1', text: 'since', isCorrect: true },
        { id: '2', text: 'for', isCorrect: false },
        { id: '3', text: 'from', isCorrect: false },
        { id: '4', text: 'during', isCorrect: false }
      ],
      correctAnswer: 'since',
      explanation: 'Use "since" with specific starting years ("since 2017").'
    },
    {
      id: 'ex_a2_9_125_p02',
      type: 'fill_blank',
      prompt: 'Complete with "for" or "since": "They have been married _____ twenty-five years."',
      correctAnswer: 'for',
      explanation: '"Twenty-five years" is a duration of time, so use "for".'
    },
    {
      id: 'ex_a2_9_125_p03',
      type: 'word_ordering',
      prompt: 'Arrange the words to form a correct question about duration:',
      tokens: ['How', 'long', 'have', 'you', 'owned', 'this', 'vehicle'],
      correctAnswer: 'How long have you owned this vehicle',
      explanation: 'Question syntax: How long + have + subject + V3 + object.'
    },
    {
      id: 'ex_a2_9_125_p04',
      type: 'translation',
      prompt: 'Translate to English: "मैं इस शहर में तीन साल से रह रहा हूँ।"',
      correctAnswer: 'I have lived in this city for three years.',
      acceptableAnswers: ['I have been living in this city for three years.'],
      explanation: 'Present perfect + "for three years".'
    },
    {
      id: 'ex_a2_9_125_p05',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence: "We know each other since five years."',
      correctAnswer: 'We have known each other for five years.',
      explanation: 'Use Present Perfect ("have known") and "for" for five years duration.'
    },
    {
      id: 'ex_a2_9_125_p06',
      type: 'listening',
      prompt: 'Listen to the audio and determine how long the speaker has worked at the company:',
      audioText: 'I joined this international marketing firm in March 2021, so I have worked here for over three years now.',
      options: [
        { id: '1', text: 'For over three years (since March 2021)', isCorrect: true },
        { id: '2', text: 'For six months', isCorrect: false },
        { id: '3', text: 'Since yesterday', isCorrect: false },
        { id: '4', text: 'For ten years', isCorrect: false }
      ],
      correctAnswer: 'For over three years (since March 2021)',
      explanation: 'The speaker explicitly states "for over three years now".'
    },
    {
      id: 'ex_a2_9_125_p07',
      type: 'listen_and_type',
      prompt: 'Listen and type the exact sentence:',
      audioText: 'How long have you been friends?',
      correctAnswer: 'How long have you been friends?',
      explanation: 'Type the exact question with question mark.'
    },
    {
      id: 'ex_a2_9_125_p08',
      type: 'speaking',
      prompt: 'Read aloud clearly: "My family has lived in this quiet neighborhood since 2015."',
      targetText: 'My family has lived in this quiet neighborhood since 2015.',
      explanation: 'Speak clearly with proper pronunciation of "quiet neighborhood since 2015".'
    },
    {
      id: 'ex_a2_9_125_p09',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nGuest: "How long has this restaurant been open?"\nOwner: "It _____ by my family since 1985."',
      options: [
        { id: '1', text: 'has been run', isCorrect: true },
        { id: '2', text: 'is running for', isCorrect: false },
        { id: '3', text: 'was ran since', isCorrect: false },
        { id: '4', text: 'runs since', isCorrect: false }
      ],
      correctAnswer: 'has been run',
      explanation: 'Present perfect passive ("has been run ... since 1985").'
    },
    {
      id: 'ex_a2_9_125_p10',
      type: 'multiple_choice',
      prompt: 'Which phrase correctly uses "since"?',
      options: [
        { id: '1', text: 'since last Tuesday', isCorrect: true },
        { id: '2', text: 'since three days', isCorrect: false },
        { id: '3', text: 'since two weeks', isCorrect: false },
        { id: '4', text: 'since five hours', isCorrect: false }
      ],
      correctAnswer: 'since last Tuesday',
      explanation: '"Last Tuesday" is a specific starting day, matching "since".'
    },
    {
      id: 'ex_a2_9_125_p11',
      type: 'match_pairs',
      prompt: 'Match each time expression with "for" or "since":',
      options: [
        { id: '1', text: 'two decades → [use FOR]' },
        { id: '2', text: 'last summer → [use SINCE]' },
        { id: '3', text: 'three hours → [use FOR]' },
        { id: '4', text: '8:00 AM → [use SINCE]' }
      ],
      correctAnswer: 'matched',
      explanation: 'Categorizing durations (for) vs specific starting points (since).'
    },
    {
      id: 'ex_a2_9_125_p12',
      type: 'fill_blank',
      prompt: 'Complete with "for" or "since": "He has been absent from school _____ yesterday morning."',
      correctAnswer: 'since',
      explanation: '"Yesterday morning" is a specific starting point in time.'
    },
    {
      id: 'ex_a2_9_125_p13',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['She', 'has', 'had', 'her', 'driving', 'license', 'for', 'two', 'years'],
      correctAnswer: 'She has had her driving license for two years',
      explanation: 'Present perfect state + for + duration.'
    },
    {
      id: 'ex_a2_9_125_p14',
      type: 'translation',
      prompt: 'Translate to English: "हम 2019 से सहकर्मी हैं।"',
      correctAnswer: 'We have been colleagues since 2019.',
      acceptableAnswers: ['We have been coworkers since 2019.'],
      explanation: '"Have been colleagues since 2019".'
    },
    {
      id: 'ex_a2_9_125_p15',
      type: 'multiple_choice',
      prompt: 'Select the grammatically correct sentence:',
      options: [
        { id: '1', text: 'I have had this smartphone for six months.', isCorrect: true },
        { id: '2', text: 'I have this smartphone since six months.', isCorrect: false },
        { id: '3', text: 'I am having this smartphone for six months.', isCorrect: false },
        { id: '4', text: 'I have had this smartphone since six months.', isCorrect: false }
      ],
      correctAnswer: 'I have had this smartphone for six months.',
      explanation: 'Present perfect "have had" + "for six months".'
    }
  ],
  review: [
    {
      id: 'ex_a2_9_125_r01',
      type: 'multiple_choice',
      prompt: 'Choose the correct form:',
      options: [
        { id: '1', text: 'How long have you known your business partner?', isCorrect: true },
        { id: '2', text: 'How long do you know your business partner?', isCorrect: false },
        { id: '3', text: 'How long are you knowing your business partner?', isCorrect: false },
        { id: '4', text: 'How long time you know your business partner?', isCorrect: false }
      ],
      correctAnswer: 'How long have you known your business partner?',
      explanation: '"How long have you known...?" is the correct duration question.'
    },
    {
      id: 'ex_a2_9_125_r02',
      type: 'fill_blank',
      prompt: 'Fill in the blank with "for" or "since": "I have studied English _____ two years."',
      correctAnswer: 'for',
      explanation: '"Two years" is a duration.'
    },
    {
      id: 'ex_a2_9_125_r03',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['They', 'have', 'lived', 'in', 'London', 'since', 'October'],
      correctAnswer: 'They have lived in London since October',
      explanation: 'Present perfect with starting month "since October".'
    },
    {
      id: 'ex_a2_9_125_r04',
      type: 'translation',
      prompt: 'Translate to English: "वह बचपन से इस क्लब का सदस्य है।"',
      correctAnswer: 'He has been a member of this club since childhood.',
      acceptableAnswers: ['He has been a member of this club since his childhood.'],
      explanation: '"Has been a member ... since childhood".'
    },
    {
      id: 'ex_a2_9_125_r05',
      type: 'error_correction',
      prompt: 'Correct the error: "She has been a manager since three years."',
      correctAnswer: 'She has been a manager for three years.',
      explanation: 'Use "for" with the time period "three years".'
    }
  ],
  assessment: [
    {
      id: 'ex_a2_9_125_a01',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes an ongoing situation starting at a specific point?',
      options: [
        { id: '1', text: 'Our company has operated in this city since 2012.', isCorrect: true },
        { id: '2', text: 'Our company operates in this city since 2012.', isCorrect: false },
        { id: '3', text: 'Our company has operated in this city for 2012.', isCorrect: false },
        { id: '4', text: 'Our company is operating in this city since ten years.', isCorrect: false }
      ],
      correctAnswer: 'Our company has operated in this city since 2012.',
      explanation: 'Present perfect + "since 2012".'
    },
    {
      id: 'ex_a2_9_125_a02',
      type: 'fill_blank',
      prompt: 'Complete with "for" or "since": "She has worked at the hospital _____ a long time."',
      correctAnswer: 'for',
      explanation: '"A long time" represents a duration, requiring "for".'
    },
    {
      id: 'ex_a2_9_125_a03',
      type: 'translation',
      prompt: 'Translate to English: "आप कितने समय से इस घर में रह रहे हैं?"',
      correctAnswer: 'How long have you lived in this house?',
      acceptableAnswers: ['How long have you been living in this house?'],
      explanation: '"How long have you lived...?" is standard.'
    },
    {
      id: 'ex_a2_9_125_a04',
      type: 'speaking',
      prompt: 'Read aloud clearly: "We have known each other since university, and we have worked together for five years."',
      targetText: 'We have known each other since university, and we have worked together for five years.',
      explanation: 'Speak clearly contrasting "since university" with "for five years".'
    },
    {
      id: 'ex_a2_9_125_a05',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['He', 'has', 'owned', 'the', 'bookstore', 'since', 'last', 'spring'],
      correctAnswer: 'He has owned the bookstore since last spring',
      explanation: 'Present perfect state with starting point "since last spring".'
    }
  ]
};

// =========================================================================
// LESSON 126: Workplace Collaboration, Delegating Tasks & Status Updates
// =========================================================================
export const LESSON_126_CONFIG: LessonConfigA2 = {
  num: 126,
  title: 'Workplace Collaboration, Delegating Tasks & Status Updates',
  icon: '💼',
  estMin: 25,
  objTitle: 'Collaborating in Teams, Assigning Tasks & Giving Project Updates',
  objDesc: 'Learn functional workplace English to delegate responsibilities, request assistance, report progress, and coordinate deadlines with team members.',
  objHi: 'टीम में सहयोग करने, जिम्मेदारियां सौंपने, सहायता मांगने और प्रोजेक्ट की समय सीमा तय करने के लिए व्यावहारिक कार्यस्थल अंग्रेजी सीखें।',
  objEs: 'Aprender inglés laboral funcional para delegar responsabilidades, pedir ayuda, reportar avances y coordinar plazos.',
  canDo: [
    'I can ask colleagues for assistance politely using "Could you please help me with...?" and "Would you mind...?".',
    'I can delegate tasks clearly using modal expressions and polite imperatives.',
    'I can give concise project status reports (on track, behind schedule, ahead of deadline).',
    'I can clarify responsibilities and confirm deadlines in team meetings.'
  ],
  canDoHi: [
    'मैं "Could you please help me with...?" और "Would you mind...?" से सहकर्मियों से विनम्रतापूर्वक मदद मांग सकता हूँ।',
    'मैं टीम के सदस्यों को जिम्मेदारियाँ और कार्य स्पष्ट रूप से सौंप सकता हूँ।',
    'मैं प्रोजेक्ट की स्थिति रिपोर्ट (on track, behind schedule) संक्षेप में दे सकता हूँ।',
    'मैं बैठकों में जिम्मेदारियों को स्पष्ट कर सकता हूँ और समय सीमा (deadlines) तय कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo pedir ayuda a colegas con cortesía usando fórmulas adecuadas.',
    'Puedo delegar tareas claramente en equipo.',
    'Puedo dar informes de estado del proyecto concisos.',
    'Puedo aclarar responsabilidades y confirmar fechas límite.'
  ],
  vocab: [
    { w: 'delegate', p: '/ˈdelɪɡeɪt/', m: 'entrust a task or responsibility to another person', hi: 'कार्य सौंपना / दायित्व देना', es: 'delegar', fr: 'déléguer', de: 'delegieren', pt: 'delegar', zh: '委派 / 分派', ar: 'يفوّض', ja: '委任する / 任せる', ru: 'делегировать', ex: 'A good manager knows how to delegate tasks effectively.', exHi: 'एक अच्छा प्रबंधक जानता है कि कार्यों को प्रभावी ढंग से कैसे सौंपा जाए।', exEs: 'Un buen gerente sabe cómo delegar tareas eficazmente.', ic: '👥' },
    { w: 'deadline', p: '/ˈdedlaɪn/', m: 'the latest time or date by which something should be completed', hi: 'अंतिम समय सीमा / डेडलाइन', es: 'fecha límite / plazo', fr: 'date limite', de: 'Frist / Abgabetermin', pt: 'prazo final', zh: '截止日期', ar: 'موعد نهائي', ja: '締め切り', ru: 'крайний срок / дедлайн', ex: 'The strict deadline for submitting the tender is Friday at 5 PM.', exHi: 'निविदा जमा करने की अंतिम समय सीमा शुक्रवार शाम 5 बजे है।', exEs: 'El plazo estricto para presentar la oferta es el viernes a las 5 PM.', ic: '⏰' },
    { w: 'collaborate', p: '/kəˈlæbəreɪt/', m: 'work jointly on an activity or project', hi: 'सहयोग करना / मिलकर काम करना', es: 'colaborar', fr: 'collaborer', de: 'zusammenarbeiten', pt: 'colaborar', zh: '合作 / 协作', ar: 'يتعاون', ja: '協力する / 共同で行う', ru: 'сотрудничать', ex: 'Our design and marketing departments collaborate closely on launches.', exHi: 'हमारे डिज़ाइन और मार्केटिंग विभाग लॉन्च पर मिलकर काम करते हैं।', exEs: 'Nuestros departamentos de diseño y marketing colaboran estrechamente.', ic: '🤝' },
    { w: 'responsibility', p: '/rɪˌspɒnsəˈbɪləti/', m: 'a duty or task that you are required or expected to do', hi: 'जिम्मेदारी / दायित्व', es: 'responsabilidad', fr: 'responsabilité', de: 'Verantwortung / Zuständigkeit', pt: 'responsabilidade', zh: '职责 / 责任', ar: 'مسؤولية', ja: '責任 / 担当業務', ru: 'обязанность / ответственность', ex: 'Who has the main responsibility for organizing client workshops?', exHi: 'क्लाइंट वर्कशॉप आयोजित करने की मुख्य जिम्मेदारी किसकी है?', exEs: '¿Quién tiene la responsabilidad principal de organizar los talleres?', ic: '🛡️' },
    { w: 'progress', p: '/ˈprəʊɡres/', m: 'forward or onward movement toward a destination or goal', hi: 'प्रगति / तरक्की', es: 'progreso / avance', fr: 'progrès / avancée', de: 'Fortschritt', pt: 'progresso / avanço', zh: '进展 / 进度', ar: 'تقدم / تطور', ja: '進捗 / 進歩', ru: 'прогресс / продвижение', ex: 'We made substantial progress on the mobile app development this week.', exHi: 'हमने इस सप्ताह मोबाइल ऐप विकास पर काफी प्रगति की।', exEs: 'Hicimos un progreso sustancial en el desarrollo de la app esta semana.', ic: '📈' },
    { w: 'prioritize', p: '/praɪˈɒrətaɪz/', m: 'designate or treat something as more important than other things', hi: 'प्राथमिकता देना', es: 'priorizar', fr: 'prioriser', de: 'priorisieren', pt: 'priorizar', zh: '优先处理', ar: 'يعطي الأولوية', ja: '優先順位をつける', ru: 'расставлять приоритеты', ex: 'We need to prioritize critical software bug fixes before the launch.', exHi: 'हमें लॉन्च से पहले सॉफ्टवेयर बग फिक्स को प्राथमिकता देने की आवश्यकता है।', exEs: 'Debemos priorizar la corrección de errores antes del lanzamiento.', ic: '🎯' },
    { w: 'feedback', p: '/ˈfiːdbæk/', m: 'information about reactions to a product or a person\'s performance of a task', hi: 'प्रतिक्रिया / फीडबैक', es: 'comentarios / retroalimentación', fr: 'retour / rétroaction', de: 'Feedback / Rückmeldung', pt: 'feedback / retorno', zh: '反馈', ar: 'ملاحظات / تغذية راجعة', ja: 'フィードバック / 感想', ru: 'обратная связь / отзыв', ex: 'The client gave very positive feedback on our initial wireframe design.', exHi: 'क्लाइंट ने हमारे शुरुआती वायरफ्रेम डिज़ाइन पर बहुत सकारात्मक प्रतिक्रिया दी।', exEs: 'El cliente dio comentarios muy positivos sobre nuestro diseño inicial.', ic: '💬' },
    { w: 'milestone', p: '/ˈmaɪlstəʊn/', m: 'an action or event marking a significant change or stage in development', hi: 'मील का पत्थर / मुख्य चरण', es: 'hito / etapa clave', fr: 'étape majeure', de: 'Meilenstein', pt: 'marco / etapa', zh: '里程碑', ar: 'مرحلة بارزة', ja: '重要ポイント', ru: 'ключевой этап', ex: 'We reached our second development milestone ahead of schedule.', exHi: 'हम समय से पहले अपने दूसरे विकास चरण पर पहुँच गए।', exEs: 'Alcanzamos nuestro segundo hito de desarrollo antes de lo previsto.', ic: '🚩' },
    { w: 'assist', p: '/əˈsɪst/', m: 'help someone, typically by doing a share of the work', hi: 'मदद करना / सहायता करना', es: 'asistir / ayudar', fr: 'aider / assister', de: 'unterstützen / helfen', pt: 'ajudar / assistir', zh: '协助 / 帮助', ar: 'يساعد / يعاون', ja: '手伝う / 援助する', ru: 'помогать / содействовать', ex: 'Could someone assist me with finalizing the financial spreadsheet?', exHi: 'क्या कोई वित्तीय स्प्रेडशीट को अंतिम रूप देने में मेरी सहायता कर सकता है?', exEs: '¿Podría alguien ayudarme a finalizar la hoja de cálculo financiera?', ic: '🙋' },
    { w: 'coordinate', p: '/kəʊˈɔːdɪneɪt/', m: 'bring the different elements of a complex activity or organization into a harmonious or efficient relationship', hi: 'समन्वय करना / तालमेल बिठाना', es: 'coordinar', fr: 'coordonner', de: 'koordinieren / abstimmen', pt: 'coordenar', zh: '协调', ar: 'ينسّق', ja: '調整する / まとめる', ru: 'координировать', ex: 'Priya will coordinate with the external vendors for event catering.', exHi: 'प्रिया इवेंट कैटरिंग के लिए बाहरी विक्रेताओं के साथ समन्वय करेगी।', exEs: 'Priya coordinará con los proveedores externos para el catering.', ic: '🔄' },
    { w: 'hand over', p: '/hænd ˈəʊvə/', m: 'pass responsibility to someone else', hi: 'सौंपना / प्रभार देना', es: 'traspasar / entregar', fr: 'passer le relais / remettre', de: 'übergeben', pt: 'repassar / transferir', zh: '移交 / 交接', ar: 'يسلّم المسؤولية', ja: '引き継ぐ', ru: 'передавать (дела)', ex: 'I will hand over my ongoing files before I leave on vacation.', exHi: 'छुट्टी पर जाने से पहले मैं अपनी चालू फाइलें सौंप दूंगा।', exEs: 'Entregaré mis archivos pendientes antes de salir de vacaciones.', ic: '📂' },
    { w: 'schedule', p: '/ˈʃedjuːl/', m: 'arrange or plan an event to take place at a particular time', hi: 'निर्धारित करना / शेड्यूल करना', es: 'programar / agendar', fr: 'planifier', de: 'ansetzen / planen', pt: 'agendar / programar', zh: '安排日程', ar: 'يجدول / يحدد موعداً', ja: '予定を立てる', ru: 'планировать по графику', ex: 'Let us schedule a follow-up sync for Thursday morning.', exHi: 'आइए गुरुवार सुबह के लिए एक फॉलो-अप मीटिंग तय करें।', exEs: 'Programemos una reunión de seguimiento para el jueves por la mañana.', ic: '🗓️' },
    { w: 'efficient', p: '/ɪˈfɪʃnt/', m: 'achieving maximum productivity with minimum wasted effort or expense', hi: 'कुशल / कार्यक्षम', es: 'eficiente / eficaz', fr: 'efficace', de: 'effizient', pt: 'eficiente', zh: '高效率的', ar: 'كفء / فعال', ja: '効率的な', ru: 'эффективный', ex: 'Using automated testing tools makes our workflow much more efficient.', exHi: 'स्वचालित परीक्षण उपकरणों का उपयोग करने से हमारा कार्यप्रवाह अधिक कुशल हो जाता है।', exEs: 'Usar herramientas automatizadas hace nuestro flujo mucho más eficiente.', ic: '⚡' },
    { w: 'workload', p: '/ˈwɜːkləʊd/', m: 'the amount of work to be done by a particular person or machine in a given period', hi: 'काम का बोझ / कार्यभार', es: 'carga de trabajo', fr: 'charge de travail', de: 'Arbeitsbelastung', pt: 'carga de trabalho', zh: '工作量', ar: 'عبء العمل', ja: '仕事量', ru: 'рабочая нагрузка', ex: 'We should balance the team workload so nobody gets burned out.', exHi: 'हमें टीम के कार्यभार को संतुलित करना चाहिए ताकि कोई अत्यधिक तनाव में न आए।', es: 'Debemos equilibrar la carga de trabajo para que nadie se agote.', ic: '⚖️' },
    { w: 'resource', p: '/rɪˈzɔːs/', m: 'a stock or supply of money, materials, staff, and other assets', hi: 'संसाधन / रिसोर्स', es: 'recurso', fr: 'ressource', de: 'Ressource / Mittel', pt: 'recurso', zh: '资源', ar: 'مورد', ja: '資源 / リソース', ru: 'ресурс', ex: 'Do we have enough development resources to deliver by next month?', exHi: 'क्या हमारे पास अगले महीने तक डिलीवरी के लिए पर्याप्त संसाधन हैं?', exEs: '¿Tenemos suficientes recursos para entregar el próximo mes?', ic: '📦' },
    { w: 'objective', p: '/əbˈdʒektɪv/', m: 'a thing aimed at or sought; a goal', hi: 'उद्देश्य / लक्ष्य', es: 'objetivo / meta', fr: 'objectif', de: 'Ziel / Vorgabe', pt: 'objetivo', zh: '目标', ar: 'هدف', ja: '目標', ru: 'цель / задача', ex: 'Our primary objective is to increase system reliability by 20%.', exHi: 'हमारा प्राथमिक उद्देश्य सिस्टम की विश्वसनीयता को 20% बढ़ाना है।', exEs: 'Nuestro objetivo principal es aumentar la confiabilidad del sistema.', ic: '🎯' },
    { w: 'clarify', p: '/ˈklærəfaɪ/', m: 'make a statement or situation less confused and more clearly comprehensible', hi: 'स्पष्ट करना / साफ करना', es: 'aclarar / clarificar', fr: 'clarifier', de: 'klären / verdeutlichen', pt: 'esclarecer', zh: '澄清 / 阐明', ar: 'يوضح', ja: '明確にする', ru: 'разъяснять / уточнять', ex: 'Could you please clarify the third requirement on page five?', exHi: 'क्या आप कृपया पृष्ठ पांच पर तीसरी आवश्यकता को स्पष्ट कर सकते हैं?', exEs: '¿Podría por favor aclarar el tercer requisito de la página cinco?', ic: '💡' },
    { w: 'briefing', p: '/ˈbriːfɪŋ/', m: 'a meeting for giving information or instructions', hi: 'संक्षिप्त बैठक / ब्रीफिंग', es: 'reunión informativa / sesión informativa', fr: 'séance d\'information / briefing', de: 'Kurzbesprechung / Briefing', pt: 'reunião informativa', zh: '简报会', ar: 'إيجاز', ja: '状況説明 / ブリーフィング', ru: 'инструктаж / брифинг', ex: 'The project manager gave a clear briefing before the sprint started.', exHi: 'स्प्रिंट शुरू होने से पहले प्रोजेक्ट मैनेजर ने एक स्पष्ट ब्रीफिंग दी।', exEs: 'El gerente de proyecto dio una sesión informativa clara antes de iniciar.', ic: '📋' },
    { w: 'blocker', p: '/ˈblɒkə/', m: 'an obstacle that prevents progress on a task or project', hi: 'बाधा / अड़चन', es: 'bloqueo / obstáculo', fr: 'bloqueur / obstacle', de: 'Hindernis / Blocker', pt: 'impedimento / bloqueio', zh: '阻碍 / 障碍', ar: 'عائق', ja: '障害 / 進行を妨げる問題', ru: 'препятствие / блокер', ex: 'Does anyone have any technical blockers preventing them from finishing?', exHi: 'क्या किसी के पास कोई तकनीकी बाधा है जो काम पूरा करने से रोक रही है?', exEs: '¿Alguien tiene algún bloqueo técnico que le impida terminar?', ic: '🚧' },
    { w: 'sync', p: '/sɪŋk/', m: 'a short meeting to coordinate activities and align team progress', hi: 'समन्वय बैठक / सिंक', es: 'reunión de alineación', fr: 'point de synchronisation', de: 'Abstimmungsgespräch', pt: 'reunião de alinhamento', zh: '同步会', ar: 'اجتماع تنسيقي', ja: 'すり合わせミーティング', ru: 'согласование / синхронизация', ex: 'Let us have a ten-minute standup sync every morning at 9:30.', exHi: 'आइए हर सुबह 9:30 बजे दस मिनट की स्टैंडअप सिंक मीटिंग करें।', exEs: 'Tengamos una reunión de diez minutos cada mañana a las 9:30.', ic: '🕒' }
  ],
  chunks: [
    { phrase: 'on track to finish', meaning: 'progressing according to the planned schedule', hi: 'समय पर पूरा होने की सही दिशा में होना', es: 'bien encaminado para terminar', fr: 'en bonne voie pour terminer', de: 'im Zeitplan liegen', pt: 'no caminho certo para terminar', zh: '按计划能够完成', ar: 'على المسار الصحيح للانتهاء', ja: '予定通り完了する見込み', ru: 'идти по графику к завершению', note: 'Standard status update indicator.', ic: '🟢' },
    { phrase: 'behind schedule', meaning: 'delayed and taking longer than originally planned', hi: 'निर्धारित समय से पीछे / देर से', es: 'retrasado / fuera de plazo', fr: 'en retard sur le calendrier', de: 'hinter dem Zeitplan', pt: 'atrasado em relação ao cronograma', zh: '进度落后于计划', ar: 'متأخر عن الجدول الزمني', ja: '予定より遅れて', ru: 'с отставанием от графика', note: 'Alerts team to project bottlenecks.', ic: '🔴' },
    { phrase: 'ahead of deadline', meaning: 'finishing before the agreed cut-off date', hi: 'अंतिम समय सीमा से पहले', es: 'antes de la fecha límite', fr: 'en avance sur la date limite', de: 'vor dem Abgabetermin', pt: 'antes do prazo', zh: '提前于截止时间', ar: 'قبل الموعد النهائي', ja: '締め切りより早く', ru: 'с опережением графика', note: 'Positive progress report.', ic: '⚡' },
    { phrase: 'Could you please help me with...?', meaning: 'polite request for team assistance', hi: 'क्या आप कृपया इसमें मेरी मदद कर सकते हैं?', es: '¿Podrías por favor ayudarme con...?', fr: 'Pourriez-vous m\'aider avec... ?', de: 'Könnten Sie mir bitte helfen bei...?', pt: 'Você poderia por favor me ajudar com...?', zh: '你能帮我处理...吗？', ar: 'هل يمكنك مساعدتي في...؟', ja: '〜を手伝っていただけますか？', ru: 'Не могли бы вы помочь мне с...?', note: 'Standard polite workplace formula.', ic: '🤝' },
    { phrase: 'Would you mind + verb-ing...?', meaning: 'very polite request to a colleague', hi: 'क्या आपको यह करने में कोई आपत्ति तो नहीं होगी?', es: '¿Te importaría + infinitivo...?', fr: 'Cela vous dérangerait-il de... ?', de: 'Würde es Ihnen etwas ausmachen...?', pt: 'Você se importaria de + verbo...?', zh: '你介意...吗？', ar: 'هل تمانع في...؟', ja: '〜していただけますでしょうか？', ru: 'Вы не возражаете против того, чтобы...?', note: 'Always followed by a gerund (-ing verb).', ic: '🙏' },
    { phrase: 'take the lead on this', meaning: 'be the primary owner and coordinator of a task', hi: 'इस कार्य की मुख्य कमान संभालना', es: 'tomar el liderazgo en esto', fr: 'prendre la tête de ce projet', de: 'die Leitung übernehmen', pt: 'assumir a liderança nisso', zh: '带头负责此事', ar: 'تولي قيادة هذا الأمر', ja: 'この件の主導権を握る', ru: 'взять на себя руководство', note: 'Used when assigning ownership in delegation.', ic: '👑' },
    { phrase: 'let\'s touch base on Friday', meaning: 'let us talk briefly to review updates on Friday', hi: 'आइए शुक्रवार को मिलकर अपडेट साझा करें', es: 'hablemos brevemente el viernes', fr: 'faisons le point vendredi', de: 'lassen Sie uns am Freitag kurz abstimmen', pt: 'vamos nos falar na sexta', zh: '我们周五碰头对一下', ar: 'دعنا نتواصل يوم الجمعة', ja: '金曜日に連絡を取り合いましょう', ru: 'давайте свяжемся в пятницу', note: 'Common conversational workplace idiom.', ic: '📅' },
    { phrase: 'run into a problem', meaning: 'encounter an unexpected difficulty', hi: 'किसी अनपेक्षित समस्या का सामना करना', es: 'toparse con un problema', fr: 'rencontrer un problème', de: 'auf ein Problem stoßen', pt: 'deparar-se com um problema', zh: '遇到了问题', ar: 'واجه مشكلة', ja: '問題に直面する', ru: 'столкнуться с проблемой', note: 'Used when raising blockers in standup meetings.', ic: '⚠️' }
  ],
  grammar: {
    title: 'Polite Delegation & Status Reporting: Modals and Gerund Patterns',
    concept: 'Using "Could you please + base verb", "Would you mind + V-ing", and project status phrases.',
    patterns: [
      {
        title: 'Polite Requests with "Could you please..." and "Would you mind...?"',
        structure: 'Could you please + Base Verb (+ Object)? | Would you mind + Verb-ing (+ Object)?',
        rule: 'Use "Could you please + base verb" for standard professional requests. Use "Would you mind + -ing" for extra politeness.',
        examples: [
          { en: 'Could you please review the contract before the client meeting?', hi: 'क्या आप क्लाइंट मीटिंग से पहले अनुबंध की समीक्षा कर सकते हैं?', es: '¿Podrías revisar el contrato antes de la reunión con el cliente?' },
          { en: 'Would you mind sending me the updated spreadsheet?', hi: 'क्या आप मुझे अपडेट की गई स्प्रेडशीट भेजने का कष्ट करेंगे?', es: '¿Te importaría enviarme la hoja de cálculo actualizada?' }
        ]
      },
      {
        title: 'Expressing Task Ownership & Delegation with Modals',
        structure: 'Subject + will / can / should + take care of / handle + [Task]',
        rule: 'Use "will take care of" to volunteer, and "Can you take the lead on...?" to delegate politely.',
        examples: [
          { en: 'I will handle the slide deck design this afternoon.', hi: 'मैं आज दोपहर स्लाइड डेक डिज़ाइन का काम संभालूँगा।', es: 'Me encargaré del diseño de las diapositivas esta tarde.' },
          { en: 'Can you take the lead on coordinating with the vendors?', hi: 'क्या आप विक्रेताओं के साथ समन्वय करने की कमान संभाल सकते हैं?', es: '¿Puedes encargarte de coordinar con los proveedores?' }
        ]
      },
      {
        title: 'Reporting Project Status with Prepositional Phrases',
        structure: 'Subject / Project + is + on track / behind schedule / ahead of deadline',
        rule: 'Use these fixed prepositional phrases to communicate timeline performance accurately.',
        examples: [
          { en: 'The software release is on track for delivery on Friday.', hi: 'सॉफ्टवेयर रिलीज शुक्रवार को डिलीवरी के लिए सही समय पर है।', es: 'El lanzamiento del software va por buen camino para el viernes.' },
          { en: 'We are slightly behind schedule due to server maintenance.', hi: 'सर्वर रखरखाव के कारण हम निर्धारित समय से थोड़ा पीछे हैं।', es: 'Estamos un poco retrasados debido al mantenimiento del servidor.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'Would you mind to send the document?',
      cor: 'Would you mind sending the document?',
      exp: '"Would you mind" is always followed by a gerund (-ing form), not a to-infinitive.',
      hi: '"Would you mind" के बाद हमेशा "-ing" फॉर्म आती है, "to + verb" नहीं।',
      es: '"Would you mind" siempre va seguido de un verbo en "-ing".'
    },
    {
      inc: 'The project is in track.',
      cor: 'The project is on track.',
      exp: 'The correct idiom for running on schedule is "on track", with the preposition "on".',
      hi: 'सही मुहावरा "on track" है, "in track" नहीं।',
      es: 'La expresión correcta es "on track", con la preposición "on".'
    },
    {
      inc: 'Could you to help me with this task?',
      cor: 'Could you help me with this task?',
      exp: 'Modal verbs like "could" are followed directly by the base verb without "to".',
      hi: 'मोडल क्रिया "could" के बाद "to" नहीं आता, केवल base verb आती है।',
      es: 'Después del modal "could" va el verbo base sin "to".'
    },
    {
      inc: 'We are behind of schedule.',
      cor: 'We are behind schedule.',
      exp: 'Do not insert "of" between "behind" and "schedule". Say "behind schedule".',
      hi: '"Behind schedule" में "of" नहीं लगाया जाता।',
      es: 'Se dice "behind schedule", sin "of".'
    },
    {
      inc: 'Who will delegate this work to me yesterday?',
      cor: 'Who delegated this work to me yesterday?',
      exp: 'Use Past Simple "delegated" for past events ("yesterday").',
      hi: 'बीते हुए कल के लिए Past Simple "delegated" का प्रयोग करें।',
      es: 'Para el pasado se usa "delegated".'
    }
  ],
  dialogues: [
    {
      title: 'Morning Standup & Task Delegation',
      context: 'Arjun leads the morning sync meeting for the software engineering team.',
      charA: { name: 'Arjun', av: '👨🏾', role: 'Scrum Master' },
      charB: { name: 'Deepa', av: '👩🏽', role: 'Frontend Engineer' },
      turns: [
        { spk: 'Arjun', text: 'Good morning, team! How are we doing on the user profile redesign?', hi: 'सुप्रभात, टीम! यूजर प्रोफाइल रीडिज़ाइन पर हमारी प्रगति कैसी है?', es: '¡Buenos días, equipo! ¿Cómo vamos con el rediseño del perfil de usuario?' },
        { spk: 'Deepa', text: 'We are on track to finish the interface by Wednesday. All mobile components are ready.', hi: 'हम बुधवार तक इंटरफ़ेस पूरा करने के लिए सही समय पर हैं। सभी मोबाइल घटक तैयार हैं।', es: 'Vamos por buen camino para terminar la interfaz para el miércoles. Todos los componentes móviles están listos.' },
        { spk: 'Arjun', text: 'Great. Deepa, would you mind helping Vikram with the payment gateway testing this afternoon?', hi: 'बहुत बढ़िया। दीपा, क्या आपको आज दोपहर विक्रम को पेमेंट गेटवे टेस्टिंग में मदद करने में कोई आपत्ति होगी?', es: 'Excelente. Deepa, ¿te importaría ayudar a Vikram con las pruebas de la pasarela de pagos esta tarde?' },
        { spk: 'Deepa', text: 'Not at all! I will coordinate with Vikram right after this sync meeting.', hi: 'बिल्कुल नहीं! मैं इस बैठक के तुरंत बाद विक्रम के साथ समन्वय करूँगी।', es: '¡Para nada! Coordinaré con Vikram justo después de esta reunión.' }
      ]
    },
    {
      title: 'Solving a Project Blocker & Negotiating Deadlines',
      context: 'Carlos and Elena discuss a vendor delay that impacts their marketing launch.',
      charA: { name: 'Carlos', av: '👨🏽', role: 'Marketing Manager' },
      charB: { name: 'Elena', av: '👩🏼', role: 'Operations Lead' },
      turns: [
        { spk: 'Carlos', text: 'Elena, we have run into a problem with the print vendor. The brochures might be two days late.', hi: 'एलेना, प्रिंट वेंडर के साथ एक समस्या आ गई है। ब्रोशर में दो दिन की देरी हो सकती है।', es: 'Elena, hemos tenido un problema con el proveedor de impresión. Los folletos podrían retrasarse dos días.' },
        { spk: 'Elena', text: 'That means our campaign launch is slightly behind schedule. Could you please call their account executive immediately?', hi: 'इसका मतलब है कि हमारा अभियान लॉन्च समय से थोड़ा पीछे है। क्या आप कृपया उनके अकाउंट एक्जीक्यूटिव को तुरंत फोन कर सकते हैं?', es: 'Eso significa que el lanzamiento de nuestra campaña está un poco retrasado. ¿Podrías llamar a su ejecutivo de cuenta de inmediato?' },
        { spk: 'Carlos', text: 'I have already emailed them, and I will follow up with a phone call in ten minutes.', hi: 'मैंने उन्हें पहले ही ईमेल कर दिया है, और मैं दस मिनट में फोन करके फॉलो-अप लूँगा।', es: 'Ya les he enviado un correo y les haré seguimiento con una llamada en diez minutos.' },
        { spk: 'Elena', text: 'Thanks, Carlos. Keep me posted so we can adjust the launch agenda if necessary.', hi: 'धन्यवाद, कार्लोस। मुझे जानकारी देते रहना ताकि ज़रूरत पड़ने पर हम लॉन्च एजेंडा में बदलाव कर सकें।', es: 'Gracias, Carlos. Mantenme informada para que podamos ajustar la agenda si es necesario.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_a2_9_126_p01',
      type: 'multiple_choice',
      prompt: 'Select the correct verb form after "Would you mind":',
      options: [
        { id: '1', text: 'Would you mind sharing your screen during the presentation?', isCorrect: true },
        { id: '2', text: 'Would you mind to share your screen during the presentation?', isCorrect: false },
        { id: '3', text: 'Would you mind share your screen during the presentation?', isCorrect: false },
        { id: '4', text: 'Would you mind shared your screen during the presentation?', isCorrect: false }
      ],
      correctAnswer: 'Would you mind sharing your screen during the presentation?',
      explanation: '"Would you mind" requires a gerund ("sharing").'
    },
    {
      id: 'ex_a2_9_126_p02',
      type: 'fill_blank',
      prompt: 'Complete the status idiom: "Our project is _____ track to launch before Friday."',
      correctAnswer: 'on',
      explanation: 'The phrase is "on track" (progressing on schedule).'
    },
    {
      id: 'ex_a2_9_126_p03',
      type: 'word_ordering',
      prompt: 'Arrange the words into a polite workplace request:',
      tokens: ['Could', 'you', 'please', 'clarify', 'the', 'project', 'objectives'],
      correctAnswer: 'Could you please clarify the project objectives',
      explanation: 'Polite request formula: Could you please + base verb + object.'
    },
    {
      id: 'ex_a2_9_126_p04',
      type: 'translation',
      prompt: 'Translate to English: "क्या आप इस कार्य की कमान संभाल सकते हैं?"',
      correctAnswer: 'Can you take the lead on this task?',
      acceptableAnswers: [
        'Could you take the lead on this task?',
        'Can you take the lead on this project?'
      ],
      explanation: '"Take the lead on" means assume primary responsibility.'
    },
    {
      id: 'ex_a2_9_126_p05',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence: "We are currently behind of schedule due to weather."',
      correctAnswer: 'We are currently behind schedule due to weather.',
      explanation: 'Remove "of"; the phrase is "behind schedule".'
    },
    {
      id: 'ex_a2_9_126_p06',
      type: 'listening',
      prompt: 'Listen to the project update and identify the team status:',
      audioText: 'Hi everyone, all testing is complete and we are ahead of deadline for our client demo tomorrow morning.',
      options: [
        { id: '1', text: 'Ahead of deadline for the client demo', isCorrect: true },
        { id: '2', text: 'Behind schedule due to testing bugs', isCorrect: false },
        { id: '3', text: 'Cancelling the client meeting', isCorrect: false },
        { id: '4', text: 'Waiting for vendor confirmation', isCorrect: false }
      ],
      correctAnswer: 'Ahead of deadline for the client demo',
      explanation: 'The speaker explicitly states "we are ahead of deadline".'
    },
    {
      id: 'ex_a2_9_126_p07',
      type: 'listen_and_type',
      prompt: 'Listen and type the exact sentence:',
      audioText: 'Please keep me posted on your progress.',
      correctAnswer: 'Please keep me posted on your progress.',
      explanation: 'Type the sentence with correct spelling and punctuation.'
    },
    {
      id: 'ex_a2_9_126_p08',
      type: 'speaking',
      prompt: 'Read aloud clearly: "Could you please help me coordinate with the design team before the deadline?"',
      targetText: 'Could you please help me coordinate with the design team before the deadline?',
      explanation: 'Speak with polite intonation and clear pronunciation.'
    },
    {
      id: 'ex_a2_9_126_p09',
      type: 'dialogue_completion',
      prompt: 'Complete the conversation:\nManager: "Who is responsible for the financial spreadsheet?"\nAccountant: "I _____ of that task by 3 PM."',
      options: [
        { id: '1', text: 'will take care', isCorrect: true },
        { id: '2', text: 'am taking to care', isCorrect: false },
        { id: '3', text: 'have care', isCorrect: false },
        { id: '4', text: 'take care since', isCorrect: false }
      ],
      correctAnswer: 'will take care',
      explanation: '"Will take care of" expresses willingness to take responsibility.'
    },
    {
      id: 'ex_a2_9_126_p10',
      type: 'multiple_choice',
      prompt: 'What does "let\'s touch base on Friday" mean?',
      options: [
        { id: '1', text: 'Let us briefly speak and share updates on Friday.', isCorrect: true },
        { id: '2', text: 'Let us cancel our Friday meeting.', isCorrect: false },
        { id: '3', text: 'Let us play sports together on Friday.', isCorrect: false },
        { id: '4', text: 'Let us sign the contract next month.', isCorrect: false }
      ],
      correctAnswer: 'Let us briefly speak and share updates on Friday.',
      explanation: '"Touch base" is a business idiom meaning make contact and exchange updates.'
    },
    {
      id: 'ex_a2_9_126_p11',
      type: 'match_pairs',
      prompt: 'Match each workplace term with its definition:',
      options: [
        { id: '1', text: 'blocker → [an issue that halts progress]' },
        { id: '2', text: 'delegate → [assign a task to a colleague]' },
        { id: '3', text: 'deadline → [latest time to complete work]' },
        { id: '4', text: 'sync → [short coordination meeting]' }
      ],
      correctAnswer: 'matched',
      explanation: 'Essential project collaboration vocabulary pairings.'
    },
    {
      id: 'ex_a2_9_126_p12',
      type: 'fill_blank',
      prompt: 'Complete with the correct preposition: "Would you mind helping me _____ the quarterly audit?"',
      correctAnswer: 'with',
      explanation: 'Help someone "with" a task.'
    },
    {
      id: 'ex_a2_9_126_p13',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['We', 'need', 'to', 'prioritize', 'the', 'most', 'urgent', 'tasks'],
      correctAnswer: 'We need to prioritize the most urgent tasks',
      explanation: 'Standard sentence with infinitive verb phrase.'
    },
    {
      id: 'ex_a2_9_126_p14',
      type: 'translation',
      prompt: 'Translate to English: "क्या आपको मुझे रिपोर्ट भेजने में कोई आपत्ति होगी?"',
      correctAnswer: 'Would you mind sending me the report?',
      acceptableAnswers: ['Would you mind sending the report to me?'],
      explanation: '"Would you mind sending...".'
    },
    {
      id: 'ex_a2_9_126_p15',
      type: 'multiple_choice',
      prompt: 'Select the polite request that is grammatically correct:',
      options: [
        { id: '1', text: 'Could you please check these numbers for me?', isCorrect: true },
        { id: '2', text: 'Could you to check these numbers for me?', isCorrect: false },
        { id: '3', text: 'Would you mind check these numbers for me?', isCorrect: false },
        { id: '4', text: 'Do you mind to check these numbers for me?', isCorrect: false }
      ],
      correctAnswer: 'Could you please check these numbers for me?',
      explanation: '"Could you please + base verb" is grammatically accurate.'
    }
  ],
  review: [
    {
      id: 'ex_a2_9_126_r01',
      type: 'multiple_choice',
      prompt: 'Choose the correct sentence:',
      options: [
        { id: '1', text: 'Would you mind reviewing this draft before noon?', isCorrect: true },
        { id: '2', text: 'Would you mind to review this draft before noon?', isCorrect: false },
        { id: '3', text: 'Would you mind review this draft before noon?', isCorrect: false },
        { id: '4', text: 'Could you please reviewing this draft before noon?', isCorrect: false }
      ],
      correctAnswer: 'Would you mind reviewing this draft before noon?',
      explanation: '"Would you mind + gerund (-ing)".'
    },
    {
      id: 'ex_a2_9_126_r02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "The team is working overtime to ensure the delivery is _____ track."',
      correctAnswer: 'on',
      explanation: '"On track" is the correct phrase.'
    },
    {
      id: 'ex_a2_9_126_r03',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['I', 'will', 'hand', 'over', 'the', 'project', 'files', 'tomorrow'],
      correctAnswer: 'I will hand over the project files tomorrow',
      explanation: 'Future simple with phrasal verb "hand over".'
    },
    {
      id: 'ex_a2_9_126_r04',
      type: 'translation',
      prompt: 'Translate to English: "हम समय सीमा से आगे चल रहे हैं।"',
      correctAnswer: 'We are ahead of deadline.',
      acceptableAnswers: ['We are ahead of the deadline.', 'We are ahead of schedule.'],
      explanation: '"Ahead of deadline" or "ahead of schedule".'
    },
    {
      id: 'ex_a2_9_126_r05',
      type: 'error_correction',
      prompt: 'Correct the error: "Could you to delegate this responsibility to Anita?"',
      correctAnswer: 'Could you delegate this responsibility to Anita?',
      explanation: 'Omit "to" after the modal "could".'
    }
  ],
  assessment: [
    {
      id: 'ex_a2_9_126_a01',
      type: 'multiple_choice',
      prompt: 'Which request is both extremely polite and grammatically correct?',
      options: [
        { id: '1', text: 'Would you mind preparing the meeting room for the client visit?', isCorrect: true },
        { id: '2', text: 'Would you mind to prepare the meeting room for the client visit?', isCorrect: false },
        { id: '3', text: 'Could you please to prepare the meeting room for the client visit?', isCorrect: false },
        { id: '4', text: 'Would you mind prepare the meeting room for the client visit?', isCorrect: false }
      ],
      correctAnswer: 'Would you mind preparing the meeting room for the client visit?',
      explanation: '"Would you mind + preparing" is accurate.'
    },
    {
      id: 'ex_a2_9_126_a02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "If you encounter any unexpected _____, please raise them in the morning sync."',
      correctAnswer: 'blockers',
      acceptableAnswers: ['problems', 'issues'],
      explanation: '"Blockers" or "issues" in agile teamwork.'
    },
    {
      id: 'ex_a2_9_126_a03',
      type: 'translation',
      prompt: 'Translate to English: "कृपया मुझे अपनी प्रगति के बारे में सूचित करते रहें।"',
      correctAnswer: 'Please keep me posted on your progress.',
      acceptableAnswers: [
        'Please keep me updated on your progress.',
        'Please keep me informed about your progress.'
      ],
      explanation: '"Keep me posted on your progress" is natural workplace English.'
    },
    {
      id: 'ex_a2_9_126_a04',
      type: 'speaking',
      prompt: 'Read aloud clearly: "Our engineering sprint is on track, and we will deliver all features ahead of deadline."',
      targetText: 'Our engineering sprint is on track, and we will deliver all features ahead of deadline.',
      explanation: 'Speak clearly with professional intonation.'
    },
    {
      id: 'ex_a2_9_126_a05',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['Who', 'will', 'take', 'the', 'lead', 'on', 'this', 'assignment'],
      correctAnswer: 'Who will take the lead on this assignment',
      explanation: 'Question syntax with modal "will".'
    }
  ]
};
