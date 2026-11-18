import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_235: ConversationDefinition = {
  id: 'conv_a2_235',
  title: 'Arts, Culture, Museums & Theatre Visits',
  cefr: 'A2',
  unitId: 'unit_a2_16',
  lessonLinks: ['lesson_a2_16_235'],
  estimatedMinutes: 5,
  scenario:
    'You are in the lobby of the City Fine Arts Pavilion and meet Sunita, a docent and art curator. You discuss a newly opened contemporary sculpture and photography exhibition, share your impressions of classical versus modern art, and inquire about audio guides and guided gallery tours.',
  communicativeGoals: [
    'Express personal artistic impressions and emotional reactions using sensory verbs ("it looks striking", "it evokes a sense of...")',
    'Compare artistic styles (modern vs. classical) using "whereas", "on the other hand", and comparative adjectives',
    'Inquire about gallery facilities, audio headsets, and exhibition admission in polite A2 English',
    'Engage in an enriching cultural discussion about art and theatre',
  ],
  canDoStatements: [
    'Can describe art exhibits, sculptures, paintings, and theatre performances',
    'Can express subjective opinions and feelings about cultural artworks',
    'Can ask for practical museum services and visitor information politely',
  ],
  characters: [
    {
      id: 'char_sunita_docent',
      name: 'Sunita',
      role: 'Art Docent & Gallery Curator',
      avatar: '🎨',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'exhibition',
        ipa: '/ˌeksɪˈbɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'A public display of works of art or items of interest, held in an art gallery or museum',
        exampleSentence: 'The contemporary photography exhibition showcases life in bustling global cities.',
        translations: { hi: 'प्रदर्शनी (एग्ज़िबिशन)' },
      },
      {
        word: 'striking',
        ipa: '/ˈstraɪkɪŋ/',
        partOfSpeech: 'adjective',
        meaning: 'Attracting attention by reason of being unusual, extreme, or prominent; visually impressive',
        exampleSentence: 'The centerpiece bronze sculpture has a striking and elegant silhouette.',
        translations: { hi: 'आकर्षक / प्रभावशाली (स्ट्राइकिंग)' },
      },
      {
        word: 'sculpture',
        ipa: '/ˈskʌlptʃə(r)/',
        partOfSpeech: 'noun',
        meaning: 'The art of making two- or three-dimensional representative or abstract forms, especially by carving or casting',
        exampleSentence: 'The gallery features both modern metal sculptures and classical marble statues.',
        translations: { hi: 'मूर्तिकला / मूर्ति (स्कल्प्चर)' },
      },
      {
        word: 'curator',
        ipa: '/kjʊəˈreɪtə(r)/',
        partOfSpeech: 'noun',
        meaning: 'A keeper or custodian of a museum or other collection of cultural artifacts',
        exampleSentence: 'The curator guided us through the gallery, explaining the historical context.',
        translations: { hi: 'संग्रहालय अध्यक्ष / क्यूरेटर (क्यूरेटर)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'This painting evokes a strong sense of peace and nostalgia.',
        functionCategory: 'Describing emotional impact of art',
        exampleSentence: 'The sculpture conveys the energy of modern city life.',
      },
      {
        phrase: 'Modern art is abstract, whereas classical art focuses on realism.',
        functionCategory: 'Contrasting artistic styles with "whereas"',
        exampleSentence: 'I enjoy modern photography, on the other hand classical portraits are fascinating.',
      },
      {
        phrase: 'Could you tell me if audio guides are available in English?',
        functionCategory: 'Polite inquiry for museum visitor services',
        exampleSentence: 'What time does the next guided tour start?',
      },
      {
        phrase: 'The contrast of colors makes this artwork really stand out.',
        functionCategory: 'Analyzing visual aesthetic features',
        exampleSentence: 'The lighting in this hall highlights the detailed marble textures.',
      },
    ],
    grammar: {
      title: 'Sensory Verbs (look, feel, evoke) & Contrasting Styles with "Whereas"',
      conceptExplanation:
        '1. Sensory & Linking Verbs: "look", "sound", "feel", "seem" + Adjective ("It looks striking", "The gallery feels tranquil").\n2. Sensory Verbs with "like" + Noun: "It looks like a wave", "It feels like a rainy evening."\n3. Contrasting with "whereas" / "while": "Classical art focuses on realistic details, whereas contemporary art explores abstract ideas."',
      patternFormula: 'Subject + looks / feels + [Adjective] / [Style A] + [Verb Phrase], whereas [Style B] + [Verb Phrase]',
      contrastExamples: [
        {
          incorrect: 'The sculpture looks beautifully.',
          correct: 'The sculpture looks beautiful.',
          explanation: 'Sensory linking verbs ("look", "feel", "sound") take adjectives, not adverbs.',
        },
        {
          incorrect: 'It evokes to me sadness.',
          correct: 'It evokes a feeling of sadness in me.',
          explanation: '"Evoke" takes a direct noun object ("evokes a sense of peace").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Sunita',
        text: 'Welcome to the City Fine Arts Pavilion! Are you exploring our contemporary sculpture exhibition today?',
        translation: 'सिटी फाइन आर्ट्स पवेलियन में आपका स्वागत है! क्या आप आज हमारी समकालीन मूर्तिकला प्रदर्शनी की खोज कर रहे हैं?',
      },
      {
        speaker: 'Learner',
        text: 'Hello Sunita! Yes, the centerpiece sculpture looks striking. It evokes a strong sense of movement and harmony.',
        translation: 'नमस्ते सुनीता! हाँ, केंद्र में रखी मूर्ति बहुत आकर्षक लगती है। यह गति और सामंजस्य की एक मजबूत भावना पैदा करती है।',
      },
      {
        speaker: 'Sunita',
        text: 'I’m glad you noticed! The artist used recycled metal to symbolize environmental renewal.',
        translation: 'मुझे खुशी है कि आपने ध्यान दिया! कलाकार ने पर्यावरणीय नवीनीकरण का प्रतीक बनाने के लिए पुनर्चक्रित धातु का उपयोग किया।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_235_1',
      type: 'fill_blank',
      prompt: 'Complete with the adjective: "The abstract gallery looks very ______ (striking / strikingly)."',
      options: [
        { id: 'opt_1', text: 'striking', isCorrect: true },
        { id: 'opt_2', text: 'strikingly', isCorrect: false },
        { id: 'opt_3', text: 'striked', isCorrect: false },
      ],
      correctAnswer: 'striking',
      explanation: 'Linking verb "looks" is followed by an adjective ("striking").',
    },
    {
      id: 'cp_235_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly contrasts classical and modern art?',
      options: [
        { id: 'opt_1', text: 'Classical paintings depict realism, whereas modern art embraces abstract concepts.', isCorrect: true },
        { id: 'opt_2', text: 'Classical paintings depict realism whereas modern art to embrace.', isCorrect: false },
        { id: 'opt_3', text: 'Classical paintings realism whereas modern art is abstractly.', isCorrect: false },
      ],
      correctAnswer: 'Classical paintings depict realism, whereas modern art embraces abstract concepts.',
      explanation: 'Accurate parallel clauses joined by the contrast conjunction "whereas".',
    },
    {
      id: 'cp_235_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [The centerpiece sculpture / evokes a feeling of / balance and tranquility / in the gallery]',
      correctAnswer: 'The centerpiece sculpture evokes a feeling of balance and tranquility in the gallery',
      explanation: 'Subject + transitive verb + object noun phrase + prepositional phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_235_1',
      prompt: 'Construct a sentence stating that the modern sculpture looks striking and evokes a feeling of harmony.',
      scenarioContext: 'Sharing your art impressions with Sunita.',
      targetStructure: 'The modern sculpture looks striking and evokes a wonderful feeling of harmony.',
      wordBank: ['The modern sculpture', 'looks striking and evokes', 'a wonderful feeling of', 'harmony,', 'Sunita.'],
      acceptableSolutions: [
        'The modern sculpture looks striking and evokes a wonderful feeling of harmony.',
        'The sculpture looks striking and evokes a sense of harmony.',
      ],
      explanation: 'Sensory verb + adjective + evocative clause.',
    },
    {
      id: 'sc_235_2',
      prompt: 'Construct a polite indirect question asking Sunita if audio guides and guided tours are available today.',
      scenarioContext: 'Inquiring about museum services.',
      targetStructure: 'Could you tell me if audio guides and guided tours are available today?',
      wordBank: ['Could you tell me', 'if audio guides and', 'guided tours are available', 'today,', 'Sunita?'],
      acceptableSolutions: [
        'Could you tell me if audio guides and guided tours are available today?',
        'Could you tell me if guided tours and audio guides are available?',
      ],
      explanation: 'Polite indirect question with "Could you tell me if...".',
    },
  ],
  turns: [
    {
      id: 'turn_235_1',
      turnIndex: 1,
      partnerPrompt:
        'Good afternoon! Welcome to the City Fine Arts Pavilion. I’m Sunita, one of the gallery curators. What brings you to our exhibition halls today?',
      partnerAudioText:
        'Good afternoon! Welcome to the City Fine Arts Pavilion. I’m Sunita, one of the gallery curators. What brings you to our exhibition halls today?',
      partnerQuestionHindi:
        'शुभ दोपहर! सिटी फाइन आर्ट्स पवेलियन में आपका स्वागत है। मैं दीर्घा के क्यूरेटरों में से एक सुनीता हूँ। आज आपको हमारे प्रदर्शनी हॉल में क्या लाया है?',
      expectedFunction: 'Greeting Sunita and sharing your interest in contemporary sculptures and photography exhibits',
      contextGoal: 'Greet Sunita, express admiration for the exhibition, and mention that the centerpiece sculpture looks striking',
      targetVocabulary: ['Good afternoon Sunita', 'exhibition', 'sculpture', 'looks striking', 'evokes', 'contemporary art'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Good afternoon, Sunita! I came to see the new contemporary exhibition. The centerpiece sculpture in the main hall looks striking and evokes a wonderful sense of energy.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Sunita! I’m very interested in modern photography and sculpture. The artwork displayed here looks truly impressive.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good afternoon, Sunita! I love visiting art galleries. The balance of light and color in this exhibition is fascinating.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_sunita',
          patterns: ['good afternoon', 'hello', 'hi', 'sunita'],
          required: true,
        },
        {
          name: 'art_impressions',
          patterns: ['exhibition', 'sculpture', 'looks striking', 'evokes', 'contemporary', 'photography', 'impressive'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_235_1_looks_strikingly',
          pattern: /looks strikingly/i,
          errorType: 'grammar',
          message: 'Use an adjective after linking verb "looks": "The sculpture looks striking."',
          correctionPattern: 'The sculpture looks striking and evokes energy.',
        },
      ],
      remediationPractice: {
        id: 'rem_235_1',
        type: 'fill_blank',
        prompt: 'Fill in: "The painting looks ______ (striking)."',
        options: [
          { id: 'r1', text: 'striking', isCorrect: true },
          { id: 'r2', text: 'strikingly', isCorrect: false },
        ],
        correctAnswer: 'striking',
        explanation: '"Looks" is followed by an adjective.',
      },
    },
    {
      id: 'turn_235_2',
      turnIndex: 2,
      partnerPrompt:
        'Many visitors feel the same way! Some people prefer classical landscape paintings with realistic detail, whereas others are drawn to bold abstract sculptures. What type of art do you find yourself most connected to?',
      partnerAudioText:
        'Many visitors feel the same way! Some people prefer classical landscape paintings with realistic detail, whereas others are drawn to bold abstract sculptures. What type of art do you find yourself most connected to?',
      partnerQuestionHindi:
        'कई आगंतुक ऐसा ही महसूस करते हैं! कुछ लोग यथार्थवादी विवरण वाले शास्त्रीय परिदृश्य चित्रों को पसंद करते हैं, जबकि अन्य बोल्ड अमूर्त मूर्तियों की ओर आकर्षित होते हैं। आप किस प्रकार की कला से सबसे अधिक जुड़ाव महसूस करते हैं?',
      expectedFunction: 'Contrasting artistic styles using "whereas", "on the other hand", or "prefer... because"',
      contextGoal: 'Compare classical realism and modern abstract art, explaining what emotions each evokes for you',
      targetVocabulary: ['whereas', 'classical art', 'modern art', 'abstract', 'evokes peace', 'contrast'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I appreciate both styles! Classical art is fascinating for its realistic precision, whereas modern abstract art encourages imagination and evokes deeper emotional interpretations.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I tend to prefer modern photography and sculpture, whereas classical portraits are great for learning history. The vibrant colors in modern art really inspire me.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Classical realism looks peaceful, whereas bold abstract art feels provocative and thought-provoking. Both have unique beauty.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'contrast_styles',
          patterns: ['whereas', 'classical', 'modern', 'abstract', 'evokes', 'realistic', 'prefer', 'imagination'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_235_2_whereas_structure',
          pattern: /classical art whereas modern/i,
          errorType: 'structure',
          message: 'Use complete clauses on both sides of "whereas": "Classical art depicts realism, whereas modern art is abstract."',
          correctionPattern: 'Classical art focuses on realism, whereas modern art explores abstract ideas.',
        },
      ],
      remediationPractice: {
        id: 'rem_235_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly uses "whereas" to contrast art styles?',
        options: [
          { id: 'r1', text: 'Classical art highlights realism, whereas modern art favors abstract symbolism.', isCorrect: true },
          { id: 'r2', text: 'Classical art is realistic whereas to modern abstract.', isCorrect: false },
        ],
        correctAnswer: 'Classical art highlights realism, whereas modern art favors abstract symbolism.',
        explanation: 'Complete grammatical clauses connected by "whereas".',
      },
    },
    {
      id: 'turn_235_3',
      turnIndex: 3,
      partnerPrompt:
        'That is a very perceptive insight! We offer complimentary multilingual audio guides at the reception desk, and our 45-minute curator-led gallery tour begins in fifteen minutes. Would you like a headset or wish to join the tour?',
      partnerAudioText:
        'That is a very perceptive insight! We offer complimentary multilingual audio guides at the reception desk, and our 45-minute curator-led gallery tour begins in fifteen minutes. Would you like a headset or wish to join the tour?',
      partnerQuestionHindi:
        'यह बहुत ही गहरी अंतर्दृष्टि है! हम स्वागत डेस्क पर मानार्थ बहुभाषी ऑडियो गाइड प्रदान करते हैं, और हमारा 45 मिनट का क्यूरेटर-नेतृत्व वाला गैलरी दौरा पंद्रह मिनट में शुरू होता है। क्या आप एक हेडसेट लेना चाहेंगे या दौरे में शामिल होना चाहेंगे?',
      expectedFunction: 'Inquiring about the tour, requesting an audio headset, and thanking Curator Sunita',
      contextGoal: 'Join the curator tour in 15 minutes, ask for an audio guide, and express gratitude to Sunita',
      targetVocabulary: ['audio guide', 'guided tour', 'headset', 'fifteen minutes', 'Thank you Sunita', 'look forward to'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I would love to join the curator tour in fifteen minutes, and I’ll take an audio headset as well! Thank you so much for your guidance, Sunita.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Joining the guided tour sounds wonderful! I will grab a headset at the reception and meet you in fifteen minutes. Thank you, Sunita!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Thank you, Sunita! A curator-led tour is exactly what I was hoping for. I’ll get a headset and join the group right away.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'tour_headset_thanks',
          patterns: ['tour', 'headset', 'audio guide', 'fifteen minutes', 'thank you', 'sunita', 'join', 'look forward to'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_235_3_short_reply',
          pattern: /^i take headset bye$/i,
          errorType: 'interaction',
          message: 'Conclude with museum courtesy: "Thank you, Sunita! I will take an audio headset and join the tour in fifteen minutes."',
          correctionPattern: 'Thank you, Sunita! I would love to join the tour and take an audio headset.',
        },
      ],
      remediationPractice: {
        id: 'rem_235_3',
        type: 'fill_blank',
        prompt: 'Fill in: "I look forward to ______ (joining) the guided tour."',
        options: [
          { id: 'r1', text: 'joining', isCorrect: true },
          { id: 'r2', text: 'join', isCorrect: false },
        ],
        correctAnswer: 'joining',
        explanation: '"Look forward to" takes a gerund (-ing).',
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
