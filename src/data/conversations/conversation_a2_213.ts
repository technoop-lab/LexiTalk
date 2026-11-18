import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_213: ConversationDefinition = {
  id: 'conv_a2_213',
  title: 'Study Habits, Routines & Time Management',
  cefr: 'A2',
  unitId: 'unit_a2_15',
  lessonLinks: ['lesson_a2_15_213'],
  estimatedMinutes: 5,
  scenario:
    'You are in the campus library study lounge with your classmate Maya. You are both working on coursework deadlines and discussing your daily study routines, how to prioritize heavy assignments, ways to avoid procrastination, and using time management techniques like the Pomodoro method.',
  communicativeGoals: [
    'Describe personal study habits and daily revision routines using adverbs of frequency (usually, consistently, rarely)',
    'Talk about managing deadlines and prioritizing tasks ("meet a deadline", "prioritize urgent tasks")',
    'Discuss strategies for overcoming procrastination (short breaks, study timers, turning off phone notifications)',
    'Ask study partner about their daily schedule and give mutual advice',
  ],
  canDoStatements: [
    'Can describe daily study routines and habits using simple frequency words',
    'Can talk about deadlines, schedules, and time management strategies in A2 English',
    'Can give and ask for simple study advice to stay focused',
  ],
  characters: [
    {
      id: 'char_maya_study_partner',
      name: 'Maya',
      role: 'Classmate & Study Partner',
      avatar: '📚',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'procrastination',
        ipa: '/prəˌkræstɪˈneɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The action of delaying or postponing tasks that need to be done',
        exampleSentence: 'Procrastination makes deadlines much more stressful.',
        translations: { hi: 'टालमटोल / काम टालना (प्रोक्रेस्टिनेशन)' },
      },
      {
        word: 'prioritize',
        ipa: '/praɪˈɒrətaɪz/',
        partOfSpeech: 'verb',
        meaning: 'To treat something as more important than other things',
        exampleSentence: 'I prioritize urgent assignments before doing optional reading.',
        translations: { hi: 'प्राथमिकता देना (प्रायोरिटाइज़)' },
      },
      {
        word: 'deadline',
        ipa: '/ˈdedlaɪn/',
        partOfSpeech: 'noun',
        meaning: 'The latest time or date by which something must be completed',
        exampleSentence: 'Our project deadline is this Friday at five o’clock.',
        translations: { hi: 'अंतिम समय सीमा (डेडलाइन)' },
      },
      {
        word: 'routine',
        ipa: '/ruːˈtiːn/',
        partOfSpeech: 'noun',
        meaning: 'A regular sequence of actions followed consistently',
        exampleSentence: 'Having a morning study routine helps me stay organized.',
        translations: { hi: 'दैनिक दिनचर्या (रूटीन)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I always prioritize urgent deadlines before starting new tasks.',
        functionCategory: 'Describing task prioritization',
        exampleSentence: 'You should prioritize your essay draft today.',
      },
      {
        phrase: 'How do you avoid procrastination when studying at home?',
        functionCategory: 'Inquiring about focus techniques',
        exampleSentence: 'What do you do when you lose focus?',
      },
      {
        phrase: 'I use the Pomodoro technique: twenty-five minutes of study and a five-minute break.',
        functionCategory: 'Explaining a time-management method',
        exampleSentence: 'Short breaks keep my mind fresh.',
      },
      {
        phrase: 'That sounds like a really effective habit.',
        functionCategory: 'Positive reinforcement and agreement',
        exampleSentence: 'I should definitely try that method too.',
      },
    ],
    grammar: {
      title: 'Adverbs of Frequency & Temporal Time Clauses for Study Routines',
      conceptExplanation:
        '1. Adverbs of frequency before main verbs (or after "be"):\n   - "I usually review my notes before going to bed."\n   - "I always make a to-do list in the morning."\n   - "I rarely study late at night."\n2. Time Clauses with "before / after + -ing":\n   - "After finishing my lectures, I go to the library."\n   - "Before submitting an essay, I always proofread it."',
      patternFormula: 'I [always/usually/often] [Verb] + [Time clause: before/after doing X]',
      contrastExamples: [
        {
          incorrect: 'I study always in the morning.',
          correct: 'I always study in the morning.',
          explanation: 'Place adverbs of frequency before the main verb.',
        },
        {
          incorrect: 'After finish my class I study.',
          correct: 'After finishing my class, I study.',
          explanation: 'Prepositions "after" and "before" are followed by the gerund (-ing).',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Maya',
        text: 'I have three assignments due next week and I feel a bit overwhelmed! How do you organize your study routine?',
        translation: 'अगले हफ्ते मेरे तीन असाइनमेंट जमा होने हैं और मैं थोड़ा परेशान महसूस कर रही हूँ! आप अपने अध्ययन की दिनचर्या कैसे व्यवस्थित करते हैं?',
      },
      {
        speaker: 'Learner',
        text: 'I always write a daily to-do list and prioritize the most urgent tasks first.',
        translation: 'मैं हमेशा दैनिक टू-डू सूची लिखता हूँ और सबसे जरूरी कार्यों को पहले प्राथमिकता देता हूँ।',
      },
      {
        speaker: 'Maya',
        text: 'That’s a great idea. Do you study for long blocks of time or take regular breaks?',
        translation: 'यह एक बहुत अच्छा विचार है। क्या आप लंबे समय तक लगातार पढ़ते हैं या नियमित अंतराल लेते हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_213_1',
      type: 'fill_blank',
      prompt: 'Complete with the correct verb form: "Before ______ (submit / submitting / submitted) the paper, I check my spelling."',
      options: [
        { id: 'opt_1', text: 'submitting', isCorrect: true },
        { id: 'opt_2', text: 'submit', isCorrect: false },
        { id: 'opt_3', text: 'submitted', isCorrect: false },
      ],
      correctAnswer: 'submitting',
      explanation: 'Use the -ing gerund after the preposition "before".',
    },
    {
      id: 'cp_213_2',
      type: 'multiple_choice',
      prompt: 'Which sentence shows correct adverb placement?',
      options: [
        { id: 'opt_1', text: 'I usually take a five-minute break every half hour.', isCorrect: true },
        { id: 'opt_2', text: 'I take usually a five-minute break every half hour.', isCorrect: false },
        { id: 'opt_3', text: 'Usually I take break never.', isCorrect: false },
      ],
      correctAnswer: 'I usually take a five-minute break every half hour.',
      explanation: 'Frequency adverb "usually" sits directly before the main verb "take".',
    },
    {
      id: 'cp_213_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [I always prioritize / before doing / urgent tasks / easy exercises]',
      correctAnswer: 'I always prioritize urgent tasks before doing easy exercises',
      explanation: 'Subject + adverb + verb + object + temporal clause.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_213_1',
      prompt: 'Construct a sentence explaining that you study for 25 minutes and then take a short break to stay focused.',
      scenarioContext: 'Explaining your Pomodoro routine to Maya.',
      targetStructure: 'I study for twenty-five minutes and then take a short five-minute break.',
      wordBank: ['I study for', 'twenty-five minutes', 'and then take', 'a short five-minute break', 'to stay focused.'],
      acceptableSolutions: [
        'I study for twenty-five minutes and then take a short five-minute break.',
        'I study for twenty-five minutes and take a short break.',
      ],
      explanation: 'Time management description formula.',
    },
    {
      id: 'sc_213_2',
      prompt: 'Construct a sentence asking Maya how she manages to avoid phone distractions while studying.',
      scenarioContext: 'Asking your classmate for study tips.',
      targetStructure: 'How do you avoid phone distractions when studying in the library?',
      wordBank: ['How do you avoid', 'phone distractions', 'when studying', 'in the library,', 'Maya?'],
      acceptableSolutions: [
        'How do you avoid phone distractions when studying in the library?',
        'How do you avoid distractions when you study?',
      ],
      explanation: 'Inquiry structure: How do you avoid [Problem] when [Action]?',
    },
  ],
  turns: [
    {
      id: 'turn_213_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! Thanks for joining me in the library. I have two essays due this Friday and I’m finding it hard to start because I keep getting distracted. How do you usually organize your study routine when you have big deadlines?',
      partnerAudioText:
        'Hey! Thanks for joining me in the library. I have two essays due this Friday and I’m finding it hard to start because I keep getting distracted. How do you usually organize your study routine when you have big deadlines?',
      partnerQuestionHindi:
        'अरे! लाइब्रेरी में मेरे साथ शामिल होने के लिए धन्यवाद। मुझे इस शुक्रवार को दो निबंध जमा करने हैं और मुझे शुरुआत करना मुश्किल लग रहा है क्योंकि मेरा ध्यान भटकता रहता है। जब आपके पास बड़ी समय सीमा होती है तो आप आमतौर पर अपनी अध्ययन दिनचर्या कैसे व्यवस्थित करते हैं?',
      expectedFunction: 'Explaining daily study organization using adverbs of frequency and task prioritization',
      contextGoal: 'Explain your study routine (e.g. writing a to-do list, prioritizing urgent essays first, studying in the morning)',
      targetVocabulary: ['usually', 'to-do list', 'prioritize', 'urgent', 'morning', 'routine', 'Maya'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hi Maya! I usually make a written to-do list every morning and prioritize the most urgent essay first.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hey Maya. When I have deadlines, I always break large projects into smaller tasks and study in quiet blocks.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I always start by ranking my assignments by deadline date. Tackling the hardest task early in the morning really helps me avoid panic.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'frequency_adverb',
          patterns: ['usually', 'always', 'normally', 'often'],
          required: true,
        },
        {
          name: 'routine_strategy',
          patterns: ['to-do list', 'prioritize', 'urgent', 'break', 'tasks', 'morning', 'plan', 'schedule'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_213_1_adverb_order',
          pattern: /i make usually/i,
          errorType: 'grammar',
          message: 'Place frequency words before the verb: "I usually make a to-do list."',
          correctionPattern: 'I usually make a daily to-do list.',
        },
      ],
      remediationPractice: {
        id: 'rem_213_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I ______ (always) prioritize urgent tasks."',
        options: [
          { id: 'r1', text: 'always', isCorrect: true },
          { id: 'r2', text: 'always to', isCorrect: false },
        ],
        correctAnswer: 'always',
        explanation: 'Standard frequency adverb placement.',
      },
    },
    {
      id: 'turn_213_2',
      turnIndex: 2,
      partnerPrompt:
        'Breaking tasks down sounds very sensible. But what do you do about procrastination? Every time I sit down, I check my phone notifications or browse social media!',
      partnerAudioText:
        'Breaking tasks down sounds very sensible. But what do you do about procrastination? Every time I sit down, I check my phone notifications or browse social media!',
      partnerQuestionHindi:
        'कार्यों को छोटे हिस्सों में बांटना बहुत समझदारी भरा लगता है। लेकिन आप टालमटोल (procrastination) का क्या करते हैं? हर बार जब मैं बैठती हूँ, तो मैं अपने फोन नोटिफिकेशन चेक करती हूँ या सोशल मीडिया देखती हूँ!',
      expectedFunction: 'Giving advice on overcoming procrastination (e.g. Pomodoro timer, turning off phone notifications)',
      contextGoal: 'Explain your focus method (e.g. putting your phone on silent, using 25-minute Pomodoro focus blocks)',
      targetVocabulary: ['procrastination', 'phone', 'silent', 'Pomodoro', 'twenty-five minutes', 'break', 'notifications'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'To avoid procrastination, I put my phone on silent in my bag and study for twenty-five minutes before taking a five-minute break.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I use the Pomodoro technique. I turn off all phone notifications and set a timer for 25 minutes of focused writing.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I leave my phone in my locker while working in the library. Studying without notifications makes a massive difference to my focus.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'anti_procrastination_action',
          patterns: ['silent', 'turn off', 'notifications', 'pomodoro', 'timer', 'bag', 'locker', 'phone'],
          required: true,
        },
        {
          name: 'time_block_or_break',
          patterns: ['minutes', 'break', 'focused', 'timer', 'study', 'technique'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_213_2_vague',
          pattern: /^i just stop phone\.$/i,
          errorType: 'vocabulary',
          message: 'Express it clearly: "I put my phone on silent and use a 25-minute study timer."',
          correctionPattern: 'I put my phone on silent and set a study timer.',
        },
      ],
      remediationPractice: {
        id: 'rem_213_2',
        type: 'multiple_choice',
        prompt: 'Which strategy best describes overcoming phone distractions?',
        options: [
          { id: 'r1', text: 'I put my phone on silent and set a 25-minute study timer.', isCorrect: true },
          { id: 'r2', text: 'I look phone all time.', isCorrect: false },
        ],
        correctAnswer: 'I put my phone on silent and set a 25-minute study timer.',
        explanation: 'Clear, structured time management habit.',
      },
    },
    {
      id: 'turn_213_3',
      turnIndex: 3,
      partnerPrompt:
        'The Pomodoro technique sounds brilliant! I’m going to put my phone on "Do Not Disturb" right now. How many hours do you usually study per day, and do you prefer mornings or nights?',
      partnerAudioText:
        'The Pomodoro technique sounds brilliant! I’m going to put my phone on "Do Not Disturb" right now. How many hours do you usually study per day, and do you prefer mornings or nights?',
      partnerQuestionHindi:
        'पोमोडोरो तकनीक शानदार लगती है! मैं अभी अपना फोन "डू नॉट डिस्टर्ब" पर रखने जा रही हूँ। आप आमतौर पर प्रति दिन कितने घंटे अध्ययन करते हैं, और क्या आप सुबह या रात को पसंद करते हैं?',
      expectedFunction: 'Stating study duration, time preference with a reason, and asking Maya a follow-up question',
      contextGoal: 'State your daily study hours (e.g. 3 to 4 hours), your preference (e.g. mornings because mind is fresh), and ask Maya how many hours she aims for',
      targetVocabulary: ['hours', 'prefer', 'morning', 'night', 'fresh', 'What about you', 'Maya'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I usually study for three to four hours a day, and I prefer mornings because my brain is fresh. How many hours do you study, Maya?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I typically do about four hours. I definitely prefer morning study to late nights. What time of day works best for you, Maya?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Around three hours daily is my sweet spot, usually between 9 AM and 1 PM. I rarely study past 8 PM. How about you, Maya?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'duration_and_preference',
          patterns: ['hours', 'three', 'four', 'two', 'morning', 'night', 'prefer', 'fresh', 'concentrate'],
          required: true,
        },
        {
          name: 'follow_up_inquiry',
          patterns: ['what about you', 'how many hours', 'what time', 'how about you', 'maya'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_213_3_no_followup',
          pattern: /^i study 4 hours morning\.$/i,
          errorType: 'interaction',
          message: 'Remember to ask Maya: "What about you, Maya? When do you study best?"',
          correctionPattern: 'I study for three hours in the morning. What about you, Maya?',
        },
      ],
      remediationPractice: {
        id: 'rem_213_3',
        type: 'fill_blank',
        prompt: 'Fill in: "I prefer mornings ______ (because) my mind is fresh."',
        options: [
          { id: 'r1', text: 'because', isCorrect: true },
          { id: 'r2', text: 'so that to', isCorrect: false },
        ],
        correctAnswer: 'because',
        explanation: 'Use "because" to give a reason.',
      },
    },
    {
      id: 'turn_213_4',
      turnIndex: 4,
      partnerPrompt:
        'I am definitely an afternoon person, but I want to try your morning Pomodoro routine! Let’s set a 25-minute timer right now and write our introductory paragraphs together. Ready?',
      partnerAudioText:
        'I am definitely an afternoon person, but I want to try your morning Pomodoro routine! Let’s set a 25-minute timer right now and write our introductory paragraphs together. Ready?',
      partnerQuestionHindi:
        'मैं निश्चित रूप से दोपहर का व्यक्ति हूँ, लेकिन मैं आपकी सुबह की पोमोडोरो दिनचर्या आज़माना चाहती हूँ! आइए अभी 25 मिनट का टाइमर सेट करें और अपने परिचयात्मक पैराग्राफ एक साथ लिखें। तैयार हैं?',
      expectedFunction: 'Agreeing to start the timed study session enthusiastically',
      contextGoal: 'Say you are completely ready, encourage Maya, and start the timer together',
      targetVocabulary: ['Ready', 'timer', 'twenty-five minutes', 'let’s do it', 'good luck', 'Maya', 'focus'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I’m totally ready! Let’s start the twenty-five minute timer and focus. Good luck on your essay, Maya!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Yes, let’s do it! 25 minutes of uninterrupted writing starts now. Let’s meet our deadlines together!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Ready when you are! Timer is running. See you in twenty-five minutes for a well-deserved coffee break!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'readiness_agreement',
          patterns: ['ready', 'let’s do it', 'yes', 'totally ready', 'starts now'],
          required: true,
        },
        {
          name: 'encouragement_focus',
          patterns: ['timer', 'focus', 'essay', 'maya', 'twenty-five', 'minutes', 'break', 'deadlines'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_213_4_short',
          pattern: /^yes$/i,
          errorType: 'interaction',
          message: 'Respond with enthusiasm: "I’m ready! Let’s start the timer and focus, Maya."',
          correctionPattern: 'I am ready! Let’s start the timer and focus.',
        },
      ],
      remediationPractice: {
        id: 'rem_213_4',
        type: 'multiple_choice',
        prompt: 'Which response is the most motivating and natural?',
        options: [
          { id: 'r1', text: 'I’m ready! Let’s start the timer and focus together, Maya.', isCorrect: true },
          { id: 'r2', text: 'Ok timer now.', isCorrect: false },
        ],
        correctAnswer: 'I’m ready! Let’s start the timer and focus together, Maya.',
        explanation: 'Energetic, polite, and directly responds to the prompt.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 75,
  },
};
