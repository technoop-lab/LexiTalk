import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_140: ConversationDefinition = {
  id: 'conv_a2_140',
  title: 'Navigating City Services, Public Transport & Local Facilities',
  cefr: 'A2',
  unitId: 'unit_a2_10',
  lessonLinks: ['lesson_a2_10_140'],
  estimatedMinutes: 5,
  scenario:
    'You are at the Central Information Kiosk at Piccadilly Station in London. Speak with transit supervisor Officer Liam Gallagher. Use polite indirect questions ("Could you tell me...", "Do you know if...") to ask about renewing your monthly travelcard, finding the subway line to the municipal council office, and getting a public library membership.',
  communicativeGoals: [
    'Use polite indirect question forms ("Could you tell me...", "Do you know if...", "Would you happen to know...")',
    'Ask for directions and transit connections within a multi-line subway network',
    'Inquire about municipal services, registration procedures, and required documentation',
    'Clarify operating hours, fare zones, and appointment policies',
  ],
  canDoStatements: [
    'Can ask for public transport information and directions using polite indirect questions',
    'Can inquire about city services, passes, and public library memberships',
    'Can understand instructions regarding transit routes, platforms, and ticketing machines',
  ],
  characters: [
    {
      id: 'char_liam_gallagher',
      name: 'Officer Liam Gallagher',
      role: 'Transit Supervisor & City Services Officer',
      avatar: '🚇',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'travelcard',
        ipa: '/ˈtrævlkɑːd/',
        partOfSpeech: 'noun',
        meaning: 'A ticket allowing unlimited travel on buses, trains, and subways within specific zones',
        exampleSentence: 'I need to renew my Zone 1-2 monthly travelcard.',
        translations: { hi: 'ट्रैवल कार्ड / यात्रा पास' },
      },
      {
        word: 'transit',
        ipa: '/ˈtrænzɪt/',
        partOfSpeech: 'noun',
        meaning: 'The carrying of people or goods from one place to another by public conveyance',
        exampleSentence: 'London public transit is reliable and fast.',
        translations: { hi: 'सार्वजनिक परिवहन' },
      },
      {
        word: 'municipal',
        ipa: '/mjuːˈnɪsɪpl/',
        partOfSpeech: 'adjective',
        meaning: 'Relating to a city, town, or its local government',
        exampleSentence: 'The municipal registry office is located near St. Peter’s Square.',
        translations: { hi: 'नगरपालिका / नगर निगम संबंधी' },
      },
      {
        word: 'membership',
        ipa: '/ˈmembəʃɪp/',
        partOfSpeech: 'noun',
        meaning: 'The state of belonging to an organization, club, or public service',
        exampleSentence: 'Public library membership is free for all local residents.',
        translations: { hi: 'सदस्यता' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Could you tell me how to renew my monthly transit pass?',
        functionCategory: 'Polite Indirect Question with "Could you tell me..."',
        exampleSentence: 'Could you tell me where the ticket office is?',
      },
      {
        phrase: 'Do you know if the Piccadilly Line connects directly to City Hall?',
        functionCategory: 'Indirect Question with "Do you know if..."',
        exampleSentence: 'Do you know if Platform 3 goes to the airport?',
      },
      {
        phrase: 'Would you happen to know what documents I need for library registration?',
        functionCategory: 'Inquiring About Requirements with "Would you happen to know..."',
        exampleSentence: 'Would you happen to know when the registry closes?',
      },
      {
        phrase: 'Which platform should I take for the southbound train?',
        functionCategory: 'Asking for Platform / Route Clarification',
        exampleSentence: 'Which line goes to Victoria Station?',
      },
    ],
    grammar: {
      title: 'Polite Indirect Questions: Could you tell me... / Do you know if...',
      conceptExplanation:
        '1. Indirect Question Word Order: Use statement order (Subject + Verb) rather than inverted question order.\n- Direct: "Where is the machine?" -> Indirect: "Could you tell me where the machine is?" (Not "where is the machine").\n- Direct: "Does this train stop at City Hall?" -> Indirect: "Do you know if this train stops at City Hall?"\n2. Politeness formula: "Could you tell me [Wh-word] + [Subject] + [Verb]?" / "Do you know if + [Subject] + [Verb]?"',
      patternFormula: 'Could you tell me + where/how/what + [Subject] + [Verb]?',
      contrastExamples: [
        {
          incorrect: 'Could you tell me where is the ticket machine?',
          correct: 'Could you tell me where the ticket machine is?',
          explanation: 'In indirect questions, the subject comes before the verb ("the ticket machine is").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Officer Liam Gallagher',
        text: 'Good day! Welcome to the Central Information Kiosk. How can I help you navigate the city today?',
        translation: 'शुभ दिन! केंद्रीय सूचना कियोस्क पर आपका स्वागत है। आज शहर में घूमने में मैं आपकी क्या मदद कर सकता हूँ?',
      },
      {
        speaker: 'You',
        text: 'Good morning, Officer. Could you tell me where I can renew my monthly travelcard? Also, do you know if the subway line goes directly to the municipal council office?',
        translation: 'शुभ प्रभात, ऑफिसर। क्या आप मुझे बता सकते हैं कि मैं अपना मासिक ट्रैवल कार्ड कहाँ नवीनीकृत कर सकता हूँ? इसके अलावा, क्या आप जानते हैं कि क्या सबवे लाइन सीधे नगर परिषद कार्यालय तक जाती है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_140_1',
      type: 'fill_blank',
      prompt: 'Complete the indirect question: "Could you tell me where the ticket office ___ (is / is it / does be)?"',
      options: [
        { id: 'opt_1', text: 'is', isCorrect: true },
        { id: 'opt_2', text: 'is it', isCorrect: false },
        { id: 'opt_3', text: 'does be', isCorrect: false },
      ],
      correctAnswer: 'is',
      explanation: 'Use statement order: subject ("the ticket office") + verb ("is").',
    },
    {
      id: 'cp_a2_140_2',
      type: 'multiple_choice',
      prompt: 'Which indirect question is grammatically correct?',
      options: [
        { id: 'opt_1', text: 'Do you know if Platform 2 goes to the library?', isCorrect: true },
        { id: 'opt_2', text: 'Do you know does Platform 2 go to the library?', isCorrect: false },
        { id: 'opt_3', text: 'Do you know if goes Platform 2 to the library?', isCorrect: false },
      ],
      correctAnswer: 'Do you know if Platform 2 goes to the library?',
      explanation: '"Do you know if" is followed by normal subject + verb word order.',
    },
    {
      id: 'cp_a2_140_3',
      type: 'multiple_choice',
      prompt: 'Which phrase is best for asking about required documents politely?',
      options: [
        { id: 'opt_1', text: 'Would you happen to know what documents I need for registration?', isCorrect: true },
        { id: 'opt_2', text: 'What documents you want give me now?', isCorrect: false },
        { id: 'opt_3', text: 'Tell me documents quick.', isCorrect: false },
      ],
      correctAnswer: 'Would you happen to know what documents I need for registration?',
      explanation: 'Polite and formal question standard for civic and public desks.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_140_1',
      scenarioContext: 'Ask where to renew a travelcard.',
      prompt: 'Build: "Could you tell me where I can renew my travelcard?"',
      targetStructure: 'Could you tell me + where + subject + modal + verb + object',
      wordBank: ['Could', 'you', 'tell', 'me', 'where', 'I', 'can', 'renew', 'my', 'travelcard', 'can I', 'when'],
      acceptableSolutions: [
        'Could you tell me where I can renew my travelcard',
        'Could you tell me where I can renew my travelcard?',
      ],
      explanation: 'Indirect question structure with subject "I" before modal "can".',
    },
    {
      id: 'sc_a2_140_2',
      scenarioContext: 'Ask if the train connects to City Hall.',
      prompt: 'Build: "Do you know if this line goes to City Hall?"',
      targetStructure: 'Do you know if + subject + verb + prepositional phrase',
      wordBank: ['Do', 'you', 'know', 'if', 'this', 'line', 'goes', 'to', 'City', 'Hall', 'does', 'going'],
      acceptableSolutions: [
        'Do you know if this line goes to City Hall',
        'Do you know if this line goes to City Hall?',
      ],
      explanation: 'Indirect yes/no question using "if".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_140_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello! Welcome to the Piccadilly Station Information Kiosk. Are you looking for train connections, ticket renewals, or city services?',
      partnerAudioText:
        'Hello! Welcome to the Piccadilly Station Information Kiosk. Are you looking for train connections, ticket renewals, or city services?',
      partnerQuestionHindi:
        'नमस्ते! पिकाडिली स्टेशन सूचना कियोस्क पर आपका स्वागत है। क्या आप ट्रेन कनेक्शन, टिकट नवीनीकरण या शहर की सेवाओं की तलाश कर रहे हैं?',
      expectedFunction: 'Inquire About Travelcard Renewal & Directions (Could you tell me where... / renew monthly travelcard / Zone 1-2)',
      contextGoal:
        'Use an indirect question to ask where you can renew your monthly Zone 1-2 travelcard and how to reach the ticket machines.',
      targetVocabulary: ['Could you tell me where I can renew my travelcard?', 'monthly pass for Zone 1 and 2', 'self-service ticket machines', 'customer service counter'],
      suggestedResponses: [
        {
          label: 'Polite Indirect Question',
          text: 'Good morning Officer. Could you tell me where I can renew my monthly Zone 1-2 travelcard? Are there ticket machines nearby, or should I go to the counter?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Inquiry',
          text: 'Hello! Could you tell me how to renew my monthly pass? Where is the nearest ticket machine?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Indirect Inquiry (could you tell me / do you know / where / how / can I)',
          patterns: ['could you tell me', 'do you know', 'where', 'how', 'can i', 'would you know'],
          required: true,
        },
        {
          name: 'Travelcard & Renewal (renew / travelcard / pass / monthly / ticket / machine / zone)',
          patterns: ['renew', 'travelcard', 'pass', 'monthly', 'ticket', 'machine', 'zone', 'card'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'indirect_order_rule',
          pattern: /\bwhere can I renew\?/i,
          errorType: 'grammar',
          message: 'In indirect questions with "Could you tell me...", use statement order: "Could you tell me where I can renew..."',
          correctionPattern: 'where I can renew',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_140_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Could you tell me where the ticket machine ___ (is / is it)?"',
        options: [
          { id: 'opt_1', text: 'is', isCorrect: true },
          { id: 'opt_2', text: 'is it', isCorrect: false },
          { id: 'opt_3', text: 'does', isCorrect: false },
        ],
        correctAnswer: 'is',
        explanation: 'Subject ("the ticket machine") precedes the verb ("is").',
      },
    },
    {
      id: 'turn_a2_140_2',
      turnIndex: 2,
      partnerPrompt:
        'You can tap your card and renew it at any of the touchscreen machines by Gate 4, or at the staffed booth right behind me. Are you traveling to a specific borough today?',
      partnerAudioText:
        'You can tap your card and renew it at any of the touchscreen machines by Gate 4, or at the staffed booth right behind me. Are you traveling to a specific borough today?',
      partnerQuestionHindi:
        'आप गेट 4 के पास किसी भी टचस्क्रीन मशीन पर या ठीक मेरे पीछे स्थित स्टाफ वाले बूथ पर अपना कार्ड टैप और नवीनीकृत कर सकते हैं। क्या आप आज किसी विशिष्ट क्षेत्र की यात्रा कर रहे हैं?',
      expectedFunction: 'Ask About Transit Line to City Hall / Municipal Office (Do you know if... / Which platform / Municipal Registry)',
      contextGoal:
        'Ask which subway line goes to the Municipal Registry / City Hall near St. Peter’s Square and which platform you need.',
      targetVocabulary: ['Do you know if the Northern Line goes to City Hall?', 'Which platform should I take?', 'Municipal Registry Office', 'change trains at Central Square'],
      suggestedResponses: [
        {
          label: 'Route Inquiry',
          text: 'Thank you. Do you know if the subway goes directly to the Municipal Registry near City Hall, or do I need to change trains? Which platform should I take?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Platform Inquiry',
          text: 'Do you know which platform goes towards City Hall? Do I need to switch lines?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Route & Destination (city hall / municipal / registry / line / platform / train / subway / change / switch)',
          patterns: ['city hall', 'municipal', 'registry', 'line', 'platform', 'train', 'subway', 'change', 'switch', 'goes to'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_140_2',
        type: 'multiple_choice',
        prompt: 'Which is the most natural way to ask about train lines?',
        options: [
          { id: 'opt_1', text: 'Do you know if this line goes directly to City Hall?', isCorrect: true },
          { id: 'opt_2', text: 'Do you know goes this line directly to City Hall?', isCorrect: false },
          { id: 'opt_3', text: 'Where goes line City Hall?', isCorrect: false },
        ],
        correctAnswer: 'Do you know if this line goes directly to City Hall?',
        explanation: '"Do you know if" followed by subject + verb.',
      },
    },
    {
      id: 'turn_a2_140_3',
      turnIndex: 3,
      partnerPrompt:
        'Take the southbound Blue Line from Platform 2; it’s just three stops to City Hall. Also, the municipal building houses the central public library on the ground floor. Did you need anything else there?',
      partnerAudioText:
        'Take the southbound Blue Line from Platform 2; it’s just three stops to City Hall. Also, the municipal building houses the central public library on the ground floor. Did you need anything else there?',
      partnerQuestionHindi:
        'प्लेटफॉर्म 2 से साउथबाउंड ब्लू लाइन लें; सिटी हॉल केवल तीन स्टॉप दूर है। इसके अलावा, नगरपालिका भवन के भूतल पर केंद्रीय सार्वजनिक पुस्तकालय है। क्या आपको वहां किसी अन्य चीज़ की आवश्यकता थी?',
      expectedFunction: 'Inquire About Library Registration & Required Documents (Would you happen to know what documents... / proof of address)',
      contextGoal:
        'Ask what documents or proof of address you need to register for a library membership and borrow books.',
      targetVocabulary: ['Would you happen to know what documents I need?', 'register for a library membership', 'proof of address and photo ID', 'borrow books and use the study rooms'],
      suggestedResponses: [
        {
          label: 'Civic Inquiry with Question',
          text: 'That’s great to know! Would you happen to know what documents I need to register for a library card? Do I just need a photo ID and proof of address?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Question',
          text: 'Would you know if I need proof of address to get a library membership card there today?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Library & Documents (library / membership / card / documents / id / proof of address / register / need)',
          patterns: ['library', 'membership', 'card', 'documents', 'id', 'proof of address', 'register', 'need', 'passport'],
          required: true,
        },
        {
          name: 'Question Structure (would you / do you / what / if / ?)',
          patterns: ['would you', 'do you', 'what', 'if', 'could you', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_140_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "You need a valid photo ID and proof of ___ (address / addressing)."',
        options: [
          { id: 'opt_1', text: 'address', isCorrect: true },
          { id: 'opt_2', text: 'addressing', isCorrect: false },
          { id: 'opt_3', text: 'addressed', isCorrect: false },
        ],
        correctAnswer: 'address',
        explanation: '"Proof of address" is the standard civic term (utility bill, tenancy agreement).',
      },
    },
    {
      id: 'turn_a2_140_4',
      turnIndex: 4,
      partnerPrompt:
        'Exactly right—just bring a photo ID and a recent utility bill or tenancy letter for proof of address, and they’ll issue your membership card on the spot. Safe travels on Platform 2!',
      partnerAudioText:
        'Exactly right—just bring a photo ID and a recent utility bill or tenancy letter for proof of address, and they’ll issue your membership card on the spot. Safe travels on Platform 2!',
      partnerQuestionHindi:
        'बिल्कुल सही—पते के प्रमाण के लिए बस एक फोटो आईडी और हाल का उपयोगिता बिल या किरायेदारी पत्र लाएं, और वे मौके पर ही आपका सदस्यता कार्ड जारी कर देंगे। प्लेटफॉर्म 2 पर सुरक्षित यात्रा!',
      expectedFunction: 'Express Gratitude, Confirm Route & Close (Thank you Officer / Platform 2 / have a good day)',
      contextGoal:
        'Thank Officer Gallagher for his clear guidance, confirm that you are heading to Platform 2, and wish him a pleasant day.',
      targetVocabulary: ['Thank you very much Officer', 'appreciate your clear directions', 'heading down to Platform 2 now', 'have a great day'],
      suggestedResponses: [
        {
          label: 'Courteous Closing',
          text: 'Thank you very much, Officer Gallagher! I have all my documents ready. I will head to Platform 2 now. Have a wonderful day!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Closing',
          text: 'Thank you for all your help, Officer. Heading to Platform 2 now. Have a good shift!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Departure (thank you / thanks / officer / platform 2 / have a good day / have a nice day / goodbye)',
          patterns: ['thank you', 'thanks', 'officer', 'platform 2', 'platform two', 'have a good day', 'have a nice day', 'goodbye', 'bye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_140_4',
        type: 'multiple_choice',
        prompt: 'Which sentence is most courteous when ending an inquiry with a station officer?',
        options: [
          { id: 'opt_1', text: 'Thank you very much for your help, Officer. Have a great day!', isCorrect: true },
          { id: 'opt_2', text: 'I am leaving you now.', isCorrect: false },
          { id: 'opt_3', text: 'Stop talking I go to train.', isCorrect: false },
        ],
        correctAnswer: 'Thank you very much for your help, Officer. Have a great day!',
        explanation: 'Polite and natural everyday civic English.',
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
