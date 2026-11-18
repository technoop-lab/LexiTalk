import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_259: ConversationDefinition = {
  id: 'conv_a2_259',
  title: 'Personal Experiences, Memories & What Happened',
  cefr: 'A2',
  unitId: 'unit_a2_18',
  lessonLinks: ['lesson_a2_18_259'],
  estimatedMinutes: 5,
  scenario:
    'You are in a language exchange storytelling circle with facilitator Maya. You share a memorable travel experience from your past: an unexpected detour during a train journey to the mountains, what happened when you missed a connecting train, how local strangers helped you, and how the adventure ended happily.',
  communicativeGoals: [
    'Narrate a short, coherent personal story or past experience in A2 English',
    'Combine Past Simple and Past Continuous for setting and interruption: "While I was traveling on the train, suddenly..."',
    'Use narrative sequence markers: "First...", "Then...", "Suddenly...", "Fortunately...", "In the end..."',
    'Reflect on the personal memory and ask a conversational follow-up question',
  ],
  canDoStatements: [
    'Can tell a simple personal story about a past trip or memorable event in sequential order',
    'Can describe what was happening when an unexpected event interrupted the situation',
    'Can explain how the event concluded and share a positive personal takeaway',
  ],
  characters: [
    {
      id: 'char_maya_storyteller',
      name: 'Maya',
      role: 'Storytelling Circle Facilitator',
      avatar: '📖',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'memorable',
        ipa: '/ˈmemərəbl/',
        partOfSpeech: 'adjective',
        meaning: 'Easily remembered, especially because of being special, unusual, or enjoyable',
        exampleSentence: 'My train trip to the mountain village was an unforgettable and memorable experience.',
        translations: { hi: 'यादगार (मेमरेबल)' },
      },
      {
        word: 'detour',
        ipa: '/ˈdiːtʊə/',
        partOfSpeech: 'noun',
        meaning: 'A long or roundabout route taken to avoid something or visit somewhere along the way',
        exampleSentence: 'Because of heavy rain, our bus had to take a scenic detour through the hills.',
        translations: { hi: 'चक्करदार रास्ता / अनपेक्षित मोड़ (डीटूर)' },
      },
      {
        word: 'fortunately',
        ipa: '/ˈfɔːtʃənətli/',
        partOfSpeech: 'adverb',
        meaning: 'By good luck; luckily',
        exampleSentence: 'Fortunately, a friendly local baker gave us accurate directions.',
        translations: { hi: 'सौभाग्य से / गनीमत है (फॉर्च्युनेटली)' },
      },
      {
        word: 'adventure',
        ipa: '/ədˈventʃə/',
        partOfSpeech: 'noun',
        meaning: 'An unusual and exciting, typically hazardous, experience or activity',
        exampleSentence: 'What started as a travel delay turned into a wonderful adventure.',
        translations: { hi: 'रोमांचक यात्रा / साहसिक अनुभव (एडवेंचर)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'A couple of years ago, I was traveling to...',
        functionCategory: 'Setting the background time and location',
        exampleSentence: 'A couple of years ago, I was traveling to a historic hill town in the north.',
      },
      {
        phrase: 'While we were waiting on the platform, suddenly...',
        functionCategory: 'Introducing an unexpected past interruption',
        exampleSentence: 'While we were waiting on the platform, suddenly the announcement board changed.',
      },
      {
        phrase: 'Fortunately, a friendly stranger noticed and...',
        functionCategory: 'Describing helpful assistance during a crisis',
        exampleSentence: 'Fortunately, a friendly stranger noticed our confusion and guided us to the right bus.',
      },
      {
        phrase: 'In the end, everything turned out great.',
        functionCategory: 'Concluding a past narrative with positive resolution',
        exampleSentence: 'In the end, we arrived safely and enjoyed the best hot tea in the valley.',
      },
    ],
    grammar: {
      title: 'A2 Narrative Grammar: Past Continuous for Background + Past Simple for Action',
      conceptExplanation:
        '1. Setting the scene: "I was traveling on the train..." / "The sun was shining..." (Past Continuous)\n2. Interruption: "Suddenly, the train stopped / I dropped my ticket" (Past Simple)\n3. Sequence flow: First → Next → Then → Fortunately → In the end\n4. Conversational reflection: "It taught me that..." or "Have you ever had a similar experience?"',
      patternFormula: 'While I was [Past Continuous Action], suddenly [Past Simple Event]. Fortunately, [Solution]. In the end, [Resolution].',
      contrastExamples: [
        {
          incorrect: 'While I was travel, the train was stopping.',
          correct: 'While I was traveling, the train suddenly stopped.',
          explanation: 'Past Continuous for ongoing background; Past Simple for single interruptive event.',
        },
        {
          incorrect: 'In the end of story, we arrive happy.',
          correct: 'In the end, we arrived safely and had a wonderful dinner.',
          explanation: 'Use "In the end" as a discourse adverb, followed by Past Simple "arrived".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Maya',
        text: 'Welcome to our story circle! Today we are sharing unforgettable travel memories. Where did your story take place?',
        translation: 'हमारे कहानी वृत्त में आपका स्वागत है! आज हम अविस्मरणीय यात्रा की यादें साझा कर रहे हैं। आपकी कहानी कहाँ घटी?',
      },
      {
        speaker: 'Learner',
        text: 'A couple of years ago, I was traveling by train to a quiet mountain town. While I was enjoying the view, the train was delayed and I missed my connecting bus.',
        translation: 'दो साल पहले, मैं ट्रेन से एक शांत पहाड़ी शहर की यात्रा कर रहा था। जब मैं दृश्य का आनंद ले रहा था, ट्रेन में देरी हो गई और मेरी कनेक्टिंग बस छूट गई।',
      },
      {
        speaker: 'Maya',
        text: 'Oh no! What happened next, and how did you resolve the situation?',
        translation: 'अरे नहीं! आगे क्या हुआ, और आपने स्थिति को कैसे संभाला?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_259_1',
      type: 'fill_blank',
      prompt: 'Complete: "While we were ______ (walking / walk / walked) through the village, it started to rain."',
      options: [
        { id: 'opt_1', text: 'walking', isCorrect: true },
        { id: 'opt_2', text: 'walk', isCorrect: false },
        { id: 'opt_3', text: 'walked', isCorrect: false },
      ],
      correctAnswer: 'walking',
      explanation: 'Past continuous: were + -ing form "walking".',
    },
    {
      id: 'cp_259_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly sequences an interruption during a trip?',
      options: [
        { id: 'opt_1', text: 'While I was looking for the platform, suddenly the train conductor announced a delay.', isCorrect: true },
        { id: 'opt_2', text: 'While I looked platform suddenly train is announce delay.', isCorrect: false },
        { id: 'opt_3', text: 'I was look for platform and train is delayed yesterday.', isCorrect: false },
      ],
      correctAnswer: 'While I was looking for the platform, suddenly the train conductor announced a delay.',
      explanation: 'Past continuous background clause + past simple event.',
    },
    {
      id: 'cp_259_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [In the end, / we reached the mountain lodge / and enjoyed a hot meal]',
      correctAnswer: 'In the end, we reached the mountain lodge and enjoyed a hot meal',
      explanation: 'Narrative resolution marker + main clause + compound predicate.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_259_1',
      prompt: 'Construct a sentence stating that while I was waiting for the bus, a kind local showed me the shortcut.',
      scenarioContext: 'Narrating your travel memory.',
      targetStructure: 'While I was waiting for the bus, a kind local showed me the shortcut.',
      wordBank: ['While I was waiting', 'for the bus, a', 'kind local showed me', 'the shortcut.', 'am waiting for', 'showed to me'],
      acceptableSolutions: [
        'While I was waiting for the bus, a kind local showed me the shortcut.',
        'While I was waiting for the bus, a friendly local showed me the shortcut.',
      ],
      explanation: 'Past continuous background clause + past simple main clause.',
    },
    {
      id: 'sc_259_2',
      prompt: 'Construct a sentence stating that in the end, it became one of my most memorable travel adventures.',
      scenarioContext: 'Reflecting on the outcome.',
      targetStructure: 'In the end, it became one of my most memorable travel adventures.',
      wordBank: ['In the end, it', 'became one of my', 'most memorable travel', 'adventures.', 'in end it', 'memorable of adventure'],
      acceptableSolutions: [
        'In the end, it became one of my most memorable travel adventures.',
        'In the end, it was one of my most memorable travel adventures.',
      ],
      explanation: 'Narrative transition + linking verb + superlative noun phrase.',
    },
  ],
  turns: [
    {
      id: 'turn_259_1',
      turnIndex: 1,
      partnerPrompt:
        'Welcome everyone! Today each of us is sharing a memorable personal story from the past. When and where did your favorite memorable experience happen?',
      partnerAudioText:
        'Welcome everyone! Today each of us is sharing a memorable personal story from the past. When and where did your favorite memorable experience happen?',
      partnerQuestionHindi:
        'सभी का स्वागत है! आज हममें से प्रत्येक अतीत से एक यादगार व्यक्तिगत कहानी साझा कर रहा है। आपका पसंदीदा यादगार अनुभव कब और कहाँ हुआ था?',
      expectedFunction: 'Introducing the setting (time, place, companions, purpose of journey) using past continuous / past simple',
      contextGoal: 'Greet Maya, set the scene (e.g. two years ago traveling to the mountains / coastal town by train), and establish what you were doing',
      targetVocabulary: ['Hello Maya', 'a couple of years ago', 'I was traveling to the mountains', 'by train', 'on holiday with my friend', 'beautiful scenery'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffolding',
          text: 'Hello Maya! About two years ago, I was traveling by train to a picturesque mountain village for a weekend vacation with my close friend. The weather was crisp and the scenery outside was truly beautiful.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Independent Production',
          text: 'Hi Maya. A few years ago, I went on a train journey to the northern hills. While we were riding through the valley, I was really looking forward to a quiet hike.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_maya',
          patterns: ['hello', 'hi', 'maya', 'good afternoon', 'good morning'],
          required: true,
        },
        {
          name: 'time_place_setting',
          patterns: ['years ago', 'last year', 'traveling', 'train', 'bus', 'trip', 'mountains', 'city', 'hills', 'vacation', 'holiday', 'friend'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_259_1_was_travel_bare',
          pattern: /i was travel\b/i,
          errorType: 'grammar',
          message: 'Say "I was traveling" (past continuous) or "I traveled" (past simple).',
          correctionPattern: 'I was traveling to the mountains by train.',
        },
      ],
      remediationPractice: {
        id: 'rem_259_1',
        type: 'fill_blank',
        prompt: 'Fill in: "Two years ago, I ______ (traveled / was travel) by train."',
        options: [
          { id: 'r1', text: 'traveled', isCorrect: true },
          { id: 'r2', text: 'was travel', isCorrect: false },
        ],
        correctAnswer: 'traveled',
        explanation: 'Past simple "traveled" describes a completed action in the past.',
      },
    },
    {
      id: 'turn_259_2',
      turnIndex: 2,
      partnerPrompt:
        'That sounds like a wonderful destination! What unexpected event happened during the journey, and how did you feel at that moment?',
      partnerAudioText:
        'That sounds like a wonderful destination! What unexpected event happened during the journey, and how did you feel at that moment?',
      partnerQuestionHindi:
        'यह एक शानदार गंतव्य लगता है! यात्रा के दौरान क्या अनपेक्षित घटना घटी, और उस समय आपने कैसा महसूस किया?',
      expectedFunction: 'Narrating an unexpected complication and emotional reaction using "Suddenly...", "While we were...", "I felt worried"',
      contextGoal: 'Explain that the train broke down or was delayed, you missed the connecting bus, but a friendly local stranger stepped in to help',
      targetVocabulary: ['Suddenly', 'the train was delayed', 'we missed the connecting bus', 'I felt worried and confused', 'fortunately a friendly local', 'offered help'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffolding',
          text: 'Suddenly, our train stopped due to engine trouble and was delayed by an hour. Because of that, we missed our connecting bus to the village! I felt very worried at first, but fortunately, a kind local cafe owner noticed us and offered to call a local shared taxi.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Independent Production',
          text: 'While we were waiting at the station, an announcement said our connection was cancelled. I was nervous because it was getting dark, but a helpful local resident showed us a safe alternate route.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'complication_event',
          patterns: ['suddenly', 'delayed', 'missed', 'stopped', 'cancelled', 'bus', 'train', 'engine', 'trouble', 'lost', 'broke down'],
          required: true,
        },
        {
          name: 'feelings_and_help',
          patterns: ['worried', 'nervous', 'confused', 'fortunately', 'kind', 'local', 'stranger', 'helped', 'taxi', 'route'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_259_2_miss_past',
          pattern: /we miss our bus yesterday|we miss the connecting/i,
          errorType: 'grammar',
          message: 'Use past tense: "we missed our connecting bus".',
          correctionPattern: 'We missed our connecting bus because of the train delay.',
        },
      ],
      remediationPractice: {
        id: 'rem_259_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly expresses an unexpected past event and feeling?',
        options: [
          { id: 'r1', text: 'We missed the connecting bus, so I felt quite worried.', isCorrect: true },
          { id: 'r2', text: 'We miss connecting bus so I am feel worry yesterday.', isCorrect: false },
        ],
        correctAnswer: 'We missed the connecting bus, so I felt quite worried.',
        explanation: 'Past tense verbs "missed" and "felt" are required.',
      },
    },
    {
      id: 'turn_259_3',
      turnIndex: 3,
      partnerPrompt:
        'What a great turning point! How did the story end, what did you learn from the experience, and do you have a question for the circle?',
      partnerAudioText:
        'What a great turning point! How did the story end, what did you learn from the experience, and do you have a question for the circle?',
      partnerQuestionHindi:
        'क्या शानदार मोड़ है! कहानी कैसे समाप्त हुई, आपने इस अनुभव से क्या सीखा, और क्या आपके पास कहानी वृत्त के लिए कोई प्रश्न है?',
      expectedFunction: 'Concluding the narrative, sharing a life lesson, and asking Maya or the group a follow-up question',
      contextGoal: 'Explain the happy ending (reached the lodge, had dinner), state what you learned (stay calm, trust kindness), and ask "Have you ever had a similar travel surprise?"',
      targetVocabulary: ['In the end', 'we arrived safely at the lodge', 'enjoyed a warm meal', 'it taught me to stay calm', 'what about you Maya', 'have you ever had an unexpected travel adventure'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffolding',
          text: 'In the end, we arrived safely at the mountain lodge and enjoyed a delicious hot meal by the fireplace. That experience taught me to stay calm when plans change and trust the kindness of people. What about you, Maya? Have you ever had an unexpected adventure while traveling?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Independent Production',
          text: 'In the end, everything turned out perfectly. It became the highlight of our vacation! It taught me that unexpected detours can lead to great memories. Have you ever experienced something like that, Maya?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'resolution_and_lesson',
          patterns: ['in the end', 'finally', 'arrived', 'safe', 'safely', 'meal', 'lodge', 'taught me', 'stay calm', 'kindness', 'memories'],
          required: true,
        },
        {
          name: 'followup_question',
          patterns: ['what about you', 'have you ever', 'maya', 'you', 'similar', 'adventure', 'traveling', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_259_3_have_you_ever_base',
          pattern: /have you ever have|have you ever experience\b/i,
          errorType: 'grammar',
          message: 'Use past participle in Present Perfect question: "Have you ever had..." or "Have you ever experienced...".',
          correctionPattern: 'Have you ever had an unexpected travel adventure?',
        },
      ],
      remediationPractice: {
        id: 'rem_259_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [In the end, we arrived safely / and it taught me to stay calm / when plans change]',
        correctAnswer: 'In the end, we arrived safely and it taught me to stay calm when plans change',
        explanation: 'Resolution clause + compound lesson clause.',
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
