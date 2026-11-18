import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_86: ConversationDefinition = {
  id: 'conv_a1_86',
  title: 'Cultural Discussions, Traditions & Celebrating Festivals',
  cefr: 'A1',
  unitId: 'unit_a1_6',
  lessonLinks: ['lesson_a1_6_86'],
  estimatedMinutes: 5,
  scenario:
    'You attend the International Cultural Heritage Fair at London Southbank Centre. You speak with Cultural Exchange Coordinator Priya Sharma to share traditional holiday customs, describe special festive dishes, explain symbolic decorations, and compare customary celebrations worldwide.',
  communicativeGoals: [
    'Describe cultural holidays and festivals using frequency adverbs and descriptive adjectives ("During Diwali, families typically...", "People celebrate by...")',
    'Explain traditional recipes, festive sweets, and family gathering rituals',
    'Describe symbolic cultural decorations (oil lamps, colorful rangoli, festive lights)',
    'Compare regional celebrations respectfully using comparative structures ("similar to...", "more colorful than...")',
  ],
  canDoStatements: [
    'Can describe a traditional cultural holiday or festival in straightforward English',
    'Can explain special holiday dishes, customs, and family traditions',
    'Can engage in respectful cross-cultural exchanges and answer questions about personal heritage',
  ],
  characters: [
    {
      id: 'char_priya_sharma',
      name: 'Priya Sharma',
      role: 'Cultural Exchange Coordinator',
      avatar: '🎉',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'customary',
        ipa: '/ˈkʌstəməri/',
        partOfSpeech: 'adjective',
        meaning: 'According to the customs or usual practices associated with a particular culture',
        exampleSentence: 'It is customary to wear vibrant traditional attire during the celebration.',
        translations: { hi: 'प्रथागत / पारंपरिक' },
      },
      {
        word: 'symbolize',
        ipa: '/ˈsɪmbəlaɪz/',
        partOfSpeech: 'verb',
        meaning: 'Be a symbol of; represent something deeper',
        exampleSentence: 'The bright clay oil lamps symbolize light overcoming darkness.',
        translations: { hi: 'प्रतीक होना / दर्शाना' },
      },
      {
        word: 'heritage',
        ipa: '/ˈhɛrɪtɪdʒ/',
        partOfSpeech: 'noun',
        meaning: 'Valued objects, traditions, and qualities passed down from previous generations',
        exampleSentence: 'Our annual festival honors our rich cultural heritage.',
        translations: { hi: 'विरासत / धरोहर' },
      },
      {
        word: 'delicacy',
        ipa: '/ˈdɛlɪkəsi/',
        partOfSpeech: 'noun',
        meaning: 'A choice or expensive food, especially a special traditional festive sweet or dish',
        exampleSentence: 'Families prepare traditional festive delicacies and share them with neighbors.',
        translations: { hi: 'स्वादिष्ट व्यंजन / पारंपरिक मिठाई' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'During the festival, people typically...',
        functionCategory: 'Describing Customs',
        exampleSentence: 'During the festival, people typically gather with extended family and cook.',
      },
      {
        phrase: 'It is customary to exchange...',
        functionCategory: 'Tradition Explanation',
        exampleSentence: 'It is customary to exchange handmade sweets and gifts.',
      },
      {
        phrase: 'This tradition symbolizes...',
        functionCategory: 'Symbolic Meaning',
        exampleSentence: 'This tradition symbolizes good health, prosperity, and unity.',
      },
      {
        phrase: 'How is this celebrated in other regions?',
        functionCategory: 'Reciprocal Inquiry',
        exampleSentence: 'How is this festive season celebrated in other parts of the world?',
      },
    ],
    grammar: {
      title: 'Habitual Cultural Routines: Present Simple with "Typically", "Customarily" & Passive Habits',
      conceptExplanation:
        'Describe cultural traditions using the Present Simple with adverbs of frequency or polite impersonal passive formulas: "People wear...", "Sweets are prepared...", "It is customary to [Verb]".',
      patternFormula: 'During [Festival], people typically [Verb] / It is customary to [Verb]',
      contrastExamples: [
        {
          incorrect: 'Festival was ate sweet every days tomorrow.',
          correct: 'During the festival, people typically prepare sweet delicacies and light oil lamps.',
          explanation: 'Use Present Simple for recurring cultural customs.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Priya Sharma',
        text: 'Welcome to our Cultural Heritage Pavilion! Which festival or tradition would you like to share with our visitors today?',
        translation: 'हमारे सांस्कृतिक विरासत मंडप में आपका स्वागत है! आज आप हमारे आगंतुकों के साथ कौन सा त्योहार या परंपरा साझा करना चाहेंगे?',
      },
      {
        speaker: 'You',
        text: 'Hello Priya! I would love to share Diwali, the Festival of Lights. During Diwali, families clean their homes, light clay oil lamps, and share traditional sweets with neighbors.',
        translation: 'नमस्ते प्रिया! मुझे दिवाली, रोशनी के त्योहार को साझा करना अच्छा लगेगा। दिवाली के दौरान, परिवार अपने घरों को साफ करते हैं, मिट्टी के दीये जलाते हैं, और पड़ोसियों के साथ पारंपरिक मिठाइयाँ बाँटते हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_86_1',
      type: 'fill_blank',
      prompt: 'Complete the cultural description: "During the new year, people ___ wear bright clothing."',
      options: [
        { id: 'opt_1', text: 'typically', isCorrect: true },
        { id: 'opt_2', text: 'typical', isCorrect: false },
        { id: 'opt_3', text: 'at typical', isCorrect: false },
      ],
      correctAnswer: 'typically',
      explanation: 'Adverb of frequency: "typically wear".',
    },
    {
      id: 'cp_a1_86_2',
      type: 'multiple_choice',
      prompt: 'Which sentence explains a festive food tradition clearly?',
      options: [
        { id: 'opt_1', text: 'It is customary to prepare special festive pastries and share them with friends and family.', isCorrect: true },
        { id: 'opt_2', text: 'Food eat on day many sugar.', isCorrect: false },
        { id: 'opt_3', text: 'We make round things sweet tasty.', isCorrect: false },
      ],
      correctAnswer: 'It is customary to prepare special festive pastries and share them with friends and family.',
      explanation: 'Rich, natural, and culturally polite expression.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_86_1',
      scenarioContext: 'Describe a festive illumination tradition.',
      prompt: 'Build: "People light clay lamps to celebrate."',
      targetStructure: 'People light clay lamps to celebrate',
      wordBank: ['People', 'light', 'clay', 'lamps', 'to', 'celebrate', 'lighting', 'lit', 'a', 'in'],
      acceptableSolutions: [
        'People light clay lamps to celebrate',
        'People light clay lamps to celebrate.',
      ],
      explanation: 'Infinitive of purpose structure.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_86_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello and welcome to the Cultural Heritage Pavilion! I am Priya. What festival from your culture or community would you like to introduce today, and when is it celebrated?',
      partnerAudioText:
        'Hello and welcome to the Cultural Heritage Pavilion! I am Priya. What festival from your culture or community would you like to introduce today, and when is it celebrated?',
      partnerQuestionHindi:
        'नमस्ते और सांस्कृतिक विरासत मंडप में आपका स्वागत है! मैं प्रिया हूँ। आज आप अपनी संस्कृति या समुदाय के किस त्योहार का परिचय देना चाहेंगे, और यह कब मनाया जाता है?',
      expectedFunction: 'Introduce Cultural Festival (Diwali / New Year) & Timing (Independent A1)',
      contextGoal:
        'Introduce Diwali (the Festival of Lights), celebrated in autumn (October/November), and explain its central theme of light and renewal.',
      targetVocabulary: ['Diwali the Festival of Lights', 'celebrated in autumn during October or November', 'theme of light overcoming darkness', 'festive renewal'],
      suggestedResponses: [
        {
          label: 'Independent A1',
          text: 'Hello Priya! I would love to introduce Diwali, the Festival of Lights. It is celebrated every autumn, usually in October or November, and it symbolizes the victory of light over darkness and knowledge over ignorance.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Festival Name & Season',
          patterns: [
            'diwali',
            'festival of lights',
            'autumn',
            'october',
            'november',
            'light',
            'celebrated',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_86_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "The festival is celebrated ___ autumn."',
        options: [
          { id: 'opt_1', text: 'in', isCorrect: true },
          { id: 'opt_2', text: 'on', isCorrect: false },
          { id: 'opt_3', text: 'at to', isCorrect: false },
        ],
        correctAnswer: 'in',
        explanation: 'Preposition "in" is used with seasons (in autumn).',
      },
    },
    {
      id: 'turn_a1_86_2',
      turnIndex: 2,
      partnerPrompt:
        'What a vibrant and meaningful celebration! What are the primary customary rituals, decorations, and clothing associated with this festival?',
      partnerAudioText:
        'What a vibrant and meaningful celebration! What are the primary customary rituals, decorations, and clothing associated with this festival?',
      partnerQuestionHindi:
        'कितना जीवंत और सार्थक उत्सव है! इस त्योहार से जुड़े प्राथमिक प्रथागत अनुष्ठान, सजावट और कपड़े क्या हैं?',
      expectedFunction: 'Describe Traditional Decorations (Clay Diyas, Rangoli) & Festive Attire',
      contextGoal:
        'Explain that people clean their homes, decorate doorsteps with colorful floral rangoli patterns, light small clay lamps (diyas), and wear new traditional clothes.',
      targetVocabulary: ['clay oil lamps called diyas', 'colorful floral rangoli patterns', 'wear new traditional attire', 'decorate doorsteps'],
      suggestedResponses: [
        {
          label: 'Independent A1',
          text: 'Families clean and decorate their homes with colorful rangoli powder and flowers at the entrance. In the evening, we light dozens of small clay oil lamps called diyas and wear brand-new traditional attire.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Decorations & Clothing',
          patterns: [
            'rangoli',
            'diyas',
            'clay',
            'lamps',
            'oil lamps',
            'flowers',
            'traditional',
            'clothes',
            'attire',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_86_2',
        type: 'multiple_choice',
        prompt: 'Which sentence describes decorative cultural customs accurately?',
        options: [
          { id: 'opt_1', text: 'People illuminate their homes with clay oil lamps and create colorful floral entrance patterns.', isCorrect: true },
          { id: 'opt_2', text: 'Fire on floor make light everywhere.', isCorrect: false },
          { id: 'opt_3', text: 'Color dust on ground.', isCorrect: false },
        ],
        correctAnswer: 'People illuminate their homes with clay oil lamps and create colorful floral entrance patterns.',
        explanation: 'Descriptive and respectful cultural phrasing.',
      },
    },
    {
      id: 'turn_a1_86_3',
      turnIndex: 3,
      partnerPrompt:
        'The imagery of clay lamps and floral art is wonderful. What about the culinary traditions—what special festive delicacies or sweets do families prepare and share?',
      partnerAudioText:
        'The imagery of clay lamps and floral art is wonderful. What about the culinary traditions—what special festive delicacies or sweets do families prepare and share?',
      partnerQuestionHindi:
        'मिट्टी के दीयों और फूलों की कला की कल्पना अद्भुत है। पाक परंपराओं के बारे में क्या—परिवार कौन सी विशेष उत्सव मिठाइयाँ या व्यंजन तैयार करते हैं और साझा करते हैं?',
      expectedFunction: 'Describe Traditional Festive Sweets & Hospitality Sharing',
      contextGoal:
        'Explain that families prepare milk-based sweets like laddoos and kaju katli, savory snacks like samosas, and exchange boxes of sweets with friends and neighbors.',
      targetVocabulary: ['traditional sweets and delicacies', 'laddoos and kaju katli', 'savory snacks', 'exchange gift boxes with neighbors'],
      suggestedResponses: [
        {
          label: 'Independent A1',
          text: 'Culinary traditions are huge! Families cook traditional sweets like laddoos and savory snacks. It is customary to visit relatives and exchange decorated gift boxes of sweets to foster unity and joy.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Food & Gift Sharing',
          patterns: [
            'sweets',
            'delicacies',
            'laddoos',
            'snacks',
            'cook',
            'relatives',
            'exchange',
            'boxes',
            'neighbors',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_86_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "It is customary to ___ gifts with neighbors."',
        options: [
          { id: 'opt_1', text: 'exchange', isCorrect: true },
          { id: 'opt_2', text: 'exchanging', isCorrect: false },
          { id: 'opt_3', text: 'exchanged', isCorrect: false },
        ],
        correctAnswer: 'exchange',
        explanation: 'Base verb after "to": "exchange".',
      },
    },
    {
      id: 'turn_a1_86_4',
      turnIndex: 4,
      partnerPrompt:
        'Thank you so much for sharing such a rich cultural tradition! We will feature Diwali in our multicultural festival spotlight this weekend. Would you like to attend the opening ceremony on Saturday?',
      partnerAudioText:
        'Thank you so much for sharing such a rich cultural tradition! We will feature Diwali in our multicultural festival spotlight this weekend. Would you like to attend the opening ceremony on Saturday?',
      partnerQuestionHindi:
        'इतनी समृद्ध सांस्कृतिक परंपरा साझा करने के लिए आपका बहुत-बहुत धन्यवाद! हम इस सप्ताहांत अपने बहुसांस्कृतिक उत्सव के मुख्य आकर्षण में दिवाली को प्रदर्शित करेंगे। क्या आप शनिवार को उद्घाटन समारोह में शामिल होना चाहेंगे?',
      expectedFunction: 'Accept Invitation, Express Pride & Conclude Cross-Cultural Exchange',
      contextGoal:
        'Accept the invitation enthusiastically, express pride in sharing your heritage, and wish Priya success with the festival.',
      targetVocabulary: ['delighted to attend on Saturday', 'proud to share cultural heritage', 'wish you great success', 'see you at opening ceremony'],
      suggestedResponses: [
        {
          label: 'Independent A1',
          text: 'I would be delighted to attend the opening ceremony on Saturday! I am very proud to share my cultural heritage with everyone. Thank you Priya, and I wish you huge success with the festival!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Acceptance & Well Wishes',
          patterns: [
            'delighted',
            'saturday',
            'proud',
            'heritage',
            'thank you',
            'priya',
            'success',
            'see you',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_86_4',
        type: 'multiple_choice',
        prompt: 'Which closing expresses cultural pride and enthusiasm for an event?',
        options: [
          { id: 'opt_1', text: 'I am delighted to attend Saturday’s ceremony and proud to share our heritage. Thank you Priya!', isCorrect: true },
          { id: 'opt_2', text: 'I come maybe if food free.', isCorrect: false },
          { id: 'opt_3', text: 'Festival bye Saturday.', isCorrect: false },
        ],
        correctAnswer: 'I am delighted to attend Saturday’s ceremony and proud to share our heritage. Thank you Priya!',
        explanation: 'Warm, respectful, and enthusiastic closing.',
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
