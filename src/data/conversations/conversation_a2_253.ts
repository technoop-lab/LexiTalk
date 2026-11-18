import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_253: ConversationDefinition = {
  id: 'conv_a2_253',
  title: 'Agreeing, Disagreeing & Polite Discussions',
  cefr: 'A2',
  unitId: 'unit_a2_17',
  lessonLinks: ['lesson_a2_17_253'],
  estimatedMinutes: 5,
  scenario:
    'You are in a community debate workshop with facilitator Maya discussing whether urban centers should be pedestrian-only zones. You practice polite agreement, constructive disagreement, softening strong opinions, offering counter-proposals, and mediating common ground between business owners and residents.',
  communicativeGoals: [
    'Agree and disagree politely and constructively on community topics in A2 English',
    'Use polite discussion chunks: "I agree with you up to a point, but...", "I see what you mean, however...", "That is a valid point, yet..."',
    'Soften disagreements with polite modals ("might", "could", "perhaps")',
    'Mediate a compromise between differing community stakeholder perspectives',
  ],
  canDoStatements: [
    'Can express agreement and partial agreement with someone’s opinion politely',
    'Can disagree politely without sounding aggressive or rude',
    'Can propose a sensible compromise that respects two opposing views',
  ],
  characters: [
    {
      id: 'char_maya_debate_coach',
      name: 'Maya',
      role: 'Civic Dialogue Facilitator',
      avatar: '⚖️',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'up to a point',
        ipa: '/ʌp tuː ə pɔɪnt/',
        partOfSpeech: 'idiom / phrase',
        meaning: 'To a certain degree or extent, but not completely',
        exampleSentence: 'I agree with your proposal up to a point, but we must also consider parking for delivery vans.',
        translations: { hi: 'एक हद तक / आंशिक रूप से (अप टू अ पॉइंट)' },
      },
      {
        word: 'counter-proposal',
        ipa: '/ˈkaʊntə prəˈpəʊzl/',
        partOfSpeech: 'noun',
        meaning: 'An alternative proposal made in response to an existing suggestion',
        exampleSentence: 'Let us offer a counter-proposal where the street is pedestrian-only on weekends only.',
        translations: { hi: 'प्रति-प्रस्ताव / वैकल्पिक प्रस्ताव (काउंटर-प्रपोज़ल)' },
      },
      {
        word: 'compromise',
        ipa: '/ˈkɒmprəmaɪz/',
        partOfSpeech: 'noun / verb',
        meaning: 'An agreement reached by each side making concessions',
        exampleSentence: 'Finding a sensible compromise will satisfy both shopkeepers and pedestrians.',
        translations: { hi: 'समझौता (कॉम्प्रोमाइज़)' },
      },
      {
        word: 'pedestrian zone',
        ipa: '/pəˈdestriən zəʊn/',
        partOfSpeech: 'noun phrase',
        meaning: 'An area in a town or city reserved for people walking, where motor vehicles are prohibited',
        exampleSentence: 'Creating a pedestrian zone makes shopping safer and reduces noise pollution.',
        translations: { hi: 'पैदल यात्री क्षेत्र (पेडेस्ट्रियन ज़ोन)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I see what you mean, but on the other hand...',
        functionCategory: 'Politely acknowledging a point before offering contrast',
        exampleSentence: 'I see what you mean, but on the other hand, clean air benefits everyone.',
      },
      {
        phrase: 'I agree with you up to a point, however...',
        functionCategory: 'Expressing partial agreement with qualification',
        exampleSentence: 'I agree with you up to a point, however local deliveries still need morning access.',
      },
      {
        phrase: 'Perhaps we could consider...',
        functionCategory: 'Softening a counter-proposal diplomatically',
        exampleSentence: 'Perhaps we could consider closing the main avenue on Saturdays and Sundays only.',
      },
      {
        phrase: 'A fair compromise would be to...',
        functionCategory: 'Proposing a mutually beneficial solution',
        exampleSentence: 'A fair compromise would be to allow electric shuttle buses through the city center.',
      },
    ],
    grammar: {
      title: 'Polite Disagreement Strategies: Concession Clauses & Softening Modals',
      conceptExplanation:
        '1. Concession + Contrast: "I understand your concern, but we must also consider..."\n2. Partial agreement: "I agree up to a point, however..."\n3. Softening modals for suggestions: "Perhaps we could...", "It might be better to..."\n4. Never use blunt negatives like "You are wrong." Use "I see things a bit differently."',
      patternFormula: '[I understand your point / I agree up to a point], however + [Clause]. Perhaps we could + [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'You are completely wrong about cars.',
          correct: 'I see what you mean, but pedestrian streets improve air quality significantly.',
          explanation: 'Use polite counter-arguments instead of direct personal confrontation.',
        },
        {
          incorrect: 'I am agree with your compromise.',
          correct: 'I agree with your proposed compromise.',
          explanation: 'Never use "I am agree". Use "I agree".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Maya',
        text: 'Welcome everyone! Today’s debate is: "Should the city center be completely closed to all private cars?" What is your stance?',
        translation: 'सभी का स्वागत है! आज की बहस है: "क्या शहर के केंद्र को सभी निजी कारों के लिए पूरी तरह से बंद कर दिया जाना चाहिए?" आपका क्या रुख है?',
      },
      {
        speaker: 'Learner',
        text: 'I agree with you up to a point, because reducing traffic creates cleaner air, but local businesses still need morning delivery access.',
        translation: 'मैं एक हद तक आपसे सहमत हूँ, क्योंकि यातायात कम करने से स्वच्छ हवा बनती है, लेकिन स्थानीय व्यवसायों को अभी भी सुबह डिलीवरी पहुंच की आवश्यकता है।',
      },
      {
        speaker: 'Maya',
        text: 'A very thoughtful response! How would you propose a compromise between shop owners and residents?',
        translation: 'बहुत ही विचारशील प्रतिक्रिया! आप दुकानदारों और निवासियों के बीच एक समझौते का प्रस्ताव कैसे देंगे?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_253_1',
      type: 'fill_blank',
      prompt: 'Complete: "I agree with your proposal up ______ (to / for / on) a point, but we need more bus routes."',
      options: [
        { id: 'opt_1', text: 'to', isCorrect: true },
        { id: 'opt_2', text: 'for', isCorrect: false },
        { id: 'opt_3', text: 'on', isCorrect: false },
      ],
      correctAnswer: 'to',
      explanation: 'The standard idiom is "up to a point".',
    },
    {
      id: 'cp_253_2',
      type: 'multiple_choice',
      prompt: 'Which sentence demonstrates polite, constructive disagreement?',
      options: [
        { id: 'opt_1', text: 'I see what you mean, however we must also consider elderly residents who need transport.', isCorrect: true },
        { id: 'opt_2', text: 'You are completely wrong and cars are bad.', isCorrect: false },
        { id: 'opt_3', text: 'I am disagree totally with your idea.', isCorrect: false },
      ],
      correctAnswer: 'I see what you mean, however we must also consider elderly residents who need transport.',
      explanation: 'Polite acknowledgment ("I see what you mean, however...") followed by a reasoned point.',
    },
    {
      id: 'cp_253_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [Perhaps we could consider / closing the main street / on weekend afternoons only]',
      correctAnswer: 'Perhaps we could consider closing the main street on weekend afternoons only',
      explanation: 'Softening modal phrase: "Perhaps we could consider" + gerund phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_253_1',
      prompt: 'Construct a sentence stating that I agree with you up to a point, but pedestrian zones make walking safer.',
      scenarioContext: 'Participating in the debate.',
      targetStructure: 'I agree with you up to a point, but pedestrian zones make walking safer.',
      wordBank: ['I agree with you', 'up to a point,', 'but pedestrian zones', 'make walking safer.', 'am agreeing to'],
      acceptableSolutions: [
        'I agree with you up to a point, but pedestrian zones make walking safer.',
        'I agree up to a point, but pedestrian zones make walking safer.',
      ],
      explanation: '"I agree with you up to a point, but [argument]".',
    },
    {
      id: 'sc_253_2',
      prompt: 'Construct a sentence stating that a fair compromise would be to allow delivery trucks early in the morning.',
      scenarioContext: 'Offering a counter-proposal to Maya.',
      targetStructure: 'A fair compromise would be to allow delivery trucks early in the morning.',
      wordBank: ['A fair compromise', 'would be to allow', 'delivery trucks early', 'in the morning.', 'counter-proposal to'],
      acceptableSolutions: [
        'A fair compromise would be to allow delivery trucks early in the morning.',
        'A sensible compromise would be to allow delivery trucks early in the morning.',
      ],
      explanation: '"A fair compromise would be to [base verb]...".',
    },
  ],
  turns: [
    {
      id: 'turn_253_1',
      turnIndex: 1,
      partnerPrompt:
        'Welcome to the Civic Dialogue Forum! Today’s motion is: "Urban city centers should be completely converted into pedestrian-only walking zones with zero private cars." What is your initial reaction to this proposal?',
      partnerAudioText:
        'Welcome to the Civic Dialogue Forum! Today’s motion is: "Urban city centers should be completely converted into pedestrian-only walking zones with zero private cars." What is your initial reaction to this proposal?',
      partnerQuestionHindi:
        'नागरिक संवाद मंच में आपका स्वागत है! आज का प्रस्ताव है: "शहरी केंद्रों को बिना किसी निजी कार के पूरी तरह से पैदल यात्री क्षेत्रों में बदल दिया जाना चाहिए।" इस प्रस्ताव पर आपकी प्रारंभिक प्रतिक्रिया क्या है?',
      expectedFunction: 'Greeting Maya and stating a nuanced stance using polite agreement/qualification chunks',
      contextGoal: 'Greet Maya, express partial agreement ("I agree up to a point"), and mention benefits (clean air, safety) alongside concerns (deliveries, parking)',
      targetVocabulary: ['Hello Maya', 'I agree with this up to a point', 'pedestrian zones', 'cleaner air and safety', 'on the other hand', 'local businesses'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello Maya! I agree with this proposal up to a point. Converting the center into a pedestrian zone creates cleaner air and safer streets for families. However, local shops still need convenient ways to receive goods.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi Maya! I see the great benefits for walking and public health, but on the other hand, we must think about elderly residents who rely on cars or taxis.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good afternoon! I support reducing traffic because it makes the town lively, though we should plan public transit carefully first.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_maya',
          patterns: ['hello', 'hi', 'maya', 'good afternoon', 'good morning'],
          required: true,
        },
        {
          name: 'nuanced_stance',
          patterns: ['agree', 'up to a point', 'pedestrian', 'cars', 'clean air', 'safety', 'shops', 'businesses', 'traffic', 'however', 'on the other hand'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_253_1_agree_with',
          pattern: /i am agree with/i,
          errorType: 'grammar',
          message: 'Say "I agree with" instead of "I am agree with".',
          correctionPattern: 'I agree with this proposal up to a point.',
        },
      ],
      remediationPractice: {
        id: 'rem_253_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I ______ (agree / am agree) with the green initiative."',
        options: [
          { id: 'r1', text: 'agree', isCorrect: true },
          { id: 'r2', text: 'am agree', isCorrect: false },
        ],
        correctAnswer: 'agree',
        explanation: '"Agree" is a main verb in English.',
      },
    },
    {
      id: 'turn_253_2',
      turnIndex: 2,
      partnerPrompt:
        'A local store owner just stated: "If cars are banned completely, our retail stores will lose all customers and go out of business!" How would you politely disagree or reframe their concern without sounding dismissive?',
      partnerAudioText:
        'A local store owner just stated: "If cars are banned completely, our retail stores will lose all customers and go out of business!" How would you politely disagree or reframe their concern without sounding dismissive?',
      partnerQuestionHindi:
        'एक स्थानीय दुकान के मालिक ने अभी-अभी कहा: "यदि कारों पर पूरी तरह से प्रतिबंध लगा दिया गया, तो हमारे खुदरा स्टोर सभी ग्राहकों को खो देंगे और बंद हो जाएंगे!" आप बिना किसी तिरस्कार के उनकी चिंता से विनम्रतापूर्वक कैसे असहमत होंगे या उसे नया रूप देंगे?',
      expectedFunction: 'Disagreeing constructively and politely using "I understand your concern, but..." and evidence of foot traffic',
      contextGoal: 'Acknowledge their concern respectfully, point out that pedestrian streets often increase foot traffic and sales, and suggest delivery windows',
      targetVocabulary: ['I understand your concern', 'however', 'foot traffic', 'pedestrian streets increase sales', 'studies show', 'delivery windows'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I completely understand your concern, however studies show that pedestrian streets actually increase foot traffic because shoppers spend more time browsing. We can also provide designated delivery hours in the morning.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I see what you mean, but pedestrian areas often attract many more tourists and cafe customers. People enjoy walking and shopping when there is no traffic noise.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'That is a valid worry, yet pedestrian streets make town centers vibrant and attract more walkers who visit local shops.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'polite_acknowledgment',
          patterns: ['understand your concern', 'see what you mean', 'valid worry', 'valid point', 'however', 'yet', 'but'],
          required: true,
        },
        {
          name: 'counter_argument',
          patterns: ['foot traffic', 'increase sales', 'customers', 'browsing', 'pedestrian', 'tourists', 'delivery hours', 'shoppers'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_253_2_blunt_rejection',
          pattern: /^you are wrong store owner\.$/i,
          errorType: 'interaction',
          message: 'Disagree politely: "I understand your concern, however pedestrian streets often increase foot traffic and shop visits."',
          correctionPattern: 'I understand your concern, however pedestrian streets increase foot traffic.',
        },
      ],
      remediationPractice: {
        id: 'rem_253_2',
        type: 'multiple_choice',
        prompt: 'Which phrase opens a respectful counter-argument?',
        options: [
          { id: 'r1', text: 'I understand your concern, however studies show...', isCorrect: true },
          { id: 'r2', text: 'You are completely wrong because studies show...', isCorrect: false },
        ],
        correctAnswer: 'I understand your concern, however studies show...',
        explanation: 'Respectful concession followed by "however".',
      },
    },
    {
      id: 'turn_253_3',
      turnIndex: 3,
      partnerPrompt:
        'To conclude our session, the town council needs a concrete proposal. Could you mediate a fair compromise between the business owners and the environmental residents that satisfies both parties?',
      partnerAudioText:
        'To conclude our session, the town council needs a concrete proposal. Could you mediate a fair compromise between the business owners and the environmental residents that satisfies both parties?',
      partnerQuestionHindi:
        'हमारे सत्र को समाप्त करने के लिए, नगर परिषद को एक ठोस प्रस्ताव की आवश्यकता है। क्या आप व्यापार मालिकों और पर्यावरण-प्रेमी निवासियों के बीच एक निष्पक्ष समझौते की मध्यस्थता (mediate) कर सकते हैं जो दोनों पक्षों को संतुष्ट करे?',
      expectedFunction: 'Proposing a balanced compromise using "A fair compromise would be to..." and softening modals',
      contextGoal: 'Propose a clear compromise: pedestrian-only on weekends or after 10 AM, allowing morning commercial deliveries, and creating electric shuttle links',
      targetVocabulary: ['A fair compromise would be to', 'pedestrian-only on weekends', 'morning delivery window', 'electric shuttles', 'satisfies both sides', 'balanced solution'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'A fair compromise would be to make the city center pedestrian-only on weekends and weekday evenings, while allowing shop deliveries between 6:00 and 10:00 AM. In addition, we could introduce small electric shuttle buses for elderly residents.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Perhaps we could test a pilot pedestrian program from Friday to Sunday. This allows businesses to receive goods during weekdays while giving families peaceful, clean streets on weekends.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'A sensible compromise is pedestrian streets on weekends with special morning permits for delivery vans. This supports both clean air and local commerce.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'compromise_marker',
          patterns: ['fair compromise', 'sensible compromise', 'perhaps we could', 'balanced solution', 'pilot program', 'would be to'],
          required: true,
        },
        {
          name: 'compromise_details',
          patterns: ['weekends', 'deliveries', 'morning', 'electric shuttle', 'both sides', 'clean air', 'shops', 'permits'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_253_3_would_be_verb',
          pattern: /compromise would be allow/i,
          errorType: 'grammar',
          message: 'Say "A fair compromise would be to allow" (infinitive "to allow").',
          correctionPattern: 'A fair compromise would be to allow morning deliveries.',
        },
      ],
      remediationPractice: {
        id: 'rem_253_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [A fair compromise would be to / make the street pedestrian-only / on weekends and evenings]',
        correctAnswer: 'A fair compromise would be to make the street pedestrian-only on weekends and evenings',
        explanation: 'Compromise formula + infinitive complement + temporal phrase.',
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
