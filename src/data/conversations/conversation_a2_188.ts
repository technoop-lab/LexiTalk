import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_188: ConversationDefinition = {
  id: 'conv_a2_188',
  title: 'City Sightseeing, Iconic Landmarks & Navigating Historic Quarters',
  cefr: 'A2',
  unitId: 'unit_a2_13',
  lessonLinks: ['lesson_a2_13_188'],
  estimatedMinutes: 5,
  scenario:
    'You are taking a self-guided walking tour in the Old Town historic district of Prague. You stop at a local visitor kiosk to ask tourist officer Gabriel for directions to the medieval clock tower, cobblestone town square, and stone river bridge.',
  communicativeGoals: [
    'Give and understand walking directions using prepositions of motion (past, across, along, through, opposite)',
    'Inquire about historic architectural landmarks and iconic monuments',
    'Ask for walking distances, scenic routes, and navigation landmarks',
    'Repeat and confirm detailed spatial directions to ensure understanding',
  ],
  canDoStatements: [
    'Can ask for and follow walking directions in historic city centers in English',
    'Can use prepositions of motion and position (through the arch, along the river, past the church, opposite the square)',
    'Can confirm and clarify navigational steps politely',
  ],
  characters: [
    {
      id: 'char_gabriel_officer',
      name: 'Gabriel',
      role: 'Old Town Tourist Information Officer',
      avatar: '🗺️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'landmark',
        ipa: '/ˈlændmɑːk/',
        partOfSpeech: 'noun',
        meaning: 'An object or feature of a landscape or town that is easily seen and recognized from a distance',
        exampleSentence: 'The astronomical clock tower is the city’s most famous landmark.',
        translations: { hi: 'प्रसिद्ध स्थल / लैंडमार्क' },
      },
      {
        word: 'monument',
        ipa: '/ˈmɒnjumənt/',
        partOfSpeech: 'noun',
        meaning: 'A statue, building, or other structure erected to commemorate a notable person or event',
        exampleSentence: 'A grand stone monument stands in the center of the old square.',
        translations: { hi: 'स्मारक' },
      },
      {
        word: 'through',
        ipa: '/θruː/',
        partOfSpeech: 'preposition',
        meaning: 'Moving in one side and out of the other side of an opening or enclosed space',
        exampleSentence: 'Walk through the ancient stone archway into the courtyard.',
        translations: { hi: 'के माध्यम से / में से होकर' },
      },
      {
        word: 'opposite',
        ipa: '/ˈɒpəzɪt/',
        partOfSpeech: 'preposition',
        meaning: 'Having a position on the other or further side of something',
        exampleSentence: 'The city hall is located directly opposite the cathedral.',
        translations: { hi: 'के सामने / विपरीत दिशा में' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Walk along the river until you reach the stone bridge.',
        functionCategory: 'Direction along linear path',
        exampleSentence: 'Stroll along the pedestrian street filled with cafes.',
      },
      {
        phrase: 'Go straight past the cathedral and turn left at the fountain.',
        functionCategory: 'Directing past a landmark',
        exampleSentence: 'Walk past the library and cross the avenue.',
      },
      {
        phrase: 'Could you tell me how to get to the historic clock tower?',
        functionCategory: 'Asking for directions',
        exampleSentence: 'Is the castle within walking distance from here?',
      },
      {
        phrase: 'So I go through the archway and it is opposite the square, right?',
        functionCategory: 'Confirming directions',
        exampleSentence: 'Let me make sure I understood the route correctly.',
      },
    ],
    grammar: {
      title: 'Prepositions of Motion & Direction: past, across, along, through, opposite',
      conceptExplanation:
        '1. Prepositions of Motion describe movement:\n   - "along": following the line of a road or river ("Walk along the riverbank.")\n   - "through": moving inside an enclosed space or gate ("Walk through the park / stone gate.")\n   - "across": moving from one side of a street or bridge to the other ("Walk across the bridge.")\n   - "past": moving beyond a specific point without stopping ("Walk past the bakery.")\n2. Preposition of Position:\n   - "opposite": facing across the street or plaza ("The museum is opposite the hotel.")',
      patternFormula: '[Imperative Verb / Walk] + [along / across / through / past] + [Landmark / Street] + to [Destination]',
      contrastExamples: [
        {
          incorrect: 'Walk pass the cathedral and cross by the street.',
          correct: 'Walk past the cathedral and cross the street.',
          explanation: '"Past" is the preposition of motion; "pass" is a verb.',
        },
        {
          incorrect: 'Walk into the river until the bridge.',
          correct: 'Walk along the river until the bridge.',
          explanation: '"Along" means walking alongside the bank, not into the water.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Gabriel',
        text: 'Hello! How can I guide your sightseeing tour around the Old Town today?',
        translation: 'नमस्ते! आज मैं ओल्ड टाउन में आपके दर्शनीय स्थलों के भ्रमण का मार्गदर्शन कैसे कर सकता हूँ?',
      },
      {
        speaker: 'Learner',
        text: 'Hello! Could you tell me the best walking route to the Charles Bridge?',
        translation: 'नमस्ते! क्या आप मुझे चार्ल्स ब्रिज तक जाने का सबसे अच्छा पैदल रास्ता बता सकते हैं?',
      },
      {
        speaker: 'Gabriel',
        text: 'Certainly! Walk straight along King Street, go through the gate, and it will be right in front of you.',
        translation: 'बिल्कुल! किंग स्ट्रीट के साथ सीधे चलें, गेट से होकर गुजरें, और यह आपके ठीक सामने होगा।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_188_1',
      type: 'fill_blank',
      prompt: 'Complete the direction: "Walk ______ (through) the stone archway into the main courtyard."',
      options: [
        { id: 'opt_1', text: 'through', isCorrect: true },
        { id: 'opt_2', text: 'across', isCorrect: false },
        { id: 'opt_3', text: 'over', isCorrect: false },
      ],
      correctAnswer: 'through',
      explanation: 'We walk "through" an archway or tunnel.',
    },
    {
      id: 'cp_188_2',
      type: 'multiple_choice',
      prompt: 'Which preposition correctly completes: "Walk ______ the river until you see the ancient tower"?',
      options: [
        { id: 'opt_1', text: 'along', isCorrect: true },
        { id: 'opt_2', text: 'through', isCorrect: false },
        { id: 'opt_3', text: 'underneath', isCorrect: false },
      ],
      correctAnswer: 'along',
      explanation: '"Along" indicates moving parallel to the line of a river or road.',
    },
    {
      id: 'cp_188_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [the cathedral / walk past / and turn right / at the square]',
      correctAnswer: 'walk past the cathedral and turn right at the square',
      explanation: 'Movement instruction with preposition "past" + turning direction.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_188_1',
      prompt: 'Construct a sentence giving directions to walk across the bridge and past the library.',
      scenarioContext: 'Explaining a route to a fellow traveler.',
      targetStructure: 'Walk across the historic bridge and go past the city library.',
      wordBank: ['Walk', 'across', 'the historic bridge', 'and', 'go past', 'the city library', 'on foot'],
      acceptableSolutions: [
        'Walk across the historic bridge and go past the city library.',
        'Walk across the bridge and go past the library.',
      ],
      explanation: 'Combine prepositions "across" and "past".',
    },
    {
      id: 'sc_188_2',
      prompt: 'Construct a sentence confirming that the art gallery is opposite the town hall.',
      scenarioContext: 'Checking location with Gabriel.',
      targetStructure: 'The art gallery is located directly opposite the town hall.',
      wordBank: ['The art gallery', 'is located', 'directly opposite', 'the town hall', 'on the square'],
      acceptableSolutions: [
        'The art gallery is located directly opposite the town hall.',
        'The gallery is directly opposite the town hall.',
      ],
      explanation: 'Use "opposite" to state position across a square or street.',
    },
  ],
  turns: [
    {
      id: 'turn_188_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello and welcome to Prague’s Old Town Information Kiosk! We have maps and guides for all historic quarters. Where are you heading today?',
      partnerAudioText:
        'Hello and welcome to Prague’s Old Town Information Kiosk! We have maps and guides for all historic quarters. Where are you heading today?',
      partnerQuestionHindi:
        'नमस्ते और प्राग के ओल्ड टाउन सूचना कियोस्क में आपका स्वागत है! हमारे पास सभी ऐतिहासिक क्षेत्रों के लिए नक्शे और गाइड हैं। आज आप कहाँ जा रहे हैं?',
      expectedFunction: 'Greeting and asking for walking directions to a famous landmark',
      contextGoal: 'Greet Gabriel and ask how to get to the Astronomical Clock Tower or Old Town Square',
      targetVocabulary: ['how to get to', 'clock tower', 'square', 'landmark', 'walking'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello! Could you tell me how to get to the historic Astronomical Clock Tower on foot?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Good morning! What is the fastest walking route to the Old Town Square from here?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Hi Gabriel! We want to explore the main square and medieval tower. Which way should we walk?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_polite',
          patterns: ['hello', 'good morning', 'hi', 'gabriel', 'could you tell me', 'how to get'],
          required: true,
        },
        {
          name: 'landmark_destination',
          patterns: ['clock tower', 'square', 'old town', 'astronomical', 'tower', 'medieval', 'bridge'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_188_1_how_to',
          pattern: /how i go to/i,
          errorType: 'grammar',
          message: 'Say "How can I get to..." or "Could you tell me how to get to...".',
          correctionPattern: 'How do I get to...',
        },
      ],
      remediationPractice: {
        id: 'rem_188_1',
        type: 'fill_blank',
        prompt: 'Fill in: "Could you tell me how to ______ (get) to the square?"',
        options: [
          { id: 'r1', text: 'get', isCorrect: true },
          { id: 'r2', text: 'getting', isCorrect: false },
        ],
        correctAnswer: 'get',
        explanation: 'We say "how to get to [destination]".',
      },
    },
    {
      id: 'turn_188_2',
      turnIndex: 2,
      partnerPrompt:
        'It is very close! Walk straight along this cobblestone street for about 200 meters. Then, walk past the Gothic church, go through the arched passage, and you will enter the Old Town Square. Is that clear?',
      partnerAudioText:
        'It is very close! Walk straight along this cobblestone street for about 200 meters. Then, walk past the Gothic church, go through the arched passage, and you will enter the Old Town Square. Is that clear?',
      partnerQuestionHindi:
        'यह बहुत करीब है! इस पथरीली सड़क पर लगभग 200 मीटर सीधे चलें। फिर, गोथिक चर्च के पास से निकलें, धनुषाकार रास्ते से गुजरें, और आप ओल्ड टाउन स्क्वायर में प्रवेश करेंगे। क्या यह स्पष्ट है?',
      expectedFunction: 'Confirming understanding by repeating key prepositions of motion',
      contextGoal: 'Confirm the route (along the street, past the church, through the arched passage)',
      targetVocabulary: ['along', 'past', 'through', 'understand', 'clear'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Yes, that is clear! So I walk along this street, past the church, and through the archway into the square.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Understood! Along the street, past the Gothic church, and through the passage. That sounds easy.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Perfect! Walk straight along the cobblestones, past the church, and through the arch. Where is the clock tower inside the square?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'confirmation',
          patterns: ['clear', 'understood', 'yes', 'perfect', 'got it', 'sounds easy'],
          required: true,
        },
        {
          name: 'preposition_repetition',
          patterns: ['along', 'past', 'through', 'street', 'church', 'arch', 'archway', 'passage', 'square'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_188_2_pass_vs_past',
          pattern: /walk pass the church/i,
          errorType: 'grammar',
          message: 'The preposition is spelled "past" (walk past the church).',
          correctionPattern: 'walk past the church',
        },
      ],
      remediationPractice: {
        id: 'rem_188_2',
        type: 'multiple_choice',
        prompt: 'Which word is the preposition of motion meaning "beyond"?',
        options: [
          { id: 'r1', text: 'past (walk past the monument)', isCorrect: true },
          { id: 'r2', text: 'pass (walk pass the monument)', isCorrect: false },
        ],
        correctAnswer: 'past (walk past the monument)',
        explanation: '"Past" is the preposition.',
      },
    },
    {
      id: 'turn_188_3',
      turnIndex: 3,
      partnerPrompt:
        'When you enter the square, the Clock Tower is located directly opposite the City Hall. After seeing the clock, I recommend walking across the Charles Bridge to reach the castle hill. Would you like a walking map?',
      partnerAudioText:
        'When you enter the square, the Clock Tower is located directly opposite the City Hall. After seeing the clock, I recommend walking across the Charles Bridge to reach the castle hill. Would you like a walking map?',
      partnerQuestionHindi:
        'जब आप चौराहे पर प्रवेश करते हैं, तो क्लॉक टॉवर सीधे सिटी हॉल के सामने स्थित होता है। घड़ी देखने के बाद, मैं कैसल हिल तक पहुँचने के लिए चार्ल्स ब्रिज के पार चलने की सलाह देता हूँ। क्या आप एक वॉकिंग मैप चाहते हैं?',
      expectedFunction: 'Accepting map and asking about walking distance or bridge landmarks',
      contextGoal: 'Thank Gabriel, accept the map, and ask how long the walk across the bridge takes',
      targetVocabulary: ['map', 'across', 'bridge', 'minutes', 'walk', 'opposite'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Yes please, a map would be wonderful! How many minutes does it take to walk across the bridge to the castle?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Thank you, I would love a map. Is the walk across the Charles Bridge crowded at this hour?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'A map is super helpful! How long does it take to walk along the river and across the bridge to the hilltop?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'map_acceptance',
          patterns: ['map', 'yes', 'please', 'would love', 'wonderful', 'thank you'],
          required: true,
        },
        {
          name: 'bridge_or_time_q',
          patterns: ['how long', 'minutes', 'time', 'across', 'bridge', 'castle', 'crowded', 'distance'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_188_3_how_long',
          pattern: /how many time does it take/i,
          errorType: 'grammar',
          message: 'Say "How long does it take?" or "How many minutes does it take?".',
          correctionPattern: 'How long does it take...?',
        },
      ],
      remediationPractice: {
        id: 'rem_188_3',
        type: 'fill_blank',
        prompt: 'Fill in: "How ______ (long) does it take to walk there?"',
        options: [
          { id: 'r1', text: 'long', isCorrect: true },
          { id: 'r2', text: 'much time long', isCorrect: false },
        ],
        correctAnswer: 'long',
        explanation: 'We ask "How long does it take?".',
      },
    },
    {
      id: 'turn_188_4',
      turnIndex: 4,
      partnerPrompt:
        'It takes about twenty minutes to stroll across the bridge, and the panoramic views of the river are breathtaking! Here is your free city map with all historic landmarks marked. Have a wonderful sightseeing adventure!',
      partnerAudioText:
        'It takes about twenty minutes to stroll across the bridge, and the panoramic views of the river are breathtaking! Here is your free city map with all historic landmarks marked. Have a wonderful sightseeing adventure!',
      partnerQuestionHindi:
        'पुल के पार टहलने में लगभग बीस मिनट लगते हैं, और नदी के विहंगम दृश्य लुभावने हैं! सभी ऐतिहासिक स्थलों के साथ यह रहा आपका मुफ्त शहर का नक्शा। आपकी दर्शनीय यात्रा शानदार रहे!',
      expectedFunction: 'Expressing gratitude, taking the map, and saying goodbye warmly',
      contextGoal: 'Thank Gabriel warmly for the advice and map and conclude the interaction',
      targetVocabulary: ['thank you', 'kind', 'help', 'goodbye', 'adventure'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Thank you so much for your kind help, Gabriel! Have a great day. Goodbye!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Thank you for the detailed directions and map. I am excited for the walk. Bye!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'You have been extremely helpful Gabriel! I will enjoy walking across the bridge. Thank you and goodbye!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'gratitude_closing',
          patterns: ['thank you', 'thanks', 'helpful', 'kind', 'appreciate'],
          required: true,
        },
        {
          name: 'farewell',
          patterns: ['goodbye', 'bye', 'great day', 'have a nice day', 'enjoy', 'walk'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_188_4_short',
          pattern: /^(thanks bye|ok)$/i,
          errorType: 'interaction',
          message: 'Conclude with a warm, complete sentence thanking the officer.',
          correctionPattern: 'Thank you for your help, Gabriel! Goodbye.',
        },
      ],
      remediationPractice: {
        id: 'rem_188_4',
        type: 'multiple_choice',
        prompt: 'Which is the most courteous way to close this interaction?',
        options: [
          { id: 'r1', text: 'Thank you very much for your help and the map! Have a wonderful day.', isCorrect: true },
          { id: 'r2', text: 'Bye map taken.', isCorrect: false },
        ],
        correctAnswer: 'Thank you very much for your help and the map! Have a wonderful day.',
        explanation: 'Courteous and complete phrasing.',
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
