import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_87: ConversationDefinition = {
  id: 'conv_a1_87',
  title: 'Environmental Awareness, Recycling & Sustainable Habits',
  cefr: 'A1',
  unitId: 'unit_a1_6',
  lessonLinks: ['lesson_a1_6_87'],
  estimatedMinutes: 5,
  scenario:
    'You participate in a community sustainability workshop at the Cambridge Eco Center. You discuss environmental conservation with Environmental Educator Leo Jensen, explain household recycling sorting habits, propose daily energy-saving measures, and discuss collective actions to reduce single-use plastic.',
  communicativeGoals: [
    'Discuss environmental challenges and sustainability using modal advice ("We should reduce...", "It is important to conserve...")',
    'Explain recycling classifications (organic food waste, dry paper/cardboard, glass bottles, clean plastics)',
    'Propose sustainable household habits (reusable tote bags, LED bulbs, cycling or public transit)',
    'Retrieve earlier home, shopping, transport, and daily routine vocabulary in an ecological discussion',
  ],
  canDoStatements: [
    'Can discuss practical everyday ways to protect the environment',
    'Can explain how household waste and recyclables are sorted into categories',
    'Can suggest energy-saving and plastic reduction habits using modal expressions',
  ],
  characters: [
    {
      id: 'char_leo_jensen',
      name: 'Leo Jensen',
      role: 'Environmental Educator',
      avatar: '🌱',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'sustainable',
        ipa: '/səˈsteɪnəbəl/',
        partOfSpeech: 'adjective',
        meaning: 'Able to be maintained at a certain rate or level without depleting natural resources',
        exampleSentence: 'Adopting sustainable habits helps reduce our carbon footprint.',
        translations: { hi: 'टिकाऊ / पर्यावरण अनुकूल' },
      },
      {
        word: 'biodegradable',
        ipa: '/ˌbaɪoʊdɪˈɡreɪdəbəl/',
        partOfSpeech: 'adjective',
        meaning: 'Capable of being decomposed by bacteria or other living organisms',
        exampleSentence: 'We use biodegradable food packaging for all our takeout meals.',
        translations: { hi: 'जैवनिम्नीकरणीय / प्राकृतिक रूप से गलने योग्य' },
      },
      {
        word: 'conserve',
        ipa: '/kənˈsɜːrv/',
        partOfSpeech: 'verb',
        meaning: 'Protect something from harm, waste, or loss (e.g. water, energy)',
        exampleSentence: 'We can conserve electricity by switching off unused appliances.',
        translations: { hi: 'संरक्षण करना / बचत करना' },
      },
      {
        word: 'footprint',
        ipa: '/ˈfʊtprɪnt/',
        partOfSpeech: 'noun',
        meaning: 'The impact or amount of greenhouse gases produced by human activity',
        exampleSentence: 'Walking and cycling significantly lower your personal carbon footprint.',
        translations: { hi: 'कार्बन पदचिह्न / पर्यावरणीय प्रभाव' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'We should make an effort to reduce...',
        functionCategory: 'Modal Advice',
        exampleSentence: 'We should make an effort to reduce single-use plastic bottles.',
      },
      {
        phrase: 'In my household, we separate waste into...',
        functionCategory: 'Describing Habits',
        exampleSentence: 'In my household, we separate waste into paper, glass, plastic, and compost.',
      },
      {
        phrase: 'It is essential to conserve energy by...',
        functionCategory: 'Proposing Action',
        exampleSentence: 'It is essential to conserve energy by turning off lights and using public transit.',
      },
      {
        phrase: 'Small daily changes create a big impact.',
        functionCategory: 'Reflecting on Impact',
        exampleSentence: 'Small daily changes create a big impact over time.',
      },
    ],
    grammar: {
      title: 'Modal Recommendations for Sustainability: "Should", "Ought to", & "It is important to..."',
      conceptExplanation:
        'Express environmental recommendations using modal verbs or adjective clauses: "We should recycle [noun]", "We must avoid [noun]", "It is important to conserve [noun]".',
      patternFormula: 'We should / must + [Base Verb] / It is essential to + [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'We should to throwing plastic in river yesterday.',
          correct: 'We should recycle plastic bottles instead of throwing them away.',
          explanation: 'Use base verb after modal "should".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Leo Jensen',
        text: 'Welcome to the Cambridge Eco Workshop! What sustainable habits do you practice at home to protect the environment?',
        translation: 'कैम्ब्रिज इको वर्कशॉप में आपका स्वागत है! पर्यावरण की रक्षा के लिए आप घर पर कौन सी टिकाऊ आदतें अपनाते हैं?',
      },
      {
        speaker: 'You',
        text: 'Hello Leo! In our household, we separate all recyclables into paper, glass, and plastic, compost organic food scraps, and carry reusable cloth bags when grocery shopping.',
        translation: 'नमस्ते लियो! हमारे घर में, हम सभी पुनर्चक्रण योग्य वस्तुओं को कागज, कांच और प्लास्टिक में अलग करते हैं, जैविक भोजन के टुकड़ों को कम्पोस्ट करते हैं, और किराने की खरीदारी करते समय पुन: प्रयोज्य कपड़े के बैग ले जाते हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_87_1',
      type: 'fill_blank',
      prompt: 'Complete the modal recommendation: "We should ___ single-use plastic containers."',
      options: [
        { id: 'opt_1', text: 'avoid', isCorrect: true },
        { id: 'opt_2', text: 'avoiding', isCorrect: false },
        { id: 'opt_3', text: 'avoided', isCorrect: false },
      ],
      correctAnswer: 'avoid',
      explanation: 'Base verb "avoid" follows modal "should".',
    },
    {
      id: 'cp_a1_87_2',
      type: 'multiple_choice',
      prompt: 'Which sentence explains household waste sorting clearly?',
      options: [
        { id: 'opt_1', text: 'We separate waste into distinct bins for paper, plastics, glass, and organic compost.', isCorrect: true },
        { id: 'opt_2', text: 'Garbage all together in one big plastic hole.', isCorrect: false },
        { id: 'opt_3', text: 'Trash goes everywhere outside.', isCorrect: false },
      ],
      correctAnswer: 'We separate waste into distinct bins for paper, plastics, glass, and organic compost.',
      explanation: 'Accurate, structured, and descriptive categorization.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_87_1',
      scenarioContext: 'Propose an energy conservation action.',
      prompt: 'Build: "We should turn off lights to save energy."',
      targetStructure: 'We should turn off lights to save energy',
      wordBank: ['We', 'should', 'turn', 'off', 'lights', 'to', 'save', 'energy', 'turning', 'can'],
      acceptableSolutions: [
        'We should turn off lights to save energy',
        'We should turn off lights to save energy.',
      ],
      explanation: 'Modal recommendation structure with infinitive of purpose.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_87_1',
      turnIndex: 1,
      partnerPrompt:
        'Welcome to the Cambridge Sustainability Forum! I am Leo. How do you and your household currently sort and manage everyday waste and recyclables?',
      partnerAudioText:
        'Welcome to the Cambridge Sustainability Forum! I am Leo. How do you and your household currently sort and manage everyday waste and recyclables?',
      partnerQuestionHindi:
        'कैम्ब्रिज सस्टेनेबिलिटी फोरम में आपका स्वागत है! मैं लियो हूँ। आप और आपका परिवार वर्तमान में दैनिक कचरे और पुनर्चक्रण योग्य वस्तुओं को कैसे छांटते और प्रबंधित करते हैं?',
      expectedFunction: 'Explain Household Waste Sorting Categories (Paper, Glass, Plastics, Compost)',
      contextGoal:
        'Explain that your household sorts waste into four bins: dry paper/cardboard, rinsed plastic containers, glass bottles, and kitchen food compost.',
      targetVocabulary: ['sort waste into four categories', 'dry paper and cardboard', 'rinsed plastic and glass', 'organic kitchen compost'],
      suggestedResponses: [
        {
          label: 'Independent A1',
          text: 'Hello Leo! In our flat, we sort waste into four separate bins: dry paper and cardboard, clean plastic containers, glass jars, and organic kitchen food scraps for compost.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Waste Categories',
          patterns: [
            'sort',
            'paper',
            'cardboard',
            'plastic',
            'glass',
            'compost',
            'bins',
            'separate',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_87_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We sort glass bottles into a ___ bin."',
        options: [
          { id: 'opt_1', text: 'separate', isCorrect: true },
          { id: 'opt_2', text: 'separately of', isCorrect: false },
          { id: 'opt_3', text: 'separation', isCorrect: false },
        ],
        correctAnswer: 'separate',
        explanation: 'Adjective: "separate bin".',
      },
    },
    {
      id: 'turn_a1_87_2',
      turnIndex: 2,
      partnerPrompt:
        'That is an excellent recycling system! What specific habits have you adopted to reduce single-use plastic and eliminate food packaging waste?',
      partnerAudioText:
        'That is an excellent recycling system! What specific habits have you adopted to reduce single-use plastic and eliminate food packaging waste?',
      partnerQuestionHindi:
        'यह एक उत्कृष्ट पुनर्चक्रण प्रणाली है! आपने एकल-उपयोग प्लास्टिक को कम करने और खाद्य पैकेजिंग कचरे को खत्म करने के लिए कौन सी विशिष्ट आदतें अपनाई हैं?',
      expectedFunction: 'Describe Habits for Reducing Single-Use Plastics (Reusable Bags, Bottles, Bulk Shopping)',
      contextGoal:
        'Explain that you always carry reusable cotton tote bags, a stainless steel water bottle, and buy dry groceries in bulk containers.',
      targetVocabulary: ['carry reusable cotton tote bags', 'stainless steel water bottle', 'buy groceries in bulk', 'eliminate single-use plastic bags'],
      suggestedResponses: [
        {
          label: 'Independent A1',
          text: 'We always carry reusable cotton tote bags for supermarket shopping and carry a refillable stainless steel water bottle. We also buy grains and nuts in bulk to eliminate excess plastic wrapping.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Plastic Reduction Habits',
          patterns: [
            'reusable',
            'tote bags',
            'bags',
            'water bottle',
            'refillable',
            'bulk',
            'plastic',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_87_2',
        type: 'multiple_choice',
        prompt: 'Which sentence describes a practical plastic reduction habit?',
        options: [
          { id: 'opt_1', text: 'I always bring reusable shopping bags and drink from a refillable bottle.', isCorrect: true },
          { id: 'opt_2', text: 'I take fifty plastic bags every store day.', isCorrect: false },
          { id: 'opt_3', text: 'Throw bottles in road.', isCorrect: false },
        ],
        correctAnswer: 'I always bring reusable shopping bags and drink from a refillable bottle.',
        explanation: 'Eco-friendly and clear habit description.',
      },
    },
    {
      id: 'turn_a1_87_3',
      turnIndex: 3,
      partnerPrompt:
        'Fantastic practices. Beyond recycling, what energy-saving habits or transport choices do you recommend to reduce carbon emissions at home and in our city?',
      partnerAudioText:
        'Fantastic practices. Beyond recycling, what energy-saving habits or transport choices do you recommend to reduce carbon emissions at home and in our city?',
      partnerQuestionHindi:
        'शानदार अभ्यास। पुनर्चक्रण से परे, घर पर और हमारे शहर में कार्बन उत्सर्जन को कम करने के लिए आप ऊर्जा-बचत की किन आदतों या परिवहन विकल्पों की सिफारिश करते हैं?',
      expectedFunction: 'Propose Energy Conservation & Sustainable Transport Habits',
      contextGoal:
        'Suggest turning off lights when leaving rooms, using energy-efficient LED bulbs, taking the train or cycling instead of driving, and lowering thermostats by 1°C.',
      targetVocabulary: ['energy-efficient LED bulbs', 'switch off unused appliances', 'cycle or use public transit', 'lower thermostat to conserve energy'],
      suggestedResponses: [
        {
          label: 'Independent A1',
          text: 'We should switch off lights and unplug unused electronics, install energy-efficient LED bulbs, and lower heating by one degree. For commuting, walking, cycling, or taking the train significantly cuts carbon emissions.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Energy & Transport Advice',
          patterns: [
            'switch off',
            'lights',
            'led',
            'heating',
            'cycling',
            'walking',
            'train',
            'public transit',
            'emissions',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_87_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Cycling helps to ___ carbon emissions."',
        options: [
          { id: 'opt_1', text: 'reduce', isCorrect: true },
          { id: 'opt_2', text: 'increase of', isCorrect: false },
          { id: 'opt_3', text: 'reducings', isCorrect: false },
        ],
        correctAnswer: 'reduce',
        explanation: 'Infinitive after "helps to": "reduce".',
      },
    },
    {
      id: 'turn_a1_87_4',
      turnIndex: 4,
      partnerPrompt:
        'Your ideas are practical, impactful, and inspiring! We are organizing a community tree-planting event next Saturday in Cherry Hinton Hall Park. Would you like to volunteer with us?',
      partnerAudioText:
        'Your ideas are practical, impactful, and inspiring! We are organizing a community tree-planting event next Saturday in Cherry Hinton Hall Park. Would you like to volunteer with us?',
      partnerQuestionHindi:
        'आपके विचार व्यावहारिक, प्रभावशाली और प्रेरणादायक हैं! हम अगले शनिवार को चेरी हिंटन हॉल पार्क में एक सामुदायिक वृक्षारोपण कार्यक्रम आयोजित कर रहे हैं। क्या आप हमारे साथ स्वयंसेवा करना चाहेंगे?',
      expectedFunction: 'Volunteer for Community Tree-Planting & Conclude Workshop Discussion',
      contextGoal:
        'Accept the volunteering opportunity enthusiastically, state you will bring a water bottle and gloves, and thank Leo for an insightful workshop.',
      targetVocabulary: ['delighted to volunteer for tree-planting', 'next Saturday morning', 'bring reusable gloves', 'thank you Leo for inspiring workshop'],
      suggestedResponses: [
        {
          label: 'Independent A1',
          text: 'I would love to volunteer for the tree-planting event next Saturday! I will bring my gloves and refillable bottle. Thank you so much Leo for such an inspiring workshop!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Volunteering & Workshop Close',
          patterns: [
            'volunteer',
            'tree-planting',
            'saturday',
            'gloves',
            'thank you',
            'leo',
            'inspiring',
            'workshop',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_87_4',
        type: 'multiple_choice',
        prompt: 'Which response enthusiastically accepts an environmental volunteering invitation?',
        options: [
          { id: 'opt_1', text: 'I would love to volunteer for the tree-planting event next Saturday. Thank you Leo!', isCorrect: true },
          { id: 'opt_2', text: 'I do not touch dirty ground tree.', isCorrect: false },
          { id: 'opt_3', text: 'Saturday sleeping no park.', isCorrect: false },
        ],
        correctAnswer: 'I would love to volunteer for the tree-planting event next Saturday. Thank you Leo!',
        explanation: 'Enthusiastic, positive, and polite closure.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 70,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 60,
  },
};
