import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_33: ConversationDefinition = {
  id: 'conv_a1_33',
  title: 'Object Pronouns & Giving Gifts or Help (me, you, him, her, it, us, them)',
  cefr: 'A1',
  unitId: 'unit_a1_3',
  lessonLinks: ['lesson_a1_3_33'],
  estimatedMinutes: 5,
  scenario:
    'You are helping your neighbor Sarah organize a surprise birthday party for her brother David. You talk about buying gifts for him, asking others to help you, and delivering supplies to them.',
  communicativeGoals: [
    'Use object pronouns (me, you, him, her, it, us, them) accurately after verbs and prepositions',
    'Offer and request assistance ("Can you help me with this?", "I can give it to her")',
    'Discuss gift choices and party preparation actions',
    'Coordinate group tasks smoothly with pronouns',
  ],
  canDoStatements: [
    'Can replace nouns with object pronouns in everyday conversations (CEFR A1.2)',
    'Can ask for assistance and offer help using "Can you help us?" and "Let me show you"',
    'Can describe giving or sending items to different people',
  ],
  characters: [
    {
      id: 'char_sarah',
      name: 'Sarah',
      role: 'Neighbor & Friend',
      avatar: '🎁',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'present',
        ipa: '/ˈprɛzənt/',
        partOfSpeech: 'noun',
        meaning: 'A thing given to someone as a gift',
        exampleSentence: 'We bought a wonderful present for him.',
        translations: { hi: 'उपहार / तोहफ़ा' },
      },
      {
        word: 'surprise',
        ipa: '/sərˈpraɪz/',
        partOfSpeech: 'noun',
        meaning: 'An unexpected event, fact, or thing',
        exampleSentence: 'This birthday party is a complete surprise for her.',
        translations: { hi: 'आश्चर्य / सरप्राइज' },
      },
      {
        word: 'help',
        ipa: '/hɛlp/',
        partOfSpeech: 'verb',
        meaning: 'To make it easier or possible for someone to do something',
        exampleSentence: 'Can you please help us carry these boxes?',
        translations: { hi: 'मदद करना / सहायता देना' },
      },
      {
        word: 'send',
        ipa: '/sɛnd/',
        partOfSpeech: 'verb',
        meaning: 'To cause to go or be taken to a particular destination',
        exampleSentence: 'I will send them the party invitation right away.',
        translations: { hi: 'भेजना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Can you help me with...?',
        functionCategory: 'Requesting Assistance',
        exampleSentence: 'Can you help me with the decorations?',
      },
      {
        phrase: 'I bought it for him.',
        functionCategory: 'Describing a Gift',
        exampleSentence: 'David loves books, so I bought it for him.',
      },
      {
        phrase: 'Let’s invite them.',
        functionCategory: 'Group Action',
        exampleSentence: 'Let’s invite them to the celebration.',
      },
      {
        phrase: 'Give it to us.',
        functionCategory: 'Handing Over Objects',
        exampleSentence: 'Give it to us and we will wrap it.',
      },
    ],
    grammar: {
      title: 'Object Pronouns After Verbs and Prepositions (me, you, him, her, it, us, them)',
      conceptExplanation:
        'Subject pronouns (I, you, he, she, it, we, they) do the action. Object pronouns (me, you, him, her, it, us, them) receive the action or come after prepositions (for, to, with, about).',
      patternFormula: 'Verb + [Object Pronoun] | Preposition + [Object Pronoun] (e.g. for him, to her, with us)',
      contrastExamples: [
        {
          incorrect: 'I bought a gift for he.',
          correct: 'I bought a gift for him.',
          explanation: 'Use object pronoun "him" after the preposition "for".',
        },
        {
          incorrect: 'Can you help we?',
          correct: 'Can you help us?',
          explanation: 'Use object pronoun "us" after the verb "help".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Sarah',
        text: 'Hi! Thank you so much for coming over. David’s birthday is on Saturday, and I really need someone to help me organize it!',
        translation: 'नमस्ते! यहाँ आने के लिए बहुत-बहुत धन्यवाद। डेविड का जन्मदिन शनिवार को है, और मुझे इसे व्यवस्थित करने में मेरी मदद करने के लिए किसी की ज़रूरत है!',
      },
      {
        speaker: 'You',
        text: 'I would love to help you! What can I do for him?',
        translation: 'मुझे आपकी मदद करने में खुशी होगी! मैं उसके लिए क्या कर सकता हूँ?',
      },
      {
        speaker: 'Sarah',
        text: 'Could you please call our friends and invite them? Here is the list with their numbers.',
        translation: 'क्या आप कृपया हमारे दोस्तों को कॉल करके उन्हें आमंत्रित कर सकते हैं? यहाँ उनके नंबरों की सूची है।',
      },
      {
        speaker: 'You',
        text: 'Sure, I will call them this afternoon and give them all the details.',
        translation: 'ज़रूर, मैं आज दोपहर उन्हें कॉल करूँगा और उन्हें सारी जानकारी दूँगा।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_33_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct object pronoun: "David loves music, so we bought a guitar for ___."',
      options: [
        { id: 'opt_1', text: 'him', isCorrect: true },
        { id: 'opt_2', text: 'he', isCorrect: false },
        { id: 'opt_3', text: 'his', isCorrect: false },
      ],
      correctAnswer: 'him',
      explanation: 'Use the object pronoun "him" after preposition "for".',
    },
    {
      id: 'cp_a1_33_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses object pronouns for a group?',
      options: [
        { id: 'opt_1', text: 'Our friends are coming and Sarah will welcome them.', isCorrect: true },
        { id: 'opt_2', text: 'Our friends are coming and Sarah will welcome they.', isCorrect: false },
        { id: 'opt_3', text: 'Our friends are coming and Sarah will welcome their.', isCorrect: false },
      ],
      correctAnswer: 'Our friends are coming and Sarah will welcome them.',
      explanation: '"Them" is the correct object pronoun for "friends" (third-person plural).',
    },
    {
      id: 'cp_a1_33_3',
      type: 'multiple_choice',
      prompt: 'How do you ask someone to assist you and your colleague?',
      options: [
        { id: 'opt_1', text: 'Could you please help us with these heavy boxes?', isCorrect: true },
        { id: 'opt_2', text: 'Could you please help we with these heavy boxes?', isCorrect: false },
        { id: 'opt_3', text: 'Could you please help our with these heavy boxes?', isCorrect: false },
      ],
      correctAnswer: 'Could you please help us with these heavy boxes?',
      explanation: '"Us" is the object pronoun representing the speaker and another person.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_33_1',
      scenarioContext: 'Offer assistance with the birthday cake.',
      prompt: 'Build: "I can help you carry it to the kitchen."',
      targetStructure: 'Subject + can + base verb + object pronoun + base verb + object pronoun + prepositional phrase',
      wordBank: ['I', 'can', 'help', 'you', 'carry', 'it', 'to', 'the', 'kitchen', 'she', 'him', 'we'],
      acceptableSolutions: [
        'I can help you carry it to the kitchen',
        'I can help you carry it to the kitchen.',
      ],
      explanation: 'Uses object pronouns "you" (after help) and "it" (after carry).',
    },
    {
      id: 'sc_a1_33_2',
      scenarioContext: 'Describe contacting friends.',
      prompt: 'Build: "Let us call them and invite them tonight."',
      targetStructure: 'Let + object pronoun + base verb + object pronoun + coordinator + base verb + object pronoun + adverb',
      wordBank: ['Let', 'us', 'call', 'them', 'and', 'invite', 'them', 'tonight', 'they', 'we', 'he'],
      acceptableSolutions: [
        'Let us call them and invite them tonight',
        'Let us call them and invite them tonight.',
      ],
      explanation: 'Sequential use of object pronouns "us" and "them".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_33_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi! Thanks so much for coming over. My brother David’s birthday is this weekend, and we want to keep it a secret. Can you help me prepare for it?',
      partnerAudioText:
        'Hi! Thanks so much for coming over. My brother David’s birthday is this weekend, and we want to keep it a secret. Can you help me prepare for it?',
      partnerQuestionHindi:
        'नमस्ते! यहाँ आने के लिए बहुत धन्यवाद। मेरे भाई डेविड का जन्मदिन इस वीकेंड है, और हम इसे गुप्त रखना चाहते हैं। क्या आप इसकी तैयारी में मेरी मदद कर सकते हैं?',
      expectedFunction: 'Offer Assistance & Inquire About Tasks',
      contextGoal:
        'Enthusiastically offer to help Sarah ("Of course I can help you!", "I would love to help you") and ask what needs to be done.',
      targetVocabulary: ['help you', 'of course', 'happy to', 'for him', 'prepare', 'what can i do'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Of course, I would be happy to help you! What can I do for him and the party?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Yes, I can definitely help you! Tell me what you need me to do.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Count on me! What should we do first for him?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Offer Help',
          patterns: [
            'help you',
            'of course',
            'happy to',
            'for him',
            'what can i do',
            'glad to help',
            'sure',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'help_he_error',
          pattern: /\bhelp he\b/i,
          errorType: 'grammar',
          message: 'Use the object pronoun "him" (help him / for him) rather than the subject pronoun "he".',
          correctionPattern: 'help him / for him',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_33_1',
        type: 'fill_blank',
        prompt: 'Choose the correct pronoun: "I am ready to help ___ with the party."',
        options: [
          { id: 'opt_1', text: 'you', isCorrect: true },
          { id: 'opt_2', text: 'your', isCorrect: false },
          { id: 'opt_3', text: 'yours', isCorrect: false },
        ],
        correctAnswer: 'you',
        explanation: '"You" functions as both subject and object pronoun.',
      },
    },
    {
      id: 'turn_a1_33_2',
      turnIndex: 2,
      partnerPrompt:
        'Great! First, we need to choose a present for David. He loves reading and photography. Should we buy him a leather camera strap or a photo book?',
      partnerAudioText:
        'Great! First, we need to choose a present for David. He loves reading and photography. Should we buy him a leather camera strap or a photo book?',
      partnerQuestionHindi:
        'बहुत बढ़िया! सबसे पहले, हमें डेविड के लिए एक उपहार चुनना होगा। उसे पढ़ना और फोटोग्राफी बहुत पसंद है। क्या हमें उसके लिए लेदर कैमरा स्ट्रैप खरीदना चाहिए या एक फोटो बुक?',
      expectedFunction: 'Suggest Gift & Use Object Pronouns (him / it)',
      contextGoal:
        'Recommend one of the gifts using "buy him..." or "give it to him" with a brief reason.',
      targetVocabulary: ['buy him', 'give it to him', 'camera strap', 'photo book', 'present', 'because'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I think we should buy him the camera strap. It is very useful and he can use it every day!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Let’s get him the photo book. I am sure he will love it.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'The camera strap for him! It is a great gift.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gift Choice with Pronouns',
          patterns: [
            'buy him',
            'get him',
            'for him',
            'love it',
            'camera strap',
            'photo book',
            'give him',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_33_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly uses object pronouns for a gift?',
        options: [
          { id: 'opt_1', text: 'We bought a camera for him and he loves it.', isCorrect: true },
          { id: 'opt_2', text: 'We bought a camera for he and he loves it.', isCorrect: false },
          { id: 'opt_3', text: 'We bought a camera for his and he loves its.', isCorrect: false },
        ],
        correctAnswer: 'We bought a camera for him and he loves it.',
        explanation: '"Him" follows preposition "for", and "it" follows transitive verb "loves".',
      },
    },
    {
      id: 'turn_a1_33_3',
      turnIndex: 3,
      partnerPrompt:
        'I will order it right now. Next, what about the guests? Lisa, Tom, and Carlos want to join us. Could you call them and tell them the party is at seven?',
      partnerAudioText:
        'I will order it right now. Next, what about the guests? Lisa, Tom, and Carlos want to join us. Could you call them and tell them the party is at seven?',
      partnerQuestionHindi:
        'मैं इसे अभी ऑर्डर करती हूँ। इसके बाद, मेहमानों के बारे में क्या? लीसा, टॉम और कार्लोस हमारे साथ शामिल होना चाहते हैं। क्या आप उन्हें कॉल करके बता सकते हैं कि पार्टी सात बजे है?',
      expectedFunction: 'Confirm Action with Object Pronouns (them / us)',
      contextGoal:
        'Agree to contact the friends using "call them", "message them", or "tell them" and confirm the time.',
      targetVocabulary: ['call them', 'tell them', 'message them', 'join us', 'seven', 'no problem'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes, no problem! I will call them right now and tell them to join us at seven o\'clock.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Sure! I will message them today and give them the time and address.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Consider it done! I will let them know right away.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Contact Guests',
          patterns: [
            'call them',
            'tell them',
            'message them',
            'let them know',
            'join us',
            'at seven',
            'no problem',
            'sure',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'tell_they_error',
          pattern: /\btell they\b/i,
          errorType: 'grammar',
          message: 'Use "tell them" with the object pronoun "them", not "they".',
          correctionPattern: 'tell them',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_33_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Please call our friends and invite ___ to the dinner."',
        options: [
          { id: 'opt_1', text: 'them', isCorrect: true },
          { id: 'opt_2', text: 'they', isCorrect: false },
          { id: 'opt_3', text: 'their', isCorrect: false },
        ],
        correctAnswer: 'them',
        explanation: '"Them" is the object pronoun representing plural third persons.',
      },
    },
    {
      id: 'turn_a1_33_4',
      turnIndex: 4,
      partnerPrompt:
        'You are an amazing friend! David is going to be so surprised and happy. Thank you for helping us make this special!',
      partnerAudioText:
        'You are an amazing friend! David is going to be so surprised and happy. Thank you for helping us make this special!',
      partnerQuestionHindi:
        'आप एक अद्भुत दोस्त हैं! डेविड बहुत हैरान और खुश होगा। इसे खास बनाने में हमारी मदद करने के लिए धन्यवाद!',
      expectedFunction: 'Respond to Gratitude & Close Conversation',
      contextGoal:
        'Respond warmly to Sarah\'s gratitude (e.g. "You\'re welcome!", "Glad to help you and David") and say goodbye.',
      targetVocabulary: ["you're welcome", 'glad to help', 'see you on saturday', 'surprise him', 'bye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'You are very welcome, Sarah! I am so glad I could help you. See you on Saturday for the surprise!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'It was my pleasure! I cannot wait to see his face. See you Saturday!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Anytime! See you and everyone on Saturday!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing Gratitude',
          patterns: [
            'welcome',
            'pleasure',
            'glad to help',
            'see you',
            'saturday',
            'surprise',
            'anytime',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_33_4',
        type: 'multiple_choice',
        prompt: 'Which response is polite when someone thanks you for helping?',
        options: [
          { id: 'opt_1', text: "You're very welcome! I was happy to help.", isCorrect: true },
          { id: 'opt_2', text: 'You owe me a favor now.', isCorrect: false },
          { id: 'opt_3', text: 'I am done with you.', isCorrect: false },
        ],
        correctAnswer: "You're very welcome! I was happy to help.",
        explanation: 'Polite and friendly response to gratitude.',
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
