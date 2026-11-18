import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_17: ConversationDefinition = {
  id: 'conv_a1_17',
  title: 'Arranging Furniture in the Living Room',
  cefr: 'A1',
  unitId: 'unit_a1_2',
  lessonLinks: ['lesson_a1_2_17'],
  estimatedMinutes: 5,
  scenario:
    'Your friend Elena is visiting your apartment to help you organize and furnish your new living room.',
  communicativeGoals: [
    'Name essential furniture items (sofa, coffee table, bookshelf, lamp, rug, television)',
    'Describe exact locations using prepositions (next to, in front of, opposite, behind, near, on)',
    'Suggest where to place furniture items and ask for confirmation',
  ],
  canDoStatements: [
    'Can locate household objects precisely using "next to", "in front of", "opposite", and "near" (CEFR A1)',
    'Can ask and answer "Where is...?" and "Where should we put...?"',
    'Can give simple instructions for arranging items in a room',
  ],
  characters: [
    {
      id: 'char_elena',
      name: 'Elena',
      role: 'Helpful Friend',
      avatar: '👩‍🎨',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'sofa',
        ipa: '/ˈsoʊfə/',
        partOfSpeech: 'noun',
        meaning: 'A comfortable seat for two or more people with a back and arms',
        exampleSentence: 'The green sofa is next to the large window.',
        translations: { hi: 'सोफा' },
      },
      {
        word: 'bookshelf',
        ipa: '/ˈbʊkʃɛlf/',
        partOfSpeech: 'noun',
        meaning: 'A structure with shelves designed for holding books',
        exampleSentence: 'There is a tall bookshelf opposite the door.',
        translations: { hi: 'किताबों की अलमारी' },
      },
      {
        word: 'lamp',
        ipa: '/læmp/',
        partOfSpeech: 'noun',
        meaning: 'A device for giving light',
        exampleSentence: 'I placed a reading lamp on the side table.',
        translations: { hi: 'लैंप / बत्ती' },
      },
      {
        word: 'opposite',
        ipa: '/ˈɒpəzɪt/',
        partOfSpeech: 'preposition',
        meaning: 'On the other side of a space from someone or something',
        exampleSentence: 'The television is opposite the couch.',
        translations: { hi: 'के सामने / आमने-सामने' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'next to the...',
        functionCategory: 'Spatial Location',
        exampleSentence: 'Put the lamp next to the sofa.',
      },
      {
        phrase: 'in front of the...',
        functionCategory: 'Spatial Location',
        exampleSentence: 'The coffee table is in front of the sofa.',
      },
      {
        phrase: 'opposite the...',
        functionCategory: 'Spatial Location',
        exampleSentence: 'The bookshelf is opposite the window.',
      },
      {
        phrase: 'Where is the...?',
        functionCategory: 'Location Inquiry',
        exampleSentence: 'Where is the floor lamp right now?',
      },
    ],
    grammar: {
      title: 'Prepositions of Place (next to, behind, in front of, opposite, above, near)',
      conceptExplanation:
        'Use prepositions to describe exact positions: "The [item] is [preposition] the [reference item]". Use "the" when talking about specific furniture in the room.',
      patternFormula: 'Subject + is/are + [Preposition] + the + [Noun]',
      contrastExamples: [
        {
          incorrect: 'The table is next the sofa.',
          correct: 'The table is next to the sofa.',
          explanation: 'Always include "to" with "next to".',
        },
        {
          incorrect: 'The lamp is in front the window.',
          correct: 'The lamp is in front of the window.',
          explanation: 'Always include "of" with "in front of".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Elena',
        text: 'This is a nice room! Where is your sofa going to go?',
        translation: 'यह बहुत अच्छा कमरा है! तुम्हारा सोफा कहाँ रखा जाएगा?',
      },
      {
        speaker: 'You',
        text: 'I want to put the sofa next to the window, facing the door.',
        translation: 'मैं सोफे को खिड़की के पास, दरवाजे की ओर रखना चाहता हूँ।',
      },
      {
        speaker: 'Elena',
        text: 'Great idea. And where should we put the coffee table and the lamp?',
        translation: 'बढ़िया विचार है। और हमें कॉफी टेबल और लैंप कहाँ रखना चाहिए?',
      },
      {
        speaker: 'You',
        text: 'The coffee table goes in front of the sofa, and the lamp is next to the desk.',
        translation: 'कॉफी टेबल सोफे के सामने जाएगी, और लैंप डेस्क के पास रहेगा।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_17_1',
      type: 'fill_blank',
      prompt: 'Complete the preposition: "The small rug is in front ___ the fireplace."',
      options: [
        { id: 'opt_1', text: 'of', isCorrect: true },
        { id: 'opt_2', text: 'to', isCorrect: false },
        { id: 'opt_3', text: 'at', isCorrect: false },
      ],
      correctAnswer: 'of',
      explanation: 'The complete compound preposition is "in front of".',
    },
    {
      id: 'cp_a1_17_2',
      type: 'multiple_choice',
      prompt: 'Which preposition means directly facing on the other side of the room?',
      options: [
        { id: 'opt_1', text: 'opposite', isCorrect: true },
        { id: 'opt_2', text: 'under', isCorrect: false },
        { id: 'opt_3', text: 'behind', isCorrect: false },
      ],
      correctAnswer: 'opposite',
      explanation: '"Opposite" describes items facing each other across an open space.',
    },
    {
      id: 'cp_a1_17_3',
      type: 'multiple_choice',
      prompt: 'Which sentence has correct prepositions?',
      options: [
        { id: 'opt_1', text: 'The floor lamp is next to the bookshelf.', isCorrect: true },
        { id: 'opt_2', text: 'The floor lamp is next the bookshelf.', isCorrect: false },
        { id: 'opt_3', text: 'The floor lamp is in front the bookshelf.', isCorrect: false },
      ],
      correctAnswer: 'The floor lamp is next to the bookshelf.',
      explanation: '"next to" is the correct standard prepositional phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_17_1',
      scenarioContext: 'Describe the position of the coffee table relative to the sofa.',
      prompt: 'Build: "The coffee table is in front of the sofa."',
      targetStructure: 'Subject + be + compound preposition + reference item',
      wordBank: ['The', 'coffee', 'table', 'is', 'in', 'front', 'of', 'the', 'sofa', 'to', 'next'],
      acceptableSolutions: [
        'The coffee table is in front of the sofa',
        'The coffee table is in front of the sofa.',
      ],
      explanation: 'Standard prepositional sentence expressing location.',
    },
    {
      id: 'sc_a1_17_2',
      scenarioContext: 'Explain where the bookshelf is located.',
      prompt: 'Build: "The tall bookshelf is next to the desk."',
      targetStructure: 'Subject + be + next to + reference noun',
      wordBank: ['The', 'tall', 'bookshelf', 'is', 'next', 'to', 'the', 'desk', 'front', 'of'],
      acceptableSolutions: [
        'The tall bookshelf is next to the desk',
        'The tall bookshelf is next to the desk.',
      ],
      explanation: 'Clear location description using "next to".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_17_1',
      turnIndex: 1,
      partnerPrompt:
        'Your living room has so much natural light! Where do you want to put your sofa and the rug?',
      partnerAudioText:
        'Your living room has so much natural light! Where do you want to put your sofa and the rug?',
      partnerQuestionHindi:
        'आपके लिविंग रूम में बहुत अच्छी रोशनी है! आप अपना सोफा और कालीन कहाँ रखना चाहते हैं?',
      expectedFunction: 'State Furniture Position',
      contextGoal:
        'Tell Elena where the sofa and rug should go using a preposition of place (e.g. "next to the window", "in the center").',
      targetVocabulary: ['sofa', 'rug', 'next to', 'window', 'in front of', 'center'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I want to put the sofa next to the window, and the rug in the center.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'The sofa is next to the wall, and the rug is under the table.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Let\'s place the sofa near the big window with the rug in front.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Sofa Placement',
          patterns: ['sofa next to', 'sofa near', 'sofa by', 'put the sofa', 'place the sofa', 'sofa is'],
          required: true,
        },
        {
          name: 'Preposition of Place',
          patterns: ['next to', 'in front of', 'under', 'near', 'by', 'opposite', 'in the middle'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'missing_to_in_next_to',
          pattern: /\bnext the (window|wall|door|desk)\b/i,
          errorType: 'grammar',
          message: 'Always use "next to", not just "next" (e.g. "next to the window").',
          correctionPattern: 'next to the...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_17_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "The armchair is next ___ the lamp."',
        options: [
          { id: 'opt_1', text: 'to', isCorrect: true },
          { id: 'opt_2', text: 'of', isCorrect: false },
          { id: 'opt_3', text: 'at', isCorrect: false },
        ],
        correctAnswer: 'to',
        explanation: 'Always say "next to".',
      },
    },
    {
      id: 'turn_a1_17_2',
      turnIndex: 2,
      partnerPrompt:
        'That looks balanced! What about your bookshelf and the television? Where do they go?',
      partnerAudioText:
        'That looks balanced! What about your bookshelf and the television? Where do they go?',
      partnerQuestionHindi:
        'यह बहुत संतुलित लग रहा है! आपकी किताबों की अलमारी और टीवी के बारे में क्या? वे कहाँ जाएँगे?',
      expectedFunction: 'Describe Relative Position',
      contextGoal:
        'Explain where the television and bookshelf will be placed using prepositions like "opposite", "behind", or "in front of".',
      targetVocabulary: ['bookshelf', 'television', 'opposite', 'in front of', 'wall'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'The television is opposite the sofa, and the bookshelf is next to the door.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'We can put the TV on the wall opposite the sofa.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'The bookshelf goes behind the desk, and the TV is opposite the chairs.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Item Location',
          patterns: ['bookshelf', 'television', 'tv', 'opposite', 'next to the door', 'on the wall'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'missing_of_in_front',
          pattern: /\bin front the\b/i,
          errorType: 'grammar',
          message: 'Always use "in front of", not "in front the".',
          correctionPattern: 'in front of the...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_17_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly locates the television?',
        options: [
          { id: 'opt_1', text: 'The TV is opposite the sofa.', isCorrect: true },
          { id: 'opt_2', text: 'The TV is opposite to the sofa.', isCorrect: false },
          { id: 'opt_3', text: 'The TV is opposite of the sofa.', isCorrect: false },
        ],
        correctAnswer: 'The TV is opposite the sofa.',
        explanation: '"Opposite" is followed directly by the noun phrase: "opposite the sofa".',
      },
    },
    {
      id: 'turn_a1_17_3',
      turnIndex: 3,
      partnerPrompt:
        'Everything is coming together so nicely! Do you have a reading lamp, and does your living room feel cozy now?',
      partnerAudioText:
        'Everything is coming together so nicely! Do you have a reading lamp, and does your living room feel cozy now?',
      partnerQuestionHindi:
        'सब कुछ बहुत अच्छे से व्यवस्थित हो रहा है! क्या आपके पास एक रीडिंग लैंप है, और क्या आपका लिविंग रूम अब आरामदायक लग रहा है?',
      expectedFunction: 'Confirm & Express Satisfaction',
      contextGoal:
        'Confirm you have a lamp (mention where it sits), express happiness with the room, and thank Elena.',
      targetVocabulary: ['lamp', 'table', 'cozy', 'thank you', 'looks great'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes, there is a lamp on the side table! The room looks very cozy now. Thank you, Elena!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I have a small lamp next to the armchair. Thanks for your help!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Yes, it feels very comfortable now. I really appreciate your help!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Lamp Location / Confirmation',
          patterns: ['lamp', 'on the table', 'next to', 'have a lamp', 'yes there is'],
          required: true,
        },
        {
          name: 'Gratitude / Positive Reaction',
          patterns: ['thank you', 'thanks', 'cozy', 'comfortable', 'looks great', 'appreciate it'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_17_3',
        type: 'multiple_choice',
        prompt: 'Which is the natural way to thank someone for helping you furnish?',
        options: [
          { id: 'opt_1', text: 'Thank you so much for your help!', isCorrect: true },
          { id: 'opt_2', text: 'Thanks you help me.', isCorrect: false },
          { id: 'opt_3', text: 'I am thank you very.', isCorrect: false },
        ],
        correctAnswer: 'Thank you so much for your help!',
        explanation: '"Thank you so much for your help!" is natural and grammatically correct.',
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
