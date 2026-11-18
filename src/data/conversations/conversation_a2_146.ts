import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_146: ConversationDefinition = {
  id: 'conv_a2_146',
  title: 'Emergency Services, Reporting Incidents & Urgent Support',
  cefr: 'A2',
  unitId: 'unit_a2_10',
  lessonLinks: ['lesson_a2_10_146'],
  estimatedMinutes: 5,
  scenario:
    'You are calling 999 emergency services in the UK. A small kitchen grease fire broke out in the community hall at 45 Queen’s Avenue, London. The building is evacuated, but one volunteer has a minor burn on their hand. Speak with emergency dispatcher Officer Karen Bradley. State which services are required (Fire and Ambulance), give the exact address and landmark, report the casualty condition, and follow urgent first-aid instructions.',
  communicativeGoals: [
    'State the required emergency service immediately (Police, Fire, or Ambulance)',
    'Provide precise street address, postal code, and nearby landmarks calmly',
    'Describe the nature of the incident (kitchen grease fire, smoke, evacuation status)',
    'Report casualty condition (conscious, breathing, burn injury) and follow first-aid instructions',
  ],
  canDoStatements: [
    'Can call emergency services (999/112) and explain the nature of an urgent incident',
    'Can give clear location details, landmarks, and describe injuries accurately',
    'Can understand and execute urgent safety and first-aid instructions from a dispatcher',
  ],
  characters: [
    {
      id: 'char_karen_bradley',
      name: 'Officer Karen Bradley',
      role: 'Emergency 999 Dispatch Operator',
      avatar: '🚨',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'emergency',
        ipa: '/ɪˈmɜːdʒənsi/',
        partOfSpeech: 'noun',
        meaning: 'A serious, unexpected, and dangerous situation requiring immediate action',
        exampleSentence: 'Emergency services were dispatched immediately to Queen’s Avenue.',
        translations: { hi: 'आपातकाल / आपातकालीन स्थिति' },
      },
      {
        word: 'dispatcher',
        ipa: '/dɪˈspætʃə/',
        partOfSpeech: 'noun',
        meaning: 'An operator who receives emergency calls and sends out emergency response units',
        exampleSentence: 'The 999 dispatcher calmly guided us through basic first aid.',
        translations: { hi: 'आपातकालीन डिस्पैचर / नियंत्रक' },
      },
      {
        word: 'casualty',
        ipa: '/ˈkæʒuəlti/',
        partOfSpeech: 'noun',
        meaning: 'A person injured or killed in an accident, fire, or emergency event',
        exampleSentence: 'There is one casualty with a minor burn on their left hand.',
        translations: { hi: 'दुर्घटना में घायल व्यक्ति' },
      },
      {
        word: 'evacuation',
        ipa: '/ɪˌvækjuˈeɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The process of moving people from a place of danger to a safe place',
        exampleSentence: 'The building evacuation was completed in under two minutes.',
        translations: { hi: 'निकासी / सुरक्षित बाहर निकालना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Emergency: Fire and Ambulance, please.',
        functionCategory: 'Stating Required Emergency Services',
        exampleSentence: 'Emergency: Police and Ambulance, please.',
      },
      {
        phrase: 'We are at 45 Queen’s Avenue, opposite St. Peter’s Church.',
        functionCategory: 'Giving Exact Address & Landmarks',
        exampleSentence: 'The incident is at the corner of High Street and Park Lane.',
      },
      {
        phrase: 'Everyone has evacuated outside; one person has a minor hand burn.',
        functionCategory: 'Reporting Building Status & Casualties',
        exampleSentence: 'The casualty is conscious and breathing normally.',
      },
      {
        phrase: 'We are running cool tap water over the burn right now.',
        functionCategory: 'Executing First-Aid Instructions',
        exampleSentence: 'We have applied a clean, sterile cloth.',
      },
    ],
    grammar: {
      title: 'Imperatives & Urgent Narrative Forms in Emergency Reporting',
      conceptExplanation:
        '1. Stating Needs Promptly: "[Service], please. There is a [Fire/Accident] at [Address]."\n2. Stating Casualty Status: "[Person] is conscious and breathing, but has a [injury]."\n3. Following Instructions: Dispatchers use imperative verbs ("Do not enter", "Cool the burn with water"). Respond with confirmation ("We are cooling the burn now").',
      patternFormula: 'Emergency: [Service] -> Location: [Address] -> Incident: [Description] -> Status: [Casualty]',
      contrastExamples: [
        {
          incorrect: 'Fire is happening maybe come if you want.',
          correct: 'Emergency: Fire and Ambulance, please. There is a kitchen fire at 45 Queen’s Avenue.',
          explanation: 'Emergency reporting requires immediate, clear identification of services and location.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Officer Karen Bradley',
        text: 'Emergency services. Which service do you require: Police, Fire, or Ambulance?',
        translation: 'आपातकालीन सेवाएं। आपको किस सेवा की आवश्यकता है: पुलिस, फायर ब्रिगेड, या एम्बुलेंस?',
      },
      {
        speaker: 'You',
        text: 'Fire and Ambulance, please. There is a kitchen grease fire at the Community Hall, 45 Queen’s Avenue. The building is evacuated, but one person has a burn on their hand.',
        translation: 'फायर ब्रिगेड और एम्बुलेंस, कृपया। 45 क्वींस एवेन्यू स्थित कम्युनिटी हॉल में रसोई के तेल में आग लग गई है। इमारत को खाली करा लिया गया है, लेकिन एक व्यक्ति के हाथ पर जलन (घाव) है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_146_1',
      type: 'fill_blank',
      prompt: 'Complete the emergency phrase: "Emergency: Fire and ___, please!"',
      options: [
        { id: 'opt_1', text: 'Ambulance', isCorrect: true },
        { id: 'opt_2', text: 'Taxi', isCorrect: false },
        { id: 'opt_3', text: 'Bus', isCorrect: false },
      ],
      correctAnswer: 'Ambulance',
      explanation: '"Police, Fire, or Ambulance" are the three core UK emergency services.',
    },
    {
      id: 'cp_a2_146_2',
      type: 'multiple_choice',
      prompt: 'What is the immediate first-aid step for a minor burn?',
      options: [
        { id: 'opt_1', text: 'Cool the burn under gentle, cold running water for 10 to 20 minutes', isCorrect: true },
        { id: 'opt_2', text: 'Put hot butter and ice directly on the wound', isCorrect: false },
        { id: 'opt_3', text: 'Cover it tightly with dirty paper towels', isCorrect: false },
      ],
      correctAnswer: 'Cool the burn under gentle, cold running water for 10 to 20 minutes',
      explanation: 'Official first-aid guidelines recommend cooling burns with clean running water.',
    },
    {
      id: 'cp_a2_146_3',
      type: 'multiple_choice',
      prompt: 'How should you describe a casualty who is awake and speaking?',
      options: [
        { id: 'opt_1', text: 'The casualty is fully conscious, alert, and breathing normally.', isCorrect: true },
        { id: 'opt_2', text: 'The casualty is sleeping dead.', isCorrect: false },
        { id: 'opt_3', text: 'The casualty has no life.', isCorrect: false },
      ],
      correctAnswer: 'The casualty is fully conscious, alert, and breathing normally.',
      explanation: 'Accurate clinical terms: "conscious", "alert", "breathing normally".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_146_1',
      scenarioContext: 'State required emergency services and location.',
      prompt: 'Build: "Fire and Ambulance at forty-five Queen’s Avenue."',
      targetStructure: 'Fire and Ambulance + at + number + street name',
      wordBank: ['Fire', 'and', 'Ambulance', 'at', 'forty-five', 'Queen’s', 'Avenue', 'Police', 'going'],
      acceptableSolutions: [
        'Fire and Ambulance at forty-five Queen’s Avenue',
        'Fire and Ambulance at forty-five Queen’s Avenue.',
      ],
      explanation: 'Urgent, concise emergency information delivery.',
    },
    {
      id: 'sc_a2_146_2',
      scenarioContext: 'Report casualty condition.',
      prompt: 'Build: "The casualty is conscious and breathing normally."',
      targetStructure: 'Subject + is + adjective + and + verb-ing + adverb',
      wordBank: ['The', 'casualty', 'is', 'conscious', 'and', 'breathing', 'normally', 'breath', 'unconscious'],
      acceptableSolutions: [
        'The casualty is conscious and breathing normally',
        'The casualty is conscious and breathing normally.',
      ],
      explanation: 'Standard medical status assessment sentence.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_146_1',
      turnIndex: 1,
      partnerPrompt:
        'Emergency 999. Which service do you require: Police, Fire, or Ambulance, and what is the address of the emergency?',
      partnerAudioText:
        'Emergency 999. Which service do you require: Police, Fire, or Ambulance, and what is the address of the emergency?',
      partnerQuestionHindi:
        'आपातकालीन 999। आपको किस सेवा की आवश्यकता है: पुलिस, फायर ब्रिगेड, या एम्बुलेंस, और आपातकाल का पता क्या है?',
      expectedFunction: 'State Services Required & Exact Location (Fire and Ambulance / 45 Queen’s Avenue / kitchen fire)',
      contextGoal:
        'Request Fire and Ambulance services immediately, state the address (Community Hall, 45 Queen’s Avenue, opposite St. Peter’s Church), and mention a kitchen fire.',
      targetVocabulary: ['Fire and Ambulance, please', 'Community Hall at 45 Queen’s Avenue', 'opposite St. Peter’s Church', 'kitchen grease fire with smoke'],
      suggestedResponses: [
        {
          label: 'Immediate Concise Emergency Call',
          text: 'Fire and Ambulance, please. There is a kitchen grease fire at the Community Hall, 45 Queen’s Avenue, opposite St. Peter’s Church. There is dense smoke in the kitchen.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Call',
          text: 'Fire and Ambulance! We have a kitchen fire at 45 Queen’s Avenue.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Services (fire / ambulance / emergency / police)',
          patterns: ['fire', 'ambulance', 'emergency', 'police'],
          required: true,
        },
        {
          name: 'Address & Incident (45 / queen / avenue / church / community hall / hall / kitchen / grease / fire / smoke)',
          patterns: ['45', 'queen', 'avenue', 'church', 'community hall', 'hall', 'kitchen', 'grease', 'fire', 'smoke', 'st. peter'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_146_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Emergency: Fire and ___, please."',
        options: [
          { id: 'opt_1', text: 'Ambulance', isCorrect: true },
          { id: 'opt_2', text: 'Post Office', isCorrect: false },
          { id: 'opt_3', text: 'Supermarket', isCorrect: false },
        ],
        correctAnswer: 'Ambulance',
        explanation: 'State the required emergency service immediately.',
      },
    },
    {
      id: 'turn_a2_146_2',
      turnIndex: 2,
      partnerPrompt:
        'Fire and rescue crews and an ambulance are being dispatched right now. Has the building been fully evacuated, and is anyone trapped inside?',
      partnerAudioText:
        'Fire and rescue crews and an ambulance are being dispatched right now. Has the building been fully evacuated, and is anyone trapped inside?',
      partnerQuestionHindi:
        'दमकल एवं बचाव दल और एक एम्बुलेंस अभी भेजी जा रही है। क्या इमारत पूरी तरह से खाली करा ली गई है, और क्या कोई अंदर फंसा हुआ है?',
      expectedFunction: 'Confirm Evacuation Status & Absence of Trapped Persons (everyone is outside / evacuated / nobody trapped)',
      contextGoal:
        'Confirm that all 15 people have evacuated outside to the assembly point on the car park and nobody is trapped inside.',
      targetVocabulary: ['all 15 people have evacuated', 'everyone is outside safely', 'assembly point in the car park', 'nobody is trapped inside the building'],
      suggestedResponses: [
        {
          label: 'Clear Evacuation Report',
          text: 'Yes, the building has been completely evacuated. All 15 people are outside safely at the assembly point in the front car park. Nobody is trapped inside.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Confirmation',
          text: 'Everyone has evacuated to the car park. Nobody is inside the building.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Evacuation & Safety (evacuated / outside / car park / assembly / safe / out / empty / left / 15)',
          patterns: ['evacuated', 'outside', 'car park', 'assembly', 'safe', 'out', 'empty', 'left', '15', 'all people'],
          required: true,
        },
        {
          name: 'Nobody Trapped (nobody / no one / not trapped / clear / inside)',
          patterns: ['nobody', 'no one', 'not trapped', 'clear', 'inside', 'none'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_146_2',
        type: 'multiple_choice',
        prompt: 'Which phrase confirms that a building is clear?',
        options: [
          { id: 'opt_1', text: 'The building is fully evacuated; nobody is trapped inside.', isCorrect: true },
          { id: 'opt_2', text: 'All people are burning inside maybe.', isCorrect: false },
          { id: 'opt_3', text: 'Building has everyone staying.', isCorrect: false },
        ],
        correctAnswer: 'The building is fully evacuated; nobody is trapped inside.',
        explanation: 'Clear, reassuring emergency assessment statement.',
      },
    },
    {
      id: 'turn_a2_146_3',
      turnIndex: 3,
      partnerPrompt:
        'Understood. Tell me about the injured person. Are they conscious and breathing, how severe is the burn, and what have you done so far?',
      partnerAudioText:
        'Understood. Tell me about the injured person. Are they conscious and breathing, how severe is the burn, and what have you done so far?',
      partnerQuestionHindi:
        'समझा। मुझे घायल व्यक्ति के बारे में बताएं। क्या वे होश में हैं और सांस ले रहे हैं, जलन कितनी गंभीर है, और आपने अब तक क्या किया है?',
      expectedFunction: 'Describe Casualty Condition & First Aid (conscious / breathing / minor hand burn / running cool water)',
      contextGoal:
        'Report that the casualty is fully conscious, breathing normally, has a minor burn on their left hand, and you are running cool tap water over it.',
      targetVocabulary: ['conscious and breathing normally', 'minor burn on the left palm', 'running cool tap water over the burn', 'keeping them calm and seated'],
      suggestedResponses: [
        {
          label: 'Detailed Casualty Assessment',
          text: 'The casualty is fully conscious, alert, and breathing normally. They have a minor burn on their left palm from holding the pan. We are cooling the burn under running tap water right now and keeping them seated.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Assessment',
          text: 'They are conscious and breathing fine. It’s a minor burn on the hand, and we are running cool water on it.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Casualty State (conscious / alert / awake / breathing / fine / normal)',
          patterns: ['conscious', 'alert', 'awake', 'breathing', 'fine', 'normal', 'calm'],
          required: true,
        },
        {
          name: 'Burn & First Aid (burn / hand / palm / water / cool / running water / tap)',
          patterns: ['burn', 'hand', 'palm', 'water', 'cool', 'running water', 'tap', 'minor'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_146_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We are running ___ (cool / hot) water over the burn."',
        options: [
          { id: 'opt_1', text: 'cool', isCorrect: true },
          { id: 'opt_2', text: 'hot', isCorrect: false },
          { id: 'opt_3', text: 'boiling', isCorrect: false },
        ],
        correctAnswer: 'cool',
        explanation: 'Always use cool or lukewarm running water on burns.',
      },
    },
    {
      id: 'turn_a2_146_4',
      turnIndex: 4,
      partnerPrompt:
        'Continue running cool water over the burn. Do not apply ice or creams. The fire engine and ambulance have just turned onto Queen’s Avenue with sirens active. Stay on the line until you see the firefighters.',
      partnerAudioText:
        'Continue running cool water over the burn. Do not apply ice or creams. The fire engine and ambulance have just turned onto Queen’s Avenue with sirens active. Stay on the line until you see the firefighters.',
      partnerQuestionHindi:
        'जलन पर ठंडा पानी डालना जारी रखें। बर्फ या क्रीम न लगाएं। दमकल गाड़ी और एम्बुलेंस सायरन बजाते हुए अभी क्वींस एवेन्यू पर मुड़ी हैं। जब तक आप दमकलकर्मियों को न देख लें तब तक लाइन पर बने रहें।',
      expectedFunction: 'Acknowledge Arrival, Express Gratitude & Hand Over (I see the flashing blue lights / firefighters are here / thank you Karen)',
      contextGoal:
        'Confirm you see the fire engine and ambulance pulling into the car park, thank Officer Bradley for her guidance, and prepare to speak to the firefighters.',
      targetVocabulary: ['I can see the fire engine and ambulance now', 'pulling into the car park', 'thank you for your help Officer Bradley', 'waving the firefighters over'],
      suggestedResponses: [
        {
          label: 'Arrival Confirmation & Close',
          text: 'I can see the blue lights now—the fire engine and ambulance have just pulled into the car park. I am waving the firefighters over. Thank you very much for your calm guidance, Officer Bradley!',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Confirmation',
          text: 'The fire truck is here now in the car park. Thank you for your help!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Emergency Services Arrival (see / blue lights / fire engine / truck / ambulance / arrived / here / pulled in / firefighters)',
          patterns: ['see', 'blue lights', 'fire engine', 'truck', 'ambulance', 'arrived', 'here', 'pulled in', 'firefighters', 'car park'],
          required: true,
        },
        {
          name: 'Gratitude (thank you / thanks / officer bradley / guidance / help)',
          patterns: ['thank you', 'thanks', 'officer bradley', 'guidance', 'help', 'karen', 'goodbye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_146_4',
        type: 'multiple_choice',
        prompt: 'What should you say when emergency units arrive at the scene?',
        options: [
          { id: 'opt_1', text: 'The fire engine and ambulance are here now. Thank you for your guidance!', isCorrect: true },
          { id: 'opt_2', text: 'I hang up because I am running away.', isCorrect: false },
          { id: 'opt_3', text: 'Firemen are late you must punish them.', isCorrect: false },
        ],
        correctAnswer: 'The fire engine and ambulance are here now. Thank you for your guidance!',
        explanation: 'Standard emergency handover statement.',
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
