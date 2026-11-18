import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_80: ConversationDefinition = {
  id: 'conv_a1_80',
  title: 'Dining Experiences, Dietary Preferences & Resolving Order Mistakes',
  cefr: 'A1',
  unitId: 'unit_a1_6',
  lessonLinks: ['lesson_a1_6_80'],
  estimatedMinutes: 5,
  scenario:
    'You are dining with colleagues at The Olive Tree Bistro in Glasgow. You speak with Head Server Sofia Rossi to communicate a severe peanut allergy and dairy restriction, correct an accidental side dish mistake politely, and arrange separate payments for the bill.',
  communicativeGoals: [
    'Communicate dietary restrictions and allergies explicitly ("I am allergic to...", "Does this contain...?")',
    'Politely notify waiting staff of an order mistake without causing offense ("Excuse me, I believe I ordered...")',
    'Request customized cooking preferences (dressing on the side, no butter, steamed vegetables)',
    'Ask for a split bill and specify individual payment amounts',
  ],
  canDoStatements: [
    'Can communicate food allergies and dietary preferences to restaurant servers',
    'Can politely correct a mistaken dish or missing item',
    'Can request separate or split payments at the end of a meal',
  ],
  characters: [
    {
      id: 'char_sofia_rossi',
      name: 'Sofia Rossi',
      role: 'Head Server at The Olive Tree Bistro',
      avatar: '🍽️',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'allergic',
        ipa: '/əˈlɜːrdʒɪk/',
        partOfSpeech: 'adjective',
        meaning: 'Having an allergy to a particular food or substance',
        exampleSentence: 'I am severely allergic to peanuts and shellfish.',
        translations: { hi: 'एलर्जी होना / संवेदनशील' },
      },
      {
        word: 'substitute',
        ipa: '/ˈsʌbstɪtjuːt/',
        partOfSpeech: 'verb',
        meaning: 'Use or add in place of something else',
        exampleSentence: 'Could I substitute french fries with a fresh green salad?',
        translations: { hi: 'बदलना / स्थान पर लेना' },
      },
      {
        word: 'dressing',
        ipa: '/ˈdrɛsɪŋ/',
        partOfSpeech: 'noun',
        meaning: 'A sauce for salads, typically containing oil, vinegar, or yogurt',
        exampleSentence: 'Could I please have the olive oil dressing on the side?',
        translations: { hi: 'सलाद की चटनी / ड्रेसिंग' },
      },
      {
        word: 'split',
        ipa: '/splɪt/',
        partOfSpeech: 'verb',
        meaning: 'Divide into two or more parts or shares',
        exampleSentence: 'Could we split the bill equally between two credit cards?',
        translations: { hi: 'बांटना / अलग-अलग करना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am allergic to..., does this dish contain...?',
        functionCategory: 'Allergy Warning',
        exampleSentence: 'I am allergic to dairy; does this risotto contain butter or cheese?',
      },
      {
        phrase: 'Excuse me, I believe I ordered...',
        functionCategory: 'Correcting Order',
        exampleSentence: 'Excuse me, I believe I ordered the grilled fish without dairy.',
      },
      {
        phrase: 'Could we get the dressing on the side?',
        functionCategory: 'Special Request',
        exampleSentence: 'Could we get the salad dressing on the side, please?',
      },
      {
        phrase: 'Could we split the bill, please?',
        functionCategory: 'Paying Bill',
        exampleSentence: 'Could we split the bill between two cards, please?',
      },
    ],
    grammar: {
      title: 'Polite Order Corrections: "I believe I ordered..." & Negative Modifiers',
      conceptExplanation:
        'Instead of accusing the server ("You brought the wrong food"), use diplomatic structures: "Excuse me, I believe I ordered [Item] without [Ingredient]."',
      patternFormula: 'Excuse me + I believe I ordered [Item] without [Ingredient] / with [Substitution]',
      contrastExamples: [
        {
          incorrect: 'You gave me wrong plate take it back.',
          correct: 'Excuse me, I believe I ordered the grilled salmon with green salad, not fries.',
          explanation: 'Polite, clear, and diplomatic language in service situations.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Sofia Rossi',
        text: 'Good evening and welcome to The Olive Tree! Are you ready to order your mains, or do you have any dietary questions?',
        translation: 'शुभ संध्या और द ऑलिव ट्री में आपका स्वागत है! क्या आप अपने मुख्य भोजन का ऑर्डर देने के लिए तैयार हैं, या आपके पास कोई आहार संबंधी प्रश्न हैं?',
      },
      {
        speaker: 'You',
        text: 'Good evening Sofia. Yes, I am severely allergic to peanuts and dairy. Does the grilled sea bass contain any butter or peanut oil?',
        translation: 'शुभ संध्या सोफिया। हाँ, मुझे मूंगफली और डेयरी से गंभीर एलर्जी है। क्या ग्रिल्ड सी बास में कोई मक्खन या मूंगफली का तेल है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_80_1',
      type: 'fill_blank',
      prompt: 'Complete the allergy disclosure: "I am ___ to peanuts, so please notify the kitchen."',
      options: [
        { id: 'opt_1', text: 'allergic', isCorrect: true },
        { id: 'opt_2', text: 'allergy', isCorrect: false },
        { id: 'opt_3', text: 'allergies', isCorrect: false },
      ],
      correctAnswer: 'allergic',
      explanation: 'Adjective: "allergic to [something]".',
    },
    {
      id: 'cp_a1_80_2',
      type: 'multiple_choice',
      prompt: 'Which request asks to modify a salad dressing politely?',
      options: [
        { id: 'opt_1', text: 'Could I please have the salad dressing on the side?', isCorrect: true },
        { id: 'opt_2', text: 'Put sauce far away in bowl now.', isCorrect: false },
        { id: 'opt_3', text: 'No sauce touching green leaf.', isCorrect: false },
      ],
      correctAnswer: 'Could I please have the salad dressing on the side?',
      explanation: 'Standard restaurant formula: "dressing on the side".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_80_1',
      scenarioContext: 'Politely correct an incorrect side dish.',
      prompt: 'Build: "I believe I ordered steamed vegetables instead of fries."',
      targetStructure: 'I believe I ordered steamed vegetables instead of fries',
      wordBank: ['I', 'believe', 'ordered', 'steamed', 'vegetables', 'instead', 'of', 'fries', 'ordering', 'did'],
      acceptableSolutions: [
        'I believe I ordered steamed vegetables instead of fries',
        'I believe I ordered steamed vegetables instead of fries.',
      ],
      explanation: 'Diplomatic correction structure with "instead of".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_80_1',
      turnIndex: 1,
      partnerPrompt:
        'Good evening! Welcome to The Olive Tree Bistro. Before I take your dinner order, does anyone at the table have food allergies or dietary preferences?',
      partnerAudioText:
        'Good evening! Welcome to The Olive Tree Bistro. Before I take your dinner order, does anyone at the table have food allergies or dietary preferences?',
      partnerQuestionHindi:
        'शुभ संध्या! द ऑलिव ट्री बिस्टरो में आपका स्वागत है। इससे पहले कि मैं आपके रात के खाने का ऑर्डर लूँ, क्या मेज पर किसी को भोजन से एलर्जी या आहार संबंधी प्राथमिकताएं हैं?',
      expectedFunction: 'Communicate Allergies (Peanuts & Dairy) & Inquire about Ingredients',
      contextGoal:
        'State that you are severely allergic to peanuts and dairy, and ask if the grilled sea bass is cooked in butter or vegetable oil.',
      targetVocabulary: ['allergic to peanuts and dairy', 'grilled sea bass', 'cooked in butter or oil', 'dietary restrictions'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'Good evening Sofia! Yes, I am severely allergic to peanuts and dairy. Could you please check if the grilled sea bass is cooked with olive oil instead of butter?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Allergy & Cooking Oil Inquiry',
          patterns: [
            'allergic',
            'peanuts',
            'dairy',
            'sea bass',
            'butter',
            'olive oil',
            'cooked',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_80_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I am allergic ___ tree nuts and dairy."',
        options: [
          { id: 'opt_1', text: 'to', isCorrect: true },
          { id: 'opt_2', text: 'with', isCorrect: false },
          { id: 'opt_3', text: 'for', isCorrect: false },
        ],
        correctAnswer: 'to',
        explanation: 'Collocation: "allergic to".',
      },
    },
    {
      id: 'turn_a1_80_2',
      turnIndex: 2,
      partnerPrompt:
        'Our chef will prepare your sea bass strictly with pure olive oil in a sanitized pan with no dairy or nuts. What side dish would you like with your fish?',
      partnerAudioText:
        'Our chef will prepare your sea bass strictly with pure olive oil in a sanitized pan with no dairy or nuts. What side dish would you like with your fish?',
      partnerQuestionHindi:
        'हमारे शेफ आपके सी बास को बिना किसी डेयरी या नट्स के एक साफ पैन में शुद्ध जैतून के तेल के साथ तैयार करेंगे। आप अपनी मछली के साथ क्या साइड डिश चाहेंगे?',
      expectedFunction: 'Order Side Dish (Steamed Vegetables & Salad Dressing on the Side)',
      contextGoal:
        'Order steamed seasonal vegetables and ask for a mixed garden salad with lemon dressing served on the side.',
      targetVocabulary: ['steamed seasonal vegetables', 'mixed garden salad', 'lemon dressing on the side', 'no croutons'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'That is wonderful, thank you! I would like steamed seasonal vegetables, and a mixed garden salad with the lemon dressing on the side, please.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Sides & Dressing Request',
          patterns: [
            'steamed',
            'vegetables',
            'salad',
            'dressing on the side',
            'lemon',
            'side',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_80_2',
        type: 'multiple_choice',
        prompt: 'Which phrase specifies sauce placement accurately?',
        options: [
          { id: 'opt_1', text: 'Could I have the salad dressing on the side, please?', isCorrect: true },
          { id: 'opt_2', text: 'Put sauce near the fork.', isCorrect: false },
          { id: 'opt_3', text: 'Dressing on table corner please.', isCorrect: false },
        ],
        correctAnswer: 'Could I have the salad dressing on the side, please?',
        explanation: '"on the side" is the standard dining idiom.',
      },
    },
    {
      id: 'turn_a1_80_3',
      turnIndex: 3,
      partnerPrompt:
        'Here is your grilled sea bass! Oh, it appears the junior chef plated french fries instead of your steamed vegetables. Would you like me to replace it immediately?',
      partnerAudioText:
        'Here is your grilled sea bass! Oh, it appears the junior chef plated french fries instead of your steamed vegetables. Would you like me to replace it immediately?',
      partnerQuestionHindi:
        'यह आपका ग्रिल्ड सी बास है! ओह, ऐसा लगता है कि जूनियर शेफ ने आपकी उबली हुई सब्जियों के बजाय फ्रेंच फ्राइज़ परोस दी हैं। क्या आप चाहते हैं कि मैं इसे तुरंत बदल दूं?',
      expectedFunction: 'Politely Request Corrected Side Dish (Diplomatic Correction)',
      contextGoal:
        'Politely confirm that you ordered steamed vegetables and ask if she could bring the steamed vegetables while you start the salad.',
      targetVocabulary: ['I believe I ordered steamed vegetables', 'could you bring the vegetables', 'appreciate your help', 'take your time'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'Yes please, Sofia. I believe I ordered the steamed vegetables instead of fries. I appreciate you catching that so quickly!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Polite Correction & Appreciation',
          patterns: [
            'steamed vegetables',
            'ordered',
            'fries',
            'appreciate',
            'thank you',
            'sofia',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_80_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I ordered vegetables ___ of french fries."',
        options: [
          { id: 'opt_1', text: 'instead', isCorrect: true },
          { id: 'opt_2', text: 'besides', isCorrect: false },
          { id: 'opt_3', text: 'without', isCorrect: false },
        ],
        correctAnswer: 'instead',
        explanation: 'Collocation: "instead of [alternative]".',
      },
    },
    {
      id: 'turn_a1_80_4',
      turnIndex: 4,
      partnerPrompt:
        'Here are your fresh steamed vegetables, with our sincere apologies! I hope you enjoyed the meal. How would you and your colleague like to handle the bill this evening?',
      partnerAudioText:
        'Here are your fresh steamed vegetables, with our sincere apologies! I hope you enjoyed the meal. How would you and your colleague like to handle the bill this evening?',
      partnerQuestionHindi:
        'हमारी ईमानदार माफी के साथ, यहाँ आपकी ताज़ी उबली हुई सब्जियाँ हैं! मुझे आशा है कि आपने भोजन का आनंद लिया। आप और आपके सहकर्मी आज शाम बिल का भुगतान कैसे करना चाहेंगे?',
      expectedFunction: 'Request Split Bill Across Two Credit Cards & Compliment Service',
      contextGoal:
        'Compliment the delicious meal, thank Sofia for the great care regarding allergies, and ask to split the total bill equally between two credit cards.',
      targetVocabulary: ['meal was delicious', 'thank you for catering to allergies', 'split the bill equally', 'two credit cards'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'The sea bass was absolutely delicious, and thank you for taking such good care of my allergies! Could we please split the bill equally between two credit cards?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Compliment & Split Bill Request',
          patterns: [
            'delicious',
            'thank you',
            'allergies',
            'split',
            'bill',
            'two',
            'credit cards',
            'cards',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_80_4',
        type: 'multiple_choice',
        prompt: 'Which request asks to divide restaurant payment politely?',
        options: [
          { id: 'opt_1', text: 'Could we split the bill equally between two credit cards, please?', isCorrect: true },
          { id: 'opt_2', text: 'Cut paper money in half right now.', isCorrect: false },
          { id: 'opt_3', text: 'Two cards pay some some.', isCorrect: false },
        ],
        correctAnswer: 'Could we split the bill equally between two credit cards, please?',
        explanation: 'Natural and clear dining request.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 70,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 60,
  },
};
