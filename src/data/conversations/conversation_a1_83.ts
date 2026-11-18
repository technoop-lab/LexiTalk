import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_83: ConversationDefinition = {
  id: 'conv_a1_83',
  title: 'Workplace Collaboration, Progress Updates & Scheduling Meetings',
  cefr: 'A1',
  unitId: 'unit_a1_6',
  lessonLinks: ['lesson_a1_6_83'],
  estimatedMinutes: 5,
  scenario:
    'You are collaborating with Lead UX Architect Julian Vance at a software studio in Leeds. During a sprint standup, you give a progress update on responsive UI components, divide user testing responsibilities, and schedule a review meeting with the engineering team.',
  communicativeGoals: [
    'Deliver concise project status updates ("We have completed...", "I am currently working on...")',
    'Divide sprint tasks and assign responsibilities collaboratively',
    'Give constructive feedback and suggest design adjustments politely',
    'Negotiate a mutual review schedule and confirm meeting deliverables',
  ],
  canDoStatements: [
    'Can provide clear progress reports on current work assignments',
    'Can negotiate task distribution and deadlines with team members',
    'Can schedule collaborative review sessions and confirm action items',
  ],
  characters: [
    {
      id: 'char_julian_vance',
      name: 'Julian Vance',
      role: 'Lead UX Architect',
      avatar: '💼',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'wireframe',
        ipa: '/ˈwaɪərfreɪm/',
        partOfSpeech: 'noun',
        meaning: 'A basic visual guide or structural schematic used in interface design',
        exampleSentence: 'I have finalized the responsive wireframes for the checkout flow.',
        translations: { hi: 'वायरफ्रेम / बुनियादी डिज़ाइन ढांचा' },
      },
      {
        word: 'milestone',
        ipa: '/ˈmaɪlstoʊn/',
        partOfSpeech: 'noun',
        meaning: 'A significant stage or target in a project schedule',
        exampleSentence: 'Completing user testing is our primary sprint milestone.',
        translations: { hi: 'मील का पत्थर / मुख्य लक्ष्य' },
      },
      {
        word: 'allocate',
        ipa: '/ˈæləkeɪt/',
        partOfSpeech: 'verb',
        meaning: 'Distribute resources or duties for a particular purpose',
        exampleSentence: 'Let us allocate the usability testing sessions between us.',
        translations: { hi: 'आवंटित करना / कार्य सौंपना' },
      },
      {
        word: 'deliverable',
        ipa: '/dɪˈlɪvərəbəl/',
        partOfSpeech: 'noun',
        meaning: 'A tangible product or result that must be delivered upon completion of a project',
        exampleSentence: 'Our main deliverable for Friday is the prototype demo.',
        translations: { hi: 'सौंपने योग्य वस्तु / परिणाम' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am pleased to share that we have completed...',
        functionCategory: 'Status Update',
        exampleSentence: 'I am pleased to share that we have completed the mobile dashboard components.',
      },
      {
        phrase: 'I am currently focusing on...',
        functionCategory: 'Ongoing Tasks',
        exampleSentence: 'I am currently focusing on the interactive navigation bar.',
      },
      {
        phrase: 'How shall we divide the remaining tasks?',
        functionCategory: 'Task Allocation',
        exampleSentence: 'How shall we divide the remaining user testing interviews?',
      },
      {
        phrase: 'Let us schedule a thirty-minute sync to finalize...',
        functionCategory: 'Scheduling Review',
        exampleSentence: 'Let us schedule a thirty-minute sync tomorrow at 3:00 PM.',
      },
    ],
    grammar: {
      title: 'Contrasting Completed Work (Present Perfect) vs. Ongoing Work (Present Continuous)',
      conceptExplanation:
        'Use the Present Perfect ("We have finished / completed [Task]") for finished project milestones, and the Present Continuous ("I am currently building / testing [Task]") for in-progress work.',
      patternFormula: 'We have + [Past Participle] + and now I am + [Verb-ing]',
      contrastExamples: [
        {
          incorrect: 'I finish design yesterday and I am do testing.',
          correct: 'I have finished the designs, and I am currently conducting user tests.',
          explanation: 'Combine Present Perfect for completion with Present Continuous for active tasks.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Julian Vance',
        text: 'Morning Alex! How are things progressing with the mobile interface prototype for Sprint 4?',
        translation: 'शुभ प्रभात एलेक्स! स्प्रिंट 4 के लिए मोबाइल इंटरफ़ेस प्रोटोटाइप के साथ काम कैसा चल रहा है?',
      },
      {
        speaker: 'You',
        text: 'Morning Julian! We have completed all responsive wireframes, and I am currently styling the navigation bar and checkout buttons.',
        translation: 'शुभ प्रभात जूलियन! हमने सभी रिस्पॉन्सिव वायरफ्रेम पूरे कर लिए हैं, और मैं वर्तमान में नेविगेशन बार और चेकआउट बटन को स्टाइल कर रहा हूँ।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_83_1',
      type: 'fill_blank',
      prompt: 'Complete the status report: "We have ___ the initial user testing sessions."',
      options: [
        { id: 'opt_1', text: 'completed', isCorrect: true },
        { id: 'opt_2', text: 'completing', isCorrect: false },
        { id: 'opt_3', text: 'completes', isCorrect: false },
      ],
      correctAnswer: 'completed',
      explanation: 'Past participle "completed" with "have".',
    },
    {
      id: 'cp_a1_83_2',
      type: 'multiple_choice',
      prompt: 'Which sentence proposes task allocation effectively in a meeting?',
      options: [
        { id: 'opt_1', text: 'I can analyze user test recordings if you want to prepare the engineering slides.', isCorrect: true },
        { id: 'opt_2', text: 'You do all work and I sleep.', isCorrect: false },
        { id: 'opt_3', text: 'Work is too big nobody does it.', isCorrect: false },
      ],
      correctAnswer: 'I can analyze user test recordings if you want to prepare the engineering slides.',
      explanation: 'Collaborative and constructive distribution of work.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_83_1',
      scenarioContext: 'Report project progress in a sprint update.',
      prompt: 'Build: "We have completed the responsive wireframes."',
      targetStructure: 'We have completed the responsive wireframes',
      wordBank: ['We', 'have', 'completed', 'the', 'responsive', 'wireframes', 'are', 'completing', 'is', 'a'],
      acceptableSolutions: [
        'We have completed the responsive wireframes',
        'We have completed the responsive wireframes.',
      ],
      explanation: 'Present perfect milestone structure.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_83_1',
      turnIndex: 1,
      partnerPrompt:
        'Morning Alex! Let’s do a quick sync on our sprint deliverables. What has been completed on the mobile design so far, and what are you actively working on today?',
      partnerAudioText:
        'Morning Alex! Let’s do a quick sync on our sprint deliverables. What has been completed on the mobile design so far, and what are you actively working on today?',
      partnerQuestionHindi:
        'शुभ प्रभात एलेक्स! आइए हमारे स्प्रिंट डिलिवरेबल्स पर एक त्वरित सिंक करें। मोबाइल डिज़ाइन पर अब तक क्या पूरा हो चुका है, और आज आप किस पर सक्रिय रूप से काम कर रहे हैं?',
      expectedFunction: 'Report Completed Milestones & Current Active Tasks (Spontaneous Multi-Turn)',
      contextGoal:
        'Explain that you have completed all responsive wireframes and color themes, and are currently building interactive navigation prototypes.',
      targetVocabulary: ['have completed responsive wireframes', 'color palettes and typography', 'currently building interactive prototypes', 'sprint deliverables'],
      suggestedResponses: [
        {
          label: 'Spontaneous Multi-Turn',
          text: 'Morning Julian! We have completed all the responsive mobile wireframes and color guidelines. Currently, I am building the interactive navigation bar and testing tap animations.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Milestones & Active Work',
          patterns: [
            'wireframes',
            'completed',
            'responsive',
            'currently',
            'building',
            'navigation',
            'prototypes',
            'testing',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_83_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I am currently ___ the prototype animations."',
        options: [
          { id: 'opt_1', text: 'testing', isCorrect: true },
          { id: 'opt_2', text: 'tested', isCorrect: false },
          { id: 'opt_3', text: 'tests', isCorrect: false },
        ],
        correctAnswer: 'testing',
        explanation: 'Continuous verb after "am currently": "testing".',
      },
    },
    {
      id: 'turn_a1_83_2',
      turnIndex: 2,
      partnerPrompt:
        'Those wireframes look crisp and very intuitive. We have five user usability test sessions scheduled for tomorrow afternoon. How shall we divide the moderation and note-taking?',
      partnerAudioText:
        'Those wireframes look crisp and very intuitive. We have five user usability test sessions scheduled for tomorrow afternoon. How shall we divide the moderation and note-taking?',
      partnerQuestionHindi:
        'वे वायरफ्रेम स्पष्ट और बहुत सहज दिखते हैं। हमारे पास कल दोपहर के लिए पांच उपयोगकर्ता प्रयोज्यता परीक्षण सत्र निर्धारित हैं। हम संचालन और नोट-टेकिंग को कैसे विभाजित करें?',
      expectedFunction: 'Propose Sprint Task Division & Responsibilities',
      contextGoal:
        'Propose that Julian moderate the first three sessions while you take detailed observation notes, then switch roles for the final two.',
      targetVocabulary: ['divide usability sessions', 'moderate first three sessions', 'take detailed observation notes', 'switch roles for final two'],
      suggestedResponses: [
        {
          label: 'Spontaneous Multi-Turn',
          text: 'How about you moderate the first three sessions while I take detailed notes, and then we switch roles for the final two? That way, both of us observe user feedback directly.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Task Division Proposal',
          patterns: [
            'moderate',
            'notes',
            'sessions',
            'switch',
            'roles',
            'first three',
            'final two',
            'divide',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_83_2',
        type: 'multiple_choice',
        prompt: 'Which suggestion distributes team responsibilities fairly?',
        options: [
          { id: 'opt_1', text: 'You could lead the first three interviews while I take notes, then we can switch.', isCorrect: true },
          { id: 'opt_2', text: 'I do nothing you do all five.', isCorrect: false },
          { id: 'opt_3', text: 'Interviews are boring cancel them.', isCorrect: false },
        ],
        correctAnswer: 'You could lead the first three interviews while I take notes, then we can switch.',
        explanation: 'Equitable and collaborative proposal.',
      },
    },
    {
      id: 'turn_a1_83_3',
      turnIndex: 3,
      partnerPrompt:
        'I like that division of labor. When should we present our findings and hand off the finalized Figma files to the software development team?',
      partnerAudioText:
        'I like that division of labor. When should we present our findings and hand off the finalized Figma files to the software development team?',
      partnerQuestionHindi:
        'मुझे श्रम का वह विभाजन पसंद है। हमें अपने निष्कर्ष कब प्रस्तुत करने चाहिए और सॉफ्टवेयर विकास टीम को अंतिम फ़िग्मा फ़ाइलें कब सौंपनी चाहिए?',
      expectedFunction: 'Propose Developer Handoff Meeting Slot (Thursday 3:30 PM)',
      contextGoal:
        'Suggest holding a 45-minute developer handoff meeting on Thursday at 3:30 PM in Meeting Room C.',
      targetVocabulary: ['developer handoff meeting', 'Thursday at 3:30 PM', 'Meeting Room C', 'review user findings and specs'],
      suggestedResponses: [
        {
          label: 'Spontaneous Multi-Turn',
          text: 'Let us schedule a 45-minute developer handoff meeting on Thursday at 3:30 PM in Meeting Room C. That gives us Thursday morning to compile the user test report.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Handoff Slot & Timing',
          patterns: [
            'thursday',
            '3:30',
            'meeting room c',
            'developer',
            'handoff',
            'report',
            'compile',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_83_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Let us schedule a meeting on Thursday ___ 3:30 PM."',
        options: [
          { id: 'opt_1', text: 'at', isCorrect: true },
          { id: 'opt_2', text: 'on', isCorrect: false },
          { id: 'opt_3', text: 'in', isCorrect: false },
        ],
        correctAnswer: 'at',
        explanation: 'Use preposition "at" with clock times.',
      },
    },
    {
      id: 'turn_a1_83_4',
      turnIndex: 4,
      partnerPrompt:
        'Thursday at 3:30 PM is booked on our shared team calendar. I will invite the front-end engineers. Fantastic collaboration, Alex—see you tomorrow for testing!',
      partnerAudioText:
        'Thursday at 3:30 PM is booked on our shared team calendar. I will invite the front-end engineers. Fantastic collaboration, Alex—see you tomorrow for testing!',
      partnerQuestionHindi:
        'गुरुवार दोपहर 3:30 बजे हमारे साझा टीम कैलेंडर पर बुक किया गया है। मैं फ्रंट-एंड इंजीनियरों को आमंत्रित करूंगा। शानदार सहयोग, एलेक्स—परीक्षण के लिए कल मिलते हैं!',
      expectedFunction: 'Confirm Shared Calendar Booking & Conclude Standup',
      contextGoal:
        'Confirm you see the calendar invite, express excitement for user testing, and wish Julian a productive afternoon.',
      targetVocabulary: ['invite confirmed', 'excited for user testing', 'productive afternoon', 'see you tomorrow at 1:00 PM'],
      suggestedResponses: [
        {
          label: 'Spontaneous Multi-Turn',
          text: 'The invite is confirmed on my calendar. I am really looking forward to our testing sessions tomorrow! Have a productive afternoon, Julian.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Confirmation',
          patterns: [
            'confirmed',
            'calendar',
            'testing',
            'tomorrow',
            'julian',
            'productive',
            'afternoon',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_83_4',
        type: 'multiple_choice',
        prompt: 'Which closing remark shows workplace professionalism and team camaraderie?',
        options: [
          { id: 'opt_1', text: 'The calendar invite is confirmed; see you tomorrow for testing and have a great afternoon!', isCorrect: true },
          { id: 'opt_2', text: 'I go now work bye.', isCorrect: false },
          { id: 'opt_3', text: 'Meeting is done no talk.', isCorrect: false },
        ],
        correctAnswer: 'The calendar invite is confirmed; see you tomorrow for testing and have a great afternoon!',
        explanation: 'Enthusiastic and professional sign-off.',
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
