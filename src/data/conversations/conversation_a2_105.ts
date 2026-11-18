import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_105: ConversationDefinition = {
  id: 'conv_a2_105',
  title: 'Unit 7 Review & A2 Communication Mastery (Comprehensive Synthesis)',
  cefr: 'A2',
  unitId: 'unit_a2_7',
  lessonLinks: ['lesson_a2_7_105'],
  estimatedMinutes: 6,
  scenario:
    'You are in a milestone conversational check-in with international communication coach Dr. Alistair Finch at University College London. Showcase your mastery of A2 Unit 7: contrast your daily work habits with your current sprint project (Present Simple vs Continuous), recount a past travel incident with narrative connectors (First, Then, Suddenly, In the end), articulate a reasoned opinion with polite balance, and outline your future goals (be going to / will).',
  communicativeGoals: [
    'Synthesize daily routines (frequency adverbs) with temporary ongoing tasks (Present Continuous)',
    'Recount a vivid personal past narrative using chronological connectors and regular/irregular verbs',
    'State opinions, offer polite counter-arguments, and explain causes and results (because, so, as a result)',
    'Formulate future goals and predictions with varying certainty (will probably, might, am going to)',
  ],
  canDoStatements: [
    'Can communicate effectively and spontaneously across key A2 everyday and workplace scenarios (CEFR A2 Mastery)',
    'Can connect multi-sentence turns with rich transition markers and conversational repair strategies',
    'Can formulate opinions, tell stories, contrast habits with ongoing projects, and express future intentions',
  ],
  characters: [
    {
      id: 'char_alistair_finch',
      name: 'Dr. Alistair Finch',
      role: 'International Communication Coach',
      avatar: '🎓',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'mastery',
        ipa: '/ˈmɑːstəri/',
        partOfSpeech: 'noun',
        meaning: 'Comprehensive knowledge or skill in a subject or accomplishment',
        exampleSentence: 'You have demonstrated true communicative mastery throughout Unit 7.',
        translations: { hi: 'दक्षता / महारत' },
      },
      {
        word: 'spontaneity',
        ipa: '/ˌspɒntəˈneɪəti/',
        partOfSpeech: 'noun',
        meaning: 'The condition of being spontaneous; natural communication without hesitation',
        exampleSentence: 'Natural spontaneity makes conversations engaging and authentic.',
        translations: { hi: 'स्वाभाविकता / सहजता' },
      },
      {
        word: 'articulate',
        ipa: '/ɑːrˈtɪkjʊleɪt/',
        partOfSpeech: 'verb',
        meaning: 'Express (an idea or feeling) fluently and coherently',
        exampleSentence: 'You articulate your thoughts with clarity and confidence.',
        translations: { hi: 'स्पष्ट रूप से व्यक्त करना' },
      },
      {
        word: 'milestone',
        ipa: '/ˈmaɪlstoʊn/',
        partOfSpeech: 'noun',
        meaning: 'A significant stage or event in the development of something',
        exampleSentence: 'Completing Unit 7 is a major milestone in your English journey.',
        translations: { hi: 'मील का पत्थर / महत्वपूर्ण उपलब्धि' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I usually..., but currently I am...',
        functionCategory: 'Unit 7 Synthesis: Habit vs Ongoing',
        exampleSentence: 'I usually code backend APIs, but currently I am building interactive UI charts.',
      },
      {
        phrase: 'First..., but suddenly..., and in the end...',
        functionCategory: 'Unit 7 Synthesis: Narrative Sequencing',
        exampleSentence: 'First the weather was fine, but suddenly snow fell, and in the end we stayed safe.',
      },
      {
        phrase: 'In my opinion..., because..., so as a result...',
        functionCategory: 'Unit 7 Synthesis: Reasoning & Consequence',
        exampleSentence: 'In my opinion, balance is essential because fatigue hurts focus, so we need breaks.',
      },
      {
        phrase: 'Looking ahead, I am going to... and I will probably...',
        functionCategory: 'Unit 7 Synthesis: Future Intentions & Predictions',
        exampleSentence: 'Looking ahead, I am going to practice daily and I will probably reach B1 soon.',
      },
    ],
    grammar: {
      title: 'A2 Comprehensive Grammar & Discourse Integration',
      conceptExplanation:
        'Unit 7 integrates five core A2 pillars:\n1. Tenses: Present Simple (habits), Present Continuous (ongoing & arrangements), Past Simple (completed narratives), Future (going to / will).\n2. Modals: should (advice), must/have to (rules), don\'t have to (optional), allowed to (permission), might/may (probability).\n3. Quantifiers: much, many, some, any, a few, a little.\n4. Comparatives & Superlatives: warmer than, more comfortable than, the best.\n5. Discourse Linkers: first, then, suddenly, because, so, therefore, as a result, in my opinion, I see your point but.',
      patternFormula: 'Multi-turn Connected Discourse: [Intro/Opinion] + [Cause/Result] + [Narrative/Future]',
      contrastExamples: [
        {
          incorrect: 'I usually coding and yesterday I didn\'t went.',
          correct: 'I usually code, and yesterday I didn\'t go.',
          explanation: 'Maintain consistent base verb rules across compound turns.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Dr. Alistair Finch',
        text: 'Welcome Alex! Let us reflect on your communication journey in Unit 7. How would you summarize your daily work and your current key project?',
        translation: 'स्वागत है एलेक्स! आइए यूनिट 7 में आपकी संचार यात्रा पर विचार करें। आप अपने दैनिक कार्य और अपने वर्तमान प्रमुख प्रोजेक्ट को कैसे संक्षेप में प्रस्तुत करेंगे?',
      },
      {
        speaker: 'You',
        text: 'Hello Dr. Finch! I usually start my mornings by reviewing code and rarely skip breaks. Currently, I am developing an interactive accessibility module, which I find very rewarding!',
        translation: 'नमस्ते डॉ. फिंच! मैं आमतौर पर अपनी सुबह की शुरुआत कोड की समीक्षा करके करता हूँ और शायद ही कभी ब्रेक छोड़ता हूँ। वर्तमान में, मैं एक इंटरैक्टिव एक्सेसिबिलिटी मॉड्यूल विकसित कर रहा हूँ, जो मुझे बहुत फलदायी लगता है!',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_105_1',
      type: 'multiple_choice',
      prompt: 'Which sentence demonstrates flawless A2 contrast between habitual routine and ongoing project?',
      options: [
        { id: 'opt_1', text: 'I usually monitor server logs, but this week I am building a mobile dashboard.', isCorrect: true },
        { id: 'opt_2', text: 'I am usually monitor server logs, but this week I build dashboard.', isCorrect: false },
        { id: 'opt_3', text: 'I usually monitoring logs and now I am build.', isCorrect: false },
      ],
      correctAnswer: 'I usually monitor server logs, but this week I am building a mobile dashboard.',
      explanation: 'Present simple "monitor" for habit + Present continuous "am building" for current temporary sprint.',
    },
    {
      id: 'cp_a2_105_2',
      type: 'multiple_choice',
      prompt: 'Which sentence connects cause and result without double-stacking errors?',
      options: [
        { id: 'opt_1', text: 'Because we automated testing, the QA team finished on schedule.', isCorrect: true },
        { id: 'opt_2', text: 'Because we automated testing, so the QA team finished on schedule.', isCorrect: false },
        { id: 'opt_3', text: 'Since we automated testing, so therefore QA finished.', isCorrect: false },
      ],
      correctAnswer: 'Because we automated testing, the QA team finished on schedule.',
      explanation: 'Avoid redundant connectors like "Because... so".',
    },
    {
      id: 'cp_a2_105_3',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly formulates a future intention and probability prediction?',
      options: [
        { id: 'opt_1', text: 'I am going to study advanced vocabulary, and I will probably take the exam in June.', isCorrect: true },
        { id: 'opt_2', text: 'I will going to study, and I probably will take exam.', isCorrect: false },
        { id: 'opt_3', text: 'I am study vocabulary and it will probably raining.', isCorrect: false },
      ],
      correctAnswer: 'I am going to study advanced vocabulary, and I will probably take the exam in June.',
      explanation: '"Am going to" for intention + "will probably" for realistic prediction.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_105_1',
      scenarioContext: 'Summarize your routine and current project in a connected sentence.',
      prompt: 'Build: "I usually manage databases but currently I am designing UI."',
      targetStructure: 'Subject + usually + verb + but + currently + subject + be + verb-ing',
      wordBank: ['I', 'usually', 'manage', 'databases', 'but', 'currently', 'am', 'designing', 'UI', 'design', 'managing'],
      acceptableSolutions: [
        'I usually manage databases but currently I am designing UI',
        'I usually manage databases, but currently I am designing UI.',
      ],
      explanation: 'Seamless contrast between habitual role and active project.',
    },
    {
      id: 'sc_a2_105_2',
      scenarioContext: 'Express a reasoned opinion on continuous learning.',
      prompt: 'Build: "In my opinion daily practice is the key to fluency."',
      targetStructure: 'Prepositional phrase + subject + be + noun phrase',
      wordBank: ['In', 'my', 'opinion', 'daily', 'practice', 'is', 'the', 'key', 'to', 'fluency', 'am', 'practicing'],
      acceptableSolutions: [
        'In my opinion daily practice is the key to fluency',
        'In my opinion, daily practice is the key to fluency.',
      ],
      explanation: 'States opinion clearly with high-level A2 vocabulary.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_105_1',
      turnIndex: 1,
      partnerPrompt:
        'Good day Alex! It is wonderful to meet for our Unit 7 Communication Review. Let us start with your professional life: How do you balance your regular daily habits with the temporary special projects you are currently building this month?',
      partnerAudioText:
        'Good day Alex! It is wonderful to meet for our Unit 7 Communication Review. Let us start with your professional life: How do you balance your regular daily habits with the temporary special projects you are currently building this month?',
      partnerQuestionHindi:
        'शुभ दिन एलेक्स! हमारी यूनिट 7 संचार समीक्षा के लिए मिलना अद्भुत है। आइए आपके पेशेवर जीवन से शुरुआत करें: आप अपनी नियमित दैनिक आदतों को इस महीने बनाए जा रहे अस्थायी विशेष प्रोजेक्ट्स के साथ कैसे संतुलित करते हैं?',
      expectedFunction: 'Contrast Daily Habits (Present Simple) with Current Project (Present Continuous)',
      contextGoal:
        'Explain that you usually start work at 8:30 AM, take regular breaks, and maintain backend servers; but currently this month, you are developing an interactive AI component and collaborating closely with designers.',
      targetVocabulary: ['I usually start my day at 8:30 AM', 'rarely skip lunch breaks', 'currently I am developing an interactive component', 'collaborating with designers'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'Good day Dr. Finch! I usually start work around 8:30 AM and rarely skip my hourly stretch breaks. Normally, I maintain backend database servers, but currently this month, I am developing an interactive mobile dashboard and collaborating closely with our UX design team.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Habit & Frequency (Present Simple / usually / rarely)',
          patterns: ['usually', 'normally', 'start', 'breaks', 'rarely', 'maintain', 'servers', 'routine'],
          required: true,
        },
        {
          name: 'Current Ongoing Activity (Present Continuous / currently)',
          patterns: ['currently', 'this month', 'am developing', 'am building', 'am collaborating', 'dashboard', 'ux', 'interactive'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_105_1',
        type: 'multiple_choice',
        prompt: 'Which sentence accurately contrasts a habit with a temporary project?',
        options: [
          { id: 'opt_1', text: 'I usually write tests, but currently I am refactoring the server.', isCorrect: true },
          { id: 'opt_2', text: 'I am usually write tests, but now I refactor.', isCorrect: false },
          { id: 'opt_3', text: 'I usually writing tests currently.', isCorrect: false },
        ],
        correctAnswer: 'I usually write tests, but currently I am refactoring the server.',
        explanation: 'Habit (Present Simple) vs Ongoing (Present Continuous).',
      },
    },
    {
      id: 'turn_a2_105_2',
      turnIndex: 2,
      partnerPrompt:
        'Superb articulation of your routine! Now let us test your storytelling narrative skills: Can you recount a short anecdote about an unexpected situation during a past journey, using connectors like first, suddenly, and finally?',
      partnerAudioText:
        'Superb articulation of your routine! Now let us test your storytelling narrative skills: Can you recount a short anecdote about an unexpected situation during a past journey, using connectors like first, suddenly, and finally?',
      partnerQuestionHindi:
        'आपकी दिनचर्या की शानदार अभिव्यक्ति! अब आइए आपके कहानी सुनाने के कौशल का परीक्षण करें: क्या आप पिछली यात्रा के दौरान किसी अप्रत्याशित स्थिति के बारे में first, suddenly, और finally जैसे कनेक्टर्स का उपयोग करके एक छोटा किस्सा सुना सकते हैं?',
      expectedFunction: 'Narrate Personal Anecdote with Narrative Connectors (First, Suddenly, Finally)',
      contextGoal:
        'Recount a travel story: first the hike was sunny, but suddenly a thunderstorm arrived; you found shelter in an old barn, and finally the sun returned and you walked back safely.',
      targetVocabulary: ['first the weather was clear and sunny', 'suddenly a thunderstorm rolled in', 'we took shelter in a local cottage', 'finally we reached home safely'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'Certainly! Last summer, I was hiking in the Peak District. First, the morning was warm and sunny. But suddenly, dark storm clouds appeared and heavy rain started falling! We took shelter in a cozy stone barn, and finally, the sun broke through so we reached the village safely.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Narrative Connectors (First, Suddenly, Finally / In the end)',
          patterns: ['first', 'suddenly', 'finally', 'in the end', 'then', 'after that'],
          required: true,
        },
        {
          name: 'Past Actions & Resolution',
          patterns: ['hiking', 'rain', 'storm', 'clouds', 'shelter', 'barn', 'village', 'safely', 'reached', 'arrived'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_105_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "First we felt lost, but ___ we found the path."',
        options: [
          { id: 'opt_1', text: 'finally', isCorrect: true },
          { id: 'opt_2', text: 'firstly', isCorrect: false },
          { id: 'opt_3', text: 'always', isCorrect: false },
        ],
        correctAnswer: 'finally',
        explanation: '"Finally" closes a chronological narrative.',
      },
    },
    {
      id: 'turn_a2_105_3',
      turnIndex: 3,
      partnerPrompt:
        'A vivid and well-paced story! Next: In professional discussions, giving balanced opinions is vital. Some people argue that artificial intelligence will eliminate all software jobs in five years. What is your reasoned perspective?',
      partnerAudioText:
        'A vivid and well-paced story! Next: In professional discussions, giving balanced opinions is vital. Some people argue that artificial intelligence will eliminate all software jobs in five years. What is your reasoned perspective?',
      partnerQuestionHindi:
        'एक जीवंत और अच्छी गति वाली कहानी! अगला: व्यावसायिक चर्चाओं में, संतुलित राय देना महत्वपूर्ण है। कुछ लोगों का तर्क है कि कृत्रिम बुद्धिमत्ता पांच वर्षों में सभी सॉफ्टवेयर नौकरियों को समाप्त कर देगी। आपका तर्कसंगत दृष्टिकोण क्या है?',
      expectedFunction: 'Express Nuanced Opinion, Disagreement & Cause-Result Reasoning',
      contextGoal:
        'Express your opinion: you see why people are anxious, but you disagree that jobs will vanish; in your opinion, AI will automate repetitive tasks, so developers will focus on creative problem-solving and architecture.',
      targetVocabulary: ['in my opinion AI will not eliminate developer jobs', 'I see why people worry, but on the other hand', 'AI will automate repetitive boilerplate code', 'as a result engineers can focus on creative architecture'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'In my opinion, AI will definitely not eliminate software jobs. I see what people mean because automated tools are advancing fast; however, AI will mostly handle repetitive boilerplate code. As a result, software engineers will focus more on creative problem-solving, human ethics, and high-level architecture.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Opinion & Diplomatic Nuance (In my opinion / I see what you mean but)',
          patterns: ['in my opinion', 'from my perspective', 'i see what', 'i think', 'however', 'on the other hand', 'believe'],
          required: true,
        },
        {
          name: 'Reasoning & Consequence (because / so / as a result)',
          patterns: ['as a result', 'because', 'so', 'boilerplate', 'repetitive', 'creative', 'architecture', 'problem-solving', 'engineers'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_105_3',
        type: 'multiple_choice',
        prompt: 'Which statement provides a well-balanced professional opinion?',
        options: [
          { id: 'opt_1', text: 'In my view, AI will assist developers rather than replace them.', isCorrect: true },
          { id: 'opt_2', text: 'AI is bad I am disagree 100%.', isCorrect: false },
          { id: 'opt_3', text: 'Computers do everything now goodbye.', isCorrect: false },
        ],
        correctAnswer: 'In my view, AI will assist developers rather than replace them.',
        explanation: 'Balanced, articulate, and professional discourse.',
      },
    },
    {
      id: 'turn_a2_105_4',
      turnIndex: 4,
      partnerPrompt:
        'Remarkable depth of thought and grammatical precision Alex! To conclude our Unit 7 Review: What are your personal learning intentions and future goals as you look ahead toward B1-level communication?',
      partnerAudioText:
        'Remarkable depth of thought and grammatical precision Alex! To conclude our Unit 7 Review: What are your personal learning intentions and future goals as you look ahead toward B1-level communication?',
      partnerQuestionHindi:
        'विचारों की उल्लेखनीय गहराई और व्याकरण संबंधी सटीकता एलेक्स! हमारी यूनिट 7 समीक्षा को समाप्त करने के लिए: जब आप B1-स्तरीय संचार की ओर आगे देखते हैं तो आपके व्यक्तिगत सीखने के इरादे और भविष्य के लक्ष्य क्या हैं?',
      expectedFunction: 'Formulate Future Intentions (be going to) & Predictions (will probably)',
      contextGoal:
        'Explain that you are going to practice speaking daily, read English technical articles, and you will probably achieve B1 fluency within the next few months; thank Dr. Finch for his mentorship.',
      targetVocabulary: ['I am going to practice conversational English daily', 'I will probably achieve B1 fluency soon', 'I am going to read more technical literature', 'thank you Dr. Finch for your inspiring coaching'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'Looking ahead, I am going to practice spoken conversations daily and read English technical journals. With consistent practice, I will probably attain B1 fluency within the next three months! Thank you so much Dr. Finch for your inspiring guidance and mentorship throughout Unit 7!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Future Intention (be going to)',
          patterns: ['going to practice', 'going to read', 'going to study', 'going to continue', 'daily', 'b1'],
          required: true,
        },
        {
          name: 'Prediction & Appreciation (will probably / thank you)',
          patterns: ['will probably', 'probably attain', 'probably achieve', 'thank you', 'dr finch', 'mentorship', 'guidance'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_105_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I am ___ to continue practicing every day."',
        options: [
          { id: 'opt_1', text: 'going', isCorrect: true },
          { id: 'opt_2', text: 'will', isCorrect: false },
          { id: 'opt_3', text: 'go', isCorrect: false },
        ],
        correctAnswer: 'going',
        explanation: '"Be going to + base verb" forms future intentions.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 75,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 70,
  },
};
