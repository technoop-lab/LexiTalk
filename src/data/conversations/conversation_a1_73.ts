import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_73: ConversationDefinition = {
  id: 'conv_a1_73',
  title: 'Community Services, Post Office, Local Library & Civic Inquiries',
  cefr: 'A1',
  unitId: 'unit_a1_5',
  lessonLinks: ['lesson_a1_5_73'],
  estimatedMinutes: 5,
  scenario:
    'You visit a combined community hub, post office, and public library in Newcastle upon Tyne. Counter officer Grace helps you send an international tracked parcel to family abroad, weigh the package, purchase postage stamps, register for a public library card, and inquire about free community English conversation workshops.',
  communicativeGoals: [
    'Send domestic and international letters or parcels at the post office ("I would like to send this package to India by tracked airmail")',
    'Understand postal weight classes, insurance options, and tracking numbers ("Does this include a tracking number?")',
    'Register for a community library card with proof of local residency ("I would like to apply for a library card")',
    'Ask about community center programs, workshops, and civic schedules ("What free workshops are available this month?")',
  ],
  canDoStatements: [
    'Can send parcels and buy stamps at a post office counter (CEFR A1.2)',
    'Can ask for tracking numbers and delivery estimates',
    'Can apply for a public library card and inquire about community events',
  ],
  characters: [
    {
      id: 'char_grace_civic',
      name: 'Grace',
      role: 'Community Services & Postal Officer',
      avatar: '📬',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'parcel',
        ipa: '/ˈpɑːrsəl/',
        partOfSpeech: 'noun',
        meaning: 'An object or collection of objects wrapped in paper or packed in a box, ready to be sent by post',
        exampleSentence: 'I would like to send this small parcel to my family in Delhi.',
        translations: { hi: 'पार्सल / डाक बंडल' },
      },
      {
        word: 'tracking',
        ipa: '/ˈtrækɪŋ/',
        partOfSpeech: 'noun',
        meaning: 'The process of monitoring the location and progress of a shipment in transit',
        exampleSentence: 'Here is your tracking number so you can trace the package online.',
        translations: { hi: 'ट्रैकिंग / पार्सल की स्थिति जांचना' },
      },
      {
        word: 'membership',
        ipa: '/ˈmɛmbərʃɪp/',
        partOfSpeech: 'noun',
        meaning: 'The state of belonging to an organization or service, such as a public library',
        exampleSentence: 'Library membership is completely free for all local residents.',
        translations: { hi: 'सदस्यता' },
      },
      {
        word: 'workshop',
        ipa: '/ˈwɜːrkʃɒp/',
        partOfSpeech: 'noun',
        meaning: 'A meeting at which a group of people engage in intensive discussion and activity on a subject',
        exampleSentence: 'The community library hosts free weekly conversational English workshops.',
        translations: { hi: 'कार्यशाला' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I’d like to send this parcel to..., please.',
        functionCategory: 'Postal Service',
        exampleSentence: 'I’d like to send this parcel to India by tracked standard delivery, please.',
      },
      {
        phrase: 'Does it come with a tracking number?',
        functionCategory: 'Tracking Inquiry',
        exampleSentence: 'Does this delivery option come with an online tracking number?',
      },
      {
        phrase: 'How do I apply for a library card?',
        functionCategory: 'Library Registration',
        exampleSentence: 'How do I apply for a free local library card today?',
      },
      {
        phrase: 'What community events do you offer?',
        functionCategory: 'Community Activities',
        exampleSentence: 'What community events and workshops do you offer on weekends?',
      },
    ],
    grammar: {
      title: 'Civic Transactions & Inquiries: I would like to send... / Can I sign up for...?',
      conceptExplanation:
        'Combine polite requests ("I would like to send this parcel", "Can I register for a library card?") with inquiry phrases ("How long will it take to arrive?", "Is there a fee for joining?").',
      patternFormula: 'I would like to send [Item] to [Country] via [Service] | How can I apply for [Card/Service]?',
      contrastExamples: [
        {
          incorrect: 'Take box and fly to India now.',
          correct: 'I would like to send this parcel to India by tracked delivery, please.',
          explanation: 'Use polite postal phrasing "I would like to send this parcel to...".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Grace',
        text: 'Good morning! Welcome to the Newcastle Community Hub and Post Office. How can I help you today?',
        translation: 'शुभ प्रभात! न्यूकैसल कम्युनिटी हब और पोस्ट ऑफिस में आपका स्वागत है। आज मैं आपकी क्या मदद कर सकती हूँ?',
      },
      {
        speaker: 'You',
        text: 'Good morning Grace! I would like to send this 1.2 kg parcel to India by tracked airmail, please.',
        translation: 'शुभ प्रभात ग्रेस! मैं इस 1.2 किलोग्राम के पार्सल को ट्रैक्ड एयरमेल द्वारा भारत भेजना चाहता हूँ, कृपया।',
      },
      {
        speaker: 'Grace',
        text: 'Certainly! Tracked international delivery takes 5 to 7 days and costs £14.50. Would you also like to sign up for a library card while you are here?',
        translation: 'निश्चित रूप से! ट्रैक्ड अंतरराष्ट्रीय डिलीवरी में 5 से 7 दिन लगते हैं और लागत £14.50 है। क्या आप यहाँ रहते हुए लाइब्रेरी कार्ड के लिए भी साइन अप करना चाहेंगे?',
      },
      {
        speaker: 'You',
        text: 'Yes please! Here is my proof of address. What community workshops do you run here on Saturdays?',
        translation: 'हाँ कृपया! यहाँ मेरे पते का प्रमाण है। आप यहाँ शनिवार को कौन सी सामुदायिक कार्यशालाएं चलाते हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_73_1',
      type: 'fill_blank',
      prompt: 'Complete the postal request: "I would like to send this parcel ___ India."',
      options: [
        { id: 'opt_1', text: 'to', isCorrect: true },
        { id: 'opt_2', text: 'at', isCorrect: false },
        { id: 'opt_3', text: 'on', isCorrect: false },
      ],
      correctAnswer: 'to',
      explanation: 'Destination preposition "to".',
    },
    {
      id: 'cp_a1_73_2',
      type: 'multiple_choice',
      prompt: 'Which sentence asks for parcel tracking information correctly?',
      options: [
        { id: 'opt_1', text: 'Does this postal service include an online tracking number?', isCorrect: true },
        { id: 'opt_2', text: 'Is box having number for eyes on computer?', isCorrect: false },
        { id: 'opt_3', text: 'Where number box running street?', isCorrect: false },
      ],
      correctAnswer: 'Does this postal service include an online tracking number?',
      explanation: 'Accurate and natural.',
    },
    {
      id: 'cp_a1_73_3',
      type: 'multiple_choice',
      prompt: 'How do you ask to register for a library card?',
      options: [
        { id: 'opt_1', text: 'I would like to apply for a library card, please.', isCorrect: true },
        { id: 'opt_2', text: 'Give book passport to me now.', isCorrect: false },
        { id: 'opt_3', text: 'I am want borrow card book place.', isCorrect: false },
      ],
      correctAnswer: 'I would like to apply for a library card, please.',
      explanation: 'Polite and standard civic inquiry.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_73_1',
      scenarioContext: 'Send a parcel to your family abroad.',
      prompt: 'Build: "I would like to send this parcel to India."',
      targetStructure: 'I would like to send this parcel to [Country]',
      wordBank: ['I', 'would', 'like', 'to', 'send', 'this', 'parcel', 'to', 'India', 'sending', 'am'],
      acceptableSolutions: [
        'I would like to send this parcel to India',
        'I would like to send this parcel to India.',
      ],
      explanation: 'Postal sending formula.',
    },
    {
      id: 'sc_a1_73_2',
      scenarioContext: 'Inquire about free workshops.',
      prompt: 'Build: "What free workshops do you have this weekend?"',
      targetStructure: 'What free workshops do you have this weekend?',
      wordBank: ['What', 'free', 'workshops', 'do', 'you', 'have', 'this', 'weekend', 'are', 'having', 'for'],
      acceptableSolutions: [
        'What free workshops do you have this weekend',
        'What free workshops do you have this weekend?',
      ],
      explanation: 'Community event question.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_73_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning and welcome to the Newcastle Community Hub & Post Office! I’m Grace. How can I assist you at the counter today?',
      partnerAudioText:
        'Good morning and welcome to the Newcastle Community Hub & Post Office! I’m Grace. How can I assist you at the counter today?',
      partnerQuestionHindi:
        'शुभ प्रभात और न्यूकैसल कम्युनिटी हब और पोस्ट ऑफिस में आपका स्वागत है! मैं ग्रेस हूँ। आज काउंटर पर मैं आपकी क्या मदद कर सकती हूँ?',
      expectedFunction: 'Request International Parcel Delivery with Tracking (I would like to send this parcel to India...)',
      contextGoal:
        'State that you would like to send a 1.2 kg package to India using tracked international delivery, and ask how much it costs.',
      targetVocabulary: ['good morning Grace', 'send this parcel to India', 'tracked delivery', '1.2 kg', 'how much does it cost'],
      suggestedResponses: [
        {
          label: 'Integrated Performance',
          text: 'Good morning Grace! I would like to send this 1.2 kg parcel to my family in India using tracked airmail. How much does the postage cost, and how long will it take?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Parcel & Destination',
          patterns: [
            'parcel',
            'package',
            'india',
            'tracked',
            'cost',
            'how much',
            'how long',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'give_box_to_india_error',
          pattern: /\bgive this box to india\b/i,
          errorType: 'vocabulary',
          message: 'Say "I would like to send this parcel to...", using "send a parcel".',
          correctionPattern: 'I would like to send this parcel to India',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_73_1',
        type: 'fill_blank',
        prompt: 'Choose the correct verb: "I would like to ___ this parcel."',
        options: [
          { id: 'opt_1', text: 'send', isCorrect: true },
          { id: 'opt_2', text: 'sended', isCorrect: false },
          { id: 'opt_3', text: 'sending to', isCorrect: false },
        ],
        correctAnswer: 'send',
        explanation: 'Infinitive "send" after "would like to".',
      },
    },
    {
      id: 'turn_a1_73_2',
      turnIndex: 2,
      partnerPrompt:
        'International Tracked delivery is £14.50 and takes 5 to 7 working days. It includes £50 compensation and full online tracking. Here is your tracking barcode receipt. Would you also like to buy any first-class stamps or book of stamps today?',
      partnerAudioText:
        'International Tracked delivery is £14.50 and takes 5 to 7 working days. It includes £50 compensation and full online tracking. Here is your tracking barcode receipt. Would you also like to buy any first-class stamps or book of stamps today?',
      partnerQuestionHindi:
        'इंटरनेशनल ट्रैक्ड डिलीवरी £14.50 है और इसमें 5 से 7 कार्य दिवस लगते हैं। इसमें £50 का मुआवजा और पूर्ण ऑनलाइन ट्रैकिंग शामिल है। यह रही आपकी ट्रैकिंग बारकोड रसीद। क्या आप आज कोई प्रथम श्रेणी के डाक टिकट या टिकटों की पुस्तिका भी खरीदना चाहेंगे?',
      expectedFunction: 'Purchase Book of First-Class Stamps & Inquire About Library Card',
      contextGoal:
        'Purchase a book of 8 first-class stamps, and ask how to register for a free community library card.',
      targetVocabulary: ['book of eight stamps', 'first-class stamps', 'apply for a library card', 'proof of address', 'community hub'],
      suggestedResponses: [
        {
          label: 'Integrated Performance',
          text: 'Yes please, I would like a book of eight first-class stamps. Also, while I am here, how do I register for a local public library card?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Stamps & Library Card Application',
          patterns: [
            'stamps',
            'first-class',
            'library card',
            'apply',
            'register',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_73_2',
        type: 'multiple_choice',
        prompt: 'Which sentence asks for a library card politely?',
        options: [
          { id: 'opt_1', text: 'How do I apply for a local library card, please?', isCorrect: true },
          { id: 'opt_2', text: 'Give library card in my hands.', isCorrect: false },
          { id: 'opt_3', text: 'I am want book take card.', isCorrect: false },
        ],
        correctAnswer: 'How do I apply for a local library card, please?',
        explanation: 'Natural and standard civic request.',
      },
    },
    {
      id: 'turn_a1_73_3',
      turnIndex: 3,
      partnerPrompt:
        'Library cards are completely free! I just need to scan a proof of address like a council tax bill or tenancy agreement, and I can print your membership card right now. We also host free community events—would you like to hear about our weekend clubs?',
      partnerAudioText:
        'Library cards are completely free! I just need to scan a proof of address like a council tax bill or tenancy agreement, and I can print your membership card right now. We also host free community events—would you like to hear about our weekend clubs?',
      partnerQuestionHindi:
        'लाइब्रेरी कार्ड पूरी तरह से मुफ्त हैं! मुझे बस काउंसिल टैक्स बिल या किरायेदारी समझौते जैसे पते के प्रमाण को स्कैन करने की आवश्यकता है, और मैं अभी आपका सदस्यता कार्ड प्रिंट कर सकती हूँ। हम मुफ्त सामुदायिक कार्यक्रमों की मेजबानी भी करते हैं—क्या आप हमारे सप्ताहांत क्लबों के बारे में सुनना चाहेंगे?',
      expectedFunction: 'Present Tenancy Agreement & Inquire About Conversation Clubs & Tech Workshops',
      contextGoal:
        'Provide your tenancy agreement for address verification, and ask what times the English conversation club and digital workshops meet on weekends.',
      targetVocabulary: ['here is my tenancy agreement', 'proof of address', 'English conversation club', 'digital workshops', 'weekend schedule'],
      suggestedResponses: [
        {
          label: 'Integrated Performance',
          text: 'Here is my signed tenancy agreement for proof of address! I would love to hear about the weekend clubs—what time does the English conversation club and tech workshop meet?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Proof of Address & Community Events',
          patterns: [
            'tenancy agreement',
            'proof of address',
            'conversation club',
            'workshops',
            'weekend',
            'schedule',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_73_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Here is my proof of ___."',
        options: [
          { id: 'opt_1', text: 'address', isCorrect: true },
          { id: 'opt_2', text: 'location place', isCorrect: false },
          { id: 'opt_3', text: 'houses', isCorrect: false },
        ],
        correctAnswer: 'address',
        explanation: '"proof of address" is the standard civic terminology.',
      },
    },
    {
      id: 'turn_a1_73_4',
      turnIndex: 4,
      partnerPrompt:
        'Our English conversation circle meets every Saturday at 10:30 AM in Room 2, and coding workshops are Sundays at 2 PM. Here is your brand new library card, your book of stamps, and a monthly event guide. That comes to £24.10 for the parcel and stamps. Thank you for visiting Newcastle Community Hub!',
      partnerAudioText:
        'Our English conversation circle meets every Saturday at 10:30 AM in Room 2, and coding workshops are Sundays at 2 PM. Here is your brand new library card, your book of stamps, and a monthly event guide. That comes to £24.10 for the parcel and stamps. Thank you for visiting Newcastle Community Hub!',
      partnerQuestionHindi:
        'हमारा अंग्रेजी वार्तालाप सर्कल हर शनिवार सुबह 10:30 बजे कमरा 2 में मिलता है, और कोडिंग कार्यशालाएं रविवार को दोपहर 2 बजे होती हैं। यह रहा आपका नया लाइब्रेरी कार्ड, आपकी टिकटों की पुस्तिका, और एक मासिक कार्यक्रम गाइड। पार्सल और टिकटों के लिए कुल मिलाकर £24.10 होता है। न्यूकैसल कम्युनिटी हब में आने के लिए धन्यवाद!',
      expectedFunction: 'Pay Total, Take Library Card & Conclude Civic Visit',
      contextGoal:
        'Pay the £24.10 with contactless card, take your library card and stamps, thank Grace warmly, and confirm attending Saturday\'s session.',
      targetVocabulary: ['pay by card', 'twenty-four pounds ten', 'thank you Grace', 'see you on Saturday morning', 'goodbye'],
      suggestedResponses: [
        {
          label: 'Integrated Performance',
          text: 'Payment of £24.10 is done! Thank you so much Grace for your fantastic help. I will definitely attend the conversation club on Saturday at 10:30 AM. Have a wonderful day, goodbye!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Civic Closing & Payment',
          patterns: [
            'payment',
            'card',
            '24.10',
            'thank you',
            'grace',
            'saturday',
            'goodbye',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_73_4',
        type: 'multiple_choice',
        prompt: 'Which sentence concludes a post office and library visit warmly?',
        options: [
          { id: 'opt_1', text: 'Thank you Grace for your wonderful help! See you on Saturday, goodbye.', isCorrect: true },
          { id: 'opt_2', text: 'I take books and run away now.', isCorrect: false },
          { id: 'opt_3', text: 'Hub done talking bye.', isCorrect: false },
        ],
        correctAnswer: 'Thank you Grace for your wonderful help! See you on Saturday, goodbye.',
        explanation: 'Polite and friendly closing.',
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
