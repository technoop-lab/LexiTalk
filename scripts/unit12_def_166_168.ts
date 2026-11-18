import { LessonConfigA2 } from './unit12_builder_helper';

// =========================================================================
// LESSON 166: Project Updates, Status Reports & Explaining Milestones
// =========================================================================
export const LESSON_166_CONFIG: LessonConfigA2 = {
  num: 166,
  title: 'Project Updates, Status Reports & Explaining Milestones',
  icon: '📊',
  estMin: 25,
  objTitle: 'Present Perfect vs Past Simple for Progress Updates & Time Adverbs',
  objDesc: 'Learn to deliver concise workplace project updates, contrast completed actions with specific past timeframes using Present Perfect and Past Simple, and indicate ongoing progress with "already", "yet", and "just".',
  objHi: 'कार्यस्थल पर प्रोजेक्ट की प्रगति रिपोर्ट देना, Present Perfect और Past Simple के बीच अंतर करना, और "already", "yet", "just" के साथ स्थिति स्पष्ट करना सीखें।',
  objEs: 'Entregar informes de estado breves, contrastar acciones completadas con marcos temporales pasados usando Present Perfect y Past Simple, e indicar el progreso con "already", "yet" y "just".',
  canDo: [
    'I can provide a clear status update on ongoing tasks and team projects.',
    'I can correctly contrast completed actions (Present Perfect) with specific past events (Past Simple).',
    'I can use "already", "yet", and "just" to specify task completion states.',
    'I can ask colleagues about project deadlines and report blockers or milestones.'
  ],
  canDoHi: [
    'मैं चल रहे कार्यों और टीम प्रोजेक्ट्स पर स्पष्ट स्थिति रिपोर्ट दे सकता हूँ।',
    'मैं पूर्ण हो चुके कार्यों (Present Perfect) और विशिष्ट भूतकाल के कार्यों (Past Simple) में सही अंतर कर सकता हूँ।',
    'मैं कार्य पूर्णता की स्थिति बताने के लिए "already", "yet" और "just" का उपयोग कर सकता हूँ।',
    'मैं सहकर्मियों से समय-सीमा के बारे में पूछ सकता हूँ और रुकावटों या उपलब्धियों की रिपोर्ट कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo dar un informe claro del estado de las tareas y proyectos en curso.',
    'Puedo contrastar acciones completadas con eventos pasados específicos.',
    'Puedo usar "already", "yet" y "just" para especificar el estado de las tareas.',
    'Puedo preguntar a colegas sobre plazos e informar sobre obstáculos o hitos.'
  ],
  vocab: [
    { w: 'deliverable', p: '/dɪˈlɪvərəbl/', m: 'a thing able to be provided, especially as a product of a development process', hi: 'देय परिणाम / तैयार उत्पाद', es: 'entregable / producto final', fr: 'livrable', de: 'Liefergegenstand', pt: 'entregável', zh: '交付成果', ar: 'مخرجات قابلة للتسليم', ja: '成果物', ru: 'результат проекта', ex: 'The final deliverable is due by Friday afternoon.', exHi: 'अंतिम देय परिणाम शुक्रवार दोपहर तक जमा करना है।', exEs: 'El entregable final debe presentarse el viernes por la tarde.', ic: '📦' },
    { w: 'deadline', p: '/ˈdedlaɪn/', m: 'the latest time or date by which something should be completed', hi: 'अंतिम समय-सीमा', es: 'fecha límite / plazo', fr: 'date limite', de: 'Frist', pt: 'prazo', zh: '截止日期', ar: 'الموعد النهائي', ja: '締め切り', ru: 'крайний срок', ex: 'We must meet this strict deadline to satisfy the client.', exHi: 'ग्राहक को संतुष्ट करने के लिए हमें इस सख्त समय-सीमा को पूरा करना होगा।', exEs: 'Debemos cumplir con este plazo estricto para satisfacer al cliente.', ic: '⏰' },
    { w: 'status', p: '/ˈsteɪtəs/', m: 'the current state or condition of progress of a task', hi: 'वर्तमान स्थिति', es: 'estado / situación', fr: 'statut / état', de: 'Status', pt: 'status / estado', zh: '状态', ar: 'حالة', ja: '状況 / ステータス', ru: 'статус / состояние', ex: 'Could you give me a brief status update on the marketing campaign?', exHi: 'क्या आप मुझे मार्केटिंग अभियान पर एक संक्षिप्त स्थिति अपडेट दे सकते हैं?', exEs: '¿Podrías darme una breve actualización del estado de la campaña de marketing?', ic: '📋' },
    { w: 'milestone', p: '/ˈmaɪlstəʊn/', m: 'a significant point or goal achieved in a project', hi: 'महत्वपूर्ण पड़ाव / मील का पत्थर', es: 'hito', fr: 'jalon', de: 'Meilenstein', pt: 'marco', zh: '里程碑', ar: 'محطة رئيسية', ja: 'マイルストーン', ru: 'веха', ex: 'Completing the database design was our second major milestone.', exHi: 'डेटाबेस डिज़ाइन पूरा करना हमारा दूसरा बड़ा मील का पत्थर था।', exEs: 'Completar el diseño de la base de datos fue nuestro segundo hito importante.', ic: '🚩' },
    { w: 'blocker', p: '/ˈblɒkər/', m: 'an obstacle that prevents progress on a task', hi: 'रुकावट / अवरोध', es: 'bloqueador / impedimento', fr: 'bloqueur', de: 'Hindernis', pt: 'bloqueio / impedimento', zh: '阻碍 / 障碍', ar: 'عائق', ja: '障害 / ブロッカー', ru: 'препятствие / блокер', ex: 'Do you have any technical blockers preventing you from finishing the code?', exHi: 'क्या आपके पास कोई तकनीकी रुकावट है जो आपको कोड पूरा करने से रोक रही है?', exEs: '¿Tienes algún impedimento técnico que te impida terminar el código?', ic: '🚧' },
    { w: 'roadmap', p: '/ˈrəʊdmæp/', m: 'a strategic plan that defines a goal and outlines major steps', hi: 'कार्ययोजना / रोडमैप', es: 'hoja de ruta', fr: 'feuille de route', de: 'Fahrplan / Roadmap', pt: 'roteiro / plano de ação', zh: '路线图', ar: 'خارطة طريق', ja: 'ロードマップ', ru: 'план развития', ex: 'The quarterly roadmap outlines five strategic initiatives.', exHi: 'त्रैमासिक रोडमैप पांच रणनीतिक पहलों की रूपरेखा तैयार करता है।', exEs: 'La hoja de ruta trimestral describe cinco iniciativas estratégicas.', ic: '🗺️' },
    { w: 'update', p: '/ʌpˈdeɪt/', m: 'make something more modern or give the latest news', hi: 'अद्यतन करना / ताज़ा जानकारी देना', es: 'actualizar / actualización', fr: 'mettre à jour', de: 'aktualisieren', pt: 'atualizar', zh: '更新', ar: 'تحديث', ja: '更新する', ru: 'обновлять', ex: 'I updated the project dashboard five minutes ago.', exHi: 'मैंने पांच मिनट पहले प्रोजेक्ट डैशबोर्ड को अपडेट किया था।', exEs: 'Actualicé el panel del proyecto hace cinco minutos.', ic: '🔄' },
    { w: 'delay', p: '/dɪˈleɪ/', m: 'a period of time by which something is late or postponed', hi: 'देरी / विलंब', es: 'retraso / demora', fr: 'retard', de: 'Verzögerung', pt: 'atraso', zh: '延迟', ar: 'تأخير', ja: '遅延', ru: 'задержка', ex: 'Supply chain issues caused a two-week delay.', exHi: 'आपूर्ति श्रृंखला की समस्याओं के कारण दो सप्ताह की देरी हुई।', exEs: 'Los problemas en la cadena de suministro causaron un retraso de dos semanas.', ic: '⏳' },
    { w: 'achieve', p: '/əˈtʃiːv/', m: 'successfully reach a desired objective, result, or goal', hi: 'हासिल करना / प्राप्त करना', es: 'lograr / alcanzar', fr: 'atteindre', de: 'erreichen', pt: 'alcançar / atingir', zh: '达成 / 取得', ar: 'يحقق', ja: '達成する', ru: 'достигать', ex: 'We have achieved all our monthly sales targets.', exHi: 'हमने अपने सभी मासिक बिक्री लक्ष्य हासिल कर लिए हैं।', exEs: 'Hemos alcanzado todos nuestros objetivos de ventas mensuales.', ic: '🏆' },
    { w: 'overview', p: '/ˈəʊvəvjuː/', m: 'a general review or summary of a subject', hi: 'सिंहावलोकन / संक्षिप्त सारांश', es: 'resumen general / panorama', fr: 'vue d\'ensemble', de: 'Überblick', pt: 'visão geral', zh: '概述', ar: 'نظرة عامة', ja: '概要', ru: 'обзор', ex: 'Let me give you a quick overview of the current phase.', exHi: 'मैं आपको वर्तमान चरण का एक त्वरित अवलोकन देता हूँ।', exEs: 'Permíteme darte un resumen general de la fase actual.', ic: '👁️' },
    { w: 'behind schedule', p: '/bɪˈhaɪnd ˈʃedjuːl/', m: 'happening later than planned', hi: 'निर्धारित समय से पीछे', es: 'retrasado / fuera de plazo', fr: 'en retard', de: 'hinter dem Zeitplan', pt: 'atrasado em relação ao cronograma', zh: '落后于进度', ar: 'متأخر عن الجدول الزمني', ja: '予定より遅れて', ru: 'с отставанием от графика', ex: 'We are slightly behind schedule due to server maintenance.', exHi: 'सर्वर रखरखाव के कारण हम निर्धारित समय से थोड़ा पीछे हैं।', exEs: 'Estamos un poco retrasados debido al mantenimiento del servidor.', ic: '📉' },
    { w: 'ahead of schedule', p: '/əˈhed əv ˈʃedjuːl/', m: 'happening earlier than planned', hi: 'निर्धारित समय से आगे', es: 'adelantado / antes de tiempo', fr: 'en avance', de: 'dem Zeitplan voraus', pt: 'adiantado em relação ao cronograma', zh: '提前于进度', ar: 'متقدم عن الجدول الزمني', ja: '予定より早く', ru: 'с опережением графика', ex: 'Thanks to weekend overtime, we are ahead of schedule.', exHi: 'सप्ताहांत ओवरटाइम के लिए धन्यवाद, हम समय से आगे चल रहे हैं।', exEs: 'Gracias a las horas extras del fin de semana, estamos adelantados.', ic: '🚀' },
    { w: 'metric', p: '/ˈmetrɪk/', m: 'a system or standard of measurement to gauge performance', hi: 'मापदंड / मीट्रिक', es: 'métrica / indicador', fr: 'indicateur', de: 'Messgröße', pt: 'métrica', zh: '指标', ar: 'مقياس', ja: '指標 / メトリック', ru: 'показатель', ex: 'Customer satisfaction is our most critical performance metric.', exHi: 'ग्राहक संतुष्टि हमारा सबसे महत्वपूर्ण प्रदर्शन मापदंड है।', exEs: 'La satisfacción del cliente es nuestra métrica de rendimiento más crítica.', ic: '📊' },
    { w: 'launch', p: '/lɔːntʃ/', m: 'set in motion or introduce a new product or website to the public', hi: 'शुरू करना / लॉन्च करना', es: 'lanzar / estreno', fr: 'lancer', de: 'starten / herausbringen', pt: 'lançar', zh: '发布 / 推出', ar: 'إطلاق', ja: '開始する / 発売する', ru: 'запускать', ex: 'We launched the beta version yesterday afternoon.', exHi: 'हमने कल दोपहर बीटा संस्करण लॉन्च किया था।', exEs: 'Lanzamos la versión beta ayer por la tarde.', ic: '🛰️' },
    { w: 'phase', p: '/feɪz/', m: 'a distinct stage in a process or development cycle', hi: 'चरण / दौर', es: 'fase / etapa', fr: 'phase', de: 'Phase', pt: 'fase / etapa', zh: '阶段', ar: 'مرحلة', ja: 'フェーズ / 段階', ru: 'фаза / этап', ex: 'Phase one is complete; now we begin phase two testing.', exHi: 'पहला चरण पूरा हो गया है; अब हम दूसरे चरण का परीक्षण शुरू करते हैं।', exEs: 'La fase uno está completa; ahora comenzamos las pruebas de la fase dos.', ic: '🔹' },
    { w: 'postpone', p: '/pəˈspəʊn/', m: 'cause or arrange for something to take place at a later time', hi: 'स्थगित करना / टालना', es: 'posponer / aplazar', fr: 'reporter', de: 'verschieben', pt: 'adiar', zh: '延期', ar: 'يؤجل', ja: '延期する', ru: 'откладывать', ex: 'They postponed the client review until next Monday.', exHi: 'उन्होंने ग्राहक समीक्षा को अगले सोमवार तक के लिए स्थगित कर दिया।', exEs: 'Pospusieron la revisión con el cliente hasta el próximo lunes.', ic: '⏸️' },
    { w: 'pending', p: '/ˈpendɪŋ/', m: 'awaiting decision, resolution, or settlement', hi: 'लंबित / अनिर्णीत', es: 'pendiente / en espera', fr: 'en attente', de: 'ausstehend', pt: 'pendente', zh: '待定', ar: 'معلق', ja: '保留中', ru: 'на рассмотрении / в ожидании', ex: 'Three pull requests are still pending approval.', exHi: 'तीन पुल अनुरोध अभी भी अनुमोदन के लिए लंबित हैं।', exEs: 'Tres solicitudes de extracción aún están pendientes de aprobación.', ic: '⏳' },
    { w: 'briefing', p: '/ˈbriːfɪŋ/', m: 'a meeting for giving information or instructions', hi: 'संक्षिप्त बैठक / ब्रीफिंग', es: 'reunión informativa', fr: 'séance d\'information', de: 'Besprechung / Briefing', pt: 'briefing / reunião de alinhamento', zh: '简报会', ar: 'إيجاز', ja: 'ブリーフィング', ru: 'инструктаж / брифинг', ex: 'Join the morning briefing at 9:00 AM sharp.', exHi: 'सुबह 9:00 बजे सटीक संक्षिप्त बैठक में शामिल हों।', exEs: 'Únete a la reunión informativa de la mañana a las 9:00 AM en punto.', ic: '🗣️' },
    { w: 'estimate', p: '/ˈestɪmət/', m: 'an approximate calculation or judgment of time, cost, or size', hi: 'अनुमान / आंकलन', es: 'estimación / presupuesto', fr: 'estimation', de: 'Schätzung', pt: 'estimativa', zh: '预估', ar: 'تقدير', ja: '見積もり', ru: 'оценка', ex: 'Our current estimate suggests completion within ten working days.', exHi: 'हमारा वर्तमान अनुमान दस कार्य दिवसों के भीतर पूरा होने का सुझाव देता है।', exEs: 'Nuestra estimación actual sugiere la finalización en diez días laborables.', ic: '📐' },
    { w: 'resolved', p: '/rɪˈzɒlvd/', m: 'settled or solved successfully', hi: 'सुलझाया हुआ / हल किया गया', es: 'resuelto / solucionado', fr: 'résolu', de: 'gelöst', pt: 'resolvido', zh: '已解决', ar: 'محلول', ja: '解決済み', ru: 'решенный', ex: 'The engineering team has resolved all critical bugs.', exHi: 'इंजीनियरिंग टीम ने सभी गंभीर बग्स को सुलझा लिया है।', exEs: 'El equipo de ingeniería ha resuelto todos los errores críticos.', ic: '✅' }
  ],
  chunks: [
    { phrase: 'give a status update', meaning: 'provide recent progress information', hi: 'स्थिति का ताज़ा ब्योरा देना', es: 'dar una actualización del estado', fr: 'faire un point sur la situation', de: 'einen Statusbericht geben', pt: 'dar uma atualização de status', zh: '汇报最新进度', ar: 'تقديم تحديث للحالة', ja: '進捗状況を報告する', ru: 'дать отчет о статусе', note: 'Standard professional phrase: "Can you give a quick status update?"', ic: '🗣️' },
    { phrase: 'on track to', meaning: 'progressing according to schedule to reach a goal', hi: 'समय पर पूरा होने की राह पर होना', es: 'en camino de / bien encaminado para', fr: 'en bonne voie pour', de: 'auf gutem Weg sein zu', pt: 'no caminho certo para', zh: '按进度推进以...', ar: 'على المسار الصحيح لـ', ja: '〜の予定通りに進んでいる', ru: 'идти по графику к', note: 'Used with verb: "We are on track to finish the feature today."', ic: '🎯' },
    { phrase: 'as of now', meaning: 'at the present moment', hi: 'अब तक / फिलहाल', es: 'hasta ahora / por el momento', fr: 'à ce jour / pour le moment', de: 'Stand jetzt', pt: 'até o momento / por enquanto', zh: '截至目前', ar: 'حتى الآن', ja: '現在のところ', ru: 'на данный момент', note: 'Introductory time chunk: "As of now, 80% of testing is done."', ic: '⏱️' },
    { phrase: 'run into a problem', meaning: 'encounter an unexpected difficulty', hi: 'अचानक किसी समस्या का सामना होना', es: 'toparse con un problema', fr: 'rencontrer un problème', de: 'auf ein Problem stoßen', pt: 'deparar-se com um problema', zh: '遇到问题', ar: 'مواجهة مشكلة', ja: '問題に直面する', ru: 'столкнуться с проблемой', note: 'Colloquial workplace expression: "We ran into an authentication issue."', ic: '⚠️' },
    { phrase: 'touch base', meaning: 'briefly talk or check in with someone', hi: 'थोड़ी देर के लिए संपर्क करना / बात करना', es: 'ponerse en contacto / coordinar brevemente', fr: 'faire le point / se contacter', de: 'sich kurzschließen', pt: 'fazer contato / alinhar', zh: '简短沟通 / 碰头', ar: 'التواصل السريع', ja: '簡単に連絡を取り合う', ru: 'связаться / сверить часы', note: 'Workplace idiom: "Let\'s touch base after lunch."', ic: '🤝' },
    { phrase: 'wrap up', meaning: 'bring a task, meeting, or phase to a conclusion', hi: 'समाप्त करना / पूरा करना', es: 'concluir / terminar', fr: 'conclure / boucler', de: 'abschließen / beenden', pt: 'concluir / finalizar', zh: '收尾 / 结束', ar: 'اختتام', ja: '締めくくる', ru: 'завершать / закругляться', note: 'Action verb chunk: "Let\'s wrap up this sprint by 5 PM."', ic: '🎬' },
    { phrase: 'in the pipeline', meaning: 'being developed or planned for the near future', hi: 'प्रक्रियाधीन / योजना में होना', es: 'en proceso / en preparación', fr: 'en préparation', de: 'in Vorbereitung / in der Pipeline', pt: 'em andamento / nos planos', zh: '在筹划中 / 正在开发', ar: 'قيد الإعداد', ja: '進行中 / 計画中', ru: 'в разработке / на очереди', note: 'Idiomatic: "We have two new features in the pipeline."', ic: '🔄' },
    { phrase: 'bring to a halt', meaning: 'cause something to stop completely', hi: 'पूरी तरह से रोक देना', es: 'detener por completo', fr: 'interrompre complètement', de: 'zum Stillstand bringen', pt: 'paralisar completamente', zh: '使...彻底停滞', ar: 'إيقاف تام', ja: '完全に停止させる', ru: 'привести к полной остановке', note: 'Collocation: "The power outage brought production to a halt."', ic: '🛑' }
  ],
  grammar: {
    title: 'Present Perfect vs Past Simple & Time Markers (already, yet, just)',
    concept: 'Distinguishing completed actions connected to the present from events completed at a specified past time.',
    patterns: [
      {
        title: 'Present Perfect for Unspecified Recent Results vs Past Simple for Specific Time',
        structure: 'Present Perfect: Subject + have/has + V3 | Past Simple: Subject + V2 (+ past time expression)',
        rule: 'Use Present Perfect when the exact time is unmentioned or recent and affects the present moment. Use Past Simple when a specific past time (yesterday, last week, in 2024) is stated.',
        examples: [
          { en: 'I have already sent the progress report to the client.', hi: 'मैं ग्राहक को प्रगति रिपोर्ट पहले ही भेज चुका हूँ।', es: 'Ya he enviado el informe de progreso al cliente.' },
          { en: 'I sent the progress report yesterday afternoon at 4 PM.', hi: 'मैंने कल दोपहर 4 बजे प्रगति रिपोर्ट भेजी थी।', es: 'Envié el informe de progreso ayer por la tarde a las 4 PM.' }
        ]
      },
      {
        title: 'Positioning "already", "just", and "yet"',
        structure: 'Subject + have/has + already/just + V3 | Subject + have/has not + V3 + yet | Have + subject + V3 + yet?',
        rule: '"Already" shows an action completed sooner than expected; "just" indicates a very recent moment; "yet" is used in negatives and questions at the end of the clause.',
        examples: [
          { en: 'The developer has just committed the fix.', hi: 'डेवलपर ने अभी-अभी सुधार कोड अपलोड किया है।', es: 'El desarrollador acaba de confirmar la corrección.' },
          { en: 'Have you tested the payment gateway yet?', hi: 'क्या आपने अभी तक भुगतान गेटवे का परीक्षण किया है?', es: '¿Ya has probado la pasarela de pago?' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'I have sent the email yesterday.', cor: 'I sent the email yesterday.', exp: 'Do not use Present Perfect with specific past time indicators like "yesterday". Use Past Simple.', hi: '"yesterday" जैसे विशिष्ट समय के साथ Present Perfect नहीं बल्कि Past Simple का उपयोग करें।', es: 'No uses Present Perfect con expresiones de tiempo pasado específicas como "yesterday".' },
    { inc: 'She didn\'t finish the design already.', cor: 'She hasn\'t finished the design yet.', exp: 'In negative sentences expressing uncompleted expected actions, use "yet" at the end with Present Perfect, not "already".', hi: 'नकारात्मक वाक्यों में "already" की जगह अंत में "yet" का प्रयोग करें।', es: 'En oraciones negativas, usa "yet" al final con Present Perfect, no "already".' },
    { inc: 'We are on track for launch the app.', cor: 'We are on track to launch the app.', exp: 'The expression "on track" takes an infinitive "to + verb" when referring to a future objective.', hi: '"on track" के बाद उद्देश्य के लिए "to + क्रिया" का उपयोग करें।', es: 'La expresión "on track" lleva infinitivo "to + verbo".' },
    { inc: 'I just have finished the presentation.', cor: 'I have just finished the presentation.', exp: 'The adverb "just" is placed between the auxiliary "have/has" and the past participle.', hi: '"just" को सहायक क्रिया "have/has" और मुख्य क्रिया V3 के बीच रखें।', es: 'El adverbio "just" se coloca entre "have/has" y el participio pasado.' },
    { inc: 'Did you resolved the bug yet?', cor: 'Have you resolved the bug yet?', exp: 'When asking about task completion with "yet", use Present Perfect ("Have you resolved..."), not Past Simple with "Did".', hi: '"yet" के साथ पूर्णता पूछने के लिए "Have you resolved..." का प्रयोग करें।', es: 'Usa Present Perfect con "yet" para preguntar si una tarea ya está resuelta.' }
  ],
  dialogues: [
    {
      title: 'Morning Stand-up Status Check',
      context: 'Priya (Scrum Master) and Liam (Senior Developer) conduct a 5-minute morning project status briefing.',
      charA: { name: 'Priya', av: '👩‍💼', role: 'Scrum Master' },
      charB: { name: 'Liam', av: '👨‍💻', role: 'Software Engineer' },
      turns: [
        { spk: 'Priya', text: 'Good morning Liam! Could you give us a quick status update on the search filter feature?', hi: 'सुप्रभात लियाम! क्या आप हमें सर्च फ़िल्टर सुविधा पर एक त्वरित स्थिति अपडेट दे सकते हैं?', es: '¡Buenos días Liam! ¿Podrías darnos una breve actualización sobre la función de filtro de búsqueda?' },
        { spk: 'Liam', text: 'Sure Priya. I have already completed the back-end API logic and tested the database queries.', hi: 'बिल्कुल प्रिया। मैं बैक-एंड एपीआई लॉजिक पहले ही पूरा कर चुका हूँ और डेटाबेस क्वेरीज़ का परीक्षण कर चुका हूँ।', es: 'Claro Priya. Ya he completado la lógica de la API y probado las consultas de la base de datos.' },
        { spk: 'Priya', text: 'Excellent! Have you integrated the front-end user interface yet?', hi: 'उत्कृष्ट! क्या आपने अभी तक फ्रंट-एंड इंटरफ़ेस को एकीकृत किया है?', es: '¡Excelente! ¿Ya has integrado la interfaz de usuario?' },
        { spk: 'Liam', text: 'Not yet. We ran into a minor styling issue yesterday, but I have just received the updated mockups from design.', hi: 'अभी तक नहीं। कल हमें एक छोटी सी स्टाइलिंग समस्या का सामना करना पड़ा, लेकिन मुझे अभी-अभी डिज़ाइन टीम से नए मॉकअप मिले हैं।', es: 'Todavía no. Ayer tuvimos un pequeño problema de diseño, pero acabo de recibir los nuevos modelos.' },
        { spk: 'Priya', text: 'Great. Are we still on track to deploy the beta by Thursday?', hi: 'बढ़िया। क्या हम गुरुवार तक बीटा संस्करण तैनात करने के लिए सही रास्ते पर हैं?', es: 'Genial. ¿Seguimos encaminados para implementar la versión beta el jueves?' },
        { spk: 'Liam', text: 'Yes, absolutely. We will wrap up testing by tomorrow afternoon.', hi: 'हाँ, बिल्कुल। हम कल दोपहर तक परीक्षण समाप्त कर लेंगे।', es: 'Sí, absolutamente. Concluiremos las pruebas mañana por la tarde.' }
      ]
    },
    {
      title: 'Discussing Project Roadblocks with Management',
      context: 'Carlos (Product Manager) briefs Maya (Director of Operations) regarding milestone deadlines.',
      charA: { name: 'Carlos', av: '👨‍💼', role: 'Product Manager' },
      charB: { name: 'Maya', av: '👩‍💼', role: 'Director of Operations' },
      turns: [
        { spk: 'Maya', text: 'Hi Carlos, let\'s touch base on the logistics deliverable. Are there any critical blockers?', hi: 'नमस्ते कार्लोस, आइए लॉजिस्टिक्स डिलीवरी पर बात करें। क्या कोई गंभीर रुकावटें हैं?', es: 'Hola Carlos, coordinemos sobre el entregable de logística. ¿Hay algún impedimento crítico?' },
        { spk: 'Carlos', text: 'As of now, the server configuration is slightly behind schedule, but the team has already identified the bottleneck.', hi: 'फिलहाल, सर्वर कॉन्फ़िगरेशन निर्धारित समय से थोड़ा पीछे है, लेकिन टीम ने पहले ही अड़चन की पहचान कर ली है।', es: 'Por ahora, la configuración del servidor está un poco retrasada, pero el equipo ya identificó el cuello de botella.' },
        { spk: 'Maya', text: 'Did the supplier deliver the replacement hardware yesterday as promised?', hi: 'क्या आपूर्तिकर्ता ने वादे के अनुसार कल प्रतिस्थापन हार्डवेयर वितरित किया?', es: '¿El proveedor entregó el hardware de reemplazo ayer como prometió?' },
        { spk: 'Carlos', text: 'Yes, they delivered it at 3 PM yesterday, and our engineers have just finished installing it.', hi: 'हाँ, उन्होंने इसे कल दोपहर 3 बजे वितरित किया, और हमारे इंजीनियरों ने अभी-अभी इसे स्थापित करना समाप्त किया है।', es: 'Sí, lo entregaron ayer a las 3 PM, y nuestros ingenieros acaban de terminar de instalarlo.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_166_p1',
      type: 'multiple_choice',
      prompt: 'Choose the sentence that correctly uses the Present Perfect tense:',
      options: [
        { id: '1', text: 'We have already completed the second milestone.', isCorrect: true },
        { id: '2', text: 'We have completed the second milestone yesterday.', isCorrect: false },
        { id: '3', text: 'We already did complete the second milestone last week.', isCorrect: false },
        { id: '4', text: 'We completing the second milestone yet.', isCorrect: false }
      ],
      correctAnswer: 'We have already completed the second milestone.',
      explanation: 'Use Present Perfect with "already" for actions completed before now without a specific past time.'
    },
    {
      id: 'ex_166_p2',
      type: 'fill_blank',
      prompt: 'Select the correct adverb to complete the status update:',
      text: 'Have you received the updated timeline [blank]?',
      options: [
        { id: '1', text: 'yet', isCorrect: true },
        { id: '2', text: 'already', isCorrect: false },
        { id: '3', text: 'just', isCorrect: false },
        { id: '4', text: 'yesterday', isCorrect: false }
      ],
      correctAnswer: 'yet',
      explanation: 'In questions asking whether an expected action has occurred, "yet" comes at the end.'
    },
    {
      id: 'ex_166_p3',
      type: 'word_ordering',
      prompt: 'Arrange the words to form a correct workplace update:',
      tokens: ['I', 'have', 'just', 'sent', 'the', 'project', 'deliverable', '.'],
      correctOrder: ['I', 'have', 'just', 'sent', 'the', 'project', 'deliverable', '.'],
      explanation: '"Just" sits between the auxiliary "have" and participle "sent".'
    },
    {
      id: 'ex_166_p4',
      type: 'error_correction',
      prompt: 'Correct the error in the sentence:',
      errorSentence: 'Our lead developer has solved the database crash yesterday.',
      correctSentence: 'Our lead developer solved the database crash yesterday.',
      explanation: '"Yesterday" denotes a specific past time, requiring Past Simple ("solved"), not Present Perfect.'
    },
    {
      id: 'ex_166_p5',
      type: 'translation',
      prompt: 'Translate to English: "हम समय पर प्रोजेक्ट लॉन्च करने की राह पर हैं।"',
      targetSentence: 'We are on track to launch the project on time.',
      explanation: 'Use the phrase "on track to launch" for scheduled future progress.'
    },
    {
      id: 'ex_166_p6',
      type: 'multiple_choice',
      prompt: 'What does "touch base" mean in a professional context?',
      options: [
        { id: '1', text: 'Briefly contact or check in with someone', isCorrect: true },
        { id: '2', text: 'Play a physical sport after work', isCorrect: false },
        { id: '3', text: 'Permanently cancel an ongoing project', isCorrect: false },
        { id: '4', text: 'Hire a new outside contractor', isCorrect: false }
      ],
      correctAnswer: 'Briefly contact or check in with someone',
      explanation: '"Touch base" means to hold a brief discussion or progress check.'
    },
    {
      id: 'ex_166_p7',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct verb form:',
      text: 'The marketing team [blank] the new campaign last Tuesday.',
      options: [
        { id: '1', text: 'launched', isCorrect: true },
        { id: '2', text: 'has launched', isCorrect: false },
        { id: '3', text: 'have launched', isCorrect: false },
        { id: '4', text: 'was launching', isCorrect: false }
      ],
      correctAnswer: 'launched',
      explanation: 'Specific past time ("last Tuesday") requires the Past Simple verb "launched".'
    },
    {
      id: 'ex_166_p8',
      type: 'speaking',
      prompt: 'Read aloud this project update clearly:',
      targetSentence: 'As of now, our team has achieved all major quarterly milestones.',
      audioText: 'As of now, our team has achieved all major quarterly milestones.',
      explanation: 'Focus on clear pronunciation of "achieved" and "milestones".'
    },
    {
      id: 'ex_166_p9',
      type: 'listening',
      prompt: 'Listen to the status update and select what happened:',
      audioText: 'We ran into a minor server issue, but the engineers have just resolved it.',
      options: [
        { id: '1', text: 'The engineers have just fixed the server issue.', isCorrect: true },
        { id: '2', text: 'The server issue is still blocking the team.', isCorrect: false },
        { id: '3', text: 'The project was postponed for two months.', isCorrect: false },
        { id: '4', text: 'The engineers quit the project yesterday.', isCorrect: false }
      ],
      correctAnswer: 'The engineers have just fixed the server issue.',
      explanation: '"have just resolved it" indicates the issue was fixed very recently.'
    },
    {
      id: 'ex_166_p10',
      type: 'match_pairs',
      prompt: 'Match the workplace project expressions to their meanings:',
      pairs: [
        { left: 'Behind schedule', right: 'Late or delayed' },
        { left: 'Ahead of schedule', right: 'Earlier than planned' },
        { left: 'In the pipeline', right: 'In development' },
        { left: 'Deliverable', right: 'Final project output' }
      ]
    }
  ],
  review: [
    {
      id: 'ex_166_r1',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses a negative status update?',
      options: [
        { id: '1', text: 'We haven\'t received the client feedback yet.', isCorrect: true },
        { id: '2', text: 'We didn\'t receive the client feedback already.', isCorrect: false },
        { id: '3', text: 'We haven\'t receive the client feedback yet.', isCorrect: false },
        { id: '4', text: 'We already haven\'t received feedback.', isCorrect: false }
      ],
      correctAnswer: 'We haven\'t received the client feedback yet.',
      explanation: 'Negative Present Perfect uses "haven\'t received" paired with "yet" at the end.'
    },
    {
      id: 'ex_166_r2',
      type: 'word_ordering',
      prompt: 'Order the words to describe task completion:',
      tokens: ['She', 'has', 'already', 'submitted', 'the', 'quarterly', 'roadmap', '.'],
      correctOrder: ['She', 'has', 'already', 'submitted', 'the', 'quarterly', 'roadmap', '.'],
      explanation: '"Already" precedes the past participle "submitted".'
    },
    {
      id: 'ex_166_r3',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the appropriate preposition:',
      text: 'Our team is on track [blank] finish testing by 5 PM.',
      options: [
        { id: '1', text: 'to', isCorrect: true },
        { id: '2', text: 'for', isCorrect: false },
        { id: '3', text: 'at', isCorrect: false },
        { id: '4', text: 'in', isCorrect: false }
      ],
      correctAnswer: 'to',
      explanation: 'The pattern is "on track to + base verb".'
    },
    {
      id: 'ex_166_r4',
      type: 'translation',
      prompt: 'Translate to English: "क्या आपने अभी तक बग्स को ठीक किया है?"',
      targetSentence: 'Have you fixed the bugs yet?',
      explanation: 'Use "Have you + V3 + yet?" for questions regarding completion status.'
    },
    {
      id: 'ex_166_r5',
      type: 'speaking',
      prompt: 'Speak this sentence aloud:',
      targetSentence: 'Let us touch base tomorrow morning to review the new deliverables.',
      audioText: 'Let us touch base tomorrow morning to review the new deliverables.',
      explanation: 'Practice natural pacing on "touch base" and "deliverables".'
    },
    {
      id: 'ex_166_r6',
      type: 'error_correction',
      prompt: 'Correct the error in this status report:',
      errorSentence: 'I have just spoke to the vendor about the hardware delay.',
      correctSentence: 'I have just spoken to the vendor about the hardware delay.',
      explanation: 'Present Perfect requires the past participle "spoken", not the past simple "spoke".'
    }
  ],
  assessment: [
    {
      id: 'ex_166_a1',
      type: 'multiple_choice',
      prompt: 'Identify the grammatically correct sentence:',
      options: [
        { id: '1', text: 'Carlos sent the summary yesterday, but Maya has not reviewed it yet.', isCorrect: true },
        { id: '2', text: 'Carlos has sent the summary yesterday, but Maya did not review it already.', isCorrect: false },
        { id: '3', text: 'Carlos sends the summary yesterday, and Maya hasn\'t review it.', isCorrect: false },
        { id: '4', text: 'Carlos was sending the summary yesterday yet.', isCorrect: false }
      ],
      correctAnswer: 'Carlos sent the summary yesterday, but Maya has not reviewed it yet.',
      explanation: '"Yesterday" pairs with Past Simple "sent", and incomplete current state pairs with "has not reviewed ... yet".'
    },
    {
      id: 'ex_166_a2',
      type: 'fill_blank',
      prompt: 'Choose the correct word to indicate immediate recent completion:',
      text: 'The engineering team has [blank] deployed the emergency security patch.',
      options: [
        { id: '1', text: 'just', isCorrect: true },
        { id: '2', text: 'yet', isCorrect: false },
        { id: '3', text: 'ago', isCorrect: false },
        { id: '4', text: 'last', isCorrect: false }
      ],
      correctAnswer: 'just',
      explanation: '"Just" indicates an action that happened moments ago.'
    },
    {
      id: 'ex_166_a3',
      type: 'word_ordering',
      prompt: 'Arrange the tokens into a professional status question:',
      tokens: ['Have', 'you', 'identified', 'the', 'critical', 'bottleneck', 'yet', '?'],
      correctOrder: ['Have', 'you', 'identified', 'the', 'critical', 'bottleneck', 'yet', '?'],
      explanation: 'Standard question format with "Have you + V3 + object + yet?".'
    },
    {
      id: 'ex_166_a4',
      type: 'translation',
      prompt: 'Translate: "सर्वर रखरखाव के कारण हम निर्धारित समय से थोड़ा पीछे हैं।"',
      targetSentence: 'We are slightly behind schedule due to server maintenance.',
      explanation: '"behind schedule due to" is the precise professional rendering.'
    },
    {
      id: 'ex_166_a5',
      type: 'speaking',
      prompt: 'Deliver this status summary clearly:',
      targetSentence: 'We have wrapped up phase one and are ready to begin user testing.',
      audioText: 'We have wrapped up phase one and are ready to begin user testing.',
      explanation: 'Produce connected speech on "wrapped up phase one".'
    },
    {
      id: 'ex_166_a6',
      type: 'personal_production',
      prompt: 'Write one complete sentence describing a task you have already finished today and one task you haven\'t finished yet.',
      explanation: 'Example: "I have already sent the daily report, but I have not finished the budget review yet."'
    }
  ]
};

// =========================================================================
// LESSON 167: Explaining Work & Technical Problems Clearly
// =========================================================================
export const LESSON_167_CONFIG: LessonConfigA2 = {
  num: 167,
  title: 'Explaining Work & Technical Problems Clearly',
  icon: '⚙️',
  estMin: 25,
  objTitle: 'Expressing Cause, Result & Passive Problem States',
  objDesc: 'Learn to describe malfunctions, technical glitches, and operational delays using cause-and-effect linkers ("as a result", "therefore", "due to") and state passives ("is broken", "got disconnected", "was delayed").',
  objHi: 'तकनीकी समस्याओं, रुकावटों और गड़बड़ियों का स्पष्ट विवरण देना, कारण-परिणाम संयोजकों ("as a result", "therefore", "due to") और निष्क्रिय अवस्थाओं का उपयोग करना सीखें।',
  objEs: 'Describir fallos técnicos, averías y retrasos operativos usando conectores de causa y efecto ("as a result", "therefore", "due to") y estados pasivos ("is broken", "got disconnected").',
  canDo: [
    'I can explain what went wrong with equipment, software, or a work process clearly.',
    'I can use cause and effect transition words like "therefore" and "as a result".',
    'I can describe broken or malfunctioning items using passive participles ("is damaged", "got stuck").',
    'I can report error messages and ask for technical assistance.'
  ],
  canDoHi: [
    'मैं उपकरण, सॉफ़्टवेयर या कार्य प्रक्रिया में आई समस्या को स्पष्ट रूप से समझा सकता हूँ।',
    'मैं "therefore" और "as a result" जैसे कारण और प्रभाव वाले शब्दों का उपयोग कर सकता हूँ।',
    'मैं निष्क्रिय कृदंतों ("is damaged", "got stuck") का उपयोग करके टूटी या खराब वस्तुओं का वर्णन कर सकता हूँ।',
    'मैं त्रुटि संदेशों की रिपोर्ट कर सकता हूँ और तकनीकी सहायता मांग सकता हूँ।'
  ],
  canDoEs: [
    'Puedo explicar claramente qué falló en un equipo, software o proceso de trabajo.',
    'Puedo usar palabras de transición de causa y efecto como "therefore" y "as a result".',
    'Puedo describir elementos dañados o averiados usando participios pasivos ("is damaged", "got stuck").',
    'Puedo reportar mensajes de error y solicitar asistencia técnica.'
  ],
  vocab: [
    { w: 'malfunction', p: '/ˌmælˈfʌŋkʃn/', m: 'fail to function normally or properly', hi: 'खराबी / ठीक से काम न करना', es: 'fallo / mal funcionamiento', fr: 'dysfonctionnement', de: 'Fehlfunktion', pt: 'mau funcionamento', zh: '故障', ar: 'عطل', ja: '誤作動 / 故障', ru: 'неисправность', ex: 'The barcode scanner began to malfunction during the inventory check.', exHi: 'बारकोड स्कैनर इन्वेंट्री जांच के दौरान खराब होने लगा।', exEs: 'El escáner de código de barras comenzó a fallar durante el control de inventario.', ic: '⚠️' },
    { w: 'glitch', p: '/ɡlɪtʃ/', m: 'a sudden, usually temporary malfunction or fault in equipment', hi: 'तकनीकी गड़बड़ी', es: 'glitch / pequeño fallo técnico', fr: 'pépin / bogue', de: 'Panne / Glitch', pt: 'falha técnica / pane', zh: '小毛病 / 故障', ar: 'خلل مؤقت', ja: '不具合 / グリッチ', ru: 'сбой / глюк', ex: 'A minor software glitch prevented users from logging in.', exHi: 'एक छोटी सॉफ्टवेयर गड़बड़ी ने उपयोगकर्ताओं को लॉग इन करने से रोक दिया।', exEs: 'Un pequeño fallo de software impidió que los usuarios iniciaran sesión.', ic: '👾' },
    { w: 'outage', p: '/ˈaʊtɪdʒ/', m: 'a period when a power or communication supply is not available', hi: 'बिजली या नेटवर्क गुल होना', es: 'corte / interrupción del servicio', fr: 'panne de courant / coupure', de: 'Ausfall', pt: 'queda de energia / interrupção', zh: '断电 / 停运', ar: 'انقطاع', ja: '停電 / 停止', ru: 'отключение / авария', ex: 'The sudden network outage disrupted customer service for two hours.', exHi: 'अचानक नेटवर्क बंद होने से दो घंटे तक ग्राहक सेवा बाधित रही।', exEs: 'El repentino corte de red interrumpió el servicio al cliente durante dos horas.', ic: '🔌' },
    { w: 'troubleshoot', p: '/ˈtrʌblʃuːt/', m: 'analyze and solve serious problems for a company or system', hi: 'समस्या का निवारण करना', es: 'solucionar problemas / diagnosticar', fr: 'dépanner', de: 'Fehler beheben', pt: 'solucionar problemas', zh: '排除故障', ar: 'استكشاف الأخطاء وإصلاحها', ja: 'トラブルシューティングする', ru: 'устранять неполадки', ex: 'Our IT technician is currently troubleshooting the internet connection.', exHi: 'हमारा आईटी तकनीशियन वर्तमान में इंटरनेट कनेक्शन की समस्या का निवारण कर रहा है।', exEs: 'Nuestro técnico de TI está diagnosticando la conexión a internet.', ic: '🔧' },
    { w: 'disconnected', p: '/ˌdɪskəˈnektɪd/', m: 'having a connection broken or separated', hi: 'संपर्क टूटा हुआ / डिस्कनेक्टेड', es: 'desconectado', fr: 'déconnecté', de: 'getrennt', pt: 'desconectado', zh: '断开连接的', ar: 'مفصول', ja: '切断された', ru: 'отключенный', ex: 'My video call got disconnected because of the weak Wi-Fi signal.', exHi: 'कमजोर वाई-फाई सिग्नल के कारण मेरा वीडियो कॉल कट गया।', exEs: 'Mi videollamada se desconectó debido a la débil señal de Wi-Fi.', ic: '📶' },
    { w: 'unresponsive', p: '/ˌʌnrɪˈspɒnsɪv/', m: 'not reacting or responding to input or stimulus', hi: 'अनुत्तरदायी / कोई प्रतिक्रिया न देना', es: 'que no responde / bloqueado', fr: 'qui ne répond pas', de: 'reagiert nicht', pt: 'não responde / travado', zh: '无响应', ar: 'لا يستجيب', ja: '応答しない', ru: 'не отвечает / зависший', ex: 'The screen froze and became completely unresponsive.', exHi: 'स्क्रीन जम गई और पूरी तरह से अनुत्तरदायी हो गई।', exEs: 'La pantalla se congeló y dejó de responder por completo.', ic: '🧊' },
    { w: 'corrupted', p: '/kəˈrʌptɪd/', m: 'containing errors or damaged in a way that makes data unreadable', hi: 'दूषित / खराब फ़ाइल', es: 'corrupto / dañado', fr: 'corrompu', de: 'beschädigt / korrupt', pt: 'corrompido', zh: '损坏的', ar: 'تالف', ja: '破損した', ru: 'поврежденный (о файле)', ex: 'The spreadsheet file was corrupted after the computer crashed.', exHi: 'कंप्यूटर क्रैश होने के बाद स्प्रेडशीट फ़ाइल दूषित हो गई थी।', exEs: 'El archivo de hoja de cálculo se dañó después de que la computadora se bloqueó.', ic: '📁' },
    { w: 'overheating', p: '/ˌəʊvəˈhiːtɪŋ/', m: 'becoming excessively hot, causing malfunction', hi: 'अत्यधिक गर्म होना', es: 'sobrecalentamiento', fr: 'surchauffe', de: 'Überhitzung', pt: 'superaquecimento', zh: '过热', ar: 'ارتفاع مفرط في الحرارة', ja: '過熱 / オーバーヒート', ru: 'перегрев', ex: 'The laptop fan made loud noises because the processor was overheating.', exHi: 'प्रोसेसर के ज्यादा गर्म होने की वजह से लैपटॉप का पंखा तेज आवाज कर रहा था।', exEs: 'El ventilador del portátil hacía mucho ruido porque el procesador se estaba sobrecalentando.', ic: '🔥' },
    { w: 'compatibility', p: '/kəmˌpætəˈbɪləti/', m: 'the state in which two things are able to exist or occur together without conflict', hi: 'अनुकूलता / संगतता', es: 'compatibilidad', fr: 'compatibilité', de: 'Kompatibilität', pt: 'compatibilidade', zh: '兼容性', ar: 'توافق', ja: '互換性', ru: 'совместимость', ex: 'There is a compatibility issue between the software and the new operating system.', exHi: 'सॉफ्टवेयर और नए ऑपरेटिंग सिस्टम के बीच अनुकूलता की समस्या है।', exEs: 'Hay un problema de compatibilidad entre el software y el nuevo sistema operativo.', ic: '🔄' },
    { w: 'intermittent', p: '/ˌɪntəˈmɪtənt/', m: 'occurring at irregular intervals; not continuous or steady', hi: 'रुक-रुक कर होने वाला', es: 'intermitente', fr: 'intermittent', de: 'zeitweise / intermittierend', pt: 'intermitente', zh: '断断续续的', ar: 'متقطع', ja: '断続的な', ru: 'прерывистый / периодический', ex: 'We are experiencing intermittent audio problems during the conference.', exHi: 'कॉन्फ्रेंस के दौरान हम रुक-रुक कर आने वाली ऑडियो समस्याओं का सामना कर रहे हैं।', exEs: 'Estamos experimentando problemas de audio intermitentes durante la conferencia.', ic: '📻' },
    { w: 'symptom', p: '/ˈsɪmptəm/', m: 'a physical or operational sign of a problem', hi: 'लक्षण', es: 'síntoma / indicio', fr: 'symptôme', de: 'Symptom', pt: 'sintoma', zh: '症状 / 迹象', ar: 'عرض', ja: '兆候 / 症状', ru: 'признак / симптом', ex: 'Slow loading times are the primary symptom of database overload.', exHi: 'धीमा लोडिंग समय डेटाबेस ओवरलोड का प्राथमिक लक्षण है।', exEs: 'Los tiempos de carga lentos son el síntoma principal de la sobrecarga de la base de datos.', ic: '🔍' },
    { w: 'consequence', p: '/ˈkɒnsɪkwəns/', m: 'a result or effect of an action or condition', hi: 'परिणाम / नतीजा', es: 'consecuencia / resultado', fr: 'conséquence', de: 'Konsequenz / Folge', pt: 'consequência', zh: '后果', ar: 'عاقبة / نتيجة', ja: '結果 / 影響', ru: 'следствие / последствие', ex: 'As a consequence of the delay, the client requested a discount.', exHi: 'देरी के परिणामस्वरूप, ग्राहक ने छूट का अनुरोध किया।', exEs: 'Como consecuencia del retraso, el cliente solicitó un descuento.', ic: '⚡' },
    { w: 'therefore', p: '/ˈðeəfɔːr/', m: 'for that reason; consequently', hi: 'इसलिए / अतः', es: 'por lo tanto / por consiguiente', fr: 'par conséquent', de: 'daher / deshalb', pt: 'portanto / por isso', zh: '因此', ar: 'لذلك', ja: 'したがって', ru: 'следовательно / поэтому', ex: 'The server is down; therefore, transactions cannot be processed.', exHi: 'सर्वर बंद है; इसलिए, लेन-देन संसाधित नहीं किए जा सकते।', exEs: 'El servidor está caído; por lo tanto, no se pueden procesar las transacciones.', ic: '➡️' },
    { w: 'temporary', p: '/ˈtemprəri/', m: 'lasting for only a limited period of time; not permanent', hi: 'अस्थायी', es: 'temporal / provisional', fr: 'temporaire', de: 'vorübergehend', pt: 'temporário', zh: '暂时的', ar: 'مؤقت', ja: '一時的な', ru: 'временный', ex: 'This is a temporary workaround until the patch is released.', exHi: 'पैच जारी होने तक यह एक अस्थायी समाधान है।', exEs: 'Esta es una solución temporal hasta que se lance el parche.', ic: '⏳' },
    { w: 'investigate', p: '/ɪnˈvestɪɡeɪt/', m: 'carry out a systematic inquiry to discover facts or cause', hi: 'जांच पड़ताल करना', es: 'investigar', fr: 'enquêter', de: 'untersuchen', pt: 'investigar', zh: '调查', ar: 'يحقق في', ja: '調査する', ru: 'расследовать / исследовать', ex: 'Security engineers are investigating the data breach.', exHi: 'सुरक्षा इंजीनियर डेटा उल्लंघन की जांच कर रहे हैं।', exEs: 'Los ingenieros de seguridad están investigando la filtración de datos.', ic: '🕵️' },
    { w: 'damaged', p: '/ˈdæmɪdʒd/', m: 'inflicted with physical harm or impairment', hi: 'क्षतिग्रस्त / खराब हुआ', es: 'dañado / averiado', fr: 'endommagé', de: 'beschädigt', pt: 'danificado', zh: '受损的', ar: 'تالف', ja: '損傷した', ru: 'поврежденный', ex: 'The shipment arrived with three damaged monitors.', exHi: 'शिपमेंट तीन क्षतिग्रस्त मॉनिटर के साथ पहुंचा।', exEs: 'El envío llegó con tres monitores dañados.', ic: '📦' },
    { w: 'reboot', p: '/ˌriːˈbuːt/', m: 'restart a computer system or device', hi: 'पुनः चालू करना / रिबूट करना', es: 'reiniciar', fr: 'redémarrer', de: 'neu starten', pt: 'reiniciar', zh: '重启', ar: 'إعادة التشغيل', ja: '再起動する', ru: 'перезагружать', ex: 'Have you tried rebooting your laptop?', exHi: 'क्या आपने अपने लैपटॉप को रिबूट करने की कोशिश की है?', exEs: '¿Has intentado reiniciar tu computadora portátil?', ic: '🔄' },
    { w: 'workaround', p: '/ˈwɜːkəraʊnd/', m: 'a method for overcoming a problem or limitation temporarily', hi: 'वैकल्पिक समाधान / जुगाड़', es: 'solución alternativa / parche', fr: 'solution de contournement', de: 'Umgehungslösung', pt: 'solução alternativa / contorno', zh: '变通方法', ar: 'حل بديل مؤقت', ja: '回避策', ru: 'обходной путь', ex: 'We found a quick workaround to export the sales report.', exHi: 'हमें बिक्री रिपोर्ट निर्यात करने के लिए एक त्वरित वैकल्पिक समाधान मिला।', exEs: 'Encontramos una solución alternativa rápida para exportar el informe de ventas.', ic: '💡' },
    { w: 'frozen', p: '/ˈfrəʊzn/', m: 'unable to move or operate due to a software lockup', hi: 'अटका हुआ / हैंग हुआ', es: 'congelado / colgado', fr: 'bloqué / figé', de: 'eingefroren', pt: 'travado / congelado', zh: '卡死的 / 冻结的', ar: 'متجمد', ja: 'フリーズした', ru: 'зависший', ex: 'My screen is completely frozen on the login page.', exHi: 'मेरी स्क्रीन लॉगिन पेज पर पूरी तरह से हैंग हो गई है।', exEs: 'Mi pantalla está completamente congelada en la página de inicio de sesión.', ic: '🧊' },
    { w: 'backup', p: '/ˈbækʌp/', m: 'a copy of data made in case the original is lost or damaged', hi: 'सुरक्षित प्रतिलिपि / बैकअप', es: 'copia de seguridad / respaldo', fr: 'sauvegarde', de: 'Sicherungskopie / Backup', pt: 'cópia de segurança / backup', zh: '备份', ar: 'نسخة احتياطية', ja: 'バックアップ', ru: 'резервная копия', ex: 'Fortunately, we had an automated cloud backup from yesterday.', exHi: 'सौभाग्य से, हमारे पास कल का एक स्वचालित क्लाउड बैकअप था।', exEs: 'Afortunadamente, teníamos una copia de seguridad automática en la nube de ayer.', ic: '💾' }
  ],
  chunks: [
    { phrase: 'as a result', meaning: 'because of something that happened earlier', hi: 'के परिणामस्वरूप / नतीजतन', es: 'como resultado / por consiguiente', fr: 'en conséquence', de: 'infolgedessen', pt: 'como resultado', zh: '结果', ar: 'نتيجة لذلك', ja: 'その結果', ru: 'в результате', note: 'Connector of result: "The server crashed. As a result, orders stopped."', ic: '➡️' },
    { phrase: 'due to the fact that', meaning: 'because of the circumstance that', hi: 'इस तथ्य के कारण कि / क्योंकि', es: 'debido a que / dado que', fr: 'en raison du fait que', de: 'aufgrund der Tatsache, dass', pt: 'devido ao fato de que', zh: '由于...的事实', ar: 'نظراً لأن', ja: '〜という事実のために', ru: 'в связи с тем, что', note: 'Formal causal phrase: "We delayed the demo due to the fact that testing failed."', ic: '📄' },
    { phrase: 'get disconnected', meaning: 'lose communication or connection unexpectedly', hi: 'अचानक संपर्क टूट जाना', es: 'desconectarse involuntariamente', fr: 'être coupé / se déconnecter', de: 'die Verbindung verlieren', pt: 'cair a conexão', zh: '掉线 / 断开连接', ar: 'انقطاع الاتصال', ja: '接続が切れる', ru: 'отключиться / связь оборвалась', note: 'Passive state idiom: "I keep getting disconnected from the VPN."', ic: '🔌' },
    { phrase: 'freeze up', meaning: 'stop responding to user commands or input', hi: 'सिस्टम का अचानक रुक जाना या हैंग होना', es: 'congelarse / bloquearse', fr: 'se figer / bloquer', de: 'einfrieren / abstürzen', pt: 'travar completamente', zh: '卡住 / 假死', ar: 'تجميد النظام', ja: 'フリーズする', ru: 'зависнуть наглухо', note: 'Phrasal verb: "The application freezes up whenever I click save."', ic: '🧊' },
    { phrase: 'look into it', meaning: 'investigate or check a reported problem', hi: 'मामले की जांच करना', es: 'revisar el asunto / investigar', fr: 'examiner la question', de: 'sich darum kümmern / nachsehen', pt: 'dar uma olhada nisso / investigar', zh: '调查处理 / 查看', ar: 'النظر في الأمر', ja: '調査する / 確認する', ru: 'разобраться с этим', note: 'Common response to issues: "Thank you for reporting this; I will look into it immediately."', ic: '🔍' },
    { phrase: 'out of order', meaning: 'not functioning or in working condition', hi: 'खराब / काम न करने की स्थिति में', es: 'fuera de servicio / estropeado', fr: 'hors service', de: 'außer Betrieb', pt: 'fora de serviço / quebrado', zh: '故障中 / 暂停服务', ar: 'معطل عن العمل', ja: '故障中 / 使用不可', ru: 'не работает / неисправен', note: 'Physical signage idiom: "The office coffee machine is out of order."', ic: '🚫' },
    { phrase: 'come up with a fix', meaning: 'create or find a solution to a problem', hi: 'समस्या का समाधान निकालना', es: 'encontrar una solución', fr: 'trouver une solution', de: 'eine Lösung finden', pt: 'encontrar uma solução', zh: '想出解决办法', ar: 'التوصل إلى حل', ja: '解決策を考え出す', ru: 'придумать решение', note: 'Collocation: "The tech team came up with a permanent fix."', ic: '💡' },
    { phrase: 'shut down unexpectedly', meaning: 'turn off without warning or standard procedure', hi: 'अचानक बिना चेतावनी बंद हो जाना', es: 'apagarse inesperadamente', fr: 's\'éteindre à l\'improviste', de: 'unerwartet herunterfahren', pt: 'desligar inesperadamente', zh: '意外关机', ar: 'توقف مفاجئ', ja: '突然シャットダウンする', ru: 'неожиданно выключиться', note: 'Descriptive chunk: "My workstation shut down unexpectedly."', ic: '💻' }
  ],
  grammar: {
    title: 'Cause-and-Result Connectors & State Passives',
    concept: 'Explaining root causes and resulting effects, and describing broken/malfunctioning objects with passive participles.',
    patterns: [
      {
        title: 'Cause and Result Connectors (because of, due to, therefore, as a result)',
        structure: 'Cause: due to / because of + Noun phrase | Result: Sentence. Therefore / As a result, Sentence.',
        rule: '"Because of" and "due to" are followed by noun phrases. "Therefore" and "as a result" start a new clause indicating consequence.',
        examples: [
          { en: 'The call was canceled due to a power outage.', hi: 'बिजली गुल होने के कारण कॉल रद्द कर दी गई थी।', es: 'La llamada se canceló debido a un corte de energía.' },
          { en: 'The database server crashed. As a result, website orders stopped.', hi: 'डेटाबेस सर्वर क्रैश हो गया। नतीजतन, वेबसाइट के ऑर्डर रुक गए।', es: 'El servidor de la base de datos falló. Como resultado, los pedidos se detuvieron.' }
        ]
      },
      {
        title: 'State Passives for Problem Descriptions (be / get + past participle)',
        structure: 'Subject + is/are/was/were + damaged / corrupted / locked | Subject + got + disconnected / stuck',
        rule: 'Use state passive constructions to describe the current broken or unusable condition of an item rather than who caused it.',
        examples: [
          { en: 'The document is corrupted and cannot be opened.', hi: 'दस्तावेज़ दूषित है और खोला नहीं जा सकता।', es: 'El documento está dañado y no se puede abrir.' },
          { en: 'My account got locked after three failed password attempts.', hi: 'तीन बार गलत पासवर्ड डालने के बाद मेरा खाता लॉक हो गया।', es: 'Mi cuenta se bloqueó después de tres intentos fallidos de contraseña.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'The meeting was canceled because a power outage.', cor: 'The meeting was canceled because of a power outage.', exp: 'Use "because of" before a noun phrase ("a power outage"). Use "because" only before a full subject + verb clause.', hi: 'संज्ञा वाक्यांश से पहले "because of" का प्रयोग करें, केवल "because" नहीं।', es: 'Usa "because of" antes de una frase sustantiva, no "because" solo.' },
    { inc: 'The server crashed, as a result we lost data.', cor: 'The server crashed. As a result, we lost data.', exp: '"As a result" is a transitional sentence adverb, typically punctuated with a period or semicolon before it and a comma after.', hi: '"As a result" एक नया वाक्य या क्लॉज शुरू करता है और इसके बाद कॉमा आता है।', es: '"As a result" suele ir al inicio de una nueva oración seguido de una coma.' },
    { inc: 'The file got damage when the app crashed.', cor: 'The file got damaged when the app crashed.', exp: 'Use the past participle form ("damaged") after "get" in passive descriptions.', hi: '"got" के बाद पास्ट पार्टिसिपल ("damaged") का प्रयोग करें।', es: 'Usa el participio pasado ("damaged") después de "get".' },
    { inc: 'I am looking it into.', cor: 'I am looking into it.', exp: 'In the phrasal verb "look into", the preposition "into" is inseparable and the object comes after.', hi: '"look into" एक इनसेपरेबल फ्रेजल वर्ब है, इसलिए ऑब्जेक्ट बाद में आता है: "look into it"।', es: '"look into" es un verbo inseparable; el pronombre va después.' },
    { inc: 'The printer is out from order.', cor: 'The printer is out of order.', exp: 'The fixed English idiom for malfunctioning equipment is "out of order", not "out from order".', hi: 'सही मुहावरा "out of order" है।', es: 'El modismo correcto es "out of order".' }
  ],
  dialogues: [
    {
      title: 'Reporting a Critical Software Glitch',
      context: 'Dev (Quality Analyst) alerts Sarah (Lead Systems Architect) about an urgent production error.',
      charA: { name: 'Dev', av: '👨‍💼', role: 'Quality Analyst' },
      charB: { name: 'Sarah', av: '👩‍💻', role: 'Systems Architect' },
      turns: [
        { spk: 'Dev', text: 'Hi Sarah, do you have a quick moment? We ran into a severe glitch on the checkout page.', hi: 'नमस्ते सारा, क्या आपके पास एक पल का समय है? हमें चेकआउट पेज पर एक गंभीर गड़बड़ी का सामना करना पड़ा।', es: 'Hola Sarah, ¿tienes un momento? Tuvimos un fallo grave en la página de pago.' },
        { spk: 'Sarah', text: 'What seems to be the main symptom, Dev?', hi: 'मुख्य लक्षण क्या प्रतीत होता है, देव?', es: '¿Cuál parece ser el síntoma principal, Dev?' },
        { spk: 'Dev', text: 'Whenever a customer enters a coupon code, the screen freezes up. As a result, the payment button becomes completely unresponsive.', hi: 'जब भी कोई ग्राहक कूपन कोड दर्ज करता है, स्क्रीन हैंग हो जाती है। नतीजतन, भुगतान बटन पूरी तरह से काम करना बंद कर देता है।', es: 'Cada vez que un cliente ingresa un cupón, la pantalla se congela. Como resultado, el botón de pago deja de responder.' },
        { spk: 'Sarah', text: 'That sounds like an API timeout. Let me look into the server logs immediately.', hi: 'यह एक एपीआई टाइमआउट जैसा लगता है। मुझे तुरंत सर्वर लॉग देखने दें।', es: 'Eso parece un tiempo de espera de la API. Déjame revisar los registros del servidor de inmediato.' },
        { spk: 'Dev', text: 'Thanks Sarah. Please let me know if we need a temporary workaround while you investigate.', hi: 'धन्यवाद सारा। यदि जांच के दौरान हमें किसी अस्थायी समाधान की आवश्यकता हो तो कृपया मुझे बताएं।', es: 'Gracias Sarah. Avísame si necesitamos una solución temporal mientras investigas.' }
      ]
    },
    {
      title: 'Troubleshooting Internet & Hardware Failure',
      context: 'Elena calls the IT helpdesk after her workstation loses network access during a client presentation.',
      charA: { name: 'Elena', av: '👩‍💼', role: 'Account Executive' },
      charB: { name: 'Kenji', av: '👨‍🔧', role: 'IT Support Specialist' },
      turns: [
        { spk: 'Elena', text: 'Helpdesk, this is Elena from Sales. My computer got disconnected from the network right in the middle of a client demo.', hi: 'हेल्पडेस्क, मैं सेल्स से ऐलेना हूँ। क्लाइंट डेमो के बीच में ही मेरा कंप्यूटर नेटवर्क से डिस्कनेक्ट हो गया।', es: 'Soporte técnico, habla Elena de Ventas. Mi computadora se desconectó de la red en medio de una demostración.' },
        { spk: 'Kenji', text: 'I understand Elena. Is your ethernet cable plugged in, or are you on the office Wi-Fi?', hi: 'मैं समझता हूँ ऐलेना। क्या आपका ईथरनेट केबल लगा हुआ है, या आप ऑफिस वाई-फाई पर हैं?', es: 'Entiendo Elena. ¿Está enchufado el cable ethernet o estás en la red Wi-Fi de la oficina?' },
        { spk: 'Elena', text: 'I was on Wi-Fi. The router in meeting room B is overheating and showing a red warning light.', hi: 'मैं वाई-फाई पर थी। मीटिंग रूम बी का राउटर अत्यधिक गर्म हो रहा है और लाल चेतावनी बत्ती दिखा रहा है।', es: 'Estaba en Wi-Fi. El enrutador de la sala de reuniones B se está sobrecalentando y muestra una luz roja.' },
        { spk: 'Kenji', text: 'The router is malfunctioning; therefore, please switch to the backup network "Office-Guest" while I replace the hardware.', hi: 'राउटर खराब हो गया है; इसलिए, कृपया बैकअप नेटवर्क "Office-Guest" पर स्विच करें, जबकि मैं हार्डवेयर बदलता हूँ।', es: 'El enrutador está fallando; por lo tanto, cambia a la red de respaldo "Office-Guest" mientras reemplazo el hardware.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_167_p1',
      type: 'fill_blank',
      prompt: 'Select the correct cause connector to complete the sentence:',
      text: 'The meeting was postponed [blank] the severe network outage.',
      options: [
        { id: '1', text: 'due to', isCorrect: true },
        { id: '2', text: 'because', isCorrect: false },
        { id: '3', text: 'as a result', isCorrect: false },
        { id: '4', text: 'therefore', isCorrect: false }
      ],
      correctAnswer: 'due to',
      explanation: '"Due to" is followed by a noun phrase ("the severe network outage").'
    },
    {
      id: 'ex_167_p2',
      type: 'multiple_choice',
      prompt: 'Choose the sentence that correctly explains a result:',
      options: [
        { id: '1', text: 'The hard drive failed. Therefore, we restored files from the backup.', isCorrect: true },
        { id: '2', text: 'The hard drive failed because of we restored files from the backup.', isCorrect: false },
        { id: '3', text: 'The hard drive failed due to we restored files from the backup.', isCorrect: false },
        { id: '4', text: 'The hard drive failed as a result we restored files.', isCorrect: false }
      ],
      correctAnswer: 'The hard drive failed. Therefore, we restored files from the backup.',
      explanation: '"Therefore" introduces the logical consequence of the previous sentence.'
    },
    {
      id: 'ex_167_p3',
      type: 'error_correction',
      prompt: 'Fix the error in this technical report:',
      errorSentence: 'My work laptop got damage during the flight.',
      correctSentence: 'My work laptop got damaged during the flight.',
      explanation: 'Use the passive participle "damaged" after "got".'
    },
    {
      id: 'ex_167_p4',
      type: 'word_ordering',
      prompt: 'Arrange the words into a clear explanation of a technical problem:',
      tokens: ['The', 'screen', 'froze', 'up', 'because', 'the', 'processor', 'overheated', '.'],
      correctOrder: ['The', 'screen', 'froze', 'up', 'because', 'the', 'processor', 'overheated', '.'],
      explanation: 'Use "because" followed by a full subject-verb clause.'
    },
    {
      id: 'ex_167_p5',
      type: 'translation',
      prompt: 'Translate to English: "सर्वर डाउन है; इसलिए हम आपका अनुरोध संसाधित नहीं कर सकते।"',
      targetSentence: 'The server is down; therefore, we cannot process your request.',
      explanation: 'Use "therefore" with appropriate punctuation to express consequence.'
    },
    {
      id: 'ex_167_p6',
      type: 'multiple_choice',
      prompt: 'What does it mean if a machine is "out of order"?',
      options: [
        { id: '1', text: 'It is broken and not working', isCorrect: true },
        { id: '2', text: 'It is newly purchased and ready to use', isCorrect: false },
        { id: '3', text: 'It is organized by alphabetical order', isCorrect: false },
        { id: '4', text: 'It is reserved exclusively for managers', isCorrect: false }
      ],
      correctAnswer: 'It is broken and not working',
      explanation: '"Out of order" means not working or defective.'
    },
    {
      id: 'ex_167_p7',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the appropriate phrasal verb:',
      text: 'Thank you for reporting the glitch. Our IT team will [blank] it immediately.',
      options: [
        { id: '1', text: 'look into', isCorrect: true },
        { id: '2', text: 'look after', isCorrect: false },
        { id: '3', text: 'look out', isCorrect: false },
        { id: '4', text: 'look up to', isCorrect: false }
      ],
      correctAnswer: 'look into',
      explanation: '"Look into" means to investigate a problem.'
    },
    {
      id: 'ex_167_p8',
      type: 'speaking',
      prompt: 'Read this explanation of a technical problem aloud:',
      targetSentence: 'The database became unresponsive due to an unexpected surge in user traffic.',
      audioText: 'The database became unresponsive due to an unexpected surge in user traffic.',
      explanation: 'Pronounce "unresponsive" and "unexpected surge" clearly.'
    },
    {
      id: 'ex_167_p9',
      type: 'listening',
      prompt: 'Listen to the audio and select the cause of the problem:',
      audioText: 'We could not finish the presentation because the projector overheated and shut down.',
      options: [
        { id: '1', text: 'The projector overheated and shut down.', isCorrect: true },
        { id: '2', text: 'The presentation file was deleted by accident.', isCorrect: false },
        { id: '3', text: 'The client failed to attend the meeting.', isCorrect: false },
        { id: '4', text: 'The internet in room B was disconnected.', isCorrect: false }
      ],
      correctAnswer: 'The projector overheated and shut down.',
      explanation: 'The speaker clearly states the projector overheated and shut down.'
    },
    {
      id: 'ex_167_p10',
      type: 'match_pairs',
      prompt: 'Match the technical problem terms with their definitions:',
      pairs: [
        { left: 'Glitch', right: 'Minor temporary software fault' },
        { left: 'Outage', right: 'Total loss of power or network' },
        { left: 'Workaround', right: 'Temporary solution to bypass an issue' },
        { left: 'Corrupted', right: 'Damaged and unreadable data file' }
      ]
    }
  ],
  review: [
    {
      id: 'ex_167_r1',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "as a result"?',
      options: [
        { id: '1', text: 'The Wi-Fi was disconnected. As a result, the video call dropped.', isCorrect: true },
        { id: '2', text: 'The Wi-Fi was disconnected as a result the video call dropped.', isCorrect: false },
        { id: '3', text: 'Because of as a result the video call dropped.', isCorrect: false },
        { id: '4', text: 'The video call dropped as a result because Wi-Fi disconnected.', isCorrect: false }
      ],
      correctAnswer: 'The Wi-Fi was disconnected. As a result, the video call dropped.',
      explanation: '"As a result" connects two clauses showing cause and outcome.'
    },
    {
      id: 'ex_167_r2',
      type: 'word_ordering',
      prompt: 'Arrange the tokens to form a sentence:',
      tokens: ['Our', 'backup', 'files', 'were', 'corrupted', 'during', 'the', 'power', 'cut', '.'],
      correctOrder: ['Our', 'backup', 'files', 'were', 'corrupted', 'during', 'the', 'power', 'cut', '.'],
      explanation: 'State passive structure: "were corrupted during the power cut".'
    },
    {
      id: 'ex_167_r3',
      type: 'fill_blank',
      prompt: 'Fill in the blank:',
      text: 'The application freezes [blank] whenever I try to export large PDF files.',
      options: [
        { id: '1', text: 'up', isCorrect: true },
        { id: '2', text: 'in', isCorrect: false },
        { id: '3', text: 'down', isCorrect: false },
        { id: '4', text: 'off', isCorrect: false }
      ],
      correctAnswer: 'up',
      explanation: '"Freeze up" is the standard phrasal verb for software locking up.'
    },
    {
      id: 'ex_167_r4',
      type: 'translation',
      prompt: 'Translate: "खराब वाई-फाई सिग्नल के कारण मेरा वीडियो कॉल कट गया।"',
      targetSentence: 'My video call got disconnected due to the weak Wi-Fi signal.',
      explanation: '"got disconnected due to" accurately conveys this sentence.'
    },
    {
      id: 'ex_167_r5',
      type: 'speaking',
      prompt: 'Speak this troubleshooting update:',
      targetSentence: 'Our IT specialist is troubleshooting the network router right now.',
      audioText: 'Our IT specialist is troubleshooting the network router right now.',
      explanation: 'Maintain clear pronunciation on "troubleshooting" and "network router".'
    },
    {
      id: 'ex_167_r6',
      type: 'error_correction',
      prompt: 'Correct the error:',
      errorSentence: 'The meeting stopped because the network outage.',
      correctSentence: 'The meeting stopped because of the network outage.',
      explanation: 'Add "of" before the noun phrase "the network outage".'
    }
  ],
  assessment: [
    {
      id: 'ex_167_a1',
      type: 'multiple_choice',
      prompt: 'Select the sentence with accurate cause and effect structure:',
      options: [
        { id: '1', text: 'The battery was overheating; therefore, the phone shut down automatically.', isCorrect: true },
        { id: '2', text: 'The battery was overheating due to the phone shut down automatically.', isCorrect: false },
        { id: '3', text: 'The battery was overheating because of the phone shut down automatically.', isCorrect: false },
        { id: '4', text: 'The battery was overheating, as a result phone shut down.', isCorrect: false }
      ],
      correctAnswer: 'The battery was overheating; therefore, the phone shut down automatically.',
      explanation: '"Therefore" properly connects the cause to the resulting action.'
    },
    {
      id: 'ex_167_a2',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the correct passive participle:',
      text: 'My user account got [blank] after I entered the wrong password three times.',
      options: [
        { id: '1', text: 'locked', isCorrect: true },
        { id: '2', text: 'locking', isCorrect: false },
        { id: '3', text: 'lock', isCorrect: false },
        { id: '4', text: 'locks', isCorrect: false }
      ],
      correctAnswer: 'locked',
      explanation: '"Got locked" expresses the resulting passive state.'
    },
    {
      id: 'ex_167_a3',
      type: 'word_ordering',
      prompt: 'Arrange into a polite workplace issue report:',
      tokens: ['Could', 'you', 'please', 'look', 'into', 'this', 'billing', 'glitch', '?'],
      correctOrder: ['Could', 'you', 'please', 'look', 'into', 'this', 'billing', 'glitch', '?'],
      explanation: 'Polite inquiry structure with "Could you please look into...".'
    },
    {
      id: 'ex_167_a4',
      type: 'translation',
      prompt: 'Translate: "तकनीकी समस्या के समाधान के रूप में हमने एक अस्थायी समाधान निकाला।"',
      targetSentence: 'We came up with a temporary workaround for the technical problem.',
      explanation: '"came up with a temporary workaround" is natural and precise.'
    },
    {
      id: 'ex_167_a5',
      type: 'speaking',
      prompt: 'Read this report aloud:',
      targetSentence: 'The scanner is currently out of order, but a technician will arrive shortly.',
      audioText: 'The scanner is currently out of order, but a technician will arrive shortly.',
      explanation: 'Stress "out of order" and "arrive shortly".'
    },
    {
      id: 'ex_167_a6',
      type: 'personal_production',
      prompt: 'Write two sentences describing a computer or phone problem you experienced and what happened as a result.',
      explanation: 'Example: "My phone battery was overheating yesterday. As a result, the device shut down unexpectedly during my call."'
    }
  ]
};

// =========================================================================
// LESSON 168: Proposing Creative Solutions & Brainstorming Alternatives
// =========================================================================
export const LESSON_168_CONFIG: LessonConfigA2 = {
  num: 168,
  title: 'Proposing Creative Solutions & Brainstorming Alternatives',
  icon: '💡',
  estMin: 25,
  objTitle: 'Modals of Suggestion & Hypothetical Problem Solving',
  objDesc: 'Learn to propose collaborative solutions, brainstorm alternatives in team discussions, weigh feasibility with modal verbs ("could", "might want to"), and introduce creative ideas with "What if we..." and "How about...".',
  objHi: 'टीम चर्चाओं में रचनात्मक समाधान और विकल्प प्रस्तावित करना, मोडल क्रियाओं ("could", "might want to") के साथ व्यवहार्यता का मूल्यांकन करना, और "What if we..." तथा "How about..." से नए विचार प्रस्तुत करना सीखें।',
  objEs: 'Proponer soluciones colaborativas, plantear alternativas en equipo usando verbos modales ("could", "might want to") e introducir ideas con "What if we..." y "How about...".',
  canDo: [
    'I can propose constructive ideas and solutions in a team brainstorming session.',
    'I can soften suggestions using "could" and "might want to".',
    'I can introduce innovative options using "What if we..." and "How about + -ing".',
    'I can evaluate the pros and cons of proposed alternatives.'
  ],
  canDoHi: [
    'मैं टीम विचार-विमर्श सत्र में रचनात्मक विचार और समाधान प्रस्तावित कर सकता हूँ।',
    '"could" और "might want to" का उपयोग करके सुझावों को विनम्र बना सकता हूँ।',
    '"What if we..." और "How about + -ing" का उपयोग करके नए विकल्प प्रस्तुत कर सकता हूँ।',
    'मैं प्रस्तावित विकल्पों के फायदे और नुकसान का मूल्यांकन कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo proponer ideas y soluciones constructivas en una sesión de lluvia de ideas.',
    'Puedo suavizar sugerencias usando "could" y "might want to".',
    'Puedo introducir opciones innovadoras usando "What if we..." y "How about + -ing".',
    'Puedo evaluar los pros y los contras de las alternativas propuestas.'
  ],
  vocab: [
    { w: 'brainstorm', p: '/ˈbreɪnstɔːm/', m: 'hold a group discussion to produce ideas or solve problems', hi: 'विचार-विमर्श करना / नए विचार सोचना', es: 'hacer una lluvia de ideas', fr: 'faire un remue-méninges', de: 'Ideen sammeln / brainstormen', pt: 'fazer tempestade de ideias', zh: '头脑风暴', ar: 'عصف ذهني', ja: 'ブレインストーミングする', ru: 'проводить мозговой штурм', ex: 'Let\'s brainstorm three different approaches to marketing this product.', exHi: 'आइए इस उत्पाद के विपणन के लिए तीन अलग-अलग तरीकों पर विचार-मंथन करें।', exEs: 'Hagamos una lluvia de ideas sobre tres enfoques diferentes para comercializar este producto.', ic: '🧠' },
    { w: 'alternative', p: '/ɔːlˈtɜːnətɪv/', m: 'one of two or more available possibilities or choices', hi: 'विकल्प', es: 'alternativa / opción', fr: 'alternative', de: 'Alternative', pt: 'alternativa', zh: '备选方案 / 替代选择', ar: 'بديل', ja: '代替案 / 選択肢', ru: 'альтернатива', ex: 'If the primary venue is booked, we have a suitable alternative.', exHi: 'यदि मुख्य स्थल बुक है, तो हमारे पास एक उपयुक्त विकल्प है।', exEs: 'Si el lugar principal está reservado, tenemos una alternativa adecuada.', ic: '🔀' },
    { w: 'feasible', p: '/ˈfiːzəbl/', m: 'possible to do easily or conveniently; practicable', hi: 'संभव / व्यावहारिक', es: 'viable / factible', fr: 'faisable / réalisable', de: 'machbar / umsetzbar', pt: 'viável / factível', zh: '可行的', ar: 'قابل للتطبيق', ja: '実行可能な', ru: 'осуществимый / выполнимый', ex: 'Is it feasible to launch the website before the holiday rush?', exHi: 'क्या छुट्टियों की भीड़ से पहले वेबसाइट लॉन्च करना संभव है?', exEs: '¿Es viable lanzar el sitio web antes de las fiestas?' , ic: '✔️' },
    { w: 'proposal', p: '/prəˈpəʊzl/', m: 'a plan or suggestion, especially a formal or written one', hi: 'प्रस्ताव', es: 'propuesta', fr: 'proposition', de: 'Vorschlag / Antrag', pt: 'proposta', zh: '提案 / 建议', ar: 'اقتراح / مقترح', ja: '提案 / 企画案', ru: 'предложение', ex: 'Rohan submitted a detailed proposal for optimizing delivery routes.', exHi: 'रोहन ने डिलीवरी मार्गों को अनुकूलित करने के लिए एक विस्तृत प्रस्ताव प्रस्तुत किया।', exEs: 'Rohan presentó una propuesta detallada para optimizar las rutas de entrega.', ic: '📝' },
    { w: 'innovative', p: '/ˈɪnəvətɪv/', m: 'featuring new methods; advanced and original', hi: 'नवीन / अभिनव', es: 'innovador', fr: 'innovant', de: 'innovativ', pt: 'inovador', zh: '创新的', ar: 'مبتكر', ja: '革新的な', ru: 'инновационный', ex: 'Her innovative solution cut our server costs by 40%.', exHi: 'उसके अभिनव समाधान ने हमारे सर्वर की लागत को 40% तक कम कर दिया।', exEs: 'Su solución innovadora redujo los costos de nuestro servidor en un 40%.', ic: '💡' },
    { w: 'implement', p: '/ˈɪmplɪment/', m: 'put a decision, plan, or agreement into effect', hi: 'लागू करना / कार्यान्वित करना', es: 'implementar / poner en práctica', fr: 'mettre en œuvre', de: 'umsetzen / implementieren', pt: 'implementar', zh: '实施 / 执行', ar: 'ينفذ / يطبق', ja: '導入する / 実行する', ru: 'внедрять / реализовывать', ex: 'We plan to implement the automated feedback system next month.', exHi: 'हम अगले महीने स्वचालित फीडबैक प्रणाली को लागू करने की योजना बना रहे हैं।', exEs: 'Planeamos implementar el sistema de retroalimentación automática el próximo mes.', ic: '⚙️' },
    { w: 'potential', p: '/pəˈtenʃl/', m: 'having or showing the capacity to develop into something in the future', hi: 'संभावित / क्षमता', es: 'potencial', fr: 'potentiel', de: 'potenziell / Potenzial', pt: 'potencial', zh: '潜在的 / 潜力', ar: 'محتمل / إمكانية', ja: '潜在的な / 可能性', ru: 'потенциальный', ex: 'This marketing strategy has great potential for international growth.', exHi: 'इस विपणन रणनीति में अंतर्राष्ट्रीय विकास की अपार संभावनाएं हैं।', exEs: 'Esta estrategia de marketing tiene un gran potencial de crecimiento internacional.', ic: '🌱' },
    { w: 'drawback', p: '/ˈdrɔːbæk/', m: 'a feature that renders something less acceptable; a disadvantage', hi: 'कमी / नुकसान', es: 'desventaja / inconveniente', fr: 'inconvénient', de: 'Nachteil', pt: 'desvantagem / ponto negativo', zh: '缺点 / 劣势', ar: 'عيب / سلبية', ja: '欠点 / デメリット', ru: 'недостаток', ex: 'The only drawback of the new office is the lack of parking spaces.', exHi: 'नए कार्यालय की एकमात्र कमी पार्किंग स्थानों की कमी है।', exEs: 'El único inconveniente de la nueva oficina es la falta de plazas de aparcamiento.', ic: '📉' },
    { w: 'advantage', p: '/ədˈvɑːntɪdʒ/', m: 'a condition or circumstance that puts one in a favorable position', hi: 'लाभ / फायदा', es: 'ventaja', fr: 'avantage', de: 'Vorteil', pt: 'vantagem', zh: '优势 / 好处', ar: 'ميزة', ja: '利点 / メリット', ru: 'преимущество', ex: 'Speed and simplicity are the chief advantages of cloud storage.', exHi: 'गति और सरलता क्लाउड स्टोरेज के मुख्य लाभ हैं।', exEs: 'La velocidad y la simplicidad son las principales ventajas del almacenamiento en la nube.', ic: '📈' },
    { w: 'compromise', p: '/ˈkɒmprəmaɪz/', m: 'an agreement reached by each side making concessions', hi: 'समझौता', es: 'acuerdo mutuo / compromiso', fr: 'compromis', de: 'Kompromiss', pt: 'acordo / concessão', zh: '妥协 / 折中', ar: 'حل وسط', ja: '妥協 / 歩み寄り', ru: 'компромисс', ex: 'Both teams agreed to a sensible compromise on the project budget.', exHi: 'दोनों टीमें प्रोजेक्ट बजट पर एक समझदारी भरे समझौते पर सहमत हुईं।', exEs: 'Ambos equipos acordaron un compromiso sensato sobre el presupuesto del proyecto.', ic: '🤝' },
    { w: 'recommend', p: '/ˌrekəˈmend/', m: 'put forward with approval as being suitable for a purpose', hi: 'सिफारिश करना / सुझाव देना', es: 'recomendar', fr: 'recommander', de: 'empfehlen', pt: 'recomendar', zh: '推荐', ar: 'يوصي بـ', ja: '推薦する / 勧める', ru: 'рекомендовать', ex: 'I strongly recommend testing the feature with beta users first.', exHi: 'मैं दृढ़ता से अनुशंसा करता हूँ कि पहले बीटा उपयोगकर्ताओं के साथ इस सुविधा का परीक्षण करें।', exEs: 'Recomiendo encarecidamente probar la función primero con usuarios beta.', ic: '👍' },
    { w: 'strategy', p: '/ˈstrætədʒi/', m: 'a plan of action designed to achieve a major or overall aim', hi: 'रणनीति', es: 'estrategia', fr: 'stratégie', de: 'Strategie', pt: 'estratégia', zh: '策略 / 战略', ar: 'استراتيجية', ja: '戦略', ru: 'стратегия', ex: 'Our retention strategy focuses on personalized customer support.', exHi: 'हमारी ग्राहक प्रतिधारण रणनीति व्यक्तिगत ग्राहक सहायता पर केंद्रित है।', exEs: 'Nuestra estrategia de retención se centra en el soporte personalizado al cliente.', ic: '♟️' },
    { w: 'tackle', p: '/ˈtækl/', m: 'make determined efforts to deal with a problem or difficult task', hi: 'निपटना / समाधान का प्रयास करना', es: 'abordar / encarar', fr: 's\'attaquer à / aborder', de: 'angehen / anpacken', pt: 'enfrentar / abordar', zh: '解决 / 应对', ar: 'يتصدى لـ', ja: '取り組む', ru: 'решать / браться за', ex: 'Let\'s tackle the high shipping costs before launching in new regions.', exHi: 'आइए नए क्षेत्रों में लॉन्च करने से पहले उच्च शिपिंग लागतों से निपटें।', exEs: 'Abordemos los altos costos de envío antes de lanzar en nuevas regiones.', ic: '🥊' },
    { w: 'perspective', p: '/pəˈspektɪv/', m: 'a particular attitude toward or way of regarding something', hi: 'दृष्टिकोण / नजरिया', es: 'perspectiva / punto de vista', fr: 'perspective / point de vue', de: 'Blickwinkel / Perspektive', pt: 'perspectiva', zh: '视角 / 观点', ar: 'منظور / وجهة نظر', ja: '視点 / 観点', ru: 'взгляд / точка зрения', ex: 'Getting the customer\'s perspective helped us improve the checkout flow.', exHi: 'ग्राहक का दृष्टिकोण प्राप्त करने से हमें चेकआउट प्रवाह को बेहतर बनाने में मदद मिली।', exEs: 'Obtener la perspectiva del cliente nos ayudó a mejorar el flujo de pago.', ic: '👁️' },
    { w: 'opt for', p: '/ɒpt fɔːr/', m: 'make a choice from a range of possibilities', hi: 'चुनना / पसंद करना', es: 'optar por / elegir', fr: 'opter pour', de: 'sich entscheiden für', pt: 'optar por', zh: '选择', ar: 'يختار', ja: '〜を選択する', ru: 'делать выбор в пользу', ex: 'We decided to opt for the cloud-hosted database instead of local servers.', exHi: 'हमने स्थानीय सर्वर के बजाय क्लाउड-होस्टेड डेटाबेस चुनने का फैसला किया।', exEs: 'Decidimos optar por la base de datos alojada en la nube en lugar de los servidores locales.', ic: '🔘' },
    { w: 'streamline', p: '/ˈstriːmlaɪn/', m: 'make an organization or system more efficient by employing faster methods', hi: 'सरल और कुशल बनाना', es: 'optimizar / simplificar', fr: 'rationaliser / simplifier', de: 'optimieren / straffen', pt: 'otimizar / simplificar', zh: '精简 / 简化流程', ar: 'تبسيط وتسهيل', ja: '合理化する / 効率化する', ru: 'оптимизировать / упрощать', ex: 'Digitizing the onboarding documents will streamline the hiring process.', exHi: 'ऑनबोर्डिंग दस्तावेजों को डिजिटाइज़ करने से भर्ती प्रक्रिया सरल और कुशल हो जाएगी।', exEs: 'Digitalizar los documentos de incorporación simplificará el proceso de contratación.', ic: '⚡' },
    { w: 'viable', p: '/ˈvaɪəbl/', m: 'capable of working successfully; feasible', hi: 'व्यवहार्य / चलने योग्य', es: 'viable / sostenible', fr: 'viable', de: 'lebensfähig / tragfähig', pt: 'viável', zh: '切实可行的', ar: 'قابل للنجاح', ja: '実行可能な', ru: 'жизнеспособный', ex: 'Is hiring freelancers a commercially viable option for this sprint?', exHi: 'क्या इस स्प्रिंट के लिए फ्रीलांसरों को काम पर रखना व्यावसायिक रूप से व्यवहार्य विकल्प है?', exEs: '¿Contratar trabajadores independientes es una opción comercialmente viable para este sprint?', ic: '🌱' },
    { w: 'brainstorming', p: '/ˈbreɪnstɔːmɪŋ/', m: 'the process of generating creative ideas in a spontaneous group discussion', hi: 'विचार-मंथन', es: 'sesión de lluvia de ideas', fr: 'remue-méninges', de: 'Brainstorming', pt: 'tempestade de ideias', zh: '头脑风暴讨论', ar: 'جلسة عصف ذهني', ja: 'アイデア出し', ru: 'мозговой штурм', ex: 'Our Friday brainstorming session generated five solid ideas.', exHi: 'हमारे शुक्रवार के विचार-मंथन सत्र ने पांच ठोस विचार उत्पन्न किए।', exEs: 'Nuestra sesión de lluvia de ideas del viernes generó cinco ideas sólidas.', ic: '💡' },
    { w: 'prioritize', p: '/praɪˈɒrətaɪz/', m: 'determine the order for dealing with according to relative importance', hi: 'प्राथमिकता देना', es: 'priorizar', fr: 'prioriser', de: 'priorisieren', pt: 'priorizar', zh: '按重要性排序', ar: 'تحديد الأولويات', ja: '優先順位を決める', ru: 'расставлять приоритеты', ex: 'We must prioritize security fixes over cosmetic design changes.', exHi: 'हमें दिखावटी डिज़ाइन परिवर्तनों की तुलना में सुरक्षा सुधारों को प्राथमिकता देनी चाहिए।', exEs: 'Debemos priorizar las correcciones de seguridad sobre los cambios de diseño estéticos.', ic: '📊' },
    { w: 'tweak', p: '/twiːk/', m: 'make a fine adjustment to improve a mechanism or system', hi: 'हल्का सा बदलाव करना', es: 'hacer un pequeño ajuste / retocar', fr: 'ajuster / peaufiner', de: 'nachjustieren / optimieren', pt: 'fazer um pequeno ajuste', zh: '微调', ar: 'تعديل طفيف', ja: '微調整する', ru: 'подправить / подкорректировать', ex: 'With a slight tweak to the algorithm, accuracy jumped by 15%.', exHi: 'एल्गोरिदम में थोड़े से बदलाव के साथ, सटीकता में 15% की वृद्धि हुई।', exEs: 'Con un ligero ajuste en el algoritmo, la precisión aumentó un 15%.', ic: '🔧' }
  ],
  chunks: [
    { phrase: 'what if we', meaning: 'used to introduce a hypothetical proposal or suggestion', hi: 'क्या होगा अगर हम / कैसा रहेगा यदि हम', es: '¿qué tal si...? / ¿y si...?', fr: 'et si nous...', de: 'wie wäre es, wenn wir...', pt: 'e se nós...', zh: '要是我们...怎么样', ar: 'ماذا لو قمنا بـ', ja: '〜したらどうだろう？', ru: 'а что если мы...', note: 'Creative suggestion formula: "What if we offer a free trial period?"', ic: '💡' },
    { phrase: 'how about', meaning: 'used to suggest an action or evaluate an option', hi: 'के बारे में क्या ख्याल है / कैसा रहेगा', es: '¿qué te parece...? / ¿qué tal...?', fr: 'que dirais-tu de...', de: 'wie steht es mit...', pt: 'que tal...', zh: '...怎么样', ar: 'ما رأيك في...', ja: '〜はどうですか？', ru: 'как насчет...', note: 'Followed by gerund (-ing) or noun: "How about testing this with a smaller group?"', ic: '🤔' },
    { phrase: 'might want to consider', meaning: 'polite and tactful way to recommend an action', hi: 'पर विचार करना उपयोगी हो सकता है', es: 'quizás quieras considerar...', fr: 'vous pourriez envisager de...', de: 'könnte in Betracht ziehen...', pt: 'talvez você queira considerar...', zh: '或许可以考虑...', ar: 'قد ترغب في التفكير في...', ja: '〜を検討しても良いかもしれません', ru: 'возможно, стоит рассмотреть...', note: 'Soft workplace recommendation: "You might want to consider hiring a contractor."', ic: '🤝' },
    { phrase: 'pros and cons', meaning: 'the advantages and disadvantages of something', hi: 'पक्ष और विपक्ष / फायदे और नुकसान', es: 'los pros y los contras', fr: 'le pour et le contre', de: 'Vor- und Nachteile', pt: 'os prós e os contras', zh: '利弊 / 优缺点', ar: 'الإيجابيات والسلبيات', ja: 'メリットとデメリット', ru: 'плюсы и минусы', note: 'Evaluation phrase: "Let\'s write down the pros and cons of both options."', ic: '⚖️' },
    { phrase: 'think outside the box', meaning: 'think in an original and creative way', hi: 'लीक से हटकर सोचना / कुछ नया सोचना', es: 'pensar de manera innovadora / fuera de lo común', fr: 'sortir des sentiers battus', de: 'querdenken / unkonventionell denken', pt: 'pensar fora da caixa', zh: '跳出固有思维 / 创新思考', ar: 'التفكير خارج الصندوق', ja: '柔軟な発想をする', ru: 'мыслить нестандартно', note: 'Idiomatic expression: "We need to think outside the box to lower delivery costs."', ic: '📦' },
    { phrase: 'on the other hand', meaning: 'used to introduce an opposing or contrasting point', hi: 'दूसरी ओर / इसके विपरीत', es: 'por otro lado / en cambio', fr: 'd\'un autre côté', de: 'andererseits', pt: 'por outro lado', zh: '另一方面', ar: 'من ناحية أخرى', ja: '他方で / その一方で', ru: 'с другой стороны', note: 'Contrastive discourse connector: "It is cheaper; on the other hand, it takes longer."', ic: '🔄' },
    { phrase: 'a win-win situation', meaning: 'an outcome that benefits all parties involved', hi: 'दोनों पक्षों के लिए लाभदायक स्थिति', es: 'una situación en la que todos ganan', fr: 'une situation gagnant-gagnant', de: 'eine Win-Win-Situation', pt: 'uma situação em que todos ganham', zh: '双赢局面', ar: 'موقف رابح للجميع', ja: '双方にとって有益な状況', ru: 'взаимовыгодная ситуация', note: 'Negotiation idiom: "Sharing warehouse space creates a win-win situation."', ic: '🏆' },
    { phrase: 'worth a shot', meaning: 'worth trying even if the chance of success is uncertain', hi: 'एक बार प्रयास करने लायक', es: 'vale la pena intentarlo', fr: 'ça vaut la peine d\'essayer', de: 'einen Versuch wert', pt: 'vale a pena tentar', zh: '值得一试', ar: 'يستحق التجربة', ja: '試してみる価値がある', ru: 'стоит попробовать', note: 'Colloquial encouragement: "It is unusual, but it is definitely worth a shot."', ic: '🎯' }
  ],
  grammar: {
    title: 'Modals for Suggestions (could, might want to) & Suggestion Patterns (What if, How about)',
    concept: 'Formulating polite, constructive proposals and exploring creative alternatives without sounding demanding.',
    patterns: [
      {
        title: 'Polite Suggestion Modals (could / might want to)',
        structure: 'Subject + could + Base Verb | Subject + might want to + Base Verb',
        rule: 'Use "could" to offer tentative possibilities and "might want to consider/try" to make tactful, softened recommendations.',
        examples: [
          { en: 'We could split the team into two small focus groups.', hi: 'हम टीम को दो छोटे फोकस समूहों में विभाजित कर सकते हैं।', es: 'Podríamos dividir el equipo en dos pequeños grupos de enfoque.' },
          { en: 'You might want to check the server bandwidth before launch.', hi: 'लॉन्च से पहले आप सर्वर बैंडविड्थ की जांच करना चाह सकते हैं।', es: 'Quizás quieras comprobar el ancho de banda del servidor antes del lanzamiento.' }
        ]
      },
      {
        title: 'Suggestion Clauses (What if we + present/past | How about + gerund)',
        structure: 'What if we + Verb? | How about + Verb-ing / Noun?',
        rule: '"What if we..." introduces a fresh hypothetical idea. "How about..." asks for the listener\'s opinion on an action or choice.',
        examples: [
          { en: 'What if we invite user feedback during the beta test?', hi: 'क्या होगा अगर हम बीटा परीक्षण के दौरान उपयोगकर्ता की प्रतिक्रिया मांगें?', es: '¿Y si pedimos la opinión de los usuarios durante la prueba beta?' },
          { en: 'How about organizing a joint workshop next Friday?', hi: 'अगले शुक्रवार को एक संयुक्त कार्यशाला आयोजित करने के बारे में क्या ख्याल है?', es: '¿Qué tal si organizamos un taller conjunto el próximo viernes?' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'How about to hire an external consultant?', cor: 'How about hiring an external consultant?', exp: 'After the suggestion phrase "How about", use a gerund (verb + -ing), not a to-infinitive.', hi: '"How about" के बाद हमेशा gerund (verb + -ing) का उपयोग करें, "to + क्रिया" का नहीं।', es: 'Después de "How about", usa un gerundio (verbo + -ing), no un infinitivo con "to".' },
    { inc: 'We could to try another design.', cor: 'We could try another design.', exp: 'Modal verbs like "could" are followed directly by the base verb without "to".', hi: '"could" जैसे मोडल क्रिया के बाद "to" के बिना मूल क्रिया का प्रयोग करें।', es: 'Los verbos modales como "could" van seguidos directamente del verbo base sin "to".' },
    { inc: 'You might want consider a new plan.', cor: 'You might want to consider a new plan.', exp: 'The phrase is "might want to" followed by the base verb.', hi: 'सही संरचना "might want to consider" है।', es: 'La estructura correcta es "might want to" seguida del verbo base.' },
    { inc: 'What if we to reduce the price?', cor: 'What if we reduce the price?', exp: '"What if we" is followed by a standard clause with a conjugated verb, not a to-infinitive.', hi: '"What if we" के बाद सामान्य क्लॉज ("we reduce") आता है, "to reduce" नहीं।', es: '"What if we" va seguido de un verbo conjugado regular, no de un infinitivo con "to".' },
    { inc: 'Let\'s think out of box.', cor: 'Let\'s think outside the box.', exp: 'The exact English idiom is "think outside the box".', hi: 'सही मुहावरा "think outside the box" है।', es: 'La expresión exacta en inglés es "think outside the box".' }
  ],
  dialogues: [
    {
      title: 'Brainstorming a Customer Retention Solution',
      context: 'Nadia (Marketing Lead) and Tariq (Customer Success Manager) discuss ideas to reduce user churn.',
      charA: { name: 'Nadia', av: '👩‍💼', role: 'Marketing Lead' },
      charB: { name: 'Tariq', av: '👨‍💼', role: 'Customer Success Manager' },
      turns: [
        { spk: 'Nadia', text: 'Thanks for meeting, Tariq. We noticed a slight drop in renewal rates this quarter. Let\'s brainstorm some solutions.', hi: 'बैठक के लिए धन्यवाद, तारिक। हमने इस तिमाही में नवीनीकरण दरों में थोड़ी गिरावट देखी। आइए कुछ समाधानों पर विचार-मंथन करें।', es: 'Gracias por reunirte, Tariq. Notamos una ligera caída en las tasas de renovación este trimestre. Pensemos en algunas soluciones.' },
        { spk: 'Tariq', text: 'Good idea, Nadia. What if we offer an interactive onboarding tutorial for new subscribers?', hi: 'अच्छा विचार है, नादिया। क्या होगा अगर हम नए ग्राहकों के लिए एक इंटरैक्टिव ऑनबोर्डिंग ट्यूटोरियल की पेशकश करें?', es: 'Buena idea, Nadia. ¿Y si ofrecemos un tutorial de incorporación interactivo para nuevos suscriptores?' },
        { spk: 'Nadia', text: 'That could work well. How about rewarding active users with discount vouchers on their annual renewals?', hi: 'यह अच्छा काम कर सकता है। सक्रिय उपयोगकर्ताओं को उनके वार्षिक नवीनीकरण पर छूट वाउचर के साथ पुरस्कृत करने के बारे में क्या ख्याल है?', es: 'Eso podría funcionar bien. ¿Qué tal recompensar a los usuarios activos con cupones de descuento en sus renovaciones anuales?' },
        { spk: 'Tariq', text: 'That would create a win-win situation! You might want to consider surveying our top 100 clients first to validate the idea.', hi: 'यह दोनों पक्षों के लिए फ़ायदेमंद स्थिति होगी! विचार की पुष्टि करने के लिए आप पहले हमारे शीर्ष 100 ग्राहकों का सर्वेक्षण करने पर विचार कर सकती हैं।', es: '¡Eso crearía una situación en la que todos ganan! Quizás quieras considerar encuestar primero a nuestros 100 principales clientes para validar la idea.' },
        { spk: 'Nadia', text: 'Agreed. It is definitely worth a shot before we invest in large advertising campaigns.', hi: 'सहमति है। बड़े विज्ञापन अभियानों में निवेश करने से पहले यह निश्चित रूप से आज़माने लायक है।', es: 'De acuerdo. Definitivamente vale la pena intentarlo antes de invertir en grandes campañas de publicidad.' }
      ]
    },
    {
      title: 'Weighing Alternatives for Office Relocation',
      context: 'Sam and Chloe evaluate two office rental proposals during a budget meeting.',
      charA: { name: 'Sam', av: '👨‍💼', role: 'Operations Director' },
      charB: { name: 'Chloe', av: '👩‍💼', role: 'Finance Manager' },
      turns: [
        { spk: 'Sam', text: 'Chloe, let\'s weigh the pros and cons of moving to the downtown tech park versus staying in our current building.', hi: 'क्लोई, आइए डाउनटाउन टेक पार्क में जाने बनाम हमारी वर्तमान इमारत में रहने के पक्ष और विपक्ष का मूल्यांकन करें।', es: 'Chloe, evaluemos los pros y los contras de mudarnos al parque tecnológico del centro frente a quedarnos en nuestro edificio actual.' },
        { spk: 'Chloe', text: 'The downtown building has modern facilities; on the other hand, the monthly lease is significantly higher.', hi: 'डाउनटाउन इमारत में आधुनिक सुविधाएं हैं; दूसरी ओर, मासिक किराया काफी अधिक है।', es: 'El edificio del centro tiene instalaciones modernas; por otro lado, el alquiler mensual es significativamente más alto.' },
        { spk: 'Sam', text: 'We could negotiate a longer five-year lease to reduce the monthly rate.', hi: 'हम मासिक दर को कम करने के लिए पांच साल के लंबे पट्टे पर बातचीत कर सकते हैं।', es: 'Podríamos negociar un contrato de arrendamiento más largo de cinco años para reducir la tarifa mensual.' },
        { spk: 'Chloe', text: 'That is a viable alternative. Let\'s prepare a formal proposal for the executive board.', hi: 'यह एक व्यावहारिक विकल्प है। आइए कार्यकारी बोर्ड के लिए एक औपचारिक प्रस्ताव तैयार करें।', es: 'Esa es una alternativa viable. Preparemos una propuesta formal para la junta ejecutiva.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_168_p1',
      type: 'fill_blank',
      prompt: 'Choose the correct form of the verb after "How about":',
      text: 'How about [blank] a survey to gather user opinions?',
      options: [
        { id: '1', text: 'conducting', isCorrect: true },
        { id: '2', text: 'conduct', isCorrect: false },
        { id: '3', text: 'to conduct', isCorrect: false },
        { id: '4', text: 'conducted', isCorrect: false }
      ],
      correctAnswer: 'conducting',
      explanation: '"How about" must be followed by a gerund ("conducting").'
    },
    {
      id: 'ex_168_p2',
      type: 'multiple_choice',
      prompt: 'Select the sentence that makes a polite, softened suggestion:',
      options: [
        { id: '1', text: 'You might want to consider testing the software with a smaller focus group.', isCorrect: true },
        { id: '2', text: 'You must test the software with a smaller focus group right now.', isCorrect: false },
        { id: '3', text: 'You have to testing the software today.', isCorrect: false },
        { id: '4', text: 'You might to want consider testing software.', isCorrect: false }
      ],
      correctAnswer: 'You might want to consider testing the software with a smaller focus group.',
      explanation: '"You might want to consider + gerund" is the standard diplomatic suggestion structure.'
    },
    {
      id: 'ex_168_p3',
      type: 'word_ordering',
      prompt: 'Arrange the tokens to propose an innovative idea:',
      tokens: ['What', 'if', 'we', 'offer', 'a', 'discount', 'for', 'annual', 'subscriptions', '?'],
      correctOrder: ['What', 'if', 'we', 'offer', 'a', 'discount', 'for', 'annual', 'subscriptions', '?'],
      explanation: 'Use the suggestion pattern "What if we + verb... ?".'
    },
    {
      id: 'ex_168_p4',
      type: 'error_correction',
      prompt: 'Fix the error in this proposal:',
      errorSentence: 'We could to hire two interns for the summer project.',
      correctSentence: 'We could hire two interns for the summer project.',
      explanation: 'Remove "to" after the modal verb "could".'
    },
    {
      id: 'ex_168_p5',
      type: 'translation',
      prompt: 'Translate to English: "आइए दोनों विकल्पों के फायदे और नुकसान पर चर्चा करें।"',
      targetSentence: 'Let us discuss the pros and cons of both options.',
      explanation: '"pros and cons" is the standard idiom for advantages and disadvantages.'
    },
    {
      id: 'ex_168_p6',
      type: 'multiple_choice',
      prompt: 'What does "a win-win situation" mean?',
      options: [
        { id: '1', text: 'An outcome that benefits all parties involved', isCorrect: true },
        { id: '2', text: 'A competition where only one person wins everything', isCorrect: false },
        { id: '3', text: 'A severe conflict that leads to legal action', isCorrect: false },
        { id: '4', text: 'A project that gets canceled halfway through', isCorrect: false }
      ],
      correctAnswer: 'An outcome that benefits all parties involved',
      explanation: '"Win-win" describes a mutually advantageous result.'
    },
    {
      id: 'ex_168_p7',
      type: 'fill_blank',
      prompt: 'Complete the contrastive sentence:',
      text: 'The proposed software is fast; [blank] the other hand, it is expensive.',
      options: [
        { id: '1', text: 'on', isCorrect: true },
        { id: '2', text: 'in', isCorrect: false },
        { id: '3', text: 'at', isCorrect: false },
        { id: '4', text: 'by', isCorrect: false }
      ],
      correctAnswer: 'on',
      explanation: 'The fixed prepositional phrase is "on the other hand".'
    },
    {
      id: 'ex_168_p8',
      type: 'speaking',
      prompt: 'Read this suggestion aloud with confident intonation:',
      targetSentence: 'We could streamline our customer support by implementing an automated chat system.',
      audioText: 'We could streamline our customer support by implementing an automated chat system.',
      explanation: 'Practice smooth pronunciation of "streamline" and "implementing".'
    },
    {
      id: 'ex_168_p9',
      type: 'listening',
      prompt: 'Listen to the suggestion and identify the speaker\'s proposal:',
      audioText: 'What if we partner with local distributors to cut down on transportation fees?',
      options: [
        { id: '1', text: 'Partnering with local distributors to lower shipping fees.', isCorrect: true },
        { id: '2', text: 'Closing the local offices to save electricity.', isCorrect: false },
        { id: '3', text: 'Increasing product prices by 20 percent.', isCorrect: false },
        { id: '4', text: 'Firing all distribution partners immediately.', isCorrect: false }
      ],
      correctAnswer: 'Partnering with local distributors to lower shipping fees.',
      explanation: 'The speaker proposes partnering with local distributors to reduce fees.'
    },
    {
      id: 'ex_168_p10',
      type: 'match_pairs',
      prompt: 'Match the collaborative expressions with their meanings:',
      pairs: [
        { left: 'Think outside the box', right: 'Think creatively' },
        { left: 'Worth a shot', right: 'Worth attempting' },
        { left: 'Opt for', right: 'Choose an alternative' },
        { left: 'Feasible', right: 'Practical and possible to do' }
      ]
    }
  ],
  review: [
    {
      id: 'ex_168_r1',
      type: 'multiple_choice',
      prompt: 'Which phrase is grammatically correct for making a suggestion?',
      options: [
        { id: '1', text: 'How about launching a mobile app first?', isCorrect: true },
        { id: '2', text: 'How about to launch a mobile app first?', isCorrect: false },
        { id: '3', text: 'What if we to launch a mobile app first?', isCorrect: false },
        { id: '4', text: 'We could to launch a mobile app first.', isCorrect: false }
      ],
      correctAnswer: 'How about launching a mobile app first?',
      explanation: '"How about launching" correctly uses a gerund.'
    },
    {
      id: 'ex_168_r2',
      type: 'word_ordering',
      prompt: 'Arrange the tokens into a recommendation:',
      tokens: ['You', 'might', 'want', 'to', 'consult', 'the', 'finance', 'team', '.'],
      correctOrder: ['You', 'might', 'want', 'to', 'consult', 'the', 'finance', 'team', '.'],
      explanation: 'The structure is "You might want to + base verb".'
    },
    {
      id: 'ex_168_r3',
      type: 'fill_blank',
      prompt: 'Fill in the blank:',
      text: 'It is a risky idea, but it is definitely worth a [blank].',
      options: [
        { id: '1', text: 'shot', isCorrect: true },
        { id: '2', text: 'shoot', isCorrect: false },
        { id: '3', text: 'shooting', isCorrect: false },
        { id: '4', text: 'shotgun', isCorrect: false }
      ],
      correctAnswer: 'shot',
      explanation: 'The idiom is "worth a shot" (meaning worth trying).'
    },
    {
      id: 'ex_168_r4',
      type: 'translation',
      prompt: 'Translate: "क्या होगा अगर हम कार्यभार को तीन टीमों के बीच विभाजित करें?"',
      targetSentence: 'What if we divide the workload among three teams?',
      explanation: '"What if we divide..." is the exact structure.'
    },
    {
      id: 'ex_168_r5',
      type: 'speaking',
      prompt: 'Speak this brainstorming idea:',
      targetSentence: 'Let us brainstorm a few innovative alternatives before making our final choice.',
      audioText: 'Let us brainstorm a few innovative alternatives before making our final choice.',
      explanation: 'Articulate "innovative alternatives" smoothly.'
    },
    {
      id: 'ex_168_r6',
      type: 'error_correction',
      prompt: 'Correct the error:',
      errorSentence: 'How about to organize a weekly sync meeting?',
      correctSentence: 'How about organizing a weekly sync meeting?',
      explanation: 'Use the gerund "organizing" after "How about".'
    }
  ],
  assessment: [
    {
      id: 'ex_168_a1',
      type: 'multiple_choice',
      prompt: 'Identify the best response in a team brainstorming meeting:',
      options: [
        { id: '1', text: 'We could explore cloud backup solutions to prevent future data loss.', isCorrect: true },
        { id: '2', text: 'We could exploring cloud backup solutions yesterday.', isCorrect: false },
        { id: '3', text: 'How about to explore cloud backup solutions?', isCorrect: false },
        { id: '4', text: 'What if we to exploring cloud backup solutions?', isCorrect: false }
      ],
      correctAnswer: 'We could explore cloud backup solutions to prevent future data loss.',
      explanation: '"We could explore..." uses the modal verb correctly with a base verb.'
    },
    {
      id: 'ex_168_a2',
      type: 'fill_blank',
      prompt: 'Choose the word that means a viable and realistic option:',
      text: 'Working from home two days a week is a highly [blank] proposal.',
      options: [
        { id: '1', text: 'feasible', isCorrect: true },
        { id: '2', text: 'drawback', isCorrect: false },
        { id: '3', text: 'corrupted', isCorrect: false },
        { id: '4', text: 'unresponsive', isCorrect: false }
      ],
      correctAnswer: 'feasible',
      explanation: '"Feasible" means practical, realistic, and workable.'
    },
    {
      id: 'ex_168_a3',
      type: 'word_ordering',
      prompt: 'Order the words to create an evaluation phrase:',
      tokens: ['Let', 'us', 'weigh', 'the', 'pros', 'and', 'cons', 'carefully', '.'],
      correctOrder: ['Let', 'us', 'weigh', 'the', 'pros', 'and', 'cons', 'carefully', '.'],
      explanation: 'Use the collocation "weigh the pros and cons".'
    },
    {
      id: 'ex_168_a4',
      type: 'translation',
      prompt: 'Translate: "लागत कम करने के लिए हम स्थानीय आपूर्तिकर्ताओं को चुन सकते हैं।"',
      targetSentence: 'We could opt for local suppliers in order to reduce costs.',
      explanation: '"We could opt for ... in order to reduce costs" combines modal suggestion and purpose.'
    },
    {
      id: 'ex_168_a5',
      type: 'speaking',
      prompt: 'Present this proposal clearly:',
      targetSentence: 'What if we create a dedicated customer feedback portal to improve our services?',
      audioText: 'What if we create a dedicated customer feedback portal to improve our services?',
      explanation: 'Pronounce "dedicated customer feedback portal" clearly.'
    },
    {
      id: 'ex_168_a6',
      type: 'personal_production',
      prompt: 'Write two sentences proposing an idea to solve a daily problem using "What if we..." or "How about...".',
      explanation: 'Example: "What if we prepare meals on Sunday evening? How about planning our schedule in advance to save time during the week?"'
    }
  ]
};
