import { DetailedLessonData } from '../../types';

export const LESSON_A1_2_27_DATA: DetailedLessonData = {
  id: 'lesson_a1_2_27',
  unitId: 'unit_a1_2',
  title: 'Health, Physical Sensations & Doctor Visits (Have / Feel)',
  cefr: 'A1',
  icon: '🩺',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Describing Illnesses, Aches, Pains, Physical Sensations and Visiting the Doctor',
    description: 'Learn how to describe physical symptoms and health issues using "have + noun" (have a headache, have a fever, have a sore throat, have a cough, have a stomachache), physical sensations using "feel + adjective" (feel dizzy, feel tired, feel sick, feel cold), asking "What\'s the matter? / How do you feel?", giving medical advice with "should / rest / take medicine", and practical dialogues at a medical clinic and pharmacy.',
    descriptionsByLang: {
      hi: 'स्वास्थ्य समस्याओं और लक्षणों का वर्णन करने के लिए "have + noun" (headache, fever, cold, stomachache) और "feel + adjective" (feel dizzy, feel tired) का उपयोग सीखें। "What\'s the matter?" पूछना और डॉक्टर या फार्मेसी में बातचीत का अभ्यास करें।',
      es: 'Aprende a describir síntomas y problemas de salud usando "have + sustantivo" (have a headache, have a fever) y "feel + adjetivo" (feel dizzy, feel sick). Practica cómo pedir ayuda médica, hacer citas y comprar medicamentos.',
      fr: 'Apprenez à décrire vos symptômes de santé avec "have" et "feel" et à consulter un médecin.',
      de: 'Lernen Sie Gesundheitsprobleme und körperliche Empfindungen mit "have" und "feel" zu beschreiben.',
      pt: 'Aprenda a descrever sintomas de saúde e ir ao médico usando "have" e "feel".',
      zh: '掌握使用 "have + 名词"（have a headache 头痛, have a fever 发烧）和 "feel + 形容词"（feel dizzy 头晕, feel tired 疲惫）描述身体不适与健康状况，学会在诊所和药店问诊求医。',
      ar: 'تعلم وصف الأعراض الصحية والأمراض باستخدام have و feel والمحادثة عند الطبيب والصيدلية.',
      ja: '体調不良や症状を「have + 名詞」（have a headache）や「feel + 形容詞」（feel dizzy）を用いて説明し、病院や薬局での会話を学びます。',
      ru: 'Научитесь описывать симптомы болезней с помощью "have + существительное" и "feel + прилагательное", а также общаться на приеме у врача.'
    },
    canDoStatements: [
      'Describe health problems using "have a...": "I have a terrible headache", "She has a high fever"',
      'Express physical feelings using "feel...": "I feel dizzy and exhausted today", "I feel much better now"',
      'State which part of the body hurts: "My back hurts", "My left arm hurts"',
      'Inquire about someone\'s condition: "What\'s the matter?", "How do you feel?"',
      'Make a doctor\'s appointment by phone and explain symptoms to a doctor',
      'Understand medication dosage instructions at a pharmacy: "Take two pills after meals"'
    ],
    canDoByLang: {
      hi: [
        'स्वास्थ्य समस्याओं का वर्णन: "I have a headache", "He has a fever"',
        'शारीरिक स्थिति बताना: "I feel sick", "My back hurts"',
        'तबीयत के बारे में पूछना: "What\'s the matter?", "How do you feel?"',
        'डॉक्टर से अपॉइंटमेंट लेना और दवा के निर्देश समझना'
      ],
      es: [
        'Describir problemas de salud: "I have a sore throat", "She has a fever"',
        'Expresar sensaciones: "I feel dizzy", "My foot hurts"',
        'Preguntar por la salud: "¿What\'s the matter?", "¿How do you feel?"',
        'Pedir cita médica y entender instrucciones en la farmacia'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (25 items)
  vocabulary: [
    {
      id: 'v_u02_l27_headache',
      word: 'have a headache',
      phonetic: '/hæv ə ˈhed.eɪk/',
      meaning: 'A continuous pain in the cranial region of the head',
      translationsByLang: { hi: 'सिरदर्द होना', es: 'tener dolor de cabeza', fr: 'avoir mal à la tête', de: 'Kopfschmerzen haben', pt: 'ter dor de cabeça', zh: '头痛', ar: 'يعاني من صداع', ja: '頭痛がする', ru: 'болит голова' },
      exampleSentence: 'I have a terrible headache from staring at the monitor all day.',
      exampleTranslationByLang: { hi: 'दिन भर मॉनिटर देखने से मुझे तेज सिरदर्द हो रहा है।', es: 'Tengo un dolor de cabeza terrible por mirar el monitor todo el día.' },
      audioText: 'have a headache',
      audioId: 'en_a1_u02_l27_v_headache',
      slowAudioId: 'en_a1_u02_l27_v_headache_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🤕',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_fever',
      word: 'have a fever / temperature',
      phonetic: '/hæv ə ˈfiː.vɚ/',
      meaning: 'An abnormally elevated human body temperature',
      translationsByLang: { hi: 'बुखार होना / तापमान बढ़ना', es: 'tener fiebre / tener temperatura', fr: 'avoir de la fièvre', de: 'Fieber haben', pt: 'ter febre', zh: '发烧 / 发热', ar: 'يعاني من حمى / ارتفاع الحرارة', ja: '熱がある', ru: 'иметь температуру / жар' },
      exampleSentence: 'The thermometer shows 39 degrees; he has a high fever.',
      exampleTranslationByLang: { hi: 'थर्मामीटर 39 डिग्री दिखा रहा है; उसे तेज बुखार है।', es: 'El termómetro marca 39 grados; tiene fiebre alta.' },
      audioText: 'have a fever',
      audioId: 'en_a1_u02_l27_v_fever',
      slowAudioId: 'en_a1_u02_l27_v_fever_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌡️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_sore_throat',
      word: 'have a sore throat',
      phonetic: '/hæv ə sɔːr θroʊt/',
      meaning: 'Inflammation and pain in the throat causing painful swallowing',
      translationsByLang: { hi: 'गले में खराश / दर्द होना', es: 'tener dolor de garganta', fr: 'avoir mal à la gorge', de: 'Halsschmerzen haben', pt: 'ter dor de garganta', zh: '喉咙痛 / 嗓子疼', ar: 'يعاني من التهاب الحلق', ja: '喉が痛い', ru: 'болит горло' },
      exampleSentence: 'I can barely swallow because I have a sore throat.',
      exampleTranslationByLang: { hi: 'मैं मुश्किल से निगल पा रहा हूँ क्योंकि मेरे गले में खराश है।', es: 'Apenas puedo tragar porque me duele la garganta.' },
      audioText: 'have a sore throat',
      audioId: 'en_a1_u02_l27_v_sorethroat',
      slowAudioId: 'en_a1_u02_l27_v_sorethroat_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🗣️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_cough',
      word: 'have a cough',
      phonetic: '/hæv ə kɑːf/',
      meaning: 'Expulsion of air from the lungs with a sharp sound due to irritation',
      translationsByLang: { hi: 'खांसी होना', es: 'tener tos', fr: 'tousser / avoir une toux', de: 'Husten haben', pt: 'ter tosse', zh: '咳嗽', ar: 'يعاني من سعال', ja: '咳が出る', ru: 'кашлять' },
      exampleSentence: 'Please cover your mouth if you have a persistent cough.',
      exampleTranslationByLang: { hi: 'यदि आपको लगातार खांसी है तो कृपया अपना मुंह ढकें।', es: 'Por favor, cúbrete la boca si tienes tos persistente.' },
      audioText: 'have a cough',
      audioId: 'en_a1_u02_l27_v_cough',
      slowAudioId: 'en_a1_u02_l27_v_cough_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '😷',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_cold',
      word: 'have a cold',
      phonetic: '/hæv ə koʊld/',
      meaning: 'A common viral infectious disease of the upper respiratory tract',
      translationsByLang: { hi: 'जुकाम होना', es: 'tener un resfriado', fr: 'avoir un rhume', de: 'eine Erkältung haben', pt: 'estar resfriado', zh: '感冒', ar: 'يعاني من زكام', ja: '風邪をひいている', ru: 'простудиться' },
      exampleSentence: 'I need some tissues because I have a bad cold today.',
      exampleTranslationByLang: { hi: 'मुझे कुछ टिश्यू चाहिए क्योंकि आज मुझे तेज जुकाम है।', es: 'Necesito pañuelos porque hoy tengo un fuerte resfriado.' },
      audioText: 'have a cold',
      audioId: 'en_a1_u02_l27_v_cold',
      slowAudioId: 'en_a1_u02_l27_v_cold_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🤧',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_flu',
      word: 'have the flu',
      phonetic: '/hæv ðə fluː/',
      meaning: 'Influenza, a contagious viral infection causing fever, body aches, and fatigue',
      translationsByLang: { hi: 'फ्लू होना', es: 'tener gripe', fr: 'avoir la grippe', de: 'die Grippe haben', pt: 'estar com gripe', zh: '得流感', ar: 'يعاني من الإنفلونزا', ja: 'インフルエンザにかかっている', ru: 'болеть гриппом' },
      exampleSentence: 'She cannot come to work this week because she has the flu.',
      exampleTranslationByLang: { hi: 'वह इस सप्ताह काम पर नहीं आ सकती क्योंकि उसे फ्लू है।', es: 'Ella no puede venir a trabajar esta semana porque tiene gripe.' },
      audioText: 'have the flu',
      audioId: 'en_a1_u02_l27_v_flu',
      slowAudioId: 'en_a1_u02_l27_v_flu_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🛌',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_stomachache',
      word: 'have a stomachache',
      phonetic: '/hæv ə ˈstʌm.ək.eɪk/',
      meaning: 'Pain in the abdominal or gastrointestinal stomach area',
      translationsByLang: { hi: 'पेट दर्द होना', es: 'tener dolor de estómago', fr: 'avoir mal au ventre', de: 'Magenschmerzen haben', pt: 'ter dor de estômago', zh: '胃痛 / 肚子疼', ar: 'يعاني من ألم في المعدة', ja: 'お腹が痛い / 胃痛がする', ru: 'болит живот' },
      exampleSentence: 'He ate expired food, and now he has a sharp stomachache.',
      exampleTranslationByLang: { hi: 'उसने बासी खाना खा लिया, और अब उसके पेट में तेज दर्द हो रहा है।', es: 'Comió comida caducada y ahora tiene un fuerte dolor de estómago.' },
      audioText: 'have a stomachache',
      audioId: 'en_a1_u02_l27_v_stomachache',
      slowAudioId: 'en_a1_u02_l27_v_stomachache_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🤢',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_toothache',
      word: 'have a toothache',
      phonetic: '/hæv ə ˈtuːθ.eɪk/',
      meaning: 'Pain in or around a tooth or dental tissue',
      translationsByLang: { hi: 'दांत दर्द होना', es: 'tener dolor de muelas / dientes', fr: 'avoir mal aux dents', de: 'Zahnschmerzen haben', pt: 'ter dor de dente', zh: '牙痛 / 牙疼', ar: 'يعاني من ألم الأسنان', ja: '歯が痛い', ru: 'болит зуб' },
      exampleSentence: 'I need to see a dentist immediately because I have a toothache.',
      exampleTranslationByLang: { hi: 'मुझे तुरंत दंत चिकित्सक को दिखाना होगा क्योंकि मेरे दांत में दर्द है।', es: 'Necesito ver al dentista de inmediato porque me duele una muela.' },
      audioText: 'have a toothache',
      audioId: 'en_a1_u02_l27_v_toothache',
      slowAudioId: 'en_a1_u02_l27_v_toothache_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🦷',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_backache',
      word: 'have a backache',
      phonetic: '/hæv ə ˈbæk.eɪk/',
      meaning: 'Prolonged or acute pain in the back region of the body',
      translationsByLang: { hi: 'पीठ दर्द होना', es: 'tener dolor de espalda', fr: 'avoir mal au dos', de: 'Rückenschmerzen haben', pt: 'ter dor nas costas', zh: '背痛 / 腰痛', ar: 'يعاني من ألم الظهر', ja: '腰痛がある / 背中が痛い', ru: 'болит спина' },
      exampleSentence: 'Lifting that heavy sofa gave me a bad backache.',
      exampleTranslationByLang: { hi: 'उस भारी सोफे को उठाने से मेरी पीठ में तेज दर्द हो गया।', es: 'Levantar ese sofá pesado me provocó un fuerte dolor de espalda.' },
      audioText: 'have a backache',
      audioId: 'en_a1_u02_l27_v_backache',
      slowAudioId: 'en_a1_u02_l27_v_backache_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧍',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_earache',
      word: 'have an earache',
      phonetic: '/hæv ən ˈɪr.eɪk/',
      meaning: 'Pain inside the auditory ear canal',
      translationsByLang: { hi: 'कान दर्द होना', es: 'tener dolor de oído', fr: 'avoir mal aux oreilles', de: 'Ohrenschmerzen haben', pt: 'ter dor de ouvido', zh: '耳朵痛', ar: 'يعاني من ألم الأذن', ja: '耳が痛い', ru: 'болит ухо' },
      exampleSentence: 'The little child is crying because she has an earache.',
      exampleTranslationByLang: { hi: 'छोटी बच्ची रो रही है क्योंकि उसके कान में दर्द है।', es: 'La niña pequeña está llorando porque tiene dolor de oído.' },
      audioText: 'have an earache',
      audioId: 'en_a1_u02_l27_v_earache',
      slowAudioId: 'en_a1_u02_l27_v_earache_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👂',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_feel_dizzy',
      word: 'feel dizzy',
      phonetic: '/fiːl ˈdɪz.i/',
      meaning: 'Experience a spinning sensation and loss of balance',
      translationsByLang: { hi: 'चक्कर आना', es: 'sentirse mareado / tener vértigo', fr: 'avoir des vertiges / se sentir étourdi', de: 'schwindelig sein', pt: 'sentir tontura', zh: '感到头晕', ar: 'يشعر بالدوار', ja: 'めまいがする', ru: 'кружится голова' },
      exampleSentence: 'When I stood up too quickly, I felt dizzy for a moment.',
      exampleTranslationByLang: { hi: 'जब मैं बहुत जल्दी खड़ा हुआ, तो मुझे एक पल के लिए चक्कर आ गया।', es: 'Cuando me levanté demasiado rápido, me sentí mareado por un momento.' },
      audioText: 'feel dizzy',
      audioId: 'en_a1_u02_l27_v_dizzy',
      slowAudioId: 'en_a1_u02_l27_v_dizzy_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💫',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_feel_tired',
      word: 'feel tired / exhausted',
      phonetic: '/fiːl ˈtaɪ.ɚd/',
      meaning: 'In need of sleep or rest; weary and lacking energy',
      translationsByLang: { hi: 'थकान महसूस होना', es: 'sentirse cansado / agotado', fr: 'se sentir fatigué', de: 'müde / erschöpft sein', pt: 'sentir-se cansado', zh: '感到疲劳 / 疲惫', ar: 'يشعر بالتعب والإرهاق', ja: '疲れている / 疲労を感じる', ru: 'чувствовать усталость' },
      exampleSentence: 'I feel very tired after working a twelve-hour shift.',
      exampleTranslationByLang: { hi: 'बारह घंटे की शिफ्ट में काम करने के बाद मुझे बहुत थकान महसूस हो रही है।', es: 'Me siento muy cansado después de trabajar un turno de doce horas.' },
      audioText: 'feel tired',
      audioId: 'en_a1_u02_l27_v_tired',
      slowAudioId: 'en_a1_u02_l27_v_tired_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥱',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_feel_sick',
      word: 'feel sick / unwell',
      phonetic: '/fiːl sɪk/',
      meaning: 'Experience nausea or general bodily unwellness',
      translationsByLang: { hi: 'तबीयत खराब लगना / बीमार महसूस होना', es: 'sentirse mal / enfermo', fr: 'se sentir malade', de: 'sich krank / unwohl fühlen', pt: 'sentir-se mal / doente', zh: '感觉不舒服 / 恶心', ar: 'يشعر بالمرض / التوعك', ja: '気分が悪い / 吐き気がする', ru: 'чувствовать тошноту / недомогание' },
      exampleSentence: 'Please pull over the car; I feel sick.',
      exampleTranslationByLang: { hi: 'कृपया गाड़ी रोकिए; मुझे उल्टी जैसा लग रहा है।', es: 'Por favor, detén el coche; me siento mal.' },
      audioText: 'feel sick',
      audioId: 'en_a1_u02_l27_v_sick',
      slowAudioId: 'en_a1_u02_l27_v_sick_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🤮',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_feel_weak',
      word: 'feel weak',
      phonetic: '/fiːl wiːk/',
      meaning: 'Lacking physical bodily strength and muscular vigor',
      translationsByLang: { hi: 'कमजोरी महसूस होना', es: 'sentirse débil', fr: 'se sentir faible', de: 'sich schwach fühlen', pt: 'sentir-se fraco', zh: '感到虚弱', ar: 'يشعر بالضعف', ja: '力が入らない / だるい', ru: 'чувствовать слабость' },
      exampleSentence: 'After three days with a fever, she feels very weak.',
      exampleTranslationByLang: { hi: 'तीन दिनों के बुखार के बाद, वह बहुत कमजोरी महसूस कर रही है।', es: 'Después de tres días con fiebre, se siente muy débil.' },
      audioText: 'feel weak',
      audioId: 'en_a1_u02_l27_v_weak',
      slowAudioId: 'en_a1_u02_l27_v_weak_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📉',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_feel_better',
      word: 'feel better / recover',
      phonetic: '/fiːl ˈbet̬.ɚ/',
      meaning: 'Experience an improvement in health after being ill',
      translationsByLang: { hi: 'बेहतर महसूस होना / ठीक होना', es: 'sentirse mejor / recuperarse', fr: 'se sentir mieux', de: 'sich besser fühlen', pt: 'sentir-se melhor', zh: '感觉好多了 / 康复', ar: 'يشعر بتحسن', ja: '気分が良くなる / 回復する', ru: 'чувствовать себя лучше' },
      exampleSentence: 'I took the medicine and now I feel much better.',
      exampleTranslationByLang: { hi: 'मैंने दवा ली और अब मुझे बहुत बेहतर महसूस हो रहा है।', es: 'Tomé la medicina y ahora me siento mucho mejor.' },
      audioText: 'feel better',
      audioId: 'en_a1_u02_l27_v_better',
      slowAudioId: 'en_a1_u02_l27_v_better_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '😊',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_hurts',
      word: 'hurt / hurts',
      phonetic: '/hɝːt/ /hɝːts/',
      meaning: 'Cause or suffer physical bodily pain or distress',
      translationsByLang: { hi: 'दर्द होना / चोट लगना', es: 'doler / duele', fr: 'faire mal / faire souffrir', de: 'wehtun / schmerzen', pt: 'doer / machucar', zh: '疼痛 / 痛', ar: 'يؤلم / يوجع', ja: '痛む / 痛い', ru: 'болеть / причинять боль' },
      exampleSentence: 'My left ankle hurts when I try to walk on it.',
      exampleTranslationByLang: { hi: 'जब मैं चलने की कोशिश करता हूँ तो मेरे बाएं टखने में दर्द होता है।', es: 'Mi tobillo izquierdo me duele cuando intento caminar.' },
      audioText: 'hurt and hurts',
      audioId: 'en_a1_u02_l27_v_hurts',
      slowAudioId: 'en_a1_u02_l27_v_hurts_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⚡',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_medicine',
      word: 'medicine / pills / tablets',
      phonetic: '/ˈmed.ə.sən/ /pɪlz/',
      meaning: 'Substance used in treating illness, symptoms, or medical disease',
      translationsByLang: { hi: 'दवा / गोलियां', es: 'medicina / pastillas / píldoras', fr: 'médicament / pilules', de: 'Medikament / Tabletten', pt: 'remédio / comprimidos', zh: '药 / 药片', ar: 'دواء / أقراص / حبوب', ja: '薬 / 錠剤', ru: 'лекарство / таблетки' },
      exampleSentence: 'Take two pills with water after breakfast every morning.',
      exampleTranslationByLang: { hi: 'हर सुबह नाश्ते के बाद पानी के साथ दो गोलियां लें।', es: 'Toma dos pastillas con agua después del desayuno cada mañana.' },
      audioText: 'medicine and pills',
      audioId: 'en_a1_u02_l27_v_medicine',
      slowAudioId: 'en_a1_u02_l27_v_medicine_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💊',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_prescription',
      word: 'prescription',
      phonetic: '/prɪˈskrɪp.ʃən/',
      meaning: 'An instruction written by a medical doctor authorizing a patient to buy medicine',
      translationsByLang: { hi: 'डॉक्टर का पर्चा / प्रिस्क्रिप्शन', es: 'receta médica', fr: 'ordonnance médicale', de: 'Rezept / ärztliche Verordnung', pt: 'receita médica', zh: '处方 / 药方', ar: 'وصفة طبية / روجيتة', ja: '処方箋', ru: 'рецепт врача' },
      exampleSentence: 'You need a doctor\'s prescription to purchase these antibiotic tablets.',
      exampleTranslationByLang: { hi: 'इन एंटीबायोटिक गोलियों को खरीदने के लिए आपको डॉक्टर के पर्चे की आवश्यकता है।', es: 'Necesitas una receta médica para comprar estas pastillas de antibiótico.' },
      audioText: 'prescription',
      audioId: 'en_a1_u02_l27_v_prescription',
      slowAudioId: 'en_a1_u02_l27_v_prescription_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📝',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_doctor_clinic',
      word: 'doctor / clinic',
      phonetic: '/ˈdɑːk.tɚ/ /ˈklɪn.ɪk/',
      meaning: 'A qualified medical practitioner / an establishment where patients receive treatment',
      translationsByLang: { hi: 'डॉक्टर / क्लिनिक / औषधालय', es: 'médico / clínica', fr: 'médecin / clinique', de: 'Arzt / Klinik', pt: 'médico / clínica', zh: '医生 / 诊所', ar: 'طبيب / عيادة', ja: '医師 / 診療所・クリニック', ru: 'врач / клиника' },
      exampleSentence: 'I have an appointment with the doctor at the clinic at two o\'clock.',
      exampleTranslationByLang: { hi: 'दो बजे क्लिनिक में डॉक्टर के साथ मेरी अपॉइंटमेंट है।', es: 'Tengo una cita con el médico en la clínica a las dos.' },
      audioText: 'doctor and clinic',
      audioId: 'en_a1_u02_l27_v_doctor',
      slowAudioId: 'en_a1_u02_l27_v_doctor_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👨‍⚕️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_appointment',
      word: 'appointment',
      phonetic: '/əˈpɔɪnt.mənt/',
      meaning: 'An arrangement to meet someone at a particular time and place',
      translationsByLang: { hi: 'मुलाकात का समय / अपॉइंटमेंट', es: 'cita / turno médico', fr: 'rendez-vous', de: 'Termin / Arzttermin', pt: 'consulta / agendamento', zh: '预约 / 挂号', ar: 'موعد طبي', ja: '予約 / 診察予約', ru: 'прием / запись к врачу' },
      exampleSentence: 'I called the medical center to book an urgent appointment.',
      exampleTranslationByLang: { hi: 'मैंने एक जरूरी अपॉइंटमेंट बुक करने के लिए मेडिकल सेंटर को फोन किया।', es: 'Llamé al centro médico para reservar una cita urgente.' },
      audioText: 'appointment',
      audioId: 'en_a1_u02_l27_v_appointment',
      slowAudioId: 'en_a1_u02_l27_v_appointment_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📅',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_thermometer',
      word: 'thermometer',
      phonetic: '/θɚˈmɑː.mə.t̬ɚ/',
      meaning: 'An instrument used for measuring human body temperature',
      translationsByLang: { hi: 'थर्मामीटर / तापमापी', es: 'termómetro', fr: 'thermomètre', de: 'Thermometer / Fieberthermometer', pt: 'termômetro', zh: '体温计 / 温度计', ar: 'ميزان حرارة', ja: '体温計', ru: 'градусник / термометр' },
      exampleSentence: 'The nurse placed the digital thermometer under my tongue.',
      exampleTranslationByLang: { hi: 'नर्स ने मेरी जीभ के नीचे डिजिटल थर्मामीटर रखा।', es: 'La enfermera colocó el termómetro digital debajo de mi lengua.' },
      audioText: 'thermometer',
      audioId: 'en_a1_u02_l27_v_thermometer',
      slowAudioId: 'en_a1_u02_l27_v_thermometer_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌡️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_allergy',
      word: 'allergy / allergic',
      phonetic: '/ˈæl.ɚ.dʒi/ /əˈlɝː.dʒɪk/',
      meaning: 'A damaging immune response by the body to a substance',
      translationsByLang: { hi: 'एलर्जी / एलर्जी से ग्रस्त', es: 'alergia / alérgico', fr: 'allergie / allergique', de: 'Allergie / allergisch', pt: 'alergia / alérgico', zh: '过敏 / 过敏的', ar: 'حساسية / يعاني من حساسية', ja: 'アレルギー / アレルギーの', ru: 'аллергия / аллергичный' },
      exampleSentence: 'Are you allergic to penicillin or any other drugs?',
      exampleTranslationByLang: { hi: 'क्या आपको पेनिसिलिन या किसी अन्य दवा से एलर्जी है?', es: '¿Eres alérgico a la penicilina o a algún otro medicamento?' },
      audioText: 'allergy and allergic',
      audioId: 'en_a1_u02_l27_v_allergy',
      slowAudioId: 'en_a1_u02_l27_v_allergy_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⚠️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_bandage',
      word: 'bandage / plaster',
      phonetic: '/ˈbæn.dɪdʒ/ /ˈplæs.tɚ/',
      meaning: 'A strip of material used to bind and protect an open wound or injury',
      translationsByLang: { hi: 'पट्टी / बैंडेज', es: 'venda / tirita / curita', fr: 'pansement / bandage', de: 'Pflaster / Verband', pt: 'curativo / atadura', zh: '绷带 / 创可贴', ar: 'ضمادة / لاصق جروح', ja: '包帯 / 絆創膏', ru: 'бинт / пластырь' },
      exampleSentence: 'Clean the cut thoroughly and apply a sterile bandage.',
      exampleTranslationByLang: { hi: 'कट को अच्छी तरह साफ करें और एक रोगाणुरहित पट्टी लगाएं।', es: 'Limpia bien el corte y aplica un vendaje estéril.' },
      audioText: 'bandage and plaster',
      audioId: 'en_a1_u02_l27_v_bandage',
      slowAudioId: 'en_a1_u02_l27_v_bandage_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🩹',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_rest',
      word: 'rest / stay in bed',
      phonetic: '/rest/ /steɪ ɪn bed/',
      meaning: 'Cease work or movement in order to relax, sleep, or recover strength',
      translationsByLang: { hi: 'आराम करना / बिस्तर पर आराम करना', es: 'descansar / guardar cama', fr: 'se reposer / rester au lit', de: 'sich ausruhen / im Bett bleiben', pt: 'descansar / ficar de cama', zh: '休息 / 卧床休息', ar: 'الراحة / البقاء في الفراش', ja: '休む / 安静にする', ru: 'отдыхать / соблюдать постельный режим' },
      exampleSentence: 'The doctor advised me to rest at home for two days.',
      exampleTranslationByLang: { hi: 'डॉक्टर ने मुझे दो दिन घर पर आराम करने की सलाह दी।', es: 'El médico me recomendó descansar en casa durante dos días.' },
      audioText: 'rest and stay in bed',
      audioId: 'en_a1_u02_l27_v_rest',
      slowAudioId: 'en_a1_u02_l27_v_rest_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🛌',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l27_drink_fluids',
      word: 'drink fluids / warm tea',
      phonetic: '/drɪŋk ˈfluː.ɪdz/',
      meaning: 'Hydrate the body by drinking water, herbal tea, or broth',
      translationsByLang: { hi: 'तरल पदार्थ / गर्म चाय पीना', es: 'beber líquidos / té caliente', fr: 'boire des liquides / du thé chaud', de: 'viel trinken / warmen Tee trinken', pt: 'beber líquidos / chá quente', zh: '多喝水 / 喝热茶', ar: 'شرب السوائل / الشاي الدافئ', ja: '水分を摂る / 温かいお茶を飲む', ru: 'пить жидкость / теплый чай' },
      exampleSentence: 'Drink plenty of fluids to stay hydrated when you have a fever.',
      exampleTranslationByLang: { hi: 'बुखार होने पर पर्याप्त मात्रा में तरल पदार्थ पिएं।', es: 'Bebe muchos líquidos para mantenerte hidratado cuando tengas fiebre.' },
      audioText: 'drink fluids',
      audioId: 'en_a1_u02_l27_v_fluids',
      slowAudioId: 'en_a1_u02_l27_v_fluids_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍵',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: High-Frequency Expressions (10 items)
  expressions: [
    {
      id: 'exp_u02_l27_01',
      phrase: 'What\'s the matter? / What\'s wrong?',
      meaning: 'Standard caring question asking someone about their health problem or discomfort',
      translationsByLang: {
        hi: 'क्या बात है? / क्या परेशानी है?',
        es: '¿Qué te pasa? / ¿Qué ocurre?',
        fr: 'Qu\'est-ce qui ne va pas ?',
        de: 'Was fehlt Ihnen? / Was ist los?',
        pt: 'O que você tem? / O que está acontecendo?',
        zh: '你怎么了？/ 哪里不舒服？',
        ar: 'ما الخطب؟ / ما المشكلة؟',
        ja: 'どうしましたか？ / どこか悪いのですか？',
        ru: 'Что случилось? / Что с вами?'
      },
      context: 'Inquiring about symptoms with family or doctor.',
      audioId: 'en_a1_u02_l27_exp_01'
    },
    {
      id: 'exp_u02_l27_02',
      phrase: 'I don\'t feel well today.',
      meaning: 'General polite statement indicating you are sick or unwell',
      translationsByLang: {
        hi: 'आज मेरी तबीयत ठीक नहीं लग रही है।',
        es: 'Hoy no me encuentro bien.',
        fr: 'Je ne me sens pas bien aujourd\'hui.',
        de: 'Ich fühle mich heute nicht gut.',
        pt: 'Não estou me sentindo bem hoje.',
        zh: '我今天感觉不太舒服。',
        ar: 'لا أشعر أنني بخير اليوم.',
        ja: '今日は体調が優れません。',
        ru: 'Я сегодня плохо себя чувствую.'
      },
      context: 'Notifying a boss or colleague about illness.',
      audioId: 'en_a1_u02_l27_exp_02'
    },
    {
      id: 'exp_u02_l27_03',
      phrase: 'I have a terrible headache.',
      meaning: 'Stating intense head pain as an explicit physical symptom',
      translationsByLang: {
        hi: 'मुझे बहुत तेज सिरदर्द है।',
        es: 'Tengo un dolor de cabeza terrible.',
        fr: 'J\'ai un mal de tête terrible.',
        de: 'Ich habe schreckliche Kopfschmerzen.',
        pt: 'Estou com uma dor de cabeça terrível.',
        zh: '我头痛得厉害。',
        ar: 'أعاني من صداع شديد.',
        ja: 'ひどい頭痛がします。',
        ru: 'У меня ужасно болит голова.'
      },
      context: 'Describing specific symptom.',
      audioId: 'en_a1_u02_l27_exp_03'
    },
    {
      id: 'exp_u02_l27_04',
      phrase: 'My back hurts when I sit down.',
      meaning: 'Localizing physical discomfort to a particular body part during an action',
      translationsByLang: {
        hi: 'जब मैं बैठता हूँ तो मेरी पीठ में दर्द होता है।',
        es: 'Me duele la espalda cuando me siento.',
        fr: 'Mon dos me fait mal quand je m\'assieds.',
        de: 'Mein Rücken tut weh, wenn ich mich hinsetze.',
        pt: 'Minhas costas doem quando me sento.',
        zh: '我坐下的时候背部很痛。',
        ar: 'ظهري يؤلمني عندما أجلس.',
        ja: '座ると腰が痛みます。',
        ru: 'У меня болит спина, когда я сажусь.'
      },
      context: 'Explaining pain triggers to a doctor.',
      audioId: 'en_a1_u02_l27_exp_04'
    },
    {
      id: 'exp_u02_l27_05',
      phrase: 'I feel dizzy and weak.',
      meaning: 'Expressing combined sensations of lightheadedness and lack of strength',
      translationsByLang: {
        hi: 'मुझे चक्कर आ रहे हैं और कमजोरी महसूस हो रही है।',
        es: 'Me siento mareado y débil.',
        fr: 'Je me sens étourdi et faible.',
        de: 'Mir ist schwindelig und ich fühle mich schwach.',
        pt: 'Estou me sentindo tonto e fraco.',
        zh: '我感到头晕而且全身无力。',
        ar: 'أشعر بالدوار والضعف.',
        ja: 'めまいがして体がだるいです。',
        ru: 'У меня кружится голова и чувствуется слабость.'
      },
      context: 'Describing physical sensations.',
      audioId: 'en_a1_u02_l27_exp_05'
    },
    {
      id: 'exp_u02_l27_06',
      phrase: 'How do you feel now?',
      meaning: 'Follow-up question checking on someone\'s recovery progress',
      translationsByLang: {
        hi: 'अब आप कैसा महसूस कर रहे हैं?',
        es: '¿Cómo te sientes ahora?',
        fr: 'Comment vous sentez-vous maintenant ?',
        de: 'Wie fühlen Sie sich jetzt?',
        pt: 'Como você se sente agora?',
        zh: '你现在感觉怎么样？',
        ar: 'كيف تشعر الآن؟',
        ja: '今の気分はどうですか？',
        ru: 'Как вы себя сейчас чувствуете?'
      },
      context: 'Doctor or friend checking recovery.',
      audioId: 'en_a1_u02_l27_exp_06'
    },
    {
      id: 'exp_u02_l27_07',
      phrase: 'I would like to make an appointment.',
      meaning: 'Formal phrase used to schedule a clinic visit over the phone',
      translationsByLang: {
        hi: 'मैं डॉक्टर से मिलने के लिए अपॉइंटमेंट लेना चाहता हूँ।',
        es: 'Me gustaría pedir una cita.',
        fr: 'Je voudrais prendre rendez-vous.',
        de: 'Ich möchte einen Termin vereinbaren.',
        pt: 'Gostaria de agendar uma consulta.',
        zh: '我想预约门诊。',
        ar: 'أود حجز موعد.',
        ja: '診察の予約を取りたいのですが。',
        ru: 'Я хотел бы записаться на прием.'
      },
      context: 'Clinic reception and telephone booking.',
      audioId: 'en_a1_u02_l27_exp_07'
    },
    {
      id: 'exp_u02_l27_08',
      phrase: 'Take this medicine twice a day.',
      meaning: 'Standard medical dosage instruction indicating daily pill frequency',
      translationsByLang: {
        hi: 'यह दवा दिन में दो बार लें।',
        es: 'Toma este medicamento dos veces al día.',
        fr: 'Prenez ce médicament deux fois par jour.',
        de: 'Nehmen Sie dieses Medikament zweimal täglich ein.',
        pt: 'Tome este remédio duas vezes ao dia.',
        zh: '这个药每天吃两次。',
        ar: 'تناول هذا الدواء مرتين في اليوم.',
        ja: 'この薬を1日2回服用してください。',
        ru: 'Принимайте это лекарство два раза в день.'
      },
      context: 'Pharmacy instructions and doctor orders.',
      audioId: 'en_a1_u02_l27_exp_08'
    },
    {
      id: 'exp_u02_l27_09',
      phrase: 'You should get some rest and drink warm fluids.',
      meaning: 'Helpful everyday health recommendation for colds and minor viral infections',
      translationsByLang: {
        hi: 'आपको आराम करना चाहिए और गर्म तरल पदार्थ पीने चाहिए।',
        es: 'Deberías descansar y beber líquidos calientes.',
        fr: 'Vous devriez vous reposer et boire des boissons chaudes.',
        de: 'Sie sollten sich ausruhen und warme Getränke zu sich nehmen.',
        pt: 'Você deve descansar e beber líquidos mornos.',
        zh: '你应该多休息并喝温水。',
        ar: 'عليك أن ترتاح وتشرب السوائل الدافئة.',
        ja: '安静にして温かい飲み物を飲んだ方がいいですよ。',
        ru: 'Вам следует отдохнуть и пить теплое питье.'
      },
      context: 'Giving health advice.',
      audioId: 'en_a1_u02_l27_exp_09'
    },
    {
      id: 'exp_u02_l27_10',
      phrase: 'Are you allergic to any medication?',
      meaning: 'Standard safety question asked by doctors and pharmacists before prescribing',
      translationsByLang: {
        hi: 'क्या आपको किसी दवा से एलर्जी है?',
        es: '¿Es usted alérgico a algún medicamento?',
        fr: 'Êtes-vous allergique à des médicaments ?',
        de: 'Sind Sie gegen irgendwelche Medikamente allergisch?',
        pt: 'Você tem alergia a algum medicamento?',
        zh: '你对什么药物过敏吗？',
        ar: 'هل لديك حساسية من أي دواء؟',
        ja: '何かアレルギーのある薬はありますか？',
        ru: 'У вас есть аллергия на какие-либо лекарства?'
      },
      context: 'Medical consultation screening.',
      audioId: 'en_a1_u02_l27_exp_10'
    }
  ],

  // SECTION 5: Grammar Rules (3 items)
  grammar: {
    patterns: [
      {
        id: 'g_u02_l27_have_symptoms',
        title: 'Expressing Illnesses & Symptoms: HAVE + a/an + Noun',
        rule: 'Use the verb HAVE (have / has) with an indefinite article "a / an" to describe most physical ailments: "I have a headache", "She has a fever", "He has a sore throat", "We have a cold". Exception: use "the" with flu ("have the flu").',
        formula: 'Subject + have / has + a/an + [Ailment Noun]\nSubject + have / has + the flu',
        examples: [
          { sentence: 'I have a terrible headache today.', translation: 'Hoy tengo un dolor de cabeza terrible.', audioText: 'I have a terrible headache today.' },
          { sentence: 'She has a high fever and a cough.', translation: 'Ella tiene fiebre alta y tos.', audioText: 'She has a high fever and a cough.' },
          { sentence: 'He has the flu, so he is resting.', translation: 'Él tiene gripe, así que está descansando.', audioText: 'He has the flu, so he is resting.' }
        ],
        explanationByLang: {
          hi: 'बीमारियों और लक्षणों को बताने के लिए "have/has + a/an + संज्ञा" का प्रयोग करें (जैसे "have a headache", "have a cold")। "flu" के साथ "the" लगता है: "have the flu"।',
          es: 'Para dolencias comunes usamos "have a / has a" (have a headache, have a cold). Para la gripe usamos "have the flu".'
        }
      },
      {
        id: 'g_u02_l27_feel_sensations',
        title: 'Expressing Physical Sensations: FEEL + Adjective',
        rule: 'Use the verb FEEL directly followed by an adjective (without reflexive pronouns) to express subjective physical conditions: "I feel dizzy", "She feels tired", "They feel sick", "I feel much better".',
        formula: 'Subject + feel / feels + [Adjective]',
        examples: [
          { sentence: 'I feel dizzy when I stand up.', translation: 'Me siento mareado cuando me pongo de pie.', audioText: 'I feel dizzy when I stand up.' },
          { sentence: 'Do you feel better after taking the medicine?', translation: '¿Te sientes mejor después de tomar la medicina?', audioText: 'Do you feel better after taking the medicine?' },
          { sentence: 'He feels exhausted after the long walk.', translation: 'Él se siente agotado después de la larga caminata.', audioText: 'He feels exhausted after the long walk.' }
        ],
        explanationByLang: {
          hi: 'शारीरिक स्थिति और अहसास व्यक्त करने के लिए "feel + विशेषण" का प्रयोग करें (जैसे "feel dizzy", "feel sick")। अंग्रेजी में रिफ्लेक्सिव सर्वनाम (myself) नहीं लगाते।',
          es: 'Usamos "feel + adjetivo" sin pronombres reflexivos: "I feel sick" (me siento mal), no "*I feel myself sick*".'
        }
      },
      {
        id: 'g_u02_l27_hurts_pain',
        title: 'Describing Pain: [Body Part] + HURT / HURTS',
        rule: 'Use the verb HURT to express pain in a body part. Singular body parts take "hurts" (adds -s); plural body parts take "hurt": "My head hurts", "My back hurts", "My feet hurt", "My eyes hurt".',
        formula: '[Singular Body Part] + hurts\n[Plural Body Part] + hurt',
        examples: [
          { sentence: 'My left shoulder hurts.', translation: 'Me duele el hombro izquierdo.', audioText: 'My left shoulder hurts.' },
          { sentence: 'My feet hurt after walking ten kilometers.', translation: 'Me duelen los pies después de caminar diez kilómetros.', audioText: 'My feet hurt after walking ten kilometers.' },
          { sentence: 'Where does it hurt?', translation: '¿Dónde le duele?', audioText: 'Where does it hurt?' }
        ],
        explanationByLang: {
          hi: 'शरीर के किसी हिस्से में दर्द के लिए "hurts" (एकवचन) या "hurt" (बहुवचन) का प्रयोग करें: "My back hurts" (पीठ दर्द), "My legs hurt" (टांगों में दर्द)।',
          es: 'Para partes del cuerpo: singular lleva "hurts" ("My back hurts"), plural lleva "hurt" ("My feet hurt").'
        }
      }
    ]
  },

  // SECTION 6: Common Mistakes (6 items)
  commonMistakes: [
    {
      id: 'cm_u02_l27_01',
      incorrect: 'I am headache.',
      correct: 'I have a headache.',
      whyExplanation: 'In English, you HAVE a medical condition or ailment; you are not the condition itself.',
      explanationsByLang: {
        hi: 'बीमारी बताने के लिए "have a headache" कहें, "I am headache" नहीं।',
        es: 'Se dice "I have a headache", nunca "*I am headache*".'
      }
    },
    {
      id: 'cm_u02_l27_02',
      incorrect: 'I have fever today.',
      correct: 'I have a fever today.',
      whyExplanation: 'Common symptom expressions require the indefinite article "a": "have a fever", "have a cold", "have a cough".',
      explanationsByLang: {
        hi: 'fever और cold के पहले "a" का प्रयोग आवश्यक है: "I have a fever"।',
        es: 'Se requiere el artículo "a": "have a fever", "have a cold".'
      }
    },
    {
      id: 'cm_u02_l27_03',
      incorrect: 'I feel myself dizzy.',
      correct: 'I feel dizzy.',
      whyExplanation: 'The verb FEEL does not use reflexive pronouns in English when expressing sensations.',
      explanationsByLang: {
        hi: 'feel के साथ "myself" का प्रयोग न करें। सीधे "I feel dizzy" कहें।',
        es: 'En inglés el verbo "feel" no es reflexivo: se dice "I feel dizzy", nunca "*I feel myself*".'
      }
    },
    {
      id: 'cm_u02_l27_04',
      incorrect: 'He have a cold and cough.',
      correct: 'He has a cold and a cough.',
      whyExplanation: 'Third person singular subjects (he/she/it) require HAS instead of HAVE.',
      explanationsByLang: {
        hi: 'He और She के साथ HAS का प्रयोग करें: "He has a cold"।',
        es: 'Con he/she/it se usa HAS: "He has a cold".'
      }
    },
    {
      id: 'cm_u02_l27_05',
      incorrect: 'My tooths hurt.',
      correct: 'My teeth hurt. / I have a toothache.',
      whyExplanation: 'The plural of tooth is irregular ("teeth"), or use the compound noun "toothache".',
      explanationsByLang: {
        hi: 'tooth का बहुवचन "teeth" होता है, "tooths" नहीं।',
        es: 'El plural de tooth es irregular: "teeth". O di "I have a toothache".'
      }
    },
    {
      id: 'cm_u02_l27_06',
      incorrect: 'You should to rest at home.',
      correct: 'You should rest at home.',
      whyExplanation: 'Modal verb SHOULD is followed by the bare infinitive without "to".',
      explanationsByLang: {
        hi: 'SHOULD के बाद "to" न लगाएं: "You should rest" कहें।',
        es: 'Tras el modal SHOULD nunca se usa "to": "You should rest".'
      }
    }
  ],

  // SECTION 7: Realistic Adult Dialogues (3 dialogues)
  dialogues: [
    {
      id: 'd_u02_l27_01',
      title: 'Calling the Clinic for an Appointment',
      context: 'Mark calls the local healthcare clinic because he is feeling ill and needs to see a doctor.',
      turns: [
        {
          speaker: 'Receptionist',
          text: 'Good morning, City Health Clinic. How can I help you today?',
          translationByLang: {
            hi: 'शुभ प्रभात, सिटी हेल्थ क्लिनिक। आज मैं आपकी क्या मदद कर सकता हूँ?',
            es: 'Buenos días, Clínica de Salud City. ¿En qué puedo ayudarle hoy?'
          },
          audioId: 'en_a1_u02_l27_d01_01'
        },
        {
          speaker: 'Mark',
          text: 'Hello, I don\'t feel well. I have a high fever and a sore throat. I\'d like to book an appointment with Dr. Evans.',
          translationByLang: {
            hi: 'नमस्ते, मेरी तबीयत ठीक नहीं है। मुझे तेज बुखार और गले में खराश है। मैं डॉ. इवांस के साथ अपॉइंटमेंट लेना चाहता हूँ।',
            es: 'Hola, no me encuentro bien. Tengo fiebre alta y dolor de garganta. Me gustaría pedir una cita con el Dr. Evans.'
          },
          audioId: 'en_a1_u02_l27_d01_02'
        },
        {
          speaker: 'Receptionist',
          text: 'Dr. Evans has an opening this afternoon at three fifteen. Does that work for you?',
          translationByLang: {
            hi: 'डॉ. इवांस के पास आज दोपहर तीन बजकर पंद्रह मिनट पर समय उपलब्ध है। क्या यह आपके लिए ठीक है?',
            es: 'El Dr. Evans tiene un hueco esta tarde a las tres y cuarto. ¿Le viene bien?'
          },
          audioId: 'en_a1_u02_l27_d01_03'
        },
        {
          speaker: 'Mark',
          text: 'Yes, three fifteen is perfect. Thank you very much.',
          translationByLang: {
            hi: 'हाँ, सवा तीन बजे बिल्कुल सही है। आपका बहुत-बहुत धन्यवाद।',
            es: 'Sí, las tres y cuarto es perfecto. Muchas gracias.'
          },
          audioId: 'en_a1_u02_l27_d01_04'
        }
      ]
    },
    {
      id: 'd_u02_l27_02',
      title: 'Consultation with the Doctor',
      context: 'Dr. Evans examines Mark in the consultation room to evaluate his symptoms.',
      turns: [
        {
          speaker: 'Dr. Evans',
          text: 'Hello Mark, come in and sit down. What\'s the matter?',
          translationByLang: {
            hi: 'नमस्ते मार्क, अंदर आइए और बैठिए। क्या परेशानी है?',
            es: 'Hola Mark, adelante y tome asiento. ¿Qué le ocurre?'
          },
          audioId: 'en_a1_u02_l27_d02_01'
        },
        {
          speaker: 'Mark',
          text: 'I have a terrible headache, my throat hurts, and I feel dizzy when I stand up.',
          translationByLang: {
            hi: 'मुझे तेज सिरदर्द है, मेरे गले में दर्द है, और जब मैं खड़ा होता हूँ तो चक्कर आते हैं।',
            es: 'Tengo un dolor de cabeza terrible, me duele la garganta y me siento mareado al ponerme de pie.'
          },
          audioId: 'en_a1_u02_l27_d02_02'
        },
        {
          speaker: 'Dr. Evans',
          text: 'Let me check your temperature and look at your throat. Yes, you have a mild viral infection.',
          translationByLang: {
            hi: 'मुझे आपका तापमान जांचने दीजिए और आपका गला देखने दीजिए। हाँ, आपको हल्का वायरल संक्रमण है।',
            es: 'Déjeme comprobar su temperatura y mirar su garganta. Sí, tiene una infección viral leve.'
          },
          audioId: 'en_a1_u02_l27_d02_03'
        },
        {
          speaker: 'Dr. Evans',
          text: 'You should rest in bed for two days, drink warm tea, and take these tablets twice a day after meals.',
          translationByLang: {
            hi: 'आपको दो दिन बिस्तर पर आराम करना चाहिए, गर्म चाय पीनी चाहिए और भोजन के बाद दिन में दो बार ये गोलियां लेनी चाहिए।',
            es: 'Debe guardar cama durante dos días, beber té caliente y tomar estas pastillas dos veces al día después de las comidas.'
          },
          audioId: 'en_a1_u02_l27_d02_04'
        }
      ]
    },
    {
      id: 'd_u02_l27_03',
      title: 'At the Pharmacy Counter',
      context: 'Mark visits the local pharmacy to fill his prescription and get advice from the pharmacist.',
      turns: [
        {
          speaker: 'Pharmacist',
          text: 'Hello! How can I help you today?',
          translationByLang: {
            hi: 'नमस्ते! आज मैं आपकी क्या मदद कर सकता हूँ?',
            es: '¡Hola! ¿En qué puedo ayudarle hoy?'
          },
          audioId: 'en_a1_u02_l27_d03_01'
        },
        {
          speaker: 'Mark',
          text: 'Hi, I have a prescription from Dr. Evans for my sore throat and fever.',
          translationByLang: {
            hi: 'नमस्ते, मेरे पास अपने गले में खराश और बुखार के लिए डॉ. इवांस का पर्चा है।',
            es: 'Hola, tengo una receta del Dr. Evans para mi dolor de garganta y fiebre.'
          },
          audioId: 'en_a1_u02_l27_d03_02'
        },
        {
          speaker: 'Pharmacist',
          text: 'Here is your medication. Take one tablet in the morning and one at night with water. Are you allergic to aspirin?',
          translationByLang: {
            hi: 'यह आपकी दवा है। एक गोली सुबह और एक रात को पानी के साथ लें। क्या आपको एस्पिरिन से एलर्जी है?',
            es: 'Aquí tiene su medicación. Tome una pastilla por la mañana y otra por la noche con agua. ¿Es alérgico a la aspirina?'
          },
          audioId: 'en_a1_u02_l27_d03_03'
        },
        {
          speaker: 'Mark',
          text: 'No, I have no allergies. Thank you for the clear instructions!',
          translationByLang: {
            hi: 'नहीं, मुझे कोई एलर्जी नहीं है। स्पष्ट निर्देशों के लिए धन्यवाद!',
            es: 'No, no tengo ninguna alergia. ¡Gracias por las instrucciones claras!'
          },
          audioId: 'en_a1_u02_l27_d03_04'
        }
      ]
    }
  ],

  // SECTION 8: Practice Exercises (15 canonical items)
  practiceExercises: [
    {
      id: 'ex_u02_l27_p01',
      lessonId: 'lesson_a1_2_27',
      type: 'multiple_choice',
      prompt: 'Select the grammatically correct sentence to describe head pain:',
      options: [
        { id: 'a', text: 'I have a terrible headache today.', isCorrect: true },
        { id: 'b', text: 'I am a terrible headache today.', isCorrect: false },
        { id: 'c', text: 'I have terrible headache today.', isCorrect: false },
        { id: 'd', text: 'I feel a headache today.', isCorrect: false }
      ],
      explanation: 'Use "have a headache" with the article "a".'
    },
    {
      id: 'ex_u02_l27_p02',
      lessonId: 'lesson_a1_2_27',
      type: 'fill_in_blank',
      prompt: 'Complete the sentence: "When I stood up quickly, I _______ dizzy."',
      correctAnswer: 'felt',
      options: [
        { id: 'opt_1', text: 'felt', isCorrect: true },
        { id: 'opt_2', text: 'had', isCorrect: false },
        { id: 'opt_3', text: 'was headache', isCorrect: false },
        { id: 'opt_4', text: 'took', isCorrect: false }
      ],
      explanation: 'Use "felt / feel dizzy" to describe physical sensation.'
    },
    {
      id: 'ex_u02_l27_p03',
      lessonId: 'lesson_a1_2_27',
      type: 'reorder',
      prompt: 'Arrange the words to ask someone about their health problem:',
      words: ['What', 'is', 'the', 'matter', 'with', 'you?'],
      correctOrder: ['What', 'is', 'the', 'matter', 'with', 'you?'],
      explanation: '"What is the matter with you?" is the standard question asking about health.'
    },
    {
      id: 'ex_u02_l27_p04',
      lessonId: 'lesson_a1_2_27',
      type: 'match_pairs',
      prompt: 'Match each symptom with its corresponding body region:',
      pairs: [
        { id: 'p1', left: 'headache', right: 'cranial head' },
        { id: 'p2', left: 'sore throat', right: 'neck and throat' },
        { id: 'p3', left: 'stomachache', right: 'abdomen and stomach' },
        { id: 'p4', left: 'toothache', right: 'teeth and jaw' }
      ]
    },
    {
      id: 'ex_u02_l27_p05',
      lessonId: 'lesson_a1_2_27',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes pain in both feet?',
      options: [
        { id: 'a', text: 'My feet hurt after running.', isCorrect: true },
        { id: 'b', text: 'My feet hurts after running.', isCorrect: false },
        { id: 'c', text: 'My feets hurt after running.', isCorrect: false },
        { id: 'd', text: 'My foots is hurting.', isCorrect: false }
      ],
      explanation: 'Plural subject "feet" takes the plural verb form "hurt" without -s.'
    },
    {
      id: 'ex_u02_l27_p06',
      lessonId: 'lesson_a1_2_27',
      type: 'error_correction',
      prompt: 'Find and fix the error: "I feel myself very sick today."',
      errorSentence: 'I feel myself very sick today.',
      targetSentence: 'I feel very sick today.',
      options: [
        { id: 'opt_1', text: 'I feel very sick today.', isCorrect: true },
        { id: 'opt_2', text: 'I feel myself very sick today.', isCorrect: false },
        { id: 'opt_3', text: 'I am feel very sick today.', isCorrect: false },
        { id: 'opt_4', text: 'I have feel very sick today.', isCorrect: false }
      ],
      explanation: 'Do not use reflexive pronouns (myself) with the verb FEEL.'
    },
    {
      id: 'ex_u02_l27_p07',
      lessonId: 'lesson_a1_2_27',
      type: 'fill_in_blank',
      prompt: 'Complete the doctor\'s advice: "You _______ drink warm tea and rest in bed."',
      correctAnswer: 'should',
      options: [
        { id: 'opt_1', text: 'should', isCorrect: true },
        { id: 'opt_2', text: 'should to', isCorrect: false },
        { id: 'opt_3', text: 'are should', isCorrect: false },
        { id: 'opt_4', text: 'must to', isCorrect: false }
      ],
      explanation: '"should" is followed by the bare infinitive verb.'
    },
    {
      id: 'ex_u02_l27_p08',
      lessonId: 'lesson_a1_2_27',
      type: 'reorder',
      prompt: 'Arrange the words to make a polite appointment request:',
      words: ['I', 'would', 'like', 'to', 'make', 'an', 'appointment.'],
      correctOrder: ['I', 'would', 'like', 'to', 'make', 'an', 'appointment.'],
      explanation: 'Polite request formula: I would like to make an appointment.'
    },
    {
      id: 'ex_u02_l27_p09',
      lessonId: 'lesson_a1_2_27',
      type: 'multiple_choice',
      prompt: 'What does a pharmacist ask to ensure medication safety?',
      options: [
        { id: 'a', text: 'Are you allergic to any medication?', isCorrect: true },
        { id: 'b', text: 'Do you have allergic for drugs?', isCorrect: false },
        { id: 'c', text: 'Are you allergy with medicine?', isCorrect: false },
        { id: 'd', text: 'Is your allergy medicine?', isCorrect: false }
      ],
      explanation: '"Are you allergic to...?" is the standard medical safety inquiry.'
    },
    {
      id: 'ex_u02_l27_p10',
      lessonId: 'lesson_a1_2_27',
      type: 'fill_in_blank',
      prompt: 'Fill in the blank: "He cannot come to work because he has _______ flu."',
      correctAnswer: 'the',
      options: [
        { id: 'opt_1', text: 'the', isCorrect: true },
        { id: 'opt_2', text: 'a', isCorrect: false },
        { id: 'opt_3', text: 'an', isCorrect: false },
        { id: 'opt_4', text: 'one', isCorrect: false }
      ],
      explanation: 'We say "have the flu" with the definite article "the".'
    },
    {
      id: 'ex_u02_l27_p11',
      lessonId: 'lesson_a1_2_27',
      type: 'match_pairs',
      prompt: 'Match each medical item with its practical purpose:',
      pairs: [
        { id: 'p1', left: 'thermometer', right: 'measure body temperature' },
        { id: 'p2', left: 'prescription', right: 'doctor authorization for medicine' },
        { id: 'p3', left: 'bandage', right: 'cover and protect a cut' },
        { id: 'p4', left: 'pills', right: 'tablets taken with water' }
      ]
    },
    {
      id: 'ex_u02_l27_p12',
      lessonId: 'lesson_a1_2_27',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes a third-person symptom?',
      options: [
        { id: 'a', text: 'She has a sore throat and a high fever.', isCorrect: true },
        { id: 'b', text: 'She have a sore throat and fever.', isCorrect: false },
        { id: 'c', text: 'She is a sore throat and fever.', isCorrect: false },
        { id: 'd', text: 'She feels a fever and throat.', isCorrect: false }
      ],
      explanation: 'Third person "She" takes "has a sore throat and a high fever".'
    },
    {
      id: 'ex_u02_l27_p13',
      lessonId: 'lesson_a1_2_27',
      type: 'reorder',
      prompt: 'Reorder the words to form a medication dosage instruction:',
      words: ['Take', 'two', 'pills', 'twice', 'a', 'day', 'after', 'meals.'],
      correctOrder: ['Take', 'two', 'pills', 'twice', 'a', 'day', 'after', 'meals.'],
      explanation: 'Imperative verb + quantity + frequency + time condition.'
    },
    {
      id: 'ex_u02_l27_p14',
      lessonId: 'lesson_a1_2_27',
      type: 'error_correction',
      prompt: 'Find and fix the error: "He have a toothache."',
      errorSentence: 'He have a toothache.',
      targetSentence: 'He has a toothache.',
      options: [
        { id: 'opt_1', text: 'He has a toothache.', isCorrect: true },
        { id: 'opt_2', text: 'He have a toothache.', isCorrect: false },
        { id: 'opt_3', text: 'He is a toothache.', isCorrect: false },
        { id: 'opt_4', text: 'He has toothache a.', isCorrect: false }
      ],
      explanation: 'Use "has" with subject "He".'
    },
    {
      id: 'ex_u02_l27_p15',
      lessonId: 'lesson_a1_2_27',
      type: 'multiple_choice',
      prompt: 'Select the best phrase to describe positive recovery:',
      options: [
        { id: 'a', text: 'I took the pills and now I feel much better.', isCorrect: true },
        { id: 'b', text: 'I took pills and now I am have better.', isCorrect: false },
        { id: 'c', text: 'I feel myself best now.', isCorrect: false },
        { id: 'd', text: 'I have feeling better now.', isCorrect: false }
      ],
      explanation: '"feel much better" is the natural phrase expressing recovery.'
    }
  ],

  // SECTION 9: Review Exercises (5 items)
  reviewExercises: [
    {
      id: 'ex_u02_l27_r01',
      lessonId: 'lesson_a1_2_27',
      type: 'multiple_choice',
      prompt: 'Choose the correct expression for general unwellness:',
      options: [
        { id: 'a', text: 'I don\'t feel well today.', isCorrect: true },
        { id: 'b', text: 'I am not have well today.', isCorrect: false },
        { id: 'c', text: 'I not feel good today.', isCorrect: false },
        { id: 'd', text: 'I don\'t have well today.', isCorrect: false }
      ],
      explanation: '"I don\'t feel well today" is standard for stating illness.'
    },
    {
      id: 'ex_u02_l27_r02',
      lessonId: 'lesson_a1_2_27',
      type: 'fill_in_blank',
      prompt: 'Complete the sentence: "My lower back _______ when I lift heavy items."',
      correctAnswer: 'hurts',
      options: [
        { id: 'opt_1', text: 'hurts', isCorrect: true },
        { id: 'opt_2', text: 'hurt', isCorrect: false },
        { id: 'opt_3', text: 'is pain', isCorrect: false },
        { id: 'opt_4', text: 'has hurt', isCorrect: false }
      ],
      explanation: 'Singular subject "My lower back" takes the singular verb "hurts".'
    },
    {
      id: 'ex_u02_l27_r03',
      lessonId: 'lesson_a1_2_27',
      type: 'reorder',
      prompt: 'Reorder the words to give healthy advice:',
      words: ['You', 'should', 'rest', 'and', 'drink', 'warm', 'tea.'],
      correctOrder: ['You', 'should', 'rest', 'and', 'drink', 'warm', 'tea.'],
      explanation: 'Subject + should + bare infinitive verbs.'
    },
    {
      id: 'ex_u02_l27_r04',
      lessonId: 'lesson_a1_2_27',
      type: 'match_pairs',
      prompt: 'Match the question with the most appropriate reply:',
      pairs: [
        { id: 'p1', left: 'What\'s the matter?', right: 'I have a sore throat.' },
        { id: 'p2', left: 'How do you feel now?', right: 'I feel much better, thanks.' },
        { id: 'p3', left: 'Are you allergic to aspirin?', right: 'No, I have no allergies.' },
        { id: 'p4', left: 'Where does it hurt?', right: 'My left knee hurts.' }
      ]
    },
    {
      id: 'ex_u02_l27_r05',
      lessonId: 'lesson_a1_2_27',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "have" with an ailment?',
      options: [
        { id: 'a', text: 'David has a stomachache from eating spoiled food.', isCorrect: true },
        { id: 'b', text: 'David is a stomachache from eating spoiled food.', isCorrect: false },
        { id: 'c', text: 'David have stomachache from eating spoiled food.', isCorrect: false },
        { id: 'd', text: 'David feels stomachache from eating spoiled food.', isCorrect: false }
      ],
      explanation: 'Third person singular "David has a stomachache".'
    }
  ],

  // SECTION 10: Assessment Exercises (5 items)
  assessmentExercises: [
    {
      id: 'ex_u02_l27_a01',
      lessonId: 'lesson_a1_2_27',
      type: 'multiple_choice',
      prompt: 'Which of the following is completely grammatically correct?',
      options: [
        { id: 'a', text: 'She has a fever and needs to rest at home.', isCorrect: true },
        { id: 'b', text: 'She is a fever and needs to rest at home.', isCorrect: false },
        { id: 'c', text: 'She has fever and needs to rest at home.', isCorrect: false },
        { id: 'd', text: 'She feel fever and needs rest at home.', isCorrect: false }
      ],
      explanation: '"has a fever" uses correct agreement and article.'
    },
    {
      id: 'ex_u02_l27_a02',
      lessonId: 'lesson_a1_2_27',
      type: 'fill_in_blank',
      prompt: 'Fill in the blank: "I need to see a dentist because I have a bad _______."',
      correctAnswer: 'toothache',
      options: [
        { id: 'opt_1', text: 'toothache', isCorrect: true },
        { id: 'opt_2', text: 'headache', isCorrect: false },
        { id: 'opt_3', text: 'stomachache', isCorrect: false },
        { id: 'opt_4', text: 'backache', isCorrect: false }
      ],
      explanation: 'Dentists treat toothaches (dental pain).'
    },
    {
      id: 'ex_u02_l27_a03',
      lessonId: 'lesson_a1_2_27',
      type: 'reorder',
      prompt: 'Arrange the words to form a correct diagnosis statement:',
      words: ['He', 'has', 'the', 'flu', 'and', 'feels', 'very', 'weak.'],
      correctOrder: ['He', 'has', 'the', 'flu', 'and', 'feels', 'very', 'weak.'],
      explanation: 'Subject + has the flu + and + feels + very weak.'
    },
    {
      id: 'ex_u02_l27_a04',
      lessonId: 'lesson_a1_2_27',
      type: 'match_pairs',
      prompt: 'Match the health structure with its correct grammatical category:',
      pairs: [
        { id: 'p1', left: 'have a headache', right: 'have + a + ailment noun' },
        { id: 'p2', left: 'feel dizzy', right: 'feel + adjective' },
        { id: 'p3', left: 'my shoulder hurts', right: 'body part + hurt/hurts' },
        { id: 'p4', left: 'you should rest', right: 'modal should + base verb' }
      ]
    },
    {
      id: 'ex_u02_l27_a05',
      lessonId: 'lesson_a1_2_27',
      type: 'multiple_choice',
      prompt: 'Select the best phrase to request an appointment at a medical clinic:',
      options: [
        { id: 'a', text: 'I would like to book an appointment with the doctor.', isCorrect: true },
        { id: 'b', text: 'I want make meeting with doctor.', isCorrect: false },
        { id: 'c', text: 'Can I to do doctor meeting?', isCorrect: false },
        { id: 'd', text: 'Book me for clinic now please.', isCorrect: false }
      ],
      explanation: 'Polite and professional clinic booking phrase.'
    }
  ]
};
