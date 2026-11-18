import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_12: ConversationDefinition = {
  id: 'conv_a1_12',
  title: 'Club Orientation: Asking & Answering Questions (Do / Does)',
  cefr: 'A1',
  unitId: 'unit_a1_1',
  lessonLinks: ['lesson_a1_1_12'],
  estimatedMinutes: 5,
  scenario:
    'You are attending an orientation meeting for the university international club. A member named Oliver pairs up with you to practice asking and answering questions about hobbies, languages, and daily life.',
  communicativeGoals: [
    'Form Yes/No questions using "Do you...?" and "Does your friend...?"',
    'Provide natural short answers ("Yes, I do", "No, I don\'t", "Yes, he does")',
    'Form WH- information questions using What, Where, When, and How often',
    'Recycle vocabulary from Lessons 1–11 (languages, jobs, schedules, hobbies)',
  ],
  canDoStatements: [
    'Can ask and answer Yes/No and WH- questions in Present Simple (CEFR A1)',
    'Can provide accurate short answers with auxiliaries do/does',
    'Can maintain a reciprocal Q&A dialogue with a conversation partner',
  ],
  characters: [
    {
      id: 'char_oliver',
      name: 'Oliver',
      role: 'International Club Coordinator',
      avatar: '🌐',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'speak',
        ipa: '/spiːk/',
        partOfSpeech: 'verb',
        meaning: 'To express thoughts or communicate in a spoken language',
        exampleSentence: 'Do you speak Spanish or French?',
        translations: { hi: 'बोलना' },
      },
      {
        word: 'play',
        ipa: '/pleɪ/',
        partOfSpeech: 'verb',
        meaning: 'To engage in sport or a game',
        exampleSentence: 'Do you play tennis at the weekend?',
        translations: { hi: 'खेलना' },
      },
      {
        word: 'often',
        ipa: '/ˈɒfn/',
        partOfSpeech: 'adverb',
        meaning: 'Frequently; many times',
        exampleSentence: 'How often do you travel abroad?',
        translations: { hi: 'अक्सर' },
      },
      {
        word: 'club',
        ipa: '/klʌb/',
        partOfSpeech: 'noun',
        meaning: 'An association of people dedicated to a particular interest or activity',
        exampleSentence: 'Welcome to our international club!',
        translations: { hi: 'क्लब / समूह' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Do you speak / play / like...?',
        functionCategory: 'Yes/No Activity Inquiry',
        exampleSentence: 'Do you play badminton on weekends?',
      },
      {
        phrase: 'Yes, I do. / No, I don’t.',
        functionCategory: 'Standard Short Answers',
        exampleSentence: 'Yes, I do! I love sports.',
      },
      {
        phrase: 'Where do you live / study?',
        functionCategory: 'WH- Location Inquiry',
        exampleSentence: 'Where do you study computer science?',
      },
      {
        phrase: 'How often do you come here?',
        functionCategory: 'WH- Frequency Inquiry',
        exampleSentence: 'How often do you visit this community center?',
      },
    ],
    grammar: {
      title: 'Present Simple Questions: Auxiliary Do / Does & Short Answers',
      conceptExplanation:
        'Start Yes/No questions with "Do" (for I/you/we/they) or "Does" (for he/she/it). In WH- questions, put the WH-word first: [WH-Word] + do/does + [Subject] + [Base Verb]. Short answers use the auxiliary ("Yes, I do", NOT "Yes, I like").',
      patternFormula: 'Do/Does + [Subject] + [Base Verb]...? | WH + do/does + [Subject] + [Base Verb]...?',
      contrastExamples: [
        {
          incorrect: 'You speak Spanish? (in formal writing/standard speech)',
          correct: 'Do you speak Spanish?',
          explanation: 'Standard English questions require the auxiliary verb "Do".',
        },
        {
          incorrect: 'Yes, I play.',
          correct: 'Yes, I do.',
          explanation: 'Standard short answers use the auxiliary verb "do/does", not the action verb.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Oliver',
        text: 'Hi there! Welcome to the club! Do you speak more than one language?',
        translation: 'नमस्ते! क्लब में आपका स्वागत है! क्या आप एक से अधिक भाषाएँ बोलते हैं?',
      },
      {
        speaker: 'You',
        text: 'Yes, I do! I speak Hindi and English. Do you speak another language, Oliver?',
        translation: 'हाँ, मैं बोलता हूँ! मैं हिंदी और अंग्रेजी बोलता हूँ। क्या आप कोई अन्य भाषा बोलते हैं, ओलिवर?',
      },
      {
        speaker: 'Oliver',
        text: 'I speak English and a little French! And where do you usually spend your weekends?',
        translation: 'मैं अंग्रेजी और थोड़ी फ्रेंच बोलता हूँ! और आप आमतौर पर अपने वीकेंड कहाँ बिताते हैं?',
      },
      {
        speaker: 'You',
        text: 'I usually play soccer with friends in the city park.',
        translation: 'मैं आमतौर पर शहर के पार्क में दोस्तों के साथ फ़ुटबॉल खेलता हूँ।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_12_1',
      type: 'multiple_choice',
      prompt: 'Select the grammatically correct question:',
      options: [
        { id: 'opt_1', text: 'Do you play tennis on Sundays?', isCorrect: true },
        { id: 'opt_2', text: 'Are you play tennis on Sundays?', isCorrect: false },
        { id: 'opt_3', text: 'Does you play tennis on Sundays?', isCorrect: false },
      ],
      correctAnswer: 'Do you play tennis on Sundays?',
      explanation: 'Subject "you" takes auxiliary "Do".',
    },
    {
      id: 'cp_a1_12_2',
      type: 'fill_blank',
      prompt: 'Complete the short answer: "Do you live near campus? — Yes, I ___."',
      options: [
        { id: 'opt_1', text: 'do', isCorrect: true },
        { id: 'opt_2', text: 'live', isCorrect: false },
        { id: 'opt_3', text: 'am', isCorrect: false },
      ],
      correctAnswer: 'do',
      explanation: 'Standard short answer to "Do you...?" is "Yes, I do".',
    },
    {
      id: 'cp_a1_12_3',
      type: 'multiple_choice',
      prompt: 'Which auxiliary is used with third-person singular questions?',
      options: [
        { id: 'opt_1', text: 'Does your sister work in a hospital?', isCorrect: true },
        { id: 'opt_2', text: 'Do your sister work in a hospital?', isCorrect: false },
        { id: 'opt_3', text: 'Is your sister work in a hospital?', isCorrect: false },
      ],
      correctAnswer: 'Does your sister work in a hospital?',
      explanation: 'Singular subject "your sister" takes "Does".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_12_1',
      scenarioContext: 'Form a polite Yes/No question with Do.',
      prompt: 'Build: "Do you play football at the weekend?"',
      targetStructure: 'Auxiliary do + subject + verb + object + time phrase',
      wordBank: ['Do', 'you', 'play', 'football', 'at', 'the', 'weekend', 'are', 'does', 'is'],
      acceptableSolutions: [
        'Do you play football at the weekend',
        'Do you play football at the weekend?',
        'Do you play soccer at the weekend?',
      ],
      explanation: 'Accurate question formation using auxiliary "Do".',
    },
    {
      id: 'sc_a1_12_2',
      scenarioContext: 'Give a natural short answer and detail.',
      prompt: 'Build: "Yes, I do, and I love sports."',
      targetStructure: 'Affirmative + pronoun + auxiliary + conjunction + subject + verb + noun',
      wordBank: ['Yes', 'I', 'do', 'and', 'I', 'love', 'sports', 'am', 'play', 'does'],
      acceptableSolutions: [
        'Yes I do and I love sports',
        'Yes, I do, and I love sports.',
        'Yes, I do and I like sports.',
      ],
      explanation: 'Combines short answer "Yes, I do" with an affirmative elaboration.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_12_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi! Welcome to the international club! To get to know everyone, let me ask: Do you play any sports or musical instruments?',
      partnerAudioText: 'Hi! Welcome to the international club! To get to know everyone, let me ask: Do you play any sports or musical instruments?',
      partnerQuestionHindi: 'नमस्ते! इंटरनेशनल क्लब में आपका स्वागत है! सभी को जानने के लिए, मैं पूछता हूँ: क्या आप कोई खेल खेलते हैं या वाद्य यंत्र बजाते हैं?',
      expectedFunction: 'Short Answer & Elaboration',
      contextGoal: 'Answer with "Yes, I do" or "No, I don\'t" and state what sport or instrument you play.',
      targetVocabulary: ['do', 'don\'t', 'play', 'football', 'cricket', 'guitar', 'piano', 'sports'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes, I do! I play badminton and football every weekend.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Yes, I do. I play the guitar in my free time.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'No, I don’t play sports, but I like reading!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Short Answer & Activity',
          patterns: [
            'yes i do',
            'no i don’t',
            "no i don't",
            'i play',
            'play badminton',
            'play football',
            'play guitar',
            'play cricket',
            'play tennis',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'yes_i_am_to_do',
          pattern: /\byes i am\b/i,
          errorType: 'grammar',
          message: 'When asked "Do you...?", answer "Yes, I do", not "Yes, I am".',
          correctionPattern: 'Yes, I do.',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_12_1',
        type: 'multiple_choice',
        prompt: 'How do you answer: "Do you play tennis?"',
        options: [
          { id: 'opt_1', text: 'Yes, I do.', isCorrect: true },
          { id: 'opt_2', text: 'Yes, I am.', isCorrect: false },
          { id: 'opt_3', text: 'Yes, I play.', isCorrect: false },
        ],
        correctAnswer: 'Yes, I do.',
        explanation: '"Yes, I do." matches the auxiliary in "Do you...?"',
      },
    },
    {
      id: 'turn_a1_12_2',
      turnIndex: 2,
      partnerPrompt:
        'That is awesome! And where do you usually go on Saturday afternoons with your friends?',
      partnerAudioText: 'That is awesome! And where do you usually go on Saturday afternoons with your friends?',
      partnerQuestionHindi: 'यह तो बहुत बढ़िया है! और आप आमतौर पर शनिवार की दोपहर को अपने दोस्तों के साथ कहाँ जाते हैं?',
      expectedFunction: 'Answer WH- Where Question & Reciprocal Ask',
      contextGoal: 'Explain where you go on Saturdays (e.g. park, café, library) and ask Oliver what he does.',
      targetVocabulary: ['go', 'to', 'park', 'café', 'library', 'on', 'Saturday', 'what', 'do', 'you'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'We usually go to the central park or a café. Where do you go on Saturdays, Oliver?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I go to the library in the morning and a restaurant at night. What about you?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'We hang out at the mall. Where do you usually go?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Location Statement & Reciprocal Question',
          patterns: ['go to the park', 'go to a cafe', 'go to the library', 'go to the mall', 'park', 'cafe', 'where do you go', 'what about you'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_12_2',
        type: 'fill_blank',
        prompt: 'Complete the reciprocal question: "Where ___ you go on weekends?"',
        options: [
          { id: 'opt_1', text: 'do', isCorrect: true },
          { id: 'opt_2', text: 'are', isCorrect: false },
          { id: 'opt_3', text: 'does', isCorrect: false },
        ],
        correctAnswer: 'do',
        explanation: 'Auxiliary "do" goes with subject "you".',
      },
    },
    {
      id: 'turn_a1_12_3',
      turnIndex: 3,
      partnerPrompt:
        'I usually cycle along the river! Thanks for practicing with me. You will love our club events. See you at the main meetup on Friday!',
      partnerAudioText: 'I usually cycle along the river! Thanks for practicing with me. You will love our club events. See you at the main meetup on Friday!',
      partnerQuestionHindi: 'मैं आमतौर पर नदी के किनारे साइकिल चलाता हूँ! मेरे साथ अभ्यास करने के लिए धन्यवाद। आपको हमारे क्लब के कार्यक्रम बहुत पसंद आएंगे। शुक्रवार को मुख्य मीटअप में मिलते हैं!',
      expectedFunction: 'Polite Farewell & Meetup Confirmation',
      contextGoal: 'Confirm attendance for Friday, thank Oliver, and say goodbye.',
      targetVocabulary: ['see', 'Friday', 'thank', 'meetup', 'goodbye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you Oliver! I look forward to Friday. See you at the meetup, goodbye!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thanks a lot! See you on Friday, bye.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Sounds great Oliver! See you Friday.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Meetup Acknowledgment',
          patterns: ['see you on friday', 'see you friday', 'thank you', 'thanks', 'goodbye', 'meetup', 'bye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_12_3',
        type: 'multiple_choice',
        prompt: 'Which response confirms attendance for Friday?',
        options: [
          { id: 'opt_1', text: 'See you on Friday at the meetup!', isCorrect: true },
          { id: 'opt_2', text: 'Friday is see you me.', isCorrect: false },
          { id: 'opt_3', text: 'Make Friday meet.', isCorrect: false },
        ],
        correctAnswer: 'See you on Friday at the meetup!',
        explanation: 'Standard polite confirmation.',
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
