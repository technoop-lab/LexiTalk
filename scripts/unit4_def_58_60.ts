import { LessonConfig } from './unit4_builder_helper';

// =========================================================================
// LESSON 58: Social Invitations, Plans, Accepting & Declining Politely
// =========================================================================
export const CONFIG_58: LessonConfig = {
  num: 58,
  title: 'Social Invitations, Plans, Accepting & Declining Politely',
  icon: '🎉',
  estMin: 25,
  objTitle: 'Invite friends, arrange meetups, accept joyfully, and decline politely with excuses',
  objDesc: 'Master social invitations ("Would you like to...", "How about..."), enthusiastic acceptance, and polite refusals with "I\'d love to, but...".',
  objHi: 'दोस्तों को आमंत्रित करना, मिलने की योजना बनाना, सहर्ष स्वीकार करना और विनम्रता से मना करना सीखें।',
  objEs: 'Aprende a invitar a amigos, organizar encuentros, aceptar con entusiasmo y rechazar educadamente con motivos.',
  canDo: [
    'I can invite someone to an event using "Would you like to...?" or "Do you want to...?".',
    'I can accept invitations enthusiastically ("I\'d love to!").',
    'I can decline invitations politely and give a gentle reason ("I\'d love to, but I have to...").'
  ],
  canDoHi: [
    'मैं "Would you like to...?" का उपयोग करके किसी को कार्यक्रम में आमंत्रित कर सकता हूँ।',
    'मैं उत्साहपूर्वक निमंत्रण स्वीकार कर सकता हूँ ("I\'d love to!")।',
    'मैं विनम्रता से निमंत्रण अस्वीकार कर सकता हूँ और एक सौम्य कारण दे सकता हूँ।',
  ],
  canDoEs: [
    'Puedo invitar a alguien a un evento usando "¿Te gustaría...?" o "¿Quieres...?".',
    'Puedo aceptar invitaciones con entusiasmo ("¡Me encantaría!").',
    'Puedo rechazar invitaciones educadamente y dar un motivo amable.'
  ],
  vocab: [
    { w: 'invitation', p: '/ˌɪn.vɪˈteɪ.ʃən/', m: 'a written or spoken request inviting someone to go somewhere or do something', hi: 'निमंत्रण (इनविटेशन)', es: 'invitación', fr: 'invitation', de: 'Einladung', pt: 'convite', zh: '邀请', ar: 'دعوة', ja: '招待', ru: 'приглашение', ex: 'Thank you for the kind dinner invitation.', exHi: 'रात के खाने के दयालु निमंत्रण के लिए धन्यवाद।', exEs: 'Gracias por la amable invitación a cenar.', ic: '💌' },
    { w: 'celebrate', p: '/ˈsel.ə.breɪt/', m: 'to acknowledge a significant happy event with a social gathering', hi: 'मनाना (उत्सव)', es: 'celebrar / festejar', fr: 'célébrer / fêter', de: 'feiern', pt: 'comemorar / celebrar', zh: '庆祝', ar: 'يحتفل', ja: '祝う', ru: 'праздновать / отмечать', ex: 'We are gathering to celebrate Maria\'s birthday.', exHi: 'हम मारिया का जन्मदिन मनाने के लिए इकट्ठा हो रहे हैं।', exEs: 'Nos reunimos para celebrar el cumpleaños de María.', ic: '🎂' },
    { w: 'gathering', p: '/ˈɡæð.ər.ɪŋ/', m: 'an assembly or meeting of people', hi: 'सभा / मिलन', es: 'reunión / encuentro', fr: 'rassemblement', de: 'Treffen / Versammlung', pt: 'encontro / reunião', zh: '聚会', ar: 'تجمع', ja: '集まり', ru: 'встреча / сбор', ex: 'Our family gathering takes place every Sunday.', exHi: 'हमारा पारिवारिक मिलन हर रविवार को होता है।', exEs: 'Nuestra reunión familiar se lleva a cabo todos los domingos.', ic: '👨‍👩‍👧‍👦' },
    { w: 'party', p: '/ˈpɑː.ti/', m: 'a social gathering of invited guests, typically involving eating, drinking, and entertainment', hi: 'पार्टी', es: 'fiesta', fr: 'fête', de: 'Party / Feier', pt: 'festa', zh: '派对 / 聚会', ar: 'حفلة', ja: 'パーティー', ru: 'вечеринка', ex: 'Are you coming to the housewarming party?', exHi: 'क्या आप गृहप्रवेश पार्टी में आ रहे हैं?', exEs: '¿Vienes a la fiesta de inauguración de la casa?', ic: '🎈' },
    { w: 'accept', p: '/əkˈsept/', m: 'to consent to receive or undertake an offer or invitation', hi: 'स्वीकार करना', es: 'aceptar', fr: 'accepter', de: 'annehmen / akzeptieren', pt: 'aceitar', zh: '接受', ar: 'يقبل', ja: '受け入れる', ru: 'принимать / соглашаться', ex: 'I am delighted to accept your invitation.', exHi: 'मुझे आपका निमंत्रण स्वीकार करने में बहुत खुशी हो रही है।', exEs: 'Estoy encantado de aceptar tu invitación.', ic: '✅' },
    { w: 'decline', p: '/dɪˈklaɪn/', m: 'to politely refuse an invitation or offer', hi: 'अस्वीकार करना / मना करना', es: 'rechazar / declinar', fr: 'décliner / refuser', de: 'ablehnen', pt: 'recusar / declinar', zh: '婉言谢绝', ar: 'يرفض بلباقة', ja: '辞退する', ru: 'отклонять / вежливо отказываться', ex: 'Unfortunately, I have to decline due to work.', exHi: 'दुर्भाग्य से, काम के कारण मुझे मना करना पड़ रहा है।', exEs: 'Desafortunadamente, tengo que declinar debido al trabajo.', ic: '❌' },
    { w: 'busy', p: '/ˈbɪz.i/', m: 'having a great deal to do; keeping occupied', hi: 'व्यस्त', es: 'ocupado', fr: 'occupé', de: 'beschäftigt', pt: 'ocupado', zh: '忙碌的', ar: 'مشغول', ja: '忙しい', ru: 'занятой', ex: 'I would love to come, but I am very busy on Friday.', exHi: 'मुझे आना अच्छा लगेगा, लेकिन मैं शुक्रवार को बहुत व्यस्त हूँ।', exEs: 'Me encantaría ir, pero estoy muy ocupado el viernes.', ic: '🏃' },
    { w: 'free', p: '/friː/', m: 'not occupied with work or other obligations; available', hi: 'खाली / उपलब्ध', es: 'libre / disponible', fr: 'libre / disponible', de: 'frei', pt: 'livre / disponível', zh: '有空的', ar: 'متفرغ', ja: '暇な / 空いている', ru: 'свободный', ex: 'Are you free for lunch tomorrow at noon?', exHi: 'क्या आप कल दोपहर के भोजन के लिए खाली हैं?', exEs: '¿Estás libre para almorzar mañana al mediodía?', ic: '🆓' },
    { w: 'join', p: '/dʒɔɪn/', m: 'to link up with; participate in an activity with someone', hi: 'शामिल होना / साथ आना', es: 'unirse a / acompañar', fr: 'rejoindre', de: 'beitreten / mitkommen', pt: 'juntar-se a', zh: '加入', ar: 'ينضم إلى', ja: '参加する', ru: 'присоединяться', ex: 'Would you like to join us for a coffee?', exHi: 'क्या आप हमारे साथ कॉफी पीना चाहेंगे?', exEs: '¿Te gustaría unirte a nosotros para tomar un café?', ic: '🤝' },
    { w: 'suggest', p: '/səˈdʒest/', m: 'to put forward for consideration', hi: 'सुझाव देना', es: 'sugerir / proponer', fr: 'suggérer / proposer', de: 'vorschlagen', pt: 'sugerir', zh: '建议', ar: 'يقترح', ja: '提案する', ru: 'предлагать', ex: 'I suggest we meet at the Italian cafe.', exHi: 'मेरा सुझाव है कि हम इटैलियन कैफ़े में मिलें।', exEs: 'Sugiero que nos encontremos en la cafetería italiana.', ic: '💡' },
    { w: 'meetup', p: '/ˈmiːt.ʌp/', m: 'an informal meeting or gathering of people', hi: 'मुलाकात / मीटअप', es: 'encuentro / quedada', fr: 'rencontre', de: 'Treffen', pt: 'encontro', zh: '聚会', ar: 'لقاء', ja: '集まり', ru: 'сходка / встреча', ex: 'Let\'s schedule our meetup for Saturday afternoon.', exHi: 'आइए शनिवार दोपहर के लिए अपनी मुलाकात का समय तय करें।', exEs: 'Programemos nuestro encuentro para el sábado por la tarde.', ic: '👥' },
    { w: 'excuse', p: '/ɪkˈskjuːs/', m: 'a reason given to justify a fault or explain an absence', hi: 'कारण / बहाना', es: 'excusa / motivo', fr: 'excuse', de: 'Entschuldigung / Ausrede', pt: 'desculpa', zh: '借口 / 理由', ar: 'عذر', ja: '言い訳 / 理由', ru: 'оправдание / уважительная причина', ex: 'Please accept my sincere apologies and excuse.', exHi: 'कृपया मेरी हार्दिक क्षमा और कारण स्वीकार करें।', exEs: 'Por favor acepte mis sinceras disculpas y motivo.', ic: '🙏' },
    { w: 'picnic', p: '/ˈpɪk.nɪk/', m: 'an outing including a packed meal eaten outdoors', hi: 'पिकनिक', es: 'picnic / día de campo', fr: 'pique-nique', de: 'Picknick', pt: 'piquenique', zh: '野餐', ar: 'نزهة', ja: 'ピクニック', ru: 'пикник', ex: 'We are organizing a sunny Sunday picnic in the park.', exHi: 'हम पार्क में एक धूप वाले रविवार की पिकनिक का आयोजन कर रहे हैं।', exEs: 'Estamos organizando un picnic en el parque el domingo.', ic: '🧺' },
    { w: 'barbecue', p: '/ˈbɑː.bɪ.kjuː/', m: 'a meal cooked outdoors over an open fire or grill', hi: 'बारबेक्यू', es: 'barbacoa / asado', fr: 'barbecue', de: 'Grillparty / Barbecue', pt: 'churrasco', zh: '烧烤', ar: 'شواء', ja: 'バーベキュー', ru: 'барбекю', ex: 'Join us for a backyard barbecue this Saturday!', exHi: 'इस शनिवार को हमारे साथ बैकयार्ड बारबेक्यू में शामिल हों!', exEs: '¡Únete a nosotros para una barbacoa en el patio este sábado!', ic: '🥩' },
    { w: 'pleasure', p: '/ˈpleʒ.ər/', m: 'a feeling of happy satisfaction and enjoyment', hi: 'प्रसन्नता / खुशी', es: 'placer / gusto', fr: 'plaisir', de: 'Vergnügen / Freude', pt: 'prazer', zh: '愉快 / 荣幸', ar: 'سرور', ja: '喜び', ru: 'удовольствие', ex: 'It will be my absolute pleasure to attend.', exHi: 'उपस्थित होना मेरे लिए अत्यंत प्रसन्नता की बात होगी।', exEs: 'Será un absoluto placer asistir.', ic: '😊' },
    { w: 'unfortunately', p: '/ʌnˈfɔː.tʃən.ət.li/', m: 'it is regrettable that; unluckily', hi: 'दुर्भाग्यवश', es: 'desafortunadamente / lamentablemente', fr: 'malheureusement', de: 'leider', pt: 'infelizmente', zh: '不幸地 / 遗憾地', ar: 'للأسف', ja: '残念ながら', ru: 'к сожалению', ex: 'Unfortunately, I already have other plans.', exHi: 'दुर्भाग्यवश, मेरी पहले से ही अन्य योजनाएं हैं।', exEs: 'Lamentablemente, ya tengo otros planes.', ic: '😔' },
    { w: 'arranged', p: '/əˈreɪndʒd/', m: 'planned, organized, or settled in advance', hi: 'व्यवस्थित / निर्धारित', es: 'organizado / acordado', fr: 'arrangé / prévu', de: 'vereinbart / arrangiert', pt: 'combinado / organizado', zh: '安排好的', ar: 'مرتب', ja: '手配された', ru: 'организованный / условленный', ex: 'Everything is arranged for the celebration.', exHi: 'उत्सव के लिए सब कुछ व्यवस्थित है।', exEs: 'Todo está organizado para la celebración.', ic: '🗓️' },
    { w: 'bring', p: '/brɪŋ/', m: 'to take or carry someone or something to a place', hi: 'लाना', es: 'traer', fr: 'apporter', de: 'mitbringen', pt: 'trazer', zh: '带来', ar: 'يحضر', ja: '持ってくる', ru: 'приносить', ex: 'Can I bring some fruit salad or drinks?', exHi: 'क्या मैं कुछ फ्रूट सलाद या पेय ला सकता हूँ?', exEs: '¿Puedo traer algo de ensalada de frutas o bebidas?', ic: '🥗' },
    { w: 'maybe', p: '/ˈmeɪ.bi/', m: 'perhaps; possibly', hi: 'शायद', es: 'tal vez / quizás', fr: 'peut-être', de: 'vielleicht', pt: 'talvez', zh: '或许', ar: 'ربما', ja: 'たぶん', ru: 'может быть', ex: 'Maybe we can catch up next weekend instead.', exHi: 'शायद हम इसके बजाय अगले सप्ताहांत मिल सकते हैं।', exEs: 'Tal vez podamos ponernos al día el próximo fin de semana.', ic: '🤷' },
    { w: 'raincheck', p: '/ˈreɪn.tʃek/', m: 'a promise that an unaccepted invitation will be accepted at a later date', hi: 'बाद में मिलने का वादा', es: 'posponer para otra ocasión', fr: 'remettre à plus tard', de: 'aufgeschoben', pt: 'deixar para a próxima', zh: '改天再聚', ar: 'تأجيل لوقت لاحق', ja: 'またの機会に', ru: 'перенос на другой раз', ex: 'Can I take a raincheck and join you next time?', exHi: 'क्या मैं इसे बाद के लिए टाल सकता हूँ और अगली बार शामिल हो सकता हूँ?', exEs: '¿Podemos dejarlo para otra ocasión y me uno la próxima vez?', ic: '🌧️' }
  ],
  chunks: [
    { phrase: 'Would you like to join us?', meaning: 'Polite invitation to accompany a group or event', hi: 'क्या आप हमारे साथ शामिल होना चाहेंगे?', es: '¿Te gustaría unirte a nosotros?', fr: 'Aimerais-tu te joindre à nous ?', de: 'Möchtest du mitkommen?', pt: 'Gostaria de se juntar a nós?', zh: '你想加入我们吗？', ar: 'هل ترغب في الانضمام إلينا؟', ja: 'ご一緒しませんか？', ru: 'Не хочешь присоединиться к нам?', note: 'Formal polite invitation standard.', ic: '💌' },
    { phrase: 'I would love to!', meaning: 'Enthusiastic acceptance of an invitation', hi: 'मुझे बहुत खुशी होगी!', es: '¡Me encantaría!', fr: 'J\'adorerais !', de: 'Ich würde sehr gerne!', pt: 'Eu adoraria!', zh: '我很想去！', ar: 'أود ذلك بشدة!', ja: 'ぜひそうしたいです！', ru: 'С удовольствием!', note: 'Standard joyful agreement.', ic: '😍' },
    { phrase: 'I\'d love to, but I have to...', meaning: 'Polite formula for declining with an excuse', hi: 'मुझे बहुत खुशी होती, लेकिन मुझे ... करना है', es: 'Me encantaría, pero tengo que...', fr: 'J\'aimerais bien, mais je dois...', de: 'Ich würde gerne, aber ich muss...', pt: 'Eu adoraria, mas tenho que...', zh: '我很想去，但我得...', ar: 'أود ذلك، ولكن يجب علي...', ja: '行きたいのですが、〜しなければなりません', ru: 'Я бы с радостью, но мне нужно...', note: 'Gentle, respectful refusal.', ic: '🙏' },
    { phrase: 'How about this Friday?', meaning: 'Proposing a specific day for an arrangement', hi: 'इस शुक्रवार के बारे में क्या ख्याल है?', es: '¿Qué tal este viernes?', fr: 'Que dis-tu de ce vendredi ?', de: 'Wie wäre es mit diesem Freitag?', pt: 'Que tal esta sexta-feira?', zh: '这个星期五怎么样？', ar: 'ما رأيك في يوم الجمعة هذا؟', ja: '今週の金曜日はどうですか？', ru: 'Как насчет этой пятницы?', note: 'Proposing schedule alternative.', ic: '📅' },
    { phrase: 'take a raincheck', meaning: 'to politely postpone an invitation to another time', hi: 'निमंत्रण को बाद के लिए टालना', es: 'dejarlo para otra ocasión', fr: 'remettre à une autre fois', de: 'ein anderes Mal nachholen', pt: 'deixar para outra hora', zh: '改天再约', ar: 'تأجيل الموعد لمرة أخرى', ja: 'またの機会にする', ru: 'перенести встречу на другой раз', note: 'Idiomatic polite postponement.', ic: '🌧️' },
    { phrase: 'Are you free tonight?', meaning: 'Checking someone\'s availability for social plans', hi: 'क्या आप आज रात खाली हैं?', es: '¿Estás libre esta noche?', fr: 'Es-tu libre ce soir ?', de: 'Hast du heute Abend Zeit?', pt: 'Você está livre hoje à noite?', zh: '你今晚有空吗？', ar: 'هل أنت متفرغ الليلة؟', ja: '今夜は空いていますか？', ru: 'Ты свободен сегодня вечером?', note: 'Casual invitation inquiry.', ic: '🌙' },
    { phrase: 'Sounds great!', meaning: 'Expressing approval of a social suggestion', hi: 'सुनकर बहुत अच्छा लगा!', es: '¡Suena genial!', fr: 'Ça a l\'air super !', de: 'Klingt toll!', pt: 'Parece ótimo!', zh: '听起来太棒了！', ar: 'يبدو رائعاً!', ja: 'いいですね！', ru: 'Звучит отлично!', note: 'Common casual agreement.', ic: '👍' },
    { phrase: 'What should I bring?', meaning: 'Politely asking what to contribute to a gathering', hi: 'मुझे क्या लाना चाहिए?', es: '¿Qué debería llevar?', fr: 'Que devrais-je apporter ?', de: 'Was soll ich mitbringen?', pt: 'O que devo levar?', zh: '我应该带点什么？', ar: 'ماذا يجب أن أحضر؟', ja: '何か持っていくものはありますか？', ru: 'Что мне принести с собой?', note: 'Host etiquette question.', ic: '🥗' }
  ],
  grammar: {
    title: 'Polite Formulas with "Would like to" & "Have to" for Obligations',
    concept: 'Using "Would you like to + base verb" for polite invitations and "have to + base verb" to state external obligations/excuses.',
    patterns: [
      {
        title: 'Polite Invitations: Would you like to...?',
        structure: 'Would you like to + base verb...?',
        rule: 'Use "Would you like to" for respectful social invitations.',
        examples: [
          { en: 'Would you like to come to our dinner party on Saturday?', hi: 'क्या आप शनिवार को हमारी डिनर पार्टी में आना चाहेंगे?', es: '¿Te gustaría venir a nuestra cena el sábado?' },
          { en: 'Would you like to have coffee with me tomorrow?', hi: 'क्या आप कल मेरे साथ कॉफी पीना चाहेंगे?', es: '¿Te gustaría tomar un café conmigo mañana?' }
        ]
      },
      {
        title: 'Polite Declining with "have to" (Obligation)',
        structure: 'I\'d love to, but I have to + base verb (study / work / help)',
        rule: 'Combine acceptance desire ("I\'d love to") with contrast ("but") and obligation ("I have to") for polite refusal.',
        examples: [
          { en: 'I\'d love to, but I have to work late tonight.', hi: 'मुझे बहुत खुशी होती, लेकिन मुझे आज रात देर तक काम करना है।', es: 'Me encantaría, pero tengo que trabajar hasta tarde esta noche.' },
          { en: 'I\'d love to come, but I have to study for an exam.', hi: 'मुझे आना अच्छा लगता, लेकिन मुझे परीक्षा के लिए पढ़ना है।', es: 'Me encantaría ir, pero tengo que estudiar para un examen.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'Do you like to come with me tonight?', cor: 'Would you like to come with me tonight?', exp: 'Use "Would you like to" for specific invitations, not "Do you like".', hi: 'विशिष्ट निमंत्रण के लिए "Would you like to" का प्रयोग करें।', es: 'Usa "Would you like to" para invitaciones específicas.' },
    { inc: 'I would love to, but I must to work.', cor: 'I would love to, but I have to work.', exp: 'Do not put "to" after "must"; use "have to work".', hi: '"Must" के बाद "to" न लगाएं; "have to work" का प्रयोग करें।', es: 'No uses "to" después de "must"; usa "have to work".' },
    { inc: 'How about meet at 6:00 PM?', cor: 'How about meeting at 6:00 PM?', exp: '"How about" must be followed by a gerund (-ing) or noun phrase.', hi: '"How about" के बाद -ing रूप (meeting) लगाएं।', es: '"How about" va seguido de gerundio (-ing).' },
    { inc: 'I am sorry, I can\'t because I am too much busy.', cor: 'I am sorry, I can\'t because I am too busy.', exp: 'Say "too busy", not "too much busy".', hi: '"Too busy" कहें, "too much busy" नहीं।', es: 'Se dice "too busy", no "too much busy".' },
    { inc: 'Can we take a rain check next time?', cor: 'Can I take a raincheck?', exp: 'The idiom is "take a raincheck".', hi: '"Take a raincheck" मुहावरा है।', es: 'El modismo es "take a raincheck".' }
  ],
  dialogues: [
    {
      title: 'Inviting a Friend to a Weekend Barbecue',
      context: 'Tom invites Anna to a Saturday afternoon cookout.',
      charA: { name: 'Tom', av: '👨‍🍳', role: 'Host' },
      charB: { name: 'Anna', av: '👩‍💼', role: 'Friend' },
      turns: [
        { spk: 'Tom', text: 'Hey Anna! Are you free this Saturday afternoon?', hi: 'अरे अन्ना! क्या आप इस शनिवार दोपहर को खाली हैं?', es: '¡Hola Anna! ¿Estás libre este sábado por la tarde?' },
        { spk: 'Anna', text: 'Hi Tom! Yes, I don\'t have any plans yet. What\'s up?', hi: 'नमस्ते टॉम! हाँ, मेरी अभी कोई योजना नहीं है। क्या बात है?', es: '¡Hola Tom! Sí, todavía no tengo planes. ¿Qué pasa?' },
        { spk: 'Tom', text: 'We are hosting a backyard barbecue. Would you like to join us?', hi: 'हम एक बैकयार्ड बारबेक्यू आयोजित कर रहे हैं। क्या आप हमारे साथ शामिल होना चाहेंगी?', es: 'Estamos organizando una barbacoa en el patio. ¿Te gustaría unirte a nosotros?' },
        { spk: 'Anna', text: 'I would love to! That sounds fantastic. What should I bring?', hi: 'मुझे बहुत खुशी होगी! यह बहुत बढ़िया लगता है। मुझे क्या लाना चाहिए?', es: '¡Me encantaría! Suena fantástico. ¿Qué debería llevar?' },
        { spk: 'Tom', text: 'Just bring some dessert or drinks. See you at two o\'clock!', hi: 'बस कुछ मिठाई या पेय ले आइएगा। दो बजे मिलते हैं!', es: 'Solo trae algún postre o bebidas. ¡Nos vemos a las dos en punto!' }
      ]
    },
    {
      title: 'Declining an Invitation Politely with an Excuse',
      context: 'Chris invites Megan to an evening movie, but Megan has a prior obligation.',
      charA: { name: 'Chris', av: '👨‍🎓', role: 'Friend' },
      charB: { name: 'Megan', av: '👩‍⚕️', role: 'Colleague' },
      turns: [
        { spk: 'Chris', text: 'Hi Megan! Would you like to go to the cinema tonight to watch the new comedy?', hi: 'नमस्ते मेगन! क्या आप नई कॉमेडी देखने के लिए आज रात सिनेमा जाना चाहेंगी?', es: '¡Hola Megan! ¿Te gustaría ir al cine esta noche a ver la nueva comedia?' },
        { spk: 'Megan', text: 'Oh, thank you for asking, Chris! I\'d love to, but I have to finish a hospital report.', hi: 'ओह, पूछने के लिए धन्यवाद, क्रिस! मुझे बहुत खुशी होती, लेकिन मुझे अस्पताल की एक रिपोर्ट पूरी करनी है।', es: '¡Oh, gracias por preguntar, Chris! Me encantaría, pero tengo que terminar un informe.' },
        { spk: 'Chris', text: 'I completely understand. No problem at all!', hi: 'मैं पूरी तरह समझता हूँ। कोई समस्या नहीं है!', es: 'Lo entiendo perfectamente. ¡No hay problema!' },
        { spk: 'Megan', text: 'Can I take a raincheck and go with you next weekend instead?', hi: 'क्या मैं इसे बाद के लिए टाल सकती हूँ और इसके बजाय अगले सप्ताहांत आपके साथ चल सकती हूँ?', es: '¿Puedo dejarlo para otra ocasión e ir contigo el próximo fin de semana?' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u04_l58_p1', lessonId: 'lesson_a1_4_58', stage: 8, type: 'multiple_choice', prompt: 'Select the polite invitation phrase: "___ to come to our dinner party?"', options: [{ id: 'o1', text: 'Would you like', isCorrect: true }, { id: 'o2', text: 'Do you liking', isCorrect: false }, { id: 'o3', text: 'Are you like', isCorrect: false }] },
    { id: 'ex_u04_l58_p2', lessonId: 'lesson_a1_4_58', stage: 8, type: 'fill_blank', prompt: 'Complete the polite decline formula: "I\'d love to, ___ I have to work late tonight."', sentenceTemplate: 'I\'d love to, ___ I have to work late tonight.', sourceSentence: 'I\'d love to, ___ I have to work late tonight.', options: [{ id: 'o1', text: 'but', isCorrect: true }, { id: 'o2', text: 'so', isCorrect: false }, { id: 'o3', text: 'because', isCorrect: false }] },
    { id: 'ex_u04_l58_p3', lessonId: 'lesson_a1_4_58', stage: 8, type: 'word_ordering', prompt: 'Order the words to make a polite invitation:', wordBank: ['Would', 'you', 'like', 'to', 'join', 'us', 'for', 'lunch?'], targetSentence: 'Would you like to join us for lunch?' },
    { id: 'ex_u04_l58_p4', lessonId: 'lesson_a1_4_58', stage: 8, type: 'match_pairs', prompt: 'Match social formulas with functions:', pairs: [{ left: 'Would you like to...?', right: 'polite invitation' }, { left: 'I would love to!', right: 'enthusiastic acceptance' }, { left: 'I have to study.', right: 'polite excuse' }, { left: 'take a raincheck', right: 'postpone for another time' }] },
    { id: 'ex_u04_l58_p5', lessonId: 'lesson_a1_4_58', stage: 8, type: 'error_correction', prompt: 'Identify the corrected sentence:', sentenceTemplate: 'How about meet at the central cafe at four?', options: [{ id: 'o1', text: 'How about meeting at the central cafe at four?', isCorrect: true }, { id: 'o2', text: 'How about to meet at central cafe at four?', isCorrect: false }, { id: 'o3', text: 'How about meets at central cafe at four?', isCorrect: false }] },
    { id: 'ex_u04_l58_p6', lessonId: 'lesson_a1_4_58', stage: 9, type: 'listening', prompt: 'Listen and select what the speaker says:', audioText: 'Thank you so much for the invitation, I would love to attend.', options: [{ id: 'o1', text: 'Thank you so much for the invitation, I would love to attend.', isCorrect: true }, { id: 'o2', text: 'Thank you so much for the imitation, I will avoid to intend.', isCorrect: false }] },
    { id: 'ex_u04_l58_p7', lessonId: 'lesson_a1_4_58', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'I would love to join you for dinner.', targetSentence: 'I would love to join you for dinner.' },
    { id: 'ex_u04_l58_p8', lessonId: 'lesson_a1_4_58', stage: 10, type: 'multiple_choice', prompt: 'Choose the correct question to ask what to contribute to a party:', options: [{ id: 'o1', text: 'What should I bring to the gathering?', isCorrect: true }, { id: 'o2', text: 'What should I bringing to gathering?', isCorrect: false }, { id: 'o3', text: 'What do I bring to the gathering?', isCorrect: false }] },
    { id: 'ex_u04_l58_p9', lessonId: 'lesson_a1_4_58', stage: 11, type: 'dialogue_completion', prompt: 'Complete the social reply: "Are you free to grab coffee tomorrow afternoon?"', options: [{ id: 'o1', text: 'Yes, that sounds wonderful! Let\'s meet at three.', isCorrect: true }, { id: 'o2', text: 'I am wearing boots.', isCorrect: false }, { id: 'o3', text: 'The door is brown.', isCorrect: false }] },
    { id: 'ex_u04_l58_p10', lessonId: 'lesson_a1_4_58', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'I would love to come, but unfortunately I already have other plans.', audioText: 'I would love to come, but unfortunately I already have other plans.' },
    { id: 'ex_u04_l58_p11', lessonId: 'lesson_a1_4_58', stage: 13, type: 'translation', prompt: 'Translate: "क्या आप कल हमारे साथ शामिल होना चाहेंगे?" / "¿Te gustaría unirte a nosotros mañana?"', targetSentence: 'Would you like to join us tomorrow?' },
    { id: 'ex_u04_l58_p12', lessonId: 'lesson_a1_4_58', stage: 14, type: 'multiple_choice', prompt: 'What expression means asking to postpone an invitation politely?', options: [{ id: 'o1', text: 'take a raincheck', isCorrect: true }, { id: 'o2', text: 'plug in', isCorrect: false }, { id: 'o3', text: 'express shipping', isCorrect: false }] },
    { id: 'ex_u04_l58_p13', lessonId: 'lesson_a1_4_58', stage: 14, type: 'fill_blank', prompt: 'Complete the proposal with the gerund: "How about ___ a picnic in the park on Sunday?"', sentenceTemplate: 'How about ___ a picnic in the park on Sunday?', sourceSentence: 'How about ___ a picnic in the park on Sunday?', options: [{ id: 'o1', text: 'having', isCorrect: true }, { id: 'o2', text: 'have', isCorrect: false }, { id: 'o3', text: 'to have', isCorrect: false }] },
    { id: 'ex_u04_l58_p14', lessonId: 'lesson_a1_4_58', stage: 14, type: 'word_ordering', prompt: 'Order the words to decline with a reason:', wordBank: ['I', 'have', 'to', 'study', 'for', 'my', 'exam', 'tomorrow.'], targetSentence: 'I have to study for my exam tomorrow.' },
    { id: 'ex_u04_l58_p15', lessonId: 'lesson_a1_4_58', stage: 14, type: 'speaking', prompt: 'Speak this complete sentence clearly into your microphone:', targetSentence: 'Thank you for inviting me to your housewarming party.', audioText: 'Thank you for inviting me to your housewarming party.' }
  ],
  review: [
    { id: 'ex_u04_l58_r1', lessonId: 'lesson_a1_4_58', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Choose the correct phrasal verb pronoun order:', options: [{ id: 'o1', text: 'Please turn it off before leaving.', isCorrect: true }, { id: 'o2', text: 'Please turn off it before leaving.', isCorrect: false }, { id: 'o3', text: 'Please it turn off before leaving.', isCorrect: false }] },
    { id: 'ex_u04_l58_r2', lessonId: 'lesson_a1_4_58', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete: "He enjoys ___ the guitar."', sentenceTemplate: 'He enjoys ___ the guitar.', sourceSentence: 'He enjoys ___ the guitar.', options: [{ id: 'o1', text: 'playing', isCorrect: true }, { id: 'o2', text: 'to play', isCorrect: false }, { id: 'o3', text: 'play', isCorrect: false }] },
    { id: 'ex_u04_l58_r3', lessonId: 'lesson_a1_4_58', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['We', 'are', 'going', 'to', 'travel', 'soon.'], targetSentence: 'We are going to travel soon.' },
    { id: 'ex_u04_l58_r4', lessonId: 'lesson_a1_4_58', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match invitation and tech phrases:', pairs: [{ left: 'Would you like to', right: 'social invite' }, { left: 'turn it on', right: 'separable phrasal verb' }, { left: 'take a raincheck', right: 'postpone invitation' }, { left: 'In my opinion', right: 'give viewpoint' }] },
    { id: 'ex_u04_l58_r5', lessonId: 'lesson_a1_4_58', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "मुझे बहुत खुशी होगी!"', targetSentence: 'I would love to!' }
  ],
  assessment: [
    { id: 'ex_u04_l58_a1', lessonId: 'lesson_a1_4_58', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the grammatically correct polite invitation and decline dialogue:', options: [{ id: 'o1', text: 'Would you like to come? — I\'d love to, but I have to work.', isCorrect: true }, { id: 'o2', text: 'Do you like to come? — I love to, but I must to work.', isCorrect: false }, { id: 'o3', text: 'Are you like come? — I will love, but I have work.', isCorrect: false }] },
    { id: 'ex_u04_l58_a2', lessonId: 'lesson_a1_4_58', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete the sentence: "How about ___ to the park this afternoon?"', sentenceTemplate: 'How about ___ to the park this afternoon?', sourceSentence: 'How about ___ to the park this afternoon?', options: [{ id: 'o1', text: 'going', isCorrect: true }, { id: 'o2', text: 'go', isCorrect: false }, { id: 'o3', text: 'to go', isCorrect: false }] },
    { id: 'ex_u04_l58_a3', lessonId: 'lesson_a1_4_58', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words correctly:', wordBank: ['Would', 'you', 'like', 'to', 'come', 'to', 'my', 'birthday', 'party?'], targetSentence: 'Would you like to come to my birthday party?' },
    { id: 'ex_u04_l58_a4', lessonId: 'lesson_a1_4_58', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Select the appropriate response: "Can you join us for lunch today at noon?"', options: [{ id: 'o1', text: 'I\'d love to, but I have an important meeting at twelve.', isCorrect: true }, { id: 'o2', text: 'I am buying milk.', isCorrect: false }, { id: 'o3', text: 'The clock has numbers.', isCorrect: false }] },
    { id: 'ex_u04_l58_a5', lessonId: 'lesson_a1_4_58', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this complete sentence clearly:', targetSentence: 'Thank you for the kind invitation, I would be delighted to attend.', audioText: 'Thank you for the kind invitation, I would be delighted to attend.' }
  ]
};

// =========================================================================
// LESSON 59: Life Milestones, Personal Biographies & Life Stories
// =========================================================================
export const CONFIG_59: LessonConfig = {
  num: 59,
  title: 'Life Milestones, Personal Biographies & Life Stories',
  icon: '📜',
  estMin: 25,
  objTitle: 'Narrate life events, biographies, career milestones, and personal timelines',
  objDesc: 'Learn biographical vocabulary (was born, grew up, graduated, moved) and time sequencers (first, then, after that, finally).',
  objHi: 'जीवन की महत्वपूर्ण घटनाओं, व्यक्तिगत जीवनियों और समयरेखा का वर्णन करना सीखें।',
  objEs: 'Aprende a narrar eventos de la vida, biografías, hitos profesionales y cronologías personales.',
  canDo: [
    'I can state where and when I was born and where I grew up.',
    'I can describe major life milestones (education, career changes, moving).',
    'I can use narrative time linkers (First, Then, After that, Later, Finally).'
  ],
  canDoHi: [
    'मैं बता सकता हूँ कि मेरा जन्म कब और कहाँ हुआ था और मैं कहाँ पला-बढ़ा।',
    'मैं जीवन के प्रमुख मील के पत्थरों (शिक्षा, करियर परिवर्तन, स्थानांतरण) का वर्णन कर सकता हूँ।',
    'मैं कथात्मक समय संयोजकों (First, Then, After that, Later, Finally) का उपयोग कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo decir dónde y cuándo nací y dónde crecí.',
    'Puedo describir hitos importantes de la vida (educación, cambios de carrera, mudanzas).',
    'Puedo usar conectores temporales narrativos (First, Then, After that, Later, Finally).'
  ],
  vocab: [
    { w: 'born', p: '/bɔːn/', m: 'existing as a result of birth', hi: 'पैदा हुआ / जन्मा', es: 'nacido', fr: 'né', de: 'geboren', pt: 'nascido', zh: '出生', ar: 'ولد', ja: '生まれた', ru: 'родившийся', ex: 'She was born in Madrid in 1998.', exHi: 'उसका जन्म 1998 में मैड्रिड में हुआ था।', exEs: 'Ella nació en Madrid en 1998.', ic: '👶' },
    { w: 'grow', p: '/ɡrəʊ/', m: 'to develop and become mature (grow up)', hi: 'बढ़ना / पलना-बढ़ना', es: 'crecer', fr: 'grandir', de: 'aufwachsen', pt: 'crescer', zh: '长大 / 成长', ar: 'ينمو / يكبر', ja: '成長する', ru: 'расти / взрослеть', ex: 'He grew up in a small coastal town.', exHi: 'वह एक छोटे तटीय शहर में पला-बढ़ा।', exEs: 'Él creció en un pequeño pueblo costero.', ic: '🌱' },
    { w: 'graduate', p: '/ˈɡrædʒ.u.eɪt/', m: 'to successfully complete a course of university or school study', hi: 'स्नातक होना', es: 'graduarse', fr: 'obtenir son diplôme', de: 'den Abschluss machen', pt: 'graduar-se / formar-se', zh: '毕业', ar: 'تخرج', ja: '卒業する', ru: 'выпуститься / окончить', ex: 'She graduated with honors in 2022.', exHi: 'उसने 2022 में ऑनर्स के साथ स्नातक किया।', exEs: 'Se graduó con honores en 2022.', ic: '🎓' },
    { w: 'milestone', p: '/ˈmaɪl.stəʊn/', m: 'a significant stage or event in the development of something', hi: 'मील का पत्थर / महत्वपूर्ण पड़ाव', es: 'hito / momento importante', fr: 'étape importante', de: 'Meilenstein', pt: 'marco importante', zh: '里程碑', ar: 'إنجاز هام', ja: '節目 / マイルストーン', ru: 'веха / важный этап', ex: 'Buying their first home was a major milestone.', exHi: 'अपना पहला घर खरीदना एक बड़ा मील का पत्थर था।', exEs: 'Comprar su primera casa fue un hito importante.', ic: '🚩' },
    { w: 'biography', p: '/baɪˈɒɡ.rə.fi/', m: 'an account of someone\'s life written by someone else', hi: 'जीवनी', es: 'biografía', fr: 'biographie', de: 'Biografie', pt: 'biografia', zh: '传记', ar: 'سيرة ذاتية', ja: '伝記', ru: 'биография', ex: 'I read an inspiring biography of the scientist.', exHi: 'मैंने वैज्ञानिक की एक प्रेरक जीवनी पढ़ी।', exEs: 'Leí una biografía inspiradora del científico.', ic: '📖' },
    { w: 'childhood', p: '/ˈtʃaɪld.hʊd/', m: 'the state or period of being a child', hi: 'बचपन', es: 'infancia / niñez', fr: 'enfance', de: 'Kindheit', pt: 'infância', zh: '童年', ar: 'طفولة', ja: '子供時代', ru: 'детство', ex: 'I have fond memories of my childhood.', exHi: 'मुझे अपने बचपन की सुखद यादें हैं।', exEs: 'Tengo buenos recuerdos de mi infancia.', ic: '🧸' },
    { w: 'marry', p: '/ˈmær.i/', m: 'to join in marriage', hi: 'विवाह करना', es: 'casarse', fr: 'se marier', de: 'heiraten', pt: 'casar-se', zh: '结婚', ar: 'يتزوج', ja: '結婚する', ru: 'жениться / выходить замуж', ex: 'They married in a beautiful ceremony in June.', exHi: 'उन्होंने जून में एक सुंदर समारोह में विवाह किया।', exEs: 'Se casaron en una hermosa ceremonia en junio.', ic: '💍' },
    { w: 'retire', p: '/rɪˈtaɪər/', m: 'to leave one\'s job and cease to work, typically upon reaching normal old age', hi: 'सेवानिवृत्त होना (रिटायर होना)', es: 'jubilarse / retirarse', fr: 'prendre sa retraite', de: 'in den Ruhestand gehen', pt: 'aposentar-se', zh: '退休', ar: 'يتقاعد', ja: '退職する', ru: 'уходить на пенсию', ex: 'My grandfather retired after forty years of teaching.', exHi: 'मेरे दादाजी चालीस साल पढ़ाने के बाद सेवानिवृत्त हुए।', exEs: 'Mi abuelo se jubiló después de cuarenta años de docencia.', ic: '🏖️' },
    { w: 'career', p: '/kəˈrɪər/', m: 'an occupation undertaken for a significant period of a person\'s life', hi: 'करियर', es: 'carrera profesional', fr: 'carrière', de: 'Karriere', pt: 'carreira', zh: '职业生涯', ar: 'مهنة', ja: 'キャリア', ru: 'карьера', ex: 'She built a successful career in software design.', exHi: 'उसने सॉफ्टवेयर डिजाइन में एक सफल करियर बनाया।', exEs: 'Construyó una carrera exitosa en diseño de software.', ic: '💼' },
    { w: 'history', p: '/ˈhɪs.tər.i/', m: 'the whole series of past events connected with someone or something', hi: 'इतिहास', es: 'historia', fr: 'histoire', de: 'Geschichte', pt: 'história', zh: '历史', ar: 'تاريخ', ja: '歴史', ru: 'история', ex: 'He studied the history of world literature.', exHi: 'उन्होंने विश्व साहित्य के इतिहास का अध्ययन किया।', exEs: 'Él estudió la historia de la literatura mundial.', ic: '📜' },
    { w: 'finally', p: '/ˈfaɪ.nəl.i/', m: 'after a long time, typically involving difficulty or delay', hi: 'अंततः / आखिरकार', es: 'finalmente / por fin', fr: 'finalement / enfin', de: 'schließlich', pt: 'finalmente', zh: '最后 / 终于', ar: 'أخيراً', ja: 'ついに', ru: 'наконец', ex: 'After months of practice, he finally passed the test.', exHi: 'महीनों के अभ्यास के बाद, उसने आखिरकार परीक्षा उत्तीर्ण कर ली।', exEs: 'Después de meses de práctica, finalmente aprobó el examen.', ic: '🏁' },
    { w: 'achievement', p: '/əˈtʃiːv.mənt/', m: 'a thing done successfully, typically by effort, courage, or skill', hi: 'उपलब्धि', es: 'logro / éxito', fr: 'réussite / accomplissement', de: 'Leistung / Erfolg', pt: 'conquista / realização', zh: '成就', ar: 'إنجاز', ja: '達成 / 業績', ru: 'достижение', ex: 'Graduating from university was her proudest achievement.', exHi: 'विश्वविद्यालय से स्नातक होना उनकी सबसे गर्व की उपलब्धि थी।', exEs: 'Graduarse de la universidad fue su mayor logro.', ic: '🏆' },
    { w: 'journey', p: '/ˈdʒɜː.ni/', m: 'an act of traveling from one place to another or through life', hi: 'यात्रा / सफ़र', es: 'viaje / trayectoria', fr: 'parcours / voyage', de: 'Reise / Lebensweg', pt: 'jornada', zh: '旅程 / 历程', ar: 'رحلة', ja: '旅路', ru: 'путь / путешествие', ex: 'Her life journey inspired many young students.', exHi: 'उनके जीवन के सफर ने कई युवा छात्रों को प्रेरित किया।', exEs: 'La trayectoria de su vida inspiró a muchos estudiantes jóvenes.', ic: '🌟' },
    { w: 'event', p: '/ɪˈvent/', m: 'a thing that happens, especially one of importance', hi: 'घटना / कार्यक्रम', es: 'evento / acontecimiento', fr: 'événement', de: 'Ereignis', pt: 'evento', zh: '事件', ar: 'حدث', ja: '出来事', ru: 'событие', ex: 'The wedding was an unforgettable family event.', exHi: 'शादी एक अविस्मरणीय पारिवारिक कार्यक्रम था।', exEs: 'La boda fue un evento familiar inolvidable.', ic: '🎉' },
    { w: 'memory', p: '/ˈmem.ər.i/', m: 'something remembered from the past', hi: 'स्मृति / याद', es: 'recuerdo / memoria', fr: 'souvenir / mémoire', de: 'Erinnerung', pt: 'memória / lembrança', zh: '回忆', ar: 'ذكرى', ja: '思い出', ru: 'память / воспоминание', ex: 'I have wonderful memories of our first trip abroad.', exHi: 'मुझे हमारी पहली विदेश यात्रा की अद्भुत यादें हैं।', exEs: 'Tengo recuerdos maravillosos de nuestro primer viaje al extranjero.', ic: '💭' },
    { w: 'later', p: '/ˈleɪ.tər/', m: 'at a time in the future or after the time you have mentioned', hi: 'बाद में', es: 'más tarde / después', fr: 'plus tard', de: 'später', pt: 'mais tarde', zh: '后来', ar: 'لاحقاً', ja: '後で', ru: 'позже', ex: 'Two years later, she moved to London.', exHi: 'दो साल बाद, वह लंदन चली गईं।', exEs: 'Dos años más tarde, se mudó a Londres.', ic: '⏳' },
    { w: 'first', p: '/fɜːst/', m: 'coming before all others in time or order', hi: 'पहले / प्रथम', es: 'primero', fr: 'd\'abord / premier', de: 'zuerst / erste', pt: 'primeiro', zh: '首先', ar: 'أولاً', ja: '最初に', ru: 'сначала / первый', ex: 'First, I completed my high school education.', exHi: 'सबसे पहले, मैंने अपनी हाई स्कूल की शिक्षा पूरी की।', exEs: 'Primero, completé mi educación secundaria.', ic: '1️⃣' },
    { w: 'then', p: '/ðen/', m: 'at that time; after that; next', hi: 'फिर / तब', es: 'luego / entonces', fr: 'ensuite / puis', de: 'dann', pt: 'depois / então', zh: '然后', ar: 'ثم', ja: 'それから', ru: 'затем / потом', ex: 'Then, I started working as an apprentice.', exHi: 'फिर, मैंने एक प्रशिक्षु के रूप में काम करना शुरू किया।', exEs: 'Luego, comencé a trabajar como aprendiz.', ic: '➡️' },
    { w: 'afterwards', p: '/ˈɑːf.tə.wədz/', m: 'at a later or subsequent time', hi: 'बाद में (उसके बाद)', es: 'después / posteriormente', fr: 'après / par la suite', de: 'danach', pt: 'depois disso', zh: '后来', ar: 'بعد ذلك', ja: 'その後で', ru: 'впоследствии / потом', ex: 'Afterwards, we celebrated our success together.', exHi: 'उसके बाद, हमने मिलकर अपनी सफलता का जश्न मनाया।', exEs: 'Después, celebramos nuestro éxito juntos.', ic: '⏭️' },
    { w: 'timeline', p: '/ˈtaɪm.laɪn/', m: 'a linear representation of important events in the order of the occurrences', hi: 'समयरेखा (टाइमलाइन)', es: 'cronología / línea de tiempo', fr: 'chronologie', de: 'Zeitleiste', pt: 'linha do tempo', zh: '时间线', ar: 'جدول زمني', ja: 'タイムライン', ru: 'временная шкала', ex: 'Let us review the historical timeline of events.', exHi: 'आइए घटनाओं की ऐतिहासिक समयरेखा की समीक्षा करें।', exEs: 'Revisemos la línea de tiempo histórica de los eventos.', ic: '📊' }
  ],
  chunks: [
    { phrase: 'I was born in...', meaning: 'Stating birth place and/or year', hi: 'मेरा जन्म ... में हुआ था', es: 'Nací en...', fr: 'Je suis né en...', de: 'Ich wurde in ... geboren', pt: 'Eu nasci em...', zh: '我出生在...', ar: 'ولدت في...', ja: '〜で生まれました', ru: 'Я родился в...', note: 'Use past passive "was born".', ic: '👶' },
    { phrase: 'grew up in', meaning: 'spent one\'s childhood and youth in a specific location', hi: '... में पला-बढ़ा', es: 'crecí en', fr: 'j\'ai grandi à', de: 'wuchs auf in', pt: 'cresci em', zh: '在...长大', ar: 'نشأت في', ja: '〜で育ちました', ru: 'вырос в', note: 'Past tense of "grow up".', ic: '🏡' },
    { phrase: 'graduate from university', meaning: 'to complete college degree studies', hi: 'विश्वविद्यालय से स्नातक होना', es: 'graduarse de la universidad', fr: 'obtenir son diplôme universitaire', de: 'die Universität abschließen', pt: 'formar-se na universidade', zh: '大学毕业', ar: 'التخرج من الجامعة', ja: '大学を卒業する', ru: 'окончить университет', note: 'Uses preposition "from".', ic: '🎓' },
    { phrase: 'First... Then... After that...', meaning: 'Narrative sequencing chain for chronological stories', hi: 'पहले... फिर... उसके बाद...', es: 'Primero... Luego... Después de eso...', fr: 'D\'abord... Ensuite... Après cela...', de: 'Zuerst... Dann... Danach...', pt: 'Primeiro... Depois... Depois disso...', zh: '首先...然后...之后...', ar: 'أولاً... ثم... بعد ذلك...', ja: '最初に...それから...その後に...', ru: 'Сначала... Затем... После этого...', note: 'Essential story structuring linkers.', ic: '🔗' },
    { phrase: 'change careers', meaning: 'to switch to a new profession or work domain', hi: 'करियर बदलना', es: 'cambiar de carrera', fr: 'changer de carrière', de: 'den Beruf wechseln', pt: 'mudar de carreira', zh: '转行 / 换工作', ar: 'تغيير المسار المهني', ja: '転職する', ru: 'сменить профессию', note: 'Major life decision phrase.', ic: '💼' },
    { phrase: 'move to a new city', meaning: 'to relocate one\'s primary home to another city', hi: 'नए शहर में जाना', es: 'mudarse a una nueva ciudad', fr: 'déménager dans une nouvelle ville', de: 'in eine neue Stadt ziehen', pt: 'mudar-se para uma nova cidade', zh: '搬到新城市', ar: 'الانتقال إلى مدينة جديدة', ja: '新しい街に引っ越す', ru: 'переехать в другой город', note: 'Relocation life event.', ic: '📦' },
    { phrase: 'get married', meaning: 'to marry a spouse', hi: 'शादी करना', es: 'casarse', fr: 'se marier', de: 'heiraten', pt: 'casar-se', zh: '结婚', ar: 'الزواج', ja: '結婚する', ru: 'пожениться', note: 'Common life milestone.', ic: '💍' },
    { phrase: 'looking back', meaning: 'reflecting on past life experiences with perspective', hi: 'पीछे मुड़कर देखना / याद करना', es: 'mirando hacia atrás / en retrospectiva', fr: 'avec le recul', de: 'rückblickend', pt: 'olhando para trás', zh: '回首往事', ar: 'بالنظر إلى الوراء', ja: '振り返ってみると', ru: 'оглядываясь назад', note: 'Reflective narrative transition.', ic: '💭' }
  ],
  grammar: {
    title: 'Narrative Past Tense with Time Sequencers & "Was Born"',
    concept: 'Structuring chronological life stories using Past Simple with sequence markers (First, Then, Later, After that, Finally) and the passive "was/were born".',
    patterns: [
      {
        title: 'Was / Were Born (Passive Past)',
        structure: 'Subject + was / were + born + in [year/city] / on [date]',
        rule: 'Always use "was/were born", never "borned" or "am born" for past birth.',
        examples: [
          { en: 'I was born in Tokyo in 1995.', hi: 'मेरा जन्म 1995 में टोक्यो में हुआ था।', es: 'Nací en Tokio en 1995.' },
          { en: 'My parents were born in a small village.', hi: 'मेरे माता-पिता का जन्म एक छोटे से गाँव में हुआ था।', es: 'Mis padres nacieron en un pequeño pueblo.' }
        ]
      },
      {
        title: 'Narrative Time Sequencers',
        structure: 'First, [Event 1]. Then, [Event 2]. After that, [Event 3]. Finally, [Event 4].',
        rule: 'Use sequencing adverbs with a comma at the beginning of sentences to clarify the order of past events.',
        examples: [
          { en: 'First, she studied engineering. Then, she moved to London.', hi: 'सबसे पहले, उसने इंजीनियरिंग की पढ़ाई की। फिर, वह लंदन चली गई।', es: 'Primero, estudió ingeniería. Luego, se mudó a Londres.' },
          { en: 'Finally, after ten years, he opened his own restaurant.', hi: 'अंततः, दस साल बाद, उन्होंने अपना खुद का रेस्तरां खोला।', es: 'Finalmente, después de diez años, abrió su propio restaurante.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'I am born in 2000.', cor: 'I was born in 2000.', exp: 'Use the past form "was born", not the present "am born".', hi: 'जन्म के लिए पास्ट फॉर्म "was born" का प्रयोग करें।', es: 'Usa el pasado "was born", no "am born".' },
    { inc: 'He growed up in New York.', cor: 'He grew up in New York.', exp: 'The past tense of "grow" is irregular: "grew".', hi: '"Grow" का भूतकाल "grew" है।', es: 'El pasado de "grow" es "grew".' },
    { inc: 'She graduated of university.', cor: 'She graduated from university.', exp: 'Use the preposition "from" after "graduated".', hi: '"Graduated" के बाद "from" का प्रयोग करें।', es: 'Usa "graduated from university".' },
    { inc: 'They married with each other last year.', cor: 'They got married last year. (OR: They married last year.)', exp: 'Do not use "with each other" after "married".', hi: '"Married" के बाद "with each other" न लगाएं।', es: 'Di "They got married" o "They married".' },
    { inc: 'After that, and then I moved.', cor: 'After that, I moved. (OR: And then I moved.)', exp: 'Do not stack "After that" and "and then" simultaneously.', hi: 'दोनों समय संयोजकों को एक साथ न मिलाएं।', es: 'No combines "After that" y "and then" juntos.' }
  ],
  dialogues: [
    {
      title: 'Sharing a Life Story and Career Journey',
      context: 'Victor shares his biographical journey with his colleague Maria.',
      charA: { name: 'Maria', av: '👩‍💼', role: 'Colleague' },
      charB: { name: 'Victor', av: '👨‍💼', role: 'Engineer' },
      turns: [
        { spk: 'Maria', text: 'Victor, where were you born and where did you grow up?', hi: 'विक्टर, आपका जन्म कहाँ हुआ था और आप कहाँ पले-बढ़े?', es: 'Víctor, ¿dónde naciste y dónde creciste?' },
        { spk: 'Victor', text: 'I was born in Chicago, but I grew up in a quiet town in Ohio.', hi: 'मेरा जन्म शिकागो में हुआ था, लेकिन मैं ओहियो के एक शांत शहर में पला-बढ़ा।', es: 'Nací en Chicago, pero crecí en un pueblo tranquilo en Ohio.' },
        { spk: 'Maria', text: 'How did you start your career in technology?', hi: 'आपने प्रौद्योगिकी में अपना करियर कैसे शुरू किया?', es: '¿Cómo comenzaste tu carrera en tecnología?' },
        { spk: 'Victor', text: 'First, I studied computer science. Then, I worked in Boston for three years, and finally I moved here.', hi: 'सबसे पहले, मैंने कंप्यूटर विज्ञान का अध्ययन किया। फिर, मैंने बोस्टन में तीन साल काम किया, और अंततः मैं यहाँ आ गया।', es: 'Primero, estudié informática. Luego, trabajé en Boston tres años y finalmente me mudé aquí.' }
      ]
    },
    {
      title: 'Discussing Family Milestones',
      context: 'Rachel and David talk about their parents\' life milestones.',
      charA: { name: 'Rachel', av: '👩‍🎨', role: 'Friend' },
      charB: { name: 'David', av: '👨‍🏫', role: 'Friend' },
      turns: [
        { spk: 'Rachel', text: 'My parents celebrated their 40th wedding anniversary last weekend!', hi: 'मेरे माता-पिता ने पिछले सप्ताहांत अपनी शादी की 40वीं वर्षगांठ मनाई!', es: '¡Mis padres celebraron su 40 aniversario de bodas el fin de semana pasado!' },
        { spk: 'David', text: 'Congratulations! That is an incredible life milestone.', hi: 'बधाई हो! यह एक अविश्वसनीय जीवन मील का पत्थर है।', es: '¡Felicidades! Ese es un hito de vida increíble.' },
        { spk: 'Rachel', text: 'Yes, they met at university, got married in 1986, and raised three children.', hi: 'हाँ, वे विश्वविद्यालय में मिले, 1986 में शादी की, और तीन बच्चों का पालन-पोषण किया।', es: 'Sí, se conocieron en la universidad, se casaron en 1986 y criaron a tres hijos.' },
        { spk: 'David', text: 'What a beautiful life story! Are they retired now?', hi: 'कितनी सुंदर जीवन कहानी है! क्या वे अब सेवानिवृत्त हैं?', es: '¡Qué hermosa historia de vida! ¿Están jubilados ahora?' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u04_l59_p1', lessonId: 'lesson_a1_4_59', stage: 8, type: 'multiple_choice', prompt: 'Choose the correct form for expressing birth: "I ___ in Rome in 1996."', options: [{ id: 'o1', text: 'was born', isCorrect: true }, { id: 'o2', text: 'am born', isCorrect: false }, { id: 'o3', text: 'was be born', isCorrect: false }] },
    { id: 'ex_u04_l59_p2', lessonId: 'lesson_a1_4_59', stage: 8, type: 'fill_blank', prompt: 'Complete with the irregular past tense of grow: "He ___ up in a small mountain village."', sentenceTemplate: 'He ___ up in a small mountain village.', sourceSentence: 'He ___ up in a small mountain village.', options: [{ id: 'o1', text: 'grew', isCorrect: true }, { id: 'o2', text: 'growed', isCorrect: false }, { id: 'o3', text: 'grow', isCorrect: false }] },
    { id: 'ex_u04_l59_p3', lessonId: 'lesson_a1_4_59', stage: 8, type: 'word_ordering', prompt: 'Order the words to describe an educational milestone:', wordBank: ['She', 'graduated', 'from', 'university', 'with', 'honors.'], targetSentence: 'She graduated from university with honors.' },
    { id: 'ex_u04_l59_p4', lessonId: 'lesson_a1_4_59', stage: 8, type: 'match_pairs', prompt: 'Match narrative sequencers with their chronological roles:', pairs: [{ left: 'First', right: 'initial event in sequence' }, { left: 'Then', right: 'following action' }, { left: 'After that', right: 'subsequent milestone' }, { left: 'Finally', right: 'concluding event' }] },
    { id: 'ex_u04_l59_p5', lessonId: 'lesson_a1_4_59', stage: 8, type: 'error_correction', prompt: 'Identify the corrected sentence:', sentenceTemplate: 'She graduated of high school three years ago.', options: [{ id: 'o1', text: 'She graduated from high school three years ago.', isCorrect: true }, { id: 'o2', text: 'She graduated to high school three years ago.', isCorrect: false }, { id: 'o3', text: 'She was graduate from high school three years ago.', isCorrect: false }] },
    { id: 'ex_u04_l59_p6', lessonId: 'lesson_a1_4_59', stage: 9, type: 'listening', prompt: 'Listen and select what the speaker says:', audioText: 'I was born in Canada and grew up in Vancouver.', options: [{ id: 'o1', text: 'I was born in Canada and grew up in Vancouver.', isCorrect: true }, { id: 'o2', text: 'I was burn in Canada and blow up in Vancouver.', isCorrect: false }] },
    { id: 'ex_u04_l59_p7', lessonId: 'lesson_a1_4_59', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'They got married in a beautiful ceremony.', targetSentence: 'They got married in a beautiful ceremony.' },
    { id: 'ex_u04_l59_p8', lessonId: 'lesson_a1_4_59', stage: 10, type: 'multiple_choice', prompt: 'Choose the correct question to ask about where someone grew up:', options: [{ id: 'o1', text: 'Where did you grow up?', isCorrect: true }, { id: 'o2', text: 'Where did you grew up?', isCorrect: false }, { id: 'o3', text: 'Where was you grow up?', isCorrect: false }] },
    { id: 'ex_u04_l59_p9', lessonId: 'lesson_a1_4_59', stage: 11, type: 'dialogue_completion', prompt: 'Complete the biography exchange: "When did your grandfather retire?"', options: [{ id: 'o1', text: 'He retired five years ago after teaching for forty years.', isCorrect: true }, { id: 'o2', text: 'I am reading a book.', isCorrect: false }, { id: 'o3', text: 'The sun is hot today.', isCorrect: false }] },
    { id: 'ex_u04_l59_p10', lessonId: 'lesson_a1_4_59', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'First I studied engineering, then I moved to London to start my career.', audioText: 'First I studied engineering, then I moved to London to start my career.' },
    { id: 'ex_u04_l59_p11', lessonId: 'lesson_a1_4_59', stage: 13, type: 'translation', prompt: 'Translate: "मेरा जन्म 1998 में मैड्रिड में हुआ था।" / "Nací en Madrid en 1998."', targetSentence: 'I was born in Madrid in 1998.' },
    { id: 'ex_u04_l59_p12', lessonId: 'lesson_a1_4_59', stage: 14, type: 'multiple_choice', prompt: 'What preposition follows the verb "graduated"?', options: [{ id: 'o1', text: 'from', isCorrect: true }, { id: 'o2', text: 'of', isCorrect: false }, { id: 'o3', text: 'at', isCorrect: false }] },
    { id: 'ex_u04_l59_p13', lessonId: 'lesson_a1_4_59', stage: 14, type: 'fill_blank', prompt: 'Complete the narrative transition: "___, after many years of hard work, he achieved his goal."', sentenceTemplate: '___, after many years of hard work, he achieved his goal.', sourceSentence: '___, after many years of hard work, he achieved his goal.', options: [{ id: 'o1', text: 'Finally', isCorrect: true }, { id: 'o2', text: 'Because', isCorrect: false }, { id: 'o3', text: 'Although', isCorrect: false }] },
    { id: 'ex_u04_l59_p14', lessonId: 'lesson_a1_4_59', stage: 14, type: 'word_ordering', prompt: 'Order the words to describe moving to a new city:', wordBank: ['Two', 'years', 'later,', 'they', 'moved', 'to', 'Chicago.'], targetSentence: 'Two years later, they moved to Chicago.' },
    { id: 'ex_u04_l59_p15', lessonId: 'lesson_a1_4_59', stage: 14, type: 'speaking', prompt: 'Speak this complete sentence clearly into your microphone:', targetSentence: 'Graduating from university was a proud milestone in my life.', audioText: 'Graduating from university was a proud milestone in my life.' }
  ],
  review: [
    { id: 'ex_u04_l59_r1', lessonId: 'lesson_a1_4_59', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Choose the polite refusal formula:', options: [{ id: 'o1', text: 'I\'d love to, but I have to study tonight.', isCorrect: true }, { id: 'o2', text: 'I love to, but I must study to night.', isCorrect: false }, { id: 'o3', text: 'I will love, but I have study.', isCorrect: false }] },
    { id: 'ex_u04_l59_r2', lessonId: 'lesson_a1_4_59', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete: "Please turn ___ the lights before you leave."', sentenceTemplate: 'Please turn ___ the lights before you leave.', sourceSentence: 'Please turn ___ the lights before you leave.', options: [{ id: 'o1', text: 'off', isCorrect: true }, { id: 'o2', text: 'away', isCorrect: false }, { id: 'o3', text: 'down to', isCorrect: false }] },
    { id: 'ex_u04_l59_r3', lessonId: 'lesson_a1_4_59', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['Would', 'you', 'like', 'to', 'join', 'us', 'for', 'lunch?'], targetSentence: 'Would you like to join us for lunch?' },
    { id: 'ex_u04_l59_r4', lessonId: 'lesson_a1_4_59', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match life milestone phrases:', pairs: [{ left: 'was born', right: 'birth in the past' }, { left: 'grew up', right: 'childhood in a place' }, { left: 'graduated from', right: 'completed university' }, { left: 'got married', right: 'wedding milestone' }] },
    { id: 'ex_u04_l59_r5', lessonId: 'lesson_a1_4_59', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "वह एक छोटे शहर में पला-बढ़ा।"', targetSentence: 'He grew up in a small town.' }
  ],
  assessment: [
    { id: 'ex_u04_l59_a1', lessonId: 'lesson_a1_4_59', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the grammatically correct biographical sentence:', options: [{ id: 'o1', text: 'I was born in London and grew up in a friendly neighborhood.', isCorrect: true }, { id: 'o2', text: 'I am born in London and growed up in friendly neighborhood.', isCorrect: false }, { id: 'o3', text: 'I was bear in London and grow up in neighborhood.', isCorrect: false }] },
    { id: 'ex_u04_l59_a2', lessonId: 'lesson_a1_4_59', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete the sentence: "She graduated ___ university in 2021."', sentenceTemplate: 'She graduated ___ university in 2021.', sourceSentence: 'She graduated ___ university in 2021.', options: [{ id: 'o1', text: 'from', isCorrect: true }, { id: 'o2', text: 'of', isCorrect: false }, { id: 'o3', text: 'to', isCorrect: false }] },
    { id: 'ex_u04_l59_a3', lessonId: 'lesson_a1_4_59', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words correctly:', wordBank: ['First,', 'she', 'studied', 'medicine,', 'then', 'she', 'worked', 'in', 'Paris.'], targetSentence: 'First, she studied medicine, then she worked in Paris.' },
    { id: 'ex_u04_l59_a4', lessonId: 'lesson_a1_4_59', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Select the appropriate response: "Where did you grow up?"', options: [{ id: 'o1', text: 'I grew up in Sydney, Australia, near the coast.', isCorrect: true }, { id: 'o2', text: 'I am drinking coffee.', isCorrect: false }, { id: 'o3', text: 'My shoes are black.', isCorrect: false }] },
    { id: 'ex_u04_l59_a5', lessonId: 'lesson_a1_4_59', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this complete sentence clearly:', targetSentence: 'I was born in 1995, grew up in Chicago, and graduated from university five years ago.', audioText: 'I was born in 1995, grew up in Chicago, and graduated from university five years ago.' }
  ]
};

// =========================================================================
// LESSON 60: A1 Comprehensive Capstone, Fluency Checkpoint & Graduation!
// =========================================================================
export const CONFIG_60: LessonConfig = {
  num: 60,
  title: 'A1 Comprehensive Capstone, Fluency Checkpoint & Graduation!',
  icon: '🎓',
  estMin: 30,
  objTitle: 'Celebrate complete CEFR A1 mastery across all 60 foundational lessons',
  objDesc: 'The ultimate A1 integration capstone uniting introductions, daily routines, directions, shopping, past narratives, and future plans.',
  objHi: 'सभी 60 बुनियादी पाठों में पूर्ण CEFR A1 दक्षता का जश्न मनाएं और स्नातक स्तर का परीक्षण पूरा करें।',
  objEs: '¡Celebra el dominio completo del nivel CEFR A1 a través de las 60 lecciones fundamentales!',
  canDo: [
    'I can communicate confidently across all essential CEFR A1 real-world communication domains.',
    'I can accurately use Present Simple, Present Continuous, Past Simple, and Future forms.',
    'I can understand spoken dialogues, express opinions, order food, shop, and narrate life stories.'
  ],
  canDoHi: [
    'मैं सभी आवश्यक CEFR A1 वास्तविक दुनिया के संचार क्षेत्रों में आत्मविश्वास से संवाद कर सकता हूँ।',
    'मैं Present Simple, Present Continuous, Past Simple और Future रूपों का सटीक उपयोग कर सकता हूँ।',
    'मैं बातचीत समझ सकता हूँ, राय दे सकता हूँ, भोजन का ऑर्डर दे सकता हूँ, खरीदारी कर सकता हूँ और कहानियाँ सुना सकता हूँ।'
  ],
  canDoEs: [
    'Puedo comunicarme con confianza en todos los dominios de comunicación del nivel CEFR A1.',
    'Puedo usar con precisión el Presente Simple, Presente Continuo, Pasado Simple y formas de Futuro.',
    'Puedo entender diálogos, expresar opiniones, pedir comida, comprar y narrar historias.'
  ],
  vocab: [
    { w: 'congratulations', p: '/kənˌɡrætʃ.ʊˈleɪ.ʃənz/', m: 'words expressing praise for an achievement or good fortune', hi: 'बधाई हो!', es: '¡felicitaciones! / ¡enhorabuena!', fr: 'félicitations', de: 'Herzlichen Glückwunsch', pt: 'parabéns', zh: '祝贺 / 恭喜', ar: 'مبروك / تهانينا', ja: 'おめでとうございます', ru: 'поздравления', ex: 'Congratulations on completing the full A1 curriculum!', exHi: 'पूरा A1 पाठ्यक्रम पूरा करने पर बधाई!', exEs: '¡Felicitaciones por completar todo el plan de estudios A1!', ic: '🎉' },
    { w: 'graduation', p: '/ˌɡrædʒ.uˈeɪ.ʃən/', m: 'the receiving or conferring of an academic degree or diploma', hi: 'स्नातक / दीक्षांत समारोह', es: 'graduación', fr: 'remise des diplômes', de: 'Abschlussfeier / Graduierung', pt: 'formatura / graduação', zh: '毕业典礼', ar: 'تخرج', ja: '卒業式', ru: 'выпускной / окончание курса', ex: 'Today is our English curriculum graduation!', exHi: 'आज हमारा अंग्रेजी पाठ्यक्रम दीक्षांत समारोह है!', exEs: '¡Hoy es nuestra graduación del curso de inglés!', ic: '🎓' },
    { w: 'certificate', p: '/səˈtɪf.ɪ.kət/', m: 'an official document attesting a certain fact or achievement', hi: 'प्रमाणपत्र (सर्टिफिकेट)', es: 'certificado / diploma', fr: 'certificat / diplôme', de: 'Zertifikat / Urkunde', pt: 'certificado', zh: '证书', ar: 'شهادة', ja: '証明書 / 修了証', ru: 'сертификат / диплом', ex: 'You earned your official A1 proficiency certificate.', exHi: 'आपने अपना आधिकारिक A1 दक्षता प्रमाणपत्र अर्जित किया।', exEs: 'Obtuviste tu certificado oficial de competencia A1.', ic: '📜' },
    { w: 'mastery', p: '/ˈmɑː.stər.i/', m: 'comprehensive knowledge or skill in a subject or accomplishment', hi: 'महारत / प्रवीणता', es: 'dominio / maestría', fr: 'maîtrise', de: 'Beherrschung / Meisterschaft', pt: 'domínio / maestria', zh: '精通 / 掌握', ar: 'إتقان', ja: '習熟 / マスター', ru: 'мастерство / владение', ex: 'You demonstrated complete mastery of basic English.', exHi: 'आपने बुनियादी अंग्रेजी में पूर्ण महारत का प्रदर्शन किया।', exEs: 'Demostraste un dominio completo del inglés básico.', ic: '⭐' },
    { w: 'confident', p: '/ˈkɒn.fɪ.dənt/', m: 'feeling or showing certainty about something; self-assured', hi: 'आत्मविश्वासी', es: 'seguro / confiado', fr: 'confiant', de: 'selbstbewusst / zuversichtlich', pt: 'confiante', zh: '自信的', ar: 'واثق', ja: '自信がある', ru: 'уверенный', ex: 'I feel confident speaking English now.', exHi: 'अब मुझे अंग्रेजी बोलने में आत्मविश्वास महसूस होता है।', exEs: 'Me siento seguro hablando inglés ahora.', ic: '💪' },
    { w: 'fluency', p: '/ˈfluː.ən.si/', m: 'the quality or condition of being fluent in a language', hi: 'प्रवाह / धाराप्रवाहता', es: 'fluidez', fr: 'aisance / fluidité', de: 'Flüssigkeit / Sprachgewandtheit', pt: 'fluência', zh: '流利度', ar: 'طلاقة', ja: '流暢さ', ru: 'беглость речи', ex: 'Daily practice builds natural speaking fluency.', exHi: 'दैनिक अभ्यास से स्वाभाविक बोलने का प्रवाह बनता है।', exEs: 'La práctica diaria construye una fluidez natural al hablar.', ic: '🌊' },
    { w: 'progress', p: '/ˈprəʊ.ɡres/', m: 'forward or onward movement toward a destination or goal', hi: 'प्रगति / विकास', es: 'progreso / avance', fr: 'progrès', de: 'Fortschritt', pt: 'progresso / avanço', zh: '进步', ar: 'تقدم', ja: '進歩 / 上達', ru: 'прогресс / успехи', ex: 'You have made outstanding progress across sixty lessons.', exHi: 'आपने साठ पाठों में उत्कृष्ट प्रगति की है।', exEs: 'Has hecho un progreso sobresaliente a lo largo de sesenta lecciones.', ic: '📈' },
    { w: 'success', p: '/səkˈses/', m: 'the accomplishment of an aim or purpose', hi: 'सफलता', es: 'éxito', fr: 'succès / réussite', de: 'Erfolg', pt: 'sucesso', zh: '成功', ar: 'نجاح', ja: '成功', ru: 'успех', ex: 'Dedication is the foundation of learning success.', exHi: 'समर्पण सीखने की सफलता की नींव है।', exEs: 'La dedicación es la base del éxito en el aprendizaje.', ic: '🏆' },
    { w: 'conversation', p: '/ˌkɒn.vəˈseɪ.ʃən/', m: 'a talk, especially an informal one, between two or more people', hi: 'बातचीत / वार्तालाप', es: 'conversación', fr: 'conversation', de: 'Gespräch / Konversation', pt: 'conversa', zh: '对话 / 交谈', ar: 'محادثة', ja: '会話', ru: 'разговор / беседа', ex: 'We can hold an entire conversation in English.', exHi: 'हम अंग्रेजी में पूरी बातचीत कर सकते हैं।', exEs: 'Podemos mantener una conversación completa en inglés.', ic: '💬' },
    { w: 'review', p: '/rɪˈvjuː/', m: 'a formal assessment or examination with the possibility of instituting change', hi: 'समीक्षा / दोहराना', es: 'revisión / repaso', fr: 'révision / bilan', de: 'Wiederholung / Überprüfung', pt: 'revisão', zh: '复习 / 总结', ar: 'مراجعة', ja: '復習 / 振り返り', ru: 'обзор / повторение', ex: 'Let us review all the core grammar concepts.', exHi: 'आइए सभी मुख्य व्याकरण अवधारणाओं की समीक्षा करें।', exEs: 'Revisemos todos los conceptos gramaticales clave.', ic: '🔍' },
    { w: 'challenge', p: '/ˈtʃæl.ɪndʒ/', m: 'a task or situation that tests someone\'s abilities', hi: 'चुनौती', es: 'desafío / reto', fr: 'défi', de: 'Herausforderung', pt: 'desafio', zh: '挑战', ar: 'تحدي', ja: '挑戦 / 課題', ru: 'испытание / вызов', ex: 'You conquered every grammar challenge.', exHi: 'आपने हर व्याकरण चुनौती को जीत लिया।', exEs: 'Superaste cada desafío gramatical.', ic: '🧗' },
    { w: 'journey', p: '/ˈdʒɜː.ni/', m: 'the act of traveling or developing over time', hi: 'सफ़र / यात्रा', es: 'viaje / trayectoria', fr: 'parcours / voyage', de: 'Reise', pt: 'jornada', zh: '旅程', ar: 'رحلة', ja: '道のり', ru: 'путь / путешествие', ex: 'The A1 journey is complete, and A2 awaits!', exHi: 'A1 का सफ़र पूरा हो गया है, और A2 इंतज़ार कर रहा है!', exEs: '¡El viaje de A1 está completo y A2 te espera!', ic: '🚀' },
    { w: 'skills', p: '/skɪlz/', m: 'the ability to do something well; expertise', hi: 'कौशल', es: 'habilidades / destrezas', fr: 'compétences', de: 'Fähigkeiten', pt: 'habilidades', zh: '技能', ar: 'مهارات', ja: 'スキル / 技能', ru: 'навыки', ex: 'You developed speaking, listening, reading, and writing skills.', exHi: 'आपने बोलने, सुनने, पढ़ने और लिखने के कौशल विकसित किए।', exEs: 'Desarrollaste habilidades de hablar, escuchar, leer y escribir.', ic: '🎯' },
    { w: 'proud', p: '/praʊd/', m: 'feeling deep pleasure or satisfaction as a result of one\'s achievements', hi: 'गर्व / गर्वित', es: 'orgulloso', fr: 'fier', de: 'stolz', pt: 'orgulhoso', zh: '自豪的 / 骄傲的', ar: 'فخور', ja: '誇りに思う', ru: 'гордый', ex: 'We are very proud of your dedication and work.', exHi: 'हमें आपके समर्पण और काम पर बहुत गर्व है।', exEs: 'Estamos muy orgullosos de tu dedicación y trabajo.', ic: '🌟' },
    { w: 'celebrate', p: '/ˈsel.ə.breɪt/', m: 'to honor or praise publicly', hi: 'जश्न मनाना', es: 'celebrar', fr: 'célébrer', de: 'feiern', pt: 'comemorar', zh: '庆祝', ar: 'يحتفل', ja: '祝う', ru: 'праздновать', ex: 'Let us celebrate this wonderful achievement!', exHi: 'आइए इस अद्भुत उपलब्धि का जश्न मनाएं!', exEs: '¡Celebremos este maravilloso logro!', ic: '🎉' },
    { w: 'future', p: '/ˈfjuː.tʃər/', m: 'the time or a period of time following the moment of speaking or writing', hi: 'भविष्य', es: 'futuro', fr: 'futur / avenir', de: 'Zukunft', pt: 'futuro', zh: '未来', ar: 'مستقبل', ja: '未来', ru: 'будущее', ex: 'Your future in English communication is bright.', exHi: 'अंग्रेजी संचार में आपका भविष्य उज्ज्वल है।', exEs: 'Tu futuro en la comunicación en inglés es brillante.', ic: '✨' },
    { w: 'accomplish', p: '/əˈkʌm.plɪʃ/', m: 'to achieve or complete successfully', hi: 'पूरा करना / हासिल करना', es: 'lograr / cumplir', fr: 'accomplir / réaliser', de: 'vollbringen / erreichen', pt: 'realizar / cumprir', zh: '完成 / 达成', ar: 'ينجز', ja: '達成する', ru: 'совершать / достигать', ex: 'Look at everything you accomplished in A1!', exHi: 'देखें कि आपने A1 में क्या-क्या हासिल किया है!', exEs: '¡Mira todo lo que lograste en A1!', ic: '🏁' },
    { w: 'practice', p: '/ˈpræk.tɪs/', m: 'repeated exercise in or performance of an activity so as to acquire or maintain proficiency', hi: 'अभ्यास', es: 'práctica / practicar', fr: 'pratique', de: 'Übung / Praxis', pt: 'prática', zh: '练习', ar: 'ممارسة', ja: '練習', ru: 'практика', ex: 'Keep up your daily language practice.', exHi: 'अपना दैनिक भाषा अभ्यास जारी रखें।', exEs: 'Mantén tu práctica diaria del idioma.', ic: '🔄' },
    { w: 'ready', p: '/ˈred.i/', m: 'in a suitable state for an activity, action, or situation; fully prepared', hi: 'तैयार', es: 'listo / preparado', fr: 'prêt', de: 'bereit / fertig', pt: 'pronto / preparado', zh: '准备好的', ar: 'جاهز / مستعد', ja: '準備ができた', ru: 'готовый', ex: 'You are completely ready for A2 English!', exHi: 'आप A2 अंग्रेजी के लिए पूरी तरह तैयार हैं!', exEs: '¡Estás completamente listo para el inglés A2!', ic: '✅' },
    { w: 'welcome', p: '/ˈwel.kəm/', m: 'greet someone arriving in a polite or friendly way', hi: 'स्वागत / स्वागत है', es: 'bienvenido', fr: 'bienvenue', de: 'willkommen', pt: 'bem-vindo', zh: '欢迎', ar: 'مرحباً بك', ja: 'ようこそ', ru: 'добро пожаловать', ex: 'Welcome to the global community of English speakers!', exHi: 'अंग्रेजी बोलने वालों के वैश्विक समुदाय में आपका स्वागत है!', exEs: '¡Bienvenido a la comunidad global de angloparlantes!', ic: '🌍' }
  ],
  chunks: [
    { phrase: 'Congratulations on graduating!', meaning: 'Commending complete curriculum mastery', hi: 'स्नातक होने पर बधाई!', es: '¡Felicitaciones por graduarte!', fr: 'Félicitations pour ton diplôme !', de: 'Herzlichen Glückwunsch zum Abschluss!', pt: 'Parabéns pela formatura!', zh: '祝贺顺利毕业！', ar: 'تهانينا على التخرج!', ja: 'ご卒業おめでとうございます！', ru: 'Поздравляем с окончанием курса!', note: 'Milestone celebratory phrase.', ic: '🎓' },
    { phrase: 'I can speak English.', meaning: 'Affirming communicative competency', hi: 'मैं अंग्रेजी बोल सकता हूँ।', es: 'Puedo hablar inglés.', fr: 'Je peux parler anglais.', de: 'Ich kann Englisch sprechen.', pt: 'Eu sei falar inglês.', zh: '我会说英语。', ar: 'أستطيع التحدث باللغة الإنجليزية.', ja: '私は英語を話すことができます。', ru: 'Я умею говорить по-английски.', note: 'Core Can-Do declaration.', ic: '🗣️' },
    { phrase: 'all sixty lessons', meaning: 'the complete A1 scope from Unit 1 to Unit 4', hi: 'सभी साठ पाठ', es: 'las sesenta lecciones', fr: 'les soixante leçons', de: 'alle sechzig Lektionen', pt: 'todas as sessenta lições', zh: '全部六十节课', ar: 'جميع الدروس الستين', ja: '全60レッスン', ru: 'все шестьдесят уроков', note: 'Full curriculum total.', ic: '📚' },
    { phrase: 'ready for the next level', meaning: 'prepared to advance to CEFR A2', hi: 'अगले स्तर के लिए तैयार', es: 'listo para el siguiente nivel', fr: 'prêt pour le niveau suivant', de: 'bereit für die nächste Stufe', pt: 'pronto para o próximo nível', zh: '准备进入下一阶段', ar: 'مستعد للمستوى التالي', ja: '次のレベルへの準備完了', ru: 'готов к следующему уровню', note: 'Forward-looking achievement state.', ic: '🚀' },
    { phrase: 'from start to finish', meaning: 'throughout the entire duration of the course', hi: 'शुरू से अंत तक', es: 'de principio a fin', fr: 'du début à la fin', de: 'von Anfang bis Ende', pt: 'do início ao fim', zh: '从头到尾', ar: 'من البداية إلى النهاية', ja: '最初から最後まで', ru: 'от начала до конца', note: 'Curriculum completion idiom.', ic: '🏁' },
    { phrase: 'practice every day', meaning: 'maintaining continuous learning habits', hi: 'हर दिन अभ्यास करें', es: 'practicar todos los días', fr: 's\'entraîner tous les jours', de: 'jeden Tag üben', pt: 'praticar todos os dias', zh: '每天练习', ar: 'مارس كل يوم', ja: '毎日練習する', ru: 'практиковаться каждый день', note: 'Lifelong learning advice.', ic: '🔄' },
    { phrase: 'hold a conversation', meaning: 'to engage fluently in spoken dialogue with someone', hi: 'बातचीत करना', es: 'mantener una conversación', fr: 'tenir une conversation', de: 'ein Gespräch führen', pt: 'manter uma conversa', zh: '进行对话', ar: 'إجراء محادثة', ja: '会話を続ける', ru: 'вести беседу', note: 'Core oral fluency indicator.', ic: '💬' },
    { phrase: 'A1 English Master', meaning: 'The honor title for completing the foundational curriculum', hi: 'A1 अंग्रेजी मास्टर', es: 'Maestro de inglés A1', fr: 'Maître d\'anglais A1', de: 'A1-Englischmeister', pt: 'Mestre em Inglês A1', zh: 'A1英语大师', ar: 'متقن اللغة الإنجليزية A1', ja: 'A1英語マスター', ru: 'Мастер английского уровня А1', note: 'Graduation badge title.', ic: '👑' }
  ],
  grammar: {
    title: 'Comprehensive CEFR A1 Tense & Structure Synthesis',
    concept: 'Uniting all four foundational English tenses: Present Simple (habits), Present Continuous (now), Past Simple (completed), and Future (be going to / will).',
    patterns: [
      {
        title: 'Present vs. Past vs. Future Master Matrix',
        structure: 'I work (habit) / I am working (now) / I worked (past) / I am going to work (future)',
        rule: 'Select the precise tense based on whether the action is habitual, ongoing, past completed, or planned for the future.',
        examples: [
          { en: 'I study English every day, I studied hard yesterday, and I will continue learning tomorrow.', hi: 'मैं हर दिन अंग्रेजी पढ़ता हूँ, मैंने कल कड़ी मेहनत की, और मैं कल भी सीखना जारी रखूँगा।', es: 'Estudio inglés todos los días, estudié mucho ayer y seguiré aprendiendo mañana.' },
          { en: 'We were beginners, but now we are confident A1 English speakers!', hi: 'हम शुरुआती थे, लेकिन अब हम आत्मविश्वासी A1 अंग्रेजी वक्ता हैं!', es: '¡Éramos principiantes, pero ahora somos hablantes seguros de inglés A1!' }
        ]
      },
      {
        title: 'Questions & Modals Synthesis (Can, Could, Would like, Have to)',
        structure: 'Can you...? / Could you please...? / Would you like to...? / I have to...',
        rule: 'Modals and auxiliary verbs always take base verbs without "to" (except have to / would like to).',
        examples: [
          { en: 'Can you speak English? — Yes, I can speak English clearly!', hi: 'क्या आप अंग्रेजी बोल सकते हैं? — हाँ, मैं स्पष्ट रूप से अंग्रेजी बोल सकता हूँ!', es: '¿Puedes hablar inglés? — ¡Sí, puedo hablar inglés con claridad!' },
          { en: 'Would you like to celebrate with us tonight?', hi: 'क्या आप आज रात हमारे साथ जश्न मनाना चाहेंगे?', es: '¿Te gustaría celebrar con nosotros esta noche?' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'I am graduate from A1 English today.', cor: 'I graduated from A1 English today. (OR: I am graduating today.)', exp: 'Use the past tense or continuous form for graduation.', hi: 'दीक्षांत के लिए "I graduated" या "I am graduating" का प्रयोग करें।', es: 'Usa "I graduated" o "I am graduating".' },
    { inc: 'I can to speak English fluently.', cor: 'I can speak English fluently.', exp: 'Never place "to" after the modal verb "can".', hi: '"Can" के बाद "to" का प्रयोग न करें।', es: 'No uses "to" después del modal "can".' },
    { inc: 'I did study 60 lessons in last month.', cor: 'I studied 60 lessons last month.', exp: 'Use regular past tense "studied" without auxiliary "did" in positive statements.', hi: 'सकारात्मक वाक्यों में "studied" का प्रयोग करें।', es: 'Usa "studied" en oraciones afirmativas.' },
    { inc: 'Congratulation for your success.', cor: 'Congratulations on your success.', exp: 'Say "Congratulations on" (plural with "on").', hi: '"Congratulations on" का प्रयोग करें।', es: 'Se dice "Congratulations on".' },
    { inc: 'Now I am ready to A2 level.', cor: 'Now I am ready for the A2 level.', exp: 'The adjective "ready" takes the preposition "for" before a noun phrase.', hi: 'संज्ञा से पहले "ready for" का प्रयोग करें।', es: 'Se dice "ready for the A2 level".' }
  ],
  dialogues: [
    {
      title: 'A1 Capstone Graduation Interview',
      context: 'Instructor Sarah conducts the final comprehensive oral interview with Alex.',
      charA: { name: 'Sarah', av: '👩‍🏫', role: 'Head Instructor' },
      charB: { name: 'Alex', av: '👨‍🎓', role: 'A1 Graduate' },
      turns: [
        { spk: 'Sarah', text: 'Welcome to your final A1 checkpoint, Alex! Can you introduce yourself and tell me about your daily routine?', hi: 'आपके अंतिम A1 चेकपॉइंट में आपका स्वागत है, एलेक्स! क्या आप अपना परिचय दे सकते हैं और मुझे अपनी दिनचर्या बता सकते हैं?', es: '¡Bienvenido a tu evaluación final de A1, Alex! ¿Puedes presentarte y contarme tu rutina diaria?' },
        { spk: 'Alex', text: 'Hello! My name is Alex. I was born in Madrid and grew up in a quiet town. Every morning, I wake up at seven, drink coffee, and study English.', hi: 'नमस्ते! मेरा नाम एलेक्स है। मेरा जन्म मैड्रिड में हुआ था और मैं एक शांत शहर में पला-बढ़ा। हर सुबह, मैं सात बजे उठता हूँ, कॉफी पीता हूँ, और अंग्रेजी पढ़ता हूँ।', es: '¡Hola! Mi nombre es Alex. Nací en Madrid y crecí en un pueblo tranquilo. Cada mañana me levanto a las siete, tomo café y estudio inglés.' },
        { spk: 'Sarah', text: 'Excellent! What did you do last weekend, and what are your plans for the future?', hi: 'उत्कृष्ट! आपने पिछले सप्ताहांत क्या किया, और भविष्य के लिए आपकी क्या योजनाएं हैं?', es: '¡Excelente! ¿Qué hiciste el fin de semana pasado y cuáles son tus planes para el futuro?' },
        { spk: 'Alex', text: 'Last weekend, I went sightseeing with friends. Next month, I am going to start A2 English because I want to travel the world!', hi: 'पिछले सप्ताहांत, मैं दोस्तों के साथ दर्शनीय स्थल देखने गया था। अगले महीने, मैं A2 अंग्रेजी शुरू करने जा रहा हूँ क्योंकि मैं दुनिया की यात्रा करना चाहता हूँ!', es: 'El fin de semana pasado fui a hacer turismo con amigos. ¡El próximo mes voy a empezar inglés A2 porque quiero viajar por el mundo!' },
        { spk: 'Sarah', text: 'Outstanding work! Congratulations, Alex! You are officially an A1 English graduate!', hi: 'उत्कृष्ट कार्य! बधाई हो, एलेक्स! आप आधिकारिक तौर पर A1 अंग्रेजी स्नातक हैं!', es: '¡Trabajo sobresaliente! ¡Felicitaciones, Alex! ¡Eres oficialmente un graduado de inglés A1!' }
      ]
    },
    {
      title: 'Celebrating Complete Mastery with Peers',
      context: 'Chloe and Ben celebrate finishing all 60 lessons of the A1 curriculum.',
      charA: { name: 'Chloe', av: '👩‍🎨', role: 'A1 Graduate' },
      charB: { name: 'Ben', av: '👨‍💼', role: 'A1 Graduate' },
      turns: [
        { spk: 'Chloe', text: 'Ben, we did it! We finished all sixty lessons from Unit 1 to Unit 4!', hi: 'बेन, हमने कर दिखाया! हमने यूनिट 1 से यूनिट 4 तक के सभी साठ पाठ पूरे कर लिए हैं!', es: '¡Ben, lo logramos! ¡Terminamos las sesenta lecciones desde la Unidad 1 hasta la Unidad 4!' },
        { spk: 'Ben', text: 'Congratulations, Chloe! Looking back, we learned greetings, shopping, past stories, and future plans.', hi: 'बधाई हो, क्लोई! पीछे मुड़कर देखें, तो हमने अभिवादन, खरीदारी, पिछली कहानियाँ और भविष्य की योजनाएँ सीखीं।', es: '¡Felicitaciones, Chloe! Mirando hacia atrás, aprendimos saludos, compras, historias pasadas y planes futuros.' },
        { spk: 'Chloe', text: 'Would you like to celebrate at the Italian restaurant tonight?', hi: 'क्या आप आज रात इटैलियन रेस्तरां में जश्न मनाना चाहेंगे?', es: '¿Te gustaría celebrar en el restaurante italiano esta noche?' },
        { spk: 'Ben', text: 'I would love to! Let\'s toast to our English fluency and our graduation!', hi: 'मुझे बहुत खुशी होगी! आइए हमारी अंग्रेजी धाराप्रवाहता और हमारे दीक्षांत समारोह के लिए जश्न मनाएं!', es: '¡Me encantaría! ¡Brindemos por nuestra fluidez en inglés y nuestra graduación!' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u04_l60_p1', lessonId: 'lesson_a1_4_60', stage: 8, type: 'multiple_choice', prompt: 'Comprehensive Review: Choose the correct sentence with modal "can":', options: [{ id: 'o1', text: 'I can speak and understand English confidently.', isCorrect: true }, { id: 'o2', text: 'I can to speak and understand English.', isCorrect: false }, { id: 'o3', text: 'I can speaking English.', isCorrect: false }] },
    { id: 'ex_u04_l60_p2', lessonId: 'lesson_a1_4_60', stage: 8, type: 'fill_blank', prompt: 'Comprehensive Review: Complete with the preposition: "Congratulations ___ completing all 60 lessons!"', sentenceTemplate: 'Congratulations ___ completing all 60 lessons!', sourceSentence: 'Congratulations ___ completing all 60 lessons!', options: [{ id: 'o1', text: 'on', isCorrect: true }, { id: 'o2', text: 'for', isCorrect: false }, { id: 'o3', text: 'to', isCorrect: false }] },
    { id: 'ex_u04_l60_p3', lessonId: 'lesson_a1_4_60', stage: 8, type: 'word_ordering', prompt: 'Comprehensive Review: Order the words:', wordBank: ['I', 'am', 'proud', 'of', 'my', 'progress', 'in', 'English.'], targetSentence: 'I am proud of my progress in English.' },
    { id: 'ex_u04_l60_p4', lessonId: 'lesson_a1_4_60', stage: 8, type: 'match_pairs', prompt: 'Comprehensive Review: Match tenses with temporal contexts:', pairs: [{ left: 'Present Simple', right: 'daily routines and habits' }, { left: 'Present Continuous', right: 'actions happening right now' }, { left: 'Past Simple', right: 'completed events in the past' }, { left: 'Be Going To', right: 'planned future intentions' }] },
    { id: 'ex_u04_l60_p5', lessonId: 'lesson_a1_4_60', stage: 8, type: 'error_correction', prompt: 'Identify the corrected sentence:', sentenceTemplate: 'Now I am ready to the A2 curriculum.', options: [{ id: 'o1', text: 'Now I am ready for the A2 curriculum.', isCorrect: true }, { id: 'o2', text: 'Now I ready for A2 curriculum.', isCorrect: false }, { id: 'o3', text: 'Now I am ready on A2 curriculum.', isCorrect: false }] },
    { id: 'ex_u04_l60_p6', lessonId: 'lesson_a1_4_60', stage: 9, type: 'listening', prompt: 'Listen and select what the instructor says:', audioText: 'Congratulations on your graduation from the complete A1 curriculum!', options: [{ id: 'o1', text: 'Congratulations on your graduation from the complete A1 curriculum!', isCorrect: true }, { id: 'o2', text: 'Considerations on your generation from the compete A1 curriculum!', isCorrect: false }] },
    { id: 'ex_u04_l60_p7', lessonId: 'lesson_a1_4_60', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'I can hold a conversation in English with confidence.', targetSentence: 'I can hold a conversation in English with confidence.' },
    { id: 'ex_u04_l60_p8', lessonId: 'lesson_a1_4_60', stage: 10, type: 'multiple_choice', prompt: 'Choose the correct question to ask about future learning goals:', options: [{ id: 'o1', text: 'What are you going to learn next?', isCorrect: true }, { id: 'o2', text: 'What are you will learn next?', isCorrect: false }, { id: 'o3', text: 'What you are going learn next?', isCorrect: false }] },
    { id: 'ex_u04_l60_p9', lessonId: 'lesson_a1_4_60', stage: 11, type: 'dialogue_completion', prompt: 'Complete the graduation conversation: "How do you feel after completing 60 lessons?"', options: [{ id: 'o1', text: 'I feel very proud and confident in my speaking skills.', isCorrect: true }, { id: 'o2', text: 'I am drinking orange juice.', isCorrect: false }, { id: 'o3', text: 'The bus station is near.', isCorrect: false }] },
    { id: 'ex_u04_l60_p10', lessonId: 'lesson_a1_4_60', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'I have mastered sixty English lessons and I am ready for the next level!', audioText: 'I have mastered sixty English lessons and I am ready for the next level!' },
    { id: 'ex_u04_l60_p11', lessonId: 'lesson_a1_4_60', stage: 13, type: 'translation', prompt: 'Translate: "पूरा A1 पाठ्यक्रम पूरा करने पर बधाई!" / "¡Felicitaciones por completar todo el plan de estudios A1!"', targetSentence: 'Congratulations on completing the full A1 curriculum!' },
    { id: 'ex_u04_l60_p12', lessonId: 'lesson_a1_4_60', stage: 14, type: 'multiple_choice', prompt: 'Which phrase signifies engaging smoothly in spoken communication?', options: [{ id: 'o1', text: 'hold a conversation', isCorrect: true }, { id: 'o2', text: 'fill a customs form', isCorrect: false }, { id: 'o3', text: 'withdraw money', isCorrect: false }] },
    { id: 'ex_u04_l60_p13', lessonId: 'lesson_a1_4_60', stage: 14, type: 'fill_blank', prompt: 'Complete with the adjective: "I feel ___ speaking English in everyday situations."', sentenceTemplate: 'I feel ___ speaking English in everyday situations.', sourceSentence: 'I feel ___ speaking English in everyday situations.', options: [{ id: 'o1', text: 'confident', isCorrect: true }, { id: 'o2', text: 'confidently', isCorrect: false }, { id: 'o3', text: 'confidence', isCorrect: false }] },
    { id: 'ex_u04_l60_p14', lessonId: 'lesson_a1_4_60', stage: 14, type: 'word_ordering', prompt: 'Order the words to declare readiness:', wordBank: ['We', 'are', 'fully', 'ready', 'for', 'level', 'A2.'], targetSentence: 'We are fully ready for level A2.' },
    { id: 'ex_u04_l60_p15', lessonId: 'lesson_a1_4_60', stage: 14, type: 'speaking', prompt: 'Speak this complete sentence clearly into your microphone:', targetSentence: 'I can introduce myself, describe my routines, share past stories, and express future goals in English.', audioText: 'I can introduce myself, describe my routines, share past stories, and express future goals in English.' }
  ],
  review: [
    { id: 'ex_u04_l60_r1', lessonId: 'lesson_a1_4_60', stage: 16, type: 'multiple_choice', prompt: 'Capstone Retrieval: Choose the correct biographical statement:', options: [{ id: 'o1', text: 'I was born in 1998 and grew up in a beautiful coastal city.', isCorrect: true }, { id: 'o2', text: 'I am born in 1998 and growed up in city.', isCorrect: false }, { id: 'o3', text: 'I was bear in 1998 and grew up in city.', isCorrect: false }] },
    { id: 'ex_u04_l60_r2', lessonId: 'lesson_a1_4_60', stage: 16, type: 'fill_blank', prompt: 'Capstone Retrieval: Complete: "Would you like ___ join us for dinner tonight?"', sentenceTemplate: 'Would you like ___ join us for dinner tonight?', sourceSentence: 'Would you like ___ join us for dinner tonight?', options: [{ id: 'o1', text: 'to', isCorrect: true }, { id: 'o2', text: 'for', isCorrect: false }, { id: 'o3', text: 'at', isCorrect: false }] },
    { id: 'ex_u04_l60_r3', lessonId: 'lesson_a1_4_60', stage: 16, type: 'word_ordering', prompt: 'Capstone Retrieval: Order the words:', wordBank: ['She', 'graduated', 'from', 'university', 'last', 'year.'], targetSentence: 'She graduated from university last year.' },
    { id: 'ex_u04_l60_r4', lessonId: 'lesson_a1_4_60', stage: 16, type: 'match_pairs', prompt: 'Capstone Retrieval: Match core functions across all 4 units:', pairs: [{ left: 'Unit 1', right: 'Foundations, greetings, and introductions' }, { left: 'Unit 2', right: 'Daily routines, time, and home life' }, { left: 'Unit 3', right: 'Navigating towns, shopping, and dining out' }, { left: 'Unit 4', right: 'Community services, past stories, future plans, and graduation' }] },
    { id: 'ex_u04_l60_r5', lessonId: 'lesson_a1_4_60', stage: 16, type: 'translation', prompt: 'Capstone Retrieval: Translate into English: "मैं धाराप्रवाह अंग्रेजी बोल सकता हूँ।"', targetSentence: 'I can speak English fluently.' }
  ],
  assessment: [
    { id: 'ex_u04_l60_a1', lessonId: 'lesson_a1_4_60', stage: 17, type: 'multiple_choice', prompt: 'A1 Master Exam: Select the comprehensive correct statement across all core domains:', options: [{ id: 'o1', text: 'I study English every day, I visited London last year, and I am going to travel to Canada next summer.', isCorrect: true }, { id: 'o2', text: 'I study English every day, I visit London last year, and I am will travel to Canada.', isCorrect: false }, { id: 'o3', text: 'I am study English every day, I visited London, and I going travel.', isCorrect: false }] },
    { id: 'ex_u04_l60_a2', lessonId: 'lesson_a1_4_60', stage: 17, type: 'fill_blank', prompt: 'A1 Master Exam: Complete the sentence: "I feel proud and ___ speaking English in everyday conversations."', sentenceTemplate: 'I feel proud and ___ speaking English in everyday conversations.', sourceSentence: 'I feel proud and ___ speaking English in everyday conversations.', options: [{ id: 'o1', text: 'confident', isCorrect: true }, { id: 'o2', text: 'confidence', isCorrect: false }, { id: 'o3', text: 'confidently', isCorrect: false }] },
    { id: 'ex_u04_l60_a3', lessonId: 'lesson_a1_4_60', stage: 17, type: 'word_ordering', prompt: 'A1 Master Exam: Order the words correctly:', wordBank: ['Congratulations', 'on', 'completing', 'all', 'sixty', 'English', 'lessons!'], targetSentence: 'Congratulations on completing all sixty English lessons!' },
    { id: 'ex_u04_l60_a4', lessonId: 'lesson_a1_4_60', stage: 17, type: 'dialogue_completion', prompt: 'A1 Master Exam: Select the appropriate capstone response: "Are you ready to advance to CEFR Level A2?"', options: [{ id: 'o1', text: 'Yes, I have completed all sixty lessons and I am ready for Level A2!', isCorrect: true }, { id: 'o2', text: 'I am buying bread at the bakery.', isCorrect: false }, { id: 'o3', text: 'The train left ten minutes ago.', isCorrect: false }] },
    { id: 'ex_u04_l60_a5', lessonId: 'lesson_a1_4_60', stage: 17, type: 'speaking', prompt: 'A1 Master Exam: Speak this complete graduation declaration clearly:', targetSentence: 'I have achieved complete mastery of CEFR Level A1 English and I am ready for the future!', audioText: 'I have achieved complete mastery of CEFR Level A1 English and I am ready for the future!' }
  ]
};

console.log('Configs for 58, 59, 60 ready.');
