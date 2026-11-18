import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_132: ConversationDefinition = {
  id: 'conv_a2_132',
  title: 'Environmental Awareness, Sustainable Living & Recycling (Zero-Waste Living)',
  cefr: 'A2',
  unitId: 'unit_a2_9',
  lessonLinks: ['lesson_a2_9_132'],
  estimatedMinutes: 5,
  scenario:
    'You are attending a sustainable living seminar and zero-waste exhibition at the Sheffield Millennium Gallery. Chat with environmental campaigner Chloe Bennett about green lifestyle changes. Discuss your eco-friendly habits using the Present Perfect ("I have stopped using single-use plastics for six months"), describe household recycling and composting routines, and suggest collective neighborhood initiatives using modal verbs ("We should / must organize a river cleanup").',
  communicativeGoals: [
    'Discuss sustainable habits and environmental lifestyle changes (reducing plastic, recycling, cycling)',
    'Use the Present Perfect with "for" and "since" to state how long you have practiced green habits',
    'Express collective environmental responsibility using "We must / We should protect our planet"',
    'Propose concrete community conservation actions (zero-waste swaps, tree planting, river cleanups)',
  ],
  canDoStatements: [
    'Can discuss environmental issues, waste reduction, and recycling habits in detail (CEFR A2)',
    'Can describe personal eco-friendly lifestyle transitions using Present Perfect',
    'Can express collective civic responsibility using modal obligation verbs (must, should, have to)',
  ],
  characters: [
    {
      id: 'char_chloe_bennett',
      name: 'Chloe Bennett',
      role: 'Environmental Campaigner & Zero-Waste Educator',
      avatar: '🌱',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'single-use plastic',
        ipa: '/ˈsɪŋɡəl juːs ˈplæstɪk/',
        partOfSpeech: 'noun phrase',
        meaning: 'Plastic items intended to be used only once before they are thrown away or recycled',
        exampleSentence: 'We have completely banned single-use plastic shopping bags in our home.',
        translations: { hi: 'एक बार इस्तेमाल होने वाला प्लास्टिक' },
      },
      {
        word: 'recycle',
        ipa: '/ˌriːˈsaɪkəl/',
        partOfSpeech: 'verb',
        meaning: 'To convert waste materials into reusable objects to prevent pollution',
        exampleSentence: 'Our council recycles glass bottles, cardboard, and aluminum cans.',
        translations: { hi: 'पुनर्चक्रण करना / रीसायकल करना' },
      },
      {
        word: 'carbon footprint',
        ipa: '/ˈkɑːbən ˈfʊtprɪnt/',
        partOfSpeech: 'noun phrase',
        meaning: 'The amount of carbon dioxide released into the atmosphere by an individual’s activities',
        exampleSentence: 'I commute by bicycle to reduce my personal carbon footprint.',
        translations: { hi: 'कार्बन पदचिह्न / कार्बन उत्सर्जन' },
      },
      {
        word: 'sustainable',
        ipa: '/səˈsteɪnəbəl/',
        partOfSpeech: 'adjective',
        meaning: 'Able to be maintained over time without damaging natural ecosystems',
        exampleSentence: 'Sustainable living involves eating seasonal local produce and saving energy.',
        translations: { hi: 'टिकाऊ / पर्यावरण अनुकूल' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I have carried a reusable water bottle for over a year.',
        functionCategory: 'Describing Eco-Friendly Habit (Present Perfect + for)',
        exampleSentence: 'I have used cloth bags since 2022.',
      },
      {
        phrase: 'We must reduce plastic pollution to protect wildlife.',
        functionCategory: 'Expressing Environmental Obligation (must / should)',
        exampleSentence: 'We should conserve electricity at home.',
      },
      {
        phrase: 'How do you sort your household waste and food scraps?',
        functionCategory: 'Inquiring About Recycling Habits',
        exampleSentence: 'Do you compost fruit and vegetable peels?',
      },
      {
        phrase: 'Why don’t we organize a community river cleanup next weekend?',
        functionCategory: 'Proposing Collective Action',
        exampleSentence: 'Let’s plant pollinator flowers in the neighborhood.',
      },
    ],
    grammar: {
      title: 'Modal Verbs of Ecological Obligation & Present Perfect for Sustainable Habits',
      conceptExplanation:
        '1. Obligation & Necessity: "We must protect..." (strong necessity) / "We have to reduce waste" (external rule) / "We should recycle..." (moral recommendation).\n2. Ongoing Green Habits: Use Present Perfect with "for/since" to show continuous positive action: "I have avoided plastic packaging since January" / "She has composted food waste for two years".\n3. Suggesting collective projects: "Why don\'t we organize...", "Let\'s install...", "We could start...".',
      patternFormula: 'Subject + have/has + [Past Participle] + [Green Habit] + for/since [Time] | We must / should + [Base Verb] + to protect the environment',
      contrastExamples: [
        {
          incorrect: 'We must to reduce single-use plastic.',
          correct: 'We must reduce single-use plastic.',
          explanation: '"Must" is a modal auxiliary verb followed by the bare base verb without "to".',
        },
        {
          incorrect: 'I am recycling glass since three years.',
          correct: 'I have recycled glass for three years. / I have sorted our recycling since 2021.',
          explanation: 'Use Present Perfect for ongoing habits with duration ("for three years").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Chloe Bennett',
        text: 'Hi there! Welcome to the Sheffield Zero-Waste Seminar. Have you made any changes in your daily routine to live more sustainably?',
        translation: 'नमस्ते! शेफ़ील्ड ज़ीरो-वेस्ट सेमिनार में आपका स्वागत है। क्या आपने अधिक टिकाऊ रूप से जीने के लिए अपनी दैनिक दिनचर्या में कोई बदलाव किया है?',
      },
      {
        speaker: 'You',
        text: 'Hi Chloe! Yes, I have completely stopped buying single-use plastic water bottles for the past year, and I have commuted by bicycle every day since last summer. It has significantly lowered my carbon footprint!',
        translation: 'नमस्ते क्लोई! हाँ, मैंने पिछले एक साल से सिंगल-यूज प्लास्टिक की पानी की बोतलें खरीदना पूरी तरह से बंद कर दिया है, और मैं पिछली गर्मियों से हर दिन साइकिल से यात्रा कर रहा हूँ। इसने मेरे कार्बन पदचिह्न को काफी कम कर दिया है!',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_132_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "We ___ (must / must to) protect our rivers from industrial pollution."',
      options: [
        { id: 'opt_1', text: 'must', isCorrect: true },
        { id: 'opt_2', text: 'must to', isCorrect: false },
        { id: 'opt_3', text: 'musting', isCorrect: false },
      ],
      correctAnswer: 'must',
      explanation: '"Must" takes a bare infinitive (base verb) without "to".',
    },
    {
      id: 'cp_a2_132_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes how long someone has practiced composting?',
      options: [
        { id: 'opt_1', text: 'I have composted kitchen food waste for two years.', isCorrect: true },
        { id: 'opt_2', text: 'I am composting food waste since two years.', isCorrect: false },
        { id: 'opt_3', text: 'I compost food waste for two years ago.', isCorrect: false },
      ],
      correctAnswer: 'I have composted kitchen food waste for two years.',
      explanation: 'Present Perfect "have composted" + "for two years" is the correct duration format.',
    },
    {
      id: 'cp_a2_132_3',
      type: 'multiple_choice',
      prompt: 'What is a "carbon footprint"?',
      options: [
        { id: 'opt_1', text: 'The total greenhouse gas emissions caused directly and indirectly by an individual’s lifestyle.', isCorrect: true },
        { id: 'opt_2', text: 'A footprint made by walking on coal.', isCorrect: false },
        { id: 'opt_3', text: 'A type of eco-friendly shoe.', isCorrect: false },
      ],
      correctAnswer: 'The total greenhouse gas emissions caused directly and indirectly by an individual’s lifestyle.',
      explanation: 'Carbon footprint measures personal greenhouse gas impacts.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_132_1',
      scenarioContext: 'Describe plastic reduction habit.',
      prompt: 'Build: "I have stopped using single-use plastic water bottles."',
      targetStructure: 'Subject + have + stopped + gerund phrase',
      wordBank: ['I', 'have', 'stopped', 'using', 'single-use', 'plastic', 'water', 'bottles', 'to', 'stop', 'use'],
      acceptableSolutions: [
        'I have stopped using single-use plastic water bottles',
        'I have stopped using single-use plastic water bottles.',
      ],
      explanation: 'Present Perfect + gerund phrase.',
    },
    {
      id: 'sc_a2_132_2',
      scenarioContext: 'Express collective action.',
      prompt: 'Build: "We must reduce our energy consumption at home."',
      targetStructure: 'Subject + must + base verb + object phrase',
      wordBank: ['We', 'must', 'reduce', 'our', 'energy', 'consumption', 'at', 'home', 'reducing', 'to', 'should to'],
      acceptableSolutions: [
        'We must reduce our energy consumption at home',
        'We must reduce our energy consumption at home.',
      ],
      explanation: 'Modal obligation sentence with "must".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_132_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! Welcome to the Sheffield Climate Action stall. It is inspiring to see so many local residents here today. Have you adopted any sustainable habits recently in your daily lifestyle?',
      partnerAudioText:
        'Hi there! Welcome to the Sheffield Climate Action stall. It is inspiring to see so many local residents here today. Have you adopted any sustainable habits recently in your daily lifestyle?',
      partnerQuestionHindi:
        'नमस्ते! शेफ़ील्ड क्लाइमेट एक्शन स्टॉल में आपका स्वागत है। आज यहाँ इतने सारे स्थानीय निवासियों को देखना प्रेरणादायक है। क्या आपने हाल ही में अपनी दैनिक जीवनशैली में कोई टिकाऊ आदतें अपनाई हैं?',
      expectedFunction: 'Share Green Lifestyle Habits with Present Perfect (stopped single-use plastic / cycled)',
      contextGoal:
        'Explain that you have stopped buying single-use plastic bottles for six months and have commuted to work by bicycle since last summer to reduce your carbon footprint.',
      targetVocabulary: ['have stopped buying single-use plastic bottles for six months', 'have commuted by bicycle every day since last summer', 'carry a stainless steel bottle and cloth bag', 'lowers my carbon footprint'],
      suggestedResponses: [
        {
          label: 'Spontaneous A2 Scaffold',
          text: 'Hi Chloe! Yes, I have completely stopped buying single-use plastic bottles for six months, and I have commuted by bicycle every day since last summer. It has really helped reduce my personal carbon footprint!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Plastic Habit (stopped plastic / bottles / six months / reusable / cloth bags)',
          patterns: ['plastic', 'bottles', 'six months', 'for six months', 'stopped', 'reusable', 'single-use'],
          required: true,
        },
        {
          name: 'Cycling & Commute (bicycle / bike / cycled / since last summer / commute / carbon footprint)',
          patterns: ['bicycle', 'bike', 'cycled', 'summer', 'commute', 'carbon footprint', 'footprint', 'work'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'plastic_since_six_months',
          pattern: /\bstopped plastic since six months\b/i,
          errorType: 'grammar',
          message: 'Use "for" with durations: "for six months".',
          correctionPattern: 'stopped plastic for six months',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_132_1',
        type: 'multiple_choice',
        prompt: 'Which phrase correctly uses "for" with a duration?',
        options: [
          { id: 'opt_1', text: 'I have used a reusable cup for six months.', isCorrect: true },
          { id: 'opt_2', text: 'I have used a reusable cup since six months.', isCorrect: false },
          { id: 'opt_3', text: 'I use reusable cup since six months.', isCorrect: false },
        ],
        correctAnswer: 'I have used a reusable cup for six months.',
        explanation: '"For" is required when stating the length of a time period ("six months").',
      },
    },
    {
      id: 'turn_a2_132_2',
      turnIndex: 2,
      partnerPrompt:
        'Cycling and reusable bottles make a tangible difference! What about waste management at home? How do you separate your recycling, and do you have access to a food waste composting bin?',
      partnerAudioText:
        'Cycling and reusable bottles make a tangible difference! What about waste management at home? How do you separate your recycling, and do you have access to a food waste composting bin?',
      partnerQuestionHindi:
        'साइकिल चलाना और दोबारा इस्तेमाल होने वाली बोतलें एक ठोस बदलाव लाती हैं! घर पर कचरा प्रबंधन के बारे में क्या? आप अपने पुनर्चक्रण को कैसे अलग करते हैं, और क्या आपके पास खाद्य अपशिष्ट खाद बिन की सुविधा है?',
      expectedFunction: 'Describe Household Waste Sorting & Composting Practices',
      contextGoal:
        'Describe how you separate paper, glass, and aluminum tins into recycling bins, and use a small kitchen caddy to collect organic scraps for the neighborhood compost scheme.',
      targetVocabulary: ['separate paper, glass bottles, and aluminum cans', 'collect vegetable peels and coffee grounds in a kitchen caddy', 'take organic waste to the community compost bin', 'diverts waste from landfills'],
      suggestedResponses: [
        {
          label: 'Spontaneous A2 Scaffold',
          text: 'At home, we carefully separate paper, cardboard, glass, and aluminum cans into blue recycling boxes. We also collect vegetable peels and coffee grounds in a kitchen caddy and take them to the local community compost bin.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Recycling Separation (paper / cardboard / glass / aluminum / cans / recycling / boxes)',
          patterns: ['paper', 'cardboard', 'glass', 'aluminum', 'cans', 'recycling', 'separate', 'bins'],
          required: true,
        },
        {
          name: 'Compost Caddy (food scraps / vegetable peels / coffee / caddy / compost / organic)',
          patterns: ['food scraps', 'peels', 'coffee', 'caddy', 'compost', 'organic', 'community', 'kitchen'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_132_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We collect organic food scraps in a kitchen ___ (caddy / box).',
        options: [
          { id: 'opt_1', text: 'caddy', isCorrect: true },
          { id: 'opt_2', text: 'caddying', isCorrect: false },
          { id: 'opt_3', text: 'cad', isCorrect: false },
        ],
        correctAnswer: 'caddy',
        explanation: 'A "kitchen caddy" is a small bin for countertop food waste collection.',
      },
    },
    {
      id: 'turn_a2_132_3',
      turnIndex: 3,
      partnerPrompt:
        'That is exemplary waste sorting! Individual actions are vital, but we also need community engagement. Our group is planning neighborhood initiatives for next month. What collective projects do you think we should prioritize in our area?',
      partnerAudioText:
        'That is exemplary waste sorting! Individual actions are vital, but we also need community engagement. Our group is planning neighborhood initiatives for next month. What collective projects do you think we should prioritize in our area?',
      partnerQuestionHindi:
        'यह अनुकरणीय कचरा छँटाई है! व्यक्तिगत कार्य महत्वपूर्ण हैं, लेकिन हमें सामुदायिक भागीदारी की भी आवश्यकता है। हमारा समूह अगले महीने के लिए पड़ोस की पहल की योजना बना रहा है। आपके विचार से हमें अपने क्षेत्र में किन सामूहिक परियोजनाओं को प्राथमिकता देनी चाहिए?',
      expectedFunction: 'Propose Collective Environmental Projects with Modals (we should organize river cleanup & plant trees)',
      contextGoal:
        'Suggest that the group should organize a weekend cleanup along the River Don and plant native wildflower gardens in urban parks to support bees and biodiversity.',
      targetVocabulary: ['we should organize a community river cleanup along the River Don', 'we must plant native wildflower gardens for bees and pollinators', 'set up a tool sharing library', 'collective action'],
      suggestedResponses: [
        {
          label: 'Spontaneous A2 Scaffold',
          text: 'I think we should organize a community cleanup along the River Don to remove plastic waste from the riverbanks. Also, we must plant native wildflower gardens in public parks to support bees and local biodiversity.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'River Cleanup (river / don / cleanup / riverbanks / plastic / rubbish / litter)',
          patterns: ['river', 'cleanup', 'clean-up', 'don', 'riverbanks', 'plastic', 'waste', 'litter'],
          required: true,
        },
        {
          name: 'Biodiversity & Plants (wildflowers / trees / bees / parks / plant / biodiversity / pollinators)',
          patterns: ['wildflower', 'wildflowers', 'trees', 'bees', 'parks', 'plant', 'biodiversity', 'pollinators', 'native'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_132_3',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly expresses a modal proposal?',
        options: [
          { id: 'opt_1', text: 'We should plant more trees in public parks.', isCorrect: true },
          { id: 'opt_2', text: 'We should to plant more trees.', isCorrect: false },
          { id: 'opt_3', text: 'We must to planting trees.', isCorrect: false },
        ],
        correctAnswer: 'We should plant more trees in public parks.',
        explanation: 'Modal "should" is followed directly by the base verb "plant".',
      },
    },
    {
      id: 'turn_a2_132_4',
      turnIndex: 4,
      partnerPrompt:
        'A River Don cleanup and pollinator meadow are brilliant ideas! We are holding our first volunteer planning meeting this Thursday at 6:30 PM at the Peace Gardens community hall. Would you like to join our committee?',
      partnerAudioText:
        'A River Don cleanup and pollinator meadow are brilliant ideas! We are holding our first volunteer planning meeting this Thursday at 6:30 PM at the Peace Gardens community hall. Would you like to join our committee?',
      partnerQuestionHindi:
        'रिवर डॉन की सफाई और परागणक घास का मैदान शानदार विचार हैं! हम इस गुरुवार शाम 6:30 बजे पीस गार्डन कम्युनिटी हॉल में अपनी पहली स्वयंसेवक योजना बैठक आयोजित कर रहे हैं। क्या आप हमारी समिति में शामिल होना चाहेंगे?',
      expectedFunction: 'Accept Invitation Enthusiastically, Sign Up & Close Conversation',
      contextGoal:
        'Accept the committee invitation enthusiastically; confirm you will attend Thursday at 6:30 PM at the Peace Gardens hall; exchange email contact.',
      targetVocabulary: ['would love to join the committee', 'will see you on Thursday at 6:30 PM at Peace Gardens', 'here is my email address to sign up', 'excited to collaborate on green projects'],
      suggestedResponses: [
        {
          label: 'Spontaneous A2 Scaffold',
          text: 'I would love to join the committee! I will be there on Thursday at 6:30 PM at the Peace Gardens community hall. Let me write down my email on your volunteer sign-up sheet. Thank you, Chloe!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Acceptance & Details (love to join / committee / thursday / 6:30 / peace gardens / email / sign-up / chloe)',
          patterns: ['love to join', 'committee', 'thursday', '6:30', 'peace gardens', 'email', 'sign-up', 'chloe', 'thank you'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_132_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I look forward to ___ (joining / join) the volunteer group."',
        options: [
          { id: 'opt_1', text: 'joining', isCorrect: true },
          { id: 'opt_2', text: 'join', isCorrect: false },
          { id: 'opt_3', text: 'joined', isCorrect: false },
        ],
        correctAnswer: 'joining',
        explanation: '"Look forward to" is followed by a gerund (-ing form).',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 75,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 70,
  },
};
