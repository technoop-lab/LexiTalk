import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_57: ConversationDefinition = {
  id: 'conv_a1_57',
  title: 'Technology, Devices, The Internet & Digital Life',
  cefr: 'A1',
  unitId: 'unit_a1_4',
  lessonLinks: ['lesson_a1_4_57'],
  estimatedMinutes: 5,
  scenario:
    'You are setting up your workstation at a modern coworking space in Dublin. You ask the tech support assistant Marcus for help connecting your laptop and phone to the high-speed guest Wi-Fi, troubleshooting a Bluetooth mouse issue, using the shared wireless printer, and creating a strong password.',
  communicativeGoals: [
    'Use technology vocabulary and separable/inseparable phrasal verbs (turn on/off, log in, plug in, set up, download)',
    'Ask for technical assistance, Wi-Fi passwords, and troubleshooting help ("Could you help me connect to the Wi-Fi?", "The mouse isn\'t connecting")',
    'Follow simple step-by-step digital instructions (reboot, enter password, scan barcode)',
    'Recycle digital devices (laptop, charger, headphones, monitor, keyboard) and polite requests from earlier A1 units',
  ],
  canDoStatements: [
    'Can ask for tech support and Wi-Fi network information (CEFR A1.2)',
    'Can use basic technology phrasal verbs (log in, turn on, plug in, connect to)',
    'Can describe common digital device issues simply',
  ],
  characters: [
    {
      id: 'char_marcus_tech',
      name: 'Marcus',
      role: 'Coworking IT Support Lead',
      avatar: '💻',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'network',
        ipa: '/ˈnɛtwɜːrk/',
        partOfSpeech: 'noun',
        meaning: 'A group of interconnected computers and electronic communication systems',
        exampleSentence: 'Please connect your laptop to the "Cowork_5G" guest network.',
        translations: { hi: 'नेटवर्क / इंटरनेट जाल' },
      },
      {
        word: 'password',
        ipa: '/ˈpɑːswɜːrd/',
        partOfSpeech: 'noun',
        meaning: 'A secret word or phrase that must be used to gain admission to a system',
        exampleSentence: 'What is the Wi-Fi password for guests on the third floor?',
        translations: { hi: 'पासवर्ड / कूटशब्द' },
      },
      {
        word: 'connect',
        ipa: '/kəˈnɛkt/',
        partOfSpeech: 'verb',
        meaning: 'Join, link, or fasten together; establish a communication link',
        exampleSentence: 'My wireless mouse will not connect to my laptop.',
        translations: { hi: 'जोड़ना / कनेक्ट करना' },
      },
      {
        word: 'download',
        ipa: '/ˈdaʊnloʊd/',
        partOfSpeech: 'verb / noun',
        meaning: 'Copy data from one computer system to another, typically over the Internet',
        exampleSentence: 'You can download the printer driver software from this web link.',
        translations: { hi: 'डाउनलोड करना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Could you help me connect to the Wi-Fi?',
        functionCategory: 'Tech Assistance Request',
        exampleSentence: 'Excuse me Marcus, could you help me connect to the high-speed Wi-Fi?',
      },
      {
        phrase: 'What is the network password?',
        functionCategory: 'Password Inquiry',
        exampleSentence: 'What is the network password for the coworking area?',
      },
      {
        phrase: 'How do I log in to the printer?',
        functionCategory: 'Device Login',
        exampleSentence: 'How do I log in to the wireless cloud printer?',
      },
      {
        phrase: 'My device won’t turn on / connect.',
        functionCategory: 'Describing Tech Problem',
        exampleSentence: 'My Bluetooth mouse won’t connect to my laptop screen.',
      },
    ],
    grammar: {
      title: 'Technology Phrasal Verbs & Modal Requests: Could you help me + [Base Verb] / Turn on/off, Log in',
      conceptExplanation:
        'Use separable and inseparable phrasal verbs for tech tasks: "turn on / turn off" (चालू/बंद करना), "log in / log out" (लॉग इन/आउट करना), "plug in" (प्लग लगाना). For polite tech requests, use "Could you please help me + [base verb]?".',
      patternFormula: 'Could you please help me + [connect to / log in to / set up] + [Device]? | Please + [turn on / plug in] + [Device]',
      contrastExamples: [
        {
          incorrect: 'How to login on wifi?',
          correct: 'How do I log in to the Wi-Fi network?',
          explanation: 'Use "How do I log in to...", with preposition "to".',
        },
        {
          incorrect: 'My laptop no connect to printer.',
          correct: 'My laptop does not connect to the printer.',
          explanation: 'Use "does not connect" or "won\'t connect".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Marcus',
        text: 'Hi there! Welcome to HubCowork Dublin. I am Marcus from IT helpdesk. Are you having any trouble setting up your devices?',
        translation: 'नमस्ते! हबकोवर्क डबलिन में आपका स्वागत है। मैं आईटी हेल्पडेस्क से मार्कस हूँ। क्या आपको अपने डिवाइस सेट करने में कोई परेशानी हो रही है?',
      },
      {
        speaker: 'You',
        text: 'Hello Marcus! Could you please tell me what the guest Wi-Fi password is? My laptop is showing two network names.',
        translation: 'नमस्ते मार्कस! क्या आप मुझे बता सकते हैं कि गेस्ट वाई-फाई पासवर्ड क्या है? मेरा लैपटॉप दो नेटवर्क नाम दिखा रहा है।',
      },
      {
        speaker: 'Marcus',
        text: 'Connect to "Hub_Guest_5G". The password is written on the desk card: "Welcome2026!".',
        translation: '"Hub_Guest_5G" से कनेक्ट करें। पासवर्ड डेस्क कार्ड पर लिखा है: "Welcome2026!"।',
      },
      {
        speaker: 'You',
        text: 'Thank you, it connected immediately! How do I send documents to the wireless printer over in the corner?',
        translation: 'धन्यवाद, यह तुरंत कनेक्ट हो गया! मैं कोने में रखे वायरलेस प्रिंटर पर दस्तावेज़ कैसे भेजूँ?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_57_1',
      type: 'fill_blank',
      prompt: 'Complete the tech request: "Could you help me ___ to the guest Wi-Fi?"',
      options: [
        { id: 'opt_1', text: 'connect', isCorrect: true },
        { id: 'opt_2', text: 'connecting', isCorrect: false },
        { id: 'opt_3', text: 'connected', isCorrect: false },
      ],
      correctAnswer: 'connect',
      explanation: 'Modal construction "help me + base verb (connect)".',
    },
    {
      id: 'cp_a1_57_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses a technology phrasal verb?',
      options: [
        { id: 'opt_1', text: 'Please turn on the monitor and log in with your email.', isCorrect: true },
        { id: 'opt_2', text: 'Please turn oning the monitor and log in email.', isCorrect: false },
        { id: 'opt_3', text: 'Please on the monitor turn with login.', isCorrect: false },
      ],
      correctAnswer: 'Please turn on the monitor and log in with your email.',
      explanation: '"turn on" and "log in" are correct imperative phrasal verbs.',
    },
    {
      id: 'cp_a1_57_3',
      type: 'multiple_choice',
      prompt: 'How do you describe a connection failure simply?',
      options: [
        { id: 'opt_1', text: 'My wireless mouse won’t connect to my laptop.', isCorrect: true },
        { id: 'opt_2', text: 'My wireless mouse no connecting laptop.', isCorrect: false },
        { id: 'opt_3', text: 'My mouse is not connect to yesterday.', isCorrect: false },
      ],
      correctAnswer: 'My wireless mouse won’t connect to my laptop.',
      explanation: '"won\'t connect" clearly expresses operational failure.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_57_1',
      scenarioContext: 'Ask for the Wi-Fi password politely.',
      prompt: 'Build: "What is the password for the guest network?"',
      targetStructure: 'What is the password for + noun phrase?',
      wordBank: ['What', 'is', 'the', 'password', 'for', 'the', 'guest', 'network', 'are', 'passwords', 'to'],
      acceptableSolutions: [
        'What is the password for the guest network',
        'What is the password for the guest network?',
      ],
      explanation: 'Question formula for network credentials.',
    },
    {
      id: 'sc_a1_57_2',
      scenarioContext: 'Ask how to print from your computer.',
      prompt: 'Build: "How do I connect to the wireless printer?"',
      targetStructure: 'How do I + base verb + prepositional phrase?',
      wordBank: ['How', 'do', 'I', 'connect', 'to', 'the', 'wireless', 'printer', 'connecting', 'am', 'is'],
      acceptableSolutions: [
        'How do I connect to the wireless printer',
        'How do I connect to the wireless printer?',
      ],
      explanation: 'Procedural question asking for device connection steps.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_57_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! Welcome to the innovation coworking hub. I’m Marcus from IT. Are you having any problems connecting your laptop to the network or finding a workstation?',
      partnerAudioText:
        'Hi there! Welcome to the innovation coworking hub. I’m Marcus from IT. Are you having any problems connecting your laptop to the network or finding a workstation?',
      partnerQuestionHindi:
        'नमस्ते! इनोवेशन सह-कार्य केंद्र में आपका स्वागत है। मैं आईटी से मार्कस हूँ। क्या आपको अपने लैपटॉप को नेटवर्क से जोड़ने या कार्यक्षेत्र खोजने में कोई समस्या आ रही है?',
      expectedFunction: 'Ask for Wi-Fi Network Name & Password (What is the password...?)',
      contextGoal:
        'Greet Marcus, state that you need to connect to the Wi-Fi, and ask for the guest password.',
      targetVocabulary: ['connect to Wi-Fi', 'guest network', 'password', 'laptop', 'hello Marcus'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hello Marcus! Could you please help me connect to the Wi-Fi? What is the password for the guest network on this floor?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hi Marcus! Could you tell me the Wi-Fi password for the guest network, please?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Hi! What’s the Wi-Fi password for the guest network?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Wi-Fi & Password Inquiry',
          patterns: [
            'connect to',
            'wi-fi',
            'wifi',
            'password',
            'guest network',
            'network',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'what_password_wifi_error',
          pattern: /\bwhat password wifi\b/i,
          errorType: 'grammar',
          message: 'Say "What is the Wi-Fi password?", with "is".',
          correctionPattern: 'What is the Wi-Fi password?',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_57_1',
        type: 'fill_blank',
        prompt: 'Choose the correct question word: "___ is the network password?"',
        options: [
          { id: 'opt_1', text: 'What', isCorrect: true },
          { id: 'opt_2', text: 'How', isCorrect: false },
          { id: 'opt_3', text: 'Which is', isCorrect: false },
        ],
        correctAnswer: 'What',
        explanation: '"What is the password?" is standard.',
      },
    },
    {
      id: 'turn_a1_57_2',
      turnIndex: 2,
      partnerPrompt:
        'The network name is "Hub_Guest_HighSpeed" and the password is "DublinConnect2026". Once you connect, a login screen will pop up to agree to our fair usage policy. Did it connect successfully on your screen?',
      partnerAudioText:
        'The network name is "Hub_Guest_HighSpeed" and the password is "DublinConnect2026". Once you connect, a login screen will pop up to agree to our fair usage policy. Did it connect successfully on your screen?',
      partnerQuestionHindi:
        'नेटवर्क का नाम "Hub_Guest_HighSpeed" है और पासवर्ड "DublinConnect2026" है। एक बार कनेक्ट होने के बाद, हमारी उचित उपयोग नीति से सहमत होने के लिए एक लॉगिन स्क्रीन पॉप अप होगी। क्या यह आपकी स्क्रीन पर सफलतापूर्वक कनेक्ट हो गया?',
      expectedFunction: 'Confirm Wi-Fi Connection & Inquire About Bluetooth Mouse Issue',
      contextGoal:
        'Confirm the Wi-Fi works fast, but explain that your Bluetooth wireless mouse is not connecting.',
      targetVocabulary: ['connected successfully', 'works fast', 'bluetooth mouse', 'not connecting', 'turn on bluetooth'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes, it connected successfully and the speed is very fast! However, my Bluetooth wireless mouse is not connecting to my laptop. How can I reset it?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'The Wi-Fi is working great, thank you! But my Bluetooth mouse isn’t connecting.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Wi-Fi works! But my mouse won’t connect.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Connection Success & Mouse Issue',
          patterns: [
            'connected',
            'working',
            'fast',
            'mouse',
            'bluetooth',
            'not connecting',
            "won't connect",
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_57_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes a mouse problem?',
        options: [
          { id: 'opt_1', text: 'My Bluetooth mouse is not connecting to my laptop.', isCorrect: true },
          { id: 'opt_2', text: 'My mouse no is connecting laptop.', isCorrect: false },
          { id: 'opt_3', text: 'Mouse are not connect today.', isCorrect: false },
        ],
        correctAnswer: 'My Bluetooth mouse is not connecting to my laptop.',
        explanation: 'Present Continuous negative "is not connecting".',
      },
    },
    {
      id: 'turn_a1_57_3',
      turnIndex: 3,
      partnerPrompt:
        'Just switch off the mouse button on the bottom, hold the pairing button for five seconds, and your laptop will detect it. By the way, if you need to print any documents today, our cloud printer is right by the kitchen. Would you like me to show you how to print wirelessly?',
      partnerAudioText:
        'Just switch off the mouse button on the bottom, hold the pairing button for five seconds, and your laptop will detect it. By the way, if you need to print any documents today, our cloud printer is right by the kitchen. Would you like me to show you how to print wirelessly?',
      partnerQuestionHindi:
        'बस नीचे दिए गए माउस बटन को बंद करें, पेयरिंग बटन को पांच सेकंड तक दबाए रखें, और आपका लैपटॉप इसका पता लगा लेगा। वैसे, यदि आपको आज किसी दस्तावेज़ को प्रिंट करने की आवश्यकता है, तो हमारा क्लाउड प्रिंटर रसोई के ठीक पास है। क्या आप चाहते हैं कि मैं आपको वायरलेस तरीके से प्रिंट करना दिखाऊं?',
      expectedFunction: 'Fix Mouse, Accept Printer Help & Inquire About Scanning',
      contextGoal:
        'State the mouse is now working, accept the printer tutorial, and ask if the machine can also scan documents.',
      targetVocabulary: ['mouse is working now', 'wireless printer', 'can it scan', 'cloud printing', 'documents'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'The mouse is working now, thank you! Yes, please show me how to print wirelessly. Does that machine also have a scanner for PDF documents?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'The mouse works now! Yes, please show me how to print. Can it also scan PDFs?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Mouse works! Yes, please show me how to print and scan.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Mouse Fixed & Printer / Scanner Question',
          patterns: [
            'mouse works',
            'mouse is working',
            'fixed',
            'print',
            'wireless',
            'scan',
            'scanner',
            'pdf',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_57_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Does the machine ___ PDF documents?"',
        options: [
          { id: 'opt_1', text: 'scan', isCorrect: true },
          { id: 'opt_2', text: 'scans', isCorrect: false },
          { id: 'opt_3', text: 'scanning', isCorrect: false },
        ],
        correctAnswer: 'scan',
        explanation: 'Auxiliary "Does" takes base verb "scan".',
      },
    },
    {
      id: 'turn_a1_57_4',
      turnIndex: 4,
      partnerPrompt:
        'Yes, it prints double-sided in color and scans directly to your email! Just tap your keycard on the black scanner. If you need any more tech assistance, I sit right at desk 12. Have a productive working day!',
      partnerAudioText:
        'Yes, it prints double-sided in color and scans directly to your email! Just tap your keycard on the black scanner. If you need any more tech assistance, I sit right at desk 12. Have a productive working day!',
      partnerQuestionHindi:
        'हाँ, यह रंगीन में दोनों तरफ प्रिंट करता है और सीधे आपके ईमेल पर स्कैन करता है! बस ब्लैक स्कैनर पर अपना कीकार्ड टैप करें। यदि आपको किसी और तकनीकी सहायता की आवश्यकता है, तो मैं डेस्क 12 पर बैठता हूँ। आपका कार्य दिवस फलदायी हो!',
      expectedFunction: 'Express Gratitude & Conclude IT Helpdesk Interaction',
      contextGoal:
        'Thank Marcus for his excellent tech support, say everything is working perfectly, and wish him a great day.',
      targetVocabulary: ['thank you Marcus', 'excellent help', 'working perfectly', 'productive day', 'goodbye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you so much for your excellent and clear help, Marcus! Everything is working perfectly now. Have a wonderful and productive day!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thank you very much, Marcus! All my devices are working. Have a great day!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Thanks Marcus! Everything works perfectly. Have a good one!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Appreciation',
          patterns: [
            'thank you',
            'thanks',
            'working perfectly',
            'productive day',
            'great day',
            'goodbye',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_57_4',
        type: 'multiple_choice',
        prompt: 'Which sentence thanks tech support warmly?',
        options: [
          { id: 'opt_1', text: 'Thank you Marcus! Everything is working perfectly now.', isCorrect: true },
          { id: 'opt_2', text: 'Computers are okay now bye.', isCorrect: false },
          { id: 'opt_3', text: 'I am finished with desk.', isCorrect: false },
        ],
        correctAnswer: 'Thank you Marcus! Everything is working perfectly now.',
        explanation: 'Polite and natural.',
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
