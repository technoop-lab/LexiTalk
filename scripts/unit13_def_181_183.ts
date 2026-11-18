import { LessonConfigA2 } from './unit13_builder_helper';

// =========================================================================
// LESSON 181: Exploring Nature, Landscapes, National Parks & Wildlife
// =========================================================================
export const LESSON_181_CONFIG: LessonConfigA2 = {
  num: 181,
  title: 'Exploring Nature, Landscapes, National Parks & Wildlife',
  icon: '🌲',
  estMin: 25,
  objTitle: 'Defining Relative Clauses (who, which, that, where) in Natural Descriptions',
  objDesc: 'Learn to describe natural landscapes, wildlife reserves, geography, and outdoor habitats using defining relative clauses with "who", "which", "that", and "where".',
  objHi: 'प्राकृतिक परिदृश्यों, वन्यजीव अभयारण्यों और भौगोलिक परिवेश का वर्णन करने के लिए "who", "which", "that" और "where" के साथ Defining Relative Clauses का उपयोग करना सीखें।',
  objEs: 'Describir paisajes naturales, reservas de vida silvestre y hábitats al aire libre usando cláusulas de relativo especificativas con "who", "which", "that" y "where".',
  canDo: [
    'I can describe national parks, geographical features, and outdoor landscapes.',
    'I can use relative pronouns "which/that" for animals and objects, "who" for people, and "where" for places.',
    'I can identify wildlife species and understand park safety guidelines.',
    'I can ask about hiking trails, scenic viewpoints, and guided wildlife tours.'
  ],
  canDoHi: [
    'मैं राष्ट्रीय उद्यानों, भौगोलिक विशेषताओं और प्राकृतिक परिदृश्यों का वर्णन कर सकता हूँ।',
    'मैं जानवरों और वस्तुओं के लिए "which/that", व्यक्तियों के लिए "who", और स्थानों के लिए "where" का सही उपयोग कर सकता हूँ।',
    'मैं वन्यजीवों की पहचान कर सकता हूँ और पार्क सुरक्षा नियमों को समझ सकता हूँ।',
    'मैं लंबी पैदल यात्रा के रास्तों, सुंदर दृश्यों और वन्यजीव दौरों के बारे में पूछ सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir parques nacionales, características geográficas y paisajes naturales.',
    'Puedo usar pronombres relativos "which/that" para animales y objetos, "who" para personas y "where" para lugares.',
    'Puedo identificar especies de vida silvestre y comprender las normas de seguridad del parque.',
    'Puedo preguntar sobre senderos para caminatas, miradores y visitas guiadas de vida silvestre.'
  ],
  vocab: [
    { w: 'valley', p: '/ˈvæli/', m: 'a low area of land between hills or mountains, typically with a river', hi: 'घाटी', es: 'valle', fr: 'vallée', de: 'Tal', pt: 'vale', zh: '山谷', ar: 'وادي', ja: '谷 / 渓谷', ru: 'долина', ex: 'The fertile valley is home to rare plant species.', exHi: 'उपजाऊ घाटी दुर्लभ पौधों की प्रजातियों का घर है।', exEs: 'El fértil valle alberga especies de plantas raras.', ic: '🏞️' },
    { w: 'waterfall', p: '/ˈwɔːtəfɔːl/', m: 'a cascade of water falling from a height', hi: 'झरना / जलप्रपात', es: 'cascada / catarata', fr: 'cascade', de: 'Wasserfall', pt: 'cascata / cachoeira', zh: '瀑布', ar: 'شلال', ja: '滝', ru: 'водопад', ex: 'We reached a magnificent waterfall after a two-hour hike.', exHi: 'दो घंटे की पदयात्रा के बाद हम एक शानदार झरने पर पहुँचे।', exEs: 'Llegamos a una magnífica cascada después de una caminata de dos horas.', ic: '🌊' },
    { w: 'cliff', p: '/klɪf/', m: 'a steep rock face, especially at the edge of the sea or a mountain', hi: 'चट्टान / खड़ी ढलान', es: 'acantilado', fr: 'falaise', de: 'Klippe', pt: 'penhasco / falésia', zh: '悬崖', ar: 'جرف صخري', ja: '崖 / 絶壁', ru: 'утес / скала', ex: 'Sea birds nest along the rocky cliff.', exHi: 'समुद्री पक्षी पथरीली चट्टान के किनारे घोंसला बनाते हैं।', exEs: 'Las aves marinas anidan a lo largo del acantilado rocoso.', ic: '🧗' },
    { w: 'trail', p: '/treɪl/', m: 'a marked path through a forest or wild country', hi: 'पगडंडी / पैदल मार्ग', es: 'sendero / camino', fr: 'sentier / piste', de: 'Wanderweg / Pfad', pt: 'trilha / caminho', zh: '小径 / 步道', ar: 'ممر / مسار', ja: '小道 / トレイル', ru: 'тропа', ex: 'Follow the blue markers along the mountain trail.', exHi: 'पहाड़ी पगडंडी के साथ नीले निशानों का पालन करें।', exEs: 'Siga las marcas azules a lo largo del sendero de montaña.', ic: '🥾' },
    { w: 'wildlife', p: '/ˈwaɪldlaɪf/', m: 'wild animals, birds, and plants living in natural conditions', hi: 'वन्यजीव', es: 'vida silvestre / fauna', fr: 'faune et flore sauvages', de: 'Tierwelt / Wildtiere', pt: 'vida selvagem / fauna', zh: '野生动植物', ar: 'الحياة البرية', ja: '野生動物', ru: 'дикая природа', ex: 'The national park protects endangered wildlife.', exHi: 'राष्ट्रीय उद्यान लुप्तप्राय वन्यजीवों की रक्षा करता है।', exEs: 'El parque nacional protege la vida silvestre en peligro de extinción.', ic: '🦌' },
    { w: 'scenery', p: '/ˈsiːnəri/', m: 'the natural features of a landscape considered in terms of their appearance', hi: 'प्राकृतिक दृश्य / नज़ारा', es: 'paisaje / panorama', fr: 'paysage', de: 'Landschaft / Kulisse', pt: 'paisagem / cenário', zh: '风景 / 景色', ar: 'مناظر طبيعية', ja: '景色 / 風景', ru: 'пейзаж / декорации', ex: 'The coastal scenery along the drive was breathtaking.', exHi: 'ड्राइव के दौरान तटीय दृश्य मनमोहक था।', exEs: 'El paisaje costero a lo largo del trayecto fue impresionante.', ic: '🌄' },
    { w: 'habitat', p: '/ˈhæbɪtæt/', m: 'the natural home or environment of an animal, plant, or organism', hi: 'प्राकृतिक आवास', es: 'hábitat', fr: 'habitat', de: 'Lebensraum', pt: 'hábitat', zh: '栖息地', ar: 'موطن طبيعي', ja: '生息地', ru: 'среда обитания', ex: 'Wetlands provide a crucial habitat for migrating birds.', exHi: 'आर्द्रभूमि प्रवासी पक्षियों के लिए एक महत्वपूर्ण आवास प्रदान करती है।', exEs: 'Los humedales proporcionan un hábitat crucial para las aves migratorias.', ic: '🌿' },
    { w: 'canyon', p: '/ˈkænjən/', m: 'a deep gorge, typically one with a river flowing through it', hi: 'गहरी घाटी / कैनियन', es: 'cañón / garganta', fr: 'canyon / gorge', de: 'Schlucht / Canyon', pt: 'cânion / desfiladeiro', zh: '峡谷', ar: 'أخدود / واد عميق', ja: '峡谷 / キャニオン', ru: 'каньон / ущелье', ex: 'The river carved a dramatic canyon through the limestone.', exHi: 'नदी ने चूना पत्थर के बीच एक नाटकीय गहरी घाटी का निर्माण किया।', exEs: 'El río esculpió un cañón impresionante a través de la piedra caliza.', ic: '🏜️' },
    { w: 'ranger', p: '/ˈreɪndʒər/', m: 'a person whose job is to look after a forest or national park', hi: 'वन रक्षक / रेंजर', es: 'guardaparques / guardabosques', fr: 'garde forestier / ranger', de: 'Ranger / Förster', pt: 'guarda-florestal / guarda-parque', zh: '护林员 / 护园员', ar: 'حارس الحديقة الوطنية', ja: 'パークレンジャー', ru: 'рейнджер / лесник', ex: 'The park ranger gave us a detailed trail map.', exHi: 'पार्क रेंजर ने हमें एक विस्तृत ट्रेल नक्शा दिया।', exEs: 'El guardaparques nos dio un mapa detallado de los senderos.', ic: '👮' },
    { w: 'viewpoint', p: '/ˈvjuːpɔɪnt/', m: 'a place affording a good view of the surrounding landscape', hi: 'दृश्य स्थल / व्यूप्वाइंट', es: 'mirador', fr: 'belvédère / point de vue', de: 'Aussichtspunkt', pt: 'mirante / ponto de observação', zh: '观景点', ar: 'مطل / نقطة مراقبة', ja: '展望台 / ビューポイント', ru: 'смотровая площадка', ex: 'Stop at the summit viewpoint for a 360-degree panorama.', exHi: '360-डिग्री दृश्य के लिए शिखर के दृश्य स्थल पर रुकें।', exEs: 'Deténgase en el mirador de la cumbre para disfrutar de un panorama de 360 grados.', ic: '🔭' },
    { w: 'glacier', p: '/ˈɡlæsiər/', m: 'a slowly moving mass or river of ice formed by snow accumulation', hi: 'हिमनद / ग्लेशियर', es: 'glaciar', fr: 'glacier', de: 'Gletscher', pt: 'geleira / glaciar', zh: '冰川', ar: 'نهر جليدي', ja: '氷河', ru: 'ледник', ex: 'The ancient glacier feeds the cold mountain streams.', exHi: 'प्राचीन हिमनद ठंडी पहाड़ी धाराओं को पानी देता है।', exEs: 'El antiguo glaciar alimenta los fríos arroyos de montaña.', ic: '🧊' },
    { w: 'creature', p: '/ˈkriːtʃər/', m: 'an animal, as distinct from a human being', hi: 'जीव / प्राणी', es: 'criatura / animal', fr: 'créature', de: 'Kreatur / Lebewesen', pt: 'criatura / ser vivo', zh: '生物 / 动物', ar: 'مخلوق / كائن حي', ja: '生き物 / クリーチャー', ru: 'существо / животное', ex: 'The nocturnal creature hunts only after sunset.', exHi: 'निशाचर जीव केवल सूर्यास्त के बाद ही शिकार करता है।', exEs: 'La criatura nocturna caza solo después de la puesta del sol.', ic: '🦉' },
    { w: 'lush', p: '/lʌʃ/', m: 'growing luxuriantly, full of healthy green vegetation', hi: 'हरा-भरा / सघन', es: 'exuberante / verde', fr: 'luxuriant / verdoyant', de: 'üppig / saftig grün', pt: 'exuberante / verdejante', zh: '郁郁葱葱的 / 茂盛的', ar: 'يانع / مورق', ja: '青々とした / 豊かな', ru: 'пышный / буйный', ex: 'The tropical island features lush rainforests.', exHi: 'उष्णकटिबंधीय द्वीप में हरे-भरे वर्षावन हैं।', exEs: 'La isla tropical cuenta con exuberantes selvas tropicales.', ic: '🌴' },
    { w: 'species', p: '/ˈspiːʃiːz/', m: 'a group of living organisms consisting of similar individuals', hi: 'प्रजाति / जीव प्रकार', es: 'especie', fr: 'espèce', de: 'Art / Spezies', pt: 'espécie', zh: '物种', ar: 'نوع / فصيلة', ja: '種 / スピーシーズ', ru: 'вид / разновидность', ex: 'Scientists discovered a new species of frog in the wetlands.', exHi: 'वैज्ञानिकों ने आर्द्रभूमि में मेंढक की एक नई प्रजाति की खोज की।', exEs: 'Los científicos descubrieron una nueva especie de rana en los humedales.', ic: '🐸' },
    { w: 'conservation', p: '/ˌkɒnsəˈveɪʃn/', m: 'the protection of plants and animals and natural areas', hi: 'संरक्षण / पर्यावरण रक्षा', es: 'conservación / preservación', fr: 'conservation', de: 'Naturschutz / Erhaltung', pt: 'conservação', zh: '自然保护 / 保育', ar: 'حماية البيئة / الحفاظ', ja: '自然保護 / 保全', ru: 'охрана природы / сохранение', ex: 'The conservation project aims to restore natural wetlands.', exHi: 'संरक्षण परियोजना का उद्देश्य प्राकृतिक आर्द्रभूमि को पुनर्स्थापित करना है।', exEs: 'El proyecto de conservación tiene como objetivo restaurar los humedales naturales.', ic: '🌱' },
    { w: 'peak', p: '/piːk/', m: 'the pointed top of a mountain', hi: 'शिखर / चोटी', es: 'pico / cumbre', fr: 'sommet / pic', de: 'Gipfel / Bergspitze', pt: 'pico / cume', zh: '山顶 / 顶峰', ar: 'قمة جبلية', ja: '山頂 / ピーク', ru: 'вершина / пик', ex: 'Snow covers the highest peak throughout the year.', exHi: 'साल भर सबसे ऊंची चोटी बर्फ से ढकी रहती है।', exEs: 'La nieve cubre el pico más alto durante todo el año.', ic: '⛰️' },
    { w: 'marsh', p: '/mɑːʃ/', m: 'an area of low-lying land which is flooded in wet seasons', hi: 'दलदल / कच्छ भूमि', es: 'pantano / marisma', fr: 'marais', de: 'Sumpf / Moor', pt: 'pântano / brejo', zh: '沼泽 / 湿地', ar: 'مستنقع', ja: '湿地 / 沼地', ru: 'болото / топь', ex: 'Herons and ducks thrive in the freshwater marsh.', exHi: 'बगुले और बत्तख मीठे पानी के दलदल में पनपते हैं।', exEs: 'Las garzas y los patos prosperan en el pantano de agua dulce.', ic: '🦆' },
    { w: 'ecosystem', p: '/ˈiːkəʊsɪstəm/', m: 'a biological community of interacting organisms and their physical environment', hi: 'पारिस्थितिकी तंत्र / इकोसिस्टम', es: 'ecosistema', fr: 'écosystème', de: 'Ökosystem', pt: 'ecossistema', zh: '生态系统', ar: 'نظام بيئي', ja: '生態系 / エコシステム', ru: 'экосистема', ex: 'Pollution poses a severe threat to the marine ecosystem.', exHi: 'प्रदूषण समुद्री पारिस्थितिकी तंत्र के लिए गंभीर खतरा पैदा करता है।', exEs: 'La contaminación representa una grave amenaza para el ecosistema marino.', ic: '🌍' },
    { w: 'breathtaking', p: '/ˈbreθteɪkɪŋ/', m: 'astonishing or awe-inspiring in quality', hi: 'अत्यंत मनमोहक / सांसें थाम देने वाला', es: 'impresionante / sobrecogedor', fr: 'à couper le souffle', de: 'atemberaubend', pt: 'de tirar o fôlego', zh: '叹为观止的 / 极其壮丽的', ar: 'يخطف الأنفاس', ja: '息をのむような', ru: 'захватывающий дух', ex: 'The sunset over the canyon was truly breathtaking.', exHi: 'घाटी पर सूर्यास्त वास्तव में मनमोहक था।', exEs: 'La puesta de sol sobre el cañón fue verdaderamente impresionante.', ic: '✨' },
    { w: 'preserve', p: '/prɪˈzɜːv/', m: 'maintain something in its original or existing state', hi: 'सुरक्षित रखना / संरक्षित करना', es: 'preservar / conservar', fr: 'préserver', de: 'bewahren / erhalten', pt: 'preservar', zh: '保存 / 保护', ar: 'يحافظ على / يصون', ja: '保存する / 守る', ru: 'сохранять / оберегать', ex: 'Visitors must take their trash to preserve the wilderness.', exHi: 'जंगल को संरक्षित रखने के लिए आगंतुकों को अपना कचरा वापस ले जाना चाहिए।', exEs: 'Los visitantes deben llevarse su basura para preservar la naturaleza.', ic: '🛡️' }
  ],
  chunks: [
    { phrase: 'take a scenic route', meaning: 'travel along a path with beautiful landscape views', hi: 'सुंदर नज़ारों वाले रास्ते से जाना', es: 'tomar una ruta panorámica', fr: 'prendre une route panoramique', de: 'eine malerische Route wählen', pt: 'fazer uma rota cênica', zh: '走风景优美的路线', ar: 'سلك طريق ذو مناظر خلابة', ja: '景色の良いルートを通る', ru: 'выбрать живописный маршрут', note: 'Common travel phrase: "Let\'s take a scenic route through the valley."', ic: '🚗' },
    { phrase: 'home to a variety of', meaning: 'providing a natural habitat for many kinds of animals or plants', hi: 'विभिन्न प्रकार के जीवों का घर होना', es: 'hogar de una variedad de', fr: 'abritant une variété de', de: 'Heimat einer Vielzahl von', pt: 'lar de uma variedade de', zh: '栖息着多种多样的...', ar: 'موطن لمجموعة متنوعة من', ja: '多様な〜の生息地である', ru: 'дом для множества видов', note: 'Ecological description: "This forest is home to a variety of birds."', ic: '🦜' },
    { phrase: 'keep a safe distance', meaning: 'stay far enough away to avoid danger or disturbance', hi: 'सुरक्षित दूरी बनाए रखना', es: 'mantener una distancia prudente', fr: 'garder une distance de sécurité', de: 'einen Sicherheitsabstand einhalten', pt: 'manter uma distância segura', zh: '保持安全距离', ar: 'الحفاظ على مسافة آمنة', ja: '安全な距離を保つ', ru: 'держаться на безопасном расстоянии', note: 'Park safety rule: "Please keep a safe distance from wild bears."', ic: '⚠️' },
    { phrase: 'off the beaten track', meaning: 'away from where most people or tourists go', hi: 'भीड़भाड़ से दूर / अनजान रास्ते पर', es: 'fuera de los caminos trillados / apartado', fr: 'hors des sentiers battus', de: 'abseits der ausgetretenen Pfade', pt: 'fora do circuito turístico', zh: '人迹罕至的地方', ar: 'بعيداً عن الأماكن المألوفة', ja: '定番から外れた穴場の', ru: 'вдали от проторенных дорог', note: 'Idiomatic: "We found a quiet waterfall off the beaten track."', ic: '🗺️' },
    { phrase: 'in the heart of nature', meaning: 'deeply surrounded by natural, untouched environment', hi: 'प्रकृति की गोद में', es: 'en el corazón de la naturaleza', fr: 'au cœur de la nature', de: 'im Herzen der Natur', pt: 'no coração da natureza', zh: '在自然的怀抱中', ar: 'في قلب الطبيعة', ja: '大自然の真ん中で', ru: 'в самом сердце природы', note: 'Descriptive chunk: "A wooden cabin in the heart of nature."', ic: '🌲' },
    { phrase: 'look out over', meaning: 'have a clear view of something from a high vantage point', hi: 'ऊंचाई से देखना / नज़ारा होना', es: 'tener vista hacia / dominar el paisaje', fr: 'donner sur / surplomber', de: 'überblicken', pt: 'ter vista para / dominar', zh: '俯瞰 / 眺望', ar: 'يطل على', ja: '見渡す / 眺望がある', ru: 'открывать вид на', note: 'Spatial description: "The terrace looks out over the lake."', ic: '🔭' },
    { phrase: 'catch a glimpse of', meaning: 'see something briefly or partially', hi: 'एक झलक देखना / दिखाई देना', es: 'vislumbrar / ver fugazmente', fr: 'apercevoir brièvement', de: 'einen Blick erhaschen auf', pt: 'vislumbrar / ver de relance', zh: '瞥见 / 捕捉到身影', ar: 'لمح / رأى خاطفاً', ja: '一目見かける', ru: 'мельком увидеть', note: 'Wildlife encounter: "We caught a glimpse of an eagle soaring."', ic: '👁️' },
    { phrase: 'leave no trace', meaning: 'minimize environmental impact by taking all waste away', hi: 'प्रकृति में कोई निशान या कचरा न छोड़ना', es: 'no dejar rastro', fr: 'ne laisser aucune trace', de: 'keine Spuren hinterlassen', pt: 'não deixar rastros', zh: '不留痕迹 / 零废弃旅游', ar: 'عدم ترك أي أثر', ja: '痕跡を残さない (リーブノートレース)', ru: 'не оставлять следов', note: 'Outdoor ethics rule: "Always follow the leave no trace principle."', ic: '🍃' }
  ],
  grammar: {
    title: 'Defining Relative Clauses with who, which, that & where',
    concept: 'Using relative clauses to identify or provide essential details about people, things, and places.',
    patterns: [
      {
        title: 'Relative Pronouns for Things (which/that), People (who/that), and Places (where)',
        structure: 'Noun + who/that (person) / which/that (thing/animal) / where (place) + clause',
        rule: 'Use "who" for people, "which" or "that" for animals, plants, and objects, and "where" for geographic locations.',
        examples: [
          { en: 'This is the ranger who guided our nature walk.', hi: 'यह वही रेंजर है जिसने हमारे प्रकृति भ्रमण का मार्गदर्शन किया था।', es: 'Este es el guardaparques que guió nuestra caminata por la naturaleza.' },
          { en: 'We visited a national park where rare wolves live.', hi: 'हमने एक ऐसे राष्ट्रीय उद्यान का दौरा किया जहाँ दुर्लभ भेड़िये रहते हैं।', es: 'Visitamos un parque nacional donde viven lobos raros.' },
          { en: 'The trail that leads to the summit is quite steep.', hi: 'जो पगडंडी शिखर की ओर जाती है वह काफी खड़ी है।', es: 'El sendero que lleva a la cumbre es bastante empinado.' }
        ]
      },
      {
        title: 'Omitting the Relative Pronoun as Object',
        structure: 'Noun + (which/that/who) + Subject + Verb',
        rule: 'When the relative pronoun is the object of the verb in the relative clause, it can be omitted in spoken English.',
        examples: [
          { en: 'The waterfall (that) we photographed was 50 meters high.', hi: 'जिस झरने की हमने तस्वीर ली थी वह 50 मीटर ऊंचा था।', es: 'La cascada que fotografiamos tenía 50 metros de altura.' },
          { en: 'The guide (who) we met yesterday gave us great tips.', hi: 'जिस गाइड से हम कल मिले थे उसने हमें बेहतरीन सुझाव दिए।', es: 'El guía que conocimos ayer nos dio excelentes consejos.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'This is the national park which we saw bears there.', cor: 'This is the national park where we saw bears.', exp: 'Do not use "which" with "there" for places. Use "where" (or "which we visited").', hi: 'स्थानों के लिए "where" का प्रयोग करें, "which" और "there" को एक साथ न जोड़ें।', es: 'Usa "where" para lugares, no "which" combinado con "there".' },
    { inc: 'The bird who has blue wings is very rare.', cor: 'The bird that has blue wings is very rare.', exp: 'Use "which" or "that" for animals and birds, not "who" (unless referring to a domestic pet with a personified name).', hi: 'पक्षियों और जानवरों के लिए "which" या "that" का प्रयोग करें, "who" का नहीं।', es: 'Usa "which" o "that" para animales y aves, no "who".' },
    { inc: 'The mountain where is very high has snow.', cor: 'The mountain which is very high has snow.', exp: '"Where" requires a subject and verb in the relative clause (e.g. "where climbers camp"). When describing the subject itself, use "which" or "that".', hi: 'जब वस्तु या पहाड़ का स्वयं वर्णन हो तो "which/that" का प्रयोग करें, "where" का नहीं।', es: '"Where" necesita sujeto y verbo en la cláusula. Si describes la montaña en sí, usa "which" o "that".' },
    { inc: 'We went to a valley that it was completely green.', cor: 'We went to a valley that was completely green.', exp: 'Do not repeat the subject pronoun ("it") after the relative pronoun ("that").', hi: '"that" के बाद दोबारा सर्वनाम "it" न लगाएं।', es: 'No repitas el pronombre sujeto ("it") después del pronombre relativo ("that").' },
    { inc: 'The ranger which showed us the trail was kind.', cor: 'The ranger who showed us the trail was kind.', exp: 'Use "who" (or "that") for human beings like rangers and guides, not "which".', hi: 'इंसानों जैसे रेंजर और गाइड के लिए "who" का प्रयोग करें, "which" का नहीं।', es: 'Usa "who" para personas como guardabosques o guías, no "which".' }
  ],
  dialogues: [
    {
      title: 'Planning a Hike at the Park Visitor Center',
      context: 'Hannah (Hiker) asks David (Park Ranger) for trail recommendations and wildlife safety tips.',
      charA: { name: 'Hannah', av: '🧗‍♀️', role: 'Hiker' },
      charB: { name: 'David', av: '👮‍♂️', role: 'Park Ranger' },
      turns: [
        { spk: 'Hannah', text: 'Hello! Can you recommend a hiking trail that leads to a scenic viewpoint?', hi: 'नमस्ते! क्या आप किसी ऐसे हाइकिंग ट्रेल की सिफारिश कर सकते हैं जो सुंदर व्यूप्वाइंट की ओर जाता हो?', es: '¡Hola! ¿Puede recomendar un sendero para caminatas que lleve a un mirador panorámico?' },
        { spk: 'David', text: 'Certainly. We have the Ridge Trail, which offers breathtaking views of the entire valley.', hi: 'ज़रूर। हमारे पास रिज ट्रेल है, जो पूरी घाटी का मनमोहक दृश्य प्रस्तुत करता है।', es: 'Por supuesto. Tenemos el Sendero de la Cresta, que ofrece vistas impresionantes de todo el valle.' },
        { spk: 'Hannah', text: 'Is that the trail where hikers spotted elk yesterday?', hi: 'क्या यह वही रास्ता है जहाँ हाइकर्स ने कल बारहसिंगे देखे थे?', es: '¿Es ese el sendero donde los senderistas vieron alces ayer?' },
        { spk: 'David', text: 'Yes, exactly. If you see wildlife, remember to keep a safe distance and leave no trace.', hi: 'हाँ, बिल्कुल। यदि आपको वन्यजीव दिखाई दें, तो सुरक्षित दूरी बनाए रखें और कोई कचरा न छोड़ें।', es: 'Sí, exactamente. Si ve vida silvestre, recuerde mantener una distancia prudente y no dejar rastro.' },
        { spk: 'Hannah', text: 'Understood. How long does it usually take to reach the waterfall on that route?', hi: 'समझ गई। उस रास्ते से झरने तक पहुँचने में आमतौर पर कितना समय लगता है?', es: 'Entendido. ¿Cuánto tiempo se tarda normalmente en llegar a la cascada por esa ruta?' },
        { spk: 'David', text: 'About two hours at a moderate pace. Take plenty of water with you!', hi: 'मध्यम गति से लगभग दो घंटे। अपने साथ भरपूर पानी ले जाएँ!', es: 'Aproximadamente dos horas a paso moderado. ¡Lleve abundante agua!' }
      ]
    },
    {
      title: 'Discussing a Wildlife Safari Experience',
      context: 'Lucas and Sofia share their experiences observing animals in a protected wetland reserve.',
      charA: { name: 'Lucas', av: '👨‍🌾', role: 'Nature Photographer' },
      charB: { name: 'Sofia', av: '👩‍🔬', role: 'Biologist' },
      turns: [
        { spk: 'Lucas', text: 'Sofia, did you catch a glimpse of the rare kingfisher that nests by the marsh?', hi: 'सोफिया, क्या आपने उस दुर्लभ नीलकंठ की झलक देखी जो दलदल के पास घोंसला बनाता है?', es: 'Sofía, ¿vislumbraste al raro martín pescador que anida cerca del pantano?' },
        { spk: 'Sofia', text: 'Yes! I took a photograph of the tree where the birds were feeding their chicks.', hi: 'हाँ! मैंने उस पेड़ की तस्वीर ली जहाँ पक्षी अपने चूजों को खाना खिला रहे थे।', es: '¡Sí! Tomé una fotografía del árbol donde las aves estaban alimentando a sus polluelos.' },
        { spk: 'Lucas', text: 'This reserve protects an ecosystem that is essential for migrating species.', hi: 'यह रिज़र्व एक ऐसे पारिस्थितिकी तंत्र की रक्षा करता है जो प्रवासी प्रजातियों के लिए आवश्यक है।', es: 'Esta reserva protege un ecosistema que es esencial para las especies migratorias.' },
        { spk: 'Sofia', text: 'Indeed. The conservation team who works here does an outstanding job.', hi: 'वास्तव में। यहाँ काम करने वाली संरक्षण टीम उत्कृष्ट कार्य करती है।', es: 'Efectivamente. El equipo de conservación que trabaja aquí hace un trabajo sobresaliente.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_181_p1',
      type: 'multiple_choice',
      prompt: 'Choose the correct relative pronoun to describe a location:',
      text: 'This is the quiet valley [blank] we camped last summer.',
      options: [
        { id: '1', text: 'where', isCorrect: true },
        { id: '2', text: 'who', isCorrect: false },
        { id: '3', text: 'which', isCorrect: false },
        { id: '4', text: 'whom', isCorrect: false }
      ],
      correctAnswer: 'where',
      explanation: 'Use "where" to refer to a geographic place where an event happened.'
    },
    {
      id: 'ex_181_p2',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct relative pronoun:',
      text: 'The ranger [blank] explained the park rules was very knowledgeable.',
      options: [
        { id: '1', text: 'who', isCorrect: true },
        { id: '2', text: 'which', isCorrect: false },
        { id: '3', text: 'where', isCorrect: false },
        { id: '4', text: 'what', isCorrect: false }
      ],
      correctAnswer: 'who',
      explanation: 'Use "who" (or "that") for persons like a park ranger.'
    },
    {
      id: 'ex_181_p3',
      type: 'word_ordering',
      prompt: 'Arrange the words to form a correct sentence with a relative clause:',
      tokens: ['We', 'visited', 'a', 'wetland', 'that', 'protects', 'rare', 'birds', '.'],
      correctOrder: ['We', 'visited', 'a', 'wetland', 'that', 'protects', 'rare', 'birds', '.'],
      explanation: '"that protects rare birds" is a defining relative clause modifying "a wetland".'
    },
    {
      id: 'ex_181_p4',
      type: 'error_correction',
      prompt: 'Correct the error in this nature description:',
      errorSentence: 'The mountain where is covered in snow is dangerous to climb.',
      correctSentence: 'The mountain that is covered in snow is dangerous to climb.',
      explanation: 'Use "that" or "which" (not "where") as the subject pronoun referring to "the mountain".'
    },
    {
      id: 'ex_181_p5',
      type: 'translation',
      prompt: 'Translate to English: "यह वह पगडंडी है जो झरने की ओर जाती है।"',
      targetSentence: 'This is the trail that leads to the waterfall.',
      explanation: 'Use "that leads to" or "which leads to" for the path.'
    },
    {
      id: 'ex_181_p6',
      type: 'multiple_choice',
      prompt: 'What does "off the beaten track" mean in travel context?',
      options: [
        { id: '1', text: 'In an isolated or less visited place', isCorrect: true },
        { id: '2', text: 'Right next to a busy highway', isCorrect: false },
        { id: '3', text: 'On a damaged train railway', isCorrect: false },
        { id: '4', text: 'Inside a large shopping mall', isCorrect: false }
      ],
      correctAnswer: 'In an isolated or less visited place',
      explanation: '"Off the beaten track" refers to secluded places away from standard tourist routes.'
    },
    {
      id: 'ex_181_p7',
      type: 'fill_blank',
      prompt: 'Select the correct phrase to complete the park rule:',
      text: 'Always remember to [blank] so the natural wilderness remains clean.',
      options: [
        { id: '1', text: 'leave no trace', isCorrect: true },
        { id: '2', text: 'feed wild animals', isCorrect: false },
        { id: '3', text: 'take loud speakers', isCorrect: false },
        { id: '4', text: 'cut down green trees', isCorrect: false }
      ],
      correctAnswer: 'leave no trace',
      explanation: '"Leave no trace" is the outdoor conservation principle of leaving natural areas clean.'
    },
    {
      id: 'ex_181_p8',
      type: 'speaking',
      prompt: 'Speak this sentence clearly into your microphone:',
      targetSentence: 'The national park protects an ancient forest where endangered animals live.',
      audioText: 'The national park protects an ancient forest where endangered animals live.',
      explanation: 'Practice natural linking and pronunciation of "endangered" and "ancient".'
    },
    {
      id: 'ex_181_p9',
      type: 'listening',
      prompt: 'Listen to the ranger and identify what hikers should do:',
      audioText: 'When exploring the valley trail, please keep a safe distance from all wild animals.',
      options: [
        { id: '1', text: 'Maintain a safe distance from wildlife.', isCorrect: true },
        { id: '2', text: 'Feed the animals snacks.', isCorrect: false },
        { id: '3', text: 'Run as fast as possible towards the bears.', isCorrect: false },
        { id: '4', text: 'Camp in the middle of the river.', isCorrect: false }
      ],
      correctAnswer: 'Maintain a safe distance from wildlife.',
      explanation: 'The audio advises hikers to keep a safe distance from wild animals.'
    }
  ],
  review: [
    {
      id: 'ex_181_r1',
      type: 'multiple_choice',
      prompt: 'Which relative pronoun correctly replaces the blank?',
      text: 'I met a wildlife photographer [blank] has published three nature books.',
      options: [
        { id: '1', text: 'who', isCorrect: true },
        { id: '2', text: 'which', isCorrect: false },
        { id: '3', text: 'where', isCorrect: false },
        { id: '4', text: 'when', isCorrect: false }
      ],
      correctAnswer: 'who',
      explanation: '"Photographer" is a person, requiring the pronoun "who".'
    },
    {
      id: 'ex_181_r2',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the appropriate word:',
      text: 'The view from the mountain [blank] was completely breathtaking.',
      options: [
        { id: '1', text: 'viewpoint', isCorrect: true },
        { id: '2', text: 'traffic', isCorrect: false },
        { id: '3', text: 'schedule', isCorrect: false },
        { id: '4', text: 'invoice', isCorrect: false }
      ],
      correctAnswer: 'viewpoint',
      explanation: '"Viewpoint" means a scenic vantage point overlooking a landscape.'
    },
    {
      id: 'ex_181_r3',
      type: 'word_ordering',
      prompt: 'Assemble the sentence correctly:',
      tokens: ['This', 'canyon', 'is', 'home', 'to', 'a', 'variety', 'of', 'birds', '.'],
      correctOrder: ['This', 'canyon', 'is', 'home', 'to', 'a', 'variety', 'of', 'birds', '.'],
      explanation: '"home to a variety of birds" is a standard nature description phrase.'
    },
    {
      id: 'ex_181_r4',
      type: 'translation',
      prompt: 'Translate to English: "हमने एक लुभावने झरने के पास सुरक्षित दूरी बनाए रखी।"',
      targetSentence: 'We kept a safe distance near the breathtaking waterfall.',
      explanation: '"kept a safe distance" is the past form of the safety chunk.'
    }
  ],
  assessment: [
    {
      id: 'ex_181_a1',
      type: 'multiple_choice',
      prompt: 'Identify the sentence that uses the relative clause correctly:',
      options: [
        { id: '1', text: 'The ecosystem which we studied contains rare plants.', isCorrect: true },
        { id: '2', text: 'The ecosystem who we studied contains rare plants.', isCorrect: false },
        { id: '3', text: 'The ecosystem where we studied it contains rare plants.', isCorrect: false },
        { id: '4', text: 'The ecosystem what we studied contains rare plants.', isCorrect: false }
      ],
      correctAnswer: 'The ecosystem which we studied contains rare plants.',
      explanation: '"Which" correctly modifies the non-human noun "ecosystem".'
    },
    {
      id: 'ex_181_a2',
      type: 'fill_blank',
      prompt: 'Select the correct pronoun:',
      text: 'The biologist [blank] discovered the new frog species gave a lecture.',
      options: [
        { id: '1', text: 'who', isCorrect: true },
        { id: '2', text: 'which', isCorrect: false },
        { id: '3', text: 'where', isCorrect: false },
        { id: '4', text: 'whose', isCorrect: false }
      ],
      correctAnswer: 'who',
      explanation: '"Biologist" refers to a human subject, requiring "who".'
    },
    {
      id: 'ex_181_a3',
      type: 'error_correction',
      prompt: 'Find and fix the error in the sentence:',
      errorSentence: 'We visited the cliff who eagles build their nests.',
      correctSentence: 'We visited the cliff where eagles build their nests.',
      explanation: '"Cliff" is a physical location where eagles build nests, so "where" is required.'
    },
    {
      id: 'ex_181_a4',
      type: 'translation',
      prompt: 'Translate to English: "प्रकृति की गोद में एक लकड़ी का केबिन स्थित है।"',
      targetSentence: 'A wooden cabin is located in the heart of nature.',
      explanation: '"in the heart of nature" translates "प्रकृति की गोद में".'
    }
  ]
};

// =========================================================================
// LESSON 182: Weather Extremes, Seasonal Activities & Outdoor Adventures
// =========================================================================
export const LESSON_182_CONFIG: LessonConfigA2 = {
  num: 182,
  title: 'Weather Extremes, Seasonal Activities & Outdoor Adventures',
  icon: '⛅',
  estMin: 25,
  objTitle: 'Zero & First Conditionals with "if", "when", and "unless" for Weather Contingencies',
  objDesc: 'Master discussing extreme weather phenomena, seasonal sports, outdoor equipment, and safety precautions using Zero and First Conditionals with "if", "when", and "unless".',
  objHi: 'मौसम की चरम स्थितियों, मौसमी खेलों और बाहरी सुरक्षा उपायों पर चर्चा करने के लिए "if", "when" और "unless" के साथ Zero और First Conditionals का उपयोग करना सीखें।',
  objEs: 'Hablar sobre climas extremos, deportes estacionales, equipamiento al aire libre y precauciones usando el condicional cero y primero con "if", "when" y "unless".',
  canDo: [
    'I can describe weather conditions, seasonal changes, and severe storms.',
    'I can use the First Conditional to make plans based on weather forecasts.',
    'I can use "unless" to express conditions for outdoor activities.',
    'I can recommend appropriate gear and safety precautions for extreme climates.'
  ],
  canDoHi: [
    'मैं मौसम की स्थिति, मौसमी बदलावों और गंभीर तूफानों का वर्णन कर सकता हूँ।',
    'मैं मौसम के पूर्वानुमान के आधार पर योजनाएं बनाने के लिए First Conditional का उपयोग कर सकता हूँ।',
    'मैं बाहरी गतिविधियों के लिए शर्तों को व्यक्त करने हेतु "unless" का उपयोग कर सकता हूँ।',
    'मैं चरम मौसम के लिए उपयुक्त उपकरण और सुरक्षा सावधानियों की सिफारिश कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir condiciones climáticas, cambios estacionales y tormentas severas.',
    'Puedo usar el primer condicional para hacer planes basados en pronósticos del tiempo.',
    'Puedo usar "unless" para expresar condiciones en actividades al aire libre.',
    'Puedo recomendar equipo adecuado y precauciones de seguridad para climas extremos.'
  ],
  vocab: [
    { w: 'forecast', p: '/ˈfɔːkɑːst/', m: 'a prediction of future weather conditions', hi: 'मौसम का पूर्वानुमान', es: 'pronóstico / previsión meteorológica', fr: 'prévisions météo', de: 'Wettervorhersage', pt: 'previsão do tempo', zh: '天气预报', ar: 'توقعات الطقस', ja: '天気予報', ru: 'прогноз погоды', ex: 'The seven-day forecast predicts heavy snowfall.', exHi: 'सात दिनों का पूर्वानुमान भारी बर्फबारी की भविष्यवाणी करता है।', exEs: 'El pronóstico de siete días predice fuertes nevadas.', ic: '📺' },
    { w: 'blizzard', p: '/ˈblɪzəd/', m: 'a severe snowstorm with high winds and low visibility', hi: 'बर्फ़ीला तूफान', es: 'ventisca / tormenta de nieve', fr: 'blizzard / tempête de neige', de: 'Schneesturm', pt: 'nevasca / tempestade de neve', zh: '暴风雪', ar: 'عاصفة ثلجية', ja: '猛吹雪 / ブリザード', ru: 'метель / пурга', ex: 'The mountain pass was closed due to a sudden blizzard.', exHi: 'अचानक आए बर्फ़ीले तूफान के कारण पहाड़ी दर्रा बंद कर दिया गया था।', exEs: 'El paso de montaña se cerró debido a una repentina tormenta de nieve.', ic: '❄️' },
    { w: 'humidity', p: '/hjuːˈmɪdəti/', m: 'the state or quality of being humid; atmospheric moisture', hi: 'नमी / उमस', es: 'humedad', fr: 'humidité', de: 'Luftfeuchtigkeit', pt: 'umidade', zh: '湿度 / 潮湿', ar: 'رطوبة', ja: '湿度', ru: 'влажность', ex: 'High humidity makes the summer afternoon feel much hotter.', exHi: 'अधिक नमी के कारण गर्मी की दोपहर और भी गर्म महसूस होती है।', exEs: 'La alta humedad hace que la tarde de verano se sienta mucho más calurosa.', ic: '💧' },
    { w: 'thunderstorm', p: '/ˈθʌndəstɔːm/', m: 'a storm with thunder and lightning and typically also heavy rain', hi: 'गरज के साथ तूफान', es: 'tormenta eléctrica', fr: 'orage', de: 'Gewitter', pt: 'tempestade / trovoada', zh: '雷暴', ar: 'عاصفة رعدية', ja: '雷雨 / 激しい嵐', ru: 'гроза', ex: 'Take shelter indoors if a thunderstorm develops.', exHi: 'यदि आंधी-तूफान आता है तो घर के अंदर शरण लें।', exEs: 'Refúgiese bajo techo si se desata una tormenta eléctrica.', ic: '⚡' },
    { w: 'drizzle', p: '/ˈdrɪzl/', m: 'light rain falling in very fine drops', hi: 'बूंदाबांदी', es: 'llovizna / chispeo', fr: 'bruine / crachin', de: 'Nieselregen', pt: 'garoa / chuvisco', zh: '毛毛雨 / 细雨', ar: 'رذاذ', ja: '霧雨 / 小雨', ru: 'моросящий дождь', ex: 'A steady drizzle fell throughout the morning.', exHi: 'सुबह भर लगातार बूंदाबांदी होती रही।', exEs: 'Una llovizna constante cayó durante toda la mañana.', ic: '🌧️' },
    { w: 'heatwave', p: '/ˈhiːtweɪv/', m: 'a prolonged period of abnormally hot weather', hi: 'लू / अत्यधिक गर्मी का दौर', es: 'ola de calor', fr: 'vague de chaleur / canicule', de: 'Hitzewelle', pt: 'onda de calor', zh: '热浪', ar: 'موجة حر', ja: '熱波 / 猛暑', ru: 'аномальная жара / зной', ex: 'Stay hydrated during the summer heatwave.', exHi: 'गर्मी की लू के दौरान शरीर में पानी की कमी न होने दें।', exEs: 'Manténgase hidratado durante la ola de calor del verano.', ic: '☀️' },
    { w: 'equipment', p: '/ɪˈkwɪpmənt/', m: 'the necessary items for a particular purpose or activity', hi: 'उपकरण / सामग्री', es: 'equipo / material', fr: 'équipement / matériel', de: 'Ausrüstung', pt: 'equipamento', zh: '装备 / 器材', ar: 'معدات', ja: '装備 / 用具', ru: 'снаряжение / оборудование', ex: 'Quality hiking boots are essential equipment for rocky trails.', exHi: 'पथरीले रास्तों के लिए अच्छी गुणवत्ता वाले हाइकिंग जूते आवश्यक उपकरण हैं।', exEs: 'Las botas de senderismo de calidad son un equipo esencial para senderos rocosos.', ic: '🎒' },
    { w: 'waterproof', p: '/ˈwɔːtəpruːf/', m: 'impervious to water; not allowing water to pass through', hi: 'जलरोधी / वॉटरप्रूफ', es: 'impermeable', fr: 'imperméable', de: 'wasserdicht', pt: 'impermeável', zh: '防水的', ar: 'مقاوم للماء', ja: '防水の', ru: 'водонепроницаемый', ex: 'Bring a waterproof jacket in case it rains.', exHi: 'बारिश होने की स्थिति में वॉटरप्रूफ जैकेट साथ रखें।', exEs: 'Lleve una chaqueta impermeable por si llueve.', ic: '🧥' },
    { w: 'shelter', p: '/ˈʃeltər/', m: 'a place giving temporary protection from bad weather or danger', hi: 'आश्रय / शरण स्थल', es: 'refugio / resguardo', fr: 'abri / refuge', de: 'Schutzhütte / Zuflucht', pt: 'abrigo / refúgio', zh: '避难所 / 遮蔽处', ar: 'مأوى / ملجأ', ja: '避難所 / シェルター', ru: 'убежище / укрытие', ex: 'The hikers found shelter in a wooden mountain hut.', exHi: 'हाइकर्स को एक लकड़ी की पहाड़ी झोपड़ी में आश्रय मिला।', exEs: 'Los senderistas encontraron refugio en una cabaña de madera en la montaña.', ic: '⛺' },
    { w: 'visibility', p: '/ˌvɪzəˈbɪləti/', m: 'the state of being able to see or be seen in certain weather', hi: 'दृश्यता', es: 'visibilidad', fr: 'visibilité', de: 'Sicht / Sichtweite', pt: 'visibilidade', zh: '能见度', ar: 'مدى الرؤية', ja: '視界 / 視程', ru: 'видимость', ex: 'Thick fog reduced visibility to less than fifty meters.', exHi: 'घने कोहरे ने दृश्यता को पचास मीटर से भी कम कर दिया।', exEs: 'La densa niebla redujo la visibilidad a menos de cincuenta metros.', ic: '🌫️' },
    { w: 'temperature', p: '/ˈtemprətʃər/', m: 'the degree or intensity of heat present in a substance or object', hi: 'तापमान', es: 'temperatura', fr: 'température', de: 'Temperatur', pt: 'temperatura', zh: '温度', ar: 'درجة الحرارة', ja: '気温 / 温度', ru: 'температура', ex: 'The temperature dropped below freezing overnight.', exHi: 'रात भर में तापमान शून्य से नीचे गिर गया।', exEs: 'La temperatura cayó por debajo del punto de congelación durante la noche.', ic: '🌡️' },
    { w: 'gust', p: '/ɡʌst/', m: 'a brief, strong rush of wind', hi: 'हवा का झोंका', es: 'ráfaga / golpe de viento', fr: 'rafale / coup de vent', de: 'Windböe', pt: 'rajada de vento', zh: '阵风', ar: 'عصفة ريح', ja: '突風', ru: 'порыв ветра', ex: 'A sudden gust blew my sun hat into the lake.', exHi: 'हवा के एक अचानक झोंके ने मेरी धूप की टोपी झील में उड़ा दी।', exEs: 'Una repentina ráfaga de viento hizo volar mi sombrero al lago.', ic: '💨' },
    { w: 'frost', p: '/frɒst/', m: 'a deposit of small white ice crystals formed on the ground', hi: 'पाला / पाला जमना', es: 'escarcha / helada', fr: 'gelée / givre', de: 'Frost / Reif', pt: 'geada', zh: '霜', ar: 'صقيع', ja: '霜 / 凍結', ru: 'мороз / иней', ex: 'Morning frost covered the grass like a silver blanket.', exHi: 'सुबह का पाला घास को चांदी की चादर की तरह ढक लेता था।', exEs: 'La escarcha matutina cubría la hierba como una manta plateada.', ic: '❄️' },
    { w: 'caution', p: '/ˈkɔːʃn/', m: 'care taken to avoid danger or mistakes', hi: 'सावधानी / सतर्कता', es: 'precaución / cautela', fr: 'prudence / précaution', de: 'Vorsicht / Achtsamkeit', pt: 'cautela / precaução', zh: '小心 / 谨慎', ar: 'حذر / تحذير', ja: '用心 / 注意', ru: 'осторожность', ex: 'Proceed with caution on icy trails.', exHi: 'बर्फ़ीले रास्तों पर सावधानी से आगे बढ़ें।', exEs: 'Avance con precaución por senderos helados.', ic: '⚠️' },
    { w: 'mild', p: '/maɪld/', m: 'moderately warm, not severe or extreme', hi: 'हल्का / सुहावना', es: 'templado / suave', fr: 'doux / clément', de: 'mild / gemäßigt', pt: 'ameno / suave', zh: '温和的 / 适宜的', ar: 'معتدل', ja: '温暖な / 穏やかな', ru: 'мягкий / умеренный', ex: 'Spring brings mild temperatures and blooming flowers.', exHi: 'वसंत ऋतु हल्का तापमान और खिलते फूल लाती है।', exEs: 'La primavera trae temperaturas suaves y flores en flor.', ic: '🌤️' },
    { w: 'chill', p: '/tʃɪl/', m: 'an unpleasant feeling of coldness in the atmosphere', hi: 'ठंडक / सिहरन', es: 'frío / sensación de frío', fr: 'fraîcheur / frisson', de: 'Kälte / Frische', pt: 'frio / sensação gélida', zh: '寒气 / 凉意', ar: 'قشعريرة / برد', ja: '冷気 / 肌寒さ', ru: 'холод / озноб', ex: 'There is a noticeable chill in the evening breeze.', exHi: 'शाम की हवा में काफ़ी ठंडक है।', exEs: 'Hay un frío notable en la brisa de la tarde.', ic: '🥶' },
    { w: 'breeze', p: '/briːz/', m: 'a gentle wind', hi: 'मंद हवा / समीर', es: 'brisa', fr: 'brise', de: 'Brise / sanfter Wind', pt: 'brisa', zh: '微风', ar: 'نسيم', ja: 'そよ風', ru: 'бриз / ветерок', ex: 'A cool breeze blew across the shoreline.', exHi: 'समुद्र तट पर एक ठंडी हवा चल रही थी।', exEs: 'Una brisa fresca soplaba a lo largo de la costa.', ic: '🍃' },
    { w: 'unpredictable', p: '/ˌʌnprɪˈdɪktəbl/', m: 'not able to be foreseen or predicted', hi: 'अप्रत्याशित / अनिश्चित', es: 'impredecible', fr: 'imprévisible', de: 'unberechenbar', pt: 'imprevisível', zh: '难以预测的', ar: 'لا يمكن التنبؤ به', ja: '予測不能な', ru: 'непредсказуемый', ex: 'Mountain weather can be highly unpredictable.', exHi: 'पहाड़ी मौसम अत्यधिक अप्रत्याशित हो सकता है।', exEs: 'El clima de montaña puede ser muy impredecible.', ic: '🎲' },
    { w: 'adventure', p: '/ədˈventʃər/', m: 'an unusual and exciting, typically hazardous, experience or activity', hi: 'साहसिक कार्य / रोमांच', es: 'aventura', fr: 'aventure', de: 'Abenteuer', pt: 'aventura', zh: '冒险 / 奇遇', ar: 'مغامرة', ja: '冒険 / アドベンチャー', ru: 'приключение', ex: 'Kayaking down the rapids was an exhilarating adventure.', exHi: 'तेज बहाव में कयाकिंग करना एक रोमांचक साहसिक कार्य था।', exEs: 'Hacer kayak por los rápidos fue una aventura emocionante.', ic: '🛶' },
    { w: 'overcast', p: '/ˌəʊvəˈkɑːst/', m: 'covered with clouds; dull and gray sky', hi: 'बादलों से घिरा हुआ / घटाटोप', es: 'nublado / encapotado', fr: 'couvert / nuageux', de: 'bewölkt / bedeckt', pt: 'nublado / encoberto', zh: '阴天的 / 多云的', ar: 'غائم كلياً', ja: '曇天の / どんよりした', ru: 'пасмурный / затянутый облаками', ex: 'The sky remained overcast all afternoon without raining.', exHi: 'बिना बारिश के पूरी दोपहर आसमान बादलों से घिरा रहा।', exEs: 'El cielo permaneció nublado toda la tarde sin llover.', ic: '☁️' }
  ],
  chunks: [
    { phrase: 'check the weather forecast', meaning: 'look up expected meteorological conditions', hi: 'मौसम का पूर्वानुमान देखना', es: 'consultar el pronóstico del tiempo', fr: 'consulter les prévisions météo', de: 'die Wettervorhersage prüfen', pt: 'checar a previsão do tempo', zh: '查看天气预报', ar: 'التحقق من نشرة الأحوال الجوية', ja: '天気予报をチェックする', ru: 'проверить прогноз погоды', note: 'Preparation chunk: "Always check the weather forecast before hiking."', ic: '📱' },
    { phrase: 'dress in layers', meaning: 'wear multiple garments to adjust to changing temperature', hi: 'परतों में कपड़े पहनना', es: 'vestirse por capas', fr: 's\'habiller par couches', de: 'sich im Zwiebellook kleiden', pt: 'vestir-se em camadas', zh: '采用多层穿衣法', ar: 'ارتداء ملابس متعددة الطبقات', ja: '重ね着をする', ru: 'одеваться слоями', note: 'Outdoor advice: "In the mountains, it is best to dress in layers."', ic: '🧥' },
    { phrase: 'unless the weather clears up', meaning: 'except in the case that the sky becomes clear and dry', hi: 'जब तक कि मौसम साफ़ न हो जाए', es: 'a menos que el tiempo mejore', fr: 'à moins que le temps ne s\'éclaircisse', de: 'es sei denn, das Wetter bessert sich', pt: 'a menos que o tempo melhore', zh: '除非天气转晴', ar: 'ما لم يتحسن الطقس', ja: '天気が回復しない限り', ru: 'если только погода не прояснится', note: 'Conditional chunk: "We will stay in camp unless the weather clears up."', ic: '⛅' },
    { phrase: 'in case of emergency', meaning: 'if an unexpected crisis or danger occurs', hi: 'आपातकाल की स्थिति में', es: 'en caso de emergencia', fr: 'en cas d\'urgence', de: 'im Notfall', pt: 'em caso de emergência', zh: '万一发生紧急情况', ar: 'في حالة الطوارئ', ja: '緊急時には', ru: 'на случай чрезвычайной ситуации', note: 'Safety precaution: "Carry a whistle in case of emergency."', ic: '🆘' },
    { phrase: 'take shelter from', meaning: 'find cover to stay protected from wind, rain, or heat', hi: 'से बचने के लिए आश्रय लेना', es: 'refugiarse de', fr: 's\'abriter de', de: 'Schutz suchen vor', pt: 'abrigar-se de', zh: '躲避...', ar: 'الاحتماء من', ja: '〜から雨宿り/避難する', ru: 'укрыться от', note: 'Action chunk: "We took shelter from the torrential rain."', ic: '⛺' },
    { phrase: 'be prepared for', meaning: 'have all necessary gear and readiness for a situation', hi: 'के लिए तैयार रहना', es: 'estar preparado para', fr: 'être préparé à', de: 'vorbereitet sein auf', pt: 'estar preparado para', zh: '做好应对...的准备', ar: 'كن مستعداً لـ', ja: '〜に備えている', ru: 'быть готовым к', note: 'General advice: "Be prepared for sudden temperature drops."', ic: '🎒' },
    { phrase: 'call off the trip', meaning: 'cancel a planned journey due to problems or weather', hi: 'यात्रा रद्द करना', es: 'cancelar el viaje', fr: 'annuler l\'excursion', de: 'die Reise absagen', pt: 'cancelar a viagem', zh: '取消行程', ar: 'إلغاء الرحلة', ja: '旅行を中止する', ru: 'отменить поездку', note: 'Decision chunk: "They had to call off the boat trip because of rough seas."', ic: '🚫' },
    { phrase: 'brave the elements', meaning: 'go outside and face harsh or unpleasant weather conditions', hi: 'खराब मौसम का सामना करते हुए बाहर जाना', es: 'desafiar las inclemencias del tiempo', fr: 'affronter les éléments', de: 'dem Wetter trotzen', pt: 'enfrentar as intempéries', zh: '迎着恶劣天气前行', ar: 'مواجهة تقلبات الطقس', ja: '悪天候をものともせず出かける', ru: 'бросить вызов стихии', note: 'Idiomatic: "A few dedicated runners braved the elements in the storm."', ic: '🏃' }
  ],
  grammar: {
    title: 'Zero & First Conditionals with if, when, and unless',
    concept: 'Expressing universal scientific facts (Zero Conditional) and realistic future contingencies (First Conditional).',
    patterns: [
      {
        title: 'First Conditional for Future Weather Outcomes',
        structure: 'If / When + Present Simple, Subject + will / won\'t / modal + Base Verb',
        rule: 'Use the First Conditional to talk about probable future results dependent on weather conditions.',
        examples: [
          { en: 'If it rains this afternoon, we will visit the natural history museum.', hi: 'अगर आज दोपहर बारिश होती है, तो हम प्राकृतिक इतिहास संग्रहालय जाएंगे।', es: 'Si llueve esta tarde, visitaremos el museo de historia natural.' },
          { en: 'When the fog lifts, we can hike up to the peak.', hi: 'जब कोहरा छंट जाएगा, तब हम चोटी की ओर चढ़ाई कर सकते हैं।', es: 'Cuando se disipe la niebla, podremos subir hasta el pico.' }
        ]
      },
      {
        title: 'Using "unless" (= if not) in Outdoor Warnings',
        structure: 'Subject + will + Verb + unless + Subject + Present Simple Verb',
        rule: '"Unless" means "except if" or "if not". Do not use a negative verb inside the "unless" clause.',
        examples: [
          { en: 'We will cancel the rafting trip unless the river level drops.', hi: 'हम राफ्टिंग यात्रा रद्द कर देंगे जब तक कि नदी का जलस्तर कम न हो जाए।', es: 'Cancelaremos el viaje de rafting a menos que baje el nivel del río.' },
          { en: 'You will catch a chill unless you wear a waterproof coat.', hi: 'आपको ठंड लग जाएगी जब तक कि आप वॉटरप्रूफ कोट नहीं पहनते।', es: 'Te enfriarás a menos que uses un abrigo impermeable.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'If it will snow tomorrow, we will go skiing.', cor: 'If it snows tomorrow, we will go skiing.', exp: 'Never use "will" in the "if" clause. Use Present Simple ("snows").', hi: '"if" वाले भाग में "will" का उपयोग न करें; Present Simple ("snows") का प्रयोग करें।', es: 'No uses "will" en la cláusula con "if". Usa Present Simple ("snows").' },
    { inc: 'We will go hiking unless it will not rain.', cor: 'We will go hiking unless it rains.', exp: '"Unless" already contains a negative meaning ("if not"). Do not use a double negative.', hi: '"unless" के साथ "not" न लगाएं क्योंकि इसका अर्थ पहले से ही "if not" होता है।', es: '"Unless" ya significa "a menos que" (negación). No uses otra negación.' },
    { inc: 'When you will reach the summit, call me.', cor: 'When you reach the summit, call me.', exp: 'In time clauses with "when", use Present Simple ("reach"), not "will reach".', hi: '"when" वाले समय उपवाक्य में "will" की जगह Present Simple का उपयोग करें।', es: 'En oraciones temporales con "when", usa Present Simple ("reach"), no "will reach".' },
    { inc: 'Dress in layers in case it will be cold.', cor: 'Dress in layers in case it is cold.', exp: 'After "in case", use the Present Simple to express a future contingency.', hi: '"in case" के बाद भविष्य की संभावना के लिए Present Simple ("is cold") का उपयोग करें।', es: 'Después de "in case", usa Present Simple ("is cold") para contingencias futuras.' },
    { inc: 'If the weather is good, we would go to the beach.', cor: 'If the weather is good, we will go to the beach.', exp: 'First Conditional pairs Present Simple ("is") with "will", not "would" (which is Second Conditional).', hi: 'First Conditional में Present Simple के साथ "will" का जोड़ा बनाएं, "would" का नहीं।', es: 'El primer condicional combina Present Simple con "will", no con "would".' }
  ],
  dialogues: [
    {
      title: 'Deciding on an Alpine Trek Based on the Forecast',
      context: 'Chloe and Max review radar updates before heading into the mountain pass.',
      charA: { name: 'Chloe', av: '🧗‍♀️', role: 'Climber' },
      charB: { name: 'Max', av: '⛷️', role: 'Trek Leader' },
      turns: [
        { spk: 'Chloe', text: 'Max, did you check the weather forecast for tomorrow morning?', hi: 'मैक्स, क्या आपने कल सुबह के लिए मौसम का पूर्वानुमान देखा?', es: 'Max, ¿consultaste el pronóstico del tiempo para mañana por la mañana?' },
        { spk: 'Max', text: 'Yes. The meteorologist warned that a sudden cold front will bring high winds and low visibility.', hi: 'हाँ। मौसम विज्ञानी ने चेतावनी दी है कि एक अचानक आया ठंडा मोर्चा तेज़ हवाएँ और कम दृश्यता लाएगा।', es: 'Sí. El meteorólogo advirtió que un frente frío repentino traerá fuertes vientos y poca visibilidad.' },
        { spk: 'Chloe', text: 'If the temperature drops below zero, will the trail be covered in ice?', hi: 'यदि तापमान शून्य से नीचे चला जाता है, तो क्या पगडंडी बर्फ से ढक जाएगी?', es: 'Si la temperatura cae por debajo de cero, ¿el sendero se cubrirá de hielo?' },
        { spk: 'Max', text: 'Almost certainly. Unless the weather clears up by dawn, we will call off the summit push.', hi: 'लगभग निश्चित रूप से। जब तक कि भोर तक मौसम साफ न हो जाए, हम शिखर पर जाने की योजना रद्द कर देंगे।', es: 'Casi con seguridad. A menos que el tiempo mejore al amanecer, cancelaremos el intento a la cumbre.' },
        { spk: 'Chloe', text: 'Good call. Let\'s pack our waterproof jackets and emergency blankets just in case.', hi: 'अच्छा निर्णय। आइए एहतियात के तौर पर अपने वॉटरप्रूफ जैकेट और आपातकालीन कंबल पैक कर लें।', es: 'Buena decisión. Empaquemos nuestras chaquetas impermeables y mantas de emergencia por si acaso.' }
      ]
    },
    {
      title: 'Adapting to a Summer Heatwave',
      context: 'Sara and Oliver plan an outdoor cycling trip around the lake during a hot weekend.',
      charA: { name: 'Sara', av: '🚴‍♀️', role: 'Cyclist' },
      charB: { name: 'Oliver', av: '🚵‍♂️', role: 'Outdoor Enthusiast' },
      turns: [
        { spk: 'Sara', text: 'Oliver, the weather app says tomorrow will reach 38 degrees with extreme humidity.', hi: 'ओलिवर, मौसम ऐप का कहना है कि कल अत्यधिक नमी के साथ तापमान 38 डिग्री तक पहुंच जाएगा।', es: 'Oliver, la aplicación del clima dice que mañana alcanzará los 38 grados con extrema humedad.' },
        { spk: 'Oliver', text: 'That is quite intense! If we start at 6 AM, we can finish before the worst of the heatwave.', hi: 'यह काफी तीव्र है! यदि हम सुबह 6 बजे शुरू करते हैं, तो हम सबसे भीषण गर्मी से पहले समाप्त कर सकते हैं।', es: '¡Eso es bastante intenso! Si salimos a las 6 AM, podemos terminar antes de lo peor de la ola de calor.' },
        { spk: 'Sara', text: 'Agreed. Let\'s bring three bottles of water each and wear sun hats to avoid heat exhaustion.', hi: 'सहमत हूँ। आइए धूप से बचने और पानी की कमी न होने देने के लिए तीन-तीन बोतल पानी साथ लें और टोपी पहनें।', es: 'De acuerdo. Llevemos tres botellas de agua cada uno y usemos sombreros para evitar el golpe de calor.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_182_p1',
      type: 'multiple_choice',
      prompt: 'Select the correct verb form for the First Conditional:',
      text: 'If it [blank] tomorrow, we will go kayaking on the lake.',
      options: [
        { id: '1', text: 'is sunny', isCorrect: true },
        { id: '2', text: 'will be sunny', isCorrect: false },
        { id: '3', text: 'was sunny', isCorrect: false },
        { id: '4', text: 'is being sunny', isCorrect: false }
      ],
      correctAnswer: 'is sunny',
      explanation: 'In the "if" clause of a First Conditional, use Present Simple ("is sunny").'
    },
    {
      id: 'ex_182_p2',
      type: 'fill_blank',
      prompt: 'Complete the sentence with "unless":',
      text: 'We will not go into the mountain pass [blank] the blizzard stops.',
      options: [
        { id: '1', text: 'unless', isCorrect: true },
        { id: '2', text: 'if', isCorrect: false },
        { id: '3', text: 'although', isCorrect: false },
        { id: '4', text: 'because', isCorrect: false }
      ],
      correctAnswer: 'unless',
      explanation: '"Unless the blizzard stops" means "except if the blizzard stops".'
    },
    {
      id: 'ex_182_p3',
      type: 'word_ordering',
      prompt: 'Arrange the tokens into a valid conditional warning:',
      tokens: ['If', 'thunderstorms', 'develop', 'we', 'will', 'take', 'shelter', '.'],
      correctOrder: ['If', 'thunderstorms', 'develop', 'we', 'will', 'take', 'shelter', '.'],
      explanation: 'First Conditional statement: "If thunderstorms develop, we will take shelter."'
    },
    {
      id: 'ex_182_p4',
      type: 'error_correction',
      prompt: 'Fix the grammar mistake in this sentence:',
      errorSentence: 'If you will wear a waterproof jacket, you will stay dry.',
      correctSentence: 'If you wear a waterproof jacket, you will stay dry.',
      explanation: 'Do not use "will" in the "if" clause; use the Present Simple verb "wear".'
    },
    {
      id: 'ex_182_p5',
      type: 'translation',
      prompt: 'Translate to English: "हम यात्रा रद्द कर देंगे जब तक कि मौसम साफ न हो जाए।"',
      targetSentence: 'We will call off the trip unless the weather clears up.',
      explanation: '"call off the trip" translates यात्रा रद्द करना, and "unless the weather clears up" translates जब तक कि मौसम साफ न हो जाए।'
    },
    {
      id: 'ex_182_p6',
      type: 'multiple_choice',
      prompt: 'What is the purpose of "dressing in layers"?',
      options: [
        { id: '1', text: 'To easily adapt clothing to temperature changes', isCorrect: true },
        { id: '2', text: 'To look fashionable for photo shoots', isCorrect: false },
        { id: '3', text: 'To avoid carrying any backpack', isCorrect: false },
        { id: '4', text: 'To make the luggage heavier', isCorrect: false }
      ],
      correctAnswer: 'To easily adapt clothing to temperature changes',
      explanation: '"Dressing in layers" lets hikers add or remove garments as weather shifts.'
    },
    {
      id: 'ex_182_p7',
      type: 'fill_blank',
      prompt: 'Choose the correct word to complete the advice:',
      text: 'In high mountain regions, the weather is completely [blank] and changes rapidly.',
      options: [
        { id: '1', text: 'unpredictable', isCorrect: true },
        { id: '2', text: 'predictable', isCorrect: false },
        { id: '3', text: 'permanent', isCorrect: false },
        { id: '4', text: 'scheduled', isCorrect: false }
      ],
      correctAnswer: 'unpredictable',
      explanation: '"Unpredictable" describes conditions that change quickly without warning.'
    },
    {
      id: 'ex_182_p8',
      type: 'speaking',
      prompt: 'Speak this safety guideline clearly:',
      targetSentence: 'Be prepared for sudden gusts of wind when you reach the mountain ridge.',
      audioText: 'Be prepared for sudden gusts of wind when you reach the mountain ridge.',
      explanation: 'Pronounce "gusts" and "ridge" clearly.'
    },
    {
      id: 'ex_182_p9',
      type: 'listening',
      prompt: 'Listen to the weather briefing and select the outcome:',
      audioText: 'Due to severe lightning and heavy drizzle, the outdoor marathon is postponed until Sunday.',
      options: [
        { id: '1', text: 'The marathon is postponed until Sunday.', isCorrect: true },
        { id: '2', text: 'The marathon will start right now.', isCorrect: false },
        { id: '3', text: 'The marathon was moved to another city.', isCorrect: false },
        { id: '4', text: 'Only professional runners may start today.', isCorrect: false }
      ],
      correctAnswer: 'The marathon is postponed until Sunday.',
      explanation: 'The announcement states the marathon is postponed due to weather.'
    }
  ],
  review: [
    {
      id: 'ex_182_r1',
      type: 'multiple_choice',
      prompt: 'Choose the correct structure:',
      text: 'You will get wet [blank] you take an umbrella with you.',
      options: [
        { id: '1', text: 'unless', isCorrect: true },
        { id: '2', text: 'if', isCorrect: false },
        { id: '3', text: 'when', isCorrect: false },
        { id: '4', text: 'while', isCorrect: false }
      ],
      correctAnswer: 'unless',
      explanation: '"Unless you take an umbrella" means "if you do not take an umbrella".'
    },
    {
      id: 'ex_182_r2',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the appropriate word:',
      text: 'Dense morning fog caused poor [blank] along the coastline.',
      options: [
        { id: '1', text: 'visibility', isCorrect: true },
        { id: '2', text: 'humidity', isCorrect: false },
        { id: '3', text: 'forecast', isCorrect: false },
        { id: '4', text: 'shelter', isCorrect: false }
      ],
      correctAnswer: 'visibility',
      explanation: 'Fog directly affects "visibility" (the distance one can see).'
    },
    {
      id: 'ex_182_r3',
      type: 'word_ordering',
      prompt: 'Assemble the sentence correctly:',
      tokens: ['Always', 'check', 'the', 'weather', 'forecast', 'before', 'hiking', '.'],
      correctOrder: ['Always', 'check', 'the', 'weather', 'forecast', 'before', 'hiking', '.'],
      explanation: 'A standard imperative recommendation for outdoor safety.'
    },
    {
      id: 'ex_182_r4',
      type: 'translation',
      prompt: 'Translate to English: "अगर तापमान गिरता है, तो हम अपनी गर्म जैकेट पहनेंगे।"',
      targetSentence: 'If the temperature drops, we will wear our warm jackets.',
      explanation: 'First Conditional: "If the temperature drops, we will wear..."'
    }
  ],
  assessment: [
    {
      id: 'ex_182_a1',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly follows First Conditional rules?',
      options: [
        { id: '1', text: 'If the storm arrives tonight, we will stay indoors.', isCorrect: true },
        { id: '2', text: 'If the storm will arrive tonight, we stay indoors.', isCorrect: false },
        { id: '3', text: 'If the storm arrives tonight, we stayed indoors.', isCorrect: false },
        { id: '4', text: 'If the storm arrived tonight, we will stay indoors.', isCorrect: false }
      ],
      correctAnswer: 'If the storm arrives tonight, we will stay indoors.',
      explanation: 'Present Simple in "if" clause + "will + verb" in result clause.'
    },
    {
      id: 'ex_182_a2',
      type: 'fill_blank',
      prompt: 'Choose the correct conjunction:',
      text: 'Pack an extra power bank [blank] of an emergency on the trail.',
      options: [
        { id: '1', text: 'in case', isCorrect: true },
        { id: '2', text: 'unless', isCorrect: false },
        { id: '3', text: 'although', isCorrect: false },
        { id: '4', text: 'because', isCorrect: false }
      ],
      correctAnswer: 'in case',
      explanation: '"in case of an emergency" is the standard prepositional phrase.'
    },
    {
      id: 'ex_182_a3',
      type: 'error_correction',
      prompt: 'Identify and correct the grammatical error:',
      errorSentence: 'We will not go sailing unless the wind will be calm.',
      correctSentence: 'We will not go sailing unless the wind is calm.',
      explanation: 'Use Present Simple ("is calm") in the clause with "unless".'
    },
    {
      id: 'ex_182_a4',
      type: 'translation',
      prompt: 'Translate to English: "पहाड़ों में हमेशा परतों में कपड़े पहनने की सलाह दी जाती है।"',
      targetSentence: 'In the mountains, it is always recommended to dress in layers.',
      explanation: '"dress in layers" expresses wearing multiple layers of clothing.'
    }
  ]
};

// =========================================================================
// LESSON 183: World Cuisines, Flavors, Ingredients & Cooking Techniques
// =========================================================================
export const LESSON_183_CONFIG: LessonConfigA2 = {
  num: 183,
  title: 'World Cuisines, Flavors, Ingredients & Cooking Techniques',
  icon: '🍲',
  estMin: 25,
  objTitle: 'Sequencers (First, Next, Then, After that, Finally) & Imperatives in Recipes',
  objDesc: 'Learn to describe international culinary traditions, flavor profiles, staple ingredients, and step-by-step recipe instructions using temporal sequencers and culinary imperative verbs.',
  objHi: 'अंतरराष्ट्रीय खान-पान की परंपराओं, स्वादों, मुख्य सामग्रियों और व्यंजन बनाने की विधि का वर्णन करने के लिए Sequencers (First, Next, Then) और Imperatives का उपयोग करना सीखें।',
  objEs: 'Describir tradiciones culinarias internacionales, perfiles de sabor, ingredientes básicos e instrucciones de recetas usando conectores secuenciales y verbos en imperativo.',
  canDo: [
    'I can describe different taste profiles (savory, spicy, sour, bitter, sweet).',
    'I can explain cooking techniques (sauté, simmer, bake, roast, marinate).',
    'I can give clear step-by-step recipe instructions using sequencers.',
    'I can talk about dietary preferences, food allergies, and traditional world dishes.'
  ],
  canDoHi: [
    'मैं विभिन्न स्वाद प्रकारों (नमकीन, तीखा, खट्टा, कड़वा, मीठा) का वर्णन कर सकता हूँ।',
    'मैं खाना पकाने की तकनीकों (भूनना, धीमी आंच पर पकाना, बेक करना, मैरीनेट करना) की व्याख्या कर सकता हूँ।',
    'मैं क्रमसूचक शब्दों का उपयोग करके व्यंजन विधि के चरणबद्ध निर्देश दे सकता हूँ।',
    'मैं खान-पान की प्राथमिकताओं, एलर्जी और पारंपरिक व्यंजनों के बारे में बात कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir diferentes perfiles de sabor (salado, picante, agrio, amargo, dulce).',
    'Puedo explicar técnicas de cocina (saltear, cocinar a fuego lento, hornear, asar, marinar).',
    'Puedo dar instrucciones claras paso a paso para recetas usando conectores de secuencia.',
    'Puedo hablar sobre preferencias dietéticas, alergias alimentarias y platos tradicionales del mundo.'
  ],
  vocab: [
    { w: 'ingredient', p: '/ɪnˈɡriːdiənt/', m: 'any of the foods or substances that are combined to make a dish', hi: 'सामग्री / घटक', es: 'ingrediente', fr: 'ingrédient', de: 'Zutat', pt: 'ingrediente', zh: '食材 / 原料', ar: 'مكون / عنصر غذائي', ja: '材料 / 具材', ru: 'ингредиент', ex: 'Fresh garlic and ginger are essential ingredients in this curry.', exHi: 'ताजा लहसुन और अदरक इस करी में आवश्यक सामग्रियां हैं।', exEs: 'El ajo fresco y el jengibre son ingredientes esenciales en este curry.', ic: '🧄' },
    { w: 'cuisine', p: '/kwɪˈziːn/', m: 'a style or method of cooking, especially as characteristic of a particular country or region', hi: 'व्यंजन शैली / खान-पान', es: 'cocina / gastronomía', fr: 'cuisine / gastronomie', de: 'Küche / Kochkunst', pt: 'culinária / gastronomia', zh: '菜系 / 美食', ar: 'مطبخ / فن الطهي', ja: '料理 / キュイジーヌ', ru: 'кухня / кулинария', ex: 'Italian cuisine is famous for handmade pasta and fresh herbs.', exHi: 'इतालवी व्यंजन अपने हस्तनिर्मित पास्ता और ताजी जड़ी-बूटियों के लिए प्रसिद्ध हैं।', exEs: 'La cocina italiana es famosa por la pasta hecha a mano y las hierbas frescas.', ic: '🍝' },
    { w: 'simmer', p: '/ˈsɪmər/', m: 'stay just below the boiling point while being heated', hi: 'धीमी आंच पर पकाना', es: 'hervir a fuego lento / cocer suavemente', fr: 'mijoter', de: 'köcheln lassen', pt: 'cozinhar em fogo brando', zh: '慢炖 / 文火煮', ar: 'يطهو على نار هادئة', ja: 'コトコト煮る / とろ火で煮る', ru: 'варить на медленном огне / томить', ex: 'Let the vegetable soup simmer for twenty minutes.', exHi: 'सब्जी के सूप को बीस मिनट तक धीमी आंच पर पकने दें।', exEs: 'Deje hervir la sopa de verduras a fuego lento durante veinte minutos.', ic: '🍲' },
    { w: 'sauté', p: '/ˈsəʊteɪ/', m: 'fry quickly in a little hot fat or oil', hi: 'हल्का भूनना / सॉते करना', es: 'saltear', fr: 'faire sauter / rissoler', de: 'anbraten / sautieren', pt: 'saltear / refogar', zh: '煸炒 / 煎炒', ar: 'يشوح / يقلي برفق', ja: 'ソテーする / 炒める', ru: 'пассеровать / слегка обжарить', ex: 'Sauté the chopped onions until they turn golden brown.', exHi: 'कटे हुए प्याज़ को तब तक भूनें जब तक वे सुनहरे भूरे न हो जाएं।', exEs: 'Saltee las cebollas picadas hasta que se doren.', ic: '🍳' },
    { w: 'seasoning', p: '/ˈsiːznɪŋ/', m: 'salt, herbs, or spices added to food to enhance its flavor', hi: 'मसाला / छौंक', es: 'sazón / condimento', fr: 'assaisonnement', de: 'Würze / Würzmittel', pt: 'tempero / condimento', zh: '调味料 / 调味品', ar: 'توابل / بهارات', ja: '調味料 / 味付け', ru: 'приправа / специи', ex: 'Taste the broth before adding extra seasoning.', exHi: 'अतिरिक्त मसाला डालने से पहले शोरबे का स्वाद चखें।', exEs: 'Pruebe el caldo antes de agregar condimento adicional.', ic: '🧂' },
    { w: 'flavor', p: '/ˈfleɪvər/', m: 'the distinctive taste of a food or drink', hi: 'स्वाद / सुगंध', es: 'sabor / gusto', fr: 'saveur / goût', de: 'Geschmack / Aroma', pt: 'sabor / aroma', zh: '风味 / 味道', ar: 'نكهة / مذاق', ja: '風味 / 味', ru: 'вкус / аромат', ex: 'Cumin gives the dish a warm, earthy flavor.', exHi: 'जीरा इस व्यंजन को एक गर्म और सोंधा स्वाद देता है।', exEs: 'El comino le da al plato un sabor cálido y terroso.', ic: '🌶️' },
    { w: 'marinate', p: '/ˈmærɪneɪt/', m: 'soak food in a marinade before cooking to add flavor or tenderize', hi: 'मसाले में भिगोना / मैरीनेट करना', es: 'marinar / macerar', fr: 'mariner', de: 'marinieren', pt: 'marinar', zh: '腌制', ar: 'ينقع في التتبيلة', ja: 'マリネする / 漬け込む', ru: 'мариновать', ex: 'Marinate the tofu in soy sauce and lime juice for one hour.', exHi: 'टोफू को सोया सॉस और नींबू के रस में एक घंटे के लिए मैरीनेट करें।', exEs: 'Marine el tofu en salsa de soja y jugo de lima durante una hora.', ic: '🥣' },
    { w: 'savory', p: '/ˈseɪvəri/', m: 'belonging to the category that is salty or spicy rather than sweet', hi: 'नमकीन / तीखा / चटपटा', es: 'salado / sabroso', fr: 'salé / savoureux', de: 'herzhaft / pikant', pt: 'salgado / saboroso', zh: '咸鲜的 / 美味的', ar: 'مملح / شهي', ja: '塩気のある / うま味のある', ru: 'несладкий / пикантный', ex: 'I prefer savory breakfast dishes like omelets over sweet pastries.', exHi: 'मुझे मीठी पेस्ट्री की तुलना में आमलेट जैसे नमकीन नाश्ते के व्यंजन अधिक पसंद हैं।', exEs: 'Prefiero platos de desayuno salados como tortillas en lugar de pasteles dulces.', ic: '🧀' },
    { w: 'aromatic', p: '/ˌærəˈmætɪk/', m: 'having a pleasant and distinctive smell', hi: 'सुगंधित / खुशबूदार', es: 'aromático', fr: 'aromatique / parfumé', de: 'aromatisch / duftend', pt: 'aromático / perfumado', zh: '芳香的 / 浓香的', ar: 'عطري / ذو رائحة زكية', ja: '香り高い / アロマティックな', ru: 'ароматный / душистый', ex: 'Cardamom and cinnamon create an aromatic chai.', exHi: 'इलायची और दालचीनी एक सुगंधित चाय बनाते हैं।', exEs: 'El cardamomo y la canela crean un té aromático.', ic: '☕' },
    { w: 'portion', p: '/ˈpɔːʃn/', m: 'an amount of food served for one person', hi: 'हिस्सा / परोसा गया भाग', es: 'porción / ración', fr: 'portion', de: 'Portion', pt: 'porção / pedaço', zh: '一份 / 份量', ar: 'حصة / وجبة', ja: '一人前 / ポーション', ru: 'порция', ex: 'The restaurant serves generous portions of grilled fish.', exHi: 'रेस्तरां ग्रिल्ड मछली के भरपूर हिस्से परोसता है।', exEs: 'El restaurante sirve generosas porciones de pescado a la parrilla.', ic: '🍽️' },
    { w: 'garnish', p: '/ˈɡɑːnɪʃ/', m: 'decorate or embellish food with a small item such as parsley', hi: 'सजाना / सजावट सामग्री', es: 'adornar / guarnición', fr: 'garnir / garniture', de: 'garnieren / Dekoration', pt: 'guarnecer / decorar', zh: '点缀 / 装饰配料', ar: 'يزين الطبق / مقبلات الزينة', ja: '彩りを添える / 飾り付ける', ru: 'гарнировать / украшать блюдо', ex: 'Garnish the bowl with fresh cilantro and crushed peanuts.', exHi: 'कटोरे को ताजे धनिए और पिसी हुई मूंगफली से सजाएं।', exEs: 'Adorne el tazón con cilantro fresco y cacahuates triturados.', ic: '🌿' },
    { w: 'roast', p: '/rəʊst/', m: 'cook food by prolonged exposure to heat in an oven or over a fire', hi: 'भूनना / सेंकना', es: 'asar / hornear', fr: 'rôtir', de: 'braten / rösten', pt: 'assar', zh: '烤 / 烘烤', ar: 'يشوي', ja: 'ローストする / 焼く', ru: 'запекать / жарить', ex: 'Roast the root vegetables at 200 degrees until tender.', exHi: 'जड़ वाली सब्जियों को 200 डिग्री पर नरम होने तक भूनें।', exEs: 'Ase los tubérculos a 200 grados hasta que estén tiernos.', ic: '🥕' },
    { w: 'spicy', p: '/ˈspaɪsi/', m: 'flavored with or fragrant with spice; hot to the taste', hi: 'मसालेदार / तीखा', es: 'picante / especiado', fr: 'épicé / piquant', de: 'scharf / gewürzt', pt: 'apimentado / picante', zh: '辛辣的 / 辣的', ar: 'حار / متبل', ja: 'スパイシーな / 辛い', ru: 'острый / пряный', ex: 'Thai green curry is famously spicy and rich in coconut milk.', exHi: 'थाई ग्रीन करी अपने तीखे स्वाद और नारियल के दूध के लिए प्रसिद्ध है।', exEs: 'El curry verde tailandés es famoso por ser picante y rico en leche de coco.', ic: '🌶️' },
    { w: 'sour', p: '/ˈsaʊər/', m: 'having an acid taste like lemon or vinegar', hi: 'खट्टा', es: 'agrio / ácido', fr: 'acide / aigre', de: 'sauer', pt: 'azedo / ácido', zh: '酸的', ar: 'حامض', ja: '酸っぱい', ru: 'кислый', ex: 'Tamarind adds a pleasantly sour note to the soup.', exHi: 'इमली सूप में एक सुखद खट्टा स्वाद जोड़ती है।', exEs: 'El tamarindo añade un agradable toque agrio a la sopa.', ic: '🍋' },
    { w: 'bitter', p: '/ˈbɪtər/', m: 'having a sharp, pungent taste like black coffee or dark chocolate', hi: 'कड़वा', es: 'amargo', fr: 'amer', de: 'bitter', pt: 'amargo', zh: '苦的', ar: 'مر', ja: '苦い', ru: 'горький', ex: 'Dark chocolate with 85% cocoa has a rich, bitter flavor.', exHi: '85% कोको वाले डार्क चॉकलेट का स्वाद गहरा और कड़वा होता है।', exEs: 'El chocolate negro con 85% de cacao tiene un sabor amargo e intenso.', ic: '🍫' },
    { w: 'dough', p: '/dəʊ/', m: 'a thick, malleable mixture of flour and liquid, used for baking bread', hi: 'गुंथा हुआ आटा / डो', es: 'masa', fr: 'pâte', de: 'Teig', pt: 'massa', zh: '面团', ar: 'عجين', ja: '生地 / パン生地', ru: 'тесто', ex: 'Knead the bread dough for ten minutes until smooth.', exHi: 'चिकना होने तक ब्रेड के आटे को दस मिनट तक गूंधें।', exEs: 'Amasse la masa de pan durante diez minutos hasta que esté suave.', ic: '🍞' },
    { w: 'whisk', p: '/wɪsk/', m: 'beat or stir a substance with a light, rapid movement', hi: 'फेंटना', es: 'batir / batidor', fr: 'fouetter / battre', de: 'verquirlen / schlagen', pt: 'bater / misturar', zh: '搅拌 / 抽打', ar: 'يخفق', ja: '泡立てる / かき混ぜる', ru: 'взбивать', ex: 'Whisk the eggs and milk together in a mixing bowl.', exHi: 'एक मिक्सिंग बाउल में अंडे और दूध को एक साथ फेंटें।', exEs: 'Bata los huevos y la leche juntos en un tazón.', ic: '🥣' },
    { w: 'recipe', p: '/ˈresəpi/', m: 'a set of instructions for preparing a particular dish', hi: 'व्यंजन विधि / रेसिपी', es: 'receta', fr: 'recette', de: 'Rezept', pt: 'receita', zh: '食谱 / 菜谱', ar: 'وصفة طهي', ja: 'レシピ / 調理法', ru: 'рецепт', ex: 'Follow this authentic recipe for Mexican guacamole.', exHi: 'मैक्सिकन गुआकामोल के लिए इस प्रामाणिक रेसिपी का पालन करें।', exEs: 'Siga esta auténtica receta de guacamole mexicano.', ic: '📖' },
    { w: 'texture', p: '/ˈtekstʃər/', m: 'the feel, appearance, or consistency of a food substance', hi: 'बनावट / टेक्सचर', es: 'textura', fr: 'texture', de: 'Textur / Konsistenz', pt: 'textura', zh: '口感 / 质地', ar: 'قوام / ملمس', ja: '食感 / 舌触り', ru: 'текстура / консистенция', ex: 'The crusty bread has a wonderfully crunchy texture.', exHi: 'कुरकुरी ब्रेड की बनावट अद्भुत रूप से कुरकुरी होती है।', exEs: 'El pan crujiente tiene una textura maravillosamente crujiente.', ic: '🥖' },
    { w: 'staple', p: '/ˈsteɪpl/', m: 'a main or important food item that is consumed regularly', hi: 'मुख्य आहार / प्रधान खाद्य', es: 'alimento básico / básico', fr: 'aliment de base', de: 'Grundnahrungsmittel', pt: 'alimento básico / grampo', zh: '主食 / 主要食品', ar: 'غذاء رئيسي / أساسي', ja: '主食 / 基本的な食材', ru: 'основной продукт', ex: 'Rice is a dietary staple for billions of people worldwide.', exHi: 'चावल दुनिया भर के अरबों लोगों के लिए एक मुख्य आहार है।', exEs: 'El arroz es un alimento básico para miles de millones de personas en todo el mundo.', ic: '🍚' }
  ],
  chunks: [
    { phrase: 'step-by-step instructions', meaning: 'a series of ordered actions to complete a task', hi: 'चरण-दर-चरण निर्देश', es: 'instrucciones paso a paso', fr: 'instructions étape par étape', de: 'Schritt-für-Schritt-Anleitung', pt: 'instruções passo a passo', zh: '逐步说明 / 分步指南', ar: 'تعليمات خطوة بخطوة', ja: 'ステップバイステップの手順', ru: 'пошаговые инструкции', note: 'Recipe language: "Follow the step-by-step instructions carefully."', ic: '📋' },
    { phrase: 'season to taste', meaning: 'add salt or pepper according to personal preference', hi: 'स्वादानुसार नमक या मसाले डालना', es: 'sazonar al gusto', fr: 'assaisonner à votre goût', de: 'nach Geschmack würzen', pt: 'temperar a gosto', zh: '按个人口味调味', ar: 'تبل حسب الرغبة', ja: 'お好みで味付けする', ru: 'приправить по вкусу', note: 'Culinary phrase: "Finally, season to taste with sea salt."', ic: '🧂' },
    { phrase: 'bring to a boil', meaning: 'heat a liquid until bubbles break the surface actively', hi: 'उबाल आने तक गर्म करना', es: 'llevar a ebullición / poner a hervir', fr: 'porter à ébullition', de: 'zum Kochen bringen', pt: 'levar à fervura', zh: '煮沸 / 烧开', ar: 'يوصل لدرجة الغليان', ja: '沸騰させる', ru: 'довести до кипения', note: 'Cooking instruction: "Bring the salted water to a boil."', ic: '🔥' },
    { phrase: 'rich in flavor', meaning: 'having a deep, complex, and enjoyable taste', hi: 'स्वाद से भरपूर', es: 'rico en sabor / lleno de sabor', fr: 'riche en saveurs', de: 'geschmacksintensiv', pt: 'rico em sabor', zh: '风味郁 / 味道丰富', ar: 'غني بالنكهة', ja: '風味豊かな / コクのある', ru: 'насыщенный вкусом', note: 'Food description: "The slow-cooked stew is rich in flavor."', ic: '🍲' },
    { phrase: 'serve hot with', meaning: 'present the dish immediately after cooking with an accompaniment', hi: 'के साथ गरमा-गरम परोसें', es: 'servir caliente con', fr: 'servir chaud avec', de: 'heiß servieren mit', pt: 'servir quente com', zh: '搭配...趁热享用', ar: 'يُقدم ساخناً مع', ja: '〜を添えて熱いうちに提供する', ru: 'подавать горячим с', note: 'Serving instruction: "Serve hot with steamed jasmine rice."', ic: '🍽️' },
    { phrase: 'a pinch of', meaning: 'a tiny amount of powder or spice held between thumb and finger', hi: 'एक चुटकी', es: 'una pizca de', fr: 'une pincée de', de: 'eine Prise', pt: 'uma pitada de', zh: '一小撮', ar: 'رشة من', ja: 'ひとつまみの', ru: 'щепотка', note: 'Measurement: "Add a pinch of chili flakes for mild heat."', ic: '🤏' },
    { phrase: 'bursting with flavor', meaning: 'having an intense, delicious taste that delights the palate', hi: 'स्वाद से लबरेज', es: 'rebosante de sabor', fr: 'qui déborde de saveurs', de: 'voller Geschmacksexplosion', pt: 'transbordando de sabor', zh: '风味十足 / 鲜香溢', ar: 'تفيض بالنكهات', ja: '旨味が溢れる', ru: 'взрывающийся вкусом', note: 'Idiomatic food praise: "Every bite was bursting with flavor."', ic: '💥' },
    { phrase: 'locally sourced ingredients', meaning: 'food items produced or grown nearby', hi: 'स्थानीय रूप से प्राप्त सामग्रियां', es: 'ingredientes de origen local', fr: 'ingrédients d\'origine locale', de: 'Zutaten aus regionalem Anbau', pt: 'ingredientes de origem local', zh: '本地采购的食材', ar: 'مكونات من مصادر محلية', ja: '地元産の食材', ru: 'местные продукты', note: 'Culinary quality: "The chef uses only locally sourced ingredients."', ic: '🌱' }
  ],
  grammar: {
    title: 'Recipe Sequencers & Culinary Imperative Verbs',
    concept: 'Structuring chronological procedures using sequencing transitions and imperative command forms.',
    patterns: [
      {
        title: 'Sequencing Discourse Connectors (First, Next, Then, After that, Finally)',
        structure: 'First, [Step 1]. Next, [Step 2]. Then, [Step 3]. After that, [Step 4]. Finally, [Step 5].',
        rule: 'Use sequencers at the beginning of clauses followed by a comma to clearly guide the reader through cooking steps.',
        examples: [
          { en: 'First, chop the onions and garlic finely.', hi: 'सबसे पहले प्याज और लहसुन को बारीक काट लें।', es: 'Primero, pique la cebolla y el ajo finamente.' },
          { en: 'Next, sauté them in olive oil over medium heat.', hi: 'इसके बाद, उन्हें मध्यम आंच पर जैतून के तेल में भूनें।', es: 'A continuación, saltéelos en aceite de oliva a fuego medio.' },
          { en: 'Finally, garnish with fresh basil leaves.', hi: 'अंत में, ताजी तुलसी की पत्तियों से सजाएं।', es: 'Finalmente, decore con hojas de albahaca fresca.' }
        ]
      },
      {
        title: 'Imperative Verb Forms for Direct Cooking Commands',
        structure: 'Base Verb + Object / Adverbial (+ negative: Do not / Don\'t + Base Verb)',
        rule: 'Recipes use bare infinitive verbs without a subject pronoun to instruct the cook directly.',
        examples: [
          { en: 'Simmer the sauce for 15 minutes.', hi: 'सॉस को 15 मिनट तक धीमी आंच पर पकाएं।', es: 'Cocine la salsa a fuego lento durante 15 minutos.' },
          { en: 'Do not overheat the dairy cream.', hi: 'डेयरी क्रीम को ज्यादा गर्म न करें।', es: 'No sobrecaliente la crema de leche.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'First, you must to chop the onions.', cor: 'First, chop the onions.', exp: 'Do not use "must to" in standard recipe instructions. Use the imperative base verb ("chop").', hi: 'रेसिपी निर्देशों में "must to" की जगह सीधे मुख्य क्रिया ("chop") का उपयोग करें।', es: 'En instrucciones de recetas, usa el imperativo ("chop") en lugar de "must to".' },
    { inc: 'Then, boiling the water in a large pot.', cor: 'Then, boil the water in a large pot.', exp: 'Use the base form of the imperative verb ("boil"), not the "-ing" participle.', hi: 'निर्देश देने के लिए क्रिया के मूल रूप ("boil") का प्रयोग करें, "-ing" का नहीं।', es: 'Usa la forma base del verbo imperativo ("boil"), no el participio con "-ing".' },
    { inc: 'After, add the seasoning to taste.', cor: 'After that, add the seasoning to taste.', exp: '"After" alone cannot be used as a standalone transition adverb. Use "After that" or "Afterwards".', hi: 'अकेले "After" को संयोजक की तरह न उपयोग करें; "After that" या "Afterwards" कहें।', es: 'No uses "After" solo como conector. Usa "After that" o "Afterwards".' },
    { inc: 'Finally, serve the soup warmly.', cor: 'Finally, serve the soup hot.', exp: 'Collocations with serving temperature use "serve hot" or "serve chilled", not "warmly".', hi: 'परोसने के तापमान के लिए "serve hot" का उपयोग करें, "warmly" का नहीं।', es: 'Se dice "serve hot" o "serve chilled", no "warmly".' },
    { inc: 'The curry is very spices.', cor: 'The curry is very spicy.', exp: '"Spices" is a noun. The adjective meaning hot/piquant is "spicy".', hi: 'विशेषण के रूप में "spicy" का प्रयोग करें, संज्ञा "spices" का नहीं।', es: '"Spices" es un sustantivo. El adjetivo para picante es "spicy".' }
  ],
  dialogues: [
    {
      title: 'Sharing a Family Pasta Recipe',
      context: 'Marco explains his grandmother\'s authentic tomato-basil pasta recipe to Emily.',
      charA: { name: 'Marco', av: '👨‍🍳', role: 'Home Chef' },
      charB: { name: 'Emily', av: '👩‍🍳', role: 'Food Blogger' },
      turns: [
        { spk: 'Emily', text: 'Marco, your pasta sauce is bursting with flavor! What is the secret technique?', hi: 'मार्को, आपका पास्ता सॉस स्वाद से भरपूर है! गुप्त तकनीक क्या है?', es: '¡Marco, tu salsa de pasta está rebosante de sabor! ¿Cuál es la técnica secreta?' },
        { spk: 'Marco', text: 'It is very simple. First, heat olive oil in a pan and gently sauté fresh garlic.', hi: 'यह बहुत सरल है। सबसे पहले, एक पैन में जैतून का तेल गर्म करें और धीरे से ताज़ा लहसुन भूनें।', es: 'Es muy sencillo. Primero, caliente aceite de oliva en una sartén y saltee suavemente ajo fresco.' },
        { spk: 'Emily', text: 'Next, do you add the crushed tomatoes right away?', hi: 'इसके बाद, क्या आप तुरंत पिसे हुए टमाटर डालते हैं?', es: 'A continuación, ¿añade los tomates triturados de inmediato?' },
        { spk: 'Marco', text: 'Yes, add the tomatoes and let the sauce simmer on low heat for twenty minutes. Finally, stir in fresh basil and season to taste.', hi: 'हाँ, टमाटर डालें और सॉस को धीमी आंच पर बीस मिनट तक पकने दें। अंत में, ताजी तुलसी मिलाएं और स्वादानुसार मसाला डालें।', es: 'Sí, agregue los tomates y deje hervir la salsa a fuego lento durante veinte minutos. Finalmente, mezcle albahaca fresca y sazone al gusto.' },
        { spk: 'Emily', text: 'That sounds delicious! I will try making this dish for dinner tonight.', hi: 'यह बहुत स्वादिष्ट लगता है! मैं आज रात के खाने में यह व्यंजन बनाने की कोशिश करूँगी।', es: '¡Suena delicioso! Intentaré preparar este plato para la cena de esta noche.' }
      ]
    },
    {
      title: 'Discussing Dietary Preferences at a Cooking Class',
      context: 'Chef Anton introduces ingredients for an Asian stir-fry workshop.',
      charA: { name: 'Chef Anton', av: '👨‍🍳', role: 'Culinary Instructor' },
      charB: { name: 'Priya', av: '👩‍🎓', role: 'Cooking Student' },
      turns: [
        { spk: 'Chef Anton', text: 'Welcome everyone! Today we are preparing a savory vegetable stir-fry with locally sourced ingredients.', hi: 'सभी का स्वागत है! आज हम स्थानीय सामग्रियों के साथ एक स्वादिष्ट वेजिटेबल स्टिर-फ्राई तैयार कर रहे हैं।', es: '¡Bienvenidos todos! Hoy prepararemos un salteado de verduras salado con ingredientes de origen local.' },
        { spk: 'Priya', text: 'Chef, I am allergic to peanuts. Can we substitute sesame seeds instead?', hi: 'शेफ, मुझे मूंगफली से एलर्जी है। क्या हम इसके बदले तिल का उपयोग कर सकते हैं?', es: 'Chef, soy alérgica al maní. ¿Podemos sustituirlo por semillas de sésamo?' },
        { spk: 'Chef Anton', text: 'Absolutely Priya. First, toast the sesame seeds in a dry pan, then garnish the noodles at the end.', hi: 'बिल्कुल प्रिया। सबसे पहले, एक सूखे पैन में तिल को भूनें, फिर अंत में नूडल्स को सजाएं।', es: 'Por supuesto Priya. Primero, tueste las semillas de sésamo en una sartén seca, luego decore los fideos al final.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_183_p1',
      type: 'multiple_choice',
      prompt: 'Which word is a sequential transition used in cooking instructions?',
      options: [
        { id: '1', text: 'Next', isCorrect: true },
        { id: '2', text: 'Yesterday', isCorrect: false },
        { id: '3', text: 'Seldom', isCorrect: false },
        { id: '4', text: 'Never', isCorrect: false }
      ],
      correctAnswer: 'Next',
      explanation: '"Next" indicates the subsequent step in a recipe procedure.'
    },
    {
      id: 'ex_183_p2',
      type: 'fill_blank',
      prompt: 'Complete the recipe step with the correct imperative verb:',
      text: 'First, [blank] the chopped onions in butter for three minutes.',
      options: [
        { id: '1', text: 'sauté', isCorrect: true },
        { id: '2', text: 'sautéeing', isCorrect: false },
        { id: '3', text: 'sautéed', isCorrect: false },
        { id: '4', text: 'to sauté', isCorrect: false }
      ],
      correctAnswer: 'sauté',
      explanation: 'Use the base form of the imperative verb ("sauté") for recipe steps.'
    },
    {
      id: 'ex_183_p3',
      type: 'word_ordering',
      prompt: 'Arrange the tokens into a correct recipe instruction:',
      tokens: ['Finally', ',', 'season', 'the', 'broth', 'to', 'taste', '.'],
      correctOrder: ['Finally', ',', 'season', 'the', 'broth', 'to', 'taste', '.'],
      explanation: 'Sequencer + comma + imperative instruction: "Finally, season the broth to taste."'
    },
    {
      id: 'ex_183_p4',
      type: 'error_correction',
      prompt: 'Fix the grammatical error in the recipe step:',
      errorSentence: 'After, simmer the sauce on low heat for ten minutes.',
      correctSentence: 'After that, simmer the sauce on low heat for ten minutes.',
      explanation: '"After" cannot stand alone as a sentence transition; use "After that".'
    },
    {
      id: 'ex_183_p5',
      type: 'translation',
      prompt: 'Translate to English: "धीमी आंच पर सूप को बीस मिनट तक उबलने दें।"',
      targetSentence: 'Let the soup simmer on low heat for twenty minutes.',
      explanation: '"simmer on low heat" means धीमी आंच पर पकाना.'
    },
    {
      id: 'ex_183_p6',
      type: 'multiple_choice',
      prompt: 'What does "season to taste" mean in cooking?',
      options: [
        { id: '1', text: 'Add salt or spices according to individual preference', isCorrect: true },
        { id: '2', text: 'Cook the dish only during the winter season', isCorrect: false },
        { id: '3', text: 'Eat the entire dish without sharing', isCorrect: false },
        { id: '4', text: 'Throw away all the spices in the kitchen', isCorrect: false }
      ],
      correctAnswer: 'Add salt or spices according to individual preference',
      explanation: '"Season to taste" means adjust seasoning to your liking.'
    },
    {
      id: 'ex_183_p7',
      type: 'fill_blank',
      prompt: 'Select the adjective describing food that is salty and flavorful rather than sweet:',
      text: 'For breakfast, I prefer [blank] dishes like scrambled eggs and avocado toast.',
      options: [
        { id: '1', text: 'savory', isCorrect: true },
        { id: '2', text: 'sour', isCorrect: false },
        { id: '3', text: 'bitter', isCorrect: false },
        { id: '4', text: 'sugary', isCorrect: false }
      ],
      correctAnswer: 'savory',
      explanation: '"Savory" refers to flavorful, non-sweet foods.'
    },
    {
      id: 'ex_183_p8',
      type: 'speaking',
      prompt: 'Read this recipe step out loud clearly:',
      targetSentence: 'First, marinate the chicken in lemon juice and aromatic spices for two hours.',
      audioText: 'First, marinate the chicken in lemon juice and aromatic spices for two hours.',
      explanation: 'Focus on pronouncing "marinate" and "aromatic".'
    },
    {
      id: 'ex_183_p9',
      type: 'listening',
      prompt: 'Listen to the chef and identify the final step:',
      audioText: 'After sautéing the vegetables, finally garnish the bowl with fresh cilantro and serve hot.',
      options: [
        { id: '1', text: 'Garnish with cilantro and serve hot.', isCorrect: true },
        { id: '2', text: 'Freeze the bowl in the refrigerator.', isCorrect: false },
        { id: '3', text: 'Boil the noodles for one hour.', isCorrect: false },
        { id: '4', text: 'Add two cups of raw sugar.', isCorrect: false }
      ],
      correctAnswer: 'Garnish with cilantro and serve hot.',
      explanation: 'The final step stated in the audio is garnishing with cilantro and serving hot.'
    }
  ],
  review: [
    {
      id: 'ex_183_r1',
      type: 'multiple_choice',
      prompt: 'Choose the correct imperative verb for bread making:',
      text: '[blank] the dough on a floured surface for eight minutes.',
      options: [
        { id: '1', text: 'Knead', isCorrect: true },
        { id: '2', text: 'Kneading', isCorrect: false },
        { id: '3', text: 'Kneaded', isCorrect: false },
        { id: '4', text: 'To knead', isCorrect: false }
      ],
      correctAnswer: 'Knead',
      explanation: 'Use the base imperative verb "Knead".'
    },
    {
      id: 'ex_183_r2',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the appropriate word:',
      text: 'This traditional stew is [blank] with rich flavors and tender vegetables.',
      options: [
        { id: '1', text: 'bursting', isCorrect: true },
        { id: '2', text: 'failing', isCorrect: false },
        { id: '3', text: 'delayed', isCorrect: false },
        { id: '4', text: 'blocking', isCorrect: false }
      ],
      correctAnswer: 'bursting',
      explanation: '"bursting with flavor" is a popular culinary idiom.'
    },
    {
      id: 'ex_183_r3',
      type: 'word_ordering',
      prompt: 'Assemble the sentence correctly:',
      tokens: ['Serve', 'the', 'grilled', 'fish', 'hot', 'with', 'steamed', 'rice', '.'],
      correctOrder: ['Serve', 'the', 'grilled', 'fish', 'hot', 'with', 'steamed', 'rice', '.'],
      explanation: 'Imperative serving instruction: "Serve the grilled fish hot with steamed rice."'
    },
    {
      id: 'ex_183_r4',
      type: 'translation',
      prompt: 'Translate to English: "सबसे पहले, ताजी सब्जियों को धोकर बारीक काट लें।"',
      targetSentence: 'First, wash and chop the fresh vegetables finely.',
      explanation: '"First, wash and chop..." uses the sequencer and imperative verbs.'
    }
  ],
  assessment: [
    {
      id: 'ex_183_a1',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly follows recipe structure?',
      options: [
        { id: '1', text: 'Next, bring the salted water to a rolling boil.', isCorrect: true },
        { id: '2', text: 'Next, bringing the salted water to a rolling boil.', isCorrect: false },
        { id: '3', text: 'Next, you will brought the salted water to a boil.', isCorrect: false },
        { id: '4', text: 'Next, to bring the salted water to a boil.', isCorrect: false }
      ],
      correctAnswer: 'Next, bring the salted water to a rolling boil.',
      explanation: 'Sequencer ("Next") followed by bare imperative verb ("bring").'
    },
    {
      id: 'ex_183_a2',
      type: 'fill_blank',
      prompt: 'Select the correct taste description:',
      text: 'Unsweetened cocoa powder has a distinctively [blank] flavor.',
      options: [
        { id: '1', text: 'bitter', isCorrect: true },
        { id: '2', text: 'sugary', isCorrect: false },
        { id: '3', text: 'savory', isCorrect: false },
        { id: '4', text: 'sour', isCorrect: false }
      ],
      correctAnswer: 'bitter',
      explanation: 'Pure cocoa powder has a "bitter" taste.'
    },
    {
      id: 'ex_183_a3',
      type: 'error_correction',
      prompt: 'Find and fix the error in the sentence:',
      errorSentence: 'First, you must to sauté the onions in olive oil.',
      correctSentence: 'First, sauté the onions in olive oil.',
      explanation: 'Do not use "you must to"; use the imperative "sauté".'
    },
    {
      id: 'ex_183_a4',
      type: 'translation',
      prompt: 'Translate to English: "शेफ केवल स्थानीय रूप से प्राप्त ताजी सामग्रियों का उपयोग करता है।"',
      targetSentence: 'The chef uses only locally sourced fresh ingredients.',
      explanation: '"locally sourced fresh ingredients" translates the culinary quality phrase.'
    }
  ]
};
