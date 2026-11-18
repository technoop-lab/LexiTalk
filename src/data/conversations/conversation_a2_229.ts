import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_229: ConversationDefinition = {
  id: 'conv_a2_229',
  title: 'Hobbies, Leisure & Joining Local Activities',
  cefr: 'A2',
  unitId: 'unit_a2_16',
  lessonLinks: ['lesson_a2_16_229'],
  estimatedMinutes: 5,
  scenario:
    'You visit the local community sports center and meet Manoj, the coordinator for weekend recreational activities. You talk about your current pastimes, discuss new hobbies you want to take up, express your interests, and inquire about joining the local badminton or cycling club.',
  communicativeGoals: [
    'Discuss hobbies and leisure pursuits using verbs of preference followed by gerunds ("enjoy playing", "fancy taking up")',
    'Express interest in joining clubs and group sports using "interested in + -ing"',
    'Explain how leisure activities help maintain work-life balance and mental relaxation',
    'Ask for practical club details such as meeting times, equipment requirements, and membership fees',
  ],
  canDoStatements: [
    'Can talk about personal hobbies, leisure activities, and weekend pastimes',
    'Can express interest in joining a local hobby group or sports team',
    'Can use gerunds and infinitives correctly with preference verbs',
  ],
  characters: [
    {
      id: 'char_manoj_club_leader',
      name: 'Manoj',
      role: 'Recreation Club Coordinator',
      avatar: '🏸',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'take up',
        ipa: '/teɪk ʌp/',
        partOfSpeech: 'phrasal verb',
        meaning: 'To start doing a new hobby, pastime, or recreational activity',
        exampleSentence: 'I decided to take up swimming to stay active during the weekends.',
        translations: { hi: 'कोई नया शौक शुरू करना (टेक अप)' },
      },
      {
        word: 'pastime',
        ipa: '/ˈpɑːstaɪm/',
        partOfSpeech: 'noun',
        meaning: 'An activity that someone does regularly for enjoyment; a hobby',
        exampleSentence: 'Gardening and landscape sketching are two of my favorite pastimes.',
        translations: { hi: 'मनोरंजन / शौक (पास्टाइम)' },
      },
      {
        word: 'recreation',
        ipa: '/ˌrekriˈeɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'Activity done for enjoyment and relaxation when one is not working',
        exampleSentence: 'Our community center provides wonderful recreation facilities for all ages.',
        translations: { hi: 'मनोरंजन / फुर्सत की गतिविधि (रेक्रिएशन)' },
      },
      {
        word: 'enthusiastic',
        ipa: '/ɪnˌθjuːziˈæstɪk/',
        partOfSpeech: 'adjective',
        meaning: 'Having or showing intense and eager enjoyment, interest, or approval',
        exampleSentence: 'We have an enthusiastic group of cyclists who ride every Saturday morning.',
        translations: { hi: 'उत्साही (एंथूज़िएस्टिक)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am really interested in joining the weekend club.',
        functionCategory: 'Expressing interest in membership',
        exampleSentence: 'I am interested in taking up badminton this season.',
      },
      {
        phrase: 'I really enjoy playing outdoor sports in my free time.',
        functionCategory: 'Stating recreational preferences with gerunds',
        exampleSentence: 'I enjoy cycling through the riverside trails.',
      },
      {
        phrase: 'How often does the group meet?',
        functionCategory: 'Inquiring about club schedule',
        exampleSentence: 'How often do you hold practice sessions for beginners?',
      },
      {
        phrase: 'Do I need to bring my own equipment?',
        functionCategory: 'Asking about practical requirements',
        exampleSentence: 'Do I need to bring my own racquet, or are they provided?',
      },
    ],
    grammar: {
      title: 'Verbs of Preference with Gerunds & Infinitives',
      conceptExplanation:
        '1. Verbs followed by Gerunds (-ing): "enjoy", "fancy", "avoid", "spend time", "interested in" -> "I enjoy playing tennis", "I am interested in joining".\n2. Verbs followed by to-infinitive: "want", "decide", "hope", "plan" -> "I decided to take up cycling".\n3. Verbs taking either (with little change): "like", "love", "prefer" -> "I like playing / I like to play".',
      patternFormula: 'Subject + [enjoy / interested in] + [Gerund -ing] / Subject + [decide / want] + [to + Base Verb]',
      contrastExamples: [
        {
          incorrect: 'I enjoy to play badminton on weekends.',
          correct: 'I enjoy playing badminton on weekends.',
          explanation: '"Enjoy" is strictly followed by a gerund (-ing), never a to-infinitive.',
        },
        {
          incorrect: 'I am interested to join your cycling group.',
          correct: 'I am interested in joining your cycling group.',
          explanation: '"Interested in" requires the preposition "in" followed by a gerund (-ing).',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Manoj',
        text: 'Welcome to the sports center! Are you interested in joining any of our local leisure clubs?',
        translation: 'स्पोर्ट्स सेंटर में आपका स्वागत है! क्या आप हमारे किसी स्थानीय क्लब में शामिल होने में रुचि रखते हैं?',
      },
      {
        speaker: 'Learner',
        text: 'Hello Manoj! Yes, I want to take up a new pastime. I really enjoy playing badminton and cycling.',
        translation: 'नमस्ते मनोज! हाँ, मैं एक नया शौक शुरू करना चाहता हूँ। मुझे बैडमिंटन खेलना और साइकिल चलाना बहुत पसंद है।',
      },
      {
        speaker: 'Manoj',
        text: 'We have both! Our badminton group meets every Tuesday and Thursday evening.',
        translation: 'हमारे पास दोनों हैं! हमारा बैडमिंटन समूह हर मंगलवार और गुरुवार शाम को मिलता है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_229_1',
      type: 'fill_blank',
      prompt: 'Choose the correct form: "She really enjoys ______ (painting / to paint) in her free time."',
      options: [
        { id: 'opt_1', text: 'painting', isCorrect: true },
        { id: 'opt_2', text: 'to paint', isCorrect: false },
        { id: 'opt_3', text: 'paint', isCorrect: false },
      ],
      correctAnswer: 'painting',
      explanation: '"Enjoy" must be followed by a gerund (-ing form).',
    },
    {
      id: 'cp_229_2',
      type: 'multiple_choice',
      prompt: 'Which expression correctly shows interest in an activity?',
      options: [
        { id: 'opt_1', text: 'I am interested in taking up swimming.', isCorrect: true },
        { id: 'opt_2', text: 'I am interested to taking up swimming.', isCorrect: false },
        { id: 'opt_3', text: 'I am interest with take up swimming.', isCorrect: false },
      ],
      correctAnswer: 'I am interested in taking up swimming.',
      explanation: 'Use "interested in + gerund (-ing)".',
    },
    {
      id: 'cp_229_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [I decided to / take up cycling / to stay active / on weekends]',
      correctAnswer: 'I decided to take up cycling to stay active on weekends',
      explanation: 'Decided + to-infinitive + purpose clause.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_229_1',
      prompt: 'Construct a sentence expressing your interest in joining the badminton club to take up a new pastime.',
      scenarioContext: 'Inquiring about sports clubs with Manoj.',
      targetStructure: 'I am very interested in joining the badminton club to take up an active pastime.',
      wordBank: ['I am very interested', 'in joining the badminton club', 'to take up', 'an active pastime,', 'Manoj.'],
      acceptableSolutions: [
        'I am very interested in joining the badminton club to take up an active pastime.',
        'I am interested in joining the badminton club to take up a new hobby.',
      ],
      explanation: '"Interested in + gerund" structure.',
    },
    {
      id: 'sc_229_2',
      prompt: 'Construct a question asking if you need to bring your own racquet to the practice sessions.',
      scenarioContext: 'Asking about sports equipment.',
      targetStructure: 'Do I need to bring my own racquet to the practice sessions?',
      wordBank: ['Do I need to bring', 'my own racquet to', 'the practice sessions,', 'Manoj?'],
      acceptableSolutions: [
        'Do I need to bring my own racquet to the practice sessions?',
        'Do I need to bring equipment to the practice sessions?',
      ],
      explanation: 'Direct inquiry regarding equipment requirements.',
    },
  ],
  turns: [
    {
      id: 'turn_229_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello there! Welcome to the Community Recreation Hub. Are you looking to take up any new hobbies or join our sports groups this season?',
      partnerAudioText:
        'Hello there! Welcome to the Community Recreation Hub. Are you looking to take up any new hobbies or join our sports groups this season?',
      partnerQuestionHindi:
        'नमस्ते! सामुदायिक मनोरंजन केंद्र में आपका स्वागत है। क्या आप इस सीज़न में कोई नया शौक शुरू करना चाहते हैं या हमारे खेल समूहों में शामिल होना चाहते हैं?',
      expectedFunction: 'Greeting Manoj and expressing interest in taking up a sport using "interested in + -ing" or "enjoy + -ing"',
      contextGoal: 'Greet Manoj, state that you want to take up badminton or cycling, and mention that you enjoy staying active',
      targetVocabulary: ['Hello Manoj', 'interested in joining', 'take up', 'pastime', 'enjoy playing', 'badminton'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello Manoj! Yes, I am very interested in joining a sports club. I want to take up badminton because I really enjoy playing racket sports.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi Manoj! I’m looking for an active weekend pastime. I enjoy cycling and badminton, and I’d love to join a beginner-friendly group.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good morning, Manoj! I decided to take up badminton this season. Could you tell me about the available clubs?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_manoj',
          patterns: ['hello', 'hi', 'good morning', 'manoj'],
          required: true,
        },
        {
          name: 'interest_and_hobby',
          patterns: ['interested in', 'take up', 'enjoy', 'badminton', 'cycling', 'pastime', 'sports'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_229_1_enjoy_to_play',
          pattern: /enjoy to play/i,
          errorType: 'grammar',
          message: 'Use a gerund after "enjoy": "I enjoy playing badminton."',
          correctionPattern: 'I enjoy playing badminton in my free time.',
        },
      ],
      remediationPractice: {
        id: 'rem_229_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I enjoy ______ (playing) badminton."',
        options: [
          { id: 'r1', text: 'playing', isCorrect: true },
          { id: 'r2', text: 'to play', isCorrect: false },
        ],
        correctAnswer: 'playing',
        explanation: '"Enjoy" takes a gerund (-ing).',
      },
    },
    {
      id: 'turn_229_2',
      turnIndex: 2,
      partnerPrompt:
        'Our badminton club is one of our most popular pastimes! We have beginner training sessions on Tuesday evenings and social matches on Saturday mornings. Which time slot works best with your schedule?',
      partnerAudioText:
        'Our badminton club is one of our most popular pastimes! We have beginner training sessions on Tuesday evenings and social matches on Saturday mornings. Which time slot works best with your schedule?',
      partnerQuestionHindi:
        'हमारा बैडमिंटन क्लब हमारे सबसे लोकप्रिय खेलों में से एक है! हमारे पास मंगलवार की शाम को शुरुआती प्रशिक्षण सत्र और शनिवार की सुबह सामाजिक मैच होते हैं। आपके समय के साथ कौन सा स्लॉट सबसे अच्छा रहेगा?',
      expectedFunction: 'Choosing a session day/time and asking about equipment or coaching details',
      contextGoal: 'Select Tuesday evening or Saturday morning, and ask if racquets are provided or if you should bring your own',
      targetVocabulary: ['Tuesday evening', 'Saturday morning', 'bring my own racquet', 'equipment', 'session'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Tuesday evening sessions would be perfect for me. Do I need to bring my own racquet, or is equipment provided at the sports center?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Saturday morning social matches suit me best. Should I bring my own badminton gear, and how long does each match last?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I prefer the Tuesday beginner sessions. Are racquets available for members, or do we bring our own equipment?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'schedule_and_gear',
          patterns: ['tuesday', 'saturday', 'morning', 'evening', 'racquet', 'equipment', 'bring', 'session'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_229_2_preposition',
          pattern: /in tuesday evening/i,
          errorType: 'grammar',
          message: 'Use "on" with days of the week: "on Tuesday evening".',
          correctionPattern: 'Tuesday evening sessions would suit me well.',
        },
      ],
      remediationPractice: {
        id: 'rem_229_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly inquires about sports gear?',
        options: [
          { id: 'r1', text: 'Do I need to bring my own badminton racquet to the session?', isCorrect: true },
          { id: 'r2', text: 'Must I to bringing my own racket for play?', isCorrect: false },
        ],
        correctAnswer: 'Do I need to bring my own badminton racquet to the session?',
        explanation: '"Do I need to + base verb" is correct.',
      },
    },
    {
      id: 'turn_229_3',
      turnIndex: 3,
      partnerPrompt:
        'We provide spare racquets and shuttlecocks, so you just need comfortable sports shoes. Membership is only twenty dollars a month. Here is the registration slip if you’d like to join today!',
      partnerAudioText:
        'We provide spare racquets and shuttlecocks, so you just need comfortable sports shoes. Membership is only twenty dollars a month. Here is the registration slip if you’d like to join today!',
      partnerQuestionHindi:
        'हम अतिरिक्त रैकेट और शटलकॉक प्रदान करते हैं, इसलिए आपको केवल आरामदायक स्पोर्ट्स जूतों की आवश्यकता है। सदस्यता केवल बीस डॉलर प्रति माह है। यदि आप आज शामिल होना चाहते हैं तो यह पंजीकरण पर्ची है!',
      expectedFunction: 'Filling out the form, thanking Manoj, and expressing enthusiasm for the upcoming session',
      contextGoal: 'Thank Manoj, confirm registration, and say you look forward to starting on Tuesday',
      targetVocabulary: ['Thank you Manoj', 'fill out the form', 'registration', 'twenty dollars', 'look forward to Tuesday'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'That sounds very reasonable! Thank you so much, Manoj. I will fill out the registration slip right now and see you on Tuesday evening!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Thanks a lot, Manoj! Twenty dollars is great value. I look forward to taking up badminton and meeting the team next Tuesday.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Perfect! I’ll sign up today. Thank you for all the details, and I can’t wait for my first practice session.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'confirmation_and_gratitude',
          patterns: ['thank you', 'thanks', 'manoj', 'fill out', 'registration', 'see you', 'tuesday', 'look forward to'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_229_3_short_thanks',
          pattern: /^thanks bye$/i,
          errorType: 'interaction',
          message: 'Express full enthusiasm: "Thank you so much, Manoj! I look forward to starting on Tuesday."',
          correctionPattern: 'Thank you, Manoj! I look forward to Tuesday’s session.',
        },
      ],
      remediationPractice: {
        id: 'rem_229_3',
        type: 'fill_blank',
        prompt: 'Fill in: "I will fill ______ (out) the registration form."',
        options: [
          { id: 'r1', text: 'out', isCorrect: true },
          { id: 'r2', text: 'up to', isCorrect: false },
        ],
        correctAnswer: 'out',
        explanation: '"Fill out" is the standard phrasal verb for forms.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 70,
  },
};
