import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_16: ConversationDefinition = {
  id: 'conv_a1_16',
  title: 'Describing Your New Apartment & Room Layout',
  cefr: 'A1',
  unitId: 'unit_a1_2',
  lessonLinks: ['lesson_a1_2_16'],
  estimatedMinutes: 5,
  scenario:
    'You are talking to a colleague, Marcus, during lunch. He asks about your new apartment, its layout, and the rooms inside.',
  communicativeGoals: [
    'Describe the layout of your home using "There is" and "There are"',
    'Mention specific rooms (living room, bedroom, kitchen, bathroom, balcony)',
    'State what your apartment has and what it lacks using negative forms ("There isn\'t / There aren\'t")',
    'Ask reciprocal questions about your friend\'s home or building',
  ],
  canDoStatements: [
    'Can describe an apartment or house room by room using "There is a..." and "There are two..." (CEFR A1)',
    'Can state features and amenities with singular and plural agreement',
    'Can ask simple questions about living spaces: "Is there a balcony?"',
  ],
  characters: [
    {
      id: 'char_marcus',
      name: 'Marcus',
      role: 'Work Colleague',
      avatar: '👨‍💼',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'apartment',
        ipa: '/əˈpɑːrtmənt/',
        partOfSpeech: 'noun',
        meaning: 'A set of rooms for living in, especially on one floor of a building',
        exampleSentence: 'I live in a modern two-bedroom apartment.',
        translations: { hi: 'अपार्टमेंट / फ्लैट' },
      },
      {
        word: 'kitchen',
        ipa: '/ˈkɪtʃɪn/',
        partOfSpeech: 'noun',
        meaning: 'A room where food is kept and cooked',
        exampleSentence: 'There is a spacious kitchen with a refrigerator.',
        translations: { hi: 'रसोईघर' },
      },
      {
        word: 'bedroom',
        ipa: '/ˈbɛdruːm/',
        partOfSpeech: 'noun',
        meaning: 'A room used for sleeping in',
        exampleSentence: 'There are two sunny bedrooms upstairs.',
        translations: { hi: 'शयनकक्ष' },
      },
      {
        word: 'balcony',
        ipa: '/ˈbælkəni/',
        partOfSpeech: 'noun',
        meaning: 'An outside platform built onto the side of a building',
        exampleSentence: 'There is a small balcony with flowers.',
        translations: { hi: 'बालकनी' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'There is a...',
        functionCategory: 'Singular Existence',
        exampleSentence: 'There is a big living room.',
      },
      {
        phrase: 'There are two...',
        functionCategory: 'Plural Existence',
        exampleSentence: 'There are two bedrooms in the flat.',
      },
      {
        phrase: 'There isn\'t any...',
        functionCategory: 'Negative Statement',
        exampleSentence: 'There isn\'t a garden, but there is a balcony.',
      },
      {
        phrase: 'What is your place like?',
        functionCategory: 'Inquiry',
        exampleSentence: 'What is your new apartment like?',
      },
    ],
    grammar: {
      title: 'Existential "There is" (Singular) & "There are" (Plural)',
      conceptExplanation:
        'Use "There is a/an" for singular nouns and "There are" for plural nouns. In negative statements, use "There isn\'t a..." or "There aren\'t any...". For questions, invert the word order: "Is there...?" / "Are there...?".',
      patternFormula: 'There is + a/an + Singular Noun | There are + Number/Plural Nouns',
      contrastExamples: [
        {
          incorrect: 'There is three rooms in my house.',
          correct: 'There are three rooms in my house.',
          explanation: '"Three rooms" is plural, so you must use "There are".',
        },
        {
          incorrect: 'There are a balcony next to the kitchen.',
          correct: 'There is a balcony next to the kitchen.',
          explanation: '"A balcony" is singular, so use "There is".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Marcus',
        text: 'Hey! How is your new apartment? How many rooms are there?',
        translation: 'अरे! तुम्हारा नया अपार्टमेंट कैसा है? उसमें कितने कमरे हैं?',
      },
      {
        speaker: 'You',
        text: 'It is great! There is a bright living room and there are two bedrooms.',
        translation: 'यह बहुत बढ़िया है! एक बड़ा लिविंग रूम है और दो बेडरूम हैं।',
      },
      {
        speaker: 'Marcus',
        text: 'Nice! Is there a balcony or a terrace?',
        translation: 'शानदार! क्या कोई बालकनी या छत है?',
      },
      {
        speaker: 'You',
        text: 'Yes, there is a small balcony. But there isn\'t a private garden.',
        translation: 'हाँ, एक छोटी बालकनी है। लेकिन कोई प्राइवेट गार्डन नहीं है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_16_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "___ a large table in the dining room."',
      options: [
        { id: 'opt_1', text: 'There is', isCorrect: true },
        { id: 'opt_2', text: 'There are', isCorrect: false },
        { id: 'opt_3', text: 'It have', isCorrect: false },
      ],
      correctAnswer: 'There is',
      explanation: '"A large table" is singular, requiring "There is".',
    },
    {
      id: 'cp_a1_16_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes plural rooms?',
      options: [
        { id: 'opt_1', text: 'There are two bathrooms in the apartment.', isCorrect: true },
        { id: 'opt_2', text: 'There is two bathrooms in the apartment.', isCorrect: false },
        { id: 'opt_3', text: 'There has two bathrooms in the apartment.', isCorrect: false },
      ],
      correctAnswer: 'There are two bathrooms in the apartment.',
      explanation: 'Plural subjects ("two bathrooms") take "There are".',
    },
    {
      id: 'cp_a1_16_3',
      type: 'multiple_choice',
      prompt: 'How do you ask if an amenity exists?',
      options: [
        { id: 'opt_1', text: 'Is there a balcony?', isCorrect: true },
        { id: 'opt_2', text: 'There is a balcony?', isCorrect: false },
        { id: 'opt_3', text: 'Are there a balcony?', isCorrect: false },
      ],
      correctAnswer: 'Is there a balcony?',
      explanation: 'Invert "There is" to "Is there...?" for singular questions.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_16_1',
      scenarioContext: 'Describe the main rooms in your new place.',
      prompt: 'Build: "There is a kitchen and there are two bedrooms."',
      targetStructure: 'Existential singular + connector + existential plural',
      wordBank: ['There', 'is', 'a', 'kitchen', 'and', 'there', 'are', 'two', 'bedrooms', 'have', 'is'],
      acceptableSolutions: [
        'There is a kitchen and there are two bedrooms',
        'There is a kitchen and there are two bedrooms.',
      ],
      explanation: 'Correct combination of singular "There is a kitchen" and plural "there are two bedrooms".',
    },
    {
      id: 'sc_a1_16_2',
      scenarioContext: 'State that there is a balcony and ask about your friend\'s flat.',
      prompt: 'Build: "There is a balcony. Is there an elevator in your building?"',
      targetStructure: 'Affirmative singular + Inverted question with indefinite article',
      wordBank: ['There', 'is', 'a', 'balcony', 'Is', 'there', 'an', 'elevator', 'in', 'your', 'building', 'are'],
      acceptableSolutions: [
        'There is a balcony Is there an elevator in your building',
        'There is a balcony. Is there an elevator in your building?',
      ],
      explanation: 'States a feature and inquires about building amenities using inverted "Is there".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_16_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi! I heard you moved into a new place this weekend. What is your new apartment like?',
      partnerAudioText:
        'Hi! I heard you moved into a new place this weekend. What is your new apartment like?',
      partnerQuestionHindi:
        'नमस्ते! मैंने सुना कि आप इस वीकेंड नए फ्लैट में शिफ्ट हुए हैं। आपका नया अपार्टमेंट कैसा है?',
      expectedFunction: 'Describe Apartment Layout',
      contextGoal:
        'Explain the basic layout using "There is" and "There are", mentioning at least two rooms.',
      targetVocabulary: ['apartment', 'living room', 'bedroom', 'kitchen', 'there is', 'there are'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'It is very nice! There is a big living room and there are two bedrooms.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'My new place is great. There is a sunny kitchen and one bathroom.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I love it. There is plenty of light and there are three spacious rooms.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Existential Statement',
          patterns: ['there is', 'there are', 'it has', 'my apartment has'],
          required: true,
        },
        {
          name: 'Room Names',
          patterns: ['living room', 'bedroom', 'kitchen', 'bathroom', 'room', 'rooms'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'there_are_singular_mismatch',
          pattern: /\bthere is (two|three|four|\d+)\b/i,
          errorType: 'grammar',
          message: 'Use "There are" when mentioning two or more items (e.g. "There are two bedrooms").',
          correctionPattern: 'There are two bedrooms...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_16_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "___ two bedrooms in the house."',
        options: [
          { id: 'opt_1', text: 'There are', isCorrect: true },
          { id: 'opt_2', text: 'There is', isCorrect: false },
          { id: 'opt_3', text: 'Have', isCorrect: false },
        ],
        correctAnswer: 'There are',
        explanation: '"Two bedrooms" is plural, requiring "There are".',
      },
    },
    {
      id: 'turn_a1_16_2',
      turnIndex: 2,
      partnerPrompt:
        'Sounds wonderful! Is there a balcony or a nice view, or does it have any outdoor space?',
      partnerAudioText:
        'Sounds wonderful! Is there a balcony or a nice view, or does it have any outdoor space?',
      partnerQuestionHindi:
        'बहुत बढ़िया लग रहा है! क्या कोई बालकनी या अच्छा नज़ारा है, या कोई खुली जगह है?',
      expectedFunction: 'Describe Amenities & Negatives',
      contextGoal:
        'Confirm if there is a balcony or view, and state what is or isn\'t there (e.g. "There is a balcony", "There isn\'t a garden").',
      targetVocabulary: ['balcony', 'view', 'garden', 'there is', 'there isn\'t'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes, there is a small balcony with a nice view, but there isn\'t a garden.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'There is a balcony off the bedroom, but there aren\'t any trees outside.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Yes! There is a great view of the city from the balcony.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Feature Confirmation',
          patterns: ['there is a balcony', 'there is a view', 'yes there is', 'it has a balcony', 'there is a small balcony'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'have_instead_of_there_is',
          pattern: /\bit have a\b/i,
          errorType: 'grammar',
          message: 'Say "There is a balcony" or "It has a balcony", not "It have".',
          correctionPattern: 'There is a balcony / It has a balcony',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_16_2',
        type: 'multiple_choice',
        prompt: 'Which is the correct negative sentence?',
        options: [
          { id: 'opt_1', text: 'There isn\'t a garden.', isCorrect: true },
          { id: 'opt_2', text: 'There not a garden.', isCorrect: false },
          { id: 'opt_3', text: 'There aren\'t a garden.', isCorrect: false },
        ],
        correctAnswer: 'There isn\'t a garden.',
        explanation: 'Singular negative uses "There isn\'t a [noun]".',
      },
    },
    {
      id: 'turn_a1_16_3',
      turnIndex: 3,
      partnerPrompt:
        'A balcony is great for morning coffee! Do you live close to work now, and how is your commute?',
      partnerAudioText:
        'A balcony is great for morning coffee! Do you live close to work now, and how is your commute?',
      partnerQuestionHindi:
        'सुबह की कॉफी के लिए बालकनी बहुत अच्छी है! क्या आप अब ऑफिस के पास रहते हैं, और आना-जाना कैसा है?',
      expectedFunction: 'Connect Location & Closing Question',
      contextGoal:
        'State your location/commute (retrieving Lessons 1–15) and ask Marcus about his place.',
      targetVocabulary: ['live', 'near', 'close', 'commute', 'what about you'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes, I live near the office now. It takes only ten minutes! What about your place?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'It is very close to work. I walk every day. Where do you live, Marcus?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'The commute is very short. How is your apartment, Marcus?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Location / Commute Statement',
          patterns: ['i live near', 'close to work', 'short walk', 'ten minutes', 'easy commute', 'very close', 'i walk'],
          required: true,
        },
        {
          name: 'Reciprocal Question',
          patterns: ['what about you', 'and you', 'where do you live', 'how about your place', 'do you live near'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_16_3',
        type: 'multiple_choice',
        prompt: 'Which phrase politely asks your colleague about his residence?',
        options: [
          { id: 'opt_1', text: 'What about your place, Marcus?', isCorrect: true },
          { id: 'opt_2', text: 'Where your home is?', isCorrect: false },
          { id: 'opt_3', text: 'How place is you?', isCorrect: false },
        ],
        correctAnswer: 'What about your place, Marcus?',
        explanation: '"What about your place?" is a natural reciprocal question.',
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
