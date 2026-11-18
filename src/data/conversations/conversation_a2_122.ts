import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_122: ConversationDefinition = {
  id: 'conv_a2_122',
  title: 'Present Perfect for Life Experiences (Have you ever...?, ever, never, tried, been to)',
  cefr: 'A2',
  unitId: 'unit_a2_9',
  lessonLinks: ['lesson_a2_9_122'],
  estimatedMinutes: 5,
  scenario:
    'You are attending an international travelers and professionals social mixer at a rooftop cafe in Edinburgh. Chat with travel photographer Carlos Ruiz about memorable life experiences. Practice asking "Have you ever...?", describing places you have visited using "have been to", sharing foods you have tried, and expressing things you have never done in your life.',
  communicativeGoals: [
    'Ask questions about life experiences using "Have you ever + past participle?"',
    'Share positive experiences using "I have / I’ve + past participle (twice / many times / before)"',
    'State non-experiences clearly using "I have never + past participle"',
    'Distinguish accurately between "have been to" (visited and returned) and "have gone to" (currently away)',
  ],
  canDoStatements: [
    'Can ask and answer questions about past life experiences using the Present Perfect (CEFR A2)',
    'Can correctly form regular and common irregular past participles (been, seen, eaten, tried, visited)',
    'Can maintain a lively social conversation comparing bucket-list travel adventures',
  ],
  characters: [
    {
      id: 'char_carlos_ruiz',
      name: 'Carlos Ruiz',
      role: 'Travel Blogger & Photojournalist',
      avatar: '📸',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'ever',
        ipa: '/ˈɛvər/',
        partOfSpeech: 'adverb',
        meaning: 'At any time in your life up until now (used mainly in questions)',
        exampleSentence: 'Have you ever visited the Scottish Highlands in winter?',
        translations: { hi: 'कभी / जीवन में किसी भी समय' },
      },
      {
        word: 'never',
        ipa: '/ˈnɛvər/',
        partOfSpeech: 'adverb',
        meaning: 'Not at any time in your life (used in affirmative grammar with negative meaning)',
        exampleSentence: 'I have never tried skydiving, but I want to try it one day.',
        translations: { hi: 'कभी नहीं' },
      },
      {
        word: 'have been to',
        ipa: '/hæv biːn tuː/',
        partOfSpeech: 'verb phrase',
        meaning: 'Have visited a place and returned back',
        exampleSentence: 'I have been to Edinburgh Castle three times.',
        translations: { hi: 'जा चुका हूँ (और वापस आ चुका हूँ)' },
      },
      {
        word: 'try',
        ipa: '/traɪ/',
        partOfSpeech: 'verb',
        meaning: 'To test or sample a new food, sport, or activity (past participle: tried)',
        exampleSentence: 'Have you ever tried traditional Scottish haggis?',
        translations: { hi: 'कोशिश करना / चखना या आजमाना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Have you ever been to the Highlands?',
        functionCategory: 'Asking Life Experience Question',
        exampleSentence: 'Have you ever been to Rome?',
      },
      {
        phrase: 'I have visited five different countries in Europe.',
        functionCategory: 'Stating Cumulative Experiences',
        exampleSentence: 'I have tried sushi many times.',
      },
      {
        phrase: 'I have never eaten spicy food before.',
        functionCategory: 'Stating Negative Life Experience',
        exampleSentence: 'I have never seen the Northern Lights.',
      },
      {
        phrase: 'What is the most exciting place you have ever visited?',
        functionCategory: 'Asking Superlative Experience Question',
        exampleSentence: 'What is the best dish you have ever tasted?',
      },
    ],
    grammar: {
      title: 'Present Perfect for Life Experience: Have/Has + Past Participle with Ever & Never',
      conceptExplanation:
        '1. Question Pattern: "Have you ever + Past Participle?" (e.g. "Have you ever eaten sushi?").\n2. Affirmative Experience: "I have / I\'ve + Past Participle" (e.g. "I have visited Scotland twice").\n3. Negative Experience: "I have never + Past Participle" (do NOT add "not": "I have never been", NOT "I haven\'t never been").\n4. Been vs Gone: "She has been to Paris" = she went and came back. "She has gone to Paris" = she is still in Paris right now.',
      patternFormula: 'Have you ever + [Past Participle]? | Subject + have/has (never) + [Past Participle]',
      contrastExamples: [
        {
          incorrect: 'Did you ever went to Scotland in your life?',
          correct: 'Have you ever been to Scotland?',
          explanation: 'When asking about general life experience without a specific past time, use Present Perfect ("Have you ever been"), not Past Simple with "went".',
        },
        {
          incorrect: 'I haven\'t never eaten haggis.',
          correct: 'I have never eaten haggis. / I haven\'t eaten haggis yet.',
          explanation: 'Avoid double negatives: use "have never + past participle".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Carlos Ruiz',
        text: 'Hi there! Welcome to the Edinburgh travel meetup! Have you ever visited Scotland before, or is this your first time?',
        translation: 'नमस्ते! एडिनबर्ग यात्रा मीटअप में आपका स्वागत है! क्या आप पहले कभी स्कॉटलैंड गए हैं, या यह आपकी पहली बार है?',
      },
      {
        speaker: 'You',
        text: 'Hi Carlos! I have been to Edinburgh once before for a weekend conference, but I have never explored the Scottish Highlands or visited the Isle of Skye. What about you?',
        translation: 'नमस्ते कार्लोस! मैं एक सप्ताहांत सम्मेलन के लिए पहले एक बार एडिनबर्ग जा चुका हूँ, लेकिन मैंने कभी स्कॉटिश हाइलैंड्स की यात्रा नहीं की है या आइल ऑफ स्काई नहीं देखा है। आपके बारे में क्या?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_122_1',
      type: 'fill_blank',
      prompt: 'Complete the question: "___ you ever seen the Northern Lights in winter?"',
      options: [
        { id: 'opt_1', text: 'Have', isCorrect: true },
        { id: 'opt_2', text: 'Did', isCorrect: false },
        { id: 'opt_3', text: 'Do', isCorrect: false },
      ],
      correctAnswer: 'Have',
      explanation: 'Use "Have you ever + past participle" for lifetime experience questions.',
    },
    {
      id: 'cp_a2_122_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly states that someone has never done an activity?',
      options: [
        { id: 'opt_1', text: 'I have never tried snowboarding before.', isCorrect: true },
        { id: 'opt_2', text: 'I haven\'t never tried snowboarding.', isCorrect: false },
        { id: 'opt_3', text: 'I never have try snowboarding.', isCorrect: false },
      ],
      correctAnswer: 'I have never tried snowboarding before.',
      explanation: '"Subject + have never + past participle" is the correct negative experience formula.',
    },
    {
      id: 'cp_a2_122_3',
      type: 'multiple_choice',
      prompt: 'What does "My sister has been to Japan" mean?',
      options: [
        { id: 'opt_1', text: 'She visited Japan in the past and has returned.', isCorrect: true },
        { id: 'opt_2', text: 'She is currently living in Japan right now.', isCorrect: false },
        { id: 'opt_3', text: 'She is traveling on a plane to Japan now.', isCorrect: false },
      ],
      correctAnswer: 'She visited Japan in the past and has returned.',
      explanation: '"Have been to" means visited and returned.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_122_1',
      scenarioContext: 'Ask about someone’s travel experiences.',
      prompt: 'Build: "Have you ever visited the Scottish Highlands?"',
      targetStructure: 'Have + you + ever + past participle + object',
      wordBank: ['Have', 'you', 'ever', 'visited', 'the', 'Scottish', 'Highlands', 'Did', 'visit', 'been'],
      acceptableSolutions: [
        'Have you ever visited the Scottish Highlands',
        'Have you ever visited the Scottish Highlands?',
        'Have you ever visited the Scottish Highlands.',
      ],
      explanation: 'Standard lifetime experience question.',
    },
    {
      id: 'sc_a2_122_2',
      scenarioContext: 'Share an unexperienced activity.',
      prompt: 'Build: "I have never tried traditional Scottish haggis."',
      targetStructure: 'Subject + have + never + past participle + adjective phrase',
      wordBank: ['I', 'have', 'never', 'tried', 'traditional', 'Scottish', 'haggis', 'did', 'try', 'not'],
      acceptableSolutions: [
        'I have never tried traditional Scottish haggis',
        'I have never tried traditional Scottish haggis.',
      ],
      explanation: 'States a non-experience with "have never tried".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_122_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! Welcome to the Edinburgh travelers social meetup. I am Carlos, a freelance travel photographer. Have you ever visited Scotland before, or is this your very first trip?',
      partnerAudioText:
        'Hi there! Welcome to the Edinburgh travelers social meetup. I am Carlos, a freelance travel photographer. Have you ever visited Scotland before, or is this your very first trip?',
      partnerQuestionHindi:
        'नमस्ते! एडिनबर्ग ट्रेवलर्स सोशल मीटअप में आपका स्वागत है। मैं कार्लोस हूँ, एक फ्रीलांस ट्रैवल फ़ोटोग्राफ़र। क्या आप पहले कभी स्कॉटलैंड गए हैं, या यह आपकी पहली यात्रा है?',
      expectedFunction: 'Answer Experience Question & State Prior Visits (have been to / have never explored / ask Carlos)',
      contextGoal:
        'Explain that you have been to Edinburgh once before for a work trip, but you have never visited the Highlands or Loch Ness; ask Carlos if he has been to the Isle of Skye.',
      targetVocabulary: ['have been to Edinburgh once before', 'have never visited the Highlands or Loch Ness', 'have you ever been to the Isle of Skye?'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'Hi Carlos! I have been to Edinburgh once before for a short work conference, but I have never visited the Highlands or Loch Ness. Have you ever explored the Isle of Skye?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Present Perfect Experience (have been to / once / work / conference)',
          patterns: ['have been to', 'been to', 'visited', 'once', 'conference', 'work', 'edinburgh', 'before'],
          required: true,
        },
        {
          name: 'Negative Experience (have never visited / never seen / Highlands / Loch Ness)',
          patterns: ['have never', 'never visited', 'never seen', 'never explored', 'highlands', 'loch ness', 'never been'],
          required: true,
        },
        {
          name: 'Follow-up Question (have you ever / Isle of Skye / Scotland)',
          patterns: ['have you ever', 'isle of skye', 'and you', 'what about you', 'have you been'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'have_never_double_neg',
          pattern: /\bi haven't never\b|\bi have not never\b/i,
          errorType: 'grammar',
          message: 'Avoid double negatives: say "I have never visited the Highlands".',
          correctionPattern: 'I have never visited the Highlands',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_122_1',
        type: 'multiple_choice',
        prompt: 'Which response correctly answers a life experience question?',
        options: [
          { id: 'opt_1', text: 'I have been to Scotland once, but I have never seen Loch Ness.', isCorrect: true },
          { id: 'opt_2', text: 'I was go to Scotland once, but never I saw.', isCorrect: false },
          { id: 'opt_3', text: 'I am never been to Scotland.', isCorrect: false },
        ],
        correctAnswer: 'I have been to Scotland once, but I have never seen Loch Ness.',
        explanation: 'Correct use of "have been to" and "have never seen".',
      },
    },
    {
      id: 'turn_a2_122_2',
      turnIndex: 2,
      partnerPrompt:
        'Yes, I have been to the Isle of Skye four times—the mountain landscapes are breathtaking for photography! What about local Scottish cuisine? Have you ever tried traditional haggis or Scottish salmon?',
      partnerAudioText:
        'Yes, I have been to the Isle of Skye four times—the mountain landscapes are breathtaking for photography! What about local Scottish cuisine? Have you ever tried traditional haggis or Scottish salmon?',
      partnerQuestionHindi:
        'हाँ, मैं चार बार आइल ऑफ स्काई जा चुका हूँ—फ़ोटोग्राफ़ी के लिए पहाड़ी परिदृश्य लुभावने हैं! स्थानीय स्कॉटिश व्यंजनों के बारे में क्या? क्या आपने कभी पारंपरिक हैगिस या स्कॉटिश सामन मछली चखी है?',
      expectedFunction: 'Describe Food Experiences (have tried salmon / have never tasted haggis)',
      contextGoal:
        'State that you have eaten fresh Scottish salmon many times and loved it, but you have never tried haggis because you are hesitant about the ingredients.',
      targetVocabulary: ['have eaten fresh Scottish salmon many times', 'have never tried traditional haggis', 'a bit nervous about the ingredients', 'delicious and fresh'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'I have eaten fresh Scottish salmon many times and it is delicious! However, I have never tried traditional haggis because I have always been a little nervous about the ingredients. Would you recommend it?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Positive Experience (have eaten / have tried / salmon / many times / delicious)',
          patterns: ['have eaten', 'have tried', 'salmon', 'delicious', 'many times', 'tasted', 'love it'],
          required: true,
        },
        {
          name: 'Negative Experience (have never tried / tasted / haggis / nervous / vegetarian)',
          patterns: ['have never tried', 'never tasted', 'never eaten', 'haggis', 'nervous', 'hesitant', 'ingredients'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_122_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I have ___ (never / not never) tried haggis before."',
        options: [
          { id: 'opt_1', text: 'never', isCorrect: true },
          { id: 'opt_2', text: 'not never', isCorrect: false },
          { id: 'opt_3', text: 'ever', isCorrect: false },
        ],
        correctAnswer: 'never',
        explanation: 'Use "never" for negative lifetime experiences.',
      },
    },
    {
      id: 'turn_a2_122_3',
      turnIndex: 3,
      partnerPrompt:
        'Vegetarian haggis with mashed turnips and potatoes is genuinely tasty, so you should try that first! What about adventurous travel? Have you ever ridden an overnight sleeper train or gone camping in cold weather?',
      partnerAudioText:
        'Vegetarian haggis with mashed turnips and potatoes is genuinely tasty, so you should try that first! What about adventurous travel? Have you ever ridden an overnight sleeper train or gone camping in cold weather?',
      partnerQuestionHindi:
        'शलजम और आलू के साथ शाकाहारी हैगिस वास्तव में स्वादिष्ट होता है, इसलिए आपको पहले इसे आज़माना चाहिए! साहसिक यात्रा के बारे में क्या? क्या आप कभी रात की स्लीपर ट्रेन में बैठे हैं या ठंड के मौसम में कैंपिंग करने गए हैं?',
      expectedFunction: 'Describe Adventurous Experiences (have ridden sleeper train / have never camped in snow)',
      contextGoal:
        'Explain that you have ridden the Caledonian Sleeper train from London to Edinburgh and loved waking up in the Highlands, but you have never camped in freezing weather.',
      targetVocabulary: ['have ridden the Caledonian Sleeper train', 'loved waking up to sunrise over the hills', 'have never camped in freezing weather', 'prefer warm hotels'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'I have ridden the Caledonian Sleeper train from London to Edinburgh, and I loved waking up to sunrise over the hills! But I have never camped in freezing weather because I prefer staying in a warm hotel.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Sleeper Train Experience (have ridden / taken / sleeper train / london / caledonian)',
          patterns: ['have ridden', 'have taken', 'sleeper train', 'caledonian', 'train', 'london', 'sunrise', 'loved'],
          required: true,
        },
        {
          name: 'Camping Experience (have never camped / camping / freezing / cold / hotel)',
          patterns: ['have never camped', 'never gone camping', 'camping', 'freezing', 'cold weather', 'hotel', 'never tried'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_122_3',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly uses the past participle of "ride"?',
        options: [
          { id: 'opt_1', text: 'I have ridden the night sleeper train twice.', isCorrect: true },
          { id: 'opt_2', text: 'I have rode the night sleeper train.', isCorrect: false },
          { id: 'opt_3', text: 'I have rided the train.', isCorrect: false },
        ],
        correctAnswer: 'I have ridden the night sleeper train twice.',
        explanation: 'The past participle of "ride" is "ridden".',
      },
    },
    {
      id: 'turn_a2_122_4',
      turnIndex: 4,
      partnerPrompt:
        'The Caledonian Sleeper is such an iconic British experience! A group of us from this meetup are planning a weekend photo tour to Glen Coe next month. Would you be interested in joining us if you have free time?',
      partnerAudioText:
        'The Caledonian Sleeper is such an iconic British experience! A group of us from this meetup are planning a weekend photo tour to Glen Coe next month. Would you be interested in joining us if you have free time?',
      partnerQuestionHindi:
        'कैलेडोनियन स्लीपर एक प्रतिष्ठित ब्रिटिश अनुभव है! इस मीटअप से हमारा एक समूह अगले महीने ग्लेन को के लिए एक सप्ताहांत फोटो टूर की योजना बना रहा है। यदि आपके पास खाली समय हो तो क्या आप हमारे साथ शामिल होने में रुचि रखेंगे?',
      expectedFunction: 'Express Enthusiasm, Exchange Contact & Conclude Conversation',
      contextGoal:
        'Accept the invitation enthusiastically; state that you have always wanted to see Glen Coe; offer to share your WhatsApp contact to stay in touch.',
      targetVocabulary: ['would love to join the photo trip', 'have always wanted to see Glen Coe', 'let’s exchange WhatsApp numbers', 'great meeting you Carlos'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'I would love to join! I have always wanted to see Glen Coe in person. Let’s exchange WhatsApp numbers so you can add me to the group chat. It was great meeting you, Carlos!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Enthusiastic Acceptance (love to join / always wanted / glen coe / photo tour)',
          patterns: ['love to join', 'would love', 'always wanted', 'glen coe', 'photo tour', 'interested', 'count me in'],
          required: true,
        },
        {
          name: 'Contact Exchange & Goodbye (exchange / whatsapp / number / great meeting / carlos)',
          patterns: ['exchange', 'whatsapp', 'numbers', 'chat', 'contact', 'great meeting', 'carlos', 'thanks'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_122_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I have always ___ (want) to visit Glen Coe."',
        options: [
          { id: 'opt_1', text: 'wanted', isCorrect: true },
          { id: 'opt_2', text: 'want', isCorrect: false },
          { id: 'opt_3', text: 'wanting', isCorrect: false },
        ],
        correctAnswer: 'wanted',
        explanation: 'Use the past participle "wanted" after "have always".',
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
