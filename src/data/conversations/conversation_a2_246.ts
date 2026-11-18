import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_246: ConversationDefinition = {
  id: 'conv_a2_246',
  title: 'Festivals, Traditions & Cultural Celebrations',
  cefr: 'A2',
  unitId: 'unit_a2_17',
  lessonLinks: ['lesson_a2_17_246'],
  estimatedMinutes: 5,
  scenario:
    'You are attending a cultural exchange fair and speaking with community organizer Priya. You share traditions from your hometown, explain the symbolic meaning of festive decorations and ceremonial food, talk about when and where seasonal festivals take place, and describe traditional clothing.',
  communicativeGoals: [
    'Describe cultural festivals, traditional attire, and ceremonial foods in simple A2 English',
    'Use celebration phrases: "take place in...", "people celebrate by...", "it is symbolic of..."',
    'Contrast seasonal customs and describe traditional festive routines using Present Simple',
    'Explain the cultural significance of local traditions to an international friend',
  ],
  canDoStatements: [
    'Can describe a traditional festival or celebration from their own or another culture',
    'Can explain what special food is eaten and what clothes are worn during holidays',
    'Can answer simple questions about when and where seasonal festivals take place',
  ],
  characters: [
    {
      id: 'char_priya_cultural_host',
      name: 'Priya',
      role: 'Cultural Exchange Fair Organizer',
      avatar: '🪔',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'take place',
        ipa: '/teɪk pleɪs/',
        partOfSpeech: 'verb phrase',
        meaning: 'To happen or occur at a particular place or scheduled time',
        exampleSentence: 'The annual spring harvest festival takes place in March.',
        translations: { hi: 'आयोजित होना / घटित होना (टेक प्लेस)' },
      },
      {
        word: 'symbolic',
        ipa: '/sɪmˈbɒlɪk/',
        partOfSpeech: 'adjective',
        meaning: 'Serving as a symbol of something, representing a deeper traditional meaning',
        exampleSentence: 'Lighting clay lamps is symbolic of bringing light and hope into the home.',
        translations: { hi: 'प्रतीकात्मक (सिम्बॉलिक)' },
      },
      {
        word: 'traditional attire',
        ipa: '/trəˈdɪʃənl əˈtaɪə/',
        partOfSpeech: 'noun phrase',
        meaning: 'Clothing, costumes, or garments associated with a specific culture or historic heritage',
        exampleSentence: 'People wear colorful traditional attire during the celebration.',
        translations: { hi: 'पारंपरिक पोशाक (ट्रेडिशनल अटायर)' },
      },
      {
        word: 'ceremonial',
        ipa: '/ˌserɪˈməʊniəl/',
        partOfSpeech: 'adjective',
        meaning: 'Relating to or used for formal cultural, religious, or festive ceremonies',
        exampleSentence: 'Families prepare ceremonial sweets to share with neighbors.',
        translations: { hi: 'समारोही / रस्मी (सेरेमोनियल)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'The festival takes place every year in...',
        functionCategory: 'Stating frequency and timing of celebrations',
        exampleSentence: 'The lantern festival takes place every year in autumn.',
      },
      {
        phrase: 'People celebrate by...',
        functionCategory: 'Describing celebratory actions and customs',
        exampleSentence: 'People celebrate by decorating their doorways with fresh flowers.',
      },
      {
        phrase: 'It is symbolic of new beginnings and prosperity.',
        functionCategory: 'Explaining cultural meaning and symbolism',
        exampleSentence: 'Sharing sweets is symbolic of friendship and new beginnings.',
      },
      {
        phrase: 'During this holiday, we traditionally wear...',
        functionCategory: 'Describing festive clothing and garments',
        exampleSentence: 'During this holiday, we traditionally wear bright silk garments.',
      },
    ],
    grammar: {
      title: 'Describing Customs: Present Simple for Traditions & "Celebrate by + -ing"',
      conceptExplanation:
        '1. Present Simple for regular cultural habits: "Families gather and prepare special meals."\n2. Structure for means of celebrating: "People celebrate by + [verb-ing] (e.g. by sharing food / by lighting lamps)."\n3. Meaning and symbolism: "It is symbolic of [noun phrase]."',
      patternFormula: '[Festival] + [takes place in Month] + [People celebrate by + Verb-ing] + [which is symbolic of Noun]',
      contrastExamples: [
        {
          incorrect: 'People celebrate by share sweets.',
          correct: 'People celebrate by sharing sweets and gifts.',
          explanation: 'The preposition "by" must be followed by a gerund (-ing).',
        },
        {
          incorrect: 'The festival is take place in autumn.',
          correct: 'The festival takes place in autumn.',
          explanation: '"Take place" is an active verb, not passive.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Priya',
        text: 'Welcome to our international culture booth! What is your favorite traditional festival to celebrate?',
        translation: 'हमारे अंतर्राष्ट्रीय संस्कृति बूथ में आपका स्वागत है! आपका पसंदीदा पारंपरिक त्योहार कौन सा है?',
      },
      {
        speaker: 'Learner',
        text: 'I love celebrating Diwali! It takes place in autumn, and people celebrate by lighting clay lamps and sharing sweets.',
        translation: 'मुझे दिवाली मनाना बहुत पसंद है! यह शरद ऋतु में आयोजित होती है, और लोग मिट्टी के दीये जलाकर और मिठाइयाँ बाँटकर मनाते हैं।',
      },
      {
        speaker: 'Priya',
        text: 'That sounds delightful! What is the symbolic meaning behind lighting the lamps?',
        translation: 'यह बहुत आनंददायक लगता है! दीये जलाने के पीछे प्रतीकात्मक अर्थ क्या है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_246_1',
      type: 'fill_blank',
      prompt: 'Complete: "The spring carnival ______ (takes / is taking / take) place every year in April."',
      options: [
        { id: 'opt_1', text: 'takes', isCorrect: true },
        { id: 'opt_2', text: 'is taking', isCorrect: false },
        { id: 'opt_3', text: 'take', isCorrect: false },
      ],
      correctAnswer: 'takes',
      explanation: 'Present simple 3rd person singular for regular annual events: "takes place".',
    },
    {
      id: 'cp_246_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes how people celebrate a holiday?',
      options: [
        { id: 'opt_1', text: 'Families celebrate by cooking ceremonial dishes and wearing traditional attire.', isCorrect: true },
        { id: 'opt_2', text: 'Families celebrate by to cook food and wear clothes.', isCorrect: false },
        { id: 'opt_3', text: 'Families celebrate by cook ceremonial meals.', isCorrect: false },
      ],
      correctAnswer: 'Families celebrate by cooking ceremonial dishes and wearing traditional attire.',
      explanation: '"Celebrate by + [verb-ing]" correctly expresses celebratory customs.',
    },
    {
      id: 'cp_246_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [Lighting lamps is symbolic of / wisdom, joy, and / new beginnings]',
      correctAnswer: 'Lighting lamps is symbolic of wisdom, joy, and new beginnings',
      explanation: 'Gerund subject + "is symbolic of" + noun phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_246_1',
      prompt: 'Construct a sentence stating that the harvest festival takes place in October and brings the whole community together.',
      scenarioContext: 'Explaining a festival to Priya.',
      targetStructure: 'The harvest festival takes place in October and brings the community together.',
      wordBank: ['The harvest festival', 'takes place in October', 'and brings the', 'community together.', 'celebrating by'],
      acceptableSolutions: [
        'The harvest festival takes place in October and brings the community together.',
        'The festival takes place in October and brings the community together.',
      ],
      explanation: 'Present simple description of regular festival timing.',
    },
    {
      id: 'sc_246_2',
      prompt: 'Construct a sentence stating that people celebrate by wearing traditional attire and sharing ceremonial sweets.',
      scenarioContext: 'Describing festive customs.',
      targetStructure: 'People celebrate by wearing traditional attire and sharing ceremonial sweets.',
      wordBank: ['People celebrate by', 'wearing traditional attire', 'and sharing', 'ceremonial sweets.', 'takes place'],
      acceptableSolutions: [
        'People celebrate by wearing traditional attire and sharing ceremonial sweets.',
        'During holidays, people celebrate by wearing traditional attire and sharing ceremonial sweets.',
      ],
      explanation: 'Parallel gerunds after "by": wearing and sharing.',
    },
  ],
  turns: [
    {
      id: 'turn_246_1',
      turnIndex: 1,
      partnerPrompt:
        'Namaste and welcome to the Cultural Exchange Pavilion! We are highlighting traditions from across the globe today. Which traditional festival or cultural celebration is closest to your heart?',
      partnerAudioText:
        'Namaste and welcome to the Cultural Exchange Pavilion! We are highlighting traditions from across the globe today. Which traditional festival or cultural celebration is closest to your heart?',
      partnerQuestionHindi:
        'नमस्ते और सांस्कृतिक विनिमय मंडप में आपका स्वागत है! आज हम दुनिया भर की परंपराओं को उजागर कर रहे हैं। कौन सा पारंपरिक त्योहार या सांस्कृतिक उत्सव आपके दिल के सबसे करीब है?',
      expectedFunction: 'Greeting Priya and naming a favorite festival, when it takes place, and why it is special',
      contextGoal: 'Greet Priya, name a festival (e.g. Diwali, Holi, Eid, New Year, Harvest Festival), and state when it takes place',
      targetVocabulary: ['Hello Priya', 'takes place in', 'festival', 'celebrate', 'traditions', 'family gathers'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello Priya! My favorite celebration is Diwali. It takes place in autumn, and it is a wonderful time when families gather to celebrate light and happiness.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Namaste Priya! I love the spring harvest festival. It takes place every year in March, and people welcome the new season with music and dance.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good morning! I love New Year celebrations. It takes place at the end of December, and everyone shares goodwill and hope.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_priya',
          patterns: ['hello', 'hi', 'namaste', 'priya', 'good morning', 'good afternoon'],
          required: true,
        },
        {
          name: 'festival_and_timing',
          patterns: ['diwali', 'holi', 'eid', 'harvest', 'new year', 'festival', 'celebration', 'takes place', 'autumn', 'spring', 'winter', 'month'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_246_1_is_take_place',
          pattern: /is take place/i,
          errorType: 'grammar',
          message: 'Say "The festival takes place" without "is".',
          correctionPattern: 'The festival takes place in October.',
        },
      ],
      remediationPractice: {
        id: 'rem_246_1',
        type: 'fill_blank',
        prompt: 'Fill in: "The celebration ______ (takes / is taking) place in spring."',
        options: [
          { id: 'r1', text: 'takes', isCorrect: true },
          { id: 'r2', text: 'is take', isCorrect: false },
        ],
        correctAnswer: 'takes',
        explanation: 'Active present simple: "takes place".',
      },
    },
    {
      id: 'turn_246_2',
      turnIndex: 2,
      partnerPrompt:
        'That is beautiful! How do families prepare for the day, and what ceremonial foods and traditional attire do people wear?',
      partnerAudioText:
        'That is beautiful! How do families prepare for the day, and what ceremonial foods and traditional attire do people wear?',
      partnerQuestionHindi:
        'यह बहुत सुंदर है! परिवार उस दिन की तैयारी कैसे करते हैं, और लोग कौन से औपचारिक भोजन खाते हैं और कौन सी पारंपरिक पोशाक पहनते हैं?',
      expectedFunction: 'Describing preparations, traditional attire, and ceremonial foods using "celebrate by" and descriptive adjectives',
      contextGoal: 'Explain that people clean houses, wear colorful traditional clothing (silk/cotton), and prepare ceremonial sweets or savory dishes',
      targetVocabulary: ['traditional attire', 'ceremonial food', 'celebrate by', 'clean houses', 'sweets', 'colorful garments'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Before the festival, we clean our homes thoroughly. People celebrate by wearing colorful traditional attire, such as silk outfits, and cooking ceremonial sweets like ladoos.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Families prepare special festive recipes and bake ceremonial breads. Everyone wears their finest traditional clothes to visit relatives and friends.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'We wear bright traditional clothes and share homemade sweets with all our neighbors. It creates a warm, joyful atmosphere.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'traditional_clothing',
          patterns: ['attire', 'clothes', 'outfits', 'garments', 'traditional', 'silk', 'wear', 'finest'],
          required: true,
        },
        {
          name: 'ceremonial_food_prep',
          patterns: ['ceremonial', 'food', 'sweets', 'dishes', 'clean', 'recipes', 'cook', 'share', 'ladoos', 'homemade'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_246_2_wear_traditional',
          pattern: /we wearing tradition clothes/i,
          errorType: 'grammar',
          message: 'Say "we wear traditional clothes" (adjective + noun).',
          correctionPattern: 'We wear colorful traditional attire.',
        },
      ],
      remediationPractice: {
        id: 'rem_246_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes festival clothing and food?',
        options: [
          { id: 'r1', text: 'People wear traditional attire and share ceremonial sweets.', isCorrect: true },
          { id: 'r2', text: 'People wearing tradition attire and share sweet ceremonial.', isCorrect: false },
        ],
        correctAnswer: 'People wear traditional attire and share ceremonial sweets.',
        explanation: 'Correct adjective forms: "traditional attire" and "ceremonial sweets".',
      },
    },
    {
      id: 'turn_246_3',
      turnIndex: 3,
      partnerPrompt:
        'An international student visiting our pavilion has never experienced these customs. Could you mediate by explaining the deeper symbolic meaning of your festival in simple, welcoming words?',
      partnerAudioText:
        'An international student visiting our pavilion has never experienced these customs. Could you mediate by explaining the deeper symbolic meaning of your festival in simple, welcoming words?',
      partnerQuestionHindi:
        'हमारे मंडप में आए एक अंतर्राष्ट्रीय छात्र ने इन रीति-रिवाजों का कभी अनुभव नहीं किया है। क्या आप सरल, स्वागतयोग्य शब्दों में अपने त्योहार के गहरे प्रतीकात्मक अर्थ को समझाकर मध्यस्थता (mediate) कर सकते हैं?',
      expectedFunction: 'Mediating the cultural and symbolic significance of the festival for an international visitor',
      contextGoal: 'Explain that the festival is symbolic of light over darkness, new beginnings, community unity, and sharing joy',
      targetVocabulary: ['symbolic of', 'new beginnings', 'light over darkness', 'unity', 'welcoming', 'peace and joy'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Welcome! This festival is symbolic of light triumphing over darkness and knowledge over ignorance. It brings people together in peace, joy, and friendship.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello! The celebration is symbolic of fresh starts, gratitude for nature, and sharing goodwill with everyone in the community.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Welcome! Lighting lamps and sharing food symbolizes spreading joy, unity, and hope for a bright future.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'welcoming_visitor',
          patterns: ['welcome', 'hello', 'hi', 'student', 'friend'],
          required: true,
        },
        {
          name: 'symbolic_meaning',
          patterns: ['symbolic of', 'symbolizes', 'light', 'darkness', 'new beginnings', 'joy', 'peace', 'unity', 'friendship', 'gratitude', 'hope'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_246_3_symbolic_for',
          pattern: /symbolic for/i,
          errorType: 'grammar',
          message: 'Say "symbolic of" (use preposition "of").',
          correctionPattern: 'Lighting lamps is symbolic of hope and new beginnings.',
        },
      ],
      remediationPractice: {
        id: 'rem_246_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [The festival is symbolic of / friendship, unity, and / new beginnings]',
        correctAnswer: 'The festival is symbolic of friendship, unity, and new beginnings',
        explanation: '"Is symbolic of" + list of nouns.',
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
