import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_20: ConversationDefinition = {
  id: 'conv_a1_20',
  title: 'Asking for Street Directions to the Central Library',
  cefr: 'A1',
  unitId: 'unit_a1_2',
  lessonLinks: ['lesson_a1_2_20'],
  estimatedMinutes: 5,
  scenario:
    'You are walking in the city center and need to find the Central Library. You stop a friendly local pedestrian named George to ask for directions.',
  communicativeGoals: [
    'Politely stop a stranger using "Excuse me, where is...?" or "How do I get to...?"',
    'Understand and confirm imperative navigation commands (turn left, go straight ahead, cross the road)',
    'Confirm landmarks and final position (opposite the park, next to the post office)',
  ],
  canDoStatements: [
    'Can ask for directions politely on the street (CEFR A1)',
    'Can understand basic directional imperatives ("go straight", "turn left/right", "cross the street")',
    'Can confirm understanding of a simple route and thank the speaker',
  ],
  characters: [
    {
      id: 'char_george',
      name: 'George',
      role: 'Local Pedestrian',
      avatar: '🚶‍♂️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'straight',
        ipa: '/streɪt/',
        partOfSpeech: 'adverb',
        meaning: 'In a continuous line without curving or turning',
        exampleSentence: 'Go straight ahead for two blocks.',
        translations: { hi: 'सीधे' },
      },
      {
        word: 'turn',
        ipa: '/tɜːrn/',
        partOfSpeech: 'verb',
        meaning: 'To change direction',
        exampleSentence: 'Turn right at the traffic lights.',
        translations: { hi: 'मुड़ना' },
      },
      {
        word: 'cross',
        ipa: '/krɒs/',
        partOfSpeech: 'verb',
        meaning: 'To go from one side of a road or street to the other',
        exampleSentence: 'Cross the street carefully at the zebra crossing.',
        translations: { hi: 'पार करना' },
      },
      {
        word: 'corner',
        ipa: '/ˈkɔːrnər/',
        partOfSpeech: 'noun',
        meaning: 'The place where two streets or walls meet',
        exampleSentence: 'The pharmacy is on the corner of High Street.',
        translations: { hi: 'कोना / मोड़' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Excuse me, how do I get to...?',
        functionCategory: 'Direction Inquiry',
        exampleSentence: 'Excuse me, how do I get to the Central Library?',
      },
      {
        phrase: 'Go straight ahead...',
        functionCategory: 'Imperative Instruction',
        exampleSentence: 'Go straight ahead until you see the bank.',
      },
      {
        phrase: 'Take the second left...',
        functionCategory: 'Imperative Instruction',
        exampleSentence: 'Take the second left onto Queen Street.',
      },
      {
        phrase: 'It is on your right.',
        functionCategory: 'Location Confirmation',
        exampleSentence: 'The entrance is on your right, opposite the park.',
      },
    ],
    grammar: {
      title: 'Imperatives for Navigation (Turn left/right, Go straight, Cross) & Urban Prepositions',
      conceptExplanation:
        'Use the base form of the verb without a subject pronoun for imperative directions ("Turn right", "Walk straight", "Do not turn"). Use prepositions (on the corner, on your right/left, opposite) to pinpoint destinations.',
      patternFormula: '[Base Verb] + [Direction/Landmark] (e.g., Turn left at the lights)',
      contrastExamples: [
        {
          incorrect: 'You turn left at the corner.',
          correct: 'Turn left at the corner.',
          explanation: 'Standard directions use imperatives without the subject pronoun "you".',
        },
        {
          incorrect: 'Go straight on the right.',
          correct: 'Go straight ahead. It is on the right.',
          explanation: '"Go straight ahead" means continue forward; "on your right" marks the location.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'You',
        text: 'Excuse me! Could you tell me how to get to the Central Library?',
        translation: 'माफ़ कीजियेगा! क्या आप मुझे बता सकते हैं कि सेंट्रल लाइब्रेरी कैसे पहुँचा जाए?',
      },
      {
        speaker: 'George',
        text: 'Sure! Go straight ahead past the fountain, then turn right at the bank.',
        translation: 'ज़रूर! फव्वारे के पार सीधे आगे बढ़ें, फिर बैंक के पास दाएं मुड़ें।',
      },
      {
        speaker: 'You',
        text: 'Okay, turn right at the bank. And after that?',
        translation: 'ठीक है, बैंक के पास दाएं मुड़ना है। और उसके बाद?',
      },
      {
        speaker: 'George',
        text: 'Cross the street. The library is on your left, opposite the public park.',
        translation: 'सड़क पार करें। लाइब्रेरी आपकी बाईं ओर है, पब्लिक पार्क के ठीक सामने।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_20_1',
      type: 'fill_blank',
      prompt: 'Complete the direction: "___ left at the traffic light."',
      options: [
        { id: 'opt_1', text: 'Turn', isCorrect: true },
        { id: 'opt_2', text: 'Turning', isCorrect: false },
        { id: 'opt_3', text: 'You are turn', isCorrect: false },
      ],
      correctAnswer: 'Turn',
      explanation: 'Use the base verb imperative "Turn".',
    },
    {
      id: 'cp_a1_20_2',
      type: 'multiple_choice',
      prompt: 'Which phrase means moving forward in the same direction?',
      options: [
        { id: 'opt_1', text: 'Go straight ahead', isCorrect: true },
        { id: 'opt_2', text: 'Turn back now', isCorrect: false },
        { id: 'opt_3', text: 'Cross behind', isCorrect: false },
      ],
      correctAnswer: 'Go straight ahead',
      explanation: '"Go straight ahead" means continue moving directly forward.',
    },
    {
      id: 'cp_a1_20_3',
      type: 'multiple_choice',
      prompt: 'How do you politely ask a stranger for directions?',
      options: [
        { id: 'opt_1', text: 'Excuse me, where is the library, please?', isCorrect: true },
        { id: 'opt_2', text: 'Hey you, library where?', isCorrect: false },
        { id: 'opt_3', text: 'Tell library now.', isCorrect: false },
      ],
      correctAnswer: 'Excuse me, where is the library, please?',
      explanation: '"Excuse me, where is... please?" is polite and respectful.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_20_1',
      scenarioContext: 'Ask a stranger where the Central Library is located.',
      prompt: 'Build: "Excuse me, where is the Central Library, please?"',
      targetStructure: 'Polite opener + WH-question + proper noun + polite closer',
      wordBank: ['Excuse', 'me', 'where', 'is', 'the', 'Central', 'Library', 'please', 'are', 'go'],
      acceptableSolutions: [
        'Excuse me where is the Central Library please',
        'Excuse me, where is the Central Library, please?',
      ],
      explanation: 'Standard polite inquiry for city navigation.',
    },
    {
      id: 'sc_a1_20_2',
      scenarioContext: 'Give clear two-step directions.',
      prompt: 'Build: "Go straight ahead and turn right at the bank."',
      targetStructure: 'Imperative + coordinate connector + imperative + prepositional phrase',
      wordBank: ['Go', 'straight', 'ahead', 'and', 'turn', 'right', 'at', 'the', 'bank', 'turning', 'you'],
      acceptableSolutions: [
        'Go straight ahead and turn right at the bank',
        'Go straight ahead and turn right at the bank.',
      ],
      explanation: 'Clear sequence of navigational imperatives.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_20_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello there! You look like you are searching for something. Can I help you with directions?',
      partnerAudioText:
        'Hello there! You look like you are searching for something. Can I help you with directions?',
      partnerQuestionHindi:
        'नमस्ते! ऐसा लगता है कि आप कुछ ढूंढ रहे हैं। क्या मैं रास्ते में आपकी मदद कर सकता हूँ?',
      expectedFunction: 'Ask for Directions Politely',
      contextGoal:
        'Politely state that you are looking for the Central Library and ask how to get there.',
      targetVocabulary: ['excuse me', 'looking for', 'library', 'how do i get to', 'where is'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Excuse me! Yes, please. Could you tell me how to get to the Central Library?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hi, I am looking for the library. Where is it located?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Yes please, which way is the Central Library from here?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Direction Request',
          patterns: ['how do i get to', 'where is', 'looking for', 'tell me the way', 'central library', 'which way is'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'missing_polite_opener',
          pattern: /^(where is the library|how to go library)$/i,
          errorType: 'interaction',
          message: 'It is always best to start with "Excuse me" or "Hello" when asking strangers for help.',
          correctionPattern: 'Excuse me, where is...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_20_1',
        type: 'fill_blank',
        prompt: 'Complete the polite phrase: "___ me, where is the station?"',
        options: [
          { id: 'opt_1', text: 'Excuse', isCorrect: true },
          { id: 'opt_2', text: 'Sorry', isCorrect: false },
          { id: 'opt_3', text: 'Pardon to', isCorrect: false },
        ],
        correctAnswer: 'Excuse',
        explanation: '"Excuse me" is the polite formula to get attention.',
      },
    },
    {
      id: 'turn_a1_20_2',
      turnIndex: 2,
      partnerPrompt:
        'Oh, it is not far! Walk straight ahead down this street for two blocks. When you reach the post office, turn left. Got that so far?',
      partnerAudioText:
        'Oh, it is not far! Walk straight ahead down this street for two blocks. When you reach the post office, turn left. Got that so far?',
      partnerQuestionHindi:
        'अरे, यह दूर नहीं है! इस सड़क पर दो ब्लॉक सीधे आगे चलें। जब आप डाकघर पहुँचें, तो बाएं मुड़ें। यहाँ तक समझ आया?',
      expectedFunction: 'Confirm First Step & Ask Follow-up',
      contextGoal:
        'Confirm the first direction (walk straight, turn left at post office) and ask what to do next.',
      targetVocabulary: ['straight', 'turn left', 'post office', 'after that', 'next'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Okay, go straight for two blocks and turn left at the post office. What do I do after that?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Turn left at the post office. And then where is the building?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Got it, straight then left at the post office. Is it right there?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Route Confirmation',
          patterns: ['straight', 'turn left', 'post office', 'got it', 'understand', 'two blocks'],
          required: true,
        },
        {
          name: 'Next Step Inquiry',
          patterns: ['after that', 'what next', 'then where', 'and then', 'is it there'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_20_2',
        type: 'multiple_choice',
        prompt: 'Which response correctly repeats the first step?',
        options: [
          { id: 'opt_1', text: 'Go straight and turn left at the post office.', isCorrect: true },
          { id: 'opt_2', text: 'Going straight turning left.', isCorrect: false },
          { id: 'opt_3', text: 'You are left turning post.', isCorrect: false },
        ],
        correctAnswer: 'Go straight and turn left at the post office.',
        explanation: 'Uses clear imperative repetition.',
      },
    },
    {
      id: 'turn_a1_20_3',
      turnIndex: 3,
      partnerPrompt:
        'Exactly! After you turn left, cross the street at the pedestrian crossing. The library is a big stone building on your right, opposite the park. You cannot miss it!',
      partnerAudioText:
        'Exactly! After you turn left, cross the street at the pedestrian crossing. The library is a big stone building on your right, opposite the park. You cannot miss it!',
      partnerQuestionHindi:
        'बिल्कुल! बाएं मुड़ने के बाद, जेब्रा क्रॉसिंग पर सड़क पार करें। लाइब्रेरी आपकी दाईं ओर एक बड़ी इमारत है, पार्क के सामने। आप इसे आसानी से पहचान लेंगे!',
      expectedFunction: 'Final Confirmation & Gratitude',
      contextGoal:
        'Confirm the final destination (cross the street, opposite the park), thank George, and say goodbye.',
      targetVocabulary: ['cross the street', 'opposite', 'on the right', 'thank you', 'have a nice day'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Cross the street and it is on the right opposite the park. Thank you so much for your help! Have a great day.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Opposite the park on the right. Perfect! Thanks a lot, George.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Got it. Cross the road, opposite the park. Thanks a million! Bye.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Final Landmark Check',
          patterns: ['cross the street', 'cross the road', 'opposite the park', 'on the right', 'opposite'],
          required: true,
        },
        {
          name: 'Gratitude & Farewell',
          patterns: ['thank you', 'thanks', 'have a great day', 'have a nice day', 'appreciate it', 'bye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_20_3',
        type: 'multiple_choice',
        prompt: 'Which prepositional phrase means directly on the other side of the park?',
        options: [
          { id: 'opt_1', text: 'opposite the park', isCorrect: true },
          { id: 'opt_2', text: 'under the park', isCorrect: false },
          { id: 'opt_3', text: 'inside of park', isCorrect: false },
        ],
        correctAnswer: 'opposite the park',
        explanation: '"opposite the park" means facing the park across the street.',
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
