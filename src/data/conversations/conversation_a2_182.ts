import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_182: ConversationDefinition = {
  id: 'conv_a2_182',
  title: 'Weather Extremes, Seasonal Activities & Outdoor Adventures',
  cefr: 'A2',
  unitId: 'unit_a2_13',
  lessonLinks: ['lesson_a2_13_182'],
  estimatedMinutes: 5,
  scenario:
    'You are planning a weekend mountain trip with your friend Liam. You are discussing the changing weather forecast, severe wind and rain warnings, and deciding whether to go camping or rent a cabin using conditional sentences.',
  communicativeGoals: [
    'Use Zero and First Conditionals with "if", "when", and "unless" to discuss plans based on weather forecasts',
    'Express concerns about severe weather (thunderstorm, strong winds, temperature drops)',
    'Suggest alternative outdoor gear and backup plans',
    'Make collaborative decisions and reach mutual agreements',
  ],
  canDoStatements: [
    'Can describe weather conditions, temperature changes, and storm warnings in English',
    'Can form First Conditional sentences (If + present, will + verb) to plan activities',
    'Can use "unless" (meaning "if not") to set conditions for outdoor plans',
  ],
  characters: [
    {
      id: 'char_liam_friend',
      name: 'Liam',
      role: 'Outdoor Activity Partner',
      avatar: '⛅',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'forecast',
        ipa: '/ˈfɔːkɑːst/',
        partOfSpeech: 'noun',
        meaning: 'A prediction of weather conditions for the near future',
        exampleSentence: 'The weather forecast predicts heavy rain on Saturday.',
        translations: { hi: 'मौसम का पूर्वानुमान' },
      },
      {
        word: 'thunderstorm',
        ipa: '/ˈθʌndəstɔːm/',
        partOfSpeech: 'noun',
        meaning: 'A storm with thunder, lightning, and typically heavy rain',
        exampleSentence: 'If there is a thunderstorm, we will stay indoors.',
        translations: { hi: 'तूफ़ान / गरज के साथ बारिश' },
      },
      {
        word: 'temperature',
        ipa: '/ˈtemprətʃə(r)/',
        partOfSpeech: 'noun',
        meaning: 'The degree of heat or cold in an environment',
        exampleSentence: 'The temperature drops quickly at night in the mountains.',
        translations: { hi: 'तापमान' },
      },
      {
        word: 'unless',
        ipa: '/ənˈles/',
        partOfSpeech: 'conjunction',
        meaning: 'Except if; if not',
        exampleSentence: 'We cannot go hiking unless the rain stops.',
        translations: { hi: 'जब तक कि ... न' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'If it rains tomorrow, we will rent a cabin.',
        functionCategory: 'First conditional contingency',
        exampleSentence: 'If the weather improves, we will hike to the peak.',
      },
      {
        phrase: 'We won’t go outside unless the storm passes.',
        functionCategory: 'Expressing conditions with unless',
        exampleSentence: 'You will catch a cold unless you wear a warm jacket.',
      },
      {
        phrase: 'What does the latest weather report say?',
        functionCategory: 'Asking for forecast information',
        exampleSentence: 'What should we do if it gets windy?',
      },
      {
        phrase: 'That sounds like a sensible backup plan.',
        functionCategory: 'Agreeing on weather contingency',
        exampleSentence: 'Let’s check the radar before we leave.',
      },
    ],
    grammar: {
      title: 'First Conditional with "if", "when", and "unless"',
      conceptExplanation:
        '1. First Conditional expresses real future possibilities:\n   Formula: If + Present Simple, will / won\'t + base verb\n   Example: "If it rains, we will stay inside."\n2. "Unless" means "except if" or "if not":\n   Example: "We will cancel the hike unless it clears up." (= If it does not clear up, we will cancel.)\n3. Do not put "will" inside the "if" or "unless" clause!\n   Incorrect: If it will rain... (Use: If it rains...)',
      patternFormula: 'If / Unless + [Subject + Present Simple], [Subject + will / won\'t + Verb]',
      contrastExamples: [
        {
          incorrect: 'If it will be sunny, we will go camping.',
          correct: 'If it is sunny, we will go camping.',
          explanation: 'In the condition clause (after if), use Present Simple, not future "will".',
        },
        {
          incorrect: 'We will not hike unless it will rain.',
          correct: 'We will not hike unless the weather is good.',
          explanation: '"Unless" already contains negative condition ("if not").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Liam',
        text: 'Did you check the forecast for our mountain trip this Saturday?',
        translation: 'क्या तुमने इस शनिवार की हमारी पहाड़ी यात्रा के लिए मौसम का पूर्वानुमान देखा?',
      },
      {
        speaker: 'Learner',
        text: 'Yes! If it rains heavily, we will stay at a cozy cabin instead.',
        translation: 'हाँ! अगर भारी बारिश होती है, तो हम उसकी जगह एक आरामदायक केबिन में ठहरेंगे।',
      },
      {
        speaker: 'Liam',
        text: 'Great idea. We won\'t camp outside unless the sky is completely clear.',
        translation: 'शानदार विचार। जब तक आसमान पूरी तरह साफ नहीं होता, हम बाहर कैंपिंग नहीं करेंगे।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_182_1',
      type: 'fill_blank',
      prompt: 'Choose the correct form: "If the temperature ______ (drop) tonight, we will build a campfire."',
      options: [
        { id: 'opt_1', text: 'drops', isCorrect: true },
        { id: 'opt_2', text: 'will drop', isCorrect: false },
        { id: 'opt_3', text: 'dropped', isCorrect: false },
      ],
      correctAnswer: 'drops',
      explanation: 'In the if-clause of a First Conditional, use Present Simple (drops).',
    },
    {
      id: 'cp_182_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "unless"?',
      options: [
        { id: 'opt_1', text: 'We will not go kayaking unless the wind dies down.', isCorrect: true },
        { id: 'opt_2', text: 'We will not go kayaking unless if the wind dies down.', isCorrect: false },
        { id: 'opt_3', text: 'We will go kayaking unless it will be sunny.', isCorrect: false },
      ],
      correctAnswer: 'We will not go kayaking unless the wind dies down.',
      explanation: '"Unless" means "if not", followed by a present simple clause.',
    },
    {
      id: 'cp_182_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [if / we / cancel / will / the storm arrives / the hike]',
      correctAnswer: 'we will cancel the hike if the storm arrives',
      explanation: 'Result clause + If + condition clause.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_182_1',
      prompt: 'Construct a First Conditional sentence stating you will pack waterproof jackets if it rains.',
      scenarioContext: 'Preparing gear with Liam.',
      targetStructure: 'If it rains, we will pack waterproof jackets.',
      wordBank: ['If', 'it', 'rains,', 'we', 'will pack', 'waterproof', 'jackets', 'tomorrow'],
      acceptableSolutions: [
        'If it rains, we will pack waterproof jackets.',
        'We will pack waterproof jackets if it rains.',
      ],
      explanation: 'Use "If it rains" (present) followed by "we will pack" (future).',
    },
    {
      id: 'sc_182_2',
      prompt: 'Construct a sentence with "unless" stating we cannot hike unless the fog clears.',
      scenarioContext: 'Evaluating morning visibility.',
      targetStructure: 'We cannot hike unless the fog clears.',
      wordBank: ['We', 'cannot hike', 'unless', 'the fog', 'clears', 'by noon'],
      acceptableSolutions: [
        'We cannot hike unless the fog clears.',
        'We will not hike unless the fog clears.',
      ],
      explanation: 'Structure: [Subject + cannot/will not + verb] + [unless + condition].',
    },
  ],
  turns: [
    {
      id: 'turn_182_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! I just looked at the weather app. It says there is an 80% chance of rain and strong wind on Saturday afternoon. What do you think we should do about our hiking plan?',
      partnerAudioText:
        'Hey! I just looked at the weather app. It says there is an 80% chance of rain and strong wind on Saturday afternoon. What do you think we should do about our hiking plan?',
      partnerQuestionHindi:
        'अरे! मैंने अभी वेदर ऐप देखा। यह कहता है कि शनिवार दोपहर को 80% बारिश और तेज हवा चलने की संभावना है। हमारी हाइकिंग योजना के बारे में क्या करना चाहिए?',
      expectedFunction: 'Suggesting a weather-dependent conditional plan',
      contextGoal: 'Propose a conditional plan (e.g., if it rains, hike in the morning or rent a cabin)',
      targetVocabulary: ['rain', 'if', 'wind', 'morning', 'plan'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'If it rains in the afternoon, we will start early in the morning.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'If the weather gets bad, we can visit the mountain museum instead.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I saw that too! If there are strong winds, we should avoid the high mountain peaks.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'conditional_clause',
          patterns: ['if', 'rains', 'bad', 'wind', 'storm', 'forecast'],
          required: true,
        },
        {
          name: 'action_plan',
          patterns: ['will', 'can', 'should', 'start', 'early', 'morning', 'cabin', 'museum', 'avoid'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_182_1_will_in_if',
          pattern: /if it will rain/i,
          errorType: 'grammar',
          message: 'Do not use "will" after "if". Say "If it rains...".',
          correctionPattern: 'If it rains...',
        },
      ],
      remediationPractice: {
        id: 'rem_182_1',
        type: 'fill_blank',
        prompt: 'Fill in: "If it ______ (rain), we will stay inside."',
        options: [
          { id: 'r1', text: 'rains', isCorrect: true },
          { id: 'r2', text: 'will rain', isCorrect: false },
        ],
        correctAnswer: 'rains',
        explanation: 'Use present simple after "if".',
      },
    },
    {
      id: 'turn_182_2',
      turnIndex: 2,
      partnerPrompt:
        'Starting early is a smart idea. But what about camping overnight in our tent? The temperature might drop below 5 degrees at night with heavy showers.',
      partnerAudioText:
        'Starting early is a smart idea. But what about camping overnight in our tent? The temperature might drop below 5 degrees at night with heavy showers.',
      partnerQuestionHindi:
        'जल्दी शुरुआत करना एक समझदारी भरा विचार है। लेकिन हमारे तंबू में रात भर कैंपिंग करने का क्या? भारी बारिश के साथ रात में तापमान 5 डिग्री से नीचे गिर सकता है।',
      expectedFunction: 'Formulating a condition with "unless" or "if" for lodging',
      contextGoal: 'Suggest renting a wooden cabin or bringing warm thermal gear if temperature drops',
      targetVocabulary: ['unless', 'cabin', 'cold', 'temperature', 'warm'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'We should not sleep in a tent unless the weather stays completely dry.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'If it is too cold and wet, let us book a small wooden cabin.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Unless we have warm sleeping bags and dry conditions, a cabin is much safer.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'condition_marker',
          patterns: ['unless', 'if', 'dry', 'cold', 'wet'],
          required: true,
        },
        {
          name: 'alternative_lodging',
          patterns: ['cabin', 'tent', 'sleep', 'book', 'rent', 'stay', 'bags', 'warm'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_182_2_unless_neg',
          pattern: /unless it doesn't rain/i,
          errorType: 'grammar',
          message: '"Unless" already means "if not". Use a positive clause: "unless it rains" or "unless it is dry".',
          correctionPattern: 'unless it stays dry',
        },
      ],
      remediationPractice: {
        id: 'rem_182_2',
        type: 'multiple_choice',
        prompt: 'Which sentence is correct?',
        options: [
          { id: 'r1', text: 'We won\'t camp unless the sky is clear.', isCorrect: true },
          { id: 'r2', text: 'We won\'t camp unless the sky won\'t be clear.', isCorrect: false },
        ],
        correctAnswer: 'We won\'t camp unless the sky is clear.',
        explanation: 'Use present tense affirmative after unless.',
      },
    },
    {
      id: 'turn_182_3',
      turnIndex: 3,
      partnerPrompt:
        'I found a cozy wooden cabin right by the forest trail! I will book it now. What gear should we pack so we are prepared for any sudden changes in the weather?',
      partnerAudioText:
        'I found a cozy wooden cabin right by the forest trail! I will book it now. What gear should we pack so we are prepared for any sudden changes in the weather?',
      partnerQuestionHindi:
        'मुझे जंगल के रास्ते के ठीक पास एक आरामदायक लकड़ी का केबिन मिल गया! मैं इसे अभी बुक कर देता हूँ। हमें क्या सामान पैक करना चाहिए ताकि हम मौसम में अचानक होने वाले बदलावों के लिए तैयार रहें?',
      expectedFunction: 'Recommending appropriate outdoor clothing and safety equipment',
      contextGoal: 'List key items like waterproof jackets, extra socks, flashlights, and hiking boots',
      targetVocabulary: ['jacket', 'waterproof', 'boots', 'flashlight', 'pack'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'We must pack waterproof jackets, sturdy boots, and warm layers.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'If it gets dark or foggy, we will need flashlights and a map too.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Let us bring raincoats, extra thermal socks, water bottles, and a first-aid kit.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'gear_recommendation',
          patterns: ['pack', 'bring', 'need', 'must', 'should', 'wear'],
          required: true,
        },
        {
          name: 'weather_gear',
          patterns: ['jacket', 'boots', 'waterproof', 'raincoat', 'warm', 'flashlight', 'map', 'socks', 'kit'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_182_3_waterproof',
          pattern: /water resist coat/i,
          errorType: 'vocabulary',
          message: 'The standard term is "waterproof jacket" or "raincoat".',
          correctionPattern: 'waterproof jacket',
        },
      ],
      remediationPractice: {
        id: 'rem_182_3',
        type: 'fill_blank',
        prompt: 'Fill in: "Take a ______ (waterproof) jacket in case it rains."',
        options: [
          { id: 'r1', text: 'waterproof', isCorrect: true },
          { id: 'r2', text: 'watered', isCorrect: false },
        ],
        correctAnswer: 'waterproof',
        explanation: 'Waterproof means impervious to water.',
      },
    },
    {
      id: 'turn_182_4',
      turnIndex: 4,
      partnerPrompt:
        'Awesome. I have packed the flashlights and first-aid kit. I will pick you up at 7:00 AM on Saturday. Does that time work for you?',
      partnerAudioText:
        'Awesome. I have packed the flashlights and first-aid kit. I will pick you up at 7:00 AM on Saturday. Does that time work for you?',
      partnerQuestionHindi:
        'बहुत बढ़िया। मैंने टॉर्च और प्राथमिक चिकित्सा किट पैक कर ली है। मैं आपको शनिवार सुबह 7:00 बजे लेने आऊँगा। क्या यह समय आपके लिए ठीक है?',
      expectedFunction: 'Confirming departure time and closing the conversation',
      contextGoal: 'Confirm that 7:00 AM works, express enthusiasm, and conclude the call',
      targetVocabulary: ['perfect', 'see you', 'Saturday', 'morning', 'ready'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: '7:00 AM is perfect! I will be ready outside. See you on Saturday, Liam!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'That works great for me. I look forward to the trip. See you then!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Sounds excellent! If I wake up earlier, I will prepare some sandwiches for us. See you Saturday!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'confirmation',
          patterns: ['perfect', 'great', 'works', 'sounds good', 'yes', '7:00'],
          required: true,
        },
        {
          name: 'closing_friendly',
          patterns: ['see you', 'saturday', 'look forward', 'ready', 'bye', 'trip'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_182_4_time_prep',
          pattern: /in 7:00/i,
          errorType: 'grammar',
          message: 'Use the preposition "at" with clock times (at 7:00 AM).',
          correctionPattern: 'at 7:00 AM',
        },
      ],
      remediationPractice: {
        id: 'rem_182_4',
        type: 'multiple_choice',
        prompt: 'Choose the correct preposition: "I will meet you ______ 7:00 AM."',
        options: [
          { id: 'r1', text: 'at', isCorrect: true },
          { id: 'r2', text: 'on', isCorrect: false },
          { id: 'r3', text: 'in', isCorrect: false },
        ],
        correctAnswer: 'at',
        explanation: 'We use "at" for specific times.',
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
