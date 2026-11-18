import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_126: ConversationDefinition = {
  id: 'conv_a2_126',
  title: 'Workplace Collaboration, Delegating Tasks & Status Updates (Would you mind...?, deadlines)',
  cefr: 'A2',
  unitId: 'unit_a2_9',
  lessonLinks: ['lesson_a2_9_126'],
  estimatedMinutes: 5,
  scenario:
    'You are in the collaborative open-plan workspace at an environmental architecture firm in Leeds working on the Greendale Eco-Park project proposal with project engineer Dev Patel. Discuss dividing project tasks, use polite request forms ("Could you please help me with...?" and "Would you mind + verb-ing?"), set clear delivery deadlines, and provide status updates on your deliverables.',
  communicativeGoals: [
    'Ask colleagues for help politely using "Could you please help me with...?" and "Would you mind + verb-ing?"',
    'Delegate responsibilities and divide project tasks clearly ("I can handle X if you can take care of Y")',
    'Negotiate and confirm task delivery deadlines ("Can we finalize this by Thursday at 3:00 PM?")',
    'Provide concise status updates on in-progress deliverables',
  ],
  canDoStatements: [
    'Can request assistance and collaborate effectively in a professional team (CEFR A2)',
    'Can use polite workplace modals and gerund patterns correctly',
    'Can agree on division of labor and project deadlines without ambiguity',
  ],
  characters: [
    {
      id: 'char_dev_patel',
      name: 'Dev Patel',
      role: 'Senior Project Engineer & Sustainability Lead',
      avatar: '📐',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'delegate',
        ipa: '/ˈdɛlɪɡeɪt/',
        partOfSpeech: 'verb',
        meaning: 'To entrust a task or responsibility to another person in a team',
        exampleSentence: 'Let’s delegate the financial budgeting to the accounting team.',
        translations: { hi: 'काम सौंपना / जिम्मेदारी देना' },
      },
      {
        word: 'deadline',
        ipa: '/ˈdɛdlaɪn/',
        partOfSpeech: 'noun',
        meaning: 'The latest time or date by which something must be completed',
        exampleSentence: 'Our strict submission deadline for the client tender is Friday at 4:00 PM.',
        translations: { hi: 'अंतिम समय सीमा / डेडलाइन' },
      },
      {
        word: 'would you mind',
        ipa: '/wʊd juː maɪnd/',
        partOfSpeech: 'polite phrase',
        meaning: 'Used to make a very polite request (followed by verb + -ing)',
        exampleSentence: 'Would you mind reviewing the solar panel calculations before lunch?',
        translations: { hi: 'क्या आपको कोई आपत्ति होगी / क्या आप कृपया करेंगे' },
      },
      {
        word: 'collaborate',
        ipa: '/kəˈlæbəreɪt/',
        partOfSpeech: 'verb',
        meaning: 'To work jointly on an activity or project',
        exampleSentence: 'We need to collaborate closely with the structural engineering team.',
        translations: { hi: 'मिलकर काम करना / सहयोग करना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Could you please help me review the draft proposal?',
        functionCategory: 'Polite Request for Assistance (Could you please...)',
        exampleSentence: 'Could you please check these figures?',
      },
      {
        phrase: 'Would you mind checking the solar energy estimates?',
        functionCategory: 'High Politeness Request (Would you mind + -ing)',
        exampleSentence: 'Would you mind sending me the spreadsheet?',
      },
      {
        phrase: 'I can handle the slide deck if you can finalize the budget.',
        functionCategory: 'Dividing Tasks & Delegating',
        exampleSentence: 'I will write the summary if you review the data.',
      },
      {
        phrase: 'Can we aim to finish this by Thursday afternoon?',
        functionCategory: 'Setting Project Deadlines',
        exampleSentence: 'Let’s set the deadline for tomorrow at noon.',
      },
    ],
    grammar: {
      title: 'Workplace Politeness: "Could you please + base verb" & "Would you mind + V-ing"',
      conceptExplanation:
        '1. Could you please + Base Verb: "Could you please send me the updated blueprint?" (Direct, professional, standard).\n2. Would you mind + Gerund (-ing): "Would you mind reviewing these slides?"\n- Note: Answering "No, not at all" or "Sure, I\'d be happy to!" means YES, you agree to do it!\n3. Division of labor: "I\'ll take care of [Task A] if you can manage [Task B]".\n4. Deadlines: "by + Day/Time" (e.g. "by 3:00 PM on Thursday").',
      patternFormula: 'Could you please + [Base Verb] + [Object]? | Would you mind + [Verb-ing] + [Object]? | I will [Verb] if you can [Verb] by [Time]',
      contrastExamples: [
        {
          incorrect: 'Would you mind to review the slides?',
          correct: 'Would you mind reviewing the slides? / Could you please review the slides?',
          explanation: '"Would you mind" is always followed by a gerund (-ing), never an infinitive (to + verb).',
        },
        {
          incorrect: 'You must do the budget until Friday.',
          correct: 'Could you please finalize the budget by Friday afternoon?',
          explanation: 'In polite team collaboration, use modals like "Could you please" and "by Friday" (deadline limit).',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Dev Patel',
        text: 'Hi Alex! We need to submit our Greendale Eco-Park tender by Friday at 4:00 PM. How should we split the remaining workload?',
        translation: 'नमस्ते एलेक्स! हमें शुक्रवार शाम 4:00 बजे तक अपना ग्रीनडेल इको-पार्क टेंडर जमा करना है। हमें बचे हुए काम को कैसे बांटना चाहिए?',
      },
      {
        speaker: 'You',
        text: 'Hi Dev! I can handle the 3D visual mockups and presentation slides if you can finalize the carbon offset calculations. Could we aim to complete the first draft by Thursday at 2:00 PM?',
        translation: 'नमस्ते देव! यदि आप कार्बन ऑफसेट गणना को अंतिम रूप दे सकते हैं, तो मैं 3D विज़ुअल मॉकअप और प्रेजेंटेशन स्लाइड संभाल सकता हूँ। क्या हम गुरुवार दोपहर 2:00 बजे तक पहला ड्राफ्ट पूरा करने का लक्ष्य रख सकते हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_126_1',
      type: 'fill_blank',
      prompt: 'Complete the polite request: "Would you mind ___ (check / checking / to check) the environmental report?"',
      options: [
        { id: 'opt_1', text: 'checking', isCorrect: true },
        { id: 'opt_2', text: 'check', isCorrect: false },
        { id: 'opt_3', text: 'to check', isCorrect: false },
      ],
      correctAnswer: 'checking',
      explanation: '"Would you mind" requires a gerund (-ing form).',
    },
    {
      id: 'cp_a2_126_2',
      type: 'multiple_choice',
      prompt: 'Which sentence is the most professional way to ask for a colleague’s assistance?',
      options: [
        { id: 'opt_1', text: 'Could you please help me with the financial summary this afternoon?', isCorrect: true },
        { id: 'opt_2', text: 'You do the financial summary now.', isCorrect: false },
        { id: 'opt_3', text: 'Give me financial summary fast.', isCorrect: false },
      ],
      correctAnswer: 'Could you please help me with the financial summary this afternoon?',
      explanation: '"Could you please help me with..." is polite and professional.',
    },
    {
      id: 'cp_a2_126_3',
      type: 'multiple_choice',
      prompt: 'What preposition specifies a completion deadline time limit?',
      options: [
        { id: 'opt_1', text: 'by (e.g. by 4:00 PM on Friday)', isCorrect: true },
        { id: 'opt_2', text: 'during', isCorrect: false },
        { id: 'opt_3', text: 'since', isCorrect: false },
      ],
      correctAnswer: 'by (e.g. by 4:00 PM on Friday)',
      explanation: '"By" indicates the deadline by which an action must finish.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_126_1',
      scenarioContext: 'Make a polite request with "Would you mind".',
      prompt: 'Build: "Would you mind reviewing the client presentation slides?"',
      targetStructure: 'Would + you + mind + verb-ing + object',
      wordBank: ['Would', 'you', 'mind', 'reviewing', 'the', 'client', 'presentation', 'slides', 'to', 'review', 'Could'],
      acceptableSolutions: [
        'Would you mind reviewing the client presentation slides',
        'Would you mind reviewing the client presentation slides?',
        'Would you mind reviewing the client presentation slides.',
      ],
      explanation: 'Polite request formula using "Would you mind + V-ing".',
    },
    {
      id: 'sc_a2_126_2',
      scenarioContext: 'Divide tasks with conditional coordination.',
      prompt: 'Build: "I will write the report if you calculate the budget."',
      targetStructure: 'Subject + will + base verb + object + if + subject + base verb + object',
      wordBank: ['I', 'will', 'write', 'the', 'report', 'if', 'you', 'calculate', 'the', 'budget', 'calculating', 'mind'],
      acceptableSolutions: [
        'I will write the report if you calculate the budget',
        'I will write the report if you calculate the budget.',
      ],
      explanation: 'Task delegation and coordination sentence.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_126_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi Alex! The tender submission for the Greendale Eco-Park is due to the city council on Friday afternoon. We have two main sections left: the technical renewable energy data and the executive design presentation. How should we split these tasks?',
      partnerAudioText:
        'Hi Alex! The tender submission for the Greendale Eco-Park is due to the city council on Friday afternoon. We have two main sections left: the technical renewable energy data and the executive design presentation. How should we split these tasks?',
      partnerQuestionHindi:
        'नमस्ते एलेक्स! ग्रीनडेल इको-पार्क के लिए टेंडर जमा करने की समय सीमा शुक्रवार दोपहर को नगर परिषद को है। हमारे पास दो मुख्य खंड बचे हैं: तकनीकी नवीकरणीय ऊर्जा डेटा और कार्यकारी डिजाइन प्रस्तुति। हमें इन कार्यों को कैसे विभाजित करना चाहिए?',
      expectedFunction: 'Divide Tasks & Offer Responsibilities (I will handle slides if you can take technical data)',
      contextGoal:
        'Propose dividing the workload: you will create the executive design slides and visuals if Dev can take care of the renewable energy data; suggest setting an internal deadline of Thursday at 3:00 PM.',
      targetVocabulary: ['I can handle the executive design slides and 3D visuals', 'if you can take care of the renewable energy calculations', 'aim to finish our first draft by Thursday at 3:00 PM', 'leave Friday morning for final review'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Hi Dev! I can design the executive presentation slides and 3D architectural mockups if you can take care of the renewable energy data. Could we aim to have our first draft ready by Thursday at 3:00 PM?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Task Split (I can handle / design slides / visuals / if you take technical energy data)',
          patterns: ['i can handle', 'i will', 'design', 'presentation', 'slides', 'visuals', 'if you', 'take care of', 'technical', 'renewable energy', 'data'],
          required: true,
        },
        {
          name: 'Target Deadline (Thursday / 3:00 PM / draft / by Thursday / deadline)',
          patterns: ['thursday', '3:00', '3 pm', 'draft', 'by thursday', 'deadline', 'aim to finish'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'by_vs_until_deadline',
          pattern: /\bfinish our draft until thursday\b/i,
          errorType: 'grammar',
          message: 'Use "by Thursday" for completion deadlines, not "until Thursday".',
          correctionPattern: 'finish our draft by Thursday',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_126_1',
        type: 'multiple_choice',
        prompt: 'Which preposition is used for task completion deadlines?',
        options: [
          { id: 'opt_1', text: 'We must submit the proposal by Thursday afternoon.', isCorrect: true },
          { id: 'opt_2', text: 'We must submit the proposal until Thursday afternoon.', isCorrect: false },
          { id: 'opt_3', text: 'We must submit the proposal since Thursday.', isCorrect: false },
        ],
        correctAnswer: 'We must submit the proposal by Thursday afternoon.',
        explanation: '"By" indicates the final deadline time limit.',
      },
    },
    {
      id: 'turn_a2_126_2',
      turnIndex: 2,
      partnerPrompt:
        'That split sounds ideal. I am currently running the solar generation simulations on our server. Would you mind checking the client’s feedback notes from last week to make sure we answered all their acoustic insulation questions?',
      partnerAudioText:
        'That split sounds ideal. I am currently running the solar generation simulations on our server. Would you mind checking the client’s feedback notes from last week to make sure we answered all their acoustic insulation questions?',
      partnerQuestionHindi:
        'वह विभाजन आदर्श लगता है। मैं वर्तमान में हमारे सर्वर पर सौर उत्पादन सिमुलेशन चला रहा हूँ। क्या आपको यह सुनिश्चित करने के लिए पिछले सप्ताह के क्लाइंट के फीडबैक नोट्स की जांच करने में कोई आपत्ति होगी कि हमने उनके सभी ध्वनिक इन्सुलेशन प्रश्नों का उत्तर दिया है?',
      expectedFunction: 'Agree to Request ("Not at all / I’d be happy to") & Confirm Action',
      contextGoal:
        'Accept Dev’s request using polite agreement ("Not at all, I’d be happy to check that!"); confirm you will open the client feedback file right away and integrate their acoustic comments into slide 4.',
      targetVocabulary: ['not at all, I would be happy to review that', 'will open the client feedback notes right now', 'ensure acoustic insulation specs are highlighted', 'integrate into slide 4'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Not at all, I would be happy to! I will open the client feedback notes right now and make sure their acoustic insulation questions are clearly highlighted on slide four.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Polite Agreement (not at all / happy to / sure / absolutely / no problem)',
          patterns: ['not at all', 'happy to', 'sure', 'gladly', 'absolutely', 'no problem', 'i would be happy'],
          required: true,
        },
        {
          name: 'Action Confirmation (open notes / client feedback / acoustic / slide 4 / check)',
          patterns: ['open', 'feedback', 'notes', 'acoustic', 'insulation', 'slide 4', 'check', 'highlight'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_126_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank to agree politely to "Would you mind?": "Not at ___, I’d be happy to help!"',
        options: [
          { id: 'opt_1', text: 'all', isCorrect: true },
          { id: 'opt_2', text: 'once', isCorrect: false },
          { id: 'opt_3', text: 'every', isCorrect: false },
        ],
        correctAnswer: 'all',
        explanation: '"Not at all" is the standard polite affirmative reply to "Would you mind?".',
      },
    },
    {
      id: 'turn_a2_126_3',
      turnIndex: 3,
      partnerPrompt:
        'Excellent! Could you also let me know if you need any specific data tables or charts from the engineering model for your slides? I can export them as high-resolution PNGs.',
      partnerAudioText:
        'Excellent! Could you also let me know if you need any specific data tables or charts from the engineering model for your slides? I can export them as high-resolution PNGs.',
      partnerQuestionHindi:
        'उत्कृष्ट! क्या आप मुझे यह भी बता सकते हैं कि क्या आपको अपनी स्लाइड के लिए इंजीनियरिंग मॉडल से किसी विशिष्ट डेटा तालिका या चार्ट की आवश्यकता है? मैं उन्हें उच्च-रिज़ॉल्यूशन पीएनजी के रूप में निर्यात कर सकता हूँ।',
      expectedFunction: 'Polite Request with "Could you please..." (export solar graph & rainwater table)',
      contextGoal:
        'Make a polite request using "Could you please export...": ask Dev for the monthly solar kilowatt chart and the rainwater harvesting savings table by 1:00 PM tomorrow.',
      targetVocabulary: ['could you please export the monthly solar generation chart', 'also the rainwater harvesting savings table', 'would be great if you could send them by 1:00 PM tomorrow', 'high resolution'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Could you please export the monthly solar generation chart and the rainwater harvesting savings table? If you could send those by 1:00 PM tomorrow, I will insert them straight into the presentation.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Polite Export Request (could you please / export / solar chart / rainwater table)',
          patterns: ['could you please', 'export', 'solar', 'rainwater', 'chart', 'table', 'send', 'graph'],
          required: true,
        },
        {
          name: 'Timing Specification (by 1:00 PM / tomorrow / afternoon)',
          patterns: ['by 1', '1:00', 'tomorrow', 'afternoon', 'lunchtime', 'insert', 'presentation'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_126_3',
        type: 'multiple_choice',
        prompt: 'Which request is grammatically correct and polite?',
        options: [
          { id: 'opt_1', text: 'Could you please send me the solar data table?', isCorrect: true },
          { id: 'opt_2', text: 'Could you please to send me the table?', isCorrect: false },
          { id: 'opt_3', text: 'Could you sending table?', isCorrect: false },
        ],
        correctAnswer: 'Could you please send me the solar data table?',
        explanation: '"Could you please + base verb" is the correct structure.',
      },
    },
    {
      id: 'turn_a2_126_4',
      turnIndex: 4,
      partnerPrompt:
        'I will have both charts ready in our shared cloud drive by 12:30 PM tomorrow. Let’s do a quick rehearsal together on Thursday at 4:00 PM. Thanks for being so organized on this tender, Alex!',
      partnerAudioText:
        'I will have both charts ready in our shared cloud drive by 12:30 PM tomorrow. Let’s do a quick rehearsal together on Thursday at 4:00 PM. Thanks for being so organized on this tender, Alex!',
      partnerQuestionHindi:
        'मेरे पास कल दोपहर 12:30 बजे तक हमारे साझा क्लाउड ड्राइव में दोनों चार्ट तैयार होंगे। आइए गुरुवार शाम 4:00 बजे एक साथ त्वरित रिहर्सल करें। इस टेंडर पर इतने व्यवस्थित होने के लिए धन्यवाद, एलेक्स!',
      expectedFunction: 'Confirm Thursday Rehearsal & Conclude Professional Sync',
      contextGoal:
        'Confirm the Thursday 4:00 PM rehearsal in Meeting Room 2; thank Dev for collaborating smoothly and return to designing the slides.',
      targetVocabulary: ['rehearsal on Thursday at 4:00 PM sounds perfect', 'booked Meeting Room 2 for our sync', 'thank you Dev for the great teamwork', 'let’s win this tender'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'The rehearsal on Thursday at 4:00 PM sounds perfect. I will book Meeting Room Two on our calendar now. Thank you Dev for the great collaboration—let’s win this tender!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Rehearsal Confirmation (thursday / 4:00 PM / rehearsal / meeting room / calendar)',
          patterns: ['thursday', '4:00', '4 pm', 'rehearsal', 'meeting room', 'calendar', 'sounds perfect', 'book'],
          required: true,
        },
        {
          name: 'Professional Closing (thank you / dev / collaboration / teamwork / tender)',
          patterns: ['thank you', 'thanks', 'dev', 'collaboration', 'teamwork', 'tender', 'great'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_126_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Thank you for the great ___ (collaboration / collaborating)."',
        options: [
          { id: 'opt_1', text: 'collaboration', isCorrect: true },
          { id: 'opt_2', text: 'collaborating', isCorrect: false },
          { id: 'opt_3', text: 'collaborated', isCorrect: false },
        ],
        correctAnswer: 'collaboration',
        explanation: 'Use the noun "collaboration" after "great".',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 75,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 70,
  },
};
