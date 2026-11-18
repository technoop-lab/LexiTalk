import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_208: ConversationDefinition = {
  id: 'conv_a2_208',
  title: 'Mediation: Relaying Instructions & Practical Information',
  cefr: 'A2',
  unitId: 'unit_a2_14',
  lessonLinks: ['lesson_a2_14_208'],
  estimatedMinutes: 5,
  scenario:
    'You are in the campus student union helping Tariq, an international exchange student who has just arrived this morning. He is holding a complex official notice about campus smartcard collection, library orientation tours, and emergency contact registration. You mediate this practical information by breaking down the instructions into simple, clear, actionable steps in plain English.',
  communicativeGoals: [
    'Mediate complex written leaflets and official campus notices into simple, direct instructions',
    'Explain step-by-step procedures (where to go, what documents to bring, opening hours)',
    'Use sequencing and simplifying language ("First you need to...", "The main thing is...", "Basically, what you do is...")',
    'Confirm that the peer understands the key deadlines and locations',
  ],
  canDoStatements: [
    'Can relay and simplify practical information from written notices to a peer',
    'Can explain campus procedures, locations, and requirements in clear A2 English',
    'Can check comprehension and offer supportive mediation assistance',
  ],
  characters: [
    {
      id: 'char_tariq_exchange_student',
      name: 'Tariq',
      role: 'Newly Arrived Exchange Student',
      avatar: '🧭',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'mediate',
        ipa: '/ˈmiːdieɪt/',
        partOfSpeech: 'verb',
        meaning: 'To act as a linguistic bridge by explaining, simplifying, or translating information for someone else',
        exampleSentence: 'I can mediate this official letter for you and explain what action is needed.',
        translations: { hi: 'मध्यस्थता करना / सरल भाषा में समझाना (मीडिएट)' },
      },
      {
        word: 'smartcard',
        ipa: '/ˈsmɑːtkɑːd/',
        partOfSpeech: 'noun',
        meaning: 'An electronic plastic card used for building access, printing, and identification',
        exampleSentence: 'You will need your student smartcard to enter the campus library and computer labs.',
        translations: { hi: 'स्मार्ट कार्ड / छात्र पहचान पत्र' },
      },
      {
        word: 'instruction',
        ipa: '/ɪnˈstrʌkʃn/',
        partOfSpeech: 'noun',
        meaning: 'Detailed directions or information on how something should be done or operated',
        exampleSentence: 'The notice gives three specific instructions for collecting your ID card.',
        translations: { hi: 'निर्देश / हिदायत' },
      },
      {
        word: 'basically',
        ipa: '/ˈbeɪsɪkli/',
        partOfSpeech: 'adverb',
        meaning: 'In the most essential or fundamental respects; simply put',
        exampleSentence: 'Basically, you just need to show your passport and admission letter.',
        translations: { hi: 'मूल रूप से / सीधे शब्दों में (बेसिकली)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Basically, what this notice means is that you must register online first.',
        functionCategory: 'Simplifying official notice',
        exampleSentence: 'In short, you don’t need to pay any extra fee.',
      },
      {
        phrase: 'First, take your passport and student number to the student hub in Building B.',
        functionCategory: 'Step-by-step procedural instruction',
        exampleSentence: 'Then, they will take your photo and print the card in five minutes.',
      },
      {
        phrase: 'Make sure you go before four thirty, because the office closes at five.',
        functionCategory: 'Highlighting important constraints',
        exampleSentence: 'Don’t forget to bring your original acceptance letter.',
      },
      {
        phrase: 'Does that make sense, or would you like me to walk over there with you?',
        functionCategory: 'Supportive mediation check',
        exampleSentence: 'Let me know if you need help with the online form.',
      },
    ],
    grammar: {
      title: 'Mediation Strategies & Step-by-Step Sequencing',
      conceptExplanation:
        '1. Mediating Complex Texts into Plain Language:\n   - "Basically, it says that [Simplified rule]"\n   - "The most important point is to [Key action]"\n   - "In simple terms, you just need to [Action]"\n2. Clear Step Sequencing:\n   - "First, go to [Place] with [Documents]"\n   - "Next / Then, show your [Item] to the staff"\n   - "Finally, collect your [Item]"\n3. Highlighting Time Limits & Warnings:\n   - "Make sure you [Action] before [Time]"\n   - "Remember that [Condition]"',
      patternFormula: 'Basically, this notice means [Summary] ➔ First, you [Step 1] ➔ Then, [Step 2] ➔ Make sure you [Warning]',
      contrastExamples: [
        {
          incorrect: 'You read notice! It say many words.',
          correct: 'Don’t worry about the legal wording. Basically, it means you just need to collect your ID card today.',
          explanation: 'Mediation extracts the practical meaning for the listener in calm, clear English.',
        },
        {
          incorrect: 'First you go Building B then photograph then you pay nothing.',
          correct: 'First, head over to Building B with your passport. Then, they will take your photo and hand you your card for free.',
          explanation: 'Use clear sequential verbs and cohesive pronouns.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Tariq',
        text: 'Hi! Excuse me, I just arrived from Madrid and this official university document looks so confusing. Can you help me understand what I need to do first?',
        translation: 'नमस्ते! माफ कीजिए, मैं अभी-अभी मैड्रिड से आया हूँ और यह आधिकारिक विश्वविद्यालय दस्तावेज बहुत भ्रमित करने वाला लगता है। क्या आप मुझे यह समझने में मदद कर सकते हैं कि मुझे पहले क्या करना है?',
      },
      {
        speaker: 'Learner',
        text: 'Of course! Don’t worry. Basically, this leaflet explains how to get your student ID card and access campus Wi-Fi.',
        translation: 'बिल्कुल! चिंता न करें। संक्षेप में, यह पत्रक बताता है कि अपना छात्र पहचान पत्र कैसे प्राप्त करें और कैंपस वाई-फाई तक कैसे पहुंचें।',
      },
      {
        speaker: 'Tariq',
        text: 'Oh, wonderful! What documents do I need to bring, and where should I go?',
        translation: 'ओह, बहुत बढ़िया! मुझे कौन से दस्तावेज़ लाने होंगे और मुझे कहाँ जाना चाहिए?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_208_1',
      type: 'fill_blank',
      prompt: 'Complete with the mediation phrase: "______ (Basically / Complicated), you only need to show your passport at the desk."',
      options: [
        { id: 'opt_1', text: 'Basically', isCorrect: true },
        { id: 'opt_2', text: 'Hardly', isCorrect: false },
        { id: 'opt_3', text: 'Strictly', isCorrect: false },
      ],
      correctAnswer: 'Basically',
      explanation: '"Basically" introduces a simplified, practical explanation.',
    },
    {
      id: 'cp_208_2',
      type: 'multiple_choice',
      prompt: 'Which sentence best relays complex instructions into a simple, step-by-step sequence?',
      options: [
        { id: 'opt_1', text: 'First, upload your photo online; then, collect your printed card at Building B.', isCorrect: true },
        { id: 'opt_2', text: 'Paper has big paragraphs you must read all night.', isCorrect: false },
        { id: 'opt_3', text: 'Building B is house with doors.', isCorrect: false },
      ],
      correctAnswer: 'First, upload your photo online; then, collect your printed card at Building B.',
      explanation: 'Clear, sequential, and accessible mediation.',
    },
    {
      id: 'cp_208_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [make sure you / before four o\'clock / visit the desk / arrive]',
      correctAnswer: 'make sure you visit the desk before four o\'clock',
      explanation: 'Imperative warning structure: make sure you + verb phrase + time.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_208_1',
      prompt: 'Construct a sentence simplifying a three-page document into one practical action.',
      scenarioContext: 'Explaining a complex leaflet to Tariq.',
      targetStructure: 'Basically, this document means you must register your local address online by Friday.',
      wordBank: ['Basically,', 'this document means', 'you must register', 'your local address online', 'by Friday afternoon.'],
      acceptableSolutions: [
        'Basically, this document means you must register your local address online by Friday.',
        'Basically, it says that you need to register your address by Friday.',
      ],
      explanation: 'Mediation formula "Basically, this document means...".',
    },
    {
      id: 'sc_208_2',
      prompt: 'Construct a step-by-step instruction telling Tariq what to bring to the ID office.',
      scenarioContext: 'Giving procedural instructions.',
      targetStructure: 'First, take your passport and student confirmation email to the Student Hub on the ground floor.',
      wordBank: ['First, take', 'your passport and', 'student confirmation email', 'to the Student Hub', 'on the ground floor.'],
      acceptableSolutions: [
        'First, take your passport and student confirmation email to the Student Hub on the ground floor.',
        'First, bring your passport to the Student Hub on the ground floor.',
      ],
      explanation: 'Step 1: First, take [Documents] to [Location].',
    },
  ],
  turns: [
    {
      id: 'turn_208_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi! Sorry to bother you, but I just arrived this morning on the exchange programme. The university sent me this three-page PDF full of administrative terms. Could you help me understand what the main priority is today?',
      partnerAudioText:
        'Hi! Sorry to bother you, but I just arrived this morning on the exchange programme. The university sent me this three-page PDF full of administrative terms. Could you help me understand what the main priority is today?',
      partnerQuestionHindi:
        'नमस्ते! आपको परेशान करने के लिए खेद है, लेकिन मैं एक्सचेंज प्रोग्राम के तहत आज सुबह ही आया हूँ। विश्वविद्यालय ने मुझे प्रशासनिक शब्दों से भरा यह तीन पन्नों का पीडीएफ भेजा है। क्या आप मुझे यह समझने में मदद कर सकते हैं कि आज मुख्य प्राथमिकता क्या है?',
      expectedFunction: 'Mediating and simplifying the main priority (collecting student smartcard and activating campus account)',
      contextGoal: 'Reassure Tariq and simplify the notice: "Basically, your main priority today is collecting your student ID smartcard and setting up your Wi-Fi"',
      targetVocabulary: ['Basically', 'main priority', 'don’t worry', 'student smartcard', 'ID card', 'Wi-Fi', 'Tariq'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hi Tariq, welcome to campus! Don’t worry about all the long text. Basically, your main priority today is to collect your student ID card and activate your Wi-Fi.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Tariq! In simple terms, you just need to do two things today: pick up your smartcard and register your laptop on the campus network.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Welcome! Let me break that down for you. Basically, page one is the only urgent part: getting your physical campus ID and verifying your registration.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'mediation_opener',
          patterns: ['basically', 'in simple terms', 'don’t worry', 'break down', 'main priority', 'welcome'],
          required: true,
        },
        {
          name: 'core_tasks',
          patterns: ['id card', 'smartcard', 'wi-fi', 'network', 'registration', 'collect', 'activate'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_208_1_overcomplicated',
          pattern: /you must read paragraph three subclause/i,
          errorType: 'interaction',
          message: 'Mediate simply! Use "Basically, the main priority is to collect your ID card today."',
          correctionPattern: 'Basically, your main priority today is to collect your student ID card.',
        },
      ],
      remediationPractice: {
        id: 'rem_208_1',
        type: 'fill_blank',
        prompt: 'Fill in: "______ (Basically), you just need to collect your ID card."',
        options: [
          { id: 'r1', text: 'Basically', isCorrect: true },
          { id: 'r2', text: 'Complicated', isCorrect: false },
        ],
        correctAnswer: 'Basically',
        explanation: 'Use "Basically" to simplify complex instructions.',
      },
    },
    {
      id: 'turn_208_2',
      turnIndex: 2,
      partnerPrompt:
        'That makes it sound so much easier, thank goodness! Where exactly do I go to collect my ID card, and what physical documents do I have to take with me?',
      partnerAudioText:
        'That makes it sound so much easier, thank goodness! Where exactly do I go to collect my ID card, and what physical documents do I have to take with me?',
      partnerQuestionHindi:
        'यह इसे बहुत आसान बनाता है, भगवान का शुक्र है! मुझे अपना पहचान पत्र लेने के लिए वास्तव में कहाँ जाना होगा, और मुझे अपने साथ कौन से भौतिक दस्तावेज़ ले जाने होंगे?',
      expectedFunction: 'Giving clear procedural instructions with location and required documents',
      contextGoal: 'Explain: "Go to the Student Services Hub in Building B on the ground floor, and bring your passport and student confirmation number"',
      targetVocabulary: ['First', 'Student Services Hub', 'Building B', 'passport', 'confirmation number', 'ground floor'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'First, go to the Student Services Hub in Building B on the ground floor. You only need to bring your original passport and your student confirmation number.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Head over to Building B, room G05. Show the staff at the desk your passport and admission letter, and they will take your photo.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'It’s very straightforward: take your passport and student ID number to the ground floor reception in Building B. The whole process takes five minutes.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'location_instruction',
          patterns: ['building b', 'student hub', 'ground floor', 'services hub', 'reception', 'desk'],
          required: true,
        },
        {
          name: 'required_documents',
          patterns: ['passport', 'confirmation', 'student number', 'admission letter', 'photo'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_208_2_missing_docs',
          pattern: /go to building b\.$/i,
          errorType: 'interaction',
          message: 'Make sure to mention what documents Tariq needs to bring (e.g. passport and student number).',
          correctionPattern: 'Go to Building B and bring your passport and confirmation email.',
        },
      ],
      remediationPractice: {
        id: 'rem_208_2',
        type: 'multiple_choice',
        prompt: 'Which sentence provides the clearest procedural instructions?',
        options: [
          { id: 'r1', text: 'Go to the Student Hub in Building B and bring your passport.', isCorrect: true },
          { id: 'r2', text: 'Go building bring papers.', isCorrect: false },
        ],
        correctAnswer: 'Go to the Student Hub in Building B and bring your passport.',
        explanation: 'Specifies exact location and document required.',
      },
    },
    {
      id: 'turn_208_3',
      turnIndex: 3,
      partnerPrompt:
        'Building B, ground floor with my passport — got it! Are there any specific opening times or deadlines I must watch out for today?',
      partnerAudioText:
        'Building B, ground floor with my passport — got it! Are there any specific opening times or deadlines I must watch out for today?',
      partnerQuestionHindi:
        'बिल्डिंग बी, ग्राउंड फ्लोर मेरे पासपोर्ट के साथ — समझ गया! क्या आज कोई विशिष्ट खुलने का समय या समय सीमा है जिसका मुझे ध्यान रखना चाहिए?',
      expectedFunction: 'Highlighting office hours, deadlines, and important constraints',
      contextGoal: 'Warn him: "Make sure you go before 4:30 PM because the ID desk closes promptly at 5:00 PM"',
      targetVocabulary: ['Make sure', 'closes at', '4:30 PM', '5:00 PM', 'deadline', 'hours', 'promptly'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Make sure you go before four thirty! The ID collection desk closes promptly at five o’clock in the afternoon.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'The office is open until 5 PM, but they stop taking photos at 4:30 PM, so it’s best to go right now.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Important point: the queue closes at 4:30 PM sharp, so I recommend heading over straight after lunch.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'warning_formula',
          patterns: ['make sure', 'important', 'remember', 'recommend', 'be sure'],
          required: true,
        },
        {
          name: 'time_constraint',
          patterns: ['4:30', '5', 'five', 'closes', 'promptly', 'sharp', 'hours', 'open'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_208_3_no_time',
          pattern: /it is open today\.$/i,
          errorType: 'interaction',
          message: 'Specify the time boundary: "Make sure you arrive before 4:30 PM before they close at 5 PM."',
          correctionPattern: 'Make sure you go before 4:30 PM as they close at 5:00 PM.',
        },
      ],
      remediationPractice: {
        id: 'rem_208_3',
        type: 'fill_blank',
        prompt: 'Fill in: "Make ______ (sure) you arrive before 4:30 PM."',
        options: [
          { id: 'r1', text: 'sure', isCorrect: true },
          { id: 'r2', text: 'definite', isCorrect: false },
        ],
        correctAnswer: 'sure',
        explanation: 'Formula: "Make sure you [action]".',
      },
    },
    {
      id: 'turn_208_4',
      turnIndex: 4,
      partnerPrompt:
        'Thank you so much! You saved me hours of stress trying to read that long PDF. Is Building B far from here, or is it close by?',
      partnerAudioText:
        'Thank you so much! You saved me hours of stress trying to read that long PDF. Is Building B far from here, or is it close by?',
      partnerQuestionHindi:
        'आपका बहुत-बहुत धन्यवाद! आपने मुझे उस लंबे पीडीएफ को पढ़ने की घंटों की परेशानी से बचा लिया। क्या बिल्डिंग बी यहाँ से दूर है, या यह पास में ही है?',
      expectedFunction: 'Giving supportive local directions and offering to walk over or assist',
      contextGoal: 'Explain it is only a 2-minute walk across the courtyard and offer to show him the way',
      targetVocabulary: ['two minutes', 'across the courtyard', 'walk with you', 'Tariq', 'glad to help', 'Building B'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'It is only a two-minute walk right across the central courtyard! I can walk over there with you now if you’d like.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'It is very close — just past the glass library building. I am heading that way myself, so let’s walk together!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'It’s literally two minutes away across the square. I’m happy to show you the entrance on my way to my seminar.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'proximity_description',
          patterns: ['two-minute', 'two minutes', 'close', 'across the courtyard', 'courtyard', 'past the library', 'square'],
          required: true,
        },
        {
          name: 'supportive_offer',
          patterns: ['walk with you', 'walk together', 'show you', 'glad to help', 'heading that way', 'let’s go'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_208_4_short',
          pattern: /^(it is close|yes close)$/i,
          errorType: 'interaction',
          message: 'Provide friendly directions and offer helpful peer mediation.',
          correctionPattern: 'It is only two minutes away across the courtyard! Let’s walk over together.',
        },
      ],
      remediationPractice: {
        id: 'rem_208_4',
        type: 'multiple_choice',
        prompt: 'Which response provides the friendliest mediation and peer assistance?',
        options: [
          { id: 'r1', text: 'It’s only a two-minute walk across the courtyard! I can walk over with you now.', isCorrect: true },
          { id: 'r2', text: 'Building B is there bye.', isCorrect: false },
        ],
        correctAnswer: 'It’s only a two-minute walk across the courtyard! I can walk over with you now.',
        explanation: 'Clear distance + supportive offer.',
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
