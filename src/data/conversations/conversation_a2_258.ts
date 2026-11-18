import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_258: ConversationDefinition = {
  id: 'conv_a2_258',
  title: 'Explaining Causes, Results & Simple Solutions',
  cefr: 'A2',
  unitId: 'unit_a2_18',
  lessonLinks: ['lesson_a2_18_258'],
  estimatedMinutes: 5,
  scenario:
    'You are in a project team debrief with your team leader Liam. A team presentation was delayed because of technical issues and a sudden internet blackout at the venue. You analyze what caused the problem, explain the immediate result, and propose two practical preventive solutions for future workshops.',
  communicativeGoals: [
    'Explain cause-and-effect relationships and practical solutions clearly in A2 English',
    'Use cause linkers: "because...", "because of...", "as a result...", "so..."',
    'Describe results accurately: "The projector stopped working, so we lost ten minutes..."',
    'Propose constructive preventive solutions: "We should download offline slides...", "It is best to test the equipment early..."',
  ],
  canDoStatements: [
    'Can explain why a practical problem occurred using cause connectors',
    'Can describe the consequences or results of a delay or malfunction',
    'Can suggest sensible, realistic preventive actions for the future',
  ],
  characters: [
    {
      id: 'char_liam_team_lead',
      name: 'Liam',
      role: 'Project Team Leader',
      avatar: '📊',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'cause',
        ipa: '/kɔːz/',
        partOfSpeech: 'noun / verb',
        meaning: 'A person, thing, or event that gives rise to an action, phenomenon, or condition',
        exampleSentence: 'The main cause of the delay was an unstable internet connection.',
        translations: { hi: 'कारण (कॉज़)' },
      },
      {
        word: 'consequence',
        ipa: '/ˈkɒnsɪkwəns/',
        partOfSpeech: 'noun',
        meaning: 'A result or effect of an action or condition',
        exampleSentence: 'As a consequence, our presentation started fifteen minutes late.',
        translations: { hi: 'परिणाम / नतीजा (कॉन्सिक्वेंस)' },
      },
      {
        word: 'preventive',
        ipa: '/prɪˈventɪv/',
        partOfSpeech: 'adjective',
        meaning: 'Designed or used to prevent something undesirable from occurring',
        exampleSentence: 'We need to take preventive measures before the next client meeting.',
        translations: { hi: 'निवारक / रोकथाम संबंधी (प्रिवेंटिव)' },
      },
      {
        word: 'backup',
        ipa: '/ˈbækʌp/',
        partOfSpeech: 'noun / adjective',
        meaning: 'A copy of data or an alternative resource held in reserve if the original fails',
        exampleSentence: 'Always keep an offline backup file on a USB flash drive.',
        translations: { hi: 'बैकअप / अतिरिक्त सुरक्षित प्रति (बैकअप)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'The main reason for the delay was...',
        functionCategory: 'Stating the root cause clearly',
        exampleSentence: 'The main reason for the delay was a sudden Wi-Fi disconnection.',
      },
      {
        phrase: 'As a result, we were unable to...',
        functionCategory: 'Describing the direct impact or outcome',
        exampleSentence: 'As a result, we were unable to show the online demonstration video.',
      },
      {
        phrase: 'To prevent this in the future, we should...',
        functionCategory: 'Introducing a practical preventive solution',
        exampleSentence: 'To prevent this in the future, we should save offline copies of our presentation.',
      },
      {
        phrase: 'It would also be helpful to...',
        functionCategory: 'Adding a secondary helpful recommendation',
        exampleSentence: 'It would also be helpful to test the audiovisual cables thirty minutes beforehand.',
      },
    ],
    grammar: {
      title: 'Cause, Effect & Solution Linkers: "Because of + Noun" vs. "Because + Clause"',
      conceptExplanation:
        '1. Cause + Noun phrase: "because of the bad weather / because of a technical error"\n2. Cause + Clause: "because the internet disconnected"\n3. Result: "As a result, we started late / so the screen went dark"\n4. Recommendation formula: "To solve this, we should + [Base Verb]" or "It is best to + [Base Verb]"',
      patternFormula: '[Problem] occurred because of [Cause]. As a result, [Effect]. To prevent this, we should [Solution A] and [Solution B].',
      contrastExamples: [
        {
          incorrect: 'We delayed because the internet connection.',
          correct: 'We were delayed because of the unstable internet connection.',
          explanation: '"Because of" comes before a noun phrase, whereas "because" introduces a subject + verb clause.',
        },
        {
          incorrect: 'To prevent, we must to test early.',
          correct: 'To prevent this, we must test the equipment early.',
          explanation: 'Modal "must" takes a bare infinitive without "to".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Liam',
        text: 'Thanks for meeting, everyone. Yesterday’s workshop had some rough moments at the beginning. What caused the initial ten-minute delay?',
        translation: 'मिलने के लिए धन्यवाद। कल की कार्यशाला की शुरुआत में कुछ कठिन क्षण थे। प्रारंभिक दस मिनट की देरी का क्या कारण था?',
      },
      {
        speaker: 'Learner',
        text: 'The delay happened because of a weak Wi-Fi signal and an incompatible display cable. As a result, our slides did not load immediately.',
        translation: 'देरी कमजोर वाई-फाई सिग्नल और एक असंगत डिस्प्ले केबल के कारण हुई। परिणामस्वरूप, हमारी स्लाइड तुरंत लोड नहीं हुईं।',
      },
      {
        speaker: 'Liam',
        text: 'I see. How can we make sure this never happens again during our upcoming regional conference?',
        translation: 'मैं समझ गया। हम यह कैसे सुनिश्चित कर सकते हैं कि हमारे आगामी क्षेत्रीय सम्मेलन के दौरान ऐसा दोबारा कभी न हो?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_258_1',
      type: 'fill_blank',
      prompt: 'Complete: "The workshop started late ______ (because of / because) a technical glitch."',
      options: [
        { id: 'opt_1', text: 'because of', isCorrect: true },
        { id: 'opt_2', text: 'because', isCorrect: false },
      ],
      correctAnswer: 'because of',
      explanation: 'Use "because of" before the noun phrase "a technical glitch".',
    },
    {
      id: 'cp_258_2',
      type: 'multiple_choice',
      prompt: 'Which sentence connects a cause, an outcome, and a solution correctly?',
      options: [
        { id: 'opt_1', text: 'The internet disconnected, so the video stopped; to prevent this, we should save offline files.', isCorrect: true },
        { id: 'opt_2', text: 'Because internet stop so video is broke we must to save offline.', isCorrect: false },
        { id: 'opt_3', text: 'Due to internet stop, as result video is stop so prevent must offline.', isCorrect: false },
      ],
      correctAnswer: 'The internet disconnected, so the video stopped; to prevent this, we should save offline files.',
      explanation: 'Clear clause coordination with "so" followed by purpose infinitive and modal "should".',
    },
    {
      id: 'cp_258_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [As a result of the delay, / we had to shorten / our final question session]',
      correctAnswer: 'As a result of the delay, we had to shorten our final question session',
      explanation: 'Result prepositional phrase + main clause.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_258_1',
      prompt: 'Construct a sentence stating that the presentation was delayed because of an unstable Wi-Fi connection.',
      scenarioContext: 'Explaining the root cause to Liam.',
      targetStructure: 'The presentation was delayed because of an unstable Wi-Fi connection.',
      wordBank: ['The presentation was delayed', 'because of an', 'unstable Wi-Fi connection.', 'because an', 'delayed for of'],
      acceptableSolutions: [
        'The presentation was delayed because of an unstable Wi-Fi connection.',
        'Our presentation was delayed because of an unstable Wi-Fi connection.',
      ],
      explanation: 'Passive verb phrase + "because of" + noun phrase.',
    },
    {
      id: 'sc_258_2',
      prompt: 'Construct a sentence stating that we should test the audiovisual equipment early and bring an offline backup.',
      scenarioContext: 'Proposing preventive solutions.',
      targetStructure: 'We should test the audiovisual equipment early and bring an offline backup.',
      wordBank: ['We should test the', 'audiovisual equipment early', 'and bring an', 'offline backup.', 'must to test', 'early backup bring'],
      acceptableSolutions: [
        'We should test the audiovisual equipment early and bring an offline backup.',
        'We must test the audiovisual equipment early and bring an offline backup.',
      ],
      explanation: 'Modal "should" + compound bare infinitive predicate ("test... and bring...").',
    },
  ],
  turns: [
    {
      id: 'turn_258_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello! Thanks for coming to our post-event debrief. As you know, yesterday’s client presentation faced a rocky start. Could you explain the exact cause of what went wrong at the beginning?',
      partnerAudioText:
        'Hello! Thanks for coming to our post-event debrief. As you know, yesterday’s client presentation faced a rocky start. Could you explain the exact cause of what went wrong at the beginning?',
      partnerQuestionHindi:
        'नमस्ते! हमारे कार्यक्रम के बाद की समीक्षा बैठक में आने के लिए धन्यवाद। जैसा कि आप जानते हैं, कल के ग्राहक प्रस्तुतीकरण की शुरुआत थोड़ी कठिन रही। क्या आप समझा सकते हैं कि शुरुआत में क्या गड़बड़ हुई थी?',
      expectedFunction: 'Explaining the root cause using "because of" / "because" (unstable internet, broken cable, laptop glitch)',
      contextGoal: 'Explain clearly that the delay happened because of an unexpected Wi-Fi blackout and an HDMI adapter problem at the venue',
      targetVocabulary: ['Hello Liam', 'the main cause was', 'because of an unstable Wi-Fi connection', 'broken HDMI adapter', 'screen went black', 'technical problem'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffolding',
          text: 'Hello Liam. The main cause of the delay was an unstable Wi-Fi connection and a faulty HDMI adapter in the conference room. Because the internet went down, our online slide deck failed to load on the main projector.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Open Production',
          text: 'Hi Liam. What happened was that the venue’s wireless network crashed right before we started. In addition, the display cable did not fit my laptop properly, which caused the initial delay.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_liam',
          patterns: ['hello', 'hi', 'liam', 'good morning', 'good afternoon'],
          required: true,
        },
        {
          name: 'cause_explanation',
          patterns: ['cause', 'reason', 'wifi', 'internet', 'connection', 'cable', 'adapter', 'projector', 'slides', 'failed', 'crashed', 'because', 'due to'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_258_1_because_noun',
          pattern: /delayed because the wifi signal\b/i,
          errorType: 'grammar',
          message: 'Say "delayed because of the weak Wi-Fi signal" or "because the Wi-Fi signal was weak".',
          correctionPattern: 'The presentation was delayed because of an unstable Wi-Fi signal.',
        },
      ],
      remediationPractice: {
        id: 'rem_258_1',
        type: 'fill_blank',
        prompt: 'Fill in: "We lost time ______ (because of / because) the faulty adapter."',
        options: [
          { id: 'r1', text: 'because of', isCorrect: true },
          { id: 'r2', text: 'because', isCorrect: false },
        ],
        correctAnswer: 'because of',
        explanation: 'Use "because of" before a noun phrase.',
      },
    },
    {
      id: 'turn_258_2',
      turnIndex: 2,
      partnerPrompt:
        'I see. And what were the immediate results or consequences of that delay on our agenda and the clients’ reaction?',
      partnerAudioText:
        'I see. And what were the immediate results or consequences of that delay on our agenda and the clients’ reaction?',
      partnerQuestionHindi:
        'मैं समझ गया। और हमारे एजेंडे और ग्राहकों की प्रतिक्रिया पर उस देरी के तत्काल परिणाम या प्रभाव क्या थे?',
      expectedFunction: 'Describing the impact and consequences using result markers ("As a result...", "so we had to...")',
      contextGoal: 'Explain that the team lost fifteen minutes, had to rush through the product demo, and shortened the Q&A session',
      targetVocabulary: ['As a result', 'we lost fifteen minutes', 'we had to rush through the demo', 'shortened the Q&A session', 'clients seemed slightly impatient', 'so we adapted'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffolding',
          text: 'As a result of the delay, we lost fifteen minutes of our presentation time. Consequently, we had to rush through the product demonstration and shorten our final question-and-answer session with the clients.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Open Production',
          text: 'Because of the lost time, we could not show the live demonstration video. We had to summarize our main points quickly and answer client questions in just five minutes.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'result_marker',
          patterns: ['as a result', 'consequently', 'because of this', 'so', 'therefore'],
          required: true,
        },
        {
          name: 'consequences_details',
          patterns: ['lost time', 'minutes', 'rush', 'rushed', 'demo', 'demonstration', 'q&a', 'questions', 'shorten', 'clients', 'agenda'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_258_2_had_to_infinitive',
          pattern: /we had to rushed/i,
          errorType: 'grammar',
          message: 'Use base verb after "had to": "we had to rush" (not "had to rushed").',
          correctionPattern: 'We had to rush through the product demo.',
        },
      ],
      remediationPractice: {
        id: 'rem_258_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes the outcome?',
        options: [
          { id: 'r1', text: 'As a result, we had to shorten our question session.', isCorrect: true },
          { id: 'r2', text: 'As result we must to shorten question session yesterday.', isCorrect: false },
        ],
        correctAnswer: 'As a result, we had to shorten our question session.',
        explanation: 'Standard result clause with past modal "had to".',
      },
    },
    {
      id: 'turn_258_3',
      turnIndex: 3,
      partnerPrompt:
        'Understood. Next month we have our major regional conference. What two concrete preventive solutions do you propose so our team never encounters this problem again?',
      partnerAudioText:
        'Understood. Next month we have our major regional conference. What two concrete preventive solutions do you propose so our team never encounters this problem again?',
      partnerQuestionHindi:
        'समझ गया। अगले महीने हमारा बड़ा क्षेत्रीय सम्मेलन है। आप कौन से दो ठोस निवारक समाधान प्रस्तावित करते हैं ताकि हमारी टीम को इस समस्या का दोबारा कभी सामना न करना पड़े?',
      expectedFunction: 'Proposing two practical preventive solutions using modals ("we should / we ought to") and asking Liam for feedback',
      contextGoal: 'Propose saving offline PDF slides on a USB drive and arriving 30 minutes early to test the hardware; ask Liam what he thinks',
      targetVocabulary: ['To prevent this in the future', 'we should save offline copies on a USB drive', 'test the audiovisual equipment 30 minutes early', 'bring backup adapters', 'what do you think Liam'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffolding',
          text: 'To prevent this in the future, first, we should always save an offline copy of our slides on a USB drive so we do not rely on Wi-Fi. Second, we should arrive thirty minutes early to test all cables and the projector. What do you think about this plan, Liam?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Open Production',
          text: 'I suggest two clear steps: we must bring our own set of display adapters, and we should download all videos beforehand. This will guarantee a smooth presentation regardless of venue issues.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'preventive_solutions',
          patterns: ['prevent', 'should', 'must', 'offline', 'usb', 'backup', 'early', 'test', 'equipment', 'projector', 'adapter', 'download'],
          required: true,
        },
        {
          name: 'followup_closure',
          patterns: ['what do you think', 'plan', 'liam', 'smooth', 'agree', 'sound good'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_258_3_should_to_test',
          pattern: /we should to test|we must to bring/i,
          errorType: 'grammar',
          message: 'Modal verbs take a bare infinitive: "we should test" and "we must bring" (never "should to test").',
          correctionPattern: 'We should test the equipment thirty minutes early.',
        },
      ],
      remediationPractice: {
        id: 'rem_258_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [We should save an offline backup / and arrive thirty minutes early / to test the projector]',
        correctAnswer: 'We should save an offline backup and arrive thirty minutes early to test the projector',
        explanation: 'Modal subject + two coordinated verb phrases + purpose infinitive.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 75,
  },
};
