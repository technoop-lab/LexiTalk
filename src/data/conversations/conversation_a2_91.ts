import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_91: ConversationDefinition = {
  id: 'conv_a2_91',
  title: 'Daily Routines, Habits & Frequency Adverbs',
  cefr: 'A2',
  unitId: 'unit_a2_7',
  lessonLinks: ['lesson_a2_7_91'],
  estimatedMinutes: 5,
  scenario:
    'You are having a casual morning video check-in with your remote teammate Maya Patel. She wants to know how you structure your daily workday, how often you take breaks, and what your evening wind-down routine looks like. Compare routines, ask follow-up questions, and discuss work-life balance.',
  communicativeGoals: [
    'Describe your typical morning workday routine using adverbs of frequency (always, usually, often, rarely, never)',
    'Explain how often you take breaks and exercise during busy workdays',
    'Ask Maya about her daily habits and productivity schedule using natural follow-up questions',
    'Discuss evening wind-down routines and evaluate healthy work-life balance',
  ],
  canDoStatements: [
    'Can describe daily routines and habits in simple connected sentences (CEFR A2)',
    'Can use frequency adverbs correctly in front of main verbs and after "to be"',
    'Can ask follow-up questions about someone else\'s daily habits and schedule',
  ],
  characters: [
    {
      id: 'char_maya_patel',
      name: 'Maya Patel',
      role: 'Remote Teammate & Project Lead',
      avatar: '👩‍💻',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'routine',
        ipa: '/ruːˈtiːn/',
        partOfSpeech: 'noun',
        meaning: 'A sequence of actions regularly followed',
        exampleSentence: 'My morning routine helps me stay focused all day.',
        translations: { hi: 'दिनचर्या' },
      },
      {
        word: 'usually',
        ipa: '/ˈjuːʒuəli/',
        partOfSpeech: 'adverb',
        meaning: 'Under normal conditions; generally',
        exampleSentence: 'I usually drink green tea before starting work.',
        translations: { hi: 'आमतौर पर' },
      },
      {
        word: 'rarely',
        ipa: '/ˈreəli/',
        partOfSpeech: 'adverb',
        meaning: 'Not often; seldom',
        exampleSentence: 'I rarely check work emails after 8:00 PM.',
        translations: { hi: 'शायद ही कभी / कभी-कभार' },
      },
      {
        word: 'unwind',
        ipa: '/ʌnˈwaɪnd/',
        partOfSpeech: 'verb',
        meaning: 'To relax after a period of work or tension',
        exampleSentence: 'I like to read or listen to music to unwind.',
        translations: { hi: 'तनावमुक्त होना / आराम करना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I usually start my day by...',
        functionCategory: 'Describing Habits',
        exampleSentence: 'I usually start my day by checking my priority list.',
      },
      {
        phrase: 'How often do you...?',
        functionCategory: 'Asking About Frequency',
        exampleSentence: 'How often do you take a screen break during work?',
      },
      {
        phrase: 'To be honest, I rarely...',
        functionCategory: 'Expressing Low Frequency',
        exampleSentence: 'To be honest, I rarely skip my morning walk.',
      },
      {
        phrase: 'What about you?',
        functionCategory: 'Interactive Follow-up',
        exampleSentence: 'I usually wake up at 7. What about you?',
      },
    ],
    grammar: {
      title: 'Adverbs of Frequency (always, usually, often, sometimes, rarely, never)',
      conceptExplanation:
        'Place frequency adverbs BEFORE the main verb (e.g., "I usually start work at 9:00"), but AFTER the verb "to be" (e.g., "I am always on time"). With modal verbs, place the adverb between the modal and main verb (e.g., "I can never wake up early").',
      patternFormula: 'Subject + [Frequency Adverb] + Main Verb / Subject + be + [Frequency Adverb]',
      contrastExamples: [
        {
          incorrect: 'I start usually work at nine.',
          correct: 'I usually start work at nine.',
          explanation: 'Frequency adverbs come before regular action verbs.',
        },
        {
          incorrect: 'I am often rarely busy.',
          correct: 'I am rarely busy on Fridays.',
          explanation: 'Do not stack conflicting adverbs.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Maya Patel',
        text: 'Morning Alex! How does your typical weekday morning usually start?',
        translation: 'शुभ प्रभात एलेक्स! आपके सामान्य कार्यदिवस की सुबह आमतौर पर कैसे शुरू होती है?',
      },
      {
        speaker: 'You',
        text: 'Good morning Maya! I usually wake up at 7:00 AM, drink a glass of water, and do some stretching. What about you?',
        translation: 'शुभ प्रभात माया! मैं आमतौर पर सुबह 7:00 बजे उठता हूँ, एक गिलास पानी पीता हूँ, और स्ट्रेचिंग करता हूँ। आप क्या करती हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_91_1',
      type: 'multiple_choice',
      prompt: 'Where does the frequency adverb go in this sentence?',
      options: [
        { id: 'opt_1', text: 'I usually drink coffee at 8:00 AM.', isCorrect: true },
        { id: 'opt_2', text: 'I drink usually coffee at 8:00 AM.', isCorrect: false },
        { id: 'opt_3', text: 'Usually I drink at 8:00 AM coffee.', isCorrect: false },
      ],
      correctAnswer: 'I usually drink coffee at 8:00 AM.',
      explanation: 'Adverbs of frequency sit directly before the main action verb "drink".',
    },
    {
      id: 'cp_a2_91_2',
      type: 'fill_blank',
      prompt: 'Complete the follow-up question: "___ often do you take breaks during the day?"',
      options: [
        { id: 'opt_1', text: 'How', isCorrect: true },
        { id: 'opt_2', text: 'What', isCorrect: false },
        { id: 'opt_3', text: 'When', isCorrect: false },
      ],
      correctAnswer: 'How',
      explanation: 'Use "How often" to inquire about frequency of actions.',
    },
    {
      id: 'cp_a2_91_3',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes a low-frequency habit?',
      options: [
        { id: 'opt_1', text: 'I rarely eat fast food on weekdays.', isCorrect: true },
        { id: 'opt_2', text: 'I eat rarely fast food on weekdays.', isCorrect: false },
        { id: 'opt_3', text: 'I am rarely eat fast food.', isCorrect: false },
      ],
      correctAnswer: 'I rarely eat fast food on weekdays.',
      explanation: '"Rarely" goes before the base action verb "eat".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_91_1',
      scenarioContext: 'Explain your morning routine with a frequency adverb.',
      prompt: 'Build: "I always drink tea before I start working."',
      targetStructure: 'Subject + always + verb + object + time clause',
      wordBank: ['I', 'always', 'drink', 'tea', 'before', 'start', 'working', 'am', 'usually'],
      acceptableSolutions: [
        'I always drink tea before I start working',
        'I always drink tea before I start working.',
      ],
      explanation: 'Adverb "always" sits between subject "I" and action verb "drink".',
    },
    {
      id: 'sc_a2_91_2',
      scenarioContext: 'Ask your colleague about their daily break habits.',
      prompt: 'Build: "How often do you go for a walk during lunch?"',
      targetStructure: 'Question word + auxiliary + subject + verb + prepositional phrase',
      wordBank: ['How', 'often', 'do', 'you', 'go', 'for', 'a', 'walk', 'during', 'lunch', 'are'],
      acceptableSolutions: [
        'How often do you go for a walk during lunch',
        'How often do you go for a walk during lunch?',
      ],
      explanation: '"How often do you..." is the standard question structure for frequency.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_91_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning Alex! It is great to see you. We are revamping our team wellness guidelines, so I am asking everyone: What does your typical morning routine look like before you log on to work?',
      partnerAudioText:
        'Good morning Alex! It is great to see you. We are revamping our team wellness guidelines, so I am asking everyone: What does your typical morning routine look like before you log on to work?',
      partnerQuestionHindi:
        'शुभ प्रभात एलेक्स! आपसे मिलकर अच्छा लगा। हम अपनी टीम के वेलनेस दिशानिर्देशों को नया रूप दे रहे हैं, इसलिए मैं सभी से पूछ रही हूँ: काम शुरू करने से पहले आपकी सुबह की दिनचर्या कैसी होती है?',
      expectedFunction: 'Describe Morning Routine & Habits with Frequency Adverbs',
      contextGoal:
        'Describe wake-up time, breakfast, and preparation habits using adverbs like "usually", "always", or "often", and ask Maya a follow-up question.',
      targetVocabulary: ['usually wake up', 'always have breakfast', 'often drink coffee or tea', 'what about you'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Good morning Maya! I usually wake up at 7:00 AM, have a healthy breakfast, and drink tea. After that, I always review my daily task list. What about your morning routine?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Morning Maya! I usually get up around 7:30, do some quick stretching, and make coffee before opening my laptop. How does your morning start?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I always start with a morning walk and coffee before logging on around 8:30. What about you, Maya?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Morning Routine & Wakeup',
          patterns: ['wake up', 'get up', 'morning', '7:00', '7:30', '8:00', 'breakfast', 'coffee', 'tea', 'stretch'],
          required: true,
        },
        {
          name: 'Frequency Marker',
          patterns: ['usually', 'always', 'often', 'normally', 'every day'],
          required: true,
        },
        {
          name: 'Follow-up Question',
          patterns: ['what about you', 'how about you', 'what about your', 'how does your', 'and you'],
          required: false,
        },
      ],
      commonMistakeRules: [
        {
          id: 'adverb_position_rule',
          pattern: /\bi wake usually up\b|\bi get usually up\b/i,
          errorType: 'grammar',
          message: 'Place the frequency adverb before the verb (e.g., "I usually wake up").',
          correctionPattern: 'I usually wake up',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_91_1',
        type: 'fill_blank',
        prompt: 'Put the word in correct order: "I (usually / get up) ___ at 7 AM."',
        options: [
          { id: 'opt_1', text: 'usually get up', isCorrect: true },
          { id: 'opt_2', text: 'get up usually', isCorrect: false },
          { id: 'opt_3', text: 'am usually get up', isCorrect: false },
        ],
        correctAnswer: 'usually get up',
        explanation: 'The frequency adverb "usually" must come before the phrasal verb "get up".',
      },
    },
    {
      id: 'turn_a2_91_2',
      turnIndex: 2,
      partnerPrompt:
        'I love that! I always try to do 15 minutes of yoga before breakfast. Now tell me about your workday: How often do you take screen breaks, and do you ever exercise during lunchtime?',
      partnerAudioText:
        'I love that! I always try to do 15 minutes of yoga before breakfast. Now tell me about your workday: How often do you take screen breaks, and do you ever exercise during lunchtime?',
      partnerQuestionHindi:
        'मुझे यह बहुत पसंद आया! मैं हमेशा नाश्ते से पहले 15 मिनट योग करने की कोशिश करती हूँ। अब मुझे अपने कार्यदिवस के बारे में बताएं: आप कितनी बार स्क्रीन ब्रेक लेते हैं, और क्या आप कभी दोपहर के भोजन के समय व्यायाम करते हैं?',
      expectedFunction: 'Explain Workday Breaks, Frequency & Lunchtime Habits',
      contextGoal:
        'Explain that you take short breaks every hour or two, occasionally go for a lunchtime walk, and rarely skip lunch.',
      targetVocabulary: ['take breaks every two hours', 'sometimes go for a walk', 'rarely skip lunch', 'how often do you'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I try to take a short five-minute break every hour. At lunchtime, I sometimes go for a quick walk in the park, and I rarely eat at my desk. How often do you step away from your desk?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I usually take breaks every two hours to rest my eyes. During lunch, I often walk outside for fresh air. Do you manage to exercise during the day?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I rarely sit for more than two hours without a stretch. I always take a 30-minute lunch walk. What about you?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Breaks & Frequency',
          patterns: ['break', 'breaks', 'every hour', 'every two hours', 'hour', 'stretch', 'rest'],
          required: true,
        },
        {
          name: 'Lunch Activity / Exercise',
          patterns: ['walk', 'exercise', 'park', 'lunch', 'eat', 'outside', 'step away'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'rarely_negative_error',
          pattern: /\bi don't rarely\b|\bi do not rarely\b/i,
          errorType: 'grammar',
          message: '"Rarely" already has a negative meaning. Say "I rarely eat at my desk", not "I don\'t rarely".',
          correctionPattern: 'I rarely eat',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_91_2',
        type: 'multiple_choice',
        prompt: 'Which sentence is grammatically correct?',
        options: [
          { id: 'opt_1', text: 'I rarely skip my lunchtime break.', isCorrect: true },
          { id: 'opt_2', text: 'I don\'t rarely skip my break.', isCorrect: false },
          { id: 'opt_3', text: 'I am rarely skip my break.', isCorrect: false },
        ],
        correctAnswer: 'I rarely skip my lunchtime break.',
        explanation: 'Avoid double negatives with "rarely".',
      },
    },
    {
      id: 'turn_a2_91_3',
      turnIndex: 3,
      partnerPrompt:
        'Taking regular breaks makes such a huge difference! What about your evenings? When do you usually shut down your laptop, and how do you unwind after a hectic day?',
      partnerAudioText:
        'Taking regular breaks makes such a huge difference! What about your evenings? When do you usually shut down your laptop, and how do you unwind after a hectic day?',
      partnerQuestionHindi:
        'नियमित ब्रेक लेने से बहुत बड़ा अंतर पड़ता है! आपकी शामों के बारे में क्या? आप आमतौर पर अपना लैपटॉप कब बंद करते हैं, और व्यस्त दिन के बाद आप कैसे तनावमुक्त होते हैं?',
      expectedFunction: 'Describe Evening Wind-Down Habits & Relaxation',
      contextGoal:
        'State your log-off time (e.g. 6:00 PM), describe relaxing activities (cooking, reading, listening to music), and explain why unwinding is important.',
      targetVocabulary: ['log off at 6:00 PM', 'unwind by cooking dinner', 'read a book or listen to music', 'never check work emails late'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I usually log off around 6:00 PM. To unwind, I cook a fresh dinner with my family, and I often read a novel or listen to podcasts. I never check work emails after 8:00 PM because sleep is essential.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I always shut down my computer by 6:30 PM. Then I unwind by cooking and watching a documentary. How do you relax in the evenings?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I finish work at 6:00 PM and unwind by cooking and reading. I rarely stay up past 10:30 PM.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Log-off Time',
          patterns: ['6:00', '6:30', '6 pm', 'finish work', 'shut down', 'log off', 'stop working'],
          required: true,
        },
        {
          name: 'Unwinding Activities',
          patterns: ['cook', 'dinner', 'read', 'book', 'novel', 'music', 'podcast', 'unwind', 'relax', 'walk'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_91_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I like to listen to music to ___ after work."',
        options: [
          { id: 'opt_1', text: 'unwind', isCorrect: true },
          { id: 'opt_2', text: 'unwinding', isCorrect: false },
          { id: 'opt_3', text: 'unwinded', isCorrect: false },
        ],
        correctAnswer: 'unwind',
        explanation: 'Infinitive after "to": "to unwind".',
      },
    },
    {
      id: 'turn_a2_91_4',
      turnIndex: 4,
      partnerPrompt:
        'That sounds like a very healthy and balanced routine Alex! Having clear boundaries between work and rest keeps productivity high. Thank you so much for sharing—I will add your tips into our wellness guide. Any final thoughts on building good daily habits?',
      partnerAudioText:
        'That sounds like a very healthy and balanced routine Alex! Having clear boundaries between work and rest keeps productivity high. Thank you so much for sharing—I will add your tips into our wellness guide. Any final thoughts on building good daily habits?',
      partnerQuestionHindi:
        'यह बहुत ही स्वस्थ और संतुलित दिनचर्या लगती है एलेक्स! काम और आराम के बीच स्पष्ट सीमाएँ उत्पादकता को उच्च बनाए रखती हैं। साझा करने के लिए बहुत-बहुत धन्यवाद—मैं आपके सुझावों को हमारी वेलनेस गाइड में शामिल करूँगी। अच्छी दैनिक आदतें बनाने पर कोई अंतिम विचार?',
      expectedFunction: 'Conclude Conversation & Share Advice on Daily Habits',
      contextGoal:
        'Give a brief encouraging tip (e.g. consistency is key, start with small habits), thank Maya, and close the meeting warmly.',
      targetVocabulary: ['consistency is key', 'start with small changes', 'thank you Maya', 'have a great productive day'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'You are very welcome Maya! I think consistency is key—it is best to start with small daily habits rather than big changes. Thank you for the chat, and have a productive day!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thanks Maya! Small consistent habits make a huge difference over time. Let us catch up again soon, have a great day!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Consistency is definitely most important. Thanks for the great chat Maya, see you at the sprint meeting!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Advice / Key Insight',
          patterns: ['consistency', 'small habits', 'small changes', 'start small', 'routine', 'balance', 'important'],
          required: true,
        },
        {
          name: 'Polite Closing',
          patterns: ['thank you', 'thanks', 'have a great day', 'have a good day', 'see you', 'catch up'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_91_4',
        type: 'multiple_choice',
        prompt: 'Which expression is best for a warm professional sign-off?',
        options: [
          { id: 'opt_1', text: 'Thank you for the chat Maya, have a wonderful and productive day!', isCorrect: true },
          { id: 'opt_2', text: 'I stop talk now bye.', isCorrect: false },
          { id: 'opt_3', text: 'Meeting is finished go away.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for the chat Maya, have a wonderful and productive day!',
        explanation: 'Polite, positive, and collaborative closing.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 75,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 70,
  },
};
