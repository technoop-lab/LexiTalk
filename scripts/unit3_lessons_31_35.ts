import { LessonRaw, compileLesson, saveLessonFile } from './generate_all_unit3';

// =========================================================================
// LESSON 33: Object Pronouns & Giving Gifts/Help (me, you, him, her, it, us, them)
// =========================================================================
export const RAW_LESSON_33: LessonRaw = {
  num: 33,
  id: 'lesson_a1_3_33',
  title: 'Object Pronouns & Giving Gifts or Help (me, you, him, her, it, us, them)',
  icon: '🎁',
  estMin: 25,
  objTitle: 'Using Direct & Indirect Object Pronouns to Offer Help and Describe Giving or Sending',
  objDesc: 'Master English object pronouns (me, you, him, her, it, us, them) in contrast to subject pronouns. Learn sentence structures with verbs taking two objects ("give me the book", "send him a message", "tell us the story"), offering help, and giving gifts.',
  objHi: 'ऑब्जेक्ट सर्वनामों (me, you, him, her, it, us, them) का प्रयोग सीखें। "Give me the pen", "Help us", "Send him an email" जैसे वाक्यों के माध्यम से मदद देने और उपहार देने का अभ्यास करें।',
  objEs: 'Domina los pronombres de objeto (me, you, him, her, it, us, them). Aprende estructuras con verbos de dos objetos ("give me the book", "send him a message"), ofrecer ayuda y dar regalos.',
  canDo: [
    'Use object pronouns after transitive verbs: "Please help me with this box"',
    'Distinguish subject vs object pronouns: "He sees her" vs "She sees him"',
    'Express giving and sending: "I will give him the gift tomorrow"',
    'Offer assistance courteously: "Can I help you with your luggage?"',
    'Refer to people and objects using pronouns: "I like these shoes, I will buy them"'
  ],
  canDoHi: [
    'क्रिया के बाद ऑब्जेक्ट सर्वनाम का प्रयोग: "Help me, please"',
    'सब्जेक्ट और ऑब्जेक्ट में अंतर: "I call him", "He calls me"',
    'उपहार और संदेश देना: "Send her an email"',
    'मदद की पेशकश करना: "Can you help us?"'
  ],
  canDoEs: [
    'Usar pronombres objeto: "Please help me"',
    'Diferenciar sujeto y objeto: "I see him / He sees me"',
    'Expresar dar y enviar: "Give her the flowers"',
    'Ofrecer ayuda: "Can I help you?"'
  ],
  vocab: [
    { w: 'gift / present', p: '/ɡɪft/ /ˈprez.ənt/', m: 'Something given willingly to someone without payment', hi: 'उपहार / तोहफा', es: 'regalo / presente', fr: 'cadeau', de: 'Geschenk', pt: 'presente', zh: '礼物', ar: 'هدية', ja: '贈り物 / プレゼント', ru: 'подарок', ex: 'This birthday gift is for you.', exHi: 'यह जन्मदिन का तोहफा आपके लिए है।', exEs: 'Este regalo de cumpleaños es para ti.', ic: '🎁' },
    { w: 'help / assistance', p: '/help/ /əˈsɪs.təns/', m: 'Making it easier for someone to do something', hi: 'मदद / सहायता', es: 'ayuda / asistencia', fr: 'aide', de: 'Hilfe', pt: 'ajuda', zh: '帮助', ar: 'مساعدة', ja: '手伝い / 援助', ru: 'помощь', ex: 'Can you give me some help with this heavy bag?', exHi: 'क्या आप इस भारी बैग में मेरी कुछ मदद कर सकते हैं?', exEs: '¿Puedes ayudarme con esta bolsa pesada?', ic: '🤝' },
    { w: 'send', p: '/send/', m: 'To cause something to go to another place by mail or digitally', hi: 'भेजना', es: 'enviar / mandar', fr: 'envoyer', de: 'senden / schicken', pt: 'enviar', zh: '发送 / 寄', ar: 'يرسل', ja: '送る', ru: 'отправлять', ex: 'Please send us the report by Friday afternoon.', exHi: 'कृपया शुक्रवार दोपहर तक हमें रिपोर्ट भेजें।', exEs: 'Por favor envíanos el informe para el viernes por la tarde.', ic: '📤' },
    { w: 'give', p: '/ɡɪv/', m: 'To transfer the possession of something to someone', hi: 'देना', es: 'dar / entregar', fr: 'donner', de: 'geben', pt: 'dar', zh: '给 / 送', ar: 'يعطي', ja: 'あげる / 渡す', ru: 'давать', ex: 'I want to give him a watch for his birthday.', exHi: 'मैं उसके जन्मदिन पर उसे एक घड़ी देना चाहता हूँ।', exEs: 'Quiero darle un reloj por su cumpleaños.', ic: '🤲' },
    { w: 'show', p: '/ʃoʊ/', m: 'To allow something to be visible to someone', hi: 'दिखाना', es: 'mostrar / enseñar', fr: 'montrer', de: 'zeigen', pt: 'mostrar', zh: '展示 / 给……看', ar: 'يُري / يوضح', ja: '見せる', ru: 'показывать', ex: 'Can you show me the way to the train station?', exHi: 'क्या आप मुझे रेलवे स्टेशन का रास्ता दिखा सकते हैं?', exEs: '¿Puedes mostrarme el camino a la estación de tren?', ic: '👀' },
    { w: 'tell', p: '/tel/', m: 'To communicate information, facts, or a story to someone', hi: 'बताना / कहना', es: 'contar / decir', fr: 'dire / raconter', de: 'erzählen / sagen', pt: 'contar / dizer', zh: '告诉', ar: 'يخبر', ja: '伝える / 教える', ru: 'рассказывать / говорить', ex: 'Please tell them the meeting starts at nine.', exHi: 'कृपया उन्हें बताएं कि बैठक नौ बजे शुरू होगी।', exEs: 'Por favor diles que la reunión empieza a las nueve.', ic: '🗣️' },
    { w: 'bring', p: '/brɪŋ/', m: 'To carry or take something along to a place or person', hi: 'लाना', es: 'traer', fr: 'apporter', de: 'bringen / mitbringen', pt: 'trazer', zh: '带来', ar: 'يحضر / يجلب', ja: '持ってくる', ru: 'приносить', ex: 'Could you bring us two glasses of water, please?', exHi: 'क्या आप कृपया हमारे लिए पानी के दो गिलास ला सकते हैं?', exEs: '¿Podría traernos dos vasos de agua, por favor?', ic: '🥛' },
    { w: 'ask', p: '/æsk/', m: 'To say something in order to obtain an answer or favor', hi: 'पूछना / मांगना', es: 'preguntar / pedir', fr: 'demander', de: 'fragen / bitten', pt: 'perguntar / pedir', zh: '问 / 询问', ar: 'يسأل / يطلب', ja: '尋ねる / 頼む', ru: 'спрашивать / просить', ex: 'If you have a question, ask him directly.', exHi: 'यदि आपके पास कोई प्रश्न है, तो सीधे उससे पूछें।', exEs: 'Si tienes alguna pregunta, pregúntale directamente.', ic: '❓' },
    { w: 'call', p: '/kɑːl/', m: 'To contact someone by phone', hi: 'फ़ोन करना / बुलाना', es: 'llamar', fr: 'appeler', de: 'anrufen', pt: 'ligar / chamar', zh: '打电话 / 呼叫', ar: 'يتصل / ينادي', ja: '電話する / 呼ぶ', ru: 'звонить / звать', ex: 'I will call you as soon as I arrive at the hotel.', exHi: 'होटल पहुंचते ही मैं आपको फोन करूंगा।', exEs: 'Te llamaré tan pronto como llegue al hotel.', ic: '📞' },
    { w: 'lend', p: '/lend/', m: 'To grant someone the use of something on condition that it will be returned', hi: 'उधार देना', es: 'prestar', fr: 'prêter', de: 'leihen / verleihen', pt: 'emprestar', zh: '借给（某人）', ar: 'يقرض / يُعير', ja: '貸す', ru: 'одалживать (давать взаймы)', ex: 'Can you lend me your pen for a second?', exHi: 'क्या आप मुझे एक सेकंड के लिए अपना पेन उधार दे सकते हैं?', exEs: '¿Puedes prestarme tu bolígrafo un segundo?', ic: '🖊️' },
    { w: 'borrow', p: '/ˈbɑːr.oʊ/', m: 'To receive something with the promise of returning it', hi: 'उधार लेना', es: 'pedir prestado / tomar prestado', fr: 'emprunter', de: 'borgen / sich leihen', pt: 'pedir emprestado', zh: '借入（向某人）', ar: 'يستعير / يستلف', ja: '借りる', ru: 'брать взаймы', ex: 'May I borrow this book from you for the weekend?', exHi: 'क्या मैं सप्ताहांत के लिए आपसे यह पुस्तक उधार ले सकता हूँ?', exEs: '¿Puedo tomar prestado este libro durante el fin de semana?', ic: '📚' },
    { w: 'colleague', p: '/ˈkɑː.liːɡ/', m: 'A person with whom one works in a profession or business', hi: 'सहकर्मी / साथ काम करने वाला', es: 'colega / compañero de trabajo', fr: 'collègue', de: 'Kollege / Kollegin', pt: 'colega de trabalho', zh: '同事', ar: 'زميل عمل', ja: '同僚', ru: 'коллега', ex: 'I bought lunch for my colleague today.', exHi: 'मैंने आज अपने सहकर्मी के लिए दोपहर का भोजन खरीदा।', exEs: 'Hoy le compré el almuerzo a mi compañero de trabajo.', ic: '💼' },
    { w: 'neighbor', p: '/ˈneɪ.bɚ/', m: 'A person living next door or very near to you', hi: 'पड़ोसी', es: 'vecino/a', fr: 'voisin / voisine', de: 'Nachbar / Nachbarin', pt: 'vizinho/a', zh: '邻居', ar: 'جار', ja: '近所の人 / 隣人', ru: 'сосед / соседка', ex: 'We gave our neighbors some fresh apples from our garden.', exHi: 'हमने अपने पड़ोसियों को अपने बगीचे से कुछ ताजे सेब दिए।', exEs: 'Le dimos a nuestros vecinos unas manzanas frescas de nuestro jardín.', ic: '🏡' },
    { w: 'message', p: '/ˈmes.ɪdʒ/', m: 'A piece of information sent from one person to another', hi: 'संदेश / मैसेज', es: 'mensaje', fr: 'message', de: 'Nachricht', pt: 'mensagem', zh: '留言 / 信息', ar: 'رسالة', ja: 'メッセージ / 伝言', ru: 'сообщение', ex: 'Did you get the message I sent you earlier?', exHi: 'क्या आपको वह संदेश मिला जो मैंने आपको पहले भेजा था?', exEs: '¿Recibiste el mensaje que te envié antes?', ic: '✉️' },
    { w: 'package / parcel', p: '/ˈpæk.ɪdʒ/ /ˈpɑːr.səl/', m: 'An object wrapped in paper or packed in a box for delivery', hi: 'पार्सल / पैकेज', es: 'paquete / bulto', fr: 'colis / paquet', de: 'Paket / Päckchen', pt: 'pacote / encomenda', zh: '包裹', ar: 'طرد / رزمة', ja: '小包 / 配達物', ru: 'посылка / пакет', ex: 'The courier delivered a heavy package to us.', exHi: 'कूरियर ने हमें एक भारी पैकेज पहुंचाया।', exEs: 'El mensajero nos entregó un paquete pesado.', ic: '📦' },
    { w: 'flower', p: '/ˈflaʊ.ɚ/', m: 'The colorful bloom of a plant, often given as a gift', hi: 'फूल', es: 'flor', fr: 'fleur', de: 'Blume', pt: 'flor', zh: '花朵', ar: 'زهرة / وردة', ja: '花', ru: 'цветок', ex: 'He brought her a beautiful bouquet of red flowers.', exHi: 'वह उसके लिए लाल फूलों का एक सुंदर गुलदस्ता लाया।', exEs: 'Él le trajo un hermoso ramo de flores rojas.', ic: '💐' },
    { w: 'surprise', p: '/sɚˈpraɪz/', m: 'An unexpected or astonishing event or thing', hi: 'आश्चर्य / सरप्राइज', es: 'sorpresa', fr: 'surprise', de: 'Überraschung', pt: 'surpresa', zh: '惊喜', ar: 'مفاجأة', ja: 'サプライズ / 驚き', ru: 'сюрприз', ex: 'We prepared a wonderful surprise party for them.', exHi: 'हमने उनके लिए एक शानदार सरप्राइज पार्टी तैयार की।', exEs: 'Les preparamos una maravillosa fiesta sorpresa.', ic: '🎉' },
    { w: 'favor', p: '/ˈfeɪ.vɚ/', m: 'An act of kindness beyond what is due or usual', hi: 'उपकार / एहसान / मदद', es: 'favor', fr: 'service / faveur', de: 'Gefallen', pt: 'favor', zh: '恩惠 / 帮忙', ar: 'معروف / خدمة', ja: '親切な行為 / お願い', ru: 'одолжение / услуга', ex: 'Could you do me a quick favor, please?', exHi: 'क्या आप कृपया मुझ पर एक छोटा सा उपकार कर सकते हैं?', exEs: '¿Podrías hacerme un favor rápido, por favor?', ic: '🙏' },
    { w: 'card', p: '/kɑːrd/', m: 'A piece of thick paper with a message sent on special occasions', hi: 'ग्रीटिंग कार्ड', es: 'tarjeta de felicitación', fr: 'carte', de: 'Karte / Glückwunschkarte', pt: 'cartão', zh: '贺卡', ar: 'بطاقة معايدة', ja: 'カード', ru: 'открытка', ex: 'She wrote a sweet thank-you card to us.', exHi: 'उसने हमारे लिए एक प्यारा धन्यवाद कार्ड लिखा।', exEs: 'Ella nos escribió una hermosa tarjeta de agradecimiento.', ic: '💌' },
    { w: 'thank', p: '/θæŋk/', m: 'To express gratitude to someone', hi: 'धन्यवाद देना', es: 'agradecer / dar las gracias', fr: 'remercier', de: 'danken / bedanken', pt: 'agradecer', zh: '感谢', ar: 'يشكر', ja: '感謝する', ru: 'благодарить', ex: 'I must thank him for helping us yesterday.', exHi: 'मुझे कल हमारी मदद करने के लिए उसका धन्यवाद करना चाहिए।', exEs: 'Debo agradecerle por ayudarnos ayer.', ic: '🌟' }
  ],
  chunks: [
    { phrase: 'Can you help me, please?', meaning: 'Polite everyday request for assistance', hi: 'क्या आप कृपया मेरी मदद कर सकते हैं?', es: '¿Puedes ayudarme, por favor?', fr: 'Pouvez-vous m\'aider, s\'il vous plaît ?', de: 'Können Sie mir bitte helfen?', pt: 'Pode me ajudar, por favor?', zh: '你能帮帮我吗？', ar: 'هل يمكنك مساعدتي من فضلك؟', ja: '手伝っていただけますか？', ru: 'Не могли бы вы мне помочь?', note: '"me" is the object pronoun for "I"', ic: '🤝' },
    { phrase: 'Give it to him.', meaning: 'Handing an object to a male third party', hi: 'यह उसे दे दो।', es: 'Dáselo a él.', fr: 'Donne-le-lui.', de: 'Gib es ihm.', pt: 'Dê isto a ele.', zh: '把这个给他。', ar: 'أعطه إياه.', ja: 'それを彼に渡してください。', ru: 'Отдай это ему.', note: 'Direct object "it" + to + indirect object "him"', ic: '🤲' },
    { phrase: 'I will call you later.', meaning: 'Promise to phone the listener', hi: 'मैं आपको बाद में फोन करूंगा।', es: 'Te llamaré más tarde.', fr: 'Je t\'appellerai plus tard.', de: 'Ich rufe dich später an.', pt: 'Te ligo mais tarde.', zh: '我稍后给你打电话。', ar: 'سأتصل بك لاحقاً.', ja: '後で電話します。', ru: 'Я позвоню тебе позже.', note: '"you" is both subject and object pronoun', ic: '📞' },
    { phrase: 'Send us an email.', meaning: 'Instruction to transmit electronic mail to our group', hi: 'हमें एक ईमेल भेजें।', es: 'Envíanos un correo electrónico.', fr: 'Envoyez-nous un e-mail.', de: 'Schicken Sie uns eine E-Mail.', pt: 'Envie-nos um e-mail.', zh: '发电子邮件给我们。', ar: 'أرسل لنا رسالة بريد إلكتروني.', ja: '私たちにメールを送ってください。', ru: 'Отправьте нам электронное письмо.', note: '"us" is the object pronoun for "we"', ic: '✉️' },
    { phrase: 'Show them the pictures.', meaning: 'Displaying visual media to a group', hi: 'उन्हें तस्वीरें दिखाओ।', es: 'Muéstrales las fotos.', fr: 'Montre-leur les photos.', de: 'Zeig ihnen die Bilder.', pt: 'Mostre a eles as fotos.', zh: '给他们看看照片。', ar: 'أرهم الصور.', ja: '彼らに写真を見せてあげてください。', ru: 'Покажи им фотографии.', note: '"them" is the object pronoun for "they"', ic: '📸' },
    { phrase: 'This gift is for her.', meaning: 'Expressing the recipient of a present', hi: 'यह उपहार उसके लिए है।', es: 'Este regalo es para ella.', fr: 'Ce cadeau est pour elle.', de: 'Dieses Geschenk ist für sie.', pt: 'Este presente é para ela.', zh: '这份礼物是送给她的。', ar: 'هذه الهدية لها.', ja: 'このプレゼントは彼女へのものです。', ru: 'Этот подарок для нее.', note: 'Preposition "for" + object pronoun "her"', ic: '🎁' },
    { phrase: 'Could you do me a favor?', meaning: 'Polite conversational inquiry before asking for help', hi: 'क्या आप मुझ पर एक उपकार कर सकते हैं?', es: '¿Podrías hacerme un favor?', fr: 'Pourriez-vous me rendre un service ?', de: 'Könnten Sie mir einen Gefallen tun?', pt: 'Poderia me fazer um favor?', zh: '你能帮我一个忙吗？', ar: 'هل يمكنك أن تسدي لي معروفاً؟', ja: 'お願いを聞いていただけますか？', ru: 'Не могли бы вы сделать мне одолжение?', note: 'Standard courteous lead-in chunk', ic: '🙏' },
    { phrase: 'Thanks for helping us!', meaning: 'Gratitude expression for collective assistance', hi: 'हमारी मदद करने के लिए धन्यवाद!', es: '¡Gracias por ayudarnos!', fr: 'Merci de nous avoir aidés !', de: 'Danke, dass Sie uns geholfen haben!', pt: 'Obrigado por nos ajudar!', zh: '谢谢你帮助我们！', ar: 'شكراً لمساعدتك لنا!', ja: '手伝ってくれてありがとう！', ru: 'Спасибо, что помогли нам!', note: '"Thanks for" + verb-ing + object pronoun', ic: '🌟' }
  ],
  grammar: {
    title: 'Subject vs. Object Pronouns & Double-Object Verbs',
    concept: 'Replacing recipient and patient nouns with me, you, him, her, it, us, them',
    patterns: [
      {
        title: 'Subject Pronoun vs. Object Pronoun Mapping',
        structure: 'Subject (I, you, he, she, it, we, they) vs Object (me, you, him, her, it, us, them)',
        rule: 'Use subject pronouns before the verb (as the doer) and object pronouns after verbs and prepositions (as the receiver).',
        examples: [
          { en: 'She loves him, and he loves her.', hi: 'वह उससे प्यार करती है, और वह उससे प्यार करता है।', es: 'Ella lo ama a él, y él la ama a ella.' },
          { en: 'We invited them, but they did not see us.', hi: 'हमने उन्हें आमंत्रित किया, लेकिन उन्होंने हमें नहीं देखा।', es: 'Nosotros los invitamos a ellos, pero ellos no nos vieron a nosotros.' }
        ]
      },
      {
        title: 'Verbs with Two Objects: Give / Send / Show / Tell',
        structure: 'Verb + [indirect object pronoun] + [direct object noun] (e.g., Give me the pen)',
        rule: 'Pattern 1: Verb + Person + Thing ("Give me the key"). Pattern 2: Verb + Thing + to + Person ("Give the key to me").',
        examples: [
          { en: 'Could you please give me that document?', hi: 'क्या आप कृपया मुझे वह दस्तावेज़ दे सकते हैं?', es: '¿Podría darme ese documento, por favor?' },
          { en: 'I sent her a birthday message this morning.', hi: 'मैंने आज सुबह उसे जन्मदिन का संदेश भेजा।', es: 'Le envié un mensaje de cumpleaños esta mañana.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'Please help I with my homework.', cor: 'Please help me with my homework.', exp: 'Use object pronoun "me" after the verb "help", not subject pronoun "I".', hi: 'क्रिया के बाद ऑब्जेक्ट सर्वनाम "me" आता है, "I" नहीं।', es: 'Usa el pronombre objeto "me" después del verbo, no "I".' },
    { inc: 'I saw he at the supermarket yesterday.', cor: 'I saw him at the supermarket yesterday.', exp: 'Use object pronoun "him" after the transitive verb "saw".', hi: 'क्रिया के बाद "him" आएगा, "he" नहीं।', es: 'Usa "him" como objeto directo, no "he".' },
    { inc: 'Give to me the key.', cor: 'Give me the key. / Give the key to me.', exp: 'Do not use "to" directly before the object pronoun in the verb+person+thing structure.', hi: '"Give me the key" कहें या "Give the key to me"।', es: 'Se dice "Give me the key" o "Give the key to me", no "Give to me the key".' },
    { inc: 'This coffee is for he.', cor: 'This coffee is for him.', exp: 'Prepositions (for, with, to, at, about) must be followed by object pronouns.', hi: 'पूर्वसर्ग (for, to, with) के बाद ऑब्जेक्ट सर्वनाम (him, her, us) आता है।', es: 'Las preposiciones siempre van seguidas de pronombres objeto (him, her, them).' },
    { inc: 'Tell they the good news.', cor: 'Tell them the good news.', exp: 'Use object pronoun "them", not subject pronoun "they".', hi: '"Tell them" सही है, "Tell they" नहीं।', es: 'Usa "them" como objeto, no "they".' }
  ],
  dialogues: [
    {
      title: 'Birthday Gift Exchange in the Office',
      context: 'Emma and Liam are preparing a surprise present for their coworker Maria.',
      charA: { name: 'Emma', av: '👩‍💼', role: 'Colleague' },
      charB: { name: 'Liam', av: '👨‍💼', role: 'Colleague' },
      turns: [
        { spk: 'Emma', text: 'Liam, do you have the gift for Maria?', hi: 'लियाम, क्या तुम्हारे पास मारिया के लिए उपहार है?', es: 'Liam, ¿tienes el regalo para María?' },
        { spk: 'Liam', text: 'Yes, I bought it yesterday. Look, I can show it to you.', hi: 'हाँ, मैंने इसे कल खरीदा था। देखो, मैं इसे तुम्हें दिखा सकता हूँ।', es: 'Sí, lo compré ayer. Mira, te lo puedo mostrar.' },
        { spk: 'Emma', text: 'It is a beautiful scarf! She will love it. Let\'s give it to her during lunchtime.', hi: 'यह एक बहुत सुंदर स्कार्फ है! वह इसे बहुत पसंद करेगी। चलो दोपहर के भोजन के समय उसे यह देते हैं।', es: '¡Es una bufanda hermosa! Le va a encantar. Démosela a la hora del almuerzo.' },
        { spk: 'Liam', text: 'Great idea. Could you write a nice card for us?', hi: 'बढ़िया विचार है। क्या तुम हमारे लिए एक अच्छा कार्ड लिख सकती हो?', es: 'Excelente idea. ¿Podrías escribir una linda tarjeta para nosotros?' },
        { spk: 'Emma', text: 'Of course, pass me the pen and I will write it right now.', hi: 'बेशक, मुझे पेन दो और मैं इसे अभी लिख देती हूँ।', es: 'Por supuesto, pásame el bolígrafo y la escribo ahora mismo.' }
      ]
    },
    {
      title: 'Asking for Moving Help',
      context: 'Alex asks his neighbor Robert for assistance carrying furniture.',
      charA: { name: 'Alex', av: '👨', role: 'Neighbor' },
      charB: { name: 'Robert', av: '👨‍🌾', role: 'Neighbor' },
      turns: [
        { spk: 'Alex', text: 'Hello Robert! Could you do me a quick favor?', hi: 'नमस्ते रॉबर्ट! क्या आप मुझ पर एक छोटा सा उपकार कर सकते हैं?', es: '¡Hola Robert! ¿Podrías hacerme un favor rápido?' },
        { spk: 'Robert', text: 'Sure Alex, what do you need?', hi: 'ज़रूर एलेक्स, आपको क्या चाहिए?', es: 'Claro Alex, ¿qué necesitas?' },
        { spk: 'Alex', text: 'This sofa is very heavy. Can you help me carry it into the living room?', hi: 'यह सोफा बहुत भारी है। क्या आप इसे लिविंग रूम में ले जाने में मेरी मदद कर सकते हैं?', es: 'Este sofá es muy pesado. ¿Puedes ayudarme a llevarlo a la sala de estar?' },
        { spk: 'Robert', text: 'No problem at all! Let\'s lift it together on the count of three.', hi: 'कोई बात नहीं! चलो तीन की गिनती पर इसे एक साथ उठाते हैं।', es: '¡Ningún problema! Levantémoslo juntos a la cuenta de tres.' },
        { spk: 'Alex', text: 'Thank you so much for helping me!', hi: 'मेरी मदद करने के लिए आपका बहुत-बहुत धन्यवाद!', es: '¡Muchas gracias por ayudarme!' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u03_l33_p1', type: 'multiple_choice', prompt: 'Select the correct object pronoun to complete: "Maria called ___ yesterday to invite us."', targetSentence: 'Maria called me yesterday to invite us.', options: [{ id: '1', text: 'me', isCorrect: true }, { id: '2', text: 'I', isCorrect: false }, { id: '3', text: 'my', isCorrect: false }, { id: '4', text: 'mine', isCorrect: false }] },
    { id: 'ex_u03_l33_p2', type: 'fill_blank', prompt: 'Choose the correct pronoun: "I bought these flowers for ___ (she)."', targetSentence: 'I bought these flowers for her.', options: [{ id: '1', text: 'her', isCorrect: true }, { id: '2', text: 'she', isCorrect: false }, { id: '3', text: 'hers', isCorrect: false }, { id: '4', text: 'herself', isCorrect: false }] },
    { id: 'ex_u03_l33_p3', type: 'word_ordering', prompt: 'Assemble the sentence with two objects:', targetSentence: 'Please send him the message right now', wordBank: ['Please', 'send', 'him', 'the', 'message', 'right', 'now', 'he', 'to'] },
    { id: 'ex_u03_l33_p4', type: 'listening', prompt: 'Listen to the audio and choose what is being requested:', audioText: 'Could you give me that book on the table, please?', options: [{ id: '1', text: 'Passing a book on the table', isCorrect: true }, { id: '2', text: 'Buying a new book', isCorrect: false }, { id: '3', text: 'Writing a note', isCorrect: false }, { id: '4', text: 'Cleaning the table', isCorrect: false }] },
    { id: 'ex_u03_l33_p5', type: 'error_correction', prompt: 'Correct the pronoun error in this sentence:', targetSentence: 'He invited us to his graduation party.', errorSentence: 'He invited we to his graduation party.', options: [{ id: '1', text: 'He invited us to his graduation party.', isCorrect: true }, { id: '2', text: 'He invited our to his party.', isCorrect: false }, { id: '3', text: 'He invited ours to graduation party.', isCorrect: false }, { id: '4', text: 'He invited they to his graduation party.', isCorrect: false }] },
    { id: 'ex_u03_l33_p6', type: 'dialogue_completion', prompt: 'Choose the correct line to complete the dialogue:', dialogueContext: { speakerA: 'Liam', lineA: 'Where is the new report?', speakerB: 'Emma' }, options: [{ id: '1', text: 'I gave it to him five minutes ago.', isCorrect: true }, { id: '2', text: 'I gave to he the report.', isCorrect: false }, { id: '3', text: 'I gave he it yesterday.', isCorrect: false }, { id: '4', text: 'I gave him to it.', isCorrect: false }] },
    { id: 'ex_u03_l33_p7', type: 'translation', prompt: 'Translate this sentence into English:', sourceSentence: 'क्या आप मुझे अपना पेन उधार दे सकते हैं?', sourceTranslations: { hi: 'क्या आप मुझे अपना पेन उधार दे सकते हैं?', es: '¿Puedes prestarme tu bolígrafo?' }, targetSentence: 'Can you lend me your pen please', wordBank: ['Can', 'you', 'lend', 'me', 'your', 'pen', 'please', 'I', 'to'] },
    { id: 'ex_u03_l33_p8', type: 'speaking', prompt: 'Speak this polite request clearly into your microphone:', targetSentence: 'Could you do me a favor and close the door?', audioText: 'Could you do me a favor and close the door?' },
    { id: 'ex_u03_l33_p9', type: 'listen_and_type', prompt: 'Listen to the audio and assemble the sentence:', audioText: 'We told them the good news this morning.', targetSentence: 'We told them the good news this morning', wordBank: ['We', 'told', 'them', 'the', 'good', 'news', 'this', 'morning', 'they', 'to'] },
    { id: 'ex_u03_l33_p10', type: 'multiple_choice', prompt: 'Which sentence correctly uses object pronouns?', targetSentence: 'My parents gave us a wonderful wedding present.', options: [{ id: '1', text: 'My parents gave us a wonderful wedding present.', isCorrect: true }, { id: '2', text: 'My parents gave we a wonderful present.', isCorrect: false }, { id: '3', text: 'My parents gave to we a present.', isCorrect: false }, { id: '4', text: 'My parents gave our a present.', isCorrect: false }] },
    { id: 'ex_u03_l33_p11', type: 'fill_blank', prompt: 'Select the missing pronoun for the object: "I see John every day, but I didn\'t talk to ___ today."', targetSentence: 'I see John every day, but I didn\'t talk to him today.', options: [{ id: '1', text: 'him', isCorrect: true }, { id: '2', text: 'he', isCorrect: false }, { id: '3', text: 'his', isCorrect: false }, { id: '4', text: 'himself', isCorrect: false }] },
    { id: 'ex_u03_l33_p12', type: 'match_pairs', prompt: 'Match the subject pronouns with their corresponding object pronouns:', options: [{ id: 'm1', text: 'I' }, { id: 'm1_m', text: 'me' }, { id: 'm2', text: 'He' }, { id: 'm2_m', text: 'him' }, { id: 'm3', text: 'She' }, { id: 'm3_m', text: 'her' }, { id: 'm4', text: 'They' }, { id: 'm4_m', text: 'them' }] },
    { id: 'ex_u03_l33_p13', type: 'word_ordering', prompt: 'Assemble the sentence offering help:', targetSentence: 'Let me carry those heavy bags for you', wordBank: ['Let', 'me', 'carry', 'those', 'heavy', 'bags', 'for', 'you', 'I', 'to'] },
    { id: 'ex_u03_l33_p14', type: 'multiple_choice', prompt: 'Which sentence means "Give the book to the teacher (female)"?', targetSentence: 'Give her the book.', options: [{ id: '1', text: 'Give her the book.', isCorrect: true }, { id: '2', text: 'Give she the book.', isCorrect: false }, { id: '3', text: 'Give to she the book.', isCorrect: false }, { id: '4', text: 'Give hers the book.', isCorrect: false }] },
    { id: 'ex_u03_l33_p15', type: 'fill_blank', prompt: 'Complete the sentence with the correct pronoun: "We are lost, can you help ___?"', targetSentence: 'We are lost, can you help us?', options: [{ id: '1', text: 'us', isCorrect: true }, { id: '2', text: 'we', isCorrect: false }, { id: '3', text: 'our', isCorrect: false }, { id: '4', text: 'ours', isCorrect: false }] }
  ],
  reviewExercises: [
    { id: 'ex_u03_l33_rev1', type: 'multiple_choice', prompt: 'Choose the sentence with correct pronoun placement:', targetSentence: 'Show me the photos from your vacation.', options: [{ id: '1', text: 'Show me the photos from your vacation.', isCorrect: true }, { id: '2', text: 'Show to I the photos.', isCorrect: false }, { id: '3', text: 'Show I the photos.', isCorrect: false }, { id: '4', text: 'Show my the photos.', isCorrect: false }] },
    { id: 'ex_u03_l33_rev2', type: 'word_ordering', prompt: 'Build the thank-you sentence:', targetSentence: 'Thank you very much for helping us today', wordBank: ['Thank', 'you', 'very', 'much', 'for', 'helping', 'us', 'today', 'we', 'to'] },
    { id: 'ex_u03_l33_rev3', type: 'fill_blank', prompt: 'Complete the sentence: "I found this phone on the seat; I will give ___ to the driver."', targetSentence: 'I found this phone on the seat; I will give it to the driver.', options: [{ id: '1', text: 'it', isCorrect: true }, { id: '2', text: 'them', isCorrect: false }, { id: '3', text: 'its', isCorrect: false }, { id: '4', text: 'they', isCorrect: false }] },
    { id: 'ex_u03_l33_rev4', type: 'error_correction', prompt: 'Correct the error in this sentence:', targetSentence: 'Can you tell them the meeting location?', errorSentence: 'Can you tell they the meeting location?', options: [{ id: '1', text: 'Can you tell them the meeting location?', isCorrect: true }, { id: '2', text: 'Can you tell their the location?', isCorrect: false }, { id: '3', text: 'Can you tell to they location?', isCorrect: false }, { id: '4', text: 'Can you tell they\'re meeting?', isCorrect: false }] },
    { id: 'ex_u03_l33_rev5', type: 'translation', prompt: 'Translate this sentence into English:', sourceSentence: 'यह सुंदर उपहार उसके (महिला) लिए है।', sourceTranslations: { hi: 'यह सुंदर उपहार उसके लिए है।', es: 'Este hermoso regalo es para ella.' }, targetSentence: 'This beautiful gift is for her', wordBank: ['This', 'beautiful', 'gift', 'is', 'for', 'her', 'she', 'hers'] }
  ],
  assessmentExercises: [
    { id: 'ex_u03_l33_a1', type: 'multiple_choice', prompt: 'Which of the following is an object pronoun?', targetSentence: 'them', options: [{ id: '1', text: 'them', isCorrect: true }, { id: '2', text: 'they', isCorrect: false }, { id: '3', text: 'their', isCorrect: false }, { id: '4', text: 'theirs', isCorrect: false }] },
    { id: 'ex_u03_l33_a2', type: 'fill_blank', prompt: 'Select the correct pronoun: "The manager wants to speak to ___ (I) in the office."', targetSentence: 'The manager wants to speak to me in the office.', options: [{ id: '1', text: 'me', isCorrect: true }, { id: '2', text: 'I', isCorrect: false }, { id: '3', text: 'my', isCorrect: false }, { id: '4', text: 'mine', isCorrect: false }] },
    { id: 'ex_u03_l33_a3', type: 'word_ordering', prompt: 'Assemble the sentence giving an item to someone:', targetSentence: 'Give her the keys before she leaves the house', wordBank: ['Give', 'her', 'the', 'keys', 'before', 'she', 'leaves', 'the', 'house', 'to', 'hers'] },
    { id: 'ex_u03_l33_a4', type: 'listening', prompt: 'Listen to the audio and identify who received the email:', audioText: 'I sent them the project files yesterday afternoon.', options: [{ id: '1', text: 'A group of people (them)', isCorrect: true }, { id: '2', text: 'A single man (him)', isCorrect: false }, { id: '3', text: 'A single woman (her)', isCorrect: false }, { id: '4', text: 'No one received it', isCorrect: false }] },
    { id: 'ex_u03_l33_a5', type: 'speaking', prompt: 'Speak this helpful sentence clearly into your microphone:', targetSentence: 'I will send you all the details in an email tomorrow.', audioText: 'I will send you all the details in an email tomorrow.' }
  ]
};
