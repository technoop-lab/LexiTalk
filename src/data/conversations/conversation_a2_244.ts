import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_244: ConversationDefinition = {
  id: 'conv_a2_244',
  title: 'Music, Concerts & Cultural Experiences',
  cefr: 'A2',
  unitId: 'unit_a2_17',
  lessonLinks: ['lesson_a2_17_244'],
  estimatedMinutes: 5,
  scenario:
    'You are outside an outdoor amphitheater at the summer music festival chatting with event coordinator Julian. You talk about musical genres, live concerts you have attended, describe musical instruments, and mediate concert schedule details for a group of attendees.',
  communicativeGoals: [
    'Describe musical styles, acoustic instruments, and live concert venues in A2 English',
    'Use performance chunks: "performed on stage", "play live", "the atmosphere was electric"',
    'Express personal music preferences and compare live concerts with recorded music',
    'Mediate festival timings and stage lineups for fellow attendees',
  ],
  canDoStatements: [
    'Can describe a concert or live music event they attended in simple connected sentences',
    'Can discuss different musical instruments and genres they enjoy listening to',
    'Can give practical information about performance times and stage locations to others',
  ],
  characters: [
    {
      id: 'char_julian_concert_host',
      name: 'Julian',
      role: 'Festival Event Coordinator',
      avatar: '🎸',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'live performance',
        ipa: '/laɪv pəˈfɔːməns/',
        partOfSpeech: 'noun phrase',
        meaning: 'A musical, theatrical, or artistic show performed in real-time in front of an audience',
        exampleSentence: 'Nothing beats the energy of a live performance by talented musicians.',
        translations: { hi: 'लाइव प्रस्तुति (लाइव परफॉर्मेंस)' },
      },
      {
        word: 'acoustic',
        ipa: '/əˈkuːstɪk/',
        partOfSpeech: 'adjective',
        meaning: 'Relating to sound or music produced without electronic amplification',
        exampleSentence: 'The singer played a soulful song on an acoustic guitar.',
        translations: { hi: 'ध्वनिक / गैर-इलेक्ट्रिक (अकूस्टिक)' },
      },
      {
        word: 'venue',
        ipa: '/ˈvenjuː/',
        partOfSpeech: 'noun',
        meaning: 'The place where an organized event such as a concert, conference, or sports match happens',
        exampleSentence: 'The open-air amphitheater is the best concert venue in the city.',
        translations: { hi: 'कार्यक्रम स्थल / आयोजन स्थल (वेन्यू)' },
      },
      {
        word: 'atmosphere',
        ipa: '/ˈætməsfɪə/',
        partOfSpeech: 'noun',
        meaning: 'The pervading tone, feeling, or mood of a place, situation, or creative event',
        exampleSentence: 'The atmosphere in the arena was lively and friendly.',
        translations: { hi: 'माहौल / वातावरण (एटमॉस्फियर)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'They performed on the main stage...',
        functionCategory: 'Describing stage events and locations',
        exampleSentence: 'They performed on the main stage right after sunset.',
      },
      {
        phrase: 'The atmosphere was absolutely amazing!',
        functionCategory: 'Evaluating the mood of a live event',
        exampleSentence: 'Everyone was singing along, and the atmosphere was absolutely amazing!',
      },
      {
        phrase: 'I prefer listening to live music because...',
        functionCategory: 'Comparing live and recorded music',
        exampleSentence: 'I prefer listening to live music because you feel the musicians’ energy.',
      },
      {
        phrase: 'According to the schedule, the band starts at...',
        functionCategory: 'Relaying concert timetable details',
        exampleSentence: 'According to the schedule, the jazz band starts at seven o’clock.',
      },
    ],
    grammar: {
      title: 'Describing Events: Past Simple vs. Present Preferences & Prepositions of Place',
      conceptExplanation:
        '1. Describing past performances: "They played traditional instruments on stage."\n2. Expressing permanent musical tastes: "I enjoy classical music and indie folk."\n3. Prepositions of venue: "at the concert hall", "on the main stage", "in the amphitheater."\n4. Contrast with "while": "I love acoustic shows, while my friend prefers electronic music."',
      patternFormula: '[Band/Singer] + [performed / played] + [on stage / at venue] + [while / because + Clause]',
      contrastExamples: [
        {
          incorrect: 'They play live yesterday at the main stage.',
          correct: 'They played live yesterday on the main stage.',
          explanation: 'Use past tense "played" and preposition "on the stage".',
        },
        {
          incorrect: 'The atmosphere was very acoustic.',
          correct: 'The atmosphere was electric, and the music was acoustic.',
          explanation: '"Acoustic" refers to non-electric instruments, whereas "electric/lively" describes atmosphere.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Julian',
        text: 'Welcome to the summer music festival! Are you excited for today’s live performances?',
        translation: 'ग्रीष्मकालीन संगीत समारोह में आपका स्वागत है! क्या आप आज की लाइव प्रस्तुतियों के लिए उत्साहित हैं?',
      },
      {
        speaker: 'Learner',
        text: 'Very excited! I love acoustic music, and the atmosphere here in the park is fantastic.',
        translation: 'बहुत उत्साहित! मुझे ध्वनिक (अकूस्टिक) संगीत पसंद है, और यहाँ पार्क का माहौल शानदार है।',
      },
      {
        speaker: 'Julian',
        text: 'Terrific! Have you seen the schedule on the board by the entrance?',
        translation: 'शानदार! क्या आपने प्रवेश द्वार के पास बोर्ड पर कार्यक्रम सूची देखी है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_244_1',
      type: 'fill_blank',
      prompt: 'Complete: "The folk group performed ______ (on / in / at) the main stage last night."',
      options: [
        { id: 'opt_1', text: 'on', isCorrect: true },
        { id: 'opt_2', text: 'in', isCorrect: false },
        { id: 'opt_3', text: 'under', isCorrect: false },
      ],
      correctAnswer: 'on',
      explanation: 'We say "perform on stage".',
    },
    {
      id: 'cp_244_2',
      type: 'multiple_choice',
      prompt: 'Which sentence best describes a concert atmosphere?',
      options: [
        { id: 'opt_1', text: 'The crowd cheered warmly, and the concert atmosphere was fantastic.', isCorrect: true },
        { id: 'opt_2', text: 'The concert atmosphere played acoustic on crowd.', isCorrect: false },
        { id: 'opt_3', text: 'The atmosphere was performing instruments loudly.', isCorrect: false },
      ],
      correctAnswer: 'The crowd cheered warmly, and the concert atmosphere was fantastic.',
      explanation: 'Correct collocation: "the concert atmosphere was fantastic".',
    },
    {
      id: 'cp_244_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [The orchestra played / traditional acoustic instruments / on the riverside stage]',
      correctAnswer: 'The orchestra played traditional acoustic instruments on the riverside stage',
      explanation: 'Subject + verb + object + location prepositional phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_244_1',
      prompt: 'Construct a sentence stating that the jazz band played live on the garden stage last night.',
      scenarioContext: 'Recounting a concert to Julian.',
      targetStructure: 'The jazz band played live on the garden stage last night.',
      wordBank: ['The jazz band', 'played live on', 'the garden stage', 'last night.', 'performing at'],
      acceptableSolutions: [
        'The jazz band played live on the garden stage last night.',
        'Last night the jazz band played live on the garden stage.',
      ],
      explanation: 'Past simple action located on stage.',
    },
    {
      id: 'sc_244_2',
      prompt: 'Construct a sentence stating that according to the schedule, the classical concert begins at seven.',
      scenarioContext: 'Checking festival timetable.',
      targetStructure: 'According to the schedule, the classical concert begins at seven.',
      wordBank: ['According to the schedule,', 'the classical concert', 'begins at seven', 'o’clock.', 'acoustic atmosphere'],
      acceptableSolutions: [
        'According to the schedule, the classical concert begins at seven o’clock.',
        'According to the schedule, the classical concert begins at seven.',
      ],
      explanation: 'Formula for mediating concert timetables.',
    },
  ],
  turns: [
    {
      id: 'turn_244_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey there! Welcome to the Riverside Music Festival. It is great to see so many music fans today. What genres of music do you like listening to, and do you play any instruments yourself?',
      partnerAudioText:
        'Hey there! Welcome to the Riverside Music Festival. It is great to see so many music fans today. What genres of music do you like listening to, and do you play any instruments yourself?',
      partnerQuestionHindi:
        'अरे! रिवरसाइड म्यूज़िक फेस्टिवल में आपका स्वागत है। आज इतने सारे संगीत प्रेमियों को देखना बहुत अच्छा है। आप किस शैली का संगीत सुनना पसंद करते हैं, और क्या आप खुद कोई वाद्ययंत्र बजाते हैं?',
      expectedFunction: 'Greeting Julian and describing musical tastes, genres, and instrument experience',
      contextGoal: 'Greet Julian, mention favorite genres (acoustic folk, classical, jazz, pop), and state if you play an instrument (e.g. guitar, piano, flute)',
      targetVocabulary: ['Hello Julian', 'genres', 'acoustic guitar', 'classical', 'jazz', 'listen to music', 'play'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello Julian! I love listening to acoustic folk and jazz. I play the acoustic guitar a little bit as a relaxing hobby at home.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi Julian! My favorite genres are classical and pop music. I do not play an instrument, but I love listening to live concerts.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good afternoon! I enjoy indie rock and instrumental music. The energy of live musicians is always inspiring to hear.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_julian',
          patterns: ['hello', 'hi', 'julian', 'good afternoon', 'good morning'],
          required: true,
        },
        {
          name: 'music_genres_instruments',
          patterns: ['folk', 'jazz', 'classical', 'pop', 'rock', 'acoustic', 'guitar', 'piano', 'flute', 'instrument', 'music', 'genres'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_244_1_play_the',
          pattern: /i play with guitar/i,
          errorType: 'grammar',
          message: 'Say "I play the guitar" or "I play guitar" without "with".',
          correctionPattern: 'I play the guitar at home.',
        },
      ],
      remediationPractice: {
        id: 'rem_244_1',
        type: 'fill_blank',
        prompt: 'Fill in: "She plays ______ (the guitar / with guitar) very well."',
        options: [
          { id: 'r1', text: 'the guitar', isCorrect: true },
          { id: 'r2', text: 'with guitar', isCorrect: false },
        ],
        correctAnswer: 'the guitar',
        explanation: 'We use the verb "play" directly with musical instruments.',
      },
    },
    {
      id: 'turn_244_2',
      turnIndex: 2,
      partnerPrompt:
        'Awesome! Live shows always bring unique energy. Tell me about the best concert or live performance you have ever experienced. Where was the venue, and what was the atmosphere like?',
      partnerAudioText:
        'Awesome! Live shows always bring unique energy. Tell me about the best concert or live performance you have ever experienced. Where was the venue, and what was the atmosphere like?',
      partnerQuestionHindi:
        'बहुत बढ़िया! लाइव शो हमेशा अनोखी ऊर्जा लाते हैं। मुझे सबसे बेहतरीन कॉन्सर्ट या लाइव प्रस्तुति के बारे में बताएं जिसका आपने कभी अनुभव किया है। आयोजन स्थल कहाँ था, और माहौल कैसा था?',
      expectedFunction: 'Describing a past concert experience, venue, and atmosphere using past simple and descriptive adjectives',
      contextGoal: 'Describe the venue (outdoor amphitheater, concert hall, park) and atmosphere (electric, friendly, peaceful, vibrant)',
      targetVocabulary: ['live performance', 'venue', 'performed on stage', 'atmosphere was', 'crowd cheered', 'unforgettable'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Last summer, I attended an open-air concert in a mountain amphitheater. The band performed on a wooden stage, and the atmosphere was vibrant and friendly.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I went to a classical symphony in the city concert hall. The musicians played beautifully, and the whole audience gave a standing ovation.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'The best concert was a beach festival last year. The sound was great, people danced on the sand, and the atmosphere was electric.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'venue_description',
          patterns: ['amphitheater', 'concert hall', 'park', 'venue', 'stage', 'beach', 'open-air'],
          required: true,
        },
        {
          name: 'atmosphere_evaluation',
          patterns: ['atmosphere', 'electric', 'vibrant', 'friendly', 'beautiful', 'cheered', 'danced', 'unforgettable', 'great'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_244_2_atmosphere_verb',
          pattern: /atmosphere was making/i,
          errorType: 'structure',
          message: 'Use "the atmosphere was lively / electric / fantastic".',
          correctionPattern: 'The concert atmosphere was fantastic.',
        },
      ],
      remediationPractice: {
        id: 'rem_244_2',
        type: 'multiple_choice',
        prompt: 'Which sentence best describes a memorable live music venue?',
        options: [
          { id: 'r1', text: 'The musicians performed on an open-air stage, and the atmosphere was wonderful.', isCorrect: true },
          { id: 'r2', text: 'The venue was performing instruments on stage loudly.', isCorrect: false },
        ],
        correctAnswer: 'The musicians performed on an open-air stage, and the atmosphere was wonderful.',
        explanation: 'Clear past description of performers, stage, and atmosphere.',
      },
    },
    {
      id: 'turn_244_3',
      turnIndex: 3,
      partnerPrompt:
        'A couple of visitors just arrived looking lost. They want to know when the headline acoustic act starts and where the main stage is located. Could you mediate the schedule for them?',
      partnerAudioText:
        'A couple of visitors just arrived looking lost. They want to know when the headline acoustic act starts and where the main stage is located. Could you mediate the schedule for them?',
      partnerQuestionHindi:
        'कुछ आगंतुक अभी-अभी पहुँचे हैं और भटके हुए लग रहे हैं। वे जानना चाहते हैं कि मुख्य ध्वनिक (अकूस्टिक) प्रस्तुति कब शुरू होगी और मुख्य मंच कहाँ स्थित है। क्या आप उनके लिए कार्यक्रम की मध्यस्थता (mediate) कर सकते हैं?',
      expectedFunction: 'Mediating concert timetable and location directions politely and clearly',
      contextGoal: 'Explain that the headline acoustic act starts at 7:30 PM on the Main Stage near the river',
      targetVocabulary: ['According to the schedule', 'main stage', 'starts at', 'located near', 'enjoy the performance'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello! According to the festival schedule, the headline acoustic act starts at 7:30 PM on the Main Stage, which is located straight ahead near the river.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi! The acoustic concert begins at seven thirty on the Main Riverside Stage. Just follow this pathway to the left.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Welcome! The band starts at 7:30 PM on the big stage by the river. Have a wonderful time at the festival!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'mediation_greeting_time',
          patterns: ['hello', 'hi', 'welcome', '7:30', 'seven thirty', 'starts', 'begins', 'schedule'],
          required: true,
        },
        {
          name: 'stage_location',
          patterns: ['main stage', 'river', 'pathway', 'straight ahead', 'located', 'stage'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_244_3_starts_on_time',
          pattern: /starts in 7:30/i,
          errorType: 'grammar',
          message: 'Use "starts at 7:30" (preposition "at" for clock times).',
          correctionPattern: 'The show starts at 7:30 PM on the main stage.',
        },
      ],
      remediationPractice: {
        id: 'rem_244_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [The acoustic performance starts / at seven thirty / on the main riverside stage]',
        correctAnswer: 'The acoustic performance starts at seven thirty on the main riverside stage',
        explanation: 'Event subject + time with "at" + location with "on".',
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
