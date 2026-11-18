import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_181: ConversationDefinition = {
  id: 'conv_a2_181',
  title: 'Exploring Nature, Landscapes, National Parks & Wildlife',
  cefr: 'A2',
  unitId: 'unit_a2_13',
  lessonLinks: ['lesson_a2_13_181'],
  estimatedMinutes: 5,
  scenario:
    'You are visiting the Highlands National Park Visitor Centre. You are speaking with Park Ranger David about the best hiking trails, scenic valleys, waterfalls, and native wildlife to see during your day trip.',
  communicativeGoals: [
    'Describe landscapes and natural features using defining relative clauses (who, which, that, where)',
    'Ask for trail recommendations and scenic viewpoints in a national park',
    'Understand and confirm safety rules regarding wildlife encounters',
    'Express enthusiasm and ask follow-up questions about nature tours',
  ],
  canDoStatements: [
    'Can describe natural landscapes using relative pronouns (which/that for things, where for places, who for people)',
    'Can ask a park ranger for directions and recommendations for outdoor trails',
    'Can understand basic park safety regulations and animal protection rules',
  ],
  characters: [
    {
      id: 'char_ranger_david',
      name: 'Ranger David',
      role: 'Highlands National Park Guide',
      avatar: '🌲',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'valley',
        ipa: '/ˈvæli/',
        partOfSpeech: 'noun',
        meaning: 'A low area of land between hills or mountains',
        exampleSentence: 'The green valley has a quiet river running through it.',
        translations: { hi: 'घाटी' },
      },
      {
        word: 'waterfall',
        ipa: '/ˈwɔːtəfɔːl/',
        partOfSpeech: 'noun',
        meaning: 'A cascade of water falling from a height',
        exampleSentence: 'We hiked to a beautiful waterfall in the forest.',
        translations: { hi: 'झरना / जलप्रपात' },
      },
      {
        word: 'wildlife',
        ipa: '/ˈwaɪldlaɪf/',
        partOfSpeech: 'noun',
        meaning: 'Wild animals living in a natural habitat',
        exampleSentence: 'You can spot rare wildlife early in the morning.',
        translations: { hi: 'वन्यजीव' },
      },
      {
        word: 'trail',
        ipa: '/treɪl/',
        partOfSpeech: 'noun',
        meaning: 'A marked path through a forest or natural area',
        exampleSentence: 'This trail leads to the mountain summit.',
        translations: { hi: 'रास्ता / पगडंडी' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Is there a trail that leads to the waterfall?',
        functionCategory: 'Inquiring about specific routes',
        exampleSentence: 'Is there a trail that is easy for beginners?',
      },
      {
        phrase: 'We are looking for a place where we can see birds.',
        functionCategory: 'Specifying locations with relative where',
        exampleSentence: 'This is the spot where eagles build their nests.',
      },
      {
        phrase: 'The guide who led our group was very helpful.',
        functionCategory: 'Describing people with who',
        exampleSentence: 'I met a hiker who knows this mountain well.',
      },
      {
        phrase: 'What should we do if we encounter wild animals?',
        functionCategory: 'Asking safety advice',
        exampleSentence: 'What should we do if it starts raining on the trail?',
      },
    ],
    grammar: {
      title: 'Defining Relative Clauses: who, which / that, where',
      conceptExplanation:
        'Use defining relative clauses to give essential information about a noun:\n- "who" for people ("The ranger who gave us a map...")\n- "which" or "that" for animals, landscapes, and objects ("A trail that leads to the valley...")\n- "where" for places ("The viewpoint where you can see the canyon...")',
      patternFormula: '[Noun] + [who / which / that / where] + [Verb / Clause]',
      contrastExamples: [
        {
          incorrect: 'I want to visit the valley who has waterfalls.',
          correct: 'I want to visit the valley that has waterfalls.',
          explanation: 'Use "which" or "that" for places/things when followed by a verb; use "who" only for people.',
        },
        {
          incorrect: 'This is the park which we saw deer yesterday.',
          correct: 'This is the park where we saw deer yesterday.',
          explanation: 'Use "where" when describing a place in which an action happens.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Ranger David',
        text: 'Welcome to the park! Which trail would you like to explore today?',
        translation: 'पार्क में आपका स्वागत है! आज आप कौन से रास्ते पर जाना चाहेंगे?',
      },
      {
        speaker: 'Learner',
        text: 'We want to find a trail that leads to the big waterfall.',
        translation: 'हम एक ऐसा रास्ता खोजना चाहते हैं जो बड़े झरने तक जाता हो।',
      },
      {
        speaker: 'Ranger David',
        text: 'Pine Ridge trail is perfect. It passes an area where mountain deer live.',
        translation: 'पाइन रिज का रास्ता बिल्कुल सही है। यह उस इलाके से गुजरता है जहाँ पहाड़ी हिरण रहते हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_181_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "We met a ranger ______ helped us choose an easy route."',
      options: [
        { id: 'opt_1', text: 'who', isCorrect: true },
        { id: 'opt_2', text: 'where', isCorrect: false },
        { id: 'opt_3', text: 'which', isCorrect: false },
      ],
      correctAnswer: 'who',
      explanation: 'Use "who" to refer to a person (the ranger).',
    },
    {
      id: 'cp_181_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes a viewpoint in the mountains?',
      options: [
        { id: 'opt_1', text: 'This is the spot where you can see the whole valley.', isCorrect: true },
        { id: 'opt_2', text: 'This is the spot who you can see the whole valley.', isCorrect: false },
        { id: 'opt_3', text: 'This is the spot which you can see the valley in it.', isCorrect: false },
      ],
      correctAnswer: 'This is the spot where you can see the whole valley.',
      explanation: '"Where" introduces the place where you see the valley.',
    },
    {
      id: 'cp_181_3',
      type: 'chunk_order',
      prompt: 'Put the words in order: [leads / that / a / trail / to the lake / choose]',
      correctAnswer: 'choose a trail that leads to the lake',
      explanation: 'Structure: [Verb] + [Noun Phrase] + [that + Verb Phrase].',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_181_1',
      prompt: 'Construct a sentence stating you want a scenic trail that has waterfalls.',
      scenarioContext: 'Asking the park ranger for route suggestions.',
      targetStructure: 'I would like a trail that has waterfalls.',
      wordBank: ['I', 'would like', 'a trail', 'that', 'has', 'waterfalls', 'and', 'valleys'],
      acceptableSolutions: [
        'I would like a trail that has waterfalls.',
        'I want a trail that has waterfalls.',
        'We would like a trail that has waterfalls.',
      ],
      explanation: 'Use relative pronoun "that" or "which" with the verb "has".',
    },
    {
      id: 'sc_181_2',
      prompt: 'Construct a sentence describing a forest area where rare birds live.',
      scenarioContext: 'Talking about wildlife spotting.',
      targetStructure: 'This is the forest where rare birds live.',
      wordBank: ['This', 'is', 'the forest', 'where', 'rare birds', 'live', 'in summer'],
      acceptableSolutions: [
        'This is the forest where rare birds live.',
        'There is a forest where rare birds live.',
      ],
      explanation: 'Use "where" followed by subject + verb to identify the habitat.',
    },
  ],
  turns: [
    {
      id: 'turn_181_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello there! Welcome to the Highlands National Park information desk. How can I help you plan your hike today?',
      partnerAudioText:
        'Hello there! Welcome to the Highlands National Park information desk. How can I help you plan your hike today?',
      partnerQuestionHindi:
        'नमस्ते! हाइलैंड्स नेशनल पार्क सूचना केंद्र में आपका स्वागत है। आज आपकी पदयात्रा की योजना बनाने में मैं आपकी क्या मदद कर सकता हूँ?',
      expectedFunction: 'Greeting and requesting trail recommendations with relative clauses',
      contextGoal: 'Greet Ranger David and ask for a scenic trail that leads to waterfalls or mountains',
      targetVocabulary: ['trail', 'waterfall', 'valley', 'recommend'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello Ranger David! We are looking for a trail that leads to the waterfall.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi! Could you recommend a path that has scenic views of the valley?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good morning! We want to hike along a route where we can see natural waterfalls.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_intent',
          patterns: ['hello', 'hi', 'good morning', 'looking for', 'want', 'recommend'],
          required: true,
        },
        {
          name: 'trail_feature',
          patterns: ['trail', 'path', 'waterfall', 'valley', 'mountain', 'nature', 'that', 'which', 'where'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_181_1_relative',
          pattern: /trail who/i,
          errorType: 'grammar',
          message: 'Use "that" or "which" for trails and places, not "who".',
          correctionPattern: 'a trail that leads to...',
        },
        {
          id: 'err_181_1_greeting',
          pattern: /^(give me map|trail map)$/i,
          errorType: 'interaction',
          message: 'Start with a polite greeting and complete sentence.',
          correctionPattern: 'Hello! Could you recommend a trail that...',
        },
      ],
      remediationPractice: {
        id: 'rem_181_1',
        type: 'fill_blank',
        prompt: 'Choose the correct relative word: "I want a trail ______ passes the river."',
        options: [
          { id: 'r1', text: 'that', isCorrect: true },
          { id: 'r2', text: 'who', isCorrect: false },
        ],
        correctAnswer: 'that',
        explanation: 'Use "that" or "which" for things like trails.',
      },
    },
    {
      id: 'turn_181_2',
      turnIndex: 2,
      partnerPrompt:
        'The River Valley Trail is wonderful! It takes about two hours. You will cross a wooden bridge where you can see the canyon. Are you interested in spotting local wildlife along the way?',
      partnerAudioText:
        'The River Valley Trail is wonderful! It takes about two hours. You will cross a wooden bridge where you can see the canyon. Are you interested in spotting local wildlife along the way?',
      partnerQuestionHindi:
        'रिवर वैली ट्रेल बहुत बढ़िया है! इसमें लगभग दो घंटे लगते हैं। आप एक लकड़ी का पुल पार करेंगे जहाँ से आप घाटी देख सकते हैं। क्या आप रास्ते में स्थानीय वन्यजीव देखने में रुचि रखते हैं?',
      expectedFunction: 'Expressing interest in wildlife and asking what animals live there',
      contextGoal: 'Confirm interest and ask which animals or birds you can see on the trail',
      targetVocabulary: ['wildlife', 'animals', 'birds', 'deer'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Yes, definitely! What kind of wildlife can we see on this trail?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Yes, that sounds exciting! Are there animals that live in this valley?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'We would love that! Can you tell us about the animals which live around the river?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'interest_affirmation',
          patterns: ['yes', 'definitely', 'sounds', 'would love', 'interested'],
          required: true,
        },
        {
          name: 'wildlife_query',
          patterns: ['wildlife', 'animals', 'birds', 'deer', 'spot', 'see', 'live'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_181_2_wildlife_plural',
          pattern: /wildlifes/i,
          errorType: 'grammar',
          message: '"Wildlife" is an uncountable noun. Do not add "s".',
          correctionPattern: 'wildlife',
        },
      ],
      remediationPractice: {
        id: 'rem_181_2',
        type: 'multiple_choice',
        prompt: 'Which sentence is grammatically correct?',
        options: [
          { id: 'r1', text: 'We hope to see interesting wildlife today.', isCorrect: true },
          { id: 'r2', text: 'We hope to see interesting wildlifes today.', isCorrect: false },
        ],
        correctAnswer: 'We hope to see interesting wildlife today.',
        explanation: '"Wildlife" is uncountable.',
      },
    },
    {
      id: 'turn_181_3',
      turnIndex: 3,
      partnerPrompt:
        'You might see red deer, foxes, and golden eagles. Just remember the main park rule: please do not feed any animals that you encounter, and keep a safe distance. What gear or supplies do you have with you?',
      partnerAudioText:
        'You might see red deer, foxes, and golden eagles. Just remember the main park rule: please do not feed any animals that you encounter, and keep a safe distance. What gear or supplies do you have with you?',
      partnerQuestionHindi:
        'आपको लाल हिरण, लोमड़ियाँ और सुनहरे चील दिख सकते हैं। बस पार्क का मुख्य नियम याद रखें: किसी भी जानवर को खाना न दें और सुरक्षित दूरी बनाए रखें। आपके पास क्या सामान है?',
      expectedFunction: 'Acknowledging safety guidelines and stating outdoor gear/supplies',
      contextGoal: 'Acknowledge the safety rule and mention basic gear (water, boots, rain jacket, map)',
      targetVocabulary: ['water', 'boots', 'jacket', 'understand', 'safe'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'We understand. We have sturdy hiking boots, drinking water, and rain jackets.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'That makes sense. We brought plenty of water and wear boots that are good for walking.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Understood, we will keep a safe distance! We have our backpacks, water, and warm jackets.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'rule_acknowledgment',
          patterns: ['understand', 'makes sense', 'sure', 'understood', 'of course', 'safe'],
          required: true,
        },
        {
          name: 'gear_items',
          patterns: ['water', 'boots', 'jacket', 'backpack', 'shoes', 'map', 'supplies'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_181_3_gear',
          pattern: /i have water and boot\b/i,
          errorType: 'grammar',
          message: 'Boots is plural: "hiking boots".',
          correctionPattern: 'hiking boots',
        },
      ],
      remediationPractice: {
        id: 'rem_181_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We are wearing strong hiking ______."',
        options: [
          { id: 'r1', text: 'boots', isCorrect: true },
          { id: 'r2', text: 'boot', isCorrect: false },
        ],
        correctAnswer: 'boots',
        explanation: 'We wear a pair of boots (plural).',
      },
    },
    {
      id: 'turn_181_4',
      turnIndex: 4,
      partnerPrompt:
        'You are well prepared! Here is a detailed trail map. If you need any help, you can speak with any guide who is wearing a green uniform. Do you have any other questions before you start?',
      partnerAudioText:
        'You are well prepared! Here is a detailed trail map. If you need any help, you can speak with any guide who is wearing a green uniform. Do you have any other questions before you start?',
      partnerQuestionHindi:
        'आप अच्छी तरह से तैयार हैं! यह रहा एक विस्तृत ट्रेल मैप। यदि आपको किसी सहायता की आवश्यकता हो, तो आप हरे रंग की वर्दी पहने किसी भी गाइड से बात कर सकते हैं। क्या शुरू करने से पहले आपका कोई और प्रश्न है?',
      expectedFunction: 'Expressing gratitude and asking a final closing question or signing off',
      contextGoal: 'Thank the ranger, ask what time the park gate closes, and wish him a good day',
      targetVocabulary: ['thank', 'time', 'close', 'map', 'help'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Thank you very much for the map! What time does the park centre close today?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Thanks David! That is very clear. Have a wonderful day!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Thank you for your help! We are ready to start our hike now. Goodbye!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'thanks_gratitude',
          patterns: ['thank you', 'thanks', 'appreciate', 'grateful'],
          required: true,
        },
        {
          name: 'closing_or_time_q',
          patterns: ['time', 'close', 'gate', 'goodbye', 'have a nice day', 'start', 'ready'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_181_4_closing',
          pattern: /^(ok bye|no)$/i,
          errorType: 'interaction',
          message: 'Politely thank the ranger before ending the conversation.',
          correctionPattern: 'Thank you for your help! Have a great day.',
        },
      ],
      remediationPractice: {
        id: 'rem_181_4',
        type: 'multiple_choice',
        prompt: 'Which is the most natural and polite way to end this conversation?',
        options: [
          { id: 'r1', text: 'Thank you for your help, Ranger David! Have a nice day.', isCorrect: true },
          { id: 'r2', text: 'No questions, bye.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for your help, Ranger David! Have a nice day.',
        explanation: 'Polite thanks and pleasant closing create positive interaction.',
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
