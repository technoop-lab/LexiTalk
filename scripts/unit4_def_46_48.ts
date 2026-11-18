import { LessonConfig } from './unit4_builder_helper';

// =========================================================================
// LESSON 46: Workplace Routines, Office Items & Daily Professional Tasks
// =========================================================================
export const CONFIG_46: LessonConfig = {
  num: 46,
  title: 'Workplace Routines, Office Items & Daily Professional Tasks',
  icon: '💼',
  estMin: 25,
  objTitle: 'Talk about your workday, office environment, and job routines',
  objDesc: 'Learn vocabulary for office supplies, job titles, and daily workplace tasks using Present Simple and frequency adverbs.',
  objHi: 'कार्यस्थल की दिनचर्या, कार्यालय की वस्तुओं और दैनिक पेशेवर कार्यों के बारे में बात करना सीखें।',
  objEs: 'Aprende a hablar sobre tu jornada laboral, el entorno de oficina y las tareas diarias del trabajo.',
  canDo: [
    'I can name common office equipment and supplies.',
    'I can describe my daily work schedule and responsibilities.',
    'I can ask colleagues about their work routines and meeting times.'
  ],
  canDoHi: [
    'मैं सामान्य कार्यालय उपकरणों और आपूर्ति के नाम बता सकता हूँ।',
    'मैं अपने दैनिक कार्य कार्यक्रम और जिम्मेदारियों का वर्णन कर सकता हूँ।',
    'मैं सहकर्मियों से उनके काम के समय और बैठकों के बारे में पूछ सकता हूँ।'
  ],
  canDoEs: [
    'Puedo nombrar equipos y suministros comunes de oficina.',
    'Puedo describir mi horario de trabajo y mis responsabilidades diarias.',
    'Puedo preguntar a mis colegas sobre sus rutinas laborales y horarios de reuniones.'
  ],
  vocab: [
    { w: 'office', p: '/ˈɒf.ɪs/', m: 'a room or building where people work at desks', hi: 'कार्यालय', es: 'oficina', fr: 'bureau', de: 'Büro', pt: 'escritório', zh: '办公室', ar: 'مكتب', ja: 'オフィス', ru: 'офис', ex: 'I arrive at the office at nine o\'clock.', exHi: 'मैं नौ बजे कार्यालय पहुँचता हूँ।', exEs: 'Llego a la oficina a las nueve en punto.', ic: '🏢' },
    { w: 'colleague', p: '/ˈkɒl.iːɡ/', m: 'a person that you work with', hi: 'सहकर्मी', es: 'colega', fr: 'collègue', de: 'Kollege', pt: 'colega', zh: '同事', ar: 'زميل عمل', ja: '同僚', ru: 'коллега', ex: 'My colleague helps me with the project.', exHi: 'मेरा सहकर्मी परियोजना में मेरी मदद करता है।', exEs: 'Mi colega me ayuda con el proyecto.', ic: '👥' },
    { w: 'manager', p: '/ˈmæn.ɪ.dʒər/', m: 'a person responsible for organizing a team or company', hi: 'प्रबंधक', es: 'gerente', fr: 'responsable', de: 'Manager', pt: 'gerente', zh: '经理', ar: 'مدير', ja: 'マネージャー', ru: 'менеджер', ex: 'Our manager leads the morning meeting.', exHi: 'हमारे प्रबंधक सुबह की बैठक का नेतृत्व करते हैं।', exEs: 'Nuestro gerente dirige la reunión matutina.', ic: '👔' },
    { w: 'meeting', p: '/ˈmiː.tɪŋ/', m: 'an occasion when people come together to discuss things', hi: 'बैठक', es: 'reunión', fr: 'réunion', de: 'Besprechung', pt: 'reunião', zh: '会议', ar: 'اجتماع', ja: '会議', ru: 'собрание', ex: 'We have a team meeting every Monday.', exHi: 'हमारी हर सोमवार को एक टीम बैठक होती है।', exEs: 'Tenemos una reunión de equipo cada lunes.', ic: '📅' },
    { w: 'computer', p: '/kəmˈpjuː.tər/', m: 'an electronic device for storing and processing data', hi: 'कंप्यूटर', es: 'computadora', fr: 'ordinateur', de: 'Computer', pt: 'computador', zh: '电脑', ar: 'حاسوب', ja: 'コンピューター', ru: 'компьютер', ex: 'She turns on her computer in the morning.', exHi: 'वह सुबह अपना कंप्यूटर चालू करती है।', exEs: 'Ella enciende su computadora por la mañana.', ic: '💻' },
    { w: 'keyboard', p: '/ˈkiː.bɔːd/', m: 'a set of keys for operating a computer', hi: 'कीबोर्ड', es: 'teclado', fr: 'clavier', de: 'Tastatur', pt: 'teclado', zh: '键盘', ar: 'لوحة مفاتيح', ja: 'キーボード', ru: 'клавиатура', ex: 'The keyboard is connected to the monitor.', exHi: 'कीबोर्ड मॉनिटर से जुड़ा है।', exEs: 'El teclado está conectado al monitor.', ic: '⌨️' },
    { w: 'screen', p: '/skriːn/', m: 'the flat display surface on a computer or monitor', hi: 'स्क्रीन', es: 'pantalla', fr: 'écran', de: 'Bildschirm', pt: 'tela', zh: '屏幕', ar: 'شاشة', ja: '画面', ru: 'экран', ex: 'Please look at the presentation on the screen.', exHi: 'कृपया स्क्रीन पर प्रस्तुति देखें।', exEs: 'Por favor mira la presentación en la pantalla.', ic: '🖥️' },
    { w: 'document', p: '/ˈdɒk.jə.mənt/', m: 'a paper or digital file with information', hi: 'दस्तावेज़', es: 'documento', fr: 'document', de: 'Dokument', pt: 'documento', zh: '文件', ar: 'وثيقة', ja: '書類', ru: 'документ', ex: 'I am reading an important document.', exHi: 'मैं एक महत्वपूर्ण दस्तावेज़ पढ़ रहा हूँ।', exEs: 'Estoy leyendo un documento importante.', ic: '📄' },
    { w: 'printer', p: '/ˈprɪn.tər/', m: 'a machine for printing text or pictures on paper', hi: 'प्रिंटर', es: 'impresora', fr: 'imprimante', de: 'Drucker', pt: 'impressora', zh: '打印机', ar: 'طابعة', ja: 'プリンター', ru: 'принтер', ex: 'The printer is in room two.', exHi: 'प्रिंटर कमरा नंबर दो में है।', exEs: 'La impresora está en la habitación dos.', ic: '🖨️' },
    { w: 'desk', p: '/desk/', m: 'a table at which one works', hi: 'मेज़', es: 'escritorio', fr: 'bureau', de: 'Schreibtisch', pt: 'mesa', zh: '办公桌', ar: 'مكتب', ja: '机', ru: 'стол', ex: 'My desk is neat and organized.', exHi: 'मेरी मेज़ साफ़ और व्यवस्थित है।', exEs: 'Mi escritorio está ordenado y organizado.', ic: '🪑' },
    { w: 'chair', p: '/tʃeər/', m: 'a seat for one person', hi: 'कुर्सी', es: 'silla', fr: 'chaise', de: 'Stuhl', pt: 'cadeira', zh: '椅子', ar: 'كرسي', ja: '椅子', ru: 'стул', ex: 'This ergonomic chair is comfortable.', exHi: 'यह कुर्सी आरामदायक है।', exEs: 'Esta silla es cómoda.', ic: '💺' },
    { w: 'email', p: '/ˈiː.meɪl/', m: 'electronic message', hi: 'ईमेल', es: 'correo electrónico', fr: 'e-mail', de: 'E-Mail', pt: 'e-mail', zh: '电子邮件', ar: 'بريد إلكتروني', ja: 'メール', ru: 'электронное письмо', ex: 'I send emails to clients every day.', exHi: 'मैं हर दिन ग्राहकों को ईमेल भेजता हूँ।', exEs: 'Envío correos electrónicos a clientes todos los días.', ic: '✉️' },
    { w: 'report', p: '/rɪˈpɔːt/', m: 'a written account of facts or performance', hi: 'रिपोर्ट', es: 'informe', fr: 'rapport', de: 'Bericht', pt: 'relatório', zh: '报告', ar: 'تقرير', ja: '報告書', ru: 'отчет', ex: 'He writes a weekly sales report.', exHi: 'वह एक साप्ताहिक बिक्री रिपोर्ट लिखता है।', exEs: 'Él escribe un informe semanal de ventas.', ic: '📊' },
    { w: 'project', p: '/ˈprɒdʒ.ekt/', m: 'a planned piece of work with a goal', hi: 'परियोजना', es: 'proyecto', fr: 'projet', de: 'Projekt', pt: 'projeto', zh: '项目', ar: 'مشروع', ja: 'プロジェクト', ru: 'проект', ex: 'We are working on a new project.', exHi: 'हम एक नए प्रोजेक्ट पर काम कर रहे हैं।', exEs: 'Estamos trabajando en un nuevo proyecto.', ic: '📁' },
    { w: 'deadline', p: '/ˈded.laɪn/', m: 'the latest time by which something must be finished', hi: 'अंतिम समय सीमा', es: 'fecha límite', fr: 'date limite', de: 'Frist', pt: 'prazo', zh: '截止时间', ar: 'الموعد النهائي', ja: '締め切り', ru: 'срок', ex: 'The project deadline is Friday.', exHi: 'प्रोजेक्ट की समय सीमा शुक्रवार है।', exEs: 'La fecha límite del proyecto es el viernes.', ic: '⏰' },
    { w: 'client', p: '/ˈklaɪ.ənt/', m: 'a person or company buying services', hi: 'ग्राहक', es: 'cliente', fr: 'client', de: 'Kunde', pt: 'cliente', zh: '客户', ar: 'عميل', ja: '顧客', ru: 'клиент', ex: 'We have a call with a client.', exHi: 'हमारा एक ग्राहक के साथ कॉल है।', exEs: 'Tenemos una llamada con un cliente.', ic: '🤝' },
    { w: 'schedule', p: '/ˈʃedʒ.uːl/', m: 'a planned timetable of activities', hi: 'समय सारणी', es: 'horario', fr: 'emploi du temps', de: 'Zeitplan', pt: 'horário', zh: '时间表', ar: 'جدول', ja: '日程', ru: 'расписание', ex: 'Check your schedule for today.', exHi: 'आज के लिए अपना शेड्यूल देखें।', exEs: 'Revisa tu horario de hoy.', ic: '🗓️' },
    { w: 'break', p: '/breɪk/', m: 'a pause for relaxation or food', hi: 'विराम', es: 'descanso', fr: 'pause', de: 'Pause', pt: 'pausa', zh: '休息', ar: 'استراحة', ja: '休憩', ru: 'перерыв', ex: 'We take a lunch break at 1:00 PM.', exHi: 'हम दोपहर 1:00 बजे लंच ब्रेक लेते हैं।', exEs: 'Tomamos un descanso a la 1:00 PM.', ic: '☕' },
    { w: 'file', p: '/faɪl/', m: 'a digital record or paper document', hi: 'फ़ाइल', es: 'archivo', fr: 'fichier', de: 'Datei', pt: 'arquivo', zh: '文件', ar: 'ملف', ja: 'ファイル', ru: 'файл', ex: 'Please save the file.', exHi: 'कृपया फ़ाइल को सहेजें।', exEs: 'Por favor guarda el archivo.', ic: '📂' },
    { w: 'folder', p: '/ˈfəʊl.dər/', m: 'a binder or digital directory for documents', hi: 'फ़ोल्डर', es: 'carpeta', fr: 'dossier', de: 'Ordner', pt: 'pasta', zh: '文件夹', ar: 'مجلد', ja: 'フォルダー', ru: 'папка', ex: 'The forms are in the blue folder.', exHi: 'फ़ॉर्म नीले फ़ोल्डर में हैं।', exEs: 'Los formularios están en la carpeta azul.', ic: '🗂️' },
    { w: 'pen', p: '/pen/', m: 'an instrument for writing with ink', hi: 'कलम', es: 'bolígrafo', fr: 'stylo', de: 'Stift', pt: 'caneta', zh: '笔', ar: 'قلم', ja: 'ペン', ru: 'ручка', ex: 'I need a black pen to sign this.', exHi: 'मुझे इस पर हस्ताक्षर करने के लिए एक काले पेन की आवश्यकता है।', exEs: 'Necesito un bolígrafo negro para firmar esto.', ic: '🖊️' }
  ],
  chunks: [
    { phrase: 'start work', meaning: 'to begin the workday', hi: 'काम शुरू करना', es: 'empezar a trabajar', fr: 'commencer le travail', de: 'anfangen zu arbeiten', pt: 'começar a trabalhar', zh: '开始工作', ar: 'بدء العمل', ja: '仕事を始める', ru: 'начинать работу', note: 'Used with time expressions.', ic: '🌅' },
    { phrase: 'finish work', meaning: 'to end the workday', hi: 'काम खत्म करना', es: 'terminar el trabajo', fr: 'finir le travail', de: 'Feierabend machen', pt: 'terminar o trabalho', zh: '下班', ar: 'إنهاء العمل', ja: '仕事を終える', ru: 'заканчивать работу', note: 'Standard daily routine expression.', ic: '🌆' },
    { phrase: 'have a meeting', meaning: 'to conduct or attend a formal discussion', hi: 'बैठक करना', es: 'tener una reunión', fr: 'avoir une réunion', de: 'ein Meeting haben', pt: 'ter uma reunião', zh: '开会', ar: 'عقد اجتماع', ja: '会議をする', ru: 'проводить собрание', note: 'Essential workplace collocation.', ic: '👥' },
    { phrase: 'send an email', meaning: 'to dispatch an electronic message', hi: 'ईमेल भेजना', es: 'enviar un correo', fr: 'envoyer un e-mail', de: 'eine E-Mail senden', pt: 'enviar um e-mail', zh: '发邮件', ar: 'إرسال بريد', ja: 'メールを送る', ru: 'отправить письмо', note: 'Common daily digital task.', ic: '📤' },
    { phrase: 'take a break', meaning: 'to pause work briefly', hi: 'आराम करना', es: 'tomar una pausa', fr: 'faire une pause', de: 'Pause machen', pt: 'fazer uma pausa', zh: '休息一下', ar: 'أخذ استراحة', ja: '一息つく', ru: 'сделать перерыв', note: 'Used during workday intervals.', ic: '☕' },
    { phrase: 'work from home', meaning: 'to do job tasks remotely', hi: 'घर से काम करना', es: 'trabajar desde casa', fr: 'télétravailler', de: 'im Homeoffice arbeiten', pt: 'trabalhar em casa', zh: '在家办公', ar: 'العمل من المنزل', ja: 'テレワークする', ru: 'работать на дому', note: 'Modern workplace terminology.', ic: '🏠' },
    { phrase: 'meet a deadline', meaning: 'to finish tasks on time', hi: 'समय पर काम पूरा करना', es: 'cumplir un plazo', fr: 'respecter un délai', de: 'Frist einhalten', pt: 'cumprir prazo', zh: '赶上截止时间', ar: 'الالتزام بالموعد', ja: '締め切りに間に合う', ru: 'уложиться в срок', note: 'Key professional competency.', ic: '🎯' },
    { phrase: 'print a document', meaning: 'to produce a paper copy', hi: 'दस्तावेज़ प्रिंट करना', es: 'imprimir un documento', fr: 'imprimer un document', de: 'Dokument drucken', pt: 'imprimir documento', zh: '打印文件', ar: 'طباعة مستند', ja: '書類を印刷する', ru: 'распечатать документ', note: 'Office hardware action.', ic: '🖨️' }
  ],
  grammar: {
    title: 'Workplace Frequency & Present Simple Daily Routines',
    concept: 'Using frequency adverbs (always, usually, often, sometimes, never) to describe job routines and office responsibilities.',
    patterns: [
      {
        title: 'Subject + Frequency Adverb + Verb',
        structure: 'I / You / We / They + usually / always / often + base verb',
        rule: 'Place the frequency adverb directly BEFORE the main verb in affirmative sentences.',
        examples: [
          { en: 'I usually check my emails at 9:00 AM.', hi: 'मैं आमतौर पर सुबह 9:00 बजे अपने ईमेल की जाँच करता हूँ।', es: 'Normalmente reviso mis correos electrónicos a las 9:00 AM.' },
          { en: 'We always attend the weekly team meeting.', hi: 'हम हमेशा साप्ताहिक टीम बैठक में भाग लेते हैं।', es: 'Siempre asistimos a la reunión semanal de equipo.' }
        ]
      },
      {
        title: 'Third-Person Singular Routine Verbs',
        structure: 'He / She / Manager + Adverb + Verb(-s / -es)',
        rule: 'Add -s or -es to the verb when describing a coworker or supervisor.',
        examples: [
          { en: 'She often writes the project report on Friday.', hi: 'वह अक्सर शुक्रवार को प्रोजेक्ट रिपोर्ट लिखती है।', es: 'Ella a menudo escribe el informe del proyecto los viernes.' },
          { en: 'The manager never leaves before 6:00 PM.', hi: 'प्रबंधक 6:00 बजे से पहले कभी नहीं जाते।', es: 'El gerente nunca se va antes de las 6:00 PM.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'I check always my emails.', cor: 'I always check my emails.', exp: 'Frequency adverbs go before the main verb.', hi: 'फ़्रीक्वेंसी एडवर्ब मुख्य क्रिया से पहले आता है।', es: 'Los adverbios de frecuencia van antes del verbo principal.' },
    { inc: 'He start work at eight.', cor: 'He starts work at eight.', exp: 'Third-person singular subjects need -s on the verb.', hi: 'He/She के साथ क्रिया में -s जोड़ें।', es: 'Los sujetos en tercera persona necesitan -s en el verbo.' },
    { inc: 'We are having meeting every Monday.', cor: 'We have a meeting every Monday.', exp: 'Use Present Simple for recurring routines.', hi: 'नियमित दिनचर्या के लिए प्रेजेंट सिंपल का प्रयोग करें।', es: 'Usa presente simple para rutinas regulares.' },
    { inc: 'Do she work in this department?', cor: 'Does she work in this department?', exp: 'Use "Does" with she/he in Present Simple questions.', hi: 'She के साथ प्रश्न में "Does" का उपयोग करें।', es: 'Usa "Does" para preguntas con she/he.' },
    { inc: 'I need to print this on printer two yesterday.', cor: 'I printed this on printer two yesterday.', exp: 'Use past tense for actions completed in the past.', hi: 'बीते समय के लिए पास्ट टेंस का उपयोग करें।', es: 'Usa el tiempo pasado para acciones pasadas.' }
  ],
  dialogues: [
    {
      title: 'Morning Office Routine',
      context: 'David and Sarah discuss their daily schedule by the office coffee maker.',
      charA: { name: 'David', av: '👨‍💼', role: 'Project Coordinator' },
      charB: { name: 'Sarah', av: '👩‍💼', role: 'Senior Analyst' },
      turns: [
        { spk: 'David', text: 'Good morning, Sarah! What time do you usually start work?', hi: 'सुप्रभात, सारा! आप आमतौर पर किस समय काम शुरू करती हैं?', es: '¡Buenos días, Sarah! ¿A qué hora sueles empezar a trabajar?' },
        { spk: 'Sarah', text: 'Good morning! I always arrive at eight thirty and check my emails first.', hi: 'सुप्रभात! मैं हमेशा साढ़े आठ बजे आती हूँ और पहले अपने ईमेल देखती हूँ।', es: '¡Buenos días! Siempre llego a las ocho y media y reviso mis correos primero.' },
        { spk: 'David', text: 'Do we have a project meeting with the client today?', hi: 'क्या आज ग्राहक के साथ हमारी कोई प्रोजेक्ट मीटिंग है?', es: '¿Tenemos una reunión de proyecto con el cliente hoy?' },
        { spk: 'Sarah', text: 'Yes, we have a conference call at two o\'clock in room B.', hi: 'हाँ, रूम बी में दोपहर दो बजे हमारी एक कॉन्फ्रेंस कॉल है।', es: 'Sí, tenemos una llamada de conferencia a las dos en la sala B.' }
      ]
    },
    {
      title: 'Asking for Office Supplies',
      context: 'Mark asks Lisa where to find files and supplies.',
      charA: { name: 'Mark', av: '👨‍💻', role: 'New Employee' },
      charB: { name: 'Lisa', av: '👩‍💼', role: 'Office Administrator' },
      turns: [
        { spk: 'Mark', text: 'Excuse me, Lisa. Where can I find extra folders and pens?', hi: 'माफ़ कीजिए, लिसा। मुझे अतिरिक्त फ़ोल्डर और पेन कहाँ मिल सकते हैं?', es: 'Disculpa, Lisa. ¿Dónde puedo encontrar carpetas y bolígrafos adicionales?' },
        { spk: 'Lisa', text: 'They are in the supply cabinet next to the printer.', hi: 'वे प्रिंटर के बगल वाली सप्लाई अलमारी में हैं।', es: 'Están en el gabinete de suministros al lado de la impresora.' },
        { spk: 'Mark', text: 'Thank you! Is the color printer working today?', hi: 'धन्यवाद! क्या रंगीन प्रिंटर आज काम कर रहा है?', es: '¡Gracias! ¿Está funcionando la impresora a color hoy?' },
        { spk: 'Lisa', text: 'Yes, it is ready. Just send the document to printer two.', hi: 'हाँ, यह तैयार है। बस दस्तावेज़ प्रिंटर दो पर भेजें।', es: 'Sí, está lista. Solo envía el documento a la impresora dos.' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u04_l46_p1', lessonId: 'lesson_a1_4_46', stage: 8, type: 'multiple_choice', prompt: 'Choose the correct workplace noun: "I usually arrive at the ___ at 9:00 AM."', options: [{ id: 'o1', text: 'office', isCorrect: true }, { id: 'o2', text: 'kitchen', isCorrect: false }, { id: 'o3', text: 'beach', isCorrect: false }] },
    { id: 'ex_u04_l46_p2', lessonId: 'lesson_a1_4_46', stage: 8, type: 'fill_blank', prompt: 'Select the correct frequency adverb position:', sentenceTemplate: 'She ___ checks her emails before the morning meeting.', sourceSentence: 'She ___ checks her emails before the morning meeting.', options: [{ id: 'o1', text: 'always', isCorrect: true }, { id: 'o2', text: 'check always', isCorrect: false }, { id: 'o3', text: 'always check', isCorrect: false }] },
    { id: 'ex_u04_l46_p3', lessonId: 'lesson_a1_4_46', stage: 8, type: 'word_ordering', prompt: 'Order the words to form a correct statement:', wordBank: ['We', 'have', 'a', 'team', 'meeting', 'every', 'Monday.'], targetSentence: 'We have a team meeting every Monday.' },
    { id: 'ex_u04_l46_p4', lessonId: 'lesson_a1_4_46', stage: 8, type: 'match_pairs', prompt: 'Match each workplace word with its definition:', pairs: [{ left: 'colleague', right: 'coworker' }, { left: 'deadline', right: 'due date' }, { left: 'manager', right: 'supervisor' }, { left: 'break', right: 'rest period' }] },
    { id: 'ex_u04_l46_p5', lessonId: 'lesson_a1_4_46', stage: 8, type: 'error_correction', prompt: 'Identify the corrected sentence:', sentenceTemplate: 'He start work at eight thirty in the morning.', options: [{ id: 'o1', text: 'He starts work at eight thirty in the morning.', isCorrect: true }, { id: 'o2', text: 'He starting work at eight thirty in the morning.', isCorrect: false }, { id: 'o3', text: 'He is start work at eight thirty in the morning.', isCorrect: false }] },
    { id: 'ex_u04_l46_p6', lessonId: 'lesson_a1_4_46', stage: 9, type: 'listening', prompt: 'Listen and choose the sentence you hear:', audioText: 'Our manager leads the morning meeting at ten o\'clock.', options: [{ id: 'o1', text: 'Our manager leads the morning meeting at ten o\'clock.', isCorrect: true }, { id: 'o2', text: 'Our colleague leaves the meeting at ten o\'clock.', isCorrect: false }] },
    { id: 'ex_u04_l46_p7', lessonId: 'lesson_a1_4_46', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'I send emails to clients every day.', targetSentence: 'I send emails to clients every day.' },
    { id: 'ex_u04_l46_p8', lessonId: 'lesson_a1_4_46', stage: 10, type: 'multiple_choice', prompt: 'Select the correct question form to ask about finish time:', options: [{ id: 'o1', text: 'What time do you usually finish work?', isCorrect: true }, { id: 'o2', text: 'What time does you finish work?', isCorrect: false }, { id: 'o3', text: 'What time are you finish work?', isCorrect: false }] },
    { id: 'ex_u04_l46_p9', lessonId: 'lesson_a1_4_46', stage: 11, type: 'dialogue_completion', prompt: 'Complete the dialogue: "Excuse me, where is the printer?"', options: [{ id: 'o1', text: 'It is on the second floor next to the cabinet.', isCorrect: true }, { id: 'o2', text: 'I am drinking water.', isCorrect: false }, { id: 'o3', text: 'Yesterday was Sunday.', isCorrect: false }] },
    { id: 'ex_u04_l46_p10', lessonId: 'lesson_a1_4_46', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'I usually take a lunch break at one o\'clock.', audioText: 'I usually take a lunch break at one o\'clock.' },
    { id: 'ex_u04_l46_p11', lessonId: 'lesson_a1_4_46', stage: 13, type: 'translation', prompt: 'Translate: "मैं हमेशा समय सीमा पर काम पूरा करता हूँ।" / "Siempre cumplo con el plazo."', targetSentence: 'I always meet the deadline.' },
    { id: 'ex_u04_l46_p12', lessonId: 'lesson_a1_4_46', stage: 14, type: 'multiple_choice', prompt: 'Which device is used to print physical paper copies?', options: [{ id: 'o1', text: 'printer', isCorrect: true }, { id: 'o2', text: 'keyboard', isCorrect: false }, { id: 'o3', text: 'desk', isCorrect: false }] },
    { id: 'ex_u04_l46_p13', lessonId: 'lesson_a1_4_46', stage: 14, type: 'fill_blank', prompt: 'Complete with the preposition of place: "The report is ___ the folder."', sentenceTemplate: 'The report is ___ the folder.', sourceSentence: 'The report is ___ the folder.', options: [{ id: 'o1', text: 'in', isCorrect: true }, { id: 'o2', text: 'at', isCorrect: false }, { id: 'o3', text: 'on to', isCorrect: false }] },
    { id: 'ex_u04_l46_p14', lessonId: 'lesson_a1_4_46', stage: 14, type: 'word_ordering', prompt: 'Arrange the words to form a polite question:', wordBank: ['Can', 'I', 'borrow', 'your', 'blue', 'pen?'], targetSentence: 'Can I borrow your blue pen?' },
    { id: 'ex_u04_l46_p15', lessonId: 'lesson_a1_4_46', stage: 14, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'We are working on an important project together.', audioText: 'We are working on an important project together.' }
  ],
  review: [
    { id: 'ex_u04_l46_r1', lessonId: 'lesson_a1_4_46', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Choose the correct third-person singular verb:', options: [{ id: 'o1', text: 'She goes to work by train.', isCorrect: true }, { id: 'o2', text: 'She go to work by train.', isCorrect: false }, { id: 'o3', text: 'She is go to work by train.', isCorrect: false }] },
    { id: 'ex_u04_l46_r2', lessonId: 'lesson_a1_4_46', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete with the preposition of time: "The meeting is ___ 10:30 AM."', sentenceTemplate: 'The meeting is ___ 10:30 AM.', sourceSentence: 'The meeting is ___ 10:30 AM.', options: [{ id: 'o1', text: 'at', isCorrect: true }, { id: 'o2', text: 'in', isCorrect: false }, { id: 'o3', text: 'on', isCorrect: false }] },
    { id: 'ex_u04_l46_r3', lessonId: 'lesson_a1_4_46', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['There', 'is', 'a', 'printer', 'on', 'the', 'desk.'], targetSentence: 'There is a printer on the desk.' },
    { id: 'ex_u04_l46_r4', lessonId: 'lesson_a1_4_46', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match actions with nouns:', pairs: [{ left: 'check', right: 'emails' }, { left: 'write', right: 'a report' }, { left: 'attend', right: 'a meeting' }, { left: 'save', right: 'a file' }] },
    { id: 'ex_u04_l46_r5', lessonId: 'lesson_a1_4_46', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "वह हर दिन आठ बजे काम शुरू करता है।"', targetSentence: 'He starts work at eight o\'clock every day.' }
  ],
  assessment: [
    { id: 'ex_u04_l46_a1', lessonId: 'lesson_a1_4_46', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the grammatically correct routine sentence:', options: [{ id: 'o1', text: 'She always attends the team meeting on Monday.', isCorrect: true }, { id: 'o2', text: 'She attend always the meeting.', isCorrect: false }, { id: 'o3', text: 'She is attend the meeting.', isCorrect: false }] },
    { id: 'ex_u04_l46_a2', lessonId: 'lesson_a1_4_46', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete the sentence: "We must finish before the ___ on Friday."', sentenceTemplate: 'We must finish before the ___ on Friday.', sourceSentence: 'We must finish before the ___ on Friday.', options: [{ id: 'o1', text: 'deadline', isCorrect: true }, { id: 'o2', text: 'keyboard', isCorrect: false }, { id: 'o3', text: 'desk', isCorrect: false }] },
    { id: 'ex_u04_l46_a3', lessonId: 'lesson_a1_4_46', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words correctly:', wordBank: ['I', 'send', 'weekly', 'reports', 'to', 'my', 'manager.'], targetSentence: 'I send weekly reports to my manager.' },
    { id: 'ex_u04_l46_a4', lessonId: 'lesson_a1_4_46', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Select the best response: "Do you work from home on Fridays?"', options: [{ id: 'o1', text: 'Yes, I usually work remotely on Fridays.', isCorrect: true }, { id: 'o2', text: 'No, it was raining.', isCorrect: false }, { id: 'o3', text: 'I like milk.', isCorrect: false }] },
    { id: 'ex_u04_l46_a5', lessonId: 'lesson_a1_4_46', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this complete sentence clearly:', targetSentence: 'Our team always meets every Monday to plan the weekly tasks.', audioText: 'Our team always meets every Monday to plan the weekly tasks.' }
  ]
};

// =========================================================================
// LESSON 47: Making Requests, Inquiries & Asking for Clarification
// =========================================================================
export const CONFIG_47: LessonConfig = {
  num: 47,
  title: 'Making Requests, Inquiries & Asking for Clarification',
  icon: '❓',
  estMin: 25,
  objTitle: 'Ask polite questions, request assistance, and clarify meanings',
  objDesc: 'Master polite inquiry modals (Could you, Would you mind, May I) and clarification phrases.',
  objHi: 'विनम्र प्रश्न पूछना, सहायता का अनुरोध करना और स्पष्टीकरण मांगना सीखें।',
  objEs: 'Aprende a hacer preguntas educadas, solicitar ayuda y pedir aclaraciones.',
  canDo: [
    'I can ask for repetition or clarification politely when I do not understand.',
    'I can use "Could you please..." and "May I ask..." to make polite requests.',
    'I can ask what a word or expression means.'
  ],
  canDoHi: [
    'समझ में न आने पर मैं विनम्रतापूर्वक दोहराने या स्पष्ट करने का अनुरोध कर सकता हूँ।',
    'मैं विनम्र अनुरोध करने के लिए "Could you please..." का उपयोग कर सकता हूँ।',
    'मैं पूछ सकता हूँ कि किसी शब्द या अभिव्यक्ति का क्या अर्थ है।'
  ],
  canDoEs: [
    'Puedo pedir que repitan o aclaren educadamente cuando no entiendo.',
    'Puedo usar "Could you please..." y "May I ask..." para hacer peticiones amables.',
    'Puedo preguntar qué significa una palabra o expresión.'
  ],
  vocab: [
    { w: 'clarify', p: '/ˈklær.ɪ.faɪ/', m: 'to make something clear or easier to understand', hi: 'स्पष्ट करना', es: 'aclarar', fr: 'clarifier', de: 'klären', pt: 'esclarecer', zh: '澄清', ar: 'توضيح', ja: '明確にする', ru: 'прояснить', ex: 'Could you please clarify the last point?', exHi: 'क्या आप कृपया अंतिम बिंदु को स्पष्ट कर सकते हैं?', exEs: '¿Podría por favor aclarar el último punto?', ic: '💡' },
    { w: 'repeat', p: '/rɪˈpiːt/', m: 'to say or write something again', hi: 'दोहराना', es: 'repetir', fr: 'répéter', de: 'wiederholen', pt: 'repetir', zh: '重复', ar: 'تكرار', ja: '繰り返す', ru: 'повторить', ex: 'Can you repeat that sentence, please?', exHi: 'क्या आप वह वाक्य दोहरा सकते हैं, कृपया?', exEs: '¿Puede repetir esa oración, por favor?', ic: '🔁' },
    { w: 'explain', p: '/ɪkˈspleɪn/', m: 'to make something clear by describing it in detail', hi: 'समझाना', es: 'explicar', fr: 'expliquer', de: 'erklären', pt: 'explicar', zh: '解释', ar: 'شرح', ja: '説明する', ru: 'объяснить', ex: 'Please explain how this software works.', exHi: 'कृपया बताएं कि यह सॉफ्टवेयर कैसे काम करता है।', exEs: 'Por favor explica cómo funciona este software.', ic: '🗣️' },
    { w: 'meaning', p: '/ˈmiː.nɪŋ/', m: 'what a word, sign, or action represents', hi: 'अर्थ', es: 'significado', fr: 'sens', de: 'Bedeutung', pt: 'significado', zh: '含义', ar: 'معنى', ja: '意味', ru: 'значение', ex: 'What is the meaning of this word?', exHi: 'इस शब्द का क्या अर्थ है?', exEs: '¿Cuál es el significado de esta palabra?', ic: '📖' },
    { w: 'pronounce', p: '/prəˈnaʊns/', m: 'to say the sound of a letter or word', hi: 'उच्चारण करना', es: 'pronunciar', fr: 'prononcer', de: 'aussprechen', pt: 'pronunciar', zh: '发音', ar: 'نطق', ja: '発音する', ru: 'произносить', ex: 'How do you pronounce your surname?', exHi: 'आप अपने उपनाम का उच्चारण कैसे करते हैं?', exEs: '¿Cómo pronuncias tu apellido?', ic: '🔊' },
    { w: 'spell', p: '/spel/', m: 'to write or name the letters of a word in order', hi: 'वर्तनी बताना', es: 'deletrear', fr: 'épeler', de: 'buchstabieren', pt: 'soletrar', zh: '拼写', ar: 'تهجئة', ja: 'つづる', ru: 'произносить по буквам', ex: 'Could you spell your email address for me?', exHi: 'क्या आप मेरे लिए अपने ईमेल पते की स्पेलिंग बता सकते हैं?', exEs: '¿Podría deletrear su dirección de correo para mí?', ic: '🔤' },
    { w: 'understand', p: '/ˌʌn.dəˈstænd/', m: 'to know the meaning of what someone is saying', hi: 'समझना', es: 'entender', fr: 'comprendre', de: 'verstehen', pt: 'entender', zh: '理解', ar: 'فهم', ja: '理解する', ru: 'понимать', ex: 'I understand the instructions now.', exHi: 'मैं अब निर्देशों को समझता हूँ।', exEs: 'Ahora entiendo las instrucciones.', ic: '🧠' },
    { w: 'question', p: '/ˈkwes.tʃən/', m: 'a sentence or phrase used to find out information', hi: 'प्रश्न', es: 'pregunta', fr: 'question', de: 'Frage', pt: 'pergunta', zh: '问题', ar: 'سؤال', ja: '質問', ru: 'вопрос', ex: 'I have a quick question about the schedule.', exHi: 'शेड्यूल के बारे में मेरा एक त्वरित प्रश्न है।', exEs: 'Tengo una pregunta rápida sobre el horario.', ic: '❓' },
    { w: 'assistance', p: '/əˈsɪs.təns/', m: 'help or support given to someone', hi: 'सहायता', es: 'asistencia', fr: 'assistance', de: 'Unterstützung', pt: 'assistência', zh: '帮助', ar: 'مساعدة', ja: '支援', ru: 'помощь', ex: 'Thank you for your valuable assistance.', exHi: 'आपकी बहुमूल्य सहायता के लिए धन्यवाद।', exEs: 'Gracias por su valiosa asistencia.', ic: '🤝' },
    { w: 'information', p: '/ˌɪn.fəˈmeɪ.ʃən/', m: 'facts provided or learned about something', hi: 'जानकारी', es: 'información', fr: 'information', de: 'Information', pt: 'informação', zh: '信息', ar: 'معلومات', ja: '情報', ru: 'информация', ex: 'Where can I get more information?', exHi: 'मुझे अधिक जानकारी कहाँ से मिल सकती है?', exEs: '¿Dónde puedo obtener más información?', ic: 'ℹ️' },
    { w: 'slowly', p: '/ˈsləʊ.li/', m: 'at a low speed', hi: 'धीरे से', es: 'despacio', fr: 'lentement', de: 'langsam', pt: 'devagar', zh: '慢慢地', ar: 'ببطء', ja: 'ゆっくり', ru: 'медленно', ex: 'Please speak more slowly.', exHi: 'कृपया अधिक धीरे बोलें।', exEs: 'Por favor hable más despacio.', ic: '🐢' },
    { w: 'loudly', p: '/ˈlaʊd.li/', m: 'making a lot of noise or volume', hi: 'ज़ोर से', es: 'en voz alta', fr: 'fort', de: 'laut', pt: 'alto', zh: '大声地', ar: 'بصوت عال', ja: '大声で', ru: 'громко', ex: 'Could you speak a little more loudly?', exHi: 'क्या आप थोड़ा और ज़ोर से बोल सकते हैं?', exEs: '¿Podría hablar un poco más alto?', ic: '📢' },
    { w: 'pardon', p: '/ˈpɑː.dən/', m: 'used to ask someone to repeat what they said', hi: 'क्षमा करें / फिर से कहें', es: 'perdón', fr: 'pardon', de: 'Wie bitte?', pt: 'perdão', zh: '请原谅', ar: 'عفواً', ja: 'すみません', ru: 'прошу прощения', ex: 'Pardon? I didn\'t catch that.', exHi: 'क्षमा करें? मैं वह सुन नहीं पाया।', exEs: '¿Perdón? No escuché eso.', ic: '👂' },
    { w: 'favor', p: '/ˈfeɪ.vər/', m: 'a kind action that you do for someone', hi: 'उपकार / मदद', es: 'favor', fr: 'service', de: 'Gefallen', pt: 'favor', zh: '恩惠', ar: 'معروف', ja: '親切な行為', ru: 'одолжение', ex: 'Could you do me a quick favor?', exHi: 'क्या आप मेरी एक छोटी सी मदद कर सकते हैं?', exEs: '¿Podrías hacerme un favor rápido?', ic: '🎁' },
    { w: 'detail', p: '/ˈdiː.teɪl/', m: 'a single piece of information or fact', hi: 'विवरण', es: 'detalle', fr: 'détail', de: 'Detail', pt: 'detalhe', zh: '细节', ar: 'تفصيل', ja: '詳細', ru: 'деталь', ex: 'Can you give me more details?', exHi: 'क्या आप मुझे अधिक विवरण दे सकते हैं?', exEs: '¿Puede darme más detalles?', ic: '📝' },
    { w: 'example', p: '/ɪɡˈzɑːm.pəl/', m: 'something that is typical of the group it represents', hi: 'उदाहरण', es: 'ejemplo', fr: 'exemple', de: 'Beispiel', pt: 'exemplo', zh: '例子', ar: 'مثال', ja: '例', ru: 'пример', ex: 'Can you give me an example?', exHi: 'क्या आप मुझे एक उदाहरण दे सकते हैं?', exEs: '¿Puedes darme un ejemplo?', ic: '💡' },
    { w: 'problem', p: '/ˈprɒb.ləm/', m: 'a situation or person that is difficult to deal with', hi: 'समस्या', es: 'problema', fr: 'problème', de: 'Problem', pt: 'problema', zh: '问题', ar: 'مشكلة', ja: '問題', ru: 'проблема', ex: 'Is there a problem with the connection?', exHi: 'क्या कनेक्शन में कोई समस्या है?', exEs: '¿Hay algún problema con la conexión?', ic: '⚠️' },
    { w: 'solution', p: '/səˈluː.ʃən/', m: 'the answer to a problem', hi: 'समाधान', es: 'solución', fr: 'solution', de: 'Lösung', pt: 'solução', zh: '解决方案', ar: 'حل', ja: '解決策', ru: 'решение', ex: 'We found a simple solution.', exHi: 'हमें एक सरल समाधान मिल गया।', exEs: 'Encontramos una solución simple.', ic: '✅' },
    { w: 'polite', p: '/pəˈlaɪt/', m: 'behaving in a way that shows respect for other people', hi: 'विनम्र', es: 'educado', fr: 'poli', de: 'höflich', pt: 'educado', zh: '有礼貌的', ar: 'مهذب', ja: '丁寧な', ru: 'вежливый', ex: 'Always use polite phrases in emails.', exHi: 'ईमेल में हमेशा विनम्र वाक्यांशों का प्रयोग करें।', exEs: 'Usa siempre frases educadas en correos.', ic: '🌟' },
    { w: 'message', p: '/ˈmes.ɪdʒ/', m: 'a short piece of information given to a person', hi: 'संदेश', es: 'mensaje', fr: 'message', de: 'Nachricht', pt: 'mensagem', zh: '信息', ar: 'رسالة', ja: 'メッセージ', ru: 'сообщение', ex: 'Can I leave a message for Mr. Brown?', exHi: 'क्या मैं श्री ब्राउन के लिए एक संदेश छोड़ सकता हूँ?', exEs: '¿Puedo dejar un mensaje para el Sr. Brown?', ic: '💬' }
  ],
  chunks: [
    { phrase: 'Could you please...?', meaning: 'Polite formula for asking someone to do something', hi: 'क्या आप कृपया... कर सकते हैं?', es: '¿Podría por favor...?', fr: 'Pourriez-vous s\'il vous plaît... ?', de: 'Könnten Sie bitte...?', pt: 'Você poderia, por favor...?', zh: '你能请...吗？', ar: 'هل يمكنك من فضلك...؟', ja: 'どうか...していただけますか？', ru: 'Не могли бы вы, пожалуйста...?', note: 'Most useful polite request formula.', ic: '🙏' },
    { phrase: 'What does ___ mean?', meaning: 'Asking for the definition of an unknown word', hi: '___ का क्या अर्थ है?', es: '¿Qué significa ___?', fr: 'Que signifie ___ ?', de: 'Was bedeutet ___?', pt: 'O que significa ___?', zh: '___ 是什么意思？', ar: 'ماذا يعني ___؟', ja: '___ はどういう意味ですか？', ru: 'Что означает ___?', note: 'Crucial for language learners.', ic: '❓' },
    { phrase: 'How do you spell that?', meaning: 'Asking someone to provide letter-by-letter spelling', hi: 'आप इसकी वर्तनी कैसे लिखते हैं?', es: '¿Cómo se deletrea eso?', fr: 'Comment ça s\'épelle ?', de: 'Wie buchstabiert man das?', pt: 'Como se soletra isso?', zh: '那个怎么拼写？', ar: 'كيف تتهجى ذلك؟', ja: 'それはどう綴りますか？', ru: 'Как это пишется по буквам?', note: 'Used for names, addresses, and emails.', ic: '🔤' },
    { phrase: 'I didn\'t catch that.', meaning: 'I did not hear or understand what you said', hi: 'मैं समझ/सुन नहीं पाया।', es: 'No escuché/entendí eso.', fr: 'Je n\'ai pas bien saisi.', de: 'Das habe ich nicht mitbekommen.', pt: 'Não entendi bem.', zh: '我没听清。', ar: 'لم أفهم ذلك جيداً.', ja: '聞き取れませんでした。', ru: 'Я не расслышал.', note: 'Natural conversational response to unclear speech.', ic: '👂' },
    { phrase: 'Could you speak more slowly?', meaning: 'Politely requesting lower speech speed', hi: 'क्या आप और धीरे बोल सकते हैं?', es: '¿Podría hablar más despacio?', fr: 'Pourriez-vous parler plus lentement ?', de: 'Könnten Sie langsamer sprechen?', pt: 'Poderia falar mais devagar?', zh: '你能说慢一点吗？', ar: 'هل يمكنك التحدث ببطء أكثر؟', ja: 'もっとゆっくり話していただけますか？', ru: 'Не могли бы вы говорить медленнее?', note: 'Essential communication aid.', ic: '🐢' },
    { phrase: 'May I ask a question?', meaning: 'Very polite formula before inquiring', hi: 'क्या मैं एक प्रश्न पूछ सकता हूँ?', es: '¿Puedo hacer una pregunta?', fr: 'Puis-je poser une question ?', de: 'Darf ich eine Frage stellen?', pt: 'Posso fazer uma pergunta?', zh: '我可以问一个问题吗？', ar: 'هل لي أن أسأل سؤالاً؟', ja: '質問してもよろしいですか？', ru: 'Могу я задать вопрос?', note: 'Formal and courteous opener.', ic: '🙋' },
    { phrase: 'Do you mind if I...?', meaning: 'Asking permission politely', hi: 'क्या आपको बुरा लगेगा यदि मैं...?', es: '¿Le importa si yo...?', fr: 'Cela vous dérange-t-il si je... ?', de: 'Macht es Ihnen etwas aus, wenn ich...?', pt: 'Você se importa se eu...?', zh: '你介意我...吗？', ar: 'هل تمانع إذا أنا...؟', ja: '...してもかまいませんか？', ru: 'Вы не возражаете, если я...?', note: 'Remember that "No, not at all" means yes/permission granted.', ic: '🤝' },
    { phrase: 'Thank you for your help.', meaning: 'Polite closing of an inquiry', hi: 'आपकी मदद के लिए धन्यवाद।', es: 'Gracias por tu ayuda.', fr: 'Merci pour votre aide.', de: 'Danke für Ihre Hilfe.', pt: 'Obrigado pela sua ajuda.', zh: '谢谢你的帮助。', ar: 'شكراً لمساعدتك.', ja: '助けていただきありがとうございます。', ru: 'Спасибо за вашу помощь.', note: 'Always close inquiries courteously.', ic: '💐' }
  ],
  grammar: {
    title: 'Polite Modal Inquiries & Clarification Patterns',
    concept: 'Using modals (Could, May, Would) and question structures to make polite requests and ask for clarification.',
    patterns: [
      {
        title: 'Could you + Base Verb (Polite Request)',
        structure: 'Could you + please + base verb + object?',
        rule: 'Use "Could you" instead of "Can you" when making polite requests in professional and formal contexts.',
        examples: [
          { en: 'Could you please repeat the last word?', hi: 'क्या आप कृपया अंतिम शब्द दोहरा सकते हैं?', es: '¿Podría por favor repetir la última palabra?' },
          { en: 'Could you send me the file by email?', hi: 'क्या आप मुझे ईमेल से फ़ाइल भेज सकते हैं?', es: '¿Podría enviarme el archivo por correo electrónico?' }
        ]
      },
      {
        title: 'What / How Question Patterns for Clarification',
        structure: 'What does [word] mean? / How do you pronounce [word]?',
        rule: 'Use Present Simple with auxiliary "does / do" to ask about language meanings and pronunciations.',
        examples: [
          { en: 'What does "deadline" mean?', hi: '"Deadline" का क्या अर्थ है?', es: '¿Qué significa "deadline"?' },
          { en: 'How do you pronounce this name?', hi: 'आप इस नाम का उच्चारण कैसे करते हैं?', es: '¿Cómo se pronuncia este nombre?' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'Can you to repeat that?', cor: 'Could you repeat that?', exp: 'Modal verbs take a bare infinitive without "to".', hi: 'मोडल क्रियाओं के बाद "to" का उपयोग न करें।', es: 'Los verbos modales van con infinitivo sin "to".' },
    { inc: 'What means this word?', cor: 'What does this word mean?', exp: 'Form questions with auxiliary "does" and subject before main verb.', hi: 'प्रश्न में "What does [subject] mean?" का प्रयोग करें।', es: 'Forma la pregunta con "What does [palabra] mean?".' },
    { inc: 'Please speak more loud.', cor: 'Please speak more loudly.', exp: 'Use the adverb "loudly" to modify the verb "speak".', hi: 'क्रिया की विशेषता बताने के लिए एडवर्ब "loudly" का उपयोग करें।', es: 'Usa el adverbio "loudly" para modificar el verbo "speak".' },
    { inc: 'I no understand you.', cor: 'I don\'t understand you.', exp: 'Use "don\'t" for negative Present Simple sentences.', hi: 'नकारात्मक वाक्य में "don\'t understand" का उपयोग करें।', es: 'Usa "don\'t understand" para oraciones negativas en presente.' },
    { inc: 'Could you spelling your name?', cor: 'Could you spell your name?', exp: 'Use base verb "spell" after modal "could".', hi: 'Modal "could" के बाद मूल क्रिया का उपयोग करें।', es: 'Usa el verbo base después del modal "could".' }
  ],
  dialogues: [
    {
      title: 'Asking for Clarification in a Meeting',
      context: 'Elena asks her instructor to clarify a difficult technical term.',
      charA: { name: 'Elena', av: '👩‍🎓', role: 'Student' },
      charB: { name: 'Professor Adams', av: '👨‍🏫', role: 'Instructor' },
      turns: [
        { spk: 'Elena', text: 'Excuse me, Professor Adams. May I ask a question?', hi: 'माफ़ कीजिए, प्रोफेसर एडम्स। क्या मैं एक प्रश्न पूछ सकती हूँ?', es: 'Disculpe, Profesor Adams. ¿Puedo hacer una pregunta?' },
        { spk: 'Professor Adams', text: 'Of course, Elena. What would you like to know?', hi: 'ज़रूर, एलेना। आप क्या जानना चाहती हैं?', es: 'Por supuesto, Elena. ¿Qué te gustaría saber?' },
        { spk: 'Elena', text: 'Could you please clarify the meaning of that second point?', hi: 'क्या आप कृपया उस दूसरे बिंदु के अर्थ को स्पष्ट कर सकते हैं?', es: '¿Podría por favor aclarar el significado de ese segundo punto?' },
        { spk: 'Professor Adams', text: 'Certainly! It means we need to submit our files by Friday.', hi: 'ज़रूर! इसका मतलब है कि हमें शुक्रवार तक अपनी फाइलें जमा करनी होंगी।', es: '¡Ciertamente! Significa que debemos enviar nuestros archivos antes del viernes.' }
      ]
    },
    {
      title: 'Confirming Spelling and Details on the Phone',
      context: 'Tom calls a customer service desk to confirm his appointment.',
      charA: { name: 'Tom', av: '👨‍💼', role: 'Caller' },
      charB: { name: 'Agent', av: '👩‍💼', role: 'Representative' },
      turns: [
        { spk: 'Agent', text: 'Customer service, how can I help you today?', hi: 'ग्राहक सेवा, मैं आज आपकी क्या मदद कर सकता हूँ?', es: 'Servicio al cliente, ¿cómo puedo ayudarle hoy?' },
        { spk: 'Tom', text: 'Hello, I didn\'t catch your name. Could you repeat it, please?', hi: 'नमस्ते, मैं आपका नाम सुन नहीं पाया। क्या आप इसे दोहरा सकते हैं?', es: 'Hola, no escuché su nombre. ¿Podría repetirlo, por favor?' },
        { spk: 'Agent', text: 'My name is Clara Vance. That is V-A-N-C-E.', hi: 'मेरा नाम क्लारा वेंस है। यह V-A-N-C-E है।', es: 'Mi nombre es Clara Vance. Se deletrea V-A-N-C-E.' },
        { spk: 'Tom', text: 'Thank you, Clara. Could you check my booking reference?', hi: 'धन्यवाद, क्लारा। क्या आप मेरा बुकिंग संदर्भ देख सकती हैं?', es: 'Gracias, Clara. ¿Podría revisar mi referencia de reserva?' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u04_l47_p1', lessonId: 'lesson_a1_4_47', stage: 8, type: 'multiple_choice', prompt: 'Select the polite request formula: "___ you please repeat that?"', options: [{ id: 'o1', text: 'Could', isCorrect: true }, { id: 'o2', text: 'Must', isCorrect: false }, { id: 'o3', text: 'Should', isCorrect: false }] },
    { id: 'ex_u04_l47_p2', lessonId: 'lesson_a1_4_47', stage: 8, type: 'fill_blank', prompt: 'Complete the clarification question:', sentenceTemplate: 'What ___ this word mean?', sourceSentence: 'What ___ this word mean?', options: [{ id: 'o1', text: 'does', isCorrect: true }, { id: 'o2', text: 'do', isCorrect: false }, { id: 'o3', text: 'is', isCorrect: false }] },
    { id: 'ex_u04_l47_p3', lessonId: 'lesson_a1_4_47', stage: 8, type: 'word_ordering', prompt: 'Order the words to ask for slower speech:', wordBank: ['Could', 'you', 'speak', 'more', 'slowly,', 'please?'], targetSentence: 'Could you speak more slowly, please?' },
    { id: 'ex_u04_l47_p4', lessonId: 'lesson_a1_4_47', stage: 8, type: 'match_pairs', prompt: 'Match questions with their purposes:', pairs: [{ left: 'What does ___ mean?', right: 'Asking for meaning' }, { left: 'How do you spell that?', right: 'Asking for spelling' }, { left: 'How do you pronounce this?', right: 'Asking for pronunciation' }, { left: 'Could you repeat that?', right: 'Asking to say again' }] },
    { id: 'ex_u04_l47_p5', lessonId: 'lesson_a1_4_47', stage: 8, type: 'error_correction', prompt: 'Identify the corrected sentence:', sentenceTemplate: 'What means this word in English?', options: [{ id: 'o1', text: 'What does this word mean in English?', isCorrect: true }, { id: 'o2', text: 'What is mean this word in English?', isCorrect: false }, { id: 'o3', text: 'What meaning this word in English?', isCorrect: false }] },
    { id: 'ex_u04_l47_p6', lessonId: 'lesson_a1_4_47', stage: 9, type: 'listening', prompt: 'Listen and select the sentence you hear:', audioText: 'Could you please clarify the meaning of the second sentence?', options: [{ id: 'o1', text: 'Could you please clarify the meaning of the second sentence?', isCorrect: true }, { id: 'o2', text: 'Could you please classify the meeting of the second sentence?', isCorrect: false }] },
    { id: 'ex_u04_l47_p7', lessonId: 'lesson_a1_4_47', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'May I ask a quick question?', targetSentence: 'May I ask a quick question?' },
    { id: 'ex_u04_l47_p8', lessonId: 'lesson_a1_4_47', stage: 10, type: 'multiple_choice', prompt: 'Choose the correct question to ask someone how to write their name in letters:', options: [{ id: 'o1', text: 'How do you spell your name?', isCorrect: true }, { id: 'o2', text: 'How do you speak your name?', isCorrect: false }, { id: 'o3', text: 'What spells your name?', isCorrect: false }] },
    { id: 'ex_u04_l47_p9', lessonId: 'lesson_a1_4_47', stage: 11, type: 'dialogue_completion', prompt: 'Complete the dialogue: "I didn\'t catch that."', options: [{ id: 'o1', text: 'No problem, I will say it again slowly.', isCorrect: true }, { id: 'o2', text: 'The table is red.', isCorrect: false }, { id: 'o3', text: 'I am from Japan.', isCorrect: false }] },
    { id: 'ex_u04_l47_p10', lessonId: 'lesson_a1_4_47', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'Could you please explain this rule again?', audioText: 'Could you please explain this rule again?' },
    { id: 'ex_u04_l47_p11', lessonId: 'lesson_a1_4_47', stage: 13, type: 'translation', prompt: 'Translate: "क्या आप कृपया अधिक धीरे बोल सकते हैं?" / "¿Podría hablar más despacio por favor?"', targetSentence: 'Could you please speak more slowly?' },
    { id: 'ex_u04_l47_p12', lessonId: 'lesson_a1_4_47', stage: 14, type: 'multiple_choice', prompt: 'Which verb means to say the sound of letters correctly?', options: [{ id: 'o1', text: 'pronounce', isCorrect: true }, { id: 'o2', text: 'write', isCorrect: false }, { id: 'o3', text: 'listen', isCorrect: false }] },
    { id: 'ex_u04_l47_p13', lessonId: 'lesson_a1_4_47', stage: 14, type: 'fill_blank', prompt: 'Fill in the blank with the polite modal: "___ I leave a message for the manager?"', sentenceTemplate: '___ I leave a message for the manager?', sourceSentence: '___ I leave a message for the manager?', options: [{ id: 'o1', text: 'May', isCorrect: true }, { id: 'o2', text: 'Am', isCorrect: false }, { id: 'o3', text: 'Do', isCorrect: false }] },
    { id: 'ex_u04_l47_p14', lessonId: 'lesson_a1_4_47', stage: 14, type: 'word_ordering', prompt: 'Order the words to ask for assistance:', wordBank: ['Could', 'you', 'do', 'me', 'a', 'favor?'], targetSentence: 'Could you do me a favor?' },
    { id: 'ex_u04_l47_p15', lessonId: 'lesson_a1_4_47', stage: 14, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'Thank you very much for your valuable assistance.', audioText: 'Thank you very much for your valuable assistance.' }
  ],
  review: [
    { id: 'ex_u04_l47_r1', lessonId: 'lesson_a1_4_47', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Select the correct frequency adverb position:', options: [{ id: 'o1', text: 'I always check my messages in the morning.', isCorrect: true }, { id: 'o2', text: 'I check always my messages in the morning.', isCorrect: false }, { id: 'o3', text: 'Always I check my messages in the morning.', isCorrect: false }] },
    { id: 'ex_u04_l47_r2', lessonId: 'lesson_a1_4_47', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete the question: "___ she work on Saturdays?"', sentenceTemplate: '___ she work on Saturdays?', sourceSentence: '___ she work on Saturdays?', options: [{ id: 'o1', text: 'Does', isCorrect: true }, { id: 'o2', text: 'Do', isCorrect: false }, { id: 'o3', text: 'Is', isCorrect: false }] },
    { id: 'ex_u04_l47_r3', lessonId: 'lesson_a1_4_47', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['She', 'usually', 'takes', 'a', 'break', 'at', 'noon.'], targetSentence: 'She usually takes a break at noon.' },
    { id: 'ex_u04_l47_r4', lessonId: 'lesson_a1_4_47', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match workplace terms:', pairs: [{ left: 'send', right: 'an email' }, { left: 'meet', right: 'a deadline' }, { left: 'have', right: 'a meeting' }, { left: 'start', right: 'work' }] },
    { id: 'ex_u04_l47_r5', lessonId: 'lesson_a1_4_47', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "क्या आप वह ईमेल भेज सकते हैं?"', targetSentence: 'Could you send that email?' }
  ],
  assessment: [
    { id: 'ex_u04_l47_a1', lessonId: 'lesson_a1_4_47', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the most polite request to ask someone to repeat:', options: [{ id: 'o1', text: 'Could you please repeat what you just said?', isCorrect: true }, { id: 'o2', text: 'Repeat that now.', isCorrect: false }, { id: 'o3', text: 'What is you saying?', isCorrect: false }] },
    { id: 'ex_u04_l47_a2', lessonId: 'lesson_a1_4_47', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete the clarification question: "How do you ___ your surname?"', sentenceTemplate: 'How do you ___ your surname?', sourceSentence: 'How do you ___ your surname?', options: [{ id: 'o1', text: 'spell', isCorrect: true }, { id: 'o2', text: 'spelling', isCorrect: false }, { id: 'o3', text: 'spelled', isCorrect: false }] },
    { id: 'ex_u04_l47_a3', lessonId: 'lesson_a1_4_47', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words to ask what a phrase means:', wordBank: ['What', 'does', 'this', 'expression', 'mean?'], targetSentence: 'What does this expression mean?' },
    { id: 'ex_u04_l47_a4', lessonId: 'lesson_a1_4_47', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Choose the best response: "May I ask a quick question about the project?"', options: [{ id: 'o1', text: 'Of course! Go ahead and ask.', isCorrect: true }, { id: 'o2', text: 'Yesterday it was sunny.', isCorrect: false }, { id: 'o3', text: 'I don\'t eat meat.', isCorrect: false }] },
    { id: 'ex_u04_l47_a5', lessonId: 'lesson_a1_4_47', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this sentence clearly into your microphone:', targetSentence: 'Could you please clarify this instruction for me?', audioText: 'Could you please clarify this instruction for me?' }
  ]
};

// =========================================================================
// LESSON 48: Customer Service, Returns, Exchanges & Store Policies
// =========================================================================
export const CONFIG_48: LessonConfig = {
  num: 48,
  title: 'Customer Service, Returns, Exchanges & Store Policies',
  icon: '🛍️',
  estMin: 25,
  objTitle: 'Handle shopping problems, request returns, and understand store policies',
  objDesc: 'Learn vocabulary for receipts, warranties, refunds, and exchanges using modal verbs and descriptive adjectives.',
  objHi: 'खरीदारी की समस्याओं को संभालना, रिटर्न का अनुरोध करना और स्टोर नीतियों को समझना सीखें।',
  objEs: 'Aprende a resolver problemas de compras, solicitar devoluciones y entender las políticas de la tienda.',
  canDo: [
    'I can explain what is wrong with an item (damaged, too big, wrong color).',
    'I can ask for a refund or an exchange using a receipt.',
    'I can understand basic store return policies and time limits.'
  ],
  canDoHi: [
    'मैं समझा सकता हूँ कि किसी वस्तु में क्या ख़राबी है (क्षतिग्रस्त, बहुत बड़ा, गलत रंग)।',
    'मैं रसीद का उपयोग करके रिफंड या एक्सचेंज मांग सकता हूँ।',
    'मैं बुनियादी स्टोर रिटर्न नीतियों और समय सीमाओं को समझ सकता हूँ।'
  ],
  canDoEs: [
    'Puedo explicar qué le pasa a un artículo (dañado, demasiado grande, color equivocado).',
    'Puedo solicitar un reembolso o un cambio usando un recibo.',
    'Puedo comprender las políticas básicas de devolución de las tiendas.'
  ],
  vocab: [
    { w: 'receipt', p: '/rɪˈsiːt/', m: 'a printed paper showing that you have paid for something', hi: 'रसीद', es: 'recibo', fr: 'reçu', de: 'Kassenbon', pt: 'recibo', zh: '收据', ar: 'إيصال', ja: '領収書', ru: 'чек', ex: 'Do you have the original receipt?', exHi: 'क्या आपके पास मूल रसीद है?', exEs: '¿Tiene el recibo original?', ic: '🧾' },
    { w: 'refund', p: '/ˈriː.fʌnd/', m: 'money that is given back to you when you return goods', hi: 'धनवापसी (रिफंड)', es: 'reembolso', fr: 'remboursement', de: 'Rückerstattung', pt: 'reembolso', zh: '退款', ar: 'استرداد نقدي', ja: '返金', ru: 'возврат денег', ex: 'I would like a full refund, please.', exHi: 'मुझे पूरा रिफंड चाहिए, कृपया।', exEs: 'Me gustaría un reembolso completo, por favor.', ic: '💵' },
    { w: 'exchange', p: '/ɪksˈtʃeɪndʒ/', m: 'the act of giving one thing and receiving another in its place', hi: 'बदलना (एक्सचेंज)', es: 'cambio', fr: 'échange', de: 'Umtausch', pt: 'troca', zh: '换货', ar: 'تبديل', ja: '交換', ru: 'обмен', ex: 'Can I exchange this shirt for a larger size?', exHi: 'क्या मैं इस शर्ट को बड़े आकार के लिए बदल सकता हूँ?', exEs: '¿Puedo cambiar esta camisa por una talla más grande?', ic: '🔄' },
    { w: 'damaged', p: '/ˈdæm.ɪdʒd/', m: 'harmed or broken so that it is not in good condition', hi: 'क्षतिग्रस्त / टूटा हुआ', es: 'dañado', fr: 'endommagé', de: 'beschädigt', pt: 'danificado', zh: '损坏的', ar: 'تالف', ja: '破損した', ru: 'поврежденный', ex: 'The box was damaged during delivery.', exHi: 'डिलीवरी के दौरान बॉक्स क्षतिग्रस्त हो गया था।', exEs: 'La caja se dañó durante la entrega.', ic: '📦' },
    { w: 'broken', p: '/ˈbrəʊ.kən/', m: 'damaged and not working properly', hi: 'खराब / टूटा हुआ', es: 'roto', fr: 'cassé', de: 'kaputt', pt: 'quebrado', zh: '破损的', ar: 'مكسور', ja: '壊れた', ru: 'сломанный', ex: 'The screen of this tablet is broken.', exHi: 'इस टैबलेट की स्क्रीन टूटी हुई है।', exEs: 'La pantalla de esta tableta está rota.', ic: '💔' },
    { w: 'defective', p: '/dɪˈfek.tɪv/', m: 'having a fault or defect; not working as intended', hi: 'दोषपूर्ण', es: 'defectuoso', fr: 'défectueux', de: 'fehlerhaft', pt: 'defeituoso', zh: '有缺陷的', ar: 'معيب', ja: '欠陥のある', ru: 'дефектный', ex: 'This charger is defective and will not charge.', exHi: 'यह चार्जर ख़राब है और चार्ज नहीं कर रहा है।', exEs: 'Este cargador es defectuoso y no carga.', ic: '⚠️' },
    { w: 'return', p: '/rɪˈtɜːn/', m: 'to give or send something back to a store', hi: 'वापस करना', es: 'devolver', fr: 'retourner', de: 'zurückgeben', pt: 'devolver', zh: '退货', ar: 'إرجاع', ja: '返品する', ru: 'возвращать', ex: 'I want to return these shoes.', exHi: 'मैं इन जूतों को वापस करना चाहता हूँ।', exEs: 'Quiero devolver estos zapatos.', ic: '🔙' },
    { w: 'policy', p: '/ˈpɒl.ə.si/', m: 'a set of rules or ideas about what to do in situations', hi: 'नीति', es: 'política', fr: 'politique', de: 'Richtlinie', pt: 'política', zh: '政策', ar: 'سياسة', ja: '規約', ru: 'правило', ex: 'Our return policy allows thirty days.', exHi: 'हमारी वापसी नीति तीस दिनों की अनुमति देती है।', exEs: 'Nuestra política de devolución permite treinta días.', ic: '📜' },
    { w: 'warranty', p: '/ˈwɒr.ən.ti/', m: 'a written promise to repair or replace a product if broken', hi: 'वारंटी', es: 'garantía', fr: 'garantie', de: 'Garantie', pt: 'garantia', zh: '保修', ar: 'ضمان', ja: '保証', ru: 'гарантия', ex: 'This laptop comes with a two-year warranty.', exHi: 'यह लैपटॉप दो साल की वारंटी के साथ आता है।', exEs: 'Esta computadora portátil viene con dos años de garantía.', ic: '🛡️' },
    { w: 'customer', p: '/ˈkʌs.tə.mər/', m: 'a person who buys goods or services from a shop or business', hi: 'ग्राहक', es: 'cliente', fr: 'client', de: 'Kunde', pt: 'cliente', zh: '顾客', ar: 'زبون', ja: '客', ru: 'покупатель', ex: 'The customer is speaking with the manager.', exHi: 'ग्राहक प्रबंधक से बात कर रहा है।', exEs: 'El cliente está hablando con el gerente.', ic: '🧑' },
    { w: 'cashier', p: '/kæʃˈɪər/', m: 'a person whose job is to receive and pay out money in a shop', hi: 'खजांची / कैशियर', es: 'cajero', fr: 'caissier', de: 'Kassierer', pt: 'caixa', zh: '收银员', ar: 'صراف', ja: 'レジ係', ru: 'кассир', ex: 'Please show your receipt to the cashier.', exHi: 'कृपया कैशियर को अपनी रसीद दिखाएं।', exEs: 'Por favor muestre su recibo al cajero.', ic: '💁' },
    { w: 'tag', p: '/tæɡ/', m: 'a small piece of paper or plastic attached to an item with price/details', hi: 'मूल्य पर्ची / टैग', es: 'etiqueta', fr: 'étiquette', de: 'Etikett', pt: 'etiqueta', zh: '标签', ar: 'بطاقة سعر', ja: '値札', ru: 'бирка', ex: 'Please keep the price tag on the jacket.', exHi: 'कृपया जैकेट पर मूल्य टैग लगा रहने दें।', exEs: 'Por favor conserve la etiqueta de precio en la chaqueta.', ic: '🏷️' },
    { w: 'size', p: '/saɪz/', m: 'how large or small something is', hi: 'आकार / साइज़', es: 'talla', fr: 'taille', de: 'Größe', pt: 'tamanho', zh: '尺寸', ar: 'مقاس', ja: 'サイズ', ru: 'размер', ex: 'This sweater is the wrong size for me.', exHi: 'यह स्वेटर मेरे लिए गलत आकार का है।', exEs: 'Este suéter es la talla equivocada para mí.', ic: '📐' },
    { w: 'color', p: '/ˈkʌl.ər/', m: 'red, blue, green, yellow, etc.', hi: 'रंग', es: 'color', fr: 'couleur', de: 'Farbe', pt: 'cor', zh: '颜色', ar: 'لون', ja: '色', ru: 'цвет', ex: 'Do you have this dress in a different color?', exHi: 'क्या आपके पास यह पोशाक दूसरे रंग में है?', exEs: '¿Tiene este vestido en otro color?', ic: '🎨' },
    { w: 'faulty', p: '/ˈfɔːl.ti/', m: 'not working or made correctly', hi: 'खराबी युक्त', es: 'defectuoso', fr: 'défaillant', de: 'mangelhaft', pt: 'com defeito', zh: '有毛病的', ar: 'غير صالح', ja: '不具合のある', ru: 'неисправный', ex: 'The headphones are faulty.', exHi: 'हेडफ़ोन ख़राब हैं।', exEs: 'Los auriculares son defectuosos.', ic: '🎧' },
    { w: 'store', p: '/stɔːr/', m: 'a large shop where goods are sold', hi: 'दुकान / स्टोर', es: 'tienda', fr: 'magasin', de: 'Geschäft', pt: 'loja', zh: '商店', ar: 'متجر', ja: '店', ru: 'магазин', ex: 'I bought this at your downtown store.', exHi: 'मैंने इसे आपके शहर वाले स्टोर से खरीदा था।', exEs: 'Compré esto en su tienda del centro.', ic: '🏬' },
    { w: 'credit', p: '/ˈkred.ɪt/', m: 'money added to an account or store voucher', hi: 'स्टोर क्रेडिट', es: 'crédito en tienda', fr: 'avoir', de: 'Gutschrift', pt: 'crédito', zh: '积分/储值', ar: 'رصيد متجر', ja: 'ストアクレジット', ru: 'кредит магазина', ex: 'We can offer you store credit.', exHi: 'हम आपको स्टोर क्रेडिट की पेशकश कर सकते हैं।', exEs: 'Podemos ofrecerle crédito en la tienda.', ic: '💳' },
    { w: 'original', p: '/əˈrɪdʒ.ən.əl/', m: 'existing from the beginning; not a copy', hi: 'मूल / असली', es: 'original', fr: 'original', de: 'original', pt: 'original', zh: '原始的', ar: 'أصلي', ja: 'オリジナルの', ru: 'оригинальный', ex: 'Items must be returned in their original box.', exHi: 'सामान को उसके मूल बॉक्स में वापस किया जाना चाहिए।', exEs: 'Los artículos deben devolverse en su caja original.', ic: '📦' },
    { w: 'unworn', p: '/ʌnˈwɔːn/', m: 'not having been worn by anyone', hi: 'बिना पहना हुआ', es: 'sin usar', fr: 'non porté', de: 'ungetragen', pt: 'não usado', zh: '未穿过的', ar: 'غير ملبوس', ja: '未着用の', ru: 'неношеный', ex: 'Clothing returns must be unworn with tags.', exHi: 'कपड़ों की वापसी बिना पहने टैग के साथ होनी चाहिए।', exEs: 'Las devoluciones de ropa deben estar sin usar con etiquetas.', ic: '👗' },
    { w: 'manager', p: '/ˈmæn.ɪ.dʒər/', m: 'the person in charge of the store', hi: 'प्रबंधक', es: 'gerente', fr: 'gérant', de: 'Filialleiter', pt: 'gerente', zh: '店长', ar: 'مدير المتجر', ja: '店長', ru: 'управляющий', ex: 'The store manager approved the refund.', exHi: 'स्टोर मैनेजर ने रिफंड को मंजूरी दे दी।', exEs: 'El gerente de la tienda aprobó el reembolso.', ic: '👔' }
  ],
  chunks: [
    { phrase: 'I would like a refund.', meaning: 'Politely requesting money back for an item', hi: 'मुझे धनवापसी चाहिए।', es: 'Me gustaría un reembolso.', fr: 'Je souhaiterais un remboursement.', de: 'Ich möchte eine Rückerstattung.', pt: 'Eu gostaria de um reembolso.', zh: '我想退款。', ar: 'أود استرداد المبلغ.', ja: '返金をお願いしたいのですが。', ru: 'Я бы хотел оформиल возврат денег.', note: 'Standard courteous customer service formula.', ic: '💵' },
    { phrase: 'Can I exchange this for...?', meaning: 'Asking to replace an item with another', hi: 'क्या मैं इसे ... के बदले बदल सकता हूँ?', es: '¿Puedo cambiar esto por...?', fr: 'Puis-je échanger ceci contre... ?', de: 'Kann ich das umtauschen gegen...?', pt: 'Posso trocar isso por...?', zh: '我可以把这个换成...吗？', ar: 'هل يمكنني استبدال هذا بـ...؟', ja: 'これを...と交換できますか？', ru: 'Могу я обменять это на...?', note: 'Used when seeking a different size or color.', ic: '🔄' },
    { phrase: 'It doesn\'t work.', meaning: 'The product is broken or malfunctioning', hi: 'यह काम नहीं कर रहा है।', es: 'No funciona.', fr: 'Ça ne fonctionne pas.', de: 'Es funktioniert nicht.', pt: 'Não funciona.', zh: '它坏了/不工作。', ar: 'إنه لا يعمل.', ja: '動きません。', ru: 'Это не работает.', note: 'Direct problem description for electronics.', ic: '⚠️' },
    { phrase: 'Here is my receipt.', meaning: 'Presenting proof of purchase to the cashier', hi: 'यह मेरी रसीद है।', es: 'Aquí está mi recibo.', fr: 'Voici mon reçu.', de: 'Hier ist mein Beleg.', pt: 'Aqui está meu recibo.', zh: '这是我的收据。', ar: 'إليك إيصالي.', ja: 'これがレシートです。', ru: 'Вот мой чек.', note: 'Required step for returns in most stores.', ic: '🧾' },
    { phrase: 'It is too small/big.', meaning: 'Describing size mismatches for clothing', hi: 'यह बहुत छोटा/बड़ा है।', es: 'Es demasiado pequeño/grande.', fr: 'C\'est trop petit/grand.', de: 'Es ist zu klein/groß.', pt: 'É muito pequeno/grande.', zh: '这太小/大了。', ar: 'إنه صغير جداً / كبير جداً.', ja: '小さすぎます／大きすぎます。', ru: 'Это слишком мало/велико.', note: 'Uses the intensifier "too".', ic: '📏' },
    { phrase: 'Is it still under warranty?', meaning: 'Inquiring if repair/replacement is covered', hi: 'क्या यह अभी भी वारंटी में है?', es: '¿Aún está en garantía?', fr: 'Est-ce toujours sous garantie ?', de: 'Ist noch Garantie darauf?', pt: 'Ainda está na garantia?', zh: '它还在保修期内吗？', ar: 'هل ما زال تحت الضمان؟', ja: 'まだ保証期間内ですか？', ru: 'На это еще действует гарантия?', note: 'Crucial question for appliances/electronics.', ic: '🛡️' },
    { phrase: 'store credit', meaning: 'a voucher or balance to spend only in that store', hi: 'स्टोर क्रेडिट', es: 'crédito en tienda', fr: 'avoir en magasin', de: 'Warengutschein', pt: 'vale-compras', zh: '店内消费额度', ar: 'رصيد للمتجر', ja: 'ストアクレジット', ru: 'кредит в магазине', note: 'Offered when cash refunds are not allowed.', ic: '💳' },
    { phrase: 'Within thirty days', meaning: 'The allowable return time window', hi: 'तीस दिनों के भीतर', es: 'Dentro de treinta días', fr: 'Dans les trente jours', de: 'Innerhalb von 30 Tagen', pt: 'Dentro de trinta dias', zh: '三十天之内', ar: 'خلال ثلاثين يوماً', ja: '30日以内', ru: 'В течение 30 дней', note: 'Standard retail time limitation phrase.', ic: '📅' }
  ],
  grammar: {
    title: 'Expressing Problems & Polite Customer Requests (Too + Adjective & Would Like)',
    concept: 'Using "too + adjective" to explain defects and "I would like to + verb" to request service.',
    patterns: [
      {
        title: 'Too + Adjective (Excess or Problem)',
        structure: 'Subject + is / are + too + adjective',
        rule: 'Use "too" before an adjective to indicate that something is more than desirable or unsuitable.',
        examples: [
          { en: 'This jacket is too small for me.', hi: 'यह जैकेट मेरे लिए बहुत छोटी है।', es: 'Esta chaqueta es demasiado pequeña para mí.' },
          { en: 'These shoes are too tight.', hi: 'ये जूते बहुत तंग हैं।', es: 'Estos zapatos están demasiado apretados.' }
        ]
      },
      {
        title: 'I would like + Noun / to Verb (Polite Request)',
        structure: 'I would like + a refund / to exchange this item',
        rule: 'Use "I would like" as the polite standard when speaking with store staff.',
        examples: [
          { en: 'I would like a full refund, please.', hi: 'मुझे पूरा रिफंड चाहिए, कृपया।', es: 'Me gustaría un reembolso completo, por favor.' },
          { en: 'I would like to speak with the manager.', hi: 'मैं प्रबंधक से बात करना चाहता हूँ।', es: 'Me gustaría hablar con el gerente.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'I want that you give me refund.', cor: 'I would like a refund, please.', exp: 'Use "I would like a refund" for polite customer requests.', hi: 'विनम्र अनुरोध के लिए "I would like a refund" कहें।', es: 'Usa "I would like a refund" para peticiones amables.' },
    { inc: 'This shirt is very small for me, I cannot wear.', cor: 'This shirt is too small for me to wear.', exp: 'Use "too" to indicate an excess that prevents an action.', hi: 'अनुपयुक्त आकार बताने के लिए "too small" का उपयोग करें।', es: 'Usa "too small" para indicar que algo es excesivamente pequeño.' },
    { inc: 'I have the recipe from the shop.', cor: 'I have the receipt from the shop.', exp: '"Recipe" is for cooking; "receipt" is proof of payment.', hi: 'खरीदारी के बिल के लिए "receipt" शब्द का प्रयोग करें।', es: '"Receipt" es el comprobante de pago; "recipe" es para cocinar.' },
    { inc: 'The shoes is damaged.', cor: 'The shoes are damaged.', exp: '"Shoes" is plural, so use the plural verb "are".', hi: '"Shoes" बहुवचन है, इसलिए "are" का उपयोग करें।', es: '"Shoes" es plural, por lo que usa "are".' },
    { inc: 'Can I return this within of 30 days?', cor: 'Can I return this within 30 days?', exp: 'Do not use "of" after the preposition "within".', hi: '"Within" के बाद "of" न लगाएं।', es: 'No uses "of" después de "within".' }
  ],
  dialogues: [
    {
      title: 'Returning a Defective Item',
      context: 'Carlos brings a broken blender back to the department store.',
      charA: { name: 'Carlos', av: '👨‍💼', role: 'Customer' },
      charB: { name: 'Clerk', av: '👩‍💼', role: 'Customer Service Clerk' },
      turns: [
        { spk: 'Carlos', text: 'Hello, I bought this blender yesterday, but it doesn\'t work.', hi: 'नमस्ते, मैंने यह ब्लेंडर कल खरीदा था, लेकिन यह काम नहीं कर रहा है।', es: 'Hola, compré esta licuadora ayer, pero no funciona.' },
        { spk: 'Clerk', text: 'I am sorry to hear that. Do you have your receipt with you?', hi: 'यह सुनकर दुःख हुआ। क्या आपके पास आपकी रसीद है?', es: 'Lamento escuchar eso. ¿Tiene su recibo con usted?' },
        { spk: 'Carlos', text: 'Yes, here is the original receipt and the box.', hi: 'हाँ, यह मूल रसीद और बॉक्स है।', es: 'Sí, aquí está el recibo original y la caja.' },
        { spk: 'Clerk', text: 'Thank you. Would you like a replacement or a full refund?', hi: 'धन्यवाद। क्या आप दूसरा पीस लेना चाहेंगे या पूरा रिफंड?', es: 'Gracias. ¿Le gustaría un reemplazo o un reembolso completo?' }
      ]
    },
    {
      title: 'Exchanging Clothing for a Different Size',
      context: 'Maya wants to exchange a sweater that is too small.',
      charA: { name: 'Maya', av: '👩‍🎨', role: 'Shopper' },
      charB: { name: 'Sales Associate', av: '👨‍💼', role: 'Store Associate' },
      turns: [
        { spk: 'Maya', text: 'Excuse me, I bought this blue sweater, but it is too tight.', hi: 'माफ़ कीजिए, मैंने यह नीला स्वेटर खरीदा था, लेकिन यह बहुत टाइट है।', es: 'Disculpe, compré este suéter azul, pero me queda muy ajustado.' },
        { spk: 'Sales Associate', text: 'Are the price tags still attached to the item?', hi: 'क्या मूल्य टैग अभी भी आइटम से जुड़ा हुआ है?', es: '¿Las etiquetas de precio todavía están en la prenda?' },
        { spk: 'Maya', text: 'Yes, it is unworn with all tags attached.', hi: 'हाँ, यह सभी टैग लगे हुए बिना पहना हुआ है।', es: 'Sí, está sin usar con todas las etiquetas.' },
        { spk: 'Sales Associate', text: 'Great! Let me check if we have a medium in stock for you.', hi: 'बहुत बढ़िया! मैं देखता हूँ कि हमारे पास आपके लिए मीडियम साइज है या नहीं।', es: '¡Genial! Déjame revisar si tenemos una talla mediana disponible.' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u04_l48_p1', lessonId: 'lesson_a1_4_48', stage: 8, type: 'multiple_choice', prompt: 'Choose the correct document needed to get a refund at a store:', options: [{ id: 'o1', text: 'receipt', isCorrect: true }, { id: 'o2', text: 'menu', isCorrect: false }, { id: 'o3', text: 'ticket', isCorrect: false }] },
    { id: 'ex_u04_l48_p2', lessonId: 'lesson_a1_4_48', stage: 8, type: 'fill_blank', prompt: 'Complete the sentence with the correct intensifier:', sentenceTemplate: 'This jacket is ___ small for me to zip up.', sourceSentence: 'This jacket is ___ small for me to zip up.', options: [{ id: 'o1', text: 'too', isCorrect: true }, { id: 'o2', text: 'to', isCorrect: false }, { id: 'o3', text: 'two', isCorrect: false }] },
    { id: 'ex_u04_l48_p3', lessonId: 'lesson_a1_4_48', stage: 8, type: 'word_ordering', prompt: 'Order the words to request a refund politely:', wordBank: ['I', 'would', 'like', 'a', 'full', 'refund,', 'please.'], targetSentence: 'I would like a full refund, please.' },
    { id: 'ex_u04_l48_p4', lessonId: 'lesson_a1_4_48', stage: 8, type: 'match_pairs', prompt: 'Match customer service terms with their meanings:', pairs: [{ left: 'receipt', right: 'proof of purchase' }, { left: 'refund', right: 'money back' }, { left: 'exchange', right: 'swap for another size' }, { left: 'damaged', right: 'broken or faulty' }] },
    { id: 'ex_u04_l48_p5', lessonId: 'lesson_a1_4_48', stage: 8, type: 'error_correction', prompt: 'Identify the corrected sentence:', sentenceTemplate: 'These headphones is defective and no work.', options: [{ id: 'o1', text: 'These headphones are defective and do not work.', isCorrect: true }, { id: 'o2', text: 'These headphones is defective and don\'t work.', isCorrect: false }, { id: 'o3', text: 'These headphones are defect and not working.', isCorrect: false }] },
    { id: 'ex_u04_l48_p6', lessonId: 'lesson_a1_4_48', stage: 9, type: 'listening', prompt: 'Listen and select what the customer says:', audioText: 'I would like to exchange this blue sweater for a larger size.', options: [{ id: 'o1', text: 'I would like to exchange this blue sweater for a larger size.', isCorrect: true }, { id: 'o2', text: 'I would like to return this blue sweater for a smaller price.', isCorrect: false }] },
    { id: 'ex_u04_l48_p7', lessonId: 'lesson_a1_4_48', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'Here is my original receipt.', targetSentence: 'Here is my original receipt.' },
    { id: 'ex_u04_l48_p8', lessonId: 'lesson_a1_4_48', stage: 10, type: 'multiple_choice', prompt: 'Choose the correct question to ask about returning an item:', options: [{ id: 'o1', text: 'Can I return this item within thirty days?', isCorrect: true }, { id: 'o2', text: 'Do I returning this item within thirty days?', isCorrect: false }, { id: 'o3', text: 'Am I return this item within thirty days?', isCorrect: false }] },
    { id: 'ex_u04_l48_p9', lessonId: 'lesson_a1_4_48', stage: 11, type: 'dialogue_completion', prompt: 'Complete the clerk\'s response: "Would you like a replacement or a refund?"', options: [{ id: 'o1', text: 'I would prefer a replacement, please.', isCorrect: true }, { id: 'o2', text: 'The sky is blue today.', isCorrect: false }, { id: 'o3', text: 'My friend lives in Madrid.', isCorrect: false }] },
    { id: 'ex_u04_l48_p10', lessonId: 'lesson_a1_4_48', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'Can I exchange this shirt for a medium size?', audioText: 'Can I exchange this shirt for a medium size?' },
    { id: 'ex_u04_l48_p11', lessonId: 'lesson_a1_4_48', stage: 13, type: 'translation', prompt: 'Translate: "यह उत्पाद वारंटी के तहत है।" / "Este producto está bajo garantía."', targetSentence: 'This product is under warranty.' },
    { id: 'ex_u04_l48_p12', lessonId: 'lesson_a1_4_48', stage: 14, type: 'multiple_choice', prompt: 'What word describes clothing that has never been worn by anyone?', options: [{ id: 'o1', text: 'unworn', isCorrect: true }, { id: 'o2', text: 'broken', isCorrect: false }, { id: 'o3', text: 'receipt', isCorrect: false }] },
    { id: 'ex_u04_l48_p13', lessonId: 'lesson_a1_4_48', stage: 14, type: 'fill_blank', prompt: 'Complete with the correct adjective: "The box arrived ___ during transit."', sentenceTemplate: 'The box arrived ___ during transit.', sourceSentence: 'The box arrived ___ during transit.', options: [{ id: 'o1', text: 'damaged', isCorrect: true }, { id: 'o2', text: 'receipt', isCorrect: false }, { id: 'o3', text: 'policy', isCorrect: false }] },
    { id: 'ex_u04_l48_p14', lessonId: 'lesson_a1_4_48', stage: 14, type: 'word_ordering', prompt: 'Order the words to ask about a store policy:', wordBank: ['What', 'is', 'your', 'return', 'policy', 'for', 'electronics?'], targetSentence: 'What is your return policy for electronics?' },
    { id: 'ex_u04_l48_p15', lessonId: 'lesson_a1_4_48', stage: 14, type: 'speaking', prompt: 'Speak this complete sentence clearly into your microphone:', targetSentence: 'The store offers a full refund within thirty days.', audioText: 'The store offers a full refund within thirty days.' }
  ],
  review: [
    { id: 'ex_u04_l48_r1', lessonId: 'lesson_a1_4_48', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Choose the correct polite request modal:', options: [{ id: 'o1', text: 'Could you please check this receipt for me?', isCorrect: true }, { id: 'o2', text: 'Do you checking this receipt for me?', isCorrect: false }, { id: 'o3', text: 'Are you check this receipt for me?', isCorrect: false }] },
    { id: 'ex_u04_l48_r2', lessonId: 'lesson_a1_4_48', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete: "What does this symbol ___?"', sentenceTemplate: 'What does this symbol ___?', sourceSentence: 'What does this symbol ___?', options: [{ id: 'o1', text: 'mean', isCorrect: true }, { id: 'o2', text: 'means', isCorrect: false }, { id: 'o3', text: 'meaning', isCorrect: false }] },
    { id: 'ex_u04_l48_r3', lessonId: 'lesson_a1_4_48', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['She', 'always', 'keeps', 'her', 'shopping', 'receipts.'], targetSentence: 'She always keeps her shopping receipts.' },
    { id: 'ex_u04_l48_r4', lessonId: 'lesson_a1_4_48', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match questions and answers:', pairs: [{ left: 'May I help you?', right: 'Yes, I would like to return this.' }, { left: 'Do you have the receipt?', right: 'Yes, here it is.' }, { left: 'What is wrong with it?', right: 'It is too small.' }, { left: 'Is it unworn?', right: 'Yes, with tags attached.' }] },
    { id: 'ex_u04_l48_r5', lessonId: 'lesson_a1_4_48', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "क्या मैं इसे बदल सकता हूँ?"', targetSentence: 'Can I exchange this?' }
  ],
  assessment: [
    { id: 'ex_u04_l48_a1', lessonId: 'lesson_a1_4_48', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the grammatically correct customer request:', options: [{ id: 'o1', text: 'I would like to exchange this damaged item, please.', isCorrect: true }, { id: 'o2', text: 'I like exchange this item please.', isCorrect: false }, { id: 'o3', text: 'I am wanting return item.', isCorrect: false }] },
    { id: 'ex_u04_l48_a2', lessonId: 'lesson_a1_4_48', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete the sentence: "This laptop has a two-year ___ from the manufacturer."', sentenceTemplate: 'This laptop has a two-year ___ from the manufacturer.', sourceSentence: 'This laptop has a two-year ___ from the manufacturer.', options: [{ id: 'o1', text: 'warranty', isCorrect: true }, { id: 'o2', text: 'keyboard', isCorrect: false }, { id: 'o3', text: 'tag', isCorrect: false }] },
    { id: 'ex_u04_l48_a3', lessonId: 'lesson_a1_4_48', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words correctly:', wordBank: ['These', 'shoes', 'are', 'too', 'tight', 'for', 'me.'], targetSentence: 'These shoes are too tight for me.' },
    { id: 'ex_u04_l48_a4', lessonId: 'lesson_a1_4_48', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Select the appropriate clerk response: "Can I get a cash refund without a receipt?"', options: [{ id: 'o1', text: 'Without a receipt, we can only offer store credit.', isCorrect: true }, { id: 'o2', text: 'I am eating lunch at noon.', isCorrect: false }, { id: 'o3', text: 'The bus arrives at four.', isCorrect: false }] },
    { id: 'ex_u04_l48_a5', lessonId: 'lesson_a1_4_48', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this complete sentence clearly:', targetSentence: 'I would like to return this defective product with my receipt.', audioText: 'I would like to return this defective product with my receipt.' }
  ]
};

console.log('Configs for 46, 47, 48 ready.');
