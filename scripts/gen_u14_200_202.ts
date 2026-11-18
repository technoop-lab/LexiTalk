import { buildDetailedLessonA2_Unit14, LessonConfigA2 } from './unit14_builder_helper';
import { saveUnit14Lesson } from './enrich_unit14_helper';

// =========================================================================
// LESSON 200: Study Habits, Exams, Grades & Learning Goals
// =========================================================================
export const LESSON_200: LessonConfigA2 = {
  num: 200,
  title: 'Study Habits, Exams, Grades & Learning Goals',
  icon: '📊',
  estMin: 25,
  objTitle: 'Managing Study Habits, Exam Preparation, Grades & Setting Goals',
  objDesc: 'Develop expressions for revision techniques, exam strategies, understanding grading systems, and setting achievable academic goals.',
  objHi: 'अध्ययन की आदतों, परीक्षा की तैयारी की तकनीकों, ग्रेडिंग प्रणालियों को समझने और प्राप्त करने योग्य शैक्षणिक लक्ष्य निर्धारित करने का अभ्यास करें।',
  objEs: 'Desarrollar hábitos de estudio, preparación para exámenes, comprensión de calificaciones y establecimiento de metas de aprendizaje.',
  canDo: [
    'I can describe my study routines, revision schedules, and time management strategies.',
    'I can talk about exams, grades (percentages, GPA, letter grades), and academic results.',
    'I can express short-term and long-term learning goals using future intent phrases.',
    'I can give helpful study advice to peers who feel stressed about tests.'
  ],
  canDoHi: [
    'मैं अपनी पढ़ाई की दिनचर्या, दोहराने के शेड्यूल और समय प्रबंधन रणनीतियों का वर्णन कर सकता हूँ।',
    'मैं परीक्षाओं, अंकों/ग्रेडों (प्रतिशत, GPA, लेटर ग्रेड) और परीक्षा परिणामों पर बात कर सकता हूँ।',
    'मैं भविष्य के इरादे वाले वाक्यांशों का उपयोग करके अल्पकालिक और दीर्घकालिक सीखने के लक्ष्य व्यक्त कर सकता हूँ।',
    'मैं परीक्षा के तनाव से जूझ रहे साथियों को अध्ययन संबंधी उपयोगी सलाह दे सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir mis rutinas de estudio, horarios de repaso y gestión del tiempo.',
    'Puedo hablar sobre exámenes, calificaciones (porcentajes, letras) y resultados académicos.',
    'Puedo expresar objetivos de aprendizaje a corto y largo plazo.',
    'Puedo dar consejos útiles de estudio a compañeros que se sienten estresados.'
  ],
  vocab: [
    { w: 'revision', p: '/rɪˈvɪʒn/', m: 'the process of rereading and practicing subject material before a test', hi: 'पुनरावृत्ति / दोहराव', es: 'repaso / revisión', fr: 'révision', de: 'Wiederholung / Prüfungsvorbereitung', pt: 'revisão', zh: '复习', ar: 'مراجعة الدروس', ja: '復習 / 見直し', ru: 'повторение пройденного', ex: 'I created a detailed revision timetable for the upcoming exams.', exHi: 'मैंने आगामी परीक्षाओं के लिए एक विस्तृत पुनरावृत्ति समय सारिणी बनाई।', exEs: 'Creé un cronograma detallado de repaso para los próximos exámenes.', ic: '📖' },
    { w: 'grade', p: '/ɡreɪd/', m: 'a mark indicating a student\'s level of achievement in a test or course', hi: 'अंक / श्रेणी / ग्रेड', es: 'calificación / nota', fr: 'note / mention', de: 'Note / Zensur', pt: 'nota / conceito', zh: '成绩 / 等级', ar: 'درجة / علامة', ja: '成績 / 評価', ru: 'оценка / балл', ex: 'She was delighted to receive an A grade in mathematics.', exHi: 'वह गणित में ए ग्रेड प्राप्त करके बहुत खुश थी।', exEs: 'Estaba encantada de recibir una calificación de A en matemáticas.', ic: '🅰️' },
    { w: 'pass mark', p: '/ˈpɑːs mɑːk/', m: 'the minimum score required to pass an examination', hi: 'उत्तीर्ण अंक / पासिंग मार्क्स', es: 'nota de corte / aprobado', fr: 'moyenne / seuil de réussite', de: 'Bestehensgrenze', pt: 'nota mínima para aprovação', zh: '及格分数线', ar: 'درجة النجاح', ja: '合格点', ru: 'проходной балл', ex: 'The pass mark for this English proficiency test is sixty percent.', exHi: 'इस अंग्रेजी प्रवीणता परीक्षा के लिए उत्तीर्ण अंक साठ प्रतिशत है।', exEs: 'La nota de aprobación para esta prueba de inglés es del sesenta por ciento.', ic: '🎯' },
    { w: 'fail', p: '/feɪl/', m: 'to not succeed in passing an exam or test', hi: 'अनुत्तीर्ण होना / फेल होना', es: 'reprobar / suspender', fr: 'échouer / rater', de: 'durchfallen', pt: 'reprovar / não passar', zh: '不及格 / 挂科', ar: 'يرسب / يفشل', ja: '不合格になる / 落ちる', ru: 'провалить / не сдать', ex: 'If you do not attend lectures, you might fail the course.', exHi: 'यदि आप व्याख्यानों में भाग नहीं लेते हैं, तो आप पाठ्यक्रम में अनुत्तीर्ण हो सकते हैं।', exEs: 'Si no asiste a las clases, podría suspender el curso.', ic: '❌' },
    { w: 'cram', p: '/kræm/', m: 'to study intensively in a short time right before an exam', hi: 'परीक्षा से ठीक पहले रटना', es: 'estudiar a última hora / empollar', fr: 'bâcler ses révisions / bachoter', de: 'auf den letzten Drücker büffeln', pt: 'estudar de última hora / decorar', zh: '临阵磨枪 / 突击死记硬背', ar: 'الحشو / الدراسة المكثفة في اللحظات الأخيرة', ja: '一夜漬けで詰め込む', ru: 'зубрить перед экзаменом', ex: 'Do not cram the night before; review your notes steadily.', exHi: 'परीक्षा की पिछली रात को न रटें; अपने नोट्स को नियमित रूप से दोहराएं।', exEs: 'No estudies a última hora la noche anterior; repasa tus apuntes con calma.', ic: '🧠' },
    { w: 'concentrate', p: '/ˈkɒnsntreɪt/', m: 'to focus all one\'s attention or mental effort', hi: 'ध्यान केंद्रित करना / एकाग्र होना', es: 'concentrarse', fr: 'se concentrer', de: 'sich konzentrieren', pt: 'concentrar-se', zh: '集中注意力 / 专心', ar: 'يركّز', ja: '集中する', ru: 'сосредоточиться / концентрироваться', ex: 'It is much easier to concentrate in a silent library room.', exHi: 'शांत पुस्तकालय कक्ष में ध्यान केंद्रित करना बहुत आसान होता है।', exEs: 'Es mucho más fácil concentrarse en una sala de biblioteca silenciosa.', ic: '🧘' },
    { w: 'distraction', p: '/dɪˈstrækʃn/', m: 'a thing that prevents someone from concentrating', hi: 'ध्यान भटकाने वाली चीज़', es: 'distracción', fr: 'distraction', de: 'Ablenkung', pt: 'distração', zh: '分心事物 / 干扰', ar: 'تشتيت الانتباه / إلهاء', ja: '気の散るもの / 邪魔', ru: 'отвлекающий фактор', ex: 'Put your phone away to eliminate distractions during study hours.', exHi: 'अध्ययन के समय ध्यान भटकने से बचने के लिए अपने फोन को दूर रखें।', exEs: 'Guarda tu teléfono para eliminar distracciones durante las horas de estudio.', ic: '📵' },
    { w: 'flashcard', p: '/ˈflæʃkɑːd/', m: 'a card with information used as a study aid for memorization', hi: 'फ़्लैशकार्ड / अध्ययन पत्रक', es: 'tarjeta de memoria / ficha de estudio', fr: 'carte mémoire / flashcard', de: 'Lernkarte / Karteikarte', pt: 'cartão de memorização / flashcard', zh: '记忆卡片 / 抽认卡', ar: 'بطاقة تعليمية / فلاش كارد', ja: '単語カード / 暗記カード', ru: 'карточка для запоминания', ex: 'I use digital flashcards to memorize medical terminology.', exHi: 'मैं चिकित्सा शब्दावली याद रखने के लिए डिजिटल फ्लैशकार्ड का उपयोग करता हूँ।', exEs: 'Uso tarjetas de memoria digitales para memorizar terminología médica.', ic: '📇' },
    { w: 'mock exam', p: '/mɒk ɪɡˈzæm/', m: 'a practice exam taken in conditions similar to the real one', hi: 'अभ्यास परीक्षा / मॉक टेस्ट', es: 'examen de prueba / simulacro', fr: 'examen blanc', de: 'Probeprüfung / Probeklausur', pt: 'simulado', zh: '模拟考试', ar: 'امتحان تجريبي', ja: '模擬試験 / 模試', ru: 'пробный экзамен', ex: 'Taking a mock exam helps you understand the timing constraints.', exHi: 'मॉक टेस्ट देने से आपको समय की सीमाओं को समझने में मदद मिलती है।', exEs: 'Hacer un simulacro de examen te ayuda a entender los límites de tiempo.', ic: '📝' },
    { w: 'goal', p: '/ɡəʊl/', m: 'the object of a person\'s ambition or effort', hi: 'लक्ष्य / उद्देश्य', es: 'meta / objetivo', fr: 'objectif / but', de: 'Ziel', pt: 'meta / objetivo', zh: '目标', ar: 'هدف', ja: '目標', ru: 'цель', ex: 'My academic goal is to reach B1 level in English by December.', exHi: 'मेरा शैक्षणिक लक्ष्य दिसंबर तक अंग्रेजी में B1 स्तर तक पहुंचना है।', exEs: 'Mi objetivo académico es alcanzar el nivel B1 en inglés para diciembre.', ic: '🎯' },
    { w: 'achieve', p: '/əˈtʃiːv/', m: 'to successfully reach a desired objective through effort', hi: 'हासिल करना / प्राप्त करना', es: 'alcanzar / lograr', fr: 'atteindre / accomplir', de: 'erreichen / erzielen', pt: 'conquistar / alcançar', zh: '实现 / 达到', ar: 'يحقق / ينجز', ja: '達成する / 成し遂げる', ru: 'достигать / добиваться', ex: 'With consistent daily practice, you will achieve your target score.', exHi: 'लगातार दैनिक अभ्यास से आप अपना लक्षित स्कोर हासिल कर लेंगे।', exEs: 'Con práctica diaria constante, lograrás tu puntuación objetivo.', ic: '🏆' },
    { w: 'procrastinate', p: '/prəˈkræstɪneɪt/', m: 'to delay or postpone doing something that must be done', hi: 'टालमटोल करना / काम टालना', es: 'postergar / procrastinar', fr: 'procrastiner / remettre à plus tard', de: 'aufschieben / prokrastinieren', pt: 'procrastinar / adiar', zh: '拖延', ar: 'يماطل / يسوّف', ja: '先延ばしにする', ru: 'откладывать на потом / прокрастинировать', ex: 'Try not to procrastinate on your essay until the last weekend.', exHi: 'अपने निबंध को अंतिम सप्ताहांत तक टालने की कोशिश न करें।', exEs: 'Intenta no postergar tu ensayo hasta el último fin de semana.', ic: '⏳' },
    { w: 'feedback', p: '/ˈfiːdbæk/', m: 'helpful information or criticism given about someone\'s performance', hi: 'प्रतिक्रिया / सुझाव (फीडबैक)', es: 'retroalimentación / comentarios', fr: 'retour d\'information / feedback', de: 'Rückmeldung / Feedback', pt: 'feedback / retorno', zh: '反馈意见', ar: 'ملاحظات تقييمية / تغذية راجعة', ja: 'フィードバック / 指導講評', ru: 'обратная связь / отзыв', ex: 'The tutor gave detailed feedback on my grammar and structure.', exHi: 'शिक्षक ने मेरे व्याकरण और संरचना पर विस्तृत प्रतिक्रिया दी।', exEs: 'El tutor dio comentarios detallados sobre mi gramática y estructura.', ic: '💬' },
    { w: 'resit', p: '/ˌriːˈsɪt/', m: 'to take an examination again after failing it', hi: 'पुनः परीक्षा देना', es: 'recuperar / volver a examinarse', fr: 'repasser un examen / rattrapage', de: 'Nachprüfung machen / wiederholen', pt: 'fazer recuperação / refazer exame', zh: '补考 / 重考', ar: 'إعادة الامتحان', ja: '再試験を受ける', ru: 'пересдавать экзамен', ex: 'Students who score below fifty percent can resit the exam in August.', exHi: 'पचास प्रतिशत से कम अंक प्राप्त करने वाले छात्र अगस्त में पुनः परीक्षा दे सकते हैं।', exEs: 'Los estudiantes con menos del cincuenta por ciento pueden volver a examinarse en agosto.', ic: '🔄' },
    { w: 'memorize', p: '/ˈmeməraɪz/', m: 'to learn something so that you can remember it perfectly', hi: 'कंठस्थ करना / याद करना', es: 'memorizar / aprenderse de memoria', fr: 'mémoriser / apprendre par cœur', de: 'auswendig lernen', pt: 'memorizar / decorar', zh: '熟记 / 背诵', ar: 'يحفظ عن ظهر قلب', ja: '暗記する', ru: 'запоминать / учить наизусть', ex: 'Instead of memorizing sentences, understand the underlying grammar rules.', exHi: 'वाक्यों को रटने के बजाय, अंतर्निहित व्याकरण के नियमों को समझें।', exEs: 'En lugar de memorizar frases, comprende las reglas gramaticales básicas.', ic: '💡' }
  ],
  chunks: [
    { phrase: 'set learning goals', meaning: 'establish specific milestones for personal study progress', hi: 'सीखने के लक्ष्य निर्धारित करना', es: 'fijar metas de aprendizaje', fr: 'se fixer des objectifs d\'apprentissage', de: 'Lernziele festlegen', pt: 'definir metas de estudo', zh: '设定学习目标', ar: 'تحديد أهداف التعلم', ja: '学習目標を設定する', ru: 'ставить цели обучения', note: 'Action: "It helps to set realistic learning goals each week."', ic: '🎯' },
    { phrase: 'study schedule', meaning: 'a planned timetable allocating time for various subjects', hi: 'अध्ययन समय सारिणी', es: 'horario / plan de estudio', fr: 'planning de révisions', de: 'Lernplan', pt: 'cronograma de estudos', zh: '复习作息时间表', ar: 'جدول الدراسة والمذاكرة', ja: '勉強スケジュール', ru: 'график учебы', note: 'Organization: "Stick to your study schedule to avoid stress."', ic: '🗓️' },
    { phrase: 'take notes', meaning: 'write down key points during a lecture or while reading', hi: 'नोट्स बनाना / लिखना', es: 'tomar apuntes / notas', fr: 'prendre des notes', de: 'sich Notizen machen', pt: 'fazer anotações / tomar notas', zh: '做笔记', ar: 'تدوين الملاحظات', ja: 'ノートを取る / メモする', ru: 'делать конспекты / вести записи', note: 'Habit: "I always take notes during online lectures."', ic: '✍️' },
    { phrase: 'pass with flying colours', meaning: 'pass an examination with outstanding high marks', hi: 'शानदार अंकों से उत्तीर्ण होना', es: 'aprobar con honores / sobresaliente', fr: 'réussir haut la main', de: 'mit Bravour bestehen', pt: 'passar com louvor / tirar nota máxima', zh: '以优异成绩通过', ar: 'النجاح بتفوق باهر', ja: '優秀な成績で合格する', ru: 'сдать с блеском / на отлично', note: 'Idiom: "She studied every day and passed with flying colours."', ic: '🌟' },
    { phrase: 'beat procrastination', meaning: 'overcome the habit of delaying important tasks', hi: 'टालमटोल की आदत पर काबू पाना', es: 'vencer la procrastinación', fr: 'vaincre la procrastination', de: 'die Aufschieberitis überwinden', pt: 'superar a procrastinação', zh: '战胜拖延症', ar: 'التغلب على المماطلة والتسويف', ja: '先延ばし癖を克服する', ru: 'победить прокрастинацию', note: 'Self-discipline: "Breaking work into 25-minute blocks helps beat procrastination."', ic: '⏱️' },
    { phrase: 'study group', meaning: 'a group of students who meet to learn and discuss coursework together', hi: 'अध्ययन समूह / स्टडी ग्रुप', es: 'grupo de estudio', fr: 'groupe de travail', de: 'Lerngruppe', pt: 'grupo de estudos', zh: '学习小组', ar: 'مجموعة دراسية', ja: '勉強会グループ', ru: 'учебная группа', note: 'Collaboration: "We formed a weekly study group for chemistry."', ic: '👥' }
  ],
  grammar: {
    title: 'Future Intentions (going to / plan to / hope to) & Modals for Study Advice (should / ought to)',
    concept: 'Expressing academic plans with intentional verbs and giving advice with should/ought to/had better.',
    patterns: [
      {
        title: 'Expressing Academic Intentions & Goals',
        structure: 'Subject + be going to / plan to / hope to + Base Verb',
        rule: 'Used to outline specific milestones and target scores.',
        examples: [
          { en: 'I am going to review two chapters every evening.', hi: 'मैं हर शाम दो अध्यायों की पुनरावृत्ति करने जा रहा हूँ।', es: 'Voy a repasar dos capítulos cada noche.' },
          { en: 'We hope to achieve an overall grade of eighty percent.', hi: 'हम अस्सी प्रतिशत का समग्र ग्रेड हासिल करने की उम्मीद करते हैं।', es: 'Esperamos lograr una calificación general del ochenta por ciento.' }
        ]
      },
      {
        title: 'Giving Study Advice',
        structure: 'You should / ought to / had better + Base Verb',
        rule: 'Used to suggest effective study techniques.',
        examples: [
          { en: 'You should take regular five-minute breaks while studying.', hi: 'पढ़ाई करते समय आपको नियमित रूप से पाँच मिनट का ब्रेक लेना चाहिए।', es: 'Deberías tomar descansos regulares de cinco minutos mientras estudias.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'I am planning study five hours tonight.',
      cor: 'I am planning to study five hours tonight.',
      exp: '"Plan" is followed by the infinitive with "to": "plan to study".',
      hi: '"Plan" के बाद "to" का प्रयोग करें: "plan to study".',
      es: '"Plan" va seguido de infinitivo con "to": "plan to study".'
    },
    {
      inc: 'She passed the exam with flying colors yesterday and she will be happy.',
      cor: 'She passed the exam with flying colours yesterday, so she was thrilled.',
      exp: 'Maintain tense consistency when describing completed exam accomplishments.',
      hi: 'अतीत की परीक्षा की सफलता का वर्णन करते समय भूतकाल का उपयोग करें।',
      es: 'Mantenga la coherencia en tiempo pasado al describir logros de exámenes pasados.'
    }
  ],
  dialogues: [
    {
      title: 'Preparing for Final Exams in the Library',
      context: 'Maya and Kevin are discussing their study strategies before the final economics exam.',
      charA: { name: 'Maya', av: '👩', role: 'Student' },
      charB: { name: 'Kevin', av: '👨', role: 'Classmate' },
      turns: [
        { spk: 'Maya', text: 'Hi Kevin! Have you started your revision for the economics exam next Monday?', hi: 'नमस्ते केविन! क्या आपने अगले सोमवार को होने वाली अर्थशास्त्र परीक्षा के लिए दोहराव शुरू कर दिया है?', es: '¡Hola Kevin! ¿Has comenzado tu repaso para el examen de economía del próximo lunes?' },
        { spk: 'Kevin', text: 'I tried, but I find it hard to concentrate with my phone notifications buzzing constantly.', hi: 'मैंने कोशिश की, लेकिन फोन के लगातार बजने से ध्यान केंद्रित करना मुश्किल हो रहा है।', es: 'Lo intenté, pero me resulta difícil concentrarme con las notificaciones del móvil sonando todo el tiempo.' },
        { spk: 'Maya', text: 'You should turn on "Do Not Disturb" mode and study in 25-minute Pomodoro sessions.', hi: 'आपको "डू नॉट डिस्टर्ब" मोड चालू करना चाहिए और 25 मिनट के पोमोडोरो सत्रों में अध्ययन करना चाहिए।', es: 'Deberías activar el modo "No molestar" y estudiar en bloques de 25 minutos.' },
        { spk: 'Kevin', text: 'That\'s a smart idea. What is your goal score for this course?', hi: 'यह एक अच्छा विचार है। इस कोर्स के लिए आपका लक्ष्य स्कोर क्या है?', es: 'Es una gran idea. ¿Cuál es tu objetivo de nota para este curso?' },
        { spk: 'Maya', text: 'I hope to achieve at least an A-minus so I can keep my academic scholarship.', hi: 'मैं कम से कम ए-माइनस हासिल करने की उम्मीद करती हूँ ताकि अपनी शैक्षणिक छात्रवृत्ति बनाए रख सकूँ।', es: 'Espero obtener al menos un A- para conservar mi beca académica.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_200_p1',
      type: 'multiple_choice',
      prompt: 'What does "to cram before an exam" mean?',
      options: [
        { id: '1', text: 'To study a large amount of material in a rush right before a test', isCorrect: true },
        { id: '2', text: 'To sleep for twelve hours without waking up', isCorrect: false },
        { id: '3', text: 'To buy new pens for your friends', isCorrect: false },
        { id: '4', text: 'To teach a lesson to the professor', isCorrect: false }
      ]
    },
    {
      id: 'ex_200_p2',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct verb form for intention:',
      sourceSentence: 'I am planning ____ review all my flashcards before bedtime.',
      targetSentence: 'I am planning to review all my flashcards before bedtime.',
      blankIndex: 3,
      options: [
        { id: '1', text: 'to', isCorrect: true },
        { id: '2', text: 'for', isCorrect: false },
        { id: '3', text: 'at', isCorrect: false },
        { id: '4', text: 'with', isCorrect: false }
      ]
    },
    {
      id: 'ex_200_p3',
      type: 'translate_tiles',
      prompt: 'Translate to English: उसने शानदार अंकों के साथ परीक्षा उत्तीर्ण की।',
      sourceSentence: 'Ella aprobó el examen con excelentes calificaciones.',
      targetSentence: 'She passed the exam with flying colours',
      wordBank: ['She', 'passed', 'the', 'exam', 'with', 'flying', 'colours', 'fail']
    },
    {
      id: 'ex_200_p4',
      type: 'word_order',
      prompt: 'Arrange into an advice sentence:',
      targetSentence: 'You should take regular breaks while studying',
      wordBank: ['You', 'should', 'take', 'regular', 'breaks', 'while', 'studying']
    },
    {
      id: 'ex_200_p5',
      type: 'error_correction',
      prompt: 'Fix the error in the study advice:',
      sentence: 'You ought study in a quiet library.',
      correctSentence: 'You ought to study in a quiet library.',
      errorSentence: 'You ought study in a quiet library.',
      explanation: '"Ought" must be followed by "to": "ought to study".'
    },
    {
      id: 'ex_200_p6',
      type: 'match_pairs',
      prompt: 'Match study terms with their explanations:',
      options: [
        { id: 'm1', text: 'Pass mark → Minimum score required' },
        { id: 'm2', text: 'Mock exam → Practice test under real conditions' },
        { id: 'm3', text: 'Procrastinate → Delay tasks until later' },
        { id: 'm4', text: 'Flashcard → Study card used for memory drills' }
      ]
    },
    {
      id: 'ex_200_p7',
      type: 'listening',
      prompt: 'Listen to the student tutor giving study advice:',
      audioText: 'Testing yourself with practice questions is three times more effective than just rereading your notes.',
      options: [
        { id: '1', text: 'Practice questions are more effective than rereading notes', isCorrect: true },
        { id: '2', text: 'Rereading notes is the only way to study', isCorrect: false },
        { id: '3', text: 'Never test yourself before an exam', isCorrect: false },
        { id: '4', text: 'Exams are not important at all', isCorrect: false }
      ]
    },
    {
      id: 'ex_200_p8',
      type: 'speak_sentence',
      prompt: 'Speak this learning goal clearly:',
      targetSentence: 'My goal is to achieve an A grade in biology this semester.',
      audioText: 'My goal is to achieve an A grade in biology this semester.'
    },
    {
      id: 'ex_200_p9',
      type: 'dialogue_completion',
      prompt: 'Choose the most natural advice for a stressed classmate:',
      context: 'Friend: "I feel overwhelmed by how much chemistry material I need to review!"',
      options: [
        { id: '1', text: 'Don\'t worry, let\'s break the chapters into smaller daily study sessions together.', isCorrect: true },
        { id: '2', text: 'You should buy three pizzas right now.', isCorrect: false },
        { id: '3', text: 'I like playing video games all night.', isCorrect: false },
        { id: '4', text: 'Where is the train station?', isCorrect: false }
      ]
    },
    {
      id: 'ex_200_p10',
      type: 'reading_comprehension',
      prompt: 'Exam Regulation: "Students who achieve 70% or higher receive a First Class Honours grade. Those who score between 40% and 49% receive a Pass. A score below 40% is a Fail, requiring a resit in September." What happens if a student scores 35%?',
      options: [
        { id: '1', text: 'They fail and must resit the exam in September', isCorrect: true },
        { id: '2', text: 'They receive First Class Honours', isCorrect: false },
        { id: '3', text: 'They graduate automatically', isCorrect: false },
        { id: '4', text: 'They get a free scholarship', isCorrect: false }
      ]
    },
    {
      id: 'ex_200_p11',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct noun:',
      sourceSentence: 'Turn off social media to eliminate any ____ while you study.',
      targetSentence: 'Turn off social media to eliminate any distraction while you study.',
      blankIndex: 7,
      options: [
        { id: '1', text: 'distraction', isCorrect: true },
        { id: '2', text: 'scholarship', isCorrect: false },
        { id: '3', text: 'certificate', isCorrect: false },
        { id: '4', text: 'postage', isCorrect: false }
      ]
    },
    {
      id: 'ex_200_p12',
      type: 'translate_tiles',
      prompt: 'Translate to English: मैंने आज दोपहर एक मॉक टेस्ट पूरा किया।',
      sourceSentence: 'Completé un simulacro de examen esta tarde.',
      targetSentence: 'I completed a mock exam this afternoon',
      wordBank: ['I', 'completed', 'a', 'mock', 'exam', 'this', 'afternoon', 'fail']
    },
    {
      id: 'ex_200_p13',
      type: 'multiple_choice',
      prompt: 'What is the purpose of forming a "study group"?',
      options: [
        { id: '1', text: 'To review concepts, quiz each other, and discuss coursework together', isCorrect: true },
        { id: '2', text: 'To avoid doing any academic homework', isCorrect: false },
        { id: '3', text: 'To paint the classroom walls', isCorrect: false },
        { id: '4', text: 'To cancel the semester schedule', isCorrect: false }
      ]
    },
    {
      id: 'ex_200_p14',
      type: 'dictation',
      prompt: 'Listen and write down the academic goal statement:',
      audioText: 'I hope to improve my academic writing skills this term.',
      targetSentence: 'I hope to improve my academic writing skills this term.'
    },
    {
      id: 'ex_200_p15',
      type: 'speaking',
      prompt: 'Explain your personal study schedule for this week:',
      targetSentence: 'I plan to study for two hours every evening and review my notes on Sunday.'
    },
    {
      id: 'ex_200_p16',
      type: 'word_order',
      prompt: 'Arrange into an intention sentence:',
      targetSentence: 'We are going to set clear learning goals',
      wordBank: ['We', 'are', 'going', 'to', 'set', 'clear', 'learning', 'goals']
    },
    {
      id: 'ex_200_p17',
      type: 'fill_blank',
      prompt: 'Select the missing verb:',
      sourceSentence: 'The teacher gave helpful ____ on our presentations.',
      targetSentence: 'The teacher gave helpful feedback on our presentations.',
      blankIndex: 4,
      options: [
        { id: '1', text: 'feedback', isCorrect: true },
        { id: '2', text: 'customs', isCorrect: false },
        { id: '3', text: 'queue', isCorrect: false },
        { id: '4', text: 'enquiry', isCorrect: false }
      ]
    },
    {
      id: 'ex_200_p18',
      type: 'error_correction',
      prompt: 'Fix the error in the future plan:',
      sentence: 'I will going to take the mock test on Saturday.',
      correctSentence: 'I am going to take the mock test on Saturday.',
      errorSentence: 'I will going to take the mock test on Saturday.',
      explanation: 'Use "be going to": "I am going to take", not "I will going to".'
    },
    {
      id: 'ex_200_p19',
      type: 'multiple_choice',
      prompt: 'If you score 95% on a difficult exam, you can say:',
      options: [
        { id: '1', text: 'I passed with flying colours!', isCorrect: true },
        { id: '2', text: 'I failed completely.', isCorrect: false },
        { id: '3', text: 'I need to resit the exam.', isCorrect: false },
        { id: '4', text: 'I lost my parcel.', isCorrect: false }
      ]
    },
    {
      id: 'ex_200_p20',
      type: 'translate_tiles',
      prompt: 'Translate to English: आपको परीक्षा से पहले पर्याप्त नींद लेनी चाहिए।',
      sourceSentence: 'Deberías dormir lo suficiente antes del examen.',
      targetSentence: 'You should get enough sleep before the exam',
      wordBank: ['You', 'should', 'get', 'enough', 'sleep', 'before', 'the', 'exam', 'cram']
    }
  ],
  review: [
    {
      id: 'ex_200_r1',
      type: 'multiple_choice',
      prompt: 'Spaced Retrieval: Which relative pronoun connects a place in a defining relative clause?',
      options: [
        { id: '1', text: 'where', isCorrect: true },
        { id: '2', text: 'who', isCorrect: false },
        { id: '3', text: 'which to', isCorrect: false },
        { id: '4', text: 'whom', isCorrect: false }
      ]
    },
    {
      id: 'ex_200_r2',
      type: 'fill_blank',
      prompt: 'Spaced Retrieval: Complete the higher education collocation:',
      sourceSentence: 'She decided to ____ in mechanical engineering at university.',
      targetSentence: 'She decided to major in mechanical engineering at university.',
      blankIndex: 3,
      options: [
        { id: '1', text: 'major', isCorrect: true },
        { id: '2', text: 'resit', isCorrect: false },
        { id: '3', text: 'customs', isCorrect: false },
        { id: '4', text: 'weigh', isCorrect: false }
      ]
    },
    {
      id: 'ex_200_r3',
      type: 'translate_tiles',
      prompt: 'Translate to English: मैं व्याख्यान के दौरान महत्वपूर्ण नोट्स लेता हूँ।',
      sourceSentence: 'Tomo notas importantes durante la clase magistral.',
      targetSentence: 'I take important notes during the lecture',
      wordBank: ['I', 'take', 'important', 'notes', 'during', 'the', 'lecture', 'fail']
    },
    {
      id: 'ex_200_r4',
      type: 'word_order',
      prompt: 'Arrange into an advice sentence with had better:',
      targetSentence: 'You had better review your vocabulary notes tonight',
      wordBank: ['You', 'had', 'better', 'review', 'your', 'vocabulary', 'notes', 'tonight']
    },
    {
      id: 'ex_200_r5',
      type: 'listening',
      prompt: 'Listen to the professor\'s advice on exam preparation:',
      audioText: 'Consistency is the secret to high grades. Thirty minutes every day beats five hours of frantic cramming.',
      options: [
        { id: '1', text: '30 minutes daily is better than 5 hours of cramming', isCorrect: true },
        { id: '2', text: 'Students should only study once a month', isCorrect: false },
        { id: '3', text: 'Cramming is the most effective method', isCorrect: false },
        { id: '4', text: 'You do not need to review notes', isCorrect: false }
      ]
    },
    {
      id: 'ex_200_r6',
      type: 'speak_sentence',
      prompt: 'Speak this advice clearly:',
      targetSentence: 'You ought to create a revision timetable before final exams.',
      audioText: 'You ought to create a revision timetable before final exams.'
    },
    {
      id: 'ex_200_r7',
      type: 'error_correction',
      prompt: 'Fix the error in the sentence:',
      sentence: 'I will to study for my test tomorrow.',
      correctSentence: 'I will study for my test tomorrow.',
      errorSentence: 'I will to study for my test tomorrow.',
      explanation: 'Modal verb "will" is followed directly by the base verb ("will study"), without "to".'
    },
    {
      id: 'ex_200_r8',
      type: 'match_pairs',
      prompt: 'Match academic phrases with opposites:',
      options: [
        { id: 'm1', text: 'Pass an exam ↔ Fail an exam' },
        { id: 'm2', text: 'Concentrate ↔ Get distracted' },
        { id: 'm3', text: 'Steady daily revision ↔ Last-minute cramming' },
        { id: 'm4', text: 'First-time pass ↔ Exam resit' }
      ]
    },
    {
      id: 'ex_200_r9',
      type: 'fill_blank',
      prompt: 'Select the correct preposition:',
      sourceSentence: 'I received feedback ____ my chemistry research paper.',
      targetSentence: 'I received feedback on my chemistry research paper.',
      blankIndex: 3,
      options: [
        { id: '1', text: 'on', isCorrect: true },
        { id: '2', text: 'at', isCorrect: false },
        { id: '3', text: 'into', isCorrect: false },
        { id: '4', text: 'under', isCorrect: false }
      ]
    },
    {
      id: 'ex_200_r10',
      type: 'translate_tiles',
      prompt: 'Translate to English: वह अगले महीने अंग्रेजी परीक्षा दोबारा देने जा रही है।',
      sourceSentence: 'Ella va a repetir el examen de inglés el próximo mes.',
      targetSentence: 'She is going to resit the English exam next month',
      wordBank: ['She', 'is', 'going', 'to', 'resit', 'the', 'English', 'exam', 'next', 'month']
    }
  ],
  assessment: [
    {
      id: 'ex_200_a1',
      type: 'reading_comprehension',
      prompt: 'Academic Feedback Report: "Candidate demonstrates strong conceptual understanding in Section A (Multiple Choice: 90%). However, Section B (Essay: 55%) lacked clear paragraph structuring and references. Recommendation: Practice timed essay writing and review cohesive linking words." Where does the candidate need the most improvement?',
      options: [
        { id: '1', text: 'In essay writing structure and linking words (Section B)', isCorrect: true },
        { id: '2', text: 'In multiple choice questions (Section A)', isCorrect: false },
        { id: '3', text: 'In paying university tuition fees', isCorrect: false },
        { id: '4', text: 'In buying flashcards', isCorrect: false }
      ]
    },
    {
      id: 'ex_200_a2',
      type: 'mediation',
      prompt: 'A younger classmate is panicking before their first big university exam because they have ten chapters left to study. Explain a calm, realistic 3-step action plan to help them.',
      options: [
        { id: '1', text: 'First, don\'t panic. Second, prioritize the top 3 high-weight topics using a summary sheet. Third, do practice questions instead of reading all ten chapters word-for-word.', isCorrect: true },
        { id: '2', text: 'Stay awake for 48 hours without eating or drinking water.', isCorrect: false },
        { id: '3', text: 'Drop out of university immediately.', isCorrect: false },
        { id: '4', text: 'Hide your textbook under your pillow and sleep.', isCorrect: false }
      ],
      explanation: 'True mediation provides practical, reassuring, and structured guidance.'
    },
    {
      id: 'ex_200_a3',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct verb:',
      sourceSentence: 'If you want to beat procrastination, you should ____ large tasks into smaller steps.',
      targetSentence: 'If you want to beat procrastination, you should break large tasks into smaller steps.',
      blankIndex: 8,
      options: [
        { id: '1', text: 'break', isCorrect: true },
        { id: '2', text: 'fail', isCorrect: false },
        { id: '3', text: 'cram', isCorrect: false },
        { id: '4', text: 'weigh', isCorrect: false }
      ]
    },
    {
      id: 'ex_200_a4',
      type: 'writing_prompt',
      prompt: 'Write your personal study plan and learning goals for the next month in 3-4 connected sentences.',
      targetSentence: 'My main academic goal is to reach B1 level in English. I am going to study for thirty minutes every morning using digital flashcards and grammar exercises. I also plan to join a weekly English conversation club at the student union to practice speaking.'
    },
    {
      id: 'ex_200_a5',
      type: 'speaking',
      prompt: 'Give study advice to a peer: recommend using flashcards, regular breaks, and doing mock exams.',
      targetSentence: 'You should create flashcards for new vocabulary, take short breaks every twenty-five minutes, and try a mock exam before test day.'
    },
    {
      id: 'ex_200_a6',
      type: 'dictation',
      prompt: 'Listen and transcribe the exam rule:',
      audioText: 'Students must achieve at least fifty percent to meet the pass mark.',
      targetSentence: 'Students must achieve at least fifty percent to meet the pass mark.'
    },
    {
      id: 'ex_200_a7',
      type: 'multiple_choice',
      prompt: 'Which modal phrase expresses strong study advice?',
      options: [
        { id: '1', text: 'You had better review your notes before the test.', isCorrect: true },
        { id: '2', text: 'You might to go to sleep.', isCorrect: false },
        { id: '3', text: 'You would like forgetting words.', isCorrect: false },
        { id: '4', text: 'You can nothing.', isCorrect: false }
      ]
    },
    {
      id: 'ex_200_a8',
      type: 'translate_tiles',
      prompt: 'Translate to English: लक्ष्य निर्धारित करने से छात्रों को केंद्रित रहने में मदद मिलती है।',
      sourceSentence: 'Fijar metas ayuda a los estudiantes a mantenerse enfocados.',
      targetSentence: 'Setting goals helps students stay focused',
      wordBank: ['Setting', 'goals', 'helps', 'students', 'stay', 'focused', 'procrastinate', 'fail']
    },
    {
      id: 'ex_200_a9',
      type: 'error_correction',
      prompt: 'Correct the error in this advice sentence:',
      sentence: 'You should to take notes during the lecture.',
      correctSentence: 'You should take notes during the lecture.',
      errorSentence: 'You should to take notes during the lecture.',
      explanation: 'Modal verb "should" takes the bare infinitive without "to": "should take notes".'
    },
    {
      id: 'ex_200_a10',
      type: 'dialogue_completion',
      prompt: 'Choose the best completion for the study session:',
      context: 'Maya: "We finished reviewing chapter four! Should we do ten practice questions now?"',
      options: [
        { id: '1', text: 'Yes, testing ourselves now will help lock the concepts in our memory.', isCorrect: true },
        { id: '2', text: 'No, I don\'t know where London is.', isCorrect: false },
        { id: '3', text: 'The bus leaves in three seconds.', isCorrect: false },
        { id: '4', text: 'I forgot how to speak.', isCorrect: false }
      ]
    }
  ]
};

// =========================================================================
// LESSON 201: Question Tags in Natural Conversation
// =========================================================================
export const LESSON_201: LessonConfigA2 = {
  num: 201,
  title: 'Question Tags in Natural Conversation',
  icon: '❓',
  estMin: 25,
  objTitle: 'Using Question Tags for Confirmation, Politeness & Social Flow',
  objDesc: 'Master question tags across present, past, and modal auxiliary verbs with falling and rising intonation.',
  objHi: 'पुष्टि करने, विनम्रता और बातचीत के स्वाभाविक प्रवाह के लिए विभिन्न कालों (वर्तमान, भूतकाल, मोडल) में Question Tags का उपयोग करना सीखें।',
  objEs: 'Dominar las coletillas interrogativas (question tags) en presente, pasado y modales con entonación natural.',
  canDo: [
    'I can form question tags with positive and negative statements.',
    'I can use question tags with "be", "do/does", "did", "have", "can", and "will".',
    'I can use falling intonation to check agreement and rising intonation to ask genuine questions.',
    'I can keep conversations engaging and collaborative using question tags.'
  ],
  canDoHi: [
    'मैं सकारात्मक और नकारात्मक कथनों के साथ Question Tags बना सकता हूँ।',
    'मैं "be", "do/does", "did", "have", "can" और "will" के साथ question tags का उपयोग कर सकता हूँ।',
    'मैं सहमति जांचने (गिरती आवाज़) और वास्तविक प्रश्न पूछने (उठती आवाज़) के लिए स्वर-शैली का उपयोग कर सकता हूँ।',
    'मैं बातचीत को रोचक और सहभागी बनाए रखने के लिए question tags का उपयोग कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo formar question tags con oraciones afirmativas y negativas.',
    'Puedo usar question tags con verbos auxiliares en presente, pasado y modales.',
    'Puedo usar la entonación adecuada para verificar acuerdo o hacer preguntas reales.',
    'Puedo mantener conversaciones fluidas usando coletillas interrogativas.'
  ],
  vocab: [
    { w: 'tag', p: '/tæɡ/', m: 'a mini-question added to the end of a statement', hi: 'टैग (वाक्य के अंत में जुड़ा छोटा प्रश्न)', es: 'coletilla interrogativa / tag', fr: 'étiquette / proposition incise', de: 'Frageanhängsel / Tag', pt: 'pergunta confirmatória / tag', zh: '反意疑问附加语', ar: 'السؤال المذيل', ja: '付加疑問 / タグ', ru: 'разделительный вопрос', ex: 'A question tag turns a statement into a check for confirmation.', exHi: 'क्वेश्चन टैग एक कथन को पुष्टि के प्रश्न में बदल देता है।', exEs: 'Una question tag convierte una afirmación en una confirmación.', ic: '🏷️' },
    { w: 'intonation', p: '/ˌɪntəˈneɪʃn/', m: 'the rise and fall of the voice when speaking', hi: 'स्वर-शैली / आवाज़ का उतार-चढ़ाव (इंटोनेशन)', es: 'entonación', fr: 'intonation', de: 'Intonation / Tonfall', pt: 'entonação', zh: '语调 / 声调', ar: 'نبرة الصوت / التنغيم', ja: '抑揚 / イントネーション', ru: 'интонация', ex: 'Your intonation shows whether you are truly asking or just checking.', exHi: 'आपकी स्वर-शैली दर्शाती है कि आप वास्तव में पूछ रहे हैं या केवल पुष्टि कर रहे हैं।', exEs: 'Tu entonación muestra si estás preguntando de verdad o solo confirmando.', ic: '🎶' },
    { w: 'confirmation', p: '/ˌkɒnfəˈmeɪʃn/', m: 'the action of confirming something is true or agreed', hi: 'पुष्टि / सत्यापन', es: 'confirmación', fr: 'confirmation', de: 'Bestätigung', pt: 'confirmação', zh: '确认 / 证实', ar: 'تأكيد / إثبات', ja: '確認', ru: 'подтверждение', ex: 'He looked at me expecting confirmation, saying: "It\'s cold, isn\'t it?"', exHi: 'उसने पुष्टि की उम्मीद में मेरी ओर देखा और कहा: "ठंड है, है न?"', exEs: 'Me miró esperando confirmación, diciendo: "Hace frío, ¿verdad?"', ic: '✅' },
    { w: 'auxiliary', p: '/ɔːɡˈzɪliəri/', m: 'a helping verb such as do, be, have, can, or will', hi: 'सहायक क्रिया (Auxiliary Verb)', es: 'verbo auxiliar', fr: 'verbe auxiliaire', de: 'Hilfsverb', pt: 'verbo auxiliar', zh: '助动词', ar: 'فعل مساعد', ja: '助動詞', ru: 'вспомогательный глагол', ex: 'Question tags always match the auxiliary verb of the main clause.', exHi: 'क्वेश्चन टैग हमेशा मुख्य उपवाक्य की सहायक क्रिया से मेल खाते हैं।', exEs: 'Las question tags siempre coinciden con el verbo auxiliar de la cláusula principal.', ic: '⚙️' },
    { w: 'agreement', p: '/əˈɡriːmənt/', m: 'harmony or state of having the same opinion', hi: 'सहमति / एकमत', es: 'acuerdo / coincidencia', fr: 'accord', de: 'Zustimmung / Einigkeit', pt: 'concordância / acordo', zh: '赞同 / 一致', ar: 'موافقة / اتفاق', ja: '同意 / 一致', ru: 'согласие', ex: 'We reached an agreement after a friendly discussion.', exHi: 'मित्रतापूर्ण चर्चा के बाद हम एक सहमति पर पहुंचे।', exEs: 'Llegamos a un acuerdo tras una charla amigable.', ic: '🤝' },
    { w: 'statement', p: '/ˈsteɪtmənt/', m: 'a definite or clear expression of something in speech or writing', hi: 'कथन / वक्तव्य', es: 'afirmación / enunciado', fr: 'affirmation / déclaration', de: 'Aussage / Feststellung', pt: 'afirmação / declaração', zh: '陈述句 / 声明', ar: 'تصريح / جملة خبرية', ja: '平叙文 / 声明', ru: 'утверждение / высказывание', ex: 'Turn this affirmative statement into a tag question.', exHi: 'इस सकारात्मक कथन को एक टैग प्रश्न में बदलें।', exEs: 'Convierte este enunciado afirmativo en una pregunta con coletilla.', ic: '💬' },
    { w: 'polite', p: '/pəˈlaɪt/', m: 'having good manners and respect for others', hi: 'विनम्र / शिष्ट', es: 'educado / cortés', fr: 'poli / courtois', de: 'höflich', pt: 'educado / cortês', zh: '礼貌的 / 客气的', ar: 'مهذب / مؤدب', ja: '丁寧な / 礼儀正しい', ru: 'вежливый', ex: 'Using tags makes English conversation sound warm and polite.', exHi: 'टैग का उपयोग करने से अंग्रेजी बातचीत मधुर और विनम्र लगती है।', exEs: 'El uso de coletillas hace que la conversación en inglés suene cálida y educada.', ic: '🌸' },
    { w: 'curious', p: '/ˈkjʊəriəs/', m: 'eager to know or learn something', hi: 'जिज्ञासु / उत्सुक', es: 'curioso', fr: 'curieux', de: 'neugierig', pt: 'curioso', zh: '好奇的', ar: 'فضولي', ja: '好奇心がある', ru: 'любопытный', ex: 'With rising tone, the tag shows you are genuinely curious.', exHi: 'उठती आवाज के साथ, टैग दर्शाता है कि आप वास्तव में उत्सुक हैं।', exEs: 'Con tono ascendente, la coletilla muestra que eres realmente curioso.', ic: '🧐' },
    { w: 'opposite', p: '/ˈɒpəzɪt/', m: 'completely different from something else (e.g. positive vs negative)', hi: 'विपरीत / उल्टा', es: 'opuesto / contrario', fr: 'opposé / contraire', de: 'gegenteilig / entgegengesetzt', pt: 'oposto / contrário', zh: '相反的', ar: 'معاكس / نقيض', ja: '反対の', ru: 'противоположный', ex: 'If the sentence is positive, the tag is negative (opposite polarity).', exHi: 'यदि वाक्य सकारात्मक है, तो टैग नकारात्मक होगा (विपरीत ध्रुवीयता)।', exEs: 'Si la frase es positiva, la coletilla es negativa (polaridad opuesta).', ic: '🔄' },
    { w: 'pronoun', p: '/ˈprəʊnaʊn/', m: 'a word that takes the place of a noun (he, she, it, they, you, we)', hi: 'सर्वनाम (Pronoun)', es: 'pronombre', fr: 'pronom', de: 'Pronomen / Fürwort', pt: 'pronome', zh: '代词', ar: 'ضمير', ja: '代名詞', ru: 'местоимение', ex: 'In a tag question, always end with a subject pronoun.', exHi: 'टैग प्रश्न में हमेशा एक कर्ता सर्वनाम पर समाप्त करें।', exEs: 'En una pregunta con coletilla, termina siempre con un pronombre sujeto.', ic: '🔤' },
    { w: 'tone', p: '/təʊn/', m: 'the quality or character of voice showing feeling', hi: 'स्वर / लहज़ा', es: 'tono de voz', fr: 'ton / tonalité', de: 'Tonfall / Ton', pt: 'tom de voz', zh: '语调 / 口气', ar: 'نبرة', ja: '口調 / トーン', ru: 'тон / интонационный оттенок', ex: 'A friendly tone makes social small talk effortless.', exHi: 'एक मित्रवत लहज़ा सामाजिक बातचीत को सहज बना देता है।', exEs: 'Un tono amigable hace que la charla informal sea fluida.', ic: '🗣️' },
    { w: 'certainty', p: '/ˈsɜːtnti/', m: 'the state of being completely sure about something', hi: 'निश्चितता', es: 'certeza / seguridad', fr: 'certitude', de: 'Gewissheit / Sicherheit', pt: 'certeza', zh: '确定性', ar: 'يقين / تأكد', ja: '確信 / 確実性', ru: 'уверенность', ex: 'Falling intonation signals high certainty.', exHi: 'गिरती स्वर-शैली उच्च निश्चितता का संकेत देती है।', exEs: 'La entonación descendente indica alta certeza.', ic: '🎯' },
    { w: 'doubt', p: '/daʊt/', m: 'a feeling of uncertainty or lack of conviction', hi: 'संदेह / शक', es: 'duda / incertidumbre', fr: 'doute', de: 'Zweifel', pt: 'dúvida', zh: '怀疑 / 疑问', ar: 'شك / ريبة', ja: '疑い / 疑問', ru: 'сомнение', ex: 'Rising intonation signals genuine doubt or inquiry.', exHi: 'उठती स्वर-शैली वास्तविक संदेह या पूछताछ का संकेत देती है।', exEs: 'La entonación ascendente indica duda o pregunta genuina.', ic: '❓' },
    { w: 'flow', p: '/fləʊ/', m: 'the steady, smooth continuous progression of speech', hi: 'प्रवाह / धाराप्रवाह गति', es: 'fluidez / flujo conversacional', fr: 'fluidité / écoulement', de: 'Sprechfluss / Redefluss', pt: 'fluidez / fluxo', zh: '流畅度', ar: 'سلاسة / تدفق الحديث', ja: '流れ / スムーズさ', ru: 'плавность / поток речи', ex: 'Question tags keep the conversational flow natural and engaging.', exHi: 'क्वेश्चन टैग बातचीत के प्रवाह को स्वाभाविक और आकर्षक बनाए रखते हैं।', exEs: 'Las coletillas mantienen el flujo de la conversación natural y dinámico.', ic: '🌊' },
    { w: 'turn-taking', p: '/ˈtɜːn teɪkɪŋ/', m: 'the manner in which orderly conversation is shared between speakers', hi: 'बारी-बारी से बोलना (टर्न-टेकिंग)', es: 'alternancia de turnos de habla', fr: 'prise de parole à tour de rôle', de: 'Sprecherwechsel', pt: 'troca de turnos na fala', zh: '话轮转换', ar: 'تبادل الأدوار في الحديث', ja: '発話の順番交代', ru: 'чередование реплик в диалоге', ex: 'Tags invite smooth turn-taking in English dialogues.', exHi: 'टैग अंग्रेजी संवादों में सुचारू रूप से अपनी बारी लेने के लिए आमंत्रित करते हैं।', exEs: 'Las coletillas facilitan la alternancia natural en los diálogos en inglés.', ic: '🔄' }
  ],
  chunks: [
    { phrase: 'isn\'t it', meaning: 'tag checking agreement for third-person singular (it/that/this)', hi: 'है न? (isn\'t it)', es: '¿verdad? / ¿no es así?', fr: 'n\'est-ce pas ?', de: 'nicht wahr? / oder?', pt: 'não é? / né?', zh: '不是吗？', ar: 'أليس كذلك؟', ja: 'ですよね？ / じゃない？', ru: 'не так ли? / правда?', note: 'Universal tag: "It\'s a lovely morning, isn\'t it?"', ic: '☀️' },
    { phrase: 'aren\'t you', meaning: 'tag confirming status or plans of the listener', hi: 'क्या आप नहीं हैं? / है न?', es: '¿no eres tú? / ¿no estás?', fr: 'n\'es-tu pas ?', de: 'bist du nicht?', pt: 'você não está? / né?', zh: '你不是吗？', ar: 'ألست كذلك؟', ja: 'そうですよね？', ru: 'не так ли?', note: 'Check: "You\'re coming to the study session, aren\'t you?"', ic: '👥' },
    { phrase: 'don\'t you', meaning: 'tag confirming present simple habits or opinions', hi: 'क्या आप नहीं करते? / है न?', es: '¿no es verdad? / ¿a que sí?', fr: 'n\'est-ce pas ?', de: 'oder? / nicht?', pt: 'não faz? / né?', zh: '难道你不是吗？', ar: 'ألا تفعل؟', ja: '〜ですよね？', ru: 'разве нет?', note: 'Opinion check: "You like Italian food, don\'t you?"', ic: '🍝' },
    { phrase: 'didn\'t we', meaning: 'tag confirming shared past experiences', hi: 'क्या हमने नहीं किया था?', es: '¿no lo hicimos? / ¿verdad?', fr: 'n\'est-ce pas ?', de: 'haben wir nicht?', pt: 'não fizemos? / né?', zh: '我们不是做过了吗？', ar: 'ألم نفعل ذلك؟', ja: '〜しましたよね？', ru: 'разве мы не...?', note: 'Past recall: "We submitted the assignment yesterday, didn\'t we?"', ic: '🗓️' },
    { phrase: 'can\'t you', meaning: 'tag confirming ability or checking possibility', hi: 'क्या आप नहीं कर सकते?', es: '¿no puedes?', fr: 'ne peux-tu pas ?', de: 'kannst du nicht?', pt: 'você não pode?', zh: '你难道不会吗？', ar: 'ألا تستطيع؟', ja: 'できますよね？', ru: 'разве ты не можешь?', note: 'Ability tag: "You can drive a manual car, can\'t you?"', ic: '🚗' },
    { phrase: 'will you', meaning: 'polite tag added to requests or invitations', hi: 'क्या आप करेंगे? (विनम्र टैग)', es: '¿lo harás? / ¿quieres?', fr: 'veux-tu ?', de: 'ja? / bitte?', pt: 'você faz isso? / por favor?', zh: '好吗？', ar: 'هلّا فعلت ذلك؟', ja: '〜してくれますか？', ru: 'хорошо? / ладно?', note: 'Polite invitation: "Close the window, will you?"', ic: '🪟' }
  ],
  grammar: {
    title: 'Opposite Polarity Question Tags & Intonation Mechanics',
    concept: 'Forming tags with auxiliary verbs (Positive statement + Negative tag / Negative statement + Positive tag) and intonation rules.',
    patterns: [
      {
        title: 'Positive Statement + Negative Tag',
        structure: 'Subject + Verb + [Rest], [Auxiliary + n\'t] + Subject Pronoun?',
        rule: 'Used when expecting agreement with a positive fact.',
        examples: [
          { en: 'You are an engineering student, aren\'t you?', hi: 'आप एक इंजीनियरिंग छात्र हैं, है न?', es: 'Eres estudiante de ingeniería, ¿verdad?' },
          { en: 'She passed the driving test, didn\'t she?', hi: 'उसने ड्राइविंग टेस्ट पास कर लिया, है न?', es: 'Aprobó el examen de conducir, ¿no?' }
        ]
      },
      {
        title: 'Negative Statement + Positive Tag',
        structure: 'Subject + Negative Auxiliary + Verb, [Auxiliary] + Subject Pronoun?',
        rule: 'Used when expecting agreement with a negative fact.',
        examples: [
          { en: 'We haven\'t met before, have we?', hi: 'हम पहले नहीं मिले हैं, है न?', es: 'No nos hemos conocido antes, ¿verdad?' },
          { en: 'You don\'t live on campus, do you?', hi: 'आप परिसर में नहीं रहते, है न?', es: 'No vives en el campus, ¿verdad?' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'You like coffee, isn\'t it?',
      cor: 'You like coffee, don\'t you?',
      exp: '"Isn\'t it" cannot be used for all verbs. "You like" (present simple) uses "don\'t you?".',
      hi: '"Isn\'t it" का प्रयोग हर जगह नहीं होता। "You like" के लिए "don\'t you?" का प्रयोग करें।',
      es: 'No use "isn\'t it" para todo. Con "You like" corresponde "don\'t you?".'
    },
    {
      inc: 'She is working today, is she?',
      cor: 'She is working today, isn\'t she?',
      exp: 'A positive statement ("She is") requires a negative tag ("isn\'t she?").',
      hi: 'सकारात्मक वाक्य के साथ नकारात्मक टैग ("isn\'t she?") होना चाहिए।',
      es: 'Una frase positiva requiere una coletilla negativa ("isn\'t she?").'
    }
  ],
  dialogues: [
    {
      title: 'Discussing the Upcoming University Project',
      context: 'Oscar and Lucas are chatting after their morning lecture.',
      charA: { name: 'Oscar', av: '👨', role: 'Student' },
      charB: { name: 'Lucas', av: '🧔', role: 'Classmate' },
      turns: [
        { spk: 'Oscar', text: 'That was a challenging lecture, wasn\'t it?', hi: 'वह एक चुनौतीपूर्ण व्याख्यान था, है न?', es: 'Fue una clase magistral difícil, ¿verdad?' },
        { spk: 'Lucas', text: 'It really was! Professor Davis covered a lot of formulas today, didn\'t he?', hi: 'वास्तव में! प्रोफेसर डेविस ने आज बहुत सारे फॉर्मूलों को कवर किया, है न?', es: '¡La verdad que sí! El profesor Davis explicó muchas fórmulas hoy, ¿no?' },
        { spk: 'Oscar', text: 'He did. You haven\'t finished the group presentation slides yet, have you?', hi: 'हाँ। आपने अभी तक समूह प्रस्तुति स्लाइड समाप्त नहीं की है, है न?', es: 'Así es. Aún no has terminado las diapositivas de la presentación grupal, ¿verdad?' },
        { spk: 'Lucas', text: 'No, but we can meet at the library this afternoon to complete them, can\'t we?', hi: 'नहीं, लेकिन हम उन्हें पूरा करने के लिए आज दोपहर पुस्तकालय में मिल सकते हैं, है न?', es: 'No, pero podemos encontrarnos en la biblioteca esta tarde para terminarlas, ¿no?' },
        { spk: 'Oscar', text: 'Perfect idea! See you at three o\'clock.', hi: 'बढ़िया विचार! दोपहर तीन बजे मिलते हैं।', es: '¡Excelente idea! Nos vemos a las tres.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_201_p1',
      type: 'multiple_choice',
      prompt: 'Select the correct tag for: "You live near the university, ____?"',
      options: [
        { id: '1', text: 'don\'t you', isCorrect: true },
        { id: '2', text: 'isn\'t it', isCorrect: false },
        { id: '3', text: 'aren\'t you', isCorrect: false },
        { id: '4', text: 'do you', isCorrect: false }
      ],
      explanation: 'Present simple "live" with subject "you" takes "don\'t you?".'
    },
    {
      id: 'ex_201_p2',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct question tag:',
      sourceSentence: 'The library is open on Sundays, ____ it?',
      targetSentence: 'The library is open on Sundays, isn\'t it?',
      blankIndex: 6,
      options: [
        { id: '1', text: 'isn\'t', isCorrect: true },
        { id: '2', text: 'is', isCorrect: false },
        { id: '3', text: 'doesn\'t', isCorrect: false },
        { id: '4', text: 'aren\'t', isCorrect: false }
      ]
    },
    {
      id: 'ex_201_p3',
      type: 'translate_tiles',
      prompt: 'Translate to English: आप कल कक्षा में थे, है न?',
      sourceSentence: 'Estuviste en clase ayer, ¿verdad?',
      targetSentence: 'You were in class yesterday weren\'t you',
      wordBank: ['You', 'were', 'in', 'class', 'yesterday', 'weren\'t', 'you', 'wasn\'t', 'are']
    },
    {
      id: 'ex_201_p4',
      type: 'word_order',
      prompt: 'Arrange into a negative statement with a positive tag:',
      targetSentence: 'She hasn\'t arrived yet has she',
      wordBank: ['She', 'hasn\'t', 'arrived', 'yet', 'has', 'she']
    },
    {
      id: 'ex_201_p5',
      type: 'error_correction',
      prompt: 'Fix the error in the question tag:',
      sentence: 'They went to Paris last summer, don\'t they?',
      correctSentence: 'They went to Paris last summer, didn\'t they?',
      errorSentence: 'They went to Paris last summer, don\'t they?',
      explanation: 'Past tense "went" requires the past auxiliary tag "didn\'t they?".'
    },
    {
      id: 'ex_201_p6',
      type: 'match_pairs',
      prompt: 'Match statements with their correct question tags:',
      options: [
        { id: 'm1', text: 'You can speak Spanish → can\'t you?' },
        { id: 'm2', text: 'They won\'t be late → will they?' },
        { id: 'm3', text: 'He likes tennis → doesn\'t he?' },
        { id: 'm4', text: 'We aren\'t late → are we?' }
      ]
    },
    {
      id: 'ex_201_p7',
      type: 'listening',
      prompt: 'Listen to the intonation and determine the speaker\'s attitude:',
      audioText: 'It\'s going to rain today, isn\'t it? (Falling tone)',
      options: [
        { id: '1', text: 'The speaker is confident and expects agreement', isCorrect: true },
        { id: '2', text: 'The speaker has no idea about the weather', isCorrect: false },
        { id: '3', text: 'The speaker is asking for a bus ticket', isCorrect: false },
        { id: '4', text: 'The speaker is angry', isCorrect: false }
      ]
    },
    {
      id: 'ex_201_p8',
      type: 'speak_sentence',
      prompt: 'Speak this question tag with natural falling tone for confirmation:',
      targetSentence: 'It is a beautiful afternoon, isn\'t it?',
      audioText: 'It is a beautiful afternoon, isn\'t it?'
    },
    {
      id: 'ex_201_p9',
      type: 'dialogue_completion',
      prompt: 'Choose the correct tag to complete the question:',
      context: 'Friend: "You haven\'t seen my student ID card anywhere, ____?"',
      options: [
        { id: '1', text: 'have you?', isCorrect: true },
        { id: '2', text: 'haven\'t you?', isCorrect: false },
        { id: '3', text: 'did you?', isCorrect: false },
        { id: '4', text: 'isn\'t it?', isCorrect: false }
      ]
    },
    {
      id: 'ex_201_p10',
      type: 'reading_comprehension',
      prompt: 'Read the conversation: "Sarah: We have a chemistry quiz tomorrow morning, don\'t we? Mark: Yes, at 9:00 AM in room 102." What was Sarah doing with her tag question?',
      options: [
        { id: '1', text: 'Checking and confirming the quiz schedule with Mark', isCorrect: true },
        { id: '2', text: 'Ordering Mark to take the test for her', isCorrect: false },
        { id: '3', text: 'Cancelling the quiz permanently', isCorrect: false },
        { id: '4', text: 'Complaining about chemistry food', isCorrect: false }
      ]
    },
    {
      id: 'ex_201_p11',
      type: 'fill_blank',
      prompt: 'Complete with the modal tag:',
      sourceSentence: 'You can come to our study group tomorrow, ____ you?',
      targetSentence: 'You can come to our study group tomorrow, can\'t you?',
      blankIndex: 7,
      options: [
        { id: '1', text: 'can\'t', isCorrect: true },
        { id: '2', text: 'don\'t', isCorrect: false },
        { id: '3', text: 'won\'t', isCorrect: false },
        { id: '4', text: 'aren\'t', isCorrect: false }
      ]
    },
    {
      id: 'ex_201_p12',
      type: 'translate_tiles',
      prompt: 'Translate to English: वह डॉक्टर नहीं है, है क्या?',
      sourceSentence: 'Él no es médico, ¿verdad?',
      targetSentence: 'He is not a doctor is he',
      wordBank: ['He', 'is', 'not', 'a', 'doctor', 'is', 'he', 'isn\'t', 'was']
    },
    {
      id: 'ex_201_p13',
      type: 'multiple_choice',
      prompt: 'Which tag correctly completes: "Let\'s have lunch at the student canteen, ____?"',
      options: [
        { id: '1', text: 'shall we?', isCorrect: true },
        { id: '2', text: 'don\'t we?', isCorrect: false },
        { id: '3', text: 'will we?', isCorrect: false },
        { id: '4', text: 'aren\'t we?', isCorrect: false }
      ],
      explanation: 'Suggestions with "Let\'s" take the special tag "shall we?".'
    },
    {
      id: 'ex_201_p14',
      type: 'dictation',
      prompt: 'Listen and transcribe the tag question:',
      audioText: 'You bought the new textbook yesterday, didn\'t you?',
      targetSentence: 'You bought the new textbook yesterday, didn\'t you?'
    },
    {
      id: 'ex_201_p15',
      type: 'speaking',
      prompt: 'Say this tag question to invite a friend to study together:',
      targetSentence: 'We should review our lecture notes together, shouldn\'t we?'
    },
    {
      id: 'ex_201_p16',
      type: 'word_order',
      prompt: 'Arrange into a tag question with will/won\'t:',
      targetSentence: 'You will help me with this assignment won\'t you',
      wordBank: ['You', 'will', 'help', 'me', 'with', 'this', 'assignment', 'won\'t', 'you']
    },
    {
      id: 'ex_201_p17',
      type: 'fill_blank',
      prompt: 'Select the missing tag pronoun:',
      sourceSentence: 'Nobody was in the lecture hall, were ____?',
      targetSentence: 'Nobody was in the lecture hall, were they?',
      blankIndex: 7,
      options: [
        { id: '1', text: 'they', isCorrect: true },
        { id: '2', text: 'he', isCorrect: false },
        { id: '3', text: 'it', isCorrect: false },
        { id: '4', text: 'we', isCorrect: false }
      ]
    },
    {
      id: 'ex_201_p18',
      type: 'error_correction',
      prompt: 'Fix the tag error:',
      sentence: 'I am right, amn\'t I?',
      correctSentence: 'I am right, aren\'t I?',
      errorSentence: 'I am right, amn\'t I?',
      explanation: 'The negative tag for "I am" is "aren\'t I?".'
    },
    {
      id: 'ex_201_p19',
      type: 'multiple_choice',
      prompt: 'What is the negative tag for "I am late"?',
      options: [
        { id: '1', text: 'aren\'t I?', isCorrect: true },
        { id: '2', text: 'am not I?', isCorrect: false },
        { id: '3', text: 'isn\'t I?', isCorrect: false },
        { id: '4', text: 'don\'t I?', isCorrect: false }
      ]
    },
    {
      id: 'ex_201_p20',
      type: 'translate_tiles',
      prompt: 'Translate to English: हम परीक्षा में देर से नहीं पहुंचेंगे, है न?',
      sourceSentence: 'No llegaremos tarde al examen, ¿verdad?',
      targetSentence: 'We won\'t be late for the exam will we',
      wordBank: ['We', 'won\'t', 'be', 'late', 'for', 'the', 'exam', 'will', 'we', 'are']
    }
  ],
  review: [
    {
      id: 'ex_201_r1',
      type: 'multiple_choice',
      prompt: 'Spaced Retrieval: What does it mean to "pass with flying colours"?',
      options: [
        { id: '1', text: 'To pass an exam with very high, outstanding marks', isCorrect: true },
        { id: '2', text: 'To draw colorful flags on your paper', isCorrect: false },
        { id: '3', text: 'To fail by one mark', isCorrect: false },
        { id: '4', text: 'To fly on an airplane to school', isCorrect: false }
      ]
    },
    {
      id: 'ex_201_r2',
      type: 'fill_blank',
      prompt: 'Spaced Retrieval: Complete the polite request:',
      sourceSentence: 'Could you please tell me where the lecture hall ____?',
      targetSentence: 'Could you please tell me where the lecture hall is?',
      blankIndex: 7,
      options: [
        { id: '1', text: 'is', isCorrect: true },
        { id: '2', text: 'is it', isCorrect: false },
        { id: '3', text: 'does be', isCorrect: false },
        { id: '4', text: 'be', isCorrect: false }
      ]
    },
    {
      id: 'ex_201_r3',
      type: 'translate_tiles',
      prompt: 'Translate to English: वह स्पेनिश बोलती है, है न?',
      sourceSentence: 'Ella habla español, ¿no?',
      targetSentence: 'She speaks Spanish doesn\'t she',
      wordBank: ['She', 'speaks', 'Spanish', 'doesn\'t', 'she', 'isn\'t', 'does', 'speak']
    },
    {
      id: 'ex_201_r4',
      type: 'word_order',
      prompt: 'Arrange into a tag question:',
      targetSentence: 'This bus goes to the university campus doesn\'t it',
      wordBank: ['This', 'bus', 'goes', 'to', 'the', 'university', 'campus', 'doesn\'t', 'it']
    },
    {
      id: 'ex_201_r5',
      type: 'listening',
      prompt: 'Listen to the tag question and identify the speaker\'s expectation:',
      audioText: 'You didn\'t forget to submit the homework, did you? (Rising tone)',
      options: [
        { id: '1', text: 'The speaker is genuinely asking and wants to make sure', isCorrect: true },
        { id: '2', text: 'The speaker already knows and does not care', isCorrect: false },
        { id: '3', text: 'The speaker is giving a lecture', isCorrect: false },
        { id: '4', text: 'The speaker is buying groceries', isCorrect: false }
      ]
    },
    {
      id: 'ex_201_r6',
      type: 'speak_sentence',
      prompt: 'Speak this natural conversational tag:',
      targetSentence: 'You enjoy studying in the morning, don\'t you?',
      audioText: 'You enjoy studying in the morning, don\'t you?'
    },
    {
      id: 'ex_201_r7',
      type: 'error_correction',
      prompt: 'Fix the error in the sentence:',
      sentence: 'He can play guitar, doesn\'t he?',
      correctSentence: 'He can play guitar, can\'t he?',
      errorSentence: 'He can play guitar, doesn\'t he?',
      explanation: 'Modal "can" in the statement must be matched by "can\'t" in the tag.'
    },
    {
      id: 'ex_201_r8',
      type: 'match_pairs',
      prompt: 'Match modal sentences with their tags:',
      options: [
        { id: 'm1', text: 'We should leave early → shouldn\'t we?' },
        { id: 'm2', text: 'They must submit today → mustn\'t they?' },
        { id: 'm3', text: 'You wouldn\'t lie → would you?' },
        { id: 'm4', text: 'She could help us → couldn\'t she?' }
      ]
    },
    {
      id: 'ex_201_r9',
      type: 'fill_blank',
      prompt: 'Select the missing tag verb:',
      sourceSentence: 'Your brother lives in London, ____ he?',
      targetSentence: 'Your brother lives in London, doesn\'t he?',
      blankIndex: 5,
      options: [
        { id: '1', text: 'doesn\'t', isCorrect: true },
        { id: '2', text: 'isn\'t', isCorrect: false },
        { id: '3', text: 'don\'t', isCorrect: false },
        { id: '4', text: 'hasn\'t', isCorrect: false }
      ]
    },
    {
      id: 'ex_201_r10',
      type: 'translate_tiles',
      prompt: 'Translate to English: चलो लाइब्रेरी चलते हैं, चलें?',
      sourceSentence: 'Vamos a la biblioteca, ¿te parece?',
      targetSentence: 'Let\'s go to the library shall we',
      wordBank: ['Let\'s', 'go', 'to', 'the', 'library', 'shall', 'we', 'will', 'are']
    }
  ],
  assessment: [
    {
      id: 'ex_201_a1',
      type: 'reading_comprehension',
      prompt: 'Dialogue: "Tom: You\'ve visited Edinburgh before, haven\'t you? Emma: Actually no, this is my first time in Scotland! Tom: Oh, you\'re going to love it." What does Emma\'s response show about Tom\'s assumption?',
      options: [
        { id: '1', text: 'Tom assumed Emma had visited before, but she corrected him that it is her first visit', isCorrect: true },
        { id: '2', text: 'Emma lives permanently in Edinburgh', isCorrect: false },
        { id: '3', text: 'Tom was asking for train tickets to London', isCorrect: false },
        { id: '4', text: 'Emma dislikes traveling to Scotland', isCorrect: false }
      ]
    },
    {
      id: 'ex_201_a2',
      type: 'mediation',
      prompt: 'A student friend from abroad asks you why native English speakers constantly say phrases like "isn\'t it?", "don\'t you?", or "aren\'t they?" at the end of sentences. Explain their purpose clearly in simple language.',
      options: [
        { id: '1', text: 'They are called question tags. Speakers use them to check if you agree, keep the conversation friendly, and invite you to reply without sounding demanding.', isCorrect: true },
        { id: '2', text: 'They are grammar mistakes made only by people who don\'t know English.', isCorrect: false },
        { id: '3', text: 'They mean the speaker does not remember what they just said.', isCorrect: false },
        { id: '4', text: 'They are secret code words used only at universities.', isCorrect: false }
      ],
      explanation: 'True mediation explains the pragmatic, social function of question tags in English conversation.'
    },
    {
      id: 'ex_201_a3',
      type: 'fill_blank',
      prompt: 'Complete the tag question accurately:',
      sourceSentence: 'You have studied English for three years, ____ you?',
      targetSentence: 'You have studied English for three years, haven\'t you?',
      blankIndex: 7,
      options: [
        { id: '1', text: 'haven\'t', isCorrect: true },
        { id: '2', text: 'didn\'t', isCorrect: false },
        { id: '3', text: 'don\'t', isCorrect: false },
        { id: '4', text: 'aren\'t', isCorrect: false }
      ]
    },
    {
      id: 'ex_201_a4',
      type: 'writing_prompt',
      prompt: 'Write a short 3-4 turn conversation between two students discussing their plans for the weekend, including at least two natural question tags.',
      targetSentence: 'Sarah: We have finished all our assignments for this week, haven\'t we? Leo: Yes, we finally submitted them this morning! Sarah: You are going to the campus music festival on Saturday, aren\'t you? Leo: Definitely, I bought my ticket yesterday!'
    },
    {
      id: 'ex_201_a5',
      type: 'speaking',
      prompt: 'Speak this sentence naturally to confirm plans with a friend: "You\'re coming to the study session at four, aren\'t you?"',
      targetSentence: 'You\'re coming to the study session at four, aren\'t you?'
    },
    {
      id: 'ex_201_a6',
      type: 'dictation',
      prompt: 'Listen and transcribe the tag question:',
      audioText: 'The train hasn\'t arrived yet, has it?',
      targetSentence: 'The train hasn\'t arrived yet, has it?'
    },
    {
      id: 'ex_201_a7',
      type: 'multiple_choice',
      prompt: 'Which sentence has a grammatically correct question tag?',
      options: [
        { id: '1', text: 'She didn\'t call you yesterday, did she?', isCorrect: true },
        { id: '2', text: 'She didn\'t call you yesterday, didn\'t she?', isCorrect: false },
        { id: '3', text: 'She didn\'t call you yesterday, isn\'t it?', isCorrect: false },
        { id: '4', text: 'She didn\'t call you yesterday, does she?', isCorrect: false }
      ]
    },
    {
      id: 'ex_201_a8',
      type: 'translate_tiles',
      prompt: 'Translate to English: वह बहुत तेजी से गाड़ी चलाता है, है न?',
      sourceSentence: 'Él conduce muy rápido, ¿no es así?',
      targetSentence: 'He drives very fast doesn\'t he',
      wordBank: ['He', 'drives', 'very', 'fast', 'doesn\'t', 'he', 'isn\'t', 'do']
    },
    {
      id: 'ex_201_a9',
      type: 'error_correction',
      prompt: 'Correct the error in this question tag:',
      sentence: 'You had a good holiday, haven\'t you?',
      correctSentence: 'You had a good holiday, didn\'t you?',
      errorSentence: 'You had a good holiday, haven\'t you?',
      explanation: 'In "You had a good holiday", "had" is the main past verb, so the tag requires "didn\'t you?".'
    },
    {
      id: 'ex_201_a10',
      type: 'dialogue_completion',
      prompt: 'Choose the best completion for the conversation:',
      context: 'Chloe: "That was the best presentation in the conference, wasn\'t it?"',
      options: [
        { id: '1', text: 'It really was! The speaker explained every point clearly.', isCorrect: true },
        { id: '2', text: 'No, I don\'t want an umbrella.', isCorrect: false },
        { id: '3', text: 'The bus station is closed on Sundays.', isCorrect: false },
        { id: '4', text: 'I am playing tennis next week.', isCorrect: false }
      ]
    }
  ]
};

// =========================================================================
// LESSON 202: So / Neither / Agreement & Response Patterns
// =========================================================================
export const LESSON_202: LessonConfigA2 = {
  num: 202,
  title: 'So / Neither / Agreement & Response Patterns',
  icon: '🤝',
  estMin: 25,
  objTitle: 'Expressing Agreement & Disagreement with So, Neither, Nor & Short Answers',
  objDesc: 'Learn how to express quick, natural agreement ("So do I", "Neither have I", "I do too") and polite disagreement in real conversations.',
  objHi: 'वास्तविक बातचीत में "So do I", "Neither have I", "I do too" और विनम्र असहमति के साथ त्वरित और स्वाभाविक सहमति व प्रतिक्रिया व्यक्त करना सीखें।',
  objEs: 'Expresar acuerdo y desacuerdo rápido y natural usando So, Neither, Nor y respuestas cortas.',
  canDo: [
    'I can agree with positive statements using "So + auxiliary + I" and "I + auxiliary + too".',
    'I can agree with negative statements using "Neither + auxiliary + I" and "Nor + auxiliary + I".',
    'I can express polite contrast and disagreement ("Actually, I don\'t", "I\'m afraid I disagree").',
    'I can engage in fast-paced conversational banter and consensus building.'
  ],
  canDoHi: [
    'मैं "So + auxiliary + I" और "I + auxiliary + too" का उपयोग करके सकारात्मक कथनों से सहमत हो सकता हूँ।',
    'मैं "Neither + auxiliary + I" और "Nor + auxiliary + I" का उपयोग करके नकारात्मक कथनों से सहमत हो सकता हूँ।',
    'मैं विनम्र असहमति व्यक्त कर सकता हूँ ("Actually, I don\'t", "I\'m afraid I disagree")।',
    'मैं तेज गति वाली बातचीत और सहमति निर्माण में भाग ले सकता हूँ।'
  ],
  canDoEs: [
    'Puedo coincidir con afirmaciones positivas usando "So do I" y "I do too".',
    'Puedo coincidir con oraciones negativas usando "Neither do I" y "Nor do I".',
    'Puedo expresar desacuerdo educado ("Actually, I don\'t").',
    'Puedo participar en intercambios conversacionales rápidos y fluidos.'
  ],
  vocab: [
    { w: 'neither', p: '/ˈnaɪðər/', m: 'used to show agreement with a negative statement (not one nor the other)', hi: 'न तो / मैं भी नहीं (नकारात्मक सहमति)', es: 'tampoco / ni el uno ni el otro', fr: 'ni / moi non plus', de: 'weder / auch nicht', pt: 'nem / também não', zh: '也不', ar: 'ولا حتى / لا هذا ولا ذاك', ja: '〜もまた〜ない', ru: 'также не / ни тот ни другой', ex: '"I haven\'t seen that movie." - "Neither have I."', exHi: '"मैंने वह फिल्म नहीं देखी है।" - "मैंने भी नहीं।"', exEs: '"No he visto esa película." - "Yo tampoco."', ic: '🚫' },
    { w: 'nor', p: '/nɔːr/', m: 'and not; used with neither or after a negative statement', hi: 'और न ही', es: 'ni / tampoco', fr: 'ni', de: 'noch / auch nicht', pt: 'nem', zh: '也不 / 亦不', ar: 'ولا', ja: '〜もまたない', ru: 'и не / также не', ex: '"I don\'t like spicy food." - "Nor do I."', exHi: '"मुझे तीखा खाना पसंद नहीं है।" - "और न ही मुझे।"', exEs: '"No me gusta la comida picante." - "A mí tampoco."', ic: '✖️' },
    { w: 'agreement', p: '/əˈɡriːmənt/', m: 'the state of sharing the same view, opinion, or sentiment', hi: 'सहमति', es: 'acuerdo / concordancia', fr: 'accord', de: 'Übereinstimmung', pt: 'concordância', zh: '一致 / 同意', ar: 'موافقة', ja: '合意 / 一致', ru: 'согласие', ex: 'Expressing quick agreement shows active listening.', exHi: 'त्वरित सहमति व्यक्त करना सक्रिय श्रवण दर्शाता है।', exEs: 'Expresar acuerdo rápido demuestra escucha activa.', ic: '🤝' },
    { w: 'disagreement', p: '/ˌdɪsəˈɡriːmənt/', m: 'a difference of opinion between people', hi: 'असहमति', es: 'desacuerdo / discrepancia', fr: 'désaccord', de: 'Meinungsverschiedenheit', pt: 'desacordo', zh: '分歧 / 异议', ar: 'خلاف / عدم موافقة', ja: '不同意 / 意見の相違', ru: 'разногласие', ex: 'Polite disagreement uses softening phrases like "Actually, I prefer...".', exHi: 'विनम्र असहमति "Actually, I prefer..." जैसे कोमल वाक्यांशों का उपयोग करती है।', exEs: 'El desacuerdo educado usa frases suaves como "Actually, I prefer...".', ic: '⚡' },
    { w: 'echo', p: '/ˈekəʊ/', m: 'a close parallel or repetition of an auxiliary verb in reply', hi: 'प्रतिध्वनि / प्रतिउत्तर (इको रिस्पॉन्स)', es: 'eco / respuesta refleja', fr: 'écho / reprise', de: 'Echo-Antwort', pt: 'resposta em eco', zh: '回响式回应', ar: 'استجابة صدى / تكرار', ja: 'オウム返しの返答', ru: 'эхо-ответ', ex: 'Use an auxiliary echo to show enthusiasm: "I love jazz!" - "I do too!"', exHi: 'उत्साह दिखाने के लिए सहायक क्रिया वाले प्रतिउत्तर का उपयोग करें: "मुझे जैज़ पसंद है!" - "मुझे भी!"', exEs: 'Usa una respuesta con auxiliar: "I love jazz!" - "I do too!"', ic: '📢' },
    { w: 'contrast', p: '/ˈkɒntrɑːst/', m: 'the state of being strikingly different from something else', hi: 'विपरीतता / अंतर', es: 'contraste / diferencia', fr: 'contraste', de: 'Gegensatz / Kontrast', pt: 'contraste', zh: '对比 / 反差', ar: 'تباين / تضاد', ja: '対照 / コントラスト', ru: 'противопоставление / контраст', ex: 'To express contrast: "I enjoy swimming, but my brother doesn\'t."', exHi: 'विपरीतता व्यक्त करने के लिए: "मुझे तैरना पसंद है, लेकिन मेरे भाई को नहीं।"', exEs: 'Para expresar contraste: "Me gusta nadar, pero a mi hermano no."', ic: '🌓' },
    { w: 'perspective', p: '/pəˈspektɪv/', m: 'a particular attitude toward or way of regarding something', hi: 'दृष्टिकोण / नज़रिया', es: 'perspectiva / punto de vista', fr: 'perspective / point de vue', de: 'Perspektive / Blickwinkel', pt: 'perspectiva / ponto de vista', zh: '视角 / 观点', ar: 'وجهة نظر', ja: '観点 / 視点', ru: 'точка зрения / ракурс', ex: 'From my perspective, that was a fair exam.', exHi: 'मेरे दृष्टिकोण से, वह एक निष्पक्ष परीक्षा थी।', exEs: 'Desde mi punto de vista, fue un examen justo.', ic: '👁️' },
    { w: 'partially', p: '/ˈpɑːʃəli/', m: 'only in part; to a limited extent', hi: 'आंशिक रूप से', es: 'parcialmente / en parte', fr: 'partiellement', de: 'teilweise', pt: 'parcialmente', zh: '部分地', ar: 'جزئياً', ja: '部分的に', ru: 'частично / отчасти', ex: 'I partially agree with that theory, but there are exceptions.', exHi: 'मैं उस सिद्धांत से आंशिक रूप से सहमत हूँ, लेकिन अपवाद भी हैं।', exEs: 'Estoy parcialmente de acuerdo con esa teoría, pero hay excepciones.', ic: '🌗' },
    { w: 'enthusiasm', p: '/ɪnˈθjuːziæzəm/', m: 'intense and eager enjoyment, interest, or approval', hi: 'उत्साह / उमंग', es: 'entusiasmo', fr: 'enthousiasme', de: 'Begeisterung / Enthusiasmus', pt: 'entusiasmo', zh: '热情 / 热忱', ar: 'حماس / شغف', ja: '熱意 / 熱中', ru: 'энтузиазм / воодушевление', ex: 'Saying "So am I!" with energy shows genuine enthusiasm.', exHi: 'ऊर्जा के साथ "So am I!" कहना वास्तविक उत्साह दिखाता है।', exEs: 'Decir "So am I!" con energía muestra entusiasmo genuino.', ic: '🔥' },
    { w: 'inversion', p: '/ɪnˈvɜːʃn/', m: 'the reversal of the normal order of words (Auxiliary + Subject)', hi: 'शब्द-क्रम का उलटना (इन्वेंशन)', es: 'inversión sintáctica', fr: 'inversion', de: 'Inversion / Umkehrung', pt: 'inversão', zh: '倒装', ar: 'قلب الترتيب / تقديم وتأخير', ja: '倒置', ru: 'инверсия / обратный порядок слов', ex: '"So do I" uses inversion: So + auxiliary verb + subject.', exHi: '"So do I" में इन्वेंशन का उपयोग होता है: So + सहायक क्रिया + कर्ता।', exEs: '"So do I" usa inversión: So + verbo auxiliar + sujeto.', ic: '🔄' },
    { w: 'viewpoint', p: '/ˈvjuːpɔɪnt/', m: 'a person\'s opinion or point of view', hi: 'दृष्टिकोण / विचार', es: 'punto de vista / opinión', fr: 'point de vue', de: 'Standpunkt', pt: 'ponto de vista', zh: '观点 / 看法', ar: 'وجهة نظر', ja: '見解 / 観点', ru: 'точка зрения / взгляд', ex: 'I understand your viewpoint, but let\'s look at the data.', exHi: 'मैं आपके दृष्टिकोण को समझता हूँ, लेकिन आइए डेटा देखें।', exEs: 'Entiendo tu punto de vista, pero miremos los datos.', ic: '👓' },
    { w: 'definitely', p: '/ˈdefɪnətli/', m: 'without doubt; clearly or unquestionably', hi: 'निश्चित रूप से / बिल्कुल', es: 'definitivamente / sin duda', fr: 'définitivement / absolument', de: 'definitiv / auf jeden Fall', pt: 'com certeza / definitivamente', zh: '肯定地 / 绝对地', ar: 'بالتأكيد / حتماً', ja: '絶対に / 確かに', ru: 'определенно / безусловно', ex: '"Are you coming to the concert?" - "Definitely! So is Maria."', exHi: '"क्या आप संगीत कार्यक्रम में आ रहे हैं?" - "बिल्कुल! मारिया भी आ रही है।"', exEs: '"¿Vienes al concierto?" - "¡Definitivamente! María también."', ic: '💯' },
    { w: 'absolutely', p: '/ˌæbsəˈluːtli/', m: 'with no qualification, restriction, or limitation; totally', hi: 'पूर्णतः / बिल्कुल सही', es: 'absolutamente / totalmente', fr: 'absolument / tout à fait', de: 'absolut / vollkommen', pt: 'absolutamente', zh: '完全地 / 当然', ar: 'تماماً / إطلاقاً', ja: '全くその通り / 完全に', ru: 'совершенно / абсолютно', ex: '"That presentation was brilliant." - "Absolutely! I agree completely."', exHi: '"वह प्रस्तुति शानदार थी।" - "बिल्कुल! मैं पूरी तरह सहमत हूँ।"', exEs: '"Esa presentación fue brillante." - "¡Totalmente! Estoy completamente de acuerdo."', ic: '🌟' },
    { w: 'shared', p: '/ʃeəd/', m: 'held or experienced in common with others', hi: 'साझा / परस्पर', es: 'compartido / común', fr: 'partagé / commun', de: 'geteilt / gemeinsam', pt: 'compartilhado', zh: '共同的 / 共享的', ar: 'مشترك', ja: '共有された / 共通の', ru: 'общий / разделяемый', ex: 'We discovered a shared passion for learning languages.', exHi: 'हमने भाषाएं सीखने के प्रति एक साझा जुनून की खोज की।', exEs: 'Descubrimos una pasión compartida por aprender idiomas.', ic: '🤝' },
    { w: 'sentiment', p: '/ˈsentɪmənt/', m: 'a view or opinion that is held or expressed', hi: 'भावना / विचार', es: 'sentimiento / parecer', fr: 'sentiment / avis', de: 'Gefühl / Einstellung', pt: 'sentimento / opinião', zh: '观点 / 态度', ar: 'شعور / رأي', ja: '心情 / 感情', ru: 'мнение / настроение', ex: 'I share that exact sentiment regarding environmental protection.', exHi: 'मैं पर्यावरण संरक्षण के संबंध में उसी भावना को साझा करता हूँ।', exEs: 'Comparto exactamente ese mismo sentimiento sobre la protección ambiental.', ic: '💭' }
  ],
  chunks: [
    { phrase: 'so do I', meaning: 'agreeing with a positive present simple statement', hi: 'मैं भी (so do I)', es: 'yo también (para presente)', fr: 'moi aussi', de: 'ich auch', pt: 'eu também', zh: '我也是', ar: 'وكذلك أنا', ja: '私もそうです', ru: 'я тоже / и я', note: 'Positive match: "I love Italian food." - "So do I!"', ic: '🍝' },
    { phrase: 'neither do I', meaning: 'agreeing with a negative present simple statement', hi: 'मैं भी नहीं (neither do I)', es: 'yo tampoco (para presente)', fr: 'moi non plus', de: 'ich auch nicht', pt: 'eu também não', zh: '我也不', ar: 'ولا أنا', ja: '私もそうではありません', ru: 'я тоже нет / и я нет', note: 'Negative match: "I don\'t eat meat." - "Neither do I."', ic: '🥗' },
    { phrase: 'so am I', meaning: 'agreeing with a positive statement using the verb "to be"', hi: 'मैं भी हूँ (so am I)', es: 'yo también (con verbo to be)', fr: 'moi aussi', de: 'ich auch', pt: 'eu também sou/estou', zh: '我也是（系动词）', ar: 'وكذلك أنا', ja: '私もです', ru: 'я тоже', note: 'Be verb: "I am ready for the test." - "So am I!"', ic: '🙋‍♂️' },
    { phrase: 'neither have I', meaning: 'agreeing with a negative present perfect statement', hi: 'मैंने भी नहीं किया है', es: 'yo tampoco (con presente perfecto)', fr: 'moi non plus', de: 'ich auch noch nicht', pt: 'eu também não (present perfect)', zh: '我也还没', ar: 'ولا أنا فعلت', ja: '私もまだしていません', ru: 'я тоже еще нет', note: 'Perfect match: "I haven\'t finished yet." - "Neither have I."', ic: '⏳' },
    { phrase: 'I do too', meaning: 'alternative natural way to express positive agreement', hi: 'मैं भी करता हूँ (I do too)', es: 'yo también', fr: 'moi aussi', de: 'ich auch', pt: 'eu também', zh: '我也是', ar: 'أنا أفعل ذلك أيضاً', ja: '私もそうです', ru: 'я тоже так делаю', note: 'Direct order: "I enjoy hiking." - "I do too!"', ic: '🥾' },
    { phrase: 'I\'m afraid I disagree', meaning: 'a polite, softened way to express a differing opinion', hi: 'मुझे खेद है लेकिन मैं असहमत हूँ', es: 'me temo que no estoy de acuerdo', fr: 'je crains de ne pas être d\'accord', de: 'ich fürchte, ich bin anderer Meinung', pt: 'receio que discordo', zh: '恐怕我不能同意', ar: 'أخشى أنني لا أوافقك الرأي', ja: '恐縮ですが同意しかねます', ru: 'боюсь, я не согласен', note: 'Polite disagreement: "I\'m afraid I disagree with that conclusion."', ic: '🤝' }
  ],
  grammar: {
    title: 'Short Agreement Inversion with So / Neither & Auxiliary Echoes',
    concept: 'Forming So + Auxiliary + Subject (Positive) and Neither + Auxiliary + Subject (Negative).',
    patterns: [
      {
        title: 'Agreeing with Positive Statements (So + Aux + Subject)',
        structure: 'So + [matching auxiliary verb] + Subject',
        rule: 'Inverts auxiliary verb before the subject to express shared positive status.',
        examples: [
          { en: '"I studied for three hours yesterday." - "So did I."', hi: '"मैंने कल तीन घंटे पढ़ाई की।" - "मैंने भी।"', es: '"Estudié tres horas ayer." - "Yo también."' },
          { en: '"I can speak French." - "So can my sister."', hi: '"मैं फ्रेंच बोल सकता हूँ।" - "मेरी बहन भी बोल सकती है।"', es: '"Puedo hablar francés." - "Mi hermana también."' }
        ]
      },
      {
        title: 'Agreeing with Negative Statements (Neither + Aux + Subject)',
        structure: 'Neither + [positive auxiliary verb] + Subject',
        rule: 'The auxiliary verb remains positive because "neither" already carries the negative meaning.',
        examples: [
          { en: '"I don\'t like horror movies." - "Neither do I."', hi: '"मुझे डरावनी फिल्में पसंद नहीं हैं।" - "मुझे भी नहीं।"', es: '"No me gustan las películas de terror." - "A mí tampoco."' },
          { en: '"We haven\'t visited Japan." - "Neither have we."', hi: '"हम जापान नहीं गए हैं।" - "हम भी नहीं गए हैं।"', es: '"No hemos visitado Japón." - "Nosotros tampoco."' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: '"I don\'t like waking up early." - "So don\'t I."',
      cor: '"I don\'t like waking up early." - "Neither do I." (or: "Nor do I.")',
      exp: 'Never say "So don\'t I". Use "Neither do I" to agree with a negative statement.',
      hi: 'नकारात्मक वाक्य से सहमति के लिए "Neither do I" का उपयोग करें, "So don\'t I" का नहीं।',
      es: 'Nunca diga "So don\'t I". Use "Neither do I" para coincidir con frases negativas.'
    },
    {
      inc: '"I haven\'t seen John." - "Neither haven\'t I."',
      cor: '"I haven\'t seen John." - "Neither have I."',
      exp: '"Neither" already has negative meaning, so the auxiliary verb must be positive ("have", not "haven\'t").',
      hi: '"Neither" के बाद सहायक क्रिया सकारात्मक ("have") होती है, "haven\'t" नहीं।',
      es: '"Neither" ya es negativo, por lo que el auxiliar debe ser afirmativo ("have", no "haven\'t").'
    }
  ],
  dialogues: [
    {
      title: 'Comparing Tastes and Routines at Lunch',
      context: 'Sophie and Daniel are getting to know each other over lunch in the university cafe.',
      charA: { name: 'Sophie', av: '👩', role: 'Student' },
      charB: { name: 'Daniel', av: '👨', role: 'Classmate' },
      turns: [
        { spk: 'Sophie', text: 'I love studying in the quiet reading room on the third floor.', hi: 'मुझे तीसरी मंजिल पर शांत अध्ययन कक्ष में पढ़ना बहुत पसंद है।', es: 'Me encanta estudiar en la sala de lectura silenciosa del tercer piso.' },
        { spk: 'Daniel', text: 'So do I! It has great natural light and plenty of desks.', hi: 'मुझे भी! इसमें बहुत अच्छी प्राकृतिक रोशनी और बहुत सारी मेजें हैं।', es: '¡A mí también! Tiene excelente luz natural y muchos escritorios.' },
        { spk: 'Sophie', text: 'I didn\'t understand the economics assignment we got yesterday, though.', hi: 'हालाँकि, मुझे कल मिला अर्थशास्त्र का असाइनमेंट समझ नहीं आया।', es: 'Aunque no entendí el trabajo de economía que nos dieron ayer.' },
        { spk: 'Daniel', text: 'Neither did I! Maybe we can ask the tutor during tomorrow\'s office hours.', hi: 'मुझे भी नहीं! शायद हम कल ट्यूटर से उनके कार्यालय समय के दौरान पूछ सकते हैं।', es: '¡Yo tampoco! Quizá podamos preguntarle al tutor durante las horas de consulta de mañana.' },
        { spk: 'Sophie', text: 'That\'s a wonderful idea. I can bring my laptop and notes.', hi: 'यह एक शानदार विचार है। मैं अपना लैपटॉप और नोट्स ला सकती हूँ।', es: 'Es una idea maravillosa. Puedo llevar mi portátil y mis apuntes.' },
        { spk: 'Daniel', text: 'So can I. Let\'s meet at ten in the morning.', hi: 'मैं भी ला सकता हूँ। चलिए सुबह दस बजे मिलते हैं।', es: 'Yo también. Encontrémonos a las diez de la mañana.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_202_p1',
      type: 'multiple_choice',
      prompt: 'Person A: "I love traveling by train." Person B wants to agree. What should B say?',
      options: [
        { id: '1', text: 'So do I.', isCorrect: true },
        { id: '2', text: 'Neither do I.', isCorrect: false },
        { id: '3', text: 'So am I.', isCorrect: false },
        { id: '4', text: 'So did I.', isCorrect: false }
      ],
      explanation: '"Love" is present simple, so use "So do I".'
    },
    {
      id: 'ex_202_p2',
      type: 'fill_blank',
      prompt: 'Complete the response to agree with the negative statement:',
      sourceSentence: 'Person A: "I haven\'t eaten lunch yet." Person B: "Neither ____ I."',
      targetSentence: 'Person A: "I haven\'t eaten lunch yet." Person B: "Neither have I."',
      blankIndex: 10,
      options: [
        { id: '1', text: 'have', isCorrect: true },
        { id: '2', text: 'haven\'t', isCorrect: false },
        { id: '3', text: 'do', isCorrect: false },
        { id: '4', text: 'am', isCorrect: false }
      ]
    },
    {
      id: 'ex_202_p3',
      type: 'translate_tiles',
      prompt: 'Translate to English: "मुझे तैरना पसंद नहीं है।" - "मुझे भी नहीं।"',
      sourceSentence: '"No me gusta nadar." - "A mí tampoco."',
      targetSentence: 'I don\'t like swimming Neither do I',
      wordBank: ['I', 'don\'t', 'like', 'swimming', 'Neither', 'do', 'I', 'So', 'am']
    },
    {
      id: 'ex_202_p4',
      type: 'word_order',
      prompt: 'Arrange into an agreement with the past tense ("I saw the movie" -> "So did I"):',
      targetSentence: 'So did I',
      wordBank: ['So', 'did', 'I']
    },
    {
      id: 'ex_202_p5',
      type: 'error_correction',
      prompt: 'Fix the error in agreeing with a negative statement:',
      sentence: 'Person A: "I don\'t drink coffee." Person B: "So don\'t I."',
      correctSentence: 'Person A: "I don\'t drink coffee." Person B: "Neither do I."',
      errorSentence: 'Person A: "I don\'t drink coffee." Person B: "So don\'t I."',
      explanation: 'Use "Neither do I" to agree with negative sentences, not "So don\'t I".'
    },
    {
      id: 'ex_202_p6',
      type: 'match_pairs',
      prompt: 'Match statements with their correct agreement responses:',
      options: [
        { id: 'm1', text: 'I am tired today → So am I.' },
        { id: 'm2', text: 'I didn\'t sleep well → Neither did I.' },
        { id: 'm3', text: 'I can play chess → So can I.' },
        { id: 'm4', text: 'I won\'t give up → Neither will I.' }
      ]
    },
    {
      id: 'ex_202_p7',
      type: 'listening',
      prompt: 'Listen to the short dialogue and identify the shared interest:',
      audioText: 'Person A: I really enjoy photography and digital design. Person B: So do I! I take photos every weekend.',
      options: [
        { id: '1', text: 'Both speakers enjoy photography and digital design', isCorrect: true },
        { id: '2', text: 'Neither speaker likes taking photos', isCorrect: false },
        { id: '3', text: 'Person A hates digital design', isCorrect: false },
        { id: '4', text: 'Person B only plays video games', isCorrect: false }
      ]
    },
    {
      id: 'ex_202_p8',
      type: 'speak_sentence',
      prompt: 'Speak this enthusiastic agreement response:',
      targetSentence: 'So do I! I study in the library every single day.',
      audioText: 'So do I! I study in the library every single day.'
    },
    {
      id: 'ex_202_p9',
      type: 'dialogue_completion',
      prompt: 'Choose the correct agreement for Person B:',
      context: 'Person A: "I was very nervous before the speaking test."',
      options: [
        { id: '1', text: 'So was I! My hands were shaking.', isCorrect: true },
        { id: '2', text: 'Neither was I.', isCorrect: false },
        { id: '3', text: 'So did I.', isCorrect: false },
        { id: '4', text: 'I don\'t too.', isCorrect: false }
      ]
    },
    {
      id: 'ex_202_p10',
      type: 'reading_comprehension',
      prompt: 'Dialogue: "Liam: I can\'t attend the meeting on Friday. Emma: Nor can I. Shall we ask the manager to move it to Monday?" What did Emma mean by "Nor can I"?',
      options: [
        { id: '1', text: 'She also cannot attend the meeting on Friday', isCorrect: true },
        { id: '2', text: 'She can easily attend on Friday', isCorrect: false },
        { id: '3', text: 'She is the manager of the company', isCorrect: false },
        { id: '4', text: 'She forgot about the meeting completely', isCorrect: false }
      ]
    },
    {
      id: 'ex_202_p11',
      type: 'fill_blank',
      prompt: 'Complete with the correct auxiliary for modal agreement:',
      sourceSentence: 'Person A: "I will call the office tomorrow." Person B: "So ____ I."',
      targetSentence: 'Person A: "I will call the office tomorrow." Person B: "So will I."',
      blankIndex: 10,
      options: [
        { id: '1', text: 'will', isCorrect: true },
        { id: '2', text: 'do', isCorrect: false },
        { id: '3', text: 'am', isCorrect: false },
        { id: '4', text: 'have', isCorrect: false }
      ]
    },
    {
      id: 'ex_202_p12',
      type: 'translate_tiles',
      prompt: 'Translate to English: "मैं बहुत खुश हूँ।" - "मैं भी।"',
      sourceSentence: '"Estoy muy feliz." - "Yo también."',
      targetSentence: 'I am very happy So am I',
      wordBank: ['I', 'am', 'very', 'happy', 'So', 'am', 'I', 'do', 'did']
    },
    {
      id: 'ex_202_p13',
      type: 'multiple_choice',
      prompt: 'How can you politely disagree when someone says: "This was the easiest test of the year"?',
      options: [
        { id: '1', text: 'Actually, I found it quite difficult.', isCorrect: true },
        { id: '2', text: 'So do I!', isCorrect: false },
        { id: '3', text: 'You are completely crazy!', isCorrect: false },
        { id: '4', text: 'Neither was I.', isCorrect: false }
      ]
    },
    {
      id: 'ex_202_p14',
      type: 'dictation',
      prompt: 'Listen and write down the agreement exchange:',
      audioText: 'I don\'t like waiting in long queues. Neither do I.',
      targetSentence: 'I don\'t like waiting in long queues. Neither do I.'
    },
    {
      id: 'ex_202_p15',
      type: 'speaking',
      prompt: 'Reply to the statement "I have never visited London" with negative agreement:',
      targetSentence: 'Neither have I, but I hope to visit next summer.'
    },
    {
      id: 'ex_202_p16',
      type: 'word_order',
      prompt: 'Arrange into an alternative agreement sentence:',
      targetSentence: 'I enjoy studying online and my friend does too',
      wordBank: ['I', 'enjoy', 'studying', 'online', 'and', 'my', 'friend', 'does', 'too']
    },
    {
      id: 'ex_202_p17',
      type: 'fill_blank',
      prompt: 'Select the correct word to complete the polite disagreement:',
      sourceSentence: 'I\'m ____ I disagree with that plan; it might take too much time.',
      targetSentence: 'I\'m afraid I disagree with that plan; it might take too much time.',
      blankIndex: 1,
      options: [
        { id: '1', text: 'afraid', isCorrect: true },
        { id: '2', text: 'happy', isCorrect: false },
        { id: '3', text: 'neither', isCorrect: false },
        { id: '4', text: 'so', isCorrect: false }
      ]
    },
    {
      id: 'ex_202_p18',
      type: 'error_correction',
      prompt: 'Fix the error in the agreement response:',
      sentence: 'Person A: "I can swim well." Person B: "So do I."',
      correctSentence: 'Person A: "I can swim well." Person B: "So can I."',
      errorSentence: 'Person A: "I can swim well." Person B: "So do I."',
      explanation: 'Match the modal verb "can": "So can I", not "So do I".'
    },
    {
      id: 'ex_202_p19',
      type: 'multiple_choice',
      prompt: 'What does "Nor do I" mean?',
      options: [
        { id: '1', text: 'It means the exact same thing as "Neither do I" (negative agreement)', isCorrect: true },
        { id: '2', text: 'It means "I completely agree with a positive statement"', isCorrect: false },
        { id: '3', text: 'It means "I do not know the answer"', isCorrect: false },
        { id: '4', text: 'It is only used when greeting people', isCorrect: false }
      ]
    },
    {
      id: 'ex_202_p20',
      type: 'translate_tiles',
      prompt: 'Translate to English: "हम कल नहीं आए थे।" - "हम भी नहीं।"',
      sourceSentence: '"No vinimos ayer." - "Nosotros tampoco."',
      targetSentence: 'We didn\'t come yesterday Neither did we',
      wordBank: ['We', 'didn\'t', 'come', 'yesterday', 'Neither', 'did', 'we', 'So', 'do']
    }
  ],
  review: [
    {
      id: 'ex_202_r1',
      type: 'multiple_choice',
      prompt: 'Spaced Retrieval: Select the correct question tag for: "You have completed the form, ____?"',
      options: [
        { id: '1', text: 'haven\'t you?', isCorrect: true },
        { id: '2', text: 'don\'t you?', isCorrect: false },
        { id: '3', text: 'didn\'t you?', isCorrect: false },
        { id: '4', text: 'isn\'t it?', isCorrect: false }
      ]
    },
    {
      id: 'ex_202_r2',
      type: 'fill_blank',
      prompt: 'Spaced Retrieval: Complete the tag question for a suggestion:',
      sourceSentence: 'Let\'s practice our English speaking skills, ____ we?',
      targetSentence: 'Let\'s practice our English speaking skills, shall we?',
      blankIndex: 6,
      options: [
        { id: '1', text: 'shall', isCorrect: true },
        { id: '2', text: 'will', isCorrect: false },
        { id: '3', text: 'don\'t', isCorrect: false },
        { id: '4', text: 'do', isCorrect: false }
      ]
    },
    {
      id: 'ex_202_r3',
      type: 'translate_tiles',
      prompt: 'Translate to English: "मैं संगीत समारोह में गया था।" - "मैं भी।"',
      sourceSentence: '"Fui al concierto." - "Yo también."',
      targetSentence: 'I went to the concert So did I',
      wordBank: ['I', 'went', 'to', 'the', 'concert', 'So', 'did', 'I', 'am', 'do']
    },
    {
      id: 'ex_202_r4',
      type: 'word_order',
      prompt: 'Arrange into a polite disagreement phrase:',
      targetSentence: 'I see your point but I prefer the other option',
      wordBank: ['I', 'see', 'your', 'point', 'but', 'I', 'prefer', 'the', 'other', 'option']
    },
    {
      id: 'ex_202_r5',
      type: 'listening',
      prompt: 'Listen to the short dialogue and identify if they agree or disagree:',
      audioText: 'Person A: I really don\'t like cold winter mornings. Person B: Neither do I! I much prefer warm sunshine.',
      options: [
        { id: '1', text: 'They both dislike cold winter mornings (they agree)', isCorrect: true },
        { id: '2', text: 'They disagree about the weather', isCorrect: false },
        { id: '3', text: 'Person B loves freezing snow', isCorrect: false },
        { id: '4', text: 'Person A wants to travel to the North Pole', isCorrect: false }
      ]
    },
    {
      id: 'ex_202_r6',
      type: 'speak_sentence',
      prompt: 'Speak this polite contrast clearly:',
      targetSentence: 'I understand what you mean, but from my perspective this way is faster.',
      audioText: 'I understand what you mean, but from my perspective this way is faster.'
    },
    {
      id: 'ex_202_r7',
      type: 'error_correction',
      prompt: 'Fix the error in the sentence:',
      sentence: 'Person A: "I am ready." Person B: "So do I."',
      correctSentence: 'Person A: "I am ready." Person B: "So am I."',
      errorSentence: 'Person A: "I am ready." Person B: "So do I."',
      explanation: 'Statement uses "am" (verb to be), so the agreement must be "So am I".'
    },
    {
      id: 'ex_202_r8',
      type: 'match_pairs',
      prompt: 'Match statements with corresponding responses:',
      options: [
        { id: 'm1', text: 'I love fresh coffee → So do I!' },
        { id: 'm2', text: 'I haven\'t finished yet → Neither have I.' },
        { id: 'm3', text: 'I will help you tomorrow → So will I!' },
        { id: 'm4', text: 'I wasn\'t at home → Neither was I.' }
      ]
    },
    {
      id: 'ex_202_r9',
      type: 'fill_blank',
      prompt: 'Select the missing word:',
      sourceSentence: 'My sister likes classical music, and I do ____.',
      targetSentence: 'My sister likes classical music, and I do too.',
      blankIndex: 7,
      options: [
        { id: '1', text: 'too', isCorrect: true },
        { id: '2', text: 'so', isCorrect: false },
        { id: '3', text: 'neither', isCorrect: false },
        { id: '4', text: 'nor', isCorrect: false }
      ]
    },
    {
      id: 'ex_202_r10',
      type: 'translate_tiles',
      prompt: 'Translate to English: "हम फ्रेंच नहीं बोल सकते।" - "हम भी नहीं।"',
      sourceSentence: '"No podemos hablar francés." - "Nosotros tampoco."',
      targetSentence: 'We cannot speak French Neither can we',
      wordBank: ['We', 'cannot', 'speak', 'French', 'Neither', 'can', 'we', 'So', 'do']
    }
  ],
  assessment: [
    {
      id: 'ex_202_a1',
      type: 'reading_comprehension',
      prompt: 'Conversation: "Anna: I\'ve been trying to reduce my screen time before bed. Ben: So have I! I read a paper book instead. Anna: Me too, and I sleep so much better now." What do Anna and Ben have in common?',
      options: [
        { id: '1', text: 'Both have been reducing screen time and reading books before sleeping', isCorrect: true },
        { id: '2', text: 'Both watch television until 3 AM', isCorrect: false },
        { id: '3', text: 'Ben bought Anna a new smartphone', isCorrect: false },
        { id: '4', text: 'Neither of them can sleep at night', isCorrect: false }
      ]
    },
    {
      id: 'ex_202_a2',
      type: 'mediation',
      prompt: 'Your study buddy doesn\'t understand why someone said "Neither have I" instead of "Me too" after hearing "I haven\'t done the homework". Explain the rule simply so they know when to use each.',
      options: [
        { id: '1', text: 'When someone says a negative sentence (with "not" / "haven\'t"), you use "Neither have I" (or "Me neither") to agree, not "Me too". "Me too" is only for positive sentences.', isCorrect: true },
        { id: '2', text: '"Neither" is an insult that should never be used in conversation.', isCorrect: false },
        { id: '3', text: '"Me too" can only be used by teachers.', isCorrect: false },
        { id: '4', text: 'There is no difference at all between the two words.', isCorrect: false }
      ],
      explanation: 'True mediation clarifies grammar rules clearly and contrastively.'
    },
    {
      id: 'ex_202_a3',
      type: 'fill_blank',
      prompt: 'Complete the short agreement response:',
      sourceSentence: 'Person A: "I must study tonight." Person B: "So ____ I."',
      targetSentence: 'Person A: "I must study tonight." Person B: "So must I."',
      blankIndex: 8,
      options: [
        { id: '1', text: 'must', isCorrect: true },
        { id: '2', text: 'do', isCorrect: false },
        { id: '3', text: 'have', isCorrect: false },
        { id: '4', text: 'am', isCorrect: false }
      ]
    },
    {
      id: 'ex_202_a4',
      type: 'writing_prompt',
      prompt: 'Write a short dialogue (4 lines) between two friends discussing their favorite weekend hobbies, using at least one "So do I / So am I" and one "Neither do I / Neither have I".',
      targetSentence: 'Elena: I love going hiking in the mountains on sunny Saturdays. Marco: So do I! The fresh air is wonderful. Elena: I don\'t enjoy staying indoors all day. Marco: Neither do I, I get bored very quickly.'
    },
    {
      id: 'ex_202_a5',
      type: 'speaking',
      prompt: 'Respond to the statement "I haven\'t had breakfast yet" using natural negative agreement:',
      targetSentence: 'Neither have I! Let\'s go grab a coffee and a croissant together.'
    },
    {
      id: 'ex_202_a6',
      type: 'dictation',
      prompt: 'Listen and transcribe the conversation snippet:',
      audioText: 'I really enjoyed that presentation. So did I, it was fascinating.',
      targetSentence: 'I really enjoyed that presentation. So did I, it was fascinating.'
    },
    {
      id: 'ex_202_a7',
      type: 'multiple_choice',
      prompt: 'Which response correctly agrees with: "I am not feeling well today"?',
      options: [
        { id: '1', text: 'Neither am I.', isCorrect: true },
        { id: '2', text: 'So am I.', isCorrect: false },
        { id: '3', text: 'Neither do I.', isCorrect: false },
        { id: '4', text: 'So do I.', isCorrect: false }
      ]
    },
    {
      id: 'ex_202_a8',
      type: 'translate_tiles',
      prompt: 'Translate to English: "मैं कल परीक्षा पास कर लूंगा।" - "मैं भी।"',
      sourceSentence: '"Aprobaré el examen mañana." - "Yo también."',
      targetSentence: 'I will pass the exam tomorrow So will I',
      wordBank: ['I', 'will', 'pass', 'the', 'exam', 'tomorrow', 'So', 'will', 'I', 'do', 'did']
    },
    {
      id: 'ex_202_a9',
      type: 'error_correction',
      prompt: 'Fix the error in this dialogue:',
      sentence: 'Person A: "I didn\'t understand the lesson." Person B: "Neither didn\'t I."',
      correctSentence: 'Person A: "I didn\'t understand the lesson." Person B: "Neither did I."',
      errorSentence: 'Person A: "I didn\'t understand the lesson." Person B: "Neither didn\'t I."',
      explanation: 'With "Neither", the auxiliary verb is positive: "Neither did I".'
    },
    {
      id: 'ex_202_a10',
      type: 'dialogue_completion',
      prompt: 'Choose the best completion for the conversation:',
      context: 'David: "I\'ve never tried rock climbing before, but I really want to try it."' ,
      options: [
        { id: '1', text: 'Neither have I! Let\'s book a beginner session together.', isCorrect: true },
        { id: '2', text: 'So did I yesterday.', isCorrect: false },
        { id: '3', text: 'I don\'t have an umbrella.', isCorrect: false },
        { id: '4', text: 'Where is the kitchen?', isCorrect: false }
      ]
    }
  ]
};

console.log("Generating Lessons 200, 201, 202...");
saveUnit14Lesson(buildDetailedLessonA2_Unit14(LESSON_200));
saveUnit14Lesson(buildDetailedLessonA2_Unit14(LESSON_201));
saveUnit14Lesson(buildDetailedLessonA2_Unit14(LESSON_202));
