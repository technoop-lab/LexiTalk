import { LessonConfigA2 } from './unit11_builder_helper';

// =========================================================================
// LESSON 157: Discussing Current News, Local Events & Media Reports
// =========================================================================
export const LESSON_157_CONFIG: LessonConfigA2 = {
  num: 157,
  title: 'Discussing Current News, Local Events & Media Reports',
  icon: '📰',
  estMin: 25,
  objTitle: 'Media Reporting, Passive Reporting Frames & Background Storytelling',
  objDesc: 'Learn to discuss headlines, summarize community news, use passive reporting formulas ("It is reported that...", "According to the news..."), and narrate news events combining the Past Continuous and Past Simple.',
  objHi: 'समाचार और स्थानीय घटनाओं पर चर्चा करना, "According to...", "It is reported that..." और पास्ट कंटीन्यूअस + पास्ट सिंपल का उपयोग करना सीखें।',
  objEs: 'Discutir noticias y eventos locales usando fórmulas como "According to...", "It is reported that..." y combinando Past Continuous y Past Simple.',
  canDo: [
    'I can read and understand basic news headlines and community bulletins.',
    'I can use passive reporting frames ("According to...", "It is said that...") to share news.',
    'I can describe background events in the news using Past Continuous and Past Simple.',
    'I can express personal reactions to current events and community developments.'
  ],
  canDoHi: [
    'मैं बुनियादी समाचार सुर्खियों और सामुदायिक बुलेटिनों को पढ़ और समझ सकता हूँ।',
    'मैं समाचार साझा करने के लिए "According to...", "It is reported that..." का उपयोग कर सकता हूँ।',
    'मैं पास्ट कंटीन्यूअस और पास्ट सिंपल का उपयोग करके समाचार की पृष्ठभूमि का वर्णन कर सकता हूँ।',
    'मैं वर्तमान घटनाओं और सामुदायिक विकास पर अपनी प्रतिक्रिया व्यक्त कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo leer y entender titulares de noticias básicos y boletines comunitarios.',
    'Puedo usar fórmulas de reporte ("According to...", "It is said that...") para compartir noticias.',
    'Puedo describir eventos de fondo en las noticias usando Past Continuous y Past Simple.',
    'Puedo expresar reacciones personales ante acontecimientos actuales.'
  ],
  vocab: [
    { w: 'headline', p: '/ˈhedlaɪn/', m: 'a heading at the top of an article or page in a newspaper or magazine', hi: 'मुख्य समाचार / शीर्षक / हेडलाइन', es: 'titular', fr: 'gros titre', de: 'Schlagzeile', pt: 'manchete / título', zh: '头条新闻 / 标题', ar: 'عنوان رئيسي', ja: '見出し', ru: 'заголовок', ex: 'The morning headline reported a major breakthrough in renewable energy.', exHi: 'सुबह की हेडलाइन में नवीकरणीय ऊर्जा में एक बड़ी सफलता की सूचना दी गई।', exEs: 'El titular de la mañana informó de un gran avance en energía renovable.', ic: '📰' },
    { w: 'broadcast', p: '/ˈbrɔːdkɑːst/', m: 'transmit by radio or television; a program transmitted', hi: 'प्रसारण / प्रसारित करना', es: 'transmisión / emitir', fr: 'diffuser / émission', de: 'Sendung / übertragen', pt: 'transmissão / transmitir', zh: '广播 / 播送', ar: 'بث / إذاعة', ja: '放送 / 放送する', ru: 'трансляция / вещание', ex: 'The evening news broadcast begins at eight o\'clock sharp.', exHi: 'शाम का समाचार प्रसारण ठीक आठ बजे शुरू होता है।', exEs: 'La emisión del noticiero de la tarde comienza puntualmente a las ocho.', ic: '📺' },
    { w: 'bulletin', p: '/ˈbʊlətɪn/', m: 'a short official statement or summary of news', hi: 'समाचार बुलेटिन / संक्षिप्त विवरण', es: 'boletín informativo', fr: 'bulletin', de: 'Nachrichtenbulletin', pt: 'boletim', zh: '简报', ar: 'نشرة إخبارية', ja: '速報 / 掲示', ru: 'бюллетень / сводка новостей', ex: 'A weather bulletin warned residents about upcoming snowfall.', exHi: 'एक मौसम बुलेटिन ने निवासियों को आने वाली बर्फबारी के बारे में चेतावनी दी।', exEs: 'Un boletín meteorológico advirtió a los residentes sobre la próxima nevada.', ic: '📜' },
    { w: 'incident', p: '/ˈɪnsɪdənt/', m: 'an event or occurrence, especially one of minor or unusual importance', hi: 'घटना / वाकया', es: 'incidente / suceso', fr: 'incident', de: 'Vorfall / Ereignis', pt: 'incidente', zh: '事件', ar: 'حادث / واقعة', ja: '事件 / 出来事', ru: 'инцидент / происшествие', ex: 'Traffic was delayed for an hour due to a minor road incident.', exHi: 'एक मामूली सड़क दुर्घटना के कारण यातायात एक घंटे के लिए विलंबित रहा।', exEs: 'El tráfico se retrasó una hora debido a un incidente vial menor.', ic: '⚠️' },
    { w: 'journalist', p: '/ˈdʒɜːnəlɪst/', m: 'a person who writes for newspapers, magazines, or news websites', hi: 'पत्रकार', es: 'periodista', fr: 'journaliste', de: 'Journalist', pt: 'jornalista', zh: '记者', ar: 'صحفي', ja: 'ジャーナリスト / 記者', ru: 'журналист', ex: 'The local journalist interviewed the mayor regarding park renovations.', exHi: 'स्थानीय पत्रकार ने पार्क के नवीनीकरण के संबंध में मेयर का साक्षात्कार लिया।', exEs: 'El periodista local entrevistó al alcalde sobre las renovaciones del parque.', ic: '✍️' },
    { w: 'development', p: '/dɪˈveləpmənt/', m: 'a specified state of growth or new occurrence in a situation', hi: 'विकास / घटनाक्रम', es: 'desarrollo / novedad', fr: 'développement', de: 'Entwicklung / Neuigkeit', pt: 'desenvolvimento', zh: '进展 / 发展', ar: 'تطور / مستجدات', ja: '進展 / 展開', ru: 'развитие / событие', ex: 'The police reported significant new developments in the investigation.', exHi: 'पुलिस ने जांच में महत्वपूर्ण नए घटनाक्रम की सूचना दी।', exEs: 'La policía informó de importantes novedades en la investigación.', ic: '📈' },
    { w: 'community', p: '/kəˈmjuːnəti/', m: 'a group of people living in the same place or having a particular characteristic in common', hi: 'समुदाय / समाज', es: 'comunidad', fr: 'communauté', de: 'Gemeinschaft / Gemeinde', pt: 'comunidade', zh: '社区', ar: 'مجتمع محلي', ja: '地域社会 / コミュニティ', ru: 'сообщество / община', ex: 'The local community organized a weekend cleanup at the public beach.', exHi: 'स्थानीय समुदाय ने सार्वजनिक समुद्र तट पर सप्ताहांत में सफाई का आयोजन किया।', exEs: 'La comunidad local organizó una limpieza de fin de semana en la playa pública.', ic: '🏘️' },
    { w: 'witness', p: '/ˈwɪtnəs/', m: 'a person who sees an event, typically a crime or accident, take place', hi: 'गवाह / प्रत्यक्षदर्शी', es: 'testigo / presenciar', fr: 'témoin', de: 'Zeuge / bezeugen', pt: 'testemunha', zh: '目击者', ar: 'شاهد عيان', ja: '目撃者', ru: 'свидетель / очевидец', ex: 'Two eyewitnesses saw the tree fall during the thunderstorm.', exHi: 'दो प्रत्यक्षदर्शियों ने आंधी के दौरान पेड़ को गिरते देखा।', exEs: 'Dos testigos presenciales vieron caer el árbol durante la tormenta.', ic: '👁️' },
    { w: 'coverage', p: '/ˈkʌvərɪdʒ/', m: 'the treatment of an issue, especially by the media', hi: 'कवरेज / समाचार प्रसार', es: 'cobertura mediática', fr: 'couverture médiatique', de: 'Berichterstattung', pt: 'cobertura', zh: '新闻报道', ar: 'تغطية إعلامية', ja: '報道 / 取材', ru: 'освещение в СМИ', ex: 'Live television coverage showed the parade passing through central avenue.', exHi: 'सीधे टेलीविजन कवरेज में परेड को सेंट्रल एवेन्यू से गुजरते हुए दिखाया गया।', exEs: 'La cobertura televisiva en vivo mostró el desfile pasando por la avenida central.', ic: '🎥' },
    { w: 'publish', p: '/ˈpʌblɪʃ/', m: 'prepare and issue for public sale or distribution', hi: 'प्रकाशित करना', es: 'publicar', fr: 'publier', de: 'veröffentlichen', pt: 'publicar', zh: '发表 / 出版', ar: 'ينشر', ja: '発表する / 出版する', ru: 'публиковать', ex: 'The newspaper published an editorial about public transit fares.', exHi: 'अखबार ने सार्वजनिक परिवहन किराए के बारे में एक संपादकीय प्रकाशित किया।', exEs: 'El periódico publicó un editorial sobre las tarifas del transporte público.', ic: '📰' },
    { w: 'announce', p: '/əˈnaʊns/', m: 'make a formal public statement about a fact, occurrence, or intention', hi: 'घोषणा करना / सूचित करना', es: 'anunciar', fr: 'annoncer', de: 'ankündigen / bekanntgeben', pt: 'anunciar', zh: '宣布', ar: 'يعلن', ja: '発表する / 告知する', ru: 'объявлять / сообщать', ex: 'The city council announced plans to construct three new bicycle lanes.', exHi: 'नगर परिषद ने तीन नए साइकिल लेन बनाने की योजना की घोषणा की।', exEs: 'El ayuntamiento anunció planes para construir tres nuevos carriles para bicicletas.', ic: '📢' },
    { w: 'renovation', p: '/ˌrenəˈveɪʃn/', m: 'the action of renovating a building or structure', hi: 'नवीनीकरण / जीर्णोद्धार', es: 'renovación / remodelación', fr: 'rénovation', de: 'Renovierung', pt: 'reforma / renovação', zh: '翻修 / 翻新', ar: 'تجديد / ترميم', ja: '改装 / リノベーション', ru: 'ремонт / реконструкция', ex: 'The library will be closed during October for interior renovations.', exHi: 'आंतरिक नवीनीकरण के लिए अक्टूबर के दौरान पुस्तकालय बंद रहेगा।', exEs: 'La biblioteca estará cerrada durante octubre por renovaciones interiores.', ic: '🔨' },
    { w: 'protest', p: '/ˈprəʊtest/', m: 'a statement or action expressing disapproval of or objection to something', hi: 'विरोध प्रदर्शन / धरना', es: 'protesta / manifestación', fr: 'manifestation / protestation', de: 'Protest / Demonstration', pt: 'protesto', zh: '抗议', ar: 'احتجاج / تظاهرة', ja: '抗議 / デモ', ru: 'протест / акция протеста', ex: 'Citizens held a peaceful protest outside the municipal building.', exHi: 'नागरिकों ने नगरपालिका भवन के बाहर शांतिपूर्ण विरोध प्रदर्शन किया।', exEs: 'Los ciudadanos realizaron una protesta pacífica frente al edificio municipal.', ic: '🪧' },
    { w: 'emergency', p: '/ɪˈmɜːdʒənsi/', m: 'a serious, unexpected, and often dangerous situation requiring immediate action', hi: 'आपातकाल / आपात स्थिति', es: 'emergencia / urgencia', fr: 'urgence', de: 'Notfall / Notstand', pt: 'emergência', zh: '紧急情况', ar: 'طوارئ', ja: '緊急事態', ru: 'чрезвычайная ситуация', ex: 'Emergency services arrived within four minutes of the call.', exHi: 'कॉल के चार मिनट के भीतर आपातकालीन सेवाएं पहुंच गईं।', exEs: 'Los servicios de emergencia llegaron a los cuatro minutos de la llamada.', ic: '🚨' },
    { w: 'update', p: '/ˈʌpdeɪt/', m: 'make something more modern or give the latest information', hi: 'नवीनतम जानकारी / अपडेट', es: 'actualización / poner al día', fr: 'mise à jour', de: 'Aktualisierung / Update', pt: 'atualização', zh: '最新消息 / 更新', ar: 'تحديث / آخر الأخبار', ja: '最新情報 / 更新', ru: 'обновление / свежие данные', ex: 'We will bring you live updates as the weather situation develops.', exHi: 'जैसे ही मौसम की स्थिति बदलेगी, हम आपके लिए लाइव अपडेट लाएंगे।', exEs: 'Les traeremos actualizaciones en vivo a medida que se desarrolle la situación climática.', ic: '🔄' },
    { w: 'traffic', p: '/ˈtræfɪk/', m: 'vehicles moving on a road or public highway', hi: 'यातायात / ट्रैफ़िक', es: 'tráfico / tránsito', fr: 'circulation / trafic', de: 'Verkehr', pt: 'trânsito / tráfego', zh: '交通', ar: 'حركة المرور', ja: '交通 / トラフィック', ru: 'дорожное движение', ex: 'Heavy traffic caused a thirty-minute delay on the highway bridge.', exHi: 'भारी ट्रैफिक के कारण हाईवे पुल पर तीस मिनट की देरी हुई।', exEs: 'El tráfico pesado causó un retraso de treinta minutos en el puente de la autopista.', ic: '🚗' },
    { w: 'forecast', p: '/ˈfɔːkɑːst/', m: 'a prediction or estimate of future events, especially weather', hi: 'पूर्वानुमान / भविष्यवाणी', es: 'pronóstico / predicción', fr: 'prévision', de: 'Vorhersage / Prognose', pt: 'previsão', zh: '预测 / 预报', ar: 'توقعات / تنبؤ', ja: '予報 / 予測', ru: 'прогноз', ex: 'The five-day weather forecast indicates clear skies and warmer temperatures.', exHi: 'पांच दिवसीय मौसम पूर्वानुमान साफ आसमान और गर्म तापमान का संकेत देता है।', exEs: 'El pronóstico del tiempo para cinco días indica cielos despejados y temperaturas más cálidas.', ic: '☀️' },
    { w: 'resident', p: '/ˈrezɪdənt/', m: 'a person who lives somewhere permanently or on a long-term basis', hi: 'निवासी / नागरिक', es: 'residente / habitante', fr: 'résident / habitant', de: 'Einwohner / Anwohner', pt: 'morador / residente', zh: '居民', ar: 'مقيم / ساكن', ja: '住民', ru: 'житель / постоянный житель', ex: 'Local residents welcomed the opening of the new healthcare clinic.', exHi: 'स्थानीय निवासियों ने नए स्वास्थ्य क्लिनिक के खुलने का स्वागत किया।', exEs: 'Los residentes locales celebraron la apertura de la nueva clínica de salud.', ic: '🧑‍🤝‍🧑' },
    { w: 'official', p: '/əˈfɪʃl/', m: 'relating to an authority or public body and its duties', hi: 'आधिकारिक / सरकारी अधिकारी', es: 'oficial / funcionario', fr: 'officiel', de: 'offiziell / Beamter', pt: 'oficial', zh: '官方的 / 官员', ar: 'رسمي / مسؤول', ja: '公式の / 役員', ru: 'официальный / должностное лицо', ex: 'An official statement will be released tomorrow morning.', exHi: 'कल सुबह एक आधिकारिक बयान जारी किया जाएगा।', exEs: 'Se emitirá una declaración oficial mañana por la mañana.', ic: '👔' },
    { w: 'impact', p: '/ˈɪmpækt/', m: 'the action of one object coming forcibly into contact with another; a marked effect', hi: 'प्रभाव / असर', es: 'impacto / repercusión', fr: 'impact', de: 'Auswirkung / Wirkung', pt: 'impacto', zh: '影响', ar: 'تأثير / أثر', ja: '影響 / インパクト', ru: 'воздействие / влияние', ex: 'The new subway line will have a positive impact on daily commuters.', exHi: 'नई सबवे लाइन का दैनिक यात्रियों पर सकारात्मक प्रभाव पड़ेगा।', exEs: 'La nueva línea de metro tendrá un impacto positivo en los viajeros diarios.', ic: '💥' }
  ],
  chunks: [
    { phrase: 'According to...', meaning: 'as stated or reported by a specific source or person', hi: 'के अनुसार...', es: 'Según...', fr: 'Selon...', de: 'Laut...', pt: 'De acordo com...', zh: '根据...', ar: 'وفقاً لـ...', ja: '〜によると...', ru: 'согласно... / по данным...', note: 'Source citation marker: "According to the morning news, the storm has passed."', ic: '📰' },
    { phrase: 'It is reported that...', meaning: 'passive reporting frame indicating general media information', hi: 'यह सूचना दी गई है कि...', es: 'Se informa que...', fr: 'Il est rapporté que...', de: 'Es wird berichtet, dass...', pt: 'Foi relatado que...', zh: '据报道...', ar: 'أُفيد بأن...', ja: '〜と報じられている', ru: 'сообщается, что...', note: 'Impersonal passive reporting formula.', ic: '📢' },
    { phrase: 'make headlines', meaning: 'become notable news and receive prominent media attention', hi: 'सुर्खियों में आना', es: 'ser noticia de portada / acaparar titulares', fr: 'faire les gros titres', de: 'Schlagzeilen machen', pt: 'ser manchete', zh: '登上头条', ar: 'يتصدر العناوين', ja: 'トップニュースになる', ru: 'попасть в заголовки', note: 'Idiom: "The tech merger made headlines worldwide."', ic: '🌟' },
    { phrase: 'in other news', meaning: 'transition phrase used by news presenters to shift topics', hi: 'अन्य समाचारों में...', es: 'en otras noticias...', fr: 'dans un autre registre...', de: 'weitere Nachrichten...', pt: 'em outras notícias...', zh: '在其他新闻中...', ar: 'وفي أخبار أخرى...', ja: 'その他のニュースでは...', ru: 'к другим новостям...', note: 'Classic broadcast discourse marker.', ic: '🔄' },
    { phrase: 'breaking news', meaning: 'newly received information about an event that is currently occurring', hi: 'ताज़ा ख़बर / ब्रेकिंग न्यूज़', es: 'noticias de última hora', fr: 'dernière minute / flash info', de: 'Eilmeldung', pt: 'últimas notícias', zh: '即时突发新闻', ar: 'أخبار عاجلة', ja: '速報ニュース', ru: 'срочные новости', note: 'Urgent media alert.', ic: '🚨' },
    { phrase: 'press release', meaning: 'an official statement issued to newspapers giving information on a particular matter', hi: 'प्रेस विज्ञप्ति / आधिकारिक बयान', es: 'comunicado de prensa', fr: 'communiqué de presse', de: 'Pressemitteilung', pt: 'comunicado de imprensa', zh: '新闻稿', ar: 'بيان صحفي', ja: 'プレスリリース', ru: 'пресс-релиз', note: 'Formal PR term: "The council issued a press release."', ic: '📄' },
    { phrase: 'on the scene', meaning: 'at the exact location where an event is happening', hi: 'घटनास्थल पर', es: 'en el lugar de los hechos', fr: 'sur les lieux', de: 'vor Ort', pt: 'no local dos fatos', zh: '在现场', ar: 'في موقع الحدث', ja: '現場で', ru: 'на месте событий', note: 'Journalistic phrase: "Our reporter is live on the scene."', ic: '📍' },
    { phrase: 'stay tuned', meaning: 'keep watching or listening for further developments', hi: 'बने रहें / देखते रहें', es: 'siga en sintonía / manténgase informado', fr: 'restez à l\'écoute', de: 'bleiben Sie dran', pt: 'fique ligado', zh: '请继续关注', ar: 'ابقوا معنا', ja: '引き続きご覧ください', ru: 'оставайтесь с нами', note: 'Sign-off phrase: "Stay tuned for more updates."', ic: '📻' }
  ],
  grammar: {
    title: 'Passive Reporting Frames & Narrative Tenses in News Reporting',
    concept: 'Using impersonal reporting structures ("It is reported / believed / said that...") and combining the Past Continuous (background action) with the Past Simple (main event) to narrate news stories.',
    patterns: [
      {
        title: 'Impersonal Reporting Frames: "According to..." & "It is reported that..."',
        structure: 'According to + [Source], Clause  OR  It is reported that + Clause',
        rule: 'Use "According to" or "It is reported that" to attribute facts to media sources without taking personal responsibility.',
        examples: [
          { en: 'According to the municipal report, water supply will resume tonight.', hi: 'नगरपालिका की रिपोर्ट के अनुसार, पानी की आपूर्ति आज रात फिर से शुरू होगी।', es: 'Según el informe municipal, el suministro de agua se reanudará esta noche.' },
          { en: 'It is reported that several flights were delayed due to heavy fog.', hi: 'यह सूचना दी गई है कि घने कोहरे के कारण कई उड़ानें विलंबित हुईं।', es: 'Se informa que varios vuelos se retrasaron debido a la densa niebla.' }
        ]
      },
      {
        title: 'Storytelling in News: Past Continuous + Past Simple',
        structure: 'While / When + Past Continuous, Past Simple  (or vice-versa)',
        rule: 'Use Past Continuous to set the background scene and Past Simple for the interrupting event or specific occurrence.',
        examples: [
          { en: 'Commuters were waiting on the platform when the power went out.', hi: 'यात्री प्लेटफॉर्म पर इंतजार कर रहे थे जब बिजली चली गई।', es: 'Los viajeros estaban esperando en el andén cuando se cortó la luz.' },
          { en: 'While workers were repairing the water pipe, they discovered an ancient artifact.', hi: 'जब मजदूर पानी के पाइप की मरम्मत कर रहे थे, तो उन्हें एक प्राचीन कलाकृति मिली।', es: 'Mientras los trabajadores reparaban la tubería de agua, descubrieron un artefacto antiguo.' }
        ]
      },
      {
        title: 'Reporting Official Actions: Passive Voice in News',
        structure: 'Subject + was / were + Past Participle + (by Agent)',
        rule: 'News language frequently uses passive voice to emphasize the event rather than who carried it out.',
        examples: [
          { en: 'The new community library was inaugurated by the mayor yesterday.', hi: 'नए सामुदायिक पुस्तकालय का उद्घाटन कल मेयर द्वारा किया गया था।', es: 'La nueva biblioteca comunitaria fue inaugurada ayer por el alcalde.' },
          { en: 'Two new bridges were constructed to ease traffic congestion.', hi: 'यातायात की भीड़ को कम करने के लिए दो नए पुलों का निर्माण किया गया था।', es: 'Se construyeron dos nuevos puentes para aliviar la congestión del tráfico.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'According to me, the news is accurate.',
      cor: 'In my opinion, the news is accurate.',
      exp: 'Do not say "According to me". Use "According to" for third-party sources and "In my opinion" for yourself.',
      hi: 'स्वयं के विचार के लिए "According to me" न कहें; "In my opinion" का प्रयोग करें।',
      es: 'No digas "According to me"; usa "In my opinion" para tus propias opiniones.'
    },
    {
      inc: 'It is reporting that the road is closed.',
      cor: 'It is reported that the road is closed.',
      exp: 'Use the passive past participle "reported" in the reporting frame: "It is reported that...".',
      hi: '"It is reported that..." में past participle "reported" आता है।',
      es: 'Usa el participio pasivo "reported": "It is reported that...".'
    },
    {
      inc: 'The passengers waited when the train was stopping.',
      cor: 'The passengers were waiting when the train stopped.',
      exp: 'The background continuous action requires Past Continuous ("were waiting") and the interrupting event takes Past Simple ("stopped").',
      hi: 'पृष्ठभूमि की क्रिया में Past Continuous ("were waiting") और मुख्य घटना में Past Simple ("stopped") आता है।',
      es: 'La acción de fondo va en Past Continuous ("were waiting") y el evento puntual en Past Simple ("stopped").'
    },
    {
      inc: 'The mayor announce new laws yesterday.',
      cor: 'The mayor announced new laws yesterday.',
      exp: 'Past events require past tense: "announced".',
      hi: 'बीते हुए कल की घटना के लिए Past Tense "announced" का प्रयोग करें।',
      es: 'Los eventos pasados requieren el pasado simple "announced".'
    },
    {
      inc: 'Stay tune for more news.',
      cor: 'Stay tuned for more news.',
      exp: 'The idiom is "Stay tuned" with the past participle ending "-ed".',
      hi: 'सही मुहावरा "Stay tuned" है।',
      es: 'La expresión correcta es "Stay tuned".'
    }
  ],
  dialogues: [
    {
      title: 'Discussing the Morning Local News',
      context: 'Maya and Julian share updates about road construction and the new park opening.',
      charA: { name: 'Maya', av: '👩‍💼', role: 'Accountant' },
      charB: { name: 'Julian', av: '👨‍💼', role: 'Architect' },
      turns: [
        { spk: 'Maya', text: 'Julian, did you see the headlines this morning? It is reported that the main bridge is closed for renovation.', hi: 'जूलियन, क्या आपने आज सुबह की सुर्खियां देखीं? यह सूचना मिली है कि मुख्य पुल नवीनीकरण के लिए बंद है।', es: 'Julian, ¿viste los titulares esta mañana? Se informa que el puente principal está cerrado por reformas.' },
        { spk: 'Julian', text: 'Yes, according to the radio broadcast, commuters were experiencing heavy delays during rush hour.', hi: 'हाँ, रेडियो प्रसारण के अनुसार, व्यस्त समय के दौरान यात्रियों को भारी देरी का सामना करना पड़ रहा था।', es: 'Sí, según la emisión de radio, los viajeros estaban experimentando grandes retrasos durante la hora punta.' },
        { spk: 'Maya', text: 'In other news, the city council announced that the botanical garden reopens next Saturday.', hi: 'अन्य समाचारों में, नगर परिषद ने घोषणा की कि बॉटनिकल गार्डन अगले शनिवार को फिर से खुल रहा है।', es: 'En otras noticias, el ayuntamiento anunció que el jardín botánico reabre el próximo sábado.' },
        { spk: 'Julian', text: 'That is wonderful! The local community was waiting for that renovation for over two years.', hi: 'यह बहुत बढ़िया है! स्थानीय समुदाय दो साल से अधिक समय से उस नवीनीकरण का इंतजार कर रहा था।', es: '¡Eso es maravilloso! La comunidad local estuvo esperando esa renovación durante más de dos años.' }
      ]
    },
    {
      title: 'Reporting an Unexpected Community Event',
      context: 'Dev and Sara discuss a power outage that affected their neighborhood.',
      charA: { name: 'Dev', av: '👨', role: 'Resident' },
      charB: { name: 'Sara', av: '👩', role: 'Resident' },
      turns: [
        { spk: 'Dev', text: 'Sara, were you home last night when the power went out across the whole district?', hi: 'सारा, क्या आप कल रात घर पर थीं जब पूरे जिले में बिजली चली गई थी?', es: 'Sara, ¿estabas en casa anoche cuando se cortó la luz en todo el distrito?' },
        { spk: 'Sara', text: 'I was cooking dinner when the lights flickered and suddenly went dark.', hi: 'मैं रात का खाना बना रही थी जब रोशनी झिलमिलाई और अचानक अंधेरा छा गया।', es: 'Estaba cocinando la cena cuando las luces parpadearon y de repente se apagaron.' },
        { spk: 'Dev', text: 'According to a press release from the electric company, a fallen tree damaged the main power line.', hi: 'बिजली कंपनी की एक प्रेस विज्ञप्ति के अनुसार, एक गिरे हुए पेड़ ने मुख्य बिजली लाइन को क्षतिग्रस्त कर दिया था।', es: 'Según un comunicado de prensa de la compañía eléctrica, un árbol caído dañó la línea principal.' },
        { spk: 'Sara', text: 'Emergency technicians worked through the night, and power was restored by daybreak.', hi: 'आपातकालीन तकनीशियनों ने रात भर काम किया, और दिन निकलने तक बिजली बहाल कर दी गई।', es: 'Los técnicos de emergencia trabajaron toda la noche y la electricidad se restableció al amanecer.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_a2_11_157_p01',
      type: 'multiple_choice',
      prompt: 'Which phrase introduces information from a published source?',
      options: ['According to', 'According with', 'In accordance for', 'According me'],
      correctAnswer: 'According to',
      explanation: '"According to + source" is the correct citation phrase.'
    },
    {
      id: 'ex_a2_11_157_p02',
      type: 'fill_blank',
      prompt: 'Fill in the blank in the reporting frame: "It is _____ that several roads are blocked by snow."',
      correctAnswer: 'reported',
      explanation: 'Use the past participle: "It is reported that...".'
    },
    {
      id: 'ex_a2_11_157_p03',
      type: 'word_ordering',
      prompt: 'Arrange into a correct narrative sentence:',
      words: ['They', 'were', 'driving', 'home', 'when', 'the', 'storm', 'started.'],
      correctAnswer: 'They were driving home when the storm started.',
      explanation: 'Past Continuous (were driving) + when + Past Simple (started).'
    },
    {
      id: 'ex_a2_11_157_p04',
      type: 'translation',
      prompt: 'Translate into English: "समाचार के अनुसार, कल मौसम साफ रहेगा।"',
      targetSentence: 'According to the news, the weather will be clear tomorrow.',
      correctAnswer: 'According to the news, the weather will be clear tomorrow.',
      explanation: '"According to the news" introduces the weather update.'
    },
    {
      id: 'ex_a2_11_157_p05',
      type: 'error_correction',
      prompt: 'Find and correct the error in personal opinion vs attribution:',
      errorSentence: 'According to me, the new policy is very beneficial.',
      correctAnswer: 'In my opinion, the new policy is very beneficial.',
      explanation: 'Use "In my opinion" for personal viewpoints, not "According to me".'
    },
    {
      id: 'ex_a2_11_157_p06',
      type: 'multiple_choice',
      prompt: 'What does "breaking news" mean?',
      options: [
        'Important news that is happening right now and being reported immediately',
        'Historical news from ten years ago',
        'A fictional story published in a magazine',
        'A sports match that was cancelled'
      ],
      correctAnswer: 'Important news that is happening right now and being reported immediately',
      explanation: 'Breaking news refers to current, unfolding events.'
    },
    {
      id: 'ex_a2_11_157_p07',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "The mayor issued an official _____ regarding the water crisis."',
      correctAnswer: 'statement',
      explanation: 'An "official statement" is a formal public communication.'
    },
    {
      id: 'ex_a2_11_157_p08',
      type: 'word_ordering',
      prompt: 'Order the words to create a news broadcast transition:',
      words: ['In', 'other', 'news,', 'the', 'museum', 'opened', 'a', 'new', 'gallery.'],
      correctAnswer: 'In other news, the museum opened a new gallery.',
      explanation: 'Discourse marker "In other news" followed by main clause.'
    },
    {
      id: 'ex_a2_11_157_p09',
      type: 'translation',
      prompt: 'Translate into English: "जब सायरन बजा तब लोग काम कर रहे थे।"',
      targetSentence: 'People were working when the siren sounded.',
      correctAnswer: 'People were working when the siren sounded.',
      explanation: 'Past Continuous (were working) + Past Simple (sounded).'
    },
    {
      id: 'ex_a2_11_157_p10',
      type: 'error_correction',
      prompt: 'Fix the passive reporting error:',
      errorSentence: 'It is say that the company will hire fifty engineers.',
      correctAnswer: 'It is said that the company will hire fifty engineers.',
      explanation: 'Use past participle "said": "It is said that...".'
    },
    {
      id: 'ex_a2_11_157_p11',
      type: 'multiple_choice',
      prompt: 'Choose the correct sign-off: "That is all for the six o\'clock bulletin. Stay _____ for sports updates."',
      options: ['tuned', 'tuning', 'tune', 'tunes'],
      correctAnswer: 'tuned',
      explanation: '"Stay tuned" is the standard media phrase.'
    },
    {
      id: 'ex_a2_11_157_p12',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Our journalist is live on the _____ outside city hall."',
      correctAnswer: 'scene',
      explanation: '"on the scene" means present at the location of the event.'
    },
    {
      id: 'ex_a2_11_157_p13',
      type: 'word_ordering',
      prompt: 'Arrange into a passive news headline:',
      words: ['A', 'new', 'hospital', 'was', 'inaugurated', 'yesterday.'],
      correctAnswer: 'A new hospital was inaugurated yesterday.',
      explanation: 'Subject + was inaugurated + Time.'
    },
    {
      id: 'ex_a2_11_157_p14',
      type: 'translation',
      prompt: 'Translate into English: "पुलिस ने यातायात दुर्घटना के गवाहों से बात की।"',
      targetSentence: 'The police spoke to witnesses of the traffic accident.',
      correctAnswer: 'The police spoke to witnesses of the traffic accident.',
      explanation: '"witnesses" translates as गवाह / प्रत्यक्षदर्शी.'
    },
    {
      id: 'ex_a2_11_157_p15',
      type: 'multiple_choice',
      prompt: 'Choose the most appropriate word: "The discovery of ancient coins made _____ in local newspapers."',
      options: ['headlines', 'bulletins', 'broadcasts', 'witnesses'],
      correctAnswer: 'headlines',
      explanation: 'Idiom: "made headlines".'
    }
  ],
  review: [
    {
      id: 'ex_a2_11_157_r01',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly combines past tenses for news storytelling?',
      options: [
        'While firemen were extinguishing the flames, neighbors gathered outside.',
        'While firemen extinguished the flames, neighbors were gathered outside.',
        'While firemen was extinguishing, neighbors gather.',
        'While firemen extinguishing, neighbors gathered.'
      ],
      correctAnswer: 'While firemen were extinguishing the flames, neighbors gathered outside.',
      explanation: 'Past Continuous for background action + Past Simple for event.'
    },
    {
      id: 'ex_a2_11_157_r02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "According _____ official reports, the river levels are returning to normal."',
      correctAnswer: 'to',
      explanation: '"According to" is the required preposition.'
    },
    {
      id: 'ex_a2_11_157_r03',
      type: 'error_correction',
      prompt: 'Correct the error:',
      errorSentence: 'According to me, the newspaper article is very interesting.',
      correctAnswer: 'In my opinion, the newspaper article is very interesting.',
      explanation: 'Replace "According to me" with "In my opinion".'
    },
    {
      id: 'ex_a2_11_157_r04',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      words: ['It', 'is', 'reported', 'that', 'the', 'flight', 'arrived', 'safely.'],
      correctAnswer: 'It is reported that the flight arrived safely.',
      explanation: 'Passive reporting frame + Clause.'
    },
    {
      id: 'ex_a2_11_157_r05',
      type: 'translation',
      prompt: 'Translate into English: "शाम का समाचार प्रसारण आठ बजे शुरू होता है।"',
      targetSentence: 'The evening news broadcast starts at eight o\'clock.',
      correctAnswer: 'The evening news broadcast starts at eight o\'clock.',
      explanation: '"evening news broadcast" translates शाम का समाचार प्रसारण.'
    }
  ],
  assessment: [
    {
      id: 'ex_a2_11_157_a01',
      type: 'multiple_choice',
      prompt: 'Which sentence best reports a community development using natural English?',
      options: [
        'According to the local press release, the new subway extension opened this morning.',
        'According to me, the subway is opening today morning.',
        'It is reporting that subway opening yesterday.',
        'Subway made headlines because it is opening by mayor.'
      ],
      correctAnswer: 'According to the local press release, the new subway extension opened this morning.',
      explanation: 'Accurate reporting structure and appropriate vocabulary.'
    },
    {
      id: 'ex_a2_11_157_a02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Stay _____ for our special report on city transportation at nine."',
      correctAnswer: 'tuned',
      explanation: '"Stay tuned" is the media sign-off idiom.'
    },
    {
      id: 'ex_a2_11_157_a03',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nHost: "What happened on the highway earlier?"\nReporter: "_____"',
      options: [
        'Workers were repairing the bridge when a sudden rainstorm delayed operations.',
        'Workers was repair bridge when rain happened.',
        'Because of workers, the rain was delayed.',
        'According to me, workers repaired.'
      ],
      correctAnswer: 'Workers were repairing the bridge when a sudden rainstorm delayed operations.',
      explanation: 'Accurate past continuous / past simple combination.'
    },
    {
      id: 'ex_a2_11_157_a04',
      type: 'speaking',
      prompt: 'Read aloud in a clear broadcast tone: "According to the municipal bulletin, the downtown renovations were completed ahead of schedule, and normal traffic flow has resumed."',
      targetSentence: 'According to the municipal bulletin, the downtown renovations were completed ahead of schedule, and normal traffic flow has resumed.',
      correctAnswer: 'According to the municipal bulletin, the downtown renovations were completed ahead of schedule, and normal traffic flow has resumed.',
      explanation: 'Deliver with steady, clear pronunciation of "municipal", "bulletin", and "renovations".'
    },
    {
      id: 'ex_a2_11_157_a05',
      type: 'translation',
      prompt: 'Translate into English: "यह सूचना दी गई है कि तूफान से कोई बड़ी क्षति नहीं हुई।"',
      targetSentence: 'It is reported that the storm caused no major damage.',
      correctAnswer: 'It is reported that the storm caused no major damage.',
      explanation: '"It is reported that..." accurately translates यह सूचना दी गई है कि.'
    }
  ]
};

// =========================================================================
// LESSON 158: Personal Finance, Budgeting, Spending Habits & Smart Shopping
// =========================================================================
export const LESSON_158_CONFIG: LessonConfigA2 = {
  num: 158,
  title: 'Personal Finance, Budgeting, Spending Habits & Smart Shopping',
  icon: '💰',
  estMin: 25,
  objTitle: 'Financial Vocabulary, Conditional Advice (First Conditional) & Phrasal Verbs',
  objDesc: 'Master discussing monthly budgeting, managing expenses, tracking savings, using first conditionals for financial planning ("If you track your spending, you will save more"), and phrasal verbs ("cut down on", "put aside", "pay off").',
  objHi: 'व्यक्तिगत वित्त, बजट बनाने, बचत करने, फर्स्ट कंडीशनल ("If you save..., you will...") और वित्तीय फ़्रेज़ल वर्ब्स ("cut down on", "put aside") का उपयोग करना सीखें।',
  objEs: 'Finanzas personales, presupuesto, ahorro, condicionales de tipo 1 ("If you track..., you will...") y phrasal verbs ("cut down on", "put aside", "pay off").',
  canDo: [
    'I can talk about monthly expenses, income, utility bills, and savings goals.',
    'I can use First Conditionals to give financial advice and plan future budgets.',
    'I can use key financial phrasal verbs ("cut down on", "put aside", "pay off", "run out of").',
    'I can compare smart shopping strategies, discounts, and value for money.'
  ],
  canDoHi: [
    'मैं मासिक खर्चों, आय, उपयोगिता बिलों और बचत लक्ष्यों के बारे में बात कर सकता हूँ।',
    'मैं वित्तीय सलाह देने और भविष्य के बजट की योजना बनाने के लिए फर्स्ट कंडीशनल का उपयोग कर सकता हूँ।',
    'मैं प्रमुख वित्तीय फ़्रेज़ल वर्ब्स ("cut down on", "put aside", "pay off") का उपयोग कर सकता हूँ।',
    'मैं स्मार्ट शॉपिंग रणनीतियों, छूट और पैसों के सही मूल्य की तुलना कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo hablar de gastos mensuales, ingresos, facturas y metas de ahorro.',
    'Puedo usar el primer condicional para dar consejos financieros y planificar presupuestos.',
    'Puedo usar phrasal verbs financieros clave ("cut down on", "put aside", "pay off").',
    'Puedo comparar estrategias de compra inteligente y descuentos.'
  ],
  vocab: [
    { w: 'budget', p: '/ˈbʌdʒɪt/', m: 'an estimate of income and expenditure for a set period of time', hi: 'बजट / वित्तीय योजना', es: 'presupuesto', fr: 'budget', de: 'Budget / Haushaltsplan', pt: 'orçamento', zh: '预算', ar: 'ميزانية', ja: '予算', ru: 'бюджет', ex: 'I create a detailed monthly budget to keep track of my living expenses.', exHi: 'मैं अपने रहने के खर्चों पर नज़र रखने के लिए एक विस्तृत मासिक बजट बनाता हूँ।', exEs: 'Hago un presupuesto mensual detallado para controlar mis gastos de manutención.', ic: '📊' },
    { w: 'expense', p: '/ɪkˈspens/', m: 'the cost required for something; money spent on something', hi: 'खर्च / व्यय', es: 'gasto / desembolso', fr: 'dépense', de: 'Ausgabe / Unkosten', pt: 'despesa / gasto', zh: '开支 / 费用', ar: 'مصروف / نفقة', ja: '支出 / 費用', ru: 'расход / затрата', ex: 'Rent and groceries are my two largest monthly expenses.', exHi: 'किराया और राशन मेरे दो सबसे बड़े मासिक खर्च हैं।', exEs: 'El alquiler y las compras son mis dos mayores gastos mensuales.', ic: '💸' },
    { w: 'income', p: '/ˈɪnkʌm/', m: 'money received, especially on a regular basis, for work or through investments', hi: 'आय / आमदनी', es: 'ingresos / sueldo', fr: 'revenu', de: 'Einkommen / Verdienst', pt: 'renda / rendimento', zh: '收入', ar: 'دخل / إيراد', ja: '収入 / 所得', ru: 'доход / заработок', ex: 'She puts ten percent of her monthly income into a high-interest savings account.', exHi: 'वह अपनी मासिक आय का दस प्रतिशत उच्च-ब्याज वाले बचत खाते में डालती है।', exEs: 'Ella destina el diez por ciento de sus ingresos mensuales a una cuenta de ahorros de alto interés.', ic: '💵' },
    { w: 'savings', p: '/ˈseɪvɪŋz/', m: 'the money that someone has saved, especially through a bank or official scheme', hi: 'बचत / जमा पूंजी', es: 'ahorros', fr: 'économies', de: 'Ersparnisse', pt: 'poupança / economias', zh: '存款 / 储蓄', ar: 'مدخرات', ja: '貯金 / 蓄え', ru: 'сбережения / накопления', ex: 'They used their savings to make a down payment on a house.', exHi: 'उन्होंने घर के लिए अग्रिम भुगतान (डाउन पेमेंट) करने के लिए अपनी बचत का उपयोग किया।', exEs: 'Utilizaron sus ahorros para dar el enganche de una casa.', ic: '🏦' },
    { w: 'receipt', p: '/rɪˈsiːt/', m: 'a written acknowledgment that a specified article or sum of money has been received', hi: 'रसीद / पावती', es: 'recibo / comprobante', fr: 'reçu / quittance', de: 'Quittung / Beleg', pt: 'recibo / comprovante', zh: '收据', ar: 'إيصال / فاتورة', ja: '領収書 / レシート', ru: 'чек / квитанция', ex: 'Always keep your purchase receipt in case you need an exchange.', exHi: 'यदि आपको सामान बदलने की आवश्यकता हो तो हमेशा अपनी खरीद रसीद अपने पास रखें।', exEs: 'Guarda siempre el recibo de compra en caso de que necesites un cambio.', ic: '🧾' },
    { w: 'discount', p: '/ˈdɪskaʊnt/', m: 'a deduction from the usual cost of something', hi: 'छूट / बट्टा', es: 'descuento / rebaja', fr: 'réduction / rabais', de: 'Rabatt / Nachlass', pt: 'desconto', zh: '折扣', ar: 'خصم / تخفيض', ja: '割引 / ディスカウント', ru: 'скидка', ex: 'The store offered a twenty percent discount on all winter coats.', exHi: 'दुकान ने सभी सर्दियों के कोट पर बीस प्रतिशत की छूट की पेशकश की।', exEs: 'La tienda ofreció un veinte por ciento de descuento en todos los abrigos de invierno.', ic: '🏷️' },
    { w: 'transaction', p: '/trænˈzækʃn/', m: 'an instance of buying or selling something; a business deal or bank transfer', hi: 'लेन-देन / ट्रांजैक्शन', es: 'transacción / operación bancaria', fr: 'transaction', de: 'Transaktion / Überweisung', pt: 'transação', zh: '交易', ar: 'معاملة مالية', ja: '取引 / トランザクション', ru: 'транзакция / операция', ex: 'I checked my banking app to verify the recent card transaction.', exHi: 'हाल के कार्ड लेनदेन को सत्यापित करने के लिए मैंने अपना बैंकिंग ऐप चेक किया।', exEs: 'Revisé mi aplicación bancaria para verificar la transacción reciente con tarjeta.', ic: '💳' },
    { w: 'debt', p: '/det/', m: 'a sum of money that is owed or due', hi: 'कर्ज / ऋण / उधार', es: 'deuda', fr: 'dette', de: 'Schulden', pt: 'dívida', zh: '债务', ar: 'دَين', ja: '借金 / 負債', ru: 'долг / задолженность', ex: 'He worked overtime for six months to pay off his credit card debt.', exHi: 'उसने अपने क्रेडिट कार्ड का कर्ज चुकाने के लिए छह महीने तक ओवरटाइम काम किया।', exEs: 'Trabajó horas extras durante seis meses para pagar la deuda de su tarjeta de crédito.', ic: '📉' },
    { w: 'utilities', p: '/juːˈtɪlətiz/', m: 'services such as electricity, gas, or water supplied for public use', hi: 'उपयोगिता सेवाएं (बिजली, पानी, गैस)', es: 'servicios básicos (luz, agua, gas)', fr: 'charges / services publics', de: 'Nebenkosten / Versorgungsleistungen', pt: 'serviços públicos (água, luz, gás)', zh: '公用事业费（水电气）', ar: 'فواتير الخدمات الأساسية', ja: '公共料金（光熱費）', ru: 'коммунальные услуги', ex: 'Our monthly utilities cost around one hundred and fifty dollars.', exHi: 'हमारी मासिक उपयोगिता सेवाओं की लागत लगभग एक सौ पचास डॉलर है।', exEs: 'Nuestros servicios básicos mensuales cuestan alrededor de ciento cincuenta dólares.', ic: '💡' },
    { w: 'investment', p: '/ɪnˈvestmənt/', m: 'the action or process of investing money for profit', hi: 'निवेश', es: 'inversión', fr: 'investissement', de: 'Investition / Geldanlage', pt: 'investimento', zh: '投资', ar: 'استثمار', ja: '投資', ru: 'инвестиция / вложение', ex: 'Buying energy-efficient appliances is a smart long-term investment.', exHi: 'ऊर्जा-कुशल उपकरण खरीदना एक समझदारी भरा दीर्घकालिक निवेश है।', exEs: 'Comprar electrodomésticos de bajo consumo es una inversión inteligente a largo plazo.', ic: '📈' },
    { w: 'bargain', p: '/ˈbɑːɡɪn/', m: 'a thing bought or offered for sale more cheaply than is usual or expected', hi: 'सौदा / सस्ती और अच्छी वस्तु', es: 'ganga / oferta', fr: 'bonne affaire', de: 'Schnäppchen', pt: 'pechincha / pechinchar', zh: '便宜货 / 划算的交易', ar: 'صفقة رابحة / فرصة', ja: 'お買い得品 / バーゲン', ru: 'выгодная покупка / сделка', ex: 'I found a great bargain at the weekend flea market.', exHi: 'मुझे सप्ताहांत के पिस्सू बाजार में एक बहुत अच्छा सौदा मिला।', exEs: 'Encontré una gran ganga en el mercadillo del fin de semana.', ic: '🛍️' },
    { w: 'refund', p: '/ˈriːfʌnd/', m: 'a repayment of a sum of money, typically to a dissatisfied customer', hi: 'धन वापसी / रिफंड', es: 'reembolso / devolución', fr: 'remboursement', de: 'Rückerstattung', pt: 'reembolso', zh: '退款', ar: 'استرداد المبلغ', ja: '返金 / 払い戻し', ru: 'возврат средств', ex: 'The store gave me a full refund because the jacket had a broken zipper.', exHi: 'दुकान ने मुझे पूरा रिफंड दिया क्योंकि जैकेट की ज़िप टूटी हुई थी।', exEs: 'La tienda me dio un reembolso completo porque la chaqueta tenía la cremallera rota.', ic: '💵' },
    { w: 'frugal', p: '/ˈfruːɡl/', m: 'sparing or economical with regard to money or food', hi: 'मितव्ययी / सोच-समझकर खर्च करने वाला', es: 'frugal / ahorrador', fr: 'frugal / économe', de: 'sparsam', pt: 'frugal / comedido', zh: '节俭的', ar: 'مقتصد', ja: '質素な / 倹約な', ru: 'экономный / бережливый', ex: 'She leads a frugal lifestyle and cooks all her meals at home.', exHi: 'वह एक मितव्ययी जीवन शैली जीती है और अपना सारा खाना घर पर बनाती है।', exEs: 'Lleva un estilo de vida frugal y cocina todas sus comidas en casa.', ic: '🥗' },
    { w: 'overspend', p: '/ˌəʊvəˈspend/', m: 'spend more money than is available or intended', hi: 'ज़रूरत से ज़्यादा खर्च करना / फ़िज़ूलख़र्ची करना', es: 'gastar de más / sobrepasar el presupuesto', fr: 'dépenser excessivement', de: 'zu viel ausgeben', pt: 'gastar demais', zh: '过度花费', ar: 'الإفراط في الإنفاق', ja: '使いすぎる', ru: 'тратить лишнее / перерасходовать', ex: 'If you do not set a limit, it is easy to overspend during holidays.', exHi: 'यदि आप एक सीमा निर्धारित नहीं करते हैं, तो छुट्टियों के दौरान अधिक खर्च करना आसान है।', es: 'Si no fijas un límite, es fácil gastar de más durante las vacaciones.', ic: '📉' },
    { w: 'installment', p: '/ɪnˈstɔːlmənt/', m: 'a sum of money due as one of several equal payments spread over a period', hi: 'किस्त / ईएमआई', es: 'cuota / pago a plazos', fr: 'versement / mensualité', de: 'Rate / Teilzahlung', pt: 'parcela / prestação', zh: '分期付款', ar: 'قسط', ja: '分割払い', ru: 'взнос / рассрочка', ex: 'We paid for the new sofa in six monthly installments.', exHi: 'हमने नए सोफे के लिए छह मासिक किस्तों में भुगतान किया।', exEs: 'Pagamos el sofá nuevo en seis cuotas mensuales.', ic: '🗓️' },
    { w: 'financial', p: '/faɪˈnænʃl/', m: 'relating to finance or money matters', hi: 'वित्तीय / आर्थिक', es: 'financiero', fr: 'financier', de: 'finanziell', pt: 'financeiro', zh: '金融的 / 财务的', ar: 'مالي', ja: '財政の / 金融の', ru: 'финансовый', ex: 'Setting clear financial goals helps reduce everyday stress.', exHi: 'स्पष्ट वित्तीय लक्ष्य निर्धारित करने से रोजमर्रा के तनाव को कम करने में मदद मिलती है।', exEs: 'Establecer metas financieras claras ayuda a reducir el estrés cotidiano.', ic: '🎯' },
    { w: 'subscription', p: '/səbˈskrɪpʃn/', m: 'an advance payment made to receive or participate in something regularly', hi: 'सदस्यता / सब्सक्रिप्शन', es: 'suscripción', fr: 'abonnement', de: 'Abonnement / Abo', pt: 'assinatura', zh: '订阅', ar: 'اشتراك', ja: '定期購読 / サブスクリプション', ru: 'подписка', ex: 'I cancelled two streaming subscriptions that I rarely used.', exHi: 'मैंने दो स्ट्रीमिंग सब्सक्रिप्शन रद्द कर दिए जिनका मैं शायद ही कभी उपयोग करता था।', exEs: 'Cancelé dos suscripciones de transmisión que rara vez usaba.', ic: '📱' },
    { w: 'interest', p: '/ˈɪntrəst/', m: 'money paid regularly at a particular rate for the use of money lent', hi: 'ब्याज', es: 'interés bancario', fr: 'intérêt', de: 'Zinsen', pt: 'juros', zh: '利息', ar: 'فائدة', ja: '利子 / 利息', ru: 'процент (банковский)', ex: 'Pay off high-interest loans first to save money over time.', exHi: 'समय के साथ पैसे बचाने के लिए पहले उच्च-ब्याज वाले ऋणों का भुगतान करें।', exEs: 'Paga primero los préstamos con intereses altos para ahorrar dinero a largo plazo.', ic: '📈' },
    { w: 'emergency fund', p: '/ɪˈmɜːdʒənsi fʌnd/', m: 'a reserve of money set aside to cover unforeseen expenses', hi: 'आपातकालीन निधि / इमरजेंसी फंड', es: 'fondo de emergencia', fr: 'fonds d\'urgence', de: 'Notgroschen / Notfallfonds', pt: 'fundo de emergência', zh: '应急基金', ar: 'صندوق الطوارئ', ja: '緊急時資金', ru: 'резервный фонд', ex: 'Financial advisors recommend saving three months of living costs in an emergency fund.', exHi: 'वित्तीय सलाहकार आपातकालीन निधि में तीन महीने के रहने के खर्च को बचाने की सलाह देते हैं।', exEs: 'Los asesores financieros recomiendan ahorrar tres meses de gastos en un fondo de emergencia.', ic: '🛡️' },
    { w: 'allocate', p: '/ˈæləkeɪt/', m: 'distribute resources or duties for a particular purpose', hi: 'आबंटित करना / तय करना', es: 'asignar / destinar', fr: 'allouer / attribuer', de: 'zuweisen / einteilen', pt: 'alocar / destinar', zh: '分配 / 划拨', ar: 'يخصص / يوزع', ja: '割り当てる', ru: 'выделять / распределять', ex: 'We allocate twenty percent of our budget directly to savings.', exHi: 'हम अपने बजट का बीस प्रतिशत सीधे बचत के लिए आवंटित करते हैं।', exEs: 'Asignamos el veinte por ciento de nuestro presupuesto directamente a los ahorros.', ic: '📂' }
  ],
  chunks: [
    { phrase: 'cut down on', meaning: 'reduce the amount or consumption of something to save money', hi: 'में कटौती करना / कम करना', es: 'reducir / recortar gastos en', fr: 'réduire / diminuer', de: 'reduzieren / einschränken', pt: 'reduzir / cortar gastos com', zh: '削减 / 减少', ar: 'يقلل من / يخفض', ja: '〜を減らす / 節約する', ru: 'сократить (расходы на)', note: 'Phrasal verb: "We need to cut down on dining out."', ic: '✂️' },
    { phrase: 'put aside', meaning: 'save an amount of money for a future specific purpose', hi: 'बचाकर अलग रखना', es: 'apartar / ahorrar dinero', fr: 'mettre de côté', de: 'zurücklegen / beiseitelegen', pt: 'guardar / colocar de lado', zh: '存下 / 留出', ar: 'يدخر جانباً', ja: '（お金を）取っておく', ru: 'откладывать (деньги)', note: 'Phrasal verb: "She puts aside $100 every month."', ic: '🐖' },
    { phrase: 'pay off', meaning: 'pay the full amount of a debt or loan', hi: 'पूरा कर्ज चुकाना', es: 'liquidar / pagar por completo una deuda', fr: 'rembourser intégralement', de: 'abbezahlen / begleichen', pt: 'quitar / pagar totalmente', zh: '还清（债务）', ar: 'يسدد بالكامل', ja: '（借金を）完済する', ru: 'расплатиться / погасить долг', note: 'Phrasal verb: "He paid off his student loan."', ic: '💳' },
    { phrase: 'stick to a budget', meaning: 'remain within the planned financial spending limits', hi: 'बजट के अनुसार चलना', es: 'ceñirse al presupuesto', fr: 'respecter son budget', de: 'sich an das Budget halten', pt: 'manter-se dentro do orçamento', zh: '遵守预算', ar: 'الالتزام بالميزانية', ja: '予算を守る', ru: 'придерживаться бюджета', note: 'Key budgeting collocation.', ic: '📋' },
    { phrase: 'run out of money', meaning: 'have no money remaining', hi: 'पैसे खत्म हो जाना', es: 'quedarse sin dinero', fr: 'être à court d\'argent', de: 'kein Geld mehr haben', pt: 'ficar sem dinheiro', zh: '把钱用光', ar: 'ينفد منه المال', ja: 'お金が尽きる', ru: 'остаться без денег', note: 'Common financial situation idiom.', ic: '🕳️' },
    { phrase: 'value for money', meaning: 'getting good worth from the amount spent', hi: 'पैसों का सही मूल्य', es: 'relación calidad-precio', fr: 'rapport qualité-prix', de: 'Gegenwert fürs Geld', pt: 'custo-benefício', zh: '物有所值', ar: 'قيمة مقابل المال', ja: 'コストパフォーマンス', ru: 'соотношение цены и качества', note: 'Consumer assessment standard.', ic: '⭐' },
    { phrase: 'keep track of expenses', meaning: 'monitor and record every purchase made', hi: 'खर्चों का हिसाब रखना', es: 'llevar un registro de gastos', fr: 'suivre ses dépenses', de: 'Ausgaben im Blick behalten', pt: 'controlar as despesas', zh: '记录开支', ar: 'تتبع النفقات', ja: '支出を記録する', ru: 'вести учет расходов', note: 'Personal finance habit.', ic: '📝' },
    { phrase: 'live within your means', meaning: 'spend only what you earn without accumulating excessive debt', hi: 'अपनी कमाई के दायरे में जीना', es: 'vivir dentro de tus posibilidades', fr: 'vivre selon ses moyens', de: 'im Rahmen seiner Möglichkeiten leben', pt: 'viver de acordo com suas posses', zh: '量入为出', ar: 'العيش في حدود الإمكانيات', ja: '身の丈に合った生活をする', ru: 'жить по средствам', note: 'Philosophical finance guideline.', ic: '⚖️' }
  ],
  grammar: {
    title: 'First Conditional for Financial Planning & Money Phrasal Verbs',
    concept: 'Using the First Conditional (If + Present Simple, will + base verb) to discuss financial cause-and-effect, along with separable and inseparable money phrasal verbs ("cut down on", "put aside", "pay off").',
    patterns: [
      {
        title: 'First Conditional for Budget Decisions: "If + Present, Will + Verb"',
        structure: 'If + Subject + Present Simple, Subject + will / won\'t + Base Verb',
        rule: 'Use First Conditional to describe real, likely future outcomes resulting from current financial choices.',
        examples: [
          { en: 'If you cook at home more often, you will save fifty dollars every week.', hi: 'यदि आप घर पर अधिक बार खाना बनाते हैं, तो आप हर हफ्ते पचास डॉलर बचाएंगे।', es: 'Si cocinas en casa más a menudo, ahorrarás cincuenta dólares cada semana.' },
          { en: 'If we cut down on unnecessary subscriptions, we will stick to our budget.', hi: 'यदि हम अनावश्यक सदस्यताओं में कटौती करते हैं, तो हम अपने बजट का पालन करेंगे।', es: 'Si reducimos las suscripciones innecesarias, nos ceñiremos a nuestro presupuesto.' }
        ]
      },
      {
        title: 'Money Phrasal Verbs: "cut down on", "put aside", "pay off"',
        structure: 'cut down on + [Category]  |  put [Amount] aside  |  pay off + [Debt]',
        rule: '"cut down on" is three-part and inseparable; "put aside" and "pay off" can take direct objects in between or after the particle.',
        examples: [
          { en: 'I put two hundred dollars aside every payday for emergencies.', hi: 'मैं आपात स्थिति के लिए हर वेतन के दिन दो सौ डॉलर अलग रखता हूँ।', es: 'Aparto doscientos dólares en cada día de pago para emergencias.' },
          { en: 'She paid off her credit card in less than a year.', hi: 'उसने एक साल से भी कम समय में अपने क्रेडिट कार्ड का पूरा भुगतान कर दिया।', es: 'Liquidó su tarjeta de crédito en menos de un año.' }
        ]
      },
      {
        title: 'Giving Financial Advice: "You should / You ought to..."',
        structure: 'You should / ought to + Base Verb',
        rule: 'Offer practical suggestions using "should" or "ought to" followed by bare infinitive.',
        examples: [
          { en: 'You should keep track of daily expenses using a simple app.', hi: 'आपको एक साधारण ऐप का उपयोग करके दैनिक खर्चों का हिसाब रखना चाहिए।', es: 'Deberías llevar un registro de los gastos diarios con una aplicación sencilla.' },
          { en: 'You ought to build an emergency fund before making major investments.', hi: 'आपको बड़े निवेश करने से पहले एक आपातकालीन फंड बनाना चाहिए।', es: 'Deberías crear un fondo de emergencia antes de hacer grandes inversiones.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'If you will save money, you buy a car.',
      cor: 'If you save money, you will buy a car.',
      exp: 'In the if-clause of a First Conditional, use the Present Simple ("save"), not "will save".',
      hi: 'First Conditional के "If" वाले भाग में Present Simple ("save") आता है, "will" मुख्य भाग में आता है।',
      es: 'En la cláusula con "if" usa el presente simple ("save"), no "will".'
    },
    {
      inc: 'I need to cut down my coffee expenses.',
      cor: 'I need to cut down on my coffee expenses.',
      exp: 'The full phrasal verb is "cut down on" (with preposition "on").',
      hi: 'सही phrasal verb "cut down on" है।',
      es: 'El phrasal verb completo es "cut down on".'
    },
    {
      inc: 'He paid out all his credit card debt.',
      cor: 'He paid off all his credit card debt.',
      exp: 'Use "pay off" for eliminating a loan or debt completely.',
      hi: 'कर्ज पूरी तरह चुकाने के लिए "pay off" का प्रयोग करें।',
      es: 'Usa "pay off" para liquidar completamente una deuda.'
    },
    {
      inc: 'I am running out money at the end of the month.',
      cor: 'I am running out of money at the end of the month.',
      exp: 'The phrasal verb requires "of": "run out of money".',
      hi: '"run out of money" में "of" आवश्यक है।',
      es: 'El phrasal verb requiere "of": "run out of money".'
    },
    {
      inc: 'Receipt is pronounced /ri-sipt/.',
      cor: 'Receipt is pronounced /rɪˈsiːt/ with a silent "p".',
      exp: 'Remember that the "p" in "receipt" is silent.',
      hi: '"receipt" में "p" मूक (silent) होता है, इसका उच्चारण "रसीट" होता है।',
      es: 'La "p" en "receipt" es muda; se pronuncia /rɪˈsiːt/.'
    }
  ],
  dialogues: [
    {
      title: 'Reviewing the Monthly Household Budget',
      context: 'Chloe and Daniel review their monthly spending spreadsheet and find areas to save.',
      charA: { name: 'Chloe', av: '👩‍💼', role: 'Partner' },
      charB: { name: 'Daniel', av: '👨‍💼', role: 'Partner' },
      turns: [
        { spk: 'Chloe', text: 'Daniel, I looked over our monthly expenses. If we cut down on takeout meals, we will save over two hundred dollars.', hi: 'डैनियल, मैंने हमारे मासिक खर्चों को देखा। यदि हम बाहर के खाने में कटौती करते हैं, तो हम दो सौ डॉलर से अधिक बचाएंगे।', es: 'Daniel, revisé nuestros gastos mensuales. Si reducimos la comida para llevar, ahorraremos más de doscientos dólares.' },
        { spk: 'Daniel', text: 'That is a great idea. We can put that extra money aside for our vacation emergency fund.', hi: 'यह बहुत अच्छा विचार है। हम उस अतिरिक्त पैसे को अपने अवकाश और आपातकालीन फंड के लिए अलग रख सकते हैं।', es: 'Esa es una gran idea. Podemos apartar ese dinero extra para nuestro fondo de vacaciones.' },
        { spk: 'Chloe', text: 'Also, if we cancel the gym membership we do not use, we will stick to our budget much more easily.', hi: 'इसके अलावा, यदि हम उस जिम सदस्यता को रद्द कर देते हैं जिसका हम उपयोग नहीं करते हैं, तो हम अपने बजट का बहुत आसानी से पालन करेंगे।', es: 'Además, si cancelamos la membresía del gimnasio que no usamos, nos ceñiremos al presupuesto mucho más fácilmente.' },
        { spk: 'Daniel', text: 'Agreed. Living within our means gives us peace of mind and helps us pay off our student loan faster.', hi: 'सहमति है। अपनी कमाई के दायरे में जीने से हमें मानसिक शांति मिलती है और हमारे छात्र ऋण का तेजी से भुगतान करने में मदद मिलती है।', es: 'De acuerdo. Vivir dentro de nuestras posibilidades nos da tranquilidad y nos ayuda a pagar nuestro préstamo estudiantil más rápido.' }
      ]
    },
    {
      title: 'Smart Shopping & Seasonal Discounts',
      context: 'Arjun gives Elena advice on buying home appliances on sale.',
      charA: { name: 'Arjun', av: '👨‍💻', role: 'Friend' },
      charB: { name: 'Elena', av: '👩‍💻', role: 'Friend' },
      turns: [
        { spk: 'Elena', text: 'Arjun, I need a new refrigerator, but the modern models are quite expensive.', hi: 'अर्जुन, मुझे एक नए रेफ्रिजरेटर की आवश्यकता है, लेकिन आधुनिक मॉडल काफी महंगे हैं।', es: 'Arjun, necesito un refrigerador nuevo, pero los modelos modernos son bastante caros.' },
        { spk: 'Arjun', text: 'If you wait until next week\'s holiday sale, you will get a substantial discount.', hi: 'यदि आप अगले सप्ताह की हॉलिडे सेल तक इंतजार करते हैं, तो आपको पर्याप्त छूट मिलेगी।', es: 'Si esperas a la venta festiva de la próxima semana, obtendrás un descuento sustancial.' },
        { spk: 'Elena', text: 'Are energy-efficient appliances really good value for money?', hi: 'क्या ऊर्जा-कुशल उपकरण वास्तव में पैसों का सही मूल्य देते हैं?', es: '¿Los electrodomésticos de bajo consumo realmente valen la pena?' },
        { spk: 'Arjun', text: 'Definitely. If you buy an efficient model, your electricity bills will drop considerably over time.', hi: 'निश्चित रूप से। यदि आप एक कुशल मॉडल खरीदते हैं, तो समय के साथ आपके बिजली के बिलों में काफी कमी आएगी।', es: 'Definitivamente. Si compras un modelo eficiente, tus facturas de electricidad bajarán considerablemente con el tiempo.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_a2_11_158_p01',
      type: 'multiple_choice',
      prompt: 'Complete the First Conditional: "If you _____ your daily expenses, you will understand where your money goes."',
      options: ['track', 'will track', 'tracked', 'tracking'],
      correctAnswer: 'track',
      explanation: 'Use Present Simple ("track") in the if-clause of a First Conditional.'
    },
    {
      id: 'ex_a2_11_158_p02',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the phrasal verb preposition: "We must cut down _____ food delivery orders."',
      correctAnswer: 'on',
      explanation: 'The three-word phrasal verb is "cut down on".'
    },
    {
      id: 'ex_a2_11_158_p03',
      type: 'word_ordering',
      prompt: 'Arrange into a correct First Conditional sentence:',
      words: ['If', 'you', 'save', 'regularly,', 'you', 'will', 'build', 'wealth.'],
      correctAnswer: 'If you save regularly, you will build wealth.',
      explanation: 'If + Subject + Verb, Subject + will + Verb + Object.'
    },
    {
      id: 'ex_a2_11_158_p04',
      type: 'translation',
      prompt: 'Translate into English: "वह हर महीने आपात स्थिति के लिए पैसे अलग रखती है।"',
      targetSentence: 'She puts money aside every month for emergencies.',
      correctAnswer: 'She puts money aside every month for emergencies.',
      explanation: '"puts money aside" translates पैसे अलग रखती है.'
    },
    {
      id: 'ex_a2_11_158_p05',
      type: 'error_correction',
      prompt: 'Correct the conditional verb tense error:',
      errorSentence: 'If we will stick to our budget, we will buy a house next year.',
      correctAnswer: 'If we stick to our budget, we will buy a house next year.',
      explanation: 'Change "will stick" to present simple "stick" in the if-clause.'
    },
    {
      id: 'ex_a2_11_158_p06',
      type: 'multiple_choice',
      prompt: 'What does "pay off a debt" mean?',
      options: [
        'Pay back the entire borrowed sum until nothing is owed',
        'Borrow more money from a friend',
        'Refuse to pay a restaurant bill',
        'Lose your credit card at an ATM'
      ],
      correctAnswer: 'Pay back the entire borrowed sum until nothing is owed',
      explanation: '"pay off" means to settle a debt completely.'
    },
    {
      id: 'ex_a2_11_158_p07',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Always ask for a purchase _____ in case you want to return the item."',
      correctAnswer: 'receipt',
      explanation: 'A "receipt" is the proof of purchase.'
    },
    {
      id: 'ex_a2_11_158_p08',
      type: 'word_ordering',
      prompt: 'Order the words to create financial advice:',
      words: ['You', 'ought', 'to', 'build', 'an', 'emergency', 'fund.'],
      correctAnswer: 'You ought to build an emergency fund.',
      explanation: 'Subject + ought to + Base Verb + Object.'
    },
    {
      id: 'ex_a2_11_158_p09',
      type: 'translation',
      prompt: 'Translate into English: "यदि आप छूट पर खरीदारी करते हैं, तो आप बहुत बचत करेंगे।"',
      targetSentence: 'If you shop on discount, you will save a lot.',
      correctAnswer: 'If you shop on discount, you will save a lot.',
      explanation: 'First conditional structure with present simple in the if-clause.'
    },
    {
      id: 'ex_a2_11_158_p10',
      type: 'error_correction',
      prompt: 'Fix the phrasal verb error:',
      errorSentence: 'We ran out money before the end of the trip.',
      correctAnswer: 'We ran out of money before the end of the trip.',
      explanation: 'Include preposition "of": "ran out of money".'
    },
    {
      id: 'ex_a2_11_158_p11',
      type: 'multiple_choice',
      prompt: 'Which phrase means spending within what you earn without incurring heavy debts?',
      options: [
        'Living within your means',
        'Running out of cash',
        'Overspending on luxury',
        'Taking high-interest loans'
      ],
      correctAnswer: 'Living within your means',
      explanation: 'Living within your means balances income and expenses.'
    },
    {
      id: 'ex_a2_11_158_p12',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Electricity and water are classified as household _____."',
      correctAnswer: 'utilities',
      explanation: '"utilities" includes basic water, power, and heating services.'
    },
    {
      id: 'ex_a2_11_158_p13',
      type: 'word_ordering',
      prompt: 'Arrange the words to form a question about spending habits:',
      words: ['Do', 'you', 'keep', 'track', 'of', 'your', 'monthly', 'expenses?'],
      correctAnswer: 'Do you keep track of your monthly expenses?',
      explanation: 'Do you + keep track of + Object?'
    },
    {
      id: 'ex_a2_11_158_p14',
      type: 'translation',
      prompt: 'Translate into English: "उसने छह महीनों में अपना छात्र ऋण चुका दिया।"',
      targetSentence: 'He paid off his student loan in six months.',
      correctAnswer: 'He paid off his student loan in six months.',
      explanation: '"paid off his student loan" translates अपना छात्र ऋण चुका दिया.'
    },
    {
      id: 'ex_a2_11_158_p15',
      type: 'multiple_choice',
      prompt: 'Choose the most suitable word: "If you pay in twelve monthly _____, there is no extra charge."',
      options: ['installments', 'receipts', 'discounts', 'subsidies'],
      correctAnswer: 'installments',
      explanation: '"Installments" refers to split payments over time.'
    }
  ],
  review: [
    {
      id: 'ex_a2_11_158_r01',
      type: 'multiple_choice',
      prompt: 'Which sentence is grammatically correct?',
      options: [
        'If you stick to your budget, you will reach your savings goal.',
        'If you will stick to your budget, you reach your savings goal.',
        'If you stuck to budget, you will reach savings goal.',
        'If you stick to budget, you reached savings goal.'
      ],
      correctAnswer: 'If you stick to your budget, you will reach your savings goal.',
      explanation: 'First Conditional: If + Present Simple, will + Base Verb.'
    },
    {
      id: 'ex_a2_11_158_r02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "She puts fifty dollars _____ each week into her bank account."',
      correctAnswer: 'aside',
      explanation: 'Phrasal verb: "put aside".'
    },
    {
      id: 'ex_a2_11_158_r03',
      type: 'error_correction',
      prompt: 'Correct the error:',
      errorSentence: 'He need to cut down of restaurant spending.',
      correctAnswer: 'He needs to cut down on restaurant spending.',
      explanation: 'Third-person "needs" and correct particle "on" in "cut down on".'
    },
    {
      id: 'ex_a2_11_158_r04',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      words: ['We', 'managed', 'to', 'pay', 'off', 'our', 'credit', 'card.'],
      correctAnswer: 'We managed to pay off our credit card.',
      explanation: 'Subject + managed to + pay off + Object.'
    },
    {
      id: 'ex_a2_11_158_r05',
      type: 'translation',
      prompt: 'Translate into English: "यदि हम कम खर्च करते हैं, तो हम अधिक बचत करेंगे।"',
      targetSentence: 'If we spend less, we will save more.',
      correctAnswer: 'If we spend less, we will save more.',
      explanation: '"If we spend less, we will save more" is a textbook First Conditional.'
    }
  ],
  assessment: [
    {
      id: 'ex_a2_11_158_a01',
      type: 'multiple_choice',
      prompt: 'Which advice offers the clearest financial plan?\nA: "I want to save money."\nB: "____"',
      options: [
        'If you track your daily expenses and cut down on subscriptions, you will save easily.',
        'If you will track expenses, you are saving money.',
        'You must to run out of money quickly.',
        'Because money is good, you pay out all.'
      ],
      correctAnswer: 'If you track your daily expenses and cut down on subscriptions, you will save easily.',
      explanation: 'Accurate First Conditional and idiomatic financial phrasal verbs.'
    },
    {
      id: 'ex_a2_11_158_a02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Always keep your payment _____ for the guarantee period."',
      correctAnswer: 'receipt',
      explanation: '"receipt" is proof of payment.'
    },
    {
      id: 'ex_a2_11_158_a03',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nAdvisor: "How can I avoid credit card interest?"\nClient: "_____"',
      options: [
        'If you pay off your full balance every month, you will not pay any interest.',
        'If you will pay off balance, interest is zero.',
        'Pay out your card when you run out money.',
        'Do not stick to budget.'
      ],
      correctAnswer: 'If you pay off your full balance every month, you will not pay any interest.',
      explanation: 'Correct conditional construction with "pay off".'
    },
    {
      id: 'ex_a2_11_158_a04',
      type: 'speaking',
      prompt: 'Read aloud with confidence: "If we stick to our monthly budget and put ten percent of our income aside, we will pay off our debts much faster."',
      targetSentence: 'If we stick to our monthly budget and put ten percent of our income aside, we will pay off our debts much faster.',
      correctAnswer: 'If we stick to our monthly budget and put ten percent of our income aside, we will pay off our debts much faster.',
      explanation: 'Maintain steady pacing and clear enunciation of "budget", "income", and "debts".'
    },
    {
      id: 'ex_a2_11_158_a05',
      type: 'translation',
      prompt: 'Translate into English: "अपनी आय के दायरे में रहना वित्तीय सुरक्षा की कुंजी है।"',
      targetSentence: 'Living within your means is the key to financial security.',
      correctAnswer: 'Living within your means is the key to financial security.',
      explanation: '"Living within your means" translates अपनी आय के दायरे में रहना.'
    }
  ]
};

// =========================================================================
// LESSON 159: Health, Fitness Habits, Wellness Routines & Healthy Choices
// =========================================================================
export const LESSON_159_CONFIG: LessonConfigA2 = {
  num: 159,
  title: 'Health, Fitness Habits, Wellness Routines & Healthy Choices',
  icon: '🏃',
  estMin: 25,
  objTitle: 'Modals of Obligation & Recommendation ("ought to", "make sure to", "must") & Health Habits',
  objDesc: 'Discuss physical fitness, nutrition, mental wellness, sleep hygiene, and use modals of recommendation ("ought to", "should", "had better"), and imperative reminders ("make sure to", "avoid + -ing").',
  objHi: 'शारीरिक फिटनेस, पोषण, स्वस्थ दिनचर्या, "ought to", "make sure to" और स्वास्थ्य आदतों पर चर्चा करना सीखें।',
  objEs: 'Salud, hábitos de fitness, bienestar, modales de recomendación ("ought to", "should", "had better") y recordatorios imperativos ("make sure to").',
  canDo: [
    'I can describe my daily fitness routine, sleep habits, and dietary choices.',
    'I can use "ought to", "should", and "had better" to give well-reasoned wellness advice.',
    'I can give clear health reminders using "make sure to" and "avoid + -ing".',
    'I can discuss work-life balance and simple stress-relief techniques.'
  ],
  canDoHi: [
    'मैं अपनी दैनिक फिटनेस दिनचर्या, सोने की आदतों और खानपान के बारे में बता सकता हूँ।',
    'मैं स्वास्थ्य सलाह देने के लिए "ought to", "should" और "had better" का उपयोग कर सकता हूँ।',
    'मैं "make sure to" और "avoid + -ing" का उपयोग करके स्पष्ट स्वास्थ्य सुझाव दे सकता हूँ।',
    'मैं कार्य-जीवन संतुलन और तनाव कम करने की तकनीकों पर चर्चा कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir mi rutina de ejercicios, hábitos de sueño y opciones dietéticas.',
    'Puedo usar "ought to", "should" y "had better" para dar consejos de bienestar.',
    'Puedo dar recordatorios de salud claros usando "make sure to" y "avoid + -ing".',
    'Puedo hablar sobre el equilibrio entre trabajo y vida personal y técnicas de relajación.'
  ],
  vocab: [
    { w: 'wellness', p: '/ˈwelnəs/', m: 'the state of being in good health, especially as an actively pursued goal', hi: 'कल्याण / संपूर्ण स्वास्थ्य / तंदुरुस्ती', es: 'bienestar', fr: 'bien-être', de: 'Wohlbefinden / Wellness', pt: 'bem-estar', zh: '健康 / 身心健康', ar: 'عافية / صحة جيدة', ja: '健康 / ウェルネス', ru: 'хорошее самочувствие / благополучие', ex: 'Our company promotes employee wellness through yoga sessions.', exHi: 'हमारी कंपनी योग सत्रों के माध्यम से कर्मचारी कल्याण को बढ़ावा देती है।', exEs: 'Nuestra empresa promueve el bienestar de los empleados mediante sesiones de yoga.', ic: '🧘' },
    { w: 'nutrition', p: '/njuˈtrɪʃn/', m: 'the process of providing or obtaining the food necessary for health and growth', hi: 'पोषण / आहार', es: 'nutrición', fr: 'nutrition', de: 'Ernährung', pt: 'nutrição', zh: '营养', ar: 'تغذية', ja: '栄養', ru: 'питание / нутрициология', ex: 'Good nutrition is essential for maintaining strong immunity.', exHi: 'मजबूत रोग प्रतिरोधक क्षमता बनाए रखने के लिए अच्छा पोषण आवश्यक है।', exEs: 'Una buena nutrición es esencial para mantener una inmunidad fuerte.', ic: '🥗' },
    { w: 'hydration', p: '/haɪˈdreɪʃn/', m: 'the process of causing something to absorb water; drinking enough fluids', hi: 'जलयोजन / शरीर में पानी की पर्याप्त मात्रा', es: 'hidratación', fr: 'hydratation', de: 'Flüssigkeitszufuhr / Hydratation', pt: 'hidratação', zh: '水合 / 补充水分', ar: 'ترطيب / شرب الماء', ja: '水分補給', ru: 'гидратация / водный баланс', ex: 'Adequate hydration improves concentration and physical endurance.', exHi: 'पर्याप्त जलयोजन एकाग्रता और शारीरिक सहनशक्ति में सुधार करता है।', exEs: 'Una hidratación adecuada mejora la concentración y la resistencia física.', ic: '💧' },
    { w: 'workout', p: '/ˈwɜːkaʊt/', m: 'a session of vigorous physical exercise or training', hi: 'व्यायाम / कसरत', es: 'entrenamiento / sesión de ejercicio', fr: 'séance d\'entraînement', de: 'Training / Workout', pt: 'treino / exercício', zh: '锻炼 / 健身', ar: 'تمرين رياضي', ja: '筋トレ / ワークアウト', ru: 'тренировка / комплекс упражнений', ex: 'I do a thirty-minute cardiovascular workout every morning before breakfast.', exHi: 'मैं हर सुबह नाश्ते से पहले तीस मिनट का कार्डियोवैस्कुलर व्यायाम करता हूँ।', exEs: 'Hago un entrenamiento cardiovascular de treinta minutos cada mañana antes del desayuno.', ic: '🏋️' },
    { w: 'endurance', p: '/ɪnˈdjʊərəns/', m: 'the ability to endure an unpleasant or difficult process without giving way', hi: 'सहनशक्ति / स्टेमिना', es: 'resistencia / aguante', fr: 'endurance', de: 'Ausdauer', pt: 'resistência', zh: '耐力', ar: 'قدرة التحمل', ja: '持久力 / 耐久力', ru: 'выносливость', ex: 'Long-distance running builds incredible stamina and cardiac endurance.', exHi: 'लंबी दूरी की दौड़ अविश्वसनीय सहनशक्ति और हृदय की क्षमता का निर्माण करती है।', exEs: 'Correr largas distancias desarrolla una resistencia y aguante cardíaco increíbles.', ic: '🏃' },
    { w: 'sedentary', p: '/ˈsedntri/', m: 'tending to spend much time seated; somewhat inactive', hi: 'गतिहीन / बैठे रहने वाला', es: 'sedentario', fr: 'sédentaire', de: 'sitzend / bewegungsarm', pt: 'sedentário', zh: '久坐的', ar: 'قليل الحركة / خامل', ja: '座りがちの', ru: 'сидячий / малоподвижный', ex: 'Desk jobs often lead to a sedentary lifestyle if you do not exercise.', exHi: 'यदि आप व्यायाम नहीं करते हैं तो डेस्क की नौकरियां अक्सर गतिहीन जीवन शैली की ओर ले जाती हैं।', exEs: 'Los trabajos de oficina a menudo conducen a un estilo de vida sedentario si no haces ejercicio.', ic: '🪑' },
    { w: 'strengthen', p: '/ˈstreŋθn/', m: 'make or become stronger', hi: 'मजबूत करना / सुदृढ़ करना', es: 'fortalecer / reforzar', fr: 'renforcer', de: 'stärken / kräftigen', pt: 'fortalecer', zh: '加强 / 强健', ar: 'يقوي / يعزز', ja: '強化する / 鍛える', ru: 'укреплять / усиливать', ex: 'Weight training helps strengthen your core and back muscles.', exHi: 'वेट ट्रेनिंग आपके कोर और पीठ की मांसपेशियों को मजबूत करने में मदद करती है।', exEs: 'El entrenamiento con pesas ayuda a fortalecer los músculos del tronco y la espalda.', ic: '💪' },
    { w: 'portion', p: '/ˈpɔːʃn/', m: 'an amount of food suitable for or served to one person', hi: 'खुराक / परोसा गया हिस्सा', es: 'porción / ración', fr: 'portion', de: 'Portion', pt: 'porção', zh: '一份（食物）', ar: 'حصة / وجبة', ja: '一人前 / 分量', ru: 'порция', ex: 'Controlling your meal portions is effective for maintaining a healthy weight.', exHi: 'भोजन के हिस्से को नियंत्रित करना स्वस्थ वजन बनाए रखने के लिए प्रभावी है।', exEs: 'Controlar las porciones de comida es eficaz para mantener un peso saludable.', ic: '🍽️' },
    { w: 'posture', p: '/ˈpɒstʃə/', m: 'the position in which someone holds their body when standing or sitting', hi: 'मुद्रा / बैठने-खड़े होने का तरीका', es: 'postura corporal', fr: 'posture', de: 'Körperhaltung', pt: 'postura', zh: '姿势 / 体态', ar: 'وضعية الجسد', ja: '姿勢', ru: 'осанка / поза', ex: 'Good posture prevents chronic neck and shoulder stiffness.', exHi: 'अच्छी मुद्रा गर्दन और कंधों के पुराने जकड़न को रोकती है।', exEs: 'Una buena postura previene la rigidez crónica de cuello y hombros.', ic: '🧘' },
    { w: 'stamina', p: '/ˈstæmɪnə/', m: 'the ability to sustain prolonged physical or mental effort', hi: 'सहनशक्ति / ऊर्जा', es: 'vitalidad / aguante físico', fr: 'endurance / souffle', de: 'Durchhaltevermögen / Kondition', pt: 'estamina / vigor', zh: '精力 / 耐力', ar: 'طاقة التحمل', ja: 'スタミナ', ru: 'выносливость / стойкость', ex: 'Cycling uphill requires a great deal of leg stamina.', exHi: 'चढ़ाई पर साइकिल चलाने के लिए पैरों की काफी सहनशक्ति की आवश्यकता होती है।', exEs: 'Andar en bicicleta cuesta arriba requiere una gran resistencia en las piernas.', ic: '🚴' },
    { w: 'meditation', p: '/ˌmedɪˈteɪʃn/', m: 'the practice of thinking deeply in silence to promote calm and focus', hi: 'ध्यान / मेडिटेशन', es: 'meditación', fr: 'méditation', de: 'Meditation', pt: 'meditação', zh: '冥想', ar: 'تأمل', ja: '瞑想', ru: 'медитация', ex: 'Ten minutes of mindful meditation each morning calms an anxious mind.', exHi: 'हर सुबह दस मिनट का सचेत ध्यान एक चिंतित मन को शांत करता है।', exEs: 'Diez minutos de meditación consciente cada mañana calman una mente ansiosa.', ic: '🧠' },
    { w: 'digest', p: '/daɪˈdʒest/', m: 'break down food in the alimentary canal into substances that can be absorbed', hi: 'पचाना / पाचन करना', es: 'digerir', fr: 'digérer', de: 'verdauen', pt: 'digerir', zh: '消化', ar: 'يهضم', ja: '消化する', ru: 'переваривать', ex: 'Eating a heavy meal right before sleeping makes it harder to digest.', exHi: 'सोने से ठीक पहले भारी भोजन करने से इसे पचाना कठिन हो जाता है।', exEs: 'Comer una comida pesada justo antes de dormir hace que sea más difícil de digerir.', ic: '🍲' },
    { w: 'organic', p: '/ɔːˈɡænɪk/', m: 'produced or involving production without the use of chemical fertilizers or pesticides', hi: 'जैविक / प्राकृतिक', es: 'orgánico / ecológico', fr: 'biologique / bio', de: 'biologisch / Bio-', pt: 'orgânico', zh: '有机的', ar: 'عضوي', ja: '有機の / オーガニック', ru: 'органический / натуральный', ex: 'We buy fresh organic vegetables from the local farmers market.', exHi: 'हम स्थानीय किसान बाजार से ताजी जैविक सब्जियां खरीदते हैं।', exEs: 'Compramos verduras orgánicas frescas en el mercado de agricultores local.', ic: '🥦' },
    { w: 'fatigue', p: '/fəˈtiːɡ/', m: 'extreme tiredness resulting from mental or physical exertion or illness', hi: 'थकान / शिथिलता', es: 'fatiga / cansancio extremo', fr: 'fatigue', de: 'Müdigkeit / Erschöpfung', pt: 'fadiga / cansaço', zh: '疲乏 / 劳累', ar: 'إرهاق / إعياء', ja: '疲労', ru: 'усталость / утомление', ex: 'Getting eight hours of restful sleep combats daytime mental fatigue.', exHi: 'आठ घंटे की आरामदायक नींद दिन के समय की मानसिक थकान से लड़ती है।', exEs: 'Dormir ocho horas de sueño reparador combate la fatiga mental diurna.', ic: '😴' },
    { w: 'consistency', p: '/kənˈsɪstənsi/', m: 'conformity in the application of something; regular steady practice', hi: 'निरंतरता / संगति', es: 'constancia / regularidad', fr: 'régularité / constance', de: 'Beständigkeit / Konsequenz', pt: 'consistência / regularidade', zh: '坚持 / 规律性', ar: 'انتظام / ثبات', ja: '一貫性 / 継続', ru: 'постоянство / регулярность', ex: 'Consistency in your exercise routine is far more important than intensity.', exHi: 'आपकी व्यायाम दिनचर्या में निरंतरता तीव्रता से कहीं अधिक महत्वपूर्ण है।', exEs: 'La constancia en tu rutina de ejercicios es mucho más importante que la intensidad.', ic: '🔁' },
    { w: 'balanced', p: '/ˈbælənst/', m: 'taking into account all the elements of a healthy lifestyle or diet', hi: 'संतुलित', es: 'equilibrado / balanceado', fr: 'équilibré', de: 'ausgewogen', pt: 'equilibrado', zh: '均衡的', ar: 'متوازن', ja: 'バランスの取れた', ru: 'сбалансированный', ex: 'A balanced diet includes proteins, fiber, vitamins, and healthy fats.', exHi: 'एक संतुलित आहार में प्रोटीन, फाइबर, विटामिन और स्वस्थ वसा शामिल हैं।', exEs: 'Una dieta equilibrada incluye proteínas, fibra, vitaminas y grasas saludables.', ic: '🥑' },
    { w: 'stretch', p: '/stretʃ/', m: 'straighten or extend one\'s body or a part of one\'s body to full length', hi: 'खिंचाव करना / स्ट्रेचिंग करना', es: 'estirarse / estirar los músculos', fr: 's\'étirer / étirement', de: 'dehnen / strecken', pt: 'alongar / alongamento', zh: '拉伸 / 伸展', ar: 'يتمدد / يمارس الإطالة', ja: 'ストレッチする / 伸ばす', ru: 'растягиваться / делать растяжку', ex: 'Always stretch your calves and hamstrings before and after a run.', exHi: 'दौड़ने से पहले और बाद में हमेशा अपनी पिंडलियों और हैमस्ट्रिंग में खिंचाव करें।', exEs: 'Estira siempre las pantorrillas y los isquiotibiales antes y después de correr.', ic: '🧘‍♀️' },
    { w: 'vitality', p: '/vaɪˈtæləti/', m: 'the state of being strong and active; energy', hi: 'ऊर्जा / जीवन शक्ति', es: 'vitalidad / vigor', fr: 'vitalité', de: 'Lebenskraft / Vitalität', pt: 'vitalidade', zh: '活力 / 生命力', ar: 'حيوية / نشاط', ja: '活力 / バイタリティ', ru: 'жизненная сила / бодрость', ex: 'Drinking plenty of water and walking outdoors boosts natural vitality.', exHi: 'भरपूर पानी पीने और बाहर टहलने से प्राकृतिक जीवन शक्ति बढ़ती है।', exEs: 'Beber mucha agua y caminar al aire libre aumenta la vitalidad natural.', ic: '⚡' },
    { w: 'moderation', p: '/ˌmɒdəˈreɪʃn/', m: 'the avoidance of excess or extremes, especially in behavior or diet', hi: 'संयम / संतुलन / सीमित मात्रा', es: 'moderación', fr: 'modération', de: 'Mäßigung', pt: 'moderação', zh: '适度 / 节制', ar: 'اعتدال', ja: '適度 / 節度', ru: 'умеренность', ex: 'You can enjoy sweets occasionally if you consume them in moderation.', exHi: 'आप कभी-कभार मिठाइयों का आनंद ले सकते हैं यदि आप उनका सेवन संयम से करते हैं।', exEs: 'Puedes disfrutar de los dulces de vez en cuando si los consumes con moderación.', ic: '⚖️' },
    { w: 'routine', p: '/ruːˈtiːn/', m: 'a sequence of actions regularly followed', hi: 'दिनचर्या / नियमित नियम', es: 'rutina', fr: 'routine', de: 'Routine / Tagesablauf', pt: 'rotina', zh: '常规 / 例行公事', ar: 'روتين يومي', ja: '日課 / ルーティン', ru: 'рутина / распорядок дня', ex: 'Establishing a peaceful evening routine prepares the body for deep sleep.', exHi: 'एक शांत शाम की दिनचर्या स्थापित करने से शरीर गहरी नींद के लिए तैयार होता है।', exEs: 'Establecer una rutina nocturna tranquila prepara el cuerpo para un sueño profundo.', ic: '🌙' }
  ],
  chunks: [
    { phrase: 'ought to', meaning: 'modal expressing strong moral or practical recommendation', hi: 'चाहिए (सलाह)', es: 'debería / tendría que', fr: 'devrait', de: 'sollte / müsste', pt: 'deveria', zh: '应该', ar: 'ينبغي أن', ja: '〜すべきである', ru: 'следовало бы', note: 'Followed by base verb: "You ought to drink more water."', ic: '💡' },
    { phrase: 'make sure to', meaning: 'imperative phrase emphasizing an essential instruction or reminder', hi: 'यह सुनिश्चित करें कि... / ध्यान रखें कि...', es: 'asegúrate de', fr: 'assure-toi de', de: 'achte darauf, dass', pt: 'certifique-se de', zh: '务必 / 确保', ar: 'تأكد من أن', ja: '必ず〜するようにする', ru: 'обязательно / убедись, что', note: 'Used with base verb: "Make sure to stretch before running."', ic: '✅' },
    { phrase: 'cut back on', meaning: 'reduce intake or consumption of unhealthy foods or habits', hi: 'में कमी करना', es: 'reducir el consumo de', fr: 'réduire sa consommation de', de: 'einschränken / drosseln', pt: 'reduzir o consumo de', zh: '减少摄入', ar: 'التقليل من استهلاك', ja: '（摂取量を）控える', ru: 'сократить потребление', note: 'Phrasal verb: "You should cut back on refined sugar."', ic: '📉' },
    { phrase: 'keep fit', meaning: 'maintain physical strength and health through regular exercise', hi: 'तंदुरुस्त रहना / फिट रहना', es: 'mantenerse en forma', fr: 'garder la forme', de: 'sich fit halten', pt: 'manter a forma', zh: '保持健康体魄', ar: 'الحفاظ على اللياقة', ja: '健康を維持する', ru: 'поддерживать форму', note: 'Idiom: "Swimming is a great way to keep fit."', ic: '🏊' },
    { phrase: 'had better', meaning: 'strong advice indicating a negative consequence if ignored', hi: 'बेहतर होगा कि...', es: 'sería mejor que / más vale que', fr: 'ferait mieux de', de: 'sollte lieber', pt: 'é melhor que', zh: '最好还是...', ar: 'من الأفضل أن', ja: '〜したほうがいい', ru: 'лучше бы', note: 'Followed by base verb: "You had better rest your sprained ankle."', ic: '⚠️' },
    { phrase: 'avoid + -ing', meaning: 'refrain from doing a specific harmful habit', hi: 'करने से बचना', es: 'evitar hacer algo', fr: 'éviter de faire', de: 'vermeiden zu...', pt: 'evitar fazer', zh: '避免做...', ar: 'تجنب فعل...', ja: '〜するのを避ける', ru: 'избегать делать что-то', note: 'Gerund pattern: "Avoid looking at screens before bedtime."', ic: '🚫' },
    { phrase: 'work-life balance', meaning: 'the division of time between work and leisure activities', hi: 'कार्य और व्यक्तिगत जीवन का संतुलन', es: 'equilibrio entre vida y trabajo', fr: 'équilibre vie pro-vie perso', de: 'Work-Life-Balance', pt: 'equilíbrio trabalho-vida', zh: '工作与生活的平衡', ar: 'التوازن بين العمل والحياة', ja: 'ワークライフバランス', ru: 'баланс между работой и личной жизнью', note: 'Modern wellness concept.', ic: '⚖️' },
    { phrase: 'in moderation', meaning: 'within reasonable limits; not to excess', hi: 'संयम में / सीमित मात्रा में', es: 'con moderación', fr: 'avec modération', de: 'in Maßen', pt: 'com moderação', zh: '适度地', ar: 'باعتدال', ja: '適度に / ほどほどに', ru: 'в умеренных количествах', note: 'Dietary guideline phrase: "Consume coffee in moderation."', ic: '☕' }
  ],
  grammar: {
    title: 'Modals of Advice ("Ought To", "Had Better") & Health Imperatives',
    concept: 'Using "ought to + base verb", "had better + base verb" (for urgent advice with consequences), and imperative structures ("Make sure to...", "Avoid + gerund") to guide healthy lifestyles.',
    patterns: [
      {
        title: 'Giving Wellness Advice: "Ought to" vs "Should"',
        structure: 'Subject + ought to + Base Verb  |  Subject + should + Base Verb',
        rule: '"Ought to" carries the same advisory meaning as "should", but requires the particle "to".',
        examples: [
          { en: 'You ought to take a five-minute walking break every hour.', hi: 'आपको हर घंटे पांच मिनट का टहलने का ब्रेक लेना चाहिए।', es: 'Deberías tomar un descanso de cinco minutos para caminar cada hora.' },
          { en: 'We should include more fresh leafy greens in our daily meals.', hi: 'हमें अपने दैनिक भोजन में अधिक ताजी पत्तेदार सब्जियां शामिल करनी चाहिए।', es: 'Deberíamos incluir más verduras de hoja verde en nuestras comidas diarias.' }
        ]
      },
      {
        title: 'Strong Warning / Urgent Advice: "Had better + Base Verb"',
        structure: 'Subject + had better (\'d better) + Base Verb (negative: had better not)',
        rule: 'Use "had better" when there is a risk of a negative outcome if the advice is not followed.',
        examples: [
          { en: 'You had better drink water now, or you will get dehydrated.', hi: 'बेहतर होगा कि आप अभी पानी पी लें, नहीं तो आपको निर्जलीकरण (डिहाइड्रेशन) हो जाएगा।', es: 'Más vale que bebas agua ahora, o te deshidratarás.' },
          { en: 'You had better not skip breakfast before the half-marathon.', hi: 'हाफ मैराथन से पहले बेहतर होगा कि आप नाश्ता न छोड़ें।', es: 'Más vale que no te saltes el desayuno antes del medio maratón.' }
        ]
      },
      {
        title: 'Clear Imperative Health Reminders: "Make sure to..." & "Avoid + Gerund"',
        structure: 'Make sure to + Base Verb  |  Avoid + Verb-ing',
        rule: 'Use "Make sure to" for positive healthy habits and "Avoid" followed by a gerund for harmful actions.',
        examples: [
          { en: 'Make sure to get at least seven hours of uninterrupted sleep.', hi: 'कम से कम सात घंटे की निर्बाध नींद लेना सुनिश्चित करें।', es: 'Asegúrate de dormir al menos siete horas de sueño ininterrumpido.' },
          { en: 'Avoid consuming caffeinated drinks late in the evening.', hi: 'देर शाम को कैफीनयुक्त पेय पदार्थों का सेवन करने से बचें।', es: 'Evita consumir bebidas con cafeína a última hora de la tarde.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'You ought drink more water during summer.',
      cor: 'You ought to drink more water during summer.',
      exp: '"Ought" must be followed by "to": "You ought to drink...".',
      hi: '"Ought" के बाद हमेशा "to" आता है ("ought to drink")।',
      es: '"Ought" siempre debe ir seguido de "to": "ought to drink".'
    },
    {
      inc: 'You had better to rest your knee.',
      cor: 'You had better rest your knee.',
      exp: '"Had better" is followed by the bare infinitive WITHOUT "to".',
      hi: '"Had better" के बाद "to" न लगाएं; सीधे base verb का प्रयोग करें।',
      es: '"Had better" va seguido del infinitivo sin "to".'
    },
    {
      inc: 'Avoid to eat fast food every night.',
      cor: 'Avoid eating fast food every night.',
      exp: 'The verb "avoid" requires a gerund (-ing form), not a "to-infinitive".',
      hi: '"avoid" के बाद क्रिया में "-ing" (gerund) आता है: "avoid eating"।',
      es: 'El verbo "avoid" requiere gerundio (-ing): "avoid eating".'
    },
    {
      inc: 'Make sure stretch your legs after the walk.',
      cor: 'Make sure to stretch your legs after the walk.',
      exp: 'The phrase is "Make sure to" + base verb.',
      hi: 'सही वाक्यांश "Make sure to stretch" है।',
      es: 'La frase es "Make sure to" + verbo base.'
    },
    {
      inc: 'He cut back in sugar last month.',
      cor: 'He cut back on sugar last month.',
      exp: 'The correct preposition is "on": "cut back on".',
      hi: 'सही phrasal verb "cut back on" है, "in" नहीं।',
      es: 'La preposición correcta es "on": "cut back on".'
    }
  ],
  dialogues: [
    {
      title: 'Improving Daily Wellness & Ergonomics',
      context: 'Dr. Ross gives Maya practical tips for avoiding back fatigue at her computer job.',
      charA: { name: 'Dr. Ross', av: '👨‍⚕️', role: 'Physical Therapist' },
      charB: { name: 'Maya', av: '👩‍💻', role: 'Software Engineer' },
      turns: [
        { spk: 'Maya', text: 'Dr. Ross, my back and shoulders feel exhausted after sitting at my desk all day.', hi: 'डॉ. रॉस, पूरे दिन अपनी डेस्क पर बैठने के बाद मेरी पीठ और कंधे बहुत थक जाते हैं।', es: 'Dr. Ross, mi espalda y hombros se sienten agotados después de estar sentada en mi escritorio todo el día.' },
        { spk: 'Dr. Ross', text: 'You ought to adjust your chair height and maintain good posture throughout the day.', hi: 'आपको अपनी कुर्सी की ऊंचाई को समायोजित करना चाहिए और दिन भर अच्छी मुद्रा बनाए रखनी चाहिए।', es: 'Deberías ajustar la altura de tu silla y mantener una buena postura durante todo el día.' },
        { spk: 'Maya', text: 'What else can I do during work hours to reduce muscle fatigue?', hi: 'मांसपेशियों की थकान को कम करने के लिए मैं काम के घंटों के दौरान और क्या कर सकती हूँ?', es: '¿Qué más puedo hacer durante las horas de trabajo para reducir la fatiga muscular?' },
        { spk: 'Dr. Ross', text: 'Make sure to take short standing breaks every hour, and you had better stretch your hamstrings regularly.', hi: 'हर घंटे खड़े होने के छोटे ब्रेक लेना सुनिश्चित करें, और बेहतर होगा कि आप अपनी हैमस्ट्रिंग को नियमित रूप से स्ट्रेच करें।', es: 'Asegúrate de tomar breves descansos de pie cada hora, y más vale que estires tus isquiotibiales con regularidad.' }
      ]
    },
    {
      title: 'Adopting a Balanced Healthy Diet',
      context: 'Victor and Lucas discuss meal planning and reducing sugar intake.',
      charA: { name: 'Victor', av: '👨', role: 'Fitness Coach' },
      charB: { name: 'Lucas', av: '👨', role: 'Client' },
      turns: [
        { spk: 'Lucas', text: 'Victor, I want to increase my energy levels during afternoon training sessions.', hi: 'विक्टर, मैं दोपहर के प्रशिक्षण सत्रों के दौरान अपने ऊर्जा स्तर को बढ़ाना चाहता हूँ।', es: 'Victor, quiero aumentar mis niveles de energía durante las sesiones de entrenamiento de la tarde.' },
        { spk: 'Victor', text: 'First, you ought to drink at least two liters of water daily for proper hydration.', hi: 'सबसे पहले, आपको उचित जलयोजन के लिए प्रतिदिन कम से कम दो लीटर पानी पीना चाहिए।', es: 'Primero, deberías beber al menos dos litros de agua al día para una hidratación adecuada.' },
        { spk: 'Lucas', text: 'Should I eliminate all carbohydrates from my diet completely?', hi: 'क्या मुझे अपने आहार से सभी कार्बोहाइड्रेट पूरी तरह से हटा देने चाहिए?', es: '¿Debería eliminar todos los carbohidratos de mi dieta por completo?' },
        { spk: 'Victor', text: 'No, a balanced diet is better. Just cut back on sugary snacks and avoid drinking sodas before bedtime.', hi: 'नहीं, संतुलित आहार बेहतर है। बस मीठे स्नैक्स में कटौती करें और सोने से पहले सोडा पीने से बचें।', es: 'No, una dieta equilibrada es mejor. Solo reduce los refrigerios azucarados y evita tomar refrescos antes de acostarte.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_a2_11_159_p01',
      type: 'multiple_choice',
      prompt: 'Which modal particle is required: "You ought _____ exercise at least three times a week."',
      options: ['to', 'for', 'at', 'with'],
      correctAnswer: 'to',
      explanation: '"Ought" must be followed by "to".'
    },
    {
      id: 'ex_a2_11_159_p02',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the correct preposition: "You should cut back _____ ultra-processed foods."',
      correctAnswer: 'on',
      explanation: 'The idiom is "cut back on".'
    },
    {
      id: 'ex_a2_11_159_p03',
      type: 'word_ordering',
      prompt: 'Arrange into an urgent recommendation:',
      words: ['You', 'had', 'better', 'drink', 'water', 'after', 'running.'],
      correctAnswer: 'You had better drink water after running.',
      explanation: 'Subject + had better + Base Verb + Object + Time.'
    },
    {
      id: 'ex_a2_11_159_p04',
      type: 'translation',
      prompt: 'Translate into English: "व्यायाम करने से पहले स्ट्रेच करना सुनिश्चित करें।"',
      targetSentence: 'Make sure to stretch before exercising.',
      correctAnswer: 'Make sure to stretch before exercising.',
      explanation: '"Make sure to stretch" is an imperative reminder.'
    },
    {
      id: 'ex_a2_11_159_p05',
      type: 'error_correction',
      prompt: 'Correct the error in verb pattern:',
      errorSentence: 'Avoid to eat heavy meals right before sleeping.',
      correctAnswer: 'Avoid eating heavy meals right before sleeping.',
      explanation: 'Use the gerund "eating" after "avoid".'
    },
    {
      id: 'ex_a2_11_159_p06',
      type: 'multiple_choice',
      prompt: 'What does "had better" signify in advice?',
      options: [
        'Strong advice warning of a possible negative consequence if ignored',
        'A casual suggestion about an optional hobby',
        'An event that happened in the distant past',
        'A polite invitation to a celebration'
      ],
      correctAnswer: 'Strong advice warning of a possible negative consequence if ignored',
      explanation: '"Had better" implies danger or negative results if neglected.'
    },
    {
      id: 'ex_a2_11_159_p07',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Maintaining proper _____ prevents back pain when working at a computer."',
      correctAnswer: 'posture',
      explanation: '"posture" is the physical alignment of the body.'
    },
    {
      id: 'ex_a2_11_159_p08',
      type: 'word_ordering',
      prompt: 'Order the words to form a health guideline:',
      words: ['Avoid', 'checking', 'work', 'emails', 'late', 'at', 'night.'],
      correctAnswer: 'Avoid checking work emails late at night.',
      explanation: 'Avoid + Gerund (checking) + Object + Time.'
    },
    {
      id: 'ex_a2_11_159_p09',
      type: 'translation',
      prompt: 'Translate into English: "आपको रोज़ाना पर्याप्त पानी पीना चाहिए।"',
      targetSentence: 'You ought to drink enough water daily.',
      correctAnswer: 'You ought to drink enough water daily.',
      explanation: '"You ought to drink enough water daily" expresses healthy advice.'
    },
    {
      id: 'ex_a2_11_159_p10',
      type: 'error_correction',
      prompt: 'Fix the modal error:',
      errorSentence: 'You had better to see a doctor for that chronic cough.',
      correctAnswer: 'You had better see a doctor for that chronic cough.',
      explanation: 'Remove "to" after "had better".'
    },
    {
      id: 'ex_a2_11_159_p11',
      type: 'multiple_choice',
      prompt: 'Which phrase means consuming food within balanced, healthy limits?',
      options: [
        'In moderation',
        'In starvation',
        'In excess',
        'In dehydration'
      ],
      correctAnswer: 'In moderation',
      explanation: '"In moderation" means without going to extremes.'
    },
    {
      id: 'ex_a2_11_159_p12',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Regular cardiovascular workouts increase physical _____."',
      correctAnswer: 'endurance',
      explanation: '"endurance" or "stamina" is the ability to sustain effort.'
    },
    {
      id: 'ex_a2_11_159_p13',
      type: 'word_ordering',
      prompt: 'Arrange into an imperative reminder:',
      words: ['Make', 'sure', 'to', 'get', 'eight', 'hours', 'of', 'sleep.'],
      correctAnswer: 'Make sure to get eight hours of sleep.',
      explanation: 'Make sure to + Base Verb + Object.'
    },
    {
      id: 'ex_a2_11_159_p14',
      type: 'translation',
      prompt: 'Translate into English: "तैरना तंदुरुस्त रहने का एक शानदार तरीका है।"',
      targetSentence: 'Swimming is a great way to keep fit.',
      correctAnswer: 'Swimming is a great way to keep fit.',
      explanation: '"keep fit" translates तंदुरुस्त रहना.'
    },
    {
      id: 'ex_a2_11_159_p15',
      type: 'multiple_choice',
      prompt: 'Choose the most suitable word: "Sitting for ten hours a day represents a _____ lifestyle."',
      options: ['sedentary', 'hydrated', 'frugal', 'superior'],
      correctAnswer: 'sedentary',
      explanation: 'A "sedentary" lifestyle involves a lot of sitting and little physical activity.'
    }
  ],
  review: [
    {
      id: 'ex_a2_11_159_r01',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly provides advice?',
      options: [
        'You ought to take a short walk after lunch.',
        'You ought take a short walk after lunch.',
        'You had better to walk after lunch.',
        'Avoid to walk after lunch.'
      ],
      correctAnswer: 'You ought to take a short walk after lunch.',
      explanation: '"ought to + base verb" is correct.'
    },
    {
      id: 'ex_a2_11_159_r02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Make sure _____ drink plenty of water during workouts."',
      correctAnswer: 'to',
      explanation: 'The phrase is "Make sure to".'
    },
    {
      id: 'ex_a2_11_159_r03',
      type: 'error_correction',
      prompt: 'Correct the error:',
      errorSentence: 'Avoid to sit in one position for hours.',
      correctAnswer: 'Avoid sitting in one position for hours.',
      explanation: 'Use gerund "sitting" after "avoid".'
    },
    {
      id: 'ex_a2_11_159_r04',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      words: ['You', 'had', 'better', 'not', 'skip', 'your', 'meals.'],
      correctAnswer: 'You had better not skip your meals.',
      explanation: 'Subject + had better not + Base Verb + Object.'
    },
    {
      id: 'ex_a2_11_159_r05',
      type: 'translation',
      prompt: 'Translate into English: "चीनी का सेवन कम करने से आपका स्वास्थ्य सुधरेगा।"',
      targetSentence: 'Cutting back on sugar will improve your health.',
      correctAnswer: 'Cutting back on sugar will improve your health.',
      explanation: 'Gerund phrase subject + will + base verb.'
    }
  ],
  assessment: [
    {
      id: 'ex_a2_11_159_a01',
      type: 'multiple_choice',
      prompt: 'Which advice is grammatically accurate and most constructive for someone feeling fatigued?\nA: "I feel exhausted every afternoon."\nB: "____"',
      options: [
        'You ought to improve your sleep routine and make sure to stay hydrated throughout the day.',
        'You ought improve sleep and avoid to drink water.',
        'You had better to sleep during work meetings.',
        'Because of fatigue, do not eat food.'
      ],
      correctAnswer: 'You ought to improve your sleep routine and make sure to stay hydrated throughout the day.',
      explanation: 'Accurate usage of "ought to", "make sure to", and wellness vocabulary.'
    },
    {
      id: 'ex_a2_11_159_a02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "You had better _____ your warm-up exercises before lifting weights."',
      correctAnswer: 'do',
      explanation: '"had better + base verb (do)".'
    },
    {
      id: 'ex_a2_11_159_a03',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nTrainer: "How can I avoid knee injuries while jogging?"\nAthlete: "_____"',
      options: [
        'Make sure to wear supportive shoes and avoid running on hard concrete.',
        'You had better to run barefoot on rocks.',
        'Avoid to stretch before jogging.',
        'Ought run faster every day.'
      ],
      correctAnswer: 'Make sure to wear supportive shoes and avoid running on hard concrete.',
      explanation: 'Uses "Make sure to" and "avoid + -ing" correctly.'
    },
    {
      id: 'ex_a2_11_159_a04',
      type: 'speaking',
      prompt: 'Read aloud clearly with natural expression: "To maintain long-term wellness, you ought to eat balanced meals, stay physically active, and make sure to get adequate restorative sleep."',
      targetSentence: 'To maintain long-term wellness, you ought to eat balanced meals, stay physically active, and make sure to get adequate restorative sleep.',
      correctAnswer: 'To maintain long-term wellness, you ought to eat balanced meals, stay physically active, and make sure to get adequate restorative sleep.',
      explanation: 'Demonstrate fluent phrasing, correct pausing, and accurate pronunciation of "restorative" and "wellness".'
    },
    {
      id: 'ex_a2_11_159_a05',
      type: 'translation',
      prompt: 'Translate into English: "आपको देर रात कैफीन पीने से बचना चाहिए।"',
      targetSentence: 'You should avoid drinking caffeine late at night.',
      correctAnswer: 'You should avoid drinking caffeine late at night.',
      explanation: '"avoid drinking caffeine late at night" uses the gerund after avoid.'
    }
  ]
};
