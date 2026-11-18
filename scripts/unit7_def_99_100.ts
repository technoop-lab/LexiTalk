import { LessonConfigA2 } from './unit7_builder_helper';

export const LESSON_99_CONFIG: LessonConfigA2 = {
  num: 99,
  title: 'Health, Symptoms & Medical Advice',
  icon: '🩺',
  estMin: 25,
  objTitle: 'Describing Symptoms, Physical Discomfort & Giving Health Advice',
  objDesc: 'Express physical symptoms, illness, and pain using "have a/an...", describe sensations with "feel", and give advice with "should / shouldn\'t".',
  objHi: 'शारीरिक लक्षण, बीमारी और दर्द बताना ("have a headache", "feel dizzy"), और "should / shouldn\'t" के साथ स्वास्थ्य सलाह देना सीखें।',
  objEs: 'Expresar síntomas físicos, malestar y dolor usando "have a/an...", sensaciones con "feel", y dar consejos con "should / shouldn\'t".',
  canDo: [
    'I can describe common physical ailments (headache, fever, sore throat, cough).',
    'I can explain sensations of discomfort using "feel dizzy / exhausted / nauseous".',
    'I can give clear medical recommendations using "should" and "shouldn\'t".',
    'I can schedule an appointment at a medical clinic.'
  ],
  canDoHi: [
    'मैं सामान्य शारीरिक समस्याओं (सिरदर्द, बुखार, गले में खराश, खांसी) का वर्णन कर सकता हूँ।',
    'मैं "feel dizzy / exhausted / nauseous" के साथ अस्वस्थता व्यक्त कर सकता हूँ।',
    'मैं "should" और "shouldn\'t" का उपयोग करके स्पष्ट स्वास्थ्य सलाह दे सकता हूँ।',
    'मैं क्लिनिक में डॉक्टर से अपॉइंटमेंट बुक कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir dolencias físicas comunes (dolor de cabeza, fiebre, dolor de garganta).',
    'Puedo explicar sensaciones de malestar usando "feel dizzy / exhausted".',
    'Puedo dar recomendaciones de salud claras con "should" y "shouldn\'t".',
    'Puedo concertar una cita en una clínica médica.'
  ],
  vocab: [
    { w: 'symptom', p: '/ˈsɪmptəm/', m: 'a physical or mental feature indicating a condition of disease', hi: 'लक्षण', es: 'síntoma', fr: 'symptôme', de: 'Symptom', pt: 'sintoma', zh: '症状', ar: 'عَرَض مرض', ja: '症状', ru: 'симптом', ex: 'A high fever is a common symptom of the flu.', exHi: 'तेज बुखार फ्लू का एक सामान्य लक्षण है।', exEs: 'La fiebre alta es un síntoma común de la gripe.', ic: '🌡️' },
    { w: 'headache', p: '/ˈhedeɪk/', m: 'a continuous pain in the head', hi: 'सिरदर्द', es: 'dolor de cabeza / cefalea', fr: 'mal de tête', de: 'Kopfschmerzen', pt: 'dor de cabeça', zh: '头痛', ar: 'صداع', ja: '頭痛', ru: 'головная боль', ex: 'I have had a severe headache all morning.', exHi: 'मुझे पूरी सुबह से गंभीर सिरदर्द है।', exEs: 'He tenido un fuerte dolor de cabeza toda la mañana.', ic: '🤕' },
    { w: 'fever', p: '/ˈfiːvər/', m: 'an abnormally high body temperature', hi: 'बुखार', es: 'fiebre', fr: 'fièvre', de: 'Fieber', pt: 'febre', zh: '发烧', ar: 'حمى', ja: '熱 / 発熱', ru: 'жар / температура', ex: 'Drink plenty of water when you have a fever.', exHi: 'जब आपको बुखार हो तो भरपूर पानी पिएं।', exEs: 'Beba mucha agua cuando tenga fiebre.', ic: '🤒' },
    { w: 'sore throat', p: '/sɔː θrəʊt/', m: 'a painful, dry, or scratchy feeling in the throat', hi: 'गले में खराश / दर्द', es: 'dolor de garganta', fr: 'mal de gorge', de: 'Halsschmerzen', pt: 'dor de garganta', zh: '喉咙痛', ar: 'التهاب الحلق', ja: '喉の痛み', ru: 'боль в горле', ex: 'Warm tea with honey soothes a sore throat.', exHi: 'शहद वाली गर्म चाय गले की खराश को आराम देती है।', exEs: 'El té caliente con miel alivia el dolor de garganta.', ic: '☕' },
    { w: 'cough', p: '/kɒf/', m: 'expelling air from the lungs suddenly and noisily', hi: 'खांसी', es: 'tos', fr: 'toux', de: 'Husten', pt: 'tosse', zh: '咳嗽', ar: 'سعال', ja: '咳', ru: 'кашель', ex: 'He has a persistent dry cough.', exHi: 'उसे लगातार सूखी खांसी आ रही है।', exEs: 'Tiene una tos seca persistente.', ic: '😷' },
    { w: 'dizzy', p: '/ˈdɪzi/', m: 'having a sensation of spinning around and losing balance', hi: 'चक्कर आना', es: 'mareado', fr: 'étourdi / pris de vertige', de: 'schwindelig', pt: 'tonto / com vertigem', zh: '头晕的', ar: 'يشعر بالدوار', ja: 'めまいがする', ru: 'головокружение', ex: 'Sit down if you feel dizzy.', exHi: 'यदि आपको चक्कर आ रहे हैं तो बैठ जाएं।', exEs: 'Siéntate si te sientes mareado.', ic: '💫' },
    { w: 'prescription', p: '/prɪˈskrɪpʃn/', m: 'an instruction written by a medical doctor for medication', hi: 'दवा का पर्चा / प्रिस्क्रिप्शन', es: 'receta médica', fr: 'ordonnance', de: 'Rezept / Verschreibung', pt: 'receita médica', zh: '处方', ar: 'وصفة طبية', ja: '処方箋', ru: 'рецепт врача', ex: 'You need a doctor\'s prescription for this antibiotic.', exHi: 'इस एंटीबायोटिक के लिए आपको डॉक्टर के पर्चे की आवश्यकता है।', exEs: 'Necesita una receta médica para este antibiótico.', ic: '📄' },
    { w: 'pharmacy', p: '/ˈfɑːməsi/', m: 'a store where medicinal drugs are prepared and sold', hi: 'दवा की दुकान / फार्मेसी', es: 'farmacia', fr: 'pharmacie', de: 'Apotheke', pt: 'farmácia', zh: '药店', ar: 'صيدلية', ja: '薬局', ru: 'аптека', ex: 'I went to the 24-hour pharmacy for medicine.', exHi: 'मैं दवा लेने के लिए 24 घंटे खुली रहने वाली फार्मेसी में गया।', exEs: 'Fui a la farmacia de 24 horas por medicinas.', ic: '🏥' },
    { w: 'exhausted', p: '/ɪɡˈzɔːstɪd/', m: 'completely drained of physical or mental energy', hi: 'अत्यंत थका हुआ / निढाल', es: 'agotado / exhausto', fr: 'épuisé', de: 'erschöpft', pt: 'exausto', zh: '筋疲力尽的', ar: 'مرهق للغاية', ja: '疲れ果てた', ru: 'истощенный / обессиленный', ex: 'After the long shift, she was totally exhausted.', exHi: 'लंबी शिफ्ट के बाद, वह पूरी तरह से थक गई थी।', exEs: 'Después del largo turno, estaba totalmente exhausta.', ic: '😫' },
    { w: 'appointment', p: '/əˈpɔɪntmənt/', m: 'an arrangement to meet someone at a particular time', hi: 'मुलाकात का समय / अपॉइंटमेंट', es: 'cita médica', fr: 'rendez-vous', de: 'Termin', pt: 'consulta / agendamento', zh: '预约', ar: 'موعد', ja: '予約 / 診察予約', ru: 'приём / запись', ex: 'I booked a doctor\'s appointment for tomorrow morning.', exHi: 'मैंने कल सुबह के लिए डॉक्टर का अपॉइंटमेंट बुक किया।', exEs: 'Reservé una cita médica para mañana por la mañana.', ic: '📅' },
    { w: 'painkiller', p: '/ˈpeɪnkɪlər/', m: 'a drug or medicine for relieving pain', hi: 'दर्द निवारक दवा', es: 'analgésico / calmante', fr: 'antidouleur', de: 'Schmerzmittel', pt: 'analgésico', zh: '止痛药', ar: 'مسكن آلام', ja: '鎮痛剤 / 痛み止め', ru: 'обезболивающее', ex: 'The doctor recommended a mild painkiller.', exHi: 'डॉक्टर ने एक हल्की दर्द निवारक दवा की सलाह दी।', exEs: 'El médico recomendó un analgésico suave.', ic: '💊' },
    { w: 'remedy', p: '/ˈremədi/', m: 'a treatment or medicine for an illness or injury', hi: 'उपचार / घरेलू उपाय', es: 'remedio / tratamiento', fr: 'remède', de: 'Heilmittel / Hausmittel', pt: 'remédio caseiro', zh: '疗法 / 补救措施', ar: 'علاج / دواء شافٍ', ja: '治療法 / 救済策', ru: 'средство / лекарство', ex: 'Ginger tea is an effective home remedy.', exHi: 'अदरक की चाय एक प्रभावी घरेलू उपाय है।', exEs: 'El té de jengibre es un remedio casero eficaz.', ic: '🫖' },
    { w: 'injured', p: '/ˈɪndʒəd/', m: 'physically harmed or damaged', hi: 'चोटिल / घायल', es: 'lesionado / herido', fr: 'blessé', de: 'verletzt', pt: 'machucado / ferido', zh: '受伤的', ar: 'مصاب / مجروح', ja: '怪我をした', ru: 'травмированный', ex: 'He injured his ankle during the soccer match.', exHi: 'फुटबॉल मैच के दौरान उसका टखना चोटिल हो गया।', exEs: 'Se lesionó el tobillo durante el partido de fútbol.', ic: '🩹' },
    { w: 'recover', p: '/rɪˈkʌvər/', m: 'return to a normal state of health or strength', hi: 'ठीक होना / स्वस्थ होना', es: 'recuperarse', fr: 'se rétablir / guérir', de: 'sich erholen / genesen', pt: 'recuperar-se', zh: '恢复健康', ar: 'يتعافى / يشفى', ja: '回復する', ru: 'выздоравливать', ex: 'It took him a week to recover from the virus.', exHi: 'वायरस से ठीक होने में उसे एक सप्ताह लगा।', exEs: 'Le llevó una semana recuperarse del virus.', ic: '💪' },
    { w: 'flu', p: '/fluː/', m: 'influenza; a common viral infection', hi: 'फ्लू / जुकाम', es: 'gripe / influenza', fr: 'grippe', de: 'Grippe', pt: 'gripe', zh: '流行性感冒', ar: 'إنفلونزا', ja: 'インフルエンザ', ru: 'грипп', ex: 'Stay at home if you have the flu.', exHi: 'यदि आपको फ्लू है तो घर पर रहें।', exEs: 'Quédate en casa si tienes gripe.', ic: '🦠' },
    { w: 'stomachache', p: '/ˈstʌməkeɪk/', m: 'pain in a person\'s belly or abdomen', hi: 'पेट दर्द', es: 'dolor de estómago', fr: 'mal d\'estomac', de: 'Magenschmerzen', pt: 'dor de estômago', zh: '胃痛 / 肚子痛', ar: 'مغص / وجع بطن', ja: '腹痛 / 胃痛', ru: 'боль в животе', ex: 'Eating too fast gave him a stomachache.', exHi: 'बहुत तेजी से खाने से उसके पेट में दर्द हो गया।', exEs: 'Comer demasiado rápido le causó dolor de estómago.', ic: '🤢' },
    { w: 'tablet', p: '/ˈtæblət/', m: 'a small disc or cylinder of compressed solid medicine', hi: 'गोली / टैबलेट', es: 'comprimido / pastilla', fr: 'comprimé', de: 'Tablette', pt: 'comprimido / pílula', zh: '药片', ar: 'قرص دواء', ja: '錠剤', ru: 'таблетка', ex: 'Take one tablet twice a day after meals.', exHi: 'भोजन के बाद दिन में दो बार एक गोली लें।', exEs: 'Tome una pastilla dos veces al día después de las comidas.', ic: '💊' },
    { w: 'clinic', p: '/ˈklɪnɪk/', m: 'an establishment or hospital department providing medical treatment', hi: 'क्लिनिक / चिकित्सालय', es: 'clínica / consultorio', fr: 'clinique / cabinet médical', de: 'Klinik / Praxis', pt: 'clínica médica', zh: '诊所', ar: 'عيادة', ja: '診療所 / クリニック', ru: 'клиника / амбулатория', ex: 'The health clinic is open until six in the evening.', exHi: 'हेल्थ क्लिनिक शाम छह बजे तक खुला रहता है।', exEs: 'La clínica de salud está abierta hasta las seis de la tarde.', ic: '🏥' },
    { w: 'rest', p: '/rest/', m: 'cease work or movement in order to relax or recover strength', hi: 'आराम करना', es: 'descansar / reposo', fr: 'se reposer / repos', de: 'ausruhen / Ruhe', pt: 'descansar / repouso', zh: '休息', ar: 'راحة / يستريح', ja: '休む / 休息', ru: 'отдыхать / покой', ex: 'You should get plenty of rest this weekend.', exHi: 'आपको इस सप्ताहांत भरपूर आराम करना चाहिए।', exEs: 'Deberías descansar mucho este fin de semana.', ic: '🛌' },
    { w: 'hydrate', p: '/ˈhaɪdreɪt/', m: 'cause to absorb water; supply fluid to', hi: 'पानी की पूर्ति करना / हाइड्रेट रहना', es: 'hidratar / hidratarse', fr: 's\'hydrater', de: 'mit Flüssigkeit versorgen', pt: 'hidratar-se', zh: '补充水分', ar: 'يرطب الجسم بالسوائل', ja: '水分補給する', ru: 'увлажнять / пить воду', ex: 'Drink coconut water to hydrate quickly.', exHi: 'जल्दी हाइड्रेट होने के लिए नारियल पानी पिएं।', exEs: 'Beba agua de coco para hidratarse rápidamente.', ic: '💧' }
  ],
  chunks: [
    { phrase: 'I have a headache and a fever', meaning: 'expressing multiple symptoms', hi: 'मुझे सिरदर्द और बुखार है', es: 'tengo dolor de cabeza y fiebre', fr: 'j\'ai mal à la tête et de la fièvre', de: 'ich habe Kopfschmerzen und Fieber', pt: 'estou com dor de cabeça e febre', zh: '我头痛还发烧', ar: 'عندي صداع وحمى', ja: '頭痛と熱があります', note: 'Standard symptom reporting chunk.', ic: '🤒' },
    { phrase: 'you should see a doctor', meaning: 'giving strong healthcare advice', hi: 'आपको डॉक्टर को दिखाना चाहिए', es: 'deberías ver a un médico', fr: 'tu devrais consulter un médecin', de: 'du solltest einen Arzt aufsuchen', pt: 'você deveria ir ao médico', zh: '你应该去看医生', ar: 'يجب عليك زيارة الطبيب', ja: '医者に診てもらうべきです', note: 'Core modal advice pattern.', ic: '🩺' },
    { phrase: 'take this medicine twice a day', meaning: 'dosage frequency instruction', hi: 'यह दवा दिन में दो बार लें', es: 'tome esta medicina dos veces al día', fr: 'prenez ce médicament deux fois par jour', de: 'nehmen Sie diese Medizin zweimal täglich', pt: 'tome este remédio duas vezes ao dia', zh: '每天服用此药两次', ar: 'تناول هذا الدواء مرتين يومياً', ja: 'この薬を1日2回服用してください', note: 'Medical prescription instruction.', ic: '💊' },
    { phrase: 'I feel dizzy and exhausted', meaning: 'describing physical sensations', hi: 'मुझे चक्कर आ रहे हैं और बहुत थकान महसूस हो रही है', es: 'me siento mareado y exhausto', fr: 'je me sens étourdi et épuisé', de: 'ich fühle mich schwindelig und erschöpft', pt: 'me sinto tonto e exausto', zh: '我感觉头晕且筋疲力尽', ar: 'أشعر بالدوار والإرهاق', ja: 'めまいがして疲れ果てています', note: 'Describing sensory state with "feel".', ic: '💫' },
    { phrase: 'you shouldn\'t stay up late', meaning: 'advising against harmful habits', hi: 'आपको देर रात तक नहीं जागना चाहिए', es: 'no deberías quedarte despierto hasta tarde', fr: 'tu ne devrais pas veiller tard', de: 'du solltest nicht bis spät aufbleiben', pt: 'você não deveria dormir tarde', zh: '你不应该熬夜', ar: 'لا ينبغي لك السهر لوقت متأخر', ja: '夜更かしするべきではありません', note: 'Negative modal recommendation.', ic: '🌙' },
    { phrase: 'how long have you felt this way', meaning: 'doctor inquiry about symptom duration', hi: 'आप कब से ऐसा महसूस कर रहे हैं?', es: '¿desde cuándo se siente así?', fr: 'depuis combien de temps ressentez-vous cela ?', de: 'wie lange fühlen Sie sich schon so?', pt: 'há quanto tempo você se sente assim?', zh: '你感觉这样有多久了？', ar: 'منذ متى وأنت تشعر بهذا؟', ja: 'いつからこのような症状がありますか？', note: 'Clinical question formula.', ic: '⏱️' },
    { phrase: 'make an appointment with', meaning: 'scheduling a consultation', hi: 'अपॉइंटमेंट लेना', es: 'hacer una cita con', fr: 'prendre rendez-vous avec', de: 'einen Termin vereinbaren mit', pt: 'marcar uma consulta com', zh: '与...预约', ar: 'حجز موعد مع', ja: '〜の予約を取る', note: 'Administrative medical chunk.', ic: '📅' },
    { phrase: 'get plenty of rest', meaning: 'recommending sleep and recuperation', hi: 'भरपूर आराम करें', es: 'descansa mucho', fr: 'reposez-vous beaucoup', de: 'ruhen Sie sich viel aus', pt: 'descanse bastante', zh: '多休息', ar: 'احصل على قسط وافر من الراحة', ja: '十分な休養をとる', note: 'Universal recovery advice.', ic: '🛌' }
  ],
  grammar: {
    title: 'Expressing Symptoms & Giving Advice with Should / Shouldn\'t',
    concept: 'Using "have a + noun" vs "feel + adjective" for symptoms, and modal verb "should/shouldn\'t" for recommendations.',
    patterns: [
      {
        title: 'Describing Symptoms (Have vs Feel)',
        structure: 'Subject + have/has + [a headache / a fever / a cough] | Subject + feel/feels + [dizzy / sick / exhausted]',
        rule: 'Use "have a + [noun]" for specific ailments and "feel + [adjective]" for subjective physical sensations.',
        examples: [
          { en: 'I have a sore throat and a mild fever.', hi: 'मुझे गले में खराश और हल्का बुखार है।', es: 'Tengo dolor de garganta y fiebre leve.' },
          { en: 'She feels dizzy and nauseous this morning.', hi: 'वह आज सुबह चक्कर और मतली महसूस कर रही है।', es: 'Ella se siente mareada y con náuseas esta mañana.' }
        ]
      },
      {
        title: 'Giving Advice with "Should" and "Shouldn\'t"',
        structure: 'Subject + should / shouldn\'t + Base Verb + Complement',
        rule: 'Use "should" to give positive recommendations and "shouldn\'t" (should not) to advise against an action. The main verb stays in base form.',
        examples: [
          { en: 'You should drink warm herbal tea and rest.', hi: 'आपको गर्म हर्बल चाय पीनी चाहिए और आराम करना चाहिए।', es: 'Deberías beber té de hierbas caliente y descansar.' },
          { en: 'He shouldn\'t lift heavy weights while injured.', hi: 'चोटिल होने पर उसे भारी वजन नहीं उठाना चाहिए।', es: 'No debería levantar peso pesado mientras esté lesionado.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'I am headache.',
      cor: 'I have a headache.',
      exp: 'Ailments require "have a + ailment", not the verb "to be".',
      hi: 'सिरदर्द के लिए "I have a headache" कहें, "I am headache" नहीं।',
      es: 'Diga "I have a headache", no "I am headache".'
    },
    {
      inc: 'You should to see a doctor.',
      cor: 'You should see a doctor.',
      exp: 'Modal verbs like "should" are followed directly by the base verb without "to".',
      hi: '"Should" के बाद बिना "to" के base verb (see) आता है।',
      es: '"Should" va seguido del verbo base sin "to".'
    },
    {
      inc: 'He shouldn\'t to drink cold water.',
      cor: 'He shouldn\'t drink cold water.',
      exp: 'Never use "to" after "shouldn\'t".',
      hi: '"Shouldn\'t" के बाद "to" का प्रयोग न करें।',
      es: 'No use "to" después de "shouldn\'t".'
    },
    {
      inc: 'I feel painly.',
      cor: 'I feel in pain. / I feel sick.',
      exp: '"Feel" takes a predicate adjective ("sick", "dizzy", "weak"), not an adverb.',
      hi: '"Feel" के बाद adjective (sick, dizzy) आता है।',
      es: '"Feel" va con adjetivo ("sick", "dizzy").'
    }
  ],
  dialogues: [
    {
      title: 'Consulting a Doctor at the Medical Clinic',
      context: 'Dr. Rivera examines Marcus who has been unwell for two days.',
      charA: { name: 'Dr. Rivera', av: '👩‍⚕️', role: 'Physician' },
      charB: { name: 'Marcus', av: '👨‍💼', role: 'Patient' },
      turns: [
        { spk: 'Dr. Rivera', text: 'Good morning Marcus. What symptoms are you experiencing today?', hi: 'शुभ प्रभात मार्कस। आज आप किन लक्षणों का अनुभव कर रहे हैं?', es: 'Buenos días, Marcus. ¿Qué síntomas tiene hoy?' },
        { spk: 'Marcus', text: 'I have a severe headache, a sore throat, and I feel dizzy whenever I stand up.', hi: 'मुझे बहुत तेज सिरदर्द, गले में खराश है और जब भी मैं खड़ा होता हूँ तो मुझे चक्कर आते हैं।', es: 'Tengo un fuerte dolor de cabeza, dolor de garganta y me siento mareado cuando me pongo de pie.' },
        { spk: 'Dr. Rivera', text: 'Your temperature is slightly elevated. You have a seasonal viral infection. You should get plenty of bed rest.', hi: 'आपका तापमान थोड़ा बढ़ा हुआ है। आपको मौसमी वायरल संक्रमण है। आपको भरपूर आराम करना चाहिए।', es: 'Su temperatura está algo elevada. Tiene una infección viral estacional. Debería guardar reposo en cama.' },
        { spk: 'Marcus', text: 'Should I take any medication for the fever?', hi: 'क्या मुझे बुखार के लिए कोई दवा लेनी चाहिए?', es: '¿Debería tomar algún medicamento para la fiebre?' },
        { spk: 'Dr. Rivera', text: 'Yes, take this painkiller tablet twice a day after food, and you shouldn\'t go to work until the fever breaks.', hi: 'हाँ, भोजन के बाद दिन में दो बार यह पेनकिलर टैबलेट लें, और जब तक बुखार न उतरे आपको काम पर नहीं जाना चाहिए।', es: 'Sí, tome esta pastilla dos veces al día después de comer, y no debería ir a trabajar hasta que baje la fiebre.' }
      ]
    },
    {
      title: 'Visiting the Community Pharmacy',
      context: 'Chloe asks the pharmacist for advice on allergy symptoms.',
      charA: { name: 'Chloe', av: '👩‍💼', role: 'Customer' },
      charB: { name: 'Raj', av: '👨‍⚕️', role: 'Pharmacist' },
      turns: [
        { spk: 'Raj', text: 'Hello! How can I assist you today?', hi: 'नमस्ते! आज मैं आपकी क्या मदद कर सकता हूँ?', es: '¡Hola! ¿En qué puedo ayudarle hoy?' },
        { spk: 'Chloe', text: 'I have a runny nose and itchy eyes. Do you have any non-drowsy allergy relief?', hi: 'मेरी नाक बह रही है और आँखों में खुजली हो रही है। क्या आपके पास कोई ऐसी एलर्जी की दवा है जिससे नींद न आए?', es: 'Tengo secreción nasal y picazón en los ojos. ¿Tiene algún antialérgico que no cause somnolencia?' },
        { spk: 'Raj', text: 'Yes, these tablets are very effective. You should take one every morning with water.', hi: 'हाँ, ये गोलियां बहुत प्रभावी हैं। आपको हर सुबह पानी के साथ एक गोली लेनी चाहिए।', es: 'Sí, estas pastillas son muy eficaces. Debería tomar una cada mañana con agua.' }
      ]
    }
  ],
  practice: [
    {
      id: 'a2_u07_l99_p01',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly gives medical advice using a modal verb?',
      sourceSentence: 'You should get plenty of rest and drink warm tea.',
      targetSentence: 'You should get plenty of rest and drink warm tea.',
      options: [
        { id: 'o1', text: 'You should get plenty of rest and drink warm tea.', isCorrect: true },
        { id: 'o2', text: 'You should to get plenty rest.', isCorrect: false },
        { id: 'o3', text: 'You are should get rest.', isCorrect: false },
        { id: 'o4', text: 'You should getting rest.', isCorrect: false }
      ],
      correctAnswer: 'You should get plenty of rest and drink warm tea.',
      explanation: '"Should + base verb" (should get).'
    },
    {
      id: 'a2_u07_l99_p02',
      type: 'fill_blank',
      prompt: 'Complete with the negative advice modal:',
      sourceSentence: 'If you have a fever, you ____ go to the office today.',
      targetSentence: 'If you have a fever, you shouldn\'t go to the office today.',
      options: [
        { id: 'o1', text: 'shouldn\'t', isCorrect: true },
        { id: 'o2', text: 'should to', isCorrect: false },
        { id: 'o3', text: 'don\'t should', isCorrect: false },
        { id: 'o4', text: 'not should', isCorrect: false }
      ],
      correctAnswer: 'shouldn\'t',
      explanation: 'Use "shouldn\'t" to advise against going to the office.'
    },
    {
      id: 'a2_u07_l99_p03',
      type: 'word_ordering',
      prompt: 'Assemble the symptom description:',
      sourceSentence: 'I have a sore throat and a persistent dry cough.',
      targetSentence: 'I have a sore throat and a persistent dry cough',
      wordBank: ['I', 'have', 'a', 'sore', 'throat', 'and', 'a', 'persistent', 'dry', 'cough', 'am', 'is'],
      explanation: 'I have + a sore throat + and a persistent dry cough.'
    },
    {
      id: 'a2_u07_l99_p04',
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'यदि आपको चक्कर आ रहे हैं तो आपको डॉक्टर को दिखाना चाहिए।',
      sourceTranslations: { hi: 'यदि आपको चक्कर आ रहे हैं तो आपको डॉक्टर को दिखाना चाहिए।' },
      targetSentence: 'If you feel dizzy you should see a doctor',
      wordBank: ['If', 'you', 'feel', 'dizzy', 'you', 'should', 'see', 'a', 'doctor', 'to', 'are', 'saw'],
      explanation: '"If you feel dizzy, you should see a doctor."'
    },
    {
      id: 'a2_u07_l99_p05',
      type: 'error_correction',
      prompt: 'Correct the error in this medical instruction:',
      sourceSentence: 'You should to take this tablet twice a day.',
      targetSentence: 'You should take this tablet twice a day.',
      options: [
        { id: 'o1', text: 'You should take this tablet twice a day.', isCorrect: true },
        { id: 'o2', text: 'You should taking this tablet twice a day.', isCorrect: false },
        { id: 'o3', text: 'You must to take this tablet twice a day.', isCorrect: false },
        { id: 'o4', text: 'You are should take this tablet twice a day.', isCorrect: false }
      ],
      correctAnswer: 'You should take this tablet twice a day.',
      explanation: 'Omit "to" after the modal "should".'
    },
    {
      id: 'a2_u07_l99_p06',
      type: 'listening',
      prompt: 'Listen and select what the doctor recommended:',
      audioText: 'You should stay in bed for two days and drink plenty of fluids.',
      targetSentence: 'You should stay in bed for two days and drink plenty of fluids.',
      options: [
        { id: 'o1', text: 'Stay in bed for two days and drink plenty of fluids', isCorrect: true },
        { id: 'o2', text: 'Run a marathon tomorrow morning', isCorrect: false },
        { id: 'o3', text: 'Eat cold ice cream and swim', isCorrect: false },
        { id: 'o4', text: 'Travel immediately on an airplane', isCorrect: false }
      ],
      correctAnswer: 'Stay in bed for two days and drink plenty of fluids',
      explanation: 'The doctor advised: "...stay in bed for two days and drink plenty of fluids."'
    },
    {
      id: 'a2_u07_l99_p07',
      type: 'dialogue_completion',
      prompt: 'Select the best doctor response:',
      sourceSentence: 'Patient: "I have had a high fever since last night."\nDoctor: "____"',
      targetSentence: 'Let me check your temperature and prescribe medication.',
      options: [
        { id: 'o1', text: 'Let me check your temperature and prescribe medication.', isCorrect: true },
        { id: 'o2', text: 'You were buying shoes yesterday.', isCorrect: false },
        { id: 'o3', text: 'Because of the grocery discount.', isCorrect: false },
        { id: 'o4', text: 'How much are the fitting rooms?', isCorrect: false }
      ],
      correctAnswer: 'Let me check your temperature and prescribe medication.',
      explanation: 'Direct clinical response.'
    },
    {
      id: 'a2_u07_l99_p08',
      type: 'match_pairs',
      prompt: 'Match each medical condition with its term:',
      options: [
        { id: 'm1', text: 'Headache' },
        { id: 'm1_m', text: 'Pain in the Head' },
        { id: 'm2', text: 'Sore throat' },
        { id: 'm2_m', text: 'Throat Irritation' },
        { id: 'm3', text: 'Prescription' },
        { id: 'm3_m', text: 'Doctor Medication Order' },
        { id: 'm4', text: 'Pharmacy' },
        { id: 'm4_m', text: 'Chemist Shop' }
      ]
    },
    {
      id: 'a2_u07_l99_p09',
      type: 'recognition',
      prompt: 'Which verb is used with the sensation "dizzy"?',
      sourceSentence: 'I feel dizzy after standing up too quickly.',
      targetSentence: 'feel is used with sensory adjectives like dizzy.',
      options: [
        { id: 'o1', text: 'feel', isCorrect: true },
        { id: 'o2', text: 'have a', isCorrect: false },
        { id: 'o3', text: 'make', isCorrect: false },
        { id: 'o4', text: 'do', isCorrect: false }
      ],
      correctAnswer: 'feel',
      explanation: 'Use "feel + adjective" (feel dizzy).'
    },
    {
      id: 'a2_u07_l99_p10',
      type: 'speaking',
      prompt: 'Speak this health advice aloud clearly:',
      targetSentence: 'You should make an appointment with the specialist if the symptoms persist.',
      audioText: 'You should make an appointment with the specialist if the symptoms persist.'
    },
    {
      id: 'a2_u07_l99_p11',
      type: 'fill_blank',
      prompt: 'Choose the correct verb for physical ailments:',
      sourceSentence: 'She ____ a mild headache after working on the computer all day.',
      targetSentence: 'She has a mild headache after working on the computer all day.',
      options: [
        { id: 'o1', text: 'has', isCorrect: true },
        { id: 'o2', text: 'is', isCorrect: false },
        { id: 'o3', text: 'feels a', isCorrect: false },
        { id: 'o4', text: 'does', isCorrect: false }
      ],
      correctAnswer: 'has',
      explanation: '3rd person singular takes "has a headache".'
    },
    {
      id: 'a2_u07_l99_p12',
      type: 'word_ordering',
      prompt: 'Reconstruct the negative health recommendation:',
      sourceSentence: 'You shouldn\'t drink iced water when you have a sore throat.',
      targetSentence: 'You shouldn\'t drink iced water when you have a sore throat',
      wordBank: ['You', 'shouldn\'t', 'drink', 'iced', 'water', 'when', 'you', 'have', 'a', 'sore', 'throat', 'to', 'are'],
      explanation: 'You shouldn\'t drink + iced water + when you have a sore throat.'
    },
    {
      id: 'a2_u07_l99_p13',
      type: 'multiple_choice',
      prompt: 'What is the correct English expression for when your head hurts?',
      sourceSentence: 'I have a headache.',
      targetSentence: 'I have a headache.',
      options: [
        { id: 'o1', text: 'I have a headache.', isCorrect: true },
        { id: 'o2', text: 'I am headache.', isCorrect: false },
        { id: 'o3', text: 'My head is paining me.', isCorrect: false },
        { id: 'o4', text: 'I have pain of head.', isCorrect: false }
      ],
      correctAnswer: 'I have a headache.',
      explanation: '"I have a headache" is the idiomatic standard.'
    },
    {
      id: 'a2_u07_l99_p14',
      type: 'listen_and_type',
      prompt: 'Listen and assemble the sentence:',
      audioText: 'The doctor advised me to rest and drink hot tea.',
      targetSentence: 'The doctor advised me to rest and drink hot tea',
      wordBank: ['The', 'doctor', 'advised', 'me', 'to', 'rest', 'and', 'drink', 'hot', 'tea', 'is', 'did']
    },
    {
      id: 'a2_u07_l99_p15',
      type: 'personal_production',
      prompt: 'Write 2 sentences giving health advice to a friend with a cold using "should" and "shouldn\'t":',
      targetSentence: 'You should drink plenty of warm fluids. You shouldn\'t go outdoors in the cold weather.',
      audioText: 'You should drink plenty of warm fluids. You shouldn\'t go outdoors in the cold weather.'
    }
  ],
  review: [
    {
      id: 'a2_u07_l99_r01',
      type: 'multiple_choice',
      prompt: 'Select the sentence with correct modal advice syntax:',
      sourceSentence: 'He should see a doctor as soon as possible.',
      targetSentence: 'He should see a doctor as soon as possible.',
      options: [
        { id: 'o1', text: 'He should see a doctor as soon as possible.', isCorrect: true },
        { id: 'o2', text: 'He should to see a doctor as soon as possible.', isCorrect: false },
        { id: 'o3', text: 'He is should see a doctor.', isCorrect: false },
        { id: 'o4', text: 'He should seeing a doctor.', isCorrect: false }
      ],
      correctAnswer: 'He should see a doctor as soon as possible.',
      explanation: '"Should + base verb".'
    },
    {
      id: 'a2_u07_l99_r02',
      type: 'word_ordering',
      prompt: 'Assemble the sentence advising hydration:',
      sourceSentence: 'You should hydrate and drink coconut water regularly.',
      targetSentence: 'You should hydrate and drink coconut water regularly',
      wordBank: ['You', 'should', 'hydrate', 'and', 'drink', 'coconut', 'water', 'regularly', 'to', 'are'],
      explanation: 'You should hydrate + and drink coconut water regularly.'
    },
    {
      id: 'a2_u07_l99_r03',
      type: 'fill_blank',
      prompt: 'Complete with the symptom description:',
      sourceSentence: 'I feel completely ____ after working fourteen hours without a break.',
      targetSentence: 'I feel completely exhausted after working fourteen hours without a break.',
      options: [
        { id: 'o1', text: 'exhausted', isCorrect: true },
        { id: 'o2', text: 'fever', isCorrect: false },
        { id: 'o3', text: 'headache', isCorrect: false },
        { id: 'o4', text: 'prescription', isCorrect: false }
      ],
      correctAnswer: 'exhausted',
      explanation: '"Exhausted" is an adjective following "feel completely".'
    },
    {
      id: 'a2_u07_l99_r04',
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'आपको भोजन के बाद यह दवा लेनी चाहिए।',
      sourceTranslations: { hi: 'आपको भोजन के बाद यह दवा लेनी चाहिए।' },
      targetSentence: 'You should take this medicine after meals',
      wordBank: ['You', 'should', 'take', 'this', 'medicine', 'after', 'meals', 'to', 'taking', 'are'],
      explanation: '"You should take this medicine after meals."'
    },
    {
      id: 'a2_u07_l99_r05',
      type: 'speaking',
      prompt: 'Speak this medical recommendation clearly:',
      targetSentence: 'You shouldn\'t take heavy medication on an empty stomach.',
      audioText: 'You shouldn\'t take heavy medication on an empty stomach.'
    }
  ],
  assessment: [
    {
      id: 'a2_u07_l99_a01',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses a physical symptom?',
      sourceSentence: 'She has a fever and a sore throat.',
      targetSentence: 'She has a fever and a sore throat.',
      options: [
        { id: 'o1', text: 'She has a fever and a sore throat.', isCorrect: true },
        { id: 'o2', text: 'She is a fever and sore throat.', isCorrect: false },
        { id: 'o3', text: 'She feels a fever.', isCorrect: false },
        { id: 'o4', text: 'She have fever.', isCorrect: false }
      ],
      correctAnswer: 'She has a fever and a sore throat.',
      explanation: '"She has a fever" is correct grammar.'
    },
    {
      id: 'a2_u07_l99_a02',
      type: 'fill_blank',
      prompt: 'Complete with the modal verb for giving advice:',
      sourceSentence: 'If the pain gets worse, you ____ consult a doctor.',
      targetSentence: 'If the pain gets worse, you should consult a doctor.',
      options: [
        { id: 'o1', text: 'should', isCorrect: true },
        { id: 'o2', text: 'should to', isCorrect: false },
        { id: 'o3', text: 'are', isCorrect: false },
        { id: 'o4', text: 'have', isCorrect: false }
      ],
      correctAnswer: 'should',
      explanation: '"Should + consult" gives appropriate advice.'
    },
    {
      id: 'a2_u07_l99_a03',
      type: 'word_ordering',
      prompt: 'Arrange the clinical advice sentence:',
      sourceSentence: 'You should get plenty of rest and take your medicine on time.',
      targetSentence: 'You should get plenty of rest and take your medicine on time',
      wordBank: ['You', 'should', 'get', 'plenty', 'of', 'rest', 'and', 'take', 'your', 'medicine', 'on', 'time', 'to', 'is'],
      explanation: 'You should get plenty of rest + and take your medicine on time.'
    },
    {
      id: 'a2_u07_l99_a04',
      type: 'error_correction',
      prompt: 'Select the corrected sentence:',
      sourceSentence: 'You shouldn\'t to drive when you are dizzy.',
      targetSentence: 'You shouldn\'t drive when you are dizzy.',
      options: [
        { id: 'o1', text: 'You shouldn\'t drive when you are dizzy.', isCorrect: true },
        { id: 'o2', text: 'You shouldn\'t to driving when dizzy.', isCorrect: false },
        { id: 'o3', text: 'You don\'t should drive when dizzy.', isCorrect: false },
        { id: 'o4', text: 'You not should drive when dizzy.', isCorrect: false }
      ],
      correctAnswer: 'You shouldn\'t drive when you are dizzy.',
      explanation: 'Delete "to" after "shouldn\'t".'
    },
    {
      id: 'a2_u07_l99_a05',
      type: 'listening',
      prompt: 'Listen and select what the patient felt:',
      audioText: 'I felt dizzy and nauseous after eating the spoiled seafood.',
      targetSentence: 'I felt dizzy and nauseous after eating the spoiled seafood.',
      options: [
        { id: 'o1', text: 'Dizzy and nauseous', isCorrect: true },
        { id: 'o2', text: 'Strong and energetic', isCorrect: false },
        { id: 'o3', text: 'Excited and happy', isCorrect: false },
        { id: 'o4', text: 'Hungry and thirsty', isCorrect: false }
      ],
      correctAnswer: 'Dizzy and nauseous',
      explanation: 'The audio said: "...dizzy and nauseous..."'
    }
  ]
};

export const LESSON_100_CONFIG: LessonConfigA2 = {
  num: 100,
  title: 'Future Plans, Intentions & Fixed Arrangements',
  icon: '🗓️',
  estMin: 25,
  objTitle: 'Expressing Future Intentions (be going to) & Fixed Arrangements (Present Continuous)',
  objDesc: 'Distinguish between personal intentions/plans with "be going to" and confirmed calendar arrangements with Present Continuous for future.',
  objHi: 'भविष्य के इरादों ("be going to") और निश्चित कैलेंडर व्यवस्थाओं (Future के लिए Present Continuous) के बीच अंतर करना और योजनाएं व्यक्त करना सीखें।',
  objEs: 'Distinguir entre intenciones/planes con "be going to" y acuerdos fijos con Present Continuous para el futuro.',
  canDo: [
    'I can express personal future intentions and goals using "be going to + verb".',
    'I can describe scheduled meetings and confirmed trips using the Present Continuous for future.',
    'I can ask friends and colleagues about their upcoming weekend and holiday plans.',
    'I can contrast spontaneous decisions (will) with pre-planned intentions (be going to).'
  ],
  canDoHi: [
    'मैं "be going to + verb" का उपयोग करके व्यक्तिगत भविष्य के इरादों और लक्ष्यों को व्यक्त कर सकता हूँ।',
    'मैं Present Continuous का उपयोग करके निर्धारित बैठकों और पक्की यात्राओं का वर्णन कर सकता हूँ।',
    'मैं दोस्तों और सहकर्मियों से उनकी आने वाली योजनाओं के बारे में पूछ सकता हूँ।',
    'मैं तुरंत लिए गए निर्णयों (will) और पूर्व-नियोजित इरादों (be going to) में अंतर कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo expresar intenciones y metas futuras usando "be going to + verbo".',
    'Puedo describir reuniones programadas y viajes confirmados usando el Present Continuous para futuro.',
    'Puedo preguntar a amigos y colegas sobre sus planes para el fin de semana o vacaciones.',
    'Puedo contrastar decisiones espontáneas (will) con intenciones planificadas (be going to).'
  ],
  vocab: [
    { w: 'intention', p: '/ɪnˈtenʃn/', m: 'a thing intended; an aim or plan', hi: 'इरादा / मंशा', es: 'intención / propósito', fr: 'intention', de: 'Absicht / Vorhaben', pt: 'intenção', zh: '意图 / 打算', ar: 'نية / قصد', ja: '意図 / つもり', ru: 'намерение', ex: 'My intention is to study software engineering.', exHi: 'मेरा इरादा सॉफ्टवेयर इंजीनियरिंग पढ़ने का है।', exEs: 'Mi intención es estudiar ingeniería de software.', ic: '🎯' },
    { w: 'arrangement', p: '/əˈreɪndʒmənt/', m: 'a plan or preparation for a future event', hi: 'व्यवस्था / पक्की योजना', es: 'acuerdo / preparativo', fr: 'arrangement / disposition', de: 'Vereinbarung / Abmachung', pt: 'arranjo / compromisso', zh: '安排', ar: 'ترتيب / اتفاق', ja: '手配 / 取り決め', ru: 'договоренность / план', ex: 'We have made travel arrangements for next Friday.', exHi: 'हमने अगले शुक्रवार के लिए यात्रा की व्यवस्था की है।', exEs: 'Hemos hecho los preparativos de viaje para el próximo viernes.', ic: '✈️' },
    { w: 'itinerary', p: '/aɪˈtɪnərəri/', m: 'a planned route or journey', hi: 'यात्रा कार्यक्रम / यात्रा विवरण', es: 'itinerario', fr: 'itinéraire', de: 'Reiseplan / Reiseroute', pt: 'itinerário', zh: '行程 / 路线', ar: 'برنامج الرحلة', ja: '旅程 / 日程表', ru: 'маршрут / план поездки', ex: 'Our holiday itinerary includes visiting three cities.', exHi: 'हमारे अवकाश यात्रा कार्यक्रम में तीन शहरों का दौरा शामिल है।', exEs: 'Nuestro itinerario de vacaciones incluye visitar tres ciudades.', ic: '🗺️' },
    { w: 'upcoming', p: '/ˈʌpkʌmɪŋ/', m: 'about to happen or appear soon', hi: 'आगामी / आने वाला', es: 'próximo / venidero', fr: 'à venir / prochain', de: 'bevorstehend / kommend', pt: 'próximo / iminente', zh: '即将到来的', ar: 'قادم / وشيك', ja: '今度の / 近日中の', ru: 'предстоящий', ex: 'She is preparing for the upcoming conference.', exHi: 'वह आगामी सम्मेलन की तैयारी कर रही है।', exEs: 'Se está preparando para la próxima conferencia.', ic: '🔜' },
    { w: 'postpone', p: '/pəʊˈspəʊn/', m: 'arrange for something to take place at a later time', hi: 'स्थगित करना / आगे बढ़ाना', es: 'posponer / aplazar', fr: 'reporter / différer', de: 'verschieben', pt: 'adiar', zh: '推迟', ar: 'تأجيل', ja: '延期する', ru: 'откладывать / переносить', ex: 'They decided to postpone the launch until next month.', exHi: 'उन्होंने लॉन्च को अगले महीने तक के लिए टालने का फैसला किया।', exEs: 'Decidieron posponer el lanzamiento hasta el próximo mes.', ic: '⏸️' },
    { w: 'reschedule', p: '/ˌriːˈʃedjuːl/', m: 'change the time of a planned event', hi: 'पुनर्निर्धारित करना', es: 'reprogramar', fr: 'reprogrammer', de: 'neu ansetzen', pt: 'reagendar', zh: '重新安排时间', ar: 'إعادة جدولة', ja: '予定を変更する', ru: 'перенести на другое время', ex: 'Could we reschedule our meeting to Thursday?', exHi: 'क्या हम अपनी बैठक गुरुवार के लिए पुनर्निर्धारित कर सकते हैं?', exEs: '¿Podríamos reprogramar nuestra reunión para el jueves?', ic: '🔄' },
    { w: 'attend', p: '/əˈtend/', m: 'be present at an event, meeting, or function', hi: 'उपस्थित होना / भाग लेना', es: 'asistir a', fr: 'assister à', de: 'teilnehmen an', pt: 'comparecer a', zh: '参加 / 出席', ar: 'حضور', ja: '出席する', ru: 'посещать / присутствовать', ex: 'I am attending a workshop tomorrow morning.', exHi: 'मैं कल सुबह एक कार्यशाला में भाग ले रहा हूँ।', exEs: 'Asistiré a un taller mañana por la mañana.', ic: '🎫' },
    { w: 'reserve', p: '/rɪˈzɜːv/', m: 'retain for future use; book in advance', hi: 'आरक्षित करना / बुक करना', es: 'reservar', fr: 'réserver', de: 'reservieren / buchen', pt: 'reservar', zh: '预订', ar: 'حجز', ja: '予約する', ru: 'бронировать / резервировать', ex: 'I am going to reserve hotel rooms this afternoon.', exHi: 'मैं आज दोपहर होटल के कमरे बुक करने जा रहा हूँ।', exEs: 'Voy a reservar habitaciones de hotel esta tarde.', ic: '🏨' },
    { w: 'departure', p: '/dɪˈpɑːtʃər/', m: 'the action of leaving, especially on a journey', hi: 'प्रस्थान / रवानगी', es: 'salida / partida', fr: 'départ', de: 'Abreise / Abflug', pt: 'partida / embarque', zh: '出发 / 离港', ar: 'مغادرة', ja: '出発', ru: 'отправление / вылет', ex: 'Our flight departure is scheduled for 8:00 AM.', exHi: 'हमारी उड़ान का प्रस्थान सुबह 8:00 बजे निर्धारित है।', exEs: 'La salida de nuestro vuelo está programada para las 8:00 AM.', ic: '🛫' },
    { w: 'arrival', p: '/əˈraɪvl/', m: 'the action or process of arriving at a destination', hi: 'आगमन / पहुँचना', es: 'llegada', fr: 'arrivée', de: 'Ankunft', pt: 'chegada', zh: '到达', ar: 'وصول', ja: '到着', ru: 'прибытие', ex: 'We expect your arrival around noon.', exHi: 'हम दोपहर के आसपास आपके आगमन की उम्मीद करते हैं।', exEs: 'Esperamos su llegada alrededor del mediodía.', ic: '🛬' },
    { w: 'destination', p: '/ˌdestɪˈneɪʃn/', m: 'the place to which someone or something is going', hi: 'गंतव्य / मंजिल', es: 'destino', fr: 'destination', de: 'Reiseziel / Bestimmungsort', pt: 'destino', zh: '目的地', ar: 'وجهة', ja: '目的地', ru: 'место назначения', ex: 'Paris is our final travel destination.', exHi: 'पेरिस हमारा अंतिम यात्रा गंतव्य है।', exEs: 'París es nuestro destino final de viaje.', ic: '📍' },
    { w: 'deadline', p: '/ˈdedlaɪn/', m: 'the latest time or date by which something should be completed', hi: 'अंतिम तिथि / डेडलाइन', es: 'fecha límite / plazo', fr: 'date limite', de: 'Frist / Abgabetermin', pt: 'prazo final', zh: '截止日期', ar: 'الموعد النهائي', ja: '締め切り', ru: 'крайний срок', ex: 'The project deadline is next Friday.', exHi: 'परियोजना की अंतिम तिथि अगला शुक्रवार है।', exEs: 'El plazo del proyecto es el próximo viernes.', ic: '⏰' },
    { w: 'agenda', p: '/əˈdʒendə/', m: 'a list of items to be discussed at a meeting', hi: 'कार्यसूची / एजेंडा', es: 'orden del día / agenda', fr: 'ordre du jour', de: 'Tagesordnung', pt: 'pauta / agenda', zh: '议程', ar: 'جدول أعمال', ja: 'アジェンダ / 議事日程', ru: 'повестка дня', ex: 'What is the first topic on our meeting agenda?', exHi: 'हमारी बैठक के एजेंडे में पहला विषय क्या है?', exEs: '¿Cuál es el primer tema de nuestra agenda de reunión?', ic: '📋' },
    { w: 'session', p: '/ˈseʃn/', m: 'a period devoted to a particular activity', hi: 'सत्र / सेशन', es: 'sesión', fr: 'session / séance', de: 'Sitzung / Einheit', pt: 'sessão', zh: '会议 / 环节', ar: 'جلسة', ja: 'セッション', ru: 'сессия / занятие', ex: 'The training session starts at ten o\'clock.', exHi: 'प्रशिक्षण सत्र दस बजे शुरू होगा।', exEs: 'La sesión de capacitación comienza a las diez.', ic: '👥' },
    { w: 'enroll', p: '/ɪnˈrəʊl/', m: 'officially register as a member or student', hi: 'दाखिला लेना / नामांकित होना', es: 'inscribirse / matricularse', fr: 's\'inscrire', de: 'einschreiben / anmelden', pt: 'matricular-se', zh: '注册 / 报名', ar: 'يسجل / يلتحق', ja: '登録する / 入学する', ru: 'зачисляться / записываться', ex: 'I am going to enroll in an advanced English course.', exHi: 'मैं एक उन्नत अंग्रेजी पाठ्यक्रम में दाखिला लेने जा रहा हूँ।', exEs: 'Voy a inscribirme en un curso avanzado de inglés.', ic: '📝' },
    { w: 'abroad', p: '/əˈbrɔːd/', m: 'in or to a foreign country or countries', hi: 'विदेश में / परदेश', es: 'en el extranjero', fr: 'à l\'étranger', de: 'im Ausland', pt: 'no exterior / fora', zh: '在国外', ar: 'في الخارج', ja: '海外で', ru: 'за границей', ex: 'They are traveling abroad for their summer holidays.', exHi: 'वे अपनी गर्मियों की छुट्टियों के लिए विदेश यात्रा कर रहे हैं।', exEs: 'Viajan al extranjero para sus vacaciones de verano.', ic: '🌍' },
    { w: 'flight', p: '/flaɪt/', m: 'a journey in an aircraft', hi: 'उड़ान / फ्लाइट', es: 'vuelo', fr: 'vol', de: 'Flug', pt: 'voo', zh: '航班 / 飞行', ar: 'رحلة طيران', ja: 'フライト / 飛行便', ru: 'рейс / полет', ex: 'I am taking a direct flight to Tokyo on Monday.', exHi: 'मैं सोमवार को टोक्यो के लिए सीधी उड़ान ले रहा हूँ।', exEs: 'Tomo un vuelo directo a Tokio el lunes.', ic: '✈️' },
    { w: 'confirm', p: '/kənˈfɜːm/', m: 'establish the truth or correctness of; make definite', hi: 'पुष्टि करना / पक्का करना', es: 'confirmar', fr: 'confirmer', de: 'bestätigen', pt: 'confirmar', zh: '确认', ar: 'يؤكد', ja: '確認する', ru: 'подтверждать', ex: 'Please confirm your attendance by email.', exHi: 'कृपया ईमेल द्वारा अपनी उपस्थिति की पुष्टि करें।', exEs: 'Por favor, confirme su asistencia por correo electrónico.', ic: '✔️' },
    { w: 'organize', p: '/ˈɔːɡənaɪz/', m: 'arrange into a structured whole; coordinate', hi: 'आयोजित करना / व्यवस्थित करना', es: 'organizar', fr: 'organiser', de: 'organisieren', pt: 'organizar', zh: '组织', ar: 'ينظم', ja: '企画する', ru: 'организовывать', ex: 'We are organizing a team dinner for next Tuesday.', exHi: 'हम अगले मंगलवार के लिए टीम डिनर का आयोजन कर रहे हैं।', exEs: 'Estamos organizando una cena de equipo para el próximo martes.', ic: '🍽️' },
    { w: 'vacation', p: '/vəˈkeɪʃn/', m: 'an extended period of leisure and recreation', hi: 'छुट्टियां / अवकाश', es: 'vacaciones', fr: 'vacances', de: 'Urlaub', pt: 'férias', zh: '假期', ar: 'إجازة / عطلة', ja: '休暇 / 休み', ru: 'отпуск / каникулы', ex: 'Where are you going for your winter vacation?', exHi: 'आप अपनी सर्दियों की छुट्टियों के लिए कहाँ जा रहे हैं?', exEs: '¿Adónde vas para tus vacaciones de invierno?', ic: '🏖️' }
  ],
  chunks: [
    { phrase: 'I am going to visit my family', meaning: 'expressing future intention with "be going to"', hi: 'मैं अपने परिवार से मिलने जा रहा हूँ', es: 'voy a visitar a mi familia', fr: 'je vais rendre visite à ma famille', de: 'ich werde meine Familie besuchen', pt: 'vou visitar minha família', zh: '我打算去拜访我的家人', ar: 'أنا ذاهب لزيارة عائلتي', ja: '家族を訪問する予定です', note: 'Future intention formula.', ic: '👨‍👩‍👧‍👦' },
    { phrase: 'I am flying to Madrid next Monday', meaning: 'fixed future arrangement with ticket/schedule', hi: 'मैं अगले सोमवार मैड्रिड के लिए उड़ान भर रहा हूँ', es: 'vuelo a Madrid el próximo lunes', fr: 'je m\'envole pour Madrid lundi prochain', de: 'ich fliege nächsten Montag nach Madrid', pt: 'estou voando para Madri na próxima segunda', zh: '我下周一飞往马德里', ar: 'سأسافر جواً إلى مدريد الإثنين القادم', ja: '来週の月曜日にマドリードへ飛びます', note: 'Present continuous for fixed future.', ic: '✈️' },
    { phrase: 'what are your plans for the weekend', meaning: 'conversational inquiry about upcoming leisure', hi: 'सप्ताहांत के लिए आपकी क्या योजनाएं हैं?', es: '¿cuáles son tus planes para el fin de semana?', fr: 'quels sont tes projets pour le week-end ?', de: 'was hast du am Wochenende vor?', pt: 'quais são seus planos para o fim de semana?', zh: '你周末有什么打算？', ar: 'ما هي خططك لعطلة نهاية الأسبوع؟', ja: '週末の予定は何ですか？', note: 'Everyday conversational question.', ic: '🏖️' },
    { phrase: 'we are having a meeting at ten', meaning: 'scheduled calendar commitment', hi: 'हमारी दस बजे एक बैठक है', es: 'tenemos una reunión a las diez', fr: 'nous avons une réunion à dix heures', de: 'wir haben um zehn eine Besprechung', pt: 'temos uma reunião às dez', zh: '我们十点开会', ar: 'لدينا اجتماع في الساعة العاشرة', ja: '10時に会議があります', note: 'Workplace future arrangement.', ic: '🕒' },
    { phrase: 'I am planning to buy a new laptop', meaning: 'stating an objective/intention', hi: 'मैं एक नया लैपटॉप खरीदने की योजना बना रहा हूँ', es: 'estoy planeando comprar una nueva portátil', fr: 'je prévois d\'acheter un nouvel ordinateur', de: 'ich habe vor einen neuen Laptop zu kaufen', pt: 'estou planejando comprar um novo laptop', zh: '我打算买一台新笔记本电脑', ar: 'أنا أخطط لشراء حاسوب محمول جديد', ja: '新しいノートパソコンを買う予定です', note: 'Future intention collocation.', ic: '💻' },
    { phrase: 'are you going to attend the seminar', meaning: 'inquiring about someone\'s intention', hi: 'क्या आप सेमिनार में भाग लेने जा रहे हैं?', es: '¿vas a asistir al seminario?', fr: 'vas-tu assister au séminaire ?', de: 'wirst du am Seminar teilnehmen?', pt: 'você vai comparecer ao seminário?', zh: '你会参加研讨会吗？', ar: 'هل ستحضر الندوة؟', ja: 'セミナーに出席する予定ですか？', note: 'Question with "be going to".', ic: '🎓' },
    { phrase: 'reschedule for next week', meaning: 'moving event to a future date', hi: 'अगले सप्ताह के लिए पुनर्निर्धारित करना', es: 'reprogramar para la próxima semana', fr: 'reprogrammer pour la semaine prochaine', de: 'auf nächste Woche verschieben', pt: 'reagendar para a próxima semana', zh: '重新安排到下周', ar: 'إعادة الجدولة للأسبوع القادم', ja: '来週に変更する', note: 'Calendar adjustment phrase.', ic: '🔄' },
    { phrase: 'everything is booked and confirmed', meaning: 'arrangements are 100% finalized', hi: 'सब कुछ बुक और कन्फर्म है', es: 'todo está reservado y confirmado', fr: 'tout est réservé et confirmé', de: 'alles ist gebucht und bestätigt', pt: 'tudo está reservado e confirmado', zh: '一切均已预订并确认', ar: 'كل شيء محجوز ومؤكد', ja: 'すべて予約・確認済みです', note: 'Confirmation summary chunk.', ic: '✔️' }
  ],
  grammar: {
    title: 'Future with "Be Going To" vs. Present Continuous for Future',
    concept: 'Expressing intentions/plans with "be going to" and fixed schedule/calendar arrangements with Present Continuous.',
    patterns: [
      {
        title: 'Future Intentions with "Be Going To"',
        structure: 'Subject + BE (am/is/are) + going to + Base Verb + Complement',
        rule: 'Use "be going to" to express decisions, plans, or intentions formulated before the moment of speech.',
        examples: [
          { en: 'I am going to enroll in a coding bootcamp next month.', hi: 'मैं अगले महीने एक कोडिंग बूटकैंप में दाखिला लेने जा रहा हूँ।', es: 'Voy a inscribirme en un bootcamp de programación el próximo mes.' },
          { en: 'They are going to renovate their kitchen this summer.', hi: 'वे इस गर्मी में अपनी रसोई का नवीनीकरण करने जा रहे हैं।', es: 'Van a remodelar su cocina este verano.' }
        ]
      },
      {
        title: 'Fixed Arrangements with Present Continuous',
        structure: 'Subject + BE (am/is/are) + Verb-ing + Future Time Expression',
        rule: 'Use Present Continuous with a specific future time (tonight, tomorrow, next Monday) for confirmed arrangements involving other people or tickets.',
        examples: [
          { en: 'I am meeting the client at 3:00 PM tomorrow.', hi: 'मैं कल दोपहर 3:00 बजे क्लाइंट से मिल रहा हूँ।', es: 'Me reuniré con el cliente mañana a las 3:00 PM.' },
          { en: 'She is flying to Tokyo on Friday night.', hi: 'वह शुक्रवार रात टोक्यो के लिए उड़ान भर रही है।', es: 'Ella vuela a Tokio el viernes por la noche.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'I am go to travel to Paris.',
      cor: 'I am going to travel to Paris.',
      exp: 'Use "going to + base verb", not "go to".',
      hi: '"be going to + verb" का प्रयोग करें (I am going to travel)।',
      es: 'Use "I am going to travel".'
    },
    {
      inc: 'Tomorrow I meet my doctor (for fixed appointment).',
      cor: 'Tomorrow I am meeting my doctor.',
      exp: 'Use Present Continuous ("am meeting") for confirmed personal appointments in the future.',
      hi: 'भविष्य के पक्के अपॉइंटमेंट के लिए Present Continuous का प्रयोग करें।',
      es: 'Use Present Continuous para citas confirmadas en el futuro.'
    },
    {
      inc: 'She is going to starts her new job.',
      cor: 'She is going to start her new job.',
      exp: 'After "going to", the verb must be in its base infinitive form ("start", not "starts").',
      hi: '"going to" के बाद base verb ("start") आता है।',
      es: 'Tras "going to", el verbo va en forma base ("start").'
    },
    {
      inc: 'We will flying tomorrow (confusion of will and ing).',
      cor: 'We are flying tomorrow. / We will fly tomorrow.',
      exp: 'Do not mix "will" with "-ing". Use "are flying" or "will fly".',
      hi: '"will" के साथ "-ing" न जोड़ें; "are flying" या "will fly" कहें।',
      es: 'No mezcle "will" con "-ing".'
    }
  ],
  dialogues: [
    {
      title: 'Discussing Upcoming Summer Vacation Plans',
      context: 'Maya and Julian talk about their confirmed vacation schedules.',
      charA: { name: 'Maya', av: '👩‍💼', role: 'Designer' },
      charB: { name: 'Julian', av: '👨‍🎨', role: 'Architect' },
      turns: [
        { spk: 'Maya', text: 'Julian, what are your plans for the summer holidays?', hi: 'जूलियन, गर्मियों की छुट्टियों के लिए आपकी क्या योजनाएं हैं?', es: 'Julian, ¿cuáles son tus planes para las vacaciones de verano?' },
        { spk: 'Julian', text: 'I am flying to Lisbon on July 15th! I have already booked my flights and hotel.', hi: 'मैं 15 जुलाई को लिस्बन के लिए उड़ान भर रहा हूँ! मैंने अपनी फ्लाइट और होटल पहले ही बुक कर लिए हैं।', es: '¡Vuelo a Lisboa el 15 de julio! Ya reservé mis vuelos y hotel.' },
        { spk: 'Maya', text: 'That sounds amazing! I am going to stay in the country and learn surfing.', hi: 'यह बहुत बढ़िया लगता है! मैं देश में ही रहने वाली हूँ और सर्फिंग सीखने जा रही हूँ।', es: '¡Eso suena increíble! Voy a quedarme en el país y aprenderé a surfear.' },
        { spk: 'Julian', text: 'Are you going to take private lessons or join a camp?', hi: 'क्या आप निजी कक्षाएं लेने जा रहे हैं या किसी शिविर में शामिल होंगे?', es: '¿Vas a tomar clases privadas o unirte a un campamento?' }
      ]
    },
    {
      title: 'Rescheduling a Workplace Project Meeting',
      context: 'Carlos contacts Sonia to reschedule a team presentation.',
      charA: { name: 'Carlos', av: '👨‍💻', role: 'Project Lead' },
      charB: { name: 'Sonia', av: '👩‍💼', role: 'Operations Manager' },
      turns: [
        { spk: 'Carlos', text: 'Sonia, could we reschedule our 2:00 PM session today?', hi: 'सोनिया, क्या हम आज अपने दोपहर 2:00 बजे के सत्र को पुनर्निर्धारित कर सकते हैं?', es: 'Sonia, ¿podríamos reprogramar nuestra sesión de las 2:00 PM hoy?' },
        { spk: 'Sonia', text: 'Sure! I am meeting our supplier tomorrow morning, but I am free tomorrow at 3:00 PM.', hi: 'ज़रूर! मैं कल सुबह अपने आपूर्तिकर्ता से मिल रही हूँ, लेकिन कल दोपहर 3:00 बजे खाली हूँ।', es: '¡Claro! Me reuniré con nuestro proveedor mañana por la mañana, pero estoy libre a las 3:00 PM.' },
        { spk: 'Carlos', text: 'Perfect! I am going to send an updated calendar invitation right away.', hi: 'उत्तम! मैं तुरंत एक अपडेटेड कैलेंडर निमंत्रण भेजने जा रहा हूँ।', es: '¡Perfecto! Voy a enviar una invitación de calendario actualizada de inmediato.' }
      ]
    }
  ],
  practice: [
    {
      id: 'a2_u07_l100_p01',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "be going to" for future intentions?',
      sourceSentence: 'We are going to launch the new website next week.',
      targetSentence: 'We are going to launch the new website next week.',
      options: [
        { id: 'o1', text: 'We are going to launch the new website next week.', isCorrect: true },
        { id: 'o2', text: 'We are go to launch website next week.', isCorrect: false },
        { id: 'o3', text: 'We going to launch website next week.', isCorrect: false },
        { id: 'o4', text: 'We are going to launching website.', isCorrect: false }
      ],
      correctAnswer: 'We are going to launch the new website next week.',
      explanation: '"are going to + base verb" (launch).'
    },
    {
      id: 'a2_u07_l100_p02',
      type: 'fill_blank',
      prompt: 'Select the correct Present Continuous form for a confirmed future trip:',
      sourceSentence: 'She ____ to London on flight BA204 tomorrow morning.',
      targetSentence: 'She is flying to London on flight BA204 tomorrow morning.',
      options: [
        { id: 'o1', text: 'is flying', isCorrect: true },
        { id: 'o2', text: 'flies', isCorrect: false },
        { id: 'o3', text: 'flew', isCorrect: false },
        { id: 'o4', text: 'is fly', isCorrect: false }
      ],
      correctAnswer: 'is flying',
      explanation: 'Use Present Continuous ("is flying") for booked travel with specific flight details.'
    },
    {
      id: 'a2_u07_l100_p03',
      type: 'word_ordering',
      prompt: 'Assemble the question about future plans:',
      sourceSentence: 'What are you going to do this weekend?',
      targetSentence: 'What are you going to do this weekend',
      wordBank: ['What', 'are', 'you', 'going', 'to', 'do', 'this', 'weekend', 'will', 'is'],
      explanation: 'What + are + you + going to do + this weekend?'
    },
    {
      id: 'a2_u07_l100_p04',
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'मैं अगले महीने एक नया कोर्स शुरू करने जा रहा हूँ।',
      sourceTranslations: { hi: 'मैं अगले महीने एक नया कोर्स शुरू करने जा रहा हूँ।' },
      targetSentence: 'I am going to start a new course next month',
      wordBank: ['I', 'am', 'going', 'to', 'start', 'a', 'new', 'course', 'next', 'month', 'started', 'is'],
      explanation: '"I am going to start a new course next month."'
    },
    {
      id: 'a2_u07_l100_p05',
      type: 'error_correction',
      prompt: 'Correct the error in this future intention sentence:',
      sourceSentence: 'He is going to buys a new car next Friday.',
      targetSentence: 'He is going to buy a new car next Friday.',
      options: [
        { id: 'o1', text: 'He is going to buy a new car next Friday.', isCorrect: true },
        { id: 'o2', text: 'He is go to buy a new car next Friday.', isCorrect: false },
        { id: 'o3', text: 'He going to buy a new car next Friday.', isCorrect: false },
        { id: 'o4', text: 'He will going to buy a car.', isCorrect: false }
      ],
      correctAnswer: 'He is going to buy a new car next Friday.',
      explanation: '"going to" is followed by base verb "buy" (not "buys").'
    },
    {
      id: 'a2_u07_l100_p06',
      type: 'listening',
      prompt: 'Listen and select when the meeting is scheduled:',
      audioText: 'We are meeting our international partners at three o\'clock on Thursday.',
      targetSentence: 'We are meeting our international partners at three o\'clock on Thursday.',
      options: [
        { id: 'o1', text: 'At three o\'clock on Thursday', isCorrect: true },
        { id: 'o2', text: 'On Monday morning at eight', isCorrect: false },
        { id: 'o3', text: 'Next month on Friday', isCorrect: false },
        { id: 'o4', text: 'Yesterday afternoon at two', isCorrect: false }
      ],
      correctAnswer: 'At three o\'clock on Thursday',
      explanation: 'The audio said: "...at three o\'clock on Thursday."'
    },
    {
      id: 'a2_u07_l100_p07',
      type: 'dialogue_completion',
      prompt: 'Select the best future intention response:',
      sourceSentence: 'Colleague: "Have you made any holiday plans yet?"\nYou: "____"',
      targetSentence: 'Yes, I am going to visit Rome with my family in August.',
      options: [
        { id: 'o1', text: 'Yes, I am going to visit Rome with my family in August.', isCorrect: true },
        { id: 'o2', text: 'I didn\'t visit Rome last year.', isCorrect: false },
        { id: 'o3', text: 'Because of Rome is too much cold.', isCorrect: false },
        { id: 'o4', text: 'I am having visited Rome yesterday.', isCorrect: false }
      ],
      correctAnswer: 'Yes, I am going to visit Rome with my family in August.',
      explanation: 'Expresses planned future intention.'
    },
    {
      id: 'a2_u07_l100_p08',
      type: 'match_pairs',
      prompt: 'Match each future structure with its usage:',
      options: [
        { id: 'm1', text: 'Be going to + Verb' },
        { id: 'm1_m', text: 'Prior Intention / Goal' },
        { id: 'm2', text: 'Present Continuous + Time' },
        { id: 'm2_m', text: 'Fixed Calendar Arrangement' },
        { id: 'm3', text: 'Reschedule' },
        { id: 'm3_m', text: 'Change Event Date' },
        { id: 'm4', text: 'Itinerary' },
        { id: 'm4_m', text: 'Planned Journey Route' }
      ]
    },
    {
      id: 'a2_u07_l100_p09',
      type: 'recognition',
      prompt: 'Which future expression indicates a confirmed calendar event with a ticket/booking?',
      sourceSentence: 'I am flying to New York at 9:00 AM on Sunday.',
      targetSentence: 'Present continuous is flying indicates a confirmed booking.',
      options: [
        { id: 'o1', text: 'I am flying to New York at 9:00 AM on Sunday.', isCorrect: true },
        { id: 'o2', text: 'Maybe I fly.', isCorrect: false },
        { id: 'o3', text: 'I flew to New York.', isCorrect: false },
        { id: 'o4', text: 'I fly yesterday.', isCorrect: false }
      ],
      correctAnswer: 'I am flying to New York at 9:00 AM on Sunday.',
      explanation: 'Present continuous with exact time and day expresses fixed arrangements.'
    },
    {
      id: 'a2_u07_l100_p10',
      type: 'speaking',
      prompt: 'Speak this future plan clearly:',
      targetSentence: 'We are going to attend an international business conference in Berlin next month.',
      audioText: 'We are going to attend an international business conference in Berlin next month.'
    },
    {
      id: 'a2_u07_l100_p11',
      type: 'fill_blank',
      prompt: 'Choose the correct form of BE for future intention:',
      sourceSentence: 'They ____ going to renovate their apartment next spring.',
      targetSentence: 'They are going to renovate their apartment next spring.',
      options: [
        { id: 'o1', text: 'are', isCorrect: true },
        { id: 'o2', text: 'is', isCorrect: false },
        { id: 'o3', text: 'am', isCorrect: false },
        { id: 'o4', text: 'be', isCorrect: false }
      ],
      correctAnswer: 'are',
      explanation: '"They are going to".'
    },
    {
      id: 'a2_u07_l100_p12',
      type: 'word_ordering',
      prompt: 'Reconstruct the calendar arrangement sentence:',
      sourceSentence: 'I am having lunch with my manager tomorrow at noon.',
      targetSentence: 'I am having lunch with my manager tomorrow at noon',
      wordBank: ['I', 'am', 'having', 'lunch', 'with', 'my', 'manager', 'tomorrow', 'at', 'noon', 'have', 'is'],
      explanation: 'I am having lunch + with my manager + tomorrow at noon.'
    },
    {
      id: 'a2_u07_l100_p13',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly asks about someone\'s upcoming travel arrangements?',
      sourceSentence: 'When are you leaving for Tokyo?',
      targetSentence: 'When are you leaving for Tokyo?',
      options: [
        { id: 'o1', text: 'When are you leaving for Tokyo?', isCorrect: true },
        { id: 'o2', text: 'When did you leaving for Tokyo?', isCorrect: false },
        { id: 'o3', text: 'When are you leave to Tokyo?', isCorrect: false },
        { id: 'o4', text: 'When you are leaving to Tokyo?', isCorrect: false }
      ],
      correctAnswer: 'When are you leaving for Tokyo?',
      explanation: 'WH- + are + you + leaving + for [destination]?'
    },
    {
      id: 'a2_u07_l100_p14',
      type: 'listen_and_type',
      prompt: 'Listen and assemble what you hear:',
      audioText: 'Our team is presenting the quarterly report next Tuesday afternoon.',
      targetSentence: 'Our team is presenting the quarterly report next Tuesday afternoon',
      wordBank: ['Our', 'team', 'is', 'presenting', 'the', 'quarterly', 'report', 'next', 'Tuesday', 'afternoon', 'present', 'did']
    },
    {
      id: 'a2_u07_l100_p15',
      type: 'personal_production',
      prompt: 'Write 2 sentences: one describing a personal goal using "be going to" and one describing a confirmed plan using Present Continuous:',
      targetSentence: 'I am going to learn conversational German this year. Tomorrow evening, I am dining with my friends.',
      audioText: 'I am going to learn conversational German this year. Tomorrow evening, I am dining with my friends.'
    }
  ],
  review: [
    {
      id: 'a2_u07_l100_r01',
      type: 'multiple_choice',
      prompt: 'Select the sentence expressing a pre-planned future intention:',
      sourceSentence: 'I am going to buy a new electric bicycle next month.',
      targetSentence: 'I am going to buy a new electric bicycle next month.',
      options: [
        { id: 'o1', text: 'I am going to buy a new electric bicycle next month.', isCorrect: true },
        { id: 'o2', text: 'I bought an electric bicycle last month.', isCorrect: false },
        { id: 'o3', text: 'I buy an electric bicycle yesterday.', isCorrect: false },
        { id: 'o4', text: 'I am buy electric bicycle.', isCorrect: false }
      ],
      correctAnswer: 'I am going to buy a new electric bicycle next month.',
      explanation: '"be going to + base verb".'
    },
    {
      id: 'a2_u07_l100_r02',
      type: 'word_ordering',
      prompt: 'Arrange the sentence showing a rescheduled meeting:',
      sourceSentence: 'We are rescheduling our team meeting for next Thursday.',
      targetSentence: 'We are rescheduling our team meeting for next Thursday',
      wordBank: ['We', 'are', 'rescheduling', 'our', 'team', 'meeting', 'for', 'next', 'Thursday', 'reschedule', 'did'],
      explanation: 'We are rescheduling + our team meeting + for next Thursday.'
    },
    {
      id: 'a2_u07_l100_r03',
      type: 'fill_blank',
      prompt: 'Complete with the appropriate future marker:',
      sourceSentence: 'She is ____ to enroll in the advanced certification program.',
      targetSentence: 'She is going to enroll in the advanced certification program.',
      options: [
        { id: 'o1', text: 'going', isCorrect: true },
        { id: 'o2', text: 'go', isCorrect: false },
        { id: 'o3', text: 'goes', isCorrect: false },
        { id: 'o4', text: 'gone', isCorrect: false }
      ],
      correctAnswer: 'going',
      explanation: '"is going to enroll".'
    },
    {
      id: 'a2_u07_l100_r04',
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'हम कल सुबह नौ बजे अपने नए प्रबंधक से मिल रहे हैं।',
      sourceTranslations: { hi: 'हम कल सुबह नौ बजे अपने नए प्रबंधक से मिल रहे हैं।' },
      targetSentence: 'We are meeting our new manager tomorrow morning at nine',
      wordBank: ['We', 'are', 'meeting', 'our', 'new', 'manager', 'tomorrow', 'morning', 'at', 'nine', 'meet', 'did'],
      explanation: '"We are meeting our new manager tomorrow morning at nine."'
    },
    {
      id: 'a2_u07_l100_r05',
      type: 'speaking',
      prompt: 'Speak this confirmed flight schedule clearly:',
      targetSentence: 'I am taking the early morning flight to Paris on Wednesday.',
      audioText: 'I am taking the early morning flight to Paris on Wednesday.'
    }
  ],
  assessment: [
    {
      id: 'a2_u07_l100_a01',
      type: 'multiple_choice',
      prompt: 'Which structure is used for pre-arranged future commitments on a calendar?',
      sourceSentence: 'Present Continuous with a future time expression.',
      targetSentence: 'Present Continuous with a future time expression.',
      options: [
        { id: 'o1', text: 'Present Continuous with a future time expression.', isCorrect: true },
        { id: 'o2', text: 'Past Simple with yesterday.', isCorrect: false },
        { id: 'o3', text: 'Present Simple without adverbs.', isCorrect: false },
        { id: 'o4', text: 'Imperative form.', isCorrect: false }
      ],
      correctAnswer: 'Present Continuous with a future time expression.',
      explanation: 'Present Continuous + future time represents confirmed arrangements.'
    },
    {
      id: 'a2_u07_l100_a02',
      type: 'fill_blank',
      prompt: 'Complete with the base verb after "going to":',
      sourceSentence: 'Are you going to ____ your family during the holidays?',
      targetSentence: 'Are you going to visit your family during the holidays?',
      options: [
        { id: 'o1', text: 'visit', isCorrect: true },
        { id: 'o2', text: 'visited', isCorrect: false },
        { id: 'o3', text: 'visiting', isCorrect: false },
        { id: 'o4', text: 'visits', isCorrect: false }
      ],
      correctAnswer: 'visit',
      explanation: '"going to" requires base verb "visit".'
    },
    {
      id: 'a2_u07_l100_a03',
      type: 'word_ordering',
      prompt: 'Assemble the future goal sentence:',
      sourceSentence: 'He is going to launch an online business later this year.',
      targetSentence: 'He is going to launch an online business later this year',
      wordBank: ['He', 'is', 'going', 'to', 'launch', 'an', 'online', 'business', 'later', 'this', 'year', 'launches', 'did'],
      explanation: 'He is going to launch + an online business + later this year.'
    },
    {
      id: 'a2_u07_l100_a04',
      type: 'error_correction',
      prompt: 'Correct the error in this future sentence:',
      sourceSentence: 'They are go to participate in the seminar next week.',
      targetSentence: 'They are going to participate in the seminar next week.',
      options: [
        { id: 'o1', text: 'They are going to participate in the seminar next week.', isCorrect: true },
        { id: 'o2', text: 'They will going to participate next week.', isCorrect: false },
        { id: 'o3', text: 'They going participate next week.', isCorrect: false },
        { id: 'o4', text: 'They are go participating next week.', isCorrect: false }
      ],
      correctAnswer: 'They are going to participate in the seminar next week.',
      explanation: 'Change "are go to" to "are going to".'
    },
    {
      id: 'a2_u07_l100_a05',
      type: 'listening',
      prompt: 'Listen and select what the speaker plans to do:',
      audioText: 'I am going to reserve our train tickets and hotel rooms tonight.',
      targetSentence: 'I am going to reserve our train tickets and hotel rooms tonight.',
      options: [
        { id: 'o1', text: 'Reserve train tickets and hotel rooms tonight', isCorrect: true },
        { id: 'o2', text: 'Cancel the trip completely', isCorrect: false },
        { id: 'o3', text: 'Buy a new car tomorrow', isCorrect: false },
        { id: 'o4', text: 'Stay at home all summer', isCorrect: false }
      ],
      correctAnswer: 'Reserve train tickets and hotel rooms tonight',
      explanation: 'The audio said: "...reserve our train tickets and hotel rooms tonight."'
    }
  ]
};
