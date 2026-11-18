import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_32: ConversationDefinition = {
  id: 'conv_a1_32',
  title: 'Appointments, Schedules & Making Reservations',
  cefr: 'A1',
  unitId: 'unit_a1_3',
  lessonLinks: ['lesson_a1_3_32'],
  estimatedMinutes: 5,
  scenario:
    'You call "La Bella Vista" restaurant to make a table reservation for an anniversary dinner on Saturday evening. You give the date, time, number of guests, and special seating requests.',
  communicativeGoals: [
    'Book a table or appointment using polite request modals ("I\'d like to make a reservation...")',
    'State specific dates, days, times, and number of people accurately',
    'Ask for special preferences ("Could we have a table near the window?")',
    'Confirm booking details and contact information',
  ],
  canDoStatements: [
    'Can make a basic telephone reservation for a restaurant or service (CEFR A1.2)',
    'Can specify dates, times, party size, and name clearly',
    'Can confirm and repeat reservation details politely',
  ],
  characters: [
    {
      id: 'char_marco',
      name: 'Marco',
      role: 'Restaurant Host',
      avatar: '🍽️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'reservation',
        ipa: '/ˌrɛzərˈveɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'An arrangement to have something kept for someone (e.g. a table or hotel room)',
        exampleSentence: "I would like to make a dinner reservation for two.",
        translations: { hi: 'आरक्षण / बुकिंग' },
      },
      {
        word: 'available',
        ipa: '/əˈveɪləbəl/',
        partOfSpeech: 'adjective',
        meaning: 'Able to be used or obtained; free',
        exampleSentence: 'Do you have any tables available at seven?',
        translations: { hi: 'उपलब्ध / खाली' },
      },
      {
        word: 'party',
        ipa: '/ˈpɑːrti/',
        partOfSpeech: 'noun',
        meaning: 'A group of people taking part in a particular activity together',
        exampleSentence: 'We have a party of four arriving at eight.',
        translations: { hi: 'समूह / लोगों का समूह' },
      },
      {
        word: 'confirm',
        ipa: '/kənˈfɜːrm/',
        partOfSpeech: 'verb',
        meaning: 'To state with certainty that a reservation or arrangement is fixed',
        exampleSentence: 'May I confirm your phone number?',
        translations: { hi: 'पुष्टि करना' },
      },
    ],
    usefulChunks: [
      {
        phrase: "I'd like to book a table for...",
        functionCategory: 'Reservation Request',
        exampleSentence: "I'd like to book a table for four this Saturday.",
      },
      {
        phrase: 'Do you have an opening at...?',
        functionCategory: 'Time Inquiry',
        exampleSentence: 'Do you have an opening at seven thirty?',
      },
      {
        phrase: 'Under the name of...',
        functionCategory: 'Providing Name',
        exampleSentence: 'The reservation is under the name of Sharma.',
      },
      {
        phrase: 'Could we have a table near...?',
        functionCategory: 'Special Seating Request',
        exampleSentence: 'Could we have a table near the window please?',
      },
    ],
    grammar: {
      title: 'Polite Requests with "I would like to" & "Could we have..."',
      conceptExplanation:
        'When making reservations, use "I would like to book / make a reservation for [number] people on [day] at [time]". Use "Could we have + [noun]?" to make courteous special requests.',
      patternFormula: "I'd like to make a reservation for [Number] at [Time] on [Day]. | Could we have [Request], please?",
      contrastExamples: [
        {
          incorrect: 'I want table now at 7.',
          correct: "I'd like to reserve a table for two at 7:00 PM, please.",
          explanation: '"I\'d like to reserve..." is much more polite and conventional.',
        },
        {
          incorrect: 'We are four person.',
          correct: 'A table for four people, please.',
          explanation: 'Use "four people" or "a party of four", not "four person".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Marco',
        text: 'Good afternoon, La Bella Vista! How may I assist you today?',
        translation: 'शुभ दोपहर, ला बेला विस्टा! आज मैं आपकी क्या मदद कर सकता हूँ?',
      },
      {
        speaker: 'You',
        text: "Hello! I'd like to make a dinner reservation for two people this Saturday at seven thirty.",
        translation: 'नमस्ते! मैं इस शनिवार शाम साढ़े सात बजे दो लोगों के लिए डिनर आरक्षण कराना चाहता हूँ।',
      },
      {
        speaker: 'Marco',
        text: 'Certainly! We have a table available at seven thirty. Could I have your name and contact number, please?',
        translation: 'बिल्कुल! हमारे पास साढ़े सात बजे एक टेबल उपलब्ध है। क्या मुझे आपका नाम और संपर्क नंबर मिल सकता है?',
      },
      {
        speaker: 'You',
        text: 'Yes, it is under Alex Chen, and my number is 555-0192. Could we please have a quiet table by the window?',
        translation: 'हाँ, यह एलेक्स चेन के नाम से है, और मेरा नंबर 555-0192 है। क्या हमें खिड़की के पास एक शांत टेबल मिल सकती है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_32_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "I would like to ___ a table for four people."',
      options: [
        { id: 'opt_1', text: 'reserve', isCorrect: true },
        { id: 'opt_2', text: 'reserved', isCorrect: false },
        { id: 'opt_3', text: 'reserving', isCorrect: false },
      ],
      correctAnswer: 'reserve',
      explanation: 'Use base verb "reserve" after "would like to".',
    },
    {
      id: 'cp_a1_32_2',
      type: 'multiple_choice',
      prompt: 'Which phrase correctly specifies party size and time?',
      options: [
        { id: 'opt_1', text: 'A table for two at seven thirty this Friday.', isCorrect: true },
        { id: 'opt_2', text: 'A table of two person on seven thirty clock.', isCorrect: false },
        { id: 'opt_3', text: 'Two peoples at Friday 7.', isCorrect: false },
      ],
      correctAnswer: 'A table for two at seven thirty this Friday.',
      explanation: '"A table for two at [time] on [day]" is the standard English construction.',
    },
    {
      id: 'cp_a1_32_3',
      type: 'multiple_choice',
      prompt: 'How do you ask for a window seat politely?',
      options: [
        { id: 'opt_1', text: 'Could we please have a table near the window?', isCorrect: true },
        { id: 'opt_2', text: 'Give us table window now please.', isCorrect: false },
        { id: 'opt_3', text: 'Must we sit window table?', isCorrect: false },
      ],
      correctAnswer: 'Could we please have a table near the window?',
      explanation: '"Could we please have..." is the standard polite request formula.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_32_1',
      scenarioContext: 'Book a table for two on Saturday night.',
      prompt: 'Build: "I would like to book a table for two on Saturday."',
      targetStructure: 'Subject + would like to + base verb + a table + for [number] + on [Day]',
      wordBank: ['I', 'would', 'like', 'to', 'book', 'a', 'table', 'for', 'two', 'on', 'Saturday', 'at', 'in'],
      acceptableSolutions: [
        'I would like to book a table for two on Saturday',
        'I would like to book a table for two on Saturday.',
      ],
      explanation: 'Standard polite reservation statement.',
    },
    {
      id: 'sc_a1_32_2',
      scenarioContext: 'Request a quiet table near the terrace.',
      prompt: 'Build: "Could we have a quiet table near the terrace please?"',
      targetStructure: 'Modal + subject + base verb + noun phrase + prepositional phrase + please',
      wordBank: ['Could', 'we', 'have', 'a', 'quiet', 'table', 'near', 'the', 'terrace', 'please', 'do', 'are'],
      acceptableSolutions: [
        'Could we have a quiet table near the terrace please',
        'Could we have a quiet table near the terrace please?',
        'Could we have a quiet table near the terrace, please?',
      ],
      explanation: 'Courteous seating request with modal "Could".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_32_1',
      turnIndex: 1,
      partnerPrompt:
        'Thank you for calling La Bella Vista Italian Kitchen. My name is Marco. How can I help you today?',
      partnerAudioText:
        'Thank you for calling La Bella Vista Italian Kitchen. My name is Marco. How can I help you today?',
      partnerQuestionHindi:
        'ला बेला विस्टा इटैलियन किचन में कॉल करने के लिए धन्यवाद। मेरा नाम मार्को है। आज मैं आपकी क्या मदद कर सकता हूँ?',
      expectedFunction: 'Initiate Table Reservation Request',
      contextGoal:
        'State that you would like to make a table reservation, specifying the day (Saturday), time (around 7:30 PM), and number of people (2).',
      targetVocabulary: ['reservation', 'table for two', 'saturday', 'seven thirty', "i'd like to", 'book'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: "Hello! I'd like to make a dinner reservation for two people this Saturday evening at seven thirty.",
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: "Hi, I'd like to book a table for two this Saturday at 7:30 PM, please.",
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: "Hi Marco! Could I reserve a table for two on Saturday around seven thirty?",
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Reservation Request Details',
          patterns: [
            'reservation',
            'book a table',
            'reserve a table',
            'table for two',
            'two people',
            'saturday',
            'seven thirty',
            '7:30',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'two_person_error',
          pattern: /\btwo person\b/i,
          errorType: 'grammar',
          message: 'Say "two people" or "a table for two" instead of "two person".',
          correctionPattern: 'a table for two / two people',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_32_1',
        type: 'fill_blank',
        prompt: 'Select the correct plural: "We need a table for three ___."',
        options: [
          { id: 'opt_1', text: 'people', isCorrect: true },
          { id: 'opt_2', text: 'persons', isCorrect: false },
          { id: 'opt_3', text: 'peoples', isCorrect: false },
        ],
        correctAnswer: 'people',
        explanation: '"People" is the standard plural noun for persons.',
      },
    },
    {
      id: 'turn_a1_32_2',
      turnIndex: 2,
      partnerPrompt:
        'Let me check our book for Saturday... Yes, seven thirty is available for two guests! May I have your full name and a contact phone number for the reservation?',
      partnerAudioText:
        'Let me check our book for Saturday... Yes, seven thirty is available for two guests! May I have your full name and a contact phone number for the reservation?',
      partnerQuestionHindi:
        'मैं शनिवार के लिए हमारी बुकिंग पुस्तिका देखता हूँ... हाँ, दो मेहमानों के लिए साढ़े सात बजे का समय उपलब्ध है! क्या मुझे आरक्षण के लिए आपका पूरा नाम और संपर्क नंबर मिल सकता है?',
      expectedFunction: 'Provide Name & Contact Information',
      contextGoal:
        'Provide your name (e.g. Alex Taylor / Jordan Smith) and a clear phone number clearly.',
      targetVocabulary: ['name is', 'under the name', 'phone number', 'my number is', '555'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'The reservation is under Alex Morgan, and my contact number is 555-0184.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'My name is Alex Morgan and my phone number is 555-0184.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Sure, it is Alex Morgan, 555-0184.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Name and Phone Information',
          patterns: ['name', 'under', 'alex', 'morgan', 'smith', 'taylor', 'number is', '555', 'phone'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_32_2',
        type: 'multiple_choice',
        prompt: 'Which phrase is most natural when giving your name for a reservation?',
        options: [
          { id: 'opt_1', text: 'The reservation is under Alex Morgan.', isCorrect: true },
          { id: 'opt_2', text: 'I am calling myself Alex Morgan.', isCorrect: false },
          { id: 'opt_3', text: 'Table belongs named Alex Morgan.', isCorrect: false },
        ],
        correctAnswer: 'The reservation is under Alex Morgan.',
        explanation: '"The reservation is under [Name]" is the standard restaurant phrasing.',
      },
    },
    {
      id: 'turn_a1_32_3',
      turnIndex: 3,
      partnerPrompt:
        'Got it, Alex! Do you have any special seating requests or dietary notes for the chef?',
      partnerAudioText:
        'Got it, Alex! Do you have any special seating requests or dietary notes for the chef?',
      partnerQuestionHindi:
        'समझ गया, एलेक्स! क्या आपके पास कोई विशेष बैठने का अनुरोध या शेफ के लिए आहार संबंधी निर्देश हैं?',
      expectedFunction: 'Make Special Seating Request & Celebrate Occasion',
      contextGoal:
        'Ask politely for a window table or a quiet booth (e.g. "Could we please have a table near the window? We are celebrating our anniversary").',
      targetVocabulary: ['could we have', 'table near the window', 'quiet', 'anniversary', 'special', 'please'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Could we please have a quiet table near the window? We are celebrating our wedding anniversary.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Yes, could we sit by the window please? It is a special anniversary dinner.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'A quiet booth near the window would be wonderful, please!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Special Request',
          patterns: [
            'window',
            'quiet',
            'booth',
            'anniversary',
            'celebrating',
            'could we have',
            'could we sit',
            'please',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_32_3',
        type: 'multiple_choice',
        prompt: 'Which request is polite and grammatically correct?',
        options: [
          { id: 'opt_1', text: 'Could we please have a table near the window?', isCorrect: true },
          { id: 'opt_2', text: 'Could we to have a table near window?', isCorrect: false },
          { id: 'opt_3', text: 'Can we having window table please?', isCorrect: false },
        ],
        correctAnswer: 'Could we please have a table near the window?',
        explanation: 'Use base verb "have" with modal "Could": "Could we have...".',
      },
    },
    {
      id: 'turn_a1_32_4',
      turnIndex: 4,
      partnerPrompt:
        'Happy anniversary in advance! I have reserved our best window table for you on Saturday at seven thirty. We look forward to welcoming you!',
      partnerAudioText:
        'Happy anniversary in advance! I have reserved our best window table for you on Saturday at seven thirty. We look forward to welcoming you!',
      partnerQuestionHindi:
        'सालगिरह की अग्रिम बधाई! मैंने शनिवार को साढ़े सात बजे आपके लिए हमारी सबसे अच्छी खिड़की वाली टेबल आरक्षित कर दी है। हम आपका स्वागत करने के लिए उत्सुक हैं!',
      expectedFunction: 'Thank Host & Confirm Final Agreement',
      contextGoal:
        'Thank Marco warmly, express excitement for the dinner, and say goodbye.',
      targetVocabulary: ['thank you', 'appreciate it', 'see you on saturday', 'looking forward', 'goodbye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you very much, Marco! I really appreciate your help. See you on Saturday at seven thirty!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'That is wonderful, thank you so much! See you Saturday evening.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Fantastic! Thanks Marco, see you this Saturday!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Appreciation',
          patterns: [
            'thank you',
            'thanks',
            'appreciate',
            'see you on saturday',
            'see you saturday',
            'goodbye',
            'looking forward',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_32_4',
        type: 'multiple_choice',
        prompt: 'Which response finishes the call warmly?',
        options: [
          { id: 'opt_1', text: 'Thank you so much Marco, see you on Saturday!', isCorrect: true },
          { id: 'opt_2', text: 'I hang up phone now.', isCorrect: false },
          { id: 'opt_3', text: 'Saturday is finish.', isCorrect: false },
        ],
        correctAnswer: 'Thank you so much Marco, see you on Saturday!',
        explanation: 'Polite and friendly conclusion.',
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
