import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_205: ConversationDefinition = {
  id: 'conv_a2_205',
  title: 'Extended Writing: Paragraph Structure, Connectors & Linking Words',
  cefr: 'A2',
  unitId: 'unit_a2_14',
  lessonLinks: ['lesson_a2_14_205'],
  estimatedMinutes: 5,
  scenario:
    'You are in an academic writing workshop with Writing Tutor Samuel. You are reviewing your essay draft on "The Benefits of Remote Work for Students." You discuss constructing strong topic sentences, linking ideas logically using cohesive connectors (Furthermore, However, Therefore, In addition), and writing effective concluding summaries.',
  communicativeGoals: [
    'Identify and formulate clear topic sentences that state the main controlling idea of a paragraph',
    'Add specific supporting examples and evidence to back up arguments',
    'Use cohesive linking transition words for addition (Furthermore, In addition), contrast (However, On the other hand), and result (Therefore, As a result)',
    'Draft a concluding sentence that summarizes key points and provides final insight',
  ],
  canDoStatements: [
    'Can structure clear paragraphs with topic, supporting, and concluding sentences',
    'Can connect ideas cohesively using formal transition connectors',
    'Can discuss and review academic essay structure with a writing tutor',
  ],
  characters: [
    {
      id: 'char_samuel_writing_tutor',
      name: 'Samuel',
      role: 'Academic Writing Center Tutor',
      avatar: '📝',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'paragraph',
        ipa: '/ˈpærəɡrɑːf/',
        partOfSpeech: 'noun',
        meaning: 'A distinct section of a piece of writing, usually dealing with a single theme and indicated by a new line',
        exampleSentence: 'Every paragraph should focus on one central idea supported by evidence.',
        translations: { hi: 'अनुच्छेद / पैराग्राफ' },
      },
      {
        word: 'connector',
        ipa: '/kəˈnektə(r)/',
        partOfSpeech: 'noun',
        meaning: 'A word or phrase (such as however, furthermore, therefore) that links sentences and logical thoughts',
        exampleSentence: 'Using formal connectors improves the cohesion of your essay.',
        translations: { hi: 'संयोजक / जोड़ने वाला शब्द' },
      },
      {
        word: 'furthermore',
        ipa: '/ˌfɜːðəˈmɔː(r)/',
        partOfSpeech: 'adverb',
        meaning: 'In addition to what has been said; moreover',
        exampleSentence: 'The tool saves time. Furthermore, it improves accuracy.',
        translations: { hi: 'इसके अलावा / और भी' },
      },
      {
        word: 'therefore',
        ipa: '/ˈðeəfɔː(r)/',
        partOfSpeech: 'adverb',
        meaning: 'For that reason; consequently; as a result',
        exampleSentence: 'He studied consistently; therefore, he passed with distinction.',
        translations: { hi: 'अतः / इसलिए / परिणामस्वरूप' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'The main advantage of remote study is greater schedule flexibility.',
        functionCategory: 'Topic sentence formula',
        exampleSentence: 'The primary challenge is maintaining self-discipline.',
      },
      {
        phrase: 'Furthermore, students can save substantial time and commuting expenses.',
        functionCategory: 'Additive connector',
        exampleSentence: 'In addition, digital lectures can be replayed anytime.',
      },
      {
        phrase: 'However, learners must remain proactive to avoid social isolation.',
        functionCategory: 'Contrast connector',
        exampleSentence: 'On the other hand, group projects require careful communication.',
      },
      {
        phrase: 'Therefore, balancing independent study with interactive peer sessions is essential.',
        functionCategory: 'Concluding result sentence',
        exampleSentence: 'In conclusion, time management determines student success.',
      },
    ],
    grammar: {
      title: 'Cohesive Paragraph Architecture & Transitional Connectors',
      conceptExplanation:
        '1. Paragraph Structure:\n   - Topic Sentence: Introduces the central point\n   - Supporting Sentences: Provide data, examples, or explanations\n   - Concluding Sentence: Summarizes or links to the next point\n2. Linking Words Categories:\n   - Addition: Furthermore, In addition, Moreover\n   - Contrast: However, On the other hand, In contrast\n   - Result/Consequence: Therefore, As a result, Consequently\n3. Punctuation with Sentence Connectors:\n   - Connector + Comma at start of sentence: "Furthermore, ..."\n   - Semicolon + Connector + Comma: "...; therefore, ..."',
      patternFormula: 'Topic Sentence ➔ Furthermore, [Additional point] ➔ However, [Counterpoint] ➔ Therefore, [Conclusion]',
      contrastExamples: [
        {
          incorrect: 'Also it is good. And it is cheap.',
          correct: 'Furthermore, it is cost-effective and highly flexible.',
          explanation: 'Use formal connectors like "Furthermore" and "In addition" in academic writing instead of repetitive "and/also".',
        },
        {
          incorrect: 'However students like it.',
          correct: 'However, students must manage their time carefully.',
          explanation: 'Always follow initial connectors (However, Furthermore, Therefore) with a comma.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Samuel',
        text: 'Welcome! Let’s examine the second paragraph of your essay draft. What is your topic sentence here?',
        translation: 'स्वागत है! आइए आपके निबंध मसौदे के दूसरे पैराग्राफ की जांच करें। यहाँ आपका विषय वाक्य (topic sentence) क्या है?',
      },
      {
        speaker: 'Learner',
        text: 'My topic sentence is: "Remote learning offers students significant flexibility in managing their weekly study routines."',
        translation: 'मेरा विषय वाक्य है: "दूरस्थ शिक्षा छात्रों को उनकी साप्ताहिक अध्ययन दिनचर्या के प्रबंधन में महत्वपूर्ण लचीलापन प्रदान करती है।"',
      },
      {
        speaker: 'Samuel',
        text: 'Excellent! How do you connect your supporting points logically?',
        translation: 'उत्कृष्ट! आप अपने सहायक बिंदुओं को तार्किक रूप से कैसे जोड़ते हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_205_1',
      type: 'fill_blank',
      prompt: 'Complete with the result connector: "She completed all assignments early; ______ (therefore / furthermore), she felt confident for the exam."',
      options: [
        { id: 'opt_1', text: 'therefore', isCorrect: true },
        { id: 'opt_2', text: 'furthermore', isCorrect: false },
        { id: 'opt_3', text: 'however', isCorrect: false },
      ],
      correctAnswer: 'therefore',
      explanation: '"Therefore" indicates the logical consequence or result.',
    },
    {
      id: 'cp_205_2',
      type: 'multiple_choice',
      prompt: 'Which sentence uses a contrast connector and correct punctuation?',
      options: [
        { id: 'opt_1', text: 'Online study is convenient. However, students must develop strong self-discipline.', isCorrect: true },
        { id: 'opt_2', text: 'Online study is convenient however students must develop strong self-discipline.', isCorrect: false },
        { id: 'opt_3', text: 'Online study is convenient therefore no discipline needed.', isCorrect: false },
      ],
      correctAnswer: 'Online study is convenient. However, students must develop strong self-discipline.',
      explanation: 'Starts with "However," followed by a comma.',
    },
    {
      id: 'cp_205_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [furthermore / students save / commuting expenses / on daily]',
      correctAnswer: 'furthermore students save on daily commuting expenses',
      explanation: 'Connector + subject + verb + prepositional phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_205_1',
      prompt: 'Construct a supporting sentence using "Furthermore" to describe how online resources benefit students.',
      scenarioContext: 'Drafting an essay supporting sentence.',
      targetStructure: 'Furthermore, online lectures allow students to replay difficult concepts anytime.',
      wordBank: ['Furthermore,', 'online lectures allow', 'students to replay', 'difficult concepts', 'anytime from home.'],
      acceptableSolutions: [
        'Furthermore, online lectures allow students to replay difficult concepts anytime.',
        'Furthermore, students can review online lecture recordings anytime.',
      ],
      explanation: 'Use "Furthermore," at the start with supporting idea.',
    },
    {
      id: 'sc_205_2',
      prompt: 'Construct a concluding sentence using "Therefore" summarizing the value of structured study habits.',
      scenarioContext: 'Writing the final sentence of a paragraph.',
      targetStructure: 'Therefore, establishing a consistent daily study routine is essential for academic success.',
      wordBank: ['Therefore,', 'establishing a consistent', 'daily study routine', 'is essential', 'for academic success.'],
      acceptableSolutions: [
        'Therefore, establishing a consistent daily study routine is essential for academic success.',
        'Therefore, building a daily routine is vital for student success.',
      ],
      explanation: 'Result connector "Therefore," + gerund subject + predicate.',
    },
  ],
  turns: [
    {
      id: 'turn_205_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello! Welcome to the Writing Center. I have your essay draft on "The Impact of Digital Learning." Let’s look at your body paragraph. Could you read aloud your topic sentence and explain the main idea?',
      partnerAudioText:
        'Hello! Welcome to the Writing Center. I have your essay draft on "The Impact of Digital Learning." Let’s look at your body paragraph. Could you read aloud your topic sentence and explain the main idea?',
      partnerQuestionHindi:
        'नमस्ते! राइटिंग सेंटर में आपका स्वागत है। मेरे पास "द इम्पैक्ट ऑफ डिजिटल लर्निंग" पर आपका निबंध मसौदा है। आइए आपके मुख्य पैराग्राफ को देखें। क्या आप अपना विषय वाक्य (topic sentence) ज़ोर से पढ़ सकते हैं और मुख्य विचार समझा सकते हैं?',
      expectedFunction: 'Presenting a clear topic sentence on the benefits of digital learning',
      contextGoal: 'State a clear topic sentence (e.g. "Digital learning provides university students with flexible access to study materials")',
      targetVocabulary: ['topic sentence', 'main idea', 'digital learning', 'flexibility', 'students', 'access', 'Samuel'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello Samuel! My topic sentence is: "Digital learning provides university students with flexible access to course materials from anywhere."',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Good afternoon! The topic sentence states that online platforms allow students to study at their own pace and balance other responsibilities.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Hi Samuel. My controlling topic sentence is: "Digital learning significantly enhances educational accessibility by enabling asynchronous lecture review."',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'topic_statement',
          patterns: ['topic sentence', 'digital learning', 'provides', 'flexible', 'access', 'materials', 'study', 'pace'],
          required: true,
        },
        {
          name: 'concept_clarity',
          patterns: ['students', 'anywhere', 'responsibilities', 'course', 'balance', 'accessibility'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_205_1_no_main_idea',
          pattern: /^computers are good\.$/i,
          errorType: 'vocabulary',
          message: 'Formulate a complete academic topic sentence: "Digital learning provides students with flexible access to resources."',
          correctionPattern: 'Digital learning provides students with flexible access to course materials.',
        },
      ],
      remediationPractice: {
        id: 'rem_205_1',
        type: 'fill_blank',
        prompt: 'Fill in: "The ______ (topic) sentence expresses the main idea of a paragraph."',
        options: [
          { id: 'r1', text: 'topic', isCorrect: true },
          { id: 'r2', text: 'connector', isCorrect: false },
        ],
        correctAnswer: 'topic',
        explanation: 'A topic sentence states the paragraph\'s main idea.',
      },
    },
    {
      id: 'turn_205_2',
      turnIndex: 2,
      partnerPrompt:
        'That is a strong and focused topic sentence! Now, how do you provide additional supporting evidence using an additive transition word like "Furthermore" or "In addition"?',
      partnerAudioText:
        'That is a strong and focused topic sentence! Now, how do you provide additional supporting evidence using an additive transition word like "Furthermore" or "In addition"?',
      partnerQuestionHindi:
        'यह एक मजबूत और केंद्रित विषय वाक्य है! अब, आप "Furthermore" या "In addition" जैसे योगात्मक संक्रमण शब्द का उपयोग करके अतिरिक्त सहायक साक्ष्य कैसे प्रदान करते हैं?',
      expectedFunction: 'Providing a supporting sentence using "Furthermore" or "In addition"',
      contextGoal: 'Add supporting details (e.g. saving commuting costs and replaying lectures) using "Furthermore,"',
      targetVocabulary: ['Furthermore', 'In addition', 'commuting', 'replaying', 'recordings', 'cost-effective'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Furthermore, students save significant travel time and transportation costs by accessing recorded lectures from home.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'In addition, digital platforms allow learners to pause and replay complex explanations whenever they need revision.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Furthermore, recorded lectures and interactive forums facilitate continuous peer discussions outside scheduled classroom hours.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'additive_connector',
          patterns: ['furthermore', 'in addition', 'moreover', 'furthermore,', 'in addition,'],
          required: true,
        },
        {
          name: 'supporting_point',
          patterns: ['travel', 'costs', 'replay', 'recorded', 'home', 'pause', 'forums', 'time', 'save'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_205_2_missing_comma',
          pattern: /furthermore students/i,
          errorType: 'grammar',
          message: 'Remember the comma after introductory connectors: "Furthermore, students..."',
          correctionPattern: 'Furthermore, students save travel time.',
        },
      ],
      remediationPractice: {
        id: 'rem_205_2',
        type: 'multiple_choice',
        prompt: 'Which sentence is punctuated correctly?',
        options: [
          { id: 'r1', text: 'Furthermore, students save time on travel.', isCorrect: true },
          { id: 'r2', text: 'Furthermore students save time on travel.', isCorrect: false },
        ],
        correctAnswer: 'Furthermore, students save time on travel.',
        explanation: 'Introductory transition words require a comma.',
      },
    },
    {
      id: 'turn_205_3',
      turnIndex: 3,
      partnerPrompt:
        'Great supporting evidence! To create balance, how do you introduce a potential challenge or counter-argument using a contrast connector like "However" or "On the other hand"?',
      partnerAudioText:
        'Great supporting evidence! To create balance, how do you introduce a potential challenge or counter-argument using a contrast connector like "However" or "On the other hand"?',
      partnerQuestionHindi:
        'बहुत बढ़िया सहायक साक्ष्य! संतुलन बनाने के लिए, आप "However" या "On the other hand" जैसे विपरीत संयोजक का उपयोग करके किसी संभावित चुनौती या विरोधी तर्क को कैसे प्रस्तुत करते हैं?',
      expectedFunction: 'Introducing a counterpoint/challenge using "However," or "On the other hand,"',
      contextGoal: 'State a counterpoint (e.g. self-discipline required or risk of distraction) with "However,"',
      targetVocabulary: ['However', 'On the other hand', 'self-discipline', 'isolation', 'distractions', 'focus'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'However, studying online requires strong self-discipline to avoid distractions and stay on track with deadlines.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'On the other hand, students may experience feelings of social isolation if they do not interact regularly with peers.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'However, without structured face-to-face contact, some learners find it challenging to maintain consistent daily motivation.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'contrast_connector',
          patterns: ['however', 'on the other hand', 'in contrast', 'however,', 'on the other hand,'],
          required: true,
        },
        {
          name: 'counter_challenge',
          patterns: ['self-discipline', 'distractions', 'isolation', 'motivation', 'challenging', 'deadlines', 'peers'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_205_3_but_start',
          pattern: /^but studying/i,
          errorType: 'grammar',
          message: 'In formal academic writing, prefer "However," or "On the other hand," instead of starting with "But".',
          correctionPattern: 'However, studying online requires self-discipline.',
        },
      ],
      remediationPractice: {
        id: 'rem_205_3',
        type: 'fill_blank',
        prompt: 'Fill in: "______ (However), online students must stay disciplined."',
        options: [
          { id: 'r1', text: 'However', isCorrect: true },
          { id: 'r2', text: 'Therefore', isCorrect: false },
        ],
        correctAnswer: 'However',
        explanation: 'Use "However" to introduce a contrasting limitation.',
      },
    },
    {
      id: 'turn_205_4',
      turnIndex: 4,
      partnerPrompt:
        'Splendid balance! Now, how will you conclude the paragraph using a result connector like "Therefore" or "As a result" to bring everything together?',
      partnerAudioText:
        'Splendid balance! Now, how will you conclude the paragraph using a result connector like "Therefore" or "As a result" to bring everything together?',
      partnerQuestionHindi:
        'शानदार संतुलन! अब, सब कुछ एक साथ लाने के लिए "Therefore" या "As a result" जैसे परिणाम संयोजक का उपयोग करके आप पैराग्राफ का निष्कर्ष कैसे निकालेंगे?',
      expectedFunction: 'Formulating an effective concluding sentence with "Therefore," or "As a result,"',
      contextGoal: 'Synthesize the point with "Therefore," (e.g. balancing online flexibility with proactive routine is key)',
      targetVocabulary: ['Therefore', 'As a result', 'essential', 'balance', 'successful', 'routine', 'conclusion'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Therefore, combining the flexibility of digital resources with good time management is essential for academic success.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'As a result, online education is most effective when students create a structured daily schedule to maintain productivity.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Therefore, cultivating active self-regulation allows students to maximize the unique advantages of digital learning.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'result_connector',
          patterns: ['therefore', 'as a result', 'consequently', 'therefore,', 'as a result,'],
          required: true,
        },
        {
          name: 'conclusion_synthesis',
          patterns: ['essential', 'success', 'schedule', 'effective', 'advantages', 'balance', 'productivity', 'management'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_205_4_short',
          pattern: /^therefore it is good\.$/i,
          errorType: 'interaction',
          message: 'Provide a thoughtful concluding synthesis summarizing both benefits and requirements.',
          correctionPattern: 'Therefore, combining flexibility with time management is essential for success.',
        },
      ],
      remediationPractice: {
        id: 'rem_205_4',
        type: 'multiple_choice',
        prompt: 'Which sentence serves as an effective academic paragraph conclusion?',
        options: [
          { id: 'r1', text: 'Therefore, combining digital flexibility with time management is essential for success.', isCorrect: true },
          { id: 'r2', text: 'So that is why I finish paragraph.', isCorrect: false },
        ],
        correctAnswer: 'Therefore, combining digital flexibility with time management is essential for success.',
        explanation: 'Polite, formal, and synthesizes the whole paragraph logically.',
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
