import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_61: ConversationDefinition = {
  id: 'conv_a1_61',
  title: 'Workplace Collaboration, Team Meetings & Status Updates',
  cefr: 'A1',
  unitId: 'unit_a1_5',
  lessonLinks: ['lesson_a1_5_61'],
  estimatedMinutes: 5,
  scenario:
    'You attend your weekly Monday morning project sync at a software agency in Manchester. Your project manager, Liam, asks you for an update on your current design tasks, progress on the client presentation slides, and whether you need assistance with the team budget spreadsheet.',
  communicativeGoals: [
    'Give a clear status update on ongoing work using the Present Continuous ("I am working on...", "I am preparing...")',
    'Share progress percentages and completion timelines ("I am almost finished", "It will be ready by 2 PM")',
    'Ask for help or offer assistance to colleagues ("Could you review this draft?", "Do you need a hand?")',
    'Recycle A1 work vocabulary, routines, and polite modal requests from Units 1–4',
  ],
  canDoStatements: [
    'Can describe ongoing tasks and project status during a team meeting (CEFR A1.2)',
    'Can use Present Continuous to talk about actions happening right now or during this week',
    'Can request feedback and confirm deadlines politely',
  ],
  characters: [
    {
      id: 'char_liam_pm',
      name: 'Liam',
      role: 'Project Manager',
      avatar: '💼',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'update',
        ipa: '/ʌpˈdeɪt/',
        partOfSpeech: 'noun / verb',
        meaning: 'New or recent information about a situation or ongoing task',
        exampleSentence: 'Here is a quick status update on our client project.',
        translations: { hi: 'अपडेट / ताज़ा जानकारी' },
      },
      {
        word: 'progress',
        ipa: '/ˈprɒɡrɛs/',
        partOfSpeech: 'noun',
        meaning: 'Forward movement toward a goal or completion of work',
        exampleSentence: 'We made great progress on the design slides this morning.',
        translations: { hi: 'प्रगति / काम का आगे बढ़ना' },
      },
      {
        word: 'deadline',
        ipa: '/ˈdɛdlaɪn/',
        partOfSpeech: 'noun',
        meaning: 'The latest time or date by which something must be completed',
        exampleSentence: 'Our project deadline is this Friday at five o\'clock.',
        translations: { hi: 'अंतिम समय सीमा' },
      },
      {
        word: 'presentation',
        ipa: '/ˌprɛzɛnˈteɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'A speech or talk in which a new project or idea is shown to an audience',
        exampleSentence: 'I am preparing the presentation slides for the client meeting.',
        translations: { hi: 'प्रस्तुति' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am currently working on...',
        functionCategory: 'Status Update',
        exampleSentence: 'I am currently working on the user interface wireframes.',
      },
      {
        phrase: 'It is almost finished.',
        functionCategory: 'Progress Estimation',
        exampleSentence: 'The presentation draft is almost finished.',
      },
      {
        phrase: 'It will be ready by...',
        functionCategory: 'Timeline Commitment',
        exampleSentence: 'The report will be ready by two o\'clock this afternoon.',
      },
      {
        phrase: 'Do you need any help with...?',
        functionCategory: 'Offering Assistance',
        exampleSentence: 'Do you need any help with the project spreadsheet?',
      },
    ],
    grammar: {
      title: 'Present Continuous for Ongoing Work: Subject + [am/is/are] + [Verb + -ing]',
      conceptExplanation:
        'Use Present Continuous to report what you are working on currently during this day or week ("I am designing", "We are reviewing"). Combine with time expressions ("currently", "this morning", "by 3 PM").',
      patternFormula: 'Subject + [am / is / are] + [Verb-ing] + [Task Object] + [Time Marker]',
      contrastExamples: [
        {
          incorrect: 'I work on the slides right now.',
          correct: 'I am working on the slides right now.',
          explanation: 'Use Present Continuous "am working" for activities in progress.',
        },
        {
          incorrect: 'The draft ready by 2 PM.',
          correct: 'The draft will be ready by 2 PM.',
          explanation: 'Use "will be ready" with future time markers.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Liam',
        text: 'Good morning team! Let us start our weekly sync. Alex, what are you currently working on today?',
        translation: 'शुभ प्रभात टीम! आइए हमारी साप्ताहिक बैठक शुरू करें। एलेक्स, आज आप वर्तमान में किस पर काम कर रहे हैं?',
      },
      {
        speaker: 'You',
        text: 'Good morning Liam! I am currently working on the new website wireframes and finishing the client presentation slides.',
        translation: 'शुभ प्रभात लियाम! मैं वर्तमान में नए वेबसाइट वायरफ्रेम पर काम कर रहा हूँ और क्लाइंट प्रेजेंटेशन स्लाइड्स को पूरा कर रहा हूँ।',
      },
      {
        speaker: 'Liam',
        text: 'Great! When do you think the slides will be ready for review?',
        translation: 'बहुत बढ़िया! आपको क्या लगता है कि समीक्षा के लिए स्लाइड्स कब तक तैयार हो जाएंगी?',
      },
      {
        speaker: 'You',
        text: 'They are almost finished. They will be ready by 2 PM, and I will email them to the team.',
        translation: 'वे लगभग पूरी हो चुकी हैं। वे दोपहर 2 बजे तक तैयार हो जाएंगी, और मैं उन्हें टीम को ईमेल कर दूंगा।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_61_1',
      type: 'fill_blank',
      prompt: 'Complete the status report: "I ___ currently working on the design slides."',
      options: [
        { id: 'opt_1', text: 'am', isCorrect: true },
        { id: 'opt_2', text: 'is', isCorrect: false },
        { id: 'opt_3', text: 'are', isCorrect: false },
      ],
      correctAnswer: 'am',
      explanation: 'First-person singular "I" takes auxiliary "am".',
    },
    {
      id: 'cp_a1_61_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly shares an estimated completion time?',
      options: [
        { id: 'opt_1', text: 'The report will be ready by two o\'clock.', isCorrect: true },
        { id: 'opt_2', text: 'The report is ready by yesterday.', isCorrect: false },
        { id: 'opt_3', text: 'The report will ready on two clock.', isCorrect: false },
      ],
      correctAnswer: 'The report will be ready by two o\'clock.',
      explanation: '"will be ready by [time]" is the correct phrase.',
    },
    {
      id: 'cp_a1_61_3',
      type: 'multiple_choice',
      prompt: 'Choose the most professional way to offer help to a colleague:',
      options: [
        { id: 'opt_1', text: 'Do you need any help with the spreadsheet?', isCorrect: true },
        { id: 'opt_2', text: 'You do spreadsheet now?', isCorrect: false },
        { id: 'opt_3', text: 'Give me spreadsheet fast.', isCorrect: false },
      ],
      correctAnswer: 'Do you need any help with the spreadsheet?',
      explanation: 'Polite and standard workplace offer of assistance.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_61_1',
      scenarioContext: 'Report what you are working on during the morning meeting.',
      prompt: 'Build: "I am working on the presentation slides."',
      targetStructure: 'Subject + am working on + noun phrase',
      wordBank: ['I', 'am', 'working', 'on', 'the', 'presentation', 'slides', 'work', 'is', 'at'],
      acceptableSolutions: [
        'I am working on the presentation slides',
        'I am working on the presentation slides.',
      ],
      explanation: 'Present Continuous status statement.',
    },
    {
      id: 'sc_a1_61_2',
      scenarioContext: 'Promise delivery time for your review draft.',
      prompt: 'Build: "It will be ready by two PM."',
      targetStructure: 'It will be ready by + time',
      wordBank: ['It', 'will', 'be', 'ready', 'by', 'two', 'PM', 'is', 'being', 'at'],
      acceptableSolutions: [
        'It will be ready by two PM',
        'It will be ready by two PM.',
        'It will be ready by 2 PM.',
        'It will be ready by 2 PM',
      ],
      explanation: 'Future deadline commitment.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_61_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning everyone, welcome to our Monday project standup! Alex, let’s start with you: what key tasks are you currently working on this morning?',
      partnerAudioText:
        'Good morning everyone, welcome to our Monday project standup! Alex, let’s start with you: what key tasks are you currently working on this morning?',
      partnerQuestionHindi:
        'शुभ प्रभात सभी को, हमारे सोमवार प्रोजेक्ट स्टैंडअप में आपका स्वागत है! एलेक्स, आइए आपसे शुरुआत करते हैं: आज सुबह आप वर्तमान में किन प्रमुख कार्यों पर काम कर रहे हैं?',
      expectedFunction: 'Give Status Update Using Present Continuous (I am working on...)',
      contextGoal:
        'State that you are currently working on the new website wireframes and preparing the client presentation slides.',
      targetVocabulary: ['good morning Liam', 'currently working on', 'website wireframes', 'presentation slides', 'preparing'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Good morning Liam! I am currently working on the new website wireframes and preparing the client presentation slides.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Prompt Scaffold',
          text: 'Good morning! I am working on the website wireframes and finishing the presentation slides today.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Current Tasks & Status',
          patterns: [
            'working on',
            'wireframes',
            'slides',
            'presentation',
            'preparing',
            'currently',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'i_work_on_now_error',
          pattern: /\bi work on .* now\b/i,
          errorType: 'grammar',
          message: 'Say "I am working on...", using the Present Continuous.',
          correctionPattern: 'I am working on...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_61_1',
        type: 'fill_blank',
        prompt: 'Choose the correct verb form: "I ___ working on the project report."',
        options: [
          { id: 'opt_1', text: 'am', isCorrect: true },
          { id: 'opt_2', text: 'do', isCorrect: false },
          { id: 'opt_3', text: 'have', isCorrect: false },
        ],
        correctAnswer: 'am',
        explanation: 'Use auxiliary "am" with "-ing" verb form.',
      },
    },
    {
      id: 'turn_a1_61_2',
      turnIndex: 2,
      partnerPrompt:
        'Those presentation slides are essential for our client call. How far along are you, and when will they be ready for the team to review?',
      partnerAudioText:
        'Those presentation slides are essential for our client call. How far along are you, and when will they be ready for the team to review?',
      partnerQuestionHindi:
        'वे प्रेजेंटेशन स्लाइड्स हमारे क्लाइंट कॉल के लिए आवश्यक हैं। आप कितनी दूर तक पहुँच चुके हैं, और वे टीम की समीक्षा के लिए कब तक तैयार होंगी?',
      expectedFunction: 'State Progress & Completion Time (almost finished, ready by 2 PM)',
      contextGoal:
        'Explain that the slides are almost finished and will be ready for review by 2:00 PM.',
      targetVocabulary: ['almost finished', 'will be ready by 2 PM', 'for review', 'send an email', 'on schedule'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'They are almost finished! I am just adding the final diagrams, and they will be ready for review by 2:00 PM this afternoon.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Prompt Scaffold',
          text: 'They are almost finished and will be ready by 2 PM for everyone to check.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Progress & Time',
          patterns: [
            'almost finished',
            'ready by',
            '2 pm',
            'two o\'clock',
            'review',
            'afternoon',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_61_2',
        type: 'multiple_choice',
        prompt: 'Which sentence states a deadline accurately?',
        options: [
          { id: 'opt_1', text: 'They will be ready by two o\'clock.', isCorrect: true },
          { id: 'opt_2', text: 'They ready at two o\'clock.', isCorrect: false },
          { id: 'opt_3', text: 'They are will ready by two.', isCorrect: false },
        ],
        correctAnswer: 'They will be ready by two o\'clock.',
        explanation: '"will be ready by [time]" is grammatically correct.',
      },
    },
    {
      id: 'turn_a1_61_3',
      turnIndex: 3,
      partnerPrompt:
        'Two o’clock works nicely. Now, I am updating the quarterly budget sheet, but I need to double-check the software license numbers. Do you have ten minutes after lunch to help me cross-check the figures?',
      partnerAudioText:
        'Two o’clock works nicely. Now, I am updating the quarterly budget sheet, but I need to double-check the software license numbers. Do you have ten minutes after lunch to help me cross-check the figures?',
      partnerQuestionHindi:
        'दो बजे का समय ठीक है। अब, मैं त्रैमासिक बजट शीट को अपडेट कर रहा हूँ, लेकिन मुझे सॉफ्टवेयर लाइसेंस नंबरों की दोबारा जांच करनी होगी। क्या आपके पास दोपहर के भोजन के बाद आंकड़ों की जांच में मेरी मदद करने के लिए दस मिनट हैं?',
      expectedFunction: 'Agree to Assist & Propose Time (I can help you at 1:30 PM)',
      contextGoal:
        'Agree happily to help Liam with the budget spreadsheet and propose meeting at 1:30 PM.',
      targetVocabulary: ['happy to help', 'check the figures', 'budget sheet', 'at one thirty', 'after lunch'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Yes, of course! I would be happy to help you check the budget figures. Let’s meet at your desk at 1:30 PM right after lunch.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Prompt Scaffold',
          text: 'I can certainly help you with that. Let’s meet at 1:30 PM after lunch.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Assistance Agreement & Time',
          patterns: [
            'happy to help',
            'of course',
            'can help',
            '1:30',
            'one thirty',
            'after lunch',
            'budget',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_61_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I would be happy ___ help you with the numbers."',
        options: [
          { id: 'opt_1', text: 'to', isCorrect: true },
          { id: 'opt_2', text: 'for', isCorrect: false },
          { id: 'opt_3', text: 'at', isCorrect: false },
        ],
        correctAnswer: 'to',
        explanation: '"happy to help" takes the infinitive "to".',
      },
    },
    {
      id: 'turn_a1_61_4',
      turnIndex: 4,
      partnerPrompt:
        'Perfect! 1:30 PM is locked into the schedule. That wraps up our sync. Let’s have a productive week everyone!',
      partnerAudioText:
        'Perfect! 1:30 PM is locked into the schedule. That wraps up our sync. Let’s have a productive week everyone!',
      partnerQuestionHindi:
        'बिल्कुल सही! 1:30 बजे का समय शेड्यूल में तय हो गया है। इसके साथ हमारी बैठक समाप्त होती है। आइए सभी के लिए एक उत्पादक सप्ताह हो!',
      expectedFunction: 'Conclude Standup & Wish Productive Week',
      contextGoal:
        'Thank Liam, confirm the 1:30 PM meeting, and wish the team a great week.',
      targetVocabulary: ['thank you Liam', 'see you at one thirty', 'have a great week', 'productive week', 'goodbye'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Thank you Liam! See you at 1:30 PM, and have a fantastic and productive week everyone!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Prompt Scaffold',
          text: 'Thanks Liam! See you at 1:30. Have a great week everyone!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Meeting Wrap-Up',
          patterns: [
            'thank you',
            'thanks',
            'see you',
            '1:30',
            'productive week',
            'great week',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_61_4',
        type: 'multiple_choice',
        prompt: 'Which phrase wraps up a standup meeting politely?',
        options: [
          { id: 'opt_1', text: 'Thanks Liam, see you at 1:30! Have a great week everyone.', isCorrect: true },
          { id: 'opt_2', text: 'I am go away from standup now.', isCorrect: false },
          { id: 'opt_3', text: 'Meeting is dead now bye.', isCorrect: false },
        ],
        correctAnswer: 'Thanks Liam, see you at 1:30! Have a great week everyone.',
        explanation: 'Professional and courteous.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 2,
    targetVocabularyCoveragePct: 70,
  },
};
