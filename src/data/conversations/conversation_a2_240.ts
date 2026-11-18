import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_240: ConversationDefinition = {
  id: 'conv_a2_240',
  title: 'Unit 16 Comprehensive Review & Communicative Mastery',
  cefr: 'A2',
  unitId: 'unit_a2_16',
  lessonLinks: ['lesson_a2_16_240'],
  estimatedMinutes: 5,
  scenario:
    'You attend your end-of-unit milestone communicative evaluation with Senior Community & Academic Evaluator Dr. Sharma at the civic center. You reflect across all themes of Unit 16—describing social connections, making and declining invitations, sharing cultural festival traditions, advocating for eco-habits and urban greening, evaluating news credibility, and mediating misunderstandings.',
  communicativeGoals: [
    'Synthesize communicative functions across Unit 16 (character descriptions, polite social plans, cultural comparisons, environmental actions, media literacy, and diplomatic mediation)',
    'Use complex A2 sentence structures including relative clauses with "who", clauses of purpose with "so that" and "in order to", and real conditionals ("if... will...")',
    'Demonstrate fluent, spontaneous communicative performance in academic and civic contexts',
    'Achieve full mastery of A2 Living Language competencies for Unit 16',
  ],
  canDoStatements: [
    'Can discuss a wide range of social, environmental, cultural, and community topics fluently',
    'Can apply diverse grammatical structures (relative clauses, conditionals, reported speech, modals) accurately',
    'Can participate in a multi-turn, low-scaffolding communicative review demonstrating A2 conversational mastery',
  ],
  characters: [
    {
      id: 'char_dr_sharma_evaluator',
      name: 'Dr. Sharma',
      role: 'Senior Academic & Communicative Competency Evaluator',
      avatar: '🏆',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'comprehensive',
        ipa: '/ˌkɒmprɪˈhensɪv/',
        partOfSpeech: 'adjective',
        meaning: 'Complete and including all elements or aspects of a subject or learning unit',
        exampleSentence: 'This review provides a comprehensive evaluation of your speaking skills.',
        translations: { hi: 'समग्र / व्यापक (कॉम्प्रिहेंसिव)' },
      },
      {
        word: 'synthesis',
        ipa: '/ˈsɪnθəsɪs/',
        partOfSpeech: 'noun',
        meaning: 'The combination of various concepts, methods, or ideas into a coherent whole',
        exampleSentence: 'Your responses demonstrate an impressive synthesis of social and environmental vocabulary.',
        translations: { hi: 'संश्लेषण / समग्र संयोजन (सिंथेसिस)' },
      },
      {
        word: 'competency',
        ipa: '/ˈkɒmpɪtənsi/',
        partOfSpeech: 'noun',
        meaning: 'The ability to do something successfully, efficiently, and with communicative ease',
        exampleSentence: 'You have achieved full communicative competency across all Unit 16 objectives.',
        translations: { hi: 'योग्यता / प्रवीणता (कॉम्पिटेंसी)' },
      },
      {
        word: 'milestone',
        ipa: '/ˈmaɪlstəʊn/',
        partOfSpeech: 'noun',
        meaning: 'A significant stage or event in the development or progress of someone or something',
        exampleSentence: 'Completing Lesson 240 is a major milestone in your English learning journey.',
        translations: { hi: 'मील का पत्थर / महत्वपूर्ण पड़ाव (माइलस्टोन)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Throughout Unit 16, I have developed my ability to discuss community life and sustainability.',
        functionCategory: 'Reflecting on unit learning progress with present perfect',
        exampleSentence: 'I have mastered expressing diplomatic compromises and environmental actions.',
      },
      {
        phrase: 'If we combine grassroots volunteering with green urban planning, our neighborhoods will flourish.',
        functionCategory: 'First conditional synthesis',
        exampleSentence: 'If we verify news sources, we prevent the spread of misinformation.',
      },
      {
        phrase: 'I used to struggle with diplomatic phrasing, but now I can mediate disputes amicably.',
        functionCategory: 'Contrasting past and present mastery using "used to"',
        exampleSentence: 'I used to feel nervous, but now I express opinions with confidence.',
      },
      {
        phrase: 'We must organize community initiatives so that all residents benefit from green spaces.',
        functionCategory: 'Purpose clause with "so that"',
        exampleSentence: 'We plant trees in order to cool our streets and protect wildlife habitats.',
      },
    ],
    grammar: {
      title: 'Unit 16 Grammatical Synthesis for Communicative Mastery',
      conceptExplanation:
        '1. Relative Clauses & Character: "She is a dependable leader who coordinates community projects."\n2. Real Conditionals & Environmental Cause: "If we protect wetlands, biodiversity will thrive."\n3. Purpose with "So that" & "In order to": "We raise funds so that children can attend school."\n4. Past vs. Present: "I used to check social media constantly, but now I set digital boundaries."',
      patternFormula: '[Relative Clause: who] + [First Conditional: If + Present, will] + [Purpose: so that / in order to] + [Past vs Present: used to vs now]',
      contrastExamples: [
        {
          incorrect: 'If we will volunteer, community will improve.',
          correct: 'If we volunteer, our community will improve.',
          explanation: 'Present simple in the if-clause.',
        },
        {
          incorrect: 'I used to volunteer but now I am volunteer more.',
          correct: 'I used to volunteer occasionally, but now I take part regularly.',
          explanation: '"Used to + base verb" contrasted with present simple routine.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Dr. Sharma',
        text: 'Welcome to your Unit 16 communicative evaluation! Let’s reflect on your progress in discussing social, cultural, and environmental topics.',
        translation: 'आपके यूनिट 16 के संवादात्मक मूल्यांकन में आपका स्वागत है! आइए सामाजिक, सांस्कृतिक और पर्यावरणीय विषयों पर चर्चा करने में आपकी प्रगति पर विचार करें।',
      },
      {
        speaker: 'Learner',
        text: 'Thank you, Dr. Sharma! Throughout this unit, I have learned to express environmental solutions, evaluate media critically, and propose diplomatic compromises.',
        translation: 'धन्यवाद, डॉ. शर्मा! इस पूरी इकाई के दौरान, मैंने पर्यावरणीय समाधान व्यक्त करना, मीडिया का गंभीर मूल्यांकन करना और राजनयिक समझौते प्रस्तावित करना सीखा है।',
      },
      {
        speaker: 'Dr. Sharma',
        text: 'That is outstanding! Your ability to synthesize complex ideas in clear A2 English is truly commendable.',
        translation: 'यह उत्कृष्ट है! स्पष्ट A2 अंग्रेजी में जटिल विचारों को संश्लेषित करने की आपकी क्षमता वास्तव में सराहनीय है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_240_1',
      type: 'fill_blank',
      prompt: 'Complete with the first conditional: "If we ______ (work / will work) together, our neighborhood will flourish."',
      options: [
        { id: 'opt_1', text: 'work', isCorrect: true },
        { id: 'opt_2', text: 'will work', isCorrect: false },
        { id: 'opt_3', text: 'worked', isCorrect: false },
      ],
      correctAnswer: 'work',
      explanation: 'In the first conditional, the if-clause uses present simple.',
    },
    {
      id: 'cp_240_2',
      type: 'multiple_choice',
      prompt: 'Which sentence best synthesizes purpose and community action?',
      options: [
        { id: 'opt_1', text: 'We organize volunteer cleanups so that our local wetlands remain clean and safe.', isCorrect: true },
        { id: 'opt_2', text: 'We organize volunteer cleanups so that to keep wetlands clean.', isCorrect: false },
        { id: 'opt_3', text: 'We organize cleanups in order so that wetlands are clean.', isCorrect: false },
      ],
      correctAnswer: 'We organize volunteer cleanups so that our local wetlands remain clean and safe.',
      explanation: '"So that + subject + present verb" accurately expresses purpose.',
    },
    {
      id: 'cp_240_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [I have achieved / communicative competency across / all core themes / of Unit 16]',
      correctAnswer: 'I have achieved communicative competency across all core themes of Unit 16',
      explanation: 'Present perfect synthesis statement.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_240_1',
      prompt: 'Construct a sentence stating that by combining green urban initiatives and community volunteering, we improve local quality of life.',
      scenarioContext: 'Explaining your unit synthesis to Dr. Sharma.',
      targetStructure: 'By combining green urban initiatives and community volunteering, we can improve our quality of life.',
      wordBank: ['By combining green urban', 'initiatives and community volunteering,', 'we can improve our', 'quality of life,', 'Dr. Sharma.'],
      acceptableSolutions: [
        'By combining green urban initiatives and community volunteering, we can improve our quality of life.',
        'By combining green initiatives and volunteering, we improve quality of life.',
      ],
      explanation: '"By + gerund" structure synthesizing urban and environmental themes.',
    },
    {
      id: 'sc_240_2',
      prompt: 'Construct a sentence stating that you used to feel hesitant, but now you can resolve misunderstandings diplomatically.',
      scenarioContext: 'Reflecting on personal growth.',
      targetStructure: 'I used to feel hesitant, but now I can resolve misunderstandings calmly and diplomatically.',
      wordBank: ['I used to feel hesitant,', 'but now I can resolve', 'misunderstandings calmly and', 'diplomatically,', 'Dr. Sharma.'],
      acceptableSolutions: [
        'I used to feel hesitant, but now I can resolve misunderstandings calmly and diplomatically.',
        'I used to feel hesitant, but now I mediate disputes diplomatically.',
      ],
      explanation: 'Contrast formula with "used to" and present simple modal.',
    },
  ],
  turns: [
    {
      id: 'turn_240_1',
      turnIndex: 1,
      partnerPrompt:
        'Good afternoon! Please have a seat. Welcome to your Unit 16 Communicative Mastery Evaluation. Looking across our lessons on social relationships, cultural traditions, and green initiatives, how has your ability to discuss community topics developed?',
      partnerAudioText:
        'Good afternoon! Please have a seat. Welcome to your Unit 16 Communicative Mastery Evaluation. Looking across our lessons on social relationships, cultural traditions, and green initiatives, how has your ability to discuss community topics developed?',
      partnerQuestionHindi:
        'शुभ दोपहर! कृपया बैठ जाइए। आपके यूनिट 16 कम्युनिकेटिव मास्टरी मूल्यांकन में आपका स्वागत है। सामाजिक संबंधों, सांस्कृतिक परंपराओं और हरित पहलों पर हमारे पाठों को देखते हुए, सामुदायिक विषयों पर चर्चा करने की आपकी क्षमता कैसे विकसित हुई है?',
      expectedFunction: 'Greeting Dr. Sharma and synthesizing learning across Unit 16 using present perfect and descriptive vocabulary',
      contextGoal: 'Greet Dr. Sharma, state progress in discussing social relationships, eco-habits, and community projects with confidence',
      targetVocabulary: ['Good afternoon Dr. Sharma', 'comprehensive', 'synthesis', 'developed', 'community initiatives', 'sustainability'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Good afternoon, Dr. Sharma! Throughout Unit 16, I have developed my ability to discuss community initiatives, express environmental solutions with conditionals, and compare cultural traditions fluently.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Dr. Sharma! My confidence has grown significantly. I can now describe interpersonal qualities, make polite social plans, and advocate for sustainability.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Thank you, Dr. Sharma. I have built strong communicative competencies in discussing urban greening, evaluating media critically, and engaging in community dialogues.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_sharma',
          patterns: ['good afternoon', 'hello', 'dr. sharma', 'thank you'],
          required: true,
        },
        {
          name: 'unit16_synthesis',
          patterns: ['developed', 'community', 'sustainability', 'initiatives', 'traditions', 'competency', 'confidence', 'green'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_240_1_too_brief',
          pattern: /^i speak english good now\.$/i,
          errorType: 'structure',
          message: 'Provide a structured synthesis: "Good afternoon, Dr. Sharma! Throughout Unit 16, I have mastered discussing community life and eco-habits."',
          correctionPattern: 'Good afternoon, Dr. Sharma! I have developed my ability to discuss community projects and sustainability.',
        },
      ],
      remediationPractice: {
        id: 'rem_240_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I have ______ (developed) my communication skills."',
        options: [
          { id: 'r1', text: 'developed', isCorrect: true },
          { id: 'r2', text: 'develop to', isCorrect: false },
        ],
        correctAnswer: 'developed',
        explanation: 'Present perfect participle after "have".',
      },
    },
    {
      id: 'turn_240_2',
      turnIndex: 2,
      partnerPrompt:
        'That is a thorough and mature reflection! Now, let’s test your practical diplomacy and ecological reasoning. If an urban neighborhood faces both heavy traffic pollution and neighborhood noise complaints, what comprehensive solutions would you propose?',
      partnerAudioText:
        'That is a thorough and mature reflection! Now, let’s test your practical diplomacy and ecological reasoning. If an urban neighborhood faces both heavy traffic pollution and neighborhood noise complaints, what comprehensive solutions would you propose?',
      partnerQuestionHindi:
        'यह एक संपूर्ण और परिपक्व चिंतन है! अब, आइए आपकी व्यावहारिक कूटनीति और पारिस्थितिक तर्क का परीक्षण करें। यदि किसी शहरी इलाके में भारी यातायात प्रदूषण और पड़ोस के शोर की शिकायत दोनों का सामना करना पड़ता है, तो आप क्या व्यापक समाधान प्रस्तावित करेंगे?',
      expectedFunction: 'Synthesizing environmental solutions (pedestrianization, tree canopies) and diplomatic mediation (quiet hours compromise) using conditionals and "so that"',
      contextGoal: 'Propose pedestrianizing central streets in order to lower pollution, and establishing mutual quiet hour agreements to mediate noise disputes',
      targetVocabulary: ['pedestrianized', 'tree canopy', 'in order to reduce', 'compromise', 'so that', 'amicable'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'To tackle pollution, the city should pedestrianize main avenues and plant tree canopies in order to cool streets. For noise issues, neighbors can hold mediation circles to reach an amicable compromise on evening quiet hours.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'If we expand cycling lanes and electric transit, air quality will improve. Furthermore, using diplomatic communication allows residents to resolve noise misunderstandings peacefully.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I propose green infrastructure to reduce emissions, combined with community mediation agreements so that all neighbors enjoy a peaceful, healthy environment.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'complex_solution_synthesis',
          patterns: ['pedestrianize', 'tree canopy', 'pollution', 'in order to', 'so that', 'compromise', 'mediation', 'quiet hours', 'amicable'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_240_2_in_order_to_ing',
          pattern: /in order to reducing/i,
          errorType: 'grammar',
          message: 'Use base verb after "in order to": "in order to reduce pollution."',
          correctionPattern: 'The city should plant trees in order to reduce urban heat.',
        },
      ],
      remediationPractice: {
        id: 'rem_240_2',
        type: 'multiple_choice',
        prompt: 'Which sentence best combines environmental action and diplomatic mediation?',
        options: [
          { id: 'r1', text: 'We should pedestrianize streets to reduce fumes and establish mediation circles so that neighbors can resolve disputes amicably.', isCorrect: true },
          { id: 'r2', text: 'We should to pedestrianize streets and stop noise without talk.', isCorrect: false },
        ],
        correctAnswer: 'We should pedestrianize streets to reduce fumes and establish mediation circles so that neighbors can resolve disputes amicably.',
        explanation: 'Clear synthesis of purpose, green infrastructure, and diplomatic mediation.',
      },
    },
    {
      id: 'turn_240_3',
      turnIndex: 3,
      partnerPrompt:
        'Exceptional synthesis! You effortlessly combined environmental science, purpose clauses, and conflict resolution diplomacy. You have met all competency benchmarks for Unit 16 with flying colors! Congratulations on completing this milestone!',
      partnerAudioText:
        'Exceptional synthesis! You effortlessly combined environmental science, purpose clauses, and conflict resolution diplomacy. You have met all competency benchmarks for Unit 16 with flying colors! Congratulations on completing this milestone!',
      partnerQuestionHindi:
        'असाधारण संश्लेषण! आपने पर्यावरण विज्ञान, उद्देश्य उपवाक्यों और संघर्ष समाधान कूटनीति को सहजता से जोड़ा। आपने उड़ते रंगों के साथ यूनिट 16 के सभी योग्यता मानकों को पूरा किया है! इस मील के पत्थर को पूरा करने पर बधाई!',
      expectedFunction: 'Expressing heartfelt gratitude, celebrating the completion of Unit 16, and stating eagerness for future learning milestones',
      contextGoal: 'Thank Dr. Sharma warmly, acknowledge the milestone of completing Lesson 240, and express confidence in your English speaking journey',
      targetVocabulary: ['Thank you so much Dr. Sharma', 'milestone', 'Lesson 240', 'competency', 'confidence', 'Unit 16'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Thank you so much for your guidance and evaluation, Dr. Sharma! Completing Lesson 240 and Unit 16 is a major milestone for me, and I look forward to continuing my English journey with confidence!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Thank you, Dr. Sharma! I really appreciate your support. Reaching this milestone gives me great confidence to speak English naturally in everyday community life.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Thank you very much, Dr. Sharma! I am proud to have completed Unit 16. Have a wonderful afternoon!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'gratitude_and_milestone',
          patterns: ['thank you', 'dr. sharma', 'milestone', 'confidence', 'unit 16', 'lesson 240', 'guidance', 'appreciate'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_240_3_short_bye',
          pattern: /^thanks bye$/i,
          errorType: 'interaction',
          message: 'Close with formal warmth and pride: "Thank you so much, Dr. Sharma! Completing Unit 16 is a wonderful milestone."',
          correctionPattern: 'Thank you so much, Dr. Sharma! I am thrilled to reach this milestone.',
        },
      ],
      remediationPractice: {
        id: 'rem_240_3',
        type: 'fill_blank',
        prompt: 'Fill in: "Reaching this milestone gives me great ______ (confidence)."',
        options: [
          { id: 'r1', text: 'confidence', isCorrect: true },
          { id: 'r2', text: 'confident to', isCorrect: false },
        ],
        correctAnswer: 'confidence',
        explanation: 'Noun form "confidence" following the adjective "great".',
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
