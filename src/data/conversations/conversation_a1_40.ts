import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_40: ConversationDefinition = {
  id: 'conv_a1_40',
  title: 'Talking About the Past (High-Frequency Irregular Verbs)',
  cefr: 'A1',
  unitId: 'unit_a1_3',
  lessonLinks: ['lesson_a1_3_40'],
  estimatedMinutes: 5,
  scenario:
    'You meet your friend Leo at a coffee shop on a Sunday evening. You share stories of what you did over the weekend, utilizing high-frequency irregular past tense verbs (went, saw, ate, bought, had, met, drank, came).',
  communicativeGoals: [
    'Use high-frequency irregular past tense verbs accurately (went, saw, bought, ate, drank, had, met, came)',
    'Narrate weekend activities, shopping trips, and social meetups without regular -ed errors on irregular verbs',
    'Ask about another person’s past activities with past auxiliaries ("What did you eat?", "Where did you go?")',
    'Express enthusiasm and active listening during past storytelling',
  ],
  canDoStatements: [
    'Can narrate simple personal experiences using common irregular past tense verbs (CEFR A1.2)',
    'Can describe what they bought, ate, saw, and where they went',
    'Can participate in spontaneous conversational storytelling about past events',
  ],
  characters: [
    {
      id: 'char_leo',
      name: 'Leo',
      role: 'Friend',
      avatar: '🛍️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'went',
        ipa: '/wɛnt/',
        partOfSpeech: 'verb (irregular past)',
        meaning: 'Past tense of go; moved from one place to another',
        exampleSentence: 'We went to the downtown farmers market yesterday.',
        translations: { hi: 'गया / गए' },
      },
      {
        word: 'bought',
        ipa: '/bɔːt/',
        partOfSpeech: 'verb (irregular past)',
        meaning: 'Past tense of buy; obtained in exchange for payment',
        exampleSentence: 'I bought a new winter jacket and fresh fruit.',
        translations: { hi: 'खरीदा' },
      },
      {
        word: 'ate',
        ipa: '/eɪt/',
        partOfSpeech: 'verb (irregular past)',
        meaning: 'Past tense of eat; consumed food',
        exampleSentence: 'We ate delicious Italian pizza at the plaza.',
        translations: { hi: 'खाया' },
      },
      {
        word: 'met',
        ipa: '/mɛt/',
        partOfSpeech: 'verb (irregular past)',
        meaning: 'Past tense of meet; encountered or gathered with someone',
        exampleSentence: 'I met my old college friends at three o’clock.',
        translations: { hi: 'मिला / मिले' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I went to... with...',
        functionCategory: 'Past Destination & Companions',
        exampleSentence: 'I went to the city center with my roommate.',
      },
      {
        phrase: 'We ate at a nice café.',
        functionCategory: 'Dining Narrative',
        exampleSentence: 'We ate lunch at a lovely café near the river.',
      },
      {
        phrase: 'I bought some new clothes.',
        functionCategory: 'Shopping Narrative',
        exampleSentence: 'I bought some warm sweaters on sale.',
      },
      {
        phrase: 'I had a wonderful time!',
        functionCategory: 'Overall Evaluation',
        exampleSentence: 'We had a wonderful time together.',
      },
    ],
    grammar: {
      title: 'High-Frequency Irregular Past Tense Verbs (go → went, buy → bought, see → saw, eat → ate)',
      conceptExplanation:
        'Irregular verbs do not add "-ed" in the past tense. Instead, their root vowel or spelling changes: go → went, buy → bought, eat → ate, see → saw, have → had, meet → met, drink → drank, come → came. In affirmative statements, use the irregular past form directly.',
      patternFormula: 'Subject + [Irregular Past Verb] + [Object / Place] (e.g., I went to the market and bought fresh bread)',
      contrastExamples: [
        {
          incorrect: 'Yesterday I goed to the mall and buyed shoes.',
          correct: 'Yesterday I went to the mall and bought shoes.',
          explanation: '"Go" becomes "went" and "buy" becomes "bought". Never add "-ed" to irregular verbs.',
        },
        {
          incorrect: 'We eated dinner at eight.',
          correct: 'We ate dinner at eight.',
          explanation: 'The past tense of "eat" is "ate".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Leo',
        text: 'Hey! Good to see you! How was your Saturday? Did you stay in town or go somewhere exciting?',
        translation: 'अरे! आपसे मिलकर अच्छा लगा! आपका शनिवार कैसा रहा? क्या आप शहर में ही रहे या कहीं रोमांचक जगह गए?',
      },
      {
        speaker: 'You',
        text: 'I had a fantastic Saturday! I went to the weekend market, met an old friend, and bought some vintage books.',
        translation: 'मेरा शनिवार शानदार रहा! मैं वीकेंड मार्केट गया, एक पुराने दोस्त से मिला और कुछ विंटेज किताबें खरीदीं।',
      },
      {
        speaker: 'Leo',
        text: 'That sounds fun! What did you eat while you were there?',
        translation: 'यह मजेदार लगता है! जब आप वहाँ थे तब आपने क्या खाया?',
      },
      {
        speaker: 'You',
        text: 'We ate spicy street noodles and drank fresh mango juice. It was delicious!',
        translation: 'हमने मसालेदार स्ट्रीट नूडल्स खाए और ताज़ा आम का जूस पिया। यह बहुत स्वादिष्ट था!',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_40_1',
      type: 'fill_blank',
      prompt: 'Complete with the past tense of "go": "Yesterday afternoon, we ___ to the art gallery."',
      options: [
        { id: 'opt_1', text: 'went', isCorrect: true },
        { id: 'opt_2', text: 'goed', isCorrect: false },
        { id: 'opt_3', text: 'gone', isCorrect: false },
      ],
      correctAnswer: 'went',
      explanation: '"Went" is the simple past form of "go".',
    },
    {
      id: 'cp_a1_40_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses irregular past verbs for shopping and dining?',
      options: [
        { id: 'opt_1', text: 'I bought a jacket and ate lunch with Sarah.', isCorrect: true },
        { id: 'opt_2', text: 'I buyed a jacket and eated lunch with Sarah.', isCorrect: false },
        { id: 'opt_3', text: 'I was buy a jacket and eat lunch with Sarah.', isCorrect: false },
      ],
      correctAnswer: 'I bought a jacket and ate lunch with Sarah.',
      explanation: '"Bought" (from buy) and "ate" (from eat) are both irregular past forms.',
    },
    {
      id: 'cp_a1_40_3',
      type: 'multiple_choice',
      prompt: 'What is the past tense form of the verb "meet"?',
      options: [
        { id: 'opt_1', text: 'met', isCorrect: true },
        { id: 'opt_2', text: 'meeted', isCorrect: false },
        { id: 'opt_3', text: 'meeting', isCorrect: false },
      ],
      correctAnswer: 'met',
      explanation: 'Meet → met (single "e").',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_40_1',
      scenarioContext: 'Narrate going to the market and meeting a friend.',
      prompt: 'Build: "I went to the market and met my friend."',
      targetStructure: 'Subject + irregular past + prepositional phrase + coordinator + irregular past + object',
      wordBank: ['I', 'went', 'to', 'the', 'market', 'and', 'met', 'my', 'friend', 'goed', 'meeted', 'was'],
      acceptableSolutions: [
        'I went to the market and met my friend',
        'I went to the market and met my friend.',
      ],
      explanation: 'Uses irregular past verbs "went" (go) and "met" (meet).',
    },
    {
      id: 'sc_a1_40_2',
      scenarioContext: 'Describe dining and shopping.',
      prompt: 'Build: "We ate pizza and bought fresh fruit yesterday."',
      targetStructure: 'Subject + irregular past + object + coordinator + irregular past + object + adverb',
      wordBank: ['We', 'ate', 'pizza', 'and', 'bought', 'fresh', 'fruit', 'yesterday', 'eated', 'buyed'],
      acceptableSolutions: [
        'We ate pizza and bought fresh fruit yesterday',
        'We ate pizza and bought fresh fruit yesterday.',
      ],
      explanation: 'Uses irregular past verbs "ate" (eat) and "bought" (buy).',
    },
  ],
  turns: [
    {
      id: 'turn_a1_40_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! Great to catch up over coffee. How was your weekend? Where did you go on Saturday?',
      partnerAudioText:
        'Hey! Great to catch up over coffee. How was your weekend? Where did you go on Saturday?',
      partnerQuestionHindi:
        'अरे! कॉफी पर मिलकर बहुत अच्छा लगा। आपका वीकेंड कैसा रहा? आप शनिवार को कहाँ गए थे?',
      expectedFunction: 'Narrate Saturday Outing (went / met / had)',
      contextGoal:
        'Explain where you went on Saturday (e.g. "went to the city center / farmers market") and who you met.',
      targetVocabulary: ['went to', 'met', 'had a great time', 'saturday', 'market', 'city center', 'friend'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I had a wonderful weekend! On Saturday, I went to the downtown market and met my friend Marcus.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I went to the city center and met some friends for coffee on Saturday.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Went to the flea market downtown and met Marcus there!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Past Destinations & Meetups',
          patterns: [
            'went to',
            'met',
            'had a great',
            'had a wonderful',
            'market',
            'city center',
            'downtown',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'goed_error',
          pattern: /\bgoed\b/i,
          errorType: 'grammar',
          message: 'The past tense of "go" is "went", not "goed".',
          correctionPattern: 'I went to...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_40_1',
        type: 'fill_blank',
        prompt: 'Select the correct past verb: "We ___ to the festival yesterday."',
        options: [
          { id: 'opt_1', text: 'went', isCorrect: true },
          { id: 'opt_2', text: 'goed', isCorrect: false },
          { id: 'opt_3', text: 'go', isCorrect: false },
        ],
        correctAnswer: 'went',
        explanation: 'Go → went.',
      },
    },
    {
      id: 'turn_a1_40_2',
      turnIndex: 2,
      partnerPrompt:
        'The market is always so lively! Did you find anything interesting there? What did you buy?',
      partnerAudioText:
        'The market is always so lively! Did you find anything interesting there? What did you buy?',
      partnerQuestionHindi:
        'बाज़ार हमेशा बहुत जीवंत रहता है! क्या आपको वहाँ कुछ दिलचस्प मिला? आपने क्या खरीदा?',
      expectedFunction: 'Describe Purchases with Irregular Verb (bought / saw)',
      contextGoal:
        'Describe what you bought and saw (e.g. "I bought a warm sweater and some books", "I saw a street performer").',
      targetVocabulary: ['bought', 'saw', 'books', 'clothes', 'sweater', 'fresh fruit', 'market'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I bought two vintage art books and a warm wool sweater. I also saw some incredible handmade pottery!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I bought some fresh fruit and saw a great live music band.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Bought a cozy jacket and saw lots of cool antique stalls.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Purchases & Sightings',
          patterns: ['bought', 'saw', 'sweater', 'books', 'jacket', 'fruit', 'pottery', 'antique'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'buyed_error',
          pattern: /\bbuyed\b/i,
          errorType: 'grammar',
          message: 'The past tense of "buy" is "bought", not "buyed".',
          correctionPattern: 'I bought...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_40_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I ___ a new jacket at the store yesterday."',
        options: [
          { id: 'opt_1', text: 'bought', isCorrect: true },
          { id: 'opt_2', text: 'buyed', isCorrect: false },
          { id: 'opt_3', text: 'buying', isCorrect: false },
        ],
        correctAnswer: 'bought',
        explanation: 'Buy → bought.',
      },
    },
    {
      id: 'turn_a1_40_3',
      turnIndex: 3,
      partnerPrompt:
        'Wool sweater sounds cozy! You must have gotten hungry after all that shopping. Where did you have lunch and what did you eat?',
      partnerAudioText:
        'Wool sweater sounds cozy! You must have gotten hungry after all that shopping. Where did you have lunch and what did you eat?',
      partnerQuestionHindi:
        'ऊन का स्वेटर आरामदायक लगता है! इतनी खरीदारी के बाद आपको भूख लग गई होगी। आपने दोपहर का भोजन कहाँ किया और क्या खाया?',
      expectedFunction: 'Narrate Dining Experience (ate / drank / had)',
      contextGoal:
        'Describe what food and drinks you had (e.g. "We ate wood-fired pizza and drank lemonade").',
      targetVocabulary: ['ate', 'drank', 'had lunch', 'pizza', 'noodles', 'juice', 'coffee', 'delicious'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'We ate at a little Italian trattoria. We ate fresh Margherita pizza and drank iced lemon tea. It was delicious!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'We ate wood-fired pizza and drank fresh lemonade by the square.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Ate delicious pasta and drank iced coffee. Perfect lunch!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Dining Past Narrative',
          patterns: ['ate', 'drank', 'had lunch', 'pizza', 'pasta', 'noodles', 'juice', 'tea', 'coffee', 'delicious'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'eated_error',
          pattern: /\beated\b/i,
          errorType: 'grammar',
          message: 'The past tense of "eat" is "ate", not "eated".',
          correctionPattern: 'We ate...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_40_3',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly uses past verbs for food and drink?',
        options: [
          { id: 'opt_1', text: 'We ate pizza and drank orange juice.', isCorrect: true },
          { id: 'opt_2', text: 'We eated pizza and drinked orange juice.', isCorrect: false },
          { id: 'opt_3', text: 'We was eating pizza and drink juice.', isCorrect: false },
        ],
        correctAnswer: 'We ate pizza and drank orange juice.',
        explanation: 'Eat → ate, drink → drank.',
      },
    },
    {
      id: 'turn_a1_40_4',
      turnIndex: 4,
      partnerPrompt:
        'That sounds like the ideal Saturday! We should definitely visit that market together next weekend. Shall we plan for next Saturday morning?',
      partnerAudioText:
        'That sounds like the ideal Saturday! We should definitely visit that market together next weekend. Shall we plan for next Saturday morning?',
      partnerQuestionHindi:
        'यह एक आदर्श शनिवार जैसा लगता है! हमें अगले वीकेंड उस बाज़ार में ज़रूर साथ जाना चाहिए। क्या हम अगले शनिवार की सुबह का प्लान बनाएँ?',
      expectedFunction: 'Agree on Future Plan & Conclude Friendly Conversation',
      contextGoal:
        'Enthusiastically agree to visit the market next Saturday and say goodbye.',
      targetVocabulary: ['sounds great', 'love that', 'next saturday', 'see you', 'plan', 'bye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I would love that! Next Saturday morning works perfectly for me. Let’s meet at ten at the entrance!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Sounds great Leo! Let’s go next Saturday morning. See you then!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Count me in! Saturday at ten. See you Leo!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Future Agreement & Farewell',
          patterns: ['sounds great', 'love that', 'next saturday', 'see you', 'meet at', 'bye', 'ten'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_40_4',
        type: 'multiple_choice',
        prompt: 'Which sentence agrees to meet next Saturday naturally?',
        options: [
          { id: 'opt_1', text: 'That sounds great, Leo! Let’s meet next Saturday morning.', isCorrect: true },
          { id: 'opt_2', text: 'I am make meet Saturday go.', isCorrect: false },
          { id: 'opt_3', text: 'You came Saturday with me.', isCorrect: false },
        ],
        correctAnswer: 'That sounds great, Leo! Let’s meet next Saturday morning.',
        explanation: 'Natural and enthusiastic agreement.',
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
