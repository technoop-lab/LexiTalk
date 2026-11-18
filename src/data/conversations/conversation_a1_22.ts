import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_22: ConversationDefinition = {
  id: 'conv_a1_22',
  title: 'Ordering Dinner at a Neighborhood Bistro',
  cefr: 'A1',
  unitId: 'unit_a1_2',
  lessonLinks: ['lesson_a1_2_22'],
  estimatedMinutes: 5,
  scenario:
    'You are dining at a cozy local restaurant. The friendly waiter, Marco, comes to take your order for drinks, main courses, and dessert.',
  communicativeGoals: [
    'Use polite dining request formulas ("I would like / I\'d like...", "Could I have...")',
    'Order courses logically (drink, starter/main course, dessert)',
    'State dietary preferences or ask about menu recommendations',
    'Politely request the bill at the end of the meal',
  ],
  canDoStatements: [
    'Can order food and drinks politely from a restaurant menu (CEFR A1)',
    'Can express preferences using "I would like" and "Could I have"',
    'Can ask for the bill and handle simple dining payment interactions',
  ],
  characters: [
    {
      id: 'char_marco',
      name: 'Marco',
      role: 'Restaurant Server',
      avatar: '🤵',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'starter',
        ipa: '/ˈstɑːrtər/',
        partOfSpeech: 'noun',
        meaning: 'A small dish served as the first course of a meal',
        exampleSentence: 'For my starter, I would like the tomato soup.',
        translations: { hi: 'शुरुआती व्यंजन / स्टार्टर' },
      },
      {
        word: 'main course',
        ipa: '/meɪn kɔːrs/',
        partOfSpeech: 'noun',
        meaning: 'The principal dish of a meal',
        exampleSentence: 'For the main course, I will have grilled salmon with vegetables.',
        translations: { hi: 'मुख्य भोजन / मेन कोर्स' },
      },
      {
        word: 'dessert',
        ipa: '/dɪˈzɜːrt/',
        partOfSpeech: 'noun',
        meaning: 'Sweet food eaten at the end of a meal',
        exampleSentence: 'Would you like some chocolate cake for dessert?',
        translations: { hi: 'मिठाई / डेज़र्ट' },
      },
      {
        word: 'bill',
        ipa: '/bɪl/',
        partOfSpeech: 'noun',
        meaning: 'A written statement showing how much you owe for food or services',
        exampleSentence: 'Could we have the bill, please?',
        translations: { hi: 'बिल / भुगतान पर्ची' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I would like / I\'d like...',
        functionCategory: 'Polite Order',
        exampleSentence: 'I\'d like the vegetable pasta, please.',
      },
      {
        phrase: 'Could I have...?',
        functionCategory: 'Polite Request',
        exampleSentence: 'Could I have a glass of still water, please?',
      },
      {
        phrase: 'What do you recommend?',
        functionCategory: 'Menu Recommendation',
        exampleSentence: 'What do you recommend for the main course?',
      },
      {
        phrase: 'Could we have the bill, please?',
        functionCategory: 'Payment Request',
        exampleSentence: 'Excuse me, could we have the bill, please?',
      },
    ],
    grammar: {
      title: 'Polite Requests ("Would like" & "Could I have") in Dining',
      conceptExplanation:
        'Always use polite modal formulas when ordering food: "I would like / I\'d like [noun/to verb]" or "Could I have [noun], please?". Avoid blunt imperatives like "Give me pizza".',
      patternFormula: 'I would like / I\'d like + [Food/Drink] | Could I have + [Item] + please?',
      contrastExamples: [
        {
          incorrect: 'I want water and give me steak.',
          correct: 'Could I have some water and the steak, please?',
          explanation: 'Use "Could I have..." or "I\'d like..." for polite dining interactions.',
        },
        {
          incorrect: 'I would liking pasta.',
          correct: 'I would like the pasta, please.',
          explanation: '"Would like" is followed by the base noun or to-infinitive, never a gerund.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Marco',
        text: 'Good evening! Welcome to Bistro Paris. Can I start you off with something to drink?',
        translation: 'शुभ संध्या! बिस्त्रो पेरिस में आपका स्वागत है। क्या मैं आपके लिए कुछ पीने का लाऊँ?',
      },
      {
        speaker: 'You',
        text: 'Good evening! I would like a sparkling water with lemon, please.',
        translation: 'शुभ संध्या! मुझे नींबू के साथ एक स्पार्कलिंग पानी चाहिए, कृपया।',
      },
      {
        speaker: 'Marco',
        text: 'Wonderful. And what would you like for your main dish tonight?',
        translation: 'बहुत बढ़िया। और आज रात मुख्य भोजन के लिए आप क्या लेना पसंद करेंगे?',
      },
      {
        speaker: 'You',
        text: 'Could I have the grilled chicken with salad, please? Is it spicy?',
        translation: 'क्या मुझे सलाद के साथ ग्रिल्ड चिकन मिल सकता है, कृपया? क्या यह तीखा है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_22_1',
      type: 'fill_blank',
      prompt: 'Complete the polite order: "I ___ like the mushroom risotto, please."',
      options: [
        { id: 'opt_1', text: 'would', isCorrect: true },
        { id: 'opt_2', text: 'am', isCorrect: false },
        { id: 'opt_3', text: 'will be', isCorrect: false },
      ],
      correctAnswer: 'would',
      explanation: '"I would like" is the polite dining structure.',
    },
    {
      id: 'cp_a1_22_2',
      type: 'multiple_choice',
      prompt: 'Which request for the check is most polite?',
      options: [
        { id: 'opt_1', text: 'Could I have the bill, please?', isCorrect: true },
        { id: 'opt_2', text: 'Bring me bill right now.', isCorrect: false },
        { id: 'opt_3', text: 'I am taking the bill money.', isCorrect: false },
      ],
      correctAnswer: 'Could I have the bill, please?',
      explanation: '"Could I have the bill, please?" is standard polite dining etiquette.',
    },
    {
      id: 'cp_a1_22_3',
      type: 'multiple_choice',
      prompt: 'Which word means the sweet final course?',
      options: [
        { id: 'opt_1', text: 'dessert', isCorrect: true },
        { id: 'opt_2', text: 'starter', isCorrect: false },
        { id: 'opt_3', text: 'napkin', isCorrect: false },
      ],
      correctAnswer: 'dessert',
      explanation: '"dessert" refers to sweet food at the end of a meal.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_22_1',
      scenarioContext: 'Order sparkling water politely.',
      prompt: 'Build: "Could I have a bottle of sparkling water, please?"',
      targetStructure: 'Polite modal inversion + partitive noun phrase + polite closer',
      wordBank: ['Could', 'I', 'have', 'a', 'bottle', 'of', 'sparkling', 'water', 'please', 'would', 'give'],
      acceptableSolutions: [
        'Could I have a bottle of sparkling water please',
        'Could I have a bottle of sparkling water, please?',
      ],
      explanation: 'Polite, standard beverage request formula.',
    },
    {
      id: 'sc_a1_22_2',
      scenarioContext: 'Order a main course meal.',
      prompt: 'Build: "For the main course, I would like the grilled fish."',
      targetStructure: 'Prepositional course phrase + subject + would like + definite noun phrase',
      wordBank: ['For', 'the', 'main', 'course', 'I', 'would', 'like', 'the', 'grilled', 'fish', 'want', 'am'],
      acceptableSolutions: [
        'For the main course I would like the grilled fish',
        'For the main course, I would like the grilled fish.',
      ],
      explanation: 'Clear course selection using "I would like".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_22_1',
      turnIndex: 1,
      partnerPrompt:
        'Good evening! Table for one? Welcome. Can I bring you something to drink while you look over our menu?',
      partnerAudioText:
        'Good evening! Table for one? Welcome. Can I bring you something to drink while you look over our menu?',
      partnerQuestionHindi:
        'शुभ संध्या! एक व्यक्ति की टेबल? आपका स्वागत है। जब तक आप मेनू देखते हैं, क्या मैं आपके लिए कुछ पीने का लाऊँ?',
      expectedFunction: 'Order Beverage Politely',
      contextGoal:
        'Greet the server and order a drink using "I\'d like..." or "Could I have..." (e.g. sparkling water, iced tea, lemon water).',
      targetVocabulary: ['good evening', 'water', 'sparkling water', 'could i have', 'would like', 'please'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Good evening! I would like a glass of sparkling water with lemon, please.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hello! Could I have an iced tea, please?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Just some still water for now, please.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Drink Order',
          patterns: ['water', 'sparkling water', 'still water', 'tea', 'iced tea', 'juice', 'lemonade', 'could i have', 'i would like', 'i d like'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'blunt_drink_order',
          pattern: /^(give me|i want water)$/i,
          errorType: 'interaction',
          message: 'Use "I\'d like..." or "Could I have... please?" for polite ordering.',
          correctionPattern: 'Could I have [Drink], please?',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_22_1',
        type: 'fill_blank',
        prompt: 'Choose the polite phrasing: "___ a glass of orange juice, please."',
        options: [
          { id: 'opt_1', text: 'Could I have', isCorrect: true },
          { id: 'opt_2', text: 'Give me', isCorrect: false },
          { id: 'opt_3', text: 'I am taking', isCorrect: false },
        ],
        correctAnswer: 'Could I have',
        explanation: '"Could I have" makes a polite restaurant request.',
      },
    },
    {
      id: 'turn_a1_22_2',
      turnIndex: 2,
      partnerPrompt:
        'Here is your drink! Are you ready to order your main dish, or do you have any dietary preferences?',
      partnerAudioText:
        'Here is your drink! Are you ready to order your main dish, or do you have any dietary preferences?',
      partnerQuestionHindi:
        'यह रहा आपका पेय! क्या आप अपने मुख्य व्यंजन का ऑर्डर देने के लिए तैयार हैं, या आपकी कोई विशेष पसंद है?',
      expectedFunction: 'Order Main Course Meal',
      contextGoal:
        'Order a main course (e.g. pasta, grilled chicken, vegetarian salad) using "I\'d like" or "For my main course...".',
      targetVocabulary: ['main course', 'would like', 'pasta', 'chicken', 'salad', 'vegetarian', 'please'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'For my main course, I would like the grilled chicken with salad, please.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I\'d like the vegetable pasta, please. Is it vegetarian?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'The salmon with roasted vegetables, please.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Main Dish Order',
          patterns: ['main course', 'would like', 'could i have', 'pasta', 'chicken', 'salad', 'salmon', 'fish', 'steak', 'pizza'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_22_2',
        type: 'multiple_choice',
        prompt: 'Which phrase introduces your main dish naturally?',
        options: [
          { id: 'opt_1', text: 'For my main course, I would like...', isCorrect: true },
          { id: 'opt_2', text: 'My food big is...', isCorrect: false },
          { id: 'opt_3', text: 'I am ordering big plate...', isCorrect: false },
        ],
        correctAnswer: 'For my main course, I would like...',
        explanation: '"For my main course, I would like..." is the standard restaurant chunk.',
      },
    },
    {
      id: 'turn_a1_22_3',
      turnIndex: 3,
      partnerPrompt:
        'I hope you enjoyed your meal! Can I tempt you with our homemade chocolate cake for dessert, or can I get you anything else?',
      partnerAudioText:
        'I hope you enjoyed your meal! Can I tempt you with our homemade chocolate cake for dessert, or can I get you anything else?',
      partnerQuestionHindi:
        'मुझे उम्मीद है कि आपने भोजन का आनंद लिया! क्या आप मिठाई में हमारा होममेड चॉकलेट केक लेना चाहेंगे, या मैं आपके लिए कुछ और लाऊँ?',
      expectedFunction: 'Decline / Accept Dessert & Request Bill',
      contextGoal:
        'Accept or decline dessert politely, praise the meal, and request the bill.',
      targetVocabulary: ['dessert', 'delicious', 'bill', 'could we have the bill', 'thank you'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'The food was delicious! No dessert for me, thank you. Could I have the bill, please?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I am full, thanks! Could you bring the bill when you have a moment?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'No dessert, thanks. Just the check, please. Everything was great!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Bill Request',
          patterns: ['bill', 'the bill please', 'could i have the bill', 'could we have the bill', 'check please', 'the check'],
          required: true,
        },
        {
          name: 'Polite Closing / Meal Feedback',
          patterns: ['delicious', 'full', 'no dessert', 'thank you', 'thanks', 'everything was great'],
          required: false,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_22_3',
        type: 'multiple_choice',
        prompt: 'How do you ask for the payment slip at the end of the meal?',
        options: [
          { id: 'opt_1', text: 'Could I have the bill, please?', isCorrect: true },
          { id: 'opt_2', text: 'Give money paper now.', isCorrect: false },
          { id: 'opt_3', text: 'What is bill payment me?', isCorrect: false },
        ],
        correctAnswer: 'Could I have the bill, please?',
        explanation: '"Could I have the bill, please?" is standard polite dining usage.',
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
