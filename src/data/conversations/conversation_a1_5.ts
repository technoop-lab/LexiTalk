import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_5: ConversationDefinition = {
  id: 'conv_a1_5',
  title: 'Registering for a Library Card',
  cefr: 'A1',
  unitId: 'unit_a1_1',
  lessonLinks: ['lesson_a1_1_5'],
  estimatedMinutes: 5,
  scenario:
    'You are visiting the city central library to get a membership card. The librarian, Marco, asks for your contact details, age, and phone number to complete your registration.',
  communicativeGoals: [
    'State your age using "I am [X] years old"',
    'Dictate phone numbers and email addresses clearly digit by digit',
    'Understand and state opening and closing hours',
    'Recycle name spelling and personal identity from Lessons 1 & 2',
  ],
  canDoStatements: [
    'Can provide contact details like phone number and email address (CEFR A1)',
    'Can state age accurately using cardinal numbers and "years old"',
    'Can understand and ask about time and operating hours',
  ],
  characters: [
    {
      id: 'char_marco',
      name: 'Marco',
      role: 'City Library Registrar',
      avatar: '👨‍💼',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'number',
        ipa: '/ˈnʌmbər/',
        partOfSpeech: 'noun',
        meaning: 'An arithmetical value or phone digits',
        exampleSentence: 'My phone number is 555-0192.',
        translations: { hi: 'नंबर / संख्या' },
      },
      {
        word: 'email',
        ipa: '/ˈiːmeɪl/',
        partOfSpeech: 'noun',
        meaning: 'Electronic mail address used for messages',
        exampleSentence: 'Can you write your email address here?',
        translations: { hi: 'ईमेल' },
      },
      {
        word: 'age',
        ipa: '/eɪdʒ/',
        partOfSpeech: 'noun',
        meaning: 'The length of time that a person has lived',
        exampleSentence: 'I am 24 years old.',
        translations: { hi: 'उम्र / आयु' },
      },
      {
        word: 'o’clock',
        ipa: '/əˈklɒk/',
        partOfSpeech: 'adverb',
        meaning: 'Used specifying hour of the day',
        exampleSentence: 'The library opens at 9 o’clock.',
        translations: { hi: 'बजे (समय)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am ___ years old.',
        functionCategory: 'Stating Age',
        exampleSentence: 'I am twenty-eight years old.',
      },
      {
        phrase: 'My phone number is...',
        functionCategory: 'Providing Phone Contact',
        exampleSentence: 'My phone number is 987-654-3210.',
      },
      {
        phrase: 'My email address is...',
        functionCategory: 'Providing Email',
        exampleSentence: 'My email is alex@example.com.',
      },
      {
        phrase: 'What time do you close?',
        functionCategory: 'Inquiring Schedule',
        exampleSentence: 'What time does the library close today?',
      },
    ],
    grammar: {
      title: 'Stating Age & Expressing Time in English',
      conceptExplanation:
        'Always use the verb BE to state age ("I am 25 years old", NOT "I have 25 years"). Use "at" for specific clock times ("at 8 o\'clock").',
      patternFormula: 'I am + [Number] + (years old) | at + [Time]',
      contrastExamples: [
        {
          incorrect: 'I have 26 years.',
          correct: 'I am 26 years old. / I am 26.',
          explanation: 'In English, age uses the verb "to be" (am/is/are), never "have".',
        },
        {
          incorrect: 'The library opens in 9 o\'clock.',
          correct: 'The library opens at 9 o\'clock.',
          explanation: 'Clock times always take the preposition "at".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Marco',
        text: 'Welcome! To register your library card, what is your phone number and age?',
        translation: 'स्वागत है! आपका लाइब्रेरी कार्ड बनाने के लिए, आपका फ़ोन नंबर और उम्र क्या है?',
      },
      {
        speaker: 'You',
        text: 'My phone number is 555-4321, and I am 26 years old.',
        translation: 'मेरा फ़ोन नंबर 555-4321 है, और मेरी उम्र 26 वर्ष है।',
      },
      {
        speaker: 'Marco',
        text: 'Thank you. And what is your email address?',
        translation: 'धन्यवाद। और आपका ईमेल पता क्या है?',
      },
      {
        speaker: 'You',
        text: 'My email address is rahul@mail.com. What time does the library close?',
        translation: 'मेरा ईमेल पता rahul@mail.com है। लाइब्रेरी किस समय बंद होती है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_5_1',
      type: 'multiple_choice',
      prompt: 'How do you correctly state your age in English?',
      options: [
        { id: 'opt_1', text: 'I am 25 years old.', isCorrect: true },
        { id: 'opt_2', text: 'I have 25 years.', isCorrect: false },
        { id: 'opt_3', text: 'I got 25 years age.', isCorrect: false },
      ],
      correctAnswer: 'I am 25 years old.',
      explanation: 'English uses the verb BE to express age ("I am 25 years old").',
    },
    {
      id: 'cp_a1_5_2',
      type: 'fill_blank',
      prompt: 'Complete the time phrase: "The library closes ___ 8 o\'clock in the evening."',
      options: [
        { id: 'opt_1', text: 'at', isCorrect: true },
        { id: 'opt_2', text: 'on', isCorrect: false },
        { id: 'opt_3', text: 'in', isCorrect: false },
      ],
      correctAnswer: 'at',
      explanation: 'Use preposition "at" with clock times.',
    },
    {
      id: 'cp_a1_5_3',
      type: 'multiple_choice',
      prompt: 'Which question asks about the closing time?',
      options: [
        { id: 'opt_1', text: 'What time do you close?', isCorrect: true },
        { id: 'opt_2', text: 'When time is closed?', isCorrect: false },
        { id: 'opt_3', text: 'How many time to close?', isCorrect: false },
      ],
      correctAnswer: 'What time do you close?',
      explanation: '"What time do you close?" is the natural customer inquiry.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_5_1',
      scenarioContext: 'State your age and phone number clearly.',
      prompt: 'Build: "I am 25 years old and my number is 555-0199."',
      targetStructure: 'Subject + BE + age + conjunction + possessive noun phrase + BE + digits',
      wordBank: ['I', 'am', '25', 'years', 'old', 'and', 'my', 'number', 'is', '555-0199', 'have', 'are'],
      acceptableSolutions: [
        'I am 25 years old and my number is 555-0199',
        'I am 25 years old and my number is 555-0199.',
        'I am 25 and my phone number is 555-0199.',
      ],
      explanation: 'Correctly uses "am [number] years old" and states the phone number.',
    },
    {
      id: 'sc_a1_5_2',
      scenarioContext: 'Ask about the library closing time.',
      prompt: 'Build: "What time does the library close today?"',
      targetStructure: 'WH-time phrase + auxiliary does + subject + base verb + time adverb',
      wordBank: ['What', 'time', 'does', 'the', 'library', 'close', 'today', 'is', 'do', 'at'],
      acceptableSolutions: [
        'What time does the library close today',
        'What time does the library close today?',
        'What time do you close today?',
      ],
      explanation: 'Natural question about operating hours.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_5_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello! Welcome to the city library. To create your new card, can you tell me your age and your phone number please?',
      partnerAudioText: 'Hello! Welcome to the city library. To create your new card, can you tell me your age and your phone number please?',
      partnerQuestionHindi: 'नमस्ते! शहर की लाइब्रेरी में आपका स्वागत है। आपका नया कार्ड बनाने के लिए, क्या आप मुझे अपनी उम्र और अपना फ़ोन नंबर बता सकते हैं?',
      expectedFunction: 'State Age & Phone Number',
      contextGoal: 'State your age using "I am [X] years old" and provide your phone number.',
      targetVocabulary: ['am', 'years', 'old', 'number', 'phone', 'my'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hello Marco! I am 24 years old, and my phone number is 987-654-3210.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hi! I am 30 years old. My mobile number is 555-0192.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I am 22, and my phone is 555-7890.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Age Statement',
          patterns: ['i am', 'years old', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '35'],
          required: true,
        },
        {
          name: 'Phone Number',
          patterns: ['number is', 'phone is', 'my number', '555', '987', 'mobile is', 'phone number'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'have_age_mistake',
          pattern: /\bi have \d+ years\b/i,
          errorType: 'grammar',
          message: 'In English, use "I am [number] years old", not "I have [number] years".',
          correctionPattern: 'I am [number] years old.',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_5_1',
        type: 'multiple_choice',
        prompt: 'Choose the correct sentence:',
        options: [
          { id: 'opt_1', text: 'I am 28 years old.', isCorrect: true },
          { id: 'opt_2', text: 'I have 28 years.', isCorrect: false },
          { id: 'opt_3', text: 'I has 28 years old.', isCorrect: false },
        ],
        correctAnswer: 'I am 28 years old.',
        explanation: 'Age is always expressed with the verb to be.',
      },
    },
    {
      id: 'turn_a1_5_2',
      turnIndex: 2,
      partnerPrompt:
        'Got it down! And what is your email address so we can send you book due date reminders?',
      partnerAudioText: 'Got it down! And what is your email address so we can send you book due date reminders?',
      partnerQuestionHindi: 'मैंने लिख लिया! और आपका ईमेल पता क्या है ताकि हम आपको किताबों की नियत तारीख के रिमाइंडर भेज सकें?',
      expectedFunction: 'Provide Email & Ask Hours',
      contextGoal: 'State your email address clearly and ask Marco what time the library closes.',
      targetVocabulary: ['email', 'address', 'time', 'close', 'what'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'My email address is student@email.com. What time does the library close today?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'It is alex@mail.com. What time do you close in the evening?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'My email is user@domain.com. When do you close?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Email Address',
          patterns: ['email', 'email address is', '@', 'my email is', 'mail.com', 'email.com'],
          required: true,
        },
        {
          name: 'Closing Time Inquiry',
          patterns: ['what time', 'close', 'when do you close', 'what time does', 'hours'],
          required: false,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_5_2',
        type: 'fill_blank',
        prompt: 'Complete the inquiry: "What ___ does the library close tonight?"',
        options: [
          { id: 'opt_1', text: 'time', isCorrect: true },
          { id: 'opt_2', text: 'hour', isCorrect: false },
          { id: 'opt_3', text: 'clock', isCorrect: false },
        ],
        correctAnswer: 'time',
        explanation: '"What time" is the standard phrase for asking clock times.',
      },
    },
    {
      id: 'turn_a1_5_3',
      turnIndex: 3,
      partnerPrompt:
        'We are open until 8 o’clock tonight! Here is your brand new library card. Enjoy reading!',
      partnerAudioText: 'We are open until 8 o’clock tonight! Here is your brand new library card. Enjoy reading!',
      partnerQuestionHindi: 'हम आज रात 8 बजे तक खुले हैं! यह रहा आपका बिल्कुल नया लाइब्रेरी कार्ड। पढ़ने का आनंद लें!',
      expectedFunction: 'Thank & Closing',
      contextGoal: 'Thank Marco for the card and wish him a good evening.',
      targetVocabulary: ['thank', 'card', 'evening', 'goodbye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you so much Marco! Have a wonderful evening, goodbye.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thanks a lot for the card! Have a good day, bye.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Awesome, thanks Marco! Goodbye.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Gratitude',
          patterns: ['thank you', 'thanks', 'have a wonderful evening', 'have a good day', 'goodbye', 'bye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_5_3',
        type: 'multiple_choice',
        prompt: 'Which response is polite when receiving a service card?',
        options: [
          { id: 'opt_1', text: 'Thank you so much, have a great day!', isCorrect: true },
          { id: 'opt_2', text: 'Give me the card now.', isCorrect: false },
          { id: 'opt_3', text: 'Card is take.', isCorrect: false },
        ],
        correctAnswer: 'Thank you so much, have a great day!',
        explanation: 'Courteous acknowledgment when receiving service.',
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
