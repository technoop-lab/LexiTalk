import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_26: ConversationDefinition = {
  id: 'conv_a1_26',
  title: 'Discussing Talents & Asking for Help with Laptop Setup',
  cefr: 'A1',
  unitId: 'unit_a1_2',
  lessonLinks: ['lesson_a1_2_26'],
  estimatedMinutes: 5,
  scenario:
    'You are in the study lounge preparing for a group project with your classmate, Nina. You discuss language skills and tech abilities, and ask for help connecting to the wireless printer.',
  communicativeGoals: [
    'Express abilities and lack of abilities using modal "can" and "can\'t / cannot" (can speak two languages, can\'t code)',
    'Ask about skills and talents using "Can you + base verb?" (Can you drive? Can you play chess?)',
    'Politely request assistance using "Can you help me with... / Could you please help me?"',
  ],
  canDoStatements: [
    'Can describe what they can and cannot do using modal "can/can\'t" (CEFR A1)',
    'Can ask simple questions about someone\'s abilities',
    'Can ask for assistance politely and express gratitude for help',
  ],
  characters: [
    {
      id: 'char_nina',
      name: 'Nina',
      role: 'Classmate & Tech Helper',
      avatar: '👩‍💻',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'ability',
        ipa: '/əˈbɪləti/',
        partOfSpeech: 'noun',
        meaning: 'Possession of the means or skill to do something',
        exampleSentence: 'Speaking multiple languages is a valuable ability.',
        translations: { hi: 'योग्यता / क्षमता' },
      },
      {
        word: 'drive',
        ipa: '/draɪv/',
        partOfSpeech: 'verb',
        meaning: 'To operate and control the direction and speed of a motor vehicle',
        exampleSentence: 'I can drive a manual car very well.',
        translations: { hi: 'गाड़ी चलाना' },
      },
      {
        word: 'chess',
        ipa: '/tʃɛs/',
        partOfSpeech: 'noun',
        meaning: 'A board game of strategic skill for two players',
        exampleSentence: 'Can you play chess or do you prefer card games?',
        translations: { hi: 'शतरंज' },
      },
      {
        word: 'help',
        ipa: '/hɛlp/',
        partOfSpeech: 'verb / noun',
        meaning: 'To make it easier for someone to do something by offering services or resources',
        exampleSentence: 'Could you help me with this computer problem?',
        translations: { hi: 'मदद / सहायता' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I can speak...',
        functionCategory: 'Stating Ability',
        exampleSentence: 'I can speak English and Hindi fluently.',
      },
      {
        phrase: 'I can\'t...',
        functionCategory: 'Stating Inability',
        exampleSentence: 'I can\'t fix software bugs on my own.',
      },
      {
        phrase: 'Can you help me with...?',
        functionCategory: 'Assistance Request',
        exampleSentence: 'Can you help me with connecting the printer?',
      },
      {
        phrase: 'Of course, I can!',
        functionCategory: 'Willingness',
        exampleSentence: 'Of course, I can show you how to do it.',
      },
    ],
    grammar: {
      title: 'Modal Verb "Can" and "Can\'t" for Ability & Permission',
      conceptExplanation:
        'The modal verb "can" does NOT take "-s" in the third person (he can, she can) and is always followed by the base form of the verb without "to". Negation is "cannot" or "can\'t". Questions invert subject and modal: "Can you...?"',
      patternFormula: 'Subject + can/can\'t + [Base Verb] | Can + Subject + [Base Verb]?',
      contrastExamples: [
        {
          incorrect: 'She cans speak French.',
          correct: 'She can speak French.',
          explanation: '"Can" never adds "-s" or "-ed".',
        },
        {
          incorrect: 'I can to swim very fast.',
          correct: 'I can swim very fast.',
          explanation: 'Never use the infinitive marker "to" after "can".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Nina',
        text: 'Hi! Are you ready for our presentation? How many languages can you speak?',
        translation: 'नमस्ते! क्या आप हमारी प्रस्तुति के लिए तैयार हैं? आप कितनी भाषाएं बोल सकते हैं?',
      },
      {
        speaker: 'You',
        text: 'I can speak two languages: English and Hindi. But I can\'t speak French yet!',
        translation: 'मैं दो भाषाएं बोल सकता हूँ: अंग्रेजी और हिंदी। लेकिन मैं अभी फ्रेंच नहीं बोल सकता!',
      },
      {
        speaker: 'Nina',
        text: 'Two languages is great! I can speak Spanish and English. By the way, can you help me carry these heavy files?',
        translation: 'दो भाषाएं बहुत अच्छी बात है! मैं स्पैनिश और अंग्रेजी बोल सकती हूँ। वैसे, क्या आप इन भारी फाइलों को उठाने में मेरी मदद कर सकते हैं?',
      },
      {
        speaker: 'You',
        text: 'Of course I can! And after that, can you help me connect my laptop to the printer?',
        translation: 'बिल्कुल मैं कर सकता हूँ! और उसके बाद, क्या आप मेरे लैपटॉप को प्रिंटर से कनेक्ट करने में मेरी मदद कर सकती हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_26_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "He ___ (can / speak) three languages."',
      options: [
        { id: 'opt_1', text: 'can speak', isCorrect: true },
        { id: 'opt_2', text: 'cans to speak', isCorrect: false },
        { id: 'opt_3', text: 'can speaking', isCorrect: false },
      ],
      correctAnswer: 'can speak',
      explanation: 'Use modal "can" + base verb without "to".',
    },
    {
      id: 'cp_a1_26_2',
      type: 'multiple_choice',
      prompt: 'Which sentence asks for assistance correctly?',
      options: [
        { id: 'opt_1', text: 'Can you help me with this document, please?', isCorrect: true },
        { id: 'opt_2', text: 'Are you can help me document?', isCorrect: false },
        { id: 'opt_3', text: 'Do you can help me please?', isCorrect: false },
      ],
      correctAnswer: 'Can you help me with this document, please?',
      explanation: 'Use "Can you help me with [something], please?".',
    },
    {
      id: 'cp_a1_26_3',
      type: 'multiple_choice',
      prompt: 'Which expresses an inability?',
      options: [
        { id: 'opt_1', text: 'I can\'t drive a manual car.', isCorrect: true },
        { id: 'opt_2', text: 'I don\'t can drive.', isCorrect: false },
        { id: 'opt_3', text: 'I am not can drive.', isCorrect: false },
      ],
      correctAnswer: 'I can\'t drive a manual car.',
      explanation: '"can\'t" is the contraction for "cannot".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_26_1',
      scenarioContext: 'State your language abilities and what you cannot speak.',
      prompt: 'Build: "I can speak English and I can\'t speak German."',
      targetStructure: 'Subject + can + base verb + language + coordinator + subject + can\'t + base verb + language',
      wordBank: ['I', 'can', 'speak', 'English', 'and', 'I', 'can\'t', 'speak', 'German', 'to', 'cans', 'speaking'],
      acceptableSolutions: [
        'I can speak English and I can\'t speak German',
        'I can speak English and I can\'t speak German.',
      ],
      explanation: 'Clear contrast of ability and inability using can/can\'t.',
    },
    {
      id: 'sc_a1_26_2',
      scenarioContext: 'Politely ask Nina for help with your computer printer.',
      prompt: 'Build: "Can you help me connect this printer, please?"',
      targetStructure: 'Modal question + base verb + object + base verb + noun phrase + please',
      wordBank: ['Can', 'you', 'help', 'me', 'connect', 'this', 'printer', 'please', 'do', 'are', 'to'],
      acceptableSolutions: [
        'Can you help me connect this printer please',
        'Can you help me connect this printer, please?',
      ],
      explanation: 'Natural polite request for technical assistance.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_26_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! Before our study group starts, I am curious: what special talents or skills do you have? Can you speak any other languages or play an instrument?',
      partnerAudioText:
        'Hey! Before our study group starts, I am curious: what special talents or skills do you have? Can you speak any other languages or play an instrument?',
      partnerQuestionHindi:
        'अरे! हमारे स्टडी ग्रुप के शुरू होने से पहले, मैं उत्सुक हूँ: आपके पास क्या विशेष प्रतिभाएँ या कौशल हैं? क्या आप कोई अन्य भाषा बोल सकते हैं या कोई वाद्ययंत्र बजा सकते हैं?',
      expectedFunction: 'State Abilities & Inabilities using Can/Can\'t',
      contextGoal:
        'Explain what you can do (e.g. speak languages, play chess, drive) and what you cannot do using "can" and "can\'t".',
      targetVocabulary: ['can', 'can\'t', 'speak', 'play', 'languages', 'drive', 'swim'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I can speak two languages, English and Hindi. But I can\'t play any musical instruments!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I can play chess and drive a car, but I can\'t swim very well.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I can speak three languages! How about you, Nina?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Ability Statement',
          patterns: ['i can speak', 'i can play', 'i can drive', 'i can swim', 'i can cook', 'i can code'],
          required: true,
        },
        {
          name: 'Inability Statement or Reciprocal',
          patterns: ['can\'t', 'cannot', 'can\'t play', 'can\'t speak', 'how about you', 'what can you do'],
          required: false,
        },
      ],
      commonMistakeRules: [
        {
          id: 'can_plus_to_error',
          pattern: /\bi can to (speak|play|drive|swim)\b/i,
          errorType: 'grammar',
          message: 'Do not use "to" after "can". Say "I can speak", not "I can to speak".',
          correctionPattern: 'I can [verb]...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_26_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "I can ___ (swim) across the pool."',
        options: [
          { id: 'opt_1', text: 'swim', isCorrect: true },
          { id: 'opt_2', text: 'to swim', isCorrect: false },
          { id: 'opt_3', text: 'swimming', isCorrect: false },
        ],
        correctAnswer: 'swim',
        explanation: 'Use the base verb directly after "can".',
      },
    },
    {
      id: 'turn_a1_26_2',
      turnIndex: 2,
      partnerPrompt:
        'That is really cool! I am quite good at computers and tech troubleshooting. Do you need any help getting set up for today\'s presentation?',
      partnerAudioText:
        'That is really cool! I am quite good at computers and tech troubleshooting. Do you need any help getting set up for today\'s presentation?',
      partnerQuestionHindi:
        'यह वाकई बहुत अच्छा है! मैं कंप्यूटर और तकनीकी समस्याओं को ठीक करने में काफी अच्छी हूँ। क्या आपको आज की प्रस्तुति की तैयारी में कोई मदद चाहिए?',
      expectedFunction: 'Politely Request Technical Assistance',
      contextGoal:
        'Ask Nina for help with a computer issue or printer using "Can you help me with...?" or "Could you please help me?".',
      targetVocabulary: ['can you help me', 'printer', 'laptop', 'connect', 'please', 'with'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes please! Can you help me connect my laptop to the wireless printer?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Could you help me with this presentation file, please? It won\'t open.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Actually yes, can you check my screen settings, please?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Help Request',
          patterns: ['can you help me', 'could you help me', 'help me with', 'connect my laptop', 'printer', 'help me please', 'check my'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_26_2',
        type: 'multiple_choice',
        prompt: 'Which request is polite and grammatically correct?',
        options: [
          { id: 'opt_1', text: 'Can you help me with my laptop, please?', isCorrect: true },
          { id: 'opt_2', text: 'Do you can help laptop please?', isCorrect: false },
          { id: 'opt_3', text: 'Are you helping me laptop now?', isCorrect: false },
        ],
        correctAnswer: 'Can you help me with my laptop, please?',
        explanation: '"Can you help me with... please?" is standard English.',
      },
    },
    {
      id: 'turn_a1_26_3',
      turnIndex: 3,
      partnerPrompt:
        'Done! Your laptop is connected to the printer and the slides are ready. Let\'s do a quick rehearsal!',
      partnerAudioText:
        'Done! Your laptop is connected to the printer and the slides are ready. Let\'s do a quick rehearsal!',
      partnerQuestionHindi:
        'हो गया! आपका लैपटॉप प्रिंटर से कनेक्ट हो गया है और स्लाइड तैयार हैं। चलिए एक त्वरित रिहर्सल करते हैं!',
      expectedFunction: 'Express Gratitude & Readiness to Start',
      contextGoal:
        'Thank Nina warmly for her help and express readiness to rehearse.',
      targetVocabulary: ['thank you', 'appreciate it', 'ready', 'great help', 'let\'s start'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you so much, Nina! You are a lifesaver. I am ready to practice now!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thanks a lot for your help! Let\'s rehearse the first slide.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Awesome, thanks! I am ready whenever you are.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Readiness',
          patterns: ['thank you', 'thanks a lot', 'appreciate it', 'ready', 'ready to practice', 'let\'s do it', 'let\'s start'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_26_3',
        type: 'multiple_choice',
        prompt: 'Which phrase naturally thanks someone for their technical help?',
        options: [
          { id: 'opt_1', text: 'Thank you so much for your help! I really appreciate it.', isCorrect: true },
          { id: 'opt_2', text: 'I am thanking your tech doing.', isCorrect: false },
          { id: 'opt_3', text: 'Much thanks make for laptop.', isCorrect: false },
        ],
        correctAnswer: 'Thank you so much for your help! I really appreciate it.',
        explanation: 'Polite, natural expression of appreciation.',
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
