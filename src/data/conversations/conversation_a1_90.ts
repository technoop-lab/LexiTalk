import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_90: ConversationDefinition = {
  id: 'conv_a1_90',
  title: 'A1 Final Conversational Mastery — Complete Real-World Capstone',
  cefr: 'A1',
  unitId: 'unit_a1_6',
  lessonLinks: ['lesson_a1_6_90'],
  estimatedMinutes: 6,
  scenario:
    'You participate in the prestigious A1 Final Conversational Capstone Assessment with Chief Examiner Dr. Alistair Finch at the International Language Institute in London. In this comprehensive, unassisted dialogue, you demonstrate full mastery of CEFR A1 English by greeting, introducing your identity and daily routine, recounting a past travel experience and resolving a situational issue, and outlining your future career and personal aspirations.',
  communicativeGoals: [
    'Execute natural, fluent greetings and introduce identity, origin, occupation, and daily life routines without assistance',
    'Narrate a past travel journey, describe accommodation or dining experiences, and recount how you overcame a minor challenge',
    'Demonstrate functional competency in asking and answering questions regarding healthcare, civic services, or workplace collaboration',
    'Articulate future aspirations, learning achievements, and personal ambitions using varied grammatical structures mastered throughout Lessons 1–89',
  ],
  canDoStatements: [
    'Can handle complete, spontaneous everyday conversational exchanges across all primary A1 CEFR situational domains',
    'Can fluently integrate present, past, and future tenses with accurate vocabulary, prepositions, and polite discourse markers',
    'Can demonstrate full conversational independence and self-correction across multi-turn real-world interactions',
  ],
  characters: [
    {
      id: 'char_dr_alistair_finch',
      name: 'Dr. Alistair Finch',
      role: 'Chief Examiner & Academic Mentor',
      avatar: '🏆',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'proficiency',
        ipa: '/prəˈfɪʃənsi/',
        partOfSpeech: 'noun',
        meaning: 'A high degree of competence or skill; expertise in a language',
        exampleSentence: 'Completing Level A1 demonstrates solid conversational proficiency in everyday English.',
        translations: { hi: 'प्रवीणता / दक्षता' },
      },
      {
        word: 'comprehensive',
        ipa: '/ˌkɒmprɪˈhɛnsɪv/',
        partOfSpeech: 'adjective',
        meaning: 'Including or dealing with all or nearly all elements or aspects of something',
        exampleSentence: 'This capstone represents a comprehensive evaluation of our conversational skills.',
        translations: { hi: 'व्यापक / समग्र' },
      },
      {
        word: 'articulate',
        ipa: '/ɑːrˈtɪkjʊleɪt/',
        partOfSpeech: 'verb',
        meaning: 'Express an idea or feeling fluently and coherently',
        exampleSentence: 'You can articulate your thoughts clearly across diverse everyday scenarios.',
        translations: { hi: 'स्पष्ट रूप से व्यक्त करना' },
      },
      {
        word: 'culmination',
        ipa: '/ˌkʌlmɪˈneɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'The highest or climactic point of something, especially as attained after a long time',
        exampleSentence: 'Lesson 90 is the culmination of our foundational A1 English journey.',
        translations: { hi: 'चरमोत्कर्ष / पूर्णता' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am delighted to be here for the capstone assessment.',
        functionCategory: 'Formal Greeting',
        exampleSentence: 'Good morning Dr. Finch, I am delighted to be here for the capstone assessment.',
      },
      {
        phrase: 'Throughout this journey, I have developed the ability to...',
        functionCategory: 'Reflecting on Growth',
        exampleSentence: 'Throughout this journey, I have developed the ability to communicate across various everyday domains.',
      },
      {
        phrase: 'Looking back at where I started, I now feel confident in...',
        functionCategory: 'Cumulative Reflection',
        exampleSentence: 'Looking back at where I started, I now feel confident in handling travel, dining, and workplace discussions.',
      },
      {
        phrase: 'In the future, I plan to continue advancing toward A2 and beyond.',
        functionCategory: 'Future Ambition',
        exampleSentence: 'In the future, I plan to continue advancing toward A2 and professional fluency.',
      },
    ],
    grammar: {
      title: 'Full CEFR A1 Synthesis: Integrating Present Simple, Continuous, Past Simple & Future Intentions',
      conceptExplanation:
        'A1 Mastery brings together all foundational grammatical tools: Present Simple (habits, facts), Present Continuous (temporary actions), Past Simple (historical narratives & events), Present Perfect (life experiences), and Future with "going to / plan to / will" (aspirations).',
      patternFormula: '[Present Simple / Continuous] + [Past Narrative] + [Future Intentions & Modals]',
      contrastExamples: [
        {
          incorrect: 'I am Alex I come yesterday and I will doing good tomorrow.',
          correct: 'My name is Alex. I arrived in the UK last year, and I am excited to continue my language journey into A2.',
          explanation: 'Synthesize all tenses accurately and smoothly across discourse.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Dr. Alistair Finch',
        text: 'Good morning Alex! Welcome to the A1 Final Capstone Conversation. How are you feeling today, and how would you introduce yourself and your everyday life?',
        translation: 'शुभ प्रभात एलेक्स! A1 फाइनल कैपस्टोन वार्तालाप में आपका स्वागत है। आज आप कैसा महसूस कर रहे हैं, और आप अपना और अपने दैनिक जीवन का परिचय कैसे देंगे?',
      },
      {
        speaker: 'You',
        text: 'Good morning Dr. Finch! I feel confident and excited. My name is Alex; I work as a digital designer in London. Every morning, I wake up at 7:00 AM, prepare breakfast, and commute by train to my studio.',
        translation: 'शुभ प्रभात डॉ. फिंच! मैं आश्वस्त और उत्साहित महसूस करता हूँ। मेरा नाम एलेक्स है; मैं लंदन में एक डिजिटल डिज़ाइनर के रूप में काम करता हूँ। हर सुबह, मैं 7:00 बजे उठता हूँ, नाश्ता बनाता हूँ, और ट्रेन से अपने स्टूडियो जाता हूँ।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_90_1',
      type: 'fill_blank',
      prompt: 'Complete the synthesis sentence: "I have ___ all ninety A1 English lessons with dedication."',
      options: [
        { id: 'opt_1', text: 'completed', isCorrect: true },
        { id: 'opt_2', text: 'completing', isCorrect: false },
        { id: 'opt_3', text: 'complete', isCorrect: false },
      ],
      correctAnswer: 'completed',
      explanation: 'Present perfect form with "have": "completed".',
    },
    {
      id: 'cp_a1_90_2',
      type: 'multiple_choice',
      prompt: 'Which response synthesizes personal background and future ambition seamlessly?',
      options: [
        { id: 'opt_1', text: 'I work in digital design in London, and in the coming year, I plan to expand my skills into A2 English and lead international projects.', isCorrect: true },
        { id: 'opt_2', text: 'I am man living somewhere doing things tomorrow.', isCorrect: false },
        { id: 'opt_3', text: 'English finished now no more speak.', isCorrect: false },
      ],
      correctAnswer: 'I work in digital design in London, and in the coming year, I plan to expand my skills into A2 English and lead international projects.',
      explanation: 'Flawless CEFR A1 multi-temporal discourse.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_90_1',
      scenarioContext: 'Demonstrate cumulative A1 mastery in your capstone statement.',
      prompt: 'Build: "I am confident in speaking English every day."',
      targetStructure: 'I am confident in speaking English every day',
      wordBank: ['I', 'am', 'confident', 'in', 'speaking', 'English', 'every', 'day', 'speak', 'a'],
      acceptableSolutions: [
        'I am confident in speaking English every day',
        'I am confident in speaking English every day.',
      ],
      explanation: 'Preposition + gerund structure showing confidence.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_90_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning and congratulations on reaching Lesson 90! I am Dr. Alistair Finch. To begin our A1 Final Capstone assessment, please introduce yourself in detail—your name, background, current profession, and how you organize your daily routine.',
      partnerAudioText:
        'Good morning and congratulations on reaching Lesson 90! I am Dr. Alistair Finch. To begin our A1 Final Capstone assessment, please introduce yourself in detail—your name, background, current profession, and how you organize your daily routine.',
      partnerQuestionHindi:
        'शुभ प्रभात और पाठ 90 तक पहुँचने पर बधाई! मैं डॉ. एलिस्टेयर फिंच हूँ। हमारे A1 फाइनल कैपस्टोन मूल्यांकन की शुरुआत करने के लिए, कृपया विस्तार से अपना परिचय दें—आपका नाम, पृष्ठभूमि, वर्तमान पेशा, और आप अपनी दैनिक दिनचर्या को कैसे व्यवस्थित करते हैं।',
      expectedFunction: 'Introduce Identity, Profession & Daily Routine (Capstone Independence)',
      contextGoal:
        'Introduce yourself warmly (Alex, digital designer living in London), describe your weekday routine (waking at 7:00 AM, healthy breakfast, train commute, productive workday, evening cooking/reading).',
      targetVocabulary: ['good morning Dr. Finch', 'digital interface designer in London', 'wake up at 7:00 AM every weekday', 'commute by train and cook healthy dinner'],
      suggestedResponses: [
        {
          label: 'A1 Capstone Mastery',
          text: 'Good morning Dr. Finch! It is an honor to be here. My name is Alex, and I work as a digital interface designer in London. Every weekday, I wake up at 7:00 AM, prepare a healthy breakfast of oatmeal and green tea, and commute by train to my design studio. In the evenings, I enjoy cooking fresh meals and reading before bed.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Identity & Daily Routine',
          patterns: [
            'alex',
            'dr. finch',
            'designer',
            'london',
            '7:00',
            'breakfast',
            'commute',
            'train',
            'evenings',
            'cooking',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_90_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Every morning, I commute ___ train to work."',
        options: [
          { id: 'opt_1', text: 'by', isCorrect: true },
          { id: 'opt_2', text: 'with to', isCorrect: false },
          { id: 'opt_3', text: 'on for', isCorrect: false },
        ],
        correctAnswer: 'by',
        explanation: 'Collocation for transit: "by train / by bus".',
      },
    },
    {
      id: 'turn_a1_90_2',
      turnIndex: 2,
      partnerPrompt:
        'A beautifully structured introduction. Now let us turn to narrative storytelling: Tell me about a memorable journey or trip you took recently. Where did you travel, what did you see, and how did you resolve a minor travel or dining hiccup along the way?',
      partnerAudioText:
        'A beautifully structured introduction. Now let us turn to narrative storytelling: Tell me about a memorable journey or trip you took recently. Where did you travel, what did you see, and how did you resolve a minor travel or dining hiccup along the way?',
      partnerQuestionHindi:
        'एक खूबसूरती से संरचित परिचय। अब आइए कथात्मक कहानी की ओर मुड़ें: मुझे हाल ही में की गई किसी यादगार यात्रा के बारे में बताएं। आपने कहाँ यात्रा की, क्या देखा, और रास्ते में यात्रा या भोजन संबंधी किसी छोटी-मोटी समस्या को आपने कैसे हल किया?',
      expectedFunction: 'Narrate Past Travel Journey, Sightseeing & Problem-Solving',
      contextGoal:
        'Recount a weekend trip to Edinburgh: visiting Edinburgh Castle, encountering an incorrect restaurant order or train delay, and politely resolving it with staff.',
      targetVocabulary: ['traveled by train to Edinburgh last month', 'visited Edinburgh Castle and historic Royal Mile', 'faced a delay / incorrect order', 'politely resolved the issue with staff'],
      suggestedResponses: [
        {
          label: 'A1 Capstone Mastery',
          text: 'Last month, I took the train to Edinburgh for a weekend getaway. I visited the historic Edinburgh Castle and strolled down the Royal Mile. At dinner, the server accidentally brought the wrong side dish, but I politely explained that I had ordered steamed vegetables without butter due to allergies. The staff apologized and replaced it promptly, making the trip truly wonderful!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Travel Narrative & Resolution',
          patterns: [
            'edinburgh',
            'train',
            'castle',
            'royal mile',
            'dinner',
            'ordered',
            'politely',
            'allergies',
            'replaced',
            'wonderful',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_90_2',
        type: 'multiple_choice',
        prompt: 'Which sentence narrates past travel events with correct verb consistency?',
        options: [
          { id: 'opt_1', text: 'I traveled to Scotland last month, visited ancient castles, and resolved a small hotel issue politely.', isCorrect: true },
          { id: 'opt_2', text: 'I am travel Scotland yesterday and seeing castle.', isCorrect: false },
          { id: 'opt_3', text: 'Scotland was go last week.', isCorrect: false },
        ],
        correctAnswer: 'I traveled to Scotland last month, visited ancient castles, and resolved a small hotel issue politely.',
        explanation: 'Consistent past simple verbs: "traveled", "visited", "resolved".',
      },
    },
    {
      id: 'turn_a1_90_3',
      turnIndex: 3,
      partnerPrompt:
        'Excellent use of narrative past tenses and diplomatic problem-solving! Next, let us test your practical community and workplace communication: How do you collaborate with colleagues during a project, and how do you handle civic responsibilities like recycling or public services?',
      partnerAudioText:
        'Excellent use of narrative past tenses and diplomatic problem-solving! Next, let us test your practical community and workplace communication: How do you collaborate with colleagues during a project, and how do you handle civic responsibilities like recycling or public services?',
      partnerQuestionHindi:
        'कथात्मक भूतकाल और कूटनीतिक समस्या-समाधान का उत्कृष्ट उपयोग! इसके बाद, आइए आपके व्यावहारिक सामुदायिक और कार्यस्थल संचार का परीक्षण करें: किसी परियोजना के दौरान आप सहकर्मियों के साथ कैसे सहयोग करते हैं, और आप पुनर्चक्रण या सार्वजनिक सेवाओं जैसी नागरिक जिम्मेदारियों को कैसे संभालते हैं?',
      expectedFunction: 'Explain Workplace Collaboration & Environmental / Civic Practices',
      contextGoal:
        'Explain that at work you hold daily syncs and give constructive feedback; at home you sort waste into four recycling bins and report community infrastructure issues to the council.',
      targetVocabulary: ['collaborate via daily standup syncs', 'divide sprint tasks and give constructive feedback', 'sort waste into paper glass plastic compost', 'active participant in local civic community'],
      suggestedResponses: [
        {
          label: 'A1 Capstone Mastery',
          text: 'In the workplace, I collaborate closely with developers by organizing 15-minute standup syncs, dividing sprint tasks equitably, and delivering constructive feedback on Figma prototypes. In my community, I practice sustainability by separating household waste into four recycling categories and communicating actively with the local council when neighborhood repairs are needed.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Workplace & Civic Synthesis',
          patterns: [
            'collaborate',
            'syncs',
            'sprint',
            'feedback',
            'sustainability',
            'recycling',
            'four categories',
            'council',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_90_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We collaborate ___ our team members on daily sprints."',
        options: [
          { id: 'opt_1', text: 'with', isCorrect: true },
          { id: 'opt_2', text: 'to', isCorrect: false },
          { id: 'opt_3', text: 'at to', isCorrect: false },
        ],
        correctAnswer: 'with',
        explanation: 'Collocation: "collaborate with [someone]".',
      },
    },
    {
      id: 'turn_a1_90_4',
      turnIndex: 4,
      partnerPrompt:
        'Alex, that is an extraordinary demonstration of comprehensive A1 English mastery across every domain. To conclude your capstone: Reflect on your language journey from Lesson 1 to Lesson 90, and share your goals for A2 and your future career!',
      partnerAudioText:
        'Alex, that is an extraordinary demonstration of comprehensive A1 English mastery across every domain. To conclude your capstone: Reflect on your language journey from Lesson 1 to Lesson 90, and share your goals for A2 and your future career!',
      partnerQuestionHindi:
        'एलेक्स, यह हर क्षेत्र में व्यापक A1 अंग्रेजी प्रवीणता का एक असाधारण प्रदर्शन है। अपने कैपस्टोन को समाप्त करने के लिए: पाठ 1 से पाठ 90 तक की अपनी भाषा यात्रा पर विचार करें, और A2 तथा अपने भविष्य के करियर के लिए अपने लक्ष्यों को साझा करें!',
      expectedFunction: 'Reflect on Complete A1 Journey, Celebrate Mastery & Articulate A2 Ambitions',
      contextGoal:
        'Express profound pride in completing all 90 A1 lessons, reflect on gaining confidence from basic greetings to complex workplace dialogues, and state your ambition to master Level A2 and lead international design projects.',
      targetVocabulary: ['immensely proud to complete all ninety A1 lessons', 'journey from basic greetings to complex real-world conversations', 'excited to advance into Level A2', 'thank you Dr. Finch for this life-changing milestone'],
      suggestedResponses: [
        {
          label: 'A1 Capstone Mastery',
          text: 'I feel immensely proud to complete all ninety lessons of Level A1! Starting from foundational greetings and alphabet sounds, I can now navigate travel emergencies, workplace interviews, medical appointments, and deep cultural conversations with ease and confidence. My next goal is to advance into Level A2, continue mastering nuanced fluency, and lead global design projects. Thank you so much Dr. Finch for this transformative milestone!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Capstone Final Reflection & A2 Ambitions',
          patterns: [
            'proud',
            'ninety lessons',
            'level a1',
            'greetings',
            'confidence',
            'advance',
            'level a2',
            'thank you',
            'dr. finch',
            'transformative',
            'milestone',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_90_4',
        type: 'multiple_choice',
        prompt: 'Which statement embodies complete conversational English A1 mastery and future ambition?',
        options: [
          { id: 'opt_1', text: 'I am proud to have mastered A1 English across all ninety lessons, and I look forward to advancing into Level A2. Thank you Dr. Finch!', isCorrect: true },
          { id: 'opt_2', text: 'Lesson 90 done bye English forever.', isCorrect: false },
          { id: 'opt_3', text: 'I stop study now no more books.', isCorrect: false },
        ],
        correctAnswer: 'I am proud to have mastered A1 English across all ninety lessons, and I look forward to advancing into Level A2. Thank you Dr. Finch!',
        explanation: 'Inspiring, polished, and triumphant capstone culmination.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 75,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 0,
    targetVocabularyCoveragePct: 70,
  },
};
