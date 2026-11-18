import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_54: ConversationDefinition = {
  id: 'conv_a1_54',
  title: 'Future Plans, Intentions, Goals & Upcoming Arrangements',
  cefr: 'A1',
  unitId: 'unit_a1_4',
  lessonLinks: ['lesson_a1_4_54'],
  estimatedMinutes: 5,
  scenario:
    'You meet your career coach Daniel for a monthly progress review. You talk about your plans and intentions for the next six months: improving your English speaking fluency, starting a web design course, preparing for an international certification exam, and traveling abroad.',
  communicativeGoals: [
    'Express future intentions, personal goals, and planned schedules using "be going to + [base verb]" and "plan to + [base verb]"',
    'Differentiate between premeditated intentions ("I am going to study") and definite scheduled arrangements ("I am starting on Monday")',
    'Use future time markers accurately ("next month", "in six months", "this coming autumn", "next weekend")',
    'Ask about future milestones and answer questions with confidence',
  ],
  canDoStatements: [
    'Can talk about plans, intentions, and personal goals for the near future (CEFR A1.2)',
    'Can use "be going to" and future time markers (next week, next month, in two years)',
    'Can explain reasons for personal decisions in simple terms',
  ],
  characters: [
    {
      id: 'char_daniel_coach',
      name: 'Daniel',
      role: 'Career & Learning Coach',
      avatar: '🎯',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'intention',
        ipa: '/ɪnˈtɛnʃən/',
        partOfSpeech: 'noun',
        meaning: 'A thing intended; an aim or plan',
        exampleSentence: 'My intention is to complete the course before December.',
        translations: { hi: 'इरादा / उद्देश्य' },
      },
      {
        word: 'certificate',
        ipa: '/sərˈtɪfɪkət/',
        partOfSpeech: 'noun',
        meaning: 'An official document attesting a certain fact, qualification, or achievement',
        exampleSentence: 'I am going to earn an English language certificate this autumn.',
        translations: { hi: 'प्रमाणपत्र / सर्टिफिकेट' },
      },
      {
        word: 'career',
        ipa: '/kəˈrɪər/',
        partOfSpeech: 'noun',
        meaning: 'An occupation undertaken for a significant period of a person\'s life with opportunities for progress',
        exampleSentence: 'She wants to start a new career in digital graphic design.',
        translations: { hi: 'कैरियर / व्यवसाय' },
      },
      {
        word: 'improve',
        ipa: '/ɪmˈpruːv/',
        partOfSpeech: 'verb',
        meaning: 'Make or become better in quality, condition, or skill',
        exampleSentence: 'I am going to practice speaking every day to improve my fluency.',
        translations: { hi: 'सुधारना / बेहतर बनाना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am going to start...',
        functionCategory: 'Future Intention',
        exampleSentence: 'I am going to start a web development course next month.',
      },
      {
        phrase: 'My main goal is to...',
        functionCategory: 'Stating Goals',
        exampleSentence: 'My main goal is to pass the language exam with a high score.',
      },
      {
        phrase: 'In the next six months, I plan to...',
        functionCategory: 'Future Timeline',
        exampleSentence: 'In the next six months, I plan to finish my portfolio and apply for jobs.',
      },
      {
        phrase: 'I am preparing for...',
        functionCategory: 'Active Preparation',
        exampleSentence: 'I am preparing for an international certification test.',
      },
    ],
    grammar: {
      title: 'Expressing Future Plans: be going to + [Base Verb] & Future Time Expressions',
      conceptExplanation:
        'Use "be going to + [base verb]" (am/is/are going to) for intentions decided before the moment of speaking. Combine with future time expressions like "next week", "next month", "in October", "soon". Use "plan to + [base verb]" as a natural synonym.',
      patternFormula: 'Subject + am / is / are + going to + [Base Verb] + [Future Time Expression]',
      contrastExamples: [
        {
          incorrect: 'Next month I going to start my course.',
          correct: 'Next month I am going to start my course.',
          explanation: 'Never omit the auxiliary "am/is/are" with "going to".',
        },
        {
          incorrect: 'I am going to studying every day.',
          correct: 'I am going to study every day.',
          explanation: '"be going to" is followed by the base verb "study", not "-ing".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Daniel',
        text: 'Hello! Welcome to our monthly goal review. Let us look ahead: what are your major plans for the next six months?',
        translation: 'नमस्ते! हमारी मासिक लक्ष्य समीक्षा में आपका स्वागत है। आइए आगे देखें: अगले छह महीनों के लिए आपकी प्रमुख योजनाएँ क्या हैं?',
      },
      {
        speaker: 'You',
        text: 'Hello Daniel! I am going to enroll in a web design program next month, and I plan to practice English daily to pass my exam.',
        translation: 'नमस्ते डैनियल! मैं अगले महीने एक वेब डिज़ाइन कार्यक्रम में दाखिला लेने जा रहा हूँ, और अपनी परीक्षा पास करने के लिए रोज़ाना अंग्रेज़ी का अभ्यास करने की योजना बना रहा हूँ।',
      },
      {
        speaker: 'Daniel',
        text: 'Those are ambitious goals! How are you going to balance studying and your daily routine?',
        translation: 'वे महत्वाकांक्षी लक्ष्य हैं! आप पढ़ाई और अपनी दैनिक दिनचर्या को कैसे संतुलित करने जा रहे हैं?',
      },
      {
        speaker: 'You',
        text: 'I am going to study for one hour every morning before breakfast, and do practical assignments on Saturdays.',
        translation: 'मैं नाश्ते से पहले हर सुबह एक घंटे अध्ययन करने जा रहा हूँ, और शनिवार को व्यावहारिक कार्य करने जा रहा हूँ।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_54_1',
      type: 'fill_blank',
      prompt: 'Complete the future intention: "I ___ going to learn graphic design next month."',
      options: [
        { id: 'opt_1', text: 'am', isCorrect: true },
        { id: 'opt_2', text: 'is', isCorrect: false },
        { id: 'opt_3', text: 'are', isCorrect: false },
      ],
      correctAnswer: 'am',
      explanation: 'Subject "I" pairs with auxiliary verb "am" in "I am going to".',
    },
    {
      id: 'cp_a1_54_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses a future plan with "going to"?',
      options: [
        { id: 'opt_1', text: 'She is going to take an exam in November.', isCorrect: true },
        { id: 'opt_2', text: 'She going to take an exam in November.', isCorrect: false },
        { id: 'opt_3', text: 'She is going to taking an exam in November.', isCorrect: false },
      ],
      correctAnswer: 'She is going to take an exam in November.',
      explanation: '"She is going to + base verb (take)" is grammatically correct.',
    },
    {
      id: 'cp_a1_54_3',
      type: 'multiple_choice',
      prompt: 'Choose the sentence with correct future time markers:',
      options: [
        { id: 'opt_1', text: 'In six months, we are going to move to a new apartment.', isCorrect: true },
        { id: 'opt_2', text: 'Last six months, we are going to move to a new apartment.', isCorrect: false },
        { id: 'opt_3', text: 'Yesterday, we are going to move to a new apartment.', isCorrect: false },
      ],
      correctAnswer: 'In six months, we are going to move to a new apartment.',
      explanation: '"In six months" points to a future timeframe.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_54_1',
      scenarioContext: 'State your intention to study for a certification exam.',
      prompt: 'Build: "I am going to pass my certification exam this autumn."',
      targetStructure: 'Subject + am going to + base verb + object + time expression',
      wordBank: ['I', 'am', 'going', 'to', 'pass', 'my', 'certification', 'exam', 'this', 'autumn', 'passing', 'will'],
      acceptableSolutions: [
        'I am going to pass my certification exam this autumn',
        'I am going to pass my certification exam this autumn.',
      ],
      explanation: 'Future plan with "be going to + pass".',
    },
    {
      id: 'sc_a1_54_2',
      scenarioContext: 'State your study routine plan.',
      prompt: 'Build: "I plan to study English every morning before work."',
      targetStructure: 'Subject + plan to + base verb + object + frequency + time clause',
      wordBank: ['I', 'plan', 'to', 'study', 'English', 'every', 'morning', 'before', 'work', 'studying', 'at'],
      acceptableSolutions: [
        'I plan to study English every morning before work',
        'I plan to study English every morning before work.',
      ],
      explanation: 'Formula with "plan to + base verb".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_54_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello! Welcome to our goal-setting session. As we look at the next six months, what are your two biggest personal and learning goals?',
      partnerAudioText:
        'Hello! Welcome to our goal-setting session. As we look at the next six months, what are your two biggest personal and learning goals?',
      partnerQuestionHindi:
        'नमस्ते! हमारे लक्ष्य-निर्धारण सत्र में आपका स्वागत है। जैसे ही हम अगले छह महीनों को देखते हैं, आपके दो सबसे बड़े व्यक्तिगत और सीखने के लक्ष्य क्या हैं?',
      expectedFunction: 'State Future Goals Using "be going to" / "plan to"',
      contextGoal:
        'State that you are going to improve your English speaking fluency and start a new online professional course next month.',
      targetVocabulary: ['am going to improve', 'plan to start', 'next month', 'in the next six months', 'speaking fluency'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hello Daniel! In the next six months, I am going to improve my English speaking fluency, and I plan to start a new web design certification course next month.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I am going to improve my English fluency, and I plan to start an online course next month.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I’m going to improve my English and start a new course next month!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Future Goals & Timeline',
          patterns: [
            'going to improve',
            'plan to start',
            'english',
            'course',
            'next month',
            'six months',
            'fluency',
            'certification',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'i_going_error',
          pattern: /\bi going to start\b/i,
          errorType: 'grammar',
          message: 'Say "I am going to start", not "I going to".',
          correctionPattern: 'I am going to start',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_54_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "I ___ going to study hard tonight."',
        options: [
          { id: 'opt_1', text: 'am', isCorrect: true },
          { id: 'opt_2', text: 'is', isCorrect: false },
          { id: 'opt_3', text: 'be', isCorrect: false },
        ],
        correctAnswer: 'am',
        explanation: 'Subject "I" takes "am".',
      },
    },
    {
      id: 'turn_a1_54_2',
      turnIndex: 2,
      partnerPrompt:
        'Those are clear and measurable goals! How are you going to structure your weekly schedule to ensure you make consistent progress?',
      partnerAudioText:
        'Those are clear and measurable goals! How are you going to structure your weekly schedule to ensure you make consistent progress?',
      partnerQuestionHindi:
        'वे स्पष्ट और मापने योग्य लक्ष्य हैं! निरंतर प्रगति सुनिश्चित करने के लिए आप अपने साप्ताहिक कार्यक्रम की संरचना कैसे करने जा रहे हैं?',
      expectedFunction: 'Describe Future Routine & Time Allocation',
      contextGoal:
        'Explain that you are going to study 45 minutes every morning and practice conversation with partners twice a week.',
      targetVocabulary: ['am going to study', 'every morning', 'twice a week', 'practice conversation', 'schedule'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I am going to study for forty-five minutes every single morning before work, and I plan to practice live conversation with language partners twice a week.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I will study every morning for 45 minutes, and I am going to practice speaking twice a week.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I’m going to study 45 minutes each morning and speak twice a week.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Schedule & Routine',
          patterns: [
            'going to study',
            'every morning',
            'forty-five minutes',
            '45 minutes',
            'twice a week',
            'practice',
            'schedule',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_54_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes a planned routine?',
        options: [
          { id: 'opt_1', text: 'I am going to practice speaking twice a week.', isCorrect: true },
          { id: 'opt_2', text: 'I going to practicing speaking twice week.', isCorrect: false },
          { id: 'opt_3', text: 'I am practice twice a week tomorrow.', isCorrect: false },
        ],
        correctAnswer: 'I am going to practice speaking twice a week.',
        explanation: '"am going to + base verb" expresses future routine commitment.',
      },
    },
    {
      id: 'turn_a1_54_3',
      turnIndex: 3,
      partnerPrompt:
        'Consistency in the mornings is proven to build strong habits! When you complete the certificate exam in autumn, how are you going to celebrate your success?',
      partnerAudioText:
        'Consistency in the mornings is proven to build strong habits! When you complete the certificate exam in autumn, how are you going to celebrate your success?',
      partnerQuestionHindi:
        'सुबह की निरंतरता मजबूत आदतें बनाने के लिए सिद्ध होती है! जब आप शरद ऋतु में प्रमाणपत्र परीक्षा पूरी कर लेंगे, तो आप अपनी सफलता का जश्न कैसे मनाने जा रहे हैं?',
      expectedFunction: 'Describe Future Celebration / Travel Plan',
      contextGoal:
        'State that you are going to take a vacation abroad (e.g. to Spain or Japan) and celebrate with family and friends.',
      targetVocabulary: ['am going to travel', 'take a vacation', 'celebrate with friends', 'in autumn', 'abroad'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'When I pass the exam, I am going to travel abroad for a ten-day holiday, and I plan to celebrate with a special dinner with my family and friends!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I am going to take a vacation abroad and celebrate with my family.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I’m going to travel abroad and celebrate with friends!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Celebration & Travel',
          patterns: [
            'going to travel',
            'vacation',
            'celebrate',
            'dinner',
            'family',
            'friends',
            'abroad',
            'holiday',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_54_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We are going to ___ a celebratory dinner."',
        options: [
          { id: 'opt_1', text: 'have', isCorrect: true },
          { id: 'opt_2', text: 'having', isCorrect: false },
          { id: 'opt_3', text: 'had', isCorrect: false },
        ],
        correctAnswer: 'have',
        explanation: 'Base verb "have" follows "going to".',
      },
    },
    {
      id: 'turn_a1_54_4',
      turnIndex: 4,
      partnerPrompt:
        'That is a fantastic reward to look forward to! I have written down your six-month roadmap. We will meet again next month on the 15th to check your progress. You have everything you need to succeed!',
      partnerAudioText:
        'That is a fantastic reward to look forward to! I have written down your six-month roadmap. We will meet again next month on the 15th to check your progress. You have everything you need to succeed!',
      partnerQuestionHindi:
        'यह आगे देखने के लिए एक शानदार इनाम है! मैंने आपका छह महीने का रोडमैप लिख लिया है। हम आपकी प्रगति की जाँच करने के लिए अगले महीने 15 तारीख को फिर मिलेंगे। आपके पास सफल होने के लिए आवश्यक सब कुछ है!',
      expectedFunction: 'Confirm Next Meeting & Conclude Positively',
      contextGoal:
        'Thank Daniel for his motivation and guidance, and confirm you will see him on the 15th of next month.',
      targetVocabulary: ['thank you Daniel', 'motivation and guidance', 'see you on the 15th', 'looking forward to it', 'goodbye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you so much for your great guidance and motivation, Daniel! I am very excited, and I will see you on the 15th of next month. Have a wonderful week!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thank you for the advice, Daniel! I look forward to our meeting on the 15th.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Thanks Daniel! See you on the 15th of next month!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Meeting Confirmation',
          patterns: [
            'thank you',
            'thanks',
            'see you on the 15th',
            'see you next month',
            'guidance',
            'looking forward',
            'goodbye',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_54_4',
        type: 'multiple_choice',
        prompt: 'Which sentence confirms a scheduled appointment politely?',
        options: [
          { id: 'opt_1', text: 'Thank you Daniel! I will see you on the 15th of next month.', isCorrect: true },
          { id: 'opt_2', text: 'I go away meeting later.', isCorrect: false },
          { id: 'opt_3', text: '15th is bye now.', isCorrect: false },
        ],
        correctAnswer: 'Thank you Daniel! I will see you on the 15th of next month.',
        explanation: 'Polite and clear confirmation.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 2,
    targetVocabularyCoveragePct: 70,
  },
};
