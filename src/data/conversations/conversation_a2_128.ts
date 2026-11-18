import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_128: ConversationDefinition = {
  id: 'conv_a2_128',
  title: 'Housing, Renting, Landlords & Household Maintenance (Urgent Repair Call)',
  cefr: 'A2',
  unitId: 'unit_a2_9',
  lessonLinks: ['lesson_a2_9_128'],
  estimatedMinutes: 5,
  scenario:
    'You are renting Flat 3B on Bruntsfield Avenue in Edinburgh. In mid-November, the central heating combi-boiler has suddenly broken down, leaving the radiators completely cold, and there is a slow water leak under the kitchen sink. Call your landlord Arthur Pendelton to report these urgent maintenance problems, explain the urgency due to freezing outdoor temperatures, arrange an engineer’s visit for tomorrow morning, and confirm access arrangements.',
  communicativeGoals: [
    'Report household maintenance emergencies clearly (broken combi-boiler, freezing radiators, leaking pipe)',
    'Explain the immediate impact and urgency politely yet firmly to a landlord or property manager',
    'Negotiate and schedule a certified repair technician visit for the following morning',
    'Confirm tenancy rights and entry permissions (requesting phone confirmation before arrival)',
  ],
  canDoStatements: [
    'Can report household breakdowns and plumbing/heating issues over the phone (CEFR A2)',
    'Can describe physical damage and water leakage accurately',
    'Can agree on technician appointments and access permissions with a landlord',
  ],
  characters: [
    {
      id: 'char_arthur_pendelton',
      name: 'Arthur Pendelton',
      role: 'Landlord & Property Manager',
      avatar: '🏡',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'boiler',
        ipa: '/ˈbɔɪlər/',
        partOfSpeech: 'noun',
        meaning: 'A household device that heats water and provides central heating through radiators',
        exampleSentence: 'The combi-boiler is flashing a red error code and there is no hot water.',
        translations: { hi: 'बॉयलर / पानी व हीटर गर्म करने का उपकरण' },
      },
      {
        word: 'radiator',
        ipa: '/ˈreɪdieɪtər/',
        partOfSpeech: 'noun',
        meaning: 'A metal wall heater through which hot water passes to warm a room',
        exampleSentence: 'All the radiators in the living room and bedrooms are freezing cold.',
        translations: { hi: 'रेडिएटर / कमरा गर्म करने वाला उपकरण' },
      },
      {
        word: 'leak',
        ipa: '/liːk/',
        partOfSpeech: 'noun / verb',
        meaning: 'An accidental hole or crack through which liquid or water escapes',
        exampleSentence: 'There is a steady water leak dripping from the pipe under the kitchen sink.',
        translations: { hi: 'रिसाव / पानी टपकना' },
      },
      {
        word: 'urgent',
        ipa: '/ˈɜːdʒənt/',
        partOfSpeech: 'adjective',
        meaning: 'Requiring immediate action or attention',
        exampleSentence: 'This repair is urgent because the temperature outside is dropping below freezing.',
        translations: { hi: 'अति आवश्यक / तुरंत ध्यान देने योग्य' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I’m calling to report an urgent maintenance issue in Flat 3B.',
        functionCategory: 'Opening a Landlord Repair Call',
        exampleSentence: 'I am calling about a broken pipe in the flat.',
      },
      {
        phrase: 'The boiler has stopped working and the radiators are completely cold.',
        functionCategory: 'Describing Heating Failure',
        exampleSentence: 'The heater is not producing any warm water.',
      },
      {
        phrase: 'There is also water leaking from the pipe under the sink.',
        functionCategory: 'Reporting Plumbing Leak',
        exampleSentence: 'Water is dripping onto the kitchen floor.',
      },
      {
        phrase: 'Could you please send an emergency heating engineer tomorrow morning?',
        functionCategory: 'Requesting Emergency Repair Appointment',
        exampleSentence: 'Can someone come to fix this first thing tomorrow?',
      },
    ],
    grammar: {
      title: 'Present Perfect + Present Continuous for Active Household Problems',
      conceptExplanation:
        '1. Completed Breakdown with Current Result (Present Perfect): "The boiler has stopped working" / "A pipe has burst" / "The pilot light has gone out".\n2. Ongoing Consequence (Present Continuous): "Water is dripping from the pipe" / "The flat is getting freezing cold".\n3. Polite Imperatives and Requests: "Could you please send an engineer?" / "Would you mind having someone look at it tomorrow morning?".\n4. Tenancy notice: "Please give me a call before the plumber arrives".',
      patternFormula: 'I\'m calling to report that [Item] has stopped working and [Liquid/Part] is [Verb-ing] | Could you please arrange an engineer for [Time]?',
      contrastExamples: [
        {
          incorrect: 'The boiler is broke since morning.',
          correct: 'The boiler broke down this morning and has stopped working.',
          explanation: 'Use Present Perfect ("has stopped working") or Past Simple ("broke down").',
        },
        {
          incorrect: 'Water leaks now on floor.',
          correct: 'Water is currently leaking onto the floor under the sink.',
          explanation: 'Use Present Continuous ("is currently leaking") for an active leak happening right now.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Arthur Pendelton',
        text: 'Hello, Arthur Pendelton speaking. Is that Alex from Flat 3B on Bruntsfield Avenue?',
        translation: 'नमस्ते, आर्थर पेंडलटन बोल रहा हूँ। क्या आप ब्रंट्सफील्ड एवेन्यू पर फ्लैट 3B से एलेक्स हैं?',
      },
      {
        speaker: 'You',
        text: 'Hello Mr. Pendelton. Yes, this is Alex. I am calling to report an urgent maintenance issue: our combi-boiler has stopped working this afternoon, so all our radiators are freezing cold, and there is a steady leak dripping under the kitchen sink.',
        translation: 'नमस्ते मिस्टर पेंडलटन। हाँ, मैं एलेक्स हूँ। मैं एक अति आवश्यक रखरखाव समस्या की रिपोर्ट करने के लिए कॉल कर रहा हूँ: हमारा कॉम्बी-बॉयलर आज दोपहर काम करना बंद कर चुका है, इसलिए हमारे सभी रेडिएटर बिल्कुल ठंडे हैं, और रसोई के सिंक के नीचे लगातार पानी टपक रहा है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_128_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "The heating boiler has ___ (broken / broke) down."',
      options: [
        { id: 'opt_1', text: 'broken', isCorrect: true },
        { id: 'opt_2', text: 'broke', isCorrect: false },
        { id: 'opt_3', text: 'breaking', isCorrect: false },
      ],
      correctAnswer: 'broken',
      explanation: 'Use the past participle "broken" after "has".',
    },
    {
      id: 'cp_a2_128_2',
      type: 'multiple_choice',
      prompt: 'Which sentence best describes an active plumbing problem?',
      options: [
        { id: 'opt_1', text: 'Water is dripping steadily from the pipe under the kitchen sink.', isCorrect: true },
        { id: 'opt_2', text: 'Water was drip last month.', isCorrect: false },
        { id: 'opt_3', text: 'Water drops since yesterday.', isCorrect: false },
      ],
      correctAnswer: 'Water is dripping steadily from the pipe under the kitchen sink.',
      explanation: 'Present Continuous ("is dripping steadily") describes current ongoing action.',
    },
    {
      id: 'cp_a2_128_3',
      type: 'multiple_choice',
      prompt: 'How do you politely ask a landlord to send a repair technician tomorrow?',
      options: [
        { id: 'opt_1', text: 'Could you please send an engineer tomorrow morning to inspect the heating?', isCorrect: true },
        { id: 'opt_2', text: 'Send engineer now fast.', isCorrect: false },
        { id: 'opt_3', text: 'You must fix this second.', isCorrect: false },
      ],
      correctAnswer: 'Could you please send an engineer tomorrow morning to inspect the heating?',
      explanation: 'Polite, clear, and professional modal request.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_128_1',
      scenarioContext: 'Report heating breakdown.',
      prompt: 'Build: "The boiler has stopped working and the radiators are cold."',
      targetStructure: 'Subject + has stopped working + and + subject + are cold',
      wordBank: ['The', 'boiler', 'has', 'stopped', 'working', 'and', 'the', 'radiators', 'are', 'cold', 'stopping', 'is'],
      acceptableSolutions: [
        'The boiler has stopped working and the radiators are cold',
        'The boiler has stopped working and the radiators are cold.',
      ],
      explanation: 'Present Perfect breakdown + adjective state.',
    },
    {
      id: 'sc_a2_128_2',
      scenarioContext: 'Request urgent technician appointment.',
      prompt: 'Build: "Could you please send a heating engineer tomorrow morning?"',
      targetStructure: 'Could + you + please + send + object + time phrase',
      wordBank: ['Could', 'you', 'please', 'send', 'a', 'heating', 'engineer', 'tomorrow', 'morning', 'sending', 'would'],
      acceptableSolutions: [
        'Could you please send a heating engineer tomorrow morning',
        'Could you please send a heating engineer tomorrow morning?',
        'Could you please send a heating engineer tomorrow morning.',
      ],
      explanation: 'Standard polite repair request.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_128_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello, Arthur Pendelton speaking. Ah, hello Alex! How are things over at Flat 3B on Bruntsfield Avenue?',
      partnerAudioText:
        'Hello, Arthur Pendelton speaking. Ah, hello Alex! How are things over at Flat 3B on Bruntsfield Avenue?',
      partnerQuestionHindi:
        'नमस्ते, आर्थर पेंडलटन बोल रहा हूँ। अरे, नमस्ते एलेक्स! ब्रंट्सफील्ड एवेन्यू पर फ्लैट 3B में सब कैसा चल रहा है?',
      expectedFunction: 'Open Call & State Urgent Maintenance Issues (boiler stopped working / water leak under sink)',
      contextGoal:
        'State politely that you are calling to report two urgent maintenance problems: the combi-boiler has stopped working so the radiators are cold, and water is leaking steadily under the kitchen sink.',
      targetVocabulary: ['calling to report an urgent maintenance problem in Flat 3B', 'combi-boiler has stopped working', 'all radiators are completely cold', 'water is dripping steadily from the pipe under the kitchen sink'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'Hello Mr. Pendelton. I’m calling to report an urgent maintenance issue in Flat 3B. Our combi-boiler has stopped working this afternoon, so all the radiators are freezing cold, and water is dripping from the pipe under the kitchen sink.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Boiler Breakdown (boiler / stopped working / radiators / cold / heating / broken)',
          patterns: ['boiler', 'stopped working', 'radiators', 'cold', 'freezing', 'heating', 'broken', 'no heat'],
          required: true,
        },
        {
          name: 'Plumbing Leak (water / leaking / dripping / pipe / sink / kitchen)',
          patterns: ['water', 'leaking', 'dripping', 'pipe', 'sink', 'kitchen', 'leak'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'boiler_is_broke_error',
          pattern: /\bthe boiler is broke\b/i,
          errorType: 'grammar',
          message: 'Say "The boiler has broken down" or "The boiler has stopped working".',
          correctionPattern: 'The boiler has stopped working',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_128_1',
        type: 'multiple_choice',
        prompt: 'Which phrase is correct to report a broken heating unit?',
        options: [
          { id: 'opt_1', text: 'Our boiler has stopped working.', isCorrect: true },
          { id: 'opt_2', text: 'Our boiler is broke down.', isCorrect: false },
          { id: 'opt_3', text: 'Our boiler have stop.', isCorrect: false },
        ],
        correctAnswer: 'Our boiler has stopped working.',
        explanation: 'Singular subject "boiler" + "has stopped working".',
      },
    },
    {
      id: 'turn_a2_128_2',
      turnIndex: 2,
      partnerPrompt:
        'Oh dear, that is definitely not good, especially with temperatures dropping near zero tonight. Have you checked if there is an error code displayed on the digital panel, and have you placed a bucket under the leaking pipe?',
      partnerAudioText:
        'Oh dear, that is definitely not good, especially with temperatures dropping near zero tonight. Have you checked if there is an error code displayed on the digital panel, and have you placed a bucket under the leaking pipe?',
      partnerQuestionHindi:
        'अरे, यह निश्चित रूप से अच्छा नहीं है, खासकर जब आज रात तापमान शून्य के करीब गिर रहा है। क्या आपने जांचा है कि डिजिटल पैनल पर कोई त्रुटि कोड प्रदर्शित है, और क्या आपने रिसाव वाले पाइप के नीचे एक बाल्टी रखी है?',
      expectedFunction: 'Detail Error Code & Containment Actions (error code F28 / bucket placed under leak)',
      contextGoal:
        'Confirm that the digital screen shows flashing error code "F28" (low pressure/ignition failure) and you have put a plastic basin and towels under the leaking pipe to protect the wooden floor.',
      targetVocabulary: ['boiler display is flashing error code F28', 'tried resetting it once but it didn’t ignite', 'placed a plastic basin and dry towels under the sink', 'floor is protected for now'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'Yes, the boiler display is flashing error code F28. I tried pressing the reset button once, but the pilot flame didn’t light. For the sink, I have placed a plastic basin and dry towels underneath to catch the drips and protect the floor.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Error Code & Reset (error code / F28 / flashing / reset / flame / ignition)',
          patterns: ['error code', 'f28', 'flashing', 'reset', 'flame', 'screen', 'panel', 'ignition'],
          required: true,
        },
        {
          name: 'Containment Action (basin / bucket / towels / catch drips / floor / protected)',
          patterns: ['basin', 'bucket', 'towels', 'catch', 'drips', 'floor', 'sink', 'underneath', 'water'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_128_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I have placed a bucket under the pipe to catch the ___ (drips / dripped)."',
        options: [
          { id: 'opt_1', text: 'drips', isCorrect: true },
          { id: 'opt_2', text: 'dripped', isCorrect: false },
          { id: 'opt_3', text: 'drippingly', isCorrect: false },
        ],
        correctAnswer: 'drips',
        explanation: 'Use the plural noun "drips".',
      },
    },
    {
      id: 'turn_a2_128_3',
      turnIndex: 3,
      partnerPrompt:
        'Thank you for acting quickly with the basin. Error code F28 is usually a gas valve or pressure issue. I will call our certified Gas Safe engineer, Gregor, right away. Would you be home tomorrow morning between 8:30 AM and 10:00 AM for him to inspect the boiler and pipe?',
      partnerAudioText:
        'Thank you for acting quickly with the basin. Error code F28 is usually a gas valve or pressure issue. I will call our certified Gas Safe engineer, Gregor, right away. Would you be home tomorrow morning between 8:30 AM and 10:00 AM for him to inspect the boiler and pipe?',
      partnerQuestionHindi:
        'बेसिन के साथ तुरंत कार्रवाई करने के लिए धन्यवाद। त्रुटि कोड F28 आमतौर पर गैस वाल्व या दबाव की समस्या होती है। मैं तुरंत हमारे प्रमाणित गैस सेफ इंजीनियर, ग्रेगोर को कॉल करूंगा। क्या आप कल सुबह 8:30 से 10:00 बजे के बीच उनके बॉयलर और पाइप का निरीक्षण करने के लिए घर पर होंगे?',
      expectedFunction: 'Confirm Morning Appointment & Request Technician Phone Notice',
      contextGoal:
        'Confirm you will be home tomorrow morning between 8:30 AM and 10:00 AM; ask if Mr. Pendelton can ask Gregor the plumber to call or text 15 minutes before arrival.',
      targetVocabulary: ['will be home tomorrow morning between 8:30 and 10:00 AM', 'could you ask the engineer to call 15 minutes before arriving?', 'flat buzzer is number 3B', 'appreciate the swift arrangement'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'Yes, I will be home tomorrow morning between 8:30 AM and 10:00 AM. Could you please ask Gregor to give me a quick call or text fifteen minutes before he arrives? Our intercom buzzer is Flat 3B.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Time Confirmation (home / 8:30 / 10:00 / tomorrow morning / available)',
          patterns: ['home', '8:30', '10:00', 'tomorrow morning', 'available', 'yes', 'fine'],
          required: true,
        },
        {
          name: 'Notice Request (call / text / 15 minutes / buzzer / flat 3B / arrive)',
          patterns: ['call', 'text', '15 minutes', 'buzzer', 'flat 3b', 'intercom', 'arrive', 'gregor'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_128_3',
        type: 'multiple_choice',
        prompt: 'Which request politely asks a tradesperson to phone before arriving?',
        options: [
          { id: 'opt_1', text: 'Could you please ask the engineer to call fifteen minutes before arriving?', isCorrect: true },
          { id: 'opt_2', text: 'Engineer must ring me before he comes.', isCorrect: false },
          { id: 'opt_3', text: 'Could you asking engineer phone?', isCorrect: false },
        ],
        correctAnswer: 'Could you please ask the engineer to call fifteen minutes before arriving?',
        explanation: 'Polite indirect request with "Could you please ask... to call".',
      },
    },
    {
      id: 'turn_a2_128_4',
      turnIndex: 4,
      partnerPrompt:
        'I have already texted Gregor your number and flat buzzer details. He will phone you when he is on his way tomorrow morning. In the meantime, I have two portable electric space heaters in the hallway cupboard if you need them tonight. Stay warm, Alex!',
      partnerAudioText:
        'I have already texted Gregor your number and flat buzzer details. He will phone you when he is on his way tomorrow morning. In the meantime, I have two portable electric space heaters in the hallway cupboard if you need them tonight. Stay warm, Alex!',
      partnerQuestionHindi:
        'मैंने पहले ही ग्रेगोर को आपका नंबर और फ्लैट बजर का विवरण मैसेज कर दिया है। जब वह कल सुबह आ रहा होगा तो वह आपको फोन करेगा। इस बीच, यदि आपको आज रात उनकी आवश्यकता हो तो मेरे पास हॉलवे की अलमारी में दो पोर्टेबल इलेक्ट्रिक हीटर हैं। गर्म रहें, एलेक्स!',
      expectedFunction: 'Express Gratitude, Acknowledge Heaters & Conclude Emergency Repair Call',
      contextGoal:
        'Thank Mr. Pendelton warmly for his quick response and the portable heaters; confirm you will use the electric heaters tonight and expect Gregor at 8:30 AM.',
      targetVocabulary: ['thank you Mr. Pendelton for such a prompt response', 'will plug in the electric space heaters for tonight', 'see Gregor tomorrow morning', 'have a good evening'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'Thank you so much Mr. Pendelton for such a prompt and helpful response! I will plug in the portable electric heaters for tonight and expect Gregor tomorrow morning. Have a good evening!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Closure (thank you / mr pendelton / prompt / electric heaters / gregor / tomorrow / good evening)',
          patterns: ['thank you', 'thanks', 'pendelton', 'prompt', 'electric heaters', 'heaters', 'gregor', 'tomorrow', 'good evening', 'warm'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_128_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Thank you for such a ___ (prompt / promptly) response!"',
        options: [
          { id: 'opt_1', text: 'prompt', isCorrect: true },
          { id: 'opt_2', text: 'promptly', isCorrect: false },
          { id: 'opt_3', text: 'prompting', isCorrect: false },
        ],
        correctAnswer: 'prompt',
        explanation: 'Use the adjective "prompt" before the noun "response".',
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
