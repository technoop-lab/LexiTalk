import { LessonConfigA2 } from './unit10_builder_helper';

// =========================================================================
// LESSON 149: Job Hunting, Basic CVs & Entry-Level Job Interviews
// =========================================================================
export const LESSON_149_CONFIG: LessonConfigA2 = {
  num: 149,
  title: 'Job Hunting, Basic CVs & Entry-Level Job Interviews',
  icon: '💼',
  estMin: 25,
  objTitle: 'Describing Work Experience, Writing a Simple Resume & Answering Interview Questions',
  objDesc: 'Learn to apply for entry-level positions, discuss professional experience, list technical and interpersonal skills on a CV, explain working availability, and answer job interview questions using Present Perfect for career milestones and Past Simple for specific roles.',
  objHi: 'नौकरी के लिए आवेदन करना, बायोडाटा (CV) में कौशल और अनुभव लिखना, उपलब्धता बताना और नौकरी के साक्षात्कार (interview) में आत्मविश्वास से उत्तर देना सीखें।',
  objEs: 'Buscar empleo, redactar un CV básico, describir experiencia laboral y responder en entrevistas de trabajo.',
  canDo: [
    'I can read job advertisements and identify key qualifications and responsibilities.',
    'I can write a simple CV highlighting work experience, education, and languages.',
    'I can answer common interview questions about skills, strengths, and availability.',
    'I can contrast Present Perfect (career overview) and Past Simple (specific previous jobs).'
  ],
  canDoHi: [
    'मैं नौकरी के विज्ञापनों को पढ़ सकता हूँ और मुख्य योग्यता और जिम्मेदारियों को पहचान सकता हूँ।',
    'मैं कार्य अनुभव, शिक्षा और भाषाओं पर प्रकाश डालते हुए एक सरल सीवी लिख सकता हूँ।',
    'मैं कौशल, ताकत और उपलब्धता के बारे में आम साक्षात्कार प्रश्नों के उत्तर दे सकता हूँ।',
    'मैं करियर के अनुभव (Present Perfect) और पिछली नौकरियों (Past Simple) में सही अंतर कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo leer ofertas de empleo e identificar requisitos y funciones clave.',
    'Puedo redactar un CV sencillo con experiencia, educación e idiomas.',
    'Puedo responder preguntas de entrevista sobre fortalezas y disponibilidad.',
    'Puedo contrastar Present Perfect y Past Simple al hablar de mi trayectoria.'
  ],
  vocab: [
    { w: 'curriculum vitae', p: '/kəˌrɪkjələm ˈviːtaɪ/', m: 'a brief account of a person\'s education, qualifications, and previous experience (CV / resume)', hi: 'बायोडाटा / सीवी', es: 'currículum vitae / CV', fr: 'curriculum vitæ / CV', de: 'Lebenslauf / CV', pt: 'currículo / CV', zh: '个人简历', ar: 'السيرة الذاتية', ja: '履歴書 / 職務経歴書', ru: 'резюме / автобиография', ex: 'Please attach an updated curriculum vitae and two professional references to your application.', exHi: 'कृपया अपने आवेदन के साथ एक अद्यतन बायोडाटा और दो पेशेवर संदर्भ संलग्न करें।', exEs: 'Adjunte un currículum vitae actualizado y dos referencias a su solicitud.', ic: '📄' },
    { w: 'cover letter', p: '/ˈkʌvə letə/', m: 'a letter sent with, and explaining the contents of, another document (especially a resume/CV)', hi: 'कवर लेटर / आवेदन पत्र', es: 'carta de presentación', fr: 'lettre de motivation', de: 'Anschreiben / Bewerbungsschreiben', pt: 'carta de apresentação', zh: '求职信 / 自荐信', ar: 'خطاب التقديم', ja: '添え状 / カバーレター', ru: 'сопроводительное письмо', ex: 'In my cover letter, I explained why my customer service skills match the vacancy.', exHi: 'अपने कवर लेटर में, मैंने समझाया कि मेरे ग्राहक सेवा कौशल इस रिक्ति से कैसे मेल खाते हैं।', exEs: 'En mi carta de presentación, expliqué por qué encajo en el puesto.', ic: '✉️' },
    { w: 'vacancy', p: '/ˈveɪkənsi/', m: 'an unoccupied position or job available for someone to apply', hi: 'रिक्ति / खाली पद', es: 'vacante / puesto de trabajo disponible', fr: 'poste vacant / offre d\'emploi', de: 'Stellenausschreibung / freie Stelle', pt: 'vaga de emprego', zh: '职位空缺 / 招聘岗位', ar: 'وظيفة شاغرة', ja: '求人 / 空きポスト', ru: 'вакансия / свободная должность', ex: 'The boutique hotel advertised a vacancy for a weekend front desk receptionist.', exHi: 'बुटीक होटल ने सप्ताहांत फ्रंट डेस्क रिसेप्शनिस्ट के लिए एक रिक्ति का विज्ञापन दिया।', exEs: 'El hotel anunció una vacante de recepcionista para los fines de semana.', ic: '📌' },
    { w: 'qualification', p: '/ˌkwɒlɪfɪˈkeɪʃn/', m: 'a pass of an examination or an official completion of a course, especially in a specialized field', hi: 'योग्यता / शैक्षिक प्रमाण पत्र', es: 'titulación / cualificación profesional', fr: 'qualification / diplôme', de: 'Qualifikation / Abschluss', pt: 'qualificação / titulação', zh: '资格证书 / 任职资格', ar: 'مؤهل علمي أو مهني', ja: '資格 / 免許', ru: 'квалификация / диплом', ex: 'Fluent spoken English is an essential qualification for this airline role.', exHi: 'इस एयरलाइन भूमिका के लिए धाराप्रवाह बोली जाने वाली अंग्रेजी एक आवश्यक योग्यता है।', exEs: 'El inglés fluido es una cualificación esencial para este puesto.', ic: '🎓' },
    { w: 'applicant', p: '/ˈæplɪkənt/', m: 'a person who makes a formal application for something, especially a job', hi: 'आवेदक / प्रार्थी', es: 'candidato / solicitante de empleo', fr: 'candidat / postulant', de: 'Bewerber / Stellenbewerber', pt: 'candidato / solicitante', zh: '申请人 / 应聘者', ar: 'متقدم للوظيفة', ja: '応募者 / 志願者', ru: 'соискатель / претендент', ex: 'Over eighty applicants applied for the administrative assistant position.', exHi: 'प्रशासनिक सहायक पद के लिए अस्सी से अधिक आवेदकों ने आवेदन किया।', exEs: 'Más de ochenta candidatos solicitaron el puesto de asistente administrativo.', ic: '👤' },
    { w: 'interviewer', p: '/ˈɪntəvjuːə/', m: 'a person who interviews someone for a job', hi: 'साक्षात्कारकर्ता / इंटरव्यू लेने वाला', es: 'entrevistador', fr: 'recruteur / enquêteur', de: 'Interviewer / Personalverantwortlicher', pt: 'entrevistador', zh: '面试官', ar: 'المُقابِل / مسؤول التوظيف', ja: '面接官', ru: 'интервьюер / работодатель', ex: 'The interviewer asked about my experience handling high-volume customer inquiries.', exHi: 'साक्षात्कारकर्ता ने ग्राहकों की अधिक पूछताछ को संभालने के मेरे अनुभव के बारे में पूछा।', exEs: 'El entrevistador preguntó por mi experiencia en atención al cliente.', ic: '👔' },
    { w: 'probationary period', p: '/prəˈbeɪʃənri ˈpɪəriəd/', m: 'a trial period at the start of employment during which an employee is evaluated', hi: 'परिवीक्षा अवधि / प्रोबेशन पीरियड', es: 'período de prueba', fr: 'période d\'essai', de: 'Probezeit', pt: 'período de experiência', zh: '试用期', ar: 'فترة التجربة', ja: '試用期間', ru: 'испытательный срок', ex: 'The standard employment contract includes a three-month probationary period.', exHi: 'मानक रोजगार अनुबंध में तीन महीने की परिवीक्षा अवधि शामिल है।', exEs: 'El contrato de trabajo incluye un período de prueba de tres meses.', ic: '⏳' },
    { w: 'reference', p: '/ˈrefrəns/', m: 'a testimonial from someone who knows the applicant regarding their character or ability', hi: 'संदर्भ / अनुशंसा पत्र देने वाला', es: 'referencia laboral / recomendación', fr: 'référence professionnelle', de: 'Referenz / Empfehlungsschreiben', pt: 'referência profissional', zh: '推荐人 / 推荐信', ar: 'مرجع مهني', ja: '推薦人 / 照会先', ru: 'рекомендация / рекомендатель', ex: 'My previous restaurant manager agreed to act as my professional reference.', exHi: 'मेरे पिछले रेस्तरां प्रबंधक मेरे पेशेवर संदर्भ के रूप में कार्य करने के लिए सहमत हुए।', exEs: 'El gerente de mi anterior restaurante aceptó ser mi referencia laboral.', ic: '📞' },
    { w: 'punctual', p: '/ˈpʌŋktʃuəl/', m: 'happening or doing something at the agreed or proper time; on time', hi: 'समयनिष्ठ / समय का पाबंद', es: 'puntual', fr: 'ponctuel', de: 'pünktlich', pt: 'pontual', zh: '准时的 / 守时的', ar: 'دقيق في المواعيد', ja: '時間を守る / 几帳面な', ru: 'пунктуальный', ex: 'Employers value team members who are hardworking and punctual.', exHi: 'नियोक्ता उन टीम सदस्यों को महत्व देते हैं जो मेहनती और समय के पाबंद होते हैं।', exEs: 'Las empresas valoran a los miembros de equipo trabajadores y puntuales.', ic: '⏰' },
    { w: 'availability', p: '/əˌveɪləˈbɪləti/', m: 'the quality of being able to be reached or work at specific days and hours', hi: 'उपलब्धता / काम करने का समय', es: 'disponibilidad horaria', fr: 'disponibilité', de: 'Verfügbarkeit', pt: 'disponibilidade', zh: '可工作时间 / 档期', ar: 'التفرغ / التوافر للعمل', ja: '勤務可能な日時 / 空き状況', ru: 'готовность к работе / доступность', ex: 'My availability includes weekday evenings and all day Saturday.', exHi: 'मेरी उपलब्धता में सप्ताह के दिनों की शाम और पूरे शनिवार का दिन शामिल है।', exEs: 'Mi disponibilidad incluye las tardes de lunes a viernes y sábados completos.', ic: '📅' },
    { w: 'strength', p: '/streŋθ/', m: 'a good or beneficial quality or attribute of a person in the workplace', hi: 'ताकत / मुख्य गुण', es: 'punto fuerte / fortaleza', fr: 'point fort / atout', de: 'Stärke / Pluspunkt', pt: 'ponto forte / qualidade', zh: '个人优势 / 强项', ar: 'نقطة قوة', ja: '長所 / 強み', ru: 'сильная сторона / преимущество', ex: 'One of my greatest strengths is remaining calm and courteous under pressure.', exHi: 'मेरी सबसे बड़ी ताकतों में से एक दबाव में शांत और विनम्र रहना है।', exEs: 'Una de mis mayores fortalezas es mantener la calma bajo presión.', ic: '💪' },
    { w: 'interpersonal', p: '/ˌɪntəˈpɜːsənl/', m: 'relating to relationships or communication between people', hi: 'पारस्परिक / लोगों से संवाद कौशल', es: 'interpersonal / de trato personal', fr: 'interpersonnel / relationnel', de: 'zwischenmenschlich / sozial', pt: 'interpessoal / de relacionamento', zh: '人际交往的', ar: 'مهارات التعامل مع الآخرين', ja: '対人関係の / コミュニケーションの', ru: 'межличностный', ex: 'Strong interpersonal skills are essential for collaborating with clients.', exHi: 'ग्राहकों के साथ सहयोग करने के लिए मजबूत पारस्परिक कौशल आवश्यक हैं।', exEs: 'Tener buenas habilidades interpersonales es clave al tratar con clientes.', ic: '🤝' },
    { w: 'entry-level', p: '/ˈentri levl/', m: 'at the lowest level in an employment hierarchy, suitable for beginners', hi: 'प्रारंभिक स्तर / शुरुआती नौकरी', es: 'de nivel inicial / puesto básico', fr: 'débutant / premier emploi', de: 'Einstiegs- / für Berufseinsteiger', pt: 'nível júnior / de entrada', zh: '初级职位的 / 入门级的', ar: 'للمبتدئين / مستوى مبتدئ', ja: 'エントリーレベルの / 初心者向けの', ru: 'начального уровня / для новичков', ex: 'This entry-level barista position includes full on-the-job training.', exHi: 'इस शुरुआती बरिस्ता पद में नौकरी के दौरान पूरा प्रशिक्षण शामिल है।', exEs: 'Este puesto inicial de barista incluye formación completa en el trabajo.', ic: '☕' },
    { w: 'salary expectation', p: '/ˈsæləri ˌekspekˈteɪʃn/', m: 'the amount of pay that an applicant expects to receive', hi: 'वेतन की अपेक्षा', es: 'expectativa salarial', fr: 'prétentions salariales', de: 'Gehaltserwartung', pt: 'pretensão salarial', zh: '期望薪资', ar: 'الراتب المتوقع', ja: '希望給与', ru: 'зарплатные ожидания', ex: 'What are your salary expectations for this full-time role?', exHi: 'इस पूर्णकालिक भूमिका के लिए आपकी वेतन अपेक्षाएं क्या हैं?', exEs: '¿Cuáles son sus expectativas salariales para este puesto a tiempo completo?', ic: '💰' },
    { w: 'shift work', p: '/ˈʃɪft wɜːk/', m: 'work organized in shifts to provide coverage across all hours', hi: 'पाली कार्य / शिफ्ट वर्क', es: 'trabajo por turnos', fr: 'travail posté / par roulement', de: 'Schichtarbeit', pt: 'trabalho em turnos', zh: '轮班工作制', ar: 'العمل بنظام النوبات', ja: 'シフト勤務 / 交代勤務', ru: 'посменная работа', ex: 'Are you comfortable with shift work, including weekend rosters?', exHi: 'क्या आप सप्ताहांत रोस्टर सहित शिफ्ट कार्य के साथ सहज हैं?', exEs: '¿Se siente cómodo con el trabajo por turnos, incluidos los fines de semana?', ic: '🔄' },
    { w: 'duties', p: '/ˈdjuːtiz/', m: 'tasks or functions that are part of a person\'s job description', hi: 'कर्तव्य / कार्य जिम्मेदारियां', es: 'funciones / tareas del puesto', fr: 'fonctions / attributions', de: 'Aufgabenbereich / Pflichten', pt: 'atribuições / deveres', zh: '工作职责', ar: 'واجبات ومهام الوظيفة', ja: '職務 / 業務内容', ru: 'служебные обязанности', ex: 'My daily duties included answering emails and updating client records.', exHi: 'मेरे दैनिक कर्तव्यों में ईमेल का उत्तर देना और क्लाइंट रिकॉर्ड अपडेट करना शामिल था।', exEs: 'Mis funciones diarias incluían responder correos y actualizar archivos.', ic: '📋' },
    { w: 'adaptable', p: '/əˈdæptəbl/', m: 'able to adjust to new conditions or changes quickly and positively', hi: 'अनुकूलनशील / परिस्थितियों के अनुसार ढलने वाला', es: 'adaptable / flexible', fr: 'polyvalent / adaptable', de: 'anpassungsfähig / flexibel', pt: 'adaptável / flexível', zh: '适应力强的', ar: 'مرن / قادر على التكيف', ja: '適応力がある / 柔軟な', ru: 'легко адаптирующийся', ex: 'I am highly adaptable and enjoy learning new software tools.', exHi: 'मैं अत्यधिक अनुकूलनशील हूँ और नए सॉफ्टवेयर टूल सीखने का आनंद लेता हूँ।', exEs: 'Soy muy adaptable y disfruto aprendiendo nuevas herramientas informáticas.', ic: '🧩' },
    { w: 'deadline', p: '/ˈdedlaɪn/', m: 'the latest time or date by which something should be completed', hi: 'अंतिम तिथि / कार्य पूरा करने की समय सीमा', es: 'fecha límite / plazo de entrega', fr: 'date limite / échéance', de: 'Frist / Abgabetermin', pt: 'prazo final', zh: '截止日期 / 期限', ar: 'الموعد النهائي', ja: '締め切り / 期限', ru: 'дедлайн / крайний срок', ex: 'We worked efficiently as a team to meet the project deadline.', exHi: 'हमने परियोजना की समय सीमा को पूरा करने के लिए एक टीम के रूप में कुशलता से काम किया।', exEs: 'Trabajamos eficazmente en equipo para cumplir con la fecha límite del proyecto.', ic: '⏱️' },
    { w: 'hands-on', p: '/ˌhændz ˈɒn/', m: 'involving active personal participation rather than theory', hi: 'व्यावहारिक / हाथों-हाथ कार्य अनुभव', es: 'práctico / de campo', fr: 'pratique / de terrain', de: 'praxisnah / praxisorientiert', pt: 'prático / mão na massa', zh: '注重实践的 / 实际操作的', ar: 'عملي / تطبيقي', ja: '実践的な / 体験型の', ru: 'практический (опыт)', ex: 'I have two years of hands-on experience in retail customer service.', exHi: 'मेरे पास खुदरा ग्राहक सेवा में दो साल का व्यावहारिक अनुभव है।', exEs: 'Tengo dos años de experiencia práctica en atención al cliente minorista.', ic: '🛠️' },
    { w: 'on-the-job', p: '/ˌɒn ðə ˈdʒɒb/', m: 'taking place while at work as part of regular employment', hi: 'कार्य के दौरान / नौकरी पर ही प्रशिक्षण', es: 'en el puesto de trabajo', fr: 'en cours d\'emploi / sur le tas', de: 'am Arbeitsplatz', pt: 'no local de trabalho', zh: '在职的 / 岗位的', ar: 'أثناء العمل', ja: '職場で / 勤務中の', ru: 'по месту работы / на рабочем месте', ex: 'New recruits receive two weeks of intensive on-the-job training.', exHi: 'नए रंगरूटों को दो सप्ताह का गहन ऑन-द-जॉब प्रशिक्षण प्राप्त होता है।', exEs: 'Los nuevos empleados reciben dos semanas de formación en el puesto.', ic: '🏢' }
  ],
  chunks: [
    { phrase: 'apply for a job vacancy', meaning: 'submit a resume and cover letter for an open position', hi: 'नौकरी की रिक्ति के लिए आवेदन करना', es: 'solicitar un puesto de trabajo / vacante', fr: 'postuler à une offre d\'emploi', de: 'sich auf eine offene Stelle bewerben', pt: 'candidatar-se a uma vaga de emprego', zh: '申请应聘工作岗位', ar: 'التقدم لوظيفة شاغرة', ja: '求人に応募する', ru: 'подать заявку на вакансию', note: 'Standard career application phrase.', ic: '📤' },
    { phrase: 'I have worked in customer service for two years', meaning: 'stating duration of experience with Present Perfect', hi: 'मैंने दो साल तक ग्राहक सेवा में काम किया है', es: 'he trabajado en atención al cliente dos años', fr: 'j\'ai travaillé dans le service client pendant deux ans', de: 'ich habe zwei Jahre im Kundendienst gearbeitet', pt: 'trabalhei com atendimento ao cliente por dois anos', zh: '我从事客户服务工作已有两年', ar: 'لقد عملت في خدمة العملاء لمدة سنتين', ja: 'カスタマーサービスで2年間働いた経験があります', ru: 'я проработал в сфере обслуживания клиентов два года', note: 'Key interview formula for work history.', ic: '⏳' },
    { phrase: 'my greatest strength is', meaning: 'introducing a key personal skill or attribute in an interview', hi: 'मेरी सबसे बड़ी ताकत यह है कि', es: 'mi mayor punto fuerte es', fr: 'mon principal atout est', de: 'meine größte Stärke ist', pt: 'minha maior qualidade é', zh: '我最大的优势在于', ar: 'أكبر نقطة قوة لدي هي', ja: '私の最大の強みは〜です', ru: 'моя самая сильная сторона — это', note: 'Standard interview opening.', ic: '💪' },
    { phrase: 'I am available immediately', meaning: 'stating that one can start working without delay', hi: 'मैं तुरंत काम शुरू करने के लिए उपलब्ध हूँ', es: 'tengo disponibilidad inmediata', fr: 'je suis disponible immédiatement', de: 'ich bin ab sofort verfügbar', pt: 'estou disponível imediatamente', zh: '我随时可以立即入职', ar: 'أنا متاح للبدء فورًا', ja: 'すぐに勤務開始可能です', ru: 'я могу приступить к работе немедленно', note: 'Decisive interview availability answer.', ic: '🚀' },
    { phrase: 'meet tight deadlines', meaning: 'complete tasks on time even when time is limited', hi: 'कड़ी समय सीमा को पूरा करना', es: 'cumplir plazos de entrega ajustados', fr: 'respecter des délais serrés', de: 'knappe Fristen einhalten', pt: 'cumprir prazos apertados', zh: '按时完成紧迫的工作任务', ar: 'الالتزام بالمواعيد النهائية الضيقة', ja: '厳しい締め切りを守る', ru: 'укладываться в сжатые сроки', note: 'Professional competency collocation.', ic: '⏱️' },
    { phrase: 'work well in a team', meaning: 'collaborate productively and peacefully with colleagues', hi: 'टीम में अच्छा काम करना', es: 'trabajar bien en equipo', fr: 'avoir l\'esprit d\'équipe', de: 'gut im Team arbeiten', pt: 'trabalhar bem em equipe', zh: '具备出色的团队协作能力', ar: 'العمل بشكل جيد ضمن فريق', ja: 'チームワークが得意である', ru: 'хорошо работать в команде', note: 'Universal resume/interview skill.', ic: '👥' },
    { phrase: 'attach your updated CV', meaning: 'include the latest resume file with an email or application', hi: 'अपना अद्यतन सीवी संलग्न करना', es: 'adjuntar su CV actualizado', fr: 'joindre votre CV à jour', de: 'Ihren aktuellen Lebenslauf anhängen', pt: 'anexar seu currículo atualizado', zh: '附上您的最新个人简历', ar: 'إرفاق سيرتك الذاتية المحدثة', ja: '最新の履歴書を添付する', ru: 'прикрепить обновлённое резюме', note: 'Standard job application instruction.', ic: '📎' },
    { phrase: 'looking forward to hearing from you', meaning: 'polite closing sentence in an application letter or email', hi: 'आपके उत्तर की प्रतीक्षा कर रहा हूँ', es: 'quedo a la espera de sus noticias', fr: 'dans l\'attente de votre retour', de: 'ich freue mich auf Ihre Rückmeldung', pt: 'aguardo seu retorno / fico à disposição', zh: '期待收到您的回复', ar: 'أتطلع إلى الاستماع إليكم قريبًا', ja: 'お返事をお待ちしております', ru: 'с нетерпением жду вашего ответа', note: 'Professional email sign-off.', ic: '✉️' }
  ],
  grammar: {
    title: 'Professional Discourse: Contrasting Present Perfect (Overall Experience) & Past Simple (Specific Prior Jobs)',
    concept: 'Using Present Perfect to state general career accomplishments and duration ("I have worked in sales for 3 years"), and Past Simple for specific past roles and completed dates ("In 2022, I graduated from college").',
    patterns: [
      {
        title: 'Present Perfect for Cumulative Experience & Duration',
        structure: 'Subject + have / has + Past Participle + [for / since]...',
        rule: 'Use Present Perfect when emphasizing overall time or experience that connects to the present moment.',
        examples: [
          { en: 'I have worked in hotel management for three years.', hi: 'मैंने होटल प्रबंधन में तीन साल तक काम किया है।', es: 'He trabajado en gestión hotelera durante tres años.' },
          { en: 'She has lived in Manchester since 2021.', hi: 'वह 2021 से मैनचेस्टर में रह रही है।', es: 'Ella ha vivido en Manchester desde 2021.' }
        ]
      },
      {
        title: 'Past Simple for Specific Completed Roles & Past Timelines',
        structure: 'Subject + Past Simple Verb + in [Year] / when...',
        rule: 'Use Past Simple with specific time markers (in 2020, last year, two years ago).',
        examples: [
          { en: 'In 2023, I managed a team of five retail assistants.', hi: '2023 में, मैंने पांच खुदरा सहायकों की एक टीम का प्रबंधन किया।', es: 'En 2023, dirigí un equipo de cinco asistentes de ventas.' },
          { en: 'I finished my barista diploma last June.', hi: 'मैंने पिछले जून में अपना बरिस्ता डिप्लोमा पूरा किया।', es: 'Terminé mi título de barista el pasado junio.' }
        ]
      },
      {
        title: 'Describing Skills with "Good at + Gerund" & "Experienced in + Noun"',
        structure: 'I am good at + [Verb-ing] | I am experienced in + [Noun / Gerund]',
        rule: 'Prepositions "at" and "in" are followed by nouns or gerunds (-ing).',
        examples: [
          { en: 'I am good at resolving customer complaints calmly.', hi: 'मैं ग्राहकों की शिकायतों को शांति से सुलझाने में अच्छा हूँ।', es: 'Soy bueno resolviendo quejas de clientes con calma.' },
          { en: 'I am experienced in electronic cash register operations.', hi: 'मैं इलेक्ट्रॉनिक कैश रजिस्टर संचालन में अनुभवी हूँ।', es: 'Tengo experiencia en el manejo de cajas registradoras.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'I am working in retail since three years.',
      cor: 'I have worked in retail for three years.',
      exp: 'Use Present Perfect with "for" to express duration of experience up to now.',
      hi: 'अनुभव की अवधि के लिए Present Perfect ("have worked") और "for" का प्रयोग करें।',
      es: 'Se usa Present Perfect con "for" para expresar duración: "I have worked... for three years".'
    },
    {
      inc: 'I graduated from university in 2022 and have moved here yesterday.',
      cor: 'I graduated from university in 2022 and moved here yesterday.',
      exp: '"Yesterday" specifies a completed past time, so use Past Simple ("moved"), not Present Perfect.',
      hi: '"Yesterday" के साथ Past Simple ("moved") का प्रयोग होता है।',
      es: 'Con "yesterday" se usa Pasado Simple: "moved", no "have moved".'
    },
    {
      inc: 'I am good in communicate with clients.',
      cor: 'I am good at communicating with clients.',
      exp: 'Use "good at + gerund (-ing)": "good at communicating".',
      hi: '"Good at + Verb-ing" सही संरचना है: "good at communicating".',
      es: 'La estructura correcta es "good at + gerundio": "good at communicating".'
    },
    {
      inc: 'I look forward to hear from you.',
      cor: 'I look forward to hearing from you.',
      exp: '"Look forward to" takes a gerund (-ing): "hearing".',
      hi: '"Look forward to" के बाद gerund "hearing" आता है।',
      es: '"Look forward to" rige gerundio: "hearing".'
    },
    {
      inc: 'I am available on start work.',
      cor: 'I am available to start work immediately.',
      exp: 'Use the infinitive "available to start".',
      hi: '"Available to start work" सही रूप है।',
      es: 'Se dice "available to start".'
    }
  ],
  dialogues: [
    {
      title: 'Job Interview for an Administrative Receptionist Role',
      context: 'David is interviewed by Sophia for an entry-level clinic receptionist vacancy.',
      charA: { name: 'David', av: '👨‍💼', role: 'Candidate' },
      charB: { name: 'Sophia', av: '👩‍💼', role: 'Hiring Manager' },
      turns: [
        { spk: 'Sophia', text: 'Good morning, David. Thank you for coming in today. Could you tell me about your previous customer service experience?', hi: 'शुभ प्रभात, डेविड। आज आने के लिए धन्यवाद। क्या आप मुझे अपने पिछले ग्राहक सेवा अनुभव के बारे में बता सकते हैं?', es: 'Buenos días, David. Gracias por venir. ¿Podría hablarme de su experiencia previa en atención al cliente?' },
        { spk: 'David', text: 'Certainly! I have worked as a customer service associate for two years. In my last job, I handled telephone inquiries and scheduled client appointments.', hi: 'निश्चित रूप से! मैंने दो साल तक ग्राहक सेवा सहयोगी के रूप में काम किया है। मेरी पिछली नौकरी में, मैंने टेलीफोन पूछताछ को संभाला और क्लाइंट नियुक्तियों को निर्धारित किया।', es: '¡Por supuesto! He trabajado como asistente de atención al cliente dos años. Gestioné llamadas y citas.' },
        { spk: 'Sophia', text: 'That sounds very relevant. What would you say is your greatest professional strength?', hi: 'यह बहुत प्रासंगिक लगता है। आप अपनी सबसे बड़ी पेशेवर ताकत क्या कहेंगे?', es: 'Suena muy relevante. ¿Cuál diría que es su mayor fortaleza profesional?' },
        { spk: 'David', text: 'My greatest strength is my organization and interpersonal communication. I am punctual, adaptable, and work very well under pressure.', hi: 'मेरी सबसे बड़ी ताकत मेरा संगठन और पारस्परिक संचार है। मैं समयनिष्ठ, अनुकूलनशील हूँ और दबाव में बहुत अच्छा काम करता हूँ।', es: 'Mi mayor fortaleza es mi organización y comunicación. Soy puntual, adaptable y trabajo bien bajo presión.' },
        { spk: 'Sophia', text: 'Excellent. When would you be available to start if selected?', hi: 'बहुत बढ़िया। यदि आप चुने जाते हैं तो आप कब से काम शुरू करने के लिए उपलब्ध होंगे?', es: 'Excelente. ¿Cuándo estaría disponible para empezar si es seleccionado?' },
        { spk: 'David', text: 'I am available to start work immediately, including weekends and early shifts.', hi: 'मैं सप्ताहांत और शुरुआती शिफ्ट सहित तुरंत काम शुरू करने के लिए उपलब्ध हूँ।', es: 'Tengo disponibilidad inmediata, incluidos fines de semana y turnos de mañana.' }
      ]
    },
    {
      title: 'Discussing CV Improvements with a Career Mentor',
      context: 'Amira reviews her updated resume with her career counselor, Jason.',
      charA: { name: 'Amira', av: '👩‍🎓', role: 'Job Seeker' },
      charB: { name: 'Jason', av: '👨‍🏫', role: 'Career Advisor' },
      turns: [
        { spk: 'Amira', text: 'Jason, I have updated my CV to include my language skills and volunteer experience at the food bank.', hi: 'जेसन, मैंने अपने सीवी को अपने भाषा कौशल और खाद्य बैंक में स्वयंसेवी अनुभव को शामिल करने के लिए अपडेट किया है।', es: 'Jason, actualicé mi CV para incluir mis idiomas y el voluntariado en el banco de alimentos.' },
        { spk: 'Jason', text: 'That looks fantastic, Amira! Employers value hands-on community leadership. Don\'t forget to list two professional references at the bottom.', hi: 'यह बहुत अच्छा लग रहा है, अमीरा! नियोक्ता व्यावहारिक सामुदायिक नेतृत्व को महत्व देते हैं। नीचे दो पेशेवर संदर्भ सूचीबद्ध करना न भूलें।', es: '¡Se ve fantástico, Amira! Las empresas valoran el liderazgo comunitario. No olvides poner dos referencias.' },
        { spk: 'Amira', text: 'Thank you! I will send my application and cover letter for the library vacancy before the deadline today.', hi: 'धन्यवाद! मैं आज समय सीमा से पहले पुस्तकालय की रिक्ति के लिए अपना आवेदन और कवर लेटर भेज दूँगी।', es: '¡Gracias! Enviaré mi solicitud y carta de presentación para la vacante de la biblioteca antes del plazo hoy.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_u10_l149_p01',
      type: 'multiple_choice',
      prompt: 'Select the sentence that correctly states duration of work experience:',
      options: [
        { id: '1', text: 'I have worked in retail customer service for two years.', isCorrect: true },
        { id: '2', text: 'I am working in retail since two years.', isCorrect: false },
        { id: '3', text: 'I work in retail since two years.', isCorrect: false },
        { id: '4', text: 'I have worked in retail since two years.', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Use Present Perfect with "for" to express a time period ("for two years").'
    },
    {
      id: 'ex_u10_l149_p02',
      type: 'fill_blank',
      prompt: 'I am very good at _____ (organize) office files and meeting tight deadlines.',
      correctAnswer: 'organizing',
      explanation: 'Preposition "at" is followed by gerund "organizing".'
    },
    {
      id: 'ex_u10_l149_p03',
      type: 'word_ordering',
      prompt: 'Order the words to state availability:',
      tokens: ['I', 'am', 'available', 'to', 'start', 'work', 'immediately.'],
      correctAnswer: 'I am available to start work immediately.',
      explanation: 'Standard interview availability phrase.'
    },
    {
      id: 'ex_u10_l149_p04',
      type: 'error_correction',
      prompt: 'Fix the error in this email closing:',
      sentence: 'I look forward to hear from you soon.',
      correctAnswer: 'I look forward to hearing from you soon.',
      explanation: 'Use gerund "hearing" after "look forward to".'
    },
    {
      id: 'ex_u10_l149_p05',
      type: 'translation',
      prompt: 'Translate into English: "मेरी सबसे बड़ी ताकत दबाव में शांत और समय का पाबंद रहना है।"',
      correctAnswer: 'My greatest strength is remaining calm and punctual under pressure.',
      acceptableAnswers: ['My greatest strength is staying calm and punctual under pressure.'],
      explanation: '"Remaining calm and punctual" highlights key soft skills.'
    },
    {
      id: 'ex_u10_l149_p06',
      type: 'listening',
      prompt: 'Listen to the applicant and identify how many years of experience they have:',
      audioText: 'I have worked as a hotel receptionist for three years in London.',
      options: [
        { id: '1', text: '3 years in London', isCorrect: true },
        { id: '2', text: '13 years in London', isCorrect: false },
        { id: '3', text: '2 years in Manchester', isCorrect: false },
        { id: '4', text: '5 months in London', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The audio explicitly states 3 years in London.'
    },
    {
      id: 'ex_u10_l149_p07',
      type: 'match_pairs',
      prompt: 'Match job application terms with their definitions:',
      options: [
        { id: '1', text: 'curriculum vitae → summary of education, work history, and skills' },
        { id: '2', text: 'vacancy → open, available job position' },
        { id: '3', text: 'cover letter → introductory letter explaining motivation for a job' },
        { id: '4', text: 'probationary period → trial evaluation period at the start of employment' }
      ],
      correctAnswer: 'matched',
      explanation: 'Core career terminology.'
    },
    {
      id: 'ex_u10_l149_p08',
      type: 'dialogue_completion',
      prompt: 'Complete the interview response:\nInterviewer: "How do you handle challenging customers?"\nCandidate: "I am patient, listen actively, and _____ with my team to solve issues."',
      options: [
        { id: '1', text: 'work well in a team', isCorrect: true },
        { id: '2', text: 'dispute the smart meter reading', isCorrect: false },
        { id: '3', text: 'request a breakdown excess', isCorrect: false },
        { id: '4', text: 'apply direct pressure', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: '"Work well in a team" fits the professional interview dialogue.'
    },
    {
      id: 'ex_u10_l149_p09',
      type: 'speaking',
      prompt: 'Speak this interview opening statement clearly:',
      targetText: 'I have two years of hands-on retail experience, and my greatest strength is interpersonal communication.',
      explanation: 'Ensure clear pronunciation of "hands-on retail experience" and "interpersonal communication".'
    },
    {
      id: 'ex_u10_l149_p10',
      type: 'personal_production',
      prompt: 'Write an interview sentence describing a skill using "I am experienced in":',
      sentenceTemplate: 'I am experienced in [skill or task] and I work well under pressure.',
      correctAnswer: 'I am experienced in customer service and I work well under pressure.',
      explanation: 'Tests expression of professional qualifications.'
    }
  ],
  review: [
    {
      id: 'ex_u10_l149_r01',
      type: 'multiple_choice',
      prompt: 'Which preposition follows "look forward to"?',
      options: [
        { id: '1', text: 'A gerund / noun (e.g., hearing)', isCorrect: true },
        { id: '2', text: 'A bare verb (e.g., hear)', isCorrect: false },
        { id: '3', text: 'Past tense (e.g., heard)', isCorrect: false },
        { id: '4', text: 'Infinitive with to (e.g., to hear)', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: '"Look forward to" takes a gerund or noun.'
    },
    {
      id: 'ex_u10_l149_r02',
      type: 'fill_blank',
      prompt: 'In 2022, I _____ (complete) an advanced certificate in business administration.',
      correctAnswer: 'completed',
      explanation: 'Past Simple "completed" with specific past date (In 2022).'
    },
    {
      id: 'ex_u10_l149_r03',
      type: 'word_ordering',
      prompt: 'Order the words to form a resume sentence:',
      tokens: ['Please', 'find', 'attached', 'my', 'updated', 'curriculum', 'vitae.'],
      correctAnswer: 'Please find attached my updated curriculum vitae.',
      explanation: 'Standard formal job application formula.'
    },
    {
      id: 'ex_u10_l149_r04',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence:',
      sentence: 'I am good in resolving computer software problems.',
      correctAnswer: 'I am good at resolving computer software problems.',
      explanation: 'Use "good at", not "good in".'
    },
    {
      id: 'ex_u10_l149_r05',
      type: 'translation',
      prompt: 'Translate into English: "मैं सप्ताहांत और शाम की शिफ्ट में काम करने के लिए उपलब्ध हूँ।"',
      correctAnswer: 'I am available to work weekends and evening shifts.',
      acceptableAnswers: ['I am available to work on weekends and evening shifts.'],
      explanation: 'Clear statement of job availability.'
    },
    {
      id: 'ex_u10_l149_r06',
      type: 'listening',
      prompt: 'Listen and select what the candidate attached:',
      audioText: 'I have attached my updated CV and a cover letter detailing my relevant work experience.',
      options: [
        { id: '1', text: 'Updated CV and cover letter', isCorrect: true },
        { id: '2', text: 'Passport and electricity bill', isCorrect: false },
        { id: '3', text: 'Train ticket and rental contract', isCorrect: false },
        { id: '4', text: 'Medical receipt and prescription', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The candidate attached their CV and cover letter.'
    },
    {
      id: 'ex_u10_l149_r07',
      type: 'listen_and_type',
      prompt: 'Listen and type what you hear:',
      audioText: 'The hiring manager invited three qualified candidates for an in-person interview.',
      correctAnswer: 'The hiring manager invited three qualified candidates for an in-person interview.',
      explanation: 'Focus on spelling of "qualified", "candidates", and "interview".'
    },
    {
      id: 'ex_u10_l149_r08',
      type: 'multiple_choice',
      prompt: 'What does "punctual" mean?',
      options: [
        { id: '1', text: 'Arriving and doing things on time', isCorrect: true },
        { id: '2', text: 'Speaking multiple foreign languages', isCorrect: false },
        { id: '3', text: 'Having a medical degree', isCorrect: false },
        { id: '4', text: 'Working without payment', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: '"Punctual" means consistently on time.'
    }
  ],
  assessment: [
    {
      id: 'ex_u10_l149_a01',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses Present Perfect for cumulative experience?',
      options: [
        { id: '1', text: 'I have worked as an administrative assistant for three years.', isCorrect: true },
        { id: '2', text: 'I am working as an assistant since three years.', isCorrect: false },
        { id: '3', text: 'I worked as an assistant since 2021 now.', isCorrect: false },
        { id: '4', text: 'I have work as an assistant for three years.', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Option 1 correctly pairs "have worked" with "for three years".'
    },
    {
      id: 'ex_u10_l149_a02',
      type: 'fill_blank',
      prompt: 'Last year, I _____ (manage) a team of volunteers at the neighborhood center.',
      correctAnswer: 'managed',
      explanation: 'Past Simple "managed" with specific completed time "Last year".'
    },
    {
      id: 'ex_u10_l149_a03',
      type: 'word_ordering',
      prompt: 'Assemble the tokens to make a professional statement:',
      tokens: ['I', 'am', 'good', 'at', 'collaborating', 'with', 'multicultural', 'teams.'],
      correctAnswer: 'I am good at collaborating with multicultural teams.',
      explanation: 'Standard workplace capability.'
    },
    {
      id: 'ex_u10_l149_a04',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence:',
      sentence: 'I look forward to meet you at the interview tomorrow.',
      correctAnswer: 'I look forward to meeting you at the interview tomorrow.',
      explanation: 'Change "meet" to gerund "meeting".'
    },
    {
      id: 'ex_u10_l149_a05',
      type: 'translation',
      prompt: 'Translate into English: "मैं तुरंत काम शुरू करने के लिए उपलब्ध हूँ और नई चीजें सीखने के लिए उत्सुक हूँ।"',
      correctAnswer: 'I am available to start work immediately and eager to learn new things.',
      acceptableAnswers: ['I am available to start work immediately and keen to learn new things.'],
      explanation: 'Enthusiastic candidate availability.'
    },
    {
      id: 'ex_u10_l149_a06',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nInterviewer: "Why are you interested in this position?"\nCandidate: "I want to apply my customer service skills and _____ in a supportive work environment."',
      options: [
        { id: '1', text: 'gain hands-on experience', isCorrect: true },
        { id: '2', text: 'evacuate the burning building', isCorrect: false },
        { id: '3', text: 'dispute my broadband invoice', isCorrect: false },
        { id: '4', text: 'submit an insurance excess', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: '"Gain hands-on experience" fits a career interview perfectly.'
    },
    {
      id: 'ex_u10_l149_a07',
      type: 'speaking',
      prompt: 'Read this self-introduction aloud:',
      targetText: 'I am a dependable and punctual professional with two years of customer service experience and a passion for teamwork.',
      explanation: 'Ensure confident pacing, clear vowel sounds, and professional intonation.'
    }
  ]
};

// =========================================================================
// LESSON 150: Unit 10 Comprehensive Review & CEFR A2 Cumulative Mastery Synthesis
// =========================================================================
export const LESSON_150_CONFIG: LessonConfigA2 = {
  num: 150,
  title: 'Unit 10 Comprehensive Review & CEFR A2 Cumulative Mastery Synthesis',
  icon: '🏆',
  estMin: 30,
  objTitle: 'Synthesizing Complete CEFR A2 Practical, Social, Civic & Professional English Fluency',
  objDesc: 'Consolidate all linguistic, lexical, and communicative competencies developed across Unit 10 (Banking, Postal Services, Municipal Civic Rights, Housing Maintenance, Transit Disruptions, Lost Property, Utilities & Eco-Automation, Medical Care, Health Insurance, Automotive & Roadside Aid, Emergency Response, Community Volunteering, Sustainability & Job Hunting) and achieve full CEFR A2 certification.',
  objHi: 'यूनिट 10 और संपूर्ण CEFR A2 पाठ्यक्रम (बैंकिंग, नागरिक अधिकार, स्वास्थ्य, बीमा, आपात स्थिति, पर्यावरण और नौकरी साक्षात्कार) की सभी भाषा दक्षताओं का व्यापक पुनरावलोकन और पूर्ण महारत प्राप्त करें।',
  objEs: 'Sintetizar y consolidar todas las competencias de la Unidad 10 y del nivel CEFR A2 completo para la maestría lingüística definitiva.',
  canDo: [
    'I can handle real-world practical tasks independently (banking, postal, municipal registrations, utility billing).',
    'I can communicate effectively during emergencies, medical visits, breakdowns, and incident reports.',
    'I can participate in community initiatives, green living, and articulate environmental cause and effect.',
    'I can present my work background, professional skills, and career goals with full CEFR A2 fluency.'
  ],
  canDoHi: [
    'मैं वास्तविक दुनिया के व्यावहारिक कार्यों (बैंकिंग, डाक, नगरपालिका पंजीकरण, उपयोगिता बिलिंग) को स्वतंत्र रूप से संभाल सकता हूँ।',
    'मैं आपात स्थितियों, चिकित्सा परामर्शों, वाहन खराबी और घटना रिपोर्टों के दौरान प्रभावी ढंग से संवाद कर सकता हूँ।',
    'मैं सामुदायिक पहलों, पर्यावरण-अनुकूल जीवन में भाग ले सकता हूँ और पर्यावरणीय कारण और प्रभाव स्पष्ट कर सकता हूँ।',
    'मैं पूर्ण CEFR A2 प्रवाह के साथ अपनी कार्य पृष्ठभूमि, कौशल और करियर लक्ष्यों को प्रस्तुत कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo realizar gestiones prácticas reales (bancos, correos, trámites cívicos, facturas).',
    'Puedo comunicarme con eficacia en emergencias, consultas médicas y averías.',
    'Puedo participar en iniciativas comunitarias y explicar causa y efecto ambiental.',
    'Puedo presentar mi perfil profesional con total solvencia del nivel CEFR A2.'
  ],
  vocab: [
    { w: 'milestone', p: '/ˈmaɪlstəʊn/', m: 'a significant stage or event in the development of something', hi: 'मील का पत्थर / महत्वपूर्ण उपलब्धि', es: 'hito / logro destacado', fr: 'étape majeure / jalon', de: 'Meilenstein / Wendepunkt', pt: 'marco / conquista importante', zh: '里程碑 / 重要阶段', ar: 'إنجاز مهم / مرحلة مفصلية', ja: '節目 / マイルストーン', ru: 'веха / рубеж / достижение', ex: 'Completing Lesson 150 marks a major milestone in your English learning journey.', exHi: 'पाठ 150 पूरा करना आपकी अंग्रेजी सीखने की यात्रा में एक प्रमुख मील का पत्थर है।', exEs: 'Completar la lección 150 marca un hito clave en tu aprendizaje.', ic: '🚩' },
    { w: 'proficiency', p: '/prəˈfɪʃnsi/', m: 'a high degree of competence or skill; expertise', hi: 'दक्षता / प्रवीणता', es: 'dominio / competencia lingüística', fr: 'maîtrise / compétence', de: 'Kompetenz / Sprachbeherrschung', pt: 'proficiência / domínio', zh: '熟练度 / 精通', ar: 'كفاءة / إتقان', ja: '熟達 / 堪能さ', ru: 'владение / профессиональный уровень', ex: 'You have demonstrated solid A2 English proficiency across all core skill areas.', exHi: 'आपने सभी मुख्य कौशल क्षेत्रों में ठोस A2 अंग्रेजी दक्षता का प्रदर्शन किया है।', exEs: 'Has demostrado un sólido dominio del inglés A2 en todas las destrezas.', ic: '🎯' },
    { w: 'competency', p: '/ˈkɒmpɪtənsi/', m: 'the ability to do something successfully or efficiently', hi: 'योग्यता / सक्षमता', es: 'competencia / habilidad práctica', fr: 'compétence', de: 'Fähigkeit / Kompetenz', pt: 'competência', zh: '能力 / 胜任力', ar: 'جدارة / كفاءة', ja: '能力 / コンピテンシー', ru: 'компетентность / способность', ex: 'Our curriculum evaluates both grammatical accuracy and communicative competency.', exHi: 'हमारा पाठ्यक्रम व्याकरण संबंधी सटीकता और संवादात्मक क्षमता दोनों का मूल्यांकन करता है।', exEs: 'Nuestro plan evalúa tanto la precisión como la competencia comunicativa.', ic: '📊' },
    { w: 'recap', p: '/ˈriːkæp/', m: 'a summary of what has been said or done', hi: 'संक्षिप्त समीक्षा / रीकैप', es: 'resumen recapitulativo', fr: 'récapitulatif / bilan', de: 'Zusammenfassung / Rückblick', pt: 'recapitulação / resumo', zh: '回顾 / 总结', ar: 'ملخص شامل', ja: '要約 / おさらい', ru: 'итог / краткий обзор', ex: 'Let us do a comprehensive recap of key grammar patterns learned in Unit 10.', exHi: 'आइए यूनिट 10 में सीखे गए प्रमुख व्याकरण पैटर्नों का एक व्यापक पुनरावलोकन करें।', exEs: 'Hagamos un resumen completo de los patrones gramaticales de la Unidad 10.', ic: '🔄' },
    { w: 'accomplishment', p: '/əˈkʌmplɪʃmənt/', m: 'something that has been achieved successfully', hi: 'उपलब्धि / सिद्धि', es: 'logro / éxito conseguido', fr: 'accomplissement / réussite', de: 'Leistung / Errungenschaft', pt: 'conquista / realização', zh: '成就 / 成绩', ar: 'إنجاز', ja: '実績 / 達成', ru: 'достижение / успех', ex: 'Speaking English in real-world situations is an outstanding personal accomplishment.', exHi: 'वास्तविक जीवन की स्थितियों में अंग्रेजी बोलना एक उत्कृष्ट व्यक्तिगत उपलब्धि है।', exEs: 'Hablar inglés en situaciones reales es un logro personal extraordinario.', ic: '🌟' },
    { w: 'consolidate', p: '/kənˈsɒlɪdeɪt/', m: 'make something physically stronger or more solid; reinforce', hi: 'मजबूत करना / सुदृढ़ करना', es: 'consolidar / afianzar conocimientos', fr: 'consolider / renforcer', de: 'festigen / vertiefen', pt: 'consolidar / fixar', zh: '巩固 / 加强', ar: 'ترسيخ / تعزيز', ja: '定着させる / 強化する', ru: 'закреплять / консолидировать', ex: 'Reviewing daily vocabulary consolidates long-term memory retention.', exHi: 'दैनिक शब्दावली की समीक्षा करने से दीर्घकालिक स्मृति प्रतिधारण मजबूत होता है।', exEs: 'Repasar el vocabulario consolida la memoria a largo plazo.', ic: '🧱' },
    { w: 'autonomous', p: '/ɔːˈtɒnəməs/', m: 'having the freedom to act independently', hi: 'स्वायत्त / स्वतंत्र रूप से कार्य करने वाला', es: 'autónomo / independiente', fr: 'autonome / indépendant', de: 'selbstständig / autonom', pt: 'autônomo / independente', zh: '自主的 / 独立的', ar: 'مستقل / ذاتي', ja: '自立した / 自主的な', ru: 'самостоятельный / автономный', ex: 'You are now an autonomous English communicator in everyday situations.', exHi: 'अब आप रोजमर्रा की स्थितियों में एक स्वतंत्र अंग्रेजी संचारक हैं।', exEs: 'Ahora eres un comunicador autónomo en inglés en el día a día.', ic: '🦅' },
    { w: 'integrate', p: '/ˈɪntɪɡreɪt/', m: 'combine one thing with another so that they become a whole', hi: 'एकीकृत करना / जोड़ना', es: 'integrar / incorporar', fr: 'intégrer / combiner', de: 'integrieren / einbinden', pt: 'integrar / incorporar', zh: '整合 / 融合', ar: 'دمج / تكامل', ja: '統合する / 取り入れる', ru: 'интегрировать / объединять', ex: 'This final assessment integrates reading, listening, writing, and speaking.', exHi: 'यह अंतिम मूल्यांकन पढ़ने, सुनने, लिखने और बोलने को एकीकृत करता है।', exEs: 'Esta evaluación final integra lectura, audición, escritura y expresión oral.', ic: '🧩' },
    { w: 'synthesis', p: '/ˈsɪnθəsɪs/', m: 'the combination of ideas to form a theory or system', hi: 'संश्लेषण / समग्र संयोजन', es: 'síntesis integradora', fr: 'synthèse', de: 'Synthese / Gesamtschau', pt: 'síntese', zh: '综合 / 综述', ar: 'توليف / تلخيص تركيبي', ja: '統合 / 総合', ru: 'синтез / обобщение', ex: 'Lesson 150 provides a complete synthesis of elementary English mastery.', exHi: 'पाठ 150 प्राथमिक अंग्रेजी महारत का एक संपूर्ण संश्लेषण प्रदान करता है।', exEs: 'La lección 150 ofrece una síntesis completa del nivel de inglés elemental.', ic: '🔬' },
    { w: 'navigate', p: '/ˈnævɪɡeɪt/', m: 'plan and direct the course of an action or handle a complex situation successfully', hi: 'सफलतापूर्वक पार पाना / दिशा तय करना', es: 'desenvolverse / navegar situaciones', fr: 'se repérer / naviguer avec aisance', de: 'meistern / bewältigen', pt: 'desenvolver-se / lidar com', zh: '自如应对 / 驾驭', ar: 'التعامل بنجاح مع المواقف', ja: 'うまく切り抜ける / 乗り切る', ru: 'уверенно ориентироваться', ex: 'Learners can now navigate foreign cities, healthcare systems, and offices confidently.', exHi: 'शिक्षार्थी अब विदेशी शहरों, स्वास्थ्य सेवा प्रणालियों और कार्यालयों को आत्मविश्वास से नेविगेट कर सकते हैं।', exEs: 'Los alumnos pueden desenvolverse con confianza en el extranjero.', ic: '🧭' },
    { w: 'fluency', p: '/ˈfluːənsi/', m: 'the ability to speak or write a foreign language easily and accurately', hi: 'प्रवाह / धाराप्रवाहता', es: 'fluidez verbal', fr: 'fluidité / aisance', de: 'Flüssigkeit / Geläufigkeit', pt: 'fluência', zh: '流畅度 / 熟练度', ar: 'طلاقة اللسان', ja: '流暢さ / 堪能さ', ru: 'беглость речи', ex: 'Daily active practice develops natural conversational fluency.', exHi: 'दैनिक सक्रिय अभ्यास स्वाभाविक संवादात्मक प्रवाह विकसित करता है।', exEs: 'La práctica activa diaria desarrolla una fluidez conversacional natural.', ic: '🌊' },
    { w: 'mastery', p: '/ˈmɑːstəri/', m: 'comprehensive knowledge or skill in a subject or accomplishment', hi: 'महारत / पूर्ण अधिकार', es: 'maestría / dominio completo', fr: 'maîtrise absolue', de: 'Meisterschaft / Beherrschung', pt: 'maestria / domínio pleno', zh: '精通 / 掌握', ar: 'إتقان تام', ja: '熟達 / マスター', ru: 'мастерство / превосходное знание', ex: 'Reaching A2 mastery provides a rock-solid foundation for intermediate B1 study.', exHi: 'A2 में महारत हासिल करना इंटरमीडिएट B1 अध्ययन के लिए एक मजबूत आधार प्रदान करता है।', exEs: 'Alcanzar el dominio A2 brinda una base sólida para el nivel B1.', ic: '🏆' },
    { w: 'certificate', p: '/səˈtɪfɪkət/', m: 'an official document attesting a fact, especially status of qualification', hi: 'प्रमाणपत्र / सनद', es: 'certificado de nivel', fr: 'certificat de réussite', de: 'Zertifikat / Urkunde', pt: 'certificado de conclusão', zh: '证书 / 结业证明', ar: 'شهادة إتمام', ja: '修了証 / 認定証', ru: 'сертификат / свидетельство', ex: 'Upon passing this lesson, you will unlock your official CEFR A2 Certificate of Completion.', exHi: 'इस पाठ को पास करने पर, आप अपने आधिकारिक CEFR A2 पूर्णता प्रमाणपत्र को अनलॉक करेंगे।', exEs: 'Al superar esta lección, desbloquearás tu certificado oficial CEFR A2.', ic: '📜' },
    { w: 'endeavor', p: '/ɪnˈdevə/', m: 'an attempt to achieve a goal; an earnest effort', hi: 'प्रयास / उद्यम', es: 'esfuerzo / empeño', fr: 'entreprise / démarche', de: 'Bestreben / Bemühung', pt: 'esforço / empreendimento', zh: '努力 / 奋斗', ar: 'مسعى / جهد دؤوب', ja: '努力 / 試み', ru: 'стремление / начинание', ex: 'We wish you great success in all your future English learning endeavors!', exHi: 'हम आपके भविष्य के सभी अंग्रेजी सीखने के प्रयासों में आपकी बड़ी सफलता की कामना करते हैं!', exEs: '¡Te deseamos el mayor de los éxitos en tus futuros proyectos en inglés!', ic: '🚀' },
    { w: 'criterion', p: '/kraɪˈtɪəriən/', m: 'a principle or standard by which something may be judged or decided', hi: 'मानदंड / कसौटी', es: 'criterio de evaluación', fr: 'critère d\'évaluation', de: 'Kriterium / Maßstab', pt: 'critério', zh: '标准 / 准则', ar: 'معيار', ja: '基準 / 評価項目', ru: 'критерий / стандарт', ex: 'Every exercise meets strict CEFR international assessment criteria.', exHi: 'प्रत्येक अभ्यास सख्त CEFR अंतर्राष्ट्रीय मूल्यांकन मानदंडों को पूरा करता है।', exEs: 'Cada ejercicio cumple estrictos criterios internacionales del MCER.', ic: '📏' },
    { w: 'benchmark', p: '/ˈbentʃmɑːk/', m: 'a standard or point of reference against which things may be compared', hi: 'मानक / बेंचमार्क', es: 'punto de referencia / estándar', fr: 'point de référence / référence', de: 'Maßstab / Richtwert', pt: 'padrão de referência / benchmark', zh: '基准 / 标杆', ar: 'معيار مرجعي', ja: '指標 / 基準', ru: 'ориентир / эталон', ex: 'Completing 150 lessons is the golden benchmark of elementary language competence.', exHi: '150 पाठ पूरे करना प्राथमिक भाषा क्षमता का स्वर्णिम मानक है।', exEs: 'Completar 150 lecciones es el estándar de oro del nivel elemental.', ic: '🎖️' },
    { w: 'practicality', p: '/ˌpræktɪˈkæləti/', m: 'the quality of being suitable for everyday actual use', hi: 'व्यावहारिकता', es: 'practicidad / utilidad real', fr: 'praticité / utilité concrète', de: 'Praxistauglichkeit', pt: 'praticidade', zh: '实用性', ar: 'الجانب العملي', ja: '実用性', ru: 'практичность', ex: 'Unit 10 focuses directly on the practicality of living and working in English.', exHi: 'यूनिट 10 सीधे अंग्रेजी में रहने और काम करने की व्यावहारिकता पर केंद्रित है।', exEs: 'La Unidad 10 se centra en la utilidad práctica de vivir y trabajar en inglés.', ic: '🔧' },
    { w: 'empowerment', p: '/ɪmˈpaʊəmənt/', m: 'the process of becoming stronger and more confident in language usage', hi: 'सशक्तिकरण / आत्मविश्वास', es: 'empoderamiento lingüístico', fr: 'autonomisation', de: 'Befähigung / Stärkung', pt: 'empoderamento', zh: '赋能 / 自信心提升', ar: 'تمكين لغوي', ja: 'エンパワーメント / 自信獲得', ru: 'расширение возможностей / уверенность', ex: 'Language proficiency brings immense personal and professional empowerment.', exHi: 'भाषा प्रवीणता अत्यधिक व्यक्तिगत और व्यावसायिक सशक्तिकरण लाती है।', exEs: 'El dominio del idioma aporta un inmenso empoderamiento personal.', ic: '👑' },
    { w: 'perseverance', p: '/ˌpɜːsɪˈvɪərəns/', m: 'persistence in doing something despite difficulty or delay in achieving success', hi: 'दृढ़ता / लगन', es: 'perseverancia / constancia', fr: 'persévérance / ténacité', de: 'Beharrlichkeit / Ausdauer', pt: 'perseverança / dedicação', zh: '坚持不懈 / 毅力', ar: 'المثابرة والصمود', ja: '忍耐 / 根気', ru: 'упорство / настойчивость', ex: 'Your perseverance through 150 intensive lessons has yielded fantastic results.', exHi: '150 गहन पाठों के माध्यम से आपकी लगन ने शानदार परिणाम दिए हैं।', exEs: 'Tu constancia a lo largo de 150 lecciones ha dado resultados fantásticos.', ic: '💎' },
    { w: 'celebrate', p: '/ˈselɪbreɪt/', m: 'acknowledge a significant happy day or event with a social gathering or enjoyable activity', hi: 'जश्न मनाना / उत्सव मनाना', es: 'celebrar un logro', fr: 'célébrer / fêter', de: 'feiern / zelebrieren', pt: 'comemorar / celebrar', zh: '庆祝 / 庆贺', ar: 'الاحتفال بالإنجاز', ja: '祝う / 達成を称える', ru: 'праздновать / отмечать', ex: 'Take a moment to celebrate your successful completion of the full A2 curriculum!', exHi: 'पूरे A2 पाठ्यक्रम के अपने सफल समापन का जश्न मनाने के लिए कुछ समय निकालें!', exEs: '¡Tómate un momento para celebrar la superación de todo el curso A2!', ic: '🎉' }
  ],
  chunks: [
    { phrase: 'achieve full CEFR A2 mastery', meaning: 'successfully attain complete elementary communicative English competence', hi: 'पूर्ण CEFR A2 में महारत हासिल करना', es: 'alcanzar el dominio completo del nivel A2', fr: 'atteindre la maîtrise complète du niveau A2', de: 'die vollständige A2-Kompetenz erreichen', pt: 'alcançar o domínio pleno do nível A2', zh: '达成欧洲共同语言参考标准 A2 级完全精通', ar: 'تحقيق الإتقان الكامل للمستوى A2', ja: 'CEFR A2レベルを完全にマスターする', ru: 'достичь полного владения уровнем A2', note: 'Primary pedagogical outcome phrase.', ic: '🏆' },
    { phrase: 'handle everyday situations independently', meaning: 'navigate social, civic, travel, and administrative tasks without assistance', hi: 'रोजमर्रा की स्थितियों को स्वतंत्र रूप से संभालना', es: 'desenvolverse en situaciones cotidianas con autonomía', fr: 'gérer les situations du quotidien en toute autonomie', de: 'Alltagssituationen selbstständig meistern', pt: 'lidar com situações cotidianas de forma autônoma', zh: '独立自主处理日常生活事务', ar: 'التعامل مع المواقف اليومية باستقلالية', ja: '日常の様々な場面を自力で対処する', ru: 'самостоятельно решать повседневные задачи', note: 'Core CEFR A2 descriptor.', ic: '🌍' },
    { phrase: 'apply language skills in the real world', meaning: 'use learned grammar and vocabulary in actual practical environments', hi: 'वास्तविक दुनिया में भाषा कौशल का प्रयोग करना', es: 'aplicar el idioma en el mundo real', fr: 'mettre en pratique ses compétences dans la vie réelle', de: 'Sprachkenntnisse in der Praxis anwenden', pt: 'aplicar as habilidades linguísticas no mundo real', zh: '在真实生活环境中学以致用', ar: 'تطبيق المهارات اللغوية في العالم الحقيقي', ja: '学んだ英語力を実社会で活用する', ru: 'применять языковые навыки в реальной жизни', note: 'Key practical outcome.', ic: '💼' },
    { phrase: 'communicate with confidence and clarity', meaning: 'express ideas clearly without hesitation or fear of making errors', hi: 'आत्मविश्वास और स्पष्टता के साथ संवाद करना', es: 'comunicarse con seguridad y claridad', fr: 'communiquer avec assurance et clarté', de: 'selbstbewusst und klar kommunizieren', pt: 'comunicar-se com confiança e clareza', zh: '自信清晰地用英语表达', ar: 'التواصل بثقة ووضوح', ja: '自信を持って明瞭にコミュニケーションする', ru: 'общаться уверенно и чётко', note: 'Core fluency objective.', ic: '🗣️' },
    { phrase: 'synthesize grammar and vocabulary', meaning: 'combine multiple grammatical structures and lexical sets cohesively', hi: 'व्याकरण और शब्दावली का समन्वय करना', es: 'sintetizar gramática y vocabulario', fr: 'synthétiser la grammaire et le vocabulaire', de: 'Grammatik und Wortschatz verknüpfen', pt: 'integrar gramática e vocabulário', zh: '融会贯通语法与词汇', ar: 'الربط الشامل بين القواعد والمفردات', ja: '文法と語彙を統合して使いこなす', ru: 'обобщать грамматику и лексику', note: 'Advanced consolidation skill.', ic: '🧩' },
    { phrase: 'reach a milestone', meaning: 'arrive at an important stage of personal or academic progress', hi: 'एक महत्वपूर्ण पड़ाव पर पहुँचना', es: 'alcanzar un hito clave', fr: 'franchir une étape importante', de: 'einen Meilenstein erreichen', pt: 'atingir um marco importante', zh: '达到重要里程碑', ar: 'الوصول إلى محطة فارقة', ja: '重要な節目に到達する', ru: 'достичь важного рубежа', note: 'Celebratory achievement idiom.', ic: '🚩' },
    { phrase: 'ready for intermediate B1 English', meaning: 'fully prepared to advance to higher-level independent language study', hi: 'इंटरमीडिएट B1 स्तर के लिए तैयार', es: 'listo para el nivel intermedio B1', fr: 'prêt pour le niveau intermédiaire B1', de: 'bereit für das B1-Mittelstufenniveau', pt: 'preparado para o nível intermediário B1', zh: '已做好迈向 B1 中级英语的准备', ar: 'مستعد للانتقال إلى المستوى المتوسط B1', ja: 'B1中級レベルへのステップアップ準備完了', ru: 'готов к переходу на средний уровень B1', note: 'Progression gateway phrase.', ic: '🚀' },
    { phrase: 'congratulations on your graduation', meaning: 'warm congratulatory blessing for completing a major course of study', hi: 'आपके पाठ्यक्रम पूर्णता पर बधाई', es: '¡enhorabuena por tu graduación!', fr: 'toutes nos félicitations pour votre réussite !', de: 'herzlichen Glückwunsch zum Abschluss!', pt: 'parabéns pela sua graduação / conclusão!', zh: '祝贺您圆满结业！', ar: 'تهانينا الحارة على التخرج!', ja: 'ご卒業・修了おめでとうございます！', ru: 'поздравляем с успешным окончанием курса!', note: 'Commendation phrase.', ic: '🎉' }
  ],
  grammar: {
    title: 'A2 Grand Synthesis: Combining Modals, Conditionals, Passives, and Multi-Tense Fluency',
    concept: 'Reviewing and consolidating all core A2 structures: Present Perfect vs Past Simple, Conditionals (Zero & First), Passives (Present & Modal), and Suggestion / Advice Modals across realistic integrated situations.',
    patterns: [
      {
        title: 'Multi-Tense Narrative Integration: Past Simple, Present Perfect, and Future Intentions',
        structure: 'Past (started / arrived) + Present Perfect (have lived / have worked) + Future (will apply / am going to travel)',
        rule: 'Cohesively transition between timeframes when presenting your background and future plans.',
        examples: [
          { en: 'I moved to this city two years ago, I have worked in hospitality since then, and next year I am going to study management.', hi: 'मैं दो साल पहले इस शहर में आया था, तब से मैंने आतिथ्य सत्कार में काम किया है, और अगले साल मैं प्रबंधन का अध्ययन करने जा रहा हूँ।', es: 'Me mudé a esta ciudad hace dos años, he trabajado en hostelería desde entonces y el año que viene estudiaré gestión.' }
        ]
      },
      {
        title: 'Mastery of Conditionals & Cause-Effect Relationships',
        structure: 'If + Present Simple, + will / can + Base Verb | When + Present Simple, + Present Simple',
        rule: 'Seamlessly form conditional hypotheses and general truths regarding practical decisions.',
        examples: [
          { en: 'If you register at the municipal office, you will receive your local tax reference number.', hi: 'यदि आप नगरपालिका कार्यालय में पंजीकरण कराएंगे, तो आपको अपना स्थानीय कर संदर्भ नंबर प्राप्त होगा।', es: 'Si te registras en el ayuntamiento, recibirás tu número de referencia fiscal.' }
        ]
      },
      {
        title: 'Polite Formal Registers: Passive Voice, Inquiries & Suggestion Formulas',
        structure: 'Subject + must be + [Participle] | Why don\'t we + [Verb]? | Could you please + [Verb]?',
        rule: 'Select appropriate formality level when writing emails, calling public offices, or interviewing.',
        examples: [
          { en: 'All insurance claims must be submitted with original receipts.', hi: 'सभी बीमा दावे मूल रसीदों के साथ प्रस्तुत किए जाने चाहिए।', es: 'Todas las reclamaciones de seguro deben presentarse con facturas originales.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'I have finish the 150 lessons yesterday.',
      cor: 'I finished the 150 lessons yesterday.',
      exp: 'With the specific past time marker "yesterday", use Past Simple "finished".',
      hi: '"Yesterday" के साथ Past Simple "finished" का प्रयोग होता है।',
      es: 'Con "yesterday" se usa el Pasado Simple: "finished".'
    },
    {
      inc: 'If you will practice every day, you will speak fluently.',
      cor: 'If you practice every day, you will speak fluently.',
      exp: 'Do not use "will" in the conditional "if" clause. Use Present Simple "practice".',
      hi: '"If" वाले खंड में "will" का प्रयोग नहीं होता: "If you practice...".',
      es: 'En la cláusula condicional con "if" no se usa "will": "If you practice...".'
    },
    {
      inc: 'Why don\'t we to celebrate our graduation tonight?',
      cor: 'Why don\'t we celebrate our graduation tonight?',
      exp: '"Why don\'t we" takes a bare infinitive without "to".',
      hi: '"Why don\'t we" के बाद सीधे base verb आता है: "celebrate".',
      es: '"Why don\'t we" lleva infinitivo sin "to": "celebrate".'
    },
    {
      inc: 'The parcel must send by registered post.',
      cor: 'The parcel must be sent by registered post.',
      exp: 'Use modal passive "must be sent" because the parcel receives the action.',
      hi: 'Modal passive "must be sent" का प्रयोग करें।',
      es: 'Usa la pasiva modal: "must be sent".'
    },
    {
      inc: 'I am looking forward to start B1 level.',
      cor: 'I am looking forward to starting B1 level.',
      exp: '"Look forward to" must be followed by a gerund (-ing): "starting".',
      hi: '"Look forward to" के बाद gerund "starting" आता है।',
      es: '"Look forward to" requiere gerundio: "starting".'
    }
  ],
  dialogues: [
    {
      title: 'Graduation Ceremony & Celebrating A2 Mastery',
      context: 'Noah and Maya celebrate completing all 150 lessons of the Academy curriculum with their instructor, Mr. Davis.',
      charA: { name: 'Noah', av: '👨‍🎓', role: 'Graduate' },
      charB: { name: 'Maya', av: '👩‍🎓', role: 'Graduate' },
      turns: [
        { spk: 'Noah', text: 'Maya, we did it! We have completed all one hundred and fifty lessons across Units 1 through 10!', hi: 'माया, हमने कर दिखाया! हमने यूनिट 1 से 10 तक के सभी एक सौ पचास पाठ पूरे कर लिए हैं!', es: '¡Maya, lo logramos! ¡Hemos completado las 150 lecciones de las Unidades 1 a la 10!' },
        { spk: 'Maya', text: 'It feels amazing! When we started in Unit 1, we only knew basic greetings. Now we can handle banking, job interviews, medical visits, and emergencies independently!', hi: 'यह अद्भुत लगता है! जब हमने यूनिट 1 में शुरुआत की थी, तो हम केवल बुनियादी अभिवादन जानते थे। अब हम स्वतंत्र रूप से बैंकिंग, नौकरी के साक्षात्कार, चिकित्सा यात्राओं और आपात स्थितियों को संभाल सकते हैं!', es: '¡Es increíble! Empezamos con saludos básicos y ahora nos desenvolvemos en bancos, entrevistas y médicos.' },
        { spk: 'Noah', text: 'Why don\'t we organize a celebration dinner with our classmates tonight?', hi: 'हम आज रात अपने सहपाठियों के साथ एक उत्सव रात्रिभोज का आयोजन क्यों नहीं करते?', es: '¿Por qué no organizamos una cena de celebración con los compañeros esta noche?' },
        { spk: 'Maya', text: 'Let\'s do that! And tomorrow, we will be ready to take our next step toward intermediate B1 English!', hi: 'आइए ऐसा ही करें! और कल, हम इंटरमीडिएट B1 अंग्रेजी की दिशा में अपना अगला कदम उठाने के लिए तैयार होंगे!', es: '¡Hagámoslo! ¡Y mañana estaremos listos para dar el salto al nivel intermedio B1!' }
      ]
    },
    {
      title: 'Academy Director\'s Closing Congratulatory Address',
      context: 'Director Evans presents the CEFR A2 certificates of completion to the graduating class.',
      charA: { name: 'Director Evans', av: '👨‍🏫', role: 'Academy Director' },
      charB: { name: 'Class', av: '🎓', role: 'Graduating Students' },
      turns: [
        { spk: 'Director Evans', text: 'Congratulations, graduates! Your dedication and perseverance have earned you official CEFR A2 English mastery.', hi: 'बधाई हो, स्नातको! आपके समर्पण और लगन ने आपको आधिकारिक CEFR A2 अंग्रेजी में महारत दिलाई है।', es: '¡Enhorabuena, graduados! Su dedicación y constancia les han otorgado el dominio oficial del inglés A2.' },
        { spk: 'Class', text: 'Thank you, Director Evans! We are proud of our progress and excited to use English in the real world!', hi: 'धन्यवाद, निदेशक इवांस! हमें अपनी प्रगति पर गर्व है और वास्तविक दुनिया में अंग्रेजी का उपयोग करने के लिए उत्साहित हैं!', es: '¡Gracias, Director! ¡Estamos orgullosos de nuestro progreso y listos para usar el inglés!' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_u10_l150_p01',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly combines Present Perfect and Past Simple for a career narrative?',
      options: [
        { id: '1', text: 'I moved to London in 2022, and I have worked as a customer service coordinator since then.', isCorrect: true },
        { id: '2', text: 'I have moved to London in 2022, and I work since then.', isCorrect: false },
        { id: '3', text: 'I moved to London in 2022, and I am working since then.', isCorrect: false },
        { id: '4', text: 'I move to London in 2022, and I have work since then.', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Past Simple "moved" for specific year (2022) + Present Perfect "have worked" with "since then".'
    },
    {
      id: 'ex_u10_l150_p02',
      type: 'fill_blank',
      prompt: 'If you _____ (recycle) cardboard and plastic, you will help protect the environment.',
      correctAnswer: 'recycle',
      explanation: 'First conditional if-clause takes Present Simple "recycle".'
    },
    {
      id: 'ex_u10_l150_p03',
      type: 'word_ordering',
      prompt: 'Assemble the tokens to make a congratulatory statement:',
      tokens: ['Congratulations', 'on', 'achieving', 'full', 'CEFR', 'A2', 'English', 'mastery!'],
      correctAnswer: 'Congratulations on achieving full CEFR A2 English mastery!',
      explanation: 'Capstone milestone formula.'
    },
    {
      id: 'ex_u10_l150_p04',
      type: 'error_correction',
      prompt: 'Fix the error in this sentence:',
      sentence: 'The damaged parcels must to be delivered to the customer service desk.',
      correctAnswer: 'The damaged parcels must be delivered to the customer service desk.',
      explanation: 'Omit "to" after modal "must" in the passive voice.'
    },
    {
      id: 'ex_u10_l150_p05',
      type: 'translation',
      prompt: 'Translate into English: "हमने 150 पाठ पूरे कर लिए हैं और हम वास्तविक दुनिया में अंग्रेजी बोलने के लिए तैयार हैं।"',
      correctAnswer: 'We have completed 150 lessons and we are ready to speak English in the real world.',
      acceptableAnswers: ['We have finished 150 lessons and are ready to speak English in the real world.'],
      explanation: 'Present Perfect completion + predicate adjective.'
    },
    {
      id: 'ex_u10_l150_p06',
      type: 'listening',
      prompt: 'Listen to the director and identify which milestone is reached:',
      audioText: 'Congratulations to all learners on successfully completing Lesson one hundred and fifty of the English academy.',
      options: [
        { id: '1', text: 'Completion of Lesson 150 (A2 Graduation)', isCorrect: true },
        { id: '2', text: 'Completion of Unit 1 (Beginner)', isCorrect: false },
        { id: '3', text: 'Registration at the town hall', isCorrect: false },
        { id: '4', text: 'Submitting a flight claim', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The audio explicitly celebrates Lesson 150 completion.'
    },
    {
      id: 'ex_u10_l150_p07',
      type: 'match_pairs',
      prompt: 'Match A2 core competencies with their practical applications:',
      options: [
        { id: '1', text: 'Present Perfect → describing life experiences and duration' },
        { id: '2', text: 'First Conditional → discussing environmental cause and future results' },
        { id: '3', text: 'Modal Passives → explaining official rules and administrative procedures' },
        { id: '4', text: 'Suggestions (Why don\'t we) → organizing collaborative community projects' }
      ],
      correctAnswer: 'matched',
      explanation: 'Consolidation of core A2 grammatical frameworks.'
    },
    {
      id: 'ex_u10_l150_p08',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nTeacher: "What is your next goal after graduating from A2?"\nStudent: "I am _____ and expanding my professional vocabulary!"',
      options: [
        { id: '1', text: 'looking forward to starting B1 English', isCorrect: true },
        { id: '2', text: 'reporting a stolen debit card', isCorrect: false },
        { id: '3', text: 'requesting a roadside tire replacement', isCorrect: false },
        { id: '4', text: 'turning down the radiator', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Advancing to B1 English is the logical next step.'
    },
    {
      id: 'ex_u10_l150_p09',
      type: 'speaking',
      prompt: 'Deliver this capstone graduation speech aloud:',
      targetText: 'I have completed the full CEFR A2 curriculum, and I can now communicate with clarity and confidence in real-world situations.',
      explanation: 'Speak with proud, resonant, and fluent articulation.'
    },
    {
      id: 'ex_u10_l150_p10',
      type: 'personal_production',
      prompt: 'Write a self-reflection sentence on your English progress using "I have learned to":',
      sentenceTemplate: 'Through these 150 lessons, I have learned to [achievement].',
      correctAnswer: 'Through these 150 lessons, I have learned to communicate confidently in English.',
      explanation: 'Tests mastery self-expression.'
    }
  ],
  review: [
    {
      id: 'ex_u10_l150_r01',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses a future condition and result?',
      options: [
        { id: '1', text: 'If you practice consistently, your fluency will continue to grow.', isCorrect: true },
        { id: '2', text: 'If you will practice consistently, your fluency will grow.', isCorrect: false },
        { id: '3', text: 'If you practice, your fluency grew.', isCorrect: false },
        { id: '4', text: 'If you practicing, your fluency will grow.', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'First conditional: If + Present Simple, will + base verb.'
    },
    {
      id: 'ex_u10_l150_r02',
      type: 'fill_blank',
      prompt: 'Why don\'t we _____ (celebrate) our graduation milestone with a dinner tonight?',
      correctAnswer: 'celebrate',
      explanation: '"Why don\'t we" takes base verb "celebrate".'
    },
    {
      id: 'ex_u10_l150_r03',
      type: 'word_ordering',
      prompt: 'Assemble the sentence in correct order:',
      tokens: ['I', 'can', 'handle', 'everyday', 'English', 'situations', 'with', 'confidence.'],
      correctAnswer: 'I can handle everyday English situations with confidence.',
      explanation: 'Empowered communicative statement.'
    },
    {
      id: 'ex_u10_l150_r04',
      type: 'error_correction',
      prompt: 'Find and fix the error in the sentence:',
      sentence: 'I am looking forward to study intermediate B1 lessons.',
      correctAnswer: 'I am looking forward to studying intermediate B1 lessons.',
      explanation: 'Use gerund "studying" after "looking forward to".'
    },
    {
      id: 'ex_u10_l150_r05',
      type: 'translation',
      prompt: 'Translate into English: "हमने A2 स्तर में पूर्ण महारत हासिल कर ली है।"',
      correctAnswer: 'We have achieved full mastery in the A2 level.',
      acceptableAnswers: ['We have achieved complete A2 level mastery.'],
      explanation: '"Achieved full mastery" captures the milestone.'
    },
    {
      id: 'ex_u10_l150_r06',
      type: 'listening',
      prompt: 'Listen and select how many total lessons are completed:',
      audioText: 'You have officially completed all one hundred and fifty lessons of the Curiosity English Academy.',
      options: [
        { id: '1', text: '150 lessons', isCorrect: true },
        { id: '2', text: '100 lessons', isCorrect: false },
        { id: '3', text: '50 lessons', isCorrect: false },
        { id: '4', text: '15 lessons', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The audio explicitly confirms 150 lessons.'
    },
    {
      id: 'ex_u10_l150_r07',
      type: 'listen_and_type',
      prompt: 'Listen and type what you hear:',
      audioText: 'Congratulations on achieving complete CEFR A2 fluency and communicative mastery.',
      correctAnswer: 'Congratulations on achieving complete CEFR A2 fluency and communicative mastery.',
      explanation: 'Focus on spelling of "communicative" and "mastery".'
    },
    {
      id: 'ex_u10_l150_r08',
      type: 'multiple_choice',
      prompt: 'What CEFR level comes directly after completing A2 mastery?',
      options: [
        { id: '1', text: 'B1 (Intermediate)', isCorrect: true },
        { id: '2', text: 'A1 (Breakthrough)', isCorrect: false },
        { id: '3', text: 'C2 (Mastery)', isCorrect: false },
        { id: '4', text: 'A0 (Pre-A1)', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'B1 is the immediate next level after A2.'
    }
  ],
  assessment: [
    {
      id: 'ex_u10_l150_a01',
      type: 'multiple_choice',
      prompt: 'Which comprehensive statement demonstrates complete A2 linguistic synthesis?',
      options: [
        { id: '1', text: 'I have studied English for six months, and if I continue practicing, I will speak with total fluency.', isCorrect: true },
        { id: '2', text: 'I am study English for six months and if I will continue I speak fluent.', isCorrect: false },
        { id: '3', text: 'I studied English since six months and if I practice I will spoke fluent.', isCorrect: false },
        { id: '4', text: 'I have study English since six months.', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Option 1 flawlessly combines Present Perfect duration ("have studied... for six months") and First Conditional ("if I continue... I will speak").'
    },
    {
      id: 'ex_u10_l150_a02',
      type: 'fill_blank',
      prompt: 'All official course completion certificates will be _____ (issue) to graduating learners.',
      correctAnswer: 'issued',
      explanation: 'Future modal passive: will be + issued.'
    },
    {
      id: 'ex_u10_l150_a03',
      type: 'word_ordering',
      prompt: 'Assemble the final milestone declaration:',
      tokens: ['You', 'have', 'successfully', 'completed', 'the', 'entire', 'CEFR', 'A2', 'curriculum.'],
      correctAnswer: 'You have successfully completed the entire CEFR A2 curriculum.',
      explanation: 'Triumphant milestone confirmation.'
    },
    {
      id: 'ex_u10_l150_a04',
      type: 'error_correction',
      prompt: 'Correct the error in this final sentence:',
      sentence: 'We look forward to welcome you to the B1 intermediate academy.',
      correctAnswer: 'We look forward to welcoming you to the B1 intermediate academy.',
      explanation: 'Change "welcome" to gerund "welcoming".'
    },
    {
      id: 'ex_u10_l150_a05',
      type: 'translation',
      prompt: 'Translate into English: "बधाई हो! आपने 150 पाठ सफलतापूर्वक पूरे कर लिए हैं और A2 प्रमाणपत्र अर्जित कर लिया है।"',
      correctAnswer: 'Congratulations! You have successfully completed 150 lessons and earned your A2 certificate.',
      acceptableAnswers: ['Congratulations! You have successfully finished 150 lessons and earned your A2 certificate.'],
      explanation: 'Capstone completion announcement.'
    },
    {
      id: 'ex_u10_l150_a06',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nLearner: "I have finished all 150 lessons in the academy!"\nInstructor: "_____ on this tremendous milestone! You are now fully prepared for real-world English!"',
      options: [
        { id: '1', text: 'Congratulations on your graduation', isCorrect: true },
        { id: '2', text: 'Apply direct pressure to the casualty', isCorrect: false },
        { id: '3', text: 'Dispute your estimated smart meter bill', isCorrect: false },
        { id: '4', text: 'Request a collision damage waiver', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Celebratory graduation congratulation.'
    },
    {
      id: 'ex_u10_l150_a07',
      type: 'speaking',
      prompt: 'Deliver this final A2 capstone speech with pride and fluency:',
      targetText: 'I have accomplished my goal: one hundred and fifty lessons completed, CEFR A2 mastery achieved, and a lifetime of confident English communication ahead!',
      explanation: 'Speak with joyful confidence, dynamic rhythm, and crystal-clear pronunciation.'
    }
  ]
};
