import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_270: ConversationDefinition = {
  id: 'conv_a2_270',
  title: 'Final A2 Living Language Mastery & Exit Preparation',
  cefr: 'A2',
  unitId: 'unit_a2_18',
  lessonLinks: ['lesson_a2_18_270'],
  estimatedMinutes: 7,
  scenario:
    'You are taking your official CEFR A2 Living Language Exit Interview with Senior Academic Evaluator Dr. Karen Bennett. In this final capstone conversation, you demonstrate complete conversational independence across the entire A1 and A2 curriculum: introducing your background and growth trajectory, explaining how you solve real-world problems and defend opinions with reasons, and sharing your long-term goals and cultural readiness for independent English communication.',
  communicativeGoals: [
    'Demonstrate comprehensive CEFR A2 conversational fluency, accuracy, and interactive repair',
    'Synthesize past progression ("used to...") and major communicative milestones ("I have achieved / learned to...")',
    'Explain real-world problem-solving methods and support opinions with clear multi-clause justifications',
    'Articulate future aspirations and engage the academic evaluator with a thoughtful closing inquiry',
  ],
  canDoStatements: [
    'Can conduct a comprehensive multi-turn conversational interview at full CEFR A2 proficiency',
    'Can describe past learning milestones, current communicative strengths, and future goals with ease',
    'Can explain everyday problems, justify personal opinions, and sustain an interactive dialogue without hesitation',
  ],
  characters: [
    {
      id: 'char_karen_evaluator',
      name: 'Dr. Karen Bennett',
      role: 'Senior Academic Language Evaluator',
      avatar: '🎓',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'trajectory',
        ipa: '/trəˈdʒektəri/',
        partOfSpeech: 'noun',
        meaning: 'A path, progression, or line of development followed by someone over time',
        exampleSentence: 'My English learning trajectory has transformed from basic words to confident speaking.',
        translations: { hi: 'प्रगति का मार्ग / विकास पथ (ट्रैजेक्टरी)' },
      },
      {
        word: 'competence',
        ipa: '/ˈkɒmpɪtəns/',
        partOfSpeech: 'noun',
        meaning: 'The ability to do something successfully or efficiently; proficiency',
        exampleSentence: 'You have demonstrated solid communicative competence at the A2 level.',
        translations: { hi: 'योग्यता / प्रवीणता (कॉम्पिटेंस)' },
      },
      {
        word: 'independent',
        ipa: '/ˌɪndɪˈpendənt/',
        partOfSpeech: 'adjective',
        meaning: 'Capable of thinking, acting, and communicating on one’s own without continuous assistance',
        exampleSentence: 'I feel ready to navigate real-world English environments as an independent speaker.',
        translations: { hi: 'स्वतंत्र / आत्मनिर्भर (इंडिपेंडेंट)' },
      },
      {
        word: 'aspiration',
        ipa: '/ˌæspəˈreɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'A hope or ambition of achieving something significant',
        exampleSentence: 'My future aspiration is to work with international project teams.',
        translations: { hi: 'महत्वाकांक्षा / उच्च अभिलाषा (एस्पिरेशन)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Looking back on my entire A1 and A2 journey, ...',
        functionCategory: 'Reflecting comprehensively on language progression',
        exampleSentence: 'Looking back on my entire A1 and A2 journey, I have built genuine speaking confidence.',
      },
      {
        phrase: 'What used to be difficult for me was..., but now...',
        functionCategory: 'Contrasting past struggles with present mastery',
        exampleSentence: 'What used to be difficult for me was forming spontaneous sentences, but now I express ideas easily.',
      },
      {
        phrase: 'Whenever I face a communication challenge, my strategy is to...',
        functionCategory: 'Explaining problem-solving and repair strategies',
        exampleSentence: 'Whenever I face a communication challenge, my strategy is to stay calm and ask clarifying questions.',
      },
      {
        phrase: 'My ultimate goal for independent English communication is...',
        functionCategory: 'Articulating future vision and exit readiness',
        exampleSentence: 'My ultimate goal for independent English communication is to participate in global professional discussions.',
      },
    ],
    grammar: {
      title: 'A2 Capstone Synthesis: Cumulative Tense Integration & Complex Discourse Linking',
      conceptExplanation:
        '1. Past habits & milestones: "I used to hesitate, but I have completed 270 lessons and mastered core everyday structures"\n2. Real-world argumentation: "In my opinion, [Stance] because [Reason 1] and also because [Reason 2]"\n3. Hypothetical & future planning: "In the future, I plan to + [Verb] so that I can [Outcome]"\n4. Active interactive question: "Dr. Bennett, based on our interview, what advice do you have for my next steps?"',
      patternFormula: 'I used to [Past Habit], but now I [Present Fluency]. I have learned to [Present Perfect Milestone]. In my opinion, [Stance] because [Reasons]. Looking forward, I plan to [Future Action].',
      contrastExamples: [
        {
          incorrect: 'I am finish A2 and I speak very good English now.',
          correct: 'I have completed the A2 curriculum and I now speak with confidence in everyday situations.',
          explanation: 'Use Present Perfect "have completed" and precise descriptive vocabulary.',
        },
        {
          incorrect: 'My next goal is to study English for I get job.',
          correct: 'My next goal is to continue practicing English so that I can work in international environments.',
          explanation: 'Use purpose clause connector "so that + clause".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Dr. Karen Bennett',
        text: 'Welcome to your official A2 Exit Conversational Interview! To begin, how would you describe your overall learning journey from your first A1 lessons to today?',
        translation: 'आपके आधिकारिक A2 निकास संवादात्मक साक्षात्कार में आपका स्वागत है! शुरुआत करने के लिए, आप अपने पहले A1 पाठों से लेकर आज तक की अपनी समग्र सीखने की यात्रा का वर्णन कैसे करेंगे?',
      },
      {
        speaker: 'Learner',
        text: 'Good morning Dr. Bennett. When I started at A1, I used to translate every single word and hesitated before speaking. Over the past 270 lessons, I have developed strong conversational fluency, learned to handle real-world situations, and gained confidence in expressing my thoughts.',
        translation: 'शुभ प्रभात डॉ. बेनेट। जब मैंने A1 में शुरुआत की थी, तो मैं हर एक शब्द का अनुवाद करता था और बोलने से पहले झिझकता था। पिछले 270 पाठों में, मैंने मजबूत संवादात्मक प्रवाह विकसित किया है, वास्तविक जीवन की स्थितियों को संभालना सीखा है, और अपने विचारों को व्यक्त करने में विश्वास हासिल किया है।',
      },
      {
        speaker: 'Dr. Karen Bennett',
        text: 'That is truly remarkable. How do you handle practical problems or disagreements when interacting with native and international speakers?',
        translation: 'यह वास्तव में उल्लेखनीय है। देशी और अंतर्राष्ट्रीय वक्ताओं के साथ बातचीत करते समय आप व्यावहारिक समस्याओं या असहमतियों को कैसे संभालते हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_270_1',
      type: 'fill_blank',
      prompt: 'Complete: "I used to struggle with grammar, but now I ______ (have achieved / am achieve / achieved) conversational fluency."',
      options: [
        { id: 'opt_1', text: 'have achieved', isCorrect: true },
        { id: 'opt_2', text: 'am achieve', isCorrect: false },
        { id: 'opt_3', text: 'achieved', isCorrect: false },
      ],
      correctAnswer: 'have achieved',
      explanation: 'Present Perfect "have achieved" highlights a cumulative accomplishment with present relevance.',
    },
    {
      id: 'cp_270_2',
      type: 'multiple_choice',
      prompt: 'Which response exemplifies comprehensive CEFR A2 exit readiness?',
      options: [
        { id: 'opt_1', text: 'I can explain daily problems, justify my opinions with clear reasons, and repair misunderstandings calmly.', isCorrect: true },
        { id: 'opt_2', text: 'I talk good and do all test nice.', isCorrect: false },
        { id: 'opt_3', text: 'I am finish lesson 270 and no problem now.', isCorrect: false },
      ],
      correctAnswer: 'I can explain daily problems, justify my opinions with clear reasons, and repair misunderstandings calmly.',
      explanation: 'Complete, multi-clause functional self-assessment matching CEFR A2 benchmarks.',
    },
    {
      id: 'cp_270_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [Looking forward to the future, / I feel fully prepared / for independent English communication]',
      correctAnswer: 'Looking forward to the future, I feel fully prepared for independent English communication',
      explanation: 'Participial introductory phrase + main clause + prepositional complement.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_270_1',
      prompt: 'Construct a sentence stating that I have achieved solid A2 conversational competence and can handle real-world challenges.',
      scenarioContext: 'Demonstrating exit readiness to Dr. Bennett.',
      targetStructure: 'I have achieved solid conversational competence and can handle real-world challenges.',
      wordBank: ['I have achieved solid', 'conversational competence and', 'can handle real-world', 'challenges.', 'am achieve competence', 'handling challenges of'],
      acceptableSolutions: [
        'I have achieved solid conversational competence and can handle real-world challenges.',
        'I have developed solid conversational competence and can handle real-world challenges.',
      ],
      explanation: 'Present Perfect compound predicate with modal capability.',
    },
    {
      id: 'sc_270_2',
      prompt: 'Construct a sentence stating that my future aspiration is to collaborate with international teams and continue growing.',
      scenarioContext: 'Sharing your future vision.',
      targetStructure: 'My future aspiration is to collaborate with international teams and continue growing.',
      wordBank: ['My future aspiration is', 'to collaborate with', 'international teams and', 'continue growing.', 'aspiration of collaborate', 'grow continuing'],
      acceptableSolutions: [
        'My future aspiration is to collaborate with international teams and continue growing.',
        'My aspiration is to collaborate with international teams and continue growing.',
      ],
      explanation: 'Subject noun phrase + linking verb + compound infinitive predicate.',
    },
  ],
  turns: [
    {
      id: 'turn_270_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning and welcome to your official CEFR A2 Living Language Exit Interview. I am Dr. Karen Bennett. Looking back from your very first A1 lesson to this final lesson 270, how has your ability to communicate in English transformed, and what were your greatest milestones?',
      partnerAudioText:
        'Good morning and welcome to your official CEFR A2 Living Language Exit Interview. I am Dr. Karen Bennett. Looking back from your very first A1 lesson to this final lesson 270, how has your ability to communicate in English transformed, and what were your greatest milestones?',
      partnerQuestionHindi:
        'शुभ प्रभात और आपके आधिकारिक CEFR A2 लिविंग लैंग्वेज एग्जिट इंटरव्यू में आपका स्वागत है। मैं डॉ. करेन बेनेट हूँ। अपने पहले A1 पाठ से लेकर इस अंतिम पाठ 270 तक पीछे मुड़कर देखते हुए, अंग्रेजी में संवाद करने की आपकी क्षमता में क्या बदलाव आया है, और आपके सबसे बड़े मील के पत्थर क्या थे?',
      expectedFunction: 'Delivering a comprehensive retrospective: greeting Dr. Bennett, contrasting past beginner struggles ("used to...") with present fluency ("now I can..."), and stating major milestones',
      contextGoal: 'Greet Dr. Bennett, explain that you used to feel shy and translate in your head, but now across 270 lessons you have learned to speak fluently, handle travel, and express opinions freely',
      targetVocabulary: ['Good morning Dr. Bennett', 'When I first started at A1', 'I used to feel nervous and translate in my head', 'Over these 270 lessons', 'I have built real conversational fluency', 'I have learned to navigate daily life, travel, and social interactions with confidence'],
      suggestedResponses: [
        {
          label: 'Independent Mastery Delivery',
          text: 'Good morning Dr. Bennett! It is an honor to speak with you today. When I first began my English journey at A1, I used to feel very nervous and hesitated because I was translating every word in my head. Over the course of 270 lessons, my English has transformed completely: I have built strong conversational fluency, learned to solve real-world problems, and gained the confidence to express my personal opinions and tell stories naturally.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Core Synthesis',
          text: 'Good morning Dr. Bennett. I used to struggle with basic words and sentence structure, but across A1 and A2, I have mastered everyday communication. Today I can handle travel disruptions, hotel bookings, debates, and personal stories with confidence.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_dr_bennett',
          patterns: ['good morning', 'hello', 'dr. bennett', 'dr bennett', 'dr. karen', 'dr karen', 'honor', 'evaluator'],
          required: true,
        },
        {
          name: 'progression_and_milestones',
          patterns: ['used to', 'translate', 'nervous', 'hesitate', 'struggle', '270', 'lessons', 'a1', 'a2', 'fluency', 'confidence', 'have learned', 'have built', 'problems', 'stories', 'opinions'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_270_1_honor_to_speaking',
          pattern: /honor to speaking with you/i,
          errorType: 'grammar',
          message: 'Say "It is an honor to speak with you" (infinitive after adjective).',
          correctionPattern: 'Good morning Dr. Bennett, it is an honor to speak with you.',
        },
      ],
      remediationPractice: {
        id: 'rem_270_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I have ______ (learned / learn) to speak with confidence."',
        options: [
          { id: 'r1', text: 'learned', isCorrect: true },
          { id: 'r2', text: 'learn', isCorrect: false },
        ],
        correctAnswer: 'learned',
        explanation: 'Present Perfect uses past participle "learned".',
      },
    },
    {
      id: 'turn_270_2',
      turnIndex: 2,
      partnerPrompt:
        'That is an impressive progression! Now, in everyday life, we often encounter unexpected problems, misunderstandings, or differing opinions. How do you handle practical dilemmas and defend your viewpoint constructively in English?',
      partnerAudioText:
        'That is an impressive progression! Now, in everyday life, we often encounter unexpected problems, misunderstandings, or differing opinions. How do you handle practical dilemmas and defend your viewpoint constructively in English?',
      partnerQuestionHindi:
        'यह एक प्रभावशाली प्रगति है! अब, दैनिक जीवन में, हम अक्सर अनपेक्षित समस्याओं, गलतफहमियों या भिन्न रायों का सामना करते हैं। आप व्यावहारिक दुविधाओं को कैसे संभालते हैं और अंग्रेजी में रचनात्मक रूप से अपने दृष्टिकोण का बचाव कैसे करते हैं?',
      expectedFunction: 'Explaining problem-solving & discussion strategies: using clarification/repair for misunderstandings, and supporting opinions with two distinct reasons',
      contextGoal: 'Explain that when facing issues, you stay calm and ask clarifying questions ("Could you explain that?"), and when giving opinions, you support them with logical reasons and respect differing viewpoints',
      targetVocabulary: ['Whenever I face an unexpected problem', 'my strategy is to stay calm and ask clarifying questions', 'use repair phrases like "What I mean is"', 'When giving my opinion', 'I provide two clear reasons with "because" and "also"', 'respect other perspectives with "I see your point, however"'],
      suggestedResponses: [
        {
          label: 'Independent Mastery Delivery',
          text: 'Whenever I encounter a practical problem or misunderstanding, my approach is to stay calm and use active repair strategies, such as asking "Could you clarify what you mean by that?" or saying "What I mean is..." to rephrase my idea. When discussing different viewpoints, I state my opinion clearly, support it with two solid reasons using "because" and "in addition", and acknowledge counter-arguments politely with "I see your point, however...".',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Core Synthesis',
          text: 'When a problem happens, I explain the situation step by step and ask for solutions. In discussions, I always support my opinions with clear reasons and listen respectfully to others so we can find a common compromise.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'problem_solving_repair',
          patterns: ['stay calm', 'clarify', 'repair', 'rephrase', 'explain', 'what i mean', 'questions', 'solutions', 'misunderstanding'],
          required: true,
        },
        {
          name: 'opinions_and_reasons',
          patterns: ['opinion', 'reasons', 'because', 'in addition', 'viewpoint', 'respect', 'i see your point', 'however', 'compromise'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_270_2_support_with_reasons_prep',
          pattern: /support my opinion from reasons/i,
          errorType: 'grammar',
          message: 'Say "support my opinion with reasons" (preposition "with").',
          correctionPattern: 'I support my opinions with clear reasons.',
        },
      ],
      remediationPractice: {
        id: 'rem_270_2',
        type: 'multiple_choice',
        prompt: 'Which response describes conversational problem-solving most accurately?',
        options: [
          { id: 'r1', text: 'I use repair phrases to clarify misunderstandings and support my opinions with clear reasons.', isCorrect: true },
          { id: 'r2', text: 'I am speak loud when people not understand my opinion.', isCorrect: false },
        ],
        correctAnswer: 'I use repair phrases to clarify misunderstandings and support my opinions with clear reasons.',
        explanation: 'Accurate strategic description in standard English.',
      },
    },
    {
      id: 'turn_270_3',
      turnIndex: 3,
      partnerPrompt:
        'Outstanding! You have demonstrated true CEFR A2 living language mastery today. As you step forward as an independent English speaker, what are your future aspirations, and what final question or thought do you have for me as your evaluator?',
      partnerAudioText:
        'Outstanding! You have demonstrated true CEFR A2 living language mastery today. As you step forward as an independent English speaker, what are your future aspirations, and what final question or thought do you have for me as your evaluator?',
      partnerQuestionHindi:
        'उत्कृष्ट! आपने आज सच्चे CEFR A2 लिविंग लैंग्वेज महारत का प्रदर्शन किया है। एक स्वतंत्र अंग्रेजी वक्ता के रूप में आगे बढ़ते हुए, आपकी भविष्य की क्या आकांक्षाएं हैं, और आपके मूल्यांकनकर्ता के रूप में मेरे लिए आपका क्या अंतिम प्रश्न या विचार है?',
      expectedFunction: 'Articulating future aspirations (professional growth, international travel, continued fluency) and asking Dr. Bennett an insightful closing question',
      contextGoal: 'State your goal to use English in international work and travel, express gratitude for completing A2, and ask Dr. Bennett: "What key practice do you recommend to maintain long-term fluency?"',
      targetVocabulary: ['As an independent English speaker', 'my future aspiration is to collaborate with global teams', 'travel the world with complete confidence', 'continue expanding my conversational depth', 'Thank you Dr. Bennett for this evaluation', 'What daily practice do you recommend most to maintain long-term fluency'],
      suggestedResponses: [
        {
          label: 'Independent Mastery Delivery',
          text: 'As an independent English speaker, my future aspiration is to collaborate effectively with international teams, travel the world with complete self-assurance, and continue deepening my language fluency. I am proud to have reached this milestone! Dr. Bennett, based on our conversation today, what daily habit or practice do you recommend most to ensure I continue flourishing as an independent speaker? Thank you so much for this wonderful interview!',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Core Synthesis',
          text: 'My future goal is to work in international environments and make friends worldwide without language barriers. Thank you Dr. Bennett for evaluating my progress! What is your best piece of advice for taking my speaking skills to even greater heights?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'future_aspirations',
          patterns: ['aspiration', 'goal', 'future', 'independent', 'collaborate', 'international', 'travel', 'work', 'teams', 'friends', 'flourish', 'grow'],
          required: true,
        },
        {
          name: 'evaluator_question_and_thanks',
          patterns: ['thank you', 'dr. bennett', 'dr bennett', 'advice', 'recommend', 'habit', 'practice', 'fluency', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_270_3_thank_you_for_this_interview_prep',
          pattern: /thank you to this interview/i,
          errorType: 'grammar',
          message: 'Say "Thank you for this wonderful interview" (preposition "for").',
          correctionPattern: 'Thank you so much for this wonderful interview, Dr. Bennett!',
        },
      ],
      remediationPractice: {
        id: 'rem_270_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [I feel ready for independent communication / and thank you Dr. Bennett / for this inspiring evaluation]',
        correctAnswer: 'I feel ready for independent communication and thank you Dr. Bennett for this inspiring evaluation',
        explanation: 'Readiness declaration + coordinate gratitude clause.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 85,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 80,
  },
};
