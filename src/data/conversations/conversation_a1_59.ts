import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_59: ConversationDefinition = {
  id: 'conv_a1_59',
  title: 'Life Milestones, Personal Biographies & Life Stories',
  cefr: 'A1',
  unitId: 'unit_a1_4',
  lessonLinks: ['lesson_a1_4_59'],
  estimatedMinutes: 5,
  scenario:
    'You are taking part in a personal storytelling and biography workshop at an international cultural center in Oxford. You partner with instructor Hannah to share your life timeline: where you were born, where you grew up, your education milestones, when you moved cities, and your major achievements.',
  communicativeGoals: [
    'Narrate personal life stories and milestones using biographical verbs ("was born in", "grew up in", "graduated from", "moved to", "started working as")',
    'Use narrative time sequencers and connectors (First, Then, After that, Three years later, Finally)',
    'State past years and exact dates accurately ("in 1998", "in 2018", "in October 2022")',
    'Inquire about your partner\'s background and milestones ("Where did you grow up?", "When did you graduate?")',
  ],
  canDoStatements: [
    'Can give a simple chronological account of their personal life story and background (CEFR A1.2)',
    'Can use biographical past expressions (was born, grew up, graduated, moved)',
    'Can connect life events with basic time linkers (First, Then, After that, Finally)',
  ],
  characters: [
    {
      id: 'char_hannah_biographer',
      name: 'Hannah',
      role: 'Life Story Workshop Facilitator',
      avatar: '📜',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'milestone',
        ipa: '/ˈmaɪlstoʊn/',
        partOfSpeech: 'noun',
        meaning: 'An action or event marking a significant change or stage in development',
        exampleSentence: 'Graduating from university was a proud milestone in my life.',
        translations: { hi: 'मील का पत्थर / महत्वपूर्ण पड़ाव' },
      },
      {
        word: 'graduated',
        ipa: '/ˈɡrædʒueɪtɪd/',
        partOfSpeech: 'verb (past)',
        meaning: 'Successfully completed an academic degree, course of study, or training',
        exampleSentence: 'I graduated from college with a degree in computer science.',
        translations: { hi: 'स्नातक की उपाधि प्राप्त की' },
      },
      {
        word: 'grew up',
        ipa: '/ɡruː ʌp/',
        partOfSpeech: 'phrasal verb (past)',
        meaning: 'Advanced from childhood to adulthood; spent one\'s childhood',
        exampleSentence: 'I was born in a small village, but I grew up in a vibrant city.',
        translations: { hi: 'बड़ा हुआ / पला-बढ़ा' },
      },
      {
        word: 'biography',
        ipa: '/baɪˈɒɡrəfi/',
        partOfSpeech: 'noun',
        meaning: 'An account of someone\'s life written or told by someone else or themselves',
        exampleSentence: 'We wrote our short personal biographies in three chapters.',
        translations: { hi: 'जीवनी / जीवन गाथा' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I was born in... and I grew up in...',
        functionCategory: 'Early Life & Origins',
        exampleSentence: 'I was born in Mumbai and I grew up in Pune.',
      },
      {
        phrase: 'After finishing my studies, I...',
        functionCategory: 'Educational Milestones',
        exampleSentence: 'After finishing my studies in 2020, I started my first job.',
      },
      {
        phrase: 'Two years later, I moved to...',
        functionCategory: 'Life Transitions',
        exampleSentence: 'Two years later, I moved to London for my career.',
      },
      {
        phrase: 'Where did you grow up, Hannah?',
        functionCategory: 'Inquiring About Origins',
        exampleSentence: 'Where did you grow up, and when did you start teaching?',
      },
    ],
    grammar: {
      title: 'Biographical Narratives & Time Sequencers: was born / grew up + Time Linkers (First, Then, After that, Finally)',
      conceptExplanation:
        'Use "was/were born in [year/place]" (passive origin) and "grew up in [place]" (past irregular of grow). Use preposition "in" with years ("in 2015") and cities ("in London"). Connect past milestones chronologically using "First", "Then", "After that", "Three years later", "Finally".',
      patternFormula: 'I was born in [Place] in [Year]. I grew up in [Place]. Then in [Year], I [Past Verb]...',
      contrastExamples: [
        {
          incorrect: 'I am born in 1998 in Delhi.',
          correct: 'I was born in 1998 in Delhi.',
          explanation: 'Always use past tense "was born", never "am born".',
        },
        {
          incorrect: 'I growed up in a coastal town.',
          correct: 'I grew up in a coastal town.',
          explanation: 'The past tense of "grow up" is "grew up", not "growed up".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Hannah',
        text: 'Welcome to our life story workshop! Let us begin at the beginning: where and when were you born, and where did you grow up?',
        translation: 'हमारी जीवन कहानी कार्यशाला में आपका स्वागत है! आइए शुरुआत से शुरू करें: आप कहाँ और कब पैदा हुए थे, और आप कहाँ पले-बढ़े?',
      },
      {
        speaker: 'You',
        text: 'I was born in Jaipur in 1999, but my family moved when I was six, and I grew up in New Delhi.',
        translation: 'मेरा जन्म 1999 में जयपुर में हुआ था, लेकिन जब मैं छह साल का था तब मेरा परिवार चला गया, और मैं नई दिल्ली में पला-बढ़ा।',
      },
      {
        speaker: 'Hannah',
        text: 'What a fascinating start! What were the next big milestones in your education and early career?',
        translation: 'क्या शानदार शुरुआत है! आपकी शिक्षा और शुरुआती करियर में अगले बड़े मील के पत्थर क्या थे?',
      },
      {
        speaker: 'You',
        text: 'In 2021, I graduated from university with a degree in design. Then, two years later, I moved abroad to start a new job.',
        translation: '2021 में, मैंने डिजाइन में डिग्री के साथ विश्वविद्यालय से स्नातक किया। फिर, दो साल बाद, मैं एक नई नौकरी शुरू करने के लिए विदेश चला गया।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_59_1',
      type: 'fill_blank',
      prompt: 'Complete the birth origin sentence: "I ___ born in 1999 in a small town."',
      options: [
        { id: 'opt_1', text: 'was', isCorrect: true },
        { id: 'opt_2', text: 'am', isCorrect: false },
        { id: 'opt_3', text: 'were', isCorrect: false },
      ],
      correctAnswer: 'was',
      explanation: 'First-person singular takes "was born".',
    },
    {
      id: 'cp_a1_59_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses past irregular "grow up"?',
      options: [
        { id: 'opt_1', text: 'I grew up in a quiet neighborhood near the lake.', isCorrect: true },
        { id: 'opt_2', text: 'I growed up in a quiet neighborhood near the lake.', isCorrect: false },
        { id: 'opt_3', text: 'I am grow up in a quiet neighborhood.', isCorrect: false },
      ],
      correctAnswer: 'I grew up in a quiet neighborhood near the lake.',
      explanation: 'The past tense of "grow up" is "grew up".',
    },
    {
      id: 'cp_a1_59_3',
      type: 'multiple_choice',
      prompt: 'Choose the correct sequence of life milestone linkers:',
      options: [
        { id: 'opt_1', text: 'First I finished school. Then I went to college. Finally I started my job.', isCorrect: true },
        { id: 'opt_2', text: 'Finally I finished school. First I started job.', isCorrect: false },
        { id: 'opt_3', text: 'Then I was born. First I graduated.', isCorrect: false },
      ],
      correctAnswer: 'First I finished school. Then I went to college. Finally I started my job.',
      explanation: 'Chronological time connectors: First → Then → Finally.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_59_1',
      scenarioContext: 'State where you were born and where you grew up.',
      prompt: 'Build: "I was born in 1999 and I grew up in Delhi."',
      targetStructure: 'Subject + was born in + year + and + subject + grew up in + place',
      wordBank: ['I', 'was', 'born', 'in', '1999', 'and', 'I', 'grew', 'up', 'in', 'Delhi', 'am', 'grow'],
      acceptableSolutions: [
        'I was born in 1999 and I grew up in Delhi',
        'I was born in 1999 and I grew up in Delhi.',
      ],
      explanation: 'Biographical opening sentence.',
    },
    {
      id: 'sc_a1_59_2',
      scenarioContext: 'Describe graduating and moving cities.',
      prompt: 'Build: "I graduated from university and moved to a new city."',
      targetStructure: 'Subject + past verb + from university + and + past verb + to a new city',
      wordBank: ['I', 'graduated', 'from', 'university', 'and', 'moved', 'to', 'a', 'new', 'city', 'graduate', 'moving'],
      acceptableSolutions: [
        'I graduated from university and moved to a new city',
        'I graduated from university and moved to a new city.',
      ],
      explanation: 'Compound past sentence describing milestones.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_59_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello and welcome to our Life Stories workshop! I’m Hannah. To begin our biographical timeline, tell me: where and when were you born, and where did you grow up during your childhood?',
      partnerAudioText:
        'Hello and welcome to our Life Stories workshop! I’m Hannah. To begin our biographical timeline, tell me: where and when were you born, and where did you grow up during your childhood?',
      partnerQuestionHindi:
        'नमस्ते और हमारी जीवन कहानियाँ कार्यशाला में आपका स्वागत है! मैं हन्ना हूँ। हमारी जीवनी समयरेखा शुरू करने के लिए, मुझे बताएं: आप कहाँ और कब पैदा हुए थे, और आप अपने बचपन के दौरान कहाँ पले-बढ़े?',
      expectedFunction: 'State Birth Place, Year & Childhood Location (was born in... grew up in...)',
      contextGoal:
        'State your birth year and city (e.g. born in Jaipur in 1999) and explain where you grew up.',
      targetVocabulary: ['was born in', 'in 1999', 'grew up in', 'childhood', 'family moved'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hello Hannah! I was born in Jaipur in 1999. When I was five years old, my family moved, and I grew up in New Delhi in a lively neighborhood.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I was born in 1999 in Jaipur, and I grew up in New Delhi with my family.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I was born in Jaipur in 1999 and grew up in Delhi.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Birth & Childhood',
          patterns: [
            'was born',
            '1999',
            '2000',
            'grew up',
            'delhi',
            'jaipur',
            'childhood',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'am_born_error',
          pattern: /\bi am born\b/i,
          errorType: 'grammar',
          message: 'Say "I was born", not "I am born".',
          correctionPattern: 'I was born',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_59_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "She ___ born in 2001."',
        options: [
          { id: 'opt_1', text: 'was', isCorrect: true },
          { id: 'opt_2', text: 'is', isCorrect: false },
          { id: 'opt_3', text: 'has', isCorrect: false },
        ],
        correctAnswer: 'was',
        explanation: 'Passive past "was born".',
      },
    },
    {
      id: 'turn_a1_59_2',
      turnIndex: 2,
      partnerPrompt:
        'Growing up in Delhi must have been full of vibrant energy! What happened next in your education and studies, and when did you graduate?',
      partnerAudioText:
        'Growing up in Delhi must have been full of vibrant energy! What happened next in your education and studies, and when did you graduate?',
      partnerQuestionHindi:
        'दिल्ली में बड़ा होना जीवंत ऊर्जा से भरा रहा होगा! आपकी शिक्षा और पढ़ाई में आगे क्या हुआ, और आपने कब स्नातक किया?',
      expectedFunction: 'Narrate Educational Milestones & Graduation Year',
      contextGoal:
        'Explain that you studied at college/university, graduated in 2021/2022 with a degree, and learned valuable skills.',
      targetVocabulary: ['graduated from university', 'in 2021', 'degree in design', 'finished my studies', 'learned skills'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'After finishing high school, I studied computer science and design at university. In 2021, I graduated with honors and completed several practical projects.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I studied computer science at university and graduated in 2021.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I graduated in 2021 with a degree in computer science!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Education & Graduation',
          patterns: [
            'graduated',
            'university',
            'college',
            '2021',
            '2022',
            'degree',
            'studied',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_59_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes university completion?',
        options: [
          { id: 'opt_1', text: 'I graduated from university in 2021.', isCorrect: true },
          { id: 'opt_2', text: 'I am graduate from university in 2021.', isCorrect: false },
          { id: 'opt_3', text: 'I graduation at university on 2021.', isCorrect: false },
        ],
        correctAnswer: 'I graduated from university in 2021.',
        explanation: 'Past Simple "graduated from + in [year]".',
      },
    },
    {
      id: 'turn_a1_59_3',
      turnIndex: 3,
      partnerPrompt:
        'Graduating with honors is a wonderful accomplishment! After graduation, what major life transitions or career changes did you make, and where did you move?',
      partnerAudioText:
        'Graduating with honors is a wonderful accomplishment! After graduation, what major life transitions or career changes did you make, and where did you move?',
      partnerQuestionHindi:
        'सम्मान के साथ स्नातक करना एक अद्भुत उपलब्धि है! स्नातक स्तर की पढ़ाई के बाद, आपने क्या बड़े जीवन परिवर्तन या करियर परिवर्तन किए, और आप कहाँ चले गए?',
      expectedFunction: 'Narrate Career Milestones & Moving Cities (moved to... started working as...)',
      contextGoal:
        'State that two years later you moved to a new city, started working in tech/design, and asked Hannah about her own journey.',
      targetVocabulary: ['two years later', 'moved to a new city', 'started working as', 'career change', 'what about you Hannah'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'After that, I worked at a digital agency for two years. Then, in 2023, I moved to the UK to start an exciting new job! What about you, Hannah—when did you move to Oxford?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I started working at a design company and then moved to the UK. When did you move to Oxford, Hannah?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I moved to the UK in 2023 for a new job! When did you move here, Hannah?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Career & Reciprocal Question',
          patterns: [
            'moved to',
            'started working',
            'job',
            'career',
            '2023',
            'when did you',
            'what about you',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_59_3',
        type: 'fill_blank',
        prompt: 'Fill in the time sequencer: "First I finished school, ___ I moved abroad."',
        options: [
          { id: 'opt_1', text: 'then', isCorrect: true },
          { id: 'opt_2', text: 'at last', isCorrect: false },
          { id: 'opt_3', text: 'before that', isCorrect: false },
        ],
        correctAnswer: 'then',
        explanation: '"then" connects chronological actions.',
      },
    },
    {
      id: 'turn_a1_59_4',
      turnIndex: 4,
      partnerPrompt:
        'I grew up in York and moved to Oxford ten years ago to teach writing! Your life timeline is so inspiring and clearly expressed. You connected your past milestones with fantastic confidence and clarity. Well done!',
      partnerAudioText:
        'I grew up in York and moved to Oxford ten years ago to teach writing! Your life timeline is so inspiring and clearly expressed. You connected your past milestones with fantastic confidence and clarity. Well done!',
      partnerQuestionHindi:
        'मैं यॉर्क में पली-बढ़ी और दस साल पहले लेखन सिखाने के लिए ऑक्सफोर्ड चली आई! आपकी जीवन समयरेखा बहुत प्रेरणादायक और स्पष्ट रूप से व्यक्त की गई है। आपने शानदार आत्मविश्वास और स्पष्टता के साथ अपने पिछले मील के पत्थरों को जोड़ा। बहुत बढ़िया!',
      expectedFunction: 'Express Appreciation & Conclude Biography Workshop',
      contextGoal:
        'Thank Hannah for the insightful workshop, express pride in sharing your story, and say goodbye.',
      targetVocabulary: ['thank you so much Hannah', 'enjoyed sharing my story', 'inspiring workshop', 'great experience', 'goodbye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you so much Hannah! I really enjoyed writing and sharing my story in this inspiring workshop. It was a wonderful experience. Have a great day!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thank you very much Hannah! I enjoyed sharing my story today. Have a wonderful afternoon!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Thanks Hannah! I really enjoyed sharing my story. Goodbye!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Appreciation',
          patterns: [
            'thank you',
            'thanks',
            'enjoyed',
            'story',
            'workshop',
            'have a great day',
            'goodbye',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_59_4',
        type: 'multiple_choice',
        prompt: 'Which sentence concludes the workshop warmly?',
        options: [
          { id: 'opt_1', text: 'Thank you Hannah! I really enjoyed sharing my story today.', isCorrect: true },
          { id: 'opt_2', text: 'Story is finish bye now.', isCorrect: false },
          { id: 'opt_3', text: 'I am must leave talk.', isCorrect: false },
        ],
        correctAnswer: 'Thank you Hannah! I really enjoyed sharing my story today.',
        explanation: 'Polite and reflective conclusion.',
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
