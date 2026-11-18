import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_6: ConversationDefinition = {
  id: 'conv_a1_6',
  title: 'Shopping for a Winter Jacket',
  cefr: 'A1',
  unitId: 'unit_a1_1',
  lessonLinks: ['lesson_a1_1_6'],
  estimatedMinutes: 5,
  scenario:
    'You are in a clothing store looking for a warm jacket for the winter. The shop assistant, Leo, helps you choose the right color and size.',
  communicativeGoals: [
    'Describe objects using colors (black, blue, red, green, gray) and size adjectives (small, medium, large)',
    'Use descriptive adjectives with correct adjective-noun word order ("a warm jacket", NOT "a jacket warm")',
    'Express opinions on price and quality (comfortable, expensive, cheap, nice)',
    'Ask about sizes and alternative colors',
  ],
  canDoStatements: [
    'Can describe clothes and objects using basic color and size adjectives (CEFR A1)',
    'Can use correct English word order (adjective before noun)',
    'Can ask for different colors and sizes in a retail store',
  ],
  characters: [
    {
      id: 'char_leo',
      name: 'Leo',
      role: 'Clothing Store Assistant',
      avatar: '🛍️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'jacket',
        ipa: '/ˈdʒækɪt/',
        partOfSpeech: 'noun',
        meaning: 'An outer garment extending either to the waist or the hips',
        exampleSentence: 'I need a warm black jacket.',
        translations: { hi: 'जैकेट' },
      },
      {
        word: 'comfortable',
        ipa: '/ˈkʌmftəbl/',
        partOfSpeech: 'adjective',
        meaning: 'Providing physical ease and relaxation',
        exampleSentence: 'This coat is very comfortable.',
        translations: { hi: 'आरामदायक' },
      },
      {
        word: 'expensive',
        ipa: '/ɪkˈspensɪv/',
        partOfSpeech: 'adjective',
        meaning: 'Costing a lot of money',
        exampleSentence: 'That leather jacket is too expensive.',
        translations: { hi: 'महँगा' },
      },
      {
        word: 'size',
        ipa: '/saɪz/',
        partOfSpeech: 'noun',
        meaning: 'The relative extent or dimension of something (S, M, L)',
        exampleSentence: 'Do you have this in medium size?',
        translations: { hi: 'साइज़ / नाप' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am looking for a...',
        functionCategory: 'Stating Shopping Need',
        exampleSentence: 'I am looking for a blue jacket.',
      },
      {
        phrase: 'Do you have this in...?',
        functionCategory: 'Asking for Variations',
        exampleSentence: 'Do you have this jacket in black?',
      },
      {
        phrase: 'It is too expensive / cheap.',
        functionCategory: 'Evaluating Price',
        exampleSentence: 'It is very nice, but a bit expensive.',
      },
      {
        phrase: 'How much is this?',
        functionCategory: 'Asking Price',
        exampleSentence: 'How much is this green sweater?',
      },
    ],
    grammar: {
      title: 'Adjective Placement: Before Nouns and After the Verb BE',
      conceptExplanation:
        'In English, adjectives always go BEFORE the noun (e.g. "a blue jacket", NOT "a jacket blue") or AFTER the verb to be ("The jacket is blue"). Adjectives in English never take plural "-s".',
      patternFormula: 'a/an + [Adjective] + [Noun] | [Noun] + is/are + [Adjective]',
      contrastExamples: [
        {
          incorrect: 'I want a coat red.',
          correct: 'I want a red coat.',
          explanation: 'Adjectives precede the noun they modify.',
        },
        {
          incorrect: 'These jackets are cheaps.',
          correct: 'These jackets are cheap.',
          explanation: 'Adjectives never take plural "-s" in English.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Leo',
        text: 'Hello! How can I help you today? Are you looking for a coat or jacket?',
        translation: 'नमस्ते! आज मैं आपकी क्या मदद कर सकता हूँ? क्या आप कोट या जैकेट ढूँढ रहे हैं?',
      },
      {
        speaker: 'You',
        text: 'Hi! I am looking for a warm winter jacket. Do you have anything in dark blue?',
        translation: 'नमस्ते! मैं एक गर्म सर्दियों की जैकेट ढूँढ रहा हूँ। क्या आपके पास गहरे नीले रंग में कुछ है?',
      },
      {
        speaker: 'Leo',
        text: 'Yes, we have this dark blue jacket right here. It is very light and warm.',
        translation: 'हाँ, हमारे पास ठीक यहाँ यह गहरे नीले रंग की जैकेट है। यह बहुत हल्की और गर्म है।',
      },
      {
        speaker: 'You',
        text: 'It looks great! Do you have this in a medium size?',
        translation: 'यह बहुत अच्छी लग रही है! क्या आपके पास यह मीडियम साइज़ में है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_6_1',
      type: 'multiple_choice',
      prompt: 'Choose the correct word order:',
      options: [
        { id: 'opt_1', text: 'a warm red jacket', isCorrect: true },
        { id: 'opt_2', text: 'a jacket warm red', isCorrect: false },
        { id: 'opt_3', text: 'a red jacket warm', isCorrect: false },
      ],
      correctAnswer: 'a warm red jacket',
      explanation: 'Adjectives (warm, red) go immediately before the noun (jacket).',
    },
    {
      id: 'cp_a1_6_2',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "These shoes are very ___ for walking."',
      options: [
        { id: 'opt_1', text: 'comfortable', isCorrect: true },
        { id: 'opt_2', text: 'comfortables', isCorrect: false },
        { id: 'opt_3', text: 'comfortably', isCorrect: false },
      ],
      correctAnswer: 'comfortable',
      explanation: 'Adjectives do not change form for plural subjects.',
    },
    {
      id: 'cp_a1_6_3',
      type: 'multiple_choice',
      prompt: 'How do you ask for a different size?',
      options: [
        { id: 'opt_1', text: 'Do you have this in size large?', isCorrect: true },
        { id: 'opt_2', text: 'Is large size having you?', isCorrect: false },
        { id: 'opt_3', text: 'Give size large please is it?', isCorrect: false },
      ],
      correctAnswer: 'Do you have this in size large?',
      explanation: '"Do you have this in [size]?" is the standard customer phrasing.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_6_1',
      scenarioContext: 'State the color and type of clothing you want.',
      prompt: 'Build: "I am looking for a warm black jacket."',
      targetStructure: 'Subject + BE + present participle + preposition + article + adjectives + noun',
      wordBank: ['I', 'am', 'looking', 'for', 'a', 'warm', 'black', 'jacket', 'jacket', 'warm', 'an', 'are'],
      acceptableSolutions: [
        'I am looking for a warm black jacket',
        'I am looking for a warm black jacket.',
        'I want a warm black jacket.',
      ],
      explanation: 'Demonstrates proper adjective-noun word order.',
    },
    {
      id: 'sc_a1_6_2',
      scenarioContext: 'Ask about size and price.',
      prompt: 'Build: "Do you have this in medium size?"',
      targetStructure: 'Auxiliary do + subject + main verb + object + prepositional size',
      wordBank: ['Do', 'you', 'have', 'this', 'in', 'medium', 'size', 'is', 'are', 'has'],
      acceptableSolutions: [
        'Do you have this in medium size',
        'Do you have this in medium size?',
        'Do you have this in a medium size?',
      ],
      explanation: 'Accurate customer question asking for size variation.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_6_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello! Welcome to Urban Wear. Are you looking for a warm coat or a lightweight jacket today?',
      partnerAudioText: 'Hello! Welcome to Urban Wear. Are you looking for a warm coat or a lightweight jacket today?',
      partnerQuestionHindi: 'नमस्ते! अर्बन वियर में आपका स्वागत है। क्या आप आज एक गर्म कोट या हल्की जैकेट ढूँढ रहे हैं?',
      expectedFunction: 'State Shopping Preference & Adjectives',
      contextGoal: 'Explain what item and color you want using adjectives before the noun (e.g., "a warm jacket in black").',
      targetVocabulary: ['jacket', 'coat', 'warm', 'black', 'blue', 'looking', 'for'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hi Leo! I am looking for a warm winter jacket in black or dark blue.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hello! I need a comfortable coat in size medium.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Hi, I want a warm black jacket please.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Item & Description',
          patterns: [
            'warm jacket',
            'warm coat',
            'black jacket',
            'blue jacket',
            'winter jacket',
            'looking for a',
            'need a jacket',
            'want a jacket',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'adjective_post_noun',
          pattern: /\bjacket black\b|\bjacket warm\b|\bcoat red\b/i,
          errorType: 'grammar',
          message: 'Put the color and descriptive adjectives before the noun (e.g., "a black jacket", NOT "a jacket black").',
          correctionPattern: 'a [Color/Adjective] [Noun]',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_6_1',
        type: 'multiple_choice',
        prompt: 'Which word order is correct in English?',
        options: [
          { id: 'opt_1', text: 'a warm blue coat', isCorrect: true },
          { id: 'opt_2', text: 'a coat warm blue', isCorrect: false },
          { id: 'opt_3', text: 'a blue coat warm', isCorrect: false },
        ],
        correctAnswer: 'a warm blue coat',
        explanation: 'Adjectives come before the noun they describe.',
      },
    },
    {
      id: 'turn_a1_6_2',
      turnIndex: 2,
      partnerPrompt:
        'Here is our bestselling black winter jacket. It is super comfortable and water-resistant! How does it feel?',
      partnerAudioText: 'Here is our bestselling black winter jacket. It is super comfortable and water-resistant! How does it feel?',
      partnerQuestionHindi: 'यह रही हमारी सबसे ज़्यादा बिकने वाली काली विंटर जैकेट। यह बेहद आरामदायक और वॉटर-रेसिस्टेंट है! आपको यह कैसी लग रही है?',
      expectedFunction: 'Express Opinion & Inquire Size/Price',
      contextGoal: 'Say the jacket is comfortable or nice, and ask for a specific size (M/L) or ask the price.',
      targetVocabulary: ['comfortable', 'nice', 'size', 'medium', 'large', 'how', 'much', 'price'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'It is very comfortable! Do you have this in a medium size, and how much is it?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'It feels great and warm. What is the price?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Looks nice! Is there a large size available?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Evaluation & Opinion',
          patterns: ['comfortable', 'nice', 'great', 'warm', 'fits well', 'looks good'],
          required: true,
        },
        {
          name: 'Size / Price Inquiry',
          patterns: ['medium size', 'size', 'how much', 'price', 'large size', 'small size'],
          required: false,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_6_2',
        type: 'fill_blank',
        prompt: 'Complete the sentence: "How ___ is this jacket?"',
        options: [
          { id: 'opt_1', text: 'much', isCorrect: true },
          { id: 'opt_2', text: 'many', isCorrect: false },
          { id: 'opt_3', text: 'cost', isCorrect: false },
        ],
        correctAnswer: 'much',
        explanation: 'Use "How much is...?" to ask the price.',
      },
    },
    {
      id: 'turn_a1_6_3',
      turnIndex: 3,
      partnerPrompt:
        'It is on sale for $45, and here is the medium size! I can take it to the cash counter for you.',
      partnerAudioText: 'It is on sale for $45, and here is the medium size! I can take it to the cash counter for you.',
      partnerQuestionHindi: 'यह $45 की सेल पर है, और यह रहा मीडियम साइज़! मैं इसे आपके लिए कैश काउंटर पर ले जा सकता हूँ।',
      expectedFunction: 'Accept & Closing',
      contextGoal: 'Agree to buy the jacket, thank Leo, and conclude the shopping interaction.',
      targetVocabulary: ['take', 'buy', 'thank', 'perfect', 'great'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'That is perfect, I will take it! Thank you for all your help, Leo.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Great price! I will buy it. Thanks a lot!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Awesome, thank you! Let us go to the counter.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Purchase Agreement & Thanks',
          patterns: ['i will take it', 'i will buy it', 'take it', 'buy it', 'thank you', 'thanks', 'perfect', 'great'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_6_3',
        type: 'multiple_choice',
        prompt: 'Which phrase is used when deciding to purchase an item?',
        options: [
          { id: 'opt_1', text: 'I will take it!', isCorrect: true },
          { id: 'opt_2', text: 'I am taking do it!', isCorrect: false },
          { id: 'opt_3', text: 'Take is mine!', isCorrect: false },
        ],
        correctAnswer: 'I will take it!',
        explanation: '"I will take it!" confirms your purchase decision.',
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
