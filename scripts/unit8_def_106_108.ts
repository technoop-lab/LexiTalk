import { LessonConfigA2 } from './unit8_builder_helper';

// =========================================================================
// LESSON 106: Describing People: Appearance, Personality & Character Traits
// =========================================================================
export const LESSON_106_CONFIG: LessonConfigA2 = {
  num: 106,
  title: 'Describing People: Appearance, Personality & Character Traits',
  icon: '👤',
  estMin: 25,
  objTitle: 'Describing Physical Appearance, Personality & Personal Qualities',
  objDesc: 'Learn to describe physical appearance, clothing styles, and personality traits using compound adjectives and adverbs of degree.',
  objHi: 'शारीरिक रूप-रंग, पहनावे और व्यक्तित्व की विशेषताओं का वर्णन करना सीखें।',
  objEs: 'Describir la apariencia física, estilo y rasgos de personalidad usando adjetivos compuestos y adverbios de grado.',
  canDo: [
    'I can describe someone\'s height, build, facial features, and hair style in detail.',
    'I can describe personality traits such as generous, reliable, outgoing, and easygoing.',
    'I can use "look like" vs "look + adjective" to contrast physical similarity and visual impression.',
    'I can combine multiple adjectives in natural English order (opinion, size, age, color).'
  ],
  canDoHi: [
    'मैं किसी व्यक्ति की लंबाई, कद-काठी, चेहरे के नैन-नक्श और बालों का विस्तार से वर्णन कर सकता हूँ।',
    'मैं उदार, भरोसेमंद, मिलनसार जैसे व्यक्तित्व गुणों का वर्णन कर सकता हूँ।',
    'मैं "look like" और "look + adjective" का सही प्रयोग कर सकता हूँ।',
    'मैं वाक्यों में सही क्रम में विशेषणों (adjectives) को जोड़ सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir la estatura, complexión, rasgos y estilo de cabello de alguien con detalle.',
    'Puedo describir rasgos de personalidad como generoso, confiable y extrovertido.',
    'Puedo usar "look like" vs "look + adjetivo" para contrastar similitudes e impresiones.',
    'Puedo combinar múltiples adjetivos en el orden natural del inglés.'
  ],
  vocab: [
    { w: 'outgoing', p: '/ˈaʊtɡəʊɪŋ/', m: 'friendly and socially confident', hi: 'मिलनसार / बहिर्मुखी', es: 'extrovertido', fr: 'sociable', de: 'kontaktfreudig', pt: 'extrovertido', zh: '外向的', ar: 'اجتماعي', ja: '社交的な', ru: 'общительный', ex: 'Sarah is very outgoing and makes friends quickly.', exHi: 'सारा बहुत मिलनसार है और जल्दी दोस्त बना लेती है।', exEs: 'Sarah es muy extrovertida y hace amigos rápido.', ic: '🤝' },
    { w: 'reliable', p: '/rɪˈlaɪəbl/', m: 'consistently good in quality or performance; trustworthy', hi: 'भरोसेमंद / विश्वसनीय', es: 'confiable', fr: 'fiable', de: 'zuverlässig', pt: 'confiável', zh: '可靠的', ar: 'موثوق', ja: '頼りになる', ru: 'надежный', ex: 'Alex is a reliable colleague who never misses deadlines.', exHi: 'एलेक्स एक भरोसेमंद सहयोगी है जो कभी समय सीमा नहीं छोड़ता।', exEs: 'Alex es un colega confiable que nunca pierde plazos.', ic: '🛡️' },
    { w: 'easygoing', p: '/ˌiːziˈɡəʊɪŋ/', m: 'relaxed and tolerant in attitude or manner', hi: 'शांत स्वभाव का / मिलनसार', es: 'despreocupado / tranquilo', fr: 'facile à vivre', de: 'gelassen', pt: 'descontraído', zh: '随和的', ar: 'متساهل', ja: 'おおらかな', ru: 'покладистый', ex: 'Our team leader has an easygoing management style.', exHi: 'हमारे टीम लीडर की प्रबंधन शैली बहुत शांत और सहज है।', exEs: 'Nuestro líder de equipo tiene un estilo tranquilo.', ic: '😎' },
    { w: 'generous', p: '/ˈdʒenərəs/', m: 'showing a readiness to give more than is necessary', hi: 'उदार / दानी', es: 'generoso', fr: 'généreux', de: 'großzügig', pt: 'generoso', zh: '慷慨的', ar: 'كريم', ja: '寛大な', ru: 'щедрый', ex: 'He is generous with his time and helps everyone.', exHi: 'वह अपने समय को लेकर बहुत उदार है और सभी की मदद करता है।', exEs: 'Él es generoso con su tiempo y ayuda a todos.', ic: '🎁' },
    { w: 'ambitious', p: '/æmˈbɪʃəs/', m: 'having or showing a strong desire to succeed', hi: 'महत्वाकांक्षी', es: 'ambicioso', fr: 'ambitieux', de: 'ehrgeizig', pt: 'ambicioso', zh: '有雄心的', ar: 'طموح', ja: '野心的な', ru: 'амбициозный', ex: 'She is an ambitious student aiming for top university honors.', exHi: 'वह एक महत्वाकांक्षी छात्रा है जो शीर्ष विश्वविद्यालय सम्मान चाहती है।', exEs: 'Ella es una estudiante ambiciosa que busca honores.', ic: '🚀' },
    { w: 'patient', p: '/ˈpeɪʃnt/', m: 'able to accept delays or suffering without becoming angry', hi: 'धैर्यवान / सहनशील', es: 'paciente', fr: 'patient', de: 'geduldig', pt: 'paciente', zh: '有耐心的', ar: 'صبور', ja: '辛抱強い', ru: 'терпеливый', ex: 'Our English teacher is remarkably patient with beginners.', exHi: 'हमारे अंग्रेजी शिक्षक शुरुआती छात्रों के साथ बेहद धैर्यवान हैं।', exEs: 'Nuestro profesor de inglés es muy paciente.', ic: '⏳' },
    { w: 'creative', p: '/kriˈeɪtɪv/', m: 'having good imagination and original ideas', hi: 'रचनात्मक', es: 'creativo', fr: 'créatif', de: 'kreativ', pt: 'criativo', zh: '有创造力的', ar: 'مبدع', ja: '創造的な', ru: 'творческий', ex: 'He came up with a creative solution to the problem.', exHi: 'उसने समस्या का एक बहुत ही रचनात्मक समाधान निकाला।', exEs: 'Se le ocurrió una solución creativa al problema.', ic: '🎨' },
    { w: 'honest', p: '/ˈɒnɪst/', m: 'free of deceit and truthful and sincere', hi: 'ईमानदार', es: 'honesto', fr: 'honnête', de: 'ehrlich', pt: 'honesto', zh: '诚实的', ar: 'صادق', ja: '正直な', ru: 'честный', ex: 'I appreciate your honest feedback on my presentation.', exHi: 'मैं अपनी प्रस्तुति पर आपकी ईमानदार प्रतिक्रिया की सराहना करता हूँ।', exEs: 'Aprecio tus comentarios honestos sobre mi presentación.', ic: '✨' },
    { w: 'sensible', p: '/ˈsensəbl/', m: 'having good judgment or common sense', hi: 'समझदार / व्यावहारिक', es: 'sensato', fr: 'sensé', de: 'vernünftig', pt: 'sensato', zh: '明智的', ar: 'عاقل', ja: '分別のある', ru: 'благоразумный', ex: 'Saving money for emergencies is a sensible choice.', exHi: 'आपात स्थिति के लिए पैसे बचाना एक समझदारी भरा विकल्प है।', exEs: 'Ahorrar dinero para emergencias es una opción sensata.', ic: '🧠' },
    { w: 'sensitive', p: '/ˈsensətɪv/', m: 'quick to detect or be affected by slight changes or emotions', hi: 'संवेदनशील / भावुक', es: 'sensible', fr: 'sensible', de: 'empfindsam', pt: 'sensível', zh: '敏感的', ar: 'حساس', ja: '敏感な', ru: 'чувствительный', ex: 'She is sensitive to the feelings of others.', exHi: 'वह दूसरों की भावनाओं के प्रति बहुत संवेदनशील है।', exEs: 'Ella es muy sensible a los sentimientos de los demás.', ic: '💖' },
    { w: 'confident', p: '/ˈkɒnfɪdənt/', m: 'feeling or showing certainty about something or oneself', hi: 'आत्मविश्वासी', es: 'seguro / confiado', fr: 'confiant', de: 'selbstbewusst', pt: 'confiante', zh: '自信的', ar: 'واثق', ja: '自信がある', ru: 'уверенный', ex: 'He spoke in a confident voice during the interview.', exHi: 'उसने साक्षात्कार के दौरान आत्मविश्वास भरी आवाज में बात की।', exEs: 'Habló con voz segura durante la entrevista.', ic: '🦁' },
    { w: 'cheerful', p: '/ˈtʃɪəfl/', m: 'noticeably happy and optimistic', hi: 'हंसमुख / प्रसन्नचित्त', es: 'alegre', fr: 'joyeux', de: 'fröhlich', pt: 'alegre', zh: '开朗的', ar: 'مبتهج', ja: '陽気な', ru: 'веселый', ex: 'Her cheerful attitude brightens up the entire office.', exHi: 'उसका हंसमुख स्वभाव पूरे कार्यालय में ऊर्जा भर देता है।', exEs: 'Su actitud alegre alegra toda la oficina.', ic: '😊' },
    { w: 'stubborn', p: '/ˈstʌbən/', m: 'having a determination not to change one\'s attitude or position', hi: 'जिद्दी / हठी', es: 'terco / obstinado', fr: 'têtu', de: 'stur', pt: 'teimoso', zh: '固执的', ar: 'عنيد', ja: '頑固な', ru: 'упрямый', ex: 'He is too stubborn to admit when he is wrong.', exHi: 'वह इतना जिद्दी है कि अपनी गलती स्वीकार नहीं करता।', exEs: 'Es demasiado terco para admitir su error.', ic: '🐂' },
    { w: 'well-built', p: '/ˌwel ˈbɪlt/', m: 'having a solid and strong body', hi: 'मजबूत कद-काठी वाला', es: 'corpulento / bien formado', fr: 'bien bâti', de: 'kräftig gebaut', pt: 'corpulento', zh: '体格魁梧的', ar: 'مفتول العضلات', ja: '体格の良い', ru: 'крепкого сложения', ex: 'The personal trainer is tall and well-built.', exHi: 'पर्सनल ट्रेनर लंबा और मजबूत कद-काठी वाला है।', exEs: 'El entrenador personal es alto y corpulento.', ic: '💪' },
    { w: 'medium-height', p: '/ˌmiːdiəm ˈhaɪt/', m: 'neither tall nor short', hi: 'मध्यम कद का', es: 'de estatura media', fr: 'de taille moyenne', de: 'mittelgroß', pt: 'de estatura média', zh: '中等身材', ar: 'متوسط الطول', ja: '中肉中背の', ru: 'среднего роста', ex: 'The suspect was of medium-height with brown hair.', exHi: 'संदिग्ध व्यक्ति मध्यम कद का और भूरे बालों वाला था।', exEs: 'El sospechoso era de estatura media y cabello castaño.', ic: '📏' },
    { w: 'curly', p: '/ˈkɜːli/', m: 'having curls or a spiral shape', hi: 'घुंघराले (बाल)', es: 'rizado', fr: 'bouclé', de: 'lockig', pt: 'encaracolado', zh: '卷曲的', ar: 'مجعد', ja: '巻き毛の', ru: 'кудрявый', ex: 'She has long curly dark hair.', exHi: 'उसके लंबे घुंघराले काले बाल हैं।', exEs: 'Ella tiene el cabello largo, rizado y oscuro.', ic: '💇' },
    { w: 'straight', p: '/streɪt/', m: 'without curves or bends', hi: 'सीधे (बाल)', es: 'lacio / recto', fr: 'lisse', de: 'glatt', pt: 'liso', zh: '直的', ar: 'أملس', ja: 'ストレートの', ru: 'прямой', ex: 'He decided to grow his straight hair longer.', exHi: 'उसने अपने सीधे बालों को लंबा करने का फैसला किया।', exEs: 'Decidió dejarse el cabello lacio más largo.', ic: '✂️' },
    { w: 'beard', p: '/bɪəd/', m: 'a growth of hair on the chin and cheeks', hi: 'दाढ़ी', es: 'barba', fr: 'barbe', de: 'Bart', pt: 'barba', zh: '胡须', ar: 'لحية', ja: 'あごひげ', ru: 'борода', ex: 'He shaved his beard before the wedding.', exHi: 'उसने शादी से पहले अपनी दाढ़ी बनवा ली।', exEs: 'Se afeitó la barba antes de la boda.', ic: '🧔' },
    { w: 'freckles', p: '/ˈfreklz/', m: 'small patches of light brown color on the skin', hi: 'झाइयां / तिल', es: 'pecas', fr: 'taches de rousseur', de: 'Sommersprossen', pt: 'sardas', zh: '雀斑', ar: 'نمش', ja: 'そばかす', ru: 'веснушки', ex: 'She gets cute freckles on her nose during summer.', exHi: 'गर्मियों में उसकी नाक पर प्यारी झाइयां आ जाती हैं।', exEs: 'Le salen pecas en la nariz en verano.', ic: '☀️' },
    { w: 'casual', p: '/ˈkæʒuəl/', m: 'relaxed and unconcerned; informal style', hi: 'अनौपचारिक / साधारण', es: 'informal / casual', fr: 'décontracté', de: 'lässig', pt: 'despojado', zh: '休闲的', ar: 'غير رسمي', ja: 'カジュアルな', ru: 'повседневный', ex: 'On Fridays, we can wear casual clothes to work.', exHi: 'शुक्रवार को हम काम पर कैजुअल कपड़े पहन सकते हैं।', exEs: 'Los viernes podemos vestir ropa casual para trabajar.', ic: '👕' }
  ],
  chunks: [
    { phrase: 'look like someone', meaning: 'have a similar appearance to someone', hi: 'किसी के जैसा दिखना', es: 'parecerse a alguien', fr: 'ressembler à quelqu\'un', de: 'wie jemand aussehen', pt: 'parecer-se com alguém', zh: '长得像某人', ar: 'يشبه شخصاً ما', ja: '誰かに似ている', ru: 'быть похожим на кого-то', note: '"He looks like his father" (noun comparison).', ic: '👥' },
    { phrase: 'look + adjective', meaning: 'give the impression of having a certain quality', hi: 'दिखाई देना (उदा. थका हुआ दिखना)', es: 'verse / parecer + adjetivo', fr: 'avoir l\'air + adjectif', de: 'aussehen wie + Adjektiv', pt: 'parecer + adjetivo', zh: '看起来...', ar: 'يبدو + صفة', ja: '〜そうに見える', ru: 'выглядеть + прил.', note: '"You look tired today" (no "like" with bare adjective).', ic: '👀' },
    { phrase: 'have a great sense of humor', meaning: 'be funny and appreciate jokes', hi: 'मजाकिया स्वभाव होना', es: 'tener un gran sentido del humor', fr: 'avoir un grand sens de l\'humour', de: 'einen tollen Sinn für Humor haben', pt: 'ter um ótimo senso de humor', zh: '很有幽默感', ar: 'يتمتع بحس دعابة رائع', ja: 'ユーモアのセンスがある', ru: 'обладать отличным чувством юмора', note: 'Common collocation for describing attractive personality.', ic: '😂' },
    { phrase: 'get along well with others', meaning: 'have a friendly relationship with people', hi: 'दूसरों के साथ अच्छा तालमेल होना', es: 'llevarse bien con los demás', fr: 'bien s\'entendre avec les autres', de: 'gut mit anderen auskommen', pt: 'dar-se bem com os outros', zh: '与人相处融洽', ar: 'الانسجام مع الآخرين', ja: '人と良好な関係を保つ', ru: 'хорошо ладить с другими', note: 'Standard phrase for team compatibility.', ic: '🤝' },
    { phrase: 'in his early thirties', meaning: 'approximately between 30 and 33 years old', hi: 'तीस के शुरुआती सालों में', es: 'en sus primeros treinta', fr: 'au début de la trentaine', de: 'in den frühen Dreißigern', pt: 'no início dos trinta', zh: '三十出头', ar: 'في أوائل الثلاثينيات', ja: '30代前半で', ru: 'чуть за тридцать', note: 'Used when exact age is unknown or polite.', ic: '🎂' },
    { phrase: 'dress smartly', meaning: 'wear elegant or neat professional clothes', hi: 'सलीके से कपड़े पहनना', es: 'vestir con elegancia', fr: 's\'habiller avec élégance', de: 'sich schick kleiden', pt: 'vestir-se elegantemente', zh: '穿着得体', ar: 'يرتدي ملابس أنيقة', ja: 'きちんとした身なりをする', ru: 'одеваться элегантно', note: 'Crucial in workplace settings.', ic: '👔' },
    { phrase: 'quite easy to talk to', meaning: 'approachable and friendly', hi: 'बात करने में बहुत सहज', es: 'bastante accesible / fácil de hablar', fr: 'facile d\'accès', de: 'sehr zugänglich', pt: 'fácil de conversar', zh: '很好相处', ar: 'من السهل التحدث معه', ja: '話しやすい', ru: 'легкий в общении', note: 'Describing warmth in interpersonal character.', ic: '💬' },
    { phrase: 'stand out in a crowd', meaning: 'be clearly noticeable due to uniqueness', hi: 'भीड़ में अलग दिखना', es: 'destacar entre la multitud', fr: 'se démarquer de la foule', de: 'aus der Masse herausstechen', pt: 'destacar-se na multidão', zh: '在人群中脱颖而出', ar: 'يبرز بين الحشود', ja: '人混みで目立つ', ru: 'выделяться из толпы', note: 'Can refer to physical appearance or distinct charisma.', ic: '🌟' }
  ],
  grammar: {
    title: 'Describing Appearance vs Personality: "Look Like" vs "Look" & Adjective Order',
    concept: 'Distinguishing between visual similarity (look like + noun) and impressions (look + adjective), and ordering multiple descriptive adjectives.',
    patterns: [
      {
        title: 'Look Like + Noun Phrase (Appearance / Resemblance)',
        structure: 'Subject + look(s) like + [Determiner] + Noun Phrase',
        rule: 'Use "look like" when comparing appearance to a specific person or object.',
        examples: [
          { en: 'He looks like his older brother.', hi: 'वह अपने बड़े भाई जैसा दिखता है।', es: 'Él se parece a su hermano mayor.' },
          { en: 'What does your new manager look like?', hi: 'आपका नया मैनेजर दिखने में कैसा है?', es: '¿Cómo es tu nuevo gerente físicamente?' }
        ]
      },
      {
        title: 'Look + Adjective (Visual State / Impression)',
        structure: 'Subject + look(s) + Adjective',
        rule: 'Use "look" directly followed by an adjective without the word "like".',
        examples: [
          { en: 'You look very confident and professional today.', hi: 'आप आज बहुत आत्मविश्वासी और पेशेवर लग रहे हैं।', es: 'Te ves muy seguro y profesional hoy.' },
          { en: 'She looks cheerful despite the long workday.', hi: 'काम के लंबे दिन के बावजूद वह खुशमिजाज दिखती है।', es: 'Ella se ve alegre a pesar del largo día.' }
        ]
      },
      {
        title: 'Adjective Ordering in Descriptions',
        structure: 'Opinion + Size / Physical Quality + Age + Color + Noun',
        rule: 'When multiple adjectives describe a person, follow the natural English sequence (e.g., "a handsome tall young man").',
        examples: [
          { en: 'She has beautiful long straight hair.', hi: 'उसके सुंदर लंबे सीधे बाल हैं।', es: 'Ella tiene un hermoso cabello largo y lacio.' },
          { en: 'He is a friendly tall young engineer.', hi: 'वह एक मिलनसार, लंबा युवा इंजीनियर है।', es: 'Él es un ingeniero joven, alto y amigable.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'He looks like tired today.',
      cor: 'He looks tired today.',
      exp: 'Do not use "like" before a bare adjective. Use "looks + adjective" (looks tired).',
      hi: 'Adjective के पहले "like" का प्रयोग न करें ("looks tired", न कि "looks like tired")।'
    },
    {
      inc: 'She is having blue eyes.',
      cor: 'She has blue eyes.',
      exp: 'Physical characteristics use Present Simple (has/have), not Continuous (-ing).',
      hi: 'शारीरिक विशेषताओं के लिए Present Simple (has/have) का प्रयोग करें, Continuous का नहीं।'
    },
    {
      inc: 'How is your teacher look like?',
      cor: 'What does your teacher look like?',
      exp: 'Asking for physical description requires "What does [person] look like?", not "How is...".',
      hi: 'शारीरिक बनावट पूछने के लिए "What does ... look like?" का प्रयोग करें।'
    },
    {
      inc: 'He has a black long beard.',
      cor: 'He has a long black beard.',
      exp: 'Size/length adjectives (long) precede color adjectives (black).',
      hi: 'लंबाई (long) रंग (black) से पहले आती है: "long black beard"।'
    },
    {
      inc: 'She is sensible and cries at movies easily.',
      cor: 'She is sensitive and cries at movies easily.',
      exp: '"Sensible" means practical/wise; "sensitive" means emotional/easily touched.',
      hi: '"Sensible" का अर्थ समझदार होता है; भावुक के लिए "sensitive" कहें।'
    }
  ],
  dialogues: [
    {
      title: 'Meeting the New Team Member',
      context: 'Priya and David are discussing their new project designer at the office.',
      charA: { name: 'Priya', av: '👩‍💼', role: 'Project Manager' },
      charB: { name: 'David', av: '👨‍💼', role: 'Senior Developer' },
      turns: [
        { spk: 'Priya', text: 'Have you met our new UI designer, Marcus, yet?', hi: 'क्या आप हमारे नए यूआई डिजाइनर मार्कस से मिले हैं?', es: '¿Ya conociste a nuestro nuevo diseñador, Marcus?' },
        { spk: 'David', text: 'Not yet. What does he look like so I can spot him in the canteen?', hi: 'अभी तक नहीं। वह दिखने में कैसा है ताकि मैं उसे कैंटीन में पहचान सकूँ?', es: 'Aún no. ¿Cómo es físicamente para ubicarlo en la cafetería?' },
        { spk: 'Priya', text: 'He is quite tall, of medium-build, with short curly dark hair and glasses.', hi: 'वह काफी लंबा है, मध्यम कद-काठी का है, जिसके छोटे घुंघराले काले बाल और चश्मा है।', es: 'Es bastante alto, de complexión media, con cabello corto, rizado y oscuro y gafas.' },
        { spk: 'David', text: 'And what is he like to work with? Is he easygoing?', hi: 'और उसके साथ काम करना कैसा है? क्या वह मिलनसार स्वभाव का है?', es: '¿Y cómo es para trabajar? ¿Es tranquilo?' },
        { spk: 'Priya', text: 'Very easygoing and creative! He has a great sense of humor and listens patiently.', hi: 'बहुत ही शांत स्वभाव का और रचनात्मक! उसका सेंस ऑफ ह्यूमर बहुत अच्छा है और वह धैर्यपूर्वक सुनता है।', es: '¡Muy tranquilo y creativo! Tiene gran sentido del humor y escucha con paciencia.' },
        { spk: 'David', text: 'That sounds wonderful. I look forward to working with him.', hi: 'यह बहुत अच्छा लगता है। मैं उसके साथ काम करने के लिए उत्सुक हूँ।', es: 'Suena excelente. Tengo muchas ganas de trabajar con él.' }
      ]
    },
    {
      title: 'Family Resemblance',
      context: 'Liam and Maya are looking at vacation photos from Liam\'s hometown visit.',
      charA: { name: 'Maya', av: '👩', role: 'Friend' },
      charB: { name: 'Liam', av: '👨', role: 'Colleague' },
      turns: [
        { spk: 'Maya', text: 'Is this your brother in the middle of the photo?', hi: 'क्या तस्वीर के बीच में यह आपका भाई है?', es: '¿Este es tu hermano en el medio de la foto?' },
        { spk: 'Liam', text: 'Yes, that is Julian. People always say we look like twins!', hi: 'हाँ, वह जूलियन है। लोग हमेशा कहते हैं कि हम जुड़वाँ जैसे दिखते हैं!', es: 'Sí, es Julian. ¡La gente siempre dice que parecemos gemelos!' },
        { spk: 'Maya', text: 'You certainly have the same smile, but he has a neat beard and straight hair.', hi: 'आप दोनों की मुस्कान निश्चित रूप से एक जैसी है, लेकिन उसकी दाढ़ी और सीधे बाल हैं।', es: 'Sin duda tienen la misma sonrisa, pero él tiene barba y cabello lacio.' },
        { spk: 'Liam', text: 'True! He is also more outgoing than me, while I am more quiet and analytical.', hi: 'सच है! वह मुझसे अधिक मिलनसार भी है, जबकि मैं अधिक शांत और विश्लेषणात्मक हूँ।', es: '¡Es verdad! También es más extrovertido que yo, mientras que yo soy más callado.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_u08_l106_p1',
      type: 'multiple_choice',
      prompt: 'Select the correct question to ask about someone\'s physical appearance:',
      question: 'Select the correct question to ask about someone\'s physical appearance:',
      options: ['What does he look like?', 'How is he looking like?', 'What does he like?', 'How does he look to be?'],
      correctAnswer: 'What does he look like?',
      explanation: '"What does [person] look like?" is the standard question for asking about physical appearance.'
    },
    {
      id: 'ex_u08_l106_p2',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the right verb form:',
      sourceSentence: 'You _____ very elegant in that navy blue blazer tonight.',
      targetSentence: 'You look very elegant in that navy blue blazer tonight.',
      options: [
        { id: '1', text: 'look', isCorrect: true },
        { id: '2', text: 'look like', isCorrect: false },
        { id: '3', text: 'are looking like', isCorrect: false },
        { id: '4', text: 'looks', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l106_p3',
      type: 'word_ordering',
      prompt: 'Order the words to describe someone\'s appearance naturally:',
      targetSentence: 'She has long curly dark hair and green eyes',
      wordBank: ['She', 'has', 'long', 'curly', 'dark', 'hair', 'and', 'green', 'eyes']
    },
    {
      id: 'ex_u08_l106_p4',
      type: 'error_correction',
      prompt: 'Correct the grammatical error in this description:',
      sourceSentence: 'David looks like exhausted after completing the marathon.',
      targetSentence: 'David looks exhausted after completing the marathon.',
      explanation: 'Use "looks + adjective" directly without "like" when describing state or impression.'
    },
    {
      id: 'ex_u08_l106_p5',
      type: 'translation',
      prompt: 'Translate into English: "वह एक बहुत ही भरोसेमंद और दयालु व्यक्ति है।"',
      sourceSentence: 'वह एक बहुत ही भरोसेमंद और दयालु व्यक्ति है।',
      targetSentence: 'He is a very reliable and kind person.',
      wordBank: ['He', 'is', 'a', 'very', 'reliable', 'and', 'kind', 'person', 'sensible', 'looks']
    },
    {
      id: 'ex_u08_l106_p6',
      type: 'match_pairs',
      prompt: 'Match the personality traits with their definitions:',
      options: [
        { id: 'm1', text: 'Outgoing' },
        { id: 'm1_m', text: 'Friendly and socially active / मिलनसार' },
        { id: 'm2', text: 'Reliable' },
        { id: 'm2_m', text: 'Trustworthy and dependable / भरोसेमंद' },
        { id: 'm3', text: 'Easygoing' },
        { id: 'm3_m', text: 'Relaxed and calm / शांत स्वभाव' },
        { id: 'm4', text: 'Generous' },
        { id: 'm4_m', text: 'Willing to give freely / उदार' }
      ]
    },
    {
      id: 'ex_u08_l106_p7',
      type: 'listening',
      prompt: 'Listen to the character description:',
      audioText: 'Our new manager is in his early thirties and has a great sense of humor.',
      targetSentence: 'Our new manager is in his early thirties and has a great sense of humor.',
      options: [
        { id: '1', text: 'He is in his early thirties with a great sense of humor', isCorrect: true },
        { id: '2', text: 'He is over fifty and very strict', isCorrect: false },
        { id: '3', text: 'He is a teenager who never smiles', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l106_p8',
      type: 'speaking',
      prompt: 'Speak this sentence clearly into your microphone:',
      targetSentence: 'She has an outgoing personality and gets along well with everyone.',
      audioText: 'She has an outgoing personality and gets along well with everyone.'
    },
    {
      id: 'ex_u08_l106_p9',
      type: 'dialogue_completion',
      prompt: 'Complete the conversation turn:',
      sourceSentence: 'Speaker A: What is your sister like?\nSpeaker B: _____',
      targetSentence: 'Speaker B: She is very creative, patient, and easy to talk to.',
      options: [
        { id: '1', text: 'She is very creative, patient, and easy to talk to.', isCorrect: true },
        { id: '2', text: 'She likes pizza and pasta.', isCorrect: false },
        { id: '3', text: 'She looks like tall and slim.', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l106_p10',
      type: 'listen_and_type',
      prompt: 'Listen and type the description exactly:',
      audioText: 'He has a neat beard and wears casual clothes.',
      targetSentence: 'He has a neat beard and wears casual clothes.',
      wordBank: ['He', 'has', 'a', 'neat', 'beard', 'and', 'wears', 'casual', 'clothes']
    }
  ],
  review: [
    {
      id: 'ex_u08_l106_r1',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly follows adjective order rules?',
      question: 'Which sentence correctly follows adjective order rules?',
      options: [
        'He is a tall young British architect.',
        'He is a British tall young architect.',
        'He is a young British tall architect.',
        'He is an architect tall young British.'
      ],
      correctAnswer: 'He is a tall young British architect.',
      explanation: 'Adjective order: Size (tall) -> Age (young) -> Origin (British) -> Noun.'
    },
    {
      id: 'ex_u08_l106_r2',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the correct preposition/verb:',
      sourceSentence: 'Marcus looks _____ his grandfather when he smiles.',
      targetSentence: 'Marcus looks like his grandfather when he smiles.',
      options: [
        { id: '1', text: 'like', isCorrect: true },
        { id: '2', text: 'as', isCorrect: false },
        { id: '3', text: 'to', isCorrect: false },
        { id: '4', text: 'with', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l106_r3',
      type: 'word_ordering',
      prompt: 'Arrange the words to form a polite inquiry about character:',
      targetSentence: 'What is your new colleague like to work with',
      wordBank: ['What', 'is', 'your', 'new', 'colleague', 'like', 'to', 'work', 'with']
    },
    {
      id: 'ex_u08_l106_r4',
      type: 'error_correction',
      prompt: 'Identify and fix the adjective mistake:',
      sourceSentence: 'My uncle has a black short mustache and gray hairs.',
      targetSentence: 'My uncle has a short black mustache and gray hair.',
      explanation: '"Short" precedes "black", and "hair" is uncountable in general descriptions.'
    },
    {
      id: 'ex_u08_l106_r5',
      type: 'translation',
      prompt: 'Translate into English: "वह अपनी माँ जैसी दिखती है लेकिन उसके पिता जैसा स्वभाव है।"',
      sourceSentence: 'वह अपनी माँ जैसी दिखती है लेकिन उसके पिता जैसा स्वभाव है।',
      targetSentence: 'She looks like her mother but has her father\'s personality.',
      wordBank: ['She', 'looks', 'like', 'her', 'mother', 'but', 'has', 'her', 'father\'s', 'personality']
    },
    {
      id: 'ex_u08_l106_r6',
      type: 'speaking',
      prompt: 'Speak this sentence with clear intonation:',
      targetSentence: 'He is extremely ambitious and works hard every day.',
      audioText: 'He is extremely ambitious and works hard every day.'
    },
    {
      id: 'ex_u08_l106_r7',
      type: 'recognition',
      prompt: 'Identify whether this sentence describes appearance or personality:',
      question: '"She is very generous and always helps her neighbors."',
      options: ['Personality Trait', 'Physical Appearance'],
      correctAnswer: 'Personality Trait',
      explanation: 'Being generous is an internal character and behavioral quality.'
    },
    {
      id: 'ex_u08_l106_r8',
      type: 'fill_blank',
      prompt: 'Select the suitable word for a practical person:',
      sourceSentence: 'Maya made a very _____ decision to save her bonus.',
      targetSentence: 'Maya made a very sensible decision to save her bonus.',
      options: [
        { id: '1', text: 'sensible', isCorrect: true },
        { id: '2', text: 'sensitive', isCorrect: false },
        { id: '3', text: 'stubborn', isCorrect: false },
        { id: '4', text: 'casual', isCorrect: false }
      ]
    }
  ],
  assessment: [
    {
      id: 'ex_u08_l106_a1',
      type: 'multiple_choice',
      prompt: 'Choose the sentence that correctly uses "look":',
      question: 'Choose the sentence that correctly uses "look":',
      options: [
        'You look cheerful and refreshed today.',
        'You look like cheerful and refreshed today.',
        'You are looking like cheerful today.',
        'You looks cheerful today.'
      ],
      correctAnswer: 'You look cheerful and refreshed today.',
      explanation: '"Look" directly connects to adjectives without "like".'
    },
    {
      id: 'ex_u08_l106_a2',
      type: 'word_ordering',
      prompt: 'Construct the assessment sentence accurately:',
      targetSentence: 'He is a confident speaker who stands out in a crowd',
      wordBank: ['He', 'is', 'a', 'confident', 'speaker', 'who', 'stands', 'out', 'in', 'a', 'crowd']
    },
    {
      id: 'ex_u08_l106_a3',
      type: 'fill_blank',
      prompt: 'Complete with the appropriate personality adjective:',
      sourceSentence: 'Even when students ask the same question twice, Mr. Evans remains _____.',
      targetSentence: 'Even when students ask the same question twice, Mr. Evans remains patient.',
      options: [
        { id: '1', text: 'patient', isCorrect: true },
        { id: '2', text: 'stubborn', isCorrect: false },
        { id: '3', text: 'curly', isCorrect: false },
        { id: '4', text: 'casual', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l106_a4',
      type: 'translation',
      prompt: 'Translate into English: "रोहन मध्यम कद का है और चश्मा पहनता है।"',
      sourceSentence: 'रोहन मध्यम कद का है और चश्मा पहनता है।',
      targetSentence: 'Rohan is of medium-height and wears glasses.',
      wordBank: ['Rohan', 'is', 'of', 'medium-height', 'and', 'wears', 'glasses', 'tall', 'look']
    },
    {
      id: 'ex_u08_l106_a5',
      type: 'error_correction',
      prompt: 'Fix the error in the description question:',
      sourceSentence: 'How does your new supervisor look like?',
      targetSentence: 'What does your new supervisor look like?',
      explanation: 'Always use "What does [person] look like?", never "How does...".'
    },
    {
      id: 'ex_u08_l106_a6',
      type: 'listening',
      prompt: 'Listen and identify the physical trait described:',
      audioText: 'She has long straight dark hair and a warm welcoming smile.',
      targetSentence: 'She has long straight dark hair and a warm welcoming smile.',
      options: [
        { id: '1', text: 'Long straight dark hair', isCorrect: true },
        { id: '2', text: 'Short blond curly hair', isCorrect: false },
        { id: '3', text: 'Red hair and a beard', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l106_a7',
      type: 'speaking',
      prompt: 'Speak this mastery statement clearly:',
      targetSentence: 'My best friend is reliable, honest, and very easygoing.',
      audioText: 'My best friend is reliable, honest, and very easygoing.'
    },
    {
      id: 'ex_u08_l106_a8',
      type: 'personal_production',
      prompt: 'Describe a colleague or family member using at least one appearance word and two personality traits:',
      targetSentence: 'My brother is tall and well-built, and he is very generous and patient.'
    }
  ]
};

// =========================================================================
// LESSON 107: Relationships, Social Circles & Keeping in Touch
// =========================================================================
export const LESSON_107_CONFIG: LessonConfigA2 = {
  num: 107,
  title: 'Relationships, Social Circles & Keeping in Touch',
  icon: '👥',
  estMin: 25,
  objTitle: 'Expressing Social Connections, Friendships & Communication Habits',
  objDesc: 'Talk about maintaining friendships, staying in touch, family connections, and reciprocal interactions with friends and coworkers.',
  objHi: 'दोस्ती बनाए रखने, संपर्क में रहने और आपसी बातचीत पर चर्चा करना सीखें।',
  objEs: 'Hablar sobre mantener amistades, estar en contacto y relaciones recíprocas.',
  canDo: [
    'I can describe my friendship circle and how often I see my close friends.',
    'I can use reciprocal phrases with "each other" and "one another" accurately.',
    'I can express methods of staying in touch (messaging, video calls, meeting up).',
    'I can describe relationship states using collocations like "get along with" and "lose touch".'
  ],
  canDoHi: [
    'मैं अपने मित्र मंडली और अपने करीबी दोस्तों से मिलने की आवृत्ति का वर्णन कर सकता हूँ।',
    'मैं "each other" और "one another" के साथ पारस्परिक वाक्यों का सही उपयोग कर सकता हूँ।',
    'मैं संपर्क में रहने के तरीकों (मैसेजिंग, वीडियो कॉल, मिलना) को व्यक्त कर सकता हूँ।',
    'मैं "get along with" और "lose touch" जैसे वाक्यांशों का उपयोग कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir mi círculo de amigos y con qué frecuencia los veo.',
    'Puedo usar frases recíprocas con "each other" con precisión.',
    'Puedo expresar formas de mantenerse en contacto (mensajes, videollamadas, reuniones).',
    'Puedo describir relaciones usando colocaciones como "get along with" y "lose touch".'
  ],
  vocab: [
    { w: 'acquaintance', p: '/əˈkweɪntəns/', m: 'a person one knows slightly, but who is not a close friend', hi: 'परिचित', es: 'conocido', fr: 'connaissance', de: 'Bekannter', pt: 'conhecido', zh: '熟人', ar: 'معرفة', ja: '知り合い', ru: 'знакомый', ex: 'He is not a close friend, just a work acquaintance.', exHi: 'वह कोई करीबी दोस्त नहीं है, बस काम का एक परिचित है।', exEs: 'No es un amigo cercano, solo un conocido del trabajo.', ic: '🤝' },
    { w: 'colleague', p: '/ˈkɒliːɡ/', m: 'a person with whom one works in a profession or business', hi: 'सहकर्मी / साथी', es: 'colega / compañero de trabajo', fr: 'collègue', de: 'Kollege', pt: 'colega', zh: '同事', ar: 'زميل عمل', ja: '同僚', ru: 'коллега', ex: 'My colleagues and I often eat lunch together.', exHi: 'मैं और मेरे सहकर्मी अक्सर साथ में लंच करते हैं।', exEs: 'Mis colegas y yo solemos almorzar juntos.', ic: '💼' },
    { w: 'neighbor', p: '/ˈneɪbər/', m: 'a person living near or next door', hi: 'पड़ोसी', es: 'vecino', fr: 'voisin', de: 'Nachbar', pt: 'vizinho', zh: '邻居', ar: 'جار', ja: '隣人', ru: 'сосед', ex: 'Our next-door neighbor watered our plants while we were away.', exHi: 'हमारे पड़ोस वाले पड़ोसी ने हमारे बाहर होने पर पौधों को पानी दिया।', exEs: 'Nuestro vecino de al lado regó nuestras plantas.', ic: '🏡' },
    { w: 'friendship', p: '/ˈfrendʃɪp/', m: 'the emotions or conduct of friends; the state of being friends', hi: 'दोस्ती / मित्रता', es: 'amistad', fr: 'amitié', de: 'Freundschaft', pt: 'amizade', zh: '友谊', ar: 'صداقة', ja: '友情', ru: 'дружба', ex: 'Our friendship has lasted for more than fifteen years.', exHi: 'हमारी दोस्ती पंद्रह साल से भी ज्यादा समय से चली आ रही है।', exEs: 'Nuestra amistad ha durado más de quince años.', ic: '❤️' },
    { w: 'classmate', p: '/ˈklɑːsmeɪt/', m: 'a member of the same class at school or college', hi: 'सहपाठी', es: 'compañero de clase', fr: 'camarade de classe', de: 'Klassenkamerad', pt: 'colega de classe', zh: '同班同学', ar: 'زميل دراسة', ja: 'クラスメート', ru: 'одноклассник', ex: 'I ran into an old college classmate at the bookstore.', exHi: 'किताबों की दुकान पर मेरी मुलाकात अपने पुराने कॉलेज सहपाठी से हुई।', exEs: 'Me encontré con un viejo compañero de clase.', ic: '🎒' },
    { w: 'close', p: '/kləʊs/', m: 'having strong emotional connection or intimacy', hi: 'करीबी / गहरा', es: 'cercano / íntimo', fr: 'proche', de: 'eng', pt: 'próximo', zh: '亲密的', ar: 'قريب', ja: '親密な', ru: 'близкий', ex: 'We have been close friends since childhood.', exHi: 'हम बचपन से ही बहुत करीबी दोस्त रहे हैं।', exEs: 'Hemos sido amigos cercanos desde la infancia.', ic: '🤞' },
    { w: 'supportive', p: '/səˈpɔːtɪv/', m: 'providing encouragement or emotional help', hi: 'सहायक / मददगार', es: 'solidario / comprensivo', fr: 'solidaire', de: 'unterstützend', pt: 'compreensivo', zh: '支持的', ar: 'داعم', ja: '支えになる', ru: 'поддерживающий', ex: 'My family was very supportive during my job search.', exHi: 'मेरी नौकरी की तलाश के दौरान मेरा परिवार बहुत मददगार रहा।', exEs: 'Mi familia me apoyó mucho durante mi búsqueda de empleo.', ic: '🤲' },
    { w: 'trustworthy', p: '/ˈtrʌstˌwɜːði/', m: 'able to be relied on as honest or truthful', hi: 'भरोसेमंद', es: 'digno de confianza', fr: 'digne de confiance', de: 'vertrauenswürdig', pt: 'confiável', zh: '值得信赖的', ar: 'جدير بالثقة', ja: '信頼できる', ru: 'заслуживающий доверия', ex: 'She is a trustworthy confidant who never shares secrets.', exHi: 'वह एक भरोसेमंद राज़दार है जो कभी बातें लीक नहीं करती।', exEs: 'Ella es una persona de confianza que no cuenta secretos.', ic: '🔒' },
    { w: 'get-together', p: '/ˈɡet təˌɡeðər/', m: 'an informal gathering or social party', hi: 'मिलन समारोह / महफ़िल', es: 'reunión informal', fr: 'rencontre amicale', de: 'Treffen', pt: 'encontro informal', zh: '聚会', ar: 'لقاء ودي', ja: '親睦会', ru: 'посиделки', ex: 'We organized a weekend get-together in the park.', exHi: 'हमने पार्क में सप्ताहांत मिलन समारोह का आयोजन किया।', exEs: 'Organizamos una reunión de fin de semana en el parque.', ic: '🎉' },
    { w: 'invitation', p: '/ˌɪnvɪˈteɪʃn/', m: 'a written or verbal request inviting someone to go somewhere', hi: 'निमंत्रण', es: 'invitación', fr: 'invitation', de: 'Einladung', pt: 'convite', zh: '邀请', ar: 'دعوة', ja: '招待状', ru: 'приглашение', ex: 'Thank you for the dinner invitation!', exHi: 'रात के खाने के निमंत्रण के लिए धन्यवाद!', exEs: '¡Gracias por la invitación a cenar!', ic: '✉️' },
    { w: 'reunion', p: '/riːˈjuːniən/', m: 'a gathering of people who have not seen each other for some time', hi: 'पुनर्मिलन (रीयूनियन)', es: 'reunión / reencuentro', fr: 'retrouvailles', de: 'Wiedervereinigung', pt: 'reencontro', zh: '重聚', ar: 'لم شمل', ja: '同窓会', ru: 'воссоединение', ex: 'Our high school reunion was emotional and joyful.', exHi: 'हमारा हाई स्कूल रीयूनियन बहुत भावुक और आनंदमय था।', exEs: 'Nuestro reencuentro escolar fue muy emotivo.', ic: '🎊' },
    { w: 'bond', p: '/bɒnd/', m: 'a relationship between people based on shared feelings or experiences', hi: 'गहरा रिश्ता / बंधन', es: 'vínculo / lazo', fr: 'lien', de: 'Bindung', pt: 'vínculo', zh: '纽带', ar: 'رابطة', ja: '絆', ru: 'связь / узы', ex: 'They share a special bond over their love of hiking.', exHi: 'हाइकिंग के शौक की वजह से उनके बीच एक खास रिश्ता है।', exEs: 'Comparten un vínculo especial por su amor al senderismo.', ic: '🔗' },
    { w: 'stranger', p: '/ˈstreɪndʒər/', m: 'a person whom one does not know', hi: 'अजनबी', es: 'desconocido', fr: 'inconnu', de: 'Fremder', pt: 'estranho', zh: '陌生人', ar: 'غريب', ja: '見知らぬ人', ru: 'незнакомец', ex: 'A kind stranger helped me with heavy luggage on the stairs.', exHi: 'एक दयालु अजनबी ने सीढ़ियों पर भारी सामान उठाने में मेरी मदद की।', exEs: 'Un amable desconocido me ayudó con el equipaje pesado.', ic: '👤' },
    { w: 'circle', p: '/ˈsɜːkl/', m: 'a group of people connected by common interests or friendship', hi: 'सर्कल / मित्रों का समूह', es: 'círculo social', fr: 'cercle', de: 'Freundeskreis', pt: 'círculo social', zh: '社交圈', ar: 'دائرة اجتماعية', ja: '交友関係', ru: 'круг общения', ex: 'She has a wide circle of friends from university.', exHi: 'विश्वविद्यालय से उसके दोस्तों का एक बड़ा दायरा है।', exEs: 'Ella tiene un amplio círculo de amigos.', ic: '⭕' },
    { w: 'socialize', p: '/ˈsəʊʃəlaɪz/', m: 'participate in social activities with others', hi: 'मेलजोल बढ़ाना / सामाजिक होना', es: 'socializar', fr: 'socialiser', de: 'Kontakte pflegen', pt: 'socializar', zh: '交际', ar: 'يتواصل اجتماعياً', ja: '交流する', ru: 'общаться', ex: 'I prefer to socialize on weekends when work is done.', exHi: 'काम खत्म होने के बाद मैं सप्ताहांत पर मेलजोल बढ़ाना पसंद करता हूँ।', exEs: 'Prefiero socializar los fines de semana.', ic: '🍹' },
    { w: 'catch up', p: '/kætʃ ʌp/', m: 'talk to someone to learn what has happened since last meeting', hi: 'हालचाल जानना / पुरानी बातें ताजा करना', es: 'ponerse al día', fr: 'se donner des nouvelles', de: 'sich auf den neuesten Stand bringen', pt: 'colocar a conversa em dia', zh: '叙旧 / 了解近况', ar: 'تدارك الأخبار', ja: '近況を報告し合う', ru: 'пообщаться / узнать новости', ex: 'Let\'s grab a coffee and catch up this afternoon.', exHi: 'चलो आज दोपहर कॉफ़ी पीते हैं और हालचाल जानते हैं।', exEs: 'Tomemos un café y pongámonos al día esta tarde.', ic: '☕' },
    { w: 'hang out', p: '/hæŋ aʊt/', m: 'spend time relaxing or socializing informally', hi: 'समय बिताना / मौज-मस्ती करना', es: 'pasar el rato', fr: 'traîner ensemble', de: 'abhängen', pt: 'passar tempo junto', zh: '闲逛 / 聚聚', ar: 'قضاء الوقت معاً', ja: 'ぶらぶら過ごす', ru: 'тусоваться / проводить время', ex: 'We often hang out at the local community center.', exHi: 'हम अक्सर स्थानीय सामुदायिक केंद्र में समय बिताते हैं।', exEs: 'A menudo pasamos el rato en el centro comunitario.', ic: '🛋️' },
    { w: 'interact', p: '/ˌɪntərˈækt/', m: 'communicate or be involved directly with someone', hi: 'बातचीत करना / बातचीत में शामिल होना', es: 'interactuar', fr: 'interagir', de: 'interagieren', pt: 'interagir', zh: '互动', ar: 'يتفاعل', ja: '交流する', ru: 'взаимодействовать', ex: 'Children learn valuable skills when they interact with peers.', exHi: 'बच्चे साथियों के साथ बातचीत करते समय मूल्यवान कौशल सीखते हैं।', exEs: 'Los niños aprenden habilidades al interactuar.', ic: '🗣️' },
    { w: 'confide', p: '/kənˈfaɪd/', m: 'tell someone about a secret or personal matter in confidence', hi: 'विश्वास करके दिल की बात कहना', es: 'confiar (un secreto)', fr: 'se confier', de: 'sich anvertrauen', pt: 'desabafar / confiar', zh: '倾诉', ar: 'يبوح بسر', ja: '打ち明ける', ru: 'доверять тайну', ex: 'I always confide in my sister when I feel stressed.', exHi: 'जब मैं तनाव महसूस करता हूँ तो हमेशा अपनी बहन से दिल की बात साझा करता हूँ।', exEs: 'Siempre me desahogo con mi hermana cuando me estreso.', ic: '🤫' },
    { w: 'distant', p: '/ˈdɪstənt/', m: 'far away in space or time; not close emotionally', hi: 'दूर का (रिश्तेदार या संबंध)', es: 'lejano / distante', fr: 'éloigné', de: 'entfernt', pt: 'distante', zh: '远房的 / 疏远的', ar: 'بعيد', ja: '遠い / 疎遠な', ru: 'дальний / отстраненный', ex: 'We received a wedding invitation from a distant relative.', exHi: 'हमें एक दूर के रिश्तेदार से शादी का निमंत्रण मिला।', exEs: 'Recibimos una invitación de boda de un pariente lejano.', ic: '✈️' }
  ],
  chunks: [
    { phrase: 'keep in touch with someone', meaning: 'maintain regular communication with someone', hi: 'किसी से लगातार संपर्क में रहना', es: 'mantenerse en contacto con alguien', fr: 'rester en contact avec quelqu\'un', de: 'mit jemandem in Kontakt bleiben', pt: 'manter contato com alguém', zh: '与某人保持联系', ar: 'البقاء على اتصال مع شخص ما', ja: '誰かと連絡を取り合う', ru: 'поддерживать связь с кем-то', note: 'Standard phrase for sustained friendships across distance.', ic: '📱' },
    { phrase: 'lose touch with someone', meaning: 'stop communicating with someone over time', hi: 'किसी से संपर्क टूट जाना', es: 'perder el contacto con alguien', fr: 'perdre le contact avec quelqu\'un', de: 'den Kontakt zu jemandem verlieren', pt: 'perder o contato com alguém', zh: '与某人失去联系', ar: 'فقدان الاتصال بشخص ما', ja: '誰かと音信不通になる', ru: 'потерять связь с кем-то', note: 'Opposite of "keep in touch".', ic: '📵' },
    { phrase: 'get along well with', meaning: 'have a pleasant relationship without conflict', hi: 'किसी के साथ अच्छी निभना / तालमेल होना', es: 'llevarse muy bien con', fr: 'très bien s\'entendre avec', de: 'sich sehr gut verstehen mit', pt: 'dar-se muito bem com', zh: '与...相处融洽', ar: 'التوافق جيداً مع', ja: '〜と仲良くやっていく', ru: 'хорошо ладить с', note: 'Essential everyday relationship phrasal verb.', ic: '🤝' },
    { phrase: 'help each other out', meaning: 'assist one another mutually during difficulties', hi: 'एक दूसरे की मदद करना', es: 'ayudarse mutuamente', fr: 's\'entraider', de: 'sich gegenseitig helfen', pt: 'ajudar-se mutuamente', zh: '互相帮助', ar: 'مساعدة بعضهم البعض', ja: 'お互いに助け合う', ru: 'помогать друг другу', note: 'Combines reciprocal "each other" with phrasal verb "help out".', ic: '🤲' },
    { phrase: 'make new friends', meaning: 'form new friendships in a new setting', hi: 'नए दोस्त बनाना', es: 'hacer nuevos amigos', fr: 'se faire de nouveaux amis', de: 'neue Freunde finden', pt: 'fazer novos amigos', zh: '结交新朋友', ar: 'تكوين صداقات جديدة', ja: '新しい友達を作る', ru: 'заводить новых друзей', note: 'Always use "make friends", never "do friends".', ic: '✨' },
    { phrase: 'know each other for years', meaning: 'have a shared history over a long period', hi: 'सालों से एक दूसरे को जानना', es: 'conocerse desde hace años', fr: 'se connaître depuis des années', de: 'sich seit Jahren kennen', pt: 'conhecer-se há anos', zh: '相识多年', ar: 'يعرفون بعضهم منذ سنوات', ja: '何年も前から知り合いである', ru: 'знать друг друга годами', note: 'Expressing durability of social connections.', ic: '🕰️' },
    { phrase: 'reach out to someone', meaning: 'initiate contact or offer support to someone', hi: 'किसी से संपर्क साधना / मदद की पेशकश करना', es: 'ponerse en contacto con alguien', fr: 'contacter / tendre la main à quelqu\'un', de: 'auf jemanden zugehen', pt: 'entrar em contato com alguém', zh: '主动联系某人', ar: 'التواصل مع شخص ما', ja: '誰かに連絡を取る', ru: 'связаться с кем-то', note: 'Very popular in modern personal and professional contexts.', ic: '📞' },
    { phrase: 'be on good terms with', meaning: 'have a polite and friendly relationship', hi: 'अच्छे संबंध होना', es: 'estar en buenos términos con', fr: 'être en bons termes avec', de: 'in gutem Einvernehmen stehen mit', pt: 'estar em bons termos com', zh: '与...关系良好', ar: 'على وفاق مع', ja: '〜と良好な関係である', ru: 'быть в хороших отношениях с', note: 'Used often for neighbors, ex-colleagues, or family.', ic: '🕊️' }
  ],
  grammar: {
    title: 'Reciprocal Pronouns ("Each Other") & Phrasal Verbs in Relationships',
    concept: 'Using reciprocal pronouns for mutual actions and key relationship phrasal verbs (get along, keep in touch, catch up).',
    patterns: [
      {
        title: 'Reciprocal Pronoun "Each Other"',
        structure: 'Subject (Plural) + Verb + each other (+ Preposition)',
        rule: 'Use "each other" when two or more people perform the same action mutually towards one another.',
        examples: [
          { en: 'We call each other every Sunday evening.', hi: 'हम हर रविवार शाम एक-दूसरे को फोन करते हैं।', es: 'Nos llamamos el uno al otro cada domingo por la noche.' },
          { en: 'They always support each other during difficult times.', hi: 'वे मुश्किल समय में हमेशा एक-दूसरे का समर्थन करते हैं।', es: 'Siempre se apoyan mutuamente en tiempos difíciles.' }
        ]
      },
      {
        title: 'Phrasal Verb "Get Along With"',
        structure: 'Subject + get / gets along (well) with + Object (Person)',
        rule: 'Describes having a harmonious relationship without arguments.',
        examples: [
          { en: 'I get along very well with my roommates.', hi: 'मेरी अपने रूममेट्स के साथ बहुत अच्छी बनती है।', es: 'Me llevo muy bien con mis compañeros de piso.' },
          { en: 'Does he get along with his new manager?', hi: 'क्या उसकी नए मैनेजर के साथ अच्छी बनती है?', es: '¿Se lleva bien con su nuevo gerente?' }
        ]
      },
      {
        title: 'Maintaining Contact: "Keep in Touch" & "Catch Up"',
        structure: 'Subject + keep in touch (with [person]) / catch up (on [news])',
        rule: 'Expresses ongoing communication and updating each other on life events.',
        examples: [
          { en: 'Let\'s keep in touch through video calls while you are in London.', hi: 'जब आप लंदन में हों तो वीडियो कॉल के जरिए संपर्क में रहें।', es: 'Mantengámonos en contacto por videollamadas mientras estés en Londres.' },
          { en: 'We spent two hours catching up over coffee.', hi: 'हमने कॉफ़ी पीते हुए हालचाल जानने में दो घंटे बिताए।', es: 'Pasamos dos horas poniéndonos al día con un café.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'I am doing new friends in my college.',
      cor: 'I am making new friends in my college.',
      exp: 'The correct collocation is "make friends", not "do friends".',
      hi: 'दोस्त बनाने के लिए "make friends" का प्रयोग करें, "do friends" गलत है।'
    },
    {
      inc: 'We know ourselves for five years.',
      cor: 'We have known each other for five years.',
      exp: 'Use "each other" for mutual acquaintance, not reflexive "ourselves".',
      hi: 'आपसी परिचय के लिए "each other" का प्रयोग करें, "ourselves" का नहीं।'
    },
    {
      inc: 'I lost the touch with my school friends.',
      cor: 'I lost touch with my school friends.',
      exp: 'The set phrase is "lose touch with", without the definite article "the".',
      hi: 'सही मुहावरा "lose touch with" है, इसमें "the" नहीं लगता।'
    },
    {
      inc: 'She gets along good with her team.',
      cor: 'She gets along well with her team.',
      exp: '"Well" is the adverb that modifies the verb phrase "get along", not the adjective "good".',
      hi: 'क्रिया की विशेषता बताने के लिए adverb "well" का प्रयोग करें: "gets along well"।'
    },
    {
      inc: 'We met to each other at the cafe.',
      cor: 'We met each other at the cafe.',
      exp: '"Meet" takes a direct object without the preposition "to".',
      hi: '"Meet" के बाद सीधे "each other" आता है, "to" का प्रयोग न करें।'
    }
  ],
  dialogues: [
    {
      title: 'Catching Up with an Old Friend',
      context: 'Kavita calls her college friend Rahul after seeing his update on social media.',
      charA: { name: 'Kavita', av: '👩', role: 'College Friend' },
      charB: { name: 'Rahul', av: '👨', role: 'Software Engineer' },
      turns: [
        { spk: 'Kavita', text: 'Hi Rahul! It has been so long since we spoke. How have you been?', hi: 'नमस्ते राहुल! हमारी बात हुए बहुत समय हो गया। तुम कैसे हो?', es: '¡Hola Rahul! Hace tanto tiempo que no hablamos. ¿Cómo has estado?' },
        { spk: 'Rahul', text: 'Kavita! What a pleasant surprise. I know, we almost lost touch after graduation.', hi: 'कविता! कितना सुखद आश्चर्य है। मुझे पता है, ग्रेजुएशन के बाद हमारा लगभग संपर्क टूट गया था।', es: '¡Kavita! Qué grata sorpresa. Lo sé, casi perdimos el contacto tras graduarnos.' },
        { spk: 'Kavita', text: 'Are you still living in Bengaluru? We really need to catch up properly.', hi: 'क्या तुम अभी भी बेंगलुरु में रह रहे हो? हमें सच में बैठकर तसल्ली से बात करनी चाहिए।', es: '¿Sigues viviendo en Bangalore? Realmente necesitamos ponernos al día bien.' },
        { spk: 'Rahul', text: 'Yes! I am free this Saturday. Let\'s meet up for lunch and chat about old times.', hi: 'हाँ! मैं इस शनिवार को खाली हूँ। चलो लंच पर मिलते हैं और पुरानी बातें ताजा करते हैं।', es: '¡Sí! Estoy libre este sábado. Almorcemos juntos y hablemos de viejos tiempos.' },
        { spk: 'Kavita', text: 'Perfect. I will send you the restaurant address. Let\'s definitely keep in touch regularly now!', hi: 'बढ़िया। मैं तुम्हें रेस्टोरेंट का पता भेज दूँगी। चलो अब नियमित संपर्क में रहते हैं!', es: 'Perfecto. Te enviaré la dirección del restaurante. ¡Mantengámonos en contacto regular ahora!' }
      ]
    },
    {
      title: 'Getting Along with New Neighbors',
      context: 'Carlos talks to his mother about moving into his new apartment complex.',
      charA: { name: 'Mother', av: '👵', role: 'Parent' },
      charB: { name: 'Carlos', av: '👨', role: 'Tenant' },
      turns: [
        { spk: 'Mother', text: 'How is the new apartment, Carlos? Have you met your neighbors yet?', hi: 'नया अपार्टमेंट कैसा है, कार्लोस? क्या आप अपने पड़ोसियों से मिले?', es: '¿Cómo está el nuevo departamento, Carlos? ¿Ya conociste a tus vecinos?' },
        { spk: 'Carlos', text: 'Yes, Mom! The couple next door is very friendly and supportive. We help each other out with parcels.', hi: 'हाँ, माँ! पड़ोस का जोड़ा बहुत मिलनसार और मददगार है। हम पार्सल लेने में एक-दूसरे की मदद करते हैं।', es: '¡Sí, mamá! La pareja de al lado es muy amable y comprensiva. Nos ayudamos con los paquetes.' },
        { spk: 'Mother', text: 'That is wonderful. Being on good terms with your neighbors makes life so much easier.', hi: 'यह बहुत अच्छी बात है। पड़ोसियों के साथ अच्छे संबंध होने से जीवन बहुत आसान हो जाता है।', es: 'Eso es maravilloso. Estar en buenos términos con los vecinos facilita mucho la vida.' },
        { spk: 'Carlos', text: 'They even invited me over for tea on Sunday afternoon.', hi: 'उन्होंने तो मुझे रविवार दोपहर चाय पर भी बुलाया है।', es: 'Incluso me invitaron a tomar el té el domingo por la tarde.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_u08_l107_p1',
      type: 'multiple_choice',
      prompt: 'Select the correct collocation for creating friendships:',
      question: 'Select the correct collocation for creating friendships:',
      options: ['Make friends', 'Do friends', 'Create friends', 'Build friends'],
      correctAnswer: 'Make friends',
      explanation: 'In English, the fixed idiomatic collocation is "to make friends".'
    },
    {
      id: 'ex_u08_l107_p2',
      type: 'fill_blank',
      prompt: 'Complete with the reciprocal pronoun:',
      sourceSentence: 'Elena and I trust _____ completely with our personal challenges.',
      targetSentence: 'Elena and I trust each other completely with our personal challenges.',
      options: [
        { id: '1', text: 'each other', isCorrect: true },
        { id: '2', text: 'ourselves', isCorrect: false },
        { id: '3', text: 'themselves', isCorrect: false },
        { id: '4', text: 'together', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l107_p3',
      type: 'word_ordering',
      prompt: 'Order the words to express staying in communication:',
      targetSentence: 'We promise to keep in touch through weekly video calls',
      wordBank: ['We', 'promise', 'to', 'keep', 'in', 'touch', 'through', 'weekly', 'video', 'calls']
    },
    {
      id: 'ex_u08_l107_p4',
      type: 'error_correction',
      prompt: 'Fix the error in this relationship statement:',
      sourceSentence: 'I lost the touch with my university friends after moving abroad.',
      targetSentence: 'I lost touch with my university friends after moving abroad.',
      explanation: 'The idiom is "lose touch with", without the article "the".'
    },
    {
      id: 'ex_u08_l107_p5',
      type: 'translation',
      prompt: 'Translate into English: "हम अक्सर सप्ताहांत पर कैफे में मिलते हैं और बातचीत करते हैं।"',
      sourceSentence: 'हम अक्सर सप्ताहांत पर कैफे में मिलते हैं और बातचीत करते हैं।',
      targetSentence: 'We often hang out and chat at the cafe on weekends.',
      wordBank: ['We', 'often', 'hang', 'out', 'and', 'chat', 'at', 'the', 'cafe', 'on', 'weekends']
    },
    {
      id: 'ex_u08_l107_p6',
      type: 'match_pairs',
      prompt: 'Match social collocations with their meanings:',
      options: [
        { id: 'm1', text: 'Catch up' },
        { id: 'm1_m', text: 'Share recent news / हालचाल जानना' },
        { id: 'm2', text: 'Keep in touch' },
        { id: 'm2_m', text: 'Maintain contact / संपर्क में रहना' },
        { id: 'm3', text: 'Get along with' },
        { id: 'm3_m', text: 'Have friendly relations / अच्छी निभना' },
        { id: 'm4', text: 'Confide in' },
        { id: 'm4_m', text: 'Share private secrets / दिल की बात कहना' }
      ]
    },
    {
      id: 'ex_u08_l107_p7',
      type: 'listening',
      prompt: 'Listen to the plan for the weekend:',
      audioText: 'Let\'s meet at five o\'clock on Saturday and catch up properly.',
      targetSentence: 'Let\'s meet at five o\'clock on Saturday and catch up properly.',
      options: [
        { id: '1', text: 'Meet at 5:00 on Saturday to catch up', isCorrect: true },
        { id: '2', text: 'Cancel the Saturday meeting', isCorrect: false },
        { id: '3', text: 'Call on Monday morning', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l107_p8',
      type: 'speaking',
      prompt: 'Speak this sentence clearly into your microphone:',
      targetSentence: 'My neighbors and I always help each other out with daily tasks.',
      audioText: 'My neighbors and I always help each other out with daily tasks.'
    },
    {
      id: 'ex_u08_l107_p9',
      type: 'dialogue_completion',
      prompt: 'Select the natural response to a reunion proposal:',
      sourceSentence: 'Friend: We haven\'t seen each other in ages! Are you free for coffee?\nYou: _____',
      targetSentence: 'You: I would love to! Let\'s catch up this Thursday after work.',
      options: [
        { id: '1', text: 'I would love to! Let\'s catch up this Thursday after work.', isCorrect: true },
        { id: '2', text: 'I do not have any friends.', isCorrect: false },
        { id: '3', text: 'I am doing friends now.', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l107_p10',
      type: 'listen_and_type',
      prompt: 'Listen and type the phrase:',
      audioText: 'We get along very well with our new colleagues.',
      targetSentence: 'We get along very well with our new colleagues.',
      wordBank: ['We', 'get', 'along', 'very', 'well', 'with', 'our', 'new', 'colleagues']
    }
  ],
  review: [
    {
      id: 'ex_u08_l107_r1',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses a mutual action?',
      question: 'Which sentence correctly expresses a mutual action?',
      options: [
        'They write emails to each other every week.',
        'They write emails to themselves every week.',
        'They write emails to one other every week.',
        'They write emails together each other.'
      ],
      correctAnswer: 'They write emails to each other every week.',
      explanation: '"Each other" indicates mutual exchange between two or more subjects.'
    },
    {
      id: 'ex_u08_l107_r2',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the correct preposition:',
      sourceSentence: 'It is very important to be on good terms _____ your coworkers.',
      targetSentence: 'It is very important to be on good terms with your coworkers.',
      options: [
        { id: '1', text: 'with', isCorrect: true },
        { id: '2', text: 'to', isCorrect: false },
        { id: '3', text: 'for', isCorrect: false },
        { id: '4', text: 'about', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l107_r3',
      type: 'word_ordering',
      prompt: 'Assemble the sentence about making connections:',
      targetSentence: 'It is easy to make new friends when you join a sports club',
      wordBank: ['It', 'is', 'easy', 'to', 'make', 'new', 'friends', 'when', 'you', 'join', 'a', 'sports', 'club']
    },
    {
      id: 'ex_u08_l107_r4',
      type: 'error_correction',
      prompt: 'Correct the error with the adverb form:',
      sourceSentence: 'Priya gets along good with everyone in our department.',
      targetSentence: 'Priya gets along well with everyone in our department.',
      explanation: 'Use the adverb "well" instead of the adjective "good" after "gets along".'
    },
    {
      id: 'ex_u08_l107_r5',
      type: 'translation',
      prompt: 'Translate into English: "हम कई सालों से एक-दूसरे को जानते हैं।"',
      sourceSentence: 'हम कई सालों से एक-दूसरे को जानते हैं।',
      targetSentence: 'We have known each other for many years.',
      wordBank: ['We', 'have', 'known', 'each', 'other', 'for', 'many', 'years', 'know', 'ourselves']
    },
    {
      id: 'ex_u08_l107_r6',
      type: 'speaking',
      prompt: 'Speak this sentence with confidence:',
      targetSentence: 'I always reach out to my close friends whenever they need support.',
      audioText: 'I always reach out to my close friends whenever they need support.'
    },
    {
      id: 'ex_u08_l107_r7',
      type: 'recognition',
      prompt: 'Select whether this phrase refers to losing or keeping communication:',
      question: '"We gradually lost touch after he moved to Australia."',
      options: ['Loss of regular communication', 'Active ongoing communication'],
      correctAnswer: 'Loss of regular communication',
      explanation: '"Lost touch" means communication ceased over time.'
    },
    {
      id: 'ex_u08_l107_r8',
      type: 'fill_blank',
      prompt: 'Choose the correct word for an informal party:',
      sourceSentence: 'We are hosting a small weekend _____ at our place on Saturday.',
      targetSentence: 'We are hosting a small weekend get-together at our place on Saturday.',
      options: [
        { id: '1', text: 'get-together', isCorrect: true },
        { id: '2', text: 'stranger', isCorrect: false },
        { id: '3', text: 'acquaintance', isCorrect: false },
        { id: '4', text: 'bond', isCorrect: false }
      ]
    }
  ],
  assessment: [
    {
      id: 'ex_u08_l107_a1',
      type: 'multiple_choice',
      prompt: 'Choose the grammatically correct sentence:',
      question: 'Choose the grammatically correct sentence:',
      options: [
        'Good friends listen to each other patiently.',
        'Good friends listen to themselves patiently.',
        'Good friends listen each other patiently.',
        'Good friends do listen to one another other.'
      ],
      correctAnswer: 'Good friends listen to each other patiently.',
      explanation: '"Listen to" requires the preposition "to" before the reciprocal pronoun "each other".'
    },
    {
      id: 'ex_u08_l107_a2',
      type: 'word_ordering',
      prompt: 'Construct the assessment statement:',
      targetSentence: 'Even though we live in different cities we keep in touch regularly',
      wordBank: ['Even', 'though', 'we', 'live', 'in', 'different', 'cities', 'we', 'keep', 'in', 'touch', 'regularly']
    },
    {
      id: 'ex_u08_l107_a3',
      type: 'fill_blank',
      prompt: 'Select the right relationship term:',
      sourceSentence: 'She is not just a _____; she is someone I confide in deeply.',
      targetSentence: 'She is not just a colleague; she is someone I confide in deeply.',
      options: [
        { id: '1', text: 'colleague', isCorrect: true },
        { id: '2', text: 'friendship', isCorrect: false },
        { id: '3', text: 'reunion', isCorrect: false },
        { id: '4', text: 'get-together', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l107_a4',
      type: 'translation',
      prompt: 'Translate into English: "जब भी हमें ज़रूरत होती है, हम एक-दूसरे की मदद करते हैं।"',
      sourceSentence: 'जब भी हमें ज़रूरत होती है, हम एक-दूसरे की मदद करते हैं।',
      targetSentence: 'We help each other whenever we need assistance.',
      wordBank: ['We', 'help', 'each', 'other', 'whenever', 'we', 'need', 'assistance']
    },
    {
      id: 'ex_u08_l107_a5',
      type: 'error_correction',
      prompt: 'Find and fix the error in the sentence:',
      sourceSentence: 'They are doing a reunion next month to meet old classmates.',
      targetSentence: 'They are having a reunion next month to meet old classmates.',
      explanation: 'Use "have a reunion" or "organize a reunion", not "do a reunion".'
    },
    {
      id: 'ex_u08_l107_a6',
      type: 'listening',
      prompt: 'Listen and choose what the speaker values in friendship:',
      audioText: 'What I value most in a close friend is trust, honesty, and a supportive attitude.',
      targetSentence: 'What I value most in a close friend is trust, honesty, and a supportive attitude.',
      options: [
        { id: '1', text: 'Trust, honesty, and support', isCorrect: true },
        { id: '2', text: 'Expensive gifts and luxury cars', isCorrect: false },
        { id: '3', text: 'Only meeting once a year', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l107_a7',
      type: 'speaking',
      prompt: 'Speak this statement with clear pronunciation:',
      targetSentence: 'We have a strong bond and always get along well with each other.',
      audioText: 'We have a strong bond and always get along well with each other.'
    },
    {
      id: 'ex_u08_l107_a8',
      type: 'personal_production',
      prompt: 'Describe how you maintain contact with a close friend who lives far away:',
      targetSentence: 'I keep in touch with my best friend through weekly video calls and text messages.'
    }
  ]
};

// =========================================================================
// LESSON 108: Home & Neighborhood Issues: Describing Problems & Repairs
// =========================================================================
export const LESSON_108_CONFIG: LessonConfigA2 = {
  num: 108,
  title: 'Home & Neighborhood Issues: Describing Problems & Repairs',
  icon: '🛠️',
  estMin: 25,
  objTitle: 'Reporting Household Breakdowns, Faults & Requesting Landlord Repairs',
  objDesc: 'Describe common household faults, plumbing and electrical problems, and communicate with landlords or technicians using passive adjectives and need + gerund/infinitive.',
  objHi: 'घर और पड़ोस की समस्याओं, टूट-फूट और मरम्मत के अनुरोध का वर्णन करना सीखें।',
  objEs: 'Describir problemas del hogar, averías y solicitar reparaciones a propietarios o técnicos.',
  canDo: [
    'I can describe household faults such as leaking taps, clogged drains, and broken heating.',
    'I can use passive participle adjectives (broken, cracked, leaking, stained) accurately.',
    'I can explain what needs fixing using "There is something wrong with..." and "It needs fixing / to be fixed".',
    'I can make a polite repair request to a landlord, caretaker, or repair service.'
  ],
  canDoHi: [
    'मैं नल से पानी टपकने, नाली जाम होने और हीटर खराब होने जैसी समस्याओं का वर्णन कर सकता हूँ।',
    'मैं broken, leaking, clogged जैसे विशेषणों का सही प्रयोग कर सकता हूँ।',
    'मैं "There is something wrong with..." का उपयोग करके खराबी समझा सकता हूँ।',
    'मैं मकान मालिक या मैकेनिक से मरम्मत के लिए विनम्र अनुरोध कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir averías como grifos que gotean, desagües tapados y calefacción rota.',
    'Puedo usar adjetivos participiales pasivos (broken, clogged, leaking) con precisión.',
    'Puedo explicar averías usando "There is something wrong with...".',
    'Puedo solicitar reparaciones formal y educadamente a un propietario o técnico.'
  ],
  vocab: [
    { w: 'landlord', p: '/ˈlændlɔːd/', m: 'a person who rents out land, a building, or an accommodation', hi: 'मकान मालिक', es: 'propietario / casero', fr: 'propriétaire', de: 'Vermieter', pt: 'proprietário', zh: '房东', ar: 'مالك العقار', ja: '家主', ru: 'арендодатель', ex: 'I called the landlord to report a broken heater.', exHi: 'मैंने हीटर खराब होने की सूचना देने के लिए मकान मालिक को फोन किया।', exEs: 'Llamé al casero para reportar un calentador roto.', ic: '🔑' },
    { w: 'tenant', p: '/ˈtenənt/', m: 'a person who occupies land or property rented from a landlord', hi: 'किरायेदार', es: 'inquilino', fr: 'locataire', de: 'Mieter', pt: 'inquilino', zh: '租户', ar: 'مستأجر', ja: '借家人', ru: 'арендатор', ex: 'The tenant pays rent on the first day of every month.', exHi: 'किरायेदार हर महीने की पहली तारीख को किराया देता है।', exEs: 'El inquilino paga el alquiler el primer día del mes.', ic: '📝' },
    { w: 'plumber', p: '/ˈplʌmər/', m: 'a person who fits and repairs the pipes, fittings of water supply', hi: 'प्लंबर / नलसाज', es: 'fontanero / plomero', fr: 'plombier', de: 'Klempner', pt: 'encanador', zh: '水管工', ar: 'سباك', ja: '配管工', ru: 'сантехник', ex: 'We need a plumber to fix the kitchen pipe leak.', exHi: 'रसोई के पाइप के रिसाव को ठीक करने के लिए हमें एक प्लंबर की आवश्यकता है।', exEs: 'Necesitamos un fontanero para arreglar la fuga.', ic: '🔧' },
    { w: 'electrician', p: '/ɪˌlekˈtrɪʃn/', m: 'a person who installs and maintains electrical equipment', hi: 'बिजली मिस्त्री / इलेक्ट्रिशियन', es: 'electricista', fr: 'électricien', de: 'Elektriker', pt: 'eletricista', zh: '电工', ar: 'كهربائي', ja: '電気技師', ru: 'электрик', ex: 'An electrician examined the faulty wiring in the hallway.', exHi: 'एक इलेक्ट्रीशियन ने दालान में खराब वायरिंग की जांच की।', exEs: 'Un electricista examinó el cableado defectuoso.', ic: '⚡' },
    { w: 'leak', p: '/liːk/', m: 'an accidental hole or crack through which liquid or gas escapes', hi: 'रिसाव / टपकना', es: 'fuga / gotera', fr: 'fuite', de: 'Leck', pt: 'vazamento', zh: '泄漏', ar: 'تسرب', ja: '漏れ', ru: 'утечка', ex: 'There is a major water leak under the bathroom sink.', exHi: 'बाथरूम के सिंक के नीचे पानी का बड़ा रिसाव हो रहा है।', exEs: 'Hay una gran fuga de agua debajo del lavabo.', ic: '💧' },
    { w: 'clogged', p: '/klɒɡd/', m: 'blocked with an accumulation of thick or solid matter', hi: 'जाम / रुका हुआ', es: 'atascado / tapado', fr: 'bouché', de: 'verstopft', pt: 'entupido', zh: '堵塞的', ar: 'مسدود', ja: '詰まった', ru: 'засоренный', ex: 'The shower drain is clogged with hair and soap.', exHi: 'शावर का नाला बालों और साबुन से जाम हो गया है।', exEs: 'El desagüe de la ducha está atascado.', ic: '🚿' },
    { w: 'broken', p: '/ˈbrəʊkən/', m: 'having been fractured or damaged and not in working order', hi: 'टूटा हुआ / खराब', es: 'roto / averiado', fr: 'cassé / en panne', de: 'kaputt', pt: 'quebrado', zh: '损坏的', ar: 'مكسور / معطل', ja: '壊れた', ru: 'сломанный', ex: 'The lock on the front door is completely broken.', exHi: 'सामने के दरवाजे का ताला पूरी तरह टूटा हुआ है।', exEs: 'La cerradura de la puerta principal está rota.', ic: '🔒' },
    { w: 'heating', p: '/ˈhiːtɪŋ/', m: 'equipment used to provide heat in a building', hi: 'हीटिंग सिस्टम / ताप व्यवस्था', es: 'calefacción', fr: 'chauffage', de: 'Heizung', pt: 'aquecimento', zh: '供暖系统', ar: 'تدفئة', ja: '暖房', ru: 'отопление', ex: 'The central heating stopped working during the snowstorm.', exHi: 'बर्फबारी के दौरान सेंट्रल हीटिंग ने काम करना बंद कर दिया।', exEs: 'La calefacción central dejó de funcionar.', ic: '🔥' },
    { w: 'air conditioner', p: '/ˈeə kənˌdɪʃənər/', m: 'a machine that cools and dries the air in a building', hi: 'एयर कंडीशनर (एसी)', es: 'aire acondicionado', fr: 'climatiseur', de: 'Klimaanlage', pt: 'ar-condicionado', zh: '空调', ar: 'مكيف هواء', ja: 'エアコン', ru: 'кондиционер', ex: 'The air conditioner is making a loud buzzing noise.', exHi: 'एयर कंडीशनर से तेज भिनभिनाहट की आवाज आ रही है।', exEs: 'El aire acondicionado hace un ruido fuerte.', ic: '❄️' },
    { w: 'fuse', p: '/fjuːz/', m: 'a safety device consisting of a strip of wire that melts under excess current', hi: 'फ्यूज', es: 'fusible', fr: 'fusible', de: 'Sicherung', pt: 'fusível', zh: '保险丝', ar: 'صمام كهربائي / فيوز', ja: 'ヒューズ', ru: 'предохранитель', ex: 'All the lights went out when the main fuse blew.', exHi: 'मेन फ्यूज उड़ते ही सारी बत्तियां गुल हो गईं।', exEs: 'Se apagaron las luces cuando se fundió el fusible.', ic: '💡' },
    { w: 'cracked', p: '/krækt/', m: 'damaged with lines on the surface from impact or pressure', hi: 'दरार पड़ा हुआ', es: 'agrietado', fr: 'fissuré', de: 'rissig', pt: 'rachado', zh: '有裂缝的', ar: 'مشقق', ja: 'ひびの入った', ru: 'треснувший', ex: 'The living room window has a cracked pane of glass.', exHi: 'लिविंग रूम की खिड़की के शीशे में एक दरार है।', exEs: 'La ventana de la sala tiene un vidrio agrietado.', ic: '🪟' },
    { w: 'dripping', p: '/ˈdrɪpɪŋ/', m: 'falling in small drops of liquid', hi: 'टपकता हुआ', es: 'goteando', fr: 'goutte à goutte', de: 'tropfend', pt: 'pingando', zh: '滴水的', ar: 'يقطر', ja: 'ポタポタ落ちる', ru: 'капающий', ex: 'The dripping kitchen faucet kept me awake all night.', exHi: 'रसोई के टपकते नल ने मुझे रात भर जगाए रखा।', exEs: 'El grifo que gotea no me dejó dormir.', ic: '🚰' },
    { w: 'stuck', p: '/stʌk/', m: 'unable to move or be moved from a position', hi: 'अटका हुआ / फंसा हुआ', es: 'atascado / trabado', fr: 'coincé', de: 'eingeklemmt', pt: 'preso / travado', zh: '卡住的', ar: 'عالق', ja: '動かない', ru: 'застрявший', ex: 'The bedroom door is stuck and won\'t open easily.', exHi: 'बेडरूम का दरवाजा अटक गया है और आसानी से नहीं खुल रहा है।', exEs: 'La puerta del dormitorio está trabada y no abre bien.', ic: '🚪' },
    { w: 'appliance', p: '/əˈplaɪəns/', m: 'a device or piece of equipment designed to perform a domestic task', hi: 'घरेलू उपकरण', es: 'electrodoméstico', fr: 'appareil ménager', de: 'Haushaltsgerät', pt: 'eletrodoméstico', zh: '家用电器', ar: 'جهاز منزلي', ja: '電化製品', ru: 'бытовой прибор', ex: 'Our apartment comes with brand new kitchen appliances.', exHi: 'हमारे अपार्टमेंट में बिल्कुल नए किचन उपकरण लगे हैं।', exEs: 'Nuestro departamento viene con electrodomésticos nuevos.', ic: '🍳' },
    { w: 'maintenance', p: '/ˈmeɪntənəns/', m: 'the process of maintaining or preserving building/equipment in good condition', hi: 'रखरखाव / मेंटेनेंस', es: 'mantenimiento', fr: 'entretien', de: 'Instandhaltung', pt: 'manutenção', zh: '维护 / 保养', ar: 'صيانة', ja: 'メンテナンス', ru: 'техобслуживание', ex: 'Building maintenance is scheduled for Tuesday morning.', exHi: 'इमारत के रखरखाव का काम मंगलवार सुबह तय है।', exEs: 'El mantenimiento del edificio está programado para el martes.', ic: '🧰' },
    { w: 'reimburse', p: '/ˌriːɪmˈbɜːs/', m: 'repay a person who has spent or lost money on your behalf', hi: 'पैसे वापस चुकाना / प्रतिपूर्ति करना', es: 'reembolsar', fr: 'rembourser', de: 'erstatten', pt: 'reembolsar', zh: '报销 / 偿还', ar: 'تعويض مالي', ja: '払い戻す', ru: 'возмещать', ex: 'The landlord agreed to reimburse me for the plumber\'s fee.', exHi: 'मकान मालिक प्लंबर के खर्च की भरपाई करने के लिए सहमत हो गया।', exEs: 'El propietario acordó reembolsarme el fontanero.', ic: '💵' },
    { w: 'emergency', p: '/ɪˈmɜːdʒənsi/', m: 'a serious, unexpected, and often dangerous situation requiring immediate action', hi: 'आपातकाल', es: 'emergencia', fr: 'urgence', de: 'Notfall', pt: 'emergência', zh: '紧急情况', ar: 'حالة طوارئ', ja: '緊急事態', ru: 'чрезвычайная ситуация', ex: 'Call the emergency maintenance number if a pipe bursts.', exHi: 'यदि कोई पाइप फट जाए तो आपातकालीन रखरखाव नंबर पर कॉल करें।', exEs: 'Llame a emergencias si revienta una tubería.', ic: '🚨' },
    { w: 'noisy', p: '/ˈnɔɪzi/', m: 'making a lot of noise or clamor', hi: 'शोरगुल वाला', es: 'ruidoso', fr: 'bruyant', de: 'laut', pt: 'barulhento', zh: '嘈杂的', ar: 'صاخب', ja: 'うるさい', ru: 'шумный', ex: 'Our upstairs neighbors were very noisy last night.', exHi: 'हमारे ऊपर वाले पड़ोसियों ने कल रात बहुत शोर मचाया।', exEs: 'Nuestros vecinos de arriba fueron muy ruidosos anoche.', ic: '🔊' },
    { w: 'litter', p: '/ˈlɪtər/', m: 'rubbish such as paper, cans, and bottles left lying in an open place', hi: 'कचरा / कूड़ा-करकट', es: 'basura', fr: 'détritus', de: 'Müll', pt: 'lixo', zh: '垃圾', ar: 'قمامة', ja: 'ゴミ', ru: 'мусор', ex: 'Please do not drop litter in the shared hallway.', exHi: 'कृपया साझा दालान में कचरा न फेंकें।', exEs: 'Por favor, no tire basura en el pasillo compartido.', ic: '🗑️' },
    { w: 'caretaker', p: '/ˈkeəteɪkər/', m: 'a person employed to look after a building', hi: 'देखभाल करने वाला / केयरटेकर', es: 'conserje / encargado', fr: 'gardien', de: 'Hausmeister', pt: 'zelador', zh: '管理员', ar: 'حارس مبنى', ja: '管理人', ru: 'смотритель', ex: 'The caretaker has spare keys for all the main gates.', exHi: 'केयरटेकर के पास सभी मुख्य फाटकों की अतिरिक्त चाबियां हैं।', exEs: 'El conserje tiene llaves de repuesto de las puertas.', ic: '👨‍🔧' }
  ],
  chunks: [
    { phrase: 'there is something wrong with', meaning: 'a device or system is malfunctioning', hi: 'में कोई खराबी है', es: 'hay un problema con / algo anda mal con', fr: 'il y a un problème avec', de: 'etwas stimmt nicht mit', pt: 'há algo de errado com', zh: '...出了问题', ar: 'هناك مشكلة في', ja: '〜の調子が悪い', ru: 'что-то не так с', note: 'Standard formula for reporting breakdowns.', ic: '⚠️' },
    { phrase: 'out of order', meaning: 'not working; temporarily broken', hi: 'खराब है / काम नहीं कर रहा', es: 'fuera de servicio', fr: 'hors service', de: 'außer Betrieb', pt: 'fora de serviço', zh: '发生故障', ar: 'معطل', ja: '故障中', ru: 'не работает / вышел из строя', note: 'Commonly written on signs or said for elevators/machines.', ic: '🚫' },
    { phrase: 'need fixing / need to be fixed', meaning: 'requires repair', hi: 'मरम्मत की आवश्यकता होना', es: 'necesita reparación / debe ser reparado', fr: 'doit être réparé', de: 'muss repariert werden', pt: 'precisa ser consertado', zh: '需要修理', ar: 'يحتاج إلى إصلاح', ja: '修理が必要である', ru: 'нуждается в ремонте', note: '"Need + -ing" has passive meaning (The pipe needs fixing).', ic: '🔧' },
    { phrase: 'as soon as possible', meaning: 'urgently at the earliest opportunity', hi: 'जितनी जल्दी हो सके', es: 'tan pronto como sea posible', fr: 'dès que possible', de: 'so bald wie möglich', pt: 'o mais rápido possível', zh: '尽快', ar: 'في أقرب وقت ممكن', ja: 'できるだけ早く', ru: 'как можно скорее', note: 'Essential polite phrase for urgent repair requests.', ic: '⏰' },
    { phrase: 'send someone over', meaning: 'dispatch a technician or helper to a location', hi: 'किसी को भेजना', es: 'enviar a alguien', fr: 'envoyer quelqu\'un', de: 'jemanden vorbeischicken', pt: 'enviar alguém', zh: '派人过来', ar: 'إرسال شخص ما', ja: '誰かを派遣する', ru: 'прислать кого-то', note: '"Could you please send someone over to look at it?"', ic: '🚚' },
    { phrase: 'turn off the main water valve', meaning: 'shut down the primary water supply', hi: 'मुख्य पानी का वाल्व बंद करना', es: 'cerrar la llave de paso principal', fr: 'fermer le robinet principal', de: 'den Haupthahn zudrehen', pt: 'fechar o registro geral de água', zh: '关掉主水阀', ar: 'إغلاق صمام المياه الرئيسي', ja: '元栓を閉める', ru: 'перекрыть главный вентиль', note: 'Crucial emergency plumbing instruction.', ic: '🚰' },
    { phrase: 'make a strange noise', meaning: 'emit unusual sounds indicating mechanical failure', hi: 'अजीब आवाज निकालना', es: 'hacer un ruido extraño', fr: 'faire un bruit bizarre', de: 'ein seltsames Geräusch machen', pt: 'fazer um barulho estranho', zh: '发出奇怪的声音', ar: 'يصدر صوتاً غريباً', ja: '異音がする', ru: 'издавать странный шум', note: 'Describing malfunctioning appliances.', ic: '🔊' },
    { phrase: 'keep you updated', meaning: 'provide continuous progress reports', hi: 'आपको जानकारी देते रहना', es: 'mantenerle informado', fr: 'vous tenir informé', de: 'Sie auf dem Laufenden halten', pt: 'mantê-lo informado', zh: '随时告知最新情况', ar: 'إبقاؤك على اطلاع', ja: '進捗を随時報告する', ru: 'держать в курсе', note: 'Standard professional closing from landlords/contractors.', ic: '📲' }
  ],
  grammar: {
    title: 'Passive Adjectives, "There is Something Wrong With..." & Need + Gerund',
    concept: 'Describing broken states using passive participle adjectives, diagnosing faults, and expressing necessity of repair.',
    patterns: [
      {
        title: 'Diagnosing Problems with "There is Something Wrong With"',
        structure: 'There is something wrong with + [Determiner] + Noun Phrase',
        rule: 'Use this structure to politely state that a machine or fixture is not working properly.',
        examples: [
          { en: 'There is something wrong with the bathroom heating.', hi: 'बाथरूम की हीटिंग में कोई खराबी है।', es: 'Hay un problema con la calefacción del baño.' },
          { en: 'Is there something wrong with the front door lock?', hi: 'क्या सामने के दरवाजे के ताले में कोई खराबी है?', es: '¿Hay algún problema con la cerradura de la puerta?' }
        ]
      },
      {
        title: 'Passive Participle Adjectives (Broken, Clogged, Leaking, Stuck)',
        structure: 'Subject + BE (is / are) + [broken / clogged / leaking / cracked / stuck]',
        rule: 'Use past participles or present participles as adjectives to describe the current state of damage.',
        examples: [
          { en: 'The kitchen sink is clogged and the faucet is leaking.', hi: 'रसोई का सिंक जाम है और नल से पानी टपक रहा है।', es: 'El fregadero está atascado y el grifo gotea.' },
          { en: 'The balcony window is cracked and needs immediate care.', hi: 'बालकनी की खिड़की में दरार है और तुरंत ध्यान देने की जरूरत है।', es: 'La ventana del balcón está agrietada.' }
        ]
      },
      {
        title: 'Expressing Need for Repair (Need + -ing / Need to be + Past Participle)',
        structure: 'Subject + need(s) + [Verb-ing / to be + Past Participle]',
        rule: 'In British and International English, "need + -ing" has a passive meaning equal to "need to be fixed".',
        examples: [
          { en: 'The washing machine needs fixing as soon as possible.', hi: 'वॉशिंग मशीन को जितनी जल्दी हो सके ठीक करने की जरूरत है।', es: 'La lavadora necesita reparación lo antes posible.' },
          { en: 'These old electrical wires need to be replaced immediately.', hi: 'इन पुराने बिजली के तारों को तुरंत बदलने की जरूरत है।', es: 'Estos cables eléctricos deben reemplazarse de inmediato.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'The water is leaking from the sink, please repair it quickly.',
      cor: 'The sink is leaking water, please repair it quickly.',
      exp: 'While understandable, we usually say "The sink is leaking" or "There is a leak under the sink".',
      hi: 'सीधे "The sink is leaking" कहना अधिक स्वाभाविक है।'
    },
    {
      inc: 'The elevator is broken out of work.',
      cor: 'The elevator is out of order.',
      exp: 'Use the set phrase "out of order" or "broken", not a mix of both.',
      hi: 'मशीन खराब होने के लिए "out of order" या "broken" का प्रयोग करें।'
    },
    {
      inc: 'The roof needs to fix.',
      cor: 'The roof needs fixing. / The roof needs to be fixed.',
      exp: 'Use "needs + -ing" (active gerund with passive sense) or "needs to be + past participle".',
      hi: 'Passive अर्थ के लिए "needs fixing" या "needs to be fixed" कहें।'
    },
    {
      inc: 'There have a problem with the electricity.',
      cor: 'There is a problem with the electricity.',
      exp: 'Use "There is a problem", not "There have a problem".',
      hi: '"There is a problem" सही है, "There have" गलत है।'
    },
    {
      inc: 'The door is close and stuck, I can\'t open.',
      cor: 'The door is stuck and I can\'t open it.',
      exp: '"Stuck" describes being jammed. Always include the object pronoun "it" after transitive verbs like "open".',
      hi: '"Open" के बाद ऑब्जेक्ट "it" लगाना जरूरी है: "can\'t open it"।'
    }
  ],
  dialogues: [
    {
      title: 'Reporting a Plumbing Emergency',
      context: 'Ananya calls her landlord, Mr. Henderson, to report a sudden water leak.',
      charA: { name: 'Ananya', av: '👩', role: 'Tenant' },
      charB: { name: 'Mr. Henderson', av: '👨‍🦳', role: 'Landlord' },
      turns: [
        { spk: 'Ananya', text: 'Hello, Mr. Henderson. I am calling because there is a serious water leak under my kitchen sink.', hi: 'नमस्ते, मिस्टर हेंडरसन। मैं इसलिए फोन कर रही हूँ क्योंकि मेरे किचन सिंक के नीचे पानी का भारी रिसाव हो रहा है।', es: 'Hola, Sr. Henderson. Llamo porque hay una fuga de agua grave bajo mi fregadero.' },
        { spk: 'Mr. Henderson', text: 'Oh dear! Is the water spreading across the floor right now?', hi: 'ओह! क्या पानी अभी फर्श पर फैल रहा है?', es: '¡Vaya! ¿El agua se está extendiendo por el suelo ahora mismo?' },
        { spk: 'Ananya', text: 'Yes, it is dripping rapidly. I placed a bucket under the pipe, but it fills up in minutes.', hi: 'हाँ, यह बहुत तेजी से टपक रहा है। मैंने पाइप के नीचे एक बाल्टी रखी है, लेकिन वह कुछ ही मिनटों में भर जाती है।', es: 'Sí, gotea rápidamente. Puse un balde pero se llena en minutos.' },
        { spk: 'Mr. Henderson', text: 'First, turn off the main water valve under the counter. I will send an emergency plumber over right away.', hi: 'सबसे पहले काउंटर के नीचे मुख्य पानी का वाल्व बंद करें। मैं तुरंत एक आपातकालीन प्लंबर भेजता हूँ।', es: 'Primero cierre la llave de paso bajo el mostrador. Enviaré un fontanero de inmediato.' },
        { spk: 'Ananya', text: 'Thank you so much. I will turn off the valve now and wait for the plumber.', hi: 'बहुत-बहुत धन्यवाद। मैं अभी वाल्व बंद कर देती हूँ और प्लंबर का इंतजार करती हूँ।', es: 'Muchas gracias. Cerraré la llave ahora y esperaré al fontanero.' }
      ]
    },
    {
      title: 'Discussing Building Maintenance',
      context: 'Tomás speaks with the building caretaker about hallway lights and door locks.',
      charA: { name: 'Tomás', av: '👨', role: 'Resident' },
      charB: { name: 'Caretaker', av: '👷', role: 'Building Manager' },
      turns: [
        { spk: 'Tomás', text: 'Excuse me, could you check the light fixture on the third floor? It has been flickering all week.', hi: 'माफ़ कीजिए, क्या आप तीसरी मंजिल पर लगी लाइट देख सकते हैं? यह पूरे हफ्ते से टिमटिमा रही है।', es: 'Disculpe, ¿podría revisar la lámpara del tercer piso? Ha estado parpadeando toda la semana.' },
        { spk: 'Caretaker', text: 'Sure thing! The main fuse tripped yesterday too, so an electrician is coming tomorrow morning.', hi: 'बिल्कुल! कल मेन फ्यूज भी उड़ गया था, इसलिए कल सुबह एक इलेक्ट्रीशियन आ रहा है।', es: '¡Claro! El fusible principal también saltó ayer, así que viene un electricista mañana.' },
        { spk: 'Tomás', text: 'Great. Also, the main entrance door handle feels loose and gets stuck occasionally.', hi: 'बहुत अच्छा। इसके अलावा, मुख्य प्रवेश द्वार का हैंडल ढीला लगता है और कभी-कभी अटक जाता है।', es: 'Genial. Además, la manija de la puerta principal está floja y se traba a veces.' },
        { spk: 'Caretaker', text: 'I will oil the lock and tighten the screws this afternoon. Thanks for letting me know!', hi: 'मैं आज दोपहर ताले में तेल डाल दूँगा और पेंच कस दूँगा। मुझे बताने के लिए धन्यवाद!', es: 'Aceitaré la cerradura y apretaré los tornillos hoy mismo. ¡Gracias por avisar!' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_u08_l108_p1',
      type: 'multiple_choice',
      prompt: 'Select the correct phrase to report a breakdown politely:',
      question: 'Select the correct phrase to report a breakdown politely:',
      options: [
        'There is something wrong with the heater.',
        'There have a problem with the heater.',
        'The heater is making broke.',
        'There are broken the heater.'
      ],
      correctAnswer: 'There is something wrong with the heater.',
      explanation: '"There is something wrong with..." is the standard diagnostic statement.'
    },
    {
      id: 'ex_u08_l108_p2',
      type: 'fill_blank',
      prompt: 'Complete with the passive adjective:',
      sourceSentence: 'The water in the shower won\'t drain because the pipe is _____.',
      targetSentence: 'The water in the shower won\'t drain because the pipe is clogged.',
      options: [
        { id: '1', text: 'clogged', isCorrect: true },
        { id: '2', text: 'clogging', isCorrect: false },
        { id: '3', text: 'clog', isCorrect: false },
        { id: '4', text: 'clogs', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l108_p3',
      type: 'word_ordering',
      prompt: 'Assemble the repair request:',
      targetSentence: 'The washing machine is making a strange noise and needs fixing',
      wordBank: ['The', 'washing', 'machine', 'is', 'making', 'a', 'strange', 'noise', 'and', 'needs', 'fixing']
    },
    {
      id: 'ex_u08_l108_p4',
      type: 'error_correction',
      prompt: 'Fix the grammar in this repair statement:',
      sourceSentence: 'The kitchen faucet is dripping and needs to fix immediately.',
      targetSentence: 'The kitchen faucet is dripping and needs to be fixed immediately.',
      explanation: 'Use "needs to be fixed" or "needs fixing" for passive necessity.'
    },
    {
      id: 'ex_u08_l108_p5',
      type: 'translation',
      prompt: 'Translate into English: "क्या आप कृपया हीटर की जांच करने के लिए किसी को भेज सकते हैं?"',
      sourceSentence: 'क्या आप कृपया हीटर की जांच करने के लिए किसी को भेज सकते हैं?',
      targetSentence: 'Could you please send someone over to check the heater?',
      wordBank: ['Could', 'you', 'please', 'send', 'someone', 'over', 'to', 'check', 'the', 'heater']
    },
    {
      id: 'ex_u08_l108_p6',
      type: 'match_pairs',
      prompt: 'Match household problems with their descriptions:',
      options: [
        { id: 'm1', text: 'Dripping tap' },
        { id: 'm1_m', text: 'Water drops falling / टपकता नल' },
        { id: 'm2', text: 'Clogged drain' },
        { id: 'm2_m', text: 'Blocked water passage / जाम नाला' },
        { id: 'm3', text: 'Cracked glass' },
        { id: 'm3_m', text: 'Surface lines / दरार पड़ा शीशा' },
        { id: 'm4', text: 'Out of order' },
        { id: 'm4_m', text: 'Not functioning / खराब' }
      ]
    },
    {
      id: 'ex_u08_l108_p7',
      type: 'listening',
      prompt: 'Listen to the instruction for a burst pipe:',
      audioText: 'In case of a major leak, turn off the main water valve immediately.',
      targetSentence: 'In case of a major leak, turn off the main water valve immediately.',
      options: [
        { id: '1', text: 'Turn off the main water valve immediately', isCorrect: true },
        { id: '2', text: 'Open all windows and turn on the heating', isCorrect: false },
        { id: '3', text: 'Ignore the water and go to sleep', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l108_p8',
      type: 'speaking',
      prompt: 'Speak this tenant request clearly into your microphone:',
      targetSentence: 'There is a water leak in my bathroom and the floor is flooded.',
      audioText: 'There is a water leak in my bathroom and the floor is flooded.'
    },
    {
      id: 'ex_u08_l108_p9',
      type: 'dialogue_completion',
      prompt: 'Choose the appropriate response from the landlord:',
      sourceSentence: 'Tenant: The central heating stopped working and it is freezing inside.\nLandlord: _____',
      targetSentence: 'Landlord: I understand. I will send an engineer over this afternoon.',
      options: [
        { id: '1', text: 'I understand. I will send an engineer over this afternoon.', isCorrect: true },
        { id: '2', text: 'Enjoy the cold weather!', isCorrect: false },
        { id: '3', text: 'I am doing new friends today.', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l108_p10',
      type: 'listen_and_type',
      prompt: 'Listen and write down the notice:',
      audioText: 'The main elevator is temporarily out of order.',
      targetSentence: 'The main elevator is temporarily out of order.',
      wordBank: ['The', 'main', 'elevator', 'is', 'temporarily', 'out', 'of', 'order']
    }
  ],
  review: [
    {
      id: 'ex_u08_l108_r1',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "need + -ing"?',
      question: 'Which sentence correctly uses "need + -ing"?',
      options: [
        'The broken window pane needs replacing.',
        'The broken window pane needs to replace.',
        'The broken window pane is needing replace.',
        'The broken window pane needs replace.'
      ],
      correctAnswer: 'The broken window pane needs replacing.',
      explanation: '"Need + -ing" expresses that an object requires a repair action performed on it.'
    },
    {
      id: 'ex_u08_l108_r2',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the right professional title:',
      sourceSentence: 'If the electric sockets are sparking, call a certified _____.',
      targetSentence: 'If the electric sockets are sparking, call a certified electrician.',
      options: [
        { id: '1', text: 'electrician', isCorrect: true },
        { id: '2', text: 'plumber', isCorrect: false },
        { id: '3', text: 'landlord', isCorrect: false },
        { id: '4', text: 'tenant', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l108_r3',
      type: 'word_ordering',
      prompt: 'Assemble the sentence explaining a mechanical fault:',
      targetSentence: 'There is something wrong with the air conditioner in the bedroom',
      wordBank: ['There', 'is', 'something', 'wrong', 'with', 'the', 'air', 'conditioner', 'in', 'the', 'bedroom']
    },
    {
      id: 'ex_u08_l108_r4',
      type: 'error_correction',
      prompt: 'Correct the error in the sentence:',
      sourceSentence: 'The elevator is broken out of work since yesterday.',
      targetSentence: 'The elevator has been out of order since yesterday.',
      explanation: 'Use "out of order" to indicate that a public machine or elevator is not working.'
    },
    {
      id: 'ex_u08_l108_r5',
      type: 'translation',
      prompt: 'Translate into English: "सामने का दरवाजा जाम हो गया है और आसानी से नहीं खुलता।"',
      sourceSentence: 'सामने का दरवाजा जाम हो गया है और आसानी से नहीं खुलता।',
      targetSentence: 'The front door is stuck and does not open easily.',
      wordBank: ['The', 'front', 'door', 'is', 'stuck', 'and', 'does', 'not', 'open', 'easily']
    },
    {
      id: 'ex_u08_l108_r6',
      type: 'speaking',
      prompt: 'Speak this sentence with clear diction:',
      targetSentence: 'Could you please send an emergency plumber as soon as possible?',
      audioText: 'Could you please send an emergency plumber as soon as possible?'
    },
    {
      id: 'ex_u08_l108_r7',
      type: 'recognition',
      prompt: 'Identify the trade professional needed for a blocked toilet:',
      question: 'Which trade professional handles water pipes and blocked toilets?',
      options: ['Plumber', 'Electrician'],
      correctAnswer: 'Plumber',
      explanation: 'Plumbers install and repair water pipes, drains, and sanitary fixtures.'
    },
    {
      id: 'ex_u08_l108_r8',
      type: 'fill_blank',
      prompt: 'Select the correct adjective for a noisy neighbor:',
      sourceSentence: 'The upstairs tenants were extremely _____ late last night.',
      targetSentence: 'The upstairs tenants were extremely noisy late last night.',
      options: [
        { id: '1', text: 'noisy', isCorrect: true },
        { id: '2', text: 'clogged', isCorrect: false },
        { id: '3', text: 'leaking', isCorrect: false },
        { id: '4', text: 'dripping', isCorrect: false }
      ]
    }
  ],
  assessment: [
    {
      id: 'ex_u08_l108_a1',
      type: 'multiple_choice',
      prompt: 'Choose the sentence that correctly expresses repair necessity:',
      question: 'Choose the sentence that correctly expresses repair necessity:',
      options: [
        'The cracked window needs to be fixed immediately.',
        'The cracked window needs to fix immediately.',
        'The cracked window is needing fix.',
        'The cracked window needs to being fixed.'
      ],
      correctAnswer: 'The cracked window needs to be fixed immediately.',
      explanation: '"Needs to be fixed" is the correct passive infinitive construction.'
    },
    {
      id: 'ex_u08_l108_a2',
      type: 'word_ordering',
      prompt: 'Construct the assessment statement:',
      targetSentence: 'I reported the water leak to the caretaker this morning',
      wordBank: ['I', 'reported', 'the', 'water', 'leak', 'to', 'the', 'caretaker', 'this', 'morning']
    },
    {
      id: 'ex_u08_l108_a3',
      type: 'fill_blank',
      prompt: 'Complete with the appropriate term:',
      sourceSentence: 'The landlord agreed to _____ the full cost of the emergency repairs.',
      targetSentence: 'The landlord agreed to reimburse the full cost of the emergency repairs.',
      options: [
        { id: '1', text: 'reimburse', isCorrect: true },
        { id: '2', text: 'litter', isCorrect: false },
        { id: '3', text: 'clog', isCorrect: false },
        { id: '4', text: 'fuse', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l108_a4',
      type: 'translation',
      prompt: 'Translate into English: "रसोई के सिंक का नल टपक रहा है और फर्श गीला है।"',
      sourceSentence: 'रसोई के सिंक का नल टपक रहा है और फर्श गीला है।',
      targetSentence: 'The kitchen sink faucet is dripping and the floor is wet.',
      wordBank: ['The', 'kitchen', 'sink', 'faucet', 'is', 'dripping', 'and', 'the', 'floor', 'is', 'wet']
    },
    {
      id: 'ex_u08_l108_a5',
      type: 'error_correction',
      prompt: 'Find and fix the error in the sentence:',
      sourceSentence: 'There have a big problem with the electrical wiring in my flat.',
      targetSentence: 'There is a big problem with the electrical wiring in my flat.',
      explanation: 'Use "There is a problem" for singular noun phrases.'
    },
    {
      id: 'ex_u08_l108_a6',
      type: 'listening',
      prompt: 'Listen to the property manager\'s update:',
      audioText: 'The maintenance team will replace the broken hallway lights tomorrow morning.',
      targetSentence: 'The maintenance team will replace the broken hallway lights tomorrow morning.',
      options: [
        { id: '1', text: 'Replace broken hallway lights tomorrow morning', isCorrect: true },
        { id: '2', text: 'Shut down the water supply for a week', isCorrect: false },
        { id: '3', text: 'Increase the monthly rent', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l108_a7',
      type: 'speaking',
      prompt: 'Speak this mastery statement clearly:',
      targetSentence: 'There is something wrong with the lock and the key is stuck inside.',
      audioText: 'There is something wrong with the lock and the key is stuck inside.'
    },
    {
      id: 'ex_u08_l108_a8',
      type: 'personal_production',
      prompt: 'Write a two-sentence message to your landlord reporting a broken appliance in your apartment:',
      targetSentence: 'Hello Mr. Henderson, there is something wrong with the refrigerator and it is leaking water. Could you please send someone over to check it?'
    }
  ]
};
