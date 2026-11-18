import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_21: ConversationDefinition = {
  id: 'conv_a1_21',
  title: 'Grocery Shopping at the Fresh Market',
  cefr: 'A1',
  unitId: 'unit_a1_2',
  lessonLinks: ['lesson_a1_2_21'],
  estimatedMinutes: 5,
  scenario:
    'You are shopping for fresh groceries at a local produce stall. The friendly vendor, Matteo, is ready to weigh your items and help you choose fresh ingredients.',
  communicativeGoals: [
    'Order countable items (apples, bananas, eggs) and uncountable items (rice, cheese, milk)',
    'Use containers and partitives (a kilo of, a bottle of, a bunch of, a bag of)',
    'Use "some" in requests and "any" in questions/negatives',
    'Ask about total prices using "How much is...?" or "How much are...?"',
  ],
  canDoStatements: [
    'Can ask for food items and quantities at a market counter (CEFR A1)',
    'Can use partitives ("a kilo of", "a bottle of") and quantifiers ("some", "any")',
    'Can inquire about prices and complete grocery purchases',
  ],
  characters: [
    {
      id: 'char_matteo',
      name: 'Matteo',
      role: 'Market Stall Vendor',
      avatar: '👨‍🌾',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'kilo',
        ipa: '/ˈkiːloʊ/',
        partOfSpeech: 'noun',
        meaning: 'A unit of weight equal to 1,000 grams',
        exampleSentence: 'I need two kilos of red tomatoes, please.',
        translations: { hi: 'किलो' },
      },
      {
        word: 'bottle',
        ipa: '/ˈbɒtəl/',
        partOfSpeech: 'noun',
        meaning: 'A glass or plastic container with a narrow neck',
        exampleSentence: 'Can I have a bottle of olive oil?',
        translations: { hi: 'बोतल' },
      },
      {
        word: 'fresh',
        ipa: '/frɛʃ/',
        partOfSpeech: 'adjective',
        meaning: 'Recently made, picked, or prepared; not frozen or old',
        exampleSentence: 'These oranges are very sweet and fresh.',
        translations: { hi: 'ताज़ा' },
      },
      {
        word: 'total',
        ipa: '/ˈtoʊtəl/',
        partOfSpeech: 'noun',
        meaning: 'The whole number or amount',
        exampleSentence: 'What is the total price for all the groceries?',
        translations: { hi: 'कुल / कुल राशि' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I would like a kilo of...',
        functionCategory: 'Quantity Request',
        exampleSentence: 'I would like a kilo of green apples, please.',
      },
      {
        phrase: 'Do you have any...?',
        functionCategory: 'Stock Inquiry',
        exampleSentence: 'Do you have any fresh organic eggs?',
      },
      {
        phrase: 'How much are the...?',
        functionCategory: 'Price Inquiry',
        exampleSentence: 'How much are the sweet oranges per kilo?',
      },
      {
        phrase: 'That is all for today.',
        functionCategory: 'Transaction Closing',
        exampleSentence: 'That is all for today, thank you.',
      },
    ],
    grammar: {
      title: 'Countable vs. Uncountable Nouns & Quantifiers (some, any, much, many, a bottle/kilo of)',
      conceptExplanation:
        'Countable nouns take numbers (one apple, two apples). Uncountable nouns take partitives (a kilo of rice, a bottle of water). Use "some" in positive offers/requests and "any" in questions and negative statements.',
      patternFormula: 'I\'d like + [a kilo of / some] + [Noun] | How much + is/are + [Item]?',
      contrastExamples: [
        {
          incorrect: 'I want two milks and three rices.',
          correct: 'I want two bottles of milk and three bags of rice.',
          explanation: 'Uncountable nouns like milk and rice require container units.',
        },
        {
          incorrect: 'How many is the cheese?',
          correct: 'How much is the cheese?',
          explanation: 'Use "How much is" for prices and uncountable items.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Matteo',
        text: 'Good morning! Everything is fresh from the farm today. What would you like?',
        translation: 'सुप्रभात! आज सब कुछ खेत से एकदम ताज़ा है। आप क्या लेना पसंद करेंगे?',
      },
      {
        speaker: 'You',
        text: 'Hello Matteo! I would like a kilo of apples and some fresh tomatoes, please.',
        translation: 'नमस्ते मातेओ! मुझे एक किलो सेब और कुछ ताज़ा टमाटर चाहिए, कृपया।',
      },
      {
        speaker: 'Matteo',
        text: 'Certainly! Here is a kilo of crisp apples. Do you need any onions or garlic today?',
        translation: 'बिल्कुल! यह रहा एक किलो कुरकुरा सेब। क्या आपको आज प्याज़ या लहसुन की ज़रूरत है?',
      },
      {
        speaker: 'You',
        text: 'No onions, thanks, but I need a bottle of olive oil. How much is the total?',
        translation: 'प्याज़ नहीं, धन्यवाद, लेकिन मुझे एक बोतल जैतून का तेल चाहिए। कुल कितना हुआ?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_21_1',
      type: 'fill_blank',
      prompt: 'Complete the quantity expression: "Could I have a bottle ___ olive oil?"',
      options: [
        { id: 'opt_1', text: 'of', isCorrect: true },
        { id: 'opt_2', text: 'for', isCorrect: false },
        { id: 'opt_3', text: 'with', isCorrect: false },
      ],
      correctAnswer: 'of',
      explanation: '"a bottle of" is the standard partitive phrase.',
    },
    {
      id: 'cp_a1_21_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly asks about the total cost?',
      options: [
        { id: 'opt_1', text: 'How much is the total, please?', isCorrect: true },
        { id: 'opt_2', text: 'How many is total cost?', isCorrect: false },
        { id: 'opt_3', text: 'What many price is?', isCorrect: false },
      ],
      correctAnswer: 'How much is the total, please?',
      explanation: 'Use "How much is..." for prices.',
    },
    {
      id: 'cp_a1_21_3',
      type: 'multiple_choice',
      prompt: 'When asking if an ingredient is available, use:',
      options: [
        { id: 'opt_1', text: 'Do you have any fresh cheese?', isCorrect: true },
        { id: 'opt_2', text: 'Do you have some any cheese?', isCorrect: false },
        { id: 'opt_3', text: 'Have you much cheeses?', isCorrect: false },
      ],
      correctAnswer: 'Do you have any fresh cheese?',
      explanation: 'Use "any" in questions about available stock.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_21_1',
      scenarioContext: 'Order apples and tomatoes at the market stall.',
      prompt: 'Build: "I would like a kilo of apples and some tomatoes, please."',
      targetStructure: 'Polite request + partitive noun phrase + coordinator + quantified noun + please',
      wordBank: ['I', 'would', 'like', 'a', 'kilo', 'of', 'apples', 'and', 'some', 'tomatoes', 'please', 'many'],
      acceptableSolutions: [
        'I would like a kilo of apples and some tomatoes please',
        'I would like a kilo of apples and some tomatoes, please.',
      ],
      explanation: 'Accurate mix of partitive "a kilo of" and quantifier "some".',
    },
    {
      id: 'sc_a1_21_2',
      scenarioContext: 'Ask for olive oil and the total cost.',
      prompt: 'Build: "Can I have a bottle of oil? How much is it?"',
      targetStructure: 'Modal request with partitive + price inquiry',
      wordBank: ['Can', 'I', 'have', 'a', 'bottle', 'of', 'oil', 'How', 'much', 'is', 'it', 'many'],
      acceptableSolutions: [
        'Can I have a bottle of oil How much is it',
        'Can I have a bottle of oil? How much is it?',
      ],
      explanation: 'Combined item request with price inquiry.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_21_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning! Welcome to the market stall. What fresh fruit or vegetables can I weigh for you today?',
      partnerAudioText:
        'Good morning! Welcome to the market stall. What fresh fruit or vegetables can I weigh for you today?',
      partnerQuestionHindi:
        'सुप्रभात! बाज़ार के स्टॉल पर आपका स्वागत है। आज मैं आपके लिए कौन से ताज़ा फल या सब्जियाँ तोलूँ?',
      expectedFunction: 'Order Produce by Quantity',
      contextGoal:
        'Ask for specific fruit or vegetables with quantities (e.g. "a kilo of apples", "some tomatoes", "two bananas").',
      targetVocabulary: ['kilo', 'apples', 'tomatoes', 'would like', 'some', 'please'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Good morning! I would like a kilo of apples and some fresh tomatoes, please.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hello, could I get two kilos of oranges and some onions?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Hi Matteo, a kilo of green grapes and some carrots, please.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Produce Order & Quantity',
          patterns: ['kilo of', 'some apples', 'some tomatoes', 'two kilos', 'would like', 'could i get', 'can i have', 'bananas', 'oranges'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'missing_of_after_kilo',
          pattern: /\bkilo (apples|tomatoes|oranges|potatoes)\b/i,
          errorType: 'grammar',
          message: 'Always say "a kilo of [items]", not just "a kilo [items]".',
          correctionPattern: 'a kilo of...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_21_1',
        type: 'fill_blank',
        prompt: 'Choose the correct preposition: "I would like two kilos ___ potatoes."',
        options: [
          { id: 'opt_1', text: 'of', isCorrect: true },
          { id: 'opt_2', text: 'from', isCorrect: false },
          { id: 'opt_3', text: 'with', isCorrect: false },
        ],
        correctAnswer: 'of',
        explanation: 'Use "of" after measurement units: "two kilos of".',
      },
    },
    {
      id: 'turn_a1_21_2',
      turnIndex: 2,
      partnerPrompt:
        'Here are your apples and tomatoes! We also have fresh olive oil and local honey in bottles. Do you need any oil or dairy today?',
      partnerAudioText:
        'Here are your apples and tomatoes! We also have fresh olive oil and local honey in bottles. Do you need any oil or dairy today?',
      partnerQuestionHindi:
        'ये रहे आपके सेब और टमाटर! हमारे पास बोतलों में ताज़ा जैतून का तेल और स्थानीय शहद भी है। क्या आपको आज तेल या डेयरी उत्पादों की ज़रूरत है?',
      expectedFunction: 'Order Uncountable Item / Partitive',
      contextGoal:
        'Order an uncountable product using a partitive (e.g. "a bottle of olive oil", "some cheese") or politely decline.',
      targetVocabulary: ['bottle', 'olive oil', 'cheese', 'some', 'a bottle of'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes, please! I will take one bottle of olive oil and a piece of cheese.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Could I also have a bottle of honey, please?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Just a bottle of olive oil, thanks.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Partitive Item Request',
          patterns: ['bottle of', 'olive oil', 'honey', 'cheese', 'piece of', 'yes please', 'just a bottle'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_21_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly orders liquids?',
        options: [
          { id: 'opt_1', text: 'I need a bottle of olive oil.', isCorrect: true },
          { id: 'opt_2', text: 'I need an olive oil.', isCorrect: false },
          { id: 'opt_3', text: 'I need two oils olive.', isCorrect: false },
        ],
        correctAnswer: 'I need a bottle of olive oil.',
        explanation: 'Use "a bottle of" for liquids like oil.',
      },
    },
    {
      id: 'turn_a1_21_3',
      turnIndex: 3,
      partnerPrompt:
        'Got the olive oil right here. Is there anything else you would like, or is that everything for your shopping today?',
      partnerAudioText:
        'Got the olive oil right here. Is there anything else you would like, or is that everything for your shopping today?',
      partnerQuestionHindi:
        'जैतून का तेल यहाँ है। क्या आप कुछ और लेना चाहेंगे, या आपकी आज की खरीदारी पूरी हो गई?',
      expectedFunction: 'Ask Total Price & Conclude',
      contextGoal:
        'State that is everything and ask for the total price (e.g. "How much is the total?", "How much do I owe you?").',
      targetVocabulary: ['that is all', 'everything', 'how much', 'total', 'please'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'That is everything for today, thank you. How much is the total?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'That is all. How much does it cost altogether?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'All done! What is the total price, please?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing Statement',
          patterns: ['that is all', 'that is everything', 'all done', 'nothing else', 'just this'],
          required: true,
        },
        {
          name: 'Price Inquiry',
          patterns: ['how much is', 'how much is the total', 'what is the total', 'how much does it cost', 'how much do i owe'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_21_3',
        type: 'multiple_choice',
        prompt: 'Which is the natural phrase to ask for the final bill at a market?',
        options: [
          { id: 'opt_1', text: 'That is all, thank you. How much is the total?', isCorrect: true },
          { id: 'opt_2', text: 'I finish now, how many money?', isCorrect: false },
          { id: 'opt_3', text: 'All done, what cost price money?', isCorrect: false },
        ],
        correctAnswer: 'That is all, thank you. How much is the total?',
        explanation: '"That is all, thank you. How much is the total?" is polite and natural.',
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
