import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_236: ConversationDefinition = {
  id: 'conv_a2_236',
  title: 'Media, News & Critical Information Evaluation',
  cefr: 'A2',
  unitId: 'unit_a2_16',
  lessonLinks: ['lesson_a2_16_236'],
  estimatedMinutes: 5,
  scenario:
    'You meet your colleague Raj in the office media library while browsing online news portals. You discuss how news is consumed across digital platforms, evaluate sensational headlines versus credible journalism, practice reported speech, and share strategies for cross-checking factual sources.',
  communicativeGoals: [
    'Use reported speech ("The article reported that...", "Journalists stated that...") to summarize news stories',
    'Evaluate media credibility using distinguishing adjectives ("credible", "biased", "verified", "sensational")',
    'Express cautious skepticism and media literacy strategies using "it is important to verify..."',
    'Engage in a critical discussion about digital journalism and misinformation in A2 English',
  ],
  canDoStatements: [
    'Can report news stories and summarize articles using reported speech',
    'Can discuss the reliability of media sources and online headlines',
    'Can express opinions on misinformation and describe fact-checking methods',
  ],
  characters: [
    {
      id: 'char_raj_researcher',
      name: 'Raj',
      role: 'Media Analyst & Research Colleague',
      avatar: '📰',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'credible',
        ipa: '/ˈkredəbl/',
        partOfSpeech: 'adjective',
        meaning: 'Able to be believed; convincing and supported by verified evidence',
        exampleSentence: 'Always seek information from credible news outlets with established editorial standards.',
        translations: { hi: 'विश्वसनीय / प्रामाणिक (क्रेडिबल)' },
      },
      {
        word: 'sensational',
        ipa: '/senˈseɪʃənl/',
        partOfSpeech: 'adjective',
        meaning: 'Presenting information in a way that causes excitement or shock at the expense of accuracy',
        exampleSentence: 'Sensational headlines often exaggerate facts to attract online clicks.',
        translations: { hi: 'सनसनीखेज / बढ़ा-चढ़ा कर पेश किया गया (सेंसेशनल)' },
      },
      {
        word: 'verify',
        ipa: '/ˈverɪfaɪ/',
        partOfSpeech: 'verb',
        meaning: 'To make sure or demonstrate that something is true, accurate, or justified',
        exampleSentence: 'Responsible journalists verify facts across multiple primary sources before publication.',
        translations: { hi: 'सत्यापित करना / पुष्टि करना (वेरीफाई)' },
      },
      {
        word: 'misinformation',
        ipa: '/ˌmɪsɪnfəˈmeɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'False or inaccurate information, especially that which is spread unintentionally',
        exampleSentence: 'Fact-checking tools help combat the rapid spread of digital misinformation.',
        translations: { hi: 'गलत सूचना / भ्रामक जानकारी (मिसइन्फॉर्मेशन)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'The article stated that renewable energy costs have plummeted.',
        functionCategory: 'Using reported speech to summarize news',
        exampleSentence: 'The news anchor reported that severe rainstorms were approaching.',
      },
      {
        phrase: 'It is essential to cross-check claims with verified sources.',
        functionCategory: 'Expressing media evaluation strategies',
        exampleSentence: 'I always look for peer-reviewed citations before believing a claim.',
      },
      {
        phrase: 'Sensational headlines can be misleading.',
        functionCategory: 'Critiquing online media formats',
        exampleSentence: 'Clickbait titles often distort the real statistical findings.',
      },
      {
        phrase: 'How do you usually determine whether an online story is trustworthy?',
        functionCategory: 'Inquiring about evaluation methods',
        exampleSentence: 'What fact-checking websites do you recommend for daily news?',
      },
    ],
    grammar: {
      title: 'Reported Speech for News & Evaluation Modals',
      conceptExplanation:
        '1. Basic Reported Speech: Shift present tenses back one step in past reporting contexts ("The reporter said that the summit was a success").\n2. Reporting Verbs: "stated that", "reported that", "claimed that", "announced that".\n3. Objective evaluation structure: "It is crucial / important + to + Base Verb" ("It is essential to verify sources").',
      patternFormula: '[Source] + stated / reported / announced that + [Past Tense Clause] / It is + [Adjective] + to + [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'The news said that the weather is bad yesterday.',
          correct: 'The news reported that the weather was bad yesterday.',
          explanation: 'Tense backshift: "is" becomes "was" in reported speech.',
        },
        {
          incorrect: 'It is important verify news.',
          correct: 'It is important to verify news.',
          explanation: '"It is + adjective" requires "to + base verb".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Raj',
        text: 'Did you see that shocking headline about the transit shutdown on social media this morning?',
        translation: 'क्या आपने आज सुबह सोशल मीडिया पर ट्रांजिट शटडाउन के बारे में वह चौंकाने वाली हेडलाइन देखी?',
      },
      {
        speaker: 'Learner',
        text: 'Hello Raj! Yes, but it looked very sensational. The official transport department reported that services were operating normally with minor delays.',
        translation: 'नमस्ते राज! हाँ, लेकिन यह बहुत सनसनीखेज लग रहा था। आधिकारिक परिवहन विभाग ने बताया कि मामूली देरी के साथ सेवाएं सामान्य रूप से चल रही थीं।',
      },
      {
        speaker: 'Raj',
        text: 'Well done! It is always vital to verify sensational posts against credible primary sources.',
        translation: 'बहुत बढ़िया! सनसनीखेज पोस्टों को विश्वसनीय प्राथमिक स्रोतों से सत्यापित करना हमेशा महत्वपूर्ण होता है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_236_1',
      type: 'fill_blank',
      prompt: 'Complete with the reported verb: "The mayor announced that the new bridge ______ (was / is) officially open."',
      options: [
        { id: 'opt_1', text: 'was', isCorrect: true },
        { id: 'opt_2', text: 'is', isCorrect: false },
        { id: 'opt_3', text: 'being', isCorrect: false },
      ],
      correctAnswer: 'was',
      explanation: 'Reported speech with past reporting verb "announced" shifts present "is" to past "was".',
    },
    {
      id: 'cp_236_2',
      type: 'multiple_choice',
      prompt: 'Which sentence best describes responsible fact-checking?',
      options: [
        { id: 'opt_1', text: 'It is essential to verify sensational claims across multiple credible sources.', isCorrect: true },
        { id: 'opt_2', text: 'It is essential verify sensational claims quick.', isCorrect: false },
        { id: 'opt_3', text: 'To verify sensational claims are essential without checking.', isCorrect: false },
      ],
      correctAnswer: 'It is essential to verify sensational claims across multiple credible sources.',
      explanation: '"It is essential to + base verb" with accurate vocabulary.',
    },
    {
      id: 'cp_236_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [The newspaper reported that / community volunteers / had planted / five hundred trees]',
      correctAnswer: 'The newspaper reported that community volunteers had planted five hundred trees',
      explanation: 'Reported speech structure with reporting verb + that-clause.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_236_1',
      prompt: 'Construct a sentence stating that the scientific journal reported that solar energy efficiency increased.',
      scenarioContext: 'Relaying news findings to Raj.',
      targetStructure: 'The credible report stated that solar energy efficiency increased dramatically last year.',
      wordBank: ['The credible report stated', 'that solar energy efficiency', 'increased dramatically last year,', 'Raj.'],
      acceptableSolutions: [
        'The credible report stated that solar energy efficiency increased dramatically last year.',
        'The report stated that solar energy efficiency increased last year.',
      ],
      explanation: 'Reported speech with "stated that + past simple".',
    },
    {
      id: 'sc_236_2',
      prompt: 'Construct a sentence stating that it is essential to verify sensational online headlines before sharing them.',
      scenarioContext: 'Discussing media literacy.',
      targetStructure: 'It is essential to verify sensational headlines before sharing them with others.',
      wordBank: ['It is essential to', 'verify sensational headlines before', 'sharing them with others,', 'Raj.'],
      acceptableSolutions: [
        'It is essential to verify sensational headlines before sharing them with others.',
        'It is crucial to verify news before sharing it.',
      ],
      explanation: '"It is essential to + base verb" formula.',
    },
  ],
  turns: [
    {
      id: 'turn_236_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! I’m reviewing today’s news digest in the media lounge. There are so many conflicting reports and dramatic headlines online today. What news topics have you been following lately?',
      partnerAudioText:
        'Hi there! I’m reviewing today’s news digest in the media lounge. There are so many conflicting reports and dramatic headlines online today. What news topics have you been following lately?',
      partnerQuestionHindi:
        'नमस्ते! मैं मीडिया लाउंज में आज के समाचार डाइजेस्ट की समीक्षा कर रहा हूँ। आज ऑनलाइन कई परस्पर विरोधी रिपोर्ट और नाटकीय सुर्खियाँ हैं। आप हाल ही में किन समाचार विषयों पर नज़र रख रहे हैं?',
      expectedFunction: 'Greeting Raj and reporting a recent news story using reported speech ("stated that", "reported that")',
      contextGoal: 'Greet Raj, mention a recent environmental or tech news item, and use reported speech ("The article reported that...")',
      targetVocabulary: ['Hi Raj', 'reported that', 'credible news', 'environmental developments', 'stated that'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hi Raj! I’ve been following renewable energy news. A credible journal reported that clean energy installations had increased by thirty percent this year.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Raj! I was reading about urban transport. The local news stated that new electric bus routes would start operating next month.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good morning, Raj! I follow science and environmental reporting. An article announced that wetland restoration efforts were showing great progress.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_raj',
          patterns: ['hi', 'hello', 'raj', 'good morning'],
          required: true,
        },
        {
          name: 'reported_news',
          patterns: ['reported that', 'stated that', 'announced that', 'credible', 'energy', 'transport', 'news', 'article'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_236_1_reported_is',
          pattern: /reported that clean energy is increase/i,
          errorType: 'grammar',
          message: 'Use past tense in reported speech: "reported that clean energy had increased."',
          correctionPattern: 'The report stated that energy efficiency had improved.',
        },
      ],
      remediationPractice: {
        id: 'rem_236_1',
        type: 'fill_blank',
        prompt: 'Fill in: "The journalist reported that prices ______ (had fallen)."',
        options: [
          { id: 'r1', text: 'had fallen', isCorrect: true },
          { id: 'r2', text: 'fall down to', isCorrect: false },
        ],
        correctAnswer: 'had fallen',
        explanation: 'Past perfect in reported speech.',
      },
    },
    {
      id: 'turn_236_2',
      turnIndex: 2,
      partnerPrompt:
        'That’s an encouraging development! But with so much misinformation circulating on social networks, how do you distinguish between credible journalism and sensational clickbait?',
      partnerAudioText:
        'That’s an encouraging development! But with so much misinformation circulating on social networks, how do you distinguish between credible journalism and sensational clickbait?',
      partnerQuestionHindi:
        'यह एक उत्साहजनक विकास है! लेकिन सोशल नेटवर्क पर इतनी गलत जानकारी प्रसारित होने के साथ, आप विश्वसनीय पत्रकारिता और सनसनीखेज क्लिकबेट के बीच कैसे अंतर करते हैं?',
      expectedFunction: 'Explaining strategies for verifying news and identifying bias or sensationalism',
      contextGoal: 'Explain checking author credentials, cross-referencing multiple sources, and looking for verified evidence',
      targetVocabulary: ['credible', 'sensational', 'verify', 'misinformation', 'cross-check', 'verified sources'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I avoid sensational headlines and always look for verified sources. It is essential to cross-check facts across established, independent news outlets before believing or sharing any story.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'When a headline seems exaggerated, I check if credible journalists have covered the same event with official citations and data.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I rely on reputable news agencies and fact-checking platforms. Verifying claims prevents the spread of digital misinformation.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'media_literacy_strategies',
          patterns: ['verify', 'credible', 'sensational', 'cross-check', 'sources', 'misinformation', 'essential to', 'facts'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_236_2_essential_verb',
          pattern: /it is essential verify/i,
          errorType: 'grammar',
          message: 'Include "to": "It is essential to verify facts."',
          correctionPattern: 'It is essential to verify sources carefully.',
        },
      ],
      remediationPractice: {
        id: 'rem_236_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes media verification?',
        options: [
          { id: 'r1', text: 'It is essential to cross-check information across credible news sources.', isCorrect: true },
          { id: 'r2', text: 'It is essential cross-checking information credible source.', isCorrect: false },
        ],
        correctAnswer: 'It is essential to cross-check information across credible news sources.',
        explanation: '"It is essential to + base verb" is grammatically accurate.',
      },
    },
    {
      id: 'turn_236_3',
      turnIndex: 3,
      partnerPrompt:
        'Cross-referencing is definitely the gold standard! Our department is hosting a 30-minute webinar on digital media literacy this Friday at 2:00 PM. Would you be interested in joining the online session?',
      partnerAudioText:
        'Cross-referencing is definitely the gold standard! Our department is hosting a 30-minute webinar on digital media literacy this Friday at 2:00 PM. Would you be interested in joining the online session?',
      partnerQuestionHindi:
        'क्रॉस-रेफरेंसिंग निश्चित रूप से सबसे अच्छा तरीका है! हमारा विभाग इस शुक्रवार दोपहर 2:00 बजे डिजिटल मीडिया साक्षरता पर 30 मिनट का वेबिनार आयोजित कर रहा है। क्या आप ऑनलाइन सत्र में शामिल होने में रुचि रखते हैं?',
      expectedFunction: 'Accepting the webinar invitation, confirming Friday at 2:00 PM, and thanking Raj',
      contextGoal: 'Accept the invite for Friday at 2 PM, express interest in media literacy, and thank Raj',
      targetVocabulary: ['Friday at 2:00 PM', 'webinar', 'media literacy', 'Thank you Raj', 'look forward to'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I would love to attend the media literacy webinar this Friday at 2:00 PM! Thank you for the invitation, Raj. I look forward to participating.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Count me in for Friday at two o’clock! Learning more about media verification tools will be extremely useful. Thanks, Raj!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Thank you, Raj! That sounds very practical. Please send me the meeting link, and I’ll see you online on Friday at 2:00 PM.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'webinar_acceptance',
          patterns: ['friday', '2:00', '2 pm', 'webinar', 'media literacy', 'thank you', 'raj', 'look forward to'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_236_3_short_reply',
          pattern: /^ok i join friday$/i,
          errorType: 'interaction',
          message: 'Provide a complete, polite response: "I would love to join the webinar this Friday at 2:00 PM, Raj!"',
          correctionPattern: 'Thank you, Raj! I would love to attend the webinar on Friday at 2:00 PM.',
        },
      ],
      remediationPractice: {
        id: 'rem_236_3',
        type: 'fill_blank',
        prompt: 'Fill in: "I look forward to ______ (attending) the webinar."',
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
