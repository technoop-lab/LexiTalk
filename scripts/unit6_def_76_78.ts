import { LessonConfig } from './unit6_builder_helper';

// =========================================================================
// LESSON 76: Workplace Problem-Solving & Requesting Assistance
// =========================================================================
export const CONFIG_76: LessonConfig = {
  num: 76,
  title: 'Workplace Problem-Solving & Requesting Assistance',
  icon: '💡',
  estMin: 25,
  objTitle: 'Explain work obstacles, request assistance politely, and collaborate on solutions using because and so',
  objDesc: 'Master vocabulary and sentence connecting structures for explaining workplace challenges, asking colleagues for support, and coordinating step-by-step problem resolution.',
  objHi: 'कार्यस्थल की बाधाओं को समझाना, विनम्रतापूर्वक सहायता मांगना, और because तथा so का उपयोग करके समाधान पर सहयोग करना सीखें।',
  objEs: 'Aprende a explicar obstáculos laborales, pedir ayuda cortésmente y colaborar en soluciones usando because y so.',
  canDo: [
    'I can describe an unexpected problem or obstacle at work clearly.',
    'I can ask a colleague or manager for help using polite modal requests.',
    'I can link cause and result using "because" and "so" in professional discussions.'
  ],
  canDoHi: [
    'मैं काम पर अप्रत्याशित समस्या या बाधा को स्पष्ट रूप से समझा सकता हूँ।',
    'मैं विनम्र अनुरोध के साथ सहकर्मी या प्रबंधक से मदद मांग सकता हूँ।',
    'मैं "because" और "so" का उपयोग करके कारण और परिणाम को जोड़ सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir un problema u obstáculo inesperado en el trabajo con claridad.',
    'Puedo pedir ayuda a un colega o gerente usando solicitudes modales amables.',
    'Puedo vincular causa y resultado usando "because" y "so" en conversaciones profesionales.'
  ],
  vocab: [
    { w: 'obstacle', p: '/ˈɒb.stə.kəl/', m: 'a thing that blocks one\'s way or hinders progress', hi: 'बाधा', es: 'obstáculo', fr: 'obstacle', de: 'Hindernis', pt: 'obstáculo', zh: '障碍', ar: 'عقبة', ja: '障害 / 困難', ru: 'препятствие', ex: 'We encountered an unexpected technical obstacle.', exHi: 'हमें एक अप्रत्याशित तकनीकी बाधा का सामना करना पड़ा।', exEs: 'Encontramos un obstáculo técnico inesperado.', ic: '🚧' },
    { w: 'assistance', p: '/əˈsɪs.təns/', m: 'the provision of help or support', hi: 'सहायता', es: 'asistencia / ayuda', fr: 'assistance', de: 'Unterstützung', pt: 'assistência', zh: '协助', ar: 'مساعدة', ja: '支援 / 手助け', ru: 'помощь', ex: 'I need your assistance with this financial report.', exHi: 'मुझे इस वित्तीय रिपोर्ट में आपकी सहायता की आवश्यकता है।', exEs: 'Necesito tu ayuda con este informe financiero.', ic: '🤝' },
    { w: 'resolve', p: '/rɪˈzɒlv/', m: 'to settle or find a solution to a problem', hi: 'हल करना', es: 'resolver', fr: 'résoudre', de: 'lösen', pt: 'resolver', zh: '解决', ar: 'حل', ja: '解決する', ru: 'разрешать', ex: 'We must resolve this server error quickly.', exHi: 'हमें इस सर्वर त्रुटि को जल्दी हल करना होगा।', exEs: 'Debemos resolver este error del servidor rápidamente.', ic: '🔧' },
    { w: 'colleague', p: '/ˈkɒl.iːɡ/', m: 'a person with whom one works in a profession', hi: 'सहकर्मी', es: 'colega / compañero', fr: 'collègue', de: 'Kollege', pt: 'colega', zh: '同事', ar: 'زميل', ja: '同僚', ru: 'коллега', ex: 'My colleague explained the new software to me.', exHi: 'मेरे सहकर्मी ने मुझे नया सॉफ्टवेयर समझाया।', exEs: 'Mi colega me explicó el nuevo software.', ic: '👥' },
    { w: 'urgent', p: '/ˈɜː.dʒənt/', m: 'requiring immediate action or attention', hi: 'अत्यावश्यक', es: 'urgente', fr: 'urgent', de: 'dringend', pt: 'urgente', zh: '紧急的', ar: 'عاجل', ja: '緊急の', ru: 'срочный', ex: 'This client email is urgent.', exHi: 'यह क्लाइंट ईमेल अत्यावश्यक है।', exEs: 'Este correo electrónico del cliente es urgente.', ic: '⏰' },
    { w: 'clarify', p: '/ˈklær.ɪ.faɪ/', m: 'to make a statement or situation clear and understandable', hi: 'स्पष्ट करना', es: 'aclarar', fr: 'clarifier', de: 'klären', pt: 'esclarecer', zh: '澄清', ar: 'توضيح', ja: '明確にする', ru: 'прояснять', ex: 'Could you please clarify the project deadline?', exHi: 'क्या आप कृपया परियोजना की अंतिम तिथि स्पष्ट कर सकते हैं?', exEs: '¿Podrías aclarar la fecha límite del proyecto, por favor?', ic: '🔍' },
    { w: 'deadline', p: '/ˈded.laɪn/', m: 'the latest time or date by which something should be completed', hi: 'अंतिम तिथि', es: 'fecha límite', fr: 'date limite', de: 'Frist', pt: 'prazo final', zh: '截止日期', ar: 'موعد نهائي', ja: '締め切り', ru: 'дедлайн', ex: 'The project deadline is tomorrow afternoon.', exHi: 'परियोजना की अंतिम तिथि कल दोपहर है।', exEs: 'La fecha límite del proyecto es mañana por la tarde.', ic: '📅' },
    { w: 'troubleshoot', p: '/ˈtrʌb.əl.ʃuːt/', m: 'to analyze and solve serious problems for a system', hi: 'समस्या निवारण करना', es: 'solucionar problemas', fr: 'dépanner', de: 'Fehler beheben', pt: 'solucionar problemas', zh: '排查故障', ar: 'استكشاف الأخطاء وإصلاحها', ja: 'トラブルシューティングする', ru: 'устранять неполадки', ex: 'Let us troubleshoot the login issue together.', exHi: 'आइए मिलकर लॉगिन समस्या का निवारण करें।', exEs: 'Solucionemos el problema de inicio de sesión juntos.', ic: '💻' },
    { w: 'guidance', p: '/ˈɡaɪ.dəns/', m: 'advice or information aimed at resolving a problem', hi: 'मार्गदर्शन', es: 'orientación / guía', fr: 'orientation', de: 'Anleitung', pt: 'orientação', zh: '指导', ar: 'توجيه', ja: '指導 / ガイダンス', ru: 'руководство', ex: 'Thank you for your guidance on this assignment.', exHi: 'इस कार्य पर आपके मार्गदर्शन के लिए धन्यवाद।', exEs: 'Gracias por tu orientación en esta tarea.', ic: '🧭' },
    { w: 'step', p: '/step/', m: 'one action in a series that leads to a goal', hi: 'कदम / चरण', es: 'paso', fr: 'étape', de: 'Schritt', pt: 'passo', zh: '步骤', ar: 'خطوة', ja: '手順 / ステップ', ru: 'шаг', ex: 'What is the first step in this process?', exHi: 'इस प्रक्रिया का पहला चरण क्या है?', exEs: '¿Cuál es el primer paso en este proceso?', ic: '🪜' },
    { w: 'available', p: '/əˈveɪ.lə.bəl/', m: 'ready for use or free to do something', hi: 'उपलब्ध', es: 'disponible', fr: 'disponible', de: 'verfügbar', pt: 'disponível', zh: '有空的 / 可用的', ar: 'متاح', ja: '利用可能な / 空いている', ru: 'доступный', ex: 'Are you available for a ten-minute call?', exHi: 'क्या आप दस मिनट की कॉल के लिए उपलब्ध हैं?', exEs: '¿Estás disponible para una llamada de diez minutos?', ic: '🟢' },
    { w: 'support', p: '/səˈpɔːt/', m: 'assistance given to ensure success or overcome difficulty', hi: 'सहारा / समर्थन', es: 'apoyo', fr: 'soutien', de: 'Unterstützung', pt: 'apoio', zh: '支持', ar: 'دعم', ja: 'サポート', ru: 'поддержка', ex: 'We appreciate your support during the launch.', exHi: 'हम लॉन्च के दौरान आपके समर्थन की सराहना करते हैं।', exEs: 'Agradecemos tu apoyo durante el lanzamiento.', ic: '🛡️' },
    { w: 'cooperate', p: '/kəʊˈɒp.ər.eɪt/', m: 'to work jointly towards the same end', hi: 'सहयोग देना', es: 'cooperar', fr: 'coopérer', de: 'kooperieren', pt: 'cooperar', zh: '配合', ar: 'تعاون', ja: '協力する', ru: 'кооперироваться', ex: 'Both departments cooperate to finish the proposal.', exHi: 'प्रस्ताव पूरा करने के लिए दोनों विभाग सहयोग करते हैं।', exEs: 'Ambos departamentos cooperan para terminar la propuesta.', ic: '🤝' },
    { w: 'delay', p: '/dɪˈleɪ/', m: 'a situation in which something happens later than planned', hi: 'देरी', es: 'retraso', fr: 'retard', de: 'Verzögerung', pt: 'atraso', zh: '延迟', ar: 'تأخير', ja: '遅延', ru: 'задержка', ex: 'The software update caused a short delay.', exHi: 'सॉफ्टवेयर अपडेट के कारण थोड़ी देरी हुई।', exEs: 'La actualización del software causó un breve retraso.', ic: '⏳' },
    { w: 'alternative', p: '/ɒlˈtɜː.nə.tɪv/', m: 'one of two or more available possibilities', hi: 'विकल्प', es: 'alternativa', fr: 'alternative', de: 'Alternative', pt: 'alternativa', zh: '备选方案', ar: 'بديل', ja: '代替案', ru: 'альтернатива', ex: 'If this tool fails, we have an alternative.', exHi: 'यदि यह उपकरण विफल हो जाता है, तो हमारे पास एक विकल्प है।', exEs: 'Si esta herramienta falla, tenemos una alternativa.', ic: '🔀' },
    { w: 'strategy', p: '/ˈstræt.ə.dʒi/', m: 'a plan of action designed to achieve a goal', hi: 'रणनीति', es: 'estrategia', fr: 'stratégie', de: 'Strategie', pt: 'estratégia', zh: '策略', ar: 'استراتيجية', ja: '戦略', ru: 'стратегия', ex: 'Our team adopted a new strategy to save time.', exHi: 'हमारी टीम ने समय बचाने के लिए एक नई रणनीति अपनाई।', exEs: 'Nuestro equipo adoptó una nueva estrategia para ahorrar tiempo.', ic: '🎯' },
    { w: 'efficient', p: '/ɪˈfɪʃ.ənt/', m: 'working in a well-organized and competent way', hi: 'कुशल', es: 'eficiente', fr: 'efficace', de: 'effizient', pt: 'eficiente', zh: '高效的', ar: 'كفء', ja: '効率的な', ru: 'эффективный', ex: 'This method is more efficient than manual entry.', exHi: 'यह विधि मैन्युअल प्रविष्टि की तुलना में अधिक कुशल है।', exEs: 'Este método es más eficiente que la entrada manual.', ic: '⚡' },
    { w: 'contact', p: '/ˈkɒn.tækt/', m: 'to communicate with someone by phone, email, or message', hi: 'संपर्क करना', es: 'contactar', fr: 'contacter', de: 'kontaktieren', pt: 'contatar', zh: '联系', ar: 'اتصال', ja: '連絡する', ru: 'связываться', ex: 'Please contact the IT helpdesk immediately.', exHi: 'कृपया तुरंत आईटी हेल्पडेस्क से संपर्क करें।', exEs: 'Por favor contacta al servicio técnico de TI de inmediato.', ic: '📞' },
    { w: 'instruction', p: '/ɪnˈstrʌk.ʃən/', m: 'a direction or order on how to do something', hi: 'निर्देश', es: 'instrucción', fr: 'instruction', de: 'Anweisung', pt: 'instrução', zh: '指示', ar: 'تعليمات', ja: '指示', ru: 'инструкция', ex: 'Follow each instruction carefully.', exHi: 'प्रत्येक निर्देश का ध्यानपूर्वक पालन करें।', exEs: 'Sigue cada instrucción cuidadosamente.', ic: '📋' },
    { w: 'outcome', p: '/ˈaʊt.kʌm/', m: 'the way a thing turns out; a result', hi: 'परिणाम', es: 'resultado', fr: 'résultat', de: 'Ergebnis', pt: 'resultado', zh: '结果', ar: 'نتيجة', ja: '結果', ru: 'исход', ex: 'We achieved a positive outcome for the client.', exHi: 'हमने ग्राहक के लिए एक सकारात्मक परिणाम प्राप्त किया।', exEs: 'Logramos un resultado positivo para el cliente.', ic: '🏆' }
  ],
  chunks: [
    { phrase: 'Could you give me a hand?', meaning: 'Polite request for informal help', hi: 'क्या आप मेरी थोड़ी मदद कर सकते हैं?', es: '¿Podrías echarme una mano?', fr: 'Pourriez-vous me donner un coup de main ?', de: 'Könnten Sie mir kurz helfen?', pt: 'Você poderia me dar uma mão?', zh: '你能帮我一把吗？', ar: 'هل يمكنك مساعدتي؟', ja: '手伝っていただけますか？', ru: 'Не могли бы вы мне помочь?', note: 'Standard polite workplace request.', ic: '✋' },
    { phrase: 'I am running into a problem', meaning: 'Facing an unexpected issue', hi: 'मुझे एक समस्या आ रही है', es: 'Tengo un problema / Me encuentro con un problema', fr: 'Je rencontre un problème', de: 'Ich stoße auf ein Problem', pt: 'Estou enfrentando um problema', zh: '我遇到了一个问题', ar: 'أواجه مشكلة', ja: '問題に直面しています', ru: 'Я столкнулся с проблемой', note: 'Describes an active obstacle.', ic: '⚠️' },
    { phrase: 'Do you have a few minutes?', meaning: 'Asking someone if they are free to talk', hi: 'क्या आपके पास कुछ मिनट हैं?', es: '¿Tienes unos minutos?', fr: 'Avez-vous quelques minutes ?', de: 'Haben Sie ein paar Minuten Zeit?', pt: 'Você tem alguns minutos?', zh: '你有几分钟时间吗？', ar: 'هل لديك بضع دقائق؟', ja: '少しお時間ありますか？', ru: 'У вас есть пара минут?', note: 'Polite opening before requesting help.', ic: '⏱️' },
    { phrase: 'Let\'s figure this out', meaning: 'Collaborating to solve a dilemma', hi: 'आइए इसका समाधान निकालें', es: 'Vamos a resolver esto', fr: 'Trouvons une solution', de: 'Lass uns das gemeinsam klären', pt: 'Vamos resolver isso', zh: '我们来解决这个问题', ar: 'دعنا نجد حلاً لهذا', ja: '一緒に解決策を見つけましょう', ru: 'Давайте разберемся с этим', note: 'Encouraging collaborative attitude.', ic: '💡' },
    { phrase: 'Thanks for stepping in', meaning: 'Expressing gratitude for timely help', hi: 'मदद के लिए आगे आने के लिए धन्यवाद', es: 'Gracias por intervenir / ayudar', fr: 'Merci d\'être intervenu', de: 'Danke für das Einspringen', pt: 'Obrigado por ajudar', zh: '感谢你的及时相助', ar: 'شكراً لتدخلك ومساعدتك', ja: '助けてくれてありがとう', ru: 'Спасибо, что подключились', note: 'Polite gratitude chunk.', ic: '🙏' },
    { phrase: 'What do you suggest?', meaning: 'Asking for advice or recommendations', hi: 'आपका क्या सुझाव है?', es: '¿Qué sugieres?', fr: 'Que suggérez-vous ?', de: 'Was schlägst du vor?', pt: 'O que você sugere?', zh: '你有什么建议？', ar: 'ماذا تقترح؟', ja: 'どう提案しますか？', ru: 'Что вы предлагаете?', note: 'Elicits constructive input.', ic: '❓' },
    { phrase: 'As soon as possible', meaning: 'With maximum urgency', hi: 'यथाशीघ्र', es: 'Tan pronto como sea posible', fr: 'Dès que possible', de: 'So bald wie möglich', pt: 'O mais rápido possível', zh: '尽快', ar: 'في أقرب وقت ممكن', ja: 'できるだけ早く', ru: 'Как можно скорее', note: 'Urgency indicator (ASAP).', ic: '🚀' },
    { phrase: 'I will take care of it', meaning: 'Promising personal responsibility', hi: 'मैं इसे संभाल लूँगा', es: 'Me encargaré de ello', fr: 'Je m\'en occupe', de: 'Ich kümmere mich darum', pt: 'Eu cuido disso', zh: '我来处理', ar: 'سأتولى الأمر', ja: '私が対応します', ru: 'Я разберусь с этим', note: 'Assurance of task ownership.', ic: '💼' }
  ],
  grammar: {
    title: 'Connecting Causes & Effects: "Because" vs. "So"',
    concept: 'Using "because" to state reasons and "so" to express results, paired with polite modal questions (Could you / Would you).',
    patterns: [
      {
        title: 'Cause with "Because" (Result + because + Reason)',
        structure: '[Result Clause] + because + [Reason Clause]',
        rule: 'Use "because" before the explanation or cause of a problem.',
        examples: [
          { en: 'I am contacting you because our software is crashing.', hi: 'मैं आपसे संपर्क कर रहा हूँ क्योंकि हमारा सॉफ्टवेयर क्रैश हो रहा है।', es: 'Te contacto porque nuestro software está fallando.' },
          { en: 'We missed the deadline because the files were missing.', hi: 'हमारी समय सीमा छूट गई क्योंकि फाइलें गायब थीं।', es: 'Perdimos la fecha límite porque faltaban los archivos.' }
        ]
      },
      {
        title: 'Result with "So" (Reason + , so + Result)',
        structure: '[Reason Clause] + , so + [Result / Action Clause]',
        rule: 'Use ", so" to introduce the outcome, decision, or request resulting from a situation.',
        examples: [
          { en: 'The printer is broken, so I am asking IT for help.', hi: 'प्रिंटर टूटा हुआ है, इसलिए मैं आईटी से मदद मांग रहा हूँ।', es: 'La impresora está rota, así que le estoy pidiendo ayuda a TI.' },
          { en: 'We need to finish early, so could you give me a hand?', hi: 'हमें जल्दी खत्म करना है, इसलिए क्या आप मेरी मदद कर सकते हैं?', es: 'Necesitamos terminar temprano, ¿así que podrías darme una mano?' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'I call you because so I need help.', cor: 'I am calling you because I need help.', corExp: 'Do not combine "because" and "so" in the same clause link.', incExp: 'Using both connectors creates grammatical redundancy.', exp: 'Use either "because" for the reason or "so" for the result, never both together.', hi: '"because" और "so" को एक साथ एक ही वाक्य में न जोड़ें।', es: 'No uses "because" y "so" juntos en la misma cláusula.' },
    { inc: 'Could you to help me with this?', cor: 'Could you help me with this?', corExp: 'Modal verbs like "could" are followed by the base verb without "to".', incExp: 'Adding "to" after a modal auxiliary is incorrect.', exp: 'Modal verbs take the bare infinitive: could + base form.', hi: 'मोडल क्रिया "could" के बाद "to" नहीं लगता।', es: 'Los verbos modales como "could" van seguidos del verbo base sin "to".' },
    { inc: 'The server down, so we cannot work.', cor: 'The server is down, so we cannot work.', corExp: 'Every English clause requires an active or linking verb.', incExp: 'Missing the linking verb "is".', exp: 'Include the verb "to be" (is/are): "The server is down".', hi: 'वाक्य में "is" क्रिया को न भूलें: "The server is down".', es: 'No olvides el verbo "to be": "The server is down".' },
    { inc: 'I need your assist on the project.', cor: 'I need your assistance on the project.', corExp: 'Use the noun "assistance" after the possessive "your".', incExp: '"Assist" is a verb, not a noun.', exp: 'Use the noun form "assistance" or "help".', hi: '"Your" के बाद संज्ञा रूप "assistance" का प्रयोग करें।', es: 'Usa el sustantivo "assistance" después del posesivo "your".' },
    { inc: 'Do you have few minutes for me?', cor: 'Do you have a few minutes for me?', corExp: '"A few" means some; "few" without "a" means almost none.', incExp: 'Missing the indefinite article "a".', exp: 'Use "a few minutes" to politely ask for a short amount of time.', hi: 'समय मांगने के लिए "a few minutes" कहें।', es: 'Usa "a few minutes" para solicitar cortésmente unos minutos.' }
  ],
  dialogues: [
    {
      title: 'Urgent Tech Support Request',
      context: 'Sarah encounters a critical spreadsheet error and asks her colleague David for assistance.',
      charA: { name: 'Sarah', av: '👩‍💼', role: 'Financial Analyst' },
      charB: { name: 'David', av: '👨‍💻', role: 'Senior Analyst' },
      turns: [
        { spk: 'Sarah', text: 'Hi David, do you have a few minutes? I am running into a problem with the quarterly report.', hi: 'नमस्ते डेविड, क्या आपके पास कुछ मिनट हैं? मुझे त्रैमासिक रिपोर्ट में एक समस्या आ रही है।', es: 'Hola David, ¿tienes unos minutos? Tengo un problema con el informe trimestral.' },
        { spk: 'David', text: 'Sure Sarah, what happened? Is there an error in the calculation?', hi: 'ज़रूर सारा, क्या हुआ? क्या गणना में कोई त्रुटि है?', es: 'Claro Sarah, ¿qué pasó? ¿Hay un error en el cálculo?' },
        { spk: 'Sarah', text: 'Yes, the formulas are not updating because the database link is broken, so I cannot finish my slides.', hi: 'हाँ, सूत्र अपडेट नहीं हो रहे हैं क्योंकि डेटाबेस लिंक टूटा हुआ है, इसलिए मैं अपनी स्लाइड पूरी नहीं कर सकती।', es: 'Sí, las fórmulas no se actualizan porque el enlace a la base de datos está roto, así que no puedo terminar mis diapositivas.' },
        { spk: 'David', text: 'Don\'t worry, let\'s figure this out. I will help you reconnect the database right now.', hi: 'चिंता न करें, आइए इसे सुलझाते हैं। मैं अभी डेटाबेस को फिर से कनेक्ट करने में आपकी मदद करूँगा।', es: 'No te preocupes, vamos a resolver esto. Te ayudaré a reconectar la base de datos ahora mismo.' },
        { spk: 'Sarah', text: 'Thank you so much! I really appreciate your support.', hi: 'बहुत-बहुत धन्यवाद! मैं आपके सहयोग की बहुत सराहना करती हूँ।', es: '¡Muchas gracias! Realmente aprecio tu apoyo.' }
      ]
    },
    {
      title: 'Adjusting Project Strategy',
      context: 'Marcus and Elena coordinate to handle an impending project deadline delay.',
      charA: { name: 'Marcus', av: '👨‍💼', role: 'Project Manager' },
      charB: { name: 'Elena', av: '👩‍💻', role: 'Lead Developer' },
      turns: [
        { spk: 'Marcus', text: 'Elena, we have an obstacle with the delivery timeline. The external vendor is delayed.', hi: 'ऐलेना, हमारे डिलीवरी समयरेखा में एक बाधा है। बाहरी विक्रेता में देरी हो रही है।', es: 'Elena, tenemos un obstáculo con el cronograma de entrega. El proveedor externo tiene retraso.' },
        { spk: 'Elena', text: 'I see. What do you suggest we do to protect our client deadline?', hi: 'मैं समझी। क्लाइंट की समय सीमा की रक्षा के लिए आप क्या सुझाव देते हैं?', es: 'Ya veo. ¿Qué sugieres que hagamos para proteger la fecha límite del cliente?' },
        { spk: 'Marcus', text: 'We have an alternative plan, so we can reassign two engineers to build the module internally.', hi: 'हमारे पास एक वैकल्पिक योजना है, इसलिए हम आंतरिक रूप से मॉड्यूल बनाने के लिए दो इंजीनियरों को फिर से सौंप सकते हैं।', es: 'Tenemos un plan alternativo, así que podemos reasignar a dos ingenieros para construir el módulo internamente.' },
        { spk: 'Elena', text: 'That sounds very efficient. I will organize the morning tasks and brief the team as soon as possible.', hi: 'यह बहुत कुशल लगता है। मैं सुबह के कार्यों को व्यवस्थित करूँगी और टीम को जल्द से जल्द जानकारी दूँगी।', es: 'Eso suena muy eficiente. Organizaré las tareas de la mañana e informaré al equipo lo antes posible.' },
        { spk: 'Marcus', text: 'Excellent. Thanks for stepping in so quickly!', hi: 'बहुत बढ़िया। इतनी जल्दी मदद के लिए आगे आने के लिए धन्यवाद!', es: 'Excelente. ¡Gracias por intervenir tan rápido!' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u06_l76_p1', lessonId: 'lesson_a1_6_76', stage: 8, type: 'multiple_choice', prompt: 'Choose the correct connector: "I am asking for assistance ___ the software is freezing."', options: [{ id: 'o1', text: 'because', isCorrect: true }, { id: 'o2', text: 'so', isCorrect: false }, { id: 'o3', text: 'but', isCorrect: false }] },
    { id: 'ex_u06_l76_p2', lessonId: 'lesson_a1_6_76', stage: 8, type: 'multiple_choice', prompt: 'Select the sentence that correctly expresses a result with "so":', options: [{ id: 'o1', text: 'The server crashed, so we called technical support.', isCorrect: true }, { id: 'o2', text: 'The server crashed because so we called support.', isCorrect: false }, { id: 'o3', text: 'The server crashed so because we called.', isCorrect: false }] },
    { id: 'ex_u06_l76_p3', lessonId: 'lesson_a1_6_76', stage: 8, type: 'fill_blank', prompt: 'Complete the sentence: "Could you please give me a ___ with these boxes?"', sentenceTemplate: 'Could you please give me a ___ with these boxes?', sourceSentence: 'Could you please give me a ___ with these boxes?', options: [{ id: 'o1', text: 'hand', isCorrect: true }, { id: 'o2', text: 'foot', isCorrect: false }, { id: 'o3', text: 'finger', isCorrect: false }] },
    { id: 'ex_u06_l76_p4', lessonId: 'lesson_a1_6_76', stage: 8, type: 'match_pairs', prompt: 'Match the workplace expressions with their meanings:', pairs: [{ left: 'give a hand', right: 'help someone' }, { left: 'on track', right: 'on schedule' }, { left: 'figure out', right: 'solve a problem' }, { left: 'as soon as possible', right: 'with urgency' }] },
    { id: 'ex_u06_l76_p5', lessonId: 'lesson_a1_6_76', stage: 8, type: 'word_ordering', prompt: 'Order the words to ask for a colleague\'s time politely:', wordBank: ['Do', 'you', 'have', 'a', 'few', 'minutes', 'to', 'talk?'], targetSentence: 'Do you have a few minutes to talk?' },
    { id: 'ex_u06_l76_p6', lessonId: 'lesson_a1_6_76', stage: 8, type: 'error_correction', prompt: 'Correct the error in this modal request:', sourceSentence: 'Could you to explain this process again?', targetSentence: 'Could you explain this process again?', options: [{ id: 'o1', text: 'Could you explain this process again?', isCorrect: true }, { id: 'o2', text: 'Could you explaining this process again?', isCorrect: false }] },
    { id: 'ex_u06_l76_p7', lessonId: 'lesson_a1_6_76', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'We encountered an unexpected technical obstacle this morning.', targetSentence: 'We encountered an unexpected technical obstacle this morning.' },
    { id: 'ex_u06_l76_p8', lessonId: 'lesson_a1_6_76', stage: 10, type: 'multiple_choice', prompt: 'Choose the most natural question to ask for recommendations from a teammate:', options: [{ id: 'o1', text: 'What do you suggest we do next?', isCorrect: true }, { id: 'o2', text: 'What are you suggest we do?', isCorrect: false }, { id: 'o3', text: 'What do you suggesting?', isCorrect: false }] },
    { id: 'ex_u06_l76_p9', lessonId: 'lesson_a1_6_76', stage: 11, type: 'dialogue_completion', prompt: 'Complete the workplace response: "I am having trouble with this spreadsheet." -> "___"', options: [{ id: 'o1', text: 'Don\'t worry, let\'s figure this out together.', isCorrect: true }, { id: 'o2', text: 'I am drinking tea at home.', isCorrect: false }, { id: 'o3', text: 'The bus is yellow.', isCorrect: false }] },
    { id: 'ex_u06_l76_p10', lessonId: 'lesson_a1_6_76', stage: 12, type: 'speaking', prompt: 'Speak clearly into your microphone:', targetSentence: 'Could you give me a hand with this report because the deadline is today?', audioText: 'Could you give me a hand with this report because the deadline is today?' },
    { id: 'ex_u06_l76_p11', lessonId: 'lesson_a1_6_76', stage: 13, type: 'translation', prompt: 'Translate: "मुझे इस वित्तीय रिपोर्ट में आपकी सहायता की आवश्यकता है।" / "Necesito tu ayuda con este informe financiero."', targetSentence: 'I need your assistance with this financial report.' },
    { id: 'ex_u06_l76_p12', lessonId: 'lesson_a1_6_76', stage: 14, type: 'multiple_choice', prompt: 'Which word describes a plan designed to achieve a major goal?', options: [{ id: 'o1', text: 'strategy', isCorrect: true }, { id: 'o2', text: 'stapler', isCorrect: false }, { id: 'o3', text: 'elevator', isCorrect: false }] },
    { id: 'ex_u06_l76_p13', lessonId: 'lesson_a1_6_76', stage: 14, type: 'fill_blank', prompt: 'Complete: "The manager will ___ of the client issue immediately."', sentenceTemplate: 'The manager will ___ of the client issue immediately.', sourceSentence: 'The manager will ___ of the client issue immediately.', options: [{ id: 'o1', text: 'take care', isCorrect: true }, { id: 'o2', text: 'take off', isCorrect: false }, { id: 'o3', text: 'take over', isCorrect: false }] },
    { id: 'ex_u06_l76_p14', lessonId: 'lesson_a1_6_76', stage: 14, type: 'word_ordering', prompt: 'Order the words to state resolution readiness:', wordBank: ['We', 'can', 'resolve', 'this', 'issue', 'very', 'quickly.'], targetSentence: 'We can resolve this issue very quickly.' },
    { id: 'ex_u06_l76_p15', lessonId: 'lesson_a1_6_76', stage: 14, type: 'speaking', prompt: 'Speak this assurance statement:', targetSentence: 'I will contact technical support as soon as possible.', audioText: 'I will contact technical support as soon as possible.' }
  ],
  review: [
    { id: 'ex_u06_l76_r1', lessonId: 'lesson_a1_6_76', stage: 16, type: 'multiple_choice', prompt: 'Retrieval: Choose the correct sentence with "because":', options: [{ id: 'o1', text: 'She stayed late because she had to finish the urgent proposal.', isCorrect: true }, { id: 'o2', text: 'She stayed late so because she had proposal.', isCorrect: false }, { id: 'o3', text: 'She stayed late because so she finished.', isCorrect: false }] },
    { id: 'ex_u06_l76_r2', lessonId: 'lesson_a1_6_76', stage: 16, type: 'fill_blank', prompt: 'Retrieval: Complete: "Thank you for ___ in to help our team."', sentenceTemplate: 'Thank you for ___ in to help our team.', sourceSentence: 'Thank you for ___ in to help our team.', options: [{ id: 'o1', text: 'stepping', isCorrect: true }, { id: 'o2', text: 'jumping', isCorrect: false }, { id: 'o3', text: 'running', isCorrect: false }] },
    { id: 'ex_u06_l76_r3', lessonId: 'lesson_a1_6_76', stage: 16, type: 'word_ordering', prompt: 'Retrieval: Order the words:', wordBank: ['The', 'printer', 'is', 'broken,', 'so', 'I', 'need', 'help.'], targetSentence: 'The printer is broken, so I need help.' },
    { id: 'ex_u06_l76_r4', lessonId: 'lesson_a1_6_76', stage: 16, type: 'match_pairs', prompt: 'Retrieval: Match words with their synonyms:', pairs: [{ left: 'assistance', right: 'help' }, { left: 'obstacle', right: 'barrier' }, { left: 'outcome', right: 'result' }, { left: 'clarify', right: 'explain clearly' }] },
    { id: 'ex_u06_l76_r5', lessonId: 'lesson_a1_6_76', stage: 16, type: 'translation', prompt: 'Retrieval: Translate into English: "क्या आपके पास बात करने के लिए कुछ मिनट हैं?"', targetSentence: 'Do you have a few minutes to talk?' }
  ],
  assessment: [
    { id: 'ex_u06_l76_a1', lessonId: 'lesson_a1_6_76', stage: 17, type: 'multiple_choice', prompt: 'Evaluation: Choose the most grammatically correct workplace communication:', options: [{ id: 'o1', text: 'We have an obstacle with the deadline, so we need extra assistance.', isCorrect: true }, { id: 'o2', text: 'We have an obstacle with the deadline, because so we need assistance.', isCorrect: false }, { id: 'o3', text: 'We have obstacle, so because need assistance.', isCorrect: false }] },
    { id: 'ex_u06_l76_a2', lessonId: 'lesson_a1_6_76', stage: 17, type: 'fill_blank', prompt: 'Evaluation: Complete: "Please ___ the IT helpdesk as soon as possible."', sentenceTemplate: 'Please ___ the IT helpdesk as soon as possible.', sourceSentence: 'Please ___ the IT helpdesk as soon as possible.', options: [{ id: 'o1', text: 'contact', isCorrect: true }, { id: 'o2', text: 'contain', isCorrect: false }, { id: 'o3', text: 'contract', isCorrect: false }] },
    { id: 'ex_u06_l76_a3', lessonId: 'lesson_a1_6_76', stage: 17, type: 'word_ordering', prompt: 'Evaluation: Order the words:', wordBank: ['Could', 'you', 'clarify', 'the', 'project', 'deadline', 'for', 'us?'], targetSentence: 'Could you clarify the project deadline for us?' },
    { id: 'ex_u06_l76_a4', lessonId: 'lesson_a1_6_76', stage: 17, type: 'dialogue_completion', prompt: 'Evaluation: Respond to: "Could you give me a hand with this task?"', options: [{ id: 'o1', text: 'Sure, I would be happy to help you with it.', isCorrect: true }, { id: 'o2', text: 'No, I am eating breakfast yesterday.', isCorrect: false }, { id: 'o3', text: 'The task is on the ceiling.', isCorrect: false }] },
    { id: 'ex_u06_l76_a5', lessonId: 'lesson_a1_6_76', stage: 17, type: 'speaking', prompt: 'Evaluation: Speak this complete sentence clearly:', targetSentence: 'We can resolve this problem together if we follow the instructions.', audioText: 'We can resolve this problem together if we follow the instructions.' }
  ]
};

// =========================================================================
// LESSON 77: Professional Follow-Ups, Rescheduling & Calendar Adjustments
// =========================================================================
export const CONFIG_77: LessonConfig = {
  num: 77,
  title: 'Professional Follow-Ups, Rescheduling & Calendar Adjustments',
  icon: '📆',
  estMin: 25,
  objTitle: 'Manage meeting rescheduling, polite calendar requests, and professional follow-up communications',
  objDesc: 'Learn polite formulas for proposing new meeting times, apologizing for schedule conflicts, and sending structured follow-up summaries.',
  objHi: 'बैठक पुनर्निर्धारण, विनम्र कैलेंडर अनुरोध और पेशेवर फॉलो-अप संचार प्रबंधित करना सीखें।',
  objEs: 'Aprende a gestionar la reprogramación de reuniones, solicitudes amables de calendario y comunicaciones de seguimiento.',
  canDo: [
    'I can propose a new date or time for an appointment politely.',
    'I can explain a schedule conflict using polite business formulas.',
    'I can confirm revised meeting details in writing and speech.'
  ],
  canDoHi: [
    'मैं विनम्रता से किसी नियुक्ति के लिए नई तारीख या समय का प्रस्ताव रख सकता हूँ।',
    'मैं विनम्र व्यावसायिक सूत्रों का उपयोग करके समय के टकराव को समझा सकता हूँ।',
    'मैं लिखित और मौखिक रूप से संशोधित बैठक विवरण की पुष्टि कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo proponer una nueva fecha u hora para una cita amablemente.',
    'Puedo explicar un conflicto de horario usando fórmulas profesionales corteses.',
    'Puedo confirmar los detalles revisados de la reunión por escrito y de forma oral.'
  ],
  vocab: [
    { w: 'reschedule', p: '/ˌriːˈskedʒ.uːl/', m: 'to change the time or date of a planned event', hi: 'पुनर्निर्धारित करना', es: 'reprogramar', fr: 'reprogrammer', de: 'verschieben', pt: 'reagendar', zh: '重新安排', ar: 'إعادة جدولة', ja: '日程を変更する', ru: 'переносить', ex: 'Could we reschedule our meeting to Friday?', exHi: 'क्या हम अपनी बैठक शुक्रवार के लिए पुनर्निर्धारित कर सकते हैं?', exEs: '¿Podríamos reprogramar nuestra reunión para el viernes?', ic: '🔄' },
    { w: 'conflict', p: '/ˈkɒn.flɪkt/', m: 'a clash between two scheduled events', hi: 'समय का टकराव / विरोध', es: 'conflicto de horario', fr: 'conflit', de: 'Konflikt', pt: 'conflito', zh: '时间冲突', ar: 'تضارب', ja: '重複 / 競合', ru: 'накладка', ex: 'I have a schedule conflict at two o\'clock.', exHi: 'दो बजे मेरा एक अन्य कार्यक्रम है (समय का टकराव)।', exEs: 'Tengo un conflicto de horario a las dos.', ic: '⚡' },
    { w: 'convenient', p: '/kənˈviː.ni.ənt/', m: 'fitting in well with a person\'s needs or schedule', hi: 'सुविधाजनक', es: 'conveniente / oportuno', fr: 'pratique / convenable', de: 'bequem / passend', pt: 'conveniente', zh: '方便的', ar: 'مناسب', ja: '都合の良い', ru: 'удобный', ex: 'Is three in the afternoon convenient for you?', exHi: 'क्या दोपहर तीन बजे का समय आपके लिए सुविधाजनक है?', exEs: '¿Las tres de la tarde te resulta conveniente?', ic: '👍' },
    { w: 'postpone', p: '/pəʊstˈpəʊn/', m: 'to delay an event to a later date', hi: 'स्थगित करना', es: 'posponer', fr: 'reporter', de: 'verschieben', pt: 'adiar', zh: '延期', ar: 'تأجيل', ja: '延期する', ru: 'откладывать', ex: 'We decided to postpone the presentation by one week.', exHi: 'हमने प्रस्तुति को एक सप्ताह के लिए स्थगित करने का निर्णय लिया।', exEs: 'Decidimos posponer la presentación una semana.', ic: '⏸️' },
    { w: 'confirm', p: '/kənˈfɜːm/', m: 'to establish or make certain', hi: 'पुष्टि करना', es: 'confirmar', fr: 'confirmer', de: 'bestätigen', pt: 'confirmar', zh: '确认', ar: 'تأكيد', ja: '確認する', ru: 'подтверждать', ex: 'Please confirm your attendance by reply email.', exHi: 'कृपया उत्तर ईमेल द्वारा अपनी उपस्थिति की पुष्टि करें।', exEs: 'Por favor confirma tu asistencia respondiendo al correo.', ic: '✅' },
    { w: 'calendar', p: '/ˈkæl.ɪn.dər/', m: 'a chart or schedule showing days and months', hi: 'कैलेंडर', es: 'calendario', fr: 'calendrier', de: 'Kalender', pt: 'calendário', zh: '日历', ar: 'تقويم', ja: 'カレンダー', ru: 'календарь', ex: 'I will send a calendar invite right away.', exHi: 'मैं तुरंत एक कैलेंडर आमंत्रण भेजूंगा।', exEs: 'Enviaré una invitación de calendario de inmediato.', ic: '📅' },
    { w: 'invite', p: '/ˈɪn.vaɪt/', m: 'an invitation to a meeting or event', hi: 'आमंत्रण', es: 'invitación', fr: 'invitation', de: 'Einladung', pt: 'convite', zh: '邀请', ar: 'دعوة', ja: '招待', ru: 'приглашение', ex: 'Did you receive my calendar invite?', exHi: 'क्या आपको मेरा कैलेंडर आमंत्रण मिला?', exEs: '¿Recibiste mi invitación de calendario?', ic: '📩' },
    { w: 'propose', p: '/prəˈpəʊz/', m: 'to put forward an idea or plan for consideration', hi: 'प्रस्ताव रखना', es: 'proponer', fr: 'proposer', de: 'vorschlagen', pt: 'propor', zh: '提议', ar: 'اقتراح', ja: '提案する', ru: 'предлагать', ex: 'May I propose Monday morning at ten?', exHi: 'क्या मैं सोमवार सुबह दस बजे का प्रस्ताव रख सकता हूँ?', exEs: '¿Puedo proponer el lunes por la mañana a las diez?', ic: '💡' },
    { w: 'apologize', p: '/əˈpɒl.ə.dʒaɪz/', m: 'to express regret for something that has caused trouble', hi: 'माफी मांगना', es: 'disculparse', fr: 's\'excuser', de: 'sich entschuldigen', pt: 'desculpar-se', zh: '道歉', ar: 'اعتذار', ja: '謝罪する', ru: 'извиняться', ex: 'I apologize for the short notice.', exHi: 'अल्प सूचना के लिए मैं क्षमा चाहता हूँ।', exEs: 'Me disculpo por el poco tiempo de aviso.', ic: '🙇' },
    { w: 'notice', p: '/ˈnəʊ.tɪs/', m: 'advance notification or warning', hi: 'सूचना', es: 'aviso', fr: 'préavis', de: 'Mitteilung', pt: 'aviso prévio', zh: '通知', ar: 'إشعار', ja: '通知 / 予告', ru: 'уведомление', ex: 'Thank you for giving me advance notice.', exHi: 'मुझे अग्रिम सूचना देने के लिए धन्यवाद।', exEs: 'Gracias por darme aviso con anticipación.', ic: '📢' },
    { w: 'availability', p: '/əˌveɪ.ləˈbɪl.ə.ti/', m: 'the state of being free or accessible', hi: 'उपलब्धता', es: 'disponibilidad', fr: 'disponibilité', de: 'Verfügbarkeit', pt: 'disponibilidade', zh: '空闲时间', ar: 'تفرغ / توفر', ja: '空き状況', ru: 'доступность', ex: 'Please share your availability for next Tuesday.', exHi: 'कृपया अगले मंगलवार के लिए अपनी उपलब्धता साझा करें।', exEs: 'Por favor comparte tu disponibilidad para el próximo martes.', ic: '🕒' },
    { w: 'follow-up', p: '/ˈfɒl.əʊ.ʌp/', m: 'a further action or communication that reinforces an earlier one', hi: 'फॉलो-अप / अनुवर्ती कार्रवाई', es: 'seguimiento', fr: 'suivi', de: 'Nachbereitung', pt: 'acompanhamento', zh: '跟进', ar: 'متابعة', ja: 'フォローアップ', ru: 'последующие действия', ex: 'Here is our follow-up email from the discussion.', exHi: 'यह चर्चा का हमारा फॉलो-अप ईमेल है।', exEs: 'Aquí está nuestro correo de seguimiento de la discusión.', ic: '✉️' },
    { w: 'slot', p: '/slɒt/', m: 'an allocated time in a schedule', hi: 'समय स्लॉट', es: 'espacio de tiempo / hueco', fr: 'créneau', de: 'Zeitfenster', pt: 'horário / vaga', zh: '时间段', ar: 'فترة زمنية', ja: '時間枠', ru: 'слот / интервал', ex: 'I have an open slot at four in the afternoon.', exHi: 'मेरे पास दोपहर चार बजे एक खुला समय स्लॉट है।', exEs: 'Tengo un espacio libre a las cuatro de la tarde.', ic: '🗂️' },
    { w: 'overlap', p: '/ˌəʊ.vəˈlæp/', m: 'to extend over and cover part of the same time', hi: 'अतिव्याप्त होना / एक ही समय पर पड़ना', es: 'superponerse', fr: 'chevaucher', de: 'überschneiden', pt: 'sobrepor', zh: '重叠', ar: 'تداخل', ja: '重なる', ru: 'перекрываться', ex: 'The two webinars overlap by thirty minutes.', exHi: 'दोनों वेबिनार तीस मिनट तक एक ही समय पर पड़ते हैं।', exEs: 'Los dos seminarios web se superponen treinta minutos.', ic: '겹' },
    { w: 'adjust', p: '/əˈdʒʌst/', m: 'to alter or move slightly in order to achieve the desired fit', hi: 'समायोजित करना', es: 'ajustar', fr: 'ajuster', de: 'anpassen', pt: 'ajustar', zh: '调整', ar: 'تعديل', ja: '調整する', ru: 'корректировать', ex: 'I can adjust my schedule to meet you.', exHi: 'मैं आपसे मिलने के लिए अपना कार्यक्रम समायोजित कर सकता हूँ।', exEs: 'Puedo ajustar mi horario para reunirme contigo.', ic: '⚙️' },
    { w: 'reminder', p: '/rɪˈmaɪn.dər/', m: 'a message prompting someone to remember something', hi: 'स्मरणपत्र / अनुस्मारक', es: 'recordatorio', fr: 'rappel', de: 'Erinnerung', pt: 'lembrete', zh: '提醒', ar: 'تذكير', ja: 'リマインダー', ru: 'напоминание', ex: 'I set a calendar reminder for nine o\'clock.', exHi: 'मैंने नौ बजे के लिए एक कैलेंडर रिमाइंडर सेट किया।', exEs: 'Configuré un recordatorio de calendario para las nueve.', ic: '🔔' },
    { w: 'flexible', p: '/ˈflek.sə.bəl/', m: 'able to be easily modified to respond to altered circumstances', hi: 'लचीला', es: 'flexible', fr: 'flexible', de: 'flexibel', pt: 'flexível', zh: '灵活的', ar: 'مرن', ja: '柔軟な', ru: 'гибкий', ex: 'My schedule is quite flexible on Thursday.', exHi: 'गुरुवार को मेरा कार्यक्रम काफी लचीला है।', exEs: 'Mi horario es bastante flexible el jueves.', ic: '🤸' },
    { w: 'tentative', p: '/ˈten.tə.tɪv/', m: 'not certain or fixed; provisional', hi: 'अनंतिम / अस्थायी', es: 'provisional / tentativo', fr: 'provisoire', de: 'vorläufig', pt: 'provisório', zh: '暂定的', ar: 'مبدئي', ja: '仮の', ru: 'предварительный', ex: 'Let us make a tentative booking for Wednesday.', exHi: 'आइए बुधवार के लिए एक अनंतिम बुकिंग करें।', exEs: 'Hagamos una reserva tentativa para el miércoles.', ic: '📝' },
    { w: 'firm', p: '/fɜːm/', m: 'fixed and definite', hi: 'पक्का / निश्चित', es: 'firme / definitivo', fr: 'ferme / définitif', de: 'fest', pt: 'firme / definitivo', zh: '确定的', ar: 'مؤكد', ja: '確定した', ru: 'окончательный', ex: 'We have a firm agreement on the new time.', exHi: 'नए समय पर हमारा पक्का समझौता हो गया है।', exEs: 'Tenemos un acuerdo firme sobre la nueva hora.', ic: '🔒' },
    { w: 'urgent', p: '/ˈɜː.dʒənt/', m: 'calling for prompt action', hi: 'अत्यावश्यक', es: 'urgente', fr: 'urgent', de: 'dringend', pt: 'urgente', zh: '紧迫的', ar: 'ملح', ja: '急ぎの', ru: 'неотложный', ex: 'An urgent matter requires my attention.', exHi: 'एक अत्यावश्यक मामले पर मेरे ध्यान की आवश्यकता है।', exEs: 'Un asunto urgente requiere mi atención.', ic: '🚨' }
  ],
  chunks: [
    { phrase: 'Would you mind if we reschedule?', meaning: 'Polite request to change appointment time', hi: 'क्या आपको कोई आपत्ति होगी यदि हम समय बदलें?', es: '¿Te importaría si reprogramamos?', fr: 'Cela vous dérangerait-il si nous reprogrammons ?', de: 'Würde es Ihnen etwas ausmachen, wenn wir den Termin verschieben?', pt: 'Você se importaria se remarcássemos?', zh: '你介意我们改期吗？', ar: 'هل تمانع إذا أعدنا الجدولة؟', ja: '日程を変更してもよろしいでしょうか？', ru: 'Вы не возражаете, если мы перенесем?', note: 'Formal polite rescheduling question.', ic: '🙏' },
    { phrase: 'Something has come up', meaning: 'An unexpected event has occurred', hi: 'कुछ अप्रत्याशित काम आ गया है', es: 'Ha surgido un imprevisto', fr: 'J\'ai eu un empêchement', de: 'Es ist etwas dazwischengekommen', pt: 'Surgiu um imprevisto', zh: '临时有事', ar: 'طرأ أمر طارئ', ja: '急用ができてしまいました', ru: 'Кое-что непредвиденное возникло', note: 'Standard polite excuse.', ic: '⚡' },
    { phrase: 'Does that work for you?', meaning: 'Asking if a proposed time is acceptable', hi: 'क्या यह आपके लिए ठीक रहेगा?', es: '¿Te funciona eso? / ¿Te viene bien?', fr: 'Est-ce que cela vous convient ?', de: 'Passt das für Sie?', pt: 'Isso funciona para você?', zh: '这对你合适吗？', ar: 'هل يناسبك ذلك؟', ja: 'それでご都合はよろしいですか？', ru: 'Вам это подходит?', note: 'Common time negotiation query.', ic: '🕒' },
    { phrase: 'Let me double-check my calendar', meaning: 'Checking schedule carefully', hi: 'मुझे अपना कैलेंडर दोबारा जांचने दीजिए', es: 'Déjame revisar bien mi calendario', fr: 'Laissez-moi revérifier mon calendrier', de: 'Lassen Sie mich kurz in meinen Kalender schauen', pt: 'Deixe-me verificar minha agenda', zh: '让我再核对一下日历', ar: 'دعني أراجع تقويمي مجدداً', ja: 'カレンダーを再確認させてください', ru: 'Позвольте мне перепроверить календарь', note: 'Polite pause to inspect schedule.', ic: '🔍' },
    { phrase: 'Looking forward to meeting you', meaning: 'Warm professional closing', hi: 'आपसे मिलने के लिए उत्सुक हूँ', es: 'Espero con interés nuestra reunión', fr: 'Au plaisir de vous rencontrer', de: 'Ich freue mich darauf, Sie zu treffen', pt: 'Ansioso para encontrá-lo', zh: '期待与您会面', ar: 'أتطلع للقائك', ja: 'お会いできるのを楽しみにしています', ru: 'С нетерпением жду встречи с вами', note: 'Polite email/call sign-off.', ic: '🤝' },
    { phrase: 'Keep me posted', meaning: 'Request to stay informed of changes', hi: 'मुझे सूचित करते रहें', es: 'Mantenme informado', fr: 'Tenez-moi au courant', de: 'Halten Sie mich auf dem Laufenden', pt: 'Mantenha-me informado', zh: '随时告诉我进展', ar: 'أبقني على اطلاع', ja: '進展があれば教えてください', ru: 'Держите меня в курсе', note: 'Friendly professional idiom.', ic: '📬' },
    { phrase: 'Sorry for the inconvenience', meaning: 'Apologizing for disruption caused', hi: 'असुविधा के लिए क्षमा करें', es: 'Disculpa las molestias', fr: 'Désolé pour le désagrément', de: 'Entschuldigung für die Unannehmlichkeiten', pt: 'Desculpe pelo transtorno', zh: '给您带来不便深表歉意', ar: 'أعتذر عن الإزعاج', ja: 'ご不便をおかけして申し訳ありません', ru: 'Извините за неудобства', note: 'Essential customer and colleague apology.', ic: '🙇' },
    { phrase: 'I have locked it in', meaning: 'Confirmed in schedule', hi: 'मैंने इसे पक्का कर लिया है', es: 'Ya lo he agendado / confirmado', fr: 'C\'est noté dans mon agenda', de: 'Ich habe es fest eingeplant', pt: 'Já agendei', zh: '我已经确认并记录了', ar: 'لقد ثبتت الموعد في التقويم', ja: '予定に組み込みました', ru: 'Я зафиксировал это в календаре', note: 'Informal confirmation phrase.', ic: '🔒' }
  ],
  grammar: {
    title: 'Polite Proposing & Asking with "Would you mind" / "Could we"',
    concept: 'Using modal structures for polite suggestions and time adjustments in professional contexts.',
    patterns: [
      {
        title: 'Would you mind if we + Past / Base form',
        structure: 'Would you mind if we + rescheduled / met at three?',
        rule: 'Use "Would you mind if we..." as a highly polite formula for requesting a change.',
        examples: [
          { en: 'Would you mind if we pushed our call to 3:30 PM?', hi: 'क्या आपको कोई आपत्ति होगी यदि हम अपनी कॉल दोपहर 3:30 बजे तक टाल दें?', es: '¿Te importaría si pasamos nuestra llamada a las 3:30 PM?' },
          { en: 'Would you mind sending me the updated link?', hi: 'क्या आप मुझे अपडेट किया गया लिंक भेजने का कष्ट करेंगे?', es: '¿Te importaría enviarme el enlace actualizado?' }
        ]
      },
      {
        title: 'Proposing times with "Could we meet on [Day] at [Time]?"',
        structure: 'Could we meet + on [Day] + at [Time]?',
        rule: 'Use "on" for days/dates and "at" for specific clock times.',
        examples: [
          { en: 'Could we meet on Thursday at ten in the morning?', hi: 'क्या हम गुरुवार को सुबह दस बजे मिल सकते हैं?', es: '¿Podríamos reunirnos el jueves a las diez de la mañana?' },
          { en: 'Is Thursday afternoon convenient for you?', hi: 'क्या गुरुवार दोपहर का समय आपके लिए सुविधाजनक है?', es: '¿El jueves por la tarde te resulta conveniente?' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'Would you mind to reschedule the call?', cor: 'Would you mind rescheduling the call?', corExp: '"Would you mind" is followed by a gerund (verb-ing) or "if we + past".', incExp: 'Using "to + infinitive" after "mind" is ungrammatical.', exp: 'Say "Would you mind rescheduling" or "Would you mind if we rescheduled".', hi: '"Would you mind" के बाद verb-ing का प्रयोग करें।', es: 'Usa la forma -ing después de "Would you mind".' },
    { inc: 'We meet in Monday at three.', cor: 'We meet on Monday at three.', corExp: 'Use preposition "on" for specific days of the week.', incExp: 'Using "in" for days is incorrect.', exp: 'Days take "on" (on Monday, on Friday); times take "at" (at 3:00).', hi: 'दिनों के लिए "on" और समय के लिए "at" का प्रयोग करें।', es: 'Usa "on" para los días de la semana y "at" para las horas.' },
    { inc: 'I apologize on the short notice.', cor: 'I apologize for the short notice.', corExp: '"Apologize" is paired with preposition "for".', incExp: 'Using "on" after apologize is incorrect.', exp: 'Always use "apologize for [something]".', hi: '"Apologize" के साथ हमेशा "for" आता है।', es: 'Siempre se dice "apologize for".' },
    { inc: 'Something is came up today.', cor: 'Something has come up today.', corExp: 'Use Present Perfect "has come up" to indicate recent unexpected news.', incExp: 'Mixing "is" with past tense "came" is a double-verb error.', exp: 'Say "Something has come up" (Present Perfect).', hi: 'अप्रत्याशित काम के लिए "Something has come up" कहें।', es: 'Usa "Something has come up" en presente perfecto.' },
    { inc: 'Is this time convenience for you?', cor: 'Is this time convenient for you?', corExp: 'Use the adjective "convenient" after the linking verb "is".', incExp: '"Convenience" is a noun, not an adjective.', exp: 'Use the adjective form "convenient".', hi: 'विशेषण "convenient" का प्रयोग करें, संज्ञा "convenience" का नहीं।', es: 'Usa el adjetivo "convenient".' }
  ],
  dialogues: [
    {
      title: 'Rescheduling a Client Consultation',
      context: 'Arthur calls his client Beatriz to adjust their scheduled afternoon appointment.',
      charA: { name: 'Arthur', av: '👨‍💼', role: 'Consultant' },
      charB: { name: 'Beatriz', av: '👩‍💼', role: 'Client' },
      turns: [
        { spk: 'Arthur', text: 'Hello Beatriz. I am calling because something urgent has come up with another client.', hi: 'नमस्ते बीट्राइस। मैं इसलिए कॉल कर रहा हूँ क्योंकि किसी अन्य क्लाइंट के साथ कुछ अत्यावश्यक काम आ गया है।', es: 'Hola Beatriz. Te llamo porque ha surgido algo urgente con otro cliente.' },
        { spk: 'Beatriz', text: 'Hello Arthur. No problem, do we need to reschedule our three o\'clock session?', hi: 'नमस्ते आर्थर। कोई बात नहीं, क्या हमें अपने तीन बजे के सत्र को पुनर्निर्धारित करने की आवश्यकता है?', es: 'Hola Arthur. No hay problema, ¿necesitamos reprogramar nuestra sesión de las tres?' },
        { spk: 'Arthur', text: 'Yes, would you mind if we moved it to tomorrow morning at ten? Does that work for you?', hi: 'हाँ, क्या आपको कोई आपत्ति होगी यदि हम इसे कल सुबह दस बजे कर दें? क्या यह आपके लिए ठीक रहेगा?', es: 'Sí, ¿te importaría si la pasamos para mañana a las diez de la mañana? ¿Te funciona eso?' },
        { spk: 'Beatriz', text: 'Let me check my calendar... Yes, ten in the morning is completely open. I have locked it in.', hi: 'मुझे अपना कैलेंडर देखने दीजिए... हाँ, सुबह दस बजे का समय पूरी तरह खाली है। मैंने इसे दर्ज कर लिया है।', es: 'Déjame revisar mi calendario... Sí, a las diez de la mañana está totalmente libre. Ya lo he agendado.' },
        { spk: 'Arthur', text: 'Wonderful. I apologize for the inconvenience, and I look forward to speaking with you tomorrow.', hi: 'बहुत बढ़िया। असुविधा के लिए मैं क्षमा चाहता हूँ, और कल आपसे बात करने के लिए उत्सुक हूँ।', es: 'Maravilloso. Me disculpo por las molestias y espero hablar contigo mañana.' }
      ]
    },
    {
      title: 'Internal Team Calendar Alignment',
      context: 'Carlos and Chloe align project check-in slots for the upcoming sprint.',
      charA: { name: 'Carlos', av: '👨‍💻', role: 'Scrum Master' },
      charB: { name: 'Chloe', av: '👩‍💼', role: 'Product Owner' },
      turns: [
        { spk: 'Carlos', text: 'Chloe, our team review overlaps with the leadership meeting on Thursday afternoon.', hi: 'क्लोई, गुरुवार दोपहर हमारी टीम समीक्षा लीडरशिप बैठक के साथ मेल खाती है।', es: 'Chloe, nuestra revisión de equipo se superpone con la reunión de liderazgo el jueves por la tarde.' },
        { spk: 'Chloe', text: 'Good catch. We should postpone our review to avoid the conflict. What is your availability on Friday?', hi: 'अच्छा ध्यान दिलाया। हमें टकराव से बचने के लिए अपनी समीक्षा स्थगित करनी चाहिए। शुक्रवार को आपकी क्या उपलब्धता है?', es: 'Buena observación. Deberíamos posponer nuestra revisión para evitar el conflicto. ¿Cuál es tu disponibilidad el viernes?' },
        { spk: 'Carlos', text: 'I am completely flexible after eleven in the morning.', hi: 'मैं सुबह ग्यारह बजे के बाद पूरी तरह लचीला (उपलब्ध) हूँ।', es: 'Estoy totalmente flexible después de las once de la mañana.' },
        { spk: 'Chloe', text: 'Great, let\'s set it for Friday at two. I will update the calendar invite right now.', hi: 'शानदार, आइए इसे शुक्रवार दोपहर दो बजे तय करते हैं। मैं अभी कैलेंडर आमंत्रण को अपडेट कर देती हूँ।', es: 'Genial, programémosla para el viernes a las dos. Actualizaré la invitación de calendario ahora mismo.' },
        { spk: 'Carlos', text: 'Perfect. Thanks for making the quick adjustment!', hi: 'उत्तम। त्वरित समायोजन करने के लिए धन्यवाद!', es: 'Perfecto. ¡Gracias por hacer el ajuste tan rápido!' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u06_l77_p1', lessonId: 'lesson_a1_6_77', stage: 8, type: 'multiple_choice', prompt: 'Choose the correct preposition: "Can we meet ___ Wednesday morning?"', options: [{ id: 'o1', text: 'on', isCorrect: true }, { id: 'o2', text: 'at', isCorrect: false }, { id: 'o3', text: 'in', isCorrect: false }] },
    { id: 'ex_u06_l77_p2', lessonId: 'lesson_a1_6_77', stage: 8, type: 'multiple_choice', prompt: 'Choose the correct preposition for clock time: "The presentation starts ___ 2:30 PM."', options: [{ id: 'o1', text: 'at', isCorrect: true }, { id: 'o2', text: 'on', isCorrect: false }, { id: 'o3', text: 'to', isCorrect: false }] },
    { id: 'ex_u06_l77_p3', lessonId: 'lesson_a1_6_77', stage: 8, type: 'fill_blank', prompt: 'Complete: "Would you mind ___ our meeting to Friday?"', sentenceTemplate: 'Would you mind ___ our meeting to Friday?', sourceSentence: 'Would you mind ___ our meeting to Friday?', options: [{ id: 'o1', text: 'rescheduling', isCorrect: true }, { id: 'o2', text: 'reschedule', isCorrect: false }, { id: 'o3', text: 'rescheduled', isCorrect: false }] },
    { id: 'ex_u06_l77_p4', lessonId: 'lesson_a1_6_77', stage: 8, type: 'match_pairs', prompt: 'Match calendar terms with definitions:', pairs: [{ left: 'reschedule', right: 'change the time or date' }, { left: 'conflict', right: 'two events at the same time' }, { left: 'convenient', right: 'suitable for one\'s schedule' }, { left: 'postpone', right: 'delay until later' }] },
    { id: 'ex_u06_l77_p5', lessonId: 'lesson_a1_6_77', stage: 8, type: 'word_ordering', prompt: 'Order the words to make a polite schedule inquiry:', wordBank: ['Does', 'three', 'o\'clock', 'work', 'for', 'you?'], targetSentence: 'Does three o\'clock work for you?' },
    { id: 'ex_u06_l77_p6', lessonId: 'lesson_a1_6_77', stage: 8, type: 'error_correction', prompt: 'Correct the error in this email apology:', sourceSentence: 'I apologize on the short notice for this change.', targetSentence: 'I apologize for the short notice for this change.', options: [{ id: 'o1', text: 'I apologize for the short notice for this change.', isCorrect: true }, { id: 'o2', text: 'I apologize about the short notice for change.', isCorrect: false }] },
    { id: 'ex_u06_l77_p7', lessonId: 'lesson_a1_6_77', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'Something urgent has come up, so I need to postpone our call.', targetSentence: 'Something urgent has come up, so I need to postpone our call.' },
    { id: 'ex_u06_l77_p8', lessonId: 'lesson_a1_6_77', stage: 10, type: 'multiple_choice', prompt: 'Select the best polite question to ask someone\'s availability:', options: [{ id: 'o1', text: 'What is your availability for next Tuesday?', isCorrect: true }, { id: 'o2', text: 'When you are free on next Tuesday?', isCorrect: false }, { id: 'o3', text: 'What your availability is next Tuesday?', isCorrect: false }] },
    { id: 'ex_u06_l77_p9', lessonId: 'lesson_a1_6_77', stage: 11, type: 'dialogue_completion', prompt: 'Complete the conversation: "Could we push our meeting to 4:00 PM?" -> "___"', options: [{ id: 'o1', text: 'Yes, four o\'clock works perfectly for me.', isCorrect: true }, { id: 'o2', text: 'The train station is crowded.', isCorrect: false }, { id: 'o3', text: 'I am buying groceries.', isCorrect: false }] },
    { id: 'ex_u06_l77_p10', lessonId: 'lesson_a1_6_77', stage: 12, type: 'speaking', prompt: 'Speak this professional closing clearly:', targetSentence: 'I look forward to meeting you on Thursday morning.', audioText: 'I look forward to meeting you on Thursday morning.' },
    { id: 'ex_u06_l77_p11', lessonId: 'lesson_a1_6_77', stage: 13, type: 'translation', prompt: 'Translate: "क्या दोपहर तीन बजे का समय आपके लिए सुविधाजनक है?" / "¿Las tres de la tarde te resulta conveniente?"', targetSentence: 'Is three in the afternoon convenient for you?' },
    { id: 'ex_u06_l77_p12', lessonId: 'lesson_a1_6_77', stage: 14, type: 'multiple_choice', prompt: 'Which phrase means you have verified and recorded an appointment in your calendar?', options: [{ id: 'o1', text: 'locked it in', isCorrect: true }, { id: 'o2', text: 'locked the door', isCorrect: false }, { id: 'o3', text: 'ran away', isCorrect: false }] },
    { id: 'ex_u06_l77_p13', lessonId: 'lesson_a1_6_77', stage: 14, type: 'fill_blank', prompt: 'Complete: "I will send a calendar ___ right away."', sentenceTemplate: 'I will send a calendar ___ right away.', sourceSentence: 'I will send a calendar ___ right away.', options: [{ id: 'o1', text: 'invite', isCorrect: true }, { id: 'o2', text: 'invent', isCorrect: false }, { id: 'o3', text: 'invoke', isCorrect: false }] },
    { id: 'ex_u06_l77_p14', lessonId: 'lesson_a1_6_77', stage: 14, type: 'word_ordering', prompt: 'Order the words to state availability:', wordBank: ['My', 'schedule', 'is', 'very', 'flexible', 'on', 'Friday.'], targetSentence: 'My schedule is very flexible on Friday.' },
    { id: 'ex_u06_l77_p15', lessonId: 'lesson_a1_6_77', stage: 14, type: 'speaking', prompt: 'Speak this polite rescheduling request:', targetSentence: 'Would you mind if we moved our appointment to Monday?', audioText: 'Would you mind if we moved our appointment to Monday?' }
  ],
  review: [
    { id: 'ex_u06_l77_r1', lessonId: 'lesson_a1_6_77', stage: 16, type: 'multiple_choice', prompt: 'Retrieval: Choose the sentence with correct prepositions for time and day:', options: [{ id: 'o1', text: 'Our team will meet on Monday at nine in the morning.', isCorrect: true }, { id: 'o2', text: 'Our team will meet at Monday on nine in the morning.', isCorrect: false }, { id: 'o3', text: 'Our team will meet in Monday in nine.', isCorrect: false }] },
    { id: 'ex_u06_l77_r2', lessonId: 'lesson_a1_6_77', stage: 16, type: 'fill_blank', prompt: 'Retrieval: Complete: "Something has ___ up, so I cannot attend today."', sentenceTemplate: 'Something has ___ up, so I cannot attend today.', sourceSentence: 'Something has ___ up, so I cannot attend today.', options: [{ id: 'o1', text: 'come', isCorrect: true }, { id: 'o2', text: 'came', isCorrect: false }, { id: 'o3', text: 'coming', isCorrect: false }] },
    { id: 'ex_u06_l77_r3', lessonId: 'lesson_a1_6_77', stage: 16, type: 'word_ordering', prompt: 'Retrieval: Order the words:', wordBank: ['Sorry', 'for', 'the', 'inconvenience', 'this', 'may', 'cause.'], targetSentence: 'Sorry for the inconvenience this may cause.' },
    { id: 'ex_u06_l77_r4', lessonId: 'lesson_a1_6_77', stage: 16, type: 'match_pairs', prompt: 'Retrieval: Match phrases with their communicative functions:', pairs: [{ left: 'Does that work for you?', right: 'checking suitability' }, { left: 'Keep me posted', right: 'asking for updates' }, { left: 'Looking forward to meeting', right: 'warm sign-off' }, { left: 'Double-check my calendar', right: 'verifying schedule' }] },
    { id: 'ex_u06_l77_r5', lessonId: 'lesson_a1_6_77', stage: 16, type: 'translation', prompt: 'Retrieval: Translate: "अल्प सूचना के लिए मैं क्षमा चाहता हूँ।" / "Me disculpo por el poco tiempo de aviso."', targetSentence: 'I apologize for the short notice.' }
  ],
  assessment: [
    { id: 'ex_u06_l77_a1', lessonId: 'lesson_a1_6_77', stage: 17, type: 'multiple_choice', prompt: 'Evaluation: Choose the most professional response to a rescheduling request:', options: [{ id: 'o1', text: 'No problem at all, tomorrow at 10:00 AM works well for me.', isCorrect: true }, { id: 'o2', text: 'No, I don\'t want to see you tomorrow.', isCorrect: false }, { id: 'o3', text: 'Calendar is red.', isCorrect: false }] },
    { id: 'ex_u06_l77_a2', lessonId: 'lesson_a1_6_77', stage: 17, type: 'fill_blank', prompt: 'Evaluation: Complete: "Please ___ your attendance by replying to this email."', sentenceTemplate: 'Please ___ your attendance by replying to this email.', sourceSentence: 'Please ___ your attendance by replying to this email.', options: [{ id: 'o1', text: 'confirm', isCorrect: true }, { id: 'o2', text: 'conform', isCorrect: false }, { id: 'o3', text: 'confuse', isCorrect: false }] },
    { id: 'ex_u06_l77_a3', lessonId: 'lesson_a1_6_77', stage: 17, type: 'word_ordering', prompt: 'Evaluation: Order the words:', wordBank: ['Could', 'we', 'reschedule', 'our', 'meeting', 'to', 'Friday?'], targetSentence: 'Could we reschedule our meeting to Friday?' },
    { id: 'ex_u06_l77_a4', lessonId: 'lesson_a1_6_77', stage: 17, type: 'dialogue_completion', prompt: 'Evaluation: Complete: "Is two in the afternoon convenient for you?" -> "___"', options: [{ id: 'o1', text: 'Yes, that time is very convenient for my schedule.', isCorrect: true }, { id: 'o2', text: 'I am eating an apple in the past.', isCorrect: false }, { id: 'o3', text: 'The shoes are under the bed.', isCorrect: false }] },
    { id: 'ex_u06_l77_a5', lessonId: 'lesson_a1_6_77', stage: 17, type: 'speaking', prompt: 'Evaluation: Speak this calendar confirmation statement:', targetSentence: 'I have locked in our meeting for Friday afternoon at two o\'clock.', audioText: 'I have locked in our meeting for Friday afternoon at two o\'clock.' }
  ]
};

// =========================================================================
// LESSON 78: Travel Disruptions, Missed Connections & Luggage Inquiries
// =========================================================================
export const CONFIG_78: LessonConfig = {
  num: 78,
  title: 'Travel Disruptions, Missed Connections & Luggage Inquiries',
  icon: '✈️',
  estMin: 25,
  objTitle: 'Navigate transit disruptions, report missing luggage, and handle airline rebooking using sequence connectors',
  objDesc: 'Learn vocabulary and sequential language (first, then, after that, finally) for reporting lost bags, handling delayed flights, and navigating transfer desks.',
  objHi: 'यात्रा में रुकावटों, खोए हुए सामान की रिपोर्टिंग और rebooking को क्रमसूचक शब्दों के साथ संभालना सीखें।',
  objEs: 'Aprende a gestionar interrupciones de viaje, reportar equipaje perdido y manejar la reasignación de vuelos usando conectores de secuencia.',
  canDo: [
    'I can explain that my flight or train was delayed or cancelled.',
    'I can report missing luggage at the airport baggage service desk.',
    'I can ask about alternative connections and transfer gates.'
  ],
  canDoHi: [
    'मैं बता सकता हूँ कि मेरी उड़ान या ट्रेन में देरी हुई या वह रद्द हो गई।',
    'मैं हवाई अड्डे के सामान सेवा डेस्क पर खोए हुए सामान की रिपोर्ट कर सकता हूँ।',
    'मैं वैकल्पिक कनेक्शन और ट्रांसफर गेट के बारे में पूछ सकता हूँ।'
  ],
  canDoEs: [
    'Puedo explicar que mi vuelo o tren se retrasó o canceló.',
    'Puedo reportar equipaje perdido en el mostrador de servicio de equipaje.',
    'Puedo preguntar sobre conexiones alternativas y puertas de transbordo.'
  ],
  vocab: [
    { w: 'disruption', p: '/dɪsˈrʌp.ʃən/', m: 'disturbance or problems that interrupt an event or process', hi: 'रुकावट / व्यवधान', es: 'interrupción / alteración', fr: 'perturbation', de: 'Störung', pt: 'interrupção', zh: '干扰 / 中断', ar: 'تعطيل', ja: '混乱 / 運行の乱れ', ru: 'сбой', ex: 'Severe weather caused major travel disruptions.', exHi: 'खराब मौसम के कारण यात्रा में भारी व्यवधान हुआ।', esEx: 'El mal tiempo causó grandes interrupciones en los viajes.', ic: '⛈️' },
    { w: 'connection', p: '/kəˈnek.ʃən/', m: 'a transfer from one flight or train to another', hi: 'कनेक्टिंग उड़ान / संपर्क', es: 'conexión / transbordo', fr: 'correspondance', de: 'Anschluss', pt: 'conexão', zh: '中转 / 联程', ar: 'رحلة مواصلة', ja: '乗り継ぎ', ru: 'стыковка / пересадка', ex: 'I missed my connection because the first flight was late.', exHi: 'मेरी कनेक्टिंग फ्लाइट छूट गई क्योंकि पहली उड़ान में देरी हुई थी।', esEx: 'Perdí mi conexión porque el primer vuelo llegó tarde.', ic: '🔄' },
    { w: 'luggage', p: '/ˈlʌɡ.ɪdʒ/', m: 'suitcases or other bags in which to pack personal belongings for travelling', hi: 'सामान', es: 'equipaje', fr: 'bagages', de: 'Gepäck', pt: 'bagagem', zh: '行李', ar: 'أمتعة', ja: '手荷物', ru: 'багаж', ex: 'My checked luggage did not arrive on the carousel.', exHi: 'मेरा चेक-इन किया हुआ सामान कन्वेयर बेल्ट पर नहीं आया।', esEx: 'Mi equipaje facturado no llegó a la cinta transportadora.', ic: '🧳' },
    { w: 'carousel', p: '/ˌkær.əˈsel/', m: 'a rotating conveyor belt from which baggage is collected at an airport', hi: 'सामान कन्वेयर बेल्ट', es: 'cinta de equipaje', fr: 'tapis à bagages', de: 'Gepäckband', pt: 'esteira de bagagem', zh: '行李传送带', ar: 'سير الأمتعة', ja: '荷物用ターンテーブル', ru: 'багажная лента', ex: 'We waited at carousel number four for an hour.', exHi: 'हमने एक घंटे तक कन्वेयर बेल्ट नंबर चार पर प्रतीक्षा की।', esEx: 'Esperamos en la cinta número cuatro durante una hora.', ic: '🔄' },
    { w: 'claim', p: '/kleɪm/', m: 'a formal request for compensation or retrieval of property', hi: 'दावा करना', es: 'reclamación / reclamar', fr: 'réclamation', de: 'Anspruch / Reklamation', pt: 'reivindicação', zh: '索赔 / 认领', ar: 'مطالبة', ja: '請求 / 申告', ru: 'претензия', ex: 'I need to file a baggage claim form.', exHi: 'मुझे बैगेज क्लेम फॉर्म भरना होगा।', esEx: 'Necesito presentar un formulario de reclamación de equipaje.', ic: '📝' },
    { w: 'tag', p: '/tæɡ/', m: 'a label attached to luggage showing flight and passenger details', hi: 'बैगेज टैग', es: 'etiqueta de equipaje', fr: 'étiquette', de: 'Anhänger', pt: 'etiqueta', zh: '行李牌', ar: 'بطاقة الأمتعة', ja: '荷物タグ', ru: 'бирка', ex: 'Here is my luggage claim tag.', exHi: 'यह मेरा सामान क्लेम टैग है।', esEx: 'Aquí está mi etiqueta de reclamo de equipaje.', ic: '🏷️' },
    { w: 'cancelled', p: '/ˈkæn.səld/', m: 'called off or decided not to take place', hi: 'रद्द', es: 'cancelado', fr: 'annulé', de: 'annulliert / gestrichen', pt: 'cancelado', zh: '已取消', ar: 'ملغى', ja: '欠航 / キャンセルされた', ru: 'отмененный', ex: 'Our flight to Chicago was cancelled due to fog.', exHi: 'कोहरे के कारण शिकागो के लिए हमारी उड़ान रद्द कर दी गई थी।', esEx: 'Nuestro vuelo a Chicago fue cancelado debido a la niebla.', ic: '❌' },
    { w: 'rebook', p: '/ˌriːˈbʊk/', m: 'to book a different flight or ticket after a disruption', hi: 'पुनर्बुकिंग करना', es: 'reasignar / cambiar la reserva', fr: 'réserver à nouveau', de: 'umbuchen', pt: 'remarcar', zh: '重新订票', ar: 'إعادة حجز', ja: '予約を取り直す', ru: 'перебронировать', ex: 'The agent will rebook us on the next available flight.', exHi: 'एजेंट हमें अगली उपलब्ध उड़ान पर पुनर्बुक करेगा।', esEx: 'El agente nos reubicará en el próximo vuelo disponible.', ic: '🎫' },
    { w: 'voucher', p: '/ˈvaʊ.tʃər/', m: 'a document redeemable for a meal, hotel room, or goods', hi: 'वाउचर', es: 'vale / cupón', fr: 'bon d\'échange', de: 'Gutschein', pt: 'voucher / vale', zh: '优惠券 / 代金券', ar: 'قسيمة', ja: 'バウチャー / 引換券', ru: 'ваучер', ex: 'The airline provided a hotel voucher for the night.', exHi: 'एयरलाइन ने रात के लिए होटल वाउचर प्रदान किया।', esEx: 'La aerolínea proporcionó un vale de hotel para la noche.', ic: '🏨' },
    { w: 'compensation', p: '/ˌkɒm.penˈseɪ.ʃən/', m: 'money awarded to someone as a recompense for loss or inconvenience', hi: 'मुआवजा', es: 'compensación / indemnización', fr: 'indemnisation', de: 'Entschädigung', pt: 'compensação', zh: '赔偿', ar: 'تعويض', ja: '補償 / 賠償金', ru: 'компенсация', ex: 'Passengers may request compensation for severe delays.', exHi: 'यात्री भारी देरी के लिए मुआवजे का अनुरोध कर सकते हैं।', esEx: 'Los pasajeros pueden solicitar una compensación por retrasos graves.', ic: '💵' },
    { w: 'transit', p: '/ˈtræn.zɪt/', m: 'the carrying of people or things from one place to another', hi: 'पारगमन / ट्रांजिट', es: 'tránsito', fr: 'transit', de: 'Transit', pt: 'trânsito', zh: '过境 / 中转', ar: 'عبور', ja: '通過 / トランジット', ru: 'транзит', ex: 'We spent four hours in the transit lounge.', exHi: 'हमने ट्रांजिट लाउंज में चार घंटे बिताए।', esEx: 'Pasamos cuatro horas en la sala de tránsito.', ic: '🛂' },
    { w: 'gate', p: '/ɡeɪt/', m: 'an exit from an airport terminal to an aircraft', hi: 'बोर्डिंग गेट', es: 'puerta de embarque', fr: 'porte d\'embarquement', de: 'Flugsteig / Gate', pt: 'portão de embarque', zh: '登机口', ar: 'بوابة', ja: '搭乗口 / ゲート', ru: 'выход на посадку', ex: 'Our new departure gate is B14.', exHi: 'हमारा नया प्रस्थान गेट B14 है।', esEx: 'Nuestra nueva puerta de salida es la B14.', ic: '🚪' },
    { w: 'boarding', p: '/ˈbɔː.dɪŋ/', m: 'the action of getting on or into a ship, aircraft, or other vehicle', hi: 'सवार होना / बोर्डिंग', es: 'embarque', fr: 'embarquement', de: 'Einsteigen / Boarding', pt: 'embarque', zh: '登机', ar: 'صعود الطائرة', ja: '搭乗', ru: 'посадка', ex: 'Boarding begins twenty minutes prior to departure.', exHi: 'प्रस्थान से बीस मिनट पहले बोर्डिंग शुरू होती है।', esEx: 'El embarque comienza veinte minutos antes de la salida.', ic: '🛫' },
    { w: 'destination', p: '/ˌdes.tɪˈneɪ.ʃən/', m: 'the place to which someone or something is going', hi: 'गंतव्य', es: 'destino', fr: 'destination', de: 'Reiseziel', pt: 'destino', zh: '目的地', ar: 'وجهة', ja: '目的地', ru: 'место назначения', ex: 'What is your final travel destination?', exHi: 'आपका अंतिम यात्रा गंतव्य क्या है?', esEx: '¿Cuál es tu destino final de viaje?', ic: '📍' },
    { w: 'overnight', p: '/ˌəʊ.vəˈnaɪt/', m: 'for or during the night', hi: 'रात भर का / रात्रिकालीन', es: 'durante la noche / nocturno', fr: 'de nuit', de: 'über Nacht', pt: 'durante a noite', zh: '过夜的', ar: 'طوال الليل', ja: '一晩中 / 宿泊の', ru: 'с ночевкой', ex: 'We had an overnight layover in Frankfurt.', exHi: 'फ्रैंकफर्ट में हमारा रात भर का लेओवर था।', esEx: 'Tuvimos una escala nocturna en Fráncfort.', ic: '🌙' },
    { w: 'layover', p: '/ˈleɪˌəʊ.vər/', m: 'a period of rest or waiting before further travel', hi: 'लेओवर / ठहराव', es: 'escala', fr: 'escale', de: 'Zwischenstopp', pt: 'escala / conexão', zh: '中途停留', ar: 'فترة توقف', ja: '乗り継ぎ待ち時間', ru: 'пересадка / остановка', ex: 'We have a three-hour layover in Madrid.', exHi: 'मैड्रिड में हमारा तीन घंटे का लेओवर है।', esEx: 'Tenemos una escala de tres horas en Madrid.', ic: '⏳' },
    { w: 'description', p: '/dɪˈskrɪp.ʃən/', m: 'a spoken or written representation of a person, object, or event', hi: 'विवरण', es: 'descripción', fr: 'description', de: 'Beschreibung', pt: 'descrição', zh: '描述', ar: 'وصف', ja: '説明 / 特徴', ru: 'описание', ex: 'Please give a brief description of your suitcase.', exHi: 'कृपया अपने सूटकेस का एक संक्षिप्त विवरण दें।', esEx: 'Por favor da una breve descripción de tu maleta.', ic: '📋' },
    { w: 'locate', p: '/ləʊˈkeɪt/', m: 'to discover the exact place or position of something', hi: 'पता लगाना', es: 'localizar / ubicar', fr: 'localiser', de: 'orten / finden', pt: 'localizar', zh: '定位 / 找到', ar: 'تحديد موقع', ja: '見つける / 特定する', ru: 'находить / определять место', ex: 'The staff will locate your baggage in the system.', exHi: 'कर्मचारी सिस्टम में आपके सामान का पता लगाएंगे।', esEx: 'El personal localizará tu equipaje en el sistema.', ic: '🔎' },
    { w: 'deliver', p: '/dɪˈlɪv.ər/', m: 'to bring and hand over goods or letters to the proper recipient', hi: 'पहुंचाना / सुपुर्द करना', es: 'entregar', fr: 'livrer', de: 'liefern / zustellen', pt: 'entregar', zh: '递送', ar: 'تسليم', ja: '配達する', ru: 'доставлять', ex: 'They will deliver the bag directly to my hotel.', exHi: 'वे बैग सीधे मेरे होटल में पहुंचाएंगे।', esEx: 'Entregarán la maleta directamente en mi hotel.', ic: '🚚' },
    { w: 'assistance', p: '/əˈsɪs.təns/', m: 'help or support given to a passenger', hi: 'सहायता', es: 'asistencia', fr: 'assistance', de: 'Hilfe', pt: 'assistência', zh: '协助', ar: 'مساعدة', ja: 'サポート', ru: 'содействие', ex: 'Go to the customer assistance desk for help.', exHi: 'मदद के लिए ग्राहक सहायता डेस्क पर जाएं।', esEx: 'Ve al mostrador de atención al cliente para obtener ayuda.', ic: 'ℹ️' }
  ],
  chunks: [
    { phrase: 'My luggage is missing', meaning: 'Reporting lost suitcases', hi: 'मेरा सामान गायब है', es: 'Mi equipaje está perdido', fr: 'Mes bagages sont manquants', de: 'Mein Gepäck fehlt', pt: 'Minha bagagem sumiu', zh: '我的行李丢了', ar: 'أمتعتي مفقودة', ja: '荷物が見当たりません', ru: 'Мой багаж потерян', note: 'Immediate baggage claim phrase.', ic: '🧳' },
    { phrase: 'I missed my connecting flight', meaning: 'Explaining missed transfer', hi: 'मेरी कनेक्टिंग फ्लाइट छूट गई', es: 'Perdí mi vuelo de conexión', fr: 'J\'ai raté ma correspondance', de: 'Ich habe meinen Anschlussflug verpasst', pt: 'Perdi meu voo de conexão', zh: '我错过了转机航班', ar: 'فوت رحلة المواصلة', ja: '乗り継ぎ便に乗り遅れました', ru: 'Я опоздал на пересадку', note: 'Standard airline service declaration.', ic: '✈️' },
    { phrase: 'File a claim', meaning: 'To submit an official complaint/report', hi: 'दावा दर्ज करना', es: 'Presentar una reclamación', fr: 'Déposer une réclamation', de: 'Einen Anspruch anmelden', pt: 'Fazer uma reclamação', zh: '提交索赔', ar: 'تقديم مطالبة', ja: '請求を申請する', ru: 'Подать заявление', note: 'Formal administrative action.', ic: '📄' },
    { phrase: 'Where is the transfer desk?', meaning: 'Asking directions to transit services', hi: 'ट्रांसफर डेस्क कहाँ है?', es: '¿Dónde está el mostrador de transferencias?', fr: 'Où est le comptoir des correspondances ?', de: 'Wo ist der Transferschalter?', pt: 'Onde fica o balcão de conexões?', zh: '中转柜台在哪里？', ar: 'أين مكتب الترانزيت؟', ja: '乗り継ぎカウンターはどこですか？', ru: 'Где находится транзитная стойка?', note: 'Airport orientation query.', ic: '📍' },
    { phrase: 'First..., then..., after that...', meaning: 'Sequential connectors', hi: 'पहले..., फिर..., उसके बाद...', es: 'Primero..., luego..., después...', fr: 'D\'abord..., ensuite..., après cela...', de: 'Zuerst..., dann..., danach...', pt: 'Primeiro..., depois..., após isso...', zh: '首先……然后……之后……', ar: 'أولاً... ثم... بعد ذلك...', ja: 'まず…、次に…、その後に…', ru: 'Сначала..., затем..., после этого...', note: 'Core sequence markers.', ic: '🔢' },
    { phrase: 'Could you rebook me?', meaning: 'Polite request for alternate ticketing', hi: 'क्या आप मुझे दोबारा बुक कर सकते हैं?', es: '¿Podría reubicarme en otro vuelo?', fr: 'Pourriez-vous me réenregistrer ?', de: 'Könnten Sie mich umbuchen?', pt: 'Você poderia me remarcar?', zh: '能帮我改签吗？', ar: 'هل يمكنك إعادة حجزي؟', ja: '便の振り替えをお願いできますか？', ru: 'Не могли бы вы перебронировать меня?', note: 'Rebooking service request.', ic: '🎫' },
    { phrase: 'Here is my baggage receipt', meaning: 'Providing verification proof', hi: 'यह मेरी बैगेज रसीद है', es: 'Aquí está mi recibo de equipaje', fr: 'Voici mon reçu de bagage', de: 'Hier ist mein Gepäckabschnitt', pt: 'Aqui está meu comprovante de bagagem', zh: '这是我的行李票', ar: 'إليك إيصال أمتعتي', ja: 'これが手荷物引換証です', ru: 'Вот моя багажная квитанция', note: 'Claim verification step.', ic: '🧾' },
    { phrase: 'Will my bag be delivered?', meaning: 'Asking about hotel delivery', hi: 'क्या मेरा बैग पहुंचाया जाएगा?', es: '¿Entregarán mi maleta?', fr: 'Mon bagage sera-t-il livré ?', de: 'Wird mein Gepäck geliefert?', pt: 'Minha mala será entregue?', zh: '我的行李会被送到酒店吗？', ar: 'هل سيتم توصيل حقيبتي؟', ja: '荷物は届けられますか？', ru: 'Мой багаж доставят?', note: 'Delivery inquiry.', ic: '🚚' }
  ],
  grammar: {
    title: 'Sequencing Past Events: First, Then, After That, Finally',
    concept: 'Using sequence markers paired with Past Simple to explain the timeline of travel disruptions.',
    patterns: [
      {
        title: 'Sequence Adverbs with Past Simple',
        structure: 'First, [Action 1]. Then, [Action 2]. After that, [Action 3]. Finally, [Action 4].',
        rule: 'Use sequencing words at the start of sentences to organize a chronological story or explanation.',
        examples: [
          { en: 'First, our flight was delayed by two hours. Then, we missed our connection in Paris.', hi: 'पहले, हमारी उड़ान में दो घंटे की देरी हुई। फिर, पेरिस में हमारी कनेक्टिंग फ्लाइट छूट गई।', es: 'Primero, nuestro vuelo se retrasó dos horas. Luego, perdimos nuestra conexión en París.' },
          { en: 'After that, we went to the service desk, and finally, the agent rebooked us.', hi: 'उसके बाद, हम सेवा डेस्क पर गए, और अंत में, एजेंट ने हमें दोबारा बुक कर दिया।', es: 'Después de eso, fuimos al mostrador de servicio y, finalmente, el agente nos reubicó.' }
        ]
      },
      {
        title: 'Explaining Missing Items with "Did not + Base Verb"',
        structure: 'My bag / suitcase + did not arrive / did not appear',
        rule: 'Use "did not" + bare infinitive to state negative past events.',
        examples: [
          { en: 'My black suitcase did not arrive on the carousel.', hi: 'मेरा काला सूटकेस कन्वेयर बेल्ट पर नहीं आया।', es: 'Mi maleta negra no llegó a la cinta transportadora.' },
          { en: 'The boarding gate did not open on time.', hi: 'बोर्डिंग गेट समय पर नहीं खुला।', es: 'La puerta de embarque no abrió a tiempo.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'My luggage did not arrived.', cor: 'My luggage did not arrive.', corExp: 'After the auxiliary "did not", use the base form of the verb.', incExp: 'Using past tense "arrived" after "did not" is a double-past error.', exp: 'Say "did not arrive" (base form).', hi: '"Did not" के बाद क्रिया का पहला रूप (base form) आता है।', es: 'Después de "did not", usa el verbo en infinitivo sin "to".' },
    { inc: 'I lost my flight connection because the delay.', cor: 'I missed my flight connection because of the delay.', corExp: 'Use "missed" for scheduled transit, and "because of" before a noun phrase.', incExp: 'Using "lost" for flights and missing "of" after because.', exp: 'Say "missed my flight" and "because of the delay".', hi: 'फ्लाइट छूटने के लिए "missed" और संज्ञा से पहले "because of" कहें।', es: 'Usa "missed" para vuelos y "because of" antes de un sustantivo.' },
    { inc: 'First we landed, after we went to desk.', cor: 'First we landed, and after that we went to the desk.', corExp: 'Use "after that" or "afterwards" as an adverbial linker, not standalone "after" as a connector here.', incExp: '"After" requires an object or "that".', exp: 'Use "after that" or "then" to link sentences.', hi: 'वाक्यों को जोड़ने के लिए "after that" या "then" का प्रयोग करें।', es: 'Usa "after that" o "then" como conector entre oraciones.' },
    { inc: 'Where I can find the baggage claim?', cor: 'Where can I find the baggage claim?', corExp: 'In direct questions, invert the modal auxiliary and subject: "Where can I...".', incExp: 'Subject placed before modal in question structure.', exp: 'Say "Where can I find..." in direct questions.', hi: 'प्रश्न में "Where can I find..." का प्रयोग करें।', es: 'En preguntas directas se invierte: "Where can I find...".' },
    { inc: 'They will delivery my suitcase tomorrow.', cor: 'They will deliver my suitcase tomorrow.', corExp: 'Use the verb "deliver" after the modal "will".', incExp: '"Delivery" is a noun, not a verb.', exp: 'Use the verb form "deliver".', hi: '"Will" के बाद क्रिया "deliver" का प्रयोग करें।', es: 'Usa el verbo "deliver" después de "will".' }
  ],
  dialogues: [
    {
      title: 'Reporting Lost Baggage at the Airport',
      context: 'Hannah reports her missing suitcase to the baggage service agent.',
      charA: { name: 'Hannah', av: '👩‍💼', role: 'Passenger' },
      charB: { name: 'Agent Davis', av: '👨‍✈️', role: 'Baggage Services Agent' },
      turns: [
        { spk: 'Hannah', text: 'Excuse me, my flight from London just landed, but my checked luggage did not arrive on carousel three.', hi: 'क्षमा करें, लंदन से मेरी उड़ान अभी उतरी है, लेकिन मेरा चेक-इन सामान कन्वेयर तीन पर नहीं आया।', es: 'Disculpe, mi vuelo de Londres acaba de aterrizar, pero mi equipaje facturado no llegó a la cinta tres.' },
        { spk: 'Agent Davis', text: 'I am sorry to hear that. May I see your baggage claim tag and boarding pass?', hi: 'यह सुनकर मुझे खेद है। क्या मैं आपका बैगेज क्लेम टैग और बोर्डिंग पास देख सकता हूँ?', es: 'Lamento escuchar eso. ¿Puedo ver su etiqueta de reclamo de equipaje y tarjeta de embarque?' },
        { spk: 'Hannah', text: 'Yes, here is the tag. It is a large black suitcase with red wheels.', hi: 'हाँ, यह टैग है। यह लाल पहियों वाला एक बड़ा काला सूटकेस है।', es: 'Sí, aquí está la etiqueta. Es una maleta negra grande con ruedas rojas.' },
        { spk: 'Agent Davis', text: 'Thank you. I have located your bag in the system; it was delayed in London and will arrive on the next flight tonight.', hi: 'धन्यवाद। मैंने सिस्टम में आपके बैग का पता लगा लिया है; यह लंदन में देरी से छूट गया था और आज रात अगली उड़ान से आएगा।', es: 'Gracias. He localizado su maleta en el sistema; se retrasó en Londres y llegará en el próximo vuelo esta noche.' },
        { spk: 'Hannah', text: 'Will you deliver it to my hotel tomorrow morning?', hi: 'क्या आप इसे कल सुबह मेरे होटल पहुंचा देंगे?', es: '¿La entregarán en mi hotel mañana por la mañana?' },
        { spk: 'Agent Davis', text: 'Yes, absolutely. Please fill out this delivery address form, and we will deliver it for free.', hi: 'हाँ, बिल्कुल। कृपया यह डिलीवरी पता फॉर्म भरें, और हम इसे निःशुल्क पहुंचाएंगे।', es: 'Sí, absolutamente. Por favor complete este formulario con la dirección de entrega y se la entregaremos gratis.' }
      ]
    },
    {
      title: 'Missed Connection & Rebooking',
      context: 'Sam navigates the airline transit desk after missing his connecting flight.',
      charA: { name: 'Sam', av: '👨‍💼', role: 'Business Traveler' },
      charB: { name: 'Officer Lisa', av: '👩‍✈️', role: 'Transit Desk Agent' },
      turns: [
        { spk: 'Sam', text: 'Hello, our inbound plane was delayed, so I missed my connecting flight to Tokyo.', hi: 'नमस्ते, हमारे आने वाले विमान में देरी हुई थी, इसलिए टोक्यो के लिए मेरी कनेक्टिंग फ्लाइट छूट गई।', es: 'Hola, nuestro avión de llegada se retrasó, así que perdí mi vuelo de conexión a Tokio.' },
        { spk: 'Officer Lisa', text: 'Don\'t worry sir, let me look up your reservation. First, could I have your passport?', hi: 'चिंता न करें सर, मुझे आपका आरक्षण देखने दीजिए। सबसे पहले, क्या मुझे आपका पासपोर्ट मिल सकता है?', es: 'No se preocupe señor, déjeme buscar su reserva. Primero, ¿podría darme su pasaporte?' },
        { spk: 'Sam', text: 'Here it is. Is there another departure today?', hi: 'यह रहा। क्या आज कोई दूसरा प्रस्थान है?', es: 'Aquí tiene. ¿Hay otra salida hoy?' },
        { spk: 'Officer Lisa', text: 'Yes. I can rebook you on the 8:00 PM flight. We will also provide a meal voucher for the delay.', hi: 'हाँ। मैं आपको रात 8:00 बजे की उड़ान पर दोबारा बुक कर सकती हूँ। हम देरी के लिए भोजन वाउचर भी प्रदान करेंगे।', es: 'Sí. Puedo reubicarlo en el vuelo de las 8:00 PM. También le proporcionaremos un vale de comida por el retraso.' },
        { spk: 'Sam', text: 'That is very helpful. Thank you for your assistance!', hi: 'यह बहुत मददगार है। आपकी सहायता के लिए धन्यवाद!', es: 'Eso es de gran ayuda. ¡Gracias por su ayuda!' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u06_l78_p1', lessonId: 'lesson_a1_6_78', stage: 8, type: 'multiple_choice', prompt: 'Choose the correct sequence marker: "___, our plane landed. Then, we went to baggage claim."', options: [{ id: 'o1', text: 'First', isCorrect: true }, { id: 'o2', text: 'Finally', isCorrect: false }, { id: 'o3', text: 'Never', isCorrect: false }] },
    { id: 'ex_u06_l78_p2', lessonId: 'lesson_a1_6_78', stage: 8, type: 'multiple_choice', prompt: 'Choose the correct negative past form: "My checked bag ___ on carousel four."', options: [{ id: 'o1', text: 'did not arrive', isCorrect: true }, { id: 'o2', text: 'did not arrived', isCorrect: false }, { id: 'o3', text: 'does not arrived', isCorrect: false }] },
    { id: 'ex_u06_l78_p3', lessonId: 'lesson_a1_6_78', stage: 8, type: 'fill_blank', prompt: 'Complete: "The airline gave us a meal ___ because our flight was cancelled."', sentenceTemplate: 'The airline gave us a meal ___ because our flight was cancelled.', sourceSentence: 'The airline gave us a meal ___ because our flight was cancelled.', options: [{ id: 'o1', text: 'voucher', isCorrect: true }, { id: 'o2', text: 'vowel', isCorrect: false }, { id: 'o3', text: 'volume', isCorrect: false }] },
    { id: 'ex_u06_l78_p4', lessonId: 'lesson_a1_6_78', stage: 8, type: 'match_pairs', prompt: 'Match travel terms with descriptions:', pairs: [{ left: 'carousel', right: 'baggage belt' }, { left: 'rebook', right: 'schedule a new flight' }, { left: 'layover', right: 'waiting time between flights' }, { left: 'claim tag', right: 'luggage receipt label' }] },
    { id: 'ex_u06_l78_p5', lessonId: 'lesson_a1_6_78', stage: 8, type: 'word_ordering', prompt: 'Order the words to report a missing suitcase:', wordBank: ['My', 'black', 'suitcase', 'did', 'not', 'arrive.'], targetSentence: 'My black suitcase did not arrive.' },
    { id: 'ex_u06_l78_p6', lessonId: 'lesson_a1_6_78', stage: 8, type: 'error_correction', prompt: 'Correct the grammatical error in this question:', sourceSentence: 'Where I can find the customer assistance desk?', targetSentence: 'Where can I find the customer assistance desk?', options: [{ id: 'o1', text: 'Where can I find the customer assistance desk?', isCorrect: true }, { id: 'o2', text: 'Where I am finding customer assistance desk?', isCorrect: false }] },
    { id: 'ex_u06_l78_p7', lessonId: 'lesson_a1_6_78', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'I missed my connecting flight because the inbound plane was delayed.', targetSentence: 'I missed my connecting flight because the inbound plane was delayed.' },
    { id: 'ex_u06_l78_p8', lessonId: 'lesson_a1_6_78', stage: 10, type: 'multiple_choice', prompt: 'Choose the most natural question to ask about luggage delivery:', options: [{ id: 'o1', text: 'Will my bag be delivered directly to my hotel?', isCorrect: true }, { id: 'o2', text: 'Will my bag delivering to my hotel?', isCorrect: false }, { id: 'o3', text: 'Is my bag deliver to hotel?', isCorrect: false }] },
    { id: 'ex_u06_l78_p9', lessonId: 'lesson_a1_6_78', stage: 11, type: 'dialogue_completion', prompt: 'Complete the airport dialogue: "My flight was cancelled due to fog." -> "___"', options: [{ id: 'o1', text: 'Please step over to the desk, and I will rebook you on the next flight.', isCorrect: true }, { id: 'o2', text: 'I am reading a book at school.', isCorrect: false }, { id: 'o3', text: 'The apples are green.', isCorrect: false }] },
    { id: 'ex_u06_l78_p10', lessonId: 'lesson_a1_6_78', stage: 12, type: 'speaking', prompt: 'Speak this travel declaration clearly into your microphone:', targetSentence: 'Excuse me, my checked luggage did not arrive on the carousel.', audioText: 'Excuse me, my checked luggage did not arrive on the carousel.' },
    { id: 'ex_u06_l78_p11', lessonId: 'lesson_a1_6_78', stage: 13, type: 'translation', prompt: 'Translate: "मेरी कनेक्टिंग फ्लाइट छूट गई क्योंकि पहली उड़ान में देरी हुई थी।" / "Perdí mi vuelo de conexión porque el primer vuelo llegó tarde."', targetSentence: 'I missed my connection because the first flight was late.' },
    { id: 'ex_u06_l78_p12', lessonId: 'lesson_a1_6_78', stage: 14, type: 'multiple_choice', prompt: 'Which word means the period of waiting between two connecting flights?', options: [{ id: 'o1', text: 'layover', isCorrect: true }, { id: 'o2', text: 'runway', isCorrect: false }, { id: 'o3', text: 'cockpit', isCorrect: false }] },
    { id: 'ex_u06_l78_p13', lessonId: 'lesson_a1_6_78', stage: 14, type: 'fill_blank', prompt: 'Complete: "The agent will ___ your bag in the computer system."', sentenceTemplate: 'The agent will ___ your bag in the computer system.', sourceSentence: 'The agent will ___ your bag in the computer system.', options: [{ id: 'o1', text: 'locate', isCorrect: true }, { id: 'o2', text: 'locomotive', isCorrect: false }, { id: 'o3', text: 'lock', isCorrect: false }] },
    { id: 'ex_u06_l78_p14', lessonId: 'lesson_a1_6_78', stage: 14, type: 'word_ordering', prompt: 'Order the words to describe sequential travel actions:', wordBank: ['First', 'we', 'landed,', 'and', 'then', 'we', 'rebooked.'], targetSentence: 'First we landed, and then we rebooked.' },
    { id: 'ex_u06_l78_p15', lessonId: 'lesson_a1_6_78', stage: 14, type: 'speaking', prompt: 'Speak this inquiry statement:', targetSentence: 'Where is the transit desk for international transfers?', audioText: 'Where is the transit desk for international transfers?' }
  ],
  review: [
    { id: 'ex_u06_l78_r1', lessonId: 'lesson_a1_6_78', stage: 16, type: 'multiple_choice', prompt: 'Retrieval: Choose the sentence with correct sequence adverbs:', options: [{ id: 'o1', text: 'First we filed a claim, and after that we received a hotel voucher.', isCorrect: true }, { id: 'o2', text: 'First we filed claim, after we received voucher.', isCorrect: false }, { id: 'o3', text: 'Finally we filed claim first we received.', isCorrect: false }] },
    { id: 'ex_u06_l78_r2', lessonId: 'lesson_a1_6_78', stage: 16, type: 'fill_blank', prompt: 'Retrieval: Complete: "Here is my luggage claim ___ from check-in."', sentenceTemplate: 'Here is my luggage claim ___ from check-in.', sourceSentence: 'Here is my luggage claim ___ from check-in.', options: [{ id: 'o1', text: 'tag', isCorrect: true }, { id: 'o2', text: 'toe', isCorrect: false }, { id: 'o3', text: 'tip', isCorrect: false }] },
    { id: 'ex_u06_l78_r3', lessonId: 'lesson_a1_6_78', stage: 16, type: 'word_ordering', prompt: 'Retrieval: Order the words:', wordBank: ['The', 'flight', 'was', 'cancelled', 'due', 'to', 'fog.'], targetSentence: 'The flight was cancelled due to fog.' },
    { id: 'ex_u06_l78_r4', lessonId: 'lesson_a1_6_78', stage: 16, type: 'match_pairs', prompt: 'Retrieval: Match travel disruptions with solutions:', pairs: [{ left: 'missed connection', right: 'rebook on next departure' }, { left: 'lost suitcase', right: 'file baggage claim form' }, { left: 'overnight delay', right: 'request hotel voucher' }, { left: 'wrong gate', right: 'check departure monitor' }] },
    { id: 'ex_u06_l78_r5', lessonId: 'lesson_a1_6_78', stage: 16, type: 'translation', prompt: 'Retrieval: Translate: "क्या आप मुझे अगली उपलब्ध उड़ान पर पुनर्बुक कर सकते हैं?" / "¿Podría reubicarme en el próximo vuelo disponible?"', targetSentence: 'Could you rebook me on the next available flight?' }
  ],
  assessment: [
    { id: 'ex_u06_l78_a1', lessonId: 'lesson_a1_6_78', stage: 17, type: 'multiple_choice', prompt: 'Evaluation: Choose the most accurate explanation of a travel disruption:', options: [{ id: 'o1', text: 'Our flight was delayed, so we missed our connecting flight to Tokyo.', isCorrect: true }, { id: 'o2', text: 'Our flight was delay, so we missing connection.', isCorrect: false }, { id: 'o3', text: 'Our flight delayed because so we missed.', isCorrect: false }] },
    { id: 'ex_u06_l78_a2', lessonId: 'lesson_a1_6_78', stage: 17, type: 'fill_blank', prompt: 'Evaluation: Complete: "The airline provided free meal ___ for all delayed passengers."', sentenceTemplate: 'The airline provided free meal ___ for all delayed passengers.', sourceSentence: 'The airline provided free meal ___ for all delayed passengers.', options: [{ id: 'o1', text: 'vouchers', isCorrect: true }, { id: 'o2', text: 'volcanoes', isCorrect: false }, { id: 'o3', text: 'voltages', isCorrect: false }] },
    { id: 'ex_u06_l78_a3', lessonId: 'lesson_a1_6_78', stage: 17, type: 'word_ordering', prompt: 'Evaluation: Order the words:', wordBank: ['Where', 'is', 'the', 'baggage', 'service', 'desk', 'located?'], targetSentence: 'Where is the baggage service desk located?' },
    { id: 'ex_u06_l78_a4', lessonId: 'lesson_a1_6_78', stage: 17, type: 'dialogue_completion', prompt: 'Evaluation: Complete: "Where will you deliver my missing bag?" -> "___"', options: [{ id: 'o1', text: 'We will deliver it directly to your hotel address tomorrow morning.', isCorrect: true }, { id: 'o2', text: 'I am playing tennis next week.', isCorrect: false }, { id: 'o3', text: 'The airport is built in 1980.', isCorrect: false }] },
    { id: 'ex_u06_l78_a5', lessonId: 'lesson_a1_6_78', stage: 17, type: 'speaking', prompt: 'Evaluation: Speak this complete sequential description:', targetSentence: 'First my flight was delayed, and then the agent rebooked my ticket.', audioText: 'First my flight was delayed, and then the agent rebooked my ticket.' }
  ]
};
