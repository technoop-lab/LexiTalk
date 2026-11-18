import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_179: ConversationDefinition = {
  id: 'conv_a2_179',
  title: 'Executive Synthesis, Board Presentation & Strategic Alignment',
  cefr: 'A2',
  unitId: 'unit_a2_12',
  lessonLinks: ['lesson_a2_12_179'],
  estimatedMinutes: 5,
  scenario:
    'You are in the high-level boardroom of Vanguard Holdings in the City of London presenting an executive strategic briefing to Board Chairwoman Evelyn Montgomery. You need to distill multi-departmental metrics into a crisp C-suite executive summary, use formal signposting and synthesizing formulas ("To summarize our strategic position...", "The decisive factor driving growth is..."), answer high-level corporate governance and ESG queries, and establish board consensus for the upcoming fiscal strategy.',
  communicativeGoals: [
    'Deliver a high-impact executive summary and board-level presentation in English',
    'Use formal executive discourse markers ("To synthesize our strategic position", "The core driver behind this trend is...")',
    'Respond to rigorous governance, risk, and fiscal queries from board directors with precision',
    'Achieve executive consensus and formal endorsement for upcoming strategic initiatives',
  ],
  canDoStatements: [
    'Can deliver a concise executive synthesis of complex business data to senior leaders',
    'Can use formal English discourse formulas appropriate for corporate boardrooms',
    'Can articulate strategic alignment and respond to executive inquiries with poise',
  ],
  characters: [
    {
      id: 'char_evelyn_montgomery',
      name: 'Evelyn Montgomery',
      role: 'Chairwoman of the Board of Directors',
      avatar: '🏛️',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'synthesis',
        ipa: '/ˈsɪnθəsɪs/',
        partOfSpeech: 'noun',
        meaning: 'The combination of ideas to form a theory or system; a concise executive summary of complex information',
        exampleSentence: 'Our executive synthesis highlights record quarterly revenue and operational efficiency.',
        translations: { hi: 'संश्लेषण / सारांश' },
      },
      {
        word: 'governance',
        ipa: '/ˈɡʌvənəns/',
        partOfSpeech: 'noun',
        meaning: 'The action or manner of governing a state, organization, or corporation',
        exampleSentence: 'Robust corporate governance guarantees accountability and regulatory compliance.',
        translations: { hi: 'प्रशासन / कॉर्पोरेट शासन' },
      },
      {
        word: 'consensus',
        ipa: '/kənˈsensəs/',
        partOfSpeech: 'noun',
        meaning: 'A general agreement among a group of people',
        exampleSentence: 'The board reached unanimous consensus on our European expansion strategy.',
        translations: { hi: 'सर्वसम्मति / आम सहमति' },
      },
      {
        word: 'alignment',
        ipa: '/əˈlaɪnmənt/',
        partOfSpeech: 'noun',
        meaning: 'Arrangement in a straight line, or in correct relative positions; state of agreement or cooperation',
        exampleSentence: 'Total strategic alignment across all business units accelerates our market execution.',
        translations: { hi: 'सामंजस्य / रणनीतिक तालमेल' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'To synthesize our current position, three core growth engines drove our twenty-four percent margin expansion.',
        functionCategory: 'Executive Presentation Signposting & Synthesis',
        exampleSentence: 'To summarize our fiscal position...',
      },
      {
        phrase: 'The decisive factor behind this performance is our disciplined operational cost management.',
        functionCategory: 'Attributing Strategic Drivers & Core Factors',
        exampleSentence: 'The key driver of our retention is product quality.',
      },
      {
        phrase: 'Our strategic roadmap aligns fully with board ESG guidelines and long-term shareholder value.',
        functionCategory: 'Demonstrating Board & Shareholder Alignment',
        exampleSentence: 'This plan aligns with our risk governance framework.',
      },
      {
        phrase: 'We formally request board approval to authorize Phase One capital allocation.',
        functionCategory: 'Formal Motions & Resolutions in Boardrooms',
        exampleSentence: 'We seek board endorsement for this acquisition.',
      },
    ],
    grammar: {
      title: 'Boardroom Register, Discourse Synthesis & Inverted Emphatic Structures',
      conceptExplanation:
        '1. Executive Signposts for Synthesis: \n   - "To synthesize our strategic position..."\n   - "The primary catalyst driving this outcome is..."\n   - "In summary, our performance demonstrates..."\n2. Boardroom Register: High-formality vocabulary ("authorize capital allocation", "reach consensus", "demonstrate compliance", "mitigate risk").\n3. Fronted Adverbials for Strategic Impact: "By prioritizing cloud automation, we achieved £2.4M in operational savings."',
      patternFormula: 'To synthesize + [Noun Phrase], [Key Strategic Takeaway] | By + [Verb-ing], Subject + [Past / Present Perfect Metric]',
      contrastExamples: [
        {
          incorrect: 'So basically money was good and we want you bosses to give us permission.',
          correct: 'To synthesize our strategic performance: revenue grew twenty-four percent, and we formally request board authorization for Phase One.',
          explanation: 'Use high-level executive synthesis framing and formal boardroom register.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Evelyn Montgomery',
        text: 'Welcome to the boardroom. The board has reviewed your strategic briefing document. Could you provide a three-minute executive synthesis of our key strategic priorities for the coming fiscal year?',
        translation: 'बोर्ड रूम में आपका स्वागत है। बोर्ड ने आपके रणनीतिक ब्रीफिंग दस्तावेज़ की समीक्षा की है। क्या आप आगामी वित्तीय वर्ष के लिए हमारी प्रमुख रणनीतिक प्राथमिकताओं का तीन मिनट का कार्यकारी सारांश प्रदान कर सकते हैं?',
      },
      {
        speaker: 'You',
        text: 'Thank you, Madam Chairwoman. To synthesize our position: our primary focus is expanding enterprise SaaS margins by twenty-four percent while maintaining strict regulatory compliance across all European territories.',
        translation: 'धन्यवाद, मैडम चेयरवुमन। हमारी स्थिति को संक्षेप में प्रस्तुत करने के लिए: हमारा प्राथमिक ध्यान सभी यूरोपीय क्षेत्रों में सख्त नियामक अनुपालन बनाए रखते हुए एंटरप्राइज SaaS मार्जिन को चौबीस प्रतिशत तक बढ़ाना है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_179_1',
      type: 'fill_blank',
      prompt: 'Complete the executive synthesis opener: "___ (To synthesize our findings / For synthesizing findings), operational efficiency improved by eighteen percent across all units."',
      options: [
        { id: 'opt_1', text: 'To synthesize our findings', isCorrect: true },
        { id: 'opt_2', text: 'For synthesizing findings', isCorrect: false },
        { id: 'opt_3', text: 'Synthesize to our findings', isCorrect: false },
      ],
      correctAnswer: 'To synthesize our findings',
      explanation: '"To synthesize [noun phrase]" is a formal executive discourse signpost.',
    },
    {
      id: 'cp_a2_179_2',
      type: 'multiple_choice',
      prompt: 'Which sentence demonstrates the appropriate register for a corporate boardroom request?',
      options: [
        { id: 'opt_1', text: 'We formally request board authorization to commence Phase One capital deployment.', isCorrect: true },
        { id: 'opt_2', text: 'We want the board to give us the green light and money.', isCorrect: false },
        { id: 'opt_3', text: 'Please bosses say yes to our spending.', isCorrect: false },
      ],
      correctAnswer: 'We formally request board authorization to commence Phase One capital deployment.',
      explanation: 'Uses formal executive phrasing suitable for governance boards.',
    },
    {
      id: 'cp_a2_179_3',
      type: 'multiple_choice',
      prompt: 'Which statement articulates strategic governance alignment?',
      options: [
        { id: 'opt_1', text: 'This initiative aligns completely with our enterprise risk management framework and ESG standards.', isCorrect: true },
        { id: 'opt_2', text: 'This initiative makes us look nice for the laws and things.', isCorrect: false },
        { id: 'opt_3', text: 'We don’t care about ESG rules as long as we make cash.', isCorrect: false },
      ],
      correctAnswer: 'This initiative aligns completely with our enterprise risk management framework and ESG standards.',
      explanation: 'Accurately references corporate governance and ESG standards.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_179_1',
      scenarioContext: 'Open an executive summary.',
      prompt: 'Build: "To synthesize our strategic position our margins expanded twenty-four percent."',
      targetStructure: 'To synthesize our strategic position our margins expanded twenty-four percent',
      wordBank: ['To', 'synthesize', 'our', 'strategic', 'position', 'our', 'margins', 'expanded', 'twenty-four', 'percent', 'synthesizing', 'was'],
      acceptableSolutions: [
        'To synthesize our strategic position, our margins expanded twenty-four percent.',
        'To synthesize our strategic position our margins expanded twenty-four percent.',
      ],
      explanation: 'Executive synthesis formula with "To synthesize...".',
    },
    {
      id: 'sc_a2_179_2',
      scenarioContext: 'Formulate a formal board motion.',
      prompt: 'Build: "We formally request board authorization for Phase One."',
      targetStructure: 'We formally request board authorization for Phase One',
      wordBank: ['We', 'formally', 'request', 'board', 'authorization', 'for', 'Phase', 'One', 'asking', 'grant'],
      acceptableSolutions: [
        'We formally request board authorization for Phase One.',
      ],
      explanation: 'Formal boardroom motion structure.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_179_1',
      turnIndex: 1,
      partnerPrompt:
        'Welcome to the boardroom. The board of directors has convened to evaluate your strategic transformation plan. Could you open with a concise executive synthesis of our current performance and the primary growth catalyst for the next fiscal year?',
      partnerAudioText:
        'Welcome to the boardroom. The board of directors has convened to evaluate your strategic transformation plan. Could you open with a concise executive synthesis of our current performance and the primary growth catalyst for the next fiscal year?',
      partnerQuestionHindi:
        'बोर्ड रूम में आपका स्वागत है। आपकी रणनीतिक परिवर्तन योजना का मूल्यांकन करने के लिए निदेशक मंडल की बैठक बुलाई गई है। क्या आप हमारे वर्तमान प्रदर्शन और अगले वित्तीय वर्ष के लिए प्राथमिक विकास उत्प्रेरक के संक्षिप्त कार्यकारी सारांश के साथ शुरुआत कर सकते हैं?',
      expectedFunction: 'Deliver Executive Synthesis using Formal Boardroom Register & Strategic Discourse Markers',
      contextGoal:
        'Synthesize current performance stating 24% margin growth driven by cloud efficiency and international market expansion.',
      targetVocabulary: ['To synthesize our strategic position', 'the decisive catalyst driving our performance', 'expanded margins by twenty-four percent'],
      suggestedResponses: [
        {
          label: 'Executive Synthesis (Boardroom Register)',
          text: 'Thank you, Madam Chairwoman. To synthesize our position: our strategic focus on automation expanded operating margins by twenty-four percent this year. The primary growth catalyst for next year will be expanding our enterprise SaaS offerings into Western Europe.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Crisp High-Level Overview',
          text: 'To summarize our strategic performance: we achieved record recurring revenue while cutting operational overhead by eighteen percent. The decisive driver behind this trajectory is our modernized cloud platform.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Executive Synthesis Opener (to synthesize / to summarize / madam chairwoman / strategic position / executive summary)',
          patterns: ['to synthesize', 'to summarize', 'madam chairwoman', 'strategic position', 'executive summary', 'in summary'],
          required: true,
        },
        {
          name: 'Growth & Margins (twenty-four percent / margins / recurring revenue / growth catalyst / enterprise / western europe / cloud / eighteen percent)',
          patterns: ['twenty-four percent', 'margins', 'recurring revenue', 'growth catalyst', 'enterprise', 'western europe', 'cloud', 'eighteen percent'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_boardroom_slang',
          pattern: 'yeah so basically we made lots of cash|we did super awesome stuff',
          errorType: 'interaction',
          message: 'In executive boardroom interactions, maintain formal register: "To synthesize our performance, revenue expanded by..."',
          correctionPattern: 'To synthesize our performance, we achieved twenty-four percent margin expansion',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_179_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "To ___ (synthesize / synthesizing) our position, operating margins increased."',
        options: [
          { id: 'opt_1', text: 'synthesize', isCorrect: true },
          { id: 'opt_2', text: 'synthesizing', isCorrect: false },
          { id: 'opt_3', text: 'synthesized', isCorrect: false },
        ],
        correctAnswer: 'synthesize',
        explanation: 'Infinitive phrase: "To synthesize".',
      },
    },
    {
      id: 'turn_a2_179_2',
      turnIndex: 2,
      partnerPrompt:
        'The financial metrics are compelling. However, the audit committee wishes to understand how this aggressive expansion complies with stringent European data sovereignty and ESG governance mandates. How do you address these governance requirements?',
      partnerAudioText:
        'The financial metrics are compelling. However, the audit committee wishes to understand how this aggressive expansion complies with stringent European data sovereignty and ESG governance mandates. How do you address these governance requirements?',
      partnerQuestionHindi:
        'वित्तीय मेट्रिक्स सम्मोहक हैं। हालाँकि, ऑडिट समिति यह समझना चाहती है कि यह आक्रामक विस्तार कड़े यूरोपीय डेटा संप्रभुता और ईएसजी शासन शासनादेशों का अनुपालन कैसे करता है। आप इन शासन आवश्यकताओं को कैसे संबोधित करते हैं?',
      expectedFunction: 'Demonstrate Governance Compliance, ESG Alignment & Risk Management',
      contextGoal:
        'Explain that all infrastructure complies fully with GDPR and European data sovereignty, and carbon-neutral data centers support ESG commitments.',
      targetVocabulary: ['comply fully with GDPR and European data sovereignty', 'align with board ESG sustainability standards', 'rigorous governance safeguards'],
      suggestedResponses: [
        {
          label: 'Comprehensive Governance & ESG Alignment',
          text: 'Our architectural roadmap complies fully with GDPR and European data sovereignty regulations by storing all client data in localized jurisdictions. Furthermore, our cloud partners operate on one hundred percent renewable energy, aligning directly with our ESG targets.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Audit Committee Reassurance',
          text: 'We have instituted rigorous governance safeguards. An independent third-party audit confirmed zero compliance gaps, ensuring total alignment with our enterprise risk management framework.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Compliance & Regulations (gdpr / data sovereignty / compliance / regulations / localized / audit committee / safeguards)',
          patterns: ['gdpr', 'data sovereignty', 'compliance', 'regulations', 'localized', 'audit committee', 'safeguards', 'jurisdictions'],
          required: true,
        },
        {
          name: 'ESG / Sustainability (esg / renewable energy / sustainability / targets / alignment / risk management / framework)',
          patterns: ['esg', 'renewable energy', 'sustainability', 'targets', 'alignment', 'risk management', 'framework', 'carbon-neutral'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_179_2',
        type: 'multiple_choice',
        prompt: 'Which statement best addresses board governance and ESG concerns?',
        options: [
          { id: 'opt_1', text: 'Our infrastructure complies fully with GDPR and aligns directly with board ESG sustainability targets.', isCorrect: true },
          { id: 'opt_2', text: 'We do not follow European rules because they cost too much money.', isCorrect: false },
          { id: 'opt_3', text: 'ESG is not important for our software company.', isCorrect: false },
        ],
        correctAnswer: 'Our infrastructure complies fully with GDPR and aligns directly with board ESG sustainability targets.',
        explanation: 'Directly addresses regulatory compliance and ESG corporate governance.',
      },
    },
    {
      id: 'turn_a2_179_3',
      turnIndex: 3,
      partnerPrompt:
        'The governance safeguards satisfy the audit committee. Before we take a formal vote, what specific resolution or authorization are you requesting from the board today?',
      partnerAudioText:
        'The governance safeguards satisfy the audit committee. Before we take a formal vote, what specific resolution or authorization are you requesting from the board today?',
      partnerQuestionHindi:
        'शासन सुरक्षा उपाय ऑडिट समिति को संतुष्ट करते हैं। इससे पहले कि हम औपचारिक मतदान करें, आज आप बोर्ड से किस विशिष्ट प्रस्ताव या प्राधिकरण का अनुरोध कर रहे हैं?',
      expectedFunction: 'Propose Formal Board Resolution with Structured Capital Request',
      contextGoal:
        'Formally request board authorization for £120,000 Phase One capital allocation to commence European deployment.',
      targetVocabulary: ['formally request board authorization', 'approve Phase One capital allocation', 'commence international expansion'],
      suggestedResponses: [
        {
          label: 'Formal Board Resolution Request',
          text: 'We formally request board authorization to approve a one hundred and twenty thousand pound Phase One capital allocation, enabling us to commence European cloud deployment in Q3.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Board Motion for Endorsement',
          text: 'We respectfully request the board to adopt a resolution approving our three-year strategic roadmap and authorizing the initial tranche of funding for immediate execution.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Formal Request / Resolution (formally request / board authorization / resolution / adopt / respectfully request / approve)',
          patterns: ['formally request', 'board authorization', 'resolution', 'adopt', 'respectfully request', 'approve', 'requesting'],
          required: true,
        },
        {
          name: 'Capital & Timeline (capital allocation / funding / one hundred and twenty thousand / phase one / q3 / roadmap / execution)',
          patterns: ['capital allocation', 'funding', 'one hundred and twenty thousand', 'phase one', 'q3', 'roadmap', 'execution', 'tranche'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_179_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We formally ___ (request board authorization / request of board authorization) to proceed."',
        options: [
          { id: 'opt_1', text: 'request board authorization', isCorrect: true },
          { id: 'opt_2', text: 'request of board authorization', isCorrect: false },
          { id: 'opt_3', text: 'requesting board authorization', isCorrect: false },
        ],
        correctAnswer: 'request board authorization',
        explanation: '"request + [noun phrase]" without unnecessary prepositions.',
      },
    },
    {
      id: 'turn_a2_179_4',
      turnIndex: 4,
      partnerPrompt:
        'The board of directors has voted unanimously in favor of your resolution! The Phase One capital allocation is officially approved. Congratulations on a masterful presentation that united financial ambition with impeccable governance.',
      partnerAudioText:
        'The board of directors has voted unanimously in favor of your resolution! The Phase One capital allocation is officially approved. Congratulations on a masterful presentation that united financial ambition with impeccable governance.',
      partnerQuestionHindi:
        'निदेशक मंडल ने सर्वसम्मति से आपके प्रस्ताव के पक्ष में मतदान किया है! चरण एक पूंजीगत आवंटन आधिकारिक तौर पर स्वीकृत है। एक उत्कृष्ट प्रस्तुति पर बधाई जिसने त्रुटिहीन शासन के साथ वित्तीय महत्वाकांक्षा को एकजुट किया।',
      expectedFunction: 'Express Boardroom Gratitude, Reaffirm Executive Commitment & Conclude Presentation',
      contextGoal:
        'Thank Chairwoman Montgomery and the board, reaffirm commitment to shareholder value, and conclude the session.',
      targetVocabulary: ['thank you Madam Chairwoman and distinguished directors', 'honored by your unanimous confidence', 'committed to delivering exceptional shareholder value'],
      suggestedResponses: [
        {
          label: 'Executive Boardroom Sign-Off',
          text: 'Thank you, Madam Chairwoman, and thank you to the distinguished board members. We are honored by your unanimous confidence and remain fully committed to delivering exceptional shareholder value and disciplined execution.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Closing Board Statement',
          text: 'Thank you for your endorsement and trust. We will provide our first quarterly progress audit to the board at the November meeting. Have a wonderful afternoon!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Board Honor (thank you / madam chairwoman / board members / directors / honored / confidence / trust)',
          patterns: ['thank you', 'madam chairwoman', 'board members', 'directors', 'honored', 'confidence', 'trust', 'endorsement'],
          required: true,
        },
        {
          name: 'Shareholder Value & Execution (shareholder value / execution / disciplined / quarterly progress / audit / november)',
          patterns: ['shareholder value', 'execution', 'disciplined', 'quarterly progress', 'audit', 'november', 'committed'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_179_4',
        type: 'multiple_choice',
        prompt: 'Which closing statement is most appropriate for concluding a successful corporate board presentation?',
        options: [
          { id: 'opt_1', text: 'Thank you, Madam Chairwoman and board members. We are honored by your confidence.', isCorrect: true },
          { id: 'opt_2', text: 'Thanks for the cash bosses see ya.', isCorrect: false },
          { id: 'opt_3', text: 'Board meeting over I leave now.', isCorrect: false },
        ],
        correctAnswer: 'Thank you, Madam Chairwoman and board members. We are honored by your confidence.',
        explanation: 'Formal, dignified, and reflects highest boardroom protocol.',
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
