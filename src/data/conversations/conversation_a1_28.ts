import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_28: ConversationDefinition = {
  id: 'conv_a1_28',
  title: 'Talking About Yesterday\'s Activities with Regular Past Verbs',
  cefr: 'A1',
  unitId: 'unit_a1_2',
  lessonLinks: ['lesson_a1_2_28'],
  estimatedMinutes: 5,
  scenario:
    'You meet your colleague, Emily, in the office pantry on Monday morning. She asks how your weekend and yesterday went, and what you did around the house.',
  communicativeGoals: [
    'Narrate past events using regular past tense verbs with "-ed" (walked, cooked, cleaned, visited, watched, played)',
    'Use past time adverbials correctly (yesterday, last night, yesterday evening, last weekend)',
    'Form past simple negative sentences using "didn\'t + base verb" (didn\'t work, didn\'t watch TV)',
    'Ask reciprocal questions about your friend\'s past activities',
  ],
  canDoStatements: [
    'Can describe past activities using regular simple past verbs (CEFR A1)',
    'Can use past time markers ("yesterday", "last night", "two days ago")',
    'Can ask and answer simple questions about what someone did yesterday',
  ],
  characters: [
    {
      id: 'char_emily',
      name: 'Emily',
      role: 'Colleague',
      avatar: '👩‍💼',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'yesterday',
        ipa: '/ˈjɛstərdeɪ/',
        partOfSpeech: 'adverb / noun',
        meaning: 'On the day before today',
        exampleSentence: 'Yesterday, I stayed at home and rested.',
        translations: { hi: 'कल (बीता हुआ)' },
      },
      {
        word: 'cleaned',
        ipa: '/kliːnd/',
        partOfSpeech: 'verb (past)',
        meaning: 'Made free of dirt, marks, or mess',
        exampleSentence: 'I cleaned my entire apartment yesterday afternoon.',
        translations: { hi: 'सफाई की' },
      },
      {
        word: 'visited',
        ipa: '/ˈvɪzɪtɪd/',
        partOfSpeech: 'verb (past)',
        meaning: 'Went to see and spend time with someone socially',
        exampleSentence: 'Last night, I visited my grandparents.',
        translations: { hi: 'मुलाकात की / मिलने गया' },
      },
      {
        word: 'cooked',
        ipa: '/kʊkt/',
        partOfSpeech: 'verb (past)',
        meaning: 'Prepared food by combining and heating ingredients',
        exampleSentence: 'We cooked a delicious vegetable curry.',
        translations: { hi: 'खाना पकाया' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Yesterday, I...',
        functionCategory: 'Past Narrative',
        exampleSentence: 'Yesterday, I walked in the park for an hour.',
      },
      {
        phrase: 'Last night, I...',
        functionCategory: 'Past Narrative',
        exampleSentence: 'Last night, I watched an exciting movie.',
      },
      {
        phrase: 'I didn\'t...',
        functionCategory: 'Past Negative',
        exampleSentence: 'I didn\'t work at all on Sunday.',
      },
      {
        phrase: 'What did you do yesterday?',
        functionCategory: 'Past Inquiry',
        exampleSentence: 'What did you do yesterday afternoon?',
      },
    ],
    grammar: {
      title: 'Simple Past Tense: Regular Verbs (-ed) & Past Time Expressions',
      conceptExplanation:
        'Add "-ed" or "-d" to regular verbs to express completed actions in the past (cook → cooked, clean → cleaned, visit → visited, walk → walked). For negatives, use "did not / didn\'t + base verb" (I didn\'t cook). For questions, use "Did you + base verb?".',
      patternFormula: 'Subject + [Verb-ed] + [Past Time Marker] | Subject + didn\'t + [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'Yesterday I cook pasta and clean room.',
          correct: 'Yesterday, I cooked pasta and cleaned my room.',
          explanation: 'Use the past tense form "-ed" for completed past actions.',
        },
        {
          incorrect: 'I didn\'t cooked dinner yesterday.',
          correct: 'I didn\'t cook dinner yesterday.',
          explanation: 'After the auxiliary "didn\'t", always use the base form of the main verb.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Emily',
        text: 'Good morning! How was your Sunday? What did you do yesterday?',
        translation: 'सुप्रभात! आपका रविवार कैसा रहा? आपने कल क्या किया?',
      },
      {
        speaker: 'You',
        text: 'Good morning Emily! Yesterday, I cleaned my apartment, walked in the park, and cooked dinner.',
        translation: 'सुप्रभात एमिली! कल मैंने अपने अपार्टमेंट की सफाई की, पार्क में टहला, और रात का खाना बनाया।',
      },
      {
        speaker: 'Emily',
        text: 'That sounds like a productive day! Did you watch the football match last night?',
        translation: 'यह काफी उपयोगी दिन लगता है! क्या आपने कल रात फुटबॉल मैच देखा?',
      },
      {
        speaker: 'You',
        text: 'No, I didn\'t watch the match. I visited my parents and listened to music instead. What about you?',
        translation: 'नहीं, मैंने मैच नहीं देखा। इसके बजाय मैं अपने माता-पिता से मिलने गया और संगीत सुना। आपके बारे में क्या?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_28_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the past form: "Yesterday, I ___ (clean) my kitchen."',
      options: [
        { id: 'opt_1', text: 'cleaned', isCorrect: true },
        { id: 'opt_2', text: 'clean', isCorrect: false },
        { id: 'opt_3', text: 'cleaning', isCorrect: false },
      ],
      correctAnswer: 'cleaned',
      explanation: 'Regular past tense of clean is "cleaned".',
    },
    {
      id: 'cp_a1_28_2',
      type: 'multiple_choice',
      prompt: 'Which sentence is grammatically correct for a negative past action?',
      options: [
        { id: 'opt_1', text: 'I didn\'t watch television yesterday.', isCorrect: true },
        { id: 'opt_2', text: 'I didn\'t watched television yesterday.', isCorrect: false },
        { id: 'opt_3', text: 'I not watched television yesterday.', isCorrect: false },
      ],
      correctAnswer: 'I didn\'t watch television yesterday.',
      explanation: 'Use "didn\'t" + base verb "watch".',
    },
    {
      id: 'cp_a1_28_3',
      type: 'multiple_choice',
      prompt: 'Which time phrase points to the previous evening?',
      options: [
        { id: 'opt_1', text: 'last night', isCorrect: true },
        { id: 'opt_2', text: 'next night', isCorrect: false },
        { id: 'opt_3', text: 'the yesterday night', isCorrect: false },
      ],
      correctAnswer: 'last night',
      explanation: '"last night" is the standard phrase for the previous night.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_28_1',
      scenarioContext: 'Describe yesterday\'s home chores.',
      prompt: 'Build: "Yesterday, I cleaned my room and cooked dinner."',
      targetStructure: 'Past adverbial + subject + past verb + object + coordinator + past verb + object',
      wordBank: ['Yesterday', 'I', 'cleaned', 'my', 'room', 'and', 'cooked', 'dinner', 'clean', 'cook', 'was'],
      acceptableSolutions: [
        'Yesterday I cleaned my room and cooked dinner',
        'Yesterday, I cleaned my room and cooked dinner.',
      ],
      explanation: 'Compound regular past verbs with past time marker.',
    },
    {
      id: 'sc_a1_28_2',
      scenarioContext: 'State that you did not watch TV and visited family instead.',
      prompt: 'Build: "I didn\'t watch TV, I visited my family."',
      targetStructure: 'Negative past clause + affirmative past clause',
      wordBank: ['I', 'didn\'t', 'watch', 'TV', 'I', 'visited', 'my', 'family', 'watched', 'visit', 'not'],
      acceptableSolutions: [
        'I didn\'t watch TV I visited my family',
        'I didn\'t watch TV, I visited my family.',
      ],
      explanation: 'Proper contrast between negative auxiliary and affirmative past form.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_28_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning! Happy Monday. Did you have a restful weekend? What did you do yesterday?',
      partnerAudioText:
        'Good morning! Happy Monday. Did you have a restful weekend? What did you do yesterday?',
      partnerQuestionHindi:
        'सुप्रभात! सोमवार की शुभकामनाएं। क्या आपका सप्ताहांत सुकून भरा रहा? आपने कल क्या किया?',
      expectedFunction: 'Narrate Past Routine with Regular Verbs',
      contextGoal:
        'Describe at least two things you did yesterday using regular past tense verbs (e.g. cleaned, cooked, walked, rested, watched).',
      targetVocabulary: ['yesterday', 'cleaned', 'cooked', 'walked', 'rested', 'visited', 'stayed'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Good morning! Yesterday, I cleaned my apartment, walked in the park, and cooked a nice dinner.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I stayed home yesterday, rested, and watched a good movie.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Yesterday was quiet. I visited friends and cooked for the week.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Regular Past Actions',
          patterns: ['cleaned', 'cooked', 'walked', 'visited', 'rested', 'watched', 'stayed', 'played', 'listened'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'present_for_past_yesterday_error',
          pattern: /\byesterday i (clean|cook|walk|visit|watch|stay)\b/i,
          errorType: 'grammar',
          message: 'Add "-ed" to regular verbs when describing yesterday (e.g. cleaned, cooked, walked).',
          correctionPattern: 'Yesterday, I [verb-ed]...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_28_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "Yesterday, I ___ (walk) five kilometers."',
        options: [
          { id: 'opt_1', text: 'walked', isCorrect: true },
          { id: 'opt_2', text: 'walk', isCorrect: false },
          { id: 'opt_3', text: 'was walk', isCorrect: false },
        ],
        correctAnswer: 'walked',
        explanation: 'Regular past tense takes "-ed": "walked".',
      },
    },
    {
      id: 'turn_a1_28_2',
      turnIndex: 2,
      partnerPrompt:
        'Sounds like a relaxing day! Did you study or work on any office reports over the weekend?',
      partnerAudioText:
        'Sounds like a relaxing day! Did you study or work on any office reports over the weekend?',
      partnerQuestionHindi:
        'लगता है काफी सुकून भरा दिन था! क्या आपने सप्ताहांत में पढ़ाई की या ऑफिस की किसी रिपोर्ट पर काम किया?',
      expectedFunction: 'Express Negative Past with "didn\'t" & Contrast',
      contextGoal:
        'State that you didn\'t work or didn\'t study using "didn\'t + base verb", and describe what you did instead.',
      targetVocabulary: ['didn\'t work', 'didn\'t study', 'instead', 'relaxed', 'listened'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'No, I didn\'t work at all! I wanted to relax, so I listened to music and read.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I didn\'t study yesterday. I rested completely.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'No work for me! I just relaxed and chatted with family.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Past Negative / Contrast',
          patterns: ['didn\'t work', 'didn\'t study', 'did not work', 'no work', 'relaxed', 'listened', 'rested'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'didnt_with_ed_error',
          pattern: /\bdidn\'t (worked|studied|cleaned|cooked)\b/i,
          errorType: 'grammar',
          message: 'Always use the base verb after "didn\'t" (say "didn\'t work", not "didn\'t worked").',
          correctionPattern: 'I didn\'t [base verb]...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_28_2',
        type: 'multiple_choice',
        prompt: 'Which sentence has correct negative past grammar?',
        options: [
          { id: 'opt_1', text: 'I didn\'t cook yesterday.', isCorrect: true },
          { id: 'opt_2', text: 'I didn\'t cooked yesterday.', isCorrect: false },
          { id: 'opt_3', text: 'I didn\'t cooking yesterday.', isCorrect: false },
        ],
        correctAnswer: 'I didn\'t cook yesterday.',
        explanation: 'Use "didn\'t" + base verb "cook".',
      },
    },
    {
      id: 'turn_a1_28_3',
      turnIndex: 3,
      partnerPrompt:
        'Good for you! Taking time to recharge is so important. What about this upcoming week, are you ready for our team meeting this afternoon?',
      partnerAudioText:
        'Good for you! Taking time to recharge is so important. What about this upcoming week, are you ready for our team meeting this afternoon?',
      partnerQuestionHindi:
        'बहुत बढ़िया! खुद को तरोताज़ा करने के लिए समय निकालना बहुत महत्वपूर्ण है। इस आने वाले सप्ताह के बारे में क्या, क्या आप आज दोपहर हमारी टीम मीटिंग के लिए तैयार हैं?',
      expectedFunction: 'Confirm Readiness & Friendly Close',
      contextGoal:
        'State that you are refreshed and ready for work, and conclude the pantry conversation politely.',
      targetVocabulary: ['ready', 'feeling good', 'meeting', 'see you', 'let\'s start'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes, I feel refreshed and completely ready for the meeting. See you there at two o\'clock!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I am all ready. Let\'s have a great week, Emily!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Yes, totally prepared. See you in the meeting room!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Readiness & Closing',
          patterns: ['ready', 'refreshed', 'prepared', 'see you', 'have a great week', 'meeting'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_28_3',
        type: 'multiple_choice',
        prompt: 'Which sentence naturally wraps up a friendly chat with a coworker?',
        options: [
          { id: 'opt_1', text: 'Yes, I feel refreshed and ready. See you in the meeting!', isCorrect: true },
          { id: 'opt_2', text: 'I am finished speaking now pantry.', isCorrect: false },
          { id: 'opt_3', text: 'Ready am I go meeting bye.', isCorrect: false },
        ],
        correctAnswer: 'Yes, I feel refreshed and ready. See you in the meeting!',
        explanation: 'Natural, professional, and positive.',
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
