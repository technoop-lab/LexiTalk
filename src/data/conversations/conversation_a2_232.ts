import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_232: ConversationDefinition = {
  id: 'conv_a2_232',
  title: 'Environmental Actions & Everyday Eco-Habits',
  cefr: 'A2',
  unitId: 'unit_a2_16',
  lessonLinks: ['lesson_a2_16_232'],
  estimatedMinutes: 5,
  scenario:
    'You participate in a neighborhood "Green Living" workshop and chat with Siddharth, a local environmental activist. You discuss practical eco-friendly daily habits, including composting, reducing single-use plastic, conserving tap water, and taking public transit to lower your carbon footprint.',
  communicativeGoals: [
    'Express environmental obligations and practical advice using modals ("we should", "we must reduce", "ought to")',
    'Discuss sustainability habits such as recycling, composting, and conserving energy and water',
    'Explain cause-and-effect relationships with "by + gerund" ("by turning off lights, we save energy")',
    'Engage in an earnest discussion about environmental sustainability in A2 English',
  ],
  canDoStatements: [
    'Can talk about everyday green practices and eco-friendly habits',
    'Can give advice on conserving energy, reducing waste, and recycling',
    'Can use "by + gerund" to explain how actions achieve environmental outcomes',
  ],
  characters: [
    {
      id: 'char_siddharth_eco_lead',
      name: 'Siddharth',
      role: 'Environmental Workshop Facilitator',
      avatar: '🌱',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'sustainability',
        ipa: '/səˌsteɪnəˈbɪləti/',
        partOfSpeech: 'noun',
        meaning: 'The ability to maintain ecological balance by avoiding depletion of natural resources',
        exampleSentence: 'Adopting daily green habits contributes directly to environmental sustainability.',
        translations: { hi: 'सततता / पर्यावरण अनुकूलता (सस्टेनेबिलिटी)' },
      },
      {
        word: 'compost',
        ipa: '/ˈkɒmpɒst/',
        partOfSpeech: 'noun / verb',
        meaning: 'Decayed organic material used as a plant fertilizer, reducing food waste',
        exampleSentence: 'We compost all vegetable peels and coffee grounds in our garden bin.',
        translations: { hi: 'जैविक खाद / कम्पोस्ट बनाना (कम्पोस्ट)' },
      },
      {
        word: 'conserve',
        ipa: '/kənˈsɜːv/',
        partOfSpeech: 'verb',
        meaning: 'To protect something from harm or destruction; to prevent the wasteful overuse of resources',
        exampleSentence: 'We can conserve clean water by turning off the tap while brushing teeth.',
        translations: { hi: 'संरक्षण करना / बचाना (कंजर्व)' },
      },
      {
        word: 'carbon footprint',
        ipa: '/ˌkɑːbən ˈfʊtprɪnt/',
        partOfSpeech: 'noun phrase',
        meaning: 'The total amount of greenhouse gases produced by our personal actions and travel',
        exampleSentence: 'Commuting by bicycle drastically reduces your personal carbon footprint.',
        translations: { hi: 'कार्बन पदचिह्न / पर्यावरण पर प्रभाव (कार्बन फुटप्रिंट)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'By taking public transit, we can reduce air pollution.',
        functionCategory: 'Explaining cause and effect with "by + gerund"',
        exampleSentence: 'By carrying reusable cloth bags, we eliminate plastic waste.',
      },
      {
        phrase: 'We ought to conserve electricity by switching off idle appliances.',
        functionCategory: 'Giving environmental advice with modals',
        exampleSentence: 'Everyone should make an effort to separate recyclables.',
      },
      {
        phrase: 'Small everyday actions add up to a big positive difference.',
        functionCategory: 'Encouraging sustainable habits',
        exampleSentence: 'Every step toward conservation makes our community greener.',
      },
      {
        phrase: 'What are the easiest green habits for beginners to start with?',
        functionCategory: 'Inquiring about sustainability tips',
        exampleSentence: 'How can our apartment building start a shared compost bin?',
      },
    ],
    grammar: {
      title: 'Modal Verbs of Advice & "By + Gerund" for Environmental Actions',
      conceptExplanation:
        '1. Giving Eco-Advice: Use "should", "ought to", or "need to" followed by a base verb ("We should recycle plastic", "We ought to save water").\n2. Method and Result with "By + -ing": "By doing [Action], we can achieve [Result]" ("By composting food scraps, we reduce landfill waste").\n3. Zero Conditional for Facts: "If you turn off unused lights, you conserve energy."',
      patternFormula: 'By + [Verb-ing], we can + [Base Verb] / We should / ought to + [Base Verb] to protect the environment',
      contrastExamples: [
        {
          incorrect: 'By reuse water bottles, we save plastic.',
          correct: 'By reusing water bottles, we save plastic.',
          explanation: 'After the preposition "by", always use a gerund (-ing form).',
        },
        {
          incorrect: 'We ought save electricity every day.',
          correct: 'We ought to save electricity every day.',
          explanation: '"Ought" must be followed by "to" + base verb.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Siddharth',
        text: 'Welcome to our Green Living workshop! What eco-friendly habits do you already practice at home?',
        translation: 'हमारी ग्रीन लिविंग कार्यशाला में आपका स्वागत है! आप घर पर कौन सी पर्यावरण अनुकूल आदतें पहले से अपनाते हैं?',
      },
      {
        speaker: 'Learner',
        text: 'Hello Siddharth! By carrying reusable bags and bottles, I avoid single-use plastics. I also conserve electricity by turning off appliances.',
        translation: 'नमस्ते सिद्धार्थ! पुन: प्रयोज्य बैग और बोतलें ले जाकर, मैं एकल-उपयोग प्लास्टिक से बचता हूँ। मैं उपकरणों को बंद करके बिजली भी बचाता हूँ।',
      },
      {
        speaker: 'Siddharth',
        text: 'That’s wonderful! Small habits like composting vegetable waste can reduce household garbage even further.',
        translation: 'यह बहुत बढ़िया है! सब्जियों के कचरे से खाद बनाने जैसी छोटी आदतें घरेलू कचरे को और भी कम कर सकती हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_232_1',
      type: 'fill_blank',
      prompt: 'Complete with the gerund: "By ______ (turning / turn) off taps, we conserve fresh water."',
      options: [
        { id: 'opt_1', text: 'turning', isCorrect: true },
        { id: 'opt_2', text: 'turn', isCorrect: false },
        { id: 'opt_3', text: 'turned', isCorrect: false },
      ],
      correctAnswer: 'turning',
      explanation: 'Use a gerund (-ing) after the preposition "by".',
    },
    {
      id: 'cp_232_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly gives advice on reducing waste?',
      options: [
        { id: 'opt_1', text: 'We ought to carry reusable cloth bags whenever we go shopping.', isCorrect: true },
        { id: 'opt_2', text: 'We ought carry reusable cloth bags shopping.', isCorrect: false },
        { id: 'opt_3', text: 'We should to carry reusable cloth bags.', isCorrect: false },
      ],
      correctAnswer: 'We ought to carry reusable cloth bags whenever we go shopping.',
      explanation: '"Ought to + base verb" is the correct modal structure.',
    },
    {
      id: 'cp_232_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [By taking public transit / we can reduce / our carbon footprint / significantly]',
      correctAnswer: 'By taking public transit we can reduce our carbon footprint significantly',
      explanation: '"By + gerund" phrase at start followed by main modal clause.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_232_1',
      prompt: 'Construct a sentence stating that by composting kitchen scraps, we reduce household waste.',
      scenarioContext: 'Explaining eco-habits to Siddharth.',
      targetStructure: 'By composting organic kitchen scraps, we can reduce our household waste substantially.',
      wordBank: ['By composting organic', 'kitchen scraps, we can', 'reduce our household waste', 'substantially,', 'Siddharth.'],
      acceptableSolutions: [
        'By composting organic kitchen scraps, we can reduce our household waste substantially.',
        'By composting food scraps, we reduce household waste.',
      ],
      explanation: '"By + gerund" structure for environmental cause and effect.',
    },
    {
      id: 'sc_232_2',
      prompt: 'Construct a sentence giving advice that everyone ought to conserve electricity by switching off unused lights.',
      scenarioContext: 'Discussing energy conservation.',
      targetStructure: 'We ought to conserve electricity by turning off idle lights and electronics.',
      wordBank: ['We ought to conserve', 'electricity by turning off', 'idle lights and electronics,', 'Siddharth.'],
      acceptableSolutions: [
        'We ought to conserve electricity by turning off idle lights and electronics.',
        'We ought to save electricity by turning off lights.',
      ],
      explanation: 'Modal "ought to" + method with "by + gerund".',
    },
  ],
  turns: [
    {
      id: 'turn_232_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello and welcome to our Green Living workshop! We’re discussing how everyday habits impact the planet. What are some eco-friendly practices that you currently follow at home or during your commute?',
      partnerAudioText:
        'Hello and welcome to our Green Living workshop! We’re discussing how everyday habits impact the planet. What are some eco-friendly practices that you currently follow at home or during your commute?',
      partnerQuestionHindi:
        'नमस्ते और हमारी ग्रीन लिविंग कार्यशाला में आपका स्वागत है! हम चर्चा कर रहे हैं कि रोजमर्रा की आदतें ग्रह को कैसे प्रभावित करती हैं। आप घर पर या यात्रा के दौरान कौन सी पर्यावरण अनुकूल प्रथाओं का पालन करते हैं?',
      expectedFunction: 'Greeting Siddharth and explaining personal green habits using "by + gerund" or modal verbs ("conserve", "reduce")',
      contextGoal: 'Greet Siddharth, state eco-habits (reusable bottles/bags, public transport, conserving water/electricity)',
      targetVocabulary: ['Hello Siddharth', 'conserve', 'reduce', 'by taking transit', 'reusable', 'carbon footprint'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello Siddharth! At home, I conserve water and electricity by turning off taps and lights. During my daily commute, I take public transit to lower my carbon footprint.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi Siddharth! I always carry reusable bags when shopping and avoid single-use plastic bottles. By cycling to work, I also stay healthy and save fuel.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good morning, Siddharth! I practice recycling and conserving electricity. Small daily habits make a big difference for sustainability.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_siddharth',
          patterns: ['hello', 'hi', 'siddharth', 'good morning'],
          required: true,
        },
        {
          name: 'green_habits_by_gerund',
          patterns: ['conserve', 'reduce', 'reusable', 'transit', 'lights', 'water', 'carbon footprint', 'by taking', 'by turning'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_232_1_by_base_verb',
          pattern: /by take public transit|by turn off/i,
          errorType: 'grammar',
          message: 'Use a gerund after "by": "By taking public transit" or "By turning off lights".',
          correctionPattern: 'By taking public transit, I reduce my carbon footprint.',
        },
      ],
      remediationPractice: {
        id: 'rem_232_1',
        type: 'fill_blank',
        prompt: 'Fill in: "By ______ (recycling) paper, we save trees."',
        options: [
          { id: 'r1', text: 'recycling', isCorrect: true },
          { id: 'r2', text: 'recycle', isCorrect: false },
        ],
        correctAnswer: 'recycling',
        explanation: 'Use a gerund after "by".',
      },
    },
    {
      id: 'turn_232_2',
      turnIndex: 2,
      partnerPrompt:
        'Those are excellent daily habits! In today’s session, we’re focusing on home composting for organic food waste. Have you ever tried composting, or would you like to learn how to set up an apartment bin?',
      partnerAudioText:
        'Those are excellent daily habits! In today’s session, we’re focusing on home composting for organic food waste. Have you ever tried composting, or would you like to learn how to set up an apartment bin?',
      partnerQuestionHindi:
        'ये उत्कृष्ट दैनिक आदतें हैं! आज के सत्र में, हम जैविक खाद्य अपशिष्ट के लिए घरेलू खाद बनाने पर ध्यान केंद्रित कर रहे हैं। क्या आपने कभी खाद बनाने की कोशिश की है, या आप अपार्टमेंट बिन स्थापित करना सीखना चाहेंगे?',
      expectedFunction: 'Expressing interest in composting and asking practical questions about smells or maintenance in apartments',
      contextGoal: 'State desire to learn composting, inquire if it creates odors, and ask about suitable kitchen bins',
      targetVocabulary: ['compost', 'organic waste', 'apartment bin', 'kitchen scraps', 'odor', 'learn'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I have never tried composting before, but I would love to learn! How can we manage a small compost bin in an apartment without unpleasant odors?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I really want to take up composting for kitchen scraps. What kind of container is best for a balcony or small kitchen?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Composting sounds very practical. Please teach us how to start a simple home bin for vegetable peels and coffee grounds.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'composting_inquiry',
          patterns: ['compost', 'learn', 'bin', 'apartment', 'scraps', 'kitchen', 'odor', 'smell', 'balcony'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_232_2_try_form',
          pattern: /i never try composting before/i,
          errorType: 'grammar',
          message: 'Use present perfect: "I have never tried composting before."',
          correctionPattern: 'I have never tried composting, but I would love to learn.',
        },
      ],
      remediationPractice: {
        id: 'rem_232_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly inquires about composting?',
        options: [
          { id: 'r1', text: 'How can we set up a compost bin in an apartment effectively?', isCorrect: true },
          { id: 'r2', text: 'How we can make compost bin to apartment without smell?', isCorrect: false },
        ],
        correctAnswer: 'How can we set up a compost bin in an apartment effectively?',
        explanation: 'Correct question word order (modal "can" before subject "we").',
      },
    },
    {
      id: 'turn_232_3',
      turnIndex: 3,
      partnerPrompt:
        'With modern airtight bins and dry carbon material like shredded paper, there is zero odor! I have a free beginner’s composting guide and a seed packet for each attendee. Thank you for championing sustainability!',
      partnerAudioText:
        'With modern airtight bins and dry carbon material like shredded paper, there is zero odor! I have a free beginner’s composting guide and a seed packet for each attendee. Thank you for championing sustainability!',
      partnerQuestionHindi:
        'आधुनिक एयरटाइट डिब्बे और कतरन कागज जैसी सूखी कार्बन सामग्री के साथ, बिल्कुल कोई गंध नहीं होती है! मेरे पास प्रत्येक उपस्थित व्यक्ति के लिए एक नि:शुल्क शुरुआती खाद गाइड और बीज का पैकेट है। स्थिरता का समर्थन करने के लिए धन्यवाद!',
      expectedFunction: 'Thanking Siddharth, accepting the guide, and committing to starting composting at home',
      contextGoal: 'Thank Siddharth, take the starter guide, and confirm you will start composting this week',
      targetVocabulary: ['Thank you Siddharth', 'starter guide', 'sustainability', 'composting bin', 'start this week'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Thank you so much, Siddharth! I will take the composting guide and set up an airtight bin this week. Have a great workshop!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'That is wonderful news! Thank you for the guide and seeds. I’m excited to start composting at home right away.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Thanks a lot, Siddharth! This workshop has inspired me to adopt more green habits. Have a wonderful day!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'gratitude_and_commitment',
          patterns: ['thank you', 'thanks', 'siddharth', 'guide', 'compost', 'this week', 'sustainability', 'seeds'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_232_3_brief_reply',
          pattern: /^thanks bye$/i,
          errorType: 'interaction',
          message: 'Express genuine eco-enthusiasm: "Thank you so much, Siddharth! I look forward to setting up my compost bin."',
          correctionPattern: 'Thank you, Siddharth! I will definitely try composting this week.',
        },
      ],
      remediationPractice: {
        id: 'rem_232_3',
        type: 'fill_blank',
        prompt: 'Fill in: "I am excited ______ (to start) composting."',
        options: [
          { id: 'r1', text: 'to start', isCorrect: true },
          { id: 'r2', text: 'start', isCorrect: false },
        ],
        correctAnswer: 'to start',
        explanation: 'Adjective "excited" takes a to-infinitive.',
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
