import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_171: ConversationDefinition = {
  id: 'conv_a2_171',
  title: 'Data Storytelling, Trend Reporting & Performance Analysis',
  cefr: 'A2',
  unitId: 'unit_a2_12',
  lessonLinks: ['lesson_a2_12_171'],
  estimatedMinutes: 5,
  scenario:
    'You are in the executive boardroom at Horizon Analytics in Edinburgh presenting the Q3 performance metrics to Senior Data Director Daniel Ross. You will interpret key charts showing quarterly revenue, customer acquisition costs, and churn rates. You need to contrast trends using comparative modifiers ("rose significantly faster than", "substantially higher than", "slightly lower than"), narrate temporal shifts using while/whereas, and deliver actionable data-driven insights.',
  communicativeGoals: [
    'Present quantitative business metrics and data trends accurately in English',
    'Use comparative intensifiers and modifiers ("significantly higher", "considerably faster", "slightly lower") to describe magnitude',
    'Contrast concurrent metrics using "while" and "whereas" ("While user retention increased by 14%, customer acquisition costs dropped")',
    'Explain root causes behind performance fluctuations and recommend strategic actions',
  ],
  canDoStatements: [
    'Can describe business charts, graph movements, and metric changes clearly in English',
    'Can use intensifiers with comparative adjectives to explain the degree of change in data',
    'Can draw meaningful business conclusions from performance data',
  ],
  characters: [
    {
      id: 'char_daniel_ross',
      name: 'Daniel Ross',
      role: 'Senior Data Analytics Director',
      avatar: '📈',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'surge',
        ipa: '/sɜːdʒ/',
        partOfSpeech: 'noun',
        meaning: 'A sudden powerful forward or upward movement',
        exampleSentence: 'We witnessed a noticeable surge in mobile app subscriptions in July.',
        translations: { hi: 'तेजी से उछाल / तीव्र वृद्धि' },
      },
      {
        word: 'fluctuation',
        ipa: '/ˌflʌktʃuˈeɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'An irregular rising and falling in number or amount; a variation',
        exampleSentence: 'Despite seasonal fluctuations, overall annual revenue remained stable.',
        translations: { hi: 'उतार-चढ़ाव' },
      },
      {
        word: 'significantly',
        ipa: '/sɪɡˈnɪfɪkəntli/',
        partOfSpeech: 'adverb',
        meaning: 'In a sufficiently great or important way as to be worthy of attention',
        exampleSentence: 'Conversion rates grew significantly faster after the website redesign.',
        translations: { hi: 'काफी हद तक / उल्लेखनीय रूप से' },
      },
      {
        word: 'retention',
        ipa: '/rɪˈtenʃn/',
        partOfSpeech: 'noun',
        meaning: 'The continued use, existence, or possession of something or someone',
        exampleSentence: 'Customer retention improved by twelve percent this quarter.',
        translations: { hi: 'प्रतिधारण / ग्राहकों का बने रहना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Q3 revenue rose significantly higher than our initial baseline forecast.',
        functionCategory: 'Describing Growth with Comparative Intensifiers',
        exampleSentence: 'Sales grew substantially faster this year.',
      },
      {
        phrase: 'While user sign-ups surged by twenty percent, churn remained slightly lower than last year.',
        functionCategory: 'Contrasting Metrics with "While / Whereas"',
        exampleSentence: 'While costs increased, profits doubled.',
      },
      {
        phrase: 'This sharp increase was primarily driven by our automated onboarding sequence.',
        functionCategory: 'Explaining Root Causes for Data Shifts',
        exampleSentence: 'The drop was caused by maintenance downtime.',
      },
      {
        phrase: 'Looking ahead to Q4, we project a steady upward trajectory in recurring subscriptions.',
        functionCategory: 'Forecasting Future Trajectory',
        exampleSentence: 'We expect a gradual rise in December.',
      },
    ],
    grammar: {
      title: 'Comparative Intensifiers & Contrastive Conjunctions (While / Whereas)',
      conceptExplanation:
        '1. Comparative Intensifiers: Modify comparatives to indicate degree:\n   - Big difference: "significantly / substantially / considerably / far + Comparative" (e.g., "significantly higher", "far more effective").\n   - Small difference: "slightly / marginally / a bit + Comparative" (e.g., "slightly lower", "marginally better").\n2. "While" & "Whereas": Join two contrasting data trends happening concurrently:\n   - "While organic traffic surged by 30%, paid conversions dropped slightly."\n3. Prepositions of Change: "increased by [15%]", "rose from [$10k] to [$25k]".',
      patternFormula: '[Modifier: significantly / slightly] + Comparative + than | While + Trend A, Trend B',
      contrastExamples: [
        {
          incorrect: 'Revenue was more high very much than Q2 and traffic went up while costs went down same time.',
          correct: 'Revenue was significantly higher than in Q2, while operational costs remained slightly lower.',
          explanation: 'Use "significantly higher" (not *more high very much*) and "while" to contrast simultaneous trends.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Daniel Ross',
        text: 'Welcome, everyone. Let\'s examine the Q3 analytics dashboard. What are the key takeaways regarding revenue and customer acquisition?',
        translation: 'सभी का स्वागत है। आइए Q3 एनालिटिक्स डैशबोर्ड की जांच करें। राजस्व और ग्राहक अधिग्रहण के संबंध में मुख्य निष्कर्ष क्या हैं?',
      },
      {
        speaker: 'You',
        text: 'Good morning, Daniel. Q3 revenue was significantly higher than our forecast, while customer acquisition costs dropped by eighteen percent.',
        translation: 'शुभ प्रभात, डैनियल। Q3 का राजस्व हमारे पूर्वानुमान से काफी अधिक था, जबकि ग्राहक अधिग्रहण लागत में अठारह प्रतिशत की गिरावट आई।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_171_1',
      type: 'fill_blank',
      prompt: 'Complete the data sentence: "Organic search traffic was ___ (significantly higher / much more high) than social referrals."',
      options: [
        { id: 'opt_1', text: 'significantly higher', isCorrect: true },
        { id: 'opt_2', text: 'much more high', isCorrect: false },
        { id: 'opt_3', text: 'significant high', isCorrect: false },
      ],
      correctAnswer: 'significantly higher',
      explanation: 'Use intensifier "significantly" with comparative adjective "higher".',
    },
    {
      id: 'cp_a2_171_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "while" to contrast two simultaneous metrics?',
      options: [
        { id: 'opt_1', text: 'While customer subscriptions rose by fifteen percent, churn rate dropped slightly.', isCorrect: true },
        { id: 'opt_2', text: 'While customer subscriptions rose, and churn rate dropped.', isCorrect: false },
        { id: 'opt_3', text: 'Customer subscriptions rose while but churn dropped.', isCorrect: false },
      ],
      correctAnswer: 'While customer subscriptions rose by fifteen percent, churn rate dropped slightly.',
      explanation: '"While + Clause A, Clause B" contrasts two concurrent facts cleanly.',
    },
    {
      id: 'cp_a2_171_3',
      type: 'multiple_choice',
      prompt: 'Which phrase explains a small data difference accurately?',
      options: [
        { id: 'opt_1', text: 'Average session duration was slightly lower than in August.', isCorrect: true },
        { id: 'opt_2', text: 'Average session duration was a little bit more low.', isCorrect: false },
        { id: 'opt_3', text: 'Average session duration was slightly lowest.', isCorrect: false },
      ],
      correctAnswer: 'Average session duration was slightly lower than in August.',
      explanation: '"slightly + lower" expresses a minor comparative difference.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_171_1',
      scenarioContext: 'Compare revenue growth using an intensifier.',
      prompt: 'Build: "Quarterly revenue was significantly higher than our forecast."',
      targetStructure: 'Quarterly revenue was significantly higher than our forecast',
      wordBank: ['Quarterly', 'revenue', 'was', 'significantly', 'higher', 'than', 'our', 'forecast', 'more', 'high'],
      acceptableSolutions: [
        'Quarterly revenue was significantly higher than our forecast.',
      ],
      explanation: '"significantly higher than" modifier pattern.',
    },
    {
      id: 'sc_a2_171_2',
      scenarioContext: 'Contrast two metrics using "while".',
      prompt: 'Build: "While retention increased churn dropped by five percent."',
      targetStructure: 'While retention increased churn dropped by five percent',
      wordBank: ['While', 'retention', 'increased', 'churn', 'dropped', 'by', 'five', 'percent', 'whereas', 'dropping'],
      acceptableSolutions: [
        'While retention increased, churn dropped by five percent.',
        'While retention increased churn dropped by five percent.',
      ],
      explanation: 'Contrastive clause with "while".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_171_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning! Let\'s delve into the Q3 performance deck. Looking at Slide 3, what were the primary macro trends in revenue and user sign-ups over the last quarter?',
      partnerAudioText:
        'Good morning! Let\'s delve into the Q3 performance deck. Looking at Slide 3, what were the primary macro trends in revenue and user sign-ups over the last quarter?',
      partnerQuestionHindi:
        'शुभ प्रभात! आइए Q3 प्रदर्शन डेक में तल्लीन हों। स्लाइड 3 को देखते हुए, पिछली तिमाही में राजस्व और उपयोगकर्ता साइन-अप में प्राथमिक मैक्रो रुझान क्या थे?',
      expectedFunction: 'Present Macro Trends using Comparative Intensifiers ("significantly higher", "surged by")',
      contextGoal:
        'Explain that Q3 revenue was significantly higher than projected, and user sign-ups surged by 24%.',
      targetVocabulary: ['revenue was significantly higher than projected', 'sign-ups surged by twenty-four percent', 'steady upward trend'],
      suggestedResponses: [
        {
          label: 'Highlight Revenue & Sign-up Growth',
          text: 'Good morning, Daniel. As shown on Slide 3, Q3 revenue was significantly higher than our initial target, while user sign-ups surged by twenty-four percent.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Comparative Overview',
          text: 'Looking at the quarterly metrics, total gross income grew considerably faster than expected, and new customer registrations increased substantially.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Revenue / Growth (revenue / target / forecast / income / gross / sign-ups / registrations)',
          patterns: ['revenue', 'target', 'forecast', 'income', 'gross', 'sign-ups', 'registrations'],
          required: true,
        },
        {
          name: 'Comparative Intensifiers (significantly higher / considerably faster / surged by / increased substantially / twenty-four percent)',
          patterns: ['significantly higher', 'considerably faster', 'surged by', 'increased substantially', 'twenty-four percent', 'higher than'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_intensifier_grammar',
          pattern: 'was more higher than|was very higher than',
          errorType: 'grammar',
          message: 'Do not use "more higher" or "very higher". Use "significantly higher" or "much higher".',
          correctionPattern: 'Q3 revenue was significantly higher than projected',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_171_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Profits were ___ (substantially higher / more high) in September."',
        options: [
          { id: 'opt_1', text: 'substantially higher', isCorrect: true },
          { id: 'opt_2', text: 'more high', isCorrect: false },
          { id: 'opt_3', text: 'substantially high', isCorrect: false },
        ],
        correctAnswer: 'substantially higher',
        explanation: '"substantially higher" is correct.',
      },
    },
    {
      id: 'turn_a2_171_2',
      turnIndex: 2,
      partnerPrompt:
        'That is impressive top-line growth. However, looking at the cost breakdown on Slide 5, what happened with customer acquisition costs and retention?',
      partnerAudioText:
        'That is impressive top-line growth. However, looking at the cost breakdown on Slide 5, what happened with customer acquisition costs and retention?',
      partnerQuestionHindi:
        'यह प्रभावशाली शीर्ष-स्तरीय वृद्धि है। हालाँकि, स्लाइड 5 पर लागत विश्लेषण को देखते हुए, ग्राहक अधिग्रहण लागत और प्रतिधारण के साथ क्या हुआ?',
      expectedFunction: 'Contrast Simultaneous Metrics using "While / Whereas" and Explain Root Cause',
      contextGoal:
        'Explain that while acquisition costs dropped by 15%, customer retention rose due to the automated onboarding tour.',
      targetVocabulary: ['while acquisition costs dropped by fifteen percent', 'retention improved noticeably', 'driven by the onboarding sequence'],
      suggestedResponses: [
        {
          label: 'Contrast with "While" & State Cause',
          text: 'While customer acquisition costs dropped by fifteen percent, 90-day retention improved noticeably. This positive shift was driven primarily by our new onboarding sequence.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Contrast with "Whereas"',
          text: 'Our marketing expenditure decreased slightly, whereas user loyalty rose to an all-time high of eighty-eight percent following the app update.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Contrastive Linker (while / whereas / although)',
          patterns: ['while', 'whereas', 'although'],
          required: true,
        },
        {
          name: 'Cost & Retention (acquisition costs / dropped / decreased / retention / loyalty / onboarding / percent)',
          patterns: ['acquisition costs', 'dropped', 'decreased', 'retention', 'loyalty', 'onboarding', 'percent', 'costs'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_while_but_double',
          pattern: 'while costs dropped but retention rose',
          errorType: 'grammar',
          message: 'Do not combine "while" with "but" in the same sentence: "While acquisition costs dropped, retention rose."',
          correctionPattern: 'While acquisition costs dropped, retention rose',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_171_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly avoids double conjunctions with "while"?',
        options: [
          { id: 'opt_1', text: 'While advertising costs dropped, conversions increased.', isCorrect: true },
          { id: 'opt_2', text: 'While advertising costs dropped, but conversions increased.', isCorrect: false },
          { id: 'opt_3', text: 'While advertising costs dropped, and yet conversions increased.', isCorrect: false },
        ],
        correctAnswer: 'While advertising costs dropped, conversions increased.',
        explanation: '"While" introduces the subordinate clause without needing "but".',
      },
    },
    {
      id: 'turn_a2_171_3',
      turnIndex: 3,
      partnerPrompt:
        'What strategic recommendations or Q4 projections can we conclude from these findings to present to the board?',
      partnerAudioText:
        'What strategic recommendations or Q4 projections can we conclude from these findings to present to the board?',
      partnerQuestionHindi:
        'बोर्ड को प्रस्तुत करने के लिए हम इन निष्कर्षों से क्या रणनीतिक सिफारिशें या Q4 अनुमान निकाल सकते हैं?',
      expectedFunction: 'Present Strategic Recommendations and Project Future Trajectory',
      contextGoal:
        'Recommend doubling down on organic onboarding and project a further 10% rise in Q4 recurring revenue.',
      targetVocabulary: ['recommend scaling our onboarding automation', 'project a steady ten percent increase', 'maximize lifetime value'],
      suggestedResponses: [
        {
          label: 'Data-Driven Recommendation & Q4 Projection',
          text: 'We recommend scaling our automated onboarding to international markets. Based on current trends, we project a steady ten percent increase in recurring revenue for Q4.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Strategic Investment Advice',
          text: 'The data indicates we should reallocate budget from paid ads into product-led growth, which will ensure substantially higher profit margins next quarter.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Recommendation (recommend / should / reallocate / invest / scale / focus)',
          patterns: ['recommend', 'should', 'reallocate', 'invest', 'scale', 'focus', 'suggest'],
          required: true,
        },
        {
          name: 'Q4 Projection / Growth (q4 / project / increase / recurring revenue / profit / next quarter / margins)',
          patterns: ['q4', 'project', 'increase', 'recurring revenue', 'profit', 'next quarter', 'margins', 'growth'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_171_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We project a ___ (ten percent increase / ten percent of increase) in Q4."',
        options: [
          { id: 'opt_1', text: 'ten percent increase', isCorrect: true },
          { id: 'opt_2', text: 'ten percent of increase', isCorrect: false },
          { id: 'opt_3', text: 'increase of ten percentage', isCorrect: false },
        ],
        correctAnswer: 'ten percent increase',
        explanation: '"a [number] percent increase" is standard business phrasing.',
      },
    },
    {
      id: 'turn_a2_171_4',
      turnIndex: 4,
      partnerPrompt:
        'This is a compelling, evidence-backed narrative. The board will appreciate the clear data insights and practical recommendations. Outstanding presentation!',
      partnerAudioText:
        'This is a compelling, evidence-backed narrative. The board will appreciate the clear data insights and practical recommendations. Outstanding presentation!',
      partnerQuestionHindi:
        'यह एक सम्मोहक, साक्ष्य-समर्थित विवरण है। बोर्ड स्पष्ट डेटा अंतर्दृष्टि और व्यावहारिक सिफारिशों की सराहना करेगा। उत्कृष्ट प्रस्तुति!',
      expectedFunction: 'Acknowledge Feedback, Offer Follow-up Dashboard Access & Conclude Meeting',
      contextGoal:
        'Thank Daniel, offer to share the interactive BI dashboard link, and conclude the meeting.',
      targetVocabulary: ['thank you Daniel', 'share the interactive dashboard link', 'look forward to the board meeting'],
      suggestedResponses: [
        {
          label: 'Professional Close & Dashboard Share',
          text: 'Thank you very much, Daniel. I will email the interactive dashboard link and full data appendix to all board members before noon.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Acknowledge & Sign-Off',
          text: 'I appreciate the positive feedback. I look forward to supporting you during tomorrow’s board presentation. Have a great day!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Respect (thank you / thanks / appreciate / daniel / positive feedback)',
          patterns: ['thank you', 'thanks', 'appreciate', 'daniel', 'feedback', 'great'],
          required: true,
        },
        {
          name: 'Dashboard / Next Action (dashboard / email / link / appendix / board / tomorrow / noon)',
          patterns: ['dashboard', 'email', 'link', 'appendix', 'board', 'tomorrow', 'noon', 'presentation'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_171_4',
        type: 'multiple_choice',
        prompt: 'Which statement is best for closing a data presentation to leadership?',
        options: [
          { id: 'opt_1', text: 'Thank you, Daniel. I will share the interactive dashboard link with the board.', isCorrect: true },
          { id: 'opt_2', text: 'I am finished now you talk to board.', isCorrect: false },
          { id: 'opt_3', text: 'Numbers are done bye.', isCorrect: false },
        ],
        correctAnswer: 'Thank you, Daniel. I will share the interactive dashboard link with the board.',
        explanation: 'Polite and provides direct access to the referenced business analytics.',
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
