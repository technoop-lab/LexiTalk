import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_7: ConversationDefinition = {
  id: 'conv_a1_7',
  title: 'Asking for Directions to the Pharmacy',
  cefr: 'A1',
  unitId: 'unit_a1_1',
  lessonLinks: ['lesson_a1_1_7'],
  estimatedMinutes: 5,
  scenario:
    'You are in the town square looking for a pharmacy to buy some medicine. You stop a polite local resident named Arthur to ask for directions.',
  communicativeGoals: [
    'Politely ask for directions to a city building (pharmacy, bank, supermarket, station)',
    'Understand and use prepositions of place (next to, opposite, between, near, behind)',
    'Use spatial chunks like "Go straight", "Turn left/right", "On the corner"',
    'Recycle polite greetings and gratitude from Lessons 1–6',
  ],
  canDoStatements: [
    'Can ask for directions to common public places using "Excuse me, where is the...?" (CEFR A1)',
    'Can understand basic location descriptions with prepositions of place',
    'Can thank a stranger for directions politely',
  ],
  characters: [
    {
      id: 'char_arthur',
      name: 'Arthur',
      role: 'Local Resident & City Guide',
      avatar: '🚶‍♂️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'pharmacy',
        ipa: '/ˈfɑːməsi/',
        partOfSpeech: 'noun',
        meaning: 'A shop where medicinal drugs and health products are sold',
        exampleSentence: 'Is there a pharmacy near here?',
        translations: { hi: 'दवा की दुकान / फार्मेसी' },
      },
      {
        word: 'opposite',
        ipa: '/ˈɒpəzɪt/',
        partOfSpeech: 'preposition',
        meaning: 'Facing someone or something across a street or space',
        exampleSentence: 'The bank is opposite the post office.',
        translations: { hi: 'के सामने (सड़क के उस पार)' },
      },
      {
        word: 'between',
        ipa: '/bɪˈtwiːn/',
        partOfSpeech: 'preposition',
        meaning: 'In the space separating two objects or buildings',
        exampleSentence: 'The café is between the library and the bank.',
        translations: { hi: 'के बीच में' },
      },
      {
        word: 'straight',
        ipa: '/streɪt/',
        partOfSpeech: 'adverb',
        meaning: 'In a direct line without turning',
        exampleSentence: 'Go straight down this street.',
        translations: { hi: 'सीधे' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Excuse me, where is the...?',
        functionCategory: 'Asking Location',
        exampleSentence: 'Excuse me, where is the nearest pharmacy?',
      },
      {
        phrase: 'It is next to the...',
        functionCategory: 'Describing Proximity',
        exampleSentence: 'It is next to the supermarket.',
      },
      {
        phrase: 'Go straight and turn left/right.',
        functionCategory: 'Giving Movement Directions',
        exampleSentence: 'Go straight for two blocks and turn right.',
      },
      {
        phrase: 'Is it far from here?',
        functionCategory: 'Asking Distance',
        exampleSentence: 'Is the subway station far from here?',
      },
    ],
    grammar: {
      title: 'Prepositions of Place & Directional Imperatives',
      conceptExplanation:
        'Use "Where is + [Singular Place]?" or "Is there a + [Place] near here?". Prepositions like "next to", "opposite", and "between" describe exact positions relative to other buildings.',
      patternFormula: 'Where is the + [Place]? | It is + [Preposition] + the + [Landmark]',
      contrastExamples: [
        {
          incorrect: 'The pharmacy is between the supermarket.',
          correct: 'The pharmacy is between the supermarket and the bank. / It is next to the supermarket.',
          explanation: '"Between" requires two reference points (X and Y).',
        },
        {
          incorrect: 'Excuse, where pharmacy is?',
          correct: 'Excuse me, where is the pharmacy?',
          explanation: 'Invert auxiliary verb BE before the subject in WH-questions.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'You',
        text: 'Excuse me! Is there a pharmacy near here?',
        translation: 'माफ़ कीजिए! क्या यहाँ पास में कोई फार्मेसी है?',
      },
      {
        speaker: 'Arthur',
        text: 'Yes, there is one on Green Street. It is next to the bank and opposite the park.',
        translation: 'हाँ, ग्रीन स्ट्रीट पर एक है। यह बैंक के बगल में और पार्क के सामने है।',
      },
      {
        speaker: 'You',
        text: 'Thank you! Is it far to walk?',
        translation: 'धन्यवाद! क्या वहाँ तक पैदल जाना दूर है?',
      },
      {
        speaker: 'Arthur',
        text: 'No, just walk straight for two minutes. It is on your right.',
        translation: 'नहीं, बस दो मिनट सीधे चलिए। वह आपके दाईं ओर होगी।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_7_1',
      type: 'multiple_choice',
      prompt: 'Select the correct question for asking directions:',
      options: [
        { id: 'opt_1', text: 'Excuse me, where is the pharmacy?', isCorrect: true },
        { id: 'opt_2', text: 'Excuse, where the pharmacy is it?', isCorrect: false },
        { id: 'opt_3', text: 'Where is pharmacy excuse please?', isCorrect: false },
      ],
      correctAnswer: 'Excuse me, where is the pharmacy?',
      explanation: '"Excuse me, where is the [Place]?" is the natural polite formula.',
    },
    {
      id: 'cp_a1_7_2',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "The bakery is ___ the bank and the bookstore."',
      options: [
        { id: 'opt_1', text: 'between', isCorrect: true },
        { id: 'opt_2', text: 'next', isCorrect: false },
        { id: 'opt_3', text: 'opposite to', isCorrect: false },
      ],
      correctAnswer: 'between',
      explanation: 'Use "between" when positioned in the middle of two locations.',
    },
    {
      id: 'cp_a1_7_3',
      type: 'multiple_choice',
      prompt: 'How do you tell someone to walk forward without turning?',
      options: [
        { id: 'opt_1', text: 'Go straight ahead.', isCorrect: true },
        { id: 'opt_2', text: 'Go directly straightly.', isCorrect: false },
        { id: 'opt_3', text: 'Make direct front.', isCorrect: false },
      ],
      correctAnswer: 'Go straight ahead.',
      explanation: '"Go straight ahead" is the standard direction for forward movement.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_7_1',
      scenarioContext: 'Ask for directions politely in public.',
      prompt: 'Build: "Excuse me, where is the nearest pharmacy?"',
      targetStructure: 'Polite interjection + WH-question + BE + superlative adjective + place noun',
      wordBank: ['Excuse', 'me', 'where', 'is', 'the', 'nearest', 'pharmacy', 'are', 'what', 'in'],
      acceptableSolutions: [
        'Excuse me where is the nearest pharmacy',
        'Excuse me, where is the nearest pharmacy?',
        'Excuse me where is the pharmacy?',
      ],
      explanation: 'Standard polite question to ask directions.',
    },
    {
      id: 'sc_a1_7_2',
      scenarioContext: 'Confirm the location relative to other buildings.',
      prompt: 'Build: "It is next to the supermarket and opposite the bank."',
      targetStructure: 'Subject + BE + prepositional phrase 1 + conjunction + prepositional phrase 2',
      wordBank: ['It', 'is', 'next', 'to', 'the', 'supermarket', 'and', 'opposite', 'the', 'bank', 'between', 'are'],
      acceptableSolutions: [
        'It is next to the supermarket and opposite the bank',
        'It is next to the supermarket and opposite the bank.',
        'It is opposite the bank and next to the supermarket.',
      ],
      explanation: 'Accurately uses prepositions of place "next to" and "opposite".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_7_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello there! You look like you might need some help finding a place. Are you searching for a specific building?',
      partnerAudioText: 'Hello there! You look like you might need some help finding a place. Are you searching for a specific building?',
      partnerQuestionHindi: 'नमस्ते! ऐसा लगता है कि आपको कोई जगह ढूँढने में मदद चाहिए। क्या आप किसी खास इमारत की तलाश कर रहे हैं?',
      expectedFunction: 'Polite Inquiry for Location',
      contextGoal: 'Ask Arthur where the nearest pharmacy or bank is located using "Excuse me, where is...".',
      targetVocabulary: ['pharmacy', 'bank', 'where', 'is', 'nearest', 'looking', 'for'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Excuse me Arthur, yes! Where is the nearest pharmacy around here?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hi! Is there a pharmacy or supermarket near the main square?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Excuse me, where can I find a pharmacy?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Location Inquiry',
          patterns: [
            'where is the pharmacy',
            'where is the nearest pharmacy',
            'is there a pharmacy',
            'looking for a pharmacy',
            'where is the bank',
            'find a pharmacy',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'missing_the_with_place',
          pattern: /\bwhere is pharmacy\b/i,
          errorType: 'grammar',
          message: 'Include "the" or "a" before the building name: "Where is the pharmacy?"',
          correctionPattern: 'Where is the pharmacy?',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_7_1',
        type: 'fill_blank',
        prompt: 'Choose the missing article: "Excuse me, where is ___ nearest hospital?"',
        options: [
          { id: 'opt_1', text: 'the', isCorrect: true },
          { id: 'opt_2', text: 'a', isCorrect: false },
          { id: 'opt_3', text: 'an', isCorrect: false },
        ],
        correctAnswer: 'the',
        explanation: 'Superlatives like "nearest" require the definite article "the".',
      },
    },
    {
      id: 'turn_a1_7_2',
      turnIndex: 2,
      partnerPrompt:
        'Oh, there is a great pharmacy just down the road! Walk straight for two blocks. It is on the left, next to the city bank and opposite the library. Do you know where the bank is?',
      partnerAudioText: 'Oh, there is a great pharmacy just down the road! Walk straight for two blocks. It is on the left, next to the city bank and opposite the library. Do you know where the bank is?',
      partnerQuestionHindi: 'अरे, सड़क के आगे ही एक बढ़िया फार्मेसी है! दो ब्लॉक सीधे चलिए। वह बाईं ओर, सिटी बैंक के बगल में और लाइब्रेरी के सामने है। क्या आप जानते हैं कि बैंक कहाँ है?',
      expectedFunction: 'Confirm Directions & Ask Distance',
      contextGoal: 'Acknowledge the landmark (next to bank / opposite library) and ask if it is far to walk.',
      targetVocabulary: ['straight', 'bank', 'next', 'to', 'opposite', 'far', 'walk', 'minutes'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I understand! So it is next to the bank and opposite the library. Is it far to walk?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Got it, next to the bank! How many minutes does it take to walk there?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Yes, I see the bank sign! Is it open now?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Comprehension & Distance Inquiry',
          patterns: ['next to the bank', 'opposite the library', 'is it far', 'how far', 'how many minutes', 'i understand', 'got it'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_7_2',
        type: 'multiple_choice',
        prompt: 'How do you ask about walking distance?',
        options: [
          { id: 'opt_1', text: 'Is it far to walk?', isCorrect: true },
          { id: 'opt_2', text: 'Is walking much distance is?', isCorrect: false },
          { id: 'opt_3', text: 'How is far walking?', isCorrect: false },
        ],
        correctAnswer: 'Is it far to walk?',
        explanation: '"Is it far to walk?" or "How far is it?" are standard questions.',
      },
    },
    {
      id: 'turn_a1_7_3',
      turnIndex: 3,
      partnerPrompt:
        'It is only a three-minute walk, very close! Have a great day and take care!',
      partnerAudioText: 'It is only a three-minute walk, very close! Have a great day and take care!',
      partnerQuestionHindi: 'यह केवल तीन मिनट की पैदल दूरी पर है, बहुत पास! आपका दिन शुभ हो और अपना ध्यान रखें!',
      expectedFunction: 'Polite Farewell & Gratitude',
      contextGoal: 'Thank Arthur for his clear directions and wish him a wonderful day.',
      targetVocabulary: ['thank', 'help', 'have', 'nice', 'day', 'goodbye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you very much for your help, Arthur! Have a wonderful day, goodbye.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thanks a lot! Have a great day, bye!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Appreciate the directions! Take care, bye.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing Thanks',
          patterns: ['thank you', 'thanks', 'have a wonderful day', 'have a great day', 'goodbye', 'take care', 'bye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_7_3',
        type: 'multiple_choice',
        prompt: 'Which phrase is natural when concluding an interaction with a stranger?',
        options: [
          { id: 'opt_1', text: 'Thank you for your help, have a great day!', isCorrect: true },
          { id: 'opt_2', text: 'Go away now please.', isCorrect: false },
          { id: 'opt_3', text: 'I am finished with you.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for your help, have a great day!',
        explanation: 'Courteous farewell to a helpful stranger.',
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
