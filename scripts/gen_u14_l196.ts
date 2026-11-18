import { buildDetailedLessonA2_Unit14, LessonConfigA2 } from './unit14_builder_helper';
import { saveUnit14Lesson } from './enrich_unit14_helper';

// =========================================================================
// LESSON 196: Official Forms, Personal Details & Applications
// =========================================================================
export const LESSON_196: LessonConfigA2 = {
  num: 196,
  title: 'Official Forms, Personal Details & Applications',
  icon: '📝',
  estMin: 25,
  objTitle: 'Completing Official Forms, Applications & Identity Fields',
  objDesc: 'Learn to navigate official application forms, understand administrative instructions in block capitals, and accurately provide personal details and declarations.',
  objHi: 'आधिकारिक आवेदन फॉर्म भरने, बड़े अक्षरों (Block Capitals) में दिए गए निर्देशों को समझने और व्यक्तिगत विवरण व घोषणाओं को सही ढंग से प्रस्तुत करने का अभ्यास करें।',
  objEs: 'Completar formularios oficiales, solicitudes e identificar campos de identidad comprendiendo instrucciones formales en mayúsculas de imprenta.',
  canDo: [
    'I can complete official registration and application forms accurately.',
    'I can understand administrative form instructions such as "BLOCK CAPITALS" and "delete where inapplicable".',
    'I can provide personal identity details including full name, nationality, date of birth, and occupation.',
    'I can explain form requirements and fields to someone who needs help (true mediation).'
  ],
  canDoHi: [
    'मैं आधिकारिक पंजीकरण और आवेदन फॉर्म सही ढंग से भर सकता हूँ।',
    'मैं फॉर्म निर्देशों जैसे "BLOCK CAPITALS" और "delete where inapplicable" को समझ सकता हूँ।',
    'मैं पूरा नाम, राष्ट्रीयता, जन्म तिथि और व्यवसाय सहित पहचान विवरण प्रदान कर सकता हूँ।',
    'मैं किसी ज़रूरतमंद को फॉर्म के कॉलम और नियम समझा सकता हूँ (मध्यस्थता)।'
  ],
  canDoEs: [
    'Puedo completar formularios oficiales de registro y solicitud con precisión.',
    'Puedo entender instrucciones de formularios como "BLOCK CAPITALS" y "marque lo que no corresponda".',
    'Puedo proporcionar datos personales incluyendo nombre completo, nacionalidad, fecha de nacimiento y profesión.',
    'Puedo explicar los requisitos de un formulario a otra persona que necesite ayuda.'
  ],
  vocab: [
    { w: 'surname', p: '/ˈsɜːneɪm/', m: 'your family name or last name', hi: 'उपनाम / कुलनाम', es: 'apellido', fr: 'nom de famille', de: 'Nachname', pt: 'sobrenome', zh: '姓氏', ar: 'اسم العائلة / اللقب', ja: '姓 / 名字', ru: 'фамилия', ex: 'Please write your surname first, followed by your given names.', exHi: 'कृपया पहले अपना उपनाम लिखें, उसके बाद अपना नाम।', exEs: 'Por favor escriba su apellido primero, seguido de sus nombres.', ic: '🏷️' },
    { w: 'applicant', p: '/ˈæplɪkənt/', m: 'a person who formally applies for something', hi: 'आवेदक', es: 'solicitante / postulante', fr: 'candidat / demandeur', de: 'Bewerber / Antragsteller', pt: 'candidato / requerente', zh: '申请人', ar: 'مقدم الطلب', ja: '申請者 / 応募者', ru: 'заявитель / соискатель', ex: 'Each applicant must sign the declaration at the bottom.', exHi: 'प्रत्येक आवेदक को नीचे दी गई घोषणा पर हस्ताक्षर करना होगा।', exEs: 'Cada solicitante debe firmar la declaración en la parte inferior.', ic: '👤' },
    { w: 'nationality', p: '/ˌnæʃəˈnæləti/', m: 'the status of belonging to a particular nation', hi: 'राष्ट्रीयता', es: 'nacionalidad', fr: 'nationalité', de: 'Staatsangehörigkeit', pt: 'nacionalidade', zh: '国籍', ar: 'جنسية', ja: '国籍', ru: 'гражданство / национальность', ex: 'State your nationality as shown on your passport.', exHi: 'अपने पासपोर्ट में दर्शाई गई राष्ट्रीयता बताएं।', exEs: 'Indique su nacionalidad como figura en su pasaporte.', ic: '🌐' },
    { w: 'marital status', p: '/ˈmærɪtl ˈsteɪtəs/', m: 'the fact of whether someone is married, single, or divorced', hi: 'वैवाहिक स्थिति', es: 'estado civil', fr: 'état civil', de: 'Familienstand', pt: 'estado civil', zh: '婚姻状况', ar: 'الحالة الاجتماعية', ja: '配偶者の有無 / 婚姻状況', ru: 'семейное положение', ex: 'Tick single or married under marital status.', exHi: 'वैवाहिक स्थिति के अंतर्गत अविवाहित या विवाहित पर टिक करें।', exEs: 'Marque soltero o casado en estado civil.', ic: '💍' },
    { w: 'occupation', p: '/ˌɒkjuˈpeɪʃn/', m: 'a job or profession', hi: 'व्यवसाय / पेशा', es: 'ocupación / profesión', fr: 'profession / métier', de: 'Beruf', pt: 'profissão / ocupação', zh: '职业', ar: 'مهنة / وظيفة', ja: '職業', ru: 'профессия / род занятий', ex: 'Current occupation: Civil engineer.', exHi: 'वर्तमान व्यवसाय: सिविल इंजीनियर।', exEs: 'Ocupación actual: Ingeniero civil.', ic: '💼' },
    { w: 'signature', p: '/ˈsɪɡnətʃər/', m: 'your name written in your own personal style', hi: 'हस्ताक्षर / दस्तखत', es: 'firma', fr: 'signature', de: 'Unterschrift', pt: 'assinatura', zh: '签名', ar: 'توقيع', ja: '署名 / サイン', ru: 'подпись', ex: 'Your signature must match your official ID.', exHi: 'आपके हस्ताक्षर आपकी आधिकारिक पहचान से मेल खाने चाहिए।', exEs: 'Su firma debe coincidir con su identificación oficial.', ic: '✍️' },
    { w: 'postal code', p: '/ˈpəʊstl kəʊd/', m: 'a group of letters and numbers used to sort mail', hi: 'पिन कोड / डाक कोड', es: 'código postal', fr: 'code postal', de: 'Postleitzahl', pt: 'código postal / CEP', zh: '邮政编码', ar: 'رمز بريدي', ja: '郵便番号', ru: 'почтовый индекс', ex: 'Do not forget to include your postal code.', exHi: 'अपना पोस्टल कोड डालना न भूलें।', exEs: 'No olvide incluir su código postal.', ic: '📮' },
    { w: 'permanent address', p: '/ˈpɜːmənənt əˈdres/', m: 'the address where you live continuously', hi: 'स्थायी पता', es: 'dirección permanente', fr: 'adresse permanente', de: 'Hauptwohnsitz / Ständige Adresse', pt: 'endereço permanente', zh: '永久居住地址', ar: 'عنوان دائم', ja: '現住所 / 永久住所', ru: 'постоянный адрес', ex: 'Please provide your permanent address in your home country.', exHi: 'कृपया अपने गृह देश में अपना स्थायी पता दें।', exEs: 'Proporcione su dirección permanente en su país de origen.', ic: '🏠' },
    { w: 'emergency contact', p: '/ɪˈmɜːdʒənsi ˈkɒntækt/', m: 'a person to call if you are in trouble or injured', hi: 'आपातकालीन संपर्क', es: 'contacto de emergencia', fr: 'contact d\'urgence', de: 'Notfallkontakt', pt: 'contato de emergência', zh: '紧急联系人', ar: 'جهة الاتصال في حالات الطوارئ', ja: '緊急連絡先', ru: 'экстренный контакт', ex: 'List a close relative as your emergency contact.', exHi: 'किसी करीबी रिश्तेदार को अपने आपातकालीन संपर्क के रूप में सूचीबद्ध करें।', exEs: 'Incluya a un familiar cercano como su contacto de emergencia.', ic: '📞' },
    { w: 'expiry date', p: '/ɪkˈspaɪəri deɪt/', m: 'the date after which an official document is no longer valid', hi: 'समाप्ति तिथि / वैधता समाप्त होने की तारीख', es: 'fecha de vencimiento / caducidad', fr: 'date d\'expiration', de: 'Ablaufdatum', pt: 'data de validade', zh: '有效期限 / 到期日', ar: 'تاريخ انتهاء الصلاحية', ja: '有効期限', ru: 'срок действия / дата окончания', ex: 'Check the expiry date on your passport before traveling.', exHi: 'यात्रा करने से पहले अपने पासपोर्ट की समाप्ति तिथि जांचें।', exEs: 'Compruebe la fecha de caducidad de su pasaporte antes de viajar.', ic: '📅' },
    { w: 'declaration', p: '/ˌdekləˈreɪʃn/', m: 'a formal or explicit statement that information is true', hi: 'घोषणा / शपथ', es: 'declaración jurada', fr: 'déclaration', de: 'Erklärung / Bestätigung', pt: 'declaração', zh: '声明 / 申报', ar: 'إقرار / تصريح', ja: '申告 / 誓約', ru: 'декларация / заявление', ex: 'Sign the declaration to confirm all information is correct.', exHi: 'सभी जानकारी सही होने की पुष्टि के लिए घोषणा पर हस्ताक्षर करें।', exEs: 'Firme la declaración para confirmar que toda la información es correcta.', ic: '📜' },
    { w: 'dependents', p: '/dɪˈpendənts/', m: 'people who rely on you for financial support', hi: 'आश्रित व्यक्ति', es: 'personas a cargo / dependientes', fr: 'personnes à charge', de: 'Unterhaltsberechtigte / Angehörige', pt: 'dependentes', zh: '家属 / 抚养人员', ar: 'المعالون', ja: '扶養家族', ru: 'иждивенцы', ex: 'How many dependents are traveling with you?', exHi: 'आपके साथ कितने आश्रित यात्रा कर रहे हैं?', exEs: '¿Cuántas personas a cargo viajan con usted?', ic: '👨‍👩‍👧' },
    { w: 'title', p: '/ˈtaɪtl/', m: 'a word like Mr, Mrs, Ms, or Dr before someone\'s name', hi: 'उपाधि / शीर्षक (Mr/Ms/Dr)', es: 'título de cortesía', fr: 'titre / civilité', de: 'Anrede / Titel', pt: 'título / pronome de tratamento', zh: '头衔 / 称谓', ar: 'لقب', ja: '敬称 / タイトル', ru: 'обращение / титул', ex: 'Select your title: Mr, Ms, or Dr.', exHi: 'अपना शीर्षक चुनें: Mr, Ms, या Dr।', exEs: 'Seleccione su título: Sr., Sra. o Dr.', ic: '🏷️' },
    { w: 'spouse', p: '/spaʊs/', m: 'a husband or wife', hi: 'जीवनसाथी (पति या पत्नी)', es: 'cónyuge / esposo/a', fr: 'conjoint(e)', de: 'Ehepartner(in)', pt: 'cônjuge', zh: '配偶', ar: 'زوج أو زوجة', ja: '配偶者', ru: 'супруг / супруга', ex: 'Enter your spouse\'s full name if applicable.', exHi: 'यदि लागू हो तो अपने जीवनसाथी का पूरा नाम दर्ज करें।', exEs: 'Ingrese el nombre completo de su cónyuge si corresponde.', ic: '👫' },
    { w: 'issue date', p: '/ˈɪʃuː deɪt/', m: 'the date on which a document was produced and given', hi: 'जारी करने की तिथि', es: 'fecha de emisión', fr: 'date de délivrance', de: 'Ausstellungsdatum', pt: 'data de emissão', zh: '签发日期', ar: 'تاريخ الإصدار', ja: '発行日', ru: 'дата выдачи', ex: 'The issue date is printed on page two of your passport.', exHi: 'जारी करने की तिथि आपके पासपोर्ट के पृष्ठ दो पर मुद्रित है।', exEs: 'La fecha de emisión está impresa en la página dos de su pasaporte.', ic: '🗓️' }
  ],
  chunks: [
    { phrase: 'fill in the form', meaning: 'complete a printed or digital document with required information', hi: 'फॉर्म भरना', es: 'completar / rellenar el formulario', fr: 'remplir le formulaire', de: 'das Formular ausfüllen', pt: 'preencher o formulário', zh: '填写表格', ar: 'ملء الاستمارة', ja: '用紙に記入する', ru: 'заполнить форму', note: 'Standard collocations: "Please fill in the form carefully."', ic: '✍️' },
    { phrase: 'in block capitals', meaning: 'writing in clear, uppercase printed letters without joining', hi: 'बड़े अक्षरों में (ब्लॉक लेटर्स में)', es: 'en mayúsculas de imprenta', fr: 'en lettres capitales', de: 'in Druckbuchstaben', pt: 'em letras maiúsculas de forma', zh: '用大写印刷体', ar: 'بحروف كبيرة واضحة', ja: '大文字の活字体で', ru: 'печатными заглавными буквами', note: 'Instructional phrase: "Write your name in block capitals."', ic: '🔤' },
    { phrase: 'sign on the dotted line', meaning: 'provide your official signature on the designated line', hi: 'बिंदीदार रेखा पर हस्ताक्षर करना', es: 'firmar en la línea de puntos', fr: 'signer sur la ligne pointillée', de: 'auf der gepunkteten Linie unterschreiben', pt: 'assinar na linha pontilhada', zh: '在虚线上签名', ar: 'التوقيع على الخط المنقط', ja: '点線部分に署名する', ru: 'расписаться на пунктирной линии', note: 'Administrative idiom: "Please sign on the dotted line."', ic: '✒️' },
    { phrase: 'attach a recent photo', meaning: 'securely fix a passport-style portrait to the application', hi: 'एक हालिया फोटो संलग्न करना', es: 'adjuntar una foto reciente', fr: 'joindre une photo récente', de: 'ein aktuelles Foto beifügen', pt: 'anexar uma foto recente', zh: '附上一张近期照片', ar: 'إرفاق صورة شخصية حديثة', ja: '最近の写真を添付する', ru: 'прикрепить недавнюю фотографию', note: 'Document requirement: "Attach a recent photo taken within 6 months."', ic: '📸' },
    { phrase: 'proof of residence', meaning: 'official document confirming where you live (e.g. utility bill)', hi: 'निवास का प्रमाण', es: 'comprobante de domicilio', fr: 'justificatif de domicile', de: 'Wohnsitznachweis', pt: 'comprovante de residência', zh: '居住证明', ar: 'إثبات الإقامة', ja: '居住証明書', ru: 'документ подтверждающий адрес проживания', note: 'Required proof: "Provide a utility bill as proof of residence."', ic: '📑' },
    { phrase: 'delete where inapplicable', meaning: 'cross out options that do not apply to your situation', hi: 'जो लागू न हो उसे काट दें', es: 'tachar lo que no corresponda', fr: 'rayer les mentions inutiles', de: 'Unzutreffendes streichen', pt: 'riscar o que não se aplicar', zh: '划去不适用项', ar: 'حذف ما لا ينطبق', ja: '該当しない項目を消去する', ru: 'вычеркнуть ненужное', note: 'Form direction: "Mr / Mrs / Ms - delete where inapplicable."', ic: '❌' }
  ],
  grammar: {
    title: 'Instructional Imperatives & Identification Formats',
    concept: 'Official forms use direct imperatives (Print, Sign, Provide, Attach) and standard abbreviations (DOB, N/A).',
    patterns: [
      {
        title: 'Form Imperatives for Instructions',
        structure: 'Base Verb (Imperative) + Object + Specifier (e.g., Please write in block letters)',
        rule: 'Forms give clear, polite or neutral commands to prevent administrative errors.',
        examples: [
          { en: 'Please print your surname in block capitals.', hi: 'कृपया अपना उपनाम बड़े अक्षरों में लिखें।', es: 'Por favor escriba su apellido en mayúsculas de imprenta.' },
          { en: 'Do not write below this line.', hi: 'इस रेखा के नीचे न लिखें।', es: 'No escriba debajo de esta línea.' }
        ]
      },
      {
        title: 'Declarative Statements of Truth',
        structure: 'I declare that + [clause in present simple / perfect]',
        rule: 'Used in the declaration section to certify that all supplied details are accurate.',
        examples: [
          { en: 'I declare that the information given above is true and complete.', hi: 'मैं घोषित करता हूँ कि ऊपर दी गई जानकारी सत्य और पूर्ण है।', es: 'Declaro que la información proporcionada arriba es verdadera y completa.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'I signed my name with block capitals on the signature line.',
      cor: 'I signed my name in cursive and printed my name in block capitals.',
      exp: 'A signature is your personal handwritten mark; printed name is written in capital letters.',
      hi: 'हस्ताक्षर आपका व्यक्तिगत हस्तलिखित निशान होता है; मुद्रित नाम बड़े अक्षरों में लिखा जाता है।',
      es: 'La firma es su trazo manuscrito personal; el nombre impreso se escribe en mayúsculas.'
    },
    {
      inc: 'My date of birth is 1995/March/12.',
      cor: 'My date of birth is 12 March 1995 (DD/MM/YYYY: 12/03/1995).',
      exp: 'In international English forms, use DD/MM/YYYY unless MM/DD/YYYY is explicitly stated.',
      hi: 'अंतरराष्ट्रीय अंग्रेजी फॉर्म में DD/MM/YYYY प्रारूप का उपयोग किया जाता है।',
      es: 'En formularios internacionales en inglés, use el formato DD/MM/AAAA.'
    }
  ],
  dialogues: [
    {
      title: 'Submitting a Library Membership Application',
      context: 'Liam is submitting his registration form at the municipal library service counter.',
      charA: { name: 'Clerk', av: '👩‍💼', role: 'Front Desk Officer' },
      charB: { name: 'Liam', av: '👨', role: 'Applicant' },
      turns: [
        { spk: 'Clerk', text: 'Good morning! Have you completed the registration form?', hi: 'शुभ प्रभात! क्या आपने पंजीकरण फॉर्म भर लिया है?', es: '¡Buenos días! ¿Ha completado el formulario de registro?' },
        { spk: 'Liam', text: 'Yes, here it is. I filled in all the sections in block capitals.', hi: 'हाँ, यह रहा। मैंने सभी खंड बड़े अक्षरों में भरे हैं।', es: 'Sí, aquí tiene. Llené todas las secciones en mayúsculas.' },
        { spk: 'Clerk', text: 'Thank you. You just need to sign on the dotted line at the bottom and provide proof of residence.', hi: 'धन्यवाद। आपको बस नीचे बिंदीदार रेखा पर हस्ताक्षर करने और निवास का प्रमाण देने की आवश्यकता है।', es: 'Gracias. Solo necesita firmar en la línea de puntos abajo y presentar un comprobante de domicilio.' },
        { spk: 'Liam', text: 'Here is my electricity bill and my passport for identification.', hi: 'पहचान के लिए यह रहा मेरा बिजली बिल और मेरा पासपोर्ट।', es: 'Aquí tiene mi factura de electricidad y mi pasaporte para identificación.' },
        { spk: 'Clerk', text: 'Perfect. Your library card will be ready in five minutes.', hi: 'बहुत बढ़िया। आपका लाइब्रेरी कार्ड पाँच मिनट में तैयार हो जाएगा।', es: 'Perfecto. Su tarjeta de biblioteca estará lista en cinco minutos.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_196_p1',
      type: 'multiple_choice',
      prompt: 'What does "surname" mean on an official application form?',
      options: [
        { id: '1', text: 'Your family or last name', isCorrect: true },
        { id: '2', text: 'Your nickname among friends', isCorrect: false },
        { id: '3', text: 'Your middle name only', isCorrect: false },
        { id: '4', text: 'Your street address', isCorrect: false }
      ],
      explanation: 'Surname refers to your family name or last name.'
    },
    {
      id: 'ex_196_p2',
      type: 'fill_blank',
      prompt: 'Complete the instruction for filling out the form:',
      sourceSentence: 'Please print all personal details in block ____.',
      targetSentence: 'Please print all personal details in block capitals.',
      blankIndex: 6,
      options: [
        { id: '1', text: 'capitals', isCorrect: true },
        { id: '2', text: 'numbers', isCorrect: false },
        { id: '3', text: 'colors', isCorrect: false },
        { id: '4', text: 'circles', isCorrect: false }
      ],
      explanation: '"In block capitals" means writing in clear uppercase letters.'
    },
    {
      id: 'ex_196_p3',
      type: 'translate_tiles',
      prompt: 'Translate to English: कृपया बिंदीदार रेखा पर हस्ताक्षर करें।',
      sourceSentence: 'Por favor firme en la línea de puntos.',
      targetSentence: 'Please sign on the dotted line',
      wordBank: ['Please', 'sign', 'on', 'the', 'dotted', 'line', 'read', 'box', 'write']
    },
    {
      id: 'ex_196_p4',
      type: 'word_order',
      prompt: 'Arrange the words to form a standard form declaration:',
      targetSentence: 'I declare that the information is true and accurate',
      wordBank: ['I', 'declare', 'that', 'the', 'information', 'is', 'true', 'and', 'accurate']
    },
    {
      id: 'ex_196_p5',
      type: 'error_correction',
      prompt: 'Find and fix the error in the form instruction:',
      sentence: 'Do not writing below this line.',
      correctSentence: 'Do not write below this line.',
      errorSentence: 'Do not writing below this line.',
      explanation: 'Negative imperatives use "Do not" followed by the base verb ("write").'
    },
    {
      id: 'ex_196_p6',
      type: 'match_pairs',
      prompt: 'Match form terms with their meanings:',
      options: [
        { id: 'm1', text: 'DOB → Date of Birth' },
        { id: 'm2', text: 'N/A → Not Applicable' },
        { id: 'm3', text: 'Occupation → Job / Profession' },
        { id: 'm4', text: 'Spouse → Husband or Wife' }
      ]
    },
    {
      id: 'ex_196_p7',
      type: 'listening',
      prompt: 'Listen to the instruction and select what the officer asks for:',
      audioText: 'Please bring your passport and a recent utility bill as proof of residence.',
      options: [
        { id: '1', text: 'Passport and utility bill for residence proof', isCorrect: true },
        { id: '2', text: 'Two credit cards and cash', isCorrect: false },
        { id: '3', text: 'Only a driving license', isCorrect: false },
        { id: '4', text: 'A signed letter from your employer only', isCorrect: false }
      ]
    },
    {
      id: 'ex_196_p8',
      type: 'speak_sentence',
      prompt: 'Speak this standard response clearly:',
      targetSentence: 'I have completed the form in block capitals.',
      audioText: 'I have completed the form in block capitals.'
    },
    {
      id: 'ex_196_p9',
      type: 'dialogue_completion',
      prompt: 'Choose the most natural response for the applicant:',
      context: 'Officer: "Could you please attach a recent passport-sized photograph?"',
      options: [
        { id: '1', text: 'Certainly, here is the photo taken last week.', isCorrect: true },
        { id: '2', text: 'No, I don\'t like taking pictures on holiday.', isCorrect: false },
        { id: '3', text: 'I will buy a camera next month.', isCorrect: false },
        { id: '4', text: 'Where is the cinema?', isCorrect: false }
      ]
    },
    {
      id: 'ex_196_p10',
      type: 'reading_comprehension',
      prompt: 'Read the form note: "Fields marked with an asterisk (*) are mandatory. Incomplete forms will be rejected." What must applicants do?',
      options: [
        { id: '1', text: 'Fill in every field that has an asterisk (*)', isCorrect: true },
        { id: '2', text: 'Leave all asterisk fields empty', isCorrect: false },
        { id: '3', text: 'Only sign the top of the page', isCorrect: false },
        { id: '4', text: 'Submit without personal details', isCorrect: false }
      ],
      explanation: 'Mandatory means required, so all starred fields must be completed.'
    },
    {
      id: 'ex_196_p11',
      type: 'fill_blank',
      prompt: 'Select the correct document term:',
      sourceSentence: 'You must provide ____ of residence, such as a water bill.',
      targetSentence: 'You must provide proof of residence, such as a water bill.',
      blankIndex: 3,
      options: [
        { id: '1', text: 'proof', isCorrect: true },
        { id: '2', text: 'ticket', isCorrect: false },
        { id: '3', text: 'story', isCorrect: false },
        { id: '4', text: 'gift', isCorrect: false }
      ]
    },
    {
      id: 'ex_196_p12',
      type: 'translate_tiles',
      prompt: 'Translate to English: आपका आपातकालीन संपर्क कौन है?',
      sourceSentence: '¿Quién es tu contacto de emergencia?',
      targetSentence: 'Who is your emergency contact',
      wordBank: ['Who', 'is', 'your', 'emergency', 'contact', 'where', 'name', 'phone']
    },
    {
      id: 'ex_196_p13',
      type: 'multiple_choice',
      prompt: 'What should you write if a form asks for "Marital status" and you are not married?',
      options: [
        { id: '1', text: 'Single', isCorrect: true },
        { id: '2', text: 'Student', isCorrect: false },
        { id: '3', text: 'Engineer', isCorrect: false },
        { id: '4', text: 'Permanent', isCorrect: false }
      ]
    },
    {
      id: 'ex_196_p14',
      type: 'dictation',
      prompt: 'Listen and write exactly what you hear:',
      audioText: 'Check the expiry date on your identification card.',
      targetSentence: 'Check the expiry date on your identification card.'
    },
    {
      id: 'ex_196_p15',
      type: 'speaking',
      prompt: 'Confirm your identity at the desk by stating your surname and nationality:',
      targetSentence: 'My surname is Gomez and my nationality is Spanish.'
    },
    {
      id: 'ex_196_p16',
      type: 'word_order',
      prompt: 'Form a sentence about document validity:',
      targetSentence: 'This resident permit is valid for two years',
      wordBank: ['This', 'resident', 'permit', 'is', 'valid', 'for', 'two', 'years']
    },
    {
      id: 'ex_196_p17',
      type: 'fill_blank',
      prompt: 'Complete the form title selection:',
      sourceSentence: 'Please select your ____: Mr, Mrs, Ms, or Dr.',
      targetSentence: 'Please select your title: Mr, Mrs, Ms, or Dr.',
      blankIndex: 4,
      options: [
        { id: '1', text: 'title', isCorrect: true },
        { id: '2', text: 'hobby', isCorrect: false },
        { id: '3', text: 'season', isCorrect: false },
        { id: '4', text: 'color', isCorrect: false }
      ]
    },
    {
      id: 'ex_196_p18',
      type: 'error_correction',
      prompt: 'Correct the error in date expression:',
      sentence: 'The form requires your date of born.',
      correctSentence: 'The form requires your date of birth.',
      errorSentence: 'The form requires your date of born.',
      explanation: '"Date of birth" (DOB) is the noun phrase used on official forms.'
    },
    {
      id: 'ex_196_p19',
      type: 'multiple_choice',
      prompt: 'What does "N/A" stand for when a question does not apply to you?',
      options: [
        { id: '1', text: 'Not Applicable', isCorrect: true },
        { id: '2', text: 'No Answer', isCorrect: false },
        { id: '3', text: 'New Applicant', isCorrect: false },
        { id: '4', text: 'Next Address', isCorrect: false }
      ]
    },
    {
      id: 'ex_196_p20',
      type: 'translate_tiles',
      prompt: 'Translate to English: यह फॉर्म पूरा और हस्ताक्षरित है।',
      sourceSentence: 'Este formulario está completo y firmado.',
      targetSentence: 'This form is complete and signed',
      wordBank: ['This', 'form', 'is', 'complete', 'and', 'signed', 'writing', 'blank']
    }
  ],
  review: [
    {
      id: 'ex_196_r1',
      type: 'multiple_choice',
      prompt: 'Spaced Retrieval: Which relative pronoun is used for a place?',
      options: [
        { id: '1', text: 'where', isCorrect: true },
        { id: '2', text: 'who', isCorrect: false },
        { id: '3', text: 'which', isCorrect: false },
        { id: '4', text: 'when', isCorrect: false }
      ]
    },
    {
      id: 'ex_196_r2',
      type: 'fill_blank',
      prompt: 'Spaced Retrieval: Complete the polite request:',
      sourceSentence: 'Could you please ____ me where the application office is located?',
      targetSentence: 'Could you please tell me where the application office is located?',
      blankIndex: 3,
      options: [
        { id: '1', text: 'tell', isCorrect: true },
        { id: '2', text: 'told', isCorrect: false },
        { id: '3', text: 'telling', isCorrect: false },
        { id: '4', text: 'tells', isCorrect: false }
      ]
    },
    {
      id: 'ex_196_r3',
      type: 'translate_tiles',
      prompt: 'Translate to English: क्या आप मुझे फॉर्म भरने में मदद कर सकते हैं?',
      sourceSentence: '¿Puedes ayudarme a llenar el formulario?',
      targetSentence: 'Can you help me fill in the form',
      wordBank: ['Can', 'you', 'help', 'me', 'fill', 'in', 'the', 'form', 'sign']
    },
    {
      id: 'ex_196_r4',
      type: 'word_order',
      prompt: 'Arrange into a polite question:',
      targetSentence: 'Where should I submit my completed application',
      wordBank: ['Where', 'should', 'I', 'submit', 'my', 'completed', 'application']
    },
    {
      id: 'ex_196_r5',
      type: 'listening',
      prompt: 'Listen to the desk clerk and identify the required item:',
      audioText: 'You need two passport photos and a copy of your national ID card.',
      options: [
        { id: '1', text: 'Two photos and an ID copy', isCorrect: true },
        { id: '2', text: 'Only a train ticket', isCorrect: false },
        { id: '3', text: 'Original diploma only', isCorrect: false },
        { id: '4', text: 'Cash payment only', isCorrect: false }
      ]
    },
    {
      id: 'ex_196_r6',
      type: 'speak_sentence',
      prompt: 'Speak this confirmation clearly:',
      targetSentence: 'I have attached all required supporting documents.',
      audioText: 'I have attached all required supporting documents.'
    },
    {
      id: 'ex_196_r7',
      type: 'error_correction',
      prompt: 'Fix the error in the sentence:',
      sentence: 'She filled the form on capital letters.',
      correctSentence: 'She filled the form in capital letters.',
      errorSentence: 'She filled the form on capital letters.',
      explanation: 'We say "in capital letters" or "in block capitals", not "on".'
    },
    {
      id: 'ex_196_r8',
      type: 'match_pairs',
      prompt: 'Match English administrative abbreviations with their full words:',
      options: [
        { id: 'm1', text: 'Tel. → Telephone Number' },
        { id: 'm2', text: 'No. → Number' },
        { id: 'm3', text: 'Exp. → Expiry Date' },
        { id: 'm4', text: 'Req. → Required' }
      ]
    },
    {
      id: 'ex_196_r9',
      type: 'fill_blank',
      prompt: 'Select the missing preposition:',
      sourceSentence: 'Please write your signature ____ the bottom of the page.',
      targetSentence: 'Please write your signature at the bottom of the page.',
      blankIndex: 4,
      options: [
        { id: '1', text: 'at', isCorrect: true },
        { id: '2', text: 'in', isCorrect: false },
        { id: '3', text: 'on', isCorrect: false },
        { id: '4', text: 'to', isCorrect: false }
      ]
    },
    {
      id: 'ex_196_r10',
      type: 'translate_tiles',
      prompt: 'Translate to English: सभी जानकारी सही है।',
      sourceSentence: 'Toda la información es correcta.',
      targetSentence: 'All the information is correct',
      wordBank: ['All', 'the', 'information', 'is', 'correct', 'are', 'wrong', 'false']
    }
  ],
  assessment: [
    {
      id: 'ex_196_a1',
      type: 'reading_comprehension',
      prompt: 'Notice: "Official Visa Application Form. Section 1: Personal Particulars. Section 2: Travel Details. Section 3: Declaration. All applicants over 18 must sign Section 3 personally." Who must sign Section 3?',
      options: [
        { id: '1', text: 'All adult applicants over 18 years old', isCorrect: true },
        { id: '2', text: 'Only hotel managers', isCorrect: false },
        { id: '3', text: 'Children under 12 only', isCorrect: false },
        { id: '4', text: 'The travel agency staff only', isCorrect: false }
      ]
    },
    {
      id: 'ex_196_a2',
      type: 'mediation',
      prompt: 'A non-English-speaking neighbor sees a form box marked "Spouse\'s Given Name (if applicable)". Explain in simple words what they should write there.',
      options: [
        { id: '1', text: 'Write the first name of your husband or wife, but leave it empty if you are not married.', isCorrect: true },
        { id: '2', text: 'Write your own parents\' names and address.', isCorrect: false },
        { id: '3', text: 'Write the name of your company manager.', isCorrect: false },
        { id: '4', text: 'Sign your own nickname in cursive.', isCorrect: false }
      ],
      explanation: 'True mediation requires relaying the meaning of official jargon ("Spouse\'s Given Name") simply and accurately.'
    },
    {
      id: 'ex_196_a3',
      type: 'fill_blank',
      prompt: 'Complete the declaration sentence:',
      sourceSentence: 'I declare that the details provided are true to the best of my ____.',
      targetSentence: 'I declare that the details provided are true to the best of my knowledge.',
      blankIndex: 12,
      options: [
        { id: '1', text: 'knowledge', isCorrect: true },
        { id: '2', text: 'weather', isCorrect: false },
        { id: '3', text: 'holiday', isCorrect: false },
        { id: '4', text: 'color', isCorrect: false }
      ]
    },
    {
      id: 'ex_196_a4',
      type: 'writing_prompt',
      prompt: 'Write your personal details profile for a form in 3-4 connected sentences (Full name, nationality, occupation, and contact method).',
      targetSentence: 'My full name is Alex Morgan. I am an engineer from Canada. My permanent address is in Toronto, and my contact email is alex@example.com.'
    },
    {
      id: 'ex_196_a5',
      type: 'speaking',
      prompt: 'Answer the administrative officer: "Could you state your full name and date of birth for the record?"',
      targetSentence: 'My full name is Elena Rostova and my date of birth is the fourteenth of May 1996.'
    },
    {
      id: 'ex_196_a6',
      type: 'dictation',
      prompt: 'Listen and transcribe the official verification message:',
      audioText: 'Your application has been received and is currently under review.',
      targetSentence: 'Your application has been received and is currently under review.'
    },
    {
      id: 'ex_196_a7',
      type: 'multiple_choice',
      prompt: 'What should you do when a form states "Delete where inapplicable" beside "Mr / Mrs / Miss / Dr"?',
      options: [
        { id: '1', text: 'Cross out the titles that do not apply to you and keep only your title', isCorrect: true },
        { id: '2', text: 'Circle every single title', isCorrect: false },
        { id: '3', text: 'Erase the whole line with whiteout', isCorrect: false },
        { id: '4', text: 'Write your phone number over the words', isCorrect: false }
      ]
    },
    {
      id: 'ex_196_a8',
      type: 'translate_tiles',
      prompt: 'Translate to English: कृपया अपने आवेदन के साथ दो प्रतियां संलग्न करें।',
      sourceSentence: 'Por favor adjunte dos copias con su solicitud.',
      targetSentence: 'Please attach two copies with your application',
      wordBank: ['Please', 'attach', 'two', 'copies', 'with', 'your', 'application', 'sign']
    },
    {
      id: 'ex_196_a9',
      type: 'error_correction',
      prompt: 'Correct the error in this form response:',
      sentence: 'My marital state is married.',
      correctSentence: 'My marital status is married.',
      errorSentence: 'My marital state is married.',
      explanation: 'The standard term on forms is "marital status", not "marital state".'
    },
    {
      id: 'ex_196_a10',
      type: 'dialogue_completion',
      prompt: 'Choose the most professional response to complete the interaction:',
      context: 'Officer: "We have verified your documents. Please take this receipt with your reference number."',
      options: [
        { id: '1', text: 'Thank you very much. How long will the processing take?', isCorrect: true },
        { id: '2', text: 'No, I don\'t want to go to the park.', isCorrect: false },
        { id: '3', text: 'I forgot what a pencil is.', isCorrect: false },
        { id: '4', text: 'Where is the swimming pool?', isCorrect: false }
      ]
    }
  ]
};

console.log("Building Lesson 196...");
const lesson196Data = buildDetailedLessonA2_Unit14(LESSON_196);
saveUnit14Lesson(lesson196Data);
