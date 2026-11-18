import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_37: ConversationDefinition = {
  id: 'conv_a1_37',
  title: 'Comparing Everyday Things (Comparative Adjectives)',
  cefr: 'A1',
  unitId: 'unit_a1_3',
  lessonLinks: ['lesson_a1_3_37'],
  estimatedMinutes: 5,
  scenario:
    'You are shopping for a new commuter laptop and headphones at an electronics store with sales specialist Omar. You compare different models based on weight, screen size, battery life, speed, and price.',
  communicativeGoals: [
    'Form and use short comparative adjectives with "-er than" (faster, cheaper, lighter, bigger)',
    'Form and use long comparative adjectives with "more... than" (more expensive, more powerful, more convenient)',
    'Compare two electronic products or transportation options clearly',
    'Explain the reasons behind a purchasing decision using comparisons',
  ],
  canDoStatements: [
    'Can compare two everyday objects using basic comparative structures (CEFR A1.2)',
    'Can express preferences based on price, quality, and size comparisons',
    'Can understand and use "than" accurately in comparative sentences',
  ],
  characters: [
    {
      id: 'char_omar',
      name: 'Omar',
      role: 'Electronics Specialist',
      avatar: '💻',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'faster',
        ipa: '/ˈfæstər/',
        partOfSpeech: 'adjective (comparative)',
        meaning: 'Moving or able to move or operate at higher speed than another',
        exampleSentence: 'This processor is faster than that one.',
        translations: { hi: 'अधिक तेज़' },
      },
      {
        word: 'lighter',
        ipa: '/ˈlaɪtər/',
        partOfSpeech: 'adjective (comparative)',
        meaning: 'Having less weight than another object',
        exampleSentence: 'The silver laptop is lighter to carry in a backpack.',
        translations: { hi: 'अधिक हल्का' },
      },
      {
        word: 'expensive',
        ipa: '/ɪkˈspɛnsɪv/',
        partOfSpeech: 'adjective',
        meaning: 'Costing a lot of money',
        exampleSentence: 'The Pro model is more expensive than the Air model.',
        translations: { hi: 'महंगा' },
      },
      {
        word: 'convenient',
        ipa: '/kənˈviːniənt/',
        partOfSpeech: 'adjective',
        meaning: 'Fitting in well with a person’s needs, activities, and plans',
        exampleSentence: 'Wireless earbuds are more convenient for daily commute.',
        translations: { hi: 'सुविधाजनक' },
      },
    ],
    usefulChunks: [
      {
        phrase: '...is cheaper than...',
        functionCategory: 'Price Comparison',
        exampleSentence: 'The black model is cheaper than the silver one.',
      },
      {
        phrase: '...is faster and lighter than...',
        functionCategory: 'Multi-Feature Comparison',
        exampleSentence: 'This tablet is faster and lighter than my old laptop.',
      },
      {
        phrase: '...is more expensive, but...',
        functionCategory: 'Balanced Evaluation',
        exampleSentence: 'It is more expensive, but the battery lasts longer.',
      },
      {
        phrase: 'Which one is better for...?',
        functionCategory: 'Inquiring Comparison',
        exampleSentence: 'Which model is better for daily office work?',
      },
    ],
    grammar: {
      title: 'Comparative Adjectives: Short Adjectives (-er than) vs. Long Adjectives (more ... than)',
      conceptExplanation:
        'For 1-syllable adjectives (fast, cheap, light), add "-er than" (faster than, cheaper than, lighter than). For adjectives ending in -y (heavy, easy), change to "-ier than" (heavier than, easier than). For 2+ syllable adjectives (expensive, powerful, portable), use "more [adjective] than". Irregular: good → better than, bad → worse than.',
      patternFormula: '[Noun A] + is + [Short Adj + -er / more + Long Adj] + than + [Noun B]',
      contrastExamples: [
        {
          incorrect: 'This laptop is more fast than that one.',
          correct: 'This laptop is faster than that one.',
          explanation: 'Use "-er" for single-syllable adjectives: "faster than", not "more fast".',
        },
        {
          incorrect: 'The phone is expensiver than the tablet.',
          correct: 'The phone is more expensive than the tablet.',
          explanation: 'Use "more expensive than" for multi-syllable adjectives.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Omar',
        text: 'Hi there! Looking for a new commuter laptop? Here we have the SwiftAir 13 and the ProBook 15. What features matter most to you?',
        translation: 'नमस्ते! क्या आप एक नए कम्यूटर लैपटॉप की तलाश कर रहे हैं? यहाँ हमारे पास स्विफ्टएयर 13 और प्रोबुक 15 हैं। आपके लिए कौन सी सुविधाएँ सबसे महत्वपूर्ण हैं?',
      },
      {
        speaker: 'You',
        text: 'I travel on the train every day, so I need something that is lighter and smaller than my old computer.',
        translation: 'मैं हर दिन ट्रेन से यात्रा करता हूँ, इसलिए मुझे अपने पुराने कंप्यूटर की तुलना में कुछ हल्का और छोटा चाहिए।',
      },
      {
        speaker: 'Omar',
        text: 'The SwiftAir is much lighter and easier to carry. However, the ProBook is faster and has a bigger screen. It is also more expensive.',
        translation: 'स्विफ्टएयर काफी हल्का और ले जाने में आसान है। हालाँकि, प्रोबुक तेज़ है और इसकी स्क्रीन बड़ी है। यह अधिक महंगा भी है।',
      },
      {
        speaker: 'You',
        text: 'The SwiftAir is cheaper and lighter, so it is better for my commute. I will take the SwiftAir!',
        translation: 'स्विफ्टएयर सस्ता और हल्का है, इसलिए यह मेरे सफ़र के लिए बेहतर है। मैं स्विफ्टएयर लूँगा!',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_37_1',
      type: 'fill_blank',
      prompt: 'Complete the comparative sentence: "The SwiftAir is ___ than the ProBook."',
      options: [
        { id: 'opt_1', text: 'lighter', isCorrect: true },
        { id: 'opt_2', text: 'more light', isCorrect: false },
        { id: 'opt_3', text: 'lightest', isCorrect: false },
      ],
      correctAnswer: 'lighter',
      explanation: 'Single-syllable adjective "light" takes the suffix "-er": "lighter than".',
    },
    {
      id: 'cp_a1_37_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly compares the prices of two items?',
      options: [
        { id: 'opt_1', text: 'The Pro laptop is more expensive than the standard model.', isCorrect: true },
        { id: 'opt_2', text: 'The Pro laptop is expensiver than standard model.', isCorrect: false },
        { id: 'opt_3', text: 'The Pro laptop is more cheap than standard model.', isCorrect: false },
      ],
      correctAnswer: 'The Pro laptop is more expensive than the standard model.',
      explanation: 'Multi-syllable "expensive" requires "more expensive than".',
    },
    {
      id: 'cp_a1_37_3',
      type: 'multiple_choice',
      prompt: 'What is the correct comparative form of the irregular adjective "good"?',
      options: [
        { id: 'opt_1', text: 'better than', isCorrect: true },
        { id: 'opt_2', text: 'gooder than', isCorrect: false },
        { id: 'opt_3', text: 'more good than', isCorrect: false },
      ],
      correctAnswer: 'better than',
      explanation: '"Good" is irregular: good → better than.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_37_1',
      scenarioContext: 'Compare laptop weight and speed.',
      prompt: 'Build: "This laptop is faster and lighter than my old one."',
      targetStructure: 'Demonstrative + noun + is + comparative + coordinator + comparative + than + noun phrase',
      wordBank: ['This', 'laptop', 'is', 'faster', 'and', 'lighter', 'than', 'my', 'old', 'one', 'more', 'fast'],
      acceptableSolutions: [
        'This laptop is faster and lighter than my old one',
        'This laptop is faster and lighter than my old one.',
      ],
      explanation: 'Uses parallel short comparative adjectives with "than".',
    },
    {
      id: 'sc_a1_37_2',
      scenarioContext: 'Compare price and convenience.',
      prompt: 'Build: "It is more expensive but more convenient for work."',
      targetStructure: 'Subject + is + more + adjective + coordinator + more + adjective + prepositional phrase',
      wordBank: ['It', 'is', 'more', 'expensive', 'but', 'more', 'convenient', 'for', 'work', 'than', 'expensiver'],
      acceptableSolutions: [
        'It is more expensive but more convenient for work',
        'It is more expensive but more convenient for work.',
      ],
      explanation: 'Balanced comparison with multi-syllable adjectives.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_37_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! Welcome to ByteTech. Are you looking for a laptop for work, study, or travel? What is most important to you?',
      partnerAudioText:
        'Hi there! Welcome to ByteTech. Are you looking for a laptop for work, study, or travel? What is most important to you?',
      partnerQuestionHindi:
        'नमस्ते! बाइटटेक में आपका स्वागत है। क्या आप काम, पढ़ाई या यात्रा के लिए लैपटॉप की तलाश कर रहे हैं? आपके लिए सबसे महत्वपूर्ण क्या है?',
      expectedFunction: 'State Requirements & Use Comparative Adjectives',
      contextGoal:
        'Explain that you commute daily and want a computer that is lighter and faster than your current one.',
      targetVocabulary: ['lighter', 'faster', 'commute', 'smaller', 'than my old', 'laptop', 'travel'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hello! I commute by train every day, so I need a laptop that is lighter and faster than my old computer.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hi! I travel a lot, so I want something smaller and lighter than my desktop.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Looking for a travel laptop that is lighter and faster than what I have now.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Comparative Needs',
          patterns: [
            'lighter',
            'faster',
            'smaller',
            'than my old',
            'commute',
            'travel',
            'laptop',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'more_light_error',
          pattern: /\bmore light\b/i,
          errorType: 'grammar',
          message: 'Say "lighter" instead of "more light".',
          correctionPattern: 'lighter than',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_37_1',
        type: 'fill_blank',
        prompt: 'Choose the comparative form: "I need a bag that is ___ than this one."',
        options: [
          { id: 'opt_1', text: 'smaller', isCorrect: true },
          { id: 'opt_2', text: 'more small', isCorrect: false },
          { id: 'opt_3', text: 'smallish', isCorrect: false },
        ],
        correctAnswer: 'smaller',
        explanation: 'Small (1 syllable) → smaller.',
      },
    },
    {
      id: 'turn_a1_37_2',
      turnIndex: 2,
      partnerPrompt:
        'Take a look at these two: the SwiftAir 13 is $700 and weighs only one kilo. The ProBook 15 is $1,100, but has a 15-inch screen and 16GB RAM. How do they compare for your budget?',
      partnerAudioText:
        'Take a look at these two: the SwiftAir 13 is $700 and weighs only one kilo. The ProBook 15 is $1,100, but has a 15-inch screen and 16GB RAM. How do they compare for your budget?',
      partnerQuestionHindi:
        'इन दोनों को देखें: स्विफ्टएयर 13 की कीमत $700 है और इसका वजन केवल एक किलो है। प्रोबुक 15 $1,100 की है, लेकिन इसमें 15-इंच की स्क्रीन और 16GB रैम है। आपके बजट के हिसाब से ये कैसे हैं?',
      expectedFunction: 'Compare Prices & Features (cheaper / more expensive)',
      contextGoal:
        'Compare the two models using comparative terms (e.g. "The SwiftAir is cheaper than the ProBook, but the ProBook is more powerful").',
      targetVocabulary: ['cheaper', 'more expensive', 'swiftair', 'probook', 'budget', 'than', 'lighter'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'The SwiftAir is much cheaper than the ProBook, and it is lighter to carry. The ProBook is more expensive, but it is more powerful.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'The SwiftAir is cheaper and lighter than the ProBook, so it fits my budget better.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'SwiftAir is $400 cheaper and way lighter than the ProBook.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Price & Feature Comparison',
          patterns: [
            'cheaper',
            'more expensive',
            'lighter',
            'more powerful',
            'swiftair',
            'probook',
            'than',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'expensiver_rule',
          pattern: /\bexpensiver\b/i,
          errorType: 'grammar',
          message: 'Say "more expensive", not "expensiver".',
          correctionPattern: 'more expensive than',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_37_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly compares the cost?',
        options: [
          { id: 'opt_1', text: 'The SwiftAir is cheaper than the ProBook.', isCorrect: true },
          { id: 'opt_2', text: 'The SwiftAir is more cheaper than the ProBook.', isCorrect: false },
          { id: 'opt_3', text: 'The SwiftAir is cheap than the ProBook.', isCorrect: false },
        ],
        correctAnswer: 'The SwiftAir is cheaper than the ProBook.',
        explanation: 'Do not double comparatives (no "more cheaper").',
      },
    },
    {
      id: 'turn_a1_37_3',
      turnIndex: 3,
      partnerPrompt:
        'And what about battery life? The SwiftAir lasts 14 hours on a single charge, which is 4 hours longer than the ProBook. Does that help you decide?',
      partnerAudioText:
        'And what about battery life? The SwiftAir lasts 14 hours on a single charge, which is 4 hours longer than the ProBook. Does that help you decide?',
      partnerQuestionHindi:
        'और बैटरी लाइफ के बारे में क्या? स्विफ्टएयर एक बार चार्ज करने पर 14 घंटे चलती है, जो प्रोबुक से 4 घंटे अधिक है। क्या इससे आपको निर्णय लेने में मदद मिलती है?',
      expectedFunction: 'Evaluate Battery Comparison & State Preference (better than)',
      contextGoal:
        'Acknowledge that longer battery life is better for commuting ("The battery is better than the ProBook\'s") and select the SwiftAir.',
      targetVocabulary: ['longer', 'better than', 'swiftair', 'battery life', 'decide', 'choose'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes, definitely! Fourteen hours of battery life is much better than ten hours. The SwiftAir is perfect for long train rides.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'That battery life is longer and better for me. I prefer the SwiftAir!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Longer battery and lighter weight? The SwiftAir is definitely better for me.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Battery Evaluation',
          patterns: ['longer', 'better than', 'better for', 'swiftair', 'battery', 'decide', 'prefer'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_37_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "14 hours is ___ than 10 hours for battery life."',
        options: [
          { id: 'opt_1', text: 'better', isCorrect: true },
          { id: 'opt_2', text: 'gooder', isCorrect: false },
          { id: 'opt_3', text: 'more good', isCorrect: false },
        ],
        correctAnswer: 'better',
        explanation: '"Better" is the comparative form of "good".',
      },
    },
    {
      id: 'turn_a1_37_4',
      turnIndex: 4,
      partnerPrompt:
        'Excellent choice! The SwiftAir is currently our most popular ultrabook. I will grab a brand new boxed unit from the stockroom for you. Would you like a protective sleeve with it?',
      partnerAudioText:
        'Excellent choice! The SwiftAir is currently our most popular ultrabook. I will grab a brand new boxed unit from the stockroom for you. Would you like a protective sleeve with it?',
      partnerQuestionHindi:
        'उत्कृष्ट विकल्प! स्विफ्टएयर वर्तमान में हमारा सबसे लोकप्रिय अल्ट्राबुक है। मैं आपके लिए स्टॉक रूम से एक बिल्कुल नया सीलबंद डिब्बा ले आता हूँ। क्या आप इसके साथ एक सुरक्षात्मक कवर भी लेना चाहेंगे?',
      expectedFunction: 'Conclude Purchase & Express Appreciation',
      contextGoal:
        'Confirm purchase, accept or decline the sleeve politely, and thank Omar for the comparison advice.',
      targetVocabulary: ['thank you', 'sleeve', 'take the swiftair', 'appreciate your advice', 'great'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes please, I would love a protective sleeve too! Thank you so much for explaining the differences and helping me choose.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Yes, a black sleeve would be great. Thank you for your helpful comparison!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Sure, add the sleeve! Thanks for the great advice, Omar.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Purchase Confirmation',
          patterns: ['sleeve', 'thank you', 'thanks', 'appreciate', 'choose', 'help', 'great'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_37_4',
        type: 'multiple_choice',
        prompt: 'Which response closes the transaction politely?',
        options: [
          { id: 'opt_1', text: 'Yes please, thank you for helping me compare them!', isCorrect: true },
          { id: 'opt_2', text: 'Give laptop fast I go.', isCorrect: false },
          { id: 'opt_3', text: 'This computer is finished.', isCorrect: false },
        ],
        correctAnswer: 'Yes please, thank you for helping me compare them!',
        explanation: 'Polite and appreciative closing.',
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
