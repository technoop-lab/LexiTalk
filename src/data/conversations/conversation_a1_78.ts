import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_78: ConversationDefinition = {
  id: 'conv_a1_78',
  title: 'Travel Disruptions, Missed Connections & Luggage Inquiries',
  cefr: 'A1',
  unitId: 'unit_a1_6',
  lessonLinks: ['lesson_a1_6_78'],
  estimatedMinutes: 5,
  scenario:
    'You arrive at London Heathrow Airport after a delayed incoming flight and realize your connection to Edinburgh has departed. You speak with Airline Transfer Desk Agent Fiona Stewart to report the missed connection, inquire about your checked luggage, and secure a boarding pass for the next available flight.',
  communicativeGoals: [
    'Explain a travel disruption and missed connection using sequential connectors ("First...", "Then...", "After that...")',
    'Describe lost or delayed luggage with precise color, size, and brand details',
    'Request rebooking, a meal voucher, and boarding pass for the next connection',
    'Retrieve earlier airport, travel, and physical description vocabulary in a high-stakes setting',
  ],
  canDoStatements: [
    'Can report a missed transit connection at an airport help desk',
    'Can provide a physical description of luggage and checked items',
    'Can ask for rebooking and transit vouchers using polite request patterns',
  ],
  characters: [
    {
      id: 'char_fiona_stewart',
      name: 'Fiona Stewart',
      role: 'Airline Transfer Desk Agent',
      avatar: '✈️',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'connection',
        ipa: '/kəˈnɛkʃən/',
        partOfSpeech: 'noun',
        meaning: 'A linking of two or more transit routes (e.g., catching a second flight)',
        exampleSentence: 'I missed my connecting flight because of the forty-minute delay.',
        translations: { hi: 'कनेक्टिंग उड़ान / संयोजन' },
      },
      {
        word: 'disruption',
        ipa: '/dɪsˈrʌpʃən/',
        partOfSpeech: 'noun',
        meaning: 'Disturbance or problems that interrupt an event, activity, or process',
        exampleSentence: 'We apologize for the severe weather disruption today.',
        translations: { hi: 'बाधा / व्यवधान' },
      },
      {
        word: 'luggage',
        ipa: '/ˈlʌɡɪdʒ/',
        partOfSpeech: 'noun',
        meaning: 'Suitcases or other bags in which to pack personal belongings for traveling',
        exampleSentence: 'My checked luggage did not arrive on the baggage carousel.',
        translations: { hi: 'सामान / बैग' },
      },
      {
        word: 'voucher',
        ipa: '/ˈvaʊtʃər/',
        partOfSpeech: 'noun',
        meaning: 'A document that can be exchanged for goods or services, such as meals or accommodation',
        exampleSentence: 'The airline provided a food voucher for the airport restaurant.',
        translations: { hi: 'वाउचर / भोजन कूपन' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I missed my connecting flight to...',
        functionCategory: 'Reporting Problem',
        exampleSentence: 'I missed my connecting flight to Edinburgh due to the inbound delay.',
      },
      {
        phrase: 'First our flight was delayed, then...',
        functionCategory: 'Sequential Narrative',
        exampleSentence: 'First our flight was delayed, then we arrived after the gate closed.',
      },
      {
        phrase: 'It is a medium dark blue suitcase with...',
        functionCategory: 'Describing Items',
        exampleSentence: 'It is a medium dark blue suitcase with four wheels and a red tag.',
      },
      {
        phrase: 'Could you rebook me on the next flight?',
        functionCategory: 'Requesting Service',
        exampleSentence: 'Could you please rebook me on the next flight to Edinburgh?',
      },
    ],
    grammar: {
      title: 'Sequential Connectors for Narrating Events: "First", "Then", "After that", "Finally"',
      conceptExplanation:
        'Use sequence words to clearly order events chronologically: "First, our plane landed late. Then, we ran to Terminal 2. After that, the gate was locked. Finally, we came to this desk."',
      patternFormula: 'First + [Event 1], then + [Event 2], after that + [Event 3], finally + [Event 4]',
      contrastExamples: [
        {
          incorrect: 'After then first we miss plane because late.',
          correct: 'First our flight was delayed, and then we missed our connection.',
          explanation: 'Use clear sequential order.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Fiona Stewart',
        text: 'Good afternoon. How can I assist you at the transfer desk today?',
        translation: 'शुभ दोपहर। आज मैं ट्रांसफर डेस्क पर आपकी क्या मदद कर सकती हूँ?',
      },
      {
        speaker: 'You',
        text: 'Good afternoon. First, my incoming flight from Madrid was delayed by one hour, and then I missed my connecting flight to Edinburgh. Could you please check the next departure?',
        translation: 'शुभ दोपहर। पहले, मैड्रिड से मेरी आने वाली उड़ान में एक घंटे की देरी हुई, और फिर मैं एडिनबर्ग के लिए अपनी कनेक्टिंग फ्लाइट से चूक गया। क्या आप कृपया अगले प्रस्थान की जांच कर सकते हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_78_1',
      type: 'fill_blank',
      prompt: 'Complete the sequence: "First the plane was delayed, ___ we missed our connection."',
      options: [
        { id: 'opt_1', text: 'then', isCorrect: true },
        { id: 'opt_2', text: 'never', isCorrect: false },
        { id: 'opt_3', text: 'before', isCorrect: false },
      ],
      correctAnswer: 'then',
      explanation: '"then" follows "First".',
    },
    {
      id: 'cp_a1_78_2',
      type: 'multiple_choice',
      prompt: 'How do you accurately describe a piece of luggage?',
      options: [
        { id: 'opt_1', text: 'It is a large black hard-shell suitcase with four wheels and a yellow ribbon.', isCorrect: true },
        { id: 'opt_2', text: 'Bag is bag on plane.', isCorrect: false },
        { id: 'opt_3', text: 'I have some box somewhere.', isCorrect: false },
      ],
      correctAnswer: 'It is a large black hard-shell suitcase with four wheels and a yellow ribbon.',
      explanation: 'Clear details with size, color, material, and distinguishing marks.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_78_1',
      scenarioContext: 'Explain a flight disruption.',
      prompt: 'Build: "First our flight was delayed by one hour."',
      targetStructure: 'First our flight was delayed by one hour',
      wordBank: ['First', 'our', 'flight', 'was', 'delayed', 'by', 'one', 'hour', 'delaying', 'is'],
      acceptableSolutions: [
        'First our flight was delayed by one hour',
        'First our flight was delayed by one hour.',
      ],
      explanation: 'Sequential opening with time duration.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_78_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello there! Welcome to the British Airways Transfer Desk. How can I help you today?',
      partnerAudioText:
        'Hello there! Welcome to the British Airways Transfer Desk. How can I help you today?',
      partnerQuestionHindi:
        'नमस्ते! ब्रिटिश एयरवेज ट्रांसफर डेस्क में आपका स्वागत है। आज मैं आपकी क्या मदद कर सकती हूँ?',
      expectedFunction: 'Explain Flight Disruption & Missed Connection using Sequence Connectors',
      contextGoal:
        'Explain that your flight from Madrid was delayed by one hour, and as a result, you missed your connecting flight BA1442 to Edinburgh.',
      targetVocabulary: ['flight was delayed by one hour', 'missed connecting flight', 'flight BA1442 to Edinburgh', 'transfer desk'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffolding',
          text: 'Hello Fiona! First, our flight from Madrid was delayed by an hour, and then we arrived after the gate closed, so I missed my connecting flight to Edinburgh.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Disruption & Flight Details',
          patterns: [
            'delayed',
            'missed',
            'connecting',
            'flight',
            'edinburgh',
            'first',
            'then',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_78_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I missed my ___ flight to Scotland."',
        options: [
          { id: 'opt_1', text: 'connecting', isCorrect: true },
          { id: 'opt_2', text: 'connecting of', isCorrect: false },
          { id: 'opt_3', text: 'connectedly', isCorrect: false },
        ],
        correctAnswer: 'connecting',
        explanation: 'Compound noun: "connecting flight".',
      },
    },
    {
      id: 'turn_a1_78_2',
      turnIndex: 2,
      partnerPrompt:
        'I am very sorry about that delay. I can rebook you onto the 4:45 PM flight to Edinburgh at Gate 18. What about your checked baggage?',
      partnerAudioText:
        'I am very sorry about that delay. I can rebook you onto the 4:45 PM flight to Edinburgh at Gate 18. What about your checked baggage?',
      partnerQuestionHindi:
        'उस देरी के लिए मुझे बहुत खेद है। मैं आपको गेट 18 पर एडिनबर्ग के लिए 4:45 बजे की उड़ान में फिर से बुक कर सकती हूँ। आपके चेक किए गए सामान के बारे में क्या?',
      expectedFunction: 'Describe Luggage & Inquire about Baggage Transfer',
      contextGoal:
        'Describe your luggage (medium navy blue suitcase with four wheels and a red luggage tag) and ask if it will be automatically transferred.',
      targetVocabulary: ['navy blue suitcase', 'four wheels and red tag', 'baggage claim tag number', 'automatically transferred'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffolding',
          text: 'Thank you! It is a medium navy blue suitcase with four wheels and a bright red tag. Will my bag be automatically transferred to the 4:45 PM flight?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Luggage Description & Transfer Inquiry',
          patterns: [
            'blue',
            'suitcase',
            'wheels',
            'tag',
            'transferred',
            'bag',
            'luggage',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_78_2',
        type: 'multiple_choice',
        prompt: 'Which sentence describes luggage features clearly?',
        options: [
          { id: 'opt_1', text: 'It is a medium navy blue suitcase with four spinner wheels and a red tag.', isCorrect: true },
          { id: 'opt_2', text: 'It is bag containing my pants and things.', isCorrect: false },
          { id: 'opt_3', text: 'Blue square with handles.', isCorrect: false },
        ],
        correctAnswer: 'It is a medium navy blue suitcase with four spinner wheels and a red tag.',
        explanation: 'Accurate and descriptive identification.',
      },
    },
    {
      id: 'turn_a1_78_3',
      turnIndex: 3,
      partnerPrompt:
        'Yes, our baggage team has scanned your tag and redirected it to the 4:45 PM aircraft. Since you have a three-hour wait, would you like a meal voucher for the terminal restaurants?',
      partnerAudioText:
        'Yes, our baggage team has scanned your tag and redirected it to the 4:45 PM aircraft. Since you have a three-hour wait, would you like a meal voucher for the terminal restaurants?',
      partnerQuestionHindi:
        'हाँ, हमारी बैगेज टीम ने आपके टैग को स्कैन कर लिया है और इसे 4:45 बजे के विमान में पुनर्निर्देशित कर दिया है। चूंकि आपके पास तीन घंटे का इंतजार है, क्या आप टर्मिनल रेस्तरां के लिए भोजन वाउचर चाहेंगे?',
      expectedFunction: 'Accept Meal Voucher & Request Gate Directions',
      contextGoal:
        'Accept the meal voucher gratefully and ask for directions to Gate 18 and the dining area in Terminal 5.',
      targetVocabulary: ['appreciate the meal voucher', 'directions to Gate 18', 'terminal restaurants', 'where is the departures area'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffolding',
          text: 'I would really appreciate the meal voucher, thank you! Could you also please tell me how to get to Gate 18 and where the nearest cafes are?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Voucher Acceptance & Gate Directions',
          patterns: [
            'voucher',
            'thank you',
            'gate 18',
            'how to get',
            'cafes',
            'restaurants',
            'directions',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_78_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Could you tell me how to ___ to Gate 18?"',
        options: [
          { id: 'opt_1', text: 'get', isCorrect: true },
          { id: 'opt_2', text: 'flight', isCorrect: false },
          { id: 'opt_3', text: 'eating', isCorrect: false },
        ],
        correctAnswer: 'get',
        explanation: 'Idiomatic: "how to get to [location]".',
      },
    },
    {
      id: 'turn_a1_78_4',
      turnIndex: 4,
      partnerPrompt:
        'Here is your new boarding pass for Seat 14C and a £15 food voucher. Take the escalator upstairs to Level 3 for restaurants, and Gate 18 begins boarding at 4:10 PM. Have a safe onward flight!',
      partnerAudioText:
        'Here is your new boarding pass for Seat 14C and a £15 food voucher. Take the escalator upstairs to Level 3 for restaurants, and Gate 18 begins boarding at 4:10 PM. Have a safe onward flight!',
      partnerQuestionHindi:
        'यह सीट 14C के लिए आपका नया बोर्डिंग पास और £15 का फूड वाउचर है। रेस्तरां के लिए एस्केलेटर से ऊपर लेवल 3 पर जाएं, और गेट 18 पर बोर्डिंग 4:10 बजे शुरू होगी। आपकी आगे की यात्रा सुरक्षित रहे!',
      expectedFunction: 'Thank Agent, Confirm Departure Details & Conclude',
      contextGoal:
        'Thank Fiona for rebooking the flight and providing the voucher, confirm boarding starts at 4:10 PM, and wish her a great day.',
      targetVocabulary: ['thank you so much Fiona', 'boarding pass Seat 14C', 'boarding at 4:10 PM', 'have a great day'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffolding',
          text: 'Thank you so much for all your help, Fiona! I have my boarding pass for Seat 14C and voucher. I will head to Gate 18 by 4:10 PM. Have a wonderful day!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Gratitude',
          patterns: [
            'thank you',
            'fiona',
            'boarding pass',
            '14c',
            '4:10',
            'gate 18',
            'have a wonderful day',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_78_4',
        type: 'multiple_choice',
        prompt: 'Which closing remark is warm and polite?',
        options: [
          { id: 'opt_1', text: 'Thank you for your fantastic help Fiona, have a great day!', isCorrect: true },
          { id: 'opt_2', text: 'Give paper bye.', isCorrect: false },
          { id: 'opt_3', text: 'Airplane time run now.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for your fantastic help Fiona, have a great day!',
        explanation: 'Polite and professional interaction closure.',
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
