import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_139: ConversationDefinition = {
  id: 'conv_a2_139',
  title: 'Travel Logistics, Booking Adjustments & Itinerary Changes',
  cefr: 'A2',
  unitId: 'unit_a2_10',
  lessonLinks: ['lesson_a2_10_139'],
  estimatedMinutes: 5,
  scenario:
    'You are at the customer service desk at London Gatwick Airport. You need to adjust your return flight booking to Zurich due to a business schedule change. Speak with airline representative Samantha Reyes, express travel preferences using "would prefer to" and "would rather", inquire about change fees, and confirm your updated itinerary.',
  communicativeGoals: [
    'Explain reasons for adjusting travel dates and flight times',
    'Express personal preferences using "would prefer to + verb" and "would rather + base verb"',
    'Ask about baggage allowances, seat selections, and change fee policies',
    'Confirm updated boarding passes and itinerary changes clearly',
  ],
  canDoStatements: [
    'Can request flight or booking modifications at a transport desk',
    'Can express travel preferences clearly using "would prefer" and "would rather"',
    'Can understand and ask about fare conditions, baggage rules, and extra fees',
  ],
  characters: [
    {
      id: 'char_samantha_reyes',
      name: 'Samantha Reyes',
      role: 'Airline Customer Service Agent',
      avatar: '✈️',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'itinerary',
        ipa: '/aɪˈtɪnərəri/',
        partOfSpeech: 'noun',
        meaning: 'A planned route or journey with scheduled dates and times',
        exampleSentence: 'Here is your updated flight itinerary showing your new departure time.',
        translations: { hi: 'यात्रा कार्यक्रम / यात्रा विवरण' },
      },
      {
        word: 'adjustment',
        ipa: '/əˈdʒʌstmənt/',
        partOfSpeech: 'noun',
        meaning: 'A small change or modification made to an existing booking or plan',
        exampleSentence: 'Is there any service fee for this booking adjustment?',
        translations: { hi: 'समायोजन / संशोधन' },
      },
      {
        word: 'carry-on',
        ipa: '/ˈkæri ɒn/',
        partOfSpeech: 'noun',
        meaning: 'Baggage that passengers are allowed to bring inside the airplane cabin',
        exampleSentence: 'My ticket includes one carry-on bag and one personal item.',
        translations: { hi: 'हाथ का सामान / केबिन बैग' },
      },
      {
        word: 'layover',
        ipa: '/ˈleɪəʊvə/',
        partOfSpeech: 'noun',
        meaning: 'A short stay between stages of a journey, especially between flights',
        exampleSentence: 'I would prefer a direct flight without a layover in Frankfurt.',
        translations: { hi: 'बीच का ठहराव / लेओवर' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I would like to change my return flight from Friday to Saturday.',
        functionCategory: 'Requesting a Booking Change',
        exampleSentence: 'I would like to upgrade my seat to premium economy.',
      },
      {
        phrase: 'I would prefer to take an evening flight if possible.',
        functionCategory: 'Expressing Preference with "would prefer to"',
        exampleSentence: 'I would prefer to sit by the aisle.',
      },
      {
        phrase: 'I would rather fly direct than have a 3-hour layover.',
        functionCategory: 'Expressing Strong Preference with "would rather"',
        exampleSentence: 'I would rather leave early in the morning.',
      },
      {
        phrase: 'Could you tell me if there is an additional change fee or fare difference?',
        functionCategory: 'Inquiring About Extra Charges',
        exampleSentence: 'Is there a charge for checking an extra bag?',
      },
    ],
    grammar: {
      title: 'Preferences: would prefer to + verb vs. would rather + base verb',
      conceptExplanation:
        '1. "would prefer to + [Base Verb]": e.g., "I would prefer to fly direct."\n2. "would rather + [Base Verb] + (than + [Base Verb])": e.g., "I would rather wait here than take a bus." (No "to" after "rather"!).\n3. Indirect Questions: "Could you tell me if [Subject + Verb]..."',
      patternFormula: 'I would prefer to + [Verb] / I would rather + [Verb] than + [Verb]',
      contrastExamples: [
        {
          incorrect: 'I would rather to take the morning flight.',
          correct: 'I would rather take the morning flight. / I would prefer to take the morning flight.',
          explanation: '"would rather" takes a bare infinitive (no "to").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Samantha Reyes',
        text: 'Hello, welcome to SkyWings service desk. How can I assist you with your travel plans today?',
        translation: 'नमस्ते, स्काईविंग्स सेवा डेस्क पर आपका स्वागत है। आज आपकी यात्रा योजनाओं में मैं आपकी किस प्रकार सहायता कर सकती हूँ?',
      },
      {
        speaker: 'You',
        text: 'Hello! I need to adjust my return flight to Zurich. I was scheduled for Friday afternoon, but I would like to change it to Saturday evening. Could you check the available seats?',
        translation: 'नमस्ते! मुझे ज्यूरिख के लिए अपनी वापसी उड़ान को समायोजित करने की आवश्यकता है। मेरा समय शुक्रवार दोपहर के लिए निर्धारित था, लेकिन मैं इसे शनिवार शाम में बदलना चाहूँगा। क्या आप उपलब्ध सीटें देख सकती हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_139_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "I would rather ___ (fly / to fly) direct than stop in Amsterdam."',
      options: [
        { id: 'opt_1', text: 'fly', isCorrect: true },
        { id: 'opt_2', text: 'to fly', isCorrect: false },
        { id: 'opt_3', text: 'flying', isCorrect: false },
      ],
      correctAnswer: 'fly',
      explanation: 'Use the base verb (bare infinitive) after "would rather".',
    },
    {
      id: 'cp_a2_139_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "would prefer"?',
      options: [
        { id: 'opt_1', text: 'I would prefer to take an evening departure.', isCorrect: true },
        { id: 'opt_2', text: 'I would prefer take an evening departure.', isCorrect: false },
        { id: 'opt_3', text: 'I would prefer taking than leaving early.', isCorrect: false },
      ],
      correctAnswer: 'I would prefer to take an evening departure.',
      explanation: '"would prefer" requires "to + base verb".',
    },
    {
      id: 'cp_a2_139_3',
      type: 'multiple_choice',
      prompt: 'How do you ask about extra fees politely?',
      options: [
        { id: 'opt_1', text: 'Could you tell me if there is a change fee for this flight?', isCorrect: true },
        { id: 'opt_2', text: 'How much money you take from me now?', isCorrect: false },
        { id: 'opt_3', text: 'Tell me fee price right now.', isCorrect: false },
      ],
      correctAnswer: 'Could you tell me if there is a change fee for this flight?',
      explanation: 'Polite indirect inquiry standard at airport counters.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_139_1',
      scenarioContext: 'Express preference for an evening flight.',
      prompt: 'Build: "I would prefer to take the Saturday evening flight."',
      targetStructure: 'Subject + would prefer to + base verb + article + day + time + noun',
      wordBank: ['I', 'would', 'prefer', 'to', 'take', 'the', 'Saturday', 'evening', 'flight', 'rather', 'taking'],
      acceptableSolutions: [
        'I would prefer to take the Saturday evening flight',
        'I would prefer to take the Saturday evening flight.',
      ],
      explanation: 'Uses "would prefer to + verb".',
    },
    {
      id: 'sc_a2_139_2',
      scenarioContext: 'Express strong preference without layover.',
      prompt: 'Build: "I would rather fly direct than have a layover."',
      targetStructure: 'Subject + would rather + verb + adverb + than + verb + noun phrase',
      wordBank: ['I', 'would', 'rather', 'fly', 'direct', 'than', 'have', 'a', 'layover', 'to', 'flying'],
      acceptableSolutions: [
        'I would rather fly direct than have a layover',
        'I would rather fly direct than have a layover.',
      ],
      explanation: 'Uses "would rather + base verb + than".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_139_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello and welcome to the customer service counter. How may I help you with your booking today?',
      partnerAudioText:
        'Hello and welcome to the customer service counter. How may I help you with your booking today?',
      partnerQuestionHindi:
        'नमस्ते और ग्राहक सेवा काउंटर पर आपका स्वागत है। आज आपकी बुकिंग में मैं आपकी किस प्रकार सहायता कर सकती हूँ?',
      expectedFunction: 'Request Flight Change & State Reason (change flight / Zurich / Saturday / work schedule)',
      contextGoal:
        'State that you need to change your return flight to Zurich from Friday to Saturday due to an extended business meeting.',
      targetVocabulary: ['need to adjust my return flight', 'flying to Zurich', 'change from Friday to Saturday', 'due to a schedule change'],
      suggestedResponses: [
        {
          label: 'Detailed Change Request',
          text: 'Hello! I need to adjust my return flight to Zurich. My current ticket is for Friday afternoon, but I would like to change it to Saturday because of an extended work meeting.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Request',
          text: 'Hi, I need to change my flight to Zurich from Friday to Saturday evening. Could you check the available seats?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Flight & Destination (flight / ticket / booking / zurich / change / adjust / reschedule / move)',
          patterns: ['flight', 'ticket', 'booking', 'zurich', 'change', 'adjust', 'reschedule', 'move'],
          required: true,
        },
        {
          name: 'Day / Time (friday / saturday / evening / afternoon / weekend)',
          patterns: ['friday', 'saturday', 'evening', 'afternoon', 'weekend', 'tomorrow'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'would_rather_to_rule',
          pattern: /\bwould rather to\b/i,
          errorType: 'grammar',
          message: 'Do not use "to" with "would rather". Say "I would rather fly" or "I would prefer to fly".',
          correctionPattern: 'I would rather fly',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_139_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I would rather ___ (leave / to leave) on Saturday."',
        options: [
          { id: 'opt_1', text: 'leave', isCorrect: true },
          { id: 'opt_2', text: 'to leave', isCorrect: false },
          { id: 'opt_3', text: 'leaving', isCorrect: false },
        ],
        correctAnswer: 'leave',
        explanation: '"would rather" takes a bare verb without "to".',
      },
    },
    {
      id: 'turn_a2_139_2',
      turnIndex: 2,
      partnerPrompt:
        'Let me look up the schedule for Saturday. We have an early morning flight at 6:30 AM with a short layover in Frankfurt, and a direct flight departing at 7:15 PM. Which option works better for you?',
      partnerAudioText:
        'Let me look up the schedule for Saturday. We have an early morning flight at 6:30 AM with a short layover in Frankfurt, and a direct flight departing at 7:15 PM. Which option works better for you?',
      partnerQuestionHindi:
        'मुझे शनिवार का शेड्यूल देखने दें। हमारे पास फ्रैंकफर्ट में एक छोटे लेओवर के साथ सुबह 6:30 बजे की उड़ान है, और शाम 7:15 बजे प्रस्थान करने वाली एक सीधी उड़ान है। आपके लिए कौन सा विकल्प बेहतर काम करता है?',
      expectedFunction: 'Express Flight Preference (would prefer to / would rather / direct / 7:15 PM)',
      contextGoal:
        'Express a clear preference for the 7:15 PM direct flight using "would prefer to" or "would rather".',
      targetVocabulary: ['I would prefer to take the 7:15 PM direct flight', 'I would rather fly direct than have a layover', 'evening departure fits my schedule', 'convenient connection'],
      suggestedResponses: [
        {
          label: 'Preference with Comparison',
          text: 'I would rather take the 7:15 PM direct flight than have a layover in Frankfurt. An evening departure gives me plenty of time on Saturday.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Preference',
          text: 'I would prefer to book the 7:15 PM direct flight, please. That suits my schedule much better.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Preference & Choice (7:15 / direct / evening / rather / prefer / direct flight / frankfurt / layover)',
          patterns: ['7:15', 'direct', 'evening', 'rather', 'prefer', 'direct flight', 'layover', 'pm'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_139_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly compares two choices?',
        options: [
          { id: 'opt_1', text: 'I would rather fly direct than have a layover.', isCorrect: true },
          { id: 'opt_2', text: 'I would rather fly direct to have a layover.', isCorrect: false },
          { id: 'opt_3', text: 'I rather to fly direct than layover.', isCorrect: false },
        ],
        correctAnswer: 'I would rather fly direct than have a layover.',
        explanation: 'Formula: "would rather [Verb A] than [Verb B]".',
      },
    },
    {
      id: 'turn_a2_139_3',
      turnIndex: 3,
      partnerPrompt:
        'Great choice. There is an economy seat available on that 7:15 PM direct flight. The standard fare difference is £35. Would you like to select an aisle seat and add any checked luggage?',
      partnerAudioText:
        'Great choice. There is an economy seat available on that 7:15 PM direct flight. The standard fare difference is £35. Would you like to select an aisle seat and add any checked luggage?',
      partnerQuestionHindi:
        'बहुत बढ़िया विकल्प। उस शाम 7:15 बजे की सीधी उड़ान में एक इकोनॉमी सीट उपलब्ध है। मानक किराया अंतर £35 है। क्या आप एक गलियारे (aisle) की सीट चुनना चाहेंगे और कोई चेक-इन सामान जोड़ना चाहेंगे?',
      expectedFunction: 'Specify Seat & Baggage & Inquire About Total (aisle seat / carry-on only / total cost / receipt)',
      contextGoal:
        'Choose an aisle seat, clarify that you only have a carry-on bag (no checked luggage), and ask how much the total payment will be.',
      targetVocabulary: ['I would prefer an aisle seat', 'only traveling with carry-on luggage', 'no checked bags', 'Could you tell me the total amount?'],
      suggestedResponses: [
        {
          label: 'Detailed Selection with Question',
          text: 'An aisle seat would be wonderful, thank you. I only have a carry-on bag, so I don’t need checked luggage. Could you tell me if the total fee is just £35?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Selection',
          text: 'Yes, I would prefer an aisle seat. I only have hand luggage. How much is the total charge?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Seat & Bag Selection (aisle / seat / carry-on / hand luggage / no checked / bag)',
          patterns: ['aisle', 'seat', 'carry-on', 'hand luggage', 'no checked', 'bag', 'luggage'],
          required: true,
        },
        {
          name: 'Fee / Total (total / 35 / fee / pay / cost / card / ?)',
          patterns: ['total', '35', 'fee', 'pay', 'cost', 'charge', 'card', 'price', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_139_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I only have one ___ (carry-on / carried-on) suitcase."',
        options: [
          { id: 'opt_1', text: 'carry-on', isCorrect: true },
          { id: 'opt_2', text: 'carried-on', isCorrect: false },
          { id: 'opt_3', text: 'carrying-on', isCorrect: false },
        ],
        correctAnswer: 'carry-on',
        explanation: '"Carry-on" is the standard compound noun/adjective for cabin baggage.',
      },
    },
    {
      id: 'turn_a2_139_4',
      turnIndex: 4,
      partnerPrompt:
        'Yes, the total is exactly £35. Payment has gone through successfully! Here is your printed boarding pass for Saturday at 7:15 PM, Seat 14C. Have a pleasant flight to Zurich!',
      partnerAudioText:
        'Yes, the total is exactly £35. Payment has gone through successfully! Here is your printed boarding pass for Saturday at 7:15 PM, Seat 14C. Have a pleasant flight to Zurich!',
      partnerQuestionHindi:
        'हाँ, कुल राशि ठीक £35 है। भुगतान सफलतापूर्वक हो गया है! यह शनिवार शाम 7:15 बजे, सीट 14C के लिए आपका मुद्रित बोर्डिंग पास है। ज्यूरिख के लिए आपकी उड़ान सुखद हो!',
      expectedFunction: 'Acknowledge, Express Gratitude & Conclude (Thank you Samantha / appreciate your help / have a nice day)',
      contextGoal:
        'Acknowledge receipt of the boarding pass, thank Samantha for her assistance, and say goodbye.',
      targetVocabulary: ['Thank you very much', 'received the boarding pass', 'appreciate your help', 'have a wonderful day'],
      suggestedResponses: [
        {
          label: 'Polite Farewell',
          text: 'Thank you very much, Samantha. I appreciate your quick help with changing my booking. Have a wonderful day!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Farewell',
          text: 'Thank you for your help. Have a great day!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Farewell (thank you / thanks / appreciate / boarding pass / have a nice day / goodbye)',
          patterns: ['thank you', 'thanks', 'appreciate', 'boarding pass', 'have a nice day', 'have a good day', 'goodbye', 'bye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_139_4',
        type: 'multiple_choice',
        prompt: 'Which response is polite and natural when receiving your boarding pass?',
        options: [
          { id: 'opt_1', text: 'Thank you very much for your help, have a great day!', isCorrect: true },
          { id: 'opt_2', text: 'Give me ticket I go now.', isCorrect: false },
          { id: 'opt_3', text: 'I am finished with you.', isCorrect: false },
        ],
        correctAnswer: 'Thank you very much for your help, have a great day!',
        explanation: 'Courteous customer service wrap-up.',
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
