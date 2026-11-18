import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_162: ConversationDefinition = {
  id: 'conv_a2_162',
  title: 'Environmental Awareness, Sustainability & Daily Green Habits',
  cefr: 'A2',
  unitId: 'unit_a2_11',
  lessonLinks: ['lesson_a2_11_162'],
  estimatedMinutes: 5,
  scenario:
    'You are in the exhibition hall at the Green Future Eco-Summit in Birmingham speaking with environmental activist Maya Patel. You are discussing sustainable living, waste reduction, and renewable energy. You will share your daily eco-friendly habits, make predictions about future environmental trends using modals of possibility ("will probably", "might", "could"), form environmental First Conditionals, and commit to green action.',
  communicativeGoals: [
    'Describe personal eco-friendly habits such as recycling, composting, and conserving electricity',
    'Make future predictions using modals of possibility ("will probably", "might", "could")',
    'Form First Conditional sentences to explain ecological causes and effects ("If we ban single-use plastics, ocean pollution will decrease")',
    'Express personal environmental commitments and ask about community green programs',
  ],
  canDoStatements: [
    'Can talk about daily green habits, recycling, and sustainable lifestyle choices at A2 level',
    'Can use "will probably", "might", and "could" to express varying degrees of future environmental possibility',
    'Can construct First Conditionals to discuss environmental problems and solutions',
  ],
  characters: [
    {
      id: 'char_maya_patel',
      name: 'Maya Patel',
      role: 'Environmental Campaigner',
      avatar: '🌱',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'sustainability',
        ipa: '/səˌsteɪnəˈbɪləti/',
        partOfSpeech: 'noun',
        meaning: 'The ability to maintain ecological balance by avoiding the depletion of natural resources',
        exampleSentence: 'Urban sustainability requires investment in public transport and solar energy.',
        translations: { hi: 'स्थिरता / पर्यावरण संरक्षण' },
      },
      {
        word: 'single-use',
        ipa: '/ˈsɪŋɡl juːs/',
        partOfSpeech: 'adjective',
        meaning: 'Designed to be used once and then thrown away or destroyed',
        exampleSentence: 'Many supermarkets have phased out single-use plastic shopping bags.',
        translations: { hi: 'एक बार इस्तेमाल होने वाला' },
      },
      {
        word: 'renewable',
        ipa: '/rɪˈnjuːəbl/',
        partOfSpeech: 'adjective',
        meaning: 'Capable of being replenished naturally, such as wind or solar power',
        exampleSentence: 'Solar and wind are clean, renewable sources of energy.',
        translations: { hi: 'नवीकरणीय' },
      },
      {
        word: 'compost',
        ipa: '/ˈkɒmpɒst/',
        partOfSpeech: 'verb',
        meaning: 'To convert organic kitchen waste into decayed matter used as plant fertilizer',
        exampleSentence: 'If we compost food scraps, we will reduce landfill waste significantly.',
        translations: { hi: 'खाद बनाना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'If we reduce single-use plastic, our rivers and oceans will become much cleaner.',
        functionCategory: 'Environmental First Conditionals',
        exampleSentence: 'If people recycle more, landfills will shrink.',
      },
      {
        phrase: 'Cities will probably adopt electric buses within the next five years.',
        functionCategory: 'Modals of High Future Probability ("Will probably")',
        exampleSentence: 'Solar energy will probably become much cheaper.',
      },
      {
        phrase: 'We might see severe water shortages if global temperatures continue to rise.',
        functionCategory: 'Modals of Possibility with "Might" & "Could"',
        exampleSentence: 'New technologies could clean microplastics from water.',
      },
      {
        phrase: 'How can local communities organize neighborhood tree planting projects?',
        functionCategory: 'Inquiring About Grassroots Environmental Action',
        exampleSentence: 'How can we start a community garden?',
      },
    ],
    grammar: {
      title: 'Modals of Possibility & Environmental First Conditionals',
      conceptExplanation:
        '1. Degrees of Future Probability:\n   - "will definitely" = 100% certainty\n   - "will probably" = ~80% likely\n   - "might" / "could" = ~40-50% possible\n   - "probably won’t" = unlikely.\n2. Environmental First Conditionals: "If + Present Simple, will/might + Base Verb" (e.g., "If households install solar panels, emissions will drop").',
      patternFormula: 'Subject + will probably / might / could + [Base Verb] | If + Subject + Present Simple, Subject + will / might + [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'If we will stop plastic, oceans might to become clean.',
          correct: 'If we stop using single-use plastic, our oceans will become much cleaner.',
          explanation: 'Use Present Simple in the if-clause and bare infinitive after modals.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Maya Patel',
        text: 'Welcome to the Green Future Summit! What daily habits do you currently practice to reduce your household carbon footprint?',
        translation: 'ग्रीन फ्यूचर समिट में आपका स्वागत है! अपने घरेलू कार्बन पदचिह्न को कम करने के लिए आप वर्तमान में क्या दैनिक आदतें अपनाते हैं?',
      },
      {
        speaker: 'You',
        text: 'I always carry reusable bags, compost organic kitchen waste, and turn off standby appliances. If more people adopt these habits, landfill waste will decrease.',
        translation: 'मैं हमेशा पुन: प्रयोज्य बैग रखता हूँ, जैविक रसोई के कचरे से खाद बनाता हूँ, और स्टैंडबाय उपकरणों को बंद करता हूँ। यदि अधिक लोग इन आदतों को अपनाते हैं, तो लैंडफिल कचरा कम हो जाएगा।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_162_1',
      type: 'fill_blank',
      prompt: 'Complete the First Conditional: "If we ___ (stop / will stop) using single-use plastics, ocean wildlife will recover."',
      options: [
        { id: 'opt_1', text: 'stop', isCorrect: true },
        { id: 'opt_2', text: 'will stop', isCorrect: false },
        { id: 'opt_3', text: 'stopping', isCorrect: false },
      ],
      correctAnswer: 'stop',
      explanation: 'Use Present Simple ("stop") in the if-clause of a First Conditional.',
    },
    {
      id: 'cp_a2_162_2',
      type: 'multiple_choice',
      prompt: 'Which modal expression shows approximately 80% likelihood for a future trend?',
      options: [
        { id: 'opt_1', text: 'Renewable energy will probably replace coal across Europe by 2035.', isCorrect: true },
        { id: 'opt_2', text: 'Renewable energy might replace coal maybe not.', isCorrect: false },
        { id: 'opt_3', text: 'Renewable energy could to replace coal.', isCorrect: false },
      ],
      correctAnswer: 'Renewable energy will probably replace coal across Europe by 2035.',
      explanation: '"Will probably + base verb" indicates high likelihood.',
    },
    {
      id: 'cp_a2_162_3',
      type: 'multiple_choice',
      prompt: 'Which sentence connects composting to waste reduction correctly?',
      options: [
        { id: 'opt_1', text: 'If households compost food waste, they will produce far less rubbish.', isCorrect: true },
        { id: 'opt_2', text: 'If households will compost, rubbish is less.', isCorrect: false },
        { id: 'opt_3', text: 'Households composted will make less rubbish.', isCorrect: false },
      ],
      correctAnswer: 'If households compost food waste, they will produce far less rubbish.',
      explanation: 'Standard First Conditional structure.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_162_1',
      scenarioContext: 'Form an environmental prediction.',
      prompt: 'Build: "Electric cars will probably become much cheaper."',
      targetStructure: 'Electric cars + will probably become + much cheaper',
      wordBank: ['Electric', 'cars', 'will', 'probably', 'become', 'much', 'cheaper', 'becoming', 'more'],
      acceptableSolutions: [
        'Electric cars will probably become much cheaper',
        'Electric cars will probably become much cheaper.',
      ],
      explanation: '"Will probably + base verb".',
    },
    {
      id: 'sc_a2_162_2',
      scenarioContext: 'Form an eco cause and effect.',
      prompt: 'Build: "If we recycle plastic, oceans will be cleaner."',
      targetStructure: 'If we recycle plastic + oceans will be cleaner',
      wordBank: ['If', 'we', 'recycle', 'plastic', 'oceans', 'will', 'be', 'cleaner', 'recycling', 'would'],
      acceptableSolutions: [
        'If we recycle plastic oceans will be cleaner',
        'If we recycle plastic, oceans will be cleaner.',
        'If we recycle plastic, oceans will be cleaner',
      ],
      explanation: 'First conditional with ecological theme.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_162_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello! Welcome to the Green Future Summit. I’m Maya. We are encouraging everyone to rethink their daily environmental impact. What green habits do you currently practice, and how do they help the environment?',
      partnerAudioText:
        'Hello! Welcome to the Green Future Summit. I’m Maya. We are encouraging everyone to rethink their daily environmental impact. What green habits do you currently practice, and how do they help the environment?',
      partnerQuestionHindi:
        'नमस्ते! ग्रीन फ्यूचर समिट में आपका स्वागत है। मैं माया हूँ। हम सभी को अपने दैनिक पर्यावरणीय प्रभाव पर पुनर्विचार करने के लिए प्रोत्साहित कर रहे हैं। वर्तमान में आप किन हरित आदतों का अभ्यास करते हैं, और वे पर्यावरण की कैसे मदद करती हैं?',
      expectedFunction: 'Describe Daily Green Habits & First Conditional (I recycle paper and glass, carry reusable bags, and if we compost food waste, landfills will decrease)',
      contextGoal:
        'Describe your daily green habits (reusable bags, recycling, turning off lights) and use a First Conditional to explain how this reduces waste.',
      targetVocabulary: ['carry reusable bags and water bottles', 'recycle glass, paper, and metal', 'compost organic food waste', 'If we reduce single-use plastic, pollution will drop', 'conserve electricity'],
      suggestedResponses: [
        {
          label: 'Habits & First Conditional',
          text: 'Hello Maya! I always carry reusable shopping bags, recycle packaging, and turn off standby electronics. If we compost organic waste at home, our landfill waste will decrease significantly.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Green Habits',
          text: 'I cycle to work and avoid single-use plastics. If more people take public transit, urban air quality will improve.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Green Habits (reusable / recycle / compost / cycle / transit / lights / plastic / bags / waste / water / electricity)',
          patterns: ['reusable', 'recycle', 'compost', 'cycle', 'transit', 'lights', 'plastic', 'bags', 'waste', 'water', 'electricity', 'turn off'],
          required: true,
        },
        {
          name: 'Conditional / Effect (if / will / decrease / reduce / cleaner / improve / less / pollution / save)',
          patterns: ['if', 'will', 'decrease', 'reduce', 'cleaner', 'improve', 'less', 'pollution', 'save', 'help'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_will_if_env',
          pattern: 'if we will recycle|if we will reduce',
          errorType: 'grammar',
          message: 'Use Present Simple in the if-clause: "If we recycle...", "If we reduce...".',
          correctionPattern: 'If we reduce single-use plastic',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_162_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "If we ___ (ban / will ban) single-use plastic bottles, parks will stay cleaner."',
        options: [
          { id: 'opt_1', text: 'ban', isCorrect: true },
          { id: 'opt_2', text: 'will ban', isCorrect: false },
          { id: 'opt_3', text: 'banning', isCorrect: false },
        ],
        correctAnswer: 'ban',
        explanation: 'Present Simple in the if-clause of a First Conditional.',
      },
    },
    {
      id: 'turn_a2_162_2',
      turnIndex: 2,
      partnerPrompt:
        'Those are excellent daily commitments! Looking ahead to the next decade, how do you predict cities and energy companies will change? What will probably happen with solar energy and electric vehicles?',
      partnerAudioText:
        'Those are excellent daily commitments! Looking ahead to the next decade, how do you predict cities and energy companies will change? What will probably happen with solar energy and electric vehicles?',
      partnerQuestionHindi:
        'वे उत्कृष्ट दैनिक प्रतिबद्धताएं हैं! अगले दशक को देखते हुए, आप कैसे भविष्यवाणी करते हैं कि शहर और ऊर्जा कंपनियां बदलेंगी? सौर ऊर्जा और इलेक्ट्रिक वाहनों के साथ संभवतः क्या होगा?',
      expectedFunction: 'Make Predictions with "Will probably" & "Might/Could" (Solar panels will probably become standard on new homes, and electric buses could replace diesel fleets)',
      contextGoal:
        'Make future predictions using "will probably", "might", or "could" (e.g. solar energy will probably become much cheaper, cities could ban diesel cars).',
      targetVocabulary: ['Solar panels will probably become cheaper', 'cities will probably expand electric bus networks', 'renewable energy might replace fossil fuels', 'carbon emissions could drop'],
      suggestedResponses: [
        {
          label: 'Predictions with Probability Modals',
          text: 'Solar panels will probably become standard on all new residential buildings, and clean renewable energy might replace most fossil fuels by 2035. Electric transport could also eliminate city smog.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Future Predictions',
          text: 'Electric cars will probably become much cheaper, and cities could ban petrol vehicles in downtown zones.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Modals of Possibility (will probably / might / could / will / probably / likely)',
          patterns: ['will probably', 'might', 'could', 'will', 'probably', 'likely', 'expect'],
          required: true,
        },
        {
          name: 'Green Tech Trends (solar / electric / renewable / fossil fuels / cars / buses / energy / emissions / clean)',
          patterns: ['solar', 'electric', 'renewable', 'fossil fuels', 'cars', 'buses', 'energy', 'emissions', 'clean', 'panels', 'batteries'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_162_2',
        type: 'multiple_choice',
        prompt: 'Which modal sentence expresses high probability about green technology?',
        options: [
          { id: 'opt_1', text: 'Wind and solar power will probably generate half of our electricity soon.', isCorrect: true },
          { id: 'opt_2', text: 'Wind power will probably to generate electricity.', isCorrect: false },
          { id: 'opt_3', text: 'Wind power generates probably tomorrow.', isCorrect: false },
        ],
        correctAnswer: 'Wind and solar power will probably generate half of our electricity soon.',
        explanation: '"Will probably + base verb" indicates high likelihood.',
      },
    },
    {
      id: 'turn_a2_162_3',
      turnIndex: 3,
      partnerPrompt:
        'I completely agree! Government policy and green technology must work hand in hand. Do you have any questions about how our campaign supports neighborhood composting or community tree planting?',
      partnerAudioText:
        'I completely agree! Government policy and green technology must work hand in hand. Do you have any questions about how our campaign supports neighborhood composting or community tree planting?',
      partnerQuestionHindi:
        'मैं पूरी तरह सहमत हूँ! सरकारी नीति और हरित प्रौद्योगिकी को साथ मिलकर काम करना चाहिए। क्या आपके पास कोई प्रश्न है कि हमारा अभियान पड़ोस में खाद बनाने या सामुदायिक वृक्षारोपण का कैसे समर्थन करता है?',
      expectedFunction: 'Ask About Community Action & Volunteer Programs (How can local residents join the community tree planting scheme or get free compost bins?)',
      contextGoal:
        'Ask Maya how residents can get involved in local tree-planting events and whether the council provides subsidized compost bins.',
      targetVocabulary: ['How can residents volunteer for tree planting?', 'community composting bins', 'subsidized rain barrels', 'get involved in local initiatives'],
      suggestedResponses: [
        {
          label: 'Community Program Question',
          text: 'How can local residents volunteer for weekend tree planting, and does the campaign provide subsidized home composting bins?',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Volunteer Inquiry',
          text: 'Where can we sign up for neighborhood green projects, and how do we start a shared community garden?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Question on Volunteering / Composting (how can / where can / volunteer / join / tree planting / compost / bins / get involved / ?)',
          patterns: ['how can', 'where can', 'volunteer', 'join', 'tree planting', 'compost', 'bins', 'get involved', 'sign up', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_162_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "How can we ___ (get involved / getting involved) in the tree planting scheme?"',
        options: [
          { id: 'opt_1', text: 'get involved', isCorrect: true },
          { id: 'opt_2', text: 'getting involved', isCorrect: false },
          { id: 'opt_3', text: 'to get involved', isCorrect: false },
        ],
        correctAnswer: 'get involved',
        explanation: 'Modal "can" takes the base verb phrase "get involved".',
      },
    },
    {
      id: 'turn_a2_162_4',
      turnIndex: 4,
      partnerPrompt:
        'You can sign up on our website for our Saturday planting drives, and the council offers free compost bins to every registered household! Could you summarize your personal commitments to environmental sustainability?',
      partnerAudioText:
        'You can sign up on our website for our Saturday planting drives, and the council offers free compost bins to every registered household! Could you summarize your personal commitments to environmental sustainability?',
      partnerQuestionHindi:
        'आप हमारे शनिवार के पौधारोपण अभियानों के लिए हमारी वेबसाइट पर साइन अप कर सकते हैं, और परिषद प्रत्येक पंजीकृत परिवार को मुफ्त कम्पोस्ट बिन प्रदान करती है! क्या आप पर्यावरणीय स्थिरता के लिए अपनी व्यक्तिगत प्रतिबद्धताओं का संक्षेप प्रस्तुत कर सकते हैं?',
      expectedFunction: 'Summarize Environmental Commitments & Close (To summarize, I will eliminate single-use plastics, compost organic waste, support renewable energy, and volunteer for tree planting)',
      contextGoal:
        'Summarize your green plan: avoid single-use plastics, compost at home, conserve power, sign up for tree planting, and thank Maya.',
      targetVocabulary: ['To summarize my green commitments', 'eliminate single-use plastic', 'start home composting', 'conserve electricity and cycle more', 'volunteer for Saturday tree planting', 'thank you Maya'],
      suggestedResponses: [
        {
          label: 'Comprehensive Sustainability Summary',
          text: 'To summarize my commitments: I will eliminate single-use plastics, compost household organic waste, reduce home energy consumption, and sign up for the Saturday tree-planting drive. Thank you for inspiring action, Maya!',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Sustainability Summary',
          text: 'In summary, I commit to recycling, home composting, using reusable bags, and joining community planting days. Thanks for your fantastic work, Maya!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Summary Signpost (to summarize / in summary / summary / commit / commitments / so)',
          patterns: ['to summarize', 'in summary', 'summary', 'commit', 'commitments', 'so', 'plan'],
          required: true,
        },
        {
          name: 'Key Commitments (plastic / compost / energy / trees / plant / volunteer / thank you / maya)',
          patterns: ['plastic', 'compost', 'energy', 'trees', 'plant', 'volunteer', 'thank you', 'maya', 'thanks', 'recycle'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_162_4',
        type: 'multiple_choice',
        prompt: 'Which summary effectively states personal environmental commitments?',
        options: [
          { id: 'opt_1', text: 'To summarize, I will avoid single-use plastic, compost organic food, and join the tree-planting initiative.', isCorrect: true },
          { id: 'opt_2', text: 'I throw rubbish everywhere goodbye.', isCorrect: false },
          { id: 'opt_3', text: 'Climate change is not my problem.', isCorrect: false },
        ],
        correctAnswer: 'To summarize, I will avoid single-use plastic, compost organic food, and join the tree-planting initiative.',
        explanation: 'Positive, well-structured environmental commitment summary.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 65,
  },
};
