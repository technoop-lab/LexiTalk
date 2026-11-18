import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_95: ConversationDefinition = {
  id: 'conv_a2_95',
  title: 'Reasons, Causes & Results (because, so, therefore, as a result)',
  cefr: 'A2',
  unitId: 'unit_a2_7',
  lessonLinks: ['lesson_a2_7_95'],
  estimatedMinutes: 5,
  scenario:
    'You are in a status update meeting with Operations Manager Samantha Hayes in Manchester. A key project milestone was shifted because the client requested accessibility enhancements. Explain the root causes clearly using "because" and "since", present the resulting timeline adjustments using "so" and "as a result", and confirm the new delivery schedule.',
  communicativeGoals: [
    'Articulate root causes of project changes using "because" and "since"',
    'Explain logical results and next steps using "so", "therefore", and "as a result"',
    'Negotiate revised milestones and workload allocations collaboratively',
    'Ask Samantha for feedback on resource allocation and upcoming review dates',
  ],
  canDoStatements: [
    'Can give simple reasons, explanations, and consequences for plans and actions (CEFR A2)',
    'Can connect causes and effects accurately using "because", "so", and "as a result"',
    'Can handle professional workplace updates and timeline negotiations with polite discourse',
  ],
  characters: [
    {
      id: 'char_samantha_hayes',
      name: 'Samantha Hayes',
      role: 'Operations & Department Manager',
      avatar: '💼',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'consequence',
        ipa: '/ˈkɒnsɪkwəns/',
        partOfSpeech: 'noun',
        meaning: 'A result or effect of an action or condition',
        exampleSentence: 'As a consequence of the delay, we adjusted our testing phase.',
        translations: { hi: 'परिणाम / नतीजा' },
      },
      {
        word: 'therefore',
        ipa: '/ˈðɛərfɔːr/',
        partOfSpeech: 'adverb',
        meaning: 'For that reason; consequently',
        exampleSentence: 'The design passed all tests; therefore, we can deploy tomorrow.',
        translations: { hi: 'इसलिए / अतः' },
      },
      {
        word: 'postpone',
        ipa: '/poʊstˈpoʊn/',
        partOfSpeech: 'verb',
        meaning: 'Cause or arrange for something to take place at a time later than that first scheduled',
        exampleSentence: 'We postponed the release by two days to ensure stability.',
        translations: { hi: 'स्थगित करना / आगे बढ़ाना' },
      },
      {
        word: 'adjustment',
        ipa: '/əˈdʒʌstmənt/',
        partOfSpeech: 'noun',
        meaning: 'A small change made to improve something or make it suitable',
        exampleSentence: 'We made adjustments to the sprint backlog.',
        translations: { hi: 'समायोजन / सुधार' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'This happened because...',
        functionCategory: 'Stating Direct Cause',
        exampleSentence: 'This happened because the client requested extra features.',
      },
      {
        phrase: 'As a result, we decided to...',
        functionCategory: 'Stating Consequence / Result',
        exampleSentence: 'As a result, we decided to extend testing by two days.',
      },
      {
        phrase: 'Since we noticed the bug early, so...',
        functionCategory: 'Complex Reasoning (Avoid Stacking)',
        exampleSentence: 'Since we noticed it early, we were able to fix it immediately.',
      },
      {
        phrase: 'How does that timeline look to you?',
        functionCategory: 'Interactive Check',
        exampleSentence: 'We deliver on Friday. How does that timeline look to you?',
      },
    ],
    grammar: {
      title: 'Cause & Effect Connectors (because, so, since, therefore, as a result)',
      conceptExplanation:
        'Use "because" or "since" to explain the reason/cause (e.g., "We rescheduled the demo because the server crashed"). Use "so", "therefore", or "as a result" to introduce the effect/result (e.g., "The server crashed, so we rescheduled the demo"). NEVER stack "because... so" or "since... so" together in the same sentence.',
      patternFormula: 'Cause: Action + because + [Reason] | Result: [Reason], so + [Result]',
      contrastExamples: [
        {
          incorrect: 'Because I was sick, so I stayed home.',
          correct: 'Because I was sick, I stayed home. / I was sick, so I stayed home.',
          explanation: 'Never use "because" and "so" in the same clause structure.',
        },
        {
          incorrect: 'We were late therefore we missed train.',
          correct: 'We were late; therefore, we missed the train.',
          explanation: 'Use proper punctuation with "therefore".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Samantha Hayes',
        text: 'Hello Alex. I noticed the beta deployment was shifted from Wednesday to Friday. Can you walk me through what happened?',
        translation: 'नमस्ते एलेक्स। मैंने देखा कि बीटा डिप्लॉयमेंट को बुधवार से शुक्रवार में बदल दिया गया था। क्या आप मुझे बता सकते हैं कि क्या हुआ?',
      },
      {
        speaker: 'You',
        text: 'Hello Samantha. The date changed because the client requested high-contrast accessibility compliance. As a result, we needed two extra days for thorough testing.',
        translation: 'नमस्ते सामंथा। तारीख इसलिए बदल गई क्योंकि क्लाइंट ने उच्च-कंट्रास्ट एक्सेसिबिलिटी अनुपालन का अनुरोध किया था। परिणामस्वरूप, हमें गहन परीक्षण के लिए दो अतिरिक्त दिनों की आवश्यकता थी।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_95_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "We postponed the launch ___ the server needed an urgent security patch."',
      options: [
        { id: 'opt_1', text: 'because', isCorrect: true },
        { id: 'opt_2', text: 'so therefore', isCorrect: false },
        { id: 'opt_3', text: 'as a result', isCorrect: false },
      ],
      correctAnswer: 'because',
      explanation: '"Because" introduces the reason/cause for the postponement.',
    },
    {
      id: 'cp_a2_95_2',
      type: 'multiple_choice',
      prompt: 'Which sentence avoids the "because... so" double-connector mistake?',
      options: [
        { id: 'opt_1', text: 'Since we finished early, we helped the frontend team.', isCorrect: true },
        { id: 'opt_2', text: 'Because we finished early, so we helped the frontend team.', isCorrect: false },
        { id: 'opt_3', text: 'Since we finished early, so therefore we helped.', isCorrect: false },
      ],
      correctAnswer: 'Since we finished early, we helped the frontend team.',
      explanation: 'Do not pair "since" with "so" in the same sentence.',
    },
    {
      id: 'cp_a2_95_3',
      type: 'multiple_choice',
      prompt: 'Which connector indicates the logical result of an earlier fact?',
      options: [
        { id: 'opt_1', text: 'As a result,', isCorrect: true },
        { id: 'opt_2', text: 'Because,', isCorrect: false },
        { id: 'opt_3', text: 'Since,', isCorrect: false },
      ],
      correctAnswer: 'As a result,',
      explanation: '"As a result" introduces consequences and outcomes.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_95_1',
      scenarioContext: 'Explain a schedule change due to user testing feedback.',
      prompt: 'Build: "We added features because user feedback was very positive."',
      targetStructure: 'Action clause + because + reason clause',
      wordBank: ['We', 'added', 'features', 'because', 'user', 'feedback', 'was', 'very', 'positive', 'so', 'therefore'],
      acceptableSolutions: [
        'We added features because user feedback was very positive',
        'We added features because user feedback was very positive.',
      ],
      explanation: 'Connects main action with reason using "because".',
    },
    {
      id: 'sc_a2_95_2',
      scenarioContext: 'Explain the consequence of completing QA tests.',
      prompt: 'Build: "All tests passed so we are ready to deploy."',
      targetStructure: 'Cause clause + comma + so + result clause',
      wordBank: ['All', 'tests', 'passed', 'so', 'we', 'are', 'ready', 'to', 'deploy', 'because'],
      acceptableSolutions: [
        'All tests passed so we are ready to deploy',
        'All tests passed, so we are ready to deploy.',
      ],
      explanation: 'Connects cause to result using "so".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_95_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi Alex, thanks for your time. I was reviewing our project dashboard and saw that the staging release moved from Wednesday to Friday afternoon. Could you explain the exact reason for this shift?',
      partnerAudioText:
        'Hi Alex, thanks for your time. I was reviewing our project dashboard and saw that the staging release moved from Wednesday to Friday afternoon. Could you explain the exact reason for this shift?',
      partnerQuestionHindi:
        'नमस्ते एलेक्स, समय देने के लिए धन्यवाद। मैं हमारे प्रोजेक्ट डैशबोर्ड की समीक्षा कर रही थी और देखा कि स्टेजिंग रिलीज़ बुधवार से शुक्रवार दोपहर में स्थानांतरित हो गई है। क्या आप इस बदलाव का सटीक कारण बता सकते हैं?',
      expectedFunction: 'Explain Cause of Delay using "because" or "since"',
      contextGoal:
        'Explain that the client requested vital accessibility features (screen reader support and high contrast); therefore, the team needed two extra days to implement them safely.',
      targetVocabulary: ['moved because the client requested accessibility', 'needed screen reader support', 'wanted to ensure complete WCAG compliance', 'two additional days'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'Hi Samantha. The release date shifted because the client requested urgent accessibility improvements, including high contrast and screen reader compatibility. Since these features are vital for compliance, we added 48 hours to our build timeline.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'We shifted the release because the client asked for accessibility updates. Since it is critical for users, we took two extra days.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Cause Connector (because / since)',
          patterns: ['because', 'since', 'due to', 'as'],
          required: true,
        },
        {
          name: 'Client Reason & Accessibility',
          patterns: ['client', 'accessibility', 'contrast', 'screen reader', 'compliance', 'requested', 'asked for'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'because_so_stack_error',
          pattern: /\bbecause .*\bso\b/i,
          errorType: 'grammar',
          message: 'Avoid saying "Because... so...". Choose either "Because [reason], [action]" OR "[reason], so [action]".',
          correctionPattern: 'Because [reason], [action]',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_95_1',
        type: 'multiple_choice',
        prompt: 'Which sentence connects cause and result correctly?',
        options: [
          { id: 'opt_1', text: 'Because we needed extra tests, we moved the launch to Friday.', isCorrect: true },
          { id: 'opt_2', text: 'Because we needed extra tests, so we moved the launch.', isCorrect: false },
          { id: 'opt_3', text: 'We needed extra tests because so we moved launch.', isCorrect: false },
        ],
        correctAnswer: 'Because we needed extra tests, we moved the launch to Friday.',
        explanation: 'Avoid double connectors like "because... so".',
      },
    },
    {
      id: 'turn_a2_95_2',
      turnIndex: 2,
      partnerPrompt:
        'Accessibility compliance is essential for our client contracts, so I completely support that decision. How has this affected the QA testing team? Are they under heavy pressure, or is the workload manageable?',
      partnerAudioText:
        'Accessibility compliance is essential for our client contracts, so I completely support that decision. How has this affected the QA testing team? Are they under heavy pressure, or is the workload manageable?',
      partnerQuestionHindi:
        'हमारे क्लाइंट अनुबंधों के लिए एक्सेसिबिलिटी अनुपालन आवश्यक है, इसलिए मैं उस निर्णय का पूरा समर्थन करती हूँ। इसने QA परीक्षण टीम को कैसे प्रभावित किया है? क्या वे भारी दबाव में हैं, या काम का बोझ प्रबंधनीय है?',
      expectedFunction: 'Describe Consequence using "so", "as a result", or "therefore"',
      contextGoal:
        'Explain that because you automated initial test scripts, the QA workload is manageable; as a result, testers have dedicated time on Thursday without overtime.',
      targetVocabulary: ['automated the baseline tests so workload is manageable', 'as a result testers do not need overtime', 'everything is well organized', 'smooth workflow'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'The workload is very manageable because we automated the baseline tests earlier this week. As a result, the QA engineers have dedicated time on Thursday and Friday without needing any overtime.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'We automated the testing scripts, so QA is running smoothly. As a result, no overtime is required.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Result Connectors (so / as a result / therefore)',
          patterns: ['so', 'as a result', 'therefore', 'consequently'],
          required: true,
        },
        {
          name: 'QA Impact & Workload Management',
          patterns: ['qa', 'manageable', 'overtime', 'automated', 'smooth', 'testing', 'organized', 'thursday'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_95_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We finished automated tests, ___ the QA team had more time."',
        options: [
          { id: 'opt_1', text: 'so', isCorrect: true },
          { id: 'opt_2', text: 'because of', isCorrect: false },
          { id: 'opt_3', text: 'since', isCorrect: false },
        ],
        correctAnswer: 'so',
        explanation: '"So" introduces the consequence/result of completing the tests.',
      },
    },
    {
      id: 'turn_a2_95_3',
      turnIndex: 3,
      partnerPrompt:
        'That shows great foresight Alex. Having automated testing definitely mitigates last-minute crunches. When will the final sign-off demo take place, and do you need any executive support from my end?',
      partnerAudioText:
        'That shows great foresight Alex. Having automated testing definitely mitigates last-minute crunches. When will the final sign-off demo take place, and do you need any executive support from my end?',
      partnerQuestionHindi:
        'यह बहुत अच्छी दूरदर्शिता दर्शाता है एलेक्स। स्वचालित परीक्षण होने से निश्चित रूप से अंतिम समय की हड़बड़ी कम हो जाती है। अंतिम साइन-ऑफ डेमो कब होगा, और क्या आपको मेरी तरफ से किसी कार्यकारी सहायता की आवश्यकता है?',
      expectedFunction: 'State Final Milestone Schedule & Inquire About Review Availability',
      contextGoal:
        'Confirm that the final demo is scheduled for Friday at 3:30 PM; ask if Samantha is available to attend and provide opening remarks.',
      targetVocabulary: ['final demo is on Friday at 3:30 PM', 'everything is on track', 'would you be available to join', 'appreciate your presence'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'The final sign-off demo is set for Friday at 3:30 PM. Since all modules are passing validation, we are confident in a seamless presentation. Would you be available to attend for ten minutes to give opening remarks?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'The demo is on Friday at 3:30 PM. We do not need extra resources, but are you free to join us for the presentation, Samantha?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Demo Schedule (Friday 3:30 PM)',
          patterns: ['friday', '3:30', 'demo', 'sign-off', 'presentation', 'afternoon'],
          required: true,
        },
        {
          name: 'Inquiry / Executive Support',
          patterns: ['available', 'join', 'attend', 'remarks', 'support', 'free', 'samantha'],
          required: false,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_95_3',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly combines a time arrangement with a polite question?',
        options: [
          { id: 'opt_1', text: 'The demo is on Friday at 3:30 PM. Would you be available to join us?', isCorrect: true },
          { id: 'opt_2', text: 'Demo is Friday you come or not?', isCorrect: false },
          { id: 'opt_3', text: 'We make demo at Friday in 3:30.', isCorrect: false },
        ],
        correctAnswer: 'The demo is on Friday at 3:30 PM. Would you be available to join us?',
        explanation: 'Polite, clear, and grammatically accurate.',
      },
    },
    {
      id: 'turn_a2_95_4',
      turnIndex: 4,
      partnerPrompt:
        'I will gladly attend on Friday at 3:30 PM to support the team and commend our client focus! You have handled this timeline adjustment with great clarity and professionalism. Thank you Alex, let us connect again at Friday’s demo!',
      partnerAudioText:
        'I will gladly attend on Friday at 3:30 PM to support the team and commend our client focus! You have handled this timeline adjustment with great clarity and professionalism. Thank you Alex, let us connect again at Friday’s demo!',
      partnerQuestionHindi:
        'टीम का समर्थन करने और हमारे क्लाइंट फोकस की सराहना करने के लिए मैं शुक्रवार दोपहर 3:30 बजे ख़ुशी से उपस्थित रहूँगी! आपने इस समय-सीमा समायोजन को बहुत स्पष्टता और व्यावसायिकता के साथ संभाला है। धन्यवाद एलेक्स, आइए शुक्रवार के डेमो में फिर से जुड़ें!',
      expectedFunction: 'Confirm Final Agreement & Conclude Meeting Professionally',
      contextGoal:
        'Thank Samantha for her support and leadership, confirm the Friday calendar invite, and close the meeting warmly.',
      targetVocabulary: ['thank you Samantha for the support', 'look forward to seeing you Friday', 'calendar invite is confirmed', 'have a great day'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'Thank you so much Samantha for your continuous support and understanding! I will ensure the calendar invite is updated with the meeting link. See you on Friday at 3:30 PM, have a great day!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Thank you Samantha! I look forward to seeing you at the demo on Friday. Have a wonderful day!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Professional Sign-off',
          patterns: ['thank you', 'thanks', 'samantha', 'support', 'see you', 'friday', 'have a great day', 'wonderful day'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_95_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I look forward ___ seeing you at the demo."',
        options: [
          { id: 'opt_1', text: 'to', isCorrect: true },
          { id: 'opt_2', text: 'for', isCorrect: false },
          { id: 'opt_3', text: 'at', isCorrect: false },
        ],
        correctAnswer: 'to',
        explanation: 'Collocation: "look forward to + [gerund / noun]".',
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
