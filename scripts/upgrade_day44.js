import fs from 'fs';
import path from 'path';

// Day 44: Higher Education, Academic Disciplines & Campus Life
const day44 = {
  dayNumber: 44,
  id: "day_44",
  titleEn: "Higher Education, Academic Disciplines & Campus Life",
  titleHi: "उच्च शिक्षा, अकादमिक विषय एवं परिसर जीवन",
  cefr: "A2.2",
  estMinutes: 60,
  prerequisites: "Day 43 Mastery (Consumer Advocacy & Transactional Syntax)",
  objectivesEn: [
    "Discuss university degrees, academic disciplines, majors, minors, prerequisites, syllabi, and credit hours with scholarly precision.",
    "Master campus life discourse: dormitories, admissions, faculty office hours, campus bursaries, tuition fees, and scholarship applications.",
    "Navigate academic assignments: essays, dissertations, theses, peer reviews, literature citations, and submission deadlines.",
    "Express academic achievement, GPA scales, grading rubrics, lecture protocols, and seminar discussions.",
    "Eliminate persistent Indian English academic traps such as '*passed out of college*', '*take a class*' vs '*give a class*', and '*mugging up*'."
  ],
  objectivesHi: [
    "विश्वविद्यालय की डिग्रियों, अकादमिक विषयों, मुख्य विषयों (Majors), ऐच्छिक विषयों (Minors), क्रेडिट और पाठ्यक्रम (Syllabus) पर गहराई से चर्चा करना।",
    "परिसर जीवन (Campus Life), हॉस्टल/डॉर्मिटरी, प्रवेश प्रक्रिया, प्रोफेसरों के परामर्श समय और छात्रवृत्ति (Scholarship) की भाषा में निपुण होना।",
    "अकादमिक असाइनमेंट, शोध-प्रबंध (Thesis/Dissertation), सहकर्मी समीक्षा (Peer review) और सबमिशन डेडलाइन पर संवाद करना।",
    "जीपीए (GPA), ग्रेडिंग प्रणाली, व्याख्यान (Lectures) और सेमिनार की चर्चाओं में आत्मविश्वास से भाग लेना।",
    "भारतीय अंग्रेज़ी की अकादमिक भूलों ('passed out of college', 'mugging up', 'take exam vs give exam') को पूरी तरह ठीक करना।"
  ],
  teach: {
    hindiExplanation: `डे 44 में हम उच्च शिक्षा, विश्वविद्यालयीन जीवन और अकादमिक संप्रेषण (Higher Education & Campus Life) पर पूर्ण दक्षता प्राप्त करेंगे।

1. **विश्वविद्यालयीय शब्दावली (University Structure)**:
   - **Undergraduate (UG)**: स्नातक स्तर का छात्र (Bachelor's Degree).
   - **Postgraduate (PG) / Graduate Student**: परास्नातक या स्नातकोत्तर छात्र (Master's / PhD).
   - **Major / Minor**: मुख्य विशेषज्ञता का विषय / द्वितीयक ऐच्छिक विषय (उदा. 'I am majoring in Economics with a minor in Statistics').
   - **Syllabus / Curriculum**: किसी विषय का विस्तृत पाठ्यक्रम / पूरे कोर्स की समग्र पाठ्यचर्या।
   - **Dormitory / Dorm / Hall of Residence**: विश्वविद्यालय का छात्र छात्रावास (Hostel).

2. **अकादमिक कार्य एवं मूल्यांकन (Assignments & Evaluation)**:
   - **Thesis / Dissertation**: डिग्री पूर्ण करने हेतु प्रस्तुत किया जाने वाला विस्तृत शोध-प्रबंध।
   - **Deadline**: कार्य जमा करने की अंतिम तिथि व समय।
   - **GPA (Grade Point Average)**: शैक्षणिक प्रदर्शन मापने का अंतर्राष्ट्रीय औसत पैमाना।
   - **Faculty Office Hours**: प्रोफेसर से व्यक्तिगत मार्गदर्शन या शंका समाधान हेतु निर्धारित समय।

3. **L1 हिंदी भाषियों की सबसे गंभीर गलतियां**:
   - कॉलेज पूरा करने के लिए कभी न कहें: '*I passed out from Delhi University in 2022.*' ❌ (अंग्रेज़ी में 'pass out' का अर्थ बेहोश होना होता है!)। सही मानक अंग्रेज़ी: "**I graduated from Delhi University in 2022.**" ✔️
   - परीक्षा देने के लिए: '*I am giving an exam tomorrow*' ❌ की जगह "**I am taking / sitting for an exam tomorrow.**" बोलें।
   - रट्टा मारने के लिए '*mugging up*' ❌ के स्थान पर मानक अंग्रेज़ी में "**cramming for the exam**" या "**memorizing by rote**" कहा जाता है।`,
    englishExplanation: `In Day 44, we master academic registers, university administrative discourse, campus lifestyle communication, and scholarly discussions.

Key Learning Dimensions:
1. **Curricular Topology**: Major/minor degree structures, credit prerequisites, elective electives, faculty office hours, and registrar administration.
2. **Scholarly Assignments**: Formulating hypotheses, conducting literature reviews, meeting submission deadlines, citing sources, and defending theses.
3. **Assessment Dynamics**: Navigating GPA metrics, grade curves, academic transcripts, and scholarship grant criteria.`,
    grammarRules: [
      {
        ruleNumber: 1,
        title: "The Verb 'Graduate' Collocations",
        description: "Students 'graduate from [Institution]' with a degree 'in [Subject]': 'She graduated from Oxford University with a degree in Biochemistry.'",
        register: "Academic Syntax"
      },
      {
        ruleNumber: 2,
        title: "The 'Take / Sit' vs 'Administer / Give' Exam Distinction",
        description: "Students 'take', 'sit for', or 'write' an examination. Professors 'administer', 'give', or 'proctor' the exam.",
        register: "Examination Collocations"
      },
      {
        ruleNumber: 3,
        title: "Participle Clauses for Academic Backgrounds",
        description: "Combine educational milestones smoothly: 'Having completed her undergraduate thesis, she enrolled in a doctoral fellowship.'",
        register: "Advanced Academic Syntax"
      },
      {
        ruleNumber: 4,
        title: "Prepositions with Academic Majors & Minors",
        description: "Use 'major in [Subject]' as a verb, or 'a major in [Subject]' as a noun: 'He is majoring in Data Science and minoring in Philosophy.'",
        register: "Degree Collocations"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Degree & Specialization",
        formula: "Subject + is majoring in + [Discipline] + with a minor in + [Secondary Discipline].",
        exampleEn: "She is majoring in Computer Science with a minor in Cognitive Psychology.",
        meaningHi: "वह संज्ञानात्मक मनोविज्ञान में माइनर के साथ कंप्यूटर विज्ञान में मेजर कर रही है।"
      },
      {
        subjectGroup: "Graduation Milestone",
        formula: "Subject + graduated from + [University] + with a + [Bachelor's / Master's] + in + [Subject].",
        exampleEn: "He graduated from Harvard University with a Master's in Public Policy.",
        meaningHi: "उन्होंने पब्लिक पॉलिसी में मास्टर्स के साथ हार्वर्ड यूनिवर्सिटी से स्नातक की उपाधि प्राप्त की।"
      },
      {
        subjectGroup: "Office Hours Consultation",
        formula: "Could I schedule a meeting during your office hours to discuss + [Assignment / Thesis]?",
        exampleEn: "Could I schedule a meeting during your office hours to discuss my research proposal?",
        meaningHi: "क्या मैं अपने शोध प्रस्ताव पर चर्चा करने के लिए आपके ऑफिस आवर्स के दौरान एक बैठक तय कर सकता हूँ?"
      },
      {
        subjectGroup: "Deadline Extension Request",
        formula: "Would it be possible to request a brief extension on the + [Assignment] + deadline?",
        exampleEn: "Would it be possible to request a brief extension on the term paper deadline?",
        meaningHi: "क्या टर्म पेपर जमा करने की अंतिम तिथि में थोड़े विस्तार का अनुरोध करना संभव होगा?"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "The 'Passed Out', 'Giving Exam', and 'Mugging Up' Academic Traps",
      hindiPattern: "1. '*I passed out from DU in 2021.*' (direct translation of 'पास आउट हुआ')\n2. '*I am giving my semester exam today.*' (translation of 'एग्जाम दे रहा हूँ')\n3. '*Students are mugging up the syllabus.*' (translation of 'रट्टा मार रहे हैं')\n4. '*Sir, please take my viva.*'",
      potentialInterference: "Literal translations of Hindi educational idioms that create confusing or comical misunderstandings in international academic settings.",
      explanation: "In English, 'to pass out' means to lose consciousness (faint). When finishing college, you 'graduate'. In English, teachers 'give' exams, students 'take/sit for' exams. Rote learning before an exam is 'cramming'. Oral examinations are 'oral exams / thesis defense', not 'viva'.",
      naturalSolution: "1. 'I graduated from DU in 2021.' | 2. 'I am taking my semester exam today.' | 3. 'Students are cramming for the exam.' | 4. 'Professor, I am ready for my oral examination.'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day44_vocab_001", word: "Curriculum", pos: "Noun", ipa: "/kəˈrɪk.jə.ləm/", meaningHi: "समग्र पाठ्यचर्या / अध्ययन कार्यक्रम", exampleEn: "The university redesigned its engineering curriculum to include artificial intelligence.", exampleHi: "विश्वविद्यालय ने आर्टिफिशियल इंटेलिजेंस को शामिल करने के लिए अपने इंजीनियरिंग पाठ्यक्रम को नया रूप दिया।" },
      { id: "day44_vocab_002", word: "Thesis", pos: "Noun", ipa: "/ˈθiː.sɪs/", meaningHi: "शोध-प्रबंध / डॉक्टरेट या मास्टर्स का शोध निबंध", exampleEn: "She successfully defended her doctoral thesis before the academic committee.", exampleHi: "उसने शैक्षणिक समिति के समक्ष अपने डॉक्टरेट शोध-प्रबंध का सफलतापूर्वक बचाव किया।" },
      { id: "day44_vocab_003", word: "Tuition", pos: "Noun", ipa: "/tʃuːˈɪʃ.ən/", meaningHi: "विश्वविद्यालय शिक्षण शुल्क (Tuition Fees)", exampleEn: "Tuition fees for international students have risen this academic semester.", exampleHi: "इस शैक्षणिक सत्र में अंतर्राष्ट्रीय छात्रों के लिए शिक्षण शुल्क बढ़ गया है।" },
      { id: "day44_vocab_004", word: "Semester", pos: "Noun", ipa: "/səˈmes.tər/", meaningHi: "सत्र / छह महीने का शैक्षणिक सत्र", exampleEn: "The fall semester begins in early September and concludes in December.", exampleHi: "शरद सत्र सितंबर की शुरुआत में शुरू होता है और दिसंबर में समाप्त होता है।" },
      { id: "day44_vocab_005", word: "Scholarship", pos: "Noun", ipa: "/ˈskɒl.ə.ʃɪp/", meaningHi: "छात्रवृत्ति / वित्तीय सहायता", exampleEn: "He was awarded a prestigious merit-based scholarship to study abroad.", exampleHi: "उन्हें विदेश में अध्ययन के लिए एक प्रतिष्ठित योग्यता-आधारित छात्रवृत्ति प्रदान की गई थी।" },
      { id: "day44_vocab_006", word: "Prerequisite", pos: "Noun", ipa: "/ˌpriːˈrek.wɪ.zɪt/", meaningHi: "अनिवार्य पूर्व-शर्त / प्रारंभिक आवश्यक विषय", exampleEn: "Calculus I is a mandatory prerequisite for enrolling in Advanced Physics.", exampleHi: "एडवांस्ड फिजिक्स में दाखिला लेने के लिए कैलकुलस I एक अनिवार्य पूर्व-शर्त है।" },
      { id: "day44_vocab_007", word: "Syllabus", pos: "Noun", ipa: "/ˈsɪl.ə.bəs/", meaningHi: "विषय का विस्तृत पाठ्यक्रम / रूपरेखा", exampleEn: "The professor uploaded the course syllabus and reading list to the student portal.", exampleHi: "प्रोफेसर ने कोर्स का सिलेबस और पठन सूची छात्र पोर्टल पर अपलोड कर दी।" },
      { id: "day44_vocab_008", word: "Dormitory", pos: "Noun", ipa: "/ˈdɔː.mɪ.tər.i/", meaningHi: "छात्र छात्रावास (हॉस्टल)", exampleEn: "First-year undergraduate students are encouraged to live in campus dormitories.", exampleHi: "प्रथम वर्ष के स्नातक छात्रों को परिसर के छात्रावासों में रहने के लिए प्रोत्साहित किया जाता है।" },
      { id: "day44_vocab_009", word: "Dissertation", pos: "Noun", ipa: "/ˌdɪs.əˈteɪ.ʃən/", meaningHi: "विस्तृत शोध ग्रंथ (मास्टर्स या पीएचडी का)", exampleEn: "His master's dissertation examined the socioeconomic impacts of microfinance.", exampleHi: "उनके मास्टर शोध-प्रबंध ने माइक्रोफाइनेंस के सामाजिक-आर्थिक प्रभावों की जांच की।" },
      { id: "day44_vocab_010", word: "Enrollment", pos: "Noun", ipa: "/ɪnˈrəʊl.mənt/", meaningHi: "नामांकन / दाखिला", exampleEn: "Online enrollment for elective courses opens next Monday morning.", exampleHi: "ऐच्छिक विषयों के लिए ऑनलाइन नामांकन अगले सोमवार सुबह खुलेगा।" },
      { id: "day44_vocab_011", word: "Major", pos: "Noun/Verb", ipa: "/ˈmeɪ.dʒər/", meaningHi: "मुख्य विशेषज्ञता विषय", exampleEn: "She decided to major in Neuroscience with a minor in Bioethics.", exampleHi: "उसने बायोएथिक्स में माइनर के साथ न्यूरोसाइंस में मेजर करने का फैसला किया।" },
      { id: "day44_vocab_012", word: "Minor", pos: "Noun/Verb", ipa: "/ˈmaɪ.nər/", meaningHi: "द्वितीयक ऐच्छिक विषय", exampleEn: "He completed a minor in French literature alongside his engineering degree.", exampleHi: "उन्होंने अपनी इंजीनियरिंग डिग्री के साथ-साथ फ्रेंच साहित्य में माइनर पूरा किया।" },
      { id: "day44_vocab_013", word: "Plagiarism", pos: "Noun", ipa: "/ˈpleɪ.dʒər.ɪ.zəm/", meaningHi: "साहित्यिक चोरी / बिना संदर्भ दिए दूसरों के काम की नकल", exampleEn: "The university enforces strict disciplinary penalties against academic plagiarism.", exampleHi: "विश्वविद्यालय अकादमिक साहित्यिक चोरी के खिलाफ सख्त अनुशासनात्मक दंड लागू करता है।" },
      { id: "day44_vocab_014", word: "Lecture", pos: "Noun/Verb", ipa: "/ˈlek.tʃər/", meaningHi: "अकादमिक व्याख्यान / भाषण", exampleEn: "The guest professor delivered an insightful lecture on quantum computing.", exampleHi: "अतिथि प्रोफेसर ने क्वांटम कंप्यूटिंग पर एक व्यावहारिक व्याख्यान दिया।" },
      { id: "day44_vocab_015", word: "Seminar", pos: "Noun", ipa: "/ˈsem.ɪ.nɑːr/", meaningHi: "विचारगोष्ठी / चर्चा-आधारित अकादमिक क्लास", exampleEn: "Graduate students actively participate in weekly research seminars.", exampleHi: "स्नातकोत्तर छात्र साप्ताहिक शोध संगोष्ठियों में सक्रिय रूप से भाग लेते हैं।" },
      { id: "day44_vocab_016", word: "Transcript", pos: "Noun", ipa: "/ˈtræn.skrɪpt/", meaningHi: "अकादमिक अंकतालिका / आधिकारिक रिकॉर्ड", exampleEn: "Please submit an official sealed transcript along with your application.", exampleHi: "कृपया अपने आवेदन के साथ एक आधिकारिक सीलबंद अंकतालिका जमा करें।" },
      { id: "day44_vocab_017", word: "Faculty", pos: "Noun", ipa: "/ˈfæk.əl.ti/", meaningHi: "प्राध्यापक वर्ग / संकाय", exampleEn: "The faculty members are highly respected researchers in their respective fields.", exampleHi: "संकाय सदस्य अपने-अपने क्षेत्रों में अत्यधिक सम्मानित शोधकर्ता हैं।" },
      { id: "day44_vocab_018", word: "Auditorium", pos: "Noun", ipa: "/ˌɔː.dɪˈtɔː.ri.əm/", meaningHi: "सभागार / बड़ा हॉल", exampleEn: "The annual commencement ceremony was held in the university auditorium.", exampleHi: "वार्षिक दीक्षांत समारोह विश्वविद्यालय के सभागार में आयोजित किया गया था।" },
      { id: "day44_vocab_019", word: "Cram", pos: "Verb", ipa: "/kræm/", meaningHi: "परीक्षा से पहले रट्टा मारना / तेजी से पढ़ना", exampleEn: "Instead of cramming the night before, review your lecture notes consistently.", exampleHi: "एक रात पहले रट्टा मारने के बजाय, अपने व्याख्यान नोट्स की लगातार समीक्षा करें।" },
      { id: "day44_vocab_020", word: "Alumni", pos: "Noun (plural)", ipa: "/əˈlʌm.naɪ/", meaningHi: "पूर्व छात्र", exampleEn: "The university alumni association organized a global networking summit.", exampleHi: "विश्वविद्यालय के पूर्व छात्र संघ ने एक वैश्विक नेटवर्किंग शिखर सम्मेलन का आयोजन किया।" }
    ],
    spokenPhrases: [
      { id: "day44_phrase_001", phrase: "I graduated from Delhi University with a degree in Economics.", register: "Academic Profile", meaningHi: "मैंने दिल्ली विश्वविद्यालय से अर्थशास्त्र में स्नातक किया।" },
      { id: "day44_phrase_002", phrase: "I am taking my final semester examinations next week.", register: "Student Life", meaningHi: "मैं अगले हफ्ते अपने अंतिम सेमेस्टर की परीक्षाएं दे रहा हूँ।" },
      { id: "day44_phrase_003", phrase: "Could I schedule an appointment during your office hours, Professor?", register: "Academic Politeness", meaningHi: "प्रोफेसर, क्या मैं आपके ऑफिस आवर्स के दौरान मिलने का समय ले सकता हूँ?" },
      { id: "day44_phrase_004", phrase: "She is majoring in Computer Science and minoring in Data Ethics.", register: "Degree Specialization", meaningHi: "वह कंप्यूटर विज्ञान में मेजर और डेटा एथिक्स में माइनर कर रही है।" },
      { id: "day44_phrase_005", phrase: "The assignment deadline has been extended to Friday midnight.", register: "Academic Announcement", meaningHi: "असाइनमेंट जमा करने की समय सीमा शुक्रवार मध्यरात्रि तक बढ़ा दी गई है।" },
      { id: "day44_phrase_006", phrase: "Is this course an elective or a mandatory core requirement?", register: "Curriculum Planning", meaningHi: "क्या यह विषय एक ऐच्छिक (इलेक्टिव) है या एक अनिवार्य कोर विषय है?" },
      { id: "day44_phrase_007", phrase: "He received a full-tuition fellowship for his doctoral studies.", register: "Financial Aid", meaningHi: "उन्हें अपने डॉक्टरेट अध्ययन के लिए पूर्ण शिक्षण शुल्क फेलोशिप प्राप्त हुई।" },
      { id: "day44_phrase_008", phrase: "Make sure all academic sources are cited using APA formatting.", register: "Scholarly Research", meaningHi: "सुनिश्चित करें कि सभी अकादमिक स्रोतों को एपीए प्रारूप का उपयोग करके उद्धृत किया गया है।" },
      { id: "day44_phrase_009", phrase: "The lecture hall is equipped with modern multimedia projectors.", register: "Campus Facilities", meaningHi: "व्याख्यान कक्ष आधुनिक मल्टीमीडिया प्रोजेक्टरों से सुसज्जित है।" },
      { id: "day44_phrase_010", phrase: "Students must maintain a minimum 3.5 GPA to retain their scholarship.", register: "Academic Standards", meaningHi: "छात्रों को अपनी छात्रवृत्ति बनाए रखने के लिए न्यूनतम 3.5 जीपीए बनाए रखना होगा।" },
      { id: "day44_phrase_011", phrase: "I spent the entire afternoon studying in the campus library stacks.", register: "Study Routine", meaningHi: "मैंने पूरी दोपहर परिसर की लाइब्रेरी में पढ़ाई करते हुए बिताई।" },
      { id: "day44_phrase_012", phrase: "Her research paper was accepted for publication in a peer-reviewed journal.", register: "Academic Achievement", meaningHi: "उनका शोध पत्र एक सहकर्मी-समीक्षित पत्रिका में प्रकाशन के लिए स्वीकार किया गया था।" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day44_ex_001", english: "She graduated from the Indian Institute of Technology with highest honors in Mechanical Engineering.", hindi: "उन्होंने मैकेनिकल इंजीनियरिंग में सर्वोच्च सम्मान के साथ भारतीय प्रौद्योगिकी संस्थान से स्नातक किया।" },
      { id: "day44_ex_002", english: "Undergraduate students must complete one hundred and twenty credit hours to qualify for graduation.", hindi: "स्नातक छात्रों को डिग्री प्राप्त करने के लिए एक सौ बीस क्रेडिट घंटे पूरे करने होंगे।" },
      { id: "day44_ex_003", english: "I am taking my comprehensive qualifying examinations at the end of this semester.", hindi: "मैं इस सत्र के अंत में अपनी व्यापक योग्यता परीक्षाएं दे रहा हूँ।" },
      { id: "day44_ex_004", english: "The professor strictly penalizes unexcused absences and late assignment submissions.", hindi: "प्रोफेसर बिना सूचना के अनुपस्थिति और देर से असाइनमेंट जमा करने पर सख्त जुर्माना लगाते हैं।" },
      { id: "day44_ex_005", english: "His doctoral dissertation explored renewable energy storage mechanisms in arid climates.", hindi: "उनके डॉक्टरेट शोध-प्रबंध ने शुष्क जलवायु में नवीकरणीय ऊर्जा भंडारण तंत्र का पता लगाया।" },
      { id: "day44_ex_006", english: "Have you submitted your scholarship application before the priority deadline?", hindi: "क्या आपने प्राथमिकता समय सीमा से पहले अपना छात्रवृत्ति आवेदन जमा कर दिया है?" },
      { id: "day44_ex_007", english: "All freshman students are required to attend the campus orientation session on Monday.", hindi: "सभी प्रथम वर्ष के छात्रों को सोमवार को कैंपस ओरिएंटेशन सत्र में भाग लेना अनिवार्य है।" },
      { id: "day44_ex_008", english: "The university library provides access to thousands of peer-reviewed digital journals.", hindi: "विश्वविद्यालय पुस्तकालय हजारों सहकर्मी-समीक्षित डिजिटल पत्रिकाओं तक पहुंच प्रदान करता है।" },
      { id: "day44_ex_009", english: "Cramming the night before the examination often leads to high anxiety and memory lapses.", hindi: "परीक्षा से एक रात पहले रट्टा मारने से अक्सर अत्यधिक चिंता और याददाश्त में कमी आती है।" },
      { id: "day44_ex_010", english: "She decided to declare a double major in International Relations and Mandarin Chinese.", hindi: "उसने अंतर्राष्ट्रीय संबंध और मंदारिन चीनी में दोहरा मेजर घोषित करने का निर्णय लिया।" },
      { id: "day44_ex_011", english: "The academic dean approved his request for an independent research study.", hindi: "अकादमिक डीन ने एक स्वतंत्र शोध अध्ययन के उनके अनुरोध को मंजूरी दे दी।" },
      { id: "day44_ex_012", english: "Tuition fees can be paid in three structured installments throughout the academic year.", hindi: "शिक्षण शुल्क का भुगतान पूरे शैक्षणिक वर्ष में तीन संरचित किश्तों में किया जा सकता है।" },
      { id: "day44_ex_013", english: "Please consult the course syllabus for the required weekly reading materials.", hindi: "आवश्यक साप्ताहिक पठन सामग्री के लिए कृपया पाठ्यक्रम रूपरेखा (सिलेबस) देखें।" },
      { id: "day44_ex_014", english: "Plagiarism detection software is used to verify the originality of all student term papers.", hindi: "सभी छात्र टर्म पेपर्स की मौलिकता को सत्यापित करने के लिए साहित्यिक चोरी का पता लगाने वाले सॉफ्टवेयर का उपयोग किया जाता है।" },
      { id: "day44_ex_015", english: "He works as a graduate teaching assistant in the Department of Organic Chemistry.", hindi: "वह कार्बनिक रसायन विज्ञान विभाग में एक ग्रेजुएट टीचिंग असिस्टेंट के रूप में काम करते हैं।" },
      { id: "day44_ex_016", english: "Dormitory rooms are equipped with high-speed internet, desks, and single beds.", hindi: "छात्रावास के कमरे हाई-स्पीड इंटरनेट, डेस्क और सिंगल बेड से सुसज्जित हैं।" },
      { id: "day44_ex_017", english: "Students who achieve a GPA above 3.8 are placed on the Dean's Honor List.", hindi: "3.8 से अधिक जीपीए प्राप्त करने वाले छात्रों को डीन की सम्मान सूची में शामिल किया जाता है।" },
      { id: "day44_ex_018", english: "Could you please clarify the grading rubric for the final group presentation?", hindi: "क्या आप कृपया अंतिम समूह प्रस्तुति के लिए अंकन मानदंड स्पष्ट कर सकते हैं?" },
      { id: "day44_ex_019", english: "She was awarded an international fellowship to conduct field research in environmental science.", hindi: "उन्हें पर्यावरण विज्ञान में फील्ड रिसर्च करने के लिए एक अंतरराष्ट्रीय फेलोशिप से सम्मानित किया गया था।" },
      { id: "day44_ex_020", english: "The campus registrar handles all official transcript requests and degree verifications.", hindi: "कैंपस रजिस्ट्रार सभी आधिकारिक अंकतालिका अनुरोधों और डिग्री सत्यापन को संभालता है।" },
      { id: "day44_ex_021", english: "He spent the entire weekend conducting laboratory experiments for his biology thesis.", hindi: "उन्होंने अपने जीव विज्ञान शोध-प्रबंध के लिए प्रयोगशाला में प्रयोग करते हुए पूरा सप्ताहांत बिताया।" },
      { id: "day44_ex_022", english: "Elective courses allow students to explore interdisciplinary subjects outside their major.", hindi: "ऐच्छिक पाठ्यक्रम छात्रों को अपने प्रमुख विषय के बाहर अंतःविषय विषयों का पता लगाने की अनुमति देते हैं।" },
      { id: "day44_ex_023", english: "The professor holds weekly office hours on Tuesday and Thursday afternoons.", hindi: "प्रोफेसर मंगलवार और गुरुवार दोपहर को साप्ताहिक परामर्श समय (ऑफिस आवर्स) रखते हैं।" },
      { id: "day44_ex_024", english: "Commencement ceremonies will be broadcast live for family members who cannot attend in person.", hindi: "दीक्षांत समारोह उन परिवार के सदस्यों के लिए सीधा प्रसारित किया जाएगा जो व्यक्तिगत रूप से उपस्थित नहीं हो सकते।" },
      { id: "day44_ex_025", english: "She decided to take a gap year before pursuing her postgraduate medical studies.", hindi: "उसने अपने स्नातकोत्तर चिकित्सा अध्ययन को आगे बढ़ाने से पहले एक साल का अंतराल (गैप ईयर) लेने का फैसला किया।" }
    ]
  },
  pronunciation: {
    focusSound: "Distinguishing /θ/ in 'Thesis' /ˈθiː.sɪs/, /kəˈrɪk.jə.ləm/ in 'Curriculum', and syllable stress in 'Dissertation' /ˌdɪs.əˈteɪ.ʃən/",
    phoneticNotes: "1. 'Thesis' starts with voiceless /θ/ and has a long /iː/: /ˈθiː.sɪs/ (plural: 'Theses' /ˈθiː.siːz/).\n2. 'Curriculum' stresses the second syllable: /kəˈrɪk.jə.ləm/.\n3. 'Plagiarism' has four syllables with stress on the first: /ˈpleɪ.dʒər.ɪ.zəm/.",
    minimalPairs: [
      { wordA: "Thesis", ipaA: "/ˈθiː.sɪs/", wordB: "Theses", ipaB: "/ˈθiː.siːz/" },
      { wordA: "Cram", ipaA: "/kræm/", wordB: "Clam", ipaB: "/klæm/" },
      { wordA: "Major", ipaA: "/ˈmeɪ.dʒər/", wordB: "Mayor", ipaB: "/meər/" },
      { wordA: "Course", ipaA: "/kɔːs/", wordB: "Cause", ipaB: "/kɔːz/" },
      { wordA: "Grade", ipaA: "/ɡreɪd/", wordB: "Great", ipaB: "/ɡreɪt/" }
    ],
    drills: [
      { sentence: "She defended her doctoral thesis with academic distinction.", focus: "Voiceless /θ/ in 'thesis' /ˈθiː.sɪs/" },
      { sentence: "The engineering curriculum includes advanced computing.", focus: "Stress in /kəˈrɪk.jə.ləm/" },
      { sentence: "Avoid plagiarism by citing every scholarly source.", focus: "Four syllables in 'plagiarism' /ˈpleɪ.dʒər.ɪ.zəm/" },
      { sentence: "He submitted his master's dissertation on Friday.", focus: "Stress in /ˌdɪs.əˈteɪ.ʃən/" },
      { sentence: "Undergraduates gathered in the campus auditorium.", focus: "Stress in /ˌɔː.dɪˈtɔː.ri.əm/" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day44_ex_001",
        type: "multiple_choice",
        prompt: "Which sentence is the standard English way to state that you completed your university degree in 2022?",
        options: [
          "I passed out from university in 2022.",
          "I graduated from university in 2022.",
          "I went out of college in 2022.",
          "I finished off college in 2022."
        ],
        correctAnswer: "I graduated from university in 2022.",
        explanationEn: "'I graduated from university' is standard. 'Passed out' means to faint in English.",
        explanationHi: "कॉलेज पूरा करने के लिए 'I graduated from...' सही है। 'Pass out' का अर्थ बेहोश होना होता है।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day44_ex_002",
        type: "error_correction",
        prompt: "Correct the sentence: 'I am giving my semester examination tomorrow morning.'",
        correctAnswer: "I am taking my semester examination tomorrow morning.",
        acceptableAnswers: [
          "I am sitting for my semester examination tomorrow morning.",
          "I am writing my semester examination tomorrow morning."
        ],
        explanationEn: "Students 'take' or 'sit for' exams. Teachers 'give' or 'administer' exams.",
        explanationHi: "छात्र परीक्षा 'take/sit for' करते हैं, शिक्षक 'give/administer' करते हैं।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day44_ex_003",
        type: "fill_blank",
        prompt: "A course that is required before a student can register for an advanced course is called a _______.",
        correctAnswer: "prerequisite",
        explanationEn: "A 'prerequisite' is a required prior qualification or course.",
        explanationHi: "अनिवार्य पूर्व-शर्त विषय को 'prerequisite' कहते हैं।",
        difficulty: "medium",
        skillTag: "ACADEMIC_VOCAB"
      },
      {
        id: "day44_ex_004",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'वह अर्थशास्त्र में मेजर और दर्शनशास्त्र में माइनर कर रहा है।'",
        correctAnswer: "He is majoring in Economics and minoring in Philosophy.",
        acceptableAnswers: [
          "He is majoring in Economics with a minor in Philosophy."
        ],
        explanationEn: "'He is majoring in Economics and minoring in Philosophy.' is standard.",
        explanationHi: "'Majoring in Economics and minoring in Philosophy' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day44_ex_005",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'She successfully defended her doctoral thesis before the academic faculty.'",
        correctAnswer: "उसने अकादमिक संकाय के समक्ष अपने डॉक्टरेट शोध-प्रबंध का सफलतापूर्वक बचाव किया।",
        acceptableAnswers: [
          "उसने प्रोफेसरों के सामने अपनी पीएचडी थीसिस को सफलतापूर्वक डिफेंड किया।"
        ],
        explanationEn: "'Defended her doctoral thesis' translates as शोध-प्रबंध का सफलतापूर्वक बचाव किया.",
        explanationHi: "'Defended thesis' का अर्थ शोध-प्रबंध का बचाव करना है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day44_ex_006",
        type: "sentence_ordering",
        prompt: "Arrange into a proper academic request: [office / meeting / could / a / during / schedule / hours / I / your]",
        correctAnswer: "Could I schedule a meeting during your office hours?",
        explanationEn: "Polite modal question + Verb + Object + Prepositional modifier.",
        explanationHi: "सही क्रम: Could I schedule a meeting during your office hours?",
        difficulty: "medium",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day44_ex_007",
        type: "multiple_choice",
        prompt: "What does 'plagiarism' mean in academic research?",
        options: [
          "Using another person's ideas or words without proper citation and presenting them as one's own",
          "Studying late at night before an examination",
          "Joining a sports club at university",
          "Applying for financial scholarship"
        ],
        correctAnswer: "Using another person's ideas or words without proper citation and presenting them as one's own",
        explanationEn: "Plagiarism is the unethical copying of intellectual work without attribution.",
        explanationHi: "साहित्यिक चोरी (बिना संदर्भ दिए दूसरों का काम चुराना) को 'plagiarism' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACADEMIC_INTEGRITY"
      },
      {
        id: "day44_ex_008",
        type: "error_correction",
        prompt: "Correct the sentence: 'Students are mugging up formulas before the test.'",
        correctAnswer: "Students are cramming formulas before the test.",
        acceptableAnswers: [
          "Students are memorizing formulas by rote before the test."
        ],
        explanationEn: "In standard English, rote memorization before an exam is 'cramming', not 'mugging up'.",
        explanationHi: "'Mugging up' के स्थान पर मानक अंग्रेज़ी में 'cramming' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day44_ex_009",
        type: "fill_blank",
        prompt: "An official academic document listing all courses completed and grades received is called a _______.",
        correctAnswer: "transcript",
        explanationEn: "An academic 'transcript' is the official grade record.",
        explanationHi: "अंकतालिका और आधिकारिक रिकॉर्ड को 'transcript' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACADEMIC_VOCAB"
      },
      {
        id: "day44_ex_010",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nStudent: 'Professor, I fell ill with fever this week.'\nProfessor: 'I see. Please provide a medical certificate and I will grant a three-day _______ on your term paper.'",
        options: ["extension", "tuition", "dormitory", "plagiarism"],
        correctAnswer: "extension",
        explanationEn: "An 'extension' is extra time granted past the initial deadline.",
        explanationHi: "अतिरिक्त समय दिए जाने को 'extension' कहते हैं।",
        difficulty: "easy",
        skillTag: "SITUATIONAL_DISCOURSE"
      },
      {
        id: "day44_ex_011",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'असाइनमेंट जमा करने की अंतिम तिथि शुक्रवार शाम 5 बजे है।'",
        correctAnswer: "The assignment submission deadline is Friday at 5 PM.",
        acceptableAnswers: [
          "The deadline for submitting the assignment is Friday at 5 PM.",
          "The assignment is due on Friday by 5 PM."
        ],
        explanationEn: "'The assignment submission deadline is Friday at 5 PM.' or 'The assignment is due...'",
        explanationHi: "'The assignment is due on Friday by 5 PM.' सटीक है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day44_ex_012",
        type: "multiple_choice",
        prompt: "What does 'GPA' stand for in higher education?",
        options: ["General Performance Assessment", "Grade Point Average", "Graduate Program Admission", "Global Placement Accreditation"],
        correctAnswer: "Grade Point Average",
        explanationEn: "GPA stands for Grade Point Average.",
        explanationHi: "GPA का पूरा नाम 'Grade Point Average' होता है।",
        difficulty: "easy",
        skillTag: "ACADEMIC_ACRONYMS"
      },
      {
        id: "day44_ex_013",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'The engineering curriculum includes advanced artificial intelligence.'",
        correctAnswer: "The engineering curriculum includes advanced artificial intelligence.",
        explanationEn: "Focus on spelling 'curriculum' and 'intelligence'.",
        explanationHi: "वर्तनी और वाक्य पर ध्यान दें।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day44_ex_014",
        type: "sentence_transformation",
        prompt: "Rewrite without using 'pass out': 'My sister passed out of medical college last summer.'",
        correctAnswer: "My sister graduated from medical college last summer.",
        explanationEn: "Use 'graduated from' instead of 'passed out of'.",
        explanationHi: "'Graduated from' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day44_ex_015",
        type: "matching",
        prompt: "Match the academic role to its definition:\n1. Undergraduate\n2. Faculty\n3. Alumni\n4. Registrar",
        options: [
          "1-Bachelor's degree student, 2-Teaching and research professors, 3-Former graduates of an institution, 4-Administrator maintaining student records",
          "1-Teaching professors, 2-Bachelor's student, 3-Administrator, 4-Former graduates",
          "1-Administrator, 2-Former graduates, 3-Teaching professors, 4-Bachelor's student",
          "1-Former graduates, 2-Administrator, 3-Bachelor's student, 4-Teaching professors"
        ],
        correctAnswer: "1-Bachelor's degree student, 2-Teaching and research professors, 3-Former graduates of an institution, 4-Administrator maintaining student records",
        explanationEn: "Accurate matching of university personnel and student tiers.",
        explanationHi: "अकादमिक पदों का सही मिलान।",
        difficulty: "medium",
        skillTag: "VOCAB_MATCHING"
      },
      {
        id: "day44_ex_016",
        type: "error_correction",
        prompt: "Correct the sentence: 'She is doing major on Molecular Biology.'",
        correctAnswer: "She is majoring in Molecular Biology.",
        acceptableAnswers: [
          "Her major is Molecular Biology."
        ],
        explanationEn: "The verb collocation is 'major IN [Subject]', not 'doing major on'.",
        explanationHi: "विषय विशेषज्ञता के लिए 'majoring in' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "PREPOSITION_COLLOCATION"
      },
      {
        id: "day44_ex_017",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'All first-year students must attend the campus orientation seminar.'",
        correctAnswer: "सभी प्रथम वर्ष के छात्रों को परिसर ओरिएंटेशन संगोष्ठी में भाग लेना अनिवार्य है।",
        acceptableAnswers: [
          "सभी नए छात्रों को कैंपस ओरिएंटेशन सेमिनार में शामिल होना चाहिए।"
        ],
        explanationEn: "'Orientation seminar' translates as ओरिएंटेशन संगोष्ठी / परिचयात्मक सेमिनार.",
        explanationHi: "ओरिएंटेशन सेमिनार में उपस्थिति का अनुवाद।",
        difficulty: "easy",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day44_ex_018",
        type: "active_recall",
        prompt: "What is the term for a monetary grant given to support a student's education based on academic merit or financial need?",
        correctAnswer: "Scholarship",
        acceptableAnswers: ["scholarship", "fellowship", "bursary", "grant"],
        explanationEn: "'Scholarship' or 'fellowship' is financial educational support.",
        explanationHi: "छात्रवृत्ति को 'scholarship' या 'fellowship' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day44_ex_019",
        type: "multiple_choice",
        prompt: "What are 'faculty office hours'?",
        options: [
          "The times when a professor is available in their office to consult with students",
          "The time when students clean the campus",
          "The university library opening hours",
          "The sports field schedule"
        ],
        correctAnswer: "The times when a professor is available in their office to consult with students",
        explanationEn: "Office hours are dedicated consultation periods for students.",
        explanationHi: "प्रोफेसर से मिलने और मार्गदर्शन के लिए निर्धारित समय को 'office hours' कहते हैं।",
        difficulty: "easy",
        skillTag: "CAMPUS_DISCOURSE"
      },
      {
        id: "day44_ex_020",
        type: "speaking_pronunciation",
        prompt: "Read aloud with accurate pronunciation of 'thesis' /ˈθiː.sɪs/: 'He defended his master's thesis on Friday.'",
        correctAnswer: "He defended his master's thesis on Friday.",
        explanationEn: "Ensure voiceless /θ/ and long /iː/ in 'thesis'.",
        explanationHi: "'Thesis' में /θ/ और /iː/ का सही उच्चारण करें।",
        difficulty: "medium",
        skillTag: "SPEAKING_PRONUNCIATION"
      },
      {
        id: "day44_ex_021",
        type: "question_formation",
        prompt: "Form a polite question asking a professor if a draft paper can be reviewed before final submission:",
        correctAnswer: "Would you be able to review a rough draft of my paper before the deadline?",
        acceptableAnswers: [
          "Could you please review my draft before the final submission?",
          "Would it be possible for you to look over my paper draft?"
        ],
        explanationEn: "'Could you please review my draft before final submission?' is polite and professional.",
        explanationHi: "प्रोफेसर से ड्राफ्ट समीक्षा के लिए विनम्र प्रश्न।",
        difficulty: "medium",
        skillTag: "QUESTION_FORMATION"
      },
      {
        id: "day44_ex_022",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'छात्रवृत्ति बनाए रखने के लिए न्यूनतम 3.5 जीपीए होना आवश्यक है।'",
        correctAnswer: "A minimum 3.5 GPA is required to maintain the scholarship.",
        acceptableAnswers: [
          "Students must maintain a minimum GPA of 3.5 to retain the scholarship.",
          "To retain the scholarship, a minimum 3.5 GPA is required."
        ],
        explanationEn: "'A minimum 3.5 GPA is required to maintain the scholarship.'",
        explanationHi: "'Maintain the scholarship' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day44_ex_023",
        type: "sentence_building",
        prompt: "Build a sentence about course requirements using [Calculus / prerequisite / enrolling / is / a / for / in / Physics].",
        correctAnswer: "Calculus is a prerequisite for enrolling in Physics.",
        explanationEn: "'Calculus is a prerequisite for enrolling in Physics.'",
        explanationHi: "सही वाक्य रचना।",
        difficulty: "medium",
        skillTag: "SENTENCE_BUILDING"
      },
      {
        id: "day44_ex_024",
        type: "multiple_choice",
        prompt: "What is an 'elective course' in a university curriculum?",
        options: [
          "A non-compulsory course chosen by a student according to personal interest",
          "A mandatory course every student must pass",
          "An exam conducted online",
          "A graduation ceremony"
        ],
        correctAnswer: "A non-compulsory course chosen by a student according to personal interest",
        explanationEn: "An elective is an optional course selected by choice.",
        explanationHi: "ऐच्छिक विषय (जिसे छात्र अपनी पसंद से चुनता है) को 'elective' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACADEMIC_VOCAB"
      },
      {
        id: "day44_ex_025",
        type: "error_correction",
        prompt: "Correct the sentence: 'He graduated in Harvard University with honors.'",
        correctAnswer: "He graduated from Harvard University with honors.",
        explanationEn: "One graduates 'from' an institution ('graduated from Harvard'), not 'in'.",
        explanationHi: "विश्वविद्यालय के साथ 'graduated from' आता है।",
        difficulty: "easy",
        skillTag: "PREPOSITION_COLLOCATION"
      },
      {
        id: "day44_ex_026",
        type: "fill_blank",
        prompt: "All sources cited in the research paper must be listed alphabetically in the _______ section.",
        correctAnswer: "bibliography",
        acceptableAnswers: ["references", "works cited"],
        explanationEn: "'Bibliography' or 'references' section.",
        explanationHi: "संदर्भ सूची को 'bibliography' या 'references' कहते हैं।",
        difficulty: "medium",
        skillTag: "RESEARCH_TERMS"
      },
      {
        id: "day44_ex_027",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The commencement ceremony celebrates the achievements of graduating students.'",
        correctAnswer: "दीक्षांत समारोह स्नातक होने वाले छात्रों की उपलब्धियों का जश्न मनाता है।",
        acceptableAnswers: [
          "दीक्षांत समारोह में पास होने वाले छात्रों की उपलब्धियों की सराहना की जाती है।"
        ],
        explanationEn: "'Commencement ceremony' translates as दीक्षांत समारोह.",
        explanationHi: "'Commencement ceremony' का अर्थ दीक्षांत समारोह है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day44_ex_028",
        type: "sentence_ordering",
        prompt: "Arrange in proper order: [sources / make / all / sure / cited / properly / are]",
        correctAnswer: "Make sure all sources are properly cited.",
        explanationEn: "Imperative clause + Subject + Passive verb.",
        explanationHi: "सही क्रम: Make sure all sources are properly cited.",
        difficulty: "easy",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day44_ex_029",
        type: "multiple_choice",
        prompt: "Which word refers to an extended piece of scholarly research written for a doctoral degree?",
        options: ["Dissertation / Thesis", "Syllabus", "Turnstile", "Receipt"],
        correctAnswer: "Dissertation / Thesis",
        explanationEn: "A dissertation or thesis is an extensive research treatise.",
        explanationHi: "डॉक्टरेट शोध-प्रबंध को 'dissertation / thesis' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACADEMIC_VOCAB"
      },
      {
        id: "day44_ex_030",
        type: "active_recall",
        prompt: "What is the American English term for a student dormitory or residence hall on campus?",
        correctAnswer: "Dorm",
        acceptableAnswers: ["dorm", "dormitory", "residence hall"],
        explanationEn: "'Dorm' or 'dormitory'.",
        explanationHi: "छात्र छात्रावास को 'dorm / dormitory' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day44_ex_031",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'मैं प्रोफेसर से शोध पत्र पर चर्चा करने के लिए अपॉइंटमेंट लेना चाहता हूँ।'",
        correctAnswer: "I would like to schedule an appointment with the professor to discuss the research paper.",
        acceptableAnswers: [
          "I want to make an appointment with the professor to discuss my research paper."
        ],
        explanationEn: "'I would like to schedule an appointment with the professor to discuss the research paper.'",
        explanationHi: "अकादमिक बैठक का विनम्र अनुरोध।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day44_ex_032",
        type: "error_correction",
        prompt: "Correct the sentence: 'He is having three classes today.'",
        correctAnswer: "He has three classes today.",
        explanationEn: "Stative possession of a schedule uses simple present 'has', not continuous '*is having*'.",
        explanationHi: "कक्षाओं की संख्या बताने के लिए 'has' का प्रयोग करें, '*is having*' का नहीं।",
        difficulty: "easy",
        skillTag: "STATIVE_VERBS"
      },
      {
        id: "day44_ex_033",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nAdvisor: 'Have you declared your major yet?'\nStudent: 'Not yet, but I am leaning towards majoring in _______.'",
        options: ["Biotechnology", "Turnstile", "Clearance", "Sublet"],
        correctAnswer: "Biotechnology",
        explanationEn: "'Biotechnology' is an academic discipline.",
        explanationHi: "'Biotechnology' एक अकादमिक विषय है।",
        difficulty: "easy",
        skillTag: "ACADEMIC_VOCAB"
      },
      {
        id: "day44_ex_034",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'She was awarded a full-tuition fellowship for her master's degree.'",
        correctAnswer: "She was awarded a full-tuition fellowship for her master's degree.",
        explanationEn: "Focus on spelling 'fellowship' and 'tuition'.",
        explanationHi: "वर्तनी और वाक्य पर ध्यान दें।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day44_ex_035",
        type: "multiple_choice",
        prompt: "What is a 'peer-reviewed journal'?",
        options: [
          "An academic publication where research articles are evaluated by independent experts before publishing",
          "A student magazine sold at the bookstore",
          "A daily campus newspaper",
          "A personal diary"
        ],
        correctAnswer: "An academic publication where research articles are evaluated by independent experts before publishing",
        explanationEn: "Peer review is the scholarly evaluation of manuscripts by experts in the field.",
        explanationHi: "विशेषज्ञों द्वारा जांची जाने वाली अकादमिक शोध पत्रिका को 'peer-reviewed journal' कहते हैं।",
        difficulty: "medium",
        skillTag: "RESEARCH_TERMS"
      },
      {
        id: "day44_ex_036",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'ऑनलाइन कोर्स के लिए रजिस्ट्रेशन अगले हफ्ते शुरू होगा।'",
        correctAnswer: "Registration for online courses will begin next week.",
        acceptableAnswers: [
          "Enrollment for the online course will start next week.",
          "Online course registration opens next week."
        ],
        explanationEn: "'Registration for online courses will begin next week.'",
        explanationHi: "'Registration / enrollment begins next week' सही है।",
        difficulty: "easy",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day44_ex_037",
        type: "error_correction",
        prompt: "Correct the sentence: 'Did you passed the entrance exam?'",
        correctAnswer: "Did you pass the entrance exam?",
        explanationEn: "After auxiliary 'did', the main verb must be base form 'pass' (NOT past 'passed').",
        explanationHi: "सहायक क्रिया 'did' के बाद बेस फॉर्म 'pass' आता है।",
        difficulty: "easy",
        skillTag: "GRAMMAR_AUXILIARY"
      },
      {
        id: "day44_ex_038",
        type: "sentence_building",
        prompt: "Build a sentence about tuition fees using [fees / semester / due / tuition / before / are / the / starts].",
        correctAnswer: "Tuition fees are due before the semester starts.",
        explanationEn: "'Tuition fees are due before the semester starts.'",
        explanationHi: "सही वाक्य रचना।",
        difficulty: "medium",
        skillTag: "SENTENCE_BUILDING"
      },
      {
        id: "day44_ex_039",
        type: "fill_blank",
        prompt: "Students who achieve outstanding grades are placed on the Dean's _______ List.",
        correctAnswer: "Honor",
        acceptableAnswers: ["Honour", "List of Honor"],
        explanationEn: "'Dean's Honor List' (or 'Dean's List').",
        explanationHi: "उत्कृष्ट छात्रों की सूची को 'Dean's Honor List' कहते हैं।",
        difficulty: "medium",
        skillTag: "ACADEMIC_AWARDS"
      },
      {
        id: "day44_ex_040",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The syllabus outlines course objectives, grading criteria, and reading assignments.'",
        correctAnswer: "पाठ्यक्रम रूपरेखा (सिलेबस) पाठ्यक्रम के उद्देश्यों, अंकन मानदंडों और पठन असाइनमेंट की रूपरेखा प्रस्तुत करती है।",
        acceptableAnswers: [
          "सिलेबस में कोर्स के उद्देश्य, ग्रेडिंग नियम और पढ़ने की सामग्री दी गई है।"
        ],
        explanationEn: "'Grading criteria and reading assignments' translates as अंकन मानदंड और पठन असाइनमेंट.",
        explanationHi: "सिलेबस विवरण का अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day44_ex_041",
        type: "multiple_choice",
        prompt: "Which title is given to the administrative head of a university faculty or department?",
        options: ["Dean", "Tenant", "Cashier", "Auditor"],
        correctAnswer: "Dean",
        explanationEn: "A Dean is the academic head of a university faculty or college.",
        explanationHi: "विश्वविद्यालय संकाय के प्रमुख को 'Dean' (डीन) कहते हैं।",
        difficulty: "easy",
        skillTag: "ACADEMIC_TITLES"
      },
      {
        id: "day44_ex_042",
        type: "active_recall",
        prompt: "What is the collective noun for the former students or graduates of a specific university?",
        correctAnswer: "Alumni",
        acceptableAnswers: ["alumni", "alumnus"],
        explanationEn: "'Alumni' is the plural term for university graduates.",
        explanationHi: "पूर्व छात्रों के समूह को 'Alumni' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day44_ex_043",
        type: "sentence_ordering",
        prompt: "Arrange in logical sequence: [dean / the / approved / research / his / proposal / academic]",
        correctAnswer: "The academic dean approved his research proposal.",
        explanationEn: "Subject + Verb + Object.",
        explanationHi: "सही क्रम: The academic dean approved his research proposal.",
        difficulty: "easy",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day44_ex_044",
        type: "error_correction",
        prompt: "Correct the sentence: 'She is having master degree from Oxford.'",
        correctAnswer: "She holds a master's degree from Oxford.",
        acceptableAnswers: [
          "She has a master's degree from Oxford."
        ],
        explanationEn: "Degrees are held: 'She holds a master's degree from Oxford.'",
        explanationHi: "'Holds a master's degree' या 'has a master's degree' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "ACADEMIC_SYNTAX"
      },
      {
        id: "day44_ex_045",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'साहित्यिक चोरी के कारण उसका शोध पत्र खारिज कर दिया गया था।'",
        correctAnswer: "His research paper was rejected due to plagiarism.",
        acceptableAnswers: [
          "His paper was rejected because of plagiarism."
        ],
        explanationEn: "'His research paper was rejected due to plagiarism.'",
        explanationHi: "'Due to plagiarism' का सही प्रयोग।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day44_ex_046",
        type: "multiple_choice",
        prompt: "Which preposition correctly completes: 'He enrolled _______ an advanced seminar on quantum physics.'?",
        options: ["in", "on", "at", "for"],
        correctAnswer: "in",
        explanationEn: "Standard collocation: 'enrolled in a seminar / course'.",
        explanationHi: "कोर्स में दाखिला लेने के लिए 'enrolled in' का प्रयोग होता है।",
        difficulty: "easy",
        skillTag: "PREPOSITION_COLLOCATION"
      },
      {
        id: "day44_ex_047",
        type: "speaking_pronunciation",
        prompt: "Articulate the four-syllable word 'curriculum' /kəˈrɪk.jə.ləm/: 'The university curriculum has been updated.'",
        correctAnswer: "The university curriculum has been updated.",
        explanationEn: "Focus on stress on the second syllable: /kəˈrɪk.jə.ləm/.",
        explanationHi: "'Curriculum' के दूसरे सिलेबल पर बल देकर बोलें।",
        difficulty: "hard",
        skillTag: "SPEAKING_PRONUNCIATION"
      },
      {
        id: "day44_ex_048",
        type: "fill_blank",
        prompt: "Undergraduate degree programs typically require four academic _______ to complete.",
        correctAnswer: "years",
        explanationEn: "'Four academic years'.",
        explanationHi: "चार शैक्षणिक वर्ष।",
        difficulty: "easy",
        skillTag: "ACADEMIC_VOCAB"
      },
      {
        id: "day44_ex_049",
        type: "sentence_transformation",
        prompt: "Rewrite using 'cramming': 'He studied frantically at the last minute for the final exam.'",
        correctAnswer: "He spent the night cramming for the final exam.",
        explanationEn: "'Cramming' accurately denotes last-minute intensive studying.",
        explanationHi: "'Cramming for the exam' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "LEXICAL_TRANSFORMATION"
      },
      {
        id: "day44_ex_050",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nStudent: 'Is attendance mandatory for all lectures?'\nTeaching Assistant: 'Yes, attendance counts towards ten percent of your overall _______.'",
        options: ["grade", "dormitory", "turnstile", "voucher"],
        correctAnswer: "grade",
        explanationEn: "Course attendance contributes to the final 'grade'.",
        explanationHi: "अंतिम ग्रेड या अंक।",
        difficulty: "easy",
        skillTag: "CAMPUS_DISCOURSE"
      },
      {
        id: "day44_ex_051",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Faculty members conduct groundbreaking research in medical genetics.'",
        correctAnswer: "संकाय सदस्य चिकित्सा आनुवंशिकी में अभूतपूर्व शोध करते हैं।",
        acceptableAnswers: [
          "प्रोफेसर मेडिकल जेनेटिक्स में क्रांतिकारी रिसर्च करते हैं।"
        ],
        explanationEn: "'Groundbreaking research' translates as अभूतपूर्व / क्रांतिकारी शोध.",
        explanationHi: "'Groundbreaking research' का अर्थ अभूतपूर्व शोध है।",
        difficulty: "hard",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day44_ex_052",
        type: "multiple_choice",
        prompt: "What is a 'bursary'?",
        options: [
          "A monetary grant or financial aid awarded to a student in need",
          "A university bus ticket",
          "A building for storing chemicals",
          "A student ID card"
        ],
        correctAnswer: "A monetary grant or financial aid awarded to a student in need",
        explanationEn: "A bursary is financial scholarship aid.",
        explanationHi: "वित्तीय सहायता या छात्रवृत्ति को 'bursary' कहते हैं।",
        difficulty: "medium",
        skillTag: "ACADEMIC_TERMS"
      },
      {
        id: "day44_ex_053",
        type: "error_correction",
        prompt: "Correct the sentence: 'She has many homeworks due on Monday.'",
        correctAnswer: "She has a lot of homework due on Monday.",
        acceptableAnswers: [
          "She has much homework due on Monday.",
          "She has several assignments due on Monday."
        ],
        explanationEn: "'Homework' is uncountable (never '*homeworks*'). Use 'assignments' or 'a lot of homework'.",
        explanationHi: "'Homework' अगणनीय है; 'a lot of homework' या 'assignments' बोलें।",
        difficulty: "medium",
        skillTag: "UNCOUNTABLE_NOUNS"
      },
      {
        id: "day44_ex_054",
        type: "active_recall",
        prompt: "What is the word for the brief break of a semester or academic year taken by students before starting university?",
        correctAnswer: "Gap year",
        acceptableAnswers: ["gap year", "sabbatical"],
        explanationEn: "A 'gap year' is a year taken off before or during university.",
        explanationHi: "एक साल के अंतराल को 'gap year' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day44_ex_055",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'दीक्षांत समारोह का सीधा प्रसारण विश्वविद्यालय की वेबसाइट पर किया जाएगा।'",
        correctAnswer: "The commencement ceremony will be live-streamed on the university website.",
        acceptableAnswers: [
          "The graduation ceremony will be broadcast live on the university website.",
          "The convocation ceremony will be live-streamed on the university website."
        ],
        explanationEn: "'The commencement ceremony will be live-streamed on the university website.'",
        explanationHi: "'Commencement ceremony' और 'live-streamed' का प्रयोग करें।",
        difficulty: "hard",
        skillTag: "TRANSLATION_HI_EN"
      }
    ]
  },
  use: {
    dialogues: [
      {
        id: "day44_dial_001",
        title: "Controlled Academic Advising & Major Declaration",
        context: "An undergraduate student (Aarav) meeting with an academic advisor (Dr. Wilson) to declare a major.",
        characters: ["Aarav", "Dr. Wilson"],
        lines: [
          { speaker: "Aarav", text: "Good afternoon, Dr. Wilson. I am here to formally declare my major for the upcoming academic year.", hindi: "शुभ दोपहर, डॉ. विल्सन। मैं आगामी शैक्षणिक वर्ष के लिए औपचारिक रूप से अपने प्रमुख विषय (मेजर) की घोषणा करने आया हूँ।" },
          { speaker: "Dr. Wilson", text: "Good afternoon, Aarav! Have you fulfilled all prerequisite courses in introductory programming and mathematics?", hindi: "शुभ दोपहर, आरव! क्या आपने प्रारंभिक प्रोग्रामिंग और गणित में सभी पूर्व-आवश्यक विषय पूरे कर लिए हैं?" },
          { speaker: "Aarav", text: "Yes, I completed Calculus II and Data Structures with a 3.8 GPA last semester.", hindi: "हाँ, मैंने पिछले सत्र में 3.8 जीपीए के साथ कैलकुलस II और डेटा स्ट्रक्चर्स पूरे किए।" },
          { speaker: "Dr. Wilson", text: "Excellent! So you are declaring a major in Computer Science. Are you considering any minor?", hindi: "बहुत बढ़िया! तो आप कंप्यूटर विज्ञान में मेजर कर रहे हैं। क्या आप किसी माइनर पर भी विचार कर रहे हैं?" },
          { speaker: "Aarav", text: "I would like to declare a minor in Cognitive Psychology to complement my artificial intelligence research.", hindi: "मैं अपने आर्टिफिशियल इंटेलिजेंस शोध को पूरा करने के लिए संज्ञानात्मक मनोविज्ञान में माइनर घोषित करना चाहता हूँ।" },
          { speaker: "Dr. Wilson", text: "That is a brilliant interdisciplinary combination. Let's submit the paperwork to the registrar.", hindi: "यह एक शानदार अंतःविषय संयोजन है। आइए रजिस्ट्रार को कागजी कार्रवाई जमा करें।" }
        ]
      },
      {
        id: "day44_dial_002",
        title: "Guided Thesis Proposal Discussion During Faculty Office Hours",
        context: "A master's student (Meera) consulting her research supervisor (Prof. Evans) about her thesis proposal.",
        characters: ["Meera", "Prof. Evans"],
        lines: [
          { speaker: "Meera", text: "Thank you for meeting with me during your office hours, Professor Evans. I've brought my draft dissertation outline.", hindi: "अपने ऑफिस आवर्स के दौरान मुझसे मिलने के लिए धन्यवाद, प्रोफेसर इवांस। मैं अपने शोध-प्रबंध का ड्राफ्ट लेकर आई हूँ।" },
          { speaker: "Prof. Evans", text: "You are welcome, Meera. Let's review your research methodology and literature review section.", hindi: "स्वागत है, मीरा। आइए आपकी शोध पद्धति और साहित्य समीक्षा अनुभाग की समीक्षा करें।" },
          { speaker: "Meera", text: "I have cited twenty peer-reviewed journal articles analyzing clean energy transitions in developing economies.", hindi: "मैंने विकासशील अर्थव्यवस्थाओं में स्वच्छ ऊर्जा बदलावों का विश्लेषण करने वाले बीस सहकर्मी-समीक्षित शोध लेखों का उद्धरण दिया है।" },
          { speaker: "Prof. Evans", text: "Your theoretical framework looks robust. When do you plan to begin your empirical data collection?", hindi: "आपका सैद्धांतिक ढांचा मजबूत लग रहा है। आप अपना अनुभवजन्य डेटा संग्रह कब शुरू करने की योजना बना रही हैं?" },
          { speaker: "Meera", text: "I intend to conduct field surveys over the summer break and submit the first full chapter by October.", hindi: "मेरा इरादा गर्मियों की छुट्टियों में फील्ड सर्वे करने और अक्टूबर तक पहला पूरा अध्याय जमा करने का है।" },
          { speaker: "Prof. Evans", text: "That is a solid timeline. Make sure you obtain ethics clearance before initiating surveys.", hindi: "यह एक ठोस समय-सीमा है। सुनिश्चित करें कि आप सर्वेक्षण शुरू करने से पहले नैतिकता समिति की मंजूरी प्राप्त कर लें।" }
        ]
      },
      {
        id: "day44_dial_003",
        title: "Free Problem-Resolution: Deadline Extension Request Due to Illness",
        context: "A student negotiating a term paper extension due to documented medical circumstances.",
        characters: ["Rohan", "Dr. Alvarez"],
        lines: [
          { speaker: "Rohan", text: "Dear Dr. Alvarez, I am writing to respectfully request a three-day extension on our Economics term paper.", hindi: "आदरणीय डॉ. अल्वारेज़, मैं हमारे अर्थशास्त्र टर्म पेपर पर सम्मानपूर्वक तीन दिन के विस्तार का अनुरोध करने के लिए लिख रहा हूँ।" },
          { speaker: "Dr. Alvarez", text: "Hello Rohan. Our syllabus strictly specifies that deadlines are firm unless supported by documented medical grounds.", hindi: "नमस्ते रोहन। हमारे पाठ्यक्रम में स्पष्ट रूप से उल्लेख है कि जब तक चिकित्सीय दस्तावेज न हों, समय सीमा निश्चित है।" },
          { speaker: "Rohan", text: "I completely understand, Professor. I was hospitalized with severe viral fever this week and have attached the official medical discharge certificate.", hindi: "मैं पूरी तरह समझता हूँ, प्रोफेसर। मुझे इस हफ्ते तेज वायरल बुखार के कारण अस्पताल में भर्ती होना पड़ा था और मैंने आधिकारिक मेडिकल डिस्चार्ज सर्टिफिकेट संलग्न किया है।" },
          { speaker: "Dr. Alvarez", text: "Thank you for providing the medical documentation, Rohan. I hope you are recovering well. I am extending your submission deadline to next Tuesday at 5 PM without penalty.", hindi: "चिकित्सीय दस्तावेज उपलब्ध कराने के लिए धन्यवाद, रोहन। मुझे आशा है कि आप स्वस्थ हो रहे हैं। मैं बिना किसी पेनल्टी के आपकी समय सीमा अगले मंगलवार शाम 5 बजे तक बढ़ा रहा हूँ।" },
          { speaker: "Rohan", text: "Thank you immensely for your understanding and accommodation, Dr. Alvarez.", hindi: "आपकी समझ और सहयोग के लिए बहुत-बहुत धन्यवाद, डॉ. अल्वारेज़।" }
        ]
      }
    ],
    speakingPrompt: {
      situation: "You are introducing your academic background and research interests in an international university seminar or admissions interview.",
      prompts: [
        "State where you graduated from and your major/degree specializations.",
        "Describe key academic achievements (e.g., GPA, honors, scholarships, publications).",
        "Explain a major research project or thesis topic you worked on.",
        "Discuss your future academic and professional aspirations."
      ],
      targetExpressions: [
        "I graduated from... with a Bachelor's in...",
        "I am majoring in... with a minor in...",
        "My thesis examined the...",
        "I was awarded a merit scholarship for..."
      ]
    },
    roleplay: {
      scenario: "University admission or scholarship interview between an applicant and a faculty panel member.",
      roleA: "Applicant: Explaining undergraduate achievements, research hypotheses, and reasons for choosing this master's curriculum.",
      roleB: "Professor: Asking about prerequisites, GPA, thesis focus, and career goals.",
      sampleDialogue: "Professor: 'What motivated your research proposal on renewable energy storage?' | Applicant: 'Having graduated with honors in Chemical Engineering, I wanted to explore sustainable battery chemistry.'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day44_bm_001",
        title: "Academic Background & Degree Description Benchmark",
        prompt: "Present your higher education background, detailing your institution, major and minor disciplines, academic honors, and graduation year with zero Indian English literalisms.",
        sampleAnswerEn: "I graduated from Delhi University in 2021 with a Bachelor of Science in Computer Science, maintaining a 3.9 GPA and graduating on the Dean's Honor List. Throughout my undergraduate curriculum, I completed a minor in Mathematics and served as a research assistant in the Data Analytics laboratory. Currently, I am enrolled in a Master's program in Artificial Intelligence at an international university.",
        sampleAnswerHi: "मैंने 2021 में दिल्ली विश्वविद्यालय से कंप्यूटर साइंस में बैचलर ऑफ साइंस के साथ 3.9 जीपीए बनाए रखते हुए और डीन की सम्मान सूची में स्थान प्राप्त करते हुए स्नातक की उपाधि प्राप्त की। अपने पूरे स्नातक पाठ्यक्रम के दौरान, मैंने गणित में माइनर पूरा किया और डेटा एनालिटिक्स प्रयोगशाला में एक रिसर्च असिस्टेंट के रूप में कार्य किया। वर्तमान में, मैं एक अंतरराष्ट्रीय विश्वविद्यालय में आर्टिफिशियल इंटेलिजेंस में मास्टर्स प्रोग्राम में नामांकित हूँ।",
        evaluationCriteria: "Flawless academic syntax ('graduated from', 'majoring in', 'Dean's Honor List'), correct prepositions, and avoidance of '*passed out*'."
      },
      {
        id: "day44_bm_002",
        title: "Faculty Consultation & Extension Negotiation Benchmark",
        prompt: "Formulate a formal email to a university professor requesting a brief assignment extension due to unforeseen circumstances, attaching official evidence.",
        sampleAnswerEn: "Dear Professor Evans, I am writing to respectfully request a forty-eight-hour extension on the submission deadline for our Molecular Biology term paper. Due to an unforeseen family medical emergency, I was unable to complete the final literature review section. I have attached the necessary documentation for your review. I would be immensely grateful for your consideration and look forward to your guidance.",
        sampleAnswerHi: "प्रिय प्रोफेसर इवांस, मैं हमारे आणविक जीव विज्ञान टर्म पेपर के लिए जमा करने की समय सीमा पर सम्मानपूर्वक अड़तालीस घंटे के विस्तार का अनुरोध करने के लिए लिख रहा हूँ। अप्रत्याशित पारिवारिक चिकित्सा आपातकाल के कारण, मैं अंतिम साहित्य समीक्षा अनुभाग को पूरा करने में असमर्थ था। मैंने आपकी समीक्षा के लिए आवश्यक दस्तावेज संलग्न किए हैं। मैं आपके विचार के लिए बेहद आभारी रहूँगा और आपके मार्गदर्शन की प्रतीक्षा करूँगा।",
        evaluationCriteria: "Scholarly and deferential register, precise administrative vocabulary ('forty-eight-hour extension', 'literature review section', 'unforeseen emergency'), and proper email closing."
      },
      {
        id: "day44_bm_003",
        title: "Research Thesis & Scholarly Methodology Benchmark",
        prompt: "Explain your research thesis topic in 4–5 sentences, mentioning methodology, peer-reviewed literature citations, and anticipated academic impact.",
        sampleAnswerEn: "My master's dissertation investigates the socioeconomic implications of decentralised solar microgrids in rural communities. Utilizing a mixed-methods research design, I conducted empirical field surveys alongside an extensive review of fifty peer-reviewed journal articles. The study demonstrates that localized solar infrastructure substantially boosts micro-enterprise productivity. I look forward to defending my thesis before the departmental committee next month.",
        sampleAnswerHi: "मेरा मास्टर शोध-प्रबंध ग्रामीण समुदायों में विकेंद्रीकृत सौर माइक्रोग्रिड के सामाजिक-आर्थिक निहितार्थों की जांच करता है। एक मिश्रित-पद्धति अनुसंधान डिजाइन का उपयोग करते हुए, मैंने पचास सहकर्मी-समीक्षित शोध लेखों की व्यापक समीक्षा के साथ-साथ अनुभवजन्य क्षेत्र सर्वेक्षण किए। अध्ययन से पता चलता है कि स्थानीयकृत सौर बुनियादी ढांचा सूक्ष्म उद्यम उत्पादकता को काफी बढ़ावा देता है। मैं अगले महीने विभागीय समिति के समक्ष अपनी थीसिस का बचाव करने के लिए उत्सुक हूँ।",
        evaluationCriteria: "Scholarly vocabulary ('dissertation', 'socioeconomic implications', 'mixed-methods design', 'peer-reviewed journal articles', 'defending my thesis'), high-level syntactic cohesion."
      }
    ]
  },
  review: {
    quickRecall: [
      { q: "Why is '*I passed out from college in 2020*' incorrect in standard English?", a: "Because 'to pass out' means to faint. You must say 'I graduated from college in 2020'." },
      { q: "What is the difference between 'taking an exam' and 'giving an exam'?", a: "Students 'take' or 'sit for' exams; teachers/professors 'give' or 'administer' exams." },
      { q: "What should you say instead of '*mugging up*' before tests?", a: "Say 'cramming for the exam' or 'memorizing by rote'." },
      { q: "What is an 'academic prerequisite'?", a: "A required prior course that must be completed before taking an advanced class." },
      { q: "How is 'thesis' pronounced?", a: "Pronounce it /ˈθiː.sɪs/ with a voiceless /θ/ and long /iː/." }
    ],
    spacedTips: [
      "Review your own educational milestones and formulate your academic resume/elevator pitch in English.",
      "Notice the use of 'major in', 'minor in', 'graduated from', and 'enrolled in' across university websites.",
      "Practice using 'cramming', 'thesis defense', and 'office hours' in natural conversation."
    ]
  }
};

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day44.js'), `export const day44 = ${JSON.stringify(day44, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Upgraded Day 44 (55 exercises, 20 vocab, 12 phrases, 25 examples, 3 dialogues, 3 benchmarks)");
