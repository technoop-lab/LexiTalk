import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_112: ConversationDefinition = {
  id: 'conv_a2_112',
  title: 'Workplace Communication: Daily Tasks, Updates & Short Messages (asked me to, have got to)',
  cefr: 'A2',
  unitId: 'unit_a2_8',
  lessonLinks: ['lesson_a2_8_112'],
  estimatedMinutes: 5,
  scenario:
    'You are in a morning team standup at a fintech company in Canary Wharf, London, speaking with team lead Nathan Cole. Give an update on your dashboard project, report what tasks the backend developer asked you to test, explain what deliverables you have got to finish by 4 PM, and discuss how to unblock a minor design question.',
  communicativeGoals: [
    'Deliver a clear workplace progress update on completed and ongoing sprint tasks',
    'Report instructions and coworker requests using "Verb + Object + Infinitive" (e.g. "asked me to test", "reminded us to submit")',
    'Express workplace obligation and deadlines using "have got to" and "need to finish by [time]"',
    'Identify blockers professionally and agree on practical collaboration steps',
  ],
  canDoStatements: [
    'Can report status updates on workplace projects and daily duties (CEFR A2)',
    'Can pass on instructions using reported structures ("asked me to [verb]")',
    'Can express work deadlines and urgency using "have got to" and "need to"',
  ],
  characters: [
    {
      id: 'char_nathan_cole',
      name: 'Nathan Cole',
      role: 'Engineering Team Lead',
      avatar: '💼',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'deadline',
        ipa: '/ˈdɛdlaɪn/',
        partOfSpeech: 'noun',
        meaning: 'The latest time or date by which something should be completed',
        exampleSentence: 'We have got to meet the client presentation deadline by 4 PM.',
        translations: { hi: 'अंतिम समय सीमा / डेडलाइन' },
      },
      {
        word: 'blocker',
        ipa: '/ˈblɒkər/',
        partOfSpeech: 'noun',
        meaning: 'An obstacle or dependency that prevents progress on a task',
        exampleSentence: 'I have one minor blocker regarding the color scheme for the graphs.',
        translations: { hi: 'रुकावट / बाधा' },
      },
      {
        word: 'have got to',
        ipa: '/hæv ɡɒt tuː/',
        partOfSpeech: 'modal phrase',
        meaning: 'Must; used to express necessity or obligation in British English',
        exampleSentence: 'I have got to deploy the updated build before the lunch break.',
        translations: { hi: 'करना ही होगा / दायित्व है' },
      },
      {
        word: 'update',
        ipa: '/ʌpˈdeɪt/',
        partOfSpeech: 'noun',
        meaning: 'A report containing the latest information on a project',
        exampleSentence: 'Here is a quick status update on the front-end dashboard.',
        translations: { hi: 'अद्यतन / ताज़ा जानकारी' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Priya asked me to test the new API endpoint.',
        functionCategory: 'Reporting Coworker Request (asked + object + to)',
        exampleSentence: 'Marcus asked me to review the wireframes.',
      },
      {
        phrase: 'I have got to finish the export feature by 4 PM.',
        functionCategory: 'Expressing Workplace Obligation',
        exampleSentence: 'I have got to email the summary before the end of the day.',
      },
      {
        phrase: 'Everything is on track for tomorrow’s release.',
        functionCategory: 'Reporting Status',
        exampleSentence: 'All tests passed and we are on track.',
      },
      {
        phrase: 'Could we have a quick 5-minute sync after standup?',
        functionCategory: 'Requesting Clarification Sync',
        exampleSentence: 'Could we sync briefly to resolve the layout question?',
      },
    ],
    grammar: {
      title: 'Reporting Instructions: Verb + Object + Infinitive & Have Got To',
      conceptExplanation:
        '1. Reporting requests: Use "ask / tell / remind / advise + Person + to + Base Verb" (e.g., "Nathan asked me to check the logs").\n2. Professional necessity: "I have got to + Base Verb" is a natural, common British English equivalent of "I must" / "I have to".\n3. Time limits: Use "by + time" for completion deadlines (e.g., "by 4:00 PM").',
      patternFormula: 'Subject + asked/reminded + [Person] + to + [Verb] | Subject + have/has got to + [Verb] by [Time]',
      contrastExamples: [
        {
          incorrect: 'He asked to me test the system.',
          correct: 'He asked me to test the system.',
          explanation: 'Do not put "to" between "asked" and the object pronoun: "asked me to [verb]".',
        },
        {
          incorrect: 'I got to finishing this report.',
          correct: 'I have got to finish this report.',
          explanation: '"Have got to" requires a base verb ("finish").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Nathan Cole',
        text: 'Morning Alex! Let’s do a quick round of standup updates. How are things looking on the analytics dashboard?',
        translation: 'शुभ प्रभात एलेक्स! आइए स्टैंडअप अपडेट्स का एक त्वरित राउंड करें। एनालिटिक्स डैशबोर्ड पर काम कैसा चल रहा है?',
      },
      {
        speaker: 'You',
        text: 'Morning Nathan! Yesterday I completed the revenue chart component. This morning, Priya asked me to test the new data endpoints, and I have got to finalize the export button before 4 PM.',
        translation: 'शुभ प्रभात नाथन! कल मैंने रेवेन्यू चार्ट घटक पूरा किया। आज सुबह, प्रिया ने मुझे नए डेटा एंडपॉइंट्स का परीक्षण करने के लिए कहा, और मुझे शाम 4 बजे से पहले निर्यात बटन को अंतिम रूप देना है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_112_1',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly reports a teammate’s instruction?',
      options: [
        { id: 'opt_1', text: 'Priya asked me to review the new database schema.', isCorrect: true },
        { id: 'opt_2', text: 'Priya asked to me review the schema.', isCorrect: false },
        { id: 'opt_3', text: 'Priya asked me reviewing the schema.', isCorrect: false },
      ],
      correctAnswer: 'Priya asked me to review the new database schema.',
      explanation: 'Formula: Subject + asked + object pronoun + to + base verb.',
    },
    {
      id: 'cp_a2_112_2',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "I have ___ to submit the bug report before the sprint closes."',
      options: [
        { id: 'opt_1', text: 'got', isCorrect: true },
        { id: 'opt_2', text: 'getting', isCorrect: false },
        { id: 'opt_3', text: 'get', isCorrect: false },
      ],
      correctAnswer: 'got',
      explanation: '"Have got to" expresses strong necessity.',
    },
    {
      id: 'cp_a2_112_3',
      type: 'multiple_choice',
      prompt: 'What does "by 4 PM" mean in a work context?',
      options: [
        { id: 'opt_1', text: 'At or before 4:00 PM (the deadline).', isCorrect: true },
        { id: 'opt_2', text: 'Starting work at 4:00 PM.', isCorrect: false },
        { id: 'opt_3', text: 'Never finishing.', isCorrect: false },
      ],
      correctAnswer: 'At or before 4:00 PM (the deadline).',
      explanation: '"By" indicates the completion deadline.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_112_1',
      scenarioContext: 'Report a colleague\'s request in a meeting.',
      prompt: 'Build: "Priya asked me to verify the new API endpoints."',
      targetStructure: 'Subject + asked + me + to + base verb + noun phrase',
      wordBank: ['Priya', 'asked', 'me', 'to', 'verify', 'the', 'new', 'API', 'endpoints', 'verifying', 'for'],
      acceptableSolutions: [
        'Priya asked me to verify the new API endpoints',
        'Priya asked me to verify the new API endpoints.',
      ],
      explanation: 'Verb + Object + Infinitive reporting pattern.',
    },
    {
      id: 'sc_a2_112_2',
      scenarioContext: 'Express a task deadline.',
      prompt: 'Build: "I have got to deploy the update by four o\'clock."',
      targetStructure: 'Subject + have got to + verb + object + by + time',
      wordBank: ['I', 'have', 'got', 'to', 'deploy', 'the', 'update', 'by', 'four', 'o\'clock', 'deploying', 'must'],
      acceptableSolutions: [
        'I have got to deploy the update by four o\'clock',
        'I have got to deploy the update by four o\'clock.',
      ],
      explanation: 'Standard British workplace obligation phrase with time deadline.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_112_1',
      turnIndex: 1,
      partnerPrompt:
        'Morning Alex! Thanks for joining the sprint standup on time. Could you give us a quick progress update on the analytics dashboard components?',
      partnerAudioText:
        'Morning Alex! Thanks for joining the sprint standup on time. Could you give us a quick progress update on the analytics dashboard components?',
      partnerQuestionHindi:
        'शुभ प्रभात एलेक्स! समय पर स्प्रिंट स्टैंडअप में शामिल होने के लिए धन्यवाद। क्या आप हमें एनालिटिक्स डैशबोर्ड घटकों पर एक त्वरित प्रगति अपडेट दे सकते हैं?',
      expectedFunction: 'Deliver Sprint Status Update (completed chart & ongoing testing)',
      contextGoal:
        'State that yesterday you finished the interactive charts; this morning you are working on the table filtering system and everything is running smoothly.',
      targetVocabulary: ['finished the interactive chart module yesterday', 'currently building the table filtering feature', 'performance is fast and responsive', 'on track for sprint release'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'Morning Nathan! Yesterday I finished building the interactive revenue charts and responsive layout. Today, I am working on the data filtering table, and everything is on track for our sprint release.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Completed Work (yesterday / finished / charts)',
          patterns: ['yesterday', 'finished', 'completed', 'charts', 'revenue', 'layout', 'analytics'],
          required: true,
        },
        {
          name: 'Current Work / Status (today / working / filtering / on track)',
          patterns: ['today', 'working on', 'table', 'filter', 'on track', 'sprint', 'progress'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'asked_to_me_error',
          pattern: /\basked to me\b|\btold to me\b/i,
          errorType: 'grammar',
          message: 'Say "asked me to [verb]" or "told me to [verb]", without the preposition "to" before "me".',
          correctionPattern: 'asked me to',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_112_1',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly passes on a request?',
        options: [
          { id: 'opt_1', text: 'My teammate asked me to test the new build.', isCorrect: true },
          { id: 'opt_2', text: 'My teammate asked to me test build.', isCorrect: false },
          { id: 'opt_3', text: 'My teammate asked me testing build.', isCorrect: false },
        ],
        correctAnswer: 'My teammate asked me to test the new build.',
        explanation: 'The pattern is "asked + person + to + base verb".',
      },
    },
    {
      id: 'turn_a2_112_2',
      turnIndex: 2,
      partnerPrompt:
        'Great to hear! Did the backend team hand over the updated customer API documentation, or are you still waiting on that?',
      partnerAudioText:
        'Great to hear! Did the backend team hand over the updated customer API documentation, or are you still waiting on that?',
      partnerQuestionHindi:
        'यह सुनकर बहुत अच्छा लगा! क्या बैकएंड टीम ने अपडेटेड कस्टमर एपीआई दस्तावेज़ सौंप दिए हैं, या आप अभी भी उसका इंतज़ार कर रहे हैं?',
      expectedFunction: 'Report Teammate Request (Priya asked me to test endpoints)',
      contextGoal:
        'Explain that Priya sent the updated endpoints this morning and asked you to test data response speeds with realistic user mock data.',
      targetVocabulary: ['Priya shared the API documentation at 9 AM', 'asked me to test response times', 'test with mock user accounts', 'working as expected'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'Yes! Priya shared the new endpoints early this morning and asked me to test the response times with our test database. The data loads in under 200 milliseconds, so the backend performance looks solid.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Priya / API / Documentation',
          patterns: ['priya', 'api', 'endpoints', 'documentation', 'shared', 'sent', 'morning'],
          required: true,
        },
        {
          name: 'Reported Action (asked me to test / check / response)',
          patterns: ['asked me to', 'test', 'check', 'response', 'performance', 'database', 'speed'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_112_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "She asked me ___ (test) the connection."',
        options: [
          { id: 'opt_1', text: 'to test', isCorrect: true },
          { id: 'opt_2', text: 'testing', isCorrect: false },
          { id: 'opt_3', text: 'test', isCorrect: false },
        ],
        correctAnswer: 'to test',
        explanation: 'Use the infinitive with "to" after "asked me".',
      },
    },
    {
      id: 'turn_a2_112_3',
      turnIndex: 3,
      partnerPrompt:
        'Awesome progress. What are your key priorities for the rest of today, and do you have any blockers slowing you down?',
      partnerAudioText:
        'Awesome progress. What are your key priorities for the rest of today, and do you have any blockers slowing you down?',
      partnerQuestionHindi:
        'शानदार प्रगति। आज के शेष समय के लिए आपकी मुख्य प्राथमिकताएं क्या हैं, और क्या कोई रुकावट आपकी गति धीमी कर रही है?',
      expectedFunction: 'State Obligations (have got to finish by 4 PM) & Mention Minor Design Question',
      contextGoal:
        'Explain you have got to finish the CSV export feature before 4 PM; mention one minor blocker about the export icon placement in the header bar.',
      targetVocabulary: ['have got to finish the CSV export by 4 PM', 'one minor blocker regarding icon alignment', 'could we do a 5-minute design review', 'meet the client deadline'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'I have got to finish the CSV export feature by 4:00 PM today. I have only one minor question about the header icon placement. Could you and I do a quick five-minute sync right after this standup to finalize that?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Obligation / Deadline (have got to / 4 PM / export)',
          patterns: ['have got to', 'have to', 'finish', 'complete', '4:00', '4 pm', 'export', 'priority'],
          required: true,
        },
        {
          name: 'Blocker / Sync Request (icon / header / sync / review)',
          patterns: ['blocker', 'question', 'icon', 'header', 'sync', 'five-minute', 'after standup', 'quick'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_112_3',
        type: 'multiple_choice',
        prompt: 'Which phrase correctly communicates a work deadline obligation?',
        options: [
          { id: 'opt_1', text: 'I have got to finish this module by 4:00 PM.', isCorrect: true },
          { id: 'opt_2', text: 'I am must to finish 4 PM.', isCorrect: false },
          { id: 'opt_3', text: 'I finishing 4 PM.', isCorrect: false },
        ],
        correctAnswer: 'I have got to finish this module by 4:00 PM.',
        explanation: '"Have got to [verb]" is natural professional phrasing.',
      },
    },
    {
      id: 'turn_a2_112_4',
      turnIndex: 4,
      partnerPrompt:
        'Definitely! Let’s stay on this call for two minutes right after we finish the standup to approve the icon layout. Excellent job keeping the delivery on schedule, Alex!',
      partnerAudioText:
        'Definitely! Let’s stay on this call for two minutes right after we finish the standup to approve the icon layout. Excellent job keeping the delivery on schedule, Alex!',
      partnerQuestionHindi:
        'निश्चित रूप से! आइकन लेआउट को स्वीकृत करने के लिए स्टैंडअप समाप्त होने के ठीक बाद आइए दो मिनट के लिए इस कॉल पर बने रहें। डिलीवरी को समय पर बनाए रखने के लिए बहुत बढ़िया काम, एलेक्स!',
      expectedFunction: 'Conclude Standup & Prepare for Quick Sync',
      contextGoal:
        'Acknowledge Nathan, thank him for the quick review time, and open your Figma file to share your screen.',
      targetVocabulary: ['sounds great Nathan', 'opening the design file now', 'ready for our quick sync', 'thank you for the support'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'Sounds great Nathan, thank you! I will open the design file and share my screen as soon as standup wraps up. Ready when you are!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Readiness & Wrap-up',
          patterns: ['sounds great', 'thank you', 'thanks', 'nathan', 'screen', 'file', 'design', 'ready', 'sync'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_112_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I am ready ___ (share) my screen."',
        options: [
          { id: 'opt_1', text: 'to share', isCorrect: true },
          { id: 'opt_2', text: 'sharing', isCorrect: false },
          { id: 'opt_3', text: 'shared', isCorrect: false },
        ],
        correctAnswer: 'to share',
        explanation: 'Adjective "ready" is followed by the infinitive "to share".',
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
