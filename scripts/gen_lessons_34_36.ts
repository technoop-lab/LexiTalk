import { LessonRaw, compileLesson, saveLessonFile } from './generate_all_unit3';

// =========================================================================
// LESSON 34: Possessive Pronouns & Belongings (Whose / mine, yours, his, hers, ours, theirs)
// =========================================================================
export const RAW_LESSON_34: LessonRaw = {
  num: 34,
  id: 'lesson_a1_3_34',
  title: 'Possessive Pronouns & Belongings (Whose / mine, yours, ours, theirs)',
  icon: '🎒',
  estMin: 25,
  objTitle: 'Identifying Owners, Asking Whose Items Are These, and Using Possessive Pronouns',
  objDesc: 'Master possessive pronouns (mine, yours, his, hers, ours, theirs) compared to possessive adjectives (my, your, his, her, our, their). Practice asking "Whose coat is this?" / "Whose keys are these?", talking about lost and found items, and asserting ownership.',
  objHi: 'अधिकार सर्वनामों (mine, yours, his, hers, ours, theirs) और "Whose" का प्रयोग सीखें। खोए और पाए गए सामान, स्वामित्व ("This bag is mine") और सवाल ("Whose keys are these?") पूछने का अभ्यास करें।',
  objEs: 'Domina los pronombres posesivos (mine, yours, his, hers, ours, theirs) frente a los adjetivos posesivos. Aprende a preguntar de quién son los objetos ("Whose is this?") y hablar de objetos perdidos.',
  canDo: [
    'Ask about ownership: "Whose umbrella is this on the chair?"',
    'State ownership using possessive pronouns: "The black jacket is mine, not yours"',
    'Contrast possessive adjectives and pronouns: "This is my laptop" = "This laptop is mine"',
    'Talk about shared belongings: "This apartment is ours, and that car is theirs"',
    'Handle lost and found situations: "Did someone lose these glasses? Are they yours?"'
  ],
  canDoHi: [
    'सामान के मालिक के बारे में पूछना: "Whose bag is this?"',
    'स्वामित्व बताना: "This pen is mine"',
    'साझा सामान की बात करना: "That house is ours"',
    'खोया-पाया सामान पहचानना: "Is this umbrella yours?"'
  ],
  canDoEs: [
    'Preguntar por el dueño: "Whose phone is this?"',
    'Indicar posesión con pronombres: "The keys are mine"',
    'Diferenciar my/mine, your/yours: "This is my coat" / "It is mine"',
    'Identificar objetos perdidos: "Are these yours?"'
  ],
  vocab: [
    { w: 'whose', p: '/huːz/', m: 'Belonging to which person (question word)', hi: 'किसका / किसकी / किसके', es: 'de quién', fr: 'à qui', de: 'wessen', pt: 'de quem', zh: '谁的', ar: 'لمن', ja: '誰の', ru: 'чей / чья / чье', ex: 'Whose red backpack is this on the floor?', exHi: 'फर्श पर यह लाल बैग किसका है?', exEs: '¿De quién es esta mochila roja en el suelo?', ic: '❓' },
    { w: 'mine', p: '/maɪn/', m: 'Belonging to me (possessive pronoun)', hi: 'मेरा / मेरी / मेरे', es: 'mío / mía / míos', fr: 'le mien / la mienne', de: 'meins / meiner', pt: 'meu / minha', zh: '我的（名词性）', ar: 'ملكي / لي', ja: '私のもの', ru: 'мой / моя / мое', ex: 'That coffee on the desk is mine.', exHi: 'डेस्क पर वह कॉफी मेरी है।', exEs: 'Ese café en el escritorio es mío.', ic: '👤' },
    { w: 'yours', p: '/jʊərz/', m: 'Belonging to you (possessive pronoun)', hi: 'तुम्हारा / आपका', es: 'tuyo / suya / suyos', fr: 'le tien / la tienne / le vôtre', de: 'deins / Ihrer', pt: 'seu / sua', zh: '你的 / 你们的', ar: 'ملكك / لك', ja: 'あなたのもの', ru: 'твой / ваш', ex: 'Is this black umbrella yours?', exHi: 'क्या यह काली छतरी आपकी है?', exEs: '¿Este paraguas negro es tuyo?', ic: '👉' },
    { w: 'his', p: '/hɪz/', m: 'Belonging to him (possessive pronoun and adjective)', hi: 'उसका (पुरुष का)', es: 'suyo (de él)', fr: 'le sien / la sienne (à lui)', de: 'seins / seiner', pt: 'dele', zh: '他的', ar: 'ملكه / له', ja: '彼のもの', ru: 'его', ex: 'I found a wallet, I think it is his.', exHi: 'मुझे एक बटुआ मिला, मुझे लगता है कि यह उसका है।', exEs: 'Encontré una cartera, creo que es de él.', ic: '👨' },
    { w: 'hers', p: '/hɝːz/', m: 'Belonging to her (possessive pronoun)', hi: 'उसका (महिला का)', es: 'suyo (de ella)', fr: 'le sien / la sienne (à elle)', de: 'ihres / ihrer', pt: 'dela', zh: '她的', ar: 'ملكها / لها', ja: '彼女のもの', ru: 'ее', ex: 'This green scarf is hers, not mine.', exHi: 'यह हरा स्कार्फ उसका है, मेरा नहीं।', exEs: 'Esta bufanda verde es de ella, no mía.', ic: '👩' },
    { w: 'ours', p: '/aʊərz/', m: 'Belonging to us (possessive pronoun)', hi: 'हमारा / हमारी / हमारे', es: 'nuestro / nuestra / nuestros', fr: 'le nôtre / la nôtre', de: 'unseres / unserer', pt: 'nosso / nossa', zh: '我们的', ar: 'ملكنا / لنا', ja: '私たちのもの', ru: 'наш / наша / наше', ex: 'That large table near the window is ours.', exHi: 'खिड़की के पास वाली वह बड़ी मेज हमारी है।', exEs: 'Esa mesa grande cerca de la ventana es nuestra.', ic: '👥' },
    { w: 'theirs', p: '/ðeərz/', m: 'Belonging to them (possessive pronoun)', hi: 'उनका / उनकी / उनके', es: 'suyo (de ellos / de ellas)', fr: 'le leur / la leur', de: 'ihres / ihrer (von ihnen)', pt: 'deles / delas', zh: '他们的 / 她们的', ar: 'ملكهم / لهم', ja: '彼らのもの', ru: 'их', ex: 'Our car is blue, but theirs is silver.', exHi: 'हमारी कार नीली है, लेकिन उनकी चांदी जैसी (सिल्वर) है।', exEs: 'Nuestro coche es azul, pero el de ellos es plateado.', ic: '🏘️' },
    { w: 'umbrella', p: '/ʌmˈbrel.ə/', m: 'A folding cover on a stick used for protection against rain', hi: 'छतरी / छाता', es: 'paraguas', fr: 'parapluie', de: 'Regenschirm', pt: 'guarda-chuva', zh: '雨伞', ar: 'مظلة', ja: '傘', ru: 'зонт', ex: 'It is raining outside, don\'t forget your umbrella.', exHi: 'बाहर बारिश हो रही है, अपनी छतरी मत भूलना।', exEs: 'Está lloviendo afuera, no olvides tu paraguas.', ic: '☂️' },
    { w: 'keys', p: '/kiːz/', m: 'Small metal instruments used to open locks', hi: 'चाबियां', es: 'llaves', fr: 'clés', de: 'Schlüssel', pt: 'chaves', zh: '钥匙', ar: 'مفاتيح', ja: '鍵', ru: 'ключи', ex: 'I left my house keys on the kitchen counter.', exHi: 'मैंने अपने घर की चाबियां किचन काउंटर पर छोड़ दीं।', exEs: 'Dejé las llaves de mi casa en la encimera de la cocina.', ic: '🔑' },
    { w: 'wallet / purse', p: '/ˈwɑː.lɪt/ /pɝːs/', m: 'A small flat folding case for holding money and cards', hi: 'बटुआ / पर्स', es: 'billetera / cartera', fr: 'portefeuille / porte-monnaie', de: 'Geldbörse / Portemonnaie', pt: 'carteira', zh: '钱包', ar: 'محفظة نقود', ja: '財布', ru: 'кошелек / бумажник', ex: 'He lost his leather wallet on the bus.', exHi: 'उसने बस में अपना चमड़े का बटुआ खो दिया।', exEs: 'Él perdió su billetera de cuero en el autobús.', ic: '👛' },
    { w: 'backpack', p: '/ˈbæk.pæk/', m: 'A bag carried on one\'s back with straps', hi: 'पीठ का बैग (बैकपैक)', es: 'mochila', fr: 'sac à dos', de: 'Rucksack', pt: 'mochila', zh: '双肩背包', ar: 'حقيبة ظهر', ja: 'リュックサック / バックパック', ru: 'рюкзак', ex: 'Is this heavy backpack yours or his?', exHi: 'क्या यह भारी बैकपैक आपका है या उसका?', exEs: '¿Esta mochila pesada es tuya o de él?', ic: '🎒' },
    { w: 'charger', p: '/ˈtʃɑːr.dʒɚ/', m: 'A device used for charging phone or laptop batteries', hi: 'चार्जर', es: 'cargador', fr: 'chargeur', de: 'Ladegerät / Ladekabel', pt: 'carregador', zh: '充电器', ar: 'شاحن', ja: '充電器', ru: 'зарядное устройство', ex: 'Someone forgot a phone charger in the meeting room.', exHi: 'मीटिंग रूम में कोई फोन का चार्जर भूल गया।', exEs: 'Alguien olvidó un cargador de teléfono en la sala de reuniones.', ic: '🔌' },
    { w: 'glasses', p: '/ˈɡlæs.ɪz/', m: 'Lenses mounted in a frame worn to aid vision', hi: 'चश्मा', es: 'gafas / lentes', fr: 'lunettes', de: 'Brille', pt: 'óculos', zh: '眼镜', ar: 'نظارات', ja: '眼鏡', ru: 'очки', ex: 'Are these reading glasses hers?', exHi: 'क्या पढ़ने वाला यह चश्मा उसका है?', exEs: '¿Estas gafas de lectura son de ella?', ic: '👓' },
    { w: 'notebook', p: '/ˈnoʊt.bʊk/', m: 'A book of blank pages for writing notes', hi: 'नोटबुक / कॉपी', es: 'cuaderno / libreta', fr: 'carnet / cahier', de: 'Notizbuch / Heft', pt: 'caderno', zh: '笔记本', ar: 'دفتر ملاحظات', ja: 'ノート', ru: 'тетрадь / блокнот', ex: 'She wrote her meeting notes in a blue notebook.', exHi: 'उसने अपनी बैठक के नोट्स एक नीली नोटबुक में लिखे।', exEs: 'Ella escribió sus notas de la reunión en un cuaderno azul.', ic: '📓' },
    { w: 'scarf', p: '/skɑːrf/', m: 'A piece of cloth worn around the neck for warmth', hi: 'स्कार्फ / मफलर', es: 'bufanda', fr: 'écharpe', de: 'Schal', pt: 'cachecol / lenço', zh: '围巾', ar: 'وشاح', ja: 'マフラー / スカーフ', ru: 'шарф', ex: 'I left my wool scarf in the restaurant.', exHi: 'मैं अपना ऊनी स्कार्फ रेस्तरां में छोड़ आया।', exEs: 'Dejé mi bufanda de lana en el restaurante.', ic: '🧣' },
    { w: 'water bottle', p: '/ˈwɑː.t̬ɚ ˌbɑː.t̬əl/', m: 'A container used for carrying drinking water', hi: 'पानी की बोतल', es: 'botella de agua', fr: 'bouteille d\'eau / gourde', de: 'Wasserflasche', pt: 'garrafa de água', zh: '水壶 / 水瓶', ar: 'زجاجة ماء', ja: '水筒 / ペットボトル', ru: 'бутылка для воды', ex: 'Is this stainless steel water bottle yours?', exHi: 'क्या यह स्टील की पानी की बोतल आपकी है?', exEs: '¿Esta botella de agua es tuya?', ic: '🧴' },
    { w: 'ID card', p: '/ˌaɪˈdiː ˌkɑːrd/', m: 'An identity card showing name and photo', hi: 'पहचान पत्र (आईडी कार्ड)', es: 'tarjeta de identificación / DNI', fr: 'carte d\'identité', de: 'Ausweis / Personalausweis', pt: 'documento de identidade', zh: '身份证 / 工牌', ar: 'بطاقة هوية', ja: '身分証明書 / IDカード', ru: 'удостоверение личности', ex: 'Please show your employee ID card at the entrance.', exHi: 'कृपया प्रवेश द्वार पर अपना कर्मचारी आईडी कार्ड दिखाएं।', exEs: 'Por favor muestre su tarjeta de identificación en la entrada.', ic: '🪪' },
    { w: 'lost and found', p: '/ˌlɑːst ənd ˈfaʊnd/', m: 'A place where lost items are stored until claimed', hi: 'खोया-पाया विभाग', es: 'objetos perdidos', fr: 'objets trouvés', de: 'Fundbüro', pt: 'achados e perdidos', zh: '失物招领处', ar: 'المفقودات والمعثورات', ja: '遺失物取扱所', ru: 'бюро находок', ex: 'We took the lost jacket to the hotel lost and found.', exHi: 'हम खोई हुई जैकेट होटल के खोया-पाया विभाग में ले गए।', exEs: 'Llevamos la chaqueta perdida a objetos perdidos del hotel.', ic: '📦' },
    { w: 'belong', p: '/bɪˈlɑːŋ/', m: 'To be the property of a person', hi: 'का होना / से संबंध रखना', es: 'pertenecer', fr: 'appartenir', de: 'gehören', pt: 'pertencer', zh: '属于', ar: 'ينتمي إلى / يخص', ja: '〜に属する / 〜のものだ', ru: 'принадлежать', ex: 'This watch belongs to my grandfather.', exHi: 'यह घड़ी मेरे दादाजी की है।', exEs: 'Este reloj pertenece a mi abuelo.', ic: '🏷️' },
    { w: 'owner', p: '/ˈoʊ.nɚ/', m: 'A person who owns something', hi: 'मालिक', es: 'dueño/a / propietario/a', fr: 'propriétaire', de: 'Besitzer / Eigentümer', pt: 'dono / proprietário', zh: '物主 / 主人', ar: 'مالك / صاحب الشيء', ja: '持ち主 / 所有者', ru: 'владелец / хозяин', ex: 'We are trying to find the owner of this lost dog.', exHi: 'हम इस खोए हुए कुत्ते के मालिक को खोजने की कोशिश कर रहे हैं।', exEs: 'Estamos tratando de encontrar al dueño de este perro perdido.', ic: '🕵️' }
  ],
  chunks: [
    { phrase: 'Whose umbrella is this?', meaning: 'Asking about single object possession', hi: 'यह छतरी किसकी है?', es: '¿De quién es este paraguas?', fr: 'À qui est ce parapluie ?', de: 'Wessen Regenschirm ist das?', pt: 'De quem é este guarda-chuva?', zh: '这把雨伞是谁的？', ar: 'لمن هذه المظلة؟', ja: 'この傘は誰のものですか？', ru: 'Чей это зонт?', note: '"Whose" + singular noun + "is this / that?"', ic: '☂️' },
    { phrase: 'It is mine, thank you!', meaning: 'Claiming ownership of an item', hi: 'यह मेरी है, धन्यवाद!', es: '¡Es mío, muchas gracias!', fr: 'C\'est le mien, merci !', de: 'Das ist meins, danke!', pt: 'É meu, obrigado!', zh: '是我的，谢谢你！', ar: 'إنها ملكي، شكراً لك!', ja: '私のものです、ありがとう！', ru: 'Это мое, спасибо!', note: '"mine" replaces "my umbrella"', ic: '✨' },
    { phrase: 'Are these keys yours?', meaning: 'Checking plural object ownership', hi: 'क्या ये चाबियां आपकी हैं?', es: '¿Son tuyas estas llaves?', fr: 'Ces clés sont-elles à toi ?', de: 'Sind das deine Schlüssel?', pt: 'Essas chaves são suas?', zh: '这些钥匙是你的吗？', ar: 'هل هذه المفاتيح لك؟', ja: 'この鍵はあなたのものですか？', ru: 'Эти ключи ваши?', note: '"yours" is used for singular and plural possessor', ic: '🔑' },
    { phrase: 'That coat belongs to him.', meaning: 'Stating third-person male ownership', hi: 'वह कोट उसका है।', es: 'Ese abrigo pertenece a él.', fr: 'Ce manteau lui appartient.', de: 'Dieser Mantel gehört ihm.', pt: 'Aquele casaco pertence a ele.', zh: '那件外套属于他。', ar: 'ذلك المعطف يخصه.', ja: 'そのコートは彼のものである。', ru: 'То пальто принадлежит ему.', note: '"belongs to" + object pronoun (him/her/us/them)', ic: '🧥' },
    { phrase: 'Is this notebook ours or theirs?', meaning: 'Differentiating group belongings', hi: 'क्या यह नोटबुक हमारी है या उनकी?', es: '¿Este cuaderno es nuestro o de ellos?', fr: 'Ce carnet est-il à nous ou à eux ?', de: 'Ist dieses Notizbuch unseres oder ihres?', pt: 'Este caderno é nosso ou deles?', zh: '这本笔记本是我们的还是他们的？', ar: 'هل هذا الدفتر لنا أم لهم؟', ja: 'このノートは私たちのものですか、それとも彼らのものですか？', ru: 'Эта тетрадь наша или их?', note: 'Contrasting plural possessive pronouns', ic: '📓' },
    { phrase: 'The red bag is hers.', meaning: 'Stating third-person female ownership', hi: 'लाल बैग उसका है।', es: 'El bolso rojo es de ella.', fr: 'Le sac rouge est le sien.', de: 'Die rote Tasche gehört ihr.', pt: 'A bolsa vermelha é dela.', zh: '那个红色的包是她的。', ar: 'الحقيبة الحمراء لها.', ja: 'その赤いバッグは彼女のものです。', ru: 'Красная сумка ее.', note: '"hers" replaces "her bag"', ic: '👜' },
    { phrase: 'I found this on the table.', meaning: 'Explaining how an item was discovered', hi: 'मुझे यह मेज पर मिला।', es: 'Encontré esto en la mesa.', fr: 'J\'ai trouvé ceci sur la table.', de: 'Ich habe das auf dem Tisch gefunden.', pt: 'Encontrei isto na mesa.', zh: '我在桌子上捡到这个。', ar: 'وجدت هذا على الطاولة.', ja: 'これをテーブルの上で見つけました。', ru: 'Я нашел это на столе.', note: 'Useful phrase in lost and found contexts', ic: '🔍' },
    { phrase: 'Someone left their charger.', meaning: 'Noticing an unclaimed belonging', hi: 'कोई अपना चार्जर भूल गया है।', es: 'Alguien dejó su cargador.', fr: 'Quelqu\'un a oublié son chargeur.', de: 'Jemand hat sein Ladekabel vergessen.', pt: 'Alguém esqueceu o carregador.', zh: '有人把充电器落下了。', ar: 'ترك أحدهم شاحنه.', ja: '誰かが充電器を置き忘れました。', ru: 'Кто-то оставил свою зарядку.', note: 'Singular "their" refers to unknown person', ic: '🔌' }
  ],
  grammar: {
    title: 'Possessive Adjectives vs. Possessive Pronouns',
    concept: 'Using mine, yours, his, hers, ours, theirs without following nouns',
    patterns: [
      {
        title: 'Adjective vs. Pronoun Contrast Matrix',
        structure: 'Possessive Adjective + Noun (my bag) vs. Standalone Possessive Pronoun (mine)',
        rule: 'Possessive adjectives must be followed by a noun (my car). Possessive pronouns replace both the adjective and the noun (This car is mine). Do not use apostrophes with possessive pronouns (hers, ours, theirs).',
        examples: [
          { en: 'This is my coffee, and that one is yours.', hi: 'यह मेरी कॉफी है, और वह आपकी है।', es: 'Este es mi café y ese es el tuyo.' },
          { en: 'Her apartment is small, but ours is very spacious.', hi: 'उसका अपार्टमेंट छोटा है, लेकिन हमारा बहुत बड़ा है।', es: 'El apartamento de ella es pequeño, pero el nuestro es muy espacioso.' }
        ]
      },
      {
        title: 'Whose Questions for Ownership',
        structure: 'Whose + [noun] + is this / are these?',
        rule: 'Use "Whose" (not "Who\'s") to inquire about possession. Answer with possessive nouns ("It\'s John\'s") or possessive pronouns ("It\'s his").',
        examples: [
          { en: 'Whose glasses are these on the sofa? — They are mine.', hi: 'सोफे पर यह चश्मा किसका है? — यह मेरा है।', es: '¿De quién son estas gafas en el sofá? — Son mías.' },
          { en: 'Whose car is parked outside? — It is theirs.', hi: 'बाहर खड़ी कार किसकी है? — यह उनकी है।', es: '¿De quién es el coche aparcado fuera? — Es de ellos.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'Who\'s umbrella is this on the desk?', cor: 'Whose umbrella is this on the desk?', exp: '"Who\'s" means "Who is". "Whose" asks about possession.', hi: '"Who\'s" का अर्थ "Who is" है, जबकि स्वामित्व के लिए "Whose" का प्रयोग होता है।', es: '"Who\'s" es la contracción de "Who is". Usa "Whose" para posesión.' },
    { inc: 'This notebook is my.', cor: 'This notebook is mine.', exp: 'Use possessive pronoun "mine" at the end of the clause, not possessive adjective "my".', hi: 'वाक्य के अंत में बिना संज्ञा के "mine" का प्रयोग होता है, "my" का नहीं।', es: 'Usa el pronombre "mine" sin sustantivo posterior, no "my".' },
    { inc: 'That jacket is her\'s.', cor: 'That jacket is hers.', exp: 'Never write possessive pronouns with apostrophes (hers, ours, theirs, yours).', hi: 'अधिकार सर्वनामों (hers, ours, yours) में कभी apostrophe (\'s) नहीं लगता।', es: 'Los pronombres posesivos nunca llevan apóstrofe (hers, yours, ours, theirs).' },
    { inc: 'These keys are your.', cor: 'These keys are yours.', exp: 'Use "yours" when no noun follows.', hi: 'बिना संज्ञा के "yours" का प्रयोग करें।', es: 'Usa "yours" cuando no hay sustantivo después.' },
    { inc: 'This house belongs for us.', cor: 'This house belongs to us.', exp: 'The verb "belong" takes preposition "to", not "for".', hi: '"belong" के बाद preposition "to" आता है, "for" नहीं।', es: 'El verbo "belong" siempre rige la preposición "to".' }
  ],
  dialogues: [
    {
      title: 'Lost Items in the Office Meeting Room',
      context: 'Chloe and Oliver are cleaning up the meeting room after a workshop.',
      charA: { name: 'Chloe', av: '👩‍💼', role: 'Coworker' },
      charB: { name: 'Oliver', av: '👨‍💼', role: 'Coworker' },
      turns: [
        { spk: 'Chloe', text: 'Oliver, whose black backpack is this on the chair?', hi: 'ऑलिवर, कुर्सी पर यह काला बैग किसका है?', es: 'Oliver, ¿de quién es esta mochila negra en la silla?' },
        { spk: 'Oliver', text: 'I think it is Lucas\'s. His backpack is black with blue zippers.', hi: 'मुझे लगता है कि यह लुकास का है। उसका बैकपैक नीली ज़िप वाला काला है।', es: 'Creo que es de Lucas. Su mochila es negra con cremalleras azules.' },
        { spk: 'Chloe', text: 'And whose glasses are these on the whiteboard ledge?', hi: 'और व्हाइटबोर्ड के किनारे पर यह चश्मा किसका है?', es: '¿Y de quién son estas gafas en el borde de la pizarra?' },
        { spk: 'Oliver', text: 'Oh, those are mine! Thank you for finding them. I was looking everywhere.', hi: 'अरे, वे मेरी हैं! उन्हें खोजने के लिए धन्यवाद। मैं हर जगह देख रहा था।', es: '¡Oh, esas son mías! Gracias por encontrarlas. Las estaba buscando por todas partes.' },
        { spk: 'Chloe', text: 'Glad I could help. Let\'s put the backpack in the lost and found box.', hi: 'खुशी हुई कि मैं मदद कर सकी। चलो बैकपैक को खोया-पाया बॉक्स में रख देते हैं।', es: 'Me alegro de ayudar. Pongamos la mochila en la caja de objetos perdidos.' }
      ]
    },
    {
      title: 'Coffee Cups at the Break Room',
      context: 'Nina and Sam are identifying their drinks.',
      charA: { name: 'Nina', av: '👩', role: 'Colleague' },
      charB: { name: 'Sam', av: '👨', role: 'Colleague' },
      turns: [
        { spk: 'Nina', text: 'Excuse me Sam, is this hot latte yours or hers?', hi: 'माफ़ कीजिए सैम, यह गर्म लट्टे आपकी है या उसकी?', es: 'Disculpa Sam, ¿este café con leche caliente es tuyo o de ella?' },
        { spk: 'Sam', text: 'The latte is mine. The green tea over there is hers.', hi: 'लट्टे मेरा है। वहाँ रखी ग्रीन टी उसकी है।', es: 'El café con leche es mío. El té verde de allí es de ella.' },
        { spk: 'Nina', text: 'Great, and what about this chocolate muffin? Is it ours to share?', hi: 'बढ़िया, और इस चॉकलेट मफिन के बारे में क्या? क्या यह हमारे साझा करने के लिए है?', es: 'Genial, ¿y qué hay de este muffin de chocolate? ¿Es nuestro para compartir?' },
        { spk: 'Sam', text: 'Yes, our boss bought it for all of us!', hi: 'हाँ, हमारे बॉस ने इसे हम सभी के लिए खरीदा है!', es: '¡Sí, nuestro jefe lo compró para todos nosotros!' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u03_l34_p1', type: 'multiple_choice', prompt: 'Choose the correct possessive pronoun: "This is not my umbrella; ___ is blue."', targetSentence: 'This is not my umbrella; mine is blue.', options: [{ id: '1', text: 'mine', isCorrect: true }, { id: '2', text: 'my', isCorrect: false }, { id: '3', text: 'me', isCorrect: false }, { id: '4', text: 'myself', isCorrect: false }] },
    { id: 'ex_u03_l34_p2', type: 'fill_blank', prompt: 'Select the question word: "___ wallet is this on the floor?"', targetSentence: 'Whose wallet is this on the floor?', options: [{ id: '1', text: 'Whose', isCorrect: true }, { id: '2', text: 'Who\'s', isCorrect: false }, { id: '3', text: 'Who', isCorrect: false }, { id: '4', text: 'Whom', isCorrect: false }] },
    { id: 'ex_u03_l34_p3', type: 'word_ordering', prompt: 'Assemble the sentence about possession:', targetSentence: 'That new silver car belongs to them', wordBank: ['That', 'new', 'silver', 'car', 'belongs', 'to', 'them', 'theirs', 'is'] },
    { id: 'ex_u03_l34_p4', type: 'listening', prompt: 'Listen to the audio and identify the owner:', audioText: 'The green notebook on the table is hers.', options: [{ id: '1', text: 'It belongs to her (hers)', isCorrect: true }, { id: '2', text: 'It belongs to me (mine)', isCorrect: false }, { id: '3', text: 'It belongs to him (his)', isCorrect: false }, { id: '4', text: 'It belongs to everyone', isCorrect: false }] },
    { id: 'ex_u03_l34_p5', type: 'error_correction', prompt: 'Fix the possessive pronoun spelling error:', targetSentence: 'Is this red backpack yours or hers?', errorSentence: 'Is this red backpack your\'s or her\'s?', options: [{ id: '1', text: 'Is this red backpack yours or hers?', isCorrect: true }, { id: '2', text: 'Is this red backpack your or her?', isCorrect: false }, { id: '3', text: 'Is this backpack you or she?', isCorrect: false }, { id: '4', text: 'Is this backpack yourself or herself?', isCorrect: false }] },
    { id: 'ex_u03_l34_p6', type: 'dialogue_completion', prompt: 'Choose the most natural answer:', dialogueContext: { speakerA: 'Chloe', lineA: 'Whose keys are these on the desk?', speakerB: 'Oliver' }, options: [{ id: '1', text: 'They are mine, thank you for finding them!', isCorrect: true }, { id: '2', text: 'They are my keys is mine.', isCorrect: false }, { id: '3', text: 'It is whose.', isCorrect: false }, { id: '4', text: 'They belong for my.', isCorrect: false }] },
    { id: 'ex_u03_l34_p7', type: 'translation', prompt: 'Translate this question into English:', sourceSentence: 'कुर्सी पर यह काली छतरी किसकी है?', sourceTranslations: { hi: 'कुर्सी पर यह काली छतरी किसकी है?', es: '¿De quién es este paraguas negro en la silla?' }, targetSentence: 'Whose black umbrella is this on the chair', wordBank: ['Whose', 'black', 'umbrella', 'is', 'this', 'on', 'the', 'chair', 'Who\'s', 'at'] },
    { id: 'ex_u03_l34_p8', type: 'speaking', prompt: 'Speak this statement clearly into your microphone:', targetSentence: 'This phone charger is mine, not yours.', audioText: 'This phone charger is mine, not yours.' },
    { id: 'ex_u03_l34_p9', type: 'listen_and_type', prompt: 'Listen to the audio and assemble the sentence:', audioText: 'Our house has a garden, but theirs is bigger.', targetSentence: 'Our house has a garden but theirs is bigger', wordBank: ['Our', 'house', 'has', 'a', 'garden', 'but', 'theirs', 'is', 'bigger', 'their', 'ours'] },
    { id: 'ex_u03_l34_p10', type: 'multiple_choice', prompt: 'Which sentence correctly replaces "This is her coat"?', targetSentence: 'This coat is hers.', options: [{ id: '1', text: 'This coat is hers.', isCorrect: true }, { id: '2', text: 'This coat is her\'s.', isCorrect: false }, { id: '3', text: 'This coat is her.', isCorrect: false }, { id: '4', text: 'This coat is she.', isCorrect: false }] },
    { id: 'ex_u03_l34_p11', type: 'fill_blank', prompt: 'Choose the correct word: "We won the prize; the trophy is ___ (we)."', targetSentence: 'We won the prize; the trophy is ours.', options: [{ id: '1', text: 'ours', isCorrect: true }, { id: '2', text: 'our', isCorrect: false }, { id: '3', text: 'us', isCorrect: false }, { id: '4', text: 'our\'s', isCorrect: false }] },
    { id: 'ex_u03_l34_p12', type: 'match_pairs', prompt: 'Match the possessive adjectives with their possessive pronouns:', options: [{ id: 'm1', text: 'my' }, { id: 'm1_m', text: 'mine' }, { id: 'm2', text: 'your' }, { id: 'm2_m', text: 'yours' }, { id: 'm3', text: 'her' }, { id: 'm3_m', text: 'hers' }, { id: 'm4', text: 'our' }, { id: 'm4_m', text: 'ours' }] },
    { id: 'ex_u03_l34_p13', type: 'word_ordering', prompt: 'Assemble the sentence identifying lost items:', targetSentence: 'Someone left this water bottle in the conference room', wordBank: ['Someone', 'left', 'this', 'water', 'bottle', 'in', 'the', 'conference', 'room', 'their', 'whose'] },
    { id: 'ex_u03_l34_p14', type: 'multiple_choice', prompt: 'Which sentence is grammatically correct?', targetSentence: 'Whose glasses are these?', options: [{ id: '1', text: 'Whose glasses are these?', isCorrect: true }, { id: '2', text: 'Who\'s glasses are these?', isCorrect: false }, { id: '3', text: 'Whose glasses is these?', isCorrect: false }, { id: '4', text: 'Whose is glasses?', isCorrect: false }] },
    { id: 'ex_u03_l34_p15', type: 'fill_blank', prompt: 'Complete the sentence with the correct pronoun: "I have my ticket, do you have ___?"', targetSentence: 'I have my ticket, do you have yours?', options: [{ id: '1', text: 'yours', isCorrect: true }, { id: '2', text: 'your', isCorrect: false }, { id: '3', text: 'you', isCorrect: false }, { id: '4', text: 'your\'s', isCorrect: false }] }
  ],
  reviewExercises: [
    { id: 'ex_u03_l34_rev1', type: 'multiple_choice', prompt: 'Select the sentence with correct possessive pronoun usage:', targetSentence: 'The blue jacket is his, and the yellow one is hers.', options: [{ id: '1', text: 'The blue jacket is his, and the yellow one is hers.', isCorrect: true }, { id: '2', text: 'The blue jacket is him, and the yellow one is her.', isCorrect: false }, { id: '3', text: 'The blue jacket is his\'s, and the yellow one is her\'s.', isCorrect: false }, { id: '4', text: 'The blue jacket is he, and the yellow one is she.', isCorrect: false }] },
    { id: 'ex_u03_l34_rev2', type: 'word_ordering', prompt: 'Build the sentence about belonging:', targetSentence: 'This leather wallet belongs to my grandfather', wordBank: ['This', 'leather', 'wallet', 'belongs', 'to', 'my', 'grandfather', 'for', 'mine'] },
    { id: 'ex_u03_l34_rev3', type: 'fill_blank', prompt: 'Complete the sentence: "We took the lost keys to the hotel ___ and found."', targetSentence: 'We took the lost keys to the hotel lost and found.', options: [{ id: '1', text: 'lost', isCorrect: true }, { id: '2', text: 'lose', isCorrect: false }, { id: '3', text: 'losing', isCorrect: false }, { id: '4', text: 'loser', isCorrect: false }] },
    { id: 'ex_u03_l34_rev4', type: 'error_correction', prompt: 'Correct the pronoun error:', targetSentence: 'These shoes are mine and those are yours.', errorSentence: 'These shoes are my and those are your.', options: [{ id: '1', text: 'These shoes are mine and those are yours.', isCorrect: true }, { id: '2', text: 'These shoes are me and those are you.', isCorrect: false }, { id: '3', text: 'These shoes are my\'s and those are your\'s.', isCorrect: false }, { id: '4', text: 'These shoes are mine and those are you.', isCorrect: false }] },
    { id: 'ex_u03_l34_rev5', type: 'translation', prompt: 'Translate into English:', sourceSentence: 'यह कमरा हमारा है, और वह उनका है।', sourceTranslations: { hi: 'यह कमरा हमारा है, और वह उनका है।', es: 'Esta habitación es nuestra y esa es de ellos.' }, targetSentence: 'This room is ours and that one is theirs', wordBank: ['This', 'room', 'is', 'ours', 'and', 'that', 'one', 'is', 'theirs', 'our', 'their'] }
  ],
  assessmentExercises: [
    { id: 'ex_u03_l34_a1', type: 'multiple_choice', prompt: 'Which sentence correctly answers "Whose laptop is this?"', targetSentence: 'It is mine.', options: [{ id: '1', text: 'It is mine.', isCorrect: true }, { id: '2', text: 'It is my.', isCorrect: false }, { id: '3', text: 'It is me laptop.', isCorrect: false }, { id: '4', text: 'It is to me.', isCorrect: false }] },
    { id: 'ex_u03_l34_a2', type: 'fill_blank', prompt: 'Fill in the blank with the correct possessive pronoun: "They claimed the car was ___ (they)."', targetSentence: 'They claimed the car was theirs.', options: [{ id: '1', text: 'theirs', isCorrect: true }, { id: '2', text: 'their', isCorrect: false }, { id: '3', text: 'them', isCorrect: false }, { id: '4', text: 'their\'s', isCorrect: false }] },
    { id: 'ex_u03_l34_a3', type: 'word_ordering', prompt: 'Assemble the question asking whose coat it is:', targetSentence: 'Whose warm winter coat is this on the sofa', wordBank: ['Whose', 'warm', 'winter', 'coat', 'is', 'this', 'on', 'the', 'sofa', 'Who\'s', 'are'] },
    { id: 'ex_u03_l34_a4', type: 'listening', prompt: 'Listen to the audio and answer the question:', audioText: 'Are these reading glasses on the counter yours or his?', options: [{ id: '1', text: 'Asking whether the glasses belong to the listener or another man', isCorrect: true }, { id: '2', text: 'Asking who bought the glasses', isCorrect: false }, { id: '3', text: 'Asking the price of the glasses', isCorrect: false }, { id: '4', text: 'Stating that the glasses are broken', isCorrect: false }] },
    { id: 'ex_u03_l34_a5', type: 'speaking', prompt: 'Speak this statement clearly into your microphone:', targetSentence: 'Whose keys are these? I found them on the front desk.', audioText: 'Whose keys are these? I found them on the front desk.' }
  ]
};

saveLessonFile(compileLesson(RAW_LESSON_34));
console.log('Saved Lesson 34.');
