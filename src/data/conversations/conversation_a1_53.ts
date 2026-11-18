import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_53: ConversationDefinition = {
  id: 'conv_a1_53',
  title: 'Describing Past Experiences, Holidays & Memorable Events',
  cefr: 'A1',
  unitId: 'unit_a1_4',
  lessonLinks: ['lesson_a1_4_53'],
  estimatedMinutes: 5,
  scenario:
    'You meet your friend Clara at a cafe to catch up. She asks about your memorable vacation to the Scottish Highlands last summer. You describe where you went, how you traveled, what you visited (castles, scenic lochs, mountain trails), and what traditional food you tasted.',
  communicativeGoals: [
    'Narrate past holiday experiences and trips using regular and irregular Past Simple verbs (traveled, visited, hiked, went, saw, ate, stayed)',
    'Use past time markers accurately ("last summer", "three months ago", "for one week")',
    'Describe weather, activities, and feelings in the past ("The weather was sunny", "We had a wonderful time")',
    'Ask a conversation partner about their own recent travels and vacations ("Where did you go?")',
  ],
  canDoStatements: [
    'Can describe what they did on a past vacation or weekend trip (CEFR A1.2)',
    'Can use past time markers and irregular verbs (went, saw, ate, had)',
    'Can ask friends about their past travel experiences and holiday memories',
  ],
  characters: [
    {
      id: 'char_clara_friend',
      name: 'Clara',
      role: 'Travel-Loving Friend',
      avatar: '🌴',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'vacation',
        ipa: '/veɪˈkeɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'An extended period of leisure and recreation, especially one spent away from home or travelling',
        exampleSentence: 'Last summer, I took a ten-day vacation in the Scottish Highlands.',
        translations: { hi: 'छुट्टियां / अवकाश' },
      },
      {
        word: 'scenic',
        ipa: '/ˈsiːnɪk/',
        partOfSpeech: 'adjective',
        meaning: 'Providing or relating to views of impressive or beautiful natural scenery',
        exampleSentence: 'We took a scenic train ride through the green mountains.',
        translations: { hi: 'मनोरम / सुंदर दृश्यों वाला' },
      },
      {
        word: 'castle',
        ipa: '/ˈkɑːsəl/',
        partOfSpeech: 'noun',
        meaning: 'A large building, typically of the medieval period, fortified against attack',
        exampleSentence: 'We visited an ancient stone castle near the lake.',
        translations: { hi: 'किला / महल' },
      },
      {
        word: 'tasted',
        ipa: '/ˈteɪstɪd/',
        partOfSpeech: 'verb (past)',
        meaning: 'Sampled or experienced the flavor of food or drink',
        exampleSentence: 'We tasted delicious fresh salmon and local pastries.',
        translations: { hi: 'स्वाद चखा' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Last summer, I traveled to...',
        functionCategory: 'Past Holiday Narrative',
        exampleSentence: 'Last summer, I traveled to the Scottish Highlands.',
      },
      {
        phrase: 'We visited ancient castles and...',
        functionCategory: 'Activities in Past',
        exampleSentence: 'We visited ancient castles and hiked along mountain trails.',
      },
      {
        phrase: 'The weather was surprisingly...',
        functionCategory: 'Past Weather Description',
        exampleSentence: 'The weather was surprisingly warm and sunny every day.',
      },
      {
        phrase: 'Where did you go for your last trip?',
        functionCategory: 'Inquiring About Partner',
        exampleSentence: 'Where did you go for your last summer vacation, Clara?',
      },
    ],
    grammar: {
      title: 'Consolidating Past Simple: Regular (-ed) & Irregular Verbs with Time Markers',
      conceptExplanation:
        'Use Past Simple for completed actions in the past with specific time indicators (last year, two weeks ago, yesterday). Note irregular verb forms: go → went, see → saw, eat → ate, have → had. Questions: "Where did you go?" (Did + base verb).',
      patternFormula: 'Subject + [Past Verb] + [Location] + [Time Marker] | Did you + [Base Verb]...?',
      contrastExamples: [
        {
          incorrect: 'Last year I go to Scotland and see a castle.',
          correct: 'Last year I went to Scotland and saw a castle.',
          explanation: 'Use past irregular forms "went" and "saw" for past completed events.',
        },
        {
          incorrect: 'Where did you went on vacation?',
          correct: 'Where did you go on vacation?',
          explanation: 'After auxiliary "did", always use base verb "go", not "went".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Clara',
        text: 'It is so good to see you! I saw the amazing photos you posted online. Where did you go on holiday last summer?',
        translation: 'आपसे मिलकर बहुत अच्छा लगा! मैंने आपकी ऑनलाइन पोस्ट की गई तस्वीरें देखीं। आप पिछली गर्मियों में छुट्टी पर कहाँ गए थे?',
      },
      {
        speaker: 'You',
        text: 'I went to Scotland for seven days with my family. We rented a car and drove through the Highlands.',
        translation: 'मैं अपने परिवार के साथ सात दिनों के लिए स्कॉटलैंड गया था। हमने एक कार किराए पर ली और हाइलैंड्स की यात्रा की।',
      },
      {
        speaker: 'Clara',
        text: 'That sounds breathtaking! What did you do there, and what was the weather like?',
        translation: 'यह बहुत ही शानदार लगता है! आपने वहां क्या किया, और मौसम कैसा था?',
      },
      {
        speaker: 'You',
        text: 'We visited ancient castles, hiked near Loch Ness, and tasted local seafood. The weather was sunny and pleasant!',
        translation: 'हमने प्राचीन किलों का दौरा किया, लोच नेस के पास पदयात्रा की, और स्थानीय समुद्री भोजन का स्वाद चखा। मौसम धूपदार और सुहावना था!',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_53_1',
      type: 'fill_blank',
      prompt: 'Complete the past vacation sentence: "Last summer, we ___ to the mountains."',
      options: [
        { id: 'opt_1', text: 'traveled', isCorrect: true },
        { id: 'opt_2', text: 'traveling', isCorrect: false },
        { id: 'opt_3', text: 'travels', isCorrect: false },
      ],
      correctAnswer: 'traveled',
      explanation: 'Use Past Simple "-ed" verb form "traveled" with "Last summer".',
    },
    {
      id: 'cp_a1_53_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly asks about someone\'s past vacation?',
      options: [
        { id: 'opt_1', text: 'Where did you go on your last holiday?', isCorrect: true },
        { id: 'opt_2', text: 'Where did you went on your last holiday?', isCorrect: false },
        { id: 'opt_3', text: 'Where you did go on your holiday?', isCorrect: false },
      ],
      correctAnswer: 'Where did you go on your last holiday?',
      explanation: '"Where did + subject + base verb (go)?" is the correct question structure.',
    },
    {
      id: 'cp_a1_53_3',
      type: 'multiple_choice',
      prompt: 'Choose the sentence with correct irregular past tense verbs:',
      options: [
        { id: 'opt_1', text: 'We went to the beach, ate seafood, and saw dolphins.', isCorrect: true },
        { id: 'opt_2', text: 'We goed to the beach, eated seafood, and seed dolphins.', isCorrect: false },
        { id: 'opt_3', text: 'We go to the beach yesterday and see dolphins.', isCorrect: false },
      ],
      correctAnswer: 'We went to the beach, ate seafood, and saw dolphins.',
      explanation: 'Irregular past forms: go → went, eat → ate, see → saw.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_53_1',
      scenarioContext: 'Describe where you went and how long you stayed.',
      prompt: 'Build: "We stayed in Scotland for seven days last summer."',
      targetStructure: 'Subject + past verb + prepositional phrase + duration + time marker',
      wordBank: ['We', 'stayed', 'in', 'Scotland', 'for', 'seven', 'days', 'last', 'summer', 'stay', 'at'],
      acceptableSolutions: [
        'We stayed in Scotland for seven days last summer',
        'We stayed in Scotland for seven days last summer.',
      ],
      explanation: 'Past narrative structure with duration and time marker.',
    },
    {
      id: 'sc_a1_53_2',
      scenarioContext: 'Ask your friend about their favorite past vacation activity.',
      prompt: 'Build: "What did you visit during your trip?"',
      targetStructure: 'What did + subject + base verb + prepositional phrase?',
      wordBank: ['What', 'did', 'you', 'visit', 'during', 'your', 'trip', 'visited', 'do', 'are'],
      acceptableSolutions: [
        'What did you visit during your trip',
        'What did you visit during your trip?',
      ],
      explanation: 'Past question with "did + visit".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_53_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi! It is so lovely to see you again! I heard you took a trip recently. Where did you go on vacation, and who did you go with?',
      partnerAudioText:
        'Hi! It is so lovely to see you again! I heard you took a trip recently. Where did you go on vacation, and who did you go with?',
      partnerQuestionHindi:
        'नमस्ते! आपको फिर से देखकर बहुत अच्छा लगा! मैंने सुना है कि आप हाल ही में एक यात्रा पर गए थे। आप छुट्टी पर कहाँ गए थे, और आप किसके साथ गए थे?',
      expectedFunction: 'State Holiday Destination & Travel Companions in Past Simple',
      contextGoal:
        'State that you went to Scotland for a week last month/summer with your family or friends.',
      targetVocabulary: ['went to Scotland', 'last summer', 'with my family', 'for one week', 'took a trip'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hi Clara! Last summer, I went to Scotland for seven days with my family. We rented a car in Edinburgh and drove across the Highlands.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I went to Scotland with my family last summer. We stayed there for one week.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I went to Scotland with my family for a week!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Destination & Companions',
          patterns: [
            'went to scotland',
            'visited scotland',
            'with my family',
            'with my friends',
            'last summer',
            'last month',
            'for a week',
            'seven days',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'goed_scotland_error',
          pattern: /\bi goed to scotland\b/i,
          errorType: 'grammar',
          message: 'The past tense of "go" is "went", not "goed".',
          correctionPattern: 'I went to Scotland',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_53_1',
        type: 'fill_blank',
        prompt: 'Choose the past irregular form: "Last week, I ___ to London."',
        options: [
          { id: 'opt_1', text: 'went', isCorrect: true },
          { id: 'opt_2', text: 'goed', isCorrect: false },
          { id: 'opt_3', text: 'going', isCorrect: false },
        ],
        correctAnswer: 'went',
        explanation: 'Past tense of "go" is "went".',
      },
    },
    {
      id: 'turn_a1_53_2',
      turnIndex: 2,
      partnerPrompt:
        'Scotland sounds magical! What activities did you do during your trip, and what historic places or scenery did you visit?',
      partnerAudioText:
        'Scotland sounds magical! What activities did you do during your trip, and what historic places or scenery did you visit?',
      partnerQuestionHindi:
        'स्कॉटलैंड जादुई लगता है! आपने अपनी यात्रा के दौरान क्या गतिविधियाँ कीं, और आपने कौन से ऐतिहासिक स्थानों या दृश्यों का दौरा किया?',
      expectedFunction: 'List Past Activities & Sights (Visited castles, hiked mountains, saw lochs)',
      contextGoal:
        'Describe visiting ancient castles, hiking near lakes/mountains, and taking scenic photos.',
      targetVocabulary: ['visited castles', 'hiked in the mountains', 'saw lakes', 'took photos', 'scenic views'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'We visited famous medieval castles, hiked along mountain trails near Loch Ness, and took hundreds of scenic landscape photos!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'We visited ancient castles and hiked in the mountains. We also saw beautiful lakes.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'We visited old castles and hiked near the lake!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Past Activities & Sights',
          patterns: [
            'visited castles',
            'hiked',
            'mountains',
            'loch ness',
            'lakes',
            'took photos',
            'walked',
            'saw',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_53_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes past activities?',
        options: [
          { id: 'opt_1', text: 'We visited castles and hiked in the mountains.', isCorrect: true },
          { id: 'opt_2', text: 'We visit castles and hiking yesterday in mountain.', isCorrect: false },
          { id: 'opt_3', text: 'We are visited castles last summer.', isCorrect: false },
        ],
        correctAnswer: 'We visited castles and hiked in the mountains.',
        explanation: 'Regular past verbs "visited" and "hiked" agree in tense.',
      },
    },
    {
      id: 'turn_a1_53_3',
      turnIndex: 3,
      partnerPrompt:
        'Hiking near Loch Ness must have been incredible! What was the weather like, and what traditional local food did you eat?',
      partnerAudioText:
        'Hiking near Loch Ness must have been incredible! What was the weather like, and what traditional local food did you eat?',
      partnerQuestionHindi:
        'लोच नेस के पास पदयात्रा करना अविश्वसनीय रहा होगा! मौसम कैसा था, और आपने कौन सा पारंपरिक स्थानीय भोजन खाया?',
      expectedFunction: 'Describe Past Weather & Food (The weather was... We ate...)',
      contextGoal:
        'State that the weather was surprisingly sunny and mild, and that you ate fresh seafood and local pies.',
      targetVocabulary: ['the weather was sunny', 'ate fresh seafood', 'tasted local food', 'delicious', 'mild and warm'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'The weather was surprisingly sunny and warm every single day! We ate delicious fresh salmon, traditional beef pies, and tasted shortbread biscuits.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'The weather was sunny. We ate fresh seafood and traditional pies, which were delicious.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'The weather was sunny! We ate fresh fish and pies.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Weather & Food',
          patterns: [
            'weather was sunny',
            'weather was warm',
            'ate',
            'seafood',
            'salmon',
            'pies',
            'delicious',
            'tasted',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_53_3',
        type: 'fill_blank',
        prompt: 'Fill in the irregular past verb: "We ___ delicious fresh fish at the harbour."',
        options: [
          { id: 'opt_1', text: 'ate', isCorrect: true },
          { id: 'opt_2', text: 'eated', isCorrect: false },
          { id: 'opt_3', text: 'eat', isCorrect: false },
        ],
        correctAnswer: 'ate',
        explanation: 'Past tense of "eat" is "ate".',
      },
    },
    {
      id: 'turn_a1_53_4',
      turnIndex: 4,
      partnerPrompt:
        'That sounds like the perfect holiday! I am planning my vacation for next month. Where did you go on your favorite trip before this one, Clara asked enthusiastically?',
      partnerAudioText:
        'That sounds like the perfect holiday! I am planning my vacation for next month. Where did you go on your favorite trip before this one, Clara asked enthusiastically?',
      partnerQuestionHindi:
        'यह एक आदर्श छुट्टी जैसा लगता है! मैं अगले महीने के लिए अपनी छुट्टी की योजना बना रही हूँ। इससे पहले आप अपनी पसंदीदा यात्रा पर कहाँ गए थे, क्लारा ने उत्साह से पूछा?',
      expectedFunction: 'Share Another Brief Past Memory & Ask Partner (Where did you go...?)',
      contextGoal:
        'Mention another past trip (e.g., Italy two years ago) and ask Clara where she plans to travel.',
      targetVocabulary: ['two years ago', 'went to Italy', 'loved the beaches', 'where do you want to go', 'what about you'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Two years ago, I went to Italy and loved the sunny coast! What about you, Clara—where are you going to travel next month?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I went to Italy two years ago. Where are you planning to go for your next vacation?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I visited Italy two years ago! Where do you want to go, Clara?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Previous Trip & Reciprocal Question',
          patterns: [
            'italy',
            'years ago',
            'visited',
            'went to',
            'where are you',
            'where do you want',
            'what about you',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_53_4',
        type: 'multiple_choice',
        prompt: 'Which sentence asks your friend about their travel plans?',
        options: [
          { id: 'opt_1', text: 'Where are you going to travel next month, Clara?', isCorrect: true },
          { id: 'opt_2', text: 'Where you traveling next month Clara did?', isCorrect: false },
          { id: 'opt_3', text: 'Where did you going next month?', isCorrect: false },
        ],
        correctAnswer: 'Where are you going to travel next month, Clara?',
        explanation: '"be going to + verb" for future plans.',
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
