import { LessonConfig } from './unit4_builder_helper';

// =========================================================================
// LESSON 55: Future Intentions, Plans & Predictions (going to / will)
// =========================================================================
export const CONFIG_55: LessonConfig = {
  num: 55,
  title: 'Future Intentions, Plans & Predictions (going to / will)',
  icon: '🚀',
  estMin: 25,
  objTitle: 'Express future arrangements, plans, and spontaneous decisions',
  objDesc: 'Master "be going to" for planned intentions and "will" for spontaneous decisions and future predictions.',
  objHi: 'भविष्य के इरादों, योजनाओं और तुरंत लिए गए निर्णयों को व्यक्त करना सीखें।',
  objEs: 'Aprende a expresar intenciones futuras, planes y decisiones espontáneas con "going to" y "will".',
  canDo: [
    'I can use "be going to" to talk about planned future actions.',
    'I can use "will" for spontaneous decisions, offers, and promises.',
    'I can make simple predictions about weather and events.'
  ],
  canDoHi: [
    'मैं योजनाबद्ध भविष्य की कार्रवाइयों के बारे में बात करने के लिए "be going to" का उपयोग कर सकता हूँ।',
    'मैं त्वरित निर्णयों, प्रस्तावों और वादों के लिए "will" का उपयोग कर सकता हूँ।',
    'मैं मौसम और घटनाओं के बारे में सरल भविष्यवाणियां कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo usar "be going to" para hablar sobre planes futuros.',
    'Puedo usar "will" para decisiones espontáneas, ofertas y promesas.',
    'Puedo hacer predicciones sencillas sobre el clima y eventos.'
  ],
  vocab: [
    { w: 'plan', p: '/plæn/', m: 'a detailed proposal for doing or achieving something in the future', hi: 'योजना (प्लान)', es: 'plan', fr: 'plan / projet', de: 'Plan', pt: 'plano', zh: '计划', ar: 'خطة', ja: '計画', ru: 'план', ex: 'What is your plan for the upcoming weekend?', exHi: 'आगामी सप्ताहांत के लिए आपकी क्या योजना है?', exEs: '¿Cuál es tu plan para el próximo fin de semana?', ic: '📋' },
    { w: 'intention', p: '/ɪnˈten.ʃən/', m: 'a thing intended; an aim or plan', hi: 'इरादा', es: 'intención', fr: 'intention', de: 'Absicht', pt: 'intenção', zh: '意图', ar: 'نية', ja: '意図', ru: 'намерение', ex: 'Her intention is to study biology next year.', exHi: 'उसका इरादा अगले साल जीव विज्ञान पढ़ने का है।', exEs: 'Su intención es estudiar biología el próximo año.', ic: '🎯' },
    { w: 'decision', p: '/dɪˈsɪʒ.ən/', m: 'a conclusion or resolution reached after consideration', hi: 'निर्णय / फ़ैसला', es: 'decisión', fr: 'décision', de: 'Entscheidung', pt: 'decisão', zh: '决定', ar: 'قرار', ja: '決定', ru: 'решение', ex: 'I made a sudden decision to buy the tickets.', exHi: 'मैंने टिकट खरीदने का अचानक निर्णय लिया।', exEs: 'Tomé la decisión repentina de comprar las entradas.', ic: '💡' },
    { w: 'prediction', p: '/prɪˈdɪk.ʃən/', m: 'a thing predicted; a forecast of what will happen in the future', hi: 'भविष्यवाणी', es: 'predicción', fr: 'prédiction', de: 'Vorhersage', pt: 'previsão', zh: '预测', ar: 'تنبؤ', ja: '予測', ru: 'предсказание / прогноз', ex: 'The weather prediction says it will rain tomorrow.', exHi: 'मौसम की भविष्यवाणी कहती है कि कल बारिश होगी।', exEs: 'El pronóstico del tiempo dice que lloverá mañana.', ic: '🔮' },
    { w: 'promise', p: '/ˈprɒm.ɪs/', m: 'a declaration that one will definitely do something', hi: 'वादा', es: 'promesa', fr: 'promesse', de: 'Versprechen', pt: 'promessa', zh: '承诺', ar: 'وعد', ja: '約束', ru: 'обещание', ex: 'I promise I will call you when I arrive.', exHi: 'मैं वादा करता हूँ कि पहुँचने पर आपको कॉल करूँगा।', exEs: 'Te prometo que te llamaré cuando llegue.', ic: '🤞' },
    { w: 'tomorrow', p: '/təˈmɒr.əʊ/', m: 'on the day after today', hi: 'कल (आने वाला)', es: 'mañana', fr: 'demain', de: 'morgen', pt: 'amanhã', zh: '明天', ar: 'غداً', ja: '明日', ru: 'завтра', ex: 'We are going to start our new project tomorrow.', exHi: 'हम कल अपना नया प्रोजेक्ट शुरू करने जा रहे हैं।', exEs: 'Vamos a comenzar nuestro nuevo proyecto mañana.', ic: '📅' },
    { w: 'tonight', p: '/təˈnaɪt/', m: 'on the present evening or night', hi: 'आज रात', es: 'esta noche', fr: 'ce soir', de: 'heute Abend', pt: 'hoje à noite', zh: '今晚', ar: 'الليلة', ja: '今夜', ru: 'сегодня вечером', ex: 'I think I will cook dinner at home tonight.', exHi: 'मुझे लगता है कि मैं आज रात घर पर खाना बनाऊँगा।', exEs: 'Creo que cocinaré la cena en casa esta noche.', ic: '🌙' },
    { w: 'future', p: '/ˈfjuː.tʃər/', m: 'the period of time that will come after the present', hi: 'भविष्य', es: 'futuro', fr: 'futur / avenir', de: 'Zukunft', pt: 'futuro', zh: '未来', ar: 'مستقبل', ja: '未来', ru: 'будущее', ex: 'In the future, I want to travel across Asia.', exHi: 'भविष्य में, मैं पूरे एशिया की यात्रा करना चाहता हूँ।', exEs: 'En el futuro, quiero viajar por toda Asia.', ic: '🔭' },
    { w: 'soon', p: '/suːn/', m: 'in or after a short time', hi: 'जल्द ही', es: 'pronto', fr: 'bientôt', de: 'bald', pt: 'em breve / logo', zh: '很快', ar: 'قريباً', ja: 'もうすぐ', ru: 'скоро', ex: 'The train is going to arrive soon.', exHi: 'ट्रेन जल्द ही आने वाली है।', exEs: 'El tren va a llegar pronto.', ic: '⏱️' },
    { w: 'next', p: '/nekst/', m: 'coming immediately after the present one in time or order', hi: 'अगला', es: 'próximo / siguiente', fr: 'prochain', de: 'nächste', pt: 'próximo', zh: '下一次', ar: 'القادم', ja: '次の', ru: 'следующий', ex: 'Next week, we are going to visit our grandparents.', exHi: 'अगले सप्ताह, हम अपने दादा-दादी से मिलने जा रहे हैं।', exEs: 'La próxima semana, vamos a visitar a nuestros abuelos.', ic: '⏭️' },
    { w: 'probably', p: '/ˈprɒb.ə.bli/', m: 'almost certainly; as far as one knows or can tell', hi: 'शायद / संभवतः', es: 'probablemente', fr: 'probablement', de: 'wahrscheinlich', pt: 'provavelmente', zh: '可能', ar: 'على الأرجح', ja: 'おそらく', ru: 'вероятно', ex: 'It will probably be sunny this afternoon.', exHi: 'आज दोपहर शायद धूप रहेगी।', exEs: 'Probablemente estará soleado esta tarde.', ic: '🌤️' },
    { w: 'maybe', p: '/ˈmeɪ.bi/', m: 'perhaps; possibly', hi: 'शायद', es: 'tal vez / quizás', fr: 'peut-être', de: 'vielleicht', pt: 'talvez', zh: '也许', ar: 'ربما', ja: 'たぶん', ru: 'может быть', ex: 'Maybe I will join the gym next month.', exHi: 'शायद मैं अगले महीने जिम में शामिल हो जाऊँगा।', exEs: 'Tal vez me inscriba en el gimnasio el próximo mes.', ic: '❓' },
    { w: 'hope', p: '/həʊp/', m: 'a feeling of expectation and desire for a certain thing to happen', hi: 'आशा / उम्मीद', es: 'esperanza / esperar', fr: 'espoir / espérer', de: 'hoffen', pt: 'esperança / esperar', zh: '希望', ar: 'أمل / يأمل', ja: '希望', ru: 'надежда / надеяться', ex: 'I hope you will have a safe trip.', exHi: 'मुझे आशा है कि आपकी यात्रा सुरक्षित होगी।', exEs: 'Espero que tengas un viaje seguro.', ic: '🌈' },
    { w: 'career', p: '/kəˈrɪər/', m: 'an occupation undertaken for a significant period of a person\'s life', hi: 'करियर / व्यवसाय', es: 'carrera profesional', fr: 'carrière', de: 'Karriere / Beruf', pt: 'carreira', zh: '职业生涯', ar: 'مهنة', ja: 'キャリア', ru: 'карьера', ex: 'She is going to pursue a career in technology.', exHi: 'वह प्रौद्योगिकी में अपना करियर बनाने जा रही है।', exEs: 'Ella va a seguir una carrera en tecnología.', ic: '💼' },
    { w: 'graduate', p: '/ˈɡrædʒ.u.eɪt/', m: 'to complete a course of study at a school, college, or university', hi: 'स्नातक होना', es: 'graduarse', fr: 'obtenir son diplôme', de: 'den Abschluss machen', pt: 'formar-se / graduar-se', zh: '毕业', ar: 'يتخرج', ja: '卒業する', ru: 'выпускаться / окончить вуз', ex: 'He is going to graduate next June.', exHi: 'वह अगले जून में स्नातक होने जा रहा है।', exEs: 'Él se va a graduar el próximo junio.', ic: '🎓' },
    { w: 'move', p: '/muːv/', m: 'to go in a specified direction or change residence', hi: 'स्थानांतरित होना / जाना', es: 'mudarse / mover', fr: 'déménager', de: 'umziehen', pt: 'mudar-se', zh: '搬家', ar: 'ينتقل', ja: '引っ越す', ru: 'переезжать', ex: 'They are going to move into a new apartment.', exHi: 'वे एक नए अपार्टमेंट में जाने वाले हैं।', exEs: 'Se van a mudar a un nuevo apartamento.', ic: '📦' },
    { w: 'attend', p: '/əˈtend/', m: 'to be present at an event, meeting, or function', hi: 'उपस्थित होना / भाग लेना', es: 'asistir a', fr: 'assister à', de: 'teilnehmen', pt: 'comparecer / assistir a', zh: '参加', ar: 'يحضر', ja: '出席する', ru: 'присутствовать', ex: 'I will attend the conference next Friday.', exHi: 'मैं अगले शुक्रवार को सम्मेलन में भाग लूँगा।', exEs: 'Asistiré a la conferencia el próximo viernes.', ic: '🎟️' },
    { w: 'invite', p: '/ɪnˈvaɪt/', m: 'to make a polite, formal, or friendly request to someone to go somewhere', hi: 'आमंत्रित करना', es: 'invitar', fr: 'inviter', de: 'einladen', pt: 'invitar', zh: '邀请', ar: 'يدعو', ja: '招待する', ru: 'приглашать', ex: 'I will invite all our friends to the celebration.', exHi: 'मैं अपने सभी दोस्तों को उत्सव में आमंत्रित करूँगा।', exEs: 'Invitaré a todos nuestros amigos a la celebración.', ic: '💌' },
    { w: 'organize', p: '/ˈɔː.ɡən.aɪz/', m: 'to arrange systematic plans or events', hi: 'आयोजित करना', es: 'organizar', fr: 'organiser', de: 'organisieren', pt: 'organizar', zh: '组织', ar: 'ينظم', ja: '整理する / 企画する', ru: 'организовывать', ex: 'We are going to organize a community charity run.', exHi: 'हम एक सामुदायिक चैरिटी दौड़ आयोजित करने जा रहे हैं।', exEs: 'Vamos a organizar una carrera benéfica comunitaria.', ic: '🗓️' },
    { w: 'schedule', p: '/ˈʃedʒ.uːl/', m: 'a plan for carrying out a process or procedure', hi: 'समय सारणी / शेड्यूल', es: 'horario / agenda', fr: 'calendrier / emploi du temps', de: 'Zeitplan', pt: 'cronograma / agenda', zh: '日程表', ar: 'جدول زمني', ja: '予定表', ru: 'расписание / график', ex: 'I will check my schedule and let you know.', exHi: 'मैं अपना शेड्यूल देखकर आपको बताऊँगा।', exEs: 'Revisaré mi agenda y te lo haré saber.', ic: '📅' }
  ],
  chunks: [
    { phrase: 'I am going to...', meaning: 'Expressing a planned future intention', hi: 'मैं ... करने जा रहा हूँ', es: 'Voy a...', fr: 'Je vais...', de: 'Ich werde (Plan)...', pt: 'Eu vou...', zh: '我打算...', ar: 'أنا سأقوم بـ...', ja: '〜する予定です', ru: 'Я собираюсь...', note: 'Use for pre-decided plans.', ic: '🎯' },
    { phrase: 'I will help you.', meaning: 'Spontaneous offer of assistance', hi: 'मैं आपकी मदद करूँगा।', es: 'Te ayudaré.', fr: 'Je vais t\'aider.', de: 'Ich helfe dir.', pt: 'Eu vou te ajudar.', zh: '我会帮你的。', ar: 'سأساعدك.', ja: 'お手伝いします。', ru: 'Я помогу тебе.', note: 'Instant decision/offer.', ic: '🤝' },
    { phrase: 'What are you going to do?', meaning: 'Asking about future plans', hi: 'आप क्या करने जा रहे हैं?', es: '¿Qué vas a hacer?', fr: 'Qu\'est-ce que tu vas faire ?', de: 'Was wirst du tun?', pt: 'O que você vai fazer?', zh: '你打算做什么？', ar: 'ماذا ستفعل؟', ja: '何をする予定ですか？', ru: 'Что ты собираешься делать?', note: 'Standard inquiry for upcoming plans.', ic: '❓' },
    { phrase: 'It will probably rain.', meaning: 'Making a future weather forecast/prediction', hi: 'शायद बारिश होगी।', es: 'Probablemente lloverá.', fr: 'Il va probablement pleuvoir.', de: 'Es wird wahrscheinlich regnen.', pt: 'Provavelmente vai chover.', zh: '可能会下雨。', ar: 'من المحتمل أن تمطر.', ja: 'おそらく雨が降るでしょう。', ru: 'Вероятно, пойдет дождь.', note: 'Prediction with "will".', ic: '🌧️' },
    { phrase: 'I promise I will...', meaning: 'Making a firm personal commitment', hi: 'मैं वादा करता हूँ कि मैं...', es: 'Prometo que...', fr: 'Je promets que...', de: 'Ich verspreche, ich werde...', pt: 'Prometo que vou...', zh: '我保证我会...', ar: 'أعدك بأنني...', ja: '約束します...', ru: 'Я обещаю, что...', note: 'Commitment structure with "will".', ic: '🤞' },
    { phrase: 'next weekend', meaning: 'the weekend of the upcoming week', hi: 'अगले सप्ताहांत', es: 'el próximo fin de semana', fr: 'le week-end prochain', de: 'nächstes Wochenende', pt: 'no próximo fim de semana', zh: '下周末', ar: 'عطلة نهاية الأسبوع القادمة', ja: '来週末', ru: 'в следующие выходные', note: 'Future time marker.', ic: '📅' },
    { phrase: 'I think I will...', meaning: 'Making a decision at the moment of speaking', hi: 'मुझे लगता है कि मैं ... करूँगा', es: 'Creo que voy a...', fr: 'Je pense que je vais...', de: 'Ich denke, ich werde...', pt: 'Acho que vou...', zh: '我想我会...', ar: 'أعتقد أنني سـ...', ja: '〜しようと思います', ru: 'Думаю, я...', note: 'Instant decision formula.', ic: '💡' },
    { phrase: 'look forward to', meaning: 'to await something with pleasure', hi: 'उत्सुकता से प्रतीक्षा करना', es: 'esperar con ilusión', fr: 'avoir hâte de', de: 'sich freuen auf', pt: 'estar ansioso por', zh: '期待', ar: 'تتطلع إلى', ja: '楽しみにする', ru: 'с нетерпением ждать', note: 'Followed by verb-ing or noun.', ic: '🎉' }
  ],
  grammar: {
    title: 'Future Forms: "Be Going To" vs. "Will"',
    concept: 'Distinguishing between pre-planned intentions (be going to) and spontaneous decisions / promises / predictions (will).',
    patterns: [
      {
        title: 'Be Going To + Base Verb (Prior Plans & Intentions)',
        structure: 'Subject + am/is/are + going to + base verb',
        rule: 'Use "be going to" when a decision was already made before speaking.',
        examples: [
          { en: 'I am going to visit my sister next Sunday.', hi: 'मैं अगले रविवार को अपनी बहन से मिलने जा रहा हूँ।', es: 'Voy a visitar a mi hermana el próximo domingo.' },
          { en: 'They are going to move to Chicago next month.', hi: 'वे अगले महीने शिकागो जाने वाले हैं।', es: 'Se van a mudar a Chicago el próximo mes.' }
        ]
      },
      {
        title: 'Will + Base Verb (Instant Decisions, Offers, Predictions)',
        structure: 'Subject + will (\'ll) / will not (won\'t) + base verb',
        rule: 'Use "will" for decisions made at the moment of speaking, promises, offers, or general predictions.',
        examples: [
          { en: 'The phone is ringing. I will answer it!', hi: 'फ़ोन बज रहा है। मैं उठाता हूँ!', es: 'El teléfono está sonando. ¡Yo contesto!' },
          { en: 'I promise I won\'t forget your birthday.', hi: 'मैं वादा करता हूँ कि मैं आपका जन्मदिन नहीं भूलूँगा।', es: 'Te prometo que no olvidaré tu cumpleaños.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'I am going to visit you tomorrow, I promise.', cor: 'I will visit you tomorrow, I promise.', exp: 'Use "will" for promises.', hi: 'वादों के लिए "will" का प्रयोग करें।', es: 'Usa "will" para promesas.' },
    { inc: 'I will to call you tonight.', cor: 'I will call you tonight.', exp: 'Do not use "to" after the modal auxiliary "will".', hi: '"Will" के बाद "to" न लगाएं।', es: 'No uses "to" después del modal "will".' },
    { inc: 'She is go to buy a new laptop.', cor: 'She is going to buy a new laptop.', exp: 'The structure is "be going to + verb", requiring "going".', hi: '"Be going to" में "going" का प्रयोग आवश्यक है।', es: 'La estructura es "be going to + verbo".' },
    { inc: 'I think it is going rain.', cor: 'I think it is going to rain. (OR: I think it will rain.)', exp: 'Do not omit "to" in "going to rain".', hi: '"Going to rain" में "to" न छोड़ें।', es: 'No omitas "to" en "going to rain".' },
    { inc: 'Are you will come to the party?', cor: 'Will you come to the party? (OR: Are you going to come?)', exp: 'Do not mix "Are" and "will" together.', hi: '"Are" और "will" को एक साथ न मिलाएँ।', es: 'No mezcles "Are" y "will" juntos.' }
  ],
  dialogues: [
    {
      title: 'Discussing Weekend Plans',
      context: 'Noah and Maya talk about their upcoming weekend schedule.',
      charA: { name: 'Noah', av: '👨‍💻', role: 'Coworker' },
      charB: { name: 'Maya', av: '👩‍💼', role: 'Coworker' },
      turns: [
        { spk: 'Noah', text: 'Hey Maya! What are you going to do this weekend?', hi: 'अरे माया! आप इस सप्ताहांत क्या करने जा रहे हैं?', es: '¡Hola Maya! ¿Qué vas a hacer este fin de semana?' },
        { spk: 'Maya', text: 'I am going to attend an outdoor photography workshop on Saturday.', hi: 'मैं शनिवार को एक आउटडोर फोटोग्राफी कार्यशाला में भाग लेने जा रही हूँ।', es: 'Voy a asistir a un taller de fotografía al aire libre el sábado.' },
        { spk: 'Noah', text: 'That sounds exciting! The forecast says it will be clear and sunny.', hi: 'यह रोमांचक लगता है! पूर्वानुमान कहता है कि मौसम साफ और धूप वाला रहेगा।', es: '¡Eso suena emocionante! El pronóstico dice que estará despejado y soleado.' },
        { spk: 'Maya', text: 'Awesome! What about you? Do you have any plans?', hi: 'बहुत बढ़िया! आपके बारे में क्या? क्या आपकी कोई योजना है?', es: '¡Genial! ¿Y tú? ¿Tienes algún plan?' },
        { spk: 'Noah', text: 'I think I will stay home and cook a nice dinner for my family.', hi: 'मुझे लगता है कि मैं घर पर रहूँगा और अपने परिवार के लिए अच्छा खाना बनाऊँगा।', es: 'Creo que me quedaré en casa y cocinaré una buena cena para mi familia.' }
      ]
    },
    {
      title: 'Making a Spontaneous Offer',
      context: 'Lucas offers to help Emma carry heavy boxes.',
      charA: { name: 'Emma', av: '👩‍🏫', role: 'Colleague' },
      charB: { name: 'Lucas', av: '👨‍🏫', role: 'Colleague' },
      turns: [
        { spk: 'Emma', text: 'Oh, these shipment boxes are really heavy!', hi: 'ओह, ये शिपमेंट बॉक्स वाकई बहुत भारी हैं!', es: '¡Oh, estas cajas de envío son realmente pesadas!' },
        { spk: 'Lucas', text: 'Don\'t worry! I will help you carry them to the storage room.', hi: 'चिंता मत करो! मैं उन्हें स्टोर रूम तक ले जाने में आपकी मदद करूँगा।', es: '¡No te preocupes! Te ayudaré a llevarlas al almacén.' },
        { spk: 'Emma', text: 'Thank you so much, Lucas! That is very kind of you.', hi: 'बहुत-बहुत धन्यवाद, लुकास! यह आपकी बहुत दयालुता है।', es: '¡Muchas gracias, Lucas! Es muy amable de tu parte.' },
        { spk: 'Lucas', text: 'You\'re welcome! I will hold the door open for you.', hi: 'आपका स्वागत है! मैं आपके लिए दरवाजा खुला रखूँगा।', es: '¡De nada! Te mantendré la puerta abierta.' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u04_l55_p1', lessonId: 'lesson_a1_4_55', stage: 8, type: 'multiple_choice', prompt: 'Select the form for a prior planned intention: "We ___ to visit Spain next month."', options: [{ id: 'o1', text: 'are going', isCorrect: true }, { id: 'o2', text: 'will going', isCorrect: false }, { id: 'o3', text: 'are will', isCorrect: false }] },
    { id: 'ex_u04_l55_p2', lessonId: 'lesson_a1_4_55', stage: 8, type: 'fill_blank', prompt: 'Complete the spontaneous offer: "That box looks heavy. I ___ carry it for you."', sentenceTemplate: 'That box looks heavy. I ___ carry it for you.', sourceSentence: 'That box looks heavy. I ___ carry it for you.', options: [{ id: 'o1', text: 'will', isCorrect: true }, { id: 'o2', text: 'going to', isCorrect: false }, { id: 'o3', text: 'am to', isCorrect: false }] },
    { id: 'ex_u04_l55_p3', lessonId: 'lesson_a1_4_55', stage: 8, type: 'word_ordering', prompt: 'Order the words to make a future intention statement:', wordBank: ['She', 'is', 'going', 'to', 'start', 'her', 'new', 'job', 'tomorrow.'], targetSentence: 'She is going to start her new job tomorrow.' },
    { id: 'ex_u04_l55_p4', lessonId: 'lesson_a1_4_55', stage: 8, type: 'match_pairs', prompt: 'Match future functions with examples:', pairs: [{ left: 'prior intention', right: 'I am going to study tonight.' }, { left: 'spontaneous offer', right: 'I will carry your bag.' }, { left: 'promise', right: 'I will not forget to call.' }, { left: 'prediction', right: 'It will probably rain tomorrow.' }] },
    { id: 'ex_u04_l55_p5', lessonId: 'lesson_a1_4_55', stage: 8, type: 'error_correction', prompt: 'Identify the corrected sentence:', sentenceTemplate: 'I will to help you with that task right now.', options: [{ id: 'o1', text: 'I will help you with that task right now.', isCorrect: true }, { id: 'o2', text: 'I will helping you with that task right now.', isCorrect: false }, { id: 'o3', text: 'I will to helping you with that task right now.', isCorrect: false }] },
    { id: 'ex_u04_l55_p6', lessonId: 'lesson_a1_4_55', stage: 9, type: 'listening', prompt: 'Listen and select what the speaker says:', audioText: 'We are going to move to our new apartment next weekend.', options: [{ id: 'o1', text: 'We are going to move to our new apartment next weekend.', isCorrect: true }, { id: 'o2', text: 'We are going to make to our new apartment next weekend.', isCorrect: false }] },
    { id: 'ex_u04_l55_p7', lessonId: 'lesson_a1_4_55', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'I promise I will call you as soon as I arrive.', targetSentence: 'I promise I will call you as soon as I arrive.' },
    { id: 'ex_u04_l55_p8', lessonId: 'lesson_a1_4_55', stage: 10, type: 'multiple_choice', prompt: 'Choose the correct question to ask about someone\'s plans:', options: [{ id: 'o1', text: 'What are you going to do this evening?', isCorrect: true }, { id: 'o2', text: 'What are you will do this evening?', isCorrect: false }, { id: 'o3', text: 'What you are going do this evening?', isCorrect: false }] },
    { id: 'ex_u04_l55_p9', lessonId: 'lesson_a1_4_55', stage: 11, type: 'dialogue_completion', prompt: 'Complete the spontaneous dialogue: "Someone is knocking at the front door."', options: [{ id: 'o1', text: 'I will open it right now.', isCorrect: true }, { id: 'o2', text: 'I bought shoes yesterday.', isCorrect: false }, { id: 'o3', text: 'The sky is high.', isCorrect: false }] },
    { id: 'ex_u04_l55_p10', lessonId: 'lesson_a1_4_55', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'I am going to attend an important business meeting tomorrow morning.', audioText: 'I am going to attend an important business meeting tomorrow morning.' },
    { id: 'ex_u04_l55_p11', lessonId: 'lesson_a1_4_55', stage: 13, type: 'translation', prompt: 'Translate: "मैं कल अपना नया प्रोजेक्ट शुरू करने जा रहा हूँ।" / "Voy a comenzar mi nuevo proyecto mañana."', targetSentence: 'I am going to start my new project tomorrow.' },
    { id: 'ex_u04_l55_p12', lessonId: 'lesson_a1_4_55', stage: 14, type: 'multiple_choice', prompt: 'Which modal is used for promises and spontaneous offers?', options: [{ id: 'o1', text: 'will', isCorrect: true }, { id: 'o2', text: 'did', isCorrect: false }, { id: 'o3', text: 'was', isCorrect: false }] },
    { id: 'ex_u04_l55_p13', lessonId: 'lesson_a1_4_55', stage: 14, type: 'fill_blank', prompt: 'Complete with the contracted negative form: "I promise I ___ be late for the meeting."', sentenceTemplate: 'I promise I ___ be late for the meeting.', sourceSentence: 'I promise I ___ be late for the meeting.', options: [{ id: 'o1', text: 'won\'t', isCorrect: true }, { id: 'o2', text: 'not will', isCorrect: false }, { id: 'o3', text: 'am not', isCorrect: false }] },
    { id: 'ex_u04_l55_p14', lessonId: 'lesson_a1_4_55', stage: 14, type: 'word_ordering', prompt: 'Order the words to make a prediction:', wordBank: ['It', 'will', 'probably', 'be', 'sunny', 'this', 'afternoon.'], targetSentence: 'It will probably be sunny this afternoon.' },
    { id: 'ex_u04_l55_p15', lessonId: 'lesson_a1_4_55', stage: 14, type: 'speaking', prompt: 'Speak this complete sentence clearly into your microphone:', targetSentence: 'We are going to organize a community event next month.', audioText: 'We are going to organize a community event next month.' }
  ],
  review: [
    { id: 'ex_u04_l55_r1', lessonId: 'lesson_a1_4_55', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Choose the correct conjunction of cause:', options: [{ id: 'o1', text: 'I prefer this bakery because the bread is fresh.', isCorrect: true }, { id: 'o2', text: 'I prefer this bakery so the bread is fresh.', isCorrect: false }, { id: 'o3', text: 'I prefer this bakery although the bread is fresh.', isCorrect: false }] },
    { id: 'ex_u04_l55_r2', lessonId: 'lesson_a1_4_55', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete: "I prefer tea ___ coffee in the evening."', sentenceTemplate: 'I prefer tea ___ coffee in the evening.', sourceSentence: 'I prefer tea ___ coffee in the evening.', options: [{ id: 'o1', text: 'to', isCorrect: true }, { id: 'o2', text: 'than', isCorrect: false }, { id: 'o3', text: 'for', isCorrect: false }] },
    { id: 'ex_u04_l55_r3', lessonId: 'lesson_a1_4_55', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['In', 'my', 'opinion,', 'exercise', 'is', 'important.'], targetSentence: 'In my opinion, exercise is important.' },
    { id: 'ex_u04_l55_r4', lessonId: 'lesson_a1_4_55', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match future expressions:', pairs: [{ left: 'tomorrow', right: 'day after today' }, { left: 'next week', right: 'upcoming seven days' }, { left: 'I will', right: 'spontaneous decision' }, { left: 'I am going to', right: 'planned intention' }] },
    { id: 'ex_u04_l55_r5', lessonId: 'lesson_a1_4_55', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "हालाँकि ठंड थी, हम बाहर गए।"', targetSentence: 'Although it was cold, we went out.' }
  ],
  assessment: [
    { id: 'ex_u04_l55_a1', lessonId: 'lesson_a1_4_55', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the grammatically correct sentence for a prior plan:', options: [{ id: 'o1', text: 'We are going to travel to Canada next summer.', isCorrect: true }, { id: 'o2', text: 'We are will travel to Canada next summer.', isCorrect: false }, { id: 'o3', text: 'We going travel to Canada next summer.', isCorrect: false }] },
    { id: 'ex_u04_l55_a2', lessonId: 'lesson_a1_4_55', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete the spontaneous response: "I left my pen at home. — Don\'t worry, I ___ lend you mine."', sentenceTemplate: 'I left my pen at home. — Don\'t worry, I ___ lend you mine.', sourceSentence: 'I left my pen at home. — Don\'t worry, I ___ lend you mine.', options: [{ id: 'o1', text: 'will', isCorrect: true }, { id: 'o2', text: 'am going', isCorrect: false }, { id: 'o3', text: 'did', isCorrect: false }] },
    { id: 'ex_u04_l55_a3', lessonId: 'lesson_a1_4_55', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words correctly:', wordBank: ['What', 'are', 'you', 'going', 'to', 'do', 'next', 'weekend?'], targetSentence: 'What are you going to do next weekend?' },
    { id: 'ex_u04_l55_a4', lessonId: 'lesson_a1_4_55', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Select the appropriate response: "Are you free to meet on Tuesday?"', options: [{ id: 'o1', text: 'I am going to visit the dentist on Tuesday morning, but I am free in the afternoon.', isCorrect: true }, { id: 'o2', text: 'I am eating soup.', isCorrect: false }, { id: 'o3', text: 'The bus was red.', isCorrect: false }] },
    { id: 'ex_u04_l55_a5', lessonId: 'lesson_a1_4_55', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this complete sentence clearly:', targetSentence: 'I promise I will send you the completed report by five o\'clock.', audioText: 'I promise I will send you the completed report by five o\'clock.' }
  ]
};

// =========================================================================
// LESSON 56: Hobbies, Free Time, Entertainment & Creative Passions
// =========================================================================
export const CONFIG_56: LessonConfig = {
  num: 56,
  title: 'Hobbies, Free Time, Entertainment & Creative Passions',
  icon: '🎨',
  estMin: 25,
  objTitle: 'Discuss leisure activities, sports, artistic pursuits, and free time habits',
  objDesc: 'Learn vocabulary for painting, gaming, instruments, gardening, and using gerunds (enjoy doing, keen on).',
  objHi: 'शौक, खाली समय की गतिविधियों, कलात्मक रुचियों और मनोरंजन पर चर्चा करना सीखें।',
  objEs: 'Aprende a hablar de pasatiempos, tiempo libre, entretenimiento y pasiones creativas.',
  canDo: [
    'I can describe my favorite hobbies and how often I practice them.',
    'I can use verbs followed by gerunds (enjoy, like, love + -ing).',
    'I can talk about creative arts, sports, and entertainment pastimes.'
  ],
  canDoHi: [
    'मैं अपने पसंदीदा शौक और मैं उनका कितनी बार अभ्यास करता हूँ, इसका वर्णन कर सकता हूँ।',
    'मैं क्रियाओं के बाद जेरंड (enjoy, like, love + -ing) का उपयोग कर सकता हूँ।',
    'मैं रचनात्मक कलाओं, खेलों और मनोरंजन के साधनों के बारे में बात कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir mis pasatiempos favoritos y con qué frecuencia los practico.',
    'Puedo usar verbos seguidos de gerundios (enjoy, like, love + -ing).',
    'Puedo hablar de artes creativas, deportes y entretenimiento.'
  ],
  vocab: [
    { w: 'hobby', p: '/ˈhɒb.i/', m: 'an activity done regularly in one\'s leisure time for pleasure', hi: 'शौक (हॉबी)', es: 'pasatiempo / afición', fr: 'passe-temps / hobby', de: 'Hobby', pt: 'passatempo / hobby', zh: '爱好', ar: 'هواية', ja: '趣味', ru: 'хобби / увлечение', ex: 'My favorite hobby is landscape photography.', exHi: 'मेरा पसंदीदा शौक लैंडस्केप फोटोग्राफी है।', exEs: 'Mi pasatiempo favorito es la fotografía de paisajes.', ic: '🎨' },
    { w: 'painting', p: '/ˈpeɪn.tɪŋ/', m: 'the action of applying paint, or a painted picture', hi: 'चित्रकारी / पेंटिंग', es: 'pintura', fr: 'peinture', de: 'Malen / Gemälde', pt: 'pintura', zh: '绘画', ar: 'رسم', ja: '絵画', ru: 'живопись / картина', ex: 'She enjoys watercolor painting on weekends.', exHi: 'वह सप्ताहांत में वॉटरकलर पेंटिंग का आनंद लेती है।', exEs: 'Ella disfruta de la pintura en acuarela los fines de semana.', ic: '🖌️' },
    { w: 'guitar', p: '/ɡɪˈtɑːr/', m: 'a stringed musical instrument played with fingers or a plectrum', hi: 'गिटार', es: 'guitarra', fr: 'guitare', de: 'Gitarre', pt: 'violão / guitarra', zh: '吉他', ar: 'غيتار', ja: 'ギター', ru: 'гитара', ex: 'He practices playing the acoustic guitar every evening.', exHi: 'वह हर शाम ध्वनिक गिटार बजाने का अभ्यास करता है।', exEs: 'Practica tocar la guitarra acústica todas las tardes.', ic: '🎸' },
    { w: 'gardening', p: '/ˈɡɑː.dən.ɪŋ/', m: 'the activity of tending and cultivating a garden', hi: 'बागवानी', es: 'jardinería', fr: 'jardinage', de: 'Gartenarbeit', pt: 'jardinagem', zh: '园艺', ar: 'بستنة', ja: 'ガーデニング', ru: 'садоводство', ex: 'Gardening is very relaxing after a busy day.', exHi: 'व्यस्त दिन के बाद बागवानी बहुत सुकून देने वाली होती है।', exEs: 'La jardinería es muy relajante después de un día ajetreado.', ic: '🌱' },
    { w: 'gaming', p: '/ˈɡeɪ.mɪŋ/', m: 'the playing of computer or video games', hi: 'गेमिंग (वीडियो गेम खेलना)', es: 'videojuegos / gaming', fr: 'jeux vidéo', de: 'Gaming / Computerspielen', pt: 'jogos eletrônicos', zh: '电子游戏', ar: 'ألعاب الفيديو', ja: 'ゲーム', ru: 'гейминг / видеоигры', ex: 'Online gaming with friends is his favorite pastime.', exHi: 'दोस्तों के साथ ऑनलाइन गेमिंग उनका पसंदीदा शगल है।', exEs: 'Jugar en línea con amigos es su pasatiempo favorito.', ic: '🎮' },
    { w: 'cooking', p: '/ˈkʊk.ɪŋ/', m: 'the practice or skill of preparing food by combining and heating ingredients', hi: 'खाना बनाना', es: 'cocina / cocinar', fr: 'cuisine', de: 'Kochen', pt: 'culinária / cozinhar', zh: '烹饪', ar: 'طبخ', ja: '料理', ru: 'кулинария / готовка', ex: 'I love cooking traditional Italian pasta dishes.', exHi: 'मुझे पारंपरिक इतालवी पास्ता व्यंजन बनाना बहुत पसंद है।', exEs: 'Me encanta cocinar platos tradicionales de pasta italiana.', ic: '🍳' },
    { w: 'reading', p: '/ˈriː.dɪŋ/', m: 'the action or skill of reading written or printed matter', hi: 'पढ़ना', es: 'lectura', fr: 'lecture', de: 'Lesen', pt: 'leitura', zh: '阅读', ar: 'قراءة', ja: '読書', ru: 'чтение', ex: 'Reading mystery novels helps me unwind.', exHi: 'रहस्य उपन्यास पढ़ना मुझे तनावमुक्त करने में मदद करता है।', exEs: 'Leer novelas de misterio me ayuda a relajarme.', ic: '📖' },
    { w: 'hiking', p: '/ˈhaɪ.kɪŋ/', m: 'the activity of going for long walks, especially across country', hi: 'लंबी पैदल यात्रा (हाइकिंग)', es: 'senderismo', fr: 'randonnée', de: 'Wandern', pt: 'trilha / caminhada', zh: '徒步旅行', ar: 'تنزه على الأقدام', ja: 'ハイキング', ru: 'хайкинг / пеший туризм', ex: 'We go hiking in the nature reserve every spring.', exHi: 'हम हर वसंत में प्रकृति अभयारण्य में लंबी पैदल यात्रा के लिए जाते हैं।', exEs: 'Vamos de senderismo a la reserva natural cada primavera.', ic: '🥾' },
    { w: 'photography', p: '/fəˈtɒɡ.rə.fi/', m: 'the art or practice of taking and processing photographs', hi: 'फोटोग्राफी', es: 'fotografía', fr: 'photographie', de: 'Fotografie', pt: 'fotografia', zh: '摄影', ar: 'تصوير فوتوغرافي', ja: '写真撮影', ru: 'фотография', ex: 'She took a course in digital photography.', exHi: 'उसने डिजिटल फोटोग्राफी का एक कोर्स किया।', exEs: 'Hizo un curso de fotografía digital.', ic: '📷' },
    { w: 'instrument', p: '/ˈɪn.strə.mənt/', m: 'an object or device for producing musical sounds', hi: 'वाद्य यंत्र', es: 'instrumento musical', fr: 'instrument de musique', de: 'Instrument', pt: 'instrumento', zh: '乐器', ar: 'آلة موسيقية', ja: '楽器', ru: 'инструмент', ex: 'Can you play any musical instrument?', exHi: 'क्या आप कोई वाद्य यंत्र बजा सकते हैं?', exEs: '¿Puedes tocar algún instrumento musical?', ic: '🎺' },
    { w: 'leisure', p: '/ˈleʒ.ər/', m: 'use of free time for enjoyment', hi: 'अवकाश / फुरसत का समय', es: 'ocio / tiempo libre', fr: 'loisirs', de: 'Freizeit', pt: 'lazer', zh: '休闲', ar: 'وقت الفراغ', ja: '余暇', ru: 'досуг / свободное время', ex: 'In my leisure time, I listen to classical music.', exHi: 'अपने खाली समय में, मैं शास्त्रीय संगीत सुनता हूँ।', exEs: 'En mi tiempo libre, escucho música clásica.', ic: '🛋️' },
    { w: 'creative', p: '/kriˈeɪ.tɪv/', m: 'relating to or involving the use of the imagination or original ideas', hi: 'रचनात्मक', es: 'creativo', fr: 'créatif', de: 'kreativ', pt: 'criativo', zh: '有创意的', ar: 'إبداعي', ja: '創造的な', ru: 'творческий', ex: 'Creative writing is a wonderful way to express thoughts.', exHi: 'रचनात्मक लेखन विचारों को व्यक्त करने का एक शानदार तरीका है।', exEs: 'La escritura creativa es una manera maravillosa de expresar ideas.', ic: '✨' },
    { w: 'fitness', p: '/ˈfɪt.nəs/', m: 'the condition of being physically fit and healthy', hi: 'फिटनेस / शारीरिक तंदुरुस्ती', es: 'aptitud física / fitness', fr: 'forme physique', de: 'Fitness', pt: 'boa forma / fitness', zh: '健身', ar: 'لياقة بدنية', ja: 'フィットネス', ru: 'фитнес / форма', ex: 'She attends fitness classes three mornings a week.', exHi: 'वह सप्ताह में तीन सुबह फिटनेस कक्षाओं में भाग लेती है।', exEs: 'Asiste a clases de acondicionamiento físico tres mañanas por semana.', ic: '🏃' },
    { w: 'cinema', p: '/ˈsɪn.ə.mɑː/', m: 'a movie theatre', hi: 'सिनेमा', es: 'cine', fr: 'cinéma', de: 'Kino', pt: 'cinema', zh: '电影院', ar: 'سينما', ja: '映画館', ru: 'кино', ex: 'We went to the cinema to watch the premiere.', exHi: 'हम प्रीमियर देखने के लिए सिनेमा गए थे।', exEs: 'Fuimos al cine a ver el estreno.', ic: '🎬' },
    { w: 'concert', p: '/ˈkɒn.sət/', m: 'a musical performance given in public by several performers or of several compositions', hi: 'संगीत कार्यक्रम (कंसर्ट)', es: 'concierto', fr: 'concert', de: 'Konzert', pt: 'show / concerto', zh: '音乐会', ar: 'حفلة موسيقية', ja: 'コンサート', ru: 'концерт', ex: 'We bought tickets for the live jazz concert.', exHi: 'हमने लाइव जैज़ संगीत कार्यक्रम के लिए टिकट खरीदे।', exEs: 'Compramos entradas para el concierto de jazz en vivo.', ic: '🎷' },
    { w: 'passion', p: '/ˈpæʃ.ən/', m: 'an intense desire or enthusiasm for something', hi: 'जुनून / अत्यधिक रुचि', es: 'pasión', fr: 'passion', de: 'Leidenschaft', pt: 'paixão', zh: '热情 / 激情', ar: 'شغف', ja: '情熱', ru: 'страсть / увлечение', ex: 'Music has always been her greatest passion.', exHi: 'संगीत हमेशा से उनका सबसे बड़ा जुनून रहा है।', exEs: 'La música siempre ha sido su mayor pasión.', ic: '❤️' },
    { w: 'boardgame', p: '/ˈbɔːd.ɡeɪm/', m: 'a game played on a marked board by two or more people', hi: 'बोर्ड गेम', es: 'juego de mesa', fr: 'jeu de société', de: 'Brettspiel', pt: 'jogo de tabuleiro', zh: '棋盘游戏', ar: 'لعبة لوحية', ja: 'ボードゲーム', ru: 'настольная игра', ex: 'We play chess and board games on rainy afternoons.', exHi: 'हम बारिश की दोपहर में शतरंज और बोर्ड गेम खेलते हैं।', exEs: 'Jugamos al ajedrez y juegos de mesa en las tardes lluviosas.', ic: '♟️' },
    { w: 'craft', p: '/krɑːft/', m: 'an activity involving skill in making things by hand', hi: 'हस्तशिल्प / कला', es: 'manualidad / artesanía', fr: 'artisanat / travaux manuels', de: 'Handwerk / Basteln', pt: 'artesanato', zh: '手工艺', ar: 'حرفة يدوية', ja: '工芸 / 手芸', ru: 'ремесло / рукоделие', ex: 'Pottery is a relaxing and creative craft.', exHi: 'मिट्टी के बर्तन बनाना एक आरामदायक और रचनात्मक शिल्प है।', exEs: 'La cerámica es una artesanía relajante y creativa.', ic: '🏺' },
    { w: 'relax', p: '/rɪˈlæks/', m: 'to rest from work or engage in an enjoyable activity', hi: 'आराम करना', es: 'relajarse', fr: 'se détendre', de: 'entspannen', pt: 'relaxar', zh: '放松', ar: 'يسترخي', ja: 'くつろぐ', ru: 'расслабляться / отдыхать', ex: 'Listening to audiobooks helps me relax.', exHi: 'ऑडियोबुक सुनने से मुझे आराम मिलता है।', exEs: 'Escuchar audiolibros me ayuda a relajarme.', ic: '😌' },
    { w: 'enthusiastic', p: '/ɪnˌθjuː.ziˈæs.tɪk/', m: 'having or showing intense and eager enjoyment or interest', hi: 'उत्साही', es: 'entusiasta', fr: 'enthousiaste', de: 'begeistert', pt: 'entusiasmado', zh: '热情的', ar: 'متحمس', ja: '熱心な', ru: 'восторженный / увлеченный', ex: 'He is very enthusiastic about learning Spanish.', exHi: 'वह स्पेनिश सीखने के लिए बहुत उत्साही है।', exEs: 'Está muy entusiasmado con aprender español.', ic: '😃' }
  ],
  chunks: [
    { phrase: 'in my free time', meaning: 'during leisure hours when not working', hi: 'अपने खाली समय में', es: 'en mi tiempo libre', fr: 'pendant mon temps libre', de: 'in meiner Freizeit', pt: 'no meu tempo livre', zh: '在我的空闲时间', ar: 'في وقت فراغي', ja: '私の自由な時間に', ru: 'в свободное время', note: 'Standard hobby conversation starter.', ic: '⏳' },
    { phrase: 'enjoy doing...', meaning: 'Deriving pleasure from an activity (gerund)', hi: '... करने का आनंद लेना', es: 'disfrutar de hacer...', fr: 'aimer faire...', de: 'gerne ... tun', pt: 'gostar de fazer...', zh: '喜欢做...', ar: 'الاستمتاع بفعل...', ja: '〜することを楽しむ', ru: 'наслаждаться делая...', note: 'Followed by -ing form.', ic: '😊' },
    { phrase: 'play the guitar / piano', meaning: 'to perform music on an instrument', hi: 'गिटार / पियानो बजाना', es: 'tocar la guitarra / el piano', fr: 'jouer de la guitare / du piano', de: 'Gitarre / Klavier spielen', pt: 'tocar violão / piano', zh: '弹吉他 / 钢琴', ar: 'العزف على الغيتار / البيانو', ja: 'ギター／ピアノを弾く', ru: 'играть на гитаре / пианино', note: 'Always use "the" with musical instruments.', ic: '🎸' },
    { phrase: 'keen on', meaning: 'interested in or enthusiastic about something', hi: 'का बहुत शौकीन होना', es: 'aficionado a / entusiasmado con', fr: 'passionné par', de: 'begeistert von', pt: 'interessado em / a fim de', zh: '热衷于', ar: 'مهتم بـ', ja: '〜に熱中している', ru: 'увлекаться чем-либо', note: 'e.g. "I am keen on photography".', ic: '🔥' },
    { phrase: 'go for a hike', meaning: 'to take an extended recreational walk in nature', hi: 'हाइक पर जाना', es: 'ir de caminata / hacer senderismo', fr: 'faire une randonnée', de: 'wandern gehen', pt: 'fazer uma caminhada', zh: '去徒步', ar: 'الذهاب في رحلة مشي', ja: 'ハイキングに行く', ru: 'пойти в поход', note: 'Outdoor recreational phrase.', ic: '🥾' },
    { phrase: 'listen to music', meaning: 'to attend to musical audio', hi: 'संगीत सुनना', es: 'escuchar música', fr: 'écouter de la musique', de: 'Musik hören', pt: 'ouvir música', zh: '听音乐', ar: 'الاستماع إلى الموسيقى', ja: '音楽を聴く', ru: 'слушать музыку', note: 'Always requires "to".', ic: '🎧' },
    { phrase: 'play video games', meaning: 'to engage in computer or console games', hi: 'वीडियो गेम खेलना', es: 'jugar videojuegos', fr: 'jouer aux jeux vidéo', de: 'Videospiele spielen', pt: 'jogar videogame', zh: '玩电子游戏', ar: 'لعب ألعاب الفيديو', ja: 'テレビゲームをする', ru: 'играть в видеоигры', note: 'No article before video games/sports.', ic: '🎮' },
    { phrase: 'spend time with friends', meaning: 'to socialize with companions during leisure', hi: 'दोस्तों के साथ समय बिताना', es: 'pasar tiempo con amigos', fr: 'passer du temps avec des amis', de: 'Zeit mit Freunden verbringen', pt: 'passar tempo com amigos', zh: '和朋友在一起', ar: 'قضاء الوقت مع الأصدقاء', ja: '友達と過ごす', ru: 'проводить время с друзьями', note: 'Common social leisure expression.', ic: '👥' }
  ],
  grammar: {
    title: 'Verbs of Preference + Gerunds (-ing) & The Definite Article with Instruments',
    concept: 'Using gerunds (-ing) after like, love, enjoy, dislike, prefer, and using "the" with musical instruments vs. no article with sports.',
    patterns: [
      {
        title: 'Verbs of Preference + Gerund (-ing)',
        structure: 'Subject + enjoy / love / like / prefer + verb-ing',
        rule: 'Verbs expressing enjoyment or preference are followed by the gerund form of the verb.',
        examples: [
          { en: 'I enjoy painting landscapes on weekends.', hi: 'मैं सप्ताहांत पर परिदृश्य पेंटिंग का आनंद लेता हूँ।', es: 'Disfruto pintar paisajes los fines de semana.' },
          { en: 'She loves baking fresh bread for her family.', hi: 'वह अपने परिवार के लिए ताज़ा ब्रेड पकाना पसंद करती है।', es: 'Le encanta hornear pan fresco para su familia.' }
        ]
      },
      {
        title: 'Play + THE instrument vs. Play + sport (no article)',
        structure: 'play THE guitar / piano VS. play tennis / soccer',
        rule: 'Musical instruments require "the" (play the violin). Sports do NOT take "the" (play basketball).',
        examples: [
          { en: 'He plays the guitar very well.', hi: 'वह गिटार बहुत अच्छा बजाता है।', es: 'Toca la guitarra muy bien.' },
          { en: 'We play tennis on Saturday mornings.', hi: 'हम शनिवार की सुबह टेनिस खेलते हैं।', es: 'Jugamos al tenis los sábados por la mañana.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'I enjoy to play the piano.', cor: 'I enjoy playing the piano.', exp: 'The verb "enjoy" must be followed by a gerund (-ing), not an infinitive.', hi: '"Enjoy" के बाद -ing रूप (gerund) का प्रयोग करें।', es: '"Enjoy" debe ir seguido de gerundio (-ing).' },
    { inc: 'He plays guitar every day.', cor: 'He plays the guitar every day.', exp: 'Use the definite article "the" before musical instruments.', hi: 'वाद्य यंत्रों से पहले "the" का प्रयोग करें।', es: 'Usa el artículo "the" antes de instrumentos musicales.' },
    { inc: 'We play the football on weekends.', cor: 'We play football on weekends.', exp: 'Do not use "the" before names of sports.', hi: 'खेलों के नाम से पहले "the" का प्रयोग न करें।', es: 'No uses "the" antes de nombres de deportes.' },
    { inc: 'I like listening music in my car.', cor: 'I like listening to music in my car.', exp: 'Always use the preposition "to" after the verb "listen".', hi: '"Listen" के बाद "to" का प्रयोग अनिवार्य है।', es: 'Siempre usa "to" después del verbo "listen".' },
    { inc: 'She is keen of photography.', cor: 'She is keen on photography.', exp: 'The correct preposition is "keen on", not "keen of".', hi: '"Keen on" का प्रयोग करें, "keen of" नहीं।', es: 'La preposición correcta es "keen on".' }
  ],
  dialogues: [
    {
      title: 'Chatting About Hobbies and Creative Interests',
      context: 'Elena and Leo share what they like doing in their spare time.',
      charA: { name: 'Elena', av: '👩‍🎨', role: 'Artist' },
      charB: { name: 'Leo', av: '👨‍💼', role: 'Musician' },
      turns: [
        { spk: 'Elena', text: 'Hi Leo! What do you like doing in your free time?', hi: 'नमस्ते लियो! आप अपने खाली समय में क्या करना पसंद करते हैं?', es: '¡Hola Leo! ¿Qué te gusta hacer en tu tiempo libre?' },
        { spk: 'Leo', text: 'I love playing the guitar and writing acoustic songs. What about you?', hi: 'मुझे गिटार बजाना और गाने लिखना बहुत पसंद है। आपके बारे में क्या?', es: 'Me encanta tocar la guitarra y escribir canciones acústicas. ¿Y tú?' },
        { spk: 'Elena', text: 'I enjoy oil painting and gardening. It helps me relax after working.', hi: 'मुझे ऑयल पेंटिंग और बागवानी का आनंद मिलता है। यह काम के बाद मुझे आराम देने में मदद करता है।', es: 'Disfruto de la pintura al óleo y la jardinería. Me ayuda a relajarme después de trabajar.' },
        { spk: 'Leo', text: 'That sounds wonderfully creative! Maybe you can paint a cover for my music album.', hi: 'यह आश्चर्यजनक रूप से रचनात्मक लगता है! शायद आप मेरे संगीत एल्बम के लिए एक कवर पेंट कर सकते हैं।', es: '¡Eso suena maravillosamente creativo! Tal vez puedas pintar una portada para mi álbum de música.' }
      ]
    },
    {
      title: 'Planning a Weekend Outdoor Activity',
      context: 'Sophie and Mark decide on an outdoor leisure plan.',
      charA: { name: 'Sophie', av: '👩‍🌾', role: 'Hiker' },
      charB: { name: 'Mark', av: '👨‍💻', role: 'Friend' },
      turns: [
        { spk: 'Sophie', text: 'Mark, are you keen on hiking this Saturday?', hi: 'मार्क, क्या आप इस शनिवार को हाइकिंग के शौकीन हैं?', es: 'Mark, ¿te apetece hacer senderismo este sábado?' },
        { spk: 'Mark', text: 'Yes, I really enjoy walking in nature and taking landscape photographs.', hi: 'हाँ, मुझे प्रकृति में घूमना और परिदृश्य तस्वीरें लेना वास्तव में बहुत पसंद है।', es: 'Sí, realmente disfruto caminar en la naturaleza y tomar fotografías de paisajes.' },
        { spk: 'Sophie', text: 'Great! Let\'s meet at Pine Hill at 8:00 AM with our backpacks.', hi: 'बहुत बढ़िया! आइए सुबह 8:00 बजे अपने बैकपैक के साथ पाइन हिल पर मिलें।', es: '¡Genial! Encontrémonos en Pine Hill a las 8:00 AM con nuestras mochilas.' },
        { spk: 'Mark', text: 'I will bring my camera and pack some healthy snacks for both of us.', hi: 'मैं अपना कैमरा लाऊँगा और हम दोनों के लिए कुछ स्वस्थ स्नैक्स पैक करूँगा।', es: 'Llevaré mi cámara y prepararé algunos bocadillos saludables para los dos.' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u04_l56_p1', lessonId: 'lesson_a1_4_56', stage: 8, type: 'multiple_choice', prompt: 'Select the correct gerund form: "I really enjoy ___ in the public park."', options: [{ id: 'o1', text: 'running', isCorrect: true }, { id: 'o2', text: 'to run', isCorrect: false }, { id: 'o3', text: 'run', isCorrect: false }] },
    { id: 'ex_u04_l56_p2', lessonId: 'lesson_a1_4_56', stage: 8, type: 'fill_blank', prompt: 'Complete the sentence with the correct article: "He plays ___ piano beautifully."', sentenceTemplate: 'He plays ___ piano beautifully.', sourceSentence: 'He plays ___ piano beautifully.', options: [{ id: 'o1', text: 'the', isCorrect: true }, { id: 'o2', text: 'a', isCorrect: false }, { id: 'o3', text: 'an', isCorrect: false }] },
    { id: 'ex_u04_l56_p3', lessonId: 'lesson_a1_4_56', stage: 8, type: 'word_ordering', prompt: 'Order the words to describe a leisure activity:', wordBank: ['In', 'my', 'free', 'time,', 'I', 'like', 'reading', 'novels.'], targetSentence: 'In my free time, I like reading novels.' },
    { id: 'ex_u04_l56_p4', lessonId: 'lesson_a1_4_56', stage: 8, type: 'match_pairs', prompt: 'Match hobbies with related items:', pairs: [{ left: 'photography', right: 'camera and lenses' }, { left: 'gardening', right: 'plants and flowers' }, { left: 'guitar', right: 'strings and acoustic music' }, { left: 'baking', right: 'flour and oven recipes' }] },
    { id: 'ex_u04_l56_p5', lessonId: 'lesson_a1_4_56', stage: 8, type: 'error_correction', prompt: 'Identify the corrected sentence:', sentenceTemplate: 'I like listening music while cooking dinner.', options: [{ id: 'o1', text: 'I like listening to music while cooking dinner.', isCorrect: true }, { id: 'o2', text: 'I like listen to music while cook dinner.', isCorrect: false }, { id: 'o3', text: 'I like to listening music while cooking dinner.', isCorrect: false }] },
    { id: 'ex_u04_l56_p6', lessonId: 'lesson_a1_4_56', stage: 9, type: 'listening', prompt: 'Listen and select what the speaker says:', audioText: 'She enjoys playing the guitar and writing creative songs.', options: [{ id: 'o1', text: 'She enjoys playing the guitar and writing creative songs.', isCorrect: true }, { id: 'o2', text: 'She avoids playing the guitar and writing critical songs.', isCorrect: false }] },
    { id: 'ex_u04_l56_p7', lessonId: 'lesson_a1_4_56', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'I am keen on landscape photography.', targetSentence: 'I am keen on landscape photography.' },
    { id: 'ex_u04_l56_p8', lessonId: 'lesson_a1_4_56', stage: 10, type: 'multiple_choice', prompt: 'Choose the correct question to ask about someone\'s leisure activities:', options: [{ id: 'o1', text: 'What do you enjoy doing in your free time?', isCorrect: true }, { id: 'o2', text: 'What do you enjoying to do in free time?', isCorrect: false }, { id: 'o3', text: 'What are you enjoy do in free time?', isCorrect: false }] },
    { id: 'ex_u04_l56_p9', lessonId: 'lesson_a1_4_56', stage: 11, type: 'dialogue_completion', prompt: 'Complete the hobby exchange: "Do you play any musical instruments?"', options: [{ id: 'o1', text: 'Yes, I play the violin and the piano.', isCorrect: true }, { id: 'o2', text: 'I work at nine o\'clock.', isCorrect: false }, { id: 'o3', text: 'The supermarket is open.', isCorrect: false }] },
    { id: 'ex_u04_l56_p10', lessonId: 'lesson_a1_4_56', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'Gardening and cooking help me relax after a busy work week.', audioText: 'Gardening and cooking help me relax after a busy work week.' },
    { id: 'ex_u04_l56_p11', lessonId: 'lesson_a1_4_56', stage: 13, type: 'translation', prompt: 'Translate: "मुझे सप्ताहांत पर चित्रकारी करना पसंद है।" / "Me gusta pintar los fines de semana."', targetSentence: 'I enjoy painting on weekends.' },
    { id: 'ex_u04_l56_p12', lessonId: 'lesson_a1_4_56', stage: 14, type: 'multiple_choice', prompt: 'Which sport collocation is correct without the article "the"?', options: [{ id: 'o1', text: 'play tennis', isCorrect: true }, { id: 'o2', text: 'play the tennis', isCorrect: false }, { id: 'o3', text: 'playing a tennis', isCorrect: false }] },
    { id: 'ex_u04_l56_p13', lessonId: 'lesson_a1_4_56', stage: 14, type: 'fill_blank', prompt: 'Complete the prepositional idiom: "She is very keen ___ modern art and painting."', sentenceTemplate: 'She is very keen ___ modern art and painting.', sourceSentence: 'She is very keen ___ modern art and painting.', options: [{ id: 'o1', text: 'on', isCorrect: true }, { id: 'o2', text: 'at', isCorrect: false }, { id: 'o3', text: 'of', isCorrect: false }] },
    { id: 'ex_u04_l56_p14', lessonId: 'lesson_a1_4_56', stage: 14, type: 'word_ordering', prompt: 'Order the words to express passion:', wordBank: ['Music', 'has', 'always', 'been', 'my', 'greatest', 'passion.'], targetSentence: 'Music has always been my greatest passion.' },
    { id: 'ex_u04_l56_p15', lessonId: 'lesson_a1_4_56', stage: 14, type: 'speaking', prompt: 'Speak this complete sentence clearly into your microphone:', targetSentence: 'We play chess and modern board games with our friends every Friday.', audioText: 'We play chess and modern board games with our friends every Friday.' }
  ],
  review: [
    { id: 'ex_u04_l56_r1', lessonId: 'lesson_a1_4_56', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Choose the correct future intention form:', options: [{ id: 'o1', text: 'I am going to visit the library tomorrow morning.', isCorrect: true }, { id: 'o2', text: 'I will going to visit library tomorrow.', isCorrect: false }, { id: 'o3', text: 'I am will visit library tomorrow.', isCorrect: false }] },
    { id: 'ex_u04_l56_r2', lessonId: 'lesson_a1_4_56', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete: "I promise I ___ help you with that."', sentenceTemplate: 'I promise I ___ help you with that.', sourceSentence: 'I promise I ___ help you with that.', options: [{ id: 'o1', text: 'will', isCorrect: true }, { id: 'o2', text: 'am going', isCorrect: false }, { id: 'o3', text: 'did', isCorrect: false }] },
    { id: 'ex_u04_l56_r3', lessonId: 'lesson_a1_4_56', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['I', 'prefer', 'coffee', 'to', 'tea.'], targetSentence: 'I prefer coffee to tea.' },
    { id: 'ex_u04_l56_r4', lessonId: 'lesson_a1_4_56', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match past and future phrases:', pairs: [{ left: 'last year', right: 'past time marker' }, { left: 'tomorrow', right: 'future time marker' }, { left: 'enjoy reading', right: 'verb + gerund' }, { left: 'play the guitar', right: 'instrument with article' }] },
    { id: 'ex_u04_l56_r5', lessonId: 'lesson_a1_4_56', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "क्या आप कोई वाद्य यंत्र बजाते हैं?"', targetSentence: 'Do you play any musical instruments?' }
  ],
  assessment: [
    { id: 'ex_u04_l56_a1', lessonId: 'lesson_a1_4_56', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the grammatically correct sentence about hobbies:', options: [{ id: 'o1', text: 'In my free time, I enjoy playing the piano and reading.', isCorrect: true }, { id: 'o2', text: 'In my free time, I enjoy to play piano and read.', isCorrect: false }, { id: 'o3', text: 'In my free time, I enjoy playing piano and read.', isCorrect: false }] },
    { id: 'ex_u04_l56_a2', lessonId: 'lesson_a1_4_56', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete the sentence: "On Saturday afternoons, my brother plays ___ soccer with his team."', sentenceTemplate: 'On Saturday afternoons, my brother plays ___ soccer with his team.', sourceSentence: 'On Saturday afternoons, my brother plays ___ soccer with his team.', options: [{ id: 'o1', text: '', isCorrect: true }, { id: 'o2', text: 'the', isCorrect: false }, { id: 'o3', text: 'a', isCorrect: false }] },
    { id: 'ex_u04_l56_a3', lessonId: 'lesson_a1_4_56', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words correctly:', wordBank: ['She', 'is', 'very', 'keen', 'on', 'landscape', 'photography.'], targetSentence: 'She is very keen on landscape photography.' },
    { id: 'ex_u04_l56_a4', lessonId: 'lesson_a1_4_56', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Select the appropriate response: "How often do you practice playing the guitar?"', options: [{ id: 'o1', text: 'I practice for thirty minutes every evening.', isCorrect: true }, { id: 'o2', text: 'I am drinking tea.', isCorrect: false }, { id: 'o3', text: 'My jacket is warm.', isCorrect: false }] },
    { id: 'ex_u04_l56_a5', lessonId: 'lesson_a1_4_56', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this complete sentence clearly:', targetSentence: 'Creative hobbies like painting and cooking bring great joy and relaxation.', audioText: 'Creative hobbies like painting and cooking bring great joy and relaxation.' }
  ]
};

// =========================================================================
// LESSON 57: Technology, Devices, The Internet & Digital Life
// =========================================================================
export const CONFIG_57: LessonConfig = {
  num: 57,
  title: 'Technology, Devices, The Internet & Digital Life',
  icon: '💻',
  estMin: 25,
  objTitle: 'Talk about apps, computer hardware, digital communication, and passwords',
  objDesc: 'Learn tech vocabulary, phrasal verbs for devices (turn on, log in, charge, download), and computer terminology.',
  objHi: 'ऐप्स, कंप्यूटर हार्डवेयर, डिजिटल संचार और पासवर्ड के बारे में बात करना सीखें।',
  objEs: 'Aprende a hablar de aplicaciones, dispositivos, comunicación digital y contraseñas.',
  canDo: [
    'I can name common digital devices and computer peripherals.',
    'I can use technology phrasal verbs (turn on/off, log in, plug in).',
    'I can ask for Wi-Fi passwords and solve basic tech problems.'
  ],
  canDoHi: [
    'मैं सामान्य डिजिटल उपकरणों और कंप्यूटर बाह्य उपकरणों के नाम बता सकता हूँ।',
    'मैं प्रौद्योगिकी से संबंधित वाक्यांश क्रियाओं (turn on/off, log in, plug in) का उपयोग कर सकता हूँ।',
    'मैं वाई-फाई पासवर्ड मांग सकता हूँ और बुनियादी तकनीकी समस्याओं का समाधान कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo nombrar dispositivos digitales y periféricos de computadora.',
    'Puedo usar verbos frasales de tecnología (turn on/off, log in, plug in).',
    'Puedo pedir contraseñas de Wi-Fi y resolver problemas técnicos básicos.'
  ],
  vocab: [
    { w: 'computer', p: '/kəmˈpjuː.tər/', m: 'an electronic device for storing and processing data', hi: 'कंप्यूटर', es: 'computadora / ordenador', fr: 'ordinateur', de: 'Computer', pt: 'computador', zh: '电脑 / 计算机', ar: 'حاسوب', ja: 'コンピューター', ru: 'компьютер', ex: 'I use my computer for coding and research.', exHi: 'मैं कोडिंग और शोध के लिए अपने कंप्यूटर का उपयोग करता हूँ।', exEs: 'Uso mi computadora para programar e investigar.', ic: '💻' },
    { w: 'laptop', p: '/ˈlæp.tɒp/', m: 'a computer that is portable and suitable for use while traveling', hi: 'लैपटॉप', es: 'portátil / laptop', fr: 'ordinateur portable', de: 'Laptop', pt: 'notebook / laptop', zh: '笔记本电脑', ar: 'حاسوب محمول', ja: 'ノートパソコン', ru: 'ноутбук', ex: 'She opened her laptop at the library desk.', exHi: 'उसने पुस्तकालय की मेज पर अपना लैपटॉप खोला।', exEs: 'Ella abrió su computadora portátil en el escritorio de la biblioteca.', ic: '💻' },
    { w: 'smartphone', p: '/ˈsmɑːt.fəʊn/', m: 'a mobile phone that performs many functions of a computer', hi: 'स्मार्टफोन', es: 'teléfono inteligente / smartphone', fr: 'smartphone', de: 'Smartphone', pt: 'smartphone', zh: '智能手机', ar: 'هاتف ذكي', ja: 'スマートフォン', ru: 'смартфон', ex: 'I downloaded a language learning app on my smartphone.', exHi: 'मैंने अपने स्मार्टफोन पर एक भाषा सीखने का ऐप डाउनलोड किया।', exEs: 'Descargué una aplicación para aprender idiomas en mi teléfono.', ic: '📱' },
    { w: 'screen', p: '/skriːn/', m: 'a flat surface on a computer or television on which images or data are displayed', hi: 'स्क्रीन / पर्दा', es: 'pantalla', fr: 'écran', de: 'Bildschirm', pt: 'tela', zh: '屏幕', ar: 'شاشة', ja: '画面', ru: 'экран', ex: 'The high-resolution screen is very clear.', exHi: 'हाई-रिज़ॉल्यूशन स्क्रीन बहुत स्पष्ट है।', exEs: 'La pantalla de alta resolución es muy clara.', ic: '🖥️' },
    { w: 'keyboard', p: '/ˈkiː.bɔːd/', m: 'a panel of keys that operate a computer or typewriter', hi: 'कीबोर्ड', es: 'teclado', fr: 'clavier', de: 'Tastatur', pt: 'teclado', zh: '键盘', ar: 'لوحة المفاتيح', ja: 'キーボード', ru: 'клавиатура', ex: 'He types quickly on the mechanical keyboard.', exHi: 'वह मैकेनिकल कीबोर्ड पर तेजी से टाइप करता है।', exEs: 'Escribe rápidamente en el teclado mecánico.', ic: '⌨️' },
    { w: 'mouse', p: '/maʊs/', m: 'a small handheld device used to control the cursor on a computer screen', hi: 'माउस', es: 'ratón / mouse', fr: 'souris', de: 'Maus', pt: 'mouse', zh: '鼠标', ar: 'فأرة الحاسوب', ja: 'マウス', ru: 'мышь', ex: 'Click the left button on your wireless mouse.', exHi: 'अपने वायरलेस माउस पर बायाँ बटन क्लिक करें।', exEs: 'Haga clic en el botón izquierdo de su mouse inalámbrico.', ic: '🖱️' },
    { w: 'internet', p: '/ˈɪn.tə.net/', m: 'a global computer network providing a variety of information and communication facilities', hi: 'इंटरनेट', es: 'internet', fr: 'internet', de: 'Internet', pt: 'internet', zh: '互联网', ar: 'إنترنت', ja: 'インターネット', ru: 'интернет', ex: 'The internet connection is fast and stable.', exHi: 'इंटरनेट कनेक्शन तेज़ और स्थिर है।', exEs: 'La conexión a internet es rápida y estable.', ic: '🌐' },
    { w: 'wifi', p: '/ˈwaɪ.faɪ/', m: 'a facility allowing computers and smartphones to connect to the Internet wirelessly', hi: 'वाई-फाई', es: 'wifi', fr: 'wifi', de: 'WLAN / Wi-Fi', pt: 'wi-fi', zh: '无线网络 / Wi-Fi', ar: 'واي فاي', ja: 'ワイファイ', ru: 'вай-фай', ex: 'What is the Wi-Fi password for this cafe?', exHi: 'इस कैफ़े का वाई-फाई पासवर्ड क्या है?', exEs: '¿Cuál es la contraseña del wifi de esta cafetería?', ic: '📶' },
    { w: 'password', p: '/ˈpɑːs.wɜːd/', m: 'a secret word or phrase that must be used to gain admission to a system', hi: 'पासवर्ड / कूटशब्द', es: 'contraseña', fr: 'mot de passe', de: 'Passwort', pt: 'senha', zh: '密码', ar: 'كلمة المرور', ja: 'パスワード', ru: 'пароль', ex: 'Please create a strong password with letters and numbers.', exHi: 'कृपया अक्षरों और संख्याओं के साथ एक मजबूत पासवर्ड बनाएं।', exEs: 'Por favor cree una contraseña segura con letras y números.', ic: '🔒' },
    { w: 'download', p: '/ˌdaʊnˈləʊd/', m: 'to copy data from one computer system to another, typically over the internet', hi: 'डाउनलोड करना', es: 'descargar', fr: 'télécharger', de: 'herunterladen', pt: 'baixar / fazer download', zh: '下载', ar: 'تحميل / تنزيل', ja: 'ダウンロードする', ru: 'скачивать', ex: 'You can download the study guide for free.', exHi: 'आप अध्ययन मार्गदर्शिका मुफ्त में डाउनलोड कर सकते हैं।', exEs: 'Puedes descargar la guía de estudio gratis.', ic: '📥' },
    { w: 'upload', p: '/ˌʌpˈləʊd/', m: 'to transfer data from one computer to another, especially over the internet', hi: 'अपलोड करना', es: 'subir / cargar', fr: 'téléverser', de: 'hochladen', pt: 'enviar / fazer upload', zh: '上传', ar: 'رفع ملف', ja: 'アップロードする', ru: 'загружать', ex: 'I uploaded my assignment to the student portal.', exHi: 'मैंने अपना असाइनमेंट छात्र पोर्टल पर अपलोड कर दिया।', exEs: 'Subí mi tarea al portal de estudiantes.', ic: '📤' },
    { w: 'battery', p: '/ˈbæt.ər.i/', m: 'a container consisting of one or more cells, in which chemical energy is converted into electricity', hi: 'बैटरी', es: 'batería', fr: 'batterie', de: 'Batterie / Akku', pt: 'bateria', zh: '电池', ar: 'بطارية', ja: 'バッテリー', ru: 'батарея / аккумулятор', ex: 'My smartphone battery is at ten percent.', exHi: 'मेरे स्मार्टफोन की बैटरी दस प्रतिशत पर है।', exEs: 'La batería de mi teléfono está al diez por ciento.', ic: '🔋' },
    { w: 'charger', p: '/ˈtʃɑː.dʒər/', m: 'a device for charging a battery or battery-powered equipment', hi: 'चार्जर', es: 'cargador', fr: 'chargeur', de: 'Ladegerät', pt: 'carregador', zh: '充电器', ar: 'شاحن', ja: '充電器', ru: 'зарядное устройство', ex: 'Can I borrow your phone charger for an hour?', exHi: 'क्या मुझे एक घंटे के लिए आपका फोन चार्जर मिल सकता है?', exEs: '¿Puedo pedir prestado tu cargador de teléfono por una hora?', ic: '🔌' },
    { w: 'email', p: '/ˈiː.meɪl/', m: 'messages distributed by electronic means from one computer user to one or more recipients', hi: 'ईमेल', es: 'correo electrónico / email', fr: 'e-mail / courriel', de: 'E-Mail', pt: 'e-mail', zh: '电子邮件', ar: 'بريد إلكتروني', ja: '電子メール', ru: 'электронная почта', ex: 'I received an important email from my teacher.', exHi: 'मुझे अपने शिक्षक से एक महत्वपूर्ण ईमेल प्राप्त हुआ।', exEs: 'Recibí un correo electrónico importante de mi profesor.', ic: '📧' },
    { w: 'website', p: '/ˈweb.saɪt/', m: 'a set of related web pages located under a single domain name', hi: 'वेबसाइट', es: 'sitio web', fr: 'site web', de: 'Webseite', pt: 'site / sítio web', zh: '网站', ar: 'موقع إلكتروني', ja: 'ウェブサイト', ru: 'веб-сайт', ex: 'Visit our official website for more information.', exHi: 'अधिक जानकारी के लिए हमारी आधिकारिक वेबसाइट देखें।', exEs: 'Visite nuestro sitio web oficial para obtener más información.', ic: '🌐' },
    { w: 'app', p: '/æp/', m: 'an application, especially as downloaded by a user to a mobile device', hi: 'ऐप (एप्लिकेशन)', es: 'aplicación / app', fr: 'application / appli', de: 'App', pt: 'aplicativo / app', zh: '应用程序', ar: 'تطبيق', ja: 'アプリ', ru: 'приложение', ex: 'This fitness app tracks daily steps accurately.', exHi: 'यह फिटनेस ऐप दैनिक कदमों को सटीक रूप से ट्रैक करता है।', exEs: 'Esta aplicación de fitness registra los pasos diarios con precisión.', ic: '📱' },
    { w: 'message', p: '/ˈmes.ɪdʒ/', m: 'a verbal, written, or recorded communication sent to or left for a recipient', hi: 'संदेश (मैसेज)', es: 'mensaje', fr: 'message', de: 'Nachricht', pt: 'mensagem', zh: '消息 / 短信', ar: 'رسالة', ja: 'メッセージ', ru: 'сообщение', ex: 'Send me a text message when you arrive.', exHi: 'पहुँचने पर मुझे एक टेक्स्ट संदेश भेजें।', exEs: 'Envíame un mensaje de texto cuando llegues.', ic: '💬' },
    { w: 'delete', p: '/dɪˈliːt/', m: 'to remove or obliterate written or electronic matter', hi: 'हटाना / डिलीट करना', es: 'eliminar / borrar', fr: 'supprimer', de: 'löschen', pt: 'deletar / excluir', zh: '删除', ar: 'حذف', ja: '削除する', ru: 'удалять', ex: 'Don\'t delete that important document file.', exHi: 'उस महत्वपूर्ण दस्तावेज़ फ़ाइल को न हटाएं।', exEs: 'No borres ese archivo de documento importante.', ic: '🗑️' },
    { w: 'save', p: '/seɪv/', m: 'to keep data stored in a computer or cloud server', hi: 'सहेजना / सेव करना', es: 'guardar', fr: 'sauvegarder / enregistrer', de: 'speichern', pt: 'salvar / guardar', zh: '保存', ar: 'حفظ', ja: '保存する', ru: 'сохранять', ex: 'Remember to save your work frequently.', exHi: 'अपने काम को बार-बार सेव करना याद रखें।', exEs: 'Recuerde guardar su trabajo con frecuencia.', ic: '💾' },
    { w: 'restart', p: '/ˌriːˈstɑːt/', m: 'to start a computer or program again', hi: 'पुनः आरंभ करना (रीस्टार्ट)', es: 'reiniciar', fr: 'redémarrer', de: 'neu starten', pt: 'reiniciar', zh: '重新启动', ar: 'إعادة تشغيل', ja: '再起動する', ru: 'перезагружать', ex: 'If the app freezes, restart your device.', exHi: 'यदि ऐप रुक जाता है, तो अपने डिवाइस को पुनरारंभ करें।', exEs: 'Si la aplicación se congela, reinicia tu dispositivo.', ic: '🔄' }
  ],
  chunks: [
    { phrase: 'turn on / turn off', meaning: 'to power a device on or off', hi: 'चालू करना / बंद करना', es: 'encender / apagar', fr: 'allumer / éteindre', de: 'einschalten / ausschalten', pt: 'ligar / desligar', zh: '打开 / 关闭（电源）', ar: 'تشغيل / إيقاف', ja: '電源を入れる／切る', ru: 'включать / выключать', note: 'Essential device phrasal verbs.', ic: '🔌' },
    { phrase: 'log in / log out', meaning: 'to sign into or out of an account', hi: 'लॉग इन / लॉग आउट करना', es: 'iniciar / cerrar sesión', fr: 'se connecter / se déconnecter', de: 'sich anmelden / abmelden', pt: 'fazer login / logout', zh: '登录 / 登出', ar: 'تسجيل الدخول / الخروج', ja: 'ログイン／ログアウトする', ru: 'войти / выйти из аккаунта', note: 'Standard online security phrase.', ic: '🔑' },
    { phrase: 'What is the Wi-Fi password?', meaning: 'Inquiring about wireless network credentials', hi: 'वाई-फाई पासवर्ड क्या है?', es: '¿Cuál es la contraseña del wifi?', fr: 'Quel est le mot de passe du wifi ?', de: 'Wie lautet das WLAN-Passwort?', pt: 'Qual é a senha do wi-fi?', zh: 'Wi-Fi密码是多少？', ar: 'ما هي كلمة مرور الواي فاي؟', ja: 'Wi-Fiのパスワードは何ですか？', ru: 'Какой пароль от вай-фая?', note: 'Universal traveler phrase.', ic: '📶' },
    { phrase: 'charge my phone', meaning: 'to replenish device battery using a charger', hi: 'फोन चार्ज करना', es: 'cargar mi teléfono', fr: 'charger mon téléphone', de: 'mein Handy aufladen', pt: 'carregar meu celular', zh: '给手机充电', ar: 'شحن هاتفي', ja: 'スマホを充電する', ru: 'зарядить телефон', note: 'High frequency daily need.', ic: '🔋' },
    { phrase: 'download an app', meaning: 'to install mobile software onto a phone', hi: 'ऐप डाउनलोड करना', es: 'descargar una aplicación', fr: 'télécharger une application', de: 'eine App herunterladen', pt: 'baixar um aplicativo', zh: '下载应用', ar: 'تنزيل تطبيق', ja: 'アプリをダウンロードする', ru: 'скачать приложение', note: 'Standard smartphone action.', ic: '📱' },
    { phrase: 'check my email', meaning: 'to view new incoming electronic mail', hi: 'अपना ईमेल देखना', es: 'revisar mi correo', fr: 'consulter mes e-mails', de: 'meine E-Mails abrufen', pt: 'checar meu e-mail', zh: '查收邮件', ar: 'التحقق من البريد الإلكتروني', ja: 'メールをチェックする', ru: 'проверить почту', note: 'Daily routine collocation.', ic: '📧' },
    { phrase: 'send a text message', meaning: 'to transmit a mobile text to someone', hi: 'टेक्स्ट संदेश भेजना', es: 'enviar un mensaje de texto', fr: 'envoyer un SMS', de: 'eine SMS / Textnachricht senden', pt: 'mandar uma mensagem de texto', zh: '发短信', ar: 'إرسال رسالة نصية', ja: 'テキストメッセージを送る', ru: 'отправить текстовое сообщение', note: 'Communication phrase.', ic: '💬' },
    { phrase: 'plug in', meaning: 'to connect a device to an electrical outlet', hi: 'प्लग में लगाना', es: 'enchufar / conectar', fr: 'brancher', de: 'einstecken / anschließen', pt: 'conectar na tomada', zh: '插上电源', ar: 'توصيل بالكهرباء', ja: 'プラグを差し込む', ru: 'подключить к розетке', note: 'Hardware connection phrasal verb.', ic: '🔌' }
  ],
  grammar: {
    title: 'Separable Phrasal Verbs of Technology & Imperatives for Digital Actions',
    concept: 'Using separable phrasal verbs (turn on/off, plug in, log in) with nouns and pronouns, plus imperative steps.',
    patterns: [
      {
        title: 'Separable Phrasal Verbs (Turn on it ❌ -> Turn it on ✅)',
        structure: 'turn [noun] on / turn on [noun] BUT turn [pronoun] on',
        rule: 'When the object is a pronoun (it, them), it MUST go between the verb and preposition.',
        examples: [
          { en: 'Turn on the computer. / Turn the computer on.', hi: 'कंप्यूटर चालू करें।', es: 'Enciende la computadora.' },
          { en: 'Turn it on immediately.', hi: 'इसे तुरंत चालू करें।', es: 'Enciéndelo de inmediato.' }
        ]
      },
      {
        title: 'Digital Instructions with Imperatives',
        structure: 'Enter your password / Click the save button / Don\'t share your PIN',
        rule: 'Use base verbs for step-by-step tech instructions. Use "Don\'t" for security cautions.',
        examples: [
          { en: 'Click "Save" before you close the window.', hi: 'विंडो बंद करने से पहले "सेव" पर क्लिक करें।', es: 'Haga clic en "Guardar" antes de cerrar la ventana.' },
          { en: 'Don\'t share your login password with anyone.', hi: 'अपना लॉगिन पासवर्ड किसी के साथ साझा न करें।', es: 'No comparta su contraseña de inicio de sesión con nadie.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'Please turn on it.', cor: 'Please turn it on.', exp: 'Pronoun objects (it, them) must go between the verb and particle in separable phrasal verbs.', hi: 'सर्वनाम (it) को phrasal verb के बीच में रखें (turn it on)।', es: 'Los pronombres van en medio (turn it on).' },
    { inc: 'How can I do a download of this file?', cor: 'How can I download this file?', exp: '"Download" is commonly used as a direct verb.', hi: '"Download" का उपयोग प्रत्यक्ष क्रिया के रूप में करें।', es: 'Usa "download" directamente como verbo.' },
    { inc: 'I forgot the password of Wi-Fi.', cor: 'I forgot the Wi-Fi password.', exp: 'Say "the Wi-Fi password" as a standard compound noun.', hi: '"Wi-Fi password" कहें।', es: 'Se dice "the Wi-Fi password".' },
    { inc: 'My phone is out of battery, I need charge it.', cor: 'My phone is out of battery, I need to charge it.', exp: 'The verb "need" takes a full infinitive "to charge".', hi: '"Need" के बाद "to charge" का प्रयोग करें।', es: 'Usa "need to charge".' },
    { inc: 'Please to restart your computer.', cor: 'Please restart your computer.', exp: 'Do not use "to" after "please" in direct imperatives.', hi: '"Please" के बाद मूल क्रिया का उपयोग करें।', es: 'Usa el verbo base después de "please".' }
  ],
  dialogues: [
    {
      title: 'Asking for Wi-Fi and Charging a Phone at a Cafe',
      context: 'Liam orders coffee and asks the barista for internet access.',
      charA: { name: 'Liam', av: '👨‍🎓', role: 'Customer' },
      charB: { name: 'Barista', av: '👩‍🍳', role: 'Cafe Barista' },
      turns: [
        { spk: 'Liam', text: 'Excuse me! Could you tell me the Wi-Fi password, please?', hi: 'माफ़ कीजिये! क्या आप मुझे वाई-फाई पासवर्ड बता सकते हैं, कृपया?', es: '¡Disculpe! ¿Podría decirme la contraseña del wifi, por favor?' },
        { spk: 'Barista', text: 'Sure! It is printed at the bottom of your receipt: "CoffeeLover2026".', hi: 'ज़रूर! यह आपकी रसीद के नीचे छपा है: "CoffeeLover2026"।', es: '¡Claro! Está impresa en la parte inferior de su recibo: "CoffeeLover2026".' },
        { spk: 'Liam', text: 'Great, thank you! Is there a wall power outlet where I can plug in my charger?', hi: 'बहुत बढ़िया, धन्यवाद! क्या कोई दीवार पावर आउटलेट है जहाँ मैं अपना चार्जर लगा सकता हूँ?', es: 'Genial, ¡gracias! ¿Hay un tomacorriente de pared donde pueda enchufar mi cargador?' },
        { spk: 'Barista', text: 'Yes, right under the wooden table next to the window.', hi: 'हाँ, खिड़की के बगल में लकड़ी की मेज के ठीक नीचे।', es: 'Sí, justo debajo de la mesa de madera al lado de la ventana.' }
      ]
    },
    {
      title: 'Troubleshooting a Frozen Laptop',
      context: 'Sarah helps Kevin restart his computer after an app crashes.',
      charA: { name: 'Kevin', av: '👨‍💼', role: 'Employee' },
      charB: { name: 'Sarah', av: '👩‍💻', role: 'IT Support' },
      turns: [
        { spk: 'Kevin', text: 'Sarah, my screen is completely frozen and the mouse won\'t move!', hi: 'सारा, मेरी स्क्रीन पूरी तरह से जम गई है और माउस नहीं हिल रहा है!', es: '¡Sarah, mi pantalla está completamente congelada y el mouse no se mueve!' },
        { spk: 'Sarah', text: 'Don\'t panic. Hold down the power button for ten seconds to turn it off.', hi: 'घबराएं नहीं। इसे बंद करने के लिए पावर बटन को दस सेकंड तक दबाकर रखें।', es: 'Que no cunda el pánico. Mantén presionado el botón de encendido durante diez segundos para apagarlo.' },
        { spk: 'Kevin', text: 'Okay, it turned off. Should I turn it back on now?', hi: 'ठीक है, यह बंद हो गया। क्या मुझे इसे अब वापस चालू करना चाहिए?', es: 'Bien, se apagó. ¿Debería encenderlo de nuevo ahora?' },
        { spk: 'Sarah', text: 'Yes, turn it on, log in with your password, and save your document.', hi: 'हाँ, इसे चालू करें, अपने पासवर्ड से लॉग इन करें, और अपना दस्तावेज़ सहेजें।', es: 'Sí, enciéndelo, inicia sesión con tu contraseña y guarda tu documento.' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u04_l57_p1', lessonId: 'lesson_a1_4_57', stage: 8, type: 'multiple_choice', prompt: 'Select the correct pronoun placement for the phrasal verb: "The laptop is off. Please ___."', options: [{ id: 'o1', text: 'turn it on', isCorrect: true }, { id: 'o2', text: 'turn on it', isCorrect: false }, { id: 'o3', text: 'it turn on', isCorrect: false }] },
    { id: 'ex_u04_l57_p2', lessonId: 'lesson_a1_4_57', stage: 8, type: 'fill_blank', prompt: 'Complete the tech inquiry: "What is the ___ password for this library network?"', sentenceTemplate: 'What is the ___ password for this library network?', sourceSentence: 'What is the ___ password for this library network?', options: [{ id: 'o1', text: 'Wi-Fi', isCorrect: true }, { id: 'o2', text: 'battery', isCorrect: false }, { id: 'o3', text: 'charger', isCorrect: false }] },
    { id: 'ex_u04_l57_p3', lessonId: 'lesson_a1_4_57', stage: 8, type: 'word_ordering', prompt: 'Order the words to make a tech instruction:', wordBank: ['Remember', 'to', 'save', 'your', 'document', 'frequently.'], targetSentence: 'Remember to save your document frequently.' },
    { id: 'ex_u04_l57_p4', lessonId: 'lesson_a1_4_57', stage: 8, type: 'match_pairs', prompt: 'Match tech verbs with definitions:', pairs: [{ left: 'download', right: 'copy files from the internet' }, { left: 'log in', right: 'enter account credentials' }, { left: 'charge', right: 'replenish battery power' }, { left: 'restart', right: 'reboot the computer' }] },
    { id: 'ex_u04_l57_p5', lessonId: 'lesson_a1_4_57', stage: 8, type: 'error_correction', prompt: 'Identify the corrected sentence:', sentenceTemplate: 'Please to restart your smartphone if it freezes.', options: [{ id: 'o1', text: 'Please restart your smartphone if it freezes.', isCorrect: true }, { id: 'o2', text: 'Please to restarting your smartphone if it freeze.', isCorrect: false }, { id: 'o3', text: 'Please restarts your smartphone.', isCorrect: false }] },
    { id: 'ex_u04_l57_p6', lessonId: 'lesson_a1_4_57', stage: 9, type: 'listening', prompt: 'Listen and select what the speaker says:', audioText: 'Please enter your username and secure password to log in.', options: [{ id: 'o1', text: 'Please enter your username and secure password to log in.', isCorrect: true }, { id: 'o2', text: 'Please inter your user name and sector password to lock in.', isCorrect: false }] },
    { id: 'ex_u04_l57_p7', lessonId: 'lesson_a1_4_57', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'My smartphone battery is very low.', targetSentence: 'My smartphone battery is very low.' },
    { id: 'ex_u04_l57_p8', lessonId: 'lesson_a1_4_57', stage: 10, type: 'multiple_choice', prompt: 'Choose the correct question to ask about borrowing a charger:', options: [{ id: 'o1', text: 'Can I borrow your phone charger for a few minutes?', isCorrect: true }, { id: 'o2', text: 'Can I borrow to your phone charger?', isCorrect: false }, { id: 'o3', text: 'Do I borrow of your phone charger?', isCorrect: false }] },
    { id: 'ex_u04_l57_p9', lessonId: 'lesson_a1_4_57', stage: 11, type: 'dialogue_completion', prompt: 'Complete the tech support exchange: "I cannot connect to the internet."', options: [{ id: 'o1', text: 'Check if your Wi-Fi is turned on in settings.', isCorrect: true }, { id: 'o2', text: 'I am drinking cold water.', isCorrect: false }, { id: 'o3', text: 'The grass is wet.', isCorrect: false }] },
    { id: 'ex_u04_l57_p10', lessonId: 'lesson_a1_4_57', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'I downloaded a language learning app to practice English every day.', audioText: 'I downloaded a language learning app to practice English every day.' },
    { id: 'ex_u04_l57_p11', lessonId: 'lesson_a1_4_57', stage: 13, type: 'translation', prompt: 'Translate: "विंडो बंद करने से पहले अपनी फ़ाइल सहेजें।" / "Guarda tu archivo antes de cerrar la ventana."', targetSentence: 'Save your file before closing the window.' },
    { id: 'ex_u04_l57_p12', lessonId: 'lesson_a1_4_57', stage: 14, type: 'multiple_choice', prompt: 'What word describes connecting a cable to an electrical power source?', options: [{ id: 'o1', text: 'plug in', isCorrect: true }, { id: 'o2', text: 'download', isCorrect: false }, { id: 'o3', text: 'delete', isCorrect: false }] },
    { id: 'ex_u04_l57_p13', lessonId: 'lesson_a1_4_57', stage: 14, type: 'fill_blank', prompt: 'Complete with the imperative: "Don\'t ___ your password with strangers."', sentenceTemplate: 'Don\'t ___ your password with strangers.', sourceSentence: 'Don\'t ___ your password with strangers.', options: [{ id: 'o1', text: 'share', isCorrect: true }, { id: 'o2', text: 'shares', isCorrect: false }, { id: 'o3', text: 'sharing', isCorrect: false }] },
    { id: 'ex_u04_l57_p14', lessonId: 'lesson_a1_4_57', stage: 14, type: 'word_ordering', prompt: 'Order the words to ask for network details:', wordBank: ['What', 'is', 'the', 'name', 'of', 'the', 'Wi-Fi', 'network?'], targetSentence: 'What is the name of the Wi-Fi network?' },
    { id: 'ex_u04_l57_p15', lessonId: 'lesson_a1_4_57', stage: 14, type: 'speaking', prompt: 'Speak this complete sentence clearly into your microphone:', targetSentence: 'Make sure to log out of your account when using a public computer.', audioText: 'Make sure to log out of your account when using a public computer.' }
  ],
  review: [
    { id: 'ex_u04_l57_r1', lessonId: 'lesson_a1_4_57', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Choose the correct gerund sentence:', options: [{ id: 'o1', text: 'I love playing the guitar in my free time.', isCorrect: true }, { id: 'o2', text: 'I love to playing guitar.', isCorrect: false }, { id: 'o3', text: 'I love play the guitar.', isCorrect: false }] },
    { id: 'ex_u04_l57_r2', lessonId: 'lesson_a1_4_57', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete: "We are going ___ move to a new apartment."', sentenceTemplate: 'We are going ___ move to a new apartment.', sourceSentence: 'We are going ___ move to a new apartment.', options: [{ id: 'o1', text: 'to', isCorrect: true }, { id: 'o2', text: 'for', isCorrect: false }, { id: 'o3', text: 'in', isCorrect: false }] },
    { id: 'ex_u04_l57_r3', lessonId: 'lesson_a1_4_57', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['She', 'enjoys', 'cooking', 'healthy', 'meals.'], targetSentence: 'She enjoys cooking healthy meals.' },
    { id: 'ex_u04_l57_r4', lessonId: 'lesson_a1_4_57', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match digital terms:', pairs: [{ left: 'turn it on', right: 'separable phrasal verb' }, { left: 'keen on', right: 'enthusiastic about' }, { left: 'play the piano', right: 'musical instrument' }, { left: 'Wi-Fi password', right: 'wireless network code' }] },
    { id: 'ex_u04_l57_r5', lessonId: 'lesson_a1_4_57', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "क्या मैं आपका चार्जर इस्तेमाल कर सकता हूँ?"', targetSentence: 'Can I use your charger?' }
  ],
  assessment: [
    { id: 'ex_u04_l57_a1', lessonId: 'lesson_a1_4_57', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the grammatically correct separable phrasal verb sentence:', options: [{ id: 'o1', text: 'The battery is low, so please plug it in right away.', isCorrect: true }, { id: 'o2', text: 'The battery is low, so please plug in it right away.', isCorrect: false }, { id: 'o3', text: 'The battery is low, so please it plug in.', isCorrect: false }] },
    { id: 'ex_u04_l57_a2', lessonId: 'lesson_a1_4_57', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete the sentence: "Enter your username and secret ___ to log in to your account."', sentenceTemplate: 'Enter your username and secret ___ to log in to your account.', sourceSentence: 'Enter your username and secret ___ to log in to your account.', options: [{ id: 'o1', text: 'password', isCorrect: true }, { id: 'o2', text: 'keyboard', isCorrect: false }, { id: 'o3', text: 'battery', isCorrect: false }] },
    { id: 'ex_u04_l57_a3', lessonId: 'lesson_a1_4_57', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words correctly:', wordBank: ['What', 'is', 'the', 'Wi-Fi', 'password', 'for', 'this', 'cafe?'], targetSentence: 'What is the Wi-Fi password for this cafe?' },
    { id: 'ex_u04_l57_a4', lessonId: 'lesson_a1_4_57', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Select the appropriate response: "My laptop is not responding at all."', options: [{ id: 'o1', text: 'Try holding the power button to restart it.', isCorrect: true }, { id: 'o2', text: 'I am reading a novel.', isCorrect: false }, { id: 'o3', text: 'The sun is shining today.', isCorrect: false }] },
    { id: 'ex_u04_l57_a5', lessonId: 'lesson_a1_4_57', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this complete sentence clearly:', targetSentence: 'Please log in with your email address and download the latest software update.', audioText: 'Please log in with your email address and download the latest software update.' }
  ]
};

console.log('Configs for 55, 56, 57 ready.');
