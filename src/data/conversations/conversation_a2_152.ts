import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_152: ConversationDefinition = {
  id: 'conv_a2_152',
  title: 'Giving Constructive Feedback & Explaining Reasons',
  cefr: 'A2',
  unitId: 'unit_a2_11',
  lessonLinks: ['lesson_a2_11_152'],
  estimatedMinutes: 5,
  scenario:
    'You are in a design review meeting at Echo Digital Studio in Leeds. Your colleague, Senior UX Designer Liam Henderson, is showcasing a draft layout for a new mobile banking app and asking for your feedback. You will offer constructive suggestions using modal advice ("You could consider...", "Why not...?"), explain causes using linkers ("because of", "due to", "since"), and summarize agreed design improvements.',
  communicativeGoals: [
    'Offer diplomatic and constructive feedback on design mockups or presentations',
    'Explain reasons for suggestions using "because of", "due to", and "since"',
    'Use modal advice formulas ("You could consider...", "Why not...?", "You should...")',
    'Summarize agreed improvements and encourage team collaboration',
  ],
  canDoStatements: [
    'Can give constructive, diplomatic feedback on a colleague\'s work',
    'Can explain causes of issues using "due to", "because of", and "since"',
    'Can suggest practical improvements using modal advice expressions',
  ],
  characters: [
    {
      id: 'char_liam_henderson',
      name: 'Liam Henderson',
      role: 'Senior UX Designer',
      avatar: '🎨',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'constructive',
        ipa: '/kənˈstrʌktɪv/',
        partOfSpeech: 'adjective',
        meaning: 'Serving a useful purpose; tending to build up or improve',
        exampleSentence: 'Thank you for giving constructive feedback on my presentation.',
        translations: { hi: 'रचनात्मक / उपयोगी' },
      },
      {
        word: 'due to',
        ipa: '/djuː tuː/',
        partOfSpeech: 'preposition',
        meaning: 'Because of; as a result of (followed by a noun phrase)',
        exampleSentence: 'Users experienced delays due to the cluttered navigation menu.',
        translations: { hi: 'के कारण / की वजह से' },
      },
      {
        word: 'streamline',
        ipa: '/ˈstriːmlaɪn/',
        partOfSpeech: 'verb',
        meaning: 'To make an organization or system more efficient and simpler',
        exampleSentence: 'We should streamline the checkout process to reduce clicks.',
        translations: { hi: 'सरल और प्रभावी बनाना' },
      },
      {
        word: 'contrast',
        ipa: '/ˈkɒntrɑːst/',
        partOfSpeech: 'noun',
        meaning: 'The state of being strikingly different from something else in juxtaposition or close association',
        exampleSentence: 'We need better color contrast between the text and background.',
        translations: { hi: 'विपरीतता / कंट्रास्ट' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Overall, the layout is clean, but you could consider increasing the button size.',
        functionCategory: 'Balancing Praise with Constructive Advice',
        exampleSentence: 'The design is strong, but you could consider simplifying the text.',
      },
      {
        phrase: 'Users might struggle to read the text due to low color contrast.',
        functionCategory: 'Explaining Causes with "Due to" / "Because of"',
        exampleSentence: 'The app is slow because of heavy background images.',
      },
      {
        phrase: 'Why not place the search bar at the top since most users look there first?',
        functionCategory: 'Making Recommendations with "Why not...?" & "Since"',
        exampleSentence: 'Why not add a quick filter since users need fast search?',
      },
      {
        phrase: 'To summarize our discussion, we will adjust the font size and enlarge the main buttons.',
        functionCategory: 'Summarizing Agreed Improvements',
        exampleSentence: 'We agree to change the color palette before final testing.',
      },
    ],
    grammar: {
      title: 'Cause Linkers ("Because of" / "Due to" / "Since") & Modal Advice',
      conceptExplanation:
        '1. "Because of" / "Due to": Followed by a NOUN PHRASE (e.g., "due to low contrast", "because of the small font").\n2. "Since" / "Because": Followed by a FULL CLAUSE [Subject + Verb] (e.g., "since users need clarity").\n3. Modal Advice: "You could consider + [Verb-ing]" / "Why not + [Base Verb]?" / "You should + [Base Verb]".',
      patternFormula: 'You could consider [Verb-ing] + [due to / because of + Noun Phrase] | Why not [Base Verb] + [since + Clause]',
      contrastExamples: [
        {
          incorrect: 'The text is bad because low contrast and you must change.',
          correct: 'The text is hard to read due to low contrast; you could consider using a darker font.',
          explanation: 'Use "due to + noun phrase" and diplomatic advice ("you could consider").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Liam Henderson',
        text: 'Thanks for reviewing my mobile banking mockup. What is your initial impression of the home screen layout?',
        translation: 'मेरे मोबाइल बैंकिंग मॉकअप की समीक्षा करने के लिए धन्यवाद। होम स्क्रीन लेआउट पर आपका प्रारंभिक प्रभाव क्या है?',
      },
      {
        speaker: 'You',
        text: 'The layout is very clean overall, but you could consider enlarging the transfer button due to touch accessibility.',
        translation: 'लेआउट समग्र रूप से बहुत साफ है, लेकिन टच एक्सेसिबिलिटी के कारण आप ट्रांसफर बटन को बड़ा करने पर विचार कर सकते हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_152_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "Users may have difficulty reading ___ (due to / because) the small font size."',
      options: [
        { id: 'opt_1', text: 'due to', isCorrect: true },
        { id: 'opt_2', text: 'because', isCorrect: false },
        { id: 'opt_3', text: 'since', isCorrect: false },
      ],
      correctAnswer: 'due to',
      explanation: 'Use "due to" (or "because of") before a noun phrase ("the small font size").',
    },
    {
      id: 'cp_a2_152_2',
      type: 'multiple_choice',
      prompt: 'Which sentence offers diplomatic advice correctly?',
      options: [
        { id: 'opt_1', text: 'You could consider adding more spacing between the icons.', isCorrect: true },
        { id: 'opt_2', text: 'You could consider to add more spacing between the icons.', isCorrect: false },
        { id: 'opt_3', text: 'You must to change all icons right now.', isCorrect: false },
      ],
      correctAnswer: 'You could consider adding more spacing between the icons.',
      explanation: '"Consider" is followed by a gerund ("adding").',
    },
    {
      id: 'cp_a2_152_3',
      type: 'multiple_choice',
      prompt: 'Which structure uses "since" correctly to explain a reason?',
      options: [
        { id: 'opt_1', text: 'Why not move the button since users tap it frequently?', isCorrect: true },
        { id: 'opt_2', text: 'Why not move the button since frequent tapping?', isCorrect: false },
        { id: 'opt_3', text: 'Why not move button due to users tap it?', isCorrect: false },
      ],
      correctAnswer: 'Why not move the button since users tap it frequently?',
      explanation: '"Since" introduces a complete clause ("users tap it frequently").',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_152_1',
      scenarioContext: 'Give advice on buttons with a reason.',
      prompt: 'Build: "You could consider enlarging the button due to accessibility."',
      targetStructure: 'You could consider enlarging + the button + due to accessibility',
      wordBank: ['You', 'could', 'consider', 'enlarging', 'the', 'button', 'due', 'to', 'accessibility', 'because'],
      acceptableSolutions: [
        'You could consider enlarging the button due to accessibility',
        'You could consider enlarging the button due to accessibility.',
      ],
      explanation: 'Diplomatic suggestion with "consider + -ing" and "due to".',
    },
    {
      id: 'sc_a2_152_2',
      scenarioContext: 'Suggest a location change.',
      prompt: 'Build: "Why not place the search bar at the top?"',
      targetStructure: 'Why not + place + the search bar + at the top',
      wordBank: ['Why', 'not', 'place', 'the', 'search', 'bar', 'at', 'the', 'top', 'placing'],
      acceptableSolutions: [
        'Why not place the search bar at the top',
        'Why not place the search bar at the top?',
      ],
      explanation: 'Suggestion formula "Why not + base verb".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_152_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi! Thanks for sitting down with me for this design critique. Here is our new mobile dashboard. What is your honest impression of the general layout and visual balance?',
      partnerAudioText:
        'Hi! Thanks for sitting down with me for this design critique. Here is our new mobile dashboard. What is your honest impression of the general layout and visual balance?',
      partnerQuestionHindi:
        'नमस्ते! इस डिज़ाइन समीक्षा के लिए मेरे साथ बैठने के लिए धन्यवाद। यहाँ हमारा नया मोबाइल डैशबोर्ड है। सामान्य लेआउट और दृश्य संतुलन पर आपकी ईमानदार राय क्या है?',
      expectedFunction: 'Give Balanced Impression & Diplomatic Advice (The layout is clean, but you could consider simplifying the header due to cluttered icons)',
      contextGoal:
        'Compliment the overall design and suggest an improvement (e.g. font size or spacing) explaining the cause with "due to" or "because of".',
      targetVocabulary: ['overall layout is clean', 'you could consider', 'due to', 'because of', 'visual balance', 'spacing'],
      suggestedResponses: [
        {
          label: 'Balanced Feedback with "due to"',
          text: 'Hi Liam! Overall, the layout looks very modern and clean. However, you could consider increasing the font size due to readability on smaller screens.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Diplomatic Feedback with "because of"',
          text: 'The visual balance is great, but you could consider adding more spacing between cards because of touch accuracy.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Praise & Positive Reaction (clean / modern / great / good / nice / like / overall / visual balance)',
          patterns: ['clean', 'modern', 'great', 'good', 'nice', 'like', 'overall', 'visual balance', 'impressive'],
          required: true,
        },
        {
          name: 'Suggestion & Cause Linker (you could consider / why not / should / due to / because of / since / font / spacing / buttons / readability)',
          patterns: ['you could consider', 'why not', 'should', 'due to', 'because of', 'since', 'font', 'spacing', 'buttons', 'readability', 'icons'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_because_noun',
          pattern: 'because the small font size|because low contrast',
          errorType: 'grammar',
          message: 'Use "because of" or "due to" before a noun phrase without a verb.',
          correctionPattern: 'due to low contrast / because of the small font',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_152_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "The screen is hard to read ___ (because of / because) the low contrast."',
        options: [
          { id: 'opt_1', text: 'because of', isCorrect: true },
          { id: 'opt_2', text: 'because', isCorrect: false },
          { id: 'opt_3', text: 'since', isCorrect: false },
        ],
        correctAnswer: 'because of',
        explanation: '"Because of" comes before the noun phrase "the low contrast".',
      },
    },
    {
      id: 'turn_a2_152_2',
      turnIndex: 2,
      partnerPrompt:
        'I see your point about the font and readability. What do you think about the bottom navigation bar? Some testers mentioned getting confused between the "Transfers" and "Payments" icons.',
      partnerAudioText:
        'I see your point about the font and readability. What do you think about the bottom navigation bar? Some testers mentioned getting confused between the "Transfers" and "Payments" icons.',
      partnerQuestionHindi:
        'मैं फ़ॉन्ट और पठनीयता के बारे में आपकी बात समझता हूँ। निचले नेविगेशन बार के बारे में आप क्या सोचते हैं? कुछ परीक्षकों ने "ट्रांसफर" और "भुगतान" आइकन के बीच भ्रमित होने का उल्लेख किया।',
      expectedFunction: 'Suggest Navigation Solution with Cause ("Why not combine them since..." or "You should add text labels due to...")',
      contextGoal:
        'Suggest adding text labels or combining the icons, using "Why not..." or "since" / "due to".',
      targetVocabulary: ['Why not add clear text labels?', 'since users need clarity', 'streamline the menu', 'due to icon similarity'],
      suggestedResponses: [
        {
          label: 'Suggestion with "Why not" and "since"',
          text: 'Why not add text labels beneath each icon since users need clear visual cues? That will eliminate confusion immediately.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Suggestion with "You should" and "due to"',
          text: 'You should consider combining those tabs due to their similar functions, or add distinct labels to clarify them.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Suggestion Form (why not / you could / you should / consider / recommend / combine / labels / text)',
          patterns: ['why not', 'you could', 'you should', 'consider', 'recommend', 'combine', 'labels', 'text', 'icons', 'differentiate'],
          required: true,
        },
        {
          name: 'Reason Linker (since / because / due to / because of / so that)',
          patterns: ['since', 'because', 'due to', 'because of', 'so that', 'to avoid', 'clear'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_152_2',
        type: 'multiple_choice',
        prompt: 'Which recommendation is structured correctly?',
        options: [
          { id: 'opt_1', text: 'Why not add clear text labels beneath the icons?', isCorrect: true },
          { id: 'opt_2', text: 'Why not adding clear text labels beneath icons?', isCorrect: false },
          { id: 'opt_3', text: 'You should to add clear labels.', isCorrect: false },
        ],
        correctAnswer: 'Why not add clear text labels beneath the icons?',
        explanation: '"Why not" takes the base form of the verb ("add").',
      },
    },
    {
      id: 'turn_a2_152_3',
      turnIndex: 3,
      partnerPrompt:
        'Adding labels makes total sense! Now, regarding the color scheme: do you think the light grey text on the dark navy cards has sufficient contrast, or should we switch to pure white?',
      partnerAudioText:
        'Adding labels makes total sense! Now, regarding the color scheme: do you think the light grey text on the dark navy cards has sufficient contrast, or should we switch to pure white?',
      partnerQuestionHindi:
        'लेबल जोड़ना पूरी तरह से समझ में आता है! अब, रंग योजना के संबंध में: क्या आपको लगता है कि गहरे नेवी कार्ड पर हल्के भूरे रंग के टेक्स्ट में पर्याप्त कंट्रास्ट है, या हमें शुद्ध सफेद पर स्विच करना चाहिए?',
      expectedFunction: 'Evaluate Color Contrast & Recommend Choice with Reason (Switch to pure white because of better contrast and accessibility guidelines)',
      contextGoal:
        'Recommend switching to pure white text to improve contrast and pass accessibility standards, and ask Liam when the updated mockup will be ready.',
      targetVocabulary: ['switch to pure white', 'better color contrast', 'accessibility standards', 'When will the revised version be ready?'],
      suggestedResponses: [
        {
          label: 'Contrast Recommendation & Follow-up Question',
          text: 'We should definitely switch to pure white due to accessibility standards and better contrast outdoors. When do you think the updated version will be ready?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Advice & Timeline Inquiry',
          text: 'Pure white is much better because of readability. When will you update the prototype?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Contrast Choice (pure white / white / switch / better / contrast / accessibility / readability)',
          patterns: ['pure white', 'white', 'switch', 'better', 'contrast', 'accessibility', 'readability', 'brighter'],
          required: true,
        },
        {
          name: 'Follow-up Question (when / prototype / updated / ready / next version / ?)',
          patterns: ['when', 'prototype', 'updated', 'ready', 'next version', 'timeline', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_152_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We chose white text ___ (due to / because) accessibility reasons."',
        options: [
          { id: 'opt_1', text: 'due to', isCorrect: true },
          { id: 'opt_2', text: 'because', isCorrect: false },
          { id: 'opt_3', text: 'since', isCorrect: false },
        ],
        correctAnswer: 'due to',
        explanation: '"Due to" precedes the noun phrase "accessibility reasons".',
      },
    },
    {
      id: 'turn_a2_152_4',
      turnIndex: 4,
      partnerPrompt:
        'I can apply these changes and have the revised prototype ready by tomorrow afternoon at 2:00 PM. Could you briefly summarize the key adjustments we agreed on?',
      partnerAudioText:
        'I can apply these changes and have the revised prototype ready by tomorrow afternoon at 2:00 PM. Could you briefly summarize the key adjustments we agreed on?',
      partnerQuestionHindi:
        'मैं इन परिवर्तनों को लागू कर सकता हूँ और कल दोपहर 2:00 बजे तक संशोधित प्रोटोटाइप तैयार कर सकता हूँ। क्या आप उन प्रमुख समायोजनों का संक्षेप प्रस्तुत कर सकते हैं जिन पर हम सहमत हुए हैं?',
      expectedFunction: 'Summarize Agreed Improvements & Close (To summarize, we will enlarge the font, add navigation labels, and switch to white text)',
      contextGoal:
        'Summarize the three key points: increase font size, add icon text labels, switch to white text for contrast, and thank Liam.',
      targetVocabulary: ['To summarize', 'increase font size', 'add text labels to navigation', 'change text to pure white', 'great work Liam'],
      suggestedResponses: [
        {
          label: 'Comprehensive Design Summary',
          text: 'To summarize our review: we will increase the font size, add clear labels to the navigation bar, and switch to pure white text for better contrast. Thanks for your great work, Liam!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Action Summary',
          text: 'In summary, we agreed on larger fonts, navigation labels, and white text for contrast. Looking forward to the revised mockup tomorrow!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Summary Marker (to summarize / in summary / summary / agreed / key points)',
          patterns: ['to summarize', 'in summary', 'summary', 'agreed', 'key points', 'so'],
          required: true,
        },
        {
          name: 'Agreed Changes (font / size / labels / text / white / contrast / navigation)',
          patterns: ['font', 'size', 'labels', 'text', 'white', 'contrast', 'navigation', 'bar'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_152_4',
        type: 'multiple_choice',
        prompt: 'Which summary sentence accurately captures the design meeting outcomes?',
        options: [
          { id: 'opt_1', text: 'To summarize, we will enlarge the font, add icon labels, and use white text for contrast.', isCorrect: true },
          { id: 'opt_2', text: 'Everything is bad so do whatever.', isCorrect: false },
          { id: 'opt_3', text: 'I leave now see you later.', isCorrect: false },
        ],
        correctAnswer: 'To summarize, we will enlarge the font, add icon labels, and use white text for contrast.',
        explanation: 'Polite and accurate summary of agreed changes.',
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
