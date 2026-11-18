import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_149: ConversationDefinition = {
  id: 'conv_a2_149',
  title: 'Lifelong Learning, Workshops & Professional Development',
  cefr: 'A2',
  unitId: 'unit_a2_10',
  lessonLinks: ['lesson_a2_10_149'],
  estimatedMinutes: 5,
  scenario:
    'You are visiting the Continuing Education and Professional Development Admissions Office at London Metropolitan College. Speak with academic advisor Graham Foster. Inquire about adult evening courses in Digital Marketing and Data Analytics, ask about entry prerequisites, course duration (12-week hybrid timetable), clarify industry accreditation, and ask about flexible tuition installment options.',
  communicativeGoals: [
    'Inquire about adult education, vocational workshops, and professional certificates',
    'Ask about course entry requirements, schedule flexibility, and workload expectations',
    'Clarify industry recognized certifications, exams, and accreditation benefits',
    'Discuss tuition fee structures, installment payment plans, and employer sponsorship options',
  ],
  canDoStatements: [
    'Can inquire about adult education courses, timetables, and entry prerequisites',
    'Can ask detailed questions about course certification, practical skills, and exams',
    'Can discuss tuition payment methods and installment options with an academic advisor',
  ],
  characters: [
    {
      id: 'char_graham_foster',
      name: 'Graham Foster',
      role: 'Academic & Continuing Education Advisor',
      avatar: '🎓',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'workshop',
        ipa: '/ˈwɜːkʃɒp/',
        partOfSpeech: 'noun',
        meaning: 'A brief intensive educational program for a small group focusing on practical skills',
        exampleSentence: 'I enrolled in a weekend workshop on digital marketing analytics.',
        translations: { hi: 'कार्यशाला / वर्कशॉप' },
      },
      {
        word: 'prerequisite',
        ipa: '/ˌpriːˈrekwəzɪt/',
        partOfSpeech: 'noun',
        meaning: 'A thing that is required as a prior condition for something else to happen',
        exampleSentence: 'Basic computer literacy is the only prerequisite for this course.',
        translations: { hi: 'पूर्वापेक्षा / पूर्व शर्त' },
      },
      {
        word: 'certificate',
        ipa: '/səˈtɪfɪkət/',
        partOfSpeech: 'noun',
        meaning: 'An official document attesting to a certain fact or level of achievement',
        exampleSentence: 'Graduates receive an accredited CPD professional certificate.',
        translations: { hi: 'प्रमाणपत्र / सनद' },
      },
      {
        word: 'installment',
        ipa: '/ɪnˈstɔːlmənt/',
        partOfSpeech: 'noun',
        meaning: 'A sum of money due as one of several equal payments for something',
        exampleSentence: 'You can pay the tuition in three equal monthly installments.',
        translations: { hi: 'किस्त / इंस्टॉलमेंट' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am interested in enrolling in the evening Digital Marketing course.',
        functionCategory: 'Expressing Interest in Courses',
        exampleSentence: 'I would like to apply for the Data Analytics diploma.',
      },
      {
        phrase: 'What are the entry prerequisites and admission criteria?',
        functionCategory: 'Asking About Prerequisites & Requirements',
        exampleSentence: 'Do I need prior coding experience?',
      },
      {
        phrase: 'Is this qualification accredited by an official professional body?',
        functionCategory: 'Clarifying Certification & Accreditation',
        exampleSentence: 'Does the certificate include CPD points?',
      },
      {
        phrase: 'Do you offer flexible monthly installment payment plans for tuition?',
        functionCategory: 'Inquiring About Payment Plans',
        exampleSentence: 'Can I pay half now and the remainder next month?',
      },
    ],
    grammar: {
      title: 'Polite Inquiries with "I am interested in + verb-ing" & Question Inversion',
      conceptExplanation:
        '1. Expressing Learning Goals: "I am interested in + [Verb-ing]" (e.g., "I am interested in learning data analysis").\n2. Embedded Inquiries: "Could you tell me how long the course takes?" / "Do you know if classes are recorded?"\n3. Asking About Financing: "Is it possible to pay in installments?"',
      patternFormula: 'I am interested in + [Verb-ing] + What are the prerequisites? + Is it possible to [Verb]?',
      contrastExamples: [
        {
          incorrect: 'I am interest in learn marketing and give me certificate.',
          correct: 'I am interested in learning digital marketing. What certification do you offer?',
          explanation: 'Use "interested in + -ing" ("learning") and polite inquiry structure.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Graham Foster',
        text: 'Good morning! Welcome to London Metropolitan College Continuing Education. How can I help with your professional development today?',
        translation: 'शुभ प्रभात! लंदन मेट्रोपॉलिटन कॉलेज सतत शिक्षा में आपका स्वागत है। आज आपके व्यावसायिक विकास में मैं आपकी क्या मदद कर सकता हूँ?',
      },
      {
        speaker: 'You',
        text: 'Good morning, Graham. I am interested in enrolling in your evening Digital Marketing Certificate. Could you tell me about the entry prerequisites and course schedule?',
        translation: 'शुभ प्रभात, ग्राहम। मैं आपके शाम के डिजिटल मार्केटिंग सर्टिफिकेट में दाखिला लेने में रुचि रखता हूँ। क्या आप मुझे प्रवेश पूर्वापेक्षाओं और पाठ्यक्रम कार्यक्रम के बारे में बता सकते हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_149_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "I am interested in ___ (enrolling / enroll / to enroll) in evening classes."',
      options: [
        { id: 'opt_1', text: 'enrolling', isCorrect: true },
        { id: 'opt_2', text: 'enroll', isCorrect: false },
        { id: 'opt_3', text: 'to enroll', isCorrect: false },
      ],
      correctAnswer: 'enrolling',
      explanation: 'Use "-ing" after the preposition "in" ("interested in enrolling").',
    },
    {
      id: 'cp_a2_149_2',
      type: 'multiple_choice',
      prompt: 'What does "hybrid course" mean?',
      options: [
        { id: 'opt_1', text: 'A course combining online virtual learning with in-person classroom sessions', isCorrect: true },
        { id: 'opt_2', text: 'A course that requires no studying at all', isCorrect: false },
        { id: 'opt_3', text: 'A course only taught inside cars', isCorrect: false },
      ],
      correctAnswer: 'A course combining online virtual learning with in-person classroom sessions',
      explanation: 'Hybrid education blends online and classroom learning.',
    },
    {
      id: 'cp_a2_149_3',
      type: 'multiple_choice',
      prompt: 'How do you ask if you can pay course fees in parts?',
      options: [
        { id: 'opt_1', text: 'Do you offer a monthly installment plan for tuition fees?', isCorrect: true },
        { id: 'opt_2', text: 'Why school takes my cash quickly?', isCorrect: false },
        { id: 'opt_3', text: 'I pay when I feel good.', isCorrect: false },
      ],
      correctAnswer: 'Do you offer a monthly installment plan for tuition fees?',
      explanation: 'Polite, standard inquiry about payment terms.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_149_1',
      scenarioContext: 'Express interest in professional course.',
      prompt: 'Build: "I am interested in taking evening classes."',
      targetStructure: 'Subject + am interested in + verb-ing + noun phrase',
      wordBank: ['I', 'am', 'interested', 'in', 'taking', 'evening', 'classes', 'take', 'learn'],
      acceptableSolutions: [
        'I am interested in taking evening classes',
        'I am interested in taking evening classes.',
      ],
      explanation: 'Standard formula for academic interest.',
    },
    {
      id: 'sc_a2_149_2',
      scenarioContext: 'Ask about monthly installments.',
      prompt: 'Build: "Can I pay the tuition in installments?"',
      targetStructure: 'Can I pay + the tuition + in installments',
      wordBank: ['Can', 'I', 'pay', 'the', 'tuition', 'in', 'installments', 'paying', 'by'],
      acceptableSolutions: [
        'Can I pay the tuition in installments',
        'Can I pay the tuition in installments?',
      ],
      explanation: 'Polite financial inquiry regarding tuition payment.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_149_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello and welcome! My name is Graham Foster. Are you looking to upgrade your professional skills or explore a new career path with our continuing education programs?',
      partnerAudioText:
        'Hello and welcome! My name is Graham Foster. Are you looking to upgrade your professional skills or explore a new career path with our continuing education programs?',
      partnerQuestionHindi:
        'नमस्ते और स्वागत है! मेरा नाम ग्राहम फोस्टर है। क्या आप अपने पेशेवर कौशल को अपग्रेड करना चाहते हैं या हमारे सतत शिक्षा कार्यक्रमों के साथ एक नए करियर पथ की तलाश कर रहे हैं?',
      expectedFunction: 'Express Interest in Course & Ask About Schedule/Prerequisites (interested in Digital Marketing & Data / evening / prerequisites)',
      contextGoal:
        'State your interest in the evening Digital Marketing and Data Analytics certificate, and ask what the entry prerequisites and weekly hours are.',
      targetVocabulary: ['interested in enrolling in Digital Marketing', 'evening professional certificate', 'What are the entry prerequisites?', 'weekly schedule and workload'],
      suggestedResponses: [
        {
          label: 'Comprehensive Course Inquiry',
          text: 'Good morning, Graham. I am interested in enrolling in the evening Digital Marketing and Data Analytics certificate. Could you tell me what the entry prerequisites are, and how many hours per week the course requires?',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Course Inquiry',
          text: 'Hello Graham. I’m interested in the evening Digital Marketing course. What are the prerequisites and schedule?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Course Interest (interested in / enroll / apply / digital marketing / data / analytics / marketing / evening / certificate / course)',
          patterns: ['interested in', 'enroll', 'apply', 'digital marketing', 'data', 'analytics', 'marketing', 'evening', 'certificate', 'course'],
          required: true,
        },
        {
          name: 'Prerequisites & Hours (prerequisites / requirements / hours / schedule / timetable / workload / weekly / time / ?)',
          patterns: ['prerequisites', 'requirements', 'hours', 'schedule', 'timetable', 'workload', 'weekly', 'time', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'interested_in_base_verb_rule',
          pattern: /\binterested in enroll\b|\binterested in learn\b/i,
          errorType: 'grammar',
          message: 'Use "-ing" after "interested in" (e.g. "interested in enrolling", "interested in learning").',
          correctionPattern: 'interested in enrolling',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_149_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I am interested in ___ (studying / study) data analytics."',
        options: [
          { id: 'opt_1', text: 'studying', isCorrect: true },
          { id: 'opt_2', text: 'study', isCorrect: false },
          { id: 'opt_3', text: 'to study', isCorrect: false },
        ],
        correctAnswer: 'studying',
        explanation: 'Preposition "in" requires a gerund ("studying").',
      },
    },
    {
      id: 'turn_a2_149_2',
      turnIndex: 2,
      partnerPrompt:
        'It’s a 12-week hybrid course: Tuesday and Thursday evenings online from 6:30 to 8:30 PM, plus one Saturday workshop per month on campus. There are no strict technical prerequisites, just basic computer literacy and enthusiasm!',
      partnerAudioText:
        'It’s a 12-week hybrid course: Tuesday and Thursday evenings online from 6:30 to 8:30 PM, plus one Saturday workshop per month on campus. There are no strict technical prerequisites, just basic computer literacy and enthusiasm!',
      partnerQuestionHindi:
        'यह 12 सप्ताह का हाइब्रिड कोर्स है: मंगलवार और गुरुवार की शाम को 6:30 से 8:30 बजे तक ऑनलाइन, साथ ही परिसर में प्रति माह एक शनिवार कार्यशाला। कोई सख्त तकनीकी पूर्वापेक्षाएँ नहीं हैं, केवल बुनियादी कंप्यूटर साक्षरता और उत्साह!',
      expectedFunction: 'Inquire About Accreditation & Practical Projects (accredited qualification / industry certificate / practical case studies)',
      contextGoal:
        'Ask Graham if the certificate is accredited by an industry body (like the Chartered Institute of Marketing) and whether students work on practical client projects.',
      targetVocabulary: ['Is this certificate accredited by industry bodies?', 'Chartered Institute of Marketing', 'practical real-world projects', 'hands-on case studies'],
      suggestedResponses: [
        {
          label: 'Accreditation & Curriculum Inquiry',
          text: 'That hybrid schedule fits my working hours perfectly! Is this certificate accredited by an official industry body, and will we get to work on real practical client projects during the course?',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Question',
          text: 'The schedule sounds great. Is the certificate accredited, and are there practical projects with real data?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Schedule Reaction (fits / great / perfect / schedule / hybrid / works)',
          patterns: ['fits', 'great', 'perfect', 'schedule', 'hybrid', 'works', 'good'],
          required: true,
        },
        {
          name: 'Accreditation & Projects (accredited / certification / recognized / projects / practical / real / client / case studies / ?)',
          patterns: ['accredited', 'certification', 'recognized', 'projects', 'practical', 'real', 'client', 'case studies', 'exam', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_149_2',
        type: 'multiple_choice',
        prompt: 'Which question correctly asks about accreditation?',
        options: [
          { id: 'opt_1', text: 'Is this certificate accredited by recognized industry bodies?', isCorrect: true },
          { id: 'opt_2', text: 'Is certificate having big name stamps?', isCorrect: false },
          { id: 'opt_3', text: 'Paper gives job or not?', isCorrect: false },
        ],
        correctAnswer: 'Is this certificate accredited by recognized industry bodies?',
        explanation: 'Clear professional academic inquiry.',
      },
    },
    {
      id: 'turn_a2_149_3',
      turnIndex: 3,
      partnerPrompt:
        'Yes, it is fully accredited by the Digital Marketing Institute and includes 30 CPD credits. You will build a live portfolio campaign for an actual charity client. The total tuition fee is £750. Would you like to know about our payment options?',
      partnerAudioText:
        'Yes, it is fully accredited by the Digital Marketing Institute and includes 30 CPD credits. You will build a live portfolio campaign for an actual charity client. The total tuition fee is £750. Would you like to know about our payment options?',
      partnerQuestionHindi:
        'हाँ, यह डिजिटल मार्केटिंग संस्थान द्वारा पूरी तरह से मान्यता प्राप्त है और इसमें 30 सीपीडी क्रेडिट शामिल हैं। आप एक वास्तविक चैरिटी क्लाइंट के लिए एक लाइव पोर्टफोलियो अभियान बनाएंगे। कुल शिक्षण शुल्क £750 है। क्या आप हमारे भुगतान विकल्पों के बारे में जानना चाहेंगे?',
      expectedFunction: 'Ask About Installment Plans & Enrollment Process (pay in monthly installments / how to apply / start date)',
      contextGoal:
        'Ask if it is possible to pay the £750 tuition in three interest-free monthly installments of £250, and ask how to register online.',
      targetVocabulary: ['Can I pay in three monthly installments of £250?', 'interest-free payment plan', 'How do I register for the course?', 'upcoming start date'],
      suggestedResponses: [
        {
          label: 'Installment & Registration Inquiry',
          text: 'That portfolio project sounds wonderful! Can I pay the £750 tuition in three monthly installments of £250? Also, what is the registration deadline for the next term?',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Payment Question',
          text: 'Can I pay in monthly installments? How do I apply before the deadline?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Payment / Installments (installment / monthly / 250 / 750 / pay / parts / plan / split)',
          patterns: ['installment', 'monthly', '250', '750', 'pay', 'parts', 'plan', 'split', 'fees'],
          required: true,
        },
        {
          name: 'Application & Deadline (register / apply / application / deadline / start / start date / term / ?)',
          patterns: ['register', 'apply', 'application', 'deadline', 'start', 'start date', 'term', 'when', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_149_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Can I pay the fees ___ (in / by) installments?"',
        options: [
          { id: 'opt_1', text: 'in', isCorrect: true },
          { id: 'opt_2', text: 'on', isCorrect: false },
          { id: 'opt_3', text: 'with', isCorrect: false },
        ],
        correctAnswer: 'in',
        explanation: 'Standard idiom: "pay in installments".',
      },
    },
    {
      id: 'turn_a2_149_4',
      turnIndex: 4,
      partnerPrompt:
        'Yes, you can split it into three monthly payments of £250 with zero interest. Registration closes next Friday on our student portal. Here is our course syllabus brochure and enrollment link. We’d love to have you join our next cohort!',
      partnerAudioText:
        'Yes, you can split it into three monthly payments of £250 with zero interest. Registration closes next Friday on our student portal. Here is our course syllabus brochure and enrollment link. We’d love to have you join our next cohort!',
      partnerQuestionHindi:
        'हाँ, आप इसे शून्य ब्याज के साथ £250 के तीन मासिक भुगतानों में विभाजित कर सकते हैं। हमारे छात्र पोर्टल पर पंजीकरण अगले शुक्रवार को बंद हो जाएगा। यह हमारा पाठ्यक्रम विवरणिका और नामांकन लिंक है। हम आपको हमारे अगले समूह में शामिल करने के लिए उत्सुक हैं!',
      expectedFunction: 'Express Gratitude & State Next Steps (Thank you Graham / will complete online registration / looking forward to the course)',
      contextGoal:
        'Thank Graham for his helpful advice and brochure, confirm you will complete your registration on the portal today, and conclude the meeting.',
      targetVocabulary: ['Thank you very much Graham', 'very helpful information', 'I will submit my application online today', 'have a wonderful day'],
      suggestedResponses: [
        {
          label: 'Appreciative Academic Close',
          text: 'Thank you very much for all your help, Graham! The installment plan is ideal. I will complete my registration on the portal today. Have a wonderful day!',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Closing',
          text: 'Thank you for the brochure and information, Graham. I will register online this afternoon. Have a great day!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Portal Registration (thank you / thanks / graham / register / portal / online / apply / brochure / have a nice day / have a great day / goodbye)',
          patterns: ['thank you', 'thanks', 'graham', 'register', 'portal', 'online', 'apply', 'brochure', 'have a nice day', 'have a great day', 'have a good day', 'goodbye', 'bye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_149_4',
        type: 'multiple_choice',
        prompt: 'Which sentence is an ideal closing when leaving an admissions office?',
        options: [
          { id: 'opt_1', text: 'Thank you for all your help, Graham! I will submit my registration today. Have a great day!', isCorrect: true },
          { id: 'opt_2', text: 'I leave now give me diploma.', isCorrect: false },
          { id: 'opt_3', text: 'See ya school guy.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for all your help, Graham! I will submit my registration today. Have a great day!',
        explanation: 'Professional, polite academic consultation farewell.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 75,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 60,
  },
};
