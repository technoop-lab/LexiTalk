import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_129: ConversationDefinition = {
  id: 'conv_a2_129',
  title: 'Giving Advice & Making Recommendations (should, shouldn’t, Why don’t you...?, If I were you)',
  cefr: 'A2',
  unitId: 'unit_a2_9',
  lessonLinks: ['lesson_a2_9_129'],
  estimatedMinutes: 5,
  scenario:
    'You are in a consultation room at the Oxford University Student & Career Support Hub meeting academic wellness advisor Dr. Eleanor Vance. You are feeling overwhelmed trying to balance full-time study, job applications, and healthy sleep routines. Practice giving and receiving practical advice using modal verbs ("should", "shouldn’t", "ought to") and conversational suggestions ("Why don’t you...?", "If I were you, I would...").',
  communicativeGoals: [
    'Offer helpful everyday advice using "You should / You shouldn’t + base verb"',
    'Make friendly conversational suggestions using "Why don’t you + base verb?" and "How about + verb-ing?"',
    'Express conditional recommendations using "If I were you, I would..."',
    'Accept and evaluate advice politely ("That’s a great idea, I should definitely try that")',
  ],
  canDoStatements: [
    'Can give and ask for advice on daily routines, work-life balance, and study habits (CEFR A2)',
    'Can use modal verbs of recommendation ("should", "shouldn’t") correctly with base verbs',
    'Can evaluate suggestions and express personal intentions clearly',
  ],
  characters: [
    {
      id: 'char_eleanor_vance',
      name: 'Dr. Eleanor Vance',
      role: 'Academic & Career Wellness Advisor',
      avatar: '💡',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'should',
        ipa: '/ʃʊd/',
        partOfSpeech: 'modal verb',
        meaning: 'Used to indicate what is good or sensible to do (advice/recommendation)',
        exampleSentence: 'You should take regular ten-minute study breaks to stay focused.',
        translations: { hi: 'चाहिए (सलाह देने के लिए)' },
      },
      {
        word: 'overwhelmed',
        ipa: '/ˌəʊvəˈwɛlmd/',
        partOfSpeech: 'adjective',
        meaning: 'Feeling completely overcome by too much work, stress, or emotion',
        exampleSentence: 'I have felt overwhelmed by having five assignment deadlines in one week.',
        translations: { hi: 'अभिभूत / काम के बोझ से दबा हुआ' },
      },
      {
        word: 'why don’t you',
        ipa: '/waɪ dəʊnt juː/',
        partOfSpeech: 'phrase',
        meaning: 'Used to make a friendly, informal suggestion to someone',
        exampleSentence: 'Why don’t you block out two hours every morning for deep focus?',
        translations: { hi: 'आप ऐसा क्यों नहीं करते (सुझाव)' },
      },
      {
        word: 'prioritize',
        ipa: '/praɪˈɒrɪtaɪz/',
        partOfSpeech: 'verb',
        meaning: 'To treat something as more important than other things',
        exampleSentence: 'You should prioritize your eight hours of sleep above late-night studying.',
        translations: { hi: 'प्राथमिकता देना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'You should make a weekly study planner.',
        functionCategory: 'Giving Direct Advice with Should',
        exampleSentence: 'You should drink more water during long study sessions.',
      },
      {
        phrase: 'Why don’t you try the Pomodoro study technique?',
        functionCategory: 'Making a Suggestion (Why don’t you...?)',
        exampleSentence: 'Why don’t you take a short walk before starting work?',
      },
      {
        phrase: 'If I were you, I would set a strict bedtime at 11:00 PM.',
        functionCategory: 'Giving Empathic Advice (If I were you)',
        exampleSentence: 'If I were you, I wouldn’t drink coffee late in the evening.',
      },
      {
        phrase: 'That sounds very sensible, I will give that a try.',
        functionCategory: 'Accepting Advice Politely',
        exampleSentence: 'That’s a helpful recommendation, thank you.',
      },
    ],
    grammar: {
      title: 'Structures for Giving Advice: Should, Shouldn’t, Why Don’t You & If I Were You',
      conceptExplanation:
        '1. Modal Verb "Should / Shouldn\'t": Subject + should/shouldn\'t + Base Verb (NO "to": e.g. "You should sleep", NOT "You should to sleep").\n2. Informal Suggestion: "Why don\'t you + Base Verb...?" (e.g. "Why don\'t you join a study group?").\n3. Empathic Advice (Fixed Second Conditional Idiom): "If I were you, I would + Base Verb" (e.g. "If I were you, I would speak to your supervisor").\n4. Responding to advice: "That\'s a great idea", "I ought to try that", "I hadn\'t thought of that".',
      patternFormula: 'You should / shouldn\'t + [Base Verb] | Why don\'t you + [Base Verb]? | If I were you, I would [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'You should to take a rest.',
          correct: 'You should take a rest. / You ought to take a rest.',
          explanation: '"Should" is followed directly by the base verb without "to".',
        },
        {
          incorrect: 'Why you don’t try digital calendar?',
          correct: 'Why don’t you try using a digital calendar?',
          explanation: 'Standard question inversion: "Why don\'t you + base verb...?"',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Dr. Eleanor Vance',
        text: 'Hello Alex! Welcome to our wellness session. You mentioned in your intake form that you are feeling stressed with exams and job applications. How can I help you today?',
        translation: 'नमस्ते एलेक्स! हमारे वेलनेस सत्र में आपका स्वागत है। आपने अपने फॉर्म में उल्लेख किया था कि आप परीक्षाओं और नौकरी के आवेदनों को लेकर तनाव महसूस कर रहे हैं। आज मैं आपकी क्या मदद कर सकती हूँ?',
      },
      {
        speaker: 'You',
        text: 'Hello Dr. Vance. I feel quite overwhelmed because I am studying late until 2:00 AM every night and waking up exhausted. I really need some advice on how to organize my study schedule and protect my sleep.',
        translation: 'नमस्ते डॉ. वेंस। मैं काफी अभिभूत महसूस कर रहा हूँ क्योंकि मैं हर रात 2:00 बजे तक देर से पढ़ाई कर रहा हूँ और थका हुआ जाग रहा हूँ। मुझे वास्तव में अपनी अध्ययन समय-सारिणी को व्यवस्थित करने और अपनी नींद की रक्षा करने के बारे में कुछ सलाह की आवश्यकता है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_129_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "You ___ (should / should to) take a five-minute break every hour."',
      options: [
        { id: 'opt_1', text: 'should', isCorrect: true },
        { id: 'opt_2', text: 'should to', isCorrect: false },
        { id: 'opt_3', text: 'shoulding', isCorrect: false },
      ],
      correctAnswer: 'should',
      explanation: '"Should" is a modal auxiliary verb followed directly by the bare infinitive (base verb).',
    },
    {
      id: 'cp_a2_129_2',
      type: 'multiple_choice',
      prompt: 'Which pattern is a natural, conversational way to suggest an idea?',
      options: [
        { id: 'opt_1', text: 'Why don’t you set an alarm for 10:30 PM?', isCorrect: true },
        { id: 'opt_2', text: 'Why you not set alarm?', isCorrect: false },
        { id: 'opt_3', text: 'Why don’t to set alarm?', isCorrect: false },
      ],
      correctAnswer: 'Why don’t you set an alarm for 10:30 PM?',
      explanation: '"Why don’t you + base verb" is the correct suggestion pattern.',
    },
    {
      id: 'cp_a2_129_3',
      type: 'multiple_choice',
      prompt: 'How do you say "If I were in your position" politely?',
      options: [
        { id: 'opt_1', text: 'If I were you, I would turn off notifications while studying.', isCorrect: true },
        { id: 'opt_2', text: 'If I am you, I will turn off phone.', isCorrect: false },
        { id: 'opt_3', text: 'If I was you, I must turning off.', isCorrect: false },
      ],
      correctAnswer: 'If I were you, I would turn off notifications while studying.',
      explanation: '"If I were you, I would + base verb" is the standard advice idiom.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_129_1',
      scenarioContext: 'Give advice on late-night screens.',
      prompt: 'Build: "You should not look at screens before sleeping."',
      targetStructure: 'Subject + should + not + base verb + prepositional phrase',
      wordBank: ['You', 'should', 'not', 'look', 'at', 'screens', 'before', 'sleeping', 'to', 'looking', 'ought'],
      acceptableSolutions: [
        'You should not look at screens before sleeping',
        'You should not look at screens before sleeping.',
        'You shouldn\'t look at screens before sleeping.',
      ],
      explanation: 'Negative advice using "should not + base verb".',
    },
    {
      id: 'sc_a2_129_2',
      scenarioContext: 'Suggest the Pomodoro method.',
      prompt: 'Build: "Why don’t you try studying in twenty-five minute blocks?"',
      targetStructure: 'Why + don’t + you + try + gerund phrase',
      wordBank: ['Why', 'don’t', 'you', 'try', 'studying', 'in', 'twenty-five', 'minute', 'blocks', 'did', 'to'],
      acceptableSolutions: [
        'Why don’t you try studying in twenty-five minute blocks',
        'Why don’t you try studying in twenty-five minute blocks?',
        'Why don\'t you try studying in twenty-five minute blocks.',
      ],
      explanation: 'Friendly suggestion formula with "Why don’t you try".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_129_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello Alex, welcome! Please have a seat. You mentioned that balancing your coursework, research papers, and internship applications is making you feel drained and stressed. Could you tell me a bit more about your daily routine?',
      partnerAudioText:
        'Hello Alex, welcome! Please have a seat. You mentioned that balancing your coursework, research papers, and internship applications is making you feel drained and stressed. Could you tell me a bit more about your daily routine?',
      partnerQuestionHindi:
        'नमस्ते एलेक्स, स्वागत है! कृपया बैठिए। आपने उल्लेख किया है कि कोर्सवर्क, शोध पत्रों और इंटर्नशिप आवेदनों में संतुलन बनाना आपको थका हुआ और तनावग्रस्त महसूस करा रहा है। क्या आप मुझे अपनी दैनिक दिनचर्या के बारे में थोड़ा और बता सकते हैं?',
      expectedFunction: 'Describe Stressful Daily Routine & Ask for Practical Advice',
      contextGoal:
        'Explain that you study until 2:00 AM every night, check emails in bed, and wake up exhausted; ask Dr. Vance what changes you should make to your evening habits.',
      targetVocabulary: ['study late until 2:00 AM every night', 'scroll through phone and emails in bed', 'wake up feeling exhausted and unfocused', 'what changes should I make to my schedule?'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'Hello Dr. Vance. I usually study late until 2:00 AM every night and check emails on my phone right before sleeping. As a result, I wake up feeling exhausted and struggle to concentrate. What changes should I make to my evening routine?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Routine Habits (study late / 2:00 AM / phone / emails / in bed / exhausted / tired)',
          patterns: ['study late', '2:00', '2 am', 'night', 'phone', 'emails', 'bed', 'exhausted', 'tired', 'concentrate'],
          required: true,
        },
        {
          name: 'Asking for Advice (what changes should I make / what should I do / advice / recommend)',
          patterns: ['what changes should', 'what should i do', 'advice', 'recommend', 'suggestions', 'help me'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'what_should_i_to_do',
          pattern: /\bwhat should i to do\b/i,
          errorType: 'grammar',
          message: 'Say "What should I do?", not "What should I to do?".',
          correctionPattern: 'What should I do',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_129_1',
        type: 'multiple_choice',
        prompt: 'Which question correctly asks for advice with "should"?',
        options: [
          { id: 'opt_1', text: 'What should I do to improve my evening routine?', isCorrect: true },
          { id: 'opt_2', text: 'What should I to do for my routine?', isCorrect: false },
          { id: 'opt_3', text: 'What I should doing?', isCorrect: false },
        ],
        correctAnswer: 'What should I do to improve my evening routine?',
        explanation: '"What + should + subject + base verb" is the correct inversion.',
      },
    },
    {
      id: 'turn_a2_129_2',
      turnIndex: 2,
      partnerPrompt:
        'Late-night screen light prevents deep sleep. First, you definitely shouldn’t look at your smartphone or laptop in bed. Why don’t you set a digital curfew at 10:30 PM and switch to reading a physical book instead?',
      partnerAudioText:
        'Late-night screen light prevents deep sleep. First, you definitely shouldn’t look at your smartphone or laptop in bed. Why don’t you set a digital curfew at 10:30 PM and switch to reading a physical book instead?',
      partnerQuestionHindi:
        'देर रात स्क्रीन की रोशनी गहरी नींद को रोकती है। सबसे पहले, आपको निश्चित रूप से बिस्तर पर अपने स्मार्टफोन या लैपटॉप को नहीं देखना चाहिए। आप रात 10:30 बजे डिजिटल कर्फ्यू क्यों नहीं लगाते और इसके बजाय एक भौतिक किताब पढ़ना क्यों नहीं शुरू करते?',
      expectedFunction: 'Evaluate Suggestion & Inquire About Time Management Technique',
      contextGoal:
        'Agree that a 10:30 PM screen curfew is a great idea; explain that daytime distractions also cause you to work late; ask if she recommends the Pomodoro technique or time blocking.',
      targetVocabulary: ['setting a 10:30 PM screen curfew is a great idea', 'daytime distractions cause me to postpone work', 'would you recommend time blocking or the Pomodoro method?', 'staying productive during daytime'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'That is a very sensible suggestion—I will set a 10:30 PM screen curfew and read a book instead. During the day, distractions make me postpone my writing. Would you recommend using time blocking or the Pomodoro technique for daily focus?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Accept Advice (sensible / great idea / 10:30 / curfew / book / screen)',
          patterns: ['sensible', 'great idea', '10:30', 'curfew', 'book', 'screen', 'agree', 'try that'],
          required: true,
        },
        {
          name: 'Method Question (pomodoro / time blocking / focus / daytime / distractions / recommend)',
          patterns: ['pomodoro', 'time blocking', 'recommend', 'focus', 'technique', 'daytime', 'distractions'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_129_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "You ___ (shouldn’t / couldn’t not) look at screens in bed."',
        options: [
          { id: 'opt_1', text: 'shouldn’t', isCorrect: true },
          { id: 'opt_2', text: 'couldn’t not', isCorrect: false },
          { id: 'opt_3', text: 'should not to', isCorrect: false },
        ],
        correctAnswer: 'shouldn’t',
        explanation: 'Use "shouldn’t + base verb" for negative advice.',
      },
    },
    {
      id: 'turn_a2_129_3',
      turnIndex: 3,
      partnerPrompt:
        'If I were you, I would combine both! Use time-blocking on Google Calendar for your two most important tasks in the morning, and apply the Pomodoro technique—25 minutes of deep focus followed by a 5-minute walk. What about physical exercise? Are you finding any time for movement during the week?',
      partnerAudioText:
        'If I were you, I would combine both! Use time-blocking on Google Calendar for your two most important tasks in the morning, and apply the Pomodoro technique—25 minutes of deep focus followed by a 5-minute walk. What about physical exercise? Are you finding any time for movement during the week?',
      partnerQuestionHindi:
        'यदि मैं आपकी जगह होती, तो मैं दोनों को जोड़ती! सुबह अपने दो सबसे महत्वपूर्ण कार्यों के लिए गूगल कैलेंडर पर टाइम-ब्लॉकिंग का उपयोग करें, और पोमोडोरो तकनीक लागू करें—25 मिनट का गहरा ध्यान जिसके बाद 5 मिनट की पैदल दूरी हो। शारीरिक व्यायाम के बारे में क्या? क्या आपको सप्ताह के दौरान आंदोलन के लिए कोई समय मिल रहा है?',
      expectedFunction: 'Describe Exercise Routine & Express Intent with "Ought to / Should"',
      contextGoal:
        'Acknowledge that you haven’t exercised recently because of busy deadlines; state that you should go for a 30-minute jog along the river three mornings a week.',
      targetVocabulary: ['haven’t exercised for the last month', 'I should definitely go for a 30-minute jog by the river', 'morning exercise will give me more energy', 'ought to prioritize physical health'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'To be honest, I haven’t exercised for the past month because I felt too busy. I should definitely start jogging along the river for thirty minutes on Monday, Wednesday, and Friday mornings. Getting fresh air will boost my energy levels.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Exercise State (haven’t exercised / past month / busy / sedentary)',
          patterns: ['haven’t exercised', 'not exercised', 'past month', 'busy', 'exercise', 'movement'],
          required: true,
        },
        {
          name: 'Should Action (should jog / running / river / 30 minutes / mornings / walk / fresh air)',
          patterns: ['should', 'jog', 'running', 'river', '30 minutes', 'mornings', 'walk', 'fresh air', 'energy', 'ought to'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_129_3',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly expresses personal obligation/recommendation?',
        options: [
          { id: 'opt_1', text: 'I ought to exercise three times a week.', isCorrect: true },
          { id: 'opt_2', text: 'I ought exercise three times.', isCorrect: false },
          { id: 'opt_3', text: 'I should to exercise three times.', isCorrect: false },
        ],
        correctAnswer: 'I ought to exercise three times a week.',
        explanation: '"Ought" is followed by "to + base verb", while "should" is followed by bare base verb.',
      },
    },
    {
      id: 'turn_a2_129_4',
      turnIndex: 4,
      partnerPrompt:
        'Morning jogs along the river are wonderful for mental clarity! Let’s summarize your new weekly plan: 10:30 PM digital curfew, morning time-blocking with Pomodoro, and three morning jogs. Let’s meet again in three weeks to review your progress. You can do this!',
      partnerAudioText:
        'Morning jogs along the river are wonderful for mental clarity! Let’s summarize your new weekly plan: 10:30 PM digital curfew, morning time-blocking with Pomodoro, and three morning jogs. Let’s meet again in three weeks to review your progress. You can do this!',
      partnerQuestionHindi:
        'नदी के किनारे सुबह की जॉगिंग मानसिक स्पष्टता के लिए अद्भुत है! आइए आपकी नई साप्ताहिक योजना का सारांश दें: रात 10:30 बजे डिजिटल कर्फ्यू, पोमोडोरो के साथ सुबह का टाइम-ब्लॉकिंग, और तीन सुबह की जॉगिंग। आपकी प्रगति की समीक्षा के लिए आइए तीन सप्ताह में फिर से मिलें। आप यह कर सकते हैं!',
      expectedFunction: 'Affirm Plan, Express Gratitude & Conclude Advising Session',
      contextGoal:
        'Thank Dr. Vance for the actionable advice and encouragement; confirm that you will implement the plan starting tonight and look forward to the follow-up meeting in three weeks.',
      targetVocabulary: ['thank you Dr. Vance for the clear and encouraging advice', 'will start the digital curfew tonight', 'look forward to our follow-up in three weeks', 'feeling much more positive'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'Thank you so much Dr. Vance for the encouraging and practical advice! I will start the 10:30 PM screen curfew tonight and set up my morning time blocks tomorrow. I look forward to our follow-up session in three weeks. Have a great day!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Commitment (thank you / dr vance / practical / advice / start tonight / curfew / follow-up / three weeks)',
          patterns: ['thank you', 'thanks', 'dr vance', 'advice', 'tonight', 'curfew', 'time blocks', 'follow-up', 'three weeks', 'have a great day'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_129_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I look forward to our follow-up session ___ (in / on) three weeks."',
        options: [
          { id: 'opt_1', text: 'in', isCorrect: true },
          { id: 'opt_2', text: 'on', isCorrect: false },
          { id: 'opt_3', text: 'at', isCorrect: false },
        ],
        correctAnswer: 'in',
        explanation: 'Use "in" with future time spans ("in three weeks").',
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
