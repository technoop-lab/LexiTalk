import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_19: ConversationDefinition = {
  id: 'conv_a1_19',
  title: 'Buying a Commuter Train Ticket at the Station',
  cefr: 'A1',
  unitId: 'unit_a1_2',
  lessonLinks: ['lesson_a1_2_19'],
  estimatedMinutes: 5,
  scenario:
    'You are at the central train station ticket counter. A station agent named Arthur is assisting you with purchasing a ticket to your destination and finding the correct platform.',
  communicativeGoals: [
    'Request a ticket to a destination (single or return/round-trip)',
    'Specify your travel method and transit preference (by train, metro)',
    'Ask about ticket prices, departure times, and platform numbers',
  ],
  canDoStatements: [
    'Can buy public transit tickets (single, return, daily pass) using polite phrases (CEFR A1)',
    'Can use transit prepositions correctly ("by train", "on foot", "at platform 3")',
    'Can ask for departure times and platform locations',
  ],
  characters: [
    {
      id: 'char_arthur',
      name: 'Arthur',
      role: 'Train Station Ticket Agent',
      avatar: '👨‍✈️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'ticket',
        ipa: '/ˈtɪkɪt/',
        partOfSpeech: 'noun',
        meaning: 'A piece of paper or electronic card showing payment for travel',
        exampleSentence: 'I would like a return ticket to Oxford, please.',
        translations: { hi: 'टिकट' },
      },
      {
        word: 'return',
        ipa: '/rɪˈtɜːrn/',
        partOfSpeech: 'noun / adjective',
        meaning: 'A ticket allowing travel to a place and back again',
        exampleSentence: 'Is a return ticket cheaper than two single tickets?',
        translations: { hi: 'वापसी टिकट' },
      },
      {
        word: 'platform',
        ipa: '/ˈplætfɔːrm/',
        partOfSpeech: 'noun',
        meaning: 'The raised area beside the tracks where passengers board a train',
        exampleSentence: 'Your train departs from platform 4.',
        translations: { hi: 'प्लेटफॉर्म' },
      },
      {
        word: 'commute',
        ipa: '/kəˈmjuːt/',
        partOfSpeech: 'verb / noun',
        meaning: 'To travel regularly between home and work',
        exampleSentence: 'I commute by train every weekday.',
        translations: { hi: 'दैनिक यात्रा / आना-जाना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'A single ticket to...',
        functionCategory: 'Ticket Purchase',
        exampleSentence: 'A single ticket to Bristol, please.',
      },
      {
        phrase: 'How much is a return ticket?',
        functionCategory: 'Price Inquiry',
        exampleSentence: 'How much is a standard return ticket?',
      },
      {
        phrase: 'Which platform does it leave from?',
        functionCategory: 'Station Navigation',
        exampleSentence: 'Which platform does the 9:15 train leave from?',
      },
      {
        phrase: 'by train / by bus',
        functionCategory: 'Transit Preposition',
        exampleSentence: 'I usually travel by train because it is fast.',
      },
    ],
    grammar: {
      title: 'Prepositions of Transit (by bus, by train, on foot, in a car) & Polite Requests',
      conceptExplanation:
        'Use "by + vehicle" (by bus, by train, by metro) without articles. For walking, use "on foot". Use "Could I have..." or "I would like..." for polite counter transactions.',
      patternFormula: 'I would like + [Ticket Type] + to + [Destination] | Travel + by + [Vehicle]',
      contrastExamples: [
        {
          incorrect: 'I go to work by the train.',
          correct: 'I go to work by train.',
          explanation: 'Do not insert "the" after the transit preposition "by".',
        },
        {
          incorrect: 'I walk by foot.',
          correct: 'I walk on foot. / I go on foot.',
          explanation: 'The fixed expression is "on foot", not "by foot".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Arthur',
        text: 'Hello! Welcome to Central Station. How can I help you today?',
        translation: 'नमस्ते! सेंट्रल स्टेशन में आपका स्वागत है। आज मैं आपकी क्या मदद कर सकता हूँ?',
      },
      {
        speaker: 'You',
        text: 'Hello! I would like one return ticket to Manchester, please.',
        translation: 'नमस्ते! मुझे मैनचेस्टर के लिए एक रिटर्न टिकट चाहिए, कृपया।',
      },
      {
        speaker: 'Arthur',
        text: 'Certainly. That is twenty-five pounds. Will you pay by cash or card?',
        translation: 'बिल्कुल। यह पच्चीस पाउंड है। क्या आप नकद या कार्ड से भुगतान करेंगे?',
      },
      {
        speaker: 'You',
        text: 'By card, please. Which platform does the next train depart from?',
        translation: 'कार्ड से, कृपया। अगली ट्रेन किस प्लेटफॉर्म से रवाना होती है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_19_1',
      type: 'fill_blank',
      prompt: 'Choose the correct preposition: "I usually go to the city center ___ bus."',
      options: [
        { id: 'opt_1', text: 'by', isCorrect: true },
        { id: 'opt_2', text: 'on', isCorrect: false },
        { id: 'opt_3', text: 'with', isCorrect: false },
      ],
      correctAnswer: 'by',
      explanation: 'Use "by bus" for public transit.',
    },
    {
      id: 'cp_a1_19_2',
      type: 'multiple_choice',
      prompt: 'Which request is polite and natural at a ticket counter?',
      options: [
        { id: 'opt_1', text: 'Could I have a single ticket to London, please?', isCorrect: true },
        { id: 'opt_2', text: 'Give me ticket London now.', isCorrect: false },
        { id: 'opt_3', text: 'I want that you give ticket London.', isCorrect: false },
      ],
      correctAnswer: 'Could I have a single ticket to London, please?',
      explanation: '"Could I have... please?" is polite and standard.',
    },
    {
      id: 'cp_a1_19_3',
      type: 'multiple_choice',
      prompt: 'How do you ask for the boarding track number?',
      options: [
        { id: 'opt_1', text: 'Which platform does the train leave from?', isCorrect: true },
        { id: 'opt_2', text: 'Where train standing?', isCorrect: false },
        { id: 'opt_3', text: 'Who is the platform on train?', isCorrect: false },
      ],
      correctAnswer: 'Which platform does the train leave from?',
      explanation: '"Which platform does the train leave from?" is the standard transit question.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_19_1',
      scenarioContext: 'Ask for a return ticket to Oxford politely.',
      prompt: 'Build: "I would like a return ticket to Oxford, please."',
      targetStructure: 'Polite modal request + article + ticket noun + destination + please',
      wordBank: ['I', 'would', 'like', 'a', 'return', 'ticket', 'to', 'Oxford', 'please', 'by', 'the'],
      acceptableSolutions: [
        'I would like a return ticket to Oxford please',
        'I would like a return ticket to Oxford, please.',
      ],
      explanation: 'Standard polite counter request.',
    },
    {
      id: 'sc_a1_19_2',
      scenarioContext: 'Ask which platform the next train departs from.',
      prompt: 'Build: "Which platform does the next train leave from?"',
      targetStructure: 'WH-question + auxiliary does + subject + base verb + preposition',
      wordBank: ['Which', 'platform', 'does', 'the', 'next', 'train', 'leave', 'from', 'is', 'at'],
      acceptableSolutions: [
        'Which platform does the next train leave from',
        'Which platform does the next train leave from?',
      ],
      explanation: 'Accurate interrogative structure for transit navigation.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_19_1',
      turnIndex: 1,
      partnerPrompt:
        'Next customer, please! Good morning. Where are you travelling today, and what kind of ticket do you need?',
      partnerAudioText:
        'Next customer, please! Good morning. Where are you travelling today, and what kind of ticket do you need?',
      partnerQuestionHindi:
        'अगले ग्राहक, कृपया! सुप्रभात। आप आज कहाँ की यात्रा कर रहे हैं, और आपको किस प्रकार का टिकट चाहिए?',
      expectedFunction: 'Request Ticket & Destination',
      contextGoal:
        'State your destination and specify if you want a single or return ticket using polite phrasing.',
      targetVocabulary: ['ticket', 'single', 'return', 'to', 'please', 'would like'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Good morning! I would like a return ticket to Cambridge, please.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hello, could I get one single ticket to the airport, please?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Hi, two tickets to Oxford, please. One-way.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Ticket Type & Request',
          patterns: ['ticket', 'single ticket', 'return ticket', 'would like', 'could i have', 'to cambridge', 'to oxford', 'to london'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'missing_to_destination',
          pattern: /\bticket (cambridge|oxford|london|airport)\b/i,
          errorType: 'grammar',
          message: 'Include "to" before your destination (e.g. "a ticket to Oxford").',
          correctionPattern: 'a ticket to [Destination]...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_19_1',
        type: 'fill_blank',
        prompt: 'Choose the correct word: "A return ticket ___ Bristol, please."',
        options: [
          { id: 'opt_1', text: 'to', isCorrect: true },
          { id: 'opt_2', text: 'at', isCorrect: false },
          { id: 'opt_3', text: 'for to', isCorrect: false },
        ],
        correctAnswer: 'to',
        explanation: 'Use "to + destination" when asking for tickets.',
      },
    },
    {
      id: 'turn_a1_19_2',
      turnIndex: 2,
      partnerPrompt:
        'That will be eighteen pounds fifty. Are you paying with cash or by credit card?',
      partnerAudioText:
        'That will be eighteen pounds fifty. Are you paying with cash or by credit card?',
      partnerQuestionHindi:
        'यह अठारह पाउंड पचास पेंस होगा। क्या आप नकद भुगतान कर रहे हैं या क्रेडिट कार्ड से?',
      expectedFunction: 'Specify Payment Method',
      contextGoal:
        'State your payment method clearly using prepositions (e.g. "By card, please" or "In cash").',
      targetVocabulary: ['card', 'cash', 'pay', 'by card', 'please'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I will pay by credit card, please. Here is my card.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'By contactless card, please.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Card, please. Thanks.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Payment Method',
          patterns: ['by card', 'by credit card', 'card please', 'with cash', 'in cash', 'contactless'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_19_2',
        type: 'multiple_choice',
        prompt: 'Which phrase is natural when paying with a bank card?',
        options: [
          { id: 'opt_1', text: 'By card, please.', isCorrect: true },
          { id: 'opt_2', text: 'With the card machine.', isCorrect: false },
          { id: 'opt_3', text: 'Carding now.', isCorrect: false },
        ],
        correctAnswer: 'By card, please.',
        explanation: '"By card, please" is the standard natural phrase.',
      },
    },
    {
      id: 'turn_a1_19_3',
      turnIndex: 3,
      partnerPrompt:
        'Payment approved! Here is your ticket and receipt. Do you have any questions about departure times or platforms?',
      partnerAudioText:
        'Payment approved! Here is your ticket and receipt. Do you have any questions about departure times or platforms?',
      partnerQuestionHindi:
        'भुगतान सफल रहा! यह रहा आपका टिकट और रसीद। क्या आपके पास प्रस्थान समय या प्लेटफॉर्म के बारे में कोई सवाल है?',
      expectedFunction: 'Inquire Platform & Closing',
      contextGoal:
        'Ask which platform the train leaves from or what time the next train arrives, and thank Arthur.',
      targetVocabulary: ['platform', 'leave', 'time', 'thank you', 'which platform'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you! Which platform does the next train leave from, and what time is it?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thanks a lot. Is the train on platform 3?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Great, thank you. Which platform, please?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Platform / Time Inquiry',
          patterns: ['which platform', 'what platform', 'what time', 'platform number', 'leave from', 'depart from'],
          required: true,
        },
        {
          name: 'Gratitude',
          patterns: ['thank you', 'thanks', 'appreciate it'],
          required: false,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_19_3',
        type: 'multiple_choice',
        prompt: 'Which is the correct question to find out where your train is located?',
        options: [
          { id: 'opt_1', text: 'Which platform does the train leave from?', isCorrect: true },
          { id: 'opt_2', text: 'Where platform train is?', isCorrect: false },
          { id: 'opt_3', text: 'How is the platform?', isCorrect: false },
        ],
        correctAnswer: 'Which platform does the train leave from?',
        explanation: '"Which platform does the train leave from?" is the standard grammatical question.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 70,
  },
};
