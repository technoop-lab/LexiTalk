import { DetailedLessonData } from '../../types';

export const LESSON_A1_1_1_DATA: DetailedLessonData = {
  id: 'lesson_a1_1_1',
  unitId: 'unit_a1_1',
  title: 'Hello! Introducing Yourself',
  cefr: 'A1',
  icon: '👋',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Self-Introduction & Basic Personal Information',
    description: 'Today you will learn how to introduce yourself naturally, state your origin and residence, talk about your work or studies, ask basic personal questions, and use essential A1 English patterns.',
    descriptionsByLang: {
      hi: 'आज आप अंग्रेजी में स्वाभाविक रूप से अपना परिचय देना, अपना मूल स्थान और शहर बताना, अपने काम या पढ़ाई के बारे में बात करना, बुनियादी सवाल पूछना और बुनियादी A1 पैटर्न का उपयोग करना सीखेंगे।',
      es: 'Hoy aprenderás a presentarte con naturalidad, decir tu origen y residencia, hablar de tu trabajo o estudios, hacer preguntas personales básicas y usar patrones esenciales en inglés A1.',
      fr: 'Aujourd\'hui, vous apprendrez à vous présenter naturellement, à indiquer votre origine et votre résidence, à parler de votre travail ou de vos études et à poser des questions personnelles de base.',
      de: 'Heute lernen Sie, wie Sie sich natürlich vorstellen, Ihre Herkunft und Ihren Wohnort nennen, über Ihre Arbeit oder Ihr Studium sprechen und grundlegende Fragen stellen.',
      pt: 'Hoje você aprenderá a se apresentar de forma natural, dizer sua origem e residência, falar sobre seu trabalho ou estudos e fazer perguntas pessoais básicas em inglês A1.',
      zh: '今天你将学会如何用英语自然地作自我介绍、说明国籍和居住地、谈论工作或学习，并询问基本的个人信息。',
      ar: 'اليوم ستتعلم كيفية تقديم نفسك بشكل طبيعي، وذكر بلدك ومدينتك، والتحدث عن عملك أو دراستك، وطرح الأسئلة الشخصية الأساسية.',
      ja: '今日は、英語で自然に自己紹介し、出身地や居住地、仕事や学业について話し、基本的な質問をする方法を学びます。',
      ru: 'Сегодня вы научитесь естественно представляться, называть свое происхождение и место жительства, говорить о работе или учебе и задавать базовые личные вопросы.'
    },
    canDoStatements: [
      'Introduce yourself using "My name is..." and "I\'m..."',
      'Ask someone\'s name with "What\'s your name?"',
      'State your country of origin with "I\'m from..."',
      'Ask where someone is from using "Where are you from?"',
      'Tell someone where you live with "I live in..."',
      'Ask where someone lives with "Where do you live?"',
      'State your occupation with "I\'m a student / teacher / engineer"',
      'Ask what someone does with "What do you do?"',
      'Construct affirmative, negative, and question sentences with the verb BE',
      'Recognize and use common contractions (I\'m, You\'re, What\'s, isn\'t)',
      'Exchange polite greetings like "Nice to meet you" and "Have a good day"'
    ],
    canDoByLang: {
      hi: [
        '"My name is..." और "I\'m..." का उपयोग करके अपना परिचय देना',
        '"What\'s your name?" कहकर किसी का नाम पूछना',
        '"I\'m from..." कहकर अपना मूल देश बताना',
        '"Where are you from?" पूछकर किसी का मूल स्थान जानना',
        '"I live in..." का उपयोग करके अपना वर्तमान शहर बताना',
        '"Where do you live?" पूछकर किसी का निवास स्थान जानना',
        '"I\'m a student / teacher" कहकर अपना पेशा बताना',
        '"What do you do?" पूछकर किसी का काम या व्यवसाय जानना',
        'Verb BE (am, is, are) के साथ सकारात्मक, नकारात्मक और प्रश्न वाक्य बनाना',
        'आम संकुचित रूपों (I\'m, You\'re, What\'s) को पहचानना और प्रयोग करना',
        '"Nice to meet you" जैसे शिष्टाचार के वाक्य बोलना'
      ],
      es: [
        'Presentarte usando "My name is..." y "I\'m..."',
        'Preguntar el nombre a alguien con "What\'s your name?"',
        'Decir tu país de origen con "I\'m from..."',
        'Preguntar de dónde es alguien con "Where are you from?"',
        'Decir dónde vives con "I live in..."',
        'Preguntar dónde vive alguien con "Where do you live?"',
        'Decir tu profesión con "I\'m a student / teacher / engineer"',
        'Preguntar a qué se dedica alguien con "What do you do?"',
        'Construir oraciones afirmativas, negativas e interrogativas con el verbo BE',
        'Reconocer y usar contracciones comunes (I\'m, You\'re, What\'s)',
        'Intercambiar saludos educados como "Nice to meet you"'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (25 items in 4 semantic groups)
  vocabulary: [
    {
      id: 'v_hello',
      word: 'hello',
      phonetic: '/həˈloʊ/',
      meaning: 'Standard polite greeting',
      translationsByLang: { hi: 'नमस्ते / प्रणाम', es: 'hola', fr: 'bonjour', de: 'hallo', pt: 'olá', zh: '你好', ar: 'مرحبا', ja: 'こんにちは', ru: 'здравствуйте' },
      exampleSentence: 'Hello, nice to see you.',
      exampleTranslationByLang: { hi: 'नमस्ते, आपसे मिलकर अच्छा लगा।', es: 'Hola, gusto en verte.', fr: 'Bonjour, ravi de vous voir.', de: 'Hallo, schön dich zu sehen.', pt: 'Olá, bom ver você.', zh: '你好，很高兴见到你。', ar: 'مرحبا، يسعدني رؤيتك.', ja: 'こんにちは、お会いできて嬉しいです。', ru: 'Здравствуйте, рад вас видеть.' },
      audioText: 'hello',
      audioId: 'en_a1_u01_l01_v_hello',
      slowAudioId: 'en_a1_u01_l01_v_hello_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👋',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_hi',
      word: 'hi',
      phonetic: '/haɪ/',
      meaning: 'Casual friendly greeting',
      translationsByLang: { hi: 'हाय / नमस्ते', es: 'hola', fr: 'salut', de: 'hi', pt: 'oi', zh: '嗨', ar: 'أهلا', ja: 'やあ', ru: 'привет' },
      exampleSentence: 'Hi, I am Rahul.',
      exampleTranslationByLang: { hi: 'हाय, मैं राहुल हूँ।', es: 'Hola, soy Rahul.', fr: 'Salut, je suis Rahul.', de: 'Hi, ich bin Rahul.', pt: 'Oi, eu sou o Rahul.', zh: '嗨，我是拉胡尔。', ar: 'أهلا، أنا راهول.', ja: 'やあ、私はラールです。', ru: 'Привет, я Рахул.' },
      audioText: 'hi',
      audioId: 'en_a1_u01_l01_v_hi',
      slowAudioId: 'en_a1_u01_l01_v_hi_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '😊',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_name',
      word: 'name',
      phonetic: '/neɪm/',
      meaning: 'The word by which a person is known',
      translationsByLang: { hi: 'नाम', es: 'nombre', fr: 'nom', de: 'Name', pt: 'nome', zh: '名字', ar: 'اسم', ja: '名前', ru: 'имя' },
      exampleSentence: 'My name is Sarah.',
      exampleTranslationByLang: { hi: 'मेरा नाम सारा है।', es: 'Mi nombre es Sarah.', fr: 'Mon nom est Sarah.', de: 'Mein Name ist Sarah.', pt: 'Meu nome é Sarah.', zh: '我的名字叫萨拉。', ar: 'اسمي سارة.', ja: '私の名前はサラです。', ru: 'Меня зовут Сара.' },
      audioText: 'name',
      audioId: 'en_a1_u01_l01_v_name',
      slowAudioId: 'en_a1_u01_l01_v_name_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏷️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_first_name',
      word: 'first name',
      phonetic: '/ˈfɜːrst neɪm/',
      meaning: 'Given personal name',
      translationsByLang: { hi: 'पहला नाम (व्यक्तिगत नाम)', es: 'primer nombre', fr: 'prénom', de: 'Vorname', pt: 'primeiro nome', zh: '名字（教名）', ar: 'الاسم الأول', ja: 'ファーストネーム', ru: 'имя' },
      exampleSentence: 'My first name is Anil.',
      exampleTranslationByLang: { hi: 'मेरा पहला नाम अनिल है।', es: 'Mi primer nombre es Anil.', fr: 'Mon prénom est Anil.' },
      audioText: 'first name',
      audioId: 'en_a1_u01_l01_v_first_name',
      voiceId: 'EN_TEACHER_01',
      icon: '🆔',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_surname',
      word: 'surname',
      phonetic: '/ˈsɜːrneɪm/',
      meaning: 'Family name or last name',
      translationsByLang: { hi: 'उपनाम / कुलनाम (लास्ट नेम)', es: 'apellido', fr: 'nom de famille', de: 'Nachname', pt: 'sobrenome', zh: '姓氏', ar: 'اسم العائلة', ja: '苗字', ru: 'фамилия' },
      exampleSentence: 'My surname is Sharma.',
      exampleTranslationByLang: { hi: 'मेरा उपनाम शर्मा है।', es: 'Mi apellido es Sharma.' },
      audioText: 'surname',
      audioId: 'en_a1_u01_l01_v_surname',
      voiceId: 'EN_TEACHER_01',
      icon: '📜',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_my',
      word: 'my',
      phonetic: '/maɪ/',
      meaning: 'Belonging to me',
      translationsByLang: { hi: 'मेरा / मेरी / मेरे', es: 'mi / mío', fr: 'mon / ma', de: 'mein', pt: 'meu / minha', zh: '我的', ar: 'لي / خاصتي', ja: '私の', ru: 'мой / моя' },
      exampleSentence: 'My name is Anil.',
      exampleTranslationByLang: { hi: 'मेरा नाम अनिल है।', es: 'Mi nombre es Anil.', fr: 'Mon nom est Anil.' },
      audioText: 'my',
      audioId: 'en_a1_u01_l01_v_my',
      voiceId: 'EN_TEACHER_01',
      icon: '👤',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_your',
      word: 'your',
      phonetic: '/jʊər/',
      meaning: 'Belonging to you',
      translationsByLang: { hi: 'आपका / तुम्हारा', es: 'tu / su', fr: 'votre / ton', de: 'dein / Ihr', pt: 'seu / sua', zh: '你的 / 您的', ar: 'ك / خاصتك', ja: 'あなたの', ru: 'ваш / твой' },
      exampleSentence: 'What is your name?',
      exampleTranslationByLang: { hi: 'आपका नाम क्या है?', es: '¿Cuál es tu nombre?' },
      audioText: 'your',
      audioId: 'en_a1_u01_l01_v_your',
      voiceId: 'EN_TEACHER_01',
      icon: '👉',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_from',
      word: 'from',
      phonetic: '/frɒm/',
      meaning: 'Originating at a place',
      translationsByLang: { hi: 'से (मूल स्थान)', es: 'de', fr: 'de', de: 'aus / von', pt: 'de', zh: '来自', ar: 'من', ja: '〜から', ru: 'из / от' },
      exampleSentence: 'I am from India.',
      exampleTranslationByLang: { hi: 'मैं भारत से हूँ।', es: 'Yo soy de la India.' },
      audioText: 'from',
      audioId: 'en_a1_u01_l01_v_from',
      voiceId: 'EN_TEACHER_01',
      icon: '📍',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_country',
      word: 'country',
      phonetic: '/ˈkʌntri/',
      meaning: 'A nation with its own government',
      translationsByLang: { hi: 'देश', es: 'país', fr: 'pays', de: 'Land', pt: 'país', zh: '国家', ar: 'بلد', ja: '国', ru: 'страна' },
      exampleSentence: 'India is my country.',
      exampleTranslationByLang: { hi: 'भारत मेरा देश है।', es: 'India es mi país.' },
      audioText: 'country',
      audioId: 'en_a1_u01_l01_v_country',
      voiceId: 'EN_TEACHER_01',
      icon: '🌐',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_city',
      word: 'city',
      phonetic: '/ˈsɪti/',
      meaning: 'A large urban town',
      translationsByLang: { hi: 'शहर', es: 'ciudad', fr: 'ville', de: 'Stadt', pt: 'cidade', zh: '城市', ar: 'مدينة', ja: '都市', ru: 'город' },
      exampleSentence: 'Mumbai is a big city.',
      exampleTranslationByLang: { hi: 'मुंबई एक बड़ा शहर है।', es: 'Mumbai es una gran ciudad.' },
      audioText: 'city',
      audioId: 'en_a1_u01_l01_v_city',
      voiceId: 'EN_TEACHER_01',
      icon: '🏙️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_live',
      word: 'live',
      phonetic: '/lɪv/',
      meaning: 'Reside or make one\'s home',
      translationsByLang: { hi: 'रहना (निवास करना)', es: 'vivir', fr: 'habiter', de: 'wohnen', pt: 'morar', zh: '居住', ar: 'يعيش', ja: '住む', ru: 'жить' },
      exampleSentence: 'I live in Delhi.',
      exampleTranslationByLang: { hi: 'मैं दिल्ली में रहता हूँ।', es: 'Vivo en Delhi.' },
      audioText: 'live',
      audioId: 'en_a1_u01_l01_v_live',
      voiceId: 'EN_TEACHER_01',
      icon: '🏠',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_work',
      word: 'work',
      phonetic: '/wɜːrk/',
      meaning: 'Have a job or physical/mental effort',
      translationsByLang: { hi: 'काम करना / नौकरी', es: 'trabajar / trabajo', fr: 'travailler', de: 'arbeiten', pt: 'trabalhar', zh: '工作', ar: 'يعمل', ja: '働く', ru: 'работать' },
      exampleSentence: 'I work in an office.',
      exampleTranslationByLang: { hi: 'मैं एक दफ़्तर में काम करता हूँ।', es: 'Trabajo en una oficina.' },
      audioText: 'work',
      audioId: 'en_a1_u01_l01_v_work',
      voiceId: 'EN_TEACHER_01',
      icon: '💼',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_study',
      word: 'study',
      phonetic: '/ˈstʌdi/',
      meaning: 'Learn a subject at university or school',
      translationsByLang: { hi: 'पढ़ाई करना / अध्ययन', es: 'estudiar', fr: 'étudier', de: 'studieren', pt: 'estudar', zh: '学习', ar: 'يدرس', ja: '勉強する', ru: 'учиться' },
      exampleSentence: 'I study English at university.',
      exampleTranslationByLang: { hi: 'मैं विश्वविद्यालय में अंग्रेजी पढ़ता हूँ।', es: 'Estudio inglés en la universidad.' },
      audioText: 'study',
      audioId: 'en_a1_u01_l01_v_study',
      voiceId: 'EN_TEACHER_01',
      icon: '📚',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_student',
      word: 'student',
      phonetic: '/ˈstjuːdənt/',
      meaning: 'A person who is studying',
      translationsByLang: { hi: 'छात्र / छात्रा', es: 'estudiante', fr: 'étudiant', de: 'Student', pt: 'estudante', zh: '学生', ar: 'طالب', ja: '学生', ru: 'студент' },
      exampleSentence: 'I am a university student.',
      exampleTranslationByLang: { hi: 'मैं विश्वविद्यालय का छात्र हूँ।', es: 'Soy un estudiante universitario.' },
      audioText: 'student',
      audioId: 'en_a1_u01_l01_v_student',
      voiceId: 'EN_TEACHER_01',
      icon: '🎓',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_teacher',
      word: 'teacher',
      phonetic: '/ˈtiːtʃər/',
      meaning: 'A person who teaches',
      translationsByLang: { hi: 'शिक्षक / शिक्षिका', es: 'profesor', fr: 'professeur', de: 'Lehrer', pt: 'professor', zh: '教师', ar: 'معلم', ja: '先生', ru: 'учитель' },
      exampleSentence: 'She is an English teacher.',
      exampleTranslationByLang: { hi: 'वह एक अंग्रेजी शिक्षिका हैं।', es: 'Ella es profesora de inglés.' },
      audioText: 'teacher',
      audioId: 'en_a1_u01_l01_v_teacher',
      voiceId: 'EN_TEACHER_01',
      icon: '👩‍🏫',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_job',
      word: 'job',
      phonetic: '/dʒɒb/',
      meaning: 'Paid position of regular employment',
      translationsByLang: { hi: 'नौकरी / व्यवसाय', es: 'empleo / trabajo', fr: 'emploi', de: 'Beruf / Job', pt: 'emprego', zh: '工作 / 职业', ar: 'وظيفة', ja: '職業', ru: 'работа / профессия' },
      exampleSentence: 'I have a new job.',
      exampleTranslationByLang: { hi: 'मेरी एक नई नौकरी है।', es: 'Tengo un nuevo empleo.' },
      audioText: 'job',
      audioId: 'en_a1_u01_l01_v_job',
      voiceId: 'EN_TEACHER_01',
      icon: '👔',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_office',
      word: 'office',
      phonetic: '/ˈɒfɪs/',
      meaning: 'Room or building used for business work',
      translationsByLang: { hi: 'कार्यालय / दफ़्तर', es: 'oficina', fr: 'bureau', de: 'Büro', pt: 'escritório', zh: '办公室', ar: 'مكتب', ja: 'オフィス', ru: 'офис' },
      exampleSentence: 'He works in an office.',
      exampleTranslationByLang: { hi: 'वह एक दफ़्तर में काम करता है।', es: 'Él trabaja en una oficina.' },
      audioText: 'office',
      audioId: 'en_a1_u01_l01_v_office',
      voiceId: 'EN_TEACHER_01',
      icon: '🏢',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_company',
      word: 'company',
      phonetic: '/ˈkʌmpəni/',
      meaning: 'Commercial business organization',
      translationsByLang: { hi: 'कंपनी / संस्थान', es: 'empresa / compañía', fr: 'entreprise', de: 'Firma', pt: 'empresa', zh: '公司', ar: 'شركة', ja: '会社', ru: 'компания' },
      exampleSentence: 'I work for a global company.',
      exampleTranslationByLang: { hi: 'मैं एक वैश्विक कंपनी में काम करता हूँ।', es: 'Trabajo para una empresa global.' },
      audioText: 'company',
      audioId: 'en_a1_u01_l01_v_company',
      voiceId: 'EN_TEACHER_01',
      icon: '🏭',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_university',
      word: 'university',
      phonetic: '/ˌjuːnɪˈvɜːrsəti/',
      meaning: 'Higher education institution',
      translationsByLang: { hi: 'विश्वविद्यालय', es: 'universidad', fr: 'université', de: 'Universität', pt: 'universidade', zh: '大学', ar: 'جامعة', ja: '大学', ru: 'университет' },
      exampleSentence: 'She studies at university.',
      exampleTranslationByLang: { hi: 'वह विश्वविद्यालय में पढ़ाई करती है।', es: 'Ella estudia en la universidad.' },
      audioText: 'university',
      audioId: 'en_a1_u01_l01_v_university',
      voiceId: 'EN_TEACHER_01',
      icon: '🏛️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_friend',
      word: 'friend',
      phonetic: '/frend/',
      meaning: 'A person with whom one has a bond of affection',
      translationsByLang: { hi: 'दोस्त / मित्र', es: 'amigo', fr: 'ami', de: 'Freund', pt: 'amigo', zh: '朋友', ar: 'صديق', ja: '友達', ru: 'друг' },
      exampleSentence: 'Anil is my friend.',
      exampleTranslationByLang: { hi: 'अनिल मेरा दोस्त है।', es: 'Anil es mi amigo.' },
      audioText: 'friend',
      audioId: 'en_a1_u01_l01_v_friend',
      voiceId: 'EN_TEACHER_01',
      icon: '🧑‍🤝‍🧑',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_age',
      word: 'age',
      phonetic: '/eɪdʒ/',
      meaning: 'Length of time a person has lived',
      translationsByLang: { hi: 'उम्र / आयु', es: 'edad', fr: 'âge', de: 'Alter', pt: 'idade', zh: '年龄', ar: 'عمر', ja: '年齢', ru: 'возраст' },
      exampleSentence: 'What is your age?',
      exampleTranslationByLang: { hi: 'आपकी उम्र क्या है?', es: '¿Cuál es tu edad?' },
      audioText: 'age',
      audioId: 'en_a1_u01_l01_v_age',
      voiceId: 'EN_TEACHER_01',
      icon: '🎂',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_today',
      word: 'today',
      phonetic: '/təˈdeɪ/',
      meaning: 'On or during this present day',
      translationsByLang: { hi: 'आज', es: 'hoy', fr: 'aujourd\'hui', de: 'heute', pt: 'hoje', zh: '今天', ar: 'اليوم', ja: '今日', ru: 'сегодня' },
      exampleSentence: 'I start my new job today.',
      exampleTranslationByLang: { hi: 'मैं आज अपनी नई नौकरी शुरू कर रहा हूँ।', es: 'Empiezo mi nuevo trabajo hoy.' },
      audioText: 'today',
      audioId: 'en_a1_u01_l01_v_today',
      voiceId: 'EN_TEACHER_01',
      icon: '📅',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_meet',
      word: 'meet',
      phonetic: '/miːt/',
      meaning: 'Come into the presence of someone for the first time',
      translationsByLang: { hi: 'मिलना / परिचय होना', es: 'conocer / encontrar', fr: 'rencontrer', de: 'kennenlernen', pt: 'conhecer', zh: '认识 / 遇见', ar: 'يلتقي', ja: '出会う', ru: 'знакомиться' },
      exampleSentence: 'Nice to meet you.',
      exampleTranslationByLang: { hi: 'आपसे मिलकर अच्छा लगा।', es: 'Gusto en conocerte.' },
      audioText: 'meet',
      audioId: 'en_a1_u01_l01_v_meet',
      voiceId: 'EN_TEACHER_01',
      icon: '🤝',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_nice',
      word: 'nice',
      phonetic: '/naɪs/',
      meaning: 'Pleasant, agreeable, or fine',
      translationsByLang: { hi: 'अच्छा / सुखद', es: 'agradable / lindo', fr: 'sympa', de: 'nett / schön', pt: 'agradável', zh: '美好的', ar: 'لطيف', ja: '良い', ru: 'приятный' },
      exampleSentence: 'Nice to meet you too.',
      exampleTranslationByLang: { hi: 'आपसे मिलकर भी खुशी हुई।', es: 'Gusto en conocerte también.' },
      audioText: 'nice',
      audioId: 'en_a1_u01_l01_v_nice',
      voiceId: 'EN_TEACHER_01',
      icon: '🌟',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_too',
      word: 'too',
      phonetic: '/tuː/',
      meaning: 'In addition; also',
      translationsByLang: { hi: 'भी', es: 'también', fr: 'aussi', de: 'auch', pt: 'também', zh: '也', ar: 'أيضاً', ja: '〜もまた', ru: 'тоже' },
      exampleSentence: 'I am a student too.',
      exampleTranslationByLang: { hi: 'मैं भी एक छात्र हूँ।', es: 'Yo también soy estudiante.' },
      audioText: 'too',
      audioId: 'en_a1_u01_l01_v_too',
      voiceId: 'EN_TEACHER_01',
      icon: '➕',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Core Useful Language Chunks (18 items)
  expressions: [
    {
      id: 'e_hello',
      expression: 'Hello.',
      translationsByLang: { hi: 'नमस्ते।', es: 'Hola.', fr: 'Bonjour.', de: 'Hallo.', pt: 'Olá.', zh: '你好。', ar: 'مرحباً.', ja: 'こんにちは。', ru: 'Здравствуйте.' },
      usageNote: 'Universal polite greeting for any formal or informal setting',
      audioText: 'Hello.',
      icon: '👋'
    },
    {
      id: 'e_hi',
      expression: 'Hi.',
      translationsByLang: { hi: 'हाय। / नमस्ते।', es: 'Hola.', fr: 'Salut.', de: 'Hi.', pt: 'Oi.', zh: '嗨。', ar: 'أهلاً.', ja: 'やあ。', ru: 'Привет.' },
      usageNote: 'Friendly, natural informal greeting among peers and colleagues',
      audioText: 'Hi.',
      icon: '💬'
    },
    {
      id: 'e_my_name',
      expression: 'My name is ___.',
      translationsByLang: { hi: 'मेरा नाम ___ है।', es: 'Mi nombre es ___.', fr: 'Mon nom est ___.', de: 'Mein Name ist ___.', pt: 'Meu nome é ___.', zh: '我的名字叫___。', ar: 'اسمي ___.', ja: '私の名前は___です。', ru: 'Меня зовут ___.' },
      usageNote: 'Standard clear formula for self-introductions',
      audioText: 'My name is Sarah.',
      icon: '📛'
    },
    {
      id: 'e_im',
      expression: "I'm ___.",
      translationsByLang: { hi: 'मैं ___ हूँ।', es: 'Soy ___.', fr: 'Je suis ___.', de: 'Ich bin ___.', pt: 'Eu sou ___.', zh: '我是___。', ar: 'أنا ___.', ja: '私は___です。', ru: 'Я ___.' },
      usageNote: 'Most natural everyday spoken introduction formula',
      audioText: "I'm Anil.",
      icon: '🙋‍♂️'
    },
    {
      id: 'e_whats_your_name',
      expression: "What's your name?",
      translationsByLang: { hi: 'आपका नाम क्या है?', es: '¿Cómo te llamas?', fr: 'Comment vous appelez-vous ?', de: 'Wie heißen Sie?', pt: 'Qual é o seu nome?', zh: '你叫什么名字？', ar: 'ما اسمك؟', ja: 'お名前は何ですか？', ru: 'Как вас зовут?' },
      usageNote: 'Standard polite question to learn someone\'s name',
      audioText: "What's your name?",
      icon: '❓'
    },
    {
      id: 'e_im_from',
      expression: "I'm from ___.",
      translationsByLang: { hi: 'मैं ___ से हूँ।', es: 'Soy de ___.', fr: 'Je viens de ___.', de: 'Ich komme aus ___.', pt: 'Sou de ___.', zh: '我来自___。', ar: 'أنا من ___.', ja: '私は___出身です。', ru: 'Я из ___.' },
      usageNote: 'States your native country or home city',
      audioText: "I'm from India.",
      icon: '🇮🇳'
    },
    {
      id: 'e_where_from',
      expression: 'Where are you from?',
      translationsByLang: { hi: 'आप कहाँ से हैं?', es: '¿De dónde eres?', fr: 'D\'où venez-vous ?', de: 'Woher kommen Sie?', pt: 'De onde você é?', zh: '你来自哪里？', ar: 'من أين أنت؟', ja: 'ご出身はどちらですか？', ru: 'Откуда вы?' },
      usageNote: 'Asks for another person\'s origin country or city',
      audioText: 'Where are you from?',
      icon: '🧭'
    },
    {
      id: 'e_live_in',
      expression: 'I live in ___.',
      translationsByLang: { hi: 'मैं ___ में रहता हूँ।', es: 'Vivo en ___.', fr: 'J\'habite à ___.', de: 'Ich wohne in ___.', pt: 'Moro em ___.', zh: '我住在___。', ar: 'أعيش في ___.', ja: '私は___に住んでいます。', ru: 'Я живу в ___.' },
      usageNote: 'States your current residence city or town',
      audioText: 'I live in Delhi.',
      icon: '🏡'
    },
    {
      id: 'e_where_live',
      expression: 'Where do you live?',
      translationsByLang: { hi: 'आप कहाँ रहते हैं?', es: '¿Dónde vives?', fr: 'Où habitez-vous ?', de: 'Wo wohnen Sie?', pt: 'Onde você mora?', zh: '你住在哪里？', ar: 'أين تعيش؟', ja: 'どこに住んでいますか？', ru: 'Где вы живете?' },
      usageNote: 'Asks where someone currently resides',
      audioText: 'Where do you live?',
      icon: '🗺️'
    },
    {
      id: 'e_what_do_you_do',
      expression: 'What do you do?',
      translationsByLang: { hi: 'आप क्या करते हैं? (आपका काम क्या है?)', es: '¿A qué te dedicas?', fr: 'Que faites-vous dans la vie ?', de: 'Was machen Sie beruflich?', pt: 'O que você faz?', zh: '你是做什么工作的？', ar: 'ماذا تعمل؟', ja: 'お仕事は何をされていますか？', ru: 'Чем вы занимаетесь?' },
      usageNote: 'Standard question asking about someone\'s job or studies',
      audioText: 'What do you do?',
      icon: '💼'
    },
    {
      id: 'e_im_a',
      expression: "I'm a / an ___.",
      translationsByLang: { hi: 'मैं एक ___ हूँ।', es: 'Soy ___ (profesión).', fr: 'Je suis ___.', de: 'Ich bin ___.', pt: 'Eu sou ___ (profissão).', zh: '我是___。', ar: 'أنا ___.', ja: '私は___です。', ru: 'Я ___.' },
      usageNote: 'States your profession (Remember: use "a" before consonants, "an" before vowels)',
      audioText: "I'm a student.",
      icon: '🎓'
    },
    {
      id: 'e_work_at',
      expression: 'I work in / at ___.',
      translationsByLang: { hi: 'मैं ___ में काम करता हूँ।', es: 'Trabajo en ___.', fr: 'Je travaille chez ___.', de: 'Ich arbeite bei ___.', pt: 'Trabalho em ___.', zh: '我在___工作。', ar: 'أعمل في ___.', ja: '私は___で働いています。', ru: 'Я работаю в ___.' },
      usageNote: 'States the company or workplace where you work',
      audioText: 'I work in an office.',
      icon: '🏢'
    },
    {
      id: 'e_study_at',
      expression: 'I study at ___.',
      translationsByLang: { hi: 'मैं ___ में पढ़ाई करता हूँ।', es: 'Estudio en ___.', fr: 'J\'étudie à ___.', de: 'Ich studiere an ___.', pt: 'Estudo em ___.', zh: '我在___学习。', ar: 'أدرس في ___.', ja: '私は___で勉強しています。', ru: 'Я учусь в ___.' },
      usageNote: 'States the school or university where you study',
      audioText: 'I study at university.',
      icon: '🏛️'
    },
    {
      id: 'e_nice_to_meet',
      expression: 'Nice to meet you.',
      translationsByLang: { hi: 'आपसे मिलकर अच्छा लगा।', es: 'Gusto en conocerte.', fr: 'Ravi de vous rencontrer.', de: 'Schön, Sie kennenzulernen.', pt: 'Prazer em conhecê-lo.', zh: '很高兴认识你。', ar: 'سررت بلقائك.', ja: 'はじめまして。', ru: 'Приятно познакомиться.' },
      usageNote: 'Standard polite phrase upon first introduction',
      audioText: 'Nice to meet you.',
      icon: '🤝'
    },
    {
      id: 'e_nice_to_meet_too',
      expression: 'Nice to meet you too.',
      translationsByLang: { hi: 'आपसे मिलकर भी अच्छा लगा।', es: 'Gusto en conocerte también.', fr: 'Ravi de vous rencontrer aussi.', de: 'Ganz meinerseits.', pt: 'Prazer em conhecê-lo também.', zh: '我也很高兴认识你。', ar: 'وأنا سررت بلقائك أيضاً.', ja: 'こちらこそ、よろしくお願いします。', ru: 'Мне тоже очень приятно познакомиться.' },
      usageNote: 'Polite return greeting when someone says "Nice to meet you"',
      audioText: 'Nice to meet you too.',
      icon: '✨'
    },
    {
      id: 'e_how_are_you',
      expression: 'How are you?',
      translationsByLang: { hi: 'आप कैसे हैं?', es: '¿Cómo estás?', fr: 'Comment allez-vous ?', de: 'Wie geht es Ihnen?', pt: 'Como você está?', zh: '你好吗？', ar: 'كيف حالك؟', ja: 'お元気ですか？', ru: 'Как дела?' },
      usageNote: 'Friendly inquiry about someone\'s well-being',
      audioText: 'How are you?',
      icon: '🙂'
    },
    {
      id: 'e_im_good',
      expression: "I'm good, thanks.",
      translationsByLang: { hi: 'मैं ठीक हूँ, धन्यवाद।', es: 'Estoy bien, gracias.', fr: 'Je vais bien, merci.', de: 'Mir geht es gut, danke.', pt: 'Estou bem, obrigado.', zh: '我很好，谢谢。', ar: 'أنا بخير، شكراً.', ja: '元気です、ありがとう。', ru: 'Я в порядке, спасибо.' },
      usageNote: 'Common friendly response to "How are you?"',
      audioText: "I'm good, thanks.",
      icon: '👍'
    },
    {
      id: 'e_and_you',
      expression: 'And you?',
      translationsByLang: { hi: 'और आप?', es: '¿Y tú?', fr: 'Et vous ?', de: 'Und Ihnen?', pt: 'E você?', zh: '你呢？', ar: 'وأنت؟', ja: 'あなたは？', ru: 'А вы?' },
      usageNote: 'Quick, natural way to return a question back to the speaker',
      audioText: 'And you?',
      icon: '🔄'
    }
  ],

  // SECTIONS 5, 6, 7: Grammar Explanations, Contractions & Question Rules
  grammar: {
    title: 'Grammar: The Present Tense of "BE" & Question Structures',
    concept: 'In English, the verb "BE" (am, is, are) is essential to state identity, origin, and profession. To ask questions, invert the subject and verb, or use auxiliary "do" for action verbs like "live" and "do".',
    conceptsByLang: {
      hi: 'अंग्रेज़ी में "BE" (am, is, are) क्रिया नाम, मूल देश और पेशा बताने के लिए आवश्यक है। प्रश्न बनाने के लिए कर्ता (subject) और क्रिया (verb) के स्थान को पलटें, या "live" जैसी मुख्य क्रियाओं के साथ "do" सहायक क्रिया का प्रयोग करें।',
      es: 'En inglés, el verbo "BE" (am, is, are) es esencial para indicar identidad, origen y profesión. Para hacer preguntas, invierte el sujeto y el verbo, o usa el auxiliar "do" para verbos de acción.',
      fr: 'En anglais, le verbe "BE" (am, is, are) est essentiel pour indiquer l\'identité, l\'origine et la profession. Pour poser des questions, inversez le sujet et le verbe.',
      de: 'Im Englischen ist das Verb "BE" (am, is, are) unerlässlich, um Identität, Herkunft und Beruf anzugeben.'
    },
    verbBeExplanation: {
      title: 'Subject Pronouns + BE & Natural Contractions',
      content: 'In natural spoken English, contractions (shortened forms) are standard. Notice how the apostrophe (\') replaces the missing vowel.',
      contractionsTable: [
        {
          full: 'I am Anil.',
          contracted: "I'm Anil.",
          meaningByLang: { hi: 'मैं अनिल हूँ।', es: 'Yo soy Anil.', fr: 'Je suis Anil.', de: 'Ich bin Anil.', pt: 'Eu sou o Anil.', zh: '我是阿尼尔。', ar: 'أنا أنيل.', ja: '私はアニルです。', ru: 'Я Анил.' }
        },
        {
          full: 'You are Maria.',
          contracted: "You're Maria.",
          meaningByLang: { hi: 'आप मारिया हैं।', es: 'Tú eres María.', fr: 'Vous êtes Maria.', de: 'Du bist Maria.', pt: 'Você é a Maria.', zh: '你是玛丽亚。', ar: 'أنت ماريا.', ja: 'あなたはマリアです。', ru: 'Вы Мария.' }
        },
        {
          full: 'He is a student.',
          contracted: "He's a student.",
          meaningByLang: { hi: 'वह एक छात्र है।', es: 'Él es estudiante.', fr: 'Il est étudiant.', de: 'Er ist Student.' }
        },
        {
          full: 'She is a teacher.',
          contracted: "She's a teacher.",
          meaningByLang: { hi: 'वह एक शिक्षिका हैं।', es: 'Ella es profesora.', fr: 'Elle est professeur.' }
        },
        {
          full: 'It is a nice city.',
          contracted: "It's a nice city.",
          meaningByLang: { hi: 'यह एक अच्छा शहर है।', es: 'Es una buena ciudad.' }
        },
        {
          full: 'We are friends.',
          contracted: "We're friends.",
          meaningByLang: { hi: 'हम दोस्त हैं।', es: 'Somos amigos.' }
        },
        {
          full: 'They are from Spain.',
          contracted: "They're from Spain.",
          meaningByLang: { hi: 'वे स्पेन से हैं।', es: 'Ellos son de España.' }
        },
        {
          full: 'What is your name?',
          contracted: "What's your name?",
          meaningByLang: { hi: 'आपका नाम क्या है?', es: '¿Cuál es tu nombre?' }
        }
      ]
    },
    patterns: [
      {
        structure: 'Affirmative: Subject + BE (am / is / are) + [Info]',
        explanation: 'Use this to state your name, origin, city, or profession.',
        explanationsByLang: {
          hi: 'अपने नाम, देश या पेशे के बारे में बताने के लिए इसका प्रयोग करें।',
          es: 'Usa esto para indicar tu nombre, origen, ciudad o profesión.'
        },
        examples: [
          {
            english: 'I am Anil.',
            translationByLang: { hi: 'मैं अनिल हूँ।', es: 'Soy Anil.' },
            audioId: 'en_a1_u01_l01_gp_1'
          },
          {
            english: 'She is from Germany.',
            translationByLang: { hi: 'वह जर्मनी से है।', es: 'Ella es de Alemania.' },
            audioId: 'en_a1_u01_l01_gp_2'
          }
        ]
      }
    ]
  },

  // SECTION 7: Common Errors & Remedies
  commonMistakes: [
    {
      id: 'cm_l1_missing_be',
      incorrect: 'I Rahul.',
      correct: 'I am Rahul. / I\'m Rahul.',
      whyExplanation: 'English sentences require the verb "BE" (am / is / are) to link the subject with a name or identity. Never omit "am".',
      explanationsByLang: {
        hi: 'अंग्रेजी में नाम या पहचान बताने के लिए verb "BE" (am, is, are) अनिवार्य है। "I Rahul" अधूरा है, "I am Rahul" या "I\'m Rahul" कहें।',
        es: 'En inglés se necesita el verbo BE para unir el sujeto con el nombre. Siempre di "I am Rahul" o "I\'m Rahul".',
        fr: 'En anglais, le verbe BE est obligatoire : dites "I am Rahul" ou "I\'m Rahul".',
        de: 'Im Englischen ist das Verb BE erforderlich: Sagen Sie "I am Rahul" oder "I\'m Rahul".'
      }
    },
    {
      id: 'cm_l1_what_your_name',
      incorrect: 'What your name?',
      correct: 'What is your name? / What\'s your name?',
      whyExplanation: 'Questions in English must contain the linking verb "is". Use the contraction "What\'s" in natural spoken conversation.',
      explanationsByLang: {
        hi: 'प्रश्न पूछते समय क्रिया "is" का होना आवश्यक है। स्वाभाविक बातचीत में "What\'s your name?" का प्रयोग करें।',
        es: 'Las preguntas en inglés deben incluir el verbo "is". Usa "What\'s your name?" en conversación natural.',
        fr: 'La question doit contenir le verbe "is" : "What\'s your name ?".',
        de: 'Fragen müssen das Hilfsverb "is" enthalten: "What\'s your name?".'
      }
    },
    {
      id: 'cm_l1_from_vs_in',
      incorrect: 'I from India and I live at Mumbai.',
      correct: 'I am from India and I live in Mumbai.',
      whyExplanation: 'Use "I am from [country]" for your origin, and "I live in [city]" with the preposition "in" for cities and large areas.',
      explanationsByLang: {
        hi: 'मूल देश के लिए "I am from [देश]" और रहने के शहर के लिए preposition "in" के साथ "I live in [शहर]" का प्रयोग करें।',
        es: 'Usa "I am from [país]" para tu origen y "I live in [ciudad]" con "in" para la ciudad donde vives.',
        fr: 'Utilisez "I am from" pour l\'origine et "I live in" pour la ville de résidence.',
        de: 'Verwenden Sie "I am from" für die Herkunft und "I live in" für den Wohnort.'
      }
    },
    {
      id: 'cm_l1_subject_verb_agreement',
      incorrect: 'He are from Canada.',
      correct: 'He is from Canada.',
      whyExplanation: 'Singular third-person pronouns (he, she, it) pair with "is", while plural subjects and "you" pair with "are".',
      explanationsByLang: {
        hi: 'एकवचन तीसरे पुरुष (he, she, it) के साथ "is" का प्रयोग होता है, जबकि "you, we, they" के साथ "are" आता है।',
        es: 'Los pronombres singulares (he, she, it) van con "is". "Are" es para you, we, they.',
        fr: 'Les pronoms singuliers (he, she, it) s\'accordent avec "is".',
        de: 'Singular-Pronomen (he, she, it) werden mit "is" kombiniert.'
      }
    }
  ],

  // SECTION 9: Mini Dialogues in 6 Realistic Adult Contexts
  dialogues: [
    {
      id: 'dlg_1',
      title: 'Context 1: University Campus Meeting',
      context: 'Anil meets Sarah on the first day of university classes.',
      lines: [
        {
          speaker: 'Anil',
          characterId: 'anil',
          speakerVoiceId: 'EN_DIALOGUE_M_01',
          avatar: '👨‍🎓',
          text: "Hello! I'm Anil. What's your name?",
          translationsByLang: { hi: 'नमस्ते! मैं अनिल हूँ। आपका नाम क्या है?', es: '¡Hola! Soy Anil. ¿Cómo te llamas?' },
          audioText: "Hello! I'm Anil. What's your name?",
          audioId: 'en_a1_u01_l01_d1_l1'
        },
        {
          speaker: 'Sarah',
          characterId: 'sarah',
          speakerVoiceId: 'EN_DIALOGUE_F_01',
          avatar: '👩‍🎓',
          text: "Hi Anil! My name is Sarah. I'm a student here.",
          translationsByLang: { hi: 'हाय अनिल! मेरा नाम सारा है। मैं यहाँ एक छात्रा हूँ।', es: '¡Hola Anil! Mi nombre es Sarah. Soy estudiante aquí.' },
          audioText: "Hi Anil! My name is Sarah. I'm a student here.",
          audioId: 'en_a1_u01_l01_d1_l2'
        },
        {
          speaker: 'Anil',
          characterId: 'anil',
          speakerVoiceId: 'EN_DIALOGUE_M_01',
          avatar: '👨‍🎓',
          text: "Nice to meet you, Sarah! Where are you from?",
          translationsByLang: { hi: 'आपसे मिलकर अच्छा लगा, सारा! आप कहाँ से हैं?', es: '¡Mucho gusto, Sarah! ¿De dónde eres?' },
          audioText: "Nice to meet you, Sarah! Where are you from?",
          audioId: 'en_a1_u01_l01_d1_l3'
        },
        {
          speaker: 'Sarah',
          characterId: 'sarah',
          speakerVoiceId: 'EN_DIALOGUE_F_01',
          avatar: '👩‍🎓',
          text: "I'm from Canada. And you?",
          translationsByLang: { hi: 'मैं कनाडा से हूँ। और आप?', es: 'Soy de Canadá. ¿Y tú?' },
          audioText: "I'm from Canada. And you?",
          audioId: 'en_a1_u01_l01_d1_l4'
        },
        {
          speaker: 'Anil',
          characterId: 'anil',
          speakerVoiceId: 'EN_DIALOGUE_M_01',
          avatar: '👨‍🎓',
          text: "I'm from India. I live in Mumbai.",
          translationsByLang: { hi: 'मैं भारत से हूँ। मैं मुंबई में रहता हूँ।', es: 'Soy de India. Vivo en Mumbai.' },
          audioText: "I'm from India. I live in Mumbai.",
          audioId: 'en_a1_u01_l01_d1_l5'
        }
      ]
    },
    {
      id: 'dlg_2',
      title: 'Context 2: Tech Company Welcome',
      context: 'David welcomes Maria to her new team.',
      lines: [
        {
          speaker: 'David',
          characterId: 'david',
          speakerVoiceId: 'EN_DIALOGUE_M_02',
          avatar: '👨‍💼',
          text: "Good morning! My name is David. I'm a software engineer.",
          translationsByLang: { hi: 'शुभ प्रभात! मेरा नाम डेविड है। मैं एक सॉफ्टवेयर इंजीनियर हूँ।', es: '¡Buenos días! Mi nombre es David. Soy ingeniero de software.' },
          audioText: "Good morning! My name is David. I'm a software engineer.",
          audioId: 'en_a1_u01_l01_d2_l1'
        },
        {
          speaker: 'Maria',
          characterId: 'maria',
          speakerVoiceId: 'EN_DIALOGUE_F_02',
          avatar: '👩‍💼',
          text: "Good morning David. I'm Maria. I live in Madrid.",
          translationsByLang: { hi: 'शुभ प्रभात डेविड। मैं मारिया हूँ। मैं मैड्रिड में रहती हूँ।', es: 'Buenos días David. Soy María. Vivo en Madrid.' },
          audioText: "Good morning David. I'm Maria. I live in Madrid.",
          audioId: 'en_a1_u01_l01_d2_l2'
        },
        {
          speaker: 'David',
          characterId: 'david',
          speakerVoiceId: 'EN_DIALOGUE_M_02',
          avatar: '👨‍💼',
          text: "Welcome to the company, Maria. What do you do here?",
          translationsByLang: { hi: 'कंपनी में आपका स्वागत है, मारिया। आप यहाँ क्या काम करती हैं?', es: 'Bienvenida a la empresa, María. ¿A qué te dedicas aquí?' },
          audioText: "Welcome to the company, Maria. What do you do here?",
          audioId: 'en_a1_u01_l01_d2_l3'
        },
        {
          speaker: 'Maria',
          characterId: 'maria',
          speakerVoiceId: 'EN_DIALOGUE_F_02',
          avatar: '👩‍💼',
          text: "I'm a project manager. Nice to meet you!",
          translationsByLang: { hi: 'मैं एक प्रोजेक्ट मैनेजर हूँ। आपसे मिलकर खुशी हुई!', es: 'Soy gerente de proyectos. ¡Gusto en conocerte!' },
          audioText: "I'm a project manager. Nice to meet you!",
          audioId: 'en_a1_u01_l01_d2_l4'
        }
      ]
    },
    {
      id: 'dlg_3',
      title: 'Context 3: Airport Cafe Conversation',
      context: 'Carlos and Priya chat while waiting for their flights.',
      lines: [
        {
          speaker: 'Carlos',
          characterId: 'carlos',
          speakerVoiceId: 'EN_DIALOGUE_M_02',
          avatar: '👨‍🦱',
          text: "Hi! Is this seat free? I'm Carlos.",
          translationsByLang: { hi: 'हाय! क्या यह सीट खाली है? मैं कार्लोस हूँ।', es: '¡Hola! ¿Este asiento está libre? Soy Carlos.' },
          audioText: "Hi! Is this seat free? I'm Carlos.",
          audioId: 'en_a1_u01_l01_d3_l1'
        },
        {
          speaker: 'Priya',
          characterId: 'priya',
          speakerVoiceId: 'EN_DIALOGUE_F_01',
          avatar: '👩',
          text: "Yes, it is! Hi Carlos, my name is Priya. Where are you from?",
          translationsByLang: { hi: 'हाँ, यह खाली है! हाय कार्लोस, मेरा नाम प्रिया है। आप कहाँ से हैं?', es: '¡Sí! Hola Carlos, mi nombre es Priya. ¿De dónde eres?' },
          audioText: "Yes, it is! Hi Carlos, my name is Priya. Where are you from?",
          audioId: 'en_a1_u01_l01_d3_l2'
        },
        {
          speaker: 'Carlos',
          characterId: 'carlos',
          speakerVoiceId: 'EN_DIALOGUE_M_02',
          avatar: '👨‍🦱',
          text: "I'm from Mexico. I live in Mexico City. What about you?",
          translationsByLang: { hi: 'मैं मैक्सिको से हूँ। मैं मैक्सिको सिटी में रहता हूँ। आपके बारे में क्या?', es: 'Soy de México. Vivo en la Ciudad de México. ¿Y tú?' },
          audioText: "I'm from Mexico. I live in Mexico City. What about you?",
          audioId: 'en_a1_u01_l01_d3_l3'
        },
        {
          speaker: 'Priya',
          characterId: 'priya',
          speakerVoiceId: 'EN_DIALOGUE_F_01',
          avatar: '👩',
          text: "I'm from India. I live in New Delhi. I'm a doctor.",
          translationsByLang: { hi: 'मैं भारत से हूँ। मैं नई दिल्ली में रहती हूँ। मैं एक डॉक्टर हूँ।', es: 'Soy de India. Vivo en Nueva Delhi. Soy médica.' },
          audioText: "I'm from India. I live in New Delhi. I'm a doctor.",
          audioId: 'en_a1_u01_l01_d3_l4'
        }
      ]
    },
    {
      id: 'dlg_4',
      title: 'Context 4: Casual Neighborhood Park Greeting',
      context: 'Rahul and Emma meet while walking in the park.',
      lines: [
        {
          speaker: 'Rahul',
          characterId: 'rahul',
          speakerVoiceId: 'EN_DIALOGUE_M_01',
          avatar: '🏃‍♂️',
          text: "Hello! Good evening! My name is Rahul.",
          translationsByLang: { hi: 'नमस्ते! शुभ संध्या! मेरा नाम राहुल है।', es: '¡Hola! ¡Buenas tardes! Mi nombre es Rahul.' },
          audioText: "Hello! Good evening! My name is Rahul.",
          audioId: 'en_a1_u01_l01_d4_l1'
        },
        {
          speaker: 'Emma',
          characterId: 'emma',
          speakerVoiceId: 'EN_DIALOGUE_F_02',
          avatar: '🚶‍♀️',
          text: "Hello Rahul! I'm Emma. Where do you live?",
          translationsByLang: { hi: 'नमस्ते राहुल! मैं एम्मा हूँ। आप कहाँ रहते हैं?', es: '¡Hola Rahul! Soy Emma. ¿Dónde vives?' },
          audioText: "Hello Rahul! I'm Emma. Where do you live?",
          audioId: 'en_a1_u01_l01_d4_l2'
        },
        {
          speaker: 'Rahul',
          characterId: 'rahul',
          speakerVoiceId: 'EN_DIALOGUE_M_01',
          avatar: '🏃‍♂️',
          text: "I live near here! Nice to meet you, Emma.",
          translationsByLang: { hi: 'मैं पास ही रहता हूँ! आपसे मिलकर अच्छा लगा, एम्मा।', es: '¡Vivo cerca de aquí! Gusto en conocerte, Emma.' },
          audioText: "I live near here! Nice to meet you, Emma.",
          audioId: 'en_a1_u01_l01_d4_l3'
        }
      ]
    },
    {
      id: 'dlg_5',
      title: 'Context 5: Online Video Meeting Check-in',
      context: 'Alex and Mei introduce themselves in a virtual meeting call.',
      lines: [
        {
          speaker: 'Alex',
          characterId: 'alex',
          speakerVoiceId: 'EN_DIALOGUE_M_01',
          avatar: '💻',
          text: "Hello everyone! Can you hear me? I'm Alex from Sydney.",
          translationsByLang: { hi: 'सभी को नमस्ते! क्या आप मुझे सुन सकते हैं? मैं सिडनी से एलेक्स हूँ।', es: '¡Hola a todos! ¿Me escuchan? Soy Alex de Sídney.' },
          audioText: "Hello everyone! Can you hear me? I'm Alex from Sydney.",
          audioId: 'en_a1_u01_l01_d5_l1'
        },
        {
          speaker: 'Mei',
          characterId: 'mei',
          speakerVoiceId: 'EN_DIALOGUE_F_01',
          avatar: '👩‍💻',
          text: "Hi Alex! Yes, loud and clear. My name is Mei. I live in Tokyo.",
          translationsByLang: { hi: 'हाय एलेक्स! हाँ, बिल्कुल साफ़। मेरा नाम मेई है। मैं टोक्यो में रहती हूँ।', es: '¡Hola Alex! Sí, fuerte y claro. Mi nombre es Mei. Vivo en Tokio.' },
          audioText: "Hi Alex! Yes, loud and clear. My name is Mei. I live in Tokyo.",
          audioId: 'en_a1_u01_l01_d5_l2'
        },
        {
          speaker: 'Alex',
          characterId: 'alex',
          speakerVoiceId: 'EN_DIALOGUE_M_01',
          avatar: '💻',
          text: "Nice to meet you, Mei!",
          translationsByLang: { hi: 'आपसे मिलकर अच्छा लगा, मेई!', es: '¡Mucho gusto, Mei!' },
          audioText: "Nice to meet you, Mei!",
          audioId: 'en_a1_u01_l01_d5_l3'
        }
      ]
    },
    {
      id: 'dlg_6',
      title: 'Context 6: New Colleague Onboarding',
      context: 'John introduces Nina to the department team.',
      lines: [
        {
          speaker: 'John',
          characterId: 'john',
          speakerVoiceId: 'EN_DIALOGUE_M_02',
          avatar: '👨‍💼',
          text: "Hi everyone, this is Nina. She is our new teacher.",
          translationsByLang: { hi: 'सभी को हाय, यह नीना हैं। यह हमारी नई शिक्षिका हैं।', es: 'Hola a todos, ella es Nina. Es nuestra nueva profesora.' },
          audioText: "Hi everyone, this is Nina. She is our new teacher.",
          audioId: 'en_a1_u01_l01_d6_l1'
        },
        {
          speaker: 'Nina',
          characterId: 'nina',
          speakerVoiceId: 'EN_DIALOGUE_F_02',
          avatar: '👩‍🏫',
          text: "Hello! I'm from Germany. Nice to meet you all!",
          translationsByLang: { hi: 'नमस्ते! मैं जर्मनी से हूँ। आप सभी से मिलकर खुशी हुई!', es: '¡Hola! Soy de Alemania. ¡Un gusto conocerlos a todos!' },
          audioText: "Hello! I'm from Germany. Nice to meet you all!",
          audioId: 'en_a1_u01_l01_d6_l2'
        },
        {
          speaker: 'John',
          characterId: 'john',
          speakerVoiceId: 'EN_DIALOGUE_M_02',
          avatar: '👨‍💼',
          text: "Welcome to the team, Nina!",
          translationsByLang: { hi: 'टीम में आपका स्वागत है, नीना!', es: '¡Bienvenida al equipo, Nina!' },
          audioText: "Welcome to the team, Nina!",
          audioId: 'en_a1_u01_l01_d6_l3'
        }
      ]
    }
  ],

  // SECTION 14 & 15 & 16: Extensive Practice Exercises (50 Items)
  practiceExercises: [
    // --- CATEGORY A: RECOGNITION & MEANING (1-5) ---
    {
      id: 'pe_1',
      type: 'recognition',
      prompt: 'Choose the correct meaning of this sentence:',
      sourceSentence: 'My name is Maria.',
      targetSentence: 'My name is Maria.',
      options: [
        { id: 'o1', text: 'I live in Maria.', isCorrect: false },
        { id: 'o2', text: 'My name is Maria.', isCorrect: true },
        { id: 'o3', text: 'Maria is my country.', isCorrect: false }
      ],
      explanation: '"My name is Maria" directly states a person\'s name.'
    },
    {
      id: 'pe_2',
      type: 'recognition',
      prompt: 'What does this sentence express?',
      sourceSentence: "I'm from India.",
      targetSentence: "I'm from India.",
      options: [
        { id: 'o1', text: 'My origin or home country', isCorrect: true },
        { id: 'o2', text: 'My job title', isCorrect: false },
        { id: 'o3', text: 'My current age', isCorrect: false }
      ],
      explanation: '"from India" expresses origin or country of birth.'
    },
    {
      id: 'pe_3',
      type: 'recognition',
      prompt: 'Choose the correct English phrase for:',
      sourceSentence: 'आपसे मिलकर अच्छा लगा।',
      sourceTranslations: { hi: 'आपसे मिलकर अच्छा लगा।' },
      targetSentence: 'Nice to meet you.',
      options: [
        { id: 'o1', text: 'Where live you?', isCorrect: false },
        { id: 'o2', text: 'Nice to meet you.', isCorrect: true },
        { id: 'o3', text: 'Good morning my friend.', isCorrect: false }
      ],
      explanation: '"Nice to meet you" is the standard polite greeting upon introduction.'
    },
    {
      id: 'pe_4',
      type: 'recognition',
      prompt: 'Identify the question being asked:',
      sourceSentence: "What's your name?",
      targetSentence: "What's your name?",
      options: [
        { id: 'o1', text: 'Asking for someone\'s country', isCorrect: false },
        { id: 'o2', text: 'Asking for someone\'s name', isCorrect: true },
        { id: 'o3', text: 'Asking for someone\'s occupation', isCorrect: false }
      ],
      explanation: '"What\'s your name?" asks a person to reveal their name.'
    },
    {
      id: 'pe_5',
      type: 'recognition',
      prompt: 'What does this question ask about?',
      sourceSentence: 'What do you do?',
      targetSentence: 'What do you do?',
      options: [
        { id: 'o1', text: 'Your hobbies on weekend', isCorrect: false },
        { id: 'o2', text: 'Your job or profession / study', isCorrect: true },
        { id: 'o3', text: 'Your favorite city', isCorrect: false }
      ],
      explanation: '"What do you do?" is the standard English way to ask about someone\'s job or profession.'
    },

    // --- CATEGORY B: MULTIPLE CHOICE (6-10) ---
    {
      id: 'pe_6',
      type: 'multiple_choice',
      prompt: 'Choose the correct word to complete the sentence:',
      sourceSentence: '___ name is John.',
      targetSentence: 'My name is John.',
      options: [
        { id: 'm1', text: 'My', isCorrect: true },
        { id: 'm2', text: 'Your', isCorrect: false },
        { id: 'm3', text: 'From', isCorrect: false }
      ],
      explanation: 'Use possessive pronoun "My" to introduce your own name.'
    },
    {
      id: 'pe_7',
      type: 'multiple_choice',
      prompt: 'Select the correct question word for origin:',
      sourceSentence: '___ are you from?',
      targetSentence: 'Where are you from?',
      options: [
        { id: 'm1', text: 'What', isCorrect: false },
        { id: 'm2', text: 'Where', isCorrect: true },
        { id: 'm3', text: 'How', isCorrect: false }
      ],
      explanation: 'Use "Where" to ask about location or country of origin.'
    },
    {
      id: 'pe_8',
      type: 'multiple_choice',
      prompt: 'Complete the polite phrase:',
      sourceSentence: 'Nice to meet you ___.',
      targetSentence: 'Nice to meet you too.',
      options: [
        { id: 'm1', text: 'too', isCorrect: true },
        { id: 'm2', text: 'two', isCorrect: false },
        { id: 'm3', text: 'to', isCorrect: false }
      ],
      explanation: '"too" means "also" or "as well" in polite return greetings.'
    },
    {
      id: 'pe_9',
      type: 'multiple_choice',
      prompt: 'Select the correct BE verb form for "You":',
      sourceSentence: 'You ___ from Spain.',
      targetSentence: 'You are from Spain.',
      options: [
        { id: 'm1', text: 'am', isCorrect: false },
        { id: 'm2', text: 'are', isCorrect: true },
        { id: 'm3', text: 'is', isCorrect: false }
      ],
      explanation: 'The subject pronoun "You" always pairs with the verb "are".'
    },
    {
      id: 'pe_10',
      type: 'multiple_choice',
      prompt: 'Select the correct article for profession:',
      sourceSentence: "I'm ___ student at university.",
      targetSentence: "I'm a student at university.",
      options: [
        { id: 'm1', text: 'a', isCorrect: true },
        { id: 'm2', text: 'an', isCorrect: false },
        { id: 'm3', text: 'the', isCorrect: false }
      ],
      explanation: 'Use "a" before consonant sound "student" (a student).'
    },

    // --- CATEGORY C: FILL IN THE BLANK (11-15) ---
    {
      id: 'pe_11',
      type: 'fill_blank',
      prompt: 'Fill in the missing preposition:',
      sourceSentence: "I'm ___ India.",
      targetSentence: "I'm from India.",
      options: [
        { id: 'f1', text: 'from', isCorrect: true },
        { id: 'f2', text: 'in', isCorrect: false },
        { id: 'f3', text: 'at', isCorrect: false }
      ],
      explanation: '"from" connects a person to their country of origin.'
    },
    {
      id: 'pe_12',
      type: 'fill_blank',
      prompt: 'Complete the residence statement:',
      sourceSentence: 'I live ___ Delhi.',
      targetSentence: 'I live in Delhi.',
      options: [
        { id: 'f1', text: 'in', isCorrect: true },
        { id: 'f2', text: 'from', isCorrect: false },
        { id: 'f3', text: 'on', isCorrect: false }
      ],
      explanation: 'Use preposition "in" with cities and countries (live in Delhi).'
    },
    {
      id: 'pe_13',
      type: 'fill_blank',
      prompt: 'Complete the contracted sentence:',
      sourceSentence: '___ Anil.',
      targetSentence: "I'm Anil.",
      options: [
        { id: 'f1', text: "I'm", isCorrect: true },
        { id: 'f2', text: 'I am not', isCorrect: false },
        { id: 'f3', text: 'My', isCorrect: false }
      ],
      explanation: '"I\'m" is the natural contraction for "I am".'
    },
    {
      id: 'pe_14',
      type: 'fill_blank',
      prompt: 'Fill in the verb for profession:',
      sourceSentence: 'I ___ in a software company.',
      targetSentence: 'I work in a software company.',
      options: [
        { id: 'f1', text: 'work', isCorrect: true },
        { id: 'f2', text: 'am', isCorrect: false },
        { id: 'f3', text: 'live', isCorrect: false }
      ],
      explanation: 'Use "work" to describe your employment activity in a company.'
    },
    {
      id: 'pe_15',
      type: 'fill_blank',
      prompt: 'Complete the question auxiliary:',
      sourceSentence: 'Where do you ___?',
      targetSentence: 'Where do you live?',
      options: [
        { id: 'f1', text: 'live', isCorrect: true },
        { id: 'f2', text: 'from', isCorrect: false },
        { id: 'f3', text: 'am', isCorrect: false }
      ],
      explanation: '"Where do you live?" is the complete correct question.'
    },

    // --- CATEGORY D: WORD ORDERING & SENTENCE BUILDING (16-20) ---
    {
      id: 'pe_16',
      type: 'word_ordering',
      prompt: 'Rearrange the tiles to build the self-introduction:',
      sourceSentence: 'My / name / is / Sarah',
      targetSentence: 'My name is Sarah',
      correctAnswer: 'My name is Sarah',
      wordBank: ['My', 'name', 'is', 'Sarah', 'live', 'from'],
      explanation: 'Subject + noun + verb + name: "My name is Sarah."'
    },
    {
      id: 'pe_17',
      type: 'word_ordering',
      prompt: 'Rearrange the tiles to ask where someone is from:',
      sourceSentence: 'Where / are / you / from / ?',
      targetSentence: 'Where are you from',
      correctAnswer: 'Where are you from',
      wordBank: ['Where', 'are', 'you', 'from', 'do', 'live'],
      explanation: 'Question word order: Where + are + you + from?'
    },
    {
      id: 'pe_18',
      type: 'word_ordering',
      prompt: 'Build the residence statement:',
      sourceSentence: 'I / live / in / Delhi',
      targetSentence: 'I live in Delhi',
      correctAnswer: 'I live in Delhi',
      wordBank: ['I', 'live', 'in', 'Delhi', 'am', 'from'],
      explanation: 'Correct pattern: I + live + in + [City].'
    },
    {
      id: 'pe_19',
      type: 'word_ordering',
      prompt: 'Build the occupation statement:',
      sourceSentence: 'I / am / a / student',
      targetSentence: 'I am a student',
      correctAnswer: 'I am a student',
      wordBank: ['I', 'am', 'a', 'student', 'work', 'in'],
      explanation: 'Correct pattern: I + am + a + [profession].'
    },
    {
      id: 'pe_20',
      type: 'word_ordering',
      prompt: 'Build the polite closing greeting:',
      sourceSentence: 'Nice / to / meet / you',
      targetSentence: 'Nice to meet you',
      correctAnswer: 'Nice to meet you',
      wordBank: ['Nice', 'to', 'meet', 'you', 'too', 'your'],
      explanation: 'Fixed polite phrase: "Nice to meet you."'
    },

    // --- CATEGORY E: QUESTION FORMATION (21-25) ---
    {
      id: 'pe_21',
      type: 'question_formation',
      prompt: 'Build the question asking someone\'s name:',
      sourceSentence: "What's / your / name / ?",
      targetSentence: "What's your name",
      correctAnswer: "What's your name",
      wordBank: ["What's", 'your', 'name', 'are', 'you', 'from'],
      explanation: '"What\'s your name?" asks for a person\'s name.'
    },
    {
      id: 'pe_22',
      type: 'question_formation',
      prompt: 'Build the question asking where someone lives:',
      sourceSentence: 'Where / do / you / live / ?',
      targetSentence: 'Where do you live',
      correctAnswer: 'Where do you live',
      wordBank: ['Where', 'do', 'you', 'live', 'are', 'from'],
      explanation: 'Action verb "live" requires auxiliary "do": Where + do + you + live?'
    },
    {
      id: 'pe_23',
      type: 'question_formation',
      prompt: 'Build the question asking what someone does for work:',
      sourceSentence: 'What / do / you / do / ?',
      targetSentence: 'What do you do',
      correctAnswer: 'What do you do',
      wordBank: ['What', 'do', 'you', 'do', 'are', 'work'],
      explanation: 'Standard question: What + do + you + do?'
    },
    {
      id: 'pe_24',
      type: 'question_formation',
      prompt: 'Build the yes/no origin question:',
      sourceSentence: 'Are / you / from / India / ?',
      targetSentence: 'Are you from India',
      correctAnswer: 'Are you from India',
      wordBank: ['Are', 'you', 'from', 'India', 'do', 'live'],
      explanation: 'Invert verb and subject for yes/no question: Are + you + from + [country]?'
    },
    {
      id: 'pe_25',
      type: 'multiple_choice',
      prompt: 'Select the correct short answer to "Are you a student?"',
      sourceSentence: 'Are you a student?',
      targetSentence: 'Yes, I am.',
      options: [
        { id: 'q1', text: 'Yes, I am.', isCorrect: true },
        { id: 'q2', text: 'Yes, I do.', isCorrect: false },
        { id: 'q3', text: 'Yes, I live.', isCorrect: false }
      ],
      explanation: 'To answer a BE question ("Are you...?"), respond with "Yes, I am."'
    },

    // --- CATEGORY F: ERROR CORRECTION (26-30) ---
    {
      id: 'pe_26',
      type: 'error_correction',
      prompt: 'Identify the error in this sentence and select the correct form:',
      errorSentence: 'I from India.',
      sourceSentence: 'I from India.',
      targetSentence: "I'm from India.",
      options: [
        { id: 'ec1', text: "I'm from India.", isCorrect: true },
        { id: 'ec2', text: 'I froming India.', isCorrect: false },
        { id: 'ec3', text: 'I am froming India.', isCorrect: false }
      ],
      explanation: 'You MUST include the verb "am" / "\'m" in English: "I\'m from India."'
    },
    {
      id: 'pe_27',
      type: 'error_correction',
      prompt: 'Identify the error in this question:',
      errorSentence: 'Where you are from?',
      sourceSentence: 'Where you are from?',
      targetSentence: 'Where are you from?',
      options: [
        { id: 'ec1', text: 'Where are you from?', isCorrect: true },
        { id: 'ec2', text: 'Where you from are?', isCorrect: false },
        { id: 'ec3', text: 'Where is you from?', isCorrect: false }
      ],
      explanation: 'In questions, the verb "are" MUST come BEFORE "you".'
    },
    {
      id: 'pe_28',
      type: 'error_correction',
      prompt: 'Fix the grammar error in this residence statement:',
      errorSentence: 'I am live in Delhi.',
      sourceSentence: 'I am live in Delhi.',
      targetSentence: 'I live in Delhi.',
      options: [
        { id: 'ec1', text: 'I live in Delhi.', isCorrect: true },
        { id: 'ec2', text: 'I am living in Delhi.', isCorrect: false },
        { id: 'ec3', text: 'I living in Delhi.', isCorrect: false }
      ],
      explanation: 'Do not mix "am" with the action verb "live". Simply say "I live in Delhi."'
    },
    {
      id: 'pe_29',
      type: 'error_correction',
      prompt: 'Fix the greeting error:',
      errorSentence: 'Nice meet you.',
      sourceSentence: 'Nice meet you.',
      targetSentence: 'Nice to meet you.',
      options: [
        { id: 'ec1', text: 'Nice to meet you.', isCorrect: true },
        { id: 'ec2', text: 'Nice meeting you.', isCorrect: false },
        { id: 'ec3', text: 'Nice for meet you.', isCorrect: false }
      ],
      explanation: 'The fixed English chunk is "Nice to meet you."'
    },
    {
      id: 'pe_30',
      type: 'error_correction',
      prompt: 'Fix the profession error:',
      errorSentence: 'I work in a teacher.',
      sourceSentence: 'I work in a teacher.',
      targetSentence: "I'm a teacher.",
      options: [
        { id: 'ec1', text: "I'm a teacher.", isCorrect: true },
        { id: 'ec2', text: 'I work teacher.', isCorrect: false },
        { id: 'ec3', text: 'I am work a teacher.', isCorrect: false }
      ],
      explanation: 'To state your job, say "I\'m a teacher."'
    },

    // --- CATEGORY G: DIALOGUE COMPLETION (31-35) ---
    {
      id: 'pe_31',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue with the best response:',
      dialogueContext: {
        speakerA: 'Anil',
        lineA: 'Hello! My name is Anil.',
        speakerB: 'Sarah'
      },
      targetSentence: 'Hi Anil. I am Sarah. Nice to meet you.',
      options: [
        { id: 'dc1', text: 'Hi Anil. I am Sarah. Nice to meet you.', isCorrect: true },
        { id: 'dc2', text: 'I live in Delhi.', isCorrect: false },
        { id: 'dc3', text: 'I am from Canada.', isCorrect: false }
      ],
      explanation: 'When someone introduces their name, respond with your name and "Nice to meet you."'
    },
    {
      id: 'pe_32',
      type: 'dialogue_completion',
      prompt: 'Select the best response in this conversation:',
      dialogueContext: {
        speakerA: 'Maria',
        lineA: 'Where are you from, David?',
        speakerB: 'David'
      },
      targetSentence: "I'm from Canada. And you?",
      options: [
        { id: 'dc1', text: "I'm from Canada. And you?", isCorrect: true },
        { id: 'dc2', text: 'My name is David.', isCorrect: false },
        { id: 'dc3', text: 'I am a software engineer.', isCorrect: false }
      ],
      explanation: 'Answer "Where are you from?" with "I\'m from [Country]."'
    },
    {
      id: 'pe_33',
      type: 'dialogue_completion',
      prompt: 'Select the best response:',
      dialogueContext: {
        speakerA: 'Priya',
        lineA: 'Nice to meet you, Carlos.',
        speakerB: 'Carlos'
      },
      targetSentence: 'Nice to meet you too, Priya.',
      options: [
        { id: 'dc1', text: 'Nice to meet you too, Priya.', isCorrect: true },
        { id: 'dc2', text: 'I live in Mexico City.', isCorrect: false },
        { id: 'dc3', text: 'I am 25 years old.', isCorrect: false }
      ],
      explanation: 'Respond with "Nice to meet you too" when someone greets you politely.'
    },
    {
      id: 'pe_34',
      type: 'dialogue_completion',
      prompt: 'Complete the workplace introduction:',
      dialogueContext: {
        speakerA: 'Emma',
        lineA: 'What do you do, Rahul?',
        speakerB: 'Rahul'
      },
      targetSentence: "I'm a software engineer.",
      options: [
        { id: 'dc1', text: "I'm a software engineer.", isCorrect: true },
        { id: 'dc2', text: 'I live in India.', isCorrect: false },
        { id: 'dc3', text: 'My name is Rahul.', isCorrect: false }
      ],
      explanation: '"What do you do?" asks for your profession.'
    },
    {
      id: 'pe_35',
      type: 'dialogue_completion',
      prompt: 'Choose the natural return question:',
      dialogueContext: {
        speakerA: 'John',
        lineA: "I'm good, thanks. How are you?",
        speakerB: 'Nina'
      },
      targetSentence: "I'm good too, thanks!",
      options: [
        { id: 'dc1', text: "I'm good too, thanks!", isCorrect: true },
        { id: 'dc2', text: 'Where do you live?', isCorrect: false },
        { id: 'dc3', text: 'I am from Germany.', isCorrect: false }
      ],
      explanation: 'Respond to "How are you?" with "I\'m good too, thanks!"'
    },

    // --- CATEGORY H: LISTENING & DICTATION (36-40) ---
    {
      id: 'pe_36',
      type: 'listening',
      prompt: 'Listen to the audio clip and select what you hear:',
      audioText: 'Where are you from?',
      sourceSentence: 'Where are you from?',
      targetSentence: 'Where are you from?',
      options: [
        { id: 'l1', text: 'Where do you live?', isCorrect: false },
        { id: 'l2', text: 'Where are you from?', isCorrect: true },
        { id: 'l3', text: 'What is your name?', isCorrect: false }
      ],
      explanation: 'The audio plays "Where are you from?"'
    },
    {
      id: 'pe_37',
      type: 'listening',
      prompt: 'Listen and select the spoken occupation:',
      audioText: 'I am a university student.',
      sourceSentence: 'I am a university student.',
      targetSentence: 'I am a university student.',
      options: [
        { id: 'l1', text: 'I am an English teacher.', isCorrect: false },
        { id: 'l2', text: 'I am a university student.', isCorrect: true },
        { id: 'l3', text: 'I am a software engineer.', isCorrect: false }
      ],
      explanation: 'The audio clip says "I am a university student."'
    },
    {
      id: 'pe_38',
      type: 'listen_and_type',
      prompt: 'Listen to the spoken sentence and arrange the tiles correctly:',
      audioText: "I'm from India.",
      sourceSentence: "I'm from India.",
      targetSentence: "I'm from India",
      correctAnswer: "I'm from India",
      wordBank: ["I'm", 'from', 'India', 'live', 'in'],
      explanation: 'The sentence spoken is "I\'m from India."'
    },
    {
      id: 'pe_39',
      type: 'listen_and_type',
      prompt: 'Listen and assemble the spoken question:',
      audioText: 'Where do you live?',
      sourceSentence: 'Where do you live?',
      targetSentence: 'Where do you live',
      correctAnswer: 'Where do you live',
      wordBank: ['Where', 'do', 'you', 'live', 'are', 'from'],
      explanation: 'The audio plays "Where do you live?"'
    },
    {
      id: 'pe_40',
      type: 'listening',
      prompt: 'Listen for the contraction:',
      audioText: "What's your name?",
      sourceSentence: "What's your name?",
      targetSentence: "What's your name?",
      options: [
        { id: 'l1', text: "What's your name?", isCorrect: true },
        { id: 'l2', text: 'What is your country?', isCorrect: false },
        { id: 'l3', text: 'Where are you from?', isCorrect: false }
      ],
      explanation: 'Notice the contracted form "What\'s" (/wɒts/).'
    },

    // --- CATEGORY I: TRANSLATION & MEDIATION (41-45) ---
    {
      id: 'pe_41',
      type: 'translation',
      prompt: 'Translate this sentence into English:',
      sourceSentence: 'मैं भारत से हूँ।',
      sourceTranslations: { hi: 'मैं भारत से हूँ।' },
      targetSentence: "I'm from India.",
      correctAnswer: "I'm from India",
      wordBank: ["I'm", 'from', 'India', 'live', 'in', 'am'],
      explanation: '"मैं भारत से हूँ।" translates directly to "I\'m from India."'
    },
    {
      id: 'pe_42',
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'मैं दिल्ली में रहता हूँ।',
      sourceTranslations: { hi: 'मैं दिल्ली में रहता हूँ।' },
      targetSentence: 'I live in Delhi.',
      correctAnswer: 'I live in Delhi',
      wordBank: ['I', 'live', 'in', 'Delhi', 'from', 'am'],
      explanation: '"मैं दिल्ली में रहता हूँ।" translates to "I live in Delhi."'
    },
    {
      id: 'pe_43',
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'आपका नाम क्या है?',
      sourceTranslations: { hi: 'आपका नाम क्या है?' },
      targetSentence: "What's your name?",
      correctAnswer: "What's your name",
      wordBank: ["What's", 'your', 'name', 'Where', 'live'],
      explanation: '"आपका नाम क्या है?" translates to "What\'s your name?"'
    },
    {
      id: 'pe_44',
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'मैं एक शिक्षक हूँ।',
      sourceTranslations: { hi: 'मैं एक शिक्षक हूँ।' },
      targetSentence: "I'm a teacher.",
      correctAnswer: "I'm a teacher",
      wordBank: ["I'm", 'a', 'teacher', 'work', 'in'],
      explanation: '"मैं एक शिक्षक हूँ।" translates to "I\'m a teacher."'
    },
    {
      id: 'pe_45',
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'आप कहाँ रहते हैं?',
      sourceTranslations: { hi: 'आप कहाँ रहते हैं?' },
      targetSentence: 'Where do you live?',
      correctAnswer: 'Where do you live',
      wordBank: ['Where', 'do', 'you', 'live', 'are', 'from'],
      explanation: '"आप कहाँ रहते हैं?" translates to "Where do you live?"'
    },

    // --- CATEGORY J: SPACED RETRIEVAL & SPEAKING (46-50) ---
    {
      id: 'pe_46',
      type: 'multiple_choice',
      prompt: 'Spaced Retrieval: Choose the correct preposition for living in a city:',
      sourceSentence: 'I live ___ Madrid.',
      targetSentence: 'I live in Madrid.',
      options: [
        { id: 'sr1', text: 'in', isCorrect: true },
        { id: 'sr2', text: 'from', isCorrect: false },
        { id: 'sr3', text: 'at', isCorrect: false }
      ],
      explanation: 'Remember: use "in" for cities and countries (I live in Madrid).'
    },
    {
      id: 'pe_47',
      type: 'speaking',
      prompt: 'Speak this sentence out loud into your microphone:',
      sourceSentence: "Hello! My name is Anil. I'm from India.",
      targetSentence: "Hello! My name is Anil. I'm from India.",
      audioText: "Hello! My name is Anil. I'm from India.",
      explanation: 'Practice clear pronunciation of your self-introduction.'
    },
    {
      id: 'pe_48',
      type: 'speaking',
      prompt: 'Read this polite response out loud:',
      sourceSentence: 'Nice to meet you too.',
      targetSentence: 'Nice to meet you too.',
      audioText: 'Nice to meet you too.',
      explanation: 'Speak clearly: /naɪs tə miːt juː tuː/'
    },
    {
      id: 'pe_49',
      type: 'personal_production',
      prompt: 'Complete your personal self-introduction card:',
      sourceSentence: 'Provide your name, country of origin, and current city:',
      targetSentence: 'My name is ___. I\'m from ___. I live in ___.',
      explanation: 'Great job! You have constructed a complete, personal A1 self-introduction.'
    },
    {
      id: 'pe_50',
      type: 'word_ordering',
      prompt: 'Final Production Challenge: Build a complete self-introduction:',
      sourceSentence: "Hello / I'm / Anil / I'm / from / India",
      targetSentence: "Hello I'm Anil I'm from India",
      correctAnswer: "Hello I'm Anil I'm from India",
      wordBank: ['Hello', "I'm", 'Anil', "I'm", 'from', 'India', 'live', 'do'],
      explanation: 'You can combine greetings and origin smoothly: "Hello, I\'m Anil. I\'m from India."'
    }
  ],

  // SECTION 17: Review Exercises (10 items)
  reviewExercises: [
    {
      id: 're_1',
      type: 'multiple_choice',
      prompt: 'Review Question 1: Select the correct verb form:',
      sourceSentence: 'She ___ an English teacher.',
      targetSentence: 'She is an English teacher.',
      options: [
        { id: 'r1', text: 'is', isCorrect: true },
        { id: 'r2', text: 'are', isCorrect: false },
        { id: 'r3', text: 'am', isCorrect: false }
      ],
      explanation: 'Third person singular pronoun "She" uses verb "is".'
    },
    {
      id: 're_2',
      type: 'fill_blank',
      prompt: 'Review Question 2: Fill in the missing word:',
      sourceSentence: 'Where ___ you live?',
      targetSentence: 'Where do you live?',
      options: [
        { id: 'r1', text: 'do', isCorrect: true },
        { id: 'r2', text: 'are', isCorrect: false },
        { id: 'r3', text: 'is', isCorrect: false }
      ],
      explanation: 'Questions with main verb "live" require auxiliary "do".'
    },
    {
      id: 're_3',
      type: 'word_ordering',
      prompt: 'Review Question 3: Assemble the question asking origin:',
      sourceSentence: 'Where / are / you / from / ?',
      targetSentence: 'Where are you from',
      correctAnswer: 'Where are you from',
      wordBank: ['Where', 'are', 'you', 'from', 'do', 'live'],
      explanation: 'Correct question word order: Where + are + you + from?'
    },
    {
      id: 're_4',
      type: 'error_correction',
      prompt: 'Review Question 4: Fix the error in this sentence:',
      errorSentence: 'I from Spain.',
      sourceSentence: 'I from Spain.',
      targetSentence: "I'm from Spain.",
      options: [
        { id: 'r1', text: "I'm from Spain.", isCorrect: true },
        { id: 'r2', text: 'I froming Spain.', isCorrect: false },
        { id: 'r3', text: 'I am froming Spain.', isCorrect: false }
      ],
      explanation: 'Always include verb "am" / "\'m" in origin sentences.'
    },
    {
      id: 're_5',
      type: 'dialogue_completion',
      prompt: 'Review Question 5: Complete the dialogue:',
      dialogueContext: {
        speakerA: 'Anil',
        lineA: 'Nice to meet you, Sarah.',
        speakerB: 'Sarah'
      },
      targetSentence: 'Nice to meet you too, Anil.',
      options: [
        { id: 'r1', text: 'Nice to meet you too, Anil.', isCorrect: true },
        { id: 'r2', text: 'I live in Canada.', isCorrect: false },
        { id: 'r3', text: 'My name is Sarah.', isCorrect: false }
      ],
      explanation: 'Respond with "Nice to meet you too."'
    },
    {
      id: 're_6',
      type: 'multiple_choice',
      prompt: 'Review Question 6: Choose the correct contraction for "What is":',
      sourceSentence: '___ your name?',
      targetSentence: "What's your name?",
      options: [
        { id: 'r1', text: "What's", isCorrect: true },
        { id: 'r2', text: "Where's", isCorrect: false },
        { id: 'r3', text: 'Who is', isCorrect: false }
      ],
      explanation: '"What\'s" is the contracted form of "What is".'
    },
    {
      id: 're_7',
      type: 'translation',
      prompt: 'Review Question 7: Translate to English:',
      sourceSentence: 'आप क्या करते हैं?',
      sourceTranslations: { hi: 'आप क्या करते हैं?' },
      targetSentence: 'What do you do?',
      correctAnswer: 'What do you do',
      wordBank: ['What', 'do', 'you', 'do', 'are', 'live'],
      explanation: '"What do you do?" asks about profession or study.'
    },
    {
      id: 're_8',
      type: 'listening',
      prompt: 'Review Question 8: Listen and choose what you hear:',
      audioText: "I'm a software engineer.",
      sourceSentence: "I'm a software engineer.",
      targetSentence: "I'm a software engineer.",
      options: [
        { id: 'r1', text: "I'm a software engineer.", isCorrect: true },
        { id: 'r2', text: 'I am a university student.', isCorrect: false },
        { id: 'r3', text: 'I work in an office.', isCorrect: false }
      ],
      explanation: 'The audio clip states "I\'m a software engineer."'
    },
    {
      id: 're_9',
      type: 'fill_blank',
      prompt: 'Review Question 9: Complete the residence phrase:',
      sourceSentence: 'I live ___ London.',
      targetSentence: 'I live in London.',
      options: [
        { id: 'r1', text: 'in', isCorrect: true },
        { id: 'r2', text: 'from', isCorrect: false },
        { id: 'r3', text: 'at', isCorrect: false }
      ],
      explanation: 'Use "in" with cities: "I live in London."'
    },
    {
      id: 're_10',
      type: 'speaking',
      prompt: 'Review Question 10: Read your complete self-introduction out loud:',
      sourceSentence: "Hello! My name is Anil. I'm from India. I live in Delhi.",
      targetSentence: "Hello! My name is Anil. I'm from India. I live in Delhi.",
      audioText: "Hello! My name is Anil. I'm from India. I live in Delhi.",
      explanation: 'Speak clearly and confidently.'
    }
  ],

  // SECTION 20: Lesson 1 Mastery Assessment (12 items)
  assessmentExercises: [
    {
      id: 'ae_1',
      type: 'multiple_choice',
      prompt: 'Lesson 1 Assessment 1: Select the correct self-introduction phrase:',
      sourceSentence: '___ name is Carlos.',
      targetSentence: 'My name is Carlos.',
      options: [
        { id: 'a1', text: 'My', isCorrect: true },
        { id: 'a2', text: 'I', isCorrect: false },
        { id: 'a3', text: 'Your', isCorrect: false }
      ],
      explanation: 'Use possessive pronoun "My" with "name".'
    },
    {
      id: 'ae_2',
      type: 'multiple_choice',
      prompt: 'Lesson 1 Assessment 2: Choose the correct question for origin:',
      sourceSentence: '___ are you from?',
      targetSentence: 'Where are you from?',
      options: [
        { id: 'a1', text: 'Where', isCorrect: true },
        { id: 'a2', text: 'What', isCorrect: false },
        { id: 'a3', text: 'How', isCorrect: false }
      ],
      explanation: 'Use "Where" to ask about origin country.'
    },
    {
      id: 'ae_3',
      type: 'word_ordering',
      prompt: 'Lesson 1 Assessment 3: Build the residence question:',
      sourceSentence: 'Where / do / you / live / ?',
      targetSentence: 'Where do you live',
      correctAnswer: 'Where do you live',
      wordBank: ['Where', 'do', 'you', 'live', 'are', 'from'],
      explanation: 'Correct structure: Where + do + you + live?'
    },
    {
      id: 'ae_4',
      type: 'error_correction',
      prompt: 'Lesson 1 Assessment 4: Spot the error and choose the correction:',
      errorSentence: 'Where you are from?',
      sourceSentence: 'Where you are from?',
      targetSentence: 'Where are you from?',
      options: [
        { id: 'a1', text: 'Where are you from?', isCorrect: true },
        { id: 'a2', text: 'Where you from are?', isCorrect: false },
        { id: 'a3', text: 'Where is you from?', isCorrect: false }
      ],
      explanation: 'Verb "are" must precede "you" in questions.'
    },
    {
      id: 'ae_5',
      type: 'fill_blank',
      prompt: 'Lesson 1 Assessment 5: Fill in the preposition for city residence:',
      sourceSentence: 'I live ___ Tokyo.',
      targetSentence: 'I live in Tokyo.',
      options: [
        { id: 'a1', text: 'in', isCorrect: true },
        { id: 'a2', text: 'from', isCorrect: false },
        { id: 'a3', text: 'on', isCorrect: false }
      ],
      explanation: 'Use "in" with city names.'
    },
    {
      id: 'ae_6',
      type: 'dialogue_completion',
      prompt: 'Lesson 1 Assessment 6: Choose the appropriate return greeting:',
      dialogueContext: {
        speakerA: 'Alex',
        lineA: 'Nice to meet you, Mei.',
        speakerB: 'Mei'
      },
      targetSentence: 'Nice to meet you too, Alex.',
      options: [
        { id: 'a1', text: 'Nice to meet you too, Alex.', isCorrect: true },
        { id: 'a2', text: 'I live in Tokyo.', isCorrect: false },
        { id: 'a3', text: 'I am a student.', isCorrect: false }
      ],
      explanation: 'Respond with "Nice to meet you too."'
    },
    {
      id: 'ae_7',
      type: 'multiple_choice',
      prompt: 'Lesson 1 Assessment 7: What does "What do you do?" ask?',
      sourceSentence: 'What do you do?',
      targetSentence: 'Your profession or studies',
      options: [
        { id: 'a1', text: 'Your profession or studies', isCorrect: true },
        { id: 'a2', text: 'Your current location', isCorrect: false },
        { id: 'a3', text: 'Your country of origin', isCorrect: false }
      ],
      explanation: '"What do you do?" asks about work or education.'
    },
    {
      id: 'ae_8',
      type: 'translation',
      prompt: 'Lesson 1 Assessment 8: Translate into English:',
      sourceSentence: 'मैं भारत से हूँ।',
      sourceTranslations: { hi: 'मैं भारत से हूँ।' },
      targetSentence: "I'm from India.",
      correctAnswer: "I'm from India",
      wordBank: ["I'm", 'from', 'India', 'live', 'in'],
      explanation: '"मैं भारत से हूँ।" translates to "I\'m from India."'
    },
    {
      id: 'ae_9',
      type: 'listening',
      prompt: 'Lesson 1 Assessment 9: Listen and select the audio content:',
      audioText: 'What is your name?',
      sourceSentence: 'What is your name?',
      targetSentence: 'What is your name?',
      options: [
        { id: 'a1', text: 'What is your name?', isCorrect: true },
        { id: 'a2', text: 'Where do you live?', isCorrect: false },
        { id: 'a3', text: 'Where are you from?', isCorrect: false }
      ],
      explanation: 'The audio clip says "What is your name?"'
    },
    {
      id: 'ae_10',
      type: 'error_correction',
      prompt: 'Lesson 1 Assessment 10: Correct the profession mistake:',
      errorSentence: 'I work in a doctor.',
      sourceSentence: 'I work in a doctor.',
      targetSentence: "I'm a doctor.",
      options: [
        { id: 'a1', text: "I'm a doctor.", isCorrect: true },
        { id: 'a2', text: 'I work doctor.', isCorrect: false },
        { id: 'a3', text: 'I am work doctor.', isCorrect: false }
      ],
      explanation: 'State profession using "I\'m a doctor."'
    },
    {
      id: 'ae_11',
      type: 'fill_blank',
      prompt: 'Lesson 1 Assessment 11: Select the correct BE contraction:',
      sourceSentence: '___ from Canada.',
      targetSentence: "I'm from Canada.",
      options: [
        { id: 'a1', text: "I'm", isCorrect: true },
        { id: 'a2', text: 'My', isCorrect: false },
        { id: 'a3', text: 'I from', isCorrect: false }
      ],
      explanation: 'Use contraction "I\'m" for "I am".'
    },
    {
      id: 'ae_12',
      type: 'speaking',
      prompt: 'Lesson 1 Assessment 12: Read your complete self-introduction:',
      sourceSentence: "My name is Anil. I'm from India. I live in Delhi. I'm a student.",
      targetSentence: "My name is Anil. I'm from India. I live in Delhi. I'm a student.",
      audioText: "My name is Anil. I'm from India. I live in Delhi. I'm a student.",
      explanation: 'Congratulations! You have completed the Lesson 1 Mastery Assessment.'
    }
  ]
};
