import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_4: ConversationDefinition = {
  id: 'conv_a1_4',
  title: 'At the Lost & Found Desk',
  cefr: 'A1',
  unitId: 'unit_a1_1',
  lessonLinks: ['lesson_a1_1_4'],
  estimatedMinutes: 5,
  scenario:
    'You left your bag and keys in the meeting room. You go to the reception desk where the receptionist, Clara, helps you identify your belongings.',
  communicativeGoals: [
    'Identify and describe personal belongings (backpack, keys, glasses, laptop, notebook)',
    'Use singular and plural demonstratives correctly (this / that / these / those)',
    'Indicate ownership using possessive determiners and pronouns (my, mine, your)',
    'Ask questions about objects ("Is this your bag?", "Are those your keys?")',
  ],
  canDoStatements: [
    'Can identify everyday items and personal belongings (CEFR A1)',
    'Can use demonstratives "this/that/these/those" accurately in context',
    'Can confirm ownership of objects with short affirmative and negative answers',
  ],
  characters: [
    {
      id: 'char_clara',
      name: 'Clara',
      role: 'Receptionist & Lost & Found Officer',
      avatar: '👩‍💼',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'backpack',
        ipa: '/ˈbækpæk/',
        partOfSpeech: 'noun',
        meaning: 'A bag carried on one’s back with two shoulder straps',
        exampleSentence: 'Is this black backpack yours?',
        translations: { hi: 'बैग / बस्ता' },
      },
      {
        word: 'keys',
        ipa: '/kiːz/',
        partOfSpeech: 'noun',
        meaning: 'Small metal instruments used to lock or unlock doors',
        exampleSentence: 'These are my office keys.',
        translations: { hi: 'चाबियाँ' },
      },
      {
        word: 'glasses',
        ipa: '/ˈɡlɑːsɪz/',
        partOfSpeech: 'noun',
        meaning: 'Lenses worn on the eyes to improve vision',
        exampleSentence: 'Are those reading glasses yours?',
        translations: { hi: 'चश्मा' },
      },
      {
        word: 'notebook',
        ipa: '/ˈnəʊtbʊk/',
        partOfSpeech: 'noun',
        meaning: 'A book of blank or ruled pages for writing notes',
        exampleSentence: 'This blue notebook is mine.',
        translations: { hi: 'कॉपी / नोटबुक' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Is this your...?',
        functionCategory: 'Asking Near Singular Ownership',
        exampleSentence: 'Is this your pen on the desk?',
      },
      {
        phrase: 'Are these your...?',
        functionCategory: 'Asking Near Plural Ownership',
        exampleSentence: 'Are these your keys?',
      },
      {
        phrase: 'Yes, that is mine.',
        functionCategory: 'Confirming Ownership',
        exampleSentence: 'Yes, that blue bag is mine.',
      },
      {
        phrase: 'No, those are not mine.',
        functionCategory: 'Denying Ownership',
        exampleSentence: 'No, those glasses belong to someone else.',
      },
    ],
    grammar: {
      title: 'Demonstratives: This / That (Singular) vs These / Those (Plural)',
      conceptExplanation:
        'Use "this" (near) and "that" (far) for single objects with "is". Use "these" (near) and "those" (far) for plural objects with "are".',
      patternFormula: 'This/That is + [Singular Noun] | These/Those are + [Plural Noun]',
      contrastExamples: [
        {
          incorrect: 'These is my keys.',
          correct: 'These are my keys. / This is my key.',
          explanation: '"These" and "keys" are plural and must take the plural verb "are".',
        },
        {
          incorrect: 'Is that your glasses?',
          correct: 'Are those your glasses?',
          explanation: '"Glasses" is a plural noun and requires "are those".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Clara',
        text: 'Hello! Can I help you find something from the meeting room?',
        translation: 'नमस्ते! क्या मैं मीटिंग रूम से आपकी कोई खोई चीज़ ढूँढने में मदद कर सकती हूँ?',
      },
      {
        speaker: 'You',
        text: 'Yes please. I think I left my backpack and my keys there.',
        translation: 'हाँ कृपया। मुझे लगता है कि मैं अपना बैग और अपनी चाबियाँ वहीं भूल गया हूँ।',
      },
      {
        speaker: 'Clara',
        text: 'Let me check the lost box. Is this blue backpack yours?',
        translation: 'मुझे लॉस्ट बॉक्स देखने दीजिए। क्या यह नीला बैग आपका है?',
      },
      {
        speaker: 'You',
        text: 'Yes! That is mine, thank you! And are those keys on the desk mine too?',
        translation: 'हाँ! वह मेरा है, धन्यवाद! और क्या मेज पर रखी वे चाबियाँ भी मेरी हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_4_1',
      type: 'multiple_choice',
      prompt: 'Select the correct demonstrative: "___ are my car keys in my hand."',
      options: [
        { id: 'opt_1', text: 'These', isCorrect: true },
        { id: 'opt_2', text: 'This', isCorrect: false },
        { id: 'opt_3', text: 'That', isCorrect: false },
      ],
      correctAnswer: 'These',
      explanation: 'Use "These" for nearby plural objects (keys in hand).',
    },
    {
      id: 'cp_a1_4_2',
      type: 'fill_blank',
      prompt: 'Complete the question: "___ that your jacket on the chair over there?"',
      options: [
        { id: 'opt_1', text: 'Is', isCorrect: true },
        { id: 'opt_2', text: 'Are', isCorrect: false },
        { id: 'opt_3', text: 'Do', isCorrect: false },
      ],
      correctAnswer: 'Is',
      explanation: '"That jacket" is singular, so it takes the verb "Is".',
    },
    {
      id: 'cp_a1_4_3',
      type: 'multiple_choice',
      prompt: 'Which answer correctly denies ownership?',
      options: [
        { id: 'opt_1', text: 'No, that is not mine.', isCorrect: true },
        { id: 'opt_2', text: 'No, that not is my.', isCorrect: false },
        { id: 'opt_3', text: 'No, those is not me.', isCorrect: false },
      ],
      correctAnswer: 'No, that is not mine.',
      explanation: 'Use the possessive pronoun "mine" after the verb BE.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_4_1',
      scenarioContext: 'Confirm that the backpack is yours.',
      prompt: 'Build: "Yes, this black backpack is mine."',
      targetStructure: 'Affirmative token + demonstrative noun phrase + BE + possessive pronoun',
      wordBank: ['Yes', 'this', 'black', 'backpack', 'is', 'mine', 'these', 'are', 'my'],
      acceptableSolutions: [
        'Yes this black backpack is mine',
        'Yes, this black backpack is mine.',
        'Yes, that black backpack is mine.',
      ],
      explanation: 'Uses singular demonstrative "this" with "backpack" and "mine".',
    },
    {
      id: 'sc_a1_4_2',
      scenarioContext: 'Inquire about the keys across the counter.',
      prompt: 'Build: "Are those keys on the table yours?"',
      targetStructure: 'Plural question + demonstrative + noun + prepositional location + possessive pronoun',
      wordBank: ['Are', 'those', 'keys', 'on', 'the', 'table', 'yours', 'Is', 'that', 'your'],
      acceptableSolutions: [
        'Are those keys on the table yours',
        'Are those keys on the table yours?',
        'Are these keys on the table yours?',
      ],
      explanation: 'Plural question using "Are those keys" and possessive pronoun "yours".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_4_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello! Welcome to the reception desk. Did you lose something after the morning meeting?',
      partnerAudioText: 'Hello! Welcome to the reception desk. Did you lose something after the morning meeting?',
      partnerQuestionHindi: 'नमस्ते! रिसेप्शन डेस्क में आपका स्वागत है। क्या सुबह की मीटिंग के बाद आपकी कोई चीज़ खो गई थी?',
      expectedFunction: 'State Lost Items',
      contextGoal: 'Explain what items you left behind (e.g. backpack, keys, notebook) using "I lost..." or "I left my...".',
      targetVocabulary: ['backpack', 'keys', 'notebook', 'left', 'lost', 'my'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hi Clara, yes! I left my black backpack and my keys in the meeting room.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hello! I am looking for my laptop bag and notebook.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Yes, I think I forgot my keys and bag inside room 204.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Lost Item Identification',
          patterns: ['my backpack', 'my bag', 'my keys', 'my notebook', 'my laptop', 'left my', 'lost my', 'looking for my'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'plural_keys_article',
          pattern: /\ba keys\b/i,
          errorType: 'grammar',
          message: 'Never use "a" with plural nouns. Say "my keys" or "the keys", not "a keys".',
          correctionPattern: 'my keys',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_4_1',
        type: 'multiple_choice',
        prompt: 'Which phrase is correct?',
        options: [
          { id: 'opt_1', text: 'my keys', isCorrect: true },
          { id: 'opt_2', text: 'a keys', isCorrect: false },
          { id: 'opt_3', text: 'one keys', isCorrect: false },
        ],
        correctAnswer: 'my keys',
        explanation: 'Plural nouns cannot take the singular article "a".',
      },
    },
    {
      id: 'turn_a1_4_2',
      turnIndex: 2,
      partnerPrompt:
        'I have two bags here. Is this dark blue backpack yours, or is that green one over there yours?',
      partnerAudioText: 'I have two bags here. Is this dark blue backpack yours, or is that green one over there yours?',
      partnerQuestionHindi: 'मेरे पास यहाँ दो बैग हैं। क्या यह गहरा नीला बैग आपका है, या वहाँ रखा वह हरा बैग आपका है?',
      expectedFunction: 'Demonstrative Identification & Ownership',
      contextGoal: 'Clarify which bag is yours using "This is mine" or "That blue backpack is mine".',
      targetVocabulary: ['this', 'that', 'mine', 'backpack', 'blue', 'green'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'That dark blue backpack is mine! The green one is not mine.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'This blue one is mine, thank you so much!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'The blue bag is definitely mine. Thanks Clara!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Ownership Confirmation',
          patterns: ['blue backpack is mine', 'blue bag is mine', 'that is mine', 'this is mine', 'mine', 'blue one is mine'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'my_vs_mine_predicative',
          pattern: /\bthat is my\b$/i,
          errorType: 'grammar',
          message: 'At the end of a sentence without a noun, use "mine" (e.g. "That is mine"), not "my".',
          correctionPattern: 'That is mine.',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_4_2',
        type: 'fill_blank',
        prompt: 'Choose the correct word: "Yes, that backpack is ___."',
        options: [
          { id: 'opt_1', text: 'mine', isCorrect: true },
          { id: 'opt_2', text: 'my', isCorrect: false },
          { id: 'opt_3', text: 'me', isCorrect: false },
        ],
        correctAnswer: 'mine',
        explanation: 'Use possessive pronoun "mine" when no noun follows.',
      },
    },
    {
      id: 'turn_a1_4_3',
      turnIndex: 3,
      partnerPrompt:
        'Here is your backpack and your keys! Please sign this register book on the desk. Have a wonderful afternoon!',
      partnerAudioText: 'Here is your backpack and your keys! Please sign this register book on the desk. Have a wonderful afternoon!',
      partnerQuestionHindi: 'ये रहा आपका बैग और आपकी चाबियाँ! कृपया डेस्क पर इस रजिस्टर बुक में हस्ताक्षर करें। आपकी दोपहर शुभ हो!',
      expectedFunction: 'Gratitude & Polite Sign-off',
      contextGoal: 'Thank Clara enthusiastically and wish her a good afternoon.',
      targetVocabulary: ['thank', 'afternoon', 'goodbye', 'help'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you for your help, Clara! Have a great afternoon, goodbye.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thanks a lot Clara! Have a good afternoon!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'All signed! Thanks again, bye.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Thanks & Farewell',
          patterns: ['thank you', 'thanks', 'have a great afternoon', 'have a good afternoon', 'goodbye', 'bye', 'help'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_4_3',
        type: 'multiple_choice',
        prompt: 'Which phrase expresses gratitude for assistance?',
        options: [
          { id: 'opt_1', text: 'Thank you for your help!', isCorrect: true },
          { id: 'opt_2', text: 'Thanks of you help!', isCorrect: false },
          { id: 'opt_3', text: 'You do help good!', isCorrect: false },
        ],
        correctAnswer: 'Thank you for your help!',
        explanation: '"Thank you for your help!" is the standard polite expression.',
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
