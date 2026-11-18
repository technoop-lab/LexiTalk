import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_202: ConversationDefinition = {
  id: 'conv_a2_202',
  title: 'So / Neither / Agreement & Response Patterns',
  cefr: 'A2',
  unitId: 'unit_a2_14',
  lessonLinks: ['lesson_a2_14_202'],
  estimatedMinutes: 5,
  scenario:
    'You and your fellow student Daniel are having lunch at the university refectory chatting about campus life, study habits, foreign languages, and favorite lecturers. You practice fast-paced, natural agreement using "So do I", "Neither have I", "I do too", as well as polite diplomatic contrast ("Actually, I quite enjoy that...").',
  communicativeGoals: [
    'Agree with positive statements using "So + auxiliary + I" and "I + auxiliary + too"',
    'Agree with negative statements using "Neither + auxiliary + I" and "Nor + auxiliary + I"',
    'Express polite disagreement or personal contrast ("Actually, I don’t mind it...", "I’m afraid I have a different take")',
    'Engage in natural, rapid conversational rejoinders during social banter',
  ],
  canDoStatements: [
    'Can express agreement with positive and negative statements using "so" and "neither"',
    'Can use appropriate auxiliary verbs (do, have, be, can) in short agreement patterns',
    'Can express polite contrast and differing opinions without awkwardness',
  ],
  characters: [
    {
      id: 'char_daniel_refectory',
      name: 'Daniel',
      role: 'Fellow Student & Lunch Companion',
      avatar: '🤝',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'neither',
        ipa: '/ˈnaɪðər/',
        partOfSpeech: 'adverb',
        meaning: 'Used to show agreement with a negative statement (not one nor the other)',
        exampleSentence: 'I haven’t visited the botanical gardens yet. — Neither have I.',
        translations: { hi: 'न तो / मैं भी नहीं (नकारात्मक सहमति)' },
      },
      {
        word: 'agreement',
        ipa: '/əˈɡriːmənt/',
        partOfSpeech: 'noun',
        meaning: 'Harmony or accordance in opinion or feeling',
        exampleSentence: 'We both reached agreement on our team topic.',
        translations: { hi: 'सहमति' },
      },
      {
        word: 'rejoinder',
        ipa: '/rɪˈdʒɔɪndə(r)/',
        partOfSpeech: 'noun',
        meaning: 'A quick reply to what somebody says, especially a witty or sharp one',
        exampleSentence: 'His quick rejoinder made everyone at the table smile.',
        translations: { hi: 'त्वरित उत्तर / प्रत्युत्तर' },
      },
      {
        word: 'contrast',
        ipa: '/ˈkɒntrɑːst/',
        partOfSpeech: 'noun',
        meaning: 'The state of being strikingly different from something else in juxtaposition or close association',
        exampleSentence: 'In contrast to Daniel, I prefer studying in the morning.',
        translations: { hi: 'विरोधाभास / भिन्नता' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I really love the campus coffee shop. — So do I! / I do too!',
        functionCategory: 'Positive agreement',
        exampleSentence: 'I enjoy group presentations. — So do I.',
      },
      {
        phrase: 'I can’t stand waking up for 8 AM lectures. — Neither can I!',
        functionCategory: 'Negative modal agreement',
        exampleSentence: 'I can’t find my campus bus pass. — Neither can I.',
      },
      {
        phrase: 'I haven’t started revision for statistics yet. — Neither have I.',
        functionCategory: 'Negative present perfect agreement',
        exampleSentence: 'I haven’t eaten lunch yet. — Neither have I.',
      },
      {
        phrase: 'Actually, I don’t mind early classes because the campus is so peaceful.',
        functionCategory: 'Polite contrasting viewpoint',
        exampleSentence: 'Actually, I really enjoyed the reading assignment.',
      },
    ],
    grammar: {
      title: 'Agreement Patterns: So / Neither / Too / Either',
      conceptExplanation:
        '1. Positive Agreement:\n   - "So + Auxiliary + I" (e.g., "I like tea" ➔ "So do I")\n   - "I + Auxiliary + too" (e.g., "I am tired" ➔ "I am too")\n2. Negative Agreement:\n   - "Neither + Auxiliary + I" (e.g., "I don\'t like cold weather" ➔ "Neither do I")\n   - "I + Negative Auxiliary + either" (e.g., "I haven\'t seen it" ➔ "I haven\'t either")\n3. Inversion Rule:\n   - After "So" and "Neither", the auxiliary verb comes BEFORE the subject ("So do I", NOT "So I do").',
      patternFormula: 'Positive: So + Aux + I | Negative: Neither + Aux + I | Contrast: Actually, I [Different opinion]',
      contrastExamples: [
        {
          incorrect: 'I don’t like exams. — So do I.',
          correct: 'I don’t like exams. — Neither do I. / Nor do I.',
          explanation: 'Use "Neither do I" to agree with a negative statement.',
        },
        {
          incorrect: 'I love football. — So I do.',
          correct: 'I love football. — So do I. / I do too.',
          explanation: 'Invert auxiliary and subject after "So" ("So do I").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Daniel',
        text: 'I always get hungry right after the morning lecture!',
        translation: 'मुझे सुबह के व्याख्यान के ठीक बाद हमेशा भूख लगती है!',
      },
      {
        speaker: 'Learner',
        text: 'So do I! The refectory pasta is delicious today.',
        translation: 'मुझे भी! आज कैंटीन का पास्ता बहुत स्वादिष्ट है।',
      },
      {
        speaker: 'Daniel',
        text: 'I haven’t tried their vegetarian curry yet.',
        translation: 'मैंने अभी तक उनकी शाकाहारी करी नहीं चखी है।',
      },
      {
        speaker: 'Learner',
        text: 'Neither have I. Let’s try it next time!',
        translation: 'मैंने भी नहीं। आइए अगली बार इसे आज़माएं!',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_202_1',
      type: 'fill_blank',
      prompt: 'Complete the agreement rejoinder: "I don’t understand this algorithm. — ______ (Neither / So) do I."',
      options: [
        { id: 'opt_1', text: 'Neither', isCorrect: true },
        { id: 'opt_2', text: 'So', isCorrect: false },
        { id: 'opt_3', text: 'Too', isCorrect: false },
      ],
      correctAnswer: 'Neither',
      explanation: 'Use "Neither" to agree with negative statement "don’t understand".',
    },
    {
      id: 'cp_202_2',
      type: 'multiple_choice',
      prompt: 'How should you agree with: "I am really looking forward to the semester break"?',
      options: [
        { id: 'opt_1', text: 'So am I! / I am too!', isCorrect: true },
        { id: 'opt_2', text: 'So do I! / Neither do I!', isCorrect: false },
        { id: 'opt_3', text: 'So I am!', isCorrect: false },
      ],
      correctAnswer: 'So am I! / I am too!',
      explanation: 'Match auxiliary "am" -> "So am I!".',
    },
    {
      id: 'cp_202_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [neither / have / for the exam / I / studied]',
      correctAnswer: 'neither have I studied for the exam',
      explanation: 'Neither + auxiliary + subject + past participle.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_202_1',
      prompt: 'Construct an agreement rejoinder to "I love studying in the quiet reading room on the third floor".',
      scenarioContext: 'Agreeing with Daniel.',
      targetStructure: 'So do I, because there are no distractions up there.',
      wordBank: ['So do I,', 'because there are', 'no distractions', 'up there', 'on the third floor'],
      acceptableSolutions: [
        'So do I, because there are no distractions up there.',
        'I do too, because it is so quiet up there.',
      ],
      explanation: 'Use "So do I" with an explanation.',
    },
    {
      id: 'sc_202_2',
      prompt: 'Construct a sentence showing polite contrast to Daniel saying he dislikes 9 AM classes.',
      scenarioContext: 'Giving a different personal perspective politely.',
      targetStructure: 'Actually, I don’t mind 9 AM classes because I like starting my day early.',
      wordBank: ['Actually,', 'I don’t mind', '9 AM classes', 'because I like', 'starting my day early'],
      acceptableSolutions: [
        'Actually, I don’t mind 9 AM classes because I like starting my day early.',
        'Actually, I like early classes because the campus is quiet.',
      ],
      explanation: 'Polite contrast using "Actually, I don\'t mind...".',
    },
  ],
  turns: [
    {
      id: 'turn_202_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! Grab a seat. This refectory food is surprisingly good today. I love their hot vegetarian lasagna!',
      partnerAudioText:
        'Hey! Grab a seat. This refectory food is surprisingly good today. I love their hot vegetarian lasagna!',
      partnerQuestionHindi:
        'अरे! एक सीट ले लो। आज इस कैंटीन का खाना आश्चर्यजनक रूप से अच्छा है। मुझे उनका गर्म शाकाहारी लसग्ना बहुत पसंद है!',
      expectedFunction: 'Expressing positive agreement using "So do I!" or "I do too!"',
      contextGoal: 'Agree with Daniel using "So do I" or "I do too" and comment on the meal',
      targetVocabulary: ['So do I', 'I do too', 'delicious', 'lasagna', 'refectory', 'Daniel'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'So do I! The pasta is fresh and hot. It is definitely one of the best meals on campus.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I do too! I always order the vegetarian lasagna whenever they serve it.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'So do I, mate! The garlic bread with it is fantastic too. Perfect fuel after that long lecture.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'positive_agreement',
          patterns: ['so do i', 'i do too', 'so do i!', 'i do too!', 'me too'],
          required: true,
        },
        {
          name: 'food_comment',
          patterns: ['delicious', 'pasta', 'lasagna', 'fresh', 'meals', 'hot', 'bread'],
          required: false,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_202_1_so_i_do',
          pattern: /so i do\b/i,
          errorType: 'grammar',
          message: 'Invert auxiliary and subject: say "So do I", not "So I do".',
          correctionPattern: 'So do I!',
        },
      ],
      remediationPractice: {
        id: 'rem_202_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I like the food. — So ______ (do) I."',
        options: [
          { id: 'r1', text: 'do', isCorrect: true },
          { id: 'r2', text: 'am', isCorrect: false },
        ],
        correctAnswer: 'do',
        explanation: 'Simple present "like" matches auxiliary "do".',
      },
    },
    {
      id: 'turn_202_2',
      turnIndex: 2,
      partnerPrompt:
        'Totally! You know, I haven’t had time to finish reading the supplementary research papers for our seminar tomorrow. Have you managed to read them?',
      partnerAudioText:
        'Totally! You know, I haven’t had time to finish reading the supplementary research papers for our seminar tomorrow. Have you managed to read them?',
      partnerQuestionHindi:
        'बिल्कुल! आपको पता है, मुझे कल के सेमिनार के लिए पूरक शोध पत्र पढ़ने का समय नहीं मिला है। क्या आप उन्हें पढ़ पाए हैं?',
      expectedFunction: 'Expressing negative agreement using "Neither have I" or "I haven’t either"',
      contextGoal: 'Agree with the negative statement using "Neither have I" and mention when you plan to read them',
      targetVocabulary: ['Neither have I', 'I haven’t either', 'papers', 'tonight', 'library', 'finish'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Neither have I. I was busy with our programming project, but I plan to read them tonight.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I haven’t either! There were simply too many pages. We can skim through the abstracts together.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Neither have I, honestly. I’m heading to the quiet floor right after lunch to read through sections one and two.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'negative_agreement_have',
          patterns: ['neither have i', 'i haven’t either', 'nor have i', 'haven’t either'],
          required: true,
        },
        {
          name: 'plan_detail',
          patterns: ['tonight', 'busy', 'read', 'abstracts', 'after lunch', 'project', 'sections'],
          required: false,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_202_2_neither_do_i_for_have',
          pattern: /neither do i\b/i,
          errorType: 'grammar',
          message: 'To agree with "I haven\'t...", use "Neither have I", matching the auxiliary "have".',
          correctionPattern: 'Neither have I.',
        },
      ],
      remediationPractice: {
        id: 'rem_202_2',
        type: 'multiple_choice',
        prompt: 'Which phrase agrees with "I haven’t finished the book"?',
        options: [
          { id: 'r1', text: 'Neither have I.', isCorrect: true },
          { id: 'r2', text: 'Neither do I.', isCorrect: false },
        ],
        correctAnswer: 'Neither have I.',
        explanation: 'Match auxiliary "have" in "Neither have I".',
      },
    },
    {
      id: 'turn_202_3',
      turnIndex: 3,
      partnerPrompt:
        'Good idea. Speaking of schedules, I really can’t stand eight-thirty morning lectures in the winter. It is dark, freezing, and impossible to wake up!',
      partnerAudioText:
        'Good idea. Speaking of schedules, I really can’t stand eight-thirty morning lectures in the winter. It is dark, freezing, and impossible to wake up!',
      partnerQuestionHindi:
        'अच्छा विचार है। शेड्यूल की बात करें तो, मैं सर्दियों में सुबह साढ़े आठ बजे के व्याख्यान बिल्कुल बर्दाश्त नहीं कर सकता। अंधेरा होता है, कड़ाके की ठंड होती है और जागना असंभव होता है!',
      expectedFunction: 'Expressing modal agreement ("Neither can I") OR polite contrasting opinion ("Actually, I don’t mind...")',
      contextGoal: 'Say "Neither can I!" or provide polite contrast with "Actually, I quite like..."',
      targetVocabulary: ['Neither can I', 'Actually', 'morning', 'winter', 'wake up', 'classes'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Neither can I! Waking up in the freezing cold is the hardest part of the semester.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Actually, I don’t mind early classes because the campus is peaceful and you finish early in the day.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Neither can I! Stepping out into the dark frost at 7:30 AM requires serious willpower.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'can_agreement_or_contrast',
          patterns: ['neither can i', 'actually', 'i can’t either', 'don’t mind', 'i don’t mind', 'nor can i'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_202_3_aux_clash',
          pattern: /neither am i\b/i,
          errorType: 'grammar',
          message: 'Match the modal "can\'t": say "Neither can I", not "Neither am I".',
          correctionPattern: 'Neither can I!',
        },
      ],
      remediationPractice: {
        id: 'rem_202_3',
        type: 'fill_blank',
        prompt: 'Fill in: "I can’t stand early classes. — Neither ______ (can) I."',
        options: [
          { id: 'r1', text: 'can', isCorrect: true },
          { id: 'r2', text: 'do', isCorrect: false },
        ],
        correctAnswer: 'can',
        explanation: 'Match modal "can" in "Neither can I".',
      },
    },
    {
      id: 'turn_202_4',
      turnIndex: 4,
      partnerPrompt:
        'Haha, exactly! Well, I am definitely getting a hot mocha before we go to the library. Are you coming along to the coffee shop?',
      partnerAudioText:
        'Haha, exactly! Well, I am definitely getting a hot mocha before we go to the library. Are you coming along to the coffee shop?',
      partnerQuestionHindi:
        'हाहा, बिल्कुल! खैर, लाइब्रेरी जाने से पहले मैं निश्चित रूप से एक गर्म मोचा ले रहा हूँ। क्या आप कॉफी शॉप में साथ आ रहे हैं?',
      expectedFunction: 'Expressing agreement to join ("So am I!" / "I am too!") and closing lunch warmly',
      contextGoal: 'Say "So am I!" or "I am too!" and walk together to the cafe',
      targetVocabulary: ['So am I', 'I am too', 'coffee', 'mocha', 'library', 'let’s go', 'Daniel'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'So am I! A hot coffee sounds wonderful right now. Let’s head over together, Daniel.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I am too! I need an espresso to stay awake while reading those papers. Lead the way!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'So am I! You can never say no to good coffee on a chilly afternoon. Let’s go!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'am_agreement',
          patterns: ['so am i', 'i am too', 'so am i!', 'i am too!', 'count me in'],
          required: true,
        },
        {
          name: 'closing_action',
          patterns: ['coffee', 'mocha', 'let’s go', 'together', 'lead the way', 'daniel', 'sounds wonderful'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_202_4_so_do_i_for_am',
          pattern: /so do i\b/i,
          errorType: 'grammar',
          message: 'To match "I am getting...", say "So am I!" (matching "am", not "do").',
          correctionPattern: 'So am I!',
        },
      ],
      remediationPractice: {
        id: 'rem_202_4',
        type: 'multiple_choice',
        prompt: 'Which response matches "I am getting a coffee"?',
        options: [
          { id: 'r1', text: 'So am I! Let’s go together.', isCorrect: true },
          { id: 'r2', text: 'So do I! Let’s go together.', isCorrect: false },
        ],
        correctAnswer: 'So am I! Let’s go together.',
        explanation: 'Match "am" auxiliary.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 75,
  },
};
