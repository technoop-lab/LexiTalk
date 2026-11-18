import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_89: ConversationDefinition = {
  id: 'conv_a1_89',
  title: 'Professional Job Interviews, Experience Portfolios & Future Goals',
  cefr: 'A1',
  unitId: 'unit_a1_6',
  lessonLinks: ['lesson_a1_6_89'],
  estimatedMinutes: 5,
  scenario:
    'You attend a formal job interview at the London headquarters of Global Tech Solutions. You speak with Talent Acquisition Director Elena Rostova to present your professional experience, describe how you solved a challenging team problem, explain your core workplace strengths, and articulate your future career aspirations.',
  communicativeGoals: [
    'Present professional experience, education, and technical competencies clearly',
    'Describe a problem-solving scenario using STAR method concepts in simple, accurate English (Situation, Action, Result)',
    'Articulate personal strengths (attention to detail, cross-functional collaboration, adaptability)',
    'State short-term and long-term career goals using future intention markers ("In the next two years, I plan to...")',
  ],
  canDoStatements: [
    'Can answer standard job interview questions regarding work experience and skills',
    'Can describe past professional accomplishments and problem-solving actions using the past tense',
    'Can articulate career ambitions and workplace values with professional poise',
  ],
  characters: [
    {
      id: 'char_elena_rostova',
      name: 'Elena Rostova',
      role: 'Talent Acquisition Director',
      avatar: '💼',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'competency',
        ipa: '/ˈkɒmpɪtənsi/',
        partOfSpeech: 'noun',
        meaning: 'The ability to do something successfully or efficiently',
        exampleSentence: 'My core competencies include responsive UI design and agile sprint execution.',
        translations: { hi: 'दक्षता / कार्यक्षमता' },
      },
      {
        word: 'accomplishment',
        ipa: '/əˈkʌmplɪʃmənt/',
        partOfSpeech: 'noun',
        meaning: 'Something that has been achieved successfully',
        exampleSentence: 'My proudest accomplishment was leading the redesign that increased user engagement by forty percent.',
        translations: { hi: 'उपलब्धि' },
      },
      {
        word: 'adaptable',
        ipa: '/əˈdæptəbəl/',
        partOfSpeech: 'adjective',
        meaning: 'Able to adjust to new conditions or changes quickly',
        exampleSentence: 'I am adaptable, proactive, and thrive in fast-paced collaborative environments.',
        translations: { hi: 'अनुकूलनशील / लचीला' },
      },
      {
        word: 'aspiration',
        ipa: '/ˌæspəˈreɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'A hope or ambition of achieving something in one\'s career',
        exampleSentence: 'My five-year career aspiration is to lead an international product design team.',
        translations: { hi: 'महत्वाकांक्षा / उच्च अभिलाषा' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I have over four years of experience in...',
        functionCategory: 'Summarizing Experience',
        exampleSentence: 'I have over four years of experience in user interface design and software testing.',
      },
      {
        phrase: 'When faced with a tight deadline, I...',
        functionCategory: 'Behavioral Problem-Solving',
        exampleSentence: 'When faced with a tight deadline, I prioritized key features and communicated clearly.',
      },
      {
        phrase: 'My greatest strength is my ability to...',
        functionCategory: 'Highlighting Strengths',
        exampleSentence: 'My greatest strength is my ability to translate user feedback into intuitive interfaces.',
      },
      {
        phrase: 'In the next three years, my goal is to...',
        functionCategory: 'Stating Career Ambitions',
        exampleSentence: 'In the next three years, my goal is to master scalable design systems and mentor junior designers.',
      },
    ],
    grammar: {
      title: 'Interview Discourse: Present Perfect (Experience) + Past Simple (Specific Actions) + Future ("Aim to")',
      conceptExplanation:
        'In interviews, use Present Perfect for total career experience ("I have worked in tech for 5 years"), Past Simple for specific achievements ("Last year, I redesigned our checkout flow"), and Future Intentions for goals ("I plan / aim to grow into a team lead").',
      patternFormula: 'I have [Past Participle] + In my last role, I [Past Verb] + In the future, I plan to [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'I work 4 years and I do big project tomorrow.',
          correct: 'I have worked in product design for four years, and last year I led a major mobile app launch.',
          explanation: 'Accurate blend of Present Perfect and Past Simple for professional credibility.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Elena Rostova',
        text: 'Good afternoon Alex. Thank you for joining us today for the Product Designer interview. To begin, could you walk us through your professional journey and core expertise?',
        translation: 'शुभ दोपहर एलेक्स। प्रोडक्ट डिज़ाइनर साक्षात्कार के लिए आज हमारे साथ जुड़ने के लिए धन्यवाद। शुरू करने के लिए, क्या आप हमें अपनी पेशेवर यात्रा और मुख्य विशेषज्ञता के बारे में बता सकते हैं?',
      },
      {
        speaker: 'You',
        text: 'Good afternoon Elena. Thank you for this opportunity. I have over four years of experience designing user-centric web and mobile applications, focusing on responsive accessibility and clean component design.',
        translation: 'शुभ दोपहर एलेना। इस अवसर के लिए धन्यवाद। मेरे पास रिस्पॉन्सिव एक्सेसिबिलिटी और स्वच्छ घटक डिज़ाइन पर ध्यान केंद्रित करते हुए, उपयोगकर्ता-केंद्रित वेब और मोबाइल अनुप्रयोगों को डिज़ाइन करने का चार से अधिक वर्षों का अनुभव है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_89_1',
      type: 'fill_blank',
      prompt: 'Complete the interview response: "I have worked in digital design ___ four years."',
      options: [
        { id: 'opt_1', text: 'for', isCorrect: true },
        { id: 'opt_2', text: 'since', isCorrect: false },
        { id: 'opt_3', text: 'during to', isCorrect: false },
      ],
      correctAnswer: 'for',
      explanation: 'Use "for" with time durations (for four years).',
    },
    {
      id: 'cp_a1_89_2',
      type: 'multiple_choice',
      prompt: 'Which sentence articulates professional problem-solving and collaboration clearly?',
      options: [
        { id: 'opt_1', text: 'When our project faced delays, I organized a team sprint and reprioritized key tasks to deliver on time.', isCorrect: true },
        { id: 'opt_2', text: 'Project broken so I shouted on computer.', isCorrect: false },
        { id: 'opt_3', text: 'Boss made me work late no happy.', isCorrect: false },
      ],
      correctAnswer: 'When our project faced delays, I organized a team sprint and reprioritized key tasks to deliver on time.',
      explanation: 'Constructive, professional, and result-oriented description.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_89_1',
      scenarioContext: 'State a future career goal in an interview.',
      prompt: 'Build: "I aim to lead a design team."',
      targetStructure: 'I aim to lead a design team',
      wordBank: ['I', 'aim', 'to', 'lead', 'a', 'design', 'team', 'leading', 'led', 'am'],
      acceptableSolutions: [
        'I aim to lead a design team',
        'I aim to lead a design team.',
      ],
      explanation: 'Infinitive goal structure with "aim to".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_89_1',
      turnIndex: 1,
      partnerPrompt:
        'Good afternoon Alex, welcome to Global Tech Solutions. I am Elena Rostova. To kick off our interview, could you summarize your background, key technical skills, and what attracted you to our company?',
      partnerAudioText:
        'Good afternoon Alex, welcome to Global Tech Solutions. I am Elena Rostova. To kick off our interview, could you summarize your background, key technical skills, and what attracted you to our company?',
      partnerQuestionHindi:
        'शुभ दोपहर एलेक्स, ग्लोबल टेक सॉल्यूशंस में आपका स्वागत है। मैं एलेना रोस्तोवा हूँ। हमारे साक्षात्कार की शुरुआत करने के लिए, क्या आप अपनी पृष्ठभूमि, प्रमुख तकनीकी कौशल, और हमारी कंपनी की ओर आपको किस चीज़ ने आकर्षित किया, इसका सारांश दे सकते हैं?',
      expectedFunction: 'Present Career Background, Core Skills & Motivation (Integrated Performance)',
      contextGoal:
        'Summarize your 4+ years in UI/UX design, highlight responsive design and accessibility skills, and explain your admiration for Global Tech’s innovative mission.',
      targetVocabulary: ['four years of professional experience', 'UI and responsive interface design', 'accessible design systems', 'drawn to innovative mission'],
      suggestedResponses: [
        {
          label: 'Integrated Performance',
          text: 'Good afternoon Elena, thank you for welcoming me! I have over four years of experience in user interface design, specializing in responsive web applications and accessibility standards. I have followed Global Tech’s innovative educational products, and I am eager to contribute my skills to your growing product suite.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Experience & Company Alignment',
          patterns: [
            'four years',
            'experience',
            'design',
            'interface',
            'responsive',
            'accessibility',
            'global tech',
            'innovative',
            'elena',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_89_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I have four years of ___ in software design."',
        options: [
          { id: 'opt_1', text: 'experience', isCorrect: true },
          { id: 'opt_2', text: 'experienced', isCorrect: false },
          { id: 'opt_3', text: 'experiencing', isCorrect: false },
        ],
        correctAnswer: 'experience',
        explanation: 'Noun: "experience".',
      },
    },
    {
      id: 'turn_a1_89_2',
      turnIndex: 2,
      partnerPrompt:
        'That aligns beautifully with our roadmap. Can you describe a specific challenging situation in a past project and how you resolved it collaboratively under pressure?',
      partnerAudioText:
        'That aligns beautifully with our roadmap. Can you describe a specific challenging situation in a past project and how you resolved it collaboratively under pressure?',
      partnerQuestionHindi:
        'यह हमारे रोडमैप के साथ खूबसूरती से मेल खाता है। क्या आप किसी पिछली परियोजना में एक विशिष्ट चुनौतीपूर्ण स्थिति का वर्णन कर सकते हैं और आपने दबाव में इसे सहयोगात्मक रूप से कैसे हल किया?',
      expectedFunction: 'Describe Behavioral Problem-Solving using STAR Narrative',
      contextGoal:
        'Describe a time when a critical project deadline was brought forward by two weeks: you reprioritized features with developers, ran daily 15-minute syncs, and launched with zero defects.',
      targetVocabulary: ['deadline was moved forward by two weeks', 'reprioritized core user features', 'coordinated daily fifteen-minute syncs', 'delivered on schedule with zero critical bugs'],
      suggestedResponses: [
        {
          label: 'Integrated Performance',
          text: 'In my previous position, our product launch deadline was suddenly moved forward by two weeks. I immediately organized a workshop with our engineering team, reprioritized the critical user flows, and established daily 15-minute syncs. As a result, we delivered the complete release on time with 100% test coverage.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'STAR Storytelling Actions',
          patterns: [
            'deadline',
            'two weeks',
            'engineering',
            'reprioritized',
            'syncs',
            'delivered',
            'on time',
            'result',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_89_2',
        type: 'multiple_choice',
        prompt: 'Which statement demonstrates proactive team leadership under pressure?',
        options: [
          { id: 'opt_1', text: 'I organized a workshop to reprioritize deliverables and ensure our team launched on time.', isCorrect: true },
          { id: 'opt_2', text: 'I complained to everyone because work was too fast.', isCorrect: false },
          { id: 'opt_3', text: 'Deadline impossible so I went home.', isCorrect: false },
        ],
        correctAnswer: 'I organized a workshop to reprioritize deliverables and ensure our team launched on time.',
        explanation: 'Constructive leadership and problem-solving response.',
      },
    },
    {
      id: 'turn_a1_89_3',
      turnIndex: 3,
      partnerPrompt:
        'Impressive composure and leadership. How would you describe your core professional strengths, and where do you see your career heading over the next three to five years?',
      partnerAudioText:
        'Impressive composure and leadership. How would you describe your core professional strengths, and where do you see your career heading over the next three to five years?',
      partnerQuestionHindi:
        'प्रभावशाली धैर्य और नेतृत्व। आप अपनी मुख्य पेशेवर शक्तियों का वर्णन कैसे करेंगे, और आप अगले तीन से पांच वर्षों में अपने करियर को कहाँ ले जाते हुए देखते हैं?',
      expectedFunction: 'Articulate Workplace Strengths & 3-5 Year Career Vision',
      contextGoal:
        'State strengths in empathetic design and structured component architecture; share 3-5 year goal of leading a multi-disciplinary product design team.',
      targetVocabulary: ['empathy for user needs', 'rigorous component architecture', 'grow into a lead design role', 'mentor junior designers and expand globally'],
      suggestedResponses: [
        {
          label: 'Integrated Performance',
          text: 'My greatest strengths are deep empathy for user needs and rigorous attention to design system architecture. Over the next three to five years, I aim to grow into a Lead Designer role here at Global Tech, mentoring junior colleagues and spearheading global user accessibility initiatives.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Strengths & Career Vision',
          patterns: [
            'strengths',
            'empathy',
            'architecture',
            'design system',
            'three to five years',
            'lead designer',
            'mentor',
            'global',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_89_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "In three years, I aim to ___ a design team."',
        options: [
          { id: 'opt_1', text: 'lead', isCorrect: true },
          { id: 'opt_2', text: 'leading of', isCorrect: false },
          { id: 'opt_3', text: 'leaderly', isCorrect: false },
        ],
        correctAnswer: 'lead',
        explanation: 'Base verb after "aim to": "lead".',
      },
    },
    {
      id: 'turn_a1_89_4',
      turnIndex: 4,
      partnerPrompt:
        'That demonstrates tremendous vision and maturity, Alex. You have answered all our questions thoroughly. Do you have any questions for me about our team culture or next steps in the hiring process?',
      partnerAudioText:
        'That demonstrates tremendous vision and maturity, Alex. You have answered all our questions thoroughly. Do you have any questions for me about our team culture or next steps in the hiring process?',
      partnerQuestionHindi:
        'यह जबरदस्त दृष्टिकोण और परिपक्वता प्रदर्शित करता है, एलेक्स। आपने हमारे सभी सवालों के पूरी तरह से जवाब दिए हैं। क्या हमारे टीम कल्चर या भर्ती प्रक्रिया के अगले चरणों के बारे में आपके पास मेरे लिए कोई प्रश्न हैं?',
      expectedFunction: 'Inquire About Team Collaboration Culture & Hiring Timeline',
      contextGoal:
        'Ask about team cross-functional collaboration rhythms between design and product, inquire about the next round timeline, and thank Elena warmly.',
      targetVocabulary: ['cross-functional collaboration rhythm', 'timeline for next interview stages', 'thank you Elena for insightful conversation', 'look forward to hearing from you'],
      suggestedResponses: [
        {
          label: 'Integrated Performance',
          text: 'Thank you Elena! I would love to ask: how closely do designers collaborate with product managers and engineers on a weekly basis? Also, what is the expected timeline for the next stage of the interview process? Thank you so much for your time and thoughtful questions today!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing Interview Questions',
          patterns: [
            'collaborate',
            'product managers',
            'engineers',
            'timeline',
            'next stage',
            'thank you',
            'elena',
            'thoughtful',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_89_4',
        type: 'multiple_choice',
        prompt: 'Which question shows high-level professional interest at the end of an interview?',
        options: [
          { id: 'opt_1', text: 'Could you share what the expected timeline is for the next round of interviews, and how design collaborates with product teams?', isCorrect: true },
          { id: 'opt_2', text: 'Am I hired right now yes or no?', isCorrect: false },
          { id: 'opt_3', text: 'How much money I get tomorrow?', isCorrect: false },
        ],
        correctAnswer: 'Could you share what the expected timeline is for the next round of interviews, and how design collaborates with product teams?',
        explanation: 'Polished, insightful, and courteous interview closing inquiry.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 70,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 60,
  },
};
