import { DetailedLessonData } from '../../types';

export const LESSON_A1_1_5_DATA: DetailedLessonData = {
  id: 'lesson_a1_1_5',
  unitId: 'unit_a1_1',
  title: 'Numbers 0–100, Age, Time & Contact Information',
  cefr: 'A1',
  icon: '🔢',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Numbers 0–100, Age, Time & Contact Information Exchange',
    description: 'Master cardinal numbers 0–100, state age with "I am [X] years old", exchange phone numbers and email addresses naturally, tell time on the hour and half-hour, and complete registration forms.',
    descriptionsByLang: {
      hi: '0 से 100 तक की संख्याएँ सीखें, "I am [X] years old" के साथ उम्र बताएं, फ़ोन नंबर और ईमेल पते का आदान-प्रदान करें, समय बताएं, और पंजीकरण फॉर्म भरें।',
      es: 'Domina los números del 0 al 100, expresa la edad con "I am [X] years old", intercambia teléfonos y correos electrónicos, y di la hora.',
      fr: 'Maîtrisez les nombres de 0 à 100, exprimez l\'âge, échangez coordonnées (téléphone, e-mail) et apprenez à dire l\'heure.',
      de: 'Beherrschen Sie Zahlen von 0 bis 100, Altersangaben, Kontaktdatenaustausch und einfache Uhrzeiten.',
      pt: 'Domine números de 0 a 100, expresse idade, troque contatos (telefone e e-mail) e diga as horas.',
      zh: '掌握0–100基数词、用“I am [X] years old”表达年龄、交流电话与邮箱等联系方式、以及简单的时间表达。',
      ar: 'أتقن الأرقام من 0 إلى 100، والتعبير عن العمر، وتبادل أرقام الهواتف والبريد الإلكتروني، وإخبار الوقت.',
      ja: '0から100までの数字、年齢の言い方（I am [X] years old）、連絡先（電話番号・メール）の交換、時刻の伝え方を学びます。',
      ru: 'Освойте числа 0–100, обозначение возраста, обмен контактами (телефон, email) и указание времени.'
    },
    canDoStatements: [
      'Count and recognize cardinal numbers from 0 to 100 in English',
      'Distinguish tricky pronunciation pairs: -teen vs. -ty (e.g. fifteen vs. fifty)',
      'Ask and answer "How old are you?" and "How old is he/she?" using verb BE',
      'Dictate and record telephone numbers and email addresses digit-by-digit',
      'Ask "What time is it?" and tell time ("It is three o\'clock", "It is half past four")',
      'Provide complete personal details for registration forms'
    ],
    canDoByLang: {
      hi: [
        '0 से 100 तक की संख्याएँ बोलना और समझना',
        '-teen और -ty के उच्चारण में अंतर पहचानना (जैसे 13 vs 30, 15 vs 50)',
        '"How old are you?" पूछना और अपनी उम्र बताना',
        'फ़ोन नंबर और ईमेल पते अंग्रेजी में स्पष्ट रूप से बोलना',
        'समय पूछना और बताना ("What time is it?")'
      ],
      es: [
        'Contar del 0 al 100 en inglés',
        'Diferenciar la pronunciación de -teen y -ty',
        'Preguntar y decir la edad con precisión',
        'Dictar números de teléfono y direcciones de correo electrónico',
        'Preguntar y decir la hora básica'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (20 items)
  vocabulary: [
    {
      id: 'v_zero',
      word: 'zero',
      phonetic: '/ˈzɪroʊ/',
      meaning: 'Number 0 / also pronounced "oh" in phone numbers',
      translationsByLang: { hi: 'शून्य / जीरो', es: 'cero', fr: 'zéro', de: 'null', pt: 'zero', zh: '零', ar: 'صفر', ja: 'ゼロ', ru: 'ноль' },
      exampleSentence: 'My room number is two zero four.',
      exampleTranslationByLang: { hi: 'मेरा कमरा नंबर दो सौ चार (204) है।', es: 'El número de mi habitación es dos cero cuatro.' },
      audioText: 'zero',
      audioId: 'en_a1_u01_l05_v_zero',
      slowAudioId: 'en_a1_u01_l05_v_zero_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '0️⃣',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_ten',
      word: 'ten',
      phonetic: '/ten/',
      meaning: 'Number 10',
      translationsByLang: { hi: 'दस (10)', es: 'diez', fr: 'dix', de: 'zehn', pt: 'dez', zh: '十', ar: 'عشرة', ja: '十', ru: 'десять' },
      exampleSentence: 'I have ten pens.',
      exampleTranslationByLang: { hi: 'मेरे पास दस पेन हैं।', es: 'Tengo diez bolígrafos.' },
      audioText: 'ten',
      audioId: 'en_a1_u01_l05_v_ten',
      slowAudioId: 'en_a1_u01_l05_v_ten_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔟',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_twelve',
      word: 'twelve',
      phonetic: '/twelv/',
      meaning: 'Number 12',
      translationsByLang: { hi: 'बारह (12)', es: 'doce', fr: 'douze', de: 'zwölf', pt: 'doze', zh: '十二', ar: 'اثنا عشر', ja: '十二', ru: 'двенадцать' },
      exampleSentence: 'There are twelve months in a year.',
      exampleTranslationByLang: { hi: 'एक साल में बारह महीने होते हैं।', es: 'Hay doce meses en un año.' },
      audioText: 'twelve',
      audioId: 'en_a1_u01_l05_v_twelve',
      slowAudioId: 'en_a1_u01_l05_v_twelve_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '1️⃣2️⃣',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_thirteen',
      word: 'thirteen',
      phonetic: '/ˌθɜːrˈtiːn/',
      meaning: 'Number 13 (stress on second syllable -teen)',
      translationsByLang: { hi: 'तेरह (13)', es: 'trece', fr: 'treize', de: 'dreizehn', pt: 'treze', zh: '十三', ar: 'ثلاثة عشر', ja: '十三', ru: 'тринадцать' },
      exampleSentence: 'She is thirteen years old.',
      exampleTranslationByLang: { hi: 'वह तेरह साल की है।', es: 'Ella tiene trece años.' },
      audioText: 'thirteen',
      audioId: 'en_a1_u01_l05_v_thirteen',
      slowAudioId: 'en_a1_u01_l05_v_thirteen_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '1️⃣3️⃣',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_thirty',
      word: 'thirty',
      phonetic: '/ˈθɜːrti/',
      meaning: 'Number 30 (stress on first syllable -ty)',
      translationsByLang: { hi: 'तीस (30)', es: 'treinta', fr: 'trente', de: 'dreißig', pt: 'trinta', zh: '三十', ar: 'ثلاثون', ja: '三十', ru: 'тридцать' },
      exampleSentence: 'He is thirty years old.',
      exampleTranslationByLang: { hi: 'वह तीस साल का है।', es: 'Él tiene treinta años.' },
      audioText: 'thirty',
      audioId: 'en_a1_u01_l05_v_thirty',
      slowAudioId: 'en_a1_u01_l05_v_thirty_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '3️⃣0️⃣',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_fifteen',
      word: 'fifteen',
      phonetic: '/ˌfɪfˈtiːn/',
      meaning: 'Number 15 (stress on -teen)',
      translationsByLang: { hi: 'पंद्रह (15)', es: 'quince', fr: 'quinze', de: 'fünfzehn', pt: 'quinze', zh: '十五', ar: 'خمسة عشر', ja: '十五', ru: 'пятнадцать' },
      exampleSentence: 'The lesson starts in fifteen minutes.',
      exampleTranslationByLang: { hi: 'पाठ पंद्रह मिनट में शुरू होगा।', es: 'La lección empieza en quince minutos.' },
      audioText: 'fifteen',
      audioId: 'en_a1_u01_l05_v_fifteen',
      slowAudioId: 'en_a1_u01_l05_v_fifteen_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '1️⃣5️⃣',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_fifty',
      word: 'fifty',
      phonetic: '/ˈfɪfti/',
      meaning: 'Number 50 (stress on -ty)',
      translationsByLang: { hi: 'पचास (50)', es: 'cincuenta', fr: 'cinquante', de: 'fünfzig', pt: 'cinquenta', zh: '五十', ar: 'خمسون', ja: '五十', ru: 'пятьдесят' },
      exampleSentence: 'My mother is fifty years old.',
      exampleTranslationByLang: { hi: 'मेरी माँ पचास साल की हैं।', es: 'Mi madre tiene cincuenta años.' },
      audioText: 'fifty',
      audioId: 'en_a1_u01_l05_v_fifty',
      slowAudioId: 'en_a1_u01_l05_v_fifty_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '5️⃣0️⃣',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_hundred',
      word: 'hundred',
      phonetic: '/ˈhʌndrəd/',
      meaning: 'Number 100',
      translationsByLang: { hi: 'सौ (100)', es: 'cien / ciento', fr: 'cent', de: 'hundert', pt: 'cem / cento', zh: '百 (100)', ar: 'مائة', ja: '百', ru: 'сто' },
      exampleSentence: 'There are one hundred students in the hall.',
      exampleTranslationByLang: { hi: 'हॉल में सौ छात्र हैं।', es: 'Hay cien estudiantes en el salón.' },
      audioText: 'one hundred',
      audioId: 'en_a1_u01_l05_v_hundred',
      slowAudioId: 'en_a1_u01_l05_v_hundred_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💯',
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
      audioId: 'en_a1_u01_l05_v_age',
      slowAudioId: 'en_a1_u01_l05_v_age_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎂',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_years_old',
      word: 'years old',
      phonetic: '/jɪərz oʊld/',
      meaning: 'Phrase used after number to state age',
      translationsByLang: { hi: 'साल का / वर्ष का', es: 'años de edad', fr: 'ans', de: 'Jahre alt', pt: 'anos de idade', zh: '岁', ar: 'سنوات من العمر', ja: '〜歳', ru: 'лет / года' },
      exampleSentence: 'I am twenty-five years old.',
      exampleTranslationByLang: { hi: 'मैं पच्चीस साल का हूँ।', es: 'Tengo veinticinco años.' },
      audioText: 'twenty-five years old',
      audioId: 'en_a1_u01_l05_v_years_old',
      slowAudioId: 'en_a1_u01_l05_v_years_old_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📅',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_phone_number',
      word: 'phone number',
      phonetic: '/foʊn ˈnʌmbər/',
      meaning: 'Sequence of digits to call someone',
      translationsByLang: { hi: 'फ़ोन नंबर', es: 'número de teléfono', fr: 'numéro de téléphone', de: 'Telefonnummer', pt: 'número de telefone', zh: '电话号码', ar: 'رقم الهاتف', ja: '電話番号', ru: 'номер телефона' },
      exampleSentence: 'What is your phone number?',
      exampleTranslationByLang: { hi: 'आपका फ़ोन नंबर क्या है?', es: '¿Cuál es tu número de teléfono?' },
      audioText: 'phone number',
      audioId: 'en_a1_u01_l05_v_phone_number',
      slowAudioId: 'en_a1_u01_l05_v_phone_number_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📞',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_email_address',
      word: 'email address',
      phonetic: '/ˈiːmeɪl əˈdres/',
      meaning: 'Electronic mail identifier',
      translationsByLang: { hi: 'ईमेल पता', es: 'dirección de correo electrónico', fr: 'adresse e-mail', de: 'E-Mail-Adresse', pt: 'endereço de e-mail', zh: '电子邮箱地址', ar: 'عنوان البريد الإلكتروني', ja: 'メールアドレス', ru: 'адрес электронной почты' },
      exampleSentence: 'My email address is alex@example.com.',
      exampleTranslationByLang: { hi: 'मेरा ईमेल पता alex@example.com है।', es: 'Mi correo es alex@example.com.' },
      audioText: 'email address',
      audioId: 'en_a1_u01_l05_v_email_address',
      slowAudioId: 'en_a1_u01_l05_v_email_address_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📧',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_at_symbol',
      word: 'at (@)',
      phonetic: '/æt/',
      meaning: 'Symbol "@" in email addresses',
      translationsByLang: { hi: '@ (एट)', es: 'arroba (@)', fr: 'arobase (@)', de: 'at-Zeichen (@)', pt: 'arroba (@)', zh: '艾特 (@)', ar: 'آت (@)', ja: 'アットマーク (@)', ru: 'собака (@)' },
      exampleSentence: 'Say "user at domain dot com".',
      exampleTranslationByLang: { hi: '"user at domain dot com" कहें।', es: 'Di "user arroba domain punto com".' },
      audioText: 'at symbol',
      audioId: 'en_a1_u01_l05_v_at_symbol',
      slowAudioId: 'en_a1_u01_l05_v_at_symbol_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📧',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_dot',
      word: 'dot (.)',
      phonetic: '/dɑːt/',
      meaning: 'Period symbol in URLs and email addresses',
      translationsByLang: { hi: 'डॉट / बिंदु (.)', es: 'punto (.)', fr: 'point (.)', de: 'Punkt (.)', pt: 'ponto (.)', zh: '点 (.)', ar: 'نقطة (.)', ja: 'ドット (.)', ru: 'точка (.)' },
      exampleSentence: 'Pronounce "." as "dot" in email.',
      exampleTranslationByLang: { hi: 'ईमेल में "." को "dot" बोलें।', es: 'Pronuncia "." como "dot" en correos.' },
      audioText: 'dot',
      audioId: 'en_a1_u01_l05_v_dot',
      slowAudioId: 'en_a1_u01_l05_v_dot_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⚪',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_time',
      word: 'time',
      phonetic: '/taɪm/',
      meaning: 'The continuous progress of existence / hours and minutes',
      translationsByLang: { hi: 'समय / वक्त', es: 'hora / tiempo', fr: 'heure / temps', de: 'Zeit / Uhrzeit', pt: 'hora / tempo', zh: '时间', ar: 'وقت', ja: '時間 / 時刻', ru: 'время' },
      exampleSentence: 'What time is the meeting?',
      exampleTranslationByLang: { hi: 'मीटिंग का समय क्या है?', es: '¿A qué hora es la reunión?' },
      audioText: 'time',
      audioId: 'en_a1_u01_l05_v_time',
      slowAudioId: 'en_a1_u01_l05_v_time_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⏰',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_oclock',
      word: 'o\'clock',
      phonetic: '/əˈklɑːk/',
      meaning: 'Used specifying hour of clock time',
      translationsByLang: { hi: 'बजे', es: 'en punto', fr: 'heures pile', de: 'Uhr', pt: 'em ponto', zh: '点钟', ar: 'تماماً', ja: '時（ちょうど）', ru: 'часов' },
      exampleSentence: 'It is three o\'clock.',
      exampleTranslationByLang: { hi: 'तीन बजे हैं।', es: 'Son las tres en punto.' },
      audioText: 'three o\'clock',
      audioId: 'en_a1_u01_l05_v_oclock',
      slowAudioId: 'en_a1_u01_l05_v_oclock_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🕒',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_half_past',
      word: 'half past',
      phonetic: '/hæf pæst/',
      meaning: 'Thirty minutes after the hour',
      translationsByLang: { hi: 'साढ़े / ... बजकर 30 मिनट', es: 'y media', fr: 'et demie', de: 'halb', pt: 'e meia', zh: '半', ar: 'والنصف', ja: '30分過ぎ / 半', ru: 'половина' },
      exampleSentence: 'It is half past four (4:30).',
      exampleTranslationByLang: { hi: 'साढ़े चार बजे हैं (4:30)।', es: 'Son las cuatro y media.' },
      audioText: 'half past four',
      audioId: 'en_a1_u01_l05_v_half_past',
      slowAudioId: 'en_a1_u01_l05_v_half_past_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🕟',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_address',
      word: 'address',
      phonetic: '/ˈædres/',
      meaning: 'Location of a home or building',
      translationsByLang: { hi: 'पता / निवास स्थान', es: 'dirección', fr: 'adresse', de: 'Adresse', pt: 'endereço', zh: '地址', ar: 'عنوان', ja: '住所', ru: 'адрес' },
      exampleSentence: 'What is your home address?',
      exampleTranslationByLang: { hi: 'आपके घर का पता क्या है?', es: '¿Cuál es tu dirección?' },
      audioText: 'address',
      audioId: 'en_a1_u01_l05_v_address',
      slowAudioId: 'en_a1_u01_l05_v_address_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏠',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_birthday',
      word: 'birthday',
      phonetic: '/ˈbɜːrθdeɪ/',
      meaning: 'Anniversary of the day someone was born',
      translationsByLang: { hi: 'जन्मदिन', es: 'cumpleaños', fr: 'anniversaire', de: 'Geburtstag', pt: 'aniversário', zh: '生日', ar: 'عيد ميلاد', ja: '誕生日', ru: 'день рождения' },
      exampleSentence: 'When is your birthday?',
      exampleTranslationByLang: { hi: 'आपका जन्मदिन कब है?', es: '¿Cuándo es tu cumpleaños?' },
      audioText: 'birthday',
      audioId: 'en_a1_u01_l05_v_birthday',
      slowAudioId: 'en_a1_u01_l05_v_birthday_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎉',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_number',
      word: 'number',
      phonetic: '/ˈnʌmbər/',
      meaning: 'Arithmetical value',
      translationsByLang: { hi: 'संख्या / अंक', es: 'número', fr: 'nombre / numéro', de: 'Nummer / Zahl', pt: 'número', zh: '数字 / 号码', ar: 'رقم', ja: '番号 / 数', ru: 'число / номер' },
      exampleSentence: 'What is your lucky number?',
      exampleTranslationByLang: { hi: 'आपका लकी नंबर क्या है?', es: '¿Cuál es tu número de la suerte?' },
      audioText: 'number',
      audioId: 'en_a1_u01_l05_v_number',
      slowAudioId: 'en_a1_u01_l05_v_number_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔢',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks
  expressions: [
    {
      id: 'e_how_old_are_you',
      expression: 'How old are you?',
      translationsByLang: { hi: 'आपकी उम्र क्या है?', es: '¿Cuántos años tienes?', fr: 'Quel âge avez-vous ?', de: 'Wie alt bist du?', pt: 'Quantos anos você tem?', zh: '你多大了？', ar: 'كم عمرك؟', ja: '何歳ですか？', ru: 'Сколько вам лет?' },
      usageNote: 'In English, use verb BE (am/is/are) for age, NEVER "have".',
      audioText: 'How old are you? I am twenty-five years old.',
      audioId: 'en_a1_u01_l05_e_how_old_are_you',
      slowAudioId: 'en_a1_u01_l05_e_how_old_are_you_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎂'
    },
    {
      id: 'e_what_is_your_phone',
      expression: 'What is your phone number?',
      translationsByLang: { hi: 'आपका फ़ोन नंबर क्या है?', es: '¿Cuál es tu número de teléfono?', fr: 'Quel est votre numéro de téléphone ?', de: 'Wie ist deine Telefonnummer?', pt: 'Qual é o seu número de telefone?', zh: '你的电话号码是多少？', ar: 'ما هو رقم هاتفك؟', ja: 'お電話番号は何番ですか？', ru: 'Какой у вас номер телефона?' },
      usageNote: 'Standard formula for asking for contact digits.',
      audioText: 'What is your phone number? It is 555-0192.',
      audioId: 'en_a1_u01_l05_e_what_is_your_phone',
      slowAudioId: 'en_a1_u01_l05_e_what_is_your_phone_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📱'
    },
    {
      id: 'e_what_time_is_it',
      expression: 'What time is it / Have you got the time?',
      translationsByLang: { hi: 'क्या समय हुआ है?', es: '¿Qué hora es?', fr: 'Quelle heure est-il ?', de: 'Wie spät ist es?', pt: 'Que horas são?', zh: '现在几点？', ar: 'كم الساعة؟', ja: '今何時ですか？', ru: 'Который час?' },
      usageNote: 'Asking for the current time in English.',
      audioText: 'Excuse me, what time is it?',
      audioId: 'en_a1_u01_l05_e_what_time_is_it',
      slowAudioId: 'en_a1_u01_l05_e_what_time_is_it_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⌚'
    }
  ],

  // SECTION 5 & 6: Grammar Rules
  grammar: {
    title: 'Age Construction with BE & Number Mechanics',
    concept: 'English uses verb BE for expressing age: "I am [number] years old" (or simply "I am [number]"). Do not use "have" for age. Numbers from 21 to 99 are hyphenated (e.g. twenty-one, forty-five).',
    conceptsByLang: {
      hi: 'उम्र बताने के लिए अंग्रेजी में verb BE ("am / is / are") का प्रयोग होता है, "have" का नहीं। जैसे "I am 25 years old"। 21 से 99 तक की संख्याओं के बीच हाइफन (-) लगाया जाता है।',
      es: 'En inglés, la edad se expresa con el verbo TO BE ("I am 25 years old"), NUNCA con have. Los números del 21 al 99 llevan guion (twenty-five).',
      fr: 'En anglais, on utilise le verbe TO BE pour l\'âge ("I am 25 years old"), jamais have.',
      de: 'Im Englischen verwendet man das Verb TO BE für das Alter ("I am 25 years old").',
      pt: 'Em inglês, usa-se o verbo TO BE para a idade ("I am 25 years old"), nunca have.',
      zh: '英语中用 be 动词表达年龄（I am 25 years old），不能使用 have。21到99的两位数需要加连字符（如 twenty-five）。',
      ar: 'يستخدم الفعل TO BE للتعبير عن العمر ("I am 25 years old") وليس have.',
      ja: '英語では年齢をbe動詞（I am 25 years old）で表し、haveは使いません。',
      ru: 'В английском возраст выражается с глаголом TO BE («I am 25 years old»), а не have.'
    },
    verbBeExplanation: {
      title: 'Age Paradigm & Number Suffixes',
      content: 'Pronunciation and structure contrasts for numbers and age:',
      contractionsTable: [
        { full: 'I am 20 years old.', contracted: 'I\'m twenty.', meaningByLang: { hi: 'मैं 20 साल का हूँ।', es: 'Tengo veinte años.' } },
        { full: 'She is 14 years old.', contracted: 'She\'s fourteen (stress on -teen).', meaningByLang: { hi: 'वह 14 साल की है।', es: 'Ella tiene catorce años.' } },
        { full: 'He is 40 years old.', contracted: 'He\'s forty (stress on for-).', meaningByLang: { hi: 'वह 40 साल का है।', es: 'Él tiene cuarenta años.' } },
        { full: 'It is 5:00.', contracted: 'It\'s five o\'clock.', meaningByLang: { hi: 'पाँच बजे हैं।', es: 'Son las cinco en punto.' } }
      ]
    },
    patterns: [
      {
        structure: 'Subject + Verb BE + [Number] + (years old)',
        explanation: 'Standard formula for expressing age.',
        examples: [
          { english: 'I am twenty-eight years old.', translationByLang: { hi: 'मैं अट्ठाईस साल का हूँ।', es: 'Tengo veintiocho años.' } },
          { english: 'My grandfather is seventy-five.', translationByLang: { hi: 'मेरे दादाजी 75 साल के हैं।', es: 'Mi abuelo tiene setenta y cinco.' } }
        ]
      },
      {
        structure: 'It is + [Hour] + o\'clock / half past + [Hour]',
        explanation: 'Standard formula for stating time.',
        examples: [
          { english: 'It is two o\'clock.', translationByLang: { hi: 'दो बजे हैं।', es: 'Son las dos en punto.' } },
          { english: 'It is half past six.', translationByLang: { hi: 'साढ़े छह बजे हैं (6:30)।', es: 'Son las seis y media.' } }
        ]
      }
    ]
  },

  // SECTION 7: Common Mistakes
  commonMistakes: [
    {
      id: 'cm_have_years',
      incorrect: 'I have 25 years.',
      correct: 'I am 25 years old. / I am 25.',
      whyExplanation: 'English uses the verb "to be" for age, not "have".',
      explanationsByLang: {
        hi: 'अंग्रेजी में उम्र के लिए "have" नहीं, "am/is/are" का प्रयोग किया जाता है।'
      }
    },
    {
      id: 'cm_teen_ty_confusion',
      incorrect: 'I am fifteen (meaning 50).',
      correct: 'I am fifty (50). / I am fifteen (15).',
      whyExplanation: '-teen numbers end with /tiːn/ (13–19); -ty numbers end with /ti/ (20, 30, 40, 50...).',
      explanationsByLang: {
        hi: '-teen (13–19) में अंत में जोर होता है, जबकि -ty (20, 30, 40...) में पहले हिस्से पर जोर होता है।'
      }
    }
  ],

  // SECTION 11: Mini Dialogues
  dialogues: [
    {
      id: 'd_gym_registration',
      title: 'Academy Registration Desk',
      context: 'Priya registering at the international student sports centre.',
      lines: [
        {
          speaker: 'Clerk',
          avatar: '👨‍💼',
          text: 'Good morning! What is your full name and age, please?',
          translationsByLang: { hi: 'सुप्रभात! कृपया आपका पूरा नाम और उम्र क्या है?', es: '¡Buenos días! ¿Su nombre completo y edad, por favor?' },
          audioText: 'Good morning! What is your full name and age, please?',
          audioId: 'en_a1_u01_l05_d1_1',
          voiceId: 'EN_TEACHER_01'
        },
        {
          speaker: 'Priya',
          avatar: '👩‍💼',
          text: 'My name is Priya Sharma. I am twenty-four years old.',
          translationsByLang: { hi: 'मेरा नाम प्रिया शर्मा है। मैं चौबीस साल की हूँ।', es: 'Me llamo Priya Sharma. Tengo veinticuatro años.' },
          audioText: 'My name is Priya Sharma. I am twenty-four years old.',
          audioId: 'en_a1_u01_l05_d1_2',
          voiceId: 'EN_TEACHER_01'
        },
        {
          speaker: 'Clerk',
          avatar: '👨‍💼',
          text: 'Thank you. And what is your phone number and email?',
          translationsByLang: { hi: 'धन्यवाद। और आपका फ़ोन नंबर और ईमेल क्या है?', es: 'Gracias. ¿Y cuál es su teléfono y correo?' },
          audioText: 'Thank you. And what is your phone number and email?',
          audioId: 'en_a1_u01_l05_d1_3',
          voiceId: 'EN_TEACHER_01'
        },
        {
          speaker: 'Priya',
          avatar: '👩‍💼',
          text: 'My phone number is 07700 900123, and my email is priya@email.com.',
          translationsByLang: { hi: 'मेरा फोन 07700 900123 है, और ईमेल priya@email.com है।', es: 'Mi teléfono es 07700 900123 y mi correo es priya@email.com.' },
          audioText: 'My phone number is 07700 900123, and my email is priya@email.com.',
          audioId: 'en_a1_u01_l05_d1_4',
          voiceId: 'EN_TEACHER_01'
        }
      ]
    }
  ],

  // SECTION 8–15: Practice Exercises
  practiceExercises: [
    {
      id: 'pe_l5_1',
      type: 'multiple_choice',
      prompt: 'Identify the correct English number for 40:',
      options: [
        { id: 'o1', text: 'forty', isCorrect: true },
        { id: 'o2', text: 'fourteen', isCorrect: false },
        { id: 'o3', text: 'fourty', isCorrect: false }
      ],
      explanation: '40 is spelled "forty" (without the "u").'
    },
    {
      id: 'pe_l5_2',
      type: 'multiple_choice',
      prompt: 'Select the correct sentence to express age in English:',
      options: [
        { id: 'o1', text: 'I am 22 years old.', isCorrect: true },
        { id: 'o2', text: 'I have 22 years.', isCorrect: false },
        { id: 'o3', text: 'I am having 22 years.', isCorrect: false }
      ],
      explanation: 'Use verb BE ("am") for age.'
    },
    {
      id: 'pe_l5_3',
      type: 'multiple_choice',
      prompt: 'How do you say "3:30" in English?',
      options: [
        { id: 'o1', text: 'half past three', isCorrect: true },
        { id: 'o2', text: 'three o\'clock', isCorrect: false },
        { id: 'o3', text: 'half to three', isCorrect: false }
      ],
      explanation: '3:30 is "half past three".'
    },
    {
      id: 'pe_l5_4',
      type: 'multiple_choice',
      prompt: 'How is the symbol "@" pronounced in an email address?',
      options: [
        { id: 'o1', text: 'at', isCorrect: true },
        { id: 'o2', text: 'dot', isCorrect: false },
        { id: 'o3', text: 'and', isCorrect: false }
      ],
      explanation: '"@" is pronounced "at".'
    },
    {
      id: 'pe_l5_5',
      type: 'fill_blank',
      prompt: 'Complete the age statement with the correct verb:',
      sourceSentence: 'My mother ____ fifty-two years old.',
      options: [
        { id: 'o1', text: 'is', isCorrect: true },
        { id: 'o2', text: 'has', isCorrect: false },
        { id: 'o3', text: 'are', isCorrect: false }
      ],
      targetSentence: 'is',
      correctAnswer: 'is',
      explanation: '"My mother" is singular, taking verb "is".'
    },
    {
      id: 'pe_l5_6',
      type: 'fill_blank',
      prompt: 'Fill in the time word:',
      sourceSentence: 'The meeting starts at two ____ (2:00 sharp).',
      options: [
        { id: 'o1', text: 'o\'clock', isCorrect: true },
        { id: 'o2', text: 'hours', isCorrect: false },
        { id: 'o3', text: 'clock', isCorrect: false }
      ],
      targetSentence: 'o\'clock',
      correctAnswer: 'o\'clock',
      explanation: 'Exact hours take "o\'clock".'
    },
    {
      id: 'pe_l5_7',
      type: 'word_ordering',
      prompt: 'Construct the question asking someone\'s age:',
      targetSentence: 'How old are you',
      wordBank: ['How', 'old', 'are', 'you', 'is', 'years', 'have'],
      correctAnswer: 'How old are you',
      explanation: 'Formula: How + old + are + you?'
    },
    {
      id: 'pe_l5_8',
      type: 'word_ordering',
      prompt: 'Construct the sentence stating time:',
      targetSentence: 'It is half past four',
      wordBank: ['It', 'is', 'half', 'past', 'four', 'at', 'o\'clock'],
      correctAnswer: 'It is half past four',
      explanation: 'It is + half past + [hour].'
    },
    {
      id: 'pe_l5_9',
      type: 'error_correction',
      prompt: 'Correct the age error in English:',
      errorSentence: 'My brother has 18 years old.',
      options: [
        { id: 'o1', text: 'My brother is 18 years old.', isCorrect: true },
        { id: 'o2', text: 'My brother have 18 years old.', isCorrect: false },
        { id: 'o3', text: 'My brother is having 18 years.', isCorrect: false }
      ],
      explanation: 'Replace "has" with "is".'
    },
    {
      id: 'pe_l5_10',
      type: 'dialogue_completion',
      prompt: 'Select the best response in the registration dialogue:',
      dialogueContext: {
        speakerA: 'Clerk',
        lineA: 'What is your email address, please?',
        speakerB: 'Applicant'
      },
      options: [
        { id: 'o1', text: 'It is mark dot smith at email dot com.', isCorrect: true },
        { id: 'o2', text: 'I am thirty years old.', isCorrect: false },
        { id: 'o3', text: 'My father is an engineer.', isCorrect: false }
      ],
      explanation: 'Direct answer supplying email address.'
    },
    {
      id: 'pe_l5_11',
      type: 'listening',
      prompt: 'Listen to the number and choose the correct value:',
      audioText: 'Room number fifteen (15) on the third floor.',
      audioId: 'aud_l5_pe_11',
      options: [
        { id: 'o1', text: '15', isCorrect: true },
        { id: 'o2', text: '50', isCorrect: false },
        { id: 'o3', text: '5', isCorrect: false }
      ],
      explanation: 'The audio clearly stresses "-teen" for 15.'
    },
    {
      id: 'pe_l5_12',
      explanation: 'Use \'am\' with \'I\' and write compound numbers with a hyphen: \'twenty-nine\'. Age is stated as \'I am\' + number + \'years old\'.',
      type: 'listen_and_type',
      prompt: 'Listen and arrange the tiles to form the sentence:',
      audioText: 'I am twenty-nine years old.',
      audioId: 'aud_l5_pe_12',
      targetSentence: 'I am twenty-nine years old',
      wordBank: ['I', 'am', 'twenty-nine', 'years', 'old', 'have', 'is'],
      correctAnswer: 'I am twenty-nine years old'
    },
    {
      id: 'pe_l5_13',
      explanation: 'Age uses \'I am\', not \'I have\': \'I am thirty years old.\' Hindi: \'मेरी उम्र 30 साल है।\'',
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'मेरी उम्र 30 साल है।',
      sourceTranslations: { hi: 'मेरी उम्र 30 साल है।', es: 'Tengo 30 años.' },
      targetSentence: 'I am thirty years old',
      wordBank: ['I', 'am', 'thirty', 'years', 'old', 'have', 'is'],
      correctAnswer: 'I am thirty years old'
    },
    {
      id: 'pe_l5_14',
      explanation: 'Read phone numbers digit by digit: \'zero seven nine one\'. Say each digit separately.',
      type: 'speaking',
      prompt: 'Speak your contact information clearly:',
      targetSentence: 'My phone number is zero seven nine one.',
      audioText: 'My phone number is zero seven nine one.'
    },
    {
      id: 'pe_l5_15',
      explanation: 'Introduce yourself in order: name, origin, age (\'I am twenty-five\'), then job. \'An architect\' takes \'an\' before a vowel sound.',
      type: 'word_ordering',
      prompt: 'Interleaved Practice (L1–L5): Assemble full personal introduction with age and job:',
      targetSentence: 'Hello I am Elena from Rome I am twenty-five and I am an architect',
      wordBank: ['Hello', 'I', 'am', 'Elena', 'from', 'Rome', 'I', 'am', 'twenty-five', 'and', 'I', 'am', 'an', 'architect', 'have', 'is'],
      correctAnswer: 'Hello I am Elena from Rome I am twenty-five and I am an architect'
    }
  ],

  // SECTION 16: Review Exercises
  reviewExercises: [
    {
      id: 're_l5_1',
      explanation: '\'Seventy-four\' is 70 + 4. The hyphen joins the tens and the units, so the answer is 74.',
      type: 'multiple_choice',
      prompt: 'Review: Which number is "seventy-four"?',
      options: [
        { id: 'o1', text: '74', isCorrect: true },
        { id: 'o2', text: '17', isCorrect: false },
        { id: 'o3', text: '70', isCorrect: false }
      ]
    },
    {
      id: 're_l5_2',
      explanation: '\'Your sister\' is singular, so the verb is \'is\': \'How old is your sister?\'',
      type: 'fill_blank',
      prompt: 'Review: Complete with BE verb for age:',
      sourceSentence: 'How old ____ your sister?',
      options: [
        { id: 'o1', text: 'is', isCorrect: true },
        { id: 'o2', text: 'are', isCorrect: false },
        { id: 'o3', text: 'has', isCorrect: false }
      ],
      targetSentence: 'is',
      correctAnswer: 'is'
    },
    {
      id: 're_l5_3',
      explanation: 'To ask the time, use \'What time is it?\' The verb \'is\' agrees with \'it\'.',
      type: 'word_ordering',
      prompt: 'Review: Ask what time it is:',
      targetSentence: 'What time is it now',
      wordBank: ['What', 'time', 'is', 'it', 'now', 'are', 'o\'clock'],
      correctAnswer: 'What time is it now'
    },
    {
      id: 're_l5_4',
      explanation: 'For a clock time, use \'It is\' + number + \'o\'clock\': \'It is five o\'clock now.\' Hindi: \'अभी पाँच बजे हैं।\'',
      type: 'translation',
      prompt: 'Review Translation: Translate to English:',
      sourceSentence: 'अभी पाँच बजे हैं।',
      sourceTranslations: { hi: 'अभी पाँच बजे हैं।', es: 'Son las cinco en punto ahora.' },
      targetSentence: 'It is five o\'clock now',
      wordBank: ['It', 'is', 'five', 'o\'clock', 'now', 'are', 'hours'],
      correctAnswer: 'It is five o\'clock now'
    }
  ],

  // SECTION 17: Assessment Mastery Exercises
  assessmentExercises: [
    {
      id: 'ae_l5_1',
      explanation: 'Age uses \'to be\' + number + \'years old\': \'My father is sixty years old.\' \'Has\' and \'are\' do not fit this sentence.',
      type: 'multiple_choice',
      prompt: 'Mastery Test 1: Choose the correct sentence:',
      options: [
        { id: 'o1', text: 'My father is sixty years old.', isCorrect: true },
        { id: 'o2', text: 'My father has sixty years.', isCorrect: false },
        { id: 'o3', text: 'My father are sixty years old.', isCorrect: false }
      ]
    },
    {
      id: 'ae_l5_2',
      explanation: 'Write 85 as \'eighty-five\', with a hyphen between the tens and the units.',
      type: 'multiple_choice',
      prompt: 'Mastery Test 2: Select the correct written form of 85:',
      options: [
        { id: 'o1', text: 'eighty-five', isCorrect: true },
        { id: 'o2', text: 'eightteen-five', isCorrect: false },
        { id: 'o3', text: 'eighty five', isCorrect: false }
      ]
    },
    {
      id: 'ae_l5_3',
      explanation: '\'Half past six\' means 6:30. \'Past\' is used for times after the hour.',
      type: 'fill_blank',
      prompt: 'Mastery Test 3: Fill in the time expression for 6:30:',
      sourceSentence: 'It is half ____ six.',
      options: [
        { id: 'o1', text: 'past', isCorrect: true },
        { id: 'o2', text: 'to', isCorrect: false },
        { id: 'o3', text: 'after', isCorrect: false }
      ],
      targetSentence: 'past',
      correctAnswer: 'past'
    },
    {
      id: 'ae_l5_4',
      explanation: 'Ask for a phone number with \'What is your phone number?\' The verb \'is\' agrees with the singular \'number\'.',
      type: 'word_ordering',
      prompt: 'Mastery Test 4: Construct "What is your phone number":',
      targetSentence: 'What is your phone number',
      wordBank: ['What', 'is', 'your', 'phone', 'number', 'are', 'my'],
      correctAnswer: 'What is your phone number'
    },
    {
      id: 'ae_l5_5',
      explanation: 'State age with \'I am\' and \'years old\': \'I am thirty-three years old.\'',
      type: 'word_ordering',
      prompt: 'Mastery Test 5: Construct "I am thirty-three years old":',
      targetSentence: 'I am thirty-three years old',
      wordBank: ['I', 'am', 'thirty-three', 'years', 'old', 'have', 'is'],
      correctAnswer: 'I am thirty-three years old'
    },
    {
      id: 'ae_l5_6',
      explanation: 'Listen for the number. The speaker says \'eighty-two\', so the answer is 82.',
      type: 'listening',
      prompt: 'Mastery Test 6: Listen and identify the age:',
      audioText: 'My grandmother is eighty-two years old.',
      audioId: 'aud_l5_ae_6',
      options: [
        { id: 'o1', text: '82', isCorrect: true },
        { id: 'o2', text: '18', isCorrect: false },
        { id: 'o3', text: '28', isCorrect: false }
      ]
    },
    {
      id: 'ae_l5_7',
      explanation: '\'Half past nine\' means 9:30. Say and write the time as \'half past\' + the hour.',
      type: 'listen_and_type',
      prompt: 'Mastery Test 7: Listen and write the sentence:',
      audioText: 'It is half past nine.',
      audioId: 'aud_l5_ae_7',
      targetSentence: 'It is half past nine',
      wordBank: ['It', 'is', 'half', 'past', 'nine', 'o\'clock', 'at'],
      correctAnswer: 'It is half past nine'
    },
    {
      id: 'ae_l5_8',
      explanation: '\'Email address\' is singular, so the question uses \'is\': \'What is your email address?\'',
      type: 'translation',
      prompt: 'Mastery Test 8: Translate into English:',
      sourceSentence: 'आपका ईमेल पता क्या है?',
      sourceTranslations: { hi: 'आपका ईमेल पता क्या है?', es: '¿Cuál es su dirección de correo electrónico?' },
      targetSentence: 'What is your email address',
      wordBank: ['What', 'is', 'your', 'email', 'address', 'are', 'phone'],
      correctAnswer: 'What is your email address'
    },
    {
      id: 'ae_l5_9',
      explanation: 'Use \'at\' before a clock time: \'at ten o\'clock\'. \'Starts\' has an -s because \'the class\' is singular.',
      type: 'speaking',
      prompt: 'Mastery Test 9: Speak this statement:',
      targetSentence: 'The English class starts at ten o\'clock.',
      audioText: 'The English class starts at ten o\'clock.'
    },
    {
      id: 'ae_l5_10',
      type: 'error_correction',
      prompt: 'Mastery Test 10: Correct the age and BE error:',
      errorSentence: 'She have sixteen years old.',
      options: [
        { id: 'o1', text: 'She is sixteen years old.', isCorrect: true },
        { id: 'o2', text: 'She has sixteen years old.', isCorrect: false },
        { id: 'o3', text: 'She are sixteen years old.', isCorrect: false }
      ],
      explanation: 'Use "is" for singular third-person age.'
    }
  ]
};
