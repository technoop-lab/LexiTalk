import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_10: ConversationDefinition = {
  id: 'conv_a1_10',
  title: 'Weekly Schedules & Frequency of Habits',
  cefr: 'A1',
  unitId: 'unit_a1_1',
  lessonLinks: ['lesson_a1_1_10'],
  estimatedMinutes: 5,
  scenario:
    'You are in the campus library with your classmate Nathan. You compare your weekly study and sports schedules to find a good time to study together.',
  communicativeGoals: [
    'State weekly activities on specific days using "on + [Day of the week]" (on Monday, on Friday)',
    'Express how often you do activities using frequency adverbs (always, usually, often, sometimes, rarely, never)',
    'Position adverbs of frequency correctly before main verbs and after the verb BE',
    'Recycle routines, times, and city places from Lessons 5, 7, and 8',
  ],
  canDoStatements: [
    'Can talk about weekly schedules using days of the week and "on" (CEFR A1)',
    'Can describe frequency of routine habits using adverbs of frequency',
    'Can ask and answer questions about how often someone studies or exercises',
  ],
  characters: [
    {
      id: 'char_nathan',
      name: 'Nathan',
      role: 'Study Partner & Engineering Student',
      avatar: '📚',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'always',
        ipa: '/ˈɔːlweɪz/',
        partOfSpeech: 'adverb',
        meaning: 'At all times; on all occasions (100% frequency)',
        exampleSentence: 'I always review my notes on Sunday evening.',
        translations: { hi: 'हमेशा' },
      },
      {
        word: 'usually',
        ipa: '/ˈjuːʒuəli/',
        partOfSpeech: 'adverb',
        meaning: 'Under normal conditions; generally (around 80% frequency)',
        exampleSentence: 'We usually meet in the library on Tuesday.',
        translations: { hi: 'आमतौर पर' },
      },
      {
        word: 'sometimes',
        ipa: '/ˈsʌmtaɪmz/',
        partOfSpeech: 'adverb',
        meaning: 'At times; now and then (around 50% frequency)',
        exampleSentence: 'I sometimes study at a quiet café.',
        translations: { hi: 'कभी-कभी' },
      },
      {
        word: 'never',
        ipa: '/ˈnevər/',
        partOfSpeech: 'adverb',
        meaning: 'At no time in the past or future (0% frequency)',
        exampleSentence: 'I never skip breakfast before an exam.',
        translations: { hi: 'कभी नहीं' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'On Mondays / Fridays, I...',
        functionCategory: 'Stating Day Habit',
        exampleSentence: 'On Fridays, I finish classes at noon.',
      },
      {
        phrase: 'I usually study at...',
        functionCategory: 'Expressing Habitual Location',
        exampleSentence: 'I usually study in the campus library.',
      },
      {
        phrase: 'How often do you...?',
        functionCategory: 'Inquiring Frequency',
        exampleSentence: 'How often do you go to the gym, Nathan?',
      },
      {
        phrase: 'At the weekend, I always...',
        functionCategory: 'Stating Weekend Activity',
        exampleSentence: 'At the weekend, I usually relax with family.',
      },
    ],
    grammar: {
      title: 'Syntactic Placement of Frequency Adverbs & Days of the Week',
      conceptExplanation:
        'Place frequency adverbs BEFORE normal action verbs (e.g., "I often study", "He never eats meat"), but AFTER the verb to be ("I am always on time"). Always use "on" for days of the week ("on Monday").',
      patternFormula: 'Subject + [Adverb] + [Main Verb] | Subject + [am/is/are] + [Adverb]',
      contrastExamples: [
        {
          incorrect: 'I study usually at home.',
          correct: 'I usually study at home.',
          explanation: 'Frequency adverbs go between the subject and the main verb.',
        },
        {
          incorrect: 'We meet in Monday.',
          correct: 'We meet on Monday.',
          explanation: 'Days of the week always take the preposition "on".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Nathan',
        text: 'Hey! We need to schedule our project study sessions. When are you free during the week?',
        translation: 'अरे! हमें अपने प्रोजेक्ट स्टडी सेशन का समय तय करना है। आप सप्ताह के दौरान कब खाली हैं?',
      },
      {
        speaker: 'You',
        text: 'On Tuesdays and Thursdays, I usually finish classes early at 2 pm.',
        translation: 'मंगलवार और गुरुवार को, मैं आमतौर पर दोपहर 2 बजे जल्दी कक्षाएं समाप्त कर लेता हूँ।',
      },
      {
        speaker: 'Nathan',
        text: 'Perfect! How often do you study in this library on weekdays?',
        translation: 'शानदार! आप कार्यदिवसों में इस लाइब्रेरी में कितनी बार पढ़ाई करते हैं?',
      },
      {
        speaker: 'You',
        text: 'I always study here on Tuesday afternoon. I never study on Friday evening.',
        translation: 'मैं मंगलवार की दोपहर को हमेशा यहाँ पढ़ता हूँ। मैं शुक्रवार की शाम को कभी नहीं पढ़ता।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_10_1',
      type: 'multiple_choice',
      prompt: 'Select the correct sentence with proper adverb placement:',
      options: [
        { id: 'opt_1', text: 'I always wake up early on weekdays.', isCorrect: true },
        { id: 'opt_2', text: 'I wake up always early on weekdays.', isCorrect: false },
        { id: 'opt_3', text: 'Always I wake up early on weekdays.', isCorrect: false },
      ],
      correctAnswer: 'I always wake up early on weekdays.',
      explanation: 'Adverbs of frequency sit before main action verbs (always wake up).',
    },
    {
      id: 'cp_a1_10_2',
      type: 'fill_blank',
      prompt: 'Complete the time phrase: "We have our engineering workshop ___ Wednesday afternoon."',
      options: [
        { id: 'opt_1', text: 'on', isCorrect: true },
        { id: 'opt_2', text: 'at', isCorrect: false },
        { id: 'opt_3', text: 'in', isCorrect: false },
      ],
      correctAnswer: 'on',
      explanation: 'Days of the week take preposition "on".',
    },
    {
      id: 'cp_a1_10_3',
      type: 'multiple_choice',
      prompt: 'How do you ask about how frequently someone studies?',
      options: [
        { id: 'opt_1', text: 'How often do you study at the library?', isCorrect: true },
        { id: 'opt_2', text: 'How much time do you study frequency?', isCorrect: false },
        { id: 'opt_3', text: 'What frequency are you study?', isCorrect: false },
      ],
      correctAnswer: 'How often do you study at the library?',
      explanation: '"How often do you [verb]?" is the standard frequency question.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_10_1',
      scenarioContext: 'State your weekly study habit with a frequency adverb.',
      prompt: 'Build: "I usually study in the library on Tuesdays."',
      targetStructure: 'Subject + frequency adverb + main verb + location prepositional phrase + day phrase',
      wordBank: ['I', 'usually', 'study', 'in', 'the', 'library', 'on', 'Tuesdays', 'am', 'study', 'usually', 'at'],
      acceptableSolutions: [
        'I usually study in the library on Tuesdays',
        'I usually study in the library on Tuesdays.',
        'On Tuesdays I usually study in the library.',
      ],
      explanation: 'Places "usually" before "study" and "on" before "Tuesdays".',
    },
    {
      id: 'sc_a1_10_2',
      scenarioContext: 'State what you never do on weekends.',
      prompt: 'Build: "I never wake up early on Sunday."',
      targetStructure: 'Subject + negative frequency adverb + verb phrase + day phrase',
      wordBank: ['I', 'never', 'wake', 'up', 'early', 'on', 'Sunday', 'always', 'at', 'is'],
      acceptableSolutions: [
        'I never wake up early on Sunday',
        'I never wake up early on Sunday.',
        'On Sunday I never wake up early.',
      ],
      explanation: 'Correct placement of "never" before the phrasal verb "wake up".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_10_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi! We have a big group project due next week. Which days are you usually free on campus?',
      partnerAudioText: 'Hi! We have a big group project due next week. Which days are you usually free on campus?',
      partnerQuestionHindi: 'नमस्ते! हमारा एक बड़ा ग्रुप प्रोजेक्ट अगले सप्ताह जमा होना है। आप कैंपस में आमतौर पर किन दिनों में खाली होते हैं?',
      expectedFunction: 'State Available Days & Frequency',
      contextGoal: 'State 1 or 2 days of the week you are free (e.g., on Tuesday and Thursday) using frequency words like "usually".',
      targetVocabulary: ['usually', 'free', 'on', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I am usually free on Tuesday and Thursday afternoons after 2 pm.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'On Wednesdays, I always finish classes at 1 o’clock.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I am often free on Monday and Thursday.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Days & Frequency',
          patterns: [
            'on monday',
            'on tuesday',
            'on wednesday',
            'on thursday',
            'on friday',
            'usually free',
            'always free',
            'free on',
            'afternoon',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'preposition_days',
          pattern: /\bin monday\b|\bat monday\b|\bin tuesday\b/i,
          errorType: 'grammar',
          message: 'Use "on" with days of the week (e.g. "on Monday", "on Tuesday").',
          correctionPattern: 'on [Day]',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_10_1',
        type: 'fill_blank',
        prompt: 'Choose the correct preposition: "I am free ___ Thursday afternoon."',
        options: [
          { id: 'opt_1', text: 'on', isCorrect: true },
          { id: 'opt_2', text: 'in', isCorrect: false },
          { id: 'opt_3', text: 'at', isCorrect: false },
        ],
        correctAnswer: 'on',
        explanation: 'Days of the week require "on".',
      },
    },
    {
      id: 'turn_a1_10_2',
      turnIndex: 2,
      partnerPrompt:
        'Tuesday afternoon sounds perfect! How often do you study in this library, and do you prefer the quiet zone on the second floor?',
      partnerAudioText: 'Tuesday afternoon sounds perfect! How often do you study in this library, and do you prefer the quiet zone on the second floor?',
      partnerQuestionHindi: 'मंगलवार की दोपहर एकदम सही है! आप इस लाइब्रेरी में कितनी बार पढ़ाई करते हैं, और क्या आप दूसरी मंजिल के शांत क्षेत्र को पसंद करते हैं?',
      expectedFunction: 'Describe Study Frequency & Preference',
      contextGoal: 'Explain how often you study here (e.g. "I always/often study here") and confirm the second floor.',
      targetVocabulary: ['always', 'often', 'sometimes', 'study', 'here', 'library', 'second', 'floor'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I often study in this library, and I always prefer the second floor quiet zone.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I usually come here three times a week. The second floor is great!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I sometimes study upstairs. It is very quiet.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Frequency & Confirmation',
          patterns: ['often study', 'always study', 'usually study', 'sometimes study', 'second floor', 'quiet', 'prefer'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'adverb_position_after_verb',
          pattern: /\bi study always\b|\bi study often\b/i,
          errorType: 'grammar',
          message: 'Place frequency adverbs before the main verb: "I always study", "I often study".',
          correctionPattern: 'I [always/often] study...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_10_2',
        type: 'multiple_choice',
        prompt: 'Which word order is correct?',
        options: [
          { id: 'opt_1', text: 'I always study on the second floor.', isCorrect: true },
          { id: 'opt_2', text: 'I study always on the second floor.', isCorrect: false },
          { id: 'opt_3', text: 'Always I study on the second floor.', isCorrect: false },
        ],
        correctAnswer: 'I always study on the second floor.',
        explanation: 'The frequency adverb sits directly before the main verb "study".',
      },
    },
    {
      id: 'turn_a1_10_3',
      turnIndex: 3,
      partnerPrompt:
        'Great! Let us book a study room on the second floor for this Tuesday at 2:30 pm. See you then!',
      partnerAudioText: 'Great! Let us book a study room on the second floor for this Tuesday at 2:30 pm. See you then!',
      partnerQuestionHindi: 'बढ़िया! आइए इस मंगलवार दोपहर 2:30 बजे के लिए दूसरी मंजिल पर एक स्टडी रूम बुक कर लेते हैं। तब मिलते हैं!',
      expectedFunction: 'Confirmation & Closing',
      contextGoal: 'Confirm the meeting time (Tuesday at 2:30 pm) and say goodbye.',
      targetVocabulary: ['see', 'Tuesday', 'time', 'goodbye', 'thanks'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Confirmed! See you on Tuesday at 2:30 pm, Nathan. Have a great day!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Sounds awesome! See you Tuesday at 2:30.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'See you then! Bye.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Confirmation & Closing',
          patterns: ['see you on tuesday', 'see you tuesday', '2:30', 'confirmed', 'sounds awesome', 'see you then', 'bye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_10_3',
        type: 'multiple_choice',
        prompt: 'How do you confirm an agreed meeting appointment?',
        options: [
          { id: 'opt_1', text: 'See you on Tuesday at 2:30 pm!', isCorrect: true },
          { id: 'opt_2', text: 'I meet you is at Tuesday.', isCorrect: false },
          { id: 'opt_3', text: 'Tuesday 2:30 make see.', isCorrect: false },
        ],
        correctAnswer: 'See you on Tuesday at 2:30 pm!',
        explanation: 'Clear confirmation of agreed time.',
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
