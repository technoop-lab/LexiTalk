import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_62: ConversationDefinition = {
  id: 'conv_a1_62',
  title: 'Telephone Calls, Voicemails & Taking Messages',
  cefr: 'A1',
  unitId: 'unit_a1_5',
  lessonLinks: ['lesson_a1_5_62'],
  estimatedMinutes: 5,
  scenario:
    'You are answering the main phone line at an architectural design studio in Birmingham. A client, David Foster, calls to speak with senior designer Sarah Jenkins. Sarah is currently in a client meeting, so you take down David\'s message, contact number, and urgent callback request politely.',
  communicativeGoals: [
    'Answer incoming telephone calls with professional greetings ("Hello, thank you for calling...", "This is Alex speaking")',
    'Explain unavailability politely ("I am afraid she is in a meeting at the moment")',
    'Offer to take down a message and write down phone numbers accurately ("May I take a message?", "Could you please spell your last name?")',
    'Confirm callback details and end the phone call professionally ("I will pass on your message right away")',
  ],
  canDoStatements: [
    'Can answer a business phone call and introduce oneself clearly (CEFR A1.2)',
    'Can take down a caller\'s name, message, and contact phone number',
    'Can confirm details and close a phone call politely',
  ],
  characters: [
    {
      id: 'char_david_caller',
      name: 'David Foster',
      role: 'Client & Calling Partner',
      avatar: '📞',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'message',
        ipa: '/ˈmɛsɪdʒ/',
        partOfSpeech: 'noun',
        meaning: 'A verbal, written, or recorded communication sent from one person to another',
        exampleSentence: 'May I take a message for Ms. Jenkins?',
        translations: { hi: 'संदेश / पैगाम' },
      },
      {
        word: 'available',
        ipa: '/əˈveɪləbəl/',
        partOfSpeech: 'adjective',
        meaning: 'Able to be contacted, seen, or used; free from commitments',
        exampleSentence: 'She is not available right now because she is in a meeting.',
        translations: { hi: 'उपलब्ध' },
      },
      {
        word: 'transfer',
        ipa: '/trænsˈfɜːr/',
        partOfSpeech: 'verb / noun',
        meaning: 'Connect a telephone caller to another line or department',
        exampleSentence: 'Let me see if I can transfer your call to her extension.',
        translations: { hi: 'कॉल ट्रांसफर करना / आगे जोड़ना' },
      },
      {
        word: 'callback',
        ipa: '/ˈkɔːlbæk/',
        partOfSpeech: 'noun',
        meaning: 'A return phone call made to someone who called earlier',
        exampleSentence: 'Could you ask her to give me a callback before 5 PM?',
        translations: { hi: 'वापस कॉल करना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'This is... speaking. How can I help you?',
        functionCategory: 'Answering Phone',
        exampleSentence: 'Hello, Apex Design, this is Alex speaking. How can I help you?',
      },
      {
        phrase: 'I’m afraid she is unavailable at the moment.',
        functionCategory: 'Explaining Unavailability',
        exampleSentence: 'I’m afraid Ms. Jenkins is unavailable at the moment.',
      },
      {
        phrase: 'May I take a message?',
        functionCategory: 'Taking Message',
        exampleSentence: 'May I take a message and have her call you back?',
      },
      {
        phrase: 'Could you please repeat your phone number?',
        functionCategory: 'Confirming Details',
        exampleSentence: 'Could you please repeat your phone number slowly?',
      },
    ],
    grammar: {
      title: 'Telephone Modals & Clarifications: May I take a message? / Could you please repeat...?',
      conceptExplanation:
        'Use polite modal inquiries on the phone: "May I take a message?", "Could you please speak slowly?", "Could I have your name, please?". When identifying oneself on the phone, use "This is [Name] speaking", NOT "I am [Name]".',
      patternFormula: 'Hello, this is [Name] speaking. How may I help you? | May I take a message for [Person]?',
      contrastExamples: [
        {
          incorrect: 'I am Alex on the phone.',
          correct: 'This is Alex speaking.',
          explanation: 'On the telephone, use "This is [Name] speaking".',
        },
        {
          incorrect: 'You want leave message?',
          correct: 'Would you like to leave a message?',
          explanation: 'Use polite modal phrasing "Would you like to leave a message?".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'You',
        text: 'Good morning, Apex Architecture, this is Alex speaking. How may I direct your call?',
        translation: 'शुभ प्रभात, एपेक्स आर्किटेक्चर, मैं एलेक्स बोल रहा हूँ। मैं आपकी कॉल कहाँ निर्देशित कर सकता हूँ?',
      },
      {
        speaker: 'David',
        text: 'Hello, this is David Foster from BuildCorp. May I speak with Sarah Jenkins, please?',
        translation: 'नमस्ते, मैं बिल्डकॉप से डेविड फोस्टर बोल रहा हूँ। क्या मैं सारा जेनकिंस से बात कर सकता हूँ, कृपया?',
      },
      {
        speaker: 'You',
        text: 'I am afraid Sarah is in a client presentation right now. Would you like to leave a message for her?',
        translation: 'मुझे खेद है कि सारा इस समय क्लाइंट प्रेजेंटेशन में हैं। क्या आप उनके लिए कोई संदेश छोड़ना चाहेंगे?',
      },
      {
        speaker: 'David',
        text: 'Yes please. Please ask her to call me back at 07700 900123 regarding the floor plans.',
        translation: 'हाँ कृपया। कृपया उनसे कहें कि वे फ्लोर प्लान के संबंध में मुझे 07700 900123 पर वापस कॉल करें।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_62_1',
      type: 'fill_blank',
      prompt: 'Complete the telephone opening: "Hello, Apex Studio, this ___ Alex speaking."',
      options: [
        { id: 'opt_1', text: 'is', isCorrect: true },
        { id: 'opt_2', text: 'am', isCorrect: false },
        { id: 'opt_3', text: 'are', isCorrect: false },
      ],
      correctAnswer: 'is',
      explanation: 'Use the standard phone idiom "this is [Name] speaking".',
    },
    {
      id: 'cp_a1_62_2',
      type: 'multiple_choice',
      prompt: 'Which sentence offers to take a message politely?',
      options: [
        { id: 'opt_1', text: 'May I take a message for her?', isCorrect: true },
        { id: 'opt_2', text: 'Give message to me now.', isCorrect: false },
        { id: 'opt_3', text: 'What is message you write?', isCorrect: false },
      ],
      correctAnswer: 'May I take a message for her?',
      explanation: '"May I take a message?" is the standard polite business formula.',
    },
    {
      id: 'cp_a1_62_3',
      type: 'multiple_choice',
      prompt: 'Choose the correct way to explain that someone is in a meeting:',
      options: [
        { id: 'opt_1', text: 'I am afraid she is in a meeting at the moment.', isCorrect: true },
        { id: 'opt_2', text: 'She is not talk because meeting.', isCorrect: false },
        { id: 'opt_3', text: 'Meeting is having her today.', isCorrect: false },
      ],
      correctAnswer: 'I am afraid she is in a meeting at the moment.',
      explanation: 'Polite and professional phone etiquette.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_62_1',
      scenarioContext: 'Answer the office phone professionally.',
      prompt: 'Build: "This is Alex speaking how may I help you?"',
      targetStructure: 'This is [Name] speaking + how may I help you?',
      wordBank: ['This', 'is', 'Alex', 'speaking', 'how', 'may', 'I', 'help', 'you', 'am', 'call'],
      acceptableSolutions: [
        'This is Alex speaking how may I help you',
        'This is Alex speaking how may I help you?',
        'This is Alex speaking, how may I help you?',
      ],
      explanation: 'Standard professional greeting.',
    },
    {
      id: 'sc_a1_62_2',
      scenarioContext: 'Offer to write down the caller\'s message.',
      prompt: 'Build: "Would you like to leave a message for Sarah?"',
      targetStructure: 'Would you like to leave a message for + name?',
      wordBank: ['Would', 'you', 'like', 'to', 'leave', 'a', 'message', 'for', 'Sarah', 'leaving', 'are'],
      acceptableSolutions: [
        'Would you like to leave a message for Sarah',
        'Would you like to leave a message for Sarah?',
      ],
      explanation: 'Polite message offer.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_62_1',
      turnIndex: 1,
      partnerPrompt:
        '(Ring ring... ring ring...) "Hello! Is this Apex Architecture? I’m trying to reach Sarah Jenkins regarding the commercial building blueprints."',
      partnerAudioText:
        '(Ring ring... ring ring...) "Hello! Is this Apex Architecture? I’m trying to reach Sarah Jenkins regarding the commercial building blueprints."',
      partnerQuestionHindi:
        '(रिंग रिंग... रिंग रिंग...) "नमस्ते! क्या यह एपेक्स आर्किटेक्चर है? मैं वाणिज्यिक भवन ब्लूप्रिंट के संबंध में सारा जेनकिंस से संपर्क करने का प्रयास कर रहा हूँ।"',
      expectedFunction: 'Answer Phone with Professional Greeting (This is Alex speaking, how may I help you?)',
      contextGoal:
        'Confirm this is Apex Architecture, state your name ("This is Alex speaking"), and ask how you can help.',
      targetVocabulary: ['good morning', 'Apex Architecture', 'this is Alex speaking', 'how may I help you', 'reach Sarah'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Good morning, Apex Architecture, this is Alex speaking. How may I help you today?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Prompt Scaffold',
          text: 'Hello, Apex Architecture, this is Alex speaking. How can I help you?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Phone Greeting & Identity',
          patterns: [
            'apex architecture',
            'this is',
            'speaking',
            'how may i help',
            'how can i help',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'i_am_alex_phone_error',
          pattern: /\bi am alex speaking\b/i,
          errorType: 'grammar',
          message: 'Say "This is Alex speaking", using "This is" on the telephone.',
          correctionPattern: 'This is Alex speaking',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_62_1',
        type: 'fill_blank',
        prompt: 'Choose the correct phone greeting: "Hello, ___ is Alex speaking."',
        options: [
          { id: 'opt_1', text: 'this', isCorrect: true },
          { id: 'opt_2', text: 'I', isCorrect: false },
          { id: 'opt_3', text: 'me', isCorrect: false },
        ],
        correctAnswer: 'this',
        explanation: 'Always say "this is [Name]" on phone calls.',
      },
    },
    {
      id: 'turn_a1_62_2',
      turnIndex: 2,
      partnerPrompt:
        'Hi Alex, my name is David Foster from BuildCorp. Is Sarah available right now to discuss the updated floor plans?',
      partnerAudioText:
        'Hi Alex, my name is David Foster from BuildCorp. Is Sarah available right now to discuss the updated floor plans?',
      partnerQuestionHindi:
        'नमस्ते एलेक्स, मेरा नाम बिल्डकॉप से डेविड फोस्टर है। क्या सारा अपडेट किए गए फ्लोर प्लान पर चर्चा करने के लिए अभी उपलब्ध हैं?',
      expectedFunction: 'Explain Unavailability & Offer to Take Message (I am afraid she is in a meeting...)',
      contextGoal:
        'Explain politely that Sarah is in a meeting right now, and offer to take a message for her.',
      targetVocabulary: ['i am afraid', 'in a meeting', 'unavailable at the moment', 'would you like to leave a message', 'take a message'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'I am afraid Sarah is currently in a meeting with a client. Would you like to leave a message for her, Mr. Foster?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Prompt Scaffold',
          text: 'I’m afraid she is in a meeting right now. May I take a message for you?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Unavailability & Message Offer',
          patterns: [
            'afraid',
            'meeting',
            'unavailable',
            'leave a message',
            'take a message',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_62_2',
        type: 'multiple_choice',
        prompt: 'Which sentence politely explains that a colleague is busy?',
        options: [
          { id: 'opt_1', text: 'I am afraid she is in a meeting at the moment.', isCorrect: true },
          { id: 'opt_2', text: 'She not here go away.', isCorrect: false },
          { id: 'opt_3', text: 'Meeting is taking her now.', isCorrect: false },
        ],
        correctAnswer: 'I am afraid she is in a meeting at the moment.',
        explanation: 'Polite and professional phone phrase.',
      },
    },
    {
      id: 'turn_a1_62_3',
      turnIndex: 3,
      partnerPrompt:
        'Yes please! Please ask her to call me back before 4:30 PM regarding the revised blueprints. My direct number is 07700 900456.',
      partnerAudioText:
        'Yes please! Please ask her to call me back before 4:30 PM regarding the revised blueprints. My direct number is 07700 900456.',
      partnerQuestionHindi:
        'हाँ कृपया! कृपया उनसे कहें कि वे संशोधित ब्लूप्रिंट के संबंध में शाम 4:30 बजे से पहले मुझे वापस कॉल करें। मेरा सीधा नंबर 07700 900456 है।',
      expectedFunction: 'Repeat & Confirm Contact Number & Callback Time',
      contextGoal:
        'Repeat the phone number (07700 900456) and the callback time (before 4:30 PM) to confirm accuracy.',
      targetVocabulary: ['let me confirm that', '07700 900456', 'before 4:30 PM', 'revised blueprints', 'pass this to Sarah'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Let me double-check that: 07700 900456, and you need a callback before 4:30 PM regarding the revised blueprints. Is that correct?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Prompt Scaffold',
          text: 'Got it: 07700 900456, callback before 4:30 PM. I will give her the message.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Number & Time Confirmation',
          patterns: [
            '07700',
            '900456',
            '4:30',
            'confirm',
            'blueprints',
            'callback',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_62_3',
        type: 'fill_blank',
        prompt: 'Fill in the confirmation phrase: "Let me ___ your phone number."',
        options: [
          { id: 'opt_1', text: 'confirm', isCorrect: true },
          { id: 'opt_2', text: 'confirmed', isCorrect: false },
          { id: 'opt_3', text: 'confirming', isCorrect: false },
        ],
        correctAnswer: 'confirm',
        explanation: 'Base verb after modal "let me confirm".',
      },
    },
    {
      id: 'turn_a1_62_4',
      turnIndex: 4,
      partnerPrompt:
        'That is exactly right! Thank you very much for your help, Alex. Have a wonderful day!',
      partnerAudioText:
        'That is exactly right! Thank you very much for your help, Alex. Have a wonderful day!',
      partnerQuestionHindi:
        'यह बिल्कुल सही है! आपकी मदद के लिए बहुत-बहुत धन्यवाद, एलेक्स। आपका दिन शानदार रहे!',
      expectedFunction: 'Conclude Call Professionally (You are welcome, goodbye)',
      contextGoal:
        'Thank Mr. Foster, promise to give Sarah the message as soon as her meeting ends, and say goodbye.',
      targetVocabulary: ['you are very welcome', 'pass on the message', 'as soon as she finishes', 'have a great day Mr. Foster', 'goodbye'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'You are very welcome, Mr. Foster! I will pass your message to Sarah as soon as her meeting finishes. Have a great day, goodbye!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Prompt Scaffold',
          text: 'You’re welcome! I’ll give her the message right away. Have a nice day, goodbye!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Call Wrap-Up',
          patterns: [
            'welcome',
            'pass the message',
            'give her the message',
            'have a great day',
            'goodbye',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_62_4',
        type: 'multiple_choice',
        prompt: 'Which phrase ends a phone call with a customer politely?',
        options: [
          { id: 'opt_1', text: 'You are welcome Mr. Foster! I will pass on your message right away. Goodbye!', isCorrect: true },
          { id: 'opt_2', text: 'I hang up phone now.', isCorrect: false },
          { id: 'opt_3', text: 'Done talking with you.', isCorrect: false },
        ],
        correctAnswer: 'You are welcome Mr. Foster! I will pass on your message right away. Goodbye!',
        explanation: 'Polite and professional phone closing.',
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
