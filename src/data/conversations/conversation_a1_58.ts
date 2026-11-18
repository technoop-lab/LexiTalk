import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_58: ConversationDefinition = {
  id: 'conv_a1_58',
  title: 'Social Invitations, Plans, Accepting & Declining Politely',
  cefr: 'A1',
  unitId: 'unit_a1_4',
  lessonLinks: ['lesson_a1_4_58'],
  estimatedMinutes: 5,
  scenario:
    'Your colleague Ethan invites you to a Saturday rooftop dinner party and acoustic music show celebrating his birthday. You must decline the early dinner politely because of a prior family commitment ("I’d love to, but I have to attend my sister\'s birthday lunch"), but accept the later evening acoustic music performance, offering to bring homemade dessert.',
  communicativeGoals: [
    'Extend and understand social invitations using "Would you like to...?", "Do you want to...?", "How about...?"',
    'Accept invitations warmly and enthusiastically ("I’d love to!", "That sounds wonderful")',
    'Decline invitations politely with softening excuses ("I’d love to, but unfortunately I have to...")',
    'Propose alternative arrangements or timings ("Can I join later around 8 PM?")',
  ],
  canDoStatements: [
    'Can make, accept, and politely decline invitations to social gatherings (CEFR A1.2)',
    'Can give reasons and excuses when unable to attend an event',
    'Can negotiate meetup times and offer to bring food or drinks',
  ],
  characters: [
    {
      id: 'char_ethan_colleague',
      name: 'Ethan',
      role: 'Colleague & Birthday Celebrant',
      avatar: '🎉',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'invitation',
        ipa: '/ˌɪnvɪˈteɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'A written or verbal request inviting someone to go somewhere or to do something',
        exampleSentence: 'Thank you for the warm birthday party invitation!',
        translations: { hi: 'निमंत्रण / न्योता' },
      },
      {
        word: 'celebration',
        ipa: '/ˌsɛlɪˈbreɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'The action of celebrating an important day or event',
        exampleSentence: 'The rooftop celebration starts at six in the evening.',
        translations: { hi: 'उत्सव / समारोह' },
      },
      {
        word: 'unfortunately',
        ipa: '/ʌnˈfɔːrtʃənətli/',
        partOfSpeech: 'adverb',
        meaning: 'It is regrettable that; regrettably or unluckily',
        exampleSentence: 'Unfortunately, I cannot attend the early dinner.',
        translations: { hi: 'दुर्भाग्यवश / खेद की बात है' },
      },
      {
        word: 'commitment',
        ipa: '/kəˈmɪtmənt/',
        partOfSpeech: 'noun',
        meaning: 'An engagement or obligation that restricts freedom of action',
        exampleSentence: 'I have a prior family commitment on Saturday afternoon.',
        translations: { hi: 'प्रतिबद्धता / पूर्व निर्धारित काम' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Would you like to come to...?',
        functionCategory: 'Inviting',
        exampleSentence: 'Would you like to come to my rooftop party on Saturday?',
      },
      {
        phrase: 'I’d love to, but I have to...',
        functionCategory: 'Polite Refusal with Excuse',
        exampleSentence: 'I’d love to, but I have to attend a family dinner first.',
      },
      {
        phrase: 'Can I join you a bit later?',
        functionCategory: 'Proposing Alternative Time',
        exampleSentence: 'Can I join you a bit later around eight o\'clock for the music?',
      },
      {
        phrase: 'I’ll bring some homemade dessert!',
        functionCategory: 'Offering Contribution',
        exampleSentence: 'I’ll bring some homemade chocolate brownies for everyone.',
      },
    ],
    grammar: {
      title: 'Polite Invitations & Refusals: Would you like to + [Base Verb] / I\'d love to, but I have to + [Base Verb]',
      conceptExplanation:
        'To invite someone politely, use "Would you like to + [base verb]?". To accept, use "I would love to!". To decline politely without causing offense, use the softening formula: "I’d love to, but [reason / obligation with have to]".',
      patternFormula: 'Would you like to + [come / join / have dinner]? | I\'d love to, but I have to + [attend / work / help]...',
      contrastExamples: [
        {
          incorrect: 'I no want to come to party.',
          correct: 'I’d love to, but unfortunately I have other plans on Saturday afternoon.',
          explanation: 'Never use blunt refusals like "I no want"; use softening polite phrases.',
        },
        {
          incorrect: 'Would you like coming to dinner?',
          correct: 'Would you like to come to dinner?',
          explanation: '"Would you like" takes the infinitive "to come", not "-ing".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Ethan',
        text: 'Hey! It is my birthday this Saturday! Would you like to come to my rooftop dinner party at 6 PM?',
        translation: 'अरे! इस शनिवार को मेरा जन्मदिन है! क्या आप शाम 6 बजे मेरी रूफटॉप डिनर पार्टी में आना चाहेंगे?',
      },
      {
        speaker: 'You',
        text: 'Happy early birthday Ethan! I’d love to, but unfortunately I have to attend my sister\'s birthday lunch until 7:30 PM.',
        translation: 'जन्मदिन की अग्रिम बधाई एथन! मुझे बहुत खुशी होती, लेकिन दुर्भाग्यवश मुझे शाम 7:30 बजे तक अपनी बहन के जन्मदिन के लंच में शामिल होना है।',
      },
      {
        speaker: 'Ethan',
        text: 'No problem at all! The live acoustic band starts playing at 8:00 PM. Can you join us then for dessert and music?',
        translation: 'कोई बात नहीं! लाइव अकौस्टिक बैंड रात 8:00 बजे बजना शुरू होगा। क्या आप तब मिठाई और संगीत के लिए हमारे साथ शामिल हो सकते हैं?',
      },
      {
        speaker: 'You',
        text: 'That is perfect! I will definitely arrive at 8 PM, and I’ll bring a fresh strawberry cheesecake for everyone!',
        translation: 'यह एकदम सही है! मैं निश्चित रूप से रात 8 बजे पहुँचूँगा, और सबके लिए एक ताज़ा स्ट्रॉबेरी चीज़केक लाऊँगा!',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_58_1',
      type: 'fill_blank',
      prompt: 'Complete the polite decline formula: "I’d love to, ___ I have to work late."',
      options: [
        { id: 'opt_1', text: 'but', isCorrect: true },
        { id: 'opt_2', text: 'and', isCorrect: false },
        { id: 'opt_3', text: 'so', isCorrect: false },
      ],
      correctAnswer: 'but',
      explanation: 'Use contrast connector "but" in "I\'d love to, but...".',
    },
    {
      id: 'cp_a1_58_2',
      type: 'multiple_choice',
      prompt: 'Which sentence invites a colleague politely?',
      options: [
        { id: 'opt_1', text: 'Would you like to come to my birthday dinner on Saturday?', isCorrect: true },
        { id: 'opt_2', text: 'Would you like coming birthday dinner on Saturday?', isCorrect: false },
        { id: 'opt_3', text: 'Are you like to come to birthday dinner?', isCorrect: false },
      ],
      correctAnswer: 'Would you like to come to my birthday dinner on Saturday?',
      explanation: '"Would you like to + base verb (come)" is the correct formula.',
    },
    {
      id: 'cp_a1_58_3',
      type: 'multiple_choice',
      prompt: 'Choose the most polite and natural acceptance:',
      options: [
        { id: 'opt_1', text: 'I’d love to join you! That sounds wonderful.', isCorrect: true },
        { id: 'opt_2', text: 'I am must come party yes.', isCorrect: false },
        { id: 'opt_3', text: 'I come there now.', isCorrect: false },
      ],
      correctAnswer: 'I’d love to join you! That sounds wonderful.',
      explanation: 'Warm and natural social acceptance.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_58_1',
      scenarioContext: 'Decline the early dinner politely with a family reason.',
      prompt: 'Build: "I would love to but I have family plans."',
      targetStructure: 'Subject + would love to + conjunction + subject + have + object',
      wordBank: ['I', 'would', 'love', 'to', 'but', 'I', 'have', 'family', 'plans', 'having', 'am', 'no'],
      acceptableSolutions: [
        'I would love to but I have family plans',
        'I would love to but I have family plans.',
      ],
      explanation: 'Standard polite refusal pattern.',
    },
    {
      id: 'sc_a1_58_2',
      scenarioContext: 'Propose arriving at eight o\'clock for music.',
      prompt: 'Build: "Can I join you at eight o\'clock for music?"',
      targetStructure: 'Can I join you at + time + prepositional phrase?',
      wordBank: ['Can', 'I', 'join', 'you', 'at', 'eight', "o'clock", 'for', 'music', 'joining', 'am', 'is'],
      acceptableSolutions: [
        "Can I join you at eight o'clock for music",
        "Can I join you at eight o'clock for music?",
      ],
      explanation: 'Alternative timing request.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_58_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! I’m celebrating my birthday this Saturday evening! We are having a rooftop barbecue dinner starting at 6:00 PM. Would you like to come celebrate with us?',
      partnerAudioText:
        'Hey! I’m celebrating my birthday this Saturday evening! We are having a rooftop barbecue dinner starting at 6:00 PM. Would you like to come celebrate with us?',
      partnerQuestionHindi:
        'अरे! मैं इस शनिवार शाम को अपना जन्मदिन मना रहा हूँ! हम शाम 6:00 बजे से रूफटॉप बारबेक्यू डिनर कर रहे हैं। क्या आप हमारे साथ जश्न मनाने आना चाहेंगे?',
      expectedFunction: 'Wish Happy Birthday & Decline Early Dinner Politely with Reason (I\'d love to, but...)',
      contextGoal:
        'Wish Ethan a happy birthday, say you’d love to come, but explain you have a family commitment until 7:30 PM.',
      targetVocabulary: ['happy early birthday Ethan', 'i’d love to but', 'family commitment', 'until 7:30', 'unfortunately'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Happy early birthday Ethan! I’d love to come, but unfortunately I have a prior family dinner until 7:30 PM. Would it be okay if I join you slightly later in the evening?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Happy birthday Ethan! I’d love to, but I have a family dinner until 7:30 PM. Can I come later?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Happy birthday! I’d love to, but I have family plans until 7:30. Can I join later?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Birthday Wishes & Polite Refusal',
          patterns: [
            'happy birthday',
            'love to',
            'family',
            'dinner',
            'until 7:30',
            'join later',
            'come later',
            'unfortunately',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'blunt_no_error',
          pattern: /\bi no come\b/i,
          errorType: 'grammar',
          message: 'Say "I\'d love to, but I have other plans", to be polite.',
          correctionPattern: "I'd love to, but I have other plans.",
        },
      ],
      remediationPractice: {
        id: 'rem_a1_58_1',
        type: 'fill_blank',
        prompt: 'Choose the correct word: "I would love to, ___ I have a doctor appointment."',
        options: [
          { id: 'opt_1', text: 'but', isCorrect: true },
          { id: 'opt_2', text: 'because of', isCorrect: false },
          { id: 'opt_3', text: 'so', isCorrect: false },
        ],
        correctAnswer: 'but',
        explanation: '"but" introduces the polite reason.',
      },
    },
    {
      id: 'turn_a1_58_2',
      turnIndex: 2,
      partnerPrompt:
        'Of course! Family always comes first. Our live acoustic guitar set and cake-cutting will start around 8:15 PM. Does arriving at 8:00 PM work for your schedule?',
      partnerAudioText:
        'Of course! Family always comes first. Our live acoustic guitar set and cake-cutting will start around 8:15 PM. Does arriving at 8:00 PM work for your schedule?',
      partnerQuestionHindi:
        'बिल्कुल! परिवार हमेशा पहले आता है। हमारा लाइव अकौस्टिक गिटार सेट और केक काटना रात लगभग 8:15 बजे शुरू होगा। क्या रात 8:00 बजे पहुँचना आपके कार्यक्रम के लिए ठीक रहेगा?',
      expectedFunction: 'Accept Evening Invitation Enthusiastically & Confirm 8 PM Arrival',
      contextGoal:
        'Enthusiastically confirm that 8:00 PM is perfect, and say you cannot wait to hear the music.',
      targetVocabulary: ['eight o\'clock is perfect', 'sounds wonderful', 'cannot wait', 'see the live music', 'arrive on time'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Arriving at eight o\'clock is absolutely perfect for me! That sounds wonderful, and I cannot wait to hear the live acoustic music and celebrate with you!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Eight o\'clock is perfect! I can’t wait to hear the music and celebrate.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: '8:00 PM is perfect! I’m looking forward to the music!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Acceptance & 8 PM Confirmation',
          patterns: [
            'eight',
            '8:00',
            'perfect',
            'sounds wonderful',
            'cannot wait',
            'looking forward',
            'music',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_58_2',
        type: 'multiple_choice',
        prompt: 'Which phrase warmly confirms a time arrangement?',
        options: [
          { id: 'opt_1', text: 'Eight o\'clock is perfect for me! I\'ll see you then.', isCorrect: true },
          { id: 'opt_2', text: 'Eight clock is time for you.', isCorrect: false },
          { id: 'opt_3', text: 'I am must meet eight.', isCorrect: false },
        ],
        correctAnswer: 'Eight o\'clock is perfect for me! I\'ll see you then.',
        explanation: 'Natural and positive confirmation.',
      },
    },
    {
      id: 'turn_a1_58_3',
      turnIndex: 3,
      partnerPrompt:
        'That will be so much fun! Most people are bringing drinks or small snacks. Is there anything special you’d like to bring along with you?',
      partnerAudioText:
        'That will be so much fun! Most people are bringing drinks or small snacks. Is there anything special you’d like to bring along with you?',
      partnerQuestionHindi:
        'यह बहुत मजेदार होगा! अधिकांश लोग पेय या छोटे स्नैक्स ला रहे हैं। क्या ऐसी कोई विशेष चीज़ है जिसे आप अपने साथ लाना चाहेंगे?',
      expectedFunction: 'Offer to Bring Food/Dessert (I\'ll bring homemade cheesecake / brownies)',
      contextGoal:
        'Offer to bring a homemade strawberry cheesecake or chocolate brownies and some sparkling drinks.',
      targetVocabulary: ['i will bring', 'homemade dessert', 'strawberry cheesecake', 'sparkling drinks', 'for everyone'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I will bake and bring a fresh homemade strawberry cheesecake and some sparkling apple cider for everyone to share!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I’ll bring a homemade cheesecake and some sparkling drinks for everyone.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I’ll bring a homemade cheesecake and some drinks!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Food/Drink Offer',
          patterns: [
            'will bring',
            'i\'ll bring',
            'cheesecake',
            'dessert',
            'brownies',
            'drinks',
            'cider',
            'homemade',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_58_3',
        type: 'fill_blank',
        prompt: 'Fill in the offer: "I ___ bring some homemade cake!"',
        options: [
          { id: 'opt_1', text: 'will', isCorrect: true },
          { id: 'opt_2', text: 'am to', isCorrect: false },
          { id: 'opt_3', text: 'did', isCorrect: false },
        ],
        correctAnswer: 'will',
        explanation: '"will" expresses spontaneous helpful offers.',
      },
    },
    {
      id: 'turn_a1_58_4',
      turnIndex: 4,
      partnerPrompt:
        'Strawberry cheesecake is my absolute favorite dessert in the world! You are the best. The rooftop address is 45 Victoria Street, 6th floor. See you on Saturday at 8:00 PM sharp!',
      partnerAudioText:
        'Strawberry cheesecake is my absolute favorite dessert in the world! You are the best. The rooftop address is 45 Victoria Street, 6th floor. See you on Saturday at 8:00 PM sharp!',
      partnerQuestionHindi:
        'स्ट्रॉबेरी चीज़केक दुनिया में मेरी सबसे पसंदीदा मिठाई है! आप सबसे अच्छे हैं। रूफटॉप का पता 45 विक्टोरिया स्ट्रीट, छठी मंजिल है। शनिवार को ठीक रात 8:00 बजे मिलते हैं!',
      expectedFunction: 'Note Address, Reiterate Birthday Wishes & Warm Goodbye',
      contextGoal:
        'Thank Ethan, confirm you noted 45 Victoria Street, and say you will see him on Saturday at 8 PM.',
      targetVocabulary: ['noted the address', '45 Victoria Street', 'see you Saturday at 8', 'have a fantastic birthday', 'goodbye Ethan'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I have noted the address at 45 Victoria Street! Thank you again for the invitation, Ethan. Have a fantastic start to your birthday weekend, and see you Saturday at eight!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Got the address! See you Saturday at 8:00 PM. Have a great birthday weekend, Ethan!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Got it! See you Saturday at 8 PM, Ethan. Happy birthday!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Saturday Confirmation',
          patterns: [
            'victoria street',
            'noted the address',
            'see you saturday',
            'see you at eight',
            'see you at 8',
            'happy birthday',
            'goodbye',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_58_4',
        type: 'multiple_choice',
        prompt: 'Which sentence warmly ends a party invitation arrangement?',
        options: [
          { id: 'opt_1', text: 'I have noted the address! See you on Saturday at eight o\'clock.', isCorrect: true },
          { id: 'opt_2', text: 'Address is write down bye now.', isCorrect: false },
          { id: 'opt_3', text: 'I am go away until Saturday.', isCorrect: false },
        ],
        correctAnswer: 'I have noted the address! See you on Saturday at eight o\'clock.',
        explanation: 'Polite and clear.',
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
