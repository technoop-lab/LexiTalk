import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_2: ConversationDefinition = {
  id: 'conv_a1_2',
  title: 'Networking & Talking About Your Job',
  cefr: 'A1',
  unitId: 'unit_a1_1',
  lessonLinks: ['lesson_a1_1_2'],
  estimatedMinutes: 5,
  scenario:
    'You are attending a community welcoming reception. A friendly professional named Maya starts chatting with you about your job and daily work.',
  communicativeGoals: [
    'State your occupation accurately using indefinite articles (a / an)',
    'Describe your workplace using prepositions (at a company / in a hospital / at school)',
    'Ask Maya what she does for work using "What do you do?"',
    'Recycle greetings, name presentation, and origins from Lesson 1',
  ],
  canDoStatements: [
    'Can state occupation using "I am a/an..." (CEFR A1)',
    'Can ask what someone does using "What do you do?"',
    'Can specify workplace with "I work at..." or "I work in..."',
  ],
  characters: [
    {
      id: 'char_maya',
      name: 'Maya',
      role: 'Community Organizer & Graphic Designer',
      avatar: '👩‍💻',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'engineer',
        ipa: '/ˌendʒɪˈnɪər/',
        partOfSpeech: 'noun',
        meaning: 'A person who designs or builds machines, software, or systems',
        exampleSentence: 'I am an engineer.',
        translations: { hi: 'इंजीनियर' },
      },
      {
        word: 'teacher',
        ipa: '/ˈtiːtʃər/',
        partOfSpeech: 'noun',
        meaning: 'A person who helps students learn',
        exampleSentence: 'She is a teacher at a high school.',
        translations: { hi: 'अध्यापक / शिक्षक' },
      },
      {
        word: 'hospital',
        ipa: '/ˈhɒspɪtl/',
        partOfSpeech: 'noun',
        meaning: 'A medical facility where sick or injured people receive care',
        exampleSentence: 'He works in a hospital.',
        translations: { hi: 'अस्पताल' },
      },
      {
        word: 'office',
        ipa: '/ˈɒfɪs/',
        partOfSpeech: 'noun',
        meaning: 'A room or building used for professional or business work',
        exampleSentence: 'I work in an office downtown.',
        translations: { hi: 'कार्यालय / दफ़्तर' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'What do you do?',
        functionCategory: 'Asking Occupation',
        exampleSentence: 'Hi Maya, what do you do for work?',
      },
      {
        phrase: 'I am a / an...',
        functionCategory: 'Stating Profession',
        exampleSentence: 'I am a software engineer.',
      },
      {
        phrase: 'I work at...',
        functionCategory: 'Stating Workplace',
        exampleSentence: 'I work at a local school.',
      },
      {
        phrase: 'Do you enjoy your job?',
        functionCategory: 'Inquiring Interest',
        exampleSentence: 'Do you enjoy your work?',
      },
    ],
    grammar: {
      title: 'Indefinite Articles (A vs An) with Occupations',
      conceptExplanation:
        'Always use "a" before consonant sounds (a teacher, a doctor) and "an" before vowel sounds (an engineer, an artist, an architect). In English, never omit the article when stating a singular job.',
      patternFormula: 'I am a/an + [Profession] | I work at/in + [Workplace]',
      contrastExamples: [
        {
          incorrect: 'I am engineer.',
          correct: 'I am an engineer.',
          explanation: 'Singular countable professions always require "a" or "an".',
        },
        {
          incorrect: 'I am a architect.',
          correct: 'I am an architect.',
          explanation: '"Architect" begins with a vowel sound, so use "an".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Maya',
        text: 'Hi! Nice to meet you. I am Maya, a graphic designer. What do you do?',
        translation: 'नमस्ते! आपसे मिलकर अच्छा लगा। मैं माया हूँ, एक ग्राफिक डिज़ाइनर। आप क्या करते हैं?',
      },
      {
        speaker: 'You',
        text: 'Hi Maya! I am a software developer. I work at a tech company.',
        translation: 'नमस्ते माया! मैं एक सॉफ्टवेयर डेवलपर हूँ। मैं एक टेक कंपनी में काम करता हूँ।',
      },
      {
        speaker: 'Maya',
        text: 'That sounds exciting! Where is your office located?',
        translation: 'यह तो बहुत दिलचस्प है! आपका कार्यालय कहाँ स्थित है?',
      },
      {
        speaker: 'You',
        text: 'My office is in the city center, but I work from home twice a week.',
        translation: 'मेरा कार्यालय शहर के केंद्र में है, लेकिन मैं सप्ताह में दो दिन घर से काम करता हूँ।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_2_1',
      type: 'multiple_choice',
      prompt: 'Select the correct article: "David is ___ engineer."',
      options: [
        { id: 'opt_1', text: 'an', isCorrect: true },
        { id: 'opt_2', text: 'a', isCorrect: false },
        { id: 'opt_3', text: 'the', isCorrect: false },
      ],
      correctAnswer: 'an',
      explanation: 'Use "an" before words starting with vowel sounds like "engineer".',
    },
    {
      id: 'cp_a1_2_2',
      type: 'multiple_choice',
      prompt: 'How do you politely ask someone about their career?',
      options: [
        { id: 'opt_1', text: 'What do you do?', isCorrect: true },
        { id: 'opt_2', text: 'What are you doing now?', isCorrect: false },
        { id: 'opt_3', text: 'Who is your job?', isCorrect: false },
      ],
      correctAnswer: 'What do you do?',
      explanation: '"What do you do?" is the universal English idiom for asking someone\'s job.',
    },
    {
      id: 'cp_a1_2_3',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "Elena works ___ a hospital in Delhi."',
      options: [
        { id: 'opt_1', text: 'in', isCorrect: true },
        { id: 'opt_2', text: 'on', isCorrect: false },
        { id: 'opt_3', text: 'to', isCorrect: false },
      ],
      correctAnswer: 'in',
      explanation: 'Use "in" or "at" for workplaces (in a hospital, at a school).',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_2_1',
      scenarioContext: 'State your occupation with the correct article.',
      prompt: 'Build: "I am a teacher and I work at a school."',
      targetStructure: 'Subject + BE + article + Profession + workplace clause',
      wordBank: ['I', 'am', 'a', 'teacher', 'and', 'I', 'work', 'at', 'a', 'school', 'an', 'is'],
      acceptableSolutions: [
        'I am a teacher and I work at a school',
        'I am a teacher and I work at a school.',
        'I work at a school and I am a teacher.',
      ],
      explanation: 'Uses "a teacher" and "work at a school" accurately.',
    },
    {
      id: 'sc_a1_2_2',
      scenarioContext: 'Ask someone what they do for a living.',
      prompt: 'Build: "What do you do for work, Maya?"',
      targetStructure: 'WH-question + auxiliary + Subject + Verb + prepositional phrase',
      wordBank: ['What', 'do', 'you', 'do', 'for', 'work', 'Maya', 'is', 'are', 'your'],
      acceptableSolutions: [
        'What do you do for work Maya',
        'What do you do for work, Maya?',
        'What do you do, Maya?',
      ],
      explanation: 'Natural question asking about profession.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_2_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello! My name is Maya. I work as a graphic designer here in the city. What do you do?',
      partnerAudioText: 'Hello! My name is Maya. I work as a graphic designer here in the city. What do you do?',
      partnerQuestionHindi: 'नमस्ते! मेरा नाम माया है। मैं यहाँ शहर में एक ग्राफिक डिज़ाइनर के रूप में काम करती हूँ। आप क्या करते हैं?',
      expectedFunction: 'State Profession with Article',
      contextGoal: 'State your profession using "I am a..." or "I am an..." and greet Maya.',
      targetVocabulary: ['am', 'work', 'teacher', 'engineer', 'student', 'doctor'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hi Maya, nice to meet you! I am a teacher at a high school.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hello Maya! I am a software engineer at a tech company.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Hi! I am a university student studying business.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Profession with Article',
          patterns: [
            'i am a teacher',
            'i am an engineer',
            'i am a student',
            'i am a doctor',
            'i am a developer',
            'i am an accountant',
            'i am a manager',
            'i work as',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'missing_article_job',
          pattern: /\bi am engineer\b|\bi am teacher\b|\bi am student\b|\bi am doctor\b/i,
          errorType: 'grammar',
          message: 'Always include "a" or "an" before singular occupations (e.g., "I am an engineer", "I am a teacher").',
          correctionPattern: 'I am a / an [Job]',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_2_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "Alex is ___ architect."',
        options: [
          { id: 'opt_1', text: 'an', isCorrect: true },
          { id: 'opt_2', text: 'a', isCorrect: false },
          { id: 'opt_3', text: 'the', isCorrect: false },
        ],
        correctAnswer: 'an',
        explanation: 'Words starting with vowel sounds take "an".',
      },
    },
    {
      id: 'turn_a1_2_2',
      turnIndex: 2,
      partnerPrompt:
        'Oh, that is wonderful! Where do you work, and do you work in an office or from home?',
      partnerAudioText: 'Oh, that is wonderful! Where do you work, and do you work in an office or from home?',
      partnerQuestionHindi: 'अरे, यह तो बहुत बढ़िया है! आप कहाँ काम करते हैं, और क्या आप कार्यालय में काम करते हैं या घर से?',
      expectedFunction: 'Describe Workplace & Location',
      contextGoal: 'Explain where you work (e.g. office, school, hospital, or home) and ask Maya about her office.',
      targetVocabulary: ['work', 'office', 'home', 'in', 'at', 'what', 'you'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I work in an office downtown, but I also work from home. What about your office?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I work at a school near the park. Where is your studio located?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I work remotely from home full-time. Do you have an office downtown?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Workplace Description',
          patterns: ['work in an office', 'work in office', 'work from home', 'work at a', 'work at home', 'office', 'hospital', 'school', 'company'],
          required: true,
        },
        {
          name: 'Reciprocal Question',
          patterns: ['what about you', 'and you', 'where do you work', 'what about your office', 'how about you'],
          required: false,
        },
      ],
      commonMistakeRules: [
        {
          id: 'workplace_preposition',
          pattern: /\bi work on office\b|\bi work on hospital\b/i,
          errorType: 'grammar',
          message: 'Say "I work in an office" or "I work at a company", not "on office".',
          correctionPattern: 'I work in / at...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_2_2',
        type: 'multiple_choice',
        prompt: 'Which preposition is correct: "Sarah works ___ a large hospital."',
        options: [
          { id: 'opt_1', text: 'at / in', isCorrect: true },
          { id: 'opt_2', text: 'on', isCorrect: false },
          { id: 'opt_3', text: 'under', isCorrect: false },
        ],
        correctAnswer: 'at / in',
        explanation: 'Workplaces take "at" or "in".',
      },
    },
    {
      id: 'turn_a1_2_3',
      turnIndex: 3,
      partnerPrompt:
        'My studio is just two blocks away on Main Street! It was really nice talking with you about work. Have a fantastic evening!',
      partnerAudioText: 'My studio is just two blocks away on Main Street! It was really nice talking with you about work. Have a fantastic evening!',
      partnerQuestionHindi: 'मेरा स्टूडियो मेन स्ट्रीट पर सिर्फ दो ब्लॉक दूर है! काम के बारे में आपसे बात करके बहुत अच्छा लगा। आपकी शाम शानदार हो!',
      expectedFunction: 'Polite Closing',
      contextGoal: 'Express polite satisfaction, wish Maya a great evening, and say goodbye.',
      targetVocabulary: ['nice', 'evening', 'goodbye', 'thanks'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'It was great talking to you too, Maya! Have a wonderful evening, goodbye.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thanks Maya! Enjoy your evening. See you around!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Same to you, Maya! Bye for now.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Well Wishes',
          patterns: ['great talking', 'nice talking', 'have a wonderful evening', 'have a great evening', 'goodbye', 'bye', 'see you', 'thanks'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_2_3',
        type: 'multiple_choice',
        prompt: 'Which farewell is natural for an evening networking event?',
        options: [
          { id: 'opt_1', text: 'Have a great evening!', isCorrect: true },
          { id: 'opt_2', text: 'Make the evening well!', isCorrect: false },
          { id: 'opt_3', text: 'Good morning!', isCorrect: false },
        ],
        correctAnswer: 'Have a great evening!',
        explanation: '"Have a great evening!" is appropriate for evening events.',
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
