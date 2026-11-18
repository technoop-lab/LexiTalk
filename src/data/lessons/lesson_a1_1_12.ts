import { DetailedLessonData } from '../../types';

export const LESSON_A1_1_12_DATA: DetailedLessonData = {
  id: 'lesson_a1_1_12',
  unitId: 'unit_a1_1',
  title: 'Present Simple Questions & Short Answers (Do / Does)',
  cefr: 'A1',
  icon: '❓',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Present Simple Yes/No & WH- Questions',
    description: 'Learn how to form Yes/No questions and WH- open questions in the Present Simple using "Do" (for I/you/we/they) and "Does" (for he/she/it), master short answers (Yes, I do / No, he doesn\'t), and use core question words (what, where, when, why, how often).',
    descriptionsByLang: {
      hi: 'Present Simple में Yes/No और WH- प्रश्न बनाना सीखें। I/you/we/they के लिए "Do" और he/she/it के लिए "Does" का प्रयोग करें, संक्षिप्त उत्तर (Yes, I do / No, he doesn\'t) दें, और WH- शब्दों का सही क्रम समझें।',
      es: 'Aprende a formular preguntas de Sí/No y de información (WH-) en Presente Simple usando "Do" y "Does", domina las respuestas cortas (Yes, I do / No, he doesn\'t) y las partículas interrogativas.',
      fr: 'Apprenez à poser des questions au Présent Simple avec "Do" et "Does" et à donner des réponses courtes.',
      de: 'Lernen Sie Fragen im Present Simple mit "Do" und "Does" zu bilden und Kurzantworten zu geben.',
      pt: 'Aprenda a fazer perguntas no Presente Simples com "Do" e "Does" e a dar respostas curtas.',
      zh: '学习使用助动词 Do/Does 构成一般现在时的一般疑问句、特殊疑问句（WH-）以及标准简短回答。',
      ar: 'تعلم صياغة الأسئلة المباشرة والمفتوحة في زمن المضارع البسيط باستخدام Do و Does والإجابات القصيرة.',
      ja: 'Do/Doesを用いた現在形の疑問文（Yes/No疑問文・WH疑問文）の語順と、簡潔な答え方（Yes, I do / No, he doesn\'t）を学びます。',
      ru: 'Научитесь задавать общие и специальные вопросы в Present Simple с помощью Do и Does, а также давать краткие ответы.'
    },
    canDoStatements: [
      'Form Yes/No questions with "Do you...?" and "Does he/she...?"',
      'Give natural short answers: "Yes, I do." / "No, I don\'t." / "Yes, she does." / "No, she doesn\'t."',
      'Form WH- questions using: what, where, when, what time, why, how often, who',
      'Maintain base verb form following Do/Does in question syntax',
      'Ask and answer routine interview questions in social and workplace contexts'
    ],
    canDoByLang: {
      hi: [
        '"Do you...?" और "Does he/she...?" से प्रश्न पूछना',
        'संक्षिप्त उत्तर देना: "Yes, I do." / "No, she doesn\'t."',
        'WH- शब्दों (where, what time, how often) से प्रश्न बनाना'
      ],
      es: [
        'Formar preguntas de Sí/No con Do y Does',
        'Dar respuestas cortas precisas (Yes, I do / No, he doesn\'t)',
        'Formar preguntas abiertas con palabras interrogativas WH-'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (20 items)
  vocabulary: [
    {
      id: 'v_q_what',
      word: 'what',
      phonetic: '/wɑːt/',
      meaning: 'Asking for information about things, actions, or names',
      translationsByLang: { hi: 'क्या', es: 'qué', fr: 'que / quoi', de: 'was', pt: 'o que', zh: '什么', ar: 'ماذا / ما', ja: '何', ru: 'что / какой' },
      exampleSentence: 'What do you eat for breakfast?',
      exampleTranslationByLang: { hi: 'आप नाश्ते में क्या खाते हैं?', es: '¿Qué comes para desayunar?' },
      audioText: 'what',
      audioId: 'en_a1_u01_l12_v_what',
      slowAudioId: 'en_a1_u01_l12_v_what_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '❓',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_q_where',
      word: 'where',
      phonetic: '/wer/',
      meaning: 'Asking for location, position, or origin',
      translationsByLang: { hi: 'कहाँ', es: 'dónde', fr: 'où', de: 'wo / wohin', pt: 'onde', zh: '哪里 / 哪儿', ar: 'أين', ja: 'どこ', ru: 'где / куда' },
      exampleSentence: 'Where do you work?',
      exampleTranslationByLang: { hi: 'आप कहाँ काम करते हैं?', es: '¿Dónde trabajas?' },
      audioText: 'where',
      audioId: 'en_a1_u01_l12_v_where',
      slowAudioId: 'en_a1_u01_l12_v_where_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📍',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_q_when',
      word: 'when',
      phonetic: '/wen/',
      meaning: 'Asking for time or occasion',
      translationsByLang: { hi: 'कब', es: 'cuándo', fr: 'quand', de: 'wann', pt: 'quando', zh: '什么时候', ar: 'متى', ja: 'いつ', ru: 'когда' },
      exampleSentence: 'When do you start work?',
      exampleTranslationByLang: { hi: 'आप काम कब शुरू करते हैं?', es: '¿Cuándo empiezas a trabajar?' },
      audioText: 'when',
      audioId: 'en_a1_u01_l12_v_when',
      slowAudioId: 'en_a1_u01_l12_v_when_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📅',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_q_what_time',
      word: 'what time',
      phonetic: '/wɑːt taɪm/',
      meaning: 'Asking for specific clock hours',
      translationsByLang: { hi: 'किस समय / कितने बजे', es: 'a qué hora', fr: 'à quelle heure', de: 'um wie viel Uhr', pt: 'a que horas', zh: '几点', ar: 'في أي وقت', ja: '何時に', ru: 'во сколько / в какое время' },
      exampleSentence: 'What time do you wake up?',
      exampleTranslationByLang: { hi: 'आप कितने बजे जागते हैं?', es: '¿A qué hora te despiertas?' },
      audioText: 'what time',
      audioId: 'en_a1_u01_l12_v_what_time',
      slowAudioId: 'en_a1_u01_l12_v_what_time_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⏰',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_q_why',
      word: 'why',
      phonetic: '/waɪ/',
      meaning: 'Asking for reason or explanation',
      translationsByLang: { hi: 'क्यों', es: 'por qué', fr: 'pourquoi', de: 'warum', pt: 'por que', zh: '为什么', ar: 'لماذا', ja: 'なぜ / どうして', ru: 'почему / зачем' },
      exampleSentence: 'Why do you study English?',
      exampleTranslationByLang: { hi: 'आप अंग्रेजी क्यों पढ़ते हैं?', es: '¿Por qué estudias inglés?' },
      audioText: 'why',
      audioId: 'en_a1_u01_l12_v_why',
      slowAudioId: 'en_a1_u01_l12_v_why_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💡',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_q_how_often',
      word: 'how often',
      phonetic: '/haʊ ˈɑːf.ən/',
      meaning: 'Asking for frequency of an action',
      translationsByLang: { hi: 'कितनी बार', es: 'con qué frecuencia', fr: 'à quelle fréquence', de: 'wie oft', pt: 'com que frequência', zh: '多常 / 频率', ar: 'كم مرة', ja: 'どのくらいの頻度で', ru: 'как часто' },
      exampleSentence: 'How often do you go swimming?',
      exampleTranslationByLang: { hi: 'आप कितनी बार तैराकी करने जाते हैं?', es: '¿Con qué frecuencia vas a nadar?' },
      audioText: 'how often',
      audioId: 'en_a1_u01_l12_v_how_often',
      slowAudioId: 'en_a1_u01_l12_v_how_often_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔄',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_q_who',
      word: 'who',
      phonetic: '/huː/',
      meaning: 'Asking for the identity of a person',
      translationsByLang: { hi: 'कौन', es: 'quién', fr: 'qui', de: 'wer / wen', pt: 'quem', zh: '谁', ar: 'من', ja: '誰', ru: 'кто / кого' },
      exampleSentence: 'Who do you live with?',
      exampleTranslationByLang: { hi: 'आप किसके साथ रहते हैं?', es: '¿Con quién vives?' },
      audioText: 'who',
      audioId: 'en_a1_u01_l12_v_who',
      slowAudioId: 'en_a1_u01_l12_v_who_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👤',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_q_which',
      word: 'which',
      phonetic: '/wɪtʃ/',
      meaning: 'Asking about choices among specific alternatives',
      translationsByLang: { hi: 'कौन सा / कौन सी', es: 'cuál / qué', fr: 'lequel / quel', de: 'welcher / welche', pt: 'qual', zh: '哪一个', ar: 'أي', ja: 'どの / どちらの', ru: 'какой / который' },
      exampleSentence: 'Which bus do you take?',
      exampleTranslationByLang: { hi: 'आप कौन सी बस लेते हैं?', es: '¿Qué autobús tomas?' },
      audioText: 'which',
      audioId: 'en_a1_u01_l12_v_which',
      slowAudioId: 'en_a1_u01_l12_v_which_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔀',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_q_how_many',
      word: 'how many',
      phonetic: '/haʊ ˈmen.i/',
      meaning: 'Asking for countable quantities',
      translationsByLang: { hi: 'कितने / कितनी संख्या', es: 'cuántos / cuántas', fr: 'combien de', de: 'wie viele', pt: 'quantos / quantas', zh: '多少（可数）', ar: 'كم عدد', ja: 'いくつの / 何人の', ru: 'сколько (исчисляемое)' },
      exampleSentence: 'How many languages do you speak?',
      exampleTranslationByLang: { hi: 'आप कितनी भाषाएं बोलते हैं?', es: '¿Cuántos idiomas hablas?' },
      audioText: 'how many',
      audioId: 'en_a1_u01_l12_v_how_many',
      slowAudioId: 'en_a1_u01_l12_v_how_many_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔢',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_q_do_you',
      word: 'do you',
      phonetic: '/duː juː/',
      meaning: 'Question formula for 2nd person (singular or plural)',
      translationsByLang: { hi: 'क्या आप / क्या तुम', es: '¿tú...? / ¿usted...?', fr: 'est-ce que vous...', de: 'machst du... / tust du...', pt: 'você...?', zh: '你……吗？', ar: 'هل أنت...؟', ja: 'あなたは〜しますか？', ru: 'ты... / вы...?' },
      exampleSentence: 'Do you live in this city?',
      exampleTranslationByLang: { hi: 'क्या आप इस शहर में रहते हैं?', es: '¿Vives en esta ciudad?' },
      audioText: 'do you',
      audioId: 'en_a1_u01_l12_v_do_you',
      slowAudioId: 'en_a1_u01_l12_v_do_you_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '❓',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_q_does_he',
      word: 'does he',
      phonetic: '/dʌz hiː/',
      meaning: 'Question formula for 3rd person male singular',
      translationsByLang: { hi: 'क्या वह (पुरुष)', es: '¿él...?', fr: 'est-ce qu\'il...', de: 'macht er...', pt: 'ele...?', zh: '他……吗？', ar: 'هل هو...؟', ja: '彼は〜しますか？', ru: 'он...?' },
      exampleSentence: 'Does he speak English?',
      exampleTranslationByLang: { hi: 'क्या वह अंग्रेजी बोलता है?', es: '¿Habla él inglés?' },
      audioText: 'does he',
      audioId: 'en_a1_u01_l12_v_does_he',
      slowAudioId: 'en_a1_u01_l12_v_does_he_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '❓',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_q_does_she',
      word: 'does she',
      phonetic: '/dʌz ʃiː/',
      meaning: 'Question formula for 3rd person female singular',
      translationsByLang: { hi: 'क्या वह (महिला)', es: '¿ella...?', fr: 'est-ce qu\'elle...', de: 'macht sie...', pt: 'ela...?', zh: '她……吗？', ar: 'هل هي...؟', ja: '彼女は〜しますか？', ru: 'она...?' },
      exampleSentence: 'Does she work at the hospital?',
      exampleTranslationByLang: { hi: 'क्या वह अस्पताल में काम करती है?', es: '¿Trabaja ella en el hospital?' },
      audioText: 'does she',
      audioId: 'en_a1_u01_l12_v_does_she',
      slowAudioId: 'en_a1_u01_l12_v_does_she_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '❓',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_q_do_they',
      word: 'do they',
      phonetic: '/duː ðeɪ/',
      meaning: 'Question formula for 3rd person plural',
      translationsByLang: { hi: 'क्या वे / क्या वे लोग', es: '¿ellos/ellas...?', fr: 'est-ce qu\'ils...', de: 'machen sie...', pt: 'eles/elas...?', zh: '他们……吗？', ar: 'هل هم...؟', ja: '彼らは〜しますか？', ru: 'они...?' },
      exampleSentence: 'Do they have lunch together?',
      exampleTranslationByLang: { hi: 'क्या वे साथ में लंच करते हैं?', es: '¿Almuerzan juntos?' },
      audioText: 'do they',
      audioId: 'en_a1_u01_l12_v_do_they',
      slowAudioId: 'en_a1_u01_l12_v_do_they_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '❓',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_ans_yes_i_do',
      word: 'Yes, I do.',
      phonetic: '/jes aɪ duː/',
      meaning: 'Affirmative short answer for 1st person singular',
      translationsByLang: { hi: 'हाँ, मैं करता हूँ।', es: 'Sí (lo hago).', fr: 'Oui.', de: 'Ja, das tue ich.', pt: 'Sim (eu faço).', zh: '是的，我是/我做。', ar: 'نعم، أفعل.', ja: 'はい、そうです。', ru: 'Да.' },
      exampleSentence: '"Do you drink coffee?" — "Yes, I do."',
      exampleTranslationByLang: { hi: '"क्या आप कॉफी पीते हैं?" — "हाँ, मैं पीता हूँ।"', es: '"¿Tomas café?" — "Sí."' },
      audioText: 'Yes, I do.',
      audioId: 'en_a1_u01_l12_v_yes_i_do',
      slowAudioId: 'en_a1_u01_l12_v_yes_i_do_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '✅',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_ans_no_i_dont',
      word: 'No, I don\'t.',
      phonetic: '/noʊ aɪ doʊnt/',
      meaning: 'Negative short answer for 1st person singular',
      translationsByLang: { hi: 'नहीं, मैं नहीं करता।', es: 'No (no lo hago).', fr: 'Non.', de: 'Nein, das tue ich nicht.', pt: 'Não (eu não faço).', zh: '不，我不做。', ar: 'لا، لا أفعل.', ja: 'いいえ、しません。', ru: 'Нет.' },
      exampleSentence: '"Do you smoke?" — "No, I don\'t."',
      exampleTranslationByLang: { hi: '"क्या आप धूम्रपान करते हैं?" — "नहीं, मैं नहीं करता।"', es: '"¿Fumas?" — "No."' },
      audioText: 'No, I don\'t.',
      audioId: 'en_a1_u01_l12_v_no_i_dont',
      slowAudioId: 'en_a1_u01_l12_v_no_i_dont_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '❌',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_ans_yes_he_does',
      word: 'Yes, he does.',
      phonetic: '/jes hiː dʌz/',
      meaning: 'Affirmative short answer for 3rd person singular male',
      translationsByLang: { hi: 'हाँ, वह करता है।', es: 'Sí (él lo hace).', fr: 'Oui, il le fait.', de: 'Ja, das tut er.', pt: 'Sim (ele faz).', zh: '是的，他做。', ar: 'نعم، يفعل.', ja: 'はい、彼はします。', ru: 'Да, он делает.' },
      exampleSentence: '"Does he drive?" — "Yes, he does."',
      exampleTranslationByLang: { hi: '"क्या वह गाड़ी चलाता है?" — "हाँ, वह चलाता है।"', es: '"¿Conduce él?" — "Sí."' },
      audioText: 'Yes, he does.',
      audioId: 'en_a1_u01_l12_v_yes_he_does',
      slowAudioId: 'en_a1_u01_l12_v_yes_he_does_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '✅',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_ans_no_she_doesnt',
      word: 'No, she doesn\'t.',
      phonetic: '/noʊ ʃiː ˈdʌz.ənt/',
      meaning: 'Negative short answer for 3rd person singular female',
      translationsByLang: { hi: 'नहीं, वह नहीं करती।', es: 'No (ella no lo hace).', fr: 'Non, elle ne le fait pas.', de: 'Nein, das tut sie nicht.', pt: 'Não (ela não faz).', zh: '不，她不做。', ar: 'لا، لا تفعل.', ja: 'いいえ、彼女はしません。', ru: 'Нет, она не делает.' },
      exampleSentence: '"Does she eat meat?" — "No, she doesn\'t."',
      exampleTranslationByLang: { hi: '"क्या वह मांस खाती है?" — "नहीं, वह नहीं खाती।"', es: '"¿Come carne?" — "No."' },
      audioText: 'No, she doesn\'t.',
      audioId: 'en_a1_u01_l12_v_no_she_doesnt',
      slowAudioId: 'en_a1_u01_l12_v_no_she_doesnt_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '❌',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_q_how',
      word: 'how',
      phonetic: '/haʊ/',
      meaning: 'Asking for manner, method, condition, or transport',
      translationsByLang: { hi: 'कैसे / किस प्रकार', es: 'cómo', fr: 'comment', de: 'wie', pt: 'como', zh: '如何 / 怎样', ar: 'كيف', ja: 'どのように', ru: 'как' },
      exampleSentence: 'How do you go to university?',
      exampleTranslationByLang: { hi: 'आप यूनिवर्सिटी कैसे जाते हैं?', es: '¿Cómo vas a la universidad?' },
      audioText: 'how',
      audioId: 'en_a1_u01_l12_v_how',
      slowAudioId: 'en_a1_u01_l12_v_how_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '❓',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_q_question',
      word: 'question',
      phonetic: '/ˈkwes.tʃən/',
      meaning: 'A sentence worded to elicit information',
      translationsByLang: { hi: 'प्रश्न / सवाल', es: 'pregunta', fr: 'question', de: 'Frage', pt: 'pergunta', zh: '问题', ar: 'سؤال', ja: '質問', ru: 'вопрос' },
      exampleSentence: 'Can I ask you a personal question?',
      exampleTranslationByLang: { hi: 'क्या मैं आपसे एक व्यक्तिगत सवाल पूछ सकता हूँ?', es: '¿Puedo hacerte una pregunta personal?' },
      audioText: 'question',
      audioId: 'en_a1_u01_l12_v_question',
      slowAudioId: 'en_a1_u01_l12_v_question_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '❓',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_q_answer',
      word: 'answer',
      phonetic: '/ˈæn.sɚ/',
      meaning: 'A response or reply to a question',
      translationsByLang: { hi: 'उत्तर / जवाब', es: 'respuesta', fr: 'réponse', de: 'Antwort', pt: 'resposta', zh: '答案 / 回答', ar: 'إجابة / جواب', ja: '答え / 返答', ru: 'ответ' },
      exampleSentence: 'Her answer is completely correct.',
      exampleTranslationByLang: { hi: 'उसका जवाब पूरी तरह सही है।', es: 'Su respuesta es completamente correcta.' },
      audioText: 'answer',
      audioId: 'en_a1_u01_l12_v_answer',
      slowAudioId: 'en_a1_u01_l12_v_answer_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💬',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks
  expressions: [
    {
      id: 'chunk_do_you_speak_eng',
      text: 'Do you speak English?',
      meaning: 'Essential question asking about English communication ability',
      translationsByLang: {
        hi: 'क्या आप अंग्रेजी बोलते हैं?',
        es: '¿Hablas inglés?',
        fr: 'Parlez-vous anglais ?',
        de: 'Sprechen Sie Englisch?'
      },
      audioText: 'Do you speak English?',
      audioId: 'en_a1_u01_l12_c_speak_english',
      context: 'Universal travel and greeting question',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_where_do_you_live',
      text: 'Where do you live?',
      meaning: 'Asking someone for their residence city or neighborhood',
      translationsByLang: {
        hi: 'आप कहाँ रहते हैं?',
        es: '¿Dónde vives?',
        fr: 'Où habitez-vous ?',
        de: 'Wo wohnst du?'
      },
      audioText: 'Where do you live?',
      audioId: 'en_a1_u01_l12_c_where_live',
      context: 'Meeting new people and social introductions',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_what_time_finish',
      text: 'What time do you finish work?',
      meaning: 'Asking someone when their workday ends',
      translationsByLang: {
        hi: 'आप कितने बजे काम समाप्त करते हैं?',
        es: '¿A qué hora terminas de trabajar?',
        fr: 'À quelle heure finissez-vous le travail ?',
        de: 'Um wie viel Uhr machst du Feierabend?'
      },
      audioText: 'What time do you finish work?',
      audioId: 'en_a1_u01_l12_c_finish_work',
      context: 'Planning after-work meetings and social plans',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 5 & 6: Grammar
  grammar: {
    patterns: [
      {
        id: 'g_present_simple_yes_no_questions',
        title: 'Present Simple Yes/No Questions & Short Answers',
        rule: 'Start with Do (I, you, we, they) or Does (he, she, it), followed by the subject and the BASE FORM of the verb. In short answers, repeat Do/Does/Don\'t/Doesn\'t (never the main verb).',
        formula: '[Do / Does] + [Subject] + [Base Verb]...? -> Yes, [Subject] do/does. | No, [Subject] don\'t/doesn\'t.',
        examples: [
          { sentence: 'Do you work here? — Yes, I do.', translation: 'क्या आप यहाँ काम करते हैं? — हाँ, करता हूँ। / ¿Trabajas aquí? — Sí.', audioText: 'Do you work here? Yes, I do.', audioId: 'en_a1_u01_l12_g_ex1' },
          { sentence: 'Does she speak Spanish? — No, she doesn\'t.', translation: 'क्या वह स्पेनिश बोलती है? — नहीं, नहीं बोलती। / ¿Habla español? — No.', audioText: 'Does she speak Spanish? No, she doesn\'t.', audioId: 'en_a1_u01_l12_g_ex2' }
        ],
        explanationByLang: {
          hi: 'Yes/No प्रश्नों में शुरुआत Do या Does से होती है, फिर कर्ता और क्रिया का मूल रूप। संक्षिप्त उत्तर में केवल "Yes, I do" या "No, she doesn\'t" कहा जाता है, मुख्य क्रिया नहीं दोहराई जाती।',
          es: 'Las preguntas de Sí/No empiezan con Do/Does + sujeto + verbo base. En respuestas cortas usa Do/Does: "Yes, I do", nunca "*Yes, I work*".'
        }
      },
      {
        id: 'g_wh_questions_present_simple',
        title: 'WH- Information Questions (What, Where, When, Why, How)',
        rule: 'Place the WH- question word at the beginning, followed by Do/Does, the subject, and the BASE verb.',
        formula: '[WH- Word] + [do / does] + [Subject] + [Base Verb]...?',
        examples: [
          { sentence: 'Where does your brother live?', translation: 'आपका भाई कहाँ रहता है? / ¿Dónde vive tu hermano?', audioText: 'Where does your brother live?', audioId: 'en_a1_u01_l12_g_ex3' },
          { sentence: 'What time do you have lunch?', translation: 'आप कितने बजे लंच करते हैं? / ¿A qué hora almorzáis?', audioText: 'What time do you have lunch?', audioId: 'en_a1_u01_l12_g_ex4' }
        ],
        explanationByLang: {
          hi: 'WH- प्रश्नों का क्रम: WH- शब्द + Do/Does + कर्ता + क्रिया का मूल रूप (उदा. "Where do you live?").',
          es: 'Estructura de preguntas WH-: Palabra interrogativa + do/does + sujeto + verbo en infinitivo/base.'
        }
      }
    ]
  },

  // SECTION 7: Common Mistakes
  commonMistakes: [
    {
      id: 'cm_l12_short_ans_verb',
      incorrect: 'Do you live in Madrid? — Yes, I live.',
      correct: 'Do you live in Madrid? — Yes, I do.',
      whyExplanation: 'In English short answers, use the auxiliary verb "do/does", not the main verb.',
      explanationsByLang: {
        hi: 'संक्षिप्त उत्तर में "Yes, I do" कहें, "Yes, I live" गलत है।',
        es: 'En respuestas cortas usa "Yes, I do", nunca repitas el verbo principal ("*Yes, I live*").',
        fr: 'Dites "Yes, I do", et non "*Yes, I live*".',
        de: 'Sagen Sie "Yes, I do", nicht "*Yes, I live*".'
      }
    },
    {
      id: 'cm_l12_missing_auxiliary',
      incorrect: 'Where you live?',
      correct: 'Where do you live?',
      whyExplanation: 'Questions in the Present Simple REQUIRE the auxiliary verb "do" or "does".',
      explanationsByLang: {
        hi: 'प्रश्न पूछते समय "do" या "does" लगाना अनिवार्य है: "Where do you live?"।',
        es: 'Las preguntas en presente simple requieren "do" o "does": "Where do you live?".',
        fr: 'L\'auxiliaire "do" est obligatoire : "Where do you live?".',
        de: 'Das Hilfsverb "do" ist notwendig: "Where do you live?".'
      }
    }
  ],

  // SECTION 11: Dialogue
  dialogues: [
    {
      id: 'd_a1_1_12_interview_chat',
      title: 'Interviewing a New Student',
      context: 'Elena interviews Kenji during the first day of their international language exchange.',
      characters: [
        { id: 'char_elena', name: 'Elena', role: 'Interviewer' },
        { id: 'char_kenji', name: 'Kenji', role: 'Student' }
      ],
      turns: [
        {
          id: 'turn_1',
          speakerId: 'char_elena',
          speakerName: 'Elena',
          text: 'Hello! Can I ask you a few questions for our class survey?',
          translationsByLang: { hi: 'नमस्ते! क्या मैं हमारे कक्षा सर्वेक्षण के लिए आपसे कुछ सवाल पूछ सकती हूँ?', es: '¡Hola! ¿Puedo hacerte algunas preguntas para la encuesta de clase?' },
          audioText: 'Hello! Can I ask you a few questions for our class survey?',
          audioId: 'en_a1_u01_l12_d01_t1'
        },
        {
          id: 'turn_2',
          speakerId: 'char_kenji',
          speakerName: 'Kenji',
          text: 'Sure! Go ahead.',
          translationsByLang: { hi: 'बिल्कुल! पूछिए।', es: '¡Claro! Adelante.' },
          audioText: 'Sure! Go ahead.',
          audioId: 'en_a1_u01_l12_d01_t2'
        },
        {
          id: 'turn_3',
          speakerId: 'char_elena',
          speakerName: 'Elena',
          text: 'Where do you live, and how do you come to school every day?',
          translationsByLang: { hi: 'आप कहाँ रहते हैं, और आप रोज स्कूल कैसे आते हैं?', es: '¿Dónde vives y cómo vienes a la escuela todos los días?' },
          audioText: 'Where do you live, and how do you come to school every day?',
          audioId: 'en_a1_u01_l12_d01_t3'
        },
        {
          id: 'turn_4',
          speakerId: 'char_kenji',
          speakerName: 'Kenji',
          text: 'I live in Camden, and I come by bicycle. What about you?',
          translationsByLang: { hi: 'मैं कैमडेन में रहता हूँ, और साइकिल से आता हूँ। आप बताइए?', es: 'Vivo en Camden y vengo en bicicleta. ¿Y tú?' },
          audioText: 'I live in Camden, and I come by bicycle. What about you?',
          audioId: 'en_a1_u01_l12_d01_t4'
        },
        {
          id: 'turn_5',
          speakerId: 'char_elena',
          speakerName: 'Elena',
          text: 'Do you study on the weekend?',
          translationsByLang: { hi: 'क्या आप वीकेंड पर पढ़ाई करते हैं?', es: '¿Estudias los fines de semana?' },
          audioText: 'Do you study on the weekend?',
          audioId: 'en_a1_u01_l12_d01_t5'
        },
        {
          id: 'turn_6',
          speakerId: 'char_kenji',
          speakerName: 'Kenji',
          text: 'No, I don\'t! On the weekend, I relax and visit museums.',
          translationsByLang: { hi: 'नहीं, मैं नहीं करता! वीकेंड पर मैं आराम करता हूँ और संग्रहालय देखने जाता हूँ।', es: '¡No, no lo hago! Los fines de semana descanso y visito museos.' },
          audioText: 'No, I don\'t! On the weekend, I relax and visit museums.',
          audioId: 'en_a1_u01_l12_d01_t6'
        }
      ]
    }
  ],

  // SECTION 8, 9, 10, 12, 13, 14, 15, 16: Practice Exercises
  practiceExercises: [
    {
      id: 'ex_l12_p1',
      lessonId: 'lesson_a1_1_12',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Select the correct auxiliary for the question with "you":',
      sourceSentence: '___ you speak English?',
      options: [
        { id: 'o1', text: 'Do', isCorrect: true },
        { id: 'o2', text: 'Does', isCorrect: false },
        { id: 'o3', text: 'Are', isCorrect: false }
      ],
      explanation: 'With subject "you", use auxiliary "Do".'
    },
    {
      id: 'ex_l12_p2',
      lessonId: 'lesson_a1_1_12',
      stage: 8,
      type: 'fill_blank',
      prompt: 'Choose the correct auxiliary for "your sister":',
      sourceSentence: 'Where ___ your sister work?',
      options: [
        { id: 'o1', text: 'does', isCorrect: true },
        { id: 'o2', text: 'do', isCorrect: false },
        { id: 'o3', text: 'is', isCorrect: false }
      ],
      explanation: '"Your sister" is 3rd person singular (she), so use "does".'
    },
    {
      id: 'ex_l12_p3',
      lessonId: 'lesson_a1_1_12',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the question correctly:',
      targetSentence: 'What time do you start work in the morning',
      wordBank: ['What', 'time', 'do', 'you', 'start', 'work', 'in', 'the', 'morning', 'does']
    },
    {
      id: 'ex_l12_p4',
      lessonId: 'lesson_a1_1_12',
      stage: 9,
      type: 'listening',
      prompt: 'Listen to the question:',
      audioText: 'Does he live in a big house',
      options: [
        { id: 'o1', text: 'Does he live in a big house', isCorrect: true },
        { id: 'o2', text: 'Does she live in a big house', isCorrect: false },
        { id: 'o3', text: 'Do they live in a big house', isCorrect: false }
      ],
      explanation: 'The speaker asks "Does he live in a big house".'
    },
    {
      id: 'ex_l12_p5',
      lessonId: 'lesson_a1_1_12',
      stage: 9,
      type: 'listen_and_type',
      prompt: 'Listen and write the question accurately:',
      audioText: 'Where do you have lunch',
      targetSentence: 'Where do you have lunch'
    },
    {
      id: 'ex_l12_p6',
      lessonId: 'lesson_a1_1_12',
      stage: 10,
      type: 'word_ordering',
      prompt: 'Build the frequency question:',
      targetSentence: 'How often does she go to the gym',
      wordBank: ['How', 'often', 'does', 'she', 'go', 'to', 'the', 'gym', 'do', 'goes']
    },
    {
      id: 'ex_l12_p7',
      lessonId: 'lesson_a1_1_12',
      stage: 12,
      type: 'speaking',
      prompt: 'Read this question aloud with rising intonation:',
      targetSentence: 'Do you drink coffee every morning?',
      audioText: 'Do you drink coffee every morning?'
    },
    {
      id: 'ex_l12_p8',
      lessonId: 'lesson_a1_1_12',
      stage: 13,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'क्या आप सप्ताहांत पर काम करते हैं? — नहीं, मैं नहीं करता।',
      sourceTranslations: {
        hi: 'क्या आप सप्ताहांत पर काम करते हैं? — नहीं, मैं नहीं करता।',
        es: '¿Trabajas los fines de semana? — No.'
      },
      targetSentence: 'Do you work on the weekend No I don\'t',
      wordBank: ['Do', 'you', 'work', 'on', 'the', 'weekend', 'No', 'I', 'don\'t', 'does']
    },
    {
      id: 'ex_l12_p9',
      lessonId: 'lesson_a1_1_12',
      stage: 14,
      type: 'fill_blank',
      prompt: 'Interleaved Practice (Combining Lesson 7 Places & Lesson 12 Questions):',
      sourceSentence: 'How do you go to the ___ in the city center?',
      options: [
        { id: 'o1', text: 'pharmacy', isCorrect: true },
        { id: 'o2', text: 'relax', isCorrect: false },
        { id: 'o3', text: 'breakfast', isCorrect: false }
      ],
      explanation: 'Pharmacy is a city place.'
    },
    {
      id: 'ex_l12_p10',
      lessonId: 'lesson_a1_1_12',
      stage: 15,
      type: 'error_correction',
      prompt: 'Fix the word order error in the question:',
      sourceSentence: 'Where you work?',
      options: [
        { id: 'o1', text: 'Where do you work?', isCorrect: true },
        { id: 'o2', text: 'Where are you work?', isCorrect: false },
        { id: 'o3', text: 'Where you do work?', isCorrect: false }
      ],
      explanation: 'Include auxiliary "do": "Where do you work?".'
    },
    {
      id: 'ex_l12_p11',
      lessonId: 'lesson_a1_1_12',
      stage: 16,
      type: 'dialogue_completion',
      prompt: 'Choose the correct short answer:',
      sourceSentence: 'Interviewer: "Does Carlos speak French?" -> Colleague: "___"',
      options: [
        { id: 'o1', text: 'Yes, he does.', isCorrect: true },
        { id: 'o2', text: 'Yes, he speaks.', isCorrect: false },
        { id: 'o3', text: 'Yes, he is.', isCorrect: false }
      ],
      explanation: 'Use auxiliary in short answer: "Yes, he does."'
    },
    {
      id: 'ex_l12_p12',
      lessonId: 'lesson_a1_1_12',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Which question word is used to ask for reasons?',
      sourceSentence: 'Question words:',
      options: [
        { id: 'o1', text: 'Why', isCorrect: true },
        { id: 'o2', text: 'Where', isCorrect: false },
        { id: 'o3', text: 'When', isCorrect: false }
      ],
      explanation: '"Why" asks for reasons.'
    },
    {
      id: 'ex_l12_p13',
      lessonId: 'lesson_a1_1_12',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Choose the correct form of the main verb in the question:',
      sourceSentence: 'Does Sarah ___ in London?',
      options: [
        { id: 'o1', text: 'live', isCorrect: true },
        { id: 'o2', text: 'lives', isCorrect: false },
        { id: 'o3', text: 'living', isCorrect: false }
      ],
      explanation: 'After "Does", use base form "live".'
    },
    {
      id: 'ex_l12_p14',
      lessonId: 'lesson_a1_1_12',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Construct the question:',
      targetSentence: 'How many languages do they speak',
      wordBank: ['How', 'many', 'languages', 'do', 'they', 'speak', 'does', 'speaks']
    },
    {
      id: 'ex_l12_p15',
      lessonId: 'lesson_a1_1_12',
      stage: 12,
      type: 'speaking',
      prompt: 'Ask this question into your microphone:',
      targetSentence: 'What time do you usually finish work?',
      audioText: 'What time do you usually finish work?'
    }
  ],

  // SECTION 16: Review Exercises
  reviewExercises: [
    {
      id: 'ex_l12_rev1',
      lessonId: 'lesson_a1_1_12',
      stage: 16,
      type: 'multiple_choice',
      prompt: 'Which question is completely correct?',
      sourceSentence: 'Grammar review:',
      options: [
        { id: 'o1', text: 'Does your father drive a car?', isCorrect: true },
        { id: 'o2', text: 'Does your father drives a car?', isCorrect: false },
        { id: 'o3', text: 'Do your father drive a car?', isCorrect: false }
      ],
      explanation: '"your father" takes "Does" + base form "drive".'
    },
    {
      id: 'ex_l12_rev2',
      lessonId: 'lesson_a1_1_12',
      stage: 16,
      type: 'fill_blank',
      prompt: 'Fill in the correct short answer:',
      sourceSentence: '"Do they live near here?" — "No, they ___."',
      options: [
        { id: 'o1', text: 'don\'t', isCorrect: true },
        { id: 'o2', text: 'doesn\'t', isCorrect: false },
        { id: 'o3', text: 'aren\'t', isCorrect: false }
      ],
      explanation: '"they" takes "don\'t" in short negative answer.'
    },
    {
      id: 'ex_l12_rev3',
      lessonId: 'lesson_a1_1_12',
      stage: 16,
      type: 'word_ordering',
      prompt: 'Assemble the sentence correctly:',
      targetSentence: 'Who do you eat dinner with on Friday',
      wordBank: ['Who', 'do', 'you', 'eat', 'dinner', 'with', 'on', 'Friday', 'does']
    },
    {
      id: 'ex_l12_rev4',
      lessonId: 'lesson_a1_1_12',
      stage: 16,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'आप सप्ताहांत पर क्या करते हैं?',
      sourceTranslations: { hi: 'आप सप्ताहांत पर क्या करते हैं?', es: '¿Qué haces el fin de semana?' },
      targetSentence: 'What do you do on the weekend',
      wordBank: ['What', 'do', 'you', 'do', 'on', 'the', 'weekend', 'does', 'in']
    }
  ],

  // SECTION 17: Assessment Exercises (10 items)
  assessmentExercises: [
    {
      id: 'ex_l12_a1',
      lessonId: 'lesson_a1_1_12',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Choose the correct auxiliary for "your parents":',
      sourceSentence: 'Where ___ your parents live?',
      options: [
        { id: 'o1', text: 'do', isCorrect: true },
        { id: 'o2', text: 'does', isCorrect: false },
        { id: 'o3', text: 'are', isCorrect: false },
        { id: 'o4', text: 'is', isCorrect: false }
      ],
      explanation: '"your parents" = they -> "do".'
    },
    {
      id: 'ex_l12_a2',
      lessonId: 'lesson_a1_1_12',
      stage: 17,
      type: 'fill_blank',
      prompt: 'Complete the short answer:',
      sourceSentence: '"Does Mark have a bicycle?" — "Yes, he ___."',
      options: [
        { id: 'o1', text: 'does', isCorrect: true },
        { id: 'o2', text: 'has', isCorrect: false },
        { id: 'o3', text: 'is', isCorrect: false },
        { id: 'o4', text: 'do', isCorrect: false }
      ],
      explanation: 'Use auxiliary "does" in short answer.'
    },
    {
      id: 'ex_l12_a3',
      lessonId: 'lesson_a1_1_12',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Build the WH- question:',
      targetSentence: 'Why do you want to learn English',
      wordBank: ['Why', 'do', 'you', 'want', 'to', 'learn', 'English', 'does', 'learns']
    },
    {
      id: 'ex_l12_a4',
      lessonId: 'lesson_a1_1_12',
      stage: 17,
      type: 'error_correction',
      prompt: 'Correct the question verb form:',
      sourceSentence: 'Does she teaches mathematics at school?',
      options: [
        { id: 'o1', text: 'Does she teach mathematics at school?', isCorrect: true },
        { id: 'o2', text: 'Do she teach mathematics at school?', isCorrect: false },
        { id: 'o3', text: 'Does she teaching mathematics at school?', isCorrect: false }
      ],
      explanation: 'Use base form "teach" after "Does".'
    },
    {
      id: 'ex_l12_a5',
      lessonId: 'lesson_a1_1_12',
      stage: 17,
      type: 'listening',
      prompt: 'Listen and select the question:',
      audioText: 'What time does the train arrive',
      options: [
        { id: 'o1', text: 'What time does the train arrive', isCorrect: true },
        { id: 'o2', text: 'What time do the trains arrive', isCorrect: false },
        { id: 'o3', text: 'When does the train depart', isCorrect: false }
      ],
      explanation: 'The speaker asks "What time does the train arrive".'
    },
    {
      id: 'ex_l12_a6',
      lessonId: 'lesson_a1_1_12',
      stage: 17,
      type: 'listen_and_type',
      prompt: 'Listen and transcribe the question:',
      audioText: 'How do you go to work',
      targetSentence: 'How do you go to work'
    },
    {
      id: 'ex_l12_a7',
      lessonId: 'lesson_a1_1_12',
      stage: 17,
      type: 'dialogue_completion',
      prompt: 'Select the best response:',
      sourceSentence: 'Interviewer: "Do you have any questions for me?" -> Candidate: "___"',
      options: [
        { id: 'o1', text: 'Yes, what time does the team start work?', isCorrect: true },
        { id: 'o2', text: 'I am twenty-five years old.', isCorrect: false },
        { id: 'o3', text: 'It is five dollars.', isCorrect: false }
      ],
      explanation: 'Asks a natural follow-up question.'
    },
    {
      id: 'ex_l12_a8',
      lessonId: 'lesson_a1_1_12',
      stage: 17,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'आप कितनी भाषाएँ बोलते हैं?',
      sourceTranslations: { hi: 'आप कितनी भाषाएँ बोलते हैं?', es: '¿Cuántos idiomas hablas?' },
      targetSentence: 'How many languages do you speak',
      wordBank: ['How', 'many', 'languages', 'do', 'you', 'speak', 'does', 'speaks', 'are']
    },
    {
      id: 'ex_l12_a9',
      lessonId: 'lesson_a1_1_12',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Which short answer is correct for: "Do you like tea?"',
      sourceSentence: 'Short answer check:',
      options: [
        { id: 'o1', text: 'No, I don\'t.', isCorrect: true },
        { id: 'o2', text: 'No, I not.', isCorrect: false },
        { id: 'o3', text: 'No, I don\'t like.', isCorrect: false },
        { id: 'o4', text: 'No, I am not.', isCorrect: false }
      ],
      explanation: '"No, I don\'t." is the natural English short answer.'
    },
    {
      id: 'ex_l12_a10',
      lessonId: 'lesson_a1_1_12',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the final question:',
      targetSentence: 'Which bus do we take to go to the museum',
      wordBank: ['Which', 'bus', 'do', 'we', 'take', 'to', 'go', 'to', 'the', 'museum', 'does']
    }
  ]
};
