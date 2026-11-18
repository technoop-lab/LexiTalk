import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_30: ConversationDefinition = {
  id: 'conv_a1_30',
  title: 'End-of-Unit Comprehensive Review: Catching Up on Recent Trips & Events',
  cefr: 'A1',
  unitId: 'unit_a1_2',
  lessonLinks: ['lesson_a1_2_30'],
  estimatedMinutes: 6,
  scenario:
    'You run into an old friend, Liam, at a neighborhood café. You have a rich catch-up conversation about your recent weekend trip, asking and answering questions about transportation, accommodation, meals, activities, and future plans.',
  communicativeGoals: [
    'Ask and answer Yes/No past questions ("Did you go alone?", "Yes, I did / No, I didn\'t")',
    'Ask and answer WH-questions in the past ("Where did you stay?", "What did you see?", "How did you travel?")',
    'Synthesize vocabulary and grammar across Unit 2 (transportation, dining, weather, rooms/housing, past tense)',
    'Maintain a natural, flowing multi-turn conversation with active listening expressions',
  ],
  canDoStatements: [
    'Can hold a complete, multi-turn past-tense conversation about a trip or weekend outing (CEFR A1 Mastery)',
    'Can ask and answer both open and closed past-tense questions fluently',
    'Can synthesize Unit 2 themes: travel methods, food, weather, places, and activities',
  ],
  characters: [
    {
      id: 'char_liam',
      name: 'Liam',
      role: 'Old Friend',
      avatar: '☕',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'trip',
        ipa: '/trɪp/',
        partOfSpeech: 'noun',
        meaning: 'A journey or excursion, especially for pleasure',
        exampleSentence: 'Did you have a good trip to the coast?',
        translations: { hi: 'यात्रा / ट्रिप' },
      },
      {
        word: 'hotel',
        ipa: '/hoʊˈtɛl/',
        partOfSpeech: 'noun',
        meaning: 'An establishment providing accommodation, meals, and other services for travelers',
        exampleSentence: 'We stayed at a comfortable hotel near the beach.',
        translations: { hi: 'होटल' },
      },
      {
        word: 'delicious',
        ipa: '/dɪˈlɪʃəs/',
        partOfSpeech: 'adjective',
        meaning: 'Highly pleasant to the taste',
        exampleSentence: 'The seafood at the harbor was absolutely delicious.',
        translations: { hi: 'स्वादिष्ट / लज़ीज़' },
      },
      {
        word: 'scenery',
        ipa: '/ˈsiːnəri/',
        partOfSpeech: 'noun',
        meaning: 'The natural features of a landscape considered in terms of their appearance',
        exampleSentence: 'The mountain scenery was breathtaking.',
        translations: { hi: 'प्राकृतिक दृश्य / नज़ारे' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Did you have a good time?',
        functionCategory: 'General Past Inquiry',
        exampleSentence: 'Did you have a good time on your holiday?',
      },
      {
        phrase: 'Yes, I did! / No, I didn\'t.',
        functionCategory: 'Short Answers',
        exampleSentence: 'Did you go by train? Yes, I did!',
      },
      {
        phrase: 'How was the weather?',
        functionCategory: 'Weather Review',
        exampleSentence: 'How was the weather during your stay?',
      },
      {
        phrase: 'We stayed at a...',
        functionCategory: 'Accommodation Description',
        exampleSentence: 'We stayed at a quiet bed and breakfast.',
      },
    ],
    grammar: {
      title: 'Simple Past Interrogative Mastery: Did + Subject + Base Verb & Short Answers',
      conceptExplanation:
        'For Yes/No past questions, start with "Did": "Did you enjoy the trip?" → "Yes, I did" or "No, I didn\'t". For open questions, place WH-words first: "Where did you stay?", "What did you eat?", "How did you get there?". The main verb ALWAYS remains in base form.',
      patternFormula: 'Did + Subject + [Base Verb]? | WH-Word + did + Subject + [Base Verb]?',
      contrastExamples: [
        {
          incorrect: 'Did you went to the beach?',
          correct: 'Did you go to the beach?',
          explanation: 'Never use the past tense form after "Did"; use the base verb "go".',
        },
        {
          incorrect: 'Yes, I was.',
          correct: 'Yes, I did.',
          explanation: 'Questions starting with "Did you..." require "Yes, I did" or "No, I didn\'t".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Liam',
        text: 'Hey! Long time no see! I saw your photos from Brighton. Did you go there last weekend?',
        translation: 'अरे! बहुत समय बाद मिले! मैंने ब्राइटन से आपकी तस्वीरें देखीं। क्या आप पिछले वीकेंड वहाँ गए थे?',
      },
      {
        speaker: 'You',
        text: 'Yes, I did! I went by train on Saturday morning and stayed until Sunday night.',
        translation: 'हाँ! मैं शनिवार की सुबह ट्रेन से गया था और रविवार की रात तक रुका था।',
      },
      {
        speaker: 'Liam',
        text: 'Wonderful! How was the weather and what did you eat there?',
        translation: 'बहुत बढ़िया! मौसम कैसा था और आपने वहाँ क्या खाया?',
      },
      {
        speaker: 'You',
        text: 'The weather was sunny and warm! We ate fresh seafood and visited the pier.',
        translation: 'मौसम धूप वाला और गर्म था! हमने ताज़ा सीफूड खाया और घाट की सैर की।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_30_1',
      type: 'fill_blank',
      prompt: 'Complete the past question: "___ you enjoy the concert last night?"',
      options: [
        { id: 'opt_1', text: 'Did', isCorrect: true },
        { id: 'opt_2', text: 'Do', isCorrect: false },
        { id: 'opt_3', text: 'Were', isCorrect: false },
      ],
      correctAnswer: 'Did',
      explanation: 'Use "Did" as the auxiliary for simple past questions.',
    },
    {
      id: 'cp_a1_30_2',
      type: 'multiple_choice',
      prompt: 'What is the correct short answer to: "Did you travel by bus?"',
      options: [
        { id: 'opt_1', text: 'No, I didn\'t. I went by train.', isCorrect: true },
        { id: 'opt_2', text: 'No, I wasn\'t traveling bus.', isCorrect: false },
        { id: 'opt_3', text: 'No, I am not did.', isCorrect: false },
      ],
      correctAnswer: 'No, I didn\'t. I went by train.',
      explanation: '"No, I didn\'t" is the correct short answer for "Did you...?".',
    },
    {
      id: 'cp_a1_30_3',
      type: 'multiple_choice',
      prompt: 'Which WH-question correctly asks about accommodation?',
      options: [
        { id: 'opt_1', text: 'Where did you stay during your trip?', isCorrect: true },
        { id: 'opt_2', text: 'Where did you stayed during trip?', isCorrect: false },
        { id: 'opt_3', text: 'Where were you stay trip?', isCorrect: false },
      ],
      correctAnswer: 'Where did you stay during your trip?',
      explanation: 'Use "Where did you" + base verb "stay".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_30_1',
      scenarioContext: 'Confirm your weekend trip and transit method.',
      prompt: 'Build: "Yes, I did. I traveled by train on Saturday."',
      targetStructure: 'Affirmative short answer + past sentence with transit preposition',
      wordBank: ['Yes', 'I', 'did', 'I', 'traveled', 'by', 'train', 'on', 'Saturday', 'went', 'with', 'in'],
      acceptableSolutions: [
        'Yes I did I traveled by train on Saturday',
        'Yes, I did. I traveled by train on Saturday.',
      ],
      explanation: 'Clean short answer followed by descriptive past statement.',
    },
    {
      id: 'sc_a1_30_2',
      scenarioContext: 'Describe the weather and food on the trip.',
      prompt: 'Build: "The weather was sunny and the food was delicious."',
      targetStructure: 'Subject + was + adjective + coordinator + subject + was + adjective',
      wordBank: ['The', 'weather', 'was', 'sunny', 'and', 'the', 'food', 'was', 'delicious', 'is', 'did', 'ate'],
      acceptableSolutions: [
        'The weather was sunny and the food was delicious',
        'The weather was sunny and the food was delicious.',
      ],
      explanation: 'Unit 2 synthesis of past "be" with weather and food evaluation.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_30_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! It is so great to run into you here! I heard you took a mini-vacation last weekend. Did you go out of town?',
      partnerAudioText:
        'Hey! It is so great to run into you here! I heard you took a mini-vacation last weekend. Did you go out of town?',
      partnerQuestionHindi:
        'अरे! यहाँ आपसे मिलकर बहुत अच्छा लगा! मैंने सुना कि आप पिछले वीकेंड एक छोटी छुट्टी पर गए थे। क्या आप शहर से बाहर गए थे?',
      expectedFunction: 'Answer Yes/No Past Question & State Destination / Transit',
      contextGoal:
        'Answer "Yes, I did" (or describe the trip) and explain where you went and how you traveled (e.g. by train/car to the coast/mountains).',
      targetVocabulary: ['yes i did', 'went to', 'by train', 'by car', 'weekend', 'visited'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes, I did! I went to Brighton by train on Saturday morning for a seaside getaway.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Yes, I did. I traveled by car to the mountains with some friends.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Yes! I took the train down to the coast for two days.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Past Confirmation & Trip Details',
          patterns: ['yes i did', 'went to', 'traveled by', 'by train', 'by car', 'by bus', 'visited', 'took the train'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'yes_i_was_error',
          pattern: /^yes i was\b/i,
          errorType: 'grammar',
          message: 'Respond with "Yes, I did" when answering questions starting with "Did you...".',
          correctionPattern: 'Yes, I did! I went...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_30_1',
        type: 'fill_blank',
        prompt: 'Choose the correct short answer: "Did you go out of town? — ___, I did."',
        options: [
          { id: 'opt_1', text: 'Yes', isCorrect: true },
          { id: 'opt_2', text: 'So', isCorrect: false },
          { id: 'opt_3', text: 'Did', isCorrect: false },
        ],
        correctAnswer: 'Yes',
        explanation: '"Yes, I did" is the standard affirmative short answer.',
      },
    },
    {
      id: 'turn_a1_30_2',
      turnIndex: 2,
      partnerPrompt:
        'That sounds fantastic! Where did you stay, and how was the weather while you were there?',
      partnerAudioText:
        'That sounds fantastic! Where did you stay, and how was the weather while you were there?',
      partnerQuestionHindi:
        'यह शानदार लग रहा है! आप कहाँ रुके थे, और जब आप वहाँ थे तब मौसम कैसा था?',
      expectedFunction: 'Describe Accommodation & Weather (Unit 2 Synthesis)',
      contextGoal:
        'Describe where you stayed (e.g. at a hotel / guest house) and the weather (e.g. sunny, warm, windy, pleasant).',
      targetVocabulary: ['stayed at', 'hotel', 'weather', 'was sunny', 'was warm', 'pleasant', 'room'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'We stayed at a cozy hotel near the beach. The weather was sunny and warm all weekend!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I stayed in a small apartment. The weather was pleasant and clear.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'At a nice seaside hotel! Sunny skies and warm breezes the whole time.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Accommodation',
          patterns: ['stayed at', 'hotel', 'apartment', 'guest house', 'hostel', 'resort', 'stayed in'],
          required: true,
        },
        {
          name: 'Weather Review',
          patterns: ['weather was', 'was sunny', 'was warm', 'was nice', 'was clear', 'sunny and warm'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_30_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes past lodging and weather?',
        options: [
          { id: 'opt_1', text: 'We stayed at a hotel and the weather was sunny.', isCorrect: true },
          { id: 'opt_2', text: 'We were stay hotel and weather is sunny.', isCorrect: false },
          { id: 'opt_3', text: 'We staying hotel weather did sun.', isCorrect: false },
        ],
        correctAnswer: 'We stayed at a hotel and the weather was sunny.',
        explanation: 'Uses regular past "stayed" and past "was".',
      },
    },
    {
      id: 'turn_a1_30_3',
      turnIndex: 3,
      partnerPrompt:
        'What a wonderful getaway! What did you do on your last evening there, and what delicious food did you eat?',
      partnerAudioText:
        'What a wonderful getaway! What did you do on your last evening there, and what delicious food did you eat?',
      partnerQuestionHindi:
        'कितनी शानदार छुट्टी थी! आपने अपनी आखिरी शाम को क्या किया, और आपने क्या स्वादिष्ट खाना खाया?',
      expectedFunction: 'Narrate Activities & Dining with Past Verbs',
      contextGoal:
        'Describe evening activities (e.g. walked on the pier, saw the sunset) and food eaten (e.g. ate fresh fish, delicious pasta).',
      targetVocabulary: ['ate', 'walked', 'saw', 'delicious', 'seafood', 'pasta', 'had dinner'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'We walked along the pier, saw the sunset, and ate delicious fresh seafood at a harbor restaurant!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'We had dinner by the sea and ate Italian pasta. It was wonderful!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'We ate grilled fish and relaxed by the water. Best meal of the trip!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Activities & Dining',
          patterns: ['ate', 'walked', 'saw', 'had dinner', 'seafood', 'fish', 'pasta', 'pizza', 'delicious', 'restaurant'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_30_3',
        type: 'multiple_choice',
        prompt: 'Which sentence uses accurate past tense for dining and sightseeing?',
        options: [
          { id: 'opt_1', text: 'We walked by the sea and ate delicious fish.', isCorrect: true },
          { id: 'opt_2', text: 'We walk sea and eated fish.', isCorrect: false },
          { id: 'opt_3', text: 'We were walked sea eating delicious.', isCorrect: false },
        ],
        correctAnswer: 'We walked by the sea and ate delicious fish.',
        explanation: 'Accurate mix of regular "walked" and irregular "ate".',
      },
    },
    {
      id: 'turn_a1_30_4',
      turnIndex: 4,
      partnerPrompt:
        'I am so glad you had such a memorable trip! We should grab a coffee together next week and catch up more. Are you free next Tuesday?',
      partnerAudioText:
        'I am so glad you had such a memorable trip! We should grab a coffee together next week and catch up more. Are you free next Tuesday?',
      partnerQuestionHindi:
        'मुझे बहुत खुशी है कि आपकी यात्रा इतनी यादगार रही! हमें अगले सप्ताह साथ में कॉफी पीनी चाहिए और अधिक बातें करनी चाहिए। क्या आप अगले मंगलवार को खाली हैं?',
      expectedFunction: 'Conclude Conversation & Agree on Future Plan',
      contextGoal:
        'Accept the invitation warmly (e.g. "Yes, I am free next Tuesday", "Sounds great!"), and say goodbye.',
      targetVocabulary: ['free', 'sounds great', 'coffee', 'next tuesday', 'see you', 'bye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'That sounds great, Liam! Yes, I am free next Tuesday afternoon. Let\'s meet then. See you soon!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I would love that! Tuesday works perfectly for me. See you next week!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Sounds wonderful! Tuesday at three? See you then, Liam!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Future Agreement & Farewell',
          patterns: ['sounds great', 'free next tuesday', 'free on tuesday', 'would love that', 'see you soon', 'see you next week', 'bye', 'let\'s meet'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_30_4',
        type: 'multiple_choice',
        prompt: 'Which response confirms a future coffee date warmly and fluently?',
        options: [
          { id: 'opt_1', text: 'That sounds great, Liam! I\'m free next Tuesday. See you then!', isCorrect: true },
          { id: 'opt_2', text: 'I am make coffee date Tuesday bye.', isCorrect: false },
          { id: 'opt_3', text: 'Next Tuesday coffee is being took.', isCorrect: false },
        ],
        correctAnswer: 'That sounds great, Liam! I\'m free next Tuesday. See you then!',
        explanation: 'Polite, enthusiastic, and natural.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 85,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 75,
  },
};
