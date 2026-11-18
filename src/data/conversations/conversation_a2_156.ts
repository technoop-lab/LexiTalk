import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_156: ConversationDefinition = {
  id: 'conv_a2_156',
  title: 'Social Invitations, Accepting, Declining & Giving Excuses',
  cefr: 'A2',
  unitId: 'unit_a2_11',
  lessonLinks: ['lesson_a2_11_156'],
  estimatedMinutes: 5,
  scenario:
    'You are in the staff lounge at St. Jude’s Hospital in Liverpool having coffee with your colleague Daniel Evans. Daniel invites you to a Saturday theatre show and dinner. You cannot attend on Saturday due to family commitments, so you will decline politely with an excuse ("I’d love to, but I’m afraid I have to..."), propose an alternative day ("How about Sunday instead?"), accept a new plan enthusiastically, and confirm the details.',
  communicativeGoals: [
    'Politely extend, accept, and decline social invitations in everyday contexts',
    'Provide courteous excuses and explanations using "I’m afraid I have to..." and "due to..."',
    'Negotiate alternative dates and times using "How about...?" and "Are you free on...?"',
    'Confirm agreed meeting arrangements and express anticipation',
  ],
  canDoStatements: [
    'Can decline a social invitation politely without causing offense by offering a valid excuse',
    'Can propose an alternative date or activity when unable to accept an invitation',
    'Can accept an invitation enthusiastically and confirm meeting time and place',
  ],
  characters: [
    {
      id: 'char_daniel_evans',
      name: 'Daniel Evans',
      role: 'Hospital Colleague & Friend',
      avatar: '👨‍⚕️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'invitation',
        ipa: '/ˌɪnvɪˈteɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'A written or verbal request inviting someone to go somewhere or do something',
        exampleSentence: 'Thank you for the kind invitation to the weekend show.',
        translations: { hi: 'निमंत्रण' },
      },
      {
        word: 'decline',
        ipa: '/dɪˈklaɪn/',
        partOfSpeech: 'verb',
        meaning: 'Politely refuse an invitation or offer',
        exampleSentence: 'I had to decline the Saturday dinner because of family duties.',
        translations: { hi: 'विनम्रता से अस्वीकार करना' },
      },
      {
        word: 'commitment',
        ipa: '/kəˈmɪtmənt/',
        partOfSpeech: 'noun',
        meaning: 'An engagement or obligation that restricts one’s freedom of action',
        exampleSentence: 'I have a prior commitment with my parents on Saturday.',
        translations: { hi: 'प्रतिबद्धता / पूर्व निर्धारित कार्य' },
      },
      {
        word: 'alternative',
        ipa: '/ɔːlˈtɜːnətɪv/',
        partOfSpeech: 'noun',
        meaning: 'Another possibility or arrangement',
        exampleSentence: 'Could we find an alternative date for our hiking trip?',
        translations: { hi: 'विकल्प' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I would love to join you, but I’m afraid I have to help my parents on Saturday.',
        functionCategory: 'Declining Politely with a Reason',
        exampleSentence: 'I’d love to, but I have a doctor appointment.',
      },
      {
        phrase: 'How about meeting up on Sunday afternoon for coffee and a walk instead?',
        functionCategory: 'Proposing Alternative Social Plans',
        exampleSentence: 'How about next Friday after work?',
      },
      {
        phrase: 'That sounds fantastic! I’d love to come.',
        functionCategory: 'Accepting Invitations Enthusiastically',
        exampleSentence: 'That sounds great! Count me in.',
      },
      {
        phrase: 'Shall we meet outside the Royal Court Theatre at 2:00 PM?',
        functionCategory: 'Confirming Meeting Time & Location',
        exampleSentence: 'Let’s meet at the cafe entrance at noon.',
      },
    ],
    grammar: {
      title: 'Polite Refusals, Excuses & Alternative Proposals',
      conceptExplanation:
        '1. Declining Politely: Always soften refusals: "I’d love to, but..." / "I’m afraid I can’t because..." / "I have a prior commitment."\n2. Giving Excuses: Follow with a reason: "...because I have to study / due to a family visit."\n3. Proposing Alternatives: "How about [Noun / -ing] instead?" / "Are you free on Sunday?"\n4. Accepting: "That sounds wonderful / Count me in / I’d love to!"',
      patternFormula: 'I’d love to, but I’m afraid + [Reason / Commitment] | How about + [Day / Time / Activity] + instead?',
      contrastExamples: [
        {
          incorrect: 'I don’t want to go Saturday because I am busy.',
          correct: 'I’d love to, but I’m afraid I have a prior family commitment on Saturday.',
          explanation: 'Use softening phrases ("I’d love to, but I’m afraid...") for social politeness.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Daniel Evans',
        text: 'Hey! A few of us are going to see a comedy play at the Royal Court this Saturday evening at 7:30 PM. Would you like to come with us?',
        translation: 'अरे! हम में से कुछ लोग इस शनिवार शाम 7:30 बजे रॉयल कोर्ट में एक कॉमेडी नाटक देखने जा रहे हैं। क्या आप हमारे साथ आना चाहेंगे?',
      },
      {
        speaker: 'You',
        text: 'Thanks so much for the invite, Daniel! I’d love to, but I’m afraid I have to attend my nephew’s birthday party on Saturday.',
        translation: 'निमंत्रण के लिए बहुत-बहुत धन्यवाद, डैनियल! मुझे बहुत अच्छा लगता, लेकिन मुझे डर है कि मुझे शनिवार को अपने भतीजे के जन्मदिन की पार्टी में शामिल होना है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_156_1',
      type: 'fill_blank',
      prompt: 'Complete the polite decline: "I’d love to come, ___ (but I’m afraid / and I want) I have to work the late shift on Saturday."',
      options: [
        { id: 'opt_1', text: 'but I’m afraid', isCorrect: true },
        { id: 'opt_2', text: 'and I want', isCorrect: false },
        { id: 'opt_3', text: 'because I love', isCorrect: false },
      ],
      correctAnswer: 'but I’m afraid',
      explanation: '"I’d love to come, but I’m afraid..." is the standard courteous refusal formula.',
    },
    {
      id: 'cp_a2_156_2',
      type: 'multiple_choice',
      prompt: 'Which phrase proposes an alternative day correctly?',
      options: [
        { id: 'opt_1', text: 'How about grabbing lunch together on Sunday instead?', isCorrect: true },
        { id: 'opt_2', text: 'How about we to grab lunch together Sunday?', isCorrect: false },
        { id: 'opt_3', text: 'You must meet me Sunday now.', isCorrect: false },
      ],
      correctAnswer: 'How about grabbing lunch together on Sunday instead?',
      explanation: '"How about + gerund (-ing) + instead" is the standard alternative proposal structure.',
    },
    {
      id: 'cp_a2_156_3',
      type: 'multiple_choice',
      prompt: 'How do you accept an invitation with enthusiasm?',
      options: [
        { id: 'opt_1', text: 'That sounds fantastic! I would love to join you.', isCorrect: true },
        { id: 'opt_2', text: 'Fine, if I have nothing better to do.', isCorrect: false },
        { id: 'opt_3', text: 'I don’t care.', isCorrect: false },
      ],
      correctAnswer: 'That sounds fantastic! I would love to join you.',
      explanation: 'Warm, positive acceptance formula.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_156_1',
      scenarioContext: 'Decline an invitation politely with a reason.',
      prompt: 'Build: "I would love to, but I have a prior commitment."',
      targetStructure: 'I would love to + but I have a prior commitment',
      wordBank: ['I', 'would', 'love', 'to', 'but', 'have', 'a', 'prior', 'commitment', 'because'],
      acceptableSolutions: [
        'I would love to but I have a prior commitment',
        'I would love to, but I have a prior commitment.',
        'I would love to, but I have a prior commitment',
      ],
      explanation: 'Polite refusal with "prior commitment".',
    },
    {
      id: 'sc_a2_156_2',
      scenarioContext: 'Suggest an alternative meeting time.',
      prompt: 'Build: "How about meeting on Sunday afternoon instead?"',
      targetStructure: 'How about meeting + on Sunday afternoon instead',
      wordBank: ['How', 'about', 'meeting', 'on', 'Sunday', 'afternoon', 'instead', 'meet', 'to'],
      acceptableSolutions: [
        'How about meeting on Sunday afternoon instead',
        'How about meeting on Sunday afternoon instead?',
      ],
      explanation: '"How about + -ing + instead?".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_156_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! A few of us from the hospital are getting tickets for a live jazz concert at the Philharmonic Hall this Saturday evening at 7:30 PM. Would you like to join us for the show and dinner?',
      partnerAudioText:
        'Hey! A few of us from the hospital are getting tickets for a live jazz concert at the Philharmonic Hall this Saturday evening at 7:30 PM. Would you like to join us for the show and dinner?',
      partnerQuestionHindi:
        'अरे! अस्पताल के हम में से कुछ लोग इस शनिवार शाम 7:30 बजे फिलहारमोनिक हॉल में एक लाइव जैज़ कॉन्सर्ट के लिए टिकट ले रहे हैं। क्या आप शो और डिनर के लिए हमारे साथ शामिल होना चाहेंगे?',
      expectedFunction: 'Decline Politely with Softener & Reason (Thank you so much, I\'d love to, but I\'m afraid I have a prior family commitment on Saturday)',
      contextGoal:
        'Thank Daniel, decline politely using "I\'d love to, but I\'m afraid I have to..." explaining a family commitment (e.g. parents visiting or sister\'s birthday).',
      targetVocabulary: ['Thank you for the invitation', 'I’d love to, but I’m afraid I have to', 'prior family commitment', 'parents visiting', 'Saturday evening'],
      suggestedResponses: [
        {
          label: 'Polite Refusal with Excuse',
          text: 'Thanks so much for the invite, Daniel! I would love to go, but I’m afraid I can’t make it on Saturday because my parents are visiting from out of town.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Polite Decline',
          text: 'That sounds amazing, but I’m afraid I have a prior family commitment this Saturday. Thank you for thinking of me though!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Thanks & Softener (thanks / invite / would love to / sounds great / afraid / sorry)',
          patterns: ['thanks', 'invite', 'would love to', 'sounds great', 'afraid', 'sorry', 'thank you'],
          required: true,
        },
        {
          name: 'Excuse / Prior Commitment (parents / family / commitment / busy / saturday / visit / birthday / work)',
          patterns: ['parents', 'family', 'commitment', 'busy', 'saturday', 'visit', 'birthday', 'work', 'plans'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_blunt_refusal',
          pattern: 'no i cannot|i am not coming|i do not want',
          errorType: 'interaction',
          message: 'Soften your refusal with phrases like "I’d love to, but I’m afraid I have a prior commitment".',
          correctionPattern: 'I’d love to, but I’m afraid I can’t on Saturday.',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_156_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I’d love to join, but I’m ___ (afraid / scaring) I have plans on Saturday."',
        options: [
          { id: 'opt_1', text: 'afraid', isCorrect: true },
          { id: 'opt_2', text: 'scaring', isCorrect: false },
          { id: 'opt_3', text: 'afraided', isCorrect: false },
        ],
        correctAnswer: 'afraid',
        explanation: 'The polite idiom is "I’m afraid I have plans".',
      },
    },
    {
      id: 'turn_a2_156_2',
      turnIndex: 2,
      partnerPrompt:
        'Oh, that’s totally understandable! Family always comes first. But we really want to catch up outside the hospital soon. Are you free at any other time this weekend or next week?',
      partnerAudioText:
        'Oh, that’s totally understandable! Family always comes first. But we really want to catch up outside the hospital soon. Are you free at any other time this weekend or next week?',
      partnerQuestionHindi:
        'ओह, यह पूरी तरह से समझ में आता है! परिवार हमेशा पहले आता है। लेकिन हम वास्तव में जल्द ही अस्पताल के बाहर मिलना चाहते हैं। क्या आप इस सप्ताहांत या अगले सप्ताह किसी अन्य समय खाली हैं?',
      expectedFunction: 'Propose Alternative Plan with "How about" or "Are you free" (How about meeting up for Sunday brunch or going for a coffee on Sunday afternoon instead?)',
      contextGoal:
        'Propose an alternative plan for Sunday (e.g. coffee, brunch, or a walk in Sefton Park) using "How about...?" or "Are you free on Sunday?".',
      targetVocabulary: ['How about meeting on Sunday afternoon instead?', 'grab brunch or coffee', 'Are you free on Sunday?', 'Sefton Park walk'],
      suggestedResponses: [
        {
          label: 'Alternative Proposal with "How about"',
          text: 'How about meeting up for Sunday brunch or going for a coffee and a walk in Sefton Park instead? Are you free on Sunday around 1:00 PM?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Sunday Suggestion',
          text: 'How about having coffee together on Sunday afternoon instead? Would that work for you?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Alternative Suggestion (how about / are you free / what about / shall we / instead / sunday)',
          patterns: ['how about', 'are you free', 'what about', 'shall we', 'instead', 'sunday', 'next week'],
          required: true,
        },
        {
          name: 'Activity / Time (brunch / coffee / walk / park / lunch / afternoon / 1:00 / meet)',
          patterns: ['brunch', 'coffee', 'walk', 'park', 'lunch', 'afternoon', '1', '2', 'meet', 'catch up'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_156_2',
        type: 'multiple_choice',
        prompt: 'Which phrase proposes an alternative social plan naturally?',
        options: [
          { id: 'opt_1', text: 'How about grabbing a coffee on Sunday afternoon instead?', isCorrect: true },
          { id: 'opt_2', text: 'How about to grab coffee on Sunday?', isCorrect: false },
          { id: 'opt_3', text: 'Sunday is mandatory for you.', isCorrect: false },
        ],
        correctAnswer: 'How about grabbing a coffee on Sunday afternoon instead?',
        explanation: '"How about + gerund (-ing) + instead" is natural and polite.',
      },
    },
    {
      id: 'turn_a2_156_3',
      turnIndex: 3,
      partnerPrompt:
        'Sunday afternoon sounds brilliant! The Lark Lane Coffee Roasters near Sefton Park has great pastries and outdoor seating. Shall we meet there at 1:30 PM?',
      partnerAudioText:
        'Sunday afternoon sounds brilliant! The Lark Lane Coffee Roasters near Sefton Park has great pastries and outdoor seating. Shall we meet there at 1:30 PM?',
      partnerQuestionHindi:
        'रविवार की दोपहर बहुत बढ़िया लग रही है! सेफ्टन पार्क के पास लार्क लेन कॉफी रोस्टर्स में बेहतरीन पेस्ट्री और आउटडोर बैठने की जगह है। क्या हम वहां दोपहर 1:30 बजे मिलें?',
      expectedFunction: 'Accept Invitation Enthusiastically & Ask About Colleagues (That sounds fantastic! I\'d love to / Shall we invite Sarah as well?)',
      contextGoal:
        'Accept the plan with enthusiasm ("That sounds fantastic!"), agree to 1:30 PM at Lark Lane, and ask if anyone else from the shift should be invited.',
      targetVocabulary: ['That sounds fantastic!', 'I’d love to come', 'Lark Lane Coffee Roasters at 1:30 PM', 'Should we invite anyone else from our team?'],
      suggestedResponses: [
        {
          label: 'Enthusiastic Acceptance & Question',
          text: 'That sounds fantastic! 1:30 PM at Lark Lane Coffee Roasters works perfectly for me. Should we invite Sarah and Marcus to join us too?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Acceptance',
          text: 'I’d love that! 1:30 PM on Sunday is great. Should we invite other colleagues from the department?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Enthusiastic Acceptance (sounds fantastic / great / love that / perfect / count me in / brilliant)',
          patterns: ['sounds fantastic', 'great', 'love that', 'perfect', 'count me in', 'brilliant', 'wonderful', 'sounds good'],
          required: true,
        },
        {
          name: 'Agreement & Question (1:30 / lark lane / sunday / invite / colleagues / others / ?)',
          patterns: ['1:30', 'lark lane', 'sunday', 'invite', 'colleagues', 'others', 'sarah', 'marcus', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_156_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "That sounds ___ (fantastic / fantastically)! I’d love to come."',
        options: [
          { id: 'opt_1', text: 'fantastic', isCorrect: true },
          { id: 'opt_2', text: 'fantastically', isCorrect: false },
          { id: 'opt_3', text: 'fantasy', isCorrect: false },
        ],
        correctAnswer: 'fantastic',
        explanation: 'Sensory verb "sounds" takes an adjective ("fantastic").',
      },
    },
    {
      id: 'turn_a2_156_4',
      turnIndex: 4,
      partnerPrompt:
        'I will text Sarah and Marcus right now to see if they can make it! So we are locked in for Sunday. Could you confirm our meetup details one last time?',
      partnerAudioText:
        'I will text Sarah and Marcus right now to see if they can make it! So we are locked in for Sunday. Could you confirm our meetup details one last time?',
      partnerQuestionHindi:
        'मैं सारा और मार्कस को अभी टेक्स्ट करता हूँ यह देखने के लिए कि क्या वे आ सकते हैं! तो हम रविवार के लिए पक्के हैं। क्या आप एक आखिरी बार हमारे मिलने के विवरण की पुष्टि कर सकते हैं?',
      expectedFunction: 'Confirm Final Social Details & Close (To confirm, we are meeting this Sunday at 1:30 PM at Lark Lane Coffee Roasters for coffee and a walk)',
      contextGoal:
        'Confirm the final plan: Sunday at 1:30 PM, Lark Lane Coffee Roasters near Sefton Park, and express anticipation.',
      targetVocabulary: ['To confirm our plan', 'Sunday at 1:30 PM', 'Lark Lane Coffee Roasters', 'coffee and a walk in the park', 'Looking forward to seeing you Daniel'],
      suggestedResponses: [
        {
          label: 'Comprehensive Social Confirmation',
          text: 'To confirm: we are meeting this Sunday at 1:30 PM at Lark Lane Coffee Roasters for coffee and a park walk. Looking forward to catching up, Daniel!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Confirmation',
          text: 'All confirmed: Sunday at 1:30 PM outside Lark Lane Coffee Roasters. See you there, Daniel!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Confirmation Signpost (to confirm / all confirmed / agreed / perfect / see you)',
          patterns: ['to confirm', 'all confirmed', 'agreed', 'perfect', 'see you', 'looking forward'],
          required: true,
        },
        {
          name: 'Confirmed Details (sunday / 1:30 / lark lane / coffee / daniel)',
          patterns: ['sunday', '1:30', 'lark lane', 'coffee', 'daniel', 'park'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_156_4',
        type: 'multiple_choice',
        prompt: 'Which closing sentence expresses friendly anticipation warmly?',
        options: [
          { id: 'opt_1', text: 'All confirmed for Sunday at 1:30 PM. Looking forward to seeing you, Daniel!', isCorrect: true },
          { id: 'opt_2', text: 'If you are late I will leave.', isCorrect: false },
          { id: 'opt_3', text: 'Meeting is finished goodbye.', isCorrect: false },
        ],
        correctAnswer: 'All confirmed for Sunday at 1:30 PM. Looking forward to seeing you, Daniel!',
        explanation: 'Warm and courteous confirmation.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 65,
  },
};
