import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_225: ConversationDefinition = {
  id: 'conv_a2_225',
  title: 'Unit 15 Review & Communicative Mastery',
  cefr: 'A2',
  unitId: 'unit_a2_15',
  lessonLinks: ['lesson_a2_15_225'],
  estimatedMinutes: 5,
  scenario:
    'You are in the Academic Success Centre having your end-of-semester progress review consultation with Senior Academic Advisor Dr. Wright. You reflect on your study habits, discuss active recall and spaced repetition, evaluate your exam performance, explain your learning strategies, and present your future academic study plan in fluent, confident A2 English.',
  communicativeGoals: [
    'Synthesize educational concepts across Unit 15 (routines, active recall, exam review, course recommendations, presentations)',
    'Use polite indirect questions and advisory modals ("Could you tell me if...", "I ought to dedicate more time to...")',
    'Apply real conditionals for future goals ("If I practice active recall daily, I will maintain high exam marks")',
    'Engage in a spontaneous, low-scaffolding academic advising dialogue demonstrating A2 communicative mastery',
  ],
  canDoStatements: [
    'Can discuss study progress, learning methodologies, and exam outcomes with an advisor',
    'Can articulate future academic plans using conditionals and modal verbs',
    'Can demonstrate full conversational fluency across all A2 Unit 15 educational themes',
  ],
  characters: [
    {
      id: 'char_dr_wright_advisor',
      name: 'Dr. Wright',
      role: 'Senior Academic Advisor & Mentor',
      avatar: '🎓',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'comprehensive',
        ipa: '/ˌkɒmprɪˈhensɪv/',
        partOfSpeech: 'adjective',
        meaning: 'Complete and including all aspects of learning and evaluation',
        exampleSentence: 'We have conducted a comprehensive review of your semester results.',
        translations: { hi: 'समग्र / व्यापक (कॉम्प्रिहेंसिव)' },
      },
      {
        word: 'synthesis',
        ipa: '/ˈsɪnθəsɪs/',
        partOfSpeech: 'noun',
        meaning: 'The combination of various ideas or methods into a coherent whole',
        exampleSentence: 'Your study plan shows a great synthesis of theory and practical habits.',
        translations: { hi: 'संश्लेषण / समग्र संयोजन (सिंथेसिस)' },
      },
      {
        word: 'competency',
        ipa: '/ˈkɒmpɪtənsi/',
        partOfSpeech: 'noun',
        meaning: 'The ability to do something successfully or efficiently',
        exampleSentence: 'You have mastered key communicative competencies in English.',
        translations: { hi: 'योग्यता / प्रवीणता (कॉम्पिटेंसी)' },
      },
      {
        word: 'achievement',
        ipa: '/əˈtʃiːvmənt/',
        partOfSpeech: 'noun',
        meaning: 'A thing done successfully with effort, skill, or courage',
        exampleSentence: 'Reaching this milestone is a major academic achievement.',
        translations: { hi: 'उपलब्धि (अचीवमेंट)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Over this semester, I have built consistent daily study routines using active recall.',
        functionCategory: 'Reflecting on study habits synthesis',
        exampleSentence: 'I have replaced passive reading with flashcard self-testing.',
      },
      {
        phrase: 'If I continue practicing spaced repetition every evening, I will retain vocabulary easily.',
        functionCategory: 'First conditional for academic planning',
        exampleSentence: 'If I join a weekly speaking circle, my fluency will grow rapidly.',
      },
      {
        phrase: 'Could you tell me which advanced seminar would best support my presentation skills?',
        functionCategory: 'Polite indirect inquiry to advisor',
        exampleSentence: 'Could you explain how credits are calculated for the next term?',
      },
      {
        phrase: 'I recommend combining digital podcasts with interactive classroom workshops.',
        functionCategory: 'Resource recommendation synthesis',
        exampleSentence: 'I find blended learning to be the most effective methodology.',
      },
    ],
    grammar: {
      title: 'Integrated Grammatical Synthesis for Academic Communication',
      conceptExplanation:
        '1. Reflecting with Present Perfect & Habitual Present:\n   - "I have improved my retention because I study in 25-minute Pomodoro blocks."\n2. Real Conditionals (First Conditional) for Future Planning:\n   - "If I revise consistently, I will score high marks on the final assessment."\n3. Indirect Questions for Advising:\n   - "Could you advise me which elective I ought to register for?"',
      patternFormula: '[Present Perfect / Present Routine] + [First Conditional: If + Present, will + Base] + [Polite Modal / Indirect Q]',
      contrastExamples: [
        {
          incorrect: 'If I will study, I pass.',
          correct: 'If I study consistently, I will pass all my modules.',
          explanation: 'In the if-clause, use present simple (not "will").',
        },
        {
          incorrect: 'Could you tell me where is the exam?',
          correct: 'Could you tell me where the exam room is located?',
          explanation: 'Indirect question word order: Subject before verb.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Dr. Wright',
        text: 'Welcome back! Let’s review your academic progress and study strategies over the past semester.',
        translation: 'वापसी पर स्वागत है! आइए पिछले सेमेस्टर में आपकी शैक्षणिक प्रगति और अध्ययन रणनीतियों की समीक्षा करें।',
      },
      {
        speaker: 'Learner',
        text: 'Thank you, Dr. Wright. I have adopted active recall and spaced repetition, and it made a huge difference to my exam performance.',
        translation: 'धन्यवाद, डॉ. राइट। मैंने सक्रिय स्मरण और अंतराल पुनरावृत्ति को अपनाया है, और इसने मेरे परीक्षा प्रदर्शन में एक बड़ा अंतर ला दिया है।',
      },
      {
        speaker: 'Dr. Wright',
        text: 'That’s wonderful! How do you plan to build upon these competencies next term?',
        translation: 'यह बहुत बढ़िया है! आप अगले सत्र में इन योग्यताओं को और कैसे विकसित करने की योजना बना रहे हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_225_1',
      type: 'fill_blank',
      prompt: 'Complete with the conditional form: "If I ______ (review / will review) my flashcards daily, I will remember new vocabulary."',
      options: [
        { id: 'opt_1', text: 'review', isCorrect: true },
        { id: 'opt_2', text: 'will review', isCorrect: false },
        { id: 'opt_3', text: 'reviewed', isCorrect: false },
      ],
      correctAnswer: 'review',
      explanation: 'First conditional if-clause takes the present simple.',
    },
    {
      id: 'cp_225_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly combines indirect question structure with academic advising?',
      options: [
        { id: 'opt_1', text: 'Could you tell me which elective course I ought to take next semester?', isCorrect: true },
        { id: 'opt_2', text: 'Could you tell me which elective ought I to take?', isCorrect: false },
        { id: 'opt_3', text: 'Where I ought take course?', isCorrect: false },
      ],
      correctAnswer: 'Could you tell me which elective course I ought to take next semester?',
      explanation: 'Polite indirect question with subject + ought to + base verb.',
    },
    {
      id: 'cp_225_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [I have mastered / key communicative competencies / and / built consistent study habits]',
      correctAnswer: 'I have mastered key communicative competencies and built consistent study habits',
      explanation: 'Present perfect synthesis clause with compound verb objects.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_225_1',
      prompt: 'Construct a sentence stating that if you continue using spaced repetition, your memory retention will remain strong.',
      scenarioContext: 'Explaining your study strategy to Dr. Wright.',
      targetStructure: 'If I continue using spaced repetition, my memory retention will remain strong throughout the next term.',
      wordBank: ['If I continue using', 'spaced repetition, my memory', 'retention will remain strong', 'throughout the next term,', 'Dr. Wright.'],
      acceptableSolutions: [
        'If I continue using spaced repetition, my memory retention will remain strong throughout the next term.',
        'If I use spaced repetition, my retention will remain strong.',
      ],
      explanation: 'First conditional formula for academic synthesis.',
    },
    {
      id: 'sc_225_2',
      prompt: 'Construct an indirect question asking Dr. Wright which academic presentation workshop she recommends.',
      scenarioContext: 'Inquiring about advanced presentation courses.',
      targetStructure: 'Could you tell me which presentation workshop you recommend for developing my speaking confidence?',
      wordBank: ['Could you tell me', 'which presentation workshop', 'you recommend for developing', 'my speaking confidence,', 'Dr. Wright?'],
      acceptableSolutions: [
        'Could you tell me which presentation workshop you recommend for developing my speaking confidence?',
        'Could you tell me which workshop you recommend, Dr. Wright?',
      ],
      explanation: 'Indirect question + recommendation verb.',
    },
  ],
  turns: [
    {
      id: 'turn_225_1',
      turnIndex: 1,
      partnerPrompt:
        'Good afternoon! Please take a seat. It is time for your comprehensive end-of-unit academic review. Looking back over your learning journey this semester, how have your study habits and revision methodologies developed?',
      partnerAudioText:
        'Good afternoon! Please take a seat. It is time for your comprehensive end-of-unit academic review. Looking back over your learning journey this semester, how have your study habits and revision methodologies developed?',
      partnerQuestionHindi:
        'शुभ दोपहर! कृपया बैठ जाइए। यह आपके व्यापक इकाई-अंत शैक्षणिक मूल्यांकन का समय है। इस सेमेस्टर में अपनी सीखने की यात्रा को पीछे मुड़कर देखते हुए, आपकी अध्ययन की आदतें और पुनरावृत्ति पद्धतियां कैसे विकसित हुई हैं?',
      expectedFunction: 'Reflecting comprehensively on study routine transformation (active recall, Pomodoro, spaced repetition)',
      contextGoal: 'Greet Dr. Wright, explain how you transformed your study habits from passive reading to active recall, Pomodoro sessions, and spaced flashcards',
      targetVocabulary: ['Good afternoon Dr. Wright', 'comprehensive', 'active recall', 'Pomodoro technique', 'spaced repetition', 'study habits', 'developed'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Good afternoon, Dr. Wright! Over this semester, I replaced passive rereading with active recall and flashcards. Studying in twenty-five minute Pomodoro blocks has dramatically improved my retention.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Good afternoon, Dr. Wright. My study routines have become far more structured. Using spaced repetition every evening and taking regular timed breaks helped me manage exam stress much better.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Thank you, Dr. Wright. I have adopted evidence-based methodologies including active recall and digital spaced flashcards, which made my revision significantly more efficient and enjoyable.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'formal_greeting_advisor',
          patterns: ['good afternoon', 'dr. wright', 'thank you', 'hello dr. wright'],
          required: true,
        },
        {
          name: 'study_methods_synthesis',
          patterns: ['active recall', 'flashcards', 'pomodoro', 'spaced repetition', 'structured', 'revision', 'retention', 'habits'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_225_1_too_brief',
          pattern: /^i study good now\.$/i,
          errorType: 'structure',
          message: 'Provide a structured synthesis: "Good afternoon, Dr. Wright! I have adopted active recall and Pomodoro intervals."',
          correctionPattern: 'Good afternoon, Dr. Wright! I transformed my habits by using active recall and spaced repetition.',
        },
      ],
      remediationPractice: {
        id: 'rem_225_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I have ______ (adopted) active recall strategies."',
        options: [
          { id: 'r1', text: 'adopted', isCorrect: true },
          { id: 'r2', text: 'adopt to', isCorrect: false },
        ],
        correctAnswer: 'adopted',
        explanation: 'Present perfect participle after "have".',
      },
    },
    {
      id: 'turn_225_2',
      turnIndex: 2,
      partnerPrompt:
        'That is an impressive transformation! Your recent midterm assessment marks reflect those exact improvements. Now, looking at your oral presentations and peer collaboration, how do you feel about your spoken communication skills in English?',
      partnerAudioText:
        'That is an impressive transformation! Your recent midterm assessment marks reflect those exact improvements. Now, looking at your oral presentations and peer collaboration, how do you feel about your spoken communication skills in English?',
      partnerQuestionHindi:
        'यह एक प्रभावशाली परिवर्तन है! आपके हालिया मध्यावधि मूल्यांकन अंक उन सटीक सुधारों को दर्शाते हैं। अब, अपनी मौखिक प्रस्तुतियों और सहकर्मी सहयोग को देखते हुए, आप अंग्रेजी में अपने बोले गए संचार कौशल के बारे में कैसा महसूस करते हैं?',
      expectedFunction: 'Evaluating oral presentation progress, signposting usage, and collaborative teamwork',
      contextGoal: 'Explain that practicing signposting phrases (Today I will talk about, Moving on to, To conclude) boosted your confidence in presentations and peer group discussions',
      targetVocabulary: ['signposting', 'presentations', 'confidence', 'collaborative discussions', 'Moving on to', 'To conclude', 'improved'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I feel much more confident! Using clear signposting phrases like "Moving on to my next point" and "To conclude" has made my presentations structured and easy to follow.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'My speaking confidence has grown a lot. Practicing structured transitions and participating actively in peer workshops helped me overcome hesitation during live discussions.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I’ve made substantial progress in oral delivery. Mastering presentation signposting and interactive debate techniques enables me to articulate complex points with clarity and poise.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'speaking_confidence_growth',
          patterns: ['confident', 'confidence', 'grown', 'much more confident', 'progress', 'improved'],
          required: true,
        },
        {
          name: 'presentation_techniques',
          patterns: ['signposting', 'moving on to', 'to conclude', 'structured', 'peer workshops', 'presentations', 'discussions', 'oral delivery'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_225_2_informal',
          pattern: /^speaking is ok now\.$/i,
          errorType: 'structure',
          message: 'Synthesize your oral skills: "I feel much more confident using signposting formulas and collaborative discussions."',
          correctionPattern: 'I feel much more confident delivering structured presentations using signposting phrases.',
        },
      ],
      remediationPractice: {
        id: 'rem_225_2',
        type: 'multiple_choice',
        prompt: 'Which sentence evaluates oral progress using Unit 15 concepts?',
        options: [
          { id: 'r1', text: 'Using presentation signposting phrases has made my oral talks much more structured and confident.', isCorrect: true },
          { id: 'r2', text: 'I talk good in class.', isCorrect: false },
        ],
        correctAnswer: 'Using presentation signposting phrases has made my oral talks much more structured and confident.',
        explanation: 'Accurate educational reflection with target vocabulary.',
      },
    },
    {
      id: 'turn_225_3',
      turnIndex: 3,
      partnerPrompt:
        'Splendid! As we look ahead to the next academic semester, what are your primary learning goals, and could you tell me how you plan to sustain this momentum?',
      partnerAudioText:
        'Splendid! As we look ahead to the next academic semester, what are your primary learning goals, and could you tell me how you plan to sustain this momentum?',
      partnerQuestionHindi:
        'शानदार! जैसे ही हम अगले शैक्षणिक सत्र की ओर देखते हैं, आपके प्राथमिक सीखने के लक्ष्य क्या हैं, और क्या आप मुझे बता सकते हैं कि आप इस गति को कैसे बनाए रखने की योजना बना रहे हैं?',
      expectedFunction: 'Articulating future plans using first conditionals ("If I...") and asking Dr. Wright a polite indirect question about elective courses',
      contextGoal: 'State future goal with a conditional (If I practice daily, I will achieve B1 fluency) and ask an indirect question (Could you tell me which advanced elective you recommend?)',
      targetVocabulary: ['If I continue', 'will achieve', 'consistency', 'Could you tell me', 'which elective', 'recommend', 'Dr. Wright'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'If I continue studying with spaced repetition daily, I will achieve B1 level fluency. Could you tell me which elective seminar you recommend for academic writing, Dr. Wright?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'If I maintain my daily revision schedule, I will prepare successfully for advanced coursework. Could you advise me if the communication workshop is available next term?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'My goal is to reach independent B1 proficiency. If I combine daily audio shadowing with academic writing, I will excel. Could you recommend the best elective to support this pathway, Dr. Wright?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'first_conditional_goal',
          patterns: ['if i continue', 'if i maintain', 'if i', 'will achieve', 'will prepare', 'will excel', 'b1'],
          required: true,
        },
        {
          name: 'indirect_question_inquiry',
          patterns: ['could you tell me', 'could you advise me', 'which elective', 'recommend', 'dr. wright', 'workshop'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_225_3_direct_q',
          pattern: /which elective do you recommend\?/i,
          errorType: 'grammar',
          message: 'Use an indirect question: "Could you tell me which elective you recommend, Dr. Wright?"',
          correctionPattern: 'Could you tell me which elective course you recommend?',
        },
      ],
      remediationPractice: {
        id: 'rem_225_3',
        type: 'fill_blank',
        prompt: 'Fill in: "Could you tell me which course ______ (you recommend)?"',
        options: [
          { id: 'r1', text: 'you recommend', isCorrect: true },
          { id: 'r2', text: 'do you recommend', isCorrect: false },
        ],
        correctAnswer: 'you recommend',
        explanation: 'Indirect questions use affirmative statement order (Subject + Verb).',
      },
    },
    {
      id: 'turn_225_4',
      turnIndex: 4,
      partnerPrompt:
        'I strongly recommend enrolling in "Academic Communication & Discourse"—it aligns perfectly with your goals! Based on our consultation today, you have demonstrated outstanding communicative mastery of all Unit 15 learning competencies. Congratulations on an exceptional semester!',
      partnerAudioText:
        'I strongly recommend enrolling in "Academic Communication & Discourse"—it aligns perfectly with your goals! Based on our consultation today, you have demonstrated outstanding communicative mastery of all Unit 15 learning competencies. Congratulations on an exceptional semester!',
      partnerQuestionHindi:
        'मैं "शैक्षणिक संचार और विमर्श" में नामांकन करने की दृढ़ता से सिफारिश करती हूँ—यह आपके लक्ष्यों के साथ पूरी तरह से मेल खाता है! आज हमारे परामर्श के आधार पर, आपने सभी यूनिट 15 सीखने की दक्षताओं की उत्कृष्ट संवादात्मक महारत का प्रदर्शन किया है। एक असाधारण सेमेस्टर पर बधाई!',
      expectedFunction: 'Expressing gratitude, affirming commitment to the recommended module, and concluding the consultation with professional composure',
      contextGoal: 'Thank Dr. Wright for her guidance and recommendation, express excitement about enrolling in the course, and conclude the meeting professionally',
      targetVocabulary: ['Thank you so much', 'Dr. Wright', 'guidance', 'enroll in the course', 'communicative mastery', 'Have a wonderful day'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Thank you so much for your guidance and support, Dr. Wright! I will definitely enroll in that course. Have a wonderful day!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Thank you, Dr. Wright. Your advice throughout this semester has been invaluable. I’m excited to register for the new module. Goodbye!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I truly appreciate your mentorship, Dr. Wright. Reaching this communicative milestone gives me great confidence for the future. Thank you and have a great afternoon!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'gratitude_and_advisor',
          patterns: ['thank you so much', 'thank you', 'appreciate', 'dr. wright', 'guidance', 'mentorship', 'advice'],
          required: true,
        },
        {
          name: 'enrollment_and_farewell',
          patterns: ['enroll', 'register', 'wonderful day', 'great afternoon', 'goodbye', 'confidence', 'milestone'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_225_4_short',
          pattern: /^(thanks bye|ok)$/i,
          errorType: 'interaction',
          message: 'Close with formal warmth: "Thank you so much for your guidance, Dr. Wright! I will enroll in the course."',
          correctionPattern: 'Thank you so much for your guidance, Dr. Wright! Have a wonderful day.',
        },
      ],
      remediationPractice: {
        id: 'rem_225_4',
        type: 'multiple_choice',
        prompt: 'Which response concludes an academic review consultation most professionally?',
        options: [
          { id: 'r1', text: 'Thank you so much for your guidance, Dr. Wright! I will definitely enroll in that seminar. Have a wonderful day!', isCorrect: true },
          { id: 'r2', text: 'Ok thanks I go now.', isCorrect: false },
        ],
        correctAnswer: 'Thank you so much for your guidance, Dr. Wright! I will definitely enroll in that seminar. Have a wonderful day!',
        explanation: 'Polite, grateful, confirms action, and bids farewell with academic etiquette.',
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
