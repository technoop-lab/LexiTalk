import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_INTRO: ConversationDefinition = {
  id: 'conv_a1_intro',
  title: 'Meeting Someone New at a Coffee Shop',
  cefr: 'A1',
  unitId: 'unit_1',
  lessonLinks: ['lesson_a1_1_1', 'lesson_a1_1_2', 'lesson_a1_1_3'],
  estimatedMinutes: 5,
  scenario:
    'You are sitting at a community language table in a cafe. A friendly person named Alex sits across from you and starts a conversation.',
  communicativeGoals: [
    'Greet politely and introduce yourself by name',
    'State where you are from / your hometown',
    'State what you do or what you are studying',
    'Politely ask your partner a reciprocating question',
    'Conclude a short conversation naturally',
  ],
  canDoStatements: [
    'Can introduce oneself and others (CEFR A1 Speaking)',
    'Can ask and answer simple questions about personal details such as where they live and people they know',
    'Can interact in a simple way provided the other person is prepared to repeat or rephrase things at a slower rate',
  ],
  characters: [
    {
      id: 'char_alex',
      name: 'Alex',
      role: 'Student & Cafe Neighbor',
      avatar: '🧑‍💻',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'meet',
        ipa: '/miːt/',
        partOfSpeech: 'verb',
        meaning: 'To see and talk to someone for the first time',
        exampleSentence: 'Nice to meet you.',
        translations: { hi: 'मिलना' },
      },
      {
        word: 'from',
        ipa: '/frɒm/',
        partOfSpeech: 'preposition',
        meaning: 'Used to show the place where someone was born or lives',
        exampleSentence: 'I am from Mumbai.',
        translations: { hi: 'से (स्थान)' },
      },
      {
        word: 'study',
        ipa: '/ˈstʌdi/',
        partOfSpeech: 'verb',
        meaning: 'To learn about a subject at school or university',
        exampleSentence: 'I study computer science.',
        translations: { hi: 'पढ़ाई करना' },
      },
      {
        word: 'work',
        ipa: '/wɜːk/',
        partOfSpeech: 'verb',
        meaning: 'To do a job to earn money',
        exampleSentence: 'I work at a tech company.',
        translations: { hi: 'काम करना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Nice to meet you.',
        functionCategory: 'Social Greeting',
        exampleSentence: 'Hi, I am Alex. Nice to meet you.',
      },
      {
        phrase: 'I am from...',
        functionCategory: 'Origin',
        exampleSentence: 'I am from Delhi, India.',
      },
      {
        phrase: 'What about you?',
        functionCategory: 'Reciprocating Question',
        exampleSentence: 'I live in Chicago. What about you?',
      },
      {
        phrase: 'Have a great day!',
        functionCategory: 'Farewell',
        exampleSentence: 'It was nice talking to you. Have a great day!',
      },
    ],
    grammar: {
      title: 'Be Verb vs Action Verbs (Present Simple)',
      conceptExplanation:
        'Use "am/is/are" with names, origins, and adjectives. Do not mix "am" directly before regular action verbs like "live", "work", or "agree".',
      patternFormula: 'I am + [Name/Origin]  |  I + [Base Verb] + [Object]',
      contrastExamples: [
        {
          incorrect: 'I am live in Delhi.',
          correct: 'I live in Delhi. / I am from Delhi.',
          explanation: 'Never use "am" with base verbs in the simple present tense.',
        },
        {
          incorrect: 'My name are Rahul.',
          correct: 'My name is Rahul.',
          explanation: 'Singular subject "My name" takes the singular verb "is".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Alex',
        text: 'Hi there! Is anyone sitting here? My name is Alex.',
        translation: 'नमस्ते! क्या यहाँ कोई बैठा है? मेरा नाम एलेक्स है।',
      },
      {
        speaker: 'You',
        text: 'Hi Alex! No, please sit down. My name is Rahul. Nice to meet you.',
        translation: 'नमस्ते एलेक्स! नहीं, कृपया बैठिए। मेरा नाम राहुल है। आपसे मिलकर अच्छा लगा।',
      },
      {
        speaker: 'Alex',
        text: 'Nice to meet you too! Where are you from?',
        translation: 'आपसे मिलकर भी अच्छा लगा! आप कहाँ से हैं?',
      },
      {
        speaker: 'You',
        text: 'I am from India, but I live here now. Where are you from?',
        translation: 'मैं भारत से हूँ, लेकिन अब यहीं रहता हूँ। आप कहाँ से हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "Hi, my name ___ Sarah."',
      options: [
        { id: 'opt_1', text: 'is', isCorrect: true },
        { id: 'opt_2', text: 'am', isCorrect: false },
        { id: 'opt_3', text: 'are', isCorrect: false },
      ],
      correctAnswer: 'is',
      explanation: '"My name" is singular, so it takes "is".',
    },
    {
      id: 'cp_a1_2',
      type: 'multiple_choice',
      prompt: 'Which response correctly states origin without grammatical error?',
      options: [
        { id: 'opt_1', text: 'I am from Mumbai.', isCorrect: true },
        { id: 'opt_2', text: 'I am live in Mumbai.', isCorrect: false },
        { id: 'opt_3', text: 'I from is Mumbai.', isCorrect: false },
      ],
      correctAnswer: 'I am from Mumbai.',
      explanation: '"I am from [Place]" or "I live in [Place]" are the only correct standard patterns.',
    },
    {
      id: 'cp_a1_3',
      type: 'multiple_choice',
      prompt: 'How do you ask the other person about themselves naturally?',
      options: [
        { id: 'opt_1', text: 'What about you?', isCorrect: true },
        { id: 'opt_2', text: 'Who are your name?', isCorrect: false },
        { id: 'opt_3', text: 'You are what?', isCorrect: false },
      ],
      correctAnswer: 'What about you?',
      explanation: '"What about you?" or "And you?" is the natural conversational ping-pong phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_1',
      scenarioContext: 'Introduce yourself politely with your name and greeting.',
      prompt: 'Build: "Hi, my name is Alex and nice to meet you."',
      targetStructure: 'Greeting + Name + Politeness formula',
      wordBank: ['Hi', 'my', 'name', 'is', 'Alex', 'and', 'nice', 'to', 'meet', 'you', 'am', 'are'],
      acceptableSolutions: [
        'Hi my name is Alex and nice to meet you',
        'Hi, my name is Alex and nice to meet you.',
        'Nice to meet you, my name is Alex.',
      ],
      explanation: 'Introduces greeting, states name with "is", and adds polite handshake phrase.',
    },
    {
      id: 'sc_a1_2',
      scenarioContext: 'State your origin and ask the partner.',
      prompt: 'Build: "I am from India. Where are you from?"',
      targetStructure: 'Origin statement + Reciprocal question',
      wordBank: ['I', 'am', 'from', 'India', 'Where', 'are', 'you', 'from', 'do', 'live'],
      acceptableSolutions: [
        'I am from India Where are you from',
        'I am from India. Where are you from?',
        'I come from India. Where are you from?',
      ],
      explanation: 'Clear statement of origin followed by open reciprocal question.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! Do you mind if I sit here? My name is Alex, by the way.',
      partnerAudioText: 'Hi there! Do you mind if I sit here? My name is Alex, by the way.',
      partnerQuestionHindi: 'नमस्ते! क्या मैं यहाँ बैठ सकता हूँ? वैसे मेरा नाम एलेक्स है।',
      expectedFunction: 'Greeting & Self-Introduction',
      contextGoal: 'Welcome Alex to sit down, say your name, and express polite pleasure to meet them.',
      targetVocabulary: ['name', 'nice', 'meet'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hi Alex, please sit down! My name is Rahul. Nice to meet you.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hello! Sure, go ahead. I am Rahul, nice to meet you too.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Hi! Not at all, take a seat. I am Priya.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Greeting / Permission',
          patterns: ['hi', 'hello', 'sure', 'please', 'go ahead', 'not at all', 'sit', 'welcome'],
          required: true,
        },
        {
          name: 'Name Presentation',
          patterns: ['my name is', 'i am', 'i m', "i'm", 'call me'],
          required: true,
        },
        {
          name: 'Politeness / Meet formula',
          patterns: ['nice to meet you', 'pleased to meet you', 'good to meet you', 'meet you'],
          required: false,
        },
      ],
      commonMistakeRules: [
        {
          id: 'be_verb_name_error',
          pattern: /\bmy name are\b/i,
          errorType: 'grammar',
          message: 'Say "My name is [Name]", not "My name are".',
          correctionPattern: 'My name is...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "Hello! My name ___ David. Nice to meet you."',
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
      id: 'turn_a1_2',
      turnIndex: 2,
      partnerPrompt:
        'Nice to meet you! Are you from around here, or did you move from another city?',
      partnerAudioText: 'Nice to meet you! Are you from around here, or did you move from another city?',
      partnerQuestionHindi: 'आपसे मिलकर अच्छा लगा! क्या आप यहीं के रहने वाले हैं या किसी दूसरे शहर से आए हैं?',
      expectedFunction: 'State Origin & Ask Reciprocal Question',
      contextGoal: 'Explain where you are from (country or city) and ask Alex where they are from.',
      targetVocabulary: ['from', 'live', 'where', 'you'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I am from Mumbai, India, but I live here now. Where are you from?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I moved here from Delhi. What about you, Alex?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I come from Spain. And you?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Origin / Residence Statement',
          patterns: ['i am from', 'i come from', 'i moved from', 'i live in', 'from india', 'from spain', 'from here'],
          required: true,
        },
        {
          name: 'Reciprocal Question',
          patterns: ['where are you from', 'what about you', 'and you', 'where do you live', 'how about you'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'be_verb_live_error',
          pattern: /\bi am live\b/i,
          errorType: 'grammar',
          message: 'Do not say "I am live". Say "I live in..." or "I am from...".',
          correctionPattern: 'I live in / I am from',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_2',
        type: 'multiple_choice',
        prompt: 'Which phrase correctly tells someone where you were born?',
        options: [
          { id: 'opt_1', text: 'I am from Delhi.', isCorrect: true },
          { id: 'opt_2', text: 'I am live in Delhi.', isCorrect: false },
          { id: 'opt_3', text: 'I from Delhi is.', isCorrect: false },
        ],
        correctAnswer: 'I am from Delhi.',
        explanation: 'Use "I am from [Place]" or "I live in [Place]".',
      },
    },
    {
      id: 'turn_a1_3',
      turnIndex: 3,
      partnerPrompt:
        'Oh wonderful! I was born in Chicago. What brings you to the cafe today? Are you working or studying?',
      partnerAudioText: 'Oh wonderful! I was born in Chicago. What brings you to the cafe today? Are you working or studying?',
      partnerQuestionHindi: 'अरे बहुत बढ़िया! मेरा जन्म शिकागो में हुआ था। आज कैफ़े में कैसे आना हुआ? क्या आप काम कर रहे हैं या पढ़ाई?',
      expectedFunction: 'Describe Activity & Occupation',
      contextGoal: 'Explain your current study/work activity in a clear sentence.',
      targetVocabulary: ['study', 'work', 'learning', 'english'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I am studying English and practicing my conversation skills today.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I work as a software engineer, and I am relaxing with coffee.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I study at the university and work part-time.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Activity / Role Description',
          patterns: [
            'study',
            'studying',
            'student',
            'work',
            'working',
            'learning',
            'reading',
            'practicing',
            'engineer',
            'coffee',
            'relaxing',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'work_preposition_error',
          pattern: /\bi work to\b/i,
          errorType: 'grammar',
          message: 'Say "I work at [Company]" or "I work in [Field]", not "I work to".',
          correctionPattern: 'I work at...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I ___ English at the language academy."',
        options: [
          { id: 'opt_1', text: 'study', isCorrect: true },
          { id: 'opt_2', text: 'am study', isCorrect: false },
          { id: 'opt_3', text: 'studying', isCorrect: false },
        ],
        correctAnswer: 'study',
        explanation: 'Use simple present "I study" for general activities.',
      },
    },
    {
      id: 'turn_a1_4',
      turnIndex: 4,
      partnerPrompt:
        'That is fantastic! Well, my coffee just arrived and I should get started on some reading. It was really nice meeting you!',
      partnerAudioText: 'That is fantastic! Well, my coffee just arrived and I should get started on some reading. It was really nice meeting you!',
      partnerQuestionHindi: 'यह तो बहुत बढ़िया है! खैर, मेरी कॉफ़ी आ गई है और मुझे कुछ पढ़ाई शुरू करनी चाहिए। आपसे मिलकर बहुत अच्छा लगा!',
      expectedFunction: 'Polite Farewell & Closing',
      contextGoal: 'Respond warmly to Alex, wish them a good day, and close the conversation.',
      targetVocabulary: ['nice', 'day', 'enjoy', 'goodbye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'It was great meeting you too, Alex! Have a wonderful day and enjoy your coffee.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Nice meeting you too! Enjoy your reading, goodbye!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Thanks, Alex! Have a good one. Bye!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Farewell / Politeness Formula',
          patterns: [
            'nice meeting you',
            'good meeting you',
            'great meeting you',
            'have a nice day',
            'have a great day',
            'have a good day',
            'goodbye',
            'bye',
            'see you',
            'enjoy your',
            'take care',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_4',
        type: 'multiple_choice',
        prompt: 'Which is the most natural way to wish someone well as you part?',
        options: [
          { id: 'opt_1', text: 'Have a great day!', isCorrect: true },
          { id: 'opt_2', text: 'Have a day great!', isCorrect: false },
          { id: 'opt_3', text: 'Make great day!', isCorrect: false },
        ],
        correctAnswer: 'Have a great day!',
        explanation: '"Have a great day!" is the standard closing formula.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 75,
  },
};
