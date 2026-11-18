import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_9: ConversationDefinition = {
  id: 'conv_a1_9',
  title: 'Talking About a Roommate’s Busy Schedule',
  cefr: 'A1',
  unitId: 'unit_a1_1',
  lessonLinks: ['lesson_a1_1_9'],
  estimatedMinutes: 5,
  scenario:
    'You are having lunch with your classmate Sophia in the courtyard. She asks about your roommate Carlos and his busy daily routine.',
  communicativeGoals: [
    'Describe another person\'s daily routine using third-person singular Present Simple verbs (works, studies, lives, has, goes)',
    'Apply correct third-person singular -s/-es/-ies inflection rules',
    'Describe someone\'s workplace and study habits',
    'Recycle family/friend introductions and occupations from Lessons 2 & 3',
  ],
  canDoStatements: [
    'Can describe what another person does each day using Present Simple (he/she/it) (CEFR A1)',
    'Can use third-person singular inflections (-s, -es, has, does, goes) accurately',
    'Can answer simple questions about a friend or family member\'s schedule',
  ],
  characters: [
    {
      id: 'char_sophia',
      name: 'Sophia',
      role: 'Classmate & Friend',
      avatar: '👩‍🎓',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'studies',
        ipa: '/ˈstʌdiz/',
        partOfSpeech: 'verb',
        meaning: 'Third-person singular of study; to acquire academic knowledge',
        exampleSentence: 'Carlos studies medicine at the university.',
        translations: { hi: 'पढ़ाई करता है' },
      },
      {
        word: 'leaves',
        ipa: '/liːvz/',
        partOfSpeech: 'verb',
        meaning: 'Third-person singular of leave; to depart from a place',
        exampleSentence: 'He leaves the apartment at 7:30 am.',
        translations: { hi: 'निकलता है' },
      },
      {
        word: 'cooks',
        ipa: '/kʊks/',
        partOfSpeech: 'verb',
        meaning: 'Third-person singular of cook; to prepare food',
        exampleSentence: 'She cooks dinner every evening.',
        translations: { hi: 'खाना पकाता/पकाती है' },
      },
      {
        word: 'goes',
        ipa: '/ɡəʊz/',
        partOfSpeech: 'verb',
        meaning: 'Third-person singular of go; to travel or move',
        exampleSentence: 'He goes to the gym after work.',
        translations: { hi: 'जाता है' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'He / She works at...',
        functionCategory: 'Describing Others’ Workplace',
        exampleSentence: 'She works at a software company.',
      },
      {
        phrase: 'He / She gets up at...',
        functionCategory: 'Describing Others’ Wake Time',
        exampleSentence: 'Carlos gets up very early every day.',
      },
      {
        phrase: 'In the evening, he / she...',
        functionCategory: 'Describing Evening Routine',
        exampleSentence: 'In the evening, he studies at the library.',
      },
      {
        phrase: 'Does he / she live with you?',
        functionCategory: 'Inquiring Co-habitation',
        exampleSentence: 'Does your roommate live near campus?',
      },
    ],
    grammar: {
      title: 'Third-Person Singular Verb Endings (-s / -es / irregulars)',
      conceptExplanation:
        'With subjects He, She, It, or a singular noun, add -s (works, eats) or -es after sibilants (watches, goes, does). "Have" becomes "has". Never use the uninflected base verb with singular subjects.',
      patternFormula: 'He / She / [Name] + [Verb + -s/-es] + at [Time/Place]',
      contrastExamples: [
        {
          incorrect: 'He work in a bank.',
          correct: 'He works in a bank.',
          explanation: 'Third-person singular "He" requires the suffix "-s" on "works".',
        },
        {
          incorrect: 'Carlos have a car.',
          correct: 'Carlos has a car.',
          explanation: '"Have" inflects irregularly to "has" for third-person singular.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Sophia',
        text: 'How is your new roommate Carlos doing? What does he do during the day?',
        translation: 'आपका नया रूममेट कार्लोस कैसा है? वह दिन में क्या करता है?',
      },
      {
        speaker: 'You',
        text: 'Carlos is doing great! He studies engineering and works part-time at a café.',
        translation: 'कार्लोस बहुत बढ़िया है! वह इंजीनियरिंग की पढ़ाई करता है और एक कैफ़े में पार्ट-टाइम काम करता है।',
      },
      {
        speaker: 'Sophia',
        text: 'Wow, that sounds busy! What time does he get home in the evening?',
        translation: 'वाह, यह तो बहुत व्यस्त लगता है! वह शाम को किस समय घर आता है?',
      },
      {
        speaker: 'You',
        text: 'He finishes classes at 5:00 and gets home around 7:30 pm.',
        translation: 'वह 5:00 बजे कक्षाएं समाप्त करता है और शाम लगभग 7:30 बजे घर आता है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_9_1',
      type: 'multiple_choice',
      prompt: 'Select the correct third-person singular verb:',
      options: [
        { id: 'opt_1', text: 'Sarah teaches English at a school.', isCorrect: true },
        { id: 'opt_2', text: 'Sarah teach English at a school.', isCorrect: false },
        { id: 'opt_3', text: 'Sarah is teach English at a school.', isCorrect: false },
      ],
      correctAnswer: 'Sarah teaches English at a school.',
      explanation: 'Verbs ending in -ch add "-es" (teaches) with singular third-person subjects.',
    },
    {
      id: 'cp_a1_9_2',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "Carlos ___ to the gym every morning."',
      options: [
        { id: 'opt_1', text: 'goes', isCorrect: true },
        { id: 'opt_2', text: 'go', isCorrect: false },
        { id: 'opt_3', text: 'going', isCorrect: false },
      ],
      correctAnswer: 'goes',
      explanation: 'Subject "Carlos" takes the irregular singular form "goes".',
    },
    {
      id: 'cp_a1_9_3',
      type: 'multiple_choice',
      prompt: 'Which form of "have" is correct for a singular subject?',
      options: [
        { id: 'opt_1', text: 'My sister has two cats.', isCorrect: true },
        { id: 'opt_2', text: 'My sister haves two cats.', isCorrect: false },
        { id: 'opt_3', text: 'My sister have two cats.', isCorrect: false },
      ],
      correctAnswer: 'My sister has two cats.',
      explanation: 'Singular third-person takes "has".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_9_1',
      scenarioContext: 'Describe Carlos’s daily studies and work.',
      prompt: 'Build: "Carlos studies biology and works in a laboratory."',
      targetStructure: 'Subject + verb 1 (-ies) + direct object + conjunction + verb 2 (-s) + prepositional phrase',
      wordBank: ['Carlos', 'studies', 'biology', 'and', 'works', 'in', 'a', 'laboratory', 'study', 'work', 'is'],
      acceptableSolutions: [
        'Carlos studies biology and works in a laboratory',
        'Carlos studies biology and works in a laboratory.',
        'Carlos works in a laboratory and studies biology.',
      ],
      explanation: 'Uses third-person singular inflections "studies" and "works".',
    },
    {
      id: 'sc_a1_9_2',
      scenarioContext: 'Describe what time he leaves home.',
      prompt: 'Build: "He leaves the apartment at eight o’clock."',
      targetStructure: 'Pronoun He + verb (-s) + object + preposition + time',
      wordBank: ['He', 'leaves', 'the', 'apartment', 'at', 'eight', 'o’clock', 'leave', 'is', 'on'],
      acceptableSolutions: [
        'He leaves the apartment at eight o’clock',
        'He leaves the apartment at eight o’clock.',
        'He leaves the apartment at eight.',
      ],
      explanation: 'Correct use of third-person "-s" on "leaves".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_9_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! How is your roommate Carlos settling into the new apartment? What does he do every day?',
      partnerAudioText: 'Hey! How is your roommate Carlos settling into the new apartment? What does he do every day?',
      partnerQuestionHindi: 'अरे! आपका रूममेट कार्लोस नए अपार्टमेंट में कैसा है? वह हर दिन क्या करता है?',
      expectedFunction: 'Describe Third-Person Routine',
      contextGoal: 'Explain what Carlos studies or where he works using 3rd person -s verbs (e.g. "He studies...", "He works at...").',
      targetVocabulary: ['studies', 'works', 'lives', 'at', 'in', 'hospital', 'company', 'university'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Carlos is great! He studies computer science and works at a tech firm.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'He is very busy. He teaches Spanish and studies in the afternoon.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'He works in a hospital as a nurse.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Third Person Routine Verb',
          patterns: [
            'he studies',
            'he works',
            'he teaches',
            'studies computer science',
            'works at a',
            'works in a',
            'he is a student',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'missing_third_person_s',
          pattern: /\bhe work in\b|\bhe study at\b|\bhe live in\b/i,
          errorType: 'grammar',
          message: 'Add "-s" or "-es" for third-person subjects: say "He works", "He studies", "He lives".',
          correctionPattern: 'He works / He studies / He lives',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_9_1',
        type: 'fill_blank',
        prompt: 'Choose the correct verb: "Carlos ___ software engineering at university."',
        options: [
          { id: 'opt_1', text: 'studies', isCorrect: true },
          { id: 'opt_2', text: 'study', isCorrect: false },
          { id: 'opt_3', text: 'is study', isCorrect: false },
        ],
        correctAnswer: 'studies',
        explanation: 'Verbs ending in consonant + y change to "-ies" with singular subjects (studies).',
      },
    },
    {
      id: 'turn_a1_9_2',
      turnIndex: 2,
      partnerPrompt:
        'He sounds very hardworking! What time does he usually wake up, and what does he do in the evenings?',
      partnerAudioText: 'He sounds very hardworking! What time does he usually wake up, and what does he do in the evenings?',
      partnerQuestionHindi: 'वह बहुत मेहनती लगता है! वह आमतौर पर किस समय उठता है, और वह शाम को क्या करता है?',
      expectedFunction: 'Detail Evening Schedule & Habits',
      contextGoal: 'Explain what time he wakes up and an evening activity (e.g. cooks dinner, goes to the gym, reads).',
      targetVocabulary: ['wakes', 'up', 'at', 'goes', 'gym', 'cooks', 'dinner', 'evening'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'He wakes up at 6:30 am, and in the evening he goes to the gym and cooks dinner.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'He gets up early at 7:00, and he reads books in the evening.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'He leaves early and relaxes at home at night.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Third Person Habit & Time',
          patterns: [
            'wakes up at',
            'gets up at',
            'goes to the gym',
            'cooks dinner',
            'reads',
            'studies in the evening',
            'leaves at',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'go_vs_goes_he',
          pattern: /\bhe go to\b|\bhe cook dinner\b/i,
          errorType: 'grammar',
          message: 'Say "He goes" and "He cooks", not "He go" or "He cook".',
          correctionPattern: 'He goes / He cooks',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_9_2',
        type: 'multiple_choice',
        prompt: 'Which sentence is grammatically correct?',
        options: [
          { id: 'opt_1', text: 'He goes to the gym every evening.', isCorrect: true },
          { id: 'opt_2', text: 'He go to the gym every evening.', isCorrect: false },
          { id: 'opt_3', text: 'He is go to gym evening.', isCorrect: false },
        ],
        correctAnswer: 'He goes to the gym every evening.',
        explanation: '"Goes" is the correct third-person singular form.',
      },
    },
    {
      id: 'turn_a1_9_3',
      turnIndex: 3,
      partnerPrompt:
        'Tell Carlos I say hello! We should all grab coffee together this weekend. See you in class tomorrow!',
      partnerAudioText: 'Tell Carlos I say hello! We should all grab coffee together this weekend. See you in class tomorrow!',
      partnerQuestionHindi: 'कार्लोस को मेरी तरफ से नमस्ते कहिएगा! हमें इस वीकेंड पर एक साथ कॉफ़ी पीनी चाहिए। कल क्लास में मिलते हैं!',
      expectedFunction: 'Agreement & Social Farewell',
      contextGoal: 'Agree to invite Carlos for coffee, thank Sophia, and say goodbye.',
      targetVocabulary: ['tell', 'coffee', 'weekend', 'see', 'tomorrow', 'goodbye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I will tell him! That sounds like a wonderful plan. See you tomorrow, Sophia!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Sure, that sounds great! See you in class tomorrow.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Will do! See you tomorrow, bye.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Farewell & Agreement',
          patterns: ['i will tell him', 'sounds great', 'sounds like a plan', 'see you tomorrow', 'see you in class', 'goodbye', 'bye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_9_3',
        type: 'multiple_choice',
        prompt: 'How do you accept an invitation to hang out?',
        options: [
          { id: 'opt_1', text: 'That sounds great, see you tomorrow!', isCorrect: true },
          { id: 'opt_2', text: 'I make no plan tomorrow is.', isCorrect: false },
          { id: 'opt_3', text: 'Coffee is not you.', isCorrect: false },
        ],
        correctAnswer: 'That sounds great, see you tomorrow!',
        explanation: 'Natural social affirmation.',
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
