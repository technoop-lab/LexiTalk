import { DetailedLessonData } from '../../types';

export const LESSON_A1_2_28_DATA: DetailedLessonData = {
  id: 'lesson_a1_2_28',
  unitId: 'unit_a1_2',
  title: 'Past States & Whereabouts (Was / Were)',
  cefr: 'A1',
  icon: '🕰️',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Expressing Past States, Locations, Feelings and Whereabouts Using "Was" and "Were"',
    description: 'Master the past simple of the verb "to be" (was / were, wasn\'t / weren\'t), interrogative structures ("Were you at home yesterday?", "Where was he last night?"), past time adverbials (yesterday, yesterday morning, last night, last weekend, two days ago, three years ago, in 2022, when I was a child), and talking about past events, weather, feelings, and locations.',
    descriptionsByLang: {
      hi: 'क्रिया "to be" के भूतकाल (was / were, wasn\'t / weren\'t) का प्रयोग सीखें। पिछले समय के भाव (yesterday, last night, two days ago, when I was young), पूर्व स्थिति, स्थान ("Where were you yesterday?") और बीते कल की घटनाओं के बारे में बात करने का अभ्यास करें।',
      es: 'Domina el pasado simple del verbo "to be" (was / were, wasn\'t / weren\'t), preguntas ("Where were you yesterday?"), marcadores de tiempo pasado (yesterday, last week, ago, in 2020) y cómo describir ubicaciones, estados y sentimientos en el pasado.',
      fr: 'Apprenez le passé simple du verbe "to be" (was/were) et les expressions temporelles du passé.',
      de: 'Lernen Sie die Vergangenheitsformen von "to be" (was/were) und Zeitangaben für die Vergangenheit.',
      pt: 'Aprenda o passado do verbo "to be" (was/were), perguntas e marcadores temporais do passado.',
      zh: '掌握 be 动词的过去式（was / were, wasn\'t / weren\'t）、疑问句型（"Where were you yesterday?"）以及过去时间状语（yesterday, last night, ago, in 2020等），能够准确描述过去的地点、状态和感受。',
      ar: 'تعلم صيغة الماضي للفعل to be (was / were) والتعبيرات الزمنية الماضية لوصف الأماكن والحالات والمشاعر السابقة.',
      ja: 'be動詞の過去形（was / were, wasn\'t / weren\'t）と過去を表す時間表現（yesterday, last night, 〜 ago）を使って、過去の居場所、状態、感情を表現する方法を学びます。',
      ru: 'Освойте прошедшее время глагола "to be" (was / were), отрицания, вопросы и временные маркеры прошедшего времени.'
    },
    canDoStatements: [
      'Describe past locations and states using was/were: "I was at home yesterday", "They were very happy"',
      'Use negative past forms: "She wasn\'t at the meeting", "We weren\'t tired after the trip"',
      'Ask and answer questions about past whereabouts: "Where were you last night?" — "I was at the library"',
      'Use common past time markers accurately: "yesterday", "last weekend", "two years ago", "in 2021"',
      'Describe past weather and childhood memories: "It was cold and rainy yesterday", "When I was seven years old..."'
    ],
    canDoByLang: {
      hi: [
        'भूतकाल के स्थान और स्थिति बताना: "I was at home yesterday"',
        'नकारात्मक वाक्य बनाना: "She wasn\'t at the office"',
        'पूछताछ करना: "Where were you last weekend?"',
        'बीते समय के शब्दों का प्रयोग: yesterday, last night, two days ago'
      ],
      es: [
        'Describir ubicaciones y estados pasados con was/were: "I was at home"',
        'Hacer preguntas sobre el pasado: "¿Where were you last night?"',
        'Usar marcadores de tiempo pasado: yesterday, last year, two days ago'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (25 items)
  vocabulary: [
    {
      id: 'v_u02_l28_was',
      word: 'was',
      phonetic: '/wʌz/ /wɑːz/',
      meaning: 'Past tense singular form of the verb "to be" (used with I, he, she, it)',
      translationsByLang: { hi: 'था / थी (I, he, she, it के लिए)', es: 'era / estaba / fue / estuvo', fr: 'étais / était / fut', de: 'war', pt: 'era / estava / foi / esteve', zh: '是 / 在（单数过去式）', ar: 'كانَ / كُنْتُ / كَانَتْ', ja: '〜だった / 〜にいた（単数）', ru: 'был / была / было' },
      exampleSentence: 'I was at the train station yesterday at 5 PM.',
      exampleTranslationByLang: { hi: 'मैं कल शाम 5 बजे रेलवे स्टेशन पर था।', es: 'Yo estaba en la estación de tren ayer a las 5 de la tarde.' },
      audioText: 'was',
      audioId: 'en_a1_u02_l28_v_was',
      slowAudioId: 'en_a1_u02_l28_v_was_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⏮️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_were',
      word: 'were',
      phonetic: '/wɝː/',
      meaning: 'Past tense plural and second-person form of the verb "to be" (used with you, we, they)',
      translationsByLang: { hi: 'थे / थीं (you, we, they के लिए)', es: 'eras / éramos / eran / estaban', fr: 'étiez / étions / étaient', de: 'waren / warst', pt: 'eram / estávamos / estavam', zh: '是 / 在（复数及第二人称过去式）', ar: 'كانوا / كُنّا / كُنْتَ', ja: '〜だった / 〜にいた（複数・二人称）', ru: 'были / был (ты)' },
      exampleSentence: 'We were very excited about the concert last Saturday.',
      exampleTranslationByLang: { hi: 'हम पिछले शनिवार को कॉन्सर्ट को लेकर बहुत उत्साहित थे।', es: 'Estábamos muy emocionados con el concierto el sábado pasado.' },
      audioText: 'were',
      audioId: 'en_a1_u02_l28_v_were',
      slowAudioId: 'en_a1_u02_l28_v_were_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👥',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_wasnt_werent',
      word: 'wasn\'t / weren\'t',
      phonetic: '/ˈwɑː.zənt/ /ˈwɝː.ənt/',
      meaning: 'Negative contractions for "was not" and "were not"',
      translationsByLang: { hi: 'नहीं था / नहीं थे', es: 'no era / no estaba / no eran', fr: 'n\'était pas / n\'étaient pas', de: 'war nicht / waren nicht', pt: 'não era / não estava / não eram', zh: '不在 / 不是（过去否定）', ar: 'لم يكن / لم يكونوا', ja: '〜ではなかった / 〜にいなかった', ru: 'не был / не были' },
      exampleSentence: 'He wasn\'t at the meeting because he was unwell.',
      exampleTranslationByLang: { hi: 'वह बैठक में नहीं था क्योंकि उसकी तबीयत खराब थी।', es: 'Él no estuvo en la reunión porque se encontraba indispuesto.' },
      audioText: 'wasn\'t and weren\'t',
      audioId: 'en_a1_u02_l28_v_wasnt',
      slowAudioId: 'en_a1_u02_l28_v_wasnt_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '❌',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_yesterday',
      word: 'yesterday',
      phonetic: '/ˈjes.tɚ.deɪ/',
      meaning: 'On the day before today',
      translationsByLang: { hi: 'कल (बीता हुआ कल)', es: 'ayer', fr: 'hier', de: 'gestern', pt: 'ontem', zh: '昨天', ar: 'أمس / البارحة', ja: '昨日（きのう）', ru: 'вчера' },
      exampleSentence: 'Yesterday was sunny and pleasantly warm.',
      exampleTranslationByLang: { hi: 'कल धूप खिली थी और मौसम सुखद रूप से गर्म था।', es: 'Ayer estuvo soleado y agradablemente cálido.' },
      audioText: 'yesterday',
      audioId: 'en_a1_u02_l28_v_yesterday',
      slowAudioId: 'en_a1_u02_l28_v_yesterday_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📅',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_last_night',
      word: 'last night',
      phonetic: '/læst naɪt/',
      meaning: 'During the evening or night of the previous day',
      translationsByLang: { hi: 'कल रात / पिछली रात', es: 'anoche / la noche pasada', fr: 'hier soir', de: 'gestern Abend / letzte Nacht', pt: 'ontem à noite', zh: '昨晚 / 昨夜', ar: 'الليلة الماضية / البارحة', ja: '昨夜 / 昨晩', ru: 'вчера вечером / прошлой ночью' },
      exampleSentence: 'Where were you last night when I phoned you?',
      exampleTranslationByLang: { hi: 'कल रात जब मैंने तुम्हें फोन किया था तो तुम कहाँ थे?', es: '¿Dónde estabas anoche cuando te llamé?' },
      audioText: 'last night',
      audioId: 'en_a1_u02_l28_v_lastnight',
      slowAudioId: 'en_a1_u02_l28_v_lastnight_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌙',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_last_week_year',
      word: 'last week / last month / last year',
      phonetic: '/læst wiːk/ /læst jɪr/',
      meaning: 'In the calendar period immediately before the present one',
      translationsByLang: { hi: 'पिछले हफ्ते / पिछले महीने / पिछले साल', es: 'la semana pasada / el mes pasado / el año pasado', fr: 'la semaine dernière / le mois dernier / l\'année dernière', de: 'letzte Woche / letzten Monat / letztes Jahr', pt: 'semana passada / mês passado / ano passado', zh: '上周 / 上个月 / 去年', ar: 'الأسبوع الماضي / الشهر الماضي / العام الماضي', ja: '先週 / 先月 / 去年', ru: 'на прошлой неделе / в прошлом месяце / в прошлом году' },
      exampleSentence: 'Last year, my family and I were in Spain for our summer vacation.',
      exampleTranslationByLang: { hi: 'पिछले साल, मैं और मेरा परिवार अपनी गर्मियों की छुट्टियों के लिए स्पेन में थे।', es: 'El año pasado, mi familia y yo estuvimos en España de vacaciones.' },
      audioText: 'last week and last year',
      audioId: 'en_a1_u02_l28_v_lastweek',
      slowAudioId: 'en_a1_u02_l28_v_lastweek_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📆',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_ago',
      word: 'ago (two days ago / ten years ago)',
      phonetic: '/əˈɡoʊ/',
      meaning: 'Before the present time; in the past measuring backward from now',
      translationsByLang: { hi: 'पहले (दो दिन पहले / दस साल पहले)', es: 'hace (hace dos días / hace diez años)', fr: 'il y a (il y a deux jours)', de: 'vor (vor zwei Tagen / vor zehn Jahren)', pt: 'atrás / faz (dois dias atrás)', zh: '前（两天前 / 十年前）', ar: 'منذ (منذ يومين / منذ عشر سنوات)', ja: '〜前（2日前 / 10年前）', ru: 'назад (два дня назад / десять лет назад)' },
      exampleSentence: 'The package arrived three days ago.',
      exampleTranslationByLang: { hi: 'पैकेज तीन दिन पहले आ गया था।', es: 'El paquete llegó hace tres días.' },
      audioText: 'ago',
      audioId: 'en_a1_u02_l28_v_ago',
      slowAudioId: 'en_a1_u02_l28_v_ago_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⏳',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_in_past_year',
      word: 'in 2020 / in the 1990s',
      phonetic: '/ɪn/',
      meaning: 'Preposition used with specific calendar years and decades in the past',
      translationsByLang: { hi: '2020 में / 1990 के दशक में', es: 'en 2020 / en los años 90', fr: 'en 2020 / dans les années 90', de: 'im Jahr 2020 / in den 1990er Jahren', pt: 'em 2020 / nos anos 90', zh: '在2020年 / 在20世纪90年代', ar: 'في عام 2020 / في التسعينيات', ja: '2020年に / 1990年代に', ru: 'в 2020 году / в 1990-х годах' },
      exampleSentence: 'I was a university student in 2018.',
      exampleTranslationByLang: { hi: 'मैं 2018 में विश्वविद्यालय का छात्र था।', es: 'Yo era estudiante universitario en 2018.' },
      audioText: 'in 2020',
      audioId: 'en_a1_u02_l28_v_inyear',
      slowAudioId: 'en_a1_u02_l28_v_inyear_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏷️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_childhood',
      word: 'childhood / when I was a child',
      phonetic: '/ˈtʃaɪld.hʊd/',
      meaning: 'The state or period of being a child',
      translationsByLang: { hi: 'बचपन / जब मैं बच्चा था', es: 'infancia / niñez / cuando era niño', fr: 'enfance / quand j\'étais enfant', de: 'Kindheit / als ich ein Kind war', pt: 'infância / quando eu era criança', zh: '童年 / 当我还是个孩子的时候', ar: 'الطفولة / عندما كنت طفلاً', ja: '子供時代 / 子供の頃', ru: 'детство / когда я был ребенком' },
      exampleSentence: 'When I was a child, my bedroom walls were painted light blue.',
      exampleTranslationByLang: { hi: 'जब मैं बच्चा था, मेरे बेडरूम की दीवारें हल्के नीले रंग की थीं।', es: 'Cuando era niño, las paredes de mi habitación estaban pintadas de azul claro.' },
      audioText: 'childhood',
      audioId: 'en_a1_u02_l28_v_childhood',
      slowAudioId: 'en_a1_u02_l28_v_childhood_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧸',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_born_in',
      word: 'was born / were born',
      phonetic: '/wʌz bɔːrn/',
      meaning: 'Brought into life by birth in a specific place or year',
      translationsByLang: { hi: 'पैदा हुआ / जन्म हुआ था', es: 'nací / nació / nacieron', fr: 'est né(e) / suis né(e)', de: 'wurde geboren / geboren sein', pt: 'nasceu / nasci / nasceram', zh: '出生于 / 诞生', ar: 'وُلِدَ / وُلِدْتُ', ja: '生まれた', ru: 'родился / родилась / родились' },
      exampleSentence: 'She was born in Toronto, Canada in 1998.',
      exampleTranslationByLang: { hi: 'उसका जन्म 1998 में टोरंटो, कनाडा में हुआ था।', es: 'Ella nació en Toronto, Canadá en 1998.' },
      audioText: 'was born',
      audioId: 'en_a1_u02_l28_v_born',
      slowAudioId: 'en_a1_u02_l28_v_born_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👶',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_at_home_yesterday',
      word: 'at home / at work / at school',
      phonetic: '/æt hoʊm/ /æt wɝːk/',
      meaning: 'Prepositional location phrases indicating whereabouts',
      translationsByLang: { hi: 'घर पर / काम पर / स्कूल में', es: 'en casa / en el trabajo / en la escuela', fr: 'à la maison / au travail / à l\'école', de: 'zu Hause / bei der Arbeit / in der Schule', pt: 'em casa / no trabalho / na escola', zh: '在家里 / 在上班 / 在学校', ar: 'في البيت / في العمل / في المدرسة', ja: '家に / 職場に / 学校に', ru: 'дома / на работе / в школе' },
      exampleSentence: 'They were at home all afternoon watching movies.',
      exampleTranslationByLang: { hi: 'वे पूरी दोपहर घर पर फिल्में देख रहे थे।', es: 'Estuvieron en casa toda la tarde viendo películas.' },
      audioText: 'at home and at work',
      audioId: 'en_a1_u02_l28_v_athome',
      slowAudioId: 'en_a1_u02_l28_v_athome_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏠',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_crowded_busy',
      word: 'crowded / quiet',
      phonetic: '/ˈkraʊ.dɪd/ /ˈkwaɪ.ət/',
      meaning: 'Full of people / free from noise and activity',
      translationsByLang: { hi: 'भीड़भाड़ वाला / शांत', es: 'abarrotado / lleno de gente / tranquilo', fr: 'bondé / calme / silencieux', de: 'überfüllt / voll / ruhig', pt: 'lotado / cheio / silencioso', zh: '拥挤的 / 安静的', ar: 'مزدحم / هادئ', ja: '混雑した / 静かな', ru: 'переполненный / тихий' },
      exampleSentence: 'The subway station was extremely crowded during rush hour yesterday.',
      exampleTranslationByLang: { hi: 'कल व्यस्त समय के दौरान सबवे स्टेशन पर बहुत अधिक भीड़ थी।', es: 'La estación de metro estaba extremadamente abarrotada en hora punta ayer.' },
      audioText: 'crowded and quiet',
      audioId: 'en_a1_u02_l28_v_crowded',
      slowAudioId: 'en_a1_u02_l28_v_crowded_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👥',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_delicious_expensive',
      word: 'delicious / expensive',
      phonetic: '/dɪˈlɪʃ.əs/ /ɪkˈspen.sɪv/',
      meaning: 'Highly pleasant to the taste / costing a lot of money',
      translationsByLang: { hi: 'स्वादिष्ट / महंगा', es: 'delicioso / caro', fr: 'délicieux / cher', de: 'lecker / köstlich / teuer', pt: 'delicioso / gostoso / caro', zh: '美味的 / 昂贵的', ar: 'لذيذ / باهظ الثمن', ja: 'とても美味しい / 高価な', ru: 'вкусный / дорогой' },
      exampleSentence: 'The pizza was delicious, but it was quite expensive.',
      exampleTranslationByLang: { hi: 'पिज़्ज़ा स्वादिष्ट था, लेकिन काफी महंगा था।', es: 'La pizza estaba deliciosa, pero era bastante cara.' },
      audioText: 'delicious and expensive',
      audioId: 'en_a1_u02_l28_v_delicious',
      slowAudioId: 'en_a1_u02_l28_v_delicious_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍕',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_happy_sad',
      word: 'happy / sad / worried',
      phonetic: '/ˈhæp.i/ /sæd/ /ˈwɝː.id/',
      meaning: 'Emotional states in the past (pleased, unhappy, anxious)',
      translationsByLang: { hi: 'खुश / उदास / चिंतित', es: 'feliz / triste / preocupado', fr: 'heureux / triste / inquiet', de: 'glücklich / traurig / besorgt', pt: 'feliz / triste / preocupado', zh: '快乐的 / 悲伤的 / 担心的', ar: 'سعيد / حزين / قلق', ja: '幸せな / 悲しい / 心配な', ru: 'счастливый / грустный / обеспокоенный' },
      exampleSentence: 'We were worried because the flight was delayed by four hours.',
      exampleTranslationByLang: { hi: 'हम चिंतित थे क्योंकि उड़ान में चार घंटे की देरी हो गई थी।', es: 'Estábamos preocupados porque el vuelo se retrasó cuatro horas.' },
      audioText: 'happy sad worried',
      audioId: 'en_a1_u02_l28_v_emotions',
      slowAudioId: 'en_a1_u02_l28_v_emotions_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '😊',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_sunny_rainy_past',
      word: 'sunny / rainy / windy / snowy',
      phonetic: '/ˈsʌn.i/ /ˈreɪ.ni/',
      meaning: 'Past meteorological weather conditions',
      translationsByLang: { hi: 'धूपदार / बरसाती / तूफानी / बर्फीला', es: 'soleado / lluvioso / ventoso / nevado', fr: 'ensoleillé / pluvieux / venteux / neigeux', de: 'sonnig / regnerisch / windig / verschneit', pt: 'ensolarado / chuvoso / ventoso / com neve', zh: '晴朗的 / 下雨的 / 多风的 / 下雪的', ar: 'مشمس / ممطر / عاصف / مثلج', ja: '晴れの / 雨の / 風の強い / 雪の', ru: 'солнечный / дождливый / ветреный / снежный' },
      exampleSentence: 'It was rainy and foggy all weekend.',
      exampleTranslationByLang: { hi: 'पूरे सप्ताहांत बारिश और कोहरा था।', es: 'Estuvo lluvioso y con niebla todo el fin de semana.' },
      audioText: 'sunny and rainy',
      audioId: 'en_a1_u02_l28_v_weather',
      slowAudioId: 'en_a1_u02_l28_v_weather_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌦️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_late_early',
      word: 'late / on time / early',
      phonetic: '/leɪt/ /ɑːn taɪm/ /ˈɝː.li/',
      meaning: 'Punctuality descriptors in the past',
      translationsByLang: { hi: 'देर से / समय पर / जल्दी', es: 'tarde / a tiempo / temprano', fr: 'en retard / à l\'heure / en avance', de: 'zu spät / pünktlich / früh', pt: 'atrasado / na hora / adiantado', zh: '迟到 / 准时 / 提前', ar: 'متأخر / في الموعد المحدد / مبكر', ja: '遅れて / 時間通りに / 早く', ru: 'поздно (опоздал) / вовремя / рано' },
      exampleSentence: 'I was late for work yesterday because of traffic.',
      exampleTranslationByLang: { hi: 'ट्रैफिक के कारण मैं कल काम के लिए लेट हो गया था।', es: 'Llegué tarde al trabajo ayer debido al tráfico.' },
      audioText: 'late and early',
      audioId: 'en_a1_u02_l28_v_punctuality',
      slowAudioId: 'en_a1_u02_l28_v_punctuality_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⏰',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_party_event',
      word: 'party / celebration / concert',
      phonetic: '/ˈpɑːr.t̬i/ /ˌsel.əˈbreɪ.ʃən/',
      meaning: 'A social gathering of people for conversation and entertainment',
      translationsByLang: { hi: 'पार्टी / उत्सव / संगीत समारोह (कॉन्सर्ट)', es: 'fiesta / celebración / concierto', fr: 'fête / célébration / concert', de: 'Party / Feier / Konzert', pt: 'festa / comemoração / show / concerto', zh: '聚会 / 庆祝活动 / 音乐会', ar: 'حفلة / احتفال / حفلة موسيقية', ja: 'パーティー / お祝い / コンサート', ru: 'вечеринка / праздник / концерт' },
      exampleSentence: 'The birthday party was wonderful; there were thirty guests.',
      exampleTranslationByLang: { hi: 'जन्मदिन की पार्टी शानदार थी; वहाँ तीस मेहमान थे।', es: 'La fiesta de cumpleaños estuvo maravillosa; había treinta invitados.' },
      audioText: 'party and concert',
      audioId: 'en_a1_u02_l28_v_party',
      slowAudioId: 'en_a1_u02_l28_v_party_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎉',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_vacation_holiday',
      word: 'on vacation / on holiday',
      phonetic: '/ɑːn veɪˈkeɪ.ʃən/',
      meaning: 'Taking a period of leisure and recreation away from work or studies',
      translationsByLang: { hi: 'छुट्टियों पर', es: 'de vacaciones', fr: 'en vacances', de: 'im Urlaub', pt: 'de férias', zh: '在休假 / 在度假', ar: 'في عطلة / في إجازة', ja: '休暇中で / 旅行中で', ru: 'в отпуске / на каникулах' },
      exampleSentence: 'They were on vacation in Greece for two weeks.',
      exampleTranslationByLang: { hi: 'वे दो सप्ताह के लिए ग्रीस में छुट्टियों पर थे।', es: 'Estuvieron de vacaciones en Grecia durante dos semanas.' },
      audioText: 'on vacation',
      audioId: 'en_a1_u02_l28_v_vacation',
      slowAudioId: 'en_a1_u02_l28_v_vacation_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏖️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_student_past',
      word: 'a student / a child / young',
      phonetic: '/ˈstuː.dənt/ /tʃaɪld/ /jʌŋ/',
      meaning: 'Past developmental stages and life phases',
      translationsByLang: { hi: 'एक छात्र / एक बच्चा / युवा', es: 'estudiante / niño / joven', fr: 'étudiant / enfant / jeune', de: 'Student / Schüler / Kind / jung', pt: 'estudante / criança / jovem', zh: '学生 / 儿童 / 年轻的', ar: 'طالب / طفل / شاب أو صغير السن', ja: '学生 / 子供 / 若い', ru: 'студент / ребенок / молодой' },
      exampleSentence: 'When I was young, I was very shy.',
      exampleTranslationByLang: { hi: 'जब मैं छोटा था, मैं बहुत शर्मीला था।', es: 'Cuando era joven, era muy tímido.' },
      audioText: 'a student and a child',
      audioId: 'en_a1_u02_l28_v_stages',
      slowAudioId: 'en_a1_u02_l28_v_stages_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎒',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_there_was_were',
      word: 'there was / there were',
      phonetic: '/ðer wʌz/ /ðer wɝː/',
      meaning: 'Past existential statements (used for singular and plural existence)',
      translationsByLang: { hi: 'वहाँ था / वहाँ थे (अस्तित्व सूचक)', es: 'había / hubo (singular y plural)', fr: 'il y avait', de: 'es gab / es war(en)', pt: 'havia / tinha', zh: '曾经有 / 过去存在', ar: 'كان هناك / كان يوجد', ja: '〜があった / 〜がいた', ru: 'там был(о) / там были / существовал(и)' },
      exampleSentence: 'There was a huge crowd at the airport.',
      exampleTranslationByLang: { hi: 'हवाई अड्डे पर भारी भीड़ थी।', es: 'Había una gran multitud en el aeropuerto.' },
      audioText: 'there was and there were',
      audioId: 'en_a1_u02_l28_v_therewas',
      slowAudioId: 'en_a1_u02_l28_v_therewas_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📍',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_open_closed_past',
      word: 'open / closed',
      phonetic: '/ˈoʊ.pən/ /kloʊzd/',
      meaning: 'Past status of stores, banks, or facilities',
      translationsByLang: { hi: 'खुला हुआ / बंद', es: 'abierto / cerrado', fr: 'ouvert / fermé', de: 'geöffnet / geschlossen', pt: 'aberto / fechado', zh: '营业的 / 关门的', ar: 'مفتوح / مغلق', ja: '開いていた / 閉まっていた', ru: 'открыт / закрыт' },
      exampleSentence: 'The supermarket wasn\'t open yesterday because it was a public holiday.',
      exampleTranslationByLang: { hi: 'कल सुपरमार्केट नहीं खुला था क्योंकि यह सार्वजनिक अवकाश था।', es: 'El supermercado no estaba abierto ayer porque era festivo.' },
      audioText: 'open and closed',
      audioId: 'en_a1_u02_l28_v_openclosed',
      slowAudioId: 'en_a1_u02_l28_v_openclosed_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚪',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_famous_great',
      word: 'famous / interesting / great',
      phonetic: '/ˈfeɪ.məs/ /ˈɪn.trɪs.tɪŋ/ /ɡreɪt/',
      meaning: 'Descriptive past evaluations of people, places, and events',
      translationsByLang: { hi: 'प्रसिद्ध / दिलचस्प / महान या शानदार', es: 'famoso / interesante / genial', fr: 'célèbre / intéressant / formidable', de: 'berühmt / interessant / großartig', pt: 'famoso / interessante / ótimo', zh: '著名的 / 有趣的 / 极好的', ar: 'مشهور / ممتع / رائع', ja: '有名な / 興味深い / 素晴らしかった', ru: 'знаменитый / интересный / великолепный' },
      exampleSentence: 'The art museum was fascinating and very interesting.',
      exampleTranslationByLang: { hi: 'कला संग्रहालय आकर्षक और बहुत दिलचस्प था।', es: 'El museo de arte era fascinante y muy interesante.' },
      audioText: 'famous and interesting',
      audioId: 'en_a1_u02_l28_v_evaluations',
      slowAudioId: 'en_a1_u02_l28_v_evaluations_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⭐',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_ready_prepared',
      word: 'ready / prepared',
      phonetic: '/ˈred.i/ /prɪˈperd/',
      meaning: 'In a suitable state for an activity, departure, or event',
      translationsByLang: { hi: 'तैयार', es: 'listo / preparado', fr: 'prêt / préparé', de: 'bereit / fertig', pt: 'pronto / preparado', zh: '准备好的', ar: 'جاهز / مستعد', ja: '準備ができていた', ru: 'готов / подготовлен' },
      exampleSentence: 'We were ready to leave at 7:00 sharp.',
      exampleTranslationByLang: { hi: 'हम ठीक 7:00 बजे निकलने के लिए तैयार थे।', es: 'Estábamos listos para salir a las 7:00 en punto.' },
      audioText: 'ready and prepared',
      audioId: 'en_a1_u02_l28_v_ready',
      slowAudioId: 'en_a1_u02_l28_v_ready_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '✅',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_together_alone',
      word: 'together / alone',
      phonetic: '/təˈɡeð.ɚ/ /əˈloʊn/',
      meaning: 'With other people / with no other people present',
      translationsByLang: { hi: 'साथ में / अकेले', es: 'juntos / solo (a solas)', fr: 'ensemble / seul', de: 'zusammen / allein', pt: 'juntos / sozinho', zh: '在一起 / 单独一人', ar: 'معاً / بمفرده (وحيداً)', ja: '一緒に / 一人で', ru: 'вместе / один (в одиночестве)' },
      exampleSentence: 'I wasn\'t alone at the cinema; my friends were with me.',
      exampleTranslationByLang: { hi: 'मैं सिनेमा में अकेला नहीं था; मेरे दोस्त मेरे साथ थे।', es: 'No estuve solo en el cine; mis amigos estaban conmigo.' },
      audioText: 'together and alone',
      audioId: 'en_a1_u02_l28_v_together',
      slowAudioId: 'en_a1_u02_l28_v_together_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🤝',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l28_the_day_before_yesterday',
      word: 'the day before yesterday',
      phonetic: '/ðə deɪ bɪˈfɔːr ˈjes.tɚ.deɪ/',
      meaning: 'Two days ago from today',
      translationsByLang: { hi: 'परसों (बीता हुआ परसों)', es: 'anteayer / antes de ayer', fr: 'avant-hier', de: 'vorgestern', pt: 'anteontem', zh: '前天', ar: 'أول أمس / قبل البارحة', ja: '一昨日（おととい）', ru: 'позавчера' },
      exampleSentence: 'The day before yesterday was Tuesday.',
      exampleTranslationByLang: { hi: 'परसों मंगलवार था।', es: 'Anteayer fue martes.' },
      audioText: 'the day before yesterday',
      audioId: 'en_a1_u02_l28_v_daybefore',
      slowAudioId: 'en_a1_u02_l28_v_daybefore_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⏮️',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks & Expressions (10 items)
  expressions: [
    {
      id: 'exp_u02_l28_01',
      phrase: 'Where were you yesterday?',
      meaning: 'Standard inquiry about someone\'s physical location on the previous day',
      translationsByLang: {
        hi: 'कल आप कहाँ थे?',
        es: '¿Dónde estuviste ayer?',
        fr: 'Où étiez-vous hier ?',
        de: 'Wo warst du gestern?',
        pt: 'Onde você estava ontem?',
        zh: '你昨天在哪里？',
        ar: 'أين كنت بالأمس؟',
        ja: '昨日はどこにいましたか？',
        ru: 'Где вы были вчера?'
      },
      context: 'Asking friends or colleagues about absences.',
      audioId: 'en_a1_u02_l28_exp_01'
    },
    {
      id: 'exp_u02_l28_02',
      phrase: 'I was at home all day.',
      meaning: 'Reporting staying indoors at one\'s residence throughout the day',
      translationsByLang: {
        hi: 'मैं पूरे दिन घर पर ही था।',
        es: 'Estuve en casa todo el día.',
        fr: 'J\'étais à la maison toute la journée.',
        de: 'Ich war den ganzen Tag zu Hause.',
        pt: 'Fiquei em casa o dia todo.',
        zh: '我一整天都在家。',
        ar: 'كنت في المنزل طوال اليوم.',
        ja: '一日中家にいました。',
        ru: 'Я был дома весь день.'
      },
      context: 'Describing a quiet, restful day off.',
      audioId: 'en_a1_u02_l28_exp_02'
    },
    {
      id: 'exp_u02_l28_03',
      phrase: 'How was your weekend?',
      meaning: 'Ubiquitous Monday morning social conversational opener',
      translationsByLang: {
        hi: 'आपका वीकेंड (सप्ताहांत) कैसा रहा?',
        es: '¿Cómo estuvo tu fin de semana?',
        fr: 'Comment s\'est passé votre week-end ?',
        de: 'Wie war dein Wochenende?',
        pt: 'Como foi seu fim de semana?',
        zh: '你周末过得怎么样？',
        ar: 'كيف كانت عطلة نهاية الأسبوع؟',
        ja: '週末はどうでしたか？',
        ru: 'Как прошли ваши выходные?'
      },
      context: 'Monday morning workplace greetings.',
      audioId: 'en_a1_u02_l28_exp_03'
    },
    {
      id: 'exp_u02_l28_04',
      phrase: 'It was great, thanks for asking!',
      meaning: 'Polite positive response evaluating a past event or period',
      translationsByLang: {
        hi: 'बहुत बढ़िया था, पूछने के लिए धन्यवाद!',
        es: '¡Estuvo genial, gracias por preguntar!',
        fr: 'C\'était super, merci de demander !',
        de: 'Es war großartig, danke der Nachfrage!',
        pt: 'Foi ótimo, obrigado por perguntar!',
        zh: '非常好，谢谢你的关心！',
        ar: 'كان رائعاً، شكراً لسؤالك!',
        ja: '素晴らしかったです、聞いてくれてありがとう！',
        ru: 'Все было отлично, спасибо за вопрос!'
      },
      context: 'Social pleasantry response.',
      audioId: 'en_a1_u02_l28_exp_04'
    },
    {
      id: 'exp_u02_l28_05',
      phrase: 'When was the last time you were in London?',
      meaning: 'Inquiring about previous travel history to a city',
      translationsByLang: {
        hi: 'आप पिछली बार लंदन कब गए थे?',
        es: '¿Cuándo fue la última vez que estuviste en Londres?',
        fr: 'À quand remonte la dernière fois que vous êtes allé à Londres ?',
        de: 'Wann warst du das letzte Mal in London?',
        pt: 'Quando foi a última vez que você esteve em Londres?',
        zh: '你上次去伦敦是什么时候？',
        ar: 'متى كانت آخر مرة زرت فيها لندن؟',
        ja: '最後にロンドンにいたのはいつですか？',
        ru: 'Когда вы в последний раз были в Лондоне?'
      },
      context: 'Travel conversations.',
      audioId: 'en_a1_u02_l28_exp_05'
    },
    {
      id: 'exp_u02_l28_06',
      phrase: 'I was born in 1995 in São Paulo.',
      meaning: 'Standard formulation of birth date and place',
      translationsByLang: {
        hi: 'मेरा जन्म 1995 में साओ पाउलो में हुआ था।',
        es: 'Nací en 1995 en São Paulo.',
        fr: 'Je suis né en 1995 à São Paulo.',
        de: 'Ich wurde 1995 in São Paulo geboren.',
        pt: 'Eu nasci em 1995 em São Paulo.',
        zh: '我于1995年出生在圣保罗。',
        ar: 'ولدت عام 1995 في ساو باولو.',
        ja: '私は1995年にサンパウロで生まれました。',
        ru: 'Я родился в 1995 году в Сан-Паулу.'
      },
      context: 'Personal biographical introduction.',
      audioId: 'en_a1_u02_l28_exp_06'
    },
    {
      id: 'exp_u02_l28_07',
      phrase: 'Were you at the office yesterday?',
      meaning: 'Checking colleague\'s past workplace presence',
      translationsByLang: {
        hi: 'क्या आप कल कार्यालय में थे?',
        es: '¿Estuviste en la oficina ayer?',
        fr: 'Étiez-vous au bureau hier ?',
        de: 'Warst du gestern im Büro?',
        pt: 'Você estava no escritório ontem?',
        zh: '你昨天在办公室吗？',
        ar: 'هل كنت في المكتب بالأمس؟',
        ja: '昨日オフィスにいましたか？',
        ru: 'Вы были в офисе вчера?'
      },
      context: 'Colleague inquiry.',
      audioId: 'en_a1_u02_l28_exp_07'
    },
    {
      id: 'exp_u02_l28_08',
      phrase: 'No, I wasn\'t. I was working from home.',
      meaning: 'Explaining remote work status on the previous day',
      translationsByLang: {
        hi: 'नहीं, मैं नहीं था। मैं घर से काम कर रहा था।',
        es: 'No, no estuve. Estuve trabajando desde casa.',
        fr: 'Non, je n\'y étais pas. Je travaillais à domicile.',
        de: 'Nein, war ich nicht. Ich habe im Homeoffice gearbeitet.',
        pt: 'Não, eu não estava. Estava trabalhando de casa.',
        zh: '不，我不在。我当时在居家办公。',
        ar: 'لا، لم أكن هناك. كنت أعمل من المنزل.',
        ja: 'いいえ、いませんでした。在宅勤務をしていました。',
        ru: 'Нет, меня не было. Я работал из дома.'
      },
      context: 'Modern workplace communication.',
      audioId: 'en_a1_u02_l28_exp_08'
    },
    {
      id: 'exp_u02_l28_09',
      phrase: 'The weather was terrible yesterday.',
      meaning: 'Evaluating poor meteorological conditions in the past',
      translationsByLang: {
        hi: 'कल मौसम बहुत खराब था।',
        es: 'El tiempo estuvo terrible ayer.',
        fr: 'Le temps était affreux hier.',
        de: 'Das Wetter war gestern schrecklich.',
        pt: 'O tempo estava péssimo ontem.',
        zh: '昨天天气太糟糕了。',
        ar: 'كان الطقس فظيعاً بالأمس.',
        ja: '昨日は天気がひどかったです。',
        ru: 'Вчера была ужасная погода.'
      },
      context: 'Casual weather conversation.',
      audioId: 'en_a1_u02_l28_exp_09'
    },
    {
      id: 'exp_u02_l28_10',
      phrase: 'There were many people at the festival.',
      meaning: 'Reporting plural past existential presence at a public event',
      translationsByLang: {
        hi: 'त्योहार में बहुत सारे लोग थे।',
        es: 'Había mucha gente en el festival.',
        fr: 'Il y avait beaucoup de monde au festival.',
        de: 'Es waren viele Leute beim Festival.',
        pt: 'Havia muitas pessoas no festival.',
        zh: '节日庆典上有很多人。',
        ar: 'كان هناك الكثير من الناس في المهرجان.',
        ja: 'お祭りにはたくさんの人がいました。',
        ru: 'На фестивале было много людей.'
      },
      context: 'Event reporting.',
      audioId: 'en_a1_u02_l28_exp_10'
    }
  ],

  // SECTION 5: Grammar Rules (3 items)
  grammar: {
    patterns: [
    {
      id: 'g_u02_l28_01',
      title: 'Past Simple of "TO BE": WAS vs. WERE Distribution',
      explanation: 'Use WAS with singular subjects: I, He, She, It, singular nouns ("The teacher was late"). Use WERE with plural and second-person subjects: You, We, They, plural nouns ("My friends were happy"). In negatives, use WASN\'T (was not) and WEREN\'T (were not).',
      rulesByLang: {
        hi: 'एकवचन कर्ताओं (I, He, She, It, The bus) के साथ WAS का प्रयोग करें। बहुवचन और द्वितीय पुरुष कर्ताओं (You, We, They, The students) के साथ WERE का प्रयोग करें। नकारात्मक रूप: wasn\'t / weren\'t।',
        es: 'Usa WAS para I, He, She, It ("I was tired"). Usa WERE para You, We, They ("They were happy"). En negativo: wasn\'t / weren\'t.',
        fr: 'Utilisez WAS pour I/He/She/It et WERE pour You/We/They.',
        de: 'Verwende WAS für I/He/She/It und WERE für You/We/They.',
        pt: 'Use WAS para I/He/She/It e WERE para You/We/They. Negativas: wasn\'t / weren\'t.',
        zh: '单数主语（I, He, She, It, 单数名词）使用 WAS（否定 wasn\'t）；第二人称和复数主语（You, We, They, 复数名词）使用 WERE（否定 weren\'t）。',
        ar: 'استخدم was مع I, he, she, it واستخدم were مع you, we, they.',
        ja: '単数主語（I, He, She, It）には was、複数主語および you には were を用います。否定形は wasn\'t / weren\'t です。',
        ru: 'Для I, he, she, it используется WAS (отрицание wasn\'t). Для you, we, they используется WERE (отрицание weren\'t).'
      },
      examples: [
        { sentence: 'I was at the library yesterday morning.', translation: 'Estuve en la biblioteca ayer por la mañana.' },
        { sentence: 'They were in Paris three years ago.', translation: 'Ellos estuvieron en París hace tres años.' },
        { sentence: 'She wasn\'t hungry at dinner time.', translation: 'Ella no tenía hambre a la hora de cenar.' }
      ]
    },
    {
      id: 'g_u02_l28_02',
      title: 'Questions with Was / Were: Direct Inversion (No "Did")',
      explanation: 'To form questions with the past of "to be", invert WAS / WERE and the Subject: "Were you at home?" (NOT "Did you were at home?"), "Was the film good?". Wh-questions: "Where were you last night?", "Why was she upset?".',
      rulesByLang: {
        hi: 'Was/Were के प्रश्नों में WAS या WERE को कर्ता से पहले रखें: "Were you at home?"। "Did" का प्रयोग कभी न करें ("Did you were" पूरी तरह गलत है)। Wh-प्रश्न: "Where was he?"।',
        es: 'En preguntas invierte el orden: "¿Were you at home?". Nunca uses "did" con was/were ("Did you were" es incorrecto).',
        fr: 'Inversez le sujet et le verbe : "Were you at home?". N\'utilisez jamais "did".',
        de: 'Invertiere Subjekt und Verb: "Were you at home?". Kein "did" verwenden.',
        pt: 'Inverta o sujeito e o verbo: "Were you at home?". Nunca use "did" com was/were.',
        zh: 'be 动词过去式的疑问句通过直接倒装构成："Were you at home?"，绝对不能使用助动词 "Did"（如不能说 "Did you were"）。特殊疑问句："Where were you?"。',
        ar: 'في صيغة السؤال نقدم Was/Were على الفاعل ولا نستخدم did مع فعل الكينونة.',
        ja: '疑問文は was / were を主語の前に出します（"Were you at home?"）。助動詞 did は使いません。',
        ru: 'В вопросах Was/Were ставится перед подлежащим: "Were you at home?". Вспомогательный глагол "did" не используется.'
      },
      examples: [
        { sentence: 'Were you tired after the long flight?', translation: '¿Estabas cansado después del largo vuelo?' },
        { sentence: 'Where was John yesterday afternoon?', translation: '¿Dónde estaba John ayer por la tarde?' },
        { sentence: 'Was the weather good on your holiday?', translation: '¿Hizo buen tiempo en tus vacaciones?' }
      ]
    },
    {
      id: 'g_u02_l28_03',
      title: 'Past Time Expressions: Yesterday, Last, Ago, In + Year',
      explanation: 'Use "yesterday" (yesterday morning/afternoon/evening), "last" without article (last night, last week, last year — NOT "the last night"), "ago" placed AFTER the time period ("two days ago", "five years ago"), and "in" with calendar years ("in 2020").',
      rulesByLang: {
        hi: 'भूतकाल के समय सूचक: "yesterday" (कल), "last" बिना आर्टिकल के ("last night", "last year"), "ago" समय अवधि के बाद ("three days ago"), और वर्षों के साथ "in" ("in 2019")।',
        es: 'Usa "yesterday", "last" sin artículo (last night, last year), "ago" al final del periodo (two days ago), e "in" con años (in 2020).',
        fr: 'Utilisez "yesterday", "last week", "two days ago", "in 2020".',
        de: 'Verwende "yesterday", "last night", "three years ago", "in 2020".',
        pt: 'Use "yesterday", "last week", "two days ago", "in 2020".',
        zh: '过去时间表达：yesterday（昨天），last + 时间（不用冠词，如 last night, last week），时间段 + ago（如 three days ago），in + 年份（如 in 2021）。',
        ar: 'تعبيرات الماضي: yesterday، last week بدون أداة تعريف، three days ago، و in 2020.',
        ja: '過去の時間表現：yesterday（昨日）、last week（先週/theは不要）、three days ago（3日前）、in 2020（2020年に）。',
        ru: 'Временные маркеры: yesterday, last night (без артикля), two days ago (ago после периода), in 2020.'
      },
      examples: [
        { sentence: 'I was in Tokyo two months ago.', translation: 'Estuve en Tokio hace dos meses.' },
        { sentence: 'She was born in 2001.', translation: 'Ella nació en 2001.' },
        { sentence: 'Last Sunday was very relaxing.', translation: 'El domingo pasado fue muy relajante.' }
      ]
    }
    ]
  },

  // SECTION 6: Common Learner Mistakes (5 items)
  commonMistakes: [
    {
      id: 'cm_u02_l28_01',
      incorrect: 'Did you were at home yesterday?',
      correct: 'Were you at home yesterday?',
      explanation: 'Do NOT use auxiliary "did" with the past simple of "to be". Invert "were" directly with the subject.',
      explanationByLang: {
        hi: 'Was/Were के साथ "did" का प्रयोग न करें। "Were you at home?" कहें।',
        es: 'Nunca uses "did" con "were". La pregunta correcta es "¿Were you at home?".',
        fr: 'Ne dites pas "Did you were", mais "Were you at home?".',
        de: 'Sagen Sie "Were you at home?", niemals "Did you were".',
        pt: 'Diga "Were you at home?", nunca "Did you were".',
        zh: 'be 动词过去式疑问句不可加 did，应直接说 "Were you at home?"。',
        ar: 'قل Were you at home ولا تستخدم Did you were.',
        ja: '"Did you were" ではなく "Were you at home?" とします。',
        ru: 'Правильно: "Were you at home?", а не "Did you were...".'
      }
    },
    {
      id: 'cm_u02_l28_02',
      incorrect: 'We was very tired last night.',
      correct: 'We were very tired last night.',
      explanation: 'The plural subject "we" always takes "were", never "was".',
      explanationByLang: {
        hi: 'बहुवचन कर्ता "we" के साथ हमेशा "were" का प्रयोग करें। "We were tired" कहें।',
        es: '"We" siempre va con "were", nunca con "was": "We were tired".',
        fr: '"We" prend toujours "were".',
        de: '"We" verlangt "were", niemals "was".',
        pt: 'Com "we" use sempre "were": "We were tired".',
        zh: '复数主语 we 必须配合 were，不能用 was。',
        ar: 'مع الضمير We نستخدم were دائماً وليس was.',
        ja: '主語が "we" のときは必ず "were" を使います。',
        ru: 'С местоимением "we" всегда используется "were", а не "was".'
      }
    },
    {
      id: 'cm_u02_l28_03',
      incorrect: 'I was in Paris since two days.',
      correct: 'I was in Paris two days ago. / I have been in Paris for two days.',
      explanation: 'To express a completed point in past time relative to now, use "[period] ago", not "since".',
      explanationByLang: {
        hi: 'बीते समय के बिंदु के लिए "two days ago" कहें, "since two days" गलत है।',
        es: 'Para decir "hace dos días" usa "two days ago", no "since two days".',
        fr: 'Dites "two days ago" et non "since two days".',
        de: 'Sagen Sie "two days ago", nicht "since two days".',
        pt: 'Diga "two days ago", não "since two days".',
        zh: '表示“两天前”应使用 "two days ago"，不可用 "since two days"。',
        ar: 'استخدم two days ago للتعبير عن حدث وقع في الماضي.',
        ja: '「2日前」は "two days ago" と言います。',
        ru: 'Правильно: "two days ago", а не "since two days".'
      }
    },
    {
      id: 'cm_u02_l28_04',
      incorrect: 'Where you were yesterday?',
      correct: 'Where were you yesterday?',
      explanation: 'In questions, the verb "were" must precede the subject "you".',
      explanationByLang: {
        hi: 'प्रश्न में "were" कर्ता "you" से पहले आता है: "Where were you yesterday?"।',
        es: 'En preguntas el verbo va antes del sujeto: "¿Where were you yesterday?".',
        fr: 'L\'ordre des mots est "Where were you?".',
        de: 'Die Wortstellung ist "Where were you?".',
        pt: 'A ordem correta é "Where were you?".',
        zh: '疑问句中 were 必须置于主语 you 之前："Where were you yesterday?"。',
        ar: 'في السؤال نضع were قبل الفاعل you: Where were you yesterday؟',
        ja: '疑問文では were を主語の前に置きます（Where were you?）。',
        ru: 'Порядок слов в вопросе: "Where were you yesterday?".'
      }
    },
    {
      id: 'cm_u02_l28_05',
      incorrect: 'I was borned in 2000.',
      correct: 'I was born in 2000.',
      explanation: '"Born" is an irregular past participle adjective; "borned" does not exist in English.',
      explanationByLang: {
        hi: '"borned" कोई शब्द नहीं है। सही वाक्य है: "I was born in 2000"।',
        es: 'La palabra "borned" no existe. Di "I was born in 2000".',
        fr: 'Dites "I was born in 2000". "Borned" n\'existe pas.',
        de: 'Es heißt "I was born", nicht "borned".',
        pt: '"Borned" não existe. Diga "I was born in 2000".',
        zh: '英语中没有 "borned" 这个词，出生表达为 "I was born in 2000"。',
        ar: 'لا توجد كلمة borned، قل دائماً I was born.',
        ja: '"borned" という単語はありません。"I was born in 2000" が正解です。',
        ru: 'Слова "borned" нет. Правильно: "I was born in 2000".'
      }
    }
  ],

  // SECTION 7: Realistic Dialogues (3 items)
  dialogues: [
    {
      id: 'd_u02_l28_01',
      title: 'Catching Up on Monday Morning',
      context: 'Chloe and Alex meet at the coffee machine in their workplace on Monday.',
      turns: [
        {
          speaker: 'Chloe',
          text: 'Good morning Alex! How was your weekend?',
          translationByLang: {
            hi: 'सुप्रभात एलेक्स! आपका सप्ताहांत कैसा रहा?',
            es: '¡Buenos días Alex! ¿Cómo estuvo tu fin de semana?'
          },
          audioId: 'en_a1_u02_l28_d01_01'
        },
        {
          speaker: 'Alex',
          text: 'It was fantastic! My brother and I were in the mountains for a hiking trip. The weather was crisp and sunny.',
          translationByLang: {
            hi: 'यह शानदार था! मैं और मेरा भाई हाइकिंग ट्रिप के लिए पहाड़ों में थे। मौसम सुहावना और धूपदार था।',
            es: '¡Fue fantástico! Mi hermano y yo estuvimos en las montañas de excursión. El tiempo estuvo fresco y soleado.'
          },
          audioId: 'en_a1_u02_l28_d01_02'
        },
        {
          speaker: 'Chloe',
          text: 'That sounds lovely! Were there many people on the trails?',
          translationByLang: {
            hi: 'यह बहुत अच्छा लगता है! क्या रास्तों पर बहुत सारे लोग थे?',
            es: '¡Suena genial! ¿Había mucha gente en los senderos?'
          },
          audioId: 'en_a1_u02_l28_d01_03'
        },
        {
          speaker: 'Alex',
          text: 'No, it wasn\'t crowded at all. It was peaceful and quiet. How was your weekend?',
          translationByLang: {
            hi: 'नहीं, बिल्कुल भीड़ नहीं थी। यह शांतिपूर्ण और शांत था। आपका सप्ताहांत कैसा रहा?',
            es: 'No, no estaba abarrotado para nada. Era tranquilo y silencioso. ¿Qué tal tu fin de semana?'
          },
          audioId: 'en_a1_u02_l28_d01_04'
        },
        {
          speaker: 'Chloe',
          text: 'I was at home preparing for our client presentation. It was quite busy, but everything went well.',
          translationByLang: {
            hi: 'मैं हमारे क्लाइंट प्रेजेंटेशन की तैयारी के लिए घर पर ही थी। यह काफी व्यस्त था, लेकिन सब कुछ ठीक रहा।',
            es: 'Estuve en casa preparando la presentación para el cliente. Estuve bastante ocupada, pero todo salió bien.'
          },
          audioId: 'en_a1_u02_l28_d01_05'
        }
      ]
    },
    {
      id: 'd_u02_l28_02',
      title: 'Where Were You Yesterday Afternoon?',
      context: 'Manager Sandra asks Robert about his absence from the team meeting yesterday.',
      turns: [
        {
          speaker: 'Sandra',
          text: 'Hi Robert. Where were you yesterday at 3 PM? You weren\'t at the project status meeting.',
          translationByLang: {
            hi: 'नमस्ते रॉबर्ट। कल दोपहर 3 बजे आप कहाँ थे? आप प्रोजेक्ट स्थिति बैठक में नहीं थे।',
            es: 'Hola Robert. ¿Dónde estabas ayer a las 3 de la tarde? No estuviste en la reunión de seguimiento del proyecto.'
          },
          audioId: 'en_a1_u02_l28_d02_01'
        },
        {
          speaker: 'Robert',
          text: 'I am very sorry Sandra! I was at the dentist\'s clinic because I had an emergency toothache.',
          translationByLang: {
            hi: 'मुझे बहुत खेद है सैंड्रा! मैं दंत चिकित्सक के क्लिनिक में था क्योंकि मुझे दांत में अचानक तेज दर्द हुआ था।',
            es: '¡Lo siento mucho Sandra! Estaba en la clínica dental porque tuve una urgencia por dolor de muelas.'
          },
          audioId: 'en_a1_u02_l28_d02_02'
        },
        {
          speaker: 'Sandra',
          text: 'Oh, I understand! Was the dentist able to fix the problem?',
          translationByLang: {
            hi: 'ओह, मैं समझती हूँ! क्या दंत चिकित्सक समस्या को ठीक करने में सक्षम थे?',
            es: '¡Oh, lo entiendo! ¿Pudo el dentista solucionar el problema?'
          },
          audioId: 'en_a1_u02_l28_d02_03'
        },
        {
          speaker: 'Robert',
          text: 'Yes, I feel much better today. Thank you for your understanding.',
          translationByLang: {
            hi: 'हाँ, आज मैं बहुत बेहतर महसूस कर रहा हूँ। आपकी समझ के लिए धन्यवाद।',
            es: 'Sí, hoy me siento mucho mejor. Gracias por su comprensión.'
          },
          audioId: 'en_a1_u02_l28_d02_04'
        }
      ]
    },
    {
      id: 'd_u02_l28_03',
      title: 'Talking About Childhood & Hometowns',
      context: 'Sophie and Daniel discuss where they grew up and their childhood memories.',
      turns: [
        {
          speaker: 'Sophie',
          text: 'Daniel, where were you born?',
          translationByLang: {
            hi: 'डैनियल, आपका जन्म कहाँ हुआ था?',
            es: 'Daniel, ¿dónde naciste?'
          },
          audioId: 'en_a1_u02_l28_d03_01'
        },
        {
          speaker: 'Daniel',
          text: 'I was born in a small coastal town in Scotland in 1996. It was a very windy place near the sea.',
          translationByLang: {
            hi: 'मेरा जन्म 1996 में स्कॉटलैंड के एक छोटे से तटीय शहर में हुआ था। यह समुद्र के पास बहुत हवादार जगह थी।',
            es: 'Nací en un pequeño pueblo costero de Escocia en 1996. Era un lugar muy ventoso cerca del mar.'
          },
          audioId: 'en_a1_u02_l28_d03_02'
        },
        {
          speaker: 'Sophie',
          text: 'Were you happy there as a child?',
          translationByLang: {
            hi: 'क्या आप एक बच्चे के रूप में वहाँ खुश थे?',
            es: '¿Eras feliz allí de niño?'
          },
          audioId: 'en_a1_u02_l28_d03_03'
        },
        {
          speaker: 'Daniel',
          text: 'Yes, my childhood was wonderful. My primary school was right next to the beach.',
          translationByLang: {
            hi: 'हाँ, मेरा बचपन अद्भुत था। मेरा प्राथमिक विद्यालय समुद्र तट के ठीक बगल में था।',
            es: 'Sí, mi infancia fue maravillosa. Mi escuela primaria estaba justo al lado de la playa.'
          },
          audioId: 'en_a1_u02_l28_d03_04'
        }
      ]
    }
  ],

  // SECTION 8: Practice Exercises (15 items)
  practiceExercises: [
    {
      id: 'ex_u02_l28_p01',
      lessonId: 'lesson_a1_2_28',
      type: 'multiple_choice',
      prompt: 'Complete the sentence: "I _______ at home yesterday evening."',
      options: [
        { id: 'a', text: 'was', isCorrect: true },
        { id: 'b', text: 'were', isCorrect: false },
        { id: 'c', text: 'did was', isCorrect: false },
        { id: 'd', text: 'am was', isCorrect: false }
      ],
      explanation: 'Use "was" with the first-person singular pronoun "I".'
    },
    {
      id: 'ex_u02_l28_p02',
      lessonId: 'lesson_a1_2_28',
      type: 'fill_in_blank',
      prompt: 'Fill in the blank: "They _______ in London two years ago."',
      correctAnswer: 'were',
      options: [
        { id: 'opt_1', text: 'were', isCorrect: true },
        { id: 'opt_2', text: 'was', isCorrect: false },
        { id: 'opt_3', text: 'are', isCorrect: false },
        { id: 'opt_4', text: 'did', isCorrect: false }
      ],
      explanation: 'Use "were" with plural subject "They".'
    },
    {
      id: 'ex_u02_l28_p03',
      lessonId: 'lesson_a1_2_28',
      type: 'multiple_choice',
      prompt: 'Which question is grammatically correct?',
      options: [
        { id: 'a', text: 'Where were you last night?', isCorrect: true },
        { id: 'b', text: 'Where did you were last night?', isCorrect: false },
        { id: 'c', text: 'Where was you last night?', isCorrect: false },
        { id: 'd', text: 'Where you were last night?', isCorrect: false }
      ],
      explanation: '"Where were you...?" uses direct inversion without auxiliary "did".'
    },
    {
      id: 'ex_u02_l28_p04',
      lessonId: 'lesson_a1_2_28',
      type: 'reorder',
      prompt: 'Arrange the words to describe past weather:',
      words: ['The', 'weather', 'was', 'very', 'cold', 'yesterday.'],
      correctOrder: ['The', 'weather', 'was', 'very', 'cold', 'yesterday.'],
      explanation: 'Subject + was + adjective + time marker.'
    },
    {
      id: 'ex_u02_l28_p05',
      lessonId: 'lesson_a1_2_28',
      type: 'match_pairs',
      prompt: 'Match subject with the correct past form of "to be":',
      pairs: [
        { id: 'p1', left: 'He / She / It', right: 'was / wasn\'t' },
        { id: 'p2', left: 'We / They / You', right: 'were / weren\'t' },
        { id: 'p3', left: 'I', right: 'was / wasn\'t' },
        { id: 'p4', left: 'The students (plural)', right: 'were / weren\'t' }
      ]
    },
    {
      id: 'ex_u02_l28_p06',
      lessonId: 'lesson_a1_2_28',
      type: 'fill_in_blank',
      prompt: 'Complete with the negative contraction: "She _______ at the party because she was sick."',
      correctAnswer: 'wasn\'t',
      options: [
        { id: 'opt_1', text: 'wasn\'t', isCorrect: true },
        { id: 'opt_2', text: 'weren\'t', isCorrect: false },
        { id: 'opt_3', text: 'didn\'t was', isCorrect: false },
        { id: 'opt_4', text: 'not was', isCorrect: false }
      ],
      explanation: '"wasn\'t" is the negative singular past form.'
    },
    {
      id: 'ex_u02_l28_p07',
      lessonId: 'lesson_a1_2_28',
      type: 'multiple_choice',
      prompt: 'Which expression correctly indicates "two days before today"?',
      options: [
        { id: 'a', text: 'The day before yesterday', isCorrect: true },
        { id: 'b', text: 'Last yesterday', isCorrect: false },
        { id: 'c', text: 'Yesterday before', isCorrect: false },
        { id: 'd', text: 'Two days before now', isCorrect: false }
      ],
      explanation: '"The day before yesterday" means two days ago.'
    },
    {
      id: 'ex_u02_l28_p08',
      lessonId: 'lesson_a1_2_28',
      type: 'reorder',
      prompt: 'Order the words to state birth year:',
      words: ['I', 'was', 'born', 'in', '1998.'],
      correctOrder: ['I', 'was', 'born', 'in', '1998.'],
      explanation: 'I was born in [year].'
    },
    {
      id: 'ex_u02_l28_p09',
      lessonId: 'lesson_a1_2_28',
      type: 'multiple_choice',
      prompt: 'Select the correct question for: "Yes, I was tired after the long walk."',
      options: [
        { id: 'a', text: 'Were you tired after the long walk?', isCorrect: true },
        { id: 'b', text: 'Did you tired after walk?', isCorrect: false },
        { id: 'c', text: 'Was you tired after walk?', isCorrect: false },
        { id: 'd', text: 'Are you was tired?', isCorrect: false }
      ],
      explanation: '"Were you tired...?" is the correct past question with subject "you".'
    },
    {
      id: 'ex_u02_l28_p10',
      lessonId: 'lesson_a1_2_28',
      type: 'fill_in_blank',
      prompt: 'Fill in the blank: "My keys were on the kitchen table ten minutes _______."',
      correctAnswer: 'ago',
      options: [
        { id: 'opt_1', text: 'ago', isCorrect: true },
        { id: 'opt_2', text: 'since', isCorrect: false },
        { id: 'opt_3', text: 'before', isCorrect: false },
        { id: 'opt_4', text: 'last', isCorrect: false }
      ],
      explanation: '"[time period] ago" indicates time in the past relative to now.'
    },
    {
      id: 'ex_u02_l28_p11',
      lessonId: 'lesson_a1_2_28',
      type: 'match_pairs',
      prompt: 'Match the past time marker with its correct usage:',
      pairs: [
        { id: 'p1', left: 'Last night', right: 'Previous evening' },
        { id: 'p2', left: 'Three weeks ago', right: 'Three weeks in the past' },
        { id: 'p3', left: 'In 2015', right: 'Specific past calendar year' },
        { id: 'p4', left: 'When I was young', right: 'Childhood / early life phase' }
      ]
    },
    {
      id: 'ex_u02_l28_p12',
      lessonId: 'lesson_a1_2_28',
      type: 'multiple_choice',
      prompt: 'Choose the correct plural existential sentence:',
      options: [
        { id: 'a', text: 'There were fifty people at the wedding.', isCorrect: true },
        { id: 'b', text: 'There was fifty people at the wedding.', isCorrect: false },
        { id: 'c', text: 'There were a person.', isCorrect: false },
        { id: 'd', text: 'It was fifty people.', isCorrect: false }
      ],
      explanation: 'Use "There were" with plural nouns like "fifty people".'
    },
    {
      id: 'ex_u02_l28_p13',
      lessonId: 'lesson_a1_2_28',
      type: 'fill_in_blank',
      prompt: 'Complete the question: "Why _______ the museum closed yesterday?"',
      correctAnswer: 'was',
      options: [
        { id: 'opt_1', text: 'was', isCorrect: true },
        { id: 'opt_2', text: 'were', isCorrect: false },
        { id: 'opt_3', text: 'did', isCorrect: false },
        { id: 'opt_4', text: 'is', isCorrect: false }
      ],
      explanation: 'Singular subject "the museum" takes "was".'
    },
    {
      id: 'ex_u02_l28_p14',
      lessonId: 'lesson_a1_2_28',
      type: 'reorder',
      prompt: 'Arrange the sentence to describe a past vacation:',
      words: ['We', 'were', 'on', 'vacation', 'in', 'Italy', 'last', 'summer.'],
      correctOrder: ['We', 'were', 'on', 'vacation', 'in', 'Italy', 'last', 'summer.'],
      explanation: 'We were on vacation in Italy last summer.'
    },
    {
      id: 'ex_u02_l28_p15',
      lessonId: 'lesson_a1_2_28',
      type: 'multiple_choice',
      prompt: 'Which sentence has an ERROR?',
      options: [
        { id: 'a', text: 'We was at the beach yesterday.', isCorrect: true },
        { id: 'b', text: 'We were at the beach yesterday.', isCorrect: false },
        { id: 'c', text: 'She was at the beach yesterday.', isCorrect: false },
        { id: 'd', text: 'They weren\'t at the beach yesterday.', isCorrect: false }
      ],
      explanation: '"We was" is an error; it must be "We were".'
    }
  ],

  // SECTION 9: Review Exercises (5 items)
  reviewExercises: [
    {
      id: 'ex_u02_l28_r01',
      lessonId: 'lesson_a1_2_28',
      type: 'multiple_choice',
      prompt: 'Select the grammatically correct response to "How was the concert?":',
      options: [
        { id: 'a', text: 'It was incredible! The musicians were fantastic.', isCorrect: true },
        { id: 'b', text: 'It were incredible.', isCorrect: false },
        { id: 'c', text: 'Did it was great.', isCorrect: false },
        { id: 'd', text: 'It was been good.', isCorrect: false }
      ],
      explanation: '"It was incredible! The musicians were fantastic" matches singular and plural subjects accurately.'
    },
    {
      id: 'ex_u02_l28_r02',
      lessonId: 'lesson_a1_2_28',
      type: 'fill_in_blank',
      prompt: 'Fill in the blank: "My grandparents _______ born in a small village."',
      correctAnswer: 'were',
      options: [
        { id: 'opt_1', text: 'were', isCorrect: true },
        { id: 'opt_2', text: 'was', isCorrect: false },
        { id: 'opt_3', text: 'did', isCorrect: false },
        { id: 'opt_4', text: 'are', isCorrect: false }
      ],
      explanation: 'Plural subject "My grandparents" takes "were".'
    },
    {
      id: 'ex_u02_l28_r03',
      lessonId: 'lesson_a1_2_28',
      type: 'match_pairs',
      prompt: 'Match the question with the appropriate answer:',
      pairs: [
        { id: 'p1', left: 'Were you late for work?', right: 'No, I was right on time.' },
        { id: 'p2', left: 'Was the movie interesting?', right: 'Yes, it was fascinating.' },
        { id: 'p3', left: 'Where were they yesterday?', right: 'They were in the library.' },
        { id: 'p4', left: 'How was the food?', right: 'It was delicious!' }
      ]
    },
    {
      id: 'ex_u02_l28_r04',
      lessonId: 'lesson_a1_2_28',
      type: 'reorder',
      prompt: 'Order the words to describe absence:',
      words: ['He', 'wasn\'t', 'at', 'the', 'office', 'yesterday', 'morning.'],
      correctOrder: ['He', 'wasn\'t', 'at', 'the', 'office', 'yesterday', 'morning.'],
      explanation: 'He wasn\'t at the office yesterday morning.'
    },
    {
      id: 'ex_u02_l28_r05',
      lessonId: 'lesson_a1_2_28',
      type: 'multiple_choice',
      prompt: 'Which phrase is NOT correct English for time in the past?',
      options: [
        { id: 'a', text: 'The last night', isCorrect: true },
        { id: 'b', text: 'Last night', isCorrect: false },
        { id: 'c', text: 'Yesterday evening', isCorrect: false },
        { id: 'd', text: 'Two hours ago', isCorrect: false }
      ],
      explanation: 'We say "last night", never "the last night".'
    }
  ],

  // SECTION 10: Assessment Exercises (5 items)
  assessmentExercises: [
    {
      id: 'ex_u02_l28_a01',
      lessonId: 'lesson_a1_2_28',
      type: 'multiple_choice',
      prompt: 'Choose the sentence with correct verb agreement:',
      options: [
        { id: 'a', text: 'The streets were very quiet last night.', isCorrect: true },
        { id: 'b', text: 'The streets was very quiet last night.', isCorrect: false },
        { id: 'c', text: 'The street were very quiet last night.', isCorrect: false },
        { id: 'd', text: 'The streets did were quiet.', isCorrect: false }
      ],
      explanation: 'Plural subject "The streets" takes "were".'
    },
    {
      id: 'ex_u02_l28_a02',
      lessonId: 'lesson_a1_2_28',
      type: 'fill_in_blank',
      prompt: 'Complete the question: "_______ you at home when the storm started?"',
      correctAnswer: 'Were',
      options: [
        { id: 'opt_1', text: 'Were', isCorrect: true },
        { id: 'opt_2', text: 'Was', isCorrect: false },
        { id: 'opt_3', text: 'Did', isCorrect: false },
        { id: 'opt_4', text: 'Are', isCorrect: false }
      ],
      explanation: 'Subject "you" takes "Were".'
    },
    {
      id: 'ex_u02_l28_a03',
      lessonId: 'lesson_a1_2_28',
      type: 'reorder',
      prompt: 'Reorder the words to form a past Wh-question:',
      words: ['Where', 'was', 'your', 'brother', 'yesterday', 'afternoon?'],
      correctOrder: ['Where', 'was', 'your', 'brother', 'yesterday', 'afternoon?'],
      explanation: 'Where was your brother yesterday afternoon?'
    },
    {
      id: 'ex_u02_l28_a04',
      lessonId: 'lesson_a1_2_28',
      type: 'multiple_choice',
      prompt: 'What does "There was a storm yesterday" express?',
      options: [
        { id: 'a', text: 'Past existence of a singular weather event', isCorrect: true },
        { id: 'b', text: 'Future weather prediction', isCorrect: false },
        { id: 'c', text: 'An ongoing habitual storm', isCorrect: false },
        { id: 'd', text: 'A request for permission', isCorrect: false }
      ],
      explanation: '"There was" indicates past existence of a single storm.'
    },
    {
      id: 'ex_u02_l28_a05',
      lessonId: 'lesson_a1_2_28',
      type: 'match_pairs',
      prompt: 'Match pronoun to its negative past form:',
      pairs: [
        { id: 'p1', left: 'I / He / She / It', right: 'wasn\'t (was not)' },
        { id: 'p2', left: 'You / We / They', right: 'weren\'t (were not)' },
        { id: 'p3', left: 'The hotel room', right: 'wasn\'t clean' },
        { id: 'p4', left: 'The hotel rooms', right: 'weren\'t clean' }
      ]
    }
  ]
};
