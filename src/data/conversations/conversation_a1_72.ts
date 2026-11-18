import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_72: ConversationDefinition = {
  id: 'conv_a1_72',
  title: 'Job Interviews, Professional Strengths & Career Goals',
  cefr: 'A1',
  unitId: 'unit_a1_5',
  lessonLinks: ['lesson_a1_5_72'],
  estimatedMinutes: 5,
  scenario:
    'You are in a formal job interview with hiring manager Eleanor Vance for an Associate Software Developer role at a digital innovation agency in London. You introduce yourself, summarize your core strengths (problem-solving, fast learner, team communication), explain how you handle tight project deadlines, outline your 3-year career goals, and ask thoughtful questions to the interviewer.',
  communicativeGoals: [
    'Introduce oneself and summarize professional background during an interview ("Tell me about yourself")',
    'Articulate professional strengths with concrete examples ("One of my greatest strengths is problem-solving under pressure")',
    'Explain how to manage stressful situations and meet tight deadlines ("I prioritize tasks and communicate proactively with my team")',
    'Discuss future career goals and ask questions to the interviewer ("Where do you see yourself in three years?", "What does a typical day look like for this team?")',
  ],
  canDoStatements: [
    'Can answer standard job interview questions in clear English (CEFR A1.2)',
    'Can describe strengths and soft skills with simple examples',
    'Can state future career goals and ask questions to the interviewer',
  ],
  characters: [
    {
      id: 'char_eleanor_interviewer',
      name: 'Eleanor Vance',
      role: 'Hiring Manager & Head of Engineering',
      avatar: '🤝',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'strength',
        ipa: '/strɛŋkθ/',
        partOfSpeech: 'noun',
        meaning: 'A good or beneficial quality or attribute of a person',
        exampleSentence: 'My greatest professional strength is my ability to solve complex technical problems.',
        translations: { hi: 'ताकत / मुख्य खूबी' },
      },
      {
        word: 'prioritize',
        ipa: '/praɪˈɒrɪtaɪz/',
        partOfSpeech: 'verb',
        meaning: 'Designate or treat something as more important than other things',
        exampleSentence: 'When facing tight deadlines, I prioritize high-impact tasks first.',
        translations: { hi: 'प्राथमिकता देना' },
      },
      {
        word: 'goal',
        ipa: '/ɡoʊl/',
        partOfSpeech: 'noun',
        meaning: 'The object of a person\'s ambition or effort; an aim or desired result',
        exampleSentence: 'My career goal is to become a proficient full-stack software engineer.',
        translations: { hi: 'लक्ष्य / उद्देश्य' },
      },
      {
        word: 'collaborate',
        ipa: '/kəˈlæbəreɪt/',
        partOfSpeech: 'verb',
        meaning: 'Work jointly on an activity or project',
        exampleSentence: 'I enjoy collaborating with designers and backend engineers in agile teams.',
        translations: { hi: 'सहयोग करना / मिलकर काम करना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'One of my greatest strengths is...',
        functionCategory: 'Stating Strengths',
        exampleSentence: 'One of my greatest strengths is adapting quickly to new technologies.',
      },
      {
        phrase: 'When working under pressure, I...',
        functionCategory: 'Handling Stress',
        exampleSentence: 'When working under pressure, I prioritize tasks and maintain open communication.',
      },
      {
        phrase: 'In the next three to five years, I hope to...',
        functionCategory: 'Career Goals',
        exampleSentence: 'In the next three to five years, I hope to take on technical leadership responsibilities.',
      },
      {
        phrase: 'Could you tell me more about...?',
        functionCategory: 'Asking Interviewer',
        exampleSentence: 'Could you tell me more about the team culture and opportunities for mentorship?',
      },
    ],
    grammar: {
      title: 'Interview Discourse: One of my strengths is + [Verb-ing] / In three years, I want to + [Base Verb]',
      conceptExplanation:
        'When describing strengths, use "One of my strengths is [adapting / communicating / solving problems]". Express future aspirations using "I hope to + [base verb]" or "I see myself [verb-ing]". End interviews by asking questions with "Could you tell me more about [Topic]?".',
      patternFormula: 'One of my strengths is [Skill-ing] | In the next three years, I plan to [Goal] | Could you tell me about [Company/Team]?',
      contrastExamples: [
        {
          incorrect: 'My strength is I am good at everything.',
          correct: 'One of my key strengths is solving technical challenges and collaborating with teams.',
          explanation: 'Provide specific, professional skills rather than vague claims.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Eleanor',
        text: 'Good morning Alex, thank you for coming in today! To start, could you please tell me a little about yourself and your background?',
        translation: 'शुभ प्रभात एलेक्स, आज आने के लिए धन्यवाद! शुरू करने के लिए, क्या आप कृपया मुझे अपने और अपनी पृष्ठभूमि के बारे में कुछ बता सकते हैं?',
      },
      {
        speaker: 'You',
        text: 'Good morning Eleanor! I have a degree in Computer Science and two years of front-end web development experience, specializing in building clean, responsive user interfaces.',
        translation: 'शुभ प्रभात एलिनॉर! मेरे पास कंप्यूटर साइंस में डिग्री और दो साल का फ्रंट-एंड वेब डेवलपमेंट अनुभव है, जो स्वच्छ, रिस्पॉन्सिव यूजर इंटरफेस बनाने में माहिर है।',
      },
      {
        speaker: 'Eleanor',
        text: 'What do you consider your greatest professional strengths when working on tight project deadlines?',
        translation: 'तंग परियोजना समय सीमा पर काम करते समय आप अपनी सबसे बड़ी पेशेवर ताकत क्या मानते हैं?',
      },
      {
        speaker: 'You',
        text: 'My greatest strengths are rapid problem-solving, attention to detail, and prioritizing key tasks to ensure we deliver high-quality code on time.',
        translation: 'मेरी सबसे बड़ी ताकत तेजी से समस्या निवारण, विवरणों पर ध्यान देना, और यह सुनिश्चित करने के लिए प्रमुख कार्यों को प्राथमिकता देना है कि हम समय पर उच्च गुणवत्ता वाला कोड प्रदान करें।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_72_1',
      type: 'fill_blank',
      prompt: 'Complete the interview strength statement: "One of my greatest strengths is ___ problems quickly."',
      options: [
        { id: 'opt_1', text: 'solving', isCorrect: true },
        { id: 'opt_2', text: 'solve to', isCorrect: false },
        { id: 'opt_3', text: 'solved', isCorrect: false },
      ],
      correctAnswer: 'solving',
      explanation: 'Gerund "solving" acts as the complement after "is".',
    },
    {
      id: 'cp_a1_72_2',
      type: 'multiple_choice',
      prompt: 'Which sentence describes handling tight deadlines effectively?',
      options: [
        { id: 'opt_1', text: 'I prioritize urgent tasks and communicate openly with my team.', isCorrect: true },
        { id: 'opt_2', text: 'I panic and run away from office room.', isCorrect: false },
        { id: 'opt_3', text: 'Deadline is scary so I sleep.', isCorrect: false },
      ],
      correctAnswer: 'I prioritize urgent tasks and communicate openly with my team.',
      explanation: 'Demonstrates professional composure and practical strategy.',
    },
    {
      id: 'cp_a1_72_3',
      type: 'multiple_choice',
      prompt: 'How do you ask the interviewer a thoughtful closing question?',
      options: [
        { id: 'opt_1', text: 'Could you tell me more about the team culture and opportunities for growth?', isCorrect: true },
        { id: 'opt_2', text: 'When do you give me lots of money now?', isCorrect: false },
        { id: 'opt_3', text: 'Are you done asking me questions yet?', isCorrect: false },
      ],
      correctAnswer: 'Could you tell me more about the team culture and opportunities for growth?',
      explanation: 'Insightful and polite candidate question.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_72_1',
      scenarioContext: 'Articulate your core professional strength.',
      prompt: 'Build: "One of my greatest strengths is problem solving."',
      targetStructure: 'One of my greatest strengths is problem solving',
      wordBank: ['One', 'of', 'my', 'greatest', 'strengths', 'is', 'problem', 'solving', 'strong', 'are', 'in'],
      acceptableSolutions: [
        'One of my greatest strengths is problem solving',
        'One of my greatest strengths is problem solving.',
      ],
      explanation: 'Strength formula.',
    },
    {
      id: 'sc_a1_72_2',
      scenarioContext: 'Ask about team culture at the end of the interview.',
      prompt: 'Build: "Could you tell me more about the team culture?"',
      targetStructure: 'Could you tell me more about the team culture?',
      wordBank: ['Could', 'you', 'tell', 'me', 'more', 'about', 'the', 'team', 'culture', 'telling', 'is'],
      acceptableSolutions: [
        'Could you tell me more about the team culture',
        'Could you tell me more about the team culture?',
      ],
      explanation: 'Interviewer question structure.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_72_1',
      turnIndex: 1,
      partnerPrompt:
        'Good afternoon Alex, and welcome to Innovate Digital! I’m Eleanor Vance, Head of Engineering. Thank you for coming in today. To kick off our interview, could you please tell me a little about yourself and your background in software?',
      partnerAudioText:
        'Good afternoon Alex, and welcome to Innovate Digital! I’m Eleanor Vance, Head of Engineering. Thank you for coming in today. To kick off our interview, could you please tell me a little about yourself and your background in software?',
      partnerQuestionHindi:
        'शुभ दोपहर एलेक्स, और इनोवेट डिजिटल में आपका स्वागत है! मैं एलिनॉर वेंस हूँ, इंजीनियरिंग प्रमुख। आज आने के लिए धन्यवाद। हमारे साक्षात्कार की शुरुआत करने के लिए, क्या आप कृपया मुझे अपने और सॉफ्टवेयर में अपनी पृष्ठभूमि के बारे में कुछ बता सकते हैं?',
      expectedFunction: 'Professional Introduction (Tell me about yourself)',
      contextGoal:
        'Introduce yourself, mention your Computer Science degree and experience building responsive web interfaces, and state your passion for front-end development.',
      targetVocabulary: ['good afternoon Eleanor', 'degree in Computer Science', 'front-end development', 'responsive web applications', 'passionate about coding'],
      suggestedResponses: [
        {
          label: 'Multi-Turn Independent',
          text: 'Good afternoon Eleanor! Thank you for having me. I have a degree in Computer Science and practical experience building responsive web interfaces. I am passionate about front-end technologies, clean code, and creating intuitive user experiences.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Self-Introduction & Background',
          patterns: [
            'computer science',
            'degree',
            'front-end',
            'responsive',
            'passionate',
            'clean code',
            'experience',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'im_alex_i_like_games_error',
          pattern: /\bi like play video games and sleep\b/i,
          errorType: 'interaction',
          message: 'Keep interview introductions focused on professional skills and academic background.',
          correctionPattern: 'I have a degree in Computer Science and experience in web development.',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_72_1',
        type: 'fill_blank',
        prompt: 'Choose the professional introduction: "I have experience ___ responsive web interfaces."',
        options: [
          { id: 'opt_1', text: 'building', isCorrect: true },
          { id: 'opt_2', text: 'build to', isCorrect: false },
          { id: 'opt_3', text: 'builded', isCorrect: false },
        ],
        correctAnswer: 'building',
        explanation: 'Gerund "building" after preposition in context.',
      },
    },
    {
      id: 'turn_a1_72_2',
      turnIndex: 2,
      partnerPrompt:
        'That background aligns well with our tech stack. What would you say are your core professional strengths, and how do they help you in a team setting?',
      partnerAudioText:
        'That background aligns well with our tech stack. What would you say are your core professional strengths, and how do they help you in a team setting?',
      partnerQuestionHindi:
        'वह पृष्ठभूमि हमारे तकनीकी स्टैक के साथ अच्छी तरह से मेल खाती है। आप अपनी मुख्य पेशेवर ताकत क्या कहेंगे, और वे एक टीम सेटिंग में आपकी कैसे मदद करते हैं?',
      expectedFunction: 'Articulate Strengths (One of my greatest strengths is...)',
      contextGoal:
        'State that your strengths are problem-solving, rapid learning, and collaborative communication with designers and engineers.',
      targetVocabulary: ['greatest strengths', 'problem-solving', 'fast learner', 'team collaboration', 'adapt quickly'],
      suggestedResponses: [
        {
          label: 'Multi-Turn Independent',
          text: 'One of my greatest strengths is rapid problem-solving and debugging. In addition, I am a fast learner who adapts quickly to new frameworks and an active communicator who enjoys collaborating with designers.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Strengths Articulation',
          patterns: [
            'strengths',
            'problem-solving',
            'fast learner',
            'collaborat',
            'communicat',
            'adapt',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_72_2',
        type: 'multiple_choice',
        prompt: 'Which sentence expresses professional strengths effectively?',
        options: [
          { id: 'opt_1', text: 'One of my greatest strengths is problem-solving and rapid learning.', isCorrect: true },
          { id: 'opt_2', text: 'I am the most strongest person in whole company.', isCorrect: false },
          { id: 'opt_3', text: 'Strengths are having my brain big.', isCorrect: false },
        ],
        correctAnswer: 'One of my greatest strengths is problem-solving and rapid learning.',
        explanation: 'Natural and professional phrasing.',
      },
    },
    {
      id: 'turn_a1_72_3',
      turnIndex: 3,
      partnerPrompt:
        'We work in fast-paced two-week sprints where priorities can change. How do you handle pressure and tight deadlines, and where do you see your career heading over the next three years?',
      partnerAudioText:
        'We work in fast-paced two-week sprints where priorities can change. How do you handle pressure and tight deadlines, and where do you see your career heading over the next three years?',
      partnerQuestionHindi:
        'हम तेज़ गति वाले दो-सप्ताह के स्प्रिंट में काम करते हैं जहाँ प्राथमिकताएं बदल सकती हैं। आप दबाव और तंग समय सीमा को कैसे संभालते हैं, और आप अगले तीन वर्षों में अपने करियर को कहाँ ले जाते हुए देखते हैं?',
      expectedFunction: 'Explain Deadline Management & Outline 3-Year Career Goals',
      contextGoal:
        'Explain that under pressure you prioritize high-impact tasks and communicate proactively, and that in 3 years you aspire to become a proficient full-stack developer.',
      targetVocabulary: ['under pressure', 'prioritize high-impact tasks', 'communicate proactively', 'in three years', 'full-stack developer'],
      suggestedResponses: [
        {
          label: 'Multi-Turn Independent',
          text: 'When working under tight deadlines, I break down complex tasks, prioritize high-impact tickets, and communicate proactively with the team. In three years, I see myself growing into a proficient full-stack engineer taking on technical leadership.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Pressure & 3-Year Goals',
          patterns: [
            'prioritize',
            'communicate',
            'pressure',
            'deadlines',
            'three years',
            'full-stack',
            'grow',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_72_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "In three years, I hope ___ take on more technical responsibility."',
        options: [
          { id: 'opt_1', text: 'to', isCorrect: true },
          { id: 'opt_2', text: 'for', isCorrect: false },
          { id: 'opt_3', text: 'at', isCorrect: false },
        ],
        correctAnswer: 'to',
        explanation: 'Infinitive "hope to + verb".',
      },
    },
    {
      id: 'turn_a1_72_4',
      turnIndex: 4,
      partnerPrompt:
        'That shows excellent self-awareness and ambition. We have reached the end of our questions. What questions do you have for me about our engineering team or company culture?',
      partnerAudioText:
        'That shows excellent self-awareness and ambition. We have reached the end of our questions. What questions do you have for me about our engineering team or company culture?',
      partnerQuestionHindi:
        'वह उत्कृष्ट आत्म-जागरूकता और महत्वाकांक्षा दिखाता है। हम अपने प्रश्नों के अंत तक पहुँच चुके हैं। हमारी इंजीनियरिंग टीम या कंपनी संस्कृति के बारे में आपके पास मेरे लिए क्या प्रश्न हैं?',
      expectedFunction: 'Ask Thoughtful Questions to Interviewer & Conclude Professionally',
      contextGoal:
        'Ask about opportunities for mentorship and continuous learning, thank Eleanor for the interview, and state you look forward to hearing about the next steps.',
      targetVocabulary: ['opportunities for mentorship', 'continuous learning', 'team culture', 'thank you Eleanor', 'next steps'],
      suggestedResponses: [
        {
          label: 'Multi-Turn Independent',
          text: 'Could you tell me more about mentorship and continuous learning opportunities for junior developers on the team? Also, thank you so much Eleanor for your time today; I look forward to hearing about the next steps!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Interviewer Question & Closing',
          patterns: [
            'mentorship',
            'learning',
            'team culture',
            'thank you',
            'eleanor',
            'next steps',
            'look forward',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_72_4',
        type: 'multiple_choice',
        prompt: 'Which closing remark demonstrates high professional caliber in an interview?',
        options: [
          { id: 'opt_1', text: 'Thank you for your time today Eleanor! I look forward to hearing about the next steps.', isCorrect: true },
          { id: 'opt_2', text: 'Interview is done I am leaving bye.', isCorrect: false },
          { id: 'opt_3', text: 'Give me the job right now please.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for your time today Eleanor! I look forward to hearing about the next steps.',
        explanation: 'Courteous and professional interview conclusion.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 2,
    targetVocabularyCoveragePct: 70,
  },
};
