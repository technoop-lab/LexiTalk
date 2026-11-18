import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_50: ConversationDefinition = {
  id: 'conv_a1_50',
  title: 'Post Office, Deliveries, Mail & Sending Packages',
  cefr: 'A1',
  unitId: 'unit_a1_4',
  lessonLinks: ['lesson_a1_4_50'],
  estimatedMinutes: 5,
  scenario:
    'You are sending a box of handmade gifts and books to your friend in Toronto, Canada. At the main post office, you interact with postal clerk Oliver to weigh the parcel, choose between standard and express shipping, buy stamps, fill in the customs form, and receive a tracking number.',
  communicativeGoals: [
    'Send letters and parcels internationally using "I would like to send this package to..."',
    'Compare delivery speeds and postage costs ("Which is faster, standard or express?", "How much does it weigh?")',
    'Understand tracking, insurance, and customs declaration labels',
    'Recycle weights, measurements, costs, and comparative adjectives from lessons 1–45',
  ],
  canDoStatements: [
    'Can ask about postage rates and delivery options for packages (CEFR A1.2)',
    'Can understand shipping speeds (standard vs express) and tracking services',
    'Can complete basic postal information and ask for stamps',
  ],
  characters: [
    {
      id: 'char_oliver_clerk',
      name: 'Oliver',
      role: 'Post Office Clerk',
      avatar: '📦',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'parcel',
        ipa: '/ˈpɑːrsəl/',
        partOfSpeech: 'noun',
        meaning: 'An object or collection of objects wrapped in paper or packed in a box, to be sent by post',
        exampleSentence: 'I would like to send this parcel to Canada.',
        translations: { hi: 'पार्सल / डाक का बंडल' },
      },
      {
        word: 'weigh',
        ipa: '/weɪ/',
        partOfSpeech: 'verb',
        meaning: 'Find out how heavy someone or something is, typically using a scale',
        exampleSentence: 'Please place your package on the scale so I can weigh it.',
        translations: { hi: 'तौलना' },
      },
      {
        word: 'tracking',
        ipa: '/ˈtrækɪŋ/',
        partOfSpeech: 'noun',
        meaning: 'The process of following the progress or movements of a package in transit',
        exampleSentence: 'You can check your delivery tracking number online.',
        translations: { hi: 'ट्रैकिंग / निगरानी' },
      },
      {
        word: 'express',
        ipa: '/ɪkˈsprɛs/',
        partOfSpeech: 'adjective / noun',
        meaning: 'Operating at high speed; relating to prompt postal or freight delivery',
        exampleSentence: 'Express delivery arrives in just three business days.',
        translations: { hi: 'एक्सप्रेस / त्वरित सेवा' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I would like to send this parcel to...',
        functionCategory: 'Postal Request',
        exampleSentence: 'I would like to send this parcel to Toronto, Canada.',
      },
      {
        phrase: 'How much does it weigh?',
        functionCategory: 'Weight Inquiry',
        exampleSentence: 'How much does this box weigh on your scale?',
      },
      {
        phrase: 'What is the difference between standard and express?',
        functionCategory: 'Service Comparison',
        exampleSentence: 'What is the difference between standard and express airmail?',
      },
      {
        phrase: 'Does it include a tracking number?',
        functionCategory: 'Tracking Inquiry',
        exampleSentence: 'Does this service include an international tracking number?',
      },
    ],
    grammar: {
      title: 'Comparing Postal Services: Comparatives & Inquiries (Faster than, More expensive than, How long does it take?)',
      conceptExplanation:
        'Use comparative forms to evaluate postal options ("Express is faster than standard, but standard is cheaper than express"). To ask about delivery duration, use "How long does it take to arrive?".',
      patternFormula: 'How long does it take to arrive in + [Destination]? | [Option A] is + [-er than / more expensive than] + [Option B]',
      contrastExamples: [
        {
          incorrect: 'How many days it take to Canada?',
          correct: 'How long does it take to arrive in Canada?',
          explanation: 'Use "How long does it take" for duration questions.',
        },
        {
          incorrect: 'Express is more faster than standard.',
          correct: 'Express is faster than standard.',
          explanation: 'Never combine "more" with "-er": use "faster", not "more faster".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Oliver',
        text: 'Next in line, please! Hello there, what are you sending today?',
        translation: 'लाइन में अगला व्यक्ति, कृपया! नमस्ते, आज आप क्या भेज रहे हैं?',
      },
      {
        speaker: 'You',
        text: 'Hello Oliver! I would like to send this parcel of books and gifts to Toronto, Canada.',
        translation: 'नमस्ते ओलिवर! मैं किताबों और उपहारों का यह पार्सल टोरंटो, कनाडा भेजना चाहूँगा।',
      },
      {
        speaker: 'Oliver',
        text: 'Let us place it on the scale... It weighs exactly 1.8 kilograms. Would you prefer standard or express shipping?',
        translation: 'आइए इसे तराजू पर रखें... इसका वजन ठीक 1.8 किलोग्राम है। क्या आप मानक या एक्सप्रेस शिपिंग पसंद करेंगे?',
      },
      {
        speaker: 'You',
        text: 'How long does standard take compared to express, and what are the prices?',
        translation: 'एक्सप्रेस की तुलना में मानक में कितना समय लगता है, और कीमतें क्या हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_50_1',
      type: 'fill_blank',
      prompt: 'Complete the postal request: "I would like to ___ this box to Canada."',
      options: [
        { id: 'opt_1', text: 'send', isCorrect: true },
        { id: 'opt_2', text: 'sending', isCorrect: false },
        { id: 'opt_3', text: 'sends', isCorrect: false },
      ],
      correctAnswer: 'send',
      explanation: '"would like to" takes the base verb "send".',
    },
    {
      id: 'cp_a1_50_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly compares the delivery speeds?',
      options: [
        { id: 'opt_1', text: 'Express shipping is faster than standard shipping.', isCorrect: true },
        { id: 'opt_2', text: 'Express shipping is more fast than standard.', isCorrect: false },
        { id: 'opt_3', text: 'Express shipping is fastest that standard.', isCorrect: false },
      ],
      correctAnswer: 'Express shipping is faster than standard shipping.',
      explanation: 'Comparative of single-syllable adjective "fast" is "faster than".',
    },
    {
      id: 'cp_a1_50_3',
      type: 'multiple_choice',
      prompt: 'How do you ask about delivery time duration?',
      options: [
        { id: 'opt_1', text: 'How long does it take to arrive?', isCorrect: true },
        { id: 'opt_2', text: 'How time is taking to arrive?', isCorrect: false },
        { id: 'opt_3', text: 'How much days it takes?', isCorrect: false },
      ],
      correctAnswer: 'How long does it take to arrive?',
      explanation: '"How long does it take to arrive?" is the natural and accurate pattern.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_50_1',
      scenarioContext: 'State destination and request package mailing.',
      prompt: 'Build: "I would like to send this parcel to Canada."',
      targetStructure: 'Subject + would like to + base verb + object + prepositional phrase',
      wordBank: ['I', 'would', 'like', 'to', 'send', 'this', 'parcel', 'to', 'Canada', 'sending', 'at'],
      acceptableSolutions: [
        'I would like to send this parcel to Canada',
        'I would like to send this parcel to Canada.',
      ],
      explanation: 'Core postal request formula.',
    },
    {
      id: 'sc_a1_50_2',
      scenarioContext: 'Ask if package tracking is included in the price.',
      prompt: 'Build: "Does this postage include a tracking number?"',
      targetStructure: 'Does + noun phrase + base verb + object?',
      wordBank: ['Does', 'this', 'postage', 'include', 'a', 'tracking', 'number', 'is', 'including', 'have'],
      acceptableSolutions: [
        'Does this postage include a tracking number',
        'Does this postage include a tracking number?',
      ],
      explanation: 'Question pattern using auxiliary "Does".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_50_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello! Welcome to the Royal Post Office. What are you looking to post today, and where is it heading?',
      partnerAudioText:
        'Hello! Welcome to the Royal Post Office. What are you looking to post today, and where is it heading?',
      partnerQuestionHindi:
        'नमस्ते! रॉयल पोस्ट ऑफिस में आपका स्वागत है। आज आप क्या भेजना चाहते हैं, और यह कहाँ जा रहा है?',
      expectedFunction: 'State Item & International Destination',
      contextGoal:
        'State that you would like to send a gift parcel of books to your friend in Toronto, Canada.',
      targetVocabulary: ['would like to send', 'parcel', 'package', 'to Canada', 'Toronto', 'books and gifts'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hello! I would like to send this parcel of books and gifts to my friend in Toronto, Canada. Could you please weigh it for me?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I want to send this package to Canada. How much does it weigh?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I’d like to send this parcel to Toronto, please.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Package & Destination',
          patterns: [
            'send this parcel',
            'send this package',
            'to canada',
            'to toronto',
            'books and gifts',
            'weigh it',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'send_at_canada_error',
          pattern: /\bsend this parcel at canada\b/i,
          errorType: 'grammar',
          message: 'Say "send this parcel to Canada", not "at Canada".',
          correctionPattern: 'send this parcel to Canada',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_50_1',
        type: 'fill_blank',
        prompt: 'Choose the correct preposition: "I want to send a letter ___ Canada."',
        options: [
          { id: 'opt_1', text: 'to', isCorrect: true },
          { id: 'opt_2', text: 'at', isCorrect: false },
          { id: 'opt_3', text: 'in', isCorrect: false },
        ],
        correctAnswer: 'to',
        explanation: 'Use preposition of direction "to" with destination countries.',
      },
    },
    {
      id: 'turn_a1_50_2',
      turnIndex: 2,
      partnerPrompt:
        'Let’s place it on the scales... It weighs 1.5 kilograms. Standard airmail costs £14 and takes 7 to 10 days. Express airmail costs £24 and arrives in 3 to 4 days. Which option do you prefer?',
      partnerAudioText:
        'Let’s place it on the scales... It weighs 1.5 kilograms. Standard airmail costs £14 and takes 7 to 10 days. Express airmail costs £24 and arrives in 3 to 4 days. Which option do you prefer?',
      partnerQuestionHindi:
        'आइए इसे तराजू पर रखें... इसका वजन 1.5 किलोग्राम है। स्टैंडर्ड एयरमेल की कीमत £14 है और इसमें 7 से 10 दिन लगते हैं। एक्सप्रेस एयरमेल की कीमत £24 है और यह 3 से 4 दिनों में पहुंचता है। आप कौन सा विकल्प पसंद करेंगे?',
      expectedFunction: 'Choose Shipping Speed & Inquire About Tracking',
      contextGoal:
        'Choose Express or Standard, and ask if it includes an online tracking number.',
      targetVocabulary: ['i prefer express', 'standard airmail', 'tracking number', 'does it include', 'online tracking'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I prefer express airmail because I want it to arrive quickly! Does the express service include an online tracking number?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I will take express, please. Does it come with a tracking number?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Express please! Does that include tracking?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Shipping Choice & Tracking Inquiry',
          patterns: [
            'prefer express',
            'take express',
            'prefer standard',
            'tracking number',
            'tracking included',
            'online tracking',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_50_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly asks about tracking?',
        options: [
          { id: 'opt_1', text: 'Does express shipping include a tracking number?', isCorrect: true },
          { id: 'opt_2', text: 'Is express shipping includes tracking number?', isCorrect: false },
          { id: 'opt_3', text: 'Do express shipping including tracking number?', isCorrect: false },
        ],
        correctAnswer: 'Does express shipping include a tracking number?',
        explanation: 'Singular subject "express shipping" takes auxiliary "Does + base verb (include)".',
      },
    },
    {
      id: 'turn_a1_50_3',
      turnIndex: 3,
      partnerPrompt:
        'Yes, express includes full end-to-end tracking! Before I print the label, please fill out this small customs declaration sticker with the contents and value of the gifts. How much are the contents worth in total?',
      partnerAudioText:
        'Yes, express includes full end-to-end tracking! Before I print the label, please fill out this small customs declaration sticker with the contents and value of the gifts. How much are the contents worth in total?',
      partnerQuestionHindi:
        'हाँ, एक्सप्रेस में पूरी ट्रैकिंग शामिल है! इससे पहले कि मैं लेबल प्रिंट करूँ, कृपया उपहारों की सामग्री और मूल्य के साथ इस छोटे सीमा शुल्क घोषणा स्टिकर को भरें। कुल मिलाकर सामग्री का मूल्य कितना है?',
      expectedFunction: 'State Declared Value & Confirm Contents',
      contextGoal:
        'State the approximate value (e.g. £45 or £50) for the books and souvenirs.',
      targetVocabulary: ['contents are worth', 'forty-five pounds', 'books and souvenirs', 'customs form', 'fifty pounds'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'The total value of the books and handmade souvenirs is approximately forty-five pounds. I have written everything clearly on the customs form.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'The gifts are worth forty-five pounds in total. Here is the completed customs form.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'It’s worth £45 in total. Here is the form!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Value & Contents',
          patterns: [
            'forty-five pounds',
            'fifty pounds',
            '45 pounds',
            '50 pounds',
            'worth',
            'books and souvenirs',
            'customs form',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_50_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "The contents are worth forty-five ___."',
        options: [
          { id: 'opt_1', text: 'pounds', isCorrect: true },
          { id: 'opt_2', text: 'pounder', isCorrect: false },
          { id: 'opt_3', text: 'pounded', isCorrect: false },
        ],
        correctAnswer: 'pounds',
        explanation: 'Use plural currency "pounds".',
      },
    },
    {
      id: 'turn_a1_50_4',
      turnIndex: 4,
      partnerPrompt:
        'Perfect, thank you! The express label is printed and firmly attached. Your total is £24. Here is your receipt with the 12-digit tracking code. You can track it online at royalmail.com starting tonight. Anything else today?',
      partnerAudioText:
        'Perfect, thank you! The express label is printed and firmly attached. Your total is £24. Here is your receipt with the 12-digit tracking code. You can track it online at royalmail.com starting tonight. Anything else today?',
      partnerQuestionHindi:
        'बहुत बढ़िया, धन्यवाद! एक्सप्रेस लेबल प्रिंट होकर मजबूती से चिपका दिया गया है। आपका कुल बिल £24 है। यह 12 अंकों के ट्रैकिंग कोड वाली आपकी रसीद है। आप आज रात से royalmail.com पर इसे ऑनलाइन ट्रैक कर सकते हैं। आज कुछ और?',
      expectedFunction: 'Complete Payment, Express Thanks & Farewell',
      contextGoal:
        'Pay with your contactless debit card, thank Oliver for his great service, and wish him a good day.',
      targetVocabulary: ['pay with contactless card', 'thank you Oliver', 'have a great day', 'tracking receipt', 'goodbye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I will pay by contactless card, please! Thank you so much for your quick and friendly service, Oliver. Have a great day!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I’ll pay with my card. Thank you very much, Oliver! Have a great afternoon.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Paying by contactless! Thanks for your help, Oliver. Goodbye!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Payment & Friendly Closing',
          patterns: [
            'pay by card',
            'contactless',
            'thank you',
            'thanks',
            'have a great day',
            'have a good day',
            'goodbye',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_50_4',
        type: 'multiple_choice',
        prompt: 'Which sentence offers card payment politely?',
        options: [
          { id: 'opt_1', text: 'I\'ll pay with my contactless debit card, please.', isCorrect: true },
          { id: 'opt_2', text: 'Card pay to you right now.', isCorrect: false },
          { id: 'opt_3', text: 'You take plastic money.', isCorrect: false },
        ],
        correctAnswer: 'I\'ll pay with my contactless debit card, please.',
        explanation: 'Natural and polite payment offer.',
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
