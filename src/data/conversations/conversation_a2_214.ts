import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_214: ConversationDefinition = {
  id: 'conv_a2_214',
  title: 'Exams, Tests, Results & Grades',
  cefr: 'A2',
  unitId: 'unit_a2_15',
  lessonLinks: ['lesson_a2_15_214'],
  estimatedMinutes: 5,
  scenario:
    'You meet your friend Daniel outside the examination hall after semester grades are published on the student portal. You discuss your recent test results, evaluate how well you performed, compare exam formats (multiple-choice vs essay questions), and talk about teacher feedback.',
  communicativeGoals: [
    'Discuss exam results and grades using Present Perfect ("I have received my grade") and Past Simple ("I took the test last Friday")',
    'Express satisfaction or disappointment with academic performance ("I passed with distinction", "I did better than expected")',
    'Compare exam formats (written essays, practical presentations, multiple-choice quizzes)',
    'Ask a classmate how they did and provide encouraging peer feedback',
  ],
  canDoStatements: [
    'Can talk about exam results and scores using simple past and present perfect tenses',
    'Can describe different assessment formats and test experiences',
    'Can congratulate a classmate on good grades or offer simple encouragement',
  ],
  characters: [
    {
      id: 'char_daniel_classmate',
      name: 'Daniel',
      role: 'Classmate & Course Friend',
      avatar: '📊',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'evaluation',
        ipa: '/ɪˌvæljuˈeɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The process of judging or calculating the quality or grade of work',
        exampleSentence: 'The teacher published our final evaluation on the portal.',
        translations: { hi: 'मूल्यांकन (इवैल्यूएशन)' },
      },
      {
        word: 'distinction',
        ipa: '/dɪˈstɪŋkʃn/',
        partOfSpeech: 'noun',
        meaning: 'A grade awarded for exceptional, high-level academic performance',
        exampleSentence: 'She worked very hard and passed the module with distinction.',
        translations: { hi: 'विशेष योग्यता / सर्वोच्च अंक (डिस्टिंक्शन)' },
      },
      {
        word: 'assessment',
        ipa: '/əˈsesmənt/',
        partOfSpeech: 'noun',
        meaning: 'The evaluation or estimation of the nature, quality, or ability of someone or something',
        exampleSentence: 'Our final grade depends on continuous assessment and one final exam.',
        translations: { hi: 'आकलन / परीक्षा (असेसमेंट)' },
      },
      {
        word: 'feedback',
        ipa: '/ˈfiːdbæk/',
        partOfSpeech: 'noun',
        meaning: 'Helpful information or criticism given to improve performance',
        exampleSentence: 'The professor gave me very constructive feedback on my essay.',
        translations: { hi: 'प्रतिक्रिया / सुझाव (फीडबैक)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Have you checked your exam results on the portal yet?',
        functionCategory: 'Inquiring about recent results',
        exampleSentence: 'Have you received your midterm marks?',
      },
      {
        phrase: 'I passed with a distinction / with flying colours!',
        functionCategory: 'Expressing high achievement',
        exampleSentence: 'I scored eighty-five percent on the test.',
      },
      {
        phrase: 'I found the essay section harder than the multiple-choice questions.',
        functionCategory: 'Comparing exam parts',
        exampleSentence: 'The listening test was easier than expected.',
      },
      {
        phrase: 'Congratulations! You really deserved that great score.',
        functionCategory: 'Congratulating and encouraging',
        exampleSentence: 'Well done on passing!',
      },
    ],
    grammar: {
      title: 'Present Perfect vs Past Simple for Exam Results & Experiences',
      conceptExplanation:
        '1. Present Perfect for current result status / life experience (no exact past time):\n   - "I have just seen my grade on the portal."\n   - "Have you passed the exam yet?"\n2. Past Simple for specific past events / dates:\n   - "I took the exam last Friday."\n   - "I received an A on yesterday’s test."',
      patternFormula: 'Have you [Past Participle] yet? | I [took / scored / received] [Grade] [Past time marker]',
      contrastExamples: [
        {
          incorrect: 'I have passed the test yesterday.',
          correct: 'I passed the test yesterday. / I have already passed the test.',
          explanation: 'Do not use Present Perfect with specific past time words like "yesterday".',
        },
        {
          incorrect: 'I did get a distinction on the portal now.',
          correct: 'I have just received a distinction on the portal.',
          explanation: 'Use Present Perfect with "just" for recent news.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Daniel',
        text: 'Have you checked the student portal? The economics exam grades are finally out!',
        translation: 'क्या आपने छात्र पोर्टल चेक किया है? अर्थशास्त्र परीक्षा के ग्रेड आखिरकार आ गए हैं!',
      },
      {
        speaker: 'Learner',
        text: 'Yes, I have! I passed with an A grade and got really helpful feedback from the teacher.',
        translation: 'हाँ, मैंने देखा है! मैंने A ग्रेड के साथ परीक्षा पास की और मुझे शिक्षक से बहुत उपयोगी फीडबैक मिला।',
      },
      {
        speaker: 'Daniel',
        text: 'That is wonderful news! Congratulations! How did you find the second section?',
        translation: 'यह बहुत बढ़िया खबर है! बधाई हो! आपको दूसरा भाग कैसा लगा?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_214_1',
      type: 'fill_blank',
      prompt: 'Complete with the correct tense: "I ______ (saw / have seen) my test results an hour ago."',
      options: [
        { id: 'opt_1', text: 'saw', isCorrect: true },
        { id: 'opt_2', text: 'have seen', isCorrect: false },
        { id: 'opt_3', text: 'see', isCorrect: false },
      ],
      correctAnswer: 'saw',
      explanation: 'Use Past Simple "saw" with the specific past time expression "an hour ago".',
    },
    {
      id: 'cp_214_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly celebrates an outstanding exam result?',
      options: [
        { id: 'opt_1', text: 'I worked hard and passed the exam with distinction.', isCorrect: true },
        { id: 'opt_2', text: 'I passed the exam in distinction yesterday.', isCorrect: false },
        { id: 'opt_3', text: 'I have pass with distinction.', isCorrect: false },
      ],
      correctAnswer: 'I worked hard and passed the exam with distinction.',
      explanation: 'Accurate collocation: "pass with distinction".',
    },
    {
      id: 'cp_214_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [have you checked / your grades / on the student portal / yet?]',
      correctAnswer: 'have you checked your grades on the student portal yet?',
      explanation: 'Question form: Have you checked + object + place + yet?',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_214_1',
      prompt: 'Construct a sentence stating that you passed the exam with distinction and received 88 percent.',
      scenarioContext: 'Sharing your test results with Daniel.',
      targetStructure: 'I passed the examination with distinction and scored eighty-eight percent.',
      wordBank: ['I passed the examination', 'with distinction', 'and scored', 'eighty-eight percent', 'on the final test.'],
      acceptableSolutions: [
        'I passed the examination with distinction and scored eighty-eight percent.',
        'I passed the exam with distinction and scored 88 percent.',
      ],
      explanation: 'Result reporting formula with distinction and score.',
    },
    {
      id: 'sc_214_2',
      prompt: 'Construct a sentence asking Daniel how he performed on the essay section.',
      scenarioContext: 'Inquiring about your classmate’s test experience.',
      targetStructure: 'How did you do on the essay section of the exam, Daniel?',
      wordBank: ['How did you do', 'on the essay section', 'of the exam,', 'Daniel?', 'last week'],
      acceptableSolutions: [
        'How did you do on the essay section of the exam, Daniel?',
        'How did you find the essay section of the exam, Daniel?',
      ],
      explanation: 'Inquiry structure: How did you do on [Section]?',
    },
  ],
  turns: [
    {
      id: 'turn_214_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! The marks for our introductory statistics module were just published on the student portal five minutes ago. Have you seen your results yet?',
      partnerAudioText:
        'Hey! The marks for our introductory statistics module were just published on the student portal five minutes ago. Have you seen your results yet?',
      partnerQuestionHindi:
        'अरे! हमारे परिचयात्मक सांख्यिकी मॉड्यूल के अंक अभी पाँच मिनट पहले छात्र पोर्टल पर प्रकाशित किए गए थे। क्या आपने अभी तक अपने परिणाम देखे हैं?',
      expectedFunction: 'Stating that you checked the results and sharing your score/grade using Present Perfect or Past Simple',
      contextGoal: 'Say you have checked your results on your phone, passed with a high grade / distinction (e.g. 85%), and feel relieved',
      targetVocabulary: ['checked', 'portal', 'passed', 'distinction', 'relieved', 'grade', 'Daniel'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hi Daniel! Yes, I have just checked the portal. I passed with distinction and scored eighty-five percent! I feel so relieved.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hey Daniel! I logged in two minutes ago. I got an A grade! I was really worried, so I’m super happy now.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Yes, I just saw my grade! I passed with flying colours and got an 85%. All that library revision really paid off!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'check_confirmation',
          patterns: ['checked', 'logged in', 'saw', 'looked', 'yes', 'portal'],
          required: true,
        },
        {
          name: 'grade_and_feeling',
          patterns: ['passed', 'distinction', 'grade', 'eighty-five', '85', 'relieved', 'happy', 'colours', 'score'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_214_1_simple_pass',
          pattern: /^yes i pass$/i,
          errorType: 'grammar',
          message: 'Use past or present perfect: "Yes, I passed with a good grade!" or "I have just checked it."',
          correctionPattern: 'Yes, I passed with distinction and scored 85%!',
        },
      ],
      remediationPractice: {
        id: 'rem_214_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I have just ______ (checked) the portal."',
        options: [
          { id: 'r1', text: 'checked', isCorrect: true },
          { id: 'r2', text: 'checking', isCorrect: false },
        ],
        correctAnswer: 'checked',
        explanation: 'Present Perfect uses past participle "checked".',
      },
    },
    {
      id: 'turn_214_2',
      turnIndex: 2,
      partnerPrompt:
        'Eighty-five percent is amazing! Congratulations! I managed to pass with a solid B grade, which I am very pleased with. How did you find the different sections of the exam? Did you think the calculations were tricky?',
      partnerAudioText:
        'Eighty-five percent is amazing! Congratulations! I managed to pass with a solid B grade, which I am very pleased with. How did you find the different sections of the exam? Did you think the calculations were tricky?',
      partnerQuestionHindi:
        'पचासी प्रतिशत अद्भुत है! बधाई हो! मैं एक ठोस B ग्रेड के साथ पास होने में कामयाब रहा, जिससे मैं बहुत प्रसन्न हूँ। आपको परीक्षा के विभिन्न भाग कैसे लगे? क्या आपको लगता है कि गणनाएँ कठिन थीं?',
      expectedFunction: 'Comparing exam parts and congratulating Daniel on his B grade',
      contextGoal: 'Congratulate Daniel on his B grade, and explain how you found the calculation section compared to the theory questions',
      targetVocabulary: ['congratulations', 'solid grade', 'calculations', 'multiple-choice', 'theory', 'easier', 'harder'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Congratulations on your B grade, Daniel! The calculations were definitely tricky, but I found the multiple-choice section much easier.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Well done, Daniel! A B is a great result. The calculation problems took me a lot of time, but the short explanation questions were straightforward.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Congrats Daniel, that’s a solid mark! I thought the formulas in part two were challenging, whereas part one was relatively simple.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'peer_congratulation',
          patterns: ['congratulations', 'well done', 'congrats', 'great result', 'solid mark', 'b grade'],
          required: true,
        },
        {
          name: 'section_comparison',
          patterns: ['calculations', 'tricky', 'multiple-choice', 'theory', 'easier', 'harder', 'challenging', 'straightforward', 'section'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_214_2_no_congrats',
          pattern: /^calculations were hard\.$/i,
          errorType: 'interaction',
          message: 'Congratulate your friend on his grade first: "Congratulations Daniel! The calculations were tricky..."',
          correctionPattern: 'Congratulations Daniel! I found the calculations tricky too.',
        },
      ],
      remediationPractice: {
        id: 'rem_214_2',
        type: 'multiple_choice',
        prompt: 'Which phrase is the most natural way to congratulate a friend on a test score?',
        options: [
          { id: 'r1', text: 'Congratulations, Daniel! That is a solid grade.', isCorrect: true },
          { id: 'r2', text: 'You pass ok.', isCorrect: false },
        ],
        correctAnswer: 'Congratulations, Daniel! That is a solid grade.',
        explanation: 'Warm and natural peer congratulation.',
      },
    },
    {
      id: 'turn_214_3',
      turnIndex: 3,
      partnerPrompt:
        'Yeah, part two was tough! The professor also left a feedback note saying our class average was 72%. Did your evaluation include any written comments from Dr. Evans?',
      partnerAudioText:
        'Yeah, part two was tough! The professor also left a feedback note saying our class average was 72%. Did your evaluation include any written comments from Dr. Evans?',
      partnerQuestionHindi:
        'हाँ, भाग दो कठिन था! प्रोफेसर ने एक फीडबैक नोट भी छोड़ा जिसमें कहा गया था कि हमारी कक्षा का औसत 72% था। क्या आपके मूल्यांकन में डॉ. इवांस की कोई लिखित टिप्पणी शामिल थी?',
      expectedFunction: 'Describing teacher feedback and asking Daniel what advice Dr. Evans gave him',
      contextGoal: 'Explain Dr. Evans’s comment (e.g. praised data interpretation but suggested showing step-by-step working) and ask what feedback Daniel received',
      targetVocabulary: ['feedback', 'comment', 'Dr. Evans', 'praised', 'step-by-step', 'What about yours', 'Daniel'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Yes! Dr. Evans praised my data charts, but suggested showing more step-by-step calculations. What feedback did you receive, Daniel?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'She wrote that my analysis was clear, but reminded me to double-check units. Did Dr. Evans leave you any specific advice?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'She mentioned my interpretation was strong, though I lost two marks on rounding errors. What did she write on your evaluation, Daniel?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'feedback_detail',
          patterns: ['feedback', 'praised', 'wrote', 'comment', 'calculations', 'analysis', 'charts', 'advice', 'dr. evans'],
          required: true,
        },
        {
          name: 'follow_up_inquiry',
          patterns: ['what feedback', 'what about yours', 'did dr. evans', 'what did she write', 'daniel', 'yours'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_214_3_no_question',
          pattern: /^she said good job\.$/i,
          errorType: 'interaction',
          message: 'Add detail and ask Daniel about his feedback: "She praised my work. What feedback did she give you, Daniel?"',
          correctionPattern: 'She praised my analysis. What feedback did you receive, Daniel?',
        },
      ],
      remediationPractice: {
        id: 'rem_214_3',
        type: 'fill_blank',
        prompt: 'Fill in: "What feedback ______ (did) you receive, Daniel?"',
        options: [
          { id: 'r1', text: 'did', isCorrect: true },
          { id: 'r2', text: 'was', isCorrect: false },
        ],
        correctAnswer: 'did',
        explanation: 'Past Simple question structure: "What feedback did you receive?".',
      },
    },
    {
      id: 'turn_214_4',
      turnIndex: 4,
      partnerPrompt:
        'She told me to practice graph interpretations for the next module. Overall, we both passed and did really well! We should celebrate with some ice cream at the student hub. What do you think?',
      partnerAudioText:
        'She told me to practice graph interpretations for the next module. Overall, we both passed and did really well! We should celebrate with some ice cream at the student hub. What do you think?',
      partnerQuestionHindi:
        'उसने मुझे अगले मॉड्यूल के लिए ग्राफ व्याख्याओं का अभ्यास करने के लिए कहा। कुल मिलाकर, हम दोनों पास हो गए और बहुत अच्छा किया! हमें छात्र केंद्र में कुछ आइसक्रीम के साथ जश्न मनाना चाहिए। आप क्या सोचते हैं?',
      expectedFunction: 'Agreeing enthusiastically to celebrate and closing the conversation',
      contextGoal: 'Agree to celebrate with ice cream at the student hub, saying it’s a great idea after all that hard work',
      targetVocabulary: ['celebrate', 'ice cream', 'student hub', 'great idea', 'hard work', 'let’s go', 'Daniel'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'That’s a fantastic idea! We worked so hard for these exams, so ice cream at the student hub sounds perfect. Let’s go!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I completely agree! We definitely deserve a celebration after all that studying. Lead the way to the student hub!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Count me in! A celebratory ice cream is the best way to wrap up exam week. Let’s head over right now!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'celebration_agreement',
          patterns: ['fantastic idea', 'great idea', 'agree', 'sounds perfect', 'count me in', 'let’s go'],
          required: true,
        },
        {
          name: 'reward_mention',
          patterns: ['ice cream', 'celebrate', 'student hub', 'hard work', 'studying', 'exam week'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_214_4_short',
          pattern: /^(ok|yes)$/i,
          errorType: 'interaction',
          message: 'Accept the celebration warmly: "That’s a great idea, Daniel! Let’s celebrate with ice cream."',
          correctionPattern: 'That sounds fantastic, Daniel! Let’s get some ice cream.',
        },
      ],
      remediationPractice: {
        id: 'rem_214_4',
        type: 'multiple_choice',
        prompt: 'Which sentence accepts the celebratory invitation naturally?',
        options: [
          { id: 'r1', text: 'That’s a fantastic idea! Ice cream at the student hub sounds perfect, Daniel.', isCorrect: true },
          { id: 'r2', text: 'I eat food now.', isCorrect: false },
        ],
        correctAnswer: 'That’s a fantastic idea! Ice cream at the student hub sounds perfect, Daniel.',
        explanation: 'Enthusiastic, friendly, and matches the context.',
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
