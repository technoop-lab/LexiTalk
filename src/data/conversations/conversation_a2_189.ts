import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_189: ConversationDefinition = {
  id: 'conv_a2_189',
  title: 'Social Invitations, Weekend Outings & Making Group Plans',
  cefr: 'A2',
  unitId: 'unit_a2_13',
  lessonLinks: ['lesson_a2_13_189'],
  estimatedMinutes: 5,
  scenario:
    'You are texting and chatting with your classmate Noah on a Thursday afternoon. You are coordinating a group weekend outing to the riverside park, suggesting activities (cycling, picnic, board games), choosing a meeting time, and dividing up snacks.',
  communicativeGoals: [
    'Make social suggestions using "Why don\'t we", "How about + -ing", "Shall we", and "Let\'s"',
    'Accept proposals enthusiastically or decline tactfully with polite alternative ideas',
    'Coordinate meeting times, transportation, and meeting spots',
    'Delegate tasks and organize supplies for a group picnic',
  ],
  canDoStatements: [
    'Can suggest weekend activities and outings to friends using standard invitation formulas',
    'Can negotiate times, locations, and shared responsibilities in English',
    'Can accept and decline invitations politely with clear explanations',
  ],
  characters: [
    {
      id: 'char_noah_classmate',
      name: 'Noah',
      role: 'Classmate & Weekend Plan Organizer',
      avatar: '🎉',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'outing',
        ipa: '/ˈaʊtɪŋ/',
        partOfSpeech: 'noun',
        meaning: 'A trip or excursion taken for pleasure, especially one lasting a day or less',
        exampleSentence: 'Let’s plan a relaxing weekend outing by the riverside.',
        translations: { hi: 'सैर / पिकनिक यात्रा' },
      },
      {
        word: 'coordinate',
        ipa: '/kəʊˈɔːdɪneɪt/',
        partOfSpeech: 'verb',
        meaning: 'To bring the different elements of an activity or an organization into a harmonious relationship',
        exampleSentence: 'We need to coordinate what snacks everyone is bringing.',
        translations: { hi: 'समन्वय करना / व्यवस्था करना' },
      },
      {
        word: 'picnic',
        ipa: '/ˈpɪknɪk/',
        partOfSpeech: 'noun',
        meaning: 'An occasion when a packed meal is eaten outdoors, especially in the countryside',
        exampleSentence: 'How about having a picnic under the shady oak trees?',
        translations: { hi: 'पिकनिक' },
      },
      {
        word: 'enthusiastic',
        ipa: '/ɪnˌθjuːziˈæstɪk/',
        partOfSpeech: 'adjective',
        meaning: 'Having or showing intense and eager enjoyment, interest, or approval',
        exampleSentence: 'Everyone was enthusiastic about renting bicycles in the park.',
        translations: { hi: 'उत्साही' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Why don’t we go to the riverside park this Saturday?',
        functionCategory: 'Suggesting location with why don\'t we',
        exampleSentence: 'Why don’t we invite Sarah and Daniel too?',
      },
      {
        phrase: 'How about renting bicycles in the morning and having a picnic later?',
        functionCategory: 'Suggesting activity with how about -ing',
        exampleSentence: 'How about bringing a frisbee or board games?',
      },
      {
        phrase: 'Shall we meet at the park entrance at 10:30 AM?',
        functionCategory: 'Coordinating time with shall we',
        exampleSentence: 'Shall I pick up some fresh fruit and sandwiches?',
      },
      {
        phrase: 'That sounds like a fantastic plan! Count me in.',
        functionCategory: 'Enthusiastic agreement',
        exampleSentence: 'I would love to come! What should I bring?',
      },
    ],
    grammar: {
      title: 'Suggestion Frameworks: Why don\'t we, How about + -ing, Shall we, Let\'s',
      conceptExplanation:
        '1. "Why don\'t we + Base Verb...?"\n   - "Why don\'t we meet at the station?"\n2. "How about + Verb-ing / Noun...?"\n   - "How about having a picnic?" / "How about Saturday?"\n3. "Shall we + Base Verb...?" (Polite consultation)\n   - "Shall we bring some lemonade?"\n4. "Let\'s + Base Verb" (Direct proposal)\n   - "Let\'s invite our friends."',
      patternFormula: 'Why don\'t we [Base Verb] | How about [Verb-ing] | Shall we [Base Verb] | Let\'s [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'How about have a picnic tomorrow?',
          correct: 'How about having a picnic tomorrow?',
          explanation: '"How about" must be followed by a gerund (verb + -ing) or a noun phrase.',
        },
        {
          incorrect: 'Why don\'t we to meet at 11:00?',
          correct: 'Why don\'t we meet at 11:00?',
          explanation: '"Why don\'t we" is followed by the bare infinitive (meet), not "to meet".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Noah',
        text: 'Hey! The weather is supposed to be sunny this Saturday. Are you free to hang out?',
        translation: 'अरे! इस शनिवार को मौसम धूप वाला रहने की उम्मीद है। क्या आप मिलने के लिए फ्री हैं?',
      },
      {
        speaker: 'Learner',
        text: 'Yes, I am! Why don’t we organize a bike ride and picnic by the river?',
        translation: 'हाँ, मैं हूँ! क्यों न हम नदी किनारे बाइक की सवारी और पिकनिक की योजना बनाएँ?',
      },
      {
        speaker: 'Noah',
        text: 'That sounds awesome! How about meeting at the main entrance at 10:00 AM?',
        translation: 'यह बहुत बढ़िया लग रहा है! सुबह 10:00 बजे मुख्य द्वार पर मिलने के बारे में क्या ख्याल है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_189_1',
      type: 'fill_blank',
      prompt: 'Complete with the correct form: "How about ______ (bring) homemade cookies to the picnic?"',
      options: [
        { id: 'opt_1', text: 'bringing', isCorrect: true },
        { id: 'opt_2', text: 'bring', isCorrect: false },
        { id: 'opt_3', text: 'to bring', isCorrect: false },
      ],
      correctAnswer: 'bringing',
      explanation: 'Use the -ing form after "How about".',
    },
    {
      id: 'cp_189_2',
      type: 'multiple_choice',
      prompt: 'Which suggestion is grammatically correct?',
      options: [
        { id: 'opt_1', text: 'Why don\'t we rent tandem bikes at the park?', isCorrect: true },
        { id: 'opt_2', text: 'Why don\'t we renting tandem bikes at the park?', isCorrect: false },
        { id: 'opt_3', text: 'Why don\'t we to rent tandem bikes at the park?', isCorrect: false },
      ],
      correctAnswer: 'Why don\'t we rent tandem bikes at the park?',
      explanation: '"Why don\'t we" takes the base form of the verb.',
    },
    {
      id: 'cp_189_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [shall we / at the fountain / meet / at 11:00 AM?]',
      correctAnswer: 'shall we meet at the fountain at 11:00 AM?',
      explanation: 'Shall we + base verb + location + time.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_189_1',
      prompt: 'Construct a suggestion using "Why don\'t we" to invite Maya and Liam to the park.',
      scenarioContext: 'Planning the group list with Noah.',
      targetStructure: 'Why don\'t we invite Maya and Liam to join our picnic?',
      wordBank: ['Why don\'t we', 'invite', 'Maya and Liam', 'to join', 'our picnic', 'this Saturday?'],
      acceptableSolutions: [
        'Why don\'t we invite Maya and Liam to join our picnic?',
        'Why don\'t we invite Maya and Liam?',
      ],
      explanation: 'Use "Why don\'t we + base verb (invite)".',
    },
    {
      id: 'sc_189_2',
      prompt: 'Construct a suggestion using "How about" to bring fruit and sparkling water.',
      scenarioContext: 'Dividing food items.',
      targetStructure: 'How about bringing fresh fruit and sparkling water?',
      wordBank: ['How about', 'bringing', 'fresh fruit', 'and', 'sparkling water', 'for everyone?'],
      acceptableSolutions: [
        'How about bringing fresh fruit and sparkling water?',
        'How about bringing fresh fruit and sparkling water for everyone?',
      ],
      explanation: 'Use "How about + bringing" followed by the food items.',
    },
  ],
  turns: [
    {
      id: 'turn_189_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey there! I am texting because Saturday is going to be warm and sunny. A few of us want to get out of the house. Do you have any ideas for what we could do together?',
      partnerAudioText:
        'Hey there! I am texting because Saturday is going to be warm and sunny. A few of us want to get out of the house. Do you have any ideas for what we could do together?',
      partnerQuestionHindi:
        'अरे! मैं मैसेज कर रहा हूँ क्योंकि शनिवार गर्म और धूपदार होने वाला है। हममें से कुछ लोग बाहर निकलना चाहते हैं। क्या आपके पास कोई विचार है कि हम साथ में क्या कर सकते हैं?',
      expectedFunction: 'Making an outdoor activity suggestion using "Why don\'t we" or "How about"',
      contextGoal: 'Suggest a picnic, cycling, or going to the riverside park with friends',
      targetVocabulary: ['why don\'t we', 'how about', 'park', 'picnic', 'cycling', 'saturday'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hi Noah! Why don’t we go to the riverside park and have a picnic?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hey! How about renting bicycles and riding along the river path on Saturday?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Great idea! Why don’t we organize an outdoor picnic and play badminton or board games under the trees?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'suggestion_formula',
          patterns: ['why don\'t we', 'how about', 'shall we', 'let\'s'],
          required: true,
        },
        {
          name: 'activity_idea',
          patterns: ['park', 'picnic', 'cycling', 'bike', 'river', 'games', 'outdoors', 'trees', 'ride'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_189_1_how_about_verb',
          pattern: /how about go/i,
          errorType: 'grammar',
          message: 'Say "How about going" (use -ing after how about).',
          correctionPattern: 'How about going...',
        },
      ],
      remediationPractice: {
        id: 'rem_189_1',
        type: 'fill_blank',
        prompt: 'Fill in: "How about ______ (have) a picnic?"',
        options: [
          { id: 'r1', text: 'having', isCorrect: true },
          { id: 'r2', text: 'have', isCorrect: false },
        ],
        correctAnswer: 'having',
        explanation: 'Use -ing after "How about".',
      },
    },
    {
      id: 'turn_189_2',
      turnIndex: 2,
      partnerPrompt:
        'A riverside picnic and cycling sounds amazing! Maya and Liam both said they want to join us too. What time shall we meet, and where should our group meet up?',
      partnerAudioText:
        'A riverside picnic and cycling sounds amazing! Maya and Liam both said they want to join us too. What time shall we meet, and where should our group meet up?',
      partnerQuestionHindi:
        'नदी किनारे पिकनिक और साइकिल चलाना शानदार लगता है! माया और लियाम दोनों ने कहा कि वे भी हमारे साथ आना चाहते हैं। हमें किस समय मिलना चाहिए, और हमारे समूह को कहाँ मिलना चाहिए?',
      expectedFunction: 'Proposing meeting time and location using "Shall we" or "Let\'s"',
      contextGoal: 'Propose meeting at the park entrance or bike rental shop around 10:30 AM',
      targetVocabulary: ['shall we', 'meet', 'entrance', '10:30', 'morning', 'let\'s'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Shall we meet at the park entrance near the bike shop at 10:30 AM?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Let’s meet in front of the main cafe at 10:00 AM so we have the whole morning.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Why don’t we meet by the bridge entrance at 10:30 AM? It has plenty of parking space.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'time_proposal',
          patterns: ['10:00', '10:30', '11:00', 'morning', 'time', 'am'],
          required: true,
        },
        {
          name: 'location_proposal',
          patterns: ['entrance', 'gate', 'bike shop', 'cafe', 'bridge', 'meet', 'shall we', 'let\'s'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_189_2_shall_we_to',
          pattern: /shall we to meet/i,
          errorType: 'grammar',
          message: 'Do not put "to" after "shall we". Say "Shall we meet at...".',
          correctionPattern: 'Shall we meet...',
        },
      ],
      remediationPractice: {
        id: 'rem_189_2',
        type: 'multiple_choice',
        prompt: 'Choose the correct question format:',
        options: [
          { id: 'r1', text: 'Shall we meet at 10:30 AM?', isCorrect: true },
          { id: 'r2', text: 'Shall we to meet at 10:30 AM?', isCorrect: false },
        ],
        correctAnswer: 'Shall we meet at 10:30 AM?',
        explanation: '"Shall we + base verb".',
      },
    },
    {
      id: 'turn_189_3',
      turnIndex: 3,
      partnerPrompt:
        '10:30 AM at the park entrance is locked in! Now, let’s divide the food and supplies. I can bring the picnic blanket, cups, and sandwiches. What could you bring for the group?',
      partnerAudioText:
        '10:30 AM at the park entrance is locked in! Now, let’s divide the food and supplies. I can bring the picnic blanket, cups, and sandwiches. What could you bring for the group?',
      partnerQuestionHindi:
        'पार्क के प्रवेश द्वार पर सुबह 10:30 बजे का समय तय हो गया! अब, खाना और सामान बाँट लेते हैं। मैं पिकनिक कंबल, कप और सैंडविच ला सकता हूँ। आप समूह के लिए क्या ला सकते हैं?',
      expectedFunction: 'Volunteering food and beverage items using "I will bring" or "How about I bring"',
      contextGoal: 'Offer to bring snacks, fresh fruits, drinks, or a music speaker',
      targetVocabulary: ['bring', 'fruit', 'drinks', 'juice', 'snacks', 'speaker'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I will bring fresh apples, strawberries, orange juice, and a bluetooth speaker.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'How about I bring potato chips, homemade cookies, and cold mineral water?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I can prepare a big fruit salad and bring plenty of cold lemonade for everyone!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'offer_intent',
          patterns: ['will bring', 'can bring', 'how about i bring', 'prepare', 'take'],
          required: true,
        },
        {
          name: 'supplies_or_food',
          patterns: ['fruit', 'apples', 'juice', 'lemonade', 'water', 'cookies', 'chips', 'snacks', 'speaker', 'salad'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_189_3_bring_take',
          pattern: /i will take to the picnic/i,
          errorType: 'vocabulary',
          message: 'Use "bring" when talking about contributing food to a shared gathering: "I will bring...".',
          correctionPattern: 'I will bring...',
        },
      ],
      remediationPractice: {
        id: 'rem_189_3',
        type: 'fill_blank',
        prompt: 'Fill in: "I will ______ (bring) drinks for everyone."',
        options: [
          { id: 'r1', text: 'bring', isCorrect: true },
          { id: 'r2', text: 'bringing', isCorrect: false },
        ],
        correctAnswer: 'bring',
        explanation: '"Will bring" expresses future willingness.',
      },
    },
    {
      id: 'turn_189_4',
      turnIndex: 4,
      partnerPrompt:
        'Fresh fruit, juice, and music will make it a real party! I will create a group chat now with Maya and Liam so everyone has all the details. See you on Saturday at 10:30 AM!',
      partnerAudioText:
        'Fresh fruit, juice, and music will make it a real party! I will create a group chat now with Maya and Liam so everyone has all the details. See you on Saturday at 10:30 AM!',
      partnerQuestionHindi:
        'ताजा फल, जूस और संगीत इसे एक असली पार्टी बना देंगे! मैं अब माया और लियाम के साथ एक ग्रुप चैट बनाऊँगा ताकि सभी के पास पूरी जानकारी हो। शनिवार सुबह 10:30 बजे मिलते हैं!',
      expectedFunction: 'Confirming enthusiasm, acknowledging group chat, and signing off warmly',
      contextGoal: 'Express excitement, confirm you will watch for the chat, and say see you Saturday',
      targetVocabulary: ['sounds great', 'see you', 'Saturday', 'excited', 'bye'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'That sounds great! I will look out for the group message. See you Saturday, Noah!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Perfect! I am really looking forward to our weekend outing. See you all at 10:30!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Awesome organization Noah! Can’t wait for the bike ride and picnic. Talk to you soon in the group chat, bye!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'closing_enthusiasm',
          patterns: ['sounds great', 'perfect', 'awesome', 'looking forward', 'excited'],
          required: true,
        },
        {
          name: 'farewell_friend',
          patterns: ['see you', 'saturday', 'group chat', 'message', 'bye', '10:30'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_189_4_closing',
          pattern: /^(ok|yes)$/i,
          errorType: 'interaction',
          message: 'Say a friendly goodbye and confirm your plan.',
          correctionPattern: 'Sounds great! See you on Saturday, Noah.',
        },
      ],
      remediationPractice: {
        id: 'rem_189_4',
        type: 'multiple_choice',
        prompt: 'Which response closes the group outing coordination best?',
        options: [
          { id: 'r1', text: 'Sounds wonderful! I will see you on Saturday at 10:30 AM.', isCorrect: true },
          { id: 'r2', text: 'I stop text now.', isCorrect: false },
        ],
        correctAnswer: 'Sounds wonderful! I will see you on Saturday at 10:30 AM.',
        explanation: 'Natural social sign-off.',
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
