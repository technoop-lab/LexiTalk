import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_23: ConversationDefinition = {
  id: 'conv_a1_23',
  title: 'Trying on Clothes at a Department Store',
  cefr: 'A1',
  unitId: 'unit_a1_2',
  lessonLinks: ['lesson_a1_2_23'],
  estimatedMinutes: 5,
  scenario:
    'You are shopping for a new warm jacket and trousers at a department store. The store associate, Clara, helps you with sizes, fitting rooms, and trying different colors.',
  communicativeGoals: [
    'Use demonstratives accurately (this jacket, that sweater, these trousers, those shoes)',
    'Ask to try on clothing in the fitting room ("Can I try this on?")',
    'Evaluate fit using "too + adjective" (too tight, too loose, too small) or positive fit ("fits well")',
    'Request another size (small, medium, large) or color',
  ],
  canDoStatements: [
    'Can interact with sales assistants in a clothing store (CEFR A1)',
    'Can use demonstrative pronouns (this/that/these/those) to point to items',
    'Can describe clothing fit ("too tight", "too big") and request different sizes',
  ],
  characters: [
    {
      id: 'char_clara',
      name: 'Clara',
      role: 'Department Store Sales Associate',
      avatar: '👩‍💼',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'jacket',
        ipa: '/ˈdʒækɪt/',
        partOfSpeech: 'noun',
        meaning: 'A short coat with sleeves',
        exampleSentence: 'This navy blue jacket looks very stylish.',
        translations: { hi: 'जैकेट' },
      },
      {
        word: 'trousers',
        ipa: '/ˈtraʊzərz/',
        partOfSpeech: 'noun (plural)',
        meaning: 'An outer piece of clothing that covers each leg separately',
        exampleSentence: 'These black trousers fit very comfortably.',
        translations: { hi: 'पतलून / पैंट' },
      },
      {
        word: 'fitting room',
        ipa: '/ˈfɪtɪŋ ruːm/',
        partOfSpeech: 'noun',
        meaning: 'A small room in a shop where you can try on clothes',
        exampleSentence: 'The fitting rooms are at the back on the left.',
        translations: { hi: 'ट्रायल रूम / कपड़े पहनने का कमरा' },
      },
      {
        word: 'tight',
        ipa: '/taɪt/',
        partOfSpeech: 'adjective',
        meaning: 'Fitting very closely or uncomfortably to the body',
        exampleSentence: 'This sweater is too tight around the shoulders.',
        translations: { hi: 'तंग / छोटा' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Can I try this on?',
        functionCategory: 'Fitting Request',
        exampleSentence: 'Excuse me, can I try this jacket on?',
      },
      {
        phrase: 'Do you have this in size...?',
        functionCategory: 'Size Inquiry',
        exampleSentence: 'Do you have this in a medium or large?',
      },
      {
        phrase: 'It is too...',
        functionCategory: 'Fit Evaluation',
        exampleSentence: 'It is too small around the waist.',
      },
      {
        phrase: 'It fits perfectly!',
        functionCategory: 'Fit Confirmation',
        exampleSentence: 'This larger size fits perfectly, thank you.',
      },
    ],
    grammar: {
      title: 'Demonstratives (This/That/These/Those) & "Too + Adjective"',
      conceptExplanation:
        'Use "this / these" for items near you (singular: this jacket, plural: these trousers). Use "that / those" for items further away. Use "too + adjective" (too tight, too big) to express that a quality is excessive or unsuitable.',
      patternFormula: 'This/That + [Singular Noun] | These/Those + [Plural Noun] | It is + too + [Adjective]',
      contrastExamples: [
        {
          incorrect: 'This trousers is too big.',
          correct: 'These trousers are too big.',
          explanation: '"Trousers" is always grammatically plural and takes "these" and "are".',
        },
        {
          incorrect: 'This shirt is very too small.',
          correct: 'This shirt is too small.',
          explanation: 'Do not combine "very" and "too" together before an adjective.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Clara',
        text: 'Hello! Can I help you find a size, or are you looking for something specific?',
        translation: 'नमस्ते! क्या मैं साइज़ ढूंढने में आपकी मदद करूँ, या आप कुछ खास देख रहे हैं?',
      },
      {
        speaker: 'You',
        text: 'Hi! I like this blue jacket. Can I try it on in the fitting room?',
        translation: 'नमस्ते! मुझे यह नीली जैकेट पसंद है। क्या मैं इसे ट्रायल रूम में पहनकर देख सकता हूँ?',
      },
      {
        speaker: 'Clara',
        text: 'Of course! The fitting rooms are right over there. How does it feel?',
        translation: 'बिल्कुल! ट्रायल रूम ठीक वहाँ हैं। यह कैसी लग रही है?',
      },
      {
        speaker: 'You',
        text: 'It is a bit too tight in size Small. Do you have this in a Medium?',
        translation: 'यह स्मॉल साइज़ में थोड़ी तंग है। क्या आपके पास यह मीडियम साइज़ में है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_23_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "___ black trousers are very comfortable."',
      options: [
        { id: 'opt_1', text: 'These', isCorrect: true },
        { id: 'opt_2', text: 'This', isCorrect: false },
        { id: 'opt_3', text: 'That', isCorrect: false },
      ],
      correctAnswer: 'These',
      explanation: '"Trousers" is a plural noun, requiring "These".',
    },
    {
      id: 'cp_a1_23_2',
      type: 'multiple_choice',
      prompt: 'How do you say that an item is excessively small for you?',
      options: [
        { id: 'opt_1', text: 'It is too small.', isCorrect: true },
        { id: 'opt_2', text: 'It is much small.', isCorrect: false },
        { id: 'opt_3', text: 'It is to small.', isCorrect: false },
      ],
      correctAnswer: 'It is too small.',
      explanation: 'Use "too + adjective" for excessive qualities.',
    },
    {
      id: 'cp_a1_23_3',
      type: 'multiple_choice',
      prompt: 'Where do you try on clothing in a department store?',
      options: [
        { id: 'opt_1', text: 'in the fitting room', isCorrect: true },
        { id: 'opt_2', text: 'in the ticket office', isCorrect: false },
        { id: 'opt_3', text: 'on the platform', isCorrect: false },
      ],
      correctAnswer: 'in the fitting room',
      explanation: 'The "fitting room" is the designated area for trying on clothes.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_23_1',
      scenarioContext: 'Ask to try on a jacket.',
      prompt: 'Build: "Can I try this winter jacket on in the fitting room?"',
      targetStructure: 'Modal question + demonstrative noun phrase + phrasal particle + prepositional location',
      wordBank: ['Can', 'I', 'try', 'this', 'winter', 'jacket', 'on', 'in', 'the', 'fitting', 'room', 'these'],
      acceptableSolutions: [
        'Can I try this winter jacket on in the fitting room',
        'Can I try this winter jacket on in the fitting room?',
      ],
      explanation: 'Accurate phrasal verb request for clothes shopping.',
    },
    {
      id: 'sc_a1_23_2',
      scenarioContext: 'Explain that the item is too tight and ask for Medium.',
      prompt: 'Build: "It is too tight. Do you have this in medium?"',
      targetStructure: 'Fit evaluation with "too" + inquiry for size',
      wordBank: ['It', 'is', 'too', 'tight', 'Do', 'you', 'have', 'this', 'in', 'medium', 'very', 'are'],
      acceptableSolutions: [
        'It is too tight Do you have this in medium',
        'It is too tight. Do you have this in medium?',
      ],
      explanation: 'Standard fit evaluation followed by size request.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_23_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! Welcome to the clothing department. Are you looking for a particular style or size today?',
      partnerAudioText:
        'Hi there! Welcome to the clothing department. Are you looking for a particular style or size today?',
      partnerQuestionHindi:
        'नमस्ते! कपड़े के विभाग में आपका स्वागत है। क्या आप आज कोई खास स्टाइल या साइज़ देख रहे हैं?',
      expectedFunction: 'Express Interest in Item & Request Fitting',
      contextGoal:
        'Point to a specific garment using "this/these" (e.g. "this jacket", "these trousers") and ask if you can try it on.',
      targetVocabulary: ['jacket', 'trousers', 'this', 'these', 'try on', 'fitting room', 'can i'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hi! I really like this warm jacket. Can I try it on in the fitting room?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hello, could I try these black trousers on, please?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I\'d like to try this sweater on. Where are the fitting rooms?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Garment Interest',
          patterns: ['this jacket', 'these trousers', 'this sweater', 'this shirt', 'this coat', 'like this', 'want this'],
          required: true,
        },
        {
          name: 'Try-On Request',
          patterns: ['try on', 'try it on', 'fitting room', 'can i try', 'could i try', 'where are the fitting rooms'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'this_trousers_singular_error',
          pattern: /\bthis trousers\b/i,
          errorType: 'grammar',
          message: 'Say "these trousers" because trousers is plural.',
          correctionPattern: 'these trousers...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_23_1',
        type: 'fill_blank',
        prompt: 'Choose the correct demonstrative: "Can I try ___ shoes on?"',
        options: [
          { id: 'opt_1', text: 'these', isCorrect: true },
          { id: 'opt_2', text: 'this', isCorrect: false },
          { id: 'opt_3', text: 'that', isCorrect: false },
        ],
        correctAnswer: 'these',
        explanation: '"Shoes" is plural, so use "these".',
      },
    },
    {
      id: 'turn_a1_23_2',
      turnIndex: 2,
      partnerPrompt:
        'The fitting rooms are right around the corner! How does the jacket fit? Is the size comfortable?',
      partnerAudioText:
        'The fitting rooms are right around the corner! How does the jacket fit? Is the size comfortable?',
      partnerQuestionHindi:
        'ट्रायल रूम ठीक कोने के पास हैं! जैकेट की फिटिंग कैसी है? क्या साइज़ आरामदायक है?',
      expectedFunction: 'Evaluate Fit & Request Different Size',
      contextGoal:
        'State how the item fits using "too tight / too small / too loose" and ask for another size (e.g. Medium or Large).',
      targetVocabulary: ['too tight', 'too small', 'medium', 'large', 'do you have', 'size'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'It is a bit too tight in the shoulders. Do you have this in a Medium, please?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'This size is too small for me. Can I try a Large?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'It feels too tight. Do you have the next size up?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Fit Evaluation',
          patterns: ['too tight', 'too small', 'too big', 'too loose', 'a bit small', 'doesn\'t fit'],
          required: true,
        },
        {
          name: 'Size Request',
          patterns: ['medium', 'large', 'size m', 'size l', 'next size', 'do you have this in', 'can i try a'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_23_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly asks for a medium size?',
        options: [
          { id: 'opt_1', text: 'Do you have this in Medium?', isCorrect: true },
          { id: 'opt_2', text: 'Have you this mediumly?', isCorrect: false },
          { id: 'opt_3', text: 'Is this has medium size?', isCorrect: false },
        ],
        correctAnswer: 'Do you have this in Medium?',
        explanation: '"Do you have this in [Size]?" is the standard retail inquiry.',
      },
    },
    {
      id: 'turn_a1_23_3',
      turnIndex: 3,
      partnerPrompt:
        'Here is the Medium! Try this one on. How does this size feel on you now?',
      partnerAudioText:
        'Here is the Medium! Try this one on. How does this size feel on you now?',
      partnerQuestionHindi:
        'यह रहा मीडियम! इसे पहनकर देखिए। अब यह साइज़ आप पर कैसा लग रहा है?',
      expectedFunction: 'Express Satisfaction & Confirm Purchase',
      contextGoal:
        'Confirm that the larger size fits well and state that you will buy it.',
      targetVocabulary: ['fits perfectly', 'fits well', 'take it', 'buy', 'thank you'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'This one fits perfectly! It is very comfortable. I will take it, thank you!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'It fits great now. I\'ll buy this one. Thanks Clara!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Much better, fits well. I will take it. Where is the cash desk?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Positive Fit & Purchase',
          patterns: ['fits perfectly', 'fits well', 'fits great', 'will take it', 'i\'ll take it', 'buy this', 'comfortable'],
          required: true,
        },
        {
          name: 'Gratitude',
          patterns: ['thank you', 'thanks', 'appreciate it'],
          required: false,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_23_3',
        type: 'multiple_choice',
        prompt: 'Which sentence naturally tells the salesperson you will purchase the item?',
        options: [
          { id: 'opt_1', text: 'It fits perfectly. I will take it!', isCorrect: true },
          { id: 'opt_2', text: 'I am taking jacket now with buy.', isCorrect: false },
          { id: 'opt_3', text: 'It is good, make me buy.', isCorrect: false },
        ],
        correctAnswer: 'It fits perfectly. I will take it!',
        explanation: '"I will take it!" is the standard expression to confirm a purchase.',
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
