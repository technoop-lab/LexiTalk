import { LessonConfig } from './unit5_builder_helper';

// =========================================================================
// LESSON 67: Describing Symptoms, Pharmacy & Healthcare Consultations
// =========================================================================
export const CONFIG_67: LessonConfig = {
  num: 67,
  title: 'Describing Symptoms, Pharmacy & Healthcare Consultations',
  icon: '💊',
  estMin: 25,
  objTitle: 'Explain physical symptoms, buy over-the-counter medication, and consult a pharmacist',
  objDesc: 'Master vocabulary for aches and pains (headache, sore throat, cough, fever, stomachache), dosage instructions, prescription terms, and frequency of medicine intake.',
  objHi: 'शारीरिक लक्षणों का वर्णन करना, दवा की दुकान से दवा खरीदना और फार्मासिस्ट से परामर्श लेना सीखें।',
  objEs: 'Aprende a describir síntomas físicos, comprar medicamentos sin receta y consultar a un farmacéutico.',
  canDo: [
    'I can describe common physical aches, pains, and illness symptoms clearly.',
    'I can ask a pharmacist for over-the-counter medicine and understand dosage instructions.',
    'I can explain how long I have felt sick and ask about side effects.'
  ],
  canDoHi: [
    'मैं सामान्य शारीरिक दर्द, तकलीफ और बीमारी के लक्षणों का स्पष्ट रूप से वर्णन कर सकता हूँ।',
    'मैं फार्मासिस्ट से बिना पर्ची की दवा मांग सकता हूँ और खुराक के निर्देशों को समझ सकता हूँ।',
    'मैं बता सकता हूँ कि मैं कब से बीमार महसूस कर रहा हूँ और दुष्प्रभावों के बारे में पूछ सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir dolores físicos comunes y síntomas de enfermedad con claridad.',
    'Puedo pedir medicamentos de venta libre a un farmacéutico y entender las instrucciones de dosis.',
    'Puedo explicar cuánto tiempo llevo sintiéndome mal y preguntar sobre efectos secundarios.'
  ],
  vocab: [
    { w: 'symptom', p: '/ˈsɪmp.təm/', m: 'a physical or mental sign of an illness', hi: 'लक्षण', es: 'síntoma', fr: 'symptôme', de: 'Symptom', pt: 'sintoma', zh: '症状', ar: 'عَرَض', ja: '症状', ru: 'симптом', ex: 'What are your main symptoms today?', exHi: 'आज आपके मुख्य लक्षण क्या हैं?', exEs: '¿Cuáles son sus síntomas principales hoy?', ic: '🩺' },
    { w: 'headache', p: '/ˈhed.eɪk/', m: 'a continuous pain in the head', hi: 'सिरदर्द', es: 'dolor de cabeza / cefalea', fr: 'mal de tête', de: 'Kopfschmerzen', pt: 'dor de cabeça', zh: '头痛', ar: 'صداع', ja: '頭痛', ru: 'головная боль', ex: 'I have a terrible headache this afternoon.', exHi: 'आज दोपहर मुझे बहुत तेज़ सिरदर्द है।', exEs: 'Tengo un dolor de cabeza terrible esta tarde.', ic: '🤕' },
    { w: 'sore throat', p: '/ˌsɔː ˈθrəʊt/', m: 'a painful and inflamed throat', hi: 'गले में खराश / दर्द', es: 'dolor de garganta', fr: 'mal de gorge', de: 'Halsschmerzen', pt: 'dor de garganta', zh: '喉咙痛', ar: 'التهاب الحلق', ja: '喉の痛み', ru: 'боль в горле', ex: 'Warm tea with honey helps a sore throat.', exHi: 'शहद वाली गर्म चाय गले की खराश में मदद करती है।', exEs: 'El té caliente con miel ayuda con el dolor de garganta.', ic: '🧣' },
    { w: 'cough', p: '/kɒf/', m: 'to expel air from the lungs with a sharp noise', hi: 'खांसी / खांसना', es: 'tos / toser', fr: 'toux / tousser', de: 'Husten / husten', pt: 'tosse / tossir', zh: '咳嗽', ar: 'سعال / يسعل', ja: '咳 / 咳をする', ru: 'кашель / кашлять', ex: 'She has a dry cough and a mild fever.', exHi: 'उसे सूखी खांसी और हल्का बुखार है।', exEs: 'Ella tiene una tos seca y un poco de fiebre.', ic: '😷' },
    { w: 'fever', p: '/ˈfiː.vər/', m: 'an abnormally high body temperature', hi: 'बुखार', es: 'fiebre', fr: 'fièvre', de: 'Fieber', pt: 'febre', zh: '发烧', ar: 'حمى', ja: '熱 / 発熱', ru: 'температура / жар', ex: 'Take this tablet if you have a fever over 38 degrees.', exHi: 'यदि आपको 38 डिग्री से अधिक बुखार है तो यह गोली लें।', exEs: 'Tome esta pastilla si tiene una fiebre superior a 38 grados.', ic: '🌡️' },
    { w: 'stomachache', p: '/ˈstʌm.ək.eɪk/', m: 'pain in the stomach or belly area', hi: 'पेट दर्द', es: 'dolor de estómago', fr: 'mal d\'estomac', de: 'Magenschmerzen / Bauchschmerzen', pt: 'dor de estômago', zh: '胃痛 / 肚子痛', ar: 'ألم في المعدة', ja: '胃痛 / 腹痛', ru: 'боль в животе / желудке', ex: 'He rested because he had a stomachache.', exHi: 'उसने आराम किया क्योंकि उसके पेट में दर्द था।', exEs: 'Él descansó porque tenía dolor de estómago.', ic: '🤢' },
    { w: 'pharmacy', p: '/ˈfɑː.mə.si/', m: 'a shop where medicinal drugs are prepared and sold', hi: 'दवा की दुकान / फार्मेसी', es: 'farmacia', fr: 'pharmacie', de: 'Apotheke', pt: 'farmácia', zh: '药房 / 药店', ar: 'صيدلية', ja: '薬局 / ドラッグストア', ru: 'аптека', ex: 'Is there an open pharmacy nearby?', exHi: 'क्या पास में कोई खुली फार्मेसी है?', exEs: '¿Hay una farmacia abierta cerca?', ic: '🏥' },
    { w: 'pharmacist', p: '/ˈfɑː.mə.sɪst/', m: 'a person qualified to prepare and dispense medicines', hi: 'दवा विक्रेता / फार्मासिस्ट', es: 'farmacéutico', fr: 'pharmacien', de: 'Apotheker', pt: 'farmacêutico', zh: '药剂师', ar: 'صيدلي', ja: '薬剤師', ru: 'фармацевт / провизор', ex: 'The pharmacist explained the dosage clearly.', exHi: 'फार्मासिस्ट ने खुराक को स्पष्ट रूप से समझाया।', exEs: 'El farmacéutico explicó la dosis claramente.', ic: '👨‍⚕️' },
    { w: 'prescription', p: '/prɪˈskrɪp.ʃən/', m: 'an instruction written by a medical practitioner that authorizes a patient to be provided a medicine', hi: 'डॉक्टर का पर्चा / प्रिस्क्रिप्शन', es: 'receta médica / prescripción', fr: 'ordonnance', de: 'Rezept / ärztliche Verordnung', pt: 'receita médica', zh: '处方', ar: 'وصفة طبية', ja: '処方箋', ru: 'рецепт врача', ex: 'You need a doctor\'s prescription for this antibiotic.', exHi: 'इस एंटीबायोटिक के लिए आपको डॉक्टर के पर्चे की आवश्यकता है।', exEs: 'Necesita una receta médica para este antibiótico.', ic: '📄' },
    { w: 'painkiller', p: '/ˈpeɪnˌkɪl.ər/', m: 'a medicine used to relieve physical pain', hi: 'दर्द निवारक दवा', es: 'analgésico / calmante', fr: 'analgésique / antidouleur', de: 'Schmerzmittel', pt: 'analgésico', zh: '止痛药', ar: 'مسكن آلام', ja: '鎮痛剤 / 痛み止め', ru: 'обезболивающее', ex: 'I took a mild painkiller for my toothache.', exHi: 'मैंने अपने दांत दर्द के लिए एक हल्की दर्द निवारक दवा ली।', exEs: 'Tomé un analgésico suave para mi dolor de muelas.', ic: '💊' },
    { w: 'tablet', p: '/ˈtæb.lət/', m: 'a small solid disc of compressed medicinal substance', hi: 'गोली / टैबलेट', es: 'comprimido / pastilla', fr: 'comprimé / cachet', de: 'Tablette', pt: 'comprimido', zh: '药片', ar: 'قرص دواء', ja: '錠剤', ru: 'таблетка', ex: 'Take one tablet twice a day with water.', exHi: 'पानी के साथ दिन में दो बार एक गोली लें।', exEs: 'Tome una pastilla dos veces al día con agua.', ic: '⚪' },
    { w: 'syrup', p: '/ˈsɪr.əp/', m: 'a thick liquid medicinal preparation taken orally', hi: 'सिरप / चाशनी जैसी दवा', es: 'jarabe', fr: 'sirop', de: 'Hustensaft / Sirup', pt: 'xarope', zh: '糖浆', ar: 'شراب دواء', ja: 'シロップ剤', ru: 'сироп', ex: 'This cough syrup soothes chest irritation.', exHi: 'यह कफ सिरप सीने की जलन को शांत करता है।', exEs: 'Este jarabe para la tos alivia la irritación del pecho.', ic: '🧴' },
    { w: 'dosage', p: '/ˈdəʊ.sɪdʒ/', m: 'the size or frequency of a dose of medicine', hi: 'खुराक की मात्रा', es: 'dosis / dosificación', fr: 'posologie / dosage', de: 'Dosierung', pt: 'dosagem / posologia', zh: '剂量', ar: 'جرعة', ja: '用法・用量', ru: 'дозировка', ex: 'Do not exceed the recommended dosage on the label.', exHi: 'लेबल पर दी गई अनुशंसित खुराक से अधिक न लें।', exEs: 'No exceda la dosis recomendada en la etiqueta.', ic: '📏' },
    { w: 'side effect', p: '/ˈsaɪd ɪˌfekt/', m: 'a secondary and usually adverse effect of a drug', hi: 'दुष्प्रभाव / साइड इफेक्ट', es: 'efecto secundario', fr: 'effet secondaire', de: 'Nebenwirkung', pt: 'efeito colateral', zh: '副作用', ar: 'تأثير جانبي', ja: '副作用', ru: 'побочный эффект', ex: 'Drowsiness is a common side effect of this allergy medicine.', exHi: 'उनींदापन इस एलर्जी दवा का एक सामान्य दुष्प्रभाव है।', exEs: 'La somnolencia es un efecto secundario común de este medicamento.', ic: '⚠️' },
    { w: 'dizzy', p: '/ˈdɪz.i/', m: 'having a sensation of spinning around and losing one\'s balance', hi: 'चक्कर आना', es: 'mareado', fr: 'pris de vertige', de: 'schwindelig', pt: 'tonto / com vertigem', zh: '头晕', ar: 'دوار / دوخة', ja: 'めまいがする', ru: 'головокружительный / испытывающий головокружение', ex: 'I feel a bit dizzy when I stand up quickly.', exHi: 'जब मैं जल्दी से उठता हूँ तो मुझे थोड़ा चक्कर आता है।', exEs: 'Me siento un poco mareado cuando me levanto rápidamente.', ic: '💫' },
    { w: 'allergy', p: '/ˈæl.ə.dʒi/', m: 'a physical immune reaction', hi: 'एलर्जी', es: 'alergia', fr: 'alergie', de: 'Allergie', pt: 'alergia', zh: '过敏', ar: 'حساسية', ja: 'アレルギー', ru: 'аллергия', ex: 'Tell the doctor if you have any drug allergies.', exHi: 'यदि आपको किसी दवा से एलर्जी है तो डॉक्टर को बताएं।', exEs: 'Dígale al médico si tiene alguna alergia a medicamentos.', ic: '🚫' },
    { w: 'flu', p: '/fluː/', m: 'influenza, a contagious viral infection', hi: 'फ़्लू / संक्रामक ज़ुकाम', es: 'gripe / influenza', fr: 'grippe', de: 'Grippe', pt: 'gripe', zh: '流行性感冒 / 流感', ar: 'إنفلونزا', ja: 'インフルエンザ', ru: 'грипп', ex: 'He caught the flu and stayed in bed for three days.', exHi: 'उसे फ्लू हो गया और वह तीन दिनों तक बिस्तर पर रहा।', exEs: 'Él contrajo la gripe y se quedó en cama durante tres días.', ic: '🤒' },
    { w: 'bandage', p: '/ˈbæn.dɪdʒ/', m: 'a strip of material used to bind up a wound', hi: 'पट्टी / बैंडेज', es: 'venda / curita', fr: 'pansement / bandage', de: 'Verband / Pflaster', pt: 'curativo / atadura', zh: '绷带', ar: 'ضمادة', ja: '包帯 / 絆創膏', ru: 'бинт / повязка', ex: 'Put a clean bandage on the small cut.', exHi: 'छोटे घाव पर एक साफ पट्टी बांधें।', exEs: 'Coloque un vendaje limpio sobre el pequeño corte.', ic: '🩹' },
    { w: 'ointment', p: '/ˈɔɪnt.mənt/', m: 'a smooth oily substance rubbed on the skin for healing', hi: 'मलहम / ऑइंटमेंट', es: 'pomada / ungüento', fr: 'pommade / onguent', de: 'Salbe', pt: 'pomada', zh: '药膏', ar: 'مرهم', ja: '軟膏 / 塗り薬', ru: 'мазь', ex: 'Apply this soothing ointment to the rash.', exHi: 'दाने पर यह सुखदायक मलहम लगाएं।', exEs: 'Aplique esta pomada calmante sobre la erupción.', ic: '🧴' },
    { w: 'rest', p: '/rest/', m: 'to relax or sleep in order to recover health and strength', hi: 'आराम / आराम करना', es: 'descanso / descansar', fr: 'repos / se reposer', de: 'Ruhe / ausruhen', pt: 'descanso / descansar', zh: '休息', ar: 'راحة / يستريح', ja: '休養 / 休む', ru: 'отдых / отдыхать', ex: 'The best cure is lots of fluids and plenty of rest.', exHi: 'सबसे अच्छा इलाज बहुत सारे तरल पदार्थ और भरपूर आराम है।', exEs: 'La mejor cura son muchos líquidos y mucho descanso.', ic: '🛌' }
  ],
  chunks: [
    { phrase: 'I have a sore throat', meaning: 'Reporting pain when swallowing', hi: 'मेरे गले में खराश है', es: 'Tengo dolor de garganta', fr: 'J\'ai mal à la gorge', de: 'Ich habe Halsschmerzen', pt: 'Estou com dor de garganta', zh: '我喉咙痛', ar: 'عندي التهاب في الحلق', ja: '喉が痛いです', ru: 'У меня болит горло', note: 'Essential symptom expression.', ic: '🧣' },
    { phrase: 'I have a headache', meaning: 'Reporting head pain', hi: 'मुझे सिरदर्द है', es: 'Tengo dolor de cabeza', fr: 'J\'ai mal à la tête', de: 'Ich habe Kopfschmerzen', pt: 'Estou com dor de cabeça', zh: '我头痛', ar: 'عندي صداع', ja: '頭が痛いです', ru: 'У меня болит голова', note: 'Standard ache formula.', ic: '🤕' },
    { phrase: 'How often should I take this?', meaning: 'Asking about medication schedule', hi: 'मुझे इसे कितनी बार लेना चाहिए?', es: '¿Con qué frecuencia debo tomar esto?', fr: 'À quelle fréquence dois-je prendre ceci ?', de: 'Wie oft sollte ich das einnehmen?', pt: 'Com que frequência devo tomar isso?', zh: '我应该多久吃一次这个？', ar: 'كم مرة يجب أن أتناول هذا؟', ja: 'どのくらいの頻度でこれを服用すべきですか？', ru: 'Как часто мне следует принимать это?', note: 'Dosage frequency question.', ic: '⏰' },
    { phrase: 'take after meals', meaning: 'consuming medicine following food', hi: 'भोजन के बाद लेना', es: 'tomar después de las comidas', fr: 'prendre après les repas', de: 'nach den Mahlzeiten einnehmen', pt: 'tomar após as refeições', zh: '饭后服用', ar: 'تناول بعد الوجبات', ja: '食後に服用する', ru: 'принимать после еды', note: 'Common prescription direction.', ic: '🍽️' },
    { phrase: 'over-the-counter medicine', meaning: 'drugs sold without requiring a doctor\'s prescription', hi: 'बिना पर्चे की दवा', es: 'medicamento sin receta', fr: 'médicament en vente libre', de: 'rezeptfreies Medikament', pt: 'medicamento de venda livre', zh: '非处方药', ar: 'دواء بدون وصفة طبية', ja: '市販薬 / OTC医薬品', ru: 'безрецептурное лекарство', note: 'Pharmacy category term.', ic: '💊' },
    { phrase: 'feel dizzy', meaning: 'experiencing unsteadiness or spinning', hi: 'चक्कर महसूस होना', es: 'sentirse mareado', fr: 'avoir des vertiges', de: 'sich schwindelig fühlen', pt: 'sentir tontura', zh: '感到头晕', ar: 'الشعور بالدوار', ja: 'めまいがする', ru: 'чувствовать головокружение', note: 'Physical sensation phrase.', ic: '💫' },
    { phrase: 'catch a cold', meaning: 'to become infected with a mild viral respiratory illness', hi: 'ज़ुकाम होना / सर्दी लगना', es: 'resfriarse / coger un resfriado', fr: 'attraper un rhume', de: 'sich erkälten', pt: 'pegar um resfriado', zh: '感冒', ar: 'الإصابة بنزلة برد', ja: '風邪をひく', ru: 'простудиться', note: 'Common illness idiom.', ic: '🤧' },
    { phrase: 'drink plenty of fluids', meaning: 'consuming lots of water, tea, or broth for recovery', hi: 'खूब सारे तरल पदार्थ पीना', es: 'beber abundantes líquidos', fr: 'boire beaucoup de liquides', de: 'viel Flüssigkeit trinken', pt: 'beber bastante líquido', zh: '多喝水 / 多补充水分', ar: 'شرب الكثير من السوائل', ja: '水分をたくさん摂る', ru: 'пить много жидкости', note: 'Standard medical health advice.', ic: '💧' }
  ],
  grammar: {
    title: 'Describing Aches & Pains with "have a + ache/pain" and Modal "should" for Medical Advice',
    concept: 'Using "have a headache / sore throat / cough" to state symptoms and "should + base verb" for instructions and advice.',
    patterns: [
      {
        title: 'Subject + have / has + a + [Ache / Symptom]',
        structure: 'I have a headache / sore throat / fever / stomachache',
        rule: 'Use "have a" before common countable pain terms (headache, stomachache, cold).',
        examples: [
          { en: 'I have a sore throat and a dry cough.', hi: 'मेरे गले में खराश और सूखी खांसी है।', es: 'Tengo dolor de garganta y tos seca.' },
          { en: 'She has a mild fever this morning.', hi: 'आज सुबह उसे हल्का बुखार है।', es: 'Ella tiene un poco de fiebre esta mañana.' }
        ]
      },
      {
        title: 'Modal "should" for Advice & Instructions: should + base verb',
        structure: 'You should take this tablet / You should rest / How often should I take it?',
        rule: 'Use "should" + base verb to give and ask for health recommendations.',
        examples: [
          { en: 'You should take one tablet every eight hours with water.', hi: 'आपको पानी के साथ हर आठ घंटे में एक गोली लेनी चाहिए।', es: 'Debe tomar una pastilla cada ocho horas con agua.' },
          { en: 'Should I take this medicine before or after meals?', hi: 'क्या मुझे यह दवा भोजन से पहले लेनी चाहिए या बाद में?', es: '¿Debo tomar este medicamento antes o después de las comidas?' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'I have headache.', cor: 'I have a headache.', exp: 'Aches like headache and stomachache require the indefinite article "a".', hi: '"Headache" से पहले आर्टिकल "a" का प्रयोग करें।', es: '"Headache" lleva el artículo "a" (I have a headache).' },
    { inc: 'How many times I should take this?', cor: 'How often should I take this?', exp: 'Invert auxiliary "should" before subject "I" in question form.', hi: 'प्रश्न में "should" को विषय (I) से पहले रखें।', es: 'Invierte el orden: "How often should I take this?".' },
    { inc: 'You should to rest in bed.', cor: 'You should rest in bed.', exp: 'Modal "should" is followed by the base verb without "to".', hi: '"Should" के बाद "to" का प्रयोग न करें।', es: '"Should" va seguido del verbo base sin "to".' },
    { inc: 'I feel myself dizzy.', cor: 'I feel dizzy.', exp: 'Do not use reflexive pronouns with sense verbs like "feel".', hi: '"Feel" के बाद रिफ्लेक्सिव प्रोनाउन का प्रयोग न करें।', es: 'No uses pronombres reflexivos con "feel" (I feel dizzy).' },
    { inc: 'Take this tablet on every four hours.', cor: 'Take this tablet every four hours.', exp: 'Do not add the preposition "on" before "every four hours".', hi: '"Every four hours" से पहले "on" न लगाएं।', es: 'No uses "on" antes de "every four hours".' }
  ],
  dialogues: [
    {
      title: 'Consulting the Pharmacist',
      context: 'Michael visits a local pharmacy to ask for cold and flu medicine.',
      charA: { name: 'Pharmacist', av: '👨‍⚕️', role: 'Pharmacist' },
      charB: { name: 'Michael', av: '👨', role: 'Customer' },
      turns: [
        { spk: 'Pharmacist', text: 'Hello! How can I help you today?', hi: 'नमस्ते! आज मैं आपकी क्या मदद कर सकता हूँ?', es: '¡Hola! ¿En qué puedo ayudarle hoy?' },
        { spk: 'Michael', text: 'Good morning. I have a sore throat, a dry cough, and a mild headache since yesterday.', hi: 'शुभ प्रभात। मुझे कल से गले में खराश, सूखी खांसी और हल्का सिरदर्द है।', es: 'Buenos días. Tengo dolor de garganta, tos seca y un leve dolor de cabeza desde ayer.' },
        { spk: 'Pharmacist', text: 'I see. Do you have any fever or allergies to medications?', hi: 'समझ गया। क्या आपको बुखार है या दवाओं से कोई एलर्जी है?', es: 'Ya veo. ¿Tiene fiebre o alguna alergia a medicamentos?' },
        { spk: 'Michael', text: 'No fever and no allergies. What do you recommend?', hi: 'कोई बुखार नहीं और कोई एलर्जी नहीं है। आप क्या सलाह देते हैं?', es: 'Sin fiebre y sin alergias. ¿Qué me recomienda?' },
        { spk: 'Pharmacist', text: 'This soothing cough syrup and these herbal throat lozenges will help. Take two teaspoons after meals.', hi: 'यह सुखदायक कफ सिरप और ये हर्बल गले की गोलियां मदद करेंगी। भोजन के बाद दो चम्मच लें।', es: 'Este jarabe para la tos y estas pastillas para la garganta le ayudarán. Tome dos cucharaditas después de las comidas.' }
      ]
    },
    {
      title: 'Clarifying Dosage Instructions',
      context: 'Michael confirms the frequency and side effects of the syrup.',
      charA: { name: 'Michael', av: '👨', role: 'Customer' },
      charB: { name: 'Pharmacist', av: '👨‍⚕️', role: 'Pharmacist' },
      turns: [
        { spk: 'Michael', text: 'How often should I take the syrup throughout the day?', hi: 'मुझे दिन भर में कितनी बार सिरप लेना चाहिए?', es: '¿Con qué frecuencia debo tomar el jarabe a lo largo del día?' },
        { spk: 'Pharmacist', text: 'Take it every six to eight hours. Does this make you feel drowsy? No, this formula is non-drowsy.', hi: 'इसे हर छह से आठ घंटे में लें। क्या इससे आपको नींद आएगी? नहीं, यह फॉर्मूला नींद नहीं लाता।', es: 'Tómelo cada seis a ocho horas. ¿Le dará sueño? No, esta fórmula no produce somnolencia.' },
        { spk: 'Michael', text: 'That is great because I need to work today. Thank you so much!', hi: 'यह बहुत बढ़िया है क्योंकि मुझे आज काम करना है। बहुत-बहुत धन्यवाद!', es: 'Eso es genial porque tengo que trabajar hoy. ¡Muchas gracias!' },
        { spk: 'Pharmacist', text: 'You are welcome. Drink plenty of water and rest well!', hi: 'आपका स्वागत है। खूब पानी पिएं और अच्छे से आराम करें!', es: 'De nada. ¡Beba mucha agua y descanse bien!' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u05_l67_p1', lessonId: 'lesson_a1_5_67', stage: 8, type: 'multiple_choice', prompt: 'Choose the correct sentence to describe head pain:', options: [{ id: 'o1', text: 'I have a headache.', isCorrect: true }, { id: 'o2', text: 'I am headache.', isCorrect: false }, { id: 'o3', text: 'I have the headache in my head.', isCorrect: false }] },
    { id: 'ex_u05_l67_p2', lessonId: 'lesson_a1_5_67', stage: 8, type: 'fill_blank', prompt: 'Complete the sentence with the modal verb for advice:', sentenceTemplate: 'You ___ drink plenty of fluids and rest.', sourceSentence: 'You ___ drink plenty of fluids and rest.', options: [{ id: 'o1', text: 'should', isCorrect: true }, { id: 'o2', text: 'should to', isCorrect: false }, { id: 'o3', text: 'are should', isCorrect: false }] },
    { id: 'ex_u05_l67_p3', lessonId: 'lesson_a1_5_67', stage: 8, type: 'word_ordering', prompt: 'Arrange the words to form a dosage question:', wordBank: ['How', 'often', 'should', 'I', 'take', 'this', 'tablet?'], targetSentence: 'How often should I take this tablet?' },
    { id: 'ex_u05_l67_p4', lessonId: 'lesson_a1_5_67', stage: 8, type: 'match_pairs', prompt: 'Match health terms with their descriptions:', pairs: [{ left: 'sore throat', right: 'pain when swallowing' }, { left: 'fever', right: 'high body temperature' }, { left: 'dosage', right: 'recommended quantity and timing' }, { left: 'side effect', right: 'secondary bodily reaction' }] },
    { id: 'ex_u05_l67_p5', lessonId: 'lesson_a1_5_67', stage: 8, type: 'error_correction', prompt: 'Identify the corrected sentence:', sentenceTemplate: 'You should to take this tablet after meals.', options: [{ id: 'o1', text: 'You should take this tablet after meals.', isCorrect: true }, { id: 'o2', text: 'You should taking this tablet after meals.', isCorrect: false }, { id: 'o3', text: 'You should took this tablet after meals.', isCorrect: false }] },
    { id: 'ex_u05_l67_p6', lessonId: 'lesson_a1_5_67', stage: 9, type: 'listening', prompt: 'Listen and choose the sentence you hear:', audioText: 'Take one tablet twice a day with a glass of water.', options: [{ id: 'o1', text: 'Take one tablet twice a day with a glass of water.', isCorrect: true }, { id: 'o2', text: 'Take two tablets three times a day with breakfast.', isCorrect: false }] },
    { id: 'ex_u05_l67_p7', lessonId: 'lesson_a1_5_67', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'I have a sore throat and a dry cough.', targetSentence: 'I have a sore throat and a dry cough.' },
    { id: 'ex_u05_l67_p8', lessonId: 'lesson_a1_5_67', stage: 10, type: 'multiple_choice', prompt: 'Which question asks if a medicine requires a doctor\'s prescription?', options: [{ id: 'o1', text: 'Do I need a prescription for this medicine?', isCorrect: true }, { id: 'o2', text: 'Where does prescription sleep?', isCorrect: false }, { id: 'o3', text: 'Is prescription eating tablets?', isCorrect: false }] },
    { id: 'ex_u05_l67_p9', lessonId: 'lesson_a1_5_67', stage: 11, type: 'dialogue_completion', prompt: 'Complete the dialogue: "How often should I take this cough syrup?"', options: [{ id: 'o1', text: 'Take two teaspoons every six hours after meals.', isCorrect: true }, { id: 'o2', text: 'I went to the supermarket yesterday.', isCorrect: false }, { id: 'o3', text: 'The bus arrives at four.', isCorrect: false }] },
    { id: 'ex_u05_l67_p10', lessonId: 'lesson_a1_5_67', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'I have a stomachache and I feel slightly dizzy this morning.', audioText: 'I have a stomachache and I feel slightly dizzy this morning.' },
    { id: 'ex_u05_l67_p11', lessonId: 'lesson_a1_5_67', stage: 13, type: 'translation', prompt: 'Translate: "मुझे यह दवा भोजन के बाद लेनी चाहिए।" / "Debo tomar este medicamento después de las comidas."', targetSentence: 'I should take this medicine after meals.' },
    { id: 'ex_u05_l67_p12', lessonId: 'lesson_a1_5_67', stage: 14, type: 'multiple_choice', prompt: 'What word describes medicine that can be purchased freely without a doctor\'s script?', options: [{ id: 'o1', text: 'over-the-counter', isCorrect: true }, { id: 'o2', text: 'round-trip', isCorrect: false }, { id: 'o3', text: 'gluten-free', isCorrect: false }] },
    { id: 'ex_u05_l67_p13', lessonId: 'lesson_a1_5_67', stage: 14, type: 'fill_blank', prompt: 'Complete the sentence: "Please put a clean ___ on your finger cut."', sentenceTemplate: 'Please put a clean ___ on your finger cut.', sourceSentence: 'Please put a clean ___ on your finger cut.', options: [{ id: 'o1', text: 'bandage', isCorrect: true }, { id: 'o2', text: 'ticket', isCorrect: false }, { id: 'o3', text: 'keycard', isCorrect: false }] },
    { id: 'ex_u05_l67_p14', lessonId: 'lesson_a1_5_67', stage: 14, type: 'word_ordering', prompt: 'Arrange the words to give healthy advice:', wordBank: ['You', 'should', 'drink', 'plenty', 'of', 'warm', 'fluids.'], targetSentence: 'You should drink plenty of warm fluids.' },
    { id: 'ex_u05_l67_p15', lessonId: 'lesson_a1_5_67', stage: 14, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'The pharmacist recommended taking one painkiller tablet every eight hours.', audioText: 'The pharmacist recommended taking one painkiller tablet every eight hours.' }
  ],
  review: [
    { id: 'ex_u05_l67_r1', lessonId: 'lesson_a1_5_67', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Choose the correct dietary phrase:', options: [{ id: 'o1', text: 'I am allergic to peanuts.', isCorrect: true }, { id: 'o2', text: 'I am allergy to peanuts.', isCorrect: false }, { id: 'o3', text: 'I allergic with peanuts.', isCorrect: false }] },
    { id: 'ex_u05_l67_r2', lessonId: 'lesson_a1_5_67', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete: "Could I have the salad dressing ___ the side?"', sentenceTemplate: 'Could I have the salad dressing ___ the side?', sourceSentence: 'Could I have the salad dressing ___ the side?', options: [{ id: 'o1', text: 'on', isCorrect: true }, { id: 'o2', text: 'in', isCorrect: false }, { id: 'o3', text: 'at', isCorrect: false }] },
    { id: 'ex_u05_l67_r3', lessonId: 'lesson_a1_5_67', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['Our', 'hotel', 'room', 'is', 'on', 'the', 'fifth', 'floor.'], targetSentence: 'Our hotel room is on the fifth floor.' },
    { id: 'ex_u05_l67_r4', lessonId: 'lesson_a1_5_67', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match health & dining terms:', pairs: [{ left: 'prescription', right: 'doctor authorization' }, { left: 'vegetarian', right: 'meat-free diet' }, { left: 'keycard', right: 'hotel room key' }, { left: 'painkiller', right: 'relieves pain' }] },
    { id: 'ex_u05_l67_r5', lessonId: 'lesson_a1_5_67', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "मुझे सिरदर्द और हल्का बुखार है।"', targetSentence: 'I have a headache and a mild fever.' }
  ],
  assessment: [
    { id: 'ex_u05_l67_a1', lessonId: 'lesson_a1_5_67', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the grammatically correct symptom description:', options: [{ id: 'o1', text: 'I have a sore throat and should rest today.', isCorrect: true }, { id: 'o2', text: 'I am sore throat and should to rest today.', isCorrect: false }, { id: 'o3', text: 'I have sore throat with fever on bed.', isCorrect: false }] },
    { id: 'ex_u05_l67_a2', lessonId: 'lesson_a1_5_67', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete: "Do not exceed the recommended ___ on the medicine bottle."', sentenceTemplate: 'Do not exceed the recommended ___ on the medicine bottle.', sourceSentence: 'Do not exceed the recommended ___ on the medicine bottle.', options: [{ id: 'o1', text: 'dosage', isCorrect: true }, { id: 'o2', text: 'platform', isCorrect: false }, { id: 'o3', text: 'luggage', isCorrect: false }] },
    { id: 'ex_u05_l67_a3', lessonId: 'lesson_a1_5_67', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words correctly:', wordBank: ['How', 'often', 'should', 'I', 'apply', 'this', 'ointment', 'daily?'], targetSentence: 'How often should I apply this ointment daily?' },
    { id: 'ex_u05_l67_a4', lessonId: 'lesson_a1_5_67', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Choose the best medical response: "Does this allergy medicine cause any side effects?"', options: [{ id: 'o1', text: 'It might cause mild drowsiness, so do not drive after taking it.', isCorrect: true }, { id: 'o2', text: 'Yes, it costs five dollars.', isCorrect: false }, { id: 'o3', text: 'I like blue shirts.', isCorrect: false }] },
    { id: 'ex_u05_l67_a5', lessonId: 'lesson_a1_5_67', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this complete pharmacy advice sentence:', targetSentence: 'You should take one tablet with food every twelve hours and drink plenty of water.', audioText: 'You should take one tablet with food every twelve hours and drink plenty of water.' }
  ]
};

// =========================================================================
// LESSON 68: Housing, Renting an Apartment & Household Repairs
// =========================================================================
export const CONFIG_68: LessonConfig = {
  num: 68,
  title: 'Housing, Renting an Apartment & Household Repairs',
  icon: '🏡',
  estMin: 25,
  objTitle: 'Inquire about apartments for rent and report household maintenance issues',
  objDesc: 'Learn housing vocabulary (rent, lease, landlord, tenant, utilities, deposit), describe apartment features, and report maintenance problems (leaky faucet, broken heater, power outage).',
  objHi: 'किराए के मकान के बारे में पूछताछ करना और घर की मरम्मत की समस्याओं की रिपोर्ट करना सीखें।',
  objEs: 'Aprende a consultar sobre alquileres de apartamentos y reportar problemas de mantenimiento doméstico.',
  canDo: [
    'I can ask a landlord about apartment rent, security deposits, and utilities included.',
    'I can describe apartment rooms, features, and lease duration.',
    'I can report household maintenance problems such as a leaking pipe or broken heater.'
  ],
  canDoHi: [
    'मैं मकान मालिक से किराए, सुरक्षा जमा और शामिल उपयोगिताओं के बारे में पूछ सकता हूँ।',
    'मैं अपार्टमेंट के कमरों, सुविधाओं और पट्टे की अवधि का वर्णन कर सकता हूँ।',
    'मैं घर की मरम्मत की समस्याओं जैसे रिसते पाइप या खराब हीटर की रिपोर्ट कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo preguntar a un arrendador sobre el alquiler, depósito de garantía y servicios incluidos.',
    'Puedo describir las habitaciones, características y duración del contrato de un apartamento.',
    'Puedo reportar averías domésticas como una tubería con fugas o un calentador roto.'
  ],
  vocab: [
    { w: 'apartment', p: '/əˈpɑːt.mənt/', m: 'a suite of rooms forming one residence in a building', hi: 'अपार्टमेंट / फ़्लैट', es: 'apartamento / piso', fr: 'appartement', de: 'Wohnung / Apartment', pt: 'apartamento', zh: '公寓', ar: 'شقة', ja: 'アパート / マンション', ru: 'квартира', ex: 'I am looking for a two-bedroom apartment near the subway.', exHi: 'मैं सबवे के पास दो बेडरूम वाले अपार्टमेंट की तलाश कर रहा हूँ।', exEs: 'Estoy buscando un apartamento de dos habitaciones cerca del metro.', ic: '🏢' },
    { w: 'rent', p: '/rent/', m: 'a regular payment made for the use of property', hi: 'किराया / किराए पर लेना', es: 'alquiler / renta', fr: 'loyer / louer', de: 'Miete / mieten', pt: 'aluguel / alugar', zh: '租金 / 租房', ar: 'إيجار / يستأجر', ja: '家賃 / 賃貸する', ru: 'аренда / арендная плата', ex: 'The monthly rent is eight hundred dollars.', exHi: 'मासिक किराया आठ सौ डॉलर है।', exEs: 'El alquiler mensual es de ochocientos dólares.', ic: '💵' },
    { w: 'lease', p: '/liːs/', m: 'a contract by which one party conveys property to another for a specified time', hi: 'पट्टा / लीज अनुबंध', es: 'contrato de arrendamiento / contrato de alquiler', fr: 'bail', de: 'Mietvertrag', pt: 'contrato de locação', zh: '租约', ar: 'عقد إيجار', ja: '賃貸借契約', ru: 'договор аренды', ex: 'We signed a one-year lease yesterday.', exHi: 'हमने कल एक साल के लीज अनुबंध पर हस्ताक्षर किए।', exEs: 'Firmamos un contrato de alquiler de un año ayer.', ic: '📑' },
    { w: 'landlord', p: '/ˈlænd.lɔːd/', m: 'a person who rents out land, a building, or an accommodation', hi: 'मकान मालिक', es: 'arrendador / propietario / casero', fr: 'propriétaire', de: 'Vermieter', pt: 'proprietário / senhorio', zh: '房东', ar: 'صاحب العقار / المؤجر', ja: '家主 / 大家さん', ru: 'арендодатель / домовладелец', ex: 'Our landlord lives on the ground floor.', exHi: 'हमारे मकान मालिक भूतल पर रहते हैं।', exEs: 'Nuestro arrendador vive en la planta baja.', ic: '👨‍💼' },
    { w: 'tenant', p: '/ˈten.ənt/', m: 'a person who occupies land or property rented from a landlord', hi: 'किराएदार', es: 'inquilino / arrendatario', fr: 'locataire', de: 'Mieter', pt: 'inquilino', zh: '租户 / 房客', ar: 'مستأجر', ja: '借家人 / 入居者', ru: 'арендатор / жилец', ex: 'The previous tenant moved out last week.', exHi: 'पिछला किराएदार पिछले सप्ताह चला गया।', exEs: 'El inquilino anterior se mudó la semana pasada.', ic: '👥' },
    { w: 'deposit', p: '/dɪˈpɒz.ɪt/', m: 'a sum of money placed into holding as security for property condition', hi: 'जमानत राशि / सिक्योरिटी डिपॉजिट', es: 'depósito / fianza', fr: 'dépôt de garantie / caution', de: 'Kaution', pt: 'depósito caução', zh: '押金', ar: 'تأمين / عربون', ja: '敷金 / 預かり金', ru: 'залог / депозит', ex: 'The security deposit is equal to one month\'s rent.', exHi: 'सुरक्षा जमा राशि एक महीने के किराए के बराबर है।', exEs: 'El depósito de seguridad equivale a un mes de alquiler.', ic: '💰' },
    { w: 'utilities', p: '/juːˈtɪl.ə.tiz/', m: 'services such as electricity, gas, water, and heating', hi: 'उपयोगिताएं (बिजली, पानी, गैस)', es: 'servicios públicos / suministros', fr: 'charges (eau, électricité, gaz)', de: 'Nebenkosten (Wasser, Strom, Gas)', pt: 'contas de consumo (água, luz, gás)', zh: '水电燃气杂费', ar: 'المرافق (الكهرباء، الماء، الغاز)', ja: '公共料金（光熱費・水道代）', ru: 'коммунальные услуги', ex: 'Are water and heating utilities included in the rent?', exHi: 'क्या पानी और हीटिंग की उपयोगिताएं किराए में शामिल हैं?', exEs: '¿Los servicios de agua y calefacción están incluidos en el alquiler?', ic: '💡' },
    { w: 'maintenance', p: '/ˈmeɪn.tən.əns/', m: 'the work of keeping building facilities in good condition', hi: 'रखरखाव / मेंटेनेंस', es: 'mantenimiento', fr: 'entretien / maintenance', de: 'Instandhaltung / Wartung', pt: 'manutenção', zh: '维修 / 保养', ar: 'صيانة', ja: '維持管理 / メンテナンス', ru: 'обслуживание / ремонт', ex: 'Contact building maintenance to fix the heater.', exHi: 'हीटर ठीक करने के लिए बिल्डिंग मेंटेनेंस से संपर्क करें।', exEs: 'Comuníquese con mantenimiento del edificio para arreglar el calentador.', ic: '🛠️' },
    { w: 'leak', p: '/liːk/', m: 'an accidental escape of water or fluid through a hole or crack', hi: 'रिसाव / लीक होना', es: 'fuga / gotera / escape', fr: 'fuite', de: 'Leck / undichte Stelle', pt: 'vazamento', zh: '泄漏 / 漏水', ar: 'تسريب', ja: '漏れ / 水漏れ', ru: 'утечка / протечка', ex: 'There is a water leak under the kitchen sink.', exHi: 'रसोई के सिंक के नीचे पानी का रिसाव हो रहा है।', exEs: 'Hay una fuga de agua debajo del fregadero de la cocina.', ic: '💧' },
    { w: 'faucet', p: '/ˈfɔː.sɪt/', m: 'a device by which a flow of liquid or water is regulated (tap)', hi: 'नल / टोंटी', es: 'grifo / canilla', fr: 'robinet', de: 'Wasserhahn', pt: 'torneira', zh: '水龙头', ar: 'صنبور', ja: '蛇口', ru: 'водопроводный кран', ex: 'The bathroom faucet is dripping constantly.', exHi: 'बाथरूम का नल लगातार टपक रहा है।', exEs: 'El grifo del baño está goteando constantemente.', ic: '🚰' },
    { w: 'heater', p: '/ˈhiː.tər/', m: 'an apparatus for warming air or water', hi: 'हीटर', es: 'calentador / calefacción', fr: 'chauffage / radiateur', de: 'Heizung / Heizgerät', pt: 'aquecedor', zh: '暖气 / 加热器', ar: 'مدفأة / سخان', ja: '暖房器具 / ヒーター', ru: 'обогреватель / отопление', ex: 'The central heater stopped working last night.', exHi: 'सेंट्रल हीटर ने कल रात काम करना बंद कर दिया।', exEs: 'La calefacción central dejó de funcionar anoche.', ic: '🔥' },
    { w: 'air conditioner', p: '/ˈeə kənˌdɪʃ.ən.ər/', m: 'a machine that cools and dries the air in a room', hi: 'एयर कंडीशनर / एसी', es: 'aire acondicionado', fr: 'climatiseur / climatisation', de: 'Klimaanlage', pt: 'ar-condicionado', zh: '空调', ar: 'مكيف هواء', ja: 'エアコン', ru: 'кондиционер', ex: 'The air conditioner keeps the apartment cool in summer.', exHi: 'एयर कंडीशनर गर्मियों में अपार्टमेंट को ठंडा रखता है।', exEs: 'El aire acondicionado mantiene el apartamento fresco en verano.', ic: '❄️' },
    { w: 'repair', p: '/rɪˈpeər/', m: 'to fix something that is damaged or broken', hi: 'मरम्मत करना / ठीक करना', es: 'reparar / arreglar', fr: 'réparer', de: 'reparieren', pt: 'reparar / consertar', zh: '修理', ar: 'إصلاح', ja: '修理する', ru: 'ремонтировать / чинить', ex: 'The plumber came to repair the broken pipe.', exHi: 'टूटा हुआ पाइप ठीक करने प्लंबर आया।', exEs: 'El fontanero vino a reparar la tubería rota.', ic: '🔧' },
    { w: 'plumber', p: '/ˈplʌm.ər/', m: 'a person who fits and repairs pipes and water fittings', hi: 'नलसाज / प्लंबर', es: 'fontanero / plomero', fr: 'plombier', de: 'Klempner / Installateur', pt: 'encanador', zh: '水管工', ar: 'سباك', ja: '配管工', ru: 'сантехник', ex: 'We need to call a licensed plumber.', exHi: 'हमें एक लाइसेंस प्राप्त प्लंबर को बुलाना होगा।', exEs: 'Necesitamos llamar a un fontanero autorizado.', ic: '👨‍🔧' },
    { w: 'furnished', p: '/ˈfɜː.nɪʃt/', m: 'equipped with furniture and basic appliances', hi: 'सुसज्जित / फर्नीचर से युक्त', es: 'amueblado', fr: 'meublé', de: 'möbliert', pt: 'mobiliado', zh: '配备家具的', ar: 'مفروش', ja: '家具付きの', ru: 'меблированный', ex: 'Is this studio apartment fully furnished?', exHi: 'क्या यह स्टूडियो अपार्टमेंट पूरी तरह से सुसज्जित है?', exEs: '¿Este apartamento estudio está completamente amueblado?', ic: '🛋️' },
    { w: 'appliance', p: '/əˈplaɪ.əns/', m: 'a device or piece of equipment designed to perform a domestic task', hi: 'घरेलू उपकरण', es: 'electrodoméstico', fr: 'appareil électroménager', de: 'Haushaltsgerät', pt: 'eletrodoméstico', zh: '家用电器', ar: 'جهاز منزلي', ja: '電化製品 / 家電', ru: 'бытовой прибор / техника', ex: 'The kitchen appliances include a stove and refrigerator.', exHi: 'रसोई के उपकरणों में एक स्टोव और रेफ्रिजरेटर शामिल हैं।', exEs: 'Los electrodomésticos de la cocina incluyen estufa y refrigerador.', ic: '🍳' },
    { w: 'balcony', p: '/ˈbæl.kə.ni/', m: 'an outdoor platform projecting from a wall', hi: 'बालकनी', es: 'balcón', fr: 'balcon', de: 'Balkon', pt: 'sacada / varanda', zh: '阳台', ar: 'شرفة', ja: 'ベランダ / バルコニー', ru: 'балкон', ex: 'The apartment has a lovely sunny balcony.', exHi: 'अपार्टमेंट में एक प्यारी धूप वाली बालकनी है।', exEs: 'El apartamento tiene un hermoso balcón soleado.', ic: '🌅' },
    { w: 'neighborhood', p: '/ˈneɪ.bə.hʊd/', m: 'the area surrounding someone\'s home', hi: 'पड़ोस / आस-पड़ोस', es: 'barrio / vecindario', fr: 'quartier / voisinage', de: 'Nachbarschaft / Viertel', pt: 'bairro / vizinhança', zh: '社区 / 街区', ar: 'حي / مجاورة', ja: '近所 / 地域', ru: 'район / окрестности', ex: 'This is a quiet and safe neighborhood.', exHi: 'यह एक शांत और सुरक्षित पड़ोस है।', exEs: 'Este es un barrio tranquilo y seguro.', ic: '🏘️' },
    { w: 'subway', p: '/ˈsʌb.weɪ/', m: 'an underground electric railway system', hi: 'सबवे / मेट्रो', es: 'metro / subterráneo', fr: 'métro', de: 'U-Bahn', pt: 'metrô', zh: '地铁', ar: 'مترو الأنفاق', ja: '地下鉄', ru: 'метро', ex: 'It is a five-minute walk to the nearest subway station.', exHi: 'निकटतम सबवे स्टेशन तक पाँच मिनट की पैदल दूरी है।', exEs: 'Está a cinco minutos a pie de la estación de metro más cercana.', ic: '🚇' },
    { w: 'broken', p: '/ˈbrəʊ.kən/', m: 'damaged and no longer working properly', hi: 'टूटा हुआ / खराब', es: 'roto / averiado', fr: 'cassé / en panne', de: 'kaputt / defekt', pt: 'quebrado / estragado', zh: '坏了的', ar: 'مكسور / معطل', ja: '壊れた / 故障した', ru: 'сломанный', ex: 'The lock on the front door is broken.', exHi: 'सामने के दरवाजे का ताला टूटा हुआ है।', exEs: 'La cerradura de la puerta principal está rota.', ic: '🔒' }
  ],
  chunks: [
    { phrase: 'looking for an apartment', meaning: 'searching for a residential rental', hi: 'अपार्टमेंट की तलाश में', es: 'buscando un apartamento', fr: 'à la recherche d\'un appartement', de: 'auf der Suche nach einer Wohnung', pt: 'procurando um apartamento', zh: '找公寓', ar: 'البحث عن شقة', ja: 'アパートを探している', ru: 'искать квартиру', note: 'Housing search opening.', ic: '🔍' },
    { phrase: 'Are utilities included?', meaning: 'Asking if water/electricity bills are in the rent', hi: 'क्या उपयोगिताएं शामिल हैं?', es: '¿Los servicios están incluidos?', fr: 'Les charges sont-elles incluses ?', de: 'Sind die Nebenkosten inbegriffen?', pt: 'As contas estão incluídas?', zh: '包含水电费吗？', ar: 'هل المرافق مشمولة؟', ja: '光熱費は含まれていますか？', ru: 'Коммунальные услуги включены?', note: 'Essential rental question.', ic: '💡' },
    { phrase: 'security deposit', meaning: 'advance money held against property damage', hi: 'सुरक्षा जमा राशि', es: 'depósito de garantía / fianza', fr: 'caution / dépôt de garantie', de: 'Sicherheitskaution', pt: 'depósito caução', zh: '押金 / 保证金', ar: 'مبلغ التأمين', ja: '保証金 / 敷金', ru: 'гарантийный депозит', note: 'Lease financial requirement.', ic: '💰' },
    { phrase: 'sign a one-year lease', meaning: 'agreeing formally to rent for twelve months', hi: 'एक साल के लीज अनुबंध पर हस्ताक्षर करना', es: 'firmar un contrato de arrendamiento de un año', fr: 'signer un bail d\'un an', de: 'einen einjährigen Mietvertrag unterschreiben', pt: 'assinar um contrato de um ano', zh: '签一年的租约', ar: 'توقيع عقد إيجار لمدة عام', ja: '1年間の賃貸契約を結ぶ', ru: 'подписать договор аренды на год', note: 'Rental agreement term.', ic: '📑' },
    { phrase: 'The faucet is leaking', meaning: 'Reporting dripping water fixture', hi: 'नल से पानी टपक रहा है', es: 'El grifo tiene una fuga / gotea', fr: 'Le robinet fuit', de: 'Der Wasserhahn tropft / ist undicht', pt: 'A torneira está vazando', zh: '水龙头在漏水', ar: 'الصنبور يسرب ماء', ja: '蛇口から水が漏れています', ru: 'Кран протекает', note: 'Maintenance defect description.', ic: '🚰' },
    { phrase: 'The heater is not working', meaning: 'Reporting heating failure', hi: 'हीटर काम नहीं कर रहा है', es: 'La calefacción no funciona', fr: 'Le chauffage ne fonctionne pas', de: 'Die Heizung funktioniert nicht', pt: 'O aquecedor não está funcionando', zh: '暖气不工作了', ar: 'المدفأة لا تعمل', ja: '暖房が動いていません', ru: 'Отопление не работает', note: 'Appliance problem report.', ic: '❄️' },
    { phrase: 'send someone to fix it', meaning: 'arranging a technician or repair person', hi: 'इसे ठीक करने के लिए किसी को भेजना', es: 'enviar a alguien a arreglarlo', fr: 'envoyer quelqu\'un pour réparer', de: 'jemanden schicken, um es zu reparieren', pt: 'enviar alguém para consertar', zh: '派人来修理', ar: 'إرسال شخص لإصلاحه', ja: '修理の人を手配する', ru: 'прислать мастера починить это', note: 'Landlord repair promise.', ic: '🛠️' },
    { phrase: 'fully furnished', meaning: 'containing all essential furniture and appliances', hi: 'पूरी तरह सुसज्जित', es: 'completamente amueblado', fr: 'entièrement meublé', de: 'voll möbliert', pt: 'totalmente mobiliado', zh: '家具齐全', ar: 'مفروش بالكامل', ja: '家具付き', ru: 'полностью меблированный', note: 'Apartment condition description.', ic: '🛋️' }
  ],
  grammar: {
    title: 'There is / There are for Housing Features & Present Continuous for Malfunctions (is leaking / is dripping / is not working)',
    concept: 'Using existential "there is/are" to describe apartment layout and present continuous for active maintenance issues.',
    patterns: [
      {
        title: 'There is / There are + Apartment Features',
        structure: 'There is a + singular noun | There are + plural nouns',
        rule: 'Use "There is" with singular items (balcony, dishwasher) and "There are" with plural items (two bedrooms).',
        examples: [
          { en: 'There is a large balcony overlooking the park.', hi: 'पार्क की ओर देखने वाली एक बड़ी बालकनी है।', es: 'Hay un gran balcón con vista al parque.' },
          { en: 'There are two spacious bedrooms and one bathroom.', hi: 'दो बड़े बेडरूम और एक बाथरूम है।', es: 'Hay dos dormitorios amplios y un baño.' }
        ]
      },
      {
        title: 'Present Continuous for Active Maintenance Issues: Subject + is/are + verb-ing',
        structure: 'The faucet is leaking / The pipe is dripping / The heater is not heating',
        rule: 'Describe immediate household defects using Present Continuous.',
        examples: [
          { en: 'The kitchen pipe is leaking water onto the floor.', hi: 'रसोई का पाइप फर्श पर पानी बहा रहा है।', es: 'La tubería de la cocina tiene una fuga de agua en el suelo.' },
          { en: 'The air conditioner is making a strange loud noise.', hi: 'एयर कंडीशनर से एक अजीब तेज़ आवाज़ आ रही है।', es: 'El aire acondicionado está haciendo un ruido extraño y fuerte.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'There are a balcony in the apartment.', cor: 'There is a balcony in the apartment.', exp: 'Use "There is" with singular nouns (a balcony).', hi: 'एकवचन संज्ञा (a balcony) के साथ "There is" का प्रयोग करें।', es: 'Usa "There is" con sustantivos en singular.' },
    { inc: 'Is utilities included in rent?', cor: 'Are utilities included in the rent?', exp: '"Utilities" is plural, so use the plural verb "are".', hi: '"Utilities" बहुवचन है, इसलिए "are" का प्रयोग करें।', es: '"Utilities" es plural, por lo que requiere "are".' },
    { inc: 'The faucet leaks right now on floor.', cor: 'The faucet is leaking right now.', exp: 'Use Present Continuous (is leaking) for an action currently in progress.', hi: 'वर्तमान में चल रहे रिसाव के लिए "is leaking" का प्रयोग करें।', es: 'Usa "is leaking" para una fuga que ocurre en este momento.' },
    { inc: 'I want that you send someone fix it.', cor: 'Could you please send someone to fix it?', exp: 'Use polite modal request "Could you please send someone to fix it?".', hi: 'विनम्रता के लिए "Could you please send someone to fix it?" का प्रयोग करें।', es: 'Usa "Could you please send someone to fix it?".' },
    { inc: 'The apartment is furnish fully.', cor: 'The apartment is fully furnished.', exp: 'Place the adverb "fully" before the adjective "furnished".', hi: '"Fully furnished" सही पद क्रम है।', es: 'El orden correcto es "fully furnished".' }
  ],
  dialogues: [
    {
      title: 'Inquiring About an Apartment Listing',
      context: 'Chloe calls a landlord about a rental listing in the downtown area.',
      charA: { name: 'Landlord', av: '👨‍💼', role: 'Property Owner' },
      charB: { name: 'Chloe', av: '👩', role: 'Prospective Tenant' },
      turns: [
        { spk: 'Landlord', text: 'Hello, City Apartments. How can I help you?', hi: 'नमस्ते, सिटी अपार्टमेंट्स। मैं आपकी क्या मदद कर सकता हूँ?', es: 'Hola, City Apartments. ¿En qué puedo ayudarle?' },
        { spk: 'Chloe', text: 'Hello! I am calling regarding the two-bedroom apartment on Maple Street. Is it still available?', hi: 'नमस्ते! मैं मेपल स्ट्रीट पर स्थित दो बेडरूम वाले अपार्टमेंट के संबंध में कॉल कर रही हूँ। क्या यह अभी भी उपलब्ध है?', es: '¡Hola! Llamo con respecto al apartamento de dos habitaciones en Maple Street. ¿Sigue disponible?' },
        { spk: 'Landlord', text: 'Yes, it is available for move-in on the first of next month. The monthly rent is nine hundred dollars.', hi: 'हाँ, यह अगले महीने की पहली तारीख से रहने के लिए उपलब्ध है। मासिक किराया नौ सौ डॉलर है।', es: 'Sí, está disponible para mudarse el primero del próximo mes. El alquiler mensual es de novecientos dólares.' },
        { spk: 'Chloe', text: 'Are utilities included in the rent, and how much is the security deposit?', hi: 'क्या उपयोगिताएं किराए में शामिल हैं, और सुरक्षा जमा राशि कितनी है?', es: '¿Los servicios están incluidos en el alquiler y cuánto es el depósito de seguridad?' },
        { spk: 'Landlord', text: 'Water and trash collection are included. The security deposit is one month\'s rent.', hi: 'पानी और कचरा संग्रह शामिल हैं। सुरक्षा जमा राशि एक महीने का किराया है।', es: 'El agua y la recolección de basura están incluidos. El depósito es de un mes de alquiler.' }
      ]
    },
    {
      title: 'Reporting a Plumbing Issue',
      context: 'Chloe calls her building manager to report a leaking pipe.',
      charA: { name: 'Chloe', av: '👩', role: 'Tenant' },
      charB: { name: 'Building Manager', av: '👨‍🔧', role: 'Maintenance' },
      turns: [
        { spk: 'Chloe', text: 'Hello, this is Chloe in apartment 3B. I am calling because the pipe under the bathroom sink is leaking water.', hi: 'नमस्ते, मैं अपार्टमेंट 3B से क्लोई बोल रही हूँ। मैं इसलिए कॉल कर रही हूँ क्योंकि बाथरूम के सिंक के नीचे का पाइप लीक हो रहा है।', es: 'Hola, habla Chloe del apartamento 3B. Llamo porque la tubería debajo del lavabo del baño tiene una fuga de agua.' },
        { spk: 'Building Manager', text: 'Oh, thank you for letting us know right away. Is water leaking onto the floor?', hi: 'ओह, हमें तुरंत बताने के लिए धन्यवाद। क्या पानी फर्श पर बह रहा है?', es: 'Oh, gracias por avisarnos de inmediato. ¿Está saliendo agua al suelo?' },
        { spk: 'Chloe', text: 'Yes, quite a bit. Could you please send a plumber as soon as possible?', hi: 'हाँ, काफी पानी आ रहा है। क्या आप कृपया जितनी जल्दी हो सके प्लंबर भेज सकते हैं?', es: 'Sí, bastante. ¿Podría enviar a un fontanero lo antes posible?' },
        { spk: 'Building Manager', text: 'I will send our licensed plumber up to your apartment in twenty minutes.', hi: 'मैं बीस मिनट में हमारे प्लंबर को आपके अपार्टमेंट में भेज दूँगा।', es: 'Enviaré a nuestro fontanero a su apartamento en veinte minutos.' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u05_l68_p1', lessonId: 'lesson_a1_5_68', stage: 8, type: 'multiple_choice', prompt: 'Select the correct existential verb: "___ two bedrooms in the new apartment."', options: [{ id: 'o1', text: 'There are', isCorrect: true }, { id: 'o2', text: 'There is', isCorrect: false }, { id: 'o3', text: 'It have', isCorrect: false }] },
    { id: 'ex_u05_l68_p2', lessonId: 'lesson_a1_5_68', stage: 8, type: 'fill_blank', prompt: 'Complete the sentence with the maintenance verb:', sentenceTemplate: 'The kitchen faucet is ___ water onto the counter.', sourceSentence: 'The kitchen faucet is ___ water onto the counter.', options: [{ id: 'o1', text: 'leaking', isCorrect: true }, { id: 'o2', text: 'leak', isCorrect: false }, { id: 'o3', text: 'leaked', isCorrect: false }] },
    { id: 'ex_u05_l68_p3', lessonId: 'lesson_a1_5_68', stage: 8, type: 'word_ordering', prompt: 'Arrange the words to ask about rental utilities:', wordBank: ['Are', 'water', 'and', 'heating', 'included', 'in', 'the', 'rent?'], targetSentence: 'Are water and heating included in the rent?' },
    { id: 'ex_u05_l68_p4', lessonId: 'lesson_a1_5_68', stage: 8, type: 'match_pairs', prompt: 'Match housing vocabulary with definitions:', pairs: [{ left: 'landlord', right: 'property owner' }, { left: 'tenant', right: 'person renting home' }, { left: 'deposit', right: 'security payment' }, { left: 'plumber', right: 'pipe repair specialist' }] },
    { id: 'ex_u05_l68_p5', lessonId: 'lesson_a1_5_68', stage: 8, type: 'error_correction', prompt: 'Identify the corrected sentence:', sentenceTemplate: 'There is two bathrooms in this apartment.', options: [{ id: 'o1', text: 'There are two bathrooms in this apartment.', isCorrect: true }, { id: 'o2', text: 'There has two bathrooms in this apartment.', isCorrect: false }, { id: 'o3', text: 'There is two bathroom in this apartment.', isCorrect: false }] },
    { id: 'ex_u05_l68_p6', lessonId: 'lesson_a1_5_68', stage: 9, type: 'listening', prompt: 'Listen and choose the sentence you hear:', audioText: 'The security deposit is equal to one month\'s rent.', options: [{ id: 'o1', text: 'The security deposit is equal to one month\'s rent.', isCorrect: true }, { id: 'o2', text: 'The security budget is equal to two months rent.', isCorrect: false }] },
    { id: 'ex_u05_l68_p7', lessonId: 'lesson_a1_5_68', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'The bathroom faucet is dripping constantly.', targetSentence: 'The bathroom faucet is dripping constantly.' },
    { id: 'ex_u05_l68_p8', lessonId: 'lesson_a1_5_68', stage: 10, type: 'multiple_choice', prompt: 'Which question asks if an apartment comes with furniture?', options: [{ id: 'o1', text: 'Is this apartment fully furnished?', isCorrect: true }, { id: 'o2', text: 'Where does apartment buy chairs?', isCorrect: false }, { id: 'o3', text: 'Why is furniture building?', isCorrect: false }] },
    { id: 'ex_u05_l68_p9', lessonId: 'lesson_a1_5_68', stage: 11, type: 'dialogue_completion', prompt: 'Complete the dialogue: "When can we move in if we sign the lease today?"', options: [{ id: 'o1', text: 'You can move in on the first of next month.', isCorrect: true }, { id: 'o2', text: 'I drank tea this morning.', isCorrect: false }, { id: 'o3', text: 'The train platform is five.', isCorrect: false }] },
    { id: 'ex_u05_l68_p10', lessonId: 'lesson_a1_5_68', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'Could you please send someone to repair the broken heater today?', audioText: 'Could you please send someone to repair the broken heater today?' },
    { id: 'ex_u05_l68_p11', lessonId: 'lesson_a1_5_68', stage: 13, type: 'translation', prompt: 'Translate: "रसोई के सिंक के नीचे पानी का रिसाव हो रहा है।" / "La tubería debajo del fregadero de la cocina tiene una fuga."', targetSentence: 'The pipe under the kitchen sink is leaking.' },
    { id: 'ex_u05_l68_p12', lessonId: 'lesson_a1_5_68', stage: 14, type: 'multiple_choice', prompt: 'What word describes the legal rental contract signed between tenant and landlord?', options: [{ id: 'o1', text: 'lease', isCorrect: true }, { id: 'o2', text: 'prescription', isCorrect: false }, { id: 'o3', text: 'keycard', isCorrect: false }] },
    { id: 'ex_u05_l68_p13', lessonId: 'lesson_a1_5_68', stage: 14, type: 'fill_blank', prompt: 'Complete the sentence: "We live in a quiet and friendly ___."', sentenceTemplate: 'We live in a quiet and friendly ___.', sourceSentence: 'We live in a quiet and friendly ___.', options: [{ id: 'o1', text: 'neighborhood', isCorrect: true }, { id: 'o2', text: 'dosage', isCorrect: false }, { id: 'o3', text: 'symptom', isCorrect: false }] },
    { id: 'ex_u05_l68_p14', lessonId: 'lesson_a1_5_68', stage: 14, type: 'word_ordering', prompt: 'Arrange the words to state apartment features:', wordBank: ['There', 'is', 'a', 'spacious', 'balcony', 'with', 'garden', 'views.'], targetSentence: 'There is a spacious balcony with garden views.' },
    { id: 'ex_u05_l68_p15', lessonId: 'lesson_a1_5_68', stage: 14, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'The landlord agreed to replace the broken refrigerator before we move in.', audioText: 'The landlord agreed to replace the broken refrigerator before we move in.' }
  ],
  review: [
    { id: 'ex_u05_l68_r1', lessonId: 'lesson_a1_5_68', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Choose the correct sentence for doctor advice:', options: [{ id: 'o1', text: 'You should drink plenty of fluids.', isCorrect: true }, { id: 'o2', text: 'You should to drink fluids.', isCorrect: false }, { id: 'o3', text: 'You should drinking fluids.', isCorrect: false }] },
    { id: 'ex_u05_l68_r2', lessonId: 'lesson_a1_5_68', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete: "I have a ___ throat and a cough."', sentenceTemplate: 'I have a ___ throat and a cough.', sourceSentence: 'I have a ___ throat and a cough.', options: [{ id: 'o1', text: 'sore', isCorrect: true }, { id: 'o2', text: 'rare', isCorrect: false }, { id: 'o3', text: 'round', isCorrect: false }] },
    { id: 'ex_u05_l68_r3', lessonId: 'lesson_a1_5_68', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['How', 'often', 'should', 'I', 'take', 'this', 'medicine?'], targetSentence: 'How often should I take this medicine?' },
    { id: 'ex_u05_l68_r4', lessonId: 'lesson_a1_5_68', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match housing & health pairs:', pairs: [{ left: 'landlord', right: 'property manager' }, { left: 'faucet', right: 'water tap' }, { left: 'pharmacist', right: 'dispenses drugs' }, { left: 'leak', right: 'water escape' }] },
    { id: 'ex_u05_l68_r5', lessonId: 'lesson_a1_5_68', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "क्या पानी का बिल किराए में शामिल है?"', targetSentence: 'Is water included in the rent?' }
  ],
  assessment: [
    { id: 'ex_u05_l68_a1', lessonId: 'lesson_a1_5_68', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the grammatically correct housing statement:', options: [{ id: 'o1', text: 'There is a large living room and water is included in the rent.', isCorrect: true }, { id: 'o2', text: 'There are a large living room and water is include in rent.', isCorrect: false }, { id: 'o3', text: 'There is large living rooms with water including.', isCorrect: false }] },
    { id: 'ex_u05_l68_a2', lessonId: 'lesson_a1_5_68', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete: "The building maintenance will send a ___ to repair the pipe."', sentenceTemplate: 'The building maintenance will send a ___ to repair the pipe.', sourceSentence: 'The building maintenance will send a ___ to repair the pipe.', options: [{ id: 'o1', text: 'plumber', isCorrect: true }, { id: 'o2', text: 'pharmacist', isCorrect: false }, { id: 'o3', text: 'conductor', isCorrect: false }] },
    { id: 'ex_u05_l68_a3', lessonId: 'lesson_a1_5_68', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words correctly:', wordBank: ['The', 'tenant', 'signed', 'a', 'twelve-month', 'lease', 'with', 'the', 'landlord.'], targetSentence: 'The tenant signed a twelve-month lease with the landlord.' },
    { id: 'ex_u05_l68_a4', lessonId: 'lesson_a1_5_68', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Choose the best reply: "How much is the security deposit for this apartment?"', options: [{ id: 'o1', text: 'The security deposit is equal to one month of rent.', isCorrect: true }, { id: 'o2', text: 'Yes, I have an appointment at three.', isCorrect: false }, { id: 'o3', text: 'The train is on platform two.', isCorrect: false }] },
    { id: 'ex_u05_l68_a5', lessonId: 'lesson_a1_5_68', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this complete repair request sentence:', targetSentence: 'I am calling to report that our apartment heater stopped working during the night.', audioText: 'I am calling to report that our apartment heater stopped working during the night.' }
  ]
};

// =========================================================================
// LESSON 69: Bank Services, Online Accounts & Financial Security
// =========================================================================
export const CONFIG_69: LessonConfig = {
  num: 69,
  title: 'Bank Services, Online Accounts & Financial Security',
  icon: '🏦',
  estMin: 25,
  objTitle: 'Open bank accounts, transfer funds, manage passwords, and secure finances',
  objDesc: 'Learn banking vocabulary (checking account, savings, transfer, ATM, balance, deposit, withdraw, PIN, fraud alert), online banking steps, and reporting lost cards.',
  objHi: 'बैंक खाता खोलना, पैसे ट्रांसफर करना, पासवर्ड प्रबंधित करना और वित्तीय सुरक्षा बनाए रखना सीखें।',
  objEs: 'Aprende a abrir cuentas bancarias, transferir fondos, gestionar contraseñas y mantener la seguridad financiera.',
  canDo: [
    'I can open a checking or savings account at a bank branch.',
    'I can perform transactions like deposits, withdrawals, and online wire transfers.',
    'I can report a lost or stolen credit card and set up secure passwords.'
  ],
  canDoHi: [
    'मैं बैंक शाखा में चालू या बचत खाता खोल सकता हूँ।',
    'मैं जमा, निकासी और ऑनलाइन फंड ट्रांसफर जैसे लेनदेन कर सकता हूँ।',
    'मैं खोए या चोरी हुए क्रेडिट कार्ड की रिपोर्ट कर सकता हूँ और सुरक्षित पासवर्ड सेट कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo abrir una cuenta corriente o de ahorros en una sucursal bancaria.',
    'Puedo realizar transacciones como depósitos, retiros y transferencias bancarias en línea.',
    'Puedo reportar una tarjeta de crédito perdida o robada y configurar contraseñas seguras.'
  ],
  vocab: [
    { w: 'account', p: '/əˈkaʊnt/', m: 'an arrangement with a bank for financial transactions', hi: 'खाता / बैंक खाता', es: 'cuenta bancaria', fr: 'compte bancaire', de: 'Konto', pt: 'conta bancária', zh: '账户', ar: 'حساب بنكي', ja: '口座', ru: 'счет в банке', ex: 'I want to open a new checking account.', exHi: 'मैं एक नया चेकिंग खाता खोलना चाहता हूँ।', exEs: 'Quiero abrir una nueva cuenta corriente.', ic: '🏦' },
    { w: 'balance', p: '/ˈbæl.əns/', m: 'the amount of money remaining in an account', hi: 'शेष राशि / बैलेंस', es: 'saldo / balance', fr: 'solde', de: 'Kontostand / Saldo', pt: 'saldo', zh: '余额', ar: 'رصيد', ja: '残高', ru: 'баланс / остаток на счете', ex: 'What is my current account balance?', exHi: 'मेरे खाते का वर्तमान बैलेंस क्या है?', exEs: '¿Cuál es mi saldo de cuenta actual?', ic: '💳' },
    { w: 'deposit', p: '/dɪˈpɒz.ɪt/', m: 'to put money into a bank account', hi: 'जमा करना / डिपॉजिट करना', es: 'depositar / ingreso', fr: 'déposer / versement', de: 'einzahlen / Einzahlung', pt: 'depositar / depósito', zh: '存款', ar: 'إيداع', ja: '預け入れ / 預金する', ru: 'вносить депозит / класть деньги', ex: 'I would like to deposit this check into my savings.', exHi: 'मैं इस चेक को अपनी बचत में जमा करना चाहता हूँ।', exEs: 'Me gustaría depositar este cheque en mis ahorros.', ic: '📥' },
    { w: 'withdraw', p: '/wɪðˈdrɔː/', m: 'to take money out of a bank account', hi: 'निकालना (पैसे)', es: 'retirar / sacar dinero', fr: 'retirer de l\'argent', de: 'abheben', pt: 'sacar / retirar dinheiro', zh: '取款 / 提款', ar: 'سحب النقود', ja: '引き出す', ru: 'снимать деньги', ex: 'You can withdraw up to five hundred dollars at the ATM.', exHi: 'आप एटीएम से पाँच सौ डॉलर तक निकाल सकते हैं।', exEs: 'Puede retirar hasta quinientos dólares en el cajero automático.', ic: '📤' },
    { w: 'transfer', p: '/trænsˈfɜːr/', m: 'to move money from one account or person to another', hi: 'स्थानांतरित करना / ट्रांसफर करना', es: 'transferir / transferencia', fr: 'transférer / virement', de: 'überweisen / Überweisung', pt: 'transferir / transferência', zh: '转账', ar: 'تحويل أموال', ja: '送金する / 振り込む', ru: 'переводить деньги', ex: 'I need to transfer funds to my landlord.', exHi: 'मुझे अपने मकान मालिक को पैसे ट्रांसफर करने हैं।', exEs: 'Necesito transferir fondos a mi arrendador.', ic: '🔀' },
    { w: 'teller', p: '/ˈtel.ər/', m: 'a bank employee who assists customers with transactions', hi: 'बैंक टेलर / खजांची', es: 'cajero del banco', fr: 'guichetier', de: 'Bankangestellter / Kassierer', pt: 'caixa do banco', zh: '银行出纳员', ar: 'صراف البنك', ja: '銀行窓口係', ru: 'банковский кассир / операционист', ex: 'The teller helped me with the foreign exchange.', exHi: 'टेलर ने विदेशी मुद्रा विनिमय में मेरी मदद की।', exEs: 'El cajero me ayudó con el cambio de divisas.', ic: '👨‍💼' },
    { w: 'branch', p: '/brɑːntʃ/', m: 'a local office of a bank or institution', hi: 'शाखा / ब्रांच', es: 'sucursal / oficina', fr: 'agence bancaire', de: 'Filiale / Zweigstelle', pt: 'agência bancária', zh: '分行', ar: 'فرع البنك', ja: '支店', ru: 'отделение / филиал', ex: 'Our local branch is open on Saturday morning.', exHi: 'हमारी स्थानीय शाखा शनिवार सुबह खुली रहती है।', exEs: 'Nuestra sucursal local está abierta los sábados por la mañana.', ic: '🏢' },
    { w: 'checking', p: '/ˈtʃek.ɪŋ/', m: 'a bank account that allows easy deposits and withdrawals for daily expenses', hi: 'चालू खाता / चेकिंग अकाउंट', es: 'cuenta corriente', fr: 'compte courant', de: 'Girokonto', pt: 'conta corrente', zh: '支票账户', ar: 'حساب جاري', ja: '当座預金 / 普通預金口座', ru: 'текущий счет', ex: 'I pay my utility bills from my checking account.', exHi: 'मैं अपने चेकिंग खाते से उपयोगिता बिलों का भुगतान करता हूँ।', exEs: 'Pago mis facturas de servicios desde mi cuenta corriente.', ic: '🧾' },
    { w: 'savings', p: '/ˈseɪ.vɪŋz/', m: 'an account where money is accumulated and earns interest', hi: 'बचत खाता', es: 'cuenta de ahorros', fr: 'compte d\'épargne', de: 'Sparkonto', pt: 'poupança / conta poupança', zh: '储蓄账户', ar: 'حساب توفير', ja: '貯蓄口座', ru: 'сберегательный счет', ex: 'She transfers ten percent of her salary to savings.', exHi: 'वह अपने वेतन का दस प्रतिशत बचत खाते में ट्रांसफर करती है।', exEs: 'Ella transfiere el diez por ciento de su salario a ahorros.', ic: '🐖' },
    { w: 'ATM', p: '/ˌeɪ.tiːˈem/', m: 'Automated Teller Machine for cash and banking', hi: 'एटीएम मशीन', es: 'cajero automático', fr: 'distributeur de billets', de: 'Geldautomat', pt: 'caixa eletrônico', zh: '自动取款机 / ATM', ar: 'صراف آلي', ja: 'ATM / 現金自動預払機', ru: 'банкомат', ex: 'There is an ATM right outside the supermarket.', exHi: 'सुपरमार्केट के ठीक बाहर एक एटीएम है।', exEs: 'Hay un cajero automático justo afuera del supermercado.', ic: '🏧' },
    { w: 'PIN', p: '/pɪn/', m: 'Personal Identification Number for card security', hi: 'पिन नंबर', es: 'número PIN / clave secreta', fr: 'code PIN / code secret', de: 'PIN-Nummer / Geheimzahl', pt: 'senha PIN', zh: '个人识别码 / PIN码', ar: 'رمز التعريف الشخصي / PIN', ja: '暗証番号', ru: 'ПИН-код', ex: 'Never share your four-digit PIN with anyone.', exHi: 'अपना चार अंकों का पिन किसी के साथ साझा न करें।', exEs: 'Nunca comparta su PIN de cuatro dígitos con nadie.', ic: '🔢' },
    { w: 'password', p: '/ˈpɑːs.wɜːd/', m: 'a secret sequence of characters for digital access', hi: 'पासवर्ड', es: 'contraseña', fr: 'mot de passe', de: 'Passwort', pt: 'senha', zh: '密码', ar: 'كلمة المرور', ja: 'パスワード', ru: 'пароль', ex: 'Use a strong password with letters and symbols.', exHi: 'अक्षरों और प्रतीकों वाला एक मजबूत पासवर्ड उपयोग करें।', exEs: 'Use una contraseña segura con letras y símbolos.', ic: '🔒' },
    { w: 'security', p: '/sɪˈkjʊə.rə.ti/', m: 'measures taken to ensure safety against fraud or crime', hi: 'सुरक्षा', es: 'seguridad', fr: 'sécurité', de: 'Sicherheit', pt: 'segurança', zh: '安全', ar: 'أمان / حماية', ja: 'セキュリティ / 安全', ru: 'безопасность', ex: 'Our bank uses two-factor authentication security.', exHi: 'हमारा बैंक दो-कारक प्रमाणीकरण सुरक्षा का उपयोग करता है।', exEs: 'Nuestro banco utiliza seguridad de autenticación de dos factores.', ic: '🛡️' },
    { w: 'fraud', p: '/frɔːd/', m: 'wrongful or criminal deception for financial gain', hi: 'धोखाधड़ी / फ़्रॉड', es: 'fraude / estafa', fr: 'fraude / escroquerie', de: 'Betrug', pt: 'fraude / golpe', zh: '诈骗 / 欺诈', ar: 'احتيال / تزوير', ja: '詐欺 / 不正行為', ru: 'мошенничество', ex: 'The bank blocked my card due to suspected fraud.', exHi: 'बैंक ने संदिग्ध धोखाधड़ी के कारण मेरा कार्ड ब्लॉक कर दिया।', exEs: 'El banco bloqueó mi tarjeta por sospecha de fraude.', ic: '🚨' },
    { w: 'stolen', p: '/ˈstəʊ.lən/', m: 'taken by someone unlawfully without permission', hi: 'चोरी हुआ', es: 'robado', fr: 'volé', de: 'gestohlen', pt: 'roubado', zh: '被盗的', ar: 'مسروق', ja: '盗まれた', ru: 'украденный', ex: 'I need to cancel my stolen debit card immediately.', exHi: 'मुझे तुरंत अपना चोरी हुआ डेबिट कार्ड रद्द करना होगा।', exEs: 'Necesito cancelar mi tarjeta de débito robada de inmediato.', ic: '🚫' },
    { w: 'fee', p: '/fiː/', m: 'a payment made to a bank or professional for advice or services', hi: 'शुल्क / फीस', es: 'comisión / tarifa', fr: 'frais bancaires', de: 'Gebühr', pt: 'taxa / tarifa', zh: '费用 / 手续费', ar: 'رسوم', ja: '手数料', ru: 'комиссия / сбор', ex: 'Is there any monthly fee for maintaining this account?', exHi: 'क्या इस खाते को बनाए रखने के लिए कोई मासिक शुल्क है?', exEs: '¿Hay alguna comisión mensual por mantener esta cuenta?', ic: '💲' },
    { w: 'interest', p: '/ˈɪn.trəst/', m: 'money paid regularly at a particular rate for the use of money lent or saved', hi: 'ब्याज', es: 'interés', fr: 'intérêts', de: 'Zinsen', pt: 'juros', zh: '利息', ar: 'فائدة', ja: '利息 / 利子', ru: 'проценты', ex: 'This savings account pays three percent annual interest.', exHi: 'यह बचत खाता तीन प्रतिशत वार्षिक ब्याज देता है।', exEs: 'Esta cuenta de ahorros paga un tres por ciento de interés anual.', ic: '📈' },
    { w: 'statement', p: '/ˈsteɪt.mənt/', m: 'a document listing transactions on an account', hi: 'बैंक विवरण / स्टेटमेंट', es: 'extracto bancario / estado de cuenta', fr: 'relevé de compte', de: 'Kontoauszug', pt: 'extrato bancário', zh: '银行对账单', ar: 'كشف حساب', ja: '取引明細書', ru: 'выписка по счету', ex: 'I download my monthly electronic bank statement.', exHi: 'मैं अपना मासिक इलेक्ट्रॉनिक बैंक स्टेटमेंट डाउनलोड करता हूँ।', exEs: 'Descargo mi extracto bancario electrónico mensual.', ic: '📑' },
    { w: 'card', p: '/kɑːd/', m: 'a small plastic card issued by a bank', hi: 'कार्ड / डेबिट कार्ड', es: 'tarjeta', fr: 'carte', de: 'Karte', pt: 'cartão', zh: '卡', ar: 'بطاقة', ja: 'カード', ru: 'карта', ex: 'Insert your chip card into the machine.', exHi: 'मशीन में अपना चिप कार्ड डालें।', exEs: 'Inserte su tarjeta con chip en la máquina.', ic: '💳' },
    { w: 'receipt', p: '/rɪˈsiːt/', m: 'a printed paper acknowledgment of a financial transaction', hi: 'रसीद', es: 'recibo / comprobante', fr: 'reçu / ticket', de: 'Quittung / Beleg', pt: 'recibo / comprovante', zh: '收据 / 回执', ar: 'إيصال', ja: '領収書 / レシート', ru: 'квитанция / чек', ex: 'Would you like an ATM receipt?', exHi: 'क्या आप एटीएम रसीद चाहेंगे?', exEs: '¿Desea un recibo del cajero automático?', ic: '🧾' }
  ],
  chunks: [
    { phrase: 'open a checking account', meaning: 'establishing a new transaction account', hi: 'चालू खाता खोलना', es: 'abrir una cuenta corriente', fr: 'ouvrir un compte courant', de: 'ein Girokonto eröffnen', pt: 'abrir uma conta corrente', zh: '开立支票账户', ar: 'فتح حساب جاري', ja: '普通預金口座を開設する', ru: 'открыть текущий счет', note: 'Banking core objective.', ic: '🏦' },
    { phrase: 'check my balance', meaning: 'verifying current funds available', hi: 'अपना बैलेंस जांचना', es: 'consultar mi saldo', fr: 'consulter mon solde', de: 'meinen Kontostand prüfen', pt: 'consultar meu saldo', zh: '查询我的余额', ar: 'التحقق من رصيدي', ja: '残高を確認する', ru: 'проверить мой баланс', note: 'Common banking action.', ic: '💳' },
    { phrase: 'transfer funds to...', meaning: 'moving money electronically to a recipient', hi: '... को पैसे ट्रांसफर करना', es: 'transferir fondos a...', fr: 'transférer des fonds vers...', de: 'Geld überweisen an...', pt: 'transferir fundos para...', zh: '转账至……', ar: 'تحويل الأموال إلى...', ja: '〜に資金を送金する', ru: 'перевести средства на...', note: 'Wire transfer phrase.', ic: '🔀' },
    { phrase: 'withdraw cash from the ATM', meaning: 'taking out physical bills from machine', hi: 'एटीएम से नकदी निकालना', es: 'retirar efectivo del cajero automático', fr: 'retirer de l\'argent au distributeur', de: 'Bargeld am Automaten abheben', pt: 'sacar dinheiro no caixa eletrônico', zh: '在ATM取现金', ar: 'سحب النقود من الصراف الآلي', ja: 'ATMで現金を引き出す', ru: 'снять наличные в банкомате', note: 'Cash transaction phrase.', ic: '🏧' },
    { phrase: 'report a stolen card', meaning: 'notifying bank to block compromised card', hi: 'चोरी हुए कार्ड की रिपोर्ट करना', es: 'reportar una tarjeta robada', fr: 'déclarer une carte volée', de: 'eine gestohlene Karte melden', pt: 'reportar um cartão roubado', zh: '挂失被盗的银行卡', ar: 'الإبلاغ عن بطاقة مسروقة', ja: '盗難カードを届け出る', ru: 'заявить об украденной карте', note: 'Emergency security measure.', ic: '🚨' },
    { phrase: 'reset my online password', meaning: 'updating login credentials for security', hi: 'अपना ऑनलाइन पासवर्ड रीसेट करना', es: 'restablecer mi contraseña en línea', fr: 'réinitialiser mon mot de passe en ligne', de: 'mein Online-Passwort zurücksetzen', pt: 'redefinir minha senha online', zh: '重置网银密码', ar: 'إعادة تعيين كلمة المرور عبر الإنترنت', ja: 'オンラインパスワードを再設定する', ru: 'сбросить пароль для онлайн-банка', note: 'Account management task.', ic: '🔑' },
    { phrase: 'Is there any monthly fee?', meaning: 'Asking about maintenance costs', hi: 'क्या कोई मासिक शुल्क है?', es: '¿Hay alguna comisión mensual?', fr: 'Y a-t-il des frais mensuels ?', de: 'Gibt es eine monatliche Gebühr?', pt: 'Existe alguma taxa mensal?', zh: '有月费吗？', ar: 'هل هناك أي رسوم شهرية؟', ja: '月額手数料はかかりますか？', ru: 'Взимается ли ежемесячная комиссия?', note: 'Cost clarification question.', ic: '💲' },
    { phrase: 'two-factor authentication', meaning: 'security process requiring two verification steps', hi: 'दो-कारक प्रमाणीकरण', es: 'autenticación de dos factores', fr: 'authentification à deux facteurs', de: 'Zwei-Faktor-Authentifizierung', pt: 'autenticação de dois fatores', zh: '双重认证 / 双因子验证', ar: 'المصادقة الثنائية', ja: '二要素認証', ru: 'двухфакторная аутентификация', note: 'Modern security term.', ic: '🛡️' }
  ],
  grammar: {
    title: 'Polite Requests with "I need to..." & Obligation Modals (must / have to / should) for Financial Tasks',
    concept: 'Using modal expressions of necessity ("have to / must") when describing banking duties, card safety, and transactions.',
    patterns: [
      {
        title: 'Subject + need to / would like to + base verb',
        structure: 'I need to transfer funds / I would like to deposit a check',
        rule: 'Use "need to" for necessary transactions and "would like to" for polite bank counter requests.',
        examples: [
          { en: 'I need to transfer two hundred dollars to my savings.', hi: 'मुझे अपनी बचत में दो सौ डॉलर ट्रांसफर करने की आवश्यकता है।', es: 'Necesito transferir doscientos dólares a mis ahorros.' },
          { en: 'I would like to open a checking account, please.', hi: 'मैं एक चालू खाता खोलना चाहता हूँ, कृपया।', es: 'Me gustaría abrir una cuenta corriente, por favor.' }
        ]
      },
      {
        title: 'Obligation & Security Rules: must / have to + base verb',
        structure: 'You must never share your PIN / You have to show a photo ID',
        rule: 'Use "must" for strict rules and "have to" for external procedural requirements.',
        examples: [
          { en: 'You must never share your secret PIN with strangers.', hi: 'आपको अपना गुप्त पिन कभी भी अजनबियों के साथ साझा नहीं करना चाहिए।', es: 'Nunca debes compartir tu PIN secreto con extraños.' },
          { en: 'Do I have to provide proof of address?', hi: 'क्या मुझे पते का प्रमाण देना होगा?', es: '¿Tengo que presentar un comprobante de domicilio?' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'I want open an account.', cor: 'I would like to open an account.', exp: 'Use polite formula "I would like to open an account" at a bank.', hi: 'बैंक में विनम्रता के लिए "I would like to open..." का प्रयोग करें।', es: 'Usa "I would like to open an account" para mayor cortesía.' },
    { inc: 'You must to keep your PIN secret.', cor: 'You must keep your PIN secret.', exp: 'Modal "must" is followed directly by the base verb without "to".', hi: '"Must" के बाद "to" का प्रयोग न करें।', es: '"Must" va seguido del verbo base sin "to".' },
    { inc: 'I need transfer money.', cor: 'I need to transfer money.', exp: '"Need" requires the infinitive marker "to" before the next verb.', hi: '"Need" के बाद "to" लगाएं।', es: '"Need" requiere "to" antes del siguiente verbo.' },
    { inc: 'Can I have receipt from ATM machine?', cor: 'Can I have a receipt from the ATM?', exp: '"ATM" already stands for Automated Teller Machine, so do not say "ATM machine".', hi: '"ATM" के बाद दोबारा "machine" न लगाएं।', es: 'No repitas "machine" después de "ATM".' },
    { inc: 'My card was stole yesterday.', cor: 'My card was stolen yesterday.', exp: 'Use the past participle "stolen" in passive voice.', hi: 'पैसिव वॉइस में पास्ट पार्टिसिपल "stolen" का प्रयोग करें।', es: 'Usa el participio "stolen" en la voz pasiva.' }
  ],
  dialogues: [
    {
      title: 'Opening an Account at the Bank',
      context: 'Daniel visits Metro Bank to open a new checking and savings account.',
      charA: { name: 'Bank Teller', av: '👨‍💼', role: 'Bank Representative' },
      charB: { name: 'Daniel', av: '👨', role: 'Customer' },
      turns: [
        { spk: 'Bank Teller', text: 'Good morning, welcome to Metro Bank. How can I assist you today?', hi: 'शुभ प्रभात, मेट्रो बैंक में आपका स्वागत है। आज मैं आपकी क्या मदद कर सकता हूँ?', es: 'Buenos días, bienvenido a Metro Bank. ¿En qué puedo asistirle hoy?' },
        { spk: 'Daniel', text: 'Hello! I would like to open a checking account and a savings account, please.', hi: 'नमस्ते! मैं एक चेकिंग खाता और एक बचत खाता खोलना चाहता हूँ।', es: '¡Hola! Me gustaría abrir una cuenta corriente y una cuenta de ahorros, por favor.' },
        { spk: 'Bank Teller', text: 'Certainly! I will need your passport and proof of address to start the application.', hi: 'निश्चित रूप से! आवेदन शुरू करने के लिए मुझे आपके पासपोर्ट और पते के प्रमाण की आवश्यकता होगी।', es: '¡Por supuesto! Necesitaré su pasaporte y un comprobante de domicilio para iniciar la solicitud.' },
        { spk: 'Daniel', text: 'Here they are. Is there any monthly fee for maintaining the account?', hi: 'ये लीजिए। क्या खाते के रख-रखाव के लिए कोई मासिक शुल्क है?', es: 'Aquí los tiene. ¿Hay alguna comisión mensual por mantener la cuenta?' },
        { spk: 'Bank Teller', text: 'No, there is no fee as long as you maintain a minimum balance of one hundred dollars.', hi: 'नहीं, जब तक आप सौ डॉलर का न्यूनतम बैलेंस बनाए रखते हैं, तब तक कोई शुल्क नहीं है।', es: 'No, no hay comisión siempre que mantenga un saldo mínimo de cien dólares.' }
      ]
    },
    {
      title: 'Reporting a Lost Debit Card',
      context: 'Daniel calls the bank hotline to report his missing debit card.',
      charA: { name: 'Support Agent', av: '👩‍💼', role: 'Customer Support' },
      charB: { name: 'Daniel', av: '👨', role: 'Customer' },
      turns: [
        { spk: 'Support Agent', text: 'Metro Bank Security hotline, how may I help you?', hi: 'मेट्रो बैंक सुरक्षा हेल्पलाइन, मैं आपकी क्या मदद कर सकती हूँ?', es: 'Línea de seguridad de Metro Bank, ¿en qué puedo ayudarle?' },
        { spk: 'Daniel', text: 'Hello, I need to report a lost debit card. I think I left it at an ATM downtown.', hi: 'नमस्ते, मुझे खोए हुए डेबिट कार्ड की रिपोर्ट करनी है। मुझे लगता है कि मैं इसे शहर के एक एटीएम में भूल गया।', es: 'Hola, necesito reportar una tarjeta de débito perdida. Creo que la dejé en un cajero del centro.' },
        { spk: 'Support Agent', text: 'I understand. For your security, I will block the card immediately so no unauthorized transactions can occur.', hi: 'मैं समझती हूँ। आपकी सुरक्षा के लिए, मैं तुरंत कार्ड को ब्लॉक कर दूँगी ताकि कोई अनधिकृत लेनदेन न हो सके।', es: 'Entiendo. Por su seguridad, bloquearé la tarjeta de inmediato para que no se puedan realizar transacciones no autorizadas.' },
        { spk: 'Daniel', text: 'Thank you. How long will it take to receive a replacement card?', hi: 'धन्यवाद। नया रिप्लेसमेंट कार्ड प्राप्त करने में कितना समय लगेगा?', es: 'Gracias. ¿Cuánto tiempo tardará en llegar una tarjeta de reemplazo?' },
        { spk: 'Support Agent', text: 'A new chip card will arrive at your home address within three business days.', hi: 'तीन कार्य दिवसों के भीतर आपके घर के पते पर एक नया चिप कार्ड आ जाएगा।', es: 'Una nueva tarjeta con chip llegará a su dirección particular en tres días hábiles.' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u05_l69_p1', lessonId: 'lesson_a1_5_69', stage: 8, type: 'multiple_choice', prompt: 'Select the polite request: "I ___ open a savings account, please."', options: [{ id: 'o1', text: 'would like to', isCorrect: true }, { id: 'o2', text: 'must to', isCorrect: false }, { id: 'o3', text: 'am want', isCorrect: false }] },
    { id: 'ex_u05_l69_p2', lessonId: 'lesson_a1_5_69', stage: 8, type: 'fill_blank', prompt: 'Complete the sentence with the correct financial verb:', sentenceTemplate: 'I need to ___ three hundred dollars into my checking account.', sourceSentence: 'I need to ___ three hundred dollars into my checking account.', options: [{ id: 'o1', text: 'deposit', isCorrect: true }, { id: 'o2', text: 'leak', isCorrect: false }, { id: 'o3', text: 'depart', isCorrect: false }] },
    { id: 'ex_u05_l69_p3', lessonId: 'lesson_a1_5_69', stage: 8, type: 'word_ordering', prompt: 'Arrange the words to form a security warning:', wordBank: ['You', 'must', 'never', 'share', 'your', 'secret', 'PIN.'], targetSentence: 'You must never share your secret PIN.' },
    { id: 'ex_u05_l69_p4', lessonId: 'lesson_a1_5_69', stage: 8, type: 'match_pairs', prompt: 'Match banking terms with definitions:', pairs: [{ left: 'balance', right: 'total money in account' }, { left: 'withdraw', right: 'take out cash' }, { left: 'fraud', right: 'unauthorized transaction activity' }, { left: 'statement', right: 'monthly transaction document' }] },
    { id: 'ex_u05_l69_p5', lessonId: 'lesson_a1_5_69', stage: 8, type: 'error_correction', prompt: 'Identify the corrected sentence:', sentenceTemplate: 'My debit card was stole in the restaurant.', options: [{ id: 'o1', text: 'My debit card was stolen in the restaurant.', isCorrect: true }, { id: 'o2', text: 'My debit card was steal in the restaurant.', isCorrect: false }, { id: 'o3', text: 'My debit card was stealing in the restaurant.', isCorrect: false }] },
    { id: 'ex_u05_l69_p6', lessonId: 'lesson_a1_5_69', stage: 9, type: 'listening', prompt: 'Listen and choose the sentence you hear:', audioText: 'You can withdraw up to five hundred dollars per day at the ATM.', options: [{ id: 'o1', text: 'You can withdraw up to five hundred dollars per day at the ATM.', isCorrect: true }, { id: 'o2', text: 'You can deposit up to five hundred dollars per week at the branch.', isCorrect: false }] },
    { id: 'ex_u05_l69_p7', lessonId: 'lesson_a1_5_69', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'What is my current account balance?', targetSentence: 'What is my current account balance?' },
    { id: 'ex_u05_l69_p8', lessonId: 'lesson_a1_5_69', stage: 10, type: 'multiple_choice', prompt: 'Which question asks if there is a monthly maintenance charge on an account?', options: [{ id: 'o1', text: 'Is there any monthly fee for maintaining this account?', isCorrect: true }, { id: 'o2', text: 'Why is monthly fee eating money?', isCorrect: false }, { id: 'o3', text: 'Where fee goes today?', isCorrect: false }] },
    { id: 'ex_u05_l69_p9', lessonId: 'lesson_a1_5_69', stage: 11, type: 'dialogue_completion', prompt: 'Complete the dialogue: "I would like to transfer funds to another account."', options: [{ id: 'o1', text: 'Certainly! Please provide the recipient\'s account number and amount.', isCorrect: true }, { id: 'o2', text: 'I ate salad for lunch.', isCorrect: false }, { id: 'o3', text: 'The weather is very sunny.', isCorrect: false }] },
    { id: 'ex_u05_l69_p10', lessonId: 'lesson_a1_5_69', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'I need to block my credit card immediately because I lost my wallet.', audioText: 'I need to block my credit card immediately because I lost my wallet.' },
    { id: 'ex_u05_l69_p11', lessonId: 'lesson_a1_5_69', stage: 13, type: 'translation', prompt: 'Translate: "मुझे अपने बचत खाते में पैसे ट्रांसफर करने की आवश्यकता है।" / "Necesito transferir dinero a mi cuenta de ahorros."', targetSentence: 'I need to transfer money to my savings account.' },
    { id: 'ex_u05_l69_p12', lessonId: 'lesson_a1_5_69', stage: 14, type: 'multiple_choice', prompt: 'What is the secret 4-digit code used to authorize ATM card withdrawals?', options: [{ id: 'o1', text: 'PIN', isCorrect: true }, { id: 'o2', text: 'lease', isCorrect: false }, { id: 'o3', text: 'receipt', isCorrect: false }] },
    { id: 'ex_u05_l69_p13', lessonId: 'lesson_a1_5_69', stage: 14, type: 'fill_blank', prompt: 'Complete the sentence: "Please insert your card into the ___ to withdraw cash."', sentenceTemplate: 'Please insert your card into the ___ to withdraw cash.', sourceSentence: 'Please insert your card into the ___ to withdraw cash.', options: [{ id: 'o1', text: 'ATM', isCorrect: true }, { id: 'o2', text: 'faucet', isCorrect: false }, { id: 'o3', text: 'bandage', isCorrect: false }] },
    { id: 'ex_u05_l69_p14', lessonId: 'lesson_a1_5_69', stage: 14, type: 'word_ordering', prompt: 'Arrange the words to describe an online security step:', wordBank: ['Our', 'bank', 'uses', 'two-factor', 'authentication', 'for', 'online', 'security.'], targetSentence: 'Our bank uses two-factor authentication for online security.' },
    { id: 'ex_u05_l69_p15', lessonId: 'lesson_a1_5_69', stage: 14, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'I would like to deposit this paycheck into my checking account.', audioText: 'I would like to deposit this paycheck into my checking account.' }
  ],
  review: [
    { id: 'ex_u05_l69_r1', lessonId: 'lesson_a1_5_69', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Choose the correct housing repair phrase:', options: [{ id: 'o1', text: 'The bathroom pipe is leaking.', isCorrect: true }, { id: 'o2', text: 'The bathroom pipe is leak.', isCorrect: false }, { id: 'o3', text: 'The bathroom pipe leaks on now.', isCorrect: false }] },
    { id: 'ex_u05_l69_r2', lessonId: 'lesson_a1_5_69', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete: "Are utilities ___ in the monthly rent?"', sentenceTemplate: 'Are utilities ___ in the monthly rent?', sourceSentence: 'Are utilities ___ in the monthly rent?', options: [{ id: 'o1', text: 'included', isCorrect: true }, { id: 'o2', text: 'includes', isCorrect: false }, { id: 'o3', text: 'including', isCorrect: false }] },
    { id: 'ex_u05_l69_r3', lessonId: 'lesson_a1_5_69', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['You', 'should', 'take', 'one', 'tablet', 'after', 'meals.'], targetSentence: 'You should take one tablet after meals.' },
    { id: 'ex_u05_l69_r4', lessonId: 'lesson_a1_5_69', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match finance & household terms:', pairs: [{ left: 'landlord', right: 'property lessor' }, { left: 'teller', right: 'bank clerk' }, { left: 'balance', right: 'available money' }, { left: 'lease', right: 'rental contract' }] },
    { id: 'ex_u05_l69_r5', lessonId: 'lesson_a1_5_69', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "क्या आप कृपया मेरा बैलेंस देख सकते हैं?"', targetSentence: 'Could you please check my balance?' }
  ],
  assessment: [
    { id: 'ex_u05_l69_a1', lessonId: 'lesson_a1_5_69', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the grammatically correct banking statement:', options: [{ id: 'o1', text: 'I would like to open a savings account with no monthly fee.', isCorrect: true }, { id: 'o2', text: 'I am wanting to open account with no fees on.', isCorrect: false }, { id: 'o3', text: 'I opening savings accounts with not fee.', isCorrect: false }] },
    { id: 'ex_u05_l69_a2', lessonId: 'lesson_a1_5_69', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete: "The bank blocked the transaction due to suspected ___."', sentenceTemplate: 'The bank blocked the transaction due to suspected ___.', sourceSentence: 'The bank blocked the transaction due to suspected ___.', options: [{ id: 'o1', text: 'fraud', isCorrect: true }, { id: 'o2', text: 'faucet', isCorrect: false }, { id: 'o3', text: 'platform', isCorrect: false }] },
    { id: 'ex_u05_l69_a3', lessonId: 'lesson_a1_5_69', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words correctly:', wordBank: ['I', 'transferred', 'five', 'hundred', 'dollars', 'to', 'my', 'landlord', 'today.'], targetSentence: 'I transferred five hundred dollars to my landlord today.' },
    { id: 'ex_u05_l69_a4', lessonId: 'lesson_a1_5_69', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Choose the best reply: "How can I protect my online banking credentials?"', options: [{ id: 'o1', text: 'Use a strong password and enable two-factor authentication.', isCorrect: true }, { id: 'o2', text: 'The soup has vegetables in it.', isCorrect: false }, { id: 'o3', text: 'I am flying to Madrid on Sunday.', isCorrect: false }] },
    { id: 'ex_u05_l69_a5', lessonId: 'lesson_a1_5_69', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this complete financial security sentence:', targetSentence: 'Please block my stolen card immediately and issue a replacement to my home address.', audioText: 'Please block my stolen card immediately and issue a replacement to my home address.' }
  ]
};
