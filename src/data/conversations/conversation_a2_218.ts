import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_218: ConversationDefinition = {
  id: 'conv_a2_218',
  title: 'Learning Goals, Plans & Personal Development',
  cefr: 'A2',
  unitId: 'unit_a2_15',
  lessonLinks: ['lesson_a2_15_218'],
  estimatedMinutes: 5,
  scenario:
    'You are in the university career and student development centre with advisor Chloe. You are mapping out your personal learning roadmap for the upcoming year, setting clear milestones (completing A2, giving presentations, passing certification tests), and articulating your future aspirations using "aim to", "plan to", and "am going to".',
  communicativeGoals: [
    'Express future intentions, learning goals, and roadmaps using "aim to", "plan to", "hope to", and "be going to"',
    'Talk about academic and career milestones in clear, simple A2 English',
    'Explain the practical action steps you will take to achieve your aspirations',
    'Ask for advisor feedback on your timeline and realistic weekly commitments',
  ],
  canDoStatements: [
    'Can express personal and academic goals using intention verbs (aim to, plan to, be going to)',
    'Can outline key milestones and deadlines in a learning plan',
    'Can discuss future personal development plans with an advisor or peer',
  ],
  characters: [
    {
      id: 'char_chloe_advisor',
      name: 'Chloe',
      role: 'Career & Development Advisor',
      avatar: '🌟',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'milestone',
        ipa: '/ˈmaɪlstəʊn/',
        partOfSpeech: 'noun',
        meaning: 'A significant stage or event in the development of something',
        exampleSentence: 'Completing our A2 curriculum is a major milestone.',
        translations: { hi: 'मील का पत्थर / महत्वपूर्ण पड़ाव (माइलस्टोन)' },
      },
      {
        word: 'aspiration',
        ipa: '/ˌæspəˈreɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'A hope, ambition, or strong desire of achieving something',
        exampleSentence: 'My aspiration is to work in international technology projects.',
        translations: { hi: 'आकांक्षा / उच्च लक्ष्य (एस्पिरेशन)' },
      },
      {
        word: 'roadmap',
        ipa: '/ˈrəʊdmæp/',
        partOfSpeech: 'noun',
        meaning: 'A plan or strategy intended to guide progress toward a goal',
        exampleSentence: 'We created a six-month learning roadmap for language fluency.',
        translations: { hi: 'कार्ययोजना / रूपरेखा (रोडमैप)' },
      },
      {
        word: 'commitment',
        ipa: '/kəˈmɪtmənt/',
        partOfSpeech: 'noun',
        meaning: 'An engagement or obligation that restricts freedom of action; dedication',
        exampleSentence: 'Studying thirty minutes every morning requires strong commitment.',
        translations: { hi: 'प्रतिबद्धता / समर्पण (कमिटमेंट)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I aim to reach full A2 conversational fluency by the end of this term.',
        functionCategory: 'Stating a specific goal with aim to',
        exampleSentence: 'I plan to take the international English exam next summer.',
      },
      {
        phrase: 'My first milestone is to deliver a five-minute presentation in English.',
        functionCategory: 'Setting a concrete milestone',
        exampleSentence: 'My next milestone is reading an entire chapter book.',
      },
      {
        phrase: 'How can I ensure my weekly study plan remains realistic?',
        functionCategory: 'Asking for advisor feedback on planning',
        exampleSentence: 'What timeline would you suggest for this goal?',
      },
      {
        phrase: 'I am going to dedicate five hours each week to active speaking practice.',
        functionCategory: 'Stating actionable commitments with be going to',
        exampleSentence: 'I am going to review my flashcards every morning.',
      },
    ],
    grammar: {
      title: 'Verbs of Intention & Future Commitment: Aim to / Plan to / Be going to',
      conceptExplanation:
        '1. "Aim to + Base Verb" (formal/structured goal):\n   - "I aim to complete the course by June."\n2. "Plan to + Base Verb" (organized intention):\n   - "I plan to join an English debate club."\n3. "Be going to + Base Verb" (definite future plan):\n   - "I am going to study abroad next semester."\n4. "Hope to + Base Verb" (future desire):\n   - "I hope to work in London one day."',
      patternFormula: 'I [aim to / plan to / am going to] + [Base Verb] + by [Target date/timeframe]',
      contrastExamples: [
        {
          incorrect: 'I aim to achieving fluency.',
          correct: 'I aim to achieve fluency.',
          explanation: '"Aim to", "plan to", and "hope to" are followed by the base infinitive verb.',
        },
        {
          incorrect: 'I am plan to study abroad.',
          correct: 'I plan to study abroad. / I am planning to study abroad.',
          explanation: 'Do not combine "am" with base "plan to".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Chloe',
        text: 'Welcome to our goal-setting session! Looking ahead to this semester, what is your primary learning goal?',
        translation: 'हमारे लक्ष्य-निर्धारण सत्र में आपका स्वागत है! इस सेमेस्टर को देखते हुए, आपका प्राथमिक शिक्षण लक्ष्य क्या है?',
      },
      {
        speaker: 'Learner',
        text: 'Hi Chloe! I aim to achieve full A2 conversational fluency and plan to practice speaking every single day.',
        translation: 'नमस्ते क्लोई! मेरा लक्ष्य पूर्ण A2 संवादात्मक प्रवाह हासिल करना है और मैं हर दिन बोलने का अभ्यास करने की योजना बना रहा हूँ।',
      },
      {
        speaker: 'Chloe',
        text: 'That is a fantastic aspiration! What specific milestones have you set to track your progress?',
        translation: 'यह एक शानदार आकांक्षा है! अपनी प्रगति को ट्रैक करने के लिए आपने कौन से विशिष्ट मील के पत्थर निर्धारित किए हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_218_1',
      type: 'fill_blank',
      prompt: 'Complete with the correct verb form: "I aim ______ (to complete / completing / to completed) the syllabus by May."',
      options: [
        { id: 'opt_1', text: 'to complete', isCorrect: true },
        { id: 'opt_2', text: 'completing', isCorrect: false },
        { id: 'opt_3', text: 'to completed', isCorrect: false },
      ],
      correctAnswer: 'to complete',
      explanation: '"aim to" takes base infinitive "to complete".',
    },
    {
      id: 'cp_218_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly formulates a future intention?',
      options: [
        { id: 'opt_1', text: 'I plan to give a five-minute presentation in English next month.', isCorrect: true },
        { id: 'opt_2', text: 'I am plan to give a five-minute presentation next month.', isCorrect: false },
        { id: 'opt_3', text: 'I plan giving a five-minute presentation next month.', isCorrect: false },
      ],
      correctAnswer: 'I plan to give a five-minute presentation in English next month.',
      explanation: '"plan to + base verb" is the correct pattern.',
    },
    {
      id: 'cp_218_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [I am going to / every morning / dedicate thirty minutes / to vocabulary practice]',
      correctAnswer: 'I am going to dedicate thirty minutes to vocabulary practice every morning',
      explanation: 'Subject + be going to + base verb + object + frequency.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_218_1',
      prompt: 'Construct a sentence stating that you aim to deliver a short presentation in English by the end of the term.',
      scenarioContext: 'Explaining your semester milestone to Chloe.',
      targetStructure: 'I aim to deliver a short presentation in English by the end of the semester.',
      wordBank: ['I aim to deliver', 'a short presentation', 'in English', 'by the end of the semester,', 'Chloe.'],
      acceptableSolutions: [
        'I aim to deliver a short presentation in English by the end of the semester.',
        'I aim to deliver a presentation in English by the end of the term.',
      ],
      explanation: 'Milestone formulation with "I aim to deliver...".',
    },
    {
      id: 'sc_218_2',
      prompt: 'Construct a sentence asking Chloe if she thinks your weekly study commitment of four hours is realistic.',
      scenarioContext: 'Asking your advisor for feedback on your study schedule.',
      targetStructure: 'Do you think my goal of studying four hours each week is realistic, Chloe?',
      wordBank: ['Do you think my goal', 'of studying four hours', 'each week is realistic,', 'Chloe?', 'for the course'],
      acceptableSolutions: [
        'Do you think my goal of studying four hours each week is realistic, Chloe?',
        'Do you think studying four hours a week is realistic, Chloe?',
      ],
      explanation: 'Asking for feedback on study goals.',
    },
  ],
  turns: [
    {
      id: 'turn_218_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello! Welcome to the personal development workshop. I am Chloe. Setting clear, achievable goals is the foundation of rapid learning. Looking at the next six months, what main goal do you aim to achieve in your language studies?',
      partnerAudioText:
        'Hello! Welcome to the personal development workshop. I am Chloe. Setting clear, achievable goals is the foundation of rapid learning. Looking at the next six months, what main goal do you aim to achieve in your language studies?',
      partnerQuestionHindi:
        'नमस्ते! व्यक्तिगत विकास कार्यशाला में आपका स्वागत है। मैं क्लोई हूँ। स्पष्ट, प्राप्त करने योग्य लक्ष्य निर्धारित करना तेजी से सीखने की नींव है। अगले छह महीनों को देखते हुए, आप अपने भाषा अध्ययन में क्या मुख्य लक्ष्य प्राप्त करना चाहते हैं?',
      expectedFunction: 'Stating a clear learning goal using "aim to" or "plan to" with a timeframe',
      contextGoal: 'State your goal (e.g. aiming to achieve full A2 conversational fluency, plan to speak confidently in everyday situations)',
      targetVocabulary: ['aim to', 'achieve', 'fluency', 'plan to', 'conversations', 'months', 'Chloe', 'hello'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello Chloe! I aim to achieve full A2 conversational fluency and plan to speak confidently in everyday campus situations.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi Chloe. Over the next six months, I plan to master all A2 grammar concepts and hold 10-minute conversations without hesitation.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Hi Chloe! My main aspiration is achieving spontaneous conversational fluency so I can participate actively in international student seminars.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_advisor',
          patterns: ['hello', 'hi', 'chloe', 'good morning'],
          required: true,
        },
        {
          name: 'intention_verb',
          patterns: ['aim to', 'plan to', 'hope to', 'going to', 'aspiration'],
          required: true,
        },
        {
          name: 'goal_content',
          patterns: ['achieve', 'fluency', 'conversations', 'grammar', 'confidence', 'master', 'seminars'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_218_1_aim_ing',
          pattern: /aim to achieving/i,
          errorType: 'grammar',
          message: 'Use base verb after "aim to": "I aim to achieve fluency."',
          correctionPattern: 'I aim to achieve full A2 fluency.',
        },
      ],
      remediationPractice: {
        id: 'rem_218_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I aim to ______ (achieve) fluency."',
        options: [
          { id: 'r1', text: 'achieve', isCorrect: true },
          { id: 'r2', text: 'achieving', isCorrect: false },
        ],
        correctAnswer: 'achieve',
        explanation: 'Base verb after "aim to".',
      },
    },
    {
      id: 'turn_218_2',
      turnIndex: 2,
      partnerPrompt:
        'A2 conversational fluency is an inspiring target! To make this goal manageable, we need stepping stones. What is the very first milestone you are going to complete in the next 30 days?',
      partnerAudioText:
        'A2 conversational fluency is an inspiring target! To make this goal manageable, we need stepping stones. What is the very first milestone you are going to complete in the next 30 days?',
      partnerQuestionHindi:
        'A2 संवादात्मक प्रवाह एक प्रेरक लक्ष्य है! इस लक्ष्य को प्रबंधनीय बनाने के लिए, हमें छोटे कदमों की आवश्यकता है। अगले 30 दिनों में आप कौन सा पहला मील का पत्थर (milestone) पूरा करने जा रहे हैं?',
      expectedFunction: 'Describing a short-term milestone using "am going to" or "first milestone is..."',
      contextGoal: 'Explain your 30-day milestone (e.g. deliver a 3-minute spoken presentation, learn 150 core words, or pass unit progress check)',
      targetVocabulary: ['first milestone', 'am going to', 'deliver', 'presentation', 'vocabulary', 'thirty days', 'practice'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'My first milestone is to deliver a three-minute presentation in English and learn 150 new topic words in the next thirty days.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'In the next 30 days, I am going to finish Unit 15 with top scores and practice speaking with my language partner every week.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'My immediate milestone is giving a short oral summary in class and completing 20 active dialogue sessions on the academy app.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'milestone_expression',
          patterns: ['first milestone', 'milestone', 'going to', 'plan to', 'aim to', 'immediate'],
          required: true,
        },
        {
          name: 'actionable_milestone',
          patterns: ['presentation', 'words', 'vocabulary', 'thirty days', 'finish', 'unit', 'speaking', 'summary', 'dialogue'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_218_2_vague',
          pattern: /^i study more\.$/i,
          errorType: 'structure',
          message: 'Be specific: "My first milestone is to deliver a short presentation in English within 30 days."',
          correctionPattern: 'My first milestone is to deliver a short presentation.',
        },
      ],
      remediationPractice: {
        id: 'rem_218_2',
        type: 'multiple_choice',
        prompt: 'Which sentence states a clear 30-day milestone?',
        options: [
          { id: 'r1', text: 'My first milestone is to deliver a 3-minute presentation within 30 days.', isCorrect: true },
          { id: 'r2', text: 'I want good English later.', isCorrect: false },
        ],
        correctAnswer: 'My first milestone is to deliver a 3-minute presentation within 30 days.',
        explanation: 'Concrete, measurable, and time-bound milestone.',
      },
    },
    {
      id: 'turn_218_3',
      turnIndex: 3,
      partnerPrompt:
        'A three-minute spoken presentation is a brilliant concrete milestone! Now let’s look at your weekly routine. How many hours a week are you going to dedicate, and what questions do you have about keeping your motivation high?',
      partnerAudioText:
        'A three-minute spoken presentation is a brilliant concrete milestone! Now let’s look at your weekly routine. How many hours a week are you going to dedicate, and what questions do you have about keeping your motivation high?',
      partnerQuestionHindi:
        'तीन मिनट की मौखिक प्रस्तुति एक शानदार ठोस मील का पत्थर है! अब आइए अपनी साप्ताहिक दिनचर्या को देखें। आप प्रति सप्ताह कितने घंटे समर्पित करने जा रहे हैं, और अपनी प्रेरणा बनाए रखने के बारे में आपके क्या प्रश्न हैं?',
      expectedFunction: 'Stating weekly study commitment and asking Chloe for motivation/tracking tips',
      contextGoal: 'State your weekly commitment (e.g. 4 to 5 hours a week) and ask Chloe how she recommends tracking daily habits or maintaining motivation',
      targetVocabulary: ['dedicate', 'hours each week', 'routine', 'How do you recommend', 'motivation', 'track', 'Chloe'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I am going to dedicate four to five hours each week. How do you recommend tracking my daily habits to stay motivated, Chloe?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I plan to study for 45 minutes every weekday. What is your best advice for staying consistent when coursework gets heavy?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I’m committing to five focused hours per week. Do you recommend using a visual habit tracker or a study buddy system to maintain momentum?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'time_commitment',
          patterns: ['hours', 'dedicate', 'plan to study', 'minutes', 'week', 'weekday'],
          required: true,
        },
        {
          name: 'motivation_question',
          patterns: ['how do you recommend', 'what is your advice', 'do you recommend', 'motivation', 'habits', 'track', 'consistent', 'chloe'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_218_3_no_question',
          pattern: /^i study 5 hours\.$/i,
          errorType: 'interaction',
          message: 'Remember to ask Chloe: "How do you recommend tracking daily study habits, Chloe?"',
          correctionPattern: 'I will dedicate five hours. How do you recommend tracking my habits, Chloe?',
        },
      ],
      remediationPractice: {
        id: 'rem_218_3',
        type: 'fill_blank',
        prompt: 'Fill in: "I am going to ______ (dedicate) five hours each week."',
        options: [
          { id: 'r1', text: 'dedicate', isCorrect: true },
          { id: 'r2', text: 'dedicating', isCorrect: false },
        ],
        correctAnswer: 'dedicate',
        explanation: 'Base verb after "am going to".',
      },
    },
    {
      id: 'turn_218_4',
      turnIndex: 4,
      partnerPrompt:
        'A visual habit calendar on your wall works wonders! Every time you finish your daily 30 minutes, put a green tick on the chart. Seeing a continuous streak of 20 ticks builds unstoppable momentum! Shall we print out your goal roadmap now?',
      partnerAudioText:
        'A visual habit calendar on your wall works wonders! Every time you finish your daily 30 minutes, put a green tick on the chart. Seeing a continuous streak of 20 ticks builds unstoppable momentum! Shall we print out your goal roadmap now?',
      partnerQuestionHindi:
        'आपकी दीवार पर एक विजुअल हैबिट कैलेंडर चमत्कार कर सकता है! हर बार जब आप अपने दैनिक 30 मिनट समाप्त करते हैं, तो चार्ट पर एक हरा टिक लगाएं। 20 टिक्स की निरंतर लकीर देखना अजेय गति बनाता है! क्या हम अब आपका लक्ष्य रोडमैप प्रिंट करें?',
      expectedFunction: 'Agreeing to print the roadmap, thanking Chloe for the strategy, and expressing confidence',
      contextGoal: 'Agree enthusiastically to print the goal roadmap, thank Chloe for the visual calendar idea, and confirm you feel ready',
      targetVocabulary: ['Yes please', 'print', 'roadmap', 'habit calendar', 'thank you', 'Chloe', 'momentum', 'ready'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Yes please! The habit calendar idea is brilliant. Let’s print out my goal roadmap now. Thank you so much, Chloe!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'That sounds perfect! I love the green tick streak method. Thanks for helping me organize my roadmap today, Chloe.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Yes, let’s print it! Having this written roadmap on my desk will keep me accountable every day. Thank you for your inspiring guidance, Chloe!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'enthusiastic_acceptance',
          patterns: ['yes please', 'sounds perfect', 'let’s print', 'yes', 'print'],
          required: true,
        },
        {
          name: 'gratitude_and_advisor',
          patterns: ['thank you', 'thanks', 'chloe', 'roadmap', 'calendar', 'guidance', 'accountable'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_218_4_short',
          pattern: /^(yes|ok)$/i,
          errorType: 'interaction',
          message: 'Respond with enthusiasm: "Yes please! Let’s print the roadmap. Thank you, Chloe!"',
          correctionPattern: 'Yes please! Thank you very much for your help, Chloe.',
        },
      ],
      remediationPractice: {
        id: 'rem_218_4',
        type: 'multiple_choice',
        prompt: 'Which sentence provides an enthusiastic and polite wrap-up?',
        options: [
          { id: 'r1', text: 'Yes please! The visual calendar idea is great. Thank you so much, Chloe!', isCorrect: true },
          { id: 'r2', text: 'Print it now bye.', isCorrect: false },
        ],
        correctAnswer: 'Yes please! The visual calendar idea is great. Thank you so much, Chloe!',
        explanation: 'Enthusiastic, polite, and responsive.',
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
