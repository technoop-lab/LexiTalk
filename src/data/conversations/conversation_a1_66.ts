import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_66: ConversationDefinition = {
  id: 'conv_a1_66',
  title: 'Dining Out Preferences, Food Allergies & Custom Orders',
  cefr: 'A1',
  unitId: 'unit_a1_5',
  lessonLinks: ['lesson_a1_5_66'],
  estimatedMinutes: 5,
  scenario:
    'You are having dinner at a modern Italian bistro in Bristol with friends. When server Matteo arrives to take your order, you must communicate dietary requirements (a severe peanut allergy and a preference for gluten-free pasta), customize a grilled salmon salad with dressing on the side, ask for sparkling water with lemon, and request the bill at the end.',
  communicativeGoals: [
    'Order food and drinks politely in a restaurant ("I would like to order the grilled salmon", "Could I have sparkling water?")',
    'State dietary preferences and allergies clearly ("I am allergic to peanuts", "Does this dish contain any dairy or gluten?")',
    'Request custom dish modifications ("Could I have the dressing on the side, please?")',
    'Ask for the bill and check payment options ("Could we have the bill, please?", "Can we pay by card?")',
  ],
  canDoStatements: [
    'Can order meals and drinks at a restaurant (CEFR A1.2)',
    'Can communicate food allergies and dietary restrictions clearly to waitstaff',
    'Can ask for the bill and pay for meals',
  ],
  characters: [
    {
      id: 'char_matteo_server',
      name: 'Matteo',
      role: 'Bistro Head Server',
      avatar: '🍽️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'allergic',
        ipa: '/əˈlɜːrdʒɪk/',
        partOfSpeech: 'adjective',
        meaning: 'Having an allergy to a particular food or substance',
        exampleSentence: 'I am allergic to peanuts and tree nuts.',
        translations: { hi: 'एलर्जी होना / असहिष्णु' },
      },
      {
        word: 'dressing',
        ipa: '/ˈdrɛsɪŋ/',
        partOfSpeech: 'noun',
        meaning: 'A sauce for salads, typically made of oil, vinegar, and herbs',
        exampleSentence: 'Could I please have the salad dressing on the side?',
        translations: { hi: 'सलाद की चटनी / ड्रेसिंग' },
      },
      {
        word: 'gluten-free',
        ipa: '/ˈɡluːtən friː/',
        partOfSpeech: 'adjective',
        meaning: 'Containing no gluten; suitable for individuals with celiac disease or wheat intolerance',
        exampleSentence: 'Do you offer gluten-free pasta options?',
        translations: { hi: 'ग्लूटेन-मुक्त' },
      },
      {
        word: 'bill',
        ipa: '/bɪl/',
        partOfSpeech: 'noun',
        meaning: 'A printed or written statement of the money owed for goods or services in a restaurant (also "check" in US English)',
        exampleSentence: 'Could we please have the bill when you are ready?',
        translations: { hi: 'बिल / भुगतान पर्ची' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am allergic to...',
        functionCategory: 'Allergy Declaration',
        exampleSentence: 'I am severely allergic to peanuts and nuts.',
      },
      {
        phrase: 'Does this dish contain...?',
        functionCategory: 'Ingredient Check',
        exampleSentence: 'Does the pesto sauce contain any pine nuts or dairy?',
      },
      {
        phrase: 'Could I have the dressing on the side?',
        functionCategory: 'Custom Modification',
        exampleSentence: 'Could I please have the olive oil dressing on the side?',
      },
      {
        phrase: 'Could we have the bill, please?',
        functionCategory: 'Requesting Bill',
        exampleSentence: 'Could we please have the bill whenever you are ready?',
      },
    ],
    grammar: {
      title: 'Restaurant Orders & Modifiers: I am allergic to [Noun] / with [Ingredient] on the side',
      conceptExplanation:
        'To express food allergies, use "I am allergic to + [Noun]". To modify orders, use "without [Ingredient]" or "with [Sauce] on the side". For drinks, use "Could I please have [drink]?".',
      patternFormula: 'I am allergic to [Allergen] | Could I have the [Dish] with [Modifier] on the side?',
      contrastExamples: [
        {
          incorrect: 'I have allergy of peanuts.',
          correct: 'I am allergic to peanuts.',
          explanation: 'Use the adjective phrase "I am allergic to [Allergen]".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Matteo',
        text: 'Buonasera and welcome! Are you ready to order dinner, or would you like a few more minutes with the menu?',
        translation: 'बुआनासेरा और स्वागत है! क्या आप रात का खाना ऑर्डर करने के लिए तैयार हैं, या आप मेनू के साथ कुछ और मिनट चाहेंगे?',
      },
      {
        speaker: 'You',
        text: 'Good evening Matteo! We are ready to order. I would like the grilled salmon with roasted vegetables, but could I have the dressing on the side?',
        translation: 'शुभ संध्या माटेओ! हम ऑर्डर करने के लिए तैयार हैं। मैं भुनी हुई सब्जियों के साथ ग्रील्ड सैल्मन लेना चाहूँगा, लेकिन क्या मुझे ड्रेसिंग अलग से मिल सकती है?',
      },
      {
        speaker: 'Matteo',
        text: 'Certainly, dressing on the side for the salmon. Do you or your guests have any dietary restrictions or food allergies I should inform the kitchen about?',
        translation: 'निश्चित रूप से, सैल्मन के लिए ड्रेसिंग अलग से। क्या आपके या आपके मेहमानों के पास कोई आहार संबंधी प्रतिबंध या खाद्य एलर्जी है जिसके बारे में मुझे रसोई को सूचित करना चाहिए?',
      },
      {
        speaker: 'You',
        text: 'Yes, thank you for asking: I am severely allergic to peanuts. Does the dessert or pasta contain any nut oils?',
        translation: 'हाँ, पूछने के लिए धन्यवाद: मुझे मूंगफली से गंभीर एलर्जी है। क्या मिठाई या पास्ता में कोई नट ऑयल होता है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_66_1',
      type: 'fill_blank',
      prompt: 'Complete the allergy statement: "I am allergic ___ peanuts and dairy."',
      options: [
        { id: 'opt_1', text: 'to', isCorrect: true },
        { id: 'opt_2', text: 'with', isCorrect: false },
        { id: 'opt_3', text: 'from', isCorrect: false },
      ],
      correctAnswer: 'to',
      explanation: 'The adjective "allergic" takes preposition "to".',
    },
    {
      id: 'cp_a1_66_2',
      type: 'multiple_choice',
      prompt: 'Which sentence asks for salad dressing to be served separately?',
      options: [
        { id: 'opt_1', text: 'Could I please have the dressing on the side?', isCorrect: true },
        { id: 'opt_2', text: 'Dressing must be away from food now.', isCorrect: false },
        { id: 'opt_3', text: 'No put sauce inside bowl.', isCorrect: false },
      ],
      correctAnswer: 'Could I please have the dressing on the side?',
      explanation: '"on the side" is the standard restaurant expression.',
    },
    {
      id: 'cp_a1_66_3',
      type: 'multiple_choice',
      prompt: 'Choose the most polite way to ask for the bill:',
      options: [
        { id: 'opt_1', text: 'Could we please have the bill when you have a moment?', isCorrect: true },
        { id: 'opt_2', text: 'Give us check now we leave.', isCorrect: false },
        { id: 'opt_3', text: 'Bill money is here take.', isCorrect: false },
      ],
      correctAnswer: 'Could we please have the bill when you have a moment?',
      explanation: 'Polite and natural dining closing.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_66_1',
      scenarioContext: 'Inform your server about your nut allergy.',
      prompt: 'Build: "I am allergic to peanuts and tree nuts."',
      targetStructure: 'I am allergic to + allergen phrase',
      wordBank: ['I', 'am', 'allergic', 'to', 'peanuts', 'and', 'tree', 'nuts', 'have', 'allergies', 'for'],
      acceptableSolutions: [
        'I am allergic to peanuts and tree nuts',
        'I am allergic to peanuts and tree nuts.',
      ],
      explanation: 'Allergy statement.',
    },
    {
      id: 'sc_a1_66_2',
      scenarioContext: 'Ask for the bill at the end of the meal.',
      prompt: 'Build: "Could we have the bill please?"',
      targetStructure: 'Could we have the bill please?',
      wordBank: ['Could', 'we', 'have', 'the', 'bill', 'please', 'having', 'are', 'give'],
      acceptableSolutions: [
        'Could we have the bill please',
        'Could we have the bill please?',
        'Could we have the bill, please?',
      ],
      explanation: 'Polite bill request.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_66_1',
      turnIndex: 1,
      partnerPrompt:
        'Buonasera! Welcome to Trattoria Bella. I’m Matteo, and I will be taking care of your table tonight. Can I start you off with something refreshing to drink while you look over the specials?',
      partnerAudioText:
        'Buonasera! Welcome to Trattoria Bella. I’m Matteo, and I will be taking care of your table tonight. Can I start you off with something refreshing to drink while you look over the specials?',
      partnerQuestionHindi:
        'बुआनासेरा! ट्रैटोरिया बेला में आपका स्वागत है। मैं माटेओ हूँ, और मैं आज रात आपकी मेज की देखभाल करूँगा। क्या मैं आपके लिए कुछ ताज़ा पेय ला सकता हूँ जब तक आप विशेष व्यंजन देख रहे हैं?',
      expectedFunction: 'Order Drinks (Could I have a bottle of sparkling water with lemon?)',
      contextGoal:
        'Order a bottle of sparkling mineral water with fresh lemon slices for the table.',
      targetVocabulary: ['good evening Matteo', 'sparkling water', 'bottle of mineral water', 'lemon slices', 'for the table'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'Good evening Matteo! Could we please have a large bottle of sparkling water with fresh lemon slices for the table?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Response',
          text: 'Hello Matteo! We would like a bottle of sparkling water with lemon, please.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Drink Order',
          patterns: [
            'sparkling water',
            'water',
            'lemon',
            'bottle',
            'please',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'give_water_error',
          pattern: /\bgive me water\b/i,
          errorType: 'grammar',
          message: 'Say "Could we please have sparkling water?", to be polite.',
          correctionPattern: 'Could we please have sparkling water, please?',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_66_1',
        type: 'fill_blank',
        prompt: 'Choose the polite drink request: "Could I ___ a glass of water?"',
        options: [
          { id: 'opt_1', text: 'have', isCorrect: true },
          { id: 'opt_2', text: 'having', isCorrect: false },
          { id: 'opt_3', text: 'has', isCorrect: false },
        ],
        correctAnswer: 'have',
        explanation: 'Modal "Could I" takes base verb "have".',
      },
    },
    {
      id: 'turn_a1_66_2',
      turnIndex: 2,
      partnerPrompt:
        'Sparkling water with lemon coming right up! Are you ready to order your main courses, and does anyone at the table have any specific food allergies or dietary restrictions?',
      partnerAudioText:
        'Sparkling water with lemon coming right up! Are you ready to order your main courses, and does anyone at the table have any specific food allergies or dietary restrictions?',
      partnerQuestionHindi:
        'नींबू के साथ स्पार्कलिंग पानी तुरंत आ रहा है! क्या आप अपने मुख्य पाठ्यक्रम का ऑर्डर देने के लिए तैयार हैं, और क्या मेज पर किसी को कोई विशिष्ट खाद्य एलर्जी या आहार संबंधी प्रतिबंध है?',
      expectedFunction: 'Declare Peanut Allergy & Order Salmon with Dressing on the Side',
      contextGoal:
        'Declare that you are allergic to peanuts, and order the grilled salmon with the dressing on the side.',
      targetVocabulary: ['allergic to peanuts', 'grilled salmon', 'dressing on the side', 'roasted vegetables', 'no nuts'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'Yes! First, I am severely allergic to peanuts, so please inform the chef. For my main, I would like the grilled salmon with the herb dressing on the side.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Response',
          text: 'I am allergic to peanuts. I would like the grilled salmon with dressing on the side, please.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Allergy & Customized Main Course',
          patterns: [
            'allergic',
            'peanuts',
            'nuts',
            'grilled salmon',
            'salmon',
            'dressing on the side',
            'on the side',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_66_2',
        type: 'multiple_choice',
        prompt: 'Which sentence states a food allergy accurately?',
        options: [
          { id: 'opt_1', text: 'I am allergic to peanuts and tree nuts.', isCorrect: true },
          { id: 'opt_2', text: 'I have peanut illness allergy to you.', isCorrect: false },
          { id: 'opt_3', text: 'Peanuts are no eating in my stomach.', isCorrect: false },
        ],
        correctAnswer: 'I am allergic to peanuts and tree nuts.',
        explanation: 'Accurate and clear medical communication.',
      },
    },
    {
      id: 'turn_a1_66_3',
      turnIndex: 3,
      partnerPrompt:
        'I have noted the peanut allergy in red for our head chef—our kitchen has dedicated nut-free preparation stations. Your grilled salmon will have dressing served in a separate dish. How is everything tasting, and would you like dessert or coffee?',
      partnerAudioText:
        'I have noted the peanut allergy in red for our head chef—our kitchen has dedicated nut-free preparation stations. Your grilled salmon will have dressing served in a separate dish. How is everything tasting, and would you like dessert or coffee?',
      partnerQuestionHindi:
        'मैंने अपने हेड शेफ के लिए लाल रंग में मूंगफली की एलर्जी को नोट कर लिया है—हमारे किचन में नट-मुक्त तैयारी स्टेशन समर्पित हैं। आपके ग्रील्ड सैल्मन के लिए ड्रेसिंग एक अलग डिश में परोसी जाएगी। सब कुछ कैसा लग रहा है, और क्या आप मिठाई या कॉफी लेना चाहेंगे?',
      expectedFunction: 'Praise Meal, Decline Dessert & Request Bill',
      contextGoal:
        'Praise the food as delicious, decline dessert politely, and ask for the bill.',
      targetVocabulary: ['food was delicious', 'compliments to the chef', 'no dessert for us', 'could we have the bill', 'pay by card'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'The salmon was absolutely delicious, compliments to the chef! We are full, so no dessert for us. Could we please have the bill when you have a moment?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Response',
          text: 'The food was wonderful, thank you! No dessert for us. Could we please have the bill?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Praise & Bill Request',
          patterns: [
            'delicious',
            'wonderful',
            'no dessert',
            'bill',
            'check',
            'card',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_66_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Could we please have the ___?"',
        options: [
          { id: 'opt_1', text: 'bill', isCorrect: true },
          { id: 'opt_2', text: 'billed', isCorrect: false },
          { id: 'opt_3', text: 'billing', isCorrect: false },
        ],
        correctAnswer: 'bill',
        explanation: 'Noun "bill" (or "check").',
      },
    },
    {
      id: 'turn_a1_66_4',
      turnIndex: 4,
      partnerPrompt:
        'I am so glad you enjoyed the salmon! Here is the bill. You can tap your card on the contactless machine whenever you are ready. Thank you for dining with us tonight!',
      partnerAudioText:
        'I am so glad you enjoyed the salmon! Here is the bill. You can tap your card on the contactless machine whenever you are ready. Thank you for dining with us tonight!',
      partnerQuestionHindi:
        'मुझे बहुत खुशी है कि आपने सैल्मन का आनंद लिया! यह रहा बिल। जब भी आप तैयार हों, आप कॉन्टैक्टलेस मशीन पर अपना कार्ड टैप कर सकते हैं। आज रात हमारे साथ भोजन करने के लिए धन्यवाद!',
      expectedFunction: 'Pay with Card, Thank Server & Say Goodbye',
      contextGoal:
        'Tap card for payment, add a tip, thank Matteo for excellent service, and wish him a good evening.',
      targetVocabulary: ['paid by contactless', 'great service', 'thank you Matteo', 'have a wonderful evening', 'goodbye'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'Payment went through! Thank you so much Matteo for your excellent service and taking care of my allergy. Have a wonderful evening, goodbye!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Response',
          text: 'All paid! Thank you Matteo for the great service. Have a good evening, goodbye!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Payment & Goodbye',
          patterns: [
            'payment',
            'paid',
            'thank you',
            'matteo',
            'great service',
            'have a wonderful evening',
            'good evening',
            'goodbye',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_66_4',
        type: 'multiple_choice',
        prompt: 'Which sentence thanks a server politely after paying?',
        options: [
          { id: 'opt_1', text: 'Thank you for the wonderful meal and great service! Have a good evening.', isCorrect: true },
          { id: 'opt_2', text: 'Money is gone out of my pocket now.', isCorrect: false },
          { id: 'opt_3', text: 'Table is empty bye.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for the wonderful meal and great service! Have a good evening.',
        explanation: 'Courteous dining closing.',
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
