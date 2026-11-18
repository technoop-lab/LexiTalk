import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_169: ConversationDefinition = {
  id: 'conv_a2_169',
  title: 'Project Deadlines, Resource Compromise & Conditional Negotiation',
  cefr: 'A2',
  unitId: 'unit_a2_12',
  lessonLinks: ['lesson_a2_12_169'],
  estimatedMinutes: 5,
  scenario:
    'You are in a negotiation meeting at Apex Logistics in Birmingham with Operations Manager David Chen. Your engineering team needs two extra weeks for quality assurance testing on the fleet management portal, but executive management insists the launch date on the 15th is fixed. You will negotiate a practical compromise using conditional connectors ("as long as", "unless", "provided that"), propose scoping trade-offs, and reach a win-win agreement on resources and deliverables.',
  communicativeGoals: [
    'Negotiate timelines, feature scope, and resource allocation constructively in a business meeting',
    'Use conditional connectors "as long as" and "provided that" with Present Simple for preconditions',
    'Use "unless" to express negative conditions and project risks ("Unless we trim features, testing will be incomplete")',
    'Propose fair trade-offs, negotiate compromises, and accept counter-offers courteously',
  ],
  canDoStatements: [
    'Can negotiate basic working arrangements and deadlines with colleagues in English',
    'Can use conditional linkers ("as long as", "unless", "provided that") to set requirements and boundaries',
    'Can propose and accept mutually beneficial compromises during a workplace discussion',
  ],
  characters: [
    {
      id: 'char_david_chen',
      name: 'David Chen',
      role: 'Operations Manager',
      avatar: '🤝',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'compromise',
        ipa: '/ˈkɒmprəmaɪz/',
        partOfSpeech: 'noun',
        meaning: 'An agreement or settlement of a dispute reached by each side making concessions',
        exampleSentence: 'We reached a fair compromise on the delivery schedule.',
        translations: { hi: 'समझौता / सुलह' },
      },
      {
        word: 'trade-off',
        ipa: '/ˈtreɪd ɒf/',
        partOfSpeech: 'noun',
        meaning: 'A balance achieved between two desirable but incompatible features',
        exampleSentence: 'There is always a trade-off between speed and thorough testing.',
        translations: { hi: 'सौदा / अदल-बदल का संतुलन' },
      },
      {
        word: 'concession',
        ipa: '/kənˈseʃn/',
        partOfSpeech: 'noun',
        meaning: 'A thing granted in response to demands in a negotiation',
        exampleSentence: 'David made a valuable concession by offering two temporary QA testers.',
        translations: { hi: 'रियायत / छूट' },
      },
      {
        word: 'condition',
        ipa: '/kənˈdɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'A requirement that must be met in an agreement',
        exampleSentence: 'We will agree on the condition that extra resources are assigned.',
        translations: { hi: 'शर्त' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'We can deliver on the 15th as long as we postpone non-essential secondary features.',
        functionCategory: 'Condition with "As long as"',
        exampleSentence: 'I can finish this today as long as there are no interruptions.',
      },
      {
        phrase: 'We will miss the launch deadline unless we reduce the secondary feature scope.',
        functionCategory: 'Negative Condition with "Unless"',
        exampleSentence: 'Unless we hurry, we will be late.',
      },
      {
        phrase: 'We can include the custom export tool provided that you assign a dedicated QA tester.',
        functionCategory: 'Condition with "Provided that"',
        exampleSentence: 'Provided that the budget is approved, we start on Monday.',
      },
      {
        phrase: 'If we meet halfway on the timeline, both teams will achieve their objectives.',
        functionCategory: 'Proposing Compromise with "Meet halfway"',
        exampleSentence: 'Let\'s meet halfway and split the difference.',
      },
    ],
    grammar: {
      title: 'Conditional Connectors in Workplace Negotiations (as long as, unless, provided that)',
      conceptExplanation:
        '1. "As long as" & "Provided that": Mean "only on the condition that". They are followed by the Present Simple (NOT "will") in the conditional clause:\n   - "We can launch on time as long as you provide (not *will provide*) extra QA staff."\n2. "Unless": Means "if not" or "except if". It introduces a negative condition with a positive verb:\n   - "Unless we reduce the scope (if we don\'t reduce the scope), we will fail the audit."\n3. Main Clause: Uses "will / can + Base Verb" to state the negotiated outcome.',
      patternFormula: 'Main Clause [will/can + Verb] + as long as / provided that + [Subject + Present Simple] | Unless + [Subject + Present Simple], Main Clause [will/can + Verb]',
      contrastExamples: [
        {
          incorrect: 'We launch on time as long as you will give us testers, and unless we don\'t hurry we fail.',
          correct: 'We can launch on time as long as you give us testers, and unless we hurry, we will fail.',
          explanation: 'Use Present Simple after "as long as" (no "will") and positive verb after "unless".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'David Chen',
        text: 'Thanks for meeting. Executive management insists the launch date on the 15th is fixed. What options do we have?',
        translation: 'मिलने के लिए धन्यवाद। कार्यकारी प्रबंधन का कहना है कि 15 तारीख की लॉन्च तिथि तय है। हमारे पास क्या विकल्प हैं?',
      },
      {
        speaker: 'You',
        text: 'We can launch on the 15th as long as we postpone secondary features to Phase 2, and provided that we get additional QA support.',
        translation: 'हम 15 तारीख को लॉन्च कर सकते हैं जब तक कि हम द्वितीयक सुविधाओं को चरण 2 के लिए स्थगित कर दें, और बशर्ते कि हमें अतिरिक्त क्यूए समर्थन मिले।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_169_1',
      type: 'fill_blank',
      prompt: 'Complete the conditional negotiation clause: "We can finish on schedule as long as your department ___ (allocates / will allocate) two assistants."',
      options: [
        { id: 'opt_1', text: 'allocates', isCorrect: true },
        { id: 'opt_2', text: 'will allocate', isCorrect: false },
        { id: 'opt_3', text: 'allocated', isCorrect: false },
      ],
      correctAnswer: 'allocates',
      explanation: 'Use Present Simple ("allocates") after "as long as".',
    },
    {
      id: 'cp_a2_169_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "unless" to express a project risk?',
      options: [
        { id: 'opt_1', text: 'Unless we trim the feature list, we will miss the launch deadline.', isCorrect: true },
        { id: 'opt_2', text: 'Unless we don’t trim the feature list, we miss the launch.', isCorrect: false },
        { id: 'opt_3', text: 'Unless we will trim the feature list, we will missing.', isCorrect: false },
      ],
      correctAnswer: 'Unless we trim the feature list, we will miss the launch deadline.',
      explanation: '"Unless" already contains the negative meaning ("if we don\'t trim").',
    },
    {
      id: 'cp_a2_169_3',
      type: 'multiple_choice',
      prompt: 'Which statement correctly offers a compromise using "provided that"?',
      options: [
        { id: 'opt_1', text: 'We will include the custom export tool provided that you assign a dedicated tester.', isCorrect: true },
        { id: 'opt_2', text: 'We will include export tool provided that you will assign tester.', isCorrect: false },
        { id: 'opt_3', text: 'We include export tool provided that you assigning tester.', isCorrect: false },
      ],
      correctAnswer: 'We will include the custom export tool provided that you assign a dedicated tester.',
      explanation: 'Use Present Simple after "provided that".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_169_1',
      scenarioContext: 'State a condition using "as long as".',
      prompt: 'Build: "We can launch on the 15th as long as we postpone secondary features."',
      targetStructure: 'We can launch on the 15th as long as we postpone secondary features',
      wordBank: ['We', 'can', 'launch', 'on', 'the', '15th', 'as', 'long', 'as', 'we', 'postpone', 'secondary', 'features', 'will', 'postponing'],
      acceptableSolutions: [
        'We can launch on the 15th as long as we postpone secondary features.',
      ],
      explanation: '"as long as + Present Simple" for conditional agreement.',
    },
    {
      id: 'sc_a2_169_2',
      scenarioContext: 'Warn about deadlines using "unless".',
      prompt: 'Build: "Unless we hire additional testers we will delay the rollout."',
      targetStructure: 'Unless we hire additional testers we will delay the rollout',
      wordBank: ['Unless', 'we', 'hire', 'additional', 'testers', 'we', 'will', 'delay', 'the', 'rollout', 'don\'t', 'hired'],
      acceptableSolutions: [
        'Unless we hire additional testers, we will delay the rollout.',
        'Unless we hire additional testers we will delay the rollout.',
      ],
      explanation: '"Unless + Present Simple" combined with First Conditional result.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_169_1',
      turnIndex: 1,
      partnerPrompt:
        'Thanks for meeting, but I have to be straightforward: our marketing launch date is fixed for the 15th. Pushing the release back by two weeks is not acceptable to executive management. What options do we have?',
      partnerAudioText:
        'Thanks for meeting, but I have to be straightforward: our marketing launch date is fixed for the 15th. Pushing the release back by two weeks is not acceptable to executive management. What options do we have?',
      partnerQuestionHindi:
        'मिलने के लिए धन्यवाद, लेकिन मुझे स्पष्ट होना होगा: हमारी मार्केटिंग लॉन्च तिथि 15 तारीख के लिए तय है। रिलीज को दो सप्ताह पीछे धकेलना कार्यकारी प्रबंधन को स्वीकार्य नहीं है। हमारे पास क्या विकल्प हैं?',
      expectedFunction: 'Propose Conditional Launch with "As long as" or Warn with "Unless"',
      contextGoal:
        'Propose keeping the 15th launch date as long as you postpone secondary features to Phase 2.',
      targetVocabulary: ['We can launch on the 15th as long as', 'postpone secondary features to Phase 2', 'Unless we reduce the scope'],
      suggestedResponses: [
        {
          label: 'Propose Conditional Launch with "As long as"',
          text: 'We understand the executive priority, David. We can launch on the 15th as long as we postpone non-essential secondary features to Phase 2.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Warn with "Unless" & Offer Core Release',
          text: 'Unless we trim the extra features, testing by the 15th will be impossible. If we focus strictly on the core platform, we will launch on time.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Conditional Connector (as long as / unless / provided that / on condition that / if)',
          patterns: ['as long as', 'unless', 'provided that', 'on condition that', 'if we postpone', 'if we focus'],
          required: true,
        },
        {
          name: 'Scoping Compromise (postpone / secondary features / phase 2 / core platform / trim / 15th / launch on time)',
          patterns: ['postpone', 'secondary features', 'phase 2', 'core platform', 'trim', '15th', 'launch on time', 'reduce'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_as_long_as_will',
          pattern: 'as long as we will postpone|as long as we will reduce',
          errorType: 'grammar',
          message: 'In conditional clauses with "as long as", use the Present Simple ("as long as we postpone"), not "will".',
          correctionPattern: 'We can launch on time as long as we postpone secondary features',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_169_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We can release on time as long as we ___ (focus / will focus) on core features."',
        options: [
          { id: 'opt_1', text: 'focus', isCorrect: true },
          { id: 'opt_2', text: 'will focus', isCorrect: false },
          { id: 'opt_3', text: 'focused', isCorrect: false },
        ],
        correctAnswer: 'focus',
        explanation: 'Use Present Simple after "as long as".',
      },
    },
    {
      id: 'turn_a2_169_2',
      turnIndex: 2,
      partnerPrompt:
        'Which specific features are you proposing to postpone? The client specifically requested the customized export tool in their initial briefing.',
      partnerAudioText:
        'Which specific features are you proposing to postpone? The client specifically requested the customized export tool in their initial briefing.',
      partnerQuestionHindi:
        'आप किन विशिष्ट सुविधाओं को स्थगित करने का प्रस्ताव कर रहे हैं? क्लाइंट ने अपनी प्रारंभिक ब्रीफिंग में विशेष रूप से कस्टमाइज्ड निर्यात टूल का अनुरोध किया था।',
      expectedFunction: 'Propose Resource Trade-Off with "Provided that" or Suggest Meeting Halfway',
      contextGoal:
        'Offer to keep the export tool provided that Operations assigns a dedicated QA tester for ten days.',
      targetVocabulary: ['keep the export tool provided that', 'assign a dedicated QA tester', 'meet halfway'],
      suggestedResponses: [
        {
          label: 'Offer Export Tool with "Provided that"',
          text: 'We can keep the export tool provided that your department assigns a dedicated QA tester to our team for the next ten days.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Suggest Meeting Halfway',
          text: 'Let\'s meet halfway: we will deliver a simplified export tool on the 15th, provided that the advanced custom filters follow in the first monthly update.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Conditional / Compromise (provided that / meet halfway / on condition that / as long as)',
          patterns: ['provided that', 'meet halfway', 'on condition that', 'as long as', 'halfway'],
          required: true,
        },
        {
          name: 'Resource / Deliverable Trade-off (export tool / assign / qa tester / tester / simplified / ten days / update)',
          patterns: ['export tool', 'assign', 'qa tester', 'tester', 'simplified', 'ten days', 'update', 'dedicated'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_provided_that_will',
          pattern: 'provided that you will assign|provided that you will give',
          errorType: 'grammar',
          message: 'Use Present Simple after "provided that": "provided that your department assigns...".',
          correctionPattern: 'We can include it provided that you assign a tester',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_169_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly uses "provided that" in a negotiation?',
        options: [
          { id: 'opt_1', text: 'We will include the tool provided that you assign a tester.', isCorrect: true },
          { id: 'opt_2', text: 'We will include the tool provided that you will assign a tester.', isCorrect: false },
          { id: 'opt_3', text: 'We include tool provided that you assigned tester.', isCorrect: false },
        ],
        correctAnswer: 'We will include the tool provided that you assign a tester.',
        explanation: 'Present Simple after "provided that".',
      },
    },
    {
      id: 'turn_a2_169_3',
      turnIndex: 3,
      partnerPrompt:
        'I can temporarily assign Sarah from our compliance team starting Monday morning to help run automated test scripts. Does that give you enough bandwidth?',
      partnerAudioText:
        'I can temporarily assign Sarah from our compliance team starting Monday morning to help run automated test scripts. Does that give you enough bandwidth?',
      partnerQuestionHindi:
        'मैं स्वचालित परीक्षण स्क्रिप्ट चलाने में मदद करने के लिए सोमवार सुबह से हमारी अनुपालन टीम से सारा को अस्थायी रूप से सौंप सकता हूँ। क्या इससे आपको पर्याप्त बैंडविड्थ मिलती है?',
      expectedFunction: 'Accept Concession, Confirm Timeline Viability & Future Capability',
      contextGoal:
        'Accept Sarah\'s assignment and confirm that with her support, you will be able to complete testing by the 14th.',
      targetVocabulary: ['will be able to complete', 'fair compromise', 'guarantee a smooth release'],
      suggestedResponses: [
        {
          label: 'Accept Concession & Confirm Capability',
          text: 'That will make a huge difference, David! With Sarah on board from Monday, we will be able to complete all critical testing by the 14th.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Confirm Fair Compromise',
          text: 'That is a fair compromise. As long as she can dedicate four hours a day to test execution, we guarantee a smooth release.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Acceptance & Ability (will be able to / huge difference / fair compromise / complete / guarantee / sounds good)',
          patterns: ['will be able to', 'huge difference', 'fair compromise', 'complete', 'guarantee', 'sounds good', 'great'],
          required: true,
        },
        {
          name: 'Resource Reference (sarah / monday / testing / 14th / smooth release / four hours)',
          patterns: ['sarah', 'monday', 'testing', '14th', 'smooth release', 'four hours', 'support'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_future_ability_form',
          pattern: 'we will can complete|we will able to complete',
          errorType: 'grammar',
          message: 'To express future ability, use "will be able to" (never "will can" or "will able to").',
          correctionPattern: 'We will be able to complete all testing on schedule',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_169_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "With extra support, we ___ (will be able to / will can) finish early."',
        options: [
          { id: 'opt_1', text: 'will be able to', isCorrect: true },
          { id: 'opt_2', text: 'will can', isCorrect: false },
          { id: 'opt_3', text: 'can able to', isCorrect: false },
        ],
        correctAnswer: 'will be able to',
        explanation: '"will be able to" expresses future capability.',
      },
    },
    {
      id: 'turn_a2_169_4',
      turnIndex: 4,
      partnerPrompt:
        'Agreed! I will send an email confirming Sarah\'s allocation right away, and you can update the project roadmap. Thank you for working with me to find a practical solution.',
      partnerAudioText:
        'Agreed! I will send an email confirming Sarah\'s allocation right away, and you can update the project roadmap. Thank you for working with me to find a practical solution.',
      partnerQuestionHindi:
        'सहमति बनी! मैं सारा के आवंटन की पुष्टि करने वाला एक ईमेल तुरंत भेजूंगा, और आप परियोजना रोडमैप को अपडेट कर सकते हैं। व्यावहारिक समाधान खोजने के लिए मेरे साथ काम करने के लिए धन्यवाद।',
      expectedFunction: 'Express Mutual Satisfaction, Acknowledge Flexibility & Confirm Next Action',
      contextGoal:
        'Thank David for his flexibility and confirm you will update the sprint board today.',
      targetVocabulary: ['appreciate your flexibility', 'update the project roadmap', 'great finding common ground'],
      suggestedResponses: [
        {
          label: 'Express Gratitude & Next Action',
          text: 'Thank you, David. I really appreciate your flexibility. I will update the project roadmap and brief Sarah on Monday morning.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Conclude with Professional Goodwill',
          text: 'It was great finding common ground. I will adjust our sprint tickets right now so everything is transparent for both teams. Have a great day!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Compromise (thank you / thanks / flexibility / common ground / appreciate / david)',
          patterns: ['thank you', 'thanks', 'flexibility', 'common ground', 'appreciate', 'david'],
          required: true,
        },
        {
          name: 'Action Confirmation (roadmap / sprint / tickets / brief / monday / transparent / update)',
          patterns: ['roadmap', 'sprint', 'tickets', 'brief', 'monday', 'transparent', 'update', 'adjust'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_169_4',
        type: 'multiple_choice',
        prompt: 'Which phrase is most professional for closing a successful negotiation?',
        options: [
          { id: 'opt_1', text: 'Thank you, David. I appreciate your flexibility in finding this solution.', isCorrect: true },
          { id: 'opt_2', text: 'Ok you give me what I wanted bye.', isCorrect: false },
          { id: 'opt_3', text: 'Good we fight and win.', isCorrect: false },
        ],
        correctAnswer: 'Thank you, David. I appreciate your flexibility in finding this solution.',
        explanation: 'Polite and professional expression of collaborative partnership.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 2,
    targetVocabularyCoveragePct: 60,
  },
};
