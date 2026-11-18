import { DetailedLessonData } from '../../types';

export const LESSON_A1_2_19_DATA: DetailedLessonData = {
  id: 'lesson_a1_2_19',
  unitId: 'unit_a1_2',
  title: 'Transportation, Commuting & Travel Methods',
  cefr: 'A1',
  icon: '🚆',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Transportation Methods, Commuting and Prepositions of Transit',
    description: 'Master transport prepositions (by bus, by train, on foot, in a car) and movement verbs (take, catch, ride, drive, walk). Learn how to ask and explain commuting methods, buy public transit tickets, navigate platforms and stations, and talk about travel delays in realistic adult everyday contexts.',
    descriptionsByLang: {
      hi: 'परिवहन के साधनों, प्रीपोजिशन्स (by bus, by train, on foot, in a car) और क्रियाओं (take, catch, ride, drive, walk) का उपयोग करके यात्रा और ऑफिस आने-जाने के तरीकों के बारे में बात करना सीखें। टिकट खरीदने और स्टेशन नेविगेशन का अभ्यास करें।',
      es: 'Aprende a hablar de medios de transporte y traslados usando preposiciones (by bus, on foot, in a car) y verbos de movimiento (take, catch, drive, walk). Practica comprar billetes y consultar horarios.',
      fr: 'Apprenez à parler des moyens de transport et des déplacements quotidiens avec les prépositions appropriées.',
      de: 'Lernen Sie, über Verkehrsmittel und das Pendeln mit den passenden Präpositionen zu sprechen.',
      pt: 'Aprenda a falar sobre meios de transporte e deslocamentos diários usando as preposições corretas.',
      zh: '掌握交通出行介词（by bus, on foot, in a car）及移动动词（take, catch, ride, drive, walk），学会询问和说明通勤方式与购买车票。',
      ar: 'تعلم التحدث عن وسائل النقل والتنقل اليومي باستخدام حروف الجر المناسبة والأفعال الحركية.',
      ja: '交通手段や通勤・通学方法を表す前置詞（by bus, on foot など）や動詞（take, ride, drive, walk）を学び、切符の購入や駅でのやり取りを習得します。',
      ru: 'Научитесь говорить о транспорте и поездках с помощью предлогов (by bus, on foot) и глаголов движения.'
    },
    canDoStatements: [
      'Explain how you travel to work, university, or town: "I go by metro", "I commute on foot"',
      'Ask others about commuting routines: "How do you get to the office?"',
      'Purchase tickets and ask transit questions: "Can I have a one-way ticket to downtown?"',
      'Distinguish correct transport prepositions: "on foot" (never "by foot"), "by train", "in my car"',
      'Understand station announcements regarding platforms, delays, and arrivals'
    ],
    canDoByLang: {
      hi: [
        'काम या कॉलेज जाने के साधनों की व्याख्या करना: "I go by metro", "I walk on foot"',
        'दूसरों से आने-जाने के तरीके पूछना: "How do you get to work?"',
        'टिकट खरीदना और स्टेशन पर जानकारी पूछना',
        'सही प्रीपोजिशन्स का प्रयोग करना: "on foot", "by train"'
      ],
      es: [
        'Explicar cómo te desplazas al trabajo: "I go by metro", "I walk on foot"',
        'Preguntar sobre trayectos: "How do you get to the office?"',
        'Comprar billetes y consultar plataformas'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (25 items)
  vocabulary: [
    {
      id: 'v_u02_l19_subway',
      word: 'subway / metro / underground',
      phonetic: '/ˈsʌb.weɪ/',
      meaning: 'An underground electric railway system in a city',
      translationsByLang: { hi: 'मेट्रो / सबवे', es: 'metro / subterráneo', fr: 'métro', de: 'U-Bahn / Metro', pt: 'metrô', zh: '地铁', ar: 'مترو الأنفاق', ja: '地下鉄 / メトロ', ru: 'метро' },
      exampleSentence: 'I take the subway to work because it is very fast.',
      exampleTranslationByLang: { hi: 'मैं काम पर जाने के लिए मेट्रो लेता हूँ क्योंकि यह बहुत तेज़ है।', es: 'Cojo el metro para ir a trabajar porque es muy rápido.' },
      audioText: 'subway and metro and underground',
      audioId: 'en_a1_u02_l19_v_subway',
      slowAudioId: 'en_a1_u02_l19_v_subway_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚇',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_train',
      word: 'train',
      phonetic: '/treɪn/',
      meaning: 'A series of connected railway carriages drawn by an engine',
      translationsByLang: { hi: 'ट्रेन / रेलगाड़ी', es: 'tren', fr: 'train', de: 'Zug / Bahn', pt: 'trem / comboio', zh: '火车 / 列车', ar: 'قطار', ja: '電車 / 列車', ru: 'поезд' },
      exampleSentence: 'The express train arrives at platform two.',
      exampleTranslationByLang: { hi: 'एक्सप्रेस ट्रेन प्लेटफॉर्म दो पर आती है।', es: 'El tren expreso llega al andén dos.' },
      audioText: 'train',
      audioId: 'en_a1_u02_l19_v_train',
      slowAudioId: 'en_a1_u02_l19_v_train_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚆',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_bus',
      word: 'bus',
      phonetic: '/bʌs/',
      meaning: 'A large motor vehicle carrying passengers by road on fixed routes',
      translationsByLang: { hi: 'बस', es: 'autobús / bus / camión', fr: 'bus / autobus', de: 'Bus / Autobus', pt: 'ônibus / autocarro', zh: '公共汽车 / 巴士', ar: 'حافلة / باص', ja: 'バス', ru: 'автобус' },
      exampleSentence: 'Bus number forty-two stops right outside our office.',
      exampleTranslationByLang: { hi: 'बस नंबर बयालीस हमारे ऑफिस के ठीक बाहर रुकती है।', es: 'El autobús número cuarenta y dos para justo enfrente de nuestra oficina.' },
      audioText: 'bus',
      audioId: 'en_a1_u02_l19_v_bus',
      slowAudioId: 'en_a1_u02_l19_v_bus_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚌',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_tram',
      word: 'tram / streetcar',
      phonetic: '/træm/',
      meaning: 'A passenger vehicle powered by overhead electricity running on rails in street tracks',
      translationsByLang: { hi: 'ट्राम', es: 'tranvía', fr: 'tramway', de: 'Straßenbahn / Tram', pt: 'bonde / elétrico', zh: '有轨电车', ar: 'ترام / ترامواي', ja: '路面電車 / トラム', ru: 'трамвай' },
      exampleSentence: 'We ride the modern tram across the city center.',
      exampleTranslationByLang: { hi: 'हम शहर के केंद्र में आधुनिक ट्राम की सवारी करते हैं।', es: 'Montamos en el tranvía moderno por el centro de la ciudad.' },
      audioText: 'tram and streetcar',
      audioId: 'en_a1_u02_l19_v_tram',
      slowAudioId: 'en_a1_u02_l19_v_tram_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚋',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_taxi',
      word: 'taxi / cab',
      phonetic: '/ˈtæk.si/',
      meaning: 'A car with a driver that you pay to take you where you want to go',
      translationsByLang: { hi: 'टैक्सी', es: 'taxi', fr: 'taxi', de: 'Taxi', pt: 'táxi', zh: '出租车 / 的士', ar: 'تاكسي / سيارة أجرة', ja: 'タクシー', ru: 'такси' },
      exampleSentence: 'When it rains heavily, I take a taxi.',
      exampleTranslationByLang: { hi: 'जब भारी बारिश होती है, तो मैं टैक्सी लेता हूँ।', es: 'Cuando llueve mucho, cojo un taxi.' },
      audioText: 'taxi and cab',
      audioId: 'en_a1_u02_l19_v_taxi',
      slowAudioId: 'en_a1_u02_l19_v_taxi_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚕',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_bicycle',
      word: 'bicycle / bike',
      phonetic: '/ˈbaɪ.sə.kəl/',
      meaning: 'A two-wheeled vehicle that you pedal with your feet',
      translationsByLang: { hi: 'साइकिल', es: 'bicicleta / bici', fr: 'vélo / bicyclette', de: 'Fahrrad / Rad', pt: 'bicicleta / bike', zh: '自行车 / 单车', ar: 'دراجة هوائية', ja: '自転車 / バイク', ru: 'велосипед' },
      exampleSentence: 'He rides his bike along the river to work.',
      exampleTranslationByLang: { hi: 'वह नदी के किनारे काम पर साइकिल चलाकर जाता है।', es: 'Él va en bicicleta al trabajo junto al río.' },
      audioText: 'bicycle and bike',
      audioId: 'en_a1_u02_l19_v_bicycle',
      slowAudioId: 'en_a1_u02_l19_v_bicycle_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚲',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_car',
      word: 'car',
      phonetic: '/kɑːr/',
      meaning: 'A road vehicle powered by an engine and four wheels',
      translationsByLang: { hi: 'कार / गाड़ी', es: 'coche / carro / auto', fr: 'voiture / auto', de: 'Auto / Wagen', pt: 'carro / automóvel', zh: '小汽车 / 汽车', ar: 'سيارة', ja: '車 / 自動車', ru: 'машина / автомобиль' },
      exampleSentence: 'My colleague drives his car to the office.',
      exampleTranslationByLang: { hi: 'मेरा सहकर्मी ऑफिस के लिए अपनी कार चलाता है।', es: 'Mi compañero va en coche a la oficina.' },
      audioText: 'car',
      audioId: 'en_a1_u02_l19_v_car',
      slowAudioId: 'en_a1_u02_l19_v_car_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚗',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_ticket',
      word: 'ticket',
      phonetic: '/ˈtɪk.ɪt/',
      meaning: 'A piece of paper or digital pass giving authorization to travel on transit',
      translationsByLang: { hi: 'टिकट', es: 'billete / boleto / pasaje', fr: 'billet / ticket', de: 'Fahrkarte / Ticket', pt: 'bilhete / passagem / tíquete', zh: '车票 / 门票', ar: 'تذكرة', ja: '切符 / チケット', ru: 'билет' },
      exampleSentence: 'You can buy a ticket at the automated machine.',
      exampleTranslationByLang: { hi: 'आप स्वचालित मशीन पर टिकट खरीद सकते हैं।', es: 'Puedes comprar un billete en la máquina automática.' },
      audioText: 'ticket',
      audioId: 'en_a1_u02_l19_v_ticket',
      slowAudioId: 'en_a1_u02_l19_v_ticket_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎟️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_station',
      word: 'station',
      phonetic: '/ˈsteɪ.ʃən/',
      meaning: 'A designated building where trains, buses, or metros stop for passengers',
      translationsByLang: { hi: 'स्टेशन', es: 'estación', fr: 'gare / station', de: 'Bahnhof / Station', pt: 'estação', zh: '车站 / 火车站', ar: 'محطة', ja: '駅 / ステーション', ru: 'станция / вокзал' },
      exampleSentence: 'Meet me in front of the central station at noon.',
      exampleTranslationByLang: { hi: 'दोपहर को सेंट्रल स्टेशन के सामने मुझसे मिलें।', es: 'Queda conmigo delante de la estación central a mediodía.' },
      audioText: 'station',
      audioId: 'en_a1_u02_l19_v_station',
      slowAudioId: 'en_a1_u02_l19_v_station_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚉',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_bus_stop',
      word: 'bus stop',
      phonetic: '/ˈbʌs ˌstɑːp/',
      meaning: 'A marked place on a roadside where buses stop regularly',
      translationsByLang: { hi: 'बस स्टॉप', es: 'parada de autobús', fr: 'arrêt de bus', de: 'Bushaltestelle', pt: 'ponto de ônibus / paragem de autocarro', zh: '公交车站', ar: 'موقف الحافلات', ja: 'バス停', ru: 'автобусная остановка' },
      exampleSentence: 'There are five people waiting at the bus stop.',
      exampleTranslationByLang: { hi: 'बस स्टॉप पर पांच लोग इंतजार कर रहे हैं।', es: 'Hay cinco personas esperando en la parada de autobús.' },
      audioText: 'bus stop',
      audioId: 'en_a1_u02_l19_v_bus_stop',
      slowAudioId: 'en_a1_u02_l19_v_bus_stop_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚏',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_platform',
      word: 'platform',
      phonetic: '/ˈplæt.fɔːrm/',
      meaning: 'A raised level surface beside a railway track for passengers getting on and off trains',
      translationsByLang: { hi: 'प्लेटफॉर्म', es: 'andén / plataforma', fr: 'quai', de: 'Bahnsteig / Gleis', pt: 'plataforma / cais', zh: '站台 / 月台', ar: 'رصيف المحطة', ja: 'プラットホーム / ホーム', ru: 'платформа / перрон' },
      exampleSentence: 'Our train leaves from platform number four.',
      exampleTranslationByLang: { hi: 'हमारी ट्रेन प्लेटफॉर्म नंबर चार से छूटती है।', es: 'Nuestro tren sale del andén número cuatro.' },
      audioText: 'platform',
      audioId: 'en_a1_u02_l19_v_platform',
      slowAudioId: 'en_a1_u02_l19_v_platform_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🛤️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_airport',
      word: 'airport',
      phonetic: '/ˈer.pɔːrt/',
      meaning: 'A complex of runways and buildings for takeoff, landing, and maintenance of civil aircraft',
      translationsByLang: { hi: 'हवाई अड्डा / एयरपोर्ट', es: 'aeropuerto', fr: 'aéroport', de: 'Flughafen', pt: 'aeroporto', zh: '机场 / 飞机场', ar: 'مطار', ja: '空港 / エアポート', ru: 'аэропорт' },
      exampleSentence: 'The express train takes thirty minutes to reach the airport.',
      exampleTranslationByLang: { hi: 'एक्सप्रेस ट्रेन को हवाई अड्डे तक पहुँचने में तीस मिनट लगते हैं।', es: 'El tren expreso tarda treinta minutos en llegar al aeropuerto.' },
      audioText: 'airport',
      audioId: 'en_a1_u02_l19_v_airport',
      slowAudioId: 'en_a1_u02_l19_v_airport_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '✈️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_timetable',
      word: 'timetable / schedule',
      phonetic: '/ˈtaɪmˌteɪ.bəl/',
      meaning: 'A chart showing the departure and arrival times of trains and buses',
      translationsByLang: { hi: 'समय सारणी / टाइमटेबल', es: 'horario / tabla de horarios', fr: 'horaire / grille horaire', de: 'Fahrplan / Zeitplan', pt: 'horário / tabela de horários', zh: '时刻表 / 时间表', ar: 'جدول المواعيد / جدول الرحلات', ja: '時刻表 / ダイヤ', ru: 'расписание' },
      exampleSentence: 'Check the timetable on the official transit app.',
      exampleTranslationByLang: { hi: 'आधिकारिक पारगमन ऐप पर समय सारणी देखें।', es: 'Consulta el horario en la aplicación oficial de transporte.' },
      audioText: 'timetable and schedule',
      audioId: 'en_a1_u02_l19_v_timetable',
      slowAudioId: 'en_a1_u02_l19_v_timetable_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📅',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_passenger',
      word: 'passenger',
      phonetic: '/ˈpæs.ən.dʒɚ/',
      meaning: 'A person traveling in a vehicle, train, or bus who is not the driver',
      translationsByLang: { hi: 'यात्री / मुसाफिर', es: 'pasajero / viajero', fr: 'passager / voyageur', de: 'Passagier / Fahrgast', pt: 'passageiro', zh: '乘客 / 旅客', ar: 'راكب / مسافر', ja: '乗客 / パッセンジャー', ru: 'пассажир' },
      exampleSentence: 'All passengers must show valid tickets.',
      exampleTranslationByLang: { hi: 'सभी यात्रियों को वैध टिकट दिखाना होगा।', es: 'Todos los pasajeros deben mostrar billetes válidos.' },
      audioText: 'passenger',
      audioId: 'en_a1_u02_l19_v_passenger',
      slowAudioId: 'en_a1_u02_l19_v_passenger_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👥',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_fare',
      word: 'fare',
      phonetic: '/fer/',
      meaning: 'The money paid for a journey on public transit',
      translationsByLang: { hi: 'किराया', es: 'tarifa / precio del billete', fr: 'tarif / prix du billet', de: 'Fahrpreis / Tarif', pt: 'tarifa / preço da passagem', zh: '票价 / 费用', ar: 'أجرة الركوب', ja: '運賃 / 料金', ru: 'плата за проезд / тариф' },
      exampleSentence: 'The bus fare is two dollars and fifty cents.',
      exampleTranslationByLang: { hi: 'बस का किराया दो डॉलर पचास सेंट है।', es: 'El billete de autobús cuesta dos dólares con cincuenta centavos.' },
      audioText: 'fare',
      audioId: 'en_a1_u02_l19_v_fare',
      slowAudioId: 'en_a1_u02_l19_v_fare_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💵',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_traffic',
      word: 'traffic / traffic jam',
      phonetic: '/ˈtræf.ɪk/',
      meaning: 'Vehicles moving or congested on a road',
      translationsByLang: { hi: 'यातायात / ट्रैफिक जाम', es: 'tráfico / atasco / congestión', fr: 'circulation / embouteillage', de: 'Verkehr / Stau', pt: 'trânsito / engarrafamento', zh: '交通 / 堵车', ar: 'حركة المرور / ازدحام مروري', ja: '交通 / 渋滞', ru: 'дорожное движение / пробка' },
      exampleSentence: 'There is heavy traffic during rush hour in the city.',
      exampleTranslationByLang: { hi: 'शहर में व्यस्त समय के दौरान भारी ट्रैफिक होता है।', es: 'Hay mucho tráfico durante la hora punta en la ciudad.' },
      audioText: 'traffic and traffic jam',
      audioId: 'en_a1_u02_l19_v_traffic',
      slowAudioId: 'en_a1_u02_l19_v_traffic_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚗',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_on_foot',
      word: 'on foot',
      phonetic: '/ɑːn fʊt/',
      meaning: 'Walking rather than using a vehicle or transit',
      translationsByLang: { hi: 'पैदल', es: 'a pie / caminando', fr: 'à pied', de: 'zu Fuß', pt: 'a pé', zh: '步行 / 走路', ar: 'مشياً على الأقدام / على الأقدام', ja: '徒歩で / 歩いて', ru: 'пешком' },
      exampleSentence: 'I live nearby, so I come to work on foot.',
      exampleTranslationByLang: { hi: 'मैं पास में रहता हूँ, इसलिए मैं पैदल काम पर आता हूँ।', es: 'Vivo cerca, así que vengo a trabajar a pie.' },
      audioText: 'on foot',
      audioId: 'en_a1_u02_l19_v_on_foot',
      slowAudioId: 'en_a1_u02_l19_v_on_foot_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚶',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_delay',
      word: 'delay / delayed',
      phonetic: '/dɪˈleɪ/',
      meaning: 'A period of time by which something is late or postponed',
      translationsByLang: { hi: 'देरी / विलंब', es: 'retraso / demorado', fr: 'retard / retardé', de: 'Verspätung / verspätet', pt: 'atraso / atrasado', zh: '延误 / 延迟', ar: 'تأخير / متأخر', ja: '遅延 / 遅れ', ru: 'задержка / опоздание' },
      exampleSentence: 'The train has a ten-minute delay today.',
      exampleTranslationByLang: { hi: 'आज ट्रेन में दस मिनट की देरी है।', es: 'El tren tiene un retraso de diez minutos hoy.' },
      audioText: 'delay and delayed',
      audioId: 'en_a1_u02_l19_v_delay',
      slowAudioId: 'en_a1_u02_l19_v_delay_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⏱️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_arrive_depart',
      word: 'arrive / depart',
      phonetic: '/əˈraɪv/ /dɪˈpɑːrt/',
      meaning: 'To reach a destination or leave from a station',
      translationsByLang: { hi: 'आना / रवाना होना', es: 'llegar / partir / salir', fr: 'arriver / partir', de: 'ankommen / abfahren', pt: 'chegar / partir', zh: '到达 / 出发', ar: 'يصل / يغادر', ja: '到着する / 出発する', ru: 'прибывать / отправляться' },
      exampleSentence: 'The bus departs at nine and arrives at nine thirty.',
      exampleTranslationByLang: { hi: 'बस नौ बजे रवाना होती है और साढ़े नौ बजे पहुँचती है।', es: 'El autobús sale a las nueve y llega a las nueve y media.' },
      audioText: 'arrive and depart',
      audioId: 'en_a1_u02_l19_v_arrive_depart',
      slowAudioId: 'en_a1_u02_l19_v_arrive_depart_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔄',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_travel_card',
      word: 'travel card / transit pass',
      phonetic: '/ˈtræv.əl ˌkɑːrd/',
      meaning: 'A rechargeable electronic card used for subway and bus travel',
      translationsByLang: { hi: 'ट्रैवल कार्ड / मेट्रो कार्ड', es: 'tarjeta de transporte / abono', fr: 'carte de transport / pass', de: 'Fahrkarte / Monatskarte', pt: 'cartão de transporte / passe', zh: '交通卡 / 一卡通', ar: 'بطاقة مواصلات', ja: '交通系ICカード / 定期券', ru: 'проездной билет / транспортная карта' },
      exampleSentence: 'You can tap your travel card at the turnstile.',
      exampleTranslationByLang: { hi: 'आप टर्नस्टाइल पर अपना ट्रैवल कार्ड टैप कर सकते हैं।', es: 'Puedes pasar tu tarjeta de transporte por el torno.' },
      audioText: 'travel card and transit pass',
      audioId: 'en_a1_u02_l19_v_travel_card',
      slowAudioId: 'en_a1_u02_l19_v_travel_card_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💳',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_walk',
      word: 'walk (walks, walking)',
      phonetic: '/wɑːk/',
      meaning: 'To move on foot at a regular pace',
      translationsByLang: { hi: 'चलना / टहलना', es: 'caminar / andar', fr: 'marcher', de: 'gehen / laufen', pt: 'caminhar / andar', zh: '步行 / 走', ar: 'يمشي / يسير', ja: '歩く / 徒歩で行く', ru: 'идти пешком / гулять' },
      exampleSentence: 'We walk through the park every morning.',
      exampleTranslationByLang: { hi: 'हम हर सुबह पार्क से होकर चलते हैं।', es: 'Caminamos por el parque todas las mañanas.' },
      audioText: 'walk',
      audioId: 'en_a1_u02_l19_v_walk',
      slowAudioId: 'en_a1_u02_l19_v_walk_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚶',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_drive',
      word: 'drive (drives, driving)',
      phonetic: '/draɪv/',
      meaning: 'To operate and control the movement of a motor vehicle',
      translationsByLang: { hi: 'गाड़ी चलाना / ड्राइव करना', es: 'conducir / manejar', fr: 'conduire', de: 'fahren / Auto fahren', pt: 'dirigir / conduzir', zh: '开车 / 驾驶', ar: 'يقود السيارة', ja: '運転する / 車を運転する', ru: 'водить машину / ехать на машине' },
      exampleSentence: 'Do you drive to work or take the train?',
      exampleTranslationByLang: { hi: 'क्या आप गाड़ी से काम पर जाते हैं या ट्रेन लेते हैं?', es: '¿Vas en coche al trabajo o coges el tren?' },
      audioText: 'drive',
      audioId: 'en_a1_u02_l19_v_drive',
      slowAudioId: 'en_a1_u02_l19_v_drive_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚗',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_ride',
      word: 'ride (rides, riding)',
      phonetic: '/raɪd/',
      meaning: 'To sit on and control a bicycle, motorbike, or horse',
      translationsByLang: { hi: 'सवारी करना / चलाना (साइकिल आदि)', es: 'montar en / andar en', fr: 'faire du vélo / monter', de: 'fahren (Fahrrad/Motorrad)', pt: 'andar de (bicicleta/moto)', zh: '骑（自行车/摩托车）', ar: 'يركب (دراجة/دراجة نارية)', ja: '乗る（自転車やバイクに）', ru: 'ездить верхом / кататься (на велосипеде)' },
      exampleSentence: 'I ride my bicycle to the university.',
      exampleTranslationByLang: { hi: 'मैं विश्वविद्यालय के लिए अपनी साइकिल चलाता हूँ।', es: 'Voy en bicicleta a la universidad.' },
      audioText: 'ride',
      audioId: 'en_a1_u02_l19_v_ride',
      slowAudioId: 'en_a1_u02_l19_v_ride_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚲',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_take_catch',
      word: 'take / catch',
      phonetic: '/teɪk/ /kætʃ/',
      meaning: 'To use or board public transit',
      translationsByLang: { hi: 'लेना / पकड़ना (बस या ट्रेन)', es: 'coger / tomar', fr: 'prendre / attraper', de: 'nehmen / erwischen', pt: 'pegar / apanhar', zh: '乘坐 / 搭乘', ar: 'يركب / يلحق بـ', ja: '乗る / 利用する', ru: 'сесть на / успеть на' },
      exampleSentence: 'We take the metro every day.',
      exampleTranslationByLang: { hi: 'हम हर दिन मेट्रो लेते हैं।', es: 'Cogemos el metro todos los días.' },
      audioText: 'take and catch',
      audioId: 'en_a1_u02_l19_v_take_catch',
      slowAudioId: 'en_a1_u02_l19_v_take_catch_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎟️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l19_journey',
      word: 'trip / journey',
      phonetic: '/trɪp/ /ˈdʒɝː.ni/',
      meaning: 'An act of traveling from one place to another',
      translationsByLang: { hi: 'यात्रा / सफर', es: 'viaje / trayecto', fr: 'voyage / trajet', de: 'Reise / Fahrt', pt: 'viagem / trajeto', zh: '旅程 / 行程', ar: 'رحلة / مشوار', ja: '旅 / 移動 / 道のり', ru: 'поездка / путешествие' },
      exampleSentence: 'The train journey takes forty minutes.',
      exampleTranslationByLang: { hi: 'ट्रेन की यात्रा में चालीस मिनट लगते हैं।', es: 'El trayecto en tren dura cuarenta minutos.' },
      audioText: 'trip and journey',
      audioId: 'en_a1_u02_l19_v_journey',
      slowAudioId: 'en_a1_u02_l19_v_journey_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🗺️',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks
  expressions: [
    {
      id: 'chunk_u02_l19_how_do_you_get_to',
      text: 'How do you get to work?',
      meaning: 'Standard inquiry about someone\'s transportation routine',
      translationsByLang: {
        hi: 'आप काम पर कैसे जाते हैं?',
        es: '¿Cómo vas al trabajo?',
        fr: 'Comment allez-vous au travail ?',
        de: 'Wie kommen Sie zur Arbeit?'
      },
      audioText: 'How do you get to work?',
      audioId: 'en_a1_u02_l19_c_how_get_work',
      context: 'Small talk with colleagues and friends',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_u02_l19_one_way_ticket',
      text: 'A one-way ticket, please.',
      meaning: 'Standard phrase when buying a single single-direction transit pass',
      translationsByLang: {
        hi: 'एक तरफ का टिकट, कृपया।',
        es: 'Un billete de ida, por favor.',
        fr: 'Un aller simple, s\'il vous plaît.',
        de: 'Eine einfache Fahrt, bitte.'
      },
      audioText: 'A one-way ticket, please.',
      audioId: 'en_a1_u02_l19_c_one_way_ticket',
      context: 'Ticket counters and transit desks',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_u02_l19_is_this_seat_taken',
      text: 'Excuse me, is this seat taken?',
      meaning: 'Polite question before sitting next to a passenger on a bus or train',
      translationsByLang: {
        hi: 'माफ़ कीजिए, क्या यह सीट खाली है?',
        es: 'Disculpe, ¿está ocupado este asiento?',
        fr: 'Excusez-moi, cette place est-elle prise ?',
        de: 'Entschuldigung, ist dieser Platz besetzt?'
      },
      audioText: 'Excuse me, is this seat taken?',
      audioId: 'en_a1_u02_l19_c_seat_taken',
      context: 'On public transport carriages',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 5 & 6: Grammar Rules
  grammar: {
    patterns: [
      {
        id: 'g_prepositions_of_transportation',
        title: 'Prepositions of Transportation: "by" vs "on" vs "in"',
        rule: 'Use "by" with general modes of transport without an article: "by bus, by train, by car, by plane, by metro". Use "on foot" for walking (never "*by foot*"). When using a possessive or article with personal cars or taxis, use "in": "in my car, in a taxi".',
        formula: 'General Transit: by + [bus / train / car / plane / bike / metro]\nWalking: on foot\nSpecific Vehicle: in + [a taxi / my car] | on + [the 8:00 bus / the train]',
        examples: [
          { sentence: 'I go to work by bus, but on Fridays I go on foot.', translation: 'मैं बस से काम पर जाता हूँ, लेकिन शुक्रवार को मैं पैदल जाता हूँ। / Voy al trabajo en autobús, pero los viernes voy a pie.', audioText: 'I go to work by bus, but on Fridays I go on foot.', audioId: 'en_a1_u02_l19_g_ex1' },
          { sentence: 'She arrives in a taxi because the trains are delayed.', translation: 'वह टैक्सी में आती है क्योंकि ट्रेनें लेट हैं। / Ella llega en taxi porque los trenes van con retraso.', audioText: 'She arrives in a taxi because the trains are delayed.', audioId: 'en_a1_u02_l19_g_ex2' }
        ],
        explanationByLang: {
          hi: 'सामान्य साधनों के साथ "by" (by bus, by train) का प्रयोग करें। पैदल चलने के लिए हमेशा "on foot" आता है ("by foot" नहीं)।',
          es: 'Usa "by" con medios generales ("by bus", "by train"). Para ir andando se dice estrictamente "on foot" (nunca "*by foot*").'
        }
      },
      {
        id: 'g_verbs_of_transit_movement',
        title: 'Verbs of Movement (Take / Catch / Ride / Drive / Walk)',
        rule: 'Instead of "go by...", you can use active verbs with articles: "take the bus/train/metro", "ride a bicycle", "drive a car", "walk to the office".',
        formula: '[Subject] + take/takes the + [Transit] | [Subject] + drive/walk/ride to + [Location]',
        examples: [
          { sentence: 'He takes the metro to the city center.', translation: 'वह शहर के केंद्र के लिए मेट्रो लेता है। / Él coge el metro hacia el centro de la ciudad.', audioText: 'He takes the metro to the city center.', audioId: 'en_a1_u02_l19_g_ex3' },
          { sentence: 'We walk to the supermarket every evening.', translation: 'हम हर शाम सुपरमार्केट तक पैदल जाते हैं। / Caminamos al supermercado todas las tardes.', audioText: 'We walk to the supermarket every evening.', audioId: 'en_a1_u02_l19_g_ex4' }
        ],
        explanationByLang: {
          hi: '"take the bus" या "walk to..." जैसे सक्रिय क्रिया रूपों का प्रयोग करें।',
          es: 'Alternativas activas: "take the bus", "ride a bike", "drive to work", "walk to work".'
        }
      }
    ]
  },

  // SECTION 7: Common Mistakes
  commonMistakes: [
    {
      id: 'cm_u02_l19_by_foot',
      incorrect: 'I go to the office by foot.',
      correct: 'I go to the office on foot. / I walk to the office.',
      whyExplanation: 'In English, you say "on foot", NEVER "*by foot*".',
      explanationsByLang: {
        hi: 'पैदल चलने के लिए हमेशा "on foot" का प्रयोग करें, "*by foot*" कभी नहीं।',
        es: 'La expresión correcta es "on foot", nunca "*by foot*".',
        fr: 'On dit "on foot", jamais "*by foot*".',
        de: 'Es heißt "on foot", niemals "*by foot*".'
      }
    },
    {
      id: 'cm_u02_l19_by_my_car',
      incorrect: 'I travel by my car.',
      correct: 'I travel by car. / I travel in my car.',
      whyExplanation: 'Do not use possessives like "my" with "by". Say "by car" or "in my car".',
      explanationsByLang: {
        hi: '"by" के साथ "my" नहीं आता: "by car" या "in my car" कहें।',
        es: 'No mezcles "by" con posesivos: di "by car" o "in my car".',
        fr: 'Dites "by car" ou "in my car", pas "*by my car*".',
        de: 'Sagen Sie "by car" oder "in my car".'
      }
    }
  ],

  // SECTION 11: Realistic Mini Dialogues
  dialogues: [
    {
      id: 'd_u02_l19_buying_ticket',
      title: 'Buying a Train Ticket at the Station',
      context: 'Liam is at the ticket counter buying a train pass to the airport from the ticket agent.',
      characters: [
        { id: 'char_liam', name: 'Liam', role: 'Passenger' },
        { id: 'char_clerk', name: 'Clerk', role: 'Transit Agent' }
      ],
      turns: [
        {
          id: 'turn_1',
          speakerId: 'char_liam',
          speakerName: 'Liam',
          text: 'Good morning! Could I have a one-way ticket to the international airport, please?',
          translationsByLang: { hi: 'सुप्रभात! क्या मुझे अंतरराष्ट्रीय हवाई अड्डे के लिए एक तरफ का टिकट मिल सकता है, कृपया?', es: '¡Buenos días! ¿Me da un billete de ida al aeropuerto internacional, por favor?' },
          audioText: 'Good morning! Could I have a one-way ticket to the international airport, please?',
          audioId: 'en_a1_u02_l19_d01_t1'
        },
        {
          id: 'turn_2',
          speakerId: 'char_clerk',
          speakerName: 'Clerk',
          text: 'Certainly, sir. That will be six dollars and fifty cents. Are you paying by card or in cash?',
          translationsByLang: { hi: 'ज़रूर, सर। इसके छह डॉलर पचास सेंट होंगे। क्या आप कार्ड से भुगतान कर रहे हैं या नकद में?', es: 'Por supuesto, señor. Serán seis dólares con cincuenta centavos. ¿Paga con tarjeta o en efectivo?' },
          audioText: 'Certainly, sir. That will be six dollars and fifty cents. Are you paying by card or in cash?',
          audioId: 'en_a1_u02_l19_d01_t2'
        },
        {
          id: 'turn_3',
          speakerId: 'char_liam',
          speakerName: 'Liam',
          text: 'By credit card, please. Which platform does the airport train leave from?',
          translationsByLang: { hi: 'क्रेडिट कार्ड से, कृपया। हवाई अड्डे की ट्रेन किस प्लेटफॉर्म से छूटती है?', es: 'Con tarjeta de crédito, por favor. ¿De qué andén sale el tren hacia el aeropuerto?' },
          audioText: 'By credit card, please. Which platform does the airport train leave from?',
          audioId: 'en_a1_u02_l19_d01_t3'
        },
        {
          id: 'turn_4',
          speakerId: 'char_clerk',
          speakerName: 'Clerk',
          text: 'It departs from platform three in fifteen minutes. Have a pleasant journey!',
          translationsByLang: { hi: 'यह पंद्रह मिनट में प्लेटफॉर्म तीन से रवाना होगी। आपकी यात्रा सुखद रहे!', es: 'Sale del andén tres en quince minutos. ¡Que tenga un buen viaje!' },
          audioText: 'It departs from platform three in fifteen minutes. Have a pleasant journey!',
          audioId: 'en_a1_u02_l19_d01_t4'
        },
        {
          id: 'turn_5',
          speakerId: 'char_liam',
          speakerName: 'Liam',
          text: 'Thank you very much for your help!',
          translationsByLang: { hi: 'आपकी मदद के लिए बहुत-बहुत धन्यवाद!', es: '¡Muchas gracias por su ayuda!' },
          audioText: 'Thank you very much for your help!',
          audioId: 'en_a1_u02_l19_d01_t5'
        }
      ]
    }
  ],

  // SECTION 8, 9, 10, 12, 13, 14, 15: Practice Exercises (15 items)
  practiceExercises: [
    {
      id: 'ex_u02_l19_p1',
      lessonId: 'lesson_a1_2_19',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Select the correct preposition for traveling on foot:',
      sourceSentence: 'I live nearby, so I go to work ___ foot.',
      options: [
        { id: 'o1', text: 'on', isCorrect: true },
        { id: 'o2', text: 'by', isCorrect: false },
        { id: 'o3', text: 'with', isCorrect: false }
      ],
      explanation: 'The fixed expression is "on foot".'
    },
    {
      id: 'ex_u02_l19_p2',
      lessonId: 'lesson_a1_2_19',
      stage: 8,
      type: 'fill_blank',
      prompt: 'Complete the preposition for general transport:',
      sourceSentence: 'We travel to the capital ___ train.',
      options: [
        { id: 'o1', text: 'by', isCorrect: true },
        { id: 'o2', text: 'on', isCorrect: false },
        { id: 'o3', text: 'in', isCorrect: false }
      ],
      explanation: 'Use "by" before general transportation modes without articles.'
    },
    {
      id: 'ex_u02_l19_p3',
      lessonId: 'lesson_a1_2_19',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the commuting sentence:',
      targetSentence: 'He takes the subway to work every morning',
      wordBank: ['He', 'takes', 'the', 'subway', 'to', 'work', 'every', 'morning', 'by', 'is']
    },
    {
      id: 'ex_u02_l19_p4',
      lessonId: 'lesson_a1_2_19',
      stage: 9,
      type: 'listening',
      prompt: 'Listen to the platform announcement:',
      audioText: 'The express train to the airport departs from platform four',
      options: [
        { id: 'o1', text: 'The express train to the airport departs from platform four', isCorrect: true },
        { id: 'o2', text: 'The local bus to the subway arrives at platform three', isCorrect: false },
        { id: 'o3', text: 'The train to the airport has a twenty-minute delay', isCorrect: false }
      ],
      explanation: 'The speaker announces departure from platform four.'
    },
    {
      id: 'ex_u02_l19_p5',
      lessonId: 'lesson_a1_2_19',
      stage: 9,
      type: 'listen_and_type',
      prompt: 'Listen and transcribe the sentence:',
      audioText: 'How do you get to work every day',
      targetSentence: 'How do you get to work every day'
    },
    {
      id: 'ex_u02_l19_p6',
      lessonId: 'lesson_a1_2_19',
      stage: 10,
      type: 'word_ordering',
      prompt: 'Construct the question asking for transport method:',
      targetSentence: 'How do you usually travel to the office',
      wordBank: ['How', 'do', 'you', 'usually', 'travel', 'to', 'the', 'office', 'are', 'is']
    },
    {
      id: 'ex_u02_l19_p7',
      lessonId: 'lesson_a1_2_19',
      stage: 12,
      type: 'speaking',
      prompt: 'Speak this polite phrase into your microphone:',
      targetSentence: 'A one-way ticket to the city center, please.',
      audioText: 'A one-way ticket to the city center, please.'
    },
    {
      id: 'ex_u02_l19_p8',
      lessonId: 'lesson_a1_2_19',
      stage: 13,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'मैं बस से काम पर जाता हूँ और वह पैदल जाती है।',
      sourceTranslations: {
        hi: 'मैं बस से काम पर जाता हूँ और वह पैदल जाती है।',
        es: 'Yo voy al trabajo en autobús y ella va a pie.'
      },
      targetSentence: 'I go to work by bus and she goes on foot',
      wordBank: ['I', 'go', 'to', 'work', 'by', 'bus', 'and', 'she', 'goes', 'on', 'foot', 'by foot']
    },
    {
      id: 'ex_u02_l19_p9',
      lessonId: 'lesson_a1_2_19',
      stage: 14,
      type: 'fill_blank',
      prompt: 'Interleaved Practice (Combining Unit 1 Can/Can\'t & Transit):',
      sourceSentence: 'You ___ buy tickets at the automated machine or online.',
      options: [
        { id: 'o1', text: 'can', isCorrect: true },
        { id: 'o2', text: 'are', isCorrect: false },
        { id: 'o3', text: 'having', isCorrect: false }
      ],
      explanation: '"can" indicates possibility and permission.'
    },
    {
      id: 'ex_u02_l19_p10',
      lessonId: 'lesson_a1_2_19',
      stage: 15,
      type: 'error_correction',
      prompt: 'Fix the preposition error:',
      sourceSentence: 'She walks to the station by foot.',
      options: [
        { id: 'o1', text: 'She walks to the station on foot.', isCorrect: true },
        { id: 'o2', text: 'She walks to the station in foot.', isCorrect: false },
        { id: 'o3', text: 'She walks to the station with foot.', isCorrect: false }
      ],
      explanation: 'Always say "on foot".'
    },
    {
      id: 'ex_u02_l19_p11',
      lessonId: 'lesson_a1_2_19',
      stage: 16,
      type: 'dialogue_completion',
      prompt: 'Select the best polite response:',
      sourceSentence: 'Passenger: "Excuse me, is this seat taken?" -> You: "___"',
      options: [
        { id: 'o1', text: 'No, it\'s free. Please sit down.', isCorrect: true },
        { id: 'o2', text: 'Yes, I am a doctor.', isCorrect: false },
        { id: 'o3', text: 'It has two bedrooms.', isCorrect: false }
      ],
      explanation: 'Polite answer confirming seat availability.'
    },
    {
      id: 'ex_u02_l19_p12',
      lessonId: 'lesson_a1_2_19',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Which word means the raised area in a station where passengers get on trains?',
      sourceSentence: 'Vocabulary check:',
      options: [
        { id: 'o1', text: 'platform', isCorrect: true },
        { id: 'o2', text: 'traffic', isCorrect: false },
        { id: 'o3', text: 'pillow', isCorrect: false }
      ],
      explanation: '"platform" is the train boarding area.'
    },
    {
      id: 'ex_u02_l19_p13',
      lessonId: 'lesson_a1_2_19',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Choose the correct sentence: "Due to bad weather, the flight has a thirty-minute ___."',
      sourceSentence: 'Transit term:',
      options: [
        { id: 'o1', text: 'delay', isCorrect: true },
        { id: 'o2', text: 'rug', isCorrect: false },
        { id: 'o3', text: 'closet', isCorrect: false }
      ],
      explanation: '"delay" means a period of being late.'
    },
    {
      id: 'ex_u02_l19_p14',
      lessonId: 'lesson_a1_2_19',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the sentence:',
      targetSentence: 'He rides his bicycle along the river to work',
      wordBank: ['He', 'rides', 'his', 'bicycle', 'along', 'the', 'river', 'to', 'work', 'drive', 'is']
    },
    {
      id: 'ex_u02_l19_p15',
      lessonId: 'lesson_a1_2_19',
      stage: 12,
      type: 'speaking',
      prompt: 'Speak this sentence into your microphone:',
      targetSentence: 'Our train departs from platform number two.',
      audioText: 'Our train departs from platform number two.'
    }
  ],

  // SECTION 16: Review Exercises (4 items)
  reviewExercises: [
    {
      id: 'ex_u02_l19_rev1',
      lessonId: 'lesson_a1_2_19',
      stage: 16,
      type: 'multiple_choice',
      prompt: 'Which phrase is correct?',
      sourceSentence: 'Grammar review:',
      options: [
        { id: 'o1', text: 'I go to university on foot.', isCorrect: true },
        { id: 'o2', text: 'I go to university by foot.', isCorrect: false },
        { id: 'o3', text: 'I go to university with foot.', isCorrect: false }
      ],
      explanation: 'Use "on foot".'
    },
    {
      id: 'ex_u02_l19_rev2',
      lessonId: 'lesson_a1_2_19',
      stage: 16,
      type: 'fill_blank',
      prompt: 'Fill in the correct movement verb:',
      sourceSentence: 'She ___ the subway to the university every morning.',
      options: [
        { id: 'o1', text: 'takes', isCorrect: true },
        { id: 'o2', text: 'drives', isCorrect: false },
        { id: 'o3', text: 'walks', isCorrect: false }
      ],
      explanation: 'Use "takes the subway".'
    },
    {
      id: 'ex_u02_l19_rev3',
      lessonId: 'lesson_a1_2_19',
      stage: 16,
      type: 'word_ordering',
      prompt: 'Build the sentence:',
      targetSentence: 'The bus departs at nine and arrives at nine thirty',
      wordBank: ['The', 'bus', 'departs', 'at', 'nine', 'and', 'arrives', 'at', 'nine', 'thirty', 'is']
    },
    {
      id: 'ex_u02_l19_rev4',
      lessonId: 'lesson_a1_2_19',
      stage: 16,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'क्या यह सीट खाली है? — हाँ, बिल्कुल।',
      sourceTranslations: { hi: 'क्या यह सीट खाली है? — हाँ, बिल्कुल।', es: '¿Está ocupado este asiento? — No, adelante.' },
      targetSentence: 'Is this seat taken No not at all',
      wordBank: ['Is', 'this', 'seat', 'taken', 'No', 'not', 'at', 'all', 'are', 'has']
    }
  ],

  // SECTION 17: Assessment Exercises (10 items)
  assessmentExercises: [
    {
      id: 'ex_u02_l19_a1',
      lessonId: 'lesson_a1_2_19',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Choose the correct preposition: "They travel to London ___ train."',
      sourceSentence: 'Transportation test:',
      options: [
        { id: 'o1', text: 'by', isCorrect: true },
        { id: 'o2', text: 'on', isCorrect: false },
        { id: 'o3', text: 'in', isCorrect: false },
        { id: 'o4', text: 'with', isCorrect: false }
      ],
      explanation: 'Use "by train".'
    },
    {
      id: 'ex_u02_l19_a2',
      lessonId: 'lesson_a1_2_19',
      stage: 17,
      type: 'fill_blank',
      prompt: 'Select the preposition for walking:',
      sourceSentence: 'He goes to school ___ foot.',
      options: [
        { id: 'o1', text: 'on', isCorrect: true },
        { id: 'o2', text: 'by', isCorrect: false },
        { id: 'o3', text: 'at', isCorrect: false },
        { id: 'o4', text: 'in', isCorrect: false }
      ],
      explanation: 'Always "on foot".'
    },
    {
      id: 'ex_u02_l19_a3',
      lessonId: 'lesson_a1_2_19',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the ticket question:',
      targetSentence: 'Can I have a one-way ticket to the airport',
      wordBank: ['Can', 'I', 'have', 'a', 'one-way', 'ticket', 'to', 'the', 'airport', 'do']
    },
    {
      id: 'ex_u02_l19_a4',
      lessonId: 'lesson_a1_2_19',
      stage: 17,
      type: 'error_correction',
      prompt: 'Correct the sentence:',
      sourceSentence: 'We travel to work by foot every day.',
      options: [
        { id: 'o1', text: 'We travel to work on foot every day.', isCorrect: true },
        { id: 'o2', text: 'We travel to work with foot every day.', isCorrect: false },
        { id: 'o3', text: 'We travel to work in foot every day.', isCorrect: false }
      ],
      explanation: 'Use "on foot".'
    },
    {
      id: 'ex_u02_l19_a5',
      lessonId: 'lesson_a1_2_19',
      stage: 17,
      type: 'listening',
      prompt: 'Listen and select what the speaker says:',
      audioText: 'I take the metro to work because there is heavy traffic on the road',
      options: [
        { id: 'o1', text: 'I take the metro to work because there is heavy traffic on the road', isCorrect: true },
        { id: 'o2', text: 'I take the bus to school because the metro is closed', isCorrect: false },
        { id: 'o3', text: 'I ride my bicycle to work because the weather is rainy', isCorrect: false }
      ],
      explanation: 'The speaker takes the metro due to heavy road traffic.'
    },
    {
      id: 'ex_u02_l19_a6',
      lessonId: 'lesson_a1_2_19',
      stage: 17,
      type: 'listen_and_type',
      prompt: 'Listen and transcribe accurately:',
      audioText: 'Our train departs from platform two in ten minutes',
      targetSentence: 'Our train departs from platform two in ten minutes'
    },
    {
      id: 'ex_u02_l19_a7',
      lessonId: 'lesson_a1_2_19',
      stage: 17,
      type: 'dialogue_completion',
      prompt: 'Select the best answer:',
      sourceSentence: 'Colleague: "How do you commute to work?" -> You: "___"',
      options: [
        { id: 'o1', text: 'I take the subway, which takes about twenty minutes.', isCorrect: true },
        { id: 'o2', text: 'I am thirty-two years old.', isCorrect: false },
        { id: 'o3', text: 'There are two armchairs.', isCorrect: false }
      ],
      explanation: 'Direct answer describing subway commute.'
    },
    {
      id: 'ex_u02_l19_a8',
      lessonId: 'lesson_a1_2_19',
      stage: 17,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'हवाई अड्डे की ट्रेन प्लेटफॉर्म तीन से रवाना होती है।',
      sourceTranslations: { hi: 'हवाई अड्डे की ट्रेन प्लेटफॉर्म तीन से रवाना होती है।', es: 'El tren al aeropuerto sale del andén tres.' },
      targetSentence: 'The train to the airport departs from platform three',
      wordBank: ['The', 'train', 'to', 'the', 'airport', 'departs', 'from', 'platform', 'three', 'is', 'on']
    },
    {
      id: 'ex_u02_l19_a9',
      lessonId: 'lesson_a1_2_19',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Which word means the money paid to travel on public transport?',
      sourceSentence: 'Vocabulary check:',
      options: [
        { id: 'o1', text: 'fare', isCorrect: true },
        { id: 'o2', text: 'delay', isCorrect: false },
        { id: 'o3', text: 'curtain', isCorrect: false },
        { id: 'o4', text: 'bookshelf', isCorrect: false }
      ],
      explanation: '"fare" is the price of transit travel.'
    },
    {
      id: 'ex_u02_l19_a10',
      lessonId: 'lesson_a1_2_19',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the final sentence:',
      targetSentence: 'All passengers must show valid tickets at the gate',
      wordBank: ['All', 'passengers', 'must', 'show', 'valid', 'tickets', 'at', 'the', 'gate', 'is']
    }
  ]
};
