import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_52: ConversationDefinition = {
  id: 'conv_a1_52',
  title: 'Neighborhood Places, Community Services & Local Facilities',
  cefr: 'A1',
  unitId: 'unit_a1_4',
  lessonLinks: ['lesson_a1_4_52'],
  estimatedMinutes: 5,
  scenario:
    'You have recently moved into a new neighborhood in Bristol. You meet the local community center volunteer Lucas outside the public library. You ask about neighborhood facilities, opening hours of the health clinic, the community garden, and the local sports center.',
  communicativeGoals: [
    'Describe local neighborhood facilities and amenities (public library, community center, health clinic, park)',
    'Use compound prepositions of place (next to, opposite, across from, between)',
    'Ask about opening days, hours, and registration ("What days is the clinic open?", "How do I register for the library?")',
    'Recycle directions, days of the week, and times from earlier A1 units',
  ],
  canDoStatements: [
    'Can describe local community facilities and neighborhood places (CEFR A1.2)',
    'Can give and understand locations using prepositions of place (opposite, next to, between)',
    'Can ask for opening times and local service details',
  ],
  characters: [
    {
      id: 'char_lucas_neighbor',
      name: 'Lucas',
      role: 'Community Center Coordinator',
      avatar: '🏘️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'facility',
        ipa: '/fəˈsɪləti/',
        partOfSpeech: 'noun',
        meaning: 'A place, amenity, or piece of equipment provided for a particular purpose',
        exampleSentence: 'Our neighborhood has excellent sports and health facilities.',
        translations: { hi: 'सुविधा / व्यवस्था' },
      },
      {
        word: 'opposite',
        ipa: '/ˈɒpəzɪt/',
        partOfSpeech: 'preposition / adjective',
        meaning: 'Having a position on the other or further side of something; facing across from',
        exampleSentence: 'The health clinic is opposite the community center.',
        translations: { hi: 'के सामने / विपरीत दिशा में' },
      },
      {
        word: 'library',
        ipa: '/ˈlaɪbrəri/',
        partOfSpeech: 'noun',
        meaning: 'A building or room containing collections of books and periodicals for reading or borrowing',
        exampleSentence: 'The public library is open from Monday to Saturday.',
        translations: { hi: 'पुस्तकालय / लाइब्रेरी' },
      },
      {
        word: 'clinic',
        ipa: '/ˈklɪnɪk/',
        partOfSpeech: 'noun',
        meaning: 'An establishment or hospital department where outpatients are given medical treatment or advice',
        exampleSentence: 'The neighborhood dental clinic is located next to the pharmacy.',
        translations: { hi: 'क्लिनिक / चिकित्सालय' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Where is the nearest...?',
        functionCategory: 'Location Inquiry',
        exampleSentence: 'Where is the nearest health clinic in this neighborhood?',
      },
      {
        phrase: 'It is located next to...',
        functionCategory: 'Giving Locations',
        exampleSentence: 'It is located next to the community center across from the park.',
      },
      {
        phrase: 'What are the opening hours?',
        functionCategory: 'Schedule Inquiries',
        exampleSentence: 'What are the opening hours of the public library on weekends?',
      },
      {
        phrase: 'How can I register as a new resident?',
        functionCategory: 'Community Registration',
        exampleSentence: 'How can I register for a library card as a new resident?',
      },
    ],
    grammar: {
      title: 'Compound Prepositions of Place: Next to, Opposite, Across from, Between A and B',
      conceptExplanation:
        'Use prepositions of place to describe relative locations in a town or neighborhood: "next to" (बगल में), "opposite / across from" (के सामने / सड़क पार), "between A and B" (A और B के बीच में). Use "Is there a [facility] near here?" for local questions.',
      patternFormula: 'There is a [Facility] + [next to / opposite / between] + [Landmark] | Where is the nearest [Facility]?',
      contrastExamples: [
        {
          incorrect: 'The clinic is next the pharmacy.',
          correct: 'The clinic is next to the pharmacy.',
          explanation: 'Always include "to" in "next to": "next to the pharmacy".',
        },
        {
          incorrect: 'The park is between the library.',
          correct: 'The park is between the library and the post office.',
          explanation: '"Between" requires two reference points: "between A and B".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Lucas',
        text: 'Hello! I noticed you are new on our street. Welcome to Greenhill neighborhood! I’m Lucas from the community center.',
        translation: 'नमस्ते! मैंने देखा कि आप हमारी गली में नए हैं। ग्रीनहिल पड़ोस में आपका स्वागत है! मैं कम्युनिटी सेंटर से लुकास हूँ।',
      },
      {
        speaker: 'You',
        text: 'Hi Lucas, nice to meet you! I just moved in yesterday. Where is the nearest grocery shop and health clinic around here?',
        translation: 'नमस्ते लुकास, आपसे मिलकर अच्छा लगा! मैं कल ही यहाँ आया हूँ। यहाँ आस-पास सबसे नज़दीकी किराना दुकान और हेल्थ क्लिनिक कहाँ है?',
      },
      {
        speaker: 'Lucas',
        text: 'The organic grocery shop is right across from the park, and the health clinic is next to the pharmacy on High Street.',
        translation: 'ऑर्गेनिक किराना दुकान पार्क के ठीक सामने है, और हेल्थ क्लिनिक हाई स्ट्रीट पर फार्मेसी के बगल में है।',
      },
      {
        speaker: 'You',
        text: 'That is very convenient! What time does the public library open in the mornings?',
        translation: 'यह बहुत सुविधाजनक है! सार्वजनिक पुस्तकालय सुबह किस समय खुलता है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_52_1',
      type: 'fill_blank',
      prompt: 'Complete the location phrase: "The community clinic is next ___ the pharmacy."',
      options: [
        { id: 'opt_1', text: 'to', isCorrect: true },
        { id: 'opt_2', text: 'at', isCorrect: false },
        { id: 'opt_3', text: 'on', isCorrect: false },
      ],
      correctAnswer: 'to',
      explanation: 'Use the compound preposition "next to".',
    },
    {
      id: 'cp_a1_52_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "between"?',
      options: [
        { id: 'opt_1', text: 'The cafe is between the bank and the bookstore.', isCorrect: true },
        { id: 'opt_2', text: 'The cafe is between the bank only.', isCorrect: false },
        { id: 'opt_3', text: 'The cafe is between across the bank.', isCorrect: false },
      ],
      correctAnswer: 'The cafe is between the bank and the bookstore.',
      explanation: '"Between" connects two places: "between A and B".',
    },
    {
      id: 'cp_a1_52_3',
      type: 'multiple_choice',
      prompt: 'How do you ask for the nearest facility in a neighborhood?',
      options: [
        { id: 'opt_1', text: 'Where is the nearest public library?', isCorrect: true },
        { id: 'opt_2', text: 'Where nearest is the public library?', isCorrect: false },
        { id: 'opt_3', text: 'Is where near public library to me?', isCorrect: false },
      ],
      correctAnswer: 'Where is the nearest public library?',
      explanation: '"Where is the nearest + noun?" is standard and accurate.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_52_1',
      scenarioContext: 'Describe the position of the clinic relative to the pharmacy.',
      prompt: 'Build: "The health clinic is next to the pharmacy."',
      targetStructure: 'Subject + is + next to + object',
      wordBank: ['The', 'health', 'clinic', 'is', 'next', 'to', 'the', 'pharmacy', 'are', 'at', 'between'],
      acceptableSolutions: [
        'The health clinic is next to the pharmacy',
        'The health clinic is next to the pharmacy.',
      ],
      explanation: 'Compound preposition "next to" indicating proximity.',
    },
    {
      id: 'sc_a1_52_2',
      scenarioContext: 'Ask about public library opening hours.',
      prompt: 'Build: "What are the opening hours of the library?"',
      targetStructure: 'What are the opening hours of + noun phrase?',
      wordBank: ['What', 'are', 'the', 'opening', 'hours', 'of', 'the', 'library', 'is', 'when', 'does'],
      acceptableSolutions: [
        'What are the opening hours of the library',
        'What are the opening hours of the library?',
      ],
      explanation: 'Question asking for facility schedule.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_52_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! I saw you moving boxes yesterday on Maple Avenue. Welcome to our neighborhood! I’m Lucas, coordinator at the community center. Are you settling in well, and do you need directions to any local facilities?',
      partnerAudioText:
        'Hi there! I saw you moving boxes yesterday on Maple Avenue. Welcome to our neighborhood! I’m Lucas, coordinator at the community center. Are you settling in well, and do you need directions to any local facilities?',
      partnerQuestionHindi:
        'नमस्ते! मैंने कल आपको मेपल एवेन्यू पर डिब्बे ले जाते देखा था। हमारे पड़ोस में आपका स्वागत है! मैं कम्युनिटी सेंटर का समन्वयक लुकास हूँ। क्या आप ठीक से बस रहे हैं, और क्या आपको किसी स्थानीय सुविधा के लिए दिशा-निर्देश चाहिए?',
      expectedFunction: 'Introduce Self As New Resident & Inquire About Health Clinic / Grocery Store',
      contextGoal:
        'Thank Lucas, say you moved in yesterday, and ask where the nearest health clinic and supermarket are located.',
      targetVocabulary: ['nice to meet you', 'moved in yesterday', 'nearest health clinic', 'supermarket', 'where is'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hi Lucas, nice to meet you! Yes, I moved into Maple Avenue yesterday. Could you tell me where the nearest health clinic and supermarket are located?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Nice to meet you Lucas! I moved in yesterday. Where is the nearest supermarket and clinic?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Thanks Lucas! Where is the nearest supermarket around here?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Greeting & Facility Inquiries',
          patterns: [
            'nice to meet you',
            'moved in yesterday',
            'health clinic',
            'supermarket',
            'grocery store',
            'where is the nearest',
            'facilities',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'next_pharmacy_error',
          pattern: /\bnext the pharmacy\b/i,
          errorType: 'grammar',
          message: 'Say "next to the pharmacy", with "to".',
          correctionPattern: 'next to the pharmacy',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_52_1',
        type: 'fill_blank',
        prompt: 'Choose the correct preposition: "The cafe is next ___ the bank."',
        options: [
          { id: 'opt_1', text: 'to', isCorrect: true },
          { id: 'opt_2', text: 'at', isCorrect: false },
          { id: 'opt_3', text: 'on', isCorrect: false },
        ],
        correctAnswer: 'to',
        explanation: 'Always use "next to".',
      },
    },
    {
      id: 'turn_a1_52_2',
      turnIndex: 2,
      partnerPrompt:
        'The supermarket is right opposite the central park, and the health clinic is between the post office and the pharmacy on High Street! Both are only five minutes on foot. Are you interested in the public library or sports center as well?',
      partnerAudioText:
        'The supermarket is right opposite the central park, and the health clinic is between the post office and the pharmacy on High Street! Both are only five minutes on foot. Are you interested in the public library or sports center as well?',
      partnerQuestionHindi:
        'सुपरमार्केट सेंट्रल पार्क के ठीक सामने है, और हेल्थ क्लिनिक हाई स्ट्रीट पर पोस्ट ऑफिस और फार्मेसी के बीच में है! दोनों पैदल केवल पाँच मिनट की दूरी पर हैं। क्या आप सार्वजनिक पुस्तकालय या खेल केंद्र में भी रुचि रखते हैं?',
      expectedFunction: 'Express Interest in Library & Inquire About Opening Hours',
      contextGoal:
        'Express interest in the library and ask about its opening hours and weekend schedule.',
      targetVocabulary: ['public library', 'opening hours', 'on weekends', 'what time does it open', 'borrow books'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I love reading and would definitely like to join the public library! What are the opening hours, and is it open on Saturdays?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Yes, I’d like to join the library. What time does it open on weekends?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Yes! What are the library opening hours on Saturday?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Library & Opening Hours',
          patterns: [
            'library',
            'opening hours',
            'open on saturdays',
            'on weekends',
            'what time',
            'borrow books',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_52_2',
        type: 'multiple_choice',
        prompt: 'Which question correctly asks about opening hours?',
        options: [
          { id: 'opt_1', text: 'What are the opening hours of the library?', isCorrect: true },
          { id: 'opt_2', text: 'What time is opening hours the library?', isCorrect: false },
          { id: 'opt_3', text: 'How hours open library does?', isCorrect: false },
        ],
        correctAnswer: 'What are the opening hours of the library?',
        explanation: '"What are the opening hours...?" is the correct pattern.',
      },
    },
    {
      id: 'turn_a1_52_3',
      turnIndex: 3,
      partnerPrompt:
        'The library is open Monday through Saturday from 9 AM to 7 PM. All you need to register is proof of your local address and a photo ID. We also have a community garden right behind the library where neighbors plant flowers and vegetables every Sunday. Would you like to join our garden group?',
      partnerAudioText:
        'The library is open Monday through Saturday from 9 AM to 7 PM. All you need to register is proof of your local address and a photo ID. We also have a community garden right behind the library where neighbors plant flowers and vegetables every Sunday. Would you like to join our garden group?',
      partnerQuestionHindi:
        'पुस्तकालय सोमवार से शनिवार सुबह 9 बजे से शाम 7 बजे तक खुला रहता है। पंजीकरण के लिए आपको केवल अपने स्थानीय पते का प्रमाण और एक फोटो पहचान पत्र चाहिए। पुस्तकालय के ठीक पीछे हमारे पास एक सामुदायिक बगीचा भी है जहाँ पड़ोसी हर रविवार को फूल और सब्जियां लगाते हैं। क्या आप हमारे गार्डन समूह में शामिल होना चाहेंगे?',
      expectedFunction: 'Accept Community Invitation & Inquire About Meeting Times',
      contextGoal:
        'Accept the community garden invitation enthusiastically and ask what time the group meets on Sundays.',
      targetVocabulary: ['would love to join', 'community garden', 'on sundays', 'what time do you meet', 'plant vegetables'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'That sounds delightful! I would love to join the community garden. What time does the group usually meet on Sunday mornings?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I’d love to join the garden group! What time do you meet on Sundays?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Sounds great! What time do you meet in the garden on Sunday?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Garden Group Acceptance & Time',
          patterns: [
            'would love to join',
            'love to join',
            'garden',
            'what time',
            'on sunday',
            'sunday morning',
            'meet',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_52_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We meet ___ Sunday mornings."',
        options: [
          { id: 'opt_1', text: 'on', isCorrect: true },
          { id: 'opt_2', text: 'in', isCorrect: false },
          { id: 'opt_3', text: 'at', isCorrect: false },
        ],
        correctAnswer: 'on',
        explanation: 'Use preposition "on" with days of the week ("on Sunday").',
      },
    },
    {
      id: 'turn_a1_52_4',
      turnIndex: 4,
      partnerPrompt:
        'We meet at 10:00 AM every Sunday, and we have tea and homemade biscuits afterwards! Here is our neighborhood community newsletter with all contact details. It is wonderful having you in our neighborhood!',
      partnerAudioText:
        'We meet at 10:00 AM every Sunday, and we have tea and homemade biscuits afterwards! Here is our neighborhood community newsletter with all contact details. It is wonderful having you in our neighborhood!',
      partnerQuestionHindi:
        'हम हर रविवार सुबह 10:00 बजे मिलते हैं, और उसके बाद हम चाय और घर के बने बिस्कुट खाते हैं! यह सभी संपर्क विवरणों के साथ हमारा पड़ोस समुदाय समाचार पत्र है। हमारे पड़ोस में आपका होना बहुत अच्छा है!',
      expectedFunction: 'Express Warm Gratitude & Promise Sunday Attendance',
      contextGoal:
        'Thank Lucas for the warm welcome and newsletter, and confirm you will see him on Sunday at 10 AM.',
      targetVocabulary: ['thank you Lucas', 'warm welcome', 'see you on Sunday', 'newsletter', 'ten o\'clock'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you so much for the warm welcome and the newsletter, Lucas! I am very excited to live here, and I will see you on Sunday at ten o\'clock in the garden.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thank you for your help and the newsletter! See you this Sunday at ten o\'clock.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Thanks Lucas! See you Sunday at ten!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Sunday Promise',
          patterns: [
            'thank you',
            'thanks',
            'see you on sunday',
            'see you sunday',
            'ten o\'clock',
            'warm welcome',
            'excited',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_52_4',
        type: 'multiple_choice',
        prompt: 'Which response confirms attendance warmly?',
        options: [
          { id: 'opt_1', text: 'Thank you Lucas! I will see you on Sunday at ten o\'clock.', isCorrect: true },
          { id: 'opt_2', text: 'I am must meet you now bye.', isCorrect: false },
          { id: 'opt_3', text: 'No talk more.', isCorrect: false },
        ],
        correctAnswer: 'Thank you Lucas! I will see you on Sunday at ten o\'clock.',
        explanation: 'Enthusiastic and polite neighborhood interaction.',
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
