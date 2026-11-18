import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_224: ConversationDefinition = {
  id: 'conv_a2_224',
  title: 'Integrated Speaking, Writing & Mediation Practice',
  cefr: 'A2',
  unitId: 'unit_a2_15',
  lessonLinks: ['lesson_a2_15_224'],
  estimatedMinutes: 5,
  scenario:
    'You are in the campus hallway outside Lecture Theatre B with your classmate Marcus. An official department notice has just been posted on the bulletin board and portal regarding final project presentations and exam room rules. Marcus missed the department email, so you mediate the message, relay the rescheduled times, explain prohibited items (phones and smartwatches), and plan a formal confirmation email to the course administrator.',
  communicativeGoals: [
    'Mediate written notices and relay administrative announcements to a peer ("The professor announced that our seminar has been rescheduled")',
    'Explain academic rules and prohibitions clearly ("Smartwatches and phones are strictly prohibited in the exam hall")',
    'Use basic reported speech to transmit information ("She mentioned that drafts must be uploaded by noon")',
    'Collaborate on drafting a polite formal email to the department administrator',
  ],
  canDoStatements: [
    'Can relay information from an official notice or schedule to a classmate (mediation)',
    'Can use simple reported speech to explain what a teacher or coordinator said',
    'Can discuss exam regulations and email conventions in A2 English',
  ],
  characters: [
    {
      id: 'char_marcus_classmate',
      name: 'Marcus',
      role: 'Classmate & Project Teammate',
      avatar: '📢',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'rescheduled',
        ipa: '/ˌriːˈʃedjuːld/',
        partOfSpeech: 'adjective',
        meaning: 'Changed to a different date or time on the timetable',
        exampleSentence: 'Our Thursday presentation has been rescheduled to Friday morning.',
        translations: { hi: 'पुनर्निर्धारित / समय बदला हुआ (रीशिड्यूल्ड)' },
      },
      {
        word: 'prohibited',
        ipa: '/prəˈhɪbɪtɪd/',
        partOfSpeech: 'adjective',
        meaning: 'Formally forbidden by law or academic regulation',
        exampleSentence: 'Mobile phones are strictly prohibited inside the examination room.',
        translations: { hi: 'प्रतिबंधित / वर्जित (प्रोहिबिटेड)' },
      },
      {
        word: 'announcement',
        ipa: '/əˈnaʊnsmənt/',
        partOfSpeech: 'noun',
        meaning: 'A formal public statement about a fact, occurrence, or intention',
        exampleSentence: 'The coordinator posted an urgent announcement on the noticeboard.',
        translations: { hi: 'घोषणा / सूचना (अनाउंसमेंट)' },
      },
      {
        word: 'administrator',
        ipa: '/ədˈmɪnɪstreɪtə/',
        partOfSpeech: 'noun',
        meaning: 'A person responsible for running a department or educational organization',
        exampleSentence: 'We need to email the course administrator to confirm our team slot.',
        translations: { hi: 'प्रशासक / व्यवस्थापक (एडमिनिस्ट्रेटर)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'The department announced that our presentation has been rescheduled to Friday.',
        functionCategory: 'Relaying rescheduled announcements (mediation)',
        exampleSentence: 'The teacher said that the deadline was extended by two days.',
      },
      {
        phrase: 'According to the notice, all smartwatches are strictly prohibited in the exam hall.',
        functionCategory: 'Relaying rules and regulations',
        exampleSentence: 'Food and drinks are prohibited in the computer lab.',
      },
      {
        phrase: 'Let’s write a brief formal email to the administrator to confirm our slot.',
        functionCategory: 'Proposing formal communication',
        exampleSentence: 'We should email the professor with our draft outline.',
      },
      {
        phrase: 'I can forward you the official message right now.',
        functionCategory: 'Sharing information with a peer',
        exampleSentence: 'I will send you a screenshot of the timetable.',
      },
    ],
    grammar: {
      title: 'Reported Speech Basics for Information Mediation',
      conceptExplanation:
        '1. Reporting verbs + "that" clause:\n   - "The professor said that our exam was rescheduled."\n   - "The notice states that phones are prohibited."\n   - "She announced that the room changed to Room 304."\n2. Note tense shifts when reporting past statements:\n   - Direct: "The test is on Friday." -> Reported: "The teacher said that the test WAS on Friday."',
      patternFormula: '[The notice / The professor] [said / announced / stated] that [Subject] + [Verb clause]',
      contrastExamples: [
        {
          incorrect: 'The teacher said me that exam is move.',
          correct: 'The teacher told me that the exam was moved. / The teacher said that...',
          explanation: '"Say" takes no personal object without "to" (said that / told me that).',
        },
        {
          incorrect: 'Phone is prohibit in exam.',
          correct: 'Phones are strictly prohibited in the exam room.',
          explanation: 'Use the passive adjective "prohibited" with plural subject "phones are".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Marcus',
        text: 'I didn’t check my university email this morning! What does that yellow notice on the bulletin board say?',
        translation: 'मैंने आज सुबह अपना विश्वविद्यालय का ईमेल चेक नहीं किया! बुलेटिन बोर्ड पर उस पीले नोटिस में क्या लिखा है?',
      },
      {
        speaker: 'Learner',
        text: 'The department announced that our presentations have been rescheduled to Friday at 10 AM in Hall C.',
        translation: 'विभाग ने घोषणा की है कि हमारी प्रस्तुतियाँ शुक्रवार सुबह 10 बजे हॉल C में पुनर्निर्धारित की गई हैं।',
      },
      {
        speaker: 'Marcus',
        text: 'Oh, that gives us an extra 24 hours to prepare! Are there any new equipment rules?',
        translation: 'ओह, यह हमें तैयारी के लिए 24 घंटे अतिरिक्त देता है! क्या कोई नए उपकरण नियम हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_224_1',
      type: 'fill_blank',
      prompt: 'Complete with the reporting verb: "The coordinator ______ (announced / said to me that / telling) that the room changed."',
      options: [
        { id: 'opt_1', text: 'announced', isCorrect: true },
        { id: 'opt_2', text: 'said to me that', isCorrect: false },
        { id: 'opt_3', text: 'telling', isCorrect: false },
      ],
      correctAnswer: 'announced',
      explanation: '"The coordinator announced that..." is standard academic reporting.',
    },
    {
      id: 'cp_224_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly conveys an academic regulation?',
      options: [
        { id: 'opt_1', text: 'According to the notice, electronic devices are strictly prohibited during the exam.', isCorrect: true },
        { id: 'opt_2', text: 'According notice, devices prohibit during exam.', isCorrect: false },
        { id: 'opt_3', text: 'Devices are prohibit.', isCorrect: false },
      ],
      correctAnswer: 'According to the notice, electronic devices are strictly prohibited during the exam.',
      explanation: 'Accurate mediation formula and passive adjective "prohibited".',
    },
    {
      id: 'cp_224_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [the professor said that / our presentation / has been rescheduled / for Friday morning]',
      correctAnswer: 'the professor said that our presentation has been rescheduled for Friday morning',
      explanation: 'Reporting subject + verb + that clause with present perfect passive.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_224_1',
      prompt: 'Construct a sentence relaying that the presentation was rescheduled for Friday at 10 AM in Room 204.',
      scenarioContext: 'Relaying the schedule change to Marcus.',
      targetStructure: 'The department announced that our presentations were rescheduled for Friday at ten in Room 204.',
      wordBank: ['The department announced that', 'our presentations were rescheduled', 'for Friday at ten', 'in Room 204,', 'Marcus.'],
      acceptableSolutions: [
        'The department announced that our presentations were rescheduled for Friday at ten in Room 204.',
        'The notice says our presentations were rescheduled for Friday at ten.',
      ],
      explanation: 'Information mediation formula.',
    },
    {
      id: 'sc_224_2',
      prompt: 'Construct a sentence proposing to write a brief confirmation email to the administrator.',
      scenarioContext: 'Planning an email with Marcus.',
      targetStructure: 'Let us write a polite email to the administrator to confirm our presentation time slot.',
      wordBank: ['Let us write', 'a polite email to', 'the administrator to confirm', 'our presentation time slot,', 'Marcus.'],
      acceptableSolutions: [
        'Let us write a polite email to the administrator to confirm our presentation time slot.',
        'Let’s write an email to the administrator to confirm our slot.',
      ],
      explanation: 'Formal action proposal formula.',
    },
  ],
  turns: [
    {
      id: 'turn_224_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! My phone battery died on the bus, so I couldn’t check the student portal this morning. Everyone is crowding around this bulletin board. What does this urgent department announcement say about our final presentations?',
      partnerAudioText:
        'Hey! My phone battery died on the bus, so I couldn’t check the student portal this morning. Everyone is crowding around this bulletin board. What does this urgent department announcement say about our final presentations?',
      partnerQuestionHindi:
        'अरे! बस में मेरे फोन की बैटरी खत्म हो गई थी, इसलिए मैं आज सुबह छात्र पोर्टल चेक नहीं कर सका। हर कोई इस बुलेटिन बोर्ड के चारों ओर इकट्ठा हो रहा है। हमारी अंतिम प्रस्तुतियों के बारे में इस तत्काल विभाग घोषणा में क्या कहा गया है?',
      expectedFunction: 'Mediating the announcement: relaying that presentations have been rescheduled and room has changed',
      contextGoal: 'Explain that the presentations have been rescheduled from Thursday to Friday at 10 AM in Room 204 due to maintenance',
      targetVocabulary: ['rescheduled', 'announced', 'Friday at 10 AM', 'Room 204', 'maintenance', 'Marcus', 'notice'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hi Marcus! The department announced that our presentations have been rescheduled from Thursday to Friday at 10 AM in Room 204 due to maintenance.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hey Marcus. The notice says our session is moved to Friday morning in Room 204 because Theatre B is closed for projector repairs.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'According to the official announcement, all group presentations were pushed back to Friday at 10 AM. We have an extra day to polish our slides!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_marcus',
          patterns: ['hi', 'hey', 'marcus', 'hello'],
          required: true,
        },
        {
          name: 'reporting_clause',
          patterns: ['announced', 'notice says', 'said that', 'according to'],
          required: true,
        },
        {
          name: 'rescheduled_details',
          patterns: ['rescheduled', 'friday', '10 am', 'room 204', 'moved', 'pushed back', 'maintenance'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_224_1_simple_tell',
          pattern: /^notice is change time\.$/i,
          errorType: 'structure',
          message: 'Use reported speech: "The notice says that our presentations have been rescheduled to Friday at 10 AM, Marcus."',
          correctionPattern: 'The department announced that presentations were rescheduled to Friday.',
        },
      ],
      remediationPractice: {
        id: 'rem_224_1',
        type: 'fill_blank',
        prompt: 'Fill in: "The department ______ (announced) that the room changed."',
        options: [
          { id: 'r1', text: 'announced', isCorrect: true },
          { id: 'r2', text: 'announcement to', isCorrect: false },
        ],
        correctAnswer: 'announced',
        explanation: 'Past tense reporting verb.',
      },
    },
    {
      id: 'turn_224_2',
      turnIndex: 2,
      partnerPrompt:
        'An extra day until Friday is fantastic news! But look at the second paragraph on the notice—it mentions strict rules about digital equipment during the assessment. What items are prohibited?',
      partnerAudioText:
        'An extra day until Friday is fantastic news! But look at the second paragraph on the notice—it mentions strict rules about digital equipment during the assessment. What items are prohibited?',
      partnerQuestionHindi:
        'शुक्रवार तक एक अतिरिक्त दिन शानदार खबर है! लेकिन नोटिस के दूसरे पैराग्राफ को देखें—यह मूल्यांकन के दौरान डिजिटल उपकरणों के बारे में सख्त नियमों का उल्लेख करता है। कौन सी वस्तुएं प्रतिबंधित हैं?',
      expectedFunction: 'Explaining prohibitions and equipment rules using "prohibited" and "must be switched off"',
      contextGoal: 'Explain that smartphones, smartwatches, and wireless earphones are strictly prohibited during the assessment and must be kept in lockers',
      targetVocabulary: ['prohibited', 'smartphones', 'smartwatches', 'wireless earphones', 'switched off', 'lockers', 'assessment'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Smartphones, smartwatches, and wireless earphones are strictly prohibited in the room. They must be completely switched off and stored in lockers.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'The notice states that all personal electronic devices are prohibited. We are only allowed to use the podium computer for our presentation slides.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Any wearable tech like smartwatches or earbuds is strictly forbidden. We must leave all mobile devices in the hall lockers before entering.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'prohibition_concept',
          patterns: ['prohibited', 'forbidden', 'not allowed', 'must be switched off', 'leave'],
          required: true,
        },
        {
          name: 'prohibited_items',
          patterns: ['smartphones', 'smartwatches', 'earphones', 'devices', 'lockers', 'podium computer', 'phones'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_224_2_grammar',
          pattern: /smartwatch is prohibit/i,
          errorType: 'grammar',
          message: 'Say "smartwatches are strictly prohibited".',
          correctionPattern: 'Smartphones and smartwatches are strictly prohibited in the room.',
        },
      ],
      remediationPractice: {
        id: 'rem_224_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly explains academic prohibitions?',
        options: [
          { id: 'r1', text: 'Smartphones and smartwatches are strictly prohibited during the assessment.', isCorrect: true },
          { id: 'r2', text: 'Phones prohibit in test.', isCorrect: false },
        ],
        correctAnswer: 'Smartphones and smartwatches are strictly prohibited during the assessment.',
        explanation: 'Accurate vocabulary and grammar.',
      },
    },
    {
      id: 'turn_224_3',
      turnIndex: 3,
      partnerPrompt:
        'Got it, no smartwatches or phones inside. The notice also says each team must confirm their 15-minute presentation time slot with the department administrator by email today. How should we write this email?',
      partnerAudioText:
        'Got it, no smartwatches or phones inside. The notice also says each team must confirm their 15-minute presentation time slot with the department administrator by email today. How should we write this email?',
      partnerQuestionHindi:
        'समझ गया, अंदर कोई स्मार्टवॉच या फोन नहीं। नोटिस में यह भी कहा गया है कि प्रत्येक टीम को आज ही ईमेल द्वारा विभाग प्रशासक के साथ अपने 15 मिनट के प्रस्तुति समय स्लॉट की पुष्टि करनी होगी। हमें यह ईमेल कैसे लिखना चाहिए?',
      expectedFunction: 'Suggesting formal email conventions (Dear Ms. Davies, polite request, team ID, best regards)',
      contextGoal: 'Suggest formal email greeting (Dear Ms. Davies), stating team ID (Team 4), requesting the Friday 10:15 AM slot, and polite sign-off (Best regards)',
      targetVocabulary: ['Dear Ms. Davies', 'Team 4', 'confirm our slot', 'Friday at 10:15 AM', 'formal email', 'Best regards', 'Marcus'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'We should start with "Dear Ms. Davies", state that we are Team 4, request the Friday 10:15 AM time slot, and close with "Best regards".',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Let’s write a formal email: "Dear Administrator, we would like to confirm Team 4 for the Friday 10:15 AM presentation slot. Best regards, Marcus and partner."',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'A concise formal structure is best: formal salutation, explicit team number, requested time slot, attached slide deck, and a respectful closing.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'formal_salutation_closing',
          patterns: ['dear ms. davies', 'dear administrator', 'best regards', 'formal email', 'salutation'],
          required: true,
        },
        {
          name: 'slot_and_team_details',
          patterns: ['team 4', 'confirm', 'slot', 'friday', '10:15', 'time slot', 'slides'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_224_3_informal',
          pattern: /^hey give us slot 10:15\.$/i,
          errorType: 'interaction',
          message: 'Keep it formal: "Dear Ms. Davies, we would like to confirm our presentation slot for Team 4. Best regards."',
          correctionPattern: 'Dear Ms. Davies, we would like to confirm Team 4 for Friday at 10:15 AM. Best regards.',
        },
      ],
      remediationPractice: {
        id: 'rem_224_3',
        type: 'fill_blank',
        prompt: 'Fill in: "We would like to ______ (confirm) our time slot."',
        options: [
          { id: 'r1', text: 'confirm', isCorrect: true },
          { id: 'r2', text: 'confirmed to', isCorrect: false },
        ],
        correctAnswer: 'confirm',
        explanation: 'Base verb after "would like to".',
      },
    },
    {
      id: 'turn_224_4',
      turnIndex: 4,
      partnerPrompt:
        'That email outline is spot on! I’ll type it out on my laptop right now, and put both of our names at the bottom. Thanks so much for reading and explaining the notice to me. Let’s finalize our slides together in the library!',
      partnerAudioText:
        'That email outline is spot on! I’ll type it out on my laptop right now, and put both of our names at the bottom. Thanks so much for reading and explaining the notice to me. Let’s finalize our slides together in the library!',
      partnerQuestionHindi:
        'वह ईमेल रूपरेखा बिल्कुल सही है! मैं इसे अभी अपने लैपटॉप पर टाइप करूँगा, और नीचे हम दोनों के नाम लिखूँगा। नोटिस को पढ़ने और मुझे समझाने के लिए बहुत-बहुत धन्यवाद। आइए पुस्तकालय में मिलकर अपनी स्लाइड को अंतिम रूप दें!',
      expectedFunction: 'Agreeing enthusiastically to head to the library and finalize the project',
      contextGoal: 'Say you’re glad to help, agree to head to the library to finalize the slides, and express confidence about Friday’s presentation',
      targetVocabulary: ['Happy to help', 'Marcus', 'library', 'finalize our slides', 'confident', 'Friday', 'let’s do it'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Happy to help, Marcus! Let’s head to the library and finalize our slides right now. We are going to do great on Friday!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Glad I could mediate the update! Working together in the library sounds like a great plan. Let’s make our presentation shine!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Anytime, Marcus! With the extra day and our time slot confirmed, we’re in great shape. Let’s grab a study desk and run through the slides.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'helpfulness_acknowledgment',
          patterns: ['happy to help', 'glad', 'anytime', 'marcus', 'welcome'],
          required: true,
        },
        {
          name: 'library_work_action',
          patterns: ['library', 'slides', 'finalize', 'friday', 'presentation', 'study desk', 'great'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_224_4_short',
          pattern: /^(ok|bye)$/i,
          errorType: 'interaction',
          message: 'Close enthusiastically: "Happy to help, Marcus! Let’s head to the library and finalize our slides."',
          correctionPattern: 'Happy to help, Marcus! Let’s go to the library.',
        },
      ],
      remediationPractice: {
        id: 'rem_224_4',
        type: 'multiple_choice',
        prompt: 'Which response closes the mediation dialogue smoothly?',
        options: [
          { id: 'r1', text: 'Happy to help, Marcus! Let’s head to the library to finalize our slides.', isCorrect: true },
          { id: 'r2', text: 'Ok bye send email now.', isCorrect: false },
        ],
        correctAnswer: 'Happy to help, Marcus! Let’s head to the library to finalize our slides.',
        explanation: 'Cooperative, friendly, and moves to action.',
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
