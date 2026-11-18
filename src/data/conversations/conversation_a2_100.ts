import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_100: ConversationDefinition = {
  id: 'conv_a2_100',
  title: 'Future Plans, Intentions & Arrangements (going to, present continuous, will)',
  cefr: 'A2',
  unitId: 'unit_a2_7',
  lessonLinks: ['lesson_a2_7_100'],
  estimatedMinutes: 5,
  scenario:
    'You are taking an afternoon coffee break in the office kitchen with your colleague Lucas Weber. Lucas is coordinating team schedules and holiday plans. Discuss your confirmed weekend schedule (Present Continuous), your upcoming summer intentions (be going to), and make spontaneous lunch decisions (will). Ask Lucas about his upcoming vacation.',
  communicativeGoals: [
    'Express fixed arrangements using the Present Continuous (I am meeting friends on Saturday, I am flying on Monday)',
    'Describe personal intentions and goals using "be going to" (I am going to learn Spanish, we are going to hike)',
    'Make spontaneous decisions and helpful offers using "will" (I will grab the menus, I will send you the link)',
    'Inquire about someone else’s future holiday plans and travel schedule',
  ],
  canDoStatements: [
    'Can talk about plans, intentions, and arrangements for the future using appropriate future forms (CEFR A2)',
    'Can differentiate between fixed appointments (present continuous), intentions (going to), and instant offers (will)',
    'Can participate in spontaneous workplace conversations regarding weekend schedules',
  ],
  characters: [
    {
      id: 'char_lucas_weber',
      name: 'Lucas Weber',
      role: 'Colleague & Travel Enthusiast',
      avatar: '✈️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'arrangement',
        ipa: '/əˈreɪndʒmənt/',
        partOfSpeech: 'noun',
        meaning: 'A plan or preparation for a future event (with confirmed time/person)',
        exampleSentence: 'I have a dinner arrangement with Sarah on Friday at 8 PM.',
        translations: { hi: 'तय कार्यक्रम / व्यवस्था' },
      },
      {
        word: 'intention',
        ipa: '/ɪnˈtɛnʃən/',
        partOfSpeech: 'noun',
        meaning: 'A thing intended; an aim or plan',
        exampleSentence: 'My intention is to visit the Amalfi Coast this summer.',
        translations: { hi: 'इरादा / योजना' },
      },
      {
        word: 'spontaneous',
        ipa: '/spɒnˈteɪniəs/',
        partOfSpeech: 'adjective',
        meaning: 'Performed or occurring as a result of a sudden impulse without premeditation',
        exampleSentence: 'Let us make a spontaneous decision and try the new sushi place!',
        translations: { hi: 'तुरंत / अनायास' },
      },
      {
        word: 'destination',
        ipa: '/ˌdɛstɪˈneɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'The place to which someone or something is going or being sent',
        exampleSentence: 'What is your dream vacation destination for next year?',
        translations: { hi: 'गंतव्य स्थान' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'This Saturday, I am meeting...',
        functionCategory: 'Fixed Future Arrangement (Present Continuous)',
        exampleSentence: 'This Saturday, I am meeting my college friends for brunch.',
      },
      {
        phrase: 'Next month, I am going to...',
        functionCategory: 'Future Intention (going to)',
        exampleSentence: 'Next month, I am going to sign up for scuba diving lessons.',
      },
      {
        phrase: 'I’ll take care of that right away!',
        functionCategory: 'Instant Decision / Offer (will)',
        exampleSentence: 'I’ll book our lunch table right away!',
      },
      {
        phrase: 'Do you have any plans for the holidays?',
        functionCategory: 'Interactive Inquiring',
        exampleSentence: 'Lucas, do you have any exciting plans for the summer holidays?',
      },
    ],
    grammar: {
      title: 'Future Forms: Present Continuous vs. "Going to" vs. "Will"',
      conceptExplanation:
        '1. Present Continuous (am/is/are + verb-ing) = Fixed arrangement with specific time/place/person already booked (e.g., "I am flying to Rome on Friday at 10 AM").\n2. Be going to (am/is/are going to + verb) = Prior intention or planned goal (e.g., "I am going to save money for a new laptop").\n3. Will + base verb = Instant decision, promise, or spontaneous offer made at the moment of speaking (e.g., "The phone is ringing; I will answer it").',
      patternFormula: 'Arrangement: be + [verb-ing] | Intention: be going to + [verb] | Instant: will + [verb]',
      contrastExamples: [
        {
          incorrect: 'I am going to fly to Rome tomorrow at 9:00 AM (already have ticket).',
          correct: 'I am flying to Rome tomorrow at 9:00 AM. / I am going to fly to Rome.',
          explanation: 'Present continuous is preferred for fixed scheduled appointments with tickets/dates.',
        },
        {
          incorrect: 'Wait, I am going to open the door for you.',
          correct: 'Wait, I will open the door for you.',
          explanation: 'Use "will" for spontaneous offers made on the spot.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Lucas Weber',
        text: 'Hey Alex! Have you made any concrete plans for this weekend yet?',
        translation: 'अरे एलेक्स! क्या आपने इस सप्ताहांत के लिए अभी तक कोई ठोस योजना बनाई है?',
      },
      {
        speaker: 'You',
        text: 'Hey Lucas! On Saturday morning, I am playing tennis with Maya at 10 AM, and in the evening we are having dinner in town. What about you?',
        translation: 'अरे लुकास! शनिवार की सुबह, मैं सुबह 10 बजे माया के साथ टेनिस खेल रहा हूँ, और शाम को हम शहर में डिनर कर रहे हैं। आप क्या कर रहे हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_100_1',
      type: 'fill_blank',
      prompt: 'Which future form is best for an instant offer: "Someone is at the door. I ___ (open) it."',
      options: [
        { id: 'opt_1', text: 'will open', isCorrect: true },
        { id: 'opt_2', text: 'am opening', isCorrect: false },
        { id: 'opt_3', text: 'am going to open', isCorrect: false },
      ],
      correctAnswer: 'will open',
      explanation: 'Spontaneous decision at the moment of speaking takes "will + base verb".',
    },
    {
      id: 'cp_a2_100_2',
      type: 'multiple_choice',
      prompt: 'Which sentence expresses a confirmed calendar arrangement?',
      options: [
        { id: 'opt_1', text: 'I am seeing the dentist on Thursday at 3:00 PM.', isCorrect: true },
        { id: 'opt_2', text: 'I will see dentist maybe.', isCorrect: false },
        { id: 'opt_3', text: 'I see dentist yesterday.', isCorrect: false },
      ],
      correctAnswer: 'I am seeing the dentist on Thursday at 3:00 PM.',
      explanation: 'Present Continuous is standard for fixed personal calendar arrangements.',
    },
    {
      id: 'cp_a2_100_3',
      type: 'multiple_choice',
      prompt: 'Which sentence expresses a general intention for next summer?',
      options: [
        { id: 'opt_1', text: 'We are going to travel around Norway this August.', isCorrect: true },
        { id: 'opt_2', text: 'We will going to travel Norway.', isCorrect: false },
        { id: 'opt_3', text: 'We are travel Norway.', isCorrect: false },
      ],
      correctAnswer: 'We are going to travel around Norway this August.',
      explanation: '"Be going to + base verb" expresses future intentions.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_100_1',
      scenarioContext: 'Describe your confirmed Saturday evening arrangement.',
      prompt: 'Build: "I am having dinner with friends on Saturday."',
      targetStructure: 'Subject + be + verb-ing + prepositional phrase + time phrase',
      wordBank: ['I', 'am', 'having', 'dinner', 'with', 'friends', 'on', 'Saturday', 'will', 'have'],
      acceptableSolutions: [
        'I am having dinner with friends on Saturday',
        'I am having dinner with friends on Saturday.',
      ],
      explanation: 'Present Continuous for fixed personal arrangement.',
    },
    {
      id: 'sc_a2_100_2',
      scenarioContext: 'Make a spontaneous decision to help your teammate.',
      prompt: 'Build: "I will email the presentation to everyone now."',
      targetStructure: 'Subject + will + base verb + object + to + recipient + time adverb',
      wordBank: ['I', 'will', 'email', 'the', 'presentation', 'to', 'everyone', 'now', 'am', 'going'],
      acceptableSolutions: [
        'I will email the presentation to everyone now',
        'I will email the presentation to everyone now.',
      ],
      explanation: 'Uses "will" for instant decision/action.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_100_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey Alex! Friday is almost here. Do you have any confirmed plans or social arrangements lined up for this coming weekend?',
      partnerAudioText:
        'Hey Alex! Friday is almost here. Do you have any confirmed plans or social arrangements lined up for this coming weekend?',
      partnerQuestionHindi:
        'अरे एलेक्स! शुक्रवार लगभग आ गया है। क्या आपके पास आने वाले इस सप्ताहांत के लिए कोई पुख्ता योजना या सामाजिक कार्यक्रम हैं?',
      expectedFunction: 'Describe Fixed Weekend Arrangements using Present Continuous',
      contextGoal:
        'Share your confirmed weekend: on Saturday at 10 AM you are playing tennis with Maya, and in the evening you are attending a friend\'s birthday dinner; ask Lucas about his plans.',
      targetVocabulary: ['on Saturday morning I am playing tennis', 'in the evening I am attending a birthday dinner', 'what are you doing this weekend', 'any fun plans'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'Hey Lucas! On Saturday morning, I am playing tennis with Maya at 10:00 AM. Then in the evening, I am attending my best friend’s birthday dinner at an Italian restaurant. What are you doing this weekend?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Confirmed Arrangement (Present Continuous)',
          patterns: ['am playing', 'am meeting', 'am having', 'am going', 'am attending', 'am seeing', 'saturday', 'tennis', 'dinner'],
          required: true,
        },
        {
          name: 'Follow-up Question',
          patterns: ['what are you', 'what about you', 'how about you', 'any plans', 'lucas', 'and you'],
          required: false,
        },
      ],
      commonMistakeRules: [
        {
          id: 'will_fixed_arrangement_error',
          pattern: /\bi will play tennis at 10 on saturday with maya\b/i,
          errorType: 'grammar',
          message: 'For fixed appointments with a set time, use Present Continuous: "I am playing tennis on Saturday at 10".',
          correctionPattern: 'I am playing tennis',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_100_1',
        type: 'multiple_choice',
        prompt: 'Which sentence best expresses a pre-arranged schedule with a friend?',
        options: [
          { id: 'opt_1', text: 'I am meeting Sarah for lunch on Sunday at 1:00 PM.', isCorrect: true },
          { id: 'opt_2', text: 'I will meet Sarah maybe sometime.', isCorrect: false },
          { id: 'opt_3', text: 'I meet Sarah lunch Sunday.', isCorrect: false },
        ],
        correctAnswer: 'I am meeting Sarah for lunch on Sunday at 1:00 PM.',
        explanation: 'Present Continuous is standard for fixed personal arrangements.',
      },
    },
    {
      id: 'turn_a2_100_2',
      turnIndex: 2,
      partnerPrompt:
        'I am visiting my parents in Potsdam on Sunday! Looking further ahead: Do you have any big intentions or travel plans for the summer vacation?',
      partnerAudioText:
        'I am visiting my parents in Potsdam on Sunday! Looking further ahead: Do you have any big intentions or travel plans for the summer vacation?',
      partnerQuestionHindi:
        'मैं रविवार को पॉट्सडैम में अपने माता-पिता से मिलने जा रहा हूँ! आगे देखते हुए: क्या आपके पास गर्मियों की छुट्टियों के लिए कोई बड़ा इरादा या यात्रा योजनाएं हैं?',
      expectedFunction: 'Describe Future Intentions using "be going to"',
      contextGoal:
        'Explain your summer intentions: you are going to take two weeks off in August to backpack across Portugal, and you are going to learn surfing.',
      targetVocabulary: ['I am going to take two weeks off in August', 'we are going to travel along the coast of Portugal', 'I am going to take surfing lessons', 'what about your holiday'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'In August, I am going to take two weeks off work. My partner and I are going to travel along the coast of Portugal, and I am going to take surfing lessons! What destination are you going to visit, Lucas?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Future Intention (be going to)',
          patterns: ['going to take', 'going to travel', 'going to visit', 'going to learn', 'going to go', 'august', 'summer', 'portugal'],
          required: true,
        },
        {
          name: 'Follow-up on Lucas’s Vacation',
          patterns: ['where are you', 'what are you going to', 'what about your', 'lucas', 'destination'],
          required: false,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_100_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We ___ (go) to spend a week in the mountains."',
        options: [
          { id: 'opt_1', text: 'are going', isCorrect: true },
          { id: 'opt_2', text: 'will going', isCorrect: false },
          { id: 'opt_3', text: 'are go', isCorrect: false },
        ],
        correctAnswer: 'are going',
        explanation: '"Be going to + verb" formula: "We are going to spend...".',
      },
    },
    {
      id: 'turn_a2_100_3',
      turnIndex: 3,
      partnerPrompt:
        'Surfing in Portugal sounds unbelievable! I am going to hike the Dolomites in Italy with my brother in July. By the way, are you free for lunch right now? Our team was thinking about grabbing noodles, but someone needs to reserve a table.',
      partnerAudioText:
        'Surfing in Portugal sounds unbelievable! I am going to hike the Dolomites in Italy with my brother in July. By the way, are you free for lunch right now? Our team was thinking about grabbing noodles, but someone needs to reserve a table.',
      partnerQuestionHindi:
        'पुर्तगाल में सर्फिंग करना अविश्वसनीय लगता है! मैं जुलाई में अपने भाई के साथ इटली में डोलोमाइट्स में हाइक करने जा रहा हूँ। वैसे, क्या आप अभी दोपहर के भोजन के लिए स्वतंत्र हैं? हमारी टीम नूडल्स खाने के बारे में सोच रही थी, लेकिन किसी को टेबल आरक्षित करने की आवश्यकता है।',
      expectedFunction: 'Make Spontaneous Decision / Offer using "will"',
      contextGoal:
        'React enthusiastically to the Dolomites; make a spontaneous offer: "I will call the noodle bar and book a table for four right now!"',
      targetVocabulary: ['the Dolomites will be magnificent', 'I will call the restaurant right now', 'I’ll reserve a table for four', 'let’s go together'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'The Dolomites will be absolutely stunning! And yes, I’d love to join for lunch. Don’t worry, I will call the noodle bar right now and reserve a table for four people. Let’s head out in ten minutes!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Reaction to Dolomites',
          patterns: ['dolomites', 'stunning', 'amazing', 'great', 'italy', 'wonderful'],
          required: true,
        },
        {
          name: 'Spontaneous Offer / Decision (will / I\'ll)',
          patterns: ['will call', 'i\'ll call', 'will reserve', 'i\'ll reserve', 'will book', 'i\'ll book', 'table', 'noodle', 'lunch'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_100_3',
        type: 'multiple_choice',
        prompt: 'Which response correctly uses "will" for an instant helpful decision?',
        options: [
          { id: 'opt_1', text: 'I will call the restaurant and book the table right now.', isCorrect: true },
          { id: 'opt_2', text: 'I am call the restaurant right now.', isCorrect: false },
          { id: 'opt_3', text: 'I going to call now maybe.', isCorrect: false },
        ],
        correctAnswer: 'I will call the restaurant and book the table right now.',
        explanation: 'Instant decision in the moment: "I will call...".',
      },
    },
    {
      id: 'turn_a2_100_4',
      turnIndex: 4,
      partnerPrompt:
        'You are a legend, Alex! Thank you for booking the table. I will message Sophia and Marco so they can get their coats ready. See you in the lobby in five minutes!',
      partnerAudioText:
        'You are a legend, Alex! Thank you for booking the table. I will message Sophia and Marco so they can get their coats ready. See you in the lobby in five minutes!',
      partnerQuestionHindi:
        'आप बहुत मददगार हैं, एलेक्स! टेबल बुक करने के लिए धन्यवाद। मैं सोफिया और मार्को को मैसेज कर दूँगा ताकि वे अपने कोट तैयार कर सकें। पांच मिनट में लॉबी में मिलते हैं!',
      expectedFunction: 'Confirm Lunch Arrangement & Close Conversation',
      contextGoal:
        'Confirm that the reservation is made, say you will grab your jacket, and meet in the lobby in five minutes.',
      targetVocabulary: ['table is reserved for 12:30', 'I will grab my jacket', 'see you in the lobby', 'looking forward to lunch'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'The table is confirmed for 12:30! I will grab my jacket and meet everyone down in the lobby right away. See you in five minutes Lucas!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Confirmation & Departure',
          patterns: ['confirmed', 'reserved', 'jacket', 'lobby', 'see you', 'five minutes', 'lucas', 'meet'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_100_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "See you ___ the lobby in five minutes!"',
        options: [
          { id: 'opt_1', text: 'in', isCorrect: true },
          { id: 'opt_2', text: 'on', isCorrect: false },
          { id: 'opt_3', text: 'at over', isCorrect: false },
        ],
        correctAnswer: 'in',
        explanation: 'Standard preposition of place: "in the lobby".',
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
