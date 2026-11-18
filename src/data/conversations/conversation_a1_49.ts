import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_49: ConversationDefinition = {
  id: 'conv_a1_49',
  title: 'Banking, Money, Payments & Financial Transactions',
  cefr: 'A1',
  unitId: 'unit_a1_4',
  lessonLinks: ['lesson_a1_4_49'],
  estimatedMinutes: 5,
  scenario:
    'You visit a local bank branch in London to open a checking account, ask about contactless debit cards, check currency exchange rates, and learn how to use the outdoor ATM for cash withdrawals and deposits.',
  communicativeGoals: [
    'Inquire about opening a bank account and checking balances ("I would like to open an account")',
    'Discuss payment methods, debit cards, and contactless transactions ("Does this card support contactless payments?")',
    'Ask about ATM fees and daily withdrawal limits ("What is the daily cash limit?")',
    'Recycle numbers, currency terms (pounds, pence, euros), and polite inquiries from lessons 1–45',
  ],
  canDoStatements: [
    'Can ask about account balances and transaction fees at a bank branch (CEFR A1.2)',
    'Can discuss ATM cash withdrawals and deposits',
    'Can ask about payment methods and card features',
  ],
  characters: [
    {
      id: 'char_maya_banker',
      name: 'Maya',
      role: 'Bank Customer Advisor',
      avatar: '🏦',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'account',
        ipa: '/əˈkaʊnt/',
        partOfSpeech: 'noun',
        meaning: 'An arrangement by which a bank holds funds on behalf of a client',
        exampleSentence: 'I would like to open a personal checking account.',
        translations: { hi: 'खाता / बैंक अकाउंट' },
      },
      {
        word: 'withdraw',
        ipa: '/wɪðˈdrɔː/',
        partOfSpeech: 'verb',
        meaning: 'Remove money from a bank account or ATM machine',
        exampleSentence: 'You can withdraw up to three hundred pounds per day.',
        translations: { hi: 'पैसे निकालना' },
      },
      {
        word: 'contactless',
        ipa: '/ˈkɒn.tæk.ləs/',
        partOfSpeech: 'adjective',
        meaning: 'Relating to payments using smart cards or phones without entering a PIN',
        exampleSentence: 'All our new debit cards feature contactless payment technology.',
        translations: { hi: 'कॉन्टैक्टलेस (बिना छुए भुगतान)' },
      },
      {
        word: 'balance',
        ipa: '/ˈbæləns/',
        partOfSpeech: 'noun',
        meaning: 'The amount of money in a financial repository such as a bank account',
        exampleSentence: 'You can check your account balance anytime on the mobile app.',
        translations: { hi: 'बैलेंस / शेष राशि' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I’d like to open a checking account.',
        functionCategory: 'Account Opening',
        exampleSentence: 'I’d like to open a checking account with online banking.',
      },
      {
        phrase: 'How much is the monthly fee?',
        functionCategory: 'Fee Inquiry',
        exampleSentence: 'How much is the monthly maintenance fee for this account?',
      },
      {
        phrase: 'What is the daily ATM withdrawal limit?',
        functionCategory: 'ATM Information',
        exampleSentence: 'What is the daily ATM withdrawal limit with this card?',
      },
      {
        phrase: 'Can I pay with a contactless card?',
        functionCategory: 'Payment Methods',
        exampleSentence: 'Can I pay with a contactless debit card in shops?',
      },
    ],
    grammar: {
      title: 'Banking Inquiries: How much + is/are / Can I + [Base Verb]',
      conceptExplanation:
        'Use "How much is [fee / cost]?" for singular costs and "How much are [fees]?" for plural. Use "Can I + [base verb]?" or "I would like to + [base verb]" for banking requests. Use numbers and currency symbols (e.g. £50, $100).',
      patternFormula: 'I would like to + [open an account / withdraw money] | How much is + [the fee / the minimum balance]?',
      contrastExamples: [
        {
          incorrect: 'How many is the monthly fee?',
          correct: 'How much is the monthly fee?',
          explanation: 'Use "How much" for money, costs, and fees, not "How many".',
        },
        {
          incorrect: 'I want withdraw cash from ATM.',
          correct: 'I would like to withdraw cash from the ATM.',
          explanation: 'Use "would like to withdraw" for polite banking conversations.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Maya',
        text: 'Good morning! Welcome to Metro Bank. How can I assist you with your banking needs today?',
        translation: 'शुभ प्रभात! मेट्रो बैंक में आपका स्वागत है। आज मैं आपकी बैंकिंग आवश्यकताओं में क्या सहायता कर सकती हूँ?',
      },
      {
        speaker: 'You',
        text: 'Good morning Maya. I would like to open a standard checking account with online access.',
        translation: 'शुभ प्रभात माया। मैं ऑनलाइन सुविधा के साथ एक मानक चेकिंग खाता खोलना चाहूँगा।',
      },
      {
        speaker: 'Maya',
        text: 'Wonderful! We offer our Basic Current Account with zero monthly fees and a free contactless debit card.',
        translation: 'बहुत बढ़िया! हम शून्य मासिक शुल्क और मुफ्त कॉन्टैक्टलेस डेबिट कार्ड के साथ हमारा बेसिक करंट अकाउंट प्रदान करते हैं।',
      },
      {
        speaker: 'You',
        text: 'That sounds perfect. What is the daily cash withdrawal limit at the ATM?',
        translation: 'यह एकदम सही लगता है। एटीएम में दैनिक नकद निकासी की सीमा क्या है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_49_1',
      type: 'fill_blank',
      prompt: 'Complete the banking inquiry: "How ___ is the annual fee for this credit card?"',
      options: [
        { id: 'opt_1', text: 'much', isCorrect: true },
        { id: 'opt_2', text: 'many', isCorrect: false },
        { id: 'opt_3', text: 'cost', isCorrect: false },
      ],
      correctAnswer: 'much',
      explanation: '"How much" is used to ask about money, fees, and prices.',
    },
    {
      id: 'cp_a1_49_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly asks to withdraw cash?',
      options: [
        { id: 'opt_1', text: 'I would like to withdraw fifty pounds, please.', isCorrect: true },
        { id: 'opt_2', text: 'I am want taking fifty pounds now.', isCorrect: false },
        { id: 'opt_3', text: 'I withdraw fifty pound yesterday.', isCorrect: false },
      ],
      correctAnswer: 'I would like to withdraw fifty pounds, please.',
      explanation: '"I would like to withdraw" + amount is standard and polite.',
    },
    {
      id: 'cp_a1_49_3',
      type: 'multiple_choice',
      prompt: 'Choose the correct question regarding contactless payment:',
      options: [
        { id: 'opt_1', text: 'Does this card support contactless payments?', isCorrect: true },
        { id: 'opt_2', text: 'Is this card supports contactless payments?', isCorrect: false },
        { id: 'opt_3', text: 'Does this card supporting contactless payments?', isCorrect: false },
      ],
      correctAnswer: 'Does this card support contactless payments?',
      explanation: 'Use auxiliary "Does" + subject + base verb "support".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_49_1',
      scenarioContext: 'Ask to open a new checking account with online banking.',
      prompt: 'Build: "I would like to open a checking account today."',
      targetStructure: 'Subject + would like to + base verb + noun phrase + time adverb',
      wordBank: ['I', 'would', 'like', 'to', 'open', 'a', 'checking', 'account', 'today', 'opening', 'is'],
      acceptableSolutions: [
        'I would like to open a checking account today',
        'I would like to open a checking account today.',
      ],
      explanation: 'Standard account opening formula.',
    },
    {
      id: 'sc_a1_49_2',
      scenarioContext: 'Inquire about the daily ATM limit.',
      prompt: 'Build: "What is the daily cash withdrawal limit?"',
      targetStructure: 'What is + the daily cash withdrawal limit?',
      wordBank: ['What', 'is', 'the', 'daily', 'cash', 'withdrawal', 'limit', 'are', 'withdraw', 'how'],
      acceptableSolutions: [
        'What is the daily cash withdrawal limit',
        'What is the daily cash withdrawal limit?',
      ],
      explanation: 'Question asking for specific banking details.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_49_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning and welcome to Barclays! I am Maya, personal banking advisor. How can I help you today?',
      partnerAudioText:
        'Good morning and welcome to Barclays! I am Maya, personal banking advisor. How can I help you today?',
      partnerQuestionHindi:
        'शुभ प्रभात और बार्कलेज में आपका स्वागत है! मैं माया हूँ, पर्सनल बैंकिंग सलाहकार। आज मैं आपकी क्या मदद कर सकती हूँ?',
      expectedFunction: 'State Banking Goal (Open an account / Inquire about fees)',
      contextGoal:
        'State that you would like to open a checking account and ask about monthly account fees.',
      targetVocabulary: ['would like to open', 'checking account', 'monthly fee', 'good morning', 'fees'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Good morning Maya! I would like to open a personal checking account today. Could you please tell me how much the monthly account fee is?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Good morning! I want to open a bank account. Are there any monthly fees?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I’d like to open a checking account. Is there a monthly fee?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Account Opening & Fee Inquiry',
          patterns: [
            'open an account',
            'open a checking account',
            'bank account',
            'monthly fee',
            'how much is',
            'any fees',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'how_many_fee_error',
          pattern: /\bhow many is the fee\b/i,
          errorType: 'grammar',
          message: 'Say "How much is the fee?", not "How many".',
          correctionPattern: 'How much is the fee?',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_49_1',
        type: 'fill_blank',
        prompt: 'Choose the correct question word: "How ___ is the card maintenance fee?"',
        options: [
          { id: 'opt_1', text: 'much', isCorrect: true },
          { id: 'opt_2', text: 'many', isCorrect: false },
          { id: 'opt_3', text: 'price', isCorrect: false },
        ],
        correctAnswer: 'much',
        explanation: '"How much" is used for monetary fees.',
      },
    },
    {
      id: 'turn_a1_49_2',
      turnIndex: 2,
      partnerPrompt:
        'Our Standard Current Account has zero monthly fees! It includes free online banking and a contactless Visa debit card. Do you have your passport and proof of address with you today to complete the application?',
      partnerAudioText:
        'Our Standard Current Account has zero monthly fees! It includes free online banking and a contactless Visa debit card. Do you have your passport and proof of address with you today to complete the application?',
      partnerQuestionHindi:
        'हमारे मानक चालू खाते में शून्य मासिक शुल्क है! इसमें मुफ्त ऑनलाइन बैंकिंग और एक कॉन्टैक्टलेस वीज़ा डेबिट कार्ड शामिल है। क्या आपके पास आवेदन पूरा करने के लिए आज आपका पासपोर्ट और पते का प्रमाण है?',
      expectedFunction: 'Confirm Documents & Inquire About Debit Card Features',
      contextGoal:
        'Confirm you have your passport and proof of address, and ask when the debit card will arrive in the mail.',
      targetVocabulary: ['here is my passport', 'proof of address', 'debit card', 'when will it arrive', 'mail'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes, here is my passport and utility bill for proof of address! When will my new contactless debit card arrive in the post?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I have my passport and address proof here. When will the debit card arrive?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Here are my documents! When do I receive the card?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'ID Confirmation & Card Arrival',
          patterns: [
            'passport',
            'proof of address',
            'documents',
            'when will',
            'arrive',
            'receive the card',
            'in the post',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_49_2',
        type: 'multiple_choice',
        prompt: 'How do you politely present identity documents to the banker?',
        options: [
          { id: 'opt_1', text: 'Here is my passport and proof of address.', isCorrect: true },
          { id: 'opt_2', text: 'I am holding papers to look.', isCorrect: false },
          { id: 'opt_3', text: 'Take my passport now.', isCorrect: false },
        ],
        correctAnswer: 'Here is my passport and proof of address.',
        explanation: 'Courteous and clear.',
      },
    },
    {
      id: 'turn_a1_49_3',
      turnIndex: 3,
      partnerPrompt:
        'Your card will arrive in 3 to 5 business days. In the meantime, you can activate your digital card on Apple Pay or Google Pay immediately. What is your preferred daily ATM withdrawal limit?',
      partnerAudioText:
        'Your card will arrive in 3 to 5 business days. In the meantime, you can activate your digital card on Apple Pay or Google Pay immediately. What is your preferred daily ATM withdrawal limit?',
      partnerQuestionHindi:
        'आपका कार्ड 3 से 5 कार्य दिवसों में आ जाएगा। इस बीच, आप ऐप्पल पे या गूगल पे पर तुरंत अपना डिजिटल कार्ड सक्रिय कर सकते हैं। आपकी पसंदीदा दैनिक एटीएम निकासी सीमा क्या है?',
      expectedFunction: 'State Cash Limit Preference & Inquire About ATM Fees',
      contextGoal:
        'Request a £300 or £500 daily limit, and ask if using other bank ATMs costs any fee.',
      targetVocabulary: ['three hundred pounds', 'daily limit', 'atm fee', 'free to use', 'withdraw cash'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'A three hundred pound daily limit would be perfect, please. Is it completely free to withdraw cash from all local ATMs across the UK?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Three hundred pounds per day, please. Are ATM cash withdrawals free?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: '£300 limit please! Are ATM withdrawals free everywhere?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Limit Selection & Fee Question',
          patterns: [
            'three hundred',
            '300',
            '500',
            'pounds',
            'daily limit',
            'atm fee',
            'free',
            'withdraw cash',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_49_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I would like a daily limit of 300 ___."',
        options: [
          { id: 'opt_1', text: 'pounds', isCorrect: true },
          { id: 'opt_2', text: 'pound', isCorrect: false },
          { id: 'opt_3', text: 'pennies', isCorrect: false },
        ],
        correctAnswer: 'pounds',
        explanation: 'Plural currency form "pounds" with 300.',
      },
    },
    {
      id: 'turn_a1_49_4',
      turnIndex: 4,
      partnerPrompt:
        'Yes, cash withdrawals are 100% free at all major UK bank ATMs! Your account is officially set up and your mobile banking login details have just been emailed to you. Welcome to Barclays!',
      partnerAudioText:
        'Yes, cash withdrawals are 100% free at all major UK bank ATMs! Your account is officially set up and your mobile banking login details have just been emailed to you. Welcome to Barclays!',
      partnerQuestionHindi:
        'हाँ, सभी प्रमुख यूके बैंक एटीएम पर नकद निकासी 100% मुफ़्त है! आपका खाता आधिकारिक तौर पर खुल गया है और आपके मोबाइल बैंकिंग लॉगिन विवरण अभी आपको ईमेल कर दिए गए हैं। बार्कलेज में आपका स्वागत है!',
      expectedFunction: 'Express Appreciation & Conclude Bank Visit',
      contextGoal:
        'Thank Maya for her great help, confirm you received the email, and wish her a pleasant day.',
      targetVocabulary: ['thank you Maya', 'received the email', 'very helpful', 'have a wonderful day', 'goodbye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you so much for your fast and fantastic help, Maya! I see the email on my phone now. Have a wonderful day!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thank you very much Maya! I got the email. Have a great day!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Thanks a lot Maya! Everything is set. Have a good day!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Appreciation',
          patterns: [
            'thank you',
            'thanks',
            'email',
            'helpful',
            'have a wonderful day',
            'have a great day',
            'goodbye',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_49_4',
        type: 'multiple_choice',
        prompt: 'Which response concludes the banking visit warmly?',
        options: [
          { id: 'opt_1', text: 'Thank you for your help, Maya! Have a wonderful day.', isCorrect: true },
          { id: 'opt_2', text: 'Money is mine now bye.', isCorrect: false },
          { id: 'opt_3', text: 'I am finished with you.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for your help, Maya! Have a wonderful day.',
        explanation: 'Professional and courteous.',
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
