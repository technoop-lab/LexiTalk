import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_98: ConversationDefinition = {
  id: 'conv_a2_98',
  title: 'Eating Out & Polite Dining Requests (would like, could we have)',
  cefr: 'A2',
  unitId: 'unit_a2_7',
  lessonLinks: ['lesson_a2_7_98'],
  estimatedMinutes: 5,
  scenario:
    'You are dining at "The Copper Table" bistro in Bath, served by head waiter Marco Rossi. Request a quiet table, ask about dietary requirements (gluten-free and vegetarian options), order starters and main dishes using polite formulas ("I would like...", "Could we have...?"), ask for the bill, and arrange to split the cost.',
  communicativeGoals: [
    'Order food and beverages politely using "would like", "could I have", and "may we please have"',
    'Inquire about dietary restrictions, allergens, and Chef\'s daily specials',
    'Request condiments, extra cutlery, or water for the table with polite conversational courtesy',
    'Ask for the bill, check service charges, and split the bill cleanly',
  ],
  canDoStatements: [
    'Can order a meal in a restaurant and ask questions about the menu (CEFR A2)',
    'Can express dietary requirements (gluten-free, vegetarian, allergies) clearly',
    'Can handle the bill and payment requests politely in an eating-out setting',
  ],
  characters: [
    {
      id: 'char_marco_rossi',
      name: 'Marco Rossi',
      role: 'Head Waiter at The Copper Table',
      avatar: '🍽️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'dietary',
        ipa: '/ˈdaɪətəri/',
        partOfSpeech: 'adjective',
        meaning: 'Relating to diets or rules about food and drink',
        exampleSentence: 'Do you have any dietary requirements or food allergies?',
        translations: { hi: 'आहार संबंधी' },
      },
      {
        word: 'starter',
        ipa: '/ˈstɑːrtər/',
        partOfSpeech: 'noun',
        meaning: 'A small amount of food eaten before the main course of a meal (appetizer)',
        exampleSentence: 'For my starter, I would like the roasted tomato soup.',
        translations: { hi: 'शुरुआती व्यंजन / स्टार्टर' },
      },
      {
        word: 'main course',
        ipa: '/meɪn kɔːrs/',
        partOfSpeech: 'noun',
        meaning: 'The primary dish of a meal consisting of several courses',
        exampleSentence: 'For the main course, could I have the grilled sea bass?',
        translations: { hi: 'मुख्य व्यंजन' },
      },
      {
        word: 'split the bill',
        ipa: '/splɪt ðə bɪl/',
        partOfSpeech: 'phrase',
        meaning: 'To divide the total cost of a meal equally between diners',
        exampleSentence: 'Could we split the bill equally between two cards?',
        translations: { hi: 'बिल आपस में बांटना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I would like to order the..., please.',
        functionCategory: 'Polite Food Ordering',
        exampleSentence: 'I would like to order the vegetarian risotto, please.',
      },
      {
        phrase: 'Could we please have a bottle of tap water?',
        functionCategory: 'Polite Table Request',
        exampleSentence: 'Could we please have a bottle of chilled tap water for the table?',
      },
      {
        phrase: 'Is this dish gluten-free?',
        functionCategory: 'Dietary Inquiry',
        exampleSentence: 'Is this pasta dish gluten-free or contains wheat?',
      },
      {
        phrase: 'Could we have the bill when you have a moment?',
        functionCategory: 'Requesting the Bill',
        exampleSentence: 'Could we have the bill when you have a moment, please?',
      },
    ],
    grammar: {
      title: 'Polite Requests with Modals (Would like / Could we have / May I)',
      conceptExplanation:
        'In dining settings, avoid direct imperatives (*"Give me fish"*). Instead, use "I would like + [noun/infinitive]" (contracted to "I\'d like...") or "Could I / Could we have + [noun], please?". For checking permissions or menu inquiries, use "May we have...?" or "Does this contain...?".',
      patternFormula: 'I would like + [Dish / to order ...] | Could we have + [Dish / Bill], please?',
      contrastExamples: [
        {
          incorrect: 'I want chicken soup now.',
          correct: 'I would like the chicken soup, please. / Could I have the soup, please?',
          explanation: '"I want" is overly blunt in English restaurants; use "I would like".',
        },
        {
          incorrect: 'Bring us bill.',
          correct: 'Could we please have the bill?',
          explanation: 'Polite dining formula requires modal "could" and "please".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Marco Rossi',
        text: 'Good evening! Table for two by the window? Are you ready to order starters, or would you like a few more minutes?',
        translation: 'शुभ संध्या! खिड़की के पास दो लोगों के लिए मेज? क्या आप स्टार्टर ऑर्डर करने के लिए तैयार हैं, या आप कुछ और मिनट चाहेंगे?',
      },
      {
        speaker: 'You',
        text: 'Good evening Marco. We are ready to order. Could we start with a bottle of sparkling water and the bruschetta, please?',
        translation: 'शुभ संध्या मार्को। हम ऑर्डर करने के लिए तैयार हैं। क्या हम एक बोतल स्पार्कलिंग पानी और ब्रूशेटा से शुरुआत कर सकते हैं, कृपया?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_98_1',
      type: 'multiple_choice',
      prompt: 'Which request is most polite and standard when ordering food in an English restaurant?',
      options: [
        { id: 'opt_1', text: 'I would like the grilled salmon with roast vegetables, please.', isCorrect: true },
        { id: 'opt_2', text: 'Give me salmon and vegetables now.', isCorrect: false },
        { id: 'opt_3', text: 'I am taking salmon.', isCorrect: false },
      ],
      correctAnswer: 'I would like the grilled salmon with roast vegetables, please.',
      explanation: '"I would like... please" is the gold standard for polite restaurant ordering.',
    },
    {
      id: 'cp_a2_98_2',
      type: 'fill_blank',
      prompt: 'Complete the polite request: "___ we please have the dessert menu?"',
      options: [
        { id: 'opt_1', text: 'Could', isCorrect: true },
        { id: 'opt_2', text: 'Do', isCorrect: false },
        { id: 'opt_3', text: 'Are', isCorrect: false },
      ],
      correctAnswer: 'Could',
      explanation: '"Could we please have..." forms a polite request for items.',
    },
    {
      id: 'cp_a2_98_3',
      type: 'multiple_choice',
      prompt: 'How do you politely ask to divide the payment between two guests?',
      options: [
        { id: 'opt_1', text: 'Could we split the bill equally between two cards, please?', isCorrect: true },
        { id: 'opt_2', text: 'Cut the bill in two pieces.', isCorrect: false },
        { id: 'opt_3', text: 'We pay separate halves no problem.', isCorrect: false },
      ],
      correctAnswer: 'Could we split the bill equally between two cards, please?',
      explanation: '"Split the bill equally" is the natural idiomatic expression.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_98_1',
      scenarioContext: 'Order a vegetarian main course with polite phrasing.',
      prompt: 'Build: "I would like the wild mushroom risotto please."',
      targetStructure: 'Subject + would like + article + compound noun + polite marker',
      wordBank: ['I', 'would', 'like', 'the', 'wild', 'mushroom', 'risotto', 'please', 'am', 'wanting'],
      acceptableSolutions: [
        'I would like the wild mushroom risotto please',
        'I would like the wild mushroom risotto, please.',
      ],
      explanation: 'Polite modal formula "I would like... please".',
    },
    {
      id: 'sc_a2_98_2',
      scenarioContext: 'Request the bill at the end of the dinner.',
      prompt: 'Build: "Could we have the bill please?"',
      targetStructure: 'Could + subject + have + article + noun + polite marker',
      wordBank: ['Could', 'we', 'have', 'the', 'bill', 'please', 'can', 'are', 'having'],
      acceptableSolutions: [
        'Could we have the bill please',
        'Could we have the bill, please?',
      ],
      explanation: 'Polite restaurant closing request.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_98_1',
      turnIndex: 1,
      partnerPrompt:
        'Good evening and welcome to The Copper Table! Here are your menus. Before we begin, does anyone at the table have any specific dietary requirements or food allergies I should inform our chef about?',
      partnerAudioText:
        'Good evening and welcome to The Copper Table! Here are your menus. Before we begin, does anyone at the table have any specific dietary requirements or food allergies I should inform our chef about?',
      partnerQuestionHindi:
        'शुभ संध्या और द कॉपर टेबल में आपका स्वागत है! ये आपके मेनू हैं। शुरू करने से पहले, क्या मेज पर किसी की कोई विशिष्ट आहार आवश्यकताएं या खाद्य एलर्जी हैं जिनके बारे में मुझे अपने शेफ को सूचित करना चाहिए?',
      expectedFunction: 'State Dietary Requirements (Gluten-free / Vegetarian) & Order Table Drinks',
      contextGoal:
        'State that you prefer vegetarian dishes and need to know if the soup is gluten-free; order a jug of tap water with lemon for the table.',
      targetVocabulary: ['I am vegetarian and need gluten-free options', 'is the daily soup gluten-free', 'could we have a jug of tap water with lemon', 'thank you Marco'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'Good evening Marco! Yes, I follow a vegetarian diet, and my friend requires gluten-free options. Could you let us know if today’s soup is gluten-free? Also, could we please have a jug of tap water with lemon for the table?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Good evening! I am vegetarian and looking for gluten-free choices. Is the roasted soup gluten-free? Could we also have tap water with lemon, please?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Dietary Requirement (Vegetarian / Gluten-Free)',
          patterns: ['vegetarian', 'gluten-free', 'gluten', 'allergy', 'dietary', 'soup', 'options'],
          required: true,
        },
        {
          name: 'Water Request',
          patterns: ['water', 'tap water', 'jug', 'lemon', 'bottle', 'table'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'i_want_restaurant_error',
          pattern: /\bi want you bring\b|\bgive me water\b/i,
          errorType: 'interaction',
          message: 'Use polite restaurant English: "Could we please have..." or "I would like...".',
          correctionPattern: 'Could we please have...',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_98_1',
        type: 'multiple_choice',
        prompt: 'Which phrase is most polite for requesting water at a dining table?',
        options: [
          { id: 'opt_1', text: 'Could we please have a carafe of tap water for the table?', isCorrect: true },
          { id: 'opt_2', text: 'Bring water here quick.', isCorrect: false },
          { id: 'opt_3', text: 'Water give to us.', isCorrect: false },
        ],
        correctAnswer: 'Could we please have a carafe of tap water for the table?',
        explanation: '"Could we please have..." shows polite dining courtesy.',
      },
    },
    {
      id: 'turn_a2_98_2',
      turnIndex: 2,
      partnerPrompt:
        'The roasted butternut squash soup is 100% gluten-free and vegan, and I will bring fresh gluten-free bread rolls right away! Are you ready to order your starters and main courses?',
      partnerAudioText:
        'The roasted butternut squash soup is 100% gluten-free and vegan, and I will bring fresh gluten-free bread rolls right away! Are you ready to order your starters and main courses?',
      partnerQuestionHindi:
        'भुना हुआ बटरनट स्क्वैश सूप 100% ग्लूटेन-मुक्त और शाकाहारी है, और मैं तुरंत ताज़ा ग्लूटेन-मुक्त ब्रेड रोल लाऊँगा! क्या आप अपने स्टार्टर और मुख्य व्यंजन ऑर्डर करने के लिए तैयार हैं?',
      expectedFunction: 'Order Starters and Main Courses using "I would like" and "Could I have"',
      contextGoal:
        'Order the butternut soup as a starter, the wild mushroom risotto as the main course, and ask about side salad dressings.',
      targetVocabulary: ['for my starter I would like the butternut squash soup', 'for my main course could I have the mushroom risotto', 'does the side salad have vinaigrette', 'sounds delicious'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'That sounds wonderful! For my starter, I would like the roasted butternut squash soup. For my main course, could I please have the wild mushroom and truffle risotto with a small side salad?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I’d like the butternut soup to start, and the wild mushroom risotto for my main course, please. Does the salad come with dressing?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Starter Order',
          patterns: ['starter', 'soup', 'butternut', 'start with', 'like the soup'],
          required: true,
        },
        {
          name: 'Main Course Order (risotto / salad)',
          patterns: ['main', 'risotto', 'mushroom', 'salad', 'course', 'order'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_98_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "For my starter, I ___ like the soup, please."',
        options: [
          { id: 'opt_1', text: 'would', isCorrect: true },
          { id: 'opt_2', text: 'will can', isCorrect: false },
          { id: 'opt_3', text: 'am', isCorrect: false },
        ],
        correctAnswer: 'would',
        explanation: '"I would like" is the polite standard formula.',
      },
    },
    {
      id: 'turn_a2_98_3',
      turnIndex: 3,
      partnerPrompt:
        'An excellent selection—the truffle risotto is one of our chef’s signature creations. How was everything with your dinner, and may I tempt you with our homemade desserts or some fresh espresso?',
      partnerAudioText:
        'An excellent selection—the truffle risotto is one of our chef’s signature creations. How was everything with your dinner, and may I tempt you with our homemade desserts or some fresh espresso?',
      partnerQuestionHindi:
        'एक उत्कृष्ट चयन—ट्रफल रिसोट्टो हमारे शेफ की सिग्नेचर कृतियों में से एक है। आपके रात के खाने के साथ सब कुछ कैसा रहा, और क्या मैं आपको हमारे होममेड डेसर्ट या कुछ ताज़ा एस्प्रेसो की पेशकश कर सकता हूँ?',
      expectedFunction: 'Praise the Meal, Decline Dessert & Request the Bill',
      contextGoal:
        'Compliment the food (risotto was rich and flavorful); decline dessert politely; request the bill.',
      targetVocabulary: ['the meal was absolutely delicious', 'compliments to the chef', 'we are full so we will skip dessert', 'could we please have the bill'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'The dinner was absolutely superb—the risotto was flavorful and perfectly cooked! Compliments to the chef. We are completely full, so we will skip dessert. Could we please have the bill when you have a moment?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'The food was wonderful! We don’t need dessert today. Could we please get the bill, Marco?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Compliment / Food Feedback',
          patterns: ['delicious', 'superb', 'wonderful', 'great', 'flavorful', 'risotto', 'compliments', 'chef'],
          required: true,
        },
        {
          name: 'Request the Bill',
          patterns: ['bill', 'check', 'could we have', 'get the bill', 'skip dessert'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_98_3',
        type: 'multiple_choice',
        prompt: 'Which sentence combines a meal compliment with a bill request appropriately?',
        options: [
          { id: 'opt_1', text: 'The meal was wonderful, thank you! Could we have the bill please?', isCorrect: true },
          { id: 'opt_2', text: 'Food finish give price papers.', isCorrect: false },
          { id: 'opt_3', text: 'I am full now bill come.', isCorrect: false },
        ],
        correctAnswer: 'The meal was wonderful, thank you! Could we have the bill please?',
        explanation: 'Courteous and clear.',
      },
    },
    {
      id: 'turn_a2_98_4',
      turnIndex: 4,
      partnerPrompt:
        'Thank you so much, I will pass your kind words directly to Chef Elena! Here is your bill inside the leather folder. The total comes to £56.00, and standard service charge is included. How would you like to handle payment?',
      partnerAudioText:
        'Thank you so much, I will pass your kind words directly to Chef Elena! Here is your bill inside the leather folder. The total comes to £56.00, and standard service charge is included. How would you like to handle payment?',
      partnerQuestionHindi:
        'बहुत-बहुत धन्यवाद, मैं आपके दयालु शब्द सीधे शेफ ऐलेना तक पहुँचाऊँगा! यहाँ लेदर फ़ोल्डर के अंदर आपका बिल है। कुल योग £56.00 है, और मानक सेवा शुल्क शामिल है। आप भुगतान कैसे करना चाहेंगे?',
      expectedFunction: 'Arrange Split Card Payment & Conclude Dining Experience',
      contextGoal:
        'Ask to split the £56 bill evenly between two credit cards (£28 on each card), thank Marco for his attentive service, and wish him a good night.',
      targetVocabulary: ['could we split it evenly between two cards', '£28 on each card', 'thank you for the attentive service', 'have a wonderful evening'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'Could we please split the bill equally between two cards? That would be £28 on each card. Thank you so much Marco for your attentive and friendly service. Have a wonderful evening!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Can we split the £56 equally on two cards (£28 each)? Thank you for the great service Marco, have a lovely night!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Split Payment (two cards / £28 / split)',
          patterns: ['split', 'two cards', '28', 'equally', 'cards', 'half', 'pay'],
          required: true,
        },
        {
          name: 'Gratitude & Farewell',
          patterns: ['thank you', 'thanks', 'marco', 'service', 'have a wonderful evening', 'good night'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_98_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Could we split the bill ___ between two cards?"',
        options: [
          { id: 'opt_1', text: 'equally', isCorrect: true },
          { id: 'opt_2', text: 'equal', isCorrect: false },
          { id: 'opt_3', text: 'equality', isCorrect: false },
        ],
        correctAnswer: 'equally',
        explanation: 'Adverb "equally" modifies the verb "split".',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 75,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 70,
  },
};
