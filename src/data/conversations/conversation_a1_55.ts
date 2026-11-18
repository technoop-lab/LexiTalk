import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_55: ConversationDefinition = {
  id: 'conv_a1_55',
  title: 'Future Intentions, Plans & Predictions (going to / will)',
  cefr: 'A1',
  unitId: 'unit_a1_4',
  lessonLinks: ['lesson_a1_4_55'],
  estimatedMinutes: 5,
  scenario:
    'You are planning an outdoor weekend picnic in the botanical gardens with your friend Leo. The weather forecast shows a chance of clouds, so you discuss planned activities ("We are going to bring a picnic blanket"), make spontaneous decisions ("I will bring umbrellas just in case"), and make weather predictions ("I think it will stay dry").',
  communicativeGoals: [
    'Contrast planned intentions using "be going to + verb" with spontaneous decisions using "will + verb"',
    'Make simple predictions about the weather and future events using "I think it will..."',
    'Offer help or volunteer to bring supplies using "I\'ll bring...", "I\'ll call..."',
    'Recycle food, weather, time, and leisure vocabulary from earlier A1 units',
  ],
  canDoStatements: [
    'Can talk about planned weekend activities using "be going to" (CEFR A1.2)',
    'Can make instant decisions and offers using "will / I\'ll"',
    'Can express simple predictions about the weather or upcoming events',
  ],
  characters: [
    {
      id: 'char_leo_friend',
      name: 'Leo',
      role: 'Outdoor Activity Organizer',
      avatar: '🚀',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'prediction',
        ipa: '/prɪˈdɪkʃən/',
        partOfSpeech: 'noun',
        meaning: 'A thing predicted; a forecast or statement about what will happen',
        exampleSentence: 'My prediction is that it will be warm and sunny on Saturday.',
        translations: { hi: 'भविष्यवाणी / पूर्वानुमान' },
      },
      {
        word: 'spontaneous',
        ipa: '/spɒnˈteɪniəs/',
        partOfSpeech: 'adjective',
        meaning: 'Performed or occurring as a result of a sudden impulse without premeditation',
        exampleSentence: 'I will buy the lemonade right now—that was a spontaneous decision!',
        translations: { hi: 'त्वरित / स्वाभाविक' },
      },
      {
        word: 'forecast',
        ipa: '/ˈfɔːrkɑːst/',
        partOfSpeech: 'noun',
        meaning: 'A calculation or estimate of future events, especially coming weather',
        exampleSentence: 'The weekend weather forecast looks mostly clear.',
        translations: { hi: 'पूर्वानुमान / मौसम रिपोर्ट' },
      },
      {
        word: 'umbrella',
        ipa: '/ʌmˈbrɛlə/',
        partOfSpeech: 'noun',
        meaning: 'A circular canopy of cloth on a folding metal frame supported by a central rod, used as protection against rain',
        exampleSentence: 'I will pack an umbrella just in case it rains.',
        translations: { hi: 'छाता' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'We are going to meet at...',
        functionCategory: 'Pre-planned Arrangement',
        exampleSentence: 'We are going to meet at the park entrance at 11:00 AM.',
      },
      {
        phrase: 'I think it will stay sunny.',
        functionCategory: 'Prediction',
        exampleSentence: 'I checked the forecast, and I think it will stay sunny all afternoon.',
      },
      {
        phrase: 'I’ll bring the snacks and drinks!',
        functionCategory: 'Spontaneous Decision / Offer',
        exampleSentence: 'Don’t worry about sandwiches—I’ll make them and bring fruit juice.',
      },
      {
        phrase: 'What are you going to do if...?',
        functionCategory: 'Conditional Inquiry',
        exampleSentence: 'What are you going to do if it starts raining?',
      },
    ],
    grammar: {
      title: 'Differentiating "be going to" (Prior Plan) vs "will" (Instant Decision / Prediction)',
      conceptExplanation:
        'Use "be going to" (am/is/are going to + verb) when you decided something BEFORE the conversation. Use "will / \'ll" (will + verb) when you decide AT THE MOMENT of speaking, or when offering immediate help, or predicting the future ("I think it will rain").',
      patternFormula: 'Planned: Subject + am/is/are + going to + [Base Verb] | Spontaneous: Subject + will (\'ll) + [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'The phone is ringing. I am going to answer it.',
          correct: 'The phone is ringing. I will answer it!',
          explanation: 'Use "will" for instant decisions made at the moment of speaking.',
        },
        {
          incorrect: 'Next week I will fly to Paris. (Tickets already bought last month)',
          correct: 'Next week I am going to fly to Paris.',
          explanation: 'Use "be going to" for intentions planned in advance.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Leo',
        text: 'Hey! Are we still on for our picnic at the botanical gardens this Saturday?',
        translation: 'अरे! क्या हम इस शनिवार को बॉटनिकल गार्डन में अपने पिकनिक के लिए तैयार हैं?',
      },
      {
        speaker: 'You',
        text: 'Yes, definitely! We are going to meet at 11:00 AM near the fountain. I think it will be a lovely warm day.',
        translation: 'हाँ, बिल्कुल! हम फव्वारे के पास सुबह 11:00 बजे मिलने जा रहे हैं। मुझे लगता है कि यह एक प्यारा धूपदार दिन होगा।',
      },
      {
        speaker: 'Leo',
        text: 'The weather app says there is a small 10% chance of rain at 3 PM.',
        translation: 'मौसम ऐप का कहना है कि दोपहर 3 बजे बारिश की 10% संभावना है।',
      },
      {
        speaker: 'You',
        text: 'Don’t worry! I’ll bring two umbrellas and a waterproof blanket just in case.',
        translation: 'चिंता मत करो! मैं सावधानी के तौर पर दो छाते और एक वाटरप्रूफ कंबल ले आऊँगा।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_55_1',
      type: 'fill_blank',
      prompt: 'Complete the spontaneous offer: "The bag looks heavy. I ___ carry it for you!"',
      options: [
        { id: 'opt_1', text: 'will', isCorrect: true },
        { id: 'opt_2', text: 'going to', isCorrect: false },
        { id: 'opt_3', text: 'am', isCorrect: false },
      ],
      correctAnswer: 'will',
      explanation: 'Use "will" for spontaneous offers made at the moment of speaking.',
    },
    {
      id: 'cp_a1_55_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses a pre-planned intention?',
      options: [
        { id: 'opt_1', text: 'We are going to visit the botanical garden on Saturday.', isCorrect: true },
        { id: 'opt_2', text: 'We will to visit the botanical garden on Saturday.', isCorrect: false },
        { id: 'opt_3', text: 'We going visit botanical garden on Saturday.', isCorrect: false },
      ],
      correctAnswer: 'We are going to visit the botanical garden on Saturday.',
      explanation: '"are going to visit" is the correct planned future construction.',
    },
    {
      id: 'cp_a1_55_3',
      type: 'multiple_choice',
      prompt: 'How do you make a simple weather prediction?',
      options: [
        { id: 'opt_1', text: 'I think it will be sunny this afternoon.', isCorrect: true },
        { id: 'opt_2', text: 'I thinking it is will sunny.', isCorrect: false },
        { id: 'opt_3', text: 'It will being sunny yesterday.', isCorrect: false },
      ],
      correctAnswer: 'I think it will be sunny this afternoon.',
      explanation: '"I think it will + base verb (be)" is the standard prediction pattern.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_55_1',
      scenarioContext: 'Make a spontaneous decision to bring food.',
      prompt: 'Build: "I will bring fresh sandwiches and lemonade."',
      targetStructure: 'Subject + will + base verb + compound object',
      wordBank: ['I', 'will', 'bring', 'fresh', 'sandwiches', 'and', 'lemonade', 'bringing', 'am', 'to'],
      acceptableSolutions: [
        'I will bring fresh sandwiches and lemonade',
        'I will bring fresh sandwiches and lemonade.',
      ],
      explanation: 'Instant offer/decision with "will + bring".',
    },
    {
      id: 'sc_a1_55_2',
      scenarioContext: 'State a pre-planned meeting time with your group.',
      prompt: 'Build: "We are going to meet at eleven o\'clock."',
      targetStructure: 'Subject + are going to + base verb + prepositional phrase',
      wordBank: ['We', 'are', 'going', 'to', 'meet', 'at', 'eleven', "o'clock", 'meeting', 'will', 'in'],
      acceptableSolutions: [
        "We are going to meet at eleven o'clock",
        "We are going to meet at eleven o'clock.",
      ],
      explanation: 'Pre-planned intention using "be going to".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_55_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! Are we still planning our outdoor picnic at the botanical gardens this Saturday? What time are we going to meet?',
      partnerAudioText:
        'Hey! Are we still planning our outdoor picnic at the botanical gardens this Saturday? What time are we going to meet?',
      partnerQuestionHindi:
        'अरे! क्या हम अभी भी इस शनिवार को बॉटनिकल गार्डन में अपने आउटडोर पिकनिक की योजना बना रहे हैं? हम किस समय मिलने जा रहे हैं?',
      expectedFunction: 'Confirm Planned Picnic & State Meeting Time (going to meet at...)',
      contextGoal:
        'Confirm the picnic and state that we are going to meet at 11:00 AM at the main garden gate.',
      targetVocabulary: ['are going to meet', 'at eleven o\'clock', 'main gate', 'botanical gardens', 'picnic'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes, absolutely! We are going to meet at eleven o\'clock at the main garden gate. I have already prepared the picnic blanket!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Yes! We are going to meet at 11:00 AM at the main gate.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Yes, we’re going to meet at 11 AM at the main entrance!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Picnic Confirmation & Time',
          patterns: [
            'going to meet',
            'eleven',
            '11',
            'main gate',
            'entrance',
            'botanical gardens',
            'picnic',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'meet_time_error',
          pattern: /\bwe going meet eleven\b/i,
          errorType: 'grammar',
          message: 'Say "We are going to meet at 11:00", with "are going to".',
          correctionPattern: 'We are going to meet at 11:00',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_55_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "We ___ going to meet at noon."',
        options: [
          { id: 'opt_1', text: 'are', isCorrect: true },
          { id: 'opt_2', text: 'is', isCorrect: false },
          { id: 'opt_3', text: 'am', isCorrect: false },
        ],
        correctAnswer: 'are',
        explanation: 'Subject pronoun "We" agrees with "are".',
      },
    },
    {
      id: 'turn_a1_55_2',
      turnIndex: 2,
      partnerPrompt:
        'Great! I just looked at the weather forecast on my phone. It says there is a chance of dark clouds in the afternoon. What do you think the weather will be like?',
      partnerAudioText:
        'Great! I just looked at the weather forecast on my phone. It says there is a chance of dark clouds in the afternoon. What do you think the weather will be like?',
      partnerQuestionHindi:
        'बहुत बढ़िया! मैंने अभी अपने फोन पर मौसम का पूर्वानुमान देखा। यह कहता है कि दोपहर में काले बादलों की संभावना है। आपको क्या लगता है कि मौसम कैसा रहेगा?',
      expectedFunction: 'Make Weather Prediction (I think it will be... / It won\'t rain)',
      contextGoal:
        'State your weather prediction (e.g., I think it will stay dry and warm, or it won\'t rain heavily).',
      targetVocabulary: ['i think it will', 'stay dry', 'warm and sunny', 'weather prediction', 'won\'t rain'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I think it will stay dry and warm throughout the afternoon! Even if it clouds over, it won\'t rain heavily.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I think it will be warm and sunny. It probably won’t rain.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I think it will stay dry and pleasant!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Weather Prediction',
          patterns: [
            'think it will',
            'will be warm',
            'will be sunny',
            'stay dry',
            'won\'t rain',
            'pleasant',
            'forecast',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_55_2',
        type: 'multiple_choice',
        prompt: 'Which sentence makes a correct prediction?',
        options: [
          { id: 'opt_1', text: 'I think it will stay sunny all day.', isCorrect: true },
          { id: 'opt_2', text: 'I think it is will stay sunny all day.', isCorrect: false },
          { id: 'opt_3', text: 'I think it will staying sunny.', isCorrect: false },
        ],
        correctAnswer: 'I think it will stay sunny all day.',
        explanation: 'Modal "will" is followed by base verb "stay".',
      },
    },
    {
      id: 'turn_a1_55_3',
      turnIndex: 3,
      partnerPrompt:
        'I hope so too! But just in case it rains, what should we bring? And who is bringing the food and drinks?',
      partnerAudioText:
        'I hope so too! But just in case it rains, what should we bring? And who is bringing the food and drinks?',
      partnerQuestionHindi:
        'मुझे भी यही उम्मीद है! लेकिन अगर बारिश होती है, तो हमें क्या लाना चाहिए? और खाना-पीना कौन ला रहा है?',
      expectedFunction: 'Make Spontaneous Decision / Offer (I will bring umbrellas / I\'ll make sandwiches)',
      contextGoal:
        'Spontaneously offer to bring umbrellas, sandwiches, and fresh fruit juice.',
      targetVocabulary: ['i will bring', 'i\'ll make sandwiches', 'umbrellas', 'fruit juice', 'don\'t worry'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Don’t worry! I will bring two large umbrellas and a waterproof mat, and I’ll make fresh sandwiches and bring cold fruit juice for everyone.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I will bring umbrellas just in case, and I’ll prepare some sandwiches and drinks.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I’ll bring umbrellas, sandwiches, and fruit juice!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Spontaneous Offers',
          patterns: [
            'will bring',
            'i\'ll bring',
            'i\'ll make',
            'umbrellas',
            'sandwiches',
            'drinks',
            'juice',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_55_3',
        type: 'fill_blank',
        prompt: 'Fill in the spontaneous decision: "Don\'t cook lunch, I ___ buy pizza!"',
        options: [
          { id: 'opt_1', text: 'will', isCorrect: true },
          { id: 'opt_2', text: 'am to', isCorrect: false },
          { id: 'opt_3', text: 'going', isCorrect: false },
        ],
        correctAnswer: 'will',
        explanation: 'Instant decision takes "will".',
      },
    },
    {
      id: 'turn_a1_55_4',
      turnIndex: 4,
      partnerPrompt:
        'Awesome! I will bring fresh strawberries, chocolate cookies, and a Frisbee game. I am really looking forward to Saturday! See you at 11:00 AM!',
      partnerAudioText:
        'Awesome! I will bring fresh strawberries, chocolate cookies, and a Frisbee game. I am really looking forward to Saturday! See you at 11:00 AM!',
      partnerQuestionHindi:
        'बहुत बढ़िया! मैं ताजी स्ट्रॉबेरी, चॉकलेट कुकीज़ और एक फ्रिसबी गेम लाऊंगा। मैं वास्तव में शनिवार का इंतजार कर रहा हूँ! सुबह 11:00 बजे मिलते हैं!',
      expectedFunction: 'Enthusiastic Farewell & Plan Confirmation',
      contextGoal:
        'Confirm you are excited too, agree on the plan, and say goodbye until Saturday.',
      targetVocabulary: ['sounds wonderful', 'looking forward to it', 'see you on Saturday', 'eleven o\'clock', 'goodbye Leo'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'That sounds wonderful Leo! I am really looking forward to our picnic. See you at eleven o\'clock on Saturday! Goodbye!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Sounds great Leo! Looking forward to it. See you Saturday at 11!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Can’t wait! See you Saturday at 11 AM, Leo!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Saturday Confirmation',
          patterns: [
            'sounds wonderful',
            'sounds great',
            'looking forward',
            'see you on saturday',
            'see you saturday',
            '11',
            'eleven',
            'goodbye',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_55_4',
        type: 'multiple_choice',
        prompt: 'Which sentence confirms weekend plans enthusiastically?',
        options: [
          { id: 'opt_1', text: 'Sounds wonderful! See you on Saturday at eleven.', isCorrect: true },
          { id: 'opt_2', text: 'I am must meet you later yesterday.', isCorrect: false },
          { id: 'opt_3', text: 'No talk until tomorrow night.', isCorrect: false },
        ],
        correctAnswer: 'Sounds wonderful! See you on Saturday at eleven.',
        explanation: 'Enthusiastic and polite confirmation.',
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
