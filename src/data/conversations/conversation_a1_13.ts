import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_13: ConversationDefinition = {
  id: 'conv_a1_13',
  title: 'Ordering at a Café Counter (Some / Any / A / An)',
  cefr: 'A1',
  unitId: 'unit_a1_1',
  lessonLinks: ['lesson_a1_1_13'],
  estimatedMinutes: 5,
  scenario:
    'You are in a lively coffee shop near campus. You order a hot drink and a bakery snack at the counter with the barista, Emma.',
  communicativeGoals: [
    'Order food and drinks politely using "Can I have...?" or "I would like..."',
    'Use countable and uncountable determiners correctly (a coffee, a croissant, some water, any sugar)',
    'Inquire about availability ("Do you have any fresh sandwiches?")',
    'Ask the total price and complete the payment transaction',
  ],
  canDoStatements: [
    'Can order food and beverages in a café or restaurant setting (CEFR A1)',
    'Can use "some" in requests/affirmations and "any" in questions/negatives',
    'Can ask for the bill/price and handle simple retail transactions',
  ],
  characters: [
    {
      id: 'char_emma_barista',
      name: 'Emma',
      role: 'Café Barista & Cashier',
      avatar: '☕',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'croissant',
        ipa: '/ˈkwæsɒ̃/',
        partOfSpeech: 'noun',
        meaning: 'A crescent-shaped roll made of sweet flaky pastry',
        exampleSentence: 'Can I have a warm butter croissant?',
        translations: { hi: 'क्रॉसॉन्ट (पेस्ट्री)' },
      },
      {
        word: 'sandwich',
        ipa: '/ˈsænwɪtʃ/',
        partOfSpeech: 'noun',
        meaning: 'Two pieces of bread with filling between them',
        exampleSentence: 'Do you have any cheese sandwiches?',
        translations: { hi: 'सैंडविच' },
      },
      {
        word: 'some',
        ipa: '/sʌm/',
        partOfSpeech: 'determiner',
        meaning: 'An unspecified amount or number of something',
        exampleSentence: 'Would you like some milk in your coffee?',
        translations: { hi: 'कुछ / थोड़ा' },
      },
      {
        word: 'any',
        ipa: '/ˈeni/',
        partOfSpeech: 'determiner',
        meaning: 'Used in questions and negative statements for quantity',
        exampleSentence: 'Is there any cake left?',
        translations: { hi: 'कोई / कुछ भी' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Can I have a...?',
        functionCategory: 'Polite Ordering Formula',
        exampleSentence: 'Can I have a large cappuccino, please?',
      },
      {
        phrase: 'Do you have any...?',
        functionCategory: 'Inquiring Availability',
        exampleSentence: 'Do you have any chocolate muffins today?',
      },
      {
        phrase: 'For here or to go?',
        functionCategory: 'Service Venue Question',
        exampleSentence: 'Is that for here or to go?',
      },
      {
        phrase: 'How much is that in total?',
        functionCategory: 'Total Bill Inquiry',
        exampleSentence: 'How much is that altogether?',
      },
    ],
    grammar: {
      title: 'Countable vs. Uncountable Nouns & Determiners (A / An / Some / Any)',
      conceptExplanation:
        'Use "a/an" with singular countable items (a muffin, a croissant). Use "some" with plural or uncountable items in affirmative sentences and polite offers ("some water", "some milk"). Use "any" in general questions and negative sentences ("Is there any sugar?").',
      patternFormula: 'Can I have a/an + [Countable] | Can I have some + [Uncountable] | Do you have any + [Noun]?',
      contrastExamples: [
        {
          incorrect: 'Can I have a water please?',
          correct: 'Can I have a bottle of water / some water, please?',
          explanation: '"Water" is uncountable; use "some water" or specify the container.',
        },
        {
          incorrect: 'I don’t want some sugar.',
          correct: 'I don’t want any sugar.',
          explanation: 'Negative sentences use "any" instead of "some".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Emma',
        text: 'Hi there! What can I get started for you today?',
        translation: 'नमस्ते! आज मैं आपके लिए क्या ला सकती हूँ?',
      },
      {
        speaker: 'You',
        text: 'Hello! Can I have a medium latte with oat milk, and a chocolate croissant please?',
        translation: 'नमस्ते! क्या मुझे ओट मिल्क के साथ एक मीडियम लाटे और एक चॉकलेट क्रॉसॉन्ट मिल सकता है?',
      },
      {
        speaker: 'Emma',
        text: 'Of course! Do you want any sugar or extra syrup with that?',
        translation: 'बिल्कुल! क्या आप इसके साथ कोई चीनी या अतिरिक्त सिरप चाहते हैं?',
      },
      {
        speaker: 'You',
        text: 'No sugar, thank you! How much is that in total?',
        translation: 'चीनी नहीं, धन्यवाद! कुल मिलाकर कितना हुआ?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_13_1',
      type: 'multiple_choice',
      prompt: 'Which phrase is the natural polite way to order a drink?',
      options: [
        { id: 'opt_1', text: 'Can I have a cup of tea, please?', isCorrect: true },
        { id: 'opt_2', text: 'Give me tea now cup.', isCorrect: false },
        { id: 'opt_3', text: 'I am want tea is cup.', isCorrect: false },
      ],
      correctAnswer: 'Can I have a cup of tea, please?',
      explanation: '"Can I have... please?" is the standard polite ordering structure.',
    },
    {
      id: 'cp_a1_13_2',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "We don’t have ___ chocolate cookies left today."',
      options: [
        { id: 'opt_1', text: 'any', isCorrect: true },
        { id: 'opt_2', text: 'some', isCorrect: false },
        { id: 'opt_3', text: 'a', isCorrect: false },
      ],
      correctAnswer: 'any',
      explanation: 'Use "any" with plural nouns in negative sentences.',
    },
    {
      id: 'cp_a1_13_3',
      type: 'multiple_choice',
      prompt: 'Select the correct determiner for an affirmative request:',
      options: [
        { id: 'opt_1', text: 'Could I please have some water?', isCorrect: true },
        { id: 'opt_2', text: 'Could I please have a water?', isCorrect: false },
        { id: 'opt_3', text: 'Could I please have an water?', isCorrect: false },
      ],
      correctAnswer: 'Could I please have some water?',
      explanation: 'Uncountable nouns take "some" in polite requests.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_13_1',
      scenarioContext: 'Order a coffee and bakery item politely.',
      prompt: 'Build: "Can I have a coffee and a croissant please?"',
      targetStructure: 'Modal can + subject I + verb have + item 1 + conjunction + item 2 + politeness token',
      wordBank: ['Can', 'I', 'have', 'a', 'coffee', 'and', 'a', 'croissant', 'please', 'some', 'any', 'is'],
      acceptableSolutions: [
        'Can I have a coffee and a croissant please',
        'Can I have a coffee and a croissant, please?',
        'Can I please have a coffee and a croissant?',
      ],
      explanation: 'Standard polite café order.',
    },
    {
      id: 'sc_a1_13_2',
      scenarioContext: 'Inquire if there are any fresh sandwiches available.',
      prompt: 'Build: "Do you have any fresh sandwiches today?"',
      targetStructure: 'Auxiliary do + subject you + verb have + determiner any + adjective + plural noun + time adverb',
      wordBank: ['Do', 'you', 'have', 'any', 'fresh', 'sandwiches', 'today', 'some', 'is', 'a'],
      acceptableSolutions: [
        'Do you have any fresh sandwiches today',
        'Do you have any fresh sandwiches today?',
        'Do you have any sandwiches today?',
      ],
      explanation: 'Uses "any" in an interrogative availability question.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_13_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! Welcome to Bean & Leaf Café. What drink can I make for you today?',
      partnerAudioText: 'Hi there! Welcome to Bean & Leaf Café. What drink can I make for you today?',
      partnerQuestionHindi: 'नमस्ते! बीन एंड लीफ़ कैफ़े में आपका स्वागत है। आज मैं आपके लिए कौन सा पेय बना सकती हूँ?',
      expectedFunction: 'Order Beverage with Determiner',
      contextGoal: 'Order a drink (e.g. coffee, tea, latte, cappuccino) using "Can I have a..." or "I would like a...".',
      targetVocabulary: ['can', 'have', 'coffee', 'tea', 'latte', 'cappuccino', 'milk', 'please'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hello Emma! Can I have a large cappuccino with oat milk, please?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hi! I would like a hot black coffee and some water please.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Can I get an iced green tea please?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Drink Order & Politeness',
          patterns: [
            'can i have a',
            'can i get a',
            'i would like a',
            'coffee',
            'tea',
            'latte',
            'cappuccino',
            'please',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_13_1',
        type: 'multiple_choice',
        prompt: 'Choose the most polite way to order coffee:',
        options: [
          { id: 'opt_1', text: 'Can I have a hot coffee, please?', isCorrect: true },
          { id: 'opt_2', text: 'Give me coffee.', isCorrect: false },
          { id: 'opt_3', text: 'I am taking coffee is now.', isCorrect: false },
        ],
        correctAnswer: 'Can I have a hot coffee, please?',
        explanation: '"Can I have... please?" is polite and natural.',
      },
    },
    {
      id: 'turn_a1_13_2',
      turnIndex: 2,
      partnerPrompt:
        'One cappuccino coming right up! Would you like any bakery items with that? We have fresh butter croissants, muffins, and chocolate cookies.',
      partnerAudioText: 'One cappuccino coming right up! Would you like any bakery items with that? We have fresh butter croissants, muffins, and chocolate cookies.',
      partnerQuestionHindi: 'एक कैपुचीनो अभी तैयार करती हूँ! क्या आप इसके साथ कोई बेकरी आइटम लेना चाहेंगे? हमारे पास ताज़ा बटर क्रॉसॉन्ट, मफिन और चॉकलेट कुकीज़ हैं।',
      expectedFunction: 'Order Snack & Inquire Bill',
      contextGoal: 'Order a croissant or muffin, specify for here/to go, and ask the total price.',
      targetVocabulary: ['croissant', 'muffin', 'cookie', 'for', 'here', 'to', 'go', 'how', 'much'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes, can I also have a butter croissant for here? How much is that in total?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'A chocolate muffin to go please! How much is it?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Just the croissant please. What is the total?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Food Selection & Price Inquiry',
          patterns: ['croissant', 'muffin', 'cookie', 'how much', 'total', 'for here', 'to go', 'please'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_13_2',
        type: 'fill_blank',
        prompt: 'Complete the price inquiry: "How ___ is the coffee and croissant?"',
        options: [
          { id: 'opt_1', text: 'much', isCorrect: true },
          { id: 'opt_2', text: 'many', isCorrect: false },
          { id: 'opt_3', text: 'cost', isCorrect: false },
        ],
        correctAnswer: 'much',
        explanation: 'Use "How much is...?" for total price.',
      },
    },
    {
      id: 'turn_a1_13_3',
      turnIndex: 3,
      partnerPrompt:
        'That will be $6.50 in total! You can tap your card on the terminal. Here is your warm croissant and coffee. Have a delightful day!',
      partnerAudioText: 'That will be $6.50 in total! You can tap your card on the terminal. Here is your warm croissant and coffee. Have a delightful day!',
      partnerQuestionHindi: 'कुल मिलाकर $6.50 होंगे! आप टर्मिनल पर अपना कार्ड टैप कर सकते हैं। यह रहा आपका गर्म क्रॉसॉन्ट और कॉफ़ी। आपका दिन शानदार हो!',
      expectedFunction: 'Closing & Payment Gratitude',
      contextGoal: 'Thank Emma, confirm payment, and wish her a great day.',
      targetVocabulary: ['thank', 'card', 'day', 'goodbye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you so much Emma! Have a wonderful day, goodbye!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thanks a lot! Enjoy your day, bye.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Card tapped! Thanks Emma, bye.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Gratitude',
          patterns: ['thank you', 'thanks', 'have a wonderful day', 'have a great day', 'goodbye', 'bye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_13_3',
        type: 'multiple_choice',
        prompt: 'Which phrase is natural when concluding a retail purchase?',
        options: [
          { id: 'opt_1', text: 'Thank you very much, have a great day!', isCorrect: true },
          { id: 'opt_2', text: 'I am finished you give money.', isCorrect: false },
          { id: 'opt_3', text: 'Food is take now.', isCorrect: false },
        ],
        correctAnswer: 'Thank you very much, have a great day!',
        explanation: 'Courteous customer farewell.',
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
