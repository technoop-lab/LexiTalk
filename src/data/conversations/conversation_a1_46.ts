import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_46: ConversationDefinition = {
  id: 'conv_a1_46',
  title: 'Workplace Routines, Office Items & Daily Professional Tasks',
  cefr: 'A1',
  unitId: 'unit_a1_4',
  lessonLinks: ['lesson_a1_4_46'],
  estimatedMinutes: 5,
  scenario:
    'You are starting your new job at an international tech office. Your friendly coworker Marcus shows you around the workspace, points out office supplies, and discusses daily routines, team meetings, and work schedules.',
  communicativeGoals: [
    'Describe workplace items and office equipment (printer, laptop, stationery, desk)',
    'Discuss daily work schedules and routines using Present Simple and frequency adverbs (I usually arrive at 9 AM, I check emails first)',
    'Ask and answer questions about team meetings and report deadlines ("What time is the team meeting?", "Who sends the weekly report?")',
    'Recycle basic greetings and time expressions in a professional workplace environment',
  ],
  canDoStatements: [
    'Can describe daily workplace tasks and job routines in simple terms (CEFR A1.2)',
    'Can name common office equipment and supplies',
    'Can ask colleagues about meeting schedules and working hours',
  ],
  characters: [
    {
      id: 'char_marcus_office',
      name: 'Marcus',
      role: 'Coworker & Project Lead',
      avatar: '💼',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'colleague',
        ipa: '/ˈkɒliːɡ/',
        partOfSpeech: 'noun',
        meaning: 'A person with whom one works in a profession or business',
        exampleSentence: 'Marcus is my colleague on the software design team.',
        translations: { hi: 'सहकर्मी' },
      },
      {
        word: 'schedule',
        ipa: '/ˈʃɛdjuːl/',
        partOfSpeech: 'noun / verb',
        meaning: 'A plan for carrying out process or procedure, giving lists of intended events and times',
        exampleSentence: 'My daily work schedule starts at nine o\'clock in the morning.',
        translations: { hi: 'कार्यतालिका / समय-सारणी' },
      },
      {
        word: 'printer',
        ipa: '/ˈprɪntər/',
        partOfSpeech: 'noun',
        meaning: 'A machine for printing text or pictures onto paper',
        exampleSentence: 'The color printer is located next to the supply cabinet.',
        translations: { hi: 'प्रिंटर' },
      },
      {
        word: 'meeting',
        ipa: '/ˈmiːtɪŋ/',
        partOfSpeech: 'noun',
        meaning: 'An assembly of people for a particular purpose, especially for formal discussion',
        exampleSentence: 'We have a daily standup meeting at ten o\'clock.',
        translations: { hi: 'बैठक / मीटिंग' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I usually arrive at work at...',
        functionCategory: 'Daily Routine',
        exampleSentence: 'I usually arrive at work at eight thirty.',
      },
      {
        phrase: 'Where is the printer located?',
        functionCategory: 'Workplace Inquiries',
        exampleSentence: 'Where is the wireless printer located on this floor?',
      },
      {
        phrase: 'We have a team meeting at...',
        functionCategory: 'Scheduling',
        exampleSentence: 'We have a team meeting at ten every morning.',
      },
      {
        phrase: 'I always check my emails first.',
        functionCategory: 'Work Priorities',
        exampleSentence: 'I always check my emails before writing daily reports.',
      },
    ],
    grammar: {
      title: 'Workplace Routines: Present Simple with Frequency Adverbs (Always, Usually, Sometimes)',
      conceptExplanation:
        'Use Present Simple to describe daily work routines and habits (Subject + Adverb + Verb). For example: "I usually start work at 9:00 AM" or "She always checks emails in the morning". In questions, use "Do you usually...?" or "What time does the meeting start?".',
      patternFormula: 'Subject + [always / usually / often / sometimes / never] + [Base Verb] | What time do you + [Base Verb]?',
      contrastExamples: [
        {
          incorrect: 'I am always arrive at nine o\'clock.',
          correct: 'I always arrive at nine o\'clock.',
          explanation: 'Do not use "am" with Present Simple routine actions: "I always arrive", not "I am always arrive".',
        },
        {
          incorrect: 'He usually check emails at nine.',
          correct: 'He usually checks emails at nine.',
          explanation: 'Add "-s" to the verb with third-person singular (he, she, it): "He checks".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Marcus',
        text: 'Welcome to the team! Here is your new desk and laptop. What time do you usually like to start your working day?',
        translation: 'टीम में आपका स्वागत है! यह आपकी नई मेज और लैपटॉप है। आप आमतौर पर किस समय अपना कार्य दिवस शुरू करना पसंद करते हैं?',
      },
      {
        speaker: 'You',
        text: 'Thank you Marcus! I usually arrive at the office at eight thirty. I always grab a coffee and check my emails first.',
        translation: 'धन्यवाद मार्कस! मैं आमतौर पर साढ़े आठ बजे कार्यालय पहुंचता हूँ। मैं हमेशा पहले एक कॉफ़ी लेता हूँ और अपने ईमेल देखता हूँ।',
      },
      {
        speaker: 'Marcus',
        text: 'That is great. We have a brief daily standup meeting at ten o\'clock in conference room B.',
        translation: 'यह बहुत अच्छा है। सम्मेलन कक्ष बी में हमारी सुबह दस बजे एक संक्षिप्त दैनिक स्टैंडअप बैठक होती है।',
      },
      {
        speaker: 'You',
        text: 'Understood. Where is the printer and stationery cabinet if I need to print the project notes?',
        translation: 'समझ गया। यदि मुझे प्रोजेक्ट नोट्स प्रिंट करने की आवश्यकता हो तो प्रिंटर और स्टेशनरी कैबिनेट कहाँ है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_46_1',
      type: 'fill_blank',
      prompt: 'Complete the workplace routine: "I usually ___ my workday at nine in the morning."',
      options: [
        { id: 'opt_1', text: 'start', isCorrect: true },
        { id: 'opt_2', text: 'starting', isCorrect: false },
        { id: 'opt_3', text: 'am start', isCorrect: false },
      ],
      correctAnswer: 'start',
      explanation: 'Use base verb "start" with "I usually".',
    },
    {
      id: 'cp_a1_46_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly asks about a colleague\'s daily routine?',
      options: [
        { id: 'opt_1', text: 'What time do you usually have lunch?', isCorrect: true },
        { id: 'opt_2', text: 'What time are you usually have lunch?', isCorrect: false },
        { id: 'opt_3', text: 'What time you usually having lunch?', isCorrect: false },
      ],
      correctAnswer: 'What time do you usually have lunch?',
      explanation: '"What time do you + adverb + base verb" is the standard Present Simple question form.',
    },
    {
      id: 'cp_a1_46_3',
      type: 'multiple_choice',
      prompt: 'Choose the correct form for third-person singular work routine:',
      options: [
        { id: 'opt_1', text: 'Sarah always prepares the meeting agenda.', isCorrect: true },
        { id: 'opt_2', text: 'Sarah always prepare the meeting agenda.', isCorrect: false },
        { id: 'opt_3', text: 'Sarah is always prepare the meeting agenda.', isCorrect: false },
      ],
      correctAnswer: 'Sarah always prepares the meeting agenda.',
      explanation: 'Subject "Sarah" takes the third-person singular verb "prepares".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_46_1',
      scenarioContext: 'Describe your arrival time and morning email check.',
      prompt: 'Build: "I usually arrive at nine and check my emails."',
      targetStructure: 'Subject + adverb + base verb + prepositional phrase + coordinator + base verb + object',
      wordBank: ['I', 'usually', 'arrive', 'at', 'nine', 'and', 'check', 'my', 'emails', 'am', 'arriving'],
      acceptableSolutions: [
        'I usually arrive at nine and check my emails',
        'I usually arrive at nine and check my emails.',
      ],
      explanation: 'Connects two routine actions with "and".',
    },
    {
      id: 'sc_a1_46_2',
      scenarioContext: 'Ask about the daily team meeting time.',
      prompt: 'Build: "What time does our daily team meeting start?"',
      targetStructure: 'What time + does + noun phrase + base verb?',
      wordBank: ['What', 'time', 'does', 'our', 'daily', 'team', 'meeting', 'start', 'do', 'starting', 'is'],
      acceptableSolutions: [
        'What time does our daily team meeting start',
        'What time does our daily team meeting start?',
      ],
      explanation: 'Standard question with auxiliary "does" for singular subject "meeting".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_46_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! Welcome to the team. I’m Marcus, your desk neighbor. Here is your workspace and computer. What time do you usually start work, and what do you do first in the morning?',
      partnerAudioText:
        'Hi there! Welcome to the team. I’m Marcus, your desk neighbor. Here is your workspace and computer. What time do you usually start work, and what do you do first in the morning?',
      partnerQuestionHindi:
        'नमस्ते! टीम में आपका स्वागत है। मैं मार्कस हूँ, आपकी बगल वाली मेज पर। यह आपका कार्यक्षेत्र और कंप्यूटर है। आप आमतौर पर किस समय काम शुरू करते हैं, और आप सुबह सबसे पहले क्या करते हैं?',
      expectedFunction: 'State Work Hours & Morning Routine with Present Simple & Frequency Adverb',
      contextGoal:
        'State your arrival time (e.g. 8:30 or 9:00 AM) and mention that you always check emails or grab a coffee first.',
      targetVocabulary: ['usually arrive', 'start at nine', 'always check', 'emails', 'coffee', 'workspace'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Nice to meet you Marcus! I usually arrive at eight thirty. I always grab a cup of coffee and check my emails before starting project work.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I usually start at nine o’clock. I always check my inbox and make a to-do list.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I usually arrive around nine and check emails first!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Arrival Time & Morning Routine',
          patterns: [
            'usually arrive',
            'usually start',
            'start at',
            'arrive at',
            'eight thirty',
            'nine',
            'check emails',
            'coffee',
            'inbox',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'am_arrive_error',
          pattern: /\bi am usually arrive\b/i,
          errorType: 'grammar',
          message: 'Say "I usually arrive", not "I am usually arrive".',
          correctionPattern: 'I usually arrive at...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_46_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "I usually ___ at work at 8:30 AM."',
        options: [
          { id: 'opt_1', text: 'arrive', isCorrect: true },
          { id: 'opt_2', text: 'arrives', isCorrect: false },
          { id: 'opt_3', text: 'am arrive', isCorrect: false },
        ],
        correctAnswer: 'arrive',
        explanation: 'Subject "I" takes base verb "arrive".',
      },
    },
    {
      id: 'turn_a1_46_2',
      turnIndex: 2,
      partnerPrompt:
        'Great routine! We have a daily team standup meeting every morning to review project tasks. Do you know what time our team meets, or do you have any questions about meetings?',
      partnerAudioText:
        'Great routine! We have a daily team standup meeting every morning to review project tasks. Do you know what time our team meets, or do you have any questions about meetings?',
      partnerQuestionHindi:
        'शानदार दिनचर्या! प्रोजेक्ट कार्यों की समीक्षा के लिए हमारी हर सुबह एक दैनिक टीम स्टैंडअप बैठक होती है। क्या आप जानते हैं कि हमारी टीम किस समय मिलती है, या क्या आपके पास बैठकों के बारे में कोई प्रश्न है?',
      expectedFunction: 'Inquire About Meeting Time & Room Location (What time does...?)',
      contextGoal:
        'Ask what time the daily meeting starts and which conference room or link is used.',
      targetVocabulary: ['what time does', 'meeting start', 'conference room', 'standup', 'daily meeting'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'What time does the daily team standup meeting start, and which conference room do we usually use?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'What time is the meeting, and where do we meet every morning?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'What time does the standup start and in which room?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Meeting Inquiries',
          patterns: [
            'what time',
            'meeting start',
            'standup',
            'which room',
            'conference room',
            'when do we meet',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_46_2',
        type: 'multiple_choice',
        prompt: 'Which question correctly asks about a meeting time?',
        options: [
          { id: 'opt_1', text: 'What time does the morning meeting start?', isCorrect: true },
          { id: 'opt_2', text: 'What time is start the morning meeting?', isCorrect: false },
          { id: 'opt_3', text: 'When does the morning meeting starts?', isCorrect: false },
        ],
        correctAnswer: 'What time does the morning meeting start?',
        explanation: 'Use "does + subject + base verb (start)".',
      },
    },
    {
      id: 'turn_a1_46_3',
      turnIndex: 3,
      partnerPrompt:
        'We meet at ten o’clock sharp in Room 204. Also, if you need stationery, notebooks, or printer paper, they are right behind the kitchen. Do you need help finding the printer or anything else?',
      partnerAudioText:
        'We meet at ten o’clock sharp in Room 204. Also, if you need stationery, notebooks, or printer paper, they are right behind the kitchen. Do you need help finding the printer or anything else?',
      partnerQuestionHindi:
        'हम ठीक दस बजे कमरा 204 में मिलते हैं। इसके अलावा, यदि आपको स्टेशनरी, नोटबुक या प्रिंटर पेपर की आवश्यकता है, तो वे रसोई के ठीक पीछे हैं। क्या आपको प्रिंटर या कुछ और खोजने में मदद चाहिए?',
      expectedFunction: 'Acknowledge Supplies & Ask About Printing / Wi-Fi',
      contextGoal:
        'Acknowledge the supply room and ask how to connect to the office printer or Wi-Fi network.',
      targetVocabulary: ['printer', 'connect to', 'wi-fi', 'stationery', 'thank you', 'supplies'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you Marcus! That is very helpful. Could you also show me how to connect my laptop to the office printer?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thanks! How do I connect to the wireless printer from my laptop?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Got it! Where is the printer and how do I connect to it?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Printer & Network Connection',
          patterns: ['printer', 'connect', 'laptop', 'wi-fi', 'thank you', 'thanks', 'how to connect'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_46_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Could you please show me where the ___ is?"',
        options: [
          { id: 'opt_1', text: 'printer', isCorrect: true },
          { id: 'opt_2', text: 'print', isCorrect: false },
          { id: 'opt_3', text: 'printing machine to', isCorrect: false },
        ],
        correctAnswer: 'printer',
        explanation: 'Noun "printer" refers to the office device.',
      },
    },
    {
      id: 'turn_a1_46_4',
      turnIndex: 4,
      partnerPrompt:
        'Sure thing! I will send you the printer setup link right now on Slack. Let’s grab a cup of coffee together before the ten o’clock meeting. Welcome aboard!',
      partnerAudioText:
        'Sure thing! I will send you the printer setup link right now on Slack. Let’s grab a cup of coffee together before the ten o’clock meeting. Welcome aboard!',
      partnerQuestionHindi:
        'बिल्कुल! मैं आपको स्लैक पर अभी प्रिंटर सेटअप लिंक भेजूंगा। आइए दस बजे की बैठक से पहले एक कप कॉफी लें। हमारे साथ जुड़ने पर आपका स्वागत है!',
      expectedFunction: 'Accept Coffee Offer & Express Enthusiasm',
      contextGoal:
        'Thank Marcus, accept the coffee invitation warmly, and confirm readiness for the 10:00 AM meeting.',
      targetVocabulary: ['thank you', 'coffee', 'sounds great', 'ready for the meeting', 'see you soon'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'That sounds wonderful, Marcus! I would love a cup of coffee. Thank you for all your help, and I am ready for our ten o\'clock meeting!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thanks Marcus! Coffee sounds great. Let\'s head to the kitchen!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Awesome, thanks Marcus! Let’s get some coffee before ten.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Enthusiastic Acceptance & Wrap-up',
          patterns: [
            'thank you',
            'thanks',
            'sounds great',
            'sounds wonderful',
            'coffee',
            'ready',
            'let\'s go',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_46_4',
        type: 'multiple_choice',
        prompt: 'Which sentence accepts the coffee offer politely?',
        options: [
          { id: 'opt_1', text: 'That sounds great, Marcus! I\'d love a cup of coffee.', isCorrect: true },
          { id: 'opt_2', text: 'I am must coffee drink now.', isCorrect: false },
          { id: 'opt_3', text: 'You give me coffee immediate.', isCorrect: false },
        ],
        correctAnswer: 'That sounds great, Marcus! I\'d love a cup of coffee.',
        explanation: 'Polite, natural, and friendly.',
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
