import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_76: ConversationDefinition = {
  id: 'conv_a1_76',
  title: 'Workplace Problem-Solving & Requesting Assistance',
  cefr: 'A1',
  unitId: 'unit_a1_6',
  lessonLinks: ['lesson_a1_6_76'],
  estimatedMinutes: 5,
  scenario:
    'You are working at a digital media agency in Manchester. During a project sprint, you encounter an unexpected technical obstacle while preparing a client presentation. You meet with Senior Project Manager Maya Lin to explain the challenge, request assistance politely, and agree on a collaborative step-by-step resolution.',
  communicativeGoals: [
    'Explain a technical obstacle clearly using "because" and "so"',
    'Make polite modal requests for assistance ("Could you give me a hand with...", "Would you mind checking...")',
    'Propose and agree on a step-by-step problem-solving workflow',
    'Retrieve earlier workplace, daily routine, and computer vocabulary in a new context',
  ],
  canDoStatements: [
    'Can describe a workplace challenge or technical glitch using straightforward A1 English',
    'Can request guidance or assistance from a supervisor or coworker politely',
    'Can connect causes and results using "because" and "so"',
  ],
  characters: [
    {
      id: 'char_maya_lin',
      name: 'Maya Lin',
      role: 'Senior Project Manager',
      avatar: '💡',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'obstacle',
        ipa: '/ˈɒbstəkl/',
        partOfSpeech: 'noun',
        meaning: 'A thing that blocks one’s way or hinders progress',
        exampleSentence: 'We encountered an unexpected technical obstacle this morning.',
        translations: { hi: 'बाधा / अड़चन' },
      },
      {
        word: 'assistance',
        ipa: '/əˈsɪstəns/',
        partOfSpeech: 'noun',
        meaning: 'The provision of money, resources, or information to help someone',
        exampleSentence: 'Could I request your assistance with this presentation slide?',
        translations: { hi: 'सहायता / मदद' },
      },
      {
        word: 'collaborate',
        ipa: '/kəˈlæbəreɪt/',
        partOfSpeech: 'verb',
        meaning: 'Work jointly on an activity or project',
        exampleSentence: 'Let us collaborate on testing the software before the meeting.',
        translations: { hi: 'सहयोग करना' },
      },
      {
        word: 'resolution',
        ipa: '/ˌrɛzəˈluːʃən/',
        partOfSpeech: 'noun',
        meaning: 'The action of solving a problem or contentious matter',
        exampleSentence: 'We reached a quick resolution to the server issue.',
        translations: { hi: 'समाधान / हल' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Could you give me a hand with...?',
        functionCategory: 'Polite Request',
        exampleSentence: 'Could you give me a hand with debugging this script?',
      },
      {
        phrase: 'We ran into an issue because...',
        functionCategory: 'Explaining Cause',
        exampleSentence: 'We ran into an issue because the video file is corrupted.',
      },
      {
        phrase: 'So my suggestion is that we...',
        functionCategory: 'Proposing Solution',
        exampleSentence: 'So my suggestion is that we export the file as a PDF.',
      },
      {
        phrase: 'That sounds like a solid plan.',
        functionCategory: 'Confirming Agreement',
        exampleSentence: 'That sounds like a solid plan; let us start immediately.',
      },
    ],
    grammar: {
      title: 'Connecting Cause and Result: "Because" vs. "So"',
      conceptExplanation:
        'Use "because" to state the reason/cause (Action + because + Reason), and "so" to state the result/consequence (Reason + so + Action/Result).',
      patternFormula: '[Action] because [Reason] / [Reason], so [Result]',
      contrastExamples: [
        {
          incorrect: 'The server crashed so because we lost files.',
          correct: 'The server crashed, so we lost unsaved files.',
          explanation: 'Use "so" to introduce consequence; do not combine "so because" together.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Maya Lin',
        text: 'Hi Alex! How is the client presentation coming along for this afternoon?',
        translation: 'नमस्ते एलेक्स! आज दोपहर की क्लाइंट प्रस्तुति कैसी चल रही है?',
      },
      {
        speaker: 'You',
        text: 'Hi Maya. We ran into an obstacle because the formatting tool crashed, so I would appreciate your advice on how to recover the slides.',
        translation: 'नमस्ते माया। हमें एक बाधा का सामना करना पड़ा क्योंकि फ़ॉर्मेटिंग टूल क्रैश हो गया, इसलिए मैं स्लाइड पुनर्प्राप्त करने के तरीके पर आपकी सलाह की सराहना करूँगा।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_76_1',
      type: 'fill_blank',
      prompt: 'Choose the correct connector: "The Wi-Fi was down, ___ I could not upload the files."',
      options: [
        { id: 'opt_1', text: 'so', isCorrect: true },
        { id: 'opt_2', text: 'because', isCorrect: false },
        { id: 'opt_3', text: 'although', isCorrect: false },
      ],
      correctAnswer: 'so',
      explanation: 'Use "so" to show result.',
    },
    {
      id: 'cp_a1_76_2',
      type: 'multiple_choice',
      prompt: 'Which sentence makes a polite request for workplace help?',
      options: [
        { id: 'opt_1', text: 'Could you give me a hand with reviewing these slides, please?', isCorrect: true },
        { id: 'opt_2', text: 'You must do my work immediately now.', isCorrect: false },
        { id: 'opt_3', text: 'Work is broken fix it for me.', isCorrect: false },
      ],
      correctAnswer: 'Could you give me a hand with reviewing these slides, please?',
      explanation: '"Could you give me a hand with..." is polite and natural.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_76_1',
      scenarioContext: 'Explain a delay caused by software.',
      prompt: 'Build: "We are delayed because the export tool crashed."',
      targetStructure: 'We are delayed because the export tool crashed',
      wordBank: ['We', 'are', 'delayed', 'because', 'the', 'export', 'tool', 'crashed', 'so', 'is'],
      acceptableSolutions: [
        'We are delayed because the export tool crashed',
        'We are delayed because the export tool crashed.',
      ],
      explanation: 'Action + because + reason.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_76_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi Alex! I saw your message about the client deck. What specific obstacle did you encounter this morning?',
      partnerAudioText:
        'Hi Alex! I saw your message about the client deck. What specific obstacle did you encounter this morning?',
      partnerQuestionHindi:
        'नमस्ते एलेक्स! मैंने क्लाइंट डेक के बारे में आपका संदेश देखा। आज सुबह आपको किस विशिष्ट बाधा का सामना करना पड़ा?',
      expectedFunction: 'Describe Technical Obstacle using "because" (Reduced Scaffolding)',
      contextGoal:
        'Explain that the presentation export failed because the media server disconnected during the upload.',
      targetVocabulary: ['encountered an obstacle', 'because the server disconnected', 'export failed', 'client deck'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffolding',
          text: 'Hi Maya! We encountered an obstacle because the media server disconnected during export, so the presentation slides did not save properly.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Obstacle & Reason',
          patterns: [
            'obstacle',
            'server',
            'disconnected',
            'because',
            'export',
            'failed',
            'slides',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'because_so_double_error',
          pattern: /\bbecause the server disconnected so because\b/i,
          errorType: 'structure',
          message: 'Do not combine "because" and "so" in the same clause.',
          correctionPattern: 'because the server disconnected, so...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_76_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We are late ___ the train was cancelled."',
        options: [
          { id: 'opt_1', text: 'because', isCorrect: true },
          { id: 'opt_2', text: 'so', isCorrect: false },
          { id: 'opt_3', text: 'but', isCorrect: false },
        ],
        correctAnswer: 'because',
        explanation: 'Use "because" before a reason.',
      },
    },
    {
      id: 'turn_a1_76_2',
      turnIndex: 2,
      partnerPrompt:
        'I see. That server glitch happened to another team yesterday too. What kind of assistance do you need from me right now?',
      partnerAudioText:
        'I see. That server glitch happened to another team yesterday too. What kind of assistance do you need from me right now?',
      partnerQuestionHindi:
        'मैं समझती हूँ। वह सर्वर गड़बड़ कल दूसरी टीम के साथ भी हुई थी। आपको अभी मुझसे किस तरह की सहायता की आवश्यकता है?',
      expectedFunction: 'Request Assistance Politely with Modals (Could you please give me a hand...)',
      contextGoal:
        'Ask if Maya could grant backup server access and help review the restored slides before 2:00 PM.',
      targetVocabulary: ['could you give me a hand', 'backup server access', 'review the slides', 'before two o\'clock'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffolding',
          text: 'Could you please give me a hand with backup server access, and would you mind reviewing the recovered slides before 2:00 PM?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Polite Request & Time',
          patterns: [
            'could you',
            'give me a hand',
            'backup',
            'access',
            'review',
            'slides',
            '2:00',
            'two',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_76_2',
        type: 'multiple_choice',
        prompt: 'Which request is most polite for asking a manager for access?',
        options: [
          { id: 'opt_1', text: 'Could you please grant me access to the backup server?', isCorrect: true },
          { id: 'opt_2', text: 'Give access now server quick.', isCorrect: false },
          { id: 'opt_3', text: 'You must unlock password for me.', isCorrect: false },
        ],
        correctAnswer: 'Could you please grant me access to the backup server?',
        explanation: '"Could you please grant..." is professional.',
      },
    },
    {
      id: 'turn_a1_76_3',
      turnIndex: 3,
      partnerPrompt:
        'I just granted you backup credentials. How do you propose we coordinate our steps so everything is ready for the 3:00 PM meeting?',
      partnerAudioText:
        'I just granted you backup credentials. How do you propose we coordinate our steps so everything is ready for the 3:00 PM meeting?',
      partnerQuestionHindi:
        'मैंने आपको बैकअप क्रेडेंशियल दे दिए हैं। आप हमारे कदमों का समन्वय कैसे करने का प्रस्ताव करते हैं ताकि 3:00 बजे की बैठक के लिए सब कुछ तैयार हो जाए?',
      expectedFunction: 'Propose Step-by-Step Collaborative Resolution',
      contextGoal:
        'Propose that you will re-export the PDF slides by 1:30 PM, so Maya can review them by 2:15 PM, leaving 45 minutes for final polish.',
      targetVocabulary: ['first re-export the slides', 'by one thirty', 'so you can review', 'final polish', 'ready on time'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffolding',
          text: 'First, I will re-export the slides by 1:30 PM, so you can review them by 2:15 PM. That leaves 45 minutes for final checks before 3:00 PM.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Coordination Plan',
          patterns: [
            'first',
            're-export',
            'export',
            '1:30',
            'review',
            '2:15',
            'ready',
            '3:00',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_76_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "First I will finish the draft, ___ we can review it together."',
        options: [
          { id: 'opt_1', text: 'then', isCorrect: true },
          { id: 'opt_2', text: 'because', isCorrect: false },
          { id: 'opt_3', text: 'although', isCorrect: false },
        ],
        correctAnswer: 'then',
        explanation: 'Use "then" for chronological next step.',
      },
    },
    {
      id: 'turn_a1_76_4',
      turnIndex: 4,
      partnerPrompt:
        'That sounds like a solid plan. I have booked Room 4B for 2:15 PM. Do you have everything you need to get started?',
      partnerAudioText:
        'That sounds like a solid plan. I have booked Room 4B for 2:15 PM. Do you have everything you need to get started?',
      partnerQuestionHindi:
        'यह एक ठोस योजना लगती है। मैंने 2:15 बजे के लिए कमरा 4B बुक कर लिया है। क्या आपके पास शुरुआत करने के लिए आवश्यक सब कुछ है?',
      expectedFunction: 'Confirm Readiness, Express Gratitude & Conclude Interaction',
      contextGoal:
        'Confirm you have all credentials, thank Maya for her quick support, and state you will meet her in Room 4B at 2:15 PM.',
      targetVocabulary: ['have everything I need', 'thank you for your quick support', 'meet you in Room 4B', 'see you at 2:15'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffolding',
          text: 'Yes, I have everything I need now! Thank you so much Maya for your quick assistance. I will see you in Room 4B at 2:15 PM.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Confirmation & Thanks',
          patterns: [
            'have everything',
            'thank you',
            'maya',
            'room 4b',
            '2:15',
            'see you',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_76_4',
        type: 'multiple_choice',
        prompt: 'Which closing shows professional gratitude clearly?',
        options: [
          { id: 'opt_1', text: 'Thank you for your quick assistance Maya; see you at 2:15 PM!', isCorrect: true },
          { id: 'opt_2', text: 'Okay bye work finished.', isCorrect: false },
          { id: 'opt_3', text: 'I go now talk later.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for your quick assistance Maya; see you at 2:15 PM!',
        explanation: 'Polite and clear workplace wrap-up.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 70,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 60,
  },
};
