import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_118: ConversationDefinition = {
  id: 'conv_a2_118',
  title: 'Nature, Weather Extremes & the Environment (because of, due to, as a result)',
  cefr: 'A2',
  unitId: 'unit_a2_8',
  lessonLinks: ['lesson_a2_8_118'],
  estimatedMinutes: 5,
  scenario:
    'You are visiting the Sheffield Green Climate & Sustainability Fair in the Peace Gardens, speaking with community coordinator Claire Wood. Discuss the severe weather Sheffield experienced last winter (torrential downpours and localized flooding near the River Don), explain causes and consequences using "due to", "because of", and "as a result", and sign up for a community tree-planting and recycling initiative.',
  communicativeGoals: [
    'Describe extreme weather phenomena and seasonal events (torrential downpours, gale-force winds, heatwaves, flooding)',
    'Express cause, reason, and environmental impact using "due to + noun", "because of + noun", and "as a result"',
    'Discuss practical daily eco-friendly actions (reducing single-use plastic, cycling to work, home insulation)',
    'Volunteer for local community environmental conservation projects',
  ],
  canDoStatements: [
    'Can describe extreme weather events and their consequences on daily life (CEFR A2)',
    'Can express cause and effect relationships using "due to", "because of", and "as a result"',
    'Can discuss simple environmental protection habits and sign up for local volunteer initiatives',
  ],
  characters: [
    {
      id: 'char_claire_wood',
      name: 'Claire Wood',
      role: 'Environmental Sustainability Coordinator',
      avatar: '🌱',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'due to',
        ipa: '/djuː tuː/',
        partOfSpeech: 'preposition',
        meaning: 'Because of; as a consequence of a specific event or condition',
        exampleSentence: 'The river flooded due to three days of continuous torrential rainfall.',
        translations: { hi: 'के कारण / की वजह से' },
      },
      {
        word: 'flooding',
        ipa: '/ˈflʌdɪŋ/',
        partOfSpeech: 'noun',
        meaning: 'An overflowing of a large amount of water beyond its normal confines over dry land',
        exampleSentence: 'Several low-lying roads were closed because of severe flooding.',
        translations: { hi: 'बाढ़ / जलभराव' },
      },
      {
        word: 'as a result',
        ipa: '/æz ə rɪˈzʌlt/',
        partOfSpeech: 'adverbial phrase',
        meaning: 'Therefore; consequence following a previous cause',
        exampleSentence: 'The storm damaged power lines. As a result, schools were closed.',
        translations: { hi: 'परिणामस्वरूप / जिसके परिणामस्वरूप' },
      },
      {
        word: 'sustainable',
        ipa: '/səˈsteɪnəbəl/',
        partOfSpeech: 'adjective',
        meaning: 'Able to be maintained at a certain rate without depleting natural resources',
        exampleSentence: 'We need to adopt more sustainable transport and energy solutions.',
        translations: { hi: 'टिकाऊ / पर्यावरण-अनुकूल' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'The train was cancelled due to heavy flooding.',
        functionCategory: 'Stating Cause (due to + noun)',
        exampleSentence: 'Flights were delayed due to gale-force winds.',
      },
      {
        phrase: 'Because of climate change, heatwaves are more frequent.',
        functionCategory: 'Stating Environmental Cause (because of)',
        exampleSentence: 'Because of rising temperatures, glaciers are melting.',
      },
      {
        phrase: 'As a result, many families lost power for two days.',
        functionCategory: 'Stating Consequence (as a result)',
        exampleSentence: 'As a result, we started cycling instead of driving.',
      },
      {
        phrase: 'I try to reduce single-use plastic in my weekly shopping.',
        functionCategory: 'Sharing Sustainable Habit',
        exampleSentence: 'I compost organic waste and save electricity.',
      },
    ],
    grammar: {
      title: 'Expressing Cause & Effect: Due to, Because of & As a result',
      conceptExplanation:
        '1. Due to / Because of + Noun Phrase: Used to show the cause (e.g. "The road closed due to high winds").\n2. Note: "Because" is followed by a Subject + Verb clause ("because it rained"), whereas "Because of" is followed by a Noun Phrase ("because of the rain").\n3. Linking Consequence: "As a result, [Sentence]" connects the outcome in the next sentence.\n4. Weather nouns vs adjectives: rain (noun) / rainy (adj), flood (noun) / flooded (adj), heat (noun) / hot (adj).',
      patternFormula: '[Outcome] + due to / because of + [Noun Phrase] | [Cause]. As a result, [Outcome].',
      contrastExamples: [
        {
          incorrect: 'The bridge closed due to it was raining heavily.',
          correct: 'The bridge closed due to heavy rain. / The bridge closed because it was raining.',
          explanation: '"Due to" and "because of" must be followed by a noun phrase, not a full subject-verb clause.',
        },
        {
          incorrect: 'It was storm. As the result, tree fell.',
          correct: 'There was a storm. As a result, a tree fell.',
          explanation: 'The fixed expression is "As a result," (with the indefinite article "a").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Claire Wood',
        text: 'Hello! Welcome to the Sheffield Climate Action Fair. Did you experience any issues during the heavy winter storms near the river?',
        translation: 'नमस्ते! शेफील्ड क्लाइमेट एक्शन मेले में आपका स्वागत है। क्या आपने नदी के पास भारी सर्दियों के तूफानों के दौरान किसी समस्या का अनुभव किया?',
      },
      {
        speaker: 'You',
        text: 'Hello Claire! Yes, several roads in our neighborhood were closed due to torrential rain and river flooding. As a result, public transport was completely disrupted for two days.',
        translation: 'नमस्ते क्लेयर! हाँ, मूसलाधार बारिश और नदी में बाढ़ के कारण हमारे पड़ोस की कई सड़कें बंद हो गई थीं। परिणामस्वरूप, दो दिनों के लिए सार्वजनिक परिवहन पूरी तरह से बाधित हो गया था।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_118_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "The highway was closed ___ (due / because) to fallen trees."',
      options: [
        { id: 'opt_1', text: 'due', isCorrect: true },
        { id: 'opt_2', text: 'because', isCorrect: false },
        { id: 'opt_3', text: 'as', isCorrect: false },
      ],
      correctAnswer: 'due',
      explanation: 'Use "due to" with the preposition "to".',
    },
    {
      id: 'cp_a2_118_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly connects cause and effect with "because of"?',
      options: [
        { id: 'opt_1', text: 'Many flights were delayed because of severe storm conditions.', isCorrect: true },
        { id: 'opt_2', text: 'Many flights were delayed because of it was stormy.', isCorrect: false },
        { id: 'opt_3', text: 'Flights delayed because of storming.', isCorrect: false },
      ],
      correctAnswer: 'Many flights were delayed because of severe storm conditions.',
      explanation: '"Because of" must be followed by a noun phrase.',
    },
    {
      id: 'cp_a2_118_3',
      type: 'multiple_choice',
      prompt: 'Which phrase introduces a consequence sentence?',
      options: [
        { id: 'opt_1', text: 'As a result,', isCorrect: true },
        { id: 'opt_2', text: 'Due to result,', isCorrect: false },
        { id: 'opt_3', text: 'For the resulting,', isCorrect: false },
      ],
      correctAnswer: 'As a result,',
      explanation: '"As a result," is the standard transitional adverbial phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_118_1',
      scenarioContext: 'Explain a disruption caused by bad weather.',
      prompt: 'Build: "The bus service stopped due to heavy snowfall."',
      targetStructure: 'Subject + verb + due to + noun phrase',
      wordBank: ['The', 'bus', 'service', 'stopped', 'due', 'to', 'heavy', 'snowfall', 'because', 'was'],
      acceptableSolutions: [
        'The bus service stopped due to heavy snowfall',
        'The bus service stopped due to heavy snowfall.',
      ],
      explanation: 'Cause and effect structure using "due to".',
    },
    {
      id: 'sc_a2_118_2',
      scenarioContext: 'Describe an eco-friendly daily habit.',
      prompt: 'Build: "I try to reduce single-use plastic every day."',
      targetStructure: 'Subject + try to + base verb + noun phrase + time phrase',
      wordBank: ['I', 'try', 'to', 'reduce', 'single-use', 'plastic', 'every', 'day', 'reducing', 'for'],
      acceptableSolutions: [
        'I try to reduce single-use plastic every day',
        'I try to reduce single-use plastic every day.',
      ],
      explanation: 'Expresses sustainable personal action clearly.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_118_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! Welcome to the Sheffield Climate Action stall in the Peace Gardens. Last winter our city saw record rainfall and river levels. How was your area affected by the extreme winter weather?',
      partnerAudioText:
        'Hi there! Welcome to the Sheffield Climate Action stall in the Peace Gardens. Last winter our city saw record rainfall and river levels. How was your area affected by the extreme winter weather?',
      partnerQuestionHindi:
        'नमस्ते! पीस गार्डन्स में शेफील्ड क्लाइमेट एक्शन स्टॉल पर आपका स्वागत है। पिछली सर्दियों में हमारे शहर में रिकॉर्ड बारिश और नदी का जलस्तर देखा गया था। अत्यधिक सर्दियों के मौसम से आपका क्षेत्र कैसे प्रभावित हुआ था?',
      expectedFunction: 'Describe Weather Impact (due to heavy rain / river flooded / as a result roads closed)',
      contextGoal:
        'Explain that your neighborhood near the River Don suffered localized flooding due to three days of nonstop torrential rain; as a result, buses could not run and several local shops had water damage.',
      targetVocabulary: ['localized flooding near the River Don', 'due to three days of continuous torrential rain', 'as a result local buses were cancelled', 'shops suffered water damage'],
      suggestedResponses: [
        {
          label: 'Rich Scaffold',
          text: 'Hi Claire! In our area near the River Don, we had serious localized flooding due to three days of nonstop torrential rain. As a result, the main bus routes were cancelled and several local grocery shops suffered water damage.',
          scaffoldingLevel: 'high',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Weather Cause (due to / because of / rain / storm / downpour)',
          patterns: ['due to', 'because of', 'rain', 'torrential', 'storm', 'downpour', 'three days', 'weather'],
          required: true,
        },
        {
          name: 'Impact & Consequence (flooding / as a result / closed / buses / shops)',
          patterns: ['flooding', 'flood', 'as a result', 'buses', 'roads', 'closed', 'shops', 'river don', 'damage'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'due_to_clause_error',
          pattern: /\bdue to it was raining\b|\bbecause of it rained\b/i,
          errorType: 'grammar',
          message: 'Follow "due to" or "because of" with a noun phrase: "due to torrential rain".',
          correctionPattern: 'due to torrential rain',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_118_1',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly uses "due to"?',
        options: [
          { id: 'opt_1', text: 'The bridge was closed due to rising floodwaters.', isCorrect: true },
          { id: 'opt_2', text: 'The bridge was closed due to water is rising.', isCorrect: false },
          { id: 'opt_3', text: 'Bridge closed due to flood it happened.', isCorrect: false },
        ],
        correctAnswer: 'The bridge was closed due to rising floodwaters.',
        explanation: '"Due to" must be followed by a noun phrase ("rising floodwaters").',
      },
    },
    {
      id: 'turn_a2_118_2',
      turnIndex: 2,
      partnerPrompt:
        'It is alarming how fast flood levels can rise during storms. Climate scientists note that warmer atmospheric temperatures hold more moisture, which leads to these intense downpours. What steps do you personally take in your daily routine to live more sustainably?',
      partnerAudioText:
        'It is alarming how fast flood levels can rise during storms. Climate scientists note that warmer atmospheric temperatures hold more moisture, which leads to these intense downpours. What steps do you personally take in your daily routine to live more sustainably?',
      partnerQuestionHindi:
        'यह चिंताजनक है कि तूफानों के दौरान बाढ़ का स्तर कितनी तेजी से बढ़ सकता है। जलवायु वैज्ञानिकों का कहना है कि गर्म वायुमंडलीय तापमान में अधिक नमी रहती है, जिससे यह भारी मूसलाधार बारिश होती है। अधिक टिकाऊ जीवन जीने के लिए आप व्यक्तिगत रूप से अपनी दैनिक दिनचर्या में क्या कदम उठाते हैं?',
      expectedFunction: 'Share Daily Sustainable Habits (public transport / reusable bags / energy saving)',
      contextGoal:
        'Explain that you commute by bicycle or tram rather than driving; you avoid single-use plastic containers, and you turn off heating when leaving the house to save electricity.',
      targetVocabulary: ['commute by bicycle and tram instead of driving', 'eliminate single-use plastic water bottles', 'turn down the thermostat to conserve energy', 'recycle household packaging'],
      suggestedResponses: [
        {
          label: 'Rich Scaffold',
          text: 'In my daily routine, I commute by bicycle or tram instead of driving a car. I also avoid buying single-use plastic bottles, carry reusable shopping bags, and turn down the home thermostat to conserve electricity and lower emissions.',
          scaffoldingLevel: 'high',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Green Transport (bicycle / tram / walk / bus / instead of driving)',
          patterns: ['bicycle', 'bike', 'tram', 'walk', 'bus', 'public transport', 'driving', 'car'],
          required: true,
        },
        {
          name: 'Resource Conservation (plastic / reusable / thermostat / electricity / recycle)',
          patterns: ['single-use', 'plastic', 'reusable', 'bags', 'bottles', 'thermostat', 'energy', 'electricity', 'recycle'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_118_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I cycle to work instead ___ driving a car."',
        options: [
          { id: 'opt_1', text: 'of', isCorrect: true },
          { id: 'opt_2', text: 'from', isCorrect: false },
          { id: 'opt_3', text: 'to', isCorrect: false },
        ],
        correctAnswer: 'of',
        explanation: 'The fixed prepositional phrase is "instead of".',
      },
    },
    {
      id: 'turn_a2_118_3',
      turnIndex: 3,
      partnerPrompt:
        'Those individual habits make a huge collective difference! This spring, our volunteer network is planting 500 native trees along the riverbanks to absorb excess rainwater and prevent future mudslides. Would you be interested in joining our Saturday morning planting team?',
      partnerAudioText:
        'Those individual habits make a huge collective difference! This spring, our volunteer network is planting 500 native trees along the riverbanks to absorb excess rainwater and prevent future mudslides. Would you be interested in joining our Saturday morning planting team?',
      partnerQuestionHindi:
        'वे व्यक्तिगत आदतें एक बड़ा सामूहिक अंतर पैदा करती हैं! इस वसंत में, हमारा स्वयंसेवी नेटवर्क अतिरिक्त बारिश के पानी को सोखने और भविष्य के भूस्खलन को रोकने के लिए नदी के किनारों पर 500 देशी पेड़ लगा रहा है। क्या आप हमारी शनिवार सुबह की वृक्षारोपण टीम में शामिल होने में रुचि रखेंगे?',
      expectedFunction: 'Volunteer for Tree-Planting & Inquire About Practical Details',
      contextGoal:
        'Enthusiastically sign up for the tree-planting project; ask what time it starts on Saturday morning and whether volunteers need to bring their own gardening gloves and spades.',
      targetVocabulary: ['would love to volunteer for the tree-planting team', 'planting trees prevents riverbank soil erosion', 'what time does the team meet on Saturday', 'should I bring gardening gloves and a spade'],
      suggestedResponses: [
        {
          label: 'Rich Scaffold',
          text: 'I would love to volunteer for the tree-planting team! Planting trees is such an effective way to stop soil erosion along the river. What time does the session start on Saturday morning, and do we need to bring our own spades and gardening gloves?',
          scaffoldingLevel: 'high',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Volunteer Acceptance (would love to / volunteer / join / sign up)',
          patterns: ['love to', 'volunteer', 'join', 'sign up', 'trees', 'planting', 'yes'],
          required: true,
        },
        {
          name: 'Practical Inquiries (time / saturday / gloves / spade / tools)',
          patterns: ['what time', 'saturday', 'gloves', 'spades', 'tools', 'bring', 'meet', 'session'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_118_3',
        type: 'multiple_choice',
        prompt: 'Which response enthusiastically signs up for a community environmental project?',
        options: [
          { id: 'opt_1', text: 'I would love to join the tree-planting team on Saturday morning!', isCorrect: true },
          { id: 'opt_2', text: 'I am plant tree.', isCorrect: false },
          { id: 'opt_3', text: 'Tree is okay.', isCorrect: false },
        ],
        correctAnswer: 'I would love to join the tree-planting team on Saturday morning!',
        explanation: 'Enthusiastic and polite acceptance.',
      },
    },
    {
      id: 'turn_a2_118_4',
      turnIndex: 4,
      partnerPrompt:
        'We meet at 9:30 AM at Kelham Island footbridge, and we provide all spades, saplings, gloves, and hot tea! I have added your name to our volunteer roster. Thank you for your passion for our local environment, Alex!',
      partnerAudioText:
        'We meet at 9:30 AM at Kelham Island footbridge, and we provide all spades, saplings, gloves, and hot tea! I have added your name to our volunteer roster. Thank you for your passion for our local environment, Alex!',
      partnerQuestionHindi:
        'हम केल्हम आइलैंड फुटब्रिज पर सुबह 9:30 बजे मिलते हैं, और हम सभी फावड़े, पौधे, दस्ताने और गर्म चाय प्रदान करते हैं! मैंने आपका नाम हमारे स्वयंसेवक रोस्टर में जोड़ दिया है। हमारे स्थानीय पर्यावरण के प्रति आपके जुनून के लिए धन्यवाद, एलेक्स!',
      expectedFunction: 'Confirm Saturday Attendance & Express Enthusiasm',
      contextGoal:
        'Confirm meeting at Kelham Island footbridge at 9:30 AM on Saturday; thank Claire for organizing such an inspiring environmental community project.',
      targetVocabulary: ['meet at 9:30 AM at Kelham Island bridge', 'see you on Saturday morning', 'thank you Claire for leading this inspiring initiative', 'have a wonderful day at the fair'],
      suggestedResponses: [
        {
          label: 'Rich Scaffold',
          text: 'Perfect! I will see you on Saturday at 9:30 AM at the Kelham Island footbridge. Thank you so much Claire for organizing such an inspiring community project—have a wonderful day at the climate fair!',
          scaffoldingLevel: 'high',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Confirmation & Thanks',
          patterns: ['perfect', '9:30', 'kelham island', 'saturday', 'see you', 'thank you', 'claire', 'inspiring', 'wonderful day'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_118_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I look forward to ___ (plant) trees with the team."',
        options: [
          { id: 'opt_1', text: 'planting', isCorrect: true },
          { id: 'opt_2', text: 'plant', isCorrect: false },
          { id: 'opt_3', text: 'planted', isCorrect: false },
        ],
        correctAnswer: 'planting',
        explanation: 'Gerund (-ing) follows "look forward to".',
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
