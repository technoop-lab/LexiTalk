import { LessonConfig } from './unit5_builder_helper';

// =========================================================================
// LESSON 64: Transportation Inquiries, Ticket Booking & Travel Delays
// =========================================================================
export const CONFIG_64: LessonConfig = {
  num: 64,
  title: 'Transportation Inquiries, Ticket Booking & Travel Delays',
  icon: '🚆',
  estMin: 25,
  objTitle: 'Navigate public transit, book travel tickets, and handle delays',
  objDesc: 'Master transportation vocabulary, train/bus station questions, one-way versus round-trip tickets, departure boards, platform directions, and delay announcements.',
  objHi: 'सार्वजनिक परिवहन की जानकारी लेना, यात्रा टिकट बुक करना और देरी की स्थिति संभालना सीखें।',
  objEs: 'Aprende a consultar sobre transporte público, comprar billetes de viaje y manejar retrasos.',
  canDo: [
    'I can purchase a one-way or round-trip train or bus ticket at a counter or kiosk.',
    'I can ask about platform numbers, departure times, and connecting routes.',
    'I can understand delay announcements and ask for alternate travel options.'
  ],
  canDoHi: [
    'मैं काउंटर या कियोस्क से एकतरफ़ा या राउंड-ट्रिप ट्रेन या बस टिकट खरीद सकता हूँ।',
    'मैं प्लेटफ़ॉर्म नंबर, प्रस्थान समय और कनेक्टिंग मार्गों के बारे में पूछ सकता हूँ।',
    'मैं देरी की घोषणाओं को समझ सकता हूँ और वैकल्पिक यात्रा विकल्पों के बारे में पूछ सकता हूँ।'
  ],
  canDoEs: [
    'Puedo comprar un billete de tren o autobús de ida o ida y vuelta.',
    'Puedo preguntar sobre números de andén, horarios de salida y rutas de conexión.',
    'Puedo entender los anuncios de retrasos y pedir opciones alternativas de viaje.'
  ],
  vocab: [
    { w: 'platform', p: '/ˈplæt.fɔːm/', m: 'the raised area beside the railway tracks where passengers board trains', hi: 'प्लेटफ़ॉर्म', es: 'andén / plataforma', fr: 'quai', de: 'Bahnsteig / Gleis', pt: 'plataforma', zh: '站台', ar: 'رصيف محطة', ja: 'プラットホーム', ru: 'платформа', ex: 'The express train leaves from platform four.', exHi: 'एक्सप्रेस ट्रेन प्लेटफ़ॉर्म नंबर चार से रवाना होती है।', exEs: 'El tren expreso sale del andén cuatro.', ic: '🚉' },
    { w: 'departure', p: '/dɪˈpɑː.tʃər/', m: 'the action of leaving, especially to start a journey', hi: 'प्रस्थान / रवानगी', es: 'salida', fr: 'départ', de: 'Abfahrt / Abflug', pt: 'partida / saída', zh: '出发', ar: 'مغادرة', ja: '出発', ru: 'отправление', ex: 'Check the departure board for any delays.', exHi: 'किसी भी देरी के लिए प्रस्थान बोर्ड देखें।', exEs: 'Consulta el panel de salidas para ver si hay retrasos.', ic: '🛫' },
    { w: 'arrival', p: '/əˈraɪ.vəl/', m: 'the act of reaching a destination', hi: 'आगमन / पहुँचना', es: 'llegada', fr: 'arrivée', de: 'Ankunft', pt: 'chegada', zh: '到达', ar: 'وصول', ja: '到着', ru: 'прибытие', ex: 'The estimated arrival time is 4:45 PM.', exHi: 'अनुमानित आगमन समय शाम 4:45 बजे है।', exEs: 'La hora estimada de llegada es a las 4:45 PM.', ic: '🛬' },
    { w: 'ticket', p: '/ˈtɪk.ɪt/', m: 'a printed or electronic slip giving the right to travel', hi: 'टिकट', es: 'billete / boleto / pasaje', fr: 'billet / ticket', de: 'Fahrkarte / Ticket', pt: 'passagem / bilhete', zh: '车票', ar: 'تذكرة', ja: '切符 / チケット', ru: 'билет', ex: 'Please have your ticket ready for inspection.', exHi: 'कृपया निरीक्षण के लिए अपना टिकट तैयार रखें।', exEs: 'Por favor tenga su billete listo para inspección.', ic: '🎫' },
    { w: 'round-trip', p: '/ˌraʊnd ˈtrɪp/', m: 'a journey to a place and back again', hi: 'आने-जाने का टिकट / राउंड-ट्रिप', es: 'ida y vuelta', fr: 'aller-retour', de: 'Hin- und Rückfahrt', pt: 'ida e volta', zh: '往返', ar: 'ذهاب وإياب', ja: '往復', ru: 'туда и обратно', ex: 'I need two round-trip tickets to Boston.', exHi: 'मुझे बोस्टन के लिए दो आने-जाने के टिकट चाहिए।', exEs: 'Necesito dos billetes de ida y vuelta a Boston.', ic: '🔁' },
    { w: 'one-way', p: '/ˌwʌn ˈweɪ/', m: 'a journey traveling only in one direction', hi: 'एक तरफ़ का टिकट', es: 'solo ida / sencillo', fr: 'aller simple', de: 'Einzelfahrt', pt: 'somente ida', zh: '单程', ar: 'اتجاه واحد', ja: '片道', ru: 'в один конец', ex: 'A one-way ticket costs fifteen dollars.', exHi: 'एक तरफ़ के टिकट की कीमत पंद्रह डॉलर है।', exEs: 'Un billete de ida cuesta quince dólares.', ic: '➡️' },
    { w: 'delay', p: '/dɪˈleɪ/', m: 'a period of unexpected waiting time', hi: 'देरी / विलंब', es: 'retraso / demora', fr: 'retard', de: 'Verspätung', pt: 'atraso', zh: '延误', ar: 'تأخير', ja: '遅延', ru: 'задержка', ex: 'There is a twenty-minute delay due to track maintenance.', exHi: 'ट्रैक रखरखाव के कारण बीस मिनट की देरी है।', exEs: 'Hay un retraso de veinte minutos debido al mantenimiento de las vías.', ic: '⏳' },
    { w: 'passenger', p: '/ˈpæs.ɪn.dʒər/', m: 'a person who is traveling in a vehicle', hi: 'यात्री', es: 'pasajero', fr: 'passager', de: 'Fahrgast / Passagier', pt: 'passageiro', zh: '乘客', ar: 'راكب', ja: '乗客', ru: 'пассажир', ex: 'All passengers must wear seatbelts.', exHi: 'सभी यात्रियों को सीटबेल्ट पहनना अनिवार्य है।', exEs: 'Todos los pasajeros deben usar cinturón de seguridad.', ic: '🧳' },
    { w: 'luggage', p: '/ˈlʌɡ.ɪdʒ/', m: 'suitcases and bags containing personal belongings', hi: 'सामान / लगेज', es: 'equipaje', fr: 'bagages', de: 'Gepäck', pt: 'bagagem', zh: '行李', ar: 'أمتعة', ja: '荷物', ru: 'багаж', ex: 'Store your luggage in the overhead compartment.', exHi: 'अपना सामान ऊपर वाले कम्पार्टमेंट में रखें।', exEs: 'Guarda tu equipaje en el compartimento superior.', ic: '🧳' },
    { w: 'conductor', p: '/kənˈdʌk.tər/', m: 'a person who collects fares or checks tickets on a train', hi: 'कंडक्टर / टिकट जांचकर्ता', es: 'revisor / conductor', fr: 'contrôleur', de: 'Schaffner', pt: 'cobrador / fiscal', zh: '列车员', ar: 'محصل التذاكر', ja: '車掌', ru: 'проводник / кондуктор', ex: 'The conductor checked our tickets.', exHi: 'कंडक्टर ने हमारे टिकटों की जाँच की।', exEs: 'El revisor revisó nuestros billetes.', ic: '👮' },
    { w: 'transfer', p: '/ˈtræns.fɜːr/', m: 'a change from one vehicle or line to another during a journey', hi: 'बदलना / ट्रांसफर', es: 'transbordo / transferencia', fr: 'correspondance / transfert', de: 'Umstieg / Transfer', pt: 'baldeação / conexão', zh: '换乘', ar: 'تبديل الخط', ja: '乗り換え', ru: 'пересадка', ex: 'You must transfer to the red line at Central Station.', exHi: 'आपको सेंट्रल स्टेशन पर रेड लाइन में बदलना होगा।', exEs: 'Debes hacer transbordo a la línea roja en Central Station.', ic: '🔀' },
    { w: 'schedule', p: '/ˈʃedʒ.uːl/', m: 'a timetable showing transport arrival and departure times', hi: 'समय सारणी / समय-तालिका', es: 'horario', fr: 'horaire', de: 'Fahrplan', pt: 'horário / itinerário', zh: '时刻表', ar: 'جدول المواعيد', ja: '時刻表', ru: 'расписание', ex: 'The winter schedule starts on Monday.', exHi: 'सर्दियों का शेड्यूल सोमवार से शुरू हो रहा है।', exEs: 'El horario de invierno comienza el lunes.', ic: '🕒' },
    { w: 'route', p: '/ruːt/', m: 'a way or course taken in getting from a starting point to a destination', hi: 'मार्ग / रूट', es: 'ruta / trayecto', fr: 'itinéraire / trajet', de: 'Route / Strecke', pt: 'rota / trajeto', zh: '路线', ar: 'مسار', ja: 'ルート / 経路', ru: 'маршрут', ex: 'Which bus route goes to the museum?', exHi: 'कौन सा बस मार्ग संग्रहालय तक जाता है?', exEs: '¿Qué ruta de autobús va al museo?', ic: '🗺️' },
    { w: 'express', p: '/ɪkˈspres/', m: 'operating at high speed with few stops', hi: 'एक्सप्रेस / द्रुतगामी', es: 'expreso / directo', fr: 'express', de: 'Express', pt: 'expresso', zh: '特快 / 直达', ar: 'سريع', ja: '急行 / エクスプレス', ru: 'экспресс', ex: 'The express train takes only forty minutes.', exHi: 'एक्सप्रेस ट्रेन में केवल चालीस मिनट लगते हैं।', exEs: 'El tren expreso tarda solo cuarenta minutos.', ic: '🚅' },
    { w: 'local', p: '/ˈləʊ.kəl/', m: 'stopping at all stations along the route', hi: 'लोकल / सभी स्टेशनों पर रुकने वाली', es: 'local / con paradas', fr: 'omnibus / local', de: 'Regionalbahn', pt: 'local / parador', zh: '慢车 / 普快', ar: 'محلي', ja: '各駅停車', ru: 'местный / пригородный', ex: 'The local train stops at every village.', exHi: 'लोकल ट्रेन हर गाँव में रुकती है।', exEs: 'El tren local para en cada pueblo.', ic: '🚃' },
    { w: 'terminal', p: '/ˈtɜː.mɪ.nəl/', m: 'the final destination building of a transport route', hi: 'टर्मिनल', es: 'terminal', fr: 'terminal', de: 'Endstation / Terminal', pt: 'terminal', zh: '终点站 / 航站楼', ar: 'محطة نهائية', ja: '終点 / ターミナル', ru: 'терминал / конечная', ex: 'The bus reaches the South Terminal at six.', exHi: 'बस शाम छह बजे साउथ टर्मिनल पहुँचती है।', exEs: 'El autobús llega a la Terminal Sur a las seis.', ic: '🏢' },
    { w: 'seat', p: '/siːt/', m: 'a place for a passenger to sit', hi: 'सीट / बैठने का स्थान', es: 'asiento', fr: 'siège / place', de: 'Sitzplatz', pt: 'assento / poltrona', zh: '座位', ar: 'مقعد', ja: '座席', ru: 'место / сиденье', ex: 'Is this window seat reserved?', exHi: 'क्या यह खिड़की वाली सीट आरक्षित है?', exEs: '¿Este asiento de ventana está reservado?', ic: '💺' },
    { w: 'board', p: '/bɔːd/', m: 'to get on or enter a train, ship, or aircraft', hi: 'सवार होना / चढ़ना', es: 'embarcar / abordar / subir', fr: 'monter à bord / embarquer', de: 'einsteigen / an Bord gehen', pt: 'embarcar', zh: '登机 / 上车', ar: 'ركوب / صعود', ja: '乗る / 搭乗する', ru: 'садиться / осуществлять посадку', ex: 'Passengers may now board train 42.', exHi: 'यात्री अब ट्रेन 42 पर सवार हो सकते हैं।', exEs: 'Los pasajeros ahora pueden abordar el tren 42.', ic: '🚶' },
    { w: 'fare', p: '/feər/', m: 'the money paid for a journey on public transport', hi: 'किराया', es: 'tarifa / pasaje', fr: 'tarif / prix du billet', de: 'Fahrpreis / Tarif', pt: 'tarifa / passagem', zh: '车费', ar: 'أجرة', ja: '運賃', ru: 'стоимость проезда / тариф', ex: 'What is the subway fare to the airport?', exHi: 'हवाई अड्डे के लिए सबवे का किराया कितना है?', exEs: '¿Cuál es la tarifa del metro al aeropuerto?', ic: '💵' },
    { w: 'announcement', p: '/əˈnaʊns.mənt/', m: 'a formal public statement made over loudspeakers', hi: 'घोषणा / ऐलान', es: 'anuncio por megafonía', fr: 'annonce', de: 'Durchsage', pt: 'anúncio / aviso', zh: '通告 / 广播', ar: 'إعلان', ja: 'アナウンス / 案内放送', ru: 'объявление', ex: 'Listen carefully to the station announcement.', exHi: 'स्टेशन की घोषणा ध्यान से सुनें।', exEs: 'Escuche atentamente el anuncio de la estación.', ic: '📢' }
  ],
  chunks: [
    { phrase: 'Which platform does the train leave from?', meaning: 'Asking for track or platform location', hi: 'ट्रेन किस प्लेटफ़ॉर्म से रवाना होती है?', es: '¿De qué andén sale el tren?', fr: 'De quel quai part le train ?', de: 'Von welchem Gleis fährt der Zug ab?', pt: 'De qual plataforma sai o trem?', zh: '火车从哪个站台出发？', ar: 'من أي رصيف يغادر القطار؟', ja: '電車は何番線から出ますか？', ru: 'С какой платформы отправляется поезд?', note: 'Station navigation question.', ic: '🚉' },
    { phrase: 'a round-trip ticket to...', meaning: 'Purchasing a ticket for travel and return', hi: '... के लिए आने-जाने का टिकट', es: 'un billete de ida y vuelta a...', fr: 'un billet aller-retour pour...', de: 'eine Hin- und Rückfahrkarte nach...', pt: 'uma passagem de ida e volta para...', zh: '去……的往返票', ar: 'تذكرة ذهاب وإياب إلى...', ja: '〜への往復切符', ru: 'билет туда и обратно до...', note: 'Ticketing standard request.', ic: '🎫' },
    { phrase: 'change trains at...', meaning: 'to transfer at an intermediate station', hi: '... पर ट्रेन बदलना', es: 'cambiar de tren en...', fr: 'changer de train à...', de: 'umsteigen in...', pt: 'trocar de trem em...', zh: '在……换乘火车', ar: 'تغيير القطار في...', ja: '〜で電車を乗り換える', ru: 'сделать пересадку на станции...', note: 'Connecting journey instruction.', ic: '🔀' },
    { phrase: 'delayed by... minutes', meaning: 'running late by a specific time length', hi: '... मिनट की देरी से चलना', es: 'retrasado por... minutos', fr: 'retardé de... minutes', de: 'mit... Minuten Verspätung', pt: 'com atraso de... minutos', zh: '晚点……分钟', ar: 'متأخر بمقدار... دقيقة', ja: '〜分遅れて', ru: 'задерживается на... минут', note: 'Delay duration indicator.', ic: '⏳' },
    { phrase: 'on time', meaning: 'arriving or departing exactly at scheduled time', hi: 'समय पर', es: 'a tiempo / puntual', fr: 'à l\'heure', de: 'pünktlich', pt: 'no horário / pontual', zh: '准点', ar: 'في الموعد المحدد', ja: '定刻通り', ru: 'вовремя / по расписанию', note: 'Transit punctuality status.', ic: '⏱️' },
    { phrase: 'miss the connection', meaning: 'failing to catch the next connecting train or flight', hi: 'कनेक्टिंग ट्रेन छूट जाना', es: 'perder la conexión / el transbordo', fr: 'rater la correspondance', de: 'den Anschluss verpassen', pt: 'perder a conexão', zh: '错过换乘车次', ar: 'تفويت رحلة المتابعة', ja: '乗り継ぎに乗り遅れる', ru: 'опоздать на пересадку', note: 'Travel disruption situation.', ic: '🏃' },
    { phrase: 'overhead compartment', meaning: 'the storage shelf above passenger seats', hi: 'सिर के ऊपर वाला कम्पार्टमेंट', es: 'compartimento superior', fr: 'coffre à bagages supérieur', de: 'Gepäckablage', pt: 'compartimento superior de bagagem', zh: '头顶行李架', ar: 'حجيرة الأمتعة العلوية', ja: '頭上の荷物入れ', ru: 'багажная полка', note: 'In-vehicle luggage location.', ic: '🧳' },
    { phrase: 'next stop', meaning: 'the immediately following station on a line', hi: 'अगला स्टेशन / स्टॉप', es: 'próxima parada', fr: 'prochain arrêt', de: 'nächster Halt', pt: 'próxima parada', zh: '下一站', ar: 'المحطة التالية', ja: '次の停車駅', ru: 'следующая остановка', note: 'Transit announcement phrase.', ic: '🛑' }
  ],
  grammar: {
    title: 'WH- Questions with Public Transit & Future Timetables (Present Simple for Schedules)',
    concept: 'Using Present Simple to talk about fixed public transit timetables and forming WH- information questions.',
    patterns: [
      {
        title: 'Present Simple for Official Timetables',
        structure: 'The train / bus / flight + departs / leaves / arrives + at [Time]',
        rule: 'Use Present Simple for scheduled events and public timetables even when referring to future times.',
        examples: [
          { en: 'The express train leaves at 3:15 PM.', hi: 'एक्सप्रेस ट्रेन दोपहर 3:15 बजे रवाना होती है।', es: 'El tren expreso sale a las 3:15 PM.' },
          { en: 'What time does the last bus arrive tonight?', hi: 'आज रात आखिरी बस किस समय आती है?', es: '¿A qué hora llega el último autobús esta noche?' }
        ]
      },
      {
        title: 'WH- Question Formation (Which, What time, Where)',
        structure: 'Which / What + noun + does + subject + verb?',
        rule: 'Invert auxiliary "does/do" and subject after question words.',
        examples: [
          { en: 'Which platform does the train leave from?', hi: 'ट्रेन किस प्लेटफ़ॉर्म से रवाना होती है?', es: '¿De qué andén sale el tren?' },
          { en: 'Where do we transfer for the airport line?', hi: 'हम एयरपोर्ट लाइन के लिए कहाँ बदलते हैं?', es: '¿Dónde hacemos transbordo para la línea del aeropuerto?' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'Which platform the train leaves?', cor: 'Which platform does the train leave from?', exp: 'Public transit questions require the auxiliary "does" and preposition "from".', hi: 'प्रश्न में auxiliary "does" और "from" का प्रयोग आवश्यक है।', es: 'La pregunta requiere el auxiliar "does" y la preposición "from".' },
    { inc: 'I want a two-ways ticket.', cor: 'I would like a round-trip ticket.', exp: 'Use the term "round-trip ticket" (or "return ticket").', hi: '"Round-trip ticket" सही पद है।', es: 'Se dice "round-trip ticket" (o "return ticket").' },
    { inc: 'The train will leave at 5:00 PM every day.', cor: 'The train leaves at 5:00 PM every day.', exp: 'Use Present Simple for recurring scheduled timetables.', hi: 'नियमित समय सारणी के लिए Present Simple का प्रयोग करें।', es: 'Usa Present Simple para horarios regulares fijos.' },
    { inc: 'My luggage are very heavy.', cor: 'My luggage is very heavy.', exp: '"Luggage" is an uncountable noun and takes a singular verb (is).', hi: '"Luggage" अगणनीय संज्ञा है और एकवचन क्रिया (is) लेता है।', es: '"Luggage" es incontable y usa el verbo en singular (is).' },
    { inc: 'The train is delayed with twenty minutes.', cor: 'The train is delayed by twenty minutes.', exp: 'Use the preposition "by" to express the duration of a delay.', hi: 'देरी की अवधि दर्शाने के लिए "by" का प्रयोग करें।', es: 'Usa "by" para indicar la duración de un retraso.' }
  ],
  dialogues: [
    {
      title: 'Buying Train Tickets at the Station',
      context: 'Lucas buys a train ticket to Chicago from the ticket agent.',
      charA: { name: 'Lucas', av: '👨', role: 'Passenger' },
      charB: { name: 'Ticket Agent', av: '👩‍💼', role: 'Station Staff' },
      turns: [
        { spk: 'Ticket Agent', text: 'Next in line, please! Where are you traveling today?', hi: 'लाइन में अगला व्यक्ति, कृपया! आज आप कहाँ यात्रा कर रहे हैं?', es: '¡Siguiente en la fila, por favor! ¿A dónde viaja hoy?' },
        { spk: 'Lucas', text: 'Hello! I would like one round-trip ticket to Chicago, returning on Sunday evening.', hi: 'नमस्ते! मुझे शिकागो के लिए एक राउंड-ट्रिप टिकट चाहिए, जो रविवार शाम को वापस आए।', es: '¡Hola! Me gustaría un billete de ida y vuelta a Chicago, regresando el domingo por la noche.' },
        { spk: 'Ticket Agent', text: 'The next express departure is at 2:30 PM. That will be forty-five dollars, please.', hi: 'अगली एक्सप्रेस रवानगी दोपहर 2:30 बजे है। इसके पैंतालीस डॉलर होंगे, कृपया।', es: 'La próxima salida del expreso es a las 2:30 PM. Serán cuarenta y cinco dólares, por favor.' },
        { spk: 'Lucas', text: 'Here is my credit card. Which platform does the train leave from?', hi: 'यह मेरा क्रेडिट कार्ड है। ट्रेन किस प्लेटफ़ॉर्म से रवाना होती है?', es: 'Aquí tiene mi tarjeta de crédito. ¿De qué andén sale el tren?' },
        { spk: 'Ticket Agent', text: 'It departs from platform six. Have a pleasant trip!', hi: 'यह प्लेटफ़ॉर्म छह से रवाना होती है। आपकी यात्रा सुखद हो!', es: 'Sale del andén seis. ¡Que tenga un buen viaje!' }
      ]
    },
    {
      title: 'Handling a Platform Delay',
      context: 'Lucas asks an information desk agent about a delay announcement.',
      charA: { name: 'Lucas', av: '👨', role: 'Passenger' },
      charB: { name: 'Station Assistant', av: '👨‍✈️', role: 'Information Desk' },
      turns: [
        { spk: 'Lucas', text: 'Excuse me, I just heard the announcement. Is the 2:30 PM train delayed?', hi: 'माफ़ कीजिए, मैंने अभी घोषणा सुनी। क्या दोपहर 2:30 बजे वाली ट्रेन में देरी है?', es: 'Disculpe, acabo de escuchar el anuncio. ¿El tren de las 2:30 PM está retrasado?' },
        { spk: 'Station Assistant', text: 'Yes, it is delayed by approximately twenty minutes due to maintenance on the main track.', hi: 'हाँ, मुख्य ट्रैक पर रखरखाव के कारण इसमें लगभग बीस मिनट की देरी है।', es: 'Sí, tiene un retraso de aproximadamente veinte minutos debido al mantenimiento en la vía principal.' },
        { spk: 'Lucas', text: 'Will I still make my connection in Detroit?', hi: 'क्या मैं अभी भी डेट्रायट में अपनी कनेक्टिंग ट्रेन पकड़ पाऊँगा?', es: '¿Aún alcanzaré mi conexión en Detroit?' },
        { spk: 'Station Assistant', text: 'Yes, don\'t worry. The connecting train in Detroit will wait for all transfer passengers.', hi: 'हाँ, चिंता न करें। डेट्रायट में कनेक्टिंग ट्रेन सभी ट्रांसफर यात्रियों का इंतज़ार करेगी।', es: 'Sí, no se preocupe. El tren de conexión en Detroit esperará a todos los pasajeros de transbordo.' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u05_l64_p1', lessonId: 'lesson_a1_5_64', stage: 8, type: 'multiple_choice', prompt: 'Choose the correct question: "___ does the express train leave from?"', options: [{ id: 'o1', text: 'Which platform', isCorrect: true }, { id: 'o2', text: 'Who baggage', isCorrect: false }, { id: 'o3', text: 'Why ticket', isCorrect: false }] },
    { id: 'ex_u05_l64_p2', lessonId: 'lesson_a1_5_64', stage: 8, type: 'fill_blank', prompt: 'Complete the sentence with the correct timetable verb:', sentenceTemplate: 'The morning flight ___ at 8:15 AM every weekday.', sourceSentence: 'The morning flight ___ at 8:15 AM every weekday.', options: [{ id: 'o1', text: 'departs', isCorrect: true }, { id: 'o2', text: 'is depart', isCorrect: false }, { id: 'o3', text: 'departing', isCorrect: false }] },
    { id: 'ex_u05_l64_p3', lessonId: 'lesson_a1_5_64', stage: 8, type: 'word_ordering', prompt: 'Arrange the words to form a ticket booking request:', wordBank: ['I', 'need', 'two', 'round-trip', 'tickets', 'to', 'Chicago.'], targetSentence: 'I need two round-trip tickets to Chicago.' },
    { id: 'ex_u05_l64_p4', lessonId: 'lesson_a1_5_64', stage: 8, type: 'match_pairs', prompt: 'Match transit terms with their definitions:', pairs: [{ left: 'platform', right: 'train boarding area' }, { left: 'round-trip', right: 'ticket to destination and back' }, { left: 'transfer', right: 'change lines' }, { left: 'delayed by', right: 'late by specified duration' }] },
    { id: 'ex_u05_l64_p5', lessonId: 'lesson_a1_5_64', stage: 8, type: 'error_correction', prompt: 'Identify the corrected sentence:', sentenceTemplate: 'The train is delayed with fifteen minutes.', options: [{ id: 'o1', text: 'The train is delayed by fifteen minutes.', isCorrect: true }, { id: 'o2', text: 'The train is delayed on fifteen minutes.', isCorrect: false }, { id: 'o3', text: 'The train is delayed at fifteen minutes.', isCorrect: false }] },
    { id: 'ex_u05_l64_p6', lessonId: 'lesson_a1_5_64', stage: 9, type: 'listening', prompt: 'Listen and choose the sentence you hear:', audioText: 'The express train to Boston leaves from platform seven.', options: [{ id: 'o1', text: 'The express train to Boston leaves from platform seven.', isCorrect: true }, { id: 'o2', text: 'The local bus to Boston arrives at platform seven.', isCorrect: false }] },
    { id: 'ex_u05_l64_p7', lessonId: 'lesson_a1_5_64', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'Where do we transfer for the airport line?', targetSentence: 'Where do we transfer for the airport line?' },
    { id: 'ex_u05_l64_p8', lessonId: 'lesson_a1_5_64', stage: 10, type: 'multiple_choice', prompt: 'Which question correctly asks about arrival time?', options: [{ id: 'o1', text: 'What time does the bus arrive at the terminal?', isCorrect: true }, { id: 'o2', text: 'What time the bus is arrive?', isCorrect: false }, { id: 'o3', text: 'Does bus arrive what time?', isCorrect: false }] },
    { id: 'ex_u05_l64_p9', lessonId: 'lesson_a1_5_64', stage: 11, type: 'dialogue_completion', prompt: 'Complete the dialogue: "Excuse me, which platform does the 10:00 AM train leave from?"', options: [{ id: 'o1', text: 'It departs from platform four on the lower level.', isCorrect: true }, { id: 'o2', text: 'I ate breakfast at eight.', isCorrect: false }, { id: 'o3', text: 'The sky is blue today.', isCorrect: false }] },
    { id: 'ex_u05_l64_p10', lessonId: 'lesson_a1_5_64', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'I would like to buy a one-way ticket to Central Station.', audioText: 'I would like to buy a one-way ticket to Central Station.' },
    { id: 'ex_u05_l64_p11', lessonId: 'lesson_a1_5_64', stage: 13, type: 'translation', prompt: 'Translate: "ट्रेन पंद्रह मिनट की देरी से चल रही है।" / "El tren está retrasado quince minutos."', targetSentence: 'The train is delayed by fifteen minutes.' },
    { id: 'ex_u05_l64_p12', lessonId: 'lesson_a1_5_64', stage: 14, type: 'multiple_choice', prompt: 'What is the place where bags are stored overhead on a train or bus?', options: [{ id: 'o1', text: 'overhead compartment', isCorrect: true }, { id: 'o2', text: 'ticket counter', isCorrect: false }, { id: 'o3', text: 'fare box', isCorrect: false }] },
    { id: 'ex_u05_l64_p13', lessonId: 'lesson_a1_5_64', stage: 14, type: 'fill_blank', prompt: 'Complete the sentence: "Please place your heavy ___ under the seat."', sentenceTemplate: 'Please place your heavy ___ under the seat.', sourceSentence: 'Please place your heavy ___ under the seat.', options: [{ id: 'o1', text: 'luggage', isCorrect: true }, { id: 'o2', text: 'schedule', isCorrect: false }, { id: 'o3', text: 'terminal', isCorrect: false }] },
    { id: 'ex_u05_l64_p14', lessonId: 'lesson_a1_5_64', stage: 14, type: 'word_ordering', prompt: 'Arrange the words to form a polite question:', wordBank: ['Is', 'this', 'window', 'seat', 'available', 'or', 'reserved?'], targetSentence: 'Is this window seat available or reserved?' },
    { id: 'ex_u05_l64_p15', lessonId: 'lesson_a1_5_64', stage: 14, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'All passengers for train 52 must proceed to platform three immediately.', audioText: 'All passengers for train 52 must proceed to platform three immediately.' }
  ],
  review: [
    { id: 'ex_u05_l64_r1', lessonId: 'lesson_a1_5_64', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Choose the correct preposition for appointments: "The meeting is ___ Wednesday."', options: [{ id: 'o1', text: 'on', isCorrect: true }, { id: 'o2', text: 'at', isCorrect: false }, { id: 'o3', text: 'in', isCorrect: false }] },
    { id: 'ex_u05_l64_r2', lessonId: 'lesson_a1_5_64', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete: "I would like to make an ___ with the doctor."', sentenceTemplate: 'I would like to make an ___ with the doctor.', sourceSentence: 'I would like to make an ___ with the doctor.', options: [{ id: 'o1', text: 'appointment', isCorrect: true }, { id: 'o2', text: 'extension', isCorrect: false }, { id: 'o3', text: 'agenda', isCorrect: false }] },
    { id: 'ex_u05_l64_r3', lessonId: 'lesson_a1_5_64', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['May', 'I', 'speak', 'to', 'the', 'manager', 'please?'], targetSentence: 'May I speak to the manager please?' },
    { id: 'ex_u05_l64_r4', lessonId: 'lesson_a1_5_64', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match phrases:', pairs: [{ left: 'on track', right: 'following timeline' }, { left: 'voicemail', right: 'recorded audio message' }, { left: 'reschedule', right: 'change date/time' }, { left: 'platform', right: 'boarding track' }] },
    { id: 'ex_u05_l64_r5', lessonId: 'lesson_a1_5_64', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "ट्रेन किस प्लेटफ़ॉर्म से निकलती है?"', targetSentence: 'Which platform does the train leave from?' }
  ],
  assessment: [
    { id: 'ex_u05_l64_a1', lessonId: 'lesson_a1_5_64', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the grammatically correct transit statement:', options: [{ id: 'o1', text: 'The express train departs from platform two at four thirty.', isCorrect: true }, { id: 'o2', text: 'The express train depart from platform two in four thirty.', isCorrect: false }, { id: 'o3', text: 'The express train is depart platform two on four thirty.', isCorrect: false }] },
    { id: 'ex_u05_l64_a2', lessonId: 'lesson_a1_5_64', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete: "We must ___ trains at Central Station to reach the airport."', sentenceTemplate: 'We must ___ trains at Central Station to reach the airport.', sourceSentence: 'We must ___ trains at Central Station to reach the airport.', options: [{ id: 'o1', text: 'change', isCorrect: true }, { id: 'o2', text: 'hold', isCorrect: false }, { id: 'o3', text: 'dial', isCorrect: false }] },
    { id: 'ex_u05_l64_a3', lessonId: 'lesson_a1_5_64', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words correctly:', wordBank: ['The', 'conductor', 'checked', 'all', 'passenger', 'tickets', 'on', 'board.'], targetSentence: 'The conductor checked all passenger tickets on board.' },
    { id: 'ex_u05_l64_a4', lessonId: 'lesson_a1_5_64', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Choose the best passenger query:', options: [{ id: 'o1', text: 'Excuse me, is this the local train or the express to New York?', isCorrect: true }, { id: 'o2', text: 'Is this the cold water bottle?', isCorrect: false }, { id: 'o3', text: 'Where is my pencil yesterday?', isCorrect: false }] },
    { id: 'ex_u05_l64_a5', lessonId: 'lesson_a1_5_64', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this transit announcement sentence clearly:', targetSentence: 'Attention passengers, the express train on platform five is now boarding for all destinations.', audioText: 'Attention passengers, the express train on platform five is now boarding for all destinations.' }
  ]
};

// =========================================================================
// LESSON 65: Hotel Stays, Check-In, Room Amenities & Special Requests
// =========================================================================
export const CONFIG_65: LessonConfig = {
  num: 65,
  title: 'Hotel Stays, Check-In, Room Amenities & Special Requests',
  icon: '🏨',
  estMin: 25,
  objTitle: 'Check in at hotels, request amenities, and report room preferences',
  objDesc: 'Learn hotel vocabulary, front desk greetings, key card instructions, requesting extra towels/pillows, asking for Wi-Fi passwords, and requesting late checkout.',
  objHi: 'होटल में चेक-इन करना, कमरे की सुविधाओं का अनुरोध करना और विशेष प्राथमिकताएं बताना सीखें।',
  objEs: 'Aprende a registrarte en hoteles, solicitar comodidades y gestionar peticiones especiales en recepción.',
  canDo: [
    'I can check in and check out at a hotel reception desk.',
    'I can request room amenities like extra pillows, towels, or Wi-Fi passwords.',
    'I can ask about breakfast times, hotel facilities, and late checkout.'
  ],
  canDoHi: [
    'मैं होटल रिसेप्शन डेस्क पर चेक-इन और चेक-आउट कर सकता हूँ।',
    'मैं अतिरिक्त तकिए, तौलिये या वाई-फ़ाई पासवर्ड जैसी सुविधाओं का अनुरोध कर सकता हूँ।',
    'मैं नाश्ते के समय, होटल की सुविधाओं और लेट चेक-आउट के बारे में पूछ सकता हूँ।'
  ],
  canDoEs: [
    'Puedo hacer el check-in y el check-out en la recepción del hotel.',
    'Puedo solicitar comodidades como almohadas extra, toallas o contraseñas de Wi-Fi.',
    'Puedo preguntar por los horarios de desayuno, instalaciones del hotel y salida tardía.'
  ],
  vocab: [
    { w: 'reservation', p: '/ˌrez.əˈveɪ.ʃən/', m: 'an arrangement to have a room or seat held for one\'s use', hi: 'आरक्षण / बुकिंग', es: 'reserva', fr: 'réservation', de: 'Reservierung / Buchung', pt: 'reserva', zh: '预订', ar: 'حجز', ja: '予約', ru: 'бронирование', ex: 'I have a reservation under the name Wilson.', exHi: 'विल्सन नाम से मेरी बुकिंग है।', exEs: 'Tengo una reserva a nombre de Wilson.', ic: '📋' },
    { w: 'check-in', p: '/ˈtʃek.ɪn/', m: 'the process of arriving and registering at a hotel', hi: 'चेक-इन / आगमन पंजीकरण', es: 'registro / check-in', fr: 'enregistrement / check-in', de: 'Einchecken / Check-in', pt: 'check-in / entrada', zh: '办理入住', ar: 'تسجيل الوصول', ja: 'チェックイン', ru: 'регистрация / заезд', ex: 'Check-in begins at 3:00 PM.', exHi: 'चेक-इन दोपहर 3:00 बजे शुरू होता है।', exEs: 'El check-in comienza a las 3:00 PM.', ic: '🛎️' },
    { w: 'check-out', p: '/ˈtʃek.aʊt/', m: 'the process of settling one\'s bill and leaving a hotel', hi: 'चेक-आउट / विदाई पंजीकरण', es: 'salida / check-out', fr: 'départ / check-out', de: 'Ausschecken / Check-out', pt: 'check-out / saída', zh: '退房', ar: 'تسجيل المغادرة', ja: 'チェックアウト', ru: 'выезд', ex: 'Check-out is at eleven in the morning.', exHi: 'चेक-आउट सुबह ग्यारह बजे है।', exEs: 'El check-out es a las once de la mañana.', ic: '🧳' },
    { w: 'keycard', p: '/ˈkiː.kɑːd/', m: 'a plastic card with encoded data used to unlock a hotel door', hi: 'की-कार्ड / डिजिटल चाबी', es: 'tarjeta llave', fr: 'carte-clé', de: 'Schlüsselkarte', pt: 'cartão-chave', zh: '房卡', ar: 'بطاقة المفتاح', ja: 'カードキー', ru: 'электронный ключ-карта', ex: 'Here is your electronic room keycard.', exHi: 'यह आपका इलेक्ट्रॉनिक रूम की-कार्ड है।', exEs: 'Aquí tiene su tarjeta llave electrónica.', ic: '💳' },
    { w: 'amenity', p: '/əˈmiː.nə.ti/', m: 'a desirable or useful feature of a facility', hi: 'सुविधा', es: 'comodidad / servicio', fr: 'équipement / commodité', de: 'Annehmlichkeit / Ausstattung', pt: 'comodidade / conveniência', zh: '便利设施', ar: 'مرفق / وسيلة راحة', ja: 'アメニティ / 設備', ru: 'удобство', ex: 'The hotel offers complimentary gym amenities.', exHi: 'होटल निःशुल्क जिम की सुविधाएं प्रदान करता है।', exEs: 'El hotel ofrece comodidades gratuitas como gimnasio.', ic: '✨' },
    { w: 'towel', p: '/taʊəl/', m: 'an absorbent piece of cloth used for drying', hi: 'तौलिया', es: 'toalla', fr: 'serviette', de: 'Handtuch', pt: 'toalha', zh: '毛巾', ar: 'منشفة', ja: 'タオル', ru: 'полотенце', ex: 'Could we get two extra bath towels, please?', exHi: 'क्या हमें दो अतिरिक्त नहाने के तौलिये मिल सकते हैं?', exEs: '¿Podríamos tener dos toallas de baño adicionales, por favor?', ic: '🧖' },
    { w: 'pillow', p: '/ˈpɪl.əʊ/', m: 'a cushion that supports the head when sleeping', hi: 'तकिया', es: 'almohada', fr: 'oreiller', de: 'Kissen / Kopfkissen', pt: 'travesseiro', zh: '枕头', ar: 'وسادة', ja: '枕', ru: 'подушка', ex: 'May I have a firmer pillow?', exHi: 'क्या मुझे एक सख्त तकिया मिल सकता है?', exEs: '¿Podría darme una almohada más firme?', ic: '🛏️' },
    { w: 'blanket', p: '/ˈblæŋ.kɪt/', m: 'a warm woolen or cotton bed covering', hi: 'कंबल', es: 'manta / cobija', fr: 'couverture', de: 'Decke', pt: 'cobertor', zh: '毯子', ar: 'بطانية', ja: '毛布', ru: 'одеяло', ex: 'We need an extra blanket tonight.', exHi: 'हमें आज रात एक अतिरिक्त कंबल की आवश्यकता है।', exEs: 'Necesitamos una manta adicional esta noche.', ic: '🛋️' },
    { w: 'reception', p: '/rɪˈsep.ʃən/', m: 'the main desk in a hotel where guests register', hi: 'रिसेप्शन', es: 'recepción', fr: 'réception', de: 'Rezeption', pt: 'recepção', zh: '前台', ar: 'الاستقبال', ja: 'フロント / 受付', ru: 'ресепшн / стойка регистрации', ex: 'The reception desk is open 24 hours.', exHi: 'रिसेप्शन डेस्क 24 घंटे खुला रहता है।', exEs: 'La recepción está abierta las 24 horas.', ic: '🛎️' },
    { w: 'elevator', p: '/ˈel.ɪ.veɪ.tər/', m: 'a lift for carrying people between floors', hi: 'लिफ़्ट', es: 'ascensor / elevador', fr: 'ascenseur', de: 'Aufzug / Fahrstuhl', pt: 'elevador', zh: '电梯', ar: 'مصعد', ja: 'エレベーター', ru: 'лифт', ex: 'The elevators are located past the lobby.', exHi: 'लिफ़्ट लॉबी के आगे स्थित हैं।', exEs: 'Los ascensores están ubicados pasando el vestíbulo.', ic: '🛗' },
    { w: 'lobby', p: '/ˈlɒb.i/', m: 'a large entrance hall in a hotel', hi: 'होटल की लॉबी', es: 'vestíbulo / lobby', fr: 'hall d\'entrée / lobby', de: 'Lobby / Eingangshalle', pt: 'saguão / lobby', zh: '大堂', ar: 'بهو الفندق', ja: 'ロビー', ru: 'вестибюль / лобби', ex: 'Let us meet in the hotel lobby at seven.', exHi: 'आइए सात बजे होटल की लॉबी में मिलते हैं।', exEs: 'Reunámonos en el lobby del hotel a las siete.', ic: '🏨' },
    { w: 'breakfast', p: '/ˈbrek.fəst/', m: 'the first meal of the day', hi: 'नाश्ता', es: 'desayuno', fr: 'petit-déjeuner', de: 'Frühstück', pt: 'café da manhã', zh: '早餐', ar: 'إفطار', ja: '朝食', ru: 'завтрак', ex: 'Is breakfast included in our room rate?', exHi: 'क्या हमारे कमरे के किराए में नाश्ता शामिल है?', exEs: '¿El desayuno está incluido en la tarifa de la habitación?', ic: '🥐' },
    { w: 'included', p: '/ɪnˈkluː.dɪd/', m: 'contained as part of a whole service or price', hi: 'शामिल', es: 'incluido', fr: 'inclus', de: 'inbegriffen / inklusive', pt: 'incluído', zh: '包含在内', ar: 'مشمول', ja: '含まれている', ru: 'включено', ex: 'Wi-Fi is included for all hotel guests.', exHi: 'सभी होटल मेहमानों के लिए वाई-फ़ाई शामिल है।', exEs: 'El Wi-Fi está incluido para todos los huéspedes del hotel.', ic: '✔️' },
    { w: 'housekeeping', p: '/ˈhaʊsˌkiː.pɪŋ/', m: 'the department that cleans hotel rooms', hi: 'हाउसकीपिंग / कमरे की सफ़ाई विभाग', es: 'servicio de habitaciones / limpieza', fr: 'service d\'étage / ménage', de: 'Zimmerservice / Reinigung', pt: 'governança / serviço de limpeza', zh: '客房清洁服务', ar: 'خدمة تنظيف الغرف', ja: '客室清掃 / ハウスキーピング', ru: 'уборка номеров / клининг', ex: 'Housekeeping cleans the rooms daily.', exHi: 'हाउसकीपिंग रोज़ाना कमरों की सफ़ाई करती है।', exEs: 'El servicio de limpieza limpia las habitaciones a diario.', ic: '🧹' },
    { w: 'room service', p: '/ˈruːm ˌsɜː.vɪs/', m: 'provision of food and drinks served in a hotel room', hi: 'रूम सर्विस', es: 'servicio a la habitación', fr: 'service en chambre', de: 'Zimmerservice', pt: 'serviço de quarto', zh: '客房送餐服务', ar: 'خدمة الغرف', ja: 'ルームサービス', ru: 'обслуживание номеров', ex: 'We ordered dinner from room service.', exHi: 'हमने रूम सर्विस से रात का खाना मंगवाया।', exEs: 'Pedimos la cena al servicio a la habitación.', ic: '🍽️' },
    { w: 'floor', p: '/flɔːr/', m: 'a level in a multi-story building', hi: 'मंजिल', es: 'piso / planta', fr: 'étage', de: 'Stockwerk / Etage', pt: 'andar / piso', zh: '楼层', ar: 'طابق', ja: '階', ru: 'этаж', ex: 'Our room is on the fifth floor.', exHi: 'हमारा कमरा पाँचवीं मंजिल पर है।', exEs: 'Nuestra habitación está en el quinto piso.', ic: '🏢' },
    { w: 'luggage', p: '/ˈlʌɡ.ɪdʒ/', m: 'bags and suitcases', hi: 'सामान', es: 'equipaje', fr: 'bagages', de: 'Gepäck', pt: 'bagagem', zh: '行李', ar: 'أمتعة', ja: '荷物', ru: 'багаж', ex: 'Can you store our luggage after check-out?', exHi: 'क्या आप चेक-आउट के बाद हमारा सामान रख सकते हैं?', exEs: '¿Pueden guardar nuestro equipaje después del check-out?', ic: '🧳' },
    { w: 'balcony', p: '/ˈbæl.kə.ni/', m: 'an outdoor platform projecting from an upper floor wall', hi: 'बालकनी', es: 'balcón', fr: 'balcon', de: 'Balkon', pt: 'varanda / sacada', zh: '阳台', ar: 'شرفة', ja: 'バルコニー', ru: 'балкон', ex: 'The room has a private balcony with ocean views.', exHi: 'कमरे में समुद्र के दृश्य वाली एक निजी बालकनी है।', exEs: 'La habitación tiene un balcón privado con vistas al mar.', ic: '🌅' },
    { w: 'quiet', p: '/ˈkwaɪ.ət/', m: 'making little or no noise', hi: 'शांत', es: 'tranquilo / silencioso', fr: 'calme / silencieux', de: 'ruhig', pt: 'silencioso / tranquilo', zh: '安静的', ar: 'هادئ', ja: '静かな', ru: 'тихий', ex: 'Could we have a quiet room away from the elevator?', exHi: 'क्या हमें लिफ्ट से दूर एक शांत कमरा मिल सकता है?', exEs: '¿Podríamos tener una habitación tranquila lejos del ascensor?', ic: '🤫' },
    { w: 'password', p: '/ˈpɑːs.wɜːd/', m: 'a secret string of characters for network access', hi: 'पासवर्ड', es: 'contraseña', fr: 'mot de passe', de: 'Passwort', pt: 'senha', zh: '密码', ar: 'كلمة المرور', ja: 'パスワード', ru: 'пароль', ex: 'What is the Wi-Fi password for guests?', exHi: 'मेहमानों के लिए वाई-फ़ाई पासवर्ड क्या है?', exEs: '¿Cuál es la contraseña del Wi-Fi para los huéspedes?', ic: '🔑' }
  ],
  chunks: [
    { phrase: 'I have a reservation under the name...', meaning: 'Stating booking name upon arrival', hi: 'मेरी ... नाम से एक बुकिंग है', es: 'Tengo una reserva a nombre de...', fr: 'J\'ai une réservation au nom de...', de: 'Ich habe eine Reservierung auf den Namen...', pt: 'Tenho uma reserva em nome de...', zh: '我以……的名字预订了房间', ar: 'لدي حجز باسم...', ja: '〜の名前で予約しています', ru: 'У меня бронь на имя...', note: 'Front desk check-in opening.', ic: '🛎️' },
    { phrase: 'Could we have extra...?', meaning: 'Polite request for room supplies', hi: 'क्या हमें अतिरिक्त ... मिल सकते हैं?', es: '¿Podríamos tener más...?', fr: 'Pourrions-nous avoir des ... supplémentaires ?', de: 'Könnten wir zusätzliche ... haben?', pt: 'Poderíamos ter mais...?', zh: '我们可以多要一些……吗？', ar: 'هل يمكننا الحصول على... إضافي؟', ja: '追加の〜をいただけますか？', ru: 'Не могли бы мы получить дополнительные...?', note: 'Guest amenities request.', ic: '🛏️' },
    { phrase: 'request a late check-out', meaning: 'Asking for permission to leave room later than standard time', hi: 'देर से चेक-आउट का अनुरोध करना', es: 'solicitar salida tardía / late check-out', fr: 'demander un départ tardif', de: 'einen späten Check-out anfragen', pt: 'solicitar check-out tardio', zh: '申请延迟退房', ar: 'طلب تسجيل مغادرة متأخر', ja: 'レイトチェックアウトをリクエストする', ru: 'запросить поздний выезд', note: 'Flexible stay request.', ic: '⏰' },
    { phrase: 'Is breakfast included?', meaning: 'Asking if morning meal is covered in room price', hi: 'क्या नाश्ता शामिल है?', es: '¿El desayuno está incluido?', fr: 'Le petit-déjeuner est-il inclus ?', de: 'Ist das Frühstück inbegriffen?', pt: 'O café da manhã está incluído?', zh: '包含早餐吗？', ar: 'هل الإفطار مشمول؟', ja: '朝食は含まれていますか？', ru: 'Завтрак включен?', note: 'Key hotel cost question.', ic: '🥐' },
    { phrase: 'What is the Wi-Fi password?', meaning: 'Asking for internet connection credentials', hi: 'वाई-फ़ाई पासवर्ड क्या है?', es: '¿Cuál es la contraseña del Wi-Fi?', fr: 'Quel est le mot de passe du Wi-Fi ?', de: 'Wie lautet das WLAN-Passwort?', pt: 'Qual é a senha do Wi-Fi?', zh: '无线网络密码是什么？', ar: 'ما هي كلمة مرور الواي فاي؟', ja: 'Wi-Fiのパスワードは何ですか？', ru: 'Какой пароль от Wi-Fi?', note: 'Digital access question.', ic: '📶' },
    { phrase: 'store our luggage', meaning: 'to leave bags at front desk temporarily before check-in or after check-out', hi: 'सामान सुरक्षित रखवाना', es: 'guardar nuestro equipaje', fr: 'garder nos bagages', de: 'unser Gepäck aufbewahren', pt: 'guardar nossa bagagem', zh: '寄存我们的行李', ar: 'تخزين أمتعتنا', ja: '荷物を預ける', ru: 'оставить наш багаж на хранение', note: 'Luggage holding service.', ic: '🧳' },
    { phrase: 'fill out this registration form', meaning: 'completing personal information upon arrival', hi: 'यह पंजीकरण फ़ॉर्म भरें', es: 'completar este formulario de registro', fr: 'remplir ce formulaire d\'enregistrement', de: 'dieses Anmeldeformular ausfüllen', pt: 'preencher este formulário de registro', zh: '填写这份入住登记表', ar: 'ملء استمارة التسجيل هذه', ja: 'この宿泊カードにご記入ください', ru: 'заполнить эту регистрационную форму', note: 'Check-in procedure instruction.', ic: '✍️' },
    { phrase: 'on the fifth floor', meaning: 'specifying floor location', hi: 'पाँचवीं मंजिल पर', es: 'en el quinto piso', fr: 'au cinquième étage', de: 'im fünften Stock', pt: 'no quinto andar', zh: '在五楼', ar: 'في الطابق الخامس', ja: '5階に', ru: 'на пятом этаже', note: 'Floor level preposition pattern.', ic: '🏢' }
  ],
  grammar: {
    title: 'Polite Requests with "Could we have..." & Ordinal Numbers for Floor Locations (on the 1st, 2nd, 3rd floor)',
    concept: 'Using polite modals for service requests and ordinal numbers with preposition "on" for building levels.',
    patterns: [
      {
        title: 'Could we have + noun phrase + please?',
        structure: 'Could we have + extra towels / two keycards / a quiet room, please?',
        rule: 'Use "Could we have..." to formulate polite requests for hospitality items.',
        examples: [
          { en: 'Could we have two extra pillows, please?', hi: 'क्या हमें दो अतिरिक्त तकिए मिल सकते हैं?', es: '¿Podríamos tener dos almohadas adicionales, por favor?' },
          { en: 'Could we have a late check-out at 1:00 PM?', hi: 'क्या हमें दोपहर 1:00 बजे लेट चेक-आउट मिल सकता है?', es: '¿Podríamos tener una salida tardía a la 1:00 PM?' }
        ]
      },
      {
        title: 'Ordinal Numbers & Floor Locations: on + the + Ordinal + floor',
        structure: 'on the first / second / third / fourth / fifth floor',
        rule: 'Always use "on the" with ordinal numbers when referring to building levels.',
        examples: [
          { en: 'Your room is on the third floor on the left.', hi: 'आपका कमरा तीसरी मंजिल पर बाईं ओर है।', es: 'Su habitación está en el tercer piso a la izquierda.' },
          { en: 'The fitness center is on the second floor.', hi: 'फिटनेस सेंटर दूसरी मंजिल पर है।', es: 'El gimnasio está en el segundo piso.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'Our room is in the three floor.', cor: 'Our room is on the third floor.', exp: 'Use "on the" with ordinal numbers (third floor, not three floor).', hi: 'मंजिल के लिए "on the third floor" का प्रयोग करें।', es: 'Usa "on the third floor" con números ordinales.' },
    { inc: 'I have a reservation on the name Wilson.', cor: 'I have a reservation under the name Wilson.', exp: 'Use "under the name" for hotel and restaurant bookings.', hi: 'बुकिंग के लिए "under the name" सही पद है।', es: 'Las reservas se hacen "under the name".' },
    { inc: 'Can you give me more towels please?', cor: 'Could we have extra towels, please?', exp: 'Use "Could we have..." for polite hospitality requests.', hi: 'विनम्र अनुरोध के लिए "Could we have..." का प्रयोग करें।', es: 'Usa "Could we have..." para mayor cortesía en hoteles.' },
    { inc: 'Is breakfast include in the price?', cor: 'Is breakfast included in the price?', exp: 'Use the past participle "included" as an adjective.', hi: 'विशेषण के रूप में "included" का प्रयोग करें।', es: 'Usa el participio "included".' },
    { inc: 'Please give to me the Wi-Fi code.', cor: 'Could you give me the Wi-Fi password, please?', exp: 'Omit "to" in "give me" and use polite modal question.', hi: '"give me" में "to" का प्रयोग न करें।', es: 'No uses "to" después de "give me".' }
  ],
  dialogues: [
    {
      title: 'Checking In at Grand Harbor Hotel',
      context: 'Sarah arrives at the hotel front desk to check in.',
      charA: { name: 'Front Desk Agent', av: '👨‍💼', role: 'Receptionist' },
      charB: { name: 'Sarah', av: '👩', role: 'Hotel Guest' },
      turns: [
        { spk: 'Front Desk Agent', text: 'Good afternoon, welcome to the Grand Harbor Hotel. How can I assist you?', hi: 'शुभ दोपहर, ग्रैंड हार्बर होटल में आपका स्वागत है। मैं आपकी क्या मदद कर सकता हूँ?', es: 'Buenas tardes, bienvenido al Grand Harbor Hotel. ¿En qué puedo asistirle?' },
        { spk: 'Sarah', text: 'Hello! I have a reservation for three nights under the name Sarah Jenkins.', hi: 'नमस्ते! सारा जेनकिंस के नाम से मेरी तीन रातों के लिए बुकिंग है।', es: '¡Hola! Tengo una reserva por tres noches a nombre de Sarah Jenkins.' },
        { spk: 'Front Desk Agent', text: 'Welcome, Ms. Jenkins! Here are your keycards. Your room is 408 on the fourth floor, overlooking the garden.', hi: 'स्वागत है, सुश्री जेनकिंस! ये रहे आपके की-कार्ड। आपका कमरा 408 चौथी मंजिल पर है, जहाँ से बगीचा दिखता है।', es: '¡Bienvenida, Sra. Jenkins! Aquí tiene sus tarjetas llave. Su habitación es la 408 en el cuarto piso, con vista al jardín.' },
        { spk: 'Sarah', text: 'Wonderful! What time is breakfast served in the morning?', hi: 'बहुत बढ़िया! सुबह नाश्ता किस समय परोसा जाता है?', es: '¡Maravilloso! ¿A qué hora se sirve el desayuno por la mañana?' },
        { spk: 'Front Desk Agent', text: 'Complimentary buffet breakfast is served in the main dining room from 6:30 to 10:00 AM.', hi: 'निःशुल्क बुफे नाश्ता मुख्य भोजन कक्ष में सुबह 6:30 से 10:00 बजे तक परोसा जाता है।', es: 'El desayuno buffet gratuito se sirve en el comedor principal de 6:30 a 10:00 AM.' }
      ]
    },
    {
      title: 'Calling Front Desk for Amenities',
      context: 'Sarah calls reception from her room phone for extra items.',
      charA: { name: 'Front Desk', av: '👨‍💼', role: 'Front Desk' },
      charB: { name: 'Sarah', av: '👩', role: 'Guest' },
      turns: [
        { spk: 'Front Desk', text: 'Front desk, how may I help you today?', hi: 'फ्रंट डेस्क, आज मैं आपकी क्या सेवा कर सकता हूँ?', es: 'Recepción, ¿en qué puedo ayudarle hoy?' },
        { spk: 'Sarah', text: 'Hello, this is Sarah from room 408. Could we have two extra bath towels and an extra blanket, please?', hi: 'नमस्ते, मैं कमरा 408 से सारा बोल रही हूँ। क्या हमें दो अतिरिक्त नहाने के तौलिये और एक कंबल मिल सकता है?', es: 'Hola, habla Sarah de la habitación 408. ¿Podríamos tener dos toallas de baño extra y una manta adicional, por favor?' },
        { spk: 'Front Desk', text: 'Certainly, Ms. Jenkins. Housekeeping will bring them up to your room right away.', hi: 'निश्चित रूप से, सुश्री जेनकिंस। हाउसकीपिंग तुरंत आपके कमरे में ये वस्तुएं पहुंचा देगी।', es: 'Por supuesto, Sra. Jenkins. El servicio de habitaciones se los llevará a su habitación de inmediato.' },
        { spk: 'Sarah', text: 'Thank you so much! Also, could we request a late check-out for Sunday?', hi: 'बहुत-बहुत धन्यवाद! साथ ही, क्या हम रविवार के लिए लेट चेक-आउट का अनुरोध कर सकते हैं?', es: '¡Muchas gracias! Además, ¿podríamos solicitar una salida tardía para el domingo?' },
        { spk: 'Front Desk', text: 'Yes, we can extend your check-out until 1:00 PM at no extra charge.', hi: 'हाँ, हम बिना किसी अतिरिक्त शुल्क के आपका चेक-आउट दोपहर 1:00 बजे तक बढ़ा सकते हैं।', es: 'Sí, podemos extender su salida hasta la 1:00 PM sin cargo adicional.' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u05_l65_p1', lessonId: 'lesson_a1_5_65', stage: 8, type: 'multiple_choice', prompt: 'Select the correct preposition: "Our room is located ___ the fourth floor."', options: [{ id: 'o1', text: 'on', isCorrect: true }, { id: 'o2', text: 'at', isCorrect: false }, { id: 'o3', text: 'in', isCorrect: false }] },
    { id: 'ex_u05_l65_p2', lessonId: 'lesson_a1_5_65', stage: 8, type: 'fill_blank', prompt: 'Complete the polite check-in sentence:', sentenceTemplate: 'I have a reservation ___ the name Sarah Jenkins.', sourceSentence: 'I have a reservation ___ the name Sarah Jenkins.', options: [{ id: 'o1', text: 'under', isCorrect: true }, { id: 'o2', text: 'over', isCorrect: false }, { id: 'o3', text: 'through', isCorrect: false }] },
    { id: 'ex_u05_l65_p3', lessonId: 'lesson_a1_5_65', stage: 8, type: 'word_ordering', prompt: 'Arrange the words to form a polite room request:', wordBank: ['Could', 'we', 'have', 'two', 'extra', 'pillows', 'please?'], targetSentence: 'Could we have two extra pillows please?' },
    { id: 'ex_u05_l65_p4', lessonId: 'lesson_a1_5_65', stage: 8, type: 'match_pairs', prompt: 'Match hotel terms with their descriptions:', pairs: [{ left: 'keycard', right: 'plastic electronic door key' }, { left: 'housekeeping', right: 'room cleaning service' }, { left: 'amenity', right: 'useful hotel feature or facility' }, { left: 'check-out', right: 'settling bill and leaving' }] },
    { id: 'ex_u05_l65_p5', lessonId: 'lesson_a1_5_65', stage: 8, type: 'error_correction', prompt: 'Identify the corrected sentence:', sentenceTemplate: 'Our room is in the five floor.', options: [{ id: 'o1', text: 'Our room is on the fifth floor.', isCorrect: true }, { id: 'o2', text: 'Our room is at the five floor.', isCorrect: false }, { id: 'o3', text: 'Our room is on the five floor.', isCorrect: false }] },
    { id: 'ex_u05_l65_p6', lessonId: 'lesson_a1_5_65', stage: 9, type: 'listening', prompt: 'Listen and choose the sentence you hear:', audioText: 'Complimentary buffet breakfast is served from seven to ten in the dining room.', options: [{ id: 'o1', text: 'Complimentary buffet breakfast is served from seven to ten in the dining room.', isCorrect: true }, { id: 'o2', text: 'Continental buffet dinner is served from seven to ten in the lobby.', isCorrect: false }] },
    { id: 'ex_u05_l65_p7', lessonId: 'lesson_a1_5_65', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'What is the Wi-Fi password for guests?', targetSentence: 'What is the Wi-Fi password for guests?' },
    { id: 'ex_u05_l65_p8', lessonId: 'lesson_a1_5_65', stage: 10, type: 'multiple_choice', prompt: 'Which question asks if breakfast is included in the room price?', options: [{ id: 'o1', text: 'Is breakfast included in the room rate?', isCorrect: true }, { id: 'o2', text: 'Where does breakfast go today?', isCorrect: false }, { id: 'o3', text: 'Does breakfast is eating now?', isCorrect: false }] },
    { id: 'ex_u05_l65_p9', lessonId: 'lesson_a1_5_65', stage: 11, type: 'dialogue_completion', prompt: 'Complete the dialogue: "Can we store our luggage here until our afternoon flight?"', options: [{ id: 'o1', text: 'Yes, of course. We will keep your bags safely in the luggage room.', isCorrect: true }, { id: 'o2', text: 'No, I don\'t like trains.', isCorrect: false }, { id: 'o3', text: 'The sun was shining yesterday.', isCorrect: false }] },
    { id: 'ex_u05_l65_p10', lessonId: 'lesson_a1_5_65', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'Could we please request a late check-out at one in the afternoon?', audioText: 'Could we please request a late check-out at one in the afternoon?' },
    { id: 'ex_u05_l65_p11', lessonId: 'lesson_a1_5_65', stage: 13, type: 'translation', prompt: 'Translate: "क्या हमारे कमरे के किराए में नाश्ता शामिल है?" / "¿El desayuno está incluido en la tarifa de la habitación?"', targetSentence: 'Is breakfast included in the room rate?' },
    { id: 'ex_u05_l65_p12', lessonId: 'lesson_a1_5_65', stage: 14, type: 'multiple_choice', prompt: 'Which department provides cleaning, towels, and room supplies in a hotel?', options: [{ id: 'o1', text: 'housekeeping', isCorrect: true }, { id: 'o2', text: 'ticket counter', isCorrect: false }, { id: 'o3', text: 'conductor', isCorrect: false }] },
    { id: 'ex_u05_l65_p13', lessonId: 'lesson_a1_5_65', stage: 14, type: 'fill_blank', prompt: 'Complete the sentence: "Please use your ___ to open the room door."', sentenceTemplate: 'Please use your ___ to open the room door.', sourceSentence: 'Please use your ___ to open the room door.', options: [{ id: 'o1', text: 'keycard', isCorrect: true }, { id: 'o2', text: 'agenda', isCorrect: false }, { id: 'o3', text: 'timeline', isCorrect: false }] },
    { id: 'ex_u05_l65_p14', lessonId: 'lesson_a1_5_65', stage: 14, type: 'word_ordering', prompt: 'Arrange the words to ask for a quiet room:', wordBank: ['Could', 'we', 'have', 'a', 'quiet', 'room', 'away', 'from', 'the', 'elevator?'], targetSentence: 'Could we have a quiet room away from the elevator?' },
    { id: 'ex_u05_l65_p15', lessonId: 'lesson_a1_5_65', stage: 14, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'I have a reservation for two guests under the name Sarah Jenkins.', audioText: 'I have a reservation for two guests under the name Sarah Jenkins.' }
  ],
  review: [
    { id: 'ex_u05_l65_r1', lessonId: 'lesson_a1_5_65', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Choose the correct transit question:', options: [{ id: 'o1', text: 'Which platform does the train leave from?', isCorrect: true }, { id: 'o2', text: 'Which platform the train leave?', isCorrect: false }, { id: 'o3', text: 'Which platform is train leaving from on?', isCorrect: false }] },
    { id: 'ex_u05_l65_r2', lessonId: 'lesson_a1_5_65', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete: "The train was delayed ___ twenty minutes."', sentenceTemplate: 'The train was delayed ___ twenty minutes.', sourceSentence: 'The train was delayed ___ twenty minutes.', options: [{ id: 'o1', text: 'by', isCorrect: true }, { id: 'o2', text: 'with', isCorrect: false }, { id: 'o3', text: 'on', isCorrect: false }] },
    { id: 'ex_u05_l65_r3', lessonId: 'lesson_a1_5_65', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['Is', 'Friday', 'morning', 'convenient', 'for', 'your', 'appointment?'], targetSentence: 'Is Friday morning convenient for your appointment?' },
    { id: 'ex_u05_l65_r4', lessonId: 'lesson_a1_5_65', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match hotel & travel pairs:', pairs: [{ left: 'keycard', right: 'door unlocker' }, { left: 'round-trip', right: 'two-way journey' }, { left: 'reservation', right: 'advance booking' }, { left: 'housekeeping', right: 'cleaning team' }] },
    { id: 'ex_u05_l65_r5', lessonId: 'lesson_a1_5_65', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "क्या हमें दो अतिरिक्त तौलिये मिल सकते हैं?"', targetSentence: 'Could we have two extra towels please?' }
  ],
  assessment: [
    { id: 'ex_u05_l65_a1', lessonId: 'lesson_a1_5_65', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the most accurate hotel check-in statement:', options: [{ id: 'o1', text: 'Hello, I have a reservation under the name David Miller.', isCorrect: true }, { id: 'o2', text: 'Hello, I am booking under the David Miller.', isCorrect: false }, { id: 'o3', text: 'I have booking with name Miller on.', isCorrect: false }] },
    { id: 'ex_u05_l65_a2', lessonId: 'lesson_a1_5_65', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete: "Your room is on the ___ floor on the right."', sentenceTemplate: 'Your room is on the ___ floor on the right.', sourceSentence: 'Your room is on the ___ floor on the right.', options: [{ id: 'o1', text: 'third', isCorrect: true }, { id: 'o2', text: 'three', isCorrect: false }, { id: 'o3', text: 'threes', isCorrect: false }] },
    { id: 'ex_u05_l65_a3', lessonId: 'lesson_a1_5_65', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words correctly:', wordBank: ['Housekeeping', 'will', 'bring', 'fresh', 'towels', 'to', 'your', 'room.'], targetSentence: 'Housekeeping will bring fresh towels to your room.' },
    { id: 'ex_u05_l65_a4', lessonId: 'lesson_a1_5_65', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Choose the best front desk reply: "What time is checkout tomorrow?"', options: [{ id: 'o1', text: 'Standard checkout is at 11:00 AM, but we offer late checkout upon request.', isCorrect: true }, { id: 'o2', text: 'I drank apple juice today.', isCorrect: false }, { id: 'o3', text: 'The train platform is number two.', isCorrect: false }] },
    { id: 'ex_u05_l65_a5', lessonId: 'lesson_a1_5_65', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this complete guest inquiry sentence:', targetSentence: 'Could you please let us know if high-speed Wi-Fi is included throughout the hotel?', audioText: 'Could you please let us know if high-speed Wi-Fi is included throughout the hotel?' }
  ]
};

// =========================================================================
// LESSON 66: Dining Out Preferences, Food Allergies & Custom Orders
// =========================================================================
export const CONFIG_66: LessonConfig = {
  num: 66,
  title: 'Dining Out Preferences, Food Allergies & Custom Orders',
  icon: '🍽️',
  estMin: 25,
  objTitle: 'Order meals, specify food allergies, and customize restaurant dishes',
  objDesc: 'Learn dining expressions for dietary restrictions (gluten-free, vegetarian, nut allergy), requesting dressings on the side, asking for substitutions, and splitting the bill.',
  objHi: 'खाना ऑर्डर करना, एलर्जी बताना और रेस्तरां में अपनी पसंद के अनुसार भोजन कस्टमाइज़ करना सीखें।',
  objEs: 'Aprende a pedir comida, comunicar alergias alimentarias y personalizar platos en restaurantes.',
  canDo: [
    'I can communicate dietary restrictions and food allergies clearly to a server.',
    'I can request modifications to a dish, such as sauce on the side or ingredient substitutions.',
    'I can ask about ingredients, recommendations, and request the bill.'
  ],
  canDoHi: [
    'मैं वेटर को अपने खान-पान के प्रतिबंधों और खाद्य एलर्जी के बारे में स्पष्ट रूप से बता सकता हूँ।',
    'मैं भोजन में बदलाव का अनुरोध कर सकता हूँ, जैसे सॉस अलग से मांगना या कोई सामग्री बदलना।',
    'मैं सामग्री, शेफ की सिफारिशों के बारे में पूछ सकता हूँ और बिल मांग सकता हूँ।'
  ],
  canDoEs: [
    'Puedo comunicar restricciones dietéticas y alergias alimentarias claramente al camarero.',
    'Puedo solicitar modificaciones a un plato, como salsa aparte o sustitución de ingredientes.',
    'Puedo preguntar sobre ingredientes, recomendaciones del chef y pedir la cuenta.'
  ],
  vocab: [
    { w: 'allergic', p: '/əˈlɜː.dʒɪk/', m: 'having an adverse physical reaction to a substance or food', hi: 'एलर्जी होना', es: 'alérgico', fr: 'allergique', de: 'allergisch', pt: 'alérgico', zh: '过敏的', ar: 'حساسية من', ja: 'アレルギーがある', ru: 'аллергичный / страдающий аллергией', ex: 'I am allergic to peanuts and tree nuts.', exHi: 'मुझे मूंगफली और मेवों से एलर्जी है।', exEs: 'Soy alérgico a los cacahuetes y frutos secos.', ic: '🥜' },
    { w: 'allergy', p: '/ˈæl.ə.dʒi/', m: 'a damaging immune response by the body to a substance', hi: 'एलर्जी', es: 'alergia', fr: 'allergie', de: 'Allergie', pt: 'alergia', zh: '过敏症', ar: 'حساسية', ja: 'アレルギー', ru: 'аллергия', ex: 'Please inform the chef about my dairy allergy.', exHi: 'कृपया शेफ को मेरी डेयरी एलर्जी के बारे में बताएं।', exEs: 'Por favor informe al chef sobre mi alergia a los lácteos.', ic: '⚠️' },
    { w: 'vegetarian', p: '/ˌvedʒ.ɪˈteə.ri.ən/', m: 'a person who does not eat meat or fish', hi: 'शाकाहारी', es: 'vegetariano', fr: 'végétarien', de: 'vegetarisch / Vegetarier', pt: 'vegetariano', zh: '素食者', ar: 'نباتي', ja: 'ベジタリアン / 菜食主義者', ru: 'вегетарианец', ex: 'Do you have vegetarian pasta options?', exHi: 'क्या आपके पास शाकाहारी पास्ता के विकल्प हैं?', exEs: '¿Tiene opciones de pasta vegetariana?', ic: '🥗' },
    { w: 'gluten-free', p: '/ˈɡluː.tən friː/', m: 'containing no gluten protein found in wheat', hi: 'ग्लूटेन-मुक्त', es: 'sin gluten', fr: 'sans gluten', de: 'glutenfrei', pt: 'sem glúten', zh: '无麸质', ar: 'خالٍ من الغلوتين', ja: 'グルテンフリー', ru: 'безглютеновый', ex: 'Is this bread gluten-free?', exHi: 'क्या यह ब्रेड ग्लूटेन-मुक्त है?', exEs: '¿Este pan es sin gluten?', ic: '🌾' },
    { w: 'dairy', p: '/ˈdeə.ri/', m: 'food containing or made from milk', hi: 'डेयरी / दूध से बने उत्पाद', es: 'lácteos', fr: 'produits laitiers', de: 'Milchprodukte', pt: 'laticínios', zh: '乳制品', ar: 'منتجات الألبان', ja: '乳製品', ru: 'молочные продукты', ex: 'I cannot eat dairy products like butter and cheese.', exHi: 'मैं मक्खन और पनीर जैसे डेयरी उत्पाद नहीं खा सकता।', exEs: 'No puedo comer productos lácteos como mantequilla y queso.', ic: '🥛' },
    { w: 'dressing', p: '/ˈdres.ɪŋ/', m: 'a seasoned sauce for salads', hi: 'सलाद की ड्रेसिंग / सॉस', es: 'aderezo / aliño', fr: 'vinaigrette / assaisonnement', de: 'Dressing / Salatsoße', pt: 'molho para salada', zh: '沙拉酱', ar: 'صلصة السلطة', ja: 'ドレッシング', ru: 'заправка для салата', ex: 'Could I have the salad dressing on the side?', exHi: 'क्या मुझे सलाद की ड्रेसिंग अलग से मिल सकती है?', exEs: '¿Podría tener el aderezo de la ensalada aparte?', ic: '🥣' },
    { w: 'sauce', p: '/sɔːs/', m: 'a liquid or semi-solid condiment served with food', hi: 'सॉस / चटनी', es: 'salsa', fr: 'sauce', de: 'Soße', pt: 'molho', zh: '酱汁', ar: 'صلصة', ja: 'ソース', ru: 'соус', ex: 'Is the tomato sauce spicy?', exHi: 'क्या टमाटर की सॉस तीखी है?', exEs: '¿La salsa de tomate es picante?', ic: '🍅' },
    { w: 'spicy', p: '/ˈspaɪ.si/', m: 'flavored with spices or pungent seasoning', hi: 'मसालेदार / तीखा', es: 'picante / especiado', fr: 'épicé / piquant', de: 'scharf / würzig', pt: 'apimentado / picante', zh: '辣的', ar: 'حار / متبل', ja: '辛い / スパイシーな', ru: 'острый / пряный', ex: 'Please make my curry mild, not too spicy.', exHi: 'कृपया मेरी करी हल्की बनाएं, ज़्यादा तीखी नहीं।', exEs: 'Por favor haga mi curry suave, no muy picante.', ic: '🌶️' },
    { w: 'substitute', p: '/ˈsʌb.stɪ.tʃuːt/', m: 'to replace one item with another', hi: 'बदलना / विकल्प चुनना', es: 'sustituir / cambiar', fr: 'remplacer', de: 'ersetzen', pt: 'substituir', zh: '替换', ar: 'استبدال', ja: '代用する / 交換する', ru: 'заменять', ex: 'Can I substitute fries with a side salad?', exHi: 'क्या मैं फ्राइज़ की जगह साइड सलाद ले सकता हूँ?', exEs: '¿Puedo sustituir las patatas fritas por una ensalada?', ic: '🔄' },
    { w: 'ingredient', p: '/ɪnˈɡriː.di.ənt/', m: 'any of the foods combined to make a particular dish', hi: 'सामग्री / घटक', es: 'ingrediente', fr: 'ingrédient', de: 'Zutat', pt: 'ingrediente', zh: '配料 / 成分', ar: 'مكون', ja: '材料 / 成分', ru: 'ингредиент', ex: 'What ingredients are in the house soup?', exHi: 'घर के विशेष सूप में कौन-कौन सी सामग्रियां हैं?', exEs: '¿Qué ingredientes tiene la sopa de la casa?', ic: '🥕' },
    { w: 'server', p: '/ˈsɜː.vər/', m: 'a person who brings food to tables in a restaurant', hi: 'वेटर / सर्वर', es: 'camarero / mesero', fr: 'serveur', de: 'Kellner / Bedienung', pt: 'garçom / atendente', zh: '服务员', ar: 'نادل', ja: '給仕 / ウェイター', ru: 'официант', ex: 'Our server recommended the grilled fish.', exHi: 'हमारे वेटर ने ग्रिल्ड मछली की सिफारिश की।', exEs: 'Nuestro camarero recomendó el pescado a la plancha.', ic: '🤵' },
    { w: 'recommendation', p: '/ˌrek.ə.menˈdeɪ.ʃən/', m: 'a suggestion as to the best choice of meal', hi: 'सिफारिश / सुझाव', es: 'recomendación', fr: 'recommandation', de: 'Empfehlung', pt: 'recomendação', zh: '推荐', ar: 'توصية', ja: 'おすすめ', ru: 'рекомендация', ex: 'What is the chef\'s recommendation tonight?', exHi: 'आज रात शेफ की क्या सिफारिश है?', exEs: '¿Cuál es la recomendación del chef esta noche?', ic: '⭐' },
    { w: 'rare', p: '/reər/', m: 'meat cooked only for a very short time and still red inside', hi: 'कम पका हुआ (मीट)', es: 'poco hecho / jugoso', fr: 'saignant', de: 'blutig / englisch', pt: 'mal passado', zh: '一分熟 / 三分熟', ar: 'غير ناضج تماماً', ja: 'レア（焼き加減）', ru: 'с кровью / слабой прожарки', ex: 'I prefer my steak medium rare.', exHi: 'मैं अपना स्टेक मीडियम रेयर पसंद करता हूँ।', exEs: 'Prefiero mi filete término medio tirando a poco hecho.', ic: '🥩' },
    { w: 'well-done', p: '/ˌwel ˈdʌn/', m: 'meat cooked thoroughly throughout', hi: 'अच्छी तरह पका हुआ', es: 'bien cocido / bien hecho', fr: 'bien cuit', de: 'durchgebraten', pt: 'bem passado', zh: '全熟', ar: 'مطبوخ جيداً', ja: 'ウェルダン（よく焼いた）', ru: 'хорошо прожаренный', ex: 'Please make sure the chicken is well-done.', exHi: 'कृपया सुनिश्चित करें कि चिकन अच्छी तरह पका हुआ हो।', exEs: 'Por favor asegúrese de que el pollo esté bien cocido.', ic: '🍗' },
    { w: 'side dish', p: '/ˈsaɪd ˌdɪʃ/', m: 'a small portion of food served alongside the main course', hi: 'साइड डिश / साथ में परोसा जाने वाला व्यंजन', es: 'guarnición / plato acompañante', fr: 'accompagnement', de: 'Beilage', pt: 'acompanhamento / guarnição', zh: '配菜', ar: 'طبق جانبي', ja: 'サイドディッシュ / 付け合わせ', ru: 'гарнир', ex: 'Does the entrée come with a side dish?', exHi: 'क्या मुख्य व्यंजन के साथ कोई साइड डिश आती है?', exEs: '¿El plato principal viene con guarnición?', ic: '🥦' },
    { w: 'dessert', p: '/dɪˈzɜːt/', m: 'the sweet course eaten at the end of a meal', hi: 'मीठा / डिज़र्ट', es: 'postre', fr: 'dessert', de: 'Nachtisch / Dessert', pt: 'sobremesa', zh: '甜品', ar: 'تحلية / حلوى', ja: 'デザート', ru: 'десерт', ex: 'Would you like to see the dessert menu?', exHi: 'क्या आप डिज़र्ट मेनू देखना चाहेंगे?', exEs: '¿Le gustaría ver el menú de postres?', ic: '🍰' },
    { w: 'bill', p: '/bɪl/', m: 'a printed statement of charges for food and drinks', hi: 'बिल', es: 'cuenta', fr: 'l\'addition', de: 'Rechnung', pt: 'conta', zh: '账单', ar: 'فاتورة', ja: 'お会計 / 伝票', ru: 'счет', ex: 'Could we have the bill, please?', exHi: 'क्या हमें बिल मिल सकता है, कृपया?', exEs: '¿Podríamos tener la cuenta, por favor?', ic: '🧾' },
    { w: 'tip', p: '/tɪp/', m: 'a sum of money given to a server for good service', hi: 'टिप / बख्शीश', es: 'propina', fr: 'pourboire', de: 'Trinkgeld', pt: 'gorjeta', zh: '小费', ar: 'إكرامية', ja: 'チップ', ru: 'чаевые', ex: 'We left a fifteen percent tip for excellent service.', exHi: 'हमने उत्कृष्ट सेवा के लिए पंद्रह प्रतिशत टिप दी।', exEs: 'Dejamos una propina del quince por ciento por el excelente servicio.', ic: '💵' },
    { w: 'split', p: '/splɪt/', m: 'to divide a bill equally between dining companions', hi: 'बिल बांटना / अलग-अलग करना', es: 'dividir / repartir la cuenta', fr: 'partager l\'addition', de: 'teilen / getrennt zahlen', pt: 'dividir a conta', zh: '分摊账单', ar: 'تقسيم الفاتورة', ja: '割り勘にする', ru: 'разделить счет', ex: 'Can we split the bill on two cards?', exHi: 'क्या हम दो कार्डों पर बिल बांट सकते हैं?', exEs: '¿Podemos dividir la cuenta en dos tarjetas?', ic: '💳' },
    { w: 'beverage', p: '/ˈbev.ər.ɪdʒ/', m: 'a drink of any type', hi: 'पेय पदार्थ', es: 'bebida', fr: 'boisson', de: 'Getränk', pt: 'bebida', zh: '饮料', ar: 'مشروب', ja: '飲み物', ru: 'напиток', ex: 'What beverages would you like to start with?', exHi: 'आप शुरुआत में कौन से पेय पदार्थ लेना चाहेंगे?', exEs: '¿Qué bebidas les gustaría para empezar?', ic: '🥤' }
  ],
  chunks: [
    { phrase: 'I am allergic to...', meaning: 'Informing staff of food allergy', hi: 'मुझे ... से एलर्जी है', es: 'Soy alérgico a...', fr: 'Je suis allergique à...', de: 'Ich bin allergisch gegen...', pt: 'Sou alérgico(a) a...', zh: '我对……过敏', ar: 'أنا أعاني من حساسية تجاه...', ja: '私は〜アレルギーがあります', ru: 'У меня аллергия на...', note: 'Critical health communication.', ic: '⚠️' },
    { phrase: 'on the side', meaning: 'served in a separate small dish or bowl', hi: 'अलग से (सॉस आदि)', es: 'aparte / a un lado', fr: 'à part', de: 'extra / getrennt serviert', pt: 'à parte / de lado', zh: '分开放 / 放在旁边', ar: 'على حدة / جانباً', ja: '別添えで', ru: 'отдельно', note: 'Customization standard phrase.', ic: '🥣' },
    { phrase: 'Could we substitute... with...?', meaning: 'Requesting ingredient change', hi: 'क्या हम ... की जगह ... ले सकते हैं?', es: '¿Podríamos cambiar... por...?', fr: 'Pourrions-nous remplacer ... par ... ?', de: 'Könnten wir ... durch ... ersetzen?', pt: 'Poderíamos substituir... por...?', zh: '我们可以把……换成……吗？', ar: 'هل يمكننا استبدال... بـ...؟', ja: '〜を〜に変更できますか？', ru: 'Можем ли мы заменить... на...?', note: 'Custom order request.', ic: '🔄' },
    { phrase: 'Does this contain...?', meaning: 'Checking specific ingredients in a dish', hi: 'क्या इसमें ... शामिल है?', es: '¿Esto contiene...?', fr: 'Est-ce que cela contient ... ?', de: 'Enthält dies...?', pt: 'Isso contém...?', zh: '这个含有……吗？', ar: 'هل يحتوي هذا على...؟', ja: 'これには〜が入っていますか？', ru: 'Это содержит...?', note: 'Allergy checking question.', ic: '🔍' },
    { phrase: 'Could we get the bill, please?', meaning: 'Asking for the final receipt to pay', hi: 'क्या हमें बिल मिल सकता है, कृपया?', es: '¿Podríamos pedir la cuenta, por favor?', fr: 'Pourrions-nous avoir l\'addition, s\'il vous plaît ?', de: 'Könnten wir bitte die Rechnung haben?', pt: 'Poderia trazer a conta, por favor?', zh: '请结账', ar: 'هل يمكننا الحصول على الفاتورة من فضلك؟', ja: 'お会計をお願いできますか？', ru: 'Можно счет, пожалуйста?', note: 'Restaurant payment formula.', ic: '🧾' },
    { phrase: 'split the bill', meaning: 'paying separately for a shared meal', hi: 'बिल बराबर बांटना', es: 'dividir la cuenta', fr: 'partager l\'addition', de: 'die Rechnung teilen', pt: 'dividir a conta', zh: 'AA制 / 分开付', ar: 'تقسيم الحساب', ja: '割り勘にする', ru: 'разделить счет', note: 'Group payment method.', ic: '💳' },
    { phrase: 'What do you recommend?', meaning: 'Asking server for personal or chef suggestions', hi: 'आप क्या सुझाव देंगे?', es: '¿Qué nos recomienda?', fr: 'Que recommandez-vous ?', de: 'Was können Sie empfehlen?', pt: 'O que você recomenda?', zh: '你推荐什么？', ar: 'بماذا توصي؟', ja: '何がおすすめですか？', ru: 'Что вы порекомендуете?', note: 'Menu inquiry phrase.', ic: '⭐' },
    { phrase: 'vegetarian option', meaning: 'dish suitable for non-meat eaters', hi: 'शाकाहारी विकल्प', es: 'opción vegetariana', fr: 'option végétarienne', de: 'vegetarisches Gericht', pt: 'opção vegetariana', zh: '素食选择', ar: 'خيار نباتي', ja: 'ベジタリアンメニュー', ru: 'вегетарианский вариант', note: 'Dietary preference term.', ic: '🥗' }
  ],
  grammar: {
    title: 'Expressing Dietary Restrictions with "be allergic to" & Polite Requests with "Could I have [X] without [Y]?"',
    concept: 'Using adjective structure subject + be + allergic to [allergen] and preposition "without" for customized orders.',
    patterns: [
      {
        title: 'Subject + be (am/is/are) + allergic to + Noun',
        structure: 'I am / My friend is + allergic to + nuts / dairy / shellfish',
        rule: 'Use the preposition "to" after the adjective "allergic".',
        examples: [
          { en: 'I am allergic to peanuts and tree nuts.', hi: 'मुझे मूंगफली और मेवों से एलर्जी है।', es: 'Soy alérgico a los cacahuetes y frutos secos.' },
          { en: 'Is the chef sure this dish is free of nuts?', hi: 'क्या शेफ सुनिश्चित हैं कि इस व्यंजन में मेवे नहीं हैं?', es: '¿El chef está seguro de que este plato no tiene frutos secos?' }
        ]
      },
      {
        title: 'Could I have + Dish + without + Ingredient / with + Sauce + on the side',
        structure: 'Could I have the salad without onions and with dressing on the side?',
        rule: 'Use "without" to exclude ingredients and "on the side" for separate condiments.',
        examples: [
          { en: 'Could I have the burger without cheese and sauce on the side?', hi: 'क्या मुझे बिना पनीर वाला बर्गर और सॉस अलग से मिल सकता है?', es: '¿Podría tener la hamburguesa sin queso y con la salsa aparte?' },
          { en: 'Can we get water without ice, please?', hi: 'क्या हमें बिना बर्फ का पानी मिल सकता है, कृपया?', es: '¿Podemos tener agua sin hielo, por favor?' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'I am allergy to milk.', cor: 'I am allergic to milk.', exp: 'Use the adjective "allergic" with verb "to be", not the noun "allergy".', hi: '"I am allergic to" सही रूप है ("allergy" संज्ञा है)।', es: 'Usa el adjetivo "allergic", no el sustantivo "allergy".' },
    { inc: 'I am allergic with nuts.', cor: 'I am allergic to nuts.', exp: 'The adjective "allergic" requires the preposition "to".', hi: '"Allergic" के साथ "to" का प्रयोग होता है, "with" का नहीं।', es: '"Allergic" se construye con la preposición "to".' },
    { inc: 'Can I have the sauce in the side?', cor: 'Can I have the sauce on the side?', exp: 'The correct idiom is "on the side".', hi: 'सही पद "on the side" है।', es: 'La expresión correcta es "on the side".' },
    { inc: 'Give us the ticket please.', cor: 'Could we have the bill, please?', exp: 'In a restaurant, use "bill" (or "check"), not "ticket".', hi: 'रेस्तरां में बिल के लिए "bill" या "check" का प्रयोग करें।', es: 'En un restaurante se pide la cuenta ("bill" o "check"), no "ticket".' },
    { inc: 'Can we split bill on two?', cor: 'Can we split the bill between the two of us?', exp: 'Use "split the bill" with "between" or "into two".', hi: '"Split the bill between us" सही वाक्य है।', es: 'Se dice "split the bill between us".' }
  ],
  dialogues: [
    {
      title: 'Ordering with Dietary Requirements',
      context: 'David and Emma order dinner at an Italian bistro.',
      charA: { name: 'Server', av: '🤵', role: 'Waiter' },
      charB: { name: 'Emma', av: '👩', role: 'Diner' },
      turns: [
        { spk: 'Server', text: 'Good evening! Are you ready to order, or would you like a few more minutes?', hi: 'शुभ संध्या! क्या आप ऑर्डर करने के लिए तैयार हैं, या आपको कुछ और मिनट चाहिए?', es: '¡Buenas noches! ¿Están listos para ordenar o desean unos minutos más?' },
        { spk: 'Emma', text: 'We are ready! First, I have a quick question. I am allergic to dairy. Does the pesto pasta contain cheese?', hi: 'हम तैयार हैं! पहले, मेरा एक छोटा सा सवाल है। मुझे डेयरी से एलर्जी है। क्या पेस्टो पास्ता में पनीर है?', es: '¡Estamos listos! Primero, tengo una pregunta rápida. Soy alérgica a los lácteos. ¿La pasta al pesto contiene queso?' },
        { spk: 'Server', text: 'Yes, the traditional pesto contains parmesan, but our chef can prepare a dairy-free tomato basil sauce for you.', hi: 'हाँ, पारंपरिक पेस्टो में परमेसन होता है, लेकिन हमारे शेफ आपके लिए बिना डेयरी वाली टमाटर-तुलसी की सॉस तैयार कर सकते हैं।', es: 'Sí, el pesto tradicional contiene parmesano, pero nuestro chef puede preparar una salsa de tomate y albahaca sin lácteos para usted.' },
        { spk: 'Emma', text: 'That sounds perfect! And could I have the house salad with dressing on the side, please?', hi: 'यह बहुत बढ़िया रहेगा! और क्या मुझे सलाद की ड्रेसिंग अलग से मिल सकती है?', es: '¡Eso suena perfecto! ¿Y podría tener la ensalada de la casa con el aderezo aparte, por favor?' },
        { spk: 'Server', text: 'Certainly! And for your main side dish, we have roasted vegetables or gluten-free bread.', hi: 'बिल्कुल! और आपकी मुख्य साइड डिश के लिए, हमारे पास भुनी हुई सब्जियाँ या ग्लूटेन-मुक्त ब्रेड है।', es: '¡Por supuesto! Y como guarnición principal, tenemos verduras asadas o pan sin gluten.' }
      ]
    },
    {
      title: 'Paying and Splitting the Bill',
      context: 'David asks for the bill at the end of their meal.',
      charA: { name: 'David', av: '👨', role: 'Diner' },
      charB: { name: 'Server', av: '🤵', role: 'Waiter' },
      turns: [
        { spk: 'David', text: 'Excuse me, could we have the bill, please?', hi: 'माफ़ कीजिए, क्या हमें बिल मिल सकता है?', es: 'Disculpe, ¿podríamos tener la cuenta, por favor?' },
        { spk: 'Server', text: 'Here you are. Did you enjoy your dinner tonight?', hi: 'यह लीजिए। क्या आपको आज रात का खाना पसंद आया?', es: 'Aquí tienen. ¿Disfrutaron de su cena esta noche?' },
        { spk: 'David', text: 'Everything was delicious, thank you! Could we split the bill on two separate credit cards?', hi: 'सब कुछ बहुत स्वादिष्ट था, धन्यवाद! क्या हम बिल को दो अलग-अलग क्रेडिट कार्डों पर बांट सकते हैं?', es: '¡Todo estuvo delicioso, gracias! ¿Podríamos dividir la cuenta en dos tarjetas de crédito separadas?' },
        { spk: 'Server', text: 'Of course, I will bring the card terminal right over.', hi: 'बिल्कुल, मैं अभी कार्ड टर्मिनल लेकर आता हूँ।', es: 'Por supuesto, traeré el terminal de tarjetas enseguida.' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u05_l66_p1', lessonId: 'lesson_a1_5_66', stage: 8, type: 'multiple_choice', prompt: 'Select the correct preposition: "I am allergic ___ peanuts."', options: [{ id: 'o1', text: 'to', isCorrect: true }, { id: 'o2', text: 'with', isCorrect: false }, { id: 'o3', text: 'from', isCorrect: false }] },
    { id: 'ex_u05_l66_p2', lessonId: 'lesson_a1_5_66', stage: 8, type: 'fill_blank', prompt: 'Complete the sentence with the customization phrase:', sentenceTemplate: 'Could I have the salad dressing ___ the side, please?', sourceSentence: 'Could I have the salad dressing ___ the side, please?', options: [{ id: 'o1', text: 'on', isCorrect: true }, { id: 'o2', text: 'at', isCorrect: false }, { id: 'o3', text: 'in', isCorrect: false }] },
    { id: 'ex_u05_l66_p3', lessonId: 'lesson_a1_5_66', stage: 8, type: 'word_ordering', prompt: 'Arrange the words to ask for meal customization:', wordBank: ['Could', 'I', 'have', 'the', 'burger', 'without', 'cheese?'], targetSentence: 'Could I have the burger without cheese?' },
    { id: 'ex_u05_l66_p4', lessonId: 'lesson_a1_5_66', stage: 8, type: 'match_pairs', prompt: 'Match dietary terms with their definitions:', pairs: [{ left: 'allergic to', right: 'having adverse reaction to food' }, { left: 'gluten-free', right: 'contains no wheat protein' }, { left: 'on the side', right: 'served separately' }, { left: 'split the bill', right: 'divide total between diners' }] },
    { id: 'ex_u05_l66_p5', lessonId: 'lesson_a1_5_66', stage: 8, type: 'error_correction', prompt: 'Identify the corrected sentence:', sentenceTemplate: 'I am allergy with dairy products.', options: [{ id: 'o1', text: 'I am allergic to dairy products.', isCorrect: true }, { id: 'o2', text: 'I am allergy to dairy products.', isCorrect: false }, { id: 'o3', text: 'I am allergic with dairy products.', isCorrect: false }] },
    { id: 'ex_u05_l66_p6', lessonId: 'lesson_a1_5_66', stage: 9, type: 'listening', prompt: 'Listen and choose the sentence you hear:', audioText: 'Our chef can prepare a delicious gluten-free pasta dish for you.', options: [{ id: 'o1', text: 'Our chef can prepare a delicious gluten-free pasta dish for you.', isCorrect: true }, { id: 'o2', text: 'Our server will prepare a spicy cheese pasta dish for you.', isCorrect: false }] },
    { id: 'ex_u05_l66_p7', lessonId: 'lesson_a1_5_66', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'Could we have the bill please?', targetSentence: 'Could we have the bill please?' },
    { id: 'ex_u05_l66_p8', lessonId: 'lesson_a1_5_66', stage: 10, type: 'multiple_choice', prompt: 'Which question asks if a dish contains dairy ingredients?', options: [{ id: 'o1', text: 'Does this soup contain milk or butter?', isCorrect: true }, { id: 'o2', text: 'Why is soup milk?', isCorrect: false }, { id: 'o3', text: 'Where soup eats butter?', isCorrect: false }] },
    { id: 'ex_u05_l66_p9', lessonId: 'lesson_a1_5_66', stage: 11, type: 'dialogue_completion', prompt: 'Complete the dialogue: "Can I substitute French fries with steamed vegetables?"', options: [{ id: 'o1', text: 'Yes, absolutely. We can substitute that at no extra charge.', isCorrect: true }, { id: 'o2', text: 'No, I don\'t have a car.', isCorrect: false }, { id: 'o3', text: 'Yesterday was Monday.', isCorrect: false }] },
    { id: 'ex_u05_l66_p10', lessonId: 'lesson_a1_5_66', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'Please let the kitchen know that I am allergic to shellfish.', audioText: 'Please let the kitchen know that I am allergic to shellfish.' },
    { id: 'ex_u05_l66_p11', lessonId: 'lesson_a1_5_66', stage: 13, type: 'translation', prompt: 'Translate: "क्या हम दो कार्डों पर बिल बांट सकते हैं?" / "¿Podemos dividir la cuenta en dos tarjetas?"', targetSentence: 'Can we split the bill on two cards?' },
    { id: 'ex_u05_l66_p12', lessonId: 'lesson_a1_5_66', stage: 14, type: 'multiple_choice', prompt: 'What word describes the sauce served on top of or alongside a fresh salad?', options: [{ id: 'o1', text: 'dressing', isCorrect: true }, { id: 'o2', text: 'luggage', isCorrect: false }, { id: 'o3', text: 'terminal', isCorrect: false }] },
    { id: 'ex_u05_l66_p13', lessonId: 'lesson_a1_5_66', stage: 14, type: 'fill_blank', prompt: 'Complete the sentence: "We left a twenty percent ___ for our wonderful server."', sentenceTemplate: 'We left a twenty percent ___ for our wonderful server.', sourceSentence: 'We left a twenty percent ___ for our wonderful server.', options: [{ id: 'o1', text: 'tip', isCorrect: true }, { id: 'o2', text: 'slot', isCorrect: false }, { id: 'o3', text: 'platform', isCorrect: false }] },
    { id: 'ex_u05_l66_p14', lessonId: 'lesson_a1_5_66', stage: 14, type: 'word_ordering', prompt: 'Arrange the words to ask for recommendations:', wordBank: ['What', 'do', 'you', 'recommend', 'for', 'dinner', 'tonight?'], targetSentence: 'What do you recommend for dinner tonight?' },
    { id: 'ex_u05_l66_p15', lessonId: 'lesson_a1_5_66', stage: 14, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'Could I have the grilled chicken salad with olive oil dressing on the side?', audioText: 'Could I have the grilled chicken salad with olive oil dressing on the side?' }
  ],
  review: [
    { id: 'ex_u05_l66_r1', lessonId: 'lesson_a1_5_66', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Choose the correct hotel room location phrase:', options: [{ id: 'o1', text: 'Our room is on the third floor.', isCorrect: true }, { id: 'o2', text: 'Our room is in three floor.', isCorrect: false }, { id: 'o3', text: 'Our room is at the third floor.', isCorrect: false }] },
    { id: 'ex_u05_l66_r2', lessonId: 'lesson_a1_5_66', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete: "Is breakfast ___ in the price?"', sentenceTemplate: 'Is breakfast ___ in the price?', sourceSentence: 'Is breakfast ___ in the price?', options: [{ id: 'o1', text: 'included', isCorrect: true }, { id: 'o2', text: 'including', isCorrect: false }, { id: 'o3', text: 'includes', isCorrect: false }] },
    { id: 'ex_u05_l66_r3', lessonId: 'lesson_a1_5_66', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['The', 'express', 'train', 'departs', 'from', 'platform', 'six.'], targetSentence: 'The express train departs from platform six.' },
    { id: 'ex_u05_l66_r4', lessonId: 'lesson_a1_5_66', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match dining and hospitality terms:', pairs: [{ left: 'allergic to', right: 'sensitive to food' }, { left: 'keycard', right: 'room door access' }, { left: 'dressing', right: 'salad sauce' }, { left: 'amenity', right: 'useful hotel facility' }] },
    { id: 'ex_u05_l66_r5', lessonId: 'lesson_a1_5_66', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "क्या मुझे ड्रेसिंग अलग से मिल सकती है?"', targetSentence: 'Could I have the dressing on the side?' }
  ],
  assessment: [
    { id: 'ex_u05_l66_a1', lessonId: 'lesson_a1_5_66', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the grammatically correct dietary statement:', options: [{ id: 'o1', text: 'I am allergic to peanuts, so please make sure the dish is nut-free.', isCorrect: true }, { id: 'o2', text: 'I am allergy with peanuts so dish is nut-free.', isCorrect: false }, { id: 'o3', text: 'I have allergic to peanuts with dish.', isCorrect: false }] },
    { id: 'ex_u05_l66_a2', lessonId: 'lesson_a1_5_66', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete: "Can we ___ the bill between the three of us?"', sentenceTemplate: 'Can we ___ the bill between the three of us?', sourceSentence: 'Can we ___ the bill between the three of us?', options: [{ id: 'o1', text: 'split', isCorrect: true }, { id: 'o2', text: 'hold', isCorrect: false }, { id: 'o3', text: 'dial', isCorrect: false }] },
    { id: 'ex_u05_l66_a3', lessonId: 'lesson_a1_5_66', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words correctly:', wordBank: ['Could', 'we', 'please', 'have', 'the', 'bill', 'and', 'pay', 'by', 'card?'], targetSentence: 'Could we please have the bill and pay by card?' },
    { id: 'ex_u05_l66_a4', lessonId: 'lesson_a1_5_66', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Choose the best reply: "Does this dessert contain any wheat flour?"', options: [{ id: 'o1', text: 'No, this chocolate cake is completely gluten-free and dairy-free.', isCorrect: true }, { id: 'o2', text: 'Yes, it is six o\'clock.', isCorrect: false }, { id: 'o3', text: 'I have three pens on my desk.', isCorrect: false }] },
    { id: 'ex_u05_l66_a5', lessonId: 'lesson_a1_5_66', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this complete restaurant order sentence:', targetSentence: 'Could I please have the grilled salmon without butter and with steamed vegetables on the side?', audioText: 'Could I please have the grilled salmon without butter and with steamed vegetables on the side?' }
  ]
};
