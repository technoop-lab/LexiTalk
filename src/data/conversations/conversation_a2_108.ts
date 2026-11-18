import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_108: ConversationDefinition = {
  id: 'conv_a2_108',
  title: 'Home & Neighborhood Issues: Describing Problems & Requesting Repairs',
  cefr: 'A2',
  unitId: 'unit_a2_8',
  lessonLinks: ['lesson_a2_8_108'],
  estimatedMinutes: 5,
  scenario:
    'You are phoning your building property manager, Arthur Pendelton, about urgent maintenance issues in your rented flat in Leeds. The pipe under the kitchen sink is leaking, and the central heating radiator in the living room is making a loud noise and not warming up. Clearly describe the faults and arrange a maintenance visit.',
  communicativeGoals: [
    'Describe household faults and breakdowns clearly (leaking pipe, dripping tap, clogged drain, broken heating)',
    'Use passive participle adjectives accurately (broken, leaking, cracked, damaged, clogged)',
    'Use problem structures such as "There is something wrong with..." and "It needs to be fixed / needs repairing"',
    'Make polite requests to schedule a maintenance engineer visit and agree on access times',
  ],
  canDoStatements: [
    'Can describe household problems, faulty appliances, and maintenance needs clearly (CEFR A2)',
    'Can use passive adjective descriptors to explain the state of damaged items',
    'Can request and schedule a repair visit with a landlord or building superintendent',
  ],
  characters: [
    {
      id: 'char_arthur_pendelton',
      name: 'Arthur Pendelton',
      role: 'Residential Property Manager',
      avatar: '🔧',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'leaking',
        ipa: '/ˈliːkɪŋ/',
        partOfSpeech: 'adjective',
        meaning: 'Allowing liquid or gas to escape through a hole or crack',
        exampleSentence: 'There is a leaking pipe underneath the kitchen sink.',
        translations: { hi: 'रिसने वाला / पानी टपकने वाला' },
      },
      {
        word: 'radiator',
        ipa: '/ˈreɪdieɪtər/',
        partOfSpeech: 'noun',
        meaning: 'A metal device filled with hot water used to heat a room',
        exampleSentence: 'The living room radiator is cold and making a banging noise.',
        translations: { hi: 'रेडिएटर (हीटर)' },
      },
      {
        word: 'plumber',
        ipa: '/ˈplʌmər/',
        partOfSpeech: 'noun',
        meaning: 'A person whose job is to install and repair pipes and water fixtures',
        exampleSentence: 'Could you send a plumber to inspect the pipe tomorrow morning?',
        translations: { hi: 'नलसाज / प्लंबर' },
      },
      {
        word: 'needs fixing',
        ipa: '/niːdz ˈfɪksɪŋ/',
        partOfSpeech: 'phrase',
        meaning: 'Requires repair or maintenance to function correctly',
        exampleSentence: 'The kitchen faucet is loose and needs fixing urgently.',
        translations: { hi: 'मरम्मत की आवश्यकता है' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'There is something wrong with the...',
        functionCategory: 'Reporting a Fault',
        exampleSentence: 'There is something wrong with the central heating.',
      },
      {
        phrase: 'It is leaking water onto the floor.',
        functionCategory: 'Describing Active Damage',
        exampleSentence: 'The pipe is leaking water all over the cabinet floor.',
      },
      {
        phrase: 'Could you please send someone to take a look?',
        functionCategory: 'Polite Repair Request',
        exampleSentence: 'Could you please send an engineer to inspect it?',
      },
      {
        phrase: 'I will be at home tomorrow after 10 AM.',
        functionCategory: 'Confirming Access Availability',
        exampleSentence: 'I will be working from home all morning tomorrow.',
      },
    ],
    grammar: {
      title: 'Reporting Breakdowns: Passive Participles & Need + Gerund / Infinitive',
      conceptExplanation:
        '1. Passive Participle Adjectives: Use participles as adjectives to describe condition (broken, cracked, leaking, blocked, damaged).\n2. Need Structures: "It needs fixing" (need + gerund) OR "It needs to be fixed" (need + passive infinitive).\n3. Stating the Fault: "There is a leak in the bathroom" / "The radiator isn\'t working properly."\n4. Polite Requests: "Could you please arrange..." / "Would it be possible to send a technician?"',
      patternFormula: 'There is something wrong with + [noun] | [Subject] + needs fixing / needs to be repaired',
      contrastExamples: [
        {
          incorrect: 'The tap is break. / The pipe is make leak.',
          correct: 'The tap is broken. / The pipe is leaking.',
          explanation: 'Use the past participle "broken" for static state, and "leaking" for continuous escaping liquid.',
        },
        {
          incorrect: 'It need to repair.',
          correct: 'It needs repairing. / It needs to be repaired.',
          explanation: 'Passive need requires either a gerund ("repairing") or a passive infinitive ("to be repaired").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Arthur Pendelton',
        text: 'Good morning, Leeds Property Management. Arthur speaking. How can I help you today?',
        translation: 'शुभ प्रभात, लीड्स प्रॉपर्टी मैनेजमेंट। आर्थर बात कर रहा हूँ। आज मैं आपकी क्या मदद कर सकता हूँ?',
      },
      {
        speaker: 'You',
        text: 'Good morning Mr. Pendelton. I am calling from Flat 4B on Park Lane. There is a problem in the kitchen—the drain pipe under the sink is leaking water onto the shelf.',
        translation: 'शुभ प्रभात मिस्टर पेंडलटन। मैं पार्क लेन के फ्लैट 4B से बात कर रहा हूँ। रसोई में एक समस्या है—सिंक के नीचे का ड्रेन पाइप शेल्फ पर पानी टपका रहा है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_108_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "The bathroom pipe is ___ (water is escaping slowly)."',
      options: [
        { id: 'opt_1', text: 'leaking', isCorrect: true },
        { id: 'opt_2', text: 'leakedly', isCorrect: false },
        { id: 'opt_3', text: 'leakage', isCorrect: false },
      ],
      correctAnswer: 'leaking',
      explanation: '"Leaking" describes liquid currently escaping from a fixture.',
    },
    {
      id: 'cp_a2_108_2',
      type: 'multiple_choice',
      prompt: 'Which structure correctly expresses that an appliance requires repair?',
      options: [
        { id: 'opt_1', text: 'The radiator needs to be repaired.', isCorrect: true },
        { id: 'opt_2', text: 'The radiator needs repair it.', isCorrect: false },
        { id: 'opt_3', text: 'The radiator is need fixing.', isCorrect: false },
      ],
      correctAnswer: 'The radiator needs to be repaired.',
      explanation: 'Use "needs to be repaired" or "needs repairing".',
    },
    {
      id: 'cp_a2_108_3',
      type: 'multiple_choice',
      prompt: 'How do you politely request a maintenance visit?',
      options: [
        { id: 'opt_1', text: 'Could you please send an engineer to inspect the issue tomorrow?', isCorrect: true },
        { id: 'opt_2', text: 'Send man now to my flat.', isCorrect: false },
        { id: 'opt_3', text: 'You must come here quickly.', isCorrect: false },
      ],
      correctAnswer: 'Could you please send an engineer to inspect the issue tomorrow?',
      explanation: '"Could you please send..." is courteous and professional.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_108_1',
      scenarioContext: 'Report a faulty appliance to your landlord.',
      prompt: 'Build: "There is something wrong with the central heating."',
      targetStructure: 'There is something wrong with + noun phrase',
      wordBank: ['There', 'is', 'something', 'wrong', 'with', 'the', 'central', 'heating', 'are', 'was'],
      acceptableSolutions: [
        'There is something wrong with the central heating',
        'There is something wrong with the central heating.',
      ],
      explanation: 'Standard formula for reporting a malfunctioning device.',
    },
    {
      id: 'sc_a2_108_2',
      scenarioContext: 'Describe what action is required.',
      prompt: 'Build: "The kitchen pipe needs to be fixed immediately."',
      targetStructure: 'Subject + needs to be fixed + adverb',
      wordBank: ['The', 'kitchen', 'pipe', 'needs', 'to', 'be', 'fixed', 'immediately', 'fixing', 'need'],
      acceptableSolutions: [
        'The kitchen pipe needs to be fixed immediately',
        'The kitchen pipe needs to be fixed immediately.',
      ],
      explanation: 'Passive need structure with urgency adverb.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_108_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning! Leeds Property Management, Arthur speaking. How can I assist you with your flat today?',
      partnerAudioText:
        'Good morning! Leeds Property Management, Arthur speaking. How can I assist you with your flat today?',
      partnerQuestionHindi:
        'शुभ प्रभात! लीड्स प्रॉपर्टी मैनेजमेंट, आर्थर बात कर रहा हूँ। आज मैं आपके फ्लैट के लिए आपकी क्या मदद कर सकता हूँ?',
      expectedFunction: 'Introduce Yourself & Report Main Maintenance Problem (leaking pipe)',
      contextGoal:
        'State your flat number (Flat 4B on Park Lane); report that the pipe under the kitchen sink is leaking and pooling water in the lower cabinet.',
      targetVocabulary: ['Flat 4B on Park Lane', 'pipe under the kitchen sink is leaking', 'water is pooling inside the cabinet', 'needs urgent repair'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'Good morning Mr. Pendelton. This is Alex from Flat 4B on Park Lane. I am calling because there is a problem in the kitchen—the pipe under the sink is leaking water onto the cabinet base, and it needs to be repaired.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Identification (Flat 4B / Park Lane / Alex)',
          patterns: ['flat 4b', 'flat', 'park lane', 'alex', 'calling'],
          required: true,
        },
        {
          name: 'Fault Description (kitchen pipe / leaking / water)',
          patterns: ['kitchen', 'sink', 'pipe', 'leak', 'leaking', 'water', 'cabinet', 'problem'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'pipe_is_leak_error',
          pattern: /\bpipe is leak\b|\bpipe is make leak\b/i,
          errorType: 'grammar',
          message: 'Use the continuous adjective "leaking": "the pipe is leaking".',
          correctionPattern: 'the pipe is leaking',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_108_1',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes water escaping from a pipe?',
        options: [
          { id: 'opt_1', text: 'The pipe under the sink is leaking water.', isCorrect: true },
          { id: 'opt_2', text: 'The pipe is leak water.', isCorrect: false },
          { id: 'opt_3', text: 'There is a leaking in pipe.', isCorrect: false },
        ],
        correctAnswer: 'The pipe under the sink is leaking water.',
        explanation: '"The pipe is leaking" is standard continuous description.',
      },
    },
    {
      id: 'turn_a2_108_2',
      turnIndex: 2,
      partnerPrompt:
        'I am sorry to hear that! Please place a bucket or basin underneath right away so the woodwork does not get damaged. Are there any other issues in the apartment that our maintenance team should check while they are on site?',
      partnerAudioText:
        'I am sorry to hear that! Please place a bucket or basin underneath right away so the woodwork does not get damaged. Are there any other issues in the apartment that our maintenance team should check while they are on site?',
      partnerQuestionHindi:
        'यह सुनकर मुझे खेद हुआ! कृपया तुरंत नीचे एक बाल्टी या बर्तन रख दें ताकि लकड़ी खराब न हो। क्या अपार्टमेंट में कोई अन्य समस्या है जिसे हमारी रखरखाव टीम वहां रहते हुए जांच ले?',
      expectedFunction: 'Report Secondary Fault (radiator noise & heating failure)',
      contextGoal:
        'Explain that the living room radiator is making a loud banging noise and remaining cold even when the thermostat is turned on high.',
      targetVocabulary: ['living room radiator', 'making a loud rattling noise', 'remaining completely cold', 'central heating thermostat'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'Yes, I already put a plastic basin underneath. Also, the radiator in the living room is making a loud rattling noise and staying completely cold, even when I set the thermostat to maximum. Could the engineer check the heating system too?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Radiator / Heating Issue',
          patterns: ['radiator', 'heating', 'cold', 'noise', 'rattling', 'banging', 'thermostat', 'living room'],
          required: true,
        },
        {
          name: 'Basin / Preventive Action',
          patterns: ['basin', 'bucket', 'underneath', 'put', 'placed'],
          required: false,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_108_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "The radiator is completely cold and ___ (make) a strange rattling sound."',
        options: [
          { id: 'opt_1', text: 'making', isCorrect: true },
          { id: 'opt_2', text: 'make', isCorrect: false },
          { id: 'opt_3', text: 'mades', isCorrect: false },
        ],
        correctAnswer: 'making',
        explanation: 'Use the present continuous "is making".',
      },
    },
    {
      id: 'turn_a2_108_3',
      turnIndex: 3,
      partnerPrompt:
        'Right, it sounds like the radiator has trapped air and needs bleeding, and the pipe joint needs a new rubber seal. Our plumber Dave can come over tomorrow morning around 9:30 AM or tomorrow afternoon at 2:00 PM. Which slot works best for you?',
      partnerAudioText:
        'Right, it sounds like the radiator has trapped air and needs bleeding, and the pipe joint needs a new rubber seal. Our plumber Dave can come over tomorrow morning around 9:30 AM or tomorrow afternoon at 2:00 PM. Which slot works best for you?',
      partnerQuestionHindi:
        'ठीक है, ऐसा लगता है कि रेडिएटर में हवा फंसी है और उसे ब्लीड करने की जरूरत है, और पाइप के जोड़ में एक नई रबर सील की आवश्यकता है। हमारे प्लंबर डेव कल सुबह लगभग 9:30 बजे या कल दोपहर 2:00 बजे आ सकते हैं। आपके लिए कौन सा समय सबसे अच्छा रहेगा?',
      expectedFunction: 'Select Time Slot & Confirm Access Availability',
      contextGoal:
        'Choose the 9:30 AM morning slot; state that you will be working from home and will let Dave in directly.',
      targetVocabulary: ['morning slot at 9:30 AM works perfectly', 'working from home all day', 'buzz Dave in at the main gate', 'plumber visit'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'The 9:30 AM morning slot works perfectly for me! I will be working from home all morning, so I will be here to open the door and show Dave both the kitchen sink and the radiator.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Time Selection (9:30 AM / morning)',
          patterns: ['9:30', 'morning', 'slot', 'tomorrow morning', 'works', 'perfect'],
          required: true,
        },
        {
          name: 'Access Confirmation (home / open door)',
          patterns: ['working from home', 'home', 'door', 'here', 'dave', 'show'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_108_3',
        type: 'multiple_choice',
        prompt: 'Which response confirms a scheduled appointment clearly?',
        options: [
          { id: 'opt_1', text: 'Tomorrow morning at 9:30 AM works perfectly for me.', isCorrect: true },
          { id: 'opt_2', text: 'I am want morning 9.', isCorrect: false },
          { id: 'opt_3', text: 'Dave come now.', isCorrect: false },
        ],
        correctAnswer: 'Tomorrow morning at 9:30 AM works perfectly for me.',
        explanation: 'Clear and natural appointment confirmation phrase.',
      },
    },
    {
      id: 'turn_a2_108_4',
      turnIndex: 4,
      partnerPrompt:
        'Excellent. I have booked Dave for 9:30 AM tomorrow. He will carry replacement seals and a radiator bleed key. You will receive a text confirmation on your mobile. Is there anything else I can help you with today, Alex?',
      partnerAudioText:
        'Excellent. I have booked Dave for 9:30 AM tomorrow. He will carry replacement seals and a radiator bleed key. You will receive a text confirmation on your mobile. Is there anything else I can help you with today, Alex?',
      partnerQuestionHindi:
        'बहुत बढ़िया। मैंने कल सुबह 9:30 बजे के लिए डेव को बुक कर दिया है। वह रिप्लेसमेंट सील और रेडिएटर ब्लीड की लेकर आएगा। आपको अपने मोबाइल पर एक पुष्टिकरण टेक्स्ट प्राप्त होगा। क्या आज मैं आपकी कोई और मदद कर सकता हूँ, एलेक्स?',
      expectedFunction: 'Conclude Call Courteously & Express Appreciation',
      contextGoal:
        'Thank Mr. Pendelton for his prompt assistance and say you look forward to seeing Dave in the morning.',
      targetVocabulary: ['thank you very much for your prompt help', 'that covers everything', 'look forward to seeing Dave tomorrow morning', 'have a good day'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'That covers everything Mr. Pendelton! Thank you very much for arranging this so quickly. I will see Dave tomorrow morning at 9:30. Have a great day!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Thanks & Polite Closing',
          patterns: ['thank you', 'thanks', 'mr pendelton', 'arthur', 'quickly', 'prompt', 'great day', 'dave', 'morning'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_108_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Thank you for arranging the repair ___ quickly!"',
        options: [
          { id: 'opt_1', text: 'so', isCorrect: true },
          { id: 'opt_2', text: 'such', isCorrect: false },
          { id: 'opt_3', text: 'too much', isCorrect: false },
        ],
        correctAnswer: 'so',
        explanation: 'Use "so + adverb" for degree: "so quickly".',
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
