import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_241: ConversationDefinition = {
  id: 'conv_a2_241',
  title: 'News, Headlines & Understanding Main Ideas',
  cefr: 'A2',
  unitId: 'unit_a2_17',
  lessonLinks: ['lesson_a2_17_241'],
  estimatedMinutes: 5,
  scenario:
    'You are in the community media lounge discussing morning news headlines with local journalist Liam. You read a breaking news story about a new metro line opening in the city, summarize the key facts in simple English, and mediate the headline details for a colleague.',
  communicativeGoals: [
    'Read and interpret news headlines using Present Simple for current events and Past Simple for details',
    'Identify and extract 5W1H facts (who, what, where, when, why, how) from a short news report',
    'Mediate a headline by explaining its main idea clearly to a friend in conversational A2 English',
    'Ask clarifying questions about breaking news broadcasts and public press statements',
  ],
  canDoStatements: [
    'Can understand short, simple news headlines and identify the main topic',
    'Can explain the key facts of a breaking event to someone who did not read the news',
    'Can use past simple and present simple correctly when discussing current events and news reports',
  ],
  characters: [
    {
      id: 'char_liam_reporter',
      name: 'Liam',
      role: 'Local Community Journalist',
      avatar: '📰',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'headline',
        ipa: '/ˈhedlaɪn/',
        partOfSpeech: 'noun',
        meaning: 'A heading at the top of an article or news page summarizing the main story',
        exampleSentence: 'The morning headline announced the opening of the new green metro line.',
        translations: { hi: 'सुर्ख़ी / मुख्य समाचार (हेडलाइन)' },
      },
      {
        word: 'broadcast',
        ipa: '/ˈbrɔːdkɑːst/',
        partOfSpeech: 'noun / verb',
        meaning: 'A radio or television program transmitted to the public',
        exampleSentence: 'I listened to the radio broadcast on my way to work.',
        translations: { hi: 'प्रसारण / ब्रॉडकास्ट (ब्रॉडकास्ट)' },
      },
      {
        word: 'spokesperson',
        ipa: '/ˈspəʊkspɜːsn/',
        partOfSpeech: 'noun',
        meaning: 'An official person who speaks on behalf of an organization or city government',
        exampleSentence: 'The city spokesperson confirmed the new schedule yesterday.',
        translations: { hi: 'प्रवक्ता (स्पोक्सपर्सन)' },
      },
      {
        word: 'breaking news',
        ipa: '/ˌbreɪkɪŋ ˈnjuːz/',
        partOfSpeech: 'noun phrase',
        meaning: 'Newly received information about an important event that is currently happening',
        exampleSentence: 'Breaking news reports say that the city center is closed for a festival.',
        translations: { hi: 'ताज़ा समाचार (ब्रेकिंग न्यूज़)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'According to the news report...',
        functionCategory: 'Attributing information to a media source',
        exampleSentence: 'According to the news report, the new metro line starts next Monday.',
      },
      {
        phrase: 'Did you hear about...?',
        functionCategory: 'Introducing a current event in conversation',
        exampleSentence: 'Did you hear about the new solar energy project in our district?',
      },
      {
        phrase: 'The headline says that...',
        functionCategory: 'Mediating and paraphrasing news headlines',
        exampleSentence: 'The headline says that tickets are fifty percent cheaper this weekend.',
      },
      {
        phrase: 'The main point is that...',
        functionCategory: 'Summarizing key information',
        exampleSentence: 'The main point is that the station will open two weeks earlier than expected.',
      },
    ],
    grammar: {
      title: 'Tenses in News: Present Simple Headlines vs. Past Simple Details',
      conceptExplanation:
        '1. Headlines often use Present Simple for urgency: "Mayor Opens New Bridge."\n2. When explaining or discussing the news in conversation, we use Past Simple for the actual events: "The mayor opened the bridge yesterday."\n3. Source attribution uses reporting phrases: "According to the report..." or "The spokesperson said that..."',
      patternFormula: '[Headline: Present Simple] -> [Report details: Subject + Past Simple + Time Expression]',
      contrastExamples: [
        {
          incorrect: 'Headline say the train was crash yesterday.',
          correct: 'The headline says that the new train service started yesterday.',
          explanation: 'Use singular "says" for headline, and past tense "started" for past event.',
        },
        {
          incorrect: 'According of the news, the park opens last night.',
          correct: 'According to the news, the park opened last night.',
          explanation: '"According to" + past simple for completed event.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Liam',
        text: 'Did you see the front page this morning? The headline says "City Opens Green Metro Line".',
        translation: 'क्या आपने आज सुबह का पहला पन्ना देखा? सुर्ख़ी कहती है "शहर ने नई ग्रीन मेट्रो लाइन खोली"।',
      },
      {
        speaker: 'Learner',
        text: 'Yes, I read it! According to the news report, the city spokesperson opened the station yesterday morning.',
        translation: 'हाँ, मैंने इसे पढ़ा! समाचार रिपोर्ट के अनुसार, नगर प्रवक्ता ने कल सुबह स्टेशन का उद्घाटन किया।',
      },
      {
        speaker: 'Liam',
        text: 'That is great news! What does the article say about ticket prices?',
        translation: 'यह बहुत अच्छी खबर है! लेख में टिकट की कीमतों के बारे में क्या कहा गया है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_241_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "According ______ (to / of / at) the morning broadcast, the storm is over."',
      options: [
        { id: 'opt_1', text: 'to', isCorrect: true },
        { id: 'opt_2', text: 'of', isCorrect: false },
        { id: 'opt_3', text: 'at', isCorrect: false },
      ],
      correctAnswer: 'to',
      explanation: 'The fixed prepositional phrase is "According to".',
    },
    {
      id: 'cp_241_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly explains a news headline in simple English?',
      options: [
        { id: 'opt_1', text: 'The headline says that the city opened a new public library yesterday.', isCorrect: true },
        { id: 'opt_2', text: 'The headline is say city to open library yesterday.', isCorrect: false },
        { id: 'opt_3', text: 'According headline opened library yesterday is good.', isCorrect: false },
      ],
      correctAnswer: 'The headline says that the city opened a new public library yesterday.',
      explanation: '"The headline says that..." followed by a standard past simple clause.',
    },
    {
      id: 'cp_241_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [The spokesperson confirmed that / the new metro / started service yesterday]',
      correctAnswer: 'The spokesperson confirmed that the new metro started service yesterday',
      explanation: 'Subject + reporting verb + that-clause with past simple.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_241_1',
      prompt: 'Construct a sentence stating that according to the news report, the city opened the new central station.',
      scenarioContext: 'Sharing morning news with Liam.',
      targetStructure: 'According to the news report, the city opened the new central station.',
      wordBank: ['According to the', 'news report, the city', 'opened the new', 'central station yesterday.', 'headline'],
      acceptableSolutions: [
        'According to the news report, the city opened the new central station yesterday.',
        'According to the news report, the city opened the new central station.',
      ],
      explanation: 'Standard news attribution with "According to" and past simple.',
    },
    {
      id: 'sc_241_2',
      prompt: 'Construct a sentence explaining that the main point is that electric buses reduce city pollution.',
      scenarioContext: 'Summarizing an environmental news article.',
      targetStructure: 'The main point is that electric buses reduce city pollution.',
      wordBank: ['The main point is', 'that electric buses', 'reduce city pollution', 'significantly.', 'according of'],
      acceptableSolutions: [
        'The main point is that electric buses reduce city pollution significantly.',
        'The main point is that electric buses reduce city pollution.',
      ],
      explanation: 'Use "The main point is that..." followed by the factual summary clause.',
    },
  ],
  turns: [
    {
      id: 'turn_241_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning! I just picked up the local morning paper. Look at this front-page headline: "CITY LAUNCHES GREEN METRO TODAY". Did you hear about this breaking news?',
      partnerAudioText:
        'Good morning! I just picked up the local morning paper. Look at this front-page headline: "CITY LAUNCHES GREEN METRO TODAY". Did you hear about this breaking news?',
      partnerQuestionHindi:
        'शुभ प्रभात! मैंने अभी स्थानीय सुबह का अखबार लिया है। इस पहले पन्ने की सुर्ख़ी को देखिए: "CITY LAUNCHES GREEN METRO TODAY"। क्या आपने इस ताज़ा समाचार के बारे में सुना?',
      expectedFunction: 'Greeting Liam, confirming familiarity with the news, and stating the main topic using headline reporting chunks',
      contextGoal: 'Greet Liam, state that you saw the headline or heard the broadcast, and summarize what happened',
      targetVocabulary: ['Good morning Liam', 'headline', 'news report', 'broadcast', 'green metro', 'started'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Good morning, Liam! Yes, I heard the radio broadcast this morning. The headline says that the city opened the new green metro line to help commuters.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Liam! Yes, I read the breaking news online. According to the report, the city launched the new metro service today.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good morning! Yes, I saw that headline. The main point is that new eco-friendly metro trains start running today.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_confirmation',
          patterns: ['good morning', 'hello', 'hi', 'yes', 'heard', 'saw', 'read'],
          required: true,
        },
        {
          name: 'headline_topic_summary',
          patterns: ['metro', 'green metro', 'headline', 'broadcast', 'report', 'launched', 'opened', 'trains', 'service'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_241_1_according_of',
          pattern: /according of/i,
          errorType: 'grammar',
          message: 'Say "according to the news" instead of "according of".',
          correctionPattern: 'According to the news report, the city opened the metro.',
        },
      ],
      remediationPractice: {
        id: 'rem_241_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "According ______ (to) the news, the metro opened today."',
        options: [
          { id: 'r1', text: 'to', isCorrect: true },
          { id: 'r2', text: 'of', isCorrect: false },
        ],
        correctAnswer: 'to',
        explanation: 'The correct expression is "according to".',
      },
    },
    {
      id: 'turn_241_2',
      turnIndex: 2,
      partnerPrompt:
        'That is right! The article mentions quotes from city officials. What did the city spokesperson say about why this project is important?',
      partnerAudioText:
        'That is right! The article mentions quotes from city officials. What did the city spokesperson say about why this project is important?',
      partnerQuestionHindi:
        'यह सही है! लेख में शहर के अधिकारियों के बयानों का उल्लेख है। नगर प्रवक्ता ने क्यों कहा कि यह परियोजना महत्वपूर्ण है?',
      expectedFunction: 'Reporting what the spokesperson said using past reporting verbs and explaining benefits (reducing traffic / pollution)',
      contextGoal: 'Explain that the spokesperson stated the metro reduces traffic congestion and air pollution',
      targetVocabulary: ['spokesperson', 'said that', 'reduce pollution', 'traffic', 'convenient', 'commuters'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'The spokesperson said that the new metro will reduce traffic congestion and lower air pollution in the city center.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'According to the spokesperson, the trains run on solar power and help thousands of daily commuters travel faster.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'The city spokesperson explained that it makes public transit cleaner, cheaper, and more convenient for everyone.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'spokesperson_statement',
          patterns: ['spokesperson', 'said', 'explained', 'stated', 'according'],
          required: true,
        },
        {
          name: 'project_benefits',
          patterns: ['traffic', 'pollution', 'commuters', 'cleaner', 'faster', 'solar', 'transit', 'convenient'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_241_2_said_to',
          pattern: /spokesperson said to that/i,
          errorType: 'grammar',
          message: 'Use "The spokesperson said that..." without "to".',
          correctionPattern: 'The spokesperson said that the metro reduces traffic.',
        },
      ],
      remediationPractice: {
        id: 'rem_241_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly quotes the official?',
        options: [
          { id: 'r1', text: 'The spokesperson said that the metro will reduce pollution.', isCorrect: true },
          { id: 'r2', text: 'The spokesperson said to reducing pollution yesterday.', isCorrect: false },
        ],
        correctAnswer: 'The spokesperson said that the metro will reduce pollution.',
        explanation: '"Said that + clause" is the standard indirect speech structure.',
      },
    },
    {
      id: 'turn_241_3',
      turnIndex: 3,
      partnerPrompt:
        'A tourist colleague just walked in and asked what the excitement is about. Could you mediate and briefly summarize the headline and key facts for them in simple words?',
      partnerAudioText:
        'A tourist colleague just walked in and asked what the excitement is about. Could you mediate and briefly summarize the headline and key facts for them in simple words?',
      partnerQuestionHindi:
        'एक पर्यटक सहयोगी अभी अंदर आए और उन्होंने पूछा कि यह हलचल किस बारे में है। क्या आप उनके लिए सरल शब्दों में सुर्ख़ी और मुख्य तथ्यों का संक्षिप्त विवरण मध्यस्थता (mediate) कर सकते हैं?',
      expectedFunction: 'Mediating and synthesizing the news story into a clear 2-sentence summary for a newcomer',
      contextGoal: 'Explain the headline and key takeaway clearly: new clean metro opened today, makes travel easy and reduces traffic',
      targetVocabulary: ['The headline says', 'new metro opened', 'main point', 'easy to travel', 'city center'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello! The headline says the city opened a new green metro line today. The main point is that you can now travel quickly across town on clean electric trains.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi there! The news reports that a new metro service started this morning. It connects the airport directly to the city center and reduces traffic.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Welcome! Today’s breaking news is about the new eco-friendly metro. It is open now, so getting around the city is very easy and fast!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'mediation_greeting_summary',
          patterns: ['hello', 'hi', 'headline', 'news', 'metro', 'today', 'opened', 'started', 'main point'],
          required: true,
        },
        {
          name: 'practical_advice',
          patterns: ['travel', 'fast', 'quick', 'easy', 'trains', 'city center', 'airport', 'clean'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_241_3_unclear_mediation',
          pattern: /^train good\.$/i,
          errorType: 'structure',
          message: 'Provide a complete mediation summary: "The headline says the city opened a new metro line today, so travel is faster."',
          correctionPattern: 'The headline says that a new metro line opened today.',
        },
      ],
      remediationPractice: {
        id: 'rem_241_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [The headline says / that the new metro / started service today]',
        correctAnswer: 'The headline says that the new metro started service today',
        explanation: 'Formula for mediating headlines: "The headline says that...".',
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
