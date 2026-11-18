import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_117: ConversationDefinition = {
  id: 'conv_a2_117',
  title: 'Technology, Devices & Daily Digital Life (plug in, back up, set up, run out of)',
  cefr: 'A2',
  unitId: 'unit_a2_8',
  lessonLinks: ['lesson_a2_8_117'],
  estimatedMinutes: 5,
  scenario:
    'You are visiting Birmingham Tech Hub to upgrade your smartphone and transfer your personal data. Speak with tech advisor Liam Davies about the problems with your old device (battery draining rapidly, running out of cloud storage, slow app performance), learn how to back up your photos safely, and set up your new phone with two-factor authentication.',
  communicativeGoals: [
    'Describe tech problems and device battery/storage issues using "run out of", "drain", "freeze", and "crash"',
    'Use technology phrasal verbs naturally ("back up", "set up", "plug in", "turn on/off", "log in to")',
    'Discuss digital lifestyle habits, cloud storage plans, and screen time management',
    'Follow step-by-step technical instructions for transferring data between devices',
  ],
  canDoStatements: [
    'Can describe common technical and smartphone problems clearly (CEFR A2)',
    'Can use core technology phrasal verbs to explain actions on electronic devices',
    'Can ask for assistance and understand instructions regarding cloud backup and security setup',
  ],
  characters: [
    {
      id: 'char_liam_davies',
      name: 'Liam Davies',
      role: 'Tech Support & Device Specialist',
      avatar: '📱',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'back up',
        ipa: '/bæk ʌp/',
        partOfSpeech: 'phrasal verb',
        meaning: 'To make a spare digital copy of data to protect it against loss',
        exampleSentence: 'Make sure to back up all your photos to the cloud before transferring.',
        translations: { hi: 'बैकअप लेना (प्रतिलिपि सुरक्षित करना)' },
      },
      {
        word: 'run out of',
        ipa: '/rʌn aʊt ɒv/',
        partOfSpeech: 'phrasal verb',
        meaning: 'To have no more of something available (such as battery charge or storage)',
        exampleSentence: 'My old phone constantly runs out of internal storage memory.',
        translations: { hi: 'समाप्त हो जाना (स्टोरेज या बैटरी)' },
      },
      {
        word: 'set up',
        ipa: '/sɛt ʌp/',
        partOfSpeech: 'phrasal verb',
        meaning: 'To configure or prepare a new device, software, or account for use',
        exampleSentence: 'Could you help me set up two-factor security authentication?',
        translations: { hi: 'सेटअप करना / व्यवस्था करना' },
      },
      {
        word: 'battery life',
        ipa: '/ˈbætəri laɪf/',
        partOfSpeech: 'noun',
        meaning: 'The amount of time a device can run before its battery needs recharging',
        exampleSentence: 'The new phone has an impressive 24-hour battery life.',
        translations: { hi: 'बैटरी लाइफ' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'My phone keeps running out of storage.',
        functionCategory: 'Describing Tech Issue',
        exampleSentence: 'The device is running out of memory.',
      },
      {
        phrase: 'How do I back up my WhatsApp chats and photos?',
        functionCategory: 'Asking for Backup Guidance',
        exampleSentence: 'How do I back up my contacts to Google Drive?',
      },
      {
        phrase: 'Could you help me set up the new phone?',
        functionCategory: 'Requesting Setup Help (set up)',
        exampleSentence: 'Could you guide me through the initial setup?',
      },
      {
        phrase: 'It takes about twenty minutes to transfer everything.',
        functionCategory: 'Estimating Transfer Time',
        exampleSentence: 'The wireless data transfer takes 15 minutes.',
      },
    ],
    grammar: {
      title: 'Technology Phrasal Verbs & Expressing Depletion (Run out of)',
      conceptExplanation:
        '1. Depletion: "run out of + Noun" (e.g. "I ran out of battery / storage / data").\n2. Device Operations: "turn on / turn off" (power), "plug in / unplug" (cables), "log into / log out of" (accounts).\n3. Configuration: "set up + device" (prepare initial settings) / "back up + data" (create secondary copy).\n4. Separable vs Non-separable: "back my photos up" OR "back up my photos".',
      patternFormula: 'Subject + be running out of + [battery / storage / memory] | How do I + [back up / set up] + [Device / Account]?',
      contrastExamples: [
        {
          incorrect: 'My battery is finish. / My storage is end.',
          correct: 'My battery is dead. / My phone has run out of storage.',
          explanation: 'Use "run out of [storage/battery]" or "my battery has died".',
        },
        {
          incorrect: 'I need to make up my data in cloud.',
          correct: 'I need to back up my data to the cloud.',
          explanation: 'Use the specific tech phrasal verb "back up".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Liam Davies',
        text: 'Hi there! Welcome to Birmingham Tech Hub. How can I help you with your smartphone today?',
        translation: 'नमस्ते! बर्मिंघम टेक हब में आपका स्वागत है। आज मैं आपके स्मार्टफोन के साथ आपकी क्या मदद कर सकता हूँ?',
      },
      {
        speaker: 'You',
        text: 'Hi Liam! I want to upgrade to a new phone. My current phone is constantly running out of storage, the battery drains in four hours, and I need help backing up my data.',
        translation: 'नमस्ते लियाम! मैं एक नए फोन में अपग्रेड करना चाहता हूँ। मेरे वर्तमान फोन में लगातार स्टोरेज खत्म हो रही है, बैटरी चार घंटे में खत्म हो जाती है, और मुझे अपने डेटा का बैकअप लेने में मदद की ज़रूरत है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_117_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "My phone battery is ___ (run out) after only three hours of use."',
      options: [
        { id: 'opt_1', text: 'running out', isCorrect: true },
        { id: 'opt_2', text: 'runned out', isCorrect: false },
        { id: 'opt_3', text: 'runs out of', isCorrect: false },
      ],
      correctAnswer: 'running out',
      explanation: 'Use continuous "is running out" for active depletion.',
    },
    {
      id: 'cp_a2_117_2',
      type: 'multiple_choice',
      prompt: 'Which phrasal verb means to save a duplicate copy of files to avoid losing them?',
      options: [
        { id: 'opt_1', text: 'Back up', isCorrect: true },
        { id: 'opt_2', text: 'Plug in', isCorrect: false },
        { id: 'opt_3', text: 'Turn off', isCorrect: false },
      ],
      correctAnswer: 'Back up',
      explanation: '"Back up" means to copy data for security.',
    },
    {
      id: 'cp_a2_117_3',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes setting up a new smartphone?',
      options: [
        { id: 'opt_1', text: 'Could you show me how to set up the new phone and transfer my contacts?', isCorrect: true },
        { id: 'opt_2', text: 'Could you make up my phone new?', isCorrect: false },
        { id: 'opt_3', text: 'Is phone setting in?', isCorrect: false },
      ],
      correctAnswer: 'Could you show me how to set up the new phone and transfer my contacts?',
      explanation: '"Set up + device" is the natural tech phrasal verb.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_117_1',
      scenarioContext: 'Describe a smartphone memory issue.',
      prompt: 'Build: "My phone keeps running out of cloud storage space."',
      targetStructure: 'Subject + keeps running out of + noun phrase',
      wordBank: ['My', 'phone', 'keeps', 'running', 'out', 'of', 'cloud', 'storage', 'space', 'ran', 'is'],
      acceptableSolutions: [
        'My phone keeps running out of cloud storage space',
        'My phone keeps running out of cloud storage space.',
      ],
      explanation: 'Accurate phrasal verb expression with "keeps running out of".',
    },
    {
      id: 'sc_a2_117_2',
      scenarioContext: 'Request assistance with data transfer.',
      prompt: 'Build: "Could you help me back up all my photos?"',
      targetStructure: 'Could you help me + base verb + object',
      wordBank: ['Could', 'you', 'help', 'me', 'back', 'up', 'all', 'my', 'photos', 'backing', 'to'],
      acceptableSolutions: [
        'Could you help me back up all my photos',
        'Could you help me back up all my photos?',
        'Could you help me back up all my photos.',
      ],
      explanation: 'Polite request for tech data preservation.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_117_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! Welcome to Birmingham Tech Hub. What seems to be the issue with your current device, and how can I help you today?',
      partnerAudioText:
        'Hi there! Welcome to Birmingham Tech Hub. What seems to be the issue with your current device, and how can I help you today?',
      partnerQuestionHindi:
        'नमस्ते! बर्मिंघम टेक हब में आपका स्वागत है। आपके वर्तमान डिवाइस में क्या समस्या आ रही है, और आज मैं आपकी क्या मदद कर सकता हूँ?',
      expectedFunction: 'Explain Device Problems (running out of storage / battery draining rapidly / upgrade)',
      contextGoal:
        'Explain that your phone is four years old; it keeps running out of storage space, the battery drains in under four hours, and you want to upgrade to a newer model with 256GB storage.',
      targetVocabulary: ['phone keeps running out of storage space', 'battery drains within four hours', 'apps freeze and crash frequently', 'upgrade to a 256GB model'],
      suggestedResponses: [
        {
          label: 'Rich Scaffold',
          text: 'Hi Liam! My current smartphone is four years old and has several problems. It constantly runs out of internal storage, and the battery drains completely in four hours. I would like to upgrade to the new model with 256GB of storage.',
          scaffoldingLevel: 'high',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Device Faults (runs out of storage / battery / drains)',
          patterns: ['runs out of', 'running out', 'storage', 'space', 'battery', 'drains', 'charge', 'memory', 'slow', 'freeze'],
          required: true,
        },
        {
          name: 'Upgrade Goal (upgrade / new phone / model / 256GB)',
          patterns: ['upgrade', 'new phone', 'model', '256gb', 'buy', 'switch'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'storage_finish_error',
          pattern: /\bstorage is finished\b|\bbattery is finish\b/i,
          errorType: 'vocabulary',
          message: 'Use "running out of storage" or "the battery has run down / died".',
          correctionPattern: 'running out of storage',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_117_1',
        type: 'multiple_choice',
        prompt: 'Which phrase describes lack of storage memory correctly?',
        options: [
          { id: 'opt_1', text: 'My device is constantly running out of storage space.', isCorrect: true },
          { id: 'opt_2', text: 'My storage is finished now.', isCorrect: false },
          { id: 'opt_3', text: 'Phone memory dead.', isCorrect: false },
        ],
        correctAnswer: 'My device is constantly running out of storage space.',
        explanation: '"Run out of storage" is the standard idiom.',
      },
    },
    {
      id: 'turn_a2_117_2',
      turnIndex: 2,
      partnerPrompt:
        'The new model has an all-day 30-hour battery and 256GB storage, so that will solve both issues! Before we trade in your old handset, we need to ensure all your data is safe. Have you backed up your photos, contacts, and WhatsApp messages to the cloud?',
      partnerAudioText:
        'The new model has an all-day 30-hour battery and 256GB storage, so that will solve both issues! Before we trade in your old handset, we need to ensure all your data is safe. Have you backed up your photos, contacts, and WhatsApp messages to the cloud?',
      partnerQuestionHindi:
        'नए मॉडल में 30 घंटे की पूरे दिन चलने वाली बैटरी और 256GB स्टोरेज है, इसलिए यह दोनों समस्याओं का समाधान कर देगा! इससे पहले कि हम आपके पुराने हैंडसेट का ट्रेड-इन करें, हमें यह सुनिश्चित करने की ज़रूरत है कि आपका सारा डेटा सुरक्षित है। क्या आपने अपनी तस्वीरों, संपर्कों और व्हाट्सएप संदेशों का क्लाउड पर बैकअप ले लिया है?',
      expectedFunction: 'Inquire About Cloud Backup & Migration Steps (back up / wifi transfer)',
      contextGoal:
        'State that your contacts are synced with Google, but you need guidance backing up 8,000 photos and chat histories over the store Wi-Fi.',
      targetVocabulary: ['contacts are backed up to Google account', 'need to back up 8,000 high-resolution photos', 'connect to store high-speed Wi-Fi', 'transfer chat history'],
      suggestedResponses: [
        {
          label: 'Rich Scaffold',
          text: 'My contacts are already backed up to my Google account, but I have about 8,000 photos and large chat histories that need to be backed up. Could you connect my phone to your store Wi-Fi and show me how to trigger a full cloud backup?',
          scaffoldingLevel: 'high',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Backup Status (contacts / backed up / google)',
          patterns: ['contacts', 'backed up', 'google', 'account', 'already'],
          required: true,
        },
        {
          name: 'Photo / Chat Backup Request (photos / chats / cloud / wifi / show me)',
          patterns: ['photos', 'chat', 'whatsapp', 'cloud', 'wifi', 'wi-fi', 'back up', 'show me', 'trigger'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_117_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Could you help me ___ (back up) my photo library?"',
        options: [
          { id: 'opt_1', text: 'back up', isCorrect: true },
          { id: 'opt_2', text: 'backing up', isCorrect: false },
          { id: 'opt_3', text: 'backed up', isCorrect: false },
        ],
        correctAnswer: 'back up',
        explanation: 'Use the base verb after "help me".',
      },
    },
    {
      id: 'turn_a2_117_3',
      turnIndex: 3,
      partnerPrompt:
        'Of course! I have connected your phone to our ultra-fast Wi-Fi. The cloud backup is running now and will finish in about ten minutes. While that finishes, let’s open the new device. Would you like me to guide you through setting up biometric Face ID and two-factor authentication for banking?',
      partnerAudioText:
        'Of course! I have connected your phone to our ultra-fast Wi-Fi. The cloud backup is running now and will finish in about ten minutes. While that finishes, let’s open the new device. Would you like me to guide you through setting up biometric Face ID and two-factor authentication for banking?',
      partnerQuestionHindi:
        'बिल्कुल! मैंने आपके फोन को हमारे अल्ट्रा-फास्ट वाई-फाई से कनेक्ट कर दिया है। क्लाउड बैकअप अब चल रहा है और लगभग दस मिनट में पूरा हो जाएगा। जब तक वह समाप्त होता है, आइए नया डिवाइस खोलें। क्या आप चाहेंगे कि मैं बैंकिंग के लिए बायोमेट्रिक फेस आईडी और टू-फैक्टर ऑथेंटिकेशन सेट करने में आपका मार्गदर्शन करूँ?',
      expectedFunction: 'Agree to Security Setup & Inquire About Screen Time Features (set up / biometric / screen time)',
      contextGoal:
        'Agree enthusiastically to set up Face ID and two-factor authentication; ask whether the new operating system includes digital wellbeing tools to limit screen time.',
      targetVocabulary: ['set up biometric Face ID and two-factor authentication', 'security is very important for mobile banking', 'does the phone include screen time limits', 'digital wellbeing settings'],
      suggestedResponses: [
        {
          label: 'Rich Scaffold',
          text: 'Yes please! Setting up Face ID and two-factor authentication is very important for my mobile banking. Also, does this new phone have built-in digital wellbeing settings to help me monitor and reduce daily screen time?',
          scaffoldingLevel: 'high',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Security Agreement (face id / two-factor / security / banking / set up)',
          patterns: ['face id', 'two-factor', 'authentication', 'security', 'banking', 'set up', 'yes please'],
          required: true,
        },
        {
          name: 'Screen Time / Wellbeing Inquiry (screen time / wellbeing / limits / monitor)',
          patterns: ['screen time', 'wellbeing', 'limits', 'monitor', 'apps', 'features', 'reduce'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_117_3',
        type: 'multiple_choice',
        prompt: 'Which sentence asks about device screen-time controls clearly?',
        options: [
          { id: 'opt_1', text: 'Does this new phone have settings to track and limit my screen time?', isCorrect: true },
          { id: 'opt_2', text: 'Is screen time making stop?', isCorrect: false },
          { id: 'opt_3', text: 'How phone look my eye?', isCorrect: false },
        ],
        correctAnswer: 'Does this new phone have settings to track and limit my screen time?',
        explanation: 'Clear and natural technical inquiry.',
      },
    },
    {
      id: 'turn_a2_117_4',
      turnIndex: 4,
      partnerPrompt:
        'Yes, the Screen Time dashboard allows you to set daily app timers and bedtime downtime schedules! All your data, photos, and apps have now transferred completely to your new phone, and your old phone has been safely wiped for trade-in credit. Here is your receipt and phone case!',
      partnerAudioText:
        'Yes, the Screen Time dashboard allows you to set daily app timers and bedtime downtime schedules! All your data, photos, and apps have now transferred completely to your new phone, and your old phone has been safely wiped for trade-in credit. Here is your receipt and phone case!',
      partnerQuestionHindi:
        'हाँ, स्क्रीन टाइम डैशबोर्ड आपको दैनिक ऐप टाइमर और सोने के समय के लिए डाउनटाइम शेड्यूल सेट करने की अनुमति देता है! आपका सारा डेटा, तस्वीरें और ऐप अब पूरी तरह से आपके नए फोन में स्थानांतरित हो गए हैं, और ट्रेड-इन क्रेडिट के लिए आपके पुराने फोन को सुरक्षित रूप से रीसेट कर दिया गया है। यहाँ आपकी रसीद और फोन केस है!',
      expectedFunction: 'Express Gratitude, Collect New Device & Conclude Store Visit',
      contextGoal:
        'Thank Liam for the seamless data transfer, the screen time tips, and the trade-in discount; wish him a great day.',
      targetVocabulary: ['thank you Liam for making the data transfer so seamless', 'appreciate the screen time advice', 'delighted with the new smartphone', 'have a wonderful day'],
      suggestedResponses: [
        {
          label: 'Rich Scaffold',
          text: 'Thank you so much Liam for making the data transfer so seamless and showing me the screen time features! The new phone feels incredibly fast. I appreciate your expert help—have a wonderful afternoon!',
          scaffoldingLevel: 'high',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Departure',
          patterns: ['thank you', 'thanks', 'liam', 'seamless', 'transfer', 'fast', 'appreciate', 'help', 'wonderful afternoon', 'have a great day'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_117_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Thank you for making the transfer ___ (seamless)."',
        options: [
          { id: 'opt_1', text: 'seamless', isCorrect: true },
          { id: 'opt_2', text: 'seamlessly', isCorrect: false },
          { id: 'opt_3', text: 'seam', isCorrect: false },
        ],
        correctAnswer: 'seamless',
        explanation: 'Structure: "make + object + adjective" ("make the transfer seamless").',
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
