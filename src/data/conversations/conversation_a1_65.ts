import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_65: ConversationDefinition = {
  id: 'conv_a1_65',
  title: 'Hotel Stays, Check-In, Room Amenities & Special Requests',
  cefr: 'A1',
  unitId: 'unit_a1_5',
  lessonLinks: ['lesson_a1_5_65'],
  estimatedMinutes: 5,
  scenario:
    'You arrive at the reception desk of a boutique hotel in Edinburgh for a three-night stay. You check in under your booking reservation, request a quiet room on a higher floor with extra pillows, inquire about complimentary breakfast times and Wi-Fi access, and ask about late checkout.',
  communicativeGoals: [
    'Check in at a hotel reception using reservation details ("I have a reservation under the name Alex...")',
    'Make polite requests for room preferences and amenities ("Could we have a quiet room on a high floor?", "Could we get two extra pillows?")',
    'Ask about hotel facilities, Wi-Fi passwords, and breakfast serving hours ("What time is breakfast served?", "Is Wi-Fi complimentary?")',
    'Inquire about checkout times and late checkout policies',
  ],
  canDoStatements: [
    'Can check in and check out at hotel reception (CEFR A1.2)',
    'Can request hotel amenities and express room preferences',
    'Can ask about breakfast times, Wi-Fi, and hotel facilities',
  ],
  characters: [
    {
      id: 'char_clara_frontdesk',
      name: 'Clara',
      role: 'Hotel Front Desk Receptionist',
      avatar: '🏨',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'reservation',
        ipa: '/ˌrɛzərˈveɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'An arrangement to have a hotel room held for one\'s use',
        exampleSentence: 'I have a hotel room reservation for three nights.',
        translations: { hi: 'आरक्षण / बुकिंग' },
      },
      {
        word: 'amenities',
        ipa: '/əˈmɛnɪtiz/',
        partOfSpeech: 'noun (plural)',
        meaning: 'Desirable or useful features of a building or room (e.g. Wi-Fi, pool, gym)',
        exampleSentence: 'The hotel amenities include high-speed Wi-Fi and a fitness center.',
        translations: { hi: 'सुविधाएं' },
      },
      {
        word: 'complimentary',
        ipa: '/ˌkɒmplɪˈmɛntəri/',
        partOfSpeech: 'adjective',
        meaning: 'Given or supplied free of charge',
        exampleSentence: 'Continental breakfast is complimentary for all guests.',
        translations: { hi: 'मुफ्त / निःशुल्क' },
      },
      {
        word: 'checkout',
        ipa: '/ˈtʃɛkaʊt/',
        partOfSpeech: 'noun',
        meaning: 'The action of leaving a hotel at the end of a stay and settling the account',
        exampleSentence: 'Standard checkout is at eleven o\'clock in the morning.',
        translations: { hi: 'होटल छोड़ना / चेकआउट' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I have a reservation under the name...',
        functionCategory: 'Hotel Check-In',
        exampleSentence: 'I have a reservation under the name Alex Sharma for three nights.',
      },
      {
        phrase: 'Could we have a quiet room on a higher floor?',
        functionCategory: 'Special Request',
        exampleSentence: 'Could we please have a quiet room on a higher floor?',
      },
      {
        phrase: 'What time is breakfast served in the morning?',
        functionCategory: 'Facility Inquiry',
        exampleSentence: 'What time is breakfast served in the restaurant on the ground floor?',
      },
      {
        phrase: 'What is the Wi-Fi password?',
        functionCategory: 'Wi-Fi Access',
        exampleSentence: 'What is the network name and Wi-Fi password for our room?',
      },
    ],
    grammar: {
      title: 'Polite Hotel Requests: Could we please have... / Is [Amenity] included?',
      conceptExplanation:
        'Use "Could I / Could we please have + [Noun Phrase]" for polite requests at the front desk. Use "Is [Breakfast/Wi-Fi] included in the room rate?" to verify complimentary perks.',
      patternFormula: 'I have a reservation under [Name] | Could we please have [extra pillows / quiet room]?',
      contrastExamples: [
        {
          incorrect: 'I want room now on top.',
          correct: 'Could we please have a room on a higher floor?',
          explanation: 'Use polite modal request "Could we please have...".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Clara',
        text: 'Good afternoon and welcome to The Royal Mile Boutique Hotel! How may I assist you today?',
        translation: 'शुभ दोपहर और द रॉयल माइल बुटीक होटल में आपका स्वागत है! आज मैं आपकी क्या मदद कर सकती हूँ?',
      },
      {
        speaker: 'You',
        text: 'Good afternoon! I have a reservation under the name Alex Sharma for three nights.',
        translation: 'शुभ दोपहर! मेरे नाम एलेक्स शर्मा के तहत तीन रातों के लिए एक आरक्षण है।',
      },
      {
        speaker: 'Clara',
        text: 'Yes, I have your deluxe double room right here! May I please see your passport or photo ID?',
        translation: 'हाँ, मेरे पास आपका डीलक्स डबल रूम यहीं है! क्या मैं कृपया आपका पासपोर्ट या फोटो आईडी देख सकती हूँ?',
      },
      {
        speaker: 'You',
        text: 'Here is my passport. Could we please have a quiet room on a higher floor with extra pillows?',
        translation: 'यह रहा मेरा पासपोर्ट। क्या हमें अतिरिक्त तकियों के साथ ऊपरी मंजिल पर एक शांत कमरा मिल सकता है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_65_1',
      type: 'fill_blank',
      prompt: 'Complete the check-in formula: "I have a reservation ___ the name Alex."',
      options: [
        { id: 'opt_1', text: 'under', isCorrect: true },
        { id: 'opt_2', text: 'over', isCorrect: false },
        { id: 'opt_3', text: 'at', isCorrect: false },
      ],
      correctAnswer: 'under',
      explanation: 'Use the standard hotel phrase "under the name [Name]".',
    },
    {
      id: 'cp_a1_65_2',
      type: 'multiple_choice',
      prompt: 'Which sentence makes a polite request for room amenities?',
      options: [
        { id: 'opt_1', text: 'Could we please have two extra pillows for Room 402?', isCorrect: true },
        { id: 'opt_2', text: 'Give us pillows fast.', isCorrect: false },
        { id: 'opt_3', text: 'We are want pillows now.', isCorrect: false },
      ],
      correctAnswer: 'Could we please have two extra pillows for Room 402?',
      explanation: 'Polite and clear modal request.',
    },
    {
      id: 'cp_a1_65_3',
      type: 'multiple_choice',
      prompt: 'How do you ask about breakfast timing?',
      options: [
        { id: 'opt_1', text: 'What time is breakfast served in the morning?', isCorrect: true },
        { id: 'opt_2', text: 'When breakfast is eating time?', isCorrect: false },
        { id: 'opt_3', text: 'What clock breakfast cook?', isCorrect: false },
      ],
      correctAnswer: 'What time is breakfast served in the morning?',
      explanation: '"What time is breakfast served?" is natural.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_65_1',
      scenarioContext: 'Check in with your reservation name.',
      prompt: 'Build: "I have a reservation under the name Alex."',
      targetStructure: 'I have a reservation under the name [Name]',
      wordBank: ['I', 'have', 'a', 'reservation', 'under', 'the', 'name', 'Alex', 'having', 'is', 'for'],
      acceptableSolutions: [
        'I have a reservation under the name Alex',
        'I have a reservation under the name Alex.',
      ],
      explanation: 'Check-in phrase.',
    },
    {
      id: 'sc_a1_65_2',
      scenarioContext: 'Ask about the Wi-Fi password for the hotel room.',
      prompt: 'Build: "What is the Wi-Fi password for our room?"',
      targetStructure: 'What is the Wi-Fi password for our room?',
      wordBank: ['What', 'is', 'the', 'Wi-Fi', 'password', 'for', 'our', 'room', 'are', 'passwords', 'to'],
      acceptableSolutions: [
        'What is the Wi-Fi password for our room',
        'What is the Wi-Fi password for our room?',
      ],
      explanation: 'Wi-Fi inquiry.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_65_1',
      turnIndex: 1,
      partnerPrompt:
        'Good afternoon and welcome to the Royal Mile Boutique Hotel! How may I assist you with your stay today?',
      partnerAudioText:
        'Good afternoon and welcome to the Royal Mile Boutique Hotel! How may I assist you with your stay today?',
      partnerQuestionHindi:
        'शुभ दोपहर और रॉयल माइल बुटीक होटल में आपका स्वागत है! आज मैं आपके ठहरने में क्या सहायता कर सकती हूँ?',
      expectedFunction: 'Check In with Name & Length of Stay (I have a reservation under...)',
      contextGoal:
        'State that you have a reservation under the name Alex for three nights.',
      targetVocabulary: ['good afternoon', 'have a reservation', 'under the name Alex', 'for three nights', 'deluxe room'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'Good afternoon! I have a reservation under the name Alex for three nights, checking in today.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Response',
          text: 'Hello! I have a room booked under Alex for three nights.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Check-In Details',
          patterns: [
            'reservation',
            'alex',
            'three nights',
            'booked',
            'check in',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'i_have_booking_on_error',
          pattern: /\bunder my name is alex\b/i,
          errorType: 'grammar',
          message: 'Say "under the name Alex", using "under the name".',
          correctionPattern: 'under the name Alex',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_65_1',
        type: 'fill_blank',
        prompt: 'Choose the correct preposition: "The reservation is ___ the name John."',
        options: [
          { id: 'opt_1', text: 'under', isCorrect: true },
          { id: 'opt_2', text: 'with on', isCorrect: false },
          { id: 'opt_3', text: 'over', isCorrect: false },
        ],
        correctAnswer: 'under',
        explanation: '"under the name" is standard.',
      },
    },
    {
      id: 'turn_a1_65_2',
      turnIndex: 2,
      partnerPrompt:
        'I found your booking! You are staying in a deluxe double room. May I please see your passport or ID, and do you have any specific room preferences or special requests?',
      partnerAudioText:
        'I found your booking! You are staying in a deluxe double room. May I please see your passport or ID, and do you have any specific room preferences or special requests?',
      partnerQuestionHindi:
        'मुझे आपकी बुकिंग मिल गई! आप एक डीलक्स डबल रूम में ठहर रहे हैं। क्या मैं कृपया आपका पासपोर्ट या आईडी देख सकती हूँ, और क्या आपके पास कोई विशिष्ट कमरा प्राथमिकताएं या विशेष अनुरोध हैं?',
      expectedFunction: 'Present ID & Request Quiet High Floor Room with Extra Pillows',
      contextGoal:
        'Hand over your passport/ID and request a quiet room on a higher floor with two extra pillows.',
      targetVocabulary: ['here is my passport', 'quiet room', 'on a higher floor', 'two extra pillows', 'could we please have'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'Here is my passport. Could we please have a quiet room on a higher floor, and could we get two extra pillows?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Response',
          text: 'Here is my ID. Could we have a quiet room on a high floor with extra pillows?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'ID & Room Preferences',
          patterns: [
            'passport',
            'id',
            'quiet room',
            'higher floor',
            'high floor',
            'extra pillows',
            'pillows',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_65_2',
        type: 'multiple_choice',
        prompt: 'Which sentence expresses a room preference politely?',
        options: [
          { id: 'opt_1', text: 'Could we please have a quiet room on a higher floor?', isCorrect: true },
          { id: 'opt_2', text: 'We must to sleep on high floor quiet.', isCorrect: false },
          { id: 'opt_3', text: 'Room top floor give us.', isCorrect: false },
        ],
        correctAnswer: 'Could we please have a quiet room on a higher floor?',
        explanation: 'Polite and clear.',
      },
    },
    {
      id: 'turn_a1_65_3',
      turnIndex: 3,
      partnerPrompt:
        'I have assigned you Room 508 on the fifth floor—it overlooks the peaceful courtyard garden. I’ve also sent a request for extra hypoallergenic pillows to housekeeping. What other questions do you have about hotel services?',
      partnerAudioText:
        'I have assigned you Room 508 on the fifth floor—it overlooks the peaceful courtyard garden. I’ve also sent a request for extra hypoallergenic pillows to housekeeping. What other questions do you have about hotel services?',
      partnerQuestionHindi:
        'मैंने आपको पांचवीं मंजिल पर कमरा 508 आवंटित किया है—यह शांत आंगन के बगीचे की ओर दिखता है। मैंने हाउसकीपिंग को अतिरिक्त तकियों का अनुरोध भी भेजा है। होटल सेवाओं के बारे में आपके और क्या प्रश्न हैं?',
      expectedFunction: 'Inquire About Breakfast Hours, Wi-Fi Password & Late Checkout',
      contextGoal:
        'Ask what time breakfast is served, what the Wi-Fi password is, and if late checkout is possible.',
      targetVocabulary: ['what time is breakfast', 'Wi-Fi password', 'complimentary', 'late checkout', 'served in the restaurant'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'That sounds wonderful! What time is breakfast served in the morning, and what is the Wi-Fi password for our room?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Response',
          text: 'Thank you! When is breakfast served, and what is the Wi-Fi password?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Breakfast & Wi-Fi Inquiry',
          patterns: [
            'breakfast',
            'what time',
            'wi-fi',
            'wifi',
            'password',
            'served',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_65_3',
        type: 'fill_blank',
        prompt: 'Fill in the question word: "___ time is breakfast served?"',
        options: [
          { id: 'opt_1', text: 'What', isCorrect: true },
          { id: 'opt_2', text: 'How', isCorrect: false },
          { id: 'opt_3', text: 'Which is', isCorrect: false },
        ],
        correctAnswer: 'What',
        explanation: '"What time" asks for clock time.',
      },
    },
    {
      id: 'turn_a1_65_4',
      turnIndex: 4,
      partnerPrompt:
        'Breakfast is served from 7:00 to 10:30 AM in the ground floor dining room. The Wi-Fi network is "RoyalGuest" and the password is on your keycard wallet. Checkout is at 11:00 AM, but we can offer you late checkout until 12:30 PM on Sunday. Here are your room keys. Enjoy your stay in Edinburgh!',
      partnerAudioText:
        'Breakfast is served from 7:00 to 10:30 AM in the ground floor dining room. The Wi-Fi network is "RoyalGuest" and the password is on your keycard wallet. Checkout is at 11:00 AM, but we can offer you late checkout until 12:30 PM on Sunday. Here are your room keys. Enjoy your stay in Edinburgh!',
      partnerQuestionHindi:
        'नाश्ता भूतल के भोजन कक्ष में सुबह 7:00 से 10:30 बजे तक परोसा जाता है। वाई-फाई नेटवर्क "RoyalGuest" है और पासवर्ड आपके कीकार्ड वॉलेट पर है। चेकआउट सुबह 11:00 बजे है, लेकिन हम आपको रविवार को दोपहर 12:30 बजे तक लेट चेकआउट की पेशकश कर सकते हैं। ये रही आपकी कमरे की चाबियाँ। एडिनबर्ग में आपके ठहरने का आनंद लें!',
      expectedFunction: 'Take Keycards, Express Appreciation & Conclude Check-In',
      contextGoal:
        'Thank Clara for her fantastic hospitality, take the room keys, and head to the elevators.',
      targetVocabulary: ['thank you so much Clara', 'keycards', 'late checkout is great', 'enjoy our stay', 'have a lovely day'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'Thank you so much Clara for your fantastic help and the late checkout! Have a lovely day, goodbye!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Response',
          text: 'Thank you very much Clara! We appreciate all your help. Have a great day!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Check-In Closing',
          patterns: [
            'thank you',
            'thanks',
            'clara',
            'late checkout',
            'have a lovely day',
            'great day',
            'goodbye',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_65_4',
        type: 'multiple_choice',
        prompt: 'Which sentence concludes hotel check-in warmly?',
        options: [
          { id: 'opt_1', text: 'Thank you Clara for all your help! Have a lovely day.', isCorrect: true },
          { id: 'opt_2', text: 'Keys are mine I go room now.', isCorrect: false },
          { id: 'opt_3', text: 'Done talk with hotel.', isCorrect: false },
        ],
        correctAnswer: 'Thank you Clara for all your help! Have a lovely day.',
        explanation: 'Polite and friendly.',
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
