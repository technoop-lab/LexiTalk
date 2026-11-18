import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_217: ConversationDefinition = {
  id: 'conv_a2_217',
  title: 'Skills, Strengths, Weaknesses & Personal Progress',
  cefr: 'A2',
  unitId: 'unit_a2_15',
  lessonLinks: ['lesson_a2_15_217'],
  estimatedMinutes: 5,
  scenario:
    'You are having a one-on-one progress review meeting with language tutor Sarah. You evaluate your current English skills, identify strengths ("I am good at reading and vocabulary") and areas you struggle with ("I struggle with fast listening and prepositions"), and reflect on how much you have improved compared to last semester.',
  communicativeGoals: [
    'Describe strengths and weaknesses using "be good at + -ing" and "struggle with + noun/-ing"',
    'Contrast past difficulties with current capability using "used to" versus "now I can / have improved"',
    'Evaluate personal language proficiency and communicative competence objectively',
    'Set targeted action points for ongoing skills development',
  ],
  canDoStatements: [
    'Can describe personal abilities, strengths, and weaknesses using simple A2 phrases',
    'Can talk about progress made over time comparing past and present skills',
    'Can discuss areas for improvement during a learning review',
  ],
  characters: [
    {
      id: 'char_sarah_tutor',
      name: 'Sarah',
      role: 'Language & Skills Tutor',
      avatar: '👩‍🏫',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'proficiency',
        ipa: '/prəˈfɪʃnsi/',
        partOfSpeech: 'noun',
        meaning: 'A high degree of competence or skill in a language or field',
        exampleSentence: 'My speaking proficiency has improved significantly this year.',
        translations: { hi: 'प्रवीणता / दक्षता (प्रोफिशिएंसी)' },
      },
      {
        word: 'competence',
        ipa: '/ˈkɒmpɪtəns/',
        partOfSpeech: 'noun',
        meaning: 'The ability to do something successfully or effectively',
        exampleSentence: 'She demonstrated great communicative competence during the presentation.',
        translations: { hi: 'क्षमता / योग्यता (कॉम्पिटेंस)' },
      },
      {
        word: 'strength',
        ipa: '/streŋθ/',
        partOfSpeech: 'noun',
        meaning: 'A good quality or feature; something someone is especially good at',
        exampleSentence: 'Grammar and reading comprehension are my strongest areas.',
        translations: { hi: 'ताकत / मजबूती (स्ट्रेंथ)' },
      },
      {
        word: 'weakness',
        ipa: '/ˈwiːknəs/',
        partOfSpeech: 'noun',
        meaning: 'A disadvantage or feature that is not as good as others; an area needing improvement',
        exampleSentence: 'My main weakness is understanding fast native speakers on the phone.',
        translations: { hi: 'कमजोरी / सुधार का क्षेत्र (वीकनेस)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am quite good at writing, but I still struggle with listening to fast dialogue.',
        functionCategory: 'Contrasting strengths and weaknesses',
        exampleSentence: 'I am good at grammar but struggle with pronunciation.',
      },
      {
        phrase: 'I used to feel nervous when speaking, but now I feel much more confident.',
        functionCategory: 'Contrasting past and present capability',
        exampleSentence: 'I used to find reading hard, but now I read news articles easily.',
      },
      {
        phrase: 'How can I build more natural fluency in everyday conversations?',
        functionCategory: 'Asking for targeted advice',
        exampleSentence: 'What exercises do you recommend for listening accuracy?',
      },
      {
        phrase: 'I have made solid progress in vocabulary expansion.',
        functionCategory: 'Self-assessment of progress',
        exampleSentence: 'My speaking confidence has grown a lot.',
      },
    ],
    grammar: {
      title: 'Describing Competence: Good At / Struggle With & "Used To" vs Now',
      conceptExplanation:
        '1. "Be good at / bad at + verb-ing / noun":\n   - "I am good at speaking." (NOT "good in speaking")\n   - "I am bad at remembering irregular verbs."\n2. "Struggle with + noun / verb-ing":\n   - "I struggle with pronunciation."\n3. "Used to [Base Verb]... BUT now I [Present Verb]":\n   - "I used to make many grammar mistakes, but now I self-correct easily."',
      patternFormula: 'I am good at [Verb-ing], but I struggle with [Noun/-ing]. I used to [Past state], but now [Present state]',
      contrastExamples: [
        {
          incorrect: 'I am good in speaking English.',
          correct: 'I am good at speaking English.',
          explanation: 'Always use the preposition "at" with "good/bad" (good at, not good in).',
        },
        {
          incorrect: 'I use to struggle with listening.',
          correct: 'I used to struggle with listening.',
          explanation: 'Use "used to" (with -d) to refer to past habits or states.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Sarah',
        text: 'Welcome to your mid-term progress review! How do you feel about your English skills compared to when you started?',
        translation: 'आपकी मध्य-सत्र प्रगति समीक्षा में आपका स्वागत है! जब आपने शुरुआत की थी उसकी तुलना में अब आप अपने अंग्रेजी कौशल के बारे में कैसा महसूस करते हैं?',
      },
      {
        speaker: 'Learner',
        text: 'I feel much more confident! I used to hesitate a lot, but now I am good at expressing my daily thoughts.',
        translation: 'मैं बहुत अधिक आश्वस्त महसूस करता हूँ! मैं पहले बहुत हिचकिचाता था, लेकिन अब मैं अपने दैनिक विचारों को व्यक्त करने में अच्छा हूँ।',
      },
      {
        speaker: 'Sarah',
        text: 'That is wonderful progress! What skill do you still struggle with the most?',
        translation: 'यह अद्भुत प्रगति है! आपको अभी भी किस कौशल में सबसे अधिक कठिनाई होती है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_217_1',
      type: 'fill_blank',
      prompt: 'Complete with the correct preposition: "She is remarkably good ______ (at / in / with) writing essays."',
      options: [
        { id: 'opt_1', text: 'at', isCorrect: true },
        { id: 'opt_2', text: 'in', isCorrect: false },
        { id: 'opt_3', text: 'with', isCorrect: false },
      ],
      correctAnswer: 'at',
      explanation: 'We say "good at + -ing".',
    },
    {
      id: 'cp_217_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly contrasts past difficulty with current progress?',
      options: [
        { id: 'opt_1', text: 'I used to find listening difficult, but now I understand podcasts easily.', isCorrect: true },
        { id: 'opt_2', text: 'I use to find listening difficult but now I understand.', isCorrect: false },
        { id: 'opt_3', text: 'I was used to find listening difficult.', isCorrect: false },
      ],
      correctAnswer: 'I used to find listening difficult, but now I understand podcasts easily.',
      explanation: '"used to + base verb" contrasts with "now I + present verb".',
    },
    {
      id: 'cp_217_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [I struggle with / but / I am good at / reading comprehension / fast speech]',
      correctAnswer: 'I am good at reading comprehension but I struggle with fast speech',
      explanation: 'Formula: Good at [Strength] + but + struggle with [Weakness].',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_217_1',
      prompt: 'Construct a sentence stating that you are good at learning vocabulary but struggle with English prepositions.',
      scenarioContext: 'Assessing your strengths and weaknesses with Sarah.',
      targetStructure: 'I am good at learning new vocabulary, but I struggle with prepositions.',
      wordBank: ['I am good at', 'learning new vocabulary,', 'but I struggle', 'with prepositions', 'in English grammar.'],
      acceptableSolutions: [
        'I am good at learning new vocabulary, but I struggle with prepositions.',
        'I am good at vocabulary, but I struggle with prepositions.',
      ],
      explanation: 'Competence contrast formula: good at X but struggle with Y.',
    },
    {
      id: 'sc_217_2',
      prompt: 'Construct a sentence contrasting past fear of speaking with current confidence.',
      scenarioContext: 'Reflecting on personal progress.',
      targetStructure: 'I used to be afraid of speaking, but now I feel confident in class conversations.',
      wordBank: ['I used to be afraid', 'of speaking,', 'but now I feel confident', 'in class conversations,', 'Sarah.'],
      acceptableSolutions: [
        'I used to be afraid of speaking, but now I feel confident in class conversations.',
        'I used to fear speaking, but now I feel confident.',
      ],
      explanation: 'Past vs present progress formula with "used to".',
    },
  ],
  turns: [
    {
      id: 'turn_217_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi! It is great to see you for our mid-semester progress review. Let us evaluate your language journey. What do you feel are your biggest strengths in English right now?',
      partnerAudioText:
        'Hi! It is great to see you for our mid-semester progress review. Let us evaluate your language journey. What do you feel are your biggest strengths in English right now?',
      partnerQuestionHindi:
        'नमस्ते! हमारे मध्य-सत्र प्रगति समीक्षा के लिए आपसे मिलकर बहुत अच्छा लगा। आइए आपकी भाषा यात्रा का मूल्यांकन करें। आपको क्या लगता है कि इस समय अंग्रेजी में आपकी सबसे बड़ी ताकत क्या है?',
      expectedFunction: 'Stating strengths using "good at + -ing/noun" with specific examples',
      contextGoal: 'Explain your strengths (e.g. good at reading comprehension, writing clear sentences, and learning vocabulary)',
      targetVocabulary: ['good at', 'strengths', 'reading', 'vocabulary', 'writing', 'sentences', 'Sarah'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hi Sarah! I am quite good at reading articles and learning new vocabulary, and I write clear short paragraphs.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Sarah. My biggest strength is reading comprehension. I’m also good at memorizing grammar rules and building sentences.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Hi Sarah. I think my strongest areas are reading and written communication. I feel very comfortable reading news articles and textbooks.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'strength_formula',
          patterns: ['good at', 'strengths', 'strongest', 'comfortable'],
          required: true,
        },
        {
          name: 'skill_areas',
          patterns: ['reading', 'vocabulary', 'writing', 'paragraphs', 'grammar', 'sentences', 'sarah'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_217_1_good_in',
          pattern: /good in (reading|speaking|writing|vocabulary)/i,
          errorType: 'grammar',
          message: 'Say "good at reading", not "good in reading".',
          correctionPattern: 'I am good at reading and learning vocabulary.',
        },
      ],
      remediationPractice: {
        id: 'rem_217_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I am good ______ (at) writing emails."',
        options: [
          { id: 'r1', text: 'at', isCorrect: true },
          { id: 'r2', text: 'in', isCorrect: false },
        ],
        correctAnswer: 'at',
        explanation: 'Collocation: "good at + -ing".',
      },
    },
    {
      id: 'turn_217_2',
      turnIndex: 2,
      partnerPrompt:
        'Your reading comprehension and writing have indeed improved remarkably! On the flip side, what areas or skills do you still struggle with the most?',
      partnerAudioText:
        'Your reading comprehension and writing have indeed improved remarkably! On the flip side, what areas or skills do you still struggle with the most?',
      partnerQuestionHindi:
        'आपकी पठन समझ और लेखन में वास्तव में उल्लेखनीय सुधार हुआ है! दूसरी तरफ, आपको अभी भी किन क्षेत्रों या कौशलों में सबसे अधिक कठिनाई होती है?',
      expectedFunction: 'Identifying weaknesses using "struggle with" and contrasting with past progress',
      contextGoal: 'Explain what you struggle with (e.g. fast listening comprehension and spontaneous speaking under pressure)',
      targetVocabulary: ['struggle with', 'listening', 'fast speech', 'spontaneous', 'pronunciation', 'prepositions'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I still struggle with understanding fast native speech and using prepositions correctly when speaking quickly.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I struggle with spontaneous conversations. When someone speaks rapidly, I sometimes get lost or hesitate.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'My main weakness is fast listening comprehension, especially understanding connected speech and colloquial accents.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'struggle_formula',
          patterns: ['struggle with', 'weakness', 'difficult', 'hesitate', 'hard'],
          required: true,
        },
        {
          name: 'weakness_areas',
          patterns: ['listening', 'fast speech', 'prepositions', 'conversations', 'spontaneous', 'pronunciation', 'connected speech', 'accents'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_217_2_struggle_to',
          pattern: /struggle to listening/i,
          errorType: 'grammar',
          message: 'Say "I struggle with listening", using preposition "with".',
          correctionPattern: 'I struggle with listening to fast speech.',
        },
      ],
      remediationPractice: {
        id: 'rem_217_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly expresses a learning weakness?',
        options: [
          { id: 'r1', text: 'I struggle with understanding fast listening tracks.', isCorrect: true },
          { id: 'r2', text: 'I struggle in understand fast track.', isCorrect: false },
        ],
        correctAnswer: 'I struggle with understanding fast listening tracks.',
        explanation: '"struggle with + -ing" is the accurate structure.',
      },
    },
    {
      id: 'turn_217_3',
      turnIndex: 3,
      partnerPrompt:
        'That is very common at the A2 level. When we compare where you are today with three months ago, how has your speaking confidence changed?',
      partnerAudioText:
        'That is very common at the A2 level. When we compare where you are today with three months ago, how has your speaking confidence changed?',
      partnerQuestionHindi:
        'A2 स्तर पर यह बहुत आम है। जब हम तीन महीने पहले की तुलना में आज की स्थिति से करते हैं, तो आपके बोलने के आत्मविश्वास में क्या बदलाव आया है?',
      expectedFunction: 'Contrasting past and present capability using "used to" versus "now I can" and asking Sarah for practice tips',
      contextGoal: 'Explain that you used to freeze and translate word by word, but now you can express ideas smoothly, and ask Sarah what practice she recommends for listening',
      targetVocabulary: ['used to', 'translate', 'now I can', 'confidence', 'What do you recommend', 'Sarah', 'improved'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I used to freeze and translate every word in my head, but now I speak much more naturally! What exercises do you recommend for my listening, Sarah?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I used to feel very nervous speaking in front of the class, but now I participate actively. What should I practice to improve my listening speed?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Three months ago I used to avoid group discussions, whereas now I contribute with confidence. What specific resources would help me bridge my listening gap?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'used_to_contrast',
          patterns: ['used to', 'freeze', 'translate', 'nervous', 'avoid', 'three months ago'],
          required: true,
        },
        {
          name: 'now_improvement',
          patterns: ['now', 'speak', 'naturally', 'participate', 'confidence', 'contribute'],
          required: true,
        },
        {
          name: 'recommendation_inquiry',
          patterns: ['recommend', 'what should i', 'what resources', 'listening', 'sarah'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_217_3_no_used_to',
          pattern: /^before i was nervous now i speak\.$/i,
          errorType: 'structure',
          message: 'Use "used to": "I used to be nervous, but now I speak with confidence. What do you recommend, Sarah?"',
          correctionPattern: 'I used to feel nervous, but now I speak with confidence.',
        },
      ],
      remediationPractice: {
        id: 'rem_217_3',
        type: 'fill_blank',
        prompt: 'Fill in: "I ______ (used to) translate every word in my head."',
        options: [
          { id: 'r1', text: 'used to', isCorrect: true },
          { id: 'r2', text: 'use to', isCorrect: false },
        ],
        correctAnswer: 'used to',
        explanation: 'Past habit/state: "used to".',
      },
    },
    {
      id: 'turn_217_4',
      turnIndex: 4,
      partnerPrompt:
        'I recommend listening to 5-minute A2 news podcasts with subtitles twice a day, then shadowing the speaker out loud! You have made phenomenal progress this term. Keep up this wonderful dedication!',
      partnerAudioText:
        'I recommend listening to 5-minute A2 news podcasts with subtitles twice a day, then shadowing the speaker out loud! You have made phenomenal progress this term. Keep up this wonderful dedication!',
      partnerQuestionHindi:
        'मैं दिन में दो बार उपशीर्षक (subtitles) के साथ 5 मिनट के A2 समाचार पॉडकास्ट सुनने और फिर वक्ता की ज़ोर से नकल (shadowing) करने की सलाह देती हूँ! आपने इस सत्र में अभूतपूर्व प्रगति की है। इस शानदार समर्पण को बनाए रखें!',
      expectedFunction: 'Closing the progress review with positive commitment and thanking the tutor',
      contextGoal: 'Thank Sarah for the podcasts recommendation and encouragement, and commit to practicing shadowing daily',
      targetVocabulary: ['Thank you', 'Sarah', 'podcasts', 'shadowing', 'daily', 'encouragement', 'progress'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Thank you so much for the great advice and encouragement, Sarah! I will start listening to the podcasts and practice shadowing every day.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'That podcast shadowing tip sounds fantastic. Thank you for evaluating my progress today, Sarah. I’m motivated to keep improving!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Thanks a million, Sarah! Setting clear action points gives me great direction. I’ll definitely incorporate daily podcast shadowing into my routine.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'gratitude_for_review',
          patterns: ['thank you', 'thanks', 'sarah', 'advice', 'encouragement', 'progress', 'evaluating'],
          required: true,
        },
        {
          name: 'action_commitment',
          patterns: ['podcasts', 'shadowing', 'every day', 'daily', 'improving', 'routine', 'motivated'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_217_4_short',
          pattern: /^(thanks|ok)$/i,
          errorType: 'interaction',
          message: 'Close with positive commitment: "Thank you for the advice, Sarah! I will practice shadowing every day."',
          correctionPattern: 'Thank you for the advice, Sarah! I will practice every day.',
        },
      ],
      remediationPractice: {
        id: 'rem_217_4',
        type: 'multiple_choice',
        prompt: 'Which response closes the progress review with motivation and gratitude?',
        options: [
          { id: 'r1', text: 'Thank you for the advice and encouragement, Sarah! I will practice shadowing daily.', isCorrect: true },
          { id: 'r2', text: 'Ok bye see ya.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for the advice and encouragement, Sarah! I will practice shadowing daily.',
        explanation: 'Enthusiastic, committed, and polite.',
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
