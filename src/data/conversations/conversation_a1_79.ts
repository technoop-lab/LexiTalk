import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_79: ConversationDefinition = {
  id: 'conv_a1_79',
  title: 'Hotel Special Requests, Room Issues & Checkout Queries',
  cefr: 'A1',
  unitId: 'unit_a1_6',
  lessonLinks: ['lesson_a1_6_79'],
  estimatedMinutes: 5,
  scenario:
    'You are staying at the Grand Central Hotel in Edinburgh. You speak with Front Desk Concierge Liam Gallagher to report an issue with the air conditioning in Room 304, request extra hypoallergenic pillows, and review your itemized checkout bill before paying.',
  communicativeGoals: [
    'Report a room maintenance issue politely using "There seems to be an issue with..."',
    'Make specific housekeeping requests ("Could we please get two extra pillows?")',
    'Review an itemized hotel invoice, clarify minibar/breakfast charges, and settle payment',
    'Retrieve earlier housing, daily routine, numbers, and payment vocabulary',
  ],
  canDoStatements: [
    'Can politely explain a hotel room defect to front desk staff',
    'Can request additional hotel amenities with appropriate courtesy formulas',
    'Can ask questions about an itemized bill before settling payment',
  ],
  characters: [
    {
      id: 'char_liam_gallagher',
      name: 'Liam Gallagher',
      role: 'Hotel Front Desk Concierge',
      avatar: '🏨',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'amenities',
        ipa: '/əˈmiːnɪtiz/',
        partOfSpeech: 'noun',
        meaning: 'Desirable or useful features of a building or room (towels, toiletries, Wi-Fi)',
        exampleSentence: 'Could housekeeping provide additional bathroom amenities?',
        translations: { hi: 'सुविधाएं / आवश्यक वस्तुएं' },
      },
      {
        word: 'invoice',
        ipa: '/ˈɪnvɔɪs/',
        partOfSpeech: 'noun',
        meaning: 'An itemized commercial bill listing goods sent or services provided',
        exampleSentence: 'Could I review the itemized checkout invoice, please?',
        translations: { hi: 'चालान / मदवार बिल' },
      },
      {
        word: 'maintenance',
        ipa: '/ˈmeɪntənəns/',
        partOfSpeech: 'noun',
        meaning: 'The process of preserving or repairing a condition or situation',
        exampleSentence: 'I will send our maintenance engineer to inspect the unit.',
        translations: { hi: 'रखरखाव / मरम्मत सेवा' },
      },
      {
        word: 'thermostat',
        ipa: '/ˈθɜːrməstæt/',
        partOfSpeech: 'noun',
        meaning: 'A device that automatically regulates temperature in a room',
        exampleSentence: 'The wall thermostat does not seem to adjust the heating.',
        translations: { hi: 'थर्मोस्टेट / तापमान नियंत्रक' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'There seems to be an issue with...',
        functionCategory: 'Polite Complaint',
        exampleSentence: 'There seems to be an issue with the air conditioning in Room 304.',
      },
      {
        phrase: 'Is it possible to request...?',
        functionCategory: 'Making Requests',
        exampleSentence: 'Is it possible to request two extra hypoallergenic pillows?',
      },
      {
        phrase: 'Could you explain this charge on my bill?',
        functionCategory: 'Billing Inquiry',
        exampleSentence: 'Could you please explain this £12 minibar charge on my bill?',
      },
      {
        phrase: 'I would like to settle the balance by card.',
        functionCategory: 'Paying Bill',
        exampleSentence: 'I would like to settle the balance by credit card, please.',
      },
    ],
    grammar: {
      title: 'Polite Inquiries with "There seems to be..." & Modal Requests',
      conceptExplanation:
        'Softening statements with "There seems to be [a problem]" sounds much more diplomatic in hospitality than direct blunt statements ("Your AC is broken"). Combine with "Could we get..." or "Would it be possible to...".',
      patternFormula: 'There seems to be an issue with [Item] + Could you please send someone to [Action]?',
      contrastExamples: [
        {
          incorrect: 'Room broken give me new room right now.',
          correct: 'Excuse me, there seems to be an issue with the thermostat in Room 304.',
          explanation: 'Use courteous diplomatic phrasing.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Liam Gallagher',
        text: 'Good morning! How may I assist you at the front desk today?',
        translation: 'शुभ प्रभात! आज मैं फ्रंट डेस्क पर आपकी क्या मदद कर सकता हूँ?',
      },
      {
        speaker: 'You',
        text: 'Good morning Liam. There seems to be an issue with the thermostat in Room 304—it is blowing cold air constantly. Also, could we get two extra pillows?',
        translation: 'शुभ प्रभात लियाम। कमरा 304 के थर्मोस्टेट में कुछ समस्या लग रही है—यह लगातार ठंडी हवा फेंक रहा है। साथ ही, क्या हमें दो अतिरिक्त तकिए मिल सकते हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_79_1',
      type: 'fill_blank',
      prompt: 'Complete the polite formula: "There ___ to be an issue with the shower temperature."',
      options: [
        { id: 'opt_1', text: 'seems', isCorrect: true },
        { id: 'opt_2', text: 'seemings', isCorrect: false },
        { id: 'opt_3', text: 'are seeming', isCorrect: false },
      ],
      correctAnswer: 'seems',
      explanation: '"There seems to be..." is the standard diplomatic formula.',
    },
    {
      id: 'cp_a1_79_2',
      type: 'multiple_choice',
      prompt: 'Which sentence asks for an itemized bill explanation courteously?',
      options: [
        { id: 'opt_1', text: 'Could you please clarify this £15 breakfast charge on my invoice?', isCorrect: true },
        { id: 'opt_2', text: 'Why you steal £15 from me invoice liar?', isCorrect: false },
        { id: 'opt_3', text: 'No pay breakfast.', isCorrect: false },
      ],
      correctAnswer: 'Could you please clarify this £15 breakfast charge on my invoice?',
      explanation: 'Polite and clear billing inquiry.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_79_1',
      scenarioContext: 'Report a hotel maintenance problem.',
      prompt: 'Build: "There seems to be an issue with the thermostat."',
      targetStructure: 'There seems to be an issue with the thermostat',
      wordBank: ['There', 'seems', 'to', 'be', 'an', 'issue', 'with', 'the', 'thermostat', 'is', 'are'],
      acceptableSolutions: [
        'There seems to be an issue with the thermostat',
        'There seems to be an issue with the thermostat.',
      ],
      explanation: 'Polite diagnostic structure.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_79_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning! Welcome to the Grand Central front desk. How is everything with your stay in Room 304 so far?',
      partnerAudioText:
        'Good morning! Welcome to the Grand Central front desk. How is everything with your stay in Room 304 so far?',
      partnerQuestionHindi:
        'शुभ प्रभात! ग्रैंड सेंट्रल फ्रंट डेस्क में आपका स्वागत है। कमरा 304 में आपका प्रवास अब तक कैसा चल रहा है?',
      expectedFunction: 'Report Room Temperature Issue & Request Extra Pillows (Semi-Independent)',
      contextGoal:
        'Explain that the thermostat seems stuck on high cold air and politely request two extra pillows from housekeeping.',
      targetVocabulary: ['there seems to be an issue with the thermostat', 'blowing cold air', 'request two extra pillows', 'housekeeping'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'Good morning Liam! Overall it is lovely, but there seems to be an issue with the thermostat in Room 304—it is blowing cold air constantly. Also, could housekeeping bring two extra pillows?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Thermostat Issue & Pillows',
          patterns: [
            'thermostat',
            'cold',
            'air',
            'issue',
            'problem',
            'pillows',
            'extra',
            'room 304',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_79_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Could housekeeping bring two extra ___?"',
        options: [
          { id: 'opt_1', text: 'pillows', isCorrect: true },
          { id: 'opt_2', text: 'pillowings', isCorrect: false },
          { id: 'opt_3', text: 'pillowly', isCorrect: false },
        ],
        correctAnswer: 'pillows',
        explanation: 'Plural noun: "pillows".',
      },
    },
    {
      id: 'turn_a1_79_2',
      turnIndex: 2,
      partnerPrompt:
        'I am so sorry for the discomfort! I will dispatch our maintenance engineer immediately to reset the heating unit and have housekeeping bring fresh pillows. Are you planning to check out today or extend your stay?',
      partnerAudioText:
        'I am so sorry for the discomfort! I will dispatch our maintenance engineer immediately to reset the heating unit and have housekeeping bring fresh pillows. Are you planning to check out today or extend your stay?',
      partnerQuestionHindi:
        'असुविधा के लिए मुझे बहुत खेद है! मैं हीटिंग यूनिट को रीसेट करने के लिए तुरंत हमारे रखरखाव इंजीनियर को भेजूंगा और हाउसकीपिंग से ताजा तकिए मंगवाऊंगा। क्या आप आज चेक आउट करने की योजना बना रहे हैं या अपने प्रवास को बढ़ा रहे हैं?',
      expectedFunction: 'State Checkout Plan & Request Itemized Bill Review',
      contextGoal:
        'State that you are checking out at noon today and would like to review the itemized invoice ahead of time.',
      targetVocabulary: ['checking out at noon today', 'review itemized invoice', 'final bill', 'ahead of time'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'Thank you Liam! I am checking out today at 12:00 noon. Could I please review the itemized bill now so everything is clear?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Checkout Time & Bill Request',
          patterns: [
            'check out',
            '12:00',
            'noon',
            'today',
            'itemized',
            'bill',
            'invoice',
            'review',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_79_2',
        type: 'multiple_choice',
        prompt: 'Which question asks for invoice review politely?',
        options: [
          { id: 'opt_1', text: 'Could I please review the itemized invoice before checking out?', isCorrect: true },
          { id: 'opt_2', text: 'Show me paper with money numbers.', isCorrect: false },
          { id: 'opt_3', text: 'I take paper no pay.', isCorrect: false },
        ],
        correctAnswer: 'Could I please review the itemized invoice before checking out?',
        explanation: 'Polite and clear billing inquiry.',
      },
    },
    {
      id: 'turn_a1_79_3',
      turnIndex: 3,
      partnerPrompt:
        'Certainly. Here is your statement: Room charges for two nights are £180, plus £15 for the buffet breakfast on Tuesday, and £8 for sparkling water from the minibar. Does everything look accurate to you?',
      partnerAudioText:
        'Certainly. Here is your statement: Room charges for two nights are £180, plus £15 for the buffet breakfast on Tuesday, and £8 for sparkling water from the minibar. Does everything look accurate to you?',
      partnerQuestionHindi:
        'निश्चित रूप से। यह आपका विवरण है: दो रातों के लिए कमरे का शुल्क £180 है, साथ ही मंगलवार को बुफे नाश्ते के लिए £15, और मिनीबार से स्पार्कलिंग पानी के लिए £8। क्या सब कुछ आपको सही लग रहा है?',
      expectedFunction: 'Verify Charges & Confirm Payment Method (Credit Card)',
      contextGoal:
        'Confirm the £203 total is accurate and state you would like to pay by credit card and receive an email receipt.',
      targetVocabulary: ['charges are accurate', 'total of £203', 'pay by credit card', 'email receipt'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'Yes, everything is completely accurate! The total is £203. I will pay by contactless credit card, and could you please email me the receipt?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Payment & Receipt Confirmation',
          patterns: [
            'accurate',
            'total',
            '203',
            'pay by',
            'credit card',
            'card',
            'email',
            'receipt',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_79_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I would like to pay ___ credit card."',
        options: [
          { id: 'opt_1', text: 'by', isCorrect: true },
          { id: 'opt_2', text: 'for', isCorrect: false },
          { id: 'opt_3', text: 'on', isCorrect: false },
        ],
        correctAnswer: 'by',
        explanation: 'Collocation: "pay by card / pay by cash".',
      },
    },
    {
      id: 'turn_a1_79_4',
      turnIndex: 4,
      partnerPrompt:
        'Payment successful! I have emailed the full receipt to your account and notified housekeeping to hold your luggage after noon if you wish to explore the city. Thank you for choosing Grand Central!',
      partnerAudioText:
        'Payment successful! I have emailed the full receipt to your account and notified housekeeping to hold your luggage after noon if you wish to explore the city. Thank you for choosing Grand Central!',
      partnerQuestionHindi:
        'भुगतान सफल रहा! मैंने आपके खाते में पूरी रसीद ईमेल कर दी है और हाउसकीपिंग को सूचित कर दिया है कि यदि आप शहर का भ्रमण करना चाहते हैं तो दोपहर के बाद आपका सामान सुरक्षित रखें। ग्रैंड सेंट्रल चुनने के लिए धन्यवाद!',
      expectedFunction: 'Express Warm Appreciation & Conclude Stay',
      contextGoal:
        'Thank Liam for the outstanding hospitality, mention you will leave bags until 3:00 PM, and wish him a wonderful day.',
      targetVocabulary: ['thank you for outstanding hospitality', 'leave bags until 3:00 PM', 'explore Edinburgh', 'have a wonderful day'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'Thank you so much Liam for your outstanding hospitality! I will leave my bags with concierge until 3:00 PM to explore Edinburgh. Have a wonderful day!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Appreciation',
          patterns: [
            'thank you',
            'liam',
            'hospitality',
            'bags',
            'luggage',
            'edinburgh',
            'have a wonderful day',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_79_4',
        type: 'multiple_choice',
        prompt: 'Which parting phrase shows warm hospitality appreciation?',
        options: [
          { id: 'opt_1', text: 'Thank you for your exceptional hospitality, have a wonderful day!', isCorrect: true },
          { id: 'opt_2', text: 'I am gone bye room.', isCorrect: false },
          { id: 'opt_3', text: 'Pay done finished.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for your exceptional hospitality, have a wonderful day!',
        explanation: 'Warm and courteous farewell.',
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
