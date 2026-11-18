import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_3: ConversationDefinition = {
  id: 'conv_a1_3',
  title: 'Sharing Family Photos with a Friend',
  cefr: 'A1',
  unitId: 'unit_a1_1',
  lessonLinks: ['lesson_a1_1_3'],
  estimatedMinutes: 5,
  scenario:
    'You are having tea with your classmate Daniel in the university cafeteria. You show each other photos of your families on your phones.',
  communicativeGoals: [
    'Describe family members (mother, father, brother, sister, son, daughter)',
    'Use possessive adjectives (my, his, her, our, their) and possessive \'s',
    'State family members\' jobs and origins recycling Lessons 1 & 2',
    'Ask Daniel about his family members and their occupations',
  ],
  canDoStatements: [
    'Can describe family members and basic relationships (CEFR A1)',
    'Can use possessive \'s and possessive adjectives accurately',
    'Can ask and answer simple questions about relatives\' jobs and locations',
  ],
  characters: [
    {
      id: 'char_daniel',
      name: 'Daniel',
      role: 'Classmate & Study Partner',
      avatar: '👨‍🎓',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'brother',
        ipa: '/ˈbrʌðər/',
        partOfSpeech: 'noun',
        meaning: 'A male sibling with the same parents',
        exampleSentence: 'This is my older brother.',
        translations: { hi: 'भाई' },
      },
      {
        word: 'sister',
        ipa: '/ˈsɪstər/',
        partOfSpeech: 'noun',
        meaning: 'A female sibling with the same parents',
        exampleSentence: 'My sister is a doctor.',
        translations: { hi: 'बहन' },
      },
      {
        word: 'parents',
        ipa: '/ˈpeərənts/',
        partOfSpeech: 'noun',
        meaning: 'A person’s father and mother',
        exampleSentence: 'My parents live in Madrid.',
        translations: { hi: 'माता-पिता' },
      },
      {
        word: 'family',
        ipa: '/ˈfæməli/',
        partOfSpeech: 'noun',
        meaning: 'A group of people related by blood or marriage',
        exampleSentence: 'I have a large family.',
        translations: { hi: 'परिवार' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'This is my...',
        functionCategory: 'Introduction of Relatives',
        exampleSentence: 'This is my sister, Anya.',
      },
      {
        phrase: 'How many brothers and sisters do you have?',
        functionCategory: 'Inquiring Family Size',
        exampleSentence: 'How many brothers and sisters do you have, Daniel?',
      },
      {
        phrase: 'What is his/her name?',
        functionCategory: 'Asking Names',
        exampleSentence: 'What is your brother’s name?',
      },
      {
        phrase: 'My father is a...',
        functionCategory: 'Stating Relative Occupation',
        exampleSentence: 'My father is an engineer.',
      },
    ],
    grammar: {
      title: 'Possessive Adjectives (my / his / her) & Possessive \'s',
      conceptExplanation:
        'Use "my" for yourself, "his" for a man, and "her" for a woman. Use [Person]\'s to indicate belonging or relationship (e.g., "my father\'s car", "David\'s sister").',
      patternFormula: 'This is my [Relative] | His/Her name is [Name] | [Name]\'s [Relative]',
      contrastExamples: [
        {
          incorrect: 'This is my sister. His name is Maya.',
          correct: 'This is my sister. Her name is Maya.',
          explanation: 'Use "her" for female relatives and "his" for male relatives.',
        },
        {
          incorrect: 'My brother name is Amit.',
          correct: 'My brother\'s name is Amit.',
          explanation: 'Add possessive "\'s" to "brother" to indicate relationship to the name.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Daniel',
        text: 'Who is this in your photo? Is that your brother?',
        translation: 'आपकी इस फ़ोटो में कौन है? क्या वह आपका भाई है?',
      },
      {
        speaker: 'You',
        text: 'Yes, this is my brother. His name is Rohan, and he is a doctor.',
        translation: 'हाँ, यह मेरा भाई है। उसका नाम रोहन है, और वह एक डॉक्टर है।',
      },
      {
        speaker: 'Daniel',
        text: 'Nice! And who is the girl sitting next to him?',
        translation: 'बढ़िया! और उनके बगल में बैठी लड़की कौन है?',
      },
      {
        speaker: 'You',
        text: 'That is my sister, Ananya. She is a university student.',
        translation: 'वह मेरी बहन अनन्या है। वह एक विश्वविद्यालय की छात्रा है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_3_1',
      type: 'multiple_choice',
      prompt: 'Select the correct possessive: "This is Maria. ___ brother is a teacher."',
      options: [
        { id: 'opt_1', text: 'Her', isCorrect: true },
        { id: 'opt_2', text: 'His', isCorrect: false },
        { id: 'opt_3', text: 'Their', isCorrect: false },
      ],
      correctAnswer: 'Her',
      explanation: 'Use "Her" when referring to a female subject like Maria.',
    },
    {
      id: 'cp_a1_3_2',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "My ___ name is Carlos."',
      options: [
        { id: 'opt_1', text: "father's", isCorrect: true },
        { id: 'opt_2', text: 'father', isCorrect: false },
        { id: 'opt_3', text: 'fathers', isCorrect: false },
      ],
      correctAnswer: "father's",
      explanation: 'Use possessive "\'s" to show the relationship (father\'s name).',
    },
    {
      id: 'cp_a1_3_3',
      type: 'multiple_choice',
      prompt: 'How do you ask someone how many siblings they have?',
      options: [
        { id: 'opt_1', text: 'How many brothers and sisters do you have?', isCorrect: true },
        { id: 'opt_2', text: 'How much siblings are you having?', isCorrect: false },
        { id: 'opt_3', text: 'Who many brother sister is in family?', isCorrect: false },
      ],
      correctAnswer: 'How many brothers and sisters do you have?',
      explanation: '"How many [Plural Noun] do you have?" is the standard question structure.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_3_1',
      scenarioContext: 'Introduce your sister and her profession.',
      prompt: 'Build: "This is my sister and her name is Maya."',
      targetStructure: 'Demonstrative + BE + relative + possessive clause',
      wordBank: ['This', 'is', 'my', 'sister', 'and', 'her', 'name', 'is', 'Maya', 'his', 'brother', 'are'],
      acceptableSolutions: [
        'This is my sister and her name is Maya',
        'This is my sister and her name is Maya.',
        'This is my sister, her name is Maya.',
      ],
      explanation: 'Accurately pairs "sister" with the feminine possessive adjective "her".',
    },
    {
      id: 'sc_a1_3_2',
      scenarioContext: 'State your brother\'s occupation and workplace.',
      prompt: 'Build: "My brother is a doctor in a hospital."',
      targetStructure: 'Possessive noun phrase + BE + article + profession + prepositional workplace',
      wordBank: ['My', 'brother', 'is', 'a', 'doctor', 'in', 'a', 'hospital', 'an', 'her', 'work'],
      acceptableSolutions: [
        'My brother is a doctor in a hospital',
        'My brother is a doctor in a hospital.',
        'My brother works as a doctor in a hospital.',
      ],
      explanation: 'Combines family vocabulary with Lesson 2 occupation and workplace rules.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_3_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! Is that a photo of your family on your phone? Who is the man in the center?',
      partnerAudioText: 'Hey! Is that a photo of your family on your phone? Who is the man in the center?',
      partnerQuestionHindi: 'अरे! क्या वह आपके फ़ोन में आपके परिवार की तस्वीर है? बीच में वह आदमी कौन है?',
      expectedFunction: 'Identify Family Member & Name',
      contextGoal: 'Explain that the person is your father or brother and state his name using possessive \'s or "his name is".',
      targetVocabulary: ['father', 'brother', 'his', 'name', 'is'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'This is my father. His name is David, and he is an engineer.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'That is my older brother. His name is Rohan.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'That is my dad! He is a teacher.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Family Member Identification',
          patterns: ['my father', 'my dad', 'my brother', 'my brother is', 'father is', 'this is my'],
          required: true,
        },
        {
          name: 'Name or Attribute',
          patterns: ['his name', 'name is', 'he is a', 'he is an', 'david', 'rohan', 'john', 'alex'],
          required: false,
        },
      ],
      commonMistakeRules: [
        {
          id: 'gender_possessive_error_male',
          pattern: /\bmy father her name\b|\bmy brother her name\b/i,
          errorType: 'grammar',
          message: 'Use "his name" for male relatives (father/brother), not "her name".',
          correctionPattern: 'His name is...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_3_1',
        type: 'multiple_choice',
        prompt: 'Choose the correct possessive pronoun: "This is my brother. ___ name is Leo."',
        options: [
          { id: 'opt_1', text: 'His', isCorrect: true },
          { id: 'opt_2', text: 'Her', isCorrect: false },
          { id: 'opt_3', text: 'Its', isCorrect: false },
        ],
        correctAnswer: 'His',
        explanation: 'Use "His" for male subjects.',
      },
    },
    {
      id: 'turn_a1_3_2',
      turnIndex: 2,
      partnerPrompt:
        'He looks very kind! How many brothers and sisters do you have in total, and do they live with your parents?',
      partnerAudioText: 'He looks very kind! How many brothers and sisters do you have in total, and do they live with your parents?',
      partnerQuestionHindi: 'वह बहुत दयालु लगते हैं! आपके कुल कितने भाई-बहन हैं, और क्या वे आपके माता-पिता के साथ रहते हैं?',
      expectedFunction: 'Describe Siblings & Residence',
      contextGoal: 'State how many siblings you have and where they live, then ask Daniel about his family.',
      targetVocabulary: ['have', 'brother', 'sister', 'parents', 'live', 'you'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I have one brother and one sister. They live with my parents. What about your family?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I have two sisters, and we all live in Delhi. Do you have any siblings, Daniel?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I am an only child! How many siblings do you have?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Sibling Count / Family Size',
          patterns: ['i have one', 'i have two', 'i have three', 'one brother', 'one sister', 'two brothers', 'only child', 'no brothers'],
          required: true,
        },
        {
          name: 'Reciprocal Question',
          patterns: ['what about you', 'and you', 'what about your family', 'do you have', 'how many siblings do you have'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'have_has_error',
          pattern: /\bi has one\b|\bi has two\b/i,
          errorType: 'grammar',
          message: 'Say "I have", not "I has". Use "has" only with he/she/it.',
          correctionPattern: 'I have [Number] brothers / sisters.',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_3_2',
        type: 'fill_blank',
        prompt: 'Choose the correct verb form: "I ___ two older brothers."',
        options: [
          { id: 'opt_1', text: 'have', isCorrect: true },
          { id: 'opt_2', text: 'has', isCorrect: false },
          { id: 'opt_3', text: 'am have', isCorrect: false },
        ],
        correctAnswer: 'have',
        explanation: 'Subject "I" takes "have".',
      },
    },
    {
      id: 'turn_a1_3_3',
      turnIndex: 3,
      partnerPrompt:
        'I have one younger sister named Emma! Well, class is about to start in two minutes. Thanks for showing me your family photo!',
      partnerAudioText: 'I have one younger sister named Emma! Well, class is about to start in two minutes. Thanks for showing me your family photo!',
      partnerQuestionHindi: 'मेरी एम्मा नाम की एक छोटी बहन है! खैर, दो मिनट में क्लास शुरू होने वाली है। मुझे अपने परिवार की फ़ोटो दिखाने के लिए धन्यवाद!',
      expectedFunction: 'Classroom Farewell & Closing',
      contextGoal: 'Acknowledge Emma, thank Daniel, and prepare to enter the classroom.',
      targetVocabulary: ['welcome', 'class', 'see', 'thanks', 'bye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'You are welcome, Daniel! Let us get to class. See you inside!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Nice! Emma sounds sweet. See you in class!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Sure thing, let us go to class! Bye.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Transition',
          patterns: ['welcome', 'you are welcome', 'class', 'see you', 'let us go', 'thanks', 'bye', 'goodbye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_3_3',
        type: 'multiple_choice',
        prompt: 'How do you respond politely when someone says "Thanks for showing me!"?',
        options: [
          { id: 'opt_1', text: 'You are welcome!', isCorrect: true },
          { id: 'opt_2', text: 'You welcome is!', isCorrect: false },
          { id: 'opt_3', text: 'Make welcome!', isCorrect: false },
        ],
        correctAnswer: 'You are welcome!',
        explanation: '"You are welcome!" is the standard polite response to thanks.',
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
