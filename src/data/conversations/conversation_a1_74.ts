import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_74: ConversationDefinition = {
  id: 'conv_a1_74',
  title: 'Emergencies, Urgent Reporting, First Aid & Calling for Help',
  cefr: 'A1',
  unitId: 'unit_a1_5',
  lessonLinks: ['lesson_a1_5_74'],
  estimatedMinutes: 5,
  scenario:
    'You witness a bicycle and pedestrian collision on Victoria Street near the central library in Bristol. You immediately dial 999 to reach the emergency services operator. You state the required service (Ambulance), give the precise street intersection location, describe the injured person\'s condition (conscious, bleeding from the arm, experiencing leg pain), and follow the dispatcher\'s first-aid instructions calmly.',
  communicativeGoals: [
    'Dial emergency services and state the required service immediately ("Ambulance, please")',
    'Provide exact location coordinates, landmarks, and street intersections ("On Victoria Street near the corner of Library Lane")',
    'Describe the victim\'s physical condition, consciousness, and injuries calmly ("He is conscious and breathing, but has a bleeding arm and leg pain")',
    'Follow first-aid dispatcher instructions and confirm stay on the line until paramedics arrive',
  ],
  canDoStatements: [
    'Can call emergency services (999/112/911) and state the emergency type (CEFR A1.2)',
    'Can give clear street locations and nearby landmarks',
    'Can describe injuries, consciousness, and follow dispatcher first-aid commands',
  ],
  characters: [
    {
      id: 'char_dan_dispatcher',
      name: 'Dan',
      role: 'Emergency 999 Dispatcher',
      avatar: '🚨',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'emergency',
        ipa: '/ɪˈmɜːrdʒənsi/',
        partOfSpeech: 'noun',
        meaning: 'A serious, unexpected, and often dangerous situation requiring immediate action',
        exampleSentence: 'Emergency dispatchers coordinate ambulances, police, and fire rescue.',
        translations: { hi: 'आपातकाल / गंभीर संकट' },
      },
      {
        word: 'ambulance',
        ipa: '/ˈæmbjʊləns/',
        partOfSpeech: 'noun',
        meaning: 'A vehicle equipped for taking sick or injured people to and from the hospital',
        exampleSentence: 'An ambulance with paramedics is on its way to your location right now.',
        translations: { hi: 'एम्बुलेंस / रोगी वाहन' },
      },
      {
        word: 'conscious',
        ipa: '/ˈkɒnʃəs/',
        partOfSpeech: 'adjective',
        meaning: 'Aware of and responding to one\'s surroundings; awake',
        exampleSentence: 'The injured cyclist is conscious and breathing normally.',
        translations: { hi: 'होश में / सचेत' },
      },
      {
        word: 'paramedic',
        ipa: '/ˌpærəˈmɛdɪk/',
        partOfSpeech: 'noun',
        meaning: 'A person trained to give emergency medical care to people before they reach hospital',
        exampleSentence: 'The paramedics will arrive in approximately four minutes.',
        translations: { hi: 'पैरामेडिक / आपातकालीन स्वास्थ्यकर्मी' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Emergency services. Which service do you require?',
        functionCategory: 'Dispatcher Opening',
        exampleSentence: 'Emergency 999. Do you require Police, Fire, or Ambulance?',
      },
      {
        phrase: 'Ambulance, please. There has been an accident.',
        functionCategory: 'Reporting Incident',
        exampleSentence: 'Ambulance, please. There has been a collision between a bicycle and a pedestrian.',
      },
      {
        phrase: 'The exact location is...',
        functionCategory: 'Giving Location',
        exampleSentence: 'The exact location is 45 Victoria Street, opposite the Central Library.',
      },
      {
        phrase: 'He is conscious and breathing.',
        functionCategory: 'Assessing Vital Signs',
        exampleSentence: 'The patient is conscious, breathing, but has a bleeding arm.',
      },
    ],
    grammar: {
      title: 'Emergency Communication: Direct Declarations & Location Landmarks (Opposite / Near / Corner of)',
      conceptExplanation:
        'In emergencies, speak concisely: State the service ("Ambulance, please"), give precise location ("on Victoria Street near Library Lane"), describe status ("He is conscious / He is breathing"), and respond clearly to imperatives ("Apply pressure with a clean cloth").',
      patternFormula: 'Ambulance, please! Location is [Street] near [Landmark]. The person is [conscious/bleeding].',
      contrastExamples: [
        {
          incorrect: 'Maybe somebody is hurt somewhere in street.',
          correct: 'Ambulance, please. There is an injured pedestrian at 45 Victoria Street.',
          explanation: 'Emergency reports require clear, precise service names and exact street locations.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Dan',
        text: 'Emergency Services. Which service do you require: Police, Fire, or Ambulance?',
        translation: 'आपातकालीन सेवाएं। आपको किस सेवा की आवश्यकता है: पुलिस, अग्निशमन, या एम्बुलेंस?',
      },
      {
        speaker: 'You',
        text: 'Ambulance, please! There has been an accident on Victoria Street involving a cyclist and a pedestrian.',
        translation: 'एम्बुलेंस, कृपया! विक्टोरिया स्ट्रीट पर एक साइकिल चालक और एक पैदल यात्री से जुड़ी एक दुर्घटना हुई है।',
      },
      {
        speaker: 'Dan',
        text: 'What is your exact location, and is the injured person conscious and breathing?',
        translation: 'आपका सटीक स्थान क्या है, और क्या घायल व्यक्ति होश में है और सांस ले रहा है?',
      },
      {
        speaker: 'You',
        text: 'We are outside 42 Victoria Street, opposite the Central Library. He is conscious and breathing, but his left arm is bleeding.',
        translation: 'हम सेंट्रल लाइब्रेरी के सामने 42 विक्टोरिया स्ट्रीट के बाहर हैं। वह होश में है और सांस ले रहा है, लेकिन उसके बाएं हाथ से खून बह रहा है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_74_1',
      type: 'fill_blank',
      prompt: 'Complete the emergency vital signs report: "He is conscious ___ breathing."',
      options: [
        { id: 'opt_1', text: 'and', isCorrect: true },
        { id: 'opt_2', text: 'but for', isCorrect: false },
        { id: 'opt_3', text: 'with not', isCorrect: false },
      ],
      correctAnswer: 'and',
      explanation: 'Use conjunction "and" to connect vital observations.',
    },
    {
      id: 'cp_a1_74_2',
      type: 'multiple_choice',
      prompt: 'Which sentence provides an exact emergency location with a landmark?',
      options: [
        { id: 'opt_1', text: 'We are at 42 Victoria Street, opposite the Central Library.', isCorrect: true },
        { id: 'opt_2', text: 'Somewhere on earth road with cars.', isCorrect: false },
        { id: 'opt_3', text: 'Street has trees near big house.', isCorrect: false },
      ],
      correctAnswer: 'We are at 42 Victoria Street, opposite the Central Library.',
      explanation: 'Clear street number, name, and recognizable landmark.',
    },
    {
      id: 'cp_a1_74_3',
      type: 'multiple_choice',
      prompt: 'How should you answer the 999 dispatcher\'s opening question?',
      options: [
        { id: 'opt_1', text: 'Ambulance, please. There has been an accident.', isCorrect: true },
        { id: 'opt_2', text: 'Hello buddy how are you doing today?', isCorrect: false },
        { id: 'opt_3', text: 'Everything is bad help help.', isCorrect: false },
      ],
      correctAnswer: 'Ambulance, please. There has been an accident.',
      explanation: 'Direct, clear, and names the required service instantly.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_74_1',
      scenarioContext: 'State the required service to the 999 operator.',
      prompt: 'Build: "Ambulance please there has been an accident."',
      targetStructure: 'Ambulance please there has been an accident',
      wordBank: ['Ambulance', 'please', 'there', 'has', 'been', 'an', 'accident', 'having', 'is', 'was'],
      acceptableSolutions: [
        'Ambulance please there has been an accident',
        'Ambulance please there has been an accident.',
        'Ambulance, please, there has been an accident.',
      ],
      explanation: 'Urgent incident declaration.',
    },
    {
      id: 'sc_a1_74_2',
      scenarioContext: 'Confirm vital signs to the dispatcher.',
      prompt: 'Build: "The person is conscious and breathing."',
      targetStructure: 'The person is conscious and breathing',
      wordBank: ['The', 'person', 'is', 'conscious', 'and', 'breathing', 'are', 'breathe', 'in'],
      acceptableSolutions: [
        'The person is conscious and breathing',
        'The person is conscious and breathing.',
      ],
      explanation: 'Consciousness and respiration confirmation.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_74_1',
      turnIndex: 1,
      partnerPrompt:
        'Emergency 999. Which service do you require: Police, Fire, or Ambulance?',
      partnerAudioText:
        'Emergency 999. Which service do you require: Police, Fire, or Ambulance?',
      partnerQuestionHindi:
        'आपातकालीन 999। आपको किस सेवा की आवश्यकता है: पुलिस, अग्निशमन, या एम्बुलेंस?',
      expectedFunction: 'State Required Emergency Service (Ambulance, please! There has been an accident)',
      contextGoal:
        'State clearly: "Ambulance, please! There has been a collision between a bicycle and a pedestrian."',
      targetVocabulary: ['Ambulance please', 'there has been an accident', 'collision', 'pedestrian and bicycle', 'urgent medical help'],
      suggestedResponses: [
        {
          label: 'Integrated Performance',
          text: 'Ambulance, please! There has been an accident involving a cyclist and an injured pedestrian.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Emergency Service & Incident',
          patterns: [
            'ambulance',
            'accident',
            'collision',
            'cyclist',
            'pedestrian',
            'injured',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'hospital_help_error',
          pattern: /\bi need hospital car\b/i,
          errorType: 'vocabulary',
          message: 'Say "Ambulance, please", which is the official service name.',
          correctionPattern: 'Ambulance, please.',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_74_1',
        type: 'fill_blank',
        prompt: 'Choose the correct emergency service: "___, please! Someone is hurt."',
        options: [
          { id: 'opt_1', text: 'Ambulance', isCorrect: true },
          { id: 'opt_2', text: 'Taxi', isCorrect: false },
          { id: 'opt_3', text: 'Library', isCorrect: false },
        ],
        correctAnswer: 'Ambulance',
        explanation: 'Call for an "Ambulance" for medical injuries.',
      },
    },
    {
      id: 'turn_a1_74_2',
      turnIndex: 2,
      partnerPrompt:
        'Ambulance service connected. Tell me your exact location: what street are you on, and what landmarks or building numbers do you see?',
      partnerAudioText:
        'Ambulance service connected. Tell me your exact location: what street are you on, and what landmarks or building numbers do you see?',
      partnerQuestionHindi:
        'एम्बुलेंस सेवा जुड़ गई। मुझे अपना सटीक स्थान बताएं: आप किस सड़क पर हैं, और आपको क्या स्थलचिह्न या भवन संख्याएँ दिखाई दे रही हैं?',
      expectedFunction: 'Provide Precise Street Location & Landmark (42 Victoria Street, opposite Central Library)',
      contextGoal:
        'State the exact location: 42 Victoria Street, at the corner of Library Lane, directly opposite the Central Library in Bristol.',
      targetVocabulary: ['42 Victoria Street', 'corner of Library Lane', 'opposite Central Library', 'in Bristol', 'exact location'],
      suggestedResponses: [
        {
          label: 'Integrated Performance',
          text: 'The exact location is outside 42 Victoria Street, right at the corner of Library Lane, opposite the Bristol Central Library.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Exact Location Coordinates',
          patterns: [
            '42 victoria street',
            'victoria street',
            'library lane',
            'central library',
            'bristol',
            'opposite',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_74_2',
        type: 'multiple_choice',
        prompt: 'Which phrase gives a recognizable landmark accurately?',
        options: [
          { id: 'opt_1', text: 'Directly opposite the Central Library.', isCorrect: true },
          { id: 'opt_2', text: 'Near the house with many doors.', isCorrect: false },
          { id: 'opt_3', text: 'On road with sidewalk stone.', isCorrect: false },
        ],
        correctAnswer: 'Directly opposite the Central Library.',
        explanation: 'Clear and distinct landmark.',
      },
    },
    {
      id: 'turn_a1_74_3',
      turnIndex: 3,
      partnerPrompt:
        'I have dispatched an ambulance to 42 Victoria Street. Now tell me about the patient: is he conscious, is he breathing normally, and where is he injured?',
      partnerAudioText:
        'I have dispatched an ambulance to 42 Victoria Street. Now tell me about the patient: is he conscious, is he breathing normally, and where is he injured?',
      partnerQuestionHindi:
        'मैंने 42 विक्टोरिया स्ट्रीट पर एक एम्बुलेंस भेजी है। अब मुझे मरीज के बारे में बताएं: क्या वह होश में है, क्या वह सामान्य रूप से सांस ले रहा है, और उसे कहाँ चोट लगी है?',
      expectedFunction: 'Report Patient Status (Conscious, breathing, bleeding arm, leg pain)',
      contextGoal:
        'State that the pedestrian is conscious and breathing, but has a cut on his left forearm that is bleeding, and complains of leg pain.',
      targetVocabulary: ['conscious and awake', 'breathing normally', 'bleeding from left arm', 'leg pain', 'not moving leg'],
      suggestedResponses: [
        {
          label: 'Integrated Performance',
          text: 'He is conscious and breathing normally. He has a bleeding cut on his left arm and severe pain in his left leg. He is resting on the pavement.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Patient Condition & Injuries',
          patterns: [
            'conscious',
            'breathing',
            'bleeding',
            'arm',
            'leg',
            'pain',
            'pavement',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_74_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "The patient is awake and ___."',
        options: [
          { id: 'opt_1', text: 'conscious', isCorrect: true },
          { id: 'opt_2', text: 'conscience', isCorrect: false },
          { id: 'opt_3', text: 'sleepy head', isCorrect: false },
        ],
        correctAnswer: 'conscious',
        explanation: 'Adjective "conscious" means awake and aware.',
      },
    },
    {
      id: 'turn_a1_74_4',
      turnIndex: 4,
      partnerPrompt:
        'Help is 3 minutes away. While you wait: do NOT move his leg. Take a clean cloth or jacket and apply firm, gentle pressure to the arm wound to slow bleeding. Keep him warm and calm. Can you hear the sirens approaching now?',
      partnerAudioText:
        'Help is 3 minutes away. While you wait: do NOT move his leg. Take a clean cloth or jacket and apply firm, gentle pressure to the arm wound to slow bleeding. Keep him warm and calm. Can you hear the sirens approaching now?',
      partnerQuestionHindi:
        'मदद 3 मिनट दूर है। जब तक आप प्रतीक्षा करते हैं: उसके पैर को न हिलाएं। एक साफ कपड़ा या जैकेट लें और रक्तस्राव को धीमा करने के लिए हाथ के घाव पर हल्का दबाव डालें। उसे गर्म और शांत रखें। क्या आप अब सायरन की आवाज सुन सकते हैं?',
      expectedFunction: 'Confirm First-Aid Actions & Arrival of Paramedics',
      contextGoal:
        'Confirm you are applying pressure with a clean jacket, see the ambulance arriving around the corner, thank Dan, and wave to paramedics.',
      targetVocabulary: ['applying pressure to the wound', 'keeping him calm', 'see the ambulance turning the corner', 'paramedics are here', 'thank you Dan'],
      suggestedResponses: [
        {
          label: 'Integrated Performance',
          text: 'I am applying firm pressure to his arm with a clean jacket, and he is calm. Yes, I can hear the sirens and the ambulance is pulling up right now! Thank you so much Dan, the paramedics are here!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'First-Aid Confirmation & Paramedic Arrival',
          patterns: [
            'applying pressure',
            'pressure',
            'jacket',
            'cloth',
            'ambulance',
            'paramedics',
            'sirens',
            'here',
            'thank you',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_74_4',
        type: 'multiple_choice',
        prompt: 'Which response confirms first-aid action and paramedic handover clearly?',
        options: [
          { id: 'opt_1', text: 'I am applying pressure to the wound. The ambulance has just arrived! Thank you Dan.', isCorrect: true },
          { id: 'opt_2', text: 'I throw phone in road now.', isCorrect: false },
          { id: 'opt_3', text: 'Ambulance is loud bye.', isCorrect: false },
        ],
        correctAnswer: 'I am applying pressure to the wound. The ambulance has just arrived! Thank you Dan.',
        explanation: 'Accurate, reassuring, and confirms handover.',
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
