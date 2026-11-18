import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_64: ConversationDefinition = {
  id: 'conv_a1_64',
  title: 'Transportation Inquiries, Ticket Booking & Travel Delays',
  cefr: 'A1',
  unitId: 'unit_a1_5',
  lessonLinks: ['lesson_a1_5_64'],
  estimatedMinutes: 5,
  scenario:
    'You are at London King\'s Cross railway station ticket office. You need to buy a round-trip train ticket to York for tomorrow morning, inquire about departure times and platform numbers, ask about an announced delay, and find out if seat reservations are included.',
  communicativeGoals: [
    'Purchase one-way and round-trip (return) train tickets ("I would like a return ticket to York, please")',
    'Inquire about train schedules, departure platforms, and travel duration ("Which platform does the train leave from?", "How long is the journey?")',
    'Ask about travel delays and timetable changes ("Is the 9:15 train delayed?")',
    'Recycle A1 travel vocabulary, numbers, and polite financial transactions',
  ],
  canDoStatements: [
    'Can purchase train or bus tickets at a station counter (CEFR A1.2)',
    'Can ask for platform numbers, travel times, and ticket types',
    'Can understand and ask questions about transit delays',
  ],
  characters: [
    {
      id: 'char_oliver_ticket_agent',
      name: 'Oliver',
      role: 'Railway Station Ticket Agent',
      avatar: '🚆',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'round-trip',
        ipa: '/ˈraʊndˌtrɪp/',
        partOfSpeech: 'noun / adjective',
        meaning: 'A journey to a place and back again (also called a "return ticket" in British English)',
        exampleSentence: 'A round-trip ticket to York costs fifty-five pounds.',
        translations: { hi: 'आने-जाने का टिकट / राउंड ट्रिप' },
      },
      {
        word: 'platform',
        ipa: '/ˈplætfɔːrm/',
        partOfSpeech: 'noun',
        meaning: 'A raised level surface where passengers board or alight from a train',
        exampleSentence: 'Your train departs from platform four in twenty minutes.',
        translations: { hi: 'प्लेटफॉर्म' },
      },
      {
        word: 'delayed',
        ipa: '/dɪˈleɪd/',
        partOfSpeech: 'adjective',
        meaning: 'Late or postponed beyond the scheduled departure or arrival time',
        exampleSentence: 'The nine o\'clock express train is delayed by fifteen minutes.',
        translations: { hi: 'विलंबित / देरी से' },
      },
      {
        word: 'reservation',
        ipa: '/ˌrɛzərˈveɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'An arrangement by which a seat or room is held for someone in advance',
        exampleSentence: 'Does this ticket include an allocated seat reservation?',
        translations: { hi: 'आरक्षण / सीट रिजर्वेशन' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I’d like a round-trip ticket to..., please.',
        functionCategory: 'Buying Ticket',
        exampleSentence: 'I’d like a round-trip ticket to York for tomorrow morning, please.',
      },
      {
        phrase: 'Which platform does the train depart from?',
        functionCategory: 'Platform Inquiry',
        exampleSentence: 'Which platform does the 9:15 AM train depart from?',
      },
      {
        phrase: 'How long does the journey take?',
        functionCategory: 'Travel Duration',
        exampleSentence: 'How long does the journey to York take by express train?',
      },
      {
        phrase: 'How much is the fare?',
        functionCategory: 'Price Inquiry',
        exampleSentence: 'How much is the standard off-peak return fare?',
      },
    ],
    grammar: {
      title: 'Modal Requests & Transit Questions: Which platform / How long does it take?',
      conceptExplanation:
        'When purchasing transit tickets, use "I would like a [single/return] ticket to [Destination]". Ask platform questions with "Which platform does the train leave from?" and travel time with "How long does the trip take?".',
      patternFormula: 'I would like a [one-way / round-trip] ticket to [City] | Which platform does the [Time] train leave from?',
      contrastExamples: [
        {
          incorrect: 'Give me train to York.',
          correct: 'I would like a round-trip ticket to York, please.',
          explanation: 'Use polite modal request "I would like... please".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Oliver',
        text: 'Next customer, please! Good morning. Where are you traveling today?',
        translation: 'अगला ग्राहक, कृपया! शुभ प्रभात। आज आप कहाँ यात्रा कर रहे हैं?',
      },
      {
        speaker: 'You',
        text: 'Good morning! I would like a round-trip ticket to York for tomorrow morning around 9:00 AM, please.',
        translation: 'शुभ प्रभात! मैं कल सुबह लगभग 9:00 बजे के लिए यॉर्क का राउंड-ट्रिप टिकट लेना चाहता हूँ, कृपया।',
      },
      {
        speaker: 'Oliver',
        text: 'Certainly. The 9:15 AM express arrives in York at 11:15 AM. A standard return ticket is £52. Would you like a window or aisle seat?',
        translation: 'निश्चित रूप से। सुबह 9:15 बजे की एक्सप्रेस सुबह 11:15 बजे यॉर्क पहुंचती है। मानक रिटर्न टिकट £52 है। क्या आप खिड़की या गलियारे वाली सीट चाहेंगे?',
      },
      {
        speaker: 'You',
        text: 'A window seat, please. Which platform will it depart from, and is there any delay expected?',
        translation: 'खिड़की वाली सीट, कृपया। यह किस प्लेटफॉर्म से छूटेगी, और क्या कोई देरी होने की संभावना है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_64_1',
      type: 'fill_blank',
      prompt: 'Complete the ticket purchase: "I would like a round-trip ticket ___ York, please."',
      options: [
        { id: 'opt_1', text: 'to', isCorrect: true },
        { id: 'opt_2', text: 'at', isCorrect: false },
        { id: 'opt_3', text: 'for at', isCorrect: false },
      ],
      correctAnswer: 'to',
      explanation: 'Use preposition "to" for destination: "ticket to [City]".',
    },
    {
      id: 'cp_a1_64_2',
      type: 'multiple_choice',
      prompt: 'Which sentence asks for platform information correctly?',
      options: [
        { id: 'opt_1', text: 'Which platform does the train depart from?', isCorrect: true },
        { id: 'opt_2', text: 'Where platform train is going away?', isCorrect: false },
        { id: 'opt_3', text: 'Which is platform leaving train from?', isCorrect: false },
      ],
      correctAnswer: 'Which platform does the train depart from?',
      explanation: 'Standard question formula for platform information.',
    },
    {
      id: 'cp_a1_64_3',
      type: 'multiple_choice',
      prompt: 'How do you ask about travel duration simply?',
      options: [
        { id: 'opt_1', text: 'How long does the journey take?', isCorrect: true },
        { id: 'opt_2', text: 'How many hours journey is take?', isCorrect: false },
        { id: 'opt_3', text: 'What long is travel time take?', isCorrect: false },
      ],
      correctAnswer: 'How long does the journey take?',
      explanation: '"How long does the journey take?" is correct.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_64_1',
      scenarioContext: 'Ask for a round-trip train ticket to York.',
      prompt: 'Build: "I would like a return ticket to York please."',
      targetStructure: 'I would like a return ticket to [City] please',
      wordBank: ['I', 'would', 'like', 'a', 'return', 'ticket', 'to', 'York', 'please', 'for', 'am'],
      acceptableSolutions: [
        'I would like a return ticket to York please',
        'I would like a return ticket to York please.',
        'I would like a return ticket to York, please.',
      ],
      explanation: 'Standard ticket booking request.',
    },
    {
      id: 'sc_a1_64_2',
      scenarioContext: 'Inquire which platform your train leaves from.',
      prompt: 'Build: "Which platform does the train leave from?"',
      targetStructure: 'Which platform does the train leave from?',
      wordBank: ['Which', 'platform', 'does', 'the', 'train', 'leave', 'from', 'leaving', 'is', 'at'],
      acceptableSolutions: [
        'Which platform does the train leave from',
        'Which platform does the train leave from?',
      ],
      explanation: 'Platform inquiry structure.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_64_1',
      turnIndex: 1,
      partnerPrompt:
        'Next customer at counter four, please! Good morning. Where would you like to travel today, and what time are you planning to go?',
      partnerAudioText:
        'Next customer at counter four, please! Good morning. Where would you like to travel today, and what time are you planning to go?',
      partnerQuestionHindi:
        'काउंटर चार पर अगला ग्राहक, कृपया! शुभ प्रभात। आज आप कहाँ यात्रा करना चाहते हैं, और आप किस समय जाने की योजना बना रहे हैं?',
      expectedFunction: 'Request Round-Trip Ticket to York (I would like a return ticket to York...)',
      contextGoal:
        'State you want a round-trip (return) ticket to York for tomorrow morning around 9:00 AM.',
      targetVocabulary: ['good morning', 'round-trip ticket', 'return ticket to York', 'tomorrow morning', 'around 9:00 AM'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'Good morning! I would like a round-trip ticket to York for tomorrow morning around 9:00 AM, please.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Response',
          text: 'Hello! I need a return ticket to York for tomorrow morning at 9:00 AM, please.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Ticket Request Details',
          patterns: [
            'ticket to york',
            'return ticket',
            'round-trip',
            'tomorrow morning',
            '9:00',
            'nine',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'give_me_ticket_error',
          pattern: /\bgive me ticket\b/i,
          errorType: 'grammar',
          message: 'Say "I would like a ticket to...", to be polite.',
          correctionPattern: 'I would like a ticket to York, please.',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_64_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I would like a ticket ___ York."',
        options: [
          { id: 'opt_1', text: 'to', isCorrect: true },
          { id: 'opt_2', text: 'in', isCorrect: false },
          { id: 'opt_3', text: 'at', isCorrect: false },
        ],
        correctAnswer: 'to',
        explanation: 'Destination preposition "to".',
      },
    },
    {
      id: 'turn_a1_64_2',
      turnIndex: 2,
      partnerPrompt:
        'The 9:15 AM express is our fastest service. It takes exactly two hours and arrives at 11:15 AM. A standard off-peak return ticket is £52. Would you like a window seat or an aisle seat?',
      partnerAudioText:
        'The 9:15 AM express is our fastest service. It takes exactly two hours and arrives at 11:15 AM. A standard off-peak return ticket is £52. Would you like a window seat or an aisle seat?',
      partnerQuestionHindi:
        'सुबह 9:15 बजे की एक्सप्रेस हमारी सबसे तेज़ सेवा है। इसमें ठीक दो घंटे लगते हैं और सुबह 11:15 बजे पहुँचती है। एक मानक ऑफ-पीक रिटर्न टिकट £52 है। क्या आप खिड़की वाली सीट या गलियारे वाली सीट चाहेंगे?',
      expectedFunction: 'Choose Window Seat & Inquire Departure Platform',
      contextGoal:
        'Request a window seat and ask which platform the 9:15 AM train departs from.',
      targetVocabulary: ['window seat please', 'which platform', 'departs from', '9:15 train', 'seat reservation'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'A window seat, please. Which platform does the 9:15 AM train depart from?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Response',
          text: 'I’d prefer a window seat, please. What platform does it leave from?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Seat & Platform Inquiry',
          patterns: [
            'window seat',
            'which platform',
            'what platform',
            'depart from',
            'leave from',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_64_2',
        type: 'multiple_choice',
        prompt: 'Which sentence asks for a window seat politely?',
        options: [
          { id: 'opt_1', text: 'A window seat, please.', isCorrect: true },
          { id: 'opt_2', text: 'I am must sit by glass window.', isCorrect: false },
          { id: 'opt_3', text: 'Seat of window give me.', isCorrect: false },
        ],
        correctAnswer: 'A window seat, please.',
        explanation: 'Clear and natural.',
      },
    },
    {
      id: 'turn_a1_64_3',
      turnIndex: 3,
      partnerPrompt:
        'It usually departs from Platform 4. However, due to track maintenance near Peterborough, there is a possible 10-minute delay announced on the board. Do you want me to print your seat reservation card now?',
      partnerAudioText:
        'It usually departs from Platform 4. However, due to track maintenance near Peterborough, there is a possible 10-minute delay announced on the board. Do you want me to print your seat reservation card now?',
      partnerQuestionHindi:
        'यह आमतौर पर प्लेटफॉर्म 4 से रवाना होती है। हालांकि, पीटरबरो के पास ट्रैक रखरखाव के कारण, बोर्ड पर 10 मिनट की संभावित देरी की घोषणा की गई है। क्या आप चाहते हैं कि मैं अब आपका सीट आरक्षण कार्ड प्रिंट करूँ?',
      expectedFunction: 'Acknowledge Delay & Request Printed Tickets and Contactless Payment',
      contextGoal:
        'Acknowledge the 10-minute delay, ask to print the reservation, and ask to pay by contactless card.',
      targetVocabulary: ['ten minute delay is fine', 'please print the reservation', 'can I pay by card', 'contactless', 'fifty-two pounds'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'A ten-minute delay is totally fine. Yes, please print the seat reservation. Can I pay the £52 by contactless card?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Response',
          text: 'A short delay is no problem! Please print the ticket and reservation. I will pay by card.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Delay Acknowledgment & Payment',
          patterns: [
            'delay',
            'print',
            'reservation',
            'card',
            'contactless',
            'pay',
            '52',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_64_3',
        type: 'fill_blank',
        prompt: 'Complete the payment question: "Can I pay ___ contactless card?"',
        options: [
          { id: 'opt_1', text: 'by', isCorrect: true },
          { id: 'opt_2', text: 'for', isCorrect: false },
          { id: 'opt_3', text: 'at', isCorrect: false },
        ],
        correctAnswer: 'by',
        explanation: 'Method of payment uses "by card / by contactless".',
      },
    },
    {
      id: 'turn_a1_64_4',
      turnIndex: 4,
      partnerPrompt:
        'Payment accepted! Here is your round-trip ticket, your seat reservation in Coach B Seat 24A, and your receipt. Listen to station announcements for any platform updates. Have a pleasant journey to York!',
      partnerAudioText:
        'Payment accepted! Here is your round-trip ticket, your seat reservation in Coach B Seat 24A, and your receipt. Listen to station announcements for any platform updates. Have a pleasant journey to York!',
      partnerQuestionHindi:
        'भुगतान स्वीकार कर लिया गया है! यहाँ आपका राउंड-ट्रिप टिकट, कोच बी सीट 24ए में आपका सीट आरक्षण और आपकी रसीद है। किसी भी प्लेटफॉर्म अपडेट के लिए स्टेशन की घोषणाएं सुनें। आपकी यॉर्क यात्रा सुखद हो!',
      expectedFunction: 'Take Tickets, Thank Agent & Conclude Transaction',
      contextGoal:
        'Thank Oliver for his clear assistance, confirm Coach B Seat 24A, and say goodbye.',
      targetVocabulary: ['thank you very much Oliver', 'Coach B Seat 24A', 'have a great day', 'pleasant journey', 'goodbye'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'Thank you very much Oliver for your help! I have Coach B Seat 24A. Have a wonderful day, goodbye!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Response',
          text: 'Thank you for your help! Have a great day, goodbye!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Transaction Closing',
          patterns: [
            'thank you',
            'thanks',
            'coach b',
            'seat 24a',
            'have a great day',
            'goodbye',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_64_4',
        type: 'multiple_choice',
        prompt: 'Which sentence concludes a ticket purchase courteously?',
        options: [
          { id: 'opt_1', text: 'Thank you very much for your help! Have a great day.', isCorrect: true },
          { id: 'opt_2', text: 'I am taking paper now bye.', isCorrect: false },
          { id: 'opt_3', text: 'Ticket is mine go.', isCorrect: false },
        ],
        correctAnswer: 'Thank you very much for your help! Have a great day.',
        explanation: 'Polite and natural.',
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
