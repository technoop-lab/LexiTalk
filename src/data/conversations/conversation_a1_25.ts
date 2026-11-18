import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_25: ConversationDefinition = {
  id: 'conv_a1_25',
  title: 'Sharing Weekend Hobbies & Free Time Activities',
  cefr: 'A1',
  unitId: 'unit_a1_2',
  lessonLinks: ['lesson_a1_2_25'],
  estimatedMinutes: 5,
  scenario:
    'You are chatting with a classmate, Lucas, during a break at the community center. He asks about what you enjoy doing in your spare time.',
  communicativeGoals: [
    'Express likes, loves, and dislikes using gerund patterns ("I like reading", "I love cooking", "I don\'t like jogging")',
    'Talk about favorite weekend hobbies and leisure activities (swimming, painting, listening to music, gardening)',
    'Ask reciprocal questions about your friend\'s hobbies and weekend interests',
  ],
  canDoStatements: [
    'Can express personal preferences and hobbies using "like / love / hate + -ing" (CEFR A1)',
    'Can ask "What do you like doing in your free time?"',
    'Can compare leisure activities with a conversation partner',
  ],
  characters: [
    {
      id: 'char_lucas',
      name: 'Lucas',
      role: 'Classmate & Hobby Enthusiast',
      avatar: '🎸',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'hobby',
        ipa: '/ˈhɒbi/',
        partOfSpeech: 'noun',
        meaning: 'An activity done regularly in one\'s leisure time for pleasure',
        exampleSentence: 'My favorite hobby is photography.',
        translations: { hi: 'शौक' },
      },
      {
        word: 'cooking',
        ipa: '/ˈkʊkɪŋ/',
        partOfSpeech: 'noun / gerund',
        meaning: 'The practice or skill of preparing food',
        exampleSentence: 'I really love cooking spicy dishes on Sundays.',
        translations: { hi: 'खाना बनाना' },
      },
      {
        word: 'reading',
        ipa: '/ˈriːdɪŋ/',
        partOfSpeech: 'noun / gerund',
        meaning: 'The action or skill of reading books or articles',
        exampleSentence: 'She enjoys reading historical novels.',
        translations: { hi: 'पढ़ना' },
      },
      {
        word: 'guitar',
        ipa: '/ɡɪˈtɑːr/',
        partOfSpeech: 'noun',
        meaning: 'A stringed musical instrument played with fingers or a plectrum',
        exampleSentence: 'I like playing the guitar in the evenings.',
        translations: { hi: 'गिटार' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I like / love + -ing...',
        functionCategory: 'Expressing Preference',
        exampleSentence: 'I love swimming in the morning.',
      },
      {
        phrase: 'I don\'t really like...',
        functionCategory: 'Expressing Dislike',
        exampleSentence: 'I don\'t really like waking up early on weekends.',
      },
      {
        phrase: 'What do you like doing in your free time?',
        functionCategory: 'Hobby Inquiry',
        exampleSentence: 'What do you like doing when you have free time?',
      },
      {
        phrase: 'How often do you...?',
        functionCategory: 'Frequency Inquiry',
        exampleSentence: 'How often do you practice playing the guitar?',
      },
    ],
    grammar: {
      title: 'Verbs of Preference + Gerund (like / love / enjoy / hate + -ing)',
      conceptExplanation:
        'When expressing hobbies and feelings towards activities, verbs like "like", "love", "enjoy", and "hate" are followed by the gerund (-ing form): e.g. "I love cooking", "I hate waiting in lines".',
      patternFormula: 'Subject + like/love/hate/enjoy + [Verb-ing] + [Object]',
      contrastExamples: [
        {
          incorrect: 'I like play guitar on weekends.',
          correct: 'I like playing the guitar on weekends.',
          explanation: 'Use the -ing form (gerund) after the preference verb "like".',
        },
        {
          incorrect: 'She loves cook for friends.',
          correct: 'She loves cooking for friends.',
          explanation: 'Use "cooking" (-ing) after "loves".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Lucas',
        text: 'Hey! What do you like doing in your free time when you are not working?',
        translation: 'अरे! जब आप काम नहीं कर रहे होते हैं, तो आपको अपने खाली समय में क्या करना पसंद है?',
      },
      {
        speaker: 'You',
        text: 'I love cooking new recipes and I enjoy reading mystery books. What about you?',
        translation: 'मुझे नए व्यंजन बनाना बहुत पसंद है और मुझे रहस्यमयी किताबें पढ़ने में मज़ा आता है। आपके बारे में क्या?',
      },
      {
        speaker: 'Lucas',
        text: 'I play acoustic guitar in a local band, and I like cycling in the countryside!',
        translation: 'मैं एक स्थानीय बैंड में ध्वनिक गिटार बजाता हूँ, और मुझे ग्रामीण इलाकों में साइकिल चलाना पसंद है!',
      },
      {
        speaker: 'You',
        text: 'That sounds amazing! How often do you practice playing the guitar?',
        translation: 'यह बहुत बढ़िया लग रहा है! आप गिटार बजाने का अभ्यास कितनी बार करते हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_25_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct form: "I enjoy ___ (swim) in the lake."',
      options: [
        { id: 'opt_1', text: 'swimming', isCorrect: true },
        { id: 'opt_2', text: 'swim', isCorrect: false },
        { id: 'opt_3', text: 'swims', isCorrect: false },
      ],
      correctAnswer: 'swimming',
      explanation: 'Use the gerund "-ing" form after "enjoy".',
    },
    {
      id: 'cp_a1_25_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly asks someone about their leisure interests?',
      options: [
        { id: 'opt_1', text: 'What do you like doing in your free time?', isCorrect: true },
        { id: 'opt_2', text: 'What you are liking to do free?', isCorrect: false },
        { id: 'opt_3', text: 'How do you hobby making?', isCorrect: false },
      ],
      correctAnswer: 'What do you like doing in your free time?',
      explanation: '"What do you like doing in your free time?" is standard and natural.',
    },
    {
      id: 'cp_a1_25_3',
      type: 'multiple_choice',
      prompt: 'Which sentence has correct grammar for expressing dislike?',
      options: [
        { id: 'opt_1', text: 'I don\'t like waking up early.', isCorrect: true },
        { id: 'opt_2', text: 'I not like wake up early.', isCorrect: false },
        { id: 'opt_3', text: 'I don\'t liking wake up.', isCorrect: false },
      ],
      correctAnswer: 'I don\'t like waking up early.',
      explanation: 'Use "don\'t like + [verb-ing]".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_25_1',
      scenarioContext: 'Describe two hobbies you love doing in your free time.',
      prompt: 'Build: "I love cooking and I like reading books."',
      targetStructure: 'Subject + love + gerund + coordinator + subject + like + gerund phrase',
      wordBank: ['I', 'love', 'cooking', 'and', 'I', 'like', 'reading', 'books', 'cook', 'read', 'am'],
      acceptableSolutions: [
        'I love cooking and I like reading books',
        'I love cooking and I like reading books.',
      ],
      explanation: 'Correct use of gerunds after "love" and "like".',
    },
    {
      id: 'sc_a1_25_2',
      scenarioContext: 'Ask Lucas about his hobbies.',
      prompt: 'Build: "What do you like doing on the weekends?"',
      targetStructure: 'WH-question + auxiliary do + subject + like + gerund + time phrase',
      wordBank: ['What', 'do', 'you', 'like', 'doing', 'on', 'the', 'weekends', 'are', 'does', 'in'],
      acceptableSolutions: [
        'What do you like doing on the weekends',
        'What do you like doing on the weekends?',
      ],
      explanation: 'Accurate interrogative sentence for free time inquiries.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_25_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! We have been working hard all week. What do you like doing in your free time when you want to unwind?',
      partnerAudioText:
        'Hey! We have been working hard all week. What do you like doing in your free time when you want to unwind?',
      partnerQuestionHindi:
        'अरे! हमने पूरे हफ्ते कड़ी मेहनत की है। जब आप सुकून पाना चाहते हैं तो खाली समय में आपको क्या करना पसंद है?',
      expectedFunction: 'Express Hobbies & Likes with Gerunds',
      contextGoal:
        'State your favorite hobbies using "I like/love/enjoy + -ing" (e.g. cooking, reading, swimming, playing music).',
      targetVocabulary: ['like', 'love', 'enjoy', 'cooking', 'reading', 'music', 'swimming'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I really love cooking delicious meals and I enjoy reading interesting books.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'In my free time, I like swimming and listening to music.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I enjoy photography and going for long bike rides on weekends.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Hobby & Preference Expression',
          patterns: ['love cooking', 'like reading', 'enjoy swimming', 'like listening', 'enjoy photography', 'love playing', 'like watching', 'love cycling', 'like painting'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'missing_ing_after_like',
          pattern: /\bi (like|love|enjoy) (cook|read|swim|play|paint)\b/i,
          errorType: 'grammar',
          message: 'Use the -ing form (gerund) after like/love/enjoy (e.g. "I like cooking", "I love reading").',
          correctionPattern: 'I like [verb-ing]...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_25_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "She loves ___ (paint) landscapes."',
        options: [
          { id: 'opt_1', text: 'painting', isCorrect: true },
          { id: 'opt_2', text: 'paint', isCorrect: false },
          { id: 'opt_3', text: 'paints', isCorrect: false },
        ],
        correctAnswer: 'painting',
        explanation: 'Use the gerund "-ing" after "loves".',
      },
    },
    {
      id: 'turn_a1_25_2',
      turnIndex: 2,
      partnerPrompt:
        'That sounds so peaceful! I play guitar and sing in an indie rock band on Saturday nights. What about sports or outdoor activities, do you like any of those?',
      partnerAudioText:
        'That sounds so peaceful! I play guitar and sing in an indie rock band on Saturday nights. What about sports or outdoor activities, do you like any of those?',
      partnerQuestionHindi:
        'यह बहुत शांतिदायक लगता है! मैं शनिवार की रात एक इंडी रॉक बैंड में गिटार बजाता हूँ और गाता हूँ। खेलों या बाहरी गतिविधियों के बारे में क्या, क्या आपको उनमें से कुछ पसंद है?',
      expectedFunction: 'Discuss Sports / Outdoor Preferences & Dislikes',
      contextGoal:
        'State an outdoor activity you like or dislike using "I like..." or "I don\'t like/hate + -ing".',
      targetVocabulary: ['sports', 'cycling', 'running', 'hiking', 'don\'t like', 'hate'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I like cycling in the park, but I don\'t really like running or jogging.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Playing the guitar in a band sounds awesome! I enjoy hiking in the mountains.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I love playing football with friends, but I hate working out in gyms.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Sports Preference / Dislike',
          patterns: ['cycling', 'running', 'hiking', 'swimming', 'football', 'don\'t like', 'enjoy hiking', 'love playing', 'hate'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_25_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly expresses a dislike for running?',
        options: [
          { id: 'opt_1', text: 'I don\'t like running in cold weather.', isCorrect: true },
          { id: 'opt_2', text: 'I am not like run cold.', isCorrect: false },
          { id: 'opt_3', text: 'I no like running.', isCorrect: false },
        ],
        correctAnswer: 'I don\'t like running in cold weather.',
        explanation: '"I don\'t like running..." is grammatically correct.',
      },
    },
    {
      id: 'turn_a1_25_3',
      turnIndex: 3,
      partnerPrompt:
        'Awesome. We should definitely grab a coffee or go cycling together sometime! Do you have any plans this upcoming weekend?',
      partnerAudioText:
        'Awesome. We should definitely grab a coffee or go cycling together sometime! Do you have any plans this upcoming weekend?',
      partnerQuestionHindi:
        'शानदार। हमें कभी साथ में कॉफी पीनी चाहिए या साइकिल चलाने जाना चाहिए! क्या इस आने वाले वीकेंड पर आपकी कोई योजना है?',
      expectedFunction: 'Respond Enthusiastically & Plan / Close',
      contextGoal:
        'Accept the idea warmly, mention your weekend availability, and say you look forward to it.',
      targetVocabulary: ['sounds great', 'coffee', 'cycling', 'free', 'weekend', 'see you'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'That sounds like a great idea! I am free on Sunday afternoon. Let\'s keep in touch!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I would love that! Let\'s go cycling this Sunday. See you soon!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Sounds fun! I am free on Saturday. Let\'s do it!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Enthusiastic Acceptance & Availability',
          patterns: ['sounds great', 'sounds like fun', 'i am free', 'free on sunday', 'free on saturday', 'would love that', 'let\'s do it', 'keep in touch', 'see you'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_25_3',
        type: 'multiple_choice',
        prompt: 'Which is the natural response to a social invitation?',
        options: [
          { id: 'opt_1', text: 'That sounds like a great idea! I\'m free on Sunday.', isCorrect: true },
          { id: 'opt_2', text: 'I am sound great idea.', isCorrect: false },
          { id: 'opt_3', text: 'Making coffee plan is good.', isCorrect: false },
        ],
        correctAnswer: 'That sounds like a great idea! I\'m free on Sunday.',
        explanation: '"That sounds like a great idea!" is natural and positive.',
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
