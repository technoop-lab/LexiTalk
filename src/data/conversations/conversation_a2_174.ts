import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_174: ConversationDefinition = {
  id: 'conv_a2_174',
  title: 'Financial Planning, Budget Allocation & Cost-Benefit Analysis',
  cefr: 'A2',
  unitId: 'unit_a2_12',
  lessonLinks: ['lesson_a2_12_174'],
  estimatedMinutes: 5,
  scenario:
    'You are in the finance strategy suite at Vanguard Solutions in Manchester with Chief Financial Officer Victoria Sterling. You need to defend a £45,000 capital expenditure request to upgrade the enterprise cybersecurity infrastructure and cloud storage capabilities. You will contrast short-term implementation costs against long-term cost savings, use comparative financial metrics and Second Conditional justifications ("If we upgraded our servers, we would eliminate £18,000 in annual maintenance fees"), and present a clear return on investment (ROI) projection.',
  communicativeGoals: [
    'Present a structured corporate budget proposal and capital expenditure request',
    'Use Second Conditional hypothetical structures ("If we invested £45k, we would reduce...") to calculate ROI',
    'Contrast initial upfront costs with ongoing operational expenditure and cost savings',
    'Justify financial trade-offs and address executive budget concerns with evidence',
  ],
  canDoStatements: [
    'Can present a financial budget request and justify expenses using cost-benefit arguments',
    'Can use the Second Conditional to discuss hypothetical financial returns and risk mitigation',
    'Can contrast upfront capital expenses with recurring operational savings',
  ],
  characters: [
    {
      id: 'char_victoria_sterling',
      name: 'Victoria Sterling',
      role: 'Chief Financial Officer',
      avatar: '💼',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'allocation',
        ipa: '/ˌæləˈkeɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The action or process of allocating or sharing out money or resources',
        exampleSentence: 'Our requested budget allocation for IT infrastructure is forty-five thousand pounds.',
        translations: { hi: 'आवंटन / बजट हिस्सेदारी' },
      },
      {
        word: 'expenditure',
        ipa: '/ɪkˈspendɪtʃə(r)/',
        partOfSpeech: 'noun',
        meaning: 'An amount of money spent on something',
        exampleSentence: 'Capital expenditure on new servers will lower our monthly operational costs.',
        translations: { hi: 'व्यय / खर्च' },
      },
      {
        word: 'return on investment',
        ipa: '/rɪˈtɜːn ɒn ɪnˈvestmənt/',
        partOfSpeech: 'noun',
        meaning: 'A performance measure used to evaluate the efficiency or profitability of an investment',
        exampleSentence: 'We anticipate a positive return on investment within fourteen months.',
        translations: { hi: 'निवेश पर प्रतिफल (ROI)' },
      },
      {
        word: 'justification',
        ipa: '/ˌdʒʌstɪfɪˈkeɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'Good reason or explanation for something',
        exampleSentence: 'The financial justification for the cloud migration is robust and evidenced.',
        translations: { hi: 'औचित्य / वित्तीय स्पष्टीकरण' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'If we upgraded our cloud infrastructure, we would eliminate eighteen thousand pounds in yearly maintenance.',
        functionCategory: 'Hypothetical ROI with Second Conditional',
        exampleSentence: 'If we automated billing, we would save ten hours a week.',
      },
      {
        phrase: 'Although the initial capital expense is forty-five thousand pounds, the payback period is under eighteen months.',
        functionCategory: 'Contrasting Upfront Cost with Payback Period',
        exampleSentence: 'Although it costs more initially, it lasts twice as long.',
      },
      {
        phrase: 'This investment substantially reduces the financial risk of security breach penalties.',
        functionCategory: 'Highlighting Risk Mitigation & Cost Avoidance',
        exampleSentence: 'This tool reduces error rates significantly.',
      },
      {
        phrase: 'We project an estimated thirty-two percent reduction in operational overhead over three years.',
        functionCategory: 'Projecting Long-Term Cost Reductions',
        exampleSentence: 'We project steady cost reductions.',
      },
    ],
    grammar: {
      title: 'Second Conditional for Hypothetical Business Justification & ROI Projections',
      conceptExplanation:
        '1. Second Conditional: "If + Past Simple, Subject + would / could + Base Verb". Used to propose hypothetical financial scenarios and evaluate their projected impacts:\n   - "If we allocated £45k today, we would save £18k annually." (Hypothetical investment -> projected saving)\n   - "If we didn\'t upgrade, we could face severe downtime costs."\n2. Financial Prepositions & Contrasts: "cost of £X", "savings of £Y per year", "payback period within Z months".',
      patternFormula: 'If + [Subject + Past Simple], Subject + would/could + [Base Verb] | Although + Upfront Cost, Recurring Benefit',
      contrastExamples: [
        {
          incorrect: 'If we will invest forty thousand pounds we will save money every year.',
          correct: 'If we invested forty thousand pounds, we would save eighteen thousand pounds every year.',
          explanation: 'In Second Conditional proposals, use Past Simple in the "if" clause and "would + base verb" in the result clause.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Victoria Sterling',
        text: 'Good afternoon. You have requested a £45,000 budget allocation for server modernization. That is a significant expenditure. How do you justify this investment?',
        translation: 'शुभ दोपहर। आपने सर्वर आधुनिकीकरण के लिए £45,000 बजट आवंटन का अनुरोध किया है। यह एक महत्वपूर्ण व्यय है। आप इस निवेश को कैसे सही ठहराते हैं?',
      },
      {
        speaker: 'You',
        text: 'Good afternoon, Victoria. If we modernized our cloud servers, we would eliminate £18,000 in legacy maintenance fees every year, achieving full ROI in eighteen months.',
        translation: 'शुभ दोपहर, विक्टोरिया। यदि हम अपने क्लाउड सर्वरों का आधुनिकीकरण करते हैं, तो हम हर साल पुराने रखरखाव शुल्क में £18,000 की बचत करेंगे, और अठारह महीनों में पूर्ण ROI प्राप्त करेंगे।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_174_1',
      type: 'fill_blank',
      prompt: 'Complete the financial justification: "If we ___ (invested / invest) in automated diagnostics, we would ___ (reduce / reduced) downtime by forty percent."',
      options: [
        { id: 'opt_1', text: 'invested / reduce', isCorrect: true },
        { id: 'opt_2', text: 'invest / reduced', isCorrect: false },
        { id: 'opt_3', text: 'will invest / reduce', isCorrect: false },
      ],
      correctAnswer: 'invested / reduce',
      explanation: 'Second Conditional: "If + past simple (invested), would + base verb (reduce)".',
    },
    {
      id: 'cp_a2_174_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly contrasts upfront cost with long-term return?',
      options: [
        { id: 'opt_1', text: 'Although the upfront cost is £45,000, we project full payback within eighteen months.', isCorrect: true },
        { id: 'opt_2', text: 'Although upfront cost is £45,000 but payback is eighteen months.', isCorrect: false },
        { id: 'opt_3', text: 'Despite upfront cost is £45,000, payback will fast.', isCorrect: false },
      ],
      correctAnswer: 'Although the upfront cost is £45,000, we project full payback within eighteen months.',
      explanation: '"Although + Clause, Main Clause" correctly contrasts costs without double conjunctions.',
    },
    {
      id: 'cp_a2_174_3',
      type: 'multiple_choice',
      prompt: 'Which statement accurately presents a Second Conditional ROI argument?',
      options: [
        { id: 'opt_1', text: 'If we approved this expenditure, we would cut operational overhead substantially.', isCorrect: true },
        { id: 'opt_2', text: 'If we approve this expenditure, we would cut operational overhead.', isCorrect: false },
        { id: 'opt_3', text: 'If we will approve expenditure, we will cut.', isCorrect: false },
      ],
      correctAnswer: 'If we approved this expenditure, we would cut operational overhead substantially.',
      explanation: 'Matches the Second Conditional formula: "If + past simple, would + base verb".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_174_1',
      scenarioContext: 'Propose a hypothetical saving using Second Conditional.',
      prompt: 'Build: "If we upgraded the servers we would save eighteen thousand pounds."',
      targetStructure: 'If we upgraded the servers we would save eighteen thousand pounds',
      wordBank: ['If', 'we', 'upgraded', 'the', 'servers', 'we', 'would', 'save', 'eighteen', 'thousand', 'pounds', 'will', 'upgrade'],
      acceptableSolutions: [
        'If we upgraded the servers, we would save eighteen thousand pounds.',
        'If we upgraded the servers we would save eighteen thousand pounds.',
      ],
      explanation: 'Second Conditional sentence for financial ROI.',
    },
    {
      id: 'sc_a2_174_2',
      scenarioContext: 'Contrast upfront expense with payback period.',
      prompt: 'Build: "Although the expense is high the payback period is eighteen months."',
      targetStructure: 'Although the expense is high the payback period is eighteen months',
      wordBank: ['Although', 'the', 'expense', 'is', 'high', 'payback', 'period', 'eighteen', 'months', 'but', 'despite'],
      acceptableSolutions: [
        'Although the expense is high, the payback period is eighteen months.',
        'Although the expense is high the payback period is eighteen months.',
      ],
      explanation: 'Contrastive clause with "Although".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_174_1',
      turnIndex: 1,
      partnerPrompt:
        'Good afternoon. I am reviewing your capital budget request for £45,000 to replace our legacy IT storage and servers. In a tight fiscal year, why should the finance committee prioritize this expenditure over other departmental requests?',
      partnerAudioText:
        'Good afternoon. I am reviewing your capital budget request for £45,000 to replace our legacy IT storage and servers. In a tight fiscal year, why should the finance committee prioritize this expenditure over other departmental requests?',
      partnerQuestionHindi:
        'शुभ दोपहर। मैं हमारे पुराने आईटी स्टोरेज और सर्वरों को बदलने के लिए £45,000 के आपके पूंजीगत बजट अनुरोध की समीक्षा कर रही हूँ। एक कठिन वित्तीय वर्ष में, वित्त समिति को अन्य विभागीय अनुरोधों की तुलना में इस व्यय को प्राथमिकता क्यों देनी चाहिए?',
      expectedFunction: 'Defend Budget Allocation using Second Conditional & Contrast Upfront vs Recurring Savings',
      contextGoal:
        'Explain that if we upgraded our servers, we would eliminate £18,000 in annual maintenance and achieve full payback within 18 months.',
      targetVocabulary: ['If we upgraded our servers, we would eliminate £18,000', 'payback period under eighteen months', 'reduce recurring operational costs'],
      suggestedResponses: [
        {
          label: 'Defend with Second Conditional & Payback Period',
          text: 'Good afternoon, Victoria. If we upgraded our server infrastructure, we would eliminate eighteen thousand pounds in yearly maintenance fees, achieving full return on investment within eighteen months.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Cost-Benefit Justification',
          text: 'Although the upfront capital expenditure is forty-five thousand pounds, our legacy system costs twenty-two thousand annually to patch. If we modernized now, we would cut operational overhead by thirty percent.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Second Conditional (if we upgraded / if we modernized / if we invested / would eliminate / would save / would cut)',
          patterns: ['if we upgraded', 'if we modernized', 'if we invested', 'would eliminate', 'would save', 'would cut', 'would reduce'],
          required: true,
        },
        {
          name: 'Financial Figures & Payback (eighteen thousand / 18k / forty-five thousand / 45k / payback period / eighteen months / roi / maintenance)',
          patterns: ['eighteen thousand', '18k', 'forty-five thousand', '45k', 'payback period', 'eighteen months', 'roi', 'maintenance', 'fees'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_second_cond_will',
          pattern: 'if we will upgrade we will save|if we upgrade we would save',
          errorType: 'grammar',
          message: 'Second Conditional structure: "If + Past Simple (upgraded), Subject + would + Base Verb (save)".',
          correctionPattern: 'If we upgraded our servers, we would save eighteen thousand pounds',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_174_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "If we ___ (modernized / modernize) the system, we ___ (would cut / will cut) operating costs."',
        options: [
          { id: 'opt_1', text: 'modernized / would cut', isCorrect: true },
          { id: 'opt_2', text: 'modernize / would cut', isCorrect: false },
          { id: 'opt_3', text: 'will modernize / will cut', isCorrect: false },
        ],
        correctAnswer: 'modernized / would cut',
        explanation: 'Second Conditional: past simple in "if" clause, "would" in result clause.',
      },
    },
    {
      id: 'turn_a2_174_2',
      turnIndex: 2,
      partnerPrompt:
        'The operational cost savings are promising. However, how does this expenditure protect the firm against non-financial operational risks like cybersecurity breaches or unplanned downtime?',
      partnerAudioText:
        'The operational cost savings are promising. However, how does this expenditure protect the firm against non-financial operational risks like cybersecurity breaches or unplanned downtime?',
      partnerQuestionHindi:
        'परिचालन लागत बचत आशाजनक है। हालाँकि, यह व्यय फर्म को साइबर सुरक्षा उल्लंघनों या अनियोजित डाउनटाइम जैसे गैर-वित्तीय परिचालन जोखिमों से कैसे बचाता है?',
      expectedFunction: 'Explain Risk Mitigation and Cost Avoidance using Second Conditional',
      contextGoal:
        'Explain that if a major breach occurred on legacy software, the financial penalties could exceed £200,000, so modernizing prevents catastrophic losses.',
      targetVocabulary: ['If a security breach occurred, we could face penalties', 'prevent unplanned downtime', 'essential risk mitigation'],
      suggestedResponses: [
        {
          label: 'Risk Mitigation & Penalty Avoidance (Second Conditional)',
          text: 'If a critical security breach occurred on our unpatched legacy system, we could face regulatory fines exceeding two hundred thousand pounds. Modernizing is an essential preventative investment.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Downtime & Business Continuity',
          text: 'If our current servers crashed during peak trading hours, we would lose approximately fifteen thousand pounds per hour. Upgrading guarantees 99.9% uptime and enterprise compliance.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Conditional Risk (if a breach occurred / if our servers crashed / could face / would lose / occurred)',
          patterns: ['if a breach occurred', 'if our servers crashed', 'could face', 'would lose', 'occurred', 'crashed', 'if'],
          required: true,
        },
        {
          name: 'Risk Terminology (regulatory fines / penalties / two hundred thousand / downtime / compliance / uptime / security)',
          patterns: ['regulatory fines', 'penalties', 'two hundred thousand', 'downtime', 'compliance', 'uptime', 'security', 'breach'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_second_cond_modal_could',
          pattern: 'if a breach occurs we could faced|if a breach occurred we could facing',
          errorType: 'grammar',
          message: 'Use "could + base verb" in the result clause: "we could face regulatory fines".',
          correctionPattern: 'If a breach occurred, we could face severe penalties',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_174_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes a hypothetical risk outcome?',
        options: [
          { id: 'opt_1', text: 'If a server failed, we would lose crucial customer data.', isCorrect: true },
          { id: 'opt_2', text: 'If a server failed, we will lose crucial customer data.', isCorrect: false },
          { id: 'opt_3', text: 'If a server fail, we would losing crucial customer data.', isCorrect: false },
        ],
        correctAnswer: 'If a server failed, we would lose crucial customer data.',
        explanation: 'Second Conditional: "If + past simple, would + base verb".',
      },
    },
    {
      id: 'turn_a2_174_3',
      turnIndex: 3,
      partnerPrompt:
        'That risk analysis is very persuasive. If we approve the £45,000 allocation across two quarterly tranches—£25,000 in Q3 and £20,000 in Q4—can you execute the procurement without disrupting ongoing operations?',
      partnerAudioText:
        'That risk analysis is very persuasive. If we approve the £45,000 allocation across two quarterly tranches—£25,000 in Q3 and £20,000 in Q4—can you execute the procurement without disrupting ongoing operations?',
      partnerQuestionHindi:
        'वह जोखिम विश्लेषण बहुत प्रेरक है। यदि हम दो त्रैमासिक किस्तों में £45,000 के आवंटन को मंजूरी देते हैं—Q3 में £25,000 और Q4 में £20,000—तो क्या आप चल रहे कार्यों को बाधित किए बिना खरीद को निष्पादित कर सकते हैं?',
      expectedFunction: 'Accept Phased Budget Approval, Confirm Seamless Execution & Timeline',
      contextGoal:
        'Accept the phased quarterly allocation and confirm that deployment will take place during scheduled weekend maintenance windows.',
      targetVocabulary: ['two quarterly tranches is completely viable', 'zero downtime for daily operations', 'execute procurement smoothly'],
      suggestedResponses: [
        {
          label: 'Accept Phased Tranches & Confirm Execution',
          text: 'Splitting the budget across two tranches is completely viable, Victoria. We will execute the migrations during scheduled weekend windows, ensuring zero disruption to daily business.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Confirm Phased Rollout',
          text: 'That phased structure aligns perfectly with our procurement plan. We can purchase the core hardware in Q3 and complete the cloud synchronization in Q4 without any operational downtime.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Acceptance (viable / aligns perfectly / agree / sounds good / works well / splitting)',
          patterns: ['viable', 'aligns perfectly', 'agree', 'sounds good', 'works well', 'splitting', 'tranches'],
          required: true,
        },
        {
          name: 'Disruption & Maintenance (weekend / zero disruption / downtime / daily business / procurement / scheduled)',
          patterns: ['weekend', 'zero disruption', 'downtime', 'daily business', 'procurement', 'scheduled', 'q3', 'q4'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_174_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We will complete the rollout with ___ (zero disruption / zero of disruption) to staff."',
        options: [
          { id: 'opt_1', text: 'zero disruption', isCorrect: true },
          { id: 'opt_2', text: 'zero of disruption', isCorrect: false },
          { id: 'opt_3', text: 'zero disrupting', isCorrect: false },
        ],
        correctAnswer: 'zero disruption',
        explanation: '"zero disruption" is standard business phrasing.',
      },
    },
    {
      id: 'turn_a2_174_4',
      turnIndex: 4,
      partnerPrompt:
        'Excellent! I will include this £45,000 capital allocation in the revised Q3 finance deck for the executive board sign-off. Thank you for presenting a thorough and defensible business case.',
      partnerAudioText:
        'Excellent! I will include this £45,000 capital allocation in the revised Q3 finance deck for the executive board sign-off. Thank you for presenting a thorough and defensible business case.',
      partnerQuestionHindi:
        'उत्कृष्ट! मैं कार्यकारी बोर्ड के हस्ताक्षर के लिए संशोधित Q3 वित्त डेक में इस £45,000 पूंजीगत आवंटन को शामिल करूँगी। एक संपूर्ण और बचाव योग्य व्यावसायिक मामला प्रस्तुत करने के लिए धन्यवाद।',
      expectedFunction: 'Express Gratitude, Confirm SOW & Conclude Financial Review',
      contextGoal:
        'Thank Victoria for her support, confirm you will send the vendor pricing quotes, and conclude the meeting.',
      targetVocabulary: ['thank you Victoria', 'send the finalized vendor quotes', 'appreciate the board support'],
      suggestedResponses: [
        {
          label: 'Professional Finance Sign-Off',
          text: 'Thank you very much, Victoria. I appreciate your support. I will email the finalized vendor pricing quotes and project milestones by five PM.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Enthusiastic Close',
          text: 'Thank you for approving the proposal. We look forward to delivering strong ROI and enhanced security for the organization. Have a great day!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Respect (thank you / thanks / victoria / appreciate / support / approving)',
          patterns: ['thank you', 'thanks', 'victoria', 'appreciate', 'support', 'approving', 'great'],
          required: true,
        },
        {
          name: 'Documentation & Follow-up (vendor / quotes / pricing / email / five pm / milestones / roi)',
          patterns: ['vendor', 'quotes', 'pricing', 'email', 'five pm', 'milestones', 'roi', 'deck'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_174_4',
        type: 'multiple_choice',
        prompt: 'Which closing sentence is most professional after getting a budget approved?',
        options: [
          { id: 'opt_1', text: 'Thank you, Victoria. I will email the finalized vendor quotes this afternoon.', isCorrect: true },
          { id: 'opt_2', text: 'Money is mine now thank you.', isCorrect: false },
          { id: 'opt_3', text: 'See you finance person.', isCorrect: false },
        ],
        correctAnswer: 'Thank you, Victoria. I will email the finalized vendor quotes this afternoon.',
        explanation: 'Polite, professional, and establishes immediate operational follow-through.',
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
