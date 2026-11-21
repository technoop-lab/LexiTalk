import { DetailedLessonData } from '../../types';

export const LESSON_A1_2_29_DATA: DetailedLessonData = {
  id: 'lesson_a1_2_29',
  unitId: 'unit_a1_2',
  title: 'Past Actions & Stories (Simple Past Verbs)',
  cefr: 'A1',
  icon: '📖',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Narrating Past Events, Life Stories and Actions Using Regular (-ed) & Core Irregular Verbs',
    description: 'Master the Simple Past tense for regular verbs (-ed endings: watched, played, visited, worked, cooked, walked, studied, arrived) and essential A1 irregular verbs (go/went, have/had, see/saw, buy/bought, eat/ate, drink/drank, make/made, take/took, meet/met, write/wrote, come/came), negative sentences with "didn\'t + base verb", questions with "Did you + base verb?", and sequential story connectors (First, Then, After that, Finally).',
    descriptionsByLang: {
      hi: 'भूतकाल की घटनाओं और कहानियों का वर्णन करने के लिए Simple Past tense सीखें: नियमित क्रियाएँ (-ed: worked, visited, played, cooked) और मुख्य अनियमित क्रियाएँ (went, had, saw, bought, ate, drank, took, made, met)। "didn\'t + base verb" के साथ नकारात्मक वाक्य और "Did you + base verb?" के साथ प्रश्न बनाना तथा कालक्रम संयोजक (First, Then, After that, Finally) सीखें।',
      es: 'Domina el pasado simple para narrar acciones y anécdotas usando verbos regulares (-ed: played, visited, worked, watched) y los verbos irregulares esenciales (went, had, saw, bought, ate, drank, took, made, met). Practica la negación con "didn\'t + verbo base", preguntas con "Did you + verbo base?" y conectores de secuencia (First, Then, After that).',
      fr: 'Apprenez à raconter des événements passés avec les verbes réguliers et irréguliers au passé simple.',
      de: 'Lernen Sie vergangene Ereignisse und Geschichten mit regelmäßigen und unregelmäßigen Verben im Simple Past zu erzählen.',
      pt: 'Aprenda a narrar eventos passados com verbos regulares e irregulares no Simple Past.',
      zh: '掌握一般过去时（Simple Past）叙述过去发生的动作与经历：规则动词（-ed词尾：worked, visited, played）及核心不规则动词（went, had, saw, bought, ate, drank, made, took），使用 "didn\'t + 动词原形" 构成否定句，"Did you + 动词原形?" 提问，并运用时间叙述连接词（First, Then, After that, Finally）。',
      ar: 'تعلم سرد الأحداث والقصص الماضية باستخدام الأفعال المنتظمة وغير المنتظمة في الماضي البسيط وصيغة النفي didn\'t والسؤال بـ Did.',
      ja: '規則動詞（-ed）と主要な不規則動詞（went, had, saw, bought, ate など）を使った過去形の文、否定文（didn\'t + 原形）、疑問文（Did you + 原形?）、順序を表す接続詞を学びます。',
      ru: 'Освойте прошедшее простое время (Past Simple) для правильных (-ed) и неправильных глаголов, отрицания с "didn\'t" и вопросы с "Did".'
    },
    canDoStatements: [
      'Narrate completed past actions using regular verbs (-ed): "I worked eight hours yesterday", "She visited her grandmother"',
      'Use high-frequency irregular past verbs: "We went to the beach", "He bought a new laptop", "They had dinner at 8 PM"',
      'Form negative past statements: "I didn\'t see the email", "She didn\'t go to the supermarket"',
      'Ask and answer past questions: "Did you watch the movie?" — "Yes, I did / No, I didn\'t"',
      'Organize a simple past sequence using connectors: "First we visited the museum, then we had lunch, and finally we went home"'
    ],
    canDoByLang: {
      hi: [
        'बीते कार्यों का वर्णन: "I watched a movie", "We went to Delhi"',
        'नकारात्मक वाक्य बनाना: "I didn\'t buy the ticket"',
        'प्रश्न पूछना: "Did you study English yesterday?"',
        'कहानी सुनाना: First, Then, After that, Finally'
      ],
      es: [
        'Contar acciones pasadas con verbos regulares e irregulares: "I visited my family", "I bought a car"',
        'Hacer oraciones negativas: "I didn\'t see him"',
        'Preguntar sobre el pasado: "¿Did you go to work yesterday?"'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (25 items)
  vocabulary: [
    {
      id: 'v_u02_l29_go_went',
      word: 'go -> went',
      phonetic: '/ɡoʊ/ -> /went/',
      meaning: 'Move from one place to another (irregular past: went)',
      translationsByLang: { hi: 'जाना -> गया / गई', es: 'ir -> fui / fue / fuimos', fr: 'aller -> allé / suis allé', de: 'gehen -> ging / gegangen', pt: 'ir -> foi / fui / fomos', zh: '去 -> 去了', ar: 'يذهب -> ذهبَ', ja: '行く -> 行った', ru: 'идти / ехать -> пошел / поехал' },
      exampleSentence: 'We went to the grocery store yesterday afternoon.',
      exampleTranslationByLang: { hi: 'हम कल दोपहर किराने की दुकान पर गए थे।', es: 'Fuimos a la tienda de comestibles ayer por la tarde.' },
      audioText: 'go and went',
      audioId: 'en_a1_u02_l29_v_went',
      slowAudioId: 'en_a1_u02_l29_v_went_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚶',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_have_had',
      word: 'have -> had',
      phonetic: '/hæv/ -> /hæd/',
      meaning: 'Possess, experience, or consume (irregular past: had)',
      translationsByLang: { hi: 'होना / खाना / पीना -> था / खाया / पिया', es: 'tener / tomar -> tuve / tuvo / tuvimos', fr: 'avoir -> eu', de: 'haben -> hatte', pt: 'ter / tomar -> teve / tive', zh: '有 / 吃 / 拥有 -> 有了 / 吃了', ar: 'يملك / يتناول -> ملكَ / تناولَ', ja: '持つ / 食べる -> 持っていた / 食べた', ru: 'иметь / есть -> имел / съел' },
      exampleSentence: 'I had pancakes and coffee for breakfast this morning.',
      exampleTranslationByLang: { hi: 'मैंने आज सुबह नाश्ते में पेनकेक्स और कॉफी ली।', es: 'Tomé tortitas y café para desayunar esta mañana.' },
      audioText: 'have and had',
      audioId: 'en_a1_u02_l29_v_had',
      slowAudioId: 'en_a1_u02_l29_v_had_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥞',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_see_saw',
      word: 'see -> saw',
      phonetic: '/siː/ -> /sɑː/',
      meaning: 'Perceive with the eyes (irregular past: saw)',
      translationsByLang: { hi: 'देखना -> देखा', es: 'ver -> vi / vio / vimos', fr: 'voir -> vu / ai vu', de: 'sehen -> sah', pt: 'ver -> vi / viu / vimos', zh: '看见 -> 看见了', ar: 'يرى -> رأى', ja: '見る -> 見た', ru: 'видеть -> увидел / видел' },
      exampleSentence: 'We saw a wonderful classical movie at the cinema last Friday.',
      exampleTranslationByLang: { hi: 'हमने पिछले शुक्रवार को सिनेमा में एक शानदार क्लासिक फिल्म देखी।', es: 'Vimos una maravillosa película clásica en el cine el viernes pasado.' },
      audioText: 'see and saw',
      audioId: 'en_a1_u02_l29_v_saw',
      slowAudioId: 'en_a1_u02_l29_v_saw_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👁️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_buy_bought',
      word: 'buy -> bought',
      phonetic: '/baɪ/ -> /bɑːt/',
      meaning: 'Obtain in exchange for payment (irregular past: bought)',
      translationsByLang: { hi: 'खरीदना -> खरीदा', es: 'comprar -> compré / compró', fr: 'acheter -> acheté', de: 'kaufen -> kaufte / gekauft', pt: 'comprar -> comprei / comprou', zh: '买 -> 买了', ar: 'يشتري -> اشترى', ja: '買う -> 買った', ru: 'покупать -> купил' },
      exampleSentence: 'She bought a warm winter coat on sale.',
      exampleTranslationByLang: { hi: 'उसने सेल पर एक गर्म सर्दियों का कोट खरीदा।', es: 'Ella compró un abrigo cálido de invierno en rebajas.' },
      audioText: 'buy and bought',
      audioId: 'en_a1_u02_l29_v_bought',
      slowAudioId: 'en_a1_u02_l29_v_bought_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🛍️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_eat_ate',
      word: 'eat -> ate',
      phonetic: '/iːt/ -> /eɪt/',
      meaning: 'Put food into the mouth and swallow it (irregular past: ate)',
      translationsByLang: { hi: 'खाना -> खाया', es: 'comer -> comí / comió', fr: 'manger -> mangé', de: 'essen -> aß', pt: 'comer -> comi / comeu', zh: '吃 -> 吃了', ar: 'يأكل -> أكلَ', ja: '食べる -> 食べた', ru: 'есть -> съел / поел' },
      exampleSentence: 'They ate sushi at an authentic Japanese restaurant.',
      exampleTranslationByLang: { hi: 'उन्होंने एक प्रामाणिक जापानी रेस्तरां में सुशी खाई।', es: 'Comieron sushi en un auténtico restaurante japonés.' },
      audioText: 'eat and ate',
      audioId: 'en_a1_u02_l29_v_ate',
      slowAudioId: 'en_a1_u02_l29_v_ate_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍣',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_drink_drank',
      word: 'drink -> drank',
      phonetic: '/drɪŋk/ -> /dræŋk/',
      meaning: 'Take a liquid into the mouth and swallow (irregular past: drank)',
      translationsByLang: { hi: 'पीना -> पिया', es: 'beber / tomar -> bebí / bebió', fr: 'boire -> bu', de: 'trinken -> trank', pt: 'beber -> bebi / bebeu', zh: '喝 -> 喝了', ar: 'يشرب -> شربَ', ja: '飲む -> 飲んだ', ru: 'пить -> выпил / пил' },
      exampleSentence: 'He drank a bottle of mineral water after running.',
      exampleTranslationByLang: { hi: 'दौड़ने के बाद उसने मिनरल वाटर की एक बोतल पी।', es: 'Bebió una botella de agua mineral después de correr.' },
      audioText: 'drink and drank',
      audioId: 'en_a1_u02_l29_v_drank',
      slowAudioId: 'en_a1_u02_l29_v_drank_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥤',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_make_made',
      word: 'make -> made',
      phonetic: '/meɪk/ -> /meɪd/',
      meaning: 'Form by putting parts together or creating (irregular past: made)',
      translationsByLang: { hi: 'बनाना -> बनाया', es: 'hacer -> hice / hizo', fr: 'faire / fabriquer -> fait', de: 'machen -> machte', pt: 'fazer -> fiz / fez', zh: '制作 / 制造 -> 做了', ar: 'يصنع -> صنعَ', ja: '作る -> 作った', ru: 'делать / создавать -> сделал' },
      exampleSentence: 'My mother made a delicious chocolate birthday cake.',
      exampleTranslationByLang: { hi: 'मेरी माँ ने जन्मदिन का एक स्वादिष्ट चॉकलेट केक बनाया।', es: 'Mi madre hizo un delicioso pastel de cumpleaños de chocolate.' },
      audioText: 'make and made',
      audioId: 'en_a1_u02_l29_v_made',
      slowAudioId: 'en_a1_u02_l29_v_made_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎂',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_take_took',
      word: 'take -> took',
      phonetic: '/teɪk/ -> /tʊk/',
      meaning: 'Lay hold of; carry or travel by transport (irregular past: took)',
      translationsByLang: { hi: 'लेना / ले जाना -> लिया / ले गया', es: 'tomar / llevar -> tomé / tomó / llevó', fr: 'prendre -> pris', de: 'nehmen -> nahm', pt: 'pegar / tomar -> pegou / tomou', zh: '拿 / 乘坐 / 耗费 -> 拿了 / 坐了', ar: 'يأخذ -> أخذَ', ja: '取る / 乗る -> 取った / 乗った', ru: 'брать / занимать -> взял / поехал на' },
      exampleSentence: 'We took the high-speed train to Paris.',
      exampleTranslationByLang: { hi: 'हमने पेरिस के लिए हाई-स्पीड ट्रेन ली।', es: 'Tomamos el tren de alta velocidad a París.' },
      audioText: 'take and took',
      audioId: 'en_a1_u02_l29_v_took',
      slowAudioId: 'en_a1_u02_l29_v_took_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚄',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_meet_met',
      word: 'meet -> met',
      phonetic: '/miːt/ -> /met/',
      meaning: 'Come into the presence of someone (irregular past: met)',
      translationsByLang: { hi: 'मिलना -> मिला / मिले', es: 'conocer / encontrarse -> conocí / encontró', fr: 'rencontrer -> rencontré', de: 'treffen -> traf', pt: 'conhecer / encontrar -> conheceu / encontrou', zh: '遇见 / 结识 -> 遇见了', ar: 'يقابل / يلتقي -> قابلَ / التقى', ja: '会う / 出会う -> 会った / 出会った', ru: 'встречать(ся) -> встретил(ся)' },
      exampleSentence: 'I met my best friend ten years ago at university.',
      exampleTranslationByLang: { hi: 'मैं दस साल पहले विश्वविद्यालय में अपने सबसे अच्छे दोस्त से मिला था।', es: 'Conocí a mi mejor amigo hace diez años en la universidad.' },
      audioText: 'meet and met',
      audioId: 'en_a1_u02_l29_v_met',
      slowAudioId: 'en_a1_u02_l29_v_met_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🤝',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_write_wrote',
      word: 'write -> wrote',
      phonetic: '/raɪt/ -> /roʊt/',
      meaning: 'Mark letters or words on a surface or compose (irregular past: wrote)',
      translationsByLang: { hi: 'लिखना -> लिखा', es: 'escribir -> escribí / escribió', fr: 'écrire -> écrit', de: 'schreiben -> schrieb', pt: 'escrever -> escrevi / escreveu', zh: '写 -> 写了', ar: 'يكتب -> كتبَ', ja: '書く -> 書いた', ru: 'писать -> написал' },
      exampleSentence: 'He wrote an email to his manager explaining the project.',
      exampleTranslationByLang: { hi: 'उसने प्रोजेक्ट के बारे में बताते हुए अपने मैनेजर को एक ईमेल लिखा।', es: 'Escribió un correo a su gerente explicando el proyecto.' },
      audioText: 'write and wrote',
      audioId: 'en_a1_u02_l29_v_wrote',
      slowAudioId: 'en_a1_u02_l29_v_wrote_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '✍️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_come_came',
      word: 'come -> came',
      phonetic: '/kʌm/ -> /keɪm/',
      meaning: 'Move or travel toward or arrive at a place (irregular past: came)',
      translationsByLang: { hi: 'आना -> आया / आए', es: 'venir -> vine / vino / vinimos', fr: 'venir -> venu', de: 'kommen -> kam', pt: 'vir -> vim / veio / viemos', zh: '来 -> 来了', ar: 'يأتي -> جاءَ / أتى', ja: '来る -> 来た', ru: 'приходить / приезжать -> пришел / приехал' },
      exampleSentence: 'My cousins came to visit us last Christmas.',
      exampleTranslationByLang: { hi: 'पिछले क्रिसमस पर मेरे चचेरे भाई हमसे मिलने आए थे।', es: 'Mis primos vinieron a visitarnos la Navidad pasada.' },
      audioText: 'come and came',
      audioId: 'en_a1_u02_l29_v_came',
      slowAudioId: 'en_a1_u02_l29_v_came_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚪',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_work_worked',
      word: 'work -> worked (regular)',
      phonetic: '/wɝːkt/',
      meaning: 'Perform labor or job duties in the past',
      translationsByLang: { hi: 'काम करना -> काम किया', es: 'trabajar -> trabajé / trabajó', fr: 'travailler -> travaillé', de: 'arbeiten -> arbeitete', pt: 'trabalhar -> trabalhei / trabalhou', zh: '工作 -> 工作了', ar: 'يعمل -> عَمِلَ', ja: '働く -> 働いた', ru: 'работать -> работал' },
      exampleSentence: 'I worked until late last night to finish the report.',
      exampleTranslationByLang: { hi: 'रिपोर्ट पूरी करने के लिए मैंने कल रात देर तक काम किया।', es: 'Trabajé hasta tarde anoche para terminar el informe.' },
      audioText: 'work and worked',
      audioId: 'en_a1_u02_l29_v_worked',
      slowAudioId: 'en_a1_u02_l29_v_worked_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💼',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_visit_visited',
      word: 'visit -> visited (regular)',
      phonetic: '/ˈvɪz.ɪ.tɪd/',
      meaning: 'Go to see and spend time with someone socially or see a place',
      translationsByLang: { hi: 'भ्रमण करना / मिलना -> दौरा किया / मिले', es: 'visitar -> visité / visitó', fr: 'visiter -> visité', de: 'besuchen -> besuchte', pt: 'visitar -> visitei / visitou', zh: '拜访 / 参观 -> 参观了', ar: 'يزور -> زارَ', ja: '訪れる / 訪問する -> 訪れた', ru: 'посещать / навещать -> посетил / навестил' },
      exampleSentence: 'We visited the art gallery on Sunday morning.',
      exampleTranslationByLang: { hi: 'हमने रविवार सुबह कला दीर्घा का दौरा किया।', es: 'Visitamos la galería de arte el domingo por la mañana.' },
      audioText: 'visit and visited',
      audioId: 'en_a1_u02_l29_v_visited',
      slowAudioId: 'en_a1_u02_l29_v_visited_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏛️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_watch_watched',
      word: 'watch -> watched (regular)',
      phonetic: '/wɑːtʃt/',
      meaning: 'Look at or observe attentively over a period of time',
      translationsByLang: { hi: 'देखना -> देखा (स्क्रीन/शो)', es: 'ver / mirar -> miré / miró', fr: 'regarder -> regardé', de: 'schauen / ansehen -> schaute', pt: 'assistir -> assisti / assistiu', zh: '观看 -> 观看了', ar: 'يشاهد -> شاهدَ', ja: '観る -> 観た', ru: 'смотреть -> посмотрел / смотрел' },
      exampleSentence: 'They watched an exciting soccer match together.',
      exampleTranslationByLang: { hi: 'उन्होंने एक साथ एक रोमांचक फुटबॉल मैच देखा।', es: 'Vieron un emocionante partido de fútbol juntos.' },
      audioText: 'watch and watched',
      audioId: 'en_a1_u02_l29_v_watched',
      slowAudioId: 'en_a1_u02_l29_v_watched_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📺',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_play_played',
      word: 'play -> played (regular)',
      phonetic: '/pleɪd/',
      meaning: 'Engage in activity for enjoyment or perform music/sports',
      translationsByLang: { hi: 'खेलना -> खेला / बजाया', es: 'jugar / tocar -> jugué / jugó', fr: 'jouer -> joué', de: 'spielen -> spielte', pt: 'jogar / tocar -> joguei / jogou', zh: '玩 / 弹奏 -> 玩了 / 弹了', ar: 'يلعب / يعزف -> لَعِبَ / عَزَفَ', ja: '遊ぶ / 演奏する -> 遊んだ / 演奏した', ru: 'играть -> играл' },
      exampleSentence: 'The kids played video games all afternoon.',
      exampleTranslationByLang: { hi: 'बच्चों ने पूरी दोपहर वीडियो गेम खेले।', es: 'Los niños jugaron a los videojuegos toda la tarde.' },
      audioText: 'play and played',
      audioId: 'en_a1_u02_l29_v_played',
      slowAudioId: 'en_a1_u02_l29_v_played_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎮',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_study_studied',
      word: 'study -> studied (regular: y->ied)',
      phonetic: '/ˈstʌd.id/',
      meaning: 'Devote time and attention to acquiring knowledge',
      translationsByLang: { hi: 'अध्ययन करना -> पढ़ाई की', es: 'estudiar -> estudié / estudió', fr: 'étudier -> étudié', de: 'lernen / studieren -> lernte', pt: 'estudar -> estudei / estudou', zh: '学习 -> 学习了', ar: 'يدرس -> دَرَسَ', ja: '勉強する -> 勉強した', ru: 'учиться / изучать -> учился / изучал' },
      exampleSentence: 'She studied for her English exam for three hours.',
      exampleTranslationByLang: { hi: 'उसने अपनी अंग्रेजी परीक्षा के लिए तीन घंटे तक पढ़ाई की।', es: 'Estudió para su examen de inglés durante tres horas.' },
      audioText: 'study and studied',
      audioId: 'en_a1_u02_l29_v_studied',
      slowAudioId: 'en_a1_u02_l29_v_studied_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📚',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_arrive_arrived',
      word: 'arrive -> arrived (regular)',
      phonetic: '/əˈraɪvd/',
      meaning: 'Reach a destination at the end of a journey',
      translationsByLang: { hi: 'पहुंचना -> पहुंचा / पहुंचे', es: 'llegar -> llegué / llegó', fr: 'arriver -> arrivé', de: 'ankommen -> kam an', pt: 'chegar -> cheguei / chegou', zh: '到达 -> 到达了', ar: 'يصل -> وَصَلَ', ja: '到着する -> 到着した', ru: 'прибывать / приезжать -> прибыл / приехал' },
      exampleSentence: 'The flight arrived at the gate ten minutes early.',
      exampleTranslationByLang: { hi: 'उड़ान गेट पर दस मिनट पहले पहुंच गई।', es: 'El vuelo llegó a la puerta diez minutos antes.' },
      audioText: 'arrive and arrived',
      audioId: 'en_a1_u02_l29_v_arrived',
      slowAudioId: 'en_a1_u02_l29_v_arrived_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🛬',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_first_then_finally',
      word: 'First, Then, After that, Finally',
      phonetic: '/fɝːst/ /ðen/ /ˈæf.tɚ ðæt/ /ˈfaɪ.nəl.i/',
      meaning: 'Sequential discourse markers organizing a narrative chronological order',
      translationsByLang: { hi: 'पहले, फिर, उसके बाद, अंततः', es: 'Primero, Luego, Después de eso, Finalmente', fr: 'D\'abord, Ensuite, Après cela, Enfin', de: 'Zuerst, Dann, Danach, Schließlich', pt: 'Primeiro, Depois, Em seguida, Finalmente', zh: '首先，然后，之后，最后', ar: 'أولاً، ثم، بعد ذلك، أخيراً', ja: 'まず、それから、そのあとで、最後に', ru: 'Сначала, Затем, После этого, Наконец' },
      exampleSentence: 'First we packed our bags, then we drove to the airport, and finally we boarded.',
      exampleTranslationByLang: { hi: 'पहले हमने अपने बैग पैक किए, फिर हम हवाई अड्डे के लिए निकले, और अंत में हम सवार हुए।', es: 'Primero hicimos las maletas, luego fuimos en coche al aeropuerto y finalmente embarcamos.' },
      audioText: 'First, Then, After that, Finally',
      audioId: 'en_a1_u02_l29_v_connectors',
      slowAudioId: 'en_a1_u02_l29_v_connectors_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔢',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_did_didnt',
      word: 'Did / didn\'t (did not)',
      phonetic: '/dɪd/ /ˈdɪd.ənt/',
      meaning: 'Past auxiliary verb used to form past simple questions and negatives',
      translationsByLang: { hi: 'किया / नहीं किया (सहायक क्रिया)', es: 'auxiliar pasado / no (en pasado)', fr: 'auxiliaire passé / ne pas au passé', de: 'Hilfsverb für Vergangenheit / Verneinung', pt: 'auxiliar do passado / não (no passado)', zh: '过去式助动词 / 没有做（否定）', ar: 'فعل مساعد للماضي / لم يفعل', ja: '過去形の助動詞 / 〜しなかった', ru: 'вспомогательный глагол прошедшего времени / не делал' },
      exampleSentence: 'I didn\'t see the message because my phone was off.',
      exampleTranslationByLang: { hi: 'मैंने संदेश नहीं देखा क्योंकि मेरा फोन बंद था।', es: 'No vi el mensaje porque mi teléfono estaba apagado.' },
      audioText: 'did and didn\'t',
      audioId: 'en_a1_u02_l29_v_didnt',
      slowAudioId: 'en_a1_u02_l29_v_didnt_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '❓',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_cook_cooked',
      word: 'cook -> cooked (regular)',
      phonetic: '/kʊkt/',
      meaning: 'Prepare hot food or meals in the past',
      translationsByLang: { hi: 'पकाना -> पकाया', es: 'cocinar -> cociné / cocinó', fr: 'cuisiner -> cuisiné', de: 'kochen -> kochte', pt: 'cozinhar -> cozinhei / cozinhou', zh: '烹饪 -> 做饭了', ar: 'يطبخ -> طَبَخَ', ja: '料理する -> 料理した', ru: 'готовить еду -> приготовил' },
      exampleSentence: 'He cooked homemade vegetable soup for dinner.',
      exampleTranslationByLang: { hi: 'उसने रात के खाने के लिए घर का बना वेजीटेबल सूप पकाया।', es: 'Él cocinó sopa de verduras casera para cenar.' },
      audioText: 'cook and cooked',
      audioId: 'en_a1_u02_l29_v_cooked',
      slowAudioId: 'en_a1_u02_l29_v_cooked_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍲',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_walk_walked',
      word: 'walk -> walked (regular)',
      phonetic: '/wɑːkt/',
      meaning: 'Move on foot at a regular pace in the past',
      translationsByLang: { hi: 'चलना -> चला / पैदल गया', es: 'caminar -> caminé / caminó', fr: 'marcher -> marché', de: 'spazieren / gehen -> ging zu Fuß', pt: 'caminhar -> caminhei / caminhou', zh: '步行 -> 散步了', ar: 'يمشي -> مَشَى', ja: '歩く -> 歩いた', ru: 'гулять / идти пешком -> гулял / ходил пешком' },
      exampleSentence: 'We walked five miles along the river bank.',
      exampleTranslationByLang: { hi: 'हम नदी के किनारे पाँच मील पैदल चले।', es: 'Caminamos cinco millas por la orilla del río.' },
      audioText: 'walk and walked',
      audioId: 'en_a1_u02_l29_v_walked',
      slowAudioId: 'en_a1_u02_l29_v_walked_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚶‍♂️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_call_called',
      word: 'call -> called (regular)',
      phonetic: '/kɑːld/',
      meaning: 'Telephone someone or summon aloud in the past',
      translationsByLang: { hi: 'कॉल करना -> फोन किया / बुलाया', es: 'llamar -> llamé / llamó', fr: 'appeler -> appelé', de: 'anrufen -> rief an', pt: 'ligar / chamar -> liguei / ligou', zh: '打电话 -> 打电话了', ar: 'يتصل / ينادي -> اتصلَ / نادى', ja: '電話する / 呼ぶ -> 電話した / 呼んだ', ru: 'звонить / называть -> позвонил' },
      exampleSentence: 'I called the doctor\'s office to book an appointment.',
      exampleTranslationByLang: { hi: 'मैंने अपॉइंटमेंट बुक करने के लिए डॉक्टर के कार्यालय में फोन किया।', es: 'Llamé a la consulta del médico para pedir cita.' },
      audioText: 'call and called',
      audioId: 'en_a1_u02_l29_v_called',
      slowAudioId: 'en_a1_u02_l29_v_called_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📞',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_listen_listened',
      word: 'listen -> listened (regular)',
      phonetic: '/ˈlɪs.ənd/',
      meaning: 'Give attention to sound or hear attentively in the past',
      translationsByLang: { hi: 'सुनना -> सुना', es: 'escuchar -> escuché / escuchó', fr: 'écouter -> écouté', de: 'zuhören -> hörte zu', pt: 'escutar / ouvir -> escutei / escutou', zh: '倾听 -> 听了', ar: 'يستمع -> استمعَ', ja: '聴く -> 聴いた', ru: 'слушать -> слушал' },
      exampleSentence: 'She listened to an English podcast on the train.',
      exampleTranslationByLang: { hi: 'उसने ट्रेन में एक अंग्रेजी पॉडकास्ट सुना।', es: 'Ella escuchó un podcast en inglés en el tren.' },
      audioText: 'listen and listened',
      audioId: 'en_a1_u02_l29_v_listened',
      slowAudioId: 'en_a1_u02_l29_v_listened_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎧',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_finish_finished',
      word: 'finish -> finished (regular)',
      phonetic: '/ˈfɪn.ɪʃt/',
      meaning: 'Bring a task or activity to an end in the past',
      translationsByLang: { hi: 'समाप्त करना -> पूरा किया / खत्म किया', es: 'terminar -> terminé / terminó', fr: 'finir -> fini', de: 'beenden -> beendete', pt: 'terminar -> terminei / terminou', zh: '完成 -> 完成了', ar: 'ينهي -> أَنْهَى', ja: '終える -> 終えた', ru: 'заканчивать -> закончил' },
      exampleSentence: 'We finished the project on time.',
      exampleTranslationByLang: { hi: 'हमने समय पर प्रोजेक्ट पूरा कर लिया।', es: 'Terminamos el proyecto a tiempo.' },
      audioText: 'finish and finished',
      audioId: 'en_a1_u02_l29_v_finished',
      slowAudioId: 'en_a1_u02_l29_v_finished_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏁',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l29_clean_cleaned',
      word: 'clean -> cleaned (regular)',
      phonetic: '/kliːnd/',
      meaning: 'Make free of dirt and clutter in the past',
      translationsByLang: { hi: 'साफ करना -> साफ किया', es: 'limpiar -> limpié / limpió', fr: 'nettoyer -> nettoyé', de: 'putzen / reinigen -> putzte', pt: 'limpar -> limpei / limpou', zh: '打扫 -> 打扫了', ar: 'ينظف -> نَظَّفَ', ja: '掃除する -> 掃除した', ru: 'убирать / чистить -> убрал / почистил' },
      exampleSentence: 'I cleaned my entire apartment on Saturday morning.',
      exampleTranslationByLang: { hi: 'मैंने शनिवार की सुबह अपने पूरे अपार्टमेंट को साफ किया।', es: 'Limpié todo mi apartamento el sábado por la mañana.' },
      audioText: 'clean and cleaned',
      audioId: 'en_a1_u02_l29_v_cleaned',
      slowAudioId: 'en_a1_u02_l29_v_cleaned_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧹',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks & Expressions (10 items)
  expressions: [
    {
      id: 'exp_u02_l29_01',
      phrase: 'What did you do yesterday?',
      meaning: 'Universal question asking someone to recount their previous day\'s activities',
      translationsByLang: {
        hi: 'आपने कल क्या किया?',
        es: '¿Qué hiciste ayer?',
        fr: 'Qu\'avez-vous fait hier ?',
        de: 'Was hast du gestern gemacht?',
        pt: 'O que você fez ontem?',
        zh: '你昨天做什么了？',
        ar: 'ماذا فعلت بالأمس؟',
        ja: '昨日は何をしましたか？',
        ru: 'Что вы делали вчера?'
      },
      context: 'Daily casual conversation.',
      audioId: 'en_a1_u02_l29_exp_01'
    },
    {
      id: 'exp_u02_l29_02',
      phrase: 'Did you have a good time?',
      meaning: 'Asking if someone enjoyed a recent social outing or event',
      translationsByLang: {
        hi: 'क्या आपका समय अच्छा बीता?',
        es: '¿Te lo pasaste bien? / ¿La pasaste bien?',
        fr: 'Vous êtes-vous bien amusé ?',
        de: 'Hattest du eine gute Zeit?',
        pt: 'Você se divertiu?',
        zh: '你玩得开心吗？',
        ar: 'هل قضيت وقتاً ممتعاً؟',
        ja: '楽しかったですか？',
        ru: 'Вы хорошо провели время?'
      },
      context: 'Inquiring after a party or trip.',
      audioId: 'en_a1_u02_l29_exp_02'
    },
    {
      id: 'exp_u02_l29_03',
      phrase: 'I didn\'t do anything special.',
      meaning: 'Modest summary indicating a quiet, ordinary day without major events',
      translationsByLang: {
        hi: 'मैंने कुछ खास नहीं किया।',
        es: 'No hice nada especial.',
        fr: 'Je n\'ai rien fait de spécial.',
        de: 'Ich habe nichts Besonderes gemacht.',
        pt: 'Não fiz nada de especial.',
        zh: '我没做什么特别的事。',
        ar: 'لم أفعل أي شيء مميز.',
        ja: '特に何も特別なことはしませんでした。',
        ru: 'Я не делал ничего особенного.'
      },
      context: 'Responding about an unhurried weekend.',
      audioId: 'en_a1_u02_l29_exp_03'
    },
    {
      id: 'exp_u02_l29_04',
      phrase: 'First we had breakfast, then we went for a walk.',
      meaning: 'Sequential chronological narration of two morning events',
      translationsByLang: {
        hi: 'पहले हमने नाश्ता किया, फिर हम टहलने गए।',
        es: 'Primero desayunamos, luego fuimos a dar un paseo.',
        fr: 'D\'abord nous avons pris le petit déjeuner, puis nous sommes allés nous promener.',
        de: 'Zuerst frühstückten wir, dann machten wir einen Spaziergang.',
        pt: 'Primeiro tomamos café da manhã, depois fomos caminhar.',
        zh: '首先我们吃了早餐，然后去散了步。',
        ar: 'أولاً تناولنا الفطور، ثم ذهبنا في نزهة.',
        ja: 'まず朝食を食べて、それから散歩に行きました。',
        ru: 'Сначала мы позавтракали, затем пошли на прогулку.'
      },
      context: 'Storytelling sequence.',
      audioId: 'en_a1_u02_l29_exp_04'
    },
    {
      id: 'exp_u02_l29_05',
      phrase: 'Did you see that new documentary?',
      meaning: 'Inquiring about someone\'s media consumption in the past',
      translationsByLang: {
        hi: 'क्या आपने वह नया वृत्तचित्र (डॉक्यूमेंट्री) देखा?',
        es: '¿Viste ese nuevo documental?',
        fr: 'Avez-vous vu ce nouveau documentaire ?',
        de: 'Hast du diese neue Dokumentation gesehen?',
        pt: 'Você viu aquele novo documentário?',
        zh: '你看了那部新纪录片吗？',
        ar: 'هل شاهدت ذلك الفيلم الوثائقي الجديد؟',
        ja: 'あの新しいドキュメンタリーを見ましたか？',
        ru: 'Вы смотрели этот новый документальный фильм?'
      },
      context: 'Entertainment discussions.',
      audioId: 'en_a1_u02_l29_exp_05'
    },
    {
      id: 'exp_u02_l29_06',
      phrase: 'I went to bed early last night.',
      meaning: 'Reporting early sleep time on the previous evening',
      translationsByLang: {
        hi: 'मैं कल रात जल्दी सो गया था।',
        es: 'Me acosté temprano anoche.',
        fr: 'Je me suis couché tôt hier soir.',
        de: 'Ich bin gestern Abend früh ins Bett gegangen.',
        pt: 'Fui para a cama cedo ontem à noite.',
        zh: '我昨晚很早就上床睡觉了。',
        ar: 'ذهبت إلى الفراش مبكراً الليلة الماضية.',
        ja: '昨夜は早く寝ました。',
        ru: 'Я вчера рано лег спать.'
      },
      context: 'Health and rest routines.',
      audioId: 'en_a1_u02_l29_exp_06'
    },
    {
      id: 'exp_u02_l29_07',
      phrase: 'Yes, I did. / No, I didn\'t.',
      meaning: 'Standard short answers for past simple questions with DID',
      translationsByLang: {
        hi: 'हाँ, मैंने किया। / नहीं, मैंने नहीं किया।',
        es: 'Sí, lo hice. / No, no lo hice.',
        fr: 'Oui. / Non.',
        de: 'Ja, habe ich. / Nein, habe ich nicht.',
        pt: 'Sim, fiz. / Não, não fiz.',
        zh: '是的，我做了。 / 不，我没做。',
        ar: 'نعم فعلت / لا لم أفعل.',
        ja: 'はい、しました。/ いいえ、しませんでした。',
        ru: 'Да. / Нет.'
      },
      context: 'Concise short responses in dialogue.',
      audioId: 'en_a1_u02_l29_exp_07'
    },
    {
      id: 'exp_u02_l29_08',
      phrase: 'We bought some groceries at the market.',
      meaning: 'Reporting routine food purchases in the past',
      translationsByLang: {
        hi: 'हमने बाज़ार से कुछ किराने का सामान खरीदा।',
        es: 'Compramos algo de comida en el mercado.',
        fr: 'Nous avons acheté des courses au marché.',
        de: 'Wir haben Lebensmittel auf dem Markt gekauft.',
        pt: 'Compramos algumas coisas no mercado.',
        zh: '我们在市场上买了些杂货。',
        ar: 'اشترينا بعض البقالة من السوق.',
        ja: '市場で食料品を買いました。',
        ru: 'Мы купили продукты на рынке.'
      },
      context: 'Shopping recount.',
      audioId: 'en_a1_u02_l29_exp_08'
    },
    {
      id: 'exp_u02_l29_09',
      phrase: 'She arrived ten minutes ago.',
      meaning: 'Indicating recent arrival in the immediate past',
      translationsByLang: {
        hi: 'वह दस मिनट पहले आई थी।',
        es: 'Ella llegó hace diez minutos.',
        fr: 'Elle est arrivée il y a dix minutes.',
        de: 'Sie ist vor zehn Minuten angekommen.',
        pt: 'Ela chegou há dez minutos.',
        zh: '她十分钟前到的。',
        ar: 'وصلت قبل عشر دقائق.',
        ja: '彼女は10分前に到着しました。',
        ru: 'Она приехала десять минут назад.'
      },
      context: 'Meeting log.',
      audioId: 'en_a1_u02_l29_exp_09'
    },
    {
      id: 'exp_u02_l29_10',
      phrase: 'I didn\'t understand the question.',
      meaning: 'Polite clarification stating past comprehension difficulty',
      translationsByLang: {
        hi: 'मुझे सवाल समझ नहीं आया था।',
        es: 'No entendí la pregunta.',
        fr: 'Je n\'ai pas compris la question.',
        de: 'Ich habe die Frage nicht verstanden.',
        pt: 'Não entendi a pergunta.',
        zh: '我没听懂那个问题。',
        ar: 'لم أفهم السؤال.',
        ja: '質問が理解できませんでした。',
        ru: 'Я не понял вопрос.'
      },
      context: 'Classroom and professional conversations.',
      audioId: 'en_a1_u02_l29_exp_10'
    }
  ],

  // SECTION 5: Grammar Rules (3 items)
  grammar: {
    patterns: [
    {
      id: 'g_u02_l29_01',
      title: 'Affirmative Past Simple: Regular Verbs (-ed) & Core Irregular Verbs',
      explanation: 'Regular verbs add -ed (or -d if ending in -e): work -> worked, visit -> visited, study -> studied (y after consonant becomes -ied). Irregular verbs change completely and must be memorized: go -> went, have -> had, see -> saw, buy -> bought, eat -> ate, make -> made, take -> took, meet -> met.',
      rulesByLang: {
        hi: 'सकारात्मक Simple Past: नियमित क्रियाओं में -ed जोड़ें (work -> worked, play -> played)। यदि -y से पहले व्यंजन हो तो y -> ied (study -> studied)। अनियमित क्रियाओं के रूप याद रखने होते हैं: go -> went, have -> had, see -> saw, buy -> bought, eat -> ate, take -> took।',
        es: 'Afirmativo en pasado: verbos regulares añaden -ed (worked, visited, studied). Los irregulares cambian su forma (go -> went, have -> had, see -> saw, buy -> bought).',
        fr: 'Verbes réguliers : +ed. Verbes irréguliers : formes à mémoriser (went, had, saw).',
        de: 'Regelmäßige Verben erhalten -ed. Unregelmäßige Verben ändern ihre Form (went, had, saw).',
        pt: 'Verbos regulares recebem -ed (worked, studied). Irregulares mudam a forma (went, had, saw).',
        zh: '肯定句规则：规则动词加 -ed（以辅音字母+y结尾变 -ied，如 study -> studied）；不规则动词需牢记其特殊过去式（如 go -> went, have -> had, see -> saw, buy -> bought, eat -> ate, take -> took）。',
        ar: 'الأفعال المنتظمة يضاف لها ed في الماضي، والأفعال الشاذة تحفظ أشكالها مثل went و had و saw.',
        ja: '過去形の肯定文：規則動詞は語尾に -ed を付け（study -> studied）、不规则動詞は形が変化します（go -> went, have -> had, see -> saw, buy -> bought）。',
        ru: 'Правильные глаголы получают окончание -ed (worked, studied). Неправильные глаголы имеют особые формы (went, had, saw, bought).'
      },
      examples: [
        { sentence: 'I worked all morning and then went to the park.', translation: 'Trabajé toda la mañana y luego fui al parque.' },
        { sentence: 'They bought fresh bread and made sandwiches.', translation: 'Compraron pan fresco e hicieron sándwiches.' },
        { sentence: 'She visited her parents last weekend.', translation: 'Ella visitó a sus padres el fin de semana pasado.' }
      ]
    },
    {
      id: 'g_u02_l29_02',
      title: 'Negative Past Simple: Subject + DIDN\'T + Bare Infinitive (Base Verb)',
      explanation: 'To form negative sentences in the Simple Past, use "didn\'t" (did not) followed by the BASE FORM of the main verb: "I didn\'t go" (NOT "I didn\'t went"), "She didn\'t buy" (NOT "She didn\'t bought").',
      rulesByLang: {
        hi: 'नकारात्मक Simple Past: Subject + didn\'t + मुख्य क्रिया का मूल रूप (base verb)। "I didn\'t see" कहें ("I didn\'t saw" गलत है)।',
        es: 'Negativo: Sujeto + didn\'t + verbo en forma base. "I didn\'t go" (nunca "I didn\'t went").',
        fr: 'Négatif : didn\'t + verbe à la base (ex. "I didn\'t go").',
        de: 'Negativ: didn\'t + Infinitiv (z.B. "I didn\'t go", nicht "didn\'t went").',
        pt: 'Negativo: didn\'t + verbo na forma base (ex. "I didn\'t go", nunca "didn\'t went").',
        zh: '否定句结构：主语 + didn\'t + 动词原形。如 "I didn\'t see"（绝不可用 "didn\'t saw"），"She didn\'t go"（绝不可用 "didn\'t went"）。',
        ar: 'صيغة النفي: didn\'t + المصدر (الفعل في التصريف الأول). قل I didn\'t see ولا تقل didn\'t saw.',
        ja: '否定文は「didn\'t + 動詞の原形」です（"I didn\'t go" であり、"didn\'t went" は誤り）。',
        ru: 'Отрицание: Subject + didn\'t + начальная форма глагола ("I didn\'t go", но не "didn\'t went").'
      },
      examples: [
        { sentence: 'I didn\'t see the email you sent yesterday.', translation: 'No vi el correo que enviaste ayer.' },
        { sentence: 'We didn\'t eat at the restaurant because it was closed.', translation: 'No comimos en el restaurante porque estaba cerrado.' },
        { sentence: 'He didn\'t buy the expensive shoes.', translation: 'Él no compró los zapatos caros.' }
      ]
    },
    {
      id: 'g_u02_l29_03',
      title: 'Questions with DID: "Did + Subject + Base Verb?"',
      explanation: 'In Simple Past questions, use auxiliary "Did" at the front, followed by the Subject and the BASE FORM of the verb: "Did you watch the match?", "What did you buy?". Short answers: "Yes, I did" / "No, I didn\'t".',
      rulesByLang: {
        hi: 'Simple Past के प्रश्न: Did + Subject + Base Verb ("Did you visit Paris?", "What did you do?")। संक्षिप्त उत्तर: "Yes, I did" / "No, I didn\'t"।',
        es: 'Preguntas: Did + Sujeto + verbo base ("¿Did you watch the match?"). Respuestas cortas: "Yes, I did / No, I didn\'t".',
        fr: 'Questions : Did + sujet + verbe base ("Did you watch...?").',
        de: 'Fragen: Did + Subjekt + Infinitiv ("Did you watch...?").',
        pt: 'Perguntas: Did + sujeito + verbo base ("Did you watch...?").',
        zh: '疑问句结构：Did + 主语 + 动词原形（如 "Did you watch the game?"，"Where did you go?"）。简略回答："Yes, I did" / "No, I didn\'t"。',
        ar: 'الأسئلة تبدأ بـ Did + الفاعل + المصدر: Did you watch the match؟',
        ja: '疑問文は「Did + 主語 + 動詞の原形?」です（Did you see it?）。短い返答は "Yes, I did" / "No, I didn\'t"。',
        ru: 'Вопросы: Did + подлежащее + начальная форма глагола ("Did you watch the movie?").'
      },
      examples: [
        { sentence: 'Did you call your parents yesterday?', translation: '¿Llamaste a tus padres ayer?' },
        { sentence: 'Where did you buy this jacket?', translation: '¿Dónde compraste esta chaqueta?' },
        { sentence: 'What time did you arrive at the airport?', translation: '¿A qué hora llegaste al aeropuerto?' }
      ]
    }
    ]
  },

  // SECTION 6: Common Learner Mistakes (5 items)
  commonMistakes: [
    {
      id: 'cm_u02_l29_01',
      incorrect: 'I didn\'t went to work yesterday.',
      correct: 'I didn\'t go to work yesterday.',
      explanation: 'After "didn\'t", ALWAYS use the bare infinitive (base form) "go", never the past form "went".',
      explanationByLang: {
        hi: '"didn\'t" के बाद हमेशा मूल क्रिया "go" का प्रयोग करें, "went" नहीं। "I didn\'t go" कहें।',
        es: 'Después de "didn\'t" siempre va el verbo en forma base: "I didn\'t go", nunca "didn\'t went".',
        fr: 'Utilisez la base verbale après "didn\'t" : "I didn\'t go".',
        de: 'Nach "didn\'t" steht immer der Infinitiv: "I didn\'t go".',
        pt: 'Após "didn\'t", use sempre a forma base: "I didn\'t go".',
        zh: 'didn\'t 后面必须跟动词原形，应说 "I didn\'t go"，不能说 "didn\'t went"。',
        ar: 'بعد didn\'t نستخدم الفعل في المصدر: I didn\'t go وليس didn\'t went.',
        ja: 'didn\'t の後は動詞の原形にします。"I didn\'t go" が正解です。',
        ru: 'После "didn\'t" всегда используется начальная форма глагола: "I didn\'t go".'
      }
    },
    {
      id: 'cm_u02_l29_02',
      incorrect: 'Did you saw the new movie?',
      correct: 'Did you see the new movie?',
      explanation: 'In questions with "Did", use the base form "see", not "saw".',
      explanationByLang: {
        hi: 'Did वाले प्रश्नों में मुख्य क्रिया का मूल रूप "see" आता है, "saw" नहीं।',
        es: 'En preguntas con "Did", usa la forma base: "Did you see?", no "Did you saw?".',
        fr: 'Dites "Did you see", et non "Did you saw".',
        de: 'Sagen Sie "Did you see", nicht "Did you saw".',
        pt: 'Diga "Did you see", nunca "Did you saw".',
        zh: 'Did 疑问句中动词用原形："Did you see the movie?"。',
        ar: 'في السؤال بـ Did استخدم see وليس saw.',
        ja: 'Did で始まる疑問文では "Did you see...?" と原形にします。',
        ru: 'Правильно: "Did you see?", а не "Did you saw?".'
      }
    },
    {
      id: 'cm_u02_l29_03',
      incorrect: 'She buyed a new car last month.',
      correct: 'She bought a new car last month.',
      explanation: '"Buy" is irregular; its past tense is "bought", not "buyed".',
      explanationByLang: {
        hi: '"Buy" की भूतकाल क्रिया "bought" होती है, "buyed" नहीं।',
        es: '"Buy" es irregular: su pasado es "bought", no "buyed".',
        fr: 'Le passé de "buy" est "bought".',
        de: 'Die Vergangenheitsform von "buy" ist "bought", nicht "buyed".',
        pt: 'O passado de "buy" é "bought".',
        zh: 'buy 是不规则动词，过去式为 bought，没有 buyed。',
        ar: 'الماضي من buy هو bought وليس buyed.',
        ja: 'buy の過去形は不規則で "bought" です。',
        ru: 'Прошедшая форма от "buy" — "bought", а не "buyed".'
      }
    },
    {
      id: 'cm_u02_l29_04',
      incorrect: 'I studyed English yesterday.',
      correct: 'I studied English yesterday.',
      explanation: 'Verbs ending in consonant + y change y to i before adding -ed: study -> studied.',
      explanationByLang: {
        hi: 'consonant + y वाले शब्दों में y हटाकर -ied लगाते हैं: study -> studied।',
        es: 'Los verbos que terminan en consonante + y cambian a -ied: study -> studied.',
        fr: 'On écrit "studied" avec -ied.',
        de: 'Man schreibt "studied" mit -ied.',
        pt: 'Escreve-se "studied" com -ied.',
        zh: '辅音字母+y结尾的动词，变 y 为 i 再加 -ed：study -> studied。',
        ar: 'الأفعال المنتهية بحرف ساكن ثم y تتحول إلى ied: study -> studied.',
        ja: '子音+y で終わる動詞は y を i に変えて ed を付けます（study -> studied）。',
        ru: 'Глаголы на согласную + y меняют y на ied: study -> studied.'
      }
    },
    {
      id: 'cm_u02_l29_05',
      incorrect: 'Yes, I did went.',
      correct: 'Yes, I did. / Yes, I went.',
      explanation: 'In short answers, use "Yes, I did". In full sentences, use "Yes, I went". Do not mix both.',
      explanationByLang: {
        hi: 'संक्षिप्त उत्तर में "Yes, I did" कहें या पूरा वाक्य "Yes, I went" कहें।',
        es: 'Di "Yes, I did" o "Yes, I went", pero no "Yes, I did went".',
        fr: 'Dites "Yes, I did" ou "Yes, I went".',
        de: 'Sagen Sie "Yes, I did" oder "Yes, I went".',
        pt: 'Diga "Yes, I did" ou "Yes, I went".',
        zh: '简答说 "Yes, I did"，完整句说 "Yes, I went"，不可混用为 "Yes, I did went"。',
        ar: 'قل Yes, I did أو Yes, I went ولا تجمعهما معاً.',
        ja: '短答なら "Yes, I did"、完全文なら "Yes, I went" と言います。',
        ru: 'Правильно: "Yes, I did" или "Yes, I went".'
      }
    }
  ],

  // SECTION 7: Realistic Dialogues (3 items)
  dialogues: [
    {
      id: 'd_u02_l29_01',
      title: 'Recounting Weekend Activities',
      context: 'Hannah and Lucas talk about what they did during the weekend.',
      turns: [
        {
          speaker: 'Hannah',
          text: 'Hi Lucas! What did you do this weekend?',
          translationByLang: {
            hi: 'नमस्ते लुकास! आपने इस वीकेंड क्या किया?',
            es: '¡Hola Lucas! ¿Qué hiciste este fin de semana?'
          },
          audioId: 'en_a1_u02_l29_d01_01'
        },
        {
          speaker: 'Lucas',
          text: 'On Saturday, I met some college friends at the central park. We played soccer for two hours and then had pizza together.',
          translationByLang: {
            hi: 'शनिवार को, मैं सेंट्रल पार्क में कुछ कॉलेज के दोस्तों से मिला। हमने दो घंटे फुटबॉल खेला और फिर साथ में पिज्जा खाया।',
            es: 'El sábado me encontré con unos amigos de la universidad en el parque central. Jugamos al fútbol dos horas y luego comimos pizza juntos.'
          },
          audioId: 'en_a1_u02_l29_d01_02'
        },
        {
          speaker: 'Hannah',
          text: 'That sounds like fun! Did you go anywhere on Sunday?',
          translationByLang: {
            hi: 'यह मजेदार लगता है! क्या आप रविवार को कहीं गए थे?',
            es: '¡Suena divertido! ¿Fuiste a algún sitio el domingo?'
          },
          audioId: 'en_a1_u02_l29_d01_03'
        },
        {
          speaker: 'Lucas',
          text: 'No, I didn\'t go out on Sunday. I stayed home, cleaned my apartment, and watched a documentary.',
          translationByLang: {
            hi: 'नहीं, मैं रविवार को बाहर नहीं गया। मैं घर पर ही रहा, अपने अपार्टमेंट की सफाई की और एक डॉक्यूमेंट्री देखी।',
            es: 'No, no salí el domingo. Me quedé en casa, limpié el piso y vi un documental.'
          },
          audioId: 'en_a1_u02_l29_d01_04'
        }
      ]
    },
    {
      id: 'd_u02_l29_02',
      title: 'A Story of Yesterday\'s Travel Incident',
      context: 'Emma tells Marcus about how she lost and found her backpack yesterday.',
      turns: [
        {
          speaker: 'Emma',
          text: 'Marcus, you will not believe what happened to me yesterday!',
          translationByLang: {
            hi: 'मार्कस, आप विश्वास नहीं करेंगे कि कल मेरे साथ क्या हुआ!',
            es: '¡Marcus, no te vas a creer lo que me pasó ayer!'
          },
          audioId: 'en_a1_u02_l29_d02_01'
        },
        {
          speaker: 'Marcus',
          text: 'What happened? Did you lose something on your commute?',
          translationByLang: {
            hi: 'क्या हुआ? क्या आपने अपने सफर में कुछ खो दिया?',
            es: '¿Qué pasó? ¿Perdiste algo en tu trayecto?'
          },
          audioId: 'en_a1_u02_l29_d02_02'
        },
        {
          speaker: 'Emma',
          text: 'First, I took the morning subway to the library. When I arrived, I realized I left my backpack on the train seat!',
          translationByLang: {
            hi: 'पहले, मैंने लाइब्रेरी के लिए सुबह की सबवे ट्रेन ली। जब मैं पहुँची, तो मुझे एहसास हुआ कि मैं अपना बैग ट्रेन की सीट पर ही भूल आई हूँ!',
            es: 'Primero, tomé el metro matutino hacia la biblioteca. ¡Cuando llegué, me di cuenta de que había dejado mi mochila en el asiento del tren!'
          },
          audioId: 'en_a1_u02_l29_d02_03'
        },
        {
          speaker: 'Marcus',
          text: 'Oh no! Did you find it?',
          translationByLang: {
            hi: 'अरे नहीं! क्या वह आपको मिला?',
            es: '¡Oh no! ¿La encontraste?'
          },
          audioId: 'en_a1_u02_l29_d02_04'
        },
        {
          speaker: 'Emma',
          text: 'Yes! I immediately called the station master. An honest passenger gave it to the lost-and-found office, so I got everything back.',
          translationByLang: {
            hi: 'हाँ! मैंने तुरंत स्टेशन मास्टर को फोन किया। एक ईमानदार यात्री ने इसे खोया-पाया कार्यालय में जमा कर दिया था, इसलिए मुझे सब कुछ वापस मिल गया।',
            es: '¡Sí! Llamé inmediatamente al jefe de estación. Un pasajero honrado la entregó en la oficina de objetos perdidos, así que recuperé todo.'
          },
          audioId: 'en_a1_u02_l29_d02_05'
        }
      ]
    },
    {
      id: 'd_u02_l29_03',
      title: 'Planning and Cooking Dinner',
      context: 'Carlos and Elena recount how they prepared a special dinner for family guests.',
      turns: [
        {
          speaker: 'Elena',
          text: 'Carlos, the dinner party last night was fantastic! Who cooked all that food?',
          translationByLang: {
            hi: 'कार्लोस, कल रात की डिनर पार्टी शानदार थी! वह सारा खाना किसने पकाया था?',
            es: 'Carlos, ¡la cena de anoche estuvo fantástica! ¿Quién cocinó toda esa comida?'
          },
          audioId: 'en_a1_u02_l29_d03_01'
        },
        {
          speaker: 'Carlos',
          text: 'My sister and I cooked together. First, we bought fresh vegetables and salmon at the harbor market. Then we baked garlic bread and made pasta.',
          translationByLang: {
            hi: 'मेरी बहन और मैंने साथ मिलकर खाना बनाया। पहले, हमने बंदरगाह के बाजार से ताजी सब्जियां और सैल्मन खरीदा। फिर हमने गार्लिक ब्रेड सेकी और पास्ता बनाया।',
            es: 'Mi hermana y yo cocinamos juntos. Primero compramos verduras frescas y salmón en el mercado del puerto. Luego horneamos pan de ajo e hicimos pasta.'
          },
          audioId: 'en_a1_u02_l29_d03_02'
        },
        {
          speaker: 'Elena',
          text: 'Did your guests enjoy the dessert as well?',
          translationByLang: {
            hi: 'क्या आपके मेहमानों ने मिठाई का भी आनंद लिया?',
            es: '¿A los invitados les gustó el postre también?'
          },
          audioId: 'en_a1_u02_l29_d03_03'
        },
        {
          speaker: 'Carlos',
          text: 'Yes, they loved it! My sister made a classic Italian tiramisu, and everyone ate two slices.',
          translationByLang: {
            hi: 'हाँ, उन्हें यह बहुत पसंद आया! मेरी बहन ने क्लासिक इतालवी तिरामिसु बनाया, और सभी ने दो-दो टुकड़े खाए।',
            es: '¡Sí, les encantó! Mi hermana hizo un tiramisú italiano clásico y todos comieron dos porciones.'
          },
          audioId: 'en_a1_u02_l29_d03_04'
        }
      ]
    }
  ],

  // SECTION 8: Practice Exercises (15 items)
  practiceExercises: [
    {
      id: 'ex_u02_l29_p01',
      lessonId: 'lesson_a1_2_29',
      type: 'multiple_choice',
      prompt: 'What is the past simple form of the irregular verb "go"?',
      options: [
        { id: 'a', text: 'went', isCorrect: true },
        { id: 'b', text: 'goed', isCorrect: false },
        { id: 'c', text: 'gone', isCorrect: false },
        { id: 'd', text: 'was went', isCorrect: false }
      ],
      explanation: 'The past tense of "go" is "went".'
    },
    {
      id: 'ex_u02_l29_p02',
      lessonId: 'lesson_a1_2_29',
      type: 'fill_in_blank',
      prompt: 'Complete the sentence: "I _______ (buy) a new laptop yesterday."',
      correctAnswer: 'bought',
      options: [
        { id: 'opt_1', text: 'bought', isCorrect: true },
        { id: 'opt_2', text: 'buyed', isCorrect: false },
        { id: 'opt_3', text: 'buy', isCorrect: false },
        { id: 'opt_4', text: 'did buyed', isCorrect: false }
      ],
      explanation: 'The past of "buy" is "bought".'
    },
    {
      id: 'ex_u02_l29_p03',
      lessonId: 'lesson_a1_2_29',
      type: 'multiple_choice',
      prompt: 'Which negative sentence is grammatically correct?',
      options: [
        { id: 'a', text: 'She didn\'t visit the museum.', isCorrect: true },
        { id: 'b', text: 'She didn\'t visited the museum.', isCorrect: false },
        { id: 'c', text: 'She not visited the museum.', isCorrect: false },
        { id: 'd', text: 'She wasn\'t visit the museum.', isCorrect: false }
      ],
      explanation: 'Use "didn\'t" + bare infinitive "visit".'
    },
    {
      id: 'ex_u02_l29_p04',
      lessonId: 'lesson_a1_2_29',
      type: 'reorder',
      prompt: 'Arrange the words to form a past question:',
      words: ['Did', 'you', 'watch', 'the', 'movie', 'last', 'night?'],
      correctOrder: ['Did', 'you', 'watch', 'the', 'movie', 'last', 'night?'],
      explanation: 'Did + Subject + base verb + object + time expression?'
    },
    {
      id: 'ex_u02_l29_p05',
      explanation: 'Irregular past forms must be memorized: see - saw, eat - ate, have - had, take - took.',
      lessonId: 'lesson_a1_2_29',
      type: 'match_pairs',
      prompt: 'Match present verb with its irregular past form:',
      pairs: [
        { id: 'p1', left: 'see', right: 'saw' },
        { id: 'p2', left: 'eat', right: 'ate' },
        { id: 'p3', left: 'have', right: 'had' },
        { id: 'p4', left: 'take', right: 'took' }
      ]
    },
    {
      id: 'ex_u02_l29_p06',
      lessonId: 'lesson_a1_2_29',
      type: 'fill_in_blank',
      prompt: 'Fill in the blank: "First we had lunch, _______ we visited the art gallery."',
      correctAnswer: 'then',
      options: [
        { id: 'opt_1', text: 'then', isCorrect: true },
        { id: 'opt_2', text: 'never', isCorrect: false },
        { id: 'opt_3', text: 'because', isCorrect: false },
        { id: 'opt_4', text: 'although', isCorrect: false }
      ],
      explanation: '"Then" indicates chronological progression.'
    },
    {
      id: 'ex_u02_l29_p07',
      lessonId: 'lesson_a1_2_29',
      type: 'multiple_choice',
      prompt: 'Select the correct past form of "study":',
      options: [
        { id: 'a', text: 'studied', isCorrect: true },
        { id: 'b', text: 'studyed', isCorrect: false },
        { id: 'c', text: 'studid', isCorrect: false },
        { id: 'd', text: 'studiest', isCorrect: false }
      ],
      explanation: 'Study ends in consonant+y, changing to -ied: "studied".'
    },
    {
      id: 'ex_u02_l29_p08',
      lessonId: 'lesson_a1_2_29',
      type: 'reorder',
      prompt: 'Order the words to describe a completed action:',
      words: ['They', 'met', 'at', 'the', 'train', 'station.'],
      correctOrder: ['They', 'met', 'at', 'the', 'train', 'station.'],
      explanation: 'Subject + met + prepositional phrase.'
    },
    {
      id: 'ex_u02_l29_p09',
      lessonId: 'lesson_a1_2_29',
      type: 'multiple_choice',
      prompt: 'How do you answer: "Did you call the doctor?"',
      options: [
        { id: 'a', text: 'Yes, I did.', isCorrect: true },
        { id: 'b', text: 'Yes, I called did.', isCorrect: false },
        { id: 'c', text: 'Yes, I was.', isCorrect: false },
        { id: 'd', text: 'Yes, I do.', isCorrect: false }
      ],
      explanation: '"Yes, I did" is the correct short answer to a question beginning with "Did".'
    },
    {
      id: 'ex_u02_l29_p10',
      lessonId: 'lesson_a1_2_29',
      type: 'fill_in_blank',
      prompt: 'Complete with the negative: "We _______ (not eat) out last night; we cooked at home."',
      correctAnswer: 'didn\'t eat',
      options: [
        { id: 'opt_1', text: 'didn\'t eat', isCorrect: true },
        { id: 'opt_2', text: 'didn\'t ate', isCorrect: false },
        { id: 'opt_3', text: 'not ate', isCorrect: false },
        { id: 'opt_4', text: 'weren\'t eat', isCorrect: false }
      ],
      explanation: '"didn\'t eat" is the correct negative past form.'
    },
    {
      id: 'ex_u02_l29_p11',
      explanation: 'Regular verbs add -ed (or -d for verbs already ending in -e): work - worked, play - played, clean - cleaned, arrive - arrived.',
      lessonId: 'lesson_a1_2_29',
      type: 'match_pairs',
      prompt: 'Match regular verb with its past form:',
      pairs: [
        { id: 'p1', left: 'work', right: 'worked' },
        { id: 'p2', left: 'play', right: 'played' },
        { id: 'p3', left: 'clean', right: 'cleaned' },
        { id: 'p4', left: 'arrive', right: 'arrived' }
      ]
    },
    {
      id: 'ex_u02_l29_p12',
      lessonId: 'lesson_a1_2_29',
      type: 'multiple_choice',
      prompt: 'Which sentence has an ERROR?',
      options: [
        { id: 'a', text: 'Where did you went yesterday?', isCorrect: true },
        { id: 'b', text: 'Where did you go yesterday?', isCorrect: false },
        { id: 'c', text: 'I went to the library yesterday.', isCorrect: false },
        { id: 'd', text: 'Did you go to the library?', isCorrect: false }
      ],
      explanation: '"Where did you went" is an error; after "did", use base form "go".'
    },
    {
      id: 'ex_u02_l29_p13',
      lessonId: 'lesson_a1_2_29',
      type: 'fill_in_blank',
      prompt: 'Fill in the blank: "He _______ (write) three emails to the client this morning."',
      correctAnswer: 'wrote',
      options: [
        { id: 'opt_1', text: 'wrote', isCorrect: true },
        { id: 'opt_2', text: 'writed', isCorrect: false },
        { id: 'opt_3', text: 'write', isCorrect: false },
        { id: 'opt_4', text: 'written', isCorrect: false }
      ],
      explanation: 'The past tense of "write" is "wrote".'
    },
    {
      id: 'ex_u02_l29_p14',
      lessonId: 'lesson_a1_2_29',
      type: 'reorder',
      prompt: 'Arrange the chronological narrative:',
      words: ['First,', 'we', 'packed,', 'and', 'finally,', 'we', 'left.'],
      correctOrder: ['First,', 'we', 'packed,', 'and', 'finally,', 'we', 'left.'],
      explanation: 'First, we packed, and finally, we left.'
    },
    {
      id: 'ex_u02_l29_p15',
      lessonId: 'lesson_a1_2_29',
      type: 'multiple_choice',
      prompt: 'What did they drink after dinner? Choose the correct past verb:',
      options: [
        { id: 'a', text: 'They drank green tea after dinner.', isCorrect: true },
        { id: 'b', text: 'They drinked green tea.', isCorrect: false },
        { id: 'c', text: 'They drunked green tea.', isCorrect: false },
        { id: 'd', text: 'They did drank green tea.', isCorrect: false }
      ],
      explanation: 'Past form of "drink" is "drank".'
    }
  ],

  // SECTION 9: Review Exercises (5 items)
  reviewExercises: [
    {
      id: 'ex_u02_l29_r01',
      lessonId: 'lesson_a1_2_29',
      type: 'multiple_choice',
      prompt: 'Which sentence is grammatically correct for a completed past action?',
      options: [
        { id: 'a', text: 'My sister made a delicious lemon cake yesterday.', isCorrect: true },
        { id: 'b', text: 'My sister maked a lemon cake.', isCorrect: false },
        { id: 'c', text: 'My sister did made a cake.', isCorrect: false },
        { id: 'd', text: 'My sister makes a cake yesterday.', isCorrect: false }
      ],
      explanation: '"made" is the correct irregular past of "make".'
    },
    {
      id: 'ex_u02_l29_r02',
      lessonId: 'lesson_a1_2_29',
      type: 'fill_in_blank',
      prompt: 'Complete the negative sentence: "I _______ (not see) anyone at the bus stop."',
      correctAnswer: 'didn\'t see',
      options: [
        { id: 'opt_1', text: 'didn\'t see', isCorrect: true },
        { id: 'opt_2', text: 'didn\'t saw', isCorrect: false },
        { id: 'opt_3', text: 'not saw', isCorrect: false },
        { id: 'opt_4', text: 'wasn\'t see', isCorrect: false }
      ],
      explanation: 'Use "didn\'t see".'
    },
    {
      id: 'ex_u02_l29_r03',
      explanation: '\'What did you buy?\' is answered with the object \'A new winter jacket.\' \'Did you cook?\' is answered with \'No, we ordered takeout.\'',
      lessonId: 'lesson_a1_2_29',
      type: 'match_pairs',
      prompt: 'Match the question with the logical response:',
      pairs: [
        { id: 'p1', left: 'What did you buy?', right: 'A new winter jacket.' },
        { id: 'p2', left: 'Did you meet Sarah?', right: 'Yes, we had coffee together.' },
        { id: 'p3', left: 'Where did you go?', right: 'We went to the beach.' },
        { id: 'p4', left: 'Did you cook dinner?', right: 'No, we ordered takeout.' }
      ]
    },
    {
      id: 'ex_u02_l29_r04',
      lessonId: 'lesson_a1_2_29',
      type: 'reorder',
      prompt: 'Order the words to ask about yesterday\'s routine:',
      words: ['What', 'time', 'did', 'you', 'arrive', 'at', 'work?'],
      correctOrder: ['What', 'time', 'did', 'you', 'arrive', 'at', 'work?'],
      explanation: 'What time did you arrive at work?'
    },
    {
      id: 'ex_u02_l29_r05',
      lessonId: 'lesson_a1_2_29',
      type: 'multiple_choice',
      prompt: 'Which sequencing word indicates the closing step of a narrative?',
      options: [
        { id: 'a', text: 'Finally', isCorrect: true },
        { id: 'b', text: 'First', isCorrect: false },
        { id: 'c', text: 'Then', isCorrect: false },
        { id: 'd', text: 'After that', isCorrect: false }
      ],
      explanation: '"Finally" concludes a sequence of events.'
    }
  ],

  // SECTION 10: Assessment Exercises (5 items)
  assessmentExercises: [
    {
      id: 'ex_u02_l29_a01',
      lessonId: 'lesson_a1_2_29',
      type: 'multiple_choice',
      prompt: 'Choose the sentence with correct past grammar and spelling:',
      options: [
        { id: 'a', text: 'She visited Paris and took hundreds of photos.', isCorrect: true },
        { id: 'b', text: 'She visit Paris and taked photos.', isCorrect: false },
        { id: 'c', text: 'She visited Paris and take photos.', isCorrect: false },
        { id: 'd', text: 'She was visit Paris and took photos.', isCorrect: false }
      ],
      explanation: '"visited" (regular) and "took" (irregular past of take) are both correctly conjugated.'
    },
    {
      id: 'ex_u02_l29_a02',
      lessonId: 'lesson_a1_2_29',
      type: 'fill_in_blank',
      prompt: 'Fill in the blank: "Did you _______ (have) lunch with your colleagues yesterday?"',
      correctAnswer: 'have',
      options: [
        { id: 'opt_1', text: 'have', isCorrect: true },
        { id: 'opt_2', text: 'had', isCorrect: false },
        { id: 'opt_3', text: 'having', isCorrect: false },
        { id: 'opt_4', text: 'has', isCorrect: false }
      ],
      explanation: 'In questions with "Did", use base form "have".'
    },
    {
      id: 'ex_u02_l29_a03',
      lessonId: 'lesson_a1_2_29',
      type: 'reorder',
      prompt: 'Reorder the sentence to express negative past:',
      words: ['I', 'didn\'t', 'understand', 'the', 'grammar', 'rule.'],
      correctOrder: ['I', 'didn\'t', 'understand', 'the', 'grammar', 'rule.'],
      explanation: 'I didn\'t understand the grammar rule.'
    },
    {
      id: 'ex_u02_l29_a04',
      lessonId: 'lesson_a1_2_29',
      type: 'multiple_choice',
      prompt: 'What is the past tense of "come"?',
      options: [
        { id: 'a', text: 'came', isCorrect: true },
        { id: 'b', text: 'comed', isCorrect: false },
        { id: 'c', text: 'come', isCorrect: false },
        { id: 'd', text: 'was come', isCorrect: false }
      ],
      explanation: 'The past simple of "come" is "came".'
    },
    {
      id: 'ex_u02_l29_a05',
      explanation: 'Irregular past forms: make - made, write - wrote, drink - drank, buy - bought.',
      lessonId: 'lesson_a1_2_29',
      type: 'match_pairs',
      prompt: 'Match present infinitive with irregular past form:',
      pairs: [
        { id: 'p1', left: 'make', right: 'made' },
        { id: 'p2', left: 'write', right: 'wrote' },
        { id: 'p3', left: 'drink', right: 'drank' },
        { id: 'p4', left: 'buy', right: 'bought' }
      ]
    }
  ]
};
