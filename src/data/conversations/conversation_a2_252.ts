import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_252: ConversationDefinition = {
  id: 'conv_a2_252',
  title: 'Comparing Sources & Identifying Important Information',
  cefr: 'A2',
  unitId: 'unit_a2_17',
  lessonLinks: ['lesson_a2_17_252'],
  estimatedMinutes: 5,
  scenario:
    'You are in a digital literacy workshop with instructor Liam comparing two online news reports about a new city solar park project. You analyze the key facts, cross-check figures, distinguish verified data from promotional claims, and mediate an objective factual summary for study partners.',
  communicativeGoals: [
    'Compare two information sources or articles and identify discrepancies in numbers and dates in A2 English',
    'Use source-comparison chunks: "according to Source A...", "whereas Source B mentions...", "the key difference is..."',
    'Evaluate source credibility and verify factual claims using simple criteria',
    'Synthesize and mediate verified facts into a concise summary',
  ],
  canDoStatements: [
    'Can compare two short texts on the same topic and identify similarities and differences in basic facts',
    'Can identify the most important information, dates, and numbers across different sources',
    'Can give a simple factual summary combining verified points from two sources',
  ],
  characters: [
    {
      id: 'char_liam_media_instructor',
      name: 'Liam',
      role: 'Information Literacy Instructor',
      avatar: '🔍',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'source',
        ipa: '/sɔːs/',
        partOfSpeech: 'noun',
        meaning: 'A place, person, or document that provides information or evidence',
        exampleSentence: 'Always check if your news source is reputable and independent.',
        translations: { hi: 'स्रोत (सोर्स)' },
      },
      {
        word: 'cross-check',
        ipa: '/ˈkrɒs tʃek/',
        partOfSpeech: 'verb',
        meaning: 'To verify information by comparing it with another independent source',
        exampleSentence: 'We should cross-check the project budget numbers with the official council report.',
        translations: { hi: 'पुष्टि करना / मिलान करना (क्रॉस-चेक)' },
      },
      {
        word: 'discrepancy',
        ipa: '/dɪˈskrepənsi/',
        partOfSpeech: 'noun',
        meaning: 'An illogical or unexpected difference between two amounts, facts, or reports',
        exampleSentence: 'There is a slight discrepancy between the two completion dates.',
        translations: { hi: 'विसंगति / अंतर (डिस्क्रेपेंसी)' },
      },
      {
        word: 'verified',
        ipa: '/ˈverɪfaɪd/',
        partOfSpeech: 'adjective',
        meaning: 'Confirmed or proved to be true, accurate, or genuine by reliable evidence',
        exampleSentence: 'Only use verified data from the official municipality release.',
        translations: { hi: 'सत्यापित (वेरिफाइड)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'According to the first source...',
        functionCategory: 'Attributing facts to initial source',
        exampleSentence: 'According to the first source, the solar farm will power ten thousand homes.',
      },
      {
        phrase: 'In contrast, the second article states that...',
        functionCategory: 'Introducing contrasting data from alternate source',
        exampleSentence: 'In contrast, the second article states that it will power twelve thousand homes.',
      },
      {
        phrase: 'The key difference between the two reports is...',
        functionCategory: 'Highlighting factual discrepancies',
        exampleSentence: 'The key difference between the two reports is the project completion deadline.',
      },
      {
        phrase: 'To summarize the verified facts...',
        functionCategory: 'Synthesizing verified common points',
        exampleSentence: 'To summarize the verified facts, construction starts in June and will create local green jobs.',
      },
    ],
    grammar: {
      title: 'Comparing Information: Contrast Conjunctions (Whereas / In contrast) & Reporting Verbs',
      conceptExplanation:
        '1. Comparing data points: "Source A reports X, whereas Source B claims Y."\n2. Sentence starters for contrast: "In contrast, the government website states..."\n3. Reporting verbs in present simple: "states, mentions, reports, clarifies."',
      patternFormula: 'Source A states [Fact 1], whereas Source B reports [Fact 2]. The verified consensus is [Fact 3].',
      contrastExamples: [
        {
          incorrect: 'Source A say ten thousand whereas Source B saying twelve thousand.',
          correct: 'Source A says ten thousand, whereas Source B reports twelve thousand.',
          explanation: 'Use 3rd person singular present: "Source A says... Source B reports...".',
        },
        {
          incorrect: 'In contrast of the second report...',
          correct: 'In contrast, the second report states that...',
          explanation: '"In contrast" is followed by a comma, not "of".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Liam',
        text: 'Welcome class! We have two news articles on the new city solar farm project. How do the reports compare?',
        translation: 'कक्षा में स्वागत है! हमारे पास नए शहर के सौर फार्म प्रोजेक्ट पर दो समाचार लेख हैं। रिपोर्टों की तुलना कैसे होती है?',
      },
      {
        speaker: 'Learner',
        text: 'According to Article A, construction begins in May, whereas Article B states it begins in July. We need to cross-check the municipal record.',
        translation: 'अनुच्छेद ए के अनुसार, निर्माण मई में शुरू होता है, जबकि अनुच्छेद बी कहता है कि यह जुलाई में शुरू होता है। हमें नगरपालिका रिकॉर्ड से क्रॉस-चेक करने की आवश्यकता है।',
      },
      {
        speaker: 'Liam',
        text: 'Great observation! What is the verified consensus between both sources?',
        translation: 'बहुत बढ़िया अवलोकन! दोनों स्रोतों के बीच सत्यापित सहमति क्या है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_252_1',
      type: 'fill_blank',
      prompt: 'Complete: "Article A reports five hundred jobs, ______ (whereas / because / so) Article B estimates six hundred."',
      options: [
        { id: 'opt_1', text: 'whereas', isCorrect: true },
        { id: 'opt_2', text: 'because', isCorrect: false },
        { id: 'opt_3', text: 'so', isCorrect: false },
      ],
      correctAnswer: 'whereas',
      explanation: '"Whereas" is used to contrast two factual statements.',
    },
    {
      id: 'cp_252_2',
      type: 'multiple_choice',
      prompt: 'Which sentence best summarizes a comparison of two news sources?',
      options: [
        { id: 'opt_1', text: 'The key difference between the two sources is the estimated completion budget.', isCorrect: true },
        { id: 'opt_2', text: 'The key difference between two sources are estimating budget without cross-check.', isCorrect: false },
        { id: 'opt_3', text: 'Sources is comparing with discrepancy of budget.', isCorrect: false },
      ],
      correctAnswer: 'The key difference between the two sources is the estimated completion budget.',
      explanation: 'Subject "The key difference" (singular) + "is" + noun phrase.',
    },
    {
      id: 'cp_252_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [According to the official report, / the new solar facility / will open in September]',
      correctAnswer: 'According to the official report, the new solar facility will open in September',
      explanation: 'Source attribution chunk + subject + future prediction.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_252_1',
      prompt: 'Construct a sentence stating that according to Source A, the park opens in May, whereas Source B claims June.',
      scenarioContext: 'Comparing two news snippets for Liam.',
      targetStructure: 'According to Source A, the park opens in May, whereas Source B claims June.',
      wordBank: ['According to Source A,', 'the park opens in May,', 'whereas Source B', 'claims June.', 'discrepancy to'],
      acceptableSolutions: [
        'According to Source A, the park opens in May, whereas Source B claims June.',
        'Source A states the park opens in May, whereas Source B claims June.',
      ],
      explanation: 'Formula: "According to Source A..., whereas Source B...".',
    },
    {
      id: 'sc_252_2',
      prompt: 'Construct a sentence stating that we should cross-check the facts before sharing the news summary.',
      scenarioContext: 'Explaining verification step.',
      targetStructure: 'We should cross-check the facts before sharing the news summary.',
      wordBank: ['We should cross-check', 'the facts before', 'sharing the news summary.', 'verified by', 'in contrast of'],
      acceptableSolutions: [
        'We should cross-check the facts before sharing the news summary.',
        'We must cross-check the facts before sharing the news summary.',
      ],
      explanation: 'Modal "should cross-check" + object + temporal clause.',
    },
  ],
  turns: [
    {
      id: 'turn_252_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello and welcome to our Media Verification Lab! I have handed out two news articles covering the City Eco-Park initiative. What is the topic of the two reports, and what does Source A report regarding the budget and launch date?',
      partnerAudioText:
        'Hello and welcome to our Media Verification Lab! I have handed out two news articles covering the City Eco-Park initiative. What is the topic of the two reports, and what does Source A report regarding the budget and launch date?',
      partnerQuestionHindi:
        'नमस्ते और हमारे मीडिया सत्यापन लैब में आपका स्वागत है! मैंने सिटी इको-पार्क पहल को कवर करने वाले दो समाचार लेख वितरित किए हैं। दोनों रिपोर्टों का विषय क्या है, और स्रोत ए बजट और लॉन्च तिथि के संबंध में क्या रिपोर्ट करता है?',
      expectedFunction: 'Greeting Liam and identifying the topic and specific figures from the first source',
      contextGoal: 'Greet Liam, state that both articles cover the new solar eco-park, and report Source A’s data (e.g. 5 million budget, opening in May)',
      targetVocabulary: ['Hello Liam', 'Source A', 'eco-park project', 'budget of five million', 'opens in May', 'according to'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello Liam! Both articles discuss the new municipal solar eco-park. According to Source A, the project has a budget of five million euros and is scheduled to open in May.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi Liam! The topic is the city’s clean energy park. Source A states that construction costs five million and will finish by late spring.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good afternoon! Both reports cover the solar park. Source A reports a five million euro budget with an opening date in May.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_liam',
          patterns: ['hello', 'hi', 'liam', 'good afternoon', 'good morning'],
          required: true,
        },
        {
          name: 'source_a_data',
          patterns: ['source a', 'eco-park', 'solar', 'budget', 'five million', '5 million', 'may', 'open', 'according to', 'topic'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_252_1_source_a_say',
          pattern: /source a say/i,
          errorType: 'grammar',
          message: 'Say "Source A says" or "Source A reports" (3rd person singular).',
          correctionPattern: 'According to Source A, the budget is five million.',
        },
      ],
      remediationPractice: {
        id: 'rem_252_1',
        type: 'fill_blank',
        prompt: 'Fill in: "Source A ______ (reports / report) a launch in May."',
        options: [
          { id: 'r1', text: 'reports', isCorrect: true },
          { id: 'r2', text: 'reporting', isCorrect: false },
        ],
        correctAnswer: 'reports',
        explanation: 'Singular subject "Source A" takes "reports".',
      },
    },
    {
      id: 'turn_252_2',
      turnIndex: 2,
      partnerPrompt:
        'Now look closely at Source B. What discrepancy in numbers or dates do you notice between the two articles, and why is it essential to cross-check with the official municipal portal?',
      partnerAudioText:
        'Now look closely at Source B. What discrepancy in numbers or dates do you notice between the two articles, and why is it essential to cross-check with the official municipal portal?',
      partnerQuestionHindi:
        'अब स्रोत बी को ध्यान से देखें। दोनों लेखों के बीच संख्याओं या तारीखों में आप क्या विसंगति (discrepancy) देखते हैं, और आधिकारिक नगरपालिका पोर्टल से क्रॉस-चेक करना क्यों आवश्यक है?',
      expectedFunction: 'Contrasting the two sources using "whereas / in contrast", identifying the discrepancy, and emphasizing cross-checking',
      contextGoal: 'Explain that Source B claims a 6 million budget and July launch, so cross-checking is vital to ensure accuracy',
      targetVocabulary: ['In contrast', 'Source B states', 'whereas', 'discrepancy', 'cross-check', 'official portal'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'In contrast, Source B claims the budget is six million euros and the opening date is July. There is a clear discrepancy, so we must cross-check with the official city portal to confirm the verified facts.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Source B reports different figures—six million euros and a July launch date. Cross-checking helps us avoid spreading inaccurate rumours.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'The key difference is that Source B mentions six million and July. We should check the city government website for the verified data.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'contrast_source_b',
          patterns: ['in contrast', 'source b', 'whereas', 'six million', '6 million', 'july', 'difference', 'discrepancy'],
          required: true,
        },
        {
          name: 'cross_check_reason',
          patterns: ['cross-check', 'verified', 'official', 'portal', 'website', 'accurate', 'facts', 'confirm'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_252_2_in_contrast_of',
          pattern: /in contrast of source b/i,
          errorType: 'grammar',
          message: 'Say "In contrast, Source B states..." (avoid "in contrast of").',
          correctionPattern: 'In contrast, Source B mentions six million.',
        },
      ],
      remediationPractice: {
        id: 'rem_252_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly contrasts information between two reports?',
        options: [
          { id: 'r1', text: 'Source A mentions May, whereas Source B reports July.', isCorrect: true },
          { id: 'r2', text: 'Source A mentions May in contrast of Source B July.', isCorrect: false },
        ],
        correctAnswer: 'Source A mentions May, whereas Source B reports July.',
        explanation: '"Whereas" links two clauses contrasting dates.',
      },
    },
    {
      id: 'turn_252_3',
      turnIndex: 3,
      partnerPrompt:
        'A fellow student has to give a one-minute presentation to the community council summarizing the verified facts from both articles. Could you mediate a concise, neutral summary of the project for them?',
      partnerAudioText:
        'A fellow student has to give a one-minute presentation to the community council summarizing the verified facts from both articles. Could you mediate a concise, neutral summary of the project for them?',
      partnerQuestionHindi:
        'एक साथी छात्र को दोनों लेखों के सत्यापित तथ्यों का सारांश देते हुए सामुदायिक परिषद को एक मिनट की प्रस्तुति देनी है। क्या आप उनके लिए परियोजना का एक संक्षिप्त, निष्पक्ष सारांश मध्यस्थता (mediate) कर सकते हैं?',
      expectedFunction: 'Mediating a balanced, synthesized factual summary combining verified common points for a partner',
      contextGoal: 'Summarize the verified consensus: the city is building a solar eco-park creating green jobs, opening this summer, with confirmed funding from the city council',
      targetVocabulary: ['To summarize the verified facts', 'solar eco-park', 'clean renewable energy', 'creates local jobs', 'opening this summer', 'council funding'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'To summarize the verified facts: the city is constructing a new solar eco-park that will supply clean renewable energy and create fifty local green jobs. Construction is underway and the park will officially open this summer.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Here is a clear summary for your presentation: both sources confirm the new solar park will generate clean power and boost the local economy when it opens this summer.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'In summary, the municipal solar project is approved, will produce clean energy, and is scheduled to launch this summer with public support.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'summary_marker',
          patterns: ['to summarize', 'in summary', 'summary', 'verified facts', 'presentation', 'both sources confirm'],
          required: true,
        },
        {
          name: 'synthesized_points',
          patterns: ['solar', 'eco-park', 'clean energy', 'renewable', 'jobs', 'summer', 'open', 'construct', 'power'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_252_3_incomplete_summary',
          pattern: /^solar park good project\.$/i,
          errorType: 'interaction',
          message: 'Provide a structured mediation summary: "To summarize the verified facts, the city is building a solar park that will supply clean energy this summer."',
          correctionPattern: 'To summarize the verified facts, the solar park will open this summer and provide clean energy.',
        },
      ],
      remediationPractice: {
        id: 'rem_252_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [To summarize the verified facts, / the solar park will generate / clean energy this summer]',
        correctAnswer: 'To summarize the verified facts, the solar park will generate clean energy this summer',
        explanation: 'Introductory summary chunk + future factual clause.',
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
