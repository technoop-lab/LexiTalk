import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_114: ConversationDefinition = {
  id: 'conv_a2_114',
  title: 'Education, Courses & Learning Experiences (used to, learn how to, good at)',
  cefr: 'A2',
  unitId: 'unit_a2_8',
  lessonLinks: ['lesson_a2_8_114'],
  estimatedMinutes: 5,
  scenario:
    'You are visiting the Oxford Continuing Education College to enroll in an evening course in digital photography and creative design. Speak with course advisor Gillian Scott about your previous study background, how you used to learn at school versus current online self-study, ask about course structure, and confirm registration prerequisites.',
  communicativeGoals: [
    'Discuss past schooling routines and habits using "used to + infinitive"',
    'Express developing skills and learning goals using "learn how to + [verb]" and "good at + [verb-ing]"',
    'Compare past traditional study methods with modern interactive online learning',
    'Inquire about course schedules, assignments, fees, and enrollment deadlines',
  ],
  canDoStatements: [
    'Can describe past educational experiences and contrast them with present study habits using "used to" (CEFR A2)',
    'Can discuss skills they want to develop and strengths they have',
    'Can ask for and understand practical information about adult training courses and evening classes',
  ],
  characters: [
    {
      id: 'char_gillian_scott',
      name: 'Gillian Scott',
      role: 'Course Admissions Advisor',
      avatar: '🎓',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'enroll',
        ipa: '/ɪnˈrəʊl/',
        partOfSpeech: 'verb',
        meaning: 'Officially register as a student on a course',
        exampleSentence: 'I would like to enroll in the digital design evening class.',
        translations: { hi: 'दाखिला लेना / नामांकित होना' },
      },
      {
        word: 'used to',
        ipa: '/juːst tuː/',
        partOfSpeech: 'modal verb',
        meaning: 'Did repeatedly in the past but no longer do now',
        exampleSentence: 'I used to study traditional art history at school.',
        translations: { hi: 'किया करता था (पुरानी आदत)' },
      },
      {
        word: 'prerequisite',
        ipa: '/ˌpriːˈrɛkwɪzɪt/',
        partOfSpeech: 'noun',
        meaning: 'A thing that is required as a prior condition for something else to happen',
        exampleSentence: 'Are there any prior prerequisites for this beginner course?',
        translations: { hi: 'अनिवार्य शर्त / पूर्व शर्त' },
      },
      {
        word: 'hands-on',
        ipa: '/ˌhændz ˈɒn/',
        partOfSpeech: 'adjective',
        meaning: 'Involving active participation rather than just theory',
        exampleSentence: 'The workshop provides plenty of hands-on practical experience.',
        translations: { hi: 'व्यावहारिक / प्रायोगिक' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I used to find programming quite difficult at school.',
        functionCategory: 'Describing Past Learning Habit',
        exampleSentence: 'I used to struggle with foreign languages.',
      },
      {
        phrase: 'I want to learn how to edit photos professionally.',
        functionCategory: 'Expressing Learning Goal (learn how to)',
        exampleSentence: 'I want to learn how to build responsive websites.',
      },
      {
        phrase: 'I am pretty good at visual composition.',
        functionCategory: 'Expressing Current Ability (good at + -ing)',
        exampleSentence: 'I am good at solving practical logic problems.',
      },
      {
        phrase: 'How many hours of coursework are required each week?',
        functionCategory: 'Inquiring About Course Workload',
        exampleSentence: 'Are the evening lectures recorded for self-study?',
      },
    ],
    grammar: {
      title: 'Habitual Past (Used to) & Expressing Competence (Good at + -ing)',
      conceptExplanation:
        '1. Used to + Base Verb: Describes past states or habits that are no longer true (e.g. "I used to write notes by hand, but now I type on a tablet").\n2. Negative & Question: "I didn\'t use to study online" / "Did you use to enjoy maths?"\n3. Competence with Prepositions: "good at / bad at + Noun or Verb-ing" (e.g., "I am good at designing graphics").\n4. Learning goals: "learn how to + Base Verb" (e.g., "learn how to code").',
      patternFormula: 'Subject + used to + [Base Verb] | Subject + be + good at + [Verb-ing / Noun]',
      contrastExamples: [
        {
          incorrect: 'I used to studying art at school.',
          correct: 'I used to study art at school. / I am used to studying art.',
          explanation: '"Used to" for past habits takes a bare infinitive ("used to study").',
        },
        {
          incorrect: 'I am good in take photos.',
          correct: 'I am good at taking photos.',
          explanation: 'Use the preposition "at" followed by a gerund (-ing) for abilities.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Gillian Scott',
        text: 'Good afternoon! Welcome to the Oxford Continuing Education Centre. Are you looking to join one of our spring evening courses?',
        translation: 'शुभ दोपहर! ऑक्सफोर्ड सतत शिक्षा केंद्र में आपका स्वागत है। क्या आप हमारे वसंतकालीन सायंकालीन पाठ्यक्रमों में से किसी एक में शामिल होना चाहते हैं?',
      },
      {
        speaker: 'You',
        text: 'Good afternoon Gillian! Yes, I want to enroll in the digital photography and design certificate. I used to study traditional drawing at school, but now I want to learn how to edit digital media professionally.',
        translation: 'शुभ दोपहर गिलियन! हाँ, मैं डिजिटल फोटोग्राफी और डिज़ाइन प्रमाणपत्र में दाखिला लेना चाहता हूँ। मैं स्कूल में पारंपरिक ड्राइंग सीखता था, लेकिन अब मैं डिजिटल मीडिया को पेशेवर रूप से संपादित करना सीखना चाहता हूँ।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_114_1',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses a past habit that has changed?',
      options: [
        { id: 'opt_1', text: 'I used to study from printed textbooks, but now I use digital tablets.', isCorrect: true },
        { id: 'opt_2', text: 'I used to studying from books.', isCorrect: false },
        { id: 'opt_3', text: 'I use to studied from books.', isCorrect: false },
      ],
      correctAnswer: 'I used to study from printed textbooks, but now I use digital tablets.',
      explanation: '"Used to + base verb" expresses past habitual state.',
    },
    {
      id: 'cp_a2_114_2',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "I am very good at ___ (edit) raw digital photos."',
      options: [
        { id: 'opt_1', text: 'editing', isCorrect: true },
        { id: 'opt_2', text: 'edit', isCorrect: false },
        { id: 'opt_3', text: 'edited', isCorrect: false },
      ],
      correctAnswer: 'editing',
      explanation: '"Good at" requires a gerund (-ing).',
    },
    {
      id: 'cp_a2_114_3',
      type: 'multiple_choice',
      prompt: 'Which phrase correctly expresses a future skill acquisition goal?',
      options: [
        { id: 'opt_1', text: 'I want to learn how to create studio lighting setups.', isCorrect: true },
        { id: 'opt_2', text: 'I want learn how creating lighting.', isCorrect: false },
        { id: 'opt_3', text: 'I am learn to how create.', isCorrect: false },
      ],
      correctAnswer: 'I want to learn how to create studio lighting setups.',
      explanation: '"Learn how to + base verb" is the correct pattern.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_114_1',
      scenarioContext: 'Describe past schooling vs present study.',
      prompt: 'Build: "I used to write essays by hand at school."',
      targetStructure: 'Subject + used to + verb + object + prepositional phrase',
      wordBank: ['I', 'used', 'to', 'write', 'essays', 'by', 'hand', 'at', 'school', 'writing', 'am'],
      acceptableSolutions: [
        'I used to write essays by hand at school',
        'I used to write essays by hand at school.',
      ],
      explanation: 'Accurate past habit sentence with "used to".',
    },
    {
      id: 'sc_a2_114_2',
      scenarioContext: 'State your learning aspiration.',
      prompt: 'Build: "I want to learn how to master digital photography."',
      targetStructure: 'Subject + want to learn how to + verb + noun phrase',
      wordBank: ['I', 'want', 'to', 'learn', 'how', 'to', 'master', 'digital', 'photography', 'learning', 'for'],
      acceptableSolutions: [
        'I want to learn how to master digital photography',
        'I want to learn how to master digital photography.',
      ],
      explanation: 'Combines intention and skill development structure.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_114_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello and welcome to the admissions office! We offer a wide range of evening certificates. What subject are you interested in studying with us this term?',
      partnerAudioText:
        'Hello and welcome to the admissions office! We offer a wide range of evening certificates. What subject are you interested in studying with us this term?',
      partnerQuestionHindi:
        'नमस्ते और प्रवेश कार्यालय में आपका स्वागत है! हम कई तरह के सायंकालीन प्रमाणपत्र प्रदान करते हैं। आप इस सत्र में हमारे साथ किस विषय का अध्ययन करने में रुचि रखते हैं?',
      expectedFunction: 'State Course Interest & Share Study Background (used to study / learn how to)',
      contextGoal:
        'State interest in the Digital Photography and Creative Design certificate; explain that you used to study traditional art at school and now want to learn how to edit digital imagery professionally.',
      targetVocabulary: ['Digital Photography and Design certificate', 'used to study traditional art at school', 'want to learn how to edit digital media', 'evening class schedule'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'Hello Gillian! I would like to enroll in the Digital Photography and Design evening course. I used to study traditional drawing at school, but now I want to learn how to work with digital cameras and lighting professionally.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Course Interest (photography / design / digital)',
          patterns: ['photography', 'design', 'digital', 'certificate', 'course', 'enroll'],
          required: true,
        },
        {
          name: 'Past vs Present (used to study / learn how to)',
          patterns: ['used to', 'school', 'learn how to', 'cameras', 'lighting', 'art', 'drawing'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'used_to_gerund_confusion',
          pattern: /\bi used to studying\b|\bi used to taking\b/i,
          errorType: 'grammar',
          message: 'When describing past habits, use "used to + base verb" (e.g. "I used to study").',
          correctionPattern: 'I used to study',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_114_1',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes a past habit at school?',
        options: [
          { id: 'opt_1', text: 'I used to attend evening art classes.', isCorrect: true },
          { id: 'opt_2', text: 'I used to attending art classes.', isCorrect: false },
          { id: 'opt_3', text: 'I use to attended classes.', isCorrect: false },
        ],
        correctAnswer: 'I used to attend evening art classes.',
        explanation: '"Used to + base verb" is the correct structure.',
      },
    },
    {
      id: 'turn_a2_114_2',
      turnIndex: 2,
      partnerPrompt:
        'That is a fantastic course! The tutor, Mr. Harrison, has 15 years of commercial studio experience. What skills or strengths do you feel you already have, and what areas do you find most challenging?',
      partnerAudioText:
        'That is a fantastic course! The tutor, Mr. Harrison, has 15 years of commercial studio experience. What skills or strengths do you feel you already have, and what areas do you find most challenging?',
      partnerQuestionHindi:
        'यह एक शानदार कोर्स है! शिक्षक, मिस्टर हैरिसन, के पास 15 वर्षों का वाणिज्यिक स्टूडियो अनुभव है। आपको क्या लगता है कि आपके पास पहले से कौन से कौशल या ताकत हैं, और आपको कौन से क्षेत्र सबसे चुनौतीपूर्ण लगते हैं?',
      expectedFunction: 'Express Strengths (good at) & Skill Challenges',
      contextGoal:
        'Explain that you are pretty good at visual framing and composition, but you find manual camera exposure settings and studio flash lighting tricky to master.',
      targetVocabulary: ['good at visual composition and creative framing', 'find manual exposure settings challenging', 'struggle with studio flash equipment', 'eager to gain hands-on practice'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'I am quite good at visual composition and choosing interesting perspectives. However, I find manual shutter speed and studio lighting challenging, so I really want practical hands-on studio guidance.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Strengths (good at / composition / perspectives)',
          patterns: ['good at', 'composition', 'framing', 'perspectives', 'creativity', 'visual'],
          required: true,
        },
        {
          name: 'Challenges (lighting / manual / shutter / exposure)',
          patterns: ['find', 'challenging', 'difficult', 'lighting', 'exposure', 'shutter', 'manual', 'studio', 'hands-on'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_114_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I am good at ___ (choose) creative angles."',
        options: [
          { id: 'opt_1', text: 'choosing', isCorrect: true },
          { id: 'opt_2', text: 'choose', isCorrect: false },
          { id: 'opt_3', text: 'chose', isCorrect: false },
        ],
        correctAnswer: 'choosing',
        explanation: 'Use the -ing form after "good at".',
      },
    },
    {
      id: 'turn_a2_114_3',
      turnIndex: 3,
      partnerPrompt:
        'The course includes eight weeks of hands-on studio sessions every Tuesday from 6:30 PM to 8:30 PM, plus weekend field assignments. Are there any specific prerequisites or schedule questions you have before we look at the enrollment form?',
      partnerAudioText:
        'The course includes eight weeks of hands-on studio sessions every Tuesday from 6:30 PM to 8:30 PM, plus weekend field assignments. Are there any specific prerequisites or schedule questions you have before we look at the enrollment form?',
      partnerQuestionHindi:
        'इस पाठ्यक्रम में प्रत्येक मंगलवार को शाम 6:30 से 8:30 बजे तक व्यावहारिक स्टूडियो सत्रों के आठ सप्ताह शामिल हैं, साथ ही सप्ताहांत फील्ड असाइनमेंट भी हैं। क्या नामांकन फॉर्म देखने से पहले आपके पास कोई विशिष्ट पूर्वापेक्षाएँ या समय सारिणी संबंधी प्रश्न हैं?',
      expectedFunction: 'Inquire About Equipment Prerequisites & Course Assessment',
      contextGoal:
        'Ask whether students need to bring their own DSLR camera or if the college provides studio lenses, and ask how final coursework projects are graded.',
      targetVocabulary: ['do we need to bring our own DSLR camera', 'does the college supply studio lighting gear', 'how are the weekly assignments assessed', 'certificate of completion'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'Do students need to bring their own DSLR camera to class, or does the college provide studio equipment? Also, could you explain how our practical portfolio is assessed at the end of the term?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Equipment Inquiry (camera / dslr / equipment / lenses / gear)',
          patterns: ['camera', 'dslr', 'bring', 'equipment', 'lenses', 'gear', 'provide'],
          required: true,
        },
        {
          name: 'Assessment Inquiry (portfolio / graded / assessed / assignments)',
          patterns: ['portfolio', 'assessed', 'graded', 'assignments', 'certificate', 'end of term', 'explain'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_114_3',
        type: 'multiple_choice',
        prompt: 'Which question correctly inquires about equipment requirements?',
        options: [
          { id: 'opt_1', text: 'Do we need to bring our own camera to each session?', isCorrect: true },
          { id: 'opt_2', text: 'Is we must bring camera?', isCorrect: false },
          { id: 'opt_3', text: 'Camera bring necessary?', isCorrect: false },
        ],
        correctAnswer: 'Do we need to bring our own camera to each session?',
        explanation: 'Accurate auxiliary question structure.',
      },
    },
    {
      id: 'turn_a2_114_4',
      turnIndex: 4,
      partnerPrompt:
        'You can use your own camera or borrow a college Nikon body, and the portfolio is assessed through constructive peer reviews and a final gallery exhibition! Here is the registration link and student portal login. We start on Tuesday, April 8th!',
      partnerAudioText:
        'You can use your own camera or borrow a college Nikon body, and the portfolio is assessed through constructive peer reviews and a final gallery exhibition! Here is the registration link and student portal login. We start on Tuesday, April 8th!',
      partnerQuestionHindi:
        'आप अपने कैमरे का उपयोग कर सकते हैं या कॉलेज का निकॉन कैमरा उधार ले सकते हैं, और पोर्टफोलियो का मूल्यांकन रचनात्मक साथियों की समीक्षा और एक अंतिम गैलरी प्रदर्शनी के माध्यम से किया जाता है! यहाँ पंजीकरण लिंक और छात्र पोर्टल लॉगिन है। हम मंगलवार, 8 अप्रैल से शुरू कर रहे हैं!',
      expectedFunction: 'Express Excitement, Finalize Enrollment & Conclude Interaction',
      contextGoal:
        'Express enthusiasm for the gallery exhibition; confirm you will complete the online registration form tonight and look forward to starting on April 8th.',
      targetVocabulary: ['excited about the final gallery exhibition', 'fill in the registration form tonight', 'look forward to the first class on April 8th', 'thank you Gillian'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'The gallery exhibition sounds amazing! I will complete the online registration form tonight and pay the deposit. Thank you so much Gillian for all your helpful advice—I look forward to starting on April 8th!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Commitment & Thanks',
          patterns: ['gallery', 'register', 'registration', 'tonight', 'april 8', 'look forward', 'thank you', 'gillian', 'advice'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_114_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I will complete the registration form ___ tonight."',
        options: [
          { id: 'opt_1', text: 'online', isCorrect: true },
          { id: 'opt_2', text: 'in line', isCorrect: false },
          { id: 'opt_3', text: 'onweb', isCorrect: false },
        ],
        correctAnswer: 'online',
        explanation: '"Online" is the standard adverb.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 75,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 70,
  },
};
