import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_170: ConversationDefinition = {
  id: 'conv_a2_170',
  title: 'Client Consultations, Expectation Setting & Formal Agreements',
  cefr: 'A2',
  unitId: 'unit_a2_12',
  lessonLinks: ['lesson_a2_12_170'],
  estimatedMinutes: 5,
  scenario:
    'You are in a formal client consultation room in London meeting with prospective corporate client Eleanor Wright, Vice President at Global Capital Partners. Eleanor wants a custom analytics portal with real-time portfolio dashboards, but has aggressive expectations for a 4-week delivery. You need to present formal service offerings, set realistic expectations using future continuous ("We will be conducting weekly reviews") and formal conditional modals ("Should you require additional integrations, we would be pleased to..."), clarify project scope, and establish mutual trust.',
  communicativeGoals: [
    'Conduct a formal, polished client discovery and consultation meeting',
    'Use the Future Continuous ("will be conducting", "will be monitoring") to describe ongoing scheduled processes',
    'Use formal conditional structures ("Should you require...", "Would you prefer...") for client proposals',
    'Establish clear project scope boundaries, delivery expectations, and next steps',
  ],
  canDoStatements: [
    'Can conduct a professional business consultation with a prospective client in English',
    'Can use the Future Continuous to outline structured workflows and recurring updates',
    'Can use formal diplomatic language to set realistic expectations and establish terms',
  ],
  characters: [
    {
      id: 'char_eleanor_wright',
      name: 'Eleanor Wright',
      role: 'Vice President of Client Operations',
      avatar: '💼',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'consultation',
        ipa: '/ˌkɒnslˈteɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'A formal meeting with an expert or professional to seek advice or discussion',
        exampleSentence: 'Our initial consultation will clarify your technical architecture and design needs.',
        translations: { hi: 'परामर्श / औपचारिक सलाह बैठक' },
      },
      {
        word: 'expectation',
        ipa: '/ˌekspekˈteɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'A strong belief that something will happen or be the case in the future',
        exampleSentence: 'Setting realistic expectations early ensures high client satisfaction.',
        translations: { hi: 'अपेक्षा / उम्मीद' },
      },
      {
        word: 'deliverable',
        ipa: '/dɪˈlɪvərəbl/',
        partOfSpeech: 'noun',
        meaning: 'A tangible work product or milestone provided to a client',
        exampleSentence: 'Each sprint includes a concrete, testable deliverable.',
        translations: { hi: 'देय वस्तु / परियोजना परिणाम' },
      },
      {
        word: 'scope',
        ipa: '/skəʊp/',
        partOfSpeech: 'noun',
        meaning: 'The extent of the area or subject matter that something deals with or to which it is relevant',
        exampleSentence: 'Any features beyond the agreed scope will require a change order.',
        translations: { hi: 'कार्यक्षेत्र / दायरा' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'We will be conducting weekly progress demonstrations throughout the onboarding phase.',
        functionCategory: 'Describing Ongoing Process with Future Continuous',
        exampleSentence: 'We will be monitoring performance metrics daily.',
      },
      {
        phrase: 'Should you require customized analytics reports, we would be delighted to include that.',
        functionCategory: 'Formal Conditional Offers with "Should you require"',
        exampleSentence: 'Should you have any questions, please contact me.',
      },
      {
        phrase: 'To ensure exceptional quality, a six-week timeline is more realistic than four weeks.',
        functionCategory: 'Setting Realistic Timelines Diplomatically',
        exampleSentence: 'To prevent delays, we recommend an initial audit.',
      },
      {
        phrase: 'I will draft a formal statement of work outlining all agreed milestones by tomorrow morning.',
        functionCategory: 'Confirming Formal Documentation & Next Steps',
        exampleSentence: 'We will send the proposal by Friday.',
      },
    ],
    grammar: {
      title: 'Future Continuous for Formal Service Outlines & Formal Inversions',
      conceptExplanation:
        '1. Future Continuous: "Subject + will be + Verb-ing". Used to describe events that will be in progress or part of a regular scheduled routine:\n   - "Our lead architect will be working with your team daily."\n   - "We will be providing weekly demo sessions."\n2. Formal Conditional Inversion: "Should you + Base Verb..." (replaces "If you ever..."): \n   - "Should you require additional user seats, we can adjust the tier immediately."\n3. Setting Expectations Politely: "We would recommend...", "It would be prudent to...".',
      patternFormula: 'Subject + will be + [Verb-ing] | Should you + [Base Verb], we would be pleased to + [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'We will work on it continuously and if you will need help we help you.',
          correct: 'We will be working closely with your team, and should you need assistance, we will be available immediately.',
          explanation: 'Use Future Continuous for routine progress and formal conditional "should you need".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Eleanor Wright',
        text: 'Good morning. Global Capital Partners requires a robust portfolio dashboard. We would like the first release ready in four weeks. Is that achievable?',
        translation: 'शुभ प्रभात। ग्लोबल कैपिटल पार्टनर्स को एक मजबूत पोर्टफोलियो डैशबोर्ड की आवश्यकता है। हम चाहते हैं कि पहली रिलीज़ चार सप्ताह में तैयार हो जाए। क्या यह संभव है?',
      },
      {
        speaker: 'You',
        text: 'Good morning, Eleanor. To ensure complete security and rigorous testing, a six-week timeline is more realistic. We will be providing weekly demos so you see continuous progress.',
        translation: 'शुभ प्रभात, एलेनोर। पूर्ण सुरक्षा और कठोर परीक्षण सुनिश्चित करने के लिए, छह सप्ताह की समय-सीमा अधिक यथार्थवादी है। हम साप्ताहिक डेमो प्रदान करते रहेंगे ताकि आप निरंतर प्रगति देख सकें।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_170_1',
      type: 'fill_blank',
      prompt: 'Complete the formal workflow description: "Our engineering lead ___ (will be conducting / is conduct) bi-weekly review sessions with your stakeholders."',
      options: [
        { id: 'opt_1', text: 'will be conducting', isCorrect: true },
        { id: 'opt_2', text: 'is conduct', isCorrect: false },
        { id: 'opt_3', text: 'will conducting', isCorrect: false },
      ],
      correctAnswer: 'will be conducting',
      explanation: 'Future Continuous form: "will be conducting".',
    },
    {
      id: 'cp_a2_170_2',
      type: 'multiple_choice',
      prompt: 'Which formal conditional sentence is correct?',
      options: [
        { id: 'opt_1', text: 'Should you require custom reporting, we would be pleased to include it in the contract.', isCorrect: true },
        { id: 'opt_2', text: 'Should you will require custom reporting, we will be pleased.', isCorrect: false },
        { id: 'opt_3', text: 'Should you required custom reporting, we would include.', isCorrect: false },
      ],
      correctAnswer: 'Should you require custom reporting, we would be pleased to include it in the contract.',
      explanation: '"Should you + base verb" is the formal conditional pattern.',
    },
    {
      id: 'cp_a2_170_3',
      type: 'multiple_choice',
      prompt: 'Which phrase manages client timeline expectations diplomatically?',
      options: [
        { id: 'opt_1', text: 'To ensure data security and compliance, a six-week rollout is more realistic than four weeks.', isCorrect: true },
        { id: 'opt_2', text: 'Four weeks is impossible, you are crazy.', isCorrect: false },
        { id: 'opt_3', text: 'We cannot do four weeks because we are too busy.', isCorrect: false },
      ],
      correctAnswer: 'To ensure data security and compliance, a six-week rollout is more realistic than four weeks.',
      explanation: 'Diplomatic phrasing linking timeline directly to client quality and security.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_170_1',
      scenarioContext: 'Describe an ongoing future service routine.',
      prompt: 'Build: "We will be providing weekly demo sessions throughout the project."',
      targetStructure: 'We will be providing weekly demo sessions throughout the project',
      wordBank: ['We', 'will', 'be', 'providing', 'weekly', 'demo', 'sessions', 'throughout', 'the', 'project', 'provide', 'are'],
      acceptableSolutions: [
        'We will be providing weekly demo sessions throughout the project.',
      ],
      explanation: 'Future Continuous describing regular routine.',
    },
    {
      id: 'sc_a2_170_2',
      scenarioContext: 'Form a formal conditional offer.',
      prompt: 'Build: "Should you require assistance we will be available immediately."',
      targetStructure: 'Should you require assistance we will be available immediately',
      wordBank: ['Should', 'you', 'require', 'assistance', 'we', 'will', 'be', 'available', 'immediately', 'would', 'requiring'],
      acceptableSolutions: [
        'Should you require assistance, we will be available immediately.',
        'Should you require assistance we will be available immediately.',
      ],
      explanation: 'Formal conditional inversion with "Should you require...".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_170_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning. Thank you for making time for this consultation. Global Capital Partners needs a bespoke real-time portfolio analytics platform. We are targeting a full deployment within four weeks. Can your firm commit to that schedule?',
      partnerAudioText:
        'Good morning. Thank you for making time for this consultation. Global Capital Partners needs a bespoke real-time portfolio analytics platform. We are targeting a full deployment within four weeks. Can your firm commit to that schedule?',
      partnerQuestionHindi:
        'शुभ प्रभात। इस परामर्श के लिए समय निकालने के लिए धन्यवाद। ग्लोबल कैपिटल पार्टनर्स को एक विशेष रीयल-टाइम पोर्टफोलियो एनालिटिक्स प्लेटफ़ॉर्म की आवश्यकता है। हम चार सप्ताह के भीतर पूर्ण परिनियोजन का लक्ष्य बना रहे हैं। क्या आपकी फर्म उस समय सारणी के लिए प्रतिबद्ध हो सकती है?',
      expectedFunction: 'Set Realistic Expectations Politely & Outline Regular Workflow using Future Continuous',
      contextGoal:
        'Explain diplomatically that 6 weeks ensures data compliance, and mention that you will be providing weekly demos.',
      targetVocabulary: ['six weeks is more realistic to ensure security', 'will be providing weekly progress demos', 'rigorous quality assurance'],
      suggestedResponses: [
        {
          label: 'Diplomatic Timeline & Future Continuous Workflow',
          text: 'Good morning, Eleanor. To guarantee bank-grade security and thorough testing, a six-week timeline is more realistic. We will be providing weekly live demonstrations so you can monitor every milestone.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Structured Proposal & Regular Reviews',
          text: 'Welcome, Eleanor. While four weeks is tight for compliance, we can deliver an interactive prototype in three weeks, and our team will be conducting weekly reviews throughout the six-week rollout.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Realistic Timeline / Compliance (six weeks / realistic / compliance / security / quality / guarantee / prototype)',
          patterns: ['six weeks', 'realistic', 'compliance', 'security', 'quality', 'guarantee', 'prototype', 'testing'],
          required: true,
        },
        {
          name: 'Future Continuous / Routine (will be providing / will be conducting / weekly demos / demonstrations / reviews / progress)',
          patterns: ['will be providing', 'will be conducting', 'will be sharing', 'weekly', 'demos', 'demonstrations', 'reviews', 'progress'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_future_continuous_be',
          pattern: 'we will providing weekly demos|we will to be providing',
          errorType: 'grammar',
          message: 'The Future Continuous requires "will be + -ing": "We will be providing weekly demonstrations."',
          correctionPattern: 'We will be providing weekly demonstrations',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_170_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Our team ___ (will be sending / will sending) status emails every Friday."',
        options: [
          { id: 'opt_1', text: 'will be sending', isCorrect: true },
          { id: 'opt_2', text: 'will sending', isCorrect: false },
          { id: 'opt_3', text: 'is send', isCorrect: false },
        ],
        correctAnswer: 'will be sending',
        explanation: 'Future Continuous requires "will be + verb-ing".',
      },
    },
    {
      id: 'turn_a2_170_2',
      turnIndex: 2,
      partnerPrompt:
        'A six-week timeframe with weekly interactive demos sounds very sensible given our compliance requirements. What happens if our trading desk requests additional custom API integrations during development?',
      partnerAudioText:
        'A six-week timeframe with weekly interactive demos sounds very sensible given our compliance requirements. What happens if our trading desk requests additional custom API integrations during development?',
      partnerQuestionHindi:
        'हमारी अनुपालन आवश्यकताओं को देखते हुए साप्ताहिक इंटरैक्टिव डेमो के साथ छह सप्ताह की समय-सीमा बहुत समझदारी भरी लगती है। क्या होगा यदि हमारा ट्रेडिंग डेस्क विकास के दौरान अतिरिक्त कस्टम एपीआई एकीकरण का अनुरोध करता है?',
      expectedFunction: 'Present Formal Change Policy using Formal Conditional ("Should you require...")',
      contextGoal:
        'Explain that should they require additional API integrations, you would be delighted to provide a change order estimate without delaying core deliverables.',
      targetVocabulary: ['Should you require additional integrations', 'would be pleased to evaluate', 'formal change order'],
      suggestedResponses: [
        {
          label: 'Formal Conditional Offer ("Should you require...")',
          text: 'Should you require extra API integrations, our technical architect will evaluate the specifications immediately and provide a transparent change order without halting core development.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Flexible Formal Process',
          text: 'Should your trading team need specific connectors, we would be delighted to accommodate them through a modular add-on so your core launch remains on schedule.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Formal Conditional (should you require / should you need / if you require / would be pleased / would be delighted)',
          patterns: ['should you require', 'should you need', 'if you require', 'if you need', 'would be pleased', 'would be delighted', 'should'],
          required: true,
        },
        {
          name: 'Scope / Change Order (change order / integrations / api / evaluation / modular / add-on / specifications)',
          patterns: ['change order', 'integrations', 'api', 'evaluation', 'modular', 'add-on', 'specifications', 'core'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_should_you_inversion',
          pattern: 'should you will require|should you to require',
          errorType: 'grammar',
          message: 'In formal conditional inversions, use the bare infinitive: "Should you require..." (no "will" or "to").',
          correctionPattern: 'Should you require additional integrations, we will assist',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_170_2',
        type: 'multiple_choice',
        prompt: 'Which formal conditional sentence is grammatically correct?',
        options: [
          { id: 'opt_1', text: 'Should you require further adjustments, please notify our lead.', isCorrect: true },
          { id: 'opt_2', text: 'Should you will require further adjustments, please notify.', isCorrect: false },
          { id: 'opt_3', text: 'Should you to require adjustments, please notify.', isCorrect: false },
        ],
        correctAnswer: 'Should you require further adjustments, please notify our lead.',
        explanation: '"Should you + bare infinitive" for formal conditionals.',
      },
    },
    {
      id: 'turn_a2_170_3',
      turnIndex: 3,
      partnerPrompt:
        'That provides great clarity and reassures our investment committee. What documentation will you be preparing to formalize this scope and initiate the onboarding process?',
      partnerAudioText:
        'That provides great clarity and reassures our investment committee. What documentation will you be preparing to formalize this scope and initiate the onboarding process?',
      partnerQuestionHindi:
        'यह बहुत स्पष्टता प्रदान करता है और हमारी निवेश समिति को आश्वस्त करता है। इस कार्यक्षेत्र को औपचारिक रूप देने और ऑनबोर्डिंग प्रक्रिया शुरू करने के लिए आप कौन सा दस्तावेज तैयार करेंगे?',
      expectedFunction: 'Outline Next Steps & Formal Agreement Documents using Future Continuous',
      contextGoal:
        'State that you will be preparing a detailed Statement of Work (SOW) and service level agreement by tomorrow morning.',
      targetVocabulary: ['will be preparing a Statement of Work', 'detailed milestone roadmap', 'service level agreement'],
      suggestedResponses: [
        {
          label: 'Confirm SOW & Future Continuous Next Steps',
          text: 'I will be drafting a formal Statement of Work and service level agreement by tomorrow morning. It will detail our six-week roadmap, deliverables, and review schedules.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Formal Next Action',
          text: 'Our team will be compiling the complete project specification document and contract draft for your legal review by ten AM tomorrow.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Document / Agreement (statement of work / sow / agreement / contract / roadmap / specifications / sla)',
          patterns: ['statement of work', 'sow', 'agreement', 'contract', 'roadmap', 'specifications', 'sla', 'document'],
          required: true,
        },
        {
          name: 'Future Delivery (will be drafting / will be compiling / will send / tomorrow morning / by ten am)',
          patterns: ['will be drafting', 'will be compiling', 'will be preparing', 'will send', 'tomorrow', 'morning', 'ten am'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_170_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I ___ (will be preparing / am prepare) the contract draft this evening."',
        options: [
          { id: 'opt_1', text: 'will be preparing', isCorrect: true },
          { id: 'opt_2', text: 'am prepare', isCorrect: false },
          { id: 'opt_3', text: 'preparing', isCorrect: false },
        ],
        correctAnswer: 'will be preparing',
        explanation: 'Future Continuous: "will be preparing".',
      },
    },
    {
      id: 'turn_a2_170_4',
      turnIndex: 4,
      partnerPrompt:
        'Excellent! As soon as we receive the Statement of Work, our committee will sign off and transfer the initial retainer. It has been a pleasure discussing this with you.',
      partnerAudioText:
        'Excellent! As soon as we receive the Statement of Work, our committee will sign off and transfer the initial retainer. It has been a pleasure discussing this with you.',
      partnerQuestionHindi:
        'उत्कृष्ट! जैसे ही हमें कार्य विवरण प्राप्त होगा, हमारी समिति हस्ताक्षर करेगी और प्रारंभिक रिटेनर स्थानांतरित करेगी। आपके साथ इस पर चर्चा करना खुशी की बात रही है।',
      expectedFunction: 'Express Mutual Appreciation & Conclude Consultation Formally',
      contextGoal:
        'Thank Eleanor, express enthusiasm for the partnership, and conclude the meeting professionally.',
      targetVocabulary: ['pleasure meeting you Eleanor', 'look forward to a successful collaboration', 'have a wonderful day'],
      suggestedResponses: [
        {
          label: 'Professional Formal Sign-Off',
          text: 'The pleasure was entirely mine, Eleanor. We look forward to a successful partnership with Global Capital Partners. Have a wonderful afternoon!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Enthusiastic Partnership Close',
          text: 'Thank you very much, Eleanor. We are excited to collaborate with your team. I will deliver the agreement promptly tomorrow. Have a great day!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Respect (pleasure / thank you / thanks / eleanor / appreciate / wonderful)',
          patterns: ['pleasure', 'thank you', 'thanks', 'eleanor', 'appreciate', 'wonderful', 'great'],
          required: true,
        },
        {
          name: 'Partnership / Forward Look (partnership / collaborate / collaboration / look forward / excited / global capital)',
          patterns: ['partnership', 'collaborate', 'collaboration', 'look forward', 'excited', 'global capital', 'tomorrow'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_170_4',
        type: 'multiple_choice',
        prompt: 'Which closing remark is best for ending a formal client consultation?',
        options: [
          { id: 'opt_1', text: 'Thank you, Eleanor. We look forward to a successful collaboration.', isCorrect: true },
          { id: 'opt_2', text: 'Bye Eleanor you pay money now.', isCorrect: false },
          { id: 'opt_3', text: 'See you later client.', isCorrect: false },
        ],
        correctAnswer: 'Thank you, Eleanor. We look forward to a successful collaboration.',
        explanation: 'Polite, formal, and builds long-term professional rapport.',
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
