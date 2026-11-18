import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_159: ConversationDefinition = {
  id: 'conv_a2_159',
  title: 'Health, Fitness Habits, Wellness Routines & Healthy Choices',
  cefr: 'A2',
  unitId: 'unit_a2_11',
  lessonLinks: ['lesson_a2_11_159'],
  estimatedMinutes: 5,
  scenario:
    'You are in the consultation room at Horizon Wellness & Fitness Center in Glasgow meeting with coach Greg Taylor. You want to overcome a sedentary office routine, improve cardiovascular stamina, and improve sleep quality. You will discuss health habits using modals of advice and urgency ("ought to", "had better", "should"), practice imperative health guidelines ("make sure to stay hydrated", "avoid eating late"), and build a sustainable wellness schedule.',
  communicativeGoals: [
    'Describe personal lifestyle habits, physical symptoms, and fitness goals',
    'Use modals of recommendation and strong advice ("ought to", "had better", "should")',
    'Express wellness guidelines and health imperatives ("make sure to", "avoid + -ing", "try to")',
    'Formulate questions about workout frequency and recovery routines',
  ],
  canDoStatements: [
    'Can describe daily wellness routines, physical activity levels, and dietary habits',
    'Can give and receive health advice using "ought to", "had better", and "should"',
    'Can establish a realistic weekly exercise and nutrition schedule in English',
  ],
  characters: [
    {
      id: 'char_greg_taylor',
      name: 'Greg Taylor',
      role: 'Wellness & Fitness Coach',
      avatar: '🏃‍♂️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'stamina',
        ipa: '/ˈstæmɪnə/',
        partOfSpeech: 'noun',
        meaning: 'The ability to sustain prolonged physical or mental effort',
        exampleSentence: 'Regular cardio workouts will build your endurance and stamina.',
        translations: { hi: 'सहनशक्ति / स्टैमिना' },
      },
      {
        word: 'sedentary',
        ipa: '/ˈsedntri/',
        partOfSpeech: 'adjective',
        meaning: 'Tending to spend much time seated; somewhat inactive',
        exampleSentence: 'A sedentary desk job can lead to back stiffness.',
        translations: { hi: 'गतिहीन / बैठे रहने वाला' },
      },
      {
        word: 'hydration',
        ipa: '/haɪˈdreɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The process of providing adequate water or liquid to the body',
        exampleSentence: 'Proper hydration is essential for muscle recovery after workouts.',
        translations: { hi: 'जलयोजन / पर्याप्त पानी पीना' },
      },
      {
        word: 'nutrition',
        ipa: '/njuˈtrɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The process of providing or obtaining the food necessary for health and growth',
        exampleSentence: 'Good nutrition and balanced meals improve your daily energy levels.',
        translations: { hi: 'पोषण' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I ought to exercise at least three times a week to improve my stamina.',
        functionCategory: 'Modals of Advice with "Ought to"',
        exampleSentence: 'You ought to drink more water during the day.',
      },
      {
        phrase: 'You had better stretch after every workout to avoid muscle injury.',
        functionCategory: 'Modals of Strong Advice / Warning with "Had better"',
        exampleSentence: 'You had better get eight hours of sleep.',
      },
      {
        phrase: 'Make sure to avoid eating heavy meals right before bedtime.',
        functionCategory: 'Imperative Health Directives with "Make sure to"',
        exampleSentence: 'Make sure to warm up before lifting weights.',
      },
      {
        phrase: 'How often should I incorporate strength training into my weekly schedule?',
        functionCategory: 'Inquiring About Workout Programming',
        exampleSentence: 'How often should I rest between sessions?',
      },
    ],
    grammar: {
      title: 'Modals of Advice ("Ought to" / "Had better" / "Should") & Health Imperatives',
      conceptExplanation:
        '1. "Ought to + [Base Verb]": Expresses general moral or healthy duty (equivalent to "should", e.g., "We ought to eat more vegetables").\n2. "Had better + [Base Verb]": Expresses strong advice with a subtle warning of negative consequences if ignored (e.g., "You had better stretch or your muscles will cramp"). Note: "had better" refers to present/future, not past.\n3. Health Imperatives: "Make sure to + [Base Verb]", "Avoid + [Verb-ing]", "Try to + [Base Verb]".',
      patternFormula: 'Subject + ought to / should + [Base Verb] | Subject + had better + [Base Verb] | Make sure to + [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'You had better to stretch and avoid to eat sugar.',
          correct: 'You had better stretch and make sure to avoid eating refined sugar.',
          explanation: '"Had better" takes a bare infinitive without "to", and "avoid" is followed by a gerund (-ing).',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Greg Taylor',
        text: 'Hi there! Welcome to Horizon Fitness. What lifestyle or health changes are you looking to make over the next few months?',
        translation: 'नमस्ते! होराइजन फिटनेस में आपका स्वागत है। अगले कुछ महीनों में आप अपनी जीवनशैली या स्वास्थ्य में क्या बदलाव करना चाहते हैं?',
      },
      {
        speaker: 'You',
        text: 'Hi Greg! I have a sedentary desk job, so I ought to exercise three days a week to build stamina and reduce back stiffness.',
        translation: 'नमस्ते ग्रेग! मेरी एक गतिहीन डेस्क जॉब है, इसलिए स्टैमिना बनाने और पीठ के दर्द को कम करने के लिए मुझे सप्ताह में तीन दिन व्यायाम करना चाहिए।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_159_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence with strong advice: "You had better ___ (stretch / to stretch / stretching) before running to prevent muscle strain."',
      options: [
        { id: 'opt_1', text: 'stretch', isCorrect: true },
        { id: 'opt_2', text: 'to stretch', isCorrect: false },
        { id: 'opt_3', text: 'stretching', isCorrect: false },
      ],
      correctAnswer: 'stretch',
      explanation: '"Had better" is followed by the bare infinitive ("stretch") without "to".',
    },
    {
      id: 'cp_a2_159_2',
      type: 'multiple_choice',
      prompt: 'Which sentence uses "avoid" correctly for nutritional advice?',
      options: [
        { id: 'opt_1', text: 'Make sure to avoid drinking sugary sodas before bedtime.', isCorrect: true },
        { id: 'opt_2', text: 'Make sure to avoid to drink sugary sodas before bedtime.', isCorrect: false },
        { id: 'opt_3', text: 'Avoid of drink sugary sodas.', isCorrect: false },
      ],
      correctAnswer: 'Make sure to avoid drinking sugary sodas before bedtime.',
      explanation: '"Avoid" is followed by a gerund ("drinking").',
    },
    {
      id: 'cp_a2_159_3',
      type: 'multiple_choice',
      prompt: 'Which modal expression shows healthy recommendation equivalent to "should"?',
      options: [
        { id: 'opt_1', text: 'We ought to drink at least two litres of water every day.', isCorrect: true },
        { id: 'opt_2', text: 'We ought drink at least two litres.', isCorrect: false },
        { id: 'opt_3', text: 'We oughting to drink water.', isCorrect: false },
      ],
      correctAnswer: 'We ought to drink at least two litres of water every day.',
      explanation: '"Ought to + base verb" expresses recommendation.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_159_1',
      scenarioContext: 'Give advice with ought to.',
      prompt: 'Build: "I ought to exercise three times a week."',
      targetStructure: 'I ought to exercise + three times a week',
      wordBank: ['I', 'ought', 'to', 'exercise', 'three', 'times', 'a', 'week', 'exercising', 'had'],
      acceptableSolutions: [
        'I ought to exercise three times a week',
        'I ought to exercise three times a week.',
      ],
      explanation: '"Ought to + base verb".',
    },
    {
      id: 'sc_a2_159_2',
      scenarioContext: 'Give warning advice with had better.',
      prompt: 'Build: "You had better stay hydrated during workouts."',
      targetStructure: 'You had better stay hydrated + during workouts',
      wordBank: ['You', 'had', 'better', 'stay', 'hydrated', 'during', 'workouts', 'to', 'staying'],
      acceptableSolutions: [
        'You had better stay hydrated during workouts',
        'You had better stay hydrated during workouts.',
      ],
      explanation: '"Had better + base verb".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_159_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi! I’m Coach Greg. Let’s talk about your current daily habits. How active is your typical day, and what health or energy challenges are you experiencing?',
      partnerAudioText:
        'Hi! I’m Coach Greg. Let’s talk about your current daily habits. How active is your typical day, and what health or energy challenges are you experiencing?',
      partnerQuestionHindi:
        'नमस्ते! मैं कोच ग्रेग हूँ। आइए आपकी वर्तमान दैनिक आदतों के बारे में बात करते हैं। आपका सामान्य दिन कितना सक्रिय है, और आप किस स्वास्थ्य या ऊर्जा चुनौतियों का सामना कर रहे हैं?',
      expectedFunction: 'Describe Lifestyle & Needs with "Ought to" or "Should" (I have a sedentary office job, so I ought to exercise regularly to improve stamina and reduce fatigue)',
      contextGoal:
        'Explain that you work a sedentary desk job, feel low energy/back stiffness, and ought to exercise three times a week to build stamina.',
      targetVocabulary: ['sedentary desk job', 'I ought to exercise three times a week', 'build cardiovascular stamina', 'reduce back stiffness', 'improve daily energy'],
      suggestedResponses: [
        {
          label: 'Habits with "Ought to"',
          text: 'Hi Greg! I have a sedentary desk job and sit for eight hours a day. I often feel fatigued, so I ought to exercise three times a week to build stamina and relieve back stiffness.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Habits & Goals',
          text: 'My routine is quite inactive, and I struggle with low energy. I should exercise regularly to improve my cardiovascular fitness.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Current Routine / Challenges (sedentary / desk / sit / inactive / tired / fatigue / energy / back / stiffness)',
          patterns: ['sedentary', 'desk', 'sit', 'inactive', 'tired', 'fatigue', 'energy', 'back', 'stiffness', 'office'],
          required: true,
        },
        {
          name: 'Advice / Goal (ought to / should / exercise / workout / stamina / fitness / 3 times / week / improve)',
          patterns: ['ought to', 'should', 'exercise', 'workout', 'stamina', 'fitness', '3', 'three', 'week', 'improve'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_ought_without_to',
          pattern: 'i ought exercise|i ought workout',
          errorType: 'grammar',
          message: 'Always use "to" with "ought": "I ought to exercise".',
          correctionPattern: 'I ought to exercise regularly',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_159_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I ___ (ought to / ought) walk at least thirty minutes every day."',
        options: [
          { id: 'opt_1', text: 'ought to', isCorrect: true },
          { id: 'opt_2', text: 'ought', isCorrect: false },
          { id: 'opt_3', text: 'oughting to', isCorrect: false },
        ],
        correctAnswer: 'ought to',
        explanation: '"Ought" must be followed by "to".',
      },
    },
    {
      id: 'turn_a2_159_2',
      turnIndex: 2,
      partnerPrompt:
        'Starting with three 45-minute sessions of moderate cardio and bodyweight exercises is ideal. What about your evening nutrition and sleep routine? Poor sleep often derails fitness progress.',
      partnerAudioText:
        'Starting with three 45-minute sessions of moderate cardio and bodyweight exercises is ideal. What about your evening nutrition and sleep routine? Poor sleep often derails fitness progress.',
      partnerQuestionHindi:
        'मध्यम कार्डियो और बॉडीवेट व्यायाम के तीन 45-मिनट के सत्रों के साथ शुरुआत करना आदर्श है। आपके शाम के पोषण और नींद की दिनचर्या के बारे में क्या? खराब नींद अक्सर फिटनेस की प्रगति को बाधित करती है।',
      expectedFunction: 'Apply "Had better" & Imperatives to Nutrition/Sleep (I had better stop looking at screens before bed and make sure to avoid eating heavy meals late)',
      contextGoal:
        'Use "had better" and "make sure to avoid + -ing" to describe changes to evening screen time and late-night snacking.',
      targetVocabulary: ['I had better stop using screens', 'make sure to avoid eating heavy meals late', 'proper hydration throughout the day', 'sleep 7 to 8 hours'],
      suggestedResponses: [
        {
          label: 'Strong Advice with "Had better" and "Avoid"',
          text: 'I had better turn off my phone an hour before bed and make sure to avoid eating heavy meals late at night to ensure eight hours of quality sleep.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Sleep & Diet Rules',
          text: 'I had better improve my sleep habits. I will avoid drinking caffeine after 4 PM and make sure to drink more water during the day.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Had better or Imperative (had better / make sure to / avoid / should / need to)',
          patterns: ['had better', 'make sure to', 'avoid', 'should', 'need to', 'must'],
          required: true,
        },
        {
          name: 'Sleep / Nutrition Targets (screens / phone / heavy meals / sleep / 8 hours / caffeine / water / hydration / food)',
          patterns: ['screens', 'phone', 'heavy meals', 'sleep', '8', 'seven', 'hours', 'caffeine', 'water', 'hydration', 'food', 'late'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_159_2',
        type: 'multiple_choice',
        prompt: 'Which advice sentence uses "had better" correctly without grammatical errors?',
        options: [
          { id: 'opt_1', text: 'You had better drink plenty of water after exercising.', isCorrect: true },
          { id: 'opt_2', text: 'You had better to drink plenty of water.', isCorrect: false },
          { id: 'opt_3', text: 'You had better drinking water.', isCorrect: false },
        ],
        correctAnswer: 'You had better drink plenty of water after exercising.',
        explanation: '"Had better" is followed by a bare infinitive ("drink").',
      },
    },
    {
      id: 'turn_a2_159_3',
      turnIndex: 3,
      partnerPrompt:
        'Turning off screens and cutting late caffeine will transform your sleep quality! When you come into the gym, what questions do you have about warmups, stretching, or workout frequency?',
      partnerAudioText:
        'Turning off screens and cutting late caffeine will transform your sleep quality! When you come into the gym, what questions do you have about warmups, stretching, or workout frequency?',
      partnerQuestionHindi:
        'स्क्रीन बंद करने और देर से कैफीन छोड़ने से आपकी नींद की गुणवत्ता बदल जाएगी! जब आप जिम आते हैं, तो वार्मअप, स्ट्रेचिंग या कसरत की आवृत्ति के बारे में आपके क्या प्रश्न हैं?',
      expectedFunction: 'Ask Coach on Workout Scheduling & Injury Prevention (How often should I do strength training, and what stretches do you recommend?)',
      contextGoal:
        'Ask Greg how many rest days you should take between workouts and what stretches are best for lower back stiffness.',
      targetVocabulary: ['How many rest days should I take between workouts?', 'recommended stretches for lower back', 'warmup routine', 'prevent muscle cramps'],
      suggestedResponses: [
        {
          label: 'Workout Frequency & Stretching Question',
          text: 'How many rest days should I take between cardio and strength sessions, and what warmup stretches do you recommend for lower back stiffness?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Question',
          text: 'How often should I stretch, and how long should each gym session be?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Question on Frequency/Stretching (how often / how many / should / stretches / rest days / warmup / routine / ?)',
          patterns: ['how often', 'how many', 'should', 'stretches', 'rest', 'days', 'warmup', 'routine', 'back', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_159_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "How often should I ___ (stretch / stretching) after workouts?"',
        options: [
          { id: 'opt_1', text: 'stretch', isCorrect: true },
          { id: 'opt_2', text: 'stretching', isCorrect: false },
          { id: 'opt_3', text: 'to stretch', isCorrect: false },
        ],
        correctAnswer: 'stretch',
        explanation: 'Modal "should" takes a base verb ("stretch").',
      },
    },
    {
      id: 'turn_a2_159_4',
      turnIndex: 4,
      partnerPrompt:
        'Take at least one rest day between strength workouts, and do five minutes of dynamic stretching before every session. You’re ready to start on Monday! Could you summarize your new health and fitness plan?',
      partnerAudioText:
        'Take at least one rest day between strength workouts, and do five minutes of dynamic stretching before every session. You’re ready to start on Monday! Could you summarize your new health and fitness plan?',
      partnerQuestionHindi:
        'स्ट्रेंथ वर्कआउट के बीच कम से कम एक दिन का आराम लें, और हर सत्र से पहले पांच मिनट का डायनामिक स्ट्रेचिंग करें। आप सोमवार को शुरू करने के लिए तैयार हैं! क्या आप अपनी नई स्वास्थ्य और फिटनेस योजना का संक्षेप प्रस्तुत कर सकते हैं?',
      expectedFunction: 'Summarize Fitness Plan & Goals (To summarize, I will work out three days a week, avoid late screens and heavy meals, and stretch before every session)',
      contextGoal:
        'Summarize the plan: 3 workouts weekly with rest days, dynamic stretches, 8 hours sleep without screens, avoid late heavy meals, and thank Greg.',
      targetVocabulary: ['To summarize my wellness plan', 'exercise three days a week with rest days', 'stretch before every session', 'avoid screens before bed for 8 hours sleep', 'thank you Coach Greg'],
      suggestedResponses: [
        {
          label: 'Comprehensive Wellness Summary',
          text: 'To summarize my plan: I will work out three days a week with rest days, do dynamic stretches before every session, avoid late screens to get eight hours of sleep, and stay hydrated throughout the day. Thank you, Coach Greg!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Wellness Summary',
          text: 'In summary, three workouts a week, daily stretching, and better sleep habits without late screen time. Thanks for the coaching, Greg!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Summary Signpost (to summarize / in summary / summary / plan / agreed / so)',
          patterns: ['to summarize', 'in summary', 'summary', 'plan', 'agreed', 'so'],
          required: true,
        },
        {
          name: 'Key Wellness Commitments (three / 3 / workout / exercise / stretch / sleep / screens / meals / thank you / greg)',
          patterns: ['three', '3', 'workout', 'exercise', 'stretch', 'sleep', 'screens', 'meals', 'thank you', 'greg', 'thanks'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_159_4',
        type: 'multiple_choice',
        prompt: 'Which summary captures the complete fitness routine accurately?',
        options: [
          { id: 'opt_1', text: 'To summarize, I will exercise three days a week, stretch before workouts, and avoid screens before bed.', isCorrect: true },
          { id: 'opt_2', text: 'I never exercise again goodbye.', isCorrect: false },
          { id: 'opt_3', text: 'Everything is too hard so I quit.', isCorrect: false },
        ],
        correctAnswer: 'To summarize, I will exercise three days a week, stretch before workouts, and avoid screens before bed.',
        explanation: 'Accurate and positive summary of the wellness plan.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 65,
  },
};
