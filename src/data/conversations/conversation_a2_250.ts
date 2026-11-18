import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_250: ConversationDefinition = {
  id: 'conv_a2_250',
  title: 'Everyday Information, Notices & Announcements',
  cefr: 'A2',
  unitId: 'unit_a2_17',
  lessonLinks: ['lesson_a2_17_250'],
  estimatedMinutes: 5,
  scenario:
    'You are in a civic transit hub reading municipal notice boards and talking with station officer Marcus. You decode announcements about platform alterations, elevator maintenance schedules, temporary service disruptions, and mediate an audio delay announcement for a fellow commuter.',
  communicativeGoals: [
    'Read and interpret municipal bulletins, transit signs, and public facility announcements in A2 English',
    'Understand formulaic signage language: "out of service", "due to maintenance", "passengers are requested to"',
    'Ask for clarification about changed opening hours or platform numbers',
    'Mediate a public audio transit notice clearly for a confused passenger',
  ],
  canDoStatements: [
    'Can understand public notices about facility closures, maintenance, and schedule alterations',
    'Can ask station staff for information about delays and alternative routes',
    'Can relay loudspeaker transit announcements to another person in simple terms',
  ],
  characters: [
    {
      id: 'char_marcus_transit_officer',
      name: 'Marcus',
      role: 'Civic Transit Station Officer',
      avatar: '🚉',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'out of service',
        ipa: '/aʊt əv ˈsɜːvɪs/',
        partOfSpeech: 'phrase',
        meaning: 'Not currently working, operating, or available for public use',
        exampleSentence: 'The north elevator is temporarily out of service for regular maintenance.',
        translations: { hi: 'सेवा में नहीं / बंद (आउट ऑफ सर्विस)' },
      },
      {
        word: 'announcement',
        ipa: '/əˈnaʊnsmənt/',
        partOfSpeech: 'noun',
        meaning: 'A formal public statement about a fact, occurrence, delay, or schedule change',
        exampleSentence: 'Please listen carefully to the loudspeaker announcement regarding platform changes.',
        translations: { hi: 'घोषणा / सूचना (अनाउंसमेंट)' },
      },
      {
        word: 'maintenance',
        ipa: '/ˈmeɪntənəns/',
        partOfSpeech: 'noun',
        meaning: 'The process of maintaining or preserving something in good condition through inspection and repair',
        exampleSentence: 'Track maintenance work will take place between midnight and five in the morning.',
        translations: { hi: 'रखरखाव / मरम्मत (मेंटिनेंस)' },
      },
      {
        word: 'disruption',
        ipa: '/dɪsˈrʌpʃn/',
        partOfSpeech: 'noun',
        meaning: 'Disturbance or problems which interrupt an event, activity, or transport process',
        exampleSentence: 'We apologize for any service disruption caused by the signal upgrade.',
        translations: { hi: 'व्यवधान / रुकावट (डिसरप्शन)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Due to scheduled maintenance...',
        functionCategory: 'Explaining reasons for service changes',
        exampleSentence: 'Due to scheduled maintenance, platform three is closed today.',
      },
      {
        phrase: 'Passengers are requested to use...',
        functionCategory: 'Relaying formal transit instructions',
        exampleSentence: 'Passengers are requested to use the pedestrian footbridge.',
      },
      {
        phrase: 'The notice says that...',
        functionCategory: 'Mediating written public signs',
        exampleSentence: 'The notice says that the ticket office closes at six o’clock today.',
      },
      {
        phrase: 'Could you please confirm if...?',
        functionCategory: 'Asking station staff for confirmation',
        exampleSentence: 'Could you please confirm if the direct airport train is running on time?',
      },
    ],
    grammar: {
      title: 'Formal Notices: "Due to + Noun" & Passive Announcements',
      conceptExplanation:
        '1. Stating causes with "due to": "Due to technical issues / Due to track repairs"\n2. Passive public announcements: "Passengers are requested to wait behind the yellow line." / "The escalator is being repaired."\n3. Prepositions of time on notices: "from Monday to Wednesday", "until further notice."',
      patternFormula: 'Due to [Noun Phrase], [Service] is [temporarily closed / delayed] / Passengers are requested to + [Verb]',
      contrastExamples: [
        {
          incorrect: 'Due to repair the track, trains are late.',
          correct: 'Due to track repairs, trains are delayed.',
          explanation: '"Due to" is followed by a noun phrase, not a verb infinitive.',
        },
        {
          incorrect: 'The elevator is out from service.',
          correct: 'The elevator is out of service.',
          explanation: 'The standard fixed phrase is "out of service".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Marcus',
        text: 'Attention passengers! Please check the digital board for updated departures. How may I help you today?',
        translation: 'यात्रियों का ध्यान आकर्षित किया जाता है! कृपया अद्यतन प्रस्थान के लिए डिजिटल बोर्ड देखें। आज मैं आपकी क्या मदद कर सकता हूँ?',
      },
      {
        speaker: 'Learner',
        text: 'Hello Marcus! The sign says the north elevator is out of service. Could you tell me where the nearest ramp is?',
        translation: 'नमस्ते मार्कस! संकेत कहता है कि उत्तरी लिफ्ट सेवा से बाहर है। क्या आप मुझे बता सकते हैं कि निकटतम रैंप कहाँ है?',
      },
      {
        speaker: 'Marcus',
        text: 'Certainly! You can take the accessible ramp right past ticket counter two.',
        translation: 'निश्चित रूप से! आप टिकट काउंटर दो के ठीक आगे सुलभ रैंप ले सकते हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_250_1',
      type: 'fill_blank',
      prompt: 'Complete: "The escalator is temporarily out ______ (of / from / off) service for safety inspections."',
      options: [
        { id: 'opt_1', text: 'of', isCorrect: true },
        { id: 'opt_2', text: 'from', isCorrect: false },
        { id: 'opt_3', text: 'off', isCorrect: false },
      ],
      correctAnswer: 'of',
      explanation: 'The fixed expression is "out of service".',
    },
    {
      id: 'cp_250_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly explains the reason for a delay?',
      options: [
        { id: 'opt_1', text: 'Due to signal maintenance, trains on line one are delayed by fifteen minutes.', isCorrect: true },
        { id: 'opt_2', text: 'Due to maintain signal, trains is late fifteen minutes.', isCorrect: false },
        { id: 'opt_3', text: 'Due of signals maintenance, train delaying.', isCorrect: false },
      ],
      correctAnswer: 'Due to signal maintenance, trains on line one are delayed by fifteen minutes.',
      explanation: '"Due to [noun phrase]" followed by a passive clause.',
    },
    {
      id: 'cp_250_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [Passengers are requested to / board the train from / platform number four]',
      correctAnswer: 'Passengers are requested to board the train from platform number four',
      explanation: 'Passive announcement: Passengers are requested to + verb + prepositional phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_250_1',
      prompt: 'Construct a sentence stating that due to scheduled maintenance, platform three is closed until noon.',
      scenarioContext: 'Reading the station notice board.',
      targetStructure: 'Due to scheduled maintenance, platform three is closed until noon.',
      wordBank: ['Due to scheduled maintenance,', 'platform three is', 'closed until noon.', 'announcement', 'out from service'],
      acceptableSolutions: [
        'Due to scheduled maintenance, platform three is closed until noon.',
        'Platform three is closed until noon due to scheduled maintenance.',
      ],
      explanation: '"Due to scheduled maintenance" explains the closure condition.',
    },
    {
      id: 'sc_250_2',
      prompt: 'Construct a sentence stating that passengers are requested to use the stairs because the lift is out of service.',
      scenarioContext: 'Explaining a notice to Marcus.',
      targetStructure: 'Passengers are requested to use the stairs because the lift is out of service.',
      wordBank: ['Passengers are requested to', 'use the stairs because', 'the lift is out of service.', 'disruptions', 'due of'],
      acceptableSolutions: [
        'Passengers are requested to use the stairs because the lift is out of service.',
        'Because the lift is out of service, passengers are requested to use the stairs.',
      ],
      explanation: 'Combines the polite passive request with the causal reason.',
    },
  ],
  turns: [
    {
      id: 'turn_250_1',
      turnIndex: 1,
      partnerPrompt:
        'Good afternoon, commuter! I am Station Officer Marcus. We have several printed notices and digital alerts posted today. What information or timetable updates are you looking for?',
      partnerAudioText:
        'Good afternoon, commuter! I am Station Officer Marcus. We have several printed notices and digital alerts posted today. What information or timetable updates are you looking for?',
      partnerQuestionHindi:
        'शुभ दोपहर, यात्री! मैं स्टेशन अधिकारी मार्कस हूँ। हमारे पास आज कई मुद्रित नोटिस और डिजिटल अलर्ट लगे हुए हैं। आप कौन सी जानकारी या समय सारिणी अपडेट की तलाश कर रहे हैं?',
      expectedFunction: 'Greeting Marcus politely and inquiring about a notice or train schedule alteration',
      contextGoal: 'Greet Marcus, state that you saw a notice about maintenance or delays, and ask for confirmation about your train/platform',
      targetVocabulary: ['Good afternoon Marcus', 'notice board', 'out of service', 'platform change', 'train delay', 'due to maintenance'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Good afternoon, Marcus! I saw the notice board stating that platform three is closed due to maintenance. Could you confirm where the express train to the airport will depart from?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Marcus! The announcement mentioned a ten-minute delay. Is train forty-two still running from platform five?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good afternoon! The elevator sign says out of service. Could you tell me where the accessible ramp is located?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_marcus',
          patterns: ['good afternoon', 'hello', 'hi', 'marcus', 'officer'],
          required: true,
        },
        {
          name: 'transit_inquiry',
          patterns: ['notice', 'platform', 'maintenance', 'delay', 'train', 'out of service', 'elevator', 'depart', 'airport', 'confirm'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_250_1_out_from_service',
          pattern: /out from service/i,
          errorType: 'grammar',
          message: 'Say "out of service" instead of "out from service".',
          correctionPattern: 'The elevator is out of service.',
        },
      ],
      remediationPractice: {
        id: 'rem_250_1',
        type: 'fill_blank',
        prompt: 'Fill in: "The ticket machine is out ______ (of / from) service."',
        options: [
          { id: 'r1', text: 'of', isCorrect: true },
          { id: 'r2', text: 'from', isCorrect: false },
        ],
        correctAnswer: 'of',
        explanation: '"Out of service" is the fixed phrase.',
      },
    },
    {
      id: 'turn_250_2',
      turnIndex: 2,
      partnerPrompt:
        'The express train has been shifted to Platform 5 because of scheduled electrical work. There is also a written notice regarding ticket counter opening hours. What does the yellow notice say?',
      partnerAudioText:
        'The express train has been shifted to Platform 5 because of scheduled electrical work. There is also a written notice regarding ticket counter opening hours. What does the yellow notice say?',
      partnerQuestionHindi:
        'निर्धारित विद्युत कार्य के कारण एक्सप्रेस ट्रेन को प्लेटफॉर्म 5 पर स्थानांतरित कर दिया गया है। टिकट काउंटर के खुलने के समय के संबंध में एक लिखित नोटिस भी है। पीला नोटिस क्या कहता है?',
      expectedFunction: 'Reading and explaining the content of a written municipal or station notice',
      contextGoal: 'Explain that the yellow notice states the ticket office closes at 6 PM today and passengers should use automatic kiosks',
      targetVocabulary: ['The notice says that', 'ticket counter', 'closes at', 'passengers are requested to', 'automatic machines', 'due to upgrade'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'The notice says that the main ticket counter closes at 6:00 PM today for a system upgrade, and passengers are requested to use the automatic ticket machines.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'According to the yellow notice, customer service hours are altered today, but we can easily purchase passes online or at the digital kiosks.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'The sign explains that counter staff leave early today, so travelers should use the self-service ticket machines.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'notice_reading_formula',
          patterns: ['the notice says', 'according to the notice', 'the sign says', 'the notice states', 'explains'],
          required: true,
        },
        {
          name: 'notice_details',
          patterns: ['ticket counter', 'closes', '6:00', 'six', 'machines', 'automatic', 'upgrade', 'kiosks', 'hours'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_250_2_notice_say',
          pattern: /the notice say /i,
          errorType: 'grammar',
          message: 'Use 3rd person singular: "The notice says that...".',
          correctionPattern: 'The notice says that the counter closes at six.',
        },
      ],
      remediationPractice: {
        id: 'rem_250_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly paraphrases a public sign?',
        options: [
          { id: 'r1', text: 'The notice says that the ticket office closes at six o’clock.', isCorrect: true },
          { id: 'r2', text: 'The notice say that ticket office is close at six.', isCorrect: false },
        ],
        correctAnswer: 'The notice says that the ticket office closes at six o’clock.',
        explanation: 'Singular subject "notice" takes verb "says".',
      },
    },
    {
      id: 'turn_250_3',
      turnIndex: 3,
      partnerPrompt:
        'A loud crackling announcement just came over the station speakers: "Attention passengers on Platform 3: the 14:15 regional service is delayed by 20 minutes due to track maintenance." A worried tourist did not catch that. Could you mediate the announcement for them clearly?',
      partnerAudioText:
        'A loud crackling announcement just came over the station speakers: "Attention passengers on Platform 3: the 14:15 regional service is delayed by 20 minutes due to track maintenance." A worried tourist did not catch that. Could you mediate the announcement for them clearly?',
      partnerQuestionHindi:
        'स्टेशन के लाउडस्पीकर पर अभी-अभी एक घोषणा हुई: "प्लेटफॉर्म 3 पर यात्रियों का ध्यान दें: ट्रैक रखरखाव के कारण 14:15 की क्षेत्रीय सेवा में 20 मिनट की देरी है।" एक चिंतित पर्यटक इसे नहीं समझ पाया। क्या आप उनके लिए घोषणा की स्पष्ट रूप से मध्यस्थता (mediate) कर सकते हैं?',
      expectedFunction: 'Mediating a loudspeaker transit announcement accurately in simple, polite English',
      contextGoal: 'Explain that the 14:15 train on platform 3 is delayed by 20 minutes due to track repairs and will arrive at 14:35',
      targetVocabulary: ['Hello', 'the announcement said that', 'delayed by 20 minutes', 'track maintenance', 'platform 3', 'will arrive at 14:35'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello! The loudspeaker announcement said that the 14:15 regional train on Platform 3 is delayed by twenty minutes due to track maintenance, so it will arrive at approximately 14:35.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi! Do not worry. The announcement said our train is delayed by twenty minutes because of track repairs. We have time to sit and wait.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Hello! The train on platform three is twenty minutes late due to maintenance. It should be here shortly at 14:35.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'polite_greeting_attribution',
          patterns: ['hello', 'hi', 'announcement', 'said', 'mentioned', 'worry'],
          required: true,
        },
        {
          name: 'delay_details',
          patterns: ['twenty minutes', '20 minutes', 'delayed', 'late', 'track maintenance', 'repairs', '14:35', 'platform 3'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_250_3_delay_preposition',
          pattern: /delayed for 20 minutes/i,
          errorType: 'grammar',
          message: 'Say "delayed by 20 minutes" (preposition "by" for duration of delay).',
          correctionPattern: 'The train is delayed by twenty minutes.',
        },
      ],
      remediationPractice: {
        id: 'rem_250_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [The announcement said that the train / is delayed by twenty minutes / due to track maintenance]',
        correctAnswer: 'The announcement said that the train is delayed by twenty minutes due to track maintenance',
        explanation: 'Reporting verb + passive delay + cause phrase.',
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
