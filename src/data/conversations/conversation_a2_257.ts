import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_257: ConversationDefinition = {
  id: 'conv_a2_257',
  title: 'Making Plans, Changing Plans & Finding Another Option',
  cefr: 'A2',
  unitId: 'unit_a2_18',
  lessonLinks: ['lesson_a2_18_257'],
  estimatedMinutes: 5,
  scenario:
    'You had planned to meet your friend Clara for lunch and a study session on Saturday at 1:00 PM at Central Cafe. However, an unexpected family commitment came up. You call Clara to explain why you must change the plan, apologize politely, and propose an alternative day and venue that suits both of you.',
  communicativeGoals: [
    'Make and negotiate social plans and schedule adjustments in A2 English',
    'Explain unexpected conflicts clearly: "Something unexpected came up...", "I have to attend a family dinner..."',
    'Propose alternative times and places: "How about Sunday afternoon instead?", "Would 2:00 PM work for you?"',
    'Confirm revised plans and express positive anticipation: "I look forward to seeing you then!"',
  ],
  canDoStatements: [
    'Can politely cancel or postpone an arrangement with a simple explanation',
    'Can suggest an alternative time, date, or location',
    'Can confirm a new plan and express enthusiasm',
  ],
  characters: [
    {
      id: 'char_clara_friend',
      name: 'Clara',
      role: 'Study Partner & Friend',
      avatar: '☕',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'reschedule',
        ipa: '/ˌriːˈʃedjuːl/',
        partOfSpeech: 'verb',
        meaning: 'To arrange a new date or time for a planned event or meeting',
        exampleSentence: 'Could we reschedule our lunch meeting for Sunday afternoon?',
        translations: { hi: 'नया समय निर्धारित करना / आगे बढ़ाना (रीशेड्यूल)' },
      },
      {
        word: 'commitment',
        ipa: '/kəˈmɪtmənt/',
        partOfSpeech: 'noun',
        meaning: 'An engagement, duty, or obligation that restricts one’s freedom',
        exampleSentence: 'I have an unavoidable family commitment on Saturday.',
        translations: { hi: 'प्रतिबद्धता / पूर्व-निर्धारित काम (कमिटमेंट)' },
      },
      {
        word: 'instead',
        ipa: '/ɪnˈsted/',
        partOfSpeech: 'adverb',
        meaning: 'As an alternative or substitute',
        exampleSentence: 'Can we go to the library cafe on Sunday instead?',
        translations: { hi: 'इसके बजाय (इन्स्टेड)' },
      },
      {
        word: 'convenient',
        ipa: '/kənˈviːniənt/',
        partOfSpeech: 'adjective',
        meaning: 'Fitting in well with a person’s needs, activities, or plans',
        exampleSentence: 'Is Sunday at 2:00 PM convenient for you?',
        translations: { hi: 'सुविधाजनक (कन्वीनियन्ट)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am really sorry, but something unexpected came up.',
        functionCategory: 'Polite apology and notification of conflict',
        exampleSentence: 'I am really sorry, but something unexpected came up regarding my family.',
      },
      {
        phrase: 'Would you mind if we rescheduled to...?',
        functionCategory: 'Diplomatic proposal to postpone',
        exampleSentence: 'Would you mind if we rescheduled our study session to Sunday?',
      },
      {
        phrase: 'How about meeting at... instead?',
        functionCategory: 'Suggesting an alternative venue or time',
        exampleSentence: 'How about meeting at the library cafe at 2:30 PM instead?',
      },
      {
        phrase: 'Does that time work for you?',
        functionCategory: 'Checking mutual availability',
        exampleSentence: 'Does Sunday afternoon work well for you?',
      },
    ],
    grammar: {
      title: 'Polite Rescheduling: "Would you mind if..." & Modal Suggestion Patterns',
      conceptExplanation:
        '1. Polite rescheduling request: "Would you mind if we rescheduled to + [Day / Time]?"\n2. Stating obligations: "I have to attend / I must help with..."\n3. Alternative suggestions: "How about + [Day / Time / Gerund] instead?" or "Could we meet at [Place]?"\n4. Follow-up inquiry: "Does that work for you?" or "What do you think?"',
      patternFormula: 'I am sorry, but I cannot make it on [Day] because [Reason]. Could we meet on [New Day] at [New Time] instead? Does that work for you?',
      contrastExamples: [
        {
          incorrect: 'I cancel Saturday because I am busy.',
          correct: 'I am sorry, but something came up and I need to reschedule Saturday.',
          explanation: 'Use polite social phrases when postponing plans with friends.',
        },
        {
          incorrect: 'How about to meet on Sunday?',
          correct: 'How about meeting on Sunday? / How about Sunday instead?',
          explanation: '"How about" takes a gerund (-ing) or noun phrase.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Clara',
        text: 'Hey! Are we still on for lunch and studying at Central Cafe this Saturday at one?',
        translation: 'अरे! क्या हम इस शनिवार दोपहर एक बजे सेंट्रल कैफे में दोपहर के भोजन और पढ़ाई के लिए अभी भी मिल रहे हैं?',
      },
      {
        speaker: 'Learner',
        text: 'Hey Clara! I am really sorry, but something unexpected came up and I have to help my family on Saturday. Would you mind if we rescheduled to Sunday afternoon?',
        translation: 'अरे क्लारा! मुझे वास्तव में खेद है, लेकिन कुछ अनपेक्षित काम आ गया है और मुझे शनिवार को अपने परिवार की मदद करनी है। क्या हम इसे रविवार दोपहर के लिए पुनर्निर्धारित कर सकते हैं?',
      },
      {
        speaker: 'Clara',
        text: 'No problem at all! Sunday works for me. What time and place were you thinking?',
        translation: 'कोई बात नहीं! रविवार मेरे लिए ठीक है। आप किस समय और स्थान के बारे में सोच रहे थे?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_257_1',
      type: 'fill_blank',
      prompt: 'Complete: "How about ______ (meeting / meet / to meet) at the park cafe on Sunday?"',
      options: [
        { id: 'opt_1', text: 'meeting', isCorrect: true },
        { id: 'opt_2', text: 'meet', isCorrect: false },
        { id: 'opt_3', text: 'to meet', isCorrect: false },
      ],
      correctAnswer: 'meeting',
      explanation: '"How about" is followed by the -ing form (gerund).',
    },
    {
      id: 'cp_257_2',
      type: 'multiple_choice',
      prompt: 'Which sentence is the most polite way to propose changing a scheduled time?',
      options: [
        { id: 'opt_1', text: 'Would you mind if we rescheduled our meeting to Sunday at 2:00 PM?', isCorrect: true },
        { id: 'opt_2', text: 'I am not coming Saturday you must come Sunday.', isCorrect: false },
        { id: 'opt_3', text: 'Change Saturday now because I have work.', isCorrect: false },
      ],
      correctAnswer: 'Would you mind if we rescheduled our meeting to Sunday at 2:00 PM?',
      explanation: '"Would you mind if we rescheduled..." is standard polite English.',
    },
    {
      id: 'cp_257_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [I am really sorry, / but something unexpected came up / for Saturday afternoon]',
      correctAnswer: 'I am really sorry, but something unexpected came up for Saturday afternoon',
      explanation: 'Apology chunk + contrast conjunction + past event explanation.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_257_1',
      prompt: 'Construct a sentence stating that I have an unexpected family commitment, so could we reschedule to Sunday?',
      scenarioContext: 'Calling Clara to change the plan.',
      targetStructure: 'I have an unexpected family commitment, so could we reschedule to Sunday?',
      wordBank: ['I have an unexpected', 'family commitment, so', 'could we reschedule', 'to Sunday?', 'rescheduled on', 'commitment for to'],
      acceptableSolutions: [
        'I have an unexpected family commitment, so could we reschedule to Sunday?',
        'I have a family commitment, so could we reschedule to Sunday?',
      ],
      explanation: 'Reason clause + modal request for rescheduling.',
    },
    {
      id: 'sc_257_2',
      prompt: 'Construct a sentence stating that meeting at the library cafe at 2:00 PM would be very convenient.',
      scenarioContext: 'Proposing an alternative venue.',
      targetStructure: 'Meeting at the library cafe at 2:00 PM would be very convenient.',
      wordBank: ['Meeting at the library', 'cafe at 2:00 PM', 'would be very', 'convenient.', 'meet at', 'conveniently for'],
      acceptableSolutions: [
        'Meeting at the library cafe at 2:00 PM would be very convenient.',
        'Meeting at the cafe at 2:00 PM would be very convenient.',
      ],
      explanation: 'Gerund subject phrase + modal conditional predicate.',
    },
  ],
  turns: [
    {
      id: 'turn_257_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! I am really looking forward to our study session and lunch this Saturday at 1:00 PM. Are you ready to review the exam notes at Central Cafe?',
      partnerAudioText:
        'Hi there! I am really looking forward to our study session and lunch this Saturday at 1:00 PM. Are you ready to review the exam notes at Central Cafe?',
      partnerQuestionHindi:
        'नमस्ते! मैं इस शनिवार दोपहर 1:00 बजे हमारे अध्ययन सत्र और दोपहर के भोजन के लिए वास्तव में उत्सुक हूँ। क्या आप सेंट्रल कैफे में परीक्षा के नोट्स की समीक्षा करने के लिए तैयार हैं?',
      expectedFunction: 'Apologizing politely, explaining the conflict (family event / unexpected duty), and asking to reschedule',
      contextGoal: 'Greet Clara, apologize for Saturday, explain that something unexpected came up, and ask if rescheduling is okay',
      targetVocabulary: ['Hi Clara', 'I am so sorry', 'something unexpected came up', 'family commitment', 'cannot make it on Saturday', 'would you mind if we reschedule'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffolding',
          text: 'Hi Clara! I am so sorry, but something unexpected came up. I have a family commitment on Saturday afternoon and cannot make it. Would you mind if we rescheduled our lunch and study session?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Open Production',
          text: 'Hey Clara! I apologize, but I have to help my family with an urgent matter on Saturday at one. Could we possibly reschedule our study session for another day?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_apology',
          patterns: ['hi', 'hey', 'clara', 'sorry', 'apologize', 'pardon'],
          required: true,
        },
        {
          name: 'conflict_and_reschedule_request',
          patterns: ['unexpected', 'came up', 'family', 'commitment', 'cannot make it', 'busy', 'reschedule', 'change', 'postpone'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_257_1_cannot_to_come',
          pattern: /cannot to make it|cannot to come/i,
          errorType: 'grammar',
          message: 'Modal "cannot" is followed by bare infinitive: "cannot make it" or "cannot come".',
          correctionPattern: 'I cannot make it on Saturday afternoon.',
        },
      ],
      remediationPractice: {
        id: 'rem_257_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I am sorry, but I cannot ______ (make / to make) it on Saturday."',
        options: [
          { id: 'r1', text: 'make', isCorrect: true },
          { id: 'r2', text: 'to make', isCorrect: false },
        ],
        correctAnswer: 'make',
        explanation: 'Modal "cannot" takes the base form of the verb.',
      },
    },
    {
      id: 'turn_257_2',
      turnIndex: 2,
      partnerPrompt:
        'Oh, do not worry at all! Family always comes first. When would be a good alternative time for you, and where should we meet?',
      partnerAudioText:
        'Oh, do not worry at all! Family always comes first. When would be a good alternative time for you, and where should we meet?',
      partnerQuestionHindi:
        'अरे, बिल्कुल चिंता मत करो! परिवार हमेशा पहले आता है। आपके लिए एक अच्छा वैकल्पिक समय क्या होगा, और हमें कहाँ मिलना चाहिए?',
      expectedFunction: 'Proposing an alternative day (Sunday), time (2:00 PM), and venue (Library Cafe), and asking for Clara’s feedback',
      contextGoal: 'Suggest Sunday at 2:00 PM at the quiet library cafe, explain why it is good for studying, and ask "Does that work for you?"',
      targetVocabulary: ['How about Sunday', 'around 2:00 PM', 'library cafe', 'quieter for studying', 'does that work for you', 'what do you think'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffolding',
          text: 'Thank you for understanding, Clara! How about Sunday afternoon around 2:00 PM? We could meet at the Library Cafe because it is much quieter for studying. Does that time and place work for you?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Open Production',
          text: 'How about Sunday at 2:00 PM instead? The coffee shop near the central library has large study tables and great Wi-Fi. What do you think about that?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'alternative_day_time',
          patterns: ['sunday', '2:00', '2 pm', 'afternoon', 'weekend', 'how about', 'instead'],
          required: true,
        },
        {
          name: 'venue_and_followup_question',
          patterns: ['library', 'cafe', 'coffee shop', 'quiet', 'work for you', 'what do you think', 'suit you'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_257_2_how_about_infinitive',
          pattern: /how about to meet/i,
          errorType: 'grammar',
          message: 'Say "How about meeting" or "How about Sunday at 2:00 PM".',
          correctionPattern: 'How about meeting at the Library Cafe on Sunday at 2:00 PM?',
        },
      ],
      remediationPractice: {
        id: 'rem_257_2',
        type: 'multiple_choice',
        prompt: 'Which phrase correctly suggests an alternative?',
        options: [
          { id: 'r1', text: 'How about meeting on Sunday afternoon?', isCorrect: true },
          { id: 'r2', text: 'How about to meet on Sunday afternoon?', isCorrect: false },
        ],
        correctAnswer: 'How about meeting on Sunday afternoon?',
        explanation: '"How about" requires a gerund form.',
      },
    },
    {
      id: 'turn_257_3',
      turnIndex: 3,
      partnerPrompt:
        'Sunday at 2:00 PM at the Library Cafe sounds perfect! I will bring my laptop and grammar summary sheets. Shall I save us a table by the window?',
      partnerAudioText:
        'Sunday at 2:00 PM at the Library Cafe sounds perfect! I will bring my laptop and grammar summary sheets. Shall I save us a table by the window?',
      partnerQuestionHindi:
        'रविवार दोपहर 2:00 बजे लाइब्रेरी कैफे में मिलना बिल्कुल सही लगता है! मैं अपना लैपटॉप और व्याकरण सारांश पत्र लाऊँगी। क्या मैं खिड़की के पास हमारे लिए एक टेबल आरक्षित कर लूँ?',
      expectedFunction: 'Confirming the revised plan with enthusiasm, agreeing to the table, and closing the conversation',
      contextGoal: 'Confirm Sunday at 2:00 PM, thank Clara, agree to the window table, and say you look forward to seeing her',
      targetVocabulary: ['That sounds wonderful', 'table by the window', 'I will bring my notes', 'see you on Sunday at two', 'thank you Clara'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffolding',
          text: 'Yes, please! A table by the window would be wonderful. I will bring my practice exercises and notes. Thanks so much for being flexible, Clara. See you on Sunday at 2:00 PM!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Open Production',
          text: 'That would be great! Saving a window table is a fantastic idea. I look forward to our study session on Sunday at two. Have a wonderful weekend!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'agreement_and_table',
          patterns: ['yes', 'great', 'wonderful', 'perfect', 'window', 'table', 'save', 'bring notes', 'laptop'],
          required: true,
        },
        {
          name: 'closing_and_enthusiasm',
          patterns: ['see you', 'sunday', 'two', '2:00', 'look forward', 'thanks', 'thank you', 'clara'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_257_3_look_forward_to_base',
          pattern: /look forward to see you/i,
          errorType: 'grammar',
          message: 'Say "I look forward to seeing you" (gerund after preposition "to").',
          correctionPattern: 'I look forward to seeing you on Sunday at two.',
        },
      ],
      remediationPractice: {
        id: 'rem_257_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [I look forward to / seeing you on Sunday / at the Library Cafe]',
        correctAnswer: 'I look forward to seeing you on Sunday at the Library Cafe',
        explanation: '"Look forward to" + gerund "seeing" + time and place phrases.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 75,
  },
};
