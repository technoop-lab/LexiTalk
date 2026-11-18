import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_247: ConversationDefinition = {
  id: 'conv_a2_247',
  title: 'Tourism, Sightseeing & Local Recommendations',
  cefr: 'A2',
  unitId: 'unit_a2_17',
  lessonLinks: ['lesson_a2_17_247'],
  estimatedMinutes: 5,
  scenario:
    'You are at the Tourist Information Kiosk talking with travel advisor Diego. You ask for sightseeing tips, recommend must-see landmarks and scenic viewpoints in your region, give transit advice, and mediate an itinerary for a first-time tourist.',
  communicativeGoals: [
    'Recommend must-see tourist landmarks, scenic viewpoints, and historical monuments in A2 English',
    'Use recommendation chunks: "a must-see landmark", "breathtaking views", "it is located in..."',
    'Give practical local transit advice (tram, ferry, walking routes)',
    'Structure a simple one-day sightseeing itinerary for a visitor',
  ],
  canDoStatements: [
    'Can give practical recommendations about famous landmarks and scenic viewpoints in their city or region',
    'Can explain how to travel between tourist spots using local public transport',
    'Can help a tourist plan a simple day-trip itinerary',
  ],
  characters: [
    {
      id: 'char_diego_tourism_guide',
      name: 'Diego',
      role: 'Local Tourist Information Advisor',
      avatar: '🗺️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'must-see',
        ipa: '/ˈmʌst siː/',
        partOfSpeech: 'adjective / noun',
        meaning: 'Something so interesting, impressive, or famous that it should definitely be seen or visited',
        exampleSentence: 'The old hilltop fortress is an absolute must-see landmark in our town.',
        translations: { hi: 'अवश्य देखने योग्य (मस्ट-सी)' },
      },
      {
        word: 'breathtaking',
        ipa: '/ˈbreθteɪkɪŋ/',
        partOfSpeech: 'adjective',
        meaning: 'Astonishing or awe-inspiring in beauty, grandeur, or panoramic view',
        exampleSentence: 'The viewpoint at the summit offers a breathtaking view over the entire valley.',
        translations: { hi: 'मनमोहक / सांस रोक देने वाला (ब्रेथटेकिंग)' },
      },
      {
        word: 'landmark',
        ipa: '/ˈlændmɑːk/',
        partOfSpeech: 'noun',
        meaning: 'An easily recognizable feature of a landscape or town with historical significance',
        exampleSentence: 'The clock tower is the city’s most recognizable historical landmark.',
        translations: { hi: 'प्रमुख ऐतिहासिक स्थल (लैंडमार्क)' },
      },
      {
        word: 'itinerary',
        ipa: '/aɪˈtɪnərəri/',
        partOfSpeech: 'noun',
        meaning: 'A planned route, schedule, or list of places to visit on a journey',
        exampleSentence: 'Here is a simple one-day itinerary for exploring the old quarter.',
        translations: { hi: 'यात्रा कार्यक्रम (इटिनररी)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'It is an absolute must-see because...',
        functionCategory: 'Stating strong recommendations',
        exampleSentence: 'The botanical garden is an absolute must-see because of its ancient greenhouse.',
      },
      {
        phrase: 'It offers a breathtaking view of...',
        functionCategory: 'Describing scenic viewpoints',
        exampleSentence: 'The tower offers a breathtaking view of the harbor and coastline.',
      },
      {
        phrase: 'The best way to get there is by...',
        functionCategory: 'Giving transit and route guidance',
        exampleSentence: 'The best way to get there is by taking tram line number four.',
      },
      {
        phrase: 'For a one-day trip, I suggest starting at...',
        functionCategory: 'Outlining a structured sightseeing itinerary',
        exampleSentence: 'For a one-day trip, I suggest starting at the central square early in the morning.',
      },
    ],
    grammar: {
      title: 'Giving Travel Advice: Superlatives & Imperatives with Modals (Should / Can)',
      conceptExplanation:
        '1. Superlative descriptions: "the most famous landmark", "the best viewpoint."\n2. Modals for recommendations: "You should visit...", "You can take the tram."\n3. Prepositions of transport: "by tram", "by ferry", "on foot."\n4. Sequence linkers for itineraries: "First... then... after that... finally."',
      patternFormula: 'First, [You should visit Landmark] -> Next, [take Transit to Viewpoint] -> Finally, [enjoy dinner at Place]',
      contrastExamples: [
        {
          incorrect: 'The castle is the most breathtakinger place.',
          correct: 'The castle has the most breathtaking view.',
          explanation: 'Use "most breathtaking" (multi-syllable adjective).',
        },
        {
          incorrect: 'You can go there by foot.',
          correct: 'You can go there on foot / by tram.',
          explanation: 'Say "on foot" (not "by foot") or "by tram/bus".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Diego',
        text: 'Good afternoon! Welcome to the tourist desk. Are you planning some sightseeing around the city today?',
        translation: 'शुभ दोपहर! पर्यटक डेस्क में आपका स्वागत है। क्या आप आज शहर के चारों ओर कुछ दर्शनीय स्थलों की यात्रा की योजना बना रहे हैं?',
      },
      {
        speaker: 'Learner',
        text: 'Good afternoon! Yes, I would love some local recommendations. What is an absolute must-see landmark?',
        translation: 'शुभ दोपहर! हाँ, मुझे कुछ स्थानीय सिफारिशें पसंद आएंगी। अवश्य देखने योग्य प्रमुख स्थल कौन सा है?',
      },
      {
        speaker: 'Diego',
        text: 'You should definitely visit the hilltop citadel! It is located in the old district and offers a breathtaking view of the river.',
        translation: 'आपको निश्चित रूप से पहाड़ी किले का दौरा करना चाहिए! यह पुराने जिले में स्थित है और नदी का एक मनमोहक दृश्य प्रस्तुत करता है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_247_1',
      type: 'fill_blank',
      prompt: 'Complete: "The hilltop fortress is an absolute ______ (must-see / must-seen / must-seeing) for tourists."',
      options: [
        { id: 'opt_1', text: 'must-see', isCorrect: true },
        { id: 'opt_2', text: 'must-seen', isCorrect: false },
        { id: 'opt_3', text: 'must-seeing', isCorrect: false },
      ],
      correctAnswer: 'must-see',
      explanation: '"Must-see" is the fixed compound adjective/noun.',
    },
    {
      id: 'cp_247_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly gives transit advice to a landmark?',
      options: [
        { id: 'opt_1', text: 'The easiest way to get there is by taking tram line number two.', isCorrect: true },
        { id: 'opt_2', text: 'The easiest way get there by foot tram.', isCorrect: false },
        { id: 'opt_3', text: 'You can to go by foot the castle.', isCorrect: false },
      ],
      correctAnswer: 'The easiest way to get there is by taking tram line number two.',
      explanation: '"The easiest way to get there is by [verb-ing]" is the accurate formula.',
    },
    {
      id: 'cp_247_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [The sky terrace offers / a breathtaking view / over the entire historic city]',
      correctAnswer: 'The sky terrace offers a breathtaking view over the entire historic city',
      explanation: 'Subject + offers + breathtaking view + location prepositional phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_247_1',
      prompt: 'Construct a sentence stating that the harbor lighthouse offers a breathtaking view of the sea.',
      scenarioContext: 'Recommending a viewpoint.',
      targetStructure: 'The harbor lighthouse offers a breathtaking view of the sea.',
      wordBank: ['The harbor lighthouse', 'offers a breathtaking', 'view of the sea.', 'itinerary', 'must-seeing'],
      acceptableSolutions: [
        'The harbor lighthouse offers a breathtaking view of the sea.',
        'The lighthouse offers a breathtaking view of the sea.',
      ],
      explanation: 'Collocation: "offers a breathtaking view of [place]".',
    },
    {
      id: 'sc_247_2',
      prompt: 'Construct a sentence giving a 1-day itinerary: start at the old market, then take the scenic ferry.',
      scenarioContext: 'Planning an itinerary for a visitor.',
      targetStructure: 'For a one-day trip, start at the old market, then take the scenic ferry.',
      wordBank: ['For a one-day trip,', 'start at the old market,', 'then take the', 'scenic ferry.', 'breathtakinger'],
      acceptableSolutions: [
        'For a one-day trip, start at the old market, then take the scenic ferry.',
        'For a one-day trip, you should start at the old market, then take the scenic ferry.',
      ],
      explanation: 'Sequence linkers: "For a one-day trip, start at... then take...".',
    },
  ],
  turns: [
    {
      id: 'turn_247_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello there! Welcome to the Central Tourist Information Kiosk. Are you looking for local recommendations, and what types of sights do you enjoy—historic monuments, scenic viewpoints, or cultural markets?',
      partnerAudioText:
        'Hello there! Welcome to the Central Tourist Information Kiosk. Are you looking for local recommendations, and what types of sights do you enjoy—historic monuments, scenic viewpoints, or cultural markets?',
      partnerQuestionHindi:
        'नमस्ते! सेंट्रल टूरिस्ट इंफॉर्मेशन कियोस्क में आपका स्वागत है। क्या आप स्थानीय सिफारिशों की तलाश कर रहे हैं, और आप किस प्रकार के स्थलों का आनंद लेते हैं—ऐतिहासिक स्मारक, प्राकृतिक दृश्य स्थल, या सांस्कृतिक बाजार?',
      expectedFunction: 'Greeting Diego and expressing sightseeing interests using adjectives and landmark vocabulary',
      contextGoal: 'Greet Diego, state interest in historic monuments and scenic viewpoints, and ask for his top recommendations',
      targetVocabulary: ['Hello Diego', 'recommendations', 'historic monuments', 'scenic viewpoints', 'must-see', 'enjoy exploring'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello Diego! Yes, I would love some local recommendations. I really enjoy exploring historic monuments and scenic viewpoints that offer panoramic photos.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi Diego! I am looking for the top must-see landmarks in the city. I love walking through old neighborhoods and visiting cultural markets.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good afternoon! I would like to visit historical places and scenic spots today. What do you recommend?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_diego',
          patterns: ['hello', 'hi', 'diego', 'good morning', 'good afternoon'],
          required: true,
        },
        {
          name: 'sightseeing_interests',
          patterns: ['recommendations', 'monuments', 'historic', 'viewpoints', 'landmarks', 'markets', 'scenic', 'must-see', 'explore'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_247_1_must_see_noun',
          pattern: /is a must to see/i,
          errorType: 'structure',
          message: 'Say "is a must-see landmark" instead of "is a must to see".',
          correctionPattern: 'The old fort is a must-see landmark.',
        },
      ],
      remediationPractice: {
        id: 'rem_247_1',
        type: 'fill_blank',
        prompt: 'Fill in: "The historic tower is an absolute ______ (must-see / must to see)."',
        options: [
          { id: 'r1', text: 'must-see', isCorrect: true },
          { id: 'r2', text: 'must to see', isCorrect: false },
        ],
        correctAnswer: 'must-see',
        explanation: '"Must-see" is the correct hyphenated compound term.',
      },
    },
    {
      id: 'turn_247_2',
      turnIndex: 2,
      partnerPrompt:
        'The Old Citadel and the Riverside Promenade are both fantastic! If you had to describe the most famous landmark in your hometown or region, what is it, where is it located, and why does it attract so many visitors?',
      partnerAudioText:
        'The Old Citadel and the Riverside Promenade are both fantastic! If you had to describe the most famous landmark in your hometown or region, what is it, where is it located, and why does it attract so many visitors?',
      partnerQuestionHindi:
        'ओल्ड सिटाडेल और रिवरसाइड प्रोमेनेड दोनों शानदार हैं! यदि आपको अपने गृहनगर या क्षेत्र के सबसे प्रसिद्ध ऐतिहासिक स्थल का वर्णन करना हो, तो वह क्या है, कहाँ स्थित है, और यह इतने सारे पर्यटकों को क्यों आकर्षित करता है?',
      expectedFunction: 'Describing a famous regional landmark, its location, and why it is breathtaking or historic',
      contextGoal: 'Describe a landmark (fortress, temple, palace, tower), state where it is located, and mention its breathtaking view or history',
      targetVocabulary: ['landmark', 'located in', 'breathtaking view', 'attracts tourists', 'historic', 'architecture'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'In my region, the most famous landmark is an ancient hilltop fortress. It is located in the old town and offers a breathtaking view over the river and surrounding mountains.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'The grand palace in my city center is our top landmark. It has beautiful historic architecture, marble courtyards, and attracts visitors from all over the world.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Our most famous spot is the seaside lighthouse. It is located on the cliffs and provides breathtaking sunset views.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'landmark_location',
          patterns: ['located in', 'located on', 'fortress', 'palace', 'temple', 'lighthouse', 'tower', 'old town', 'city center'],
          required: true,
        },
        {
          name: 'landmark_appeal',
          patterns: ['breathtaking', 'view', 'historic', 'architecture', 'attracts', 'visitors', 'mountains', 'river', 'beautiful'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_247_2_located_at_city',
          pattern: /located at old town/i,
          errorType: 'grammar',
          message: 'Use "located in the old town" (preposition "in" for districts and towns).',
          correctionPattern: 'The fortress is located in the old town.',
        },
      ],
      remediationPractice: {
        id: 'rem_247_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes a landmark location?',
        options: [
          { id: 'r1', text: 'The ancient fortress is located in the historic district.', isCorrect: true },
          { id: 'r2', text: 'The ancient fortress locates on historic district.', isCorrect: false },
        ],
        correctAnswer: 'The ancient fortress is located in the historic district.',
        explanation: '"Is located in + area" is the proper passive locational phrase.',
      },
    },
    {
      id: 'turn_247_3',
      turnIndex: 3,
      partnerPrompt:
        'A traveler just came to our kiosk asking for a one-day itinerary. Could you mediate a simple full-day plan for them, explaining what to visit in the morning, afternoon, and how to travel between spots?',
      partnerAudioText:
        'A traveler just came to our kiosk asking for a one-day itinerary. Could you mediate a simple full-day plan for them, explaining what to visit in the morning, afternoon, and how to travel between spots?',
      partnerQuestionHindi:
        'एक यात्री अभी हमारे कियोस्क पर एक दिवसीय यात्रा कार्यक्रम पूछने आया है। क्या आप उनके लिए एक सरल पूरे दिन की योजना की मध्यस्थता (mediate) कर सकते हैं, जिसमें बताया गया हो कि सुबह, दोपहर में क्या देखना है और स्थानों के बीच कैसे यात्रा करनी है?',
      expectedFunction: 'Mediating a 1-day sightseeing itinerary using sequence linkers and transit advice in simple English',
      contextGoal: 'Explain a 3-step plan: morning visit to the old square, afternoon tram to the citadel viewpoint, and evening ferry or dinner',
      targetVocabulary: ['For a one-day itinerary', 'First in the morning', 'take the tram', 'breathtaking view', 'in the afternoon', 'finally'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello! For a one-day itinerary, I suggest starting at the central square in the morning. In the afternoon, take tram line two up to the Old Citadel for breathtaking views. Finally, enjoy a walk along the river at sunset.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi there! First, visit the local heritage museum. Next, take the scenic ferry across to the botanical gardens. In the evening, explore the old market on foot.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Welcome! Start your morning at the historic tower, take the bus to the scenic viewpoint after lunch, and finish with dinner in the old town.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'itinerary_sequencing',
          patterns: ['start', 'first', 'morning', 'afternoon', 'next', 'then', 'finally', 'evening', 'itinerary'],
          required: true,
        },
        {
          name: 'transit_and_sights',
          patterns: ['tram', 'ferry', 'bus', 'walk', 'on foot', 'citadel', 'museum', 'square', 'viewpoint', 'market', 'tower', 'river'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_247_3_by_foot',
          pattern: /go by foot/i,
          errorType: 'grammar',
          message: 'Say "go on foot" or "walk there" instead of "by foot".',
          correctionPattern: 'You can explore the old town on foot.',
        },
      ],
      remediationPractice: {
        id: 'rem_247_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [For a one-day itinerary, / take the tram to the citadel / and enjoy the views]',
        correctAnswer: 'For a one-day itinerary, take the tram to the citadel and enjoy the views',
        explanation: 'Itinerary introductory chunk + imperative instruction.',
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
