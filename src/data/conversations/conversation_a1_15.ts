import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_15: ConversationDefinition = {
  id: 'conv_a1_15',
  title: 'Milestone Celebration: Multicultural Community Meetup',
  cefr: 'A1',
  unitId: 'unit_a1_1',
  lessonLinks: ['lesson_a1_1_15'],
  estimatedMinutes: 6,
  scenario:
    'You are attending the international community welcome party. The event coordinator, Daniel, welcomes you warmly and engages in a comprehensive conversation synthesizing introductions, daily routines, dietary preferences, and abilities.',
  communicativeGoals: [
    'Synthesize personal introductions (name, origin, occupation) from Lessons 1–3',
    'Discuss daily schedules and weekly frequency habits from Lessons 8–10',
    'State dietary preferences and abilities clearly from Lessons 11–14',
    'Maintain a natural, fluid conversational exchange across multiple turns',
  ],
  canDoStatements: [
    'Can participate in a multi-topic conversational interaction at CEFR A1 milestone level',
    'Can integrate vocabulary and grammar from Lessons 1 through 14 cohesively',
    'Can ask and answer reciprocal questions naturally with appropriate intonation and clarity',
  ],
  characters: [
    {
      id: 'char_daniel',
      name: 'Daniel',
      role: 'Community Meetup Coordinator',
      avatar: '🎉',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'community',
        ipa: '/kəˈmjuːnəti/',
        partOfSpeech: 'noun',
        meaning: 'A group of people living in the same place or having a particular characteristic in common',
        exampleSentence: 'Welcome to our international community!',
        translations: { hi: 'समुदाय / समाज' },
      },
      {
        word: 'welcome',
        ipa: '/ˈwelkəm/',
        partOfSpeech: 'interjection',
        meaning: 'Used to greet someone arriving in a polite or friendly way',
        exampleSentence: 'You are very welcome here.',
        translations: { hi: 'स्वागत है' },
      },
      {
        word: 'hobby',
        ipa: '/ˈhɒbi/',
        partOfSpeech: 'noun',
        meaning: 'An activity done regularly in one’s leisure time for pleasure',
        exampleSentence: 'My favorite hobby is photography.',
        translations: { hi: 'शौक' },
      },
      {
        word: 'celebrate',
        ipa: '/ˈselɪbreɪt/',
        partOfSpeech: 'verb',
        meaning: 'Acknowledge a significant day or event with a social gathering',
        exampleSentence: 'Tonight we celebrate our learning milestone!',
        translations: { hi: 'उत्सव मनाना / जश्न मनाना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am originally from..., but now I live in...',
        functionCategory: 'Comprehensive Origin Statement',
        exampleSentence: 'I am originally from India, but now I live in London.',
      },
      {
        phrase: 'During the week, I usually...',
        functionCategory: 'Routine & Schedule Synthesis',
        exampleSentence: 'During the week, I usually study engineering.',
      },
      {
        phrase: 'In my free time, I can...',
        functionCategory: 'Ability & Leisure Synthesis',
        exampleSentence: 'In my free time, I can cook traditional dishes.',
      },
      {
        phrase: 'It is wonderful to meet everyone!',
        functionCategory: 'Social Celebration Statement',
        exampleSentence: 'It is wonderful to be here with you all!',
      },
    ],
    grammar: {
      title: 'Milestone Review: Synthesizing Verb BE, Present Simple & Modals',
      conceptExplanation:
        'Seamlessly combine the verb BE ("I am an engineer"), Present Simple actions ("I wake up at 7, but I don\'t eat meat"), Frequency Adverbs ("I always study on Tuesdays"), and Modal Can ("I can speak two languages").',
      patternFormula: 'BE (Identity) + Present Simple (Habits) + Modal Can (Abilities)',
      contrastExamples: [
        {
          incorrect: 'I am study every day and I can to cook.',
          correct: 'I study every day and I can cook.',
          explanation: 'Combine base Present Simple with modal "can + base verb".',
        },
        {
          incorrect: 'I don’t eats meat and he don’t come.',
          correct: 'I don’t eat meat and he doesn’t come.',
          explanation: 'Maintain correct agreement with "don\'t" (I) and "doesn\'t" (he).',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Daniel',
        text: 'Welcome to our Milestone Party! It is wonderful to see you here. How are you doing tonight?',
        translation: 'हमारी माइलस्टोन पार्टी में आपका स्वागत है! आपको यहाँ देखकर बहुत खुशी हुई। आज रात आप कैसे हैं?',
      },
      {
        speaker: 'You',
        text: 'I am doing great, Daniel! I am very excited to meet everyone and practice my English.',
        translation: 'मैं बहुत अच्छा कर रहा हूँ, डैनियल! मैं सभी से मिलने और अपनी अंग्रेजी का अभ्यास करने के लिए बहुत उत्साहित हूँ।',
      },
      {
        speaker: 'Daniel',
        text: 'Tell us a bit about your life! Where are you from and what do you do during the week?',
        translation: 'हमें अपने जीवन के बारे में थोड़ा बताएं! आप कहाँ से हैं और आप सप्ताह के दौरान क्या करते हैं?',
      },
      {
        speaker: 'You',
        text: 'I am from India and I work as a software engineer. On weekdays, I usually wake up early and commute by metro.',
        translation: 'मैं भारत से हूँ और मैं एक सॉफ्टवेयर इंजीनियर के रूप में काम करता हूँ। कार्यदिवसों पर, मैं आमतौर पर जल्दी उठता हूँ और मेट्रो से यात्रा करता हूँ।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_15_1',
      type: 'multiple_choice',
      prompt: 'Select the comprehensive sentence that combines identity and profession accurately:',
      options: [
        { id: 'opt_1', text: 'I am from New Delhi and I work as an accountant.', isCorrect: true },
        { id: 'opt_2', text: 'I come from New Delhi and I am work accountant.', isCorrect: false },
        { id: 'opt_3', text: 'I is from New Delhi and working accountant.', isCorrect: false },
      ],
      correctAnswer: 'I am from New Delhi and I work as an accountant.',
      explanation: 'Uses "I am from" and "I work as an [job]".',
    },
    {
      id: 'cp_a1_15_2',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "On Saturdays, I ___ play cricket with my friends."',
      options: [
        { id: 'opt_1', text: 'usually', isCorrect: true },
        { id: 'opt_2', text: 'every', isCorrect: false },
        { id: 'opt_3', text: 'always to', isCorrect: false },
      ],
      correctAnswer: 'usually',
      explanation: 'Adverb of frequency "usually" fits naturally before the verb "play".',
    },
    {
      id: 'cp_a1_15_3',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses dietary habit and ability?',
      options: [
        { id: 'opt_1', text: 'I don’t eat meat, but I can cook great pasta.', isCorrect: true },
        { id: 'opt_2', text: 'I am not eat meat, but I can to cook great pasta.', isCorrect: false },
        { id: 'opt_3', text: 'I no eat meat, but I can cooking pasta.', isCorrect: false },
      ],
      correctAnswer: 'I don’t eat meat, but I can cook great pasta.',
      explanation: 'Accurate pairing of "don’t eat" with modal "can cook".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_15_1',
      scenarioContext: 'Give a rich self-introduction at the party.',
      prompt: 'Build: "I am an engineer from India and I live here."',
      targetStructure: 'Subject + BE + article + profession + prepositional origin + conjunction + subject + verb + adverb',
      wordBank: ['I', 'am', 'an', 'engineer', 'from', 'India', 'and', 'I', 'live', 'here', 'work', 'is'],
      acceptableSolutions: [
        'I am an engineer from India and I live here',
        'I am an engineer from India and I live here.',
        'I am a software engineer from India and I live here.',
      ],
      explanation: 'Integrates identity, nationality, and residence.',
    },
    {
      id: 'sc_a1_15_2',
      scenarioContext: 'Describe your routine and dietary lifestyle.',
      prompt: 'Build: "I always wake up early and I don’t drink coffee."',
      targetStructure: 'Subject + adverb + phrasal verb + adverb + conjunction + subject + don’t + verb + object',
      wordBank: ['I', 'always', 'wake', 'up', 'early', 'and', 'I', 'don’t', 'drink', 'coffee', 'am', 'not'],
      acceptableSolutions: [
        'I always wake up early and I don’t drink coffee',
        'I always wake up early and I don’t drink coffee.',
        'I usually wake up early and I don’t drink coffee.',
      ],
      explanation: 'Combines frequency adverbs with Present Simple negation.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_15_1',
      turnIndex: 1,
      partnerPrompt:
        'Welcome to our Milestone Celebration! Everyone is introducing themselves. Could you tell us your name, where you are from, and what you do for work or study?',
      partnerAudioText: 'Welcome to our Milestone Celebration! Everyone is introducing themselves. Could you tell us your name, where you are from, and what you do for work or study?',
      partnerQuestionHindi: 'हमारे माइलस्टोन उत्सव में आपका स्वागत है! सभी अपना परिचय दे रहे हैं। क्या आप हमें अपना नाम, आप कहाँ से हैं, और आप काम या पढ़ाई के लिए क्या करते हैं, बता सकते हैं?',
      expectedFunction: 'Comprehensive Personal Introduction',
      contextGoal: 'State your name, country of origin, and occupation/study using full sentences from Lessons 1–3.',
      targetVocabulary: ['am', 'name', 'from', 'work', 'study', 'engineer', 'student', 'teacher'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hello Daniel! My name is Rahul. I am from India and I work as a software engineer in the city.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hi everyone! I am from Spain and I study architecture at university.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Nice to meet you Daniel! I am an engineer from India living here.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Name & Origin & Occupation',
          patterns: [
            'my name is',
            'i am from',
            'i work as',
            'i study',
            'i am an engineer',
            'i am a student',
            'engineer',
            'student',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_15_1',
        type: 'multiple_choice',
        prompt: 'Which introduction is complete and natural?',
        options: [
          { id: 'opt_1', text: 'My name is Alex, I am from Canada and I work as a designer.', isCorrect: true },
          { id: 'opt_2', text: 'I Alex Canada working.', isCorrect: false },
          { id: 'opt_3', text: 'My origin Canada is I am designer.', isCorrect: false },
        ],
        correctAnswer: 'My name is Alex, I am from Canada and I work as a designer.',
        explanation: 'Provides clear, natural full sentences for introduction.',
      },
    },
    {
      id: 'turn_a1_15_2',
      turnIndex: 2,
      partnerPrompt:
        'Fantastic! We have a buffet table over there with various snacks and drinks. Do you have any dietary preferences, and what skills or hobbies do you enjoy on the weekends?',
      partnerAudioText: 'Fantastic! We have a buffet table over there with various snacks and drinks. Do you have any dietary preferences, and what skills or hobbies do you enjoy on the weekends?',
      partnerQuestionHindi: 'शानदार! हमारे पास वहाँ कई तरह के स्नैक्स और ड्रिंक्स के साथ एक बुफे टेबल है। क्या आपकी कोई डाइट पसंद है, और आप वीकेंड पर किन कौशलों या शौकों का आनंद लेते हैं?',
      expectedFunction: 'Synthesize Diet & Abilities (Don’t / Can)',
      contextGoal: 'Explain what you don\'t eat/drink (Lesson 11) and what you can do or play on weekends (Lessons 10 & 14).',
      targetVocabulary: ['don\'t', 'eat', 'meat', 'can', 'play', 'cook', 'swim', 'weekend', 'usually'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I don’t eat meat, so vegetarian food is great! On weekends, I can cook traditional dishes and play badminton.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I don’t drink alcohol or coffee. In my free time, I can play guitar and speak two languages.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I am vegetarian. I usually play football on Saturdays!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Diet Preference & Ability',
          patterns: [
            "don't eat meat",
            'don’t eat meat',
            'vegetarian',
            'can cook',
            'can play',
            'play badminton',
            'play football',
            'play guitar',
            'on weekends',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_15_2',
        type: 'fill_blank',
        prompt: 'Choose the correct word: "I don’t eat meat, but I ___ cook delicious vegetable curries."',
        options: [
          { id: 'opt_1', text: 'can', isCorrect: true },
          { id: 'opt_2', text: 'am', isCorrect: false },
          { id: 'opt_3', text: 'do can', isCorrect: false },
        ],
        correctAnswer: 'can',
        explanation: 'Use modal "can" to express ability.',
      },
    },
    {
      id: 'turn_a1_15_3',
      turnIndex: 3,
      partnerPrompt:
        'You speak English with such confidence and clarity! Congratulations on completing your first fifteen milestone lessons. Please grab some food and enjoy the party!',
      partnerAudioText: 'You speak English with such confidence and clarity! Congratulations on completing your first fifteen milestone lessons. Please grab some food and enjoy the party!',
      partnerQuestionHindi: 'आप इतने आत्मविश्वास और स्पष्टता के साथ अंग्रेजी बोलते हैं! अपने पहले पंद्रह माइलस्टोन पाठ पूरे करने पर बधाई। कृपया कुछ खाना लें और पार्टी का आनंद लें!',
      expectedFunction: 'Celebratory Closing & Gratitude',
      contextGoal: 'Thank Daniel enthusiastically, celebrate the milestone, and wish everyone a great celebration.',
      targetVocabulary: ['thank', 'celebrate', 'excited', 'party', 'enjoy', 'goodbye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you so much Daniel! I am very proud of this milestone. Let us celebrate and enjoy the evening!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thank you for your warm welcome! Looking forward to having fun tonight.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Thanks Daniel! Cheers to everyone, let us celebrate!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Milestone Celebration & Thanks',
          patterns: ['thank you', 'thanks', 'celebrate', 'milestone', 'enjoy the evening', 'party', 'cheers'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_15_3',
        type: 'multiple_choice',
        prompt: 'Which statement expresses celebratory gratitude?',
        options: [
          { id: 'opt_1', text: 'Thank you so much Daniel! Let us celebrate together.', isCorrect: true },
          { id: 'opt_2', text: 'Party is done give food.', isCorrect: false },
          { id: 'opt_3', text: 'I am taking celebrate is now.', isCorrect: false },
        ],
        correctAnswer: 'Thank you so much Daniel! Let us celebrate together.',
        explanation: 'Enthusiastic and polite celebration statement.',
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
