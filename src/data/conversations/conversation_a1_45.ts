import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_45: ConversationDefinition = {
  id: 'conv_a1_45',
  title: 'Future with Will (Spontaneous Decisions, Offers & Promises)',
  cefr: 'A1',
  unitId: 'unit_a1_3',
  lessonLinks: ['lesson_a1_3_45'],
  estimatedMinutes: 5,
  scenario:
    'You are helping your neighbor Elena organize a community block party in the neighborhood garden. When unexpected challenges and tasks arise (rain forecast, moving tables, buying ice, bringing music speakers), you make spontaneous decisions, offers of assistance, and firm promises using "will / \'ll" and "won\'t".',
  communicativeGoals: [
    'Make spontaneous on-the-spot decisions using "I\'ll + base verb" (I\'ll carry those heavy boxes, I\'ll answer the door)',
    'Make helpful offers of assistance with "I\'ll help you with..." and "Shall I...?"',
    'Make reliable promises and commitments using "I will / I promise I won\'t forget"',
    'Coordinate collaborative neighborhood and event tasks efficiently in English',
  ],
  canDoStatements: [
    'Can make instant decisions and offers of help using "will / \'ll" (CEFR A1.2)',
    'Can make simple promises with "will" and "won\'t"',
    'Can participate in dynamic task distribution during an event setup',
  ],
  characters: [
    {
      id: 'char_elena_neighbor',
      name: 'Elena',
      role: 'Block Party Organizer',
      avatar: '🎪',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'spontaneous',
        ipa: '/spɒnˈteɪniəs/',
        partOfSpeech: 'adjective',
        meaning: 'Performed or occurring as a result of a sudden impulse or inclination and without premeditation',
        exampleSentence: 'I made a spontaneous decision to help set up the party.',
        translations: { hi: 'स्वाभाविक / तत्कालिक' },
      },
      {
        word: 'promise',
        ipa: '/ˈprɒmɪs/',
        partOfSpeech: 'verb / noun',
        meaning: 'Assure someone that one will definitely do, give, or arrange something',
        exampleSentence: 'I promise I will bring the portable speakers on time.',
        translations: { hi: 'वादा करना / वचन' },
      },
      {
        word: 'carry',
        ipa: '/ˈkæri/',
        partOfSpeech: 'verb',
        meaning: 'Support and move someone or something from one place to another',
        exampleSentence: 'I\'ll help you carry those wooden folding tables.',
        translations: { hi: 'उठाना / ले जाना' },
      },
      {
        word: 'supplies',
        ipa: '/səˈplaɪz/',
        partOfSpeech: 'noun (plural)',
        meaning: 'An amount of something, typically food, equipment, or materials, that is provided or available for use',
        exampleSentence: 'I\'ll run to the supermarket to buy more ice and party supplies.',
        translations: { hi: 'सामग्री / आवश्यक वस्तुएँ' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I’ll help you with...',
        functionCategory: 'Offer of Assistance',
        exampleSentence: 'I’ll help you carry those heavy folding chairs.',
      },
      {
        phrase: 'Don’t worry, I’ll take care of it.',
        functionCategory: 'Reassurance & Responsibility',
        exampleSentence: 'Don’t worry, I’ll buy the bags of ice right now.',
      },
      {
        phrase: 'I promise I won’t be late.',
        functionCategory: 'Firm Promise',
        exampleSentence: 'I promise I won’t forget the Bluetooth sound system.',
      },
      {
        phrase: 'I’ll bring some homemade snacks.',
        functionCategory: 'Spontaneous Contribution',
        exampleSentence: 'I’ll bring fresh lemonade and cookies for the kids.',
      },
    ],
    grammar: {
      title: 'Future with Will: Spontaneous Decisions, Offers & Promises (Subject + will / \'ll + Verb)',
      conceptExplanation:
        'Use "will" (often contracted to "\'ll") for decisions made at the exact moment of speaking, offers of help, and promises. Negative: "will not" or "won\'t". Note the difference: use "be going to" for plans decided earlier, and "will / \'ll" for spontaneous on-the-spot choices.',
      patternFormula: 'Subject + will / \'ll + [Base Verb] | Subject + won\'t + [Base Verb] | I promise I will...',
      contrastExamples: [
        {
          incorrect: 'I will to help you carry the table.',
          correct: 'I will help you carry the table.',
          explanation: 'Never use "to" after modal "will": "I\'ll help", not "I\'ll to help".',
        },
        {
          incorrect: 'The phone is ringing. I am going to answer it.',
          correct: 'The phone is ringing. I\'ll get it!',
          explanation: 'Use "I\'ll get it" for spontaneous, instant decisions made right now.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Elena',
        text: 'Oh goodness, look at all these heavy wooden tables! The delivery truck just arrived and I can\'t lift them by myself.',
        translation: 'अरे बाप रे, इन भारी लकड़ी की मेजों को देखो! डिलीवरी ट्रक अभी-अभी आया है और मैं उन्हें अकेले नहीं उठा सकती।',
      },
      {
        speaker: 'You',
        text: 'Don\'t worry at all, Elena! I\'ll help you carry the tables into the garden right now.',
        translation: 'बिल्कुल चिंता मत करो, ऐलेना! मैं अभी बगीचे में मेजें ले जाने में आपकी मदद करूँगा।',
      },
      {
        speaker: 'Elena',
        text: 'You are a lifesaver! Also, we just ran out of ice and lemonade cups for the welcome bar.',
        translation: 'आप तो जीवन रक्षक हैं! इसके अलावा, वेलकम बार के लिए हमारे पास बर्फ और नींबू पानी के कप खत्म हो गए हैं।',
      },
      {
        speaker: 'You',
        text: 'I\'ll drive to the supermarket and buy three bags of ice and paper cups. I promise I\'ll be back in fifteen minutes!',
        translation: 'मैं सुपरमार्केट जाऊंगा और बर्फ की तीन थैलियां और पेपर कप खरीदूंगा। मैं वादा करता हूँ कि मैं पंद्रह मिनट में वापस आ जाऊँगा!',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_45_1',
      type: 'fill_blank',
      prompt: 'Complete the spontaneous offer: "Don\'t worry! I ___ carry the heavy box for you."',
      options: [
        { id: 'opt_1', text: '\'ll', isCorrect: true },
        { id: 'opt_2', text: 'am going', isCorrect: false },
        { id: 'opt_3', text: 'to', isCorrect: false },
      ],
      correctAnswer: '\'ll',
      explanation: 'Use "I\'ll" (I will) for spontaneous offers made at the moment.',
    },
    {
      id: 'cp_a1_45_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly makes a negative promise about forgetting?',
      options: [
        { id: 'opt_1', text: 'I promise I won\'t forget the speakers.', isCorrect: true },
        { id: 'opt_2', text: 'I promise I will not to forget the speakers.', isCorrect: false },
        { id: 'opt_3', text: 'I promise I don\'t will forget speakers.', isCorrect: false },
      ],
      correctAnswer: 'I promise I won\'t forget the speakers.',
      explanation: '"won\'t + base verb" expresses negative promises.',
    },
    {
      id: 'cp_a1_45_3',
      type: 'multiple_choice',
      prompt: 'When someone drops their keys, what is the most natural spontaneous response?',
      options: [
        { id: 'opt_1', text: 'I\'ll pick them up for you!', isCorrect: true },
        { id: 'opt_2', text: 'I was going to pick them up yesterday.', isCorrect: false },
        { id: 'opt_3', text: 'I am pick them up now.', isCorrect: false },
      ],
      correctAnswer: 'I\'ll pick them up for you!',
      explanation: 'Spontaneous decision on the spot requires "I\'ll + verb".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_45_1',
      scenarioContext: 'Make a spontaneous offer to carry heavy equipment.',
      prompt: 'Build: "I will help you carry the tables into the garden."',
      targetStructure: 'Subject + will + base verb + object + base verb + object + prepositional phrase',
      wordBank: ['I', 'will', 'help', 'you', 'carry', 'the', 'tables', 'into', 'the', 'garden', 'to', 'carrying'],
      acceptableSolutions: [
        'I will help you carry the tables into the garden',
        'I will help you carry the tables into the garden.',
        'I\'ll help you carry the tables into the garden.',
      ],
      explanation: 'Spontaneous offer using "will help you carry".',
    },
    {
      id: 'sc_a1_45_2',
      scenarioContext: 'Make a promise to return quickly.',
      prompt: 'Build: "I promise I will be back in ten minutes."',
      targetStructure: 'Subject + promise + subject + will + base verb + adverb + prepositional phrase',
      wordBank: ['I', 'promise', 'I', 'will', 'be', 'back', 'in', 'ten', 'minutes', 'won\'t', 'to', 'being'],
      acceptableSolutions: [
        'I promise I will be back in ten minutes',
        'I promise I will be back in ten minutes.',
        'I promise I\'ll be back in ten minutes.',
      ],
      explanation: 'Promise construction using "I promise I will...".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_45_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi! Thank goodness you are here! Look at all these heavy wooden benches and gazebo tents. We need to set them up before the neighbors arrive, but they are too heavy for me to move alone!',
      partnerAudioText:
        'Hi! Thank goodness you are here! Look at all these heavy wooden benches and gazebo tents. We need to set them up before the neighbors arrive, but they are too heavy for me to move alone!',
      partnerQuestionHindi:
        'नमस्ते! भगवान का शुक्र है कि आप यहाँ हैं! इन भारी लकड़ी के बेंचों और शामियाने के तंबुओं को देखो। पड़ोसियों के आने से पहले हमें इन्हें लगाना है, लेकिन ये इतने भारी हैं कि मैं इन्हें अकेले नहीं हिला सकती!',
      expectedFunction: 'Make Spontaneous Offer of Physical Help (I\'ll help you carry/move)',
      contextGoal:
        'Offer immediately to help carry the benches and set up the gazebo ("I\'ll help you carry those benches right now").',
      targetVocabulary: ["i'll help", 'i will carry', 'benches', 'gazebo', 'don’t worry', 'right now', 'set up'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Don’t worry at all Elena! I’ll help you carry all the wooden benches into the garden, and then we’ll set up the gazebo together right now.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I’ll help you carry them! Let’s move the benches first and then I’ll put up the tent.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Don’t worry, I’ll carry the heavy benches for you right now!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Spontaneous Lifting Offer',
          patterns: [
            "i'll help",
            'i will help',
            "i'll carry",
            'i will carry',
            "don't worry",
            'benches',
            'gazebo',
            'move them',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'ill_to_help',
          pattern: /\bi'll to help\b/i,
          errorType: 'grammar',
          message: 'Say "I\'ll help", not "I\'ll to help".',
          correctionPattern: "I'll help you",
        },
      ],
      remediationPractice: {
        id: 'rem_a1_45_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "Don\'t worry, I ___ help you move the tables."',
        options: [
          { id: 'opt_1', text: 'will', isCorrect: true },
          { id: 'opt_2', text: 'to', isCorrect: false },
          { id: 'opt_3', text: 'am will', isCorrect: false },
        ],
        correctAnswer: 'will',
        explanation: '"I will help" is the correct modal structure.',
      },
    },
    {
      id: 'turn_a1_45_2',
      turnIndex: 2,
      partnerPrompt:
        'Thank you so much! That made it so much faster. Oh no, I just opened the cooler box and realized we completely forgot to buy bags of ice and paper napkins for the barbecue!',
      partnerAudioText:
        'Thank you so much! That made it so much faster. Oh no, I just opened the cooler box and realized we completely forgot to buy bags of ice and paper napkins for the barbecue!',
      partnerQuestionHindi:
        'बहुत-बहुत धन्यवाद! इससे काम बहुत तेज़ी से हो गया। अरे नहीं, मैंने अभी कूलर बॉक्स खोला और देखा कि हम बारबेक्यू के लिए बर्फ की थैलियां और पेपर नैपकिन खरीदना पूरी तरह से भूल गए!',
      expectedFunction: 'Make Spontaneous Store Run Decision & Promise Speed (I\'ll go / I promise)',
      contextGoal:
        'Decide on the spot to run to the nearby shop to buy ice and napkins, and promise to return quickly.',
      targetVocabulary: ["i'll go", 'i will buy', 'ice', 'napkins', 'promise', 'be back', 'ten minutes'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Don’t panic, Elena! I’ll drive to the corner grocery store and buy four bags of ice and plenty of napkins. I promise I’ll be back in ten minutes!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I’ll go to the shop right now and get the ice and napkins. I’ll be back very quickly!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I’ll run to the supermarket and buy ice and napkins! Back in 10 minutes, promise!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Store Run Decision & Promise',
          patterns: [
            "i'll go",
            'i will go',
            "i'll buy",
            'i will buy',
            'ice',
            'napkins',
            'promise',
            'be back',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'promise_wont_error',
          pattern: /\bi promise i not will\b/i,
          errorType: 'grammar',
          message: 'Say "I promise I won\'t be late" or "I promise I will be fast".',
          correctionPattern: "I promise I will be back soon.",
        },
      ],
      remediationPractice: {
        id: 'rem_a1_45_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly offers an immediate store run?',
        options: [
          { id: 'opt_1', text: 'I\'ll run to the grocery store and buy ice right now.', isCorrect: true },
          { id: 'opt_2', text: 'I am running grocery store yesterday for ice.', isCorrect: false },
          { id: 'opt_3', text: 'I will to go buy ice now.', isCorrect: false },
        ],
        correctAnswer: 'I\'ll run to the grocery store and buy ice right now.',
        explanation: 'Instant decision using "I\'ll + verb".',
      },
    },
    {
      id: 'turn_a1_45_3',
      turnIndex: 3,
      partnerPrompt:
        'You are incredible! What about music for the party? My Bluetooth speaker battery is dead, and people will be arriving in twenty minutes. Do you have a portable sound system?',
      partnerAudioText:
        'You are incredible! What about music for the party? My Bluetooth speaker battery is dead, and people will be arriving in twenty minutes. Do you have a portable sound system?',
      partnerQuestionHindi:
        'आप वाकई कमाल हैं! पार्टी के संगीत के बारे में क्या? मेरे ब्लूटूथ स्पीकर की बैटरी खत्म हो गई है, और लोग बीस मिनट में आने लगेंगे। क्या आपके पास कोई पोर्टेबल साउंड सिस्टम है?',
      expectedFunction: 'Offer Sound System & Promise to Set Up Music Playlist',
      contextGoal:
        'Offer to bring your own large wireless speaker and promise to connect a fun party playlist.',
      targetVocabulary: ["i'll bring", 'my speaker', 'playlist', 'music', 'connect', 'sound great', 'promise'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I have a fully charged outdoor speaker at my house! I’ll bring it over when I return with the ice, and I’ll put on our summer party playlist. It will sound amazing!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I have a great wireless speaker at home. I’ll bring it and connect my music playlist.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I’ll grab my speaker and play some great music! Won’t take two minutes.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Speaker & Music Offer',
          patterns: ["i'll bring", 'i will bring', 'speaker', 'music', 'playlist', 'sound', 'charged'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_45_3',
        type: 'fill_blank',
        prompt: 'Fill in the offer: "I ___ bring my portable speaker from home."',
        options: [
          { id: 'opt_1', text: '\'ll', isCorrect: true },
          { id: 'opt_2', text: 'am', isCorrect: false },
          { id: 'opt_3', text: 'to', isCorrect: false },
        ],
        correctAnswer: '\'ll',
        explanation: 'Contraction "I\'ll" (I will) expresses spontaneous offer.',
      },
    },
    {
      id: 'turn_a1_45_4',
      turnIndex: 4,
      partnerPrompt:
        'You saved our entire neighborhood party today! With the benches set up, ice and cups on the way, and your sound system, this will be the best block party of the year. Thank you so much!',
      partnerAudioText:
        'You saved our entire neighborhood party today! With the benches set up, ice and cups on the way, and your sound system, this will be the best block party of the year. Thank you so much!',
      partnerQuestionHindi:
        'आपने आज हमारी पूरी मोहल्ला पार्टी को बचा लिया! बेंच लगने, बर्फ और कप आने और आपके साउंड सिस्टम के साथ, यह साल की सबसे अच्छी ब्लॉक पार्टी होगी। आपका बहुत-बहुत धन्यवाद!',
      expectedFunction: 'Conclude with Positive Prediction & Community Spirit',
      contextGoal:
        'Reassure Elena, state that everyone will have a fantastic time, and head off to get the supplies.',
      targetVocabulary: ['happy to help', 'everyone will love it', 'see you in a few minutes', 'great party', 'bye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I am so happy to help, Elena! We are a wonderful neighborhood and everyone will have a fantastic time. I’ll see you in ten minutes with the ice and speaker!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Always happy to help! Everyone will have so much fun today. See you in a few minutes!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Happy to help! It’s going to be a blast. See you in ten minutes with everything!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing Spirit & Immediate Action',
          patterns: [
            'happy to help',
            'everyone will',
            'see you in',
            'great time',
            'fantastic time',
            'see you soon',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_45_4',
        type: 'multiple_choice',
        prompt: 'Which response concludes the coordination warmly?',
        options: [
          { id: 'opt_1', text: 'I\'m happy to help Elena! Everyone will have a wonderful time. See you in ten minutes!', isCorrect: true },
          { id: 'opt_2', text: 'Party is finish bye.', isCorrect: false },
          { id: 'opt_3', text: 'I am not coming back now.', isCorrect: false },
        ],
        correctAnswer: 'I\'m happy to help Elena! Everyone will have a wonderful time. See you in ten minutes!',
        explanation: 'Enthusiastic, helpful, and community-minded.',
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
