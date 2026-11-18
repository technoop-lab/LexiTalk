import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_68: ConversationDefinition = {
  id: 'conv_a1_68',
  title: 'Housing, Renting an Apartment & Household Repairs',
  cefr: 'A1',
  unitId: 'unit_a1_5',
  lessonLinks: ['lesson_a1_5_68'],
  estimatedMinutes: 5,
  scenario:
    'You are viewing a furnished one-bedroom apartment in Sheffield with property landlord Arthur. You ask about monthly rent, security deposit terms, and included utilities (water, gas, electricity, high-speed broadband). You also report an issue you noticed during the viewing—a dripping bathroom faucet—and ask how maintenance repairs are handled.',
  communicativeGoals: [
    'Inquire about monthly rental prices, security deposit amounts, and lease duration ("How much is the monthly rent?", "Is a security deposit required?")',
    'Ask which utilities are included in the rental price ("Are water, heating, and Wi-Fi included in the rent?")',
    'Report household maintenance defects and damages ("There is a dripping faucet in the bathroom", "The heating is not working properly")',
    'Understand landlord obligations and response times for emergency repairs',
  ],
  canDoStatements: [
    'Can inquire about apartment rental terms and lease agreements (CEFR A1.2)',
    'Can ask about included utility bills and amenities',
    'Can describe a household repair problem and request maintenance',
  ],
  characters: [
    {
      id: 'char_arthur_landlord',
      name: 'Arthur',
      role: 'Property Landlord',
      avatar: '🏡',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'landlord',
        ipa: '/ˈlændlɔːrd/',
        partOfSpeech: 'noun',
        meaning: 'A person who rents out land, a building, or an apartment to a tenant',
        exampleSentence: 'The landlord is responsible for repairing the heating system.',
        translations: { hi: 'मकान मालिक' },
      },
      {
        word: 'utilities',
        ipa: '/juːˈtɪlɪtiz/',
        partOfSpeech: 'noun (plural)',
        meaning: 'Services such as electricity, gas, water, and broadband provided for a home',
        exampleSentence: 'Are utilities like water and high-speed internet included in the monthly rent?',
        translations: { hi: 'उपयोगिता सेवाएं (बिजली, पानी, गैस आदि)' },
      },
      {
        word: 'deposit',
        ipa: '/dɪˈpɒzɪt/',
        partOfSpeech: 'noun',
        meaning: 'A sum of money paid into a secure account to cover potential damage during a tenancy',
        exampleSentence: 'The security deposit is one month\'s rent.',
        translations: { hi: 'जमानत राशि / सुरक्षा जमा' },
      },
      {
        word: 'faucet',
        ipa: '/ˈfɔːsɪt/',
        partOfSpeech: 'noun',
        meaning: 'A device by which a flow of liquid or gas from a pipe can be controlled; a tap',
        exampleSentence: 'The bathroom faucet is dripping continuously.',
        translations: { hi: 'नल / पानी का नल' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'How much is the monthly rent?',
        functionCategory: 'Rent Inquiry',
        exampleSentence: 'How much is the monthly rent for this one-bedroom flat?',
      },
      {
        phrase: 'Are utilities included?',
        functionCategory: 'Utility Bills',
        exampleSentence: 'Are water, heating, and electricity bills included in the rent?',
      },
      {
        phrase: 'There is an issue with...',
        functionCategory: 'Reporting Defect',
        exampleSentence: 'There is a dripping faucet in the bathroom sink.',
      },
      {
        phrase: 'How are maintenance repairs handled?',
        functionCategory: 'Repair Process',
        exampleSentence: 'How are emergency maintenance repairs reported and handled?',
      },
    ],
    grammar: {
      title: 'Housing Queries & Existential "There is / There are": How much is [Rent]? / There is a [Problem]',
      conceptExplanation:
        'Ask financial questions with "How much is the [rent / deposit]?". Use "Are [utilities] included?". To report maintenance issues, use "There is a leaky/broken [item]" or "The [appliance] is not working".',
      patternFormula: 'How much is the rent? | Are utilities included? | There is a problem with the [appliance].',
      contrastExamples: [
        {
          incorrect: 'How many money is the apartment rent?',
          correct: 'How much is the monthly rent?',
          explanation: 'Use "How much is..." for prices and rent.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Arthur',
        text: 'Welcome! This is the sunny one-bedroom apartment on the third floor. Take a look around! What do you think?',
        translation: 'स्वागत है! यह तीसरी मंजिल पर धूप वाला एक बेडरूम का अपार्टमेंट है। चारों ओर नज़र डालें! आप क्या सोचते हैं?',
      },
      {
        speaker: 'You',
        text: 'It is very spacious and bright! How much is the monthly rent, and how much is the security deposit?',
        translation: 'यह बहुत विशाल और उज्ज्वल है! मासिक किराया कितना है, और सुरक्षा जमा राशि कितनी है?',
      },
      {
        speaker: 'Arthur',
        text: 'The rent is £750 per month, and the security deposit is £750, held in a government deposit scheme.',
        translation: 'किराया £750 प्रति माह है, और सुरक्षा जमा £750 है, जो सरकारी जमा योजना में रखी जाती है।',
      },
      {
        speaker: 'You',
        text: 'Are utilities included in that price, and how are maintenance repairs like a dripping faucet handled?',
        translation: 'क्या उस कीमत में उपयोगिताएँ शामिल हैं, और नल के टपकने जैसी रखरखाव मरम्मत कैसे की जाती है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_68_1',
      type: 'fill_blank',
      prompt: 'Complete the price inquiry: "How ___ is the monthly rent for this flat?"',
      options: [
        { id: 'opt_1', text: 'much', isCorrect: true },
        { id: 'opt_2', text: 'many', isCorrect: false },
        { id: 'opt_3', text: 'cost', isCorrect: false },
      ],
      correctAnswer: 'much',
      explanation: 'Use "How much" with uncountable nouns like rent.',
    },
    {
      id: 'cp_a1_68_2',
      type: 'multiple_choice',
      prompt: 'Which sentence asks if bills are included in the rent?',
      options: [
        { id: 'opt_1', text: 'Are utilities like water and electricity included in the rent?', isCorrect: true },
        { id: 'opt_2', text: 'Is water electricity bills inside rent house?', isCorrect: false },
        { id: 'opt_3', text: 'Do bills live with apartment rent?', isCorrect: false },
      ],
      correctAnswer: 'Are utilities like water and electricity included in the rent?',
      explanation: 'Natural and standard real estate inquiry.',
    },
    {
      id: 'cp_a1_68_3',
      type: 'multiple_choice',
      prompt: 'How do you report a plumbing problem simply?',
      options: [
        { id: 'opt_1', text: 'There is a dripping faucet in the bathroom.', isCorrect: true },
        { id: 'opt_2', text: 'Bathroom water is cry drop drop.', isCorrect: false },
        { id: 'opt_3', text: 'Faucet makes water rain inside sink.', isCorrect: false },
      ],
      correctAnswer: 'There is a dripping faucet in the bathroom.',
      explanation: 'Clear and standard expression.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_68_1',
      scenarioContext: 'Ask about the rental price and deposit.',
      prompt: 'Build: "How much is the monthly rent and deposit?"',
      targetStructure: 'How much is the monthly rent and deposit?',
      wordBank: ['How', 'much', 'is', 'the', 'monthly', 'rent', 'and', 'deposit', 'many', 'are', 'costs'],
      acceptableSolutions: [
        'How much is the monthly rent and deposit',
        'How much is the monthly rent and deposit?',
      ],
      explanation: 'Rent and deposit inquiry.',
    },
    {
      id: 'sc_a1_68_2',
      scenarioContext: 'Report a dripping bathroom tap.',
      prompt: 'Build: "There is a leaking faucet in the bathroom."',
      targetStructure: 'There is a leaking faucet in the bathroom',
      wordBank: ['There', 'is', 'a', 'leaking', 'faucet', 'in', 'the', 'bathroom', 'are', 'leaks', 'on'],
      acceptableSolutions: [
        'There is a leaking faucet in the bathroom',
        'There is a leaking faucet in the bathroom.',
      ],
      explanation: 'Maintenance issue statement.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_68_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello! Welcome to Maple Grove Apartments. I’m Arthur, the property manager and landlord. Take a look at this fully furnished one-bedroom flat. What questions do you have about the price and terms?',
      partnerAudioText:
        'Hello! Welcome to Maple Grove Apartments. I’m Arthur, the property manager and landlord. Take a look at this fully furnished one-bedroom flat. What questions do you have about the price and terms?',
      partnerQuestionHindi:
        'नमस्ते! मेपल ग्रोव अपार्टमेंट्स में आपका स्वागत है। मैं आर्थर हूँ, प्रॉपर्टी मैनेजर और मकान मालिक। इस पूरी तरह से सुसज्जित एक बेडरूम वाले फ्लैट पर नज़र डालें। कीमत और शर्तों के बारे में आपके क्या प्रश्न हैं?',
      expectedFunction: 'Inquire About Monthly Rent, Lease Term & Security Deposit',
      contextGoal:
        'Ask how much the monthly rent is, what lease term is required (e.g. 12 months), and how much the security deposit is.',
      targetVocabulary: ['how much is the monthly rent', 'security deposit', 'lease term', 'twelve months', 'fully furnished'],
      suggestedResponses: [
        {
          label: 'Spontaneous Interaction',
          text: 'Hello Arthur! The apartment looks lovely and bright. How much is the monthly rent, what is the minimum lease term, and how much is the security deposit?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Rent & Terms Inquiry',
          patterns: [
            'how much',
            'rent',
            'deposit',
            'lease',
            'monthly',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'how_many_rent_error',
          pattern: /\bhow many is rent\b/i,
          errorType: 'grammar',
          message: 'Say "How much is the rent?", using "much" for money.',
          correctionPattern: 'How much is the rent?',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_68_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "How ___ is the deposit?"',
        options: [
          { id: 'opt_1', text: 'much', isCorrect: true },
          { id: 'opt_2', text: 'many', isCorrect: false },
          { id: 'opt_3', text: 'long', isCorrect: false },
        ],
        correctAnswer: 'much',
        explanation: 'Use "much" for money amounts.',
      },
    },
    {
      id: 'turn_a1_68_2',
      turnIndex: 2,
      partnerPrompt:
        'The rent is £780 per month on a 12-month standard tenancy agreement. The refundable security deposit is £780, held in the Deposit Protection Service. What would you like to know about utilities and bills?',
      partnerAudioText:
        'The rent is £780 per month on a 12-month standard tenancy agreement. The refundable security deposit is £780, held in the Deposit Protection Service. What would you like to know about utilities and bills?',
      partnerQuestionHindi:
        '12 महीने के मानक किरायेदारी समझौते पर किराया £780 प्रति माह है। रिफंडेबल सुरक्षा जमा राशि £780 है, जो जमा संरक्षण सेवा में रखी जाती है। आप उपयोगिताओं और बिलों के बारे में क्या जानना चाहेंगे?',
      expectedFunction: 'Inquire About Included Utilities (Water, Gas, Electricity, Internet)',
      contextGoal:
        'Ask if water, gas, electricity, and high-speed broadband internet are included in the £780 rent.',
      targetVocabulary: ['are utilities included', 'water and heating', 'electricity', 'broadband internet', 'in the monthly rent'],
      suggestedResponses: [
        {
          label: 'Spontaneous Interaction',
          text: 'Are utilities like water, heating, electricity, and broadband internet included in the £780 monthly rent, or are they paid separately?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Utilities Details',
          patterns: [
            'utilities',
            'water',
            'heating',
            'electricity',
            'internet',
            'included',
            'bills',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_68_2',
        type: 'multiple_choice',
        prompt: 'Which sentence inquires about utility bills accurately?',
        options: [
          { id: 'opt_1', text: 'Are utilities included in the monthly rent?', isCorrect: true },
          { id: 'opt_2', text: 'Does bills sleep inside the rent payment?', isCorrect: false },
          { id: 'opt_3', text: 'Are utilities inside rent box?', isCorrect: false },
        ],
        correctAnswer: 'Are utilities included in the monthly rent?',
        explanation: 'Standard housing question.',
      },
    },
    {
      id: 'turn_a1_68_3',
      turnIndex: 3,
      partnerPrompt:
        'Water and fast fibre broadband are included in the rent. Gas and electricity are billed separately based on your actual meter usage. Did you notice anything during your walkthrough that needs attention?',
      partnerAudioText:
        'Water and fast fibre broadband are included in the rent. Gas and electricity are billed separately based on your actual meter usage. Did you notice anything during your walkthrough that needs attention?',
      partnerQuestionHindi:
        'पानी और तेज़ फाइबर ब्रॉडबैंड किराये में शामिल हैं। गैस और बिजली का बिल आपके वास्तविक मीटर उपयोग के आधार पर अलग से भेजा जाता है। क्या आपने अपने निरीक्षण के दौरान ऐसा कुछ देखा जिस पर ध्यान देने की आवश्यकता है?',
      expectedFunction: 'Report Dripping Bathroom Faucet & Ask About Repair Handling',
      contextGoal:
        'Report that the bathroom sink faucet is dripping continuously, and ask when a plumber can fix it before move-in.',
      targetVocabulary: ['dripping faucet', 'bathroom sink', 'leaking tap', 'maintenance repairs', 'fix before move-in'],
      suggestedResponses: [
        {
          label: 'Spontaneous Interaction',
          text: 'I noticed that the bathroom faucet is dripping continuously. Will that be fixed by a plumber before the move-in date?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Repair Issue & Fix Timeline',
          patterns: [
            'faucet',
            'tap',
            'dripping',
            'leaking',
            'bathroom',
            'plumber',
            'fixed',
            'move-in',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_68_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "The faucet is ___ water."',
        options: [
          { id: 'opt_1', text: 'dripping', isCorrect: true },
          { id: 'opt_2', text: 'drips to', isCorrect: false },
          { id: 'opt_3', text: 'droply', isCorrect: false },
        ],
        correctAnswer: 'dripping',
        explanation: 'Continuous participle "dripping".',
      },
    },
    {
      id: 'turn_a1_68_4',
      turnIndex: 4,
      partnerPrompt:
        'Thank you for spotting that! I will have our registered plumber replace the faucet washer this Wednesday before move-in. For any future repairs, we have a 24-hour maintenance portal. If you’d like to proceed with the tenancy application, I can email you the paperwork today!',
      partnerAudioText:
        'Thank you for spotting that! I will have our registered plumber replace the faucet washer this Wednesday before move-in. For any future repairs, we have a 24-hour maintenance portal. If you’d like to proceed with the tenancy application, I can email you the paperwork today!',
      partnerQuestionHindi:
        'उसे देखने के लिए धन्यवाद! मैं आने की तारीख से पहले इस बुधवार को हमारे पंजीकृत प्लंबर से नल का वाशर बदलवा दूंगा। भविष्य में किसी भी मरम्मत के लिए, हमारे पास 24 घंटे का रखरखाव पोर्टल है। यदि आप किरायेदारी आवेदन के साथ आगे बढ़ना चाहते हैं, तो मैं आपको आज ही कागजी कार्रवाई ईमेल कर सकता हूँ!',
      expectedFunction: 'Express Interest, Request Tenancy Application & Conclude Viewing',
      contextGoal:
        'Say you love the flat, ask Arthur to email the application paperwork, thank him, and say goodbye.',
      targetVocabulary: ['send the application paperwork', 'email me the documents', 'thank you Arthur', 'look forward to moving in', 'goodbye'],
      suggestedResponses: [
        {
          label: 'Spontaneous Interaction',
          text: 'That sounds excellent! I really like the flat. Please email me the tenancy application paperwork today. Thank you Arthur, goodbye!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Application Agreement & Closing',
          patterns: [
            'application',
            'paperwork',
            'email',
            'thank you',
            'arthur',
            'goodbye',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_68_4',
        type: 'multiple_choice',
        prompt: 'Which sentence concludes an apartment viewing positively?',
        options: [
          { id: 'opt_1', text: 'Please email me the application paperwork today. Thank you Arthur, goodbye!', isCorrect: true },
          { id: 'opt_2', text: 'I am take key now without pay.', isCorrect: false },
          { id: 'opt_3', text: 'House talk is over now bye.', isCorrect: false },
        ],
        correctAnswer: 'Please email me the application paperwork today. Thank you Arthur, goodbye!',
        explanation: 'Polite and professional closing.',
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
