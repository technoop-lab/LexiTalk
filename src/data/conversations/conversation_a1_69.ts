import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_69: ConversationDefinition = {
  id: 'conv_a1_69',
  title: 'Bank Services, Online Accounts & Financial Security',
  cefr: 'A1',
  unitId: 'unit_a1_5',
  lessonLinks: ['lesson_a1_5_69'],
  estimatedMinutes: 5,
  scenario:
    'You are visiting a high-street bank branch in Liverpool to open a new current (checking) account and set up mobile banking. Bank customer advisor Marcus assists you with proof of address and identification, explains debit card delivery timelines, helps configure online account security, and gives instructions on reporting suspicious fraud alerts or lost cards.',
  communicativeGoals: [
    'Open a current or savings bank account with identification documents ("I would like to open a checking account")',
    'Inquire about debit card delivery, contactless PIN limits, and account maintenance fees ("Is there a monthly fee for this account?")',
    'Understand online and mobile banking setup and security precautions ("How do I set up my mobile banking app?")',
    'Report suspicious transactions or lost debit cards and understand fraud prevention measures',
  ],
  canDoStatements: [
    'Can open a bank account and present required identity documents (CEFR A1.2)',
    'Can ask about bank cards, fees, and PIN security',
    'Can understand instructions for online mobile banking and fraud reporting',
  ],
  characters: [
    {
      id: 'char_marcus_banker',
      name: 'Marcus',
      role: 'Bank Customer Advisor',
      avatar: '🏦',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'account',
        ipa: '/əˈkaʊnt/',
        partOfSpeech: 'noun',
        meaning: 'An arrangement by which a bank holds funds on behalf of a client',
        exampleSentence: 'I would like to open a new current account today.',
        translations: { hi: 'बैंक खाता' },
      },
      {
        word: 'debit card',
        ipa: '/ˈdɛbɪt kɑːrd/',
        partOfSpeech: 'noun',
        meaning: 'A payment card that deducts money directly from a consumer\'s checking account',
        exampleSentence: 'Your new contactless debit card will arrive by post within five business days.',
        translations: { hi: 'डेबिट कार्ड' },
      },
      {
        word: 'balance',
        ipa: '/ˈbæləns/',
        partOfSpeech: 'noun',
        meaning: 'The amount of money remaining in a bank account at a given time',
        exampleSentence: 'You can check your account balance 24/7 on the mobile banking app.',
        translations: { hi: 'खाता शेष / बैलेंस' },
      },
      {
        word: 'fraud',
        ipa: '/frɔːd/',
        partOfSpeech: 'noun',
        meaning: 'Wrongful or criminal deception intended to result in financial or personal gain',
        exampleSentence: 'If you notice suspicious activity, call our fraud prevention helpline immediately.',
        translations: { hi: 'धोखाधड़ी / फ्रॉड' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I would like to open a checking account.',
        functionCategory: 'Account Opening',
        exampleSentence: 'I would like to open a standard current account with debit card access.',
      },
      {
        phrase: 'What documents do I need to provide?',
        functionCategory: 'Document Inquiries',
        exampleSentence: 'What documents do I need to provide for proof of address?',
      },
      {
        phrase: 'How long does the card take to arrive?',
        functionCategory: 'Delivery Timeline',
        exampleSentence: 'How long does the debit card take to arrive in the post?',
      },
      {
        phrase: 'How do I set up mobile banking?',
        functionCategory: 'App Configuration',
        exampleSentence: 'How do I download and activate the mobile banking app securely?',
      },
    ],
    grammar: {
      title: 'Banking Transactions & Financial Questions: I would like to open... / Are there any fees for...?',
      conceptExplanation:
        'Use "I would like to open a [current / savings] account". Ask about fees with "Are there any monthly maintenance fees?". Ask about card delivery with "How long does it take for [item] to arrive?".',
      patternFormula: 'I would like to open a [account type] | Are there any fees for [service]?',
      contrastExamples: [
        {
          incorrect: 'I want make bank account now.',
          correct: 'I would like to open a bank account, please.',
          explanation: 'Use the standard banking term "open an account" with polite phrasing.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Marcus',
        text: 'Good morning and welcome to Barclays Liverpool! How may I assist you with your banking today?',
        translation: 'शुभ प्रभात और बार्कलेज लिवरपूल में आपका स्वागत है! आज मैं आपकी बैंकिंग में क्या सहायता कर सकता हूँ?',
      },
      {
        speaker: 'You',
        text: 'Good morning Marcus! I would like to open a new current account. Here are my passport and a utility bill for proof of address.',
        translation: 'शुभ प्रभात मार्कस! मैं एक नया चालू खाता खोलना चाहता हूँ। पते के प्रमाण के लिए यहाँ मेरा पासपोर्ट और एक उपयोगिता बिल है।',
      },
      {
        speaker: 'Marcus',
        text: 'Excellent, these documents are perfect! There are zero monthly maintenance fees. Would you like a contactless debit card and mobile banking enabled?',
        translation: 'बहुत बढ़िया, ये दस्तावेज़ बिल्कुल सही हैं! कोई मासिक रखरखाव शुल्क नहीं है। क्या आप कॉन्टैक्टलेस डेबिट कार्ड और मोबाइल बैंकिंग सक्षम करना चाहेंगे?',
      },
      {
        speaker: 'You',
        text: 'Yes please! How long will the debit card take to arrive in the post, and how do I activate the mobile app?',
        translation: 'हाँ कृपया! डेबिट कार्ड को डाक से आने में कितना समय लगेगा, और मैं मोबाइल ऐप को कैसे सक्रिय करूँ?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_69_1',
      type: 'fill_blank',
      prompt: 'Complete the banking formula: "I would like to ___ a new savings account."',
      options: [
        { id: 'opt_1', text: 'open', isCorrect: true },
        { id: 'opt_2', text: 'start up', isCorrect: false },
        { id: 'opt_3', text: 'make on', isCorrect: false },
      ],
      correctAnswer: 'open',
      explanation: 'In banking, you "open an account".',
    },
    {
      id: 'cp_a1_69_2',
      type: 'multiple_choice',
      prompt: 'Which sentence inquires about monthly bank fees correctly?',
      options: [
        { id: 'opt_1', text: 'Are there any monthly maintenance fees for this account?', isCorrect: true },
        { id: 'opt_2', text: 'Does account take monthly price from money?', isCorrect: false },
        { id: 'opt_3', text: 'Is bank eating my money monthly fee?', isCorrect: false },
      ],
      correctAnswer: 'Are there any monthly maintenance fees for this account?',
      explanation: 'Professional and standard financial phrasing.',
    },
    {
      id: 'cp_a1_69_3',
      type: 'multiple_choice',
      prompt: 'How do you ask about debit card delivery time?',
      options: [
        { id: 'opt_1', text: 'How long does the debit card take to arrive?', isCorrect: true },
        { id: 'opt_2', text: 'When card comes into my post box day?', isCorrect: false },
        { id: 'opt_3', text: 'How many days card fly to house?', isCorrect: false },
      ],
      correctAnswer: 'How long does the debit card take to arrive?',
      explanation: 'Clear and natural.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_69_1',
      scenarioContext: 'Ask to open a checking account.',
      prompt: 'Build: "I would like to open a checking account."',
      targetStructure: 'I would like to open a checking account',
      wordBank: ['I', 'would', 'like', 'to', 'open', 'a', 'checking', 'account', 'opening', 'am', 'for'],
      acceptableSolutions: [
        'I would like to open a checking account',
        'I would like to open a checking account.',
      ],
      explanation: 'Standard account opening formula.',
    },
    {
      id: 'sc_a1_69_2',
      scenarioContext: 'Ask about debit card postal delivery time.',
      prompt: 'Build: "How long does the card take to arrive?"',
      targetStructure: 'How long does the card take to arrive?',
      wordBank: ['How', 'long', 'does', 'the', 'card', 'take', 'to', 'arrive', 'taking', 'is', 'at'],
      acceptableSolutions: [
        'How long does the card take to arrive',
        'How long does the card take to arrive?',
      ],
      explanation: 'Delivery question structure.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_69_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning and welcome to Liverpool Central Bank! I’m Marcus, the branch customer advisor. What banking services can I set up for you today?',
      partnerAudioText:
        'Good morning and welcome to Liverpool Central Bank! I’m Marcus, the branch customer advisor. What banking services can I set up for you today?',
      partnerQuestionHindi:
        'शुभ प्रभात और लिवरपूल सेंट्रल बैंक में आपका स्वागत है! मैं मार्कस हूँ, शाखा ग्राहक सलाहकार। आज मैं आपके लिए कौन सी बैंकिंग सेवाएँ शुरू कर सकता हूँ?',
      expectedFunction: 'Request Account Opening with ID & Proof of Address',
      contextGoal:
        'State that you would like to open a new current account, and present your passport and utility bill for ID/address verification.',
      targetVocabulary: ['good morning Marcus', 'open a new current account', 'passport for ID', 'utility bill', 'proof of address'],
      suggestedResponses: [
        {
          label: 'Spontaneous Interaction',
          text: 'Good morning Marcus! I would like to open a new current account today. Here is my passport for identification and my utility bill for proof of address.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Account Request & Documents',
          patterns: [
            'open',
            'account',
            'current account',
            'passport',
            'utility bill',
            'proof of address',
            'id',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'make_account_error',
          pattern: /\bi want make account\b/i,
          errorType: 'vocabulary',
          message: 'Say "I would like to open an account", which is the correct banking terminology.',
          correctionPattern: 'I would like to open an account',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_69_1',
        type: 'fill_blank',
        prompt: 'Choose the correct banking phrase: "I would like to ___ an account."',
        options: [
          { id: 'opt_1', text: 'open', isCorrect: true },
          { id: 'opt_2', text: 'do', isCorrect: false },
          { id: 'opt_3', text: 'build', isCorrect: false },
        ],
        correctAnswer: 'open',
        explanation: 'We "open" an account.',
      },
    },
    {
      id: 'turn_a1_69_2',
      turnIndex: 2,
      partnerPrompt:
        'Your documents are verified and clear! Our Everyday Current Account has no monthly maintenance fees and includes free ATM withdrawals across the UK. Would you like a contactless Visa debit card, and how long do you need it delivered in?',
      partnerAudioText:
        'Your documents are verified and clear! Our Everyday Current Account has no monthly maintenance fees and includes free ATM withdrawals across the UK. Would you like a contactless Visa debit card, and how long do you need it delivered in?',
      partnerQuestionHindi:
        'आपके दस्तावेज़ सत्यापित और स्पष्ट हैं! हमारे एवरीडे करंट अकाउंट में कोई मासिक रखरखाव शुल्क नहीं है और इसमें पूरे यूके में मुफ्त एटीएम निकासी शामिल है। क्या आप एक संपर्क रहित वीज़ा डेबिट कार्ड चाहेंगे, और आपको इसे कितने समय में वितरित करने की आवश्यकता है?',
      expectedFunction: 'Confirm Debit Card & Ask About Delivery & PIN Setup',
      contextGoal:
        'Confirm you want a contactless debit card, and ask how long it takes to arrive and how the PIN is set up.',
      targetVocabulary: ['contactless debit card', 'how long does it take', 'arrive by post', 'PIN setup', 'security PIN'],
      suggestedResponses: [
        {
          label: 'Spontaneous Interaction',
          text: 'Yes, I would definitely like a contactless debit card. How many days will it take to arrive by post, and how do I choose my PIN?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Debit Card & PIN Details',
          patterns: [
            'debit card',
            'contactless',
            'how long',
            'arrive',
            'post',
            'pin',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_69_2',
        type: 'multiple_choice',
        prompt: 'Which sentence asks about card arrival accurately?',
        options: [
          { id: 'opt_1', text: 'How long will the debit card take to arrive by post?', isCorrect: true },
          { id: 'opt_2', text: 'When is debit card coming inside letter box day?', isCorrect: false },
          { id: 'opt_3', text: 'Card delivery time is what number of days?', isCorrect: false },
        ],
        correctAnswer: 'How long will the debit card take to arrive by post?',
        explanation: 'Natural and standard grammar.',
      },
    },
    {
      id: 'turn_a1_69_3',
      turnIndex: 3,
      partnerPrompt:
        'Your card will arrive in 3 to 5 business days in a discreet envelope, and your PIN will be sent separately for security. You can change the PIN at any ATM. Would you like me to help you register for our secure mobile banking app right now?',
      partnerAudioText:
        'Your card will arrive in 3 to 5 business days in a discreet envelope, and your PIN will be sent separately for security. You can change the PIN at any ATM. Would you like me to help you register for our secure mobile banking app right now?',
      partnerQuestionHindi:
        'आपका कार्ड सुरक्षा के लिए एक अगोचर लिफाफे में 3 से 5 कार्य दिवसों में आ जाएगा, और आपका पिन अलग से भेजा जाएगा। आप किसी भी एटीएम पर पिन बदल सकते हैं। क्या आप चाहते हैं कि मैं अभी हमारे सुरक्षित मोबाइल बैंकिंग ऐप के लिए पंजीकरण करने में आपकी सहायता करूँ?',
      expectedFunction: 'Agree to App Setup & Inquire About Fraud Alerts & Lost Card Protocol',
      contextGoal:
        'Agree to set up mobile banking, and ask what to do if you ever lose your card or see a suspicious fraud transaction.',
      targetVocabulary: ['set up mobile banking', 'app activation', 'lost card', 'fraud alert', 'suspicious transaction'],
      suggestedResponses: [
        {
          label: 'Spontaneous Interaction',
          text: 'Yes, please help me activate the mobile banking app! Also, what should I do if I ever lose my debit card or suspect fraud?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'App Activation & Fraud Query',
          patterns: [
            'mobile banking',
            'app',
            'activate',
            'lose',
            'lost card',
            'fraud',
            'suspicious',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_69_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "What should I do if I ___ my card?"',
        options: [
          { id: 'opt_1', text: 'lose', isCorrect: true },
          { id: 'opt_2', text: 'loss', isCorrect: false },
          { id: 'opt_3', text: 'losted', isCorrect: false },
        ],
        correctAnswer: 'lose',
        explanation: 'Base verb "lose" after conditional "if I".',
      },
    },
    {
      id: 'turn_a1_69_4',
      turnIndex: 4,
      partnerPrompt:
        'You can freeze or block your card instantly in the mobile app with one tap, or call our 24/7 fraud helpline on the back of your card. Here is your temporary account number and sort code. You are all set up and ready to bank! Welcome to the branch!',
      partnerAudioText:
        'You can freeze or block your card instantly in the mobile app with one tap, or call our 24/7 fraud helpline on the back of your card. Here is your temporary account number and sort code. You are all set up and ready to bank! Welcome to the branch!',
      partnerQuestionHindi:
        'आप एक टैप से मोबाइल ऐप में अपने कार्ड को तुरंत फ़्रीज़ या ब्लॉक कर सकते हैं, या अपने कार्ड के पीछे हमारे 24/7 फ्रॉड हेल्पलाइन पर कॉल कर सकते हैं। यह आपका अस्थायी खाता नंबर और सॉर्ट कोड है। आप पूरी तरह तैयार हैं! शाखा में आपका स्वागत है!',
      expectedFunction: 'Take Account Details, Thank Advisor & Conclude Banking Visit',
      contextGoal:
        'Thank Marcus for setting up the account and explaining fraud security so clearly, take your paperwork, and say goodbye.',
      targetVocabulary: ['thank you Marcus', 'account number and sort code', 'fraud security', 'appreciate your help', 'goodbye'],
      suggestedResponses: [
        {
          label: 'Spontaneous Interaction',
          text: 'Thank you so much Marcus for opening my account and explaining the security features so clearly. I appreciate your help, have a great day, goodbye!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Banking Wrap-Up',
          patterns: [
            'thank you',
            'marcus',
            'account',
            'security',
            'appreciate',
            'have a great day',
            'goodbye',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_69_4',
        type: 'multiple_choice',
        prompt: 'Which sentence concludes a bank branch appointment politely?',
        options: [
          { id: 'opt_1', text: 'Thank you Marcus for your help! Have a great day, goodbye.', isCorrect: true },
          { id: 'opt_2', text: 'Account is finished I walk out.', isCorrect: false },
          { id: 'opt_3', text: 'Bank talk done bye.', isCorrect: false },
        ],
        correctAnswer: 'Thank you Marcus for your help! Have a great day, goodbye.',
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
