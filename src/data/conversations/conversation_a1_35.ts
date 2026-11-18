import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_35: ConversationDefinition = {
  id: 'conv_a1_35',
  title: 'Hotel Check-In, Rooms & Guest Services (Facilities & Requests)',
  cefr: 'A1',
  unitId: 'unit_a1_3',
  lessonLinks: ['lesson_a1_3_35'],
  estimatedMinutes: 5,
  scenario:
    'You arrive at the Grand Horizon Hotel in the city center. You check in at the reception desk with receptionist Clara, provide your booking details, ask about hotel amenities (Wi-Fi, breakfast hours, elevator), and request an extra set of towels.',
  communicativeGoals: [
    'Complete a standard hotel check-in procedure politely',
    'Inquire about hotel facilities and timings (breakfast, gym, elevator, Wi-Fi)',
    'Request room amenities courteously ("Could we please get extra towels?")',
    'Understand room key instructions and checkout policies',
  ],
  canDoStatements: [
    'Can check into a hotel and give personal reservation details (CEFR A1.2)',
    'Can ask simple questions about hotel amenities and service hours',
    'Can make basic guest requests for room supplies politely',
  ],
  characters: [
    {
      id: 'char_clara',
      name: 'Clara',
      role: 'Hotel Receptionist',
      avatar: '🏨',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'check-in',
        ipa: '/ˈtʃɛkˌɪn/',
        partOfSpeech: 'noun / verb',
        meaning: 'The act of registering at a hotel upon arrival',
        exampleSentence: 'We would like to check in, please.',
        translations: { hi: 'चेक-इन / होटल में पंजीकरण' },
      },
      {
        word: 'amenities',
        ipa: '/əˈmɛnɪtiz/',
        partOfSpeech: 'noun',
        meaning: 'Desirable or useful features of a building or place (e.g. pool, gym, Wi-Fi)',
        exampleSentence: 'What amenities does the hotel offer?',
        translations: { hi: 'सुविधाएं' },
      },
      {
        word: 'elevator',
        ipa: '/ˈɛləˌveɪtər/',
        partOfSpeech: 'noun',
        meaning: 'A compartment used for raising and lowering people to different floors',
        exampleSentence: 'The elevator is on your right.',
        translations: { hi: 'लिफ्ट / एलिवेटर' },
      },
      {
        word: 'towel',
        ipa: '/ˈtaʊəl/',
        partOfSpeech: 'noun',
        meaning: 'A piece of absorbent cloth used for drying',
        exampleSentence: 'Could we have two extra bath towels?',
        translations: { hi: 'तौलिया' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I have a reservation under...',
        functionCategory: 'Hotel Arrival',
        exampleSentence: 'Hello, I have a reservation under the name of Morgan.',
      },
      {
        phrase: 'What time is breakfast served?',
        functionCategory: 'Amenity Timings',
        exampleSentence: 'What time is breakfast served in the morning?',
      },
      {
        phrase: 'Is Wi-Fi included?',
        functionCategory: 'Service Inquiry',
        exampleSentence: 'Is Wi-Fi included in our room rate?',
      },
      {
        phrase: 'Could you send... to room...?',
        functionCategory: 'Guest Supply Request',
        exampleSentence: 'Could you please send extra pillows to room 402?',
      },
    ],
    grammar: {
      title: 'Polite Inquiries with "Could you..." & Time Prepositions',
      conceptExplanation:
        'When asking hotel staff for information or services, use "Could you tell me...?" or "Could we have + [noun]?". Use time prepositions "from [time] to [time]" or "at [time]" for schedules: "Breakfast is from 7:00 AM to 10:00 AM."',
      patternFormula: 'Could you please tell me [Question]? | What time is [Service]? | Could we have [Item], please?',
      contrastExamples: [
        {
          incorrect: 'Give me key now.',
          correct: 'Hello, we have a reservation under the name of Patel.',
          explanation: 'Always open hotel check-in with polite greetings and reservation identification.',
        },
        {
          incorrect: 'When breakfast is?',
          correct: 'What time is breakfast served?',
          explanation: 'Use standard interrogative order: "What time is [subject] + [past participle]?"',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Clara',
        text: 'Good afternoon and welcome to the Grand Horizon Hotel! How can I assist you?',
        translation: 'शुभ दोपहर और ग्रैंड होराइजन होटल में आपका स्वागत है! मैं आपकी क्या मदद कर सकती हूँ?',
      },
      {
        speaker: 'You',
        text: 'Good afternoon! I would like to check in. I have a reservation for three nights under Alex Taylor.',
        translation: 'शुभ दोपहर! मैं चेक-इन करना चाहता हूँ। मेरे पास एलेक्स टेलर के नाम से तीन रातों का आरक्षण है।',
      },
      {
        speaker: 'Clara',
        text: 'Welcome, Alex! Here are your key cards for room 512 on the fifth floor. Breakfast is served from 7 to 10 AM on the ground floor.',
        translation: 'स्वागत है, एलेक्स! पाँचवीं मंज़िल पर कमरा 512 के लिए ये आपके की-कार्ड हैं। नाश्ता भूतल पर सुबह 7 से 10 बजे तक परोसा जाता है।',
      },
      {
        speaker: 'You',
        text: 'Thank you! Is high-speed Wi-Fi complimentary, and could we please have two extra towels sent to our room?',
        translation: 'धन्यवाद! क्या हाई-स्पीड वाई-फ़ाई मुफ़्त है, और क्या हमारे कमरे में दो अतिरिक्त तौलिए भेजे जा सकते हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_35_1',
      type: 'fill_blank',
      prompt: 'Complete the check-in phrase: "Hello, I have a reservation ___ the name of Taylor."',
      options: [
        { id: 'opt_1', text: 'under', isCorrect: true },
        { id: 'opt_2', text: 'on', isCorrect: false },
        { id: 'opt_3', text: 'with', isCorrect: false },
      ],
      correctAnswer: 'under',
      explanation: 'Use "under the name of" for reservations.',
    },
    {
      id: 'cp_a1_35_2',
      type: 'multiple_choice',
      prompt: 'How do you ask what time breakfast is available?',
      options: [
        { id: 'opt_1', text: 'What time is breakfast served in the morning?', isCorrect: true },
        { id: 'opt_2', text: 'At what is morning breakfast eating?', isCorrect: false },
        { id: 'opt_3', text: 'How many hour breakfast is open?', isCorrect: false },
      ],
      correctAnswer: 'What time is breakfast served in the morning?',
      explanation: '"What time is breakfast served?" is natural and correct.',
    },
    {
      id: 'cp_a1_35_3',
      type: 'multiple_choice',
      prompt: 'Which request for extra towels is the most polite?',
      options: [
        { id: 'opt_1', text: 'Could we please have two extra towels sent to room 305?', isCorrect: true },
        { id: 'opt_2', text: 'You must bring two towels in room 305.', isCorrect: false },
        { id: 'opt_3', text: 'Send me towel now fast.', isCorrect: false },
      ],
      correctAnswer: 'Could we please have two extra towels sent to room 305?',
      explanation: '"Could we please have... sent to..." is formal and courteous.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_35_1',
      scenarioContext: 'Check in for a two-night stay.',
      prompt: 'Build: "I would like to check in for two nights under Taylor."',
      targetStructure: 'Subject + would like to + base verb + for [time] + under [Name]',
      wordBank: ['I', 'would', 'like', 'to', 'check', 'in', 'for', 'two', 'nights', 'under', 'Taylor', 'at'],
      acceptableSolutions: [
        'I would like to check in for two nights under Taylor',
        'I would like to check in for two nights under Taylor.',
      ],
      explanation: 'Complete check-in phrase with duration and name.',
    },
    {
      id: 'sc_a1_35_2',
      scenarioContext: 'Inquire about breakfast schedule.',
      prompt: 'Build: "What time is breakfast served in the morning?"',
      targetStructure: 'What time + is + noun + past participle + prepositional phrase?',
      wordBank: ['What', 'time', 'is', 'breakfast', 'served', 'in', 'the', 'morning', 'does', 'serve'],
      acceptableSolutions: [
        'What time is breakfast served in the morning',
        'What time is breakfast served in the morning?',
      ],
      explanation: 'Natural question asking about meal timing.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_35_1',
      turnIndex: 1,
      partnerPrompt:
        'Good afternoon, welcome to the Grand Horizon Hotel! How can I help you today?',
      partnerAudioText:
        'Good afternoon, welcome to the Grand Horizon Hotel! How can I help you today?',
      partnerQuestionHindi:
        'शुभ दोपहर, ग्रैंड होराइजन होटल में आपका स्वागत है! आज मैं आपकी क्या मदद कर सकती हूँ?',
      expectedFunction: 'Initiate Check-In with Reservation Details',
      contextGoal:
        'State that you would like to check in, giving your name (e.g. Alex Morgan) and stay duration (e.g. 2 or 3 nights).',
      targetVocabulary: ['check in', 'reservation', 'under the name', 'nights', 'good afternoon'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Good afternoon! I would like to check in, please. I have a reservation under the name of Alex Morgan for two nights.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hello! I have a reservation under Alex Morgan. We are checking in for two nights.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Hi there! Checking in under Alex Morgan for two nights, please.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Check In Statement',
          patterns: [
            'check in',
            'checking in',
            'reservation',
            'under the name',
            'under alex',
            'nights',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'check_in_verb_error',
          pattern: /\bi am wanting check in\b/i,
          errorType: 'grammar',
          message: 'Say "I would like to check in" instead of "I am wanting check in".',
          correctionPattern: 'I would like to check in, please.',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_35_1',
        type: 'fill_blank',
        prompt: 'Choose the correct preposition: "I have a room reserved ___ Alex Morgan."',
        options: [
          { id: 'opt_1', text: 'under', isCorrect: true },
          { id: 'opt_2', text: 'at', isCorrect: false },
          { id: 'opt_3', text: 'by', isCorrect: false },
        ],
        correctAnswer: 'under',
        explanation: '"Under" is used with the name on a reservation.',
      },
    },
    {
      id: 'turn_a1_35_2',
      turnIndex: 2,
      partnerPrompt:
        'Welcome, Alex! Here are your key cards for room 416 on the fourth floor. The elevators are just past the lobby on your left. Do you have any questions about our hotel amenities?',
      partnerAudioText:
        'Welcome, Alex! Here are your key cards for room 416 on the fourth floor. The elevators are just past the lobby on your left. Do you have any questions about our hotel amenities?',
      partnerQuestionHindi:
        'स्वागत है, एलेक्स! चौथी मंज़िल पर कमरा 416 के लिए ये आपके की-कार्ड हैं। लिफ्ट लॉबी के ठीक आगे आपकी बाईं ओर है। क्या आपके पास हमारे होटल की सुविधाओं के बारे में कोई प्रश्न हैं?',
      expectedFunction: 'Inquire About Breakfast & Wi-Fi',
      contextGoal:
        'Ask about breakfast hours (e.g. "What time is breakfast served?") and whether Wi-Fi is included.',
      targetVocabulary: ['breakfast', 'what time', 'wi-fi', 'included', 'password', 'served'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you! What time is breakfast served in the morning, and is Wi-Fi included in our room?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Could you tell me the breakfast hours and the Wi-Fi password, please?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'What time is breakfast, and do we have free Wi-Fi in the room?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Amenity Inquiries',
          patterns: ['breakfast', 'what time', 'wi-fi', 'wifi', 'password', 'included', 'hours'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_35_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly asks about breakfast hours?',
        options: [
          { id: 'opt_1', text: 'What time is breakfast served?', isCorrect: true },
          { id: 'opt_2', text: 'What time breakfast is served?', isCorrect: false },
          { id: 'opt_3', text: 'When is served the breakfast time?', isCorrect: false },
        ],
        correctAnswer: 'What time is breakfast served?',
        explanation: 'Standard question word order with auxiliary "is" before subject "breakfast".',
      },
    },
    {
      id: 'turn_a1_35_3',
      turnIndex: 3,
      partnerPrompt:
        'Breakfast is served daily from 6:30 to 10:30 AM in the restaurant, and Wi-Fi is completely free—just connect to "GrandGuest" with no password needed. Is there anything else you need for your room?',
      partnerAudioText:
        'Breakfast is served daily from 6:30 to 10:30 AM in the restaurant, and Wi-Fi is completely free—just connect to "GrandGuest" with no password needed. Is there anything else you need for your room?',
      partnerQuestionHindi:
        'रेस्तरां में रोजाना सुबह 6:30 से 10:30 बजे तक नाश्ता परोसा जाता है, और वाई-फ़ाई पूरी तरह से मुफ़्त है—बस बिना पासवर्ड के "GrandGuest" से जुड़ें। क्या आपको अपने कमरे के लिए किसी और चीज़ की ज़रूरत है?',
      expectedFunction: 'Request Room Supplies (Towels / Pillows)',
      contextGoal:
        'Politely request additional supplies (e.g. "Could we please have two extra towels sent to room 416?").',
      targetVocabulary: ['could we have', 'extra towels', 'pillows', 'room 416', 'please', 'send'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'That is great! Could we please have two extra bath towels and an extra pillow sent up to room 416?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Could you send some extra towels to our room please?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Could we get two more towels for room 416, please?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Supply Request',
          patterns: ['towels', 'pillows', 'extra', 'could we have', 'could you send', 'room 416', 'please'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_35_3',
        type: 'fill_blank',
        prompt: 'Fill in the polite request: "Could we ___ have two extra towels?"',
        options: [
          { id: 'opt_1', text: 'please', isCorrect: true },
          { id: 'opt_2', text: 'must', isCorrect: false },
          { id: 'opt_3', text: 'already', isCorrect: false },
        ],
        correctAnswer: 'please',
        explanation: '"Please" adds courtesy to the modal request.',
      },
    },
    {
      id: 'turn_a1_35_4',
      turnIndex: 4,
      partnerPrompt:
        'I will have housekeeping bring extra towels and pillows to room 416 right away! Checkout is at 11:00 AM on Sunday. Have a wonderful stay with us!',
      partnerAudioText:
        'I will have housekeeping bring extra towels and pillows to room 416 right away! Checkout is at 11:00 AM on Sunday. Have a wonderful stay with us!',
      partnerQuestionHindi:
        'मैं हाउसकीपिंग से तुरंत कमरा 416 में अतिरिक्त तौलिए और तकिए भिजवा दूँगी! रविवार सुबह 11:00 बजे चेकआउट है। हमारे साथ आपका प्रवास सुखद रहे!',
      expectedFunction: 'Thank Staff & Complete Interaction',
      contextGoal:
        'Thank Clara for her assistance and say a polite goodbye before heading to the elevator.',
      targetVocabulary: ['thank you', 'appreciate', 'have a great day', 'goodbye', 'help'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you very much for all your help, Clara! Have a great afternoon.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thank you so much! We really appreciate it. Goodbye!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Thanks a lot Clara! Have a good one.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Thanks',
          patterns: ['thank you', 'thanks', 'appreciate', 'have a great', 'goodbye', 'bye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_35_4',
        type: 'multiple_choice',
        prompt: 'Which phrase is a courteous conclusion to checking in at a hotel?',
        options: [
          { id: 'opt_1', text: 'Thank you very much for your help, have a great afternoon!', isCorrect: true },
          { id: 'opt_2', text: 'I am walking away now from desk.', isCorrect: false },
          { id: 'opt_3', text: 'Give me more things hotel lady.', isCorrect: false },
        ],
        correctAnswer: 'Thank you very much for your help, have a great afternoon!',
        explanation: 'Courteous, appreciative, and natural.',
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
