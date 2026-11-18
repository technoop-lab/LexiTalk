import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_92: ConversationDefinition = {
  id: 'conv_a2_92',
  title: 'Ongoing Activities vs. Habits (Present Simple vs. Continuous)',
  cefr: 'A2',
  unitId: 'unit_a2_7',
  lessonLinks: ['lesson_a2_7_92'],
  estimatedMinutes: 5,
  scenario:
    'You are in a weekly 1-on-1 sprint sync with your Engineering Team Lead Daniel Evans. Daniel wants to clarify your usual core responsibilities versus the temporary new project you are actively building this week. Contrast permanent habits with ongoing tasks and discuss stative verb preferences.',
  communicativeGoals: [
    'Distinguish between permanent job duties (Present Simple) and temporary ongoing sprint tasks (Present Continuous)',
    'Use time markers accurately (usually, generally vs. currently, this week, at the moment)',
    'Correctly use stative verbs (understand, prefer, need, believe) without progressive "-ing" errors',
    'Inquire about team priorities and Daniel’s current management focus',
  ],
  canDoStatements: [
    'Can contrast regular work routines with temporary ongoing projects (CEFR A2)',
    'Can accurately switch between Present Simple and Present Continuous based on context',
    'Can avoid using stative verbs in continuous tenses (*I am knowing vs. I know)',
  ],
  characters: [
    {
      id: 'char_daniel_evans',
      name: 'Daniel Evans',
      role: 'Engineering Team Lead',
      avatar: '👨‍💻',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'currently',
        ipa: '/ˈkʌrəntli/',
        partOfSpeech: 'adverb',
        meaning: 'At the present time; right now',
        exampleSentence: 'Currently, I am testing the new user onboarding flow.',
        translations: { hi: 'वर्तमान में / फ़िलहाल' },
      },
      {
        word: 'responsibility',
        ipa: '/rɪˌspɒnsəˈbɪləti/',
        partOfSpeech: 'noun',
        meaning: 'A duty or task that you are required or expected to do',
        exampleSentence: 'My main responsibility is maintaining backend API endpoints.',
        translations: { hi: 'जिम्मेदारी' },
      },
      {
        word: 'temporary',
        ipa: '/ˈtɛmpərəri/',
        partOfSpeech: 'adjective',
        meaning: 'Lasting for only a limited period of time; not permanent',
        exampleSentence: 'This redesign is a temporary project for the next two weeks.',
        translations: { hi: 'अस्थायी' },
      },
      {
        word: 'prefer',
        ipa: '/prɪˈfɜːr/',
        partOfSpeech: 'verb',
        meaning: 'To like one thing or person better than another (stative verb)',
        exampleSentence: 'I prefer working on interactive components rather than databases.',
        translations: { hi: 'पसंद करना / प्राथमिकता देना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I usually handle..., but this week I am working on...',
        functionCategory: 'Contrasting Habit vs Ongoing',
        exampleSentence: 'I usually handle bug fixes, but this week I am building the dashboard.',
      },
      {
        phrase: 'At the moment, we are testing...',
        functionCategory: 'Describing Ongoing Action',
        exampleSentence: 'At the moment, we are testing the mobile layout.',
      },
      {
        phrase: 'I understand what you mean.',
        functionCategory: 'Stative Verb Expression',
        exampleSentence: 'I understand the project requirements clearly.',
      },
      {
        phrase: 'What are you focusing on this sprint?',
        functionCategory: 'Interactive Inquiry',
        exampleSentence: 'Daniel, what are you focusing on this sprint?',
      },
    ],
    grammar: {
      title: 'Present Simple vs. Present Continuous & Stative Verbs',
      conceptExplanation:
        'Use Present Simple for permanent routines, general facts, and regular habits (e.g., "I manage client servers every Monday"). Use Present Continuous for actions happening right now or temporary situations this week/month (e.g., "This week I am refactoring the authentication module"). Stative verbs expressing states, emotions, and thoughts (know, understand, want, need, prefer, believe) NEVER take continuous forms.',
      patternFormula: 'Habit: Subject + [Verb-s] | Ongoing: Subject + am/is/are + [Verb-ing]',
      contrastExamples: [
        {
          incorrect: 'Currently, I am understanding the problem.',
          correct: 'Currently, I understand the problem.',
          explanation: '"Understand" is a stative verb and cannot be used in continuous forms.',
        },
        {
          incorrect: 'I am usually working from 9 to 5.',
          correct: 'I usually work from 9 to 5.',
          explanation: 'Habitual actions with "usually" require Present Simple.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Daniel Evans',
        text: 'Hi Alex, thanks for jumping on. What do you usually work on on Mondays, and what is keeping you busy today?',
        translation: 'नमस्ते एलेक्स, कॉल में शामिल होने के लिए धन्यवाद। आप आमतौर पर सोमवार को किस पर काम करते हैं, और आज आपको क्या व्यस्त रख रहा है?',
      },
      {
        speaker: 'You',
        text: 'Hi Daniel! I usually review bug reports on Mondays, but today I am optimizing our database queries for faster load times.',
        translation: 'नमस्ते डेनियल! मैं आमतौर पर सोमवार को बग रिपोर्ट की समीक्षा करता हूँ, लेकिन आज मैं तेज़ लोड समय के लिए अपने डेटाबेस प्रश्नों को अनुकूलित कर रहा हूँ।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_92_1',
      type: 'fill_blank',
      prompt: 'Complete the contrast: "I usually ___ (write) unit tests, but today I ___ (design) the UI."',
      options: [
        { id: 'opt_1', text: 'write / am designing', isCorrect: true },
        { id: 'opt_2', text: 'am writing / write', isCorrect: false },
        { id: 'opt_3', text: 'writing / am design', isCorrect: false },
      ],
      correctAnswer: 'write / am designing',
      explanation: 'Habit ("usually") takes Present Simple "write"; temporary ongoing ("today") takes Present Continuous "am designing".',
    },
    {
      id: 'cp_a2_92_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses a stative verb?',
      options: [
        { id: 'opt_1', text: 'I understand the sprint requirements completely.', isCorrect: true },
        { id: 'opt_2', text: 'I am understanding the sprint requirements.', isCorrect: false },
        { id: 'opt_3', text: 'I am needing more time for this task.', isCorrect: false },
      ],
      correctAnswer: 'I understand the sprint requirements completely.',
      explanation: '"Understand" and "need" are stative verbs and do not take continuous "-ing".',
    },
    {
      id: 'cp_a2_92_3',
      type: 'multiple_choice',
      prompt: 'Which time marker matches the sentence: "We are developing the payment gateway ___."',
      options: [
        { id: 'opt_1', text: 'at the moment', isCorrect: true },
        { id: 'opt_2', text: 'every day usually', isCorrect: false },
        { id: 'opt_3', text: 'rarely on Mondays', isCorrect: false },
      ],
      correctAnswer: 'at the moment',
      explanation: '"At the moment" signals a continuous, in-progress action.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_92_1',
      scenarioContext: 'Contrast your usual routine with what you are doing currently.',
      prompt: 'Build: "I usually fix bugs but currently I am building a feature."',
      targetStructure: 'Subject + usually + verb + but + currently + subject + be + verb-ing',
      wordBank: ['I', 'usually', 'fix', 'bugs', 'but', 'currently', 'am', 'building', 'a', 'feature', 'fixing'],
      acceptableSolutions: [
        'I usually fix bugs but currently I am building a feature',
        'I usually fix bugs, but currently I am building a feature.',
      ],
      explanation: 'Present Simple for habitual role contrasted with Present Continuous for current project.',
    },
    {
      id: 'sc_a2_92_2',
      scenarioContext: 'Express your preference using a stative verb.',
      prompt: 'Build: "I prefer working on clean code architecture."',
      targetStructure: 'Subject + stative verb + gerund phrase',
      wordBank: ['I', 'prefer', 'working', 'on', 'clean', 'code', 'architecture', 'am', 'preferring'],
      acceptableSolutions: [
        'I prefer working on clean code architecture',
        'I prefer working on clean code architecture.',
      ],
      explanation: 'Use stative verb "prefer" in simple present.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_92_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi Alex, thanks for meeting. To ensure our sprint balance is right: Can you remind me what you normally handle on a weekly basis, versus what specific task you are working on right now?',
      partnerAudioText:
        'Hi Alex, thanks for meeting. To ensure our sprint balance is right: Can you remind me what you normally handle on a weekly basis, versus what specific task you are working on right now?',
      partnerQuestionHindi:
        'नमस्ते एलेक्स, मीटिंग के लिए धन्यवाद। हमारे स्प्रिंट संतुलन को सही रखने के लिए: क्या आप मुझे याद दिला सकते हैं कि आप सामान्यतः साप्ताहिक आधार पर क्या संभालते हैं, और अभी आप किस विशिष्ट कार्य पर काम कर रहे हैं?',
      expectedFunction: 'Contrast Usual Role (Present Simple) with Current Task (Present Continuous)',
      contextGoal:
        'Explain that you normally handle backend bug fixes and server monitoring, but this week you are developing a new analytics dashboard.',
      targetVocabulary: ['normally handle backend code', 'this week I am developing', 'at the moment', 'building the new dashboard'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hi Daniel! Normally, I maintain backend API endpoints and resolve bug tickets. However, this week I am developing the new analytics dashboard and writing test suites.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I usually handle database maintenance, but at the moment I am building the frontend charts for our new dashboard release.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I typically monitor servers, but right now I am working on user authentication features.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Usual Responsibilities (Present Simple)',
          patterns: ['normally', 'usually', 'typically', 'maintain', 'handle', 'monitor', 'backend', 'api', 'bugs'],
          required: true,
        },
        {
          name: 'Current Task (Present Continuous)',
          patterns: ['this week', 'right now', 'currently', 'at the moment', 'am developing', 'am building', 'am working', 'dashboard'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'stative_verb_error',
          pattern: /\bi am knowing\b|\bi am understanding\b/i,
          errorType: 'grammar',
          message: 'Do not use "-ing" with stative verbs like "know" or "understand". Use "I know" or "I understand".',
          correctionPattern: 'I know / I understand',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_92_1',
        type: 'multiple_choice',
        prompt: 'Choose the correct form: "This week, our team ___ on the mobile release."',
        options: [
          { id: 'opt_1', text: 'is working', isCorrect: true },
          { id: 'opt_2', text: 'works usually', isCorrect: false },
          { id: 'opt_3', text: 'is work', isCorrect: false },
        ],
        correctAnswer: 'is working',
        explanation: 'Temporary task this week takes Present Continuous "is working".',
      },
    },
    {
      id: 'turn_a2_92_2',
      turnIndex: 2,
      partnerPrompt:
        'That is great progress on the analytics dashboard! How is the code review process feeling for you? Do you understand all the architectural guidelines, or do you need additional documentation?',
      partnerAudioText:
        'That is great progress on the analytics dashboard! How is the code review process feeling for you? Do you understand all the architectural guidelines, or do you need additional documentation?',
      partnerQuestionHindi:
        'एनालिटिक्स डैशबोर्ड पर यह बहुत अच्छी प्रगति है! कोड रिव्यू प्रक्रिया आपको कैसी लग रही है? क्या आप सभी आर्किटेक्चरल दिशानिर्देशों को समझते हैं, या आपको अतिरिक्त दस्तावेज़ीकरण की आवश्यकता है?',
      expectedFunction: 'Express State & Preferences using Stative Verbs (understand, need, prefer)',
      contextGoal:
        'State that you understand the guidelines clearly, prefer writing modular code, and do not need extra documentation at the moment.',
      targetVocabulary: ['understand the guidelines clearly', 'prefer modular components', 'do not need extra help', 'what about your sprint focus'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I understand the architecture guidelines clearly, Daniel. I really prefer writing clean, modular components. I do not need additional documentation right now, but I appreciate you asking!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Everything makes complete sense. I understand the requirements and prefer our current workflow. What are you focusing on this week, Daniel?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I understand the setup well and do not need more docs. What about your schedule this week?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Stative Verb (understand / need / prefer)',
          patterns: ['understand', 'need', 'prefer', 'clear', 'makes sense', 'do not need'],
          required: true,
        },
        {
          name: 'Follow-up Inquiry',
          patterns: ['what are you', 'how about your', 'what about you', 'what about your schedule'],
          required: false,
        },
      ],
      commonMistakeRules: [
        {
          id: 'i_am_needing_error',
          pattern: /\bi am needing\b|\bi am preferring\b/i,
          errorType: 'grammar',
          message: 'Say "I need" or "I prefer", not "I am needing" or "I am preferring".',
          correctionPattern: 'I need / I prefer',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_92_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank with the correct stative verb form: "I ___ (prefer) typescript over plain javascript."',
        options: [
          { id: 'opt_1', text: 'prefer', isCorrect: true },
          { id: 'opt_2', text: 'am preferring', isCorrect: false },
          { id: 'opt_3', text: 'preferring', isCorrect: false },
        ],
        correctAnswer: 'prefer',
        explanation: '"Prefer" is a stative verb that takes simple present.',
      },
    },
    {
      id: 'turn_a2_92_3',
      turnIndex: 3,
      partnerPrompt:
        'I am currently preparing our quarterly infrastructure review with the director, so my calendar is a bit packed. Are you collaborating with the UX design team today, or are you focusing on code independently?',
      partnerAudioText:
        'I am currently preparing our quarterly infrastructure review with the director, so my calendar is a bit packed. Are you collaborating with the UX design team today, or are you focusing on code independently?',
      partnerQuestionHindi:
        'मैं वर्तमान में निदेशक के साथ हमारे त्रैमासिक बुनियादी ढांचे की समीक्षा की तैयारी कर रहा हूँ, इसलिए मेरा कैलेंडर थोड़ा व्यस्त है। क्या आप आज UX डिज़ाइन टीम के साथ सहयोग कर रहे हैं, या आप स्वतंत्र रूप से कोड पर ध्यान केंद्रित कर रहे हैं?',
      expectedFunction: 'Describe Today’s Work Schedule & Team Collaboration',
      contextGoal:
        'Explain that this morning you are coding independently, but this afternoon you are meeting with the UX designer to review interactive charts.',
      targetVocabulary: ['this morning I am coding independently', 'this afternoon I am meeting with UX', 'reviewing chart interactions', 'smooth collaboration'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'This morning, I am coding independently in my studio. This afternoon at 2:00 PM, I am meeting with Sarah from UX to review the chart interactions. We usually sync twice a week.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I am working on code alone right now, but I am syncing with the UX designer after lunch to finalize design tokens.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I am coding independently today, and meeting UX at 2 PM for feedback.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Current Coding Activity',
          patterns: ['coding', 'working', 'independently', 'alone', 'morning', 'right now'],
          required: true,
        },
        {
          name: 'Collaboration / Meeting Plan',
          patterns: ['meeting', 'syncing', 'ux', 'designer', 'sarah', 'afternoon', '2:00', '2 pm', 'lunch'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_92_3',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes a planned arrangement for this afternoon?',
        options: [
          { id: 'opt_1', text: 'I am meeting with the design team at 2:00 PM.', isCorrect: true },
          { id: 'opt_2', text: 'I am meet with team 2 PM.', isCorrect: false },
          { id: 'opt_3', text: 'I meets design team.', isCorrect: false },
        ],
        correctAnswer: 'I am meeting with the design team at 2:00 PM.',
        explanation: 'Present continuous is frequently used for confirmed future arrangements.',
      },
    },
    {
      id: 'turn_a2_92_4',
      turnIndex: 4,
      partnerPrompt:
        'Excellent plan. It sounds like you have full clarity and momentum on this sprint. Let us wrap up: What is your main objective before we connect again at Friday’s demo?',
      partnerAudioText:
        'Excellent plan. It sounds like you have full clarity and momentum on this sprint. Let us wrap up: What is your main objective before we connect again at Friday’s demo?',
      partnerQuestionHindi:
        'शानदार योजना। ऐसा लगता है कि इस स्प्रिंट पर आपके पास पूरी स्पष्टता और गति है। आइए समाप्त करें: शुक्रवार के डेमो में दोबारा जुड़ने से पहले आपका मुख्य उद्देश्य क्या है?',
      expectedFunction: 'Summarize Key Milestone & Conclude Professional Sync',
      contextGoal:
        'State your primary deliverable (completing the interactive chart filters and passing automated tests), thank Daniel, and sign off.',
      targetVocabulary: ['complete the interactive filters', 'pass all unit tests', 'ready for Friday demo', 'thank you Daniel'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'My main goal is to finish the interactive filter components and ensure all test suites pass with 100% coverage. Everything will be ready for Friday’s demo. Thanks for your time and guidance, Daniel!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I aim to finalize the chart filters and deploy to the staging server before Friday. Thank you Daniel, have a great day!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I am finishing the filters and tests so we are ready for the Friday demo. Thanks Daniel!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Milestone / Deliverable',
          patterns: ['filters', 'charts', 'tests', 'coverage', 'demo', 'friday', 'staging', 'deploy', 'finish', 'ready'],
          required: true,
        },
        {
          name: 'Sign-off',
          patterns: ['thanks', 'thank you', 'daniel', 'have a great day', 'guidance'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_92_4',
        type: 'fill_blank',
        prompt: 'Complete the sentence: "I will make sure the feature is ready ___ the demo."',
        options: [
          { id: 'opt_1', text: 'for', isCorrect: true },
          { id: 'opt_2', text: 'to', isCorrect: false },
          { id: 'opt_3', text: 'of', isCorrect: false },
        ],
        correctAnswer: 'for',
        explanation: 'Collocation: "ready for [an event]".',
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
