import { LessonConfigA2 } from './unit9_builder_helper';

// =========================================================================
// LESSON 133: Hobbies, Arts, Creativity & Musical Interests
// =========================================================================
export const LESSON_133_CONFIG: LessonConfigA2 = {
  num: 133,
  title: 'Hobbies, Arts, Creativity & Musical Interests',
  icon: '🎨',
  estMin: 25,
  objTitle: 'Creative Passions, Musical Instruments, Artistic Expression & Leisure Pastimes',
  objDesc: 'Talk about creative hobbies (playing guitar/piano, oil painting, digital photography, creative writing), express enthusiasm using gerunds and infinitives ("I enjoy playing / I love to paint"), and discuss visiting galleries and concerts.',
  objHi: 'रचनात्मक शौक (गिटार/पियानो बजाना, पेंटिंग, फोटोग्राफी), उत्साह व्यक्त करना ("I enjoy playing / I love to paint") और कला प्रदर्शनियों तथा संगीत कार्यक्रमों पर चर्चा करना सीखें।',
  objEs: 'Hablar de pasatiempos creativos, instrumentos musicales, fotografía y pintura usando gerundios e infinitivos ("I enjoy painting / I love to play").',
  canDo: [
    'I can describe my creative hobbies and artistic interests in detail.',
    'I can use verbs of preference with gerunds and infinitives ("I enjoy playing the guitar", "I love sketching").',
    'I can discuss musical instruments, art exhibitions, and cultural concerts.',
    'I can ask others about their creative leisure pursuits and share artistic experiences.'
  ],
  canDoHi: [
    'मैं अपने रचनात्मक शौक और कलात्मक रुचियों का विस्तार से वर्णन कर सकता हूँ।',
    'मैं पसंद-नापसंद बताने के लिए gerunds और infinitives ("I enjoy playing the guitar", "I love sketching") का उपयोग कर सकता हूँ।',
    'मैं वाद्ययंत्रों, कला दीर्घाओं और संगीत कार्यक्रमों पर चर्चा कर सकता हूँ।',
    'मैं दूसरों से उनके रचनात्मक शौक के बारे में पूछ सकता हूँ और अपने अनुभव साझा कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir mis aficiones creativas e intereses artísticos en detalle.',
    'Puedo usar verbos de preferencia con gerundios e infinitivos.',
    'Puedo hablar de instrumentos musicales, conciertos y exposiciones de arte.',
    'Puedo preguntar a otros sobre sus pasatiempos creativos.'
  ],
  vocab: [
    { w: 'instrument', p: '/ˈɪnstrəmənt/', m: 'an object or device for producing musical sounds', hi: 'वाद्य यंत्र / संगीत उपकरण', es: 'instrumento musical', fr: 'instrument de musique', de: 'Musikinstrument', pt: 'instrumento musical', zh: '乐器', ar: 'آلة موسيقية', ja: '楽器', ru: 'музыкальный инструмент', ex: 'She has been learning to play a musical instrument since childhood.', exHi: 'वह बचपन से एक वाद्य यंत्र बजाना सीख रही है।', exEs: 'Ella ha estado aprendiendo a tocar un instrumento desde la infancia.', ic: '🎻' },
    { w: 'guitar', p: '/ɡɪˈtɑː/', m: 'a stringed musical instrument with six or twelve strings', hi: 'गिटार', es: 'guitarra', fr: 'guitare', de: 'Gitarre', pt: 'violão / guitarra', zh: '吉他', ar: 'غيتار', ja: 'ギター', ru: 'гитара', ex: 'He practices the acoustic guitar for forty minutes every evening.', exHi: 'वह हर शाम चालीस मिनट तक ध्वनिक गिटार का अभ्यास करता है।', exEs: 'Él practica la guitarra acústica cuarenta minutos cada tarde.', ic: '🎸' },
    { w: 'piano', p: '/piˈænəʊ/', m: 'a large keyboard musical instrument with a wooden case enclosing a soundboard', hi: 'पियानो', es: 'piano', fr: 'piano', de: 'Klavier', pt: 'piano', zh: '钢琴', ar: 'بيانو', ja: 'ピアノ', ru: 'пианино / фортепиано', ex: 'My sister plays classical melodies beautifully on the grand piano.', exHi: 'मेरी बहन ग्रैंड पियानो पर शास्त्रीय धुनें बहुत खूबसूरती से बजाती है।', exEs: 'Mi hermana toca melodías clásicas hermosamente en el piano.', ic: '🎹' },
    { w: 'photography', p: '/fəˈtɒɡrəfi/', m: 'the art, process, or occupation of taking and processing photographs', hi: 'फोटोग्राफी / चित्रकारी कला', es: 'fotografía', fr: 'photographie', de: 'Fotografie', pt: 'fotografia', zh: '摄影', ar: 'تصوير فوتوغرافي', ja: '写真撮影 / フォトグラフィー', ru: 'фотография / фотосъемка', ex: 'Digital photography is my favorite hobby during weekend hikes.', exHi: 'सप्ताहांत की पदयात्रा के दौरान डिजिटल फोटोग्राफी मेरा पसंदीदा शौक है।', exEs: 'La fotografía digital es mi pasatiempo favorito en excursiones.', ic: '📷' },
    { w: 'painting', p: '/ˈpeɪntɪŋ/', m: 'the action of applying paint; a painted picture', hi: 'पेंटिंग / चित्रकला', es: 'pintura / cuadro', fr: 'peinture', de: 'Malerei / Gemälde', pt: 'pintura', zh: '绘画 / 油画', ar: 'رسم / لوحة فنية', ja: '絵画 / ペインティング', ru: 'живопись / картина', ex: 'Landscape watercolor painting relaxes my mind after a busy week.', exHi: 'एक व्यस्त सप्ताह के बाद लैंडस्केप वॉटरकलर पेंटिंग मेरे दिमाग को सुकून देती है।', exEs: 'La pintura de paisajes en acuarela me relaja la mente.', ic: '🎨' },
    { w: 'sculpture', p: '/ˈskʌlptʃə/', m: 'the art of making two- or three-dimensional representative or abstract forms', hi: 'मूर्तिकला / शिल्पकला', es: 'escultura', fr: 'sculpture', de: 'Bildhauerei / Skulptur', pt: 'escultura', zh: '雕塑', ar: 'نحت / تمثال', ja: '彫刻', ru: 'скульптура', ex: 'The museum exhibited ancient marble sculptures from Greece.', exHi: 'संग्रहालय ने ग्रीस की प्राचीन संगमरमर की मूर्तियों का प्रदर्शन किया।', exEs: 'El museo exhibió esculturas de mármol antiguas de Grecia.', ic: '🗿' },
    { w: 'creative', p: '/kriˈeɪtɪv/', m: 'relating to or involving the use of the imagination or original ideas', hi: 'रचनात्मक / सृजनशील', es: 'creativo / artística', fr: 'créatif / inventif', de: 'kreativ / schöpferisch', pt: 'criativo', zh: '有创意的', ar: 'مبدع / خلاق', ja: '創造的な / クリエイティブな', ru: 'творческий / креативный', ex: 'Creative writing helps students express their deepest thoughts.', exHi: 'रचनात्मक लेखन छात्रों को अपने गहरे विचारों को व्यक्त करने में मदद करता है।', exEs: 'La escritura creativa ayuda a los estudiantes a expresar sus ideas.', ic: '💡' },
    { w: 'exhibition', p: '/ˌeksɪˈbɪʃn/', m: 'a public display of works of art or items of interest, held in an art gallery or museum', hi: 'प्रदर्शनी / नुमाइश', es: 'exposición / muestra', fr: 'exposition', de: 'Ausstellung', pt: 'exposição / mostra', zh: '展览 / 展出', ar: 'معرض فني', ja: '展示会 / 展覧会', ru: 'выставка / экспозиция', ex: 'We visited a contemporary art exhibition in downtown Paris.', exHi: 'हमने डाउनटाउन पेरिस में एक समकालीन कला प्रदर्शनी का दौरा किया।', exEs: 'Visitamos una exposición de arte contemporáneo en París.', ic: '🖼️' },
    { w: 'gallery', p: '/ˈɡæləri/', m: 'a room or building for the display or sale of works of art', hi: 'आर्ट गैलरी / कला दीर्घा', es: 'galería de arte', fr: 'galerie d\'art', de: 'Galerie / Kunstgalerie', pt: 'galeria de arte', zh: '美术馆 / 画廊', ar: 'معرض / صالة عرض', ja: 'ギャラリー / 画廊', ru: 'галерея', ex: 'The city art gallery is free of charge on Sundays.', exHi: 'रविवार को शहर की आर्ट गैलरी निःशुल्क होती है।', exEs: 'La galería de arte de la ciudad es gratuita los domingos.', ic: '🏛️' },
    { w: 'concert', p: '/ˈkɒnsət/', m: 'a musical performance given in public, typically by several performers or of several separate compositions', hi: 'संगीत समारोह / कंसर्ट', es: 'concierto', fr: 'concert', de: 'Konzert', pt: 'concerto / show', zh: '音乐会 / 演唱会', ar: 'حفلة موسيقية', ja: 'コンサート / 演奏会', ru: 'концерт', ex: 'We bought front-row tickets for the symphony orchestra concert.', exHi: 'हमने सिम्फनी ऑर्केस्ट्रा कॉन्सर्ट के लिए पहली पंक्ति के टिकट खरीदे।', exEs: 'Compramos entradas en primera fila para el concierto de la orquesta.', ic: '🎶' },
    { w: 'sketch', p: '/sketʃ/', m: 'a rough or unfinished drawing or painting, often made to assist in making a more finished picture', hi: 'स्केच / रूपरेखा चित्र', es: 'boceto / bosquejo', fr: 'croquis / esquisse', de: 'Skizze', pt: 'esboço / rascunho', zh: '素描 / 草图', ar: 'رسم تخطيطي / اسكتش', ja: '素描 / スケッチ', ru: 'набросок / эскиз', ex: 'She loves carrying a sketchbook to draw portraits in cafes.', exHi: 'वह कैफे में चित्र बनाने के लिए स्केचबुक साथ रखना पसंद करती है।', exEs: 'Le encanta llevar un cuaderno para hacer bocetos en cafeterías.', ic: '✏️' },
    { w: 'pottery', p: '/ˈpɒtəri/', m: 'pots, dishes, and other articles made of fired clay', hi: 'मिट्टी के बर्तन बनाने की कला / पॉटरी', es: 'cerámica / alfarería', fr: 'poterie / céramique', de: 'Töpferei / Keramik', pt: 'cerâmica / olaria', zh: '陶艺 / 陶器', ar: 'صناعة الفخار', ja: '陶芸 / 陶磁器', ru: 'гончарное дело / керамика', ex: 'I joined an evening pottery class to make ceramic coffee mugs.', exHi: 'मैंने सिरेमिक कॉफी मग बनाने के लिए शाम की पॉटरी क्लास जॉइन की।', exEs: 'Me uní a una clase nocturna de cerámica para hacer tazas de café.', ic: '🏺' },
    { w: 'melody', p: '/ˈmelədi/', m: 'a sequence of single notes that is musically satisfying; a tune', hi: 'मधुर धुन / तराना', es: 'melodía / tonada', fr: 'mélodie', de: 'Melodie / Weise', pt: 'melodia', zh: '旋律 / 曲调', ar: 'لحن / نغمة', ja: '旋律 / メロディー', ru: 'мелодия / мотив', ex: 'The flutist played a calming acoustic melody on stage.', exHi: 'बांसुरी वादक ने मंच पर एक शांत ध्वनिक धुन बजाई।', exEs: 'El flautista tocó una melodía acústica relajante en el escenario.', ic: '🎵' },
    { w: 'craft', p: '/krɑːft/', m: 'an activity involving skill in making things manually by hand', hi: 'शिल्प / हस्तकला', es: 'artesanía / manualidad', fr: 'artisanat / travaux manuels', de: 'Handwerk / Kunsthandwerk', pt: 'artesanato / trabalhos manuais', zh: '手工艺', ar: 'حرفة يدوية', ja: '工芸 / 手芸', ru: 'ремесло / ручная работа', ex: 'Traditional leather craft requires immense patience and precision.', exHi: 'पारंपरिक चमड़े के शिल्प में अत्यधिक धैर्य और सटीकता की आवश्यकता होती है।', exEs: 'La artesanía tradicional en cuero requiere paciencia y precisión.', ic: '🧵' },
    { w: 'passion', p: '/ˈpæʃn/', m: 'an intense desire or enthusiasm for something', hi: 'जुनून / अत्यधिक लगन', es: 'pasión / entusiasmo', fr: 'passion', de: 'Leidenschaft', pt: 'paixão', zh: '热情 / 酷爱', ar: 'شغف / حماس', ja: '情熱 / パッション', ru: 'страсть / увлечение', ex: 'Baking artisan sourdough bread became her true creative passion.', exHi: 'कारीगरी खट्टी रोटी पकाना उसका सच्चा रचनात्मक जुनून बन गया।', exEs: 'Hornear pan de masa madre se convirtió en su verdadera pasión.', ic: '❤️' },
    { w: 'perform', p: '/pəˈfɔːm/', m: 'present a form of entertainment to an audience', hi: 'प्रस्तुत करना / प्रदर्शन करना', es: 'actuar / interpretar', fr: 'jouer / se produire', de: 'auftreten / aufführen', pt: 'apresentar-se / atuar', zh: '表演 / 演奏', ar: 'يؤدي / يعزف', ja: '演奏する / 上演する', ru: 'выступать / исполнять', ex: 'The youth jazz band will perform live at the town square tonight.', exHi: 'युवा जैज बैंड आज रात टाउन स्क्वायर पर लाइव प्रस्तुति देगा।', exEs: 'La banda juvenil de jazz actuará en vivo en la plaza esta noche.', ic: '🎭' },
    { w: 'lyrics', p: '/ˈlɪrɪks/', m: 'the words of a song', hi: 'गाने के बोल / गीत', es: 'letra de una canción', fr: 'paroles d\'une chanson', de: 'Liedtext / Songtext', pt: 'letra da música', zh: '歌词', ar: 'كلمات الأغنية', ja: '歌詞', ru: 'текст песни / слова', ex: 'He writes heartfelt poetic lyrics in his leather notebook.', exHi: 'वह अपनी चमड़े की नोटबुक में दिल को छू लेने वाले काव्यात्मक बोल लिखता है।', exEs: 'Él escribe letras poéticas sinceras en su cuaderno.', ic: '📝' },
    { w: 'rehearse', p: '/rɪˈhɜːs/', m: 'practice a play, piece of music, or other work for later public performance', hi: 'रिहर्सल करना / पूर्वाभ्यास करना', es: 'ensayar / practicar', fr: 'répéter (un spectacle)', de: 'proben / einstudieren', pt: 'ensaiar', zh: '排练 / 演练', ar: 'يتدرب / يتدرب على مسرحية', ja: 'リハーサルをする / 稽古する', ru: 'репетировать', ex: 'The choir gathers twice a week to rehearse holiday carols.', exHi: 'गायक दल छुट्टियों के गीतों का पूर्वाभ्यास करने के लिए सप्ताह में दो बार इकट्ठा होता है।', exEs: 'El coro se reúne dos veces por semana para ensayar villancicos.', ic: '🎤' },
    { w: 'talent', p: '/ˈtælənt/', m: 'natural aptitude or skill', hi: 'प्रतिभा / हुनर', es: 'talento / don', fr: 'talent / don', de: 'Talent / Begabung', pt: 'talento / aptidão', zh: '天赋 / 才能', ar: 'موهبة', ja: '才能 / タレント', ru: 'талант / одаренность', ex: 'She has a natural talent for playing the violin by ear.', exHi: 'उसमें कान से सुनकर वायलिन बजाने की स्वाभाविक प्रतिभा है।', exEs: 'Ella tiene un talento natural para tocar el violín de oído.', ic: '🌟' },
    { w: 'canvas', p: '/ˈkænvəs/', m: 'a strong, unbleached cloth used as a surface for oil painting', hi: 'कैनवास / चित्रपट', es: 'lienzo / tela', fr: 'toile (à peindre)', de: 'Leinwand', pt: 'tela (de pintura)', zh: '画布', ar: 'لوحة قماشية / كانفاس', ja: 'キャンバス / 画布', ru: 'холст / полотно', ex: 'The artist stretched a fresh white canvas before beginning his portrait.', exHi: 'कलाकार ने अपना चित्र शुरू करने से पहले एक नया सफेद कैनवास खींचा।', exEs: 'El artista tensó un lienzo blanco antes de comenzar su retrato.', ic: '🖼️' }
  ],
  chunks: [
    { phrase: 'I enjoy playing the guitar', meaning: 'expressing habitual pleasure in a musical hobby with gerund', hi: 'मुझे गिटार बजाने में आनंद आता है', es: 'disfruto tocando la guitarra', fr: 'j\'aime jouer de la guitare', de: 'ich spiele gerne Gitarre', pt: 'gosto de tocar violão', zh: '我喜欢弹吉他', ar: 'أستمتع بالعزف على الغيتار', ja: 'ギターを弾くのが楽しいです', ru: 'мне нравится играть на гитаре', note: 'Use "play the [instrument]" with definite article "the".', ic: '🎸' },
    { phrase: 'in my free time / leisure time', meaning: 'during moments not occupied by work or obligations', hi: 'अपने खाली समय में', es: 'en mi tiempo libre', fr: 'dans mon temps libre', de: 'in meiner Freizeit', pt: 'no meu tempo livre', zh: '在我的空闲时间', ar: 'في وقت فراغي', ja: '自由な時間に', ru: 'в свободное время', note: 'Common hobby introductory phrase.', ic: '⏳' },
    { phrase: 'visit art galleries and museums', meaning: 'cultural appreciation activity', hi: 'कला दीर्घाओं और संग्रहालयों का दौरा करना', es: 'visitar galerías de arte y museos', fr: 'visiter des galeries d\'art et des musées', de: 'Kunstgalerien und Museen besuchen', pt: 'visitar galerías de arte e museus', zh: '参观美术馆和博物馆', ar: 'زيارة المعارض الفنية والمتاحف', ja: '美術館や博物館を訪れる', ru: 'посещать художественные галереи и музеи', note: 'Leisure and cultural pursuit.', ic: '🏛️' },
    { phrase: 'keen on digital photography', meaning: 'enthusiastic and interested in taking photos', hi: 'डिजिटल फोटोग्राफी का शौकीन होना', es: 'aficionado a la fotografía digital', fr: 'passionné de photographie numérique', de: 'begeistert von digitaler Fotografie', pt: 'aficionado por fotografia digital', zh: '热衷于数码摄影', ar: 'مهتم بالتصوير الرقمي', ja: 'デジタル写真に熱中している', ru: 'увлекаться цифровой фотографией', note: '"Keen on + -ing / noun".', ic: '📷' },
    { phrase: 'listen to live acoustic music', meaning: 'experiencing real-time unamplified concerts', hi: 'लाइव ध्वनिक संगीत सुनना', es: 'escuchar música acústica en vivo', fr: 'écouter de la musique acoustique en direct', de: 'akustische Livemusik hören', pt: 'ouvir música acústica ao vivo', zh: '听现场原声音乐', ar: 'الاستماع إلى الموسيقى الحية', ja: '生のアコースティック音楽を聴く', ru: 'слушать живую акустическую музыку', note: 'Music appreciation expression.', ic: '🎶' },
    { phrase: 'express my creativity through...', meaning: 'using an artistic medium to reveal inner imagination', hi: '... के माध्यम से अपनी रचनात्मकता को व्यक्त करना', es: 'expresar mi creatividad a través de...', fr: 'exprimer ma créativité à travers...', de: 'meine Kreativität durch ... ausdrücken', pt: 'expressar minha criatividade através de...', zh: '通过...表达我的创造力', ar: 'التعبير عن إبداعي من خلال...', ja: '〜を通じて創造性を表現する', ru: 'выражать свое творчество через...', note: 'Reflective artistic description.', ic: '🎨' },
    { phrase: 'take up a new hobby', meaning: 'start practicing a leisure activity or skill', hi: 'कोई नया शौक शुरू करना', es: 'empezar un nuevo pasatiempo', fr: 'se mettre à un nouveau passe-temps', de: 'ein neues Hobby anfangen', pt: 'começar um novo passatempo', zh: '培养一项新爱好', ar: 'ممارسة هواية جديدة', ja: '新しい趣味を始める', ru: 'заняться новым хобби', note: 'Phrasal verb "take up".', ic: '🌱' },
    { phrase: 'practice every single day', meaning: 'disciplined regular habit to master an art or instrument', hi: 'हर एक दिन अभ्यास करना', es: 'practicar todos los días', fr: 's\'entraîner chaque jour', de: 'jeden einzelnen Tag üben', pt: 'praticar todos os santos dias', zh: '每天坚持练习', ar: 'التدرب كل يوم', ja: '毎日欠かさず練習する', ru: 'практиковаться каждый божий день', note: 'Skill acquisition habit.', ic: '📅' }
  ],
  grammar: {
    title: 'Verbs of Preference: Gerunds vs. Infinitives & "Play the + Instrument"',
    concept: 'Using verbs like "enjoy", "love", "like", "hate", "prefer" with -ing gerunds or infinitives, and using the definite article "the" with musical instruments.',
    patterns: [
      {
        title: 'Verbs Followed by Gerund (-ing)',
        structure: 'Subject + enjoy / avoid / consider / mind + Verb-ing',
        rule: 'Verbs like "enjoy" strictly take the gerund (-ing), never the infinitive.',
        examples: [
          { en: 'I enjoy playing the acoustic guitar after work.', hi: 'मुझे काम के बाद ध्वनिक गिटार बजाने में आनंद आता है।', es: 'Disfruto tocando la guitarra acústica después del trabajo.' },
          { en: 'She avoids drawing with charcoal because it is messy.', hi: 'वह चारकोल से चित्र बनाने से बचती है क्योंकि यह गंदा होता है।', es: 'Ella evita dibujar con carboncillo porque ensucia.' }
        ]
      },
      {
        title: 'Verbs Taking Either Gerund or Infinitive',
        structure: 'Subject + love / like / prefer / hate + Verb-ing OR to + Base Verb',
        rule: 'Verbs like "love", "like", and "prefer" can take either form with virtually identical meaning.',
        examples: [
          { en: 'He loves painting watercolor landscapes. / He loves to paint watercolor landscapes.', hi: 'वह वॉटरकलर लैंडस्केप पेंट करना पसंद करता है।', es: 'Le encanta pintar paisajes en acuarela.' },
          { en: 'They prefer going to live concerts rather than streaming music.', hi: 'वे संगीत स्ट्रीम करने के बजाय लाइव कॉन्सर्ट में जाना पसंद करते हैं।', es: 'Prefieren ir a conciertos en vivo que escuchar música en streaming.' }
        ]
      },
      {
        title: 'Musical Instruments: "Play THE + Instrument"',
        structure: 'Subject + play(s) + the + [guitar / piano / violin / flute]',
        rule: 'In English, use the definite article "the" when talking about playing musical instruments (unlike sports: "play football", but "play the piano").',
        examples: [
          { en: 'Rohan plays the violin in the youth orchestra.', hi: 'रोहन युवा ऑर्केस्ट्रा में वायलिन बजाता है।', es: 'Rohan toca el violín en la orquesta juvenil.' },
          { en: 'Can you play the drums or the bass guitar?', hi: 'क्या आप ड्रम या बास गिटार बजा सकते हैं?', es: '¿Sabes tocar la batería o el bajo?' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'I enjoy to play guitar on weekends.',
      cor: 'I enjoy playing the guitar on weekends.',
      exp: '"Enjoy" must be followed by gerund "playing", and musical instruments require "the guitar".',
      hi: '"Enjoy" के बाद gerund (-ing) और वाद्ययंत्र के पहले "the" आता है: "enjoy playing the guitar".',
      es: 'Se dice "enjoy playing the guitar" (gerundio y artículo "the").'
    },
    {
      inc: 'He plays piano very well.',
      cor: 'He plays the piano very well.',
      exp: 'Include the definite article "the" before musical instruments ("the piano").',
      hi: 'वाद्ययंत्र के साथ "the" लगाएं: "plays the piano".',
      es: 'Debe incluir "the": "plays the piano".'
    },
    {
      inc: 'I am keen in photography.',
      cor: 'I am keen on photography.',
      exp: 'The adjective "keen" takes the preposition "on", not "in".',
      hi: '"Keen on" सही रूप है, "keen in" नहीं।',
      es: '"Keen" se combina con "on": "keen on".'
    },
    {
      inc: 'She makes photography in the mountains.',
      cor: 'She does photography / takes photos in the mountains.',
      exp: 'Say "takes photos" or "does photography", not "makes photography".',
      hi: '"Takes photos" या "does photography" कहें।',
      es: 'Se dice "takes photos" o "does photography".'
    },
    {
      inc: 'We are looking forward to visit the art exhibition.',
      cor: 'We are looking forward to visiting the art exhibition.',
      exp: '"Look forward to" is followed by a gerund ("visiting"), because "to" is a preposition here.',
      hi: '"Look forward to" के बाद gerund "visiting" आता है।',
      es: 'Después de "look forward to" va gerundio: "visiting".'
    }
  ],
  dialogues: [
    {
      title: 'Sharing Creative Leisure Hobbies',
      context: 'Chloe and Rohan discuss their weekend artistic activities over coffee.',
      charA: { name: 'Chloe', av: '👩🏼', role: 'Artist' },
      charB: { name: 'Rohan', av: '👨🏽', role: 'Musician' },
      turns: [
        { spk: 'Chloe', text: 'Rohan, what do you usually enjoy doing in your leisure time during the weekend?', hi: 'रोहन, सप्ताहांत में आप अपने खाली समय में क्या करना पसंद करते हैं?', es: 'Rohan, ¿qué sueles disfrutar haciendo en tu tiempo libre el fin de semana?' },
        { spk: 'Rohan', text: 'I love playing the acoustic guitar and composing original melodies. How about you, Chloe?', hi: 'मुझे ध्वनिक गिटार बजाना और मूल धुनें बनाना बहुत पसंद है। आपके बारे में क्या, क्लोई?', es: 'Me encanta tocar la guitarra acústica y componer melodías. ¿Y tú, Chloe?' },
        { spk: 'Chloe', text: 'I am very keen on watercolor painting. I often set up my easel in the park and sketch landscapes.', hi: 'मुझे वॉटरकलर पेंटिंग का बहुत शौक है। मैं अक्सर पार्क में अपना ईज़ल लगाती हूँ और परिदृश्यों का स्केच बनाती हूँ।', es: 'Me gusta mucho la pintura en acuarela. Suelo poner mi caballete en el parque.' },
        { spk: 'Rohan', text: 'That sounds wonderfully relaxing! We should visit the new impressionist exhibition at the art gallery together on Saturday.', hi: 'यह सुनकर बहुत सुकून मिला! हमें शनिवार को आर्ट गैलरी में नई प्रभाववादी प्रदर्शनी देखने साथ जाना चाहिए।', es: '¡Suena muy relajante! Deberíamos ir juntos a la nueva exposición el sábado.' }
      ]
    },
    {
      title: 'Joining a Pottery Workshop',
      context: 'Elena inquires about beginner pottery classes at a community craft center.',
      charA: { name: 'Elena', av: '👩🏻', role: 'Student' },
      charB: { name: 'Instructor', av: '👨🏾', role: 'Ceramicist' },
      turns: [
        { spk: 'Elena', text: 'Good morning. I would like to take up a new creative hobby. Do you offer pottery classes for complete beginners?', hi: 'सुप्रभात। मैं एक नया रचनात्मक शौक शुरू करना चाहती हूँ। क्या आप शुरुआती लोगों के लिए पॉटरी कक्षाएं प्रदान करते हैं?', es: 'Buenos días. Me gustaría empezar un pasatiempo nuevo. ¿Ofrecen clases de cerámica para principiantes?' },
        { spk: 'Instructor', text: 'Yes, absolutely! Our beginner workshop meets every Tuesday evening. We teach clay molding, wheel throwing, and glazing.', hi: 'हाँ, बिल्कुल! हमारी शुरुआती कार्यशाला हर मंगलवार शाम को मिलती है। हम मिट्टी ढलाई, चाक पर बर्तन बनाना और ग्लेज़िंग सिखाते हैं।', es: '¡Sí, claro! Nuestro taller se reúne cada martes por la tarde. Enseñamos moldeado, torno y esmaltado.' },
        { spk: 'Elena', text: 'Do I need to bring any specialized tools or materials with me?', hi: 'क्या मुझे अपने साथ कोई विशेष उपकरण या सामग्री लाने की आवश्यकता है?', es: '¿Necesito llevar herramientas o materiales especiales conmigo?' },
        { spk: 'Instructor', text: 'No, all clay, aprons, and ceramic tools are provided in the studio. You just need your enthusiasm and creativity!', hi: 'नहीं, स्टूडियो में सभी मिट्टी, एप्रन और सिरेमिक उपकरण उपलब्ध कराए जाते हैं। आपको बस अपने उत्साह और रचनात्मकता की आवश्यकता है!', es: 'No, todo el barro y herramientas se proporcionan aquí. ¡Solo necesitas ganas y creatividad!' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_a2_9_133_p01',
      type: 'multiple_choice',
      prompt: 'Select the correct sentence using the definite article with a musical instrument:',
      options: [
        { id: '1', text: 'She enjoys playing the piano every evening.', isCorrect: true },
        { id: '2', text: 'She enjoys playing piano every evening.', isCorrect: false },
        { id: '3', text: 'She enjoys to play the piano every evening.', isCorrect: false },
        { id: '4', text: 'She enjoys play the piano every evening.', isCorrect: false }
      ],
      correctAnswer: 'She enjoys playing the piano every evening.',
      explanation: '"Enjoy + playing" and "the piano".'
    },
    {
      id: 'ex_a2_9_133_p02',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "I am very keen _____ (on/in/at) digital photography."',
      correctAnswer: 'on',
      explanation: 'The adjective "keen" takes preposition "on".'
    },
    {
      id: 'ex_a2_9_133_p03',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence about creative hobbies:',
      tokens: ['He', 'loves', 'sketching', 'portraits', 'in', 'his', 'free', 'time'],
      correctAnswer: 'He loves sketching portraits in his free time',
      explanation: 'Verbs of preference with gerund.'
    },
    {
      id: 'ex_a2_9_133_p04',
      type: 'translation',
      prompt: 'Translate to English: "मुझे अपने खाली समय में गिटार बजाना बहुत पसंद है।"',
      correctAnswer: 'I love playing the guitar in my free time.',
      acceptableAnswers: [
        'I enjoy playing the guitar in my free time.',
        'I love to play the guitar in my free time.'
      ],
      explanation: '"Love playing the guitar in my free time".'
    },
    {
      id: 'ex_a2_9_133_p05',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence: "I enjoy to paint watercolor landscapes."',
      correctAnswer: 'I enjoy painting watercolor landscapes.',
      explanation: '"Enjoy" takes the gerund (-ing) "painting".'
    },
    {
      id: 'ex_a2_9_133_p06',
      type: 'listening',
      prompt: 'Listen to the interview and identify the speaker\'s primary creative pursuit:',
      audioText: 'Whenever I have spare time on weekends, I head to the ceramics workshop. Making handmade pottery mugs helps me unwind completely.',
      options: [
        { id: '1', text: 'Making handmade pottery in a workshop', isCorrect: true },
        { id: '2', text: 'Fixing racing cars in a garage', isCorrect: false },
        { id: '3', text: 'Watching television all weekend', isCorrect: false },
        { id: '4', text: 'Working extra hours in an office', isCorrect: false }
      ],
      correctAnswer: 'Making handmade pottery in a workshop',
      explanation: 'The speaker mentions going to the ceramics workshop to make pottery.'
    },
    {
      id: 'ex_a2_9_133_p07',
      type: 'listen_and_type',
      prompt: 'Listen and type the exact sentence:',
      audioText: 'She plays the violin beautifully.',
      correctAnswer: 'She plays the violin beautifully.',
      explanation: 'Type the sentence accurately.'
    },
    {
      id: 'ex_a2_9_133_p08',
      type: 'speaking',
      prompt: 'Read aloud clearly: "In my free time, I enjoy playing the acoustic guitar and visiting modern art exhibitions."',
      targetText: 'In my free time, I enjoy playing the acoustic guitar and visiting modern art exhibitions.',
      explanation: 'Speak clearly with expressive natural intonation.'
    },
    {
      id: 'ex_a2_9_133_p09',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nFriend: "Do you want to come to the jazz festival?"\nMusician: "I would love to! I am really looking forward to _____ live music tonight."',
      options: [
        { id: '1', text: 'hearing', isCorrect: true },
        { id: '2', text: 'hear', isCorrect: false },
        { id: '3', text: 'heard', isCorrect: false },
        { id: '4', text: 'to hear', isCorrect: false }
      ],
      correctAnswer: 'hearing',
      explanation: '"Looking forward to + hearing" (gerund).'
    },
    {
      id: 'ex_a2_9_133_p10',
      type: 'multiple_choice',
      prompt: 'Which phrasal verb means "to start practicing a new hobby or activity"?',
      options: [
        { id: '1', text: 'take up', isCorrect: true },
        { id: '2', text: 'give up', isCorrect: false },
        { id: '3', text: 'turn down', isCorrect: false },
        { id: '4', text: 'put off', isCorrect: false }
      ],
      correctAnswer: 'take up',
      explanation: '"Take up a hobby" means to begin doing it.'
    },
    {
      id: 'ex_a2_9_133_p11',
      type: 'match_pairs',
      prompt: 'Match each creative activity with its artistic tool:',
      options: [
        { id: '1', text: 'painting → [easel and watercolor brush]' },
        { id: '2', text: 'photography → [digital DSLR camera]' },
        { id: '3', text: 'pottery → [clay and pottery wheel]' },
        { id: '4', text: 'guitar playing → [six strings and plectrum]' }
      ],
      correctAnswer: 'matched',
      explanation: 'Arts and instruments associations.'
    },
    {
      id: 'ex_a2_9_133_p12',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "They practice their choir songs twice a week to _____ (rehearse) for the show."',
      correctAnswer: 'rehearse',
      explanation: '"Rehearse" is to practice for a performance.'
    },
    {
      id: 'ex_a2_9_133_p13',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['We', 'visited', 'a', 'contemporary', 'art', 'gallery', 'yesterday'],
      correctAnswer: 'We visited a contemporary art gallery yesterday',
      explanation: 'Past simple leisure statement.'
    },
    {
      id: 'ex_a2_9_133_p14',
      type: 'translation',
      prompt: 'Translate to English: "क्या आप कोई वाद्ययंत्र बजा सकते हैं?"',
      correctAnswer: 'Can you play a musical instrument?',
      acceptableAnswers: ['Can you play any musical instrument?'],
      explanation: '"Play a musical instrument".'
    },
    {
      id: 'ex_a2_9_133_p15',
      type: 'multiple_choice',
      prompt: 'Select the grammatically correct sentence:',
      options: [
        { id: '1', text: 'He decided to take up oil painting last winter.', isCorrect: true },
        { id: '2', text: 'He decided taking up oil painting last winter.', isCorrect: false },
        { id: '3', text: 'He decided to took up oil painting.', isCorrect: false },
        { id: '4', text: 'He decided take up oil painting.', isCorrect: false }
      ],
      correctAnswer: 'He decided to take up oil painting last winter.',
      explanation: 'Verb "decide" takes infinitive "to take up".'
    }
  ],
  review: [
    {
      id: 'ex_a2_9_133_r01',
      type: 'multiple_choice',
      prompt: 'Choose the correct option:',
      options: [
        { id: '1', text: 'My brother plays the drums in a rock band.', isCorrect: true },
        { id: '2', text: 'My brother plays drums in a rock band.', isCorrect: false },
        { id: '3', text: 'My brother play the drums.', isCorrect: false },
        { id: '4', text: 'My brother is play drums.', isCorrect: false }
      ],
      correctAnswer: 'My brother plays the drums in a rock band.',
      explanation: '"Plays the drums".'
    },
    {
      id: 'ex_a2_9_133_r02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "She is very _____ (passion) about classical music."',
      correctAnswer: 'passionate',
      explanation: 'Adjective "passionate".'
    },
    {
      id: 'ex_a2_9_133_r03',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['I', 'enjoy', 'taking', 'photos', 'during', 'nature', 'walks'],
      correctAnswer: 'I enjoy taking photos during nature walks',
      explanation: 'Gerund after enjoy.'
    },
    {
      id: 'ex_a2_9_133_r04',
      type: 'translation',
      prompt: 'Translate to English: "वह बहुत अच्छा पियानो बजाती है।"',
      correctAnswer: 'She plays the piano very well.',
      acceptableAnswers: ['She plays the piano wonderfully.'],
      explanation: '"She plays the piano very well".'
    },
    {
      id: 'ex_a2_9_133_r05',
      type: 'error_correction',
      prompt: 'Correct the error: "He is keen in learning pottery."',
      correctAnswer: 'He is keen on learning pottery.',
      explanation: 'Change "in" to "on" after "keen".'
    }
  ],
  assessment: [
    {
      id: 'ex_a2_9_133_a01',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly combines verb of preference and musical instrument rules?',
      options: [
        { id: '1', text: 'I really enjoy playing the flute in the community orchestra.', isCorrect: true },
        { id: '2', text: 'I really enjoy to play flute in orchestra.', isCorrect: false },
        { id: '3', text: 'I really enjoy playing flute in the orchestra.', isCorrect: false },
        { id: '4', text: 'I really enjoy play the flute.', isCorrect: false }
      ],
      correctAnswer: 'I really enjoy playing the flute in the community orchestra.',
      explanation: '"Enjoy + playing" + "the flute".'
    },
    {
      id: 'ex_a2_9_133_a02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "We are looking forward to _____ (visit) the modern art gallery."',
      correctAnswer: 'visiting',
      explanation: 'Gerund "visiting" after "looking forward to".'
    },
    {
      id: 'ex_a2_9_133_a03',
      type: 'translation',
      prompt: 'Translate to English: "मैंने हाल ही में एक नया शौक शुरू करने का फैसला किया।"',
      correctAnswer: 'I recently decided to take up a new hobby.',
      acceptableAnswers: [
        'I decided to take up a new hobby recently.',
        'I have recently decided to take up a new hobby.'
      ],
      explanation: '"Decided to take up a new hobby".'
    },
    {
      id: 'ex_a2_9_133_a04',
      type: 'speaking',
      prompt: 'Read aloud clearly: "Expressing creativity through oil painting and playing the guitar brings great joy to my everyday life."',
      targetText: 'Expressing creativity through oil painting and playing the guitar brings great joy to my everyday life.',
      explanation: 'Speak with clear articulation and smooth melodic phrasing.'
    },
    {
      id: 'ex_a2_9_133_a05',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['Creative', 'writing', 'helps', 'develop', 'imagination', 'and', 'focus'],
      correctAnswer: 'Creative writing helps develop imagination and focus',
      explanation: 'Gerund subject sentence.'
    }
  ]
};

// =========================================================================
// LESSON 134: Future Aspirations, Career Goals & Life Ambitions
// =========================================================================
export const LESSON_134_CONFIG: LessonConfigA2 = {
  num: 134,
  title: 'Future Aspirations, Career Goals & Life Ambitions',
  icon: '🚀',
  estMin: 25,
  objTitle: 'Expressing Ambitions, Career Milestones, Future Plans & Intentions',
  objDesc: 'Learn to articulate career dreams, study abroad plans, and personal goals using future structures: "I hope to...", "I plan to...", "I\'m going to...", and "I would like to achieve...".',
  objHi: 'करियर के सपनों, विदेश में पढ़ाई की योजनाओं और व्यक्तिगत लक्ष्यों को व्यक्त करने के लिए भविष्य की संरचनाओं ("I hope to...", "I plan to...", "I\'m going to...") का उपयोग करना सीखें।',
  objEs: 'Expresar ambiciones profesionales, planes de estudio y metas personales usando "I hope to...", "I plan to...", "I\'m going to...".',
  canDo: [
    'I can articulate my short-term and long-term career aspirations clearly.',
    'I can use intention structures ("I plan to", "I hope to", "I intend to", "I would like to").',
    'I can talk about higher education, studying abroad, and professional certifications.',
    'I can ask colleagues or friends about their future life ambitions.'
  ],
  canDoHi: [
    'मैं अपने अल्पकालिक और दीर्घकालिक करियर लक्ष्यों को स्पष्ट रूप से व्यक्त कर सकता हूँ।',
    'मैं योजनाएं बताने के लिए "I plan to", "I hope to", "I intend to" और "I would like to" का उपयोग कर सकता हूँ।',
    'मैं उच्च शिक्षा, विदेश में अध्ययन और व्यावसायिक प्रमाणपत्रों के बारे में बात कर सकता हूँ।',
    'मैं सहकर्मियों या मित्रों से उनके भविष्य के लक्ष्यों के बारे में पूछ सकता हूँ।'
  ],
  canDoEs: [
    'Puedo articular mis metas profesionales a corto y largo plazo.',
    'Puedo usar estructuras de intención como "I plan to" o "I hope to".',
    'Puedo hablar de estudios superiores, becas y certificaciones.',
    'Puedo preguntar a otros sobre sus proyectos de futuro.'
  ],
  vocab: [
    { w: 'aspiration', p: '/ˌæspəˈreɪʃn/', m: 'a hope or ambition of achieving something', hi: 'आकांक्षा / उच्च अभिलाषा', es: 'aspiración / anhelo', fr: 'aspiration / ambition', de: 'Bestrebung / Aspiration', pt: 'aspiração / ambição', zh: '志向 / 抱负', ar: 'طموح / تطلع', ja: '熱望 / 向上心', ru: 'стремление / притязание', ex: 'Her lifelong aspiration is to manage an international non-profit foundation.', exHi: 'उसकी आजीवन आकांक्षा एक अंतरराष्ट्रीय गैर-लाभकारी फाउंडेशन का प्रबंधन करना है।', exEs: 'Su aspiración de toda la vida es dirigir una fundación internacional.', ic: '🌟' },
    { w: 'ambition', p: '/æmˈbɪʃn/', m: 'a strong desire to do or to achieve something, typically requiring determination', hi: 'महत्वाकांक्षा / बड़ा लक्ष्य', es: 'ambición / meta', fr: 'ambition', de: 'Ehrgeiz / Ambition', pt: 'ambição', zh: '雄心 / 抱负', ar: 'طموح', ja: '野心 / 志', ru: 'амбиция / цель', ex: 'He has an ambition to start his own technology software company.', exHi: 'उसकी अपनी खुद की टेक्नोलॉजी सॉफ्टवेयर कंपनी शुरू करने की महत्वाकांक्षा है।', exEs: 'Tiene la ambición de fundar su propia empresa de software.', ic: '🚀' },
    { w: 'career', p: '/kəˈrɪə/', m: 'an occupation undertaken for a significant period of a person\'s life with opportunities for progress', hi: 'करियर / पेशा', es: 'carrera profesional', fr: 'carrière professionnelle', de: 'Karriere / Berufslaufbahn', pt: 'carreira profissional', zh: '职业生涯', ar: 'مسيرة مهنية', ja: '経歴 / キャリア', ru: 'карьера', ex: 'She is pursuing a rewarding career in environmental engineering.', exHi: 'वह पर्यावरण इंजीनियरिंग में एक पुरस्कृत करियर बना रही है।', exEs: 'Ella está siguiendo una carrera gratificante en ingeniería ambiental.', ic: '💼' },
    { w: 'qualification', p: '/ˌkwɒlɪfɪˈkeɪʃn/', m: 'an official record showing that you have finished a training course or have the necessary skills', hi: 'योग्यता / डिग्री', es: 'titulación / cualificación', fr: 'qualification / diplôme', de: 'Qualifikation / Abschluss', pt: 'qualificação / diploma', zh: '资质 / 文凭', ar: 'مؤهل علمي', ja: '資格 / 免許', ru: 'квалификация / диплом', ex: 'Gaining an international qualification will open up global opportunities.', exHi: 'एक अंतरराष्ट्रीय योग्यता प्राप्त करने से वैश्विक अवसर खुलेंगे।', exEs: 'Obtener una titulación internacional abrirá oportunidades globales.', ic: '📜' },
    { w: 'scholarship', p: '/ˈskɒləʃɪp/', m: 'a grant or payment made to support a student\'s education, awarded on the basis of academic achievement', hi: 'छात्रवृत्ति / स्कॉलरशिप', es: 'beca de estudios', fr: 'bourse d\'études', de: 'Stipendium', pt: 'bolsa de estudos', zh: '奖学金', ar: 'منحة دراسية', ja: '奨学金', ru: 'стипендия / грант', ex: 'He won a full academic scholarship to study computer science in Canada.', exHi: 'उसने कनाडा में कंप्यूटर विज्ञान का अध्ययन करने के लिए एक पूर्ण शैक्षणिक छात्रवृत्ति जीती।', exEs: 'Ganó una beca completa para estudiar informática en Canadá.', ic: '🎓' },
    { w: 'milestone', p: '/ˈmaɪlstəʊn/', m: 'a significant stage or event in the development of something', hi: 'मील का पत्थर / महत्वपूर्ण पड़ाव', es: 'hito / etapa clave', fr: 'étape importante / jalon', de: 'Meilenstein', pt: 'marco / etapa importante', zh: '里程碑', ar: 'محطة هامة / إنجاز فارق', ja: '節目 / マイルストーン', ru: 'веха / рубеж', ex: 'Graduating from university was a major milestone in her personal life.', exHi: 'विश्वविद्यालय से स्नातक होना उनके व्यक्तिगत जीवन का एक बड़ा मील का पत्थर था।', exEs: 'Graduarse de la universidad fue un hito importante en su vida.', ic: '🚩' },
    { w: 'achieve', p: '/əˈtʃiːv/', m: 'successfully bring about or reach a desired objective by effort or skill', hi: 'हासिल करना / प्राप्त करना', es: 'alcanzar / lograr', fr: 'atteindre / accomplir', de: 'erreichen / erzielen', pt: 'alcançar / conquistar', zh: '实现 / 达到', ar: 'يحقق / ينجز', ja: '達成する / 成し遂げる', ru: 'достигать / добиваться', ex: 'With persistent dedication, you can achieve all your professional goals.', exHi: 'लगातार समर्पण के साथ, आप अपने सभी पेशेवर लक्ष्यों को प्राप्त कर सकते हैं।', exEs: 'Con dedicación constante, puedes lograr todas tus metas profesionales.', ic: '🏆' },
    { w: 'intend', p: '/ɪnˈtend/', m: 'have in mind as a purpose or plan', hi: 'इरादा रखना / योजना बनाना', es: 'tener la intención de / planear', fr: 'avoir l\'intention de / envisager', de: 'beabsichtigen / vorhaben', pt: 'pretender / ter intenção de', zh: '打算 / 意图', ar: 'ينوي / يعتزم', ja: '意図する / つもりである', ru: 'намереваться / собираться', ex: 'I intend to master fluent conversational English within twelve months.', exHi: 'मेरा बारह महीनों के भीतर धाराप्रवाह बोलचाल की अंग्रेजी में महारत हासिल करने का इरादा है।', exEs: 'Tengo la intención de dominar el inglés fluido en doce meses.', ic: '🎯' },
    { w: 'abroad', p: '/əˈbrɔːd/', m: 'in or to a foreign country or countries', hi: 'विदेश में / परदेस', es: 'en el extranjero / afuera', fr: 'à l\'étranger', de: 'im Ausland / ins Ausland', pt: 'no exterior / para fora', zh: '在国外 / 出国', ar: 'في الخارج / خارج البلاد', ja: '海外で / 外国へ', ru: 'за границей / за рубеж', ex: 'Many university graduates plan to study or work abroad for two years.', exHi: 'कई विश्वविद्यालय स्नातक दो साल के लिए विदेश में अध्ययन या काम करने की योजना बनाते हैं।', exEs: 'Muchos graduados planean estudiar o trabajar en el extranjero.', ic: '✈️' },
    { w: 'promotion', p: '/prəˈməʊʃn/', m: 'activity that supports or provides active encouragement for the furthering of a cause or promotion in a job', hi: 'पदोन्नति / तरक्की', es: 'ascenso laboral / promoción', fr: 'promotion (professionnelle)', de: 'Beförderung', pt: 'promoção / ascensão', zh: '晋升 / 升职', ar: 'ترقية وظيفية', ja: '昇進 / プロモーション', ru: 'повышение (по службе)', ex: 'After leading the successful project, he earned a well-deserved promotion.', exHi: 'सफल परियोजना का नेतृत्व करने के बाद, उन्होंने पदोन्नति अर्जित की।', exEs: 'Tras liderar el proyecto exitoso, obtuvo un merecido ascenso.', ic: '📈' },
    { w: 'internship', p: '/ˈɪntɜːnʃɪp/', m: 'the position of a student or trainee who works in an organization to gain work experience', hi: 'इंटर्नशिप / प्रशिक्षुता', es: 'pasantía / prácticas', fr: 'stage (en entreprise)', de: 'Praktikum', pt: 'estágio', zh: '实习期', ar: 'فترة تدريب مهني', ja: 'インターンシップ / 実習', ru: 'стажировка / практика', ex: 'She completed a six-month summer internship at a design agency.', exHi: 'उसने एक डिजाइन एजेंसी में छह महीने की समर इंटर्नशिप पूरी की।', exEs: 'Ella completó una pasantía de seis meses en una agencia de diseño.', ic: '🧑‍💻' },
    { w: 'opportunity', p: '/ˌɒpəˈtjuːnəti/', m: 'a set of circumstances that makes it possible to do something', hi: 'अवसर / मौका', es: 'oportunidad', fr: 'opportunité / occasion', de: 'Gelegenheit / Chance', pt: 'oportunidade', zh: '机会 / 机遇', ar: 'فرصة', ja: '機会 / チャンス', ru: 'возможность / шанс', ex: 'Working in a multinational company provides great opportunities to grow.', exHi: 'एक बहुराष्ट्रीय कंपनी में काम करना आगे बढ़ने के बेहतरीन अवसर प्रदान करता है।', exEs: 'Trabajar en una multinacional brinda grandes oportunidades de crecimiento.', ic: '🚪' },
    { w: 'certificate', p: '/səˈtɪfɪkət/', m: 'an official document certifying that one has fulfilled requirements', hi: 'प्रमाणपत्र / सर्टिफिकेट', es: 'certificado / diploma', fr: 'certificat / attestation', de: 'Zertifikat / Zeugnis', pt: 'certificado', zh: '证书 / 认证', ar: 'شهادة معتمدة', ja: '修了証 / 証明書', ru: 'сертификат / свидетельство', ex: 'You will receive an official language proficiency certificate upon completion.', exHi: 'पूरा होने पर आपको एक आधिकारिक भाषा प्रवीणता प्रमाणपत्र प्राप्त होगा।', exEs: 'Recibirá un certificado oficial de idioma al finalizar el curso.', ic: '📄' },
    { w: 'entrepreneur', p: '/ˌɒntrəprəˈnɜː/', m: 'a person who sets up a business, taking on financial risks in the hope of profit', hi: 'उद्यमी / बिजनेसमैन', es: 'emprendedor / empresario', fr: 'entrepreneur', de: 'Unternehmer', pt: 'empreendedor', zh: '创业家 / 企业家', ar: 'رائد أعمال', ja: '起業家 / アントレプレナー', ru: 'предприниматель', ex: 'The young entrepreneur launched an eco-friendly packaging startup.', exHi: 'युवा उद्यमी ने एक पर्यावरण-अनुकूल पैकेजिंग स्टार्टअप शुरू किया।', exEs: 'El joven emprendedor lanzó una empresa de envases ecológicos.', ic: '💡' },
    { w: 'vision', p: '/ˈvɪʒn/', m: 'the ability to think about or plan the future with imagination or wisdom', hi: 'दृष्टिकोण / विज़न', es: 'visión de futuro', fr: 'vision', de: 'Vision / Weitblick', pt: 'visão de futuro', zh: '愿景 / 远见', ar: 'رؤية مستقبلية', ja: '展望 / ビジョン', ru: 'видение / проницательность', ex: 'A successful leader must communicate a clear vision for the team.', exHi: 'एक सफल नेता को टीम के लिए एक स्पष्ट दृष्टिकोण संप्रेषित करना चाहिए।', exEs: 'Un líder exitoso debe comunicar una visión clara al equipo.', ic: '🔭' },
    { w: 'dedication', p: '/ˌdedɪˈkeɪʃn/', m: 'the quality of being committed to a task or purpose', hi: 'समर्पण / निष्ठा', es: 'dedicación / empeño', fr: 'dévouement / implication', de: 'Hingabe / Engagement', pt: 'dedicação', zh: '奉献 / 专注', ar: 'تفانٍ / إخلاص', ja: '献身 / 熱意', ru: 'преданность делу / самоотдача', ex: 'Her hard work and dedication inspired the entire department.', exHi: 'उनकी कड़ी मेहनत और समर्पण ने पूरे विभाग को प्रेरित किया।', exEs: 'Su esfuerzo y dedicación inspiraron a todo el departamento.', ic: '💪' },
    { w: 'overseas', p: '/ˌəʊvəˈsiːz/', m: 'in or to a foreign country, especially one across the sea', hi: 'समुद्र पार / विदेश में', es: 'de ultramar / en el extranjero', fr: 'à l\'étranger / outre-mer', de: 'in Übersee / im Ausland', pt: 'no exterior / no estrangeiro', zh: '在海外 / 留洋', ar: 'ما وراء البحار / في الخارج', ja: '海外の / 海外で', ru: 'за границей / за рубежом', ex: 'He received an exciting job offer from an overseas software firm.', exHi: 'उन्हें एक विदेशी सॉफ्टवेयर फर्म से एक रोमांचक नौकरी की पेशकश मिली।', exEs: 'Recibió una atractiva oferta de trabajo de una empresa en el extranjero.', ic: '🌐' },
    { w: 'progress', p: '/ˈprəʊɡres/', m: 'forward or onward movement toward a destination or goal', hi: 'प्रगति / सुधार', es: 'progreso / avance', fr: 'progrès / avancée', de: 'Fortschritt / Entwicklung', pt: 'progresso / avanço', zh: '进步 / 进展', ar: 'تقدم / تطور', ja: '進歩 / 上達', ru: 'прогресс / продвижение', ex: 'Consistent daily practice ensures continuous linguistic progress.', exHi: 'लगातार दैनिक अभ्यास निरंतर भाषाई प्रगति सुनिश्चित करता है।', exEs: 'La práctica diaria constante asegura un progreso lingüístico continuo.', ic: '📈' },
    { w: 'fulfill', p: '/fʊlˈfɪl/', m: 'achieve or realize something desired, promised, or predicted', hi: 'पूरा करना / साकार करना', es: 'cumplir / hacer realidad', fr: 'réaliser / accomplir', de: 'erfüllen / verwirklichen', pt: 'realizar / cumprir', zh: '实现 / 履行', ar: 'يحقق / يفي بـ', ja: '果たす / 実現する', ru: 'выполнять / осуществлять', ex: 'Studying in Oxford will fulfill her childhood educational dream.', exHi: 'ऑक्सफोर्ड में पढ़ाई करने से उनका बचपन का शैक्षिक सपना पूरा होगा।', exEs: 'Estudiar en Oxford cumplirá su sueño educativo de la infancia.', ic: '✨' },
    { w: 'ambitious', p: '/æmˈbɪʃəs/', m: 'having or showing a strong desire and determination to succeed', hi: 'महत्वाकांक्षी / ऊंचे इरादे वाला', es: 'ambicioso', fr: 'ambitieux', de: 'ehrgeizig / ambitioniert', pt: 'ambicioso', zh: '有雄心壮志的', ar: 'طموح', ja: '野心的な / 大志を抱いた', ru: 'честолюбивый / целеустремленный', ex: 'She set an ambitious timeline to finish her master\'s thesis in six months.', exHi: 'उसने छह महीने में अपने मास्टर की थीसिस पूरी करने के लिए एक महत्वाकांक्षी समयरेखा तय की।', exEs: 'Se fijó un plazo ambicioso para terminar su tesis de maestría.', ic: '🎯' }
  ],
  chunks: [
    { phrase: 'I hope to work as a...', meaning: 'expressing future career desire with infinitive', hi: 'मैं ... के रूप में काम करने की आशा करता हूँ', es: 'espero trabajar como...', fr: 'j\'espère travailler comme...', de: 'ich hoffe, als ... zu arbeiten', pt: 'espero trabalhar como...', zh: '我希望担任...一职', ar: 'آمل أن أعمل كـ...', ja: '〜として働くことを希望しています', ru: 'я надеюсь работать в качестве...', note: '"Hope to + base verb".', ic: '💼' },
    { phrase: 'I plan to study abroad next year', meaning: 'declaring concrete future educational intent', hi: 'मैं अगले साल विदेश में पढ़ने की योजना बना रहा हूँ', es: 'planeo estudiar en el extranjero el próximo año', fr: 'je prévois d\'étudier à l\'étranger l\'année prochaine', de: 'ich plane, nächstes Jahr im Ausland zu studieren', pt: 'planejo estudar no exterior no próximo ano', zh: '我计划明年出国留学', ar: 'أخطط للدراسة في الخارج العام القادم', ja: '来年留学する予定です', ru: 'я планирую учиться за границей в следующем году', note: 'Clear future plan chunk.', ic: '✈️' },
    { phrase: 'achieve my professional goals', meaning: 'succeeding in reaching career milestones', hi: 'अपने पेशेवर लक्ष्यों को हासिल करना', es: 'alcanzar mis metas profesionales', fr: 'atteindre mes objectifs professionnels', de: 'meine beruflichen Ziele erreichen', pt: 'alcançar meus objetivos profissionais', zh: '实现我的职业目标', ar: 'تحقيق أهدافي المهنية', ja: '仕事の目標を達成する', ru: 'достичь моих профессиональных целей', note: 'Standard resume/interview phrase.', ic: '🏆' },
    { phrase: 'apply for a scholarship', meaning: 'officially submitting documents for financial study aid', hi: 'छात्रवृत्ति के लिए आवेदन करना', es: 'solicitar una beca', fr: 'postuler pour une bourse', de: 'sich für ein Stipendium bewerben', pt: 'candidatar-se a uma bolsa de estudos', zh: '申请奖学金', ar: 'التقديم للحصول على منحة دراسية', ja: '奨学金に応募する', ru: 'подать заявку на получение стипендии', note: 'Academic opportunity chunk.', ic: '🎓' },
    { phrase: 'gain valuable work experience', meaning: 'acquiring skills through employment or internship', hi: 'मूल्यवान कार्य अनुभव प्राप्त करना', es: 'adquirir valiosa experiencia laboral', fr: 'acquérir une précieuse expérience professionnelle', de: 'wertvolle Arbeitserfahrung sammeln', pt: 'adquirir experiência profissional valiosa', zh: '积累宝贵的工作经验', ar: 'اكتساب خبرة عملية قيمة', ja: '貴重な実務経験を積む', ru: 'получить ценный опыт работы', note: 'Professional growth chunk.', ic: '📈' },
    { phrase: 'start my own business', meaning: 'becoming an entrepreneur and founding a company', hi: 'अपना खुद का व्यवसाय शुरू करना', es: 'iniciar mi propio negocio', fr: 'créer ma propre entreprise', de: 'mein eigenes Unternehmen gründen', pt: 'abrir meu próprio negócio', zh: '创办自己的企业', ar: 'بدء مشروعي التجاري الخاص', ja: '自分のビジネスを立ち上げる', ru: 'начать собственный бизнес', note: 'Entrepreneurship ambition.', ic: '💡' },
    { phrase: 'in the next five years', meaning: 'projecting accomplishments over a medium-term horizon', hi: 'अगले पांच वर्षों में', es: 'en los próximos cinco años', fr: 'dans les cinq prochaines années', de: 'in den nächsten fünf Jahren', pt: 'nos próximos cinco anos', zh: '在未来五年内', ar: 'خلال السنوات الخمس القادمة', ja: '今後5年間で', ru: 'в течение следующих пяти лет', note: 'Classic interview timeframe.', ic: '⏳' },
    { phrase: 'improve my English fluency', meaning: 'striving for natural, effortless spoken mastery', hi: 'अपनी अंग्रेजी प्रवाह में सुधार करना', es: 'mejorar mi fluidez en inglés', fr: 'améliorer mon aisance en anglais', de: 'meine Englischkenntnisse fließend verbessern', pt: 'melhorar minha fluência em inglês', zh: '提高我的英语流利度', ar: 'تحسين طلاقتي في اللغة الإنجليزية', ja: '英語の流暢さを向上させる', ru: 'улучшить мою беглость английского', note: 'Lifelong learning goal.', ic: '🗣️' }
  ],
  grammar: {
    title: 'Future Intentions & Ambitions: "Hope to", "Plan to", and "Going to"',
    concept: 'Articulating future ambitions using verbs of intention ("I hope to / I plan to / I intend to + base verb") and premeditated plans with "be going to".',
    patterns: [
      {
        title: 'Verbs of Intention + Infinitive',
        structure: 'Subject + hope / plan / intend / aim + to + Base Verb',
        rule: 'Verbs expressing ambition take the "to-infinitive" directly.',
        examples: [
          { en: 'I hope to graduate with honors next summer.', hi: 'मुझे अगली गर्मियों में सम्मान के साथ स्नातक होने की उम्मीद है।', es: 'Espero graduarme con honores el próximo verano.' },
          { en: 'She plans to open a graphic design studio in Berlin.', hi: 'वह बर्लिन में एक ग्राफिक डिजाइन स्टूडियो खोलने की योजना बना रही है।', es: 'Ella planea abrir un estudio de diseño gráfico en Berlín.' }
        ]
      },
      {
        title: 'Premeditated Decisions with "be going to"',
        structure: 'Subject + am / is / are + going to + Base Verb',
        rule: 'Use "be going to" for decisions already made before the moment of speaking.',
        examples: [
          { en: 'I am going to apply for the overseas software engineering internship.', hi: 'मैं विदेशी सॉफ्टवेयर इंजीनियरिंग इंटर्नशिप के लिए आवेदन करने जा रहा हूँ।', es: 'Voy a postularme para la pasantía de ingeniería de software en el extranjero.' },
          { en: 'We are going to launch our mobile application next month.', hi: 'हम अगले महीने अपना मोबाइल एप्लिकेशन लॉन्च करने जा रहे हैं।', es: 'Vamos a lanzar nuestra aplicación móvil el próximo mes.' }
        ]
      },
      {
        title: 'Polite Ambition with "Would like to"',
        structure: 'Subject + would like to + Base Verb',
        rule: 'Use "would like to" in professional interviews to express career goals courteously.',
        examples: [
          { en: 'I would like to lead an innovative marketing team in the future.', hi: 'मैं भविष्य में एक अभिनव मार्केटिंग टीम का नेतृत्व करना चाहूँगा।', es: 'Me gustaría liderar un equipo de marketing innovador en el futuro.' },
          { en: 'Where would you like to see yourself in five years?', hi: 'आप खुद को पांच साल में कहाँ देखना चाहेंगे?', es: '¿Dónde te gustaría verte dentro de cinco años?' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'I hope working in a big company.',
      cor: 'I hope to work in a big company.',
      exp: 'The verb "hope" must be followed by the to-infinitive ("to work"), not a gerund.',
      hi: '"Hope" के बाद to-infinitive आता है: "hope to work".',
      es: '"Hope" va seguido de infinitivo con "to": "hope to work".'
    },
    {
      inc: 'I am plan to study abroad.',
      cor: 'I plan to study abroad. / I am planning to study abroad.',
      exp: 'Use Present Simple "I plan to" or Present Continuous "I am planning to".',
      hi: '"I plan to study" या "I am planning to study" कहें।',
      es: 'Se dice "I plan to study" o "I am planning to study".'
    },
    {
      inc: 'She would like becoming a doctor.',
      cor: 'She would like to become a doctor.',
      exp: '"Would like" strictly requires the to-infinitive ("to become").',
      hi: '"Would like" के बाद "to become" आता है।',
      es: '"Would like" requiere infinitivo con "to": "to become".'
    },
    {
      inc: 'I will going to apply next week.',
      cor: 'I am going to apply next week.',
      exp: 'Do not combine "will" and "going to". Use "am going to apply".',
      hi: '"I am going to apply" कहें, "will" और "going to" को एक साथ न मिलाएं।',
      es: 'No mezcle "will" y "going to"; use "I am going to apply".'
    },
    {
      inc: 'He wants to go to abroad for work.',
      cor: 'He wants to go abroad for work.',
      exp: '"Abroad" is an adverb of place and does not take the preposition "to" before it.',
      hi: '"Go abroad" कहें, "to abroad" नहीं।',
      es: 'No se usa "to" antes de "abroad": "go abroad".'
    }
  ],
  dialogues: [
    {
      title: 'Discussing Career Ambitions in a Mentorship Meeting',
      context: 'Dev speaks with his career mentor, Sarah, about his five-year professional roadmap.',
      charA: { name: 'Dev', av: '👨🏽', role: 'Mentee' },
      charB: { name: 'Sarah', av: '👩🏼', role: 'Mentor' },
      turns: [
        { spk: 'Sarah', text: 'Dev, where would you like to see yourself professionally in the next five years?', hi: 'देव, आप अगले पांच वर्षों में खुद को पेशेवर रूप से कहाँ देखना चाहेंगे?', es: 'Dev, ¿dónde te gustaría verte profesionalmente en los próximos cinco años?' },
        { spk: 'Dev', text: 'I hope to become a senior cloud architect and lead a talented development team. I also plan to earn two advanced industry certifications this year.', hi: 'मुझे एक वरिष्ठ क्लाउड आर्किटेक्ट बनने और एक प्रतिभाशाली विकास दल का नेतृत्व करने की उम्मीद है। मैं इस साल दो उन्नत उद्योग प्रमाणपत्र अर्जित करने की योजना भी बना रहा हूँ।', es: 'Espero llegar a ser arquitecto de nube sénior y liderar un equipo. También planeo obtener dos certificaciones.' },
        { spk: 'Sarah', text: 'That is a very clear and ambitious goal! Are you going to apply for any international exchange programs?', hi: 'यह बहुत ही स्पष्ट और महत्वाकांक्षी लक्ष्य है! क्या आप किसी अंतरराष्ट्रीय विनिमय कार्यक्रम के लिए आवेदन करने जा रहे हैं?', es: '¡Es una meta muy clara y ambiciosa! ¿Vas a postularte a programas de intercambio internacional?' },
        { spk: 'Dev', text: 'Yes, I intend to apply for a six-month secondment in our Singapore office next spring to gain global leadership experience.', hi: 'हाँ, मैं वैश्विक नेतृत्व का अनुभव प्राप्त करने के लिए अगली वसंत ऋतु में हमारे सिंगापुर कार्यालय में छह महीने के कार्यकाल के लिए आवेदन करने का इरादा रखता हूँ।', es: 'Sí, tengo la intención de solicitar una estancia de seis meses en Singapur la próxima primavera.' }
      ]
    },
    {
      title: 'Planning Higher Studies Abroad',
      context: 'Aanya and Carlos compare university master\'s applications and scholarship deadlines.',
      charA: { name: 'Aanya', av: '👩🏾', role: 'Graduate' },
      charB: { name: 'Carlos', av: '👨🏻', role: 'Graduate' },
      turns: [
        { spk: 'Aanya', text: 'Carlos, have you submitted your university application for the master\'s in data science in Dublin?', hi: 'कार्लोस, क्या आपने डबलिन में डेटा साइंस में मास्टर्स के लिए अपना विश्वविद्यालय आवेदन जमा कर दिया है?', es: 'Carlos, ¿has enviado tu solicitud universitaria para la maestría en Dublín?' },
        { spk: 'Carlos', text: 'Not yet, but I am going to submit it by Friday. I am also applying for an academic scholarship to cover tuition fees.', hi: 'अभी नहीं, लेकिन मैं इसे शुक्रवार तक जमा करने जा रहा हूँ। मैं ट्यूशन फीस को कवर करने के लिए एक शैक्षणिक छात्रवृत्ति के लिए भी आवेदन कर रहा हूँ।', es: 'Aún no, pero la voy a enviar el viernes. También estoy solicitando una beca para la matrícula.' },
        { spk: 'Aanya', text: 'I hope you win the scholarship! Studying abroad will be a transformative milestone for your career.', hi: 'मुझे आशा है कि आपको छात्रवृत्ति मिलेगी! विदेश में अध्ययन करना आपके करियर के लिए एक परिवर्तनकारी मील का पत्थर साबित होगा।', es: '¡Espero que ganes la beca! Estudiar en el extranjero será un hito transformador para tu carrera.' },
        { spk: 'Carlos', text: 'Thank you, Aanya. I hope to return home after my degree and start an innovative tech consultancy.', hi: 'धन्यवाद, आन्या। मुझे अपनी डिग्री के बाद घर लौटने और एक अभिनव तकनीकी परामर्श शुरू करने की उम्मीद है।', es: 'Gracias, Aanya. Espero volver tras graduarme y crear una consultora tecnológica innovadora.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_a2_9_134_p01',
      type: 'multiple_choice',
      prompt: 'Select the correct grammatical structure for expressing future career ambitions:',
      options: [
        { id: '1', text: 'I hope to work as a software engineer in Toronto.', isCorrect: true },
        { id: '2', text: 'I hope working as a software engineer in Toronto.', isCorrect: false },
        { id: '3', text: 'I am hope to work as a software engineer.', isCorrect: false },
        { id: '4', text: 'I hope to working as a software engineer.', isCorrect: false }
      ],
      correctAnswer: 'I hope to work as a software engineer in Toronto.',
      explanation: '"Hope to + base verb (work)".'
    },
    {
      id: 'ex_a2_9_134_p02',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "He won a full academic _____ (scholarship) to study in London."',
      correctAnswer: 'scholarship',
      explanation: 'Academic "scholarship".'
    },
    {
      id: 'ex_a2_9_134_p03',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence about future intentions:',
      tokens: ['She', 'plans', 'to', 'study', 'abroad', 'next', 'autumn'],
      correctAnswer: 'She plans to study abroad next autumn',
      explanation: 'Plan to + base verb + abroad.'
    },
    {
      id: 'ex_a2_9_134_p04',
      type: 'translation',
      prompt: 'Translate to English: "मैं अगले साल अपनी खुद की कंपनी शुरू करने की योजना बना रहा हूँ।"',
      correctAnswer: 'I plan to start my own company next year.',
      acceptableAnswers: [
        'I am planning to start my own company next year.',
        'I plan to start my own business next year.'
      ],
      explanation: '"Plan to start my own company next year".'
    },
    {
      id: 'ex_a2_9_134_p05',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence: "He wants to go to abroad next summer."',
      correctAnswer: 'He wants to go abroad next summer.',
      explanation: 'Remove "to" before the adverb "abroad".'
    },
    {
      id: 'ex_a2_9_134_p06',
      type: 'listening',
      prompt: 'Listen to the interview and select the candidate\'s five-year goal:',
      audioText: 'In the next five years, I hope to lead a global design team and launch sustainable product lines across Europe.',
      options: [
        { id: '1', text: 'Lead a global design team and launch sustainable products', isCorrect: true },
        { id: '2', text: 'Retire immediately and stop working', isCorrect: false },
        { id: '3', text: 'Move to the countryside to farm vegetables', isCorrect: false },
        { id: '4', text: 'Take a long permanent vacation', isCorrect: false }
      ],
      correctAnswer: 'Lead a global design team and launch sustainable products',
      explanation: 'The speaker states "hope to lead a global design team and launch sustainable product lines".'
    },
    {
      id: 'ex_a2_9_134_p07',
      type: 'listen_and_type',
      prompt: 'Listen and type the exact sentence:',
      audioText: 'I am going to apply for a scholarship.',
      correctAnswer: 'I am going to apply for a scholarship.',
      explanation: 'Type the sentence accurately.'
    },
    {
      id: 'ex_a2_9_134_p08',
      type: 'speaking',
      prompt: 'Read aloud clearly: "My ambition is to gain valuable international experience and achieve all my professional goals."',
      targetText: 'My ambition is to gain valuable international experience and achieve all my professional goals.',
      explanation: 'Speak with clear, confident professional articulation.'
    },
    {
      id: 'ex_a2_9_134_p09',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nInterviewer: "Where do you see yourself in three years?"\nCandidate: "I _____ like to become a project manager in this firm."',
      options: [
        { id: '1', text: 'would', isCorrect: true },
        { id: '2', text: 'will', isCorrect: false },
        { id: '3', text: 'am', isCorrect: false },
        { id: '4', text: 'have', isCorrect: false }
      ],
      correctAnswer: 'would',
      explanation: '"I would like to become...".'
    },
    {
      id: 'ex_a2_9_134_p10',
      type: 'multiple_choice',
      prompt: 'What does "milestone" mean in a career context?',
      options: [
        { id: '1', text: 'A significant achievement or major stage in personal or professional progress.', isCorrect: true },
        { id: '2', text: 'A heavy stone used to build ancient houses.', isCorrect: false },
        { id: '3', text: 'A fine or monetary penalty paid for being late.', isCorrect: false },
        { id: '4', text: 'A piece of furniture in an office.', isCorrect: false }
      ],
      correctAnswer: 'A significant achievement or major stage in personal or professional progress.',
      explanation: 'A milestone is a major progress landmark.'
    },
    {
      id: 'ex_a2_9_134_p11',
      type: 'match_pairs',
      prompt: 'Match each career concept with its description:',
      options: [
        { id: '1', text: 'internship → [practical training position for graduates]' },
        { id: '2', text: 'scholarship → [financial aid for academic study]' },
        { id: '3', text: 'promotion → [advancement to a higher job rank]' },
        { id: '4', text: 'entrepreneur → [person who starts their own business]' }
      ],
      correctAnswer: 'matched',
      explanation: 'Career terminology matching.'
    },
    {
      id: 'ex_a2_9_134_p12',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "She earned a well-deserved _____ (promote) after completing the project."',
      correctAnswer: 'promotion',
      explanation: 'Noun "promotion".'
    },
    {
      id: 'ex_a2_9_134_p13',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['I', 'intend', 'to', 'improve', 'my', 'English', 'fluency', 'this', 'year'],
      correctAnswer: 'I intend to improve my English fluency this year',
      explanation: 'Intend to + base verb.'
    },
    {
      id: 'ex_a2_9_134_p14',
      type: 'translation',
      prompt: 'Translate to English: "वह भविष्य में एक सफल उद्यमी बनना चाहती है।"',
      correctAnswer: 'She wants to become a successful entrepreneur in the future.',
      acceptableAnswers: [
        'She would like to become a successful entrepreneur in the future.',
        'She hopes to become a successful entrepreneur in the future.'
      ],
      explanation: '"Wants to become a successful entrepreneur".'
    },
    {
      id: 'ex_a2_9_134_p15',
      type: 'multiple_choice',
      prompt: 'Select the grammatically correct sentence:',
      options: [
        { id: '1', text: 'We are going to launch the new marketing campaign on Monday.', isCorrect: true },
        { id: '2', text: 'We are will launch the new campaign on Monday.', isCorrect: false },
        { id: '3', text: 'We going to launch the new campaign.', isCorrect: false },
        { id: '4', text: 'We are go to launch the new campaign.', isCorrect: false }
      ],
      correctAnswer: 'We are going to launch the new marketing campaign on Monday.',
      explanation: '"Are going to launch".'
    }
  ],
  review: [
    {
      id: 'ex_a2_9_134_r01',
      type: 'multiple_choice',
      prompt: 'Choose the correct form:',
      options: [
        { id: '1', text: 'I would like to apply for the management position.', isCorrect: true },
        { id: '2', text: 'I would like applying for the management position.', isCorrect: false },
        { id: '3', text: 'I would like to applying for the position.', isCorrect: false },
        { id: '4', text: 'I like apply for the position.', isCorrect: false }
      ],
      correctAnswer: 'I would like to apply for the management position.',
      explanation: '"Would like to apply".'
    },
    {
      id: 'ex_a2_9_134_r02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "He has high _____ (ambitious) to become a pilot."',
      correctAnswer: 'ambitions',
      explanation: 'Noun plural "ambitions".'
    },
    {
      id: 'ex_a2_9_134_r03',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['She', 'hopes', 'to', 'earn', 'an', 'international', 'certificate'],
      correctAnswer: 'She hopes to earn an international certificate',
      explanation: 'Hope to + base verb.'
    },
    {
      id: 'ex_a2_9_134_r04',
      type: 'translation',
      prompt: 'Translate to English: "मैं विदेश में काम करने के अवसर तलाश रहा हूँ।"',
      correctAnswer: 'I am looking for opportunities to work abroad.',
      acceptableAnswers: ['I am searching for opportunities to work abroad.'],
      explanation: '"Opportunities to work abroad".'
    },
    {
      id: 'ex_a2_9_134_r05',
      type: 'error_correction',
      prompt: 'Correct the error: "I hope winning the scholarship."',
      correctAnswer: 'I hope to win the scholarship.',
      explanation: 'Change "winning" to "to win" after "hope".'
    }
  ],
  assessment: [
    {
      id: 'ex_a2_9_134_a01',
      type: 'multiple_choice',
      prompt: 'Which statement accurately describes a five-year professional plan?',
      options: [
        { id: '1', text: 'In the next five years, I plan to complete my master\'s degree and gain valuable work experience abroad.', isCorrect: true },
        { id: '2', text: 'In five years I plan completing degree and go to abroad.', isCorrect: false },
        { id: '3', text: 'I hope to working abroad in next five years.', isCorrect: false },
        { id: '4', text: 'I will going to complete my degree.', isCorrect: false }
      ],
      correctAnswer: 'In the next five years, I plan to complete my master\'s degree and gain valuable work experience abroad.',
      explanation: 'Accurate syntax and preposition usage.'
    },
    {
      id: 'ex_a2_9_134_a02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "With hard work, you can _____ (achieve) all your dreams."',
      correctAnswer: 'achieve',
      explanation: 'Modal "can + achieve".'
    },
    {
      id: 'ex_a2_9_134_a03',
      type: 'translation',
      prompt: 'Translate to English: "मैं अपने पेशेवर लक्ष्यों को हासिल करने के लिए कड़ी मेहनत कर रहा हूँ।"',
      correctAnswer: 'I am working hard to achieve my professional goals.',
      acceptableAnswers: ['I am working hard to reach my professional goals.'],
      explanation: '"Working hard to achieve my professional goals".'
    },
    {
      id: 'ex_a2_9_134_a04',
      type: 'speaking',
      prompt: 'Read aloud clearly: "I hope to gain valuable international experience and start an innovative tech company in the near future."',
      targetText: 'I hope to gain valuable international experience and start an innovative tech company in the near future.',
      explanation: 'Speak with poise, clear enunciation, and professional confidence.'
    },
    {
      id: 'ex_a2_9_134_a05',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['Dedication', 'and', 'vision', 'lead', 'to', 'long-term', 'career', 'success'],
      correctAnswer: 'Dedication and vision lead to long-term career success',
      explanation: 'Compound subject declarative sentence.'
    }
  ]
};

// =========================================================================
// LESSON 135: Unit 9 Review, A2 Level Consolidation & Integrated Milestone Mastery
// =========================================================================
export const LESSON_135_CONFIG: LessonConfigA2 = {
  num: 135,
  title: 'Unit 9 Review, A2 Level Consolidation & Integrated Milestone Mastery',
  icon: '🏆',
  estMin: 30,
  objTitle: 'Comprehensive Synthesis of A2 Life, Travel, Social Interactions & Ambitions',
  objDesc: 'Consolidate all linguistic structures across Unit 9: navigating transit, booking accommodations, dining out, comparing items, managing transactions, handling polite complaints, describing health and ailments, promoting sustainability, discussing creative arts, and declaring future aspirations.',
  objHi: 'यूनिट 9 की सभी भाषा संरचनाओं का व्यापक दोहराव: यात्रा, होटल, रेस्तरां, खरीदारी, शिकायतें, स्वास्थ्य, पर्यावरण, कला-शौक और भविष्य के लक्ष्य।',
  objEs: 'Consolidación completa de la Unidad 9: viajes, hoteles, compras, quejas, salud, medio ambiente, aficiones y planes de futuro.',
  canDo: [
    'I can navigate travel, hotel check-ins, transit routes, and restaurant dining confidently.',
    'I can compare products, calculate expenses, make polite complaints, and request refunds.',
    'I can discuss health symptoms, dosage instructions, and ecological habits using modal verbs.',
    'I can describe creative arts, express leisure preferences, and articulate future career ambitions.'
  ],
  canDoHi: [
    'मैं यात्रा, होटल चेक-इन, ट्रांजिट और रेस्तरां में बातचीत आत्मविश्वास से कर सकता हूँ।',
    'मैं उत्पादों की तुलना, खरीदारी, विनम्र शिकायतें और रिफंड का अनुरोध कर सकता हूँ।',
    'मैं स्वास्थ्य के लक्षण, दवा की खुराक और पर्यावरण की आदतों पर चर्चा कर सकता हूँ।',
    'मैं रचनात्मक कलाओं, शौक और भविष्य के करियर लक्ष्यों को धाराप्रवाह रूप से व्यक्त कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo desenvolverme en viajes, hoteles, transporte y restaurantes.',
    'Puedo comparar productos, hacer quejas corteses y pedir reembolsos.',
    'Puedo describir síntomas de salud, dosis y hábitos sostenibles.',
    'Puedo hablar de artes, aficiones y metas profesionales futuras.'
  ],
  vocab: [
    { w: 'consolidation', p: '/kənˌsɒlɪˈdeɪʃn/', m: 'the action or process of combining several things into a single more effective or coherent whole', hi: 'समेकन / सुदृढ़ीकरण', es: 'consolidación / afianzamiento', fr: 'consolidation / renforcement', de: 'Festigung / Konsolidierung', pt: 'consolidação', zh: '巩固 / 强化', ar: 'ترسيخ / توطيد', ja: '定着 / 統合', ru: 'закрепление / консолидация', ex: 'This comprehensive review ensures permanent consolidation of A2 grammar.', exHi: 'यह व्यापक समीक्षा A2 व्याकरण का स्थायी सुदृढ़ीकरण सुनिश्चित करती है।', exEs: 'Este repaso asegura la consolidación permanente de la gramática A2.', ic: '📚' },
    { w: 'itinerary', p: '/aɪˈtɪnərəri/', m: 'a planned route or journey', hi: 'यात्रा कार्यक्रम / कार्यक्रम सूची', es: 'itinerario / plan de viaje', fr: 'itinéraire', de: 'Reiseroute / Reiseplan', pt: 'itinerário / roteiro', zh: '行程 / 旅行计划', ar: 'برنامج رحلة / خط سير', ja: '旅程 / 旅行日程', ru: 'маршрут / план поездки', ex: 'Check our daily travel itinerary before boarding the morning train.', exHi: 'सुबह की ट्रेन में चढ़ने से पहले हमारे दैनिक यात्रा कार्यक्रम की जाँच करें।', exEs: 'Consulta nuestro itinerario de viaje antes de subir al tren.', ic: '🗺️' },
    { w: 'reservation', p: '/ˌrezəˈveɪʃn/', m: 'an arrangement to secure a seat, room, or table in advance', hi: 'आरक्षण / बुकिंग', es: 'reserva', fr: 'réservation', de: 'Reservierung / Buchung', pt: 'reserva', zh: '预订', ar: 'حجز', ja: '予約', ru: 'бронирование / резервация', ex: 'We have a confirmed table reservation under the name of Sharma.', exHi: 'हमारे पास शर्मा के नाम से एक कन्फर्म टेबल आरक्षण है।', exEs: 'Tenemos una reserva confirmada a nombre de Sharma.', ic: '📅' },
    { w: 'recommendation', p: '/ˌrekəmenˈdeɪʃn/', m: 'a suggestion or proposal as to the best course of action', hi: 'सिफारिश / सुझाव', es: 'recomendación / sugerencia', fr: 'recommandation', de: 'Empfehlung', pt: 'recomendação', zh: '推荐 / 建议', ar: 'توصية / نصيحة', ja: '推薦 / お勧め', ru: 'рекомендация / совет', ex: 'The waiter gave an excellent recommendation for the seafood paella.', exHi: 'वेटर ने सीफूड पेला के लिए एक उत्कृष्ट सिफारिश दी।', exEs: 'El camarero dio una excelente recomendación sobre la paella.', ic: '⭐' },
    { w: 'comparison', p: '/kəmˈpærɪsn/', m: 'a consideration or estimate of the similarities or dissimilarities between things', hi: 'तुलना', es: 'comparación', fr: 'comparaison', de: 'Vergleich', pt: 'comparação', zh: '比较 / 对比', ar: 'مقارنة', ja: '比較 / 対比', ru: 'сравнение / сопоставление', ex: 'Making a careful price comparison helps you save money when shopping.', exHi: 'सावधानीपूर्वक मूल्य तुलना करने से आपको खरीदारी करते समय पैसे बचाने में मदद मिलती है।', exEs: 'Hacer una comparación de precios te ayuda a ahorrar al comprar.', ic: '⚖️' },
    { w: 'defective', p: '/dɪˈfektɪv/', m: 'imperfect or faulty; not functioning properly', hi: 'दोषपूर्ण / खराब', es: 'defectuoso', fr: 'défectueux', de: 'defekt', pt: 'defeituoso', zh: '有缺陷的', ar: 'معيب', ja: '欠陥のある', ru: 'дефектный', ex: 'The store replaced the defective electronic kettle without hesitation.', exHi: 'स्टोर ने बिना किसी झिझक के खराब इलेक्ट्रॉनिक केतली को बदल दिया।', exEs: 'La tienda reemplazó el hervidor defectuoso sin dudarlo.', ic: '⚠️' },
    { w: 'symptom', p: '/ˈsɪmptəm/', m: 'a sign or indication of something, especially a disease or physical disorder', hi: 'लक्षण', es: 'síntoma', fr: 'symptôme', de: 'Symptom', pt: 'sintoma', zh: '症状', ar: 'عرض مرضي', ja: '症状', ru: 'симптом', ex: 'A sore throat and mild fever were her initial symptoms.', exHi: 'गले में खराश और हल्का बुखार उसके शुरुआती लक्षण थे।', exEs: 'Un dolor de garganta y fiebre leve fueron sus síntomas iniciales.', ic: '🌡️' },
    { w: 'prescription', p: '/prɪˈskrɪpʃn/', m: 'an authorized medical instruction for medicine', hi: 'डॉक्टर का पर्चा', es: 'receta médica', fr: 'ordonnance', de: 'Rezept', pt: 'receita médica', zh: '处方', ar: 'وصفة طبية', ja: '処方箋', ru: 'рецепт', ex: 'Show the prescription to the pharmacist to receive the antibiotics.', exHi: 'एंटीबायोटिक्स प्राप्त करने के लिए फार्मासिस्ट को पर्चा दिखाएं।', exEs: 'Muestre la receta médica al farmacéutico para recibir los antibióticos.', ic: '📄' },
    { w: 'sustainable', p: '/səˈsteɪnəbl/', m: 'able to be maintained without depleting natural resources', hi: 'टिकाऊ / पर्यावरण अनुकूल', es: 'sostenible', fr: 'durable', de: 'nachhaltig', pt: 'sustentável', zh: '可持续的', ar: 'مستدام', ja: '持続可能な', ru: 'устойчивый / экологичный', ex: 'Adopting sustainable habits helps protect our planet for future generations.', exHi: 'टिकाऊ आदतों को अपनाने से भावी पीढ़ियों के लिए हमारे ग्रह की रक्षा करने में मदद मिलती है।', exEs: 'Adoptar hábitos sostenibles ayuda a proteger el planeta.', ic: '🌱' },
    { w: 'creativity', p: '/ˌkriːeɪˈtɪvəti/', m: 'the use of imagination or original ideas to create something', hi: 'रचनात्मकता / सृजनशीलता', es: 'creatividad', fr: 'créativité', de: 'Kreativität', pt: 'criatividade', zh: '创造力', ar: 'إبداع', ja: '創造性', ru: 'творчество / креативность', ex: 'Playing musical instruments allows children to develop their creativity.', exHi: 'वाद्य यंत्र बजाने से बच्चों में अपनी रचनात्मकता विकसित होती है।', exEs: 'Tocar instrumentos permite a los niños desarrollar su creatividad.', ic: '🎨' },
    { w: 'aspiration', p: '/ˌæspəˈreɪʃn/', m: 'a hope or ambition of achieving something', hi: 'आकांक्षा / बड़ा लक्ष्य', es: 'aspiración', fr: 'aspiration', de: 'Bestrebung', pt: 'aspiração', zh: '抱负', ar: 'طموح', ja: '大志', ru: 'стремление', ex: 'Studying abroad was his highest educational aspiration.', exHi: 'विदेश में पढ़ाई करना उनकी सर्वोच्च शैक्षिक आकांक्षा थी।', exEs: 'Estudiar en el extranjero era su mayor aspiración educativa.', ic: '🚀' },
    { w: 'refund', p: '/ˈriːfʌnd/', m: 'a repayment of a sum of money', hi: 'रिफंड / धन वापसी', es: 'reembolso', fr: 'remboursement', de: 'Rückerstattung', pt: 'reembolso', zh: '退款', ar: 'استرداد نقدي', ja: '返金', ru: 'возврат средств', ex: 'The hotel issued a full refund due to the room maintenance issue.', exHi: 'कमरे के रखरखाव के मुद्दे के कारण होटल ने पूरा रिफंड जारी किया।', exEs: 'El hotel emitió un reembolso completo por el problema en la habitación.', ic: '💵' },
    { w: 'allergic', p: '/əˈlɜːdʒɪk/', m: 'having an allergy to something', hi: 'एलर्जी से ग्रस्त', es: 'alérgico', fr: 'allergique', de: 'allergisch', pt: 'alérgico', zh: '过敏的', ar: 'مصاب بالحساسية', ja: 'アレルギーの', ru: 'аллергический / имеющий аллергию', ex: 'Please confirm that the dish contains no nuts, as I am severely allergic.', exHi: 'कृपया पुष्टि करें कि इस व्यंजन में कोई मेवे नहीं हैं, क्योंकि मुझे गंभीर एलर्जी है।', exEs: 'Confirme que el plato no tiene frutos secos, ya que soy alérgico.', ic: '⚠️' },
    { w: 'renewable', p: '/rɪˈnjuːəbl/', m: 'capable of being replenished naturally', hi: 'नवीकरणीय', es: 'renovable', fr: 'renouvelable', de: 'erneuerbar', pt: 'renovável', zh: '可再生的', ar: 'متجدد', ja: '再生可能な', ru: 'возобновляемый', ex: 'Solar panels provide clean, renewable electricity all year round.', exHi: 'सौर पैनल पूरे वर्ष स्वच्छ, नवीकरणीय बिजली प्रदान करते हैं।', exEs: 'Los paneles solares proporcionan electricidad limpia y renovable.', ic: '☀️' },
    { w: 'instrument', p: '/ˈɪnstrəmənt/', m: 'an object for producing musical sounds', hi: 'वाद्य यंत्र', es: 'instrumento musical', fr: 'instrument', de: 'Instrument', pt: 'instrumento', zh: '乐器', ar: 'آلة موسيقية', ja: '楽器', ru: 'инструмент', ex: 'Learning to play the violin takes patience and regular daily practice.', exHi: 'वायलिन बजाना सीखने के लिए धैर्य और नियमित दैनिक अभ्यास की आवश्यकता होती है।', exEs: 'Aprender a tocar el violín requiere paciencia y práctica diaria.', ic: '🎻' },
    { w: 'scholarship', p: '/ˈskɒləʃɪp/', m: 'financial aid for student education', hi: 'छात्रवृत्ति', es: 'beca', fr: 'bourse', de: 'Stipendium', pt: 'bolsa de estudos', zh: '奖学金', ar: 'منحة دراسية', ja: '奨学金', ru: 'стипендия', ex: 'She was awarded a merit-based scholarship for her master\'s degree.', exHi: 'उन्हें उनकी मास्टर डिग्री के लिए योग्यता आधारित छात्रवृत्ति से सम्मानित किया गया।', exEs: 'Fue premiada con una beca por mérito para su maestría.', ic: '🎓' },
    { w: 'milestone', p: '/ˈmaɪlstəʊn/', m: 'a significant developmental stage', hi: 'महत्वपूर्ण पड़ाव', es: 'hito', fr: 'jalon', de: 'Meilenstein', pt: 'marco', zh: '里程碑', ar: 'محطة هامة', ja: '節目', ru: 'рубеж / веха', ex: 'Completing Unit 9 is a milestone on your journey to B1 fluency.', exHi: 'यूनिट 9 को पूरा करना आपकी B1 प्रवाह की यात्रा पर एक मील का पत्थर है।', exEs: 'Completar la Unidad 9 es un hito hacia la fluidez B1.', ic: '🚩' },
    { w: 'mastery', p: '/ˈmɑːstəri/', m: 'comprehensive knowledge or skill in a subject', hi: 'महारत / प्रवीणता', es: 'dominio / maestría', fr: 'maîtrise', de: 'Beherrschung / Meisterschaft', pt: 'domínio / mestria', zh: '精通 / 掌握', ar: 'إتقان / براعة', ja: '習熟 / 熟達', ru: 'мастерство / владение', ex: 'You have achieved complete practical mastery of CEFR A2 English!', exHi: 'आपने CEFR A2 अंग्रेजी में पूर्ण व्यावहारिक महारत हासिल कर ली है!', exEs: '¡Has alcanzado el dominio práctico completo del inglés A2!', ic: '🏅' },
    { w: 'fluency', p: '/ˈfluːənsi/', m: 'the ability to express oneself easily and articulately', hi: 'धाराप्रवाह बोलना / प्रवाह', es: 'fluidez', fr: 'fluidité / aisance', de: 'Flüssigkeit / Geläufigkeit', pt: 'fluência', zh: '流利度', ar: 'طلاقة', ja: '流暢さ', ru: 'беглость (речи)', ex: 'Daily spoken practice builds natural and confident conversational fluency.', exHi: 'दैनिक बोलचाल का अभ्यास स्वाभाविक और आत्मविश्वासी प्रवाह का निर्माण करता है।', exEs: 'La práctica hablada diaria construye fluidez conversacional natural.', ic: '🗣️' },
    { w: 'achievement', p: '/əˈtʃiːvmənt/', m: 'a thing done successfully, typically by effort, courage, or skill', hi: 'उपलब्धि / कामयाबी', es: 'logro / éxito', fr: 'réussite / accomplissement', de: 'Leistung / Errungenschaft', pt: 'conquista / realização', zh: '成就 / 成绩', ar: 'إنجاز', ja: '達成 / 業績', ru: 'достижение / успех', ex: 'Mastering 135 structured lessons is an outstanding educational achievement.', exHi: '135 संरचित पाठों में महारत हासिल करना एक उत्कृष्ट शैक्षिक उपलब्धि है।', exEs: 'Dominar 135 lecciones estructuradas es un logro educativo sobresaliente.', ic: '🏆' }
  ],
  chunks: [
    { phrase: 'Congratulations on completing Unit 9!', meaning: 'celebrating the completion of the milestone curriculum unit', hi: 'यूनिट 9 पूरा करने पर बधाई!', es: '¡Felicitaciones por completar la Unidad 9!', fr: 'Félicitations pour avoir terminé l\'Unité 9 !', de: 'Herzlichen Glückwunsch zum Abschluss von Einheit 9!', pt: 'Parabéns por concluir a Unidade 9!', zh: '祝贺你完成第9单元！', ar: 'تهانينا لإكمال الوحدة 9!', ja: 'ユニット9の修了おめでとうございます！', ru: 'Поздравляем с завершением 9-го модуля!', note: 'Milestone celebratory phrase.', ic: '🎉' },
    { phrase: 'from check-in to career aspirations', meaning: 'spanning the entire diverse scope of A2 themes', hi: 'होटल चेक-इन से लेकर करियर की आकांक्षाओं तक', es: 'desde el registro en el hotel hasta las aspiraciones', fr: 'de l\'enregistrement aux aspirations professionnelles', de: 'vom Check-in bis zu den Karriereambitionen', pt: 'do check-in às aspirações profissionais', zh: '从酒店入住到职业规划', ar: 'من تسجيل الوصول إلى الطموحات المهنية', ja: 'チェックインから将来のキャリアまで', ru: 'от регистрации в отеле до карьерных планов', note: 'Scope synthesis chunk.', ic: '🌐' },
    { phrase: 'express myself clearly and confidently', meaning: 'speaking without hesitation using accurate structures', hi: 'स्पष्ट और आत्मविश्वास के साथ अपनी बात रखना', es: 'expresarme con claridad y confianza', fr: 'm\'exprimer avec clarté et assurance', de: 'mich klar und selbstbewusst ausdrücken', pt: 'expressar-me com clareza e confiança', zh: '清晰自信地表达自己', ar: 'التعبير عن نفسي بوضوح وثقة', ja: '明確かつ自信を持って表現する', ru: 'ясно и уверенно выражать свои мысли', note: 'Fluency goal statement.', ic: '🗣️' },
    { phrase: 'solve real-life practical situations', meaning: 'handling authentic interactions like travel, dining, and shopping', hi: 'वास्तविक जीवन की व्यावहारिक स्थितियों को हल करना', es: 'resolver situaciones prácticas de la vida real', fr: 'résoudre des situations pratiques du quotidien', de: 'praktische Alltagssituationen meistern', pt: 'resolver situações práticas do dia a dia', zh: '应对现实生活中的实际场景', ar: 'التعامل مع مواقف الحياة اليومية', ja: '実生活の実践的な場面を解決する', ru: 'решать реальные жизненные ситуации', note: 'Functional competency metric.', ic: '✅' },
    { phrase: 'handle polite customer complaints', meaning: 'diplomatically resolving errors and seeking refunds', hi: 'विनम्र ग्राहक शिकायतों का समाधान करना', es: 'gestionar quejas de clientes cortésmente', fr: 'gérer poliment des réclamations', de: 'höfliche Reklamationen abwickeln', pt: 'lidar com reclamações com educação', zh: '礼貌妥善地处理客户投诉', ar: 'التعامل مع شكاوى العملاء بلباقة', ja: '丁寧な顧客クレームに対応する', ru: 'вежливо урегулировать претензии клиентов', note: 'Professional diplomacy skill.', ic: '🛎️' },
    { phrase: 'protect our natural environment', meaning: 'practicing sustainability in daily choices', hi: 'हमारे प्राकृतिक पर्यावरण की रक्षा करना', es: 'proteger nuestro medio ambiente natural', fr: 'protéger notre environnement naturel', de: 'unsere natürliche Umwelt schützen', pt: 'proteger nosso meio ambiente natural', zh: '保护我们的自然环境', ar: 'حماية بيئتنا الطبيعية', ja: '自然環境を保護する', ru: 'защищать нашу окружающую среду', note: 'Civic responsibility theme.', ic: '🌱' },
    { phrase: 'achieve complete A2 proficiency', meaning: 'reaching full CEFR A2 linguistic standard', hi: 'पूर्ण A2 प्रवीणता प्राप्त करना', es: 'alcanzar la competencia A2 completa', fr: 'atteindre la pleine maîtrise A2', de: 'vollständige A2-Kompetenz erreichen', pt: 'alcançar a proficiência A2 completa', zh: '完全达到A2水平', ar: 'تحقيق الكفاءة الكاملة لمستوى A2', ja: '完全なA2習熟度を達成する', ru: 'достичь полного уровня владения A2', note: 'Pedagogical benchmark.', ic: '🏅' },
    { phrase: 'ready for future learning milestones', meaning: 'prepared for advanced intermediate structures', hi: 'भविष्य के शिक्षण पड़ावों के लिए तैयार', es: 'listo para futuros hitos de aprendizaje', fr: 'prêt pour les prochaines étapes d\'apprentissage', de: 'bereit für zukünftige Lernmeilensteine', pt: 'pronto para os próximos marcos de aprendizagem', zh: '准备好迎接未来的学习里程碑', ar: 'مستعد للمراحل التعليمية القادمة', ja: '次の学習目標への準備完了', ru: 'готов к будущим учебным рубежам', note: 'Growth mindset phrase.', ic: '🚀' }
  ],
  grammar: {
    title: 'Comprehensive Unit 9 Grammar Synthesis & Mastery Matrix',
    concept: 'Reviewing all key grammar points of Unit 9: Comparatives/Superlatives, Modals (must, should, could), Future intentions (hope to, plan to, be going to), and Verbs of Preference with Gerunds.',
    patterns: [
      {
        title: 'Mastery Matrix 1: Travel, Navigation & Dining Formulas',
        structure: 'Excuse me, could you tell me how to get to...? | I would like to book a table for two at 8 PM.',
        rule: 'Polite indirect questions and modal requests for real-world navigation and service.',
        examples: [
          { en: 'Could you tell me which platform the express train to Oxford departs from?', hi: 'क्या आप मुझे बता सकते हैं कि ऑक्सफोर्ड के लिए एक्सप्रेस ट्रेन किस प्लेटफॉर्म से रवाना होती है?', es: '¿Podría decirme de qué andén sale el tren expreso a Oxford?' },
          { en: 'We would like to order the grilled salmon with seasonal vegetables, please.', hi: 'हम कृपया ग्रिल्ड सैल्मन मौसमी सब्जियों के साथ ऑर्डर करना चाहेंगे।', es: 'Nos gustaría pedir el salmón a la plancha con verduras, por favor.' }
        ]
      },
      {
        title: 'Mastery Matrix 2: Comparisons & Customer Redress',
        structure: 'Product A is more durable than Product B. | I\'m afraid there is a defect; could you replace it?',
        rule: 'Comparative adjectives + polite complaint escalation formulas.',
        examples: [
          { en: 'This laptop is significantly lighter and faster than my previous model.', hi: 'यह लैपटॉप मेरे पिछले मॉडल की तुलना में काफी हल्का और तेज़ है।', es: 'Esta portátil es significativamente más liviana y rápida que mi modelo anterior.' },
          { en: 'Excuse me, there is a billing error on my receipt; could you please refund the difference?', hi: 'माफ कीजिए, मेरी रसीद पर बिलिंग में त्रुटि है; क्या आप कृपया अंतर की राशि वापस कर सकते हैं?', es: 'Disculpe, hay un error en mi recibo; ¿podría reembolsarme la diferencia?' }
        ]
      },
      {
        title: 'Mastery Matrix 3: Health, Environment, Arts & Ambitions',
        structure: 'Take two pills twice daily. | We must protect nature. | I enjoy playing the piano and hope to study abroad.',
        rule: 'Imperative dosages, strong modals for duty, gerunds for hobbies, and "hope to" for ambitions.',
        examples: [
          { en: 'You must take this antibiotic capsule after meals and get plenty of rest.', hi: 'आपको भोजन के बाद यह एंटीबायोटिक कैप्सूल लेना चाहिए और भरपूर आराम करना चाहिए।', es: 'Debes tomar esta cápsula después de comer y descansar mucho.' },
          { en: 'I enjoy practicing the guitar in my free time and plan to start my own studio next year.', hi: 'मुझे खाली समय में गिटार बजाने में आनंद आता है और मैं अगले साल अपना स्टूडियो शुरू करने की योजना बना रहा हूँ।', es: 'Disfruto tocando la guitarra y planeo abrir mi propio estudio el próximo año.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'I am enjoy to travel in abroad.',
      cor: 'I enjoy traveling abroad.',
      exp: '"Enjoy" takes gerund "traveling", and "abroad" takes no preposition.',
      hi: '"I enjoy traveling abroad" कहें।',
      es: 'Se dice "I enjoy traveling abroad".'
    },
    {
      inc: 'He must to take this medicine two times a day.',
      cor: 'He must take this medicine twice a day.',
      exp: 'No "to" after modal "must", and use standard "twice a day".',
      hi: '"Must" के बाद "to" नहीं आता: "must take this medicine twice a day".',
      es: 'Sin "to" tras "must": "must take this medicine twice a day".'
    },
    {
      inc: 'She plays piano and hope to win scholarship.',
      cor: 'She plays the piano and hopes to win a scholarship.',
      exp: 'Say "the piano", subject-verb agreement "hopes", and "a scholarship".',
      hi: '"Plays the piano and hopes to win a scholarship" सही रूप है।',
      es: 'Se dice "plays the piano and hopes to win a scholarship".'
    },
    {
      inc: 'We have to protecting our oceans from plastic.',
      cor: 'We have to protect our oceans from plastic.',
      exp: 'After "have to", use the base form "protect".',
      hi: '"Have to" के बाद base verb "protect" आता है।',
      es: 'Después de "have to" va el verbo base: "protect".'
    },
    {
      inc: 'I would like speak with manager for complaint.',
      cor: 'I would like to speak to the manager to make a complaint.',
      exp: 'Use "would like to speak" and infinitive of purpose "to make a complaint".',
      hi: '"I would like to speak to the manager to make a complaint" कहें।',
      es: 'Use "would like to speak to the manager to make a complaint".'
    }
  ],
  dialogues: [
    {
      title: 'Global Traveler Milestone Conversation',
      context: 'Ananya reflects on her international trip, from airport navigation to dining, shopping, and future plans.',
      charA: { name: 'Ananya', av: '👩🏽', role: 'Traveler' },
      charB: { name: 'David', av: '👨🏼', role: 'Host' },
      turns: [
        { spk: 'David', text: 'Ananya, how was your journey navigating through the international transit hubs and checking into the hotel?', hi: 'आन्या, अंतरराष्ट्रीय ट्रांजिट हब में नेविगेट करने और होटल में चेक इन करने की आपकी यात्रा कैसी रही?', es: 'Ananya, ¿cómo fue tu viaje en los aeropuertos y el registro en el hotel?' },
        { spk: 'Ananya', text: 'It was seamless! I asked for platform directions politely, ordered authentic regional dishes at restaurants, and even successfully requested a room change when the air conditioner was faulty.', hi: 'यह बहुत सहज रहा! मैंने विनम्रतापूर्वक प्लेटफॉर्म के रास्ते पूछे, रेस्तरां में प्रामाणिक क्षेत्रीय व्यंजनों का ऑर्डर दिया, और एसी खराब होने पर कमरा बदलने का अनुरोध भी सफलतापूर्वक किया।', es: '¡Fue impecable! Pedí direcciones, ordené platos típicos y cambié de habitación cuando el aire falló.' },
        { spk: 'David', text: 'That demonstrates great practical language mastery! What are your plans for the upcoming year?', hi: 'यह महान व्यावहारिक भाषा महारत को प्रदर्शित करता है! आने वाले वर्ष के लिए आपकी क्या योजनाएं हैं?', es: '¡Eso demuestra un gran dominio del idioma! ¿Cuáles son tus planes para el próximo año?' },
        { spk: 'Ananya', text: 'I plan to study environmental engineering abroad and continue playing the violin in our community orchestra. I feel completely confident communicating in English now!', hi: 'मैं विदेश में पर्यावरण इंजीनियरिंग का अध्ययन करने और हमारे सामुदायिक ऑर्केस्ट्रा में वायलिन बजाना जारी रखने की योजना बना रही हूँ। अब मुझे अंग्रेजी में संवाद करने में पूरा विश्वास है!', es: 'Planeo estudiar ingeniería ambiental afuera y seguir tocando el violín. ¡Me siento muy segura hablando inglés!' }
      ]
    },
    {
      title: 'Celebrating Unit 9 Completion & Future Aspirations',
      context: 'Coach Elena congratulates the class on mastering Unit 9 (Lessons 121–135).',
      charA: { name: 'Elena', av: '👩🏻', role: 'Instructor' },
      charB: { name: 'Students', av: '👥', role: 'Learners' },
      turns: [
        { spk: 'Elena', text: 'Congratulations, everyone! You have successfully completed all fifteen lessons of Unit 9 and conquered 135 total curriculum milestones!', hi: 'सभी को बधाई! आपने यूनिट 9 के सभी पंद्रह पाठों को सफलतापूर्वक पूरा कर लिया है और कुल 135 पाठ्यक्रम मील के पत्थर जीत लिए हैं!', es: '¡Felicitaciones a todos! ¡Han completado con éxito las quince lecciones de la Unidad 9 y 135 hitos en total!' },
        { spk: 'Students', text: 'Thank you, Coach Elena! We can now navigate travel, resolve customer service issues, discuss health, protect the environment, and share our creative dreams with ease.', hi: 'धन्यवाद, कोच ऐलेना! अब हम यात्रा कर सकते हैं, ग्राहक सेवा के मुद्दों को हल कर सकते हैं, स्वास्थ्य पर चर्चा कर सकते हैं, पर्यावरण की रक्षा कर सकते हैं और अपने सपनों को आसानी से साझा कर सकते हैं।', es: '¡Gracias! Ahora podemos viajar, resolver quejas, hablar de salud, cuidar el ambiente y compartir nuestras metas.' },
        { spk: 'Elena', text: 'Your dedication and daily practice have built true, lasting fluency. You are now fully prepared for advanced language journeys ahead!', hi: 'आपके समर्पण और दैनिक अभ्यास ने वास्तविक, स्थायी प्रवाह का निर्माण किया है। अब आप आगे की उन्नत भाषा यात्राओं के लिए पूरी तरह से तैयार हैं!', es: 'Su dedicación ha construido una fluidez duradera. ¡Están listos para los próximos niveles de inglés!' },
        { spk: 'Students', text: 'We are eager and excited to continue learning and achieving our highest ambitions!', hi: 'हम आगे सीखने और अपनी सर्वोच्च महत्वाकांक्षाओं को प्राप्त करने के लिए उत्सुक और उत्साहित हैं!', es: '¡Estamos muy entusiasmados por seguir aprendiendo y alcanzar nuestras mayores metas!' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_a2_9_135_p01',
      type: 'multiple_choice',
      prompt: 'Select the grammatically correct sentence consolidating Unit 9 structures:',
      options: [
        { id: '1', text: 'She enjoys playing the piano and plans to study music abroad next year.', isCorrect: true },
        { id: '2', text: 'She enjoys to play piano and plan to study abroad.', isCorrect: false },
        { id: '3', text: 'She is enjoy playing the piano and will going abroad.', isCorrect: false },
        { id: '4', text: 'She enjoys playing piano and hope to win scholarship.', isCorrect: false }
      ],
      correctAnswer: 'She enjoys playing the piano and plans to study music abroad next year.',
      explanation: 'Flawless combination of gerund with instrument ("playing the piano") + "plans to study abroad".'
    },
    {
      id: 'ex_a2_9_135_p02',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "We must sort our waste to protect our natural _____ (environment)."',
      correctAnswer: 'environment',
      explanation: 'Noun "environment".'
    },
    {
      id: 'ex_a2_9_135_p03',
      type: 'word_ordering',
      prompt: 'Arrange into a polite customer complaint resolution sentence:',
      tokens: ['The', 'manager', 'apologized', 'and', 'issued', 'a', 'full', 'refund'],
      correctAnswer: 'The manager apologized and issued a full refund',
      explanation: 'Past simple compound predicate sentence.'
    },
    {
      id: 'ex_a2_9_135_p04',
      type: 'translation',
      prompt: 'Translate to English: "मुझे खाली समय में गिटार बजाना और यात्रा करना पसंद है।"',
      correctAnswer: 'I enjoy playing the guitar and traveling in my free time.',
      acceptableAnswers: [
        'I love playing the guitar and traveling in my free time.',
        'I enjoy playing the guitar and travelling in my leisure time.'
      ],
      explanation: '"Playing the guitar and traveling in my free time".'
    },
    {
      id: 'ex_a2_9_135_p05',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence: "We must to reduce single-use plastic waste."',
      correctAnswer: 'We must reduce single-use plastic waste.',
      explanation: 'Remove "to" after the modal "must".'
    },
    {
      id: 'ex_a2_9_135_p06',
      type: 'listening',
      prompt: 'Listen to the comprehensive review summary and select the student\'s achievement:',
      audioText: 'After completing all fifteen lessons of Unit 9, students have mastered travel communication, polite complaints, health consultations, environmental awareness, and future aspirations.',
      options: [
        { id: '1', text: 'Mastered travel, complaints, health, ecology, and future career plans', isCorrect: true },
        { id: '2', text: 'Only learned how to say hello and goodbye', isCorrect: false },
        { id: '3', text: 'Forgot all previously learned vocabulary', isCorrect: false },
        { id: '4', text: 'Only studied names of animals', isCorrect: false }
      ],
      correctAnswer: 'Mastered travel, complaints, health, ecology, and future career plans',
      explanation: 'The audio recaps the complete multi-thematic mastery of Unit 9.'
    },
    {
      id: 'ex_a2_9_135_p07',
      type: 'listen_and_type',
      prompt: 'Listen and type the exact sentence:',
      audioText: 'I can express myself clearly and confidently.',
      correctAnswer: 'I can express myself clearly and confidently.',
      explanation: 'Type the fluency statement accurately.'
    },
    {
      id: 'ex_a2_9_135_p08',
      type: 'speaking',
      prompt: 'Read aloud clearly: "Completing Unit 9 is a major milestone in achieving fluent, practical English communication."',
      targetText: 'Completing Unit 9 is a major milestone in achieving fluent, practical English communication.',
      explanation: 'Speak with proud, confident, resonant enunciation.'
    },
    {
      id: 'ex_a2_9_135_p09',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nInterviewer: "What is your main career goal?"\nApplicant: "I hope _____ lead an international software team within three years."',
      options: [
        { id: '1', text: 'to', isCorrect: true },
        { id: '2', text: 'for', isCorrect: false },
        { id: '3', text: 'at', isCorrect: false },
        { id: '4', text: 'in', isCorrect: false }
      ],
      correctAnswer: 'to',
      explanation: '"Hope to lead...".'
    },
    {
      id: 'ex_a2_9_135_p10',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly follows dosage rules?',
      options: [
        { id: '1', text: 'Take two capsules twice daily with meals.', isCorrect: true },
        { id: '2', text: 'Taking two capsules two times day with meals.', isCorrect: false },
        { id: '3', text: 'Take two capsule on empty stomach twice days.', isCorrect: false },
        { id: '4', text: 'To take two capsules every two hours.', isCorrect: false }
      ],
      correctAnswer: 'Take two capsules twice daily with meals.',
      explanation: 'Accurate imperative dosage directive.'
    },
    {
      id: 'ex_a2_9_135_p11',
      type: 'match_pairs',
      prompt: 'Match each Unit 9 topic with its core communication phrase:',
      options: [
        { id: '1', text: 'Hotel & Dining → [Could we have the bill, please?]' },
        { id: '2', text: 'Customer Redress → [Could you replace this defective item?]' },
        { id: '3', text: 'Health & Pharmacy → [Take one tablet twice a day after meals]' },
        { id: '4', text: 'Future Ambitions → [I hope to study abroad next autumn]' }
      ],
      correctAnswer: 'matched',
      explanation: 'Core functional phrases across Unit 9.'
    },
    {
      id: 'ex_a2_9_135_p12',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Congratulations on achieving practical English _____ (fluent/fluency)!"',
      correctAnswer: 'fluency',
      explanation: 'Noun "fluency".'
    },
    {
      id: 'ex_a2_9_135_p13',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['We', 'must', 'protect', 'the', 'planet', 'for', 'future', 'generations'],
      correctAnswer: 'We must protect the planet for future generations',
      explanation: 'Modal ecological imperative sentence.'
    },
    {
      id: 'ex_a2_9_135_p14',
      type: 'translation',
      prompt: 'Translate to English: "आपने A2 स्तर का पाठ्यक्रम सफलतापूर्वक पूरा कर लिया है।"',
      correctAnswer: 'You have successfully completed the A2 level curriculum.',
      acceptableAnswers: [
        'You have successfully completed the A2 curriculum.',
        'You completed the A2 level curriculum successfully.'
      ],
      explanation: '"Successfully completed the A2 level curriculum".'
    },
    {
      id: 'ex_a2_9_135_p15',
      type: 'multiple_choice',
      prompt: 'Select the grammatically correct summary sentence:',
      options: [
        { id: '1', text: 'Consistent daily practice leads to natural fluency and confident communication.', isCorrect: true },
        { id: '2', text: 'Consistent daily practice lead to fluency and confident.', isCorrect: false },
        { id: '3', text: 'Consistent practice are leading to fluency.', isCorrect: false },
        { id: '4', text: 'Consistent practice leading to confidence.', isCorrect: false }
      ],
      correctAnswer: 'Consistent daily practice leads to natural fluency and confident communication.',
      explanation: 'Singular subject "practice" takes 3rd person singular verb "leads".'
    }
  ],
  review: [
    {
      id: 'ex_a2_9_135_r01',
      type: 'multiple_choice',
      prompt: 'Choose the correct synthesis sentence:',
      options: [
        { id: '1', text: 'I am looking forward to continuing my English journey.', isCorrect: true },
        { id: '2', text: 'I am looking forward to continue my English journey.', isCorrect: false },
        { id: '3', text: 'I look forward continue my journey.', isCorrect: false },
        { id: '4', text: 'I looking forward to continuing.', isCorrect: false }
      ],
      correctAnswer: 'I am looking forward to continuing my English journey.',
      explanation: '"Looking forward to + continuing" (gerund).'
    },
    {
      id: 'ex_a2_9_135_r02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Completing 135 lessons is an outstanding _____ (achieve)!"',
      correctAnswer: 'achievement',
      explanation: 'Noun "achievement".'
    },
    {
      id: 'ex_a2_9_135_r03',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['You', 'have', 'achieved', 'complete', 'mastery', 'of', 'Unit', '9'],
      correctAnswer: 'You have achieved complete mastery of Unit 9',
      explanation: 'Present perfect celebration sentence.'
    },
    {
      id: 'ex_a2_9_135_r04',
      type: 'translation',
      prompt: 'Translate to English: "हम भविष्य की सफलता के लिए आपके उज्ज्वल भविष्य की कामना करते हैं।"',
      correctAnswer: 'We wish you great success for the future.',
      acceptableAnswers: [
        'We wish you all the best for your future success.',
        'We wish you success for the future.'
      ],
      explanation: '"We wish you great success for the future".'
    },
    {
      id: 'ex_a2_9_135_r05',
      type: 'error_correction',
      prompt: 'Correct the error: "He plays guitar and plan to study abroad."',
      correctAnswer: 'He plays the guitar and plans to study abroad.',
      explanation: 'Add "the" before "guitar" and use singular "plans".'
    }
  ],
  assessment: [
    {
      id: 'ex_a2_9_135_a01',
      type: 'multiple_choice',
      prompt: 'Which statement represents full mastery of Unit 9 communication competence?',
      options: [
        { id: '1', text: 'I can confidently travel, make polite complaints, discuss health and ecology, and articulate my future career goals in English.', isCorrect: true },
        { id: '2', text: 'I only know a few words and cannot speak in sentences.', isCorrect: false },
        { id: '3', text: 'I can only repeat memorized words without understanding.', isCorrect: false },
        { id: '4', text: 'I have not practiced any conversations.', isCorrect: false }
      ],
      correctAnswer: 'I can confidently travel, make polite complaints, discuss health and ecology, and articulate my future career goals in English.',
      explanation: 'Comprehensive descriptor of CEFR A2 Unit 9 competency.'
    },
    {
      id: 'ex_a2_9_135_a02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Dedication and daily practice are the keys to language _____ (mastery)."',
      correctAnswer: 'mastery',
      acceptableAnswers: ['fluency'],
      explanation: '"Language mastery" or "fluency".'
    },
    {
      id: 'ex_a2_9_135_a03',
      type: 'translation',
      prompt: 'Translate to English: "बधाई हो, आपने CEFR A2 स्तर को सफलतापूर्वक पूरा कर लिया है!"',
      correctAnswer: 'Congratulations, you have successfully completed the CEFR A2 level!',
      acceptableAnswers: [
        'Congratulations, you have successfully completed CEFR A2 level!',
        'Congratulations, you successfully completed the CEFR A2 level!'
      ],
      explanation: '"Congratulations, you have successfully completed the CEFR A2 level!".'
    },
    {
      id: 'ex_a2_9_135_a04',
      type: 'speaking',
      prompt: 'Read aloud clearly: "With 135 completed lessons, I am proud of my progress and fully prepared to express my ideas clearly, accurately, and confidently in English!"',
      targetText: 'With 135 completed lessons, I am proud of my progress and fully prepared to express my ideas clearly, accurately, and confidently in English!',
      explanation: 'Deliver with highest clarity, pride, and linguistic poise.'
    },
    {
      id: 'ex_a2_9_135_a05',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      tokens: ['You', 'are', 'now', 'ready', 'for', 'advanced', 'English', 'challenges'],
      correctAnswer: 'You are now ready for advanced English challenges',
      explanation: 'Affirmative capstone milestone statement.'
    }
  ]
};
