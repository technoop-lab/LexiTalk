import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_178: ConversationDefinition = {
  id: 'conv_a2_178',
  title: 'Strategic Planning, Multi-Year Roadmap & Scalability Architecture',
  cefr: 'A2',
  unitId: 'unit_a2_12',
  lessonLinks: ['lesson_a2_12_178'],
  estimatedMinutes: 5,
  scenario:
    'You are in the strategic executive suite at Quantum Infrastructure in London presenting the 3-year technological roadmap to Chief Technology Officer Dr. Arthur Vance. You need to outline future architecture transitions, formulate long-term milestones using the Future Perfect and Future Continuous ("By 2028, we will have transitioned to microservices", "During Phase 2, our infrastructure will be handling ten million concurrent queries"), evaluate technical trade-offs, and defend your scalability investments.',
  communicativeGoals: [
    'Present a structured, multi-phase technology roadmap to senior executive leadership',
    'Use the Future Perfect ("will have completed", "will have migrated") to project milestones completed before specific future deadlines',
    'Use the Future Continuous ("will be operating", "will be processing") to describe future operating states in progress',
    'Evaluate architectural trade-offs, scalability risks, and mitigation strategies',
  ],
  canDoStatements: [
    'Can present a long-term project roadmap and explain multi-phase milestones in English',
    'Can use the Future Perfect to state accomplishments that will be finished by a future date',
    'Can discuss scalability, system capacity, and technical trade-offs with confidence',
  ],
  characters: [
    {
      id: 'char_arthur_vance',
      name: 'Dr. Arthur Vance',
      role: 'Chief Technology Officer',
      avatar: '🏛️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'scalability',
        ipa: '/ˌskeɪləˈbɪləti/',
        partOfSpeech: 'noun',
        meaning: 'The capacity to be changed in size or scale; ability of a system to handle growing amounts of work',
        exampleSentence: 'Our primary design objective is horizontal scalability across global edge networks.',
        translations: { hi: 'स्केलेबिलिटी / क्षमता विस्तार योग्यता' },
      },
      {
        word: 'roadmap',
        ipa: '/ˈrəʊdmæp/',
        partOfSpeech: 'noun',
        meaning: 'A plan or strategy intended to achieve a particular goal over time',
        exampleSentence: 'The three-year technology roadmap outlines our transition to serverless computing.',
        translations: { hi: 'रणनीतिक रूपरेखा / रोडमैप' },
      },
      {
        word: 'infrastructure',
        ipa: '/ˈɪnfrəstrʌktʃə(r)/',
        partOfSpeech: 'noun',
        meaning: 'The basic physical and organizational structures and facilities needed for the operation of an enterprise',
        exampleSentence: 'Modernizing our cloud infrastructure will reduce query latency by half.',
        translations: { hi: 'बुनियादी ढांचा / इन्फ्रास्ट्रक्चर' },
      },
      {
        word: 'throughput',
        ipa: '/ˈθruːpʊt/',
        partOfSpeech: 'noun',
        meaning: 'The amount of material or data that passes through a system or process',
        exampleSentence: 'Our distributed database achieves a peak throughput of fifty thousand transactions per second.',
        translations: { hi: 'थ्रूपुट / डेटा प्रवाह क्षमता' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'By the end of 2028, we will have migrated all legacy systems to microservices.',
        functionCategory: 'Stating Completed Milestones with Future Perfect ("will have migrated")',
        exampleSentence: 'By Q4, we will have finalized the architecture audit.',
      },
      {
        phrase: 'During Phase 2, our distributed cluster will be processing over ten million daily requests.',
        functionCategory: 'Describing Ongoing State with Future Continuous',
        exampleSentence: 'Next year, our team will be developing automated failovers.',
      },
      {
        phrase: 'This phased rollout minimizes service disruption while maximizing infrastructure resilience.',
        functionCategory: 'Justifying Architectural Strategy & Risk Mitigation',
        exampleSentence: 'This approach balances cost and performance.',
      },
      {
        phrase: 'We project a fourfold increase in transaction capacity by the end of Year Two.',
        functionCategory: 'Projecting Capacity and Scale Expansion',
        exampleSentence: 'We expect a threefold growth in active users.',
      },
    ],
    grammar: {
      title: 'Contrasting Future Perfect (Completion by a Date) & Future Continuous (Ongoing Future State)',
      conceptExplanation:
        '1. Future Perfect: "Subject + will have + Past Participle". Used with time markers like "by [Year/Month]", "by the time...", to express an action that will be completed before a specified point in the future:\n   - "By December 2028, we will have completed the cloud overhaul."\n2. Future Continuous: "Subject + will be + Verb-ing". Describes an action that will be ongoing or in progress during a future period:\n   - "Throughout 2029, our system will be supporting twenty regional hubs."\n3. Preposition "By" vs "In": "By 2028" (at or before 2028), "In 2028" (during 2028).',
      patternFormula: 'By [Future Date], Subject + will have + [Past Participle] | During [Phase/Year], Subject + will be + [Verb-ing]',
      contrastExamples: [
        {
          incorrect: 'By 2028 we will finish the database and during 2029 we will process data.',
          correct: 'By 2028, we will have finished the database migration, and during 2029, we will be processing live data globally.',
          explanation: 'Use Future Perfect ("will have finished") for actions completed by a date and Future Continuous ("will be processing") for ongoing future operations.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Dr. Arthur Vance',
        text: 'Good morning. Welcome to our strategic technology briefing. How does your three-year roadmap prepare our infrastructure for a tenfold increase in transaction volume?',
        translation: 'शुभ प्रभात। हमारी रणनीतिक प्रौद्योगिकी ब्रीफिंग में आपका स्वागत है। आपका तीन साल का रोडमैप लेनदेन की मात्रा में दस गुना वृद्धि के लिए हमारे बुनियादी ढांचे को कैसे तैयार करता है?',
      },
      {
        speaker: 'You',
        text: 'Good morning, Dr. Vance. By Q4 of Year One, we will have decomposed our monolith into microservices, and throughout Year Two, our cluster will be auto-scaling across three cloud regions.',
        translation: 'शुभ प्रभात, डॉ. वेंस। पहले वर्ष के Q4 तक, हम अपने मोनोलिथ को माइक्रोसर्विसेज में विघटित कर चुके होंगे, और पूरे वर्ष दो के दौरान, हमारा क्लस्टर तीन क्लाउड क्षेत्रों में ऑटो-स्केलिंग कर रहा होगा।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_178_1',
      type: 'fill_blank',
      prompt: 'Complete the roadmap milestone: "By the end of next year, our engineering department ___ (will have deployed / will deploy) thirty microservices."',
      options: [
        { id: 'opt_1', text: 'will have deployed', isCorrect: true },
        { id: 'opt_2', text: 'will deploy', isCorrect: false },
        { id: 'opt_3', text: 'will have deploy', isCorrect: false },
      ],
      correctAnswer: 'will have deployed',
      explanation: 'Future Perfect formula: "By [date]... will have + past participle (deployed)".',
    },
    {
      id: 'cp_a2_178_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes an ongoing future operational state?',
      options: [
        { id: 'opt_1', text: 'Throughout Phase 2, our telemetry pipeline will be processing fifty thousand events per second.', isCorrect: true },
        { id: 'opt_2', text: 'Throughout Phase 2, our telemetry pipeline will processed events.', isCorrect: false },
        { id: 'opt_3', text: 'Throughout Phase 2, telemetry will have process events.', isCorrect: false },
      ],
      correctAnswer: 'Throughout Phase 2, our telemetry pipeline will be processing fifty thousand events per second.',
      explanation: 'Future Continuous: "will be processing".',
    },
    {
      id: 'cp_a2_178_3',
      type: 'multiple_choice',
      prompt: 'Which statement accurately contrasts Future Perfect with Future Continuous in a strategic briefing?',
      options: [
        { id: 'opt_1', text: 'By 2028, we will have retired our legacy databases, and we will be operating fully on cloud-native infrastructure.', isCorrect: true },
        { id: 'opt_2', text: 'By 2028, we will retiring databases and we have operated.', isCorrect: false },
        { id: 'opt_3', text: 'By 2028, we retire databases and operating.', isCorrect: false },
      ],
      correctAnswer: 'By 2028, we will have retired our legacy databases, and we will be operating fully on cloud-native infrastructure.',
      explanation: 'Accurate pairing of completed milestone ("will have retired") and ongoing state ("will be operating").',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_178_1',
      scenarioContext: 'State a completed future milestone using Future Perfect.',
      prompt: 'Build: "By 2028 we will have completed the cloud migration."',
      targetStructure: 'By 2028 we will have completed the cloud migration',
      wordBank: ['By', '2028', 'we', 'will', 'have', 'completed', 'the', 'cloud', 'migration', 'completing', 'did'],
      acceptableSolutions: [
        'By 2028 we will have completed the cloud migration.',
        'By 2028, we will have completed the cloud migration.',
      ],
      explanation: 'Future Perfect structure with "will have completed".',
    },
    {
      id: 'sc_a2_178_2',
      scenarioContext: 'Describe an ongoing future state with Future Continuous.',
      prompt: 'Build: "Throughout Phase 2 our cluster will be processing live telemetry."',
      targetStructure: 'Throughout Phase 2 our cluster will be processing live telemetry',
      wordBank: ['Throughout', 'Phase', '2', 'our', 'cluster', 'will', 'be', 'processing', 'live', 'telemetry', 'processed', 'have'],
      acceptableSolutions: [
        'Throughout Phase 2 our cluster will be processing live telemetry.',
        'Throughout Phase 2, our cluster will be processing live telemetry.',
      ],
      explanation: 'Future Continuous structure with "will be processing".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_178_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning. Thank you for presenting our 3-year technology architecture roadmap. As we prepare for exponential user growth across international markets, what major infrastructure milestones will your team have achieved by the end of Year One?',
      partnerAudioText:
        'Good morning. Thank you for presenting our 3-year technology architecture roadmap. As we prepare for exponential user growth across international markets, what major infrastructure milestones will your team have achieved by the end of Year One?',
      partnerQuestionHindi:
        'शुभ प्रभात। हमारे 3-वर्षीय प्रौद्योगिकी आर्किटेक्चर रोडमैप को प्रस्तुत करने के लिए धन्यवाद। जैसे-जैसे हम अंतरराष्ट्रीय बाजारों में घातीय उपयोगकर्ता वृद्धि की तैयारी करते हैं, आपकी टीम वर्ष एक के अंत तक कौन से प्रमुख बुनियादी ढांचा मील के पत्थर हासिल कर चुकी होगी?',
      expectedFunction: 'State Year One Milestones using Future Perfect ("will have migrated", "will have established")',
      contextGoal:
        'Explain that by the end of Year One, you will have completed the microservices decomposition and will have migrated core user data.',
      targetVocabulary: ['By the end of Year One, we will have completed', 'will have migrated our core database', 'decomposed into microservices'],
      suggestedResponses: [
        {
          label: 'Year One Milestones (Future Perfect)',
          text: 'Good morning, Dr. Vance. By the end of Year One, we will have decomposed our monolithic backend into autonomous microservices, and we will have migrated all core customer data to a globally distributed database.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Structured Milestone Breakdown',
          text: 'By Q4 of Year One, our team will have established multi-region cloud redundancy and will have automated our continuous deployment pipelines, cutting release cycles from weeks to minutes.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Future Perfect Milestones (will have completed / will have decomposed / will have migrated / will have established / by the end of year one / by q4)',
          patterns: ['will have completed', 'will have decomposed', 'will have migrated', 'will have established', 'by the end of', 'by q4', 'year one'],
          required: true,
        },
        {
          name: 'Architecture Terms (microservices / monolithic / database / redundancy / multi-region / distributed / pipelines)',
          patterns: ['microservices', 'monolithic', 'database', 'redundancy', 'multi-region', 'distributed', 'pipelines', 'backend'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_future_perfect_verb_form',
          pattern: 'will have complete by year one|will have migrate all data',
          errorType: 'grammar',
          message: 'The Future Perfect requires the past participle: "will have completed", "will have migrated".',
          correctionPattern: 'By the end of Year One, we will have completed the migration',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_178_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "By December, we ___ (will have built / will have build) the automated pipeline."',
        options: [
          { id: 'opt_1', text: 'will have built', isCorrect: true },
          { id: 'opt_2', text: 'will have build', isCorrect: false },
          { id: 'opt_3', text: 'will building', isCorrect: false },
        ],
        correctAnswer: 'will have built',
        explanation: 'Future Perfect: "will have + past participle (built)".',
      },
    },
    {
      id: 'turn_a2_178_2',
      turnIndex: 2,
      partnerPrompt:
        'That establishes a resilient foundation. Looking further ahead to Years Two and Three: how will our systems be operating in real-time under high concurrency loads?',
      partnerAudioText:
        'That establishes a resilient foundation. Looking further ahead to Years Two and Three: how will our systems be operating in real-time under high concurrency loads?',
      partnerQuestionHindi:
        'यह एक लचीली नींव स्थापित करता है। वर्ष दो और तीन को आगे देखते हुए: उच्च समवर्ती भार के तहत हमारे सिस्टम वास्तविक समय में कैसे काम कर रहे होंगे?',
      expectedFunction: 'Describe Future Operational States using Future Continuous ("will be processing", "will be operating")',
      contextGoal:
        'Explain that throughout Years Two and Three, the platform will be handling 20 million daily queries with sub-50ms latency.',
      targetVocabulary: ['Throughout Phase 2, our platform will be processing', 'will be operating across multiple edge nodes', 'sub-fifty millisecond latency'],
      suggestedResponses: [
        {
          label: 'Future Continuous Operational Capacity',
          text: 'Throughout Years Two and Three, our platform will be processing over twenty million real-time transactions daily, while our edge caching network will be serving global requests with sub-fifty millisecond latency.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Autonomous Scalability in Action',
          text: 'During Phase 2, our infrastructure will be dynamically auto-scaling based on predictive machine learning models, ensuring zero downtime even during massive peak demand spikes.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Future Continuous (will be processing / will be serving / will be operating / will be dynamically auto-scaling / throughout years)',
          patterns: ['will be processing', 'will be serving', 'will be operating', 'will be dynamically', 'will be auto-scaling', 'throughout', 'during phase 2'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_178_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes future ongoing operations?',
        options: [
          { id: 'opt_1', text: 'During Year Two, our platform will be processing millions of queries daily.', isCorrect: true },
          { id: 'opt_2', text: 'During Year Two, platform will processed queries.', isCorrect: false },
          { id: 'opt_3', text: 'During Year Two, our platform will processing.', isCorrect: false },
        ],
        correctAnswer: 'During Year Two, our platform will be processing millions of queries daily.',
        explanation: 'Future Continuous: "will be processing".',
      },
    },
    {
      id: 'turn_a2_178_3',
      turnIndex: 3,
      partnerPrompt:
        'What architectural trade-offs did you evaluate when choosing a multi-cloud strategy over a single dedicated cloud vendor?',
      partnerAudioText:
        'What architectural trade-offs did you evaluate when choosing a multi-cloud strategy over a single dedicated cloud vendor?',
      partnerQuestionHindi:
        'एकल समर्पित क्लाउड विक्रेता के बजाय मल्टी-क्लाउड रणनीति चुनते समय आपने किन आर्किटेक्चरल ट्रेड-ऑफ का मूल्यांकन किया?',
      expectedFunction: 'Weigh Architectural Trade-offs & Defend Multi-Cloud Resilience',
      contextGoal:
        'Explain that although multi-cloud increases configuration complexity, it eliminates vendor lock-in and guarantees 99.99% business continuity.',
      targetVocabulary: ['While multi-cloud introduces initial complexity', 'eliminates vendor lock-in', 'guarantees high availability'],
      suggestedResponses: [
        {
          label: 'Weigh Trade-offs & Defend Resilience',
          text: 'While a multi-cloud architecture introduces slight configuration complexity, it completely eliminates vendor lock-in and guarantees 99.99% uptime if any single provider experiences an outage.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Strategic Trade-off Analysis',
          text: 'We evaluated cost against resilience: although single-cloud deployment is slightly simpler, multi-cloud distributes regulatory compliance risk across European and North American data jurisdictions.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Trade-off Linker & Analysis (while / although / trade-off / complexity / evaluated / eliminates)',
          patterns: ['while', 'although', 'trade-off', 'complexity', 'evaluated', 'eliminates', 'whereas'],
          required: true,
        },
        {
          name: 'Resilience / Vendor Lock-in (vendor lock-in / 99.99% / uptime / resilience / outage / multi-cloud / compliance)',
          patterns: ['vendor lock-in', '99.99%', 'uptime', 'resilience', 'outage', 'multi-cloud', 'compliance', 'redundancy'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_178_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Although multi-cloud is complex, it ___ (eliminates / will eliminates) vendor lock-in."',
        options: [
          { id: 'opt_1', text: 'eliminates', isCorrect: true },
          { id: 'opt_2', text: 'will eliminates', isCorrect: false },
          { id: 'opt_3', text: 'eliminating', isCorrect: false },
        ],
        correctAnswer: 'eliminates',
        explanation: 'Present Simple in the factual consequence clause.',
      },
    },
    {
      id: 'turn_a2_178_4',
      turnIndex: 4,
      partnerPrompt:
        'This is a forward-thinking, technically rigorous roadmap. You have balanced visionary scalability with pragmatic risk management. I will formally recommend full budget approval to the board. Excellent presentation!',
      partnerAudioText:
        'This is a forward-thinking, technically rigorous roadmap. You have balanced visionary scalability with pragmatic risk management. I will formally recommend full budget approval to the board. Excellent presentation!',
      partnerQuestionHindi:
        'यह एक दूरदर्शी, तकनीकी रूप से कठोर रोडमैप है। आपने व्यावहारिक जोखिम प्रबंधन के साथ दूरदर्शी स्केलेबिलिटी को संतुलित किया है। मैं औपचारिक रूप से बोर्ड को पूर्ण बजट अनुमोदन की सिफारिश करूँगा। उत्कृष्ट प्रस्तुति!',
      expectedFunction: 'Express Gratitude, Confirm Phase 1 Kickoff & Conclude Strategic Briefing',
      contextGoal:
        'Thank Dr. Vance for his leadership endorsement and confirm that Phase 1 architectural workshops will commence on Monday.',
      targetVocabulary: ['thank you Dr. Vance', 'commence Phase 1 architecture workshops on Monday', 'look forward to executing the roadmap'],
      suggestedResponses: [
        {
          label: 'Professional Strategic Sign-Off',
          text: 'Thank you very much, Dr. Vance. I appreciate your strategic endorsement. We will initiate our Phase 1 architectural workshops on Monday morning and look forward to executing this vision!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Executive Close',
          text: 'Thank you for your trust and guidance. We are excited to build a resilient, scalable foundation for the company. Have a wonderful afternoon!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Respect (thank you / thanks / dr. vance / vance / appreciate / endorsement / guidance)',
          patterns: ['thank you', 'thanks', 'dr. vance', 'vance', 'appreciate', 'endorsement', 'guidance', 'trust'],
          required: true,
        },
        {
          name: 'Next Steps & Execution (phase 1 / workshops / monday / executing / vision / roadmap / foundation)',
          patterns: ['phase 1', 'workshops', 'monday', 'executing', 'vision', 'roadmap', 'foundation', 'afternoon'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_178_4',
        type: 'multiple_choice',
        prompt: 'Which closing sentence is most appropriate for ending an executive roadmap briefing?',
        options: [
          { id: 'opt_1', text: 'Thank you, Dr. Vance. We will commence Phase 1 workshops on Monday.', isCorrect: true },
          { id: 'opt_2', text: 'Roadmap done you pay money now.', isCorrect: false },
          { id: 'opt_3', text: 'Goodbye Arthur see you later.', isCorrect: false },
        ],
        correctAnswer: 'Thank you, Dr. Vance. We will commence Phase 1 workshops on Monday.',
        explanation: 'Polite, respectful of executive rank, and establishes immediate operational next steps.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 2,
    targetVocabularyCoveragePct: 60,
  },
};
