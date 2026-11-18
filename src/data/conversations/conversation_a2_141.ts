import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_141: ConversationDefinition = {
  id: 'conv_a2_141',
  title: 'Housing Problems, Repairs & Landlord Negotiations',
  cefr: 'A2',
  unitId: 'unit_a2_10',
  lessonLinks: ['lesson_a2_10_141'],
  estimatedMinutes: 5,
  scenario:
    'You are on a call with property manager Arthur Pendelton from Sovereign Lettings in Bristol. You need to report a leaking water heater in your utility closet and a radiator that is not heating. Use structures for expressing repair needs ("needs fixing", "needs to be replaced"), explain the urgency, schedule a plumber visit, and confirm lease responsibility for maintenance costs.',
  communicativeGoals: [
    'Describe household faults and maintenance issues with specific vocabulary (leak, radiator, water heater, dripping)',
    'Use "need + -ing" and "need to be + past participle" to express repair requirements',
    'Emphasize the urgency of a plumbing/heating repair politely',
    'Clarify technician visit times, landlord obligations, and lease maintenance coverage',
  ],
  canDoStatements: [
    'Can describe household defects, appliance breakdowns, and maintenance problems clearly',
    'Can use structures like "needs repairing" or "needs to be replaced"',
    'Can negotiate repair appointments and clarify tenancy maintenance terms with a property manager',
  ],
  characters: [
    {
      id: 'char_arthur_pendelton',
      name: 'Arthur Pendelton',
      role: 'Property Manager & Landlord Representative',
      avatar: '🏡',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'landlord',
        ipa: '/ˈlændlɔːd/',
        partOfSpeech: 'noun',
        meaning: 'A person or agency that rents out an apartment or house to a tenant',
        exampleSentence: 'The landlord is responsible for structural and heating repairs.',
        translations: { hi: 'मकान मालिक' },
      },
      {
        word: 'maintenance',
        ipa: '/ˈmeɪntənəns/',
        partOfSpeech: 'noun',
        meaning: 'The process of maintaining or preserving building equipment and fixtures',
        exampleSentence: 'Routine plumbing maintenance is covered under our tenancy agreement.',
        translations: { hi: 'रखरखाव / देखभाल' },
      },
      {
        word: 'radiator',
        ipa: '/ˈreɪdieɪtə/',
        partOfSpeech: 'noun',
        meaning: 'A heating device consisting of pipes through which hot water or steam passes',
        exampleSentence: 'The bedroom radiator is cold and needs bleeding.',
        translations: { hi: 'रेडिएटर / हीटर' },
      },
      {
        word: 'plumber',
        ipa: '/ˈplʌmə/',
        partOfSpeech: 'noun',
        meaning: 'A person whose job is to install and repair pipes and water fixtures',
        exampleSentence: 'The property manager booked a certified plumber for tomorrow morning.',
        translations: { hi: 'नलसाज / प्लंबर' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'The water heater is leaking and needs replacing.',
        functionCategory: 'Expressing Repair Need with "need + -ing"',
        exampleSentence: 'The kitchen faucet is dripping and needs fixing.',
      },
      {
        phrase: 'The bathroom radiator needs to be repaired urgently.',
        functionCategory: 'Expressing Passive Repair Need with "need to be + past participle"',
        exampleSentence: 'The lock needs to be replaced before tonight.',
      },
      {
        phrase: 'Could you please send an emergency technician today?',
        functionCategory: 'Requesting Urgent Technician Visit',
        exampleSentence: 'Could you arrange an electrician as soon as possible?',
      },
      {
        phrase: 'As stated in our lease agreement, maintenance costs are covered by the landlord.',
        functionCategory: 'Clarifying Tenancy Terms & Costs',
        exampleSentence: 'Is this repair covered by the rental agency?',
      },
    ],
    grammar: {
      title: 'Describing Things That Need Repair: need + -ing vs. need to be + past participle',
      conceptExplanation:
        '1. "need + [Verb-ing]": Used when an object or appliance requires maintenance (e.g., "The pipe needs fixing", "The heater needs replacing").\n2. "need to be + [Past Participle]": Passive equivalent (e.g., "The pipe needs to be fixed", "The heater needs to be replaced").\n3. Note: Both structures mean the same thing and are used frequently in housing and maintenance.',
      patternFormula: 'Subject (Appliance/Fixture) + needs + [Verb-ing] / needs to be + [Past Participle]',
      contrastExamples: [
        {
          incorrect: 'The radiator needs fix.',
          correct: 'The radiator needs fixing. / The radiator needs to be fixed.',
          explanation: 'Use either the "-ing" form ("fixing") or "to be + past participle" ("to be fixed").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Arthur Pendelton',
        text: 'Hello, Sovereign Lettings. Arthur speaking. How can I help you with your flat today?',
        translation: 'नमस्ते, सॉवरेन लेटिंग्स। आर्थर बात कर रहा हूँ। आज आपके फ्लैट के संबंध में मैं आपकी क्या मदद कर सकता हूँ?',
      },
      {
        speaker: 'You',
        text: 'Good morning, Arthur. I am calling regarding Flat 4B on High Street. Our water heater is leaking water onto the floor and needs fixing immediately, and the bathroom radiator needs to be replaced.',
        translation: 'शुभ प्रभात, आर्थर। मैं हाई स्ट्रीट पर फ्लैट 4B के संबंध में कॉल कर रहा हूँ। हमारा वाटर हीटर फर्श पर पानी लीक कर रहा है और इसे तुरंत ठीक करने की आवश्यकता है, और बाथरूम रेडिएटर को बदलने की आवश्यकता है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_141_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "The kitchen pipe is dripping; it needs ___ (fixing / fix / to fix)."',
      options: [
        { id: 'opt_1', text: 'fixing', isCorrect: true },
        { id: 'opt_2', text: 'fix', isCorrect: false },
        { id: 'opt_3', text: 'fixed', isCorrect: false },
      ],
      correctAnswer: 'fixing',
      explanation: 'Use "needs + -ing" ("needs fixing") to describe an object requiring repair.',
    },
    {
      id: 'cp_a2_141_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "need to be + past participle"?',
      options: [
        { id: 'opt_1', text: 'The heater needs to be replaced as soon as possible.', isCorrect: true },
        { id: 'opt_2', text: 'The heater needs to be replace as soon as possible.', isCorrect: false },
        { id: 'opt_3', text: 'The heater needs be replaced quickly.', isCorrect: false },
      ],
      correctAnswer: 'The heater needs to be replaced as soon as possible.',
      explanation: 'Formula: "needs to be + past participle" ("needs to be replaced").',
    },
    {
      id: 'cp_a2_141_3',
      type: 'multiple_choice',
      prompt: 'How do you ask if maintenance is covered under the tenancy agreement?',
      options: [
        { id: 'opt_1', text: 'Is this plumbing repair covered under our lease agreement?', isCorrect: true },
        { id: 'opt_2', text: 'Why I must pay for broken pipe now?', isCorrect: false },
        { id: 'opt_3', text: 'You take money from my bank for pipe?', isCorrect: false },
      ],
      correctAnswer: 'Is this plumbing repair covered under our lease agreement?',
      explanation: 'Polite and formal question for lease inquiries.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_141_1',
      scenarioContext: 'Report a leaking boiler that needs repair.',
      prompt: 'Build: "The water heater is leaking and needs fixing."',
      targetStructure: 'Subject + is leaking + and + needs + verb-ing',
      wordBank: ['The', 'water', 'heater', 'is', 'leaking', 'and', 'needs', 'fixing', 'fix', 'leak'],
      acceptableSolutions: [
        'The water heater is leaking and needs fixing',
        'The water heater is leaking and needs fixing.',
      ],
      explanation: 'Uses present continuous + "needs fixing".',
    },
    {
      id: 'sc_a2_141_2',
      scenarioContext: 'Ask for an emergency technician visit.',
      prompt: 'Build: "Could you send an emergency plumber this afternoon?"',
      targetStructure: 'Could you + send + article + adjective + noun + time expression',
      wordBank: ['Could', 'you', 'send', 'an', 'emergency', 'plumber', 'this', 'afternoon', 'sending', 'can'],
      acceptableSolutions: [
        'Could you send an emergency plumber this afternoon',
        'Could you send an emergency plumber this afternoon?',
      ],
      explanation: 'Polite request for emergency maintenance.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_141_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello, Sovereign Lettings, Arthur speaking. How can I assist you with your tenancy today?',
      partnerAudioText:
        'Hello, Sovereign Lettings, Arthur speaking. How can I assist you with your tenancy today?',
      partnerQuestionHindi:
        'नमस्ते, सॉवरेन लेटिंग्स, आर्थर बात कर रहा हूँ। आज आपकी किरायेदारी में मैं आपकी क्या मदद कर सकता हूँ?',
      expectedFunction: 'Report Housing Faults with Repair Structures (Flat 4B / water heater leaking / needs fixing / radiator needs to be repaired)',
      contextGoal:
        'Identify your apartment (Flat 4B) and explain that the water heater is leaking water onto the utility room floor and the radiator needs fixing.',
      targetVocabulary: ['calling from Flat 4B', 'water heater is leaking water', 'needs fixing urgently', 'radiator needs to be repaired'],
      suggestedResponses: [
        {
          label: 'Comprehensive Fault Report',
          text: 'Good morning Arthur. I am calling from Flat 4B on High Street. The water heater in our utility closet is leaking onto the floor and needs fixing immediately, and the bathroom radiator also needs to be repaired.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Fault Report',
          text: 'Hi Arthur, this is Flat 4B. The water heater is leaking and needs urgent repair before it causes water damage.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Flat & Appliance (flat 4b / flat / water heater / heater / boiler / radiator / pipe / utility room)',
          patterns: ['flat 4b', 'flat', 'water heater', 'heater', 'boiler', 'radiator', 'pipe', 'utility room', 'bathroom'],
          required: true,
        },
        {
          name: 'Fault & Repair Structure (leaking / leak / needs fixing / needs repair / needs to be repaired / broken / cold / not working)',
          patterns: ['leaking', 'leak', 'needs fixing', 'needs repair', 'needs to be repaired', 'needs to be fixed', 'broken', 'cold', 'not working', 'damage'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'needs_base_verb_rule',
          pattern: /\bneeds fix\b|\bneeds replace\b/i,
          errorType: 'grammar',
          message: 'Say "needs fixing" or "needs to be fixed".',
          correctionPattern: 'needs fixing',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_141_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "The boiler needs ___ (replacing / replace)."',
        options: [
          { id: 'opt_1', text: 'replacing', isCorrect: true },
          { id: 'opt_2', text: 'replace', isCorrect: false },
          { id: 'opt_3', text: 'to replacing', isCorrect: false },
        ],
        correctAnswer: 'replacing',
        explanation: 'Use "needs + -ing" ("needs replacing").',
      },
    },
    {
      id: 'turn_a2_141_2',
      turnIndex: 2,
      partnerPrompt:
        'A leaking water heater is certainly an urgent safety priority. Have you turned off the main water valve to prevent flooding, and is there any electrical hazard?',
      partnerAudioText:
        'A leaking water heater is certainly an urgent safety priority. Have you turned off the main water valve to prevent flooding, and is there any electrical hazard?',
      partnerQuestionHindi:
        'लीक होने वाला वाटर हीटर निश्चित रूप से एक जरूरी सुरक्षा प्राथमिकता है। क्या आपने बाढ़ को रोकने के लिए मुख्य पानी का वाल्व बंद कर दिया है, और क्या कोई बिजली का खतरा है?',
      expectedFunction: 'Describe Safety Actions Taken & Request Technician Visit (turned off valve / placed towels / need technician today)',
      contextGoal:
        'Confirm that you turned off the valve, placed towels on the floor, and ask if a plumber can come today.',
      targetVocabulary: ['turned off the water isolation valve', 'placed towels and a bucket', 'no direct electrical hazard', 'Could you send a plumber today?'],
      suggestedResponses: [
        {
          label: 'Safety Status with Urgent Request',
          text: 'Yes, I turned off the isolation valve right away and put down towels and a bucket. There is no immediate electrical hazard, but could you send an emergency plumber this afternoon?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Confirmation',
          text: 'I turned off the main valve and contained the water. Could a technician come today to inspect it?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Safety Action (turned off / shut off / valve / towels / bucket / safe / water / contained)',
          patterns: ['turned off', 'shut off', 'valve', 'towels', 'bucket', 'safe', 'water', 'contained', 'no hazard'],
          required: true,
        },
        {
          name: 'Technician Request (plumber / technician / today / afternoon / visit / send / come)',
          patterns: ['plumber', 'technician', 'today', 'afternoon', 'visit', 'send', 'come', 'emergency'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_141_2',
        type: 'multiple_choice',
        prompt: 'Which sentence is best to confirm emergency action?',
        options: [
          { id: 'opt_1', text: 'I turned off the main valve and put down towels.', isCorrect: true },
          { id: 'opt_2', text: 'I am close water now.', isCorrect: false },
          { id: 'opt_3', text: 'Water stop by me already.', isCorrect: false },
        ],
        correctAnswer: 'I turned off the main valve and put down towels.',
        explanation: 'Clear Past Simple action describing safety steps taken.',
      },
    },
    {
      id: 'turn_a2_141_3',
      turnIndex: 3,
      partnerPrompt:
        'Well done on shutting off the valve. I have booked our on-call contractor, Swift Plumbing, for today between 2:00 PM and 4:00 PM. Will someone be at the flat to grant access?',
      partnerAudioText:
        'Well done on shutting off the valve. I have booked our on-call contractor, Swift Plumbing, for today between 2:00 PM and 4:00 PM. Will someone be at the flat to grant access?',
      partnerQuestionHindi:
        'वाल्व बंद करने पर बहुत अच्छा किया। मैंने आज दोपहर 2:00 बजे से 4:00 बजे के बीच हमारे ऑन-कॉल ठेकेदार, स्विफ्ट प्लंबिंग को बुक किया है। क्या फ्लैट में पहुंच प्रदान करने के लिए कोई मौजूद रहेगा?',
      expectedFunction: 'Confirm Availability & Clarify Lease Payment Responsibility (I will be home / lease agreement / covered by landlord?)',
      contextGoal:
        'Confirm you will be home between 2:00 and 4:00 PM, and ask Arthur to confirm that the repair cost is covered by the landlord under the lease agreement.',
      targetVocabulary: ['I will be home all afternoon', 'grant access to the plumber', 'As stated in our lease agreement', 'Is this maintenance cost covered by the landlord?'],
      suggestedResponses: [
        {
          label: 'Availability & Tenancy Clarification',
          text: 'I will be at home between 2:00 PM and 4:00 PM to let the plumber in. Just to confirm, as stated in our tenancy agreement, is this emergency repair fully covered by the landlord?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Confirmation with Cost Inquiry',
          text: 'Yes, I will be there to open the door. Could you confirm that the landlord covers the repair cost?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Presence / Access (i will be home / at home / open door / grant access / there / 2:00 / 4:00 / afternoon)',
          patterns: ['i will be home', 'at home', 'open door', 'grant access', 'there', '2:00', '4:00', 'afternoon', 'present'],
          required: true,
        },
        {
          name: 'Cost & Lease (covered / landlord / lease / tenancy / agreement / cost / pay / free / ?)',
          patterns: ['covered', 'landlord', 'lease', 'tenancy', 'agreement', 'cost', 'pay', 'charge', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_141_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Is this repair covered ___ (by / from) the landlord?"',
        options: [
          { id: 'opt_1', text: 'by', isCorrect: true },
          { id: 'opt_2', text: 'from', isCorrect: false },
          { id: 'opt_3', text: 'with', isCorrect: false },
        ],
        correctAnswer: 'by',
        explanation: 'Passive structure: "covered by the landlord".',
      },
    },
    {
      id: 'turn_a2_141_4',
      turnIndex: 4,
      partnerPrompt:
        'Yes, absolutely. Under your tenancy agreement, all boiler and radiator repairs are 100% covered by the property owner. You will not have to pay anything. The engineer will call you when they are 10 minutes away.',
      partnerAudioText:
        'Yes, absolutely. Under your tenancy agreement, all boiler and radiator repairs are 100% covered by the property owner. You will not have to pay anything. The engineer will call you when they are 10 minutes away.',
      partnerQuestionHindi:
        'हाँ, बिल्कुल। आपके किरायेदारी समझौते के तहत, सभी बॉयलर और रेडिएटर मरम्मत का 100% खर्च संपत्ति के मालिक द्वारा वहन किया जाता है। आपको कुछ भी भुगतान नहीं करना होगा। जब इंजीनियर 10 मिनट दूर होगा तो वह आपको कॉल करेगा।',
      expectedFunction: 'Acknowledge, Express Relief & Close Professionally (Thank you Arthur / appreciate prompt response / see the plumber at 2)',
      contextGoal:
        'Thank Arthur for his prompt support and reassurance regarding the cost, and close the call professionally.',
      targetVocabulary: ['Thank you very much Arthur', 'appreciate your quick response', 'relieved to hear that', 'I will wait for the plumber’s call'],
      suggestedResponses: [
        {
          label: 'Polite Reassurance Closing',
          text: 'Thank you very much for sorting this out so quickly, Arthur. I really appreciate your prompt help. I will wait for the engineer’s call this afternoon. Have a good day!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Closing',
          text: 'Thank you Arthur. I appreciate your quick assistance. Have a nice day!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Closure (thank you / thanks / arthur / appreciate / quick / prompt / good day / goodbye)',
          patterns: ['thank you', 'thanks', 'arthur', 'appreciate', 'quick', 'prompt', 'good day', 'have a nice day', 'goodbye', 'bye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_141_4',
        type: 'multiple_choice',
        prompt: 'Which is the best closing remark for this tenant-landlord call?',
        options: [
          { id: 'opt_1', text: 'Thank you for arranging this so quickly, Arthur. Have a great day!', isCorrect: true },
          { id: 'opt_2', text: 'I am hang up phone now.', isCorrect: false },
          { id: 'opt_3', text: 'Goodbye you must fix it.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for arranging this so quickly, Arthur. Have a great day!',
        explanation: 'Polite and professional relationship management with property managers.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 75,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 60,
  },
};
