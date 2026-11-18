import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_226: ConversationDefinition = {
  id: 'conv_a2_226',
  title: 'Social Connections, Relationships & Describing People',
  cefr: 'A2',
  unitId: 'unit_a2_16',
  lessonLinks: ['lesson_a2_16_226'],
  estimatedMinutes: 5,
  scenario:
    'You are attending a neighborhood garden mixer and talking with Vikram, a long-time resident and community volunteer. You describe your close circle of friends, discuss personality traits and physical appearances, and explain why maintaining supportive social relationships is meaningful to you.',
  communicativeGoals: [
    'Describe personal characteristics and physical traits using descriptive adjectives (e.g., outgoing, considerate, dependable)',
    'Use relative clauses with "who" to define and describe friends and acquaintances ("She is someone who always listens")',
    'Express reasons for close friendships using "because" and "what I value most about..."',
    'Engage in natural, polite social conversation about interpersonal relationships in A2 English',
  ],
  canDoStatements: [
    'Can describe the appearance and personality of friends, family, and acquaintances in detail',
    'Can use relative pronouns ("who", "that") to provide extra information about people',
    'Can talk about social connections and express appreciation for supportive relationships',
  ],
  characters: [
    {
      id: 'char_vikram_neighbor',
      name: 'Vikram',
      role: 'Community Volunteer & Friendly Neighbor',
      avatar: '🤝',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'outgoing',
        ipa: '/ˈaʊtɡəʊɪŋ/',
        partOfSpeech: 'adjective',
        meaning: 'Friendly, energetic, and finding it easy and enjoyable to talk to others',
        exampleSentence: 'My sister is very outgoing and makes friends wherever she travels.',
        translations: { hi: 'मिलनसार / बहिर्मुखी (आउटगोइंग)' },
      },
      {
        word: 'considerate',
        ipa: '/kənˈsɪdərət/',
        partOfSpeech: 'adjective',
        meaning: 'Careful not to inconvenience or hurt others; thoughtful and kind',
        exampleSentence: 'He is a considerate neighbor who always keeps the music down at night.',
        translations: { hi: 'विचारशील / दूसरों का ध्यान रखने वाला (कंसिडरेट)' },
      },
      {
        word: 'dependable',
        ipa: '/dɪˈpendəbl/',
        partOfSpeech: 'adjective',
        meaning: 'Trustworthy and reliable; someone you can always count on',
        exampleSentence: 'Ananya is dependable; she never arrives late to our study sessions.',
        translations: { hi: 'भरोसेमंद / विश्वसनीय (डिपेंडेबल)' },
      },
      {
        word: 'acquaintance',
        ipa: '/əˈkweɪntəns/',
        partOfSpeech: 'noun',
        meaning: 'A person one knows slightly, but who is not a close personal friend',
        exampleSentence: 'I met several helpful acquaintances at the local community center.',
        translations: { hi: 'परिचित व्यक्ति (एक्वेंटेंस)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'She is the kind of person who always supports her friends.',
        functionCategory: 'Describing character using relative clauses',
        exampleSentence: 'He is someone who stays calm in difficult moments.',
      },
      {
        phrase: 'What I value most about him is his honesty and warmth.',
        functionCategory: 'Expressing values in relationships',
        exampleSentence: 'What I appreciate most in a friend is mutual trust.',
      },
      {
        phrase: 'We have known each other since university days.',
        functionCategory: 'Explaining friendship history with present perfect',
        exampleSentence: 'We have been close friends for over five years.',
      },
      {
        phrase: 'He has a warm smile and always makes everyone feel welcome.',
        functionCategory: 'Combining physical and personality descriptions',
        exampleSentence: 'She has wavy brown hair and an easygoing personality.',
      },
    ],
    grammar: {
      title: 'Defining Relative Clauses with "Who" for Character Descriptions',
      conceptExplanation:
        '1. Use "who" to join two ideas about a person without repeating the noun or pronoun:\n   - "I have a friend. She lives next door." -> "I have a friend who lives next door."\n2. Order of Adjectives: Place opinion/personality adjectives before nouns, or use them after the verb "to be" ("She is dependable and considerate").',
      patternFormula: 'Subject + is someone / a person + who + [Verb Phrase]',
      contrastExamples: [
        {
          incorrect: 'He is a friend which helps me a lot.',
          correct: 'He is a friend who helps me a lot.',
          explanation: 'Use "who" for people, not "which".',
        },
        {
          incorrect: 'She is a very consider person.',
          correct: 'She is a very considerate person.',
          explanation: 'Use the adjective "considerate", not the verb "consider".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Vikram',
        text: 'Welcome to our neighborhood mixer! Have you made any close friends around here yet?',
        translation: 'हमारे मोहल्ले के मिलन समारोह में आपका स्वागत है! क्या आपने यहाँ अभी तक कोई करीबी दोस्त बनाया है?',
      },
      {
        speaker: 'Learner',
        text: 'Hello Vikram! Yes, I met Rohan, who lives on the third floor. He is very outgoing and dependable.',
        translation: 'नमस्ते विक्रम! हाँ, मैं रोहन से मिला, जो तीसरी मंज़िल पर रहता है। वह बहुत मिलनसार और भरोसेमंद है।',
      },
      {
        speaker: 'Vikram',
        text: 'That’s wonderful! Having dependable friends nearby makes community life so much richer.',
        translation: 'यह बहुत बढ़िया है! पास में भरोसेमंद दोस्त होने से सामुदायिक जीवन बहुत बेहतर हो जाता है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_226_1',
      type: 'fill_blank',
      prompt: 'Complete with the relative pronoun: "She is a kind mentor ______ (who / which) always encourages everyone."',
      options: [
        { id: 'opt_1', text: 'who', isCorrect: true },
        { id: 'opt_2', text: 'which', isCorrect: false },
        { id: 'opt_3', text: 'where', isCorrect: false },
      ],
      correctAnswer: 'who',
      explanation: 'Use "who" as the relative pronoun for people.',
    },
    {
      id: 'cp_226_2',
      type: 'multiple_choice',
      prompt: 'Which sentence best describes someone who is always trustworthy?',
      options: [
        { id: 'opt_1', text: 'He is a dependable friend who keeps his promises.', isCorrect: true },
        { id: 'opt_2', text: 'He is a depend person who forgets things.', isCorrect: false },
        { id: 'opt_3', text: 'He is someone which talks loudly.', isCorrect: false },
      ],
      correctAnswer: 'He is a dependable friend who keeps his promises.',
      explanation: '"Dependable" means reliable, and "who" correctly refers to a person.',
    },
    {
      id: 'cp_226_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [She is / a considerate person / who / always listens carefully]',
      correctAnswer: 'She is a considerate person who always listens carefully',
      explanation: 'Relative clause structure with adjective + noun + who + verb phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_226_1',
      prompt: 'Construct a sentence describing your best friend as an outgoing and dependable person who helps everyone.',
      scenarioContext: 'Describing your friend to Vikram.',
      targetStructure: 'My best friend is an outgoing and dependable person who always helps others.',
      wordBank: ['My best friend is', 'an outgoing and dependable', 'person who always', 'helps others,', 'Vikram.'],
      acceptableSolutions: [
        'My best friend is an outgoing and dependable person who always helps others.',
        'My friend is dependable and outgoing, helping everyone.',
      ],
      explanation: 'Relative clause with personality adjectives.',
    },
    {
      id: 'sc_226_2',
      prompt: 'Construct a sentence stating that what you value most in a relationship is mutual honesty and trust.',
      scenarioContext: 'Explaining friendship values to Vikram.',
      targetStructure: 'What I value most about my friends is their honesty and warmth.',
      wordBank: ['What I value most', 'about my friends is', 'their honesty and warmth,', 'Vikram.'],
      acceptableSolutions: [
        'What I value most about my friends is their honesty and warmth.',
        'What I value most in friendship is honesty and trust.',
      ],
      explanation: 'Cleft sentence structure expressing personal values.',
    },
  ],
  turns: [
    {
      id: 'turn_226_1',
      turnIndex: 1,
      partnerPrompt:
        'Good evening! Welcome to our neighborhood garden mixer. I’m Vikram from apartment 4B. Have you had a chance to meet any of our neighbors or bring along a close friend?',
      partnerAudioText:
        'Good evening! Welcome to our neighborhood garden mixer. I’m Vikram from apartment 4B. Have you had a chance to meet any of our neighbors or bring along a close friend?',
      partnerQuestionHindi:
        'शुभ संध्या! हमारे पड़ोस के गार्डन मिलन समारोह में आपका स्वागत है। मैं 4B से विक्रम हूँ। क्या आपको हमारे किसी पड़ोसी से मिलने या किसी करीबी दोस्त को साथ लाने का मौका मिला है?',
      expectedFunction: 'Greeting Vikram and describing a close friend or neighbor using personality adjectives and relative clause with "who"',
      contextGoal: 'Greet Vikram warmly and describe a friend or neighbor using "outgoing", "dependable", or "considerate" with a relative clause ("who...")',
      targetVocabulary: ['Good evening Vikram', 'outgoing', 'dependable', 'considerate', 'who', 'friend'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Good evening, Vikram! Nice to meet you. I came with my close friend Ananya, who is very outgoing and considerate.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Vikram! Thanks for the warm welcome. I recently met Rohan on the second floor, who is a very dependable person.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good evening, Vikram! I am delighted to be here. I usually spend time with friends who are supportive, dependable, and easy to talk to.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_vikram',
          patterns: ['good evening', 'hello', 'hi', 'vikram', 'nice to meet you'],
          required: true,
        },
        {
          name: 'relative_clause_description',
          patterns: ['who is', 'who always', 'who lives', 'outgoing', 'dependable', 'considerate', 'friend'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_226_1_which_for_person',
          pattern: /which is a friend/i,
          errorType: 'grammar',
          message: 'Use "who" for people instead of "which": "She is a friend who is very outgoing."',
          correctionPattern: 'I have a friend who is very considerate.',
        },
      ],
      remediationPractice: {
        id: 'rem_226_1',
        type: 'fill_blank',
        prompt: 'Fill in: "He is a colleague ______ (who) always assists new team members."',
        options: [
          { id: 'r1', text: 'who', isCorrect: true },
          { id: 'r2', text: 'which', isCorrect: false },
        ],
        correctAnswer: 'who',
        explanation: 'Use "who" for people.',
      },
    },
    {
      id: 'turn_226_2',
      turnIndex: 2,
      partnerPrompt:
        'It’s wonderful that you have such supportive people around you! When you think about close friendships, what qualities or personal traits do you value most in someone?',
      partnerAudioText:
        'It’s wonderful that you have such supportive people around you! When you think about close friendships, what qualities or personal traits do you value most in someone?',
      partnerQuestionHindi:
        'यह बहुत अच्छी बात है कि आपके आस-पास इतने मददगार लोग हैं! जब आप गहरी दोस्ती के बारे में सोचते हैं, तो आप किसी व्यक्ति में किन गुणों या व्यक्तिगत लक्षणों को सबसे अधिक महत्व देते हैं?',
      expectedFunction: 'Explaining key values in interpersonal relationships using "what I value most is..." or "I appreciate people who..."',
      contextGoal: 'Explain that honesty, empathy, and dependability are the traits you value most in friends',
      targetVocabulary: ['value most', 'honesty', 'dependable', 'supportive', 'trust', 'warmth'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'What I value most about my friends is their honesty and dependability. I appreciate people who listen actively and offer genuine support.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'For me, trust and empathy are essential. I value friends who are considerate and who stay dependable through both good and tough times.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I believe mutual trust and openness make friendships strong. Having someone who is honest and caring is what matters most.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'friendship_values',
          patterns: ['value most', 'honesty', 'trust', 'dependable', 'considerate', 'support', 'care', 'empathy'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_226_2_adjective_confusion',
          pattern: /i value people who is depend/i,
          errorType: 'grammar',
          message: 'Use the adjective "dependable": "I value friends who are dependable."',
          correctionPattern: 'I value friends who are dependable and honest.',
        },
      ],
      remediationPractice: {
        id: 'rem_226_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly expresses personal relationship values?',
        options: [
          { id: 'r1', text: 'What I value most in a friendship is mutual trust and dependability.', isCorrect: true },
          { id: 'r2', text: 'What I value is friend which is depend.', isCorrect: false },
        ],
        correctAnswer: 'What I value most in a friendship is mutual trust and dependability.',
        explanation: 'Accurate vocabulary and relative structure.',
      },
    },
    {
      id: 'turn_226_3',
      turnIndex: 3,
      partnerPrompt:
        'I completely agree. Trust and mutual care build strong communities. We organize a weekly walking club every Saturday morning around the lake. Would you like to join us and meet more neighbors?',
      partnerAudioText:
        'I completely agree. Trust and mutual care build strong communities. We organize a weekly walking club every Saturday morning around the lake. Would you like to join us and meet more neighbors?',
      partnerQuestionHindi:
        'मैं पूरी तरह सहमत हूँ। विश्वास और आपसी देखभाल से मजबूत समुदाय बनते हैं। हम झील के चारों ओर हर शनिवार सुबह एक वॉकिंग क्लब आयोजित करते हैं। क्या आप हमारे साथ जुड़ना चाहेंगे?',
      expectedFunction: 'Accepting the community invitation enthusiastically and expressing appreciation for the neighborly atmosphere',
      contextGoal: 'Accept the invitation to the walking club, confirm interest in Saturday morning, and thank Vikram',
      targetVocabulary: ['walking club', 'Saturday morning', 'thank you', 'delighted', 'look forward to', 'neighbors'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I would love to join the Saturday morning walking club! Thank you so much for the invitation, Vikram. I look forward to meeting everyone.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'That sounds fantastic! Walking around the lake on Saturday is a great way to stay active and make new acquaintances. Count me in!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Thank you, Vikram! I will definitely be there on Saturday. It’s wonderful to be part of such a welcoming neighborhood.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'acceptance_and_gratitude',
          patterns: ['love to join', 'thank you', 'saturday', 'look forward to', 'count me in', 'delighted', 'fantastic'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_226_3_short_answer',
          pattern: /^yes ok$/i,
          errorType: 'interaction',
          message: 'Accept with conversational warmth: "I would love to join the Saturday walking club, Vikram!"',
          correctionPattern: 'I would love to join the walking club! Thank you for inviting me, Vikram.',
        },
      ],
      remediationPractice: {
        id: 'rem_226_3',
        type: 'fill_blank',
        prompt: 'Fill in: "I look forward to ______ (meeting) our neighbors on Saturday."',
        options: [
          { id: 'r1', text: 'meeting', isCorrect: true },
          { id: 'r2', text: 'meet to', isCorrect: false },
        ],
        correctAnswer: 'meeting',
        explanation: '"Look forward to" takes a gerund (-ing).',
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
