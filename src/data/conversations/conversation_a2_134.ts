import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_134: ConversationDefinition = {
  id: 'conv_a2_134',
  title: 'Future Aspirations, Career Goals & Life Ambitions (Alumni Mentoring Network)',
  cefr: 'A2',
  unitId: 'unit_a2_9',
  lessonLinks: ['lesson_a2_9_134'],
  estimatedMinutes: 5,
  scenario:
    'You are in the grand hall of the London School of Economics (LSE) attending an evening alumni career networking reception. Chat with senior strategy director Marcus Thorne about your long-term ambitions and five-year career plan. Differentiate planned intentions ("I am going to earn a professional certification next spring") from broad hopes and dreams ("I hope to lead international development projects" / "I dream of starting my own consultancy"), reflect on preparation already completed with the Present Perfect, and seek senior career guidance.',
  communicativeGoals: [
    'Express concrete future plans and intentions using "be going to + base verb"',
    'Articulate personal aspirations and ambitions using "hope to", "plan to", and "dream of + gerund"',
    'Connect past preparations (Present Perfect) with future career trajectories',
    'Ask senior professionals for strategic advice on career advancement and mentorship',
  ],
  canDoStatements: [
    'Can talk about future plans, career ambitions, and personal goals in detail (CEFR A2)',
    'Can distinguish between definite plans ("going to") and hopes/intentions ("hope to", "plan to")',
    'Can describe educational and professional aspirations and ask for mentorship advice',
  ],
  characters: [
    {
      id: 'char_marcus_thorne',
      name: 'Marcus Thorne',
      role: 'Senior Strategy Director & Executive Alumni Mentor',
      avatar: '👔',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'aspiration',
        ipa: '/ˌæspəˈreɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'A hope or ambition of achieving something significant in life or career',
        exampleSentence: 'My long-term aspiration is to manage a global renewable energy initiative.',
        translations: { hi: 'आकांक्षा / उच्च अभिलाषा' },
      },
      {
        word: 'plan to',
        ipa: '/plæn tuː/',
        partOfSpeech: 'verb phrase',
        meaning: 'To have a decided intention to do something in the future',
        exampleSentence: 'I plan to enroll in a postgraduate data science diploma next September.',
        translations: { hi: 'योजना बनाना' },
      },
      {
        word: 'dream of',
        ipa: '/driːm ɒv/',
        partOfSpeech: 'verb phrase',
        meaning: 'To indulge in daydreams or strongly desire a particular future lifestyle',
        exampleSentence: 'I dream of launching my own ethical design consultancy in five years.',
        translations: { hi: 'का सपना देखना' },
      },
      {
        word: 'trajectory',
        ipa: '/trəˈdʒɛktəri/',
        partOfSpeech: 'noun',
        meaning: 'The path, progression, or development of someone’s professional career',
        exampleSentence: 'Mentorship helps accelerate your career trajectory into executive roles.',
        translations: { hi: 'कैरियर की दिशा / प्रक्षेपवक्र' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'In five years, I hope to manage an international project team.',
        functionCategory: 'Expressing Long-Term Ambition (hope to)',
        exampleSentence: 'I hope to work abroad in Singapore or Toronto.',
      },
      {
        phrase: 'Next spring, I am going to complete my professional certification.',
        functionCategory: 'Expressing Definite Future Plan (be going to)',
        exampleSentence: 'I am going to take my final qualifying exam in June.',
      },
      {
        phrase: 'I dream of launching my own sustainable business one day.',
        functionCategory: 'Expressing Dream (dream of + -ing)',
        exampleSentence: 'I dream of writing a book on leadership.',
      },
      {
        phrase: 'I have already gained two years of practical project experience.',
        functionCategory: 'Connecting Past Milestones (Present Perfect)',
        exampleSentence: 'I have already managed three junior interns.',
      },
    ],
    grammar: {
      title: 'Future Forms: Definite Plans (Going to) vs. Ambitions (Hope to / Plan to / Dream of)',
      conceptExplanation:
        '1. Definite / Decided Plans: "Subject + be + going to + Base Verb" (e.g. "I am going to start my master\'s degree in October").\n2. Hopes & Aspirations: "Subject + hope to / plan to / aim to + Base Verb" (e.g. "I hope to lead a research division in five years").\n3. Dreams & Passions: "Subject + dream of + Gerund (-ing)" (e.g. "I dream of building an NGO").\n4. Synthesizing Past & Future: "I have already worked in finance for two years (Past to Now), and next year I am going to transition into green tech (Future)".',
      patternFormula: 'I am going to [Base Verb] + [Time] | In five years, I hope/plan to [Base Verb] | I dream of [Verb-ing]',
      contrastExamples: [
        {
          incorrect: 'I dream to launch my startup.',
          correct: 'I dream of launching my startup. / I hope to launch my startup.',
          explanation: '"Dream" is followed by the preposition "of" + gerund ("dream of launching").',
        },
        {
          incorrect: 'Next year I will to study abroad.',
          correct: 'Next year I am going to study abroad. / Next year I plan to study abroad.',
          explanation: '"Will" or "going to" never take "to" before the auxiliary base verb.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Marcus Thorne',
        text: 'Good evening! Welcome to the LSE alumni circle. I’m Marcus Thorne. It’s always exciting to meet ambitious rising professionals. What are your major career goals for the next five years?',
        translation: 'शुभ संध्या! एलएसई पूर्व छात्र सर्कल में आपका स्वागत है। मैं मार्कस थॉर्न हूँ। महत्वाकांक्षी उभरते पेशेवरों से मिलना हमेशा रोमांचक होता है। अगले पांच वर्षों के लिए आपके प्रमुख करियर लक्ष्य क्या हैं?',
      },
      {
        speaker: 'You',
        text: 'Good evening Marcus! In the short term, I am going to complete my certification in project management next spring. In five years, I hope to lead international sustainability operations, and I dream of launching my own green consultancy in the future.',
        translation: 'शुभ संध्या मार्कस! अल्पावधि में, मैं अगली वसंत में प्रोजेक्ट मैनेजमेंट में अपना प्रमाणन पूरा करने जा रहा हूँ। पांच वर्षों में, मैं अंतरराष्ट्रीय स्थिरता संचालन का नेतृत्व करने की आशा करता हूँ, और मैं भविष्य में अपनी खुद की ग्रीन कंसल्टेंसी शुरू करने का सपना देखता हूँ।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_134_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "I dream of ___ (starting / to start) my own tech enterprise."',
      options: [
        { id: 'opt_1', text: 'starting', isCorrect: true },
        { id: 'opt_2', text: 'to start', isCorrect: false },
        { id: 'opt_3', text: 'start', isCorrect: false },
      ],
      correctAnswer: 'starting',
      explanation: 'The phrase "dream of" is followed by a gerund (-ing form).',
    },
    {
      id: 'cp_a2_134_2',
      type: 'multiple_choice',
      prompt: 'Which sentence describes a firm, decided future plan?',
      options: [
        { id: 'opt_1', text: 'I am going to begin my postgraduate course in September.', isCorrect: true },
        { id: 'opt_2', text: 'Maybe I will perhaps study in September.', isCorrect: false },
        { id: 'opt_3', text: 'I am dream to study in September.', isCorrect: false },
      ],
      correctAnswer: 'I am going to begin my postgraduate course in September.',
      explanation: '"Be going to" expresses a prior decision or structured future intention.',
    },
    {
      id: 'cp_a2_134_3',
      type: 'multiple_choice',
      prompt: 'How do you express a future career ambition professionally?',
      options: [
        { id: 'opt_1', text: 'In five years, I hope to lead a global strategy team.', isCorrect: true },
        { id: 'opt_2', text: 'In five years, I am hoping to leaded.', isCorrect: false },
        { id: 'opt_3', text: 'In five years, I hope lead.', isCorrect: false },
      ],
      correctAnswer: 'In five years, I hope to lead a global strategy team.',
      explanation: '"Hope + to + base verb" is the correct standard structure.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_134_1',
      scenarioContext: 'State five-year ambition.',
      prompt: 'Build: "In five years I hope to manage international projects."',
      targetStructure: 'Prepositional phrase + subject + hope to + base verb + object',
      wordBank: ['In', 'five', 'years', 'I', 'hope', 'to', 'manage', 'international', 'projects', 'managing', 'am', 'dream'],
      acceptableSolutions: [
        'In five years I hope to manage international projects',
        'In five years I hope to manage international projects.',
        'In five years, I hope to manage international projects.',
      ],
      explanation: 'Future ambition structure with "hope to".',
    },
    {
      id: 'sc_a2_134_2',
      scenarioContext: 'Express decided plan with going to.',
      prompt: 'Build: "Next spring I am going to finish my professional diploma."',
      targetStructure: 'Time phrase + subject + am going to + base verb + object',
      wordBank: ['Next', 'spring', 'I', 'am', 'going', 'to', 'finish', 'my', 'professional', 'diploma', 'finishing', 'will to'],
      acceptableSolutions: [
        'Next spring I am going to finish my professional diploma',
        'Next spring I am going to finish my professional diploma.',
        'Next spring, I am going to finish my professional diploma.',
      ],
      explanation: 'Decided plan using "be going to".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_134_1',
      turnIndex: 1,
      partnerPrompt:
        'Good evening! Welcome to the London School of Economics alumni reception. I’m Marcus Thorne, strategy director at Meridian Global. What stage are you at in your career, and what are your main goals for the next few years?',
      partnerAudioText:
        'Good evening! Welcome to the London School of Economics alumni reception. I’m Marcus Thorne, strategy director at Meridian Global. What stage are you at in your career, and what are your main goals for the next few years?',
      partnerQuestionHindi:
        'शुभ संध्या! लंदन स्कूल ऑफ इकोनॉमिक्स के पूर्व छात्र स्वागत समारोह में आपका स्वागत है। मैं मार्कस थॉर्न हूँ, मेरिडियन ग्लोबल में रणनीति निदेशक। आप अपने करियर के किस चरण में हैं, और अगले कुछ वर्षों के लिए आपके मुख्य लक्ष्य क्या हैं?',
      expectedFunction: 'Articulate 5-Year Aspirations (going to complete diploma next spring / hope to lead projects)',
      contextGoal:
        'Explain that next spring you are going to complete your professional certification in project management, and in five years you hope to lead international development projects; you dream of launching your own green consultancy one day.',
      targetVocabulary: ['next spring I am going to finish my professional diploma', 'in five years I hope to lead international development projects', 'dream of launching my own sustainability consultancy one day', 'advancing into strategic leadership'],
      suggestedResponses: [
        {
          label: 'Integrated A2 Scaffold',
          text: 'Good evening Marcus! Currently, I am preparing for my future transitions: next spring, I am going to finish my professional diploma in project management. In five years, I hope to lead international sustainability projects, and I dream of launching my own consultancy one day.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Near-term Plan (next spring / going to finish / diploma / certification / project management)',
          patterns: ['next spring', 'going to', 'diploma', 'certification', 'project management', 'finish', 'complete'],
          required: true,
        },
        {
          name: 'Long-term Aspirations (five years / hope to lead / international / dream of / consultancy / startup / green)',
          patterns: ['five years', 'hope to', 'lead', 'international', 'dream of', 'consultancy', 'launch', 'sustainability', 'future'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'dream_to_launch_error',
          pattern: /\bi dream to launch\b/i,
          errorType: 'grammar',
          message: 'Say "I dream of launching" (dream of + gerund).',
          correctionPattern: 'I dream of launching my own consultancy',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_134_1',
        type: 'multiple_choice',
        prompt: 'Which phrase is grammatically correct with "dream"?',
        options: [
          { id: 'opt_1', text: 'I dream of building an international charity.', isCorrect: true },
          { id: 'opt_2', text: 'I dream to build an international charity.', isCorrect: false },
          { id: 'opt_3', text: 'I dream building an charity.', isCorrect: false },
        ],
        correctAnswer: 'I dream of building an international charity.',
        explanation: '"Dream" is followed by the preposition "of" + gerund (-ing).',
      },
    },
    {
      id: 'turn_a2_134_2',
      turnIndex: 2,
      partnerPrompt:
        'Sustainability and green strategy are expanding rapidly across global markets! What preparation or experience have you already gained to build toward these leadership ambitions?',
      partnerAudioText:
        'Sustainability and green strategy are expanding rapidly across global markets! What preparation or experience have you already gained to build toward these leadership ambitions?',
      partnerQuestionHindi:
        'स्थिरता और हरित रणनीति वैश्विक बाजारों में तेजी से विस्तार कर रही है! इन नेतृत्व महत्वाकांक्षाओं के निर्माण के लिए आपने पहले ही क्या तैयारी या अनुभव प्राप्त कर लिया है?',
      expectedFunction: 'Detail Past Milestones with Present Perfect (have worked for 2 years / completed workshops)',
      contextGoal:
        'Explain that you have worked in operations for two years, have already completed two executive leadership workshops, and have collaborated on three cross-border initiatives.',
      targetVocabulary: ['have worked in operations for two years', 'have already completed two leadership workshops', 'have collaborated on three cross-border team initiatives', 'built strong data analysis skills'],
      suggestedResponses: [
        {
          label: 'Integrated A2 Scaffold',
          text: 'I have worked in project operations for two years, and I have already completed two executive leadership workshops. Furthermore, I have collaborated with international colleagues on three cross-border initiatives, which gave me valuable cross-cultural experience.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Work Experience (worked / operations / two years / for 2 years)',
          patterns: ['worked', 'operations', 'two years', 'for two years', 'experience', 'career'],
          required: true,
        },
        {
          name: 'Completed Milestones (completed / workshops / collaborated / cross-border / initiatives / international)',
          patterns: ['completed', 'workshops', 'leadership', 'collaborated', 'cross-border', 'international', 'initiatives', 'skills'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_134_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I have ___ (already / yet) completed two executive training seminars."',
        options: [
          { id: 'opt_1', text: 'already', isCorrect: true },
          { id: 'opt_2', text: 'yet', isCorrect: false },
          { id: 'opt_3', text: 'ever', isCorrect: false },
        ],
        correctAnswer: 'already',
        explanation: 'Use "already" in positive Present Perfect sentences to emphasize completion.',
      },
    },
    {
      id: 'turn_a2_134_3',
      turnIndex: 3,
      partnerPrompt:
        'Cross-cultural collaboration is invaluable for executive leadership. Looking ahead to the next twelve months, what key challenges do you anticipate, and what guidance would you seek from a senior mentor like myself?',
      partnerAudioText:
        'Cross-cultural collaboration is invaluable for executive leadership. Looking ahead to the next twelve months, what key challenges do you anticipate, and what guidance would you seek from a senior mentor like myself?',
      partnerQuestionHindi:
        'क्रॉस-सांस्कृतिक सहयोग कार्यकारी नेतृत्व के लिए अमूल्य है। अगले बारह महीनों को देखते हुए, आप किन प्रमुख चुनौतियों का अनुमान लगाते हैं, और आप मेरे जैसे वरिष्ठ संरक्षक से क्या मार्गदर्शन प्राप्त करना चाहेंगे?',
      expectedFunction: 'Anticipate Challenges & Inquire About Senior Mentorship Advice',
      contextGoal:
        'State that transitioning from technical tasks to strategic stakeholder negotiations will be your main challenge; ask Marcus what advice he would give to someone aiming for executive director roles.',
      targetVocabulary: ['transitioning from technical tasks to strategic negotiations', 'managing high-level stakeholders', 'what advice would you give for stepping into executive roles?', 'how can I build a strong industry network?'],
      suggestedResponses: [
        {
          label: 'Integrated A2 Scaffold',
          text: 'My biggest challenge will be transitioning from day-to-day operations to high-level stakeholder negotiations. What advice would you give to someone stepping into executive roles, and how can I cultivate a strong professional network?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Anticipated Challenge (transitioning / stakeholder / negotiations / strategy / operations / challenge)',
          patterns: ['transitioning', 'stakeholder', 'negotiations', 'strategy', 'operations', 'challenge', 'managing', 'stepping up'],
          required: true,
        },
        {
          name: 'Mentorship Advice Question (what advice / executive roles / network / guidance / how can I)',
          patterns: ['what advice', 'executive', 'network', 'guidance', 'how can i', 'mentor', 'recommend', 'insights'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_134_3',
        type: 'multiple_choice',
        prompt: 'Which question politely asks for executive mentorship advice?',
        options: [
          { id: 'opt_1', text: 'What advice would you give to someone stepping into executive roles?', isCorrect: true },
          { id: 'opt_2', text: 'Tell me how to be director fast.', isCorrect: false },
          { id: 'opt_3', text: 'What advice you give for become boss?', isCorrect: false },
        ],
        correctAnswer: 'What advice would you give to someone stepping into executive roles?',
        explanation: 'Polite conditional modal question with "would you give".',
      },
    },
    {
      id: 'turn_a2_134_4',
      turnIndex: 4,
      partnerPrompt:
        'My core advice is twofold: first, learn to listen actively to stakeholders before presenting solutions; second, find mentors who challenge your thinking. I would be delighted to mentor you through our LSE formal mentorship scheme. Let’s connect on LinkedIn and schedule a quarterly catch-up coffee!',
      partnerAudioText:
        'My core advice is twofold: first, learn to listen actively to stakeholders before presenting solutions; second, find mentors who challenge your thinking. I would be delighted to mentor you through our LSE formal mentorship scheme. Let’s connect on LinkedIn and schedule a quarterly catch-up coffee!',
      partnerQuestionHindi:
        'मेरी मुख्य सलाह दोहरी है: सबसे पहले, समाधान प्रस्तुत करने से पहले हितधारकों को सक्रिय रूप से सुनना सीखें; दूसरा, ऐसे संरक्षक खोजें जो आपकी सोच को चुनौती दें। मुझे एलएसई औपचारिक मेंटरशिप योजना के माध्यम से आपका मार्गदर्शन करने में खुशी होगी। आइए लिंक्डइन पर जुड़ें और त्रैमासिक कॉफी का समय निर्धारित करें!',
      expectedFunction: 'Express Gratitude, Accept Mentorship Offer & Conclude Networking Conversation',
      contextGoal:
        'Thank Marcus warmly for the valuable insights and generous mentorship offer; confirm you will connect on LinkedIn tonight and send a calendar invite for coffee.',
      targetVocabulary: ['thank you Marcus for your inspiring advice and mentorship offer', 'will connect on LinkedIn tonight', 'look forward to scheduling our quarterly coffee', 'have a fantastic evening'],
      suggestedResponses: [
        {
          label: 'Integrated A2 Scaffold',
          text: 'Thank you so much Marcus for your inspiring advice and for offering to mentor me! I will connect with you on LinkedIn tonight and reach out to schedule our quarterly coffee. Have a fantastic evening!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Follow-Up (thank you / marcus / inspiring / mentorship / linkedin / tonight / coffee / fantastic evening)',
          patterns: ['thank you', 'thanks', 'marcus', 'inspiring', 'mentorship', 'mentor', 'linkedin', 'tonight', 'coffee', 'fantastic evening', 'good evening'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_134_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I look forward to ___ (connecting / connect) with you on LinkedIn."',
        options: [
          { id: 'opt_1', text: 'connecting', isCorrect: true },
          { id: 'opt_2', text: 'connect', isCorrect: false },
          { id: 'opt_3', text: 'connected', isCorrect: false },
        ],
        correctAnswer: 'connecting',
        explanation: '"Look forward to" is followed by a gerund ("connecting").',
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
