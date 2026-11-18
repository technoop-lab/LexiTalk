import { LessonConfig } from './unit4_builder_helper';

// =========================================================================
// LESSON 52: Neighborhood Places, Community Services & Local Facilities
// =========================================================================
export const CONFIG_52: LessonConfig = {
  num: 52,
  title: 'Neighborhood Places, Community Services & Local Facilities',
  icon: '🏘️',
  estMin: 25,
  objTitle: 'Describe local facilities, public amenities, and community locations',
  objDesc: 'Learn vocabulary for libraries, community centers, parks, clinics, and compound prepositions of place.',
  objHi: 'आस-पड़ोस के स्थानों, सामुदायिक सेवाओं और स्थानीय सुविधाओं का वर्णन करना सीखें।',
  objEs: 'Aprende a describir lugares del vecindario, servicios comunitarios e instalaciones locales.',
  canDo: [
    'I can name common community buildings and neighborhood amenities.',
    'I can describe where local services are located using compound prepositions.',
    'I can ask about opening hours and facilities in my neighborhood.'
  ],
  canDoHi: [
    'मैं सामान्य सामुदायिक भवनों और आस-पड़ोस की सुविधाओं के नाम बता सकता हूँ।',
    'मैं मिश्रित पूर्वसर्गों का उपयोग करके स्थानीय सेवाओं की स्थिति का वर्णन कर सकता हूँ।',
    'मैं अपने आस-पड़ोस में खुलने के समय और सुविधाओं के बारे में पूछ सकता हूँ।'
  ],
  canDoEs: [
    'Puedo nombrar edificios comunitarios e instalaciones del vecindario.',
    'Puedo describir dónde se encuentran los servicios locales usando preposiciones compuestas.',
    'Puedo preguntar sobre horarios de atención e instalaciones de mi vecindario.'
  ],
  vocab: [
    { w: 'neighborhood', p: '/ˈneɪ.bə.hʊd/', m: 'a district or area forming a community within a town or city', hi: 'पड़ोस / इलाका', es: 'vecindario / barrio', fr: 'quartier', de: 'Nachbarschaft', pt: 'bairro', zh: '街区 / 邻里', ar: 'حي', ja: '近所', ru: 'район / соседство', ex: 'Our neighborhood is quiet and friendly.', exHi: 'हमारा पड़ोस शांत और मिलनसार है।', exEs: 'Nuestro vecindario es tranquilo y amigable.', ic: '🏘️' },
    { w: 'library', p: '/ˈlaɪ.brər.i/', m: 'a building containing collections of books and periodicals for reading', hi: 'पुस्तकालय', es: 'biblioteca', fr: 'bibliothèque', de: 'Bibliothek', pt: 'biblioteca', zh: '图书馆', ar: 'مكتبة', ja: '図書館', ru: 'библиотека', ex: 'I study at the public library every Saturday.', exHi: 'मैं हर शनिवार को सार्वजनिक पुस्तकालय में पढ़ता हूँ।', exEs: 'Estudio en la biblioteca pública todos los sábados.', ic: '📚' },
    { w: 'pharmacy', p: '/ˈfɑː.mə.si/', m: 'a shop where medicinal drugs are prepared or sold', hi: 'दवा की दुकान (फ़ार्मेसी)', es: 'farmacia', fr: 'pharmacie', de: 'Apotheke', pt: 'farmácia', zh: '药店', ar: 'صيدلية', ja: '薬局', ru: 'аптека', ex: 'The 24-hour pharmacy is across from the clinic.', exHi: '24 घंटे खुली रहने वाली फ़ार्मेसी क्लिनिक के सामने है।', exEs: 'La farmacia de 24 horas está frente a la clínica.', ic: '💊' },
    { w: 'bakery', p: '/ˈbeɪ.kər.i/', m: 'a place where bread and cakes are made or sold', hi: 'बेकरी', es: 'panadería', fr: 'boulangerie', de: 'Bäckerei', pt: 'padaria', zh: '面包店', ar: 'مخبز', ja: 'パン屋', ru: 'пекарня', ex: 'The local bakery bakes fresh croissants each morning.', exHi: 'स्थानीय बेकरी हर सुबह ताज़ा क्रोइसैन बनाती है।', exEs: 'La panadería local hornea croissants frescos cada mañana.', ic: '🥐' },
    { w: 'butcher', p: '/ˈbʊtʃ.ər/', m: 'a person or shop selling fresh meat', hi: 'कसाई की दुकान', es: 'carnicería', fr: 'boucherie', de: 'Metzgerei', pt: 'açougue', zh: '肉店', ar: 'جزارة', ja: '肉屋', ru: 'мясная лавка', ex: 'He buys organic chicken from the butcher.', exHi: 'वह कसाई से जैविक चिकन खरीदता है।', exEs: 'Compra pollo orgánico en la carnicería.', ic: '🥩' },
    { w: 'clinic', p: '/ˈklɪn.ɪk/', m: 'an establishment or hospital department providing medical care', hi: 'क्लिनिक', es: 'clínica', fr: 'clinique', de: 'Klinik', pt: 'clínica', zh: '诊所', ar: 'عيادة', ja: '診療所', ru: 'клиника', ex: 'The health clinic offers vaccinations.', exHi: 'स्वास्थ्य क्लिनिक टीकाकरण प्रदान करता है।', exEs: 'La clínica de salud ofrece vacunas.', ic: '🩺' },
    { w: 'park', p: '/pɑːk/', m: 'a large public garden or area of land used for recreation', hi: 'उद्यान / पार्क', es: 'parque', fr: 'parc', de: 'Park', pt: 'parque', zh: '公园', ar: 'حديقة', ja: '公園', ru: 'парк', ex: 'Children play in the central park.', exHi: 'बच्चे सेंट्रल पार्क में खेलते हैं।', exEs: 'Los niños juegan en el parque central.', ic: '🌳' },
    { w: 'gym', p: '/dʒɪm/', m: 'a hall or building equipped for gymnastics, fitness, or sports', hi: 'जिम / व्यायामशाला', es: 'gimnasio', fr: 'salle de sport', de: 'Fitnessstudio', pt: 'academia', zh: '健身房', ar: 'صالة رياضية', ja: 'ジム', ru: 'спортзал', ex: 'I exercise at the local gym three times a week.', exHi: 'मैं सप्ताह में तीन बार स्थानीय जिम में व्यायाम करता हूँ।', exEs: 'Hago ejercicio en el gimnasio local tres veces por semana.', ic: '🏋️' },
    { w: 'supermarket', p: '/ˈsuː.pəˌmɑː.kɪt/', m: 'a large self-service grocery store', hi: 'सुपरमार्केट', es: 'supermercado', fr: 'supermarché', de: 'Supermarkt', pt: 'supermercado', zh: '超市', ar: 'سوبرماركت', ja: 'スーパー', ru: 'супермаркет', ex: 'The supermarket is open until 10:00 PM.', exHi: 'सुपरमार्केट रात 10:00 बजे तक खुला रहता है।', exEs: 'El supermercado está abierto hasta las 10:00 PM.', ic: '🛒' },
    { w: 'cinema', p: '/ˈsɪn.ə.mɑː/', m: 'a theatre where films are shown for public entertainment', hi: 'सिनेमा / थिएटर', es: 'cine', fr: 'cinéma', de: 'Kino', pt: 'cinema', zh: '电影院', ar: 'سينما', ja: '映画館', ru: 'кинотеатр', ex: 'Let\'s watch the new movie at the downtown cinema.', exHi: 'आइए शहर के सिनेमा में नई फिल्म देखें।', exEs: 'Veamos la nueva película en el cine del centro.', ic: '🎬' },
    { w: 'station', p: '/ˈsteɪ.ʃən/', m: 'a regular stopping place on a public transport route', hi: 'स्टेशन', es: 'estación', fr: 'gare / station', de: 'Bahnhof', pt: 'estação', zh: '车站', ar: 'محطة', ja: '駅', ru: 'станция', ex: 'The train station is a five-minute walk from here.', exHi: 'रेलवे स्टेशन यहाँ से पाँच मिनट की पैदल दूरी पर है।', exEs: 'La estación de tren está a cinco minutos a pie de aquí.', ic: '🚉' },
    { w: 'facility', p: '/fəˈsɪl.ə.ti/', m: 'a place, amenity, or piece of equipment provided for a purpose', hi: 'सुविधा', es: 'instalación / servicio', fr: 'installation', de: 'Einrichtung', pt: 'instalação', zh: '设施', ar: 'مرفق', ja: '施設', ru: 'сооружение / удобство', ex: 'The sports facility has a heated swimming pool.', exHi: 'खेल सुविधा में एक गर्म स्विमिंग पूल है।', exEs: 'La instalación deportiva tiene una piscina climatizada.', ic: '🏟️' },
    { w: 'community', p: '/kəˈmjuː.nə.ti/', m: 'a group of people living in the same place or having a particular characteristic in common', hi: 'समुदाय', es: 'comunidad', fr: 'communauté', de: 'Gemeinschaft', pt: 'comunidade', zh: '社区', ar: 'مجتمع', ja: '地域社会', ru: 'сообщество', ex: 'The community center hosts weekend art workshops.', exHi: 'सामुदायिक केंद्र सप्ताहांत कला कार्यशालाओं की मेजबानी करता है।', exEs: 'El centro comunitario organiza talleres de arte los fines de semana.', ic: '🤝' },
    { w: 'playground', p: '/ˈpleɪ.ɡraʊnd/', m: 'an outdoor area provided for children to play on', hi: 'खेल का मैदान', es: 'parque infantil', fr: 'terrain de jeux', de: 'Spielplatz', pt: 'parquinho', zh: '游乐场', ar: 'ملعب أطفال', ja: '遊び場', ru: 'детская площадка', ex: 'The playground has new swings and slides.', exHi: 'खेल के मैदान में नए झूले और स्लाइड हैं।', exEs: 'El parque infantil tiene columpios y toboganes nuevos.', ic: '🛝' },
    { w: 'across', p: '/əˈkrɒs/', m: 'from one side to the other of something with clear limits', hi: 'के पार / सामने', es: 'al otro lado de / cruzando', fr: 'en face de / de l\'autre côté', de: 'gegenüber / quer über', pt: 'do outro lado de', zh: '在对面', ar: 'عبر / في الجهة المقابلة', ja: '向かい側に', ru: 'напротив / через', ex: 'The post office is across from the bank.', exHi: 'डाकघर बैंक के सामने है।', exEs: 'La oficina de correos está frente al banco.', ic: '↔️' },
    { w: 'between', p: '/bɪˈtwiːn/', m: 'at, into, or across the space separating two things', hi: 'के बीच में', es: 'entre', fr: 'entre', de: 'zwischen', pt: 'entre', zh: '在...之间', ar: 'بين', ja: '〜の間に', ru: 'между', ex: 'The cafe is between the bookshop and the pharmacy.', exHi: 'कैफ़े किताबों की दुकान और फ़ार्मेसी के बीच में है।', exEs: 'La cafetería está entre la librería y la farmacia.', ic: '📍' },
    { w: 'behind', p: '/bɪˈhaɪnd/', m: 'at the back of someone or something', hi: 'के पीछे', es: 'detrás de', fr: 'derrière', de: 'hinter', pt: 'atrás de', zh: '在...后面', ar: 'خلف', ja: '〜の後ろに', ru: 'за / сзади', ex: 'There is a parking lot behind the building.', exHi: 'इमारत के पीछे एक पार्किंग स्थल है।', exEs: 'Hay un estacionamiento detrás del edificio.', ic: '🅿️' },
    { w: 'opposite', p: '/ˈɒp.ə.zɪt/', m: 'facing someone or something on the other side', hi: 'सामने / विपरीत', es: 'enfrente de', fr: 'en face de', de: 'gegenüber', pt: 'em frente a', zh: '在对面', ar: 'مقابل', ja: '向かいの', ru: 'напротив', ex: 'The bus stop is opposite our apartment.', exHi: 'बस स्टॉप हमारे अपार्टमेंट के सामने है।', exEs: 'La parada de autobús está enfrente de nuestro apartamento.', ic: '🚏' },
    { w: 'corner', p: '/ˈkɔː.nər/', m: 'a place where two streets or edges meet', hi: 'कोना', es: 'esquina', fr: 'coin / angle', de: 'Ecke', pt: 'esquina', zh: '拐角', ar: 'زاوية', ja: '角', ru: 'угол', ex: 'The bakery is on the corner of Oak Street.', exHi: 'बेकरी ओक स्ट्रीट के कोने पर है।', exEs: 'La panadería está en la esquina de Oak Street.', ic: '📐' },
    { w: 'resident', p: '/ˈrez.ɪ.dənt/', m: 'a person who lives somewhere permanently or on a long-term basis', hi: 'निवासी', es: 'residente / vecino', fr: 'habitant', de: 'Einwohner', pt: 'morador', zh: '居民', ar: 'مقيم', ja: '住民', ru: 'житель', ex: 'Local residents organized a clean-up day.', exHi: 'स्थानीय निवासियों ने सफाई दिवस का आयोजन किया।', exEs: 'Los residentes locales organizaron un día de limpieza.', ic: '👥' }
  ],
  chunks: [
    { phrase: 'community center', meaning: 'a public building where local people can meet for activities', hi: 'सामुदायिक केंद्र', es: 'centro comunitario', fr: 'centre communautaire', de: 'Gemeindezentrum', pt: 'centro comunitário', zh: '社区中心', ar: 'مركز مجتمعي', ja: 'コミュニティセンター', ru: 'общественный центр', note: 'Hub for local events and courses.', ic: '🏛️' },
    { phrase: 'on the corner of', meaning: 'located where two streets intersect', hi: 'के कोने पर', es: 'en la esquina de', fr: 'au coin de', de: 'an der Ecke von', pt: 'na esquina de', zh: '在...拐角处', ar: 'على زاوية', ja: '〜の角に', ru: 'на углу', note: 'Essential prepositional phrase for urban navigation.', ic: '📐' },
    { phrase: 'across from', meaning: 'directly on the opposite side of a street or space', hi: 'के सामने', es: 'frente a / cruzando la calle', fr: 'en face de', de: 'gegenüber von', pt: 'em frente a', zh: '在...对面', ar: 'في الجهة المقابلة لـ', ja: '〜の向かいに', ru: 'напротив', note: 'Very common American/global direction expression.', ic: '↔️' },
    { phrase: 'next to', meaning: 'adjacent to; right beside', hi: 'के बगल में', es: 'al lado de', fr: 'à côté de', de: 'neben', pt: 'ao lado de', zh: '在...旁边', ar: 'بجانب', ja: '〜の隣に', ru: 'рядом с', note: 'High-frequency location preposition.', ic: '➡️' },
    { phrase: 'within walking distance', meaning: 'close enough to reach by walking comfortably', hi: 'पैदल दूरी के भीतर', es: 'a poca distancia a pie', fr: 'à distance de marche', de: 'in Gehweite', pt: 'a uma curta caminhada', zh: '在步行距离内', ar: 'على مسافة قريبة سيراً', ja: '徒歩圏内に', ru: 'в пешей доступности', note: 'Neighborhood description idiom.', ic: '🚶' },
    { phrase: 'public transport', meaning: 'buses, trains, and metros available to everyone', hi: 'सार्वजनिक परिवहन', es: 'transporte público', fr: 'transports en commun', de: 'öffentlicher Nahverkehr', pt: 'transporte público', zh: '公共交通', ar: 'النقل العام', ja: '公共交通機関', ru: 'общественный транспорт', note: 'Key amenity discussion topic.', ic: '🚌' },
    { phrase: 'opening hours', meaning: 'the times when a business or facility is open', hi: 'खुलने का समय', es: 'horario de apertura', fr: 'heures d\'ouverture', de: 'Öffnungszeiten', pt: 'horário de funcionamento', zh: '营业时间', ar: 'ساعات العمل', ja: '営業時間', ru: 'часы работы', note: 'Standard inquiry subject.', ic: '🕒' },
    { phrase: 'sports complex', meaning: 'a group of sports fields, gyms, and courts', hi: 'खेल परिसर', es: 'complejo deportivo', fr: 'complexe sportif', de: 'Sportkomplex', pt: 'complexo esportivo', zh: '体育中心', ar: 'مجمع رياضي', ja: '総合運動場', ru: 'спортивный комплекс', note: 'Recreation facility term.', ic: '🏟️' }
  ],
  grammar: {
    title: 'Compound Prepositions of Place & There is / There are in Neighborhoods',
    concept: 'Using compound prepositions (across from, next to, on the corner of, between A and B) to pinpoint neighborhood places.',
    patterns: [
      {
        title: 'Compound Prepositions of Place',
        structure: 'Subject + is / are + [across from / between / on the corner of] + Place',
        rule: 'Use specific compound prepositions to describe exact relative positions in a neighborhood.',
        examples: [
          { en: 'The pharmacy is across from the health clinic.', hi: 'फ़ार्मेसी स्वास्थ्य क्लिनिक के सामने है।', es: 'La farmacia está frente a la clínica de salud.' },
          { en: 'The library is between the school and the park.', hi: 'पुस्तकालय स्कूल और पार्क के बीच में है।', es: 'La biblioteca está entre la escuela y el parque.' }
        ]
      },
      {
        title: 'There is / There are for Local Facilities',
        structure: 'There is a + singular noun / There are + plural nouns + in our neighborhood',
        rule: 'Use "There is" for a single facility and "There are" for multiple facilities.',
        examples: [
          { en: 'There is a modern gym next to the station.', hi: 'स्टेशन के बगल में एक आधुनिक जिम है।', es: 'Hay un gimnasio moderno al lado de la estación.' },
          { en: 'There are three supermarkets in our neighborhood.', hi: 'हमारे पड़ोस में तीन सुपरमार्केट हैं।', es: 'Hay tres supermercados en nuestro vecindario.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'The pharmacy is across to the clinic.', cor: 'The pharmacy is across from the clinic.', exp: 'Say "across from", not "across to".', hi: '"Across from" का उपयोग करें, "across to" नहीं।', es: 'Se dice "across from", no "across to".' },
    { inc: 'The library is between of the park and school.', cor: 'The library is between the park and the school.', exp: 'Do not use "of" with "between".', hi: '"Between" के साथ "of" का प्रयोग न करें।', es: 'No uses "of" con "between".' },
    { inc: 'There are a new bakery on Main Street.', cor: 'There is a new bakery on Main Street.', exp: 'Use "There is" with singular nouns like "a new bakery".', hi: 'एकवचन संज्ञा के लिए "There is" का उपयोग करें।', es: 'Usa "There is" con sustantivos en singular.' },
    { inc: 'The gym is in the corner of Elm Street.', cor: 'The gym is on the corner of Elm Street.', exp: 'Use the preposition "on" (or "at") for street corners: "on the corner of".', hi: 'सड़क के कोने के लिए "on the corner of" का प्रयोग करें।', es: 'Usa "on the corner of" para esquinas de calles.' },
    { inc: 'Is there many parks in this area?', cor: 'Are there many parks in this area?', exp: 'Use "Are there" for plural questions (many parks).', hi: 'बहुवचन प्रश्नों के लिए "Are there" का प्रयोग करें।', es: 'Usa "Are there" para preguntas en plural.' }
  ],
  dialogues: [
    {
      title: 'Showing a New Resident Around the Neighborhood',
      context: 'Hannah helps her new neighbor Julian locate everyday amenities.',
      charA: { name: 'Julian', av: '👨‍🎨', role: 'New Resident' },
      charB: { name: 'Hannah', av: '👩‍💼', role: 'Neighbor' },
      turns: [
        { spk: 'Julian', text: 'Hi Hannah! Where is the closest supermarket and pharmacy?', hi: 'नमस्ते हन्ना! सबसे नज़दीकी सुपरमार्केट और फ़ार्मेसी कहाँ है?', es: '¡Hola Hannah! ¿Dónde está el supermercado y la farmacia más cercanos?' },
        { spk: 'Hannah', text: 'There is a large supermarket on the corner of Oak Street, and the pharmacy is right next to it.', hi: 'ओक स्ट्रीट के कोने पर एक बड़ा सुपरमार्केट है, और फ़ार्मेसी ठीक उसके बगल में है।', es: 'Hay un supermercado grande en la esquina de Oak Street, y la farmacia está justo al lado.' },
        { spk: 'Julian', text: 'That is great! Is there a park within walking distance?', hi: 'यह बहुत बढ़िया है! क्या पैदल दूरी के भीतर कोई पार्क है?', es: '¡Eso es genial! ¿Hay un parque a poca distancia a pie?' },
        { spk: 'Hannah', text: 'Yes, Green Park is across from the library, just two blocks away.', hi: 'हाँ, ग्रीन पार्क पुस्तकालय के सामने है, बस दो ब्लॉक दूर।', es: 'Sí, Green Park está frente a la biblioteca, a solo dos cuadras.' }
      ]
    },
    {
      title: 'Inquiring at the Community Center',
      context: 'Emma asks about weekend fitness classes at the local recreation desk.',
      charA: { name: 'Emma', av: '👩‍🎓', role: 'Visitor' },
      charB: { name: 'Desk Clerk', av: '👨‍💼', role: 'Center Coordinator' },
      turns: [
        { spk: 'Desk Clerk', text: 'Welcome to the Maplewood Community Center! How can I help you?', hi: 'मेपलवुड सामुदायिक केंद्र में आपका स्वागत है! मैं आपकी क्या मदद कर सकता हूँ?', es: '¡Bienvenida al Centro Comunitario Maplewood! ¿Cómo puedo ayudarle?' },
        { spk: 'Emma', text: 'Hello! What are your opening hours for the gym and swimming pool?', hi: 'नमस्ते! जिम और स्विमिंग पूल के खुलने का समय क्या है?', es: '¡Hola! ¿Cuáles son sus horarios de apertura para el gimnasio y la piscina?' },
        { spk: 'Desk Clerk', text: 'We are open from 7:00 AM to 9:00 PM every day for all local residents.', hi: 'हम सभी स्थानीय निवासियों के लिए हर दिन सुबह 7:00 बजे से रात 9:00 बजे तक खुले रहते हैं।', es: 'Abrimos de 7:00 AM a 9:00 PM todos los días para todos los residentes locales.' },
        { spk: 'Emma', text: 'Wonderful! Where can I sign up for a weekend yoga pass?', hi: 'अद्भुत! मैं सप्ताहांत योग पास के लिए कहाँ पंजीकरण कर सकती हूँ?', es: '¡Maravilloso! ¿Dónde puedo inscribirme para un pase de yoga de fin de semana?' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u04_l52_p1', lessonId: 'lesson_a1_4_52', stage: 8, type: 'multiple_choice', prompt: 'Choose the correct preposition: "The pharmacy is across ___ the hospital."', options: [{ id: 'o1', text: 'from', isCorrect: true }, { id: 'o2', text: 'to', isCorrect: false }, { id: 'o3', text: 'at', isCorrect: false }] },
    { id: 'ex_u04_l52_p2', lessonId: 'lesson_a1_4_52', stage: 8, type: 'fill_blank', prompt: 'Complete the sentence: "There ___ three parks in our neighborhood."', sentenceTemplate: 'There ___ three parks in our neighborhood.', sourceSentence: 'There ___ three parks in our neighborhood.', options: [{ id: 'o1', text: 'are', isCorrect: true }, { id: 'o2', text: 'is', isCorrect: false }, { id: 'o3', text: 'am', isCorrect: false }] },
    { id: 'ex_u04_l52_p3', lessonId: 'lesson_a1_4_52', stage: 8, type: 'word_ordering', prompt: 'Order the words to describe location:', wordBank: ['The', 'bakery', 'is', 'next', 'to', 'the', 'supermarket.'], targetSentence: 'The bakery is next to the supermarket.' },
    { id: 'ex_u04_l52_p4', lessonId: 'lesson_a1_4_52', stage: 8, type: 'match_pairs', prompt: 'Match neighborhood places with their descriptions:', pairs: [{ left: 'library', right: 'books and study spaces' }, { left: 'pharmacy', right: 'medicines and health items' }, { left: 'bakery', right: 'fresh bread and pastries' }, { left: 'gym', right: 'exercise equipment and fitness' }] },
    { id: 'ex_u04_l52_p5', lessonId: 'lesson_a1_4_52', stage: 8, type: 'error_correction', prompt: 'Identify the corrected sentence:', sentenceTemplate: 'The cafe is between of the bank and post office.', options: [{ id: 'o1', text: 'The cafe is between the bank and the post office.', isCorrect: true }, { id: 'o2', text: 'The cafe is between of bank and post office.', isCorrect: false }, { id: 'o3', text: 'The cafe is between to the bank and post office.', isCorrect: false }] },
    { id: 'ex_u04_l52_p6', lessonId: 'lesson_a1_4_52', stage: 9, type: 'listening', prompt: 'Listen and select what the speaker says:', audioText: 'There is a modern sports facility on the corner of Elm Street.', options: [{ id: 'o1', text: 'There is a modern sports facility on the corner of Elm Street.', isCorrect: true }, { id: 'o2', text: 'There is a model short faculty on the corner of Elm Street.', isCorrect: false }] },
    { id: 'ex_u04_l52_p7', lessonId: 'lesson_a1_4_52', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'The library is across from the central park.', targetSentence: 'The library is across from the central park.' },
    { id: 'ex_u04_l52_p8', lessonId: 'lesson_a1_4_52', stage: 10, type: 'multiple_choice', prompt: 'Choose the correct question to ask about a neighborhood supermarket:', options: [{ id: 'o1', text: 'Is there a supermarket near here?', isCorrect: true }, { id: 'o2', text: 'Are there a supermarket near here?', isCorrect: false }, { id: 'o3', text: 'Is a supermarket near here?', isCorrect: false }] },
    { id: 'ex_u04_l52_p9', lessonId: 'lesson_a1_4_52', stage: 11, type: 'dialogue_completion', prompt: 'Complete the direction response: "Excuse me, where is the community center?"', options: [{ id: 'o1', text: 'It is on the corner of Pine Street, right next to the clinic.', isCorrect: true }, { id: 'o2', text: 'I am eating an apple.', isCorrect: false }, { id: 'o3', text: 'The sky has clouds.', isCorrect: false }] },
    { id: 'ex_u04_l52_p10', lessonId: 'lesson_a1_4_52', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'The train station is within walking distance of my apartment.', audioText: 'The train station is within walking distance of my apartment.' },
    { id: 'ex_u04_l52_p11', lessonId: 'lesson_a1_4_52', stage: 13, type: 'translation', prompt: 'Translate: "पुस्तकालय पार्क और स्कूल के बीच में है।" / "La biblioteca está entre el parque y la escuela."', targetSentence: 'The library is between the park and the school.' },
    { id: 'ex_u04_l52_p12', lessonId: 'lesson_a1_4_52', stage: 14, type: 'multiple_choice', prompt: 'What phrase means close enough to reach on foot?', options: [{ id: 'o1', text: 'within walking distance', isCorrect: true }, { id: 'o2', text: 'express delivery', isCorrect: false }, { id: 'o3', text: 'unworn tag', isCorrect: false }] },
    { id: 'ex_u04_l52_p13', lessonId: 'lesson_a1_4_52', stage: 14, type: 'fill_blank', prompt: 'Complete with the preposition: "The bakery is ___ the corner of Market Street."', sentenceTemplate: 'The bakery is ___ the corner of Market Street.', sourceSentence: 'The bakery is ___ the corner of Market Street.', options: [{ id: 'o1', text: 'on', isCorrect: true }, { id: 'o2', text: 'in', isCorrect: false }, { id: 'o3', text: 'to', isCorrect: false }] },
    { id: 'ex_u04_l52_p14', lessonId: 'lesson_a1_4_52', stage: 14, type: 'word_ordering', prompt: 'Order the words to make an inquiry:', wordBank: ['What', 'are', 'the', 'opening', 'hours', 'of', 'the', 'gym?'], targetSentence: 'What are the opening hours of the gym?' },
    { id: 'ex_u04_l52_p15', lessonId: 'lesson_a1_4_52', stage: 14, type: 'speaking', prompt: 'Speak this complete sentence clearly into your microphone:', targetSentence: 'Our neighborhood has a clean park and friendly residents.', audioText: 'Our neighborhood has a clean park and friendly residents.' }
  ],
  review: [
    { id: 'ex_u04_l52_r1', lessonId: 'lesson_a1_4_52', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Choose the correct imperative for safety:', options: [{ id: 'o1', text: 'Please call the emergency number immediately.', isCorrect: true }, { id: 'o2', text: 'Please to call emergency number.', isCorrect: false }, { id: 'o3', text: 'Calling emergency number please.', isCorrect: false }] },
    { id: 'ex_u04_l52_r2', lessonId: 'lesson_a1_4_52', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete: "Express delivery is ___ than standard mail."', sentenceTemplate: 'Express delivery is ___ than standard mail.', sourceSentence: 'Express delivery is ___ than standard mail.', options: [{ id: 'o1', text: 'faster', isCorrect: true }, { id: 'o2', text: 'more fast', isCorrect: false }, { id: 'o3', text: 'fastest', isCorrect: false }] },
    { id: 'ex_u04_l52_r3', lessonId: 'lesson_a1_4_52', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['Can', 'I', 'pay', 'by', 'debit', 'card?'], targetSentence: 'Can I pay by debit card?' },
    { id: 'ex_u04_l52_r4', lessonId: 'lesson_a1_4_52', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match locations and services:', pairs: [{ left: 'post office', right: 'send parcels and buy stamps' }, { left: 'bank', right: 'withdraw money and open accounts' }, { left: 'hospital', right: 'emergency medical care' }, { left: 'pharmacy', right: 'medicine and health supplies' }] },
    { id: 'ex_u04_l52_r5', lessonId: 'lesson_a1_4_52', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "निकटतम अस्पताल कहाँ है?"', targetSentence: 'Where is the nearest hospital?' }
  ],
  assessment: [
    { id: 'ex_u04_l52_a1', lessonId: 'lesson_a1_4_52', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the grammatically correct location sentence:', options: [{ id: 'o1', text: 'The community center is across from the public library.', isCorrect: true }, { id: 'o2', text: 'The community center is across to the library.', isCorrect: false }, { id: 'o3', text: 'The community center is across of library.', isCorrect: false }] },
    { id: 'ex_u04_l52_a2', lessonId: 'lesson_a1_4_52', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete the sentence: "The new cafe is located ___ the bookshop and the bakery."', sentenceTemplate: 'The new cafe is located ___ the bookshop and the bakery.', sourceSentence: 'The new cafe is located ___ the bookshop and the bakery.', options: [{ id: 'o1', text: 'between', isCorrect: true }, { id: 'o2', text: 'across', isCorrect: false }, { id: 'o3', text: 'between of', isCorrect: false }] },
    { id: 'ex_u04_l52_a3', lessonId: 'lesson_a1_4_52', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words correctly:', wordBank: ['There', 'is', 'a', 'supermarket', 'within', 'walking', 'distance.'], targetSentence: 'There is a supermarket within walking distance.' },
    { id: 'ex_u04_l52_a4', lessonId: 'lesson_a1_4_52', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Select the appropriate response: "Is there a good gym near here?"', options: [{ id: 'o1', text: 'Yes, there is one right behind the train station.', isCorrect: true }, { id: 'o2', text: 'I am reading a newspaper.', isCorrect: false }, { id: 'o3', text: 'My car is white.', isCorrect: false }] },
    { id: 'ex_u04_l52_a5', lessonId: 'lesson_a1_4_52', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this complete sentence clearly:', targetSentence: 'The health clinic is on the corner of Elm Street opposite the park.', audioText: 'The health clinic is on the corner of Elm Street opposite the park.' }
  ]
};

// =========================================================================
// LESSON 53: Describing Past Experiences, Holidays & Memorable Events
// =========================================================================
export const CONFIG_53: LessonConfig = {
  num: 53,
  title: 'Describing Past Experiences, Holidays & Memorable Events',
  icon: '🌴',
  estMin: 25,
  objTitle: 'Talk about vacations, past weekend activities, and memorable trips',
  objDesc: 'Consolidate Past Simple (regular and irregular verbs) with time markers like "last summer", "ago", and "when I visited".',
  objHi: 'छुट्टियों, पिछले सप्ताहांत की गतिविधियों और यादगार यात्राओं के बारे में बात करना सीखें।',
  objEs: 'Aprende a hablar de vacaciones, actividades del fin de semana pasado y viajes memorables.',
  canDo: [
    'I can describe what I did on my last vacation or trip.',
    'I can use past time markers (yesterday, last month, two years ago).',
    'I can ask friends about their past travel experiences.'
  ],
  canDoHi: [
    'मैं वर्णन कर सकता हूँ कि मैंने अपनी पिछली छुट्टियों या यात्रा में क्या किया था।',
    'मैं भूतकाल के समय संकेतकों (कल, पिछले महीने, दो साल पहले) का उपयोग कर सकता हूँ।',
    'मैं दोस्तों से उनके पिछले यात्रा अनुभवों के बारे में पूछ सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir lo que hice en mis últimas vacaciones o viaje.',
    'Puedo usar marcadores de tiempo pasado (ayer, el mes pasado, hace dos años).',
    'Puedo preguntar a mis amigos sobre sus experiencias de viaje pasadas.'
  ],
  vocab: [
    { w: 'vacation', p: '/veɪˈkeɪ.ʃən/', m: 'a period of time spent away from home or work in traveling or recreation', hi: 'छुट्टियाँ (वेकेशन)', es: 'vacaciones', fr: 'vacances', de: 'Urlaub', pt: 'férias', zh: '假期 / 度假', ar: 'عطلة', ja: '休暇', ru: 'отпуск / каникулы', ex: 'We went to Italy for our summer vacation.', exHi: 'हम अपनी गर्मियों की छुट्टियों के लिए इटली गए थे।', exEs: 'Fuimos a Italia para nuestras vacaciones de verano.', ic: '🏖️' },
    { w: 'holiday', p: '/ˈhɒl.ə.deɪ/', m: 'a day of festivity or recreation when no work is done', hi: 'अवकाश / त्यौहार', es: 'día festivo / vacaciones', fr: 'jour férié', de: 'Feiertag', pt: 'feriado', zh: '节日', ar: 'يوم عطلة', ja: '休日', ru: 'праздник / отдых', ex: 'Monday is a public holiday.', exHi: 'सोमवार को सार्वजनिक अवकाश है।', exEs: 'El lunes es un día festivo oficial.', ic: '🎉' },
    { w: 'trip', p: '/trɪp/', m: 'a journey or excursion, especially for pleasure', hi: 'यात्रा (ट्रिप)', es: 'viaje', fr: 'voyage', de: 'Reise / Ausflug', pt: 'viagem', zh: '旅行', ar: 'رحلة', ja: '旅行', ru: 'поездка', ex: 'Our road trip along the coast was amazing.', exHi: 'तट के किनारे हमारी सड़क यात्रा अद्भुत थी।', exEs: 'Nuestro viaje por carretera por la costa fue increíble.', ic: '🚗' },
    { w: 'sightseeing', p: '/ˈsaɪtˌsiː.ɪŋ/', m: 'the activity of visiting places of interest in a particular location', hi: 'दर्शनीय स्थलों की यात्रा', es: 'hacer turismo / ver monumentos', fr: 'visite touristique', de: 'Besichtigung', pt: 'passeio turístico', zh: '观光', ar: 'مشاهدة معالم المدينة', ja: '観光', ru: 'осмотр достопримечательностей', ex: 'We did lots of sightseeing in Paris.', exHi: 'हमने पेरिस में बहुत सारे दर्शनीय स्थलों का दौरा किया।', exEs: 'Hicimos mucho turismo en París.', ic: '🏛️' },
    { w: 'hotel', p: '/həʊˈtel/', m: 'an establishment providing accommodation and meals for travelers', hi: 'होटल', es: 'hotel', fr: 'hôtel', de: 'Hotel', pt: 'hotel', zh: '酒店', ar: 'فندق', ja: 'ホテル', ru: 'отель', ex: 'We stayed at a comfortable hotel near the beach.', exHi: 'हम समुद्र तट के पास एक आरामदायक होटल में रुके थे।', exEs: 'Nos alojamos en un hotel cómodo cerca de la playa.', ic: '🏨' },
    { w: 'museum', p: '/mjuːˈziː.əm/', m: 'a building in which objects of interest or value are exhibited', hi: 'संग्रहालय', es: 'museo', fr: 'musée', de: 'Museum', pt: 'museu', zh: '博物馆', ar: 'متحف', ja: '博物館', ru: 'музей', ex: 'We visited the art museum on Tuesday.', exHi: 'हमने मंगलवार को कला संग्रहालय का दौरा किया।', exEs: 'Visitamos el museo de arte el martes.', ic: '🏛️' },
    { w: 'beach', p: '/biːtʃ/', m: 'a pebbly or sandy shore by the ocean', hi: 'समुद्र तट (बीच)', es: 'playa', fr: 'plage', de: 'Strand', pt: 'praia', zh: '沙滩', ar: 'شاطئ', ja: 'ビーチ', ru: 'пляж', ex: 'We swam in the ocean and relaxed on the beach.', exHi: 'हम समुद्र में तैरे और समुद्र तट पर आराम किया।', exEs: 'Nadamos en el océano y nos relajamos en la playa.', ic: '🏖️' },
    { w: 'mountain', p: '/ˈmaʊn.tɪn/', m: 'a large natural elevation of the earth\'s surface', hi: 'पहाड़', es: 'montaña', fr: 'montagne', de: 'Berg', pt: 'montanha', zh: '山', ar: 'جبل', ja: '山', ru: 'гора', ex: 'We hiked up the mountain early in the morning.', exHi: 'हम सुबह जल्दी पहाड़ पर चढ़े।', exEs: 'Hicimos una caminata por la montaña temprano en la mañana.', ic: '⛰️' },
    { w: 'souvenir', p: '/ˌsuː.vənˈɪər/', m: 'a thing that is kept as a reminder of a person, place, or event', hi: 'स्मृति चिन्ह (सोवेनियर)', es: 'recuerdo / souvenir', fr: 'souvenir', de: 'Souvenir / Andenken', pt: 'lembrancinha', zh: '纪念品', ar: 'تذكار', ja: 'お土産', ru: 'сувенир', ex: 'I bought a handcrafted souvenir for my sister.', exHi: 'मैंने अपनी बहन के लिए एक हस्तनिर्मित स्मृति चिन्ह खरीदा।', exEs: 'Compré un recuerdo artesanal para mi hermana.', ic: '🎁' },
    { w: 'guide', p: '/ɡaɪd/', m: 'a person who shows the way to others, especially on tours', hi: 'गाइड / मार्गदर्शक', es: 'guía', fr: 'guide', de: 'Reiseleiter', pt: 'guia', zh: '导游', ar: 'مرشد سياحي', ja: 'ガイド', ru: 'гид / экскурсовод', ex: 'Our tour guide explained the history of the castle.', exHi: 'हमारे टूर गाइड ने महल के इतिहास के बारे में बताया।', exEs: 'Nuestro guía turístico explicó la historia del castillo.', ic: '🗣️' },
    { w: 'flight', p: '/flaɪt/', m: 'a journey in an aircraft', hi: 'उड़ान (फ़्लाइट)', es: 'vuelo', fr: 'vol', de: 'Flug', pt: 'voo', zh: '航班', ar: 'رحلة طيران', ja: 'フライト', ru: 'рейс / полет', ex: 'Our flight arrived on time yesterday.', exHi: 'हमारी उड़ान कल समय पर पहुँची।', exEs: 'Nuestro vuelo llegó a tiempo ayer.', ic: '✈️' },
    { w: 'luggage', p: '/ˈlʌɡ.ɪdʒ/', m: 'suitcases or other bags in which to pack personal belongings for traveling', hi: 'सामान (लगेज)', es: 'equipaje', fr: 'bagages', de: 'Gepäck', pt: 'bagagem', zh: '行李', ar: 'أمتعة', ja: '手荷物', ru: 'багаж', ex: 'We collected our luggage at baggage claim.', exHi: 'हमने बैगेज क्लेम से अपना सामान एकत्र किया।', exEs: 'Recogimos nuestro equipaje en el reclamo de equipaje.', ic: '🧳' },
    { w: 'photograph', p: '/ˈfəʊ.tə.ɡrɑːf/', m: 'a picture made using a camera', hi: 'तस्वीर / फ़ोटो', es: 'fotografía / foto', fr: 'photographie', de: 'Foto', pt: 'fotografia', zh: '照片', ar: 'صورة فوتوغرافية', ja: '写真', ru: 'фотография', ex: 'She took beautiful photographs of the sunset.', exHi: 'उसने सूर्यास्त की सुंदर तस्वीरें लीं।', exEs: 'Ella tomó hermosas fotografías del atardecer.', ic: '📷' },
    { w: 'experience', p: '/ɪkˈspɪə.ri.əns/', m: 'an event or occurrence which leaves an impression on someone', hi: 'अनुभव', es: 'experiencia', fr: 'expérience', de: 'Erlebnis / Erfahrung', pt: 'experiência', zh: '经历 / 体验', ar: 'تجربة', ja: '経験', ru: 'опыт / впечатление', ex: 'Visiting the ancient ruins was an unforgettable experience.', exHi: 'प्राचीन खंडहरों का दौरा करना एक अविस्मरणीय अनुभव था।', exEs: 'Visitar las ruinas antiguas fue una experiencia inolvidable.', ic: '🌟' },
    { w: 'yesterday', p: '/ˈjes.tə.deɪ/', m: 'on the day before today', hi: 'कल (बीता हुआ)', es: 'ayer', fr: 'hier', de: 'gestern', pt: 'ontem', zh: '昨天', ar: 'أمس', ja: '昨日', ru: 'вчера', ex: 'We returned from our trip yesterday.', exHi: 'हम कल अपनी यात्रा से लौटे।', exEs: 'Regresamos de nuestro viaje ayer.', ic: '📅' },
    { w: 'ago', p: '/əˈɡəʊ/', m: 'before the present; earlier', hi: 'पहले', es: 'hace (tiempo)', fr: 'il y a', de: 'vor', pt: 'atrás (tempo)', zh: '以前', ar: 'منذ', ja: '前に', ru: 'назад (во времени)', ex: 'I visited Rome three years ago.', exHi: 'मैंने तीन साल पहले रोम का दौरा किया था।', exEs: 'Visité Roma hace tres años.', ic: '⏳' },
    { w: 'delicious', p: '/dɪˈlɪʃ.əs/', m: 'having a very pleasant taste or smell', hi: 'स्वादिष्ट', es: 'delicioso', fr: 'délicieux', de: 'köstlich', pt: 'delicioso', zh: '美味的', ar: 'لذيذ', ja: '美味しい', ru: 'вкусный', ex: 'We tasted delicious local seafood.', exHi: 'हमने स्वादिष्ट स्थानीय समुद्री भोजन का स्वाद चखा।', exEs: 'Probamos mariscos locales deliciosos.', ic: '🍲' },
    { w: 'wonderful', p: '/ˈwʌn.də.fəl/', m: 'inspiring delight, pleasure, or admiration; extremely good', hi: 'अद्भुत / शानदार', es: 'maravilloso', fr: 'merveilleux', de: 'wunderbar', pt: 'maravilhoso', zh: '精彩的', ar: 'رائع', ja: '素晴らしい', ru: 'замечательный', ex: 'We had a wonderful time in Spain.', exHi: 'हमने स्पेन में एक शानदार समय बिताया।', exEs: 'Tuvimos un tiempo maravilloso en España.', ic: '✨' },
    { w: 'relaxed', p: '/rɪˈlækst/', m: 'free from tension and anxiety; at ease', hi: 'शांत / तनावमुक्त', es: 'relajado', fr: 'détendu', de: 'entspannt', pt: 'relaxado', zh: '轻松的', ar: 'مسترخٍ', ja: 'リラックスした', ru: 'расслабленный', ex: 'I felt very relaxed after the vacation.', exHi: 'छुट्टियों के बाद मुझे बहुत सुकून महसूस हुआ।', exEs: 'Me sentí muy relajado después de las vacaciones.', ic: '😌' },
    { w: 'weather', p: '/ˈweð.ər/', m: 'the state of the atmosphere at a place and time', hi: 'मौसम', es: 'clima / tiempo', fr: 'météo', de: 'Wetter', pt: 'clima', zh: '天气', ar: 'طقس', ja: '天気', ru: 'погода', ex: 'The weather was warm and sunny all week.', exHi: 'पूरे सप्ताह मौसम गर्म और धूप वाला था।', exEs: 'El clima estuvo cálido y soleado toda la semana.', ic: '☀️' }
  ],
  chunks: [
    { phrase: 'go sightseeing', meaning: 'to tour and view famous attractions in a place', hi: 'दर्शनीय स्थल देखने जाना', es: 'ir a hacer turismo', fr: 'faire du tourisme', de: 'Besichtigungen machen', pt: 'fazer turismo', zh: '去观光', ar: 'الذهاب لمشاهدة المعالم', ja: '観光に行く', ru: 'осматривать достопримечательности', note: 'Standard holiday collocation.', ic: '🏛️' },
    { phrase: 'take photographs', meaning: 'to capture pictures with a camera', hi: 'तस्वीरें खींचना', es: 'tomar fotos', fr: 'prendre des photos', de: 'Fotos machen', pt: 'tirar fotos', zh: '拍照', ar: 'التقاط صور', ja: '写真を撮る', ru: 'фотографировать', note: 'Essential travel activity.', ic: '📷' },
    { phrase: 'stay at a hotel', meaning: 'to lodge temporarily in accommodation', hi: 'होटल में ठहरना', es: 'alojarse en un hotel', fr: 'séjourner à l\'hôtel', de: 'im Hotel übernachten', pt: 'ficar em um hotel', zh: '住在酒店', ar: 'الإقامة في فندق', ja: 'ホテルに泊まる', ru: 'остановиться в отеле', note: 'Uses preposition "at".', ic: '🏨' },
    { phrase: 'two years ago', meaning: 'two years before now', hi: 'दो साल पहले', es: 'hace dos años', fr: 'il y a deux ans', de: 'vor zwei Jahren', pt: 'há dois anos', zh: '两年前', ar: 'قبل سنتين', ja: '2年前に', ru: 'два года назад', note: 'Past Simple time anchor.', ic: '⏳' },
    { phrase: 'last summer', meaning: 'during the summer of the previous year', hi: 'पिछली गर्मियों में', es: 'el verano pasado', fr: 'l\'été dernier', de: 'letzten Sommer', pt: 'no verão passado', zh: '去年夏天', ar: 'الصيف الماضي', ja: '去年の夏', ru: 'прошлым летом', note: 'No preposition needed before "last".', ic: '☀️' },
    { phrase: 'have a great time', meaning: 'to thoroughly enjoy an experience', hi: 'बहुत अच्छा समय बिताना', es: 'pasarlo muy bien', fr: 'passer un excellent moment', de: 'eine tolle Zeit haben', pt: 'divertir-se muito', zh: '玩得很开心', ar: 'قضاء وقت رائع', ja: '素晴らしい時間を過ごす', ru: 'отлично провести время', note: 'Past tense: "had a great time".', ic: '🎉' },
    { phrase: 'try local food', meaning: 'to taste regional culinary specialties', hi: 'स्थानीय भोजन का स्वाद लेना', es: 'probar comida local', fr: 'goûter la cuisine locale', de: 'lokales Essen probieren', pt: 'experimentar comida local', zh: '品尝当地美食', ar: 'تذوق الطعام المحلي', ja: '郷土料理を食べる', ru: 'попробовать местную еду', note: 'Universal travel objective.', ic: '🍲' },
    { phrase: 'buy souvenirs', meaning: 'to purchase memorabilia from a trip', hi: 'स्मृति चिन्ह खरीदना', es: 'comprar recuerdos', fr: 'acheter des souvenirs', de: 'Souvenirs kaufen', pt: 'comprar lembrancinhas', zh: '买纪念品', ar: 'شراء هدايا تذكارية', ja: 'お土産を買う', ru: 'покупать сувениры', note: 'Shopping on holidays.', ic: '🎁' }
  ],
  grammar: {
    title: 'Past Simple Consolidation & Time Markers (Ago, Last, Yesterday)',
    concept: 'Using regular (-ed) and irregular past tense verbs (went, stayed, visited, saw, bought) with past time anchors.',
    patterns: [
      {
        title: 'Past Simple Affirmative Statements',
        structure: 'Subject + past verb (went, visited, stayed, bought) + time marker',
        rule: 'Use the past tense form to describe actions completed at a specific time in the past.',
        examples: [
          { en: 'We went to Italy last summer.', hi: 'हम पिछली गर्मियों में इटली गए थे।', es: 'Fuimos a Italia el verano pasado.' },
          { en: 'I bought this souvenir three days ago.', hi: 'मैंने यह स्मृति चिन्ह तीन दिन पहले खरीदा था।', es: 'Compré este recuerdo hace tres días.' }
        ]
      },
      {
        title: 'Past Simple Questions with "Did"',
        structure: 'Did + subject + base verb + ...?',
        rule: 'Always use the base verb (not the past form) after auxiliary "Did" in questions.',
        examples: [
          { en: 'Did you visit any museums in London?', hi: 'क्या आपने लंदन में किसी संग्रहालय का दौरा किया था?', es: '¿Visitaste algún museo en Londres?' },
          { en: 'Where did you stay during your vacation?', hi: 'अपनी छुट्टियों के दौरान आप कहाँ ठहरे थे?', es: '¿Dónde te alojaste durante tus vacaciones?' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'Did you went to the beach yesterday?', cor: 'Did you go to the beach yesterday?', exp: 'Use the base verb "go" after the auxiliary "Did".', hi: '"Did" के बाद मूल क्रिया "go" का प्रयोग करें।', es: 'Usa el verbo base "go" después del auxiliar "Did".' },
    { inc: 'I visited Spain in last summer.', cor: 'I visited Spain last summer.', exp: 'Do not use "in" before "last summer" or "last year".', hi: '"Last summer" से पहले "in" न लगाएं।', es: 'No uses "in" antes de "last summer".' },
    { inc: 'We stayed in a hotel before two days.', cor: 'We stayed at a hotel two days ago.', exp: 'Use "ago" after the time period to indicate past time from now.', hi: 'समय अवधि के बाद "ago" का प्रयोग करें।', es: 'Usa "ago" después del período de tiempo (two days ago).' },
    { inc: 'She buyed many souvenirs in Rome.', cor: 'She bought many souvenirs in Rome.', exp: 'The past tense of "buy" is irregular: "bought".', hi: '"Buy" का भूतकाल अनियमित है: "bought"।', es: 'El pasado de "buy" es irregular: "bought".' },
    { inc: 'I didn\'t saw the museum.', cor: 'I didn\'t see the museum.', exp: 'Use base verb "see" after negative "didn\'t".', hi: '"Didn\'t" के बाद मूल क्रिया "see" का प्रयोग करें।', es: 'Usa el verbo base después de "didn\'t".' }
  ],
  dialogues: [
    {
      title: 'Talking About a Summer Vacation',
      context: 'Chloe and Ben catch up about their recent holiday travels.',
      charA: { name: 'Chloe', av: '👩‍🎨', role: 'Traveler' },
      charB: { name: 'Ben', av: '👨‍💼', role: 'Coworker' },
      turns: [
        { spk: 'Ben', text: 'Welcome back, Chloe! How was your vacation in Portugal?', hi: 'वापसी पर स्वागत है, क्लोई! पुर्तगाल में आपकी छुट्टियां कैसी रहीं?', es: '¡Bienvenida de nuevo, Chloe! ¿Cómo fueron tus vacaciones en Portugal?' },
        { spk: 'Chloe', text: 'It was wonderful! The weather was warm and sunny every day.', hi: 'यह बहुत बढ़िया थी! हर दिन मौसम गर्म और धूप वाला था।', es: '¡Fue maravilloso! El clima estuvo cálido y soleado todos los días.' },
        { spk: 'Ben', text: 'What did you do there? Did you go sightseeing?', hi: 'आपने वहां क्या किया? क्या आप दर्शनीय स्थल देखने गए थे?', es: '¿Qué hiciste allí? ¿Fuiste a hacer turismo?' },
        { spk: 'Chloe', text: 'Yes, we visited historic castles, ate delicious seafood, and swam in the ocean.', hi: 'हाँ, हमने ऐतिहासिक किलों का दौरा किया, स्वादिष्ट समुद्री भोजन खाया, और समुद्र में तैरे।', es: 'Sí, visitamos castillos históricos, comimos mariscos deliciosos y nadamos en el océano.' }
      ]
    },
    {
      title: 'Asking About a Weekend Road Trip',
      context: 'Sam asks Liam about his trip to the mountains.',
      charA: { name: 'Sam', av: '👨‍💻', role: 'Friend' },
      charB: { name: 'Liam', av: '🚵‍♂️', role: 'Hiker' },
      turns: [
        { spk: 'Sam', text: 'Hey Liam! Did you go on that mountain hike last weekend?', hi: 'अरे लियाम! क्या आप पिछले सप्ताहांत उस पहाड़ी ट्रेक पर गए थे?', es: '¡Hola Liam! ¿Fuiste a esa caminata por la montaña el fin de semana pasado?' },
        { spk: 'Liam', text: 'Yes, we drove up early on Saturday and stayed at a cozy cabin.', hi: 'हाँ, हम शनिवार को जल्दी गाड़ी चलाकर गए और एक आरामदायक केबिन में रुके।', es: 'Sí, subimos temprano en coche el sábado y nos quedamos en una cabaña acogedora.' },
        { spk: 'Sam', text: 'How was the view from the summit?', hi: 'शिखर से दृश्य कैसा था?', es: '¿Cómo fue la vista desde la cima?' },
        { spk: 'Liam', text: 'It was breathtaking! I took hundreds of photographs with my camera.', hi: 'यह लुभावना था! मैंने अपने कैमरे से सैकड़ों तस्वीरें लीं।', es: '¡Fue impresionante! Tomé cientos de fotografías con mi cámara.' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u04_l53_p1', lessonId: 'lesson_a1_4_53', stage: 8, type: 'multiple_choice', prompt: 'Select the correct past tense verb: "We ___ to Spain last summer."', options: [{ id: 'o1', text: 'went', isCorrect: true }, { id: 'o2', text: 'go', isCorrect: false }, { id: 'o3', text: 'goed', isCorrect: false }] },
    { id: 'ex_u04_l53_p2', lessonId: 'lesson_a1_4_53', stage: 8, type: 'fill_blank', prompt: 'Complete with the base verb after "Did": "Did you ___ any souvenirs in Paris?"', sentenceTemplate: 'Did you ___ any souvenirs in Paris?', sourceSentence: 'Did you ___ any souvenirs in Paris?', options: [{ id: 'o1', text: 'buy', isCorrect: true }, { id: 'o2', text: 'bought', isCorrect: false }, { id: 'o3', text: 'buying', isCorrect: false }] },
    { id: 'ex_u04_l53_p3', lessonId: 'lesson_a1_4_53', stage: 8, type: 'word_ordering', prompt: 'Order the words to describe a past vacation:', wordBank: ['We', 'had', 'a', 'wonderful', 'time', 'in', 'Italy.'], targetSentence: 'We had a wonderful time in Italy.' },
    { id: 'ex_u04_l53_p4', lessonId: 'lesson_a1_4_53', stage: 8, type: 'match_pairs', prompt: 'Match base verbs with their irregular past tense forms:', pairs: [{ left: 'go', right: 'went' }, { left: 'buy', right: 'bought' }, { left: 'see', right: 'saw' }, { left: 'take', right: 'took' }] },
    { id: 'ex_u04_l53_p5', lessonId: 'lesson_a1_4_53', stage: 8, type: 'error_correction', prompt: 'Identify the corrected sentence:', sentenceTemplate: 'I visited Rome before two years with my family.', options: [{ id: 'o1', text: 'I visited Rome two years ago with my family.', isCorrect: true }, { id: 'o2', text: 'I visit Rome before two years with family.', isCorrect: false }, { id: 'o3', text: 'I was visit Rome two years ago with family.', isCorrect: false }] },
    { id: 'ex_u04_l53_p6', lessonId: 'lesson_a1_4_53', stage: 9, type: 'listening', prompt: 'Listen and select what the speaker says:', audioText: 'We stayed at a comfortable hotel near the beach and swam in the ocean.', options: [{ id: 'o1', text: 'We stayed at a comfortable hotel near the beach and swam in the ocean.', isCorrect: true }, { id: 'o2', text: 'We stood at a convertible hotel near the peach and swam in the ocean.', isCorrect: false }] },
    { id: 'ex_u04_l53_p7', lessonId: 'lesson_a1_4_53', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'She took beautiful photographs of the historic castle.', targetSentence: 'She took beautiful photographs of the historic castle.' },
    { id: 'ex_u04_l53_p8', lessonId: 'lesson_a1_4_53', stage: 10, type: 'multiple_choice', prompt: 'Choose the correct question to ask about someone\'s vacation activities:', options: [{ id: 'o1', text: 'What did you do during your vacation?', isCorrect: true }, { id: 'o2', text: 'What did you did during your vacation?', isCorrect: false }, { id: 'o3', text: 'What were you do during your vacation?', isCorrect: false }] },
    { id: 'ex_u04_l53_p9', lessonId: 'lesson_a1_4_53', stage: 11, type: 'dialogue_completion', prompt: 'Complete the travel dialogue: "How was the local food in Greece?"', options: [{ id: 'o1', text: 'It was delicious! We ate fresh seafood every night.', isCorrect: true }, { id: 'o2', text: 'I work from home.', isCorrect: false }, { id: 'o3', text: 'My shoes are black.', isCorrect: false }] },
    { id: 'ex_u04_l53_p10', lessonId: 'lesson_a1_4_53', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'We went sightseeing and visited several famous museums.', audioText: 'We went sightseeing and visited several famous museums.' },
    { id: 'ex_u04_l53_p11', lessonId: 'lesson_a1_4_53', stage: 13, type: 'translation', prompt: 'Translate: "हम पिछली गर्मियों में इटली गए थे।" / "Fuimos a Italia el verano pasado."', targetSentence: 'We went to Italy last summer.' },
    { id: 'ex_u04_l53_p12', lessonId: 'lesson_a1_4_53', stage: 14, type: 'multiple_choice', prompt: 'What word refers to an object kept as a reminder of a trip?', options: [{ id: 'o1', text: 'souvenir', isCorrect: true }, { id: 'o2', text: 'receipt', isCorrect: false }, { id: 'o3', text: 'scale', isCorrect: false }] },
    { id: 'ex_u04_l53_p14', lessonId: 'lesson_a1_4_53', stage: 14, type: 'word_ordering', prompt: 'Order the words to ask about accommodation:', wordBank: ['Where', 'did', 'you', 'stay', 'in', 'Rome?'], targetSentence: 'Where did you stay in Rome?' },
    { id: 'ex_u04_l53_p13', lessonId: 'lesson_a1_4_53', stage: 14, type: 'fill_blank', prompt: 'Complete with the time marker: "I returned from my trip three days ___."', sentenceTemplate: 'I returned from my trip three days ___.', sourceSentence: 'I returned from my trip three days ___.', options: [{ id: 'o1', text: 'ago', isCorrect: true }, { id: 'o2', text: 'before', isCorrect: false }, { id: 'o3', text: 'last', isCorrect: false }] },
    { id: 'ex_u04_l53_p15', lessonId: 'lesson_a1_4_53', stage: 14, type: 'speaking', prompt: 'Speak this complete sentence clearly into your microphone:', targetSentence: 'Our road trip along the coast was an unforgettable experience.', audioText: 'Our road trip along the coast was an unforgettable experience.' }
  ],
  review: [
    { id: 'ex_u04_l53_r1', lessonId: 'lesson_a1_4_53', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Choose the correct preposition of place:', options: [{ id: 'o1', text: 'The hotel is across from the public park.', isCorrect: true }, { id: 'o2', text: 'The hotel is across to the park.', isCorrect: false }, { id: 'o3', text: 'The hotel is across of park.', isCorrect: false }] },
    { id: 'ex_u04_l53_r2', lessonId: 'lesson_a1_4_53', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete: "Airmail is ___ than surface mail."', sentenceTemplate: 'Airmail is ___ than surface mail.', sourceSentence: 'Airmail is ___ than surface mail.', options: [{ id: 'o1', text: 'faster', isCorrect: true }, { id: 'o2', text: 'more fast', isCorrect: false }, { id: 'o3', text: 'fastest', isCorrect: false }] },
    { id: 'ex_u04_l53_r3', lessonId: 'lesson_a1_4_53', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['There', 'is', 'a', 'supermarket', 'next', 'to', 'the', 'bank.'], targetSentence: 'There is a supermarket next to the bank.' },
    { id: 'ex_u04_l53_r4', lessonId: 'lesson_a1_4_53', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match travel terms:', pairs: [{ left: 'take', right: 'photographs' }, { left: 'stay', right: 'at a hotel' }, { left: 'buy', right: 'souvenirs' }, { left: 'go', right: 'sightseeing' }] },
    { id: 'ex_u04_l53_r5', lessonId: 'lesson_a1_4_53', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "क्या आपने रसीद रखी?"', targetSentence: 'Did you keep the receipt?' }
  ],
  assessment: [
    { id: 'ex_u04_l53_a1', lessonId: 'lesson_a1_4_53', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the grammatically correct past experience sentence:', options: [{ id: 'o1', text: 'We visited three art museums in Paris last summer.', isCorrect: true }, { id: 'o2', text: 'We visit three art museums in Paris in last summer.', isCorrect: false }, { id: 'o3', text: 'We was visit art museums last summer.', isCorrect: false }] },
    { id: 'ex_u04_l53_a2', lessonId: 'lesson_a1_4_53', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete the sentence: "I ___ a handcrafted souvenir for my friend three days ago."', sentenceTemplate: 'I ___ a handcrafted souvenir for my friend three days ago.', sourceSentence: 'I ___ a handcrafted souvenir for my friend three days ago.', options: [{ id: 'o1', text: 'bought', isCorrect: true }, { id: 'o2', text: 'buyed', isCorrect: false }, { id: 'o3', text: 'buy', isCorrect: false }] },
    { id: 'ex_u04_l53_a3', lessonId: 'lesson_a1_4_53', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words correctly:', wordBank: ['Did', 'you', 'have', 'a', 'good', 'flight', 'yesterday?'], targetSentence: 'Did you have a good flight yesterday?' },
    { id: 'ex_u04_l53_a4', lessonId: 'lesson_a1_4_53', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Select the appropriate response: "How was your mountain trip last weekend?"', options: [{ id: 'o1', text: 'It was fantastic! We hiked to the top and enjoyed the view.', isCorrect: true }, { id: 'o2', text: 'I am drinking water now.', isCorrect: false }, { id: 'o3', text: 'The supermarket opens at nine.', isCorrect: false }] },
    { id: 'ex_u04_l53_a5', lessonId: 'lesson_a1_4_53', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this complete sentence clearly:', targetSentence: 'We stayed at a cozy hotel and tried delicious regional cuisine.', audioText: 'We stayed at a cozy hotel and tried delicious regional cuisine.' }
  ]
};

// =========================================================================
// LESSON 54: Expressing Opinions, Giving Reasons & Connecting Ideas
// =========================================================================
export const CONFIG_54: LessonConfig = {
  num: 54,
  title: 'Expressing Opinions, Giving Reasons & Connecting Ideas',
  icon: '💭',
  estMin: 25,
  objTitle: 'Share thoughts, justify choices, and connect clauses using conjunctions',
  objDesc: 'Master conjunctions of reason and contrast (because, so, but, although) to build multi-clause sentences.',
  objHi: 'राय व्यक्त करना, कारण बताना और संयोजकों का उपयोग करके विचारों को जोड़ना सीखें।',
  objEs: 'Aprende a expresar opiniones, dar razones y conectar ideas usando conjunciones.',
  canDo: [
    'I can express my opinion using "I think that..." and "In my opinion...".',
    'I can give clear reasons for my preferences using "because" and "so".',
    'I can contrast two different ideas using "but" and "although".'
  ],
  canDoHi: [
    'मैं "I think that..." और "In my opinion..." का उपयोग करके अपनी राय व्यक्त कर सकता हूँ।',
    'मैं "because" और "so" का उपयोग करके अपनी प्राथमिकताओं के स्पष्ट कारण दे सकता हूँ।',
    'मैं "but" और "although" का उपयोग करके दो अलग-अलग विचारों की तुलना कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo expresar mi opinión usando "I think that..." y "In my opinion...".',
    'Puedo dar razones claras para mis preferencias usando "because" y "so".',
    'Puedo contrastar dos ideas diferentes usando "but" y "although".'
  ],
  vocab: [
    { w: 'opinion', p: '/əˈpɪn.jən/', m: 'a view or judgment formed about something, not necessarily based on fact', hi: 'राय / मत', es: 'opinión', fr: 'opinion', de: 'Meinung', pt: 'opinião', zh: '意见 / 看法', ar: 'رأي', ja: '意見', ru: 'мнение', ex: 'In my opinion, learning English is very rewarding.', exHi: 'मेरी राय में, अंग्रेजी सीखना बहुत फायदेमंद है।', exEs: 'En mi opinión, aprender inglés es muy gratificante.', ic: '💭' },
    { w: 'because', p: '/bɪˈkɒz/', m: 'for the reason that; since', hi: 'क्योंकि', es: 'porque', fr: 'parce que', de: 'weil', pt: 'porque', zh: '因为', ar: 'لأن', ja: 'なぜなら', ru: 'потому что', ex: 'I like this cafe because it is very quiet.', exHi: 'मुझे यह कैफ़े पसंद है क्योंकि यह बहुत शांत है।', exEs: 'Me gusta esta cafetería porque es muy tranquila.', ic: '🔗' },
    { w: 'so', p: '/səʊ/', m: 'and for this reason; therefore', hi: 'इसलिए', es: 'así que / por lo tanto', fr: 'donc / alors', de: 'deshalb / also', pt: 'então / por isso', zh: '所以', ar: 'لذلك', ja: 'だから', ru: 'поэтому', ex: 'It was raining, so we stayed inside the library.', exHi: 'बारिश हो रही थी, इसलिए हम पुस्तकालय के अंदर ही रहे।', exEs: 'Estaba lloviendo, así que nos quedamos dentro de la biblioteca.', ic: '👉' },
    { w: 'although', p: '/ɔːlˈðəʊ/', m: 'in spite of the fact that; even though', hi: 'हालाँकि / यद्यपि', es: 'aunque', fr: 'bien que', de: 'obwohl', pt: 'embora', zh: '尽管 / 虽然', ar: 'على الرغم من', ja: '〜だけれども', ru: 'хотя', ex: 'Although it was cold, we enjoyed our long walk.', exHi: 'हालाँकि ठंड थी, हमने अपनी लंबी सैर का आनंद लिया।', exEs: 'Aunque hacía frío, disfrutamos de nuestra larga caminata.', ic: '⚖️' },
    { w: 'prefer', p: '/prɪˈfɜːr/', m: 'to like one thing or person better than another', hi: 'पसंद करना (प्राथमिकता देना)', es: 'preferir', fr: 'préférer', de: 'bevorzugen', pt: 'preferir', zh: '更喜欢', ar: 'يفضل', ja: '好む', ru: 'предпочитать', ex: 'I prefer tea to coffee in the evening.', exHi: 'मैं शाम को कॉफी की तुलना में चाय पसंद करता हूँ।', exEs: 'Prefiero el té al café por la noche.', ic: '🍵' },
    { w: 'agree', p: '/əˈɡriː/', m: 'to have the same opinion as someone else', hi: 'सहमत होना', es: 'estar de acuerdo', fr: 'être d\'accord', de: 'zustimmen', pt: 'concordar', zh: '同意', ar: 'يوافق', ja: '賛成する', ru: 'соглашаться', ex: 'I completely agree with your proposal.', exHi: 'मैं आपके प्रस्ताव से पूरी तरह सहमत हूँ।', exEs: 'Estoy completamente de acuerdo con tu propuesta.', ic: '🤝' },
    { w: 'disagree', p: '/ˌdɪs.əˈɡriː/', m: 'to have a different opinion from someone else', hi: 'असहमत होना', es: 'estar en desacuerdo', fr: 'être en désaccord', de: 'nicht zustimmen', pt: 'discordar', zh: '不同意', ar: 'يعارض', ja: '反対する', ru: 'не соглашаться', ex: 'I politely disagree with that conclusion.', exHi: 'मैं विनम्रतापूर्वक उस निष्कर्ष से असहमत हूँ।', exEs: 'Respetuosamente no estoy de acuerdo con esa conclusión.', ic: '🙅' },
    { w: 'reason', p: '/ˈriː.zən/', m: 'a cause, explanation, or justification for an action or event', hi: 'कारण', es: 'razón / motivo', fr: 'raison', de: 'Grund', pt: 'razão / motivo', zh: '原因', ar: 'سبب', ja: '理由', ru: 'причина', ex: 'What is the main reason for your choice?', exHi: 'आपकी पसंद का मुख्य कारण क्या है?', exEs: '¿Cuál es la razón principal de tu elección?', ic: '💡' },
    { w: 'believe', p: '/bɪˈliːv/', m: 'to accept that something is true or feel sure of the truth of', hi: 'मानना / विश्वास करना', es: 'creer', fr: 'croire', de: 'glauben', pt: 'acreditar', zh: '相信 / 认为', ar: 'يعتقد', ja: '信じる', ru: 'верить / полагать', ex: 'I believe that practice makes progress.', exHi: 'मेरा मानना है कि अभ्यास से प्रगति होती है।', exEs: 'Creo que la práctica hace el progreso.', ic: '🧠' },
    { w: 'important', p: '/ɪmˈpɔː.tənt/', m: 'of great significance or value', hi: 'महत्वपूर्ण', es: 'importante', fr: 'important', de: 'wichtig', pt: 'importante', zh: '重要的', ar: 'مهم', ja: '重要な', ru: 'важный', ex: 'Punctuality is very important at work.', exHi: 'कार्यस्थल पर समय की पाबंदी बहुत महत्वपूर्ण है।', exEs: 'La puntualidad es muy importante en el trabajo.', ic: '⭐' },
    { w: 'interesting', p: '/ˈɪn.trəs.tɪŋ/', m: 'arousing curiosity or interest; holding attention', hi: 'रोचक / दिलचस्प', es: 'interesante', fr: 'intéressant', de: 'interessant', pt: 'interessante', zh: '有趣的', ar: 'مثير للاهتمام', ja: '面白い', ru: 'интересный', ex: 'That documentary was truly interesting.', exHi: 'वह वृत्तचित्र सचमुच दिलचस्प था।', exEs: 'Ese documental fue verdaderamente interesante.', ic: '🧐' },
    { w: 'useful', p: '/ˈjuːs.fəl/', m: 'able to be used for a practical purpose or in several ways', hi: 'उपयोगी', es: 'útil', fr: 'utile', de: 'nützlich', pt: 'útil', zh: '有用的', ar: 'مفيد', ja: '役に立つ', ru: 'полезный', ex: 'This online map app is extremely useful.', exHi: 'यह ऑनलाइन मैप ऐप बेहद उपयोगी है।', exEs: 'Esta aplicación de mapas es extremadamente útil.', ic: '🛠️' },
    { w: 'difficult', p: '/ˈdɪf.ɪ.kəlt/', m: 'needing much effort or skill to accomplish, make, or understand', hi: 'कठिन / मुश्किल', es: 'difícil', fr: 'difficile', de: 'schwierig', pt: 'difícil', zh: '困难的', ar: 'صعب', ja: '難しい', ru: 'трудный', ex: 'Grammar can be difficult, but practice helps.', exHi: 'व्याकरण कठिन हो सकता है, लेकिन अभ्यास मदद करता है।', exEs: 'La gramática puede ser difícil, pero la práctica ayuda.', ic: '🧗' },
    { w: 'easy', p: '/ˈiː.zi/', m: 'achieved without great effort; presenting few difficulties', hi: 'आसान / सरल', es: 'fácil', fr: 'facile', de: 'einfach', pt: 'fácil', zh: '容易的', ar: 'سهل', ja: '簡単な', ru: 'легкий / простой', ex: 'The first chapter was very easy to understand.', exHi: 'पहला अध्याय समझना बहुत आसान था।', exEs: 'El primer capítulo fue muy fácil de entender.', ic: '🎈' },
    { w: 'choice', p: '/tʃɔɪs/', m: 'an act of selecting or making a decision when faced with two or more possibilities', hi: 'पसंद / विकल्प', es: 'elección / opción', fr: 'choix', de: 'Wahl', pt: 'escolha', zh: '选择', ar: 'اختيار', ja: '選択', ru: 'выбор', ex: 'You made an excellent choice.', exHi: 'आपने एक उत्कृष्ट विकल्प चुना।', exEs: 'Hiciste una excelente elección.', ic: '🎯' },
    { w: 'difference', p: '/ˈdɪf.ər.əns/', m: 'a point or way in which people or things are not the same', hi: 'अंतर / फर्क', es: 'diferencia', fr: 'différence', de: 'Unterschied', pt: 'diferença', zh: '区别', ar: 'اختلاف', ja: '違い', ru: 'разница', ex: 'What is the main difference between these two plans?', exHi: 'इन दो योजनाओं के बीच मुख्य अंतर क्या है?', exEs: '¿Cuál es la diferencia principal entre estos dos planes?', ic: '⚖️' },
    { w: 'example', p: '/ɪɡˈzɑːm.pəl/', m: 'a thing characteristic of its kind or illustrating a general rule', hi: 'उदाहरण', es: 'ejemplo', fr: 'exemple', de: 'Beispiel', pt: 'exemplo', zh: '例子', ar: 'مثال', ja: '例', ru: 'пример', ex: 'Can you provide a clear example?', exHi: 'क्या आप एक स्पष्ट उदाहरण दे सकते हैं?', exEs: '¿Puedes dar un ejemplo claro?', ic: '💡' },
    { w: 'viewpoint', p: '/ˈvjuː.pɔɪnt/', m: 'another term for point of view', hi: 'दृष्टिकोण', es: 'punto de vista', fr: 'point de vue', de: 'Standpunkt', pt: 'ponto de vista', zh: '观点', ar: 'وجهة نظر', ja: '見解', ru: 'точка зрения', ex: 'I understand your viewpoint on this matter.', exHi: 'मैं इस मामले पर आपके दृष्टिकोण को समझता हूँ।', exEs: 'Entiendo tu punto de vista sobre este asunto.', ic: '👓' },
    { w: 'especially', p: '/ɪˈspeʃ.əl.i/', m: 'used to single out one person, thing, or situation over all others', hi: 'विशेष रूप से', es: 'especialmente', fr: 'particulièrement', de: 'besonders', pt: 'especialmente', zh: '尤其是', ar: 'خاصة', ja: '特に', ru: 'особенно', ex: 'I love fresh fruit, especially strawberries.', exHi: 'मुझे ताज़ा फल बहुत पसंद हैं, विशेष रूप से स्ट्रॉबेरी।', exEs: 'Me encanta la fruta fresca, especialmente las fresas.', ic: '🍓' },
    { w: 'actually', p: '/ˈæk.tʃu.ə.li/', m: 'as the truth or facts of a situation; really', hi: 'वास्तव में / दरअसल', es: 'en realidad / de hecho', fr: 'en fait', de: 'eigentlich', pt: 'na verdade', zh: '实际上', ar: 'في الحقيقة', ja: '実は', ru: 'на самом деле', ex: 'Actually, I prefer working in the morning.', exHi: 'दरअसल, मैं सुबह काम करना पसंद करता हूँ।', exEs: 'De hecho, prefiero trabajar por la mañana.', ic: '📌' }
  ],
  chunks: [
    { phrase: 'In my opinion', meaning: 'Polite preface to state a personal viewpoint', hi: 'मेरी राय में', es: 'En mi opinión', fr: 'À mon avis', de: 'Meiner Meinung nach', pt: 'Na minha opinião', zh: '在我看来', ar: 'في رأيي', ja: '私の意見では', ru: 'По моему мнению', note: 'Standard discussion starter.', ic: '💭' },
    { phrase: 'I think that...', meaning: 'Expressing a belief or perspective', hi: 'मुझे लगता है कि...', es: 'Creo que...', fr: 'Je pense que...', de: 'Ich denke, dass...', pt: 'Eu acho que...', zh: '我认为...', ar: 'أعتقد أن...', ja: '〜だと思います', ru: 'Я думаю, что...', note: 'High frequency opinion frame.', ic: '🧠' },
    { phrase: 'I prefer A to B', meaning: 'Liking option A more than option B', hi: 'मैं B की तुलना में A को प्राथमिकता देता हूँ', es: 'Prefiero A a B', fr: 'Je préfère A à B', de: 'Ich ziehe A B vor', pt: 'Prefiro A a B', zh: '比起B我更喜欢A', ar: 'أفضل A على B', ja: 'BよりAが好きです', ru: 'Я предпочитаю А, а не Б', note: 'Uses preposition "to", not "than".', ic: '⚖️' },
    { phrase: 'I agree with you.', meaning: 'Confirming shared perspective', hi: 'मैं आपसे सहमत हूँ।', es: 'Estoy de acuerdo contigo.', fr: 'Je suis d\'accord avec toi.', de: 'Ich stimme dir zu.', pt: 'Concordo com você.', zh: '我同意你的观点。', ar: 'أنا أتفق معك.', ja: 'あなたに同意します。', ru: 'Я согласен с вами.', note: 'Polite agreement phrase.', ic: '🤝' },
    { phrase: 'I don\'t think so.', meaning: 'Polite disagreement or skepticism', hi: 'मुझे ऐसा नहीं लगता।', es: 'No me parece / No lo creo.', fr: 'Je ne pense pas.', de: 'Das glaube ich nicht.', pt: 'Acho que não.', zh: '我不这么认为。', ar: 'لا أعتقد ذلك.', ja: 'そうは思いません。', ru: 'Я так не думаю.', note: 'Soft disagreement formula.', ic: '🤔' },
    { phrase: 'For example', meaning: 'Introducing an illustration or evidence', hi: 'उदाहरण के लिए', es: 'Por ejemplo', fr: 'Par exemple', de: 'Zum Beispiel', pt: 'Por exemplo', zh: '例如', ar: 'على سبيل المثال', ja: '例えば', ru: 'Например', note: 'Essential conversational connector.', ic: '💡' },
    { phrase: 'That sounds like a good idea.', meaning: 'Validating a proposed suggestion', hi: 'यह एक अच्छा विचार लगता है।', es: 'Eso suena como una buena idea.', fr: 'Ça a l\'air d\'être une bonne idée.', de: 'Das klingt nach einer guten Idee.', pt: 'Parece uma boa ideia.', zh: '听起来是个好主意。', ar: 'يبدو ذلك فكرة جيدة.', ja: 'いい考えですね。', ru: 'Звучит как хорошая идея.', note: 'Supportive response in discussions.', ic: '👍' },
    { phrase: 'The main reason is that...', meaning: 'Highlighting the primary justification', hi: 'मुख्य कारण यह है कि...', es: 'La razón principal es que...', fr: 'La raison principale est que...', de: 'Der Hauptgrund ist, dass...', pt: 'O motivo principal é que...', zh: '主要原因是...', ar: 'السبب الرئيسي هو أن...', ja: '主な理由は...', ru: 'Главная причина в том, что...', note: 'Structuring reasoned explanations.', ic: '🎯' }
  ],
  grammar: {
    title: 'Conjunctions of Cause & Contrast (Because, So, But, Although)',
    concept: 'Combining independent and dependent clauses to express cause, result, and contrast in conversational English.',
    patterns: [
      {
        title: 'Cause and Result (Because vs. So)',
        structure: 'Action + because + Reason / Cause, + so + Result',
        rule: '"Because" introduces the reason. "So" introduces the result of the first clause.',
        examples: [
          { en: 'I stayed home because I was tired.', hi: 'मैं घर पर रहा क्योंकि मैं थका हुआ था।', es: 'Me quedé en casa porque estaba cansado.' },
          { en: 'I was tired, so I stayed home.', hi: 'मैं थका हुआ था, इसलिए मैं घर पर रहा।', es: 'Estaba cansado, así que me quedé en casa.' }
        ]
      },
      {
        title: 'Contrast (But vs. Although)',
        structure: 'Clause 1, but Clause 2 / Although Clause 1, Clause 2',
        rule: '"But" connects two contrasting independent clauses with a comma. "Although" introduces a concession.',
        examples: [
          { en: 'The apartment is small, but it is very modern.', hi: 'अपार्टमेंट छोटा है, लेकिन यह बहुत आधुनिक है।', es: 'El apartamento es pequeño, pero es muy moderno.' },
          { en: 'Although it rained, we had a wonderful picnic.', hi: 'हालाँकि बारिश हुई, फिर भी हमने एक शानदार पिकनिक मनाई।', es: 'Aunque llovió, tuvimos un picnic maravilloso.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'I prefer coffee than tea.', cor: 'I prefer coffee to tea.', exp: 'The verb "prefer" takes the preposition "to", not "than".', hi: '"Prefer" के साथ "to" का उपयोग करें, "than" नहीं।', es: 'El verbo "prefer" usa "to", no "than".' },
    { inc: 'Because it was raining, so we stayed home.', cor: 'Because it was raining, we stayed home. (OR: It was raining, so we stayed home.)', exp: 'Do not use both "because" and "so" in the same sentence.', hi: 'एक ही वाक्य में "because" और "so" दोनों का उपयोग न करें।', es: 'No uses "because" y "so" juntos en la misma oración.' },
    { inc: 'I am agree with your opinion.', cor: 'I agree with your opinion.', exp: '"Agree" is a verb, not an adjective. Do not say "am agree".', hi: '"Agree" एक क्रिया है; "I agree" कहें।', es: '"Agree" es un verbo; di "I agree", no "I am agree".' },
    { inc: 'Although it was cold, but we went out.', cor: 'Although it was cold, we went out.', exp: 'Do not use "although" and "but" in the same sentence.', hi: '"Although" और "but" को एक साथ इस्तेमाल न करें।', es: 'No uses "although" y "but" juntos en la misma oración.' },
    { inc: 'In my opinion, I think that the hotel is good.', cor: 'In my opinion, the hotel is good. (OR: I think that the hotel is good.)', exp: 'Avoid redundant stacking of "In my opinion" and "I think that".', hi: 'राय व्यक्त करने वाले दोनों वाक्यांशों को एक साथ न दोहराएं।', es: 'Evita la redundancia de "In my opinion" y "I think that" juntos.' }
  ],
  dialogues: [
    {
      title: 'Discussing Movie Preferences and Opinions',
      context: 'Zoe and Leo compare two films they watched over the weekend.',
      charA: { name: 'Zoe', av: '👩‍🎨', role: 'Film Enthusiast' },
      charB: { name: 'Leo', av: '👨‍💼', role: 'Coworker' },
      turns: [
        { spk: 'Zoe', text: 'Did you watch the new sci-fi movie yesterday, Leo?', hi: 'क्या आपने कल नई साइंस-फ़ाई फ़िल्म देखी, लियो?', es: '¿Viste la nueva película de ciencia ficción ayer, Leo?' },
        { spk: 'Leo', text: 'Yes, I did! In my opinion, the special effects were amazing, but the story was slow.', hi: 'हाँ, मैंने देखी! मेरी राय में, स्पेशल इफेक्ट्स अद्भुत थे, लेकिन कहानी धीमी थी।', es: '¡Sí, la vi! En mi opinión, los efectos especiales fueron increíbles, pero la historia fue lenta.' },
        { spk: 'Zoe', text: 'I agree with you. I prefer comedies to action movies because they are relaxing.', hi: 'मैं आपसे सहमत हूँ। मैं एक्शन फिल्मों की तुलना में कॉमेडी पसंद करती हूँ क्योंकि वे आरामदायक होती हैं।', es: 'Estoy de acuerdo contigo. Prefiero las comedias a las películas de acción porque son relajantes.' },
        { spk: 'Leo', text: 'That sounds true. Let\'s pick a comedy next Friday!', hi: 'यह सच लगता है। आइए अगले शुक्रवार को एक कॉमेडी चुनें!', es: 'Eso suena cierto. ¡Elijamos una comedia el próximo viernes!' }
      ]
    },
    {
      title: 'Choosing a Neighborhood Restaurant',
      context: 'Marcus and Clara decide where to eat dinner.',
      charA: { name: 'Marcus', av: '👨‍💻', role: 'Friend' },
      charB: { name: 'Clara', av: '👩‍💼', role: 'Friend' },
      turns: [
        { spk: 'Marcus', text: 'Should we eat at the Italian bistro or the new noodle bar?', hi: 'क्या हमें इटैलियन बिस्टरो में खाना चाहिए या नए नूडल बार में?', es: '¿Deberíamos comer en el bistró italiano o en el nuevo bar de fideos?' },
        { spk: 'Clara', text: 'I prefer the Italian bistro because their pasta is delicious.', hi: 'मैं इटैलियन बिस्टरो को प्राथमिकता देती हूँ क्योंकि उनका पास्ता स्वादिष्ट है।', es: 'Prefiero el bistró italiano porque su pasta es deliciosa.' },
        { spk: 'Marcus', text: 'Although it is a bit more expensive, the service is always fantastic.', hi: 'हालाँकि यह थोड़ा अधिक महंगा है, सेवा हमेशा शानदार होती है।', es: 'Aunque es un poco más caro, el servicio siempre es fantástico.' },
        { spk: 'Clara', text: 'Exactly, so let\'s book a table for seven o\'clock!', hi: 'बिल्कुल, तो चलिए सात बजे के लिए एक टेबल बुक करते हैं!', es: 'Exacto, ¡así que reservemos una mesa para las siete en punto!' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u04_l54_p1', lessonId: 'lesson_a1_4_54', stage: 8, type: 'multiple_choice', prompt: 'Choose the correct conjunction of reason: "I like this cafe ___ it is quiet and bright."', options: [{ id: 'o1', text: 'because', isCorrect: true }, { id: 'o2', text: 'so', isCorrect: false }, { id: 'o3', text: 'but', isCorrect: false }] },
    { id: 'ex_u04_l54_p2', lessonId: 'lesson_a1_4_54', stage: 8, type: 'fill_blank', prompt: 'Complete with the correct preposition: "I prefer tea ___ coffee in the morning."', sentenceTemplate: 'I prefer tea ___ coffee in the morning.', sourceSentence: 'I prefer tea ___ coffee in the morning.', options: [{ id: 'o1', text: 'to', isCorrect: true }, { id: 'o2', text: 'than', isCorrect: false }, { id: 'o3', text: 'over to', isCorrect: false }] },
    { id: 'ex_u04_l54_p3', lessonId: 'lesson_a1_4_54', stage: 8, type: 'word_ordering', prompt: 'Order the words to state an opinion:', wordBank: ['In', 'my', 'opinion,', 'learning', 'languages', 'is', 'rewarding.'], targetSentence: 'In my opinion, learning languages is rewarding.' },
    { id: 'ex_u04_l54_p4', lessonId: 'lesson_a1_4_54', stage: 8, type: 'match_pairs', prompt: 'Match conjunctions with their functions:', pairs: [{ left: 'because', right: 'introduces a reason' }, { left: 'so', right: 'introduces a result' }, { left: 'but', right: 'introduces a contrast' }, { left: 'although', right: 'introduces a concession' }] },
    { id: 'ex_u04_l54_p5', lessonId: 'lesson_a1_4_54', stage: 8, type: 'error_correction', prompt: 'Identify the corrected sentence:', sentenceTemplate: 'I am agree with your viewpoint on this project.', options: [{ id: 'o1', text: 'I agree with your viewpoint on this project.', isCorrect: true }, { id: 'o2', text: 'I am agreeing to your viewpoint on this project.', isCorrect: false }, { id: 'o3', text: 'I agrees with your viewpoint on this project.', isCorrect: false }] },
    { id: 'ex_u04_l54_p6', lessonId: 'lesson_a1_4_54', stage: 9, type: 'listening', prompt: 'Listen and select what the speaker says:', audioText: 'Although the tickets were expensive, the concert was wonderful.', options: [{ id: 'o1', text: 'Although the tickets were expensive, the concert was wonderful.', isCorrect: true }, { id: 'o2', text: 'All those tickets were expensive, the context was wonderful.', isCorrect: false }] },
    { id: 'ex_u04_l54_p7', lessonId: 'lesson_a1_4_54', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'I agree with your opinion completely.', targetSentence: 'I agree with your opinion completely.' },
    { id: 'ex_u04_l54_p8', lessonId: 'lesson_a1_4_54', stage: 10, type: 'multiple_choice', prompt: 'Choose the correct question to ask for someone\'s opinion:', options: [{ id: 'o1', text: 'What is your opinion about this proposal?', isCorrect: true }, { id: 'o2', text: 'What your opinion is about this proposal?', isCorrect: false }, { id: 'o3', text: 'How is you thinking about this proposal?', isCorrect: false }] },
    { id: 'ex_u04_l54_p9', lessonId: 'lesson_a1_4_54', stage: 11, type: 'dialogue_completion', prompt: 'Complete the dialogue appropriately: "Do you think we should take the train or the bus?"', options: [{ id: 'o1', text: 'I think the train is better because it is faster.', isCorrect: true }, { id: 'o2', text: 'I am drinking coffee.', isCorrect: false }, { id: 'o3', text: 'The grass is green.', isCorrect: false }] },
    { id: 'ex_u04_l54_p10', lessonId: 'lesson_a1_4_54', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'It was raining heavily, so we decided to stay inside.', audioText: 'It was raining heavily, so we decided to stay inside.' },
    { id: 'ex_u04_l54_p11', lessonId: 'lesson_a1_4_54', stage: 13, type: 'translation', prompt: 'Translate: "मेरी राय में, यह योजना बहुत व्यावहारिक है।" / "En mi opinión, este plan es muy práctico."', targetSentence: 'In my opinion, this plan is very practical.' },
    { id: 'ex_u04_l54_p12', lessonId: 'lesson_a1_4_54', stage: 14, type: 'multiple_choice', prompt: 'Which word connects a cause to its resulting action?', options: [{ id: 'o1', text: 'so', isCorrect: true }, { id: 'o2', text: 'because', isCorrect: false }, { id: 'o3', text: 'although', isCorrect: false }] },
    { id: 'ex_u04_l54_p13', lessonId: 'lesson_a1_4_54', stage: 14, type: 'fill_blank', prompt: 'Complete with the conjunction of concession: "___ it was late, we finished the report."', sentenceTemplate: '___ it was late, we finished the report.', sourceSentence: '___ it was late, we finished the report.', options: [{ id: 'o1', text: 'Although', isCorrect: true }, { id: 'o2', text: 'Because of', isCorrect: false }, { id: 'o3', text: 'So', isCorrect: false }] },
    { id: 'ex_u04_l54_p14', lessonId: 'lesson_a1_4_54', stage: 14, type: 'word_ordering', prompt: 'Order the words to express a reasoned preference:', wordBank: ['I', 'prefer', 'walking', 'because', 'it', 'is', 'healthy.'], targetSentence: 'I prefer walking because it is healthy.' },
    { id: 'ex_u04_l54_p15', lessonId: 'lesson_a1_4_54', stage: 14, type: 'speaking', prompt: 'Speak this complete sentence clearly into your microphone:', targetSentence: 'I think that this restaurant is the best in the neighborhood.', audioText: 'I think that this restaurant is the best in the neighborhood.' }
  ],
  review: [
    { id: 'ex_u04_l54_r1', lessonId: 'lesson_a1_4_54', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Choose the correct past tense statement:', options: [{ id: 'o1', text: 'We went to the beach three days ago.', isCorrect: true }, { id: 'o2', text: 'We go to beach before three days.', isCorrect: false }, { id: 'o3', text: 'We was go to beach three days ago.', isCorrect: false }] },
    { id: 'ex_u04_l54_r2', lessonId: 'lesson_a1_4_54', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete: "The pharmacy is ___ from the library."', sentenceTemplate: 'The pharmacy is ___ from the library.', sourceSentence: 'The pharmacy is ___ from the library.', options: [{ id: 'o1', text: 'across', isCorrect: true }, { id: 'o2', text: 'between', isCorrect: false }, { id: 'o3', text: 'next', isCorrect: false }] },
    { id: 'ex_u04_l54_r3', lessonId: 'lesson_a1_4_54', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['Did', 'you', 'visit', 'the', 'museum', 'yesterday?'], targetSentence: 'Did you visit the museum yesterday?' },
    { id: 'ex_u04_l54_r4', lessonId: 'lesson_a1_4_54', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match opinion and location phrases:', pairs: [{ left: 'In my opinion', right: 'personal viewpoint' }, { left: 'on the corner of', right: 'street intersection' }, { left: 'I agree', right: 'shared opinion' }, { left: 'two days ago', right: 'past time anchor' }] },
    { id: 'ex_u04_l54_r5', lessonId: 'lesson_a1_4_54', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "मैं सहमत हूँ कि यह बहुत महत्वपूर्ण है।"', targetSentence: 'I agree that this is very important.' }
  ],
  assessment: [
    { id: 'ex_u04_l54_a1', lessonId: 'lesson_a1_4_54', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the grammatically correct sentence connecting ideas:', options: [{ id: 'o1', text: 'I like this neighborhood because there are many parks and cafes.', isCorrect: true }, { id: 'o2', text: 'Because I like this neighborhood so there are parks.', isCorrect: false }, { id: 'o3', text: 'I like this neighborhood although there are parks.', isCorrect: false }] },
    { id: 'ex_u04_l54_a2', lessonId: 'lesson_a1_4_54', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete the sentence: "I prefer working in the morning ___ working at night."', sentenceTemplate: 'I prefer working in the morning ___ working at night.', sourceSentence: 'I prefer working in the morning ___ working at night.', options: [{ id: 'o1', text: 'to', isCorrect: true }, { id: 'o2', text: 'than', isCorrect: false }, { id: 'o3', text: 'from', isCorrect: false }] },
    { id: 'ex_u04_l54_a3', lessonId: 'lesson_a1_4_54', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words correctly:', wordBank: ['Although', 'it', 'was', 'cold,', 'we', 'enjoyed', 'our', 'walk.'], targetSentence: 'Although it was cold, we enjoyed our walk.' },
    { id: 'ex_u04_l54_a4', lessonId: 'lesson_a1_4_54', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Select the appropriate response: "What do you think of this idea?"', options: [{ id: 'o1', text: 'I think it is very practical and helpful.', isCorrect: true }, { id: 'o2', text: 'I am wearing a coat.', isCorrect: false }, { id: 'o3', text: 'The bus left at eight.', isCorrect: false }] },
    { id: 'ex_u04_l54_a5', lessonId: 'lesson_a1_4_54', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this complete sentence clearly:', targetSentence: 'In my opinion, practice and consistency are the keys to fluency.', audioText: 'In my opinion, practice and consistency are the keys to fluency.' }
  ]
};

console.log('Configs for 52, 53, 54 ready.');
