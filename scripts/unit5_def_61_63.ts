import { LessonConfig } from './unit5_builder_helper';

// =========================================================================
// LESSON 61: Workplace Collaboration, Team Meetings & Status Updates
// =========================================================================
export const CONFIG_61: LessonConfig = {
  num: 61,
  title: 'Workplace Collaboration, Team Meetings & Status Updates',
  icon: '💼',
  estMin: 25,
  objTitle: 'Collaborate with colleagues, share task status, and participate in meetings',
  objDesc: 'Master vocabulary and phrases for status updates, progress checks, and collaborative workplace discussions using present continuous for ongoing tasks.',
  objHi: 'सहकर्मियों के साथ सहयोग करना, कार्य की स्थिति साझा करना और टीम बैठकों में भाग लेना सीखें।',
  objEs: 'Aprende a colaborar con colegas, compartir el estado de tareas y participar en reuniones de equipo.',
  canDo: [
    'I can describe what tasks I am currently working on.',
    'I can give a brief status update during a team meeting.',
    'I can ask colleagues for progress updates and offer assistance.'
  ],
  canDoHi: [
    'मैं बता सकता हूँ कि मैं वर्तमान में किन कार्यों पर काम कर रहा हूँ।',
    'मैं टीम बैठक के दौरान अपनी प्रगति का संक्षिप्त विवरण दे सकता हूँ।',
    'मैं सहकर्मियों से प्रगति की जानकारी मांग सकता हूँ और मदद की पेशकश कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir en qué tareas estoy trabajando actualmente.',
    'Puedo dar una breve actualización de estado durante una reunión de equipo.',
    'Puedo pedir actualizaciones de progreso a mis colegas y ofrecer ayuda.'
  ],
  vocab: [
    { w: 'update', p: '/ʌpˈdeɪt/', m: 'new or recent information about a situation', hi: 'अपडेट / ताज़ा जानकारी', es: 'actualización', fr: 'mise à jour', de: 'Aktualisierung', pt: 'atualização', zh: '最新消息', ar: 'تحديث', ja: '更新 / 最新情報', ru: 'обновление', ex: 'Here is a quick update on our project.', exHi: 'यह हमारी परियोजना पर एक त्वरित अपडेट है।', exEs: 'Aquí hay una actualización rápida de nuestro proyecto.', ic: '🔄' },
    { w: 'progress', p: '/ˈprəʊ.ɡres/', m: 'movement forward toward completing a task', hi: 'प्रगति', es: 'progreso', fr: 'progrès', de: 'Fortschritt', pt: 'progresso', zh: '进度', ar: 'تقدم', ja: '進捗', ru: 'прогресс', ex: 'We are making good progress on the report.', exHi: 'हम रिपोर्ट पर अच्छी प्रगति कर रहे हैं।', exEs: 'Estamos haciendo un buen progreso en el informe.', ic: '📈' },
    { w: 'task', p: '/tɑːsk/', m: 'a piece of work to be done', hi: 'कार्य', es: 'tarea', fr: 'tâche', de: 'Aufgabe', pt: 'tarefa', zh: '任务', ar: 'مهمة', ja: 'タスク', ru: 'задача', ex: 'I completed three tasks this morning.', exHi: 'मैंने आज सुबह तीन काम पूरे किए।', exEs: 'Completé tres tareas esta mañana.', ic: '📋' },
    { w: 'presentation', p: '/ˌprez.ənˈteɪ.ʃən/', m: 'a talk explaining an idea or proposal', hi: 'प्रस्तुति', es: 'presentación', fr: 'présentation', de: 'Präsentation', pt: 'apresentação', zh: '演示文稿', ar: 'عرض تقديمي', ja: 'プレゼンテーション', ru: 'презентация', ex: 'The marketing presentation starts at eleven.', exHi: 'मार्केटिंग प्रेजेंटेशन ग्यारह बजे शुरू होगी।', exEs: 'La presentación de marketing comienza a las once.', ic: '📊' },
    { w: 'feedback', p: '/ˈfiːd.bæk/', m: 'helpful comments or critique on work done', hi: 'प्रतिक्रिया', es: 'comentarios / retroalimentación', fr: 'retour d\'information', de: 'Feedback', pt: 'feedback', zh: '反馈', ar: 'ملاحظات', ja: 'フィードバック', ru: 'обратная связь', ex: 'Thank you for your constructive feedback.', exHi: 'आपकी सकारात्मक प्रतिक्रिया के लिए धन्यवाद।', exEs: 'Gracias por tus comentarios constructivos.', ic: '💬' },
    { w: 'priority', p: '/praɪˈɒr.ə.ti/', m: 'something regarded as more important than others', hi: 'प्राथमिकता', es: 'prioridad', fr: 'priorité', de: 'Priorität', pt: 'prioridade', zh: '优先事项', ar: 'أولوية', ja: '優先事項', ru: 'приоритет', ex: 'Finishing the budget is our top priority.', exHi: 'बजट पूरा करना हमारी पहली प्राथमिकता है।', exEs: 'Terminar el presupuesto es nuestra máxima prioridad.', ic: '⭐' },
    { w: 'agenda', p: '/əˈdʒen.də/', m: 'a list of topics to be discussed in a meeting', hi: 'कार्यसूची / एजेंडा', es: 'orden del día / agenda', fr: 'ordre du jour', de: 'Tagesordnung', pt: 'pauta / agenda', zh: '议程', ar: 'جدول أعمال', ja: '議題 / アジェンダ', ru: 'повестка дня', ex: 'Did you see the meeting agenda?', exHi: 'क्या आपने बैठक का एजेंडा देखा?', exEs: '¿Viste la agenda de la reunión?', ic: '📜' },
    { w: 'assign', p: '/əˈsaɪn/', m: 'to allocate a job or responsibility to someone', hi: 'सौंपना', es: 'asignar', fr: 'assigner', de: 'zuweisen', pt: 'atribuir', zh: '分配', ar: 'تعيين', ja: '割り当てる', ru: 'назначать', ex: 'The manager will assign the new roles today.', exHi: 'प्रबंधक आज नई भूमिकाएँ सौंपेंगे।', exEs: 'El gerente asignará los nuevos roles hoy.', ic: '📌' },
    { w: 'status', p: '/ˈsteɪ.təs/', m: 'the current condition of a project or task', hi: 'स्थिति', es: 'estado', fr: 'statut', de: 'Status', pt: 'status / estado', zh: '状态', ar: 'حالة', ja: 'ステータス', ru: 'статус', ex: 'What is the current status of the design?', exHi: 'डिज़ाइन की वर्तमान स्थिति क्या है?', exEs: '¿Cuál es el estado actual del diseño?', ic: '🔍' },
    { w: 'collaborate', p: '/kəˈlæb.ə.reɪt/', m: 'to work together on a common goal', hi: 'सहयोग करना', es: 'colaborar', fr: 'collaborer', de: 'zusammenarbeiten', pt: 'colaborar', zh: '合作', ar: 'التعاون', ja: '協力する', ru: 'сотрудничать', ex: 'We collaborate with the engineering team.', exHi: 'हम इंजीनियरिंग टीम के साथ सहयोग करते हैं।', exEs: 'Colaboramos con el equipo de ingeniería.', ic: '🤝' },
    { w: 'summary', p: '/ˈsʌm.ər.i/', m: 'a brief statement of main points', hi: 'सारांश', es: 'resumen', fr: 'résumé', de: 'Zusammenfassung', pt: 'resumo', zh: '总结', ar: 'ملخص', ja: '要約', ru: 'резюме', ex: 'Please send me a short summary of the call.', exHi: 'कृपया मुझे कॉल का एक संक्षिप्त सारांश भेजें।', exEs: 'Por favor envíame un breve resumen de la llamada.', ic: '📝' },
    { w: 'timeline', p: '/ˈtaɪm.laɪn/', m: 'a schedule showing expected completion dates', hi: 'समयरेखा', es: 'cronograma', fr: 'calendrier', de: 'Zeitachse', pt: 'cronograma', zh: '时间线', ar: 'جدول زمني', ja: 'タイムライン', ru: 'график', ex: 'Our timeline requires completion by Friday.', exHi: 'हमारी समयरेखा शुक्रवार तक पूरा करने की मांग करती है।', exEs: 'Nuestro cronograma requiere finalizar para el viernes.', ic: '⏱️' },
    { w: 'organize', p: '/ˈɔː.ɡən.aɪz/', m: 'to arrange systematically', hi: 'व्यवस्थित करना', es: 'organizar', fr: 'organiser', de: 'organisieren', pt: 'organizar', zh: '组织', ar: 'تنظيم', ja: '整理する', ru: 'организовывать', ex: 'I need to organize these files.', exHi: 'मुझे इन फ़ाइलों को व्यवस्थित करने की आवश्यकता है।', exEs: 'Necesito organizar estos archivos.', ic: '🗂️' },
    { w: 'prepare', p: '/prɪˈpeər/', m: 'to make something ready for use', hi: 'तैयार करना', es: 'preparar', fr: 'préparer', de: 'vorbereiten', pt: 'preparar', zh: '准备', ar: 'إعداد', ja: '準備する', ru: 'подготавливать', ex: 'I am preparing the slides for the meeting.', exHi: 'मैं बैठक के लिए स्लाइड तैयार कर रहा हूँ।', exEs: 'Estoy preparando las diapositivas para la reunión.', ic: '📑' },
    { w: 'review', p: '/rɪˈvjuː/', m: 'to examine something carefully', hi: 'समीक्षा करना', es: 'revisar', fr: 'examiner', de: 'überprüfen', pt: 'revisar', zh: '审查', ar: 'مراجعة', ja: '確認する', ru: 'проверять', ex: 'Please review the contract before signing.', exHi: 'हस्ताक्षर करने से पहले कृपया अनुबंध की समीक्षा करें।', exEs: 'Por favor revisa el contrato antes de firmar.', ic: '🧐' },
    { w: 'discuss', p: '/dɪˈskʌs/', m: 'to talk about something in detail', hi: 'चर्चा करना', es: 'debatir / discutir', fr: 'discuter', de: 'besprechen', pt: 'discutir', zh: '讨论', ar: 'مناقشة', ja: '話し合う', ru: 'обсуждать', ex: 'Let us discuss the quarterly goals.', exHi: 'आइए त्रैमासिक लक्ष्यों पर चर्चा करें।', exEs: 'Discutamos los objetivos trimestrales.', ic: '🗣️' },
    { w: 'delay', p: '/dɪˈleɪ/', m: 'a period of time by which something is late', hi: 'देरी', es: 'retraso', fr: 'retard', de: 'Verzögerung', pt: 'atraso', zh: '延误', ar: 'تأخير', ja: '遅延', ru: 'задержка', ex: 'There is a small delay with the shipment.', exHi: 'शिपमेंट में थोड़ी देरी है।', exEs: 'Hay un pequeño retraso con el envío.', ic: '⏳' },
    { w: 'solution', p: '/səˈluː.ʃən/', m: 'a means of solving a problem', hi: 'समाधान', es: 'solución', fr: 'solution', de: 'Lösung', pt: 'solução', zh: '解决方案', ar: 'حل', ja: '解決策', ru: 'решение', ex: 'We found an effective solution to the issue.', exHi: 'हमने इस मुद्दे का एक प्रभावी समाधान खोज लिया।', exEs: 'Encontramos una solución eficaz al problema.', ic: '💡' },
    { w: 'target', p: '/ˈtɑː.ɡɪt/', m: 'an objective or goal to be reached', hi: 'लक्ष्य', es: 'objetivo', fr: 'cible', de: 'Ziel', pt: 'meta', zh: '目标', ar: 'هدف', ja: '目標', ru: 'цель', ex: 'Our sales target is twenty percent higher this month.', exHi: 'इस महीने हमारा बिक्री लक्ष्य बीस प्रतिशत अधिक है।', exEs: 'Nuestro objetivo de ventas es un veinte por ciento más alto este mes.', ic: '🎯' },
    { w: 'efficiency', p: '/ɪˈfɪʃ.ən.si/', m: 'the state of achieving maximum productivity', hi: 'दक्षता', es: 'eficiencia', fr: 'efficacité', de: 'Effizienz', pt: 'eficiência', zh: '效率', ar: 'كفاءة', ja: '効率', ru: 'эффективность', ex: 'This new software improves our team efficiency.', exHi: 'यह नया सॉफ्टवेयर हमारी टीम की दक्षता में सुधार करता है।', exEs: 'Este nuevo software mejora la eficiencia de nuestro equipo.', ic: '⚡' }
  ],
  chunks: [
    { phrase: 'give a status update', meaning: 'to report the current situation of tasks', hi: 'स्थिति का विवरण देना', es: 'dar una actualización de estado', fr: 'faire un point sur l\'avancement', de: 'einen Statusbericht geben', pt: 'dar uma atualização de status', zh: '汇报进展', ar: 'تقديم تقرير عن الحالة', ja: '進捗を報告する', ru: 'сообщить о статусе', note: 'Standard meeting phrase.', ic: '📢' },
    { phrase: 'work on a project', meaning: 'to be actively busy with a project', hi: 'परियोजना पर काम करना', es: 'trabajar en un proyecto', fr: 'travailler sur un projet', de: 'an einem Projekt arbeiten', pt: 'trabalhar em um projeto', zh: '做项目', ar: 'العمل على مشروع', ja: 'プロジェクトに取り組む', ru: 'работать над проектом', note: 'Common ongoing activity structure.', ic: '🏗️' },
    { phrase: 'on track', meaning: 'progressing according to schedule', hi: 'सही समय पर / पटरी पर', es: 'según lo previsto / en curso', fr: 'sur la bonne voie', de: 'im Zeitplan', pt: 'dentro do prazo', zh: '按计划进行', ar: 'في المسار الصحيح', ja: '順調に進んで', ru: 'по плану', note: 'High frequency business idiom.', ic: '🚂' },
    { phrase: 'behind schedule', meaning: 'slower than planned', hi: 'समय से पीछे', es: 'retrasado', fr: 'en retard sur le planning', de: 'hinter dem Zeitplan', pt: 'atrasado', zh: '进度落后', ar: 'متأخر عن الجدول', ja: '予定より遅れて', ru: 'с отставанием от графика', note: 'Used when tasks face delays.', ic: '⚠️' },
    { phrase: 'ahead of schedule', meaning: 'faster than planned', hi: 'समय से आगे', es: 'adelantado', fr: 'en avance sur le planning', de: 'dem Zeitplan voraus', pt: 'adiantado', zh: '提前', ar: 'متقدم عن الجدول', ja: '予定より早く', ru: 'с опережением графика', note: 'Used for early completions.', ic: '🚀' },
    { phrase: 'take the lead', meaning: 'to take responsibility for directing a task', hi: 'नेतृत्व करना', es: 'tomar la iniciativa / liderar', fr: 'prendre la tête', de: 'die Führung übernehmen', pt: 'assumir a liderança', zh: '牵头', ar: 'تولي القيادة', ja: '主導権を握る', ru: 'взять на себя инициативу', note: 'Workplace initiative expression.', ic: '👑' },
    { phrase: 'keep in the loop', meaning: 'to keep someone informed', hi: 'सूचित रखना', es: 'mantener al tanto', fr: 'tenir au courant', de: 'auf dem Laufenden halten', pt: 'manter informado', zh: '保持沟通', ar: 'إبقاء الشخص على اطلاع', ja: '情報を共有し続ける', ru: 'держать в курсе', note: 'Idiomatic collaboration phrase.', ic: '🔄' },
    { phrase: 'wrap up', meaning: 'to finish or conclude an activity', hi: 'समाप्त करना', es: 'concluir / cerrar', fr: 'conclure', de: 'abschließen', pt: 'finalizar / concluir', zh: '结束', ar: 'اختتام', ja: 'まとめる / 終える', ru: 'завершать', note: 'Meeting wrap-up expression.', ic: '🏁' }
  ],
  grammar: {
    title: 'Present Continuous for Ongoing Projects & Temporary Workplace Tasks',
    concept: 'Using be + verb-ing to describe tasks actively in progress and contrast with general routines (Present Simple).',
    patterns: [
      {
        title: 'Subject + be (am/is/are) + Verb-ing',
        structure: 'I am / You are / She is / We are + working / preparing / analyzing',
        rule: 'Use Present Continuous for tasks taking place right now or during the current work period.',
        examples: [
          { en: 'I am preparing the quarterly report right now.', hi: 'मैं अभी त्रैमासिक रिपोर्ट तैयार कर रहा हूँ।', es: 'Estoy preparando el informe trimestral ahora mismo.' },
          { en: 'Our team is collaborating with the marketing department.', hi: 'हमारी टीम मार्केटिंग विभाग के साथ सहयोग कर रही है।', es: 'Nuestro equipo está colaborando con el departamento de marketing.' }
        ]
      },
      {
        title: 'Contrasting Routines vs. In-Progress Actions',
        structure: 'Routine (Simple): I usually write emails | Current (Continuous): Today I am presenting',
        rule: 'Use Present Simple for recurring duties and Present Continuous for temporary ongoing actions.',
        examples: [
          { en: 'I usually answer calls, but today I am leading the training session.', hi: 'मैं आमतौर पर कॉल्स का जवाब देता हूँ, लेकिन आज मैं ट्रेनिंग सत्र का नेतृत्व कर रहा हूँ।', es: 'Normalmente respondo llamadas, pero hoy estoy dirigiendo la sesión de capacitación.' },
          { en: 'We normally meet on Tuesday, but this week we are meeting on Thursday.', hi: 'हम आम तौर पर मंगलवार को मिलते हैं, लेकिन इस सप्ताह हम गुरुवार को मिल रहे हैं।', es: 'Normalmente nos reunimos el martes, pero esta semana nos reunimos el jueves.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'I work on the report right now.', cor: 'I am working on the report right now.', exp: 'Use Present Continuous (be + -ing) for actions in progress right now.', hi: 'वर्तमान में चल रहे काम के लिए Present Continuous का प्रयोग करें।', es: 'Usa Present Continuous para acciones que ocurren ahora mismo.' },
    { inc: 'We are on the track with the project.', cor: 'We are on track with the project.', exp: 'The idiom is "on track" without the article "the".', hi: '"on track" मुहावरे में "the" नहीं लगता।', es: 'La frase hecha es "on track" sin artículo.' },
    { inc: 'She is needing help with the slides.', cor: 'She needs help with the slides.', exp: 'State verbs like "need" are generally used in Simple Present.', hi: '"Need" जैसी स्थिति बताने वाली क्रियाओं को Present Simple में रखा जाता है।', es: 'Verbos de estado como "need" no suelen usarse en continuo.' },
    { inc: 'Let us discuss about the agenda.', cor: 'Let us discuss the agenda.', exp: 'Do not use "about" after the transitive verb "discuss".', hi: '"Discuss" के तुरंत बाद ऑब्जेक्ट आता है, "about" नहीं।', es: '"Discuss" no lleva "about" después.' },
    { inc: 'Who is take the lead on this?', cor: 'Who is taking the lead on this?', exp: 'Continuous structure requires verb + -ing after "is".', hi: '"is" के बाद verb-ing का प्रयोग करें।', es: 'Después del auxiliar "is" se debe usar la forma -ing.' }
  ],
  dialogues: [
    {
      title: 'Weekly Standup Meeting',
      context: 'Elena asks Liam for a quick project progress update.',
      charA: { name: 'Elena', av: '👩‍💼', role: 'Team Lead' },
      charB: { name: 'Liam', av: '👨‍💼', role: 'Developer' },
      turns: [
        { spk: 'Elena', text: 'Good morning everyone. Liam, could you give us a quick status update on the new app feature?', hi: 'शुभ प्रभात सभी को। लियाम, क्या आप हमें नए ऐप फीचर पर एक त्वरित स्थिति अपडेट दे सकते हैं?', es: 'Buenos días a todos. Liam, ¿podrías darnos una breve actualización de estado sobre la nueva función de la app?' },
        { spk: 'Liam', text: 'Sure Elena. Everything is on track. I am currently testing the user login system.', hi: 'ज़रूर एलेना। सब कुछ समय पर चल रहा है। मैं वर्तमान में यूजर लॉगिन सिस्टम का परीक्षण कर रहा हूँ।', es: 'Claro, Elena. Todo va según lo previsto. Actualmente estoy probando el sistema de inicio de sesión de usuario.' },
        { spk: 'Elena', text: 'Great! Do you need any assistance from the design team?', hi: 'बहुत बढ़िया! क्या आपको डिज़ाइन टीम से किसी सहायता की आवश्यकता है?', es: '¡Genial! ¿Necesitas alguna ayuda del equipo de diseño?' },
        { spk: 'Liam', text: 'No, thank you. We are ahead of schedule and should finish by tomorrow afternoon.', hi: 'नहीं, धन्यवाद। हम समय से आगे चल रहे हैं और कल दोपहर तक काम पूरा हो जाना चाहिए।', es: 'No, gracias. Vamos adelantados y deberíamos terminar para mañana por la tarde.' }
      ]
    },
    {
      title: 'Discussing Task Priorities',
      context: 'Rachel and Carlos organize their workday priorities.',
      charA: { name: 'Rachel', av: '👩‍💻', role: 'Product Manager' },
      charB: { name: 'Carlos', av: '👨‍💻', role: 'Data Specialist' },
      turns: [
        { spk: 'Rachel', text: 'Carlos, what is our top priority before the client call at three?', hi: 'कार्लोस, दोपहर तीन बजे क्लाइंट कॉल से पहले हमारी पहली प्राथमिकता क्या है?', es: 'Carlos, ¿cuál es nuestra máxima prioridad antes de la llamada con el cliente a las tres?' },
        { spk: 'Carlos', text: 'I am preparing the sales charts right now. I will share the summary in ten minutes.', hi: 'मैं अभी बिक्री चार्ट तैयार कर रहा हूँ। मैं दस मिनट में सारांश साझा करूँगा।', es: 'Estoy preparando los gráficos de ventas ahora mismo. Compartiré el resumen en diez minutos.' },
        { spk: 'Rachel', text: 'Perfect. Please keep me in the loop if there are any questions.', hi: 'उत्तम। यदि कोई प्रश्न हो तो कृपया मुझे सूचित रखें।', es: 'Perfecto. Por favor, mantenme al tanto si surge alguna pregunta.' },
        { spk: 'Carlos', text: 'Will do. Let us wrap up the slides before lunch.', hi: 'ज़रूर करूँगा। आइए दोपहर के भोजन से पहले स्लाइड्स को पूरा कर लें।', es: 'Lo haré. Concluyamos las diapositivas antes del almuerzo.' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u05_l61_p1', lessonId: 'lesson_a1_5_61', stage: 8, type: 'multiple_choice', prompt: 'Choose the correct word: "Everything is ___ schedule and progressing well."', options: [{ id: 'o1', text: 'on track with', isCorrect: true }, { id: 'o2', text: 'behind of', isCorrect: false }, { id: 'o3', text: 'out from', isCorrect: false }] },
    { id: 'ex_u05_l61_p2', lessonId: 'lesson_a1_5_61', stage: 8, type: 'fill_blank', prompt: 'Select the correct present continuous form:', sentenceTemplate: 'She ___ the project presentation for the client.', sourceSentence: 'She ___ the project presentation for the client.', options: [{ id: 'o1', text: 'is preparing', isCorrect: true }, { id: 'o2', text: 'is prepare', isCorrect: false }, { id: 'o3', text: 'prepares now', isCorrect: false }] },
    { id: 'ex_u05_l61_p3', lessonId: 'lesson_a1_5_61', stage: 8, type: 'word_ordering', prompt: 'Arrange the words to form a professional status update:', wordBank: ['We', 'are', 'making', 'excellent', 'progress', 'on', 'this', 'task.'], targetSentence: 'We are making excellent progress on this task.' },
    { id: 'ex_u05_l61_p4', lessonId: 'lesson_a1_5_61', stage: 8, type: 'match_pairs', prompt: 'Match workplace phrases with their meanings:', pairs: [{ left: 'on track', right: 'following schedule' }, { left: 'ahead of schedule', right: 'earlier than planned' }, { left: 'wrap up', right: 'finish a meeting' }, { left: 'feedback', right: 'helpful evaluation' }] },
    { id: 'ex_u05_l61_p5', lessonId: 'lesson_a1_5_61', stage: 8, type: 'error_correction', prompt: 'Select the corrected version:', sentenceTemplate: 'I am work on the presentation right now.', options: [{ id: 'o1', text: 'I am working on the presentation right now.', isCorrect: true }, { id: 'o2', text: 'I work on the presentation right now.', isCorrect: false }, { id: 'o3', text: 'I am worked on the presentation right now.', isCorrect: false }] },
    { id: 'ex_u05_l61_p6', lessonId: 'lesson_a1_5_61', stage: 9, type: 'listening', prompt: 'Listen and choose the sentence you hear:', audioText: 'Please send me a short summary of the morning meeting.', options: [{ id: 'o1', text: 'Please send me a short summary of the morning meeting.', isCorrect: true }, { id: 'o2', text: 'Please send me a short schedule of the morning meeting.', isCorrect: false }] },
    { id: 'ex_u05_l61_p7', lessonId: 'lesson_a1_5_61', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'We are collaborating with the engineering team.', targetSentence: 'We are collaborating with the engineering team.' },
    { id: 'ex_u05_l61_p8', lessonId: 'lesson_a1_5_61', stage: 10, type: 'multiple_choice', prompt: 'Which question correctly asks for a progress update?', options: [{ id: 'o1', text: 'What is the current status of the project?', isCorrect: true }, { id: 'o2', text: 'What does the status project is?', isCorrect: false }, { id: 'o3', text: 'Is status project working?', isCorrect: false }] },
    { id: 'ex_u05_l61_p9', lessonId: 'lesson_a1_5_61', stage: 11, type: 'dialogue_completion', prompt: 'Complete the dialogue: "Are we ready for the client presentation at two?"', options: [{ id: 'o1', text: 'Yes, the slides are complete and we are ahead of schedule.', isCorrect: true }, { id: 'o2', text: 'I like sandwiches for lunch.', isCorrect: false }, { id: 'o3', text: 'Yesterday was very sunny.', isCorrect: false }] },
    { id: 'ex_u05_l61_p10', lessonId: 'lesson_a1_5_61', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'I am currently working on the budget spreadsheet.', audioText: 'I am currently working on the budget spreadsheet.' },
    { id: 'ex_u05_l61_p11', lessonId: 'lesson_a1_5_61', stage: 13, type: 'translation', prompt: 'Translate: "कृपया मुझे इस परियोजना के बारे में सूचित रखें।" / "Por favor manténme al tanto de este proyecto."', targetSentence: 'Please keep me in the loop on this project.' },
    { id: 'ex_u05_l61_p12', lessonId: 'lesson_a1_5_61', stage: 14, type: 'multiple_choice', prompt: 'Which term describes an arranged schedule showing milestones and deadlines?', options: [{ id: 'o1', text: 'timeline', isCorrect: true }, { id: 'o2', text: 'keyboard', isCorrect: false }, { id: 'o3', text: 'printer', isCorrect: false }] },
    { id: 'ex_u05_l61_p13', lessonId: 'lesson_a1_5_61', stage: 14, type: 'fill_blank', prompt: 'Complete the sentence with the correct preposition: "Finishing the report is our top priority ___ today."', sentenceTemplate: 'Finishing the report is our top priority ___ today.', sourceSentence: 'Finishing the report is our top priority ___ today.', options: [{ id: 'o1', text: 'for', isCorrect: true }, { id: 'o2', text: 'at', isCorrect: false }, { id: 'o3', text: 'into', isCorrect: false }] },
    { id: 'ex_u05_l61_p14', lessonId: 'lesson_a1_5_61', stage: 14, type: 'word_ordering', prompt: 'Order the words to make a collaborative offer:', wordBank: ['Let', 'us', 'wrap', 'up', 'the', 'meeting', 'before', 'lunch.'], targetSentence: 'Let us wrap up the meeting before lunch.' },
    { id: 'ex_u05_l61_p15', lessonId: 'lesson_a1_5_61', stage: 14, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'Our team is collaborating effectively to meet the deadline.', audioText: 'Our team is collaborating effectively to meet the deadline.' }
  ],
  review: [
    { id: 'ex_u05_l61_r1', lessonId: 'lesson_a1_5_61', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Choose the correct sentence with a frequency adverb:', options: [{ id: 'o1', text: 'I always check my email in the morning.', isCorrect: true }, { id: 'o2', text: 'I check always my email in the morning.', isCorrect: false }, { id: 'o3', text: 'Always I checking email in the morning.', isCorrect: false }] },
    { id: 'ex_u05_l61_r2', lessonId: 'lesson_a1_5_61', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete: "Could you ___ send me the files?"', sentenceTemplate: 'Could you ___ send me the files?', sourceSentence: 'Could you ___ send me the files?', options: [{ id: 'o1', text: 'please', isCorrect: true }, { id: 'o2', text: 'to', isCorrect: false }, { id: 'o3', text: 'pleasing', isCorrect: false }] },
    { id: 'ex_u05_l61_r3', lessonId: 'lesson_a1_5_61', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['She', 'usually', 'finishes', 'work', 'at', 'six', 'o\'clock.'], targetSentence: 'She usually finishes work at six o\'clock.' },
    { id: 'ex_u05_l61_r4', lessonId: 'lesson_a1_5_61', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match workplace terms:', pairs: [{ left: 'agenda', right: 'meeting list' }, { left: 'deadline', right: 'due date' }, { left: 'client', right: 'customer' }, { left: 'colleague', right: 'coworker' }] },
    { id: 'ex_u05_l61_r5', lessonId: 'lesson_a1_5_61', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "हम समय से आगे हैं।"', targetSentence: 'We are ahead of schedule.' }
  ],
  assessment: [
    { id: 'ex_u05_l61_a1', lessonId: 'lesson_a1_5_61', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the grammatically correct status update:', options: [{ id: 'o1', text: 'We are testing the new system and everything is on track.', isCorrect: true }, { id: 'o2', text: 'We test new system and is on the track.', isCorrect: false }, { id: 'o3', text: 'We are test new system now.', isCorrect: false }] },
    { id: 'ex_u05_l61_a2', lessonId: 'lesson_a1_5_61', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete: "Carlos is taking the ___ on the marketing presentation."', sentenceTemplate: 'Carlos is taking the ___ on the marketing presentation.', sourceSentence: 'Carlos is taking the ___ on the marketing presentation.', options: [{ id: 'o1', text: 'lead', isCorrect: true }, { id: 'o2', text: 'desk', isCorrect: false }, { id: 'o3', text: 'screen', isCorrect: false }] },
    { id: 'ex_u05_l61_a3', lessonId: 'lesson_a1_5_61', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words correctly:', wordBank: ['I', 'am', 'preparing', 'a', 'detailed', 'summary', 'for', 'the', 'meeting.'], targetSentence: 'I am preparing a detailed summary for the meeting.' },
    { id: 'ex_u05_l61_a4', lessonId: 'lesson_a1_5_61', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Select the most professional response: "How is the budget report coming along?"', options: [{ id: 'o1', text: 'We are making great progress and will finish before five.', isCorrect: true }, { id: 'o2', text: 'I drank tea this morning.', isCorrect: false }, { id: 'o3', text: 'The weather is very warm today.', isCorrect: false }] },
    { id: 'ex_u05_l61_a5', lessonId: 'lesson_a1_5_61', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this complete workplace sentence:', targetSentence: 'Please keep me in the loop regarding any changes to the project timeline.', audioText: 'Please keep me in the loop regarding any changes to the project timeline.' }
  ]
};

// =========================================================================
// LESSON 62: Telephone Calls, Voicemails & Taking Messages
// =========================================================================
export const CONFIG_62: LessonConfig = {
  num: 62,
  title: 'Telephone Calls, Voicemails & Taking Messages',
  icon: '📞',
  estMin: 25,
  objTitle: 'Handle professional and personal phone calls, voicemails, and messages',
  objDesc: 'Learn phone etiquette, opening greetings, leaving messages, taking down phone numbers and names, and managing call transfers.',
  objHi: 'फ़ोन कॉल संभालना, वॉयसमेल छोड़ना और पेशेवर तरीके से संदेश लेना सीखें।',
  objEs: 'Aprende a atender llamadas telefónicas, dejar mensajes de voz y tomar recados profesionales.',
  canDo: [
    'I can answer the phone politely and state my name and department.',
    'I can ask to speak with someone and leave a message if they are unavailable.',
    'I can take down a phone number and repeat it back to confirm.'
  ],
  canDoHi: [
    'मैं विनम्रतापूर्वक फ़ोन का उत्तर दे सकता हूँ और अपना नाम व विभाग बता सकता हूँ।',
    'मैं किसी से बात करने का अनुरोध कर सकता हूँ और संदेश छोड़ सकता हूँ।',
    'मैं फ़ोन नंबर नोट कर सकता हूँ और पुष्टि के लिए उसे दोहरा सकता हूँ।'
  ],
  canDoEs: [
    'Puedo contestar el teléfono educadamente y decir mi nombre y departamento.',
    'Puedo pedir hablar con alguien y dejar un mensaje si no está disponible.',
    'Puedo anotar un número de teléfono y repetirlo para confirmar.'
  ],
  vocab: [
    { w: 'call', p: '/kɔːl/', m: 'a telephone conversation', hi: 'कॉल / फ़ोन करना', es: 'llamada / llamar', fr: 'appel / appeler', de: 'Anruf / anrufen', pt: 'ligação / ligar', zh: '通话 / 打电话', ar: 'مكالمة / يتصل', ja: '電話 / 電話する', ru: 'звонок / звонить', ex: 'Thank you for your call.', exHi: 'आपकी कॉल के लिए धन्यवाद।', exEs: 'Gracias por tu llamada.', ic: '📱' },
    { w: 'voicemail', p: '/ˈvɔɪs.meɪl/', m: 'a recorded voice message left by a caller', hi: 'वॉयसमेल', es: 'mensaje de voz', fr: 'messagerie vocale', de: 'Sprachnachricht', pt: 'correio de voz', zh: '语音信箱', ar: 'بريد صوتي', ja: 'ボイスメール', ru: 'голосовая почта', ex: 'Please leave a message after the beep.', exHi: 'कृपया बीप के बाद संदेश छोड़ें।', exEs: 'Por favor deja un mensaje después del tono.', ic: '📼' },
    { w: 'message', p: '/ˈmes.ɪdʒ/', m: 'a piece of information passed from one person to another', hi: 'संदेश', es: 'mensaje', fr: 'message', de: 'Nachricht', pt: 'mensagem', zh: '信息', ar: 'رسالة', ja: '伝言 / メッセージ', ru: 'сообщение', ex: 'May I take a message for Mr. Davis?', exHi: 'क्या मैं श्री डेविस के लिए कोई संदेश ले सकता हूँ?', exEs: '¿Puedo tomar un mensaje para el Sr. Davis?', ic: '✉️' },
    { w: 'available', p: '/əˈveɪ.lə.bəl/', m: 'free to be contacted or spoken with', hi: 'उपलब्ध', es: 'disponible', fr: 'disponible', de: 'verfügbar', pt: 'disponível', zh: '有空的 / 可联系的', ar: 'متاح', ja: '手が空いている / 利用可能', ru: 'доступный', ex: 'She is not available at the moment.', exHi: 'वह इस समय उपलब्ध नहीं हैं।', exEs: 'Ella no está disponible en este momento.', ic: '🟢' },
    { w: 'busy', p: '/ˈbɪz.i/', m: 'engaged in activity or having another call', hi: 'व्यस्त', es: 'ocupado', fr: 'occupé', de: 'beschäftigt', pt: 'ocupado', zh: '忙碌', ar: 'مشغول', ja: '忙しい / 話し中', ru: 'занят', ex: 'The line is busy right now.', exHi: 'लाइन अभी व्यस्त है।', exEs: 'La línea está ocupada ahora mismo.', ic: '🔴' },
    { w: 'transfer', p: '/trænsˈfɜːr/', m: 'to redirect a phone call to another person or extension', hi: 'स्थानांतरित करना / ट्रांसफर करना', es: 'transferir', fr: 'transférer', de: 'weiterleiten', pt: 'transferir', zh: '转接', ar: 'تحويل', ja: '転送する', ru: 'переводить', ex: 'Let me transfer you to customer service.', exHi: 'मैं आपको ग्राहक सेवा में ट्रांसफर करता हूँ।', exEs: 'Permíteme transferirte a servicio al cliente.', ic: '🔀' },
    { w: 'extension', p: '/ɪkˈsten.ʃən/', m: 'an internal telephone number within an office system', hi: 'एक्सटेंशन नंबर', es: 'extensión', fr: 'poste interne', de: 'Durchwahl', pt: 'ramal', zh: '分机号', ar: 'رقم داخلي', ja: '内線番号', ru: 'добавочный номер', ex: 'My direct office extension is 402.', exHi: 'मेरा डायरेक्ट ऑफिस एक्सटेंशन 402 है।', exEs: 'Mi extensión directa de oficina es 402.', ic: '🔢' },
    { w: 'hold', p: '/həʊld/', m: 'to wait briefly on the telephone line', hi: 'होल्ड पर रहना / प्रतीक्षा करना', es: 'esperar en línea / sostener', fr: 'garder la ligne', de: 'warten / halten', pt: 'aguardar na linha', zh: '保持通话', ar: 'الانتظار على الخط', ja: '保留する', ru: 'оставаться на линии', ex: 'Please hold the line for a moment.', exHi: 'कृपया कुछ देर लाइन पर बने रहें।', exEs: 'Por favor mantén la línea un momento.', ic: '⏸️' },
    { w: 'repeat', p: '/rɪˈpiːt/', m: 'to say something again', hi: 'दोहराना', es: 'repetir', fr: 'répéter', de: 'wiederholen', pt: 'repetir', zh: '重复', ar: 'تكرار', ja: '繰り返す', ru: 'повторять', ex: 'Could you repeat your phone number, please?', exHi: 'क्या आप कृपया अपना फ़ोन नंबर दोहरा सकते हैं?', exEs: '¿Podrías repetir tu número de teléfono, por favor?', ic: '🔁' },
    { w: 'spell', p: '/spel/', m: 'to write or name the letters of a word in order', hi: 'वर्तनी बताना / हिज्जे करना', es: 'deletrear', fr: 'épeler', de: 'buchstabieren', pt: 'soletrar', zh: '拼写', ar: 'تهجئة', ja: 'つづる', ru: 'произносить по буквам', ex: 'How do you spell your last name?', exHi: 'आप अपने उपनाम की वर्तनी कैसे लिखते हैं?', exEs: '¿Cómo se deletrea tu apellido?', ic: '🔤' },
    { w: 'callback', p: '/ˈkɔːl.bæk/', m: 'a return phone call', hi: 'कॉल बैक / वापस कॉल करना', es: 'devolución de llamada', fr: 'rappel', de: 'Rückruf', pt: 'retorno de chamada', zh: '回电', ar: 'إعادة الاتصال', ja: '折り返し電話', ru: 'обратный звонок', ex: 'I requested a callback for this afternoon.', exHi: 'मैंने आज दोपहर के लिए कॉल बैक का अनुरोध किया है।', exEs: 'Solicité una devolución de llamada para esta tarde.', ic: '↩️' },
    { w: 'dial', p: '/daɪəl/', m: 'to press numbers to make a telephone call', hi: 'डायल करना', es: 'marcar', fr: 'composer', de: 'wählen', pt: 'discar', zh: '拨号', ar: 'طلب الرقم', ja: 'ダイヤルする', ru: 'набирать номер', ex: 'Dial nine to get an outside line.', exHi: 'बाहरी लाइन पाने के लिए नौ डायल करें।', exEs: 'Marca nueve para obtener una línea exterior.', ic: '☎️' },
    { w: 'ring', p: '/rɪŋ/', m: 'to make a clear sound like a bell or phone', hi: 'घंटी बजना', es: 'sonar', fr: 'sonner', de: 'klingeln', pt: 'tocar', zh: '响铃', ar: 'يرن', ja: '鳴る', ru: 'звонить', ex: 'The phone is ringing in the lobby.', exHi: 'लॉबी में फ़ोन बज रहा है।', exEs: 'El teléfono está sonando en el vestíbulo.', ic: '🔔' },
    { w: 'hang up', p: '/hæŋ ʌp/', m: 'to end a telephone conversation', hi: 'फ़ोन काटना', es: 'colgar', fr: 'raccrocher', de: 'auflegen', pt: 'desligar', zh: '挂断', ar: 'إنهاء المكالمة', ja: '電話を切る', ru: 'вешать трубку', ex: 'Please do not hang up yet.', exHi: 'कृपया अभी फ़ोन न काटें।', exEs: 'Por favor no cuelgues todavía.', ic: '📴' },
    { w: 'contact', p: '/ˈkɒn.tækt/', m: 'to communicate with someone', hi: 'संपर्क करना', es: 'contactar', fr: 'contacter', de: 'kontaktieren', pt: 'contatar', zh: '联系', ar: 'الاتصال بـ', ja: '連絡する', ru: 'связываться', ex: 'You can contact me on my mobile.', exHi: 'आप मेरे मोबाइल पर मुझसे संपर्क कर सकते हैं।', exEs: 'Puedes contactarme en mi móvil.', ic: '📲' },
    { w: 'clarify', p: '/ˈklær.ɪ.faɪ/', m: 'to make something clearer and easier to understand', hi: 'स्पष्ट करना', es: 'aclarar', fr: 'clarifier', de: 'klären', pt: 'esclarecer', zh: '澄清', ar: 'توضيح', ja: '明確にする', ru: 'уточнять', ex: 'Let me clarify that point.', exHi: 'मुझे उस बिंदु को स्पष्ट करने दें।', exEs: 'Permíteme aclarar ese punto.', ic: '💡' },
    { w: 'number', p: '/ˈnʌm.bər/', m: 'a sequence of digits used to call someone', hi: 'नंबर', es: 'número', fr: 'numéro', de: 'Nummer', pt: 'número', zh: '号码', ar: 'رقم', ja: '番号', ru: 'номер', ex: 'What is your direct phone number?', exHi: 'आपका डायरेक्ट फ़ोन नंबर क्या है?', exEs: '¿Cuál es tu número de teléfono directo?', ic: '🔢' },
    { w: 'urgent', p: '/ˈɜː.dʒənt/', m: 'requiring immediate action or attention', hi: 'अति आवश्यक / तत्काल', es: 'urgente', fr: 'urgent', de: 'dringend', pt: 'urgente', zh: '紧急', ar: 'عاجل', ja: '緊急の', ru: 'срочный', ex: 'This is an urgent matter regarding the shipment.', exHi: 'यह शिपमेंट के संबंध में एक जरूरी मामला है।', exEs: 'Este es un asunto urgente sobre el envío.', ic: '🚨' },
    { w: 'reception', p: '/rɪˈsep.ʃən/', m: 'the area where visitors or calls are first received', hi: 'स्वागत कक्ष / रिसेप्शन', es: 'recepción', fr: 'accueil / réception', de: 'Empfang', pt: 'recepção', zh: '接待处', ar: 'استقبال', ja: '受付', ru: 'ресепшн / приемная', ex: 'The reception transferred the call to my desk.', exHi: 'रिसेप्शन ने कॉल मेरे डेस्क पर ट्रांसफर कर दी।', exEs: 'La recepción transfirió la llamada a mi escritorio.', ic: '🛎️' },
    { w: 'colleague', p: '/ˈkɒl.iːɡ/', m: 'a coworker in the same organization', hi: 'सहकर्मी', es: 'colega / compañero', fr: 'collègue', de: 'Kollege', pt: 'colega', zh: '同事', ar: 'زميل', ja: '同僚', ru: 'коллега', ex: 'My colleague will return your call shortly.', exHi: 'मेरे सहकर्मी जल्द ही आपकी कॉल का जवाब देंगे।', exEs: 'Mi colega le devolverá la llamada en breve.', ic: '👥' }
  ],
  chunks: [
    { phrase: 'May I speak to...?', meaning: 'Polite telephone request to talk to a specific person', hi: 'क्या मैं ... से बात कर सकता हूँ?', es: '¿Podría hablar con...?', fr: 'Puis-je parler à... ?', de: 'Kann ich bitte mit ... sprechen?', pt: 'Poderia falar com...?', zh: '请问我可以和……通话吗？', ar: 'هل يمكنني التحدث إلى...؟', ja: '〜さんとお話しできますか？', ru: 'Могу я поговорить с...?', note: 'Standard polite opening.', ic: '🗣️' },
    { phrase: 'Speaking!', meaning: 'Used to confirm that the caller is talking to the right person', hi: 'मैं ही बोल रहा हूँ!', es: '¡Al habla! / ¡Con él/ella habla!', fr: 'Lui/Elle-même !', de: 'Am Apparat!', pt: 'Sou eu mesmo(a)!', zh: '我就是！', ar: 'أنا المتحدث!', ja: '私です！', ru: 'Я вас слушаю!', note: 'Common phone self-identification.', ic: '🙋' },
    { phrase: 'Hold on a second', meaning: 'Polite request to wait briefly', hi: 'एक सेकंड रुकिए', es: 'Espera un segundo', fr: 'Un instant s\'il vous plaît', de: 'Einen Moment bitte', pt: 'Aguarde um segundo', zh: '请稍等一下', ar: 'انتظر لحظة', ja: '少々お待ちください', ru: 'Подождите секунду', note: 'Standard hold phrase.', ic: '⏳' },
    { phrase: 'May I take a message?', meaning: 'Offering to write down notes for an absent person', hi: 'क्या मैं कोई संदेश ले सकता हूँ?', es: '¿Puedo tomar un mensaje?', fr: 'Puis-je prendre un message ?', de: 'Kann ich eine Nachricht aufnehmen?', pt: 'Posso anotar um recado?', zh: '需要我留个口信吗？', ar: 'هل يمكنني أخذ رسالة؟', ja: '伝言を承りましょうか？', ru: 'Могу я принять сообщение?', note: 'Professional receptionist question.', ic: '✍️' },
    { phrase: 'leave a message', meaning: 'to dictate information to be passed along', hi: 'संदेश छोड़ना', es: 'dejar un mensaje', fr: 'laisser un message', de: 'eine Nachricht hinterlassen', pt: 'deixar um recado', zh: '留口信', ar: 'ترك رسالة', ja: '伝言を残す', ru: 'оставить сообщение', note: 'Essential phone communication task.', ic: '📨' },
    { phrase: 'call back later', meaning: 'to ring again at another time', hi: 'बाद में कॉल करना', es: 'volver a llamar más tarde', fr: 'rappeler plus tard', de: 'später zurückrufen', pt: 'ligar de volta mais tarde', zh: '稍后回电', ar: 'إعادة الاتصال لاحقاً', ja: '後でかけ直す', ru: 'перезвонить позже', note: 'Polite alternative when someone is busy.', ic: '⏰' },
    { phrase: 'put you through', meaning: 'to connect a caller to another extension', hi: 'कॉल कनेक्ट करना', es: 'comunicarte con / pasar la llamada', fr: 'vous mettre en relation', de: 'Sie verbinden', pt: 'transferir você para', zh: '为您转接', ar: 'تحويلك إلى', ja: 'おつなぎします', ru: 'соединить вас', note: 'Phone operator vocabulary.', ic: '🔌' },
    { phrase: 'I am calling regarding...', meaning: 'to state the reason for the phone call', hi: 'मैं ... के संबंध में कॉल कर रहा हूँ', es: 'Llamo con respecto a...', fr: 'J\'appelle au sujet de...', de: 'Ich rufe an wegen...', pt: 'Estou ligando a respeito de...', zh: '我打电话是关于……', ar: 'أنا أتصل بخصوص...', ja: '〜の件でお電話しております', ru: 'Я звоню по поводу...', note: 'Clear business call opening.', ic: '🎯' }
  ],
  grammar: {
    title: 'Polite Modals for Telephone Inquiries (May I, Could you, Would you like to)',
    concept: 'Using modal auxiliaries to form polite questions and requests during phone conversations.',
    patterns: [
      {
        title: 'May I + base verb (Polite Self-Requests & Offers)',
        structure: 'May I + speak to / take a message / ask who is calling?',
        rule: 'Use "May I" for formal and polite permission or offering assistance.',
        examples: [
          { en: 'May I speak to Mrs. Johnson, please?', hi: 'क्या मैं श्रीमती जॉनसन से बात कर सकता हूँ?', es: '¿Puedo hablar con la Sra. Johnson, por favor?' },
          { en: 'May I ask who is calling?', hi: 'क्या मैं जान सकता हूँ कि कौन बोल रहा है?', es: '¿Puedo preguntar quién llama?' }
        ]
      },
      {
        title: 'Could you + base verb (Polite Requests to the Listener)',
        structure: 'Could you + spell that / repeat your number / hold for a minute?',
        rule: 'Use "Could you" to ask the caller to perform an action politely.',
        examples: [
          { en: 'Could you repeat the phone number slowly?', hi: 'क्या आप फ़ोन नंबर धीरे-धीरे दोहरा सकते हैं?', es: '¿Podrías repetir el número de teléfono despacio?' },
          { en: 'Could you tell him that Peter called?', hi: 'क्या आप उन्हें बता सकते हैं कि पीटर ने कॉल किया था?', es: '¿Podrías decirle que Peter llamó?' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'I want to speak with John.', cor: 'Could I speak with John, please?', exp: 'Use "Could I speak with..." for polite phone inquiries instead of direct "I want".', hi: 'फ़ोन पर विनम्रता के लिए "Could I speak with..." का उपयोग करें।', es: 'Usa "Could I speak with..." para sonar más educado.' },
    { inc: 'May I to take a message?', cor: 'May I take a message?', exp: 'Modal verbs (may, could, can) are followed by the base verb without "to".', hi: 'मोडल वर्ब के बाद "to" का उपयोग न करें।', es: 'Los verbos modales van seguidos del verbo base sin "to".' },
    { inc: 'Hold on the line please on.', cor: 'Please hold the line.', exp: 'Do not duplicate prepositions.', hi: 'वाक्य में अतिरिक्त प्रीपोज़िशन न जोड़ें।', es: 'No dupliques preposiciones.' },
    { inc: 'Who calls?', cor: 'Who is calling, please?', exp: 'Use Present Continuous "Who is calling?" when asking who is on the line right now.', hi: 'फ़ोन पर पूछने के लिए "Who is calling?" का प्रयोग करें।', es: 'Usa "Who is calling?" para preguntar quién llama en este momento.' },
    { inc: 'I will call back you later.', cor: 'I will call you back later.', exp: 'The pronoun "you" goes between "call" and "back" in this phrasal verb.', hi: '"Call you back" में ऑब्जेक्ट "you" बीच में आता है।', es: 'El pronombre "you" se coloca entre "call" y "back".' }
  ],
  dialogues: [
    {
      title: 'Calling the Office',
      context: 'David calls an architectural firm to speak with architect Sarah Miller.',
      charA: { name: 'Receptionist', av: '👩‍💼', role: 'Office Reception' },
      charB: { name: 'David', av: '👨‍💼', role: 'Client' },
      turns: [
        { spk: 'Receptionist', text: 'Good morning, Miller Architecture. How may I help you?', hi: 'शुभ प्रभात, मिलर आर्किटेक्चर। मैं आपकी क्या मदद कर सकती हूँ?', es: 'Buenos días, Miller Architecture. ¿En qué puedo ayudarle?' },
        { spk: 'David', text: 'Hello, may I speak to Sarah Miller, please? I am calling regarding the building plans.', hi: 'नमस्ते, क्या मैं सारा मिलर से बात कर सकता हूँ? मैं भवन योजनाओं के संबंध में कॉल कर रहा हूँ।', es: 'Hola, ¿podría hablar con Sarah Miller, por favor? Llamo con respecto a los planos del edificio.' },
        { spk: 'Receptionist', text: 'One moment, please. Let me see if she is at her desk... I am afraid she is in a meeting right now. May I take a message?', hi: 'एक क्षण रुकिए। मैं देखती हूँ कि क्या वह अपनी मेज पर हैं... क्षमा करें, वह अभी एक बैठक में हैं। क्या मैं कोई संदेश ले सकती हूँ?', es: 'Un momento, por favor. Déjeme ver si está en su escritorio... Me temo que está en una reunión ahora mismo. ¿Puedo tomar un mensaje?' },
        { spk: 'David', text: 'Yes, please. Please ask her to call David at 555-0192.', hi: 'हाँ, कृपया। कृपया उनसे डेविड को 555-0192 पर कॉल करने के लिए कहें।', es: 'Sí, por favor. Pídale que llame a David al 555-0192.' }
      ]
    },
    {
      title: 'Confirming Phone Information',
      context: 'Receptionist confirms the caller\'s details and contact number.',
      charA: { name: 'Receptionist', av: '👩‍💼', role: 'Receptionist' },
      charB: { name: 'David', av: '👨‍💼', role: 'Client' },
      turns: [
        { spk: 'Receptionist', text: 'Could you spell your last name for me, David?', hi: 'डेविड, क्या आप मेरे लिए अपने उपनाम की वर्तनी बता सकते हैं?', es: '¿Podrías deletrear tu apellido para mí, David?' },
        { spk: 'David', text: 'Certainly. It is C-L-A-R-K, Clark.', hi: 'निश्चित रूप से। यह C-L-A-R-K, क्लार्क है।', es: 'Por supuesto. Es C-L-A-R-K, Clark.' },
        { spk: 'Receptionist', text: 'Thank you. And that was 555-0192, correct?', hi: 'धन्यवाद। और वह 555-0192 था, सही?', es: 'Gracias. Y el número era 555-0192, ¿correcto?' },
        { spk: 'David', text: 'Yes, that is correct. Thank you very much for your help.', hi: 'हाँ, वह सही है। आपकी मदद के लिए बहुत-बहुत धन्यवाद।', es: 'Sí, eso es correcto. Muchas gracias por su ayuda.' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u05_l62_p1', lessonId: 'lesson_a1_5_62', stage: 8, type: 'multiple_choice', prompt: 'Select the polite phone request: "___ speak to Ms. Garcia, please?"', options: [{ id: 'o1', text: 'May I', isCorrect: true }, { id: 'o2', text: 'I want', isCorrect: false }, { id: 'o3', text: 'Give me', isCorrect: false }] },
    { id: 'ex_u05_l62_p2', lessonId: 'lesson_a1_5_62', stage: 8, type: 'fill_blank', prompt: 'Complete the sentence with the correct polite phrase:', sentenceTemplate: 'Please ___ the line while I transfer your call.', sourceSentence: 'Please ___ the line while I transfer your call.', options: [{ id: 'o1', text: 'hold', isCorrect: true }, { id: 'o2', text: 'holding', isCorrect: false }, { id: 'o3', text: 'held', isCorrect: false }] },
    { id: 'ex_u05_l62_p3', lessonId: 'lesson_a1_5_62', stage: 8, type: 'word_ordering', prompt: 'Arrange the words to form a professional voicemail offer:', wordBank: ['May', 'I', 'take', 'a', 'message', 'for', 'him?'], targetSentence: 'May I take a message for him?' },
    { id: 'ex_u05_l62_p4', lessonId: 'lesson_a1_5_62', stage: 8, type: 'match_pairs', prompt: 'Match phone expressions with their functions:', pairs: [{ left: 'May I speak to...?', right: 'asking for person' }, { left: 'Speaking!', right: 'caller confirmation' }, { left: 'Hold the line', right: 'asking to wait' }, { left: 'put you through', right: 'transferring call' }] },
    { id: 'ex_u05_l62_p5', lessonId: 'lesson_a1_5_62', stage: 8, type: 'error_correction', prompt: 'Identify the corrected question:', sentenceTemplate: 'Could you to spell your last name please?', options: [{ id: 'o1', text: 'Could you spell your last name please?', isCorrect: true }, { id: 'o2', text: 'Could you spelling your last name please?', isCorrect: false }, { id: 'o3', text: 'Can you to spell your last name please?', isCorrect: false }] },
    { id: 'ex_u05_l62_p6', lessonId: 'lesson_a1_5_62', stage: 9, type: 'listening', prompt: 'Listen and choose the sentence you hear:', audioText: 'I will ask him to call you back as soon as possible.', options: [{ id: 'o1', text: 'I will ask him to call you back as soon as possible.', isCorrect: true }, { id: 'o2', text: 'I will ask him to send you email as soon as possible.', isCorrect: false }] },
    { id: 'ex_u05_l62_p7', lessonId: 'lesson_a1_5_62', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'Could you repeat your phone number please?', targetSentence: 'Could you repeat your phone number please?' },
    { id: 'ex_u05_l62_p8', lessonId: 'lesson_a1_5_62', stage: 10, type: 'multiple_choice', prompt: 'Which question politely asks the caller to identify themselves?', options: [{ id: 'o1', text: 'May I ask who is calling, please?', isCorrect: true }, { id: 'o2', text: 'Who you are?', isCorrect: false }, { id: 'o3', text: 'What is your call?', isCorrect: false }] },
    { id: 'ex_u05_l62_p9', lessonId: 'lesson_a1_5_62', stage: 11, type: 'dialogue_completion', prompt: 'Complete the dialogue: "Hello, is Mr. Gomez available?"', options: [{ id: 'o1', text: 'I am afraid he is on another line right now. Would you like to leave a message?', isCorrect: true }, { id: 'o2', text: 'The supermarket is open on Sundays.', isCorrect: false }, { id: 'o3', text: 'My coffee is too hot.', isCorrect: false }] },
    { id: 'ex_u05_l62_p10', lessonId: 'lesson_a1_5_62', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'Thank you for calling, let me transfer you to extension 304.', audioText: 'Thank you for calling, let me transfer you to extension 304.' },
    { id: 'ex_u05_l62_p11', lessonId: 'lesson_a1_5_62', stage: 13, type: 'translation', prompt: 'Translate: "मैं नए अनुबंध के संबंध में कॉल कर रहा हूँ।" / "Estoy llamando con respecto al nuevo contrato."', targetSentence: 'I am calling regarding the new contract.' },
    { id: 'ex_u05_l62_p12', lessonId: 'lesson_a1_5_62', stage: 14, type: 'multiple_choice', prompt: 'What do you say when the person requested is talking to you directly?', options: [{ id: 'o1', text: 'Speaking!', isCorrect: true }, { id: 'o2', text: 'Hold on never!', isCorrect: false }, { id: 'o3', text: 'Hang up please!', isCorrect: false }] },
    { id: 'ex_u05_l62_p13', lessonId: 'lesson_a1_5_62', stage: 14, type: 'fill_blank', prompt: 'Complete the sentence with the appropriate preposition: "She will call you ___ in ten minutes."', sentenceTemplate: 'She will call you ___ in ten minutes.', sourceSentence: 'She will call you ___ in ten minutes.', options: [{ id: 'o1', text: 'back', isCorrect: true }, { id: 'o2', text: 'to', isCorrect: false }, { id: 'o3', text: 'for', isCorrect: false }] },
    { id: 'ex_u05_l62_p14', lessonId: 'lesson_a1_5_62', stage: 14, type: 'word_ordering', prompt: 'Arrange the words to form a polite message:', wordBank: ['Please', 'tell', 'her', 'that', 'David', 'called', 'today.'], targetSentence: 'Please tell her that David called today.' },
    { id: 'ex_u05_l62_p15', lessonId: 'lesson_a1_5_62', stage: 14, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'Could you please ask her to return my call this afternoon?', audioText: 'Could you please ask her to return my call this afternoon?' }
  ],
  review: [
    { id: 'ex_u05_l62_r1', lessonId: 'lesson_a1_5_62', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Choose the correct present continuous form:', options: [{ id: 'o1', text: 'I am preparing the report right now.', isCorrect: true }, { id: 'o2', text: 'I preparing the report right now.', isCorrect: false }, { id: 'o3', text: 'I am prepare the report right now.', isCorrect: false }] },
    { id: 'ex_u05_l62_r2', lessonId: 'lesson_a1_5_62', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete: "We are ___ track with the project."', sentenceTemplate: 'We are ___ track with the project.', sourceSentence: 'We are ___ track with the project.', options: [{ id: 'o1', text: 'on', isCorrect: true }, { id: 'o2', text: 'at', isCorrect: false }, { id: 'o3', text: 'in', isCorrect: false }] },
    { id: 'ex_u05_l62_r3', lessonId: 'lesson_a1_5_62', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['Could', 'you', 'give', 'us', 'a', 'status', 'update?'], targetSentence: 'Could you give us a status update?' },
    { id: 'ex_u05_l62_r4', lessonId: 'lesson_a1_5_62', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match related phone words:', pairs: [{ left: 'voicemail', right: 'recorded message' }, { left: 'extension', right: 'internal line number' }, { left: 'urgent', right: 'requires immediate action' }, { left: 'dial', right: 'press numbers' }] },
    { id: 'ex_u05_l62_r5', lessonId: 'lesson_a1_5_62', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "क्या मैं एक संदेश छोड़ सकता हूँ?"', targetSentence: 'May I leave a message?' }
  ],
  assessment: [
    { id: 'ex_u05_l62_a1', lessonId: 'lesson_a1_5_62', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the most appropriate phone response:', options: [{ id: 'o1', text: 'Miller Corporation, how may I direct your call?', isCorrect: true }, { id: 'o2', text: 'Who you want to talk?', isCorrect: false }, { id: 'o3', text: 'Speak your words now.', isCorrect: false }] },
    { id: 'ex_u05_l62_a2', lessonId: 'lesson_a1_5_62', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete: "Let me put you ___ to the sales department."', sentenceTemplate: 'Let me put you ___ to the sales department.', sourceSentence: 'Let me put you ___ to the sales department.', options: [{ id: 'o1', text: 'through', isCorrect: true }, { id: 'o2', text: 'across', isCorrect: false }, { id: 'o3', text: 'over', isCorrect: false }] },
    { id: 'ex_u05_l62_a3', lessonId: 'lesson_a1_5_62', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words correctly:', wordBank: ['Could', 'you', 'please', 'spell', 'your', 'full', 'name?'], targetSentence: 'Could you please spell your full name?' },
    { id: 'ex_u05_l62_a4', lessonId: 'lesson_a1_5_62', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Choose the best answer: "Is Dr. Evans in the office today?"', options: [{ id: 'o1', text: 'No, he is away today, but I can take a message for him.', isCorrect: true }, { id: 'o2', text: 'Yes, it is seven o\'clock in the morning.', isCorrect: false }, { id: 'o3', text: 'I am eating an apple.', isCorrect: false }] },
    { id: 'ex_u05_l62_a5', lessonId: 'lesson_a1_5_62', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this complete phone confirmation sentence:', targetSentence: 'I will make sure she gets your message as soon as she returns to the office.', audioText: 'I will make sure she gets your message as soon as she returns to the office.' }
  ]
};

// =========================================================================
// LESSON 63: Scheduling Appointments, Confirmations & Rescheduling
// =========================================================================
export const CONFIG_63: LessonConfig = {
  num: 63,
  title: 'Scheduling Appointments, Confirmations & Rescheduling',
  icon: '📅',
  estMin: 25,
  objTitle: 'Book appointments, confirm calendar slots, and reschedule meetings politely',
  objDesc: 'Learn expressions for making dental, medical, or business appointments, proposing alternate times, confirming bookings, and canceling with advance notice.',
  objHi: 'अपॉइंटमेंट बुक करना, समय की पुष्टि करना और विनम्रतापूर्वक पुनर्निर्धारित करना सीखें।',
  objEs: 'Aprende a programar citas, confirmar horarios en el calendario y reprogramar reuniones con cortesía.',
  canDo: [
    'I can request an appointment on a specific day and time.',
    'I can confirm, reschedule, or cancel a booked appointment.',
    'I can ask about availability and propose alternative meeting slots.'
  ],
  canDoHi: [
    'मैं किसी विशिष्ट दिन और समय पर अपॉइंटमेंट का अनुरोध कर सकता हूँ।',
    'मैं बुक की गई अपॉइंटमेंट की पुष्टि, पुनर्निर्धारण या रद्द कर सकता हूँ।',
    'मैं उपलब्धता के बारे में पूछ सकता हूँ और वैकल्पिक समय का प्रस्ताव रख सकता हूँ।'
  ],
  canDoEs: [
    'Puedo solicitar una cita en un día y hora específicos.',
    'Puedo confirmar, reprogramar o cancelar una cita reservada.',
    'Puedo preguntar sobre la disponibilidad y proponer horarios alternativos.'
  ],
  vocab: [
    { w: 'appointment', p: '/əˈpɔɪnt.mənt/', m: 'an arrangement to meet someone at a particular time', hi: 'अपॉइंटमेंट / मिलने का तय समय', es: 'cita', fr: 'rendez-vous', de: 'Termin', pt: 'consulta / compromisso', zh: '预约', ar: 'موعد', ja: '予約 / 約束', ru: 'прием / встреча', ex: 'I have a doctor appointment on Tuesday.', exHi: 'मंगलवार को डॉक्टर के साथ मेरी अपॉइंटमेंट है।', exEs: 'Tengo una cita médica el martes.', ic: '🗓️' },
    { w: 'schedule', p: '/ˈʃedʒ.uːl/', m: 'to arrange an event for a particular time', hi: 'निर्धारित करना / शेड्यूल करना', es: 'programar', fr: 'programmer', de: 'planen / ansetzen', pt: 'agendar', zh: '安排时间', ar: 'جدولة', ja: 'スケジュールを組む', ru: 'планировать', ex: 'Can we schedule a call for tomorrow morning?', exHi: 'क्या हम कल सुबह के लिए एक कॉल शेड्यूल कर सकते हैं?', exEs: '¿Podemos programar una llamada para mañana por la mañana?', ic: '⏰' },
    { w: 'reschedule', p: '/ˌriːˈʃedʒ.uːl/', m: 'to change the time or date of an appointment', hi: 'पुनर्निर्धारित करना', es: 'reprogramar', fr: 'reprogrammer', de: 'umbuchen / verschieben', pt: 'reagendar', zh: '重新安排时间', ar: 'إعادة جدولة', ja: '日程を変更する', ru: 'переносить', ex: 'I need to reschedule my dental appointment.', exHi: 'मुझे अपने दांतों के डॉक्टर की अपॉइंटमेंट पुनर्निर्धारित करने की आवश्यकता है।', exEs: 'Necesito reprogramar mi cita dental.', ic: '🔄' },
    { w: 'confirm', p: '/kənˈfɜːm/', m: 'to state that something is definitely true or arranged', hi: 'पुष्टि करना', es: 'confirmar', fr: 'confirmer', de: 'bestätigen', pt: 'confirmar', zh: '确认', ar: 'تأكيد', ja: '確認する', ru: 'подтверждать', ex: 'I am calling to confirm my booking.', exHi: 'मैं अपनी बुकिंग की पुष्टि करने के लिए कॉल कर रहा हूँ।', exEs: 'Llamo para confirmar mi reserva.', ic: '✅' },
    { w: 'cancel', p: '/ˈkæn.səl/', m: 'to decide that an organized event will not take place', hi: 'रद्द करना', es: 'cancelar', fr: 'annuler', de: 'absagen / stornieren', pt: 'cancelar', zh: '取消', ar: 'إلغاء', ja: 'キャンセルする', ru: 'отменять', ex: 'I am sorry, but I have to cancel my visit.', exHi: 'मुझे खेद है, लेकिन मुझे अपनी यात्रा रद्द करनी होगी।', exEs: 'Lo siento, pero tengo que cancelar mi visita.', ic: '❌' },
    { w: 'available', p: '/əˈveɪ.lə.bəl/', m: 'free to meet or having an open time slot', hi: 'उपलब्ध / समय होना', es: 'disponible', fr: 'disponible', de: 'frei / verfügbar', pt: 'disponível', zh: '有空', ar: 'متاح', ja: '空いている', ru: 'свободный', ex: 'Are you available on Thursday afternoon?', exHi: 'क्या आप गुरुवार दोपहर को उपलब्ध हैं?', exEs: '¿Estás disponible el jueves por la tarde?', ic: '🟢' },
    { w: 'convenient', p: '/kənˈviː.ni.ənt/', m: 'fitting in well with a person\'s needs or plans', hi: 'सुविधाजनक', es: 'conveniente / cómodo', fr: 'pratique', de: 'passend / günstig', pt: 'conveniente', zh: '方便的', ar: 'مناسب', ja: '都合の良い', ru: 'удобный', ex: 'Is 3:00 PM convenient for you?', exHi: 'क्या दोपहर 3:00 बजे का समय आपके लिए सुविधाजनक है?', es: '¿Las 3:00 PM es conveniente para ti?', ic: '👌' },
    { w: 'calendar', p: '/ˈkæl.ən.dər/', m: 'a chart or digital tool showing days, weeks, and months', hi: 'कैलेंडर', es: 'calendario', fr: 'calendrier', de: 'Kalender', pt: 'calendário', zh: '日历', ar: 'تقويم', ja: 'カレンダー', ru: 'календарь', ex: 'Let me check my calendar for next week.', exHi: 'मुझे अगले सप्ताह के लिए अपना कैलेंडर देखने दें।', exEs: 'Déjame revisar mi calendario para la próxima semana.', ic: '📆' },
    { w: 'slot', p: '/slɒt/', m: 'an allotted time in a schedule', hi: 'समय स्लॉट', es: 'espacio / horario', fr: 'créneau', de: 'Zeitfenster', pt: 'horário / vaga', zh: '时间段', ar: 'خانة زمنية', ja: '時間枠', ru: 'временной интервал', ex: 'We have an open slot at 10:15 AM.', exHi: 'हमारे पास सुबह 10:15 बजे एक स्लॉट उपलब्ध है।', exEs: 'Tenemos un espacio disponible a las 10:15 AM.', ic: '⏱️' },
    { w: 'reminder', p: '/rɪˈmaɪn.dər/', m: 'a message that makes you remember something', hi: 'याद दिलाने वाला संदेश / रिमाइंडर', es: 'recordatorio', fr: 'rappel', de: 'Erinnerung', pt: 'lembrete', zh: '提醒', ar: 'تذكير', ja: 'リマインダー', ru: 'напоминание', ex: 'The clinic sent an SMS reminder yesterday.', exHi: 'क्लिनिक ने कल एक एसएमएस रिमाइंडर भेजा था।', exEs: 'La clínica envió un recordatorio por SMS ayer.', ic: '🔔' },
    { w: 'notice', p: '/ˈnəʊ.tɪs/', m: 'advance notification or warning', hi: 'पूर्व सूचना / नोटिस', es: 'aviso previo', fr: 'préavis', de: 'Benachrichtigung / Frist', pt: 'aviso prévio', zh: '通知', ar: 'إشعار', ja: '事前通知', ru: 'уведомление', ex: 'Please give twenty-four hours notice to cancel.', exHi: 'कृपया रद्द करने के लिए चौबीस घंटे पहले सूचना दें।', exEs: 'Por favor avise con veinticuatro horas de anticipación para cancelar.', ic: '📢' },
    { w: 'consultation', p: '/ˌkɒn.sʌlˈteɪ.ʃən/', m: 'a meeting with an expert or doctor for advice', hi: 'परामर्श', es: 'consulta', fr: 'consultation', de: 'Beratung', pt: 'consulta', zh: '咨询', ar: 'استشارة', ja: '相談 / 診察', ru: 'консультация', ex: 'The initial consultation lasts thirty minutes.', exHi: 'प्रारंभिक परामर्श तीस मिनट तक चलता है।', exEs: 'La consulta inicial dura treinta minutos.', ic: '🩺' },
    { w: 'dentist', p: '/ˈden.tɪst/', m: 'a person qualified to treat teeth', hi: 'दंत चिकित्सक', es: 'dentista', fr: 'dentiste', de: 'Zahnarzt', pt: 'dentista', zh: '牙医', ar: 'طبيب أسنان', ja: '歯科医', ru: 'стоматолог', ex: 'I visit the dentist twice a year.', exHi: 'मैं साल में दो बार दंत चिकित्सक के पास जाता हूँ।', exEs: 'Visito al dentista dos veces al año.', ic: '🦷' },
    { w: 'clinic', p: '/ˈklɪn.ɪk/', m: 'a place where medical treatment is given', hi: 'क्लिनिक', es: 'clínica', fr: 'clinique', de: 'Klinik / Praxis', pt: 'clínica', zh: '诊所', ar: 'عيادة', ja: '診療所', ru: 'клиника', ex: 'The clinic is closed on Sundays.', exHi: 'क्लिनिक रविवार को बंद रहता है।', exEs: 'La clínica está cerrada los domingos.', ic: '🏥' },
    { w: 'receptionist', p: '/rɪˈsep.ʃən.ɪst/', m: 'a person who welcomes visitors and books visits', hi: 'रिसेप्शनिस्ट', es: 'recepcionista', fr: 'réceptionniste', de: 'Empfangskraft', pt: 'recepcionista', zh: '接待员', ar: 'موظف استقبال', ja: '受付係', ru: 'администратор', ex: 'The receptionist booked my next checkup.', exHi: 'रिसेप्शनिस्ट ने मेरी अगली जांच बुक की।', exEs: 'La recepcionista reservó mi próximo chequeo.', ic: '👩‍💼' },
    { w: 'morning', p: '/ˈmɔː.nɪŋ/', m: 'the early part of the day until noon', hi: 'सुबह', es: 'mañana', fr: 'matin', de: 'Morgen / Vormittag', pt: 'manhã', zh: '早晨', ar: 'صباح', ja: '午前 / 朝', ru: 'утро', ex: 'Do you prefer morning or afternoon?', exHi: 'क्या आप सुबह या दोपहर का समय पसंद करते हैं?', exEs: '¿Prefieres por la mañana o por la tarde?', ic: '🌅' },
    { w: 'afternoon', p: '/ˌɑːf.təˈnuːn/', m: 'the time between 12:00 PM and evening', hi: 'दोपहर', es: 'tarde', fr: 'après-midi', de: 'Nachmittag', pt: 'tarde', zh: '下午', ar: 'بعد الظهر', ja: '午後', ru: 'день / после полудня', ex: 'I am free any time after three in the afternoon.', exHi: 'मैं दोपहर तीन बजे के बाद कभी भी खाली हूँ।', exEs: 'Estoy libre en cualquier momento después de las tres de la tarde.', ic: '☀️' },
    { w: 'urgent', p: '/ˈɜː.dʒənt/', m: 'requiring fast attention', hi: 'तत्काल / ज़रूरी', es: 'urgente', fr: 'urgent', de: 'dringend', pt: 'urgente', zh: '急迫', ar: 'عاجل', ja: '緊急の', ru: 'срочный', ex: 'Do you have an urgent appointment available?', exHi: 'क्या आपके पास कोई तत्काल अपॉइंटमेंट उपलब्ध है?', exEs: '¿Tiene una cita urgente disponible?', ic: '🚨' },
    { w: 'postpone', p: '/pəʊstˈpəʊn/', m: 'to delay an event to a later time', hi: 'स्थगित करना', es: 'posponer', fr: 'reporter', de: 'verschieben', pt: 'adiar', zh: '推迟', ar: 'تأجيل', ja: '延期する', ru: 'откладывать', ex: 'We had to postpone the meeting until Friday.', exHi: 'हमें बैठक शुक्रवार तक के लिए स्थगित करनी पड़ी।', exEs: 'Tuvimos que posponer la reunión hasta el viernes.', ic: '⏭️' },
    { w: 'earliest', p: '/ˈɜː.li.ɪst/', m: 'happening at the first possible moment', hi: 'यथाशीघ्र / सबसे पहले', es: 'más temprano / más pronto', fr: 'le plus tôt', de: 'früheste', pt: 'mais cedo / mais recente', zh: '最早', ar: 'أقرب وقت', ja: '最も早い', ru: 'самый ранний', ex: 'What is your earliest opening next week?', exHi: 'अगले सप्ताह आपके पास सबसे पहला उपलब्ध समय क्या है?', exEs: '¿Cuál es su horario disponible más temprano la próxima semana?', ic: '⚡' }
  ],
  chunks: [
    { phrase: 'I would like to make an appointment', meaning: 'Standard polite request to book a visit', hi: 'मैं एक अपॉइंटमेंट बुक करना चाहता हूँ', es: 'Me gustaría pedir una cita', fr: 'Je voudrais prendre rendez-vous', de: 'Ich möchte einen Termin vereinbaren', pt: 'Gostaria de marcar uma consulta', zh: '我想预约一个时间', ar: 'أود حجز موعد', ja: '予約を取りたいのですが', ru: 'Я хотел бы записаться на прием', note: 'Essential service booking phrase.', ic: '📅' },
    { phrase: 'How about...?', meaning: 'Suggesting a specific time or day', hi: '... कैसा रहेगा?', es: '¿Qué tal si...?', fr: 'Que diriez-vous de... ?', de: 'Wie wäre es mit...?', pt: 'Que tal...?', zh: '……怎么样？', ar: 'ما رأيك في...؟', ja: '〜はいかがですか？', ru: 'Как насчет...?', note: 'Informal alternative proposition.', ic: '💡' },
    { phrase: 'Does that work for you?', meaning: 'Asking if a proposed time is acceptable', hi: 'क्या यह समय आपके लिए ठीक है?', es: '¿Te viene bien? / ¿Te funciona?', fr: 'Est-ce que cela vous convient ?', de: 'Passt Ihnen das?', pt: 'Isso funciona para você?', zh: '这对你合适吗？', ar: 'هل يناسبك ذلك؟', ja: 'ご都合はいかがですか？', ru: 'Вам это подходит?', note: 'Standard scheduling confirmation.', ic: '🤝' },
    { phrase: 'I am afraid I can\'t make it', meaning: 'Polite way to decline a meeting time', hi: 'मुझे डर है कि मैं उस समय नहीं आ पाऊँगा', es: 'Me temo que no podré asistir', fr: 'J\'ai peur de ne pas pouvoir venir', de: 'Ich fürchte, ich schaffe es nicht', pt: 'Receio que não poderei ir', zh: '恐怕我去不了', ar: 'أخشى أنني لن أتمكن من الحضور', ja: 'あいにく都合がつきません', ru: 'Боюсь, я не смогу прийти', note: 'Polite refusal of a proposed slot.', ic: '🙅' },
    { phrase: 'reschedule for next week', meaning: 'to change the booking to the following week', hi: 'अगले सप्ताह के लिए पुनर्निर्धारित करना', es: 'reprogramar para la próxima semana', fr: 'reprogrammer pour la semaine prochaine', de: 'auf nächste Woche verschieben', pt: 'reagendar para a próxima semana', zh: '改约到下周', ar: 'إعادة الجدولة للأسبوع القادم', ja: '来週に変更する', ru: 'перенести на следующую неделю', note: 'Clear rescheduling timeframe.', ic: '📆' },
    { phrase: 'check my calendar', meaning: 'to look at personal schedules before confirming', hi: 'अपना कैलेंडर देखना', es: 'revisar mi calendario', fr: 'vérifier mon agenda', de: 'meinen Kalender überprüfen', pt: 'verificar minha agenda', zh: '查看日程表', ar: 'التحقق من التقويم', ja: 'スケジュールを確認する', ru: 'свериться с календарем', note: 'Pre-confirmation step.', ic: '🔍' },
    { phrase: 'confirm my booking', meaning: 'to ensure an appointment remains active', hi: 'अपनी बुकिंग की पुष्टि करना', es: 'confirmar mi reserva', fr: 'confirmer ma réservation', de: 'meine Buchung bestätigen', pt: 'confirmar minha reserva', zh: '确认预订', ar: 'تأكيد الحجز', ja: '予約を再確認する', ru: 'подтвердить бронирование', note: 'Customer verification expression.', ic: '✅' },
    { phrase: 'earliest available slot', meaning: 'the very next open appointment time', hi: 'सबसे पहला उपलब्ध समय', es: 'el horario más temprano disponible', fr: 'le premier créneau disponible', de: 'frühestmöglicher freier Termin', pt: 'primeiro horário disponível', zh: '最早可用的时间段', ar: 'أقرب موعد متاح', ja: '最も早い空き枠', ru: 'ближайшее свободное время', note: 'Urgent booking request.', ic: '⚡' }
  ],
  grammar: {
    title: 'Prepositions of Time for Scheduling (at + time, on + day/date, in + month/season)',
    concept: 'Correctly combining prepositions with days, exact hours, and parts of the day when organizing appointments.',
    patterns: [
      {
        title: 'at + Specific Clock Time',
        structure: 'at + 9:00 AM / 2:30 PM / noon',
        rule: 'Use "at" for precise clock times and specific points of time.',
        examples: [
          { en: 'The doctor can see you at 10:30 AM.', hi: 'डॉक्टर आपको सुबह 10:30 बजे देख सकते हैं।', es: 'El médico puede atenderle a las 10:30 AM.' },
          { en: 'We have a meeting at noon.', hi: 'दोपहर में हमारी एक बैठक है।', es: 'Tenemos una reunión al mediodía.' }
        ]
      },
      {
        title: 'on + Days and Dates | in + Parts of the Day',
        structure: 'on Monday / on October 15th | in the morning / in the afternoon',
        rule: 'Use "on" for days of the week and dates; use "in" for non-specific parts of the day.',
        examples: [
          { en: 'My appointment is on Friday in the afternoon.', hi: 'मेरी अपॉइंटमेंट शुक्रवार दोपहर को है।', es: 'Mi cita es el viernes por la tarde.' },
          { en: 'Are you available on May 4th?', hi: 'क्या आप 4 मई को उपलब्ध हैं?', es: '¿Está disponible el 4 de mayo?' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'I have appointment on Monday.', cor: 'I have an appointment on Monday.', exp: 'Countable singular nouns like "appointment" require an article (an appointment).', hi: 'एकवचन संज्ञा "appointment" से पहले "an" लगाएँ।', es: '"Appointment" requiere el artículo "an".' },
    { inc: 'The meeting is in Friday at morning.', cor: 'The meeting is on Friday in the morning.', exp: 'Use "on" with days of the week and "in the morning" for morning periods.', hi: 'दिनों के साथ "on" और "in the morning" का प्रयोग करें।', es: 'Usa "on" con días y "in the morning" para la mañana.' },
    { inc: 'Can we reschedule to next Monday?', cor: 'Can we reschedule for next Monday?', exp: 'Use "reschedule for [day/time]".', hi: 'समय तय करने के लिए "reschedule for" का प्रयोग करें।', es: 'Se suele decir "reschedule for next Monday".' },
    { inc: 'Is 3:00 PM convenient to you?', cor: 'Is 3:00 PM convenient for you?', exp: 'The adjective "convenient" takes the preposition "for".', hi: '"Convenient" के साथ "for" का प्रयोग होता है।', es: '"Convenient" se construye con "for".' },
    { inc: 'I want reschedule my booking.', cor: 'I would like to reschedule my booking.', exp: 'Use "would like to" for polite service requests.', hi: 'विनम्रता के लिए "would like to" का प्रयोग करें।', es: 'Usa "would like to" para solicitudes formales y amables.' }
  ],
  dialogues: [
    {
      title: 'Booking a Dental Appointment',
      context: 'Hannah calls Smile Dental Clinic to book a checkup.',
      charA: { name: 'Receptionist', av: '👩‍⚕️', role: 'Clinic Receptionist' },
      charB: { name: 'Hannah', av: '👩', role: 'Patient' },
      turns: [
        { spk: 'Receptionist', text: 'Smile Dental Clinic, good morning. How can I help you today?', hi: 'स्माइल डेंटल क्लिनिक, शुभ प्रभात। आज मैं आपकी क्या मदद कर सकती हूँ?', es: 'Smile Dental Clinic, buenos días. ¿Cómo puedo ayudarle hoy?' },
        { spk: 'Hannah', text: 'Hello, I would like to make an appointment for a routine dental checkup, please.', hi: 'नमस्ते, मैं नियमित दंत जांच के लिए अपॉइंटमेंट लेना चाहूँगी।', es: 'Hola, me gustaría pedir una cita para un chequeo dental de rutina, por favor.' },
        { spk: 'Receptionist', text: 'Certainly! Dr. Patel has an opening on Wednesday at two in the afternoon. Does that work for you?', hi: 'निश्चित रूप से! डॉ. पटेल के पास बुधवार दोपहर दो बजे का समय उपलब्ध है। क्या यह आपके लिए ठीक है?', es: '¡Por supuesto! La Dra. Patel tiene un espacio el miércoles a las dos de la tarde. ¿Le viene bien?' },
        { spk: 'Hannah', text: 'Yes, Wednesday at two o\'clock is very convenient. Thank you!', hi: 'हाँ, बुधवार दोपहर दो बजे का समय बहुत सुविधाजनक है। धन्यवाद!', es: 'Sí, el miércoles a las dos en punto es muy conveniente. ¡Gracias!' }
      ]
    },
    {
      title: 'Rescheduling a Consultation',
      context: 'Hannah calls back to move her appointment to Thursday.',
      charA: { name: 'Receptionist', av: '👩‍⚕️', role: 'Receptionist' },
      charB: { name: 'Hannah', av: '👩', role: 'Patient' },
      turns: [
        { spk: 'Hannah', text: 'Hello, this is Hannah Clark. I am afraid I have an urgent meeting on Wednesday and need to reschedule.', hi: 'नमस्ते, मैं हन्ना क्लार्क बोल रही हूँ। मुझे डर है कि बुधवार को मेरी एक ज़रूरी बैठक है और मुझे अपॉइंटमेंट पुनर्निर्धारित करनी होगी।', es: 'Hola, habla Hannah Clark. Me temo que tengo una reunión urgente el miércoles y necesito reprogramar.' },
        { spk: 'Receptionist', text: 'No problem, Hannah. How about Thursday morning at ten fifteen?', hi: 'कोई बात नहीं, हन्ना। गुरुवार सुबह सवा दस बजे का समय कैसा रहेगा?', es: 'Sin problema, Hannah. ¿Qué tal el jueves por la mañana a las diez y cuarto?' },
        { spk: 'Hannah', text: 'Thursday at 10:15 AM works perfectly. Please confirm that slot.', hi: 'गुरुवार सुबह 10:15 बजे बिल्कुल सही रहेगा। कृपया उस स्लॉट की पुष्टि करें।', es: 'El jueves a las 10:15 AM funciona perfecto. Por favor confirme ese horario.' },
        { spk: 'Receptionist', text: 'All set! We sent a confirmation SMS to your phone.', hi: 'सब तय हो गया! हमने आपके फ़ोन पर एक पुष्टिकरण एसएमएस भेज दिया है।', es: '¡Todo listo! Enviamos un SMS de confirmación a su teléfono.' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u05_l63_p1', lessonId: 'lesson_a1_5_63', stage: 8, type: 'multiple_choice', prompt: 'Choose the correct preposition: "My appointment is ___ Friday afternoon."', options: [{ id: 'o1', text: 'on', isCorrect: true }, { id: 'o2', text: 'at', isCorrect: false }, { id: 'o3', text: 'in', isCorrect: false }] },
    { id: 'ex_u05_l63_p2', lessonId: 'lesson_a1_5_63', stage: 8, type: 'fill_blank', prompt: 'Complete the sentence with the polite request formula:', sentenceTemplate: 'I ___ to make an appointment with Dr. Evans.', sourceSentence: 'I ___ to make an appointment with Dr. Evans.', options: [{ id: 'o1', text: 'would like', isCorrect: true }, { id: 'o2', text: 'am want', isCorrect: false }, { id: 'o3', text: 'liking', isCorrect: false }] },
    { id: 'ex_u05_l63_p3', lessonId: 'lesson_a1_5_63', stage: 8, type: 'word_ordering', prompt: 'Arrange the words to ask if a time is convenient:', wordBank: ['Is', 'three', 'o\'clock', 'convenient', 'for', 'you?'], targetSentence: 'Is three o\'clock convenient for you?' },
    { id: 'ex_u05_l63_p4', lessonId: 'lesson_a1_5_63', stage: 8, type: 'match_pairs', prompt: 'Match calendar and scheduling words with their definitions:', pairs: [{ left: 'reschedule', right: 'change appointment time' }, { left: 'confirm', right: 'validate booking' }, { left: 'convenient', right: 'suitable and easy' }, { left: 'slot', right: 'available time window' }] },
    { id: 'ex_u05_l63_p5', lessonId: 'lesson_a1_5_63', stage: 8, type: 'error_correction', prompt: 'Identify the corrected sentence:', sentenceTemplate: 'The dentist appointment is in Tuesday at 3:00.', options: [{ id: 'o1', text: 'The dentist appointment is on Tuesday at 3:00.', isCorrect: true }, { id: 'o2', text: 'The dentist appointment is on Tuesday on 3:00.', isCorrect: false }, { id: 'o3', text: 'The dentist appointment is at Tuesday in 3:00.', isCorrect: false }] },
    { id: 'ex_u05_l63_p6', lessonId: 'lesson_a1_5_63', stage: 9, type: 'listening', prompt: 'Listen and choose the sentence you hear:', audioText: 'We have an open slot this Thursday at ten thirty in the morning.', options: [{ id: 'o1', text: 'We have an open slot this Thursday at ten thirty in the morning.', isCorrect: true }, { id: 'o2', text: 'We have an open shop this Tuesday at ten thirty in the evening.', isCorrect: false }] },
    { id: 'ex_u05_l63_p7', lessonId: 'lesson_a1_5_63', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'I would like to reschedule my appointment for Friday.', targetSentence: 'I would like to reschedule my appointment for Friday.' },
    { id: 'ex_u05_l63_p8', lessonId: 'lesson_a1_5_63', stage: 10, type: 'multiple_choice', prompt: 'Which question proposes an alternative meeting time?', options: [{ id: 'o1', text: 'How about Thursday morning at ten o\'clock?', isCorrect: true }, { id: 'o2', text: 'Where did Thursday go?', isCorrect: false }, { id: 'o3', text: 'Why is morning ten?', isCorrect: false }] },
    { id: 'ex_u05_l63_p9', lessonId: 'lesson_a1_5_63', stage: 11, type: 'dialogue_completion', prompt: 'Complete the dialogue: "Can you come in on Tuesday at four?"', options: [{ id: 'o1', text: 'I am afraid I can\'t make it then. How about Wednesday morning?', isCorrect: true }, { id: 'o2', text: 'Yes, I like yellow cars.', isCorrect: false }, { id: 'o3', text: 'The book was interesting.', isCorrect: false }] },
    { id: 'ex_u05_l63_p10', lessonId: 'lesson_a1_5_63', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'I am calling to confirm my appointment for tomorrow morning at nine.', audioText: 'I am calling to confirm my appointment for tomorrow morning at nine.' },
    { id: 'ex_u05_l63_p11', lessonId: 'lesson_a1_5_63', stage: 13, type: 'translation', prompt: 'Translate: "क्या शुक्रवार सुबह का समय आपके लिए सुविधाजनक है?" / "¿El viernes por la mañana es conveniente para usted?"', targetSentence: 'Is Friday morning convenient for you?' },
    { id: 'ex_u05_l63_p12', lessonId: 'lesson_a1_5_63', stage: 14, type: 'multiple_choice', prompt: 'Which preposition precedes clock times like 2:15 PM?', options: [{ id: 'o1', text: 'at', isCorrect: true }, { id: 'o2', text: 'on', isCorrect: false }, { id: 'o3', text: 'in', isCorrect: false }] },
    { id: 'ex_u05_l63_p13', lessonId: 'lesson_a1_5_63', stage: 14, type: 'fill_blank', prompt: 'Complete with the correct word: "Please give us 24 hours ___ if you need to cancel."', sentenceTemplate: 'Please give us 24 hours ___ if you need to cancel.', sourceSentence: 'Please give us 24 hours ___ if you need to cancel.', options: [{ id: 'o1', text: 'notice', isCorrect: true }, { id: 'o2', text: 'clinic', isCorrect: false }, { id: 'o3', text: 'calendar', isCorrect: false }] },
    { id: 'ex_u05_l63_p14', lessonId: 'lesson_a1_5_63', stage: 14, type: 'word_ordering', prompt: 'Arrange the words to make an appointment request:', wordBank: ['What', 'is', 'your', 'earliest', 'available', 'appointment', 'slot?'], targetSentence: 'What is your earliest available appointment slot?' },
    { id: 'ex_u05_l63_p15', lessonId: 'lesson_a1_5_63', stage: 14, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'I would like to book a consultation with the specialist next week.', audioText: 'I would like to book a consultation with the specialist next week.' }
  ],
  review: [
    { id: 'ex_u05_l63_r1', lessonId: 'lesson_a1_5_63', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Choose the correct phone phrase:', options: [{ id: 'o1', text: 'May I speak to Mrs. Johnson, please?', isCorrect: true }, { id: 'o2', text: 'May I to speak Mrs. Johnson please?', isCorrect: false }, { id: 'o3', text: 'Could I speaking to Mrs. Johnson?', isCorrect: false }] },
    { id: 'ex_u05_l63_r2', lessonId: 'lesson_a1_5_63', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete: "Please ___ the line while I check."', sentenceTemplate: 'Please ___ the line while I check.', sourceSentence: 'Please ___ the line while I check.', options: [{ id: 'o1', text: 'hold', isCorrect: true }, { id: 'o2', text: 'cut', isCorrect: false }, { id: 'o3', text: 'hung', isCorrect: false }] },
    { id: 'ex_u05_l63_r3', lessonId: 'lesson_a1_5_63', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['I', 'am', 'calling', 'regarding', 'the', 'meeting', 'agenda.'], targetSentence: 'I am calling regarding the meeting agenda.' },
    { id: 'ex_u05_l63_r4', lessonId: 'lesson_a1_5_63', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match time prepositions:', pairs: [{ left: 'at', right: '3:30 PM' }, { left: 'on', right: 'Wednesday' }, { left: 'in', right: 'the morning' }, { left: 'for', right: 'next week' }] },
    { id: 'ex_u05_l63_r5', lessonId: 'lesson_a1_5_63', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "क्या हम इसे अगले सप्ताह के लिए पुनर्निर्धारित कर सकते हैं?"', targetSentence: 'Can we reschedule it for next week?' }
  ],
  assessment: [
    { id: 'ex_u05_l63_a1', lessonId: 'lesson_a1_5_63', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the grammatically correct scheduling request:', options: [{ id: 'o1', text: 'I would like to schedule a consultation on Thursday at 2:00 PM.', isCorrect: true }, { id: 'o2', text: 'I am want to schedule on 2:00 PM at Thursday.', isCorrect: false }, { id: 'o3', text: 'I schedule appointment in Thursday on 2:00 PM.', isCorrect: false }] },
    { id: 'ex_u05_l63_a2', lessonId: 'lesson_a1_5_63', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete: "Does ten thirty in the morning ___ for you?"', sentenceTemplate: 'Does ten thirty in the morning ___ for you?', sourceSentence: 'Does ten thirty in the morning ___ for you?', options: [{ id: 'o1', text: 'work', isCorrect: true }, { id: 'o2', text: 'working', isCorrect: false }, { id: 'o3', text: 'works', isCorrect: false }] },
    { id: 'ex_u05_l63_a3', lessonId: 'lesson_a1_5_63', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words correctly:', wordBank: ['I', 'am', 'afraid', 'I', 'have', 'to', 'reschedule', 'my', 'visit.'], targetSentence: 'I am afraid I have to reschedule my visit.' },
    { id: 'ex_u05_l63_a4', lessonId: 'lesson_a1_5_63', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Choose the best reply: "We have an opening on Monday at nine or Tuesday at two."', options: [{ id: 'o1', text: 'Tuesday at two in the afternoon works best for me.', isCorrect: true }, { id: 'o2', text: 'I had soup yesterday.', isCorrect: false }, { id: 'o3', text: 'The door is painted blue.', isCorrect: false }] },
    { id: 'ex_u05_l63_a5', lessonId: 'lesson_a1_5_63', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this appointment booking sentence clearly:', targetSentence: 'Thank you for confirming my dental appointment for next Thursday morning.', audioText: 'Thank you for confirming my dental appointment for next Thursday morning.' }
  ]
};
