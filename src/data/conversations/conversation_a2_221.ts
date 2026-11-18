import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_221: ConversationDefinition = {
  id: 'conv_a2_221',
  title: 'Comparing Learning Methods & Making Choices',
  cefr: 'A2',
  unitId: 'unit_a2_15',
  lessonLinks: ['lesson_a2_15_221'],
  estimatedMinutes: 5,
  scenario:
    'You are in the campus cafeteria having lunch with your classmate Alex. Course registration for the next semester is open, and you are debating whether to choose in-person campus seminars or self-paced online modules. You compare the flexibility, social interaction, collaborative teamwork, and effectiveness of both learning formats.',
  communicativeGoals: [
    'Compare online and in-person learning formats using comparative modifiers ("far more flexible", "much more interactive", "slightly harder")',
    'Express advantages and disadvantages using "in comparison with", "whereas", and "on the other hand"',
    'Use equal and unequal comparisons with "(not) as... as" ("Online lectures are not as engaging as classroom debates")',
    'State personal learning preferences with clear justifications and ask peer opinion',
  ],
  canDoStatements: [
    'Can compare two educational methods or courses using comparative structures and modifiers',
    'Can discuss the pros and cons of digital vs classroom learning in A2 English',
    'Can explain personal choices and preferences to a fellow student',
  ],
  characters: [
    {
      id: 'char_alex_classmate',
      name: 'Alex',
      role: 'Fellow Student & Study Companion',
      avatar: '💻',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'collaborative',
        ipa: '/kəˈlæbərətɪv/',
        partOfSpeech: 'adjective',
        meaning: 'Produced or conducted by two or more people working together towards a shared goal',
        exampleSentence: 'In-person seminars offer much more collaborative learning opportunities.',
        translations: { hi: 'सहयोगात्मक (कोलैबोरेटिव)' },
      },
      {
        word: 'flexibility',
        ipa: '/ˌfleksəˈbɪləti/',
        partOfSpeech: 'noun',
        meaning: 'The ability to be easily modified or to respond to altered circumstances or conditions',
        exampleSentence: 'Online modules provide far greater schedule flexibility.',
        translations: { hi: 'लचीलापन / सुविधा (फ्लेक्सिबिलिटी)' },
      },
      {
        word: 'interactive',
        ipa: '/ˌɪntərˈæktɪv/',
        partOfSpeech: 'adjective',
        meaning: 'Allowing two-way flow of information between people or systems',
        exampleSentence: 'Classroom debates are far more interactive than pre-recorded video lectures.',
        translations: { hi: 'इंटरएक्टिव / संवादात्मक' },
      },
      {
        word: 'preference',
        ipa: '/ˈprefrəns/',
        partOfSpeech: 'noun',
        meaning: 'A greater liking for one alternative over another or others',
        exampleSentence: 'My personal preference is a blended approach with both formats.',
        translations: { hi: 'प्राथमिकता / पसंद (प्रेफरेंस)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'In comparison with online lectures, classroom seminars are much more interactive.',
        functionCategory: 'Direct comparison with in comparison with',
        exampleSentence: 'In comparison with reading, speaking builds fluency faster.',
      },
      {
        phrase: 'Online courses are far more flexible, but they require much more self-discipline.',
        functionCategory: 'Balancing pros and cons with modifiers',
        exampleSentence: 'Digital apps are far more convenient for daily practice.',
      },
      {
        phrase: 'Video recordings are not as engaging as live group discussions.',
        functionCategory: 'Comparison with not as... as',
        exampleSentence: 'Self-study is not as motivating as studying with friends.',
      },
      {
        phrase: 'Which option are you planning to choose for next semester?',
        functionCategory: 'Inquiring about peer choices',
        exampleSentence: 'Do you prefer morning or evening classes?',
      },
    ],
    grammar: {
      title: 'Comparative Modifiers (Far more / Much better / Not as... as)',
      conceptExplanation:
        '1. Emphasizing degree of difference:\n   - "Online is FAR MORE flexible than in-person."\n   - "Campus classes are MUCH BETTER for speaking practice."\n   - "Evening seminars are SLIGHTLY HARDER to attend."\n2. Equivalence & Inequality with "as... as":\n   - "Watching videos is NOT AS effective AS live debates."\n   - "Digital textbooks are JUST AS useful AS printed books."',
      patternFormula: '[Option A] + is + [far / much / slightly] + [Comparative Adj] + than + [Option B]',
      contrastExamples: [
        {
          incorrect: 'Online is more better than classroom.',
          correct: 'Online is much better than classroom in terms of flexibility.',
          explanation: 'Never combine "more" with irregular comparative "better"; use "much better".',
        },
        {
          incorrect: 'Digital class is not as interactive than live class.',
          correct: 'Digital class is not as interactive as live class.',
          explanation: 'Use "as... as" (not "as... than").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Alex',
        text: 'Are you registering for the online economics module or the on-campus lecture section next term?',
        translation: 'क्या आप अगले सत्र के लिए ऑनलाइन अर्थशास्त्र मॉड्यूल या ऑन-कैंपस व्याख्यान अनुभाग के लिए पंजीकरण कर रहे हैं?',
      },
      {
        speaker: 'Learner',
        text: 'I prefer the on-campus section. In comparison with recorded videos, classroom seminars are far more interactive and collaborative.',
        translation: 'मैं ऑन-कैंपस अनुभाग पसंद करता हूँ। रिकॉर्ड किए गए वीडियो की तुलना में, कक्षा के सेमिनार कहीं अधिक इंटरैक्टिव और सहयोगात्मक होते हैं।',
      },
      {
        speaker: 'Alex',
        text: 'True, but online modules give you so much schedule flexibility!',
        translation: 'सच है, लेकिन ऑनलाइन मॉड्यूल आपको बहुत अधिक समय का लचीलापन देते हैं!',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_221_1',
      type: 'fill_blank',
      prompt: 'Complete with the modifier: "In-person workshops are ______ (much / more / as) more interactive than video lectures."',
      options: [
        { id: 'opt_1', text: 'much', isCorrect: true },
        { id: 'opt_2', text: 'more', isCorrect: false },
        { id: 'opt_3', text: 'as', isCorrect: false },
      ],
      correctAnswer: 'much',
      explanation: '"much more interactive" uses modifier "much" with comparative.',
    },
    {
      id: 'cp_221_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "(not) as... as"?',
      options: [
        { id: 'opt_1', text: 'Online discussion forums are not as lively as face-to-face debates.', isCorrect: true },
        { id: 'opt_2', text: 'Online discussion forums are not as lively than face-to-face debates.', isCorrect: false },
        { id: 'opt_3', text: 'Online forums are no as lively as debates.', isCorrect: false },
      ],
      correctAnswer: 'Online discussion forums are not as lively as face-to-face debates.',
      explanation: '"not as [Adjective] as" is the accurate structure.',
    },
    {
      id: 'cp_221_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [in comparison with / online study, / campus classes are / far more collaborative]',
      correctAnswer: 'in comparison with online study, campus classes are far more collaborative',
      explanation: 'Comparative linker + option A + main clause with comparative modifier.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_221_1',
      prompt: 'Construct a sentence stating that online learning offers far more flexibility, but is not as interactive as classroom discussions.',
      scenarioContext: 'Comparing learning methods with Alex.',
      targetStructure: 'Online learning offers far more schedule flexibility, but it is not as interactive as classroom discussions.',
      wordBank: ['Online learning offers', 'far more schedule flexibility,', 'but it is not as interactive', 'as classroom discussions,', 'Alex.'],
      acceptableSolutions: [
        'Online learning offers far more schedule flexibility, but it is not as interactive as classroom discussions.',
        'Online classes offer far more flexibility, but are not as interactive as classroom discussions.',
      ],
      explanation: 'Compound comparative sentence with modifier and "not as... as".',
    },
    {
      id: 'sc_221_2',
      prompt: 'Construct a sentence asking Alex which format he prefers for his science modules.',
      scenarioContext: 'Inquiring about your friend’s module preferences.',
      targetStructure: 'Which format do you prefer for your science modules, Alex: online or in-person?',
      wordBank: ['Which format do you prefer', 'for your science modules,', 'Alex:', 'online or in-person?', 'next term'],
      acceptableSolutions: [
        'Which format do you prefer for your science modules, Alex: online or in-person?',
        'Do you prefer online or in-person for your science modules, Alex?',
      ],
      explanation: 'Inquiry structure for preferences.',
    },
  ],
  turns: [
    {
      id: 'turn_221_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! I am filling out my course registration form for next semester right now. The university offers both fully online modules and traditional classroom seminars for international marketing. Which format do you think is better for language learners?',
      partnerAudioText:
        'Hey! I am filling out my course registration form for next semester right now. The university offers both fully online modules and traditional classroom seminars for international marketing. Which format do you think is better for language learners?',
      partnerQuestionHindi:
        'अरे! मैं अभी अगले सत्र के लिए अपना कोर्स पंजीकरण फॉर्म भर रहा हूँ। विश्वविद्यालय अंतर्राष्ट्रीय विपणन के लिए पूरी तरह से ऑनलाइन मॉड्यूल और पारंपरिक कक्षा सेमिनार दोनों प्रदान करता है। आपको क्या लगता है कि भाषा सीखने वालों के लिए कौन सा प्रारूप बेहतर है?',
      expectedFunction: 'Comparing online and in-person learning using comparative modifiers and stating preference',
      contextGoal: 'State your preference (e.g. in-person seminars) and compare using modifiers (e.g. much more interactive, far better for spontaneous conversation)',
      targetVocabulary: ['in comparison with', 'much more interactive', 'far better', 'in-person', 'seminars', 'Alex', 'conversations'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hi Alex! In comparison with online modules, in-person seminars are much more interactive and far better for practicing spontaneous speaking.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hey Alex. I definitely prefer classroom seminars. Being in a physical room makes group discussions far more collaborative and engaging.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'For language learners, in-person classes are much more effective. Live interactions with classmates push you to react naturally without pausing a video.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_alex',
          patterns: ['hi', 'hey', 'alex', 'good morning'],
          required: true,
        },
        {
          name: 'comparative_modifiers',
          patterns: ['much more', 'far better', 'far more', 'in comparison with', 'more effective'],
          required: true,
        },
        {
          name: 'format_preference_reason',
          patterns: ['in-person', 'interactive', 'seminars', 'speaking', 'collaborative', 'discussions', 'classroom'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_221_1_more_better',
          pattern: /more better/i,
          errorType: 'grammar',
          message: 'Say "much better", not "more better".',
          correctionPattern: 'In-person classes are much better for language practice.',
        },
      ],
      remediationPractice: {
        id: 'rem_221_1',
        type: 'fill_blank',
        prompt: 'Fill in: "In-person classes are ______ (much) better for speaking."',
        options: [
          { id: 'r1', text: 'much', isCorrect: true },
          { id: 'r2', text: 'more to', isCorrect: false },
        ],
        correctAnswer: 'much',
        explanation: 'Modifier "much" with irregular comparative "better".',
      },
    },
    {
      id: 'turn_221_2',
      turnIndex: 2,
      partnerPrompt:
        'I see your point about spontaneous speaking. But what about the schedule? Online recorded lectures offer far more flexibility, and you can pause and re-watch difficult explanations as many times as you like. Isn’t that a huge advantage?',
      partnerAudioText:
        'I see your point about spontaneous speaking. But what about the schedule? Online recorded lectures offer far more flexibility, and you can pause and re-watch difficult explanations as many times as you like. Isn’t that a huge advantage?',
      partnerQuestionHindi:
        'मैं सहज बोलने के बारे में आपकी बात समझता हूँ। लेकिन समय सारिणी का क्या? ऑनलाइन रिकॉर्ड किए गए व्याख्यान कहीं अधिक लचीलापन प्रदान करते हैं, और आप जितनी बार चाहें कठिन व्याख्याओं को रोककर दोबारा देख सकते हैं। क्या यह एक बड़ा फायदा नहीं है?',
      expectedFunction: 'Acknowledging the online advantage with "as... as" or "on the other hand" while maintaining a balanced viewpoint',
      contextGoal: 'Acknowledge that online offers great flexibility, but note that it is not as motivating or requires far more discipline',
      targetVocabulary: ['flexibility', 'on the other hand', 'not as motivating as', 'self-discipline', 'procrastination', 'advantage'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'That is true! Online learning offers far more flexibility, but on the other hand, watching recordings alone is not as motivating as live peer discussions.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'You’re right that re-watching videos is convenient, but online study requires far more self-discipline to avoid falling behind on deadlines.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Flexibility is a great perk, but in my experience, digital forums are not as lively as in-person debates. It’s easy to feel isolated at home.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'acknowledgment_of_flexibility',
          patterns: ['flexibility', 'true', 'convenient', 'perk', 'advantage', 're-watching'],
          required: true,
        },
        {
          name: 'counter_balance_point',
          patterns: ['not as motivating', 'self-discipline', 'on the other hand', 'peer discussions', 'falling behind', 'not as lively', 'isolated'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_221_2_as_than',
          pattern: /not as motivating than/i,
          errorType: 'grammar',
          message: 'Say "not as motivating as", using "as" not "than".',
          correctionPattern: 'Online study is not as motivating as classroom study.',
        },
      ],
      remediationPractice: {
        id: 'rem_221_2',
        type: 'multiple_choice',
        prompt: 'Which sentence balances the pros and cons accurately?',
        options: [
          { id: 'r1', text: 'Online offers great flexibility, but it is not as interactive as live seminars.', isCorrect: true },
          { id: 'r2', text: 'Online is flexible but not interactive than class.', isCorrect: false },
        ],
        correctAnswer: 'Online offers great flexibility, but it is not as interactive as live seminars.',
        explanation: 'Balanced comparison with "(not) as... as".',
      },
    },
    {
      id: 'turn_221_3',
      turnIndex: 3,
      partnerPrompt:
        'That makes sense—without a strict timetable, procrastination can be dangerous! What if we compromise and choose a blended course that has one online lecture and one weekly campus workshop? Which format are you leaning towards registering for?',
      partnerAudioText:
        'That makes sense—without a strict timetable, procrastination can be dangerous! What if we compromise and choose a blended course that has one online lecture and one weekly campus workshop? Which format are you leaning towards registering for?',
      partnerQuestionHindi:
        'यह समझ में आता है—एक सख्त समय सारिणी के बिना, टालमटोल खतरनाक हो सकती है! क्या होगा यदि हम समझौता करें और एक मिश्रित (blended) पाठ्यक्रम चुनें जिसमें एक ऑनलाइन व्याख्यान और एक साप्ताहिक परिसर कार्यशाला हो? आप किस प्रारूप के लिए पंजीकरण करने की ओर झुक रहे हैं?',
      expectedFunction: 'Evaluating the blended model and asking Alex if you should register for the same seminar time slot',
      contextGoal: 'Praise the blended model as the best of both worlds, confirm your intention to register for it, and ask Alex if you should join the Tuesday workshop together',
      targetVocabulary: ['blended model', 'best of both worlds', 'register', 'workshop', 'Tuesday', 'together', 'Alex'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'A blended format is the best of both worlds! I’m going to register for that. Should we sign up for the Tuesday morning workshop together, Alex?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Blended learning sounds ideal! We get flexibility plus collaborative workshops. Shall we register for the same seminar group on Thursday?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'A hybrid model strikes the perfect balance. Let’s both enroll in the Tuesday practical session so we can collaborate on group projects!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'blended_evaluation',
          patterns: ['blended', 'hybrid', 'best of both worlds', 'ideal', 'perfect balance', 'register'],
          required: true,
        },
        {
          name: 'co_registration_proposal',
          patterns: ['together', 'sign up', 'tuesday', 'thursday', 'workshop', 'alex', 'enroll', 'group'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_221_3_no_proposal',
          pattern: /^i like blended\.$/i,
          errorType: 'interaction',
          message: 'Agree and propose registering together: "Blended is ideal! Should we sign up for the same workshop, Alex?"',
          correctionPattern: 'Blended learning is the best option! Let’s sign up for the workshop together, Alex.',
        },
      ],
      remediationPractice: {
        id: 'rem_221_3',
        type: 'fill_blank',
        prompt: 'Fill in: "A blended model is the best ______ (of) both worlds."',
        options: [
          { id: 'r1', text: 'of', isCorrect: true },
          { id: 'r2', text: 'in', isCorrect: false },
        ],
        correctAnswer: 'of',
        explanation: 'Idiomatic expression: "the best of both worlds".',
      },
    },
    {
      id: 'turn_221_4',
      turnIndex: 4,
      partnerPrompt:
        'Tuesday morning at 10 AM works perfectly for me! I just clicked confirm on my portal. We will have online videos on Mondays and live workshops together on Tuesdays. This is going to be a fantastic semester!',
      partnerAudioText:
        'Tuesday morning at 10 AM works perfectly for me! I just clicked confirm on my portal. We will have online videos on Mondays and live workshops together on Tuesdays. This is going to be a fantastic semester!',
      partnerQuestionHindi:
        'मंगलवार सुबह 10 बजे मेरे लिए बिल्कुल सही है! मैंने अभी अपने पोर्टल पर पुष्टि पर क्लिक किया है। हमारे पास सोमवार को ऑनलाइन वीडियो और मंगलवार को एक साथ लाइव वर्कशॉप होंगी। यह एक शानदार सेमेस्टर होने वाला है!',
      expectedFunction: 'Confirming registration and closing the discussion with shared enthusiasm',
      contextGoal: 'Confirm that you have clicked submit too, express excitement about studying together, and head to your next class',
      targetVocabulary: ['confirmed', 'registered', 'Tuesday', 'study partners', 'fantastic semester', 'let’s go', 'Alex'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I just submitted my confirmation too! We are officially registered together for Tuesday. It’s going to be a fantastic semester, Alex!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Done! We are in the same workshop group. Having you as a study partner will make teamwork so much easier. Let’s head to class!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'All confirmed on my end! The blended approach will give us both autonomy and great peer collaboration. Looking forward to it, Alex!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'registration_confirmation',
          patterns: ['submitted', 'confirmed', 'registered', 'done', 'enrolled', 'portal'],
          required: true,
        },
        {
          name: 'shared_enthusiasm',
          patterns: ['tuesday', 'fantastic semester', 'study partner', 'alex', 'looking forward', 'teamwork'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_221_4_short',
          pattern: /^(done|ok)$/i,
          errorType: 'interaction',
          message: 'Close warmly: "I just confirmed my registration too! It’s going to be a fantastic semester, Alex!"',
          correctionPattern: 'I confirmed my registration too! Looking forward to Tuesday workshops, Alex.',
        },
      ],
      remediationPractice: {
        id: 'rem_221_4',
        type: 'multiple_choice',
        prompt: 'Which response confirms registration enthusiastically?',
        options: [
          { id: 'r1', text: 'I just confirmed too! We are officially registered for Tuesday. Great semester ahead, Alex!', isCorrect: true },
          { id: 'r2', text: 'Ok bye see ya next term.', isCorrect: false },
        ],
        correctAnswer: 'I just confirmed too! We are officially registered for Tuesday. Great semester ahead, Alex!',
        explanation: 'Enthusiastic, confirms action, and validates peer partnership.',
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
