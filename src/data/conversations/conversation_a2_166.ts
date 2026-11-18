import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_166: ConversationDefinition = {
  id: 'conv_a2_166',
  title: 'Project Updates, Deliverable Tracking & Milestone Contrasting',
  cefr: 'A2',
  unitId: 'unit_a2_12',
  lessonLinks: ['lesson_a2_12_166'],
  estimatedMinutes: 5,
  scenario:
    'You are in the project sync room at Vertex Technologies with Senior Project Lead Marcus Sterling. You will provide a formal sprint progress update on the mobile platform overhaul. You need to contrast completed milestones with specific past dates using the Past Simple ("We finalized the wireframes on Tuesday", "The design was approved on May 3rd") against ongoing achievements and status deliverables using the Present Perfect with "already" and "yet" ("We have already completed the database migration", "We haven\'t finished user testing yet").',
  communicativeGoals: [
    'Deliver concise, structured workplace status updates and sprint reports',
    'Contrast completed milestones in the Past Simple (with specific time markers) with ongoing status in the Present Perfect',
    'Use "already" for early or completed milestones and "yet" for pending deliverables',
    'Summarize current blockers, risk mitigation steps, and next milestone targets',
  ],
  canDoStatements: [
    'Can contrast past milestones with specific dates and present project status using Past Simple and Present Perfect',
    'Can use "already" and "yet" accurately when reporting deliverables in a team meeting',
    'Can describe project risks, blockers, and upcoming milestones clearly in spoken English',
  ],
  characters: [
    {
      id: 'char_marcus_sterling',
      name: 'Marcus Sterling',
      role: 'Senior Project Lead',
      avatar: '📊',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'deliverable',
        ipa: '/dɪˈlɪvərəbl/',
        partOfSpeech: 'noun',
        meaning: 'A tangible or intangible good or service produced as a result of a project',
        exampleSentence: 'The finalized security audit is our primary deliverable this week.',
        translations: { hi: 'परियोजना परिणाम / देय वस्तु' },
      },
      {
        word: 'milestone',
        ipa: '/ˈmaɪlstəʊn/',
        partOfSpeech: 'noun',
        meaning: 'A significant stage or event in the development of something',
        exampleSentence: 'We reached an important milestone when the API integration passed QA.',
        translations: { hi: 'महत्वपूर्ण पड़ाव / मील का पत्थर' },
      },
      {
        word: 'blocker',
        ipa: '/ˈblɒkər/',
        partOfSpeech: 'noun',
        meaning: 'An obstacle or problem that prevents further progress on a task',
        exampleSentence: 'A server timeout is the only blocker delaying our release.',
        translations: { hi: 'रुकावट / अवरोधक' },
      },
      {
        word: 'timeline',
        ipa: '/ˈtaɪmlaɪn/',
        partOfSpeech: 'noun',
        meaning: 'A schedule showing when events or steps will happen',
        exampleSentence: 'Our updated timeline shows the launch scheduled for Friday.',
        translations: { hi: 'समय-सीमा / समय सारणी' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'We finalized the wireframes on Tuesday, and we have already deployed the test server.',
        functionCategory: 'Contrasting Past Simple & Present Perfect',
        exampleSentence: 'We signed the contract yesterday, and we have already started coding.',
      },
      {
        phrase: 'We have already completed the database schema, but we haven\'t finished load testing yet.',
        functionCategory: 'Deliverable Status with "Already" & "Yet"',
        exampleSentence: 'I have already emailed the client, but they haven\'t replied yet.',
      },
      {
        phrase: 'Our team is currently on track to hit the Phase 2 milestone by Friday afternoon.',
        functionCategory: 'Reporting Timeline Progress',
        exampleSentence: 'We are on track to launch before the weekend.',
      },
      {
        phrase: 'We encountered a minor blocker with the payment gateway on Wednesday.',
        functionCategory: 'Reporting Past Obstacles with Specific Date',
        exampleSentence: 'We resolved the network issue on Monday.',
      },
    ],
    grammar: {
      title: 'Contrasting Past Simple (Specific Time) & Present Perfect (Current Status)',
      conceptExplanation:
        '1. Past Simple with Definite Past Time: Use when stating when a task occurred in finished past time (e.g., "on Tuesday", "yesterday", "last week", "in May"):\n   - "We finished the security audit on Tuesday."\n2. Present Perfect with Indefinite / Current Relevance: Use to report recent completion or unfinished status relative to now:\n   - "We have already completed the migration." (Positive status with "already")\n   - "We haven\'t received the API keys yet." (Negative / pending status with "yet" at sentence end).\n3. Avoid combining specific past time markers with Present Perfect (Incorrect: *We have finished it yesterday*).',
      patternFormula: 'Past Action + on [Day/Date] vs Subject + have/has + already + Past Participle | haven\'t/hasn\'t + Past Participle + yet',
      contrastExamples: [
        {
          incorrect: 'We have launched the beta on Tuesday and we didn\'t finish the testing yet.',
          correct: 'We launched the beta on Tuesday, and we haven\'t finished testing yet.',
          explanation: 'Use Past Simple for "on Tuesday" and Present Perfect with "yet" for pending current status.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Marcus Sterling',
        text: 'Good morning! Let\'s review our sprint progress. How are the core platform deliverables progressing?',
        translation: 'शुभ प्रभात! आइए अपनी स्प्रिंट प्रगति की समीक्षा करें। मुख्य प्लेटफ़ॉर्म के परिणाम कैसे आगे बढ़ रहे हैं?',
      },
      {
        speaker: 'You',
        text: 'Good morning, Marcus. We finalized the architecture on Monday, and we have already completed the user authentication module.',
        translation: 'शुभ प्रभात, मार्कस। हमने सोमवार को आर्किटेक्चर को अंतिम रूप दिया, और हमने उपयोगकर्ता प्रमाणीकरण मॉड्यूल पहले ही पूरा कर लिया है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_166_1',
      type: 'fill_blank',
      prompt: 'Complete the status report: "We approved the visual design ___ (on / already) Thursday, and we have ___ (already / on) configured the servers."',
      options: [
        { id: 'opt_1', text: 'on / already', isCorrect: true },
        { id: 'opt_2', text: 'already / on', isCorrect: false },
        { id: 'opt_3', text: 'yet / already', isCorrect: false },
      ],
      correctAnswer: 'on / already',
      explanation: 'Use "on Thursday" for specific past time and "have already configured" for Present Perfect status.',
    },
    {
      id: 'cp_a2_166_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly reports a pending deliverable using "yet"?',
      options: [
        { id: 'opt_1', text: 'We haven’t deployed the payment gateway yet.', isCorrect: true },
        { id: 'opt_2', text: 'We didn’t deployed the payment gateway yet.', isCorrect: false },
        { id: 'opt_3', text: 'We haven’t yet deploy the payment gateway.', isCorrect: false },
      ],
      correctAnswer: 'We haven’t deployed the payment gateway yet.',
      explanation: 'Present Perfect negative: "haven\'t + past participle + yet".',
    },
    {
      id: 'cp_a2_166_3',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly contrasts a past milestone with current status?',
      options: [
        { id: 'opt_1', text: 'The QA team completed the audit on Tuesday, and we have already resolved all critical bugs.', isCorrect: true },
        { id: 'opt_2', text: 'The QA team has completed the audit on Tuesday and resolved bugs yesterday.', isCorrect: false },
        { id: 'opt_3', text: 'The QA team completes audit on Tuesday and already resolved yet.', isCorrect: false },
      ],
      correctAnswer: 'The QA team completed the audit on Tuesday, and we have already resolved all critical bugs.',
      explanation: 'Past Simple with "on Tuesday", followed by Present Perfect with "already".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_166_1',
      scenarioContext: 'Report a past milestone with a specific day and an already completed deliverable.',
      prompt: 'Build: "We finalized the design on Monday and have already deployed the API."',
      targetStructure: 'We finalized the design on Monday and have already deployed the API',
      wordBank: ['We', 'finalized', 'the', 'design', 'on', 'Monday', 'and', 'have', 'already', 'deployed', 'the', 'API', 'did', 'yet'],
      acceptableSolutions: [
        'We finalized the design on Monday and have already deployed the API.',
        'We finalized the design on Monday and we have already deployed the API.',
      ],
      explanation: 'Past Simple with "on Monday" combined with Present Perfect "have already deployed".',
    },
    {
      id: 'sc_a2_166_2',
      scenarioContext: 'Report that user acceptance testing is not finished yet.',
      prompt: 'Build: "We haven\'t finished user acceptance testing yet."',
      targetStructure: 'We haven\'t finished user acceptance testing yet',
      wordBank: ['We', 'haven\'t', 'finished', 'user', 'acceptance', 'testing', 'yet', 'didn\'t', 'already', 'finish'],
      acceptableSolutions: [
        'We haven\'t finished user acceptance testing yet.',
        'We have not finished user acceptance testing yet.',
      ],
      explanation: 'Present Perfect negative structure with "yet" at the end.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_166_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning! Thanks for joining the weekly sprint standup. Can you walk me through the key deliverables your team worked on this past week?',
      partnerAudioText:
        'Good morning! Thanks for joining the weekly sprint standup. Can you walk me through the key deliverables your team worked on this past week?',
      partnerQuestionHindi:
        'शुभ प्रभात! साप्ताहिक स्प्रिंट स्टैंडअप में शामिल होने के लिए धन्यवाद। क्या आप मुझे उन मुख्य डिलिवरेबल्स के बारे में बता सकते हैं जिन पर आपकी टीम ने पिछले सप्ताह काम किया था?',
      expectedFunction: 'Contrast Completed Milestones (Past Simple with day) & Current Status (Present Perfect with already)',
      contextGoal:
        'State that you finalized the wireframes on Monday/Tuesday and have already deployed the test environment.',
      targetVocabulary: ['finalized the wireframes on Monday', 'have already deployed the test environment', 'on track for the milestone'],
      suggestedResponses: [
        {
          label: 'Milestone Update (Past Simple + Present Perfect)',
          text: 'Good morning, Marcus. We finalized the wireframes on Monday, and we have already deployed the test environment for the developers.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Deliverable Status',
          text: 'We finished the architecture design on Tuesday, and we have already integrated the primary database modules.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Past Milestone with Date (finalized / finished / completed / on monday / on tuesday / yesterday)',
          patterns: ['finalized', 'finished', 'completed', 'approved', 'monday', 'tuesday', 'yesterday', 'last week'],
          required: true,
        },
        {
          name: 'Present Perfect Status (have already / deployed / integrated / built / test environment / database)',
          patterns: ['have already', 'already deployed', 'already integrated', 'already completed', 'deployed', 'test'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_pp_with_specific_day',
          pattern: 'we have finalized on monday|we have finished on tuesday',
          errorType: 'grammar',
          message: 'Do not use Present Perfect with a specific past day. Use Past Simple: "We finalized the wireframes on Monday."',
          correctionPattern: 'We finalized the wireframes on Monday',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_166_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We ___ (approved / have approved) the specs on Monday."',
        options: [
          { id: 'opt_1', text: 'approved', isCorrect: true },
          { id: 'opt_2', text: 'have approved', isCorrect: false },
          { id: 'opt_3', text: 'approving', isCorrect: false },
        ],
        correctAnswer: 'approved',
        explanation: 'Specific past time ("on Monday") requires the Past Simple.',
      },
    },
    {
      id: 'turn_a2_166_2',
      turnIndex: 2,
      partnerPrompt:
        'That is excellent progress on the backend. What is the current status of the payment gateway integration and user acceptance testing?',
      partnerAudioText:
        'That is excellent progress on the backend. What is the current status of the payment gateway integration and user acceptance testing?',
      partnerQuestionHindi:
        'यह बैकएंड पर उत्कृष्ट प्रगति है। पेमेंट गेटवे एकीकरण और उपयोगकर्ता स्वीकृति परीक्षण की वर्तमान स्थिति क्या है?',
      expectedFunction: 'Report Pending Deliverables with "Yet" and Mention Current Progress',
      contextGoal:
        'Explain that you connected the payment API yesterday, but you haven\'t completed user acceptance testing yet.',
      targetVocabulary: ['connected the payment API', 'haven\'t finished user testing yet', 'expected by Friday'],
      suggestedResponses: [
        {
          label: 'Report with "Yet" (Pending deliverable)',
          text: 'We connected the payment API on Wednesday, but we haven\'t finished user acceptance testing yet. We expect to complete it by tomorrow.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Detailed Status with "Already" and "Yet"',
          text: 'We have already configured the test sandbox, but we haven\'t received the production security certificates yet.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Negative Status with "Yet" (haven\'t finished / haven\'t completed / not completed yet / yet)',
          patterns: ['haven\'t finished', 'haven\'t completed', 'not yet', 'yet', 'haven\'t received'],
          required: true,
        },
        {
          name: 'Payment / Testing Topic (payment / testing / api / gateway / certificates / acceptance)',
          patterns: ['payment', 'testing', 'api', 'gateway', 'acceptance', 'sandbox', 'security'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_yet_placement',
          pattern: 'we haven\'t yet finished user testing yesterday|we didn\'t finish yet on wednesday',
          errorType: 'grammar',
          message: 'Place "yet" at the end of the negative Present Perfect clause: "We haven\'t finished testing yet."',
          correctionPattern: 'We haven\'t finished user acceptance testing yet',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_166_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly uses "yet" for a pending deliverable?',
        options: [
          { id: 'opt_1', text: 'We haven’t finalized the test report yet.', isCorrect: true },
          { id: 'opt_2', text: 'We didn’t finalized the test report yet.', isCorrect: false },
          { id: 'opt_3', text: 'We haven’t finalize yet the test report.', isCorrect: false },
        ],
        correctAnswer: 'We haven’t finalized the test report yet.',
        explanation: 'Use "haven\'t + past participle ... yet".',
      },
    },
    {
      id: 'turn_a2_166_3',
      turnIndex: 3,
      partnerPrompt:
        'Are there any technical blockers or dependency issues that could risk our Friday release milestone?',
      partnerAudioText:
        'Are there any technical blockers or dependency issues that could risk our Friday release milestone?',
      partnerQuestionHindi:
        'क्या कोई तकनीकी बाधा या निर्भरता संबंधी समस्याएँ हैं जो हमारे शुक्रवार के रिलीज मील के पत्थर को खतरे में डाल सकती हैं?',
      expectedFunction: 'Explain Blockers and Confirm Overall Milestone Readiness',
      contextGoal:
        'State that you resolved a server latency issue yesterday, and everything is on track for Friday.',
      targetVocabulary: ['resolved the blocker on Thursday', 'on track for the Friday launch', 'no critical dependencies'],
      suggestedResponses: [
        {
          label: 'Confirm Resolution & Readiness',
          text: 'We resolved a minor server latency issue yesterday, and our team is fully on track to meet the Friday release milestone.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Risk Status',
          text: 'There are no major blockers at present. We have already scheduled the deployment for Friday morning at nine AM.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Resolution / No Blockers (resolved / fixed / cleared / no blockers / no issues / minor)',
          patterns: ['resolved', 'fixed', 'cleared', 'no blockers', 'no major', 'latency', 'minor'],
          required: true,
        },
        {
          name: 'On Track for Milestone (on track / friday / milestone / release / scheduled / ready)',
          patterns: ['on track', 'friday', 'milestone', 'release', 'scheduled', 'launch', 'ready'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_166_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We ___ (resolved / have resolved) the database bug yesterday afternoon."',
        options: [
          { id: 'opt_1', text: 'resolved', isCorrect: true },
          { id: 'opt_2', text: 'have resolved', isCorrect: false },
          { id: 'opt_3', text: 'resolving', isCorrect: false },
        ],
        correctAnswer: 'resolved',
        explanation: 'Past time marker "yesterday afternoon" requires Past Simple.',
      },
    },
    {
      id: 'turn_a2_166_4',
      turnIndex: 4,
      partnerPrompt:
        'Fantastic overview! You have kept the project moving forward seamlessly. I will update executive management with this status. Keep up the great work!',
      partnerAudioText:
        'Fantastic overview! You have kept the project moving forward seamlessly. I will update executive management with this status. Keep up the great work!',
      partnerQuestionHindi:
        'शानदार अवलोकन! आपने परियोजना को सुचारू रूप से आगे बढ़ाया है। मैं इस स्थिति के साथ कार्यकारी प्रबंधन को अपडेट करूँगा। बढ़िया काम जारी रखें!',
      expectedFunction: 'Acknowledge, Confirm Next Steps & Close Standup',
      contextGoal:
        'Thank Marcus, confirm you will send the written report this afternoon, and close the meeting.',
      targetVocabulary: ['thank you Marcus', 'send the written summary', 'look forward to the launch'],
      suggestedResponses: [
        {
          label: 'Wrap Up & Confirm Written Summary',
          text: 'Thank you, Marcus. I will send the finalized sprint summary email by three PM. Have a great day!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Professional Close',
          text: 'Thank you for your support. We will keep you updated as soon as the final QA tests conclude tomorrow.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Thank You & Close (thank you / thanks / marcus / have a great day / see you)',
          patterns: ['thank you', 'thanks', 'marcus', 'great day', 'appreciate'],
          required: true,
        },
        {
          name: 'Next Step / Summary (summary / email / report / update / send / afternoon)',
          patterns: ['summary', 'email', 'report', 'update', 'send', 'afternoon', 'qa'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_166_4',
        type: 'multiple_choice',
        prompt: 'Which closing remark is most professional for ending a sprint standup?',
        options: [
          { id: 'opt_1', text: 'Thank you, Marcus. I will circulate the written report this afternoon.', isCorrect: true },
          { id: 'opt_2', text: 'Bye bye finish now.', isCorrect: false },
          { id: 'opt_3', text: 'I am leaving now ok.', isCorrect: false },
        ],
        correctAnswer: 'Thank you, Marcus. I will circulate the written report this afternoon.',
        explanation: 'Professional sign-off confirming the immediate follow-up task.',
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
