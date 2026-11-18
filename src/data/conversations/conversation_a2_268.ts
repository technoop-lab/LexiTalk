import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_268: ConversationDefinition = {
  id: 'conv_a2_268',
  title: 'Independent Speaking Performance',
  cefr: 'A2',
  unitId: 'unit_a2_18',
  lessonLinks: ['lesson_a2_18_268'],
  estimatedMinutes: 6,
  scenario:
    'You are presenting an independent spoken showcase in an international cultural exchange seminar hosted by facilitator Oliver. With minimal scaffolding, you introduce yourself and your hometown, present a vibrant traditional festival or celebration in vivid detail (customs, foods, traditional clothing, family activities), and answer spontaneous follow-up questions from Oliver and the audience.',
  communicativeGoals: [
    'Deliver an independent, multi-turn spoken presentation in fluent A2 English',
    'Describe one’s background and hometown with descriptive adjectives and spatial prepositions',
    'Narrate cultural customs, seasonal festivities, traditional attire, and celebratory meals clearly',
    'Respond spontaneously and confidently to open follow-up questions from the audience',
  ],
  canDoStatements: [
    'Can give a continuous spoken description of a cultural festival or local tradition with minimal prompts',
    'Can describe how people celebrate, what special dishes are eaten, and what clothing is worn',
    'Can handle unpredictable follow-up questions naturally and express personal enthusiasm',
  ],
  characters: [
    {
      id: 'char_oliver_seminar_host',
      name: 'Oliver',
      role: 'Cultural Exchange Seminar Facilitator',
      avatar: '🌍',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'festivity',
        ipa: '/feˈstɪvəti/',
        partOfSpeech: 'noun',
        meaning: 'The celebration of something in a joyful and lively way; festive activities',
        exampleSentence: 'The whole town comes alive during the annual festival festivities.',
        translations: { hi: 'उत्सव / त्यौहार की रौनक (फेस्टिविटी)' },
      },
      {
        word: 'traditional attire',
        ipa: '/trəˈdɪʃənl əˈtaɪə/',
        partOfSpeech: 'noun phrase',
        meaning: 'Clothes and costumes that represent the culture, heritage, or identity of a specific region',
        exampleSentence: 'People wear colorful traditional attire with beautiful embroidery.',
        translations: { hi: 'पारंपरिक पोशाक / परिधान (ट्रेडिशनल अटायर)' },
      },
      {
        word: 'delicacy',
        ipa: '/ˈdelɪkəsi/',
        partOfSpeech: 'noun',
        meaning: 'Something considered choice, special, or delicious to eat',
        exampleSentence: 'Families prepare sweet delicacies and savory treats for visiting guests.',
        translations: { hi: 'स्वादिष्ट व्यंजन / खास पकवान (डेलिकेसी)' },
      },
      {
        word: 'symbolize',
        ipa: '/ˈsɪmbəlaɪz/',
        partOfSpeech: 'verb',
        meaning: 'To be a symbol of; to represent something meaningful',
        exampleSentence: 'Lighting clay lamps symbolizes the triumph of light over darkness.',
        translations: { hi: 'प्रतीक होना / दर्शाना (सिंबलाइज़)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I would like to tell you about our annual celebration of...',
        functionCategory: 'Introducing a cultural showcase topic independently',
        exampleSentence: 'I would like to tell you about our annual celebration of the Festival of Lights.',
      },
      {
        phrase: 'During this festival, families decorate their homes with...',
        functionCategory: 'Describing celebratory customs and visual atmosphere',
        exampleSentence: 'During this festival, families decorate their homes with colorful flowers and glowing lamps.',
      },
      {
        phrase: 'One of the most exciting aspects is the special food, such as...',
        functionCategory: 'Highlighting culinary and sensory traditions',
        exampleSentence: 'One of the most exciting aspects is the special food, such as handmade sweet pastries.',
      },
      {
        phrase: 'What makes this celebration so meaningful to me is...',
        functionCategory: 'Sharing personal sentiment and cultural pride',
        exampleSentence: 'What makes this celebration so meaningful to me is bringing generations of family together.',
      },
    ],
    grammar: {
      title: 'Extended Descriptive Discourse: Present Habits, Passive Customs & Relative Clauses',
      conceptExplanation:
        '1. Habitual customs: "People wear...", "Families prepare...", "Children receive..." (Present Simple)\n2. Passive descriptive customs: "Homes are decorated with flowers", "Special dishes are served"\n3. Defining relative clauses: "It is a festival that brings people together", "We eat a sweet dish which is made with milk"\n4. Spontaneous question handling: "That is an excellent question! In fact..."',
      patternFormula: 'I would like to introduce [Festival]. It is celebrated in [Month / Season]. Homes are decorated with [Details]. People wear [Attire] and eat [Foods]. What I love most is [Personal Meaning].',
      contrastExamples: [
        {
          incorrect: 'Festival is people make lamp and wear cloth.',
          correct: 'During the festival, people light traditional lamps and wear vibrant cultural attire.',
          explanation: 'Use rich descriptive vocabulary and standard full-sentence syntax.',
        },
        {
          incorrect: 'It is festival which people are happy.',
          correct: 'It is a celebration that brings joy and happiness to everyone.',
          explanation: 'Use relative pronoun "that" or "which" with a coherent predicate.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Oliver',
        text: 'Welcome to our international stage! Please introduce yourself, your hometown, and the traditional festival you have chosen to present today.',
        translation: 'हमारे अंतर्राष्ट्रीय मंच पर आपका स्वागत है! कृपया अपना, अपने गृहनगर का और उस पारंपरिक त्योहार का परिचय दें जिसे आपने आज प्रस्तुत करने के लिए चुना है।',
      },
      {
        speaker: 'Learner',
        text: 'Hello everyone and thank you, Oliver. My name is Alex, and I come from a vibrant city surrounded by green hills. Today, I am proud to share our Festival of Lights.',
        translation: 'सभी को नमस्ते और धन्यवाद, ओलिवर। मेरा नाम एलेक्स है, और मैं हरी पहाड़ियों से घिरे एक जीवंत शहर से आता हूँ। आज, मुझे हमारे प्रकाश के त्योहार को साझा करने पर गर्व है।',
      },
      {
        speaker: 'Oliver',
        text: 'Wonderful! Walk us through how families celebrate and what traditional foods and clothing are involved.',
        translation: 'बहुत बढ़िया! हमें बताएं कि परिवार कैसे जश्न मनाते हैं और इसमें कौन से पारंपरिक भोजन और कपड़े शामिल होते हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_268_1',
      type: 'fill_blank',
      prompt: 'Complete: "During the festival, homes are decorated ______ (with / by) glowing clay lamps and colorful rangoli patterns."',
      options: [
        { id: 'opt_1', text: 'with', isCorrect: true },
        { id: 'opt_2', text: 'by', isCorrect: false },
      ],
      correctAnswer: 'with',
      explanation: 'Use preposition "with" to describe instruments or decorating materials.',
    },
    {
      id: 'cp_268_2',
      type: 'multiple_choice',
      prompt: 'Which response delivers an independent, rich description of cultural festivities?',
      options: [
        { id: 'opt_1', text: 'Families wear vibrant traditional attire, exchange homemade sweets, and celebrate togetherness under glowing lanterns.', isCorrect: true },
        { id: 'opt_2', text: 'People wear cloth and eat food very happy festival.', isCorrect: false },
        { id: 'opt_3', text: 'Festival is celebrated because nice food and lamp.', isCorrect: false },
      ],
      correctAnswer: 'Families wear vibrant traditional attire, exchange homemade sweets, and celebrate togetherness under glowing lanterns.',
      explanation: 'Varied lexical range and compound predicate structure.',
    },
    {
      id: 'cp_268_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [What makes this celebration special / is the spirit of generosity / and joyful family reunions]',
      correctAnswer: 'What makes this celebration special is the spirit of generosity and joyful family reunions',
      explanation: 'Cleft subject clause + linking verb + compound predicate complement.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_268_1',
      prompt: 'Construct a sentence stating that during the festival, families wear colorful traditional attire and exchange delicious homemade sweets.',
      scenarioContext: 'Delivering your presentation.',
      targetStructure: 'During the festival, families wear colorful traditional attire and exchange delicious sweets.',
      wordBank: ['During the festival,', 'families wear colorful', 'traditional attire and', 'exchange delicious sweets.', 'wear of traditional', 'exchanging sweet'],
      acceptableSolutions: [
        'During the festival, families wear colorful traditional attire and exchange delicious sweets.',
        'During the festival, people wear colorful traditional attire and exchange delicious sweets.',
      ],
      explanation: 'Prepositional time phrase + subject + compound verb phrase.',
    },
    {
      id: 'sc_268_2',
      prompt: 'Construct a sentence stating that lighting lamps symbolizes hope, happiness, and new beginnings.',
      scenarioContext: 'Explaining the cultural meaning.',
      targetStructure: 'Lighting lamps symbolizes hope, happiness, and new beginnings for all families.',
      wordBank: ['Lighting lamps symbolizes', 'hope, happiness, and', 'new beginnings for', 'all families.', 'light lamp symbolize', 'hope of happiness'],
      acceptableSolutions: [
        'Lighting lamps symbolizes hope, happiness, and new beginnings for all families.',
        'Lighting clay lamps symbolizes hope, happiness, and new beginnings for all families.',
      ],
      explanation: 'Gerund subject + singular verb "symbolizes" + coordinate noun phrase.',
    },
  ],
  turns: [
    {
      id: 'turn_268_1',
      turnIndex: 1,
      partnerPrompt:
        'The floor is yours! Please introduce yourself, tell us where you are from, and introduce the traditional festival or cultural celebration you will be presenting to our international audience.',
      partnerAudioText:
        'The floor is yours! Please introduce yourself, tell us where you are from, and introduce the traditional festival or cultural celebration you will be presenting to our international audience.',
      partnerQuestionHindi:
        'मंच आपका है! कृपया अपना परिचय दें, हमें बताएं कि आप कहाँ से हैं, और उस पारंपरिक त्योहार या सांस्कृतिक उत्सव का परिचय दें जिसे आप हमारे अंतर्राष्ट्रीय दर्शकों के सामने प्रस्तुत करेंगे।',
      expectedFunction: 'Delivering an independent spoken introduction: greeting the host/audience, stating hometown origin, and introducing the chosen festival',
      contextGoal: 'Greet Oliver and audience, introduce yourself and your hometown, and announce you will present the Festival of Lights (Diwali / Spring Harvest Festival)',
      targetVocabulary: ['Hello Oliver and esteemed guests', 'My name is Alex', 'I come from a beautiful city surrounded by mountains and rivers', 'I am proud to present our Festival of Lights', 'one of our most beloved cultural traditions'],
      suggestedResponses: [
        {
          label: 'Independent Presentation',
          text: 'Hello Oliver, and warm greetings to everyone in our international circle! My name is Alex. I come from a vibrant, historic city surrounded by lush green hills. Today, I am proud to present our annual Festival of Lights, which is one of the most cherished and joyous cultural celebrations in our heritage.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Core Delivery',
          text: 'Good afternoon everyone! My name is Alex, and I am from a historic cultural city. Today, I want to talk about the Festival of Lights, our favorite celebration that brings communities together every autumn.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_self_intro',
          patterns: ['hello', 'good afternoon', 'oliver', 'everyone', 'my name is', 'come from', 'from a city', 'hometown'],
          required: true,
        },
        {
          name: 'festival_topic_intro',
          patterns: ['present', 'festival', 'lights', 'celebration', 'harvest', 'diwali', 'spring', 'autumn', 'tradition', 'culture', 'heritage'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_268_1_i_am_come_from',
          pattern: /i am come from\b/i,
          errorType: 'grammar',
          message: 'Say "I come from" or "I am from" (not "I am come from").',
          correctionPattern: 'My name is Alex and I come from a vibrant city.',
        },
      ],
      remediationPractice: {
        id: 'rem_268_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I ______ (come / am come) from a historic city."',
        options: [
          { id: 'r1', text: 'come', isCorrect: true },
          { id: 'r2', text: 'am come', isCorrect: false },
        ],
        correctAnswer: 'come',
        explanation: 'Use the base present simple verb "come".',
      },
    },
    {
      id: 'turn_268_2',
      turnIndex: 2,
      partnerPrompt:
        'Fascinating! Now, describe the visual atmosphere, the customs people follow, the traditional attire worn, and the special delicacies prepared during the festivities.',
      partnerAudioText:
        'Fascinating! Now, describe the visual atmosphere, the customs people follow, the traditional attire worn, and the special delicacies prepared during the festivities.',
      partnerQuestionHindi:
        'आकर्षक! अब, उत्सव के दौरान दृश्य वातावरण, लोग जिन रीति-रिवाजों का पालन करते हैं, पहने जाने वाले पारंपरिक परिधान और तैयार किए जाने वाले विशेष व्यंजनों का वर्णन करें।',
      expectedFunction: 'Describing traditions in depth: lighting clay lamps, floral decorations, bright silk attire, and sharing homemade sweet delicacies',
      contextGoal: 'Describe decorating homes with clay lamps and flowers, wearing traditional embroidered clothes, and preparing festive sweets and savory snacks for guests',
      targetVocabulary: ['During the festivities', 'families decorate their doorsteps with clay lamps and flowers', 'people wear vibrant traditional silk attire', 'prepare homemade sweet delicacies', 'exchange gifts and greetings', 'warm and joyful atmosphere'],
      suggestedResponses: [
        {
          label: 'Independent Presentation',
          text: 'During the festival, the entire neighborhood glows with light. Families clean their houses and decorate their doorsteps with oil lamps, fresh marigold flowers, and colorful sand art. Everyone dresses up in elegant traditional silk attire with bright colors. In the kitchen, families prepare delicious homemade sweets like milk fudge and crispy savory pastries, which we share with neighbors, friends, and relatives.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Core Delivery',
          text: 'Homes are decorated with beautiful lamps and flowers. People wear new traditional clothes and visit their extended families. We make lots of special sweet delicacies and exchange gifts with our neighbors to share good fortune.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'decorations_and_lamps',
          patterns: ['decorate', 'lamps', 'lights', 'flowers', 'homes', 'doorsteps', 'clean', 'glow'],
          required: true,
        },
        {
          name: 'attire_and_food',
          patterns: ['attire', 'clothes', 'dress', 'traditional', 'silk', 'sweets', 'food', 'delicacies', 'pastries', 'gifts', 'exchange', 'family', 'neighbors'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_268_2_dress_up_cloths',
          pattern: /dress up in cloth\b/i,
          errorType: 'vocabulary',
          message: 'Say "traditional clothes" or "traditional attire" (not "cloth").',
          correctionPattern: 'People dress up in traditional attire.',
        },
      ],
      remediationPractice: {
        id: 'rem_268_2',
        type: 'multiple_choice',
        prompt: 'Which sentence describes cultural customs with rich A2 vocabulary?',
        options: [
          { id: 'r1', text: 'Families decorate their doorsteps with lamps and wear vibrant traditional attire.', isCorrect: true },
          { id: 'r2', text: 'Family make lamp and wear cloth for eat sweet.', isCorrect: false },
        ],
        correctAnswer: 'Families decorate their doorsteps with lamps and wear vibrant traditional attire.',
        explanation: 'Accurate vocabulary collocations and compound sentence structure.',
      },
    },
    {
      id: 'turn_268_3',
      turnIndex: 3,
      partnerPrompt:
        'Thank you for that vivid picture! An audience member is asking: "What personal childhood memory or emotional meaning makes this festival so unforgettable to you personally?"',
      partnerAudioText:
        'Thank you for that vivid picture! An audience member is asking: "What personal childhood memory or emotional meaning makes this festival so unforgettable to you personally?"',
      partnerQuestionHindi:
        'उस जीवंत तस्वीर के लिए धन्यवाद! एक दर्शक पूछ रहे हैं: "बचपन की कौन सी व्यक्तिगत स्मृति या भावनात्मक अर्थ आपके लिए इस त्योहार को व्यक्तिगत रूप से इतना अविस्मरणीय बनाता है?"',
      expectedFunction: 'Responding spontaneously to the audience question: sharing a personal memory (cooking with grandparents) and expressing the deeper meaning of unity and hope',
      contextGoal: 'Share a heartfelt memory of preparing sweets with grandparents and gathering on the rooftop, conclude with a thank-you to Oliver and the audience',
      targetVocabulary: ['That is a wonderful question', 'My fondest childhood memory is', 'making sweets with my grandmother in the kitchen', 'watching the glowing fireworks from the rooftop', 'symbolizes hope, forgiveness, and unity', 'Thank you Oliver and everyone for listening'],
      suggestedResponses: [
        {
          label: 'Independent Presentation',
          text: 'That is a wonderful question! For me, the most unforgettable memory is sitting in the kitchen with my grandmother, helping her shape sweet pastries while listening to her childhood stories. Later that evening, all my cousins gathered on the rooftop to watch the lights across the entire city. To me, this festival symbolizes love, unity, and fresh hope. Thank you so much, Oliver, and thank you to our audience for your kind attention!',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Core Delivery',
          text: 'Thank you for asking! What makes it special is spending quality time with my grandparents and cousins. It reminds us to be grateful for our family and help those in need. Thank you Oliver and everyone for listening!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'memory_and_meaning',
          patterns: ['memory', 'grandmother', 'grandfather', 'parents', 'cousins', 'kitchen', 'stories', 'rooftop', 'unity', 'hope', 'grateful', 'love', 'symbolizes'],
          required: true,
        },
        {
          name: 'closing_gratitude',
          patterns: ['thank you', 'oliver', 'audience', 'listening', 'attention', 'question'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_268_3_thank_for_listen',
          pattern: /thank you for listen\b/i,
          errorType: 'grammar',
          message: 'Use gerund after preposition: "Thank you for listening".',
          correctionPattern: 'Thank you all for listening to my presentation!',
        },
      ],
      remediationPractice: {
        id: 'rem_268_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [This festival symbolizes love and unity, / and thank you all / for listening to my presentation]',
        correctAnswer: 'This festival symbolizes love and unity, and thank you all for listening to my presentation',
        explanation: 'Meaning clause + closing gratitude coordinate clause.',
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
