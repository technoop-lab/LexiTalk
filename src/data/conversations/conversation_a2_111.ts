import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_111: ConversationDefinition = {
  id: 'conv_a2_111',
  title: 'Customer Service: Polite Complaints, Faulty Items & Returns (receipt, refund, exchange)',
  cefr: 'A2',
  unitId: 'unit_a2_8',
  lessonLinks: ['lesson_a2_8_111'],
  estimatedMinutes: 5,
  scenario:
    'You bought a portable Bluetooth speaker at an electronics store on Oxford Street two days ago. However, when you opened the packaging at home, you noticed a dent on the speaker grille, and the battery will not charge via the USB-C port. You are at the Customer Service returns desk speaking with associate Gemma Taylor to explain the defect, show your proof of purchase, and request an exchange or full refund.',
  communicativeGoals: [
    'Explain politely that an item is damaged, defective, or faulty upon unboxing',
    'Present proof of purchase (receipt / order invoice) and explain purchase timeline',
    'Use polite complaint and inquiry formulas ("I am afraid that...", "I bought this on Tuesday and...", "Could I please exchange it or get a refund?")',
    'Understand store return and warranty policies and conclude the transaction courteously',
  ],
  canDoStatements: [
    'Can explain a product defect or fault politely in a retail store (CEFR A2)',
    'Can request an exchange, replacement, or refund using standard polite phrasing',
    'Can present a receipt and clarify details with a customer service assistant',
  ],
  characters: [
    {
      id: 'char_gemma_taylor',
      name: 'Gemma Taylor',
      role: 'Customer Service Associate',
      avatar: '🛍️',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'faulty',
        ipa: '/ˈfɔːlti/',
        partOfSpeech: 'adjective',
        meaning: 'Not working properly or having a manufacturing defect',
        exampleSentence: 'I am afraid this speaker is faulty and does not charge.',
        translations: { hi: 'खराब / दोषपूर्ण' },
      },
      {
        word: 'receipt',
        ipa: '/rɪˈsiːt/',
        partOfSpeech: 'noun',
        meaning: 'A printed statement acknowledging that something has been paid for',
        exampleSentence: 'Here is the original purchase receipt and warranty slip.',
        translations: { hi: 'रसीद' },
      },
      {
        word: 'refund',
        ipa: '/ˈriːfʌnd/',
        partOfSpeech: 'noun',
        meaning: 'A repayment of a sum of money to a dissatisfied customer',
        exampleSentence: 'Would you prefer an exchange for a new unit or a full refund?',
        translations: { hi: 'पैसे की वापसी / रिफंड' },
      },
      {
        word: 'exchange',
        ipa: '/ɪksˈtʃeɪndʒ/',
        partOfSpeech: 'verb',
        meaning: 'To give something and receive something else of the same kind in return',
        exampleSentence: 'I would like to exchange this damaged unit for a working one.',
        translations: { hi: 'बदलना / एक्सचेंज' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am afraid there is a problem with this speaker.',
        functionCategory: 'Polite Complaint Opening',
        exampleSentence: 'I am afraid this device is not working.',
      },
      {
        phrase: 'I bought it here two days ago.',
        functionCategory: 'Stating Purchase Timeline',
        exampleSentence: 'I purchased this on Tuesday afternoon.',
      },
      {
        phrase: 'Could I please exchange it for a new one?',
        functionCategory: 'Requesting Replacement',
        exampleSentence: 'Could I please get a replacement unit?',
      },
      {
        phrase: 'Here is my original receipt and box.',
        functionCategory: 'Presenting Proof of Purchase',
        exampleSentence: 'Here is the card payment receipt.',
      },
    ],
    grammar: {
      title: 'Polite Complaints & Indirect Requests in Retail',
      conceptExplanation:
        '1. Softened Opening: Use "I\'m afraid that..." or "I\'m sorry to trouble you, but..." to start a complaint courteously.\n2. Stating the Defect: "It is faulty / It won\'t charge / The grille is dented."\n3. Indirect Polite Questions: "Could I please exchange it...?" / "Would it be possible to get a refund?"\n4. Pronunciation reminder: The "p" in "receipt" is silent (/rɪˈsiːt/).',
      patternFormula: 'I am afraid that + [Subject + Verb] | Could I please + [exchange / get a refund for] + [Item]?',
      contrastExamples: [
        {
          incorrect: 'You gave me bad speaker! Give money back now!',
          correct: 'I am afraid this speaker is faulty. Could I please get a refund or exchange?',
          explanation: 'Polite complaint formulas ensure effective and respectful customer service interaction.',
        },
        {
          incorrect: 'I have receipt for make change.',
          correct: 'I have the receipt to exchange this item.',
          explanation: 'Use "to exchange" with infinitive of purpose.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Gemma Taylor',
        text: 'Hello! Welcome to Customer Support. How can I help you today?',
        translation: 'नमस्ते! कस्टमर सपोर्ट में आपका स्वागत है। आज मैं आपकी क्या मदद कर सकती हूँ?',
      },
      {
        speaker: 'You',
        text: 'Hello. I am afraid there is an issue with this Bluetooth speaker I purchased on Tuesday. When I opened the box, the charging port wasn’t working.',
        translation: 'नमस्ते। मुझे डर है कि मंगलवार को खरीदे गए इस ब्लूटूथ स्पीकर में एक समस्या है। जब मैंने डिब्बा खोला, तो चार्जिंग पोर्ट काम नहीं कर रहा था।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_111_1',
      type: 'fill_blank',
      prompt: 'Complete the polite complaint: "I am ___ there is a fault with this appliance."',
      options: [
        { id: 'opt_1', text: 'afraid', isCorrect: true },
        { id: 'opt_2', text: 'scared', isCorrect: false },
        { id: 'opt_3', text: 'fear', isCorrect: false },
      ],
      correctAnswer: 'afraid',
      explanation: '"I am afraid (that)..." is the standard British formula to introduce a polite complaint.',
    },
    {
      id: 'cp_a2_111_2',
      type: 'multiple_choice',
      prompt: 'Which sentence is the most polite way to ask for a product replacement?',
      options: [
        { id: 'opt_1', text: 'Could I please exchange this damaged speaker for a replacement unit?', isCorrect: true },
        { id: 'opt_2', text: 'Give me another speaker right now.', isCorrect: false },
        { id: 'opt_3', text: 'I want other one quick.', isCorrect: false },
      ],
      correctAnswer: 'Could I please exchange this damaged speaker for a replacement unit?',
      explanation: '"Could I please exchange..." is polite, clear, and professional.',
    },
    {
      id: 'cp_a2_111_3',
      type: 'multiple_choice',
      prompt: 'How is the word "receipt" pronounced correctly?',
      options: [
        { id: 'opt_1', text: '/rɪˈsiːt/ (the letter "p" is completely silent)', isCorrect: true },
        { id: 'opt_2', text: '/rɪˈsiːpt/ (the "p" is pronounced loudly)', isCorrect: false },
        { id: 'opt_3', text: '/rɪˈkɛpt/', isCorrect: false },
      ],
      correctAnswer: '/rɪˈsiːt/ (the letter "p" is completely silent)',
      explanation: '"Receipt" has a silent "p".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_111_1',
      scenarioContext: 'Politely introduce a faulty product problem.',
      prompt: 'Build: "I am afraid this speaker is faulty and will not charge."',
      targetStructure: 'I am afraid + subject + is faulty + and + will not charge',
      wordBank: ['I', 'am', 'afraid', 'this', 'speaker', 'is', 'faulty', 'and', 'will', 'not', 'charge', 'was'],
      acceptableSolutions: [
        'I am afraid this speaker is faulty and will not charge',
        'I am afraid this speaker is faulty and will not charge.',
      ],
      explanation: 'Polite complaint formula with technical defect explanation.',
    },
    {
      id: 'sc_a2_111_2',
      scenarioContext: 'Present proof of purchase and ask for an exchange.',
      prompt: 'Build: "Here is my receipt, could I please exchange it for a new one?"',
      targetStructure: 'Here is my receipt + could I please exchange it for + noun phrase',
      wordBank: ['Here', 'is', 'my', 'receipt', 'could', 'I', 'please', 'exchange', 'it', 'for', 'a', 'new', 'one', 'give'],
      acceptableSolutions: [
        'Here is my receipt could I please exchange it for a new one',
        'Here is my receipt, could I please exchange it for a new one?',
        'Here is my receipt, could I please exchange it for a new one.',
      ],
      explanation: 'Presents the receipt and requests a replacement smoothly.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_111_1',
      turnIndex: 1,
      partnerPrompt:
        'Good afternoon! Welcome to Oxford Electronics Customer Service. How may I assist you with your purchase today?',
      partnerAudioText:
        'Good afternoon! Welcome to Oxford Electronics Customer Service. How may I assist you with your purchase today?',
      partnerQuestionHindi:
        'शुभ दोपहर! ऑक्सफोर्ड इलेक्ट्रॉनिक्स कस्टमर सर्विस में आपका स्वागत है। आज मैं आपकी खरीदारी में क्या मदद कर सकती हूँ?',
      expectedFunction: 'Polite Complaint Opening & State Defect (speaker faulty / won’t charge / dented)',
      contextGoal:
        'Explain that you bought a portable Bluetooth speaker on Tuesday; you opened the box and discovered the speaker grille has a dent and the battery fails to charge over USB-C.',
      targetVocabulary: ['bought this portable Bluetooth speaker on Tuesday', 'I am afraid it is faulty', 'dent on the speaker grille', 'battery will not charge over USB-C'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Good afternoon. I am afraid there is a problem with this portable Bluetooth speaker that I bought here on Tuesday. When I unboxed it, I noticed a dent on the front metal grille, and the battery will not charge at all.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Purchase Context (bought / Tuesday / speaker / bluetooth)',
          patterns: ['bought', 'tuesday', 'speaker', 'bluetooth', 'oxford', 'purchase'],
          required: true,
        },
        {
          name: 'Defect Description (faulty / dent / not charge / battery)',
          patterns: ['afraid', 'problem', 'faulty', 'dent', 'grille', 'charge', 'battery', 'usb-c', 'broken'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'receipt_silent_p_error',
          pattern: /\bre-seept\b/i,
          errorType: 'vocabulary',
          message: 'Remember the "p" in receipt is silent: /rɪˈsiːt/.',
          correctionPattern: 'receipt',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_111_1',
        type: 'multiple_choice',
        prompt: 'Which statement is the most professional complaint opener?',
        options: [
          { id: 'opt_1', text: 'I am afraid there is a defect with this speaker I purchased on Tuesday.', isCorrect: true },
          { id: 'opt_2', text: 'This item is garbage give money.', isCorrect: false },
          { id: 'opt_3', text: 'Speaker is bad.', isCorrect: false },
        ],
        correctAnswer: 'I am afraid there is a defect with this speaker I purchased on Tuesday.',
        explanation: 'Polite, clear, and informative.',
      },
    },
    {
      id: 'turn_a2_111_2',
      turnIndex: 2,
      partnerPrompt:
        'I am very sorry about that; that sounds like a manufacturing fault. Do you have your original paper receipt or digital proof of purchase with you?',
      partnerAudioText:
        'I am very sorry about that; that sounds like a manufacturing fault. Do you have your original paper receipt or digital proof of purchase with you?',
      partnerQuestionHindi:
        'मुझे इसके लिए बहुत खेद है; यह एक विनिर्माण दोष लगता है। क्या आपके पास आपकी मूल कागजी रसीद या डिजिटल खरीद प्रमाण है?',
      expectedFunction: 'Present Proof of Purchase & Request Replacement',
      contextGoal:
        'Hand over the printed store receipt and original packaging; request an exchange for an identical, unopened speaker.',
      targetVocabulary: ['here is the original paper receipt', 'original box and charging cable included', 'could I please exchange it for a new unit', 'same black model'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Yes, here is my original printed store receipt and all the accessories in the original box. Could I please exchange this faulty speaker for a brand-new replacement in the same color?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Proof of Purchase (receipt / box / accessories)',
          patterns: ['receipt', 'box', 'accessories', 'here is', 'original', 'paper'],
          required: true,
        },
        {
          name: 'Exchange Request (exchange / new / replacement)',
          patterns: ['exchange', 'replacement', 'new', 'unit', 'model', 'could i please'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_111_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Could I please ___ this for a new one?"',
        options: [
          { id: 'opt_1', text: 'exchange', isCorrect: true },
          { id: 'opt_2', text: 'exchanging', isCorrect: false },
          { id: 'opt_3', text: 'exchanged', isCorrect: false },
        ],
        correctAnswer: 'exchange',
        explanation: 'Use the base verb after modal phrase "Could I please...".',
      },
    },
    {
      id: 'turn_a2_111_3',
      turnIndex: 3,
      partnerPrompt:
        'Let me check our stockroom... Yes! We have three brand-new sealed units of this exact model in stock. Would you like me to open the box here and test the charging port together before processing the exchange?',
      partnerAudioText:
        'Let me check our stockroom... Yes! We have three brand-new sealed units of this exact model in stock. Would you like me to open the box here and test the charging port together before processing the exchange?',
      partnerQuestionHindi:
        'मुझे हमारे स्टॉक रूम की जांच करने दें... हाँ! हमारे पास स्टॉक में इस सटीक मॉडल की तीन नई सीलबंद इकाइयाँ हैं। क्या आप चाहेंगे कि एक्सचेंज पूरा करने से पहले हम यहीं बॉक्स खोलें और चार्जिंग पोर्ट का एक साथ परीक्षण करें?',
      expectedFunction: 'Agree to In-Store Testing & Inquire About Warranty Policy',
      contextGoal:
        'Agree gladly to test the new speaker at the counter; ask if the 12-month warranty will restart from today with the new receipt.',
      targetVocabulary: ['that would be wonderful to test it together', 'check the battery LED indicator', 'does the 12-month warranty restart today', 'exchange receipt'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'That would be great, thank you! Testing it together at the counter will give me peace of mind. Does the standard 12-month warranty restart from today with the new exchange receipt?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Testing Agreement (test / great / open / check)',
          patterns: ['test', 'great', 'wonderful', 'open', 'check', 'counter', 'together'],
          required: true,
        },
        {
          name: 'Warranty Inquiry (warranty / 12-month / restart / receipt)',
          patterns: ['warranty', '12-month', 'year', 'restart', 'guarantee', 'receipt'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_111_3',
        type: 'multiple_choice',
        prompt: 'Which question clearly asks about store warranty coverage?',
        options: [
          { id: 'opt_1', text: 'Does the 12-month warranty restart from today with this new receipt?', isCorrect: true },
          { id: 'opt_2', text: 'Warranty is good?', isCorrect: false },
          { id: 'opt_3', text: 'How long machine live?', isCorrect: false },
        ],
        correctAnswer: 'Does the 12-month warranty restart from today with this new receipt?',
        explanation: 'Accurate and natural customer inquiry.',
      },
    },
    {
      id: 'turn_a2_111_4',
      turnIndex: 4,
      partnerPrompt:
        'Yes indeed! The new unit powers up immediately, the battery shows full charging status, and your 12-month warranty is renewed starting today. Here is your new exchange receipt and your sealed boxed speaker. Is there anything else I can help you with?',
      partnerAudioText:
        'Yes indeed! The new unit powers up immediately, the battery shows full charging status, and your 12-month warranty is renewed starting today. Here is your new exchange receipt and your sealed boxed speaker. Is there anything else I can help you with?',
      partnerQuestionHindi:
        'हाँ बिल्कुल! नई इकाई तुरंत चालू हो जाती है, बैटरी पूर्ण चार्जिंग स्थिति दिखाती है, और आपकी 12 महीने की वारंटी आज से नवीनीकृत हो गई है। यहाँ आपकी नई एक्सचेंज रसीद और आपका सीलबंद बॉक्स वाला स्पीकर है। क्या मैं आपकी कोई और मदद कर सकती हूँ?',
      expectedFunction: 'Express Appreciation, Collect New Device & Conclude Transaction',
      contextGoal:
        'Thank Gemma for her fast and friendly customer support, take the new speaker and exchange receipt, and wish her a great day.',
      targetVocabulary: ['thank you Gemma for resolving this so quickly', 'take the new speaker and warranty slip', 'excellent customer service', 'have a wonderful afternoon'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'No, that is everything! Thank you so much Gemma for resolving this so quickly and testing the speaker with me. I appreciate your excellent help. Have a wonderful afternoon!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Appreciation & Polite Farewell',
          patterns: ['thank you', 'thanks', 'gemma', 'resolving', 'quickly', 'appreciate', 'help', 'wonderful afternoon', 'have a great day'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_111_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Thank you for ___ (resolve) the issue so quickly!"',
        options: [
          { id: 'opt_1', text: 'resolving', isCorrect: true },
          { id: 'opt_2', text: 'resolve', isCorrect: false },
          { id: 'opt_3', text: 'resolved', isCorrect: false },
        ],
        correctAnswer: 'resolving',
        explanation: 'Preposition "for" is followed by a gerund (-ing).',
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
