import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_119: ConversationDefinition = {
  id: 'conv_a2_119',
  title: 'Expressing Hopes, Ambitions & Future Possibilities (First Conditional, hope to, might)',
  cefr: 'A2',
  unitId: 'unit_a2_8',
  lessonLinks: ['lesson_a2_8_119'],
  estimatedMinutes: 5,
  scenario:
    'You are meeting senior tech career mentor Fiona MacLeod for a coffee in Leeds to discuss your professional trajectory over the next two to three years. Share your ambitions using First Conditional ("If I complete my UX certification, I will apply for team lead roles"), express hopes and uncertainties using "hope to", "would like to", and "might", and discuss potential relocation options.',
  communicativeGoals: [
    'Articulate career goals and personal ambitions using "hope to + [verb]", "plan to + [verb]", and "would like to + [verb]"',
    'Use the First Conditional to express realistic future conditions and outcomes ("If I pass..., I will apply...")',
    'Express possibilities and degrees of uncertainty using modal auxiliaries ("might", "may", "probably", "definitely")',
    'Discuss work-life balance and relocation aspirations with a professional mentor',
  ],
  canDoStatements: [
    'Can talk about future plans, hopes, and ambitions (CEFR A2)',
    'Can use the First Conditional to describe real future conditions and their results',
    'Can express different degrees of certainty using "might" and "will definitely"',
  ],
  characters: [
    {
      id: 'char_fiona_macleod',
      name: 'Fiona MacLeod',
      role: 'Senior Tech Mentor & Director',
      avatar: '🧭',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'ambition',
        ipa: '/æmˈbɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'A strong desire to do or achieve something significant',
        exampleSentence: 'My main ambition is to lead user-experience design projects.',
        translations: { hi: 'महत्वाकांक्षा / बड़ा लक्ष्य' },
      },
      {
        word: 'hope to',
        ipa: '/həʊp tuː/',
        partOfSpeech: 'verb phrase',
        meaning: 'Want something to happen and think that it is possible',
        exampleSentence: 'I hope to complete my cloud certification before the autumn.',
        translations: { hi: 'आशा करना / उम्मीद रखना' },
      },
      {
        word: 'might',
        ipa: '/maɪt/',
        partOfSpeech: 'modal verb',
        meaning: 'Used to express a possibility (approximately 50% likelihood)',
        exampleSentence: 'If the company allows remote contracts, I might spend a year in Edinburgh.',
        translations: { hi: 'शायद / संभवतः' },
      },
      {
        word: 'promotion',
        ipa: '/prəˈməʊʃən/',
        partOfSpeech: 'noun',
        meaning: 'The advancement of an employee to a higher job rank or position',
        exampleSentence: 'If I achieve my sprint targets, I will ask for a promotion in December.',
        translations: { hi: 'पदोन्नति / प्रमोशन' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'If I pass my exam, I will apply for the senior role.',
        functionCategory: 'First Conditional (If + present, will + verb)',
        exampleSentence: 'If we win the contract, we will expand the team.',
      },
      {
        phrase: 'I hope to lead my own engineering squad in two years.',
        functionCategory: 'Expressing Long-Term Ambition (hope to)',
        exampleSentence: 'I hope to launch a creative side-business.',
      },
      {
        phrase: 'I might take an intensive leadership workshop next spring.',
        functionCategory: 'Expressing Future Possibility (might)',
        exampleSentence: 'I might move closer to the city centre.',
      },
      {
        phrase: 'What advice would you give for stepping up to leadership?',
        functionCategory: 'Asking Mentor for Strategic Guidance',
        exampleSentence: 'How can I build stronger stakeholder presentation skills?',
      },
    ],
    grammar: {
      title: 'First Conditional (Real Future) & Expressing Ambition (Hope to / Might)',
      conceptExplanation:
        '1. First Conditional Formula: "If + Present Simple, will / won\'t + Base Verb" (e.g. "If I pass the exam, I will get a promotion").\n2. Clause order: The "if" clause can come first (with a comma) or second (no comma): "I will apply if I pass".\n3. Degrees of certainty: "will definitely" (100%), "will probably" (75%), "might / may" (50%), "won\'t" (0%).\n4. Ambition structures: "hope to + Base Verb" / "would like to + Base Verb" / "plan to + Base Verb".',
      patternFormula: 'If + [Present Simple], [Subject] + will / might + [Base Verb] | Subject + hope to + [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'If I will pass my exam, I get a new job.',
          correct: 'If I pass my exam, I will get a new job.',
          explanation: 'Never use "will" inside the "if" condition clause; use Present Simple in the if-clause.',
        },
        {
          incorrect: 'I hope to getting promoted.',
          correct: 'I hope to get promoted. / I hope to earn a promotion.',
          explanation: '"Hope to" is followed by a bare infinitive ("to get"), not a gerund.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Fiona MacLeod',
        text: 'Hello Alex! It is wonderful to catch up over coffee. As you look ahead to the next couple of years, what are your major career ambitions?',
        translation: 'नमस्ते एलेक्स! कॉफ़ी पर आपसे मिलकर बहुत अच्छा लगा। जैसे ही आप अगले दो वर्षों की ओर देखते हैं, आपकी प्रमुख करियर महत्वाकांक्षाएं क्या हैं?',
      },
      {
        speaker: 'You',
        text: 'Hello Fiona! Thank you for meeting me. My main ambition is to become a senior front-end lead. If I complete my advanced UX certificate this autumn, I will apply for lead roles within our product group.',
        translation: 'नमस्ते फिओना! मुझसे मिलने के लिए धन्यवाद। मेरी मुख्य महत्वाकांक्षा एक सीनियर फ्रंट-एंड लीड बनना है। अगर मैं इस शरद ऋतु में अपना उन्नत यूएक्स प्रमाणपत्र पूरा कर लेता हूँ, तो मैं अपने उत्पाद समूह के भीतर लीड पदों के लिए आवेदन करूँगा।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_119_1',
      type: 'fill_blank',
      prompt: 'Complete the First Conditional: "If I ___ (pass) the exam, I will apply for promotion."',
      options: [
        { id: 'opt_1', text: 'pass', isCorrect: true },
        { id: 'opt_2', text: 'will pass', isCorrect: false },
        { id: 'opt_3', text: 'passed', isCorrect: false },
      ],
      correctAnswer: 'pass',
      explanation: 'In the First Conditional, use Present Simple after "if".',
    },
    {
      id: 'cp_a2_119_2',
      type: 'multiple_choice',
      prompt: 'Which modal indicates an uncertain future possibility (around 50% probability)?',
      options: [
        { id: 'opt_1', text: 'Might', isCorrect: true },
        { id: 'opt_2', text: 'Will definitely', isCorrect: false },
        { id: 'opt_3', text: 'Must', isCorrect: false },
      ],
      correctAnswer: 'Might',
      explanation: '"Might" expresses a possible but not certain future outcome.',
    },
    {
      id: 'cp_a2_119_3',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses a future hope?',
      options: [
        { id: 'opt_1', text: 'I hope to lead my own design projects next year.', isCorrect: true },
        { id: 'opt_2', text: 'I hope to leading design.', isCorrect: false },
        { id: 'opt_3', text: 'I am hope to lead.', isCorrect: false },
      ],
      correctAnswer: 'I hope to lead my own design projects next year.',
      explanation: '"Hope to + base verb" is the correct pattern.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_119_1',
      scenarioContext: 'Formulate a First Conditional goal.',
      prompt: 'Build: "If I pass the test I will apply for promotion."',
      targetStructure: 'If + subject + verb + object + subject + will + verb + prepositional phrase',
      wordBank: ['If', 'I', 'pass', 'the', 'test', 'I', 'will', 'apply', 'for', 'promotion', 'passed', 'would'],
      acceptableSolutions: [
        'If I pass the test I will apply for promotion',
        'If I pass the test, I will apply for promotion.',
        'If I pass the test I will apply for promotion.',
      ],
      explanation: 'First Conditional structure: If + present, will + base verb.',
    },
    {
      id: 'sc_a2_119_2',
      scenarioContext: 'Express a possibility regarding relocation.',
      prompt: 'Build: "I might relocate to Scotland if remote work is approved."',
      targetStructure: 'Subject + might + verb + place + if + condition',
      wordBank: ['I', 'might', 'relocate', 'to', 'Scotland', 'if', 'remote', 'work', 'is', 'approved', 'will', 'was'],
      acceptableSolutions: [
        'I might relocate to Scotland if remote work is approved',
        'I might relocate to Scotland if remote work is approved.',
      ],
      explanation: 'Expresses conditional future possibility with "might".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_119_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi Alex, it is great to see you! We are here today to talk through your career vision. When you imagine your career over the next two to three years, what are your biggest professional ambitions?',
      partnerAudioText:
        'Hi Alex, it is great to see you! We are here today to talk through your career vision. When you imagine your career over the next two to three years, what are your biggest professional ambitions?',
      partnerQuestionHindi:
        'नमस्ते एलेक्स, आपको देखकर बहुत अच्छा लगा! हम आज आपके करियर दृष्टिकोण पर बात करने के लिए यहाँ हैं। जब आप अगले दो से तीन वर्षों में अपने करियर की कल्पना करते हैं, तो आपकी सबसे बड़ी पेशेवर महत्वाकांक्षाएं क्या हैं?',
      expectedFunction: 'State Career Ambition & First Conditional (hope to / if I pass... will apply for senior role)',
      contextGoal:
        'State that you hope to become a Senior UX Engineer; explain that if you complete your advanced design certification this autumn, you will apply for squad lead opportunities.',
      targetVocabulary: ['hope to become a Senior UX Engineer', 'if I complete my certification this autumn', 'will apply for team lead roles', 'design high-impact web applications'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Hi Fiona! Over the next two years, I hope to step up to a Senior UX Engineer role. If I complete my advanced certification this autumn, I will apply for team lead positions within our product group so I can guide junior developers.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Ambition (hope to / senior / UX / lead / role)',
          patterns: ['hope to', 'senior', 'ux', 'lead', 'engineer', 'developer', 'ambition', 'goal'],
          required: true,
        },
        {
          name: 'First Conditional (if I complete / pass / will apply)',
          patterns: ['if', 'complete', 'pass', 'finish', 'certification', 'will apply', 'will look'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'if_will_error',
          pattern: /\bif i will complete\b|\bif i will pass\b/i,
          errorType: 'grammar',
          message: 'Do not use "will" in the if-clause: say "If I complete my certification, I will apply...".',
          correctionPattern: 'If I complete my certification, I will apply',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_119_1',
        type: 'multiple_choice',
        prompt: 'Which First Conditional sentence is correct?',
        options: [
          { id: 'opt_1', text: 'If I finish the course, I will apply for a promotion.', isCorrect: true },
          { id: 'opt_2', text: 'If I will finish the course, I apply for promotion.', isCorrect: false },
          { id: 'opt_3', text: 'If I finish, I am apply.', isCorrect: false },
        ],
        correctAnswer: 'If I finish the course, I will apply for a promotion.',
        explanation: '"If + present simple, will + base verb".',
      },
    },
    {
      id: 'turn_a2_119_2',
      turnIndex: 2,
      partnerPrompt:
        'That is a very realistic and commendable goal. Stepping into a lead role requires not just technical skill, but also team mentoring and stakeholder communication. How do you plan to build those leadership skills before autumn?',
      partnerAudioText:
        'That is a very realistic and commendable goal. Stepping into a lead role requires not just technical skill, but also team mentoring and stakeholder communication. How do you plan to build those leadership skills before autumn?',
      partnerQuestionHindi:
        'यह एक बहुत ही यथार्थवादी और सराहनीय लक्ष्य है। एक लीड पद पर कदम रखने के लिए न केवल तकनीकी कौशल, बल्कि टीम मेंटरिंग और स्टेकहोल्डर संचार की भी आवश्यकता होती है। आप शरद ऋतु से पहले उन नेतृत्व कौशलों का निर्माण करने की क्या योजना बना रहे हैं?',
      expectedFunction: 'Outline Action Plan (might shadow lead / will mentor intern)',
      contextGoal:
        'Explain that you will mentor the new summer intern; you might also shadow Nathan during client design reviews to learn how to present complex architecture clearly.',
      targetVocabulary: ['will mentor the new summer intern', 'might shadow our engineering lead during client presentations', 'practice stakeholder communication', 'run bi-weekly knowledge sharing sessions'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'To develop those skills, I will mentor our new summer engineering intern starting next month. I might also shadow Nathan during client architecture reviews so I can observe how he presents design trade-offs effectively.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Definite Action (will mentor intern / presentations)',
          patterns: ['will mentor', 'mentor', 'intern', 'knowledge sharing', 'practice', 'presentations'],
          required: true,
        },
        {
          name: 'Possibility (might shadow / observe / learn / nathan)',
          patterns: ['might', 'shadow', 'nathan', 'client', 'reviews', 'observe', 'leadership'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_119_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I ___ shadow our team lead during client meetings next month."',
        options: [
          { id: 'opt_1', text: 'might', isCorrect: true },
          { id: 'opt_2', text: 'might to', isCorrect: false },
          { id: 'opt_3', text: 'am might', isCorrect: false },
        ],
        correctAnswer: 'might',
        explanation: 'Modal "might" is followed directly by a base verb ("might shadow").',
      },
    },
    {
      id: 'turn_a2_119_3',
      turnIndex: 3,
      partnerPrompt:
        'Shadowing Nathan is a brilliant idea! Now looking at lifestyle and work environment: our company is introducing a flexible remote policy next quarter. Are you planning to stay in Leeds, or might you consider relocating?',
      partnerAudioText:
        'Shadowing Nathan is a brilliant idea! Now looking at lifestyle and work environment: our company is introducing a flexible remote policy next quarter. Are you planning to stay in Leeds, or might you consider relocating?',
      partnerQuestionHindi:
        'नाथन की छाया में काम करना एक शानदार विचार है! अब जीवनशैली और कार्य परिवेश को देखते हुए: हमारी कंपनी अगली तिमाही में एक लचीली रिमोट नीति पेश कर रही है। क्या आप लीड्स में रहने की योजना बना रहे हैं, या आप स्थानांतरित होने पर विचार कर सकते हैं?',
      expectedFunction: 'Express Relocation Possibilities (might move to Edinburgh if full remote is approved)',
      contextGoal:
        'Explain that you love Leeds, but if the full-remote policy is approved, you might spend a year living and working from Edinburgh to be closer to hiking and nature.',
      targetVocabulary: ['if the full-remote policy is approved', 'might relocate to Edinburgh for a year', 'closer to Scottish highlands and hiking trails', 'maintain strong productivity'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'I really enjoy living in Leeds, but if the flexible remote policy is approved, I might spend a year living in Edinburgh. I love hiking in the highlands, and working remotely would allow me to combine my career with outdoor hobbies.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Relocation & Condition (if remote / might move / Edinburgh / Scotland)',
          patterns: ['if', 'remote', 'policy', 'might', 'relocate', 'move', 'edinburgh', 'scotland', 'year', 'hiking', 'nature'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_119_3',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly expresses a conditional lifestyle plan?',
        options: [
          { id: 'opt_1', text: 'If the company approves remote work, I might spend six months in Scotland.', isCorrect: true },
          { id: 'opt_2', text: 'If company will approve remote, I will might go.', isCorrect: false },
          { id: 'opt_3', text: 'If I remote, Scotland I live.', isCorrect: false },
        ],
        correctAnswer: 'If the company approves remote work, I might spend six months in Scotland.',
        explanation: 'Accurate First Conditional with modal "might".',
      },
    },
    {
      id: 'turn_a2_119_4',
      turnIndex: 4,
      partnerPrompt:
        'Edinburgh is an inspiring city for tech creatives! You have a well-structured roadmap, Alex. I will happily connect you with our Edinburgh office lead so you have a local contact when the time comes. Shall we review your progress in three months?',
      partnerAudioText:
        'Edinburgh is an inspiring city for tech creatives! You have a well-structured roadmap, Alex. I will happily connect you with our Edinburgh office lead so you have a local contact when the time comes. Shall we review your progress in three months?',
      partnerQuestionHindi:
        'एडिनबर्ग तकनीकी रचनाकारों के लिए एक प्रेरक शहर है! आपके पास एक अच्छी तरह से संरचित रोडमैप है, एलेक्स। समय आने पर मैं आपको हमारे एडिनबर्ग कार्यालय के प्रमुख से सहर्ष जोड़ दूंगी ताकि आपके पास एक स्थानीय संपर्क हो। क्या हम तीन महीने में आपकी प्रगति की समीक्षा करें?',
      expectedFunction: 'Agree on Three-Month Milestone Review & Express Appreciation',
      contextGoal:
        'Agree gladly to the three-month review; thank Fiona warmly for her inspiring advice and mentorship support.',
      targetVocabulary: ['review progress in three months sounds perfect', 'thank you Fiona for your inspiring guidance', 'feel motivated about the future', 'have a wonderful day'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Reviewing our progress in three months sounds perfect! Thank you so much Fiona for your inspiring mentorship and encouraging advice today. I feel very energized about my roadmap. Have a wonderful day!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Agreement & Gratitude',
          patterns: ['three months', 'perfect', 'sounds great', 'thank you', 'fiona', 'mentorship', 'guidance', 'energized', 'wonderful day'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_119_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Thank you for your ___ (inspire) guidance today!"',
        options: [
          { id: 'opt_1', text: 'inspiring', isCorrect: true },
          { id: 'opt_2', text: 'inspired', isCorrect: false },
          { id: 'opt_3', text: 'inspirationally', isCorrect: false },
        ],
        correctAnswer: 'inspiring',
        explanation: 'Use the adjective "inspiring" to describe guidance.',
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
