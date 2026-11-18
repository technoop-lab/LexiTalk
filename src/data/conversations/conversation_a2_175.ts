import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_175: ConversationDefinition = {
  id: 'conv_a2_175',
  title: 'Performance Appraisal, Constructive Feedback & Career Pathing',
  cefr: 'A2',
  unitId: 'unit_a2_12',
  lessonLinks: ['lesson_a2_12_175'],
  estimatedMinutes: 5,
  scenario:
    'You are in the private meeting suite at Apex Innovations in London participating in your annual performance appraisal review with Senior Engineering Manager Helena Scott. You will reflect on key achievements from the past year, review areas for growth using polite feedback framing and modals ("I have aimed to improve...", "I would appreciate more mentoring in..."), discuss career path aspirations towards becoming a Senior Technical Lead using future intentions and conditionals, and agree upon concrete developmental targets.',
  communicativeGoals: [
    'Participate actively and professionally in an annual performance appraisal discussion',
    'Summarize key professional milestones and contributions using the Present Perfect with time adverbs ("over the past twelve months", "consistently")',
    'Respond to constructive feedback diplomatically with reflective phrases ("I take that on board", "I am working on...")',
    'Articulate future career aspirations, promotion goals, and professional development milestones',
  ],
  canDoStatements: [
    'Can summarize personal work accomplishments and skills in a performance review in English',
    'Can receive and respond constructively to performance feedback from a manager',
    'Can state career goals and discuss professional development opportunities clearly',
  ],
  characters: [
    {
      id: 'char_helena_scott',
      name: 'Helena Scott',
      role: 'Senior Engineering Manager',
      avatar: '👩‍💼',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'appraisal',
        ipa: '/əˈpreɪzl/',
        partOfSpeech: 'noun',
        meaning: 'A formal assessment or evaluation of an employee’s performance',
        exampleSentence: 'Our annual performance appraisal provides valuable feedback on career progression.',
        translations: { hi: 'प्रदर्शन मूल्यांकन' },
      },
      {
        word: 'constructive',
        ipa: '/kənˈstrʌktɪv/',
        partOfSpeech: 'adjective',
        meaning: 'Serving a useful purpose; tending to build up or improve',
        exampleSentence: 'I really value constructive feedback because it highlights areas for technical growth.',
        translations: { hi: 'रचनात्मक / सुधारवादी' },
      },
      {
        word: 'aspiration',
        ipa: '/ˌæspəˈreɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'A hope or ambition of achieving something',
        exampleSentence: 'My long-term career aspiration is to lead architecture initiatives across the department.',
        translations: { hi: 'आकांक्षा / उच्च लक्ष्य' },
      },
      {
        word: 'mentorship',
        ipa: '/ˈmentɔːʃɪp/',
        partOfSpeech: 'noun',
        meaning: 'The guidance provided by a mentor, especially an experienced person in a company',
        exampleSentence: 'Participating in leadership mentorship will prepare me for a senior management role.',
        translations: { hi: 'मार्गदर्शन / मेंटरशिप' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Over the past year, I have consistently exceeded our sprint delivery benchmarks.',
        functionCategory: 'Summarizing Accomplishments with Present Perfect',
        exampleSentence: 'I have successfully led three cross-functional projects.',
      },
      {
        phrase: 'I take that constructive feedback on board and have already enrolled in advanced system design.',
        functionCategory: 'Responding Constructively to Feedback',
        exampleSentence: 'I appreciate that suggestion and will implement it immediately.',
      },
      {
        phrase: 'My primary career aspiration is to transition into a Senior Technical Lead role within eighteen months.',
        functionCategory: 'Expressing Long-Term Career Goals',
        exampleSentence: 'I aim to become a project lead next year.',
      },
      {
        phrase: 'I would welcome the opportunity to mentor junior engineers on the frontend team.',
        functionCategory: 'Proposing Developmental Milestones with "would welcome"',
        exampleSentence: 'I would love to take on more leadership responsibilities.',
      },
    ],
    grammar: {
      title: 'Present Perfect for Career Milestones & Modals for Future Aspirations',
      conceptExplanation:
        '1. Present Perfect for Ongoing Career Records: "Subject + have/has + Past Participle" with time frames leading up to now:\n   - "Over the past year, I have delivered four critical client deployments."\n   - "I have consistently mentored junior developers."\n2. Modals of Future Aspiration & Intention: "I would like to + Base Verb", "I aim to + Base Verb", "I hope to + Base Verb".\n3. Accepting Feedback with Diplomacy: "I take that on board", "That is a fair observation".',
      patternFormula: 'Over the past [year / six months], Subject + have + [Past Participle] | I would like to / aim to + [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'Last year I am doing many good works and I want become senior now.',
          correct: 'Over the past year, I have delivered multiple key features, and I aim to transition into a Senior Lead role.',
          explanation: 'Use Present Perfect ("have delivered") for cumulative achievements and professional verbs ("aim to transition").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Helena Scott',
        text: 'Welcome to your annual appraisal! Let\'s begin by reviewing your key accomplishments and milestones over the past twelve months.',
        translation: 'आपके वार्षिक मूल्यांकन में आपका स्वागत है! आइए पिछले बारह महीनों में आपकी प्रमुख उपलब्धियों और मील के पत्थरों की समीक्षा करके शुरुआत करें।',
      },
      {
        speaker: 'You',
        text: 'Thank you, Helena. Over the past twelve months, I have successfully led the mobile app refactoring and consistently exceeded our sprint velocity targets.',
        translation: 'धन्यवाद, हेलेना। पिछले बारह महीनों में, मैंने मोबाइल ऐप रीफैक्टरिंग का सफलतापूर्वक नेतृत्व किया है और लगातार हमारे स्प्रिंट वेग लक्ष्यों को पार किया है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_175_1',
      type: 'fill_blank',
      prompt: 'Complete the achievement statement: "Over the past year, I ___ (have delivered / delivered) six major feature releases on schedule."',
      options: [
        { id: 'opt_1', text: 'have delivered', isCorrect: true },
        { id: 'opt_2', text: 'delivered', isCorrect: false },
        { id: 'opt_3', text: 'am delivering', isCorrect: false },
      ],
      correctAnswer: 'have delivered',
      explanation: 'Use Present Perfect with the ongoing time frame "Over the past year".',
    },
    {
      id: 'cp_a2_175_2',
      type: 'multiple_choice',
      prompt: 'Which phrase accepts constructive critique most professionally?',
      options: [
        { id: 'opt_1', text: 'I take that constructive feedback on board and will prioritize delegation.', isCorrect: true },
        { id: 'opt_2', text: 'You are wrong, I do everything perfectly.', isCorrect: false },
        { id: 'opt_3', text: 'I don’t care about that feedback.', isCorrect: false },
      ],
      correctAnswer: 'I take that constructive feedback on board and will prioritize delegation.',
      explanation: '"I take that feedback on board" is the standard professional response.',
    },
    {
      id: 'cp_a2_175_3',
      type: 'multiple_choice',
      prompt: 'Which sentence states a career development goal clearly?',
      options: [
        { id: 'opt_1', text: 'I aim to transition into a Senior Lead position by expanding my system architecture skills.', isCorrect: true },
        { id: 'opt_2', text: 'I aim to transitioning into lead position soon.', isCorrect: false },
        { id: 'opt_3', text: 'I will to become senior engineer.', isCorrect: false },
      ],
      correctAnswer: 'I aim to transition into a Senior Lead position by expanding my system architecture skills.',
      explanation: '"I aim to + base verb" is grammatically accurate and professional.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_175_1',
      scenarioContext: 'Summarize past achievements using Present Perfect.',
      prompt: 'Build: "Over the past year I have exceeded all delivery targets."',
      targetStructure: 'Over the past year I have exceeded all delivery targets',
      wordBank: ['Over', 'the', 'past', 'year', 'I', 'have', 'exceeded', 'all', 'delivery', 'targets', 'did', 'exceeding'],
      acceptableSolutions: [
        'Over the past year I have exceeded all delivery targets.',
        'Over the past year, I have exceeded all delivery targets.',
      ],
      explanation: 'Present Perfect with "Over the past year".',
    },
    {
      id: 'sc_a2_175_2',
      scenarioContext: 'State a career progression goal.',
      prompt: 'Build: "I aim to transition into a Senior Lead role."',
      targetStructure: 'I aim to transition into a Senior Lead role',
      wordBank: ['I', 'aim', 'to', 'transition', 'into', 'a', 'Senior', 'Lead', 'role', 'transitioning', 'for'],
      acceptableSolutions: [
        'I aim to transition into a Senior Lead role.',
      ],
      explanation: 'Aspiration structure with "I aim to + base verb".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_175_1',
      turnIndex: 1,
      partnerPrompt:
        'Welcome, and thank you for your preparation. Let\'s start with your self-assessment. What do you consider your greatest contributions and achievements over the past year?',
      partnerAudioText:
        'Welcome, and thank you for your preparation. Let\'s start with your self-assessment. What do you consider your greatest contributions and achievements over the past year?',
      partnerQuestionHindi:
        'स्वागत है, और आपकी तैयारी के लिए धन्यवाद। आइए आपके स्व-मूल्यांकन से शुरुआत करें। पिछले एक वर्ष में आप अपने सबसे बड़े योगदान और उपलब्धियों को क्या मानते हैं?',
      expectedFunction: 'Summarize Key Achievements using Present Perfect & Professional Vocabulary',
      contextGoal:
        'Explain that over the past year, you have successfully led the mobile refactoring and mentored two junior developers.',
      targetVocabulary: ['Over the past twelve months, I have led', 'consistently exceeded sprint delivery targets', 'mentored junior developers'],
      suggestedResponses: [
        {
          label: 'Highlight Leadership & Technical Milestones (Present Perfect)',
          text: 'Thank you, Helena. Over the past twelve months, I have successfully led the mobile refactoring project, reduced application load times by thirty percent, and mentored two junior engineers.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Delivery & Team Contribution',
          text: 'I have consistently delivered our core sprint features ahead of schedule and have taken ownership of our automated testing pipeline, which lowered bug reports significantly.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Present Perfect Achievement (have led / have delivered / have mentored / have taken / have reduced / over the past year)',
          patterns: ['have led', 'have delivered', 'have mentored', 'have taken', 'have reduced', 'over the past', 'twelve months'],
          required: true,
        },
        {
          name: 'Technical / Leadership Impact (mobile / refactoring / junior / testing / sprint / pipeline / engineers / features)',
          patterns: ['mobile', 'refactoring', 'junior', 'testing', 'sprint', 'pipeline', 'engineers', 'features', 'load times'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_past_time_pp_appraisal',
          pattern: 'over the past year i led and i was deliver|last year i have led on may',
          errorType: 'grammar',
          message: 'Use the Present Perfect ("have led", "have delivered") when describing achievements over the ongoing past year.',
          correctionPattern: 'Over the past year, I have led several major initiatives',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_175_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Over the past six months, I ___ (have improved / improved) our code quality."',
        options: [
          { id: 'opt_1', text: 'have improved', isCorrect: true },
          { id: 'opt_2', text: 'improved', isCorrect: false },
          { id: 'opt_3', text: 'am improve', isCorrect: false },
        ],
        correctAnswer: 'have improved',
        explanation: 'Use Present Perfect with ongoing period "Over the past six months".',
      },
    },
    {
      id: 'turn_a2_175_2',
      turnIndex: 2,
      partnerPrompt:
        'Your technical execution has been exemplary. One developmental area I noted from peer reviews is that you tend to take on too much individual workload rather than delegating tasks to junior team members. How do you feel about that feedback?',
      partnerAudioText:
        'Your technical execution has been exemplary. One developmental area I noted from peer reviews is that you tend to take on too much individual workload rather than delegating tasks to junior team members. How do you feel about that feedback?',
      partnerQuestionHindi:
        'आपका तकनीकी निष्पादन अनुकरणीय रहा है। सहकर्मी समीक्षाओं से मैंने जो एक विकासात्मक क्षेत्र देखा है, वह यह है कि आप कनिष्ठ टीम के सदस्यों को कार्य सौंपने के बजाय बहुत अधिक व्यक्तिगत कार्यभार लेते हैं। आप उस प्रतिक्रिया के बारे में कैसा महसूस करते हैं?',
      expectedFunction: 'Accept Constructive Feedback with Professional Diplomacy & State Improvement Actions',
      contextGoal:
        'Acknowledge the feedback constructively and explain that you are actively practicing delegation and pairing sessions.',
      targetVocabulary: ['I take that constructive feedback on board', 'actively working on delegation', 'empower junior colleagues'],
      suggestedResponses: [
        {
          label: 'Accept Feedback & Outline Delegation Strategy',
          text: 'I take that constructive feedback fully on board, Helena. I recognize that delegating tasks empowers junior colleagues and frees up my time for architectural planning. I have already begun structured delegation in our current sprint.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Reflective Professional Growth',
          text: 'That is a very fair observation. In the past, I focused heavily on execution speed, but I am now actively organizing code-pairing sessions so the rest of the team can take full ownership of sub-modules.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Acceptance / Diplomatic Framing (take that on board / fair observation / constructive feedback / recognize / appreciate)',
          patterns: ['take that on board', 'fair observation', 'constructive feedback', 'recognize', 'appreciate', 'agree'],
          required: true,
        },
        {
          name: 'Delegation / Action (delegating / delegation / empowers / pairing / ownership / junior / planning)',
          patterns: ['delegating', 'delegation', 'empowers', 'pairing', 'ownership', 'junior', 'planning', 'sub-modules'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_defensive_feedback',
          pattern: 'i don\'t agree because junior are slow|no that is not true i delegate',
          errorType: 'interaction',
          message: 'In performance reviews, accept feedback gracefully with reflective phrases like "I take that on board".',
          correctionPattern: 'I take that feedback on board and will prioritize delegation',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_175_2',
        type: 'multiple_choice',
        prompt: 'Which phrase is the most professional response to manager feedback?',
        options: [
          { id: 'opt_1', text: 'I take that constructive feedback on board and will implement more delegation.', isCorrect: true },
          { id: 'opt_2', text: 'I do not care what peers say about me.', isCorrect: false },
          { id: 'opt_3', text: 'Delegation is not my job.', isCorrect: false },
        ],
        correctAnswer: 'I take that constructive feedback on board and will implement more delegation.',
        explanation: 'Professional, mature, and focused on growth.',
      },
    },
    {
      id: 'turn_a2_175_3',
      turnIndex: 3,
      partnerPrompt:
        'That is exactly the maturity I like to see. Looking ahead, what are your career aspirations within the department for the next 12 to 18 months, and what support do you need from me?',
      partnerAudioText:
        'That is exactly the maturity I like to see. Looking ahead, what are your career aspirations within the department for the next 12 to 18 months, and what support do you need from me?',
      partnerQuestionHindi:
        'यह बिल्कुल वही परिपक्वता है जिसे मैं देखना पसंद करती हूँ। आगे देखते हुए, अगले 12 से 18 महीनों के लिए विभाग के भीतर आपकी करियर आकांक्षाएं क्या हैं, और आपको मुझसे किस प्रकार के समर्थन की आवश्यकता है?',
      expectedFunction: 'Articulate Future Career Goals & Propose Mentorship / Training Support',
      contextGoal:
        'State your aspiration to become a Senior Technical Lead and request sponsorship for an enterprise architecture certification.',
      targetVocabulary: ['aim to transition into a Senior Lead role', 'request sponsorship for architecture training', 'lead cross-departmental initiatives'],
      suggestedResponses: [
        {
          label: 'Articulate Senior Lead Goal & Request Sponsorship',
          text: 'My primary goal is to transition into a Senior Technical Lead role within the next twelve months. To prepare, I would welcome sponsorship for the certified system architect course and opportunities to lead multi-team design reviews.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Career Milestones & Mentorship',
          text: 'I aim to step up into technical leadership. I would appreciate your continued mentorship and would like to represent our engineering group in executive technology briefings.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Career Goal (senior technical lead / senior lead / leadership / transition / step up / promotion / role)',
          patterns: ['senior technical lead', 'senior lead', 'leadership', 'transition', 'step up', 'promotion', 'role', 'lead'],
          required: true,
        },
        {
          name: 'Development Support (sponsorship / course / architect / mentorship / training / design reviews / certification)',
          patterns: ['sponsorship', 'course', 'architect', 'mentorship', 'training', 'design reviews', 'certification', 'support'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_175_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I aim ___ (to transition / transitioning) into engineering leadership."',
        options: [
          { id: 'opt_1', text: 'to transition', isCorrect: true },
          { id: 'opt_2', text: 'transitioning', isCorrect: false },
          { id: 'opt_3', text: 'to transitioning', isCorrect: false },
        ],
        correctAnswer: 'to transition',
        explanation: '"aim + to-infinitive (to transition)".',
      },
    },
    {
      id: 'turn_a2_175_4',
      turnIndex: 4,
      partnerPrompt:
        'I fully support your promotion pathway to Senior Lead! I will approve your architecture certification budget this week and assign you as the lead reviewer for the Q4 payments project. Excellent work this year!',
      partnerAudioText:
        'I fully support your promotion pathway to Senior Lead! I will approve your architecture certification budget this week and assign you as the lead reviewer for the Q4 payments project. Excellent work this year!',
      partnerQuestionHindi:
        'मैं सीनियर लीड के लिए आपके पदोन्नति मार्ग का पूरा समर्थन करती हूँ! मैं इस सप्ताह आपके आर्किटेक्चर प्रमाणन बजट को मंजूरी दूंगी और आपको Q4 भुगतान परियोजना के लिए प्रमुख समीक्षक के रूप में नियुक्त करूंगी। इस साल उत्कृष्ट कार्य!',
      expectedFunction: 'Express Gratitude, Reaffirm Commitment & Conclude Appraisal Positively',
      contextGoal:
        'Thank Helena for her support and mentorship, and express enthusiasm for the upcoming milestones.',
      targetVocabulary: ['thank you Helena for your guidance', 'excited for the new responsibilities', 'committed to delivering great results'],
      suggestedResponses: [
        {
          label: 'Gratitude & Professional Enthusiasm',
          text: 'Thank you so much, Helena. I really appreciate your guidance and backing. I am excited to take on these new responsibilities and deliver exceptional results for the team!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Appraisal Close',
          text: 'Thank you for your trust and support. I look forward to starting the architecture course and leading the Q4 payments initiative. Have a great day!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Respect (thank you / thanks / helena / appreciate / guidance / backing / support)',
          patterns: ['thank you', 'thanks', 'helena', 'appreciate', 'guidance', 'backing', 'support', 'trust'],
          required: true,
        },
        {
          name: 'Enthusiasm & Commitment (excited / look forward / responsibilities / exceptional results / q4 / deliver)',
          patterns: ['excited', 'look forward', 'responsibilities', 'exceptional results', 'q4', 'deliver', 'great day'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_175_4',
        type: 'multiple_choice',
        prompt: 'Which closing sentence is most appropriate for ending a successful performance review?',
        options: [
          { id: 'opt_1', text: 'Thank you, Helena. I appreciate your support and look forward to the new responsibilities.', isCorrect: true },
          { id: 'opt_2', text: 'Give me my promotion now bye.', isCorrect: false },
          { id: 'opt_3', text: 'Review done I leave now.', isCorrect: false },
        ],
        correctAnswer: 'Thank you, Helena. I appreciate your support and look forward to the new responsibilities.',
        explanation: 'Courteous and confirms mutual commitment to the agreed career trajectory.',
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
