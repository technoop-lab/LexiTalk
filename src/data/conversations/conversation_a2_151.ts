import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_151: ConversationDefinition = {
  id: 'conv_a2_151',
  title: 'Teamwork Dynamics, Collaborating on Tasks & Dividing Roles',
  cefr: 'A2',
  unitId: 'unit_a2_11',
  lessonLinks: ['lesson_a2_11_151'],
  estimatedMinutes: 5,
  scenario:
    'You are in the project planning room at Nexus Creative Agency in Manchester. Your project manager, Sandra Martinez, is organizing the team for the new regional client campaign. You need to explain the objective of the project using purpose infinitives ("in order to", "to + verb"), divide responsibilities using contrastive linkers ("whereas", "both... and"), and coordinate progress updates.',
  communicativeGoals: [
    'Explain task objectives using infinitives of purpose ("in order to meet the deadline", "to ensure high quality")',
    'Divide and contrast team roles using "whereas" and "both... and"',
    'Ask for progress updates and offer collaborative assistance',
    'Summarize team assignments and confirm timelines',
  ],
  canDoStatements: [
    'Can explain project objectives clearly using "in order to" and "to + verb"',
    'Can divide responsibilities between team members using contrastive connectors',
    'Can ask colleagues for status updates and offer help during team planning',
  ],
  characters: [
    {
      id: 'char_sandra_martinez',
      name: 'Sandra Martinez',
      role: 'Senior Project Manager',
      avatar: '👩‍💼',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'objective',
        ipa: '/əbˈdʒektɪv/',
        partOfSpeech: 'noun',
        meaning: 'A goal or target that you want to achieve',
        exampleSentence: 'Our main objective is to launch the marketing campaign on time.',
        translations: { hi: 'उद्देश्य / लक्ष्य' },
      },
      {
        word: 'coordinate',
        ipa: '/kəʊˈɔːdɪneɪt/',
        partOfSpeech: 'verb',
        meaning: 'To organize the different elements of a complex activity so that they work together effectively',
        exampleSentence: 'I will coordinate with the design team to prepare the graphics.',
        translations: { hi: 'समन्वय करना / तालमेल बिठाना' },
      },
      {
        word: 'whereas',
        ipa: '/weərˈæz/',
        partOfSpeech: 'conjunction',
        meaning: 'In contrast or comparison with the fact that',
        exampleSentence: 'Liam is handling client interviews, whereas I am compiling the survey data.',
        translations: { hi: 'जबकि / इसके विपरीत' },
      },
      {
        word: 'collaborate',
        ipa: '/kəˈlæbəreɪt/',
        partOfSpeech: 'verb',
        meaning: 'To work jointly on an activity or project',
        exampleSentence: 'We need to collaborate closely to finish the proposal by Thursday.',
        translations: { hi: 'सहयोग करना / मिलकर काम करना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'We organized this meeting in order to divide the project duties clearly.',
        functionCategory: 'Expressing Purpose with Infinitives',
        exampleSentence: 'I called the client to clarify their requirements.',
      },
      {
        phrase: 'Elena is responsible for the design, whereas I will manage the copywriting.',
        functionCategory: 'Contrasting Roles and Assignments',
        exampleSentence: 'Tom handles the budget, whereas Anna coordinates the schedule.',
      },
      {
        phrase: 'Both our research team and the marketing department need to review the draft.',
        functionCategory: 'Using Correlative Conjunctions',
        exampleSentence: 'We need both speed and accuracy.',
      },
      {
        phrase: 'How is the client report coming along, and do you need any extra support?',
        functionCategory: 'Asking for Status Updates & Offering Help',
        exampleSentence: 'How is your section progressing today?',
      },
    ],
    grammar: {
      title: 'Infinitives of Purpose & Contrastive Linkers',
      conceptExplanation:
        '1. Infinitives of Purpose: Use "to + base verb" or "in order to + base verb" to state why an action is done (e.g., "We met to discuss roles").\n2. "Whereas": Use to contrast two distinct facts or duties in one sentence (e.g., "I prepare the slides, whereas you write the report").\n3. "Both... and": Links two items or teams acting together (e.g., "Both Liam and Sandra approved the budget").',
      patternFormula: 'Subject + Verb + [in order to / to + Base Verb] | Duty A, whereas + Duty B',
      contrastExamples: [
        {
          incorrect: 'We met for discuss the project and Liam does design and I do text.',
          correct: 'We met to discuss the project; Liam is handling the design, whereas I will write the copy.',
          explanation: 'Use "to discuss" for purpose and "whereas" for contrasting roles.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Sandra Martinez',
        text: 'Good morning! Why have we called this kickoff meeting today, and what is our primary objective?',
        translation: 'शुभ प्रभात! हमने आज यह किकऑफ बैठक क्यों बुलाई है, और हमारा प्राथमिक उद्देश्य क्या है?',
      },
      {
        speaker: 'You',
        text: 'Good morning, Sandra. We organized this meeting in order to divide team roles and ensure we launch the campaign on time.',
        translation: 'शुभ प्रभात, सैंड्रा। हमने टीम की भूमिकाओं को विभाजित करने और समय पर अभियान शुरू करने के लिए यह बैठक आयोजित की है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_151_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "We held the planning session in order ___ (to clarify / clarifying / clarify) the project goals."',
      options: [
        { id: 'opt_1', text: 'to clarify', isCorrect: true },
        { id: 'opt_2', text: 'clarifying', isCorrect: false },
        { id: 'opt_3', text: 'clarify', isCorrect: false },
      ],
      correctAnswer: 'to clarify',
      explanation: 'Use "in order to + base verb" ("in order to clarify").',
    },
    {
      id: 'cp_a2_151_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly contrasts two colleagues’ duties?',
      options: [
        { id: 'opt_1', text: 'Elena will design the visuals, whereas I will write the presentation script.', isCorrect: true },
        { id: 'opt_2', text: 'Elena will design the visuals, because I will write the presentation script.', isCorrect: false },
        { id: 'opt_3', text: 'Elena will design visuals although write script.', isCorrect: false },
      ],
      correctAnswer: 'Elena will design the visuals, whereas I will write the presentation script.',
      explanation: '"Whereas" contrasts Elena\'s duty with your duty.',
    },
    {
      id: 'cp_a2_151_3',
      type: 'multiple_choice',
      prompt: 'How do you politely ask a colleague for a progress update?',
      options: [
        { id: 'opt_1', text: 'How is the draft coming along, and do you need any assistance with it?', isCorrect: true },
        { id: 'opt_2', text: 'Give me your draft right now quickly.', isCorrect: false },
        { id: 'opt_3', text: 'Are you working or sleeping today?', isCorrect: false },
      ],
      correctAnswer: 'How is the draft coming along, and do you need any assistance with it?',
      explanation: 'Polite inquiry asking about progress and offering help.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_151_1',
      scenarioContext: 'State the purpose of creating the schedule.',
      prompt: 'Build: "We created the schedule in order to meet the deadline."',
      targetStructure: 'Subject + created the schedule + in order to meet + the deadline',
      wordBank: ['We', 'created', 'the', 'schedule', 'in', 'order', 'to', 'meet', 'deadline', 'for'],
      acceptableSolutions: [
        'We created the schedule in order to meet the deadline',
        'We created the schedule in order to meet the deadline.',
      ],
      explanation: 'Purpose infinitive with "in order to meet".',
    },
    {
      id: 'sc_a2_151_2',
      scenarioContext: 'Contrast team responsibilities.',
      prompt: 'Build: "Marco analyzes data, whereas Sarah prepares the presentation."',
      targetStructure: 'Marco analyzes data + whereas + Sarah prepares the presentation',
      wordBank: ['Marco', 'analyzes', 'data', 'whereas', 'Sarah', 'prepares', 'the', 'presentation', 'because'],
      acceptableSolutions: [
        'Marco analyzes data whereas Sarah prepares the presentation',
        'Marco analyzes data, whereas Sarah prepares the presentation.',
        'Marco analyzes data, whereas Sarah prepares the presentation',
      ],
      explanation: 'Contrastive conjunction "whereas".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_151_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning! Welcome to our sprint kickoff. Before we assign specific tasks, could you explain the main objective of this new campaign meeting?',
      partnerAudioText:
        'Good morning! Welcome to our sprint kickoff. Before we assign specific tasks, could you explain the main objective of this new campaign meeting?',
      partnerQuestionHindi:
        'शुभ प्रभात! हमारे स्प्रिंट किकऑफ में आपका स्वागत है। इससे पहले कि हम विशिष्ट कार्य सौंपें, क्या आप इस नए अभियान बैठक के मुख्य उद्देश्य को समझा सकते हैं?',
      expectedFunction: 'Explain Meeting Purpose with Infinitives (in order to organize the campaign / to divide team responsibilities / to meet client deadlines)',
      contextGoal:
        'Explain that the team is meeting in order to define roles, allocate duties, and ensure the project launches on time.',
      targetVocabulary: ['objective', 'in order to divide roles', 'to ensure', 'launch on time', 'campaign goals'],
      suggestedResponses: [
        {
          label: 'Purpose with "in order to"',
          text: 'Good morning, Sandra. We are meeting in order to clarify our project objectives, divide responsibilities, and ensure we deliver the campaign on time.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Purpose with "to + verb"',
          text: 'Good morning. Our main objective is to allocate team roles and coordinate our schedule to meet the client deadline.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Greeting & Objective (good morning / objective / goal / aim / meeting / purpose)',
          patterns: ['good morning', 'morning', 'objective', 'goal', 'aim', 'meeting', 'purpose', 'here'],
          required: true,
        },
        {
          name: 'Infinitive of Purpose (in order to / to clarify / to divide / to ensure / to organize / to meet / to allocate)',
          patterns: ['in order to', 'to clarify', 'to divide', 'to ensure', 'to organize', 'to meet', 'to allocate', 'to coordinate', 'to deliver'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_for_verb',
          pattern: 'for divide|for organize|for meet',
          errorType: 'grammar',
          message: 'Use "to + verb" or "in order to + verb" instead of "for + base verb" to express purpose.',
          correctionPattern: 'in order to divide / to meet',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_151_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We called this meeting in order ___ (to coordinate / for coordinate) our tasks."',
        options: [
          { id: 'opt_1', text: 'to coordinate', isCorrect: true },
          { id: 'opt_2', text: 'for coordinate', isCorrect: false },
          { id: 'opt_3', text: 'coordinating', isCorrect: false },
        ],
        correctAnswer: 'to coordinate',
        explanation: 'Use "in order to + base verb".',
      },
    },
    {
      id: 'turn_a2_151_2',
      turnIndex: 2,
      partnerPrompt:
        'Understood. Now let’s look at the division of work between you and Elena. How should we divide the creative and analytical roles?',
      partnerAudioText:
        'Understood. Now let’s look at the division of work between you and Elena. How should we divide the creative and analytical roles?',
      partnerQuestionHindi:
        'समझ गया। अब आपके और ऐलेना के बीच काम के विभाजन को देखते हैं। हमें रचनात्मक और विश्लेषणात्मक भूमिकाओं को कैसे विभाजित करना चाहिए?',
      expectedFunction: 'Divide Roles Using Contrastive Linkers (Elena will handle design, whereas I will manage copy / both Elena and I will collaborate)',
      contextGoal:
        'Contrast Elena’s responsibilities with your own using "whereas" or "both... and" (e.g. Elena designs graphics whereas you write copy).',
      targetVocabulary: ['whereas', 'both... and', 'responsible for', 'graphics', 'copywriting', 'analytics'],
      suggestedResponses: [
        {
          label: 'Contrasting with "whereas"',
          text: 'Elena will design the visual graphics, whereas I will write the promotional copy and analyze client feedback.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Using "both... and"',
          text: 'Elena is responsible for the design assets, whereas I manage the content, and both of us will review the final slides together.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Contrast Marker (whereas / while / but / both... and / on the other hand)',
          patterns: ['whereas', 'while', 'both', 'and', 'on the other hand', 'meanwhile'],
          required: true,
        },
        {
          name: 'Duties Division (elena / design / visual / graphics / write / copy / text / analytics / research)',
          patterns: ['elena', 'design', 'visual', 'graphics', 'write', 'copy', 'content', 'analytics', 'research', 'manage'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_151_2',
        type: 'multiple_choice',
        prompt: 'Which word correctly contrasts two people\'s duties in one sentence?',
        options: [
          { id: 'opt_1', text: 'Elena creates graphics, whereas I write the copy.', isCorrect: true },
          { id: 'opt_2', text: 'Elena creates graphics, because I write the copy.', isCorrect: false },
          { id: 'opt_3', text: 'Elena creates graphics, so that I write the copy.', isCorrect: false },
        ],
        correctAnswer: 'Elena creates graphics, whereas I write the copy.',
        explanation: '"Whereas" shows contrast between two separate tasks.',
      },
    },
    {
      id: 'turn_a2_151_3',
      turnIndex: 3,
      partnerPrompt:
        'That is a very clean division of duties. What about checking in on progress? How will you track milestones, and would you like to ask me anything regarding client deadlines?',
      partnerAudioText:
        'That is a very clean division of duties. What about checking in on progress? How will you track milestones, and would you like to ask me anything regarding client deadlines?',
      partnerQuestionHindi:
        'यह कर्तव्यों का बहुत स्पष्ट विभाजन है। प्रगति की जाँच के बारे में क्या? आप मील के पत्थर को कैसे ट्रैक करेंगे, और क्या आप क्लाइंट की समय सीमा के संबंध में मुझसे कुछ पूछना चाहेंगे?',
      expectedFunction: 'Ask Progress/Deadline Question & State Check-in Routine (We will hold a daily standup / Could you confirm the client review date?)',
      contextGoal:
        'Explain how the team will check progress (e.g. daily standup) and ask Sandra to confirm the client submission deadline.',
      targetVocabulary: ['daily standup', 'track progress', 'Could you confirm the exact deadline?', 'milestones', 'status update'],
      suggestedResponses: [
        {
          label: 'Progress Plan & Follow-up Question',
          text: 'We will hold a brief daily standup to track progress. Could you confirm if the client expects the first draft by Thursday or Friday?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Question & Update Routine',
          text: 'We plan to share daily updates on our project board. What is the final deadline for client review?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Progress Routine (daily / standup / check / track / updates / board / milestones / progress)',
          patterns: ['daily', 'standup', 'check', 'track', 'updates', 'board', 'milestones', 'progress', 'share', 'review'],
          required: true,
        },
        {
          name: 'Question about Deadline (deadline / client / when / thursday / friday / confirm / ?)',
          patterns: ['deadline', 'client', 'when', 'thursday', 'friday', 'confirm', 'date', 'expect', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_151_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Could you confirm what the client deadline ___ (is / does)?"',
        options: [
          { id: 'opt_1', text: 'is', isCorrect: true },
          { id: 'opt_2', text: 'does', isCorrect: false },
          { id: 'opt_3', text: 'are', isCorrect: false },
        ],
        correctAnswer: 'is',
        explanation: 'In indirect questions, the verb goes at the end: "what the deadline is".',
      },
    },
    {
      id: 'turn_a2_151_4',
      turnIndex: 4,
      partnerPrompt:
        'The client expects the first draft on Thursday at 3:00 PM. If both of you need any extra support with analytics or software tools, let me know immediately. Could you summarize our final action steps?',
      partnerAudioText:
        'The client expects the first draft on Thursday at 3:00 PM. If both of you need any extra support with analytics or software tools, let me know immediately. Could you summarize our final action steps?',
      partnerQuestionHindi:
        'क्लाइंट गुरुवार दोपहर 3:00 बजे पहले ड्राफ्ट की उम्मीद करता है। यदि आप दोनों को एनालिटिक्स या सॉफ्टवेयर टूल्स में किसी अतिरिक्त सहायता की आवश्यकता है, तो मुझे तुरंत बताएं। क्या आप हमारे अंतिम कार्य चरणों का संक्षेप प्रस्तुत कर सकते हैं?',
      expectedFunction: 'Summarize Action Plan & Conclude Meeting (To summarize, Elena will design, I will write copy, and we will submit the draft on Thursday)',
      contextGoal:
        'Summarize the plan: Elena handles graphics, you write copy, hold daily standups, and deliver the draft by Thursday 3:00 PM.',
      targetVocabulary: ['To summarize', 'Elena handles design', 'I write copy', 'submit by Thursday 3:00 PM', 'thank you Sandra'],
      suggestedResponses: [
        {
          label: 'Comprehensive Summary',
          text: 'To summarize: Elena will design the visuals, whereas I will produce the copy. We will hold daily standups and deliver the draft by Thursday at 3:00 PM. Thank you, Sandra!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Summary',
          text: 'In summary, Elena manages the design and I manage the content. We will submit the completed draft by Thursday at 3:00 PM. Thanks for your guidance!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Summary Marker (to summarize / in summary / so / plan / agreed)',
          patterns: ['to summarize', 'in summary', 'summary', 'so', 'plan', 'agreed', 'all set'],
          required: true,
        },
        {
          name: 'Key Assignments & Deadline (elena / design / copy / write / thursday / 3:00 / draft)',
          patterns: ['elena', 'design', 'copy', 'write', 'thursday', '3', 'draft', 'submit', 'deliver'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_151_4',
        type: 'multiple_choice',
        prompt: 'Which phrase opens a professional summary effectively?',
        options: [
          { id: 'opt_1', text: 'To summarize our agreed action points...', isCorrect: true },
          { id: 'opt_2', text: 'I talk now finish bye.', isCorrect: false },
          { id: 'opt_3', text: 'Everything is random today.', isCorrect: false },
        ],
        correctAnswer: 'To summarize our agreed action points...',
        explanation: 'Professional summary signpost.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 65,
  },
};
