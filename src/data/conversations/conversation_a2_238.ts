import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_238: ConversationDefinition = {
  id: 'conv_a2_238',
  title: 'Global Challenges, Humanitarian Causes & Volunteering',
  cefr: 'A2',
  unitId: 'unit_a2_16',
  lessonLinks: ['lesson_a2_16_238'],
  estimatedMinutes: 5,
  scenario:
    'You attend an international humanitarian aid seminar and meet Tariq, an outreach director for an educational charity. You discuss global humanitarian challenges, emergency relief campaigns, literacy initiatives, and how grassroots volunteering and micro-donations make a measurable impact.',
  communicativeGoals: [
    'Describe global challenges (poverty, disaster relief, lack of clean water, educational access) using precise A2 vocabulary',
    'Express purpose and necessity using "in order that", "so that", and "we must ensure that..."',
    'Discuss volunteering commitments and fundraising drives using present perfect and future intentions',
    'Engage in an empathetic, global citizenship conversation in A2 English',
  ],
  canDoStatements: [
    'Can talk about humanitarian issues, disaster relief, and community aid programs',
    'Can use "so that" and purpose clauses to explain why aid initiatives are carried out',
    'Can express commitment to charitable causes and voluntary action',
  ],
  characters: [
    {
      id: 'char_tariq_director',
      name: 'Tariq',
      role: 'Humanitarian Outreach Director & Aid Coordinator',
      avatar: '🌍',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'humanitarian',
        ipa: '/hjuːˌmænɪˈteəriən/',
        partOfSpeech: 'adjective / noun',
        meaning: 'Concerned with or seeking to promote human welfare and relieve human suffering',
        exampleSentence: 'The NGO delivers emergency humanitarian aid to communities affected by natural disasters.',
        translations: { hi: 'मानवतावादी / परोपकारी (ह्यूमैनिकेरियन)' },
      },
      {
        word: 'initiative',
        ipa: '/ɪˈnɪʃətɪv/',
        partOfSpeech: 'noun',
        meaning: 'An organized, proactive effort to solve a social problem or improve conditions',
        exampleSentence: 'The literacy initiative provides free digital tablets and textbooks to rural schools.',
        translations: { hi: 'पहल / सामाजिक अभियान (इनिशिएटिव)' },
      },
      {
        word: 'disaster relief',
        ipa: '/dɪˈzɑːstə rɪˈliːf/',
        partOfSpeech: 'noun phrase',
        meaning: 'Aid and assistance provided to urgent victims of catastrophic natural or man-made events',
        exampleSentence: 'Volunteers assembled thousands of food packages for flood disaster relief.',
        translations: { hi: 'आपदा राहत (डिज़ास्टर रिलीफ)' },
      },
      {
        word: 'fundraising',
        ipa: '/ˈfʌndreɪzɪŋ/',
        partOfSpeech: 'noun',
        meaning: 'The seeking of financial support for a charity, cause, or other social enterprise',
        exampleSentence: 'Our community fundraising drive collected funds for a clean water well.',
        translations: { hi: 'धन जुटाना / चंदा संग्रह (फंडरेज़िंग)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'We organize book drives so that every child has access to education.',
        functionCategory: 'Expressing purpose with "so that + clause"',
        exampleSentence: 'They send medical supplies so that clinics can treat injured patients.',
      },
      {
        phrase: 'Grassroots volunteering makes a tangible difference.',
        functionCategory: 'Highlighting community impact',
        exampleSentence: 'Every small contribution helps rebuild damaged communities.',
      },
      {
        phrase: 'We must ensure that aid reaches those most in need.',
        functionCategory: 'Stating humanitarian necessity',
        exampleSentence: 'Transparency is essential so that donors trust the campaign.',
      },
      {
        phrase: 'How can volunteers contribute remotely to international campaigns?',
        functionCategory: 'Inquiring about digital volunteering',
        exampleSentence: 'Where can our local club send emergency medical donations?',
      },
    ],
    grammar: {
      title: 'Clauses of Purpose with "So that" & Modals of Necessity',
      conceptExplanation:
        '1. Purpose with "So that": "So that + Subject + can/could/will + Base Verb" explains the purpose of an action ("We raise funds so that children can attend school").\n2. Modals of Necessity: "We must ensure that...", "It is vital that aid is delivered quickly."\n3. Prepositions of Cause: "due to natural disasters", "in response to the crisis".',
      patternFormula: '[Action Clause] + so that + [Subject] + can / will + [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'We donate money so that to build schools.',
          correct: 'We donate money so that communities can build schools.',
          explanation: '"So that" must be followed by a subject and modal verb ("can build"), not an infinitive ("to build").',
        },
        {
          incorrect: 'Aid must to reach quickly.',
          correct: 'Aid must reach those in need quickly.',
          explanation: 'Modal "must" takes a bare base verb without "to".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Tariq',
        text: 'Welcome to our Humanitarian Outreach conference! How can community members best support global humanitarian causes?',
        translation: 'हमारे मानवीय आउटरीच सम्मेलन में आपका स्वागत है! समुदाय के सदस्य वैश्विक मानवीय कारणों का सर्वोत्तम समर्थन कैसे कर सकते हैं?',
      },
      {
        speaker: 'Learner',
        text: 'Hello Tariq! We can organize local fundraising drives so that displaced families receive emergency food, shelter, and medical care.',
        translation: 'नमस्ते तारिक! हम स्थानीय धन जुटाने के अभियान आयोजित कर सकते हैं ताकि विस्थापित परिवारों को आपातकालीन भोजन, आश्रय और चिकित्सा देखभाल मिल सके।',
      },
      {
        speaker: 'Tariq',
        text: 'Exactly. Even small grassroots efforts empower communities and ensure long-term educational access.',
        translation: 'बिल्कुल। यहां तक ​​कि छोटे जमीनी प्रयास भी समुदायों को सशक्त बनाते हैं और दीर्घकालिक शैक्षिक पहुंच सुनिश्चित करते हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_238_1',
      type: 'fill_blank',
      prompt: 'Complete with the modal purpose clause: "They collect warm clothing so that refugees ______ (can stay / to stay) warm in winter."',
      options: [
        { id: 'opt_1', text: 'can stay', isCorrect: true },
        { id: 'opt_2', text: 'to stay', isCorrect: false },
        { id: 'opt_3', text: 'staying', isCorrect: false },
      ],
      correctAnswer: 'can stay',
      explanation: '"So that" is followed by a subject + modal ("can stay").',
    },
    {
      id: 'cp_238_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses humanitarian necessity?',
      options: [
        { id: 'opt_1', text: 'We must ensure that emergency disaster relief reaches remote villages safely.', isCorrect: true },
        { id: 'opt_2', text: 'We must to ensure that relief reach to remote villages.', isCorrect: false },
        { id: 'opt_3', text: 'We must ensuring disaster relief to remote villages fast.', isCorrect: false },
      ],
      correctAnswer: 'We must ensure that emergency disaster relief reaches remote villages safely.',
      explanation: '"Must ensure that" followed by a standard clause.',
    },
    {
      id: 'cp_238_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [Volunteers launched a fundraising drive / so that / rural schools could / purchase textbooks]',
      correctAnswer: 'Volunteers launched a fundraising drive so that rural schools could purchase textbooks',
      explanation: 'Action clause + so that + subject + modal + base verb + object.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_238_1',
      prompt: 'Construct a sentence stating that volunteers collect donations so that disaster relief can be delivered quickly.',
      scenarioContext: 'Explaining aid campaigns to Tariq.',
      targetStructure: 'Volunteers collect donations so that emergency disaster relief can reach families quickly.',
      wordBank: ['Volunteers collect donations', 'so that emergency disaster', 'relief can reach families', 'quickly,', 'Tariq.'],
      acceptableSolutions: [
        'Volunteers collect donations so that emergency disaster relief can reach families quickly.',
        'We raise funds so that disaster relief can reach families.',
      ],
      explanation: '"So that + subject + modal" clause of purpose.',
    },
    {
      id: 'sc_238_2',
      prompt: 'Construct a sentence stating that community educational initiatives provide vital opportunities for underprivileged youth.',
      scenarioContext: 'Discussing literacy programs.',
      targetStructure: 'Grassroots educational initiatives provide life-changing opportunities for young learners.',
      wordBank: ['Grassroots educational initiatives', 'provide life-changing', 'opportunities for', 'young learners,', 'Tariq.'],
      acceptableSolutions: [
        'Grassroots educational initiatives provide life-changing opportunities for young learners.',
        'Educational initiatives provide vital opportunities for children.',
      ],
      explanation: 'Present simple statement of social impact.',
    },
  ],
  turns: [
    {
      id: 'turn_238_1',
      turnIndex: 1,
      partnerPrompt:
        'Good evening! Welcome to the Global Outreach forum. I’m Tariq, director of our emergency humanitarian relief network. What humanitarian causes or global issues are closest to your heart?',
      partnerAudioText:
        'Good evening! Welcome to the Global Outreach forum. I’m Tariq, director of our emergency humanitarian relief network. What humanitarian causes or global issues are closest to your heart?',
      partnerQuestionHindi:
        'शुभ संध्या! ग्लोबल आउटरीच मंच में आपका स्वागत है। मैं हमारी आपातकालीन मानवीय राहत नेटवर्क का निदेशक तारिक हूँ। कौन से मानवीय कारण या वैश्विक मुद्दे आपके दिल के सबसे करीब हैं?',
      expectedFunction: 'Greeting Tariq and explaining support for humanitarian causes using "so that" or "initiative"',
      contextGoal: 'Greet Tariq, mention educational access or disaster relief, and explain why supporting vulnerable communities is vital',
      targetVocabulary: ['Good evening Tariq', 'humanitarian causes', 'disaster relief', 'educational initiatives', 'so that', 'volunteering'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Good evening, Tariq! I am deeply passionate about educational initiatives and disaster relief. We must support charities so that children in crisis zones can continue learning safely.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Tariq! I care strongly about clean water access and emergency food aid. Grassroots fundraising drives make a vital difference for vulnerable families.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good evening, Tariq! I support literacy campaigns and humanitarian volunteering. Ensuring equal access to education empowers future generations.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_tariq',
          patterns: ['good evening', 'hello', 'hi', 'tariq'],
          required: true,
        },
        {
          name: 'humanitarian_passions',
          patterns: ['humanitarian', 'disaster relief', 'education', 'initiative', 'so that', 'volunteering', 'water', 'food aid'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_238_1_so_that_infinitive',
          pattern: /so that to help/i,
          errorType: 'grammar',
          message: 'Use subject + modal after "so that": "so that children can receive education."',
          correctionPattern: 'We support initiatives so that families can rebuild their lives.',
        },
      ],
      remediationPractice: {
        id: 'rem_238_1',
        type: 'fill_blank',
        prompt: 'Fill in: "We donate so that clinics ______ (can provide) medicine."',
        options: [
          { id: 'r1', text: 'can provide', isCorrect: true },
          { id: 'r2', text: 'to provide', isCorrect: false },
        ],
        correctAnswer: 'can provide',
        explanation: '"So that" takes a subject + modal phrase.',
      },
    },
    {
      id: 'turn_238_2',
      turnIndex: 2,
      partnerPrompt:
        'Education and emergency relief are foundational pillars! When unexpected crises occur, organizing rapid aid can be challenging. How do you think local community clubs can best organize fundraising and volunteer support?',
      partnerAudioText:
        'Education and emergency relief are foundational pillars! When unexpected crises occur, organizing rapid aid can be challenging. How do you think local community clubs can best organize fundraising and volunteer support?',
      partnerQuestionHindi:
        'शिक्षा और आपातकालीन राहत मूलभूत स्तंभ हैं! जब अप्रत्याशित संकट आते हैं, तो त्वरित राहत का आयोजन करना चुनौतीपूर्ण हो सकता है। आपको क्या लगता है कि स्थानीय सामुदायिक क्लब धन जुटाने और स्वयंसेवी सहायता को सर्वोत्तम तरीके से कैसे व्यवस्थित कर सकते हैं?',
      expectedFunction: 'Proposing concrete fundraising and volunteering strategies (book drives, digital charity walks, transparency)',
      contextGoal: 'Suggest community charity drives, transparent tracking of donations, and collecting hygiene/food packages',
      targetVocabulary: ['fundraising drive', 'emergency packages', 'volunteers', 'transparency', 'so that aid arrives', 'impact'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Local clubs can organize charity bake sales and digital donation campaigns. They can also assemble emergency food and hygiene kits so that relief supplies can be dispatched immediately.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Community fundraisers and book drives are very effective. Maintaining transparency is vital so that donors know exactly how their contributions help families.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Hosting charity sports matches and partner school drives raises both awareness and funds quickly for humanitarian response teams.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'fundraising_strategies',
          patterns: ['fundraising', 'drives', 'emergency kits', 'packages', 'so that', 'transparency', 'donations', 'volunteers'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_238_2_must_to',
          pattern: /we must to organize/i,
          errorType: 'grammar',
          message: 'Do not use "to" after "must": "We must organize community drives."',
          correctionPattern: 'We must organize fundraisers so that supplies can be sent.',
        },
      ],
      remediationPractice: {
        id: 'rem_238_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes community aid fundraising?',
        options: [
          { id: 'r1', text: 'We organize charity drives so that essential supplies can be delivered quickly.', isCorrect: true },
          { id: 'r2', text: 'We organize charity drives so that to deliver supplies fast.', isCorrect: false },
        ],
        correctAnswer: 'We organize charity drives so that essential supplies can be delivered quickly.',
        explanation: 'Accurate purpose clause with "so that + subject + modal".',
      },
    },
    {
      id: 'turn_238_3',
      turnIndex: 3,
      partnerPrompt:
        'Assembling relief kits is an outstanding initiative! We are hosting a packing day for our emergency school supply boxes this Saturday morning at 10:00 AM. Would you like to volunteer with our packing team?',
      partnerAudioText:
        'Assembling relief kits is an outstanding initiative! We are hosting a packing day for our emergency school supply boxes this Saturday morning at 10:00 AM. Would you like to volunteer with our packing team?',
      partnerQuestionHindi:
        'राहत किट तैयार करना एक उत्कृष्ट पहल है! हम इस शनिवार सुबह 10:00 बजे अपने आपातकालीन स्कूल आपूर्ति बक्से के लिए एक पैकिंग दिवस की मेजबानी कर रहे हैं। क्या आप हमारी पैकिंग टीम के साथ स्वयंसेवा करना चाहेंगे?',
      expectedFunction: 'Accepting the volunteer packing invitation, confirming Saturday at 10:00 AM, and thanking Tariq',
      contextGoal: 'Accept Saturday 10 AM packing session, express joy in helping, and thank Tariq',
      targetVocabulary: ['Saturday at 10:00 AM', 'packing team', 'school supply boxes', 'Thank you Tariq', 'look forward to'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I would be honored to volunteer with the packing team this Saturday at 10:00 AM! Thank you so much for leading such important humanitarian work, Tariq.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Count me in for Saturday morning at ten! Packing school supply kits for children in need is a wonderful cause. See you then, Tariq!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Thank you, Tariq! I will definitely be there on Saturday at 10:00 AM to help package the relief boxes. Have a great evening!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'packing_acceptance',
          patterns: ['saturday', '10:00', '10 am', 'ten', 'volunteer', 'packing', 'thank you', 'tariq', 'look forward to'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_238_3_short_reply',
          pattern: /^i come pack saturday\.$/i,
          errorType: 'interaction',
          message: 'Respond with communicative warmth: "I would love to volunteer on Saturday at 10:00 AM, Tariq!"',
          correctionPattern: 'Thank you, Tariq! I look forward to packing supply boxes on Saturday at 10:00 AM.',
        },
      ],
      remediationPractice: {
        id: 'rem_238_3',
        type: 'fill_blank',
        prompt: 'Fill in: "I look forward to ______ (helping) on Saturday."',
        options: [
          { id: 'r1', text: 'helping', isCorrect: true },
          { id: 'r2', text: 'help', isCorrect: false },
        ],
        correctAnswer: 'helping',
        explanation: '"Look forward to" takes a gerund (-ing).',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 70,
  },
};
