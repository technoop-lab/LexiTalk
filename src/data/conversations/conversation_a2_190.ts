import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_190: ConversationDefinition = {
  id: 'conv_a2_190',
  title: 'Hobbies, Creative Arts, Crafting & Makerspaces',
  cefr: 'A2',
  unitId: 'unit_a2_13',
  lessonLinks: ['lesson_a2_13_190'],
  estimatedMinutes: 5,
  scenario:
    'You are visiting a community maker workshop and art studio for the first time. You meet studio mentor Sam to discuss your creative interests, learn about pottery wheel classes and 3D printing equipment, and talk about hobbies you enjoy doing.',
  communicativeGoals: [
    'Use verbs of affinity with gerunds and infinitives (enjoy doing, love making, interested in learning, keen on trying)',
    'Discuss creative hobbies (pottery, woodworking, painting, digital design, photography)',
    'Ask about workshop schedules, equipment safety inductions, and membership passes',
    'Describe personal creative projects and learning goals',
  ],
  canDoStatements: [
    'Can describe hobbies and creative passions using verbs of affinity + gerund/infinitive',
    'Can express interest in learning new artistic crafts in English',
    'Can ask practical questions about studio equipment, membership, and class timings',
  ],
  characters: [
    {
      id: 'char_sam_mentor',
      name: 'Sam',
      role: 'Community Makerspace Mentor & Ceramicist',
      avatar: '🎨',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'pottery',
        ipa: '/ˈpɒtəri/',
        partOfSpeech: 'noun',
        meaning: 'Pots, dishes, and other articles made of earthenware or clay',
        exampleSentence: 'I really enjoy making pottery on the spinning wheel.',
        translations: { hi: 'मिट्टी के बर्तन बनाने की कला' },
      },
      {
        word: 'workshop',
        ipa: '/ˈwɜːkʃɒp/',
        partOfSpeech: 'noun',
        meaning: 'A room or building in which goods are manufactured or repaired; a practical class',
        exampleSentence: 'The woodworking workshop takes place every Wednesday evening.',
        translations: { hi: 'कार्यशाला' },
      },
      {
        word: 'creative',
        ipa: '/kriˈeɪtɪv/',
        partOfSpeech: 'adjective',
        meaning: 'Relating to or involving the imagination or original ideas',
        exampleSentence: 'Crafting gives me a creative way to relax after work.',
        translations: { hi: 'रचनात्मक' },
      },
      {
        word: 'equipment',
        ipa: '/ɪˈkwɪpmənt/',
        partOfSpeech: 'noun',
        meaning: 'The necessary items for a particular purpose',
        exampleSentence: 'All safety equipment is provided for pottery and carpentry students.',
        translations: { hi: 'उपकरण / सामग्री' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I really enjoy sculpting clay and making handmade mugs.',
        functionCategory: 'Expressing affinity with enjoy + gerund',
        exampleSentence: 'She loves painting watercolors during the weekend.',
      },
      {
        phrase: 'I am very interested in learning how to use the pottery wheel.',
        functionCategory: 'Expressing learning desire with interested in',
        exampleSentence: 'He is keen on trying 3D design and laser cutting.',
      },
      {
        phrase: 'Do I need prior experience before joining the beginner workshop?',
        functionCategory: 'Inquiring workshop requirements',
        exampleSentence: 'Are materials and tools included in the workshop fee?',
      },
      {
        phrase: 'How often are the open studio sessions held?',
        functionCategory: 'Asking studio schedule',
        exampleSentence: 'Can members book equipment in advance?',
      },
    ],
    grammar: {
      title: 'Verbs of Affinity + Gerund / Infinitive & Preposition + Gerund',
      conceptExplanation:
        '1. Verbs followed by Gerund (-ing):\n   - enjoy + [Verb-ing]: "I enjoy painting landscapes." (Never: *I enjoy to paint)\n   - avoid + [Verb-ing]: "I avoid rushing my projects."\n2. Verbs followed by Gerund or Infinitive:\n   - like / love / prefer + [Verb-ing or to Verb]: "I love making pottery" / "I love to make pottery."\n3. Prepositions followed by Gerund:\n   - interested in + [Verb-ing]: "I am interested in learning ceramics."\n   - good at + [Verb-ing]: "She is good at designing patterns."',
      patternFormula: '[Subject] + [enjoy / love / like] + [Verb-ing]  |  [Subject] + is/am/are [interested in / keen on] + [Verb-ing]',
      contrastExamples: [
        {
          incorrect: 'I enjoy to make pottery cups.',
          correct: 'I enjoy making pottery cups.',
          explanation: '"Enjoy" must be followed by a gerund (-ing form), never a "to"-infinitive.',
        },
        {
          incorrect: 'I am interested in learn woodwork.',
          correct: 'I am interested in learning woodwork.',
          explanation: 'Prepositions like "in" require the gerund form "learning".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Sam',
        text: 'Hi there! Welcome to the Art Hub Makerspace. What creative crafts do you like doing in your free time?',
        translation: 'नमस्ते! आर्ट हब मेकरस्पेस में आपका स्वागत है। आप अपने खाली समय में कौन से रचनात्मक काम करना पसंद करते हैं?',
      },
      {
        speaker: 'Learner',
        text: 'Hello! I enjoy drawing and I am very interested in learning pottery.',
        translation: 'नमस्ते! मुझे ड्राइंग करना अच्छा लगता है और मैं मिट्टी के बर्तन बनाना सीखने में बहुत रुचि रखता हूँ।',
      },
      {
        speaker: 'Sam',
        text: 'Wonderful! We have beginner ceramic wheel sessions every Tuesday and Thursday.',
        translation: 'शानदार! हमारे पास हर मंगलवार और गुरुवार को शुरुआती सिरेमिक व्हील सत्र होते हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_190_1',
      type: 'fill_blank',
      prompt: 'Complete with the correct form: "I really enjoy ______ (create) custom handmade cards."',
      options: [
        { id: 'opt_1', text: 'creating', isCorrect: true },
        { id: 'opt_2', text: 'to create', isCorrect: false },
        { id: 'opt_3', text: 'create', isCorrect: false },
      ],
      correctAnswer: 'creating',
      explanation: '"Enjoy" takes the gerund form (-ing).',
    },
    {
      id: 'cp_190_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "interested in"?',
      options: [
        { id: 'opt_1', text: 'She is interested in learning woodworking techniques.', isCorrect: true },
        { id: 'opt_2', text: 'She is interested to learning woodworking techniques.', isCorrect: false },
        { id: 'opt_3', text: 'She is interested in learn woodworking techniques.', isCorrect: false },
      ],
      correctAnswer: 'She is interested in learning woodworking techniques.',
      explanation: 'Use preposition "in" followed by gerund "learning".',
    },
    {
      id: 'cp_190_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [love / making / on the wheel / ceramic bowls / I]',
      correctAnswer: 'I love making ceramic bowls on the wheel',
      explanation: 'Subject + love + gerund + object + prepositional phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_190_1',
      prompt: 'Construct a sentence stating you are interested in trying pottery and sculpting clay.',
      scenarioContext: 'Explaining craft interests to Sam.',
      targetStructure: 'I am interested in trying pottery and sculpting clay.',
      wordBank: ['I am', 'interested in', 'trying pottery', 'and', 'sculpting clay', 'this semester'],
      acceptableSolutions: [
        'I am interested in trying pottery and sculpting clay.',
        'I am interested in trying pottery.',
      ],
      explanation: 'Use "interested in + trying/sculpting".',
    },
    {
      id: 'sc_190_2',
      prompt: 'Construct a sentence asking if beginners need prior experience before joining the class.',
      scenarioContext: 'Inquiring about prerequisite skills.',
      targetStructure: 'Do beginners need prior experience before joining the workshop?',
      wordBank: ['Do beginners', 'need', 'prior experience', 'before joining', 'the workshop?'],
      acceptableSolutions: [
        'Do beginners need prior experience before joining the workshop?',
        'Do I need prior experience before joining the workshop?',
      ],
      explanation: 'Form a polite inquiry about course requirements.',
    },
  ],
  turns: [
    {
      id: 'turn_190_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello and welcome to the community makerspace! I am Sam, the studio coordinator. What kind of creative crafts or hobbies do you enjoy doing most?',
      partnerAudioText:
        'Hello and welcome to the community makerspace! I am Sam, the studio coordinator. What kind of creative crafts or hobbies do you enjoy doing most?',
      partnerQuestionHindi:
        'नमस्ते और कम्युनिटी मेकरस्पेस में आपका स्वागत है! मैं सैम हूँ, स्टूडियो समन्वयक। आप किस प्रकार के रचनात्मक शिल्प या शौक करना सबसे अधिक पसंद करते हैं?',
      expectedFunction: 'Sharing personal creative hobbies using "enjoy + -ing" or "love + -ing"',
      contextGoal: 'State your craft hobbies (e.g. sketching, painting, making crafts) and desire to learn new skills',
      targetVocabulary: ['enjoy', 'love', 'making', 'painting', 'pottery', 'interested in'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hi Sam! I enjoy painting with watercolors and I love making handmade crafts at home.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello! I enjoy sketching, and I am very interested in learning pottery and ceramics.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Hi Sam! In my free time I love working with wood and sculpting clay, and I want to try 3D design.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'affinity_verb',
          patterns: ['enjoy', 'love', 'like', 'interested in', 'keen on'],
          required: true,
        },
        {
          name: 'hobby_crafts',
          patterns: ['painting', 'drawing', 'sketching', 'pottery', 'ceramics', 'woodwork', 'crafts', 'making', 'sculpting'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_190_1_enjoy_infinitive',
          pattern: /i enjoy to paint/i,
          errorType: 'grammar',
          message: 'Say "I enjoy painting" (use gerund -ing after enjoy).',
          correctionPattern: 'I enjoy painting...',
        },
      ],
      remediationPractice: {
        id: 'rem_190_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I enjoy ______ (sketch) in the park."',
        options: [
          { id: 'r1', text: 'sketching', isCorrect: true },
          { id: 'r2', text: 'to sketch', isCorrect: false },
        ],
        correctAnswer: 'sketching',
        explanation: 'Gerund (-ing) follows "enjoy".',
      },
    },
    {
      id: 'turn_190_2',
      turnIndex: 2,
      partnerPrompt:
        'Ceramics and pottery are very popular here! We have six electric pottery wheels and two clay kilns. Do you have any prior experience with clay, or would you be starting as a total beginner?',
      partnerAudioText:
        'Ceramics and pottery are very popular here! We have six electric pottery wheels and two clay kilns. Do you have any prior experience with clay, or would you be starting as a total beginner?',
      partnerQuestionHindi:
        'सिरेमिक और मिट्टी के बर्तन यहाँ बहुत लोकप्रिय हैं! हमारे पास छह इलेक्ट्रिक पॉटरी व्हील और दो मिट्टी की भट्टियाँ हैं। क्या आपको मिट्टी का कोई पिछला अनुभव है, या आप पूरी तरह से शुरुआत करेंगे?',
      expectedFunction: 'Stating skill level and asking about beginner workshops',
      contextGoal: 'Explain that you are a beginner and ask about beginner wheel throwing classes',
      targetVocabulary: ['beginner', 'experience', 'interested in', 'classes', 'workshop', 'learn'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I am a complete beginner with no prior experience, but I am excited to learn!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I tried clay once years ago, so I would love to join the beginner pottery workshop.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I am totally new to the wheel! Do you offer guided step-by-step classes for beginners?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'skill_status',
          patterns: ['beginner', 'new', 'no experience', 'first time', 'little experience'],
          required: true,
        },
        {
          name: 'learning_intent',
          patterns: ['learn', 'join', 'excited', 'classes', 'workshop', 'love to', 'guided'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_190_2_beginner_prep',
          pattern: /i am beginner on/i,
          errorType: 'grammar',
          message: 'Say "I am a beginner in pottery" or "I am a complete beginner".',
          correctionPattern: 'I am a beginner...',
        },
      ],
      remediationPractice: {
        id: 'rem_190_2',
        type: 'multiple_choice',
        prompt: 'Which phrase is natural?',
        options: [
          { id: 'r1', text: 'I am a complete beginner with pottery.', isCorrect: true },
          { id: 'r2', text: 'I am total beginner by pottery.', isCorrect: false },
        ],
        correctAnswer: 'I am a complete beginner with pottery.',
        explanation: 'Natural phrase for starting a new hobby.',
      },
    },
    {
      id: 'turn_190_3',
      turnIndex: 3,
      partnerPrompt:
        'Our "Intro to Pottery" four-week course starts next Tuesday at 6:30 PM. All natural clay, glazes, and apron tools are provided. Would you like to know about membership passes or open studio practice hours?',
      partnerAudioText:
        'Our "Intro to Pottery" four-week course starts next Tuesday at 6:30 PM. All natural clay, glazes, and apron tools are provided. Would you like to know about membership passes or open studio practice hours?',
      partnerQuestionHindi:
        'हमारा चार सप्ताह का "मिट्टी के बर्तनों का परिचय" कोर्स अगले मंगलवार को शाम 6:30 बजे शुरू होगा। सभी प्राकृतिक मिट्टी, ग्लेज़ और एप्रन उपकरण प्रदान किए जाते हैं। क्या आप सदस्यता पास या ओपन स्टूडियो अभ्यास के समय के बारे में जानना चाहेंगे?',
      expectedFunction: 'Inquiring about membership fee, schedule, or studio practice hours',
      contextGoal: 'Ask about the price of the course, membership pass, or weekend practice hours',
      targetVocabulary: ['membership', 'cost', 'fee', 'hours', 'practice', 'schedule'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Yes please! How much does the four-week course cost, and can students practice on weekends?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'What are the monthly membership fees, and what hours is the open studio available?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I’d love to know the schedule! Are weekend practice hours included in the course membership?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'price_or_pass_question',
          patterns: ['how much', 'cost', 'fee', 'price', 'membership', 'pass'],
          required: true,
        },
        {
          name: 'hours_or_practice',
          patterns: ['practice', 'hours', 'weekend', 'schedule', 'open studio', 'available', 'time'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_190_3_cost_grammar',
          pattern: /how much cost is it/i,
          errorType: 'grammar',
          message: 'Say "How much does it cost?" or "What is the cost?".',
          correctionPattern: 'How much does it cost?',
        },
      ],
      remediationPractice: {
        id: 'rem_190_3',
        type: 'fill_blank',
        prompt: 'Fill in: "How much ______ (do) the course cost?"',
        options: [
          { id: 'r1', text: 'does', isCorrect: true },
          { id: 'r2', text: 'do', isCorrect: false },
        ],
        correctAnswer: 'does',
        explanation: 'Singular subject "the course" takes "does".',
      },
    },
    {
      id: 'turn_190_4',
      turnIndex: 4,
      partnerPrompt:
        'The four-week course is $120 total, which includes all clay, kiln firings, and unlimited weekend open studio hours! I can reserve a spot for you for next Tuesday evening if you’d like.',
      partnerAudioText:
        'The four-week course is $120 total, which includes all clay, kiln firings, and unlimited weekend open studio hours! I can reserve a spot for you for next Tuesday evening if you’d like.',
      partnerQuestionHindi:
        'चार सप्ताह का कोर्स कुल $120 का है, जिसमें सभी मिट्टी, भट्टी में पकाना और असीमित सप्ताहांत ओपन स्टूडियो घंटे शामिल हैं! यदि आप चाहें तो मैं अगले मंगलवार की शाम के लिए आपके लिए एक जगह आरक्षित कर सकता हूँ।',
      expectedFunction: 'Confirming registration enthusiastically and closing the visit',
      contextGoal: 'Accept the reservation, thank Sam for the tour, and say see you next Tuesday',
      targetVocabulary: ['reserve', 'spot', 'thank you', 'Tuesday', 'excited', 'see you'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Yes please, sign me up! Thank you Sam for the tour, see you next Tuesday at 6:30 PM.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'That sounds like a great deal. Please reserve a spot for me. Thank you so much, Sam!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'That is fantastic value! Please register my name. I am really looking forward to learning pottery. See you Tuesday!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'booking_acceptance',
          patterns: ['yes', 'sign me up', 'reserve', 'spot', 'register', 'please', 'great deal'],
          required: true,
        },
        {
          name: 'gratitude_closing',
          patterns: ['thank you', 'thanks', 'sam', 'see you', 'tuesday', 'looking forward'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_190_4_sign_up',
          pattern: /sign up me/i,
          errorType: 'grammar',
          message: 'The phrasal verb with pronoun is "sign me up".',
          correctionPattern: 'sign me up',
        },
      ],
      remediationPractice: {
        id: 'rem_190_4',
        type: 'multiple_choice',
        prompt: 'Which phrase correctly requests registration?',
        options: [
          { id: 'r1', text: 'Please sign me up for the class!', isCorrect: true },
          { id: 'r2', text: 'Please sign up me to class!', isCorrect: false },
        ],
        correctAnswer: 'Please sign me up for the class!',
        explanation: 'Object pronoun "me" comes between "sign" and "up".',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 75,
  },
};
