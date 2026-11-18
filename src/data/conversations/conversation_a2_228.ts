import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_228: ConversationDefinition = {
  id: 'conv_a2_228',
  title: 'Celebrations, Traditions & Special Occasions',
  cefr: 'A2',
  unitId: 'unit_a2_16',
  lessonLinks: ['lesson_a2_16_228'],
  estimatedMinutes: 5,
  scenario:
    'You meet your neighbor Deepak in the community courtyard as preparations for the annual neighborhood festival begin. You discuss traditional customs, how special foods and decorations are prepared, family traditions, and what you are looking forward to enjoying at the community celebration.',
  communicativeGoals: [
    'Describe cultural holidays, community traditions, and festive customs using vivid A2 adjectives',
    'Use "look forward to + gerund/noun" to express enthusiasm about upcoming events',
    'Employ simple passive constructions ("are prepared", "are decorated", "are shared") to explain traditions',
    'Share personal family rituals and compare community celebration practices',
  ],
  canDoStatements: [
    'Can describe traditions, cultural festivals, and community celebrations',
    'Can express anticipation for upcoming events using "look forward to"',
    'Can describe customary food and decorative practices in simple terms',
  ],
  characters: [
    {
      id: 'char_deepak_neighbor',
      name: 'Deepak',
      role: 'Neighbor & Festival Committee Volunteer',
      avatar: '🕯️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'tradition',
        ipa: '/trəˈdɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'A custom or belief passed down through generations',
        exampleSentence: 'Lighting oil lamps during the festival is an ancient family tradition.',
        translations: { hi: 'परंपरा (ट्रेडिशन)' },
      },
      {
        word: 'gathering',
        ipa: '/ˈɡæðərɪŋ/',
        partOfSpeech: 'noun',
        meaning: 'An assembly or meeting of people for a celebration or purpose',
        exampleSentence: 'We held a joyful family gathering with music and homemade sweets.',
        translations: { hi: 'मिलन समारोह / सभा (गैदरिंग)' },
      },
      {
        word: 'festive',
        ipa: '/ˈfestɪv/',
        partOfSpeech: 'adjective',
        meaning: 'Cheerful and suitable for a festival or celebration',
        exampleSentence: 'The colorful lanterns gave the entire street a lively festive atmosphere.',
        translations: { hi: 'उत्सवपूर्ण / उल्लासमय (फेस्टिव)' },
      },
      {
        word: 'customary',
        ipa: '/ˈkʌstəməri/',
        partOfSpeech: 'adjective',
        meaning: 'According to custom or habitual cultural practice',
        exampleSentence: 'It is customary to share homemade pastries with our neighbors.',
        translations: { hi: 'रीति-रिवाज के अनुसार / प्रथागत (कस्टमरी)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I really look forward to the music and street food.',
        functionCategory: 'Expressing anticipation with look forward to',
        exampleSentence: 'We look forward to welcoming all our relatives this weekend.',
      },
      {
        phrase: 'Traditional sweets are prepared days in advance.',
        functionCategory: 'Describing cultural customs with simple passive',
        exampleSentence: 'Special lanterns are hung outside every house.',
      },
      {
        phrase: 'In our family, it is a tradition to gather for breakfast.',
        functionCategory: 'Explaining family rituals',
        exampleSentence: 'It is an annual tradition to exchange handmade greeting cards.',
      },
      {
        phrase: 'The whole community comes together for this occasion.',
        functionCategory: 'Highlighting community unity',
        exampleSentence: 'Every year, young and old come together to celebrate.',
      },
    ],
    grammar: {
      title: 'Describing Customs with Habitual Present, Passive & Look Forward To',
      conceptExplanation:
        '1. Habitual Present & Simple Passive: Use "are/is + past participle" to describe general traditions without focusing on who does them ("Special meals are cooked", "Gifts are exchanged").\n2. "Look forward to" Rule: "look forward to" MUST be followed by a noun or an -ing gerund ("I look forward to meeting everyone", "I look forward to the festival").',
      patternFormula: '[Custom: Subject + is/are + Past Participle] + [Anticipation: look forward to + noun / -ing]',
      contrastExamples: [
        {
          incorrect: 'I look forward to celebrate the holiday.',
          correct: 'I look forward to celebrating the holiday.',
          explanation: '"Look forward to" takes a gerund (-ing) or a noun phrase, never a bare infinitive.',
        },
        {
          incorrect: 'Sweets are prepare by my grandmother.',
          correct: 'Sweets are prepared by my grandmother every year.',
          explanation: 'In the passive voice, use the past participle ("prepared").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Deepak',
        text: 'Are you ready for the neighborhood festival this weekend? The square is already looking so festive!',
        translation: 'क्या आप इस सप्ताहांत के मोहल्ला उत्सव के लिए तैयार हैं? चौक पहले से ही बहुत उत्सवपूर्ण लग रहा है!',
      },
      {
        speaker: 'Learner',
        text: 'Yes! I really look forward to tasting all the traditional dishes that are prepared for the occasion.',
        translation: 'हाँ! मैं वास्तव में इस अवसर के लिए तैयार किए जाने वाले सभी पारंपरिक व्यंजनों का स्वाद लेने के लिए उत्सुक हूँ।',
      },
      {
        speaker: 'Deepak',
        text: 'Special sweets are shared among all the neighbors. Does your family have any special traditions?',
        translation: 'सभी पड़ोसियों के बीच विशेष मिठाइयाँ बाँटी जाती हैं। क्या आपके परिवार की कोई विशेष परंपरा है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_228_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "I always look forward to ______ (seeing / see) my cousins at the festival."',
      options: [
        { id: 'opt_1', text: 'seeing', isCorrect: true },
        { id: 'opt_2', text: 'see', isCorrect: false },
        { id: 'opt_3', text: 'saw', isCorrect: false },
      ],
      correctAnswer: 'seeing',
      explanation: '"Look forward to" is always followed by a gerund (-ing).',
    },
    {
      id: 'cp_228_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses the passive voice to describe a tradition?',
      options: [
        { id: 'opt_1', text: 'Colorful decorative lights are hung along the balconies.', isCorrect: true },
        { id: 'opt_2', text: 'Colorful decorative lights hung by themselves.', isCorrect: false },
        { id: 'opt_3', text: 'Colorful lights is hanging on the balconies tradition.', isCorrect: false },
      ],
      correctAnswer: 'Colorful decorative lights are hung along the balconies.',
      explanation: '"Are hung" is the correct present passive construction for plural subjects.',
    },
    {
      id: 'cp_228_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [Traditional dishes / are prepared / and / shared with everyone]',
      correctAnswer: 'Traditional dishes are prepared and shared with everyone',
      explanation: 'Passive voice sentence describing customary food sharing.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_228_1',
      prompt: 'Construct a sentence stating that you look forward to celebrating the annual community festival with neighbors.',
      scenarioContext: 'Talking to Deepak about the festival.',
      targetStructure: 'I really look forward to celebrating our annual community festival together.',
      wordBank: ['I really look forward', 'to celebrating our annual', 'community festival together,', 'Deepak.'],
      acceptableSolutions: [
        'I really look forward to celebrating our annual community festival together.',
        'I look forward to celebrating the festival with neighbors.',
      ],
      explanation: '"Look forward to + gerund" structure.',
    },
    {
      id: 'sc_228_2',
      prompt: 'Construct a sentence explaining that special sweets and dishes are prepared days in advance.',
      scenarioContext: 'Explaining festival food preparation.',
      targetStructure: 'Special festive dishes are prepared at home and shared among all neighbors.',
      wordBank: ['Special festive dishes', 'are prepared at home', 'and shared among', 'all neighbors,', 'Deepak.'],
      acceptableSolutions: [
        'Special festive dishes are prepared at home and shared among all neighbors.',
        'Traditional sweets are prepared and shared with neighbors.',
      ],
      explanation: 'Passive voice with "are prepared" and "shared".',
    },
  ],
  turns: [
    {
      id: 'turn_228_1',
      turnIndex: 1,
      partnerPrompt:
        'Good evening! Look at these lovely decorative lights being put up in the courtyard! Are you excited for our annual community festival this weekend?',
      partnerAudioText:
        'Good evening! Look at these lovely decorative lights being put up in the courtyard! Are you excited for our annual community festival this weekend?',
      partnerQuestionHindi:
        'शुभ संध्या! आंगन में लगाई जा रही इन सुंदर सजावटी लाइटों को देखिए! क्या आप इस सप्ताहांत हमारे वार्षिक सामुदायिक उत्सव के लिए उत्साहित हैं?',
      expectedFunction: 'Greeting Deepak and expressing excitement using "festive" or "look forward to + gerund/noun"',
      contextGoal: 'Greet Deepak, describe the festive atmosphere, and state what you look forward to experiencing',
      targetVocabulary: ['Good evening Deepak', 'festive', 'look forward to', 'lights', 'celebration', 'community'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Good evening, Deepak! The courtyard looks wonderfully festive with all the lights. I really look forward to celebrating our community festival this weekend!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Deepak! Yes, it looks so cheerful. I look forward to attending the music performances and seeing all our neighbors together.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good evening, Deepak! The festive atmosphere is amazing. I always look forward to this weekend every year!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_deepak',
          patterns: ['good evening', 'hello', 'deepak', 'hi'],
          required: true,
        },
        {
          name: 'festive_anticipation',
          patterns: ['look forward to', 'festive', 'excited', 'celebration', 'lights', 'festival'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_228_1_infinitive_after_look_forward',
          pattern: /look forward to celebrate/i,
          errorType: 'grammar',
          message: 'Use a gerund after "look forward to": "I look forward to celebrating the festival."',
          correctionPattern: 'I look forward to celebrating our community festival.',
        },
      ],
      remediationPractice: {
        id: 'rem_228_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I look forward to ______ (enjoying) the music."',
        options: [
          { id: 'r1', text: 'enjoying', isCorrect: true },
          { id: 'r2', text: 'enjoy', isCorrect: false },
        ],
        correctAnswer: 'enjoying',
        explanation: '"Look forward to" takes a gerund (-ing).',
      },
    },
    {
      id: 'turn_228_2',
      turnIndex: 2,
      partnerPrompt:
        'Every year, traditional dishes are prepared by different families on our street, and live folk music is performed on the stage. What traditions does your family usually follow for special occasions?',
      partnerAudioText:
        'Every year, traditional dishes are prepared by different families on our street, and live folk music is performed on the stage. What traditions does your family usually follow for special occasions?',
      partnerQuestionHindi:
        'हर साल, हमारी गली में विभिन्न परिवारों द्वारा पारंपरिक व्यंजन तैयार किए जाते हैं, और मंच पर लोक संगीत का प्रदर्शन किया जाता है। आपका परिवार विशेष अवसरों के लिए आमतौर पर किन परंपराओं का पालन करता है?',
      expectedFunction: 'Describing family traditions and food preparation using simple passive and habitual present',
      contextGoal: 'Explain family customs (special sweets prepared at home, family gathering, sharing food with neighbors)',
      targetVocabulary: ['tradition', 'are prepared', 'family gathering', 'sweets', 'shared', 'customary'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'In our family, it is a tradition to hold a big gathering where traditional sweets are prepared at home and shared with all our relatives and neighbors.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'We always cook special festive dishes together. It is customary for our extended family to exchange gifts and enjoy a shared meal.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Every year, traditional pastries are baked and decorative lanterns are hung outside our windows. Gathering with loved ones is our favorite part.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'traditions_and_passive',
          patterns: ['tradition', 'gathering', 'are prepared', 'are cooked', 'sweets', 'dishes', 'customary', 'shared'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_228_2_passive_form',
          pattern: /dishes are prepare at home/i,
          errorType: 'grammar',
          message: 'Use past participle in passive voice: "Special dishes are prepared at home."',
          correctionPattern: 'Traditional sweets are prepared at home.',
        },
      ],
      remediationPractice: {
        id: 'rem_228_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes how holiday food is made?',
        options: [
          { id: 'r1', text: 'Special holiday sweets are prepared days in advance.', isCorrect: true },
          { id: 'r2', text: 'Special sweets is prepare by family days ago.', isCorrect: false },
        ],
        correctAnswer: 'Special holiday sweets are prepared days in advance.',
        explanation: 'Plural passive "are prepared".',
      },
    },
    {
      id: 'turn_228_3',
      turnIndex: 3,
      partnerPrompt:
        'That sounds so heartwarming! We are setting up the community food stalls on Saturday morning at ten o’clock. Would you like to join the setup committee or bring a homemade dish to share?',
      partnerAudioText:
        'That sounds so heartwarming! We are setting up the community food stalls on Saturday morning at ten o’clock. Would you like to join the setup committee or bring a homemade dish to share?',
      partnerQuestionHindi:
        'यह बहुत दिल को छू लेने वाला लगता है! हम शनिवार सुबह दस बजे सामुदायिक भोजन स्टॉल लगा रहे हैं। क्या आप व्यवस्था समिति में शामिल होना चाहेंगे या साझा करने के लिए कोई घर का बना व्यंजन लाना चाहेंगे?',
      expectedFunction: 'Accepting the volunteer opportunity and confirming contributions for Saturday morning',
      contextGoal: 'Agree to help at 10 AM on Saturday, offer to bring snacks/dishes, and express community spirit',
      targetVocabulary: ['would love to help', 'Saturday at ten', 'bring a dish', 'set up', 'community', 'Deepak'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I would love to help! I can join you on Saturday at ten to set up the stalls and bring a batch of homemade snacks to share with everyone.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Count me in, Deepak! I’ll come by at ten o’clock to assist with decorations and bring some traditional sweets.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I’d be delighted to participate! Bringing our neighborhood together is wonderful. See you on Saturday at ten!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'help_and_timing',
          patterns: ['love to help', 'saturday', 'ten', 'bring', 'dish', 'sweets', 'count me in', 'delighted'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_228_3_short_ok',
          pattern: /^i help on 10\.$/i,
          errorType: 'interaction',
          message: 'Respond with community enthusiasm: "I would love to help on Saturday at ten and bring a dish!"',
          correctionPattern: 'I would love to help set up on Saturday at ten o’clock!',
        },
      ],
      remediationPractice: {
        id: 'rem_228_3',
        type: 'fill_blank',
        prompt: 'Fill in: "I would love to ______ (help) with the decorations."',
        options: [
          { id: 'r1', text: 'help', isCorrect: true },
          { id: 'r2', text: 'helping', isCorrect: false },
        ],
        correctAnswer: 'help',
        explanation: '"Would love to" is followed by a base verb.',
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
