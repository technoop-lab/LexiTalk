import { LessonConfigA2 } from './unit8_builder_helper';

// =========================================================================
// LESSON 112: Workplace Communication: Daily Tasks, Updates & Short Messages
// =========================================================================
export const LESSON_112_CONFIG: LessonConfigA2 = {
  num: 112,
  title: 'Workplace Communication: Daily Tasks, Updates & Short Messages',
  icon: '💼',
  estMin: 25,
  objTitle: 'Managing Office Communication, Task Delegation & Status Reports',
  objDesc: 'Communicate effectively in professional work environments: drafting short updates, reporting task status, passing on requests using Verb + Object + Infinitive, and using workplace collocations.',
  objHi: 'कार्यालय संचार, कार्यों की प्रगति की रिपोर्ट और कार्य सौंपने के तरीके सीखें।',
  objEs: 'Comunicarse en el trabajo: redactar actualizaciones, reportar estados y delegar tareas usando Verbo + Objeto + Infinitivo.',
  canDo: [
    'I can write short workplace status updates and emails to coworkers.',
    'I can report instructions and requests using "asked me to [verb]" and "reminded us to [verb]".',
    'I can express professional obligation with "have got to" and "need to complete by [time]".',
    'I can update a team lead on task completion, blockers, and upcoming milestones.'
  ],
  canDoHi: [
    'मैं सहकर्मियों को काम से जुड़े छोटे संदेश और ईमेल लिख सकता हूँ।',
    'मैं "asked me to [verb]" और "reminded us to [verb]" का प्रयोग करके निर्देश बता सकता हूँ।',
    'मैं "have got to" और "need to complete by..." से समय सीमा और दायित्व व्यक्त कर सकता हूँ।',
    'मैं टीम लीडर को कार्य की प्रगति और रुकावटों की जानकारी दे सकता हूँ।'
  ],
  canDoEs: [
    'Puedo escribir breves actualizaciones y correos a mis compañeros.',
    'Puedo reportar instrucciones usando "asked me to [verbo]" y "reminded us to [verbo]".',
    'Puedo expresar obligaciones con "have got to" y fechas límite.',
    'Puedo informar al líder de equipo sobre el avance y posibles bloqueos.'
  ],
  vocab: [
    { w: 'deadline', p: '/ˈdedlaɪn/', m: 'the latest time or date by which something should be completed', hi: 'अंतिम तिथि / समय सीमा (डेडलाइन)', es: 'fecha límite / plazo', fr: 'date limite', de: 'Frist / Abgabetermin', pt: 'prazo final', zh: '截止日期', ar: 'الموعد النهائي', ja: '締め切り', ru: 'дедлайн / крайний срок', ex: 'We must finish this report before the Friday deadline.', exHi: 'हमें शुक्रवार की समय सीमा से पहले यह रिपोर्ट पूरी करनी होगी।', exEs: 'Debemos terminar este informe antes del plazo del viernes.', ic: '⏰' },
    { w: 'colleague', p: '/ˈkɒliːɡ/', m: 'a person with whom one works in a profession or business', hi: 'सहकर्मी', es: 'colega / compañero de trabajo', fr: 'collègue', de: 'Kollege', pt: 'colega', zh: '同事', ar: 'زميل عمل', ja: '同僚', ru: 'коллега', ex: 'I collaborated with two colleagues on the client presentation.', exHi: 'मैंने क्लाइंट प्रेजेंटेशन पर दो सहकर्मियों के साथ मिलकर काम किया।', exEs: 'Colaboré con dos colegas en la presentación del cliente.', ic: '👥' },
    { w: 'task', p: '/tɑːsk/', m: 'a piece of work to be done or undertaken', hi: 'कार्य / काम', es: 'tarea / labor', fr: 'tâche', de: 'Aufgabe', pt: 'tarefa', zh: '任务', ar: 'مهمة', ja: '業務 / タスク', ru: 'задача / задание', ex: 'She prioritized her urgent tasks first thing in the morning.', exHi: 'उसने सुबह सबसे पहले अपने जरूरी कामों को प्राथमिकता दी।', exEs: 'Ella priorizó sus tareas urgentes a primera hora.', ic: '📋' },
    { w: 'progress', p: '/ˈprəʊɡres/', m: 'forward or onward movement toward a destination or goal', hi: 'प्रगति / सुधार', es: 'progreso / avance', fr: 'progrès / avancement', de: 'Fortschritt', pt: 'progresso / avanço', zh: '进度 / 进展', ar: 'تقدم / تطور', ja: '進捗', ru: 'прогресс / успехи', ex: 'We are making steady progress on the new software feature.', exHi: 'हम नए सॉफ्टवेयर फीचर पर लगातार प्रगति कर रहे हैं।', exEs: 'Estamos logrando un progreso constante en la nueva función.', ic: '📈' },
    { w: 'update', p: '/ˈʌpdeɪt/', m: 'a report giving the latest information on a situation', hi: 'ताजा जानकारी / अपडेट', es: 'actualización / informe', fr: 'mise à jour', de: 'Aktualisierung / Update', pt: 'atualização', zh: '最新进展 / 更新', ar: 'تحديث', ja: '最新情報', ru: 'обновление / сводка', ex: 'Please send me a quick update by three o\'clock.', exHi: 'कृपया मुझे तीन बजे तक एक त्वरित अपडेट भेजें।', exEs: 'Por favor, envíame una actualización rápida para las tres.', ic: '📊' },
    { w: 'reminder', p: '/rɪˈmaɪndər/', m: 'a thing that causes someone to remember something', hi: 'याद दिलाने वाला संदेश / रिमाइंडर', es: 'recordatorio', fr: 'rappel', de: 'Erinnerung', pt: 'lembrete', zh: '提醒', ar: 'تذكير', ja: 'リマインダー', ru: 'напоминание', ex: 'This is a gentle reminder regarding our team lunch tomorrow.', exHi: 'यह कल हमारी टीम के दोपहर के भोजन के संबंध में एक सौम्य अनुस्मारक है।', exEs: 'Este es un recordatorio cordial sobre nuestro almuerzo de equipo.', ic: '🔔' },
    { w: 'attachment', p: '/əˈtætʃmənt/', m: 'a computer file appended to an email', hi: 'संलग्न फाइल / अटैचमेंट', es: 'archivo adjunto', fr: 'pièce jointe', de: 'Anhang', pt: 'anexo', zh: '附件', ar: 'مرفق', ja: '添付ファイル', ru: 'вложение / прикрепленный файл', ex: 'Please find the revised budget sheet in the email attachment.', exHi: 'कृपया ईमेल अटैचमेंट में संशोधित बजट शीट देखें।', exEs: 'Encuentre la hoja de presupuesto revisada en el adjunto.', ic: '📎' },
    { w: 'urgent', p: '/ˈɜːdʒənt/', m: 'requiring immediate action or attention', hi: 'अति आवश्यक / तत्काल', es: 'urgente', fr: 'urgent', de: 'dringend', pt: 'urgente', zh: '紧急的', ar: 'عاجل', ja: '緊急の', ru: 'срочный', ex: 'I received an urgent message from the regional director.', exHi: 'मुझे क्षेत्रीय निदेशक से एक अत्यंत जरूरी संदेश मिला।', exEs: 'Recibí un mensaje urgente del director regional.', ic: '🚨' },
    { w: 'supervisor', p: '/ˈsuːpəvaɪzər/', m: 'a person who directs and oversees other employees', hi: 'पर्यवेक्षक / सुपरवाइजर', es: 'supervisor / jefe', fr: 'superviseur', de: 'Vorgesetzter', pt: 'supervisor', zh: '主管 / 导师', ar: 'مشرف', ja: '上司 / 監督者', ru: 'руководитель / супервайзер', ex: 'My supervisor approved my annual leave request.', exHi: 'मेरे पर्यवेक्षक ने मेरी वार्षिक छुट्टी के अनुरोध को मंजूरी दे दी।', exEs: 'Mi supervisor aprobó mi solicitud de vacaciones.', ic: '👨‍💼' },
    { w: 'feedback', p: '/ˈfiːdbæk/', m: 'information about reactions to a person\'s performance of a task', hi: 'प्रतिक्रिया / फीडबैक', es: 'comentarios / retroalimentación', fr: 'retours / commentaires', de: 'Rückmeldung / Feedback', pt: 'feedback / retorno', zh: '反馈意见', ar: 'ملاحظات / تقييم', ja: 'フィードバック', ru: 'отзыв / обратная связь', ex: 'Constructive feedback helps us improve our project quality.', exHi: 'सकारात्मक प्रतिक्रिया हमें हमारे प्रोजेक्ट की गुणवत्ता सुधारने में मदद करती है।', exEs: 'Los comentarios constructivos nos ayudan a mejorar.', ic: '💬' },
    { w: 'delegate', p: '/ˈdelɪɡeɪt/', m: 'entrust a task or responsibility to another person', hi: 'कार्य सौंपना / अधिकार देना', es: 'delegar', fr: 'déléguer', de: 'delegieren', pt: 'delegar', zh: '委派 / 分配', ar: 'تفويض', ja: '委任する', ru: 'делегировать', ex: 'Good managers know how to delegate tasks effectively.', exHi: 'अच्छे प्रबंधक जानते हैं कि कार्यों को प्रभावी ढंग से कैसे सौंपा जाए।', exEs: 'Los buenos gerentes saben delegar tareas con eficacia.', ic: '🤝' },
    { w: 'briefing', p: '/ˈbriːfɪŋ/', m: 'a meeting for giving information or instructions', hi: 'संक्षिप्त बैठक / ब्रीफिंग', es: 'reunión informativa / sesión informativa', fr: 'séance d\'information', de: 'Lagebesprechung / Briefing', pt: 'reunião informativa', zh: '简报会', ar: 'إيجاز / جلسة معلومات', ja: '概要説明 / ブリーフィング', ru: 'брифинг / инструктаж', ex: 'We hold a daily ten-minute stand-up briefing every morning.', exHi: 'हम हर सुबह दस मिनट की दैनिक संक्षिप्त बैठक करते हैं।', exEs: 'Tenemos una breve reunión informativa cada mañana.', ic: '☕' },
    { w: 'priority', p: '/praɪˈɒrəti/', m: 'the fact or condition of being regarded as more important', hi: 'प्राथमिकता', es: 'prioridad', fr: 'priorité', de: 'Priorität', pt: 'prioridade', zh: '优先事项', ar: 'أولوية', ja: '優先事項', ru: 'приоритет', ex: 'Customer satisfaction is our highest priority.', exHi: 'ग्राहकों की संतुष्टि हमारी सर्वोच्च प्राथमिकता है।', exEs: 'La satisfacción del cliente es nuestra máxima prioridad.', ic: '⭐' },
    { w: 'collaborate', p: '/kəˈlæbəreɪt/', m: 'work jointly on an activity or project', hi: 'मिलकर काम करना / सहयोग करना', es: 'colaborar', fr: 'collaborer', de: 'zusammenarbeiten', pt: 'colaborar', zh: '合作 / 协作', ar: 'يتعاون', ja: '共同作業する', ru: 'сотрудничать', ex: 'Our design and marketing teams collaborate closely.', exHi: 'हमारी डिजाइन और मार्केटिंग टीमें मिलकर काम करती हैं।', exEs: 'Nuestros equipos colaboran estrechamente.', ic: '🤝' },
    { w: 'agenda', p: '/əˈdʒendə/', m: 'a list of items to be discussed at a formal meeting', hi: 'कार्यसूची / एजेंडा', es: 'agenda / orden del día', fr: 'ordre du jour', de: 'Tagesordnung', pt: 'pauta / agenda', zh: '议程', ar: 'جدول أعمال', ja: '議題 / アジェンダ', ru: 'повестка дня', ex: 'Please review the meeting agenda before the call begins.', exHi: 'कॉल शुरू होने से पहले कृपया बैठक की कार्यसूची की समीक्षा करें।', exEs: 'Por favor, revise la agenda de la reunión antes de la llamada.', ic: '📑' },
    { w: 'presentation', p: '/ˌpreznˈteɪʃn/', m: 'a speech or talk in which a new product or idea is shown', hi: 'प्रस्तुति / प्रेजेंटेशन', es: 'presentación', fr: 'présentation', de: 'Präsentation', pt: 'apresentação', zh: '演示文稿 / 演讲', ar: 'عرض تقديمي', ja: '発表 / プレゼンテーション', ru: 'презентация', ex: 'He delivered an impressive presentation to the board.', exHi: 'उसने बोर्ड के सामने एक प्रभावशाली प्रस्तुति दी।', exEs: 'Hizo una presentación impresionante ante la junta.', ic: '🖥️' },
    { w: 'clarification', p: '/ˌklærəfɪˈkeɪʃn/', m: 'the action of making a statement less confused and more comprehensible', hi: 'स्पष्टीकरण', es: 'aclaración', fr: 'clarification', de: 'Klarstellung', pt: 'esclarecimento', zh: '澄清 / 详细说明', ar: 'توضيح', ja: '説明 / 明確化', ru: 'разъяснение / уточнение', ex: 'I asked for clarification on the project requirements.', exHi: 'मैंने प्रोजेक्ट की आवश्यकताओं पर स्पष्टीकरण माँगा।', exEs: 'Pedí una aclaración sobre los requisitos del proyecto.', ic: '❓' },
    { w: 'inquiry', p: '/ɪnˈkwaɪəri/', m: 'an act of asking for information', hi: 'पूछताछ / जानकारी माँगना', es: 'consulta / indagación', fr: 'demande de renseignements', de: 'Anfrage', pt: 'consulta / indagação', zh: '询问 / 垂询', ar: 'استفسار', ja: '問い合わせ', ru: 'запрос / расспрос', ex: 'We received an inquiry from a prospective international client.', exHi: 'हमें एक संभावित अंतरराष्ट्रीय ग्राहक से पूछताछ प्राप्त हुई।', exEs: 'Recibimos una consulta de un cliente potencial.', ic: '✉️' },
    { w: 'minutes', p: '/ˈmɪnɪts/', m: 'the official written record of what was said and decided at a meeting', hi: 'बैठक की कार्यवाही का विवरण (मिनट्स)', es: 'acta de la reunión', fr: 'procès-verbal', de: 'Protokoll', pt: 'ata de reunião', zh: '会议纪要', ar: 'محضر الاجتماع', ja: '議事録', ru: 'протокол заседания', ex: 'The assistant circulated the meeting minutes to all attendees.', exHi: 'सहायक ने सभी उपस्थित लोगों को बैठक का विवरण भेजा।', exEs: 'El asistente distribuyó el acta a todos los asistentes.', ic: '📝' },
    { w: 'milestone', p: '/ˈmaɪlstəʊn/', m: 'a significant stage or event in the development of something', hi: 'महत्वपूर्ण पड़ाव / मील का पत्थर', es: 'hito / etapa clave', fr: 'jalon / étape clé', de: 'Meilenstein', pt: 'marco / etapa', zh: '里程碑', ar: 'محطة هامة / إنجاز', ja: '節目 / マイルストーン', ru: 'веха / рубеж', ex: 'Reaching one million users is a huge milestone for our startup.', exHi: 'दस लाख उपयोगकर्ताओं तक पहुँचना हमारे स्टार्टअप के लिए एक बहुत बड़ा पड़ाव है।', exEs: 'Llegar a un millón de usuarios es un gran hito.', ic: '🚩' }
  ],
  chunks: [
    { phrase: 'ask someone to do something', meaning: 'instruct or request an action from a coworker', hi: 'किसी को कुछ करने के लिए कहना', es: 'pedirle a alguien que haga algo', fr: 'demander à quelqu\'un de faire quelque chose', de: 'jemanden bitten, etwas zu tun', pt: 'pedir para alguém fazer algo', zh: '让某人做某事', ar: 'الطلب من شخص فعل شيء', ja: '誰かに〜するよう頼む', ru: 'попросить кого-то сделать что-то', note: 'Structure: Verb + Object + to-infinitive (My boss asked me to send the file).', ic: '🗣️' },
    { phrase: 'remind someone to do something', meaning: 'cause a person to remember an obligation', hi: 'किसी को कुछ करने की याद दिलाना', es: 'recordarle a alguien que haga algo', fr: 'rappeler à quelqu\'un de faire quelque chose', de: 'jemanden daran erinnern, etwas zu tun', pt: 'lembrar alguém de fazer algo', zh: '提醒某人做某事', ar: 'تذكير شخص بفعل شيء', ja: '誰かに〜することを思い出させる', ru: 'напомнить кому-то сделать что-то', note: '"She reminded me to submit the invoice today."', ic: '🔔' },
    { phrase: 'have got to finish this by', meaning: 'urgent obligation with a specific deadline', hi: 'मुझे इसे... तक पूरा करना ही होगा', es: 'tengo que terminar esto para...', fr: 'je dois absolument terminer cela avant...', de: 'ich muss das unbedingt fertig haben bis...', pt: 'tenho que terminar isso até...', zh: '我必须在...之前完成这个', ar: 'يجب أن أنهي هذا بحلول...', ja: '〜までにこれを終わらせなければならない', ru: 'я должен закончить это к...', note: 'Colloquial present obligation equivalent to "must / have to".', ic: '⏰' },
    { phrase: 'keep me posted on', meaning: 'regularly update someone about continuing progress', hi: 'मुझे ताजा जानकारी देते रहना', es: 'mantenme al tanto de...', fr: 'tiens-moi au courant de...', de: 'halte mich auf dem Laufenden über...', pt: 'mantenha-me informado sobre...', zh: '随时告诉我...的进展', ar: 'أبقني على اطلاع بـ...', ja: '〜の進捗を随時報告してください', ru: 'держи меня в курсе...', note: 'Common casual-professional idiom in workplace messaging.', ic: '📲' },
    { phrase: 'follow up on an email', meaning: 'send a subsequent message regarding a previous topic', hi: 'ईमेल पर आगे की बातचीत करना (फॉलो-अप)', es: 'hacer seguimiento a un correo', fr: 'faire le suivi d\'un e-mail', de: 'eine E-Mail nachverfolgen', pt: 'fazer o acompanhamento de um email', zh: '跟进邮件', ar: 'متابعة رسالة بريد إلكتروني', ja: 'メールのフォローアップをする', ru: 'отследить ответ на письмо', note: 'Standard professional email action.', ic: '✉️' },
    { phrase: 'as per our discussion', meaning: 'in accordance with what was agreed in a conversation', hi: 'हमारी बातचीत के अनुसार', es: 'según nuestra conversación / lo acordado', fr: 'conformément à notre discussion', de: 'gemäß unserer Besprechung', pt: 'conforme nossa conversa', zh: '根据我们的讨论', ar: 'وفقاً لمناقشتنا', ja: '私たちの話し合いの通り', ru: 'согласно нашему обсуждению', note: 'Formal business opening for emails and memos.', ic: '📑' },
    { phrase: 'touch base with you', meaning: 'briefly meet or speak to discuss progress', hi: 'आपसे थोड़ी देर बातचीत करना / संपर्क करना', es: 'ponerme en contacto contigo brevemente', fr: 'faire le point rapidement avec vous', de: 'mich kurz mit Ihnen absprechen', pt: 'alinhar com você rapidamente', zh: '和你简单沟通一下', ar: 'التواصل معك سريعاً', ja: '簡単に連絡を取り合う', ru: 'быстро связаться / сверить часы', note: 'Popular professional business idiom.', ic: '🤝' },
    { phrase: 'meet a tight deadline', meaning: 'successfully complete work before a strict time limit', hi: 'कठिन समय सीमा में काम पूरा करना', es: 'cumplir con un plazo muy ajustado', fr: 'respecter un délai très serré', de: 'eine knappe Frist einhalten', pt: 'cumprir um prazo apertado', zh: '按紧迫期限完成任务', ar: 'الالتزام بموعد نهائي ضيق', ja: '厳しい締め切りに間に合わせる', ru: 'уложиться в жесткие сроки', note: 'High-frequency resume and performance phrase.', ic: '⏱️' }
  ],
  grammar: {
    title: 'Verb + Object + To-Infinitive (Reporting Workplace Instructions) & "Have got to"',
    concept: 'Reporting requests and instructions using verb patterns (ask/tell/remind/advise + object + to-verb) and expressing workplace obligations.',
    patterns: [
      {
        title: 'Reporting Requests & Orders (Verb + Object + To-Infinitive)',
        structure: 'Subject + asked / told / reminded / advised + Object + to + Base Verb',
        rule: 'Use a direct object followed by an infinitive with "to" when conveying instructions.',
        examples: [
          { en: 'The manager asked me to prepare the sales presentation.', hi: 'मैनेजर ने मुझसे सेल्स प्रेजेंटेशन तैयार करने के लिए कहा।', es: 'El gerente me pidió que preparara la presentación.' },
          { en: 'She reminded him to send the invoice before five o\'clock.', hi: 'उसने उसे पाँच बजे से पहले चालान भेजने की याद दिलाई।', es: 'Ella le recordó enviar la factura antes de las cinco.' }
        ]
      },
      {
        title: 'Expressing Immediate Obligation with "Have got to"',
        structure: 'Subject + have / has got to + Base Verb + Complement',
        rule: 'In everyday workplace English, "have got to" expresses strong, urgent obligation equal to "must".',
        examples: [
          { en: 'I have got to finish this code review before lunch.', hi: 'मुझे दोपहर के भोजन से पहले इस कोड समीक्षा को पूरा करना होगा।', es: 'Tengo que terminar esta revisión de código antes de almorzar.' },
          { en: 'We have got to submit the proposal by Friday.', hi: 'हमें शुक्रवार तक प्रस्ताव प्रस्तुत करना ही होगा।', es: 'Tenemos que enviar la propuesta para el viernes.' }
        ]
      },
      {
        title: 'Giving Short Status Updates (Present Continuous & Present Perfect)',
        structure: 'Subject + have/has + Past Participle (for completed) / is/are + Verb-ing (for in progress)',
        rule: 'Contrast completed tasks with ongoing developments when reporting to supervisors.',
        examples: [
          { en: 'I have already sent the draft, and I am currently working on the budget.', hi: 'मैंने ड्राफ्ट पहले ही भेज दिया है, और मैं वर्तमान में बजट पर काम कर रहा हूँ।', es: 'Ya envié el borrador y actualmente estoy trabajando en el presupuesto.' },
          { en: 'We have resolved the server bug and we are monitoring stability.', hi: 'हमने सर्वर बग को हल कर लिया है और हम स्थिरता की निगरानी कर रहे हैं।', es: 'Hemos resuelto el error del servidor y estamos monitoreando la estabilidad.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'My boss asked me send the email.',
      cor: 'My boss asked me to send the email.',
      exp: 'The pattern is "ask + object + TO + verb" (asked me to send).',
      hi: '"Ask + object" के बाद "to + verb" आता है: "asked me to send"।'
    },
    {
      inc: 'She reminded to me to join the call.',
      cor: 'She reminded me to join the call.',
      exp: '"Remind" takes a direct personal object without the preposition "to" (reminded me, not reminded to me).',
      hi: '"Remind" के बाद सीधे "me" आता है, "to me" गलत है।'
    },
    {
      inc: 'I have got finish the report today.',
      cor: 'I have got to finish the report today.',
      exp: 'Include "to" in the modal obligation phrase: "have got to finish".',
      hi: '"Have got to" में "to" लगाना अनिवार्य है: "have got to finish"।'
    },
    {
      inc: 'Please find the attached in the email.',
      cor: 'Please find the attachment in the email. / Please find attached the document.',
      exp: '"Attachment" is the noun; "attached" is an adjective.',
      hi: 'संलग्न फाइल (Noun) के लिए "attachment" कहें।'
    },
    {
      inc: 'We must to meet the deadline.',
      cor: 'We must meet the deadline. / We have to meet the deadline.',
      exp: 'Modal "must" is never followed by "to".',
      hi: 'Modal "must" के बाद "to" का प्रयोग न करें: "must meet"।'
    }
  ],
  dialogues: [
    {
      title: 'Morning Stand-Up Task Update',
      context: 'Zoya updates her project manager, Daniel, on the client deliverable during the morning standup.',
      charA: { name: 'Daniel', av: '👨‍💼', role: 'Project Manager' },
      charB: { name: 'Zoya', av: '👩‍💻', role: 'Lead Developer' },
      turns: [
        { spk: 'Daniel', text: 'Good morning, team. Zoya, could you give us a quick progress update on the new payment gateway?', hi: 'शुभ प्रभात, टीम। ज़ोया, क्या आप हमें नए भुगतान गेटवे पर एक त्वरित प्रगति अपडेट दे सकती हैं?', es: 'Buenos días, equipo. Zoya, ¿podrías darnos una actualización del pasarela de pagos?' },
        { spk: 'Zoya', text: 'Sure, Daniel. I have completed the frontend integration, and I am currently testing the security certificates.', hi: 'ज़रूर, डैनियल। मैंने फ्रंटएंड एकीकरण पूरा कर लिया है, और मैं वर्तमान में सुरक्षा प्रमाणपत्रों का परीक्षण कर रही हूँ।', es: 'Claro, Daniel. Completé la integración frontend y actualmente estoy probando los certificados.' },
        { spk: 'Daniel', text: 'Excellent! Are there any blockers that might affect our Friday deadline?', hi: 'बहुत बढ़िया! क्या कोई ऐसी रुकावट है जो हमारी शुक्रवार की समय सीमा को प्रभावित कर सकती है?', es: '¡Excelente! ¿Hay algún bloqueo que afecte nuestro plazo del viernes?' },
        { spk: 'Zoya', text: 'No blockers. The QA lead asked me to deploy the build to staging by two o\'clock, so we are on track.', hi: 'कोई रुकावट नहीं है। क्यूए लीड ने मुझे दो बजे तक बिल्ड को स्टेजिंग पर तैनात करने के लिए कहा है, इसलिए हम सही समय पर हैं।', es: 'Sin bloqueos. El líder de control de calidad me pidió desplegar a las dos, así que vamos bien.' },
        { spk: 'Daniel', text: 'Great work. Please keep me posted if anything changes.', hi: 'शानदार काम। अगर कुछ बदलता है तो कृपया मुझे जानकारी देते रहें।', es: 'Gran trabajo. Por favor, mantenme informado si algo cambia.' }
      ]
    },
    {
      title: 'Delegating Tasks Before a Client Call',
      context: 'Arjun asks his associate Samir to prepare presentation slides and summary notes.',
      charA: { name: 'Arjun', av: '👨‍💼', role: 'Senior Consultant' },
      charB: { name: 'Samir', av: '👨', role: 'Associate' },
      turns: [
        { spk: 'Arjun', text: 'Samir, as per our discussion with the client, we have got to finalize the slide deck before 4 PM.', hi: 'समीर, क्लाइंट के साथ हमारी बातचीत के अनुसार, हमें शाम 4 बजे से पहले स्लाइड डेक को अंतिम रूप देना ही होगा।', es: 'Samir, según nuestra conversación con el cliente, tenemos que finalizar las diapositivas antes de las 4 PM.' },
        { spk: 'Samir', text: 'I am on it, Arjun. I have already incorporated the marketing feedback into slides five and six.', hi: 'मैं इस पर काम कर रहा हूँ, अर्जुन। मैंने स्लाइड पाँच और छह में मार्केटिंग फीडबैक को पहले ही शामिल कर लिया है।', es: 'Estoy en ello, Arjun. Ya incorporé los comentarios de marketing en las diapositivas cinco y seis.' },
        { spk: 'Arjun', text: 'Could you also remind the finance team to email the updated revenue forecasts?', hi: 'क्या आप वित्त टीम को अपडेटेड राजस्व अनुमान ईमेल करने के लिए भी याद दिला सकते हैं?', es: '¿Podrías también recordarle al equipo de finanzas enviar las previsiones de ingresos?' },
        { spk: 'Samir', text: 'I will send them a quick reminder on Slack right away.', hi: 'मैं उन्हें तुरंत स्लैक पर एक त्वरित अनुस्मारक भेज दूँगा।', es: 'Les enviaré un recordatorio rápido por Slack de inmediato.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_u08_l112_p1',
      type: 'multiple_choice',
      prompt: 'Select the correct grammatical structure for reporting an instruction:',
      question: 'Select the correct grammatical structure for reporting an instruction:',
      options: [
        'The director asked us to submit the report by noon.',
        'The director asked us submit the report by noon.',
        'The director asked to us to submit the report.',
        'The director asked that we to submit the report.'
      ],
      correctAnswer: 'The director asked us to submit the report by noon.',
      explanation: 'Follow the pattern: "Verb (asked) + Object (us) + to-infinitive (to submit)".'
    },
    {
      id: 'ex_u08_l112_p2',
      type: 'fill_blank',
      prompt: 'Complete with the workplace obligation phrase:',
      sourceSentence: 'We _____ got to meet this tight deadline to satisfy the client.',
      targetSentence: 'We have got to meet this tight deadline to satisfy the client.',
      options: [
        { id: '1', text: 'have', isCorrect: true },
        { id: '2', text: 'are', isCorrect: false },
        { id: '3', text: 'do', isCorrect: false },
        { id: '4', text: 'did', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l112_p3',
      type: 'word_ordering',
      prompt: 'Assemble the task reminder sentence:',
      targetSentence: 'She reminded him to attach the updated budget sheet',
      wordBank: ['She', 'reminded', 'him', 'to', 'attach', 'the', 'updated', 'budget', 'sheet']
    },
    {
      id: 'ex_u08_l112_p4',
      type: 'error_correction',
      prompt: 'Fix the error with the verb pattern in this email excerpt:',
      sourceSentence: 'Our supervisor told to us to complete the compliance training.',
      targetSentence: 'Our supervisor told us to complete the compliance training.',
      explanation: '"Told" takes a direct object without "to": "told us to complete".'
    },
    {
      id: 'ex_u08_l112_p5',
      type: 'translation',
      prompt: 'Translate into English: "कृपया इस प्रोजेक्ट की प्रगति पर मुझे जानकारी देते रहें।"',
      sourceSentence: 'कृपया इस प्रोजेक्ट की प्रगति पर मुझे जानकारी देते रहें।',
      targetSentence: 'Please keep me posted on the progress of this project.',
      wordBank: ['Please', 'keep', 'me', 'posted', 'on', 'the', 'progress', 'of', 'this', 'project']
    },
    {
      id: 'ex_u08_l112_p6',
      type: 'match_pairs',
      prompt: 'Match workplace phrases with their meanings:',
      options: [
        { id: 'm1', text: 'Meet a deadline' },
        { id: 'm1_m', text: 'Finish on time / समय सीमा पर पूरा करना' },
        { id: 'm2', text: 'Keep me posted' },
        { id: 'm2_m', text: 'Update regularly / जानकारी देते रहना' },
        { id: 'm3', text: 'Attachment' },
        { id: 'm3_m', text: 'Email file / संलग्न फाइल' },
        { id: 'm4', text: 'Delegate' },
        { id: 'm4_m', text: 'Assign tasks / कार्य सौंपना' }
      ]
    },
    {
      id: 'ex_u08_l112_p7',
      type: 'listening',
      prompt: 'Listen to the project update:',
      audioText: 'I have finished the first draft of the proposal and emailed it to all stakeholders.',
      targetSentence: 'I have finished the first draft of the proposal and emailed it to all stakeholders.',
      options: [
        { id: '1', text: 'First draft is completed and emailed to stakeholders', isCorrect: true },
        { id: '2', text: 'Proposal is cancelled completely', isCorrect: false },
        { id: '3', text: 'Waiting for client approval next month', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l112_p8',
      type: 'speaking',
      prompt: 'Speak this professional update clearly:',
      targetSentence: 'The project manager asked me to give a quick status update during the meeting.',
      audioText: 'The project manager asked me to give a quick status update during the meeting.'
    },
    {
      id: 'ex_u08_l112_p9',
      type: 'dialogue_completion',
      prompt: 'Choose the best workplace response:',
      sourceSentence: 'Team Lead: When can you share the presentation slides?\nYou: _____',
      targetSentence: 'You: I have already uploaded them to the shared folder and sent an email.',
      options: [
        { id: '1', text: 'I have already uploaded them to the shared folder and sent an email.', isCorrect: true },
        { id: '2', text: 'My flight is delayed by bad weather.', isCorrect: false },
        { id: '3', text: 'I would like to exchange my shoes.', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l112_p10',
      type: 'listen_and_type',
      prompt: 'Listen and type the sentence accurately:',
      audioText: 'We have got to finalize the client presentation today.',
      targetSentence: 'We have got to finalize the client presentation today.',
      wordBank: ['We', 'have', 'got', 'to', 'finalize', 'the', 'client', 'presentation', 'today']
    }
  ],
  review: [
    {
      id: 'ex_u08_l112_r1',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses an assigned task?',
      question: 'Which sentence correctly expresses an assigned task?',
      options: [
        'He advised me to review the contract terms carefully.',
        'He advised to me review the contract terms.',
        'He advised me reviewing the contract terms.',
        'He advised that me to review the terms.'
      ],
      correctAnswer: 'He advised me to review the contract terms carefully.',
      explanation: '"Advise + object + to-infinitive" is the standard verb pattern.'
    },
    {
      id: 'ex_u08_l112_r2',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the business idiom:',
      sourceSentence: 'Let\'s _____ base tomorrow morning to review the new sales figures.',
      targetSentence: 'Let\'s touch base tomorrow morning to review the new sales figures.',
      options: [
        { id: '1', text: 'touch', isCorrect: true },
        { id: '2', text: 'make', isCorrect: false },
        { id: '3', text: 'hold', isCorrect: false },
        { id: '4', text: 'run', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l112_r3',
      type: 'word_ordering',
      prompt: 'Assemble the formal email opening:',
      targetSentence: 'As per our discussion please find the attached project proposal',
      wordBank: ['As', 'per', 'our', 'discussion', 'please', 'find', 'the', 'attached', 'project', 'proposal']
    },
    {
      id: 'ex_u08_l112_r4',
      type: 'error_correction',
      prompt: 'Fix the error in the task sentence:',
      sourceSentence: 'I must to submit the quarterly tax report before 5 PM.',
      targetSentence: 'I must submit the quarterly tax report before 5 PM.',
      explanation: 'Do not use "to" after the modal "must".'
    },
    {
      id: 'ex_u08_l112_r5',
      type: 'translation',
      prompt: 'Translate into English: "हमारे प्रबंधक ने हमें समय सीमा पूरी करने के लिए याद दिलाया।"',
      sourceSentence: 'हमारे प्रबंधक ने हमें समय सीमा पूरी करने के लिए याद दिलाया।',
      targetSentence: 'Our manager reminded us to meet the deadline.',
      wordBank: ['Our', 'manager', 'reminded', 'us', 'to', 'meet', 'the', 'deadline']
    },
    {
      id: 'ex_u08_l112_r6',
      type: 'speaking',
      prompt: 'Speak this sentence with confidence:',
      targetSentence: 'We have made steady progress and resolved all technical blockers.',
      audioText: 'We have made steady progress and resolved all technical blockers.'
    },
    {
      id: 'ex_u08_l112_r7',
      type: 'recognition',
      prompt: 'Identify the document containing official meeting records:',
      question: 'What are the official written notes of a meeting called?',
      options: ['Meeting minutes', 'Meeting receipt'],
      correctAnswer: 'Meeting minutes',
      explanation: '"Minutes" are the official recorded summary of discussions and decisions.'
    },
    {
      id: 'ex_u08_l112_r8',
      type: 'fill_blank',
      prompt: 'Select the correct noun for a major achievement milestone:',
      sourceSentence: 'Securing the international contract was a major _____ for our company.',
      targetSentence: 'Securing the international contract was a major milestone for our company.',
      options: [
        { id: '1', text: 'milestone', isCorrect: true },
        { id: '2', text: 'attachment', isCorrect: false },
        { id: '3', text: 'agenda', isCorrect: false },
        { id: '4', text: 'briefing', isCorrect: false }
      ]
    }
  ],
  assessment: [
    {
      id: 'ex_u08_l112_a1',
      type: 'multiple_choice',
      prompt: 'Choose the sentence with correct verb complementation:',
      question: 'Choose the sentence with correct verb complementation:',
      options: [
        'The team leader reminded everyone to update their task status.',
        'The team leader reminded to everyone update status.',
        'The team leader reminded everyone updating their task.',
        'The team leader told to everyone to update status.'
      ],
      correctAnswer: 'The team leader reminded everyone to update their task status.',
      explanation: '"Remind + someone + to do something" is the accurate construction.'
    },
    {
      id: 'ex_u08_l112_a2',
      type: 'word_ordering',
      prompt: 'Construct the assessment statement:',
      targetSentence: 'I have got to email the client before the end of the day',
      wordBank: ['I', 'have', 'got', 'to', 'email', 'the', 'client', 'before', 'the', 'end', 'of', 'the', 'day']
    },
    {
      id: 'ex_u08_l112_a3',
      type: 'fill_blank',
      prompt: 'Complete with the appropriate professional term:',
      sourceSentence: 'Effective managers know how to _____ tasks to trusted team members.',
      targetSentence: 'Effective managers know how to delegate tasks to trusted team members.',
      options: [
        { id: '1', text: 'delegate', isCorrect: true },
        { id: '2', text: 'reimburse', isCorrect: false },
        { id: '3', text: 'cancel', isCorrect: false },
        { id: '4', text: 'flicker', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l112_a4',
      type: 'translation',
      prompt: 'Translate into English: "उसने मुझे ईमेल अटैचमेंट में संशोधित बजट की समीक्षा करने के लिए कहा।"',
      sourceSentence: 'उसने मुझे ईमेल अटैचमेंट में संशोधित बजट की समीक्षा करने के लिए कहा।',
      targetSentence: 'She asked me to review the revised budget in the email attachment.',
      wordBank: ['She', 'asked', 'me', 'to', 'review', 'the', 'revised', 'budget', 'in', 'the', 'email', 'attachment']
    },
    {
      id: 'ex_u08_l112_a5',
      type: 'error_correction',
      prompt: 'Find and fix the error in the sentence:',
      sourceSentence: 'My colleague asked me send the meeting agenda to everyone.',
      targetSentence: 'My colleague asked me to send the meeting agenda to everyone.',
      explanation: 'Insert "to" before the base verb: "asked me to send".'
    },
    {
      id: 'ex_u08_l112_a6',
      type: 'listening',
      prompt: 'Listen to the coworker update:',
      audioText: 'I have completed the testing phase and I am now preparing the deployment documentation.',
      targetSentence: 'I have completed the testing phase and I am now preparing the deployment documentation.',
      options: [
        { id: '1', text: 'Testing is done and preparing deployment documents', isCorrect: true },
        { id: '2', text: 'Testing has been delayed by three months', isCorrect: false },
        { id: '3', text: 'Waiting to start testing next year', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l112_a7',
      type: 'speaking',
      prompt: 'Speak this mastery statement clearly:',
      targetSentence: 'As per our discussion, I have emailed the finalized proposal to all team members.',
      audioText: 'As per our discussion, I have emailed the finalized proposal to all team members.'
    },
    {
      id: 'ex_u08_l112_a8',
      type: 'personal_production',
      prompt: 'Write a two-sentence workplace update email reporting task progress to your manager:',
      targetSentence: 'Hi Daniel, I have completed the presentation slides and attached them to this email. Please let me know if you would like any revisions.'
    }
  ]
};

// =========================================================================
// LESSON 113: Appointments, Scheduling & Rescheduling Meetings
// =========================================================================
export const LESSON_113_CONFIG: LessonConfigA2 = {
  num: 113,
  title: 'Appointments, Scheduling & Rescheduling Meetings',
  icon: '📅',
  estMin: 25,
  objTitle: 'Arranging Professional & Medical Appointments, Rescheduling & Confirming Dates',
  objDesc: 'Schedule doctor consultations, job interviews, client meetings, push back or bring forward appointment times, and confirm calendar dates using polite modal inquiries.',
  objHi: 'अपॉइंटमेंट तय करना, समय बदलना (रीशेड्यूल) और तिथियों की पुष्टि करना सीखें।',
  objEs: 'Programar citas médicas y profesionales, reprogramar horarios y confirmar fechas con modales educados.',
  canDo: [
    'I can book, reschedule, or cancel a doctor\'s appointment or business meeting.',
    'I can use polite inquiry structures like "Would it be possible to..." and "Could we reschedule for...".',
    'I can use phrasal verbs for calendar adjustments ("push back", "bring forward", "call off").',
    'I can confirm times, dates, meeting locations, and video call links clearly.'
  ],
  canDoHi: [
    'मैं डॉक्टर या पेशेवर बैठक के लिए समय ले सकता हूँ, बदल सकता हूँ या रद्द कर सकता हूँ।',
    'मैं "Would it be possible to..." का उपयोग करके विनम्रता से समय बदलने का अनुरोध कर सकता हूँ।',
    'मैं कैलेंडर में समय आगे-पीछे करने के लिए "push back" और "bring forward" का उपयोग कर सकता हूँ।',
    'मैं समय, तिथि और मीटिंग लिंक की पुष्टि स्पष्ट रूप से कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo programar, reprogramar o cancelar citas médicas o profesionales.',
    'Puedo usar preguntas educadas como "Would it be possible to...".',
    'Puedo usar verbos frasales como "push back" y "bring forward".',
    'Puedo confirmar horarios, fechas y enlaces de videollamadas con claridad.'
  ],
  vocab: [
    { w: 'appointment', p: '/əˈpɔɪntmənt/', m: 'an arrangement to meet someone at a particular time and place', hi: 'नियत समय / अपॉइंटमेंट', es: 'cita', fr: 'rendez-vous', de: 'Termin', pt: 'consulta / compromisso', zh: '预约 / 约会', ar: 'موعد', ja: '予約 / 約束', ru: 'прием / встреча', ex: 'I have a dentist appointment on Thursday at 3 PM.', exHi: 'गुरुवार को दोपहर 3 बजे मेरा डेंटिस्ट का अपॉइंटमेंट है।', exEs: 'Tengo una cita con el dentista el jueves a las 3 PM.', ic: '🦷' },
    { w: 'reschedule', p: '/ˌriːˈskedʒuːl/', m: 'change the time or date of a planned event', hi: 'समय बदलना / पुनर्निर्धारित करना', es: 'reprogramar', fr: 'reprogrammer', de: 'verschieben / umbuchen', pt: 'remarcar', zh: '重新安排时间', ar: 'إعادة جدولة', ja: '日程を変更する', ru: 'перенести (встречу)', ex: 'Could we reschedule our meeting to Friday morning?', exHi: 'क्या हम अपनी बैठक शुक्रवार सुबह के लिए पुनर्निर्धारित कर सकते हैं?', exEs: '¿Podríamos reprogramar nuestra reunión para el viernes?', ic: '🔄' },
    { w: 'available', p: '/əˈveɪləbl/', m: 'able to be used or obtained; not busy', hi: 'उपलब्ध / खाली', es: 'disponible / libre', fr: 'disponible', de: 'verfügbar / frei', pt: 'disponível', zh: '有空的 / 可用的', ar: 'متاح / متفرغ', ja: '空いている / 都合が良い', ru: 'свободный / доступный', ex: 'Are you available for a quick phone call at two o\'clock?', exHi: 'क्या आप दो बजे एक संक्षिप्त फोन कॉल के लिए उपलब्ध हैं?', exEs: '¿Estás disponible para una llamada rápida a las dos?', ic: '🟢' },
    { w: 'confirm', p: '/kənˈfɜːm/', m: 'establish the truth or correctness of a booking or schedule', hi: 'पुष्टि करना', es: 'confirmar', fr: 'confirmer', de: 'bestätigen', pt: 'confirmar', zh: '确认', ar: 'تأكيد', ja: '確認する', ru: 'подтверждать', ex: 'I am writing to confirm our consultation on Monday.', exHi: 'मैं सोमवार को हमारे परामर्श की पुष्टि करने के लिए लिख रहा हूँ।', exEs: 'Escribo para confirmar nuestra consulta el lunes.', ic: '✔️' },
    { w: 'cancel', p: '/ˈkænsl/', m: 'decide or announce that a planned event will not take place', hi: 'रद्द करना', es: 'cancelar', fr: 'annuler', de: 'absagen / stornieren', pt: 'cancelar', zh: '取消', ar: 'إلغاء', ja: 'キャンセルする', ru: 'отменять', ex: 'I am afraid I have to cancel my appointment due to illness.', exHi: 'मुझे खेद है कि बीमारी के कारण मुझे अपना अपॉइंटमेंट रद्द करना पड़ रहा है।', exEs: 'Me temo que debo cancelar mi cita por enfermedad.', ic: '❌' },
    { w: 'postpone', p: '/pəˈspəʊn/', m: 'cause or arrange for something to take place at a later time', hi: 'टालना / स्थगित करना', es: 'posponer / aplazar', fr: 'reporter', de: 'aufschieben / verschieben', pt: 'adiar', zh: '推迟', ar: 'تأجيل', ja: '延期する', ru: 'откладывать / переносить', ex: 'We had to postpone the interview until next week.', exHi: 'हमें साक्षात्कार को अगले सप्ताह तक के लिए स्थगित करना पड़ा।', exEs: 'Tuvimos que posponer la entrevista hasta la próxima semana.', ic: '⏳' },
    { w: 'convenient', p: '/kənˈviːniənt/', m: 'fitting in well with a person\'s needs or schedule', hi: 'सुविधाजनक / उपयुक्त', es: 'conveniente / cómodo', fr: 'pratique / convenable', de: 'passend / günstig', pt: 'conveniente', zh: '方便的 / 合适的', ar: 'مناسب', ja: '都合の良い', ru: 'удобный', ex: 'Is ten in the morning convenient for you?', exHi: 'क्या सुबह दस बजे का समय आपके लिए सुविधाजनक है?', exEs: '¿Las diez de la mañana te resulta conveniente?', ic: '👍' },
    { w: 'consultation', p: '/ˌkɒnslˈteɪʃn/', m: 'a meeting with an expert, such as a medical doctor or lawyer', hi: 'परामर्श / सलाह सत्र', es: 'consulta', fr: 'consultation', de: 'Beratungsgespräch', pt: 'consulta', zh: '咨询 / 门诊', ar: 'استشارة', ja: '診察 / 相談', ru: 'консультация', ex: 'The initial consultation lasts approximately thirty minutes.', exHi: 'प्रारंभिक परामर्श लगभग तीस मिनट तक चलता है।', exEs: 'La consulta inicial dura unos treinta minutos.', ic: '🩺' },
    { w: 'receptionist', p: '/rɪˈsepʃənɪst/', m: 'a person employed to greet visitors and answer the telephone', hi: 'स्वागतकर्ता / रिसेप्शनिस्ट', es: 'recepcionista', fr: 'réceptionniste', de: 'Empfangskraft', pt: 'recepcionista', zh: '前台接待员', ar: 'موظف استقبال', ja: '受付係', ru: 'администратор / секретарь', ex: 'The clinic receptionist booked my check-up for next Tuesday.', exHi: 'क्लिनिक रिसेप्शनिस्ट ने अगले मंगलवार के लिए मेरा चेक-अप बुक किया।', exEs: 'La recepcionista reservó mi revisión para el martes.', ic: '👩‍💼' },
    { w: 'calendar', p: '/ˈkælɪndər/', m: 'a chart or schedule showing days, weeks, and months', hi: 'कैलेंडर / पंचांग', es: 'calendario', fr: 'calendrier', de: 'Kalender', pt: 'calendário', zh: '日历 / 日程表', ar: 'تقويم', ja: 'カレンダー', ru: 'календарь', ex: 'Let me check my calendar for open time slots.', exHi: 'मुझे खाली समय स्लॉट के लिए अपना कैलेंडर देखने दीजिए।', exEs: 'Déjame revisar mi calendario para ver horarios libres.', ic: '📅' },
    { w: 'clash', p: '/klæʃ/', m: 'a conflict between two events scheduled for the same time', hi: 'समय का टकराव / ओवरलैप', es: 'conflicto de horarios / coincidencia', fr: 'conflit d\'horaires', de: 'Terminkollision', pt: 'conflito de horários', zh: '时间冲突', ar: 'تضارب في المواعيد', ja: '予定の重複', ru: 'накладка / несовпадение по времени', ex: 'I have a schedule clash between two team meetings at 2 PM.', exHi: 'दोपहर 2 बजे दो टीम बैठकों के बीच मेरे समय का टकराव है।', exEs: 'Tengo un choque de horarios entre dos reuniones a las 2 PM.', ic: '💥' },
    { w: 'slot', p: '/slɒt/', m: 'an allocated time in a schedule or timetable', hi: 'समय स्लॉट / खाली समय', es: 'espacio de tiempo / hueco', fr: 'créneau', de: 'Zeitfenster / Slot', pt: 'horário / vaga', zh: '时间段', ar: 'فترة زمنية متاحة', ja: '時間枠', ru: 'временной интервал', ex: 'The doctor has an open slot at 11:30 AM tomorrow.', exHi: 'कल सुबह 11:30 बजे डॉक्टर के पास एक समय स्लॉट खाली है।', exEs: 'El médico tiene un espacio libre a las 11:30 AM mañana.', ic: '🪟' },
    { w: 'prior', p: '/ˈpraɪər/', m: 'existing or coming before in time or order', hi: 'पूर्व / पहले का', es: 'previo / anterior', fr: 'préalable / antérieur', de: 'vorherig', pt: 'prévio / anterior', zh: '先前的', ar: 'سابق', ja: '前の / 事前の', ru: 'предварительный', ex: 'I have a prior commitment and cannot attend the lunch.', exHi: 'मेरी पहले से एक प्रतिबद्धता है और मैं लंच में शामिल नहीं हो सकता।', exEs: 'Tengo un compromiso previo y no puedo asistir al almuerzo.', ic: '📌' },
    { w: 'interview', p: '/ˈɪntəvjuː/', m: 'a formal meeting in which one is questioned about suitability for a job', hi: 'साक्षात्कार (इंटरव्यू)', es: 'entrevista', fr: 'entretien d\'embauche', de: 'Vorstellungsgespräch', pt: 'entrevista', zh: '面试', ar: 'مقابلة شخصية', ja: '面接', ru: 'собеседование / интервью', ex: 'My job interview with the tech company is scheduled for 10 AM.', exHi: 'टेक कंपनी के साथ मेरा जॉब इंटरव्यू सुबह 10 बजे तय है।', exEs: 'Mi entrevista de trabajo está programada para las 10 AM.', ic: '💼' },
    { w: 'reminder', p: '/rɪˈmaɪndər/', m: 'a notification sent to remind someone of an upcoming event', hi: 'याद दिलाने वाला संदेश', es: 'recordatorio', fr: 'rappel', de: 'Erinnerung', pt: 'lembrete', zh: '提醒', ar: 'تذكير', ja: 'お知らせ', ru: 'напоминание', ex: 'The clinic sent an SMS reminder 24 hours before my visit.', exHi: 'क्लिनिक ने मेरी यात्रा से 24 घंटे पहले एक एसएमएस रिमाइंडर भेजा।', exEs: 'La clínica envió un SMS de recordatorio 24 horas antes.', ic: '📲' },
    { w: 'tentative', p: '/ˈtentətɪv/', m: 'not certain or fixed; provisional', hi: 'अस्थायी / संभावित', es: 'tentativo / provisional', fr: 'provisoire', de: 'vorläufig', pt: 'tentativo / provisório', zh: '暂定的', ar: 'مؤقت / غير نهائي', ja: '仮の / 暫定的な', ru: 'предварительный', ex: 'We set a tentative date for the conference for next month.', exHi: 'हमने अगले महीने के लिए सम्मेलन की एक संभावित तारीख तय की।', exEs: 'Fijamos una fecha tentativa para la conferencia.', ic: '📝' },
    { w: 'punctual', p: '/ˈpʌŋktʃuəl/', m: 'happening or doing something at the agreed or proper time', hi: 'समय का पाबंद', es: 'puntual', fr: 'ponctuel', de: 'pünktlich', pt: 'pontual', zh: '守时的', ar: 'دقيق في المواعيد', ja: '時間を守る', ru: 'пунктуальный', ex: 'Please be punctual as the doctor has back-to-back patients.', exHi: 'कृपया समय के पाबंद रहें क्योंकि डॉक्टर के पास लगातार मरीज हैं।', exEs: 'Por favor sea puntual ya que el médico tiene citas seguidas.', ic: '⏱️' },
    { w: 'urgent', p: '/ˈɜːdʒənt/', m: 'requiring immediate attention', hi: 'अति आवश्यक', es: 'urgente', fr: 'urgent', de: 'dringend', pt: 'urgente', zh: '紧急的', ar: 'عاجل', ja: '緊急の', ru: 'срочный', ex: 'Do you have an urgent appointment slot for today?', exHi: 'क्या आपके पास आज के लिए कोई आपातकालीन अपॉइंटमेंट स्लॉट है?', exEs: '¿Tienen un espacio de cita urgente para hoy?', ic: '🚨' },
    { w: 'in advance', p: '/ɪn ədˈvɑːns/', m: 'ahead of time; before a particular date or event', hi: 'पहले से / अग्रिम में', es: 'con antelación / por adelantado', fr: 'à l\'avance', de: 'im Voraus', pt: 'com antecedência', zh: '提前', ar: 'مقدماً', ja: '事前に', ru: 'заранее', ex: 'Please notify us at least 24 hours in advance if you cancel.', exHi: 'यदि आप रद्द करते हैं तो कृपया कम से कम 24 घंटे पहले हमें सूचित करें।', exEs: 'Por favor notifique con al menos 24 horas de antelación.', ic: '⏳' },
    { w: 'invitation', p: '/ˌɪnvɪˈteɪʃn/', m: 'a written or digital request inviting someone to attend a meeting', hi: 'निमंत्रण / आमंत्रण', es: 'invitación', fr: 'invitation', de: 'Einladung', pt: 'convite', zh: '邀请', ar: 'دعوة', ja: '招待', ru: 'приглашение', ex: 'I sent you a Google Calendar invitation with the video link.', exHi: 'मैंने आपको वीडियो लिंक के साथ Google कैलेंडर आमंत्रण भेजा है।', exEs: 'Te envié una invitación de Google Calendar con el enlace.', ic: '✉️' }
  ],
  chunks: [
    { phrase: 'would it be possible to', meaning: 'polite formula for requesting a change or appointment', hi: 'क्या यह संभव होगा कि...', es: '¿sería posible...?', fr: 'serait-il possible de...?', de: 'wäre es möglich, ...?', pt: 'seria possível...?', zh: '请问是否可以...', ar: 'هل سيكون من الممكن...', ja: '〜することは可能でしょうか？', ru: 'было бы возможно...', note: 'Followed by base verb: "Would it be possible to reschedule for Tuesday?"', ic: '❓' },
    { phrase: 'push back the meeting', meaning: 'postpone a meeting to a later time or date', hi: 'बैठक का समय आगे बढ़ाना / टालना', es: 'posponer / retrasar la reunión', fr: 'repousser la réunion', de: 'das Meeting nach hinten verschieben', pt: 'adiar a reunião', zh: '推迟会议', ar: 'تأجيل الاجتماع لوقت لاحق', ja: '会議の時間を遅らせる', ru: 'перенести встречу на более позднее время', note: '"Could we push back our meeting to 4 PM?"', ic: '➡️' },
    { phrase: 'bring forward the appointment', meaning: 'move an appointment to an earlier time or date', hi: 'अपॉइंटमेंट का समय पहले करना', es: 'adelantar la cita', fr: 'avancer le rendez-vous', de: 'den Termin vorverlegen', pt: 'adiantar a consulta', zh: '提前预约时间', ar: 'تقديم موعد اللقاء', ja: '予約の時間を早める', ru: 'перенести встречу на более раннее время', note: '"The doctor asked to bring forward the checkup to 9 AM."', ic: '⬅️' },
    { phrase: 'have a prior commitment', meaning: 'already have a previous obligation or plan', hi: 'पहले से कोई व्यस्तता/प्रतिबद्धता होना', es: 'tener un compromiso previo', fr: 'avoir un engagement préalable', de: 'eine vorherige Verpflichtung haben', pt: 'ter um compromisso prévio', zh: '已有其他安排', ar: 'لدي التزام سابق', ja: '先約がある', ru: 'иметь предварительную договоренность', note: 'Diplomatic professional explanation for declining a time slot.', ic: '📌' },
    { phrase: 'does that time suit you', meaning: 'asking if a proposed time is convenient', hi: 'क्या यह समय आपके लिए अनुकूल है?', es: '¿te viene bien ese horario?', fr: 'est-ce que cette heure vous convient ?', de: 'passt Ihnen diese Zeit?', pt: 'esse horário é bom para você?', zh: '那个时间合适吗？', ar: 'هل يناسبك هذا الوقت؟', ja: 'その時間でご都合はよろしいですか？', ru: 'подходит ли вам это время?', note: 'Standard phrase when offering options.', ic: '⏱️' },
    { phrase: 'let me check my schedule', meaning: 'pause to inspect one\'s calendar availability', hi: 'मुझे अपना शेड्यूल देखने दीजिए', es: 'déjame revisar mi agenda', fr: 'laissez-moi vérifier mon emploi du temps', de: 'lassen Sie mich in meinen Kalender schauen', pt: 'deixe-me verificar minha agenda', zh: '让我查一下日程', ar: 'دعني أتحقق من جدول مواعيدي', ja: 'スケジュールを確認させてください', ru: 'позвольте свериться с расписанием', note: 'Natural conversational placeholder during scheduling.', ic: '📅' },
    { phrase: 'pencil someone in for', meaning: 'make a tentative booking in a calendar', hi: 'कैलेंडर में अस्थायी समय दर्ज करना', es: 'anotar provisionalmente a alguien para', fr: 'noter provisoirement quelqu\'un pour', de: 'jemanden vorläufig eintragen für', pt: 'marcar provisoriamente alguém para', zh: '暂定某人的时间', ar: 'تسجيل موعد مبدئي', ja: '仮の予定を入れておく', ru: 'предварительно записать кого-то на', note: 'Idiomatic scheduling expression.', ic: '✏️' },
    { phrase: 'call off the meeting', meaning: 'cancel an organized meeting permanently', hi: 'बैठक पूरी तरह रद्द करना', es: 'cancelar la reunión', fr: 'annuler la réunion', de: 'das Meeting absagen', pt: 'cancelar a reunião', zh: '取消会议', ar: 'إلغاء الاجتماع', ja: '会議を中止する', ru: 'отменить встречу', note: 'Phrasal verb synonymous with "cancel".', ic: '🚫' }
  ],
  grammar: {
    title: 'Polite Inquiries (Would it be possible to...), Time Prepositions (At, On, In) & Phrasal Verbs',
    concept: 'Using indirect questions for scheduling, applying correct time prepositions, and manipulating appointments with phrasal verbs (push back, bring forward).',
    patterns: [
      {
        title: 'Polite Rescheduling Inquiries with "Would it be possible to..."',
        structure: 'Would it be possible to + [reschedule / move / change] + Noun + to + Day / Time + ?',
        rule: 'Use conditional "Would it be possible to" to sound extremely courteous when asking to change a confirmed booking.',
        examples: [
          { en: 'Would it be possible to reschedule my appointment to Thursday?', hi: 'क्या मेरे अपॉइंटमेंट को गुरुवार के लिए पुनर्निर्धारित करना संभव होगा?', es: '¿Sería posible reprogramar mi cita para el jueves?' },
          { en: 'Would it be possible to push back the team meeting by thirty minutes?', hi: 'क्या टीम मीटिंग को तीस मिनट आगे बढ़ाना संभव होगा?', es: '¿Sería posible retrasar la reunión de equipo 30 minutos?' }
        ]
      },
      {
        title: 'Time Prepositions in Scheduling (At, On, In)',
        structure: 'at + exact time / on + day/date / in + month/year/duration',
        rule: 'Use "at" for clock times (at 3 PM), "on" for days and dates (on Friday, on June 5th), and "in" for durations (in 10 minutes).',
        examples: [
          { en: 'The interview is on Tuesday at 10:30 AM.', hi: 'साक्षात्कार मंगलवार को सुबह 10:30 बजे है।', es: 'La entrevista es el martes a las 10:30 AM.' },
          { en: 'I will be ready in fifteen minutes.', hi: 'मैं पंद्रह मिनट में तैयार हो जाऊँगा।', es: 'Estaré listo en quince minutos.' }
        ]
      },
      {
        title: 'Phrasal Verbs for Calendar Adjustments (Push Back vs Bring Forward)',
        structure: 'Subject + push back (later) / bring forward (earlier) + Object',
        rule: '"Push back" means postpone to a later hour/day; "bring forward" means advance to an earlier hour/day.',
        examples: [
          { en: 'We had to push back the project launch to November.', hi: 'हमें प्रोजेक्ट लॉन्च को नवंबर तक टालना पड़ा।', es: 'Tuvimos que retrasar el lanzamiento a noviembre.' },
          { en: 'Can we bring forward our call from 4 PM to 2 PM?', hi: 'क्या हम अपनी कॉल को शाम 4 बजे से घटाकर दोपहर 2 बजे कर सकते हैं?', es: '¿Podemos adelantar nuestra llamada de las 4 PM a las 2 PM?' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'I have an appointment in Monday at 3 PM.',
      cor: 'I have an appointment on Monday at 3 PM.',
      exp: 'Use the preposition "on" for days of the week, not "in".',
      hi: 'सप्ताह के दिनों के साथ "on" का प्रयोग करें: "on Monday"।'
    },
    {
      inc: 'Would it be possible to reschedule at next week?',
      cor: 'Would it be possible to reschedule for next week?',
      exp: 'Use "reschedule for [time/day]", not "reschedule at".',
      hi: 'तारीख बदलने के लिए "reschedule for next week" का प्रयोग करें।'
    },
    {
      inc: 'I want to cancel off the appointment.',
      cor: 'I want to call off the appointment. / I want to cancel the appointment.',
      exp: 'Use either "call off" or "cancel", but never combine them as "cancel off".',
      hi: 'या तो "call off" कहें या "cancel", "cancel off" गलत है।'
    },
    {
      inc: 'Let\'s push forward the meeting to tomorrow.',
      cor: 'Let\'s push back the meeting to tomorrow. / Let\'s bring forward the meeting.',
      exp: '"Push back" moves an event later; "bring forward" moves it earlier. "Push forward" is incorrect for postponing.',
      hi: 'समय आगे बढ़ाने (टालने) के लिए "push back" कहें, "bring forward" पहले करने के लिए।'
    },
    {
      inc: 'I am not available on that hour.',
      cor: 'I am not available at that time.',
      exp: 'Use "at that time", not "on that hour".',
      hi: 'उस समय उपलब्ध न होने के लिए "at that time" कहें।'
    }
  ],
  dialogues: [
    {
      title: 'Rescheduling a Doctor\'s Appointment',
      context: 'Naveen calls the medical clinic to reschedule his regular dental checkup.',
      charA: { name: 'Naveen', av: '👨', role: 'Patient' },
      charB: { name: 'Clinic Receptionist', av: '👩‍💼', role: 'Medical Secretary' },
      turns: [
        { spk: 'Naveen', text: 'Good morning. My name is Naveen Patel. I have a dental appointment booked for tomorrow at 10 AM, but I have got an urgent work conflict.', hi: 'शुभ प्रभात। मेरा नाम नवीन पटेल है। कल सुबह 10 बजे मेरा डेंटल अपॉइंटमेंट बुक है, लेकिन मुझे काम का एक जरूरी काम आ गया है।', es: 'Buenos días. Me llamo Naveen Patel. Tengo cita dental mañana a las 10 AM, pero tengo un conflicto de trabajo.' },
        { spk: 'Clinic Receptionist', text: 'Good morning, Mr. Patel. Would you like to reschedule for later this week?', hi: 'शुभ प्रभात, मिस्टर पटेल। क्या आप इस सप्ताह के अंत में समय बदलना चाहेंगे?', es: 'Buenos días, Sr. Patel. ¿Le gustaría reprogramar para más adelante esta semana?' },
        { spk: 'Naveen', text: 'Yes, please. Would it be possible to move it to Thursday afternoon after 2 PM?', hi: 'हाँ, कृपया। क्या इसे गुरुवार दोपहर 2 बजे के बाद करना संभव होगा?', es: 'Sí, por favor. ¿Sería posible pasarla al jueves por la tarde después de las 2 PM?' },
        { spk: 'Clinic Receptionist', text: 'Let me check... Dr. Evans has an opening on Thursday at 3:30 PM. Does that time suit you?', hi: 'मुझे देखने दीजिए... डॉ. इवांस के पास गुरुवार को दोपहर 3:30 बजे एक समय खाली है। क्या यह समय आपके अनुकूल है?', es: 'Déjeme ver... El Dr. Evans tiene un hueco el jueves a las 3:30 PM. ¿Le viene bien?' },
        { spk: 'Naveen', text: 'Thursday at 3:30 PM is perfect. Thank you for your flexibility!', hi: 'गुरुवार को दोपहर 3:30 बजे का समय बिल्कुल सही है। आपके सहयोग के लिए धन्यवाद!', es: 'El jueves a las 3:30 PM es perfecto. ¡Gracias por su flexibilidad!' }
      ]
    },
    {
      title: 'Adjusting a Virtual Team Meeting',
      context: 'Lucas and Miriam coordinate a client video call across different time zones.',
      charA: { name: 'Lucas', av: '👨‍💻', role: 'Account Manager' },
      charB: { name: 'Miriam', av: '👩‍💻', role: 'Technical Lead' },
      turns: [
        { spk: 'Lucas', text: 'Hi Miriam, the client requested to bring forward our sync from 5 PM to 3 PM today. Are you available?', hi: 'नमस्ते मरियम, क्लाइंट ने आज हमारी मीटिंग को शाम 5 बजे से घटाकर दोपहर 3 बजे करने का अनुरोध किया है। क्या आप उपलब्ध हैं?', es: 'Hola Miriam, el cliente pidió adelantar nuestra sincronización de las 5 PM a las 3 PM hoy. ¿Estás libre?' },
        { spk: 'Miriam', text: 'Let me check my calendar... I have a clash at 3 PM, but 3:30 PM is completely open for me.', hi: 'मुझे अपना कैलेंडर देखने दो... 3 बजे मेरी एक अन्य मीटिंग है, लेकिन 3:30 बजे मैं पूरी तरह से खाली हूँ।', es: 'Déjame revisar mi calendario... Tengo un cruce a las 3 PM, pero 3:30 PM está libre.' },
        { spk: 'Lucas', text: 'Great! I will update the Google Calendar invitation and send the updated link to the client.', hi: 'बहुत बढ़िया! मैं Google कैलेंडर आमंत्रण अपडेट कर दूँगा और क्लाइंट को अपडेटेड लिंक भेज दूँगा।', es: '¡Genial! Actualizaré la invitación de Google Calendar y enviaré el enlace al cliente.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_u08_l113_p1',
      type: 'multiple_choice',
      prompt: 'Select the correct question for polite rescheduling:',
      question: 'Select the correct question for polite rescheduling:',
      options: [
        'Would it be possible to reschedule our meeting for Friday?',
        'Would it be possible rescheduling our meeting at Friday?',
        'Is it possible to reschedule on Friday morning time?',
        'Can we to reschedule for Friday?'
      ],
      correctAnswer: 'Would it be possible to reschedule our meeting for Friday?',
      explanation: '"Would it be possible to reschedule... for [day]" is the standard polite formula.'
    },
    {
      id: 'ex_u08_l113_p2',
      type: 'fill_blank',
      prompt: 'Complete with the right time preposition:',
      sourceSentence: 'Our consultation is scheduled _____ Wednesday at four o\'clock.',
      targetSentence: 'Our consultation is scheduled on Wednesday at four o\'clock.',
      options: [
        { id: '1', text: 'on', isCorrect: true },
        { id: '2', text: 'in', isCorrect: false },
        { id: '3', text: 'at', isCorrect: false },
        { id: '4', text: 'by', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l113_p3',
      type: 'word_ordering',
      prompt: 'Assemble the sentence for moving a meeting earlier:',
      targetSentence: 'Could we bring forward our video call to two o\'clock',
      wordBank: ['Could', 'we', 'bring', 'forward', 'our', 'video', 'call', 'to', 'two', 'o\'clock']
    },
    {
      id: 'ex_u08_l113_p4',
      type: 'error_correction',
      prompt: 'Fix the phrasal verb confusion in the sentence:',
      sourceSentence: 'We have to push forward the meeting to next week because of sickness.',
      targetSentence: 'We have to push back the meeting to next week because of sickness.',
      explanation: 'Use "push back" to move a meeting to a later date.'
    },
    {
      id: 'ex_u08_l113_p5',
      type: 'translation',
      prompt: 'Translate into English: "क्या सुबह 11:30 बजे का समय आपके लिए सुविधाजनक है?"',
      sourceSentence: 'क्या सुबह 11:30 बजे का समय आपके लिए सुविधाजनक है?',
      targetSentence: 'Is 11:30 AM convenient for you?',
      wordBank: ['Is', '11:30', 'AM', 'convenient', 'for', 'you', 'to', 'available']
    },
    {
      id: 'ex_u08_l113_p6',
      type: 'match_pairs',
      prompt: 'Match appointment terms with their meanings:',
      options: [
        { id: 'm1', text: 'Push back' },
        { id: 'm1_m', text: 'Move to a later time / आगे बढ़ाना' },
        { id: 'm2', text: 'Bring forward' },
        { id: 'm2_m', text: 'Move to an earlier time / पहले करना' },
        { id: 'm3', text: 'Call off' },
        { id: 'm3_m', text: 'Cancel permanently / रद्द करना' },
        { id: 'm4', text: 'Schedule clash' },
        { id: 'm4_m', text: 'Conflicting times / समय का टकराव' }
      ]
    },
    {
      id: 'ex_u08_l113_p7',
      type: 'listening',
      prompt: 'Listen to the clinic receptionist:',
      audioText: 'Your appointment is confirmed for Tuesday, October 14th at 9:15 AM with Dr. Evans.',
      targetSentence: 'Your appointment is confirmed for Tuesday, October 14th at 9:15 AM with Dr. Evans.',
      options: [
        { id: '1', text: 'Confirmed for Tuesday, Oct 14th at 9:15 AM', isCorrect: true },
        { id: '2', text: 'Cancelled until next year', isCorrect: false },
        { id: '3', text: 'Moved to Friday afternoon', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l113_p8',
      type: 'speaking',
      prompt: 'Speak this polite rescheduling request clearly:',
      targetSentence: 'Would it be possible to push back our meeting by thirty minutes?',
      audioText: 'Would it be possible to push back our meeting by thirty minutes?'
    },
    {
      id: 'ex_u08_l113_p9',
      type: 'dialogue_completion',
      prompt: 'Choose the appropriate response when declining a time slot politely:',
      sourceSentence: 'Colleague: Are you free for a call at 3 PM?\nYou: _____',
      targetSentence: 'You: I have a prior commitment at 3 PM, but I am free at 4 PM.',
      options: [
        { id: '1', text: 'I have a prior commitment at 3 PM, but I am free at 4 PM.', isCorrect: true },
        { id: '2', text: 'I lost my luggage at the gate.', isCorrect: false },
        { id: '3', text: 'My kettle needs to be fixed.', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l113_p10',
      type: 'listen_and_type',
      prompt: 'Listen and write down the confirmation:',
      audioText: 'I sent you a calendar invite with the video call link.',
      targetSentence: 'I sent you a calendar invite with the video call link.',
      wordBank: ['I', 'sent', 'you', 'a', 'calendar', 'invite', 'with', 'the', 'video', 'call', 'link']
    }
  ],
  review: [
    {
      id: 'ex_u08_l113_r1',
      type: 'multiple_choice',
      prompt: 'Which preposition is used for specific calendar dates (e.g. May 12th)?',
      question: 'Which preposition is used for specific calendar dates (e.g. May 12th)?',
      options: ['On', 'In', 'At', 'By'],
      correctAnswer: 'On',
      explanation: 'Use "on" with dates and days of the week: "on May 12th", "on Monday".'
    },
    {
      id: 'ex_u08_l113_r2',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the phrasal verb for postponing:',
      sourceSentence: 'Can we _____ back our project review until Friday?',
      targetSentence: 'Can we push back our project review until Friday?',
      options: [
        { id: '1', text: 'push', isCorrect: true },
        { id: '2', text: 'bring', isCorrect: false },
        { id: '3', text: 'call', isCorrect: false },
        { id: '4', text: 'make', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l113_r3',
      type: 'word_ordering',
      prompt: 'Assemble the appointment inquiry:',
      targetSentence: 'Does Thursday afternoon at three o\'clock suit you',
      wordBank: ['Does', 'Thursday', 'afternoon', 'at', 'three', 'o\'clock', 'suit', 'you']
    },
    {
      id: 'ex_u08_l113_r4',
      type: 'error_correction',
      prompt: 'Fix the preposition error in the scheduling sentence:',
      sourceSentence: 'The dentist appointment is in Thursday at 10 AM.',
      targetSentence: 'The dentist appointment is on Thursday at 10 AM.',
      explanation: 'Use "on" for days of the week: "on Thursday".'
    },
    {
      id: 'ex_u08_l113_r5',
      type: 'translation',
      prompt: 'Translate into English: "मुझे पहले से एक जरूरी काम है इसलिए मैं नहीं आ सकता।"',
      sourceSentence: 'मुझे पहले से एक जरूरी काम है इसलिए मैं नहीं आ सकता।',
      targetSentence: 'I have a prior commitment so I cannot attend.',
      wordBank: ['I', 'have', 'a', 'prior', 'commitment', 'so', 'I', 'cannot', 'attend']
    },
    {
      id: 'ex_u08_l113_r6',
      type: 'speaking',
      prompt: 'Speak this sentence with clear professional tone:',
      targetSentence: 'I am writing to confirm our job interview on Tuesday at 10:00 AM.',
      audioText: 'I am writing to confirm our job interview on Tuesday at 10:00 AM.'
    },
    {
      id: 'ex_u08_l113_r7',
      type: 'recognition',
      prompt: 'Identify the meaning of "schedule clash":',
      question: 'What does a schedule clash refer to?',
      options: ['Two events booked at the exact same time', 'A broken wall clock in the office'],
      correctAnswer: 'Two events booked at the exact same time',
      explanation: 'A schedule clash happens when two commitments overlap in time.'
    },
    {
      id: 'ex_u08_l113_r8',
      type: 'fill_blank',
      prompt: 'Choose the appropriate phrasal verb:',
      sourceSentence: 'Due to severe weather, the organizers had to _____ off the outdoor festival.',
      targetSentence: 'Due to severe weather, the organizers had to call off the outdoor festival.',
      options: [
        { id: '1', text: 'call', isCorrect: true },
        { id: '2', text: 'push', isCorrect: false },
        { id: '3', text: 'bring', isCorrect: false },
        { id: '4', text: 'take', isCorrect: false }
      ]
    }
  ],
  assessment: [
    {
      id: 'ex_u08_l113_a1',
      type: 'multiple_choice',
      prompt: 'Choose the sentence that correctly asks to move an event earlier:',
      question: 'Choose the sentence that correctly asks to move an event earlier:',
      options: [
        'Could we bring forward our meeting from 4 PM to 2 PM?',
        'Could we push back our meeting to an earlier hour?',
        'Could we call off our meeting to 2 PM?',
        'Could we push forward the appointment earlier?'
      ],
      correctAnswer: 'Could we bring forward our meeting from 4 PM to 2 PM?',
      explanation: '"Bring forward" specifically means to change an event to an earlier time.'
    },
    {
      id: 'ex_u08_l113_a2',
      type: 'word_ordering',
      prompt: 'Construct the assessment statement:',
      targetSentence: 'Please notify the clinic twenty-four hours in advance if you cancel',
      wordBank: ['Please', 'notify', 'the', 'clinic', 'twenty-four', 'hours', 'in', 'advance', 'if', 'you', 'cancel']
    },
    {
      id: 'ex_u08_l113_a3',
      type: 'fill_blank',
      prompt: 'Complete with the appropriate word:',
      sourceSentence: 'The doctor has an available time _____ tomorrow at eleven o\'clock.',
      targetSentence: 'The doctor has an available time slot tomorrow at eleven o\'clock.',
      options: [
        { id: '1', text: 'slot', isCorrect: true },
        { id: '2', text: 'receipt', isCorrect: false },
        { id: '3', text: 'customs', isCorrect: false },
        { id: '4', text: 'fuse', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l113_a4',
      type: 'translation',
      prompt: 'Translate into English: "क्या मेरी नियुक्ति को अगले सोमवार के लिए पुनर्निर्धारित करना संभव होगा?"',
      sourceSentence: 'क्या मेरी नियुक्ति को अगले सोमवार के लिए पुनर्निर्धारित करना संभव होगा?',
      targetSentence: 'Would it be possible to reschedule my appointment for next Monday?',
      wordBank: ['Would', 'it', 'be', 'possible', 'to', 'reschedule', 'my', 'appointment', 'for', 'next', 'Monday']
    },
    {
      id: 'ex_u08_l113_a5',
      type: 'error_correction',
      prompt: 'Find and fix the error in the sentence:',
      sourceSentence: 'I have a job interview in Monday morning at 9 AM.',
      targetSentence: 'I have a job interview on Monday morning at 9 AM.',
      explanation: 'Use "on" for days: "on Monday morning".'
    },
    {
      id: 'ex_u08_l113_a6',
      type: 'listening',
      prompt: 'Listen to the scheduling request:',
      audioText: 'Could we push back our call to 4:30 PM? I am currently running behind schedule in a meeting.',
      targetSentence: 'Could we push back our call to 4:30 PM? I am currently running behind schedule in a meeting.',
      options: [
        { id: '1', text: 'Requesting to push back call to 4:30 PM', isCorrect: true },
        { id: '2', text: 'Cancelling the call permanently', isCorrect: false },
        { id: '3', text: 'Moving the call to 8:00 AM tomorrow', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l113_a7',
      type: 'speaking',
      prompt: 'Speak this mastery statement clearly:',
      targetSentence: 'Would it be possible to reschedule our consultation for Thursday afternoon?',
      audioText: 'Would it be possible to reschedule our consultation for Thursday afternoon?'
    },
    {
      id: 'ex_u08_l113_a8',
      type: 'personal_production',
      prompt: 'Write a two-sentence email requesting to reschedule a meeting due to a schedule clash:',
      targetSentence: 'Dear Sarah, I have a schedule clash tomorrow at 2 PM. Would it be possible to reschedule our meeting for Friday morning at 10 AM?'
    }
  ]
};

// =========================================================================
// LESSON 114: Education, Courses & Learning Experiences
// =========================================================================
export const LESSON_114_CONFIG: LessonConfigA2 = {
  num: 114,
  title: 'Education, Courses & Learning Experiences',
  icon: '🎓',
  estMin: 25,
  objTitle: 'Discussing Past Schooling, Enrolling in Courses & Developing New Skills',
  objDesc: 'Describe school memories, past study habits with "used to", enroll in training courses, and talk about mastering new practical skills using "learn how to + verb".',
  objHi: 'पिछली स्कूली शिक्षा, नए कोर्स में दाखिला लेने और नए कौशल सीखने पर चर्चा करना सीखें।',
  objEs: 'Hablar sobre la educación pasada, inscribirse en cursos y desarrollar habilidades con "used to" y "learn how to + verbo".',
  canDo: [
    'I can describe past schooling routines and habits using "used to + infinitive".',
    'I can discuss current learning goals and enrolling in professional or online courses.',
    'I can express developing abilities using "learn how to [verb]" and "good at [verb-ing]".',
    'I can compare past educational experiences with present study methods.'
  ],
  canDoHi: [
    'मैं "used to + infinitive" का प्रयोग करके पुरानी स्कूली आदतों का वर्णन कर सकता हूँ।',
    'मैं पेशेवर या ऑनलाइन पाठ्यक्रमों में दाखिला लेने के लक्ष्यों पर चर्चा कर सकता हूँ।',
    'मैं "learn how to [verb]" और "good at [verb-ing]" से नई क्षमताओं को व्यक्त कर सकता हूँ।',
    'मैं अतीत और वर्तमान के अध्ययन के तरीकों की तुलना कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir hábitos escolares pasados usando "used to + infinitivo".',
    'Puedo hablar de objetivos de aprendizaje e inscribirme en cursos.',
    'Puedo expresar habilidades con "learn how to [verbo]" y "good at [gerundio]".',
    'Puedo comparar experiencias educativas pasadas con métodos actuales.'
  ],
  vocab: [
    { w: 'enroll', p: '/ɪnˈrəʊl/', m: 'officially register as a student in a course or school', hi: 'दाखिला लेना / नामांकित होना', es: 'matricularse / inscribirse', fr: 's\'inscrire', de: 'sich einschreiben / anmelden', pt: 'matricular-se', zh: '注册 / 报名', ar: 'يسجل / يلتحق', ja: '入学する / 登録する', ru: 'записываться / поступать', ex: 'I decided to enroll in an intensive English speaking course.', exHi: 'मैंने एक गहन अंग्रेजी बोलने वाले पाठ्यक्रम में दाखिला लेने का फैसला किया।', exEs: 'Decidí inscribirme en un curso intensivo de inglés.', ic: '📝' },
    { w: 'curriculum', p: '/kəˈrɪkjələm/', m: 'the subjects comprising a course of study in a school or college', hi: 'पाठ्यक्रम / पाठ्यचर्या', es: 'plan de estudios / currículo', fr: 'programme d\'études', de: 'Lehrplan', pt: 'currículo escolar', zh: '课程大纲', ar: 'منهج دراسي', ja: 'カリキュラム / 履修課程', ru: 'учебная программа', ex: 'The academy curriculum focuses on practical everyday conversation.', exHi: 'अकादमी का पाठ्यक्रम व्यावहारिक दैनिक बातचीत पर केंद्रित है।', exEs: 'El currículo se centra en la conversación práctica diaria.', ic: '📚' },
    { w: 'certificate', p: '/səˈtɪfɪkət/', m: 'an official document certifying a person has completed a course', hi: 'प्रमाणपत्र', es: 'certificado / diploma', fr: 'certificat', de: 'Zertifikat / Urkunde', pt: 'certificado', zh: '证书', ar: 'شهادة', ja: '修了証 / 証明書', ru: 'сертификат / удостоверение', ex: 'You will receive an accredited certificate upon course completion.', exHi: 'कोर्स पूरा होने पर आपको एक मान्यता प्राप्त प्रमाणपत्र प्राप्त होगा।', exEs: 'Recibirás un certificado acreditado al completar el curso.', ic: '📜' },
    { w: 'assignment', p: '/əˈsaɪnmənt/', m: 'a piece of work or task allocated to someone as part of a course of study', hi: 'सत्रीय कार्य / असाइनमेंट', es: 'tarea / trabajo escolar', fr: 'devoir / travail', de: 'Hausaufgabe / Aufgabe', pt: 'trabalho / tarefa', zh: '作业 / 任务', ar: 'واجب دراسي', ja: '課題 / 宿題', ru: 'задание / домашняя работа', ex: 'We must submit our writing assignment by Sunday midnight.', exHi: 'हमें रविवार आधी रात तक अपना लेखन असाइनमेंट जमा करना होगा।', exEs: 'Debemos entregar nuestra tarea de redacción el domingo.', ic: '📄' },
    { w: 'lecture', p: '/ˈlektʃər/', m: 'an educational talk given to an audience of students in a university', hi: 'व्याख्यान / लेक्चर', es: 'clase magistral / conferencia', fr: 'cours magistral', de: 'Vorlesung', pt: 'palestra / aula', zh: '讲座 / 讲课', ar: 'محاضرة', ja: '講義', ru: 'лекция', ex: 'The professor delivered an engaging lecture on modern history.', exHi: 'प्रोफेसर ने आधुनिक इतिहास पर एक आकर्षक व्याख्यान दिया।', exEs: 'El profesor dio una conferencia interesante sobre historia.', ic: '🎓' },
    { w: 'tutor', p: '/ˈtjuːtər/', m: 'a private teacher, typically one who teaches a single student or small group', hi: 'निजी शिक्षक / ट्यूटर', es: 'tutor / profesor particular', fr: 'tuteur / professeur particulier', de: 'Nachhilfelehrer / Tutor', pt: 'tutor / professor particular', zh: '家教 / 导师', ar: 'معلم خاص', ja: '家庭教師 / 指導員', ru: 'репетитор / тьютор', ex: 'My online tutor helps me practice conversational pronunciation.', exHi: 'मेरा ऑनलाइन ट्यूटर मुझे बातचीत के उच्चारण का अभ्यास करने में मदद करता है।', exEs: 'Mi tutor online me ayuda a practicar pronunciación.', ic: '👨‍🏫' },
    { w: 'workshop', p: '/ˈwɜːkʃɒp/', m: 'a meeting at which a group of people engage in intensive discussion and activity', hi: 'कार्यशाला / वर्कशॉप', es: 'taller práctico', fr: 'atelier', de: 'Workshop / Seminar', pt: 'oficina / workshop', zh: '研讨会 / 工作坊', ar: 'ورشة عمل', ja: '講習会 / ワークショップ', ru: 'семинар / практикум', ex: 'I attended a weekend workshop on public speaking skills.', exHi: 'मैंने सार्वजनिक बोलने के कौशल पर एक सप्ताहांत कार्यशाला में भाग लिया।', exEs: 'Asistí a un taller de fin de semana sobre oratoria.', ic: '🛠️' },
    { w: 'qualification', p: '/ˌkwɒlɪfɪˈkeɪʃn/', m: 'a pass of an examination or an official completion of a course', hi: 'योग्यता / शैक्षिक पात्रता', es: 'titulación / cualificación', fr: 'diplôme / qualification', de: 'Qualifikation / Abschluss', pt: 'qualificação', zh: '学历 / 资格', ar: 'مؤهل علمي', ja: '資格', ru: 'квалификация / диплом', ex: 'She holds a professional qualification in project management.', exHi: 'उसके पास प्रोजेक्ट मैनेजमेंट में एक पेशेवर योग्यता है।', exEs: 'Tiene una cualificación profesional en gestión de proyectos.', ic: '🎖️' },
    { w: 'subject', p: '/ˈsʌbdʒɪkt/', m: 'a branch of knowledge studied or taught in a school, college, or university', hi: 'विषय', es: 'materia / asignatura', fr: 'matière', de: 'Schulfach', pt: 'disciplina / matéria', zh: '学科 / 科目', ar: 'مادة دراسية', ja: '教科 / 科目', ru: 'предмет / дисциплина', ex: 'My favorite subject in high school was chemistry.', exHi: 'हाई स्कूल में मेरा पसंदीदा विषय रसायन विज्ञान था।', exEs: 'Mi asignatura favorita en la secundaria era química.', ic: '🔬' },
    { w: 'memorize', p: '/ˈmeməraɪz/', m: 'commit something to memory; learn by heart', hi: 'याद करना / कंठस्थ करना', es: 'memorizar / aprender de memoria', fr: 'mémoriser', de: 'auswendig lernen', pt: 'memorizar / decorar', zh: '熟记 / 背诵', ar: 'يحفظ عن ظهر قلب', ja: '暗記する', ru: 'заучивать наизусть', ex: 'We used to memorize long poems for our literature class.', exHi: 'हम अपनी साहित्य की कक्षा के लिए लंबी कविताएँ याद करते थे।', exEs: 'Solíamos memorizar poemas largos para literatura.', ic: '🧠' },
    { w: 'classmate', p: '/ˈklɑːsmeɪt/', m: 'a person who is in the same class at school or university', hi: 'सहपाठी', es: 'compañero de clase', fr: 'camarade de classe', de: 'Klassenkamerad', pt: 'colega de classe', zh: '同班同学', ar: 'زميل دراسة', ja: 'クラスメート', ru: 'одноклассник / сокурсник', ex: 'I study with my classmates in the campus library.', exHi: 'मैं कैंपस लाइब्रेरी में अपने सहपाठियों के साथ पढ़ाई करता हूँ।', exEs: 'Estudio con mis compañeros en la biblioteca del campus.', ic: '👥' },
    { w: 'degree', p: '/dɪˈɡriː/', m: 'an academic rank conferred by a college or university after examination', hi: 'डिग्री / उपाधि', es: 'título universitario / licenciatura', fr: 'diplôme universitaire', de: 'akademischer Grad / Abschluss', pt: 'diploma / graduação', zh: '学位', ar: 'درجة جامعية', ja: '学位', ru: 'ученая степень / диплом', ex: 'He completed a bachelor\'s degree in computer science.', exHi: 'उसने कंप्यूटर विज्ञान में स्नातक की डिग्री पूरी की।', exEs: 'Completó una licenciatura en ciencias de la computación.', ic: '🎓' },
    { w: 'scholarship', p: '/ˈskɒləʃɪp/', m: 'a grant or payment made to support a student\'s education', hi: 'छात्रवृत्ति / स्कॉलरशिप', es: 'beca de estudios', fr: 'bourse d\'études', de: 'Stipendium', pt: 'bolsa de estudos', zh: '奖学金', ar: 'منحة دراسية', ja: '奨学金', ru: 'стипендия / грант', ex: 'She won a prestigious scholarship to study abroad.', exHi: 'उसने विदेश में अध्ययन करने के लिए एक प्रतिष्ठित छात्रवृत्ति जीती।', exEs: 'Ganó una prestigiosa beca para estudiar en el extranjero.', ic: '🏆' },
    { w: 'grade', p: '/ɡreɪd/', m: 'a mark indicating a student\'s level of accomplishment in an exam', hi: 'अंक / ग्रेड', es: 'calificación / nota', fr: 'note', de: 'Note / Zensur', pt: 'nota / conceito', zh: '成绩 / 等级', ar: 'علامة / درجة', ja: '成績 / 点数', ru: 'оценка / балл', ex: 'He worked hard and earned top grades in mathematics.', exHi: 'उसने कड़ी मेहनत की और गणित में शीर्ष ग्रेड हासिल किए।', exEs: 'Trabajó duro y obtuvo las mejores calificaciones en matemáticas.', ic: '🅰️' },
    { w: 'skill', p: '/skɪl/', m: 'the ability to do something well, usually gained through training or practice', hi: 'कौशल / हुनर', es: 'habilidad / destreza', fr: 'compétence', de: 'Fähigkeit / Fertigkeit', pt: 'habilidade', zh: '技能', ar: 'مهارة', ja: '技術 / スキル', ru: 'навык / умение', ex: 'Effective communication is a crucial skill in modern business.', exHi: 'प्रभावी संचार आधुनिक व्यवसाय में एक महत्वपूर्ण कौशल है।', exEs: 'La comunicación efectiva es una habilidad crucial en los negocios.', ic: '💡' },
    { w: 'self-study', p: '/ˌself ˈstʌdi/', m: 'study undertaken by oneself without direct supervision', hi: 'स्व-अध्ययन / सेल्फ स्टडी', es: 'autoaprendizaje / estudio autodidacta', fr: 'autoformation', de: 'Selbststudium', pt: 'autoestudo', zh: '自学', ar: 'دراسة ذاتية', ja: '独学 / 自習', ru: 'самообучение', ex: 'I dedicate one hour of self-study every evening to English.', exHi: 'मैं हर शाम अंग्रेजी के लिए एक घंटा स्व-अध्ययन करता हूँ।', exEs: 'Dedico una hora de autoestudio cada noche al inglés.', ic: '📖' },
    { w: 'semester', p: '/sɪˈmestər/', m: 'a half-year term in a school or university', hi: 'सत्र / सेमेस्टर', es: 'semestre', fr: 'semestre', de: 'Semester', pt: 'semestre', zh: '学期', ar: 'فصل دراسي', ja: '学期', ru: 'семестр', ex: 'The autumn semester begins in the first week of September.', exHi: 'शरद ऋतु का सेमेस्टर सितंबर के पहले सप्ताह में शुरू होता है।', exEs: 'El semestre de otoño comienza la primera semana de septiembre.', ic: '🗓️' },
    { w: 'tuition', p: '/tjuˈɪʃn/', m: 'a sum of money charged for teaching by a college or university', hi: 'शिक्षण शुल्क / ट्यूशन फीस', es: 'matrícula / colegiatura', fr: 'frais de scolarité', de: 'Studiengebühren', pt: 'mensalidade escolar', zh: '学费', ar: 'رسوم دراسية', ja: '授業料', ru: 'плата за обучение', ex: 'Online courses often have much lower tuition fees.', exHi: 'ऑनलाइन पाठ्यक्रमों में अक्सर शिक्षण शुल्क काफी कम होता है।', exEs: 'Los cursos en línea suelen tener matrículas mucho más bajas.', ic: '💵' },
    { w: 'presentation', p: '/ˌpreznˈteɪʃn/', m: 'a formal talk giving information on a topic to a class', hi: 'प्रस्तुति', es: 'exposición / presentación', fr: 'présentation / exposé', de: 'Referat / Vortrag', pt: 'apresentação', zh: '课堂展示 / 汇报', ar: 'عرض تقديمي', ja: 'プレゼンテーション', ru: 'доклад / презентация', ex: 'Every student gave a five-minute presentation on environmental science.', exHi: 'प्रत्येक छात्र ने पर्यावरण विज्ञान पर पांच मिनट की प्रस्तुति दी।', exEs: 'Cada estudiante hizo una presentación de cinco minutos.', ic: '🗣️' },
    { w: 'fluent', p: '/ˈfluːənt/', m: 'able to speak or write a particular foreign language easily and accurately', hi: 'धाराप्रवाह / बेरोकटोक', es: 'fluido', fr: 'courant', de: 'fließend', pt: 'fluente', zh: '流利的', ar: 'طليق / فصيح', ja: '流暢な', ru: 'беглый / свободно владеющий', ex: 'My ultimate goal is to become completely fluent in English.', exHi: 'मेरा अंतिम लक्ष्य अंग्रेजी में पूरी तरह से धाराप्रवाह बनना है।', exEs: 'Mi objetivo final es llegar a ser completamente fluido en inglés.', ic: '🌟' }
  ],
  chunks: [
    { phrase: 'used to + infinitive', meaning: 'past habitual action or state that is no longer true', hi: 'अतीत की आदत जो अब नहीं है (करता था)', es: 'solía + infinitivo', fr: 'avoir l\'habitude de (au passé)', de: 'pflegte zu / tat früher', pt: 'costumava + infinitivo', zh: '过去常常...', ar: 'اعتاد أن...', ja: '以前は〜していた', ru: 'раньше делал (но больше не делает)', note: '"I used to walk to school every morning."' , ic: '🕰️' },
    { phrase: 'learn how to do something', meaning: 'acquire practical knowledge of a task', hi: 'कुछ करना सीखना', es: 'aprender a hacer algo', fr: 'apprendre à faire quelque chose', de: 'lernen, wie man etwas macht', pt: 'aprender a fazer algo', zh: '学习如何做某事', ar: 'يتعلم كيفية فعل شيء', ja: '〜の仕方を学ぶ', ru: 'научиться делать что-то', note: '"I am learning how to code in Python."' , ic: '💻' },
    { phrase: 'be good at something', meaning: 'possess skill or talent in an activity', hi: 'में अच्छा/निपुण होना', es: 'ser bueno en / para', fr: 'être bon en', de: 'gut sein in', pt: 'ser bom em', zh: '擅长...', ar: 'بارع في...', ja: '〜が得意である', ru: 'хорошо разбираться в...', note: 'Followed by noun or gerund (-ing): "She is good at problem-solving."' , ic: '🎯' },
    { phrase: 'enroll in a course', meaning: 'officially register for a class or training program', hi: 'पाठ्यक्रम में दाखिला लेना', es: 'inscribirse en un curso', fr: 's\'inscrire à une formation', de: 'sich für einen Kurs einschreiben', pt: 'matricular-se em um curso', zh: '报名参加课程', ar: 'التسجيل في دورة تدريبية', ja: 'コースに申し込む', ru: 'записаться на курс', note: 'Standard educational collocation.' , ic: '📝' },
    { phrase: 'graduate from university', meaning: 'successfully finish a degree program', hi: 'विश्वविद्यालय से स्नातक होना', es: 'graduarse de la universidad', fr: 'être diplômé de l\'université', de: 'einen Universitätsabschluss machen', pt: 'formar-se na universidade', zh: '从大学毕业', ar: 'التخرج من الجامعة', ja: '大学を卒業する', ru: 'окончить университет', note: 'Use "graduate from", not "graduate in".' , ic: '🎓' },
    { phrase: 'take an exam / pass an exam', meaning: 'sit for a test / achieve a passing score', hi: 'परीक्षा देना / परीक्षा पास करना', es: 'hacer un examen / aprobar un examen', fr: 'passer un examen / réussir un examen', de: 'eine Prüfung ablegen / bestehen', pt: 'fazer uma prova / passar na prova', zh: '参加考试 / 通过考试', ar: 'تقديم امتحان / النجاح في امتحان', ja: '試験を受ける / 合格する', ru: 'сдавать экзамен / сдать экзамен', note: '"Take" = sit for; "Pass" = succeed.' , ic: '✍️' },
    { phrase: 'study for a degree', meaning: 'attend university to gain academic credentials', hi: 'डिग्री के लिए अध्ययन करना', es: 'estudiar una carrera / título', fr: 'étudier pour obtenir un diplôme', de: 'auf einen Abschluss hin studieren', pt: 'estudar para um diploma', zh: '攻读学位', ar: 'الدراسة للحصول على درجة', ja: '学位取得のために勉強する', ru: 'учиться на степень', note: 'Describing higher education studies.' , ic: '🏛️' },
    { phrase: 'brush up on my English', meaning: 'refresh and improve existing language skills', hi: 'अपनी अंग्रेजी को निखारना/ताजा करना', es: 'repasar / pulir mi inglés', fr: 'rafraîchir mon anglais', de: 'mein Englisch auffrischen', pt: 'praticar / melhorar meu inglês', zh: '温习我的英语', ar: 'تنشيط لغتي الإنجليزية', ja: '英語の復習をする', ru: 'освежить свой английский', note: 'Common casual idiom for adult learners.' , ic: '✨' }
  ],
  grammar: {
    title: '"Used to + Infinitive" (Past Habits & States) vs Present Simple & "Learn how to + Verb"',
    concept: 'Contrasting past educational habits with present routines using "used to" and describing skill acquisition.',
    patterns: [
      {
        title: 'Past Habits with "Used to + Infinitive"',
        structure: 'Subject + used to + Base Verb (Affirmative) / didn\'t use to + Base Verb (Negative)',
        rule: 'Use "used to" for actions or states that happened regularly in the past but do not happen now.',
        examples: [
          { en: 'I used to walk to school with my classmates.', hi: 'मैं अपने सहपाठियों के साथ पैदल स्कूल जाया करता था।', es: 'Solía caminar a la escuela con mis compañeros.' },
          { en: 'We didn\'t use to have computers in our classrooms.', hi: 'हमारी कक्षाओं में कंप्यूटर नहीं हुआ करते थे।', es: 'No solíamos tener computadoras en las aulas.' }
        ]
      },
      {
        title: 'Acquiring Skills with "Learn How to + Base Verb"',
        structure: 'Subject + learn(s) / learned + how to + Base Verb',
        rule: 'Use "how to" after "learn" when talking about acquiring practical methods and skills.',
        examples: [
          { en: 'I am learning how to build mobile applications.', hi: 'मैं मोबाइल एप्लिकेशन बनाना सीख रहा हूँ।', es: 'Estoy aprendiendo a crear aplicaciones móviles.' },
          { en: 'She learned how to speak Spanish during her year abroad.', hi: 'उसने विदेश में अपने एक साल के दौरान स्पेनिश बोलना सीखा।', es: 'Ella aprendió a hablar español durante su año fuera.' }
        ]
      },
      {
        title: 'Proficiency with "Good at + Gerund (-ing)"',
        structure: 'Subject + BE (am / is / are) + good at + [Noun / Verb-ing]',
        rule: 'Always use a gerund (-ing) after prepositions like "at" in "good at".',
        examples: [
          { en: 'He is very good at explaining complex grammar rules.', hi: 'वह जटिल व्याकरण नियमों को समझाने में बहुत निपुण है।', es: 'Es muy bueno explicando reglas gramaticales complejas.' },
          { en: 'Are you good at memorizing new vocabulary?', hi: 'क्या आप नए शब्द याद रखने में अच्छे हैं?', es: '¿Eres bueno memorizando vocabulario nuevo?' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'I used to studying hard in high school.',
      cor: 'I used to study hard in high school.',
      exp: '"Used to" is followed by the base infinitive (study), not the gerund (-ing).',
      hi: '"Used to" के बाद base verb (study) आता है, "studying" नहीं।'
    },
    {
      inc: 'I am used to play football when I was young.',
      cor: 'I used to play football when I was young.',
      exp: 'Do not use "am used to" for past habits. Use "used to + verb". ("Be used to" means accustomed to).',
      hi: 'पुरानी आदत के लिए केवल "used to play" कहें, "am used to play" गलत है।'
    },
    {
      inc: 'She is good in speaking English.',
      cor: 'She is good at speaking English.',
      exp: 'The correct preposition with "good" is "at" (good at speaking), not "in".',
      hi: '"Good" के साथ "at" आता है: "good at speaking", "good in" गलत है।'
    },
    {
      inc: 'I gave an exam yesterday and passed it.',
      cor: 'I took an exam yesterday and passed it.',
      exp: 'Students "take / sit for" exams; teachers "give" exams.',
      hi: 'छात्र परीक्षा "take an exam" करते हैं, "give an exam" नहीं।'
    },
    {
      inc: 'He graduated in Harvard University.',
      cor: 'He graduated from Harvard University.',
      exp: 'Use the preposition "from" after "graduate" with institutions (graduated from Harvard).',
      hi: 'विश्वविद्यालय से उत्तीर्ण होने के लिए "graduated from" का प्रयोग करें।'
    }
  ],
  dialogues: [
    {
      title: 'Discussing Past School Days and Modern Learning',
      context: 'Dev and Maya share memories of their school days and current professional courses.',
      charA: { name: 'Maya', av: '👩', role: 'UX Designer' },
      charB: { name: 'Dev', av: '👨', role: 'Data Analyst' },
      turns: [
        { spk: 'Maya', text: 'Dev, did you use to enjoy mathematics when you were in school?', hi: 'देव, जब आप स्कूल में थे तब क्या आपको गणित पसंद था?', es: 'Dev, ¿te gustaban las matemáticas cuando estabas en la escuela?' },
        { spk: 'Dev', text: 'Actually, I used to struggle with algebra, but my tutor was very patient and helped me improve.', hi: 'दरअसल, मैं बीजगणित में काफी संघर्ष करता था, लेकिन मेरे ट्यूटर बहुत धैर्यवान थे और उन्होंने सुधार करने में मेरी मदद की।', es: 'De hecho, me costaba el álgebra, pero mi tutor fue muy paciente y me ayudó.' },
        { spk: 'Maya', text: 'That is great. And what are you studying these days?', hi: 'यह तो बहुत अच्छी बात है। और इन दिनों आप क्या पढ़ रहे हैं?', es: 'Qué bien. ¿Y qué estás estudiando estos días?' },
        { spk: 'Dev', text: 'I enrolled in an online machine learning course to brush up on my data skills. It is very practical!', hi: 'मैंने अपने डेटा कौशल को निखारने के लिए एक ऑनलाइन मशीन लर्निंग कोर्स में दाखिला लिया है। यह बहुत व्यावहारिक है!', es: 'Me inscribí en un curso de aprendizaje automático online para mejorar mis habilidades.' },
        { spk: 'Maya', text: 'Awesome! I am also learning how to code in JavaScript through weekend workshops.', hi: 'शानदार! मैं भी सप्ताहांत की कार्यशालाओं के माध्यम से जावास्क्रिप्ट में कोड करना सीख रही हूँ।', es: '¡Genial! Yo también estoy aprendiendo a programar en JavaScript.' }
      ]
    },
    {
      title: 'Enrolling in a Language Academy',
      context: 'Kiran asks the academy advisor about course schedules and certification.',
      charA: { name: 'Kiran', av: '👩', role: 'Prospective Student' },
      charB: { name: 'Advisor', av: '👨‍💼', role: 'Course Counselor' },
      turns: [
        { spk: 'Kiran', text: 'Hello, I would like to enroll in the evening A2 English conversation program. How long does it take?', hi: 'नमस्ते, मैं शाम के A2 अंग्रेजी वार्तालाप कार्यक्रम में दाखिला लेना चाहती हूँ। इसमें कितना समय लगता है?', es: 'Hola, me gustaría inscribirme en el programa de conversación A2. ¿Cuánto dura?' },
        { spk: 'Advisor', text: 'The program runs for twelve weeks, with two interactive sessions per week and self-study materials.', hi: 'यह कार्यक्रम बारह सप्ताह तक चलता है, जिसमें प्रति सप्ताह दो इंटरैक्टिव सत्र और स्व-अध्ययन सामग्री होती है।', es: 'El programa dura doce semanas, con dos sesiones interactivas por semana.' },
        { spk: 'Kiran', text: 'Will I receive a recognized certificate after completing all assignments?', hi: 'क्या सभी असाइनमेंट पूरे करने के बाद मुझे एक मान्यता प्राप्त प्रमाणपत्र मिलेगा?', es: '¿Recibiré un certificado reconocido tras completar todas las tareas?' },
        { spk: 'Advisor', text: 'Yes, absolutely! Once you pass the final assessment, an accredited certificate is issued.', hi: 'हाँ, बिल्कुल! एक बार जब आप अंतिम मूल्यांकन पास कर लेते हैं, तो एक मान्यता प्राप्त प्रमाणपत्र जारी किया जाता है।', es: '¡Sí, absolutamente! Tras aprobar la evaluación final, se emite el certificado.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_u08_l114_p1',
      type: 'multiple_choice',
      prompt: 'Select the sentence that correctly expresses a past habit that no longer occurs:',
      question: 'Select the sentence that correctly expresses a past habit that no longer occurs:',
      options: [
        'I used to ride my bicycle to school every morning.',
        'I am used to ride my bicycle to school every morning.',
        'I used to riding my bicycle to school every morning.',
        'I use to ride my bicycle every morning past.'
      ],
      correctAnswer: 'I used to ride my bicycle to school every morning.',
      explanation: '"Used to + base verb" (used to ride) describes past habits that are no longer true.'
    },
    {
      id: 'ex_u08_l114_p2',
      type: 'fill_blank',
      prompt: 'Complete with the correct skill acquisition phrase:',
      sourceSentence: 'She is learning _____ to design user-friendly websites.',
      targetSentence: 'She is learning how to design user-friendly websites.',
      options: [
        { id: '1', text: 'how', isCorrect: true },
        { id: '2', text: 'what', isCorrect: false },
        { id: '3', text: 'that', isCorrect: false },
        { id: '4', text: 'for', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l114_p3',
      type: 'word_ordering',
      prompt: 'Assemble the sentence about academic achievement:',
      targetSentence: 'He graduated from university with a degree in computer science',
      wordBank: ['He', 'graduated', 'from', 'university', 'with', 'a', 'degree', 'in', 'computer', 'science']
    },
    {
      id: 'ex_u08_l114_p4',
      type: 'error_correction',
      prompt: 'Fix the preposition error in this skill sentence:',
      sourceSentence: 'Karan is very good in solving complex math puzzles.',
      targetSentence: 'Karan is very good at solving complex math puzzles.',
      explanation: 'Use "good at + -ing", not "good in".'
    },
    {
      id: 'ex_u08_l114_p5',
      type: 'translation',
      prompt: 'Translate into English: "मैंने अपने अंग्रेजी कौशल को सुधारने के लिए एक नए कोर्स में दाखिला लिया।"',
      sourceSentence: 'मैंने अपने अंग्रेजी कौशल को सुधारने के लिए एक नए कोर्स में दाखिला लिया।',
      targetSentence: 'I enrolled in a new course to improve my English skills.',
      wordBank: ['I', 'enrolled', 'in', 'a', 'new', 'course', 'to', 'improve', 'my', 'English', 'skills']
    },
    {
      id: 'ex_u08_l114_p6',
      type: 'match_pairs',
      prompt: 'Match educational terms with their definitions:',
      options: [
        { id: 'm1', text: 'Enroll' },
        { id: 'm1_m', text: 'Register for a course / दाखिला लेना' },
        { id: 'm2', text: 'Used to' },
        { id: 'm2_m', text: 'Past habit / पुरानी आदत' },
        { id: 'm3', text: 'Certificate' },
        { id: 'm3_m', text: 'Official completion document / प्रमाणपत्र' },
        { id: 'm4', text: 'Self-study' },
        { id: 'm4_m', text: 'Independent learning / स्व-अध्ययन' }
      ]
    },
    {
      id: 'ex_u08_l114_p7',
      type: 'listening',
      prompt: 'Listen to the student\'s course plan:',
      audioText: 'I enrolled in a ten-week evening workshop to brush up on my presentation skills.',
      targetSentence: 'I enrolled in a ten-week evening workshop to brush up on my presentation skills.',
      options: [
        { id: '1', text: 'Ten-week workshop to brush up on presentation skills', isCorrect: true },
        { id: '2', text: 'Cancelled all evening classes', isCorrect: false },
        { id: '3', text: 'Studying alone without any teachers', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l114_p8',
      type: 'speaking',
      prompt: 'Speak this sentence clearly into your microphone:',
      targetSentence: 'I used to be shy, but I learned how to speak confidently in public.',
      audioText: 'I used to be shy, but I learned how to speak confidently in public.'
    },
    {
      id: 'ex_u08_l114_p9',
      type: 'dialogue_completion',
      prompt: 'Choose the most natural answer about past school memories:',
      sourceSentence: 'Friend: Did you use to wear a school uniform?\nYou: _____',
      targetSentence: 'You: Yes, we used to wear a navy blue blazer and a tie every day.',
      options: [
        { id: '1', text: 'Yes, we used to wear a navy blue blazer and a tie every day.', isCorrect: true },
        { id: '2', text: 'I am returning this kettle for a refund.', isCorrect: false },
        { id: '3', text: 'My flight is overbooked.', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l114_p10',
      type: 'listen_and_type',
      prompt: 'Listen and write down the sentence:',
      audioText: 'We used to study in the library after class.',
      targetSentence: 'We used to study in the library after class.',
      wordBank: ['We', 'used', 'to', 'study', 'in', 'the', 'library', 'after', 'class']
    }
  ],
  review: [
    {
      id: 'ex_u08_l114_r1',
      type: 'multiple_choice',
      prompt: 'Which sentence is grammatically correct?',
      question: 'Which sentence is grammatically correct?',
      options: [
        'She didn\'t use to like science, but now she loves it.',
        'She didn\'t used to like science, but now she loves it.',
        'She was not used to like science.',
        'She used not to liking science.'
      ],
      correctAnswer: 'She didn\'t use to like science, but now she loves it.',
      explanation: 'In negative past simple, use "didn\'t use to" (without "d" on use).'
    },
    {
      id: 'ex_u08_l114_r2',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the correct verb collocation:',
      sourceSentence: 'All students must _____ their final assignments before Friday midnight.',
      targetSentence: 'All students must submit their final assignments before Friday midnight.',
      options: [
        { id: '1', text: 'submit', isCorrect: true },
        { id: '2', text: 'leak', isCorrect: false },
        { id: '3', text: 'flicker', isCorrect: false },
        { id: '4', text: 'reimburse', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l114_r3',
      type: 'word_ordering',
      prompt: 'Assemble the sentence explaining skill improvement:',
      targetSentence: 'I am taking evening classes to brush up on my English grammar',
      wordBank: ['I', 'am', 'taking', 'evening', 'classes', 'to', 'brush', 'up', 'on', 'my', 'English', 'grammar']
    },
    {
      id: 'ex_u08_l114_r4',
      type: 'error_correction',
      prompt: 'Fix the exam verb collocation error in the sentence:',
      sourceSentence: 'I gave my driving test three times before passing.',
      targetSentence: 'I took my driving test three times before passing.',
      explanation: 'Candidates "take" tests; authorities "give" tests.'
    },
    {
      id: 'ex_u08_l114_r5',
      type: 'translation',
      prompt: 'Translate into English: "हम स्कूल में लंबी कविताएं याद किया करते थे।"',
      sourceSentence: 'हम स्कूल में लंबी कविताएं याद किया करते थे।',
      targetSentence: 'We used to memorize long poems in school.',
      wordBank: ['We', 'used', 'to', 'memorize', 'long', 'poems', 'in', 'school']
    },
    {
      id: 'ex_u08_l114_r6',
      type: 'speaking',
      prompt: 'Speak this sentence with clear expression:',
      targetSentence: 'She holds an accredited certificate in professional digital marketing.',
      audioText: 'She holds an accredited certificate in professional digital marketing.'
    },
    {
      id: 'ex_u08_l114_r7',
      type: 'recognition',
      prompt: 'Identify the meaning of "self-study":',
      question: 'What is self-study?',
      options: ['Studying independently without direct teacher supervision', 'Attending a large classroom lecture'],
      correctAnswer: 'Studying independently without direct teacher supervision',
      explanation: 'Self-study involves self-directed learning and practice.'
    },
    {
      id: 'ex_u08_l114_r8',
      type: 'fill_blank',
      prompt: 'Select the correct preposition with graduate:',
      sourceSentence: 'My sister graduated _____ Oxford University last summer.',
      targetSentence: 'My sister graduated from Oxford University last summer.',
      options: [
        { id: '1', text: 'from', isCorrect: true },
        { id: '2', text: 'in', isCorrect: false },
        { id: '3', text: 'at', isCorrect: false },
        { id: '4', text: 'with', isCorrect: false }
      ]
    }
  ],
  assessment: [
    {
      id: 'ex_u08_l114_a1',
      type: 'multiple_choice',
      prompt: 'Choose the sentence with correct "used to" and "good at" grammar:',
      question: 'Choose the sentence with correct "used to" and "good at" grammar:',
      options: [
        'I used to play guitar, and I am quite good at learning new songs.',
        'I used to playing guitar and I am good in songs.',
        'I am used to play guitar when young.',
        'I didn\'t used to play guitar.'
      ],
      correctAnswer: 'I used to play guitar, and I am quite good at learning new songs.',
      explanation: '"Used to play" (past habit) + "good at learning" (preposition + gerund).'
    },
    {
      id: 'ex_u08_l114_a2',
      type: 'word_ordering',
      prompt: 'Construct the assessment statement:',
      targetSentence: 'She learned how to speak fluent English through daily practice',
      wordBank: ['She', 'learned', 'how', 'to', 'speak', 'fluent', 'English', 'through', 'daily', 'practice']
    },
    {
      id: 'ex_u08_l114_a3',
      type: 'fill_blank',
      prompt: 'Complete with the appropriate term:',
      sourceSentence: 'She received a full _____ that covered all her university tuition fees.',
      targetSentence: 'She received a full scholarship that covered all her university tuition fees.',
      options: [
        { id: '1', text: 'scholarship', isCorrect: true },
        { id: '2', text: 'shuttle', isCorrect: false },
        { id: '3', text: 'receipt', isCorrect: false },
        { id: '4', text: 'landlord', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l114_a4',
      type: 'translation',
      prompt: 'Translate into English: "मैं हर शाम अपनी अंग्रेजी बोलने के कौशल का अभ्यास करने के लिए एक घंटा बिताता हूँ।"',
      sourceSentence: 'मैं हर शाम अपनी अंग्रेजी बोलने के कौशल का अभ्यास करने के लिए एक घंटा बिताता हूँ।',
      targetSentence: 'I spend one hour every evening practicing my English speaking skills.',
      wordBank: ['I', 'spend', 'one', 'hour', 'every', 'evening', 'practicing', 'my', 'English', 'speaking', 'skills']
    },
    {
      id: 'ex_u08_l114_a5',
      type: 'error_correction',
      prompt: 'Find and fix the error in the sentence:',
      sourceSentence: 'He is very good in playing chess with his classmates.',
      targetSentence: 'He is very good at playing chess with his classmates.',
      explanation: 'Use "good at", not "good in".'
    },
    {
      id: 'ex_u08_l114_a6',
      type: 'listening',
      prompt: 'Listen to the educational accomplishment:',
      audioText: 'After twelve weeks of intensive practice, Priya passed the CEFR A2 examination with distinction.',
      targetSentence: 'After twelve weeks of intensive practice, Priya passed the CEFR A2 examination with distinction.',
      options: [
        { id: '1', text: 'Passed CEFR A2 exam with distinction', isCorrect: true },
        { id: '2', text: 'Failed the introductory test', isCorrect: false },
        { id: '3', text: 'Cancelled her course enrollment', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l114_a7',
      type: 'speaking',
      prompt: 'Speak this mastery statement clearly:',
      targetSentence: 'I used to find English grammar difficult, but now I enjoy learning new patterns.',
      audioText: 'I used to find English grammar difficult, but now I enjoy learning new patterns.'
    },
    {
      id: 'ex_u08_l114_a8',
      type: 'personal_production',
      prompt: 'Write two sentences about a subject you used to study at school and a skill you are learning now:',
      targetSentence: 'I used to study history in high school. Now, I am learning how to speak English fluently through online courses.'
    }
  ]
};
