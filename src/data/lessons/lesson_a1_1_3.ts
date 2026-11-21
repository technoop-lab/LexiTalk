import { DetailedLessonData } from '../../types';

export const LESSON_A1_1_3_DATA: DetailedLessonData = {
  id: 'lesson_a1_1_3',
  unitId: 'unit_a1_1',
  title: 'Family Members, Relationships & Possessives',
  cefr: 'A1',
  icon: '👨‍👩‍👧‍👦',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Family Members, Relationships & Possessive Forms',
    description: 'Learn how to identify family members, describe family relationships, use possessive \'s and possessive adjectives (my, your, his, her, our, their), and ask about family size and occupations.',
    descriptionsByLang: {
      hi: 'परिवार के सदस्यों के नाम जानें, पारिवारिक संबंधों का वर्णन करें, possessive \'s और possessive adjectives (my, his, her आदि) का उपयोग करें, और परिवार के आकार व व्यवसाय के बारे में बात करें।',
      es: 'Aprende a nombrar a los miembros de la familia, describir relaciones familiares, usar el posesivo \'s y los adjetivos posesivos (my, his, her), y preguntar sobre ocupaciones familiares.',
      fr: 'Apprenez à nommer les membres de la famille, décrire les liens de parenté et utiliser les adjectifs possessifs.',
      de: 'Lernen Sie, Familienmitglieder zu benennen, Verwandtschaftsverhältnisse zu beschreiben und Possessivpronomen zu verwenden.',
      pt: 'Aprenda a nomear membros da família, descrever parentesco e usar adjetivos possessivos.',
      zh: '学习家庭成员称谓、描述亲属关系并正确使用物主代词和所有格。',
      ar: 'تعلم أسماء أفراد العائلة ووصف العلاقات الأسرية واستخدام صفات الملكية.',
      ja: '家族の呼び方を学び、家族関係や所有格（\'s、my、his、herなど）を使って説明します。',
      ru: 'Научитесь называть членов семьи, описывать родственные связи и использовать притяжательные местоимения.'
    },
    canDoStatements: [
      'Name immediate and extended family members in English',
      'Use possessive \'s to show relationships (e.g. "David\'s wife")',
      'Use possessive adjectives (my, your, his, her, our, their) accurately',
      'Ask and answer "Who is this?" and "How many brothers do you have?"',
      'Describe family members\' professions combining Lesson 2 vocabulary',
      'State marital status (single, married) naturally'
    ],
    canDoByLang: {
      hi: [
        'परिवार के सदस्यों के नाम अंग्रेजी में बताना',
        'संबंध दर्शाने के लिए Possessive \'s का उपयोग करना',
        'Possessive Adjectives (my, your, his, her, our, their) का सही प्रयोग करना',
        '"Who is this?" और "How many siblings do you have?" पूछना व बताना',
        'परिवार के सदस्यों के पेशे का वर्णन करना'
      ],
      es: [
        'Nombrar miembros de la familia en inglés',
        'Usar el genitivo posesivo (\'s) para relaciones',
        'Usar adjetivos posesivos correctamente',
        'Preguntar y responder sobre hermanos y familia'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (20 items)
  vocabulary: [
    {
      id: 'v_father',
      word: 'father',
      phonetic: '/ˈfɑːðər/',
      meaning: 'A male parent',
      translationsByLang: { hi: 'पिता / पिता जी', es: 'padre', fr: 'père', de: 'Vater', pt: 'pai', zh: '父亲', ar: 'أب', ja: '父親', ru: 'отец' },
      exampleSentence: 'My father is an engineer.',
      exampleTranslationByLang: { hi: 'मेरे पिता एक इंजीनियर हैं।', es: 'Mi padre es ingeniero.' },
      audioText: 'father',
      audioId: 'en_a1_u01_l03_v_father',
      slowAudioId: 'en_a1_u01_l03_v_father_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👨',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_mother',
      word: 'mother',
      phonetic: '/ˈmʌðər/',
      meaning: 'A female parent',
      translationsByLang: { hi: 'माता / माँ', es: 'madre', fr: 'mère', de: 'Mutter', pt: 'mãe', zh: '母亲', ar: 'أم', ja: '母親', ru: 'мать' },
      exampleSentence: 'Her mother is a doctor.',
      exampleTranslationByLang: { hi: 'उनकी माँ एक डॉक्टर हैं।', es: 'Su madre es médica.' },
      audioText: 'mother',
      audioId: 'en_a1_u01_l03_v_mother',
      slowAudioId: 'en_a1_u01_l03_v_mother_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👩',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_brother',
      word: 'brother',
      phonetic: '/ˈbrʌðər/',
      meaning: 'A male sibling',
      translationsByLang: { hi: 'भाई', es: 'hermano', fr: 'frère', de: 'Bruder', pt: 'irmão', zh: '兄弟', ar: 'أخ', ja: '兄弟 / 兄 / 弟', ru: 'брат' },
      exampleSentence: 'I have one elder brother.',
      exampleTranslationByLang: { hi: 'मेरा एक बड़ा भाई है।', es: 'Tengo un hermano mayor.' },
      audioText: 'brother',
      audioId: 'en_a1_u01_l03_v_brother',
      slowAudioId: 'en_a1_u01_l03_v_brother_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👦',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_sister',
      word: 'sister',
      phonetic: '/ˈsɪstər/',
      meaning: 'A female sibling',
      translationsByLang: { hi: 'बहन', es: 'hermana', fr: 'sœur', de: 'Schwester', pt: 'irmã', zh: '姐妹', ar: 'أخت', ja: '姉妹 / 姉 / 妹', ru: 'сестра' },
      exampleSentence: 'Sarah is my younger sister.',
      exampleTranslationByLang: { hi: 'सारा मेरी छोटी बहन है।', es: 'Sarah es mi hermana menor.' },
      audioText: 'sister',
      audioId: 'en_a1_u01_l03_v_sister',
      slowAudioId: 'en_a1_u01_l03_v_sister_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👧',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_husband',
      word: 'husband',
      phonetic: '/ˈhʌzbənd/',
      meaning: 'The man someone is married to',
      translationsByLang: { hi: 'पति', es: 'esposo / marido', fr: 'mari', de: 'Ehemann', pt: 'marido', zh: '丈夫', ar: 'زوج', ja: '夫', ru: 'муж' },
      exampleSentence: 'Her husband works in an office.',
      exampleTranslationByLang: { hi: 'उनके पति एक दफ्तर में काम करते हैं।', es: 'Su esposo trabaja en una oficina.' },
      audioText: 'husband',
      audioId: 'en_a1_u01_l03_v_husband',
      slowAudioId: 'en_a1_u01_l03_v_husband_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🤵',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_wife',
      word: 'wife',
      phonetic: '/waɪf/',
      meaning: 'The woman someone is married to',
      translationsByLang: { hi: 'पत्नी', es: 'esposa / mujer', fr: 'femme / épouse', de: 'Ehefrau', pt: 'esposa', zh: '妻子', ar: 'زوجة', ja: '妻', ru: 'жена' },
      exampleSentence: 'John\'s wife is a teacher.',
      exampleTranslationByLang: { hi: 'जॉन की पत्नी एक शिक्षिका हैं।', es: 'La esposa de John es profesora.' },
      audioText: 'wife',
      audioId: 'en_a1_u01_l03_v_wife',
      slowAudioId: 'en_a1_u01_l03_v_wife_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👰',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_son',
      word: 'son',
      phonetic: '/sʌn/',
      meaning: 'A male child',
      translationsByLang: { hi: 'बेटा / पुत्र', es: 'hijo', fr: 'fils', de: 'Sohn', pt: 'filho', zh: '儿子', ar: 'ابن', ja: '息子', ru: 'сын' },
      exampleSentence: 'Their son is a student.',
      exampleTranslationByLang: { hi: 'उनका बेटा एक छात्र है।', es: 'Su hijo es estudiante.' },
      audioText: 'son',
      audioId: 'en_a1_u01_l03_v_son',
      slowAudioId: 'en_a1_u01_l03_v_son_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧒',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_daughter',
      word: 'daughter',
      phonetic: '/ˈdɔːtər/',
      meaning: 'A female child',
      translationsByLang: { hi: 'बेटी / पुत्री', es: 'hija', fr: 'fille', de: 'Tochter', pt: 'filha', zh: '女儿', ar: 'ابنة', ja: '娘', ru: 'дочь' },
      exampleSentence: 'His daughter is seven years old.',
      exampleTranslationByLang: { hi: 'उनकी बेटी सात साल की है।', es: 'Su hija tiene siete años.' },
      audioText: 'daughter',
      audioId: 'en_a1_u01_l03_v_daughter',
      slowAudioId: 'en_a1_u01_l03_v_daughter_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👧',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_parents',
      word: 'parents',
      phonetic: '/ˈperənts/',
      meaning: 'A mother and father',
      translationsByLang: { hi: 'माता-पिता', es: 'padres', fr: 'parents', de: 'Eltern', pt: 'pais', zh: '父母', ar: 'والدان', ja: '両親', ru: 'родители' },
      exampleSentence: 'My parents live in Delhi.',
      exampleTranslationByLang: { hi: 'मेरे माता-पिता दिल्ली में रहते हैं।', es: 'Mis padres viven en Delhi.' },
      audioText: 'parents',
      audioId: 'en_a1_u01_l03_v_parents',
      slowAudioId: 'en_a1_u01_l03_v_parents_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👫',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_children',
      word: 'children',
      phonetic: '/ˈtʃɪldrən/',
      meaning: 'Plural of child / sons and daughters',
      translationsByLang: { hi: 'बच्चे', es: 'niños / hijos', fr: 'enfants', de: 'Kinder', pt: 'crianças / filhos', zh: '孩子们', ar: 'أطفال', ja: '子供たち', ru: 'дети' },
      exampleSentence: 'They have two children.',
      exampleTranslationByLang: { hi: 'उनके दो बच्चे हैं।', es: 'Tienen dos hijos.' },
      audioText: 'children',
      audioId: 'en_a1_u01_l03_v_children',
      slowAudioId: 'en_a1_u01_l03_v_children_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧑‍🤝‍🧑',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_grandfather',
      word: 'grandfather',
      phonetic: '/ˈɡrænfɑːðər/',
      meaning: 'The father of your father or mother',
      translationsByLang: { hi: 'दादा / नाना', es: 'abuelo', fr: 'grand-père', de: 'Großvater', pt: 'avô', zh: '祖父 / 外祖父', ar: 'جد', ja: '祖父', ru: 'дедушка' },
      exampleSentence: 'My grandfather is eighty years old.',
      exampleTranslationByLang: { hi: 'मेरे दादाजी 80 साल के हैं।', es: 'Mi abuelo tiene ochenta años.' },
      audioText: 'grandfather',
      audioId: 'en_a1_u01_l03_v_grandfather',
      slowAudioId: 'en_a1_u01_l03_v_grandfather_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👴',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_grandmother',
      word: 'grandmother',
      phonetic: '/ˈɡrænmʌðər/',
      meaning: 'The mother of your father or mother',
      translationsByLang: { hi: 'दादी / नानी', es: 'abuela', fr: 'grand-mère', de: 'Großmutter', pt: 'avó', zh: '祖母 / 外祖母', ar: 'جدة', ja: '祖母', ru: 'бабушка' },
      exampleSentence: 'Her grandmother is very kind.',
      exampleTranslationByLang: { hi: 'उनकी दादी बहुत दयालु हैं।', es: 'Su abuela es muy amable.' },
      audioText: 'grandmother',
      audioId: 'en_a1_u01_l03_v_grandmother',
      slowAudioId: 'en_a1_u01_l03_v_grandmother_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👵',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_uncle',
      word: 'uncle',
      phonetic: '/ˈʌŋkl/',
      meaning: 'Brother of a parent, or aunt\'s husband',
      translationsByLang: { hi: 'चाचा / मामा / फूफा', es: 'tío', fr: 'oncle', de: 'Onkel', pt: 'tio', zh: '叔叔 / 舅舅', ar: 'عم / خال', ja: '叔父', ru: 'дядя' },
      exampleSentence: 'My uncle is a pilot.',
      exampleTranslationByLang: { hi: 'मेरे चाचा एक पायलट हैं।', es: 'Mi tío es piloto.' },
      audioText: 'uncle',
      audioId: 'en_a1_u01_l03_v_uncle',
      slowAudioId: 'en_a1_u01_l03_v_uncle_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👨‍🦰',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_aunt',
      word: 'aunt',
      phonetic: '/ænt/',
      meaning: 'Sister of a parent, or uncle\'s wife',
      translationsByLang: { hi: 'चाची / मासी / बुआ', es: 'tía', fr: 'tante', de: 'Tante', pt: 'tia', zh: '阿姨 / 姑姑', ar: 'عمة / خالة', ja: '叔母', ru: 'тётя' },
      exampleSentence: 'His aunt lives in Paris.',
      exampleTranslationByLang: { hi: 'उनकी चाची पेरिस में रहती हैं।', es: 'Su tía vive en París.' },
      audioText: 'aunt',
      audioId: 'en_a1_u01_l03_v_aunt',
      slowAudioId: 'en_a1_u01_l03_v_aunt_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👩‍🦰',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_cousin',
      word: 'cousin',
      phonetic: '/ˈkʌzn/',
      meaning: 'Child of an uncle or aunt',
      translationsByLang: { hi: 'चचेरा भाई / बहन', es: 'primo/a', fr: 'cousin/e', de: 'Cousin/e', pt: 'primo/a', zh: '堂/表兄弟姐妹', ar: 'ابن عم', ja: 'いとこ', ru: 'кузен' },
      exampleSentence: 'Rahul is my cousin.',
      exampleTranslationByLang: { hi: 'राहुल मेरा चचेरा भाई है।', es: 'Rahul es mi primo.' },
      audioText: 'cousin',
      audioId: 'en_a1_u01_l03_v_cousin',
      slowAudioId: 'en_a1_u01_l03_v_cousin_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧑',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_family',
      word: 'family',
      phonetic: '/ˈfæməli/',
      meaning: 'A group of related people',
      translationsByLang: { hi: 'परिवार', es: 'familia', fr: 'famille', de: 'Familie', pt: 'família', zh: '家庭', ar: 'عائلة', ja: '家族', ru: 'семья' },
      exampleSentence: 'I have a big family.',
      exampleTranslationByLang: { hi: 'मेरा एक बड़ा परिवार है।', es: 'Tengo una gran familia.' },
      audioText: 'family',
      audioId: 'en_a1_u01_l03_v_family',
      slowAudioId: 'en_a1_u01_l03_v_family_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏠',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_married',
      word: 'married',
      phonetic: '/ˈmærid/',
      meaning: 'Having a husband or wife',
      translationsByLang: { hi: 'विवाहित / शादीशुदा', es: 'casado/a', fr: 'marié/e', de: 'verheiratet', pt: 'casado/a', zh: '已婚', ar: 'متزوج', ja: '既婚', ru: 'женат / замужем' },
      exampleSentence: 'My sister is married.',
      exampleTranslationByLang: { hi: 'मेरी बहन शादीशुदा है।', es: 'Mi hermana está casada.' },
      audioText: 'married',
      audioId: 'en_a1_u01_l03_v_married',
      slowAudioId: 'en_a1_u01_l03_v_married_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💍',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_single',
      word: 'single',
      phonetic: '/ˈsɪŋɡl/',
      meaning: 'Not married',
      translationsByLang: { hi: 'अविवाहित', es: 'soltero/a', fr: 'célibataire', de: 'ledig', pt: 'solteiro/a', zh: '单身', ar: 'أعزب', ja: '独身', ru: 'холост / не замужем' },
      exampleSentence: 'His brother is single.',
      exampleTranslationByLang: { hi: 'उनका भाई अविवाहित है।', es: 'Su hermano es soltero.' },
      audioText: 'single',
      audioId: 'en_a1_u01_l03_v_single',
      slowAudioId: 'en_a1_u01_l03_v_single_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👤',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_elder',
      word: 'elder',
      phonetic: '/ˈeldər/',
      meaning: 'Older family member',
      translationsByLang: { hi: 'बड़ा (उम्र में)', es: 'mayor', fr: 'aîné/e', de: 'älter', pt: 'mais velho', zh: '年长的', ar: 'أكبر سناً', ja: '年上の', ru: 'старший' },
      exampleSentence: 'This is my elder brother.',
      exampleTranslationByLang: { hi: 'यह मेरे बड़े भाई हैं।', es: 'Este es mi hermano mayor.' },
      audioText: 'elder',
      audioId: 'en_a1_u01_l03_v_elder',
      slowAudioId: 'en_a1_u01_l03_v_elder_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⬆️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_younger',
      word: 'younger',
      phonetic: '/ˈjʌŋɡər/',
      meaning: 'Less old family member',
      translationsByLang: { hi: 'छोटा (उम्र में)', es: 'menor', fr: 'cadet/te', de: 'jünger', pt: 'mais novo', zh: '年幼的', ar: 'أصغر سناً', ja: '年下の', ru: 'младший' },
      exampleSentence: 'I have a younger sister.',
      exampleTranslationByLang: { hi: 'मेरी एक छोटी बहन है।', es: 'Tengo una hermana menor.' },
      audioText: 'younger',
      audioId: 'en_a1_u01_l03_v_younger',
      slowAudioId: 'en_a1_u01_l03_v_younger_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⬇️',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks & Expressions
  expressions: [
    {
      id: 'e_who_is_this',
      expression: 'Who is this?',
      translationsByLang: { hi: 'यह कौन है?', es: '¿Quién es este/esta?', fr: 'Qui est-ce ?', de: 'Wer ist das?', pt: 'Quem é este/esta?', zh: '这是谁？', ar: 'من هذا؟', ja: 'これは誰ですか？', ru: 'Кто это?' },
      usageNote: 'Used when pointing to someone in a photograph or introducing someone.',
      audioText: 'Who is this in the photo?',
      audioId: 'en_a1_u01_l03_e_who_is_this',
      slowAudioId: 'en_a1_u01_l03_e_who_is_this_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '❓'
    },
    {
      id: 'e_this_is_my',
      expression: 'This is my...',
      translationsByLang: { hi: 'यह मेरा/मेरी... है', es: 'Este/Esta es mi...', fr: 'Voici mon/ma...', de: 'Das ist mein/e...', pt: 'Este/Esta é meu/minha...', zh: '这是我的...', ar: 'هذا/هذه...', ja: 'こちらは私の〜です', ru: 'Это мой/моя...' },
      usageNote: 'Standard formula for introducing family members.',
      audioText: 'This is my sister Sarah.',
      audioId: 'en_a1_u01_l03_e_this_is_my',
      slowAudioId: 'en_a1_u01_l03_e_this_is_my_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👉'
    },
    {
      id: 'e_how_many_brothers',
      expression: 'How many brothers do you have?',
      translationsByLang: { hi: 'आपके कितने भाई हैं?', es: '¿Cuántos hermanos tienes?', fr: 'Combien de frères avez-vous ?', de: 'Wie viele Brüder hast du?', pt: 'Quantos irmãos você tem?', zh: '你有几个兄弟？', ar: 'كم أخاً لديك؟', ja: '兄弟は何人いますか？', ru: 'Сколько у вас братьев?' },
      usageNote: 'Formula: How many + plural noun + do you have?',
      audioText: 'How many brothers do you have?',
      audioId: 'en_a1_u01_l03_e_how_many_brothers',
      slowAudioId: 'en_a1_u01_l03_e_how_many_brothers_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔢'
    },
    {
      id: 'e_what_is_fathers_job',
      expression: 'What is your father\'s job?',
      translationsByLang: { hi: 'आपके पिता जी का क्या व्यवसाय है?', es: '¿Cuál es el trabajo de tu padre?', fr: 'Quel est le travail de votre père ?', de: 'Was ist der Beruf Ihres Vaters?', pt: 'Qual é o trabalho do seu pai?', zh: '你父亲做什么工作？', ar: 'ما هي وظيفة والدك؟', ja: 'お父様の仕事は何ですか？', ru: 'Кем работает ваш отец?' },
      usageNote: 'Combines possessive \'s with profession questions.',
      audioText: 'What is your father\'s job?',
      audioId: 'en_a1_u01_l03_e_what_is_fathers_job',
      slowAudioId: 'en_a1_u01_l03_e_what_is_fathers_job_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💼'
    }
  ],

  // SECTION 5 & 6: Grammar Rules
  grammar: {
    title: 'Possessive \'s (Genitive) & Possessive Adjectives',
    concept: 'To show family relationship or ownership, add \'s to singular nouns (Sarah\'s brother). Use possessive adjectives (my, your, his, her, our, their) before nouns.',
    conceptsByLang: {
      hi: 'संबंध या स्वामित्व दर्शाने के लिए एकवचन संज्ञा में \'s जोड़ें (जैसे David\'s wife)। संज्ञा से पहले possessive adjectives (my, your, his, her, our, their) का प्रयोग करें।',
      es: 'Para mostrar relación o pertenencia, añade \'s al sustantivo (David\'s wife). Usa adjetivos posesivos (my, his, her) antes del sustantivo.',
      fr: 'Pour indiquer la relation familiale, ajoutez \'s au nom (David\'s wife). Utilisez les adjectifs possessifs.',
      de: 'Verwenden Sie \'s für Besitzverhältnisse (David\'s wife) und Possessivpronomen (my, his, her).',
      pt: 'Use \'s para indicar parentesco (David\'s wife) e adjetivos possessivos (my, his, her).',
      zh: '在单数名词后加 \'s 表示所有格（如 David\'s wife），并使用物主代词修饰名词。',
      ar: 'أضف \'s للمفرد للدلالة على الملكية والقرابة، واستخدم صفات الملكية.',
      ja: '名詞に \'s をつけて家族関係を表し、所有形容詞（my, his, herなど）を使います。',
      ru: 'Добавляйте \'s для выражения родства (David\'s wife) и используйте притяжательные прилагательные.'
    },
    verbBeExplanation: {
      title: 'Possessive Pronouns Paradigm Table',
      content: 'Match the subject pronoun to its possessive adjective form:',
      contractionsTable: [
        { full: 'I → my', contracted: 'my sister', meaningByLang: { hi: 'मेरी बहन', es: 'mi hermana' } },
        { full: 'You → your', contracted: 'your brother', meaningByLang: { hi: 'आपका भाई', es: 'tu hermano' } },
        { full: 'He → his', contracted: 'his father', meaningByLang: { hi: 'उनके पिता (पुरुष)', es: 'su padre (de él)' } },
        { full: 'She → her', contracted: 'her mother', meaningByLang: { hi: 'उनकी माँ (महिला)', es: 'su madre (de ella)' } },
        { full: 'We → our', contracted: 'our parents', meaningByLang: { hi: 'हमारे माता-पिता', es: 'nuestros padres' } },
        { full: 'They → their', contracted: 'their children', meaningByLang: { hi: 'उनके बच्चे', es: 'sus hijos (de ellos)' } }
      ]
    },
    patterns: [
      {
        structure: 'Name + \'s + Family Member + is a/an + Profession',
        explanation: 'Combines possessive \'s with Lesson 2 job statements.',
        examples: [
          { english: 'David\'s wife is a doctor.', translationByLang: { hi: 'डेविड की पत्नी एक डॉक्टर हैं।', es: 'La esposa de David es doctora.' } },
          { english: 'Sarah\'s brother is an architect.', translationByLang: { hi: 'सारा का भाई एक आर्किटेक्ट है।', es: 'El hermano de Sarah es arquitecto.' } }
        ]
      },
      {
        structure: 'How many + [Plural Family Noun] + do you have?',
        explanation: 'Question pattern for asking about siblings and family size.',
        examples: [
          { english: 'How many sisters do you have?', translationByLang: { hi: 'आपकी कितनी बहनें हैं?', es: '¿Cuántas hermanas tienes?' } },
          { english: 'I have two sisters and one brother.', translationByLang: { hi: 'मेरी दो बहनें और एक भाई है।', es: 'Tengo dos hermanas y un hermano.' } }
        ]
      }
    ]
  },

  // SECTION 7: Common Mistakes
  commonMistakes: [
    {
      id: 'cm_he_sister',
      incorrect: 'He sister is a doctor.',
      correct: 'His sister is a doctor.',
      whyExplanation: 'Use the possessive adjective "his" for male ownership, not the subject pronoun "he".',
      explanationsByLang: {
        hi: 'पुरुष के संबंध के लिए "he" नहीं, possessive adjective "his" का प्रयोग करें।'
      }
    },
    {
      id: 'cm_no_possessive_s',
      incorrect: 'My mother sister lives in Paris.',
      correct: 'My mother\'s sister lives in Paris.',
      whyExplanation: 'Add \'s to "mother" to indicate family relation ("mother\'s sister" = aunt).',
      explanationsByLang: {
        hi: 'संबंध बताने के लिए "mother" में \'s जोड़कर "mother\'s sister" लिखें।'
      }
    },
    {
      id: 'cm_childs',
      incorrect: 'They have two childs.',
      correct: 'They have two children.',
      whyExplanation: 'The plural of "child" is irregular: "children", never "childs".',
      explanationsByLang: {
        hi: '"child" का बहुवचन irregular है: "children"।'
      }
    }
  ],

  // SECTION 11: Mini Dialogues
  dialogues: [
    {
      id: 'd_family_photos',
      title: 'Looking at Family Photos',
      context: 'Mark and Elena are looking at family pictures over coffee.',
      lines: [
        {
          speaker: 'Mark',
          avatar: '👨‍💼',
          text: 'Who is this in the photo, Elena?',
          translationsByLang: { hi: 'फोटो में यह कौन हैं, एलेना?', es: '¿Quién es este en la foto, Elena?' },
          audioText: 'Who is this in the photo, Elena?',
          audioId: 'en_a1_u01_l03_d1_1',
          voiceId: 'EN_TEACHER_01'
        },
        {
          speaker: 'Elena',
          avatar: '👩‍💼',
          text: 'This is my elder brother, Marco. He is an engineer.',
          translationsByLang: { hi: 'यह मेरे बड़े भाई मार्को हैं। वह एक इंजीनियर हैं।', es: 'Este es mi hermano mayor, Marco. Es ingeniero.' },
          audioText: 'This is my elder brother, Marco. He is an engineer.',
          audioId: 'en_a1_u01_l03_d1_2',
          voiceId: 'EN_TEACHER_01'
        },
        {
          speaker: 'Mark',
          avatar: '👨‍💼',
          text: 'Is he married?',
          translationsByLang: { hi: 'क्या वह शादीशुदा हैं?', es: '¿Está casado?' },
          audioText: 'Is he married?',
          audioId: 'en_a1_u01_l03_d1_3',
          voiceId: 'EN_TEACHER_01'
        },
        {
          speaker: 'Elena',
          avatar: '👩‍💼',
          text: 'Yes, Marco\'s wife is a teacher. They have two children.',
          translationsByLang: { hi: 'हाँ, मार्को की पत्नी शिक्षिका हैं। उनके दो बच्चे हैं।', es: 'Sí, la esposa de Marco es profesora. Tienen dos hijos.' },
          audioText: 'Yes, Marco\'s wife is a teacher. They have two children.',
          audioId: 'en_a1_u01_l03_d1_4',
          voiceId: 'EN_TEACHER_01'
        }
      ]
    }
  ],

  // SECTION 8–15: Practice Exercises (Canonical Types)
  practiceExercises: [
    {
      id: 'pe_l3_1',
      type: 'multiple_choice',
      prompt: 'Identify the correct family term: A male parent is a:',
      options: [
        { id: 'o1', text: 'father', isCorrect: true },
        { id: 'o2', text: 'brother', isCorrect: false },
        { id: 'o3', text: 'uncle', isCorrect: false }
      ],
      explanation: 'Father is the male parent.'
    },
    {
      id: 'pe_l3_2',
      type: 'multiple_choice',
      prompt: 'Identify the family term: The daughter of your mother and father is your:',
      options: [
        { id: 'o1', text: 'sister', isCorrect: true },
        { id: 'o2', text: 'aunt', isCorrect: false },
        { id: 'o3', text: 'cousin', isCorrect: false }
      ],
      explanation: 'Your parents\' daughter is your sister.'
    },
    {
      id: 'pe_l3_3',
      type: 'multiple_choice',
      prompt: 'Choose the correct possessive form: "This is ____ car."',
      options: [
        { id: 'o1', text: 'John\'s', isCorrect: true },
        { id: 'o2', text: 'Johns', isCorrect: false },
        { id: 'o3', text: 'John is', isCorrect: false }
      ],
      explanation: 'Use possessive \'s for singular names.'
    },
    {
      id: 'pe_l3_4',
      type: 'multiple_choice',
      prompt: 'Choose the possessive adjective: "She is a doctor. ____ husband is an architect."',
      options: [
        { id: 'o1', text: 'Her', isCorrect: true },
        { id: 'o2', text: 'His', isCorrect: false },
        { id: 'o3', text: 'Their', isCorrect: false }
      ],
      explanation: 'Use "her" for female owners.'
    },
    {
      id: 'pe_l3_5',
      type: 'fill_blank',
      prompt: 'Complete with the correct possessive pronoun:',
      sourceSentence: 'David is my friend. ____ brother is a software engineer.',
      options: [
        { id: 'o1', text: 'His', isCorrect: true },
        { id: 'o2', text: 'He', isCorrect: false },
        { id: 'o3', text: 'Her', isCorrect: false }
      ],
      targetSentence: 'His',
      correctAnswer: 'His',
      explanation: 'David is male, so use "His".'
    },
    {
      id: 'pe_l3_6',
      type: 'fill_blank',
      prompt: 'Complete the irregular plural noun:',
      sourceSentence: 'They have three ____ (child).',
      options: [
        { id: 'o1', text: 'children', isCorrect: true },
        { id: 'o2', text: 'childs', isCorrect: false },
        { id: 'o3', text: 'childes', isCorrect: false }
      ],
      targetSentence: 'children',
      correctAnswer: 'children',
      explanation: 'The plural of child is children.'
    },
    {
      id: 'pe_l3_7',
      type: 'word_ordering',
      prompt: 'Construct the family introduction:',
      targetSentence: 'This is my elder brother Rahul',
      wordBank: ['This', 'is', 'my', 'elder', 'brother', 'Rahul', 'an', 'sister'],
      correctAnswer: 'This is my elder brother Rahul',
      explanation: 'Formula: This is + possessive + adjective + noun + name.'
    },
    {
      id: 'pe_l3_8',
      type: 'word_ordering',
      prompt: 'Construct the question asking about siblings:',
      targetSentence: 'How many brothers do you have',
      wordBank: ['How', 'many', 'brothers', 'do', 'you', 'have', 'are', 'is'],
      correctAnswer: 'How many brothers do you have',
      explanation: 'How many + plural noun + do + subject + have?'
    },
    {
      id: 'pe_l3_9',
      type: 'error_correction',
      prompt: 'Correct the possessive error:',
      errorSentence: 'He sister is a manager in Chicago.',
      options: [
        { id: 'o1', text: 'His sister is a manager in Chicago.', isCorrect: true },
        { id: 'o2', text: 'Him sister is a manager in Chicago.', isCorrect: false },
        { id: 'o3', text: 'He\'s sister is a manager in Chicago.', isCorrect: false }
      ],
      explanation: 'Replace "He" with possessive adjective "His".'
    },
    {
      id: 'pe_l3_10',
      type: 'dialogue_completion',
      prompt: 'Select the best response in the photo dialogue:',
      dialogueContext: {
        speakerA: 'Alex',
        lineA: 'Who is this in the photo?',
        speakerB: 'Elena'
      },
      options: [
        { id: 'o1', text: 'This is my wife, Sarah.', isCorrect: true },
        { id: 'o2', text: 'Yes, I work in an office.', isCorrect: false },
        { id: 'o3', text: 'I am 25 years old.', isCorrect: false }
      ],
      explanation: 'Answering "Who is this?" requires introducing the person.'
    },
    {
      id: 'pe_l3_11',
      type: 'listening',
      prompt: 'Listen to the statement and select the relative mentioned:',
      audioText: 'My grandmother is 75 years old and lives in Toronto.',
      audioId: 'aud_l3_pe_11',
      options: [
        { id: 'o1', text: 'grandmother', isCorrect: true },
        { id: 'o2', text: 'grandfather', isCorrect: false },
        { id: 'o3', text: 'mother', isCorrect: false }
      ],
      explanation: 'The audio mentions "grandmother".'
    },
    {
      id: 'pe_l3_12',
      explanation: '\'His\' is the possessive for a man: \'His father is a doctor.\' Use \'is\' with the singular \'father\'.',
      type: 'listen_and_type',
      prompt: 'Listen and arrange the tiles to form the sentence:',
      audioText: 'His father is a doctor.',
      audioId: 'aud_l3_pe_12',
      targetSentence: 'His father is a doctor',
      wordBank: ['His', 'father', 'is', 'a', 'doctor', 'her', 'an'],
      correctAnswer: 'His father is a doctor'
    },
    {
      id: 'pe_l3_13',
      explanation: '\'My\' shows that the sister belongs to the speaker: \'This is my sister.\'',
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'यह मेरी बहन है।',
      sourceTranslations: { hi: 'यह मेरी बहन है।', es: 'Esta es mi hermana.' },
      targetSentence: 'This is my sister',
      wordBank: ['This', 'is', 'my', 'sister', 'brother', 'her'],
      correctAnswer: 'This is my sister'
    },
    {
      id: 'pe_l3_14',
      explanation: 'Say \'My brother is a software engineer\' with a clear \'is\' after the singular subject \'brother\'.',
      type: 'speaking',
      prompt: 'Speak this family description out loud:',
      targetSentence: 'My brother is a software engineer.',
      audioText: 'My brother is a software engineer.'
    },
    {
      id: 'pe_l3_15',
      explanation: 'Introduce a family member in order: name, origin, job. The pronoun \'he\' refers back to \'my father\'.',
      type: 'word_ordering',
      prompt: 'Interleaved Practice (L1 + L2 + L3): Combine name, origin, and family job:',
      targetSentence: 'My father is Carlos from Spain and he is an architect',
      wordBank: ['My', 'father', 'is', 'Carlos', 'from', 'Spain', 'and', 'he', 'is', 'an', 'architect', 'a', 'doctor'],
      correctAnswer: 'My father is Carlos from Spain and he is an architect'
    }
  ],

  // SECTION 16: Review Exercises
  reviewExercises: [
    {
      id: 're_l3_1',
      type: 'multiple_choice',
      prompt: 'Review: Select the correct possessive adjective for "we":',
      options: [
        { id: 'o1', text: 'our', isCorrect: true },
        { id: 'o2', text: 'their', isCorrect: false },
        { id: 'o3', text: 'your', isCorrect: false }
      ],
      explanation: 'Subject pronoun "we" corresponds to possessive adjective "our".'
    },
    {
      id: 're_l3_2',
      explanation: '\'Mother\'s job\' uses an apostrophe + s to show possession. The question is: \'What is your mother\'s job?\'',
      type: 'word_ordering',
      prompt: 'Review: Arrange tiles to ask about someone\'s mother\'s job:',
      targetSentence: 'What is your mother\'s job',
      wordBank: ['What', 'is', 'your', 'mother\'s', 'job', 'father', 'work'],
      correctAnswer: 'What is your mother\'s job'
    },
    {
      id: 're_l3_3',
      explanation: '\'Their\' is the possessive for more than one person. Priya and Rahul are two people, so \'Their children\' is correct.',
      type: 'fill_blank',
      prompt: 'Review: Complete with possessive adjective:',
      sourceSentence: 'Priya and Rahul are married. ____ children are students.',
      options: [
        { id: 'o1', text: 'Their', isCorrect: true },
        { id: 'o2', text: 'His', isCorrect: false },
        { id: 'o3', text: 'Her', isCorrect: false }
      ],
      targetSentence: 'Their',
      correctAnswer: 'Their'
    },
    {
      id: 're_l3_4',
      explanation: '\'My\' is used before a family noun: \'My father is a doctor.\' Hindi: \'मेरे पिता जी डॉक्टर हैं।\'',
      type: 'translation',
      prompt: 'Review Translation: Translate to English:',
      sourceSentence: 'मेरे पिता जी डॉक्टर हैं।',
      sourceTranslations: { hi: 'मेरे पिता जी डॉक्टर हैं।', es: 'Mi padre es médico.' },
      targetSentence: 'My father is a doctor',
      wordBank: ['My', 'father', 'is', 'a', 'doctor', 'an', 'teacher'],
      correctAnswer: 'My father is a doctor'
    }
  ],

  // SECTION 17: Assessment Mastery Exercises
  assessmentExercises: [
    {
      id: 'ae_l3_1',
      type: 'multiple_choice',
      prompt: 'Mastery Test 1: Choose the correct sentence:',
      options: [
        { id: 'o1', text: 'Sarah\'s husband is an engineer.', isCorrect: true },
        { id: 'o2', text: 'Sarah husband is a engineer.', isCorrect: false },
        { id: 'o3', text: 'Sarah\'s husband is a engineer.', isCorrect: false }
      ],
      explanation: 'Requires possessive \'s and "an" before engineer.'
    },
    {
      id: 'ae_l3_2',
      explanation: '\'Their\' shows possession by more than one person. \'There\' means a place, and \'them\' is an object pronoun.',
      type: 'multiple_choice',
      prompt: 'Mastery Test 2: Select the correct possessive for "they":',
      options: [
        { id: 'o1', text: 'their', isCorrect: true },
        { id: 'o2', text: 'there', isCorrect: false },
        { id: 'o3', text: 'them', isCorrect: false }
      ]
    },
    {
      id: 'ae_l3_3',
      explanation: '\'Two brothers\' is the plural of \'brother\': add -s. \'Brothers\'\' with an apostrophe shows possession, which does not fit here.',
      type: 'fill_blank',
      prompt: 'Mastery Test 3: Complete with correct plural noun:',
      sourceSentence: 'He has two ____ (brother) and one sister.',
      options: [
        { id: 'o1', text: 'brothers', isCorrect: true },
        { id: 'o2', text: 'brother', isCorrect: false },
        { id: 'o3', text: 'brothers\'', isCorrect: false }
      ],
      targetSentence: 'brothers',
      correctAnswer: 'brothers'
    },
    {
      id: 'ae_l3_4',
      explanation: 'For a question about quantity, use \'How many\' + a plural noun: \'How many children do you have?\'',
      type: 'word_ordering',
      prompt: 'Mastery Test 4: Construct "How many children do you have":',
      targetSentence: 'How many children do you have',
      wordBank: ['How', 'many', 'children', 'do', 'you', 'have', 'child', 'are'],
      correctAnswer: 'How many children do you have'
    },
    {
      id: 'ae_l3_5',
      explanation: '\'My mother\'s sister\' uses an apostrophe + s to show that she belongs to my mother. A sister is not an uncle.',
      type: 'word_ordering',
      prompt: 'Mastery Test 5: Construct "My mother\'s sister is my aunt":',
      targetSentence: 'My mother\'s sister is my aunt',
      wordBank: ['My', 'mother\'s', 'sister', 'is', 'my', 'aunt', 'uncle', 'a'],
      correctAnswer: 'My mother\'s sister is my aunt'
    },
    {
      id: 'ae_l3_6',
      explanation: 'Listen for two things: who the speaker means (\'her husband\') and where he works (\'at the hospital\'). Choose the option that matches both.',
      type: 'listening',
      prompt: 'Mastery Test 6: Listen and select the relationship statement:',
      audioText: 'Her husband works at the city hospital.',
      audioId: 'aud_l3_ae_6',
      options: [
        { id: 'o1', text: 'Her husband works at the hospital.', isCorrect: true },
        { id: 'o2', text: 'Her brother works at the hospital.', isCorrect: false },
        { id: 'o3', text: 'Her father works at the school.', isCorrect: false }
      ]
    },
    {
      id: 'ae_l3_7',
      explanation: '\'Our\' is the possessive for \'we\': \'Our grandfather is eighty years old.\' Use \'is\' with a singular subject.',
      type: 'listen_and_type',
      prompt: 'Mastery Test 7: Listen and write the sentence:',
      audioText: 'Our grandfather is eighty years old.',
      audioId: 'aud_l3_ae_7',
      targetSentence: 'Our grandfather is eighty years old',
      wordBank: ['Our', 'grandfather', 'is', 'eighty', 'years', 'old', 'my'],
      correctAnswer: 'Our grandfather is eighty years old'
    },
    {
      id: 'ae_l3_8',
      explanation: '\'His\' is the possessive for a man: \'His brother is a software engineer.\' Hindi: \'उसका भाई एक सॉफ्टवेयर इंजीनियर है।\'',
      type: 'translation',
      prompt: 'Mastery Test 8: Translate into English:',
      sourceSentence: 'उसका भाई एक सॉफ्टवेयर इंजीनियर है।',
      sourceTranslations: { hi: 'उसका भाई एक सॉफ्टवेयर इंजीनियर है।', es: 'Su hermano es ingeniero de software.' },
      targetSentence: 'His brother is a software engineer',
      wordBank: ['His', 'brother', 'is', 'a', 'software', 'engineer', 'an', 'her'],
      correctAnswer: 'His brother is a software engineer'
    },
    {
      id: 'ae_l3_9',
      explanation: 'Introduce a spouse with \'This is my wife\' and then \'she\': \'she is a doctor\'. \'She\' refers back to \'my wife\'.',
      type: 'speaking',
      prompt: 'Mastery Test 9: Speak this complete introduction:',
      targetSentence: 'This is my wife Priya and she is a doctor.',
      audioText: 'This is my wife Priya and she is a doctor.'
    },
    {
      id: 'ae_l3_10',
      type: 'error_correction',
      prompt: 'Mastery Test 10: Fix the grammar error:',
      errorSentence: 'Their daughter are a student at university.',
      options: [
        { id: 'o1', text: 'Their daughter is a student at university.', isCorrect: true },
        { id: 'o2', text: 'Their daughter am a student at university.', isCorrect: false },
        { id: 'o3', text: 'Them daughter is a student at university.', isCorrect: false }
      ],
      explanation: 'Daughter is singular, so verb BE must be "is".'
    }
  ]
};
