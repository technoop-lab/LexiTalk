import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_71: ConversationDefinition = {
  id: 'conv_a1_71',
  title: 'Job Applications, Resumes & Work Experience',
  cefr: 'A1',
  unitId: 'unit_a1_5',
  lessonLinks: ['lesson_a1_5_71'],
  estimatedMinutes: 5,
  scenario:
    'You meet with career advisor Sandra Campbell at a university careers center in Cambridge. You are reviewing your resume/CV for a junior front-end web developer position. You discuss your educational background, summarize past work experience and responsibilities, highlight key technical and language skills, and explain your motivation for applying.',
  communicativeGoals: [
    'Describe educational qualifications and degrees using Past Simple ("I graduated with a Bachelor\'s degree in Computer Science")',
    'Explain previous work experience, job duties, and responsibilities ("In my previous role, I developed responsive web pages")',
    'Highlight key skills and achievements using Present Perfect and Present Simple ("I have worked with HTML, CSS, and JavaScript for two years")',
    'Express enthusiasm and career motivation for a target job role',
  ],
  canDoStatements: [
    'Can describe educational background and degrees (CEFR A1.2)',
    'Can talk about previous work responsibilities using past tense verbs',
    'Can list key technical and communication skills on a resume',
  ],
  characters: [
    {
      id: 'char_sandra_career',
      name: 'Sandra Campbell',
      role: 'Senior Career Advisor',
      avatar: '💼',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'qualification',
        ipa: '/ˌkwɒlɪfɪˈkeɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'An official record of achievement awarded on the successful completion of a course of training or study',
        exampleSentence: 'What academic qualifications and technical certifications do you hold?',
        translations: { hi: 'योग्यता / डिग्री / प्रमाण पत्र' },
      },
      {
        word: 'experience',
        ipa: '/ɪkˈspɪəriəns/',
        partOfSpeech: 'noun',
        meaning: 'Practical contact with and observation of facts or events; knowledge gained over time',
        exampleSentence: 'I have two years of practical work experience as a junior web designer.',
        translations: { hi: 'अनुभव / कार्य अनुभव' },
      },
      {
        word: 'responsibility',
        ipa: '/rɪˌspɒnsəˈbɪlɪti/',
        partOfSpeech: 'noun',
        meaning: 'A duty or task that you are required or expected to do as part of your job',
        exampleSentence: 'My main responsibilities included designing UI components and testing code.',
        translations: { hi: 'जिम्मेदारी / दायित्व' },
      },
      {
        word: 'achievement',
        ipa: '/əˈtʃiːvmənt/',
        partOfSpeech: 'noun',
        meaning: 'A thing done successfully, typically by effort, courage, or skill',
        exampleSentence: 'One of my key achievements was improving website loading speed by twenty percent.',
        translations: { hi: 'उपलब्धि' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I graduated with a degree in...',
        functionCategory: 'Educational Background',
        exampleSentence: 'I graduated with a Bachelor\'s degree in Computer Science in 2023.',
      },
      {
        phrase: 'In my previous role, I was responsible for...',
        functionCategory: 'Past Responsibilities',
        exampleSentence: 'In my previous role, I was responsible for maintaining the company website.',
      },
      {
        phrase: 'I have experience in...',
        functionCategory: 'Skills Summary',
        exampleSentence: 'I have solid experience in front-end development, customer support, and teamwork.',
      },
      {
        phrase: 'I am applying for this position because...',
        functionCategory: 'Career Motivation',
        exampleSentence: 'I am applying for this position because I want to build accessible web applications.',
      },
    ],
    grammar: {
      title: 'Describing Career History: Past Simple for Past Jobs vs. Present Perfect for Ongoing Skills',
      conceptExplanation:
        'Use Past Simple ("I studied", "I worked", "I designed") for completed educational degrees and previous jobs. Use Present Perfect ("I have worked for two years") or Present Simple ("I am skilled in") for existing abilities.',
      patternFormula: 'I graduated in [Year] with a degree in [Field]. In my previous role, I was responsible for [Duty].',
      contrastExamples: [
        {
          incorrect: 'I study university last year.',
          correct: 'I studied at university last year and graduated with honors.',
          explanation: 'Use Past Simple "studied / graduated" for finished past education.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Sandra',
        text: 'Welcome Alex! Let us examine your CV for the junior software developer vacancy. What educational qualifications do you have?',
        translation: 'स्वागत है एलेक्स! आइए जूनियर सॉफ्टवेयर डेवलपर रिक्ति के लिए आपके बायोडाटा की जांच करें। आपके पास क्या शैक्षणिक योग्यताएं हैं?',
      },
      {
        speaker: 'You',
        text: 'I graduated with a Bachelor\'s degree in Computer Science from the University of Manchester in 2023.',
        translation: 'मैंने 2023 में मैनचेस्टर विश्वविद्यालय से कंप्यूटर साइंस में स्नातक की डिग्री प्राप्त की।',
      },
      {
        speaker: 'Sandra',
        text: 'Excellent foundation. What were your primary responsibilities in your recent web internship?',
        translation: 'उत्कृष्ट आधार। आपके हालिया वेब इंटर्नशिप में आपकी प्राथमिक जिम्मेदारियां क्या थीं?',
      },
      {
        speaker: 'You',
        text: 'In my previous role, I was responsible for building responsive website layouts and optimizing web page speed.',
        translation: 'मेरी पिछली भूमिका में, मैं रिस्पॉन्सिव वेबसाइट लेआउट बनाने और वेब पेज की गति को अनुकूलित करने के लिए जिम्मेदार था।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_71_1',
      type: 'fill_blank',
      prompt: 'Complete the education statement: "I graduated ___ a Bachelor\'s degree in 2023."',
      options: [
        { id: 'opt_1', text: 'with', isCorrect: true },
        { id: 'opt_2', text: 'for', isCorrect: false },
        { id: 'opt_3', text: 'from to', isCorrect: false },
      ],
      correctAnswer: 'with',
      explanation: 'Use the phrase "graduated with a degree in [Subject]".',
    },
    {
      id: 'cp_a1_71_2',
      type: 'multiple_choice',
      prompt: 'Which sentence describes past work responsibilities correctly?',
      options: [
        { id: 'opt_1', text: 'In my previous role, I was responsible for creating web interfaces.', isCorrect: true },
        { id: 'opt_2', text: 'Past job I am be responsible make website.', isCorrect: false },
        { id: 'opt_3', text: 'My duty did make web things yesterday.', isCorrect: false },
      ],
      correctAnswer: 'In my previous role, I was responsible for creating web interfaces.',
      explanation: 'Standard professional resume phrasing.',
    },
    {
      id: 'cp_a1_71_3',
      type: 'multiple_choice',
      prompt: 'How do you express your key technical skills?',
      options: [
        { id: 'opt_1', text: 'I have two years of experience in JavaScript and responsive design.', isCorrect: true },
        { id: 'opt_2', text: 'I am knowing code languages good.', isCorrect: false },
        { id: 'opt_3', text: 'My brain has computer codes inside.', isCorrect: false },
      ],
      correctAnswer: 'I have two years of experience in JavaScript and responsive design.',
      explanation: 'Professional and clear summary of skills.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_71_1',
      scenarioContext: 'State your university qualification.',
      prompt: 'Build: "I graduated with a degree in Computer Science."',
      targetStructure: 'I graduated with a degree in Computer Science',
      wordBank: ['I', 'graduated', 'with', 'a', 'degree', 'in', 'Computer', 'Science', 'graduating', 'am', 'at'],
      acceptableSolutions: [
        'I graduated with a degree in Computer Science',
        'I graduated with a degree in Computer Science.',
      ],
      explanation: 'Education statement.',
    },
    {
      id: 'sc_a1_71_2',
      scenarioContext: 'Describe past duties.',
      prompt: 'Build: "I was responsible for developing web pages."',
      targetStructure: 'I was responsible for developing web pages',
      wordBank: ['I', 'was', 'responsible', 'for', 'developing', 'web', 'pages', 'am', 'responsibility', 'to'],
      acceptableSolutions: [
        'I was responsible for developing web pages',
        'I was responsible for developing web pages.',
      ],
      explanation: 'Past work duty phrasing.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_71_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello Alex! Welcome to the career consulting session. Let’s look at your resume for the Junior Developer opening. First, how would you summarize your educational background and degree?',
      partnerAudioText:
        'Hello Alex! Welcome to the career consulting session. Let’s look at your resume for the Junior Developer opening. First, how would you summarize your educational background and degree?',
      partnerQuestionHindi:
        'नमस्ते एलेक्स! करियर परामर्श सत्र में आपका स्वागत है। आइए जूनियर डेवलपर पद के लिए आपके बायोडाटा पर नज़र डालें। सबसे पहले, आप अपनी शैक्षणिक पृष्ठभूमि और डिग्री को कैसे संक्षेप में बताएंगे?',
      expectedFunction: 'Describe Educational Background & Degree (I graduated with a Bachelor\'s degree in Computer Science)',
      contextGoal:
        'Explain that you graduated with a Bachelor\'s degree in Computer Science from the University of Manchester in 2023 with upper second-class honours.',
      targetVocabulary: ['graduated with a degree', 'Bachelor\'s degree', 'Computer Science', 'University of Manchester', 'in 2023'],
      suggestedResponses: [
        {
          label: 'Multi-Turn Independent',
          text: 'Hello Sandra! I graduated with a Bachelor\'s degree in Computer Science from the University of Manchester in 2023, where I specialized in web technologies.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Education & Degree',
          patterns: [
            'graduated',
            'bachelor',
            'degree',
            'computer science',
            '2023',
            'university',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'i_graduate_last_year_error',
          pattern: /\bi graduate in 2023\b/i,
          errorType: 'grammar',
          message: 'Use past tense "I graduated with...", for completed studies.',
          correctionPattern: 'I graduated with a Bachelor\'s degree in 2023',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_71_1',
        type: 'fill_blank',
        prompt: 'Choose the past verb form: "I ___ from university in 2023."',
        options: [
          { id: 'opt_1', text: 'graduated', isCorrect: true },
          { id: 'opt_2', text: 'graduating', isCorrect: false },
          { id: 'opt_3', text: 'graduate', isCorrect: false },
        ],
        correctAnswer: 'graduated',
        explanation: 'Past simple "graduated".',
      },
    },
    {
      id: 'turn_a1_71_2',
      turnIndex: 2,
      partnerPrompt:
        'That degree provides solid foundational knowledge. Now, tell me about your previous work experience: what were your main responsibilities and day-to-day duties at your internship?',
      partnerAudioText:
        'That degree provides solid foundational knowledge. Now, tell me about your previous work experience: what were your main responsibilities and day-to-day duties at your internship?',
      partnerQuestionHindi:
        'वह डिग्री ठोस बुनियादी ज्ञान प्रदान करती है। अब, मुझे अपने पिछले कार्य अनुभव के बारे में बताएं: आपके इंटर्नशिप में आपकी मुख्य जिम्मेदारियां और दिन-प्रतिदिन के कर्तव्य क्या थे?',
      expectedFunction: 'Detail Previous Role Responsibilities (In my previous role, I was responsible for...)',
      contextGoal:
        'Explain that as a web development intern, you were responsible for building responsive UI components, fixing bugs, and collaborating with designers.',
      targetVocabulary: ['in my previous role', 'was responsible for', 'building responsive components', 'fixing bugs', 'collaborating with designers'],
      suggestedResponses: [
        {
          label: 'Multi-Turn Independent',
          text: 'In my previous role as an intern, I was responsible for developing responsive web pages, fixing layout bugs, and collaborating with UI designers on weekly sprints.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Previous Responsibilities',
          patterns: [
            'previous role',
            'responsible for',
            'developing',
            'responsive',
            'bugs',
            'collaborating',
            'designers',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_71_2',
        type: 'multiple_choice',
        prompt: 'Which sentence details work duties with accurate grammar?',
        options: [
          { id: 'opt_1', text: 'I was responsible for developing responsive websites and fixing code bugs.', isCorrect: true },
          { id: 'opt_2', text: 'I was responsibility to made websites and bug kill.', isCorrect: false },
          { id: 'opt_3', text: 'My duty was make code run good.', isCorrect: false },
        ],
        correctAnswer: 'I was responsible for developing responsive websites and fixing code bugs.',
        explanation: '"responsible for + verb-ing" is the correct structure.',
      },
    },
    {
      id: 'turn_a1_71_3',
      turnIndex: 3,
      partnerPrompt:
        'Those duties show hands-on technical skill. How do you summarize your technical skill set and soft skills on the resume?',
      partnerAudioText:
        'Those duties show hands-on technical skill. How do you summarize your technical skill set and soft skills on the resume?',
      partnerQuestionHindi:
        'वे कर्तव्य व्यावहारिक तकनीकी कौशल दिखाते हैं। आप बायोडाटा पर अपने तकनीकी कौशल सेट और सॉफ्ट कौशल को कैसे संक्षेप में प्रस्तुत करते हैं?',
      expectedFunction: 'Summarize Technical & Soft Skills (I have experience in HTML, CSS, JavaScript and strong communication)',
      contextGoal:
        'Highlight proficiency in HTML, CSS, JavaScript, React, and mention soft skills such as teamwork, problem-solving, and attention to detail.',
      targetVocabulary: ['experience in JavaScript and React', 'HTML and CSS', 'problem solver', 'team player', 'attention to detail'],
      suggestedResponses: [
        {
          label: 'Multi-Turn Independent',
          text: 'I have strong skills in HTML, CSS, JavaScript, and React. In addition, I am a collaborative team player, an effective problem solver, and very detail-oriented.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Skills Summary',
          patterns: [
            'javascript',
            'html',
            'css',
            'react',
            'team player',
            'problem solver',
            'detail-oriented',
            'skills',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_71_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I am a collaborative team ___."',
        options: [
          { id: 'opt_1', text: 'player', isCorrect: true },
          { id: 'opt_2', text: 'game', isCorrect: false },
          { id: 'opt_3', text: 'actor', isCorrect: false },
        ],
        correctAnswer: 'player',
        explanation: '"team player" is the standard compound noun for cooperative workers.',
      },
    },
    {
      id: 'turn_a1_71_4',
      turnIndex: 4,
      partnerPrompt:
        'Your resume looks structured, convincing, and ready for submission! What is your final reason for applying to this specific company?',
      partnerAudioText:
        'Your resume looks structured, convincing, and ready for submission! What is your final reason for applying to this specific company?',
      partnerQuestionHindi:
        'आपका बायोडाटा संरचित, ठोस और जमा करने के लिए तैयार दिखता है! इस विशिष्ट कंपनी में आवेदन करने का आपका अंतिम कारण क्या है?',
      expectedFunction: 'Articulate Motivation & Conclude Career Session',
      contextGoal:
        'State that you are passionate about building accessible web apps and eager to grow within their innovative engineering team.',
      targetVocabulary: ['passionate about web accessibility', 'grow within the team', 'thank you Sandra', 'submit my application', 'goodbye'],
      suggestedResponses: [
        {
          label: 'Multi-Turn Independent',
          text: 'I am applying because I am passionate about creating accessible web applications and eager to learn from experienced developers. Thank you Sandra for all your advice, goodbye!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Motivation & Closing',
          patterns: [
            'applying',
            'passionate',
            'accessible',
            'learn',
            'grow',
            'thank you',
            'sandra',
            'goodbye',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_71_4',
        type: 'multiple_choice',
        prompt: 'Which sentence states job motivation with professional enthusiasm?',
        options: [
          { id: 'opt_1', text: 'I am eager to contribute to your team and build accessible web apps. Thank you!', isCorrect: true },
          { id: 'opt_2', text: 'I need money so give me job please.', isCorrect: false },
          { id: 'opt_3', text: 'Resume is done I go home now.', isCorrect: false },
        ],
        correctAnswer: 'I am eager to contribute to your team and build accessible web apps. Thank you!',
        explanation: 'Enthusiastic and professional.',
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
