import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_261: ConversationDefinition = {
  id: 'conv_a2_261',
  title: 'Opinions, Reasons & Respectful Disagreement',
  cefr: 'A2',
  unitId: 'unit_a2_18',
  lessonLinks: ['lesson_a2_18_261'],
  estimatedMinutes: 5,
  scenario:
    'You are in a community debate forum with discussion leader Marcus. The topic is: "Is remote working from home better than working in a traditional office?" You state your viewpoint with two clear reasons, respond to a counter-argument with polite, respectful disagreement, and ask Marcus for his perspective.',
  communicativeGoals: [
    'State personal opinions and support them with two connected reasons in A2 English',
    'Use opinion markers: "In my opinion...", "I strongly believe that...", "From my experience..."',
    'Disagree politely and constructively: "I see your point, however...", "That is true to an extent, but..."',
    'Engage conversation partners by asking follow-up questions: "What is your view on this?"',
  ],
  canDoStatements: [
    'Can express a clear stance on a familiar topic and provide supporting reasons with "because" and "also"',
    'Can disagree politely without sounding dismissive',
    'Can ask follow-up questions to keep a respectful discussion active',
  ],
  characters: [
    {
      id: 'char_marcus_moderator',
      name: 'Marcus',
      role: 'Discussion Forum Moderator',
      avatar: '🎙️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'viewpoint',
        ipa: '/ˈvjuːpɔɪnt/',
        partOfSpeech: 'noun',
        meaning: 'A particular attitude or way of considering a matter; an opinion',
        exampleSentence: 'Everyone in our discussion shared an interesting viewpoint.',
        translations: { hi: 'दृष्टिकोण / राय (व्यूप्वाइंट)' },
      },
      {
        word: 'productivity',
        ipa: '/ˌprɒdʌkˈtɪvəti/',
        partOfSpeech: 'noun',
        meaning: 'The effectiveness of productive effort, especially in workplace tasks',
        exampleSentence: 'Working in a quiet home environment often increases daily productivity.',
        translations: { hi: 'उत्पादकता / कार्यक्षमता (प्रोडक्टिविटी)' },
      },
      {
        word: 'commute',
        ipa: '/kəˈmjuːt/',
        partOfSpeech: 'noun / verb',
        meaning: 'A regular journey of some distance to and from one’s place of work',
        exampleSentence: 'Working remotely eliminates the stress of a long daily commute.',
        translations: { hi: 'दैनिक यात्रा / आवागमन (कम्यूट)' },
      },
      {
        word: 'collaboration',
        ipa: '/kəˌlæbəˈreɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The action of working with someone to produce or create something',
        exampleSentence: 'In-person collaboration in an office helps teams brainstorm quickly.',
        translations: { hi: 'सहयोग / मिलकर काम करना (कोलैबोरेशन)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'In my opinion, the biggest advantage of... is that...',
        functionCategory: 'Stating a structured opinion and primary reason',
        exampleSentence: 'In my opinion, the biggest advantage of remote work is that it saves valuable time.',
      },
      {
        phrase: 'I see what you mean, but on the other hand...',
        functionCategory: 'Politely acknowledging before contrasting',
        exampleSentence: 'I see what you mean, but on the other hand, online tools make team communication very easy.',
      },
      {
        phrase: 'Another important reason is that...',
        functionCategory: 'Adding a secondary supporting reason',
        exampleSentence: 'Another important reason is that it provides a better work-life balance.',
      },
      {
        phrase: 'What is your perspective on this?',
        functionCategory: 'Inviting partner feedback',
        exampleSentence: 'What is your perspective on hybrid working models?',
      },
    ],
    grammar: {
      title: 'Structuring Opinions: Opinion Markers, Reason Linkers & Concession Clauses',
      conceptExplanation:
        '1. Stating stance: "In my opinion / I believe that + [Clause]"\n2. Giving reasons: "...because [Reason 1], and also because [Reason 2]"\n3. Polite concession + counterpoint: "I understand your point, but / however + [Counterpoint]"\n4. Active follow-up question: "What do you think about...?" or "How do you see it?"',
      patternFormula: 'In my opinion, [Subject + Verb] because [Reason 1] and also because [Reason 2]. I see what you mean, however [Counter-argument]. What is your view?',
      contrastExamples: [
        {
          incorrect: 'I am agree with remote work because easy.',
          correct: 'I agree that remote work is better because it saves commute time.',
          explanation: 'Say "I agree that..." (not "I am agree") and use complete clauses.',
        },
        {
          incorrect: 'You are wrong about offices.',
          correct: 'I see your point about office collaboration, however many tasks are done faster at home.',
          explanation: 'Use polite concession rather than blunt personal confrontation.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Marcus',
        text: 'Welcome to our debate! Today we are discussing whether working from home is more effective than working in an office. What is your stance?',
        translation: 'हमारी बहस में आपका स्वागत है! आज हम चर्चा कर रहे हैं कि क्या घर से काम करना कार्यालय में काम करने की तुलना में अधिक प्रभावी है। आपका क्या रुख है?',
      },
      {
        speaker: 'Learner',
        text: 'In my opinion, working from home is often better because it eliminates long daily commutes and allows workers to focus in a quieter environment.',
        translation: 'मेरी राय में, घर से काम करना अक्सर बेहतर होता है क्योंकि यह दैनिक लंबी यात्रा को समाप्त करता है और कर्मचारियों को शांत वातावरण में ध्यान केंद्रित करने की अनुमति देता है।',
      },
      {
        speaker: 'Marcus',
        text: 'A strong argument! But what about in-person teamwork and socializing with colleagues?',
        translation: 'एक मजबूत तर्क! लेकिन व्यक्तिगत टीम वर्क और सहकर्मियों के साथ घुलने-मिलने के बारे में क्या?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_261_1',
      type: 'fill_blank',
      prompt: 'Complete: "In my opinion, working remotely is beneficial ______ (because / because of) it saves money on commuting."',
      options: [
        { id: 'opt_1', text: 'because', isCorrect: true },
        { id: 'opt_2', text: 'because of', isCorrect: false },
      ],
      correctAnswer: 'because',
      explanation: 'Use "because" before the full clause "it saves money".',
    },
    {
      id: 'cp_261_2',
      type: 'multiple_choice',
      prompt: 'Which response demonstrates polite, respectful disagreement in a discussion?',
      options: [
        { id: 'opt_1', text: 'I understand your point, however video meetings allow effective team collaboration.', isCorrect: true },
        { id: 'opt_2', text: 'You are totally wrong and offices are useless.', isCorrect: false },
        { id: 'opt_3', text: 'I am disagree with you completely.', isCorrect: false },
      ],
      correctAnswer: 'I understand your point, however video meetings allow effective team collaboration.',
      explanation: 'Polite concession ("I understand your point, however...") + logical counterpoint.',
    },
    {
      id: 'cp_261_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [I see what you mean, / but on the other hand, / flexible hours improve productivity]',
      correctAnswer: 'I see what you mean, but on the other hand, flexible hours improve productivity',
      explanation: 'Concession chunk + contrast transition + main clause.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_261_1',
      prompt: 'Construct a sentence stating that in my opinion, working from home saves commute time and reduces daily stress.',
      scenarioContext: 'Stating your main argument to Marcus.',
      targetStructure: 'In my opinion, working from home saves commute time and reduces daily stress.',
      wordBank: ['In my opinion,', 'working from home', 'saves commute time', 'and reduces daily stress.', 'am opinion that', 'commute of time'],
      acceptableSolutions: [
        'In my opinion, working from home saves commute time and reduces daily stress.',
        'In my view, working from home saves commute time and reduces daily stress.',
      ],
      explanation: 'Opinion marker + gerund subject + compound predicate.',
    },
    {
      id: 'sc_261_2',
      prompt: 'Construct a sentence stating that I see what you mean, however hybrid models offer the best compromise.',
      scenarioContext: 'Offering a balanced counterpoint.',
      targetStructure: 'I see what you mean, however hybrid models offer the best compromise.',
      wordBank: ['I see what you mean,', 'however hybrid models', 'offer the best', 'compromise.', 'see what meaning', 'best of compromise'],
      acceptableSolutions: [
        'I see what you mean, however hybrid models offer the best compromise.',
        'I see your point, however hybrid models offer the best compromise.',
      ],
      explanation: 'Concession clause + conjunctive adverb "however" + main clause.',
    },
  ],
  turns: [
    {
      id: 'turn_261_1',
      turnIndex: 1,
      partnerPrompt:
        'Welcome to our debate forum! Today we are discussing whether remote work from home is better than working in a traditional office. What is your personal stance on this issue, and why?',
      partnerAudioText:
        'Welcome to our debate forum! Today we are discussing whether remote work from home is better than working in a traditional office. What is your personal stance on this issue, and why?',
      partnerQuestionHindi:
        'हमारे वाद-विवाद मंच में आपका स्वागत है! आज हम चर्चा कर रहे हैं कि क्या घर से रिमोट काम करना पारंपरिक कार्यालय में काम करने से बेहतर है। इस मुद्दे पर आपका व्यक्तिगत दृष्टिकोण क्या है, और क्यों?',
      expectedFunction: 'Stating your opinion clearly with two supporting reasons (e.g. saving commute time, higher productivity, quiet focus)',
      contextGoal: 'Greet Marcus, state that remote or hybrid work is advantageous, and provide two concrete reasons using "because" and "also"',
      targetVocabulary: ['Hello Marcus', 'In my opinion', 'remote working is better', 'because it saves commute time', 'and also improves focus', 'work-life balance'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffolding',
          text: 'Hello Marcus! In my opinion, working from home has great advantages. First, it saves hours of stressful commute time every day, and second, it allows people to work in a quiet environment which boosts productivity and work-life balance.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Independent Production',
          text: 'Hi Marcus. I believe remote work is often better because workers spend less money on transportation and have more flexible schedules to balance family and career.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_marcus',
          patterns: ['hello', 'hi', 'marcus', 'good morning', 'good afternoon'],
          required: true,
        },
        {
          name: 'opinion_and_reasons',
          patterns: ['in my opinion', 'i believe', 'remote', 'home', 'office', 'commute', 'time', 'travel', 'productivity', 'focus', 'quiet', 'balance', 'flexible'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_261_1_i_am_opinion',
          pattern: /i am opinion\b/i,
          errorType: 'structure',
          message: 'Say "In my opinion," or "My opinion is that...".',
          correctionPattern: 'In my opinion, remote working saves significant commute time.',
        },
      ],
      remediationPractice: {
        id: 'rem_261_1',
        type: 'fill_blank',
        prompt: 'Fill in: "______ (In / For) my opinion, flexible work hours are very helpful."',
        options: [
          { id: 'r1', text: 'In', isCorrect: true },
          { id: 'r2', text: 'For', isCorrect: false },
        ],
        correctAnswer: 'In',
        explanation: 'Standard phrase is "In my opinion".',
      },
    },
    {
      id: 'turn_261_2',
      turnIndex: 2,
      partnerPrompt:
        'A team member argues: "If everyone works from home, team communication breaks down, creative brainstorming stops, and people feel isolated." How do you politely respond to this counter-argument?',
      partnerAudioText:
        'A team member argues: "If everyone works from home, team communication breaks down, creative brainstorming stops, and people feel isolated." How do you politely respond to this counter-argument?',
      partnerQuestionHindi:
        'एक टीम सदस्य का तर्क है: "यदि हर कोई घर से काम करता है, तो टीम संचार टूट जाता है, रचनात्मक विचार-मंथन रुक जाता है, और लोग अलग-थलग महसूस करते हैं।" आप इस प्रति-तर्क का विनम्रतापूर्वक क्या उत्तर देंगे?',
      expectedFunction: 'Disagreeing politely using concession ("I understand that concern, however...") and suggesting modern tools or hybrid balance',
      contextGoal: 'Acknowledge the isolation concern respectfully, but point out that video calls, instant messaging, and hybrid meetups maintain strong teamwork',
      targetVocabulary: ['I understand your concern', 'however', 'modern digital tools', 'video calls and messaging', 'hybrid schedule', 'prevents isolation'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffolding',
          text: 'I understand that concern, however modern digital tools like video calls and instant chat allow continuous collaboration. Furthermore, a hybrid model where employees meet in person once or twice a week solves isolation while keeping the flexibility of working from home.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Independent Production',
          text: 'I see what you mean, but teams can stay connected through regular online meetings. In addition, scheduled social check-ins ensure that nobody feels left out.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'polite_concession',
          patterns: ['understand your concern', 'see what you mean', 'valid point', 'see your point', 'however', 'but on the other hand'],
          required: true,
        },
        {
          name: 'counter_reasoning',
          patterns: ['digital tools', 'video', 'calls', 'chat', 'hybrid', 'meet', 'collaboration', 'isolation', 'communication', 'connected'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_261_2_i_am_disagree',
          pattern: /i am disagree/i,
          errorType: 'grammar',
          message: 'Say "I disagree politely" or "I see things a bit differently" (never "I am disagree").',
          correctionPattern: 'I see what you mean, however modern communication tools help teams stay connected.',
        },
      ],
      remediationPractice: {
        id: 'rem_261_2',
        type: 'multiple_choice',
        prompt: 'Which opening phrase is grammatically correct and polite?',
        options: [
          { id: 'r1', text: 'I see your point, however video meetings keep teams connected.', isCorrect: true },
          { id: 'r2', text: 'I am disagree with you because you are not correct.', isCorrect: false },
        ],
        correctAnswer: 'I see your point, however video meetings keep teams connected.',
        explanation: 'Polite concession with correct verb form.',
      },
    },
    {
      id: 'turn_261_3',
      turnIndex: 3,
      partnerPrompt:
        'That is a very balanced view! To conclude our discussion, what do you think is the best overall solution for companies, and what question do you have for me as the moderator?',
      partnerAudioText:
        'That is a very balanced view! To conclude our discussion, what do you think is the best overall solution for companies, and what question do you have for me as the moderator?',
      partnerQuestionHindi:
        'यह बहुत ही संतुलित दृष्टिकोण है! हमारी चर्चा को समाप्त करने के लिए, आपको क्या लगता है कि कंपनियों के लिए सबसे अच्छा समग्र समाधान क्या है, और मॉडरेटर के रूप में मेरे लिए आपका क्या प्रश्न है?',
      expectedFunction: 'Proposing a hybrid compromise and asking Marcus a direct follow-up question ("What do you think, Marcus?")',
      contextGoal: 'Propose a flexible hybrid model (2-3 days remote, 2 days office) as the ideal compromise, and ask Marcus for his opinion',
      targetVocabulary: ['A fair compromise is a hybrid model', 'two days in the office', 'three days at home', 'satisfies everyone', 'What is your opinion Marcus', 'What do you prefer'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffolding',
          text: 'In conclusion, I believe a flexible hybrid model is the best solution. Employees can work two days in the office for team brainstorming and three days from home for deep focus. What is your personal preference, Marcus: fully remote, office, or hybrid?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Independent Production',
          text: 'I think giving workers the freedom to choose a hybrid schedule creates the happiest and most productive workplace. What do you think about hybrid work, Marcus?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'hybrid_solution',
          patterns: ['hybrid', 'compromise', 'flexible', 'days', 'office', 'home', 'balance', 'best solution', 'freedom'],
          required: true,
        },
        {
          name: 'followup_question_to_marcus',
          patterns: ['what is your', 'what do you think', 'marcus', 'preference', 'prefer', 'you', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_261_3_what_you_prefer',
          pattern: /what you prefer marcus\?/i,
          errorType: 'grammar',
          message: 'Include auxiliary "do": "What do you prefer, Marcus?".',
          correctionPattern: 'What do you prefer, Marcus: remote or hybrid?',
        },
      ],
      remediationPractice: {
        id: 'rem_261_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [A hybrid model is the best solution / because it provides both / collaboration and flexibility]',
        correctAnswer: 'A hybrid model is the best solution because it provides both collaboration and flexibility',
        explanation: 'Main clause + reason clause with "both... and...".',
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
