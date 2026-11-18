import { LessonConfigA2 } from './unit10_builder_helper';

// =========================================================================
// LESSON 139: Travel Logistics, Booking Adjustments & Itinerary Changes
// =========================================================================
export const LESSON_139_CONFIG: LessonConfigA2 = {
  num: 139,
  title: 'Travel Logistics, Booking Adjustments & Itinerary Changes',
  icon: '✈️',
  estMin: 25,
  objTitle: 'Modifying Travel Reservations, Requesting Upgrades & Handling Changes',
  objDesc: 'Learn to adjust travel itineraries, communicate changes to airlines or hotels, request upgrades or seat adjustments, and express preferences with "would prefer / would rather".',
  objHi: 'यात्रा की बुकिंग में बदलाव करना, एयरलाइन या होटल से संवाद करना, अपग्रेड मांगना और "would prefer" के साथ अपनी प्राथमिकताएं बताना सीखें।',
  objEs: 'Modificar reservas de viaje, comunicarse con aerolíneas u hoteles, solicitar mejoras y expresar preferencias con "would prefer / would rather".',
  canDo: [
    'I can modify hotel or flight reservations politely by phone or in person.',
    'I can express personal travel preferences using "would prefer to" and "would rather".',
    'I can inquire about ticket refund policies, luggage allowances, and check-in times.',
    'I can navigate boarding gate changes and flight transfer announcements.'
  ],
  canDoHi: [
    'मैं फोन पर या व्यक्तिगत रूप से होटल या उड़ान की बुकिंग में विनम्रतापूर्वक बदलाव कर सकता हूँ।',
    'मैं "would prefer to" और "would rather" का उपयोग करके अपनी यात्रा प्राथमिकताएं बता सकता हूँ।',
    'मैं टिकट रिफंड नीतियों, सामान की सीमा और चेक-इन समय के बारे में पूछताछ कर सकता हूँ।',
    'मैं बोर्डिंग गेट परिवर्तन और उड़ान स्थानांतरण घोषणाओं को समझ और संभाल सकता हूँ।'
  ],
  canDoEs: [
    'Puedo modificar reservas de hotel o vuelo educadamente.',
    'Puedo expresar preferencias de viaje usando "would prefer to" y "would rather".',
    'Puedo consultar políticas de reembolso, franquicia de equipaje y horarios.',
    'Puedo entender cambios de puerta de embarque y trasbordos.'
  ],
  vocab: [
    { w: 'itinerary', p: '/aɪˈtɪnərəri/', m: 'a planned route or journey with dates and times', hi: 'यात्रा कार्यक्रम / यात्रा विवरण', es: 'itinerario', fr: 'itinéraire', de: 'Reiseplan', pt: 'itinerário', zh: '行程', ar: 'خط سير الرحلة', ja: '旅程', ru: 'маршрут / план поездки', ex: 'Our travel agent emailed the finalized flight and hotel itinerary.', exHi: 'हमारे ट्रैवल एजेंट ने उड़ान और होटल का अंतिम यात्रा कार्यक्रम ईमेल किया।', exEs: 'Nuestro agente de viajes envió por correo el itinerario final.', ic: '🗺️' },
    { w: 'reservation', p: '/ˌrezəˈveɪʃn/', m: 'an arrangement to secure a seat, room, or ticket in advance', hi: 'आरक्षण / बुकिंग', es: 'reserva', fr: 'réservation', de: 'Reservierung', pt: 'reserva', zh: '预订', ar: 'حجز', ja: '予約', ru: 'бронирование', ex: 'I would like to check the details of my hotel reservation.', exHi: 'मैं अपने होटल आरक्षण के विवरण की जांच करना चाहूँगा।', es: 'Me gustaría comprobar los detalles de mi reserva de hotel.', ic: '🛎️' },
    { w: 'upgrade', p: '/ˌʌpˈɡreɪd/', m: 'an increase or improvement in one\'s accommodation, ticket class, or service level', hi: 'अपग्रेड / उच्च श्रेणी में बदलना', es: 'mejora de clase / upgrade', fr: 'surclassement', de: 'Upgrade / Höherstufung', pt: 'melhoria de categoria / upgrade', zh: '升级', ar: 'ترقية', ja: 'アップグレード', ru: 'повышение класса', ex: 'They offered us a complimentary room upgrade to an ocean-view suite.', exHi: 'उन्होंने हमें समुद्र के दृश्य वाले सुइट में मुफ्त कमरा अपग्रेड की पेशकश की।', exEs: 'Nos ofrecieron una mejora gratuita a una suite con vista al mar.', ic: '⭐' },
    { w: 'boarding pass', p: '/ˈbɔːdɪŋ pɑːs/', m: 'a pass that gives an airline passenger permission to board an aircraft', hi: 'बोर्डिंग पास', es: 'tarjeta de embarque', fr: 'carte d\'embarquement', de: 'Bordkarte', pt: 'cartão de embarque', zh: '登机牌', ar: 'بطاقة صعود الطائرة', ja: '搭乗券', ru: 'посадочный талон', ex: 'Please have your passport and digital boarding pass ready at the gate.', exHi: 'कृपया गेट पर अपना पासपोर्ट और डिजिटल बोर्डिंग पास तैयार रखें।', exEs: 'Por favor, tenga listos su pasaporte y tarjeta de embarque en la puerta.', ic: '🎫' },
    { w: 'luggage allowance', p: '/ˈlʌɡɪdʒ əˌlaʊəns/', m: 'the amount or weight of baggage permitted per passenger without extra charge', hi: 'सामान की सीमा', es: 'franquicia de equipaje', fr: 'franchise de bagages', de: 'Freigepäckgrenze', pt: 'franquia de bagagem', zh: '行李额度', ar: 'الوزن المسموح للأمتعة', ja: '受託手荷物許容量', ru: 'норма провоза багажа', ex: 'The standard economy ticket includes a twenty-three kilogram luggage allowance.', exHi: 'मानक इकोनॉमी टिकट में तेईस किलोग्राम सामान की सीमा शामिल है।', exEs: 'El billete económico estándar incluye una franquicia de equipaje de 23 kg.', ic: '🧳' },
    { w: 'carry-on', p: '/ˈkæri ɒn/', m: 'small luggage suitable for being taken aboard an airplane by a passenger', hi: 'हाथ का सामान / केबिन बैग', es: 'equipaje de mano', fr: 'bagage à main', de: 'Handgepäck', pt: 'bagagem de mão', zh: '随身行李', ar: 'حقيبة يد', ja: '機内持ち込み手荷物', ru: 'ручная кладь', ex: 'Make sure your carry-on fits in the overhead storage bin.', exHi: 'सुनिश्चित करें कि आपका हाथ का सामान ओवरहेड स्टोरेज बिन में फिट बैठता है।', exEs: 'Asegúrese de que su equipaje de mano quepa en el compartimento superior.', ic: '🎒' },
    { w: 'departure', p: '/dɪˈpɑːtʃə/', m: 'the action of leaving, especially to start a journey', hi: 'प्रस्थान / रवानगी', es: 'salida / partida', fr: 'départ', de: 'Abflug / Abfahrt', pt: 'partida', zh: '出发 / 离港', ar: 'مغادرة', ja: '出発', ru: 'отправление / вылет', ex: 'The scheduled departure time has been moved to four thirty.', exHi: 'निर्धारित प्रस्थान समय को साढ़े चार बजे कर दिया गया है।', exEs: 'La hora de salida programada se ha cambiado a las cuatro y media.', ic: '🛫' },
    { w: 'arrival', p: '/əˈraɪvl/', m: 'the action or process of arriving at a destination', hi: 'आगमन / पहुँच', es: 'llegada', fr: 'arrivée', de: 'Ankunft', pt: 'chegada', zh: '到达', ar: 'وصول', ja: '到着', ru: 'прибытие', ex: 'We checked the electronic arrival board to see if the flight landed.', exHi: 'हमने यह देखने के लिए इलेक्ट्रॉनिक अराइवल बोर्ड देखा कि क्या उड़ान उतरी है।', exEs: 'Consultamos la pantalla de llegadas para ver si el vuelo había aterrizado.', ic: '🛬' },
    { w: 'connecting flight', p: '/kəˈnektɪŋ flaɪt/', m: 'a flight requiring passengers to change aircraft at an intermediate airport', hi: 'कनेक्टिंग फ्लाइट / आगे की उड़ान', es: 'vuelo de conexión', fr: 'vol de correspondance', de: 'Anschlussflug', pt: 'voo de conexão', zh: '中转航班', ar: 'رحلة متابعة', ja: '乗り継ぎ便', ru: 'стыковочный рейс', ex: 'We have a ninety-minute layover before our connecting flight to Tokyo.', exHi: 'टोक्यो के लिए हमारी कनेक्टिंग फ्लाइट से पहले हमारा नब्बे मिनट का लेओवर है।', exEs: 'Tenemos una escala de 90 minutos antes de nuestro vuelo de conexión a Tokio.', ic: '🔄' },
    { w: 'layover', p: '/ˈleɪəʊvə/', m: 'a period of rest or waiting before further travel', hi: 'लेओवर / पड़ाव', es: 'escala', fr: 'escale', de: 'Zwischenstopp', pt: 'escala / parada', zh: '经停 / 中转停留', ar: 'توقف مؤقت', ja: '乗り継ぎ待ち時間', ru: 'пересадка / остановка', ex: 'During our five-hour layover in Dubai, we explored the airport shops.', exHi: 'दुबई में हमारे पांच घंटे के पड़ाव के दौरान, हमने हवाई अड्डे की दुकानों को देखा।', exEs: 'Durante nuestra escala de cinco horas en Dubái, exploramos las tiendas.', ic: '⏳' },
    { w: 'aisle seat', p: '/aɪl siːt/', m: 'a seat along the passage between rows of seats', hi: 'गलियारे वाली सीट', es: 'asiento de pasillo', fr: 'siège côté couloir', de: 'Gangplatz', pt: 'assento no corredor', zh: '靠走道的座位', ar: 'مقعد في الممر', ja: '通路側の席', ru: 'место у прохода', ex: 'I prefer an aisle seat so that I can stretch my legs easily.', exHi: 'मैं गलियारे वाली सीट पसंद करता हूँ ताकि मैं अपने पैरों को आसानी से फैला सकूँ।', exEs: 'Prefiero un asiento de pasillo para poder estirar las piernas fácilmente.', ic: '💺' },
    { w: 'window seat', p: '/ˈwɪndəʊ siːt/', m: 'a seat next to a window in a passenger vehicle', hi: 'खिड़की वाली सीट', es: 'asiento de ventana', fr: 'siège côté fenêtre', de: 'Fensterplatz', pt: 'assento na janela', zh: '靠窗座位', ar: 'مقعد بجانب النافذة', ja: '窓側の席', ru: 'место у окна', ex: 'She requested a window seat to enjoy the mountain views during takeoff.', exHi: 'उसने उड़ान भरते समय पहाड़ों के दृश्यों का आनंद लेने के लिए खिड़की वाली सीट का अनुरोध किया।', exEs: 'Ella solicitó un asiento de ventana para disfrutar de las vistas.', ic: '🪟' },
    { w: 'amenity', p: '/əˈmiːnəti/', m: 'a desirable or useful feature or facility of a building or place', hi: 'सुविधा / सुख-सुविधा', es: 'comodidad / servicio del hotel', fr: 'équipement / service', de: 'Annehmlichkeit / Ausstattung', pt: 'comodidade / serviço', zh: '便利设施', ar: 'وسائل الراحة', ja: 'アメニティ / 設備', ru: 'удобство / услуга', ex: 'Hotel amenities include high-speed Wi-Fi, a gym, and complimentary breakfast.', exHi: 'होटल की सुविधाओं में हाई-स्पीड वाई-फाई, जिम और मानार्थ नाश्ता शामिल हैं।', exEs: 'Las comodidades del hotel incluyen wifi, gimnasio y desayuno.', ic: '🏊' },
    { w: 'reimburse', p: '/ˌriːɪmˈbɜːs/', m: 'repay a person who has spent money on official or travel expenses', hi: 'खर्च की भरपाई करना / प्रतिपूर्ति करना', es: 'reembolsar', fr: 'rembourser', de: 'erstatten / rückerstatten', pt: 'reembolsar', zh: '报销 / 偿还', ar: 'تعويض مالي', ja: '払い戻す / 弁償する', ru: 'возмещать расходы', ex: 'The airline reimbursed us for the overnight hotel expenses.', exHi: 'एयरलाइन ने रात भर के होटल के खर्च की भरपाई की।', exEs: 'La aerolínea nos reembolsó los gastos de hotel.', ic: '💵' },
    { w: 'boarding gate', p: '/ˈbɔːdɪŋ ɡeɪt/', m: 'the area where passengers board the aircraft', hi: 'बोर्डिंग गेट', es: 'puerta de embarque', fr: 'porte d\'embarquement', de: 'Gate / Flugsteig', pt: 'portão de embarque', zh: '登机口', ar: 'بوابة الصعود', ja: '搭乗口 / ゲート', ru: 'выход на посадку', ex: 'Attention passengers: the flight to London will now board at Gate B14.', exHi: 'यात्रियों का ध्यान दें: लंदन की उड़ान अब गेट B14 पर बोर्ड होगी।', exEs: 'Atención pasajeros: el vuelo a Londres embarcará en la puerta B14.', ic: '🚪' },
    { w: 'complimentary', p: '/ˌkɒmplɪˈmentri/', m: 'given or supplied free of charge', hi: 'निःशुल्क / मानार्थ', es: 'de cortesía / gratuito', fr: 'gratuit / offert', de: 'kostenlos / gratis', pt: 'cortesia / gratuito', zh: '免费赠送的', ar: 'مجاني', ja: '無料の / サービスの', ru: 'бесплатный / комплиментарный', ex: 'The hotel provides complimentary airport shuttle transportation.', exHi: 'होटल मानार्थ हवाई अड्डा शटल परिवहन प्रदान करता है।', exEs: 'El hotel ofrece transporte gratuito al aeropuerto.', ic: '🎁' },
    { w: 'shuttle', p: '/ˈʃʌtl/', m: 'a vehicle that travels regularly between two places', hi: 'शटल बस / नियमित वाहन', es: 'autobús de enlace / transporte', fr: 'navette', de: 'Shuttlebus / Zubringer', pt: 'ônibus de traslado / transfer', zh: '班车 / 班机', ar: 'حافلة مكوكية', ja: 'シャトルバス', ru: 'шаттл / трансфер', ex: 'The airport shuttle departs every twenty minutes from Terminal 2.', exHi: 'हवाई अड्डा शटल टर्मिनल 2 से हर बीस मिनट में रवाना होती है।', exEs: 'El autobús de enlace sale cada veinte minutos de la Terminal 2.', ic: '🚐' },
    { w: 'flexible ticket', p: '/ˈfleksəbl ˈtɪkɪt/', m: 'a ticket allowing date or time changes without penalty', hi: 'लचीला टिकट (बदलाव योग्य)', es: 'billete flexible', fr: 'billet modifiable', de: 'flexibles Ticket', pt: 'passagem flexível', zh: '灵活改签机票', ar: 'تذكرة مرنة', ja: '変更可能チケット', ru: 'гибкий билет (с возможностью обмена)', ex: 'Booking a flexible ticket allowed us to change our return flight easily.', exHi: 'लचीला टिकट बुक करने से हमें अपनी वापसी उड़ान को आसानी से बदलने की अनुमति मिली।', exEs: 'Reservar un billete flexible nos permitió cambiar el vuelo de regreso.', ic: '🎫' },
    { w: 'shuttle bus', p: '/ˈʃʌtl bʌs/', m: 'a bus traveling between fixed locations such as an airport and city center', hi: 'शटल बस', es: 'autobús de enlace', fr: 'navette en bus', de: 'Pendelbus', pt: 'ônibus de traslado', zh: '穿梭巴士', ar: 'حافلة نقل', ja: '送迎バス', ru: 'маршрутный автобус', ex: 'We took the express shuttle bus directly to the train station.', exHi: 'हमने सीधे रेलवे स्टेशन के लिए एक्सप्रेस शटल बस ली।', exEs: 'Tomamos el autobús de enlace directo a la estación de tren.', ic: '🚌' },
    { w: 'direct flight', p: '/dəˈrekt flaɪt/', m: 'a flight between two points without any stopovers or changes', hi: 'सीधी उड़ान', es: 'vuelo directo', fr: 'vol direct', de: 'Direktflug', pt: 'voo direto', zh: '直飞航班', ar: 'رحلة مباشرة', ja: '直行便', ru: 'прямой рейс', ex: 'We chose a direct flight to save travel time.', exHi: 'हमने यात्रा का समय बचाने के लिए सीधी उड़ान चुनी।', exEs: 'Elegimos un vuelo directo para ahorrar tiempo de viaje.', ic: '✈️' }
  ],
  chunks: [
    { phrase: 'would prefer to + verb', meaning: 'express a clear choice or preference politely', hi: 'करना अधिक पसंद करेंगे', es: 'preferiría + verbo', fr: 'préférerait + verbe', de: 'würde lieber + Verb', pt: 'preferiria + verbo', zh: '宁愿 / 更想要...', ar: 'يفضل أن يفعل', ja: '〜することを希望します', ru: 'предпочёл бы сделать', note: 'Standard polite preference formula: "I would prefer to have a quiet room."', ic: '⭐' },
    { phrase: 'would rather + base verb', meaning: 'prefer one alternative over another', hi: 'बजाय इसके यह करना पसंद करेंगे', es: 'preferiría (sin to)', fr: 'aimerait mieux', de: 'möchte lieber', pt: 'preferiria (verbo base)', zh: '宁可 / 宁愿 (直接加动词)', ar: 'يفضل بالأحرى', ja: 'むしろ〜したい', ru: 'лучше бы сделал', note: '"Would rather" takes a base verb without "to": "I would rather take the train than fly."', ic: '🚆' },
    { phrase: 'check in for a flight', meaning: 'register as a passenger upon arrival at the airport or online', hi: 'उड़ान के लिए चेक-इन करना', es: 'hacer el check-in para un vuelo', fr: 's\'enregistrer pour un vol', de: 'für einen Flug einchecken', pt: 'fazer o check-in do voo', zh: '办理登机手续', ar: 'تسجيل الوصول للرحلة', ja: '搭乗手続きをする', ru: 'регистрироваться на рейс', note: 'Can be used online or at a counter.', ic: '💻' },
    { phrase: 'switch my seat to', meaning: 'change one\'s assigned seat for another', hi: 'अपनी सीट बदलकर दूसरी लेना', es: 'cambiar mi asiento a', fr: 'changer mon siège pour', de: 'meinen Sitzplatz wechseln zu', pt: 'trocar meu assento para', zh: '把座位换成', ar: 'تغيير مقعدي إلى', ja: '座席を〜に変更する', ru: 'поменять место на', note: 'Polite request: "Could I switch my seat to an aisle seat?"', ic: '💺' },
    { phrase: 'is there any chance of', meaning: 'politely inquiring if an upgrade or change is possible', hi: 'क्या इसकी कोई संभावना है कि...', es: '¿hay alguna posibilidad de...?', fr: 'y a-t-il une chance de... ?', de: 'besteht die Möglichkeit, dass... ?', pt: 'há alguma chance de... ?', zh: '有可能...吗？', ar: 'هل هناك أي فرصة لـ...؟', ja: '〜の可能性はありますか？', ru: 'есть ли вероятность... ?', note: 'High-frequency customer request formula: "Is there any chance of an upgrade?"', ic: '❓' },
    { phrase: 'miss a connection', meaning: 'arrive too late to catch a connecting flight or train', hi: 'कनेक्टिंग फ्लाइट या ट्रेन छूट जाना', es: 'perder una conexión', fr: 'manquer une correspondance', de: 'einen Anschluss verpassen', pt: 'perder uma conexão', zh: '错过转机 / 转车', ar: 'تفويت رحلة المتابعة', ja: '乗り継ぎに失敗する', ru: 'опоздать на пересадку', note: 'Used when travel delays cause missed subsequent legs.', ic: '🏃' },
    { phrase: 'subject to availability', meaning: 'only possible if slots or seats remain open', hi: 'उपलब्धता के अधीन', es: 'sujeto a disponibilidad', fr: 'sous réserve de disponibilité', de: 'nach Verfügbarkeit', pt: 'sujeito a disponibilidade', zh: '视空位/房源情况而定', ar: 'رهنًا بالتوافر', ja: '空き状況による', ru: 'при наличии мест', note: 'Standard term used by airline and hotel staff.', ic: '📋' },
    { phrase: 'take off on schedule', meaning: 'depart at the exact planned time without delay', hi: 'समय पर उड़ान भरना', es: 'despegar según lo previsto', fr: 'décoller à l\'heure prévue', de: 'planmäßig abheben', pt: 'decolar no horário previsto', zh: '准点起飞', ar: 'الإقلاع في الموعد المحدد', ja: '定刻通りに離陸する', ru: 'вылететь по расписанию', note: 'Used in flight updates.', ic: '🛫' }
  ],
  grammar: {
    title: 'Expressing Preferences & Making Polite Travel Requests: "Would prefer to" vs "Would rather"',
    concept: 'Using preference structures and polite conditionals to navigate travel adjustments smoothly.',
    patterns: [
      {
        title: 'Expressing Preference with "Would prefer to + Verb"',
        structure: 'Subject + would prefer to + Base Verb (+ rather than + Base Verb)',
        rule: 'Use "would prefer to" followed by an infinitive with "to" to state a preference politely.',
        examples: [
          { en: 'I would prefer to stay in a non-smoking room.', hi: 'मैं धूम्रपान-मुक्त कमरे में रहना अधिक पसंद करूँगा।', es: 'Preferiría quedarme en una habitación para no fumadores.' },
          { en: 'We would prefer to take the morning flight rather than the evening one.', hi: 'हम शाम की उड़ान के बजाय सुबह की उड़ान लेना अधिक पसंद करेंगे।', es: 'Preferiríamos tomar el vuelo de la mañana en lugar del de la tarde.' }
        ]
      },
      {
        title: 'Expressing Preference with "Would rather + Base Verb"',
        structure: 'Subject + would rather + Base Verb (+ than + Base Verb)',
        rule: 'Use "would rather" directly followed by a base verb (WITHOUT "to"). The contrast is introduced with "than".',
        examples: [
          { en: 'I would rather sit in an aisle seat.', hi: 'मैं गलियारे वाली सीट पर बैठना पसंद करूँगा।', es: 'Preferiría sentarme en un asiento de pasillo.' },
          { en: 'She would rather travel by train than drive in heavy traffic.', hi: 'वह भारी ट्रैफिक में गाड़ी चलाने के बजाय ट्रेन से यात्रा करना पसंद करेगी।', es: 'Ella preferiría viajar en tren que conducir con mucho tráfico.' }
        ]
      },
      {
        title: 'Polite Inquiries with "Is there any chance of...?" & "Could I possibly...?"',
        structure: 'Is there any chance of + [Noun / Gerund]? | Could I possibly + Base Verb?',
        rule: 'Use these soft modal formulas when asking front desk or check-in agents for upgrades or changes.',
        examples: [
          { en: 'Is there any chance of getting an early check-in?', hi: 'क्या जल्दी चेक-इन मिलने की कोई संभावना है?', es: '¿Hay alguna posibilidad de hacer el registro temprano?' },
          { en: 'Could I possibly change my departure date to Sunday?', hi: 'क्या मैं अपनी प्रस्थान तिथि को रविवार में बदल सकता हूँ?', es: '¿Podría posiblemente cambiar mi fecha de salida al domingo?' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'I would rather to take the afternoon train.',
      cor: 'I would rather take the afternoon train. / I would prefer to take the afternoon train.',
      exp: '"Would rather" is followed by a bare infinitive (WITHOUT "to"). Use "would prefer to" if using "to".',
      hi: '"Would rather" के बाद "to" नहीं आता। "To" के साथ "would prefer to" का प्रयोग करें।',
      es: '"Would rather" no lleva "to". Se usa "would rather take" o "would prefer to take".'
    },
    {
      inc: 'She would rather tea to coffee.',
      cor: 'She would rather have tea than coffee. / She prefers tea to coffee.',
      exp: '"Would rather" uses "than" for comparison, whereas "prefer" takes "to".',
      hi: '"Would rather" के साथ तुलना के लिए "than" आता है।',
      es: '"Would rather" se compara con "than", mientras que "prefer" usa "to".'
    },
    {
      inc: 'Could you tell me what is the gate number?',
      cor: 'Could you tell me what the gate number is?',
      exp: 'In indirect questions, word order is Subject + Verb: "what the gate number is".',
      hi: 'अप्रत्यक्ष प्रश्नों (indirect questions) में क्रम Subject + Verb होता है।',
      es: 'En preguntas indirectas el orden es Sujeto + Verbo: "what the gate number is".'
    },
    {
      inc: 'We arrived to the airport two hours early.',
      cor: 'We arrived at the airport two hours early.',
      exp: 'We arrive "at" a specific building or location (airport/station), not "to".',
      hi: 'हवाई अड्डे या स्टेशन पर पहुँचने के लिए "arrive at" का प्रयोग होता है।',
      es: 'Se llega "at" un lugar específico (aeropuerto), no "to".'
    },
    {
      inc: 'The hotel reimbursed us of our taxi fare.',
      cor: 'The hotel reimbursed us for our taxi fare.',
      exp: 'The correct preposition is "reimburse someone for an expense".',
      hi: 'खर्च की प्रतिपूर्ति के लिए "reimburse for" का प्रयोग किया जाता है।',
      es: 'Se reembolsa "for" un gasto, no "of".'
    }
  ],
  dialogues: [
    {
      title: 'Requesting a Seat Change at the Airline Check-in Counter',
      context: 'Hannah approaches the airline counter to adjust her seat assignment before boarding.',
      charA: { name: 'Hannah', av: '👩‍💼', role: 'Passenger' },
      charB: { name: 'Kevin', av: '👨‍💼', role: 'Airline Agent' },
      turns: [
        { spk: 'Kevin', text: 'Good afternoon, welcome to Skyways. May I see your passport and booking reference?', hi: 'शुभ दोपहर, स्काईवेज़ में आपका स्वागत है। क्या मैं आपका पासपोर्ट और बुकिंग संदर्भ देख सकता हूँ?', es: 'Buenas tardes, bienvenido a Skyways. ¿Puedo ver su pasaporte y referencia de reserva?' },
        { spk: 'Hannah', text: 'Good afternoon! Here you go. I noticed on the app that I was assigned a middle seat. Is there any chance of switching to an aisle seat?', hi: 'शुभ दोपहर! यह लीजिए। मैंने ऐप पर देखा कि मुझे बीच की सीट दी गई थी। क्या गलियारे वाली सीट पर जाने की कोई संभावना है?', es: '¡Buenas tardes! Aquí tiene. Noté en la app que me asignaron un asiento del medio. ¿Hay alguna posibilidad de cambiar a un asiento de pasillo?' },
        { spk: 'Kevin', text: 'Let me check our seat map... Yes, 14C just opened up in the forward cabin. Would you prefer that?', hi: 'मुझे अपना सीट मैप देखने दीजिए... हाँ, आगे के केबिन में 14C सीट अभी खाली हुई है। क्या आप वह पसंद करेंगी?', es: 'Déjeme revisar el mapa... Sí, 14C acaba de quedar libre en la cabina delantera. ¿Preferiría esa?' },
        { spk: 'Hannah', text: 'Yes, I would definitely prefer 14C. Thank you so much for checking!', hi: 'हाँ, मैं निश्चित रूप से 14C पसंद करूँगी। जाँच करने के लिए आपका बहुत-बहुत धन्यवाद!', es: 'Sí, definitivamente preferiría 14C. ¡Muchas gracias por comprobarlo!' },
        { spk: 'Kevin', text: 'You are all set. Boarding begins at 15:40 at Gate B12. Have a pleasant flight!', hi: 'आपका सब कुछ व्यवस्थित हो गया है। बोर्डिंग गेट B12 पर 15:40 पर शुरू होगी। आपकी सुखद यात्रा हो!', es: 'Todo listo. El embarque comienza a las 15:40 en la puerta B12. ¡Que tenga un buen vuelo!' }
      ]
    },
    {
      title: 'Inquiring About Hotel Room Upgrades & Amenities',
      context: 'Mateo checks in at a city hotel and inquires about high-floor room availability.',
      charA: { name: 'Mateo', av: '👨‍💼', role: 'Guest' },
      charB: { name: 'Sandra', av: '👩‍💼', role: 'Front Desk Manager' },
      turns: [
        { spk: 'Mateo', text: 'Hello, I have a reservation under the name Mateo Rossi for three nights.', hi: 'नमस्ते, मेरे पास माटेओ रॉसी के नाम से तीन रातों के लिए आरक्षण है।', es: 'Hola, tengo una reserva a nombre de Mateo Rossi por tres noches.' },
        { spk: 'Sandra', text: 'Welcome Mr. Rossi. We have your deluxe king room ready on the third floor.', hi: 'स्वागत है श्रीमान रॉसी। आपका डीलक्स किंग कमरा तीसरी मंजिल पर तैयार है।', es: 'Bienvenido Sr. Rossi. Tenemos su habitación king deluxe lista en el tercer piso.' },
        { spk: 'Mateo', text: 'Thank you. If possible, I would rather stay on a higher floor away from street noise.', hi: 'धन्यवाद। यदि संभव हो, तो मैं सड़क के शोर से दूर किसी ऊंची मंजिल पर रहना पसंद करूँगा।', es: 'Gracias. Si es posible, preferiría quedarme en un piso más alto, lejos del ruido de la calle.' },
        { spk: 'Sandra', text: 'Certainly! We have a quiet room on the tenth floor with skyline views. I will upgrade your keycard right away.', hi: 'बिल्कुल! हमारे पास दसवीं मंजिल पर शहर के दृश्यों वाला एक शांत कमरा है। मैं आपका कीकार्ड तुरंत अपग्रेड कर देती हूँ।', es: '¡Por supuesto! Tenemos una habitación tranquila en el décimo piso con vistas panorámicas. Actualizaré su tarjeta llave ahora mismo.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_u10_l139_p01',
      type: 'multiple_choice',
      prompt: 'Select the grammatically correct preference sentence:',
      options: [
        { id: '1', text: 'I would rather stay in an aisle seat than sit in the middle.', isCorrect: true },
        { id: '2', text: 'I would rather to stay in an aisle seat than sit in the middle.', isCorrect: false },
        { id: '3', text: 'I would rather staying in an aisle seat than sit in the middle.', isCorrect: false },
        { id: '4', text: 'I would rather stay in an aisle seat to sit in the middle.', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: '"Would rather" takes a base verb ("stay") and contrasts with "than".'
    },
    {
      id: 'ex_u10_l139_p02',
      type: 'fill_blank',
      prompt: 'We would prefer _____ (take) the direct flight to avoid a long layover.',
      correctAnswer: 'to take',
      explanation: '"Would prefer" is followed by the infinitive "to take".'
    },
    {
      id: 'ex_u10_l139_p03',
      type: 'word_ordering',
      prompt: 'Arrange the words to form a polite customer request:',
      tokens: ['Is', 'there', 'any', 'chance', 'of', 'an', 'early', 'check-in?'],
      correctAnswer: 'Is there any chance of an early check-in?',
      explanation: '"Is there any chance of...?" is a polite inquiry formula.'
    },
    {
      id: 'ex_u10_l139_p04',
      type: 'error_correction',
      prompt: 'Find and fix the error in the sentence:',
      sentence: 'She would rather to travel by train than fly.',
      correctAnswer: 'She would rather travel by train than fly.',
      explanation: 'Remove "to" after "would rather".'
    },
    {
      id: 'ex_u10_l139_p05',
      type: 'translation',
      prompt: 'Translate into English: "क्या मैं अपनी सीट को खिड़की वाली सीट से बदल सकता हूँ?"',
      correctAnswer: 'Could I switch my seat to a window seat?',
      acceptableAnswers: ['Can I switch my seat to a window seat?', 'Could I change my seat to a window seat?'],
      explanation: '"Switch my seat to a window seat" is natural and accurate.'
    },
    {
      id: 'ex_u10_l139_p06',
      type: 'listening',
      prompt: 'Listen to the airport announcement and identify the gate number:',
      audioText: 'Attention passengers on flight BA 204 to Rome: boarding will now commence at Gate B14.',
      options: [
        { id: '1', text: 'Gate B14', isCorrect: true },
        { id: '2', text: 'Gate A14', isCorrect: false },
        { id: '3', text: 'Gate B40', isCorrect: false },
        { id: '4', text: 'Gate C24', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The announcement states Gate B14.'
    },
    {
      id: 'ex_u10_l139_p07',
      type: 'match_pairs',
      prompt: 'Match travel terms with their descriptions:',
      options: [
        { id: '1', text: 'layover → waiting time between connecting flights' },
        { id: '2', text: 'itinerary → planned schedule of travel routes' },
        { id: '3', text: 'aisle seat → seat next to the walkway' },
        { id: '4', text: 'carry-on → luggage brought into the aircraft cabin' }
      ],
      correctAnswer: 'matched',
      explanation: 'Essential airport and flight vocabulary.'
    },
    {
      id: 'ex_u10_l139_p08',
      type: 'dialogue_completion',
      prompt: 'Complete the hotel dialogue:\nA: "Would you like a room facing the street or the courtyard?"\nB: "I _____ facing the courtyard because it is quieter."',
      options: [
        { id: '1', text: 'would prefer a room', isCorrect: true },
        { id: '2', text: 'would rather to have a room', isCorrect: false },
        { id: '3', text: 'am preferring a room', isCorrect: false },
        { id: '4', text: 'have to prefer a room', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: '"Would prefer a room" is grammatically sound and polite.'
    },
    {
      id: 'ex_u10_l139_p09',
      type: 'speaking',
      prompt: 'Speak this sentence with clear airport pronunciation:',
      targetText: 'I would prefer an aisle seat so that I can stretch my legs during the long flight.',
      explanation: 'Maintain clear pacing on "prefer", "aisle seat", and "stretch".'
    },
    {
      id: 'ex_u10_l139_p10',
      type: 'personal_production',
      prompt: 'Write a sentence expressing your flight preference using "I would rather... than...":',
      sentenceTemplate: 'I would rather [action 1] than [action 2].',
      correctAnswer: 'I would rather take a direct flight than have a long layover.',
      explanation: 'Applies the "would rather + base verb ... than" construction.'
    }
  ],
  review: [
    {
      id: 'ex_u10_l139_r01',
      type: 'multiple_choice',
      prompt: 'Which verb pattern is required after "would prefer"?',
      options: [
        { id: '1', text: 'to + Base Verb', isCorrect: true },
        { id: '2', text: 'Base Verb without to', isCorrect: false },
        { id: '3', text: 'Gerund (-ing)', isCorrect: false },
        { id: '4', text: 'Past participle', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: '"Would prefer" takes an infinitive with "to" (e.g., "would prefer to travel").'
    },
    {
      id: 'ex_u10_l139_r02',
      type: 'fill_blank',
      prompt: 'I would rather _____ (arrive) thirty minutes early than rush through airport security.',
      correctAnswer: 'arrive',
      explanation: '"Would rather" is followed directly by the base verb "arrive".'
    },
    {
      id: 'ex_u10_l139_r03',
      type: 'word_ordering',
      prompt: 'Reorder the words into a polite question:',
      tokens: ['Could', 'you', 'please', 'confirm', 'my', 'hotel', 'reservation?'],
      correctAnswer: 'Could you please confirm my hotel reservation?',
      explanation: 'Polite inquiry structure.'
    },
    {
      id: 'ex_u10_l139_r04',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence:',
      sentence: 'We arrived to the terminal just before the gate closed.',
      correctAnswer: 'We arrived at the terminal just before the gate closed.',
      explanation: 'Use "arrived at" for stations and terminals.'
    },
    {
      id: 'ex_u10_l139_r05',
      type: 'translation',
      prompt: 'Translate into English: "होटल मुफ्त हवाई अड्डा शटल सेवा प्रदान करता है।"',
      correctAnswer: 'The hotel provides a complimentary airport shuttle service.',
      acceptableAnswers: ['The hotel offers a free airport shuttle service.'],
      explanation: '"Complimentary" is the professional term for free service.'
    },
    {
      id: 'ex_u10_l139_r06',
      type: 'listening',
      prompt: 'Listen to the baggage policy and choose the permitted weight:',
      audioText: 'Each passenger is allowed one carry-on bag and one checked bag up to twenty-three kilograms.',
      options: [
        { id: '1', text: '23 kg', isCorrect: true },
        { id: '2', text: '32 kg', isCorrect: false },
        { id: '3', text: '15 kg', isCorrect: false },
        { id: '4', text: '20 kg', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The weight limit is 23 kg.'
    },
    {
      id: 'ex_u10_l139_r07',
      type: 'listen_and_type',
      prompt: 'Listen and type what you hear:',
      audioText: 'Our connecting flight departs from Gate B14 in forty minutes.',
      correctAnswer: 'Our connecting flight departs from Gate B14 in forty minutes.',
      explanation: 'Focus on capitalization and numbers.'
    },
    {
      id: 'ex_u10_l139_r08',
      type: 'multiple_choice',
      prompt: 'What does "complimentary" mean in a hotel description?',
      options: [
        { id: '1', text: 'Free of charge', isCorrect: true },
        { id: '2', text: 'Very expensive', isCorrect: false },
        { id: '3', text: 'Mandatory', isCorrect: false },
        { id: '4', text: 'Available on weekends only', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: '"Complimentary" means provided without additional charge.'
    }
  ],
  assessment: [
    {
      id: 'ex_u10_l139_a01',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses preference without errors?',
      options: [
        { id: '1', text: 'I would rather stay in a quiet room on the top floor.', isCorrect: true },
        { id: '2', text: 'I would rather to stay in a quiet room on the top floor.', isCorrect: false },
        { id: '3', text: 'I would prefer stay in a quiet room on the top floor.', isCorrect: false },
        { id: '4', text: 'I would rather staying in a quiet room on the top floor.', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Option 1 correctly pairs "would rather" with bare infinitive "stay".'
    },
    {
      id: 'ex_u10_l139_a02',
      type: 'fill_blank',
      prompt: 'She would prefer _____ (book) a flexible ticket in case her plans change.',
      correctAnswer: 'to book',
      explanation: '"Would prefer" takes an infinitive with "to".'
    },
    {
      id: 'ex_u10_l139_a03',
      type: 'word_ordering',
      prompt: 'Assemble the tokens to make a natural question:',
      tokens: ['Is', 'there', 'any', 'chance', 'of', 'getting', 'a', 'room', 'upgrade?'],
      correctAnswer: 'Is there any chance of getting a room upgrade?',
      explanation: '"Is there any chance of + gerund" is polite and grammatically correct.'
    },
    {
      id: 'ex_u10_l139_a04',
      type: 'error_correction',
      prompt: 'Fix the grammatical error in this sentence:',
      sentence: 'He would rather to fly direct than have a six-hour layover.',
      correctAnswer: 'He would rather fly direct than have a six-hour layover.',
      explanation: 'Omit "to" after "would rather".'
    },
    {
      id: 'ex_u10_l139_a05',
      type: 'translation',
      prompt: 'Translate into English: "क्या आप कृपया मेरे यात्रा कार्यक्रम के विवरण की पुष्टि कर सकते हैं?"',
      correctAnswer: 'Could you please confirm the details of my itinerary?',
      acceptableAnswers: ['Can you please confirm my itinerary details?'],
      explanation: '"Itinerary" represents travel plan details.'
    },
    {
      id: 'ex_u10_l139_a06',
      type: 'dialogue_completion',
      prompt: 'Choose the best response at hotel check-in:\nGuest: "Could I have a quiet room on a high floor?"\nReceptionist: "Certainly! We have an opening on the ninth floor, _____."',
      options: [
        { id: '1', text: 'subject to availability', isCorrect: false },
        { id: '2', text: 'which is far away from street traffic', isCorrect: true },
        { id: '3', text: 'would rather to cancel', isCorrect: false },
        { id: '4', text: 'reimbursing your delay', isCorrect: false }
      ],
      correctAnswer: '2',
      explanation: 'Option 2 completes the reassurance logically.'
    },
    {
      id: 'ex_u10_l139_a07',
      type: 'speaking',
      prompt: 'Speak this sentence clearly and politely:',
      targetText: 'I would prefer to check in online and switch my seat to an aisle seat if possible.',
      explanation: 'Articulate each clause cleanly.'
    }
  ]
};

// =========================================================================
// LESSON 140: Navigating City Services, Public Transport & Local Facilities
// =========================================================================
export const LESSON_140_CONFIG: LessonConfigA2 = {
  num: 140,
  title: 'Navigating City Services, Public Transport & Local Facilities',
  icon: '🚇',
  estMin: 25,
  objTitle: 'Asking for Directions, Using Indirect Questions & Accessing City Services',
  objDesc: 'Learn to use polite indirect questions ("Could you tell me where...", "Do you know if...") to find city services, navigate metro systems, and access municipal facilities.',
  objHi: 'शहर की सेवाओं, मेट्रो और स्थानीय सुविधाओं को खोजने के लिए विनम्र अप्रत्यक्ष प्रश्नों ("Could you tell me where...", "Do you know if...") का उपयोग करना सीखें।',
  objEs: 'Preguntar direcciones, usar preguntas indirectas y acceder a servicios públicos y transporte municipal con cortesía.',
  canDo: [
    'I can ask for directions and transit information using polite indirect questions.',
    'I can understand subway maps, bus route schedules, and transit announcements.',
    'I can inquire about opening hours, fees, and procedures at public offices (post office, library, citizen center).',
    'I can report a lost transit card or request assistance at a station information kiosk.'
  ],
  canDoHi: [
    'मैं विनम्र अप्रत्यक्ष प्रश्नों का उपयोग करके दिशा-निर्देश और पारगमन जानकारी मांग सकता हूँ।',
    'मैं सबवे मैप, बस रूट शेड्यूल और पारगमन घोषणाओं को समझ सकता हूँ।',
    'मैं डाकघर, पुस्तकालय और नागरिक केंद्र पर खुलने के समय, शुल्क और प्रक्रियाओं के बारे में पूछताछ कर सकता हूँ।',
    'मैं खोए हुए पारगमन कार्ड की रिपोर्ट कर सकता हूँ या स्टेशन सूचना कियोस्क पर सहायता मांग सकता हूँ।'
  ],
  canDoEs: [
    'Puedo pedir direcciones usando preguntas indirectas educadas.',
    'Puedo entender mapas de metro, rutas de autobús y avisos de transporte.',
    'Puedo consultar horarios y trámites en oficinas públicas.',
    'Puedo reportar tarjetas de transporte perdidas y pedir ayuda en taquillas.'
  ],
  vocab: [
    { w: 'public transport', p: '/ˌpʌblɪk ˈtrænspɔːt/', m: 'buses, trains, and subways available to the public', hi: 'सार्वजनिक परिवहन', es: 'transporte público', fr: 'transports en commun', de: 'öffentlicher Nahverkehr', pt: 'transporte público', zh: '公共交通', ar: 'المواصلات العامة', ja: '公共交通機関', ru: 'общественный транспорт', ex: 'Taking public transport is faster and cheaper during rush hour.', exHi: 'व्यस्त समय में सार्वजनिक परिवहन लेना तेज़ और सस्ता है।', exEs: 'Usar el transporte público es más rápido y barato en hora punta.', ic: '🚌' },
    { w: 'subway', p: '/ˈsʌbweɪ/', m: 'an underground electric railroad system', hi: 'भूमिगत रेल / सबवे', es: 'metro / subterráneo', fr: 'métro', de: 'U-Bahn', pt: 'metrô', zh: '地铁', ar: 'مترو الأنفاق', ja: '地下鉄', ru: 'метро', ex: 'Line 2 of the subway connects the downtown center with the university.', exHi: 'सबवे की लाइन 2 शहर के केंद्र को विश्वविद्यालय से जोड़ती है।', exEs: 'La línea 2 del metro conecta el centro con la universidad.', ic: '🚇' },
    { w: 'fare', p: '/feə/', m: 'the money a passenger on public transportation has to pay', hi: 'किराया / भाड़ा', es: 'tarifa / pasaje', fr: 'tarif / prix du billet', de: 'Fahrpreis / Fahrkarte', pt: 'tarifa / passagem', zh: '车费 / 票价', ar: 'أجرة', ja: '運賃', ru: 'стоимость проезда / тариф', ex: 'The standard bus fare within Zone 1 is two pounds fifty.', exHi: 'ज़ोन 1 के भीतर मानक बस का किराया दो पाउंड पचास पेंस है।', exEs: 'La tarifa estándar de autobús en la Zona 1 es de dos libras cincuenta.', ic: '🎫' },
    { w: 'transfer', p: '/trænsˈfɜː/', m: 'move from one vehicle, route, or station to another during a journey', hi: 'बदलना / स्थानांतरण', es: 'hacer transbordo / transferir', fr: 'faire une correspondance / changer', de: 'umsteigen', pt: 'fazer baldeação / transferir', zh: '换乘', ar: 'تحويل / تبديل', ja: '乗り換える', ru: 'пересаживаться', ex: 'You need to transfer to the green line at Central Station.', exHi: 'आपको सेंट्रल स्टेशन पर ग्रीन लाइन में ट्रांसफर करना होगा।', exEs: 'Tienes que hacer transbordo a la línea verde en la Estación Central.', ic: '🔀' },
    { w: 'platform', p: '/ˈplætfɔːm/', m: 'a raised level surface on which passengers board or leave trains', hi: 'रेलवे प्लेटफॉर्म', es: 'andén', fr: 'quai', de: 'Bahnsteig / Gleis', pt: 'plataforma', zh: '站台 / 月台', ar: 'رصيف المحطة', ja: 'ホーム / プラットホーム', ru: 'платформа / перрон', ex: 'The train to Oxford will depart from platform four.', exHi: 'ऑक्सफोर्ड की ट्रेन प्लेटफॉर्म चार से रवाना होगी।', exEs: 'El tren a Oxford saldrá del andén cuatro.', ic: '🚉' },
    { w: 'kiosk', p: '/ˈkiːɒsk/', m: 'a small open-fronted hut or cubicle from which tickets or goods are sold', hi: 'कियोस्क / टिकट बूथ', es: 'quiosco / taquilla automática', fr: 'kiosque / borne', de: 'Kiosk / Ticketautomat', pt: 'quiosque / terminal', zh: '自助机 / 售货亭', ar: 'كشك', ja: '売店 / キオスク', ru: 'киоск / терминал', ex: 'You can recharge your smart transit card at any automated kiosk.', exHi: 'आप किसी भी स्वचालित कियोस्क पर अपने स्मार्ट ट्रांजिट कार्ड को रिचार्ज कर सकते हैं।', exEs: 'Puedes recargar tu tarjeta de transporte en cualquier quiosco automático.', ic: '🏧' },
    { w: 'municipal', p: '/mjuːˈnɪsɪpl/', m: 'relating to a city or town or its governing body', hi: 'नगरपालिका का / म्यूनिसिपल', es: 'municipal', fr: 'municipal', de: 'städtisch / kommunal', pt: 'municipal', zh: '市政的', ar: 'بلدي', ja: '市の / 地方自治体の', ru: 'муниципальный', ex: 'The municipal library offers free public internet and study rooms.', exHi: 'नगरपालिका पुस्तकालय मुफ्त सार्वजनिक इंटरनेट और अध्ययन कक्ष प्रदान करता है।', exEs: 'La biblioteca municipal ofrece internet público gratuito y salas de estudio.', ic: '🏛️' },
    { w: 'facility', p: '/fəˈsɪləti/', m: 'a place, amenity, or piece of equipment provided for a particular purpose', hi: 'सुविधा / सार्वजनिक केंद्र', es: 'instalación / servicio', fr: 'installation / équipement', de: 'Einrichtung / Anlage', pt: 'instalação / serviço', zh: '设施 / 场所', ar: 'مرفق / منشأة', ja: '施設', ru: 'учреждение / объект', ex: 'The community sports facility includes an indoor swimming pool.', exHi: 'सामुदायिक खेल सुविधा में एक इनडोर स्विमिंग पूल शामिल है।', exEs: 'La instalación deportiva comunitaria incluye una piscina cubierta.', ic: '🏟️' },
    { w: 'post office', p: '/pəʊst ˈɒfɪs/', m: 'the public department or building responsible for postal services', hi: 'डाकघर', es: 'oficina de correos', fr: 'bureau de poste', de: 'Postamt', pt: 'correio / agência postal', zh: '邮局', ar: 'مكتب البريد', ja: '郵便局', ru: 'почтовое отделение', ex: 'The main post office is located right across from City Hall.', exHi: 'मुख्य डाकघर सिटी हॉल के ठीक सामने स्थित है।', exEs: 'La oficina de correos principal está ubicada justo frente al ayuntamiento.', ic: '📮' },
    { w: 'citizen center', p: '/ˈsɪtɪzn ˈsentə/', m: 'a municipal office assisting residents with administrative services', hi: 'नागरिक सेवा केंद्र', es: 'centro de atención ciudadana', fr: 'mairie / centre citoyen', de: 'Bürgeramt', pt: 'centro de atendimento ao cidadão', zh: '市民服务中心', ar: 'مركز خدمة المواطنين', ja: '市民センター', ru: 'центр обслуживания граждан', ex: 'I went to the citizen center to register my new residential address.', exHi: 'मैं अपना नया आवासीय पता पंजीकृत कराने नागरिक केंद्र गया था।', exEs: 'Fui al centro de atención ciudadana para registrar mi nuevo domicilio.', ic: '🏢' },
    { w: 'timetable', p: '/ˈtaɪmteɪbl/', m: 'a chart showing the departure and arrival times of trains, buses, or planes', hi: 'समय सारिणी / टाइमटेबल', es: 'horario de transporte', fr: 'horaires / grille horaire', de: 'Fahrplan', pt: 'tabela de horários', zh: '时刻表', ar: 'جدول المواعيد', ja: '時刻表', ru: 'расписание', ex: 'The weekend bus timetable has fewer evening departures.', exHi: 'सप्ताहांत बस समय सारिणी में शाम के प्रस्थान कम हैं।', exEs: 'El horario de autobuses de fin de semana tiene menos salidas.', ic: '📋' },
    { w: 'commute', p: '/kəˈmjuːt/', m: 'travel some distance between one\'s home and place of work on a regular basis', hi: 'दैनिक आवागमन / यात्रा करना', es: 'viajar al trabajo / desplazarse', fr: 'faire le trajet domicile-travail', de: 'pendeln', pt: 'deslocar-se para o trabalho', zh: '通勤', ar: 'التنقل اليومي للعمل', ja: '通勤する', ru: 'ездить на работу', ex: 'My daily commute by train takes approximately forty minutes.', exHi: 'ट्रेन से मेरे दैनिक आवागमन में लगभग चालीस मिनट लगते हैं।', exEs: 'Mi viaje diario al trabajo en tren dura unos cuarenta minutos.', ic: '🚆' },
    { w: 'junction', p: '/ˈdʒʌŋkʃn/', m: 'a point where two or more roads, railway lines, or rivers meet', hi: 'जंक्शन / चौराहा / संगम', es: 'cruce / empalme', fr: 'carrefour / jonction', de: 'Kreuzung / Knotenpunkt', pt: 'cruzamento / entroncamento', zh: '枢纽 / 交叉口', ar: 'تقاطع', ja: '交差点 / ジャンクション', ru: 'перекрёсток / узловая станция', ex: 'Turn left at the next major road junction to find the library.', exHi: 'पुस्तकालय खोजने के लिए अगले मुख्य सड़क जंक्शन पर बाएं मुड़ें।', exEs: 'Gire a la izquierda en el próximo cruce importante para encontrar la biblioteca.', ic: '🚦' },
    { w: 'route', p: '/ruːt/', m: 'a way or course taken in getting from a starting point to a destination', hi: 'मार्ग / रास्ता', es: 'ruta / trayecto', fr: 'itinéraire / ligne', de: 'Route / Linie', pt: 'rota / linha', zh: '路线', ar: 'مسار', ja: '経路 / ルート', ru: 'маршрут', ex: 'Bus route 42 stops right outside the medical clinic.', exHi: 'बस रूट 42 मेडिकल क्लिनिक के ठीक बाहर रुकता है।', exEs: 'La línea de autobús 42 para justo afuera de la clínica médica.', ic: '🗺️' },
    { w: 'pedestrian', p: '/pəˈdestriən/', m: 'a person walking along a road or in a developed area', hi: 'पैदल यात्री', es: 'peatón', fr: 'piéton', de: 'Fußgänger', pt: 'pedestre', zh: '行人', ar: 'مشاة', ja: '歩行者', ru: 'пешеход', ex: 'This historic street is reserved exclusively for pedestrians.', exHi: 'यह ऐतिहासिक सड़क विशेष रूप से पैदल यात्रियों के लिए आरक्षित है।', exEs: 'Esta calle histórica está reservada exclusivamente para peatones.', ic: '🚶' },
    { w: 'lost and found', p: '/lɒst ænd faʊnd/', m: 'a place where lost property is kept for owners to retrieve', hi: 'खोया-पाया विभाग', es: 'oficina de objetos perdidos', fr: 'bureau des objets trouvés', de: 'Fundbüro', pt: 'achados e perdidos', zh: '失物招领处', ar: 'قسم المفقودات', ja: '遺失物取扱所', ru: 'бюро находок', ex: 'I went to the station\'s lost and found to retrieve my umbrella.', exHi: 'मैं अपना छाता वापस पाने के लिए स्टेशन के खोया-पाया विभाग में गया।', exEs: 'Fui a la oficina de objetos perdidos de la estación para recuperar mi paraguas.', ic: '🔍' },
    { w: 'inquiry', p: '/ɪnˈkwaɪəri/', m: 'an act of asking for information', hi: 'पूछताछ / जानकारी मांगना', es: 'consulta / solicitud de información', fr: 'demande de renseignements', de: 'Anfrage / Erkundigung', pt: 'consulta / pedido de informação', zh: '问讯 / 查询', ar: 'استفسار', ja: '問い合わせ', ru: 'запрос / справка', ex: 'Please direct all transit inquiries to the main customer window.', exHi: 'कृपया सभी पारगमन पूछताछ को मुख्य ग्राहक खिड़की पर निर्देशित करें।', exEs: 'Dirija todas las consultas de transporte a la ventanilla principal.', ic: '❓' },
    { w: 'zone', p: '/zəʊn/', m: 'an area or stretch of land having a particular restriction or fare rate', hi: 'ज़ोन / क्षेत्र', es: 'zona tarifaria', fr: 'zone tarifaire', de: 'Tarifzone', pt: 'zona tarifária', zh: '区域 / 票价区', ar: 'منطقة', ja: 'ゾーン / 区域', ru: 'зона (тарифная)', ex: 'Tickets for Zone 1 and 2 cover all central subway lines.', exHi: 'ज़ोन 1 और 2 के टिकट सभी केंद्रीय सबवे लाइनों को कवर करते हैं।', exEs: 'Los billetes para las Zonas 1 y 2 cubren todas las líneas centrales.', ic: '🌐' },
    { w: 'announcement', p: '/əˈnaʊnsmənt/', m: 'a formal public statement or broadcast information', hi: 'घोषणा / सार्वजनिक सूचना', es: 'anuncio público / megafonía', fr: 'annonce', de: 'Durchsage / Ankündigung', pt: 'comunicado / aviso sonoro', zh: '播报 / 公告', ar: 'إعلان', ja: 'アナウンス / 告知', ru: 'объявление', ex: 'Listen carefully to the platform announcement regarding track changes.', exHi: 'ट्रैक परिवर्तन के संबंध में प्लेटफॉर्म घोषणा को ध्यान से सुनें।', exEs: 'Escuche atentamente el anuncio del andén sobre cambios de vía.', ic: '📢' },
    { w: 'terminal', p: '/ˈtɜːmɪnl/', m: 'the end of a railway or other transport route, or a station at such a point', hi: 'टर्मिनल / अंतिम स्टेशन', es: 'terminal / estación término', fr: 'terminus / terminal', de: 'Endstation / Terminal', pt: 'terminal / estação final', zh: '终点站 / 航站楼', ar: 'محطة نهائية', ja: '終点 / ターミナル', ru: 'терминал / конечная станция', ex: 'The south terminal handles all express coaches to the airport.', exHi: 'दक्षिण टर्मिनल हवाई अड्डे के लिए सभी एक्सप्रेस बसों को संभालता है।', exEs: 'La terminal sur gestiona todos los autobuses expresos al aeropuerto.', ic: '🏢' }
  ],
  chunks: [
    { phrase: 'could you tell me where', meaning: 'polite formula for asking the location of a service', hi: 'क्या आप मुझे बता सकते हैं कि ... कहाँ है?', es: '¿podría decirme dónde...?', fr: 'pourriez-vous me dire où... ?', de: 'könnten Sie mir sagen, wo... ?', pt: 'você poderia me dizer onde... ?', zh: '能告诉我...在哪里吗？', ar: 'هل يمكنك أن تخبرني أين...؟', ja: '〜がどこにあるか教えていただけますか？', ru: 'не могли бы вы подсказать, где... ?', note: 'Indirect question: requires statement word order (where the station is).', ic: '🗺️' },
    { phrase: 'do you know if', meaning: 'polite inquiry formula for yes/no questions', hi: 'क्या आप जानते हैं कि क्या...', es: '¿sabes si...?', fr: 'savez-vous si... ?', de: 'wissen Sie, ob... ?', pt: 'você sabe se... ?', zh: '你知道是否...吗？', ar: 'هل تعلم ما إذا كان...؟', ja: '〜かどうかご存じですか？', ru: 'вы не знаете, ... ли ?', note: 'Used with embedded clauses: "Do you know if the library is open?"', ic: '💡' },
    { phrase: 'how do I get to', meaning: 'asking for step-by-step route directions', hi: 'मैं ... कैसे पहुँचूँ?', es: '¿cómo llego a...?', fr: 'comment puis-je me rendre à... ?', de: 'wie komme ich zu... ?', pt: 'como chego a... ?', zh: '去...怎么走？', ar: 'كيف أصل إلى...؟', ja: '〜へはどう行けばいいですか？', ru: 'как мне добраться до... ?', note: 'Standard street direction request: "How do I get to the central hospital?"', ic: '🚶' },
    { phrase: 'change trains at', meaning: 'transfer to a different train line at a specific station', hi: 'पर ट्रेन बदलना', es: 'cambiar de tren en', fr: 'changer de train à', de: 'umsteigen in', pt: 'mudar de trem em', zh: '在...换车', ar: 'تبديل القطار في', ja: '〜で電車を乗り換える', ru: 'сделать пересадку на станции', note: 'Transit direction formula: "You need to change trains at Victoria."', ic: '🔄' },
    { phrase: 'within walking distance', meaning: 'close enough to reach comfortably on foot', hi: 'पैदल जाने की दूरी पर', es: 'a poca distancia a pie', fr: 'à quelques pas / accessible à pied', de: 'fußläufig erreichbar', pt: 'a uma curta distância a pé', zh: '步行可达的距离', ar: 'على مسافة قريبة سيرًا على الأقدام', ja: '徒歩圏内', ru: 'в шаговой доступности', note: 'Very common in city directions: "The museum is within walking distance."', ic: '👟' },
    { phrase: 'tap your card at the gate', meaning: 'scan an electronic transit pass at the turnstile', hi: 'गेट पर अपना कार्ड टच/टैप करना', es: 'pasar la tarjeta por el torno', fr: 'badger sa carte au portique', de: 'die Karte an der Schranke einscannen', pt: 'aproximar o cartão na catraca', zh: '在闸机处刷卡', ar: 'تمرير البطاقة عند البوابة', ja: '改札でカードをタッチする', ru: 'приложить карту к турникету', note: 'Everyday urban transit instruction.', ic: '💳' },
    { phrase: 'stand clear of the closing doors', meaning: 'move away from automatic train doors as they close', hi: 'बंद होते दरवाजों से दूर रहें', es: 'manténgase alejado de las puertas', fr: 'éloignez-vous de la fermeture des portes', de: 'bitte von den schließenden Türen zurücktreten', pt: 'afaste-se das portas ao fechar', zh: '请远离正在关闭的车门', ar: 'يرجى الابتعاد عن الأبواب المغلقة', ja: '閉まるドアにご注意ください', ru: 'осторожно, двери закрываются', note: 'Iconic transit system announcement.', ic: '🚪' },
    { phrase: 'is this seat taken?', meaning: 'asking if an empty bus/train seat is occupied', hi: 'क्या यह सीट भरी हुई है / किसी की है?', es: '¿está ocupado este asiento?', fr: 'ce siège est-il occupé ?', de: 'ist dieser Platz besetzt?', pt: 'este assento está ocupado?', zh: '请问这里有人坐吗？', ar: 'هل هذا المقعد مشغول؟', ja: 'この席は空いていますか？', ru: 'здесь свободно?', note: 'Polite transit etiquette phrase.', ic: '💺' }
  ],
  grammar: {
    title: 'Polite Indirect Questions for City Directions & Public Inquiries',
    concept: 'Forming polite indirect questions with introductory phrases ("Could you tell me...", "Do you know...") and statement word order (Subject + Verb).',
    patterns: [
      {
        title: 'Wh- Indirect Questions: Introductory Phrase + Question Word + Subject + Verb',
        structure: 'Could you tell me + where / when / how / what + Subject + Verb?',
        rule: 'In indirect questions, the auxiliary "do/does/did" is DROPPED and the word order changes from question order (Verb + Subject) to statement order (Subject + Verb).',
        examples: [
          { en: 'Could you tell me where the nearest subway station is?', hi: 'क्या आप मुझे बता सकते हैं कि निकटतम सबवे स्टेशन कहाँ है?', es: '¿Podría decirme dónde está la estación de metro más cercana?' },
          { en: 'Do you know when the next bus arrives?', hi: 'क्या आप जानते हैं कि अगली बस कब आती है?', es: '¿Sabes cuándo llega el próximo autobús?' }
        ]
      },
      {
        title: 'Yes/No Indirect Questions with "If" or "Whether"',
        structure: 'Could you tell me + if / whether + Subject + Verb?',
        rule: 'For yes/no questions, connect the introductory phrase to the embedded clause with "if" or "whether".',
        examples: [
          { en: 'Do you know if this train goes directly to the airport?', hi: 'क्या आप जानते हैं कि क्या यह ट्रेन सीधे हवाई अड्डे तक जाती है?', es: '¿Sabes si este tren va directo al aeropuerto?' },
          { en: 'Could you tell me if the post office is still open?', hi: 'क्या आप मुझे बता सकते हैं कि क्या डाकघर अभी भी खुला है?', es: '¿Podría decirme si la oficina de correos todavía está abierta?' }
        ]
      },
      {
        title: 'Asking for Directions: "How do I get to...?" & Prepositions of Movement',
        structure: 'How do I get to + [Destination]? | Go straight, turn left at [Junction], walk past [Landmark].',
        rule: 'Combine direction requests with imperatives and prepositions of movement (along, across, past, opposite).',
        examples: [
          { en: 'How do I get to the central library from here?', hi: 'यहाँ से केंद्रीय पुस्तकालय कैसे पहुँचें?', es: '¿Cómo llego a la biblioteca central desde aquí?' },
          { en: 'Walk along this avenue, turn right at the traffic lights, and it is on your left.', hi: 'इस रास्ते पर सीधे चलें, ट्रैफिक लाइट पर दाएं मुड़ें, और यह आपकी बाईं ओर है।', es: 'Camine por esta avenida, gire a la derecha en el semáforo y estará a su izquierda.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'Could you tell me where is the post office?',
      cor: 'Could you tell me where the post office is?',
      exp: 'In indirect questions, the verb ("is") comes AFTER the subject ("the post office").',
      hi: 'अप्रत्यक्ष प्रश्नों में सहायक क्रिया (is) विषय (the post office) के बाद आती है।',
      es: 'En preguntas indirectas el verbo ("is") va DESPUÉS del sujeto ("the post office").'
    },
    {
      inc: 'Do you know when does the bus leave?',
      cor: 'Do you know when the bus leaves?',
      exp: 'Do not use "does" in the embedded clause of an indirect question. Add "-s" to the main verb.',
      hi: 'अप्रत्यक्ष प्रश्न में "does" हटा दिया जाता है और क्रिया में "leaves" लिखा जाता है।',
      es: 'No se usa "does" en preguntas indirectas. Se conjuga el verbo: "when the bus leaves".'
    },
    {
      inc: 'How I can get to the train station?',
      cor: 'How can I get to the train station? / How do I get to the train station?',
      exp: 'Direct questions retain question word order: Question word + Auxiliary + Subject + Verb.',
      hi: 'प्रत्यक्ष प्रश्न में सहायक क्रिया (can/do) विषय से पहले आती है।',
      es: 'En preguntas directas se invierte el sujeto y el auxiliar: "How can I get to...".'
    },
    {
      inc: 'You must change the train on Central Station.',
      cor: 'You must change trains at Central Station.',
      exp: 'The collocation is "change trains" (plural), and we use the preposition "at" with stations.',
      hi: 'ट्रेन बदलने के लिए "change trains at" का प्रयोग होता है।',
      es: 'La frase correcta es "change trains at Central Station".'
    },
    {
      inc: 'The museum is in walking distance.',
      cor: 'The museum is within walking distance.',
      exp: 'The set phrase is "within walking distance", using the preposition "within".',
      hi: 'पैदल दूरी के लिए सही मुहावरा "within walking distance" है।',
      es: 'La expresión fija es "within walking distance".'
    }
  ],
  dialogues: [
    {
      title: 'Asking for Directions at a Metro Information Booth',
      context: 'Lucas asks the metro station assistant, Chloe, how to reach the citizen registration office.',
      charA: { name: 'Lucas', av: '👨‍💼', role: 'Commuter' },
      charB: { name: 'Chloe', av: '👩‍💼', role: 'Transit Attendant' },
      turns: [
        { spk: 'Lucas', text: 'Excuse me. Could you tell me where the nearest exit for City Hall is?', hi: 'माफ़ कीजिए। क्या आप मुझे बता सकते हैं कि सिटी हॉल के लिए निकटतम निकास कहाँ है?', es: 'Disculpe. ¿Podría decirme dónde está la salida más cercana para el ayuntamiento?' },
        { spk: 'Chloe', text: 'Certainly! Take Exit 3 on your right. Once you reach street level, walk straight for two blocks.', hi: 'बिल्कुल! अपनी दाईं ओर एग्जिट 3 लें। एक बार जब आप सड़क स्तर पर पहुँच जाएं, तो दो ब्लॉक सीधे चलें।', es: '¡Por supuesto! Tome la salida 3 a su derecha. Al llegar a la calle, camine recto dos manzanas.' },
        { spk: 'Lucas', text: 'Thank you! Do you know if I need to transfer if I want to visit the municipal museum later?', hi: 'धन्यवाद! क्या आप जानते हैं कि अगर मैं बाद में नगरपालिका संग्रहालय देखना चाहता हूँ तो क्या मुझे ट्रेन बदलनी होगी?', es: '¡Gracias! ¿Sabe si tengo que hacer transbordo si quiero visitar el museo municipal más tarde?' },
        { spk: 'Chloe', text: 'Yes, you take Line 1 from here and transfer to Line 4 at Central Junction. It takes only fifteen minutes.', hi: 'हाँ, आप यहाँ से लाइन 1 लेते हैं और सेंट्रल जंक्शन पर लाइन 4 में ट्रांसफर करते हैं। इसमें केवल पंद्रह मिनट लगते हैं।', es: 'Sí, toma la Línea 1 desde aquí y hace transbordo a la Línea 4 en Central Junction. Solo toma quince minutos.' },
        { spk: 'Lucas', text: 'That is very clear. Thanks for your help!', hi: 'यह बहुत स्पष्ट है। आपकी मदद के लिए धन्यवाद!', es: 'Muy claro. ¡Gracias por su ayuda!' }
      ]
    },
    {
      title: 'Buying a Smart Transit Pass at an Information Kiosk',
      context: 'Amira inquires about transit fares and weekly passes with an attendant.',
      charA: { name: 'Amira', av: '👩‍🎓', role: 'Visitor' },
      charB: { name: 'Gareth', av: '👨‍💼', role: 'Kiosk Officer' },
      turns: [
        { spk: 'Amira', text: 'Hello! Could you tell me how much a seven-day travel pass costs for Zones 1 and 2?', hi: 'नमस्ते! क्या आप मुझे बता सकते हैं कि ज़ोन 1 और 2 के लिए सात दिन के ट्रैवल पास की कीमत कितनी है?', es: '¡Hola! ¿Podría decirme cuánto cuesta un pase de siete días para las zonas 1 y 2?' },
        { spk: 'Gareth', text: 'Hello. A seven-day unlimited pass is thirty-five euros. It is valid on all buses, subways, and trams.', hi: 'नमस्ते। सात दिन का असीमित पास पैंतीस यूरो का है। यह सभी बसों, सबवे और ट्रामों पर मान्य है।', es: 'Hola. Un pase ilimitado de siete días cuesta treinta y cinco euros. Es válido en todos los autobuses, metros y tranvías.' },
        { spk: 'Amira', text: 'Do you know if I can top up this card online if I stay an extra week?', hi: 'क्या आप जानते हैं कि यदि मैं एक सप्ताह और रुकता हूँ तो क्या मैं इस कार्ड को ऑनलाइन टॉप अप कर सकता हूँ?', es: '¿Sabe si puedo recargar esta tarjeta por internet si me quedo una semana más?' },
        { spk: 'Gareth', text: 'Yes, just scan the QR code on the back of the card to manage your balance anytime.', hi: 'हाँ, किसी भी समय अपने बैलेंस को प्रबंधित करने के लिए कार्ड के पीछे दिए गए क्यूआर कोड को स्कैन करें।', es: 'Sí, simplemente escanee el código QR detrás de la tarjeta para administrar su saldo.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_u10_l140_p01',
      type: 'multiple_choice',
      prompt: 'Select the correctly formed indirect question:',
      options: [
        { id: '1', text: 'Could you tell me where the ticket office is?', isCorrect: true },
        { id: '2', text: 'Could you tell me where is the ticket office?', isCorrect: false },
        { id: '3', text: 'Could you tell me where does the ticket office is?', isCorrect: false },
        { id: '4', text: 'Could you tell where the ticket office be?', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'In indirect questions, the subject ("the ticket office") precedes the verb ("is").'
    },
    {
      id: 'ex_u10_l140_p02',
      type: 'fill_blank',
      prompt: 'Do you know when the next bus _____ (arrive)?',
      correctAnswer: 'arrives',
      explanation: 'In indirect questions, use standard present tense verb form "arrives" for third-person singular.'
    },
    {
      id: 'ex_u10_l140_p03',
      type: 'word_ordering',
      prompt: 'Arrange the words into a polite indirect inquiry:',
      tokens: ['Do', 'you', 'know', 'if', 'the', 'library', 'is', 'open', 'today?'],
      correctAnswer: 'Do you know if the library is open today?',
      explanation: '"Do you know if + subject + verb" forms a polite yes/no inquiry.'
    },
    {
      id: 'ex_u10_l140_p04',
      type: 'error_correction',
      prompt: 'Fix the error in this sentence:',
      sentence: 'Could you tell me how much does the subway fare cost?',
      correctAnswer: 'Could you tell me how much the subway fare costs?',
      explanation: 'Remove "does" and add "-s" to "costs".'
    },
    {
      id: 'ex_u10_l140_p05',
      type: 'translation',
      prompt: 'Translate into English: "क्या आप मुझे बता सकते हैं कि मुख्य डाकघर कहाँ है?"',
      correctAnswer: 'Could you tell me where the main post office is?',
      acceptableAnswers: ['Can you tell me where the main post office is?'],
      explanation: 'Accurate indirect question structure.'
    },
    {
      id: 'ex_u10_l140_p06',
      type: 'listening',
      prompt: 'Listen to the subway announcement and select what passengers should do:',
      audioText: 'Please stand clear of the closing doors. The next stop is Central Station, change here for Line 2.',
      options: [
        { id: '1', text: 'Stand clear of doors and prepare to transfer at Central Station', isCorrect: true },
        { id: '2', text: 'Exit the train immediately', isCorrect: false },
        { id: '3', text: 'Buy a new ticket on board', isCorrect: false },
        { id: '4', text: 'Wait for the train to turn around', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The announcement warns about closing doors and announces transfer at Central Station.'
    },
    {
      id: 'ex_u10_l140_p07',
      type: 'match_pairs',
      prompt: 'Match public transit terms with their definitions:',
      options: [
        { id: '1', text: 'fare → the cost of a passenger ticket' },
        { id: '2', text: 'transfer → change from one line to another' },
        { id: '3', text: 'junction → place where transit routes meet' },
        { id: '4', text: 'timetable → schedule of departure times' }
      ],
      correctAnswer: 'matched',
      explanation: 'Fundamental transit terminology.'
    },
    {
      id: 'ex_u10_l140_p08',
      type: 'dialogue_completion',
      prompt: 'Complete the direction inquiry:\nA: "Excuse me, how do I get to the botanical garden?"\nB: "Walk straight down this street, and it is _____ on your right."',
      options: [
        { id: '1', text: 'within walking distance', isCorrect: true },
        { id: '2', text: 'in boarding gate', isCorrect: false },
        { id: '3', text: 'to aisle seat', isCorrect: false },
        { id: '4', text: 'must not transfer', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: '"Within walking distance" fits the context naturally.'
    },
    {
      id: 'ex_u10_l140_p09',
      type: 'speaking',
      prompt: 'Speak this polite indirect question aloud:',
      targetText: 'Could you tell me where the nearest pharmacy is? I need some allergy medication.',
      explanation: 'Ensure statement word order at the end: "...where the nearest pharmacy is".'
    },
    {
      id: 'ex_u10_l140_p10',
      type: 'personal_production',
      prompt: 'Write an indirect question asking someone what time the museum opens:',
      sentenceTemplate: 'Could you tell me what time the museum [verb]?',
      correctAnswer: 'Could you tell me what time the museum opens?',
      explanation: 'Tests mastery of indirect question formation.'
    }
  ],
  review: [
    {
      id: 'ex_u10_l140_r01',
      type: 'multiple_choice',
      prompt: 'Which preposition completes the phrase: "The city hall is _____ walking distance"?',
      options: [
        { id: '1', text: 'within', isCorrect: true },
        { id: '2', text: 'at', isCorrect: false },
        { id: '3', text: 'on', isCorrect: false },
        { id: '4', text: 'by', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The set phrase is "within walking distance".'
    },
    {
      id: 'ex_u10_l140_r02',
      type: 'fill_blank',
      prompt: 'Do you know if this bus _____ (go) directly to the central train station?',
      correctAnswer: 'goes',
      explanation: 'Third-person singular "this bus" takes "goes".'
    },
    {
      id: 'ex_u10_l140_r03',
      type: 'word_ordering',
      prompt: 'Order the words to make a transit instruction:',
      tokens: ['You', 'need', 'to', 'change', 'trains', 'at', 'the', 'next', 'station.'],
      correctAnswer: 'You need to change trains at the next station.',
      explanation: 'Collocation "change trains at".'
    },
    {
      id: 'ex_u10_l140_r04',
      type: 'error_correction',
      prompt: 'Correct the error in this question:',
      sentence: 'Do you know what time does the citizen center close?',
      correctAnswer: 'Do you know what time the citizen center closes?',
      explanation: 'Remove "does" and write "the citizen center closes".'
    },
    {
      id: 'ex_u10_l140_r05',
      type: 'translation',
      prompt: 'Translate into English: "क्या यह सीट खाली है?"',
      correctAnswer: 'Is this seat taken?',
      acceptableAnswers: ['Is this seat free?', 'Is anyone sitting here?'],
      explanation: '"Is this seat taken?" is the standard transit idiom.'
    },
    {
      id: 'ex_u10_l140_r06',
      type: 'listening',
      prompt: 'Listen and select the fare cost:',
      audioText: 'A single one-way subway fare for Zone 1 is two euros and eighty cents.',
      options: [
        { id: '1', text: '€2.80', isCorrect: true },
        { id: '2', text: '€2.18', isCorrect: false },
        { id: '3', text: '€3.80', isCorrect: false },
        { id: '4', text: '€1.80', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The audio clearly states €2.80.'
    },
    {
      id: 'ex_u10_l140_r07',
      type: 'listen_and_type',
      prompt: 'Listen and type what you hear:',
      audioText: 'Please tap your transit card at the automatic barrier.',
      correctAnswer: 'Please tap your transit card at the automatic barrier.',
      explanation: 'Focus on spelling of "barrier".'
    },
    {
      id: 'ex_u10_l140_r08',
      type: 'multiple_choice',
      prompt: 'Where do passengers retrieve items left behind on trains?',
      options: [
        { id: '1', text: 'The Lost and Found office', isCorrect: true },
        { id: '2', text: 'The Departure Gate', isCorrect: false },
        { id: '3', text: 'The Ticket Kiosk', isCorrect: false },
        { id: '4', text: 'The Municipal Registry', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: '"Lost and Found" is where misplaced items are retrieved.'
    }
  ],
  assessment: [
    {
      id: 'ex_u10_l140_a01',
      type: 'multiple_choice',
      prompt: 'Which indirect question is punctuated and structured correctly?',
      options: [
        { id: '1', text: 'Could you tell me how to get to the municipal library from here?', isCorrect: true },
        { id: '2', text: 'Could you tell me how do I get to the municipal library from here?', isCorrect: false },
        { id: '3', text: 'Could you tell me how I get can to the municipal library?', isCorrect: false },
        { id: '4', text: 'Could you telling me where is library?', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Option 1 uses the infinitive phrase "how to get to...", which is standard and concise.'
    },
    {
      id: 'ex_u10_l140_a02',
      type: 'fill_blank',
      prompt: 'Do you know if the express train _____ (stop) at the airport terminal?',
      correctAnswer: 'stops',
      explanation: 'Third-person singular verb agreement: "stops".'
    },
    {
      id: 'ex_u10_l140_a03',
      type: 'word_ordering',
      prompt: 'Arrange the tokens into a clear direction instruction:',
      tokens: ['Turn', 'left', 'at', 'the', 'junction', 'and', 'cross', 'the', 'bridge.'],
      correctAnswer: 'Turn left at the junction and cross the bridge.',
      explanation: 'Natural sequencing of direction imperatives.'
    },
    {
      id: 'ex_u10_l140_a04',
      type: 'error_correction',
      prompt: 'Fix the error in this indirect question:',
      sentence: 'Do you know where is the nearest ATM located?',
      correctAnswer: 'Do you know where the nearest ATM is located?',
      explanation: 'Subject "the nearest ATM" must precede the verb "is".'
    },
    {
      id: 'ex_u10_l140_a05',
      type: 'translation',
      prompt: 'Translate into English: "क्या आप जानते हैं कि अगली ट्रेन किस प्लेटफॉर्म पर आती है?"',
      correctAnswer: 'Do you know which platform the next train arrives at?',
      acceptableAnswers: ['Could you tell me which platform the next train arrives at?'],
      explanation: 'Accurate indirect question format.'
    },
    {
      id: 'ex_u10_l140_a06',
      type: 'dialogue_completion',
      prompt: 'Complete the conversation:\nA: "Excuse me, is this seat taken?"\nB: "No, it\'s completely free. _____."',
      options: [
        { id: '1', text: 'Please go ahead and have a seat', isCorrect: true },
        { id: '2', text: 'You must not sit here', isCorrect: false },
        { id: '3', text: 'I am tied up with the seat', isCorrect: false },
        { id: '4', text: 'Change trains at the door', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Friendly, courteous social acceptance.'
    },
    {
      id: 'ex_u10_l140_a07',
      type: 'speaking',
      prompt: 'Read this polite city inquiry aloud:',
      targetText: 'Could you tell me if the post office is within walking distance from this subway station?',
      explanation: 'Focus on clear pronunciation of "walking distance" and smooth phrasing.'
    }
  ]
};

// =========================================================================
// LESSON 141: Housing Problems, Repairs & Landlord Negotiations
// =========================================================================
export const LESSON_141_CONFIG: LessonConfigA2 = {
  num: 141,
  title: 'Housing Problems, Repairs & Landlord Negotiations',
  icon: '🏡',
  estMin: 25,
  objTitle: 'Describing Household Faults, Requesting Repairs & Communicating with Landlords',
  objDesc: 'Learn to describe apartment maintenance issues (leaks, heating faults, electrical problems), request urgent technician visits, and discuss lease terms with landlords or property managers.',
  objHi: 'अपार्टमेंट में खराबी (लीक, हीटिंग, बिजली की समस्याएं) का वर्णन करना, तकनीशियन बुलाना और मकान मालिक से पट्टे की शर्तों पर बात करना सीखें।',
  objEs: 'Describir averías domésticas (fugas, calefacción, electricidad), solicitar reparaciones a propietarios y negociar contratos de alquiler.',
  canDo: [
    'I can describe common household defects and maintenance issues clearly.',
    'I can use "need + -ing / need to be + past participle" to describe items requiring repair.',
    'I can write or say a polite maintenance request to a landlord or building manager.',
    'I can discuss rent payment schedules, deposit returns, and lease renewals.'
  ],
  canDoHi: [
    'मैं घर की सामान्य खराबी और रखरखाव की समस्याओं का स्पष्ट वर्णन कर सकता हूँ।',
    'मैं मरम्मत की आवश्यकता वाले सामानों का वर्णन करने के लिए "need + -ing / need to be + past participle" का उपयोग कर सकता हूँ।',
    'मैं मकान मालिक या बिल्डिंग मैनेजर को विनम्रतापूर्वक मरम्मत का अनुरोध लिख या बोल सकता हूँ।',
    'मैं किराए के भुगतान के समय, सुरक्षा जमा वापसी और पट्टे के नवीनीकरण पर चर्चा कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir averías del hogar claramente.',
    'Puedo usar estructuras para expresar necesidad de reparación.',
    'Puedo redactar solicitudes de mantenimiento a propietarios.',
    'Puedo hablar sobre pagos de alquiler, fianzas y contratos.'
  ],
  vocab: [
    { w: 'landlord', p: '/ˈlændlɔːd/', m: 'a person who rents out land, a building, or an accommodation', hi: 'मकान मालिक', es: 'propietario / casero', fr: 'propriétaire', de: 'Vermieter', pt: 'proprietário / senhorio', zh: '房东', ar: 'مالك العقار', ja: '大家 / 家主', ru: 'арендодатель / домовладелец', ex: 'Our landlord agreed to replace the broken refrigerator.', exHi: 'हमारे मकान मालिक टूटे हुए फ्रिज को बदलने के लिए सहमत हो गए।', exEs: 'Nuestro casero acordó reemplazar la nevera rota.', ic: '👨‍💼' },
    { w: 'tenant', p: '/ˈtenənt/', m: 'a person who occupies land or property rented from a landlord', hi: 'किरायेदार', es: 'inquilino / arrendatario', fr: 'locataire', de: 'Mieter', pt: 'inquilino', zh: '租户 / 房客', ar: 'مستأجر', ja: '賃借人 / 店子', ru: 'арендатор / жилец', ex: 'The new tenants will move in on the first of next month.', exHi: 'नए किरायेदार अगले महीने की पहली तारीख को आएंगे।', exEs: 'Los nuevos inquilinos se mudarán el primero del próximo mes.', ic: '👥' },
    { w: 'lease', p: '/liːs/', m: 'a legal contract by which one conveys property to another for a specified time', hi: 'पट्टा / किराया अनुबंध', es: 'contrato de arrendamiento / alquiler', fr: 'bail / contrat de location', de: 'Mietvertrag', pt: 'contrato de aluguel', zh: '租约 / 租赁合同', ar: 'عقد إيجار', ja: '賃貸借契約', ru: 'договор аренды', ex: 'We signed a twelve-month lease agreement for the downtown flat.', exHi: 'हमने शहर के फ्लैट के लिए बारह महीने के पट्टे के अनुबंध पर हस्ताक्षर किए।', exEs: 'Firmamos un contrato de arrendamiento de doce meses para el piso.', ic: '📜' },
    { w: 'leak', p: '/liːk/', m: 'an accidental hole or crack through which liquid or gas escapes', hi: 'रिसाव / टपकना / छेद', es: 'fuga / gotera', fr: 'fuite', de: 'Leck / undichte Stelle', pt: 'vazamento', zh: '漏水 / 泄漏', ar: 'تسريب', ja: '漏れ / 水漏れ', ru: 'утечка / протечка', ex: 'There is a water leak under the kitchen sink that needs urgent attention.', exHi: 'रसोई के सिंक के नीचे पानी का रिसाव है जिस पर तुरंत ध्यान देने की आवश्यकता है।', exEs: 'Hay una fuga de agua debajo del fregadero de la cocina que necesita atención urgente.', ic: '💧' },
    { w: 'plumber', p: '/ˈplʌmə/', m: 'a person who fits and repairs the pipes, fittings, and other apparatus of water supply', hi: 'नलसाज / प्लंबर', es: 'fontanero / plomero', fr: 'plombier', de: 'Klempner / Installateur', pt: 'encanador', zh: '管道工', ar: 'سباك', ja: '配管工', ru: 'сантехник', ex: 'The landlord called a certified plumber to repair the bathroom pipe.', exHi: 'मकान मालिक ने बाथरूम के पाइप की मरम्मत के लिए एक प्रमाणित प्लंबर को बुलाया।', exEs: 'El casero llamó a un fontanero certificado para reparar la tubería del baño.', ic: '🔧' },
    { w: 'heating', p: '/ˈhiːtɪŋ/', m: 'equipment used to provide heat, especially for a building', hi: 'हीटिंग / घर को गर्म रखने की प्रणाली', es: 'calefacción', fr: 'chauffage', de: 'Heizung', pt: 'aquecimento', zh: '供暖设备', ar: 'تدفئة', ja: '暖房', ru: 'отопление', ex: 'The central heating stopped working during the coldest night of winter.', exHi: 'सर्दियों की सबसे ठंडी रात के दौरान सेंट्रल हीटिंग ने काम करना बंद कर दिया।', exEs: 'La calefacción central dejó de funcionar durante la noche más fría del invierno.', ic: '🔥' },
    { w: 'maintenance', p: '/ˈmeɪntənəns/', m: 'the process of maintaining or preserving someone or something in good condition', hi: 'रखरखाव / मेंटेनेंस', es: 'mantenimiento', fr: 'entretien / maintenance', de: 'Instandhaltung / Wartung', pt: 'manutenção', zh: '维修 / 保养', ar: 'صيانة', ja: '維持管理 / メンテナンス', ru: 'техническое обслуживание / ремонт', ex: 'The building maintenance staff cleans the corridors every morning.', exHi: 'इमारत के रखरखाव कर्मचारी हर सुबह गलियारों की सफाई करते हैं।', exEs: 'El personal de mantenimiento del edificio limpia los pasillos todas las mañanas.', ic: '🛠️' },
    { w: 'deposit', p: '/dɪˈpɒzɪt/', m: 'a sum of money placed or kept in an account or given as a pledge', hi: 'सुरक्षा जमा / सिक्योरिटी डिपॉजिट', es: 'fianza / depósito de garantía', fr: 'dépôt de garantie / caution', de: 'Kaution', pt: 'depósito de segurança / caução', zh: '押金', ar: 'تأمين / وديعة', ja: '敷金 / 保証金', ru: 'залог / депозит', ex: 'The landlord will return our security deposit after the final inspection.', exHi: 'अंतिम निरीक्षण के बाद मकान मालिक हमारी सुरक्षा जमा राशि वापस कर देगा।', exEs: 'El casero devolverá nuestra fianza después de la inspección final.', ic: '💰' },
    { w: 'appliance', p: '/əˈplaɪəns/', m: 'a device or piece of equipment designed to perform a specific domestic task', hi: 'घरेलू उपकरण', es: 'electrodoméstico', fr: 'appareil électroménager', de: 'Haushaltsgerät', pt: 'eletrodoméstico', zh: '家用电器', ar: 'جهاز منزلي', ja: '家電製品', ru: 'бытовой прибор / техника', ex: 'The apartment is fully furnished with modern kitchen appliances.', exHi: 'अपार्टमेंट आधुनिक रसोई उपकरणों से पूरी तरह सुसज्जित है।', exEs: 'El apartamento está completamente amueblado con electrodomésticos modernos.', ic: '🔌' },
    { w: 'fuse', p: '/fjuːz/', m: 'a safety device consisting of a strip of wire that melts and breaks an electric circuit', hi: 'फ्यूज / बिजली का फ्यूज', es: 'fusible', fr: 'fusible', de: 'Sicherung', pt: 'fusível', zh: '保险丝', ar: 'منصهر / فيوز', ja: 'ヒューズ', ru: 'предохранитель', ex: 'When I plugged in the heater, the electrical fuse blew immediately.', exHi: 'जब मैंने हीटर का प्लग लगाया, तो बिजली का फ्यूज तुरंत उड़ गया।', exEs: 'Cuando enchufé el calentador, el fusible se fundió de inmediato.', ic: '⚡' },
    { w: 'clogged', p: '/klɒɡd/', m: 'blocked with an accumulation of thick matter', hi: 'जाम / रुका हुआ (पाइप/नाली)', es: 'atascado / obstruido', fr: 'bouché / obstrué', de: 'verstopft', pt: 'entupido', zh: '堵塞的', ar: 'مسدود', ja: '詰まった', ru: 'засорённый / забитый', ex: 'The shower drain is clogged and water is draining very slowly.', exHi: 'शावर की नाली जाम है और पानी बहुत धीरे-धीरे बह रहा है।', exEs: 'El desagüe de la ducha está atascado y el agua drena muy lentamente.', ic: '🚿' },
    { w: 'faucet', p: '/ˈfɔːsɪt/', m: 'a device by which a flow of liquid or gas from a pipe can be controlled', hi: 'नल / टोंटी', es: 'grifo', fr: 'robinet', de: 'Wasserhahn', pt: 'torneira', zh: '水龙头', ar: 'صنبور', ja: '蛇口', ru: 'кран', ex: 'The bathroom faucet has been dripping constantly since yesterday.', exHi: 'बाथरूम का नल कल से लगातार टपक रहा है।', exEs: 'El grifo del baño ha estado goteando constantemente desde ayer.', ic: '🚰' },
    { w: 'utility', p: '/juːˈtɪləti/', m: 'a service such as water, gas, or electricity supplied to the public', hi: 'उपयोगिता बिल (पानी, बिजली, गैस)', es: 'suministros / servicios públicos (luz, agua, gas)', fr: 'charges / services publics', de: 'Nebenkosten / Versorgung', pt: 'contas de consumo (água, luz, gás)', zh: '公共设施费 (水电煤)', ar: 'فواتير الخدمات (ماء، كهرباء)', ja: '公共料金 (水道・光熱費)', ru: 'коммунальные услуги', ex: 'Are water and heating utilities included in the monthly rent?', exHi: 'क्या पानी और हीटिंग का खर्च मासिक किराए में शामिल है?', exEs: '¿Están incluidos los suministros de agua y calefacción en el alquiler mensual?', ic: '💡' },
    { w: 'inspect', p: '/ɪnˈspekt/', m: 'look at someone or something closely, typically to assess condition or verify quality', hi: 'निरीक्षण करना / जांच करना', es: 'inspeccionar / revisar', fr: 'inspecter / examiner', de: 'inspizieren / begutachten', pt: 'inspecionar / vistoriar', zh: '检查 / 视察', ar: 'يفحص / يعاين', ja: '点検する / 検査する', ru: 'осматривать / инспектировать', ex: 'The property manager will inspect the property before we return the keys.', exHi: 'चाबियां लौटाने से पहले प्रॉपर्टी मैनेजर संपत्ति का निरीक्षण करेगा।', exEs: 'El administrador inspeccionará la propiedad antes de que devolvamos las llaves.', ic: '🔍' },
    { w: 'urgent repair', p: '/ˈɜːdʒənt rɪˈpeə/', m: 'a fix that must be carried out immediately to prevent damage or ensure safety', hi: 'अत्यावश्यक मरम्मत', es: 'reparación urgente', fr: 'réparation urgente', de: 'Dringlichkeitsreparatur', pt: 'reparo urgente', zh: '紧急维修', ar: 'إصلاح عاجل', ja: '緊急修理', ru: 'срочный ремонт', ex: 'A gas smell requires an immediate urgent repair from qualified technicians.', exHi: 'गैस की गंध के लिए योग्य तकनीशियनों से तुरंत मरम्मत की आवश्यकता होती है।', exEs: 'El olor a gas requiere una reparación urgente inmediata.', ic: '🚨' },
    { w: 'renovate', p: '/ˈrenəveɪt/', m: 'restore a building to a good state of repair', hi: 'नवीनीकरण करना / मरम्मत करके नया रूप देना', es: 'renovar / reformar', fr: 'rénover', de: 'renovieren', pt: 'reformar / renovar', zh: '翻新 / 装修', ar: 'يجدد / يرمم', ja: '改装する / リフォームする', ru: 'ремонтировать / обновлять', ex: 'The landlord renovated the entire kitchen last summer.', exHi: 'मकान मालिक ने पिछली गर्मियों में पूरी रसोई का नवीनीकरण किया था।', exEs: 'El casero renovó toda la cocina el verano pasado.', ic: '🔨' },
    { w: 'mold', p: '/məʊld/', m: 'a fungus that produces a superficial growth on various kinds of damp or decaying organic matter', hi: 'फफूंद / मोल्ड', es: 'moho', fr: 'moisissure', de: 'Schimmel', pt: 'mofo', zh: '霉菌', ar: 'عفن', ja: 'カビ', ru: 'плесень', ex: 'There is black mold forming near the bathroom window due to humidity.', exHi: 'नमी के कारण बाथरूम की खिड़की के पास काली फफूंद जम रही है।', exEs: 'Se está formando moho negro cerca de la ventana del baño debido a la humedad.', ic: '🍄' },
    { w: 'notice period', p: '/ˈnəʊtɪs ˈpɪəriəd/', m: 'the time between notifying one\'s landlord of an intent to leave and moving out', hi: 'नोटिस की अवधि', es: 'período de preaviso', fr: 'préavis', de: 'Kündigungsfrist', pt: 'aviso prévio', zh: '通知期', ar: 'فترة الإشعار', ja: '退去予告期間', ru: 'срок уведомления о выселении', ex: 'The lease states that we must give a thirty-day notice period before moving out.', exHi: 'पट्टे में कहा गया है कि हमें बाहर जाने से पहले तीस दिन का नोटिस देना होगा।', exEs: 'El contrato establece que debemos dar un preaviso de treinta días.', ic: '📅' },
    { w: 'power cut', p: '/ˈpaʊə kʌt/', m: 'a temporary interruption in the supply of electricity', hi: 'बिजली गुल होना / पावर कट', es: 'corte de luz / apagón', fr: 'coupure de courant', de: 'Stromausfall', pt: 'queda de energia / apagão', zh: '停电', ar: 'انقطاع التيار الكهربائي', ja: '停電', ru: 'отключение электричества', ex: 'We had a three-hour power cut during yesterday\'s thunderstorm.', exHi: 'कल के तूफान के दौरान हमारे यहाँ तीन घंटे बिजली गुल रही।', exEs: 'Tuvimos un corte de luz de tres horas durante la tormenta de ayer.', ic: '🔌' },
    { w: 'radiator', p: '/ˈreɪdieɪtə/', m: 'a heating device consisting of a series of pipes through which hot water or steam passes', hi: 'रेडिएटर (कमरा गर्म करने का उपकरण)', es: 'radiador', fr: 'radiateur', de: 'Heizkörper', pt: 'radiador', zh: '暖气片', ar: 'مشعاع / رادياتير', ja: '放熱器 / ラジエーター', ru: 'радиатор / батарея', ex: 'The bedroom radiator is making strange noises and staying cold.', exHi: 'बेडरूम का रेडिएटर अजीब आवाजें कर रहा है और ठंडा ही रह रहा है।', exEs: 'El radiador del dormitorio hace ruidos extraños y se queda frío.', ic: '🌡️' }
  ],
  chunks: [
    { phrase: 'needs fixing / needs to be fixed', meaning: 'requires repair to function properly', hi: 'मरम्मत की आवश्यकता है', es: 'necesita reparación / necesita ser arreglado', fr: 'a besoin d\'être réparé', de: 'muss repariert werden', pt: 'precisa de conserto / precisa ser consertado', zh: '需要修理', ar: 'يحتاج إلى إصلاح', ja: '修理が必要である', ru: 'требует ремонта / нужно починить', note: 'Two equivalent patterns: "The pipe needs fixing" = "The pipe needs to be fixed."', ic: '🔧' },
    { phrase: 'send someone over', meaning: 'dispatch a technician or repairperson to the home', hi: 'किसी तकनीशियन को घर भेजना', es: 'mandar a alguien / enviar a un técnico', fr: 'envoyer quelqu\'un', de: 'jemanden vorbeischicken', pt: 'mandar alguém / enviar um técnico', zh: '派人过来', ar: 'إرسال شخص ما', ja: '人を派遣する', ru: 'прислать мастера', note: 'Standard request to landlords: "Could you send someone over to look at the leak?"', ic: '👨‍🔧' },
    { phrase: 'give thirty days\' notice', meaning: 'inform the landlord thirty days before vacating the property', hi: 'तीस दिन का पूर्व नोटिस देना', es: 'dar un preaviso de treinta días', fr: 'donner un préavis de trente jours', de: 'einen Monat vorher kündigen', pt: 'dar aviso prévio de trinta dias', zh: '提前30天通知', ar: 'تقديم إشعار قبل ثلاثين يومًا', ja: '30日前までに予告する', ru: 'предупредить за 30 дней', note: 'Standard tenant lease requirement.', ic: '📅' },
    { phrase: 'get my deposit back', meaning: 'receive the return of one\'s security deposit upon moving out', hi: 'अपनी सुरक्षा जमा राशि वापस पाना', es: 'recuperar mi fianza', fr: 'récupérer ma caution', de: 'meine Kaution zurückbekommen', pt: 'receber minha caução de volta', zh: '拿回押金', ar: 'استرداد التأمين', ja: '敷金を返金してもらう', ru: 'вернуть свой залог', note: 'Common discussion point at end of tenancy.', ic: '💰' },
    { phrase: 'included in the rent', meaning: 'covered as part of the monthly rental payment without extra cost', hi: 'किराए में शामिल', es: 'incluido en el alquiler', fr: 'inclus dans le loyer', de: 'in der Miete enthalten', pt: 'incluído no aluguel', zh: '包含在房租内', ar: 'مشمول في الإيجار', ja: '家賃に含まれている', ru: 'входит в стоимость аренды', note: 'Essential inquiry when apartment hunting.', ic: '🏠' },
    { phrase: 'as soon as possible', meaning: 'with maximum urgency and immediate dispatch', hi: 'जितनी जल्दी हो सके', es: 'lo antes posible', fr: 'dès que possible', de: 'so bald wie möglich', pt: 'o mais rápido possível', zh: '尽快', ar: 'في أقرب وقت ممكن', ja: 'できるだけ早く', ru: 'как можно скорее', note: 'Used when requesting emergency household repairs.', ic: '⚡' },
    { phrase: 'renew the lease', meaning: 'extend a rental agreement for another term', hi: 'पट्टा / किराया अनुबंध का नवीनीकरण करना', es: 'renovar el contrato de alquiler', fr: 'renouveler le bail', de: 'den Mietvertrag verlängern', pt: 'renovar o contrato de aluguel', zh: '续签租约', ar: 'تجديد عقد الإيجार', ja: '契約を更新する', ru: 'продлить аренду', note: 'Discussed before the current lease expires.', ic: '✍️' },
    { phrase: 'deal with the problem', meaning: 'take action to solve an issue', hi: 'समस्या का समाधान करना', es: 'hacerse cargo del problema', fr: 's\'occuper du problème', de: 'sich um das Problem kümmern', pt: 'resolver / lidar com o problema', zh: '处理问题', ar: 'التعامل مع المشكلة', ja: '問題に対処する', ru: 'разобраться с проблемой', note: 'Frequently used in landlord communication.', ic: '💪' }
  ],
  grammar: {
    title: 'Describing Faults & Requesting Repairs: "Needs Fixing" vs "Needs to Be Fixed"',
    concept: 'Using passive and gerund patterns to describe broken household objects and making assertive yet polite maintenance requests.',
    patterns: [
      {
        title: 'Describing Things That Require Repair: "Need + Gerund (-ing)" & "Need + to be + Past Participle"',
        structure: 'Subject + needs / need + Verb-ing | Subject + needs / need to be + Past Participle',
        rule: 'Both structures have identical meanings: "The pipe needs repairing" = "The pipe needs to be repaired."',
        examples: [
          { en: 'The kitchen faucet is dripping and needs fixing.', hi: 'रसोई का नल टपक रहा है और इसकी मरम्मत की जरूरत है।', es: 'El grifo de la cocina gotea y necesita reparación.' },
          { en: 'The bedroom window needs to be replaced before winter.', hi: 'सर्दियों से पहले बेडरूम की खिड़की को बदलने की जरूरत है।', es: 'La ventana del dormitorio necesita ser reemplazada antes del invierno.' }
        ]
      },
      {
        title: 'Politely Requesting Landlord Assistance: "Could you please send someone over to...?"',
        structure: 'Could you please send someone over to + Base Verb [inspect / repair / fix]?',
        rule: 'Use this respectful formula to request a repair technician from a landlord or property manager.',
        examples: [
          { en: 'Could you please send someone over to inspect the heating unit?', hi: 'क्या आप हीटिंग यूनिट का निरीक्षण करने के लिए किसी को भेज सकते हैं?', es: '¿Podría enviar a alguien a inspeccionar la unidad de calefacción?' },
          { en: 'Could you arrange for an electrician to check the fuse box?', hi: 'क्या आप फ्यूज बॉक्स की जांच के लिए इलेक्ट्रीशियन की व्यवस्था कर सकते हैं?', es: '¿Podría concertar un electricista para revisar la caja de fusibles?' }
        ]
      },
      {
        title: 'Describing States with Adjectives and Participles: "is broken", "is leaking", "is clogged"',
        structure: 'The + [Appliance/Item] + is + broken / clogged / leaking / damaged.',
        rule: 'State clearly the condition of the household item when reporting maintenance problems.',
        examples: [
          { en: 'The shower drain is clogged, so water is backing up onto the floor.', hi: 'शावर की नाली जाम है, इसलिए पानी फर्श पर जमा हो रहा है।', es: 'El desagüe de la ducha está atascado, por lo que el agua se acumula.' },
          { en: 'The radiator is leaking hot water onto the wooden floor.', hi: 'रेडिएटर से लकड़ी के फर्श पर गर्म पानी का रिसाव हो रहा है।', es: 'El radiador tiene una fuga de agua caliente sobre el suelo de madera.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'The kitchen sink needs to fix.',
      cor: 'The kitchen sink needs fixing. / The kitchen sink needs to be fixed.',
      exp: 'Inanimate objects cannot fix themselves. Use "needs fixing" or "needs to be fixed" (passive).',
      hi: 'निर्जीव वस्तुओं के लिए "needs fixing" या "needs to be fixed" (passive) का प्रयोग करें।',
      es: 'Los objetos no se arreglan solos. Usa "needs fixing" o "needs to be fixed".'
    },
    {
      inc: 'There is a water leak on the bathroom.',
      cor: 'There is a water leak in the bathroom.',
      exp: 'We say "in the bathroom / in the kitchen", not "on".',
      hi: 'कमरे या बाथरूम के अंदर रिसाव के लिए "in the bathroom" का प्रयोग होता है।',
      es: 'Se dice "in the bathroom", no "on the bathroom".'
    },
    {
      inc: 'Could you send someone for repair the heater?',
      cor: 'Could you send someone to repair the heater?',
      exp: 'Use an infinitive of purpose ("to repair"), not "for + verb".',
      hi: 'उद्देश्य बताने के लिए "to repair" (infinitive) का प्रयोग करें।',
      es: 'Usa el infinitivo de propósito ("to repair"), no "for repair".'
    },
    {
      inc: 'Is the internet include in the rent?',
      cor: 'Is the internet included in the rent?',
      exp: 'Use the past participle "included" in passive constructions with "is".',
      hi: '"Is" के साथ passive में past participle "included" आएगा।',
      es: 'Usa el participio "included" con el verbo ser/estar: "is included".'
    },
    {
      inc: 'We must give thirty days of notice.',
      cor: 'We must give thirty days\' notice.',
      exp: 'The correct expression uses a possessive apostrophe: "thirty days\' notice".',
      hi: 'सही मुहावरा "thirty days\' notice" है।',
      es: 'La expresión correcta es "thirty days\' notice".'
    }
  ],
  dialogues: [
    {
      title: 'Reporting a Heating Breakdown to a Landlord',
      context: 'Tom calls his property manager, Mrs. Higgins, to report a broken heating unit during winter.',
      charA: { name: 'Tom', av: '👨‍💼', role: 'Tenant' },
      charB: { name: 'Mrs. Higgins', av: '👩‍💼', role: 'Property Manager' },
      turns: [
        { spk: 'Tom', text: 'Good morning Mrs. Higgins. I\'m calling from Flat 4B. The central radiator stopped working last night.', hi: 'शुभ प्रभात श्रीमती हिगिंस। मैं फ्लैट 4B से बोल रहा हूँ। कल रात सेंट्रल रेडिएटर ने काम करना बंद कर दिया।', es: 'Buenos días Sra. Higgins. Llamo del piso 4B. El radiador central dejó de funcionar anoche.' },
        { spk: 'Mrs. Higgins', text: 'Good morning Tom. Oh dear! Is the unit leaking water or just remaining cold?', hi: 'शुभ प्रभात टॉम। अरे! क्या यूनिट से पानी का रिसाव हो रहा है या सिर्फ ठंडा रह रहा है?', es: 'Buenos días Tom. ¡Vaya! ¿La unidad pierde agua o simplemente se queda fría?' },
        { spk: 'Tom', text: 'It is completely cold and making a clicking noise. The thermostat needs to be checked by a technician as soon as possible.', hi: 'यह पूरी तरह से ठंडा है और क्लिक की आवाज कर रहा है। थर्मोस्टेट की जल्द से जल्द एक तकनीशियन द्वारा जांच कराने की जरूरत है।', es: 'Está completamente frío y hace un ruido de clic. El termostato necesita ser revisado por un técnico lo antes posible.' },
        { spk: 'Mrs. Higgins', text: 'I understand. I will send a heating engineer over this afternoon between two and four.', hi: 'मैं समझती हूँ। मैं आज दोपहर दो से चार बजे के बीच एक हीटिंग इंजीनियर को भेज दूँगी।', es: 'Entendido. Enviaré a un técnico de calefacción esta tarde entre las dos y las cuatro.' },
        { spk: 'Tom', text: 'Thank you very much. I will make sure someone is home to let him in.', hi: 'बहुत-बहुत धन्यवाद। मैं सुनिश्चित करूँगा कि उसे अंदर आने देने के लिए कोई घर पर मौजूद हो।', es: 'Muchas gracias. Me aseguraré de que haya alguien en casa para dejarlo entrar.' }
      ]
    },
    {
      title: 'Discussing Lease Renewal and Utilities',
      context: 'Elena discusses lease terms with her landlord before her 1-year contract ends.',
      charA: { name: 'Elena', av: '👩‍💼', role: 'Tenant' },
      charB: { name: 'Mr. Vance', av: '👨‍💼', role: 'Landlord' },
      turns: [
        { spk: 'Elena', text: 'Hello Mr. Vance. Our annual lease expires next month, and we would love to renew it for another year.', hi: 'नमस्ते श्रीमान वेंस। हमारा वार्षिक पट्टा अगले महीने समाप्त हो रहा है, और हम इसे एक और साल के लिए नवीनीकृत करना चाहेंगे।', es: 'Hola Sr. Vance. Nuestro contrato de alquiler vence el próximo mes y nos encantaría renovarlo por otro año.' },
        { spk: 'Mr. Vance', text: 'Hello Elena. I am very happy with how well you have maintained the apartment. I would be delighted to renew the contract.', hi: 'नमस्ते एलेना। आपने अपार्टमेंट को जिस तरह से बनाए रखा है, उससे मैं बहुत खुश हूँ। मुझे अनुबंध को नवीनीकृत करने में बहुत खुशी होगी।', es: 'Hola Elena. Estoy muy contento con lo bien que han mantenido el piso. Estaría encantado de renovar el contrato.' },
        { spk: 'Elena', text: 'That is wonderful news. Will the monthly rent and included utilities remain the same?', hi: 'यह बहुत अच्छी खबर है। क्या मासिक किराया और शामिल उपयोगिताएं समान रहेंगी?', es: 'Es una noticia maravillosa. ¿El alquiler mensual y los suministros incluidos seguirán siendo los mismos?' },
        { spk: 'Mr. Vance', text: 'Yes, everything remains unchanged. I will prepare the extension documents for you to sign.', hi: 'हाँ, सब कुछ अपरिवर्तित रहेगा। मैं आपके हस्ताक्षर करने के लिए विस्तार दस्तावेज तैयार कर दूँगा।', es: 'Sí, todo permanece sin cambios. Prepararé los documentos de extensión para que los firme.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_u10_l141_p01',
      type: 'multiple_choice',
      prompt: 'Select the correct sentence describing a broken household appliance:',
      options: [
        { id: '1', text: 'The washing machine is broken and needs fixing.', isCorrect: true },
        { id: '2', text: 'The washing machine is broken and needs fix.', isCorrect: false },
        { id: '3', text: 'The washing machine is broken and needs to fix.', isCorrect: false },
        { id: '4', text: 'The washing machine broken and need fixing.', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: '"Needs fixing" or "needs to be fixed" is the correct pattern.'
    },
    {
      id: 'ex_u10_l141_p02',
      type: 'fill_blank',
      prompt: 'The bathroom pipe is leaking and needs to be _____ (repair) immediately.',
      correctAnswer: 'repaired',
      explanation: 'Passive structure: "needs to be repaired" (past participle).'
    },
    {
      id: 'ex_u10_l141_p03',
      type: 'word_ordering',
      prompt: 'Arrange the words to form a polite repair request:',
      tokens: ['Could', 'you', 'please', 'send', 'a', 'plumber', 'over', 'today?'],
      correctAnswer: 'Could you please send a plumber over today?',
      explanation: '"Send someone over" is the natural phrasal verb.'
    },
    {
      id: 'ex_u10_l141_p04',
      type: 'error_correction',
      prompt: 'Find and fix the error in the sentence:',
      sentence: 'The kitchen sink needs to replace before next week.',
      correctAnswer: 'The kitchen sink needs to be replaced before next week.',
      explanation: 'Use passive "needs to be replaced" or "needs replacing".'
    },
    {
      id: 'ex_u10_l141_p05',
      type: 'translation',
      prompt: 'Translate into English: "क्या पानी का बिल किराए में शामिल है?"',
      correctAnswer: 'Is the water bill included in the rent?',
      acceptableAnswers: ['Is water included in the rent?'],
      explanation: '"Included in the rent" is standard real estate terminology.'
    },
    {
      id: 'ex_u10_l141_p06',
      type: 'listening',
      prompt: 'Listen to the tenant\'s voice message and identify the maintenance issue:',
      audioText: 'Hi, this is Mark in Apartment 3. The radiator in my living room is leaking water onto the carpet.',
      options: [
        { id: '1', text: 'A leaking living room radiator', isCorrect: true },
        { id: '2', text: 'A broken refrigerator door', isCorrect: false },
        { id: '3', text: 'A clogged kitchen sink', isCorrect: false },
        { id: '4', text: 'A power cut in the hallway', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The tenant clearly reports a leaking radiator.'
    },
    {
      id: 'ex_u10_l141_p07',
      type: 'match_pairs',
      prompt: 'Match the household issue with the appropriate professional:',
      options: [
        { id: '1', text: 'leaking pipe → plumber' },
        { id: '2', text: 'blown fuse → electrician' },
        { id: '3', text: 'broken lock → locksmith' },
        { id: '4', text: 'broken heating unit → heating engineer' }
      ],
      correctAnswer: 'matched',
      explanation: 'Direct professional correspondences.'
    },
    {
      id: 'ex_u10_l141_p08',
      type: 'dialogue_completion',
      prompt: 'Complete the response:\nTenant: "There is black mold forming near the shower."\nLandlord: "I will _____ to inspect the ventilation tomorrow morning."',
      options: [
        { id: '1', text: 'send someone over', isCorrect: true },
        { id: '2', text: 'rather to cancel', isCorrect: false },
        { id: '3', text: 'must to renew', isCorrect: false },
        { id: '4', text: 'give thirty days', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: '"Send someone over" is the natural response.'
    },
    {
      id: 'ex_u10_l141_p09',
      type: 'speaking',
      prompt: 'Speak this landlord notification clearly:',
      targetText: 'There is a water leak under the bathroom sink, and it needs to be repaired urgently.',
      explanation: 'Focus on clear pronunciation of "water leak" and "urgently".'
    },
    {
      id: 'ex_u10_l141_p10',
      type: 'personal_production',
      prompt: 'Write a sentence describing an appliance in your home that needs repair using "needs fixing":',
      sentenceTemplate: 'The [appliance] is [problem] and needs fixing.',
      correctAnswer: 'The refrigerator is making a strange noise and needs fixing.',
      explanation: 'Tests application of "needs fixing".'
    }
  ],
  review: [
    {
      id: 'ex_u10_l141_r01',
      type: 'multiple_choice',
      prompt: 'Which phrase is grammatically equivalent to "The window needs repairing"?',
      options: [
        { id: '1', text: 'The window needs to be repaired.', isCorrect: true },
        { id: '2', text: 'The window needs to repair.', isCorrect: false },
        { id: '3', text: 'The window need to be repaired.', isCorrect: false },
        { id: '4', text: 'The window needs repair it.', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: '"Needs repairing" = "needs to be repaired".'
    },
    {
      id: 'ex_u10_l141_r02',
      type: 'fill_blank',
      prompt: 'Tenants must give thirty _____ (day) notice before ending the tenancy.',
      correctAnswer: 'days\'',
      acceptableAnswers: ['days'],
      explanation: 'Possessive plural: "thirty days\' notice".'
    },
    {
      id: 'ex_u10_l141_r03',
      type: 'word_ordering',
      prompt: 'Arrange the words to form a polite inquiry about security deposit:',
      tokens: ['When', 'will', 'I', 'get', 'my', 'security', 'deposit', 'back?'],
      correctAnswer: 'When will I get my security deposit back?',
      explanation: 'Standard inquiry about deposit refunds.'
    },
    {
      id: 'ex_u10_l141_r04',
      type: 'error_correction',
      prompt: 'Correct the preposition error:',
      sentence: 'Are gas and electricity included at the monthly rent?',
      correctAnswer: 'Are gas and electricity included in the monthly rent?',
      explanation: 'Use "included in", not "included at".'
    },
    {
      id: 'ex_u10_l141_r05',
      type: 'translation',
      prompt: 'Translate into English: "शावर की नाली जाम है और पानी बहुत धीरे बह रहा है।"',
      correctAnswer: 'The shower drain is clogged and water is draining very slowly.',
      acceptableAnswers: ['The shower drain is blocked and draining very slowly.'],
      explanation: '"Clogged" describes blocked pipes/drains.'
    },
    {
      id: 'ex_u10_l141_r06',
      type: 'listening',
      prompt: 'Listen and select when the technician is arriving:',
      audioText: 'The property manager confirmed that the plumber will arrive between two and four this afternoon.',
      options: [
        { id: '1', text: 'Between 2:00 and 4:00 PM', isCorrect: true },
        { id: '2', text: 'Tomorrow morning at 9:00 AM', isCorrect: false },
        { id: '3', text: 'On Friday afternoon', isCorrect: false },
        { id: '4', text: 'Next Monday at noon', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The audio specifies "between two and four this afternoon".'
    },
    {
      id: 'ex_u10_l141_r07',
      type: 'listen_and_type',
      prompt: 'Listen and type what you hear:',
      audioText: 'The landlord agreed to renew our lease for another twelve months.',
      correctAnswer: 'The landlord agreed to renew our lease for another twelve months.',
      explanation: 'Focus on spelling of "landlord" and "renew".'
    },
    {
      id: 'ex_u10_l141_r08',
      type: 'multiple_choice',
      prompt: 'What does a tenant give to the landlord before moving out?',
      options: [
        { id: '1', text: 'A notice period', isCorrect: true },
        { id: '2', text: 'A boarding pass', isCorrect: false },
        { id: '3', text: 'An aisle seat', isCorrect: false },
        { id: '4', text: 'A timetable', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Tenants provide advance notice (notice period).'
    }
  ],
  assessment: [
    {
      id: 'ex_u10_l141_a01',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes an urgent household problem?',
      options: [
        { id: '1', text: 'There is a gas leak in the kitchen and the valve needs to be replaced immediately.', isCorrect: true },
        { id: '2', text: 'There is a gas leak in the kitchen and the valve needs replace immediately.', isCorrect: false },
        { id: '3', text: 'There is a gas leak on the kitchen and valve needs to fix.', isCorrect: false },
        { id: '4', text: 'There are a gas leak in the kitchen.', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Option 1 uses correct prepositions ("in the kitchen") and passive necessity ("needs to be replaced").'
    },
    {
      id: 'ex_u10_l141_a02',
      type: 'fill_blank',
      prompt: 'The air conditioner is making a loud noise and needs _____ (inspect) by an expert.',
      correctAnswer: 'inspecting',
      acceptableAnswers: ['to be inspected'],
      explanation: '"Needs inspecting" or "needs to be inspected".'
    },
    {
      id: 'ex_u10_l141_a03',
      type: 'word_ordering',
      prompt: 'Order the words to create a polite email request:',
      tokens: ['Could', 'you', 'please', 'send', 'an', 'electrician', 'to', 'check', 'the', 'fuse?'],
      correctAnswer: 'Could you please send an electrician to check the fuse?',
      explanation: 'Clear maintenance request structure.'
    },
    {
      id: 'ex_u10_l141_a04',
      type: 'error_correction',
      prompt: 'Fix the error in this sentence:',
      sentence: 'The bathroom faucet has a leak and it needs fix.',
      correctAnswer: 'The bathroom faucet has a leak and it needs fixing.',
      explanation: 'Change "needs fix" to "needs fixing" or "needs to be fixed".'
    },
    {
      id: 'ex_u10_l141_a05',
      type: 'translation',
      prompt: 'Translate into English: "हम अपने पट्टे को एक और साल के लिए नवीनीकृत करना चाहते हैं।"',
      correctAnswer: 'We would like to renew our lease for another year.',
      acceptableAnswers: ['We want to renew our lease for another year.'],
      explanation: '"Renew our lease for another year" is accurate.'
    },
    {
      id: 'ex_u10_l141_a06',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nTenant: "The heater is not producing any warm air."\nLandlord: "I understand. I will _____ right away."',
      options: [
        { id: '1', text: 'send a heating technician over', isCorrect: true },
        { id: '2', text: 'switch to an aisle seat', isCorrect: false },
        { id: '3', text: 'stand clear of the doors', isCorrect: false },
        { id: '4', text: 'rather to complain', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Logical response to heating failure.'
    },
    {
      id: 'ex_u10_l141_a07',
      type: 'speaking',
      prompt: 'Read this maintenance notification aloud clearly:',
      targetText: 'The radiator in the master bedroom is leaking water and needs to be inspected as soon as possible.',
      explanation: 'Ensure crisp articulation of "radiator", "inspected", and "as soon as possible".'
    }
  ]
};
