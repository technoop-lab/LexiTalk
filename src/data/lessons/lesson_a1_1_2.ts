import { DetailedLessonData } from '../../types';

export const LESSON_A1_1_2_DATA: DetailedLessonData = {
  id: 'lesson_a1_1_2',
  unitId: 'unit_a1_1',
  title: 'Occupations, Workplaces & Indefinite Articles',
  cefr: 'A1',
  icon: '💼',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Occupations, Workplaces & Indefinite Articles (A / An)',
    description: 'Learn how to state your job, ask what someone does, describe your workplace, and correctly use indefinite articles "a" and "an", while recycling greetings, identity, and verb BE structures from Lesson 1.',
    descriptionsByLang: {
      hi: 'सीखें कि अपना पेशा कैसे बताएं, किसी का काम कैसे पूछें, अपने कार्यस्थल का वर्णन कैसे करें और "a" तथा "an" का सही उपयोग कैसे करें, साथ ही पाठ 1 से नमस्कार, परिचय और verb BE को दोहराएं।',
      es: 'Aprende a decir tu trabajo, preguntar a qué se dedica alguien, describir tu lugar de trabajo y usar correctamente los artículos "a" y "an", repasando saludos e identidad de la Lección 1.',
      fr: 'Apprenez à indiquer votre métier, poser des questions sur la profession, décrire votre lieu de travail et utiliser correctement les articles "a" et "an".',
      de: 'Lernen Sie, Ihren Beruf zu nennen, nach dem Beruf anderer zu fragen, Ihren Arbeitsplatz zu beschreiben und die unbestimmten Artikel "a" und "an" richtig zu verwenden.',
      pt: 'Aprenda a dizer sua profissão, perguntar o trabalho de alguém, descrever seu local de trabalho e usar corretamente os artigos "a" e "an".',
      zh: '学习如何说明职业、询问他人工作、描述工作场所，并正确使用不定冠词“a”和“an”，同时复习第1课的问候与BE动词。',
      ar: 'تعلم كيفية ذكر مهنتك، والسؤال عن وظيفة شخص ما، ووصف مكان عملك، واستخدام أدوات التنكير "a" و "an" بشكل صحيح.',
      ja: '職業の伝え方、仕事の尋ね方、職場の説明、および不定冠詞「a」と「an」の正しい使い方を学びます。',
      ru: 'Научитесь называть свою профессию, спрашивать о работе других, описывать место работы и правильно использовать неопределенные артикли "a" и "an".'
    },
    canDoStatements: [
      'State your occupation using "I am a/an..."',
      'Ask someone\'s profession with "What do you do?"',
      'Describe your workplace with "I work in a/an..." and "I work at..."',
      'Ask where someone works using "Where do you work?"',
      'Correctly choose "a" before consonant sounds and "an" before vowel sounds',
      'Form negative job statements like "I am not a doctor, I am an engineer"',
      'Recycle self-introductions, origin ("I\'m from..."), and verb BE in professional contexts',
      'Exchange polite workplace greetings and professional pleasantries'
    ],
    canDoByLang: {
      hi: [
        '"I am a/an..." का प्रयोग करके अपना पेशा बताना',
        '"What do you do?" पूछकर किसी का काम जानना',
        '"I work in a/an..." का उपयोग करके अपना कार्यस्थल बताना',
        '"Where do you work?" पूछकर किसी का कार्यस्थल जानना',
        'व्यंजन ध्वनियों से पहले "a" और स्वर ध्वनियों से पहले "an" का सही चुनाव करना',
        '"I am not a doctor" जैसे नकारात्मक वाक्य बनाना',
        'पेशेवर संदर्भों में पाठ 1 के परिचय और verb BE का पुनर्चक्रण करना',
        'कार्यस्थल के शिष्टाचार वाक्य बोलना'
      ],
      es: [
        'Decir tu profesión usando "I am a/an..."',
        'Preguntar la profesión de alguien con "What do you do?"',
        'Describir tu lugar de trabajo con "I work in a/an..."',
        'Preguntar dónde trabaja alguien con "Where do you work?"',
        'Usar "a" antes de consonantes y "an" antes de vocales',
        'Formar oraciones negativas como "I am not a doctor"',
        'Reciclar presentaciones y el verbo BE en contextos laborales',
        'Intercambiar saludos profesionales amables'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (25 items in 4 semantic domains)
  vocabulary: [
    // Group 1: Common Professions
    {
      id: 'v_doctor',
      word: 'doctor',
      phonetic: '/ˈdɑːktər/',
      meaning: 'Medical professional who treats sick people',
      translationsByLang: { hi: 'डॉक्टर / चिकित्सक', es: 'médico / doctor', fr: 'médecin', de: 'Arzt', pt: 'médico', zh: '医生', ar: 'طبيب', ja: '医師', ru: 'врач' },
      exampleSentence: 'She is a doctor at the hospital.',
      exampleTranslationByLang: { hi: 'वह अस्पताल में एक डॉक्टर हैं।', es: 'Ella es doctora en el hospital.', fr: 'Elle est médecin à l\'hôpital.', de: 'Sie ist Ärztin im Krankenhaus.', pt: 'Ela é médica no hospital.', zh: '她是医院的一名医生。', ar: 'هي طبيبة في المستشفى.', ja: '彼女は病院の医師です。', ru: 'Она врач в больнице.' },
      audioText: 'doctor',
      audioId: 'en_a1_u01_l02_v_doctor',
      slowAudioId: 'en_a1_u01_l02_v_doctor_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🩺',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_teacher',
      word: 'teacher',
      phonetic: '/ˈtiːtʃər/',
      meaning: 'Person who educates students',
      translationsByLang: { hi: 'शिक्षक / अध्यापक', es: 'profesor / maestro', fr: 'enseignant', de: 'Lehrer', pt: 'professor', zh: '教师', ar: 'معلم', ja: '教師', ru: 'учитель' },
      exampleSentence: 'I am an English teacher.',
      exampleTranslationByLang: { hi: 'मैं एक अंग्रेजी शिक्षक हूँ।', es: 'Soy profesor de inglés.', fr: 'Je suis professeur d\'anglais.', de: 'Ich bin Englischlehrer.', pt: 'Eu sou professor de inglês.', zh: '我是英语教师。', ar: 'أنا معلم لغة إنجليزية.', ja: '私は英語の教師です。', ru: 'Я учитель английского языка.' },
      audioText: 'teacher',
      audioId: 'en_a1_u01_l02_v_teacher',
      slowAudioId: 'en_a1_u01_l02_v_teacher_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👨‍🏫',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_engineer',
      word: 'engineer',
      phonetic: '/ˌendʒɪˈnɪr/',
      meaning: 'Person who designs or builds systems and machines',
      translationsByLang: { hi: 'इंजीनियर / अभियंता', es: 'ingeniero/a', fr: 'ingénieur', de: 'Ingenieur', pt: 'engenheiro', zh: '工程师', ar: 'مهندس', ja: 'エンジニア', ru: 'инженер' },
      exampleSentence: 'He is a software engineer.',
      exampleTranslationByLang: { hi: 'वह एक सॉफ्टवेयर इंजीनियर है।', es: 'Él es ingeniero de software.', fr: 'Il est ingénieur logiciel.', de: 'Er ist Softwareingenieur.', pt: 'Ele é engenheiro de software.', zh: '他是软件工程师。', ar: 'هو مهندس برمجيات.', ja: '彼はおそらくソフトウェアエンジニアです。', ru: 'Он инженер-программист.' },
      audioText: 'engineer',
      audioId: 'en_a1_u01_l02_v_engineer',
      slowAudioId: 'en_a1_u01_l02_v_engineer_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💻',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_student',
      word: 'student',
      phonetic: '/ˈstuːdnt/',
      meaning: 'Person studying at school or university',
      translationsByLang: { hi: 'छात्र / विद्यार्थी', es: 'estudiante', fr: 'étudiant', de: 'Student', pt: 'estudante', zh: '学生', ar: 'طالب', ja: '学生', ru: 'студент' },
      exampleSentence: 'Maria is a university student.',
      exampleTranslationByLang: { hi: 'मारिया एक विश्वविद्यालय की छात्रा है।', es: 'María es estudiante universitaria.', fr: 'Maria est étudiante à l\'université.', de: 'Maria ist Studenten an der Universität.', pt: 'Maria é estudante universitária.', zh: '玛丽亚是一名大学生。', ar: 'ماريا طالبة جامعية.', ja: 'マリアは大学生です。', ru: 'Мария студентка университета.' },
      audioText: 'student',
      audioId: 'en_a1_u01_l02_v_student',
      slowAudioId: 'en_a1_u01_l02_v_student_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎓',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_manager',
      word: 'manager',
      phonetic: '/ˈmænɪdʒər/',
      meaning: 'Person responsible for controlling or directing a team',
      translationsByLang: { hi: 'प्रबंधक / मैनेजर', es: 'gerente / manager', fr: 'manager', de: 'Manager', pt: 'gerente', zh: '经理', ar: 'مدير', ja: 'マネージャー', ru: 'менеджер' },
      exampleSentence: 'My friend is a project manager.',
      exampleTranslationByLang: { hi: 'मेरा दोस्त प्रोजेक्ट मैनेजर है।', es: 'Mi amigo es gerente de proyectos.', fr: 'Mon ami est chef de projet.', de: 'Mein Freund ist Projektmanager.', pt: 'Meu amigo é gerente de projetos.', zh: '我的朋友是项目经理。', ar: 'صديقي مدير مشاريع.', ja: '私の友人はプロジェクトマネージャーです。', ru: 'Мой друг менеджер проектов.' },
      audioText: 'manager',
      audioId: 'en_a1_u01_l02_v_manager',
      slowAudioId: 'en_a1_u01_l02_v_manager_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👔',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_nurse',
      word: 'nurse',
      phonetic: '/nɜːrs/',
      meaning: 'Person trained to care for sick people',
      translationsByLang: { hi: 'नर्स / परिचारिका', es: 'enfermero/a', fr: 'infirmier', de: 'Krankenschwester', pt: 'enfermeiro', zh: '护士', ar: 'ممرض', ja: '看護師', ru: 'медсестра' },
      exampleSentence: 'Alex is a nurse at the clinic.',
      exampleTranslationByLang: { hi: 'एलेक्स क्लिनिक में एक नर्स हैं।', es: 'Alex es enfermero en la clínica.', fr: 'Alex est infirmier à la clinique.', de: 'Alex ist Krankenpfleger in der Klinik.', pt: 'Alex é enfermeiro na clínica.', zh: '亚历克斯是诊所的一名护士。', ar: 'أليكس ممرض في العيادة.', ja: 'アレックスはクリニックの看護師です。', ru: 'Алекс медбрат в клинике.' },
      audioText: 'nurse',
      audioId: 'en_a1_u01_l02_v_nurse',
      slowAudioId: 'en_a1_u01_l02_v_nurse_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🩺',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_chef',
      word: 'chef',
      phonetic: '/ʃef/',
      meaning: 'Professional cook in a restaurant',
      translationsByLang: { hi: 'शेफ / रसोइया', es: 'chef / cocinero/a', fr: 'chef cuisinier', de: 'Chefkoch', pt: 'chef de cozinha', zh: '厨师', ar: 'طاهٍ', ja: 'シェフ', ru: 'повар' },
      exampleSentence: 'He is a talented chef.',
      exampleTranslationByLang: { hi: 'वह एक प्रतिभाशाली शेफ हैं।', es: 'Él es un chef talentoso.', fr: 'Il est un chef talentueux.', de: 'Er ist ein talentierter Koch.', pt: 'Ele é um chef talentoso.', zh: '他是一位有天赋的厨师。', ar: 'هو طاهٍ موهوب.', ja: '彼は才能あるシェフです。', ru: 'Он талантливый шеф-повар.' },
      audioText: 'chef',
      audioId: 'en_a1_u01_l02_v_chef',
      slowAudioId: 'en_a1_u01_l02_v_chef_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👨‍🍳',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_designer',
      word: 'designer',
      phonetic: '/dɪˈzaɪnər/',
      meaning: 'Person who plans the form or look of things',
      translationsByLang: { hi: 'डिजाइनर / रूपकार', es: 'diseñador/a', fr: 'designer', de: 'Designer', pt: 'designer', zh: '设计师', ar: 'مصمم', ja: 'デザイナー', ru: 'дизайнер' },
      exampleSentence: 'She works as a graphic designer.',
      exampleTranslationByLang: { hi: 'वह एक ग्राफिक डिजाइनर के रूप में काम करती हैं।', es: 'Ella trabaja como diseñadora gráfica.', fr: 'Elle travaille comme graphiste.', de: 'Sie arbeitet als Grafikdesignerin.', pt: 'Ela trabalha como designer gráfica.', zh: '她是一名平面设计师。', ar: 'تعمل كمصممة جرافيك.', ja: '彼女はグラフィックデザイナーとして働いています。', ru: 'Она работает графическим дизайнером.' },
      audioText: 'designer',
      audioId: 'en_a1_u01_l02_v_designer',
      slowAudioId: 'en_a1_u01_l02_v_designer_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎨',
      difficulty: 'A1 Beginner'
    },

    // Group 2: Additional Professions & Roles
    {
      id: 'v_accountant',
      word: 'accountant',
      phonetic: '/əˈkaʊntənt/',
      meaning: 'Person who inspects and maintains financial records',
      translationsByLang: { hi: 'लेखाकार / अकाउंटेंट', es: 'contador/a', fr: 'comptable', de: 'Buchhalter', pt: 'contador', zh: '会计', ar: 'محاسب', ja: '会計士', ru: 'бухгалтер' },
      exampleSentence: 'David is an accountant.',
      exampleTranslationByLang: { hi: 'डेविड एक अकाउंटेंट हैं।', es: 'David es contador.', fr: 'David est comptable.', de: 'David ist Buchhalter.', pt: 'David é contador.', zh: '大卫是一名会计。', ar: 'ديفيد محاسب.', ja: 'デイビッドは会計士です。', ru: 'Дэвид бухгалтер.' },
      audioText: 'accountant',
      audioId: 'en_a1_u01_l02_v_accountant',
      slowAudioId: 'en_a1_u01_l02_v_accountant_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📊',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_architect',
      word: 'architect',
      phonetic: '/ˈɑːrkɪtekt/',
      meaning: 'Person who designs buildings',
      translationsByLang: { hi: 'वास्तुकार / आर्किटेक्ट', es: 'arquitecto/a', fr: 'architecte', de: 'Architekt', pt: 'arquiteto', zh: '建筑师', ar: 'مهندس معماري', ja: '建筑家', ru: 'архитектор' },
      exampleSentence: 'He is an architect in Tokyo.',
      exampleTranslationByLang: { hi: 'वह टोक्यो में एक आर्किटेक्ट हैं।', es: 'Él es arquitecto en Tokio.', fr: 'Il est architecte à Tokyo.', de: 'Er ist Architekt in Tokio.', pt: 'Ele é arquiteto em Tóquio.', zh: '他是东京的一位建筑师。', ar: 'هو مهندس معماري في طوكيو.', ja: '彼は東京の建築家です。', ru: 'Он архитектор в Токио.' },
      audioText: 'architect',
      audioId: 'en_a1_u01_l02_v_architect',
      slowAudioId: 'en_a1_u01_l02_v_architect_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏛️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_artist',
      word: 'artist',
      phonetic: '/ˈɑːrtɪst/',
      meaning: 'Person who creates paintings, music, or sculpture',
      translationsByLang: { hi: 'कलाकार / चित्रकार', es: 'artista', fr: 'artiste', de: 'Künstler', pt: 'artista', zh: '艺术家', ar: 'فنان', ja: '画家 / 芸術家', ru: 'художник' },
      exampleSentence: 'My sister is an artist.',
      exampleTranslationByLang: { hi: 'मेरी बहन एक कलाकार है।', es: 'Mi hermana es artista.', fr: 'Ma sœur est artiste.', de: 'Meine Schwester ist Künstlerin.', pt: 'Minha irmã é artista.', zh: '我的妹妹是一位艺术家。', ar: 'أختي فنانة.', ja: '私の姉は芸術家です。', ru: 'Моя сестра художник.' },
      audioText: 'artist',
      audioId: 'en_a1_u01_l02_v_artist',
      slowAudioId: 'en_a1_u01_l02_v_artist_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎨',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_driver',
      word: 'driver',
      phonetic: '/ˈdraɪvər/',
      meaning: 'Person who operates a vehicle',
      translationsByLang: { hi: 'चालक / ड्राइवर', es: 'conductor/a / chófer', fr: 'chauffeur', de: 'Fahrer', pt: 'motorista', zh: '司机', ar: 'سائق', ja: '運転手', ru: 'водитель' },
      exampleSentence: 'Ken is a bus driver.',
      exampleTranslationByLang: { hi: 'केन एक बस ड्राइवर हैं।', es: 'Ken es conductor de autobús.', fr: 'Ken est chauffeur de bus.', de: 'Ken ist Busfahrer.', pt: 'Ken é motorista de ônibus.', zh: '肯是一名公交车司机。', ar: 'كين سائق حافلة.', ja: 'ケンはバスの運転手です。', ru: 'Кен водитель автобуса.' },
      audioText: 'driver',
      audioId: 'en_a1_u01_l02_v_driver',
      slowAudioId: 'en_a1_u01_l02_v_driver_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚌',
      difficulty: 'A1 Beginner'
    },

    // Group 3: Workplaces & Locations
    {
      id: 'v_office',
      word: 'office',
      phonetic: '/ˈɔːfɪs/',
      meaning: 'Room or building where administrative work is done',
      translationsByLang: { hi: 'कार्यालय / दफ्तर', es: 'oficina', fr: 'bureau', de: 'Büro', pt: 'escritório', zh: '办公室', ar: 'مكتب', ja: 'オフィス / 事務所', ru: 'офис' },
      exampleSentence: 'I work in an office in London.',
      exampleTranslationByLang: { hi: 'मैं लंदन के एक दफ्तर में काम करता हूँ।', es: 'Trabajo en una oficina en Londres.', fr: 'Je travaille dans un bureau à Londres.', de: 'Ich arbeite in einem Büro in London.', pt: 'Trabalho em um escritório em Londres.', zh: '我在伦敦的一间办公室工作。', ar: 'أعمل في مكتب في لندن.', ja: '私はロンドンのオフィスで働いています。', ru: 'Я работаю в офисе в Лондоне.' },
      audioText: 'office',
      audioId: 'en_a1_u01_l02_v_office',
      slowAudioId: 'en_a1_u01_l02_v_office_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏢',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_hospital',
      word: 'hospital',
      phonetic: '/ˈhɑːspɪtl/',
      meaning: 'Institution providing medical treatment',
      translationsByLang: { hi: 'अस्पताल', es: 'hospital', fr: 'hôpital', de: 'Krankenhaus', pt: 'hospital', zh: '医院', ar: 'مستشفى', ja: '病院', ru: 'больница' },
      exampleSentence: 'Doctors work at a hospital.',
      exampleTranslationByLang: { hi: 'डॉक्टर अस्पताल में काम करते हैं।', es: 'Los médicos trabajan en un hospital.', fr: 'Les médecins travaillent dans un hôpital.', de: 'Ärzte arbeiten in einem Krankenhaus.', pt: 'Médicos trabalham em um hospital.', zh: '医生在医院工作。', ar: 'الأطباء يعملون في المستشفى.', ja: '医師は病院で働きます。', ru: 'Врачи работают в больнице.' },
      audioText: 'hospital',
      audioId: 'en_a1_u01_l02_v_hospital',
      slowAudioId: 'en_a1_u01_l02_v_hospital_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏥',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_school',
      word: 'school',
      phonetic: '/skuːl/',
      meaning: 'Institution for educating children or students',
      translationsByLang: { hi: 'विद्यालय / स्कूल', es: 'escuela / colegio', fr: 'école', de: 'Schule', pt: 'escola', zh: '学校', ar: 'مدرسة', ja: '学校', ru: 'школа' },
      exampleSentence: 'She teaches at a primary school.',
      exampleTranslationByLang: { hi: 'वह एक प्राथमिक विद्यालय में पढ़ाती हैं।', es: 'Ella enseña en una escuela primaria.', fr: 'Elle enseigne dans une école primaire.', de: 'Sie unterrichtet an einer Grundschule.', pt: 'Ela leciona em uma escola primária.', zh: '她在一家小学任教。', ar: 'تدرس في مدرسة ابتدائية.', ja: '彼女は小学校で教えています。', ru: 'Она преподает в начальной школе.' },
      audioText: 'school',
      audioId: 'en_a1_u01_l02_v_school',
      slowAudioId: 'en_a1_u01_l02_v_school_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏫',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_company',
      word: 'company',
      phonetic: '/ˈkʌmpəni/',
      meaning: 'Commercial business or firm',
      translationsByLang: { hi: 'कंपनी / संस्थान', es: 'empresa / compañía', fr: 'entreprise / société', de: 'Firma / Unternehmen', pt: 'empresa', zh: '公司', ar: 'شركة', ja: '会社 / 企業', ru: 'компания' },
      exampleSentence: 'It is an international company.',
      exampleTranslationByLang: { hi: 'यह एक अंतरराष्ट्रीय कंपनी है।', es: 'Es una empresa internacional.', fr: 'C\'est une entreprise internationale.', de: 'Es ist ein internationales Unternehmen.', pt: 'É uma empresa internacional.', zh: '这是一间跨国公司。', ar: 'إنها شركة دولية.', ja: 'それは国際的な企業です。', ru: 'Это международная компания.' },
      audioText: 'company',
      audioId: 'en_a1_u01_l02_v_company',
      slowAudioId: 'en_a1_u01_l02_v_company_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏬',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_university',
      word: 'university',
      phonetic: '/ˌjuːnɪˈvɜːrsəti/',
      meaning: 'High-level educational institution',
      translationsByLang: { hi: 'विश्वविद्यालय', es: 'universidad', fr: 'université', de: 'Universität', pt: 'universidade', zh: '大学', ar: 'جامعة', ja: '大学', ru: 'университет' },
      exampleSentence: 'I study at the university.',
      exampleTranslationByLang: { hi: 'मैं विश्वविद्यालय में पढ़ाई करता हूँ।', es: 'Estudio en la universidad.', fr: 'J\'étudie à l\'université.', de: 'Ich studiere an der Universität.', pt: 'Eu estudo na universidade.', zh: '我在大学学习。', ar: 'أدرس في الجامعة.', ja: '私は大学で勉強しています。', ru: 'Я учусь в университете.' },
      audioText: 'university',
      audioId: 'en_a1_u01_l02_v_university',
      slowAudioId: 'en_a1_u01_l02_v_university_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏛️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_restaurant',
      word: 'restaurant',
      phonetic: '/ˈrestrɑːnt/',
      meaning: 'Place where cooked meals are served to customers',
      translationsByLang: { hi: 'रेस्तरां / भोजनालय', es: 'restaurante', fr: 'restaurant', de: 'Restaurant', pt: 'restaurante', zh: '餐厅', ar: 'مطعم', ja: 'レストラン', ru: 'ресторан' },
      exampleSentence: 'Chefs work in a restaurant.',
      exampleTranslationByLang: { hi: 'शेफ रेस्तरां में काम करते हैं।', es: 'Los chefs trabajan en un restaurante.', fr: 'Les chefs travaillent dans un restaurant.', de: 'Köche arbeiten in einem Restaurant.', pt: 'Chefs trabalham em um restaurante.', zh: '厨师在餐厅工作。', ar: 'الطهاة يعملون في المطعم.', ja: 'シェフはレストランで働きます。', ru: 'Шеф-повара работают в ресторане.' },
      audioText: 'restaurant',
      audioId: 'en_a1_u01_l02_v_restaurant',
      slowAudioId: 'en_a1_u01_l02_v_restaurant_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍽️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_studio',
      word: 'studio',
      phonetic: '/ˈstuːdioʊ/',
      meaning: 'Workroom for an artist or designer',
      translationsByLang: { hi: 'स्टूडियो / कार्यशाला', es: 'estudio / taller', fr: 'studio', de: 'Studio', pt: 'estúdio', zh: '工作室', ar: 'استوديو', ja: 'スタジオ / 工房', ru: 'студия' },
      exampleSentence: 'She paints in a bright studio.',
      exampleTranslationByLang: { hi: 'वह एक उज्ज्वल स्टूडियो में चित्रकारी करती हैं।', es: 'Ella pinta en un estudio luminoso.', fr: 'Elle peint dans un studio lumineux.', de: 'Sie malt in einem hellen Studio.', pt: 'Ela pinta em um estúdio iluminado.', zh: '她在采光良好的工作室里绘画。', ar: 'ترسم في استوديو مشرق.', ja: '彼女は明るいスタジオで絵を描きます。', ru: 'Она пишет картины в светлой студии.' },
      audioText: 'studio',
      audioId: 'en_a1_u01_l02_v_studio',
      slowAudioId: 'en_a1_u01_l02_v_studio_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🖼️',
      difficulty: 'A1 Beginner'
    },

    // Group 4: Workplace Verbs & Attributes
    {
      id: 'v_work',
      word: 'work',
      phonetic: '/wɜːrk/',
      meaning: 'To engage in physical or mental activity for a job',
      translationsByLang: { hi: 'काम करना / कार्य', es: 'trabajar / trabajo', fr: 'travailler', de: 'arbeiten', pt: 'trabalhar', zh: '工作', ar: 'يعمل', ja: '働く / 仕事', ru: 'работать' },
      exampleSentence: 'Where do you work?',
      exampleTranslationByLang: { hi: 'आप कहाँ काम करते हैं?', es: '¿Dónde trabajas?', fr: 'Où travaillez-vous ?', de: 'Wo arbeiten Sie?', pt: 'Onde você trabalha?', zh: '你在哪里工作？', ar: 'أين تعمل؟', ja: 'どこで働いていますか？', ru: 'Где вы работаете?' },
      audioText: 'work',
      audioId: 'en_a1_u01_l02_v_work',
      slowAudioId: 'en_a1_u01_l02_v_work_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⚙️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_study',
      word: 'study',
      phonetic: '/ˈstʌdi/',
      meaning: 'To devote time and attention to gaining knowledge',
      translationsByLang: { hi: 'पढ़ाई करना / अध्ययन करना', es: 'estudiar', fr: 'étudier', de: 'studieren / lernen', pt: 'estudar', zh: '学习', ar: 'يدرس', ja: '勉強する', ru: 'учиться' },
      exampleSentence: 'I study computer science.',
      exampleTranslationByLang: { hi: 'मैं कंप्यूटर साइंस पढ़ता हूँ।', es: 'Estudio informática.', fr: 'J\'étudie l\'informatique.', de: 'Ich studiere Informatik.', pt: 'Eu estudo ciência da computação.', zh: '我学习计算机科学。', ar: 'أدرس علوم الحاسوب.', ja: '私はコンピュータサイエンスを勉強しています。', ru: 'Я изучаю информатику.' },
      audioText: 'study',
      audioId: 'en_a1_u01_l02_v_study',
      slowAudioId: 'en_a1_u01_l02_v_study_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📖',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_job',
      word: 'job',
      phonetic: '/dʒɑːb/',
      meaning: 'Paid position of regular employment',
      translationsByLang: { hi: 'नौकरी / पेशा', es: 'trabajo / empleo', fr: 'emploi / travail', de: 'Job / Arbeit', pt: 'emprego / trabalho', zh: '工作 / 职业', ar: 'وظيفة', ja: '仕事 / 職', ru: 'работа / должность' },
      exampleSentence: 'She has a great job.',
      exampleTranslationByLang: { hi: 'उसके पास एक बढ़िया नौकरी है।', es: 'Ella tiene un buen trabajo.', fr: 'Elle a un excellent travail.', de: 'Sie hat einen tollen Job.', pt: 'Ela tem um ótimo emprego.', zh: '她有一份很棒的工作。', ar: 'لديها وظيفة رائعة.', ja: '彼女は素晴らしい仕事をしています。', ru: 'У нее отличная работа.' },
      audioText: 'job',
      audioId: 'en_a1_u01_l02_v_job',
      slowAudioId: 'en_a1_u01_l02_v_job_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💼',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_busy',
      word: 'busy',
      phonetic: '/ˈbɪzi/',
      meaning: 'Having a great deal to do',
      translationsByLang: { hi: 'व्यस्त', es: 'ocupado/a', fr: 'occupé', de: 'beschäftigt', pt: 'ocupado', zh: '忙碌的', ar: 'مشغول', ja: '忙しい', ru: 'занятой' },
      exampleSentence: 'The office is very busy today.',
      exampleTranslationByLang: { hi: 'आज दफ्तर बहुत व्यस्त है।', es: 'La oficina está muy ocupada hoy.', fr: 'Le bureau est très occupé aujourd\'hui.', de: 'Das Büro ist heute sehr beschäftigt.', pt: 'O escritório está muito ocupado hoje.', zh: '今天办公室非常忙碌。', ar: 'المكتب مشغول جدا اليوم.', ja: '今日オフィスはとても忙しいです。', ru: 'Сегодня в офисе очень много работы.' },
      audioText: 'busy',
      audioId: 'en_a1_u01_l02_v_busy',
      slowAudioId: 'en_a1_u01_l02_v_busy_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⌛',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_modern',
      word: 'modern',
      phonetic: '/ˈmɑːdərn/',
      meaning: 'Relating to the present or recent times',
      translationsByLang: { hi: 'आधुनिक', es: 'moderno/a', fr: 'moderne', de: 'modern', pt: 'moderno', zh: '现代的', ar: 'حديث', ja: '現代的な / モダンな', ru: 'современный' },
      exampleSentence: 'We work in a modern building.',
      exampleTranslationByLang: { hi: 'हम एक आधुनिक इमारत में काम करते हैं।', es: 'Trabajamos en un edificio moderno.', fr: 'Nous travaillons dans un bâtiment moderne.', de: 'Wir arbeiten in einem modernen Gebäude.', pt: 'Trabalhamos em um edifício moderno.', zh: '我们在栋现代化的楼里工作。', ar: 'نعمل في مبنى حديث.', ja: '私たちは現代的なビルで働いています。', ru: 'Мы работаем в современном здании.' },
      audioText: 'modern',
      audioId: 'en_a1_u01_l02_v_modern',
      slowAudioId: 'en_a1_u01_l02_v_modern_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏢',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks & Expressions
  expressions: [
    {
      id: 'e_what_do_you_do',
      expression: 'What do you do?',
      translationsByLang: { hi: 'आप क्या काम करते हैं?', es: '¿A qué te dedicas?', fr: 'Que faites-vous dans la vie ?', de: 'Was machen Sie beruflich?', pt: 'O que você faz?', zh: '你是做什么工作的？', ar: 'ماذا تعمل؟', ja: 'お仕事は何をされていますか？', ru: 'Чем вы занимаетесь?' },
      usageNote: 'Standard polite question to ask someone about their job or profession.',
      audioText: 'What do you do?',
      audioId: 'en_a1_u01_l02_e_what_do_you_do',
      slowAudioId: 'en_a1_u01_l02_e_what_do_you_do_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '❓'
    },
    {
      id: 'e_i_work_as_a',
      expression: 'I work as a / an...',
      translationsByLang: { hi: 'मैं एक... के रूप में काम करता हूँ', es: 'Trabajo como...', fr: 'Je travaille comme...', de: 'Ich arbeite als...', pt: 'Trabalho como...', zh: '我担任...', ar: 'أعمل كـ...', ja: '私は〜として働いています', ru: 'Я работаю...' },
      usageNote: 'Useful chunk for specifying job function or title.',
      audioText: 'I work as a software engineer.',
      audioId: 'en_a1_u01_l02_e_i_work_as_a',
      slowAudioId: 'en_a1_u01_l02_e_i_work_as_a_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💼'
    },
    {
      id: 'e_where_do_you_work',
      expression: 'Where do you work?',
      translationsByLang: { hi: 'आप कहाँ काम करते हैं?', es: '¿Dónde trabajas?', fr: 'Où travaillez-vous ?', de: 'Wo arbeiten Sie?', pt: 'Onde você trabalha?', zh: '你在哪里工作？', ar: 'أين تعمل؟', ja: 'どちらで働いていますか？', ru: 'Где вы работаете?' },
      usageNote: 'Question to ask about someone\'s workplace or company.',
      audioText: 'Where do you work?',
      audioId: 'en_a1_u01_l02_e_where_do_you_work',
      slowAudioId: 'en_a1_u01_l02_e_where_do_you_work_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📍'
    },
    {
      id: 'e_i_work_in_an_office',
      expression: 'I work in an office.',
      translationsByLang: { hi: 'मैं एक दफ्तर में काम करता हूँ।', es: 'Trabajo en una oficina.', fr: 'Je travaille dans un bureau.', de: 'Ich arbeite in einem Büro.', pt: 'Trabalho em um escritório.', zh: '我在办公室工作。', ar: 'أعمل في مكتب.', ja: '私はオフィスで働いています。', ru: 'Я работаю в офисе.' },
      usageNote: 'Note the article "an" before "office" due to the vowel sound /ɒ/.',
      audioText: 'I work in an office.',
      audioId: 'en_a1_u01_l02_e_i_work_in_an_office',
      slowAudioId: 'en_a1_u01_l02_e_i_work_in_an_office_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏢'
    },
    {
      id: 'e_she_works_at',
      expression: 'She works at a hospital.',
      translationsByLang: { hi: 'वह एक अस्पताल में काम करती हैं।', es: 'Ella trabaja en un hospital.', fr: 'Elle travaille dans un hôpital.', de: 'Sie arbeitet in einem Krankenhaus.', pt: 'Ela trabalha em um hospital.', zh: '她在医院工作。', ar: 'هي تعمل في مستشفى.', ja: '彼女は病院で働いています。', ru: 'Она работает в больнице.' },
      usageNote: 'Use "at" or "in" before workplace locations.',
      audioText: 'She works at a hospital.',
      audioId: 'en_a1_u01_l02_e_she_works_at',
      slowAudioId: 'en_a1_u01_l02_e_she_works_at_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏥'
    },
    {
      id: 'e_are_you_a_student',
      expression: 'Are you a student?',
      translationsByLang: { hi: 'क्या आप एक छात्र हैं?', es: '¿Eres estudiante?', fr: 'Êtes-vous étudiant ?', de: 'Bist du Student?', pt: 'Você é estudante?', zh: '你是学生吗？', ar: 'هل أنت طالب؟', ja: 'あなたは学生ですか？', ru: 'Вы студент?' },
      usageNote: 'Yes/No question form with verb BE and article "a".',
      audioText: 'Are you a student?',
      audioId: 'en_a1_u01_l02_e_are_you_a_student',
      slowAudioId: 'en_a1_u01_l02_e_are_you_a_student_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎓'
    },
    {
      id: 'e_i_am_not_a',
      expression: 'I am not a doctor.',
      translationsByLang: { hi: 'मैं डॉक्टर नहीं हूँ।', es: 'No soy médico.', fr: 'Je ne suis pas médecin.', de: 'Ich bin kein Arzt.', pt: 'Não sou médico.', zh: '我不是医生。', ar: 'لست طبيبا.', ja: '私は医師ではありません。', ru: 'Я не врач.' },
      usageNote: 'Negative form: Subject + am/is/are + not + a/an + job.',
      audioText: 'I am not a doctor.',
      audioId: 'en_a1_u01_l02_e_i_am_not_a',
      slowAudioId: 'en_a1_u01_l02_e_i_am_not_a_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚫'
    },
    {
      id: 'e_nice_working_with_you',
      expression: 'Nice to meet you. What do you do?',
      translationsByLang: { hi: 'आपसे मिलकर खुशी हुई। आप क्या काम करते हैं?', es: 'Gusto en conocerte. ¿A qué te dedicas?', fr: 'Ravi de vous rencontrer. Que faites-vous ?', de: 'Schön Sie kennenzulernen. Was machen Sie?', pt: 'Prazer em conhecê-lo. O que você faz?', zh: '很高兴认识你。你是做什么工作的？', ar: 'سررت بلقائك. ماذا تعمل؟', ja: 'お会いできて嬉しいです。お仕事は何ですか？', ru: 'Приятно познакомиться. Чем вы занимаетесь?' },
      usageNote: 'Combines Lesson 1 greeting with Lesson 2 profession question.',
      audioText: 'Nice to meet you. What do you do?',
      audioId: 'en_a1_u01_l02_e_nice_working_with_you',
      slowAudioId: 'en_a1_u01_l02_e_nice_working_with_you_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🤝'
    }
  ],

  // SECTION 5 & 6: Grammar Rules & Indefinite Articles System
  grammar: {
    title: 'Indefinite Articles (A / An) with Occupations',
    concept: 'In English, singular professions and countable workplace nouns ALWAYS require an article: "a" before consonant sounds, and "an" before vowel sounds.',
    conceptsByLang: {
      hi: 'अंग्रेजी में एकवचन व्यवसायों से पहले "a" या "an" लगाना अनिवार्य है। व्यंजन ध्वनि (B, C, D...) से पहले "a" और स्वर ध्वनि (A, E, I, O, U) से पहले "an" का प्रयोग होता है।',
      es: 'En inglés, los trabajos en singular SIEMPRE llevan artículo: "a" antes de sonido consonante y "an" antes de sonido vocal.',
      fr: 'En anglais, les professions au singulier prennent TOUJOURS un article : "a" devant un son consonne, "an" devant un son voyelle.',
      de: 'Im Englischen steht vor Berufen im Singular IMMER ein Artikel: "a" vor Konsonantenlauten, "an" vor Vokallauten.',
      pt: 'Em inglês, profissões no singular SEMPRE exigem artigo: "a" antes de consoante e "an" antes de vogal.',
      zh: '在英语中，单数职业名词前必须加冠词：辅音音素前用“a”，元音音素前用“an”。',
      ar: 'في الإنجليزية، تأتي المهن بالمفرد دائماً مع أداة تنكير: "a" قبل الأصوات الساكنة و "an" قبل الأصوات المتحركة.',
      ja: '英語では、単数の職業には必ず冠詞がつきます。子音で始まる音の前には「a」、母音で始まる音の前には「an」を使います。',
      ru: 'В английском языке перед профессиями в единственном числе ОБЯЗАТЕЛЬНО используется артикль: "a" перед согласными звуками, "an" перед гласными.'
    },
    verbBeExplanation: {
      title: 'Article System: "A" vs "An" Paradigm',
      content: 'Always listen to the SOUND of the word following the article, not just the spelling.',
      contractionsTable: [
        { full: 'a doctor', contracted: 'a doctor', meaningByLang: { hi: 'एक डॉक्टर (व्यंजन sound /d/)', es: 'un médico', fr: 'un médecin', de: 'ein Arzt', pt: 'um médico', zh: '一名医生', ar: 'طبيب', ja: '一人の医師', ru: 'врач' } },
        { full: 'a teacher', contracted: 'a teacher', meaningByLang: { hi: 'एक शिक्षक (व्यंजन sound /t/)', es: 'un profesor', fr: 'un enseignant', de: 'ein Lehrer', pt: 'um professor', zh: '一名教师', ar: 'معلم', ja: '一人の教師', ru: 'учитель' } },
        { full: 'a manager', contracted: 'a manager', meaningByLang: { hi: 'एक प्रबंधक (व्यंजन sound /m/)', es: 'un gerente', fr: 'un manager', de: 'ein Manager', pt: 'um gerente', zh: '一名经理', ar: 'مدير', ja: '一人のマネージャー', ru: 'менеджер' } },
        { full: 'an engineer', contracted: 'an engineer', meaningByLang: { hi: 'एक इंजीनियर (स्वर sound /e/)', es: 'un ingeniero', fr: 'un ingénieur', de: 'ein Ingenieur', pt: 'um engenheiro', zh: '一名工程师', ar: 'مهندس', ja: '一人のエンジニア', ru: 'инженер' } },
        { full: 'an accountant', contracted: 'an accountant', meaningByLang: { hi: 'एक अकाउंटेंट (स्वर sound /æ/)', es: 'un contador', fr: 'un comptable', de: 'ein Buchhalter', pt: 'um contador', zh: '一名会计', ar: 'محاسب', ja: '一人の会計士', ru: 'бухгалтер' } },
        { full: 'an office', contracted: 'an office', meaningByLang: { hi: 'एक दफ्तर (स्वर sound /ɒ/)', es: 'una oficina', fr: 'un bureau', de: 'ein Büro', pt: 'um escritório', zh: '间办公室', ar: 'مكتب', ja: '一つのオフィス', ru: 'офис' } },
        { full: 'an architect', contracted: 'an architect', meaningByLang: { hi: 'एक आर्किटेक्ट (स्वर sound /ɑː/)', es: 'un arquitecto', fr: 'un architecte', de: 'ein Architekt', pt: 'um arquiteto', zh: '一名建筑师', ar: 'مهندس معماري', ja: '一人の建築家', ru: 'архитектор' } },
        { full: 'an artist', contracted: 'an artist', meaningByLang: { hi: 'एक कलाकार (स्वर sound /ɑː/)', es: 'un artista', fr: 'un artiste', de: 'ein Künstler', pt: 'um artista', zh: '一名艺术家', ar: 'فنان', ja: '一人の画家', ru: 'художник' } }
      ]
    },
    patterns: [
      {
        structure: 'Subject + Verb BE + a/an + Profession',
        explanation: 'Standard pattern for stating your job or someone else\'s job.',
        explanationsByLang: {
          hi: 'अपना या किसी और का पेशा बताने का मानक पैटर्न।',
          es: 'Patrón estándar para decir tu trabajo o el de otra persona.',
          fr: 'Modèle standard pour énoncer sa profession ou celle de quelqu\'un.',
          de: 'Muster zum Nennen des eigenen oder fremden Berufs.',
          pt: 'Padrão para dizer seu trabalho ou o de outra pessoa.',
          zh: '说明自己或他人职业的标准句型。',
          ar: 'النمط القياسي لذكر وظيفتك أو وظيفة شخص آخر.',
          ja: '自分や他の人の職業を伝える標準パターン。',
          ru: 'Стандартная схема для сообщения о своей или чужой профессии.'
        },
        examples: [
          { english: 'I am a software engineer.', translationByLang: { hi: 'मैं एक सॉफ्टवेयर इंजीनियर हूँ।', es: 'Soy ingeniero de software.', fr: 'Je suis ingénieur logiciel.', de: 'Ich bin Softwareingenieur.', pt: 'Eu sou engenheiro de software.', zh: '我是软件工程师。', ar: 'أنا مهندس برمجيات.', ja: '私はソフトウェアエンジニアです。', ru: 'Я инженер-программист.' } },
          { english: 'She is an accountant.', translationByLang: { hi: 'वह एक अकाउंटेंट है।', es: 'Ella es contadora.', fr: 'Elle est comptable.', de: 'Sie ist Buchhalterin.', pt: 'Ela é contadora.', zh: '她是一名会计。', ar: 'هي محاسبة.', ja: '彼女は会計士です。', ru: 'Она бухгалтер.' } }
        ]
      },
      {
        structure: 'Subject + Verb BE + not + a/an + Profession',
        explanation: 'Negative pattern for stating what profession someone does NOT have.',
        explanationsByLang: {
          hi: 'नकारात्मक पैटर्न - यह बताने के लिए कि कोई व्यक्ति क्या काम नहीं करता।',
          es: 'Patrón negativo para decir qué profesión no se tiene.',
          fr: 'Forme négative pour indiquer ce qu\'on ne fait pas.',
          de: 'Negationsmuster zur Angabe, welchen Beruf man nicht ausübt.',
          pt: 'Padrão negativo para dizer qual profissão alguém não tem.',
          zh: '否定句型，说明某人不是某种职业。',
          ar: 'النمط النفي لذكر أن شخصًا ما لا يعمل بمهنة معينة.',
          ja: 'その職業ではないことを伝える否定パターン。',
          ru: 'Отрицательная схема для сообщения о том, кем человек не работает.'
        },
        examples: [
          { english: 'He isn\'t a doctor. He is a nurse.', translationByLang: { hi: 'वह डॉक्टर नहीं हैं। वह एक नर्स हैं।', es: 'Él no es médico. Es enfermero.', fr: 'Il n\'est pas médecin. Il est infirmier.', de: 'Er ist kein Arzt. Er ist Krankenpfleger.', pt: 'Ele não é médico. É enfermeiro.', zh: '他不是医生。他是护士。', ar: 'هو ليس طبيبا. هو ممرض.', ja: '休は医師ではありません。看護師です。', ru: 'Он не врач. Он медбрат.' } }
        ]
      },
      {
        structure: 'Verb BE + Subject + a/an + Profession?',
        explanation: 'Interrogative pattern for asking yes/no questions about occupations.',
        explanationsByLang: {
          hi: 'प्रश्नवाचक पैटर्न - पेशे के बारे में हाँ/ना में सवाल पूछने के लिए।',
          es: 'Patrón interrogativo para preguntas de sí/no sobre profesiones.',
          fr: 'Forme interrogative pour poser des questions fermées sur le métier.',
          de: 'Fragemuster für Ja/Nein-Fragen zu Berufen.',
          pt: 'Padrão interrogativo para perguntas de sim/não sobre profissões.',
          zh: '疑问句型，询问是否从事某种职业。',
          ar: 'النمط الاستفهامي للأسئلة بنعم/لا عن المهن.',
          ja: '職業についてはい/いいえで答える質問パターン。',
          ru: 'Вопросительная схема для вопросов с ответом да/нет о профессии.'
        },
        examples: [
          { english: 'Are you a teacher?', translationByLang: { hi: 'क्या आप एक शिक्षक हैं?', es: '¿Eres profesor?', fr: 'Êtes-vous enseignant ?', de: 'Bist du Lehrer?', pt: 'Você é professor?', zh: '你是老师吗？', ar: 'هل أنت معلم؟', ja: 'あなたは先生ですか？', ru: 'Вы учитель?' } },
          { english: 'Is she an architect?', translationByLang: { hi: 'क्या वह एक आर्किटेक्ट हैं?', es: '¿Ella es arquitecta?', fr: 'Est-elle architecte ?', de: 'Ist sie Architektin?', pt: 'Ela é arquiteta?', zh: '她是建筑师吗？', ar: 'هل هي مهندسة معمارية؟', ja: '彼女は建築家ですか？', ru: 'Она архитектор?' } }
        ]
      }
    ]
  },

  // SECTION 7: Common Errors & Remedies
  commonMistakes: [
    {
      id: 'cm_no_article',
      incorrect: 'I am doctor.',
      correct: 'I am a doctor.',
      whyExplanation: 'In English, singular job titles require "a" or "an". You cannot say "I am doctor" without an article.',
      explanationsByLang: {
        hi: 'अंग्रेजी में एकवचन पेशे से पहले "a" या "an" लगाना अनिवार्य है। केवल "I am doctor" कहना गलत है।',
        es: 'En inglés, las profesiones en singular SIEMPRE llevan "a" o "an". No se puede omitir.',
        fr: 'En anglais, les métiers au singulier prennent obligatoirement "a" ou "an".',
        de: 'Im Englischen benötigen Berufe im Singular immer den Artikel "a" oder "an".',
        pt: 'Em inglês, profissões no singular SEMPRE usam "a" ou "an".',
        zh: '英语中单数职业名称前必须加“a”或“an”，不能省略。',
        ar: 'في الإنجليزية، تتطلب المهن بالمفرد أدوات التنكير "a" أو "an" دائماً.',
        ja: '英語では、単数の職業の前に「a」または「an」が必須です。',
        ru: 'В английском языке перед профессиями в единственном числе ОБЯЗАТЕЛЬНО нужен артикль "a" или "an".'
      }
    },
    {
      id: 'cm_wrong_article',
      incorrect: 'She is a engineer.',
      correct: 'She is an engineer.',
      whyExplanation: 'Use "an" because "engineer" starts with a vowel sound /e/. "A engineer" sounds unnatural and hard to pronounce.',
      explanationsByLang: {
        hi: '"Engineer" की शुरुआत स्वर ध्वनि /e/ से होती है, इसलिए "an" का प्रयोग होगा, "a" का नहीं।',
        es: 'Usa "an" porque "engineer" comienza con un sonido vocálico /e/.',
        fr: 'Utilisez "an" car "engineer" commence par le son voyelle /e/.',
        de: 'Verwenden Sie "an", da "engineer" mit einem Vokallaut /e/ beginnt.',
        pt: 'Use "an" porque "engineer" começa com som de vogal /e/.',
        zh: '“Engineer”以元音音素/e/开头，因此必须用“an”。',
        ar: 'استخدم "an" لأن "engineer" تبدأ بصوت متحرك /e/.',
        ja: '「engineer」は母音/e/で始まるため、「an」を使用します。',
        ru: 'Используйте "an", так как слово "engineer" начинается с гласного звука /e/.'
      }
    },
    {
      id: 'cm_no_verb_be',
      incorrect: 'He manager in office.',
      correct: 'He is a manager in an office.',
      whyExplanation: 'Every English sentence needs a verb ("is") and articles before singular nouns ("a manager", "an office").',
      explanationsByLang: {
        hi: 'वाक्य में verb BE ("is") और संज्ञाओं से पहले "a"/"an" लगाना जरूरी है।',
        es: 'Cada oración necesita el verbo "is" y artículos antes de los sustantivos en singular.',
        fr: 'Chaque phrase nécessite le verbe "is" et les articles devant les noms au singulier.',
        de: 'Jeder Satz benötigt das Verb "is" und Artikel vor Nomen im Singular.',
        pt: 'Cada frase precisa do verbo "is" e artigos antes de substantivos no singular.',
        zh: '句子需要动词“is”以及单数名词前的冠词“a/an”。',
        ar: 'تتطلب كل جملة الفعل "is" وأدوات التنكير قبل الأسماء المفردة.',
        ja: 'be動詞「is」と単数名詞前の冠詞「a/an」が必要です。',
        ru: 'В предложении обязательно нужен глагол "is" и артикли перед существительными.'
      }
    },
    {
      id: 'cm_confuse_work_live',
      incorrect: 'I live in an office.',
      correct: 'I work in an office.',
      whyExplanation: '"Live in" refers to your home or city (Lesson 1). "Work in" refers to your workplace or job location (Lesson 2).',
      explanationsByLang: {
        hi: '"Live in" निवास स्थान के लिए है (पाठ 1)। कार्यस्थल के लिए "Work in" का प्रयोग करें (पाठ 2)।',
        es: '"Live in" es para tu casa o ciudad. "Work in" es para tu lugar de trabajo.',
        fr: '"Live in" désigne votre logement. "Work in" désigne votre lieu de travail.',
        de: '"Live in" bezieht sich auf den Wohnort. "Work in" bezieht sich auf den Arbeitsplatz.',
        pt: '"Live in" refere-se à sua casa. "Work in" refere-se ao seu local de trabalho.',
        zh: '“Live in”用于居住地（第1课），“Work in”用于工作场所（第2课）。',
        ar: '"Live in" للإقامة، بينما "Work in" لمكان العمل.',
        ja: '「Live in」は住居用、「Work in」は職場用です。',
        ru: '«Live in» относится к месту жительства, «Work in» — к месту работы.'
      }
    }
  ],

  // SECTION 11: Multi-Voice Authentic Dialogues
  dialogues: [
    {
      id: 'd_office_onboarding',
      title: 'Co-Worker Introduction at the Office',
      context: 'Priya and Alex meet on Alex\'s first day at a tech company in London.',
      lines: [
        {
          speaker: 'Priya',
          avatar: '👩‍💼',
          text: 'Hello! Welcome to the company. My name is Priya.',
          translationsByLang: { hi: 'नमस्ते! कंपनी में आपका स्वागत है। मेरा नाम प्रिया है।', es: '¡Hola! Bienvenido a la empresa. Me llamo Priya.' },
          audioText: 'Hello! Welcome to the company. My name is Priya.',
          audioId: 'en_a1_u01_l02_d1_1',
          voiceId: 'EN_TEACHER_01'
        },
        {
          speaker: 'Alex',
          avatar: '👨‍💼',
          text: 'Hi Priya! Nice to meet you. I\'m Alex.',
          translationsByLang: { hi: 'हाय प्रिया! आपसे मिलकर अच्छा लगा। मैं एलेक्स हूँ।', es: '¡Hola Priya! Gusto en conocerte. Soy Alex.' },
          audioText: 'Hi Priya! Nice to meet you. I\'m Alex.',
          audioId: 'en_a1_u01_l02_d1_2',
          voiceId: 'EN_MALE_01'
        },
        {
          speaker: 'Priya',
          avatar: '👩‍💼',
          text: 'Nice to meet you too, Alex. What do you do here?',
          translationsByLang: { hi: 'आपसे मिलकर भी खुशी हुई, एलेक्स। आप यहाँ क्या काम करते हैं?', es: 'Gusto en conocerte también, Alex. ¿A qué te dedicas aquí?' },
          audioText: 'Nice to meet you too, Alex. What do you do here?',
          audioId: 'en_a1_u01_l02_d1_3',
          voiceId: 'EN_TEACHER_01'
        },
        {
          speaker: 'Alex',
          avatar: '👨‍💼',
          text: 'I am a software engineer. Are you an engineer too?',
          translationsByLang: { hi: 'मैं एक सॉफ्टवेयर इंजीनियर हूँ। क्या आप भी इंजीनियर हैं?', es: 'Soy ingeniero de software. ¿Tú también eres ingeniera?' },
          audioText: 'I am a software engineer. Are you an engineer too?',
          audioId: 'en_a1_u01_l02_d1_4',
          voiceId: 'EN_MALE_01'
        },
        {
          speaker: 'Priya',
          avatar: '👩‍💼',
          text: 'No, I\'m not an engineer. I\'m a product manager.',
          translationsByLang: { hi: 'नहीं, मैं इंजीनियर नहीं हूँ। मैं एक प्रोडक्ट मैनेजर हूँ।', es: 'No, no soy ingeniera. Soy gerente de producto.' },
          audioText: 'No, I\'m not an engineer. I\'m a product manager.',
          audioId: 'en_a1_u01_l02_d1_5',
          voiceId: 'EN_TEACHER_01'
        }
      ]
    },
    {
      id: 'd_coffee_networking',
      title: 'Networking over Coffee',
      context: 'Carlos and Sarah meet at an international conference coffee break.',
      lines: [
        {
          speaker: 'Carlos',
          avatar: '👨‍💼',
          text: 'Good morning! Where are you from?',
          translationsByLang: { hi: 'सुप्रभात! आप कहाँ से हैं?', es: '¡Buenos días! ¿De dónde eres?' },
          audioText: 'Good morning! Where are you from?',
          audioId: 'en_a1_u01_l02_d2_1',
          voiceId: 'EN_MALE_01'
        },
        {
          speaker: 'Sarah',
          avatar: '👩‍🔬',
          text: 'Good morning! I\'m from Canada. Where do you work?',
          translationsByLang: { hi: 'सुप्रभात! मैं कनाडा से हूँ। आप कहाँ काम करते हैं?', es: '¡Buenos días! Soy de Canadá. ¿Dónde trabajas?' },
          audioText: 'Good morning! I\'m from Canada. Where do you work?',
          audioId: 'en_a1_u01_l02_d2_2',
          voiceId: 'EN_TEACHER_01'
        },
        {
          speaker: 'Carlos',
          avatar: '👨‍💼',
          text: 'I work at a hospital in Madrid. I\'m a doctor. And you?',
          translationsByLang: { hi: 'मैं मैड्रिड के एक अस्पताल में काम करता हूँ। मैं डॉक्टर हूँ। और आप?', es: 'Trabajo en un hospital en Madrid. Soy médico. ¿Y tú?' },
          audioText: 'I work at a hospital in Madrid. I\'m a doctor. And you?',
          audioId: 'en_a1_u01_l02_d2_3',
          voiceId: 'EN_MALE_01'
        },
        {
          speaker: 'Sarah',
          avatar: '👩‍🔬',
          text: 'I\'m an architect. I work in a design studio in Toronto.',
          translationsByLang: { hi: 'मैं एक आर्किटेक्ट हूँ। मैं टोरंटो में एक डिजाइन स्टूडियो में काम करती हूँ।', es: 'Soy arquitecta. Trabajo en un estudio de diseño en Toronto.' },
          audioText: 'I\'m an architect. I work in a design studio in Toronto.',
          audioId: 'en_a1_u01_l02_d2_4',
          voiceId: 'EN_TEACHER_01'
        }
      ]
    }
  ],

  // SECTION 8, 9, 10, 12, 13, 14, 15: Rich Interactive Practice Exercises (~45 Items)
  practiceExercises: [
    // Category 1: Recognition & Multiple Choice (1-6)
    {
      id: 'pe_l2_1',
      type: 'recognition',
      prompt: 'Choose the correct profession for someone who treats sick people in a hospital:',
      options: [
        { id: 'o1', text: 'doctor', isCorrect: true },
        { id: 'o2', text: 'teacher', isCorrect: false },
        { id: 'o3', text: 'chef', isCorrect: false }
      ],
      explanation: 'A doctor is a medical professional who works at a hospital.'
    },
    {
      id: 'pe_l2_2',
      type: 'recognition',
      prompt: 'Choose the correct workplace for a university student or professor:',
      options: [
        { id: 'o1', text: 'university', isCorrect: true },
        { id: 'o2', text: 'restaurant', isCorrect: false },
        { id: 'o3', text: 'studio', isCorrect: false }
      ],
      explanation: 'Students and professors study and teach at a university.'
    },
    {
      id: 'pe_l2_3',
      type: 'multiple_choice',
      prompt: 'Select the sentence with the CORRECT article:',
      options: [
        { id: 'o1', text: 'He is an engineer.', isCorrect: true },
        { id: 'o2', text: 'He is a engineer.', isCorrect: false },
        { id: 'o3', text: 'He is engineer.', isCorrect: false }
      ],
      explanation: 'Use "an" before vowel sounds like /e/ in "engineer".'
    },
    {
      id: 'pe_l2_4',
      type: 'multiple_choice',
      prompt: 'Select the sentence with the CORRECT article:',
      options: [
        { id: 'o1', text: 'I am a doctor.', isCorrect: true },
        { id: 'o2', text: 'I am an doctor.', isCorrect: false },
        { id: 'o3', text: 'I am doctor.', isCorrect: false }
      ],
      explanation: 'Use "a" before consonant sounds like /d/ in "doctor".'
    },
    {
      id: 'pe_l2_5',
      type: 'multiple_choice',
      prompt: 'Which phrase asks someone about their profession?',
      options: [
        { id: 'o1', text: 'What do you do?', isCorrect: true },
        { id: 'o2', text: 'Where do you live?', isCorrect: false },
        { id: 'o3', text: 'Where are you from?', isCorrect: false }
      ],
      explanation: '"What do you do?" is the standard question to ask about someone\'s job.'
    },

    // Category 2: Fill in the Blank (7-12)
    {
      id: 'pe_l2_6',
      type: 'fill_blank',
      prompt: 'Choose "a" or "an" to complete the sentence:',
      sourceSentence: 'She works as ____ accountant in London.',
      targetSentence: 'She works as an accountant in London.',
      blankIndex: 3,
      options: [
        { id: 'o1', text: 'an', isCorrect: true },
        { id: 'o2', text: 'a', isCorrect: false }
      ],
      explanation: '"Accountant" begins with a vowel sound /æ/, so use "an".'
    },
    {
      id: 'pe_l2_7',
      type: 'fill_blank',
      prompt: 'Complete the sentence:',
      sourceSentence: 'I am ____ teacher at a primary school.',
      targetSentence: 'I am a teacher at a primary school.',
      blankIndex: 2,
      options: [
        { id: 'o1', text: 'a', isCorrect: true },
        { id: 'o2', text: 'an', isCorrect: false }
      ],
      explanation: '"Teacher" begins with a consonant sound /t/, so use "a".'
    },
    {
      id: 'pe_l2_8',
      type: 'fill_blank',
      prompt: 'Complete the question:',
      sourceSentence: '____ do you work? I work in an office.',
      targetSentence: 'Where do you work? I work in an office.',
      blankIndex: 0,
      options: [
        { id: 'o1', text: 'Where', isCorrect: true },
        { id: 'o2', text: 'What', isCorrect: false },
        { id: 'o3', text: 'Who', isCorrect: false }
      ],
      explanation: 'Use "Where" to ask about workplace location.'
    },
    {
      id: 'pe_l2_9',
      type: 'fill_blank',
      prompt: 'Complete the negative sentence:',
      sourceSentence: 'He ____ a doctor. He is a nurse.',
      targetSentence: 'He isn\'t a doctor. He is a nurse.',
      blankIndex: 1,
      options: [
        { id: 'o1', text: 'isn\'t', isCorrect: true },
        { id: 'o2', text: 'aren\'t', isCorrect: false },
        { id: 'o3', text: 'am not', isCorrect: false }
      ],
      explanation: 'Subject "He" uses "is not" / "isn\'t".'
    },

    // Category 3: Sentence Construction & Tile Assembly (13-18)
    {
      id: 'pe_l2_10',
      explanation: 'Use \'I am\' + a or an + job. Use \'a\' before a consonant sound, as in \'a software engineer\'.',
      type: 'word_ordering',
      prompt: 'Arrange the word tiles to state your profession:',
      targetSentence: 'I am a software engineer',
      wordBank: ['I', 'am', 'a', 'software', 'engineer', 'an', 'teacher', 'from']
    },
    {
      id: 'pe_l2_11',
      explanation: 'To ask about someone\'s job, use \'What do you do?\' The helper verb \'do\' comes before the subject \'you\'.',
      type: 'word_ordering',
      prompt: 'Arrange the tiles to ask what someone does:',
      targetSentence: 'What do you do',
      wordBank: ['What', 'do', 'you', 'do', 'where', 'are', 'live']
    },
    {
      id: 'pe_l2_12',
      explanation: 'With \'she\' (third person), add -s to the verb: \'works\'. Use \'in\' before a place such as an office, and \'an\' before a vowel sound.',
      type: 'word_ordering',
      prompt: 'Arrange the tiles to describe a workplace:',
      targetSentence: 'She works in an office',
      wordBank: ['She', 'works', 'in', 'an', 'office', 'a', 'hospital', 'at']
    },
    {
      id: 'pe_l2_13',
      explanation: '\'Where do you work?\' is a question: question word + do + you + base verb. With \'you\', the verb has no -s.',
      type: 'question_formation',
      prompt: 'Construct the question to ask where someone works:',
      targetSentence: 'Where do you work',
      wordBank: ['Where', 'do', 'you', 'work', 'what', 'are', 'live']
    },
    {
      id: 'pe_l2_14',
      explanation: 'Yes/no questions with \'be\' start with the verb: \'Is she...?\' Here \'an architect\' takes \'an\' because \'architect\' starts with a vowel sound.',
      type: 'question_formation',
      prompt: 'Construct a Yes/No question asking if she is an architect:',
      targetSentence: 'Is she an architect',
      wordBank: ['Is', 'she', 'an', 'architect', 'a', 'doctor', 'are']
    },

    // Category 4: Listening & Dictation (19-24)
    {
      id: 'pe_l2_15',
      explanation: 'Listen for the job title. The speaker says \'I work as an architect\', so \'architect\' is the correct answer.',
      type: 'listening',
      prompt: 'Listen to the audio and choose the profession you hear:',
      audioText: 'I work as an architect in Toronto.',
      targetSentence: 'I work as an architect in Toronto.',
      options: [
        { id: 'o1', text: 'architect', isCorrect: true },
        { id: 'o2', text: 'accountant', isCorrect: false },
        { id: 'o3', text: 'artist', isCorrect: false }
      ]
    },
    {
      id: 'pe_l2_16',
      explanation: 'Write the question exactly as you hear it, with a question mark: \'Where do you work?\'',
      type: 'listen_type',
      prompt: 'Listen and arrange the tiles to complete what you hear:',
      audioText: 'Where do you work?',
      targetSentence: 'Where do you work',
      wordBank: ['Where', 'do', 'you', 'work', 'what', 'are', 'from']
    },
    {
      id: 'pe_l2_17',
      explanation: 'Use \'is\' with \'she\' (he, she, it). Write the sentence in full: \'She is a doctor at the hospital.\'',
      type: 'listen_and_type',
      prompt: 'Listen and write the sentence you hear:',
      audioText: 'She is a doctor at the hospital.',
      targetSentence: 'She is a doctor at the hospital.',
      correctAnswer: 'She is a doctor at the hospital.'
    },

    // Category 5: Speaking & Shadowing (25-28)
    {
      id: 'pe_l2_18',
      explanation: 'Say \'I am a software engineer\' clearly. Stress the word \'engineer\' on its last syllable: en-gi-NEER.',
      type: 'speak_sentence',
      prompt: 'Speak this sentence into your microphone:',
      targetSentence: 'I am a software engineer.',
      audioText: 'I am a software engineer.'
    },
    {
      id: 'pe_l2_19',
      explanation: 'Say \'She works in an office\' with a clear -s on \'works\'. Keep the sentence in the present simple.',
      type: 'speak_sentence',
      prompt: 'Speak this sentence clearly:',
      targetSentence: 'She works in an office.',
      audioText: 'She works in an office.'
    },

    // Category 6: Translation / Mediation (29-32)
    {
      id: 'pe_l2_20',
      explanation: 'Use \'I am\' + a + job: \'मैं एक शिक्षक हूँ।\' \'Teacher\' starts with a consonant sound, so use \'a\'.',
      type: 'translate_tiles',
      prompt: 'Translate into English:',
      sourceSentence: 'मैं एक शिक्षक हूँ। / Soy profesor.',
      sourceTranslations: { hi: 'मैं एक शिक्षक हूँ।', es: 'Soy profesor.' },
      targetSentence: 'I am a teacher',
      wordBank: ['I', 'am', 'a', 'teacher', 'an', 'doctor', 'work']
    },
    {
      id: 'pe_l2_21',
      explanation: 'Use \'He is\' for a man. \'Engineer\' starts with a vowel sound, so the article is \'an\'.',
      type: 'translation',
      prompt: 'Translate this job statement into English:',
      sourceSentence: 'वह एक इंजीनियर है। / Él es ingeniero.',
      sourceTranslations: { hi: 'वह एक इंजीनियर है।', es: 'Él es ingeniero.' },
      targetSentence: 'He is an engineer.',
      correctAnswer: 'He is an engineer.'
    },

    // Category 7: Interleaved & Recycled Lesson 1 + Lesson 2 (33-38)
    {
      id: 'pe_l2_22',
      explanation: 'A self-introduction usually follows this order: greeting, name, origin (\'from Canada\'), then job.',
      type: 'word_ordering',
      prompt: 'Interleaved Practice: Combine introduction, origin, and job:',
      targetSentence: 'Hello I am Alex from Canada and I am a doctor',
      wordBank: ['Hello', 'I', 'am', 'Alex', 'from', 'Canada', 'and', 'I', 'am', 'a', 'doctor', 'an', 'engineer']
    },
    {
      id: 'pe_l2_23',
      explanation: '\'Architect\' starts with a vowel sound, so use \'am an\': \'I am an architect.\' \'am a\' is wrong here.',
      type: 'fill_blank',
      prompt: 'Interleaved Practice: Complete both verb BE and article:',
      sourceSentence: 'My name is Sarah. I ____ ____ architect.',
      targetSentence: 'My name is Sarah. I am an architect.',
      blankIndex: 4,
      options: [
        { id: 'o1', text: 'am an', isCorrect: true },
        { id: 'o2', text: 'am a', isCorrect: false },
        { id: 'o3', text: 'is an', isCorrect: false }
      ]
    }
  ],

  // SECTION 16: Lesson Review & Synthesis
  reviewExercises: [
    {
      id: 're_l2_1',
      type: 'multiple_choice',
      prompt: 'Choose the correct article: "an" is used before:',
      options: [
        { id: 'o1', text: 'Vowel sounds (A, E, I, O, U)', isCorrect: true },
        { id: 'o2', text: 'Consonant sounds (B, C, D...)', isCorrect: false },
        { id: 'o3', text: 'Plural words only', isCorrect: false }
      ],
      explanation: '"An" is used before vowel sounds (an engineer, an office).'
    },
    {
      id: 're_l2_2',
      explanation: 'Introduce yourself with \'I am\' + name, then the job with \'a\' before a consonant sound: \'a manager\'.',
      type: 'word_ordering',
      prompt: 'Review: Arrange tiles to form a complete introduction with job:',
      targetSentence: 'Hi I am Priya and I am a manager',
      wordBank: ['Hi', 'I', 'am', 'Priya', 'and', 'I', 'am', 'a', 'manager', 'an', 'doctor']
    },
    {
      id: 're_l2_3',
      explanation: '\'What do you do?\' asks about a job. \'Where\' asks about a place and \'Who\' asks about a person.',
      type: 'fill_blank',
      prompt: 'Review: Select the correct question phrase:',
      sourceSentence: '____ do you do? I am an accountant.',
      targetSentence: 'What do you do? I am an accountant.',
      blankIndex: 0,
      options: [
        { id: 'o1', text: 'What', isCorrect: true },
        { id: 'o2', text: 'Where', isCorrect: false },
        { id: 'o3', text: 'Who', isCorrect: false }
      ]
    },
    {
      id: 're_l2_4',
      explanation: '\'Where do you work?\' asks for a place. Keep \'do\' before \'you\' and use the base verb \'work\' (no -s).',
      type: 'translate_tiles',
      prompt: 'Review Translation: Translate to English:',
      sourceSentence: 'आप कहाँ काम करते हैं? / ¿Dónde trabajas?',
      sourceTranslations: { hi: 'आप कहाँ काम करते हैं?', es: '¿Dónde trabajas?' },
      targetSentence: 'Where do you work',
      wordBank: ['Where', 'do', 'you', 'work', 'what', 'are', 'live']
    }
  ],

  // SECTION 17: Lesson 2 Mastery Assessment (12 Items)
  assessmentExercises: [
    {
      id: 'ae_l2_1',
      type: 'multiple_choice',
      prompt: 'Mastery Test 1: Complete: "She is ____ doctor."',
      options: [
        { id: 'o1', text: 'a', isCorrect: true },
        { id: 'o2', text: 'an', isCorrect: false },
        { id: 'o3', text: '(no article)', isCorrect: false }
      ],
      explanation: '"Doctor" starts with a consonant sound /d/.'
    },
    {
      id: 'ae_l2_2',
      type: 'multiple_choice',
      prompt: 'Mastery Test 2: Complete: "He is ____ software engineer."',
      options: [
        { id: 'o1', text: 'a', isCorrect: true },
        { id: 'o2', text: 'an', isCorrect: false }
      ],
      explanation: '"Software" starts with a consonant sound /s/.'
    },
    {
      id: 'ae_l2_3',
      type: 'multiple_choice',
      prompt: 'Mastery Test 3: Complete: "I work in ____ office."',
      options: [
        { id: 'o1', text: 'an', isCorrect: true },
        { id: 'o2', text: 'a', isCorrect: false }
      ],
      explanation: '"Office" starts with a vowel sound /ɒ/.'
    },
    {
      id: 'ae_l2_4',
      explanation: '\'What do you do?\' asks about someone\'s job. \'Where\' asks about a place, and \'How\' asks about manner.',
      type: 'fill_blank',
      prompt: 'Mastery Test 4: Choose the correct question word:',
      sourceSentence: '____ do you do? I am a teacher.',
      targetSentence: 'What do you do? I am a teacher.',
      blankIndex: 0,
      options: [
        { id: 'o1', text: 'What', isCorrect: true },
        { id: 'o2', text: 'Where', isCorrect: false },
        { id: 'o3', text: 'How', isCorrect: false }
      ]
    },
    {
      id: 'ae_l2_5',
      explanation: '\'They\' is plural, so use \'are\' with it: \'They are doctors at the hospital.\' \'Is\' and \'am\' do not fit a plural subject.',
      type: 'fill_blank',
      prompt: 'Mastery Test 5: Choose the correct verb form:',
      sourceSentence: 'They ____ doctors at the hospital.',
      targetSentence: 'They are doctors at the hospital.',
      blankIndex: 1,
      options: [
        { id: 'o1', text: 'are', isCorrect: true },
        { id: 'o2', text: 'is', isCorrect: false },
        { id: 'o3', text: 'am', isCorrect: false }
      ]
    },
    {
      id: 'ae_l2_6',
      explanation: 'Put the place phrase \'at the university\' at the end: \'I am a student at the university.\'',
      type: 'word_ordering',
      prompt: 'Mastery Test 6: Construct "I am a student at the university":',
      targetSentence: 'I am a student at the university',
      wordBank: ['I', 'am', 'a', 'student', 'at', 'the', 'university', 'an', 'in']
    },
    {
      id: 'ae_l2_7',
      explanation: 'In \'Where do you work?\', the question word comes first, then \'do\', then the subject, then the base verb.',
      type: 'word_ordering',
      prompt: 'Mastery Test 7: Construct "Where do you work":',
      targetSentence: 'Where do you work',
      wordBank: ['Where', 'do', 'you', 'work', 'what', 'live', 'is']
    },
    {
      id: 'ae_l2_8',
      explanation: 'Listen for the job title. The speaker says \'I am an accountant\', so \'accountant\' is correct.',
      type: 'listening',
      prompt: 'Mastery Test 8: Listen and select the profession:',
      audioText: 'I am an accountant in an international company.',
      targetSentence: 'I am an accountant in an international company.',
      options: [
        { id: 'o1', text: 'accountant', isCorrect: true },
        { id: 'o2', text: 'architect', isCorrect: false },
        { id: 'o3', text: 'artist', isCorrect: false }
      ]
    },
    {
      id: 'ae_l2_9',
      explanation: 'Write the sentence as you hear it: \'She is a product manager.\' Use \'is\' with \'she\'.',
      type: 'listen_type',
      prompt: 'Mastery Test 9: Listen and arrange the tiles:',
      audioText: 'She is a product manager.',
      targetSentence: 'She is a product manager',
      wordBank: ['She', 'is', 'a', 'product', 'manager', 'an', 'doctor']
    },
    {
      id: 'ae_l2_10',
      explanation: 'For a negative with \'be\', put \'not\' after the verb: \'He is not a doctor.\' Do not use \'do\' with \'be\'.',
      type: 'translate_tiles',
      prompt: 'Mastery Test 10: Translate to English:',
      sourceSentence: 'वह डॉक्टर नहीं है। / Él no es médico.',
      sourceTranslations: { hi: 'वह डॉक्टर नहीं है।', es: 'Él no es médico.' },
      targetSentence: 'He is not a doctor',
      wordBank: ['He', 'is', 'not', 'a', 'doctor', 'an', 'teacher']
    },
    {
      id: 'ae_l2_11',
      explanation: '\'What do you do?\' is the usual way to ask someone about their job in English.',
      type: 'translation',
      prompt: 'Mastery Test 11: Translate into English:',
      sourceSentence: 'आप क्या काम करते हैं? / ¿A qué te dedicas?',
      sourceTranslations: { hi: 'आप क्या काम करते हैं?', es: '¿A qué te dedicas?' },
      targetSentence: 'What do you do?',
      correctAnswer: 'What do you do?'
    },
    {
      id: 'ae_l2_12',
      explanation: 'Introduce yourself in order: name, origin (\'from Spain\'), then job: \'I am Carlos from Spain and I am a doctor.\'',
      type: 'word_ordering',
      prompt: 'Mastery Test 12: Interleaved Final: Combine name, origin, and job:',
      targetSentence: 'I am Carlos from Spain and I am a doctor',
      wordBank: ['I', 'am', 'Carlos', 'from', 'Spain', 'and', 'I', 'am', 'a', 'doctor', 'an', 'engineer']
    }
  ]
};
