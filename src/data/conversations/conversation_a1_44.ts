import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_44: ConversationDefinition = {
  id: 'conv_a1_44',
  title: 'Talking About Future Intentions & Plans (Be going to)',
  cefr: 'A1',
  unitId: 'unit_a1_3',
  lessonLinks: ['lesson_a1_3_44'],
  estimatedMinutes: 5,
  scenario:
    'You and your friend Nina are chatting during lunch break about your upcoming summer vacation plans. You discuss pre-planned itineraries, travel arrangements, booked accommodations, and activities using "be going to + verb".',
  communicativeGoals: [
    'Express prior plans and intentions with "am/is/are going to + base verb" (I am going to visit Spain, We are going to rent a car)',
    'Form and answer questions about future plans ("Where are you going to stay?", "What are you going to do?")',
    'Describe organized itineraries, flight bookings, and travel timelines',
    'Contrast fixed future intentions with uncertain ideas',
  ],
  canDoStatements: [
    'Can describe future intentions and pre-arranged plans using "be going to" (CEFR A1.2)',
    'Can ask and answer questions about vacation itineraries, travel dates, and companions',
    'Can understand and communicate travel schedules in conversational English',
  ],
  characters: [
    {
      id: 'char_nina_travel',
      name: 'Nina',
      role: 'Friend & Colleague',
      avatar: '🏖️',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'vacation',
        ipa: '/veɪˈkeɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'An extended period of leisure and recreation, especially one spent away from home or traveling',
        exampleSentence: 'I am going to take two weeks of vacation in July.',
        translations: { hi: 'छुट्टियाँ / अवकाश' },
      },
      {
        word: 'itinerary',
        ipa: '/aɪˈtɪnərɛri/',
        partOfSpeech: 'noun',
        meaning: 'A planned route or journey',
        exampleSentence: 'We have a detailed itinerary for our trip to Portugal.',
        translations: { hi: 'यात्रा कार्यक्रम' },
      },
      {
        word: 'rent',
        ipa: '/rɛnt/',
        partOfSpeech: 'verb',
        meaning: 'Pay someone for the use of something (typically property, land, or a car)',
        exampleSentence: 'We are going to rent a small electric car at the airport.',
        translations: { hi: 'किराये पर लेना' },
      },
      {
        word: 'explore',
        ipa: '/ɪkˈsplɔːr/',
        partOfSpeech: 'verb',
        meaning: 'Travel through an unfamiliar area in order to learn about it',
        exampleSentence: 'We are going to explore the historic coastlines and beaches.',
        translations: { hi: 'खोजबीन करना / घूमना-देखना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am going to travel to...',
        functionCategory: 'Future Destination Intent',
        exampleSentence: 'I am going to travel to Portugal for ten days.',
      },
      {
        phrase: 'We are going to stay in...',
        functionCategory: 'Accommodation Plan',
        exampleSentence: 'We are going to stay in an eco-resort by the ocean.',
      },
      {
        phrase: 'What are you going to do there?',
        functionCategory: 'Future Activities Inquiry',
        exampleSentence: 'What are you going to do on your first weekend?',
      },
      {
        phrase: 'We are going to visit...',
        functionCategory: 'Sightseeing Plan',
        exampleSentence: 'We are going to visit old castles and coastal villages.',
      },
    ],
    grammar: {
      title: 'Future Intentions & Planned Actions: [be] + going to + [Base Verb]',
      conceptExplanation:
        'Use "am/is/are + going to + base verb" to express intentions, decisions already made, and planned future actions. Statements: I am going to travel / She is going to visit / They are going to rent. Questions: Where are you going to stay? / Are you going to fly?',
      patternFormula: 'Subject + [am/is/are] + going to + [Base Verb] | [Wh-word] + [am/is/are] + Subject + going to + [Base Verb]?',
      contrastExamples: [
        {
          incorrect: 'I going to visit Spain in August.',
          correct: 'I am going to visit Spain in August.',
          explanation: 'Never omit the helping verb "be" (am, is, are): "I am going to visit".',
        },
        {
          incorrect: 'We are going to renting a car.',
          correct: 'We are going to rent a car.',
          explanation: 'Use the base form of the verb after "going to": "going to rent", not "-ing".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Nina',
        text: 'Summer is almost here! Have you finalized your vacation plans yet? Where are you going to go?',
        translation: 'गर्मियां लगभग आ गई हैं! क्या आपने अपनी छुट्टियों की योजना तय कर ली है? आप कहाँ जाने वाले हैं?',
      },
      {
        speaker: 'You',
        text: 'Yes, everything is booked! I am going to travel to southern Portugal with my sister for two weeks.',
        translation: 'हाँ, सब कुछ बुक हो गया है! मैं अपनी बहन के साथ दो हफ़्तों के लिए दक्षिणी पुर्तगाल की यात्रा करने जा रहा हूँ।',
      },
      {
        speaker: 'Nina',
        text: 'Portugal is magnificent! What cities are you going to visit, and where are you going to stay?',
        translation: 'पुर्तगाल शानदार है! आप किन शहरों का दौरा करने वाले हैं, और आप कहाँ रुकने वाले हैं?',
      },
      {
        speaker: 'You',
        text: 'We are going to stay in Lisbon for three days, and then we are going to rent a car and drive down to the Algarve coast.',
        translation: 'हम तीन दिन लिस्बन में रहने वाले हैं, और फिर हम एक कार किराए पर लेकर अल्गार्वे तट की ओर जाने वाले हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_44_1',
      type: 'fill_blank',
      prompt: 'Complete the future intention: "I ___ going to visit my grandparents next month."',
      options: [
        { id: 'opt_1', text: 'am', isCorrect: true },
        { id: 'opt_2', text: 'is', isCorrect: false },
        { id: 'opt_3', text: 'will be', isCorrect: false },
      ],
      correctAnswer: 'am',
      explanation: '"I" pairs with the "be" form "am": "I am going to visit".',
    },
    {
      id: 'cp_a1_44_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly asks about someone\'s future hotel plans?',
      options: [
        { id: 'opt_1', text: 'Where are you going to stay in Barcelona?', isCorrect: true },
        { id: 'opt_2', text: 'Where you going to stay in Barcelona?', isCorrect: false },
        { id: 'opt_3', text: 'Where are you going to staying in Barcelona?', isCorrect: false },
      ],
      correctAnswer: 'Where are you going to stay in Barcelona?',
      explanation: '"Where are you going to + base verb (stay)" is the correct interrogative pattern.',
    },
    {
      id: 'cp_a1_44_3',
      type: 'multiple_choice',
      prompt: 'Choose the correct form for plural future plans:',
      options: [
        { id: 'opt_1', text: 'We are going to rent an apartment near the beach.', isCorrect: true },
        { id: 'opt_2', text: 'We is going to rent an apartment near the beach.', isCorrect: false },
        { id: 'opt_3', text: 'We going rent an apartment near the beach.', isCorrect: false },
      ],
      correctAnswer: 'We are going to rent an apartment near the beach.',
      explanation: 'Subject "We" takes "are going to + base verb".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_44_1',
      scenarioContext: 'State travel destination and duration.',
      prompt: 'Build: "I am going to travel to Portugal for two weeks."',
      targetStructure: 'Subject + am + going to + base verb + prepositional phrase + prepositional phrase',
      wordBank: ['I', 'am', 'going', 'to', 'travel', 'to', 'Portugal', 'for', 'two', 'weeks', 'will', 'traveling'],
      acceptableSolutions: [
        'I am going to travel to Portugal for two weeks',
        'I am going to travel to Portugal for two weeks.',
      ],
      explanation: 'Uses "am going to" for planned future travel.',
    },
    {
      id: 'sc_a1_44_2',
      scenarioContext: 'Describe rental and road trip plan.',
      prompt: 'Build: "We are going to rent a car and drive to the coast."',
      targetStructure: 'Subject + are + going to + base verb + object + coordinator + base verb + prepositional phrase',
      wordBank: ['We', 'are', 'going', 'to', 'rent', 'a', 'car', 'and', 'drive', 'to', 'the', 'coast', 'renting'],
      acceptableSolutions: [
        'We are going to rent a car and drive to the coast',
        'We are going to rent a car and drive to the coast.',
      ],
      explanation: 'Coordinates two base verbs after "are going to": "rent" and "drive".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_44_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! I cannot believe summer vacation is only two weeks away! Do you have any travel plans lined up? Where are you going to go this year?',
      partnerAudioText:
        'Hey! I cannot believe summer vacation is only two weeks away! Do you have any travel plans lined up? Where are you going to go this year?',
      partnerQuestionHindi:
        'अरे! मुझे विश्वास नहीं हो रहा है कि गर्मी की छुट्टियां केवल दो सप्ताह दूर हैं! क्या आपने कोई यात्रा योजना बनाई है? आप इस साल कहाँ जाने वाले हैं?',
      expectedFunction: 'State Vacation Destination with "am going to"',
      contextGoal:
        'State your destination and travel companions using "I am going to travel to [place] with [person] for [duration]".',
      targetVocabulary: ['am going to travel', 'going to visit', 'portugal', 'spain', 'sister', 'two weeks', 'vacation'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I am so excited! I am going to travel to Portugal with my sister for two whole weeks in July. Everything is already booked!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I am going to visit Portugal for two weeks with my sister.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I am going to travel to Portugal with my sister for two weeks!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Destination & Companions',
          patterns: [
            'am going to',
            'going to visit',
            'going to travel',
            'portugal',
            'spain',
            'italy',
            'sister',
            'two weeks',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'missing_am_going',
          pattern: /\bi going to travel\b/i,
          errorType: 'grammar',
          message: 'Say "I am going to travel", not "I going to travel".',
          correctionPattern: 'I am going to travel...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_44_1',
        type: 'fill_blank',
        prompt: 'Choose the correct auxiliary: "I ___ going to fly to Lisbon on Monday."',
        options: [
          { id: 'opt_1', text: 'am', isCorrect: true },
          { id: 'opt_2', text: 'is', isCorrect: false },
          { id: 'opt_3', text: 'are', isCorrect: false },
        ],
        correctAnswer: 'am',
        explanation: '"I" requires the verb form "am".',
      },
    },
    {
      id: 'turn_a1_44_2',
      turnIndex: 2,
      partnerPrompt:
        'Portugal is stunning! The food and beaches are incredible. Where are you going to stay while you are there, and how are you going to travel around?',
      partnerAudioText:
        'Portugal is stunning! The food and beaches are incredible. Where are you going to stay while you are there, and how are you going to travel around?',
      partnerQuestionHindi:
        'पुर्तगाल आश्चर्यजनक है! वहाँ का खाना और समुद्र तट अविश्वसनीय हैं। जब आप वहाँ होंगे तो आप कहाँ रुकने वाले हैं, और आप कैसे यात्रा करने वाले हैं?',
      expectedFunction: 'Describe Accommodation & Transportation Plans (are going to stay / rent)',
      contextGoal:
        'Explain where you are going to stay (e.g. apartment / hotel in Lisbon) and transport (e.g. rent a car to drive to the south).',
      targetVocabulary: ['are going to stay', 'hotel', 'apartment', 'are going to rent', 'car', 'drive', 'coast'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'We are going to stay in a cozy apartment in historic Lisbon for four days, and then we are going to rent an electric car and drive down to the Algarve beaches.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'We are going to stay in an apartment in Lisbon, and then we are going to rent a car to explore the coast.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Staying in Lisbon for 4 days, then we are going to rent a car and drive south.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Accommodation & Transport Plans',
          patterns: [
            'are going to stay',
            'going to stay',
            'are going to rent',
            'going to rent',
            'apartment',
            'hotel',
            'car',
            'lisbon',
            'coast',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'going_to_renting',
          pattern: /\bgoing to renting\b/i,
          errorType: 'grammar',
          message: 'Say "going to rent", not "going to renting".',
          correctionPattern: 'going to rent a car',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_44_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes car rental plans?',
        options: [
          { id: 'opt_1', text: 'We are going to rent a car at the airport.', isCorrect: true },
          { id: 'opt_2', text: 'We are going to renting a car at the airport.', isCorrect: false },
          { id: 'opt_3', text: 'We is going to rent car.', isCorrect: false },
        ],
        correctAnswer: 'We are going to rent a car at the airport.',
        explanation: 'Subject "We" + "are going to" + base verb "rent".',
      },
    },
    {
      id: 'turn_a1_44_3',
      turnIndex: 3,
      partnerPrompt:
        'A coastal road trip sounds dreamlike! What specific activities are you going to do along the Algarve? Are you going to try surfing or just relax by the sea?',
      partnerAudioText:
        'A coastal road trip sounds dreamlike! What specific activities are you going to do along the Algarve? Are you going to try surfing or just relax by the sea?',
      partnerQuestionHindi:
        'तटीय सड़क यात्रा किसी सपने जैसी लगती है! आप अल्गार्वे के साथ कौन सी विशिष्ट गतिविधियाँ करने वाले हैं? क्या आप सर्फिंग आज़माने वाले हैं या बस समुद्र के किनारे आराम करने वाले हैं?',
      expectedFunction: 'Detail Planned Activities (are going to explore / take a boat tour)',
      contextGoal:
        'Describe planned activities (e.g. taking a boat tour to sea caves, swimming, trying fresh seafood, relaxing).',
      targetVocabulary: ['are going to take', 'boat tour', 'sea caves', 'relax', 'swim', 'eat seafood', 'explore'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'We are going to take a boat tour to visit the famous Benagil sea caves, and we are going to take a beginner surfing lesson! We are also going to eat lots of fresh grilled seafood.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'We are going to do a boat tour of the caves, swim in the ocean, and eat fresh fish every day.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'We are going to take a boat trip, surf a little, and relax on the beach!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Planned Activities',
          patterns: ['are going to', 'going to take', 'going to do', 'boat tour', 'caves', 'swim', 'surf', 'relax', 'seafood'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_44_3',
        type: 'fill_blank',
        prompt: 'Fill in the activity plan: "We are going to ___ a beginner surf lesson."',
        options: [
          { id: 'opt_1', text: 'take', isCorrect: true },
          { id: 'opt_2', text: 'taking', isCorrect: false },
          { id: 'opt_3', text: 'took', isCorrect: false },
        ],
        correctAnswer: 'take',
        explanation: 'Use base verb "take" after "going to".',
      },
    },
    {
      id: 'turn_a1_44_4',
      turnIndex: 4,
      partnerPrompt:
        'That sounds like the ultimate summer itinerary! You must take tons of photos and tell me all about it when you return. Have a magnificent trip!',
      partnerAudioText:
        'That sounds like the ultimate summer itinerary! You must take tons of photos and tell me all about it when you return. Have a magnificent trip!',
      partnerQuestionHindi:
        'यह छुट्टियों का एक बेहतरीन कार्यक्रम लगता है! आपको बहुत सारी तस्वीरें लेनी होंगी और लौटने पर मुझे सब कुछ बताना होगा। आपकी यात्रा शानदार रहे!',
      expectedFunction: 'Express Excitement & Promise to Share Photos',
      contextGoal:
        'Thank Nina warmly, promise to share photos when you return, and ask about her weekend.',
      targetVocabulary: ['thank you', 'share photos', 'promise', 'tell you all about it', 'have a great summer', 'goodbye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you so much, Nina! I am definitely going to take hundreds of photos and share them with you. Have a wonderful summer!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thank you Nina! I will send you pictures from the coast. Have a great vacation too!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Thanks a lot Nina! I’ll bring back lots of photos. See you soon!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Farewell & Photo Sharing',
          patterns: ['thank you', 'thanks', 'photos', 'pictures', 'share', 'wonderful summer', 'great vacation', 'see you'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_44_4',
        type: 'multiple_choice',
        prompt: 'Which response concludes the vacation discussion warmly?',
        options: [
          { id: 'opt_1', text: 'Thank you so much, Nina! I will share lots of photos when I get back.', isCorrect: true },
          { id: 'opt_2', text: 'I am stopping talking trip now.', isCorrect: false },
          { id: 'opt_3', text: 'Airplane is going bye.', isCorrect: false },
        ],
        correctAnswer: 'Thank you so much, Nina! I will share lots of photos when I get back.',
        explanation: 'Friendly and gracious conclusion.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 2,
    targetVocabularyCoveragePct: 70,
  },
};
