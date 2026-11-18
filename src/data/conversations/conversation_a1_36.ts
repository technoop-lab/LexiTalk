import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_36: ConversationDefinition = {
  id: 'conv_a1_36',
  title: 'Long-Distance Travel & Airport Navigation (Flights, Luggage & Gates)',
  cefr: 'A1',
  unitId: 'unit_a1_3',
  lessonLinks: ['lesson_a1_3_36'],
  estimatedMinutes: 5,
  scenario:
    'You are checking in at the airline counter for flight BA 248 to London Heathrow. You interact with the check-in agent, Daniel, presenting your passport, checking your luggage, selecting a window seat, and confirming your departure gate and boarding time.',
  communicativeGoals: [
    'Navigate airport check-in desks and baggage drop procedures smoothly',
    'Present travel documents and answer security questions ("Did you pack your bags yourself?")',
    'Request seat preferences ("Could I please have a window seat?")',
    'Understand flight details: boarding time, departure gate, and baggage limits',
  ],
  canDoStatements: [
    'Can complete check-in at an airport counter using simple English (CEFR A1.2)',
    'Can answer basic security and luggage questions from airport personnel',
    'Can understand gate numbers, boarding times, and seat allocations on a boarding pass',
  ],
  characters: [
    {
      id: 'char_daniel',
      name: 'Daniel',
      role: 'Airline Check-In Agent',
      avatar: '✈️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'boarding pass',
        ipa: '/ˈbɔːrdɪŋ pæs/',
        partOfSpeech: 'noun',
        meaning: 'A pass that gives an airline passenger permission to board the aircraft',
        exampleSentence: 'Here is your boarding pass for gate 14B.',
        translations: { hi: 'बोर्डिंग पास' },
      },
      {
        word: 'luggage',
        ipa: '/ˈlʌɡɪdʒ/',
        partOfSpeech: 'noun',
        meaning: 'Suitcases or other bags in which to pack personal belongings for traveling',
        exampleSentence: 'How many pieces of luggage are you checking in?',
        translations: { hi: 'सामान / बैगेज' },
      },
      {
        word: 'gate',
        ipa: '/ɡeɪt/',
        partOfSpeech: 'noun',
        meaning: 'The area at an airport where passengers board an aircraft',
        exampleSentence: 'Your flight boards at Gate 22.',
        translations: { hi: 'गेट' },
      },
      {
        word: 'carry-on',
        ipa: '/ˈkæri ˌɒn/',
        partOfSpeech: 'noun / adjective',
        meaning: 'A small bag that you can take onto an airplane with you',
        exampleSentence: 'I only have one small carry-on bag.',
        translations: { hi: 'केबिन बैग / हैंडबैग' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Here is my passport and ticket.',
        functionCategory: 'Travel Documents',
        exampleSentence: 'Here is my passport and booking confirmation.',
      },
      {
        phrase: 'I have one bag to check.',
        functionCategory: 'Luggage Drop',
        exampleSentence: 'I have one suitcase to check and one carry-on.',
      },
      {
        phrase: 'Could I have a window seat?',
        functionCategory: 'Seat Request',
        exampleSentence: 'Could I please have a window seat near the front?',
      },
      {
        phrase: 'What gate does the flight board from?',
        functionCategory: 'Gate Inquiry',
        exampleSentence: 'What gate does the flight depart from?',
      },
    ],
    grammar: {
      title: 'Airport Inquiries & Quantifiers (one bag, two suitcases, any liquids)',
      conceptExplanation:
        'Use "I am checking [number] bags" and "I have [number] carry-on". Luggage/Baggage is uncountable (say "one bag" or "one piece of luggage"). When asking for a seat or gate, use "Could I please have..." and "What gate is the flight boarding from?".',
      patternFormula: 'Here is my [Document]. | I have [Number] bags to check. | Could I have a [window/aisle] seat, please?',
      contrastExamples: [
        {
          incorrect: 'I have two luggages.',
          correct: 'I have two pieces of luggage. / I have two bags.',
          explanation: '"Luggage" is an uncountable noun in English; do not add "-s".',
        },
        {
          incorrect: 'Where gate is airplane?',
          correct: 'What gate does the flight board from?',
          explanation: 'Use "What gate does the flight board from?" for airport departures.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Daniel',
        text: 'Good morning! Welcome to British Airways. Where are you flying to today, and may I see your passport?',
        translation: 'शुभ प्रभात! ब्रिटिश एयरवेज में आपका स्वागत है। आज आप कहाँ के लिए उड़ान भर रहे हैं, और क्या मैं आपका पासपोर्ट देख सकता हूँ?',
      },
      {
        speaker: 'You',
        text: 'Good morning! I am flying to London Heathrow. Here is my passport and ticket.',
        translation: 'शुभ प्रभात! मैं लंदन हीथ्रो के लिए उड़ान भर रहा हूँ। यह मेरा पासपोर्ट और टिकट है।',
      },
      {
        speaker: 'Daniel',
        text: 'Thank you. How many bags are you checking in today, and do you have any carry-on luggage?',
        translation: 'धन्यवाद। आज आप कितने बैग चेक-इन कर रहे हैं, और क्या आपके पास कोई हैंडबैग है?',
      },
      {
        speaker: 'You',
        text: 'I have one suitcase to check in, and just one small backpack as carry-on. Could I please have a window seat?',
        translation: 'मेरे पास चेक-इन करने के लिए एक सूटकेस है, और केबिन बैग के रूप में सिर्फ एक छोटा बैकपैक है। क्या मुझे कृपया एक खिड़की वाली सीट मिल सकती है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_36_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "I have one ___ to check in and one backpack."',
      options: [
        { id: 'opt_1', text: 'suitcase', isCorrect: true },
        { id: 'opt_2', text: 'suitcases', isCorrect: false },
        { id: 'opt_3', text: 'luggages', isCorrect: false },
      ],
      correctAnswer: 'suitcase',
      explanation: 'Use singular countable noun "suitcase" with the number "one".',
    },
    {
      id: 'cp_a1_36_2',
      type: 'multiple_choice',
      prompt: 'How do you ask for a window seat politely at the airline desk?',
      options: [
        { id: 'opt_1', text: 'Could I please have a window seat if available?', isCorrect: true },
        { id: 'opt_2', text: 'You put me near window now.', isCorrect: false },
        { id: 'opt_3', text: 'Must I sit at window plane?', isCorrect: false },
      ],
      correctAnswer: 'Could I please have a window seat if available?',
      explanation: '"Could I please have..." is the standard polite request formula.',
    },
    {
      id: 'cp_a1_36_3',
      type: 'multiple_choice',
      prompt: 'What does the agent mean by: "Your flight boards at Gate 18 at ten thirty"?',
      options: [
        { id: 'opt_1', text: 'You should go to Gate 18 by 10:30 to get on the plane.', isCorrect: true },
        { id: 'opt_2', text: 'The flight lands at 10:30 at Gate 18.', isCorrect: false },
        { id: 'opt_3', text: 'You must buy 18 tickets at ten thirty.', isCorrect: false },
      ],
      correctAnswer: 'You should go to Gate 18 by 10:30 to get on the plane.',
      explanation: '"Boards at Gate 18 at 10:30" indicates the boarding location and time.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_36_1',
      scenarioContext: 'Hand over travel documents to the agent.',
      prompt: 'Build: "Here is my passport and my booking confirmation."',
      targetStructure: 'Here is + possessive adjective + noun + coordinator + possessive adjective + noun phrase',
      wordBank: ['Here', 'is', 'my', 'passport', 'and', 'my', 'booking', 'confirmation', 'are', 'I', 'have'],
      acceptableSolutions: [
        'Here is my passport and my booking confirmation',
        'Here is my passport and my booking confirmation.',
      ],
      explanation: 'Standard phrase when presenting documents at check-in.',
    },
    {
      id: 'sc_a1_36_2',
      scenarioContext: 'Specify baggage quantities.',
      prompt: 'Build: "I have one bag to check and one carry-on."',
      targetStructure: 'Subject + have + quantifier + noun + to check + coordinator + quantifier + noun',
      wordBank: ['I', 'have', 'one', 'bag', 'to', 'check', 'and', 'one', 'carry-on', 'two', 'luggages'],
      acceptableSolutions: [
        'I have one bag to check and one carry-on',
        'I have one bag to check and one carry-on.',
      ],
      explanation: 'Clear statement of checked and carry-on baggage.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_36_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning, welcome to Skyways! Where are you traveling to today, and may I please see your passport?',
      partnerAudioText:
        'Good morning, welcome to Skyways! Where are you traveling to today, and may I please see your passport?',
      partnerQuestionHindi:
        'शुभ प्रभात, स्काईवेज़ में आपका स्वागत है! आज आप कहाँ यात्रा कर रहे हैं, और क्या मैं कृपया आपका पासपोर्ट देख सकता हूँ?',
      expectedFunction: 'Present Destination & Travel Documents',
      contextGoal:
        'State your destination (e.g. London / Paris / New York) and hand over your passport ("Here is my passport").',
      targetVocabulary: ['flying to', 'traveling to', 'passport', 'here is', 'london', 'ticket'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Good morning! I am flying to London Heathrow today. Here is my passport and ticket confirmation.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hello! I am traveling to London. Here is my passport.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'London Heathrow, flight 248. Here is my passport!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Destination & Passport Presentation',
          patterns: ['london', 'flying to', 'traveling to', 'passport', 'here is', 'here are'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'here_is_plural_error',
          pattern: /\bhere are my passport\b/i,
          errorType: 'grammar',
          message: 'Use "Here is my passport" for singular noun "passport".',
          correctionPattern: 'Here is my passport.',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_36_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "___ is my passport and boarding card."',
        options: [
          { id: 'opt_1', text: 'Here', isCorrect: true },
          { id: 'opt_2', text: 'Hear', isCorrect: false },
          { id: 'opt_3', text: 'Therewith', isCorrect: false },
        ],
        correctAnswer: 'Here',
        explanation: '"Here is..." is the standard idiom when handing over objects.',
      },
    },
    {
      id: 'turn_a1_36_2',
      turnIndex: 2,
      partnerPrompt:
        'Thank you, Alex. How many bags are you checking in today, and do you have any carry-on luggage with you?',
      partnerAudioText:
        'Thank you, Alex. How many bags are you checking in today, and do you have any carry-on luggage with you?',
      partnerQuestionHindi:
        'धन्यवाद, एलेक्स। आज आप कितने बैग चेक-इन कर रहे हैं, और क्या आपके पास कोई हैंडबैग है?',
      expectedFunction: 'Declare Baggage Quantities & Ask for Seat',
      contextGoal:
        'State how many bags you are checking (e.g. one suitcase) and carry-on items, and ask for a window or aisle seat.',
      targetVocabulary: ['one bag', 'suitcase', 'carry-on', 'window seat', 'could i have', 'please'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I have one suitcase to check in and one small carry-on backpack. Could I please have a window seat?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Just one bag to check and one carry-on. Can I get a window seat, please?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'One checked bag and one carry-on. Window seat if possible, please!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Luggage Declaration & Seat Preference',
          patterns: [
            'one bag',
            'suitcase',
            'check in',
            'carry-on',
            'window seat',
            'aisle seat',
            'could i have',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'two_luggages_rule',
          pattern: /\bluggages\b/i,
          errorType: 'vocabulary',
          message: '"Luggage" is uncountable. Say "bags", "suitcases", or "pieces of luggage".',
          correctionPattern: 'one suitcase / one bag',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_36_2',
        type: 'multiple_choice',
        prompt: 'Which sentence is grammatically correct for luggage?',
        options: [
          { id: 'opt_1', text: 'I have one suitcase to check in.', isCorrect: true },
          { id: 'opt_2', text: 'I have one luggages to check in.', isCorrect: false },
          { id: 'opt_3', text: 'I am luggage checking one piece.', isCorrect: false },
        ],
        correctAnswer: 'I have one suitcase to check in.',
        explanation: '"Suitcase" is a countable noun, while "luggage" is uncountable.',
      },
    },
    {
      id: 'turn_a1_36_3',
      turnIndex: 3,
      partnerPrompt:
        'Please place your suitcase on the scale... 18 kilos, perfectly within the limit! I assigned you seat 14A, which is a window seat. What time does your connecting train leave after you land?',
      partnerAudioText:
        'Please place your suitcase on the scale... 18 kilos, perfectly within the limit! I assigned you seat 14A, which is a window seat. What time does your connecting train leave after you land?',
      partnerQuestionHindi:
        'कृपया अपना सूटकेस तराजू पर रखें... 18 किलो, बिल्कुल सीमा के भीतर! मैंने आपको सीट 14A दी है, जो एक खिड़की वाली सीट है। उतरने के बाद आपकी कनेक्टिंग ट्रेन किस समय छूटती है?',
      expectedFunction: 'Acknowledge Seat & Inquire Gate and Boarding Time',
      contextGoal:
        'Express thanks for the window seat, mention your train schedule (e.g. 3:00 PM), and ask what gate the flight boards from.',
      targetVocabulary: ['thank you', 'window seat', 'gate', 'what time', 'boarding', 'depart'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you so much for the window seat! My train leaves at 3:30 PM. What gate does our flight board from?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thanks! My train is at three thirty. Could you tell me the gate number and boarding time?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Seat 14A is great, thanks! What gate and what time do we board?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gate and Boarding Inquiry',
          patterns: ['gate', 'what gate', 'boarding', 'board from', 'thank you', 'train', 'leaves at'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_36_3',
        type: 'fill_blank',
        prompt: 'Complete the gate question: "What gate ___ the flight board from?"',
        options: [
          { id: 'opt_1', text: 'does', isCorrect: true },
          { id: 'opt_2', text: 'is', isCorrect: false },
          { id: 'opt_3', text: 'are', isCorrect: false },
        ],
        correctAnswer: 'does',
        explanation: 'Use auxiliary "does" with third-person singular subject "the flight" and base verb "board".',
      },
    },
    {
      id: 'turn_a1_36_4',
      turnIndex: 4,
      partnerPrompt:
        'You will board from Gate B22 at 9:45 AM. Security is straight ahead to your right. Here is your boarding pass and luggage claim tag. Have a wonderful flight to London!',
      partnerAudioText:
        'You will board from Gate B22 at 9:45 AM. Security is straight ahead to your right. Here is your boarding pass and luggage claim tag. Have a wonderful flight to London!',
      partnerQuestionHindi:
        'आप सुबह 9:45 बजे गेट B22 से सवार होंगे। सुरक्षा जांच आपकी दाईं ओर बिल्कुल सामने है। यह आपका बोर्डिंग पास और सामान का क्लेम टैग है। लंदन के लिए आपकी उड़ान सुखद रहे!',
      expectedFunction: 'Conclude Airport Interaction & Express Thanks',
      contextGoal:
        'Thank Daniel, take your boarding pass, and say goodbye before walking to security.',
      targetVocabulary: ['thank you', 'boarding pass', 'gate b22', 'appreciate', 'have a good day', 'goodbye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you very much for your help, Daniel! Gate B22 at 9:45. Have a wonderful day!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thank you so much! I appreciate it. Have a great day!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Thanks Daniel! Have a good one, goodbye!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Airport Departure Farewell',
          patterns: ['thank you', 'thanks', 'gate b22', 'appreciate', 'have a wonderful day', 'goodbye', 'have a good day'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_36_4',
        type: 'multiple_choice',
        prompt: 'Which phrase is the best polite departure from the check-in desk?',
        options: [
          { id: 'opt_1', text: 'Thank you very much, Daniel! Have a great day.', isCorrect: true },
          { id: 'opt_2', text: 'I am running away to the plane.', isCorrect: false },
          { id: 'opt_3', text: 'Airplane is going without me.', isCorrect: false },
        ],
        correctAnswer: 'Thank you very much, Daniel! Have a great day.',
        explanation: 'Courteous and clear.',
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
