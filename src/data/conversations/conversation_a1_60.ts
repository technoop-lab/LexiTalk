import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_60: ConversationDefinition = {
  id: 'conv_a1_60',
  title: 'A1 Comprehensive Capstone, Fluency Checkpoint & Graduation!',
  cefr: 'A1',
  unitId: 'unit_a1_4',
  lessonLinks: ['lesson_a1_4_60'],
  estimatedMinutes: 6,
  scenario:
    'You attend your official CEFR A1 English Graduation & Fluency Assessment interview with senior examiner Professor Thomas in London. In this comprehensive capstone conversation, you demonstrate complete A1 communicative competency: introducing yourself and your background, describing your daily routines and hobbies, narrating a past memorable life milestone, and stating your future career and language learning ambitions.',
  communicativeGoals: [
    'Introduce yourself comprehensively: name, origins, profession, family background, and current city (Lessons 1–15 synthesis)',
    'Describe typical daily routines, work habits, food preferences, and weekend leisure hobbies with frequency adverbs (Lessons 16–30 & 46–56 synthesis)',
    'Narrate a past memorable milestone, trip, or achievement using Past Simple regular and irregular verbs (Lessons 31–45 & 53, 59 synthesis)',
    'Express future plans, intentions, and learning goals using "be going to" and "will" (Lessons 54, 55, 60 synthesis)',
  ],
  canDoStatements: [
    'Can communicate fluently across all foundational CEFR A1 communicative domains (CEFR A1 Mastery)',
    'Can seamlessly switch between Present Simple, Present Continuous, Past Simple, and Future expressions',
    'Can ask reciprocal questions and engage in natural, spontaneous spoken English dialogues with minimal scaffolding',
  ],
  characters: [
    {
      id: 'char_prof_thomas_examiner',
      name: 'Professor Thomas',
      role: 'Senior Language Examiner & Graduation Mentor',
      avatar: '🎓',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'capstone',
        ipa: '/ˈkæpstoʊn/',
        partOfSpeech: 'noun',
        meaning: 'A crowning achievement, final milestone, or culminating assessment project',
        exampleSentence: 'This graduation conversation represents your complete CEFR A1 capstone.',
        translations: { hi: 'शिखर उपलब्धि / अंतिम समापन' },
      },
      {
        word: 'competency',
        ipa: '/ˈkɒmpɪtənsi/',
        partOfSpeech: 'noun',
        meaning: 'The ability to do something successfully or efficiently',
        exampleSentence: 'You have achieved full spoken English competency across all A1 topics.',
        translations: { hi: 'दक्षता / योग्यता' },
      },
      {
        word: 'graduation',
        ipa: '/ˌɡrædʒuˈeɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'The receiving or conferring of an academic degree or diploma, or the completion of a curriculum stage',
        exampleSentence: 'Congratulations on reaching your A1 English graduation checkpoint!',
        translations: { hi: 'दीक्षांत / स्नातक स्तर समापन' },
      },
      {
        word: 'fluency',
        ipa: '/ˈfluːənsi/',
        partOfSpeech: 'noun',
        meaning: 'The quality or condition of being able to speak or write a language easily, smoothly, and accurately',
        exampleSentence: 'Your speaking fluency and confidence have improved tremendously.',
        translations: { hi: 'प्रवाह / बोलने की सहजता' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I was born in... and I currently live in...',
        functionCategory: 'Comprehensive Profile',
        exampleSentence: 'I was born in Jaipur and I currently live and work in London.',
      },
      {
        phrase: 'On typical weekdays, I usually...',
        functionCategory: 'Daily Habits & Routines',
        exampleSentence: 'On typical weekdays, I usually wake up at seven and study English.',
      },
      {
        phrase: 'Last year, a major milestone was...',
        functionCategory: 'Past Narrative Integration',
        exampleSentence: 'Last year, a major milestone was graduating and starting my new role.',
      },
      {
        phrase: 'In the near future, I am going to...',
        functionCategory: 'Future Ambition Integration',
        exampleSentence: 'In the near future, I am going to master A2 English and travel internationally.',
      },
    ],
    grammar: {
      title: 'Grand A1 Multi-Tense Synthesis: Present Simple + Present Continuous + Past Simple + Future (going to / will)',
      conceptExplanation:
        'Demonstrate mastery across all core A1 grammar structures: Present Simple (habits, facts: "I live", "I work"), Present Continuous (current actions: "I am studying"), Past Simple (completed life events: "I grew up", "I visited"), and Future (intentions: "I am going to achieve").',
      patternFormula: 'Present: I live / work / enjoy | Past: I was born / graduated / traveled | Future: I am going to master A2',
      contrastExamples: [
        {
          incorrect: 'I am live in London and yesterday I go to park and tomorrow I am study.',
          correct: 'I live in London. Yesterday I went to the park, and tomorrow I am going to study.',
          explanation: 'Maintain precise tense distinction across Present, Past, and Future.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Professor Thomas',
        text: 'Good day! Welcome to your CEFR A1 Capstone Interview. You have completed 60 foundational lessons! Let us begin: could you give me a comprehensive introduction of yourself, your background, and what you do?',
        translation: 'शुभ दिन! आपके CEFR A1 कैपस्टोन साक्षात्कार में आपका स्वागत है। आपने 60 बुनियादी पाठ पूरे कर लिए हैं! आइए शुरू करें: क्या आप मुझे अपना, अपनी पृष्ठभूमि और अपने काम का व्यापक परिचय दे सकते हैं?',
      },
      {
        speaker: 'You',
        text: 'Good day Professor Thomas! My name is Alex. I was born in Jaipur, but I grew up in New Delhi. I currently live in London and work as a software designer. In my free time, I love playing acoustic guitar and painting landscapes.',
        translation: 'शुभ दिन प्रोफेसर थॉमस! मेरा नाम एलेक्स है। मेरा जन्म जयपुर में हुआ था, लेकिन मैं नई दिल्ली में पला-बढ़ा। मैं वर्तमान में लंदन में रहता हूँ और एक सॉफ्टवेयर डिजाइनर के रूप में काम करता हूँ। अपने खाली समय में, मुझे अकौस्टिक गिटार बजाना और परिदृश्य पेंटिंग करना बहुत पसंद है।',
      },
      {
        speaker: 'Professor Thomas',
        text: 'Splendid introduction! Now tell me about a typical day in your life, and what you do on weekends.',
        translation: 'शानदार परिचय! अब मुझे अपने जीवन के एक सामान्य दिन के बारे में बताएं, और आप सप्ताहांत में क्या करते हैं।',
      },
      {
        speaker: 'You',
        text: 'On weekdays, I wake up at 7 AM, drink green tea, and work from 9 to 5. On weekends, I usually play badminton with friends, visit local markets, and cook fresh meals.',
        translation: 'सप्ताह के दिनों में, मैं सुबह 7 बजे उठता हूँ, ग्रीन टी पीता हूँ, और 9 से 5 बजे तक काम करता हूँ। सप्ताहांत में, मैं आमतौर पर दोस्तों के साथ बैडमिंटन खेलता हूँ, स्थानीय बाजारों का दौरा करता हूँ, और ताज़ा खाना बनाता हूँ।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_60_1',
      type: 'fill_blank',
      prompt: 'Complete the tense synthesis: "I currently ___ in London, but last year I ___ in Delhi."',
      options: [
        { id: 'opt_1', text: 'live / lived', isCorrect: true },
        { id: 'opt_2', text: 'lived / live', isCorrect: false },
        { id: 'opt_3', text: 'living / lives', isCorrect: false },
      ],
      correctAnswer: 'live / lived',
      explanation: 'Present Simple "live" with "currently", Past Simple "lived" with "last year".',
    },
    {
      id: 'cp_a1_60_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly bridges Past narrative and Future intention?',
      options: [
        { id: 'opt_1', text: 'Last year I graduated from university, and next month I am going to start A2 level.', isCorrect: true },
        { id: 'opt_2', text: 'Last year I graduate university and next month I am start A2.', isCorrect: false },
        { id: 'opt_3', text: 'Yesterday I will graduate and tomorrow I went to A2.', isCorrect: false },
      ],
      correctAnswer: 'Last year I graduated from university, and next month I am going to start A2 level.',
      explanation: 'Accurate pairing of Past Simple "graduated" and Future "am going to start".',
    },
    {
      id: 'cp_a1_60_3',
      type: 'multiple_choice',
      prompt: 'Choose the sentence demonstrating full A1 capstone communicative fluency:',
      options: [
        { id: 'opt_1', text: 'I enjoy studying languages because it helps me connect with people across the world.', isCorrect: true },
        { id: 'opt_2', text: 'I am enjoy study language because connecting world.', isCorrect: false },
        { id: 'opt_3', text: 'Language is study to me very nice.', isCorrect: false },
      ],
      correctAnswer: 'I enjoy studying languages because it helps me connect with people across the world.',
      explanation: 'Syntactically complete, natural, and accurate A1 fluency statement.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_60_1',
      scenarioContext: 'Summarize your complete profile in one structured statement.',
      prompt: 'Build: "I live in London and I work as a designer."',
      targetStructure: 'Subject + live in [City] + and + subject + work as a [Profession]',
      wordBank: ['I', 'live', 'in', 'London', 'and', 'I', 'work', 'as', 'a', 'designer', 'living', 'working'],
      acceptableSolutions: [
        'I live in London and I work as a designer',
        'I live in London and I work as a designer.',
      ],
      explanation: 'Core personal summary statement.',
    },
    {
      id: 'sc_a1_60_2',
      scenarioContext: 'Express your future ambition upon completing A1 level.',
      prompt: 'Build: "I am going to achieve complete fluency in English."',
      targetStructure: 'Subject + am going to + base verb + noun phrase',
      wordBank: ['I', 'am', 'going', 'to', 'achieve', 'complete', 'fluency', 'in', 'English', 'achieving', 'will'],
      acceptableSolutions: [
        'I am going to achieve complete fluency in English',
        'I am going to achieve complete fluency in English.',
      ],
      explanation: 'Future goal statement using "be going to".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_60_1',
      turnIndex: 1,
      partnerPrompt:
        'Good day! Welcome to your official CEFR A1 Capstone Interview. You have completed 60 foundational lessons! Let us begin: could you introduce yourself fully—including your name, where you were born, where you live now, and your profession?',
      partnerAudioText:
        'Good day! Welcome to your official CEFR A1 Capstone Interview. You have completed 60 foundational lessons! Let us begin: could you introduce yourself fully—including your name, where you were born, where you live now, and your profession?',
      partnerQuestionHindi:
        'शुभ दिन! आपके आधिकारिक CEFR A1 कैपस्टोन साक्षात्कार में आपका स्वागत है। आपने 60 बुनियादी पाठ पूरे कर लिए हैं! आइए शुरू करें: क्या आप अपना पूरा परिचय दे सकते हैं—जिसमें आपका नाम, आप कहाँ पैदा हुए थे, अब कहाँ रहते हैं और आपका पेशा शामिल है?',
      expectedFunction: 'Deliver Comprehensive Self-Introduction (Name, Origin, Location, Profession)',
      contextGoal:
        'Introduce yourself confidently with full sentences: name, birthplace/childhood, current city, and profession.',
      targetVocabulary: ['good day Professor Thomas', 'my name is', 'was born in', 'grew up in', 'currently live in', 'work as'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Good day Professor Thomas! My name is Alex. I was born in Jaipur in 1999, but I grew up in New Delhi. I currently live in London and work as a software designer, which I truly enjoy.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Good day! My name is Alex. I was born in Jaipur and grew up in Delhi. I now live in London and work as a designer.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Hello! I’m Alex. I was born in India, currently live in London, and work in design.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Self-Introduction Elements',
          patterns: [
            'my name is',
            'i am',
            'was born',
            'live in',
            'work as',
            'designer',
            'engineer',
            'student',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'i_born_in_error',
          pattern: /\bi born in\b/i,
          errorType: 'grammar',
          message: 'Say "I was born in...", with "was".',
          correctionPattern: 'I was born in',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_60_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "I currently ___ in Manchester."',
        options: [
          { id: 'opt_1', text: 'live', isCorrect: true },
          { id: 'opt_2', text: 'lives', isCorrect: false },
          { id: 'opt_3', text: 'living', isCorrect: false },
        ],
        correctAnswer: 'live',
        explanation: 'Subject "I" takes base verb "live" in Present Simple.',
      },
    },
    {
      id: 'turn_a1_60_2',
      turnIndex: 2,
      partnerPrompt:
        'Excellent! Now, walk me through your daily life: what is your typical weekday routine from morning to evening, and how do you spend your leisure time on weekends?',
      partnerAudioText:
        'Excellent! Now, walk me through your daily life: what is your typical weekday routine from morning to evening, and how do you spend your leisure time on weekends?',
      partnerQuestionHindi:
        'उत्कृष्ट! अब, मुझे अपने दैनिक जीवन के बारे में बताएं: सुबह से शाम तक आपका विशिष्ट कार्यदिवस दिनचर्या क्या है, और आप सप्ताहांत पर अपना खाली समय कैसे बिताते हैं?',
      expectedFunction: 'Describe Daily Routine & Weekend Hobbies with Frequency Adverbs',
      contextGoal:
        'Describe your daily routine (wake up at 7, work, evening study) and weekend hobbies (guitar, sports, cooking).',
      targetVocabulary: ['usually wake up at 7', 'in the morning', 'work from 9 to 5', 'in my free time', 'on weekends', 'play guitar'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'On typical weekdays, I usually wake up at seven o\'clock, have breakfast, and work from nine to five. In the evenings, I study English for forty-five minutes. On weekends, I love playing acoustic guitar and cooking fresh meals for friends.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I usually wake up at 7 AM and work during the day. In the evenings I study English, and on weekends I play guitar and cook.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I wake up at 7, work until 5, study in the evening, and play music on weekends!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Daily Routine & Hobbies',
          patterns: [
            'wake up',
            'morning',
            'work',
            'study english',
            'evenings',
            'weekends',
            'guitar',
            'cook',
            'hobbies',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_60_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes a daily routine?',
        options: [
          { id: 'opt_1', text: 'I usually wake up at seven o\'clock and study in the evening.', isCorrect: true },
          { id: 'opt_2', text: 'I am usually wake up at seven clock.', isCorrect: false },
          { id: 'opt_3', text: 'I waking up at seven o\'clock yesterday.', isCorrect: false },
        ],
        correctAnswer: 'I usually wake up at seven o\'clock and study in the evening.',
        explanation: 'Present Simple with frequency adverb "usually".',
      },
    },
    {
      id: 'turn_a1_60_3',
      turnIndex: 3,
      partnerPrompt:
        'Your daily habits demonstrate discipline and balance! Looking back over the past two years, what is one memorable event, trip, or personal accomplishment you achieved?',
      partnerAudioText:
        'Your daily habits demonstrate discipline and balance! Looking back over the past two years, what is one memorable event, trip, or personal accomplishment you achieved?',
      partnerQuestionHindi:
        'आपकी दैनिक आदतें अनुशासन और संतुलन प्रदर्शित करती हैं! पिछले दो वर्षों को देखते हुए, आपने कौन सी एक यादगार घटना, यात्रा या व्यक्तिगत उपलब्धि हासिल की है?',
      expectedFunction: 'Narrate Past Milestone or Travel Trip in Past Simple',
      contextGoal:
        'Narrate a past event (e.g. graduating with honors in 2021, traveling to Scotland last summer, or completing a big project).',
      targetVocabulary: ['last year', 'in 2021', 'graduated from university', 'traveled to Scotland', 'proud accomplishment', 'visited castles'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Last year, a major milestone was traveling to Scotland for seven days. We rented a car, hiked across the scenic Highlands, visited ancient castles, and tasted local dishes. It was an unforgettable and proud experience!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Last year I traveled to Scotland with my family. We visited historic castles and hiked in the mountains. It was wonderful.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Last year I visited Scotland, saw beautiful castles, and hiked in the mountains!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Past Narrative & Milestone',
          patterns: [
            'last year',
            'visited',
            'traveled',
            'scotland',
            'graduated',
            'castles',
            'hiked',
            'accomplishment',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_60_3',
        type: 'fill_blank',
        prompt: 'Fill in the past verb: "We ___ ancient castles during our trip."',
        options: [
          { id: 'opt_1', text: 'visited', isCorrect: true },
          { id: 'opt_2', text: 'visiting', isCorrect: false },
          { id: 'opt_3', text: 'visit', isCorrect: false },
        ],
        correctAnswer: 'visited',
        explanation: 'Past Simple regular verb "visited".',
      },
    },
    {
      id: 'turn_a1_60_4',
      turnIndex: 4,
      partnerPrompt:
        'Superb storytelling and accurate past tense control! To conclude your graduation interview: what are your future plans for the next year regarding your career and advancing to CEFR A2 English?',
      partnerAudioText:
        'Superb storytelling and accurate past tense control! To conclude your graduation interview: what are your future plans for the next year regarding your career and advancing to CEFR A2 English?',
      partnerQuestionHindi:
        'शानदार कहानी और सटीक भूतकाल नियंत्रण! अपने स्नातक साक्षात्कार को समाप्त करने के लिए: अपने करियर और CEFR A2 अंग्रेजी में आगे बढ़ने के संबंध में अगले वर्ष के लिए आपकी भविष्य की क्या योजनाएं हैं?',
      expectedFunction: 'Articulate Future Plans & Express Graduation Gratitude (am going to / will)',
      contextGoal:
        'State your future plans to master A2 English, start new career projects, and thank Professor Thomas warmly.',
      targetVocabulary: ['am going to continue', 'master CEFR A2', 'advance my career', 'thank you Professor Thomas', 'proud milestone'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'In the coming year, I am going to advance directly into CEFR A2 English lessons to achieve even greater conversational fluency, and I plan to take on larger international design projects. Thank you so much Professor Thomas for this wonderful assessment!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I am going to continue learning English at the A2 level and grow in my career. Thank you very much Professor Thomas!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I’m going to study A2 English and grow my career! Thank you Professor Thomas!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Future Goals & Capstone Closing',
          patterns: [
            'going to study',
            'going to advance',
            'a2',
            'career',
            'thank you',
            'professor',
            'fluency',
            'milestone',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_60_4',
        type: 'multiple_choice',
        prompt: 'Which statement articulates future goals and gratitude eloquently?',
        options: [
          { id: 'opt_1', text: 'I am going to advance to A2 level next month! Thank you so much Professor Thomas.', isCorrect: true },
          { id: 'opt_2', text: 'I am finished now give paper bye.', isCorrect: false },
          { id: 'opt_3', text: 'A2 is study tomorrow yesterday.', isCorrect: false },
        ],
        correctAnswer: 'I am going to advance to A2 level next month! Thank you so much Professor Thomas.',
        explanation: 'Inspiring, accurate, and polite.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 85,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 75,
  },
};
