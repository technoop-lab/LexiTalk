import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_1: ConversationDefinition = {
  id: 'conv_a1_1',
  title: 'Meeting a Neighbor in the Apartment Lobby',
  cefr: 'A1',
  unitId: 'unit_a1_1',
  lessonLinks: ['lesson_a1_1_1'],
  estimatedMinutes: 5,
  scenario:
    'You are checking your mail in your new apartment lobby. A neighbor named Liam notices you and introduces himself warmly.',
  communicativeGoals: [
    'Exchange friendly greetings and introduce yourself with your name',
    'State your country or city of origin using "I am from..."',
    'State where you live using "I live in..."',
    'Politely ask your neighbor where they are from or what their name is',
    'Close the brief conversation politely with a warm farewell',
  ],
  canDoStatements: [
    'Can introduce oneself using "My name is..." and "I\'m..." (CEFR A1)',
    'Can state country and city of origin with "I\'m from..."',
    'Can ask and answer simple questions about personal identity and residence',
  ],
  characters: [
    {
      id: 'char_liam',
      name: 'Liam',
      role: 'Apartment Neighbor (Building 4B)',
      avatar: '🙋‍♂️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'name',
        ipa: '/neɪm/',
        partOfSpeech: 'noun',
        meaning: 'The word by which a person or thing is known',
        exampleSentence: 'My name is Liam.',
        translations: { hi: 'नाम' },
      },
      {
        word: 'from',
        ipa: '/frɒm/',
        partOfSpeech: 'preposition',
        meaning: 'Indicating point of origin or birthplace',
        exampleSentence: 'I am from Delhi.',
        translations: { hi: 'से (मूल स्थान)' },
      },
      {
        word: 'live',
        ipa: '/lɪv/',
        partOfSpeech: 'verb',
        meaning: 'To have one’s permanent home in a particular place',
        exampleSentence: 'I live in apartment 4B.',
        translations: { hi: 'रहना' },
      },
      {
        word: 'meet',
        ipa: '/miːt/',
        partOfSpeech: 'verb',
        meaning: 'To see and talk with someone for the first time',
        exampleSentence: 'Nice to meet you.',
        translations: { hi: 'मिलना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'My name is...',
        functionCategory: 'Self-Introduction',
        exampleSentence: 'My name is Priya.',
      },
      {
        phrase: 'I am from...',
        functionCategory: 'Stating Origin',
        exampleSentence: 'I am from India.',
      },
      {
        phrase: 'Nice to meet you!',
        functionCategory: 'Social Formula',
        exampleSentence: 'Nice to meet you too, Liam!',
      },
      {
        phrase: 'Where are you from?',
        functionCategory: 'Reciprocal Question',
        exampleSentence: 'I am from Mumbai. Where are you from?',
      },
    ],
    grammar: {
      title: 'Verb BE (am / is / are) & Simple Present Formations',
      conceptExplanation:
        'Use "I am" or "My name is" for identity and origin. Do not insert "am" before action verbs (e.g. say "I live", not "I am live").',
      patternFormula: 'I am + [Name/Country] | I live in + [Place]',
      contrastExamples: [
        {
          incorrect: 'I am live in Chicago.',
          correct: 'I live in Chicago. / I am from Chicago.',
          explanation: 'Never combine "am" with the base action verb "live".',
        },
        {
          incorrect: 'My name are Amit.',
          correct: 'My name is Amit.',
          explanation: 'Singular subject "My name" takes singular verb "is".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Liam',
        text: 'Hi there! Are you new here? My name is Liam.',
        translation: 'नमस्ते! क्या आप यहाँ नए हैं? मेरा नाम लियाम है।',
      },
      {
        speaker: 'You',
        text: 'Hello Liam! Yes, I just moved in. My name is Amit. Nice to meet you.',
        translation: 'नमस्ते लियाम! हाँ, मैं अभी आया हूँ। मेरा नाम अमित है। आपसे मिलकर अच्छा लगा।',
      },
      {
        speaker: 'Liam',
        text: 'Nice to meet you too, Amit! Where are you from originally?',
        translation: 'आपसे मिलकर भी अच्छा लगा, अमित! आप मूल रूप से कहाँ से हैं?',
      },
      {
        speaker: 'You',
        text: 'I am from India, but I live in apartment 3A now. What about you?',
        translation: 'मैं भारत से हूँ, लेकिन अब अपार्टमेंट 3A में रहता हूँ। आप कहाँ से हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_1_1',
      type: 'fill_blank',
      prompt: 'Complete the self-introduction: "Hello! My name ___ Sarah."',
      options: [
        { id: 'opt_1', text: 'is', isCorrect: true },
        { id: 'opt_2', text: 'are', isCorrect: false },
        { id: 'opt_3', text: 'am', isCorrect: false },
      ],
      correctAnswer: 'is',
      explanation: '"My name" is singular third-person, so it takes "is".',
    },
    {
      id: 'cp_a1_1_2',
      type: 'multiple_choice',
      prompt: 'Which response correctly states your residence?',
      options: [
        { id: 'opt_1', text: 'I live in Chicago.', isCorrect: true },
        { id: 'opt_2', text: 'I am live in Chicago.', isCorrect: false },
        { id: 'opt_3', text: 'I from Chicago living.', isCorrect: false },
      ],
      correctAnswer: 'I live in Chicago.',
      explanation: 'Use simple present "I live in..." without the auxiliary "am".',
    },
    {
      id: 'cp_a1_1_3',
      type: 'multiple_choice',
      prompt: 'How do you ask your neighbor where they were born?',
      options: [
        { id: 'opt_1', text: 'Where are you from?', isCorrect: true },
        { id: 'opt_2', text: 'Where you are come?', isCorrect: false },
        { id: 'opt_3', text: 'Who is from you?', isCorrect: false },
      ],
      correctAnswer: 'Where are you from?',
      explanation: '"Where are you from?" is the standard question for origin.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_1_1',
      scenarioContext: 'Introduce yourself politely to your new neighbor.',
      prompt: 'Build: "Hello, my name is Alex and nice to meet you."',
      targetStructure: 'Greeting + Name clause + Polite greeting formula',
      wordBank: ['Hello', 'my', 'name', 'is', 'Alex', 'and', 'nice', 'to', 'meet', 'you', 'am', 'are'],
      acceptableSolutions: [
        'Hello my name is Alex and nice to meet you',
        'Hello, my name is Alex and nice to meet you.',
        'Hi my name is Alex nice to meet you',
      ],
      explanation: 'Standard greeting with name and polite handshake expression.',
    },
    {
      id: 'sc_a1_1_2',
      scenarioContext: 'State your origin and ask Liam about his.',
      prompt: 'Build: "I am from India. Where are you from?"',
      targetStructure: 'Origin statement + Reciprocal WH-question',
      wordBank: ['I', 'am', 'from', 'India', 'Where', 'are', 'you', 'from', 'live', 'in'],
      acceptableSolutions: [
        'I am from India Where are you from',
        'I am from India. Where are you from?',
        'I come from India. Where are you from?',
      ],
      explanation: 'Clear statement of origin followed by reciprocal inquiry.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_1_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! Welcome to the building! My name is Liam, I live on the 4th floor. What is your name?',
      partnerAudioText: 'Hi there! Welcome to the building! My name is Liam, I live on the 4th floor. What is your name?',
      partnerQuestionHindi: 'नमस्ते! बिल्डिंग में स्वागत है! मेरा नाम लियाम है, मैं चौथी मंजिल पर रहता हूँ। आपका नाम क्या है?',
      expectedFunction: 'Greeting & Name Presentation',
      contextGoal: 'Greet Liam, say your name clearly, and say it is nice to meet him.',
      targetVocabulary: ['name', 'nice', 'meet'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hi Liam! My name is Rahul. Nice to meet you.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hello! I am Priya. Pleased to meet you, Liam.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Hi Liam, nice to meet you! You can call me Alex.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Greeting',
          patterns: ['hi', 'hello', 'hey', 'good morning', 'good afternoon'],
          required: true,
        },
        {
          name: 'Name Statement',
          patterns: ['my name is', 'i am', 'i m', "i'm", 'name is'],
          required: true,
        },
        {
          name: 'Politeness Formula',
          patterns: ['nice to meet you', 'pleased to meet you', 'good to meet you', 'glad to meet you'],
          required: false,
        },
      ],
      commonMistakeRules: [
        {
          id: 'be_plural_name_error',
          pattern: /\bmy name are\b/i,
          errorType: 'grammar',
          message: 'Say "My name is [Name]", not "My name are".',
          correctionPattern: 'My name is...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_1_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "Hi! My name ___ Daniel."',
        options: [
          { id: 'opt_1', text: 'is', isCorrect: true },
          { id: 'opt_2', text: 'are', isCorrect: false },
          { id: 'opt_3', text: 'am', isCorrect: false },
        ],
        correctAnswer: 'is',
        explanation: 'Singular subject "My name" takes "is".',
      },
    },
    {
      id: 'turn_a1_1_2',
      turnIndex: 2,
      partnerPrompt:
        'Great to meet you! Where are you from originally, and did you move here recently?',
      partnerAudioText: 'Great to meet you! Where are you from originally, and did you move here recently?',
      partnerQuestionHindi: 'आपसे मिलकर बहुत अच्छा लगा! आप मूल रूप से कहाँ से हैं, और क्या आप हाल ही में यहाँ आए हैं?',
      expectedFunction: 'State Origin & Residence',
      contextGoal: 'State your country/city of origin and mention that you live here now, then ask Liam where he is from.',
      targetVocabulary: ['from', 'live', 'where', 'you'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I am from India, and I live in apartment 2B. Where are you from?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I moved from Spain last week. What about you, Liam?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I am from Mexico, but I live here now. And you?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Origin Statement',
          patterns: ['i am from', 'i come from', 'i moved from', 'from india', 'from spain', 'from mexico', 'from here'],
          required: true,
        },
        {
          name: 'Reciprocal Question',
          patterns: ['where are you from', 'what about you', 'and you', 'how about you', 'where do you come from'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'be_live_error',
          pattern: /\bi am live\b/i,
          errorType: 'grammar',
          message: 'Say "I live in..." or "I am from...", never "I am live".',
          correctionPattern: 'I live in... / I am from...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_1_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly states where you live?',
        options: [
          { id: 'opt_1', text: 'I live in Chicago.', isCorrect: true },
          { id: 'opt_2', text: 'I am live in Chicago.', isCorrect: false },
          { id: 'opt_3', text: 'I from Chicago is.', isCorrect: false },
        ],
        correctAnswer: 'I live in Chicago.',
        explanation: 'Use simple present "I live in..." without "am".',
      },
    },
    {
      id: 'turn_a1_1_3',
      turnIndex: 3,
      partnerPrompt:
        'I was born in Toronto, Canada! Well, if you ever need anything or want to explore the neighborhood, let me know. Have a wonderful day!',
      partnerAudioText: 'I was born in Toronto, Canada! Well, if you ever need anything or want to explore the neighborhood, let me know. Have a wonderful day!',
      partnerQuestionHindi: 'मेरा जन्म टोरंटो, कनाडा में हुआ था! खैर, अगर आपको कभी किसी चीज़ की ज़रूरत हो या पड़ोस घूमना हो, तो मुझे बताइएगा। आपका दिन शुभ हो!',
      expectedFunction: 'Polite Farewell & Closing',
      contextGoal: 'Thank Liam warmly, wish him a good day, and say goodbye.',
      targetVocabulary: ['thank', 'nice', 'day', 'goodbye', 'see'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you so much, Liam! Have a great day and see you around.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thanks a lot! Have a nice day, goodbye!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Thanks Liam, appreciate it. Have a good one! Bye.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Farewell & Gratitude',
          patterns: [
            'thank you',
            'thanks',
            'have a great day',
            'have a nice day',
            'have a good day',
            'see you',
            'goodbye',
            'bye',
            'take care',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_1_3',
        type: 'multiple_choice',
        prompt: 'Which is the natural way to wish someone a good day?',
        options: [
          { id: 'opt_1', text: 'Have a great day!', isCorrect: true },
          { id: 'opt_2', text: 'Have day great!', isCorrect: false },
          { id: 'opt_3', text: 'Make a good day!', isCorrect: false },
        ],
        correctAnswer: 'Have a great day!',
        explanation: '"Have a great day!" is the standard polite closing formula.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 75,
  },
};
