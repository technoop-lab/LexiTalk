import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_234: ConversationDefinition = {
  id: 'conv_a2_234',
  title: 'Urban Ecology, City Green Spaces & Sustainable Living',
  cefr: 'A2',
  unitId: 'unit_a2_16',
  lessonLinks: ['lesson_a2_16_234'],
  estimatedMinutes: 5,
  scenario:
    'You attend an urban development seminar at the town hall and speak with Marcus, an urban planning specialist. You discuss rooftop gardens, solar-powered public transit, urban tree canopies, and how eco-friendly architecture improves city air quality and residents’ wellbeing.',
  communicativeGoals: [
    'Describe urban green innovations (vertical gardens, pedestrian plazas, rooftop solar panels) using specialized A2 vocabulary',
    'Use cause and effect conjunctions ("as a result", "therefore", "in order to") to explain sustainable city design',
    'Express opinions about public transport systems and cycling lanes using "In my opinion" and "I believe"',
    'Engage in a thoughtful urban planning discussion in A2 English',
  ],
  canDoStatements: [
    'Can describe urban green spaces and sustainable city infrastructure',
    'Can use linking words to express cause, effect, and purpose',
    'Can express opinions on urban quality of life and green mobility',
  ],
  characters: [
    {
      id: 'char_marcus_planner',
      name: 'Marcus',
      role: 'Urban Planning Specialist & Green Architect',
      avatar: '🏙️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'canopy',
        ipa: '/ˈkænəpi/',
        partOfSpeech: 'noun',
        meaning: 'The high, spreading roof-like cover formed by tree branches and leaves over streets or parks',
        exampleSentence: 'Expanding our street tree canopy cools the urban neighborhood during hot summers.',
        translations: { hi: 'पेड़ों की छत्रछाया / वितान (कैनोपी)' },
      },
      {
        word: 'pedestrianized',
        ipa: '/pəˈdestriənaɪzd/',
        partOfSpeech: 'adjective',
        meaning: 'Converted into an area for the exclusive use of people walking, free from motor traffic',
        exampleSentence: 'The pedestrianized market square is vibrant, peaceful, and safe for families.',
        translations: { hi: 'पैदल चलने वालों के लिए आरक्षित (पेडस्ट्रियनाइज़्ड)' },
      },
      {
        word: 'wellbeing',
        ipa: '/ˌwelˈbiːɪŋ/',
        partOfSpeech: 'noun',
        meaning: 'The state of being comfortable, healthy, and happy in one’s living environment',
        exampleSentence: 'Access to urban green parks dramatically improves residents’ mental wellbeing.',
        translations: { hi: 'कल्याण / स्वास्थ्य और खुशहाली (वेलबीइंग)' },
      },
      {
        word: 'infrastructure',
        ipa: '/ˈɪnfrəstrʌktʃə(r)/',
        partOfSpeech: 'noun',
        meaning: 'The basic physical and organizational structures and facilities needed for the operation of a city',
        exampleSentence: 'Investing in cycling infrastructure encourages more people to commute green.',
        translations: { hi: 'बुनियादी ढाँचा (इन्फ्रास्ट्रक्चर)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'In order to reduce heat, cities are planting more rooftop gardens.',
        functionCategory: 'Expressing purpose with "in order to"',
        exampleSentence: 'In order to improve air quality, we created dedicated bike corridors.',
      },
      {
        phrase: 'As a result of pedestrianizing the main avenue, noise pollution decreased.',
        functionCategory: 'Expressing cause and effect',
        exampleSentence: 'Trees provide shade; as a result, street temperatures drop.',
      },
      {
        phrase: 'In my view, green infrastructure transforms quality of life.',
        functionCategory: 'Stating personal opinions on urban design',
        exampleSentence: 'I believe electric buses should replace diesel transport completely.',
      },
      {
        phrase: 'How can residents get involved in urban greening projects?',
        functionCategory: 'Inquiring about civic participation',
        exampleSentence: 'Are there grants for residential rooftop solar installations?',
      },
    ],
    grammar: {
      title: 'Cause, Effect & Purpose Linkers: "In order to", "As a result", "Therefore"',
      conceptExplanation:
        '1. Purpose: "In order to + base verb" (or simply "to + base verb") expresses the intended objective: "Cities build bike lanes in order to encourage healthy commuting."\n2. Cause & Result: "[Cause]. As a result, [Effect]." or "[Cause]; therefore, [Effect]."\n3. Expressing Opinions: "In my opinion / In my view / I firmly believe that..." followed by a full clause.',
      patternFormula: '[Action] + in order to + [Base Verb] / [Cause Clause]. As a result, [Result Clause]',
      contrastExamples: [
        {
          incorrect: 'Cities plant trees in order to cooling streets.',
          correct: 'Cities plant trees in order to cool streets.',
          explanation: '"In order to" is followed by the base form of the verb ("cool"), not a gerund.',
        },
        {
          incorrect: 'As a result traffic, air is clean.',
          correct: 'As a result of reduced traffic, the air is cleaner.',
          explanation: 'Use "As a result of + noun phrase" or "As a result, [Subject + Verb]".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Marcus',
        text: 'Welcome to our Urban Ecology forum! How do you think green spaces impact everyday life in our city?',
        translation: 'हमारे शहरी पारिस्थितिकी मंच पर आपका स्वागत है! आपको क्या लगता है कि हरित स्थान हमारे शहर में रोजमर्रा की जिंदगी को कैसे प्रभावित करते हैं?',
      },
      {
        speaker: 'Learner',
        text: 'Hello Marcus! In my view, urban parks improve public wellbeing. In order to lower temperatures, we need more tree canopies and rooftop gardens.',
        translation: 'नमस्ते मार्कस! मेरे विचार में, शहरी पार्क सार्वजनिक भलाई में सुधार करते हैं। तापमान कम करने के लिए, हमें अधिक पेड़ों की छत्रछाया और छत के बगीचों की आवश्यकता है।',
      },
      {
        speaker: 'Marcus',
        text: 'I couldn’t agree more. Pedestrianized streets and solar transit also create cleaner air for everyone.',
        translation: 'मैं पूरी तरह सहमत हूँ। पैदल चलने वाली सड़कें और सौर पारगमन भी सभी के लिए स्वच्छ हवा बनाते हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_234_1',
      type: 'fill_blank',
      prompt: 'Complete with the linker of purpose: "The city built protected lanes ______ (in order to / because) protect cyclists."',
      options: [
        { id: 'opt_1', text: 'in order to', isCorrect: true },
        { id: 'opt_2', text: 'because', isCorrect: false },
        { id: 'opt_3', text: 'as a result', isCorrect: false },
      ],
      correctAnswer: 'in order to',
      explanation: '"In order to" expresses purpose before a base verb ("protect").',
    },
    {
      id: 'cp_234_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses cause and result in urban design?',
      options: [
        { id: 'opt_1', text: 'The city expanded tree canopies; as a result, summer street temperatures decreased.', isCorrect: true },
        { id: 'opt_2', text: 'The city expanded tree canopies as result of decrease temperatures.', isCorrect: false },
        { id: 'opt_3', text: 'Tree canopies expanded in order as a result to cool.', isCorrect: false },
      ],
      correctAnswer: 'The city expanded tree canopies; as a result, summer street temperatures decreased.',
      explanation: '"As a result," correctly introduces the consequence clause.',
    },
    {
      id: 'cp_234_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [In my opinion / pedestrianized plazas / greatly enhance / urban wellbeing]',
      correctAnswer: 'In my opinion pedestrianized plazas greatly enhance urban wellbeing',
      explanation: 'Opinion phrase + subject + adverb + verb + object.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_234_1',
      prompt: 'Construct a sentence stating that cities build rooftop gardens in order to reduce heat and improve air quality.',
      scenarioContext: 'Discussing green architecture with Marcus.',
      targetStructure: 'Cities build rooftop gardens in order to reduce urban heat and improve air quality.',
      wordBank: ['Cities build rooftop gardens', 'in order to reduce', 'urban heat and improve', 'air quality,', 'Marcus.'],
      acceptableSolutions: [
        'Cities build rooftop gardens in order to reduce urban heat and improve air quality.',
        'Cities create green roofs in order to reduce heat.',
      ],
      explanation: 'Purpose clause with "in order to + base verb".',
    },
    {
      id: 'sc_234_2',
      prompt: 'Construct a sentence stating that expanding cycling infrastructure encourages eco-friendly mobility.',
      scenarioContext: 'Talking about transport planning.',
      targetStructure: 'Expanding dedicated cycling infrastructure encourages sustainable daily commuting.',
      wordBank: ['Expanding dedicated cycling', 'infrastructure encourages', 'sustainable daily commuting,', 'Marcus.'],
      acceptableSolutions: [
        'Expanding dedicated cycling infrastructure encourages sustainable daily commuting.',
        'Developing cycling infrastructure supports green commuting.',
      ],
      explanation: 'Gerund subject + present simple verb + object.',
    },
  ],
  turns: [
    {
      id: 'turn_234_1',
      turnIndex: 1,
      partnerPrompt:
        'Good afternoon! I’m Marcus from the Urban Planning Commission. We are presenting our new 10-year Green City Masterplan. What green infrastructure elements do you feel our city needs most urgently?',
      partnerAudioText:
        'Good afternoon! I’m Marcus from the Urban Planning Commission. We are presenting our new 10-year Green City Masterplan. What green infrastructure elements do you feel our city needs most urgently?',
      partnerQuestionHindi:
        'शुभ दोपहर! मैं शहरी योजना आयोग से मार्कस हूँ। हम अपना नया 10-वर्षीय ग्रीन सिटी मास्टरप्लान प्रस्तुत कर रहे हैं। आपके अनुसार हमारे शहर को सबसे तत्काल किन हरित बुनियादी ढाँचा तत्वों की आवश्यकता है?',
      expectedFunction: 'Greeting Marcus and stating opinions on urban green infrastructure using "in order to" or "in my opinion"',
      contextGoal: 'Greet Marcus, suggest expanding tree canopies and rooftop gardens in order to reduce heat and boost wellbeing',
      targetVocabulary: ['Good afternoon Marcus', 'in my opinion', 'tree canopy', 'rooftop gardens', 'in order to', 'wellbeing'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Good afternoon, Marcus! In my opinion, our city urgently needs expanded tree canopies and rooftop gardens in order to cool downtown streets and improve citizen wellbeing.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Marcus! I believe creating pedestrianized zones and expanding green parks is crucial in order to reduce traffic fumes and noise pollution.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good afternoon, Marcus! In my view, investing in protected cycling lanes and vertical gardens will transform our urban environment.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_marcus',
          patterns: ['good afternoon', 'hello', 'hi', 'marcus'],
          required: true,
        },
        {
          name: 'green_infrastructure_opinion',
          patterns: ['in my opinion', 'in my view', 'tree canopy', 'rooftop gardens', 'pedestrianized', 'in order to', 'wellbeing', 'infrastructure'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_234_1_in_order_to_ing',
          pattern: /in order to reducing|in order to cooling/i,
          errorType: 'grammar',
          message: 'Use base verb after "in order to": "in order to reduce heat".',
          correctionPattern: 'In order to cool our streets, we need more tree canopies.',
        },
      ],
      remediationPractice: {
        id: 'rem_234_1',
        type: 'fill_blank',
        prompt: 'Fill in: "We planted trees in order to ______ (provide) shade."',
        options: [
          { id: 'r1', text: 'provide', isCorrect: true },
          { id: 'r2', text: 'providing', isCorrect: false },
        ],
        correctAnswer: 'provide',
        explanation: '"In order to" takes a base verb.',
      },
    },
    {
      id: 'turn_234_2',
      turnIndex: 2,
      partnerPrompt:
        'Tree canopies and green roofs are top priorities in our blueprint! We are also considering pedestrianizing the central shopping avenue. What benefits do you foresee if we ban private cars in the city center?',
      partnerAudioText:
        'Tree canopies and green roofs are top priorities in our blueprint! We are also considering pedestrianizing the central shopping avenue. What benefits do you foresee if we ban private cars in the city center?',
      partnerQuestionHindi:
        'पेड़ों की छत्रछाया और हरी छतें हमारे खाके में सर्वोच्च प्राथमिकताएं हैं! हम केंद्रीय शॉपिंग एवेन्यू को पैदल यात्री क्षेत्र में बदलने पर भी विचार कर रहे हैं। यदि हम शहर के केंद्र में निजी कारों पर प्रतिबंध लगाते हैं तो आप क्या लाभ देखते हैं?',
      expectedFunction: 'Explaining cause and effect of pedestrianization using "as a result" or "therefore"',
      contextGoal: 'Explain that air quality will improve, local businesses will thrive, and families will enjoy safer streets',
      targetVocabulary: ['pedestrianized', 'as a result', 'air quality', 'safer streets', 'local businesses', 'wellbeing'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'If the central avenue is pedestrianized, air quality will improve dramatically. As a result, more families will shop and dine outside, boosting local businesses and community wellbeing.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Pedestrianized avenues create quieter, safer public spaces. As a result of banning private cars, people will walk, cycle, and enjoy the city center more.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Removing car traffic will lower carbon emissions. Therefore, the city center will become a vibrant, healthy destination for residents and tourists alike.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'cause_effect_benefits',
          patterns: ['as a result', 'therefore', 'pedestrianized', 'air quality', 'safer', 'businesses', 'families', 'wellbeing'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_234_2_as_a_result_structure',
          pattern: /as result air is good/i,
          errorType: 'grammar',
          message: 'Use "As a result," as a connector: "As a result, air quality will improve."',
          correctionPattern: 'As a result, the city center will become safer and cleaner.',
        },
      ],
      remediationPractice: {
        id: 'rem_234_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly links pedestrianization with cleaner air?',
        options: [
          { id: 'r1', text: 'The avenue was pedestrianized; as a result, air pollution dropped significantly.', isCorrect: true },
          { id: 'r2', text: 'The avenue pedestrianized as result to drop pollution.', isCorrect: false },
        ],
        correctAnswer: 'The avenue was pedestrianized; as a result, air pollution dropped significantly.',
        explanation: 'Accurate semicolon + "as a result," transition.',
      },
    },
    {
      id: 'turn_234_3',
      turnIndex: 3,
      partnerPrompt:
        'Your insights are incredibly valuable for our council report. We have public feedback sessions every Thursday evening at 6:00 PM in the town hall. Would you like to attend and help shape our neighborhood masterplan?',
      partnerAudioText:
        'Your insights are incredibly valuable for our council report. We have public feedback sessions every Thursday evening at 6:00 PM in the town hall. Would you like to attend and help shape our neighborhood masterplan?',
      partnerQuestionHindi:
        'आपकी अंतर्दृष्टि हमारी परिषद की रिपोर्ट के लिए अविश्वसनीय रूप से मूल्यवान है। हमारे पास टाउन हॉल में हर गुरुवार शाम 6:00 बजे सार्वजनिक फीडबैक सत्र होते हैं। क्या आप इसमें भाग लेना चाहेंगे और हमारे पड़ोस के मास्टरप्लान को आकार देने में मदद करना चाहेंगे?',
      expectedFunction: 'Accepting the invitation enthusiastically, confirming Thursday at 6:00 PM, and thanking Marcus',
      contextGoal: 'Accept the invite for Thursday at 6 PM, express excitement about contributing, and thank Marcus',
      targetVocabulary: ['Thursday at 6:00 PM', 'town hall', 'public session', 'Thank you Marcus', 'look forward to'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I would be delighted to attend the public session this Thursday at 6:00 PM in the town hall! Thank you for listening to community feedback, Marcus.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Count me in for Thursday at six! I look forward to participating in the discussion and supporting our green urban masterplan.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Thank you, Marcus! I will definitely be there on Thursday at 6:00 PM. Have a productive afternoon!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'acceptance_and_thanks',
          patterns: ['thursday', '6:00', '6 pm', 'town hall', 'delighted', 'thank you', 'marcus', 'look forward to'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_234_3_short_reply',
          pattern: /^yes i come thursday\.$/i,
          errorType: 'interaction',
          message: 'Provide a polite, complete confirmation: "I would be happy to attend on Thursday at 6:00 PM, Marcus!"',
          correctionPattern: 'I would be delighted to attend this Thursday at 6:00 PM.',
        },
      ],
      remediationPractice: {
        id: 'rem_234_3',
        type: 'fill_blank',
        prompt: 'Fill in: "I look forward to ______ (attending) the meeting."',
        options: [
          { id: 'r1', text: 'attending', isCorrect: true },
          { id: 'r2', text: 'attend', isCorrect: false },
        ],
        correctAnswer: 'attending',
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
