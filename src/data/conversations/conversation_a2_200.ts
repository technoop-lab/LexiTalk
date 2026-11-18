import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_200: ConversationDefinition = {
  id: 'conv_a2_200',
  title: 'Study Habits, Exams, Grades & Learning Goals',
  cefr: 'A2',
  unitId: 'unit_a2_14',
  lessonLinks: ['lesson_a2_14_200'],
  estimatedMinutes: 5,
  scenario:
    'You are in the campus study lounge discussing revision strategies, upcoming midterm exams, and target grades with your study buddy Maya. You share tips on creating structured study timetables, managing exam anxiety, and setting realistic academic goals for the semester.',
  communicativeGoals: [
    'Describe personal study routines, daily revision habits, and Pomodoro/time-management techniques',
    'Discuss exam formats, grading systems (percentages, letter grades, GPA), and past results',
    'Express short-term and long-term academic learning goals using future intent phrases ("I aim to...", "My goal is to...")',
    'Offer constructive study advice and encouragement to peers preparing for tests',
  ],
  canDoStatements: [
    'Can describe study routines and exam preparation strategies in detail',
    'Can discuss academic marks, grades, and feedback',
    'Can set realistic learning goals and express future educational plans',
  ],
  characters: [
    {
      id: 'char_maya_study_buddy',
      name: 'Maya',
      role: 'Fellow University Student & Study Partner',
      avatar: '📊',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'revision',
        ipa: '/rɪˈvɪʒn/',
        partOfSpeech: 'noun',
        meaning: 'The action of reviewing and rereading subject notes and materials before an examination',
        exampleSentence: 'I have set aside two hours every evening for revision.',
        translations: { hi: 'पुनरावृत्ति / दोहराव (रिवीजन)' },
      },
      {
        word: 'deadline',
        ipa: '/ˈdedlaɪn/',
        partOfSpeech: 'noun',
        meaning: 'The latest time or date by which something should be completed or submitted',
        exampleSentence: 'The deadline for our research essay is next Thursday at midnight.',
        translations: { hi: 'अंतिम समय सीमा (डेडलाइन)' },
      },
      {
        word: 'grade',
        ipa: '/ɡreɪd/',
        partOfSpeech: 'noun',
        meaning: 'A mark indicating a student’s level of performance in an exam or course',
        exampleSentence: 'She worked hard and received a top grade of eighty-five percent.',
        translations: { hi: 'अंक / श्रेणी (ग्रेड)' },
      },
      {
        word: 'goal',
        ipa: '/ɡəʊl/',
        partOfSpeech: 'noun',
        meaning: 'An aim or desired result that a person plans and commits to achieve',
        exampleSentence: 'My academic goal is to improve my GPA to three point eight this year.',
        translations: { hi: 'लक्ष्य / उद्देश्य' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I usually study for forty-five minutes and then take a ten-minute break.',
        functionCategory: 'Describing study routine',
        exampleSentence: 'I review my lecture slides every morning.',
      },
      {
        phrase: 'My main learning goal this semester is to score over seventy percent.',
        functionCategory: 'Setting academic goal',
        exampleSentence: 'I aim to complete all weekly assignments on time.',
      },
      {
        phrase: 'How do you usually prepare for multiple-choice and essay exams?',
        functionCategory: 'Asking about exam prep',
        exampleSentence: 'Do you practice with past exam papers?',
      },
      {
        phrase: 'If you feel overwhelmed, try breaking the syllabus into smaller topics.',
        functionCategory: 'Giving study advice',
        exampleSentence: 'Forming a study group helps keep everyone motivated.',
      },
    ],
    grammar: {
      title: 'Describing Habits, Future Intentions & Giving Study Advice',
      conceptExplanation:
        '1. Expressing Habits & Routines:\n   - Adverbs of frequency: always, usually, regularly\n   - "I spend [X hours] reviewing [Subject]"\n2. Setting Academic Goals:\n   - "I plan to / I intend to + Verb"\n   - "My goal is to achieve [Grade]"\n   - "I aim to + Verb"\n3. Giving Constructive Advice:\n   - "You should / could try + -ing..."\n   - "If you [Condition], it helps to [Verb]..."',
      patternFormula: 'I usually [Study Routine] | My goal is to [Achieve Result] | Why don’t you try [Technique]?',
      contrastExamples: [
        {
          incorrect: 'I am study all night without sleep before test.',
          correct: 'I avoid cramming all night; instead, I review my notes consistently every week.',
          explanation: 'Use simple present for regular study habits and express sustainable strategies.',
        },
        {
          incorrect: 'My goal is get A mark.',
          correct: 'My goal is to achieve an "A" grade in statistics.',
          explanation: 'Use infinitive "to achieve" after "my goal is".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Maya',
        text: 'Hey! Midterm exams are only three weeks away. How is your revision schedule going?',
        translation: 'अरे! मध्यावधि परीक्षाएं केवल तीन सप्ताह दूर हैं। आपका रिवीजन शेड्यूल कैसा चल रहा है?',
      },
      {
        speaker: 'Learner',
        text: 'Hey Maya! I make a daily revision timetable and solve past exam questions for two hours every evening.',
        translation: 'अरे माया! मैं एक दैनिक रिवीजन समय सारिणी बनाता हूँ और हर शाम दो घंटे पिछले परीक्षा प्रश्नों को हल करता हूँ।',
      },
      {
        speaker: 'Maya',
        text: 'That sounds really organized! What grade are you aiming for in the midterm?',
        translation: 'यह वास्तव में बहुत व्यवस्थित लगता है! आप मध्यावधि में किस ग्रेड का लक्ष्य बना रहे हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_200_1',
      type: 'fill_blank',
      prompt: 'Complete with the goal expression: "My goal is ______ (to improve / improving) my presentation skills."',
      options: [
        { id: 'opt_1', text: 'to improve', isCorrect: true },
        { id: 'opt_2', text: 'improving', isCorrect: false },
        { id: 'opt_3', text: 'improved', isCorrect: false },
      ],
      correctAnswer: 'to improve',
      explanation: 'Use the full infinitive "to improve" after "My goal is".',
    },
    {
      id: 'cp_200_2',
      type: 'multiple_choice',
      prompt: 'Which sentence gives friendly study advice using a conditional structure?',
      options: [
        { id: 'opt_1', text: 'If you feel tired, you should take a short walk before continuing.', isCorrect: true },
        { id: 'opt_2', text: 'You must never sleep until pass exam.', isCorrect: false },
        { id: 'opt_3', text: 'Exam is hard so bad.', isCorrect: false },
      ],
      correctAnswer: 'If you feel tired, you should take a short walk before continuing.',
      explanation: 'Polite and constructive conditional advice.',
    },
    {
      id: 'cp_200_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [every morning / I review / for thirty minutes / my flashcards]',
      correctAnswer: 'I review my flashcards for thirty minutes every morning',
      explanation: 'Subject + verb + object + duration + time frequency.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_200_1',
      prompt: 'Construct a sentence describing your daily revision routine using time management.',
      scenarioContext: 'Sharing your study routine with Maya.',
      targetStructure: 'I study for fifty minutes using flashcards and then take a ten-minute break.',
      wordBank: ['I study for', 'fifty minutes', 'using flashcards', 'and then take', 'a ten-minute break', 'regularly'],
      acceptableSolutions: [
        'I study for fifty minutes using flashcards and then take a ten-minute break.',
        'I study for fifty minutes and then take a ten-minute break.',
      ],
      explanation: 'Describe routine and break pattern.',
    },
    {
      id: 'sc_200_2',
      prompt: 'Construct a sentence stating your target grade and learning goal for this semester.',
      scenarioContext: 'Explaining your academic goal.',
      targetStructure: 'My goal is to score above seventy-five percent in my final programming project.',
      wordBank: ['My goal is', 'to score above', 'seventy-five percent', 'in my final', 'programming project', 'this semester'],
      acceptableSolutions: [
        'My goal is to score above seventy-five percent in my final programming project.',
        'My goal is to achieve over seventy-five percent in my final project.',
      ],
      explanation: 'State target grade and context.',
    },
  ],
  turns: [
    {
      id: 'turn_200_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! I saw you in the library with all those lecture folders. With our midterms coming up next month, what does your daily study routine look like?',
      partnerAudioText:
        'Hey! I saw you in the library with all those lecture folders. With our midterms coming up next month, what does your daily study routine look like?',
      partnerQuestionHindi:
        'अरे! मैंने आपको उन सभी व्याख्यान फ़ोल्डरों के साथ पुस्तकालय में देखा। अगले महीने हमारे मध्यावधि आने के साथ, आपकी दैनिक अध्ययन दिनचर्या कैसी दिखती है?',
      expectedFunction: 'Describing daily study routine and revision schedule',
      contextGoal: 'Explain your daily study habit (e.g. studying 2 hours every evening, using flashcards, taking breaks)',
      targetVocabulary: ['study', 'routine', 'revision', 'hours', 'library', 'notes', 'evening'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hey Maya! I usually study for two hours every evening in the library and review my notes using flashcards.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I dedicate two hours each afternoon to revision. I like practicing with past exam papers to test my memory.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'My routine is quite structured: I study for 50 minutes, take a 10-minute break, and summarize key concepts daily.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'study_time_routine',
          patterns: ['study', 'hours', 'evening', 'afternoon', 'routine', 'daily', 'minutes', 'schedule'],
          required: true,
        },
        {
          name: 'revision_technique',
          patterns: ['revision', 'notes', 'flashcards', 'past papers', 'library', 'review', 'summarize'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_200_1_everyday_vs_every_day',
          pattern: /i study everyday two hours/i,
          errorType: 'grammar',
          message: 'Say "I study for two hours every day" (adverbial phrase with space).',
          correctionPattern: 'I study for two hours every day',
        },
      ],
      remediationPractice: {
        id: 'rem_200_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I study for two hours ______ (every day / everyday)."',
        options: [
          { id: 'r1', text: 'every day', isCorrect: true },
          { id: 'r2', text: 'every days', isCorrect: false },
        ],
        correctAnswer: 'every day',
        explanation: '"Every day" functions as an adverbial time phrase.',
      },
    },
    {
      id: 'turn_200_2',
      turnIndex: 2,
      partnerPrompt:
        'That is super disciplined! I sometimes get really stressed before written exams because I worry about grades. What is your target grade for this semester, and what learning goals have you set?',
      partnerAudioText:
        'That is super disciplined! I sometimes get really stressed before written exams because I worry about grades. What is your target grade for this semester, and what learning goals have you set?',
      partnerQuestionHindi:
        'यह बहुत अनुशासित है! मैं कभी-कभी लिखित परीक्षाओं से पहले वास्तव में तनावग्रस्त हो जाती हूँ क्योंकि मैं ग्रेड की चिंता करती हूँ। इस सेमेस्टर के लिए आपका लक्षित ग्रेड क्या है, और आपने क्या सीखने के लक्ष्य निर्धारित किए हैं?',
      expectedFunction: 'Stating target grades (e.g. 75%, Grade A, 3.8 GPA) and academic goals',
      contextGoal: 'State your target grade (e.g. over 75% or an "A") and goal (e.g. mastering statistics or completing projects early)',
      targetVocabulary: ['target', 'grade', 'goal', 'score', 'percent', 'aim', 'achieve'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'My target is to achieve over seventy-five percent, and my goal is to understand all data analysis formulas thoroughly.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I am aiming for an "A" grade in our core modules. I also want to improve my academic essay writing score.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'My primary goal is to maintain a GPA above 3.7. Beyond marks, I really want to master Python programming by December.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'target_grade',
          patterns: ['grade', 'percent', 'score', '75', '80', 'gpa', 'a', 'b', 'aim', 'achieve'],
          required: true,
        },
        {
          name: 'learning_goal',
          patterns: ['goal', 'improve', 'understand', 'master', 'writing', 'analysis', 'formulas', 'programming'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_200_2_aim_at',
          pattern: /i aim get/i,
          errorType: 'grammar',
          message: 'Say "I aim to get" or "I am aiming for an A".',
          correctionPattern: 'I aim to get',
        },
      ],
      remediationPractice: {
        id: 'rem_200_2',
        type: 'multiple_choice',
        prompt: 'Which sentence expresses an academic goal correctly?',
        options: [
          { id: 'r1', text: 'My goal is to score above seventy-five percent.', isCorrect: true },
          { id: 'r2', text: 'My goal is score above seventy-five percent.', isCorrect: false },
        ],
        correctAnswer: 'My goal is to score above seventy-five percent.',
        explanation: 'Use the infinitive "to score" after "My goal is".',
      },
    },
    {
      id: 'turn_200_3',
      turnIndex: 3,
      partnerPrompt:
        'Those are ambitious and achievable goals! I still feel quite anxious about memorizing all the case studies for our exam. What advice do you have to avoid exam panic and stay calm?',
      partnerAudioText:
        'Those are ambitious and achievable goals! I still feel quite anxious about memorizing all the case studies for our exam. What advice do you have to avoid exam panic and stay calm?',
      partnerQuestionHindi:
        'वे महत्वाकांक्षी और प्राप्त करने योग्य लक्ष्य हैं! मैं अभी भी हमारी परीक्षा के लिए सभी केस स्टडी को याद रखने को लेकर काफी चिंतित महसूस करती हूँ। परीक्षा के घबराहट से बचने और शांत रहने के लिए आपके पास क्या सलाह है?',
      expectedFunction: 'Giving helpful study advice and anxiety management tips to a friend',
      contextGoal: 'Advise breaking topics into small chunks, practicing with a friend, or taking active breaks',
      targetVocabulary: ['advice', 'try', 'break down', 'study together', 'practice', 'calm', 'sleep'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'If you feel overwhelmed, try breaking each case study into three bullet points. We can also quiz each other!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'You should make mind maps and get plenty of sleep before the test. Staying calm is just as important as studying.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Why don’t we practice explaining case studies aloud together? Explaining concepts to someone else makes memorization much easier.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'advice_strategies',
          patterns: ['try', 'should', 'break', 'bullet points', 'quiz', 'together', 'sleep', 'mind maps', 'calm', 'explain'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_200_3_advise_noun',
          pattern: /my advise is/i,
          errorType: 'grammar',
          message: 'The noun is "advice" (with a \'c\'); the verb is "advise" (with an \'s\').',
          correctionPattern: 'My advice is...',
        },
      ],
      remediationPractice: {
        id: 'rem_200_3',
        type: 'fill_blank',
        prompt: 'Fill in: "Let me give you some useful ______ (advice) for the test."',
        options: [
          { id: 'r1', text: 'advice', isCorrect: true },
          { id: 'r2', text: 'advise', isCorrect: false },
        ],
        correctAnswer: 'advice',
        explanation: 'Noun form is "advice".',
      },
    },
    {
      id: 'turn_200_4',
      turnIndex: 4,
      partnerPrompt:
        'Quizzing each other aloud sounds brilliant! Would you like to form a weekly study group and meet in the library cafe every Tuesday afternoon at 3 PM?',
      partnerAudioText:
        'Quizzing each other aloud sounds brilliant! Would you like to form a weekly study group and meet in the library cafe every Tuesday afternoon at 3 PM?',
      partnerQuestionHindi:
        'एक-दूसरे से ज़ोर से सवाल पूछना बहुत बढ़िया लगता है! क्या आप एक साप्ताहिक अध्ययन समूह बनाना चाहेंगे और हर मंगलवार दोपहर 3 बजे लाइब्रेरी कैफे में मिलना चाहेंगे?',
      expectedFunction: 'Accepting the study invitation and confirming time and location',
      contextGoal: 'Agree enthusiastically to the weekly study group and confirm Tuesday at 3 PM',
      targetVocabulary: ['study group', 'Tuesday', 'agree', 'see you', 'library cafe', 'Maya', 'brilliant'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I would love that! Meeting every Tuesday at three o’clock in the library cafe will help us both succeed.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'That sounds like a plan! Let’s meet this Tuesday at 3 PM. I’ll bring the lecture summary sheets.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Count me in! A weekly study session on Tuesday afternoons is exactly what we need. See you then, Maya!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'agreement_acceptance',
          patterns: ['love that', 'sounds like a plan', 'count me in', 'yes', 'agree', 'great idea', 'brilliant'],
          required: true,
        },
        {
          name: 'meeting_details',
          patterns: ['tuesday', '3 pm', 'three', 'library', 'cafe', 'study group', 'see you', 'maya'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_200_4_short',
          pattern: /^(yes|ok|sure)$/i,
          errorType: 'interaction',
          message: 'Give an enthusiastic confirmation specifying time and appreciation.',
          correctionPattern: 'I would love that! Let\'s meet this Tuesday at 3 PM in the library cafe.',
        },
      ],
      remediationPractice: {
        id: 'rem_200_4',
        type: 'multiple_choice',
        prompt: 'Which response confirms a study session invitation naturally?',
        options: [
          { id: 'r1', text: 'That sounds like a great plan! See you Tuesday at 3 PM.', isCorrect: true },
          { id: 'r2', text: 'I agree time bye.', isCorrect: false },
        ],
        correctAnswer: 'That sounds like a great plan! See you Tuesday at 3 PM.',
        explanation: 'Natural and friendly confirmation.',
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
