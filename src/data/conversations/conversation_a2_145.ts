import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_145: ConversationDefinition = {
  id: 'conv_a2_145',
  title: 'Automotive Needs, Car Rentals & Roadside Assistance',
  cefr: 'A2',
  unitId: 'unit_a2_10',
  lessonLinks: ['lesson_a2_10_145'],
  estimatedMinutes: 5,
  scenario:
    'You are stranded on the hard shoulder of the M4 motorway near Junction 18. Your rental car has a puncture (flat tire) and the battery appears dead. Call National Roadside Rescue dispatcher Oliver Scott. Give your exact highway location and vehicle details, confirm your safety precautions (hazard lights, high-visibility vest, standing behind the safety barrier), and request emergency roadside breakdown assistance.',
  communicativeGoals: [
    'Report vehicle breakdown specifics: flat tire, dead battery, overheating engine, warning lights',
    'Provide precise motorway location markers, junction numbers, and vehicle registration',
    'Describe safety precautions taken on a high-speed highway shoulder',
    'Understand recovery technician arrival estimates and safety instructions',
  ],
  canDoStatements: [
    'Can call emergency roadside breakdown assistance and describe vehicle faults clearly',
    'Can state exact highway locations, milepost markers, and car model/registration',
    'Can follow emergency road safety directives on high-speed motorways',
  ],
  characters: [
    {
      id: 'char_oliver_scott',
      name: 'Oliver Scott',
      role: 'Roadside Breakdown Dispatcher',
      avatar: '🚗',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'breakdown',
        ipa: '/ˈbreɪkdaʊn/',
        partOfSpeech: 'noun',
        meaning: 'A mechanical failure of a vehicle that prevents it from operating',
        exampleSentence: 'I need emergency breakdown assistance on the M4 motorway.',
        translations: { hi: 'गाड़ी खराब होना / ब्रेकडाउन' },
      },
      {
        word: 'puncture',
        ipa: '/ˈpʌŋktʃə/',
        partOfSpeech: 'noun',
        meaning: 'A small hole in a tire causing it to lose air (flat tire)',
        exampleSentence: 'I have a front-left puncture and cannot drive the vehicle.',
        translations: { hi: 'पंचर (टायर में छेद)' },
      },
      {
        word: 'shoulder',
        ipa: '/ˈʃəʊldə/',
        partOfSpeech: 'noun',
        meaning: 'A paved strip alongside a highway for emergency stopping (hard shoulder)',
        exampleSentence: 'I pulled over onto the hard shoulder and turned on hazard lights.',
        translations: { hi: 'सड़क का किनारा / हार्ड शोल्डर' },
      },
      {
        word: 'barrier',
        ipa: '/ˈbæriə/',
        partOfSpeech: 'noun',
        meaning: 'A protective fence or railing alongside a highway',
        exampleSentence: 'I am waiting safely behind the metal safety barrier.',
        translations: { hi: 'सुरक्षा घेरा / बैरियर' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am stranded on the M4 westbound, just past Junction 18.',
        functionCategory: 'Giving Motorway Location',
        exampleSentence: 'I am parked near milepost marker 42.',
      },
      {
        phrase: 'My car has a flat tire and the engine won’t start.',
        functionCategory: 'Describing Vehicle Mechanical Problems',
        exampleSentence: 'The battery is completely flat.',
      },
      {
        phrase: 'I have turned on my hazard lights and I am wearing a high-visibility vest.',
        functionCategory: 'Confirming Safety Measures Taken',
        exampleSentence: 'All passengers are standing behind the metal barrier.',
      },
      {
        phrase: 'How long will the recovery patrol truck take to arrive?',
        functionCategory: 'Inquiring About Response Time',
        exampleSentence: 'What is the estimated arrival time for the mechanic?',
      },
    ],
    grammar: {
      title: 'Imperatives & Present Continuous in Emergency Reporting',
      conceptExplanation:
        '1. Reporting Current Safety Status: Present Continuous ("I am standing behind the barrier", "The hazard lights are flashing").\n2. Stating Mechanical State: Present Simple ("The car has a flat tire", "The battery doesn\'t start").\n3. Emergency Instructions / Imperatives: "Stay behind the barrier", "Do not re-enter the vehicle".',
      patternFormula: 'I am [Location] + My car has [Fault] + I am [Safety Action]',
      contrastExamples: [
        {
          incorrect: 'I am on highway inside my car waiting.',
          correct: 'I have parked on the hard shoulder and I am waiting behind the safety barrier.',
          explanation: 'Safety protocol requires standing outside the car behind the highway barrier.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Oliver Scott',
        text: 'National Roadside Rescue. Oliver speaking. What is your emergency and location?',
        translation: 'नेशनल रोडसाइड रेस्क्यू। ऑलिवर बात कर रहा हूँ। आपकी आपातकालीन स्थिति और स्थान क्या है?',
      },
      {
        speaker: 'You',
        text: 'Hello Oliver. I am stranded on the M4 westbound, approximately two miles after Junction 18. My silver Ford Focus has a front-left puncture and the battery is dead.',
        translation: 'नमस्ते ऑलिवर। मैं एम4 वेस्टबाउंड पर, जंक्शन 18 से लगभग दो मील आगे फंसा हुआ हूँ। मेरी सिल्वर फोर्ड फोकस में आगे का बायां पहिया पंचर है और बैटरी खराब है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_145_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "I pulled over onto the ___ (hard shoulder / high street) because of a flat tire."',
      options: [
        { id: 'opt_1', text: 'hard shoulder', isCorrect: true },
        { id: 'opt_2', text: 'high street', isCorrect: false },
        { id: 'opt_3', text: 'bus stop', isCorrect: false },
      ],
      correctAnswer: 'hard shoulder',
      explanation: '"Hard shoulder" is the emergency lane on motorways.',
    },
    {
      id: 'cp_a2_145_2',
      type: 'multiple_choice',
      prompt: 'Where should passengers stand during a motorway breakdown?',
      options: [
        { id: 'opt_1', text: 'Safely behind the metal crash barrier on the grassy embankment', isCorrect: true },
        { id: 'opt_2', text: 'Inside the car with seatbelts fastened', isCorrect: false },
        { id: 'opt_3', text: 'In the middle of the motorway lane', isCorrect: false },
      ],
      correctAnswer: 'Safely behind the metal crash barrier on the grassy embankment',
      explanation: 'UK highway code mandates standing behind the safety barrier.',
    },
    {
      id: 'cp_a2_145_3',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes a dead battery?',
      options: [
        { id: 'opt_1', text: 'The battery is dead and the engine won’t turn over.', isCorrect: true },
        { id: 'opt_2', text: 'The battery has dying yesterday.', isCorrect: false },
        { id: 'opt_3', text: 'Battery is not living now.', isCorrect: false },
      ],
      correctAnswer: 'The battery is dead and the engine won’t turn over.',
      explanation: 'Standard automotive vocabulary: "battery is dead / engine won’t turn over".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_145_1',
      scenarioContext: 'Report location on the M4.',
      prompt: 'Build: "I am stranded on the M4 near Junction 18."',
      targetStructure: 'Subject + am stranded + on the M4 + near + Junction 18',
      wordBank: ['I', 'am', 'stranded', 'on', 'the', 'M4', 'near', 'Junction', '18', 'stranding', 'in'],
      acceptableSolutions: [
        'I am stranded on the M4 near Junction 18',
        'I am stranded on the M4 near Junction 18.',
      ],
      explanation: 'Clear emergency location statement.',
    },
    {
      id: 'sc_a2_145_2',
      scenarioContext: 'Confirm safety position behind barrier.',
      prompt: 'Build: "I am waiting safely behind the barrier."',
      targetStructure: 'Subject + am waiting + adverb + preposition + article + noun',
      wordBank: ['I', 'am', 'waiting', 'safely', 'behind', 'the', 'barrier', 'wait', 'in'],
      acceptableSolutions: [
        'I am waiting safely behind the barrier',
        'I am waiting safely behind the barrier.',
      ],
      explanation: 'Confirms personal safety compliance on highway.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_145_1',
      turnIndex: 1,
      partnerPrompt:
        'National Roadside Rescue, Oliver speaking. Are you in a safe location, and what is your current motorway position and vehicle registration?',
      partnerAudioText:
        'National Roadside Rescue, Oliver speaking. Are you in a safe location, and what is your current motorway position and vehicle registration?',
      partnerQuestionHindi:
        'नेशनल रोडसाइड रेस्क्यू, ऑलिवर बात कर रहा हूँ। क्या आप सुरक्षित स्थान पर हैं, और आपकी वर्तमान मोटरवे स्थिति और वाहन पंजीकरण संख्या क्या है?',
      expectedFunction: 'State Location, Vehicle Details & Breakdown Nature (M4 westbound / Junction 18 / Ford Focus / flat tire)',
      contextGoal:
        'State your location (M4 westbound, 2 miles past Junction 18), vehicle details (Silver Ford Focus, reg AB21 XYZ), and report a flat tire and dead battery.',
      targetVocabulary: ['stranded on the M4 westbound', 'two miles past Junction 18', 'silver Ford Focus', 'front-left puncture and dead battery'],
      suggestedResponses: [
        {
          label: 'Complete Incident Report',
          text: 'Hello Oliver. I am stranded on the hard shoulder of the M4 westbound, about two miles past Junction 18. I am driving a silver Ford Focus, registration AB21 XYZ. I have a flat front tire and the battery won’t start.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Report',
          text: 'I am on the M4 westbound near Junction 18. My car is a silver Ford Focus with a flat tire and dead battery.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Location & Highway (m4 / motorway / junction 18 / westbound / hard shoulder / miles)',
          patterns: ['m4', 'motorway', 'junction 18', 'westbound', 'hard shoulder', 'miles', 'location', 'shoulder'],
          required: true,
        },
        {
          name: 'Vehicle & Fault (ford / focus / car / puncture / flat tire / tire / battery / registration / silver)',
          patterns: ['ford', 'focus', 'car', 'puncture', 'flat tire', 'tire', 'battery', 'registration', 'silver', 'won\'t start'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_145_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I have a flat ___ (tire / wheel) on the front left."',
        options: [
          { id: 'opt_1', text: 'tire', isCorrect: true },
          { id: 'opt_2', text: 'tiring', isCorrect: false },
          { id: 'opt_3', text: 'rubber', isCorrect: false },
        ],
        correctAnswer: 'tire',
        explanation: '"Flat tire" or "puncture" is the standard term.',
      },
    },
    {
      id: 'turn_a2_145_2',
      turnIndex: 2,
      partnerPrompt:
        'Thank you, I’ve pinpointed your vehicle on our GPS system. Highway safety is crucial right now. Have you activated your hazard lights, put on a high-visibility vest, and exited the vehicle?',
      partnerAudioText:
        'Thank you, I’ve pinpointed your vehicle on our GPS system. Highway safety is crucial right now. Have you activated your hazard lights, put on a high-visibility vest, and exited the vehicle?',
      partnerQuestionHindi:
        'धन्यवाद, मैंने हमारे जीपीएस सिस्टम पर आपके वाहन को चिह्नित कर लिया है। राजमार्ग सुरक्षा इस समय महत्वपूर्ण है। क्या आपने अपनी आपातकालीन (हैजार्ड) लाइटें चालू की हैं, एक हाई-विजिबिलिटी बनियान पहनी है, और वाहन से बाहर निकले हैं?',
      expectedFunction: 'Confirm Safety Measures (hazard lights on / wearing hi-vis vest / standing behind barrier)',
      contextGoal:
        'Confirm all three safety steps: hazard lights are flashing, you are wearing a high-visibility vest, and you are standing safely behind the metal safety barrier on the embankment.',
      targetVocabulary: ['hazard lights are flashing', 'wearing a high-visibility vest', 'standing safely behind the metal barrier', 'up on the grass embankment'],
      suggestedResponses: [
        {
          label: 'Safety Confirmation',
          text: 'Yes, the hazard warning lights are on, I am wearing a high-visibility yellow vest, and I am standing safely behind the metal barrier on the grass embankment away from traffic.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Safety Statement',
          text: 'Yes, hazard lights are on, I have my safety vest on, and I am behind the barrier.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Safety Actions (hazard / lights / vest / hi-vis / barrier / embankment / behind / grass / outside / safe)',
          patterns: ['hazard', 'lights', 'vest', 'hi-vis', 'barrier', 'embankment', 'behind', 'grass', 'outside', 'safe', 'flashing'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_145_2',
        type: 'multiple_choice',
        prompt: 'Which sentence best confirms safety precautions?',
        options: [
          { id: 'opt_1', text: 'Hazard lights are flashing and I am waiting safely behind the barrier.', isCorrect: true },
          { id: 'opt_2', text: 'I am sitting inside car listening to radio.', isCorrect: false },
          { id: 'opt_3', text: 'I walk on the road looking for gas.', isCorrect: false },
        ],
        correctAnswer: 'Hazard lights are flashing and I am waiting safely behind the barrier.',
        explanation: 'Correct road safety compliance statement.',
      },
    },
    {
      id: 'turn_a2_145_3',
      turnIndex: 3,
      partnerPrompt:
        'Excellent, that is the safest place to be. I have dispatched a recovery patrol truck from Bristol depot. How long are you able to wait, and do you need our mechanic to tow the vehicle or just fit a spare tire and boost the battery?',
      partnerAudioText:
        'Excellent, that is the safest place to be. I have dispatched a recovery patrol truck from Bristol depot. How long are you able to wait, and do you need our mechanic to tow the vehicle or just fit a spare tire and boost the battery?',
      partnerQuestionHindi:
        'उत्कृष्ट, यह रहने के लिए सबसे सुरक्षित स्थान है। मैंने ब्रिस्टल डिपो से एक रिकवरी गश्ती ट्रक भेजा है। आप कब तक प्रतीक्षा कर सकते हैं, और क्या आपको हमारे मैकेनिक द्वारा वाहन को टो करने की आवश्यकता है या सिर्फ एक अतिरिक्त पहिया लगाने और बैटरी को बूस्ट करने की आवश्यकता है?',
      expectedFunction: 'Specify Repair Needs & Inquire About ETA (fit spare tire / jump-start battery / What is the estimated arrival time?)',
      contextGoal:
        'Explain that fitting the spare tire and jump-starting the battery should be enough, and ask what the patrol truck’s estimated time of arrival (ETA) is.',
      targetVocabulary: ['fit the spare tire', 'jump-start the battery with booster cables', 'What is the estimated time of arrival?', 'no need to tow if it starts'],
      suggestedResponses: [
        {
          label: 'Service Request with ETA Inquiry',
          text: 'There is a spare tire and jack in the boot, so fitting the spare and jump-starting the battery should be enough. Could you tell me what the estimated arrival time is for the patrol truck?',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Request with Question',
          text: 'Fitting the spare tire and boosting the battery will be great. What is the mechanic’s ETA?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Repair Details (spare tire / spare / battery / jump-start / boost / jack / fix / tow)',
          patterns: ['spare tire', 'spare', 'battery', 'jump-start', 'boost', 'jack', 'fix', 'tow', 'fit'],
          required: true,
        },
        {
          name: 'ETA / Arrival Question (eta / arrival / time / how long / when / arrive / ?)',
          patterns: ['eta', 'arrival', 'time', 'how long', 'when', 'arrive', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_145_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "What is the estimated time of ___ (arrival / arrive)?"',
        options: [
          { id: 'opt_1', text: 'arrival', isCorrect: true },
          { id: 'opt_2', text: 'arrive', isCorrect: false },
          { id: 'opt_3', text: 'arriving', isCorrect: false },
        ],
        correctAnswer: 'arrival',
        explanation: '"Estimated time of arrival" (ETA) is standard.',
      },
    },
    {
      id: 'turn_a2_145_4',
      turnIndex: 4,
      partnerPrompt:
        'The patrol technician, Dan, is currently 15 minutes away in a yellow recovery van. He has a diagnostic battery booster and heavy-duty tire tools. Stay behind the barrier until he arrives. I’ll text you a tracking link.',
      partnerAudioText:
        'The patrol technician, Dan, is currently 15 minutes away in a yellow recovery van. He has a diagnostic battery booster and heavy-duty tire tools. Stay behind the barrier until he arrives. I’ll text you a tracking link.',
      partnerQuestionHindi:
        'गश्ती तकनीशियन, डैन, वर्तमान में एक पीली रिकवरी वैन में 15 मिनट दूर है। उसके पास एक डायग्नोस्टिक बैटरी बूस्टर और हेवी-ड्यूटी टायर उपकरण हैं। जब तक वह न आ जाए, बैरियर के पीछे ही रहें। मैं आपको एक ट्रैकिंग लिंक टेक्स्ट करूँगा।',
      expectedFunction: 'Express Gratitude & Confirm Remaining Safe (Thank you Oliver / will stay behind barrier / watch for yellow van)',
      contextGoal:
        'Thank Oliver for the rapid response, confirm you will stay safely behind the barrier until Dan arrives, and end the call.',
      targetVocabulary: ['Thank you very much Oliver', 'appreciate the quick dispatch', 'I will stay behind the barrier', 'watch for Dan’s yellow van'],
      suggestedResponses: [
        {
          label: 'Appreciative Safety Closing',
          text: 'Thank you very much, Oliver! That is a very quick response. I will stay behind the barrier and keep an eye out for Dan’s yellow van. Thank you for your help!',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Closing',
          text: 'Thank you for your fast help, Oliver. I will wait behind the barrier for the yellow van.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Safety Commitment (thank you / thanks / oliver / barrier / wait / yellow van / dan / fast / quick)',
          patterns: ['thank you', 'thanks', 'oliver', 'barrier', 'wait', 'yellow van', 'dan', 'fast', 'quick', 'goodbye', 'bye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_145_4',
        type: 'multiple_choice',
        prompt: 'Which closing sentence is most appropriate when waiting for highway rescue?',
        options: [
          { id: 'opt_1', text: 'Thank you for your fast help, Oliver. I will wait safely behind the barrier.', isCorrect: true },
          { id: 'opt_2', text: 'I am walking along highway now bye.', isCorrect: false },
          { id: 'opt_3', text: 'Hurry up you are too slow.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for your fast help, Oliver. I will wait safely behind the barrier.',
        explanation: 'Courteous and emphasizes safety compliance.',
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
