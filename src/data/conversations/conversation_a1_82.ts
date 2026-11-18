import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_82: ConversationDefinition = {
  id: 'conv_a1_82',
  title: 'Reporting Emergencies, Urgent Assistance & Roadside Breakdowns',
  cefr: 'A1',
  unitId: 'unit_a1_6',
  lessonLinks: ['lesson_a1_6_82'],
  estimatedMinutes: 5,
  scenario:
    'While driving on the M6 Motorway near Coventry, your vehicle suffers a sudden tire blowout and engine breakdown. You dial Roadside Assistance and speak with Emergency Dispatcher Claire Higgins to report the breakdown, give your exact highway marker location, request a recovery tow truck, and confirm emergency safety precautions.',
  communicativeGoals: [
    'Report an urgent vehicular breakdown and describe mechanical faults (punctured tire, overheating engine)',
    'Provide exact location details using motorway markers, junction numbers, and directional orientation ("Northbound near Junction 3")',
    'Request towing assistance and emergency passenger pickup',
    'Follow critical roadside safety instructions (hazard lights, high-visibility vest, standing behind safety barrier)',
  ],
  canDoStatements: [
    'Can call emergency or roadside assistance to report a car breakdown',
    'Can describe vehicle issues, location landmarks, and passenger count accurately',
    'Can understand and acknowledge safety procedures during highway emergencies',
  ],
  characters: [
    {
      id: 'char_claire_higgins',
      name: 'Claire Higgins',
      role: 'National Roadside Emergency Dispatcher',
      avatar: '🚨',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'breakdown',
        ipa: '/ˈbreɪkdaʊn/',
        partOfSpeech: 'noun',
        meaning: 'A mechanical failure or malfunction of a vehicle or machine',
        exampleSentence: 'My car suffered a sudden breakdown on the hard shoulder.',
        translations: { hi: 'गाड़ी खराब होना / ब्रेकडाउन' },
      },
      {
        word: 'puncture',
        ipa: '/ˈpʌŋktʃər/',
        partOfSpeech: 'noun',
        meaning: 'A small hole in a tire causing loss of air',
        exampleSentence: 'The rear left tire has a severe puncture.',
        translations: { hi: 'पंचर' },
      },
      {
        word: 'shoulder',
        ipa: '/ˈʃoʊldər/',
        partOfSpeech: 'noun',
        meaning: 'An emergency stopping lane beside a main highway or motorway',
        exampleSentence: 'I have safely pulled over onto the hard shoulder.',
        translations: { hi: 'सड़क का किनारा / आपातकालीन लेन' },
      },
      {
        word: 'tow',
        ipa: '/toʊ/',
        partOfSpeech: 'verb',
        meaning: 'Pull a vehicle with another vehicle or truck',
        exampleSentence: 'We need a recovery vehicle to tow our car to the nearest garage.',
        translations: { hi: 'खींचना / टो करना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'My car has broken down on the...',
        functionCategory: 'Reporting Breakdown',
        exampleSentence: 'My car has broken down on the M6 Northbound hard shoulder.',
      },
      {
        phrase: 'We are located between Junction...',
        functionCategory: 'Location Pinpointing',
        exampleSentence: 'We are located between Junction 3 and Junction 4 near marker 102.',
      },
      {
        phrase: 'Could you dispatch a recovery truck?',
        functionCategory: 'Requesting Service',
        exampleSentence: 'Could you dispatch a recovery truck with a tire replacement?',
      },
      {
        phrase: 'We are standing behind the safety barrier.',
        functionCategory: 'Safety Compliance',
        exampleSentence: 'All passengers are standing behind the metal safety barrier.',
      },
    ],
    grammar: {
      title: 'Present Perfect for Recent Emergencies: "Has broken down" / "Has stopped"',
      conceptExplanation:
        'Use the Present Perfect to report immediate events that affect the current situation: "My engine has overheated", "The tire has burst", "We have pulled over".',
      patternFormula: 'Subject + have / has + Past Participle [broken down / overheated / stopped]',
      contrastExamples: [
        {
          incorrect: 'My car is broke down on road yesterday right now.',
          correct: 'My car has broken down on the hard shoulder.',
          explanation: 'Use "has broken down" for recent mechanical failure.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Claire Higgins',
        text: 'Emergency Roadside Assistance, Claire speaking. Are you and your passengers in a safe location?',
        translation: 'इमरजेंसी रोडसाइड असिस्टेंस, क्लेयर बोल रही हूँ। क्या आप और आपके सह-यात्री सुरक्षित स्थान पर हैं?',
      },
      {
        speaker: 'You',
        text: 'Hello Claire. My car has broken down on the M6 Northbound between Junction 3 and 4. We had a tire puncture and smoke is coming from the engine.',
        translation: 'नमस्ते क्लेयर। मेरी कार M6 नॉर्थबाउंड पर जंक्शन 3 और 4 के बीच खराब हो गई है। हमारा टायर पंचर हो गया और इंजन से धुआं निकल रहा है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_82_1',
      type: 'fill_blank',
      prompt: 'Complete the emergency report: "My car ___ broken down on the motorway."',
      options: [
        { id: 'opt_1', text: 'has', isCorrect: true },
        { id: 'opt_2', text: 'is having', isCorrect: false },
        { id: 'opt_3', text: 'are', isCorrect: false },
      ],
      correctAnswer: 'has',
      explanation: 'Singular subject "My car" takes "has broken down".',
    },
    {
      id: 'cp_a1_82_2',
      type: 'multiple_choice',
      prompt: 'Which sentence states your emergency highway position clearly?',
      options: [
        { id: 'opt_1', text: 'We are on the M6 Northbound hard shoulder, two miles past Junction 3.', isCorrect: true },
        { id: 'opt_2', text: 'Car stopped somewhere on big fast road.', isCorrect: false },
        { id: 'opt_3', text: 'We are near grass and asphalt.', isCorrect: false },
      ],
      correctAnswer: 'We are on the M6 Northbound hard shoulder, two miles past Junction 3.',
      explanation: 'Precise motorway identifier, direction, and mile marker reference.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_82_1',
      scenarioContext: 'Report safety compliance to dispatcher.',
      prompt: 'Build: "We are standing behind the metal safety barrier."',
      targetStructure: 'We are standing behind the metal safety barrier',
      wordBank: ['We', 'are', 'standing', 'behind', 'the', 'metal', 'safety', 'barrier', 'stood', 'on'],
      acceptableSolutions: [
        'We are standing behind the metal safety barrier',
        'We are standing behind the metal safety barrier.',
      ],
      explanation: 'Continuous action showing safety status.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_82_1',
      turnIndex: 1,
      partnerPrompt:
        'National Roadside Assistance, Claire speaking. Are you in a safe position, and what emergency has occurred with your vehicle?',
      partnerAudioText:
        'National Roadside Assistance, Claire speaking. Are you in a safe position, and what emergency has occurred with your vehicle?',
      partnerQuestionHindi:
        'नेशनल रोडसाइड असिस्टेंस, क्लेयर बोल रही हूँ। क्या आप सुरक्षित स्थिति में हैं, और आपके वाहन के साथ क्या आपातकालीन स्थिति उत्पन्न हुई है?',
      expectedFunction: 'Report Breakdown, Mechanical Fault (Blowout & Engine Smoke) & Safety State',
      contextGoal:
        'State that your car has broken down on the hard shoulder due to a rear tire puncture and overheating engine, and confirm everyone is outside the car.',
      targetVocabulary: ['car has broken down on hard shoulder', 'rear tire puncture', 'engine is overheating', 'everyone is outside vehicle'],
      suggestedResponses: [
        {
          label: 'Spontaneous Multi-Turn',
          text: 'Hello Claire! My car has broken down on the hard shoulder of the M6 motorway. We suffered a sudden tire puncture and the engine is overheating, but all passengers have exited the vehicle safely.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Breakdown & Safety State',
          patterns: [
            'broken down',
            'm6',
            'hard shoulder',
            'shoulder',
            'tire',
            'puncture',
            'engine',
            'passengers',
            'safe',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_82_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "All passengers have ___ the car safely."',
        options: [
          { id: 'opt_1', text: 'exited', isCorrect: true },
          { id: 'opt_2', text: 'exit', isCorrect: false },
          { id: 'opt_3', text: 'exiting', isCorrect: false },
        ],
        correctAnswer: 'exited',
        explanation: 'Past participle with "have": "have exited".',
      },
    },
    {
      id: 'turn_a1_82_2',
      turnIndex: 2,
      partnerPrompt:
        'Good to hear you are out of the vehicle. What is your exact location on the M6, what is your vehicle registration number, and how many passengers are with you?',
      partnerAudioText:
        'Good to hear you are out of the vehicle. What is your exact location on the M6, what is your vehicle registration number, and how many passengers are with you?',
      partnerQuestionHindi:
        'यह सुनकर अच्छा लगा कि आप वाहन से बाहर हैं। M6 पर आपका सटीक स्थान क्या है, आपका वाहन पंजीकरण नंबर क्या है, और आपके साथ कितने यात्री हैं?',
      expectedFunction: 'Provide Exact Highway Marker, Registration & Passenger Count',
      contextGoal:
        'State you are on M6 Northbound, 1 mile past Junction 3 near marker post 84B, driving a silver Ford Focus (reg: AB21 XYZ), with 2 passengers.',
      targetVocabulary: ['M6 Northbound past Junction 3', 'marker post 84B', 'silver Ford Focus registration AB21 XYZ', 'two passengers total'],
      suggestedResponses: [
        {
          label: 'Spontaneous Multi-Turn',
          text: 'We are on the M6 Northbound, about one mile past Junction 3 near marker 84B. The car is a silver Ford Focus, registration AB21 XYZ, and there are two passengers with me.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Location & Vehicle Specifics',
          patterns: [
            'm6',
            'northbound',
            'junction 3',
            'marker',
            'silver',
            'ford',
            'ab21 xyz',
            'registration',
            'two passengers',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_82_2',
        type: 'multiple_choice',
        prompt: 'Which statement provides complete breakdown location details?',
        options: [
          { id: 'opt_1', text: 'M6 Northbound, one mile after Junction 3, marker 84B with two passengers.', isCorrect: true },
          { id: 'opt_2', text: 'Somewhere on the highway with grass.', isCorrect: false },
          { id: 'opt_3', text: 'Car stopped near trees on road.', isCorrect: false },
        ],
        correctAnswer: 'M6 Northbound, one mile after Junction 3, marker 84B with two passengers.',
        explanation: 'Accurate and structured emergency coordinates.',
      },
    },
    {
      id: 'turn_a1_82_3',
      turnIndex: 3,
      partnerPrompt:
        'Thank you, I have your exact location. I am dispatching an emergency flatbed tow truck right now. The driver, Tom, will arrive in approximately 25 minutes. While you wait, please confirm what safety precautions you are following.',
      partnerAudioText:
        'Thank you, I have your exact location. I am dispatching an emergency flatbed tow truck right now. The driver, Tom, will arrive in approximately 25 minutes. While you wait, please confirm what safety precautions you are following.',
      partnerQuestionHindi:
        'धन्यवाद, मुझे आपका सटीक स्थान मिल गया है। मैं अभी एक आपातकालीन फ्लैटबेड टो ट्रक भेज रही हूँ। ड्राइवर, टॉम, लगभग 25 मिनट में आ जाएगा। जब तक आप प्रतीक्षा करते हैं, कृपया पुष्टि करें कि आप किन सुरक्षा सावधानियों का पालन कर रहे हैं।',
      expectedFunction: 'Confirm Highway Safety Protocol (Hazard Lights, Vests, Behind Barrier)',
      contextGoal:
        'Confirm hazard lights are flashing, you are wearing reflective high-visibility vests, and everyone is standing well behind the metal crash barrier on the embankment.',
      targetVocabulary: ['hazard lights are flashing', 'wearing high-visibility vests', 'standing behind metal safety barrier', 'away from moving traffic'],
      suggestedResponses: [
        {
          label: 'Spontaneous Multi-Turn',
          text: 'Our hazard warning lights are on, both of us are wearing yellow high-visibility vests, and we are standing on the grass embankment safely behind the metal barrier.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Safety Actions',
          patterns: [
            'hazard',
            'lights',
            'vests',
            'high-visibility',
            'barrier',
            'standing',
            'embankment',
            'grass',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_82_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We turned on the hazard ___ lights."',
        options: [
          { id: 'opt_1', text: 'warning', isCorrect: true },
          { id: 'opt_2', text: 'warned', isCorrect: false },
          { id: 'opt_3', text: 'warn', isCorrect: false },
        ],
        correctAnswer: 'warning',
        explanation: 'Standard term: "hazard warning lights".',
      },
    },
    {
      id: 'turn_a1_82_4',
      turnIndex: 4,
      partnerPrompt:
        'You are doing everything correctly! Tom’s truck number is TK-402, and he has your mobile number to call when he approaches Junction 3. Stay behind that barrier until he arrives. Is there anything else you need right now?',
      partnerAudioText:
        'You are doing everything correctly! Tom’s truck number is TK-402, and he has your mobile number to call when he approaches Junction 3. Stay behind that barrier until he arrives. Is there anything else you need right now?',
      partnerQuestionHindi:
        'आप सब कुछ सही कर रहे हैं! टॉम का ट्रक नंबर TK-402 है, और जब वह जंक्शन 3 के पास पहुंचेगा तो कॉल करने के लिए उसके पास आपका मोबाइल नंबर है। जब तक वह न आ जाए तब तक उस बैरियर के पीछे ही रहें। क्या आपको अभी किसी और चीज़ की ज़रूरत है?',
      expectedFunction: 'Acknowledge Details, Express Reassurance & Close Call',
      contextGoal:
        'Thank Claire for the swift dispatch, confirm you have Tom’s truck number (TK-402), and state you will wait safely behind the barrier.',
      targetVocabulary: ['thank you Claire for swift response', 'note Tom\'s truck TK-402', 'will keep phone on', 'stay behind barrier'],
      suggestedResponses: [
        {
          label: 'Spontaneous Multi-Turn',
          text: 'Everything is clear! I have noted Tom’s truck number TK-402 and will keep my mobile handy. Thank you so much Claire for your swift help and calm guidance!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Emergency Acknowledgment',
          patterns: [
            'tk-402',
            'phone',
            'mobile',
            'thank you',
            'claire',
            'swift',
            'help',
            'barrier',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_82_4',
        type: 'multiple_choice',
        prompt: 'Which closing appropriately wraps up an emergency dispatch call?',
        options: [
          { id: 'opt_1', text: 'Thank you for the quick dispatch Claire, I will wait safely for Tom.', isCorrect: true },
          { id: 'opt_2', text: 'Okay bye car bye road.', isCorrect: false },
          { id: 'opt_3', text: 'I walk in middle traffic now.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for the quick dispatch Claire, I will wait safely for Tom.',
        explanation: 'Calm, clear, and reassuring closure.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 70,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 60,
  },
};
