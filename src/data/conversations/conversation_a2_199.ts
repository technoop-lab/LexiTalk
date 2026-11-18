import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_199: ConversationDefinition = {
  id: 'conv_a2_199',
  title: 'Education Systems, Courses & Campus Life',
  cefr: 'A2',
  unitId: 'unit_a2_14',
  lessonLinks: ['lesson_a2_14_199'],
  estimatedMinutes: 5,
  scenario:
    'You are at the University Student Services Information Hub during Orientation Week. Student Advisor Chloe helps you locate campus facilities, understand your course timetable, choose elective modules for your degree, and activate your student union membership.',
  communicativeGoals: [
    'Describe your degree program (e.g. Bachelor of Science in Computer Science or Master’s in Environmental Policy)',
    'Inquire about and locate campus facilities (lecture halls, science laboratories, central library, student union)',
    'Understand semester schedules, modular credits, and lecture vs tutorial timetables',
    'Ask for advice on enrolling in elective courses and joining campus student societies',
  ],
  canDoStatements: [
    'Can discuss academic subjects, degree levels, and semester course schedules',
    'Can ask for directions to campus buildings and university facilities',
    'Can ask about course enrollment requirements and elective modules',
  ],
  characters: [
    {
      id: 'char_chloe_advisor',
      name: 'Chloe',
      role: 'University Student Services Advisor',
      avatar: '🎓',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'degree',
        ipa: '/dɪˈɡriː/',
        partOfSpeech: 'noun',
        meaning: 'An academic qualification given by a university after the successful completion of a course of study',
        exampleSentence: 'She is pursuing a Master’s degree in Data Analytics.',
        translations: { hi: 'स्नातक / स्नातकोत्तर उपाधि (डिग्री)' },
      },
      {
        word: 'lecture',
        ipa: '/ˈlektʃə(r)/',
        partOfSpeech: 'noun',
        meaning: 'An educational talk to an audience of students, typically at a college or university',
        exampleSentence: 'The introductory economics lecture takes place in Hall B.',
        translations: { hi: 'व्याख्यान (लेक्चर)' },
      },
      {
        word: 'module',
        ipa: '/ˈmɒdjuːl/',
        partOfSpeech: 'noun',
        meaning: 'Each of a set of standardized parts or units that can be used to construct a university course',
        exampleSentence: 'In the first semester, we must complete four core modules.',
        translations: { hi: 'पाठ्यक्रम इकाई (मॉड्यूल)' },
      },
      {
        word: 'campus',
        ipa: '/ˈkæmpəs/',
        partOfSpeech: 'noun',
        meaning: 'The grounds and buildings of a university or college',
        exampleSentence: 'The student union and sports complex are located on the north campus.',
        translations: { hi: 'विश्वविद्यालय परिसर (कैंपस)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am enrolled in a Bachelor’s degree in Artificial Intelligence.',
        functionCategory: 'Stating degree and major',
        exampleSentence: 'I am doing a Master’s degree in Civil Engineering.',
      },
      {
        phrase: 'Could you tell me where Lecture Hall 3 and the science labs are located?',
        functionCategory: 'Asking for campus locations',
        exampleSentence: 'Where is the main library building on the campus map?',
      },
      {
        phrase: 'How many elective credits do I need to register for this semester?',
        functionCategory: 'Course credits inquiry',
        exampleSentence: 'Are tutorials compulsory every week?',
      },
      {
        phrase: 'Where can I collect my student union card and campus bus pass?',
        functionCategory: 'Campus amenities inquiry',
        exampleSentence: 'The student union desk is on the ground floor.',
      },
    ],
    grammar: {
      title: 'Academic Terminology & University Course Structures',
      conceptExplanation:
        '1. Describing Your Degree:\n   - "I am studying for a Bachelor’s / Master’s degree in [Subject]"\n   - "My major / course is [Subject]"\n2. Talking About Course Components:\n   - Lectures: Large class presentations\n   - Seminars / Tutorials: Small group discussions\n   - Core modules (mandatory) vs Elective modules (optional)\n3. Asking for Campus Locations:\n   - "Could you show me where [Building/Hall] is on this map?"\n   - "Is [Facility] located on the main campus or the science quad?"',
      patternFormula: 'I am studying [Degree] in [Subject] | Where is [Building/Facility] located?',
      contrastExamples: [
        {
          incorrect: 'I study Bachelor in Computer.',
          correct: 'I am doing a Bachelor’s degree in Computer Science.',
          explanation: 'Use possessive "Bachelor’s degree" and the full subject name.',
        },
        {
          incorrect: 'Where lecture? I want go.',
          correct: 'Could you please tell me where the lecture hall is located?',
          explanation: 'Use polite indirect inquiry for campus navigation.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Chloe',
        text: 'Welcome to Manchester University Orientation Hub! How is your first week going, and what course are you joining?',
        translation: 'मैनचेस्टर यूनिवर्सिटी ओरिएंटेशन हब में आपका स्वागत है! आपका पहला सप्ताह कैसा चल रहा है, और आप किस कोर्स में शामिल हो रहे हैं?',
      },
      {
        speaker: 'Learner',
        text: 'Good morning Chloe! It is exciting. I am doing a Master’s degree in Data Science and I need help choosing my elective modules.',
        translation: 'शुभ प्रभात क्लोई! यह रोमांचक है। मैं डेटा साइंस में मास्टर्स डिग्री कर रहा हूँ और मुझे अपने वैकल्पिक मॉड्यूल चुनने में मदद चाहिए।',
      },
      {
        speaker: 'Chloe',
        text: 'Fantastic! Let’s open your academic portal and inspect your module options.',
        translation: 'शानदार! आइए आपका अकादमिक पोर्टल खोलें और आपके मॉड्यूल विकल्पों की जांच करें।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_199_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "A mandatory subject is called a ______ (core / optional) module."',
      options: [
        { id: 'opt_1', text: 'core', isCorrect: true },
        { id: 'opt_2', text: 'optional', isCorrect: false },
        { id: 'opt_3', text: 'break', isCorrect: false },
      ],
      correctAnswer: 'core',
      explanation: 'A core module is a required/compulsory course unit.',
    },
    {
      id: 'cp_199_2',
      type: 'multiple_choice',
      prompt: 'What is the main difference between a lecture and a tutorial?',
      options: [
        { id: 'opt_1', text: 'A lecture is a large presentation; a tutorial is a small interactive discussion.', isCorrect: true },
        { id: 'opt_2', text: 'A lecture is an exam; a tutorial is a sports game.', isCorrect: false },
        { id: 'opt_3', text: 'There is no difference.', isCorrect: false },
      ],
      correctAnswer: 'A lecture is a large presentation; a tutorial is a small interactive discussion.',
      explanation: 'Lectures present material to big groups; tutorials allow small-group exercises.',
    },
    {
      id: 'cp_199_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [where the engineering / could you tell me / lecture hall is]',
      correctAnswer: 'could you tell me where the engineering lecture hall is',
      explanation: 'Polite question: Could you tell me + where + subject + is.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_199_1',
      prompt: 'Construct a sentence stating your degree level, subject major, and semester.',
      scenarioContext: 'Introducing yourself to the university advisor.',
      targetStructure: 'I am starting the first semester of my Master\'s degree in Information Systems.',
      wordBank: ['I am starting', 'the first semester', 'of my Master\'s degree', 'in Information Systems', 'at the university'],
      acceptableSolutions: [
        'I am starting the first semester of my Master\'s degree in Information Systems.',
        'I am doing a Master\'s degree in Information Systems in the first semester.',
      ],
      explanation: 'State semester, degree type, and subject clearly.',
    },
    {
      id: 'sc_199_2',
      prompt: 'Construct a polite inquiry asking how to register for elective modules online.',
      scenarioContext: 'Asking Chloe about module enrollment.',
      targetStructure: 'How do I register for my elective modules on the student portal?',
      wordBank: ['How do I', 'register for', 'my elective modules', 'on the student portal', 'before Friday?'],
      acceptableSolutions: [
        'How do I register for my elective modules on the student portal?',
        'How can I register for elective modules on the student portal?',
      ],
      explanation: 'Use "How do I register for..." with portal reference.',
    },
  ],
  turns: [
    {
      id: 'turn_199_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! Welcome to the University Student Hub. My name is Chloe. Are you a new undergraduate or postgraduate student, and which degree course are you taking?',
      partnerAudioText:
        'Hi there! Welcome to the University Student Hub. My name is Chloe. Are you a new undergraduate or postgraduate student, and which degree course are you taking?',
      partnerQuestionHindi:
        'नमस्ते! यूनिवर्सिटी स्टूडेंट हब में आपका स्वागत है। मेरा नाम क्लोई है। क्या आप एक नए स्नातक (undergraduate) या स्नातकोत्तर (postgraduate) छात्र हैं, और आप कौन सा डिग्री कोर्स कर रहे हैं?',
      expectedFunction: 'Introducing student status, degree level, and subject major',
      contextGoal: 'State that you are a new postgraduate student doing a Master\'s in Data Science / Computer Science',
      targetVocabulary: ['postgraduate', 'Master\'s', 'degree', 'Data Science', 'studying', 'Chloe'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello Chloe! I am a new postgraduate student, and I am studying for a Master’s degree in Data Science.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi Chloe! I am doing a Master’s in Computer Science. This is my first semester on campus.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good morning! I am an international postgraduate student enrolled in the Master of Science program in Artificial Intelligence.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'student_level',
          patterns: ['postgraduate', 'undergraduate', 'master', 'bachelor', 'student', 'new student'],
          required: true,
        },
        {
          name: 'subject_field',
          patterns: ['data science', 'computer science', 'science', 'artificial intelligence', 'engineering', 'degree', 'studying'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_199_1_master_apostrophe',
          pattern: /a masters degree/i,
          errorType: 'grammar',
          message: 'Write "a Master’s degree" or "a Bachelor’s degree" with an apostrophe-s.',
          correctionPattern: 'a Master’s degree',
        },
      ],
      remediationPractice: {
        id: 'rem_199_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I am studying for a ______ (Master’s) degree."',
        options: [
          { id: 'r1', text: 'Master’s', isCorrect: true },
          { id: 'r2', text: 'Mastering', isCorrect: false },
        ],
        correctAnswer: 'Master’s',
        explanation: 'We say "Master’s degree" or "Bachelor’s degree".',
      },
    },
    {
      id: 'turn_199_2',
      turnIndex: 2,
      partnerPrompt:
        'Data Science is a fantastic program! You will have three core modules this semester and you need to select one elective module by this Friday. Do you know which elective topic interests you, such as Web Development or Business Analytics?',
      partnerAudioText:
        'Data Science is a fantastic program! You will have three core modules this semester and you need to select one elective module by this Friday. Do you know which elective topic interests you, such as Web Development or Business Analytics?',
      partnerQuestionHindi:
        'डेटा साइंस एक शानदार प्रोग्राम है! इस सेमेस्टर में आपके पास तीन मुख्य मॉड्यूल होंगे और आपको इस शुक्रवार तक एक वैकल्पिक मॉड्यूल चुनना होगा। क्या आप जानते हैं कि आपकी रुचि किस विषय में है, जैसे वेब डेवलपमेंट या बिजनेस एनालिटिक्स?',
      expectedFunction: 'Choosing an elective module and asking how to register on the student portal',
      contextGoal: 'Choose an elective (e.g. Business Analytics or Machine Learning) and ask how to register',
      targetVocabulary: ['elective', 'module', 'Business Analytics', 'register', 'portal', 'choose'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I would like to choose Business Analytics as my elective. How do I register on the student portal?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I am interested in Business Analytics. Can I enroll in this module online through the university app?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Business Analytics sounds perfect for my career goals. Could you show me the steps to register on the student portal?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'elective_choice',
          patterns: ['business analytics', 'web development', 'machine learning', 'analytics', 'elective', 'module', 'choose'],
          required: true,
        },
        {
          name: 'portal_question',
          patterns: ['register', 'enroll', 'portal', 'online', 'how do i', 'steps', 'app'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_199_2_enroll_to',
          pattern: /enroll to the module/i,
          errorType: 'grammar',
          message: 'Say "enroll in a module" or "register for a module".',
          correctionPattern: 'register for the module',
        },
      ],
      remediationPractice: {
        id: 'rem_199_2',
        type: 'multiple_choice',
        prompt: 'Which preposition goes with "register"?',
        options: [
          { id: 'r1', text: 'register for a course', isCorrect: true },
          { id: 'r2', text: 'register on a course', isCorrect: false },
        ],
        correctAnswer: 'register for a course',
        explanation: 'We say "register for" courses or modules.',
      },
    },
    {
      id: 'turn_199_3',
      turnIndex: 3,
      partnerPrompt:
        'To register, simply log in to my.manchester.ac.uk, click "Academic Record", and submit your elective choice. Here is the campus map. Your main lectures are in Turing Hall, and the computer laboratories are in the Alan Turing Building. Can you spot them on the map?',
      partnerAudioText:
        'To register, simply log in to my.manchester.ac.uk, click "Academic Record", and submit your elective choice. Here is the campus map. Your main lectures are in Turing Hall, and the computer laboratories are in the Alan Turing Building. Can you spot them on the map?',
      partnerQuestionHindi:
        'पंजीकरण करने के लिए, बस my.manchester.ac.uk पर लॉग इन करें, "Academic Record" पर क्लिक करें और अपना वैकल्पिक विकल्प सबमिट करें। यह रहा परिसर का नक्शा। आपके मुख्य व्याख्यान ट्यूरिंग हॉल में हैं, और कंप्यूटर प्रयोगशालाएँ एलन ट्यूरिंग बिल्डिंग में हैं। क्या आप उन्हें नक्शे पर देख सकते हैं?',
      expectedFunction: 'Locating facilities on campus map and asking about library or student union location',
      contextGoal: 'Acknowledge the lecture hall location and ask where the central library or student union is situated',
      targetVocabulary: ['map', 'Turing Hall', 'laboratories', 'library', 'student union', 'located', 'building'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Yes, I see Turing Hall near the science square. Could you also point out where the main library and student union are?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I found the Alan Turing Building! Is the university library open twenty-four hours during term time?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I can see the building clearly on North Campus. Where is the student union located if I want to collect my ID card?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'map_acknowledgment',
          patterns: ['see', 'found', 'spot', 'turing hall', 'building', 'map', 'located'],
          required: true,
        },
        {
          name: 'facility_inquiry',
          patterns: ['library', 'student union', 'id card', 'open', 'point out', 'where is', 'hours'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_199_3_where_is',
          pattern: /where is located library/i,
          errorType: 'grammar',
          message: 'Say "Where is the library located?" or "Where is the library?"',
          correctionPattern: 'Where is the library located?',
        },
      ],
      remediationPractice: {
        id: 'rem_199_3',
        type: 'fill_blank',
        prompt: 'Fill in: "Where ______ (is) the student union located?"',
        options: [
          { id: 'r1', text: 'is', isCorrect: true },
          { id: 'r2', text: 'are', isCorrect: false },
        ],
        correctAnswer: 'is',
        explanation: 'Singular subject "the student union" uses "is".',
      },
    },
    {
      id: 'turn_199_4',
      turnIndex: 4,
      partnerPrompt:
        'The Main Library is right in the centre of campus, open 24/7 with your student card. The Student Union is next door on Oxford Road, where you can join clubs and societies today. Do you feel ready for your first semester?',
      partnerAudioText:
        'The Main Library is right in the centre of campus, open 24/7 with your student card. The Student Union is next door on Oxford Road, where you can join clubs and societies today. Do you feel ready for your first semester?',
      partnerQuestionHindi:
        'मुख्य पुस्तकालय परिसर के बिल्कुल केंद्र में है, जो आपके छात्र कार्ड से 24/7 खुला रहता है। स्टूडेंट यूनियन ऑक्सफोर्ड रोड पर बगल में है, जहाँ आप आज क्लब और सोसायटियों में शामिल हो सकते हैं। क्या आप अपने पहले सेमेस्टर के लिए तैयार महसूस कर रहे हैं?',
      expectedFunction: 'Expressing readiness, enthusiasm, and thanking the advisor',
      contextGoal: 'Express excitement and confidence about starting classes and thank Chloe for her guidance',
      targetVocabulary: ['ready', 'excited', 'first semester', 'thank you', 'Chloe', 'societies', 'helpful'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Yes, I feel very excited and well-prepared now. Thank you so much for your help, Chloe!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I feel ready! I am going to visit the Student Union societies fair right now. Thanks a lot for the advice.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I feel confident and looking forward to my first lecture on Monday. Thank you for guiding me through campus life!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'readiness_emotion',
          patterns: ['ready', 'excited', 'confident', 'prepared', 'looking forward', 'feel ready'],
          required: true,
        },
        {
          name: 'gratitude_closing',
          patterns: ['thank you', 'thanks', 'chloe', 'helpful', 'advice', 'guidance'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_199_4_short',
          pattern: /^(yes|ready)$/i,
          errorType: 'interaction',
          message: 'Share your enthusiasm and thank Chloe for her help.',
          correctionPattern: 'Yes, I feel very excited and ready! Thank you so much, Chloe.',
        },
      ],
      remediationPractice: {
        id: 'rem_199_4',
        type: 'multiple_choice',
        prompt: 'Which sentence concludes an advising session warmly?',
        options: [
          { id: 'r1', text: 'Yes, I feel very excited and ready! Thank you so much for your help, Chloe.', isCorrect: true },
          { id: 'r2', text: 'I am ready bye.', isCorrect: false },
        ],
        correctAnswer: 'Yes, I feel very excited and ready! Thank you so much for your help, Chloe.',
        explanation: 'Enthusiastic and polite conclusion.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 75,
  },
};
