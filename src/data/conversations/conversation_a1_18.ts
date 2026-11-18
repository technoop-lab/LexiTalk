import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_18: ConversationDefinition = {
  id: 'conv_a1_18',
  title: 'Comparing Daily Routines & Work Schedules',
  cefr: 'A1',
  unitId: 'unit_a1_2',
  lessonLinks: ['lesson_a1_2_18'],
  estimatedMinutes: 5,
  scenario:
    'You are having a morning coffee break with your coworker, David. He asks about your daily schedule from morning until evening.',
  communicativeGoals: [
    'Describe your morning routine using sequential connectors (First, Then, After that)',
    'State what time you wake up, leave the house, and start work',
    'Explain your evening wind-down routine using "Finally" and "Next"',
    'Ask your coworker about his daily habits and schedule',
  ],
  canDoStatements: [
    'Can describe a typical day from morning to night using time sequence connectors (CEFR A1)',
    'Can state specific times for daily activities ("at 7:00 AM", "in the evening")',
    'Can ask and answer questions about daily routines',
  ],
  characters: [
    {
      id: 'char_david',
      name: 'David',
      role: 'Coworker',
      avatar: '👨‍💻',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'wake up',
        ipa: '/weɪk ʌp/',
        partOfSpeech: 'phrasal verb',
        meaning: 'To stop sleeping and become awake',
        exampleSentence: 'I usually wake up at 6:30 AM every morning.',
        translations: { hi: 'जागना / नींद से उठना' },
      },
      {
        word: 'breakfast',
        ipa: '/ˈbrɛkfəst/',
        partOfSpeech: 'noun',
        meaning: 'The first meal of the day, usually eaten in the morning',
        exampleSentence: 'First, I have a healthy breakfast with oats and fruit.',
        translations: { hi: 'नाश्ता' },
      },
      {
        word: 'leave',
        ipa: '/liːv/',
        partOfSpeech: 'verb',
        meaning: 'To go away from a place',
        exampleSentence: 'I leave my apartment at 8:00 AM.',
        translations: { hi: 'निकलना / प्रस्थान करना' },
      },
      {
        word: 'relax',
        ipa: '/rɪˈlæks/',
        partOfSpeech: 'verb',
        meaning: 'To rest and do something enjoyable',
        exampleSentence: 'In the evening, I relax and read a book.',
        translations: { hi: 'आराम करना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'First, I...',
        functionCategory: 'Time Sequence',
        exampleSentence: 'First, I drink a large glass of warm water.',
      },
      {
        phrase: 'Then, I...',
        functionCategory: 'Time Sequence',
        exampleSentence: 'Then, I take a shower and get dressed.',
      },
      {
        phrase: 'After that,...',
        functionCategory: 'Time Sequence',
        exampleSentence: 'After that, I prepare a quick lunch.',
      },
      {
        phrase: 'Finally, I go to bed at...',
        functionCategory: 'Time Sequence',
        exampleSentence: 'Finally, I go to bed at 10:30 PM.',
      },
    ],
    grammar: {
      title: 'Time Sequence Connectors & Simple Present for Routines',
      conceptExplanation:
        'Use connectors (First, Then, After that, Next, Finally) followed by simple present verbs with "I" to tell your daily schedule in logical chronological order. Use "at" for specific clock times (e.g. "at 7:00 AM").',
      patternFormula: '[Sequence Word], I + [Base Verb] + [Time/Activity]',
      contrastExamples: [
        {
          incorrect: 'First I am waking up at 7.',
          correct: 'First, I wake up at 7:00 AM.',
          explanation: 'Use the simple present "wake up" for habitual daily routines, not the present continuous.',
        },
        {
          incorrect: 'After I leave the house.',
          correct: 'After that, I leave the house.',
          explanation: 'Use "After that," as a transition linker when starting a full sentence.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'David',
        text: 'Good morning! You look energized today. What is your morning routine before work?',
        translation: 'सुप्रभात! आप आज काफी तरोताज़ा लग रहे हैं। काम से पहले आपकी सुबह की दिनचर्या क्या है?',
      },
      {
        speaker: 'You',
        text: 'First, I wake up at 6:30. Then, I exercise and have breakfast. After that, I take the bus to work.',
        translation: 'पहले, मैं 6:30 बजे उठता हूँ। फिर, मैं व्यायाम करता हूँ और नाश्ता करता हूँ। उसके बाद, मैं काम के लिए बस पकड़ता हूँ।',
      },
      {
        speaker: 'David',
        text: 'That sounds very organized! What do you usually do in the evening after work?',
        translation: 'यह बहुत व्यवस्थित लगता है! काम के बाद शाम को आप आमतौर पर क्या करते हैं?',
      },
      {
        speaker: 'You',
        text: 'Next, I cook dinner around 7:30. Finally, I read a book and go to sleep at 11:00 PM.',
        translation: 'उसके बाद, मैं लगभग 7:30 बजे खाना बनाता हूँ। अंत में, मैं एक किताब पढ़ता हूँ और रात 11:00 बजे सो जाता हूँ।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_18_1',
      type: 'fill_blank',
      prompt: 'Complete the sequence linker: "___ that, I leave for the train station."',
      options: [
        { id: 'opt_1', text: 'After', isCorrect: true },
        { id: 'opt_2', text: 'Later', isCorrect: false },
        { id: 'opt_3', text: 'Behind', isCorrect: false },
      ],
      correctAnswer: 'After',
      explanation: '"After that," is the standard transition chunk.',
    },
    {
      id: 'cp_a1_18_2',
      type: 'multiple_choice',
      prompt: 'Which preposition is used with clock times?',
      options: [
        { id: 'opt_1', text: 'at 8:00 AM', isCorrect: true },
        { id: 'opt_2', text: 'in 8:00 AM', isCorrect: false },
        { id: 'opt_3', text: 'on 8:00 AM', isCorrect: false },
      ],
      correctAnswer: 'at 8:00 AM',
      explanation: 'Use "at" for specific hours and clock times.',
    },
    {
      id: 'cp_a1_18_3',
      type: 'chunk_order',
      prompt: 'Put the sequence connectors in chronological order: [Finally, Then, First]',
      options: [
        { id: 'opt_1', text: 'First → Then → Finally', isCorrect: true },
        { id: 'opt_2', text: 'Then → First → Finally', isCorrect: false },
        { id: 'opt_3', text: 'Finally → Then → First', isCorrect: false },
      ],
      correctAnswer: 'First → Then → Finally',
      explanation: '"First" begins the narrative, "Then" continues it, and "Finally" concludes it.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_18_1',
      scenarioContext: 'Describe your morning wake-up and breakfast sequence.',
      prompt: 'Build: "First, I wake up and then I make breakfast."',
      targetStructure: 'Sequence linker + clause + coordinator + clause',
      wordBank: ['First', 'I', 'wake', 'up', 'and', 'then', 'I', 'make', 'breakfast', 'am', 'waking'],
      acceptableSolutions: [
        'First I wake up and then I make breakfast',
        'First, I wake up and then I make breakfast.',
      ],
      explanation: 'Clean chronological sequencing of morning habits.',
    },
    {
      id: 'sc_a1_18_2',
      scenarioContext: 'Describe what you do before going to bed at night.',
      prompt: 'Build: "Finally, I read a book and go to sleep at eleven."',
      targetStructure: 'Concluding connector + parallel verbs + time phrase',
      wordBank: ['Finally', 'I', 'read', 'a', 'book', 'and', 'go', 'to', 'sleep', 'at', 'eleven', 'in'],
      acceptableSolutions: [
        'Finally I read a book and go to sleep at eleven',
        'Finally, I read a book and go to sleep at eleven.',
      ],
      explanation: 'Uses "Finally" to mark the end of the daily routine.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_18_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey there! You always arrive at the office so punctual. What is your morning routine like before you head out?',
      partnerAudioText:
        'Hey there! You always arrive at the office so punctual. What is your morning routine like before you head out?',
      partnerQuestionHindi:
        'अरे! आप हमेशा ऑफिस समय पर पहुँचते हैं। निकलने से पहले आपकी सुबह की दिनचर्या कैसी होती है?',
      expectedFunction: 'Describe Morning Sequence',
      contextGoal:
        'Explain what you do first in the morning using sequence words (e.g. "First I wake up at...", "Then I have breakfast").',
      targetVocabulary: ['first', 'wake up', 'breakfast', 'then', 'shower', 'coffee'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'First, I wake up at 6:30 AM. Then, I have coffee and eat breakfast before leaving.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'First, I exercise. Then, I take a shower and make a quick breakfast.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I get up early at 6:00. After that, I make coffee and head straight out.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Morning Sequence',
          patterns: ['first', 'wake up', 'get up', 'then', 'breakfast', 'coffee', 'shower', 'after that'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'continuous_for_routine_error',
          pattern: /\bi am waking up\b/i,
          errorType: 'grammar',
          message: 'Say "I wake up" for regular daily routines, not "I am waking up".',
          correctionPattern: 'First, I wake up at...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_18_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "Every morning, I ___ up at 7:00 AM."',
        options: [
          { id: 'opt_1', text: 'wake', isCorrect: true },
          { id: 'opt_2', text: 'am waking', isCorrect: false },
          { id: 'opt_3', text: 'wakes', isCorrect: false },
        ],
        correctAnswer: 'wake',
        explanation: 'Simple present "I wake" describes habitual daily actions.',
      },
    },
    {
      id: 'turn_a1_18_2',
      turnIndex: 2,
      partnerPrompt:
        'That is very efficient! And what happens when your workday finishes? What is your evening routine?',
      partnerAudioText:
        'That is very efficient! And what happens when your workday finishes? What is your evening routine?',
      partnerQuestionHindi:
        'यह बहुत कुशल है! और जब आपका काम खत्म होता है तब क्या होता है? आपकी शाम की दिनचर्या क्या है?',
      expectedFunction: 'Describe Evening Routine',
      contextGoal:
        'Describe evening activities using transitions like "After that", "Then", or "Finally" (e.g. cooking dinner, relaxing, sleeping).',
      targetVocabulary: ['after that', 'dinner', 'relax', 'finally', 'sleep', 'bed'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'After that, I cook dinner around 7:00 PM. Finally, I relax and go to bed at 10:30.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Then, I go for a walk and have dinner. Finally, I read and sleep.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I make a simple meal, watch the news, and finally go to sleep by 11:00.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Evening Sequence',
          patterns: ['after that', 'dinner', 'finally', 'relax', 'cook', 'read', 'go to bed', 'sleep'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'wrong_preposition_time',
          pattern: /\bin (10|11|12|7|8|9)(:00)? (am|pm)?\b/i,
          errorType: 'grammar',
          message: 'Use "at" with specific clock times (e.g. "at 10:30 PM", not "in 10:30 PM").',
          correctionPattern: 'at [Time]...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_18_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly expresses bedtime?',
        options: [
          { id: 'opt_1', text: 'Finally, I go to bed at 11:00 PM.', isCorrect: true },
          { id: 'opt_2', text: 'Finally, I go to bed in 11:00 PM.', isCorrect: false },
          { id: 'opt_3', text: 'Finally, I am go bed at 11:00 PM.', isCorrect: false },
        ],
        correctAnswer: 'Finally, I go to bed at 11:00 PM.',
        explanation: 'Use "at" for clock times with simple present "I go to bed".',
      },
    },
    {
      id: 'turn_a1_18_3',
      turnIndex: 3,
      partnerPrompt:
        'A relaxing evening makes such a difference. What about you, do you usually wake up early on weekends too, or do you sleep in?',
      partnerAudioText:
        'A relaxing evening makes such a difference. What about you, do you usually wake up early on weekends too, or do you sleep in?',
      partnerQuestionHindi:
        'एक सुकून भरी शाम बहुत फर्क पैदा करती है। आपके बारे में क्या, क्या आप वीकेंड पर भी जल्दी उठते हैं, या देर तक सोते हैं?',
      expectedFunction: 'Contrast Habits & Ask Reciprocal Question',
      contextGoal:
        'State your weekend routine and ask David what he does on weekends.',
      targetVocabulary: ['weekend', 'sleep in', 'relax', 'what about you', 'saturday'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'On weekends, I usually sleep in until 8:30 and take it easy. What do you do on weekends, David?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I sleep late on Saturday and relax. How about you, David?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I like to sleep in on weekends! What is your weekend routine like?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Weekend Statement',
          patterns: ['on weekends', 'sleep in', 'wake up late', 'relax', 'sleep late', 'take it easy'],
          required: true,
        },
        {
          name: 'Reciprocal Question',
          patterns: ['what about you', 'how about you', 'what do you do', 'and you', 'david'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_18_3',
        type: 'multiple_choice',
        prompt: 'Which is the natural question to ask your coworker about his weekend habits?',
        options: [
          { id: 'opt_1', text: 'What do you do on weekends, David?', isCorrect: true },
          { id: 'opt_2', text: 'What you are doing weekend?', isCorrect: false },
          { id: 'opt_3', text: 'How do you weekend make?', isCorrect: false },
        ],
        correctAnswer: 'What do you do on weekends, David?',
        explanation: '"What do you do on weekends?" is the standard question for habitual weekend activities.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 70,
  },
};
