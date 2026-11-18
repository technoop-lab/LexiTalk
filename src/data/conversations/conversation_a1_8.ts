import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_8: ConversationDefinition = {
  id: 'conv_a1_8',
  title: 'Morning Coffee Chat: Daily Routines',
  cefr: 'A1',
  unitId: 'unit_a1_1',
  lessonLinks: ['lesson_a1_1_8'],
  estimatedMinutes: 5,
  scenario:
    'You are in the office breakroom making morning coffee. Your coworker Lucas joins you and asks about your morning schedule and daily commute.',
  communicativeGoals: [
    'Describe personal morning routines (wake up, eat breakfast, drink coffee/tea, leave home)',
    'Use Present Simple affirmative verbs with "I" and "we" without auxiliary errors',
    'State time of activities using preposition "at" (at 7:00, at 8:30)',
    'Recycle transportation and city location concepts from Lessons 5 & 7',
  ],
  canDoStatements: [
    'Can describe daily routines and schedules using simple present verbs (CEFR A1)',
    'Can specify times of daily events with "at + [time]"',
    'Can ask a colleague about their morning routine',
  ],
  characters: [
    {
      id: 'char_lucas',
      name: 'Lucas',
      role: 'Coworker & Team Member',
      avatar: '☕',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'wake up',
        ipa: '/weɪk ʌp/',
        partOfSpeech: 'verb',
        meaning: 'To stop sleeping and become conscious',
        exampleSentence: 'I wake up at 6:30 every morning.',
        translations: { hi: 'नींद से जागना' },
      },
      {
        word: 'breakfast',
        ipa: '/ˈbrekfəst/',
        partOfSpeech: 'noun',
        meaning: 'The first meal of the day',
        exampleSentence: 'I eat breakfast with my family.',
        translations: { hi: 'नाश्ता' },
      },
      {
        word: 'commute',
        ipa: '/kəˈmjuːt/',
        partOfSpeech: 'verb',
        meaning: 'To travel some distance between one’s home and place of work',
        exampleSentence: 'I commute by train every day.',
        translations: { hi: 'घर और काम के बीच यात्रा करना' },
      },
      {
        word: 'start',
        ipa: '/stɑːt/',
        partOfSpeech: 'verb',
        meaning: 'To begin an activity or job',
        exampleSentence: 'We start work at 9 o’clock.',
        translations: { hi: 'शुरू करना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I wake up at...',
        functionCategory: 'Stating Wake Time',
        exampleSentence: 'I wake up at 7 o’clock.',
      },
      {
        phrase: 'I have / eat breakfast at...',
        functionCategory: 'Stating Meal Habit',
        exampleSentence: 'I have coffee and toast at home.',
      },
      {
        phrase: 'I leave home at...',
        functionCategory: 'Stating Departure Time',
        exampleSentence: 'I leave home around 8:15.',
      },
      {
        phrase: 'What time do you usually wake up?',
        functionCategory: 'Inquiring Routine',
        exampleSentence: 'What time do you wake up on weekdays?',
      },
    ],
    grammar: {
      title: 'Present Simple Affirmative (I, You, We, They)',
      conceptExplanation:
        'With subjects I, you, we, and they, use the base form of the verb (wake, eat, drink, start). Do NOT insert "am" or "is" before base verbs (e.g. say "I drink coffee", NOT "I am drink coffee").',
      patternFormula: 'Subject (I/You/We/They) + [Base Verb] + at [Time]',
      contrastExamples: [
        {
          incorrect: 'I am wake up at 7 am.',
          correct: 'I wake up at 7 am.',
          explanation: 'Present Simple habitual actions do not use auxiliary "am".',
        },
        {
          incorrect: 'We starts work at 9.',
          correct: 'We start work at 9.',
          explanation: 'Plural subject "We" takes the uninflected base verb "start" (no "-s").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Lucas',
        text: 'Morning! You look energized today. What time do you usually wake up?',
        translation: 'शुभ प्रभात! आप आज बहुत तरोताज़ा लग रहे हैं। आप आमतौर पर किस समय उठते हैं?',
      },
      {
        speaker: 'You',
        text: 'Good morning Lucas! I usually wake up at 6:30 am and drink some tea.',
        translation: 'शुभ प्रभात लुकास! मैं आमतौर पर सुबह 6:30 बजे उठता हूँ और थोड़ी चाय पीता हूँ।',
      },
      {
        speaker: 'Lucas',
        text: 'Nice! Do you eat breakfast at home or grab something on the way?',
        translation: 'बढ़िया! क्या आप घर पर नाश्ता करते हैं या रास्ते में कुछ ले लेते हैं?',
      },
      {
        speaker: 'You',
        text: 'I eat breakfast at home with my family, then I take the metro at 8:00.',
        translation: 'मैं अपने परिवार के साथ घर पर नाश्ता करता हूँ, फिर 8:00 बजे मेट्रो पकड़ता हूँ।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_8_1',
      type: 'multiple_choice',
      prompt: 'Select the correct sentence for daily habits:',
      options: [
        { id: 'opt_1', text: 'I wake up at 7 o’clock.', isCorrect: true },
        { id: 'opt_2', text: 'I am wake up at 7 o’clock.', isCorrect: false },
        { id: 'opt_3', text: 'I waking up at 7 o’clock.', isCorrect: false },
      ],
      correctAnswer: 'I wake up at 7 o’clock.',
      explanation: 'Use base verb "wake up" without "am" for simple present routines.',
    },
    {
      id: 'cp_a1_8_2',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "We ___ work at 9 o’clock every morning."',
      options: [
        { id: 'opt_1', text: 'start', isCorrect: true },
        { id: 'opt_2', text: 'starts', isCorrect: false },
        { id: 'opt_3', text: 'starting', isCorrect: false },
      ],
      correctAnswer: 'start',
      explanation: 'Subject "We" takes base form "start".',
    },
    {
      id: 'cp_a1_8_3',
      type: 'multiple_choice',
      prompt: 'Which preposition is used with clock times?',
      options: [
        { id: 'opt_1', text: 'at', isCorrect: true },
        { id: 'opt_2', text: 'in', isCorrect: false },
        { id: 'opt_3', text: 'on', isCorrect: false },
      ],
      correctAnswer: 'at',
      explanation: 'Always use "at" before clock times (at 7:00, at 8:30).',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_8_1',
      scenarioContext: 'Describe your morning wake time and breakfast.',
      prompt: 'Build: "I wake up at seven and eat breakfast at home."',
      targetStructure: 'Subject + verb 1 + time phrase + conjunction + verb 2 + noun + location',
      wordBank: ['I', 'wake', 'up', 'at', 'seven', 'and', 'eat', 'breakfast', 'at', 'home', 'am', 'starts'],
      acceptableSolutions: [
        'I wake up at seven and eat breakfast at home',
        'I wake up at seven and eat breakfast at home.',
        'I get up at seven and eat breakfast at home.',
      ],
      explanation: 'Accurately uses present simple verbs and time prepositions.',
    },
    {
      id: 'sc_a1_8_2',
      scenarioContext: 'Ask a colleague about their morning commute time.',
      prompt: 'Build: "What time do you leave home in the morning?"',
      targetStructure: 'WH-phrase + auxiliary do + subject + verb + object + time phrase',
      wordBank: ['What', 'time', 'do', 'you', 'leave', 'home', 'in', 'the', 'morning', 'are', 'is', 'does'],
      acceptableSolutions: [
        'What time do you leave home in the morning',
        'What time do you leave home in the morning?',
        'What time do you leave home?',
      ],
      explanation: 'Standard question structure for daily routine schedules.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_8_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning! Grabbing some coffee? What time do you usually wake up on weekdays?',
      partnerAudioText: 'Good morning! Grabbing some coffee? What time do you usually wake up on weekdays?',
      partnerQuestionHindi: 'शुभ प्रभात! थोड़ी कॉफ़ी ले रहे हैं? आप कार्यदिवसों में आमतौर पर किस समय उठते हैं?',
      expectedFunction: 'State Wake-Up Time & Habit',
      contextGoal: 'Explain what time you wake up and mention getting coffee or breakfast.',
      targetVocabulary: ['wake', 'up', 'at', 'eat', 'breakfast', 'drink', 'coffee'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Good morning Lucas! I wake up at 6:30 am, drink coffee, and eat toast.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hi! I get up at 7 o’clock and have a quick breakfast.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I wake up around 6:00 and exercise before breakfast.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Wake Time Habit',
          patterns: [
            'wake up at',
            'get up at',
            'wake up around',
            '6:00',
            '6:30',
            '7:00',
            '7:30',
            'drink coffee',
            'eat breakfast',
            'have breakfast',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'am_wake_error',
          pattern: /\bi am wake up\b|\bi am get up\b/i,
          errorType: 'grammar',
          message: 'Say "I wake up at..." without "am" (e.g. "I wake up at 7:00").',
          correctionPattern: 'I wake up at [Time]',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_8_1',
        type: 'multiple_choice',
        prompt: 'Choose the grammatically correct sentence:',
        options: [
          { id: 'opt_1', text: 'I wake up at 7:00 am.', isCorrect: true },
          { id: 'opt_2', text: 'I am wake up at 7:00 am.', isCorrect: false },
          { id: 'opt_3', text: 'I is waking at 7:00 am.', isCorrect: false },
        ],
        correctAnswer: 'I wake up at 7:00 am.',
        explanation: 'Present simple routine sentences do not use "am".',
      },
    },
    {
      id: 'turn_a1_8_2',
      turnIndex: 2,
      partnerPrompt:
        'That is early! How do you commute to work, and what time do you usually leave your home?',
      partnerAudioText: 'That is early! How do you commute to work, and what time do you usually leave your home?',
      partnerQuestionHindi: 'वह तो काफी जल्दी है! आप काम पर कैसे आते-जाते हैं, और आप आमतौर पर अपने घर से किस समय निकलते हैं?',
      expectedFunction: 'Describe Commute & Departure Time',
      contextGoal: 'Explain how you travel to work (bus, train, car, walk) and what time you leave, then ask Lucas about his commute.',
      targetVocabulary: ['leave', 'home', 'at', 'by', 'bus', 'train', 'metro', 'car', 'walk', 'what', 'you'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I leave home at 8:00 and commute by metro. What time do you arrive, Lucas?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I take the bus at 8:15. Do you drive your car to the office?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I walk to the office since I live nearby. What about you?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Departure & Commute',
          patterns: ['leave home at', 'leave at', 'by metro', 'by bus', 'by train', 'take the bus', 'take the train', 'drive', 'walk'],
          required: true,
        },
        {
          name: 'Reciprocal Inquiry',
          patterns: ['what about you', 'and you', 'do you drive', 'how do you commute', 'what time do you arrive'],
          required: false,
        },
      ],
      commonMistakeRules: [
        {
          id: 'preposition_transport',
          pattern: /\bby the bus\b|\bon car\b/i,
          errorType: 'grammar',
          message: 'Say "by bus", "by car", "by train", or "take the bus".',
          correctionPattern: 'by bus / by car / take the train',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_8_2',
        type: 'fill_blank',
        prompt: 'Choose the correct preposition: "I commute ___ train every day."',
        options: [
          { id: 'opt_1', text: 'by', isCorrect: true },
          { id: 'opt_2', text: 'on', isCorrect: false },
          { id: 'opt_3', text: 'with', isCorrect: false },
        ],
        correctAnswer: 'by',
        explanation: 'Use "by" for modes of transport (by train, by car, by bus).',
      },
    },
    {
      id: 'turn_a1_8_3',
      turnIndex: 3,
      partnerPrompt:
        'I drive my car and get here around 8:45. Well, the morning team meeting starts at 9:00, let us head back to our desks!',
      partnerAudioText: 'I drive my car and get here around 8:45. Well, the morning team meeting starts at 9:00, let us head back to our desks!',
      partnerQuestionHindi: 'मैं अपनी कार चलाता हूँ और लगभग 8:45 बजे यहाँ पहुँचता हूँ। खैर, सुबह की टीम मीटिंग 9:00 बजे शुरू होती है, चलिए अपनी डेस्क पर वापस चलते हैं!',
      expectedFunction: 'Transition & Closing',
      contextGoal: 'Agree to head to the meeting and wish Lucas a productive workday.',
      targetVocabulary: ['meeting', 'start', 'let', 'go', 'good', 'work'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes, let us go! Have a great and productive day, Lucas.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Sounds good! See you in the meeting.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Let us head over. See you inside!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Workplace Agreement & Closing',
          patterns: ['let us go', 'see you in the meeting', 'sounds good', 'have a great day', 'see you inside', 'meeting'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_8_3',
        type: 'multiple_choice',
        prompt: 'Which phrase is natural before attending a scheduled team meeting?',
        options: [
          { id: 'opt_1', text: 'See you in the meeting!', isCorrect: true },
          { id: 'opt_2', text: 'Meeting is see you!', isCorrect: false },
          { id: 'opt_3', text: 'Make meeting well!', isCorrect: false },
        ],
        correctAnswer: 'See you in the meeting!',
        explanation: 'Natural colleague closing statement.',
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
