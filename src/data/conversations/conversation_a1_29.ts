import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_29: ConversationDefinition = {
  id: 'conv_a1_29',
  title: 'Sharing a Weekend Story with Irregular Past Verbs',
  cefr: 'A1',
  unitId: 'unit_a1_2',
  lessonLinks: ['lesson_a1_2_29'],
  estimatedMinutes: 5,
  scenario:
    'You are having lunch with your classmate, Sam. You share stories about what you did, where you went, what you ate, and who you met over the weekend.',
  communicativeGoals: [
    'Use high-frequency irregular past tense verbs accurately (went, had, saw, ate, bought, met, came)',
    'Narrate a sequence of weekend events and outings (went to the museum, met a friend, ate sushi)',
    'Ask questions about a friend\'s weekend experiences using "Where did you go?" and "What did you eat?"',
    'React to a friend\'s story with engaging conversational responses ("That sounds fun!", "Really?")',
  ],
  canDoStatements: [
    'Can recount past events using common irregular verbs (went, saw, ate, had, met) (CEFR A1)',
    'Can ask WH-questions in the past tense ("Where did you go?", "Who did you meet?")',
    'Can react enthusiastically to someone\'s personal anecdotes',
  ],
  characters: [
    {
      id: 'char_sam',
      name: 'Sam',
      role: 'Classmate & Friend',
      avatar: '🥪',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'went',
        ipa: '/wɛnt/',
        partOfSpeech: 'verb (past of go)',
        meaning: 'Moved or traveled from one place to another',
        exampleSentence: 'On Saturday, I went to an art museum downtown.',
        translations: { hi: 'गया / गई' },
      },
      {
        word: 'ate',
        ipa: '/eɪt / ɛt/',
        partOfSpeech: 'verb (past of eat)',
        meaning: 'Put food into the mouth and swallowed it',
        exampleSentence: 'We ate delicious Italian pasta for lunch.',
        translations: { hi: 'खाया' },
      },
      {
        word: 'bought',
        ipa: '/bɔːt/',
        partOfSpeech: 'verb (past of buy)',
        meaning: 'Obtained in exchange for payment',
        exampleSentence: 'I bought two new books and a sweater.',
        translations: { hi: 'खरीदा' },
      },
      {
        word: 'met',
        ipa: '/mɛt/',
        partOfSpeech: 'verb (past of meet)',
        meaning: 'Came into the presence of or made the acquaintance of someone',
        exampleSentence: 'I met my childhood friend for coffee.',
        translations: { hi: 'मिला / मुलाकात की' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I went to...',
        functionCategory: 'Past Location',
        exampleSentence: 'I went to the beach with my family.',
      },
      {
        phrase: 'We ate at a nice...',
        functionCategory: 'Past Dining',
        exampleSentence: 'We ate at a nice Indian restaurant.',
      },
      {
        phrase: 'Where did you go?',
        functionCategory: 'Past Location Inquiry',
        exampleSentence: 'Where did you go on Saturday morning?',
      },
      {
        phrase: 'That sounds like fun!',
        functionCategory: 'Conversational Reaction',
        exampleSentence: 'You went hiking? That sounds like fun!',
      },
    ],
    grammar: {
      title: 'Irregular Past Tense Verbs (go → went, have → had, eat → ate, see → saw, buy → bought)',
      conceptExplanation:
        'Irregular verbs do not take "-ed" in the past; their vowel or spelling changes (go → went, see → saw, eat → ate, buy → bought, meet → met, have → had). In questions and negatives, the auxiliary "did / didn\'t" uses the base form (Where did you go? I didn\'t go).',
      patternFormula: 'Subject + [Irregular Past Verb] + [Details] | Did + Subject + [Base Verb]?',
      contrastExamples: [
        {
          incorrect: 'Yesterday I goed to the cinema and eated popcorn.',
          correct: 'Yesterday, I went to the cinema and ate popcorn.',
          explanation: '"Go" becomes "went" and "eat" becomes "ate". Never add "-ed" to irregular verbs.',
        },
        {
          incorrect: 'Where did you went yesterday?',
          correct: 'Where did you go yesterday?',
          explanation: 'Use the base verb "go" after the question auxiliary "did".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Sam',
        text: 'Hey! I heard you had an exciting weekend. Where did you go on Saturday?',
        translation: 'अरे! मैंने सुना कि आपका सप्ताहांत काफी रोमांचक था। आप शनिवार को कहाँ गए थे?',
      },
      {
        speaker: 'You',
        text: 'I went to the modern art museum downtown. Then I met my friend and we ate Italian pizza.',
        translation: 'मैं शहर के आधुनिक कला संग्रहालय गया। फिर मैं अपने दोस्त से मिला और हमने इटालियन पिज्जा खाया।',
      },
      {
        speaker: 'Sam',
        text: 'That sounds wonderful! Did you buy anything at the market afterward?',
        translation: 'यह बहुत बढ़िया लग रहा है! क्या आपने बाद में बाज़ार से कुछ खरीदा?',
      },
      {
        speaker: 'You',
        text: 'Yes, I bought a souvenir mug and a new scarf. What did you do on Sunday, Sam?',
        translation: 'हाँ, मैंने एक यादगार मग और एक नया स्कार्फ खरीदा। आपने रविवार को क्या किया, सैम?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_29_1',
      type: 'fill_blank',
      prompt: 'Complete with the past form: "On Saturday, we ___ (go) to the park."',
      options: [
        { id: 'opt_1', text: 'went', isCorrect: true },
        { id: 'opt_2', text: 'goed', isCorrect: false },
        { id: 'opt_3', text: 'gone', isCorrect: false },
      ],
      correctAnswer: 'went',
      explanation: 'The simple past of "go" is "went".',
    },
    {
      id: 'cp_a1_29_2',
      type: 'multiple_choice',
      prompt: 'Which sentence uses the correct past tense of "eat" and "see"?',
      options: [
        { id: 'opt_1', text: 'We ate dinner and saw a great show.', isCorrect: true },
        { id: 'opt_2', text: 'We eated dinner and seed a great show.', isCorrect: false },
        { id: 'opt_3', text: 'We was eat dinner and see show.', isCorrect: false },
      ],
      correctAnswer: 'We ate dinner and saw a great show.',
      explanation: 'Irregular past forms are "ate" (eat) and "saw" (see).',
    },
    {
      id: 'cp_a1_29_3',
      type: 'multiple_choice',
      prompt: 'Which is the correct question about someone\'s weekend location?',
      options: [
        { id: 'opt_1', text: 'Where did you go on Sunday?', isCorrect: true },
        { id: 'opt_2', text: 'Where did you went on Sunday?', isCorrect: false },
        { id: 'opt_3', text: 'Where you were go on Sunday?', isCorrect: false },
      ],
      correctAnswer: 'Where did you go on Sunday?',
      explanation: 'Use "Where did you" + base verb "go".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_29_1',
      scenarioContext: 'Describe visiting a museum and meeting a friend.',
      prompt: 'Build: "I went to the museum and met my friend."',
      targetStructure: 'Subject + went + prepositional phrase + coordinator + met + noun phrase',
      wordBank: ['I', 'went', 'to', 'the', 'museum', 'and', 'met', 'my', 'friend', 'goed', 'meet', 'was'],
      acceptableSolutions: [
        'I went to the museum and met my friend',
        'I went to the museum and met my friend.',
      ],
      explanation: 'Accurate chain of irregular past verbs.',
    },
    {
      id: 'sc_a1_29_2',
      scenarioContext: 'Ask what delicious food Sam ate.',
      prompt: 'Build: "What did you eat at the restaurant?"',
      targetStructure: 'WH-question + auxiliary did + subject + base verb + prepositional phrase',
      wordBank: ['What', 'did', 'you', 'eat', 'at', 'the', 'restaurant', 'ate', 'do', 'were'],
      acceptableSolutions: [
        'What did you eat at the restaurant',
        'What did you eat at the restaurant?',
      ],
      explanation: 'Accurate past WH-question with base verb "eat".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_29_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey there! How was your weekend? I heard you went out on Saturday. Where did you go and who did you see?',
      partnerAudioText:
        'Hey there! How was your weekend? I heard you went out on Saturday. Where did you go and who did you see?',
      partnerQuestionHindi:
        'अरे! आपका सप्ताहांत कैसा रहा? मैंने सुना कि आप शनिवार को बाहर गए थे। आप कहाँ गए और आप किससे मिले?',
      expectedFunction: 'Narrate Outing with Irregular Verbs (went, met, saw)',
      contextGoal:
        'Tell where you went and who you met using irregular past verbs (e.g. "I went to the museum/market and met my friend").',
      targetVocabulary: ['went', 'met', 'saw', 'museum', 'friend', 'downtown', 'park'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I had a great weekend! I went to the art museum downtown and met my best friend for coffee.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'On Saturday, I went to the city center and saw an interesting exhibition.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I went to a farmer\'s market and met some old classmates.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Irregular Past Destination & Company',
          patterns: ['went to', 'met my', 'met a friend', 'saw a', 'had a great', 'went downtown', 'went out'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'goed_error',
          pattern: /\bi goed\b/i,
          errorType: 'grammar',
          message: 'The past tense of "go" is "went", not "goed".',
          correctionPattern: 'I went to...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_29_1',
        type: 'fill_blank',
        prompt: 'Choose the correct irregular past verb: "We ___ (go) to the library yesterday."',
        options: [
          { id: 'opt_1', text: 'went', isCorrect: true },
          { id: 'opt_2', text: 'goed', isCorrect: false },
          { id: 'opt_3', text: 'was go', isCorrect: false },
        ],
        correctAnswer: 'went',
        explanation: 'The past tense of "go" is "went".',
      },
    },
    {
      id: 'turn_a1_29_2',
      turnIndex: 2,
      partnerPrompt:
        'That sounds like so much fun! What did you eat for lunch, and did you buy anything interesting while you were there?',
      partnerAudioText:
        'That sounds like so much fun! What did you eat for lunch, and did you buy anything interesting while you were there?',
      partnerQuestionHindi:
        'यह बहुत मज़ेदार लग रहा है! आपने दोपहर के भोजन में क्या खाया, और क्या आपने वहाँ रहते हुए कुछ दिलचस्प खरीदा?',
      expectedFunction: 'Describe Food & Purchases (ate, bought, had)',
      contextGoal:
        'Explain what food you ate and what items you bought using "ate", "bought", or "had".',
      targetVocabulary: ['ate', 'bought', 'had', 'delicious', 'pizza', 'books', 'clothes'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'We ate delicious Italian pasta, and I bought a beautiful book and a coffee mug!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'We had sushi for lunch, and I bought a warm winter scarf.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I ate a quick sandwich and didn\'t buy anything.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Food & Purchase Narrative',
          patterns: ['ate', 'had', 'bought', 'bought a', 'ate pizza', 'ate sushi', 'ate pasta', 'delicious', 'didn\'t buy'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'eated_buyed_error',
          pattern: /\b(eated|buyed)\b/i,
          errorType: 'grammar',
          message: 'The past of "eat" is "ate", and the past of "buy" is "bought".',
          correctionPattern: 'I ate [food] and bought [item]...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_29_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly uses the past tense of buy and eat?',
        options: [
          { id: 'opt_1', text: 'I bought groceries and ate fresh fruit.', isCorrect: true },
          { id: 'opt_2', text: 'I buyed groceries and eated fruit.', isCorrect: false },
          { id: 'opt_3', text: 'I boughted groceries and eaten fruit.', isCorrect: false },
        ],
        correctAnswer: 'I bought groceries and ate fresh fruit.',
        explanation: '"bought" and "ate" are the correct irregular past forms.',
      },
    },
    {
      id: 'turn_a1_29_3',
      turnIndex: 3,
      partnerPrompt:
        'A museum trip, great food, and souvenirs — what a memorable Saturday! What did you do on Sunday, did you stay home?',
      partnerAudioText:
        'A museum trip, great food, and souvenirs — what a memorable Saturday! What did you do on Sunday, did you stay home?',
      partnerQuestionHindi:
        'संग्रहालय की यात्रा, बेहतरीन खाना और स्मृति चिन्ह — कितना यादगार शनिवार था! आपने रविवार को क्या किया, क्या आप घर पर ही रहे?',
      expectedFunction: 'Conclude Weekend Narrative & Ask Partner',
      contextGoal:
        'Summarize your Sunday (e.g. stayed home, slept in, woke up late) and ask Sam what he did.',
      targetVocabulary: ['stayed home', 'woke up late', 'relaxed', 'what about you', 'what did you do'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'On Sunday, I stayed home, woke up late, and relaxed. What did you do on your weekend, Sam?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I rested all day Sunday! How was your weekend, Sam?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Sunday was very quiet. What about you, did you go anywhere?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Sunday Description',
          patterns: ['stayed home', 'woke up', 'relaxed', 'rested', 'quiet day', 'slept in'],
          required: true,
        },
        {
          name: 'Reciprocal Question',
          patterns: ['what did you do', 'what about you', 'how was your weekend', 'did you go anywhere', 'sam'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_29_3',
        type: 'multiple_choice',
        prompt: 'Which is the natural question to ask a friend about their weekend?',
        options: [
          { id: 'opt_1', text: 'What did you do on your weekend, Sam?', isCorrect: true },
          { id: 'opt_2', text: 'What you did do weekend Sam?', isCorrect: false },
          { id: 'opt_3', text: 'How you were weekend making?', isCorrect: false },
        ],
        correctAnswer: 'What did you do on your weekend, Sam?',
        explanation: '"What did you do on your weekend?" is the standard past inquiry.',
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
