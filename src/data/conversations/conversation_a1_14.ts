import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_14: ConversationDefinition = {
  id: 'conv_a1_14',
  title: 'Skill-Share Workshop: Abilities (Can / Can’t)',
  cefr: 'A1',
  unitId: 'unit_a1_1',
  lessonLinks: ['lesson_a1_1_14'],
  estimatedMinutes: 5,
  scenario:
    'You are joining a community talent and skill-sharing group. The workshop leader, Maya, interviews you about your abilities, sports, music, and foreign languages.',
  communicativeGoals: [
    'Express abilities using modal verb "can + [base verb]" (e.g. "I can swim", "I can speak two languages")',
    'Express inability using "can\'t / cannot + [base verb]"',
    'Use degree adverbs with abilities (very well, quite well, a little bit, at all)',
    'Form modal questions ("Can you play the guitar?", "Can you cook Indian dishes?")',
  ],
  canDoStatements: [
    'Can describe personal skills and abilities using "can" and "can\'t" (CEFR A1)',
    'Can qualify ability levels using "well" or "a little bit"',
    'Can ask and answer questions about physical skills and talents',
  ],
  characters: [
    {
      id: 'char_maya',
      name: 'Maya',
      role: 'Skill-Share Workshop Leader',
      avatar: '🎨',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'swim',
        ipa: '/swɪm/',
        partOfSpeech: 'verb',
        meaning: 'To propel oneself through water by movement of the limbs',
        exampleSentence: 'I can swim very well.',
        translations: { hi: 'तैरना' },
      },
      {
        word: 'cook',
        ipa: '/kʊk/',
        partOfSpeech: 'verb',
        meaning: 'To prepare food by heating it',
        exampleSentence: 'Can you cook traditional dishes?',
        translations: { hi: 'खाना पकाना' },
      },
      {
        word: 'drive',
        ipa: '/draɪv/',
        partOfSpeech: 'verb',
        meaning: 'To operate and control the direction and speed of a motor vehicle',
        exampleSentence: 'I can’t drive a car yet.',
        translations: { hi: 'गाड़ी चलाना' },
      },
      {
        word: 'well',
        ipa: '/wel/',
        partOfSpeech: 'adverb',
        meaning: 'In a good or satisfactory manner',
        exampleSentence: 'She speaks English quite well.',
        translations: { hi: 'अच्छी तरह से' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I can speak / play / cook...',
        functionCategory: 'Stating Ability',
        exampleSentence: 'I can play chess very well.',
      },
      {
        phrase: 'I can’t... but I want to learn.',
        functionCategory: 'Expressing Inability & Desire',
        exampleSentence: 'I can’t swim, but I want to learn this summer.',
      },
      {
        phrase: 'Can you...?',
        functionCategory: 'Inquiring Ability',
        exampleSentence: 'Can you play any musical instrument?',
      },
      {
        phrase: 'Yes, I can. / No, I can’t.',
        functionCategory: 'Modal Short Answers',
        exampleSentence: 'Yes, I can! I play acoustic guitar.',
      },
    ],
    grammar: {
      title: 'Modal Verb "Can / Can’t" for Ability & Invariable Form',
      conceptExplanation:
        'The modal verb "can" has the SAME form for all subjects (I can, you can, he can, they can — never "he cans"). Always follow "can/can\'t" directly with the bare infinitive (base form) without "to" (say "I can swim", NOT "I can to swim").',
      patternFormula: 'Subject + can/can’t + [Base Verb] + (well / a little bit)',
      contrastExamples: [
        {
          incorrect: 'He can speaks three languages.',
          correct: 'He can speak three languages.',
          explanation: '"Can" never takes third-person "-s", and the following verb remains base.',
        },
        {
          incorrect: 'I can to drive.',
          correct: 'I can drive.',
          explanation: 'Modal verbs are followed directly by the base verb, never with "to".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Maya',
        text: 'Welcome to our skill exchange! What are some things you can do really well?',
        translation: 'हमारे स्किल एक्सचेंज में आपका स्वागत है! ऐसी कौन सी चीज़ें हैं जो आप बहुत अच्छी तरह कर सकते हैं?',
      },
      {
        speaker: 'You',
        text: 'I can cook delicious curries and I can speak Hindi and English fluently.',
        translation: 'मैं स्वादिष्ट करी बना सकता हूँ और मैं धाराप्रवाह हिंदी और अंग्रेजी बोल सकता हूँ।',
      },
      {
        speaker: 'Maya',
        text: 'That is awesome! Can you play any musical instruments or sports?',
        translation: 'यह बहुत बढ़िया है! क्या आप कोई वाद्य यंत्र बजा सकते हैं या कोई खेल खेल सकते हैं?',
      },
      {
        speaker: 'You',
        text: 'I can play badminton well, but I can’t play the guitar at all.',
        translation: 'मैं बैडमिंटन अच्छा खेल सकता हूँ, लेकिन मैं गिटार बिल्कुल नहीं बजा सकता।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_14_1',
      type: 'multiple_choice',
      prompt: 'Select the grammatically correct ability sentence:',
      options: [
        { id: 'opt_1', text: 'She can speak three languages fluently.', isCorrect: true },
        { id: 'opt_2', text: 'She cans speak three languages fluently.', isCorrect: false },
        { id: 'opt_3', text: 'She can to speak three languages fluently.', isCorrect: false },
      ],
      correctAnswer: 'She can speak three languages fluently.',
      explanation: 'Modal "can" takes no "-s" and is followed by bare infinitive "speak".',
    },
    {
      id: 'cp_a1_14_2',
      type: 'fill_blank',
      prompt: 'Complete the short answer: "Can you swim across the lake? — No, I ___."',
      options: [
        { id: 'opt_1', text: 'can’t', isCorrect: true },
        { id: 'opt_2', text: 'don’t', isCorrect: false },
        { id: 'opt_3', text: 'am not', isCorrect: false },
      ],
      correctAnswer: 'can’t',
      explanation: 'Short answer to "Can you...?" uses "can’t" in negative.',
    },
    {
      id: 'cp_a1_14_3',
      type: 'multiple_choice',
      prompt: 'How do you qualify an ability that is moderate?',
      options: [
        { id: 'opt_1', text: 'I can speak Spanish a little bit.', isCorrect: true },
        { id: 'opt_2', text: 'I can speak Spanish much small.', isCorrect: false },
        { id: 'opt_3', text: 'I can speak Spanish little time.', isCorrect: false },
      ],
      correctAnswer: 'I can speak Spanish a little bit.',
      explanation: '"A little bit" is the natural modifier for basic ability.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_14_1',
      scenarioContext: 'Describe an ability and an inability in one sentence.',
      prompt: 'Build: "I can swim well but I can’t drive."',
      targetStructure: 'Subject + can + verb 1 + adverb + conjunction + subject + can’t + verb 2',
      wordBank: ['I', 'can', 'swim', 'well', 'but', 'I', 'can’t', 'drive', 'cans', 'to', 'am'],
      acceptableSolutions: [
        'I can swim well but I can’t drive',
        'I can swim well but I can’t drive.',
        'I can swim well but I cannot drive.',
      ],
      explanation: 'Contrasts ability with inability using "can" and "can\'t".',
    },
    {
      id: 'sc_a1_14_2',
      scenarioContext: 'Ask about someone\'s cooking ability.',
      prompt: 'Build: "Can you cook Italian dishes?"',
      targetStructure: 'Modal can + subject you + base verb + proper adjective + plural noun',
      wordBank: ['Can', 'you', 'cook', 'Italian', 'dishes', 'do', 'are', 'cooking'],
      acceptableSolutions: [
        'Can you cook Italian dishes',
        'Can you cook Italian dishes?',
        'Can you cook Italian food?',
      ],
      explanation: 'Accurate interrogative formation with modal "Can".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_14_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! Welcome to our Community Skill-Share! We are grouping people for workshops. What skills or languages can you share with the group?',
      partnerAudioText: 'Hi there! Welcome to our Community Skill-Share! We are grouping people for workshops. What skills or languages can you share with the group?',
      partnerQuestionHindi: 'नमस्ते! हमारे कम्युनिटी स्किल-शेयर में आपका स्वागत है! हम वर्कशॉप के लिए लोगों के समूह बना रहे हैं। आप समूह के साथ कौन से कौशल या भाषाएं साझा कर सकते हैं?',
      expectedFunction: 'Express Positive Abilities (Can)',
      contextGoal: 'State 1 or 2 abilities using "I can..." (e.g., "I can cook...", "I can speak Hindi and English", "I can code").',
      targetVocabulary: ['can', 'speak', 'cook', 'play', 'swim', 'code', 'well'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hello Maya! I can speak Hindi and English, and I can cook delicious food.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hi! I can play badminton well and I can teach basic computer skills.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I can cook well and I can design simple graphics.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Ability Expression',
          patterns: [
            'i can speak',
            'i can cook',
            'i can play',
            'i can teach',
            'i can code',
            'i can draw',
            'i can swim',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'can_to_infinitive',
          pattern: /\bi can to \w+\b/i,
          errorType: 'grammar',
          message: 'Never use "to" after "can". Say "I can swim", NOT "I can to swim".',
          correctionPattern: 'I can [Base Verb]',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_14_1',
        type: 'multiple_choice',
        prompt: 'Choose the correct sentence:',
        options: [
          { id: 'opt_1', text: 'I can speak two languages.', isCorrect: true },
          { id: 'opt_2', text: 'I can to speak two languages.', isCorrect: false },
          { id: 'opt_3', text: 'I am can speak two languages.', isCorrect: false },
        ],
        correctAnswer: 'I can speak two languages.',
        explanation: 'Modal verbs are followed directly by the base verb without "to".',
      },
    },
    {
      id: 'turn_a1_14_2',
      turnIndex: 2,
      partnerPrompt:
        'Those are fantastic skills! And what is a skill you cannot do yet that you would love to learn here?',
      partnerAudioText: 'Those are fantastic skills! And what is a skill you cannot do yet that you would love to learn here?',
      partnerQuestionHindi: 'वे तो बहुत शानदार कौशल हैं! और ऐसा कौन सा कौशल है जो आप अभी नहीं कर सकते लेकिन यहाँ सीखना चाहेंगे?',
      expectedFunction: 'Express Inability (Can’t) & Learning Goal',
      contextGoal: 'State an inability using "I can\'t..." (e.g. play guitar, swim, paint) and say you want to learn.',
      targetVocabulary: ['can\'t', 'cannot', 'play', 'guitar', 'swim', 'paint', 'drive', 'learn', 'want'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I can’t play the guitar, but I really want to learn in the music workshop.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I can’t swim at all, so I want to take beginner classes.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I cannot drive or paint, but I want to learn painting.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Inability & Desire',
          patterns: [
            "can't play",
            'can’t play',
            "can't swim",
            'can’t swim',
            "can't drive",
            'can’t drive',
            'cannot',
            'want to learn',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_14_2',
        type: 'fill_blank',
        prompt: 'Choose the correct word: "I ___ play the piano, but I want to try."',
        options: [
          { id: 'opt_1', text: 'can’t', isCorrect: true },
          { id: 'opt_2', text: 'am not', isCorrect: false },
          { id: 'opt_3', text: 'no can', isCorrect: false },
        ],
        correctAnswer: 'can’t',
        explanation: 'Use "can’t" to express negative ability.',
      },
    },
    {
      id: 'turn_a1_14_3',
      turnIndex: 3,
      partnerPrompt:
        'We have an acoustic guitar circle on Thursday evenings! I will sign you up right now. Looking forward to seeing you there!',
      partnerAudioText: 'We have an acoustic guitar circle on Thursday evenings! I will sign you up right now. Looking forward to seeing you there!',
      partnerQuestionHindi: 'गुरुवार की शाम को हमारे पास एकॉस्टिक गिटार सर्कल है! मैं अभी आपको साइन अप कर देती हूँ। आपसे वहाँ मिलने का इंतज़ार रहेगा!',
      expectedFunction: 'Closing & Enthusiastic Farewell',
      contextGoal: 'Thank Maya enthusiastically and confirm meeting on Thursday evening.',
      targetVocabulary: ['thank', 'Thursday', 'see', 'forward', 'goodbye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you so much Maya! That sounds wonderful. See you on Thursday evening, goodbye!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Awesome! Thank you Maya, see you on Thursday!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Super excited, thanks! See you Thursday, bye.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Confirmation',
          patterns: ['thank you', 'thanks', 'see you on thursday', 'see you thursday', 'thursday evening', 'goodbye', 'bye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_14_3',
        type: 'multiple_choice',
        prompt: 'How do you enthusiastically confirm an event appointment?',
        options: [
          { id: 'opt_1', text: 'Thank you, see you on Thursday evening!', isCorrect: true },
          { id: 'opt_2', text: 'Thursday make see is you.', isCorrect: false },
          { id: 'opt_3', text: 'I am taking Thursday goodbye.', isCorrect: false },
        ],
        correctAnswer: 'Thank you, see you on Thursday evening!',
        explanation: 'Natural conversational confirmation.',
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
