import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_263: ConversationDefinition = {
  id: 'conv_a2_263',
  title: 'Handling Mixed Everyday Problems and Services',
  cefr: 'A2',
  unitId: 'unit_a2_18',
  lessonLinks: ['lesson_a2_18_263'],
  estimatedMinutes: 5,
  scenario:
    'You arrive at the Grand Plaza Hotel after a long international flight. You speak with guest services manager Carlos to solve two simultaneous issues: your online booking dates are mistakenly listed for next week instead of tonight, and you also need to store your luggage safely and book an early morning airport express shuttle for tomorrow at 6:00 AM.',
  communicativeGoals: [
    'Navigate multi-step customer service dilemmas smoothly in A2 English',
    'Explain booking discrepancies clearly: "My confirmation number shows...", "There appears to be a mix-up with the dates..."',
    'Request secondary service amenities: luggage storage, room change, and shuttle bus ticket',
    'Confirm prices, payment receipts, and schedule times accurately',
  ],
  canDoStatements: [
    'Can explain a booking date error at a hotel or service counter',
    'Can request multiple related services (room modification, luggage storage, airport transit)',
    'Can verify prices, departure times, and obtain receipts or booking vouchers',
  ],
  characters: [
    {
      id: 'char_carlos_manager',
      name: 'Carlos',
      role: 'Hotel Guest Services Manager',
      avatar: '🏨',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'discrepancy',
        ipa: '/dɪˈskrepənsi/',
        partOfSpeech: 'noun',
        meaning: 'A lack of compatibility or similarity between two or more facts; an error or mix-up',
        exampleSentence: 'There is a slight date discrepancy on my confirmation email.',
        translations: { hi: 'विसंगति / गड़बड़ी या अंतर (डिस्क्रेपंसी)' },
      },
      {
        word: 'shuttle',
        ipa: '/ˈʃʌtl/',
        partOfSpeech: 'noun',
        meaning: 'A bus or train traveling regularly between two places, such as an airport and a hotel',
        exampleSentence: 'Does the airport express shuttle depart every thirty minutes?',
        translations: { hi: 'शटल बस / आवागमन वाहन (शटल)' },
      },
      {
        word: 'luggage storage',
        ipa: '/ˈlʌɡɪdʒ ˈstɔːrɪdʒ/',
        partOfSpeech: 'noun phrase',
        meaning: 'A secure area in a hotel or station where bags can be left temporarily',
        exampleSentence: 'Could we leave our bags in the luggage storage room until check-in?',
        translations: { hi: 'सामान रखने का सुरक्षित कमरा (लगेज स्टोरेज)' },
      },
      {
        word: 'receipt',
        ipa: '/rɪˈsiːt/',
        partOfSpeech: 'noun',
        meaning: 'A written or digital acknowledgment that specified money or goods have been received',
        exampleSentence: 'Could I please have a printed receipt for the shuttle ticket?',
        translations: { hi: 'रसीद (रिसीट)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'There seems to be a mix-up with my booking dates.',
        functionCategory: 'Reporting a reservation discrepancy politely',
        exampleSentence: 'There seems to be a mix-up with my booking dates on your system.',
      },
      {
        phrase: 'Is it possible to check in tonight instead?',
        functionCategory: 'Requesting immediate date correction',
        exampleSentence: 'Is it possible to check in tonight instead of next week?',
      },
      {
        phrase: 'In addition to that, could we store our luggage...?',
        functionCategory: 'Adding a secondary service request',
        exampleSentence: 'In addition to that, could we store our luggage until the room is ready?',
      },
      {
        phrase: 'Could you please book a seat on the 6:00 AM shuttle?',
        functionCategory: 'Booking scheduled airport transit',
        exampleSentence: 'Could you please book a seat on the 6:00 AM airport shuttle for tomorrow?',
      },
    ],
    grammar: {
      title: 'Polite Service Transactions: "There seems to be..." & Multi-Request Linking',
      conceptExplanation:
        '1. Softening error reports: "There seems to be a mistake / a mix-up with..."\n2. Primary request: "Could you check if a room is available tonight?"\n3. Connecting multiple service requests: "Also...", "In addition to that...", "On top of that..."\n4. Confirming details: "How much does the shuttle cost, and where is the pickup point?"',
      patternFormula: 'Excuse me, there seems to be an issue with [Booking]. Could you [Primary Request]? In addition, could I [Secondary Request] and book [Transit Request]?',
      contrastExamples: [
        {
          incorrect: 'Your computer is wrong. Give me room now.',
          correct: 'Excuse me, there seems to be a mix-up with my arrival date. Could you please check tonight’s availability?',
          explanation: 'Use polite, objective customer service phrasing.',
        },
        {
          incorrect: 'I want luggage store and bus ticket also.',
          correct: 'Could I also store my luggage and reserve a seat on the morning shuttle?',
          explanation: 'Use polite modal inquiry structures with clear verb phrases.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Carlos',
        text: 'Good evening and welcome to Grand Plaza Hotel! How may I assist you with your check-in?',
        translation: 'शुभ संध्या और ग्रैंड प्लाजा होटल में आपका स्वागत है! मैं आपके चेक-इन में आपकी क्या मदद कर सकता हूँ?',
      },
      {
        speaker: 'Learner',
        text: 'Good evening Carlos. I have confirmation code GP-402, but there seems to be a mix-up with the dates. It shows next week, but my stay is for tonight.',
        translation: 'शुभ संध्या कार्लोस। मेरे पास पुष्टिकरण कोड GP-402 है, लेकिन तिथियों में कुछ गड़बड़ी प्रतीत होती है। यह अगले सप्ताह को दिखाता है, लेकिन मेरा प्रवास आज रात के लिए है।',
      },
      {
        speaker: 'Carlos',
        text: 'Let me look that up immediately. Yes, we have a deluxe room available tonight for the same rate.',
        translation: 'मैं इसे तुरंत देखता हूँ। हाँ, हमारे पास उसी दर पर आज रात के लिए एक डीलक्स कमरा उपलब्ध है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_263_1',
      type: 'fill_blank',
      prompt: 'Complete: "There ______ (seems / seem / seeming) to be a mix-up with my reservation dates."',
      options: [
        { id: 'opt_1', text: 'seems', isCorrect: true },
        { id: 'opt_2', text: 'seem', isCorrect: false },
        { id: 'opt_3', text: 'seeming', isCorrect: false },
      ],
      correctAnswer: 'seems',
      explanation: '"There seems to be" is the standard idiomatic expression for polite problem reporting.',
    },
    {
      id: 'cp_263_2',
      type: 'multiple_choice',
      prompt: 'Which sentence connects a room date correction with a luggage storage request most effectively?',
      options: [
        { id: 'opt_1', text: 'Could we change the booking to tonight, and in addition, store our bags until check-in?', isCorrect: true },
        { id: 'opt_2', text: 'Change date today and bags keep now.', isCorrect: false },
        { id: 'opt_3', text: 'I am want date change and luggage store fast.', isCorrect: false },
      ],
      correctAnswer: 'Could we change the booking to tonight, and in addition, store our bags until check-in?',
      explanation: 'Polite modal request + additive linker "in addition".',
    },
    {
      id: 'cp_263_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [Could you please reserve / a seat on the 6:00 AM / airport express shuttle?]',
      correctAnswer: 'Could you please reserve a seat on the 6:00 AM airport express shuttle?',
      explanation: 'Polite modal request + object + time and transit phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_263_1',
      prompt: 'Construct a sentence explaining that there is a date mix-up with my booking and asking if a room is available tonight.',
      scenarioContext: 'Addressing the front desk manager.',
      targetStructure: 'There is a date mix-up with my reservation; is a room available tonight?',
      wordBank: ['There is a date', 'mix-up with my reservation;', 'is a room', 'available tonight?', 'mix-up of date', 'room available today night'],
      acceptableSolutions: [
        'There is a date mix-up with my reservation; is a room available tonight?',
        'There is a date mix-up with my booking; is a room available tonight?',
      ],
      explanation: 'Compound sentence with problem statement and availability inquiry.',
    },
    {
      id: 'sc_263_2',
      prompt: 'Construct a sentence requesting luggage storage and a ticket for the 6:00 AM shuttle bus.',
      scenarioContext: 'Arranging secondary amenities.',
      targetStructure: 'Could we leave our luggage in storage and book the 6:00 AM shuttle?',
      wordBank: ['Could we leave our', 'luggage in storage', 'and book the', '6:00 AM shuttle?', 'luggage store', 'booking to 6 AM shuttle'],
      acceptableSolutions: [
        'Could we leave our luggage in storage and book the 6:00 AM shuttle?',
        'Could we store our luggage and book the 6:00 AM shuttle?',
      ],
      explanation: 'Modal request with compound infinitive verbs "leave... and book...".',
    },
  ],
  turns: [
    {
      id: 'turn_263_1',
      turnIndex: 1,
      partnerPrompt:
        'Good evening and welcome to Grand Plaza Hotel! My name is Carlos. How can I assist you with your arrival today?',
      partnerAudioText:
        'Good evening and welcome to Grand Plaza Hotel! My name is Carlos. How can I assist you with your arrival today?',
      partnerQuestionHindi:
        'शुभ संध्या और ग्रैंड प्लाजा होटल में आपका स्वागत है! मेरा नाम कार्लोस है। आज आपके आगमन पर मैं आपकी क्या सहायता कर सकता हूँ?',
      expectedFunction: 'Explaining the booking date discrepancy politely with booking reference and requesting a room for tonight',
      contextGoal: 'Greet Carlos, provide your booking reference (e.g. GP-550), explain that the system shows next month by mistake, and ask if you can check in tonight',
      targetVocabulary: ['Good evening Carlos', 'confirmation number GP-550', 'there seems to be a mix-up with the dates', 'booked for tonight', 'is a room available for tonight'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Prompt',
          text: 'Good evening Carlos! I have a reservation under confirmation number GP-550. However, there seems to be a mix-up with the dates: the confirmation email shows next month, but I need the room starting tonight. Is a room available for check-in tonight?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Spontaneous Response',
          text: 'Hello Carlos. There is an error on my booking details. It mistakenly lists arrival for next week instead of today. Could you please adjust the reservation so I can check in tonight?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_reference',
          patterns: ['good evening', 'hello', 'carlos', 'gp-550', 'reservation', 'booking', 'confirmation'],
          required: true,
        },
        {
          name: 'date_mixup_and_request',
          patterns: ['mix-up', 'error', 'mistake', 'dates', 'tonight', 'today', 'available', 'check in', 'adjust', 'room'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_263_1_today_night',
          pattern: /today night\b/i,
          errorType: 'vocabulary',
          message: 'Say "tonight" instead of "today night".',
          correctionPattern: 'Is a room available for check-in tonight?',
        },
      ],
      remediationPractice: {
        id: 'rem_263_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I need a room for ______ (tonight / today night)."',
        options: [
          { id: 'r1', text: 'tonight', isCorrect: true },
          { id: 'r2', text: 'today night', isCorrect: false },
        ],
        correctAnswer: 'tonight',
        explanation: 'Use "tonight" for the evening of today.',
      },
    },
    {
      id: 'turn_263_2',
      turnIndex: 2,
      partnerPrompt:
        'No problem at all! I have modified your reservation for tonight in a standard double room on the fourth floor. Check-in is at 3:00 PM. Is there anything else you need while your room is being prepared?',
      partnerAudioText:
        'No problem at all! I have modified your reservation for tonight in a standard double room on the fourth floor. Check-in is at 3:00 PM. Is there anything else you need while your room is being prepared?',
      partnerQuestionHindi:
        'बिल्कुल कोई समस्या नहीं है! मैंने चौथी मंजिल पर एक मानक डबल कमरे में आज रात के लिए आपका आरक्षण संशोधित कर दिया है। चेक-इन दोपहर 3:00 बजे है। जब तक आपका कमरा तैयार हो रहा है, क्या आपको किसी और चीज़ की आवश्यकता है?',
      expectedFunction: 'Requesting luggage storage and reserving a seat on tomorrow morning’s 6:00 AM airport shuttle',
      contextGoal: 'Thank Carlos, ask to leave suitcases in luggage storage, and book one seat on the 6:00 AM airport shuttle for tomorrow',
      targetVocabulary: ['Thank you Carlos', 'Could we store our luggage', 'luggage storage room', 'book a seat', '6:00 AM airport express shuttle', 'tomorrow morning'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Prompt',
          text: 'Thank you so much, Carlos! In the meantime, could we leave our suitcases in the luggage storage room? Also, I need to catch an early flight tomorrow, so could you please book one ticket for the 6:00 AM airport shuttle?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Spontaneous Response',
          text: 'That is great news, thanks! Could you hold our bags in storage for a few hours? In addition, I would like to reserve a seat on the 6:00 AM airport shuttle for tomorrow.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'luggage_storage_request',
          patterns: ['luggage', 'bags', 'suitcases', 'storage', 'hold', 'leave', 'store'],
          required: true,
        },
        {
          name: 'shuttle_request',
          patterns: ['shuttle', 'bus', '6:00', '6 am', 'airport', 'ticket', 'seat', 'reserve', 'book'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_263_2_luggages_plural',
          pattern: /our luggages\b/i,
          errorType: 'grammar',
          message: '"Luggage" is uncountable in English; say "our luggage" or "our bags/suitcases".',
          correctionPattern: 'Could we leave our luggage in storage?',
        },
      ],
      remediationPractice: {
        id: 'rem_263_2',
        type: 'multiple_choice',
        prompt: 'Which sentence is grammatically correct?',
        options: [
          { id: 'r1', text: 'Could we leave our luggage in storage and book the shuttle?', isCorrect: true },
          { id: 'r2', text: 'Could we leave our luggages in storage and book the shuttle?', isCorrect: false },
        ],
        correctAnswer: 'Could we leave our luggage in storage and book the shuttle?',
        explanation: '"Luggage" is an uncountable noun.',
      },
    },
    {
      id: 'turn_263_3',
      turnIndex: 3,
      partnerPrompt:
        'Certainly! Here are your luggage claim tags, and I have reserved one seat on the 6:00 AM airport shuttle. The shuttle ticket is $15. Would you like to charge that to your room, and do you need a printed receipt and wakeup call?',
      partnerAudioText:
        'Certainly! Here are your luggage claim tags, and I have reserved one seat on the 6:00 AM airport shuttle. The shuttle ticket is $15. Would you like to charge that to your room, and do you need a printed receipt and wakeup call?',
      partnerQuestionHindi:
        'निश्चित रूप से! ये रहे आपके लगेज क्लेम टैग, और मैंने सुबह 6:00 बजे के एयरपोर्ट शटल में एक सीट आरक्षित कर दी है। शटल का टिकट $15 है। क्या आप इसे अपने कमरे के बिल में जोड़ना चाहेंगे, और क्या आपको प्रिंटेड रसीद और वेक-अप कॉल की आवश्यकता है?',
      expectedFunction: 'Confirming payment method (charge to room), requesting a receipt and 5:15 AM wakeup call, and closing politely',
      contextGoal: 'Agree to charge $15 to the room, ask for a printed receipt, request a wakeup call at 5:15 AM, and thank Carlos',
      targetVocabulary: ['Please charge the $15 to my room', 'printed receipt', 'wakeup call at 5:15 AM', 'Where does the shuttle depart from', 'Thank you Carlos for your help'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Prompt',
          text: 'Yes, please charge the $15 to my room and give me a printed receipt. Could you also schedule a wake-up call for 5:15 AM? Where will the shuttle pick us up tomorrow morning? Thank you for all your wonderful help, Carlos!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Spontaneous Response',
          text: 'Charging it to the room is perfect. I would appreciate a printed receipt and a wake-up call at 5:15 AM. Where is the shuttle pickup area outside the lobby? Thanks Carlos!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'payment_and_receipt',
          patterns: ['charge', 'room', '$15', '15', 'receipt', 'printed', 'bill'],
          required: true,
        },
        {
          name: 'wakeup_and_departure_inquiry',
          patterns: ['wakeup', 'wake-up', 'call', '5:15', 'pickup', 'shuttle', 'where', 'depart', 'lobby', 'thank you', 'carlos'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_263_3_charge_in_room',
          pattern: /charge in my room\b/i,
          errorType: 'grammar',
          message: 'Say "charge to my room" (preposition "to").',
          correctionPattern: 'Please charge the ticket to my room.',
        },
      ],
      remediationPractice: {
        id: 'rem_263_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [Please charge the shuttle fee / to my room and schedule / a wake-up call for 5:15 AM]',
        correctAnswer: 'Please charge the shuttle fee to my room and schedule a wake-up call for 5:15 AM',
        explanation: 'Imperative polite request + compound verb phrase.',
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
