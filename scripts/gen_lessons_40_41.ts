import { LessonRaw, compileLesson, saveLessonFile } from './generate_all_unit3';

// =========================================================================
// LESSON 40: High-Frequency Irregular Past Verbs
// =========================================================================
export const RAW_LESSON_40: LessonRaw = {
  num: 40,
  id: 'lesson_a1_3_40',
  title: 'Talking About the Past (High-Frequency Irregular Verbs)',
  icon: '⚡',
  estMin: 25,
  objTitle: 'Using Common Irregular Past Verbs to Narrate Daily Life, Travel and Shopping Experiences',
  objDesc: 'Master top high-frequency irregular simple past verbs in English: went (go), had (have), did (do), saw (see), bought (buy), took (take), came (come), ate (eat), drank (drink), got (get), made (make), gave (give). Learn to narrate past personal stories, weekend activities, and errands.',
  objHi: 'अत्यधिक प्रयुक्त अनियमित भूतकाल क्रियाओं (Irregular Past Verbs: went, had, saw, bought, took, came, ate, drank, got, made, gave) का प्रयोग सीखें। अपनी पिछली यात्राओं, खरीदारी और दैनिक जीवन की घटनाओं को अंग्रेजी में व्यक्त करें।',
  objEs: 'Domina los verbos irregulares de alta frecuencia en pasado simple: went (go), had (have), saw (see), bought (buy), took (take), came (come), ate (eat), drank (drink), got (get), made (make), gave (give) para narrar historias y actividades pasadas.',
  canDo: [
    'Narrate past trips and errands: "I went to the supermarket and bought some fruit"',
    'Express past meals and drinks: "We ate sushi and drank green tea"',
    'Talk about past experiences: "I saw an amazing concert last Saturday"',
    'Describe transportation and time: "She took the train and came home at seven"',
    'Use irregular past forms accurately without adding -ed: "He gave me the keys"'
  ],
  canDoHi: [
    'पिछली यात्रा और खरीदारी बताना: "I went to the mall and bought a jacket"',
    'खाने-पीने का वर्णन: "We ate at a restaurant and drank juice"',
    'अतीत के अनुभव: "I saw a wonderful film yesterday"',
    'अनियमित क्रियाओं का सही रूप: "He gave me a gift", "She took the bus"'
  ],
  canDoEs: [
    'Narrar viajes y compras: "I went to the supermarket and bought fruit"',
    'Describir comidas pasadas: "We ate pizza and drank water"',
    'Hablar de experiencias: "I saw an interesting movie yesterday"',
    'Usar formas irregulares correctas: "She came home early and made dinner"'
  ],
  vocab: [
    { w: 'went', p: '/went/', m: 'Moved or traveled from one place to another (past of go)', hi: 'गया / गई / गए', es: 'fue / fui / fuimos', fr: 'est allé / suis allé', de: 'ging / gegangen', pt: 'foi / fui', zh: '去了', ar: 'ذَهَبَ', ja: '行った', ru: 'пошел / поехал', ex: 'We went to the beach early on Sunday morning.', exHi: 'हम रविवार की सुबह जल्दी समुद्र तट पर गए थे।', exEs: 'Fuimos a la playa temprano el domingo por la mañana.', ic: '🏖️' },
    { w: 'had', p: '/hæd/', m: 'Possessed, experienced, or consumed (past of have)', hi: 'पास था / खाया / अनुभव किया', es: 'tuvo / tuve / tomó', fr: 'a eu / avait', de: 'hatte / gehabt', pt: 'teve / tive', zh: '有了 / 吃了 / 拥有', ar: 'كان لديه / تناولَ', ja: '持っていた / 食べた', ru: 'имел / было / ел', ex: 'I had a wonderful conversation with my old friend yesterday.', exHi: 'कल मेरी अपने पुराने दोस्त के साथ बहुत अच्छी बातचीत हुई।', exEs: 'Ayer tuve una conversación maravillosa con mi viejo amigo.', ic: '🤝' },
    { w: 'saw', p: '/sɑː/', m: 'Perceived with the eyes; watched (past of see)', hi: 'देखा / देखी', es: 'vio / vi / vimos', fr: 'a vu / vu', de: 'sah / gesehen', pt: 'viu / vi', zh: '看到了 / 见了', ar: 'رَأَى', ja: '見た / 会った', ru: 'увидел / посмотрел', ex: 'We saw a famous actor at the airport this morning.', exHi: 'हमने आज सुबह हवाई अड्डे पर एक प्रसिद्ध अभिनेता को देखा।', exEs: 'Vimos a un actor famoso en el aeropuerto esta mañana.', ic: '👀' },
    { w: 'bought', p: '/bɑːt/', m: 'Acquired something by paying money (past of buy)', hi: 'खरीदा / खरीदी', es: 'compró / compré', fr: 'a acheté / acheté', de: 'kaufte / gekauft', pt: 'comprou / comprei', zh: '买了 / 购买了', ar: 'اشترى', ja: '買った', ru: 'купил / приобрела', ex: 'Maria bought a warm wool sweater on sale yesterday.', exHi: 'मारिया ने कल सेल में एक गर्म ऊनी स्वेटर खरीदा।', exEs: 'María compró un jersey de lana abrigado en rebajas ayer.', ic: '🛍️' },
    { w: 'took', p: '/tʊk/', m: 'Carried, transported, or used transport (past of take)', hi: 'लिया / ले गया / पकड़ा', es: 'tomó / tomé / llevó', fr: 'a pris / pris', de: 'nahm / genommen', pt: 'tomou / pegou / levei', zh: '拿了 / 乘坐了', ar: 'أخذَ / ركبَ', ja: '取った / 乗った', ru: 'взял / сел (на транспорт)', ex: 'I took the subway to the city center during rush hour.', exHi: 'मैं व्यस्त समय के दौरान सबवे से शहर के केंद्र में गया।', exEs: 'Tomé el metro al centro de la ciudad durante la hora punta.', ic: '🚇' },
    { w: 'came', p: '/keɪm/', m: 'Moved toward or arrived at a place (past of come)', hi: 'आया / आई / आए', es: 'vino / vine / vinieron', fr: 'est venu / venu', de: 'kam / gekommen', pt: 'veio / vim', zh: '来了 / 来到', ar: 'جاءَ / أتى', ja: '来た', ru: 'пришел / приехал', ex: 'Many guests came to the wedding celebration last night.', exHi: 'कल रात शादी के जश्न में कई मेहमान आए थे।', exEs: 'Muchos invitados vinieron a la celebración de la boda anoche.', ic: '🚪' },
    { w: 'ate', p: '/eɪt/', m: 'Put food into the mouth and swallowed it (past of eat)', hi: 'खाया / खाई', es: 'comió / comí', fr: 'a mangé / mangé', de: 'aß / gegessen', pt: 'comeu / comi', zh: '吃了', ar: 'أَكَلَ', ja: '食べた', ru: 'ел / съел', ex: 'We ate traditional paella at a local Spanish restaurant.', exHi: 'हमने एक स्थानीय स्पेनिश रेस्तरां में पारंपरिक पाएला खाया।', exEs: 'Comimos paella tradicional en un restaurante español local.', ic: '🥘' },
    { w: 'drank', p: '/dræŋk/', m: 'Swallowed a liquid (past of drink)', hi: 'पिया / पी', es: 'bebió / tomé', fr: 'a bu / bu', de: 'trank / getrunken', pt: 'bebeu / tomei', zh: '喝了', ar: 'شَرِبَ', ja: '飲んだ', ru: 'пил / выпил', ex: 'He drank a large glass of fresh orange juice with breakfast.', exHi: 'उसने नाश्ते के साथ एक बड़ा गिलास ताज़ा संतरे का रस पिया।', exEs: 'Bebió un vaso grande de zumo de naranja fresco con el desayuno.', ic: '🍊' },
    { w: 'got', p: '/ɡɑːt/', m: 'Received, obtained, or arrived (past of get)', hi: 'प्राप्त किया / मिला / पहुँचा', es: 'obtuvo / consiguió / llegó', fr: 'a reçu / obtenu', de: 'bekam / erhalten', pt: 'conseguiu / recebeu', zh: '得到了 / 收到了 / 到达', ar: 'حصلَ على / وصلَ', ja: '手に入れた / 着いた', ru: 'получил / добрался', ex: 'I got home very late because the bus was delayed.', exHi: 'मुझे घर पहुँचने में बहुत देर हो गई क्योंकि बस में देरी हो गई थी।', exEs: 'Llegué a casa muy tarde porque el autobús se retrasó.', ic: '📬' },
    { w: 'made', p: '/meɪd/', m: 'Created, produced, or prepared (past of make)', hi: 'बनाया / निर्माण किया', es: 'hizo / hice / preparó', fr: 'a fait / fabriqué', de: 'machte / hergestellt', pt: 'fez / preparei', zh: '做了 / 制作了', ar: 'صَنَعَ / أعدَّ', ja: '作った', ru: 'сделал / приготовил', ex: 'She made a delicious chocolate cake for the party.', exHi: 'उसने पार्टी के लिए एक स्वादिष्ट चॉकलेट केक बनाया।', exEs: 'Ella hizo un delicioso pastel de chocolate para la fiesta.', ic: '🎂' },
    { w: 'gave', p: '/ɡeɪv/', m: 'Transferred possession of something freely (past of give)', hi: 'दिया / दी', es: 'dio / di / dimos', fr: 'a donné / donné', de: 'gab / gegeben', pt: 'deu / dei', zh: '给了 / 送给', ar: 'أعطى', ja: 'あげた / 与えた', ru: 'дал / подарил', ex: 'My brother gave me a book for my birthday.', exHi: 'मेरे भाई ने मेरे जन्मदिन पर मुझे एक किताब दी।', exEs: 'Mi hermano me dio un libro para mi cumpleaños.', ic: '🎁' },
    { w: 'met', p: '/met/', m: 'Came into the presence of someone (past of meet)', hi: 'मिला / मुलाकात की', es: 'conoció / se encontró con', fr: 'a rencontré / rencontré', de: 'traf / getroffen', pt: 'encontrou / conheceu', zh: '遇见了 / 会面了', ar: 'التقى / قابلَ', ja: '会った', ru: 'встретил / познакомился', ex: 'I met Sarah outside the central library at two o\'clock.', exHi: 'मैं दोपहर दो बजे सेंट्रल लाइब्रेरी के बाहर सारा से मिला था।', exEs: 'Me encontré con Sarah fuera de la biblioteca central a las dos.', ic: '🤝' },
    { w: 'wrote', p: '/roʊt/', m: 'Marked letters or words on paper or screen (past of write)', hi: 'लिखा / लिखी', es: 'escribió / escribí', fr: 'a écrit / écrit', de: 'schrieb / geschrieben', pt: 'escreveu / escrevi', zh: '写了', ar: 'كَتَبَ', ja: '書いた', ru: 'написал / написала', ex: 'He wrote an important email to his manager this morning.', exHi: 'उसने आज सुबह अपने मैनेजर को एक महत्वपूर्ण ईमेल लिखा।', exEs: 'Escribió un correo electrónico importante a su gerente esta mañana.', ic: '✍️' },
    { w: 'read (past)', p: '/red/', m: 'Looked at and comprehended written matter (past of read)', hi: 'पढ़ा / पढ़ी', es: 'leyó / leí', fr: 'a lu / lu', de: 'las / gelesen', pt: 'leu / li', zh: '读了 / 阅览了', ar: 'قَرَأَ', ja: '読んだ', ru: 'читал / прочитал', ex: 'I read an interesting travel article on the plane.', exHi: 'मैंने हवाई जहाज में एक दिलचस्प यात्रा लेख पढ़ा।', exEs: 'Leí un interesante artículo de viajes en el avión.', ic: '📖' },
    { w: 'spoke', p: '/spoʊk/', m: 'Said words; used voice (past of speak)', hi: 'बोला / बात की', es: 'habló / hablé', fr: 'a parlé / parlé', de: 'sprach / gesprochen', pt: 'falou / conversei', zh: '说了 / 讲了', ar: 'تكلَّمَ', ja: '話した', ru: 'говорил / выступил', ex: 'She spoke to the hotel manager about our reservation.', exHi: 'उसने हमारे आरक्षण के बारे में होटल प्रबंधक से बात की।', exEs: 'Habló con el gerente del hotel sobre nuestra reserva.', ic: '🗣️' },
    { w: 'knew', p: '/nuː/', m: 'Was aware of through observation or inquiry (past of know)', hi: 'जानता था / पता था', es: 'supo / sabía / conocía', fr: 'a su / savait', de: 'wusste / gekannt', pt: 'soube / sabia', zh: '知道 / 认识', ar: 'عَرَفَ / عَلِمَ', ja: '知っていた', ru: 'знал / было известно', ex: 'We knew all the correct answers on the grammar quiz.', exHi: 'हम व्याकरण प्रश्नोत्तरी के सभी सही उत्तर जानते थे।', exEs: 'Sabíamos todas las respuestas correctas en la prueba de gramática.', ic: '🧠' },
    { w: 'found', p: '/faʊnd/', m: 'Discovered by search or by chance (past of find)', hi: 'पाया / मिला / ढूँढ निकाला', es: 'encontró / encontré', fr: 'a trouvé / trouvé', de: 'fand / gefunden', pt: 'encontrou / achei', zh: '找到了 / 发现', ar: 'وَجَدَ', ja: '見つけた', ru: 'нашел / обнаружил', ex: 'She found her lost wallet under the car seat.', exHi: 'उसका खोया हुआ बटुआ उसे कार की सीट के नीचे मिला।', exEs: 'Ella encontró su billetera perdida debajo del asiento del coche.', ic: '🔍' },
    { w: 'left', p: '/left/', m: 'Departed from a location; abandoned (past of leave)', hi: 'रवाना हुआ / छोड़ दिया / निकला', es: 'salió / se fue / dejé', fr: 'est parti / quitté', de: 'ging weg / verlassen', pt: 'saiu / partiu', zh: '离开了 / 留下', ar: 'غادَرَ / تَرَكَ', ja: '出発した / 出た', ru: 'ушел / уехал / покинул', ex: 'We left the office at six o\'clock and went straight home.', exHi: 'हम छह बजे कार्यालय से निकले और सीधे घर चले गए।', exEs: 'Salimos de la oficina a las seis y fuimos directamente a casa.', ic: '🚪' },
    { w: 'told', p: '/toʊld/', m: 'Communicated information or facts to someone (past of tell)', hi: 'बताया / कहा', es: 'dijo / contó / conté', fr: 'a dit / raconté', de: 'erzählte / gesagt', pt: 'disse / contou', zh: '告诉了', ar: 'أَخْبَرَ', ja: '伝えた / 話した', ru: 'рассказал / сообщил', ex: 'The tour guide told us fascinating stories about the castle.', exHi: 'टूर गाइड ने हमें महल के बारे में आकर्षक कहानियाँ बताईं।', exEs: 'El guía turístico nos contó historias fascinantes sobre el castillo.', ic: '💬' },
    { w: 'thought', p: '/θɑːt/', m: 'Had a particular opinion or idea (past of think)', hi: 'सोचा / विचार किया', es: 'pensó / pensé / creí', fr: 'a pensé / cru', de: 'dachte / gedacht', pt: 'pensou / achei', zh: '想 / 认为', ar: 'ظَنَّ / فكَّرَ', ja: '思った / 考えた', ru: 'думал / считал', ex: 'I thought the test was quite fair and straightforward.', exHi: 'मुझे लगा कि परीक्षा काफी उचित और सीधी थी।', exEs: 'Pensé que el examen fue bastante justo y directo.', ic: '💭' }
  ],
  chunks: [
    { phrase: 'I went to the supermarket yesterday.', meaning: 'Stating past shopping errand destination', hi: 'मैं कल सुपरमार्केट गया था।', es: 'Fui al supermercado ayer.', fr: 'Je suis allé au supermarché hier.', de: 'Ich bin gestern in den Supermarkt gegangen.', pt: 'Fui ao supermercado ontem.', zh: '我昨天去了超市。', ar: 'ذهبتُ إلى السوبرماركت أمس.', ja: '昨日スーパーに行きました。', ru: 'Вчера я ходил в супермаркет.', note: 'Irregular: go -> went', ic: '🛒' },
    { phrase: 'We had dinner with friends last night.', meaning: 'Describing past evening meal with company', hi: 'हमने कल रात दोस्तों के साथ रात का खाना खाया।', es: 'Cenamos con amigos anoche.', fr: 'Nous avons dîné avec des amis hier soir.', de: 'Wir haben gestern Abend mit Freunden zu Abend gegessen.', pt: 'Jantamos com amigos ontem à noite.', zh: '昨晚我们和朋友一起吃了晚饭。', ar: 'تناولنا العشاء مع الأصدقاء الليلة الماضية.', ja: '昨夜友達と夕食をとりました。', ru: 'Вчера вечером мы ужинали с друзьями.', note: 'Irregular: have -> had', ic: '🍽️' },
    { phrase: 'She bought a new laptop last week.', meaning: 'Stating past technology purchase', hi: 'उसने पिछले हफ्ते एक नया लैपटॉप खरीदा था।', es: 'Ella compró una computadora portátil nueva la semana pasada.', fr: 'Elle a acheté un nouvel ordinateur portable la semaine dernière.', de: 'Sie hat letzte Woche einen neuen Laptop gekauft.', pt: 'Ela comprou um laptop novo na semana passada.', zh: '她上周买了一台新笔记本电脑。', ar: 'اشترتْ حاسوباً محمولاً جديداً الأسبوع الماضي.', ja: '彼女は先週新しいノートパソコンを買いました。', ru: 'Она купила новый ноутбук на прошлой неделе.', note: 'Irregular: buy -> bought', ic: '💻' },
    { phrase: 'I took the train to the airport.', meaning: 'Specifying past transportation choice', hi: 'मैं ट्रेन से हवाई अड्डे गया था।', es: 'Tomé el tren al aeropuerto.', fr: 'J\'ai pris le train pour l\'aéroport.', de: 'Ich habe den Zug zum Flughafen genommen.', pt: 'Peguei o trem para o aeroporto.', zh: '我坐火车去了机场。', ar: 'ركبتُ القطار إلى المطار.', ja: '電車で空港に行きました。', ru: 'Я поехал в аэропорт на поезде.', note: 'Irregular: take -> took', ic: '🚆' },
    { phrase: 'We saw a great movie on Friday.', meaning: 'Describing entertainment experience', hi: 'हमने शुक्रवार को एक बेहतरीन फिल्म देखी।', es: 'Vimos una gran película el viernes.', fr: 'Nous avons vu un super film vendredi.', de: 'Wir haben am Freitag einen tollen Film gesehen.', pt: 'Vimos um ótimo filme na sexta-feira.', zh: '我们周五看了一部很棒的电影。', ar: 'شاهدنا فيلماً رائعاً يوم الجمعة.', ja: '金曜日に素晴らしい映画を見ました。', ru: 'В пятницу мы посмотрели отличный фильм.', note: 'Irregular: see -> saw', ic: '🎬' },
    { phrase: 'They ate delicious street food in Bangkok.', meaning: 'Describing past culinary experience abroad', hi: 'उन्होंने बैंकॉक में स्वादिष्ट स्ट्रीट फूड खाया।', es: 'Comieron deliciosa comida callejera en Bangkok.', fr: 'Ils ont mangé de la délicieuse street food à Bangkok.', de: 'Sie aßen köstliches Street Food in Bangkok.', pt: 'Eles comeram comida de rua deliciosa em Bangkok.', zh: '他们在曼谷吃了美味的街头小吃。', ar: 'أكلوا طعام شوارع لذيذ في بانكوك.', ja: '彼らはバンコクで美味しい屋台料理を食べました。', ru: 'Они ели вкусную уличную еду в Бангкоке.', note: 'Irregular: eat -> ate', ic: '🍜' },
    { phrase: 'I got up early this morning.', meaning: 'Stating past morning wake-up routine', hi: 'मैं आज सुबह जल्दी उठा।', es: 'Me levanté temprano esta mañana.', fr: 'Je me suis levé tôt ce matin.', de: 'Ich bin heute Morgen früh aufgestanden.', pt: 'Acordei cedo esta manhã.', zh: '我今天早上起得很早。', ar: 'استيقظتُ مبكراً هذا الصباح.', ja: '今朝は早く起きました。', ru: 'Сегодня утром я встал рано.', note: 'get up -> got up', ic: '⏰' },
    { phrase: 'He gave me his business card.', meaning: 'Describing past exchange of contact details', hi: 'उसने मुझे अपना बिजनेस कार्ड दिया।', es: 'Él me dio su tarjeta de visita.', fr: 'Il m\'a donné sa carte de visite.', de: 'Er gab mir seine Visitenkarte.', pt: 'Ele me deu seu cartão de visitas.', zh: '他给了我他的名片。', ar: 'أعطاني بطاقة عمله.', ja: '彼は私に名刺をくれました。', ru: 'Он дал мне свою визитку.', note: 'give -> gave', ic: '💼' }
  ],
  grammar: {
    title: 'Irregular Simple Past Verbs (Common Forms & Patterns)',
    concept: 'Forming positive past tense sentences with non-standard irregular verbs that change root vowels or words',
    patterns: [
      {
        title: 'Core Movement & Possession Irregulars',
        structure: 'Subject + went / had / bought / took / came + Details + Time Marker',
        rule: 'Unlike regular verbs, irregular past verbs do not add -ed. Each verb has a unique past form: go -> went, have -> had, buy -> bought, take -> took, come -> came, get -> got. The same past form is used for all subjects (I, you, he, she, we, they).',
        examples: [
          { en: 'She went to Paris and took many photographs.', hi: 'वह पेरिस गई और उसने कई तस्वीरें लीं।', es: 'Ella fue a París y tomó muchas fotos.' },
          { en: 'They had lunch together at the cafe.', hi: 'उन्होंने कैफे में एक साथ दोपहर का भोजन किया।', es: 'Almorzaron juntos en la cafetería.' }
        ]
      },
      {
        title: 'Sensory, Communication & Action Irregulars',
        structure: 'Subject + saw / ate / drank / wrote / spoke / told + Object',
        rule: 'Sensory and communicative irregulars: see -> saw, eat -> ate, drink -> drank, write -> wrote, speak -> spoke, tell -> told, make -> made, give -> gave. Note: read /riːd/ in past is written "read" but pronounced /red/.',
        examples: [
          { en: 'We ate Italian food and drank red wine last night.', hi: 'हमने कल रात इतालवी खाना खाया और रेड वाइन पी।', es: 'Comimos comida italiana y bebimos vino tinto anoche.' },
          { en: 'I spoke to my manager and wrote the report.', hi: 'मैंने अपने प्रबंधक से बात की और रिपोर्ट लिखी।', es: 'Hablé con mi gerente y escribí el informe.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'I goed to the cinema yesterday.', cor: 'I went to the cinema yesterday.', exp: '"Go" is irregular; its past tense is "went", never "goed".', hi: '"Go" की भूतकाल क्रिया "went" है, "goed" नहीं।', es: '"Go" es irregular; su forma pasada es "went", nunca "goed".' },
    { inc: 'She buyed a new car last month.', cor: 'She bought a new car last month.', exp: '"Buy" changes irregularly to "bought", never "buyed".', hi: '"Buy" का भूतकाल "bought" होता है, "buyed" गलत है।', es: '"Buy" cambia irregularmente a "bought", nunca "buyed".' },
    { inc: 'We eated pizza for lunch.', cor: 'We ate pizza for lunch.', exp: '"Eat" has the irregular past form "ate", never "eated".', hi: '"Eat" का भूतकाल "ate" है, "eated" नहीं।', es: '"Eat" tiene la forma irregular "ate", nunca "eated".' },
    { inc: 'He taked my umbrella by mistake.', cor: 'He took my umbrella by mistake.', exp: '"Take" changes irregularly to "took", not "taked".', hi: '"Take" का भूतकाल "took" होता है, "taked" नहीं।', es: '"Take" cambia a "took", no "taked".' },
    { inc: 'I seed my teacher at the mall.', cor: 'I saw my teacher at the mall.', exp: '"See" is irregular: the past tense is "saw".', hi: '"See" का भूतकाल "saw" है, "seed" नहीं।', es: 'El pasado de "see" es "saw", nunca "seed".' }
  ],
  dialogues: [
    {
      title: 'Discussing What You Bought on the Weekend',
      context: 'Chloe and Ben are having lunch at their workplace cafeteria.',
      charA: { name: 'Chloe', av: '👩‍💼', role: 'Colleague' },
      charB: { name: 'Ben', av: '👨‍💼', role: 'Colleague' },
      turns: [
        { spk: 'Chloe', text: 'Hi Ben! Did you do anything fun over the weekend?', hi: 'नमस्ते बेन! क्या आपने सप्ताहांत में कुछ मज़ेदार किया?', es: '¡Hola Ben! ¿Hiciste algo divertido durante el fin de semana?' },
        { spk: 'Ben', text: 'Yes, I went to the big shopping center on Saturday and bought some new running shoes.', hi: 'हाँ, मैं शनिवार को बड़े शॉपिंग सेंटर गया और दौड़ने के नए जूते खरीदे।', es: 'Sí, fui al gran centro comercial el sábado y compré zapatillas para correr nuevas.' },
        { spk: 'Chloe', text: 'Nice! Where did you eat afterwards?', hi: 'बढ़िया! बाद में आपने कहाँ खाना खाया?', es: '¡Genial! ¿Dónde comiste después?' },
        { spk: 'Ben', text: 'We ate at a cozy Japanese restaurant and drank hot green tea.', hi: 'हमने एक आरामदायक जापानी रेस्तरां में खाना खाया और गर्म हरी चाय पी।', es: 'Comimos en un acogedor restaurante japonés y bebimos té verde caliente.' },
        { spk: 'Chloe', text: 'That sounds like a perfect Saturday afternoon!', hi: 'यह शनिवार की दोपहर बिताने का बेहतरीन तरीका लगता है!', es: '¡Eso suena como un sábado perfecto por la tarde!' }
      ]
    },
    {
      title: 'A Busy Morning Story',
      context: 'Sam tells his friend Emma why he was slightly late for their morning meeting.',
      charA: { name: 'Sam', av: '👨', role: 'Friend' },
      charB: { name: 'Emma', av: '👩', role: 'Friend' },
      turns: [
        { spk: 'Sam', text: 'I am so sorry I am late! I got up late and left my house in a hurry.', hi: 'देर से आने के लिए मुझे बहुत खेद है! मैं देर से उठा और जल्दी में घर से निकला।', es: '¡Siento mucho llegar tarde! Me levanté tarde y salí de casa con prisa.' },
        { spk: 'Emma', text: 'Don\'t worry at all! Did you take the bus or drive?', hi: 'बिल्कुल चिंता मत करो! क्या तुम बस से आए या गाड़ी चलाकर?', es: '¡No te preocupes en absoluto! ¿Tomaste el autobús o manejaste?' },
        { spk: 'Sam', text: 'I took the subway, but I saw a huge crowd at the interchange station.', hi: 'मैंने सबवे लिया, लेकिन मैंने इंटरचेंज स्टेशन पर भारी भीड़ देखी।', es: 'Tomé el metro, pero vi una gran multitud en la estación de transbordo.' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u03_l40_p1', type: 'multiple_choice', prompt: 'Select the correct irregular past tense of "go":', targetSentence: 'We went to the beach yesterday.', options: [{ id: '1', text: 'went', isCorrect: true }, { id: '2', text: 'goed', isCorrect: false }, { id: '3', text: 'gone', isCorrect: false }, { id: '4', text: 'goes', isCorrect: false }] },
    { id: 'ex_u03_l40_p2', type: 'fill_blank', prompt: 'Fill in the blank with the past tense of "buy":', targetSentence: 'She bought a warm winter jacket on sale.', options: [{ id: '1', text: 'bought', isCorrect: true }, { id: '2', text: 'buyed', isCorrect: false }, { id: '3', text: 'buying', isCorrect: false }, { id: '4', text: 'buys', isCorrect: false }] },
    { id: 'ex_u03_l40_p3', type: 'word_ordering', prompt: 'Assemble the irregular past sentence:', targetSentence: 'I had lunch with my colleagues yesterday', wordBank: ['I', 'had', 'lunch', 'with', 'my', 'colleagues', 'yesterday', 'have', 'having'] },
    { id: 'ex_u03_l40_p4', type: 'listening', prompt: 'Listen and identify what the person drank:', audioText: 'He drank two cups of black coffee this morning.', options: [{ id: '1', text: 'Two cups of black coffee', isCorrect: true }, { id: '2', text: 'A glass of orange juice', isCorrect: false }, { id: '3', text: 'A bottle of mineral water', isCorrect: false }, { id: '4', text: 'Hot tea with lemon', isCorrect: false }] },
    { id: 'ex_u03_l40_p5', type: 'error_correction', prompt: 'Correct the irregular past error:', targetSentence: 'We ate sushi for dinner last night.', errorSentence: 'We eated sushi for dinner last night.', options: [{ id: '1', text: 'We ate sushi for dinner last night.', isCorrect: true }, { id: '2', text: 'We eat sushi for dinner last night.', isCorrect: false }, { id: '3', text: 'We are ate sushi.', isCorrect: false }, { id: '4', text: 'We were eated sushi.', isCorrect: false }] },
    { id: 'ex_u03_l40_p6', type: 'dialogue_completion', prompt: 'Choose the correct past response:', dialogueContext: { speakerA: 'How did you get to the conference center?', lineA: 'How did you get to the conference center?', speakerB: 'I took the express train from the central station.' }, options: [{ id: '1', text: 'I took the express train from the central station.', isCorrect: true }, { id: '2', text: 'I take the train tomorrow.', isCorrect: false }, { id: '3', text: 'I taked the car yesterday.', isCorrect: false }, { id: '4', text: 'I am taking bus next time.', isCorrect: false }] },
    { id: 'ex_u03_l40_p7', type: 'translation', prompt: 'Translate into English:', sourceSentence: 'कल मैंने हवाई अड्डे पर अपने पुराने शिक्षक को देखा।', sourceTranslations: { hi: 'कल मैंने हवाई अड्डे पर अपने पुराने शिक्षक को देखा।', es: 'Ayer vi a mi antiguo profesor en el aeropuerto.' }, targetSentence: 'I saw my old teacher at the airport yesterday', wordBank: ['I', 'saw', 'my', 'old', 'teacher', 'at', 'the', 'airport', 'yesterday', 'see', 'seed'] },
    { id: 'ex_u03_l40_p8', type: 'speaking', prompt: 'Speak this sentence with correct past irregular pronunciation:', targetSentence: 'She made a delicious chocolate cake for the party.', audioText: 'She made a delicious chocolate cake for the party.' },
    { id: 'ex_u03_l40_p9', type: 'listen_and_type', prompt: 'Listen and write the sentence:', audioText: 'They came to our house at seven o clock.', targetSentence: 'They came to our house at seven o clock', wordBank: ['They', 'came', 'to', 'our', 'house', 'at', 'seven', 'o', 'clock', 'come', 'comed'] },
    { id: 'ex_u03_l40_p10', type: 'multiple_choice', prompt: 'What is the past tense of "see"?', targetSentence: 'saw', options: [{ id: '1', text: 'saw', isCorrect: true }, { id: '2', text: 'seed', isCorrect: false }, { id: '3', text: 'seen', isCorrect: false }, { id: '4', text: 'sees', isCorrect: false }] },
    { id: 'ex_u03_l40_p11', type: 'fill_blank', prompt: 'Complete with the past tense of "give":', targetSentence: 'He gave me a valuable travel guide.', options: [{ id: '1', text: 'gave', isCorrect: true }, { id: '2', text: 'gived', isCorrect: false }, { id: '3', text: 'given', isCorrect: false }, { id: '4', text: 'giving', isCorrect: false }] },
    { id: 'ex_u03_l40_p12', type: 'match_pairs', prompt: 'Match base verbs with their irregular past forms:', options: [{ id: 'm1', text: 'go' }, { id: 'm1_m', text: 'went' }, { id: 'm2', text: 'buy' }, { id: 'm2_m', text: 'bought' }, { id: 'm3', text: 'take' }, { id: 'm3_m', text: 'took' }, { id: 'm4', text: 'eat' }, { id: 'm4_m', text: 'ate' }] },
    { id: 'ex_u03_l40_p13', type: 'word_ordering', prompt: 'Assemble the past sentence:', targetSentence: 'We met our friends outside the museum at noon', wordBank: ['We', 'met', 'our', 'friends', 'outside', 'the', 'museum', 'at', 'noon', 'meet', 'meeted'] },
    { id: 'ex_u03_l40_p14', type: 'multiple_choice', prompt: 'Which sentence has the correct past tense form?', targetSentence: 'I read an interesting novel on the train yesterday.', options: [{ id: '1', text: 'I read an interesting novel on the train yesterday.', isCorrect: true }, { id: '2', text: 'I readed a novel yesterday.', isCorrect: false }, { id: '3', text: 'I was readed a novel.', isCorrect: false }, { id: '4', text: 'I did readed a book.', isCorrect: false }] },
    { id: 'ex_u03_l40_p15', type: 'fill_blank', prompt: 'Complete with the past of "find":', targetSentence: 'She found her keys inside the kitchen drawer.', options: [{ id: '1', text: 'found', isCorrect: true }, { id: '2', text: 'finded', isCorrect: false }, { id: '3', text: 'finding', isCorrect: false }, { id: '4', text: 'finds', isCorrect: false }] }
  ],
  review: [
    { id: 'ex_u03_l40_rev1', type: 'multiple_choice', prompt: 'Which sentence correctly uses an irregular past verb?', targetSentence: 'David wrote a detailed report for his manager.', options: [{ id: '1', text: 'David wrote a detailed report for his manager.', isCorrect: true }, { id: '2', text: 'David writed a report.', isCorrect: false }, { id: '3', text: 'David write a report yesterday.', isCorrect: false }, { id: '4', text: 'David was wrote a report.', isCorrect: false }] },
    { id: 'ex_u03_l40_rev2', type: 'word_ordering', prompt: 'Build the past experience sentence:', targetSentence: 'They left the office early and went to the gym', wordBank: ['They', 'left', 'the', 'office', 'early', 'and', 'went', 'to', 'the', 'gym', 'leave', 'go'] },
    { id: 'ex_u03_l40_rev3', type: 'fill_blank', prompt: 'Select the past tense form of "speak":', targetSentence: 'She spoke to the hotel receptionist about room service.', options: [{ id: '1', text: 'spoke', isCorrect: true }, { id: '2', text: 'speaked', isCorrect: false }, { id: '3', text: 'spoken', isCorrect: false }, { id: '4', text: 'speaking', isCorrect: false }] },
    { id: 'ex_u03_l40_rev4', type: 'error_correction', prompt: 'Fix the irregular past verb error:', targetSentence: 'I bought some fresh bread this morning.', errorSentence: 'I buyed some fresh bread this morning.', options: [{ id: '1', text: 'I bought some fresh bread this morning.', isCorrect: true }, { id: '2', text: 'I buy some fresh bread.', isCorrect: false }, { id: '3', text: 'I was buy some bread.', isCorrect: false }, { id: '4', text: 'I buying fresh bread.', isCorrect: false }] },
    { id: 'ex_u03_l40_rev5', type: 'translation', prompt: 'Translate into English:', sourceSentence: 'उसने मुझे अपनी कार की चाबियाँ दीं।', sourceTranslations: { hi: 'उसने मुझे अपनी कार की चाबियाँ दीं।', es: 'Él me dio las llaves de su coche.' }, targetSentence: 'He gave me the keys to his car', wordBank: ['He', 'gave', 'me', 'the', 'keys', 'to', 'his', 'car', 'gived', 'give'] }
  ],
  assessment: [
    { id: 'ex_u03_l40_a1', type: 'multiple_choice', prompt: 'Which of the following verbs is irregular in the simple past?', targetSentence: 'buy -> bought', options: [{ id: '1', text: 'buy -> bought', isCorrect: true }, { id: '2', text: 'work -> worked', isCorrect: false }, { id: '3', text: 'visit -> visited', isCorrect: false }, { id: '4', text: 'clean -> cleaned', isCorrect: false }] },
    { id: 'ex_u03_l40_a2', type: 'fill_blank', prompt: 'Fill in the blank with the past form of "get":', targetSentence: 'We got to the station five minutes before departure.', options: [{ id: '1', text: 'got', isCorrect: true }, { id: '2', text: 'getted', isCorrect: false }, { id: '3', text: 'getting', isCorrect: false }, { id: '4', text: 'gets', isCorrect: false }] },
    { id: 'ex_u03_l40_a3', type: 'word_ordering', prompt: 'Assemble the story sentence:', targetSentence: 'Maria ate breakfast and drank a glass of orange juice', wordBank: ['Maria', 'ate', 'breakfast', 'and', 'drank', 'a', 'glass', 'of', 'orange', 'juice', 'eat', 'drink'] },
    { id: 'ex_u03_l40_a4', type: 'listening', prompt: 'Listen and identify where the speaker went:', audioText: 'We went to the Italian restaurant and had seafood pasta.', options: [{ id: '1', text: 'Italian restaurant for seafood pasta', isCorrect: true }, { id: '2', text: 'Coffee shop for a sandwich', isCorrect: false }, { id: '3', text: 'Supermarket for groceries', isCorrect: false }, { id: '4', text: 'Cinema to watch a movie', isCorrect: false }] },
    { id: 'ex_u03_l40_a5', type: 'speaking', prompt: 'Speak this sentence clearly:', targetSentence: 'I saw an amazing documentary on television last night.', audioText: 'I saw an amazing documentary on television last night.' }
  ]
};

// =========================================================================
// LESSON 41: Past Simple Negative & Questions (did not / didn't, Did you...?)
// =========================================================================
export const RAW_LESSON_41: LessonRaw = {
  num: 41,
  id: 'lesson_a1_3_41',
  title: 'Past Simple Negatives & Questions (did not / didn\'t, Did you...?)',
  icon: '❓',
  estMin: 25,
  objTitle: 'Forming Past Simple Negative Sentences with "didn\'t" and Inquiring with "Did you...?" and Wh- Question Words',
  objDesc: 'Master negative sentences in the past simple with "did not / didn\'t + base verb" (I didn\'t go, she didn\'t call) and yes/no questions ("Did you sleep well?", "Did they arrive?"). Learn Wh- past questions ("What did you do?", "Where did you go?", "Who did you meet?", "When did it happen?") with short answers ("Yes, I did" / "No, I didn\'t").',
  objHi: 'भूतकाल के नकारात्मक वाक्य ("didn\'t + base verb": I didn\'t see, he didn\'t come) और प्रश्न ("Did you go?", "What did you buy?", "Where did you stay?") पूछना सीखें। संक्षिप्त उत्तर (Yes, I did / No, I didn\'t) देने का अभ्यास करें।',
  objEs: 'Domina las oraciones negativas en pasado simple con "didn\'t + verbo base" (I didn\'t know) y preguntas con "Did you...?" y palabras Wh- ("Where did you go?", "What did you do?"). Practica respuestas cortas ("Yes, I did" / "No, I didn\'t").',
  canDo: [
    'Form negative past statements: "I didn\'t receive your email yesterday"',
    'Ask yes/no past questions: "Did you enjoy the concert last night?"',
    'Give short answers: "Yes, I did" / "No, I didn\'t"',
    'Ask Wh- past questions: "Where did you buy that jacket?" / "What time did you arrive?"',
    'Avoid double past errors: use "didn\'t go", never "didn\'t went"'
  ],
  canDoHi: [
    'नकारात्मक भूतकाल वाक्य: "I didn\'t watch the news"',
    'हाँ/ना वाले प्रश्न: "Did you call him yesterday?"',
    'संक्षिप्त उत्तर: "Yes, I did" / "No, I didn\'t"',
    'Wh- प्रश्न: "Where did you go on vacation?", "What did you eat?"'
  ],
  canDoEs: [
    'Formar oraciones negativas: "I didn\'t see that movie"',
    'Hacer preguntas de sí/no: "Did you finish the report?"',
    'Respuestas cortas: "Yes, I did / No, I didn\'t"',
    'Preguntas con Wh-: "Where did you go?", "What did you buy?"'
  ],
  vocab: [
    { w: 'didn\'t / did not', p: '/ˈdɪd.ənt/', m: 'Auxiliary contraction used to form negative simple past statements', hi: 'नहीं किया / नहीं (भूतकाल में)', es: 'no (en pasado)', fr: 'n\'a pas / ne pas (passé)', de: 'nicht (Vergangenheit)', pt: 'não (no passado)', zh: '没有（过去式否定）', ar: 'لم (للنفي في الماضي)', ja: '〜しなかった', ru: 'не (в прошедшем времени)', ex: 'I didn\'t receive any phone calls yesterday afternoon.', exHi: 'मुझे कल दोपहर कोई फोन कॉल नहीं आया।', exEs: 'No recibí ninguna llamada telefónica ayer por la tarde.', ic: '🚫' },
    { w: 'Did you...?', p: '/dɪd juː/', m: 'Standard question frame to ask about past actions or events', hi: 'क्या आपने ... किया?', es: '¿Hiciste...? / ¿Usted hizo...?', fr: 'As-tu...? / Avez-vous...?', de: 'Hast du...? / Haben Sie...?', pt: 'Você...?', zh: '你……了吗？', ar: 'هل...؟ (في الماضي)', ja: '〜しましたか？', ru: 'Вы ...? / Ты ...?', ex: 'Did you lock the front door when you left this morning?', exHi: 'क्या आपने आज सुबह निकलते समय सामने का दरवाजा बंद किया था?', exEs: '¿Cerraste la puerta principal cuando saliste esta mañana?', ic: '❓' },
    { w: 'What did you do?', p: '/wɑːt dɪd juː duː/', m: 'Question inquiring about general past activities or actions', hi: 'आपने क्या किया?', es: '¿Qué hiciste?', fr: 'Qu\'as-tu fait ?', de: 'Was hast du gemacht?', pt: 'O que você fez?', zh: '你做了什么？', ar: 'ماذا فعلتَ؟', ja: '何をしましたか？', ru: 'Что вы делали? / Что ты сделал?', ex: 'What did you do during the bank holiday weekend?', exHi: 'आपने बैंक अवकाश के सप्ताहांत के दौरान क्या किया?', exEs: '¿Qué hiciste durante el fin de semana festivo?', ic: '🤔' },
    { w: 'Where did you go?', p: '/wer dɪd juː ɡoʊ/', m: 'Question asking about a past destination or location', hi: 'आप कहाँ गए थे?', es: '¿Adónde fuiste?', fr: 'Où es-tu allé ?', de: 'Wo bist du hingegangen?', pt: 'Aonde você foi?', zh: '你去哪里了？', ar: 'إلى أين ذهبتَ؟', ja: 'どこに行きましたか？', ru: 'Куда вы ходили/ездили?', ex: 'Where did you go for your summer vacation last July?', exHi: 'आप पिछले जुलाई में अपनी गर्मियों की छुट्टियों के लिए कहाँ गए थे?', exEs: '¿Adónde fuiste de vacaciones de verano el pasado julio?', ic: '🗺️' },
    { w: 'When did it happen?', p: '/wen dɪd ɪt ˈhæp.ən/', m: 'Question asking for the specific time or date of a past event', hi: 'यह कब हुआ था?', es: '¿Cuándo sucedió / ocurrió?', fr: 'Quand cela s\'est-il passé ?', de: 'Wann ist es passiert?', pt: 'Quando isso aconteceu?', zh: '这是什么时候发生的？', ar: 'متى حدثَ ذلك؟', ja: 'それはいつ起こりましたか？', ru: 'Когда это произошло?', ex: 'When did the delivery truck arrive at the warehouse?', exHi: 'डिलीवरी ट्रक गोदाम में कब पहुँचा?', exEs: '¿Cuándo llegó el camión de reparto al almacén?', ic: '⏰' },
    { w: 'Why did you call?', p: '/waɪ dɪd juː kɑːl/', m: 'Question asking for the reason behind a past phone call or action', hi: 'आपने क्यों फोन किया था?', es: '¿Por qué llamaste?', fr: 'Pourquoi as-tu appelé ?', de: 'Warum hast du angerufen?', pt: 'Por que você ligou?', zh: '你为什么打电话？', ar: 'لماذا اتصلتَ؟', ja: 'なぜ電話したのですか？', ru: 'Почему ты позвонил?', ex: 'Why did you call me so late last night?', exHi: 'आपने मुझे कल रात इतनी देर से फोन क्यों किया था?', exEs: '¿Por qué me llamaste tan tarde anoche?', ic: '📞' },
    { w: 'Who did you meet?', p: '/huː dɪd juː miːt/', m: 'Question asking about people encountered in the past', hi: 'आप किससे मिले थे?', es: '¿Con quién te encontraste / te reuniste?', fr: 'Qui as-tu rencontré ?', de: 'Wen hast du getroffen?', pt: 'Quem você encontrou?', zh: '你见到了谁？', ar: 'من قابلتَ؟', ja: '誰に会いましたか？', ru: 'С кем вы встречались?', ex: 'Who did you meet at the business networking event?', exHi: 'आप बिजनेस नेटवर्किंग इवेंट में किससे मिले थे?', exEs: '¿Con quién te reuniste en el evento de networking empresarial?', ic: '👥' },
    { w: 'How did you know?', p: '/haʊ dɪd juː noʊ/', m: 'Question inquiring about the source of past information', hi: 'आपको कैसे पता चला?', es: '¿Cómo lo supiste?', fr: 'Comment l\'as-tu su ?', de: 'Woher wusstest du das?', pt: 'Como você soube?', zh: '你怎么知道的？', ar: 'كيف عرفتَ؟', ja: 'どうして知ったのですか？', ru: 'Как ты узнал?', ex: 'How did you know about the surprise birthday party?', exHi: 'आपको सरप्राइज बर्थडे पार्टी के बारे में कैसे पता चला?', exEs: '¿Cómo supiste sobre la fiesta sorpresa de cumpleaños?', ic: '💡' },
    { w: 'hear', p: '/hɪr/', m: 'Perceive with the ear the sound made by someone or something', hi: 'सुनना', es: 'oír / escuchar', fr: 'entendre', de: 'hören', pt: 'ouvir', zh: '听到', ar: 'يسمع', ja: '聞く / 聞こえる', ru: 'слышать', ex: 'I didn\'t hear the alarm clock because I was sleeping deeply.', exHi: 'मुझे अलार्म घड़ी की आवाज़ सुनाई नहीं दी क्योंकि मैं गहरी नींद में था।', exEs: 'No escuché el despertador porque estaba profundamente dormido.', ic: '👂' },
    { w: 'understand', p: '/ˌʌn.dɚˈstænd/', m: 'Perceive the intended meaning of words or ideas', hi: 'समझना', es: 'entender / comprender', fr: 'comprendre', de: 'verstehen', pt: 'entender / compreender', zh: '理解 / 明白', ar: 'يفهم', ja: '理解する / わかる', ru: 'понимать', ex: 'We didn\'t understand the instructions on the test.', exHi: 'हम परीक्षा के निर्देशों को नहीं समझ पाए।', exEs: 'No entendimos las instrucciones del examen.', ic: '🧠' },
    { w: 'notice', p: '/ˈnoʊ.t̬ɪs/', m: 'Become aware of something through observation', hi: 'ध्यान देना / देखना', es: 'notar / darse cuenta', fr: 'remarquer', de: 'bemerken', pt: 'notar / perceber', zh: '注意到', ar: 'يلاحظ', ja: '気づく', ru: 'замечать / обратить внимание', ex: 'She didn\'t notice the sign on the door.', exHi: 'उसने दरवाजे पर लगे साइन बोर्ड पर ध्यान नहीं दिया।', exEs: 'Ella no se dio cuenta del letrero en la puerta.', ic: '👁️' },
    { w: 'remember', p: '/rɪˈmem.bɚ/', m: 'Have in or be able to bring to one\'s mind an awareness of someone or something', hi: 'याद रखना / स्मरण करना', es: 'recordar', fr: 'se souvenir / rappeler', de: 'sich erinnern', pt: 'lembrar', zh: '记得 / 回忆起', ar: 'يتذكر', ja: '覚えている / 思い出す', ru: 'помнить / вспомнить', ex: 'I didn\'t remember her email address this morning.', exHi: 'मुझे आज सुबह उसका ईमेल पता याद नहीं था।', exEs: 'No recordé su dirección de correo electrónico esta mañana.', ic: '📝' },
    { w: 'forget', p: '/fɚˈɡet/', m: 'Fail to remember or bring to mind', hi: 'भूलना / भूल जाना', es: 'olvidar', fr: 'oublier', de: 'vergessen', pt: 'esquecer', zh: '忘记', ar: 'ينسى', ja: '忘れる', ru: 'забывать', ex: 'Did you forget to turn off the lights before leaving?', exHi: 'क्या आप निकलने से पहले लाइट बंद करना भूल गए थे?', exEs: '¿Olvidaste apagar las luces antes de salir?', ic: '💭' },
    { w: 'sleep', p: '/sliːp/', m: 'Rest with eyes closed and consciousness suspended', hi: 'सोना', es: 'dormir', fr: 'dormir', de: 'schlafen', pt: 'dormir', zh: '睡觉', ar: 'ينام', ja: '眠る / 睡眠をとる', ru: 'спать', ex: 'Did you sleep well at the hotel last night?', exHi: 'क्या आप कल रात होटल में अच्छी तरह सोए थे?', exEs: '¿Dormiste bien en el hotel anoche?', ic: '🛌' },
    { w: 'enjoy', p: '/ɪnˈdʒɔɪ/', m: 'Take pleasure in an activity or event', hi: 'आनंद लेना / पसंद आना', es: 'disfrutar', fr: 'apprécier / aimer', de: 'genießen', pt: 'aproveitar / desfrutar', zh: '享受 / 喜爱', ar: 'يستمتع', ja: '楽しむ', ru: 'наслаждаться / нравиться', ex: 'Did you enjoy the musical performance yesterday?', exHi: 'क्या आपने कल संगीत प्रदर्शन का आनंद लिया?', exEs: '¿Disfrutaste de la actuación musical ayer?', ic: '🎶' },
    { w: 'find', p: '/faɪnd/', m: 'Discover the location of something lost or sought', hi: 'पाना / ढूँढना', es: 'encontrar', fr: 'trouver', de: 'finden', pt: 'encontrar', zh: '找到', ar: 'يجد', ja: '見つける', ru: 'находить', ex: 'Did you find your passport in the suitcase?', exHi: 'क्या आपको सूटकेस में अपना पासपोर्ट मिल गया?', exEs: '¿Encontraste tu pasaporte en la maleta?', ic: '🔎' },
    { w: 'short answer', p: '/ʃɔːrt ˈæn.sɚ/', m: 'Standard concise response formula (Yes, I did / No, I didn\'t)', hi: 'संक्षिप्त उत्तर', es: 'respuesta corta', fr: 'réponse courte', de: 'Kurzantwort', pt: 'resposta curta', zh: '简短回答', ar: 'إجابة قصيرة', ja: '簡潔な返答', ru: 'краткий ответ', ex: '"Did you call him?" — "Yes, I did."', exHi: '"क्या आपने उसे फोन किया था?" — "हाँ, मैंने किया था।"', exEs: '"¿Lo llamaste?" — "Sí, lo hice."', ic: '💬' },
    { w: 'anything', p: '/ˈen.i.θɪŋ/', m: 'Used in questions and negatives to refer to a thing of any kind', hi: 'कुछ भी', es: 'nada / algo', fr: 'rien / quelque chose', de: 'etwas / nichts', pt: 'nada / alguma coisa', zh: '任何事情 / 什么东西', ar: 'أي شيء', ja: '何か / 何も', ru: 'что-нибудь / ничего', ex: 'I didn\'t buy anything at the mall yesterday.', exHi: 'मैंने कल मॉल में कुछ भी नहीं खरीदा।', exEs: 'No compré nada en el centro comercial ayer.', ic: '🛍️' },
    { w: 'anyone / anybody', p: '/ˈen.i.wʌn/', m: 'Used in questions and negatives for people', hi: 'कोई भी / किसी को भी', es: 'nadie / alguien', fr: 'personne / quelqu\'un', de: 'jemand / niemand', pt: 'ninguém / alguém', zh: '任何人', ar: 'أي شخص', ja: '誰も / 誰か', ru: 'никто / кто-нибудь', ex: 'She didn\'t see anyone in the hallway.', exHi: 'उसने दालान में किसी को नहीं देखा।', exEs: 'Ella no vio a nadie en el pasillo.', ic: '👤' },
    { w: 'anywhere', p: '/ˈen.i.wer/', m: 'Used in questions and negatives for places', hi: 'कहीं भी', es: 'ninguna parte / ningún lugar', fr: 'nulle part / quelque part', de: 'irgendwo / nirgendwo', pt: 'lugar nenhum', zh: '任何地方', ar: 'أي مكان', ja: 'どこにも / どこかに', ru: 'никуда / где-нибудь', ex: 'We didn\'t go anywhere on Sunday; we stayed at home.', exHi: 'हम रविवार को कहीं नहीं गए; हम घर पर ही रहे।', exEs: 'No fuimos a ninguna parte el domingo; nos quedamos en casa.', ic: '🏡' }
  ],
  chunks: [
    { phrase: 'I didn\'t see your message earlier.', meaning: 'Apologizing for late reply to a message', hi: 'मैंने आपका संदेश पहले नहीं देखा था।', es: 'No vi tu mensaje antes.', fr: 'Je n\'ai pas vu ton message plus tôt.', de: 'Ich habe deine Nachricht vorhin nicht gesehen.', pt: 'Não vi sua mensagem mais cedo.', zh: '我之前没看到你的留言。', ar: 'لم أرَ رسالتك في وقت سابق.', ja: '先ほどメッセージを見ていませんでした。', ru: 'Я не видел ваше сообщение раньше.', note: 'Formula: didn\'t + see (base verb)', ic: '📱' },
    { phrase: 'Did you have a good weekend?', meaning: 'Polite Monday greeting inquiry', hi: 'क्या आपका सप्ताहांत अच्छा रहा?', es: '¿Tuviste un buen fin de semana?', fr: 'As-tu passé un bon week-end ?', de: 'Hattest du ein schönes Wochenende?', pt: 'Você teve um bom fim de semana?', zh: '你周末过得好吗？', ar: 'هل قضيتَ عطلة نهاية أسبوع جيدة؟', ja: '良い週末を過ごせましたか？', ru: 'Хорошо провели выходные?', note: 'Did + subject + have', ic: '🎉' },
    { phrase: 'Yes, I did. / No, I didn\'t.', meaning: 'Standard English short answers for past questions', hi: 'हाँ, मैंने किया। / नहीं, मैंने नहीं किया।', es: 'Sí, así fue. / No, no lo hice.', fr: 'Oui, tout à fait. / Non, pas du tout.', de: 'Ja, hatte ich. / Nein, hatte ich nicht.', pt: 'Sim, tive. / Não, não tive.', zh: '是的，过得很好。/ 不，没有。', ar: 'نعم، فعلت. / لا، لم أفعل.', ja: 'はい、そうです。/ いいえ、違います。', ru: 'Да. / Нет.', note: 'Short answer echoes the auxiliary "did"', ic: '✔️' },
    { phrase: 'Where did you buy that jacket?', meaning: 'Asking about the origin of a purchase', hi: 'आपने वह जैकेट कहाँ से खरीदी थी?', es: '¿Dónde compraste esa chaqueta?', fr: 'Où as-tu acheté cette veste ?', de: 'Wo hast du diese Jacke gekauft?', pt: 'Onde você comprou essa jaqueta?', zh: '你在哪里买的那件夹克？', ar: 'من أين اشتريتَ تلك السترة؟', ja: 'そのジャケットはどこで買いましたか？', ru: 'Где вы купили эту куртку?', note: 'Where did you + base verb (buy)', ic: '🧥' },
    { phrase: 'What time did the film start?', meaning: 'Asking about past schedule timing', hi: 'फिल्म किस समय शुरू हुई थी?', es: '¿A qué hora empezó la película?', fr: 'À quelle heure le film a-t-il commencé ?', de: 'Um wie viel Uhr hat der Film angefangen?', pt: 'A que horas começou o filme?', zh: '电影几点开始的？', ar: 'في أي وقت بدأ الفيلم؟', ja: '映画は何時に始まりましたか？', ru: 'В котором часу начался фильм?', note: 'What time did + subject + start?', ic: '🎬' },
    { phrase: 'Why didn\'t you come to class?', meaning: 'Asking reason for past absence', hi: 'आप कक्षा में क्यों नहीं आए थे?', es: '¿Por qué no viniste a clase?', fr: 'Pourquoi n\'es-tu pas venu en cours ?', de: 'Warum bist du nicht zum Unterricht gekommen?', pt: 'Por que você não veio para a aula?', zh: '你为什么没来上课？', ar: 'لماذا لم تأتِ إلى الفصل؟', ja: 'なぜ授業に来なかったのですか？', ru: 'Почему ты не пришел на занятия?', note: 'Negative question: Why didn\'t you...', ic: '🏫' },
    { phrase: 'We didn\'t go out because it rained.', meaning: 'Giving reason for staying indoors in past', hi: 'हम बाहर नहीं गए क्योंकि बारिश हो रही थी।', es: 'No salimos porque llovió.', fr: 'Nous ne sommes pas sortis parce qu\'il a plu.', de: 'Wir sind nicht ausgegangen, weil es geregnet hat.', pt: 'Não saímos porque choveu.', zh: '我们没有出门，因为下雨了。', ar: 'لم نخرج لأنها كانت تمطر.', ja: '雨が降っていたので外出しませんでした。', ru: 'Мы не выходили, потому что шел дождь.', note: 'didn\'t go (base verb)', ic: '🌧️' },
    { phrase: 'How did you get home last night?', meaning: 'Asking for past transportation mode', hi: 'आप कल रात घर कैसे पहुँचे?', es: '¿Cómo llegaste a casa anoche?', fr: 'Comment es-tu rentré hier soir ?', de: 'Wie bist du gestern Abend nach Hause gekommen?', pt: 'Como você chegou em casa ontem à noite?', zh: '你昨晚是怎么回家的？', ar: 'كيف عدتَ إلى المنزل الليلة الماضية؟', ja: '昨夜はどうやって帰宅しましたか？', ru: 'Как ты добрался домой вчера вечером?', note: 'How did you get...', ic: '🚗' }
  ],
  grammar: {
    title: 'Past Simple Negatives & Question Formations',
    concept: 'Using auxiliary verb "did / didn\'t" followed strictly by the BASE form of the main verb',
    patterns: [
      {
        title: 'Negative Past: Subject + didn\'t + BASE VERB',
        structure: 'Subject + didn\'t (did not) + [base verb] + Object/Details',
        rule: 'Always use the base form of the main verb after "didn\'t" (I didn\'t work, she didn\'t go, we didn\'t buy). NEVER use the past form after didn\'t (do NOT say: "didn\'t went" or "didn\'t worked"). The auxiliary "didn\'t" already marks the past tense.',
        examples: [
          { en: 'I didn\'t sleep well last night.', hi: 'मैं कल रात अच्छी तरह नहीं सो पाया।', es: 'No dormí bien anoche.' },
          { en: 'She didn\'t understand the question.', hi: 'वह सवाल नहीं समझी।', es: 'Ella no entendió la pregunta.' }
        ]
      },
      {
        title: 'Past Questions: (Wh-) + Did + Subject + BASE VERB?',
        structure: '(Question Word) + did + Subject + [base verb] + Details?',
        rule: 'Yes/No Questions: Did you visit London? -> Yes, I did. / No, I didn\'t. Wh- Questions: Where did you stay? What did you eat? Who did you call? Always keep the main verb in its base form.',
        examples: [
          { en: 'Did you find your car keys this morning?', hi: 'क्या आपको आज सुबह अपनी कार की चाबियाँ मिलीं?', es: '¿Encontraste las llaves de tu coche esta mañana?' },
          { en: 'Where did you buy that delicious coffee?', hi: 'आपने वह स्वादिष्ट कॉफी कहाँ से खरीदी?', es: '¿Dónde compraste ese delicioso café?' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'I didn\'t went to work yesterday.', cor: 'I didn\'t go to work yesterday.', exp: 'After "didn\'t", always use the base form of the verb (go), not the past form (went).', hi: '"didn\'t" के बाद हमेशा क्रिया का मूल रूप (go) आता है, भूतकाल (went) नहीं।', es: 'Después de "didn\'t", siempre usa el verbo en infinitivo/base (go), nunca en pasado (went).' },
    { inc: 'Did you saw the new movie?', cor: 'Did you see the new movie?', exp: 'Questions with "Did" require the base verb (see), not past tense (saw).', hi: '"Did" वाले प्रश्नों में मुख्य क्रिया मूल रूप (see) में रहती है, "saw" गलत है।', es: 'Las preguntas con "Did" exigen el verbo base (see), nunca en pasado (saw).' },
    { inc: 'Did you like the food? — Yes, I liked.', cor: 'Did you like the food? — Yes, I did.', exp: 'In short answers, use the auxiliary verb "did" (Yes, I did), not the main verb.', hi: 'संक्षिप्त उत्तर में "Yes, I did" का प्रयोग करें, "Yes, I liked" नहीं।', es: 'En respuestas cortas, usa el auxiliar "did" (Yes, I did), no el verbo principal.' },
    { inc: 'Where you went last weekend?', cor: 'Where did you go last weekend?', exp: 'Wh- questions in simple past require the auxiliary "did" before the subject.', hi: 'Wh- प्रश्नों में सब्जेक्ट से पहले सहायक क्रिया "did" लगाना अनिवार्य है।', es: 'Las preguntas con Wh- en pasado requieren el auxiliar "did" antes del sujeto.' },
    { inc: 'I no watched TV yesterday.', cor: 'I didn\'t watch TV yesterday.', exp: 'Use "didn\'t + verb" for past negatives in English, never "no + verb".', hi: 'भूतकाल में नकारात्मक के लिए "didn\'t watch" का प्रयोग करें, "no watched" का नहीं।', es: 'Usa "didn\'t + verbo base" para la negación en pasado, nunca "no + verbo".' }
  ],
  dialogues: [
    {
      title: 'Asking About a Colleague\'s Weekend',
      context: 'Oscar and Rachel meet at the office pantry on Monday morning.',
      charA: { name: 'Oscar', av: '👨‍💼', role: 'Colleague' },
      charB: { name: 'Rachel', av: '👩‍💼', role: 'Colleague' },
      turns: [
        { spk: 'Oscar', text: 'Good morning Rachel! Did you go away for the weekend?', hi: 'शुभ प्रभात रेचल! क्या आप सप्ताहांत के लिए बाहर गई थीं?', es: '¡Buenos días Rachel! ¿Te fuiste de viaje el fin de semana?' },
        { spk: 'Rachel', text: 'No, I didn\'t. I stayed in the city and relaxed at home.', hi: 'नहीं, मैं नहीं गई थी। मैं शहर में ही रही और घर पर आराम किया।', es: 'No, no me fui. Me quedé en la ciudad y descansé en casa.' },
        { spk: 'Oscar', text: 'Did you watch the football match on Sunday evening?', hi: 'क्या आपने रविवार शाम को फुटबॉल मैच देखा था?', es: '¿Viste el partido de fútbol el domingo por la tarde?' },
        { spk: 'Rachel', text: 'No, I didn\'t watch it because I read a fascinating novel instead.', hi: 'नहीं, मैंने वह नहीं देखा क्योंकि मैंने इसके बजाय एक आकर्षक उपन्यास पढ़ा।', es: 'No, no lo vi porque leí una novela fascinante en su lugar.' },
        { spk: 'Oscar', text: 'That sounds like a peaceful weekend!', hi: 'यह बहुत ही शांतिपूर्ण सप्ताहांत लगता है!', es: '¡Eso suena como un fin de semana muy tranquilo!' }
      ]
    },
    {
      title: 'Troubleshooting a Missed Message',
      context: 'Daniel is checking with his project partner Nina why she didn\'t reply to his message.',
      charA: { name: 'Daniel', av: '👨', role: 'Project Partner' },
      charB: { name: 'Nina', av: '👩', role: 'Project Partner' },
      turns: [
        { spk: 'Daniel', text: 'Hi Nina, did you get my email about the project slides yesterday?', hi: 'नमस्ते नीना, क्या आपको कल प्रोजेक्ट स्लाइड के बारे में मेरा ईमेल मिला था?', es: 'Hola Nina, ¿recibiste mi correo sobre las diapositivas del proyecto ayer?' },
        { spk: 'Nina', text: 'I am so sorry, Daniel! I didn\'t check my inbox because my internet connection was down.', hi: 'मुझे बहुत खेद है, डैनियल! मैंने अपना इनबॉक्स चेक नहीं किया क्योंकि मेरा इंटरनेट कनेक्शन बंद था।', es: '¡Lo siento mucho, Daniel! No revisé mi bandeja de entrada porque no tenía conexión a internet.' },
        { spk: 'Daniel', text: 'No problem at all. Did you manage to fix the connection this morning?', hi: 'कोई बात नहीं। क्या आप आज सुबह कनेक्शन ठीक करने में सफल रहीं?', es: 'Ningún problema. ¿Lograste arreglar la conexión esta mañana?' },
        { spk: 'Nina', text: 'Yes, I did. It is working perfectly now.', hi: 'हाँ, मैंने कर लिया। यह अब बिल्कुल सही काम कर रहा है।', es: 'Sí, así fue. Ya funciona perfectamente.' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u03_l41_p1', type: 'multiple_choice', prompt: 'Select the grammatically correct negative past sentence:', targetSentence: 'I didn\'t see your message yesterday.', options: [{ id: '1', text: 'I didn\'t see your message yesterday.', isCorrect: true }, { id: '2', text: 'I didn\'t saw your message.', isCorrect: false }, { id: '3', text: 'I no see your message.', isCorrect: false }, { id: '4', text: 'I didn\'t seen your message.', isCorrect: false }] },
    { id: 'ex_u03_l41_p2', type: 'fill_blank', prompt: 'Fill in the blank with the correct auxiliary for past questions:', targetSentence: 'Did you lock the front door this morning?', options: [{ id: '1', text: 'Did', isCorrect: true }, { id: '2', text: 'Do', isCorrect: false }, { id: '3', text: 'Were', isCorrect: false }, { id: '4', text: 'Have', isCorrect: false }] },
    { id: 'ex_u03_l41_p3', type: 'word_ordering', prompt: 'Assemble the Wh- past question correctly:', targetSentence: 'Where did you buy that beautiful blue jacket', wordBank: ['Where', 'did', 'you', 'buy', 'that', 'beautiful', 'blue', 'jacket', 'bought', 'do'] },
    { id: 'ex_u03_l41_p4', type: 'listening', prompt: 'Listen to the question and identify what is being asked:', audioText: 'Did you enjoy the concert at the theater last night?', options: [{ id: '1', text: 'Enjoyment of last night\'s theater concert', isCorrect: true }, { id: '2', text: 'Location of the new train station', isCorrect: false }, { id: '3', text: 'Time of tomorrow\'s business meeting', isCorrect: false }, { id: '4', text: 'Price of grocery store items', isCorrect: false }] },
    { id: 'ex_u03_l41_p5', type: 'error_correction', prompt: 'Fix the double past tense error:', targetSentence: 'He didn\'t go to the supermarket yesterday.', errorSentence: 'He didn\'t went to the supermarket yesterday.', options: [{ id: '1', text: 'He didn\'t go to the supermarket yesterday.', isCorrect: true }, { id: '2', text: 'He didn\'t goes to the supermarket.', isCorrect: false }, { id: '3', text: 'He no went to the supermarket.', isCorrect: false }, { id: '4', text: 'He not go to supermarket.', isCorrect: false }] },
    { id: 'ex_u03_l41_p6', type: 'dialogue_completion', prompt: 'Select the proper short answer to the question:', dialogueContext: { speakerA: 'Did you finish writing the summary report?', lineA: 'Did you finish writing the summary report?', speakerB: 'Yes, I did.' }, options: [{ id: '1', text: 'Yes, I did.', isCorrect: true }, { id: '2', text: 'Yes, I finished it yesterday morning.', isCorrect: false }, { id: '3', text: 'Yes, I do.', isCorrect: false }, { id: '4', text: 'No, I don\'t.', isCorrect: false }] },
    { id: 'ex_u03_l41_p7', type: 'translation', prompt: 'Translate into English:', sourceSentence: 'आपने कल रात क्या खाया था?', sourceTranslations: { hi: 'आपने कल रात क्या खाया था?', es: '¿Qué comiste anoche?' }, targetSentence: 'What did you eat last night', wordBank: ['What', 'did', 'you', 'eat', 'last', 'night', 'ate', 'do'] },
    { id: 'ex_u03_l41_p8', type: 'speaking', prompt: 'Speak this question clearly:', targetSentence: 'Did you have a good time at the party?', audioText: 'Did you have a good time at the party?' },
    { id: 'ex_u03_l41_p9', type: 'listen_and_type', prompt: 'Listen and assemble the negative statement:', audioText: 'She didn\'t understand the instructions.', targetSentence: 'She didn\'t understand the instructions', wordBank: ['She', 'didn\'t', 'understand', 'the', 'instructions', 'understood', 'did', 'not'] },
    { id: 'ex_u03_l41_p10', type: 'multiple_choice', prompt: 'Which question correctly asks about past arrival time?', targetSentence: 'What time did the train arrive at the station?', options: [{ id: '1', text: 'What time did the train arrive at the station?', isCorrect: true }, { id: '2', text: 'What time the train arrived?', isCorrect: false }, { id: '3', text: 'What time did the train arrived?', isCorrect: false }, { id: '4', text: 'What time was the train arrive?', isCorrect: false }] },
    { id: 'ex_u03_l41_p11', type: 'fill_blank', prompt: 'Fill in the blank with the base verb:', targetSentence: 'Why didn\'t you call me yesterday?', options: [{ id: '1', text: 'call', isCorrect: true }, { id: '2', text: 'called', isCorrect: false }, { id: '3', text: 'calling', isCorrect: false }, { id: '4', text: 'calls', isCorrect: false }] },
    { id: 'ex_u03_l41_p12', type: 'match_pairs', prompt: 'Match questions with their natural short answers:', options: [{ id: 'm1', text: 'Did you sleep well?' }, { id: 'm1_m', text: 'Yes, I did.' }, { id: 'm2', text: 'Did they arrive on time?' }, { id: 'm2_m', text: 'No, they didn\'t.' }, { id: 'm3', text: 'Did she like the gift?' }, { id: 'm3_m', text: 'Yes, she did.' }, { id: 'm4', text: 'Did he call you?' }, { id: 'm4_m', text: 'No, he didn\'t.' }] },
    { id: 'ex_u03_l41_p13', type: 'word_ordering', prompt: 'Assemble the negative past sentence:', targetSentence: 'We didn\'t go anywhere on Sunday because of the rain', wordBank: ['We', 'didn\'t', 'go', 'anywhere', 'on', 'Sunday', 'because', 'of', 'the', 'rain', 'went', 'did'] },
    { id: 'ex_u03_l41_p14', type: 'multiple_choice', prompt: 'Why is "Did you saw the news?" grammatically incorrect?', targetSentence: 'Because "did" must be followed by base verb "see", not "saw".', options: [{ id: '1', text: 'Because "did" must be followed by base verb "see", not "saw".', isCorrect: true }, { id: '2', text: 'Because "Did" cannot be used with "you".', isCorrect: false }, { id: '3', text: 'Because "news" is plural.', isCorrect: false }, { id: '4', text: 'Because questions require "do" in past.', isCorrect: false }] },
    { id: 'ex_u03_l41_p15', type: 'fill_blank', prompt: 'Complete with the negative contraction:', targetSentence: 'I didn\'t remember her phone number this morning.', options: [{ id: '1', text: 'didn\'t', isCorrect: true }, { id: '2', text: 'don\'t', isCorrect: false }, { id: '3', text: 'wasn\'t', isCorrect: false }, { id: '4', text: 'not', isCorrect: false }] }
  ],
  review: [
    { id: 'ex_u03_l41_rev1', type: 'multiple_choice', prompt: 'Which sentence is completely correct?', targetSentence: 'Who did you meet at the conference yesterday?', options: [{ id: '1', text: 'Who did you meet at the conference yesterday?', isCorrect: true }, { id: '2', text: 'Who you met at the conference?', isCorrect: false }, { id: '3', text: 'Who did you met at the conference?', isCorrect: false }, { id: '4', text: 'Who were you meet?', isCorrect: false }] },
    { id: 'ex_u03_l41_rev2', type: 'word_ordering', prompt: 'Build the past question:', targetSentence: 'How did you know about the secret birthday party', wordBank: ['How', 'did', 'you', 'know', 'about', 'the', 'secret', 'birthday', 'party', 'knew', 'do'] },
    { id: 'ex_u03_l41_rev3', type: 'fill_blank', prompt: 'Fill in the blank with base verb:', targetSentence: 'We didn\'t hear the doorbell ring.', options: [{ id: '1', text: 'hear', isCorrect: true }, { id: '2', text: 'heard', isCorrect: false }, { id: '3', text: 'hearing', isCorrect: false }, { id: '4', text: 'hears', isCorrect: false }] },
    { id: 'ex_u03_l41_rev4', type: 'error_correction', prompt: 'Fix the short answer error:', targetSentence: 'Did they arrive on time? — No, they didn\'t.', errorSentence: 'Did they arrive on time? — No, they arrived not.', options: [{ id: '1', text: 'Did they arrive on time? — No, they didn\'t.', isCorrect: true }, { id: '2', text: 'No, they don\'t.', isCorrect: false }, { id: '3', text: 'No, they did.', isCorrect: false }, { id: '4', text: 'No, they not.', isCorrect: false }] },
    { id: 'ex_u03_l41_rev5', type: 'translation', prompt: 'Translate into English:', sourceSentence: 'हम कल रात बाहर नहीं गए क्योंकि बहुत ठंड थी।', sourceTranslations: { hi: 'हम कल रात बाहर नहीं गए क्योंकि बहुत ठंड थी।', es: 'No salimos anoche porque hacía mucho frío.' }, targetSentence: 'We didn\'t go out last night because it was cold', wordBank: ['We', 'didn\'t', 'go', 'out', 'last', 'night', 'because', 'it', 'was', 'cold', 'went', 'did'] }
  ],
  assessment: [
    { id: 'ex_u03_l41_a1', type: 'multiple_choice', prompt: 'What form of the main verb follows "didn\'t" in negative past sentences?', targetSentence: 'The base form (infinitive without "to")', options: [{ id: '1', text: 'The base form (infinitive without "to")', isCorrect: true }, { id: '2', text: 'The past tense form (-ed or irregular)', isCorrect: false }, { id: '3', text: 'The present participle (-ing)', isCorrect: false }, { id: '4', text: 'The third-person form (-s)', isCorrect: false }] },
    { id: 'ex_u03_l41_a2', type: 'fill_blank', prompt: 'Complete the question:', targetSentence: 'Why did you leave the meeting so early?', options: [{ id: '1', text: 'leave', isCorrect: true }, { id: '2', text: 'left', isCorrect: false }, { id: '3', text: 'leaving', isCorrect: false }, { id: '4', text: 'leaves', isCorrect: false }] },
    { id: 'ex_u03_l41_a3', type: 'word_ordering', prompt: 'Assemble the negative statement:', targetSentence: 'I didn\'t buy anything at the shopping mall yesterday', wordBank: ['I', 'didn\'t', 'buy', 'anything', 'at', 'the', 'shopping', 'mall', 'yesterday', 'bought', 'did'] },
    { id: 'ex_u03_l41_a4', type: 'listening', prompt: 'Listen and identify the reason given for absence:', audioText: 'I didn\'t come to work yesterday because I had a severe headache.', options: [{ id: '1', text: 'Had a severe headache', isCorrect: true }, { id: '2', text: 'Missed the morning train', isCorrect: false }, { id: '3', text: 'Went on family vacation', isCorrect: false }, { id: '4', text: 'Had a dentist appointment', isCorrect: false }] },
    { id: 'ex_u03_l41_a5', type: 'speaking', prompt: 'Speak this question and answer clearly:', targetSentence: 'Did you finish the project on time? Yes, I did.', audioText: 'Did you finish the project on time? Yes, I did.' }
  ]
};

// Direct saving when executed
saveLessonFile(compileLesson(RAW_LESSON_40));
saveLessonFile(compileLesson(RAW_LESSON_41));
console.log('Saved Lessons 40 and 41.');
