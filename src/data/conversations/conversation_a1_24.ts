import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_24: ConversationDefinition = {
  id: 'conv_a1_24',
  title: 'Discussing the Weekend Weather & Picnic Plans',
  cefr: 'A1',
  unitId: 'unit_a1_2',
  lessonLinks: ['lesson_a1_2_24'],
  estimatedMinutes: 5,
  scenario:
    'You and your friend Maya are planning a weekend picnic in the city park. You discuss the weather forecast, temperature, and what clothes to bring.',
  communicativeGoals: [
    'Ask and describe weather conditions ("What is the weather like?", "It is sunny and warm / rainy")',
    'Talk about temperatures and seasons (spring, summer, autumn, winter, degrees, cold, hot)',
    'Suggest appropriate clothing or accessories based on the weather (bring an umbrella, wear a jacket)',
    'Agree on an outdoor plan based on the forecast',
  ],
  canDoStatements: [
    'Can describe current and forecasted weather conditions using basic adjectives (CEFR A1)',
    'Can ask "What is the weather like today/tomorrow?"',
    'Can make simple outdoor plans adapted to weather conditions',
  ],
  characters: [
    {
      id: 'char_maya',
      name: 'Maya',
      role: 'Outdoor Activity Friend',
      avatar: '🧗‍♀️',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'weather',
        ipa: '/ˈwɛðər/',
        partOfSpeech: 'noun',
        meaning: 'The state of the atmosphere at a particular place and time regarding heat, cloudiness, dryness, sunshine, wind, rain, etc.',
        exampleSentence: 'What is the weather like in your city today?',
        translations: { hi: 'मौसम' },
      },
      {
        word: 'sunny',
        ipa: '/ˈsʌni/',
        partOfSpeech: 'adjective',
        meaning: 'Bright with sunshine',
        exampleSentence: 'Saturday is going to be sunny and warm.',
        translations: { hi: 'धूप वाला' },
      },
      {
        word: 'rainy',
        ipa: '/ˈreɪni/',
        partOfSpeech: 'adjective',
        meaning: 'Having a lot of rain',
        exampleSentence: 'Take an umbrella because it is rainy outside.',
        translations: { hi: 'बरसाती / बारिश वाला' },
      },
      {
        word: 'umbrella',
        ipa: '/ʌmˈbrɛlə/',
        partOfSpeech: 'noun',
        meaning: 'A folding canopy supported on a stick, used as protection against rain',
        exampleSentence: 'Do you have an umbrella in your bag?',
        translations: { hi: 'छाता' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'What is the weather like?',
        functionCategory: 'Weather Inquiry',
        exampleSentence: 'What is the weather like this weekend?',
      },
      {
        phrase: 'It is sunny and warm.',
        functionCategory: 'Weather Description',
        exampleSentence: 'It is sunny and warm, perfect for a picnic.',
      },
      {
        phrase: 'It might rain later.',
        functionCategory: 'Weather Possibility',
        exampleSentence: 'Look at the gray clouds, it might rain later.',
      },
      {
        phrase: 'Let\'s bring a warm jacket.',
        functionCategory: 'Clothing Recommendation',
        exampleSentence: 'Let\'s bring a warm jacket just in case it gets cold.',
      },
    ],
    grammar: {
      title: 'Describing Weather with "It is + Adjective" & Weather Questions',
      conceptExplanation:
        'Always use the impersonal pronoun "It is" to describe weather conditions (e.g. "It is sunny", "It is raining", "It is cold"). To ask about weather, use "What is the weather like?" or "How is the weather?".',
      patternFormula: 'It is + [Adjective] (e.g., sunny, rainy, windy, cloudy, hot, cold)',
      contrastExamples: [
        {
          incorrect: 'The weather is having sun today.',
          correct: 'It is sunny today. / The weather is sunny.',
          explanation: 'Use "It is sunny" with an adjective, not "having sun".',
        },
        {
          incorrect: 'How is the weather like?',
          correct: 'What is the weather like? / How is the weather?',
          explanation: 'Never combine "How" and "like" in weather questions; use either "What... like?" or "How...".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Maya',
        text: 'Hey! Are we still having our park picnic on Saturday? What is the weather like according to the forecast?',
        translation: 'अरे! क्या हम शनिवार को पार्क में पिकनिक मना रहे हैं? मौसम के पूर्वानुमान के अनुसार मौसम कैसा है?',
      },
      {
        speaker: 'You',
        text: 'The forecast says it is going to be sunny and warm, around twenty-two degrees!',
        translation: 'पूर्वानुमान कहता है कि मौसम धूप वाला और गर्म रहेगा, लगभग बाईस डिग्री!',
      },
      {
        speaker: 'Maya',
        text: 'That sounds perfect for eating outdoors! Should we bring sunglasses and a blanket?',
        translation: 'यह बाहर खाने के लिए एकदम सही लग रहा है! क्या हमें धूप का चश्मा और कंबल लाना चाहिए?',
      },
      {
        speaker: 'You',
        text: 'Yes, definitely! And let\'s bring a light jacket too because it might get breezy in the evening.',
        translation: 'हाँ, बिल्कुल! और एक हल्की जैकेट भी लाते हैं क्योंकि शाम को ठंडी हवा चल सकती है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_24_1',
      type: 'fill_blank',
      prompt: 'Complete the question: "What is the weather ___ today?"',
      options: [
        { id: 'opt_1', text: 'like', isCorrect: true },
        { id: 'opt_2', text: 'as', isCorrect: false },
        { id: 'opt_3', text: 'for', isCorrect: false },
      ],
      correctAnswer: 'like',
      explanation: '"What is the weather like?" is the standard question.',
    },
    {
      id: 'cp_a1_24_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes a hot, bright day?',
      options: [
        { id: 'opt_1', text: 'It is sunny and hot today.', isCorrect: true },
        { id: 'opt_2', text: 'It makes sun hot today.', isCorrect: false },
        { id: 'opt_3', text: 'Weather has sunny hot.', isCorrect: false },
      ],
      correctAnswer: 'It is sunny and hot today.',
      explanation: 'Use impersonal "It is + [adjectives]".',
    },
    {
      id: 'cp_a1_24_3',
      type: 'multiple_choice',
      prompt: 'If the sky is dark and drops are falling, you should carry:',
      options: [
        { id: 'opt_1', text: 'an umbrella', isCorrect: true },
        { id: 'opt_2', text: 'sunglasses', isCorrect: false },
        { id: 'opt_3', text: 'swimming goggles', isCorrect: false },
      ],
      correctAnswer: 'an umbrella',
      explanation: 'An umbrella protects against rain.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_24_1',
      scenarioContext: 'Ask about the weather forecast.',
      prompt: 'Build: "What is the weather like this weekend?"',
      targetStructure: 'WH-question + be + subject + like + time adverbial',
      wordBank: ['What', 'is', 'the', 'weather', 'like', 'this', 'weekend', 'how', 'does', 'it'],
      acceptableSolutions: [
        'What is the weather like this weekend',
        'What is the weather like this weekend?',
      ],
      explanation: 'Standard weather inquiry question.',
    },
    {
      id: 'sc_a1_24_2',
      scenarioContext: 'Describe warm weather and suggest bringing a picnic blanket.',
      prompt: 'Build: "It is sunny and warm today. Let\'s bring a blanket."',
      targetStructure: 'Impersonal weather statement + cohort imperative',
      wordBank: ['It', 'is', 'sunny', 'and', 'warm', 'today', 'Let\'s', 'bring', 'a', 'blanket', 'has', 'weather'],
      acceptableSolutions: [
        'It is sunny and warm today Let\'s bring a blanket',
        'It is sunny and warm today. Let\'s bring a blanket.',
      ],
      explanation: 'Natural combination of weather description and activity proposal.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_24_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi! I am really looking forward to our Saturday picnic. Have you checked the weather forecast? What is the weather like?',
      partnerAudioText:
        'Hi! I am really looking forward to our Saturday picnic. Have you checked the weather forecast? What is the weather like?',
      partnerQuestionHindi:
        'नमस्ते! मैं शनिवार की हमारी पिकनिक का बेसब्री से इंतज़ार कर रही हूँ। क्या आपने मौसम का पूर्वानुमान देखा है? मौसम कैसा है?',
      expectedFunction: 'Report Weather Forecast',
      contextGoal:
        'Describe the weekend weather using "It is..." (e.g. sunny, warm, clear, twenty degrees).',
      targetVocabulary: ['weather', 'sunny', 'warm', 'clear', 'forecast', 'it is'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'The forecast looks great! It is going to be sunny and warm on Saturday.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'It is sunny and twenty-two degrees. Perfect for a picnic!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Clear skies and warm weather all afternoon!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Weather Condition',
          patterns: ['sunny', 'warm', 'clear', 'nice weather', 'great weather', 'it is going to be', 'twenty degrees', 'sun'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'how_is_weather_like_error',
          pattern: /\bhow is the weather like\b/i,
          errorType: 'grammar',
          message: 'Say "What is the weather like?" or "How is the weather?", not both combined.',
          correctionPattern: 'What is the weather like...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_24_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "___ very warm and sunny outside."',
        options: [
          { id: 'opt_1', text: 'It is', isCorrect: true },
          { id: 'opt_2', text: 'There has', isCorrect: false },
          { id: 'opt_3', text: 'Weather makes', isCorrect: false },
        ],
        correctAnswer: 'It is',
        explanation: 'Use "It is" for weather descriptions.',
      },
    },
    {
      id: 'turn_a1_24_2',
      turnIndex: 2,
      partnerPrompt:
        'That sounds lovely! But do you think the temperature will drop in the evening, or might it get windy?',
      partnerAudioText:
        'That sounds lovely! But do you think the temperature will drop in the evening, or might it get windy?',
      partnerQuestionHindi:
        'यह बहुत अच्छा लग रहा है! लेकिन क्या आपको लगता है कि शाम को तापमान गिर जाएगा, या हवा चल सकती है?',
      expectedFunction: 'Discuss Temperature & Clothing Advice',
      contextGoal:
        'Advise bringing a jacket or sweater because the evening might be cooler or windy.',
      targetVocabulary: ['jacket', 'sweater', 'cold', 'windy', 'cool', 'bring'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes, it might get cool later. We should bring a light jacket or sweater.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'It could be breezy in the evening. Let\'s wear warm layers.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Good point! I will pack a jacket just in case.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Temperature / Clothing Advice',
          patterns: ['jacket', 'sweater', 'bring a jacket', 'get cool', 'get cold', 'windy', 'warm clothes', 'pack a jacket'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_24_2',
        type: 'multiple_choice',
        prompt: 'Which sentence offers natural clothing advice for cool evenings?',
        options: [
          { id: 'opt_1', text: 'Let\'s bring a light jacket for the evening.', isCorrect: true },
          { id: 'opt_2', text: 'Make bring jacket because cool.', isCorrect: false },
          { id: 'opt_3', text: 'We are take coats for cold weatherings.', isCorrect: false },
        ],
        correctAnswer: 'Let\'s bring a light jacket for the evening.',
        explanation: '"Let\'s bring..." is the natural suggestion pattern.',
      },
    },
    {
      id: 'turn_a1_24_3',
      turnIndex: 3,
      partnerPrompt:
        'Awesome plan. I will bring some fruit, sandwiches, and a big blanket. What time should we meet at the park entrance?',
      partnerAudioText:
        'Awesome plan. I will bring some fruit, sandwiches, and a big blanket. What time should we meet at the park entrance?',
      partnerQuestionHindi:
        'शानदार योजना। मैं कुछ फल, सैंडविच और एक बड़ा कंबल लाऊंगी। हमें पार्क के गेट पर कितने बजे मिलना चाहिए?',
      expectedFunction: 'Agree on Meeting Time & Closing',
      contextGoal:
        'Propose a specific time (e.g. at 1:00 PM / 2:00 PM), confirm enthusiasm, and say see you then.',
      targetVocabulary: ['meet', 'at', 'o\'clock', 'see you', 'sounds good'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Let\'s meet at 1:00 PM at the main gate. Sounds like fun, see you on Saturday!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'How about 2:00 PM? I will see you there, Maya!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'One o\'clock works great. Looking forward to it! See you then.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Meeting Time',
          patterns: ['at 1', 'at 2', 'at 12', 'at 1:00', 'at 2:00', 'one o\'clock', 'two o\'clock', 'meet at'],
          required: true,
        },
        {
          name: 'Closing / Enthusiasm',
          patterns: ['see you', 'see you saturday', 'sounds good', 'looking forward', 'see you then', 'bye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_24_3',
        type: 'multiple_choice',
        prompt: 'Which preposition is used for setting meeting times?',
        options: [
          { id: 'opt_1', text: 'at 1:30 PM', isCorrect: true },
          { id: 'opt_2', text: 'on 1:30 PM', isCorrect: false },
          { id: 'opt_3', text: 'in 1:30 PM', isCorrect: false },
        ],
        correctAnswer: 'at 1:30 PM',
        explanation: 'Use "at" with clock times.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 70,
  },
};
