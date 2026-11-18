import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_107: ConversationDefinition = {
  id: 'conv_a2_107',
  title: 'Relationships, Social Circles & Keeping in Touch (each other, get along with)',
  cefr: 'A2',
  unitId: 'unit_a2_8',
  lessonLinks: ['lesson_a2_8_107'],
  estimatedMinutes: 5,
  scenario:
    'You are catching up over coffee at a seaside café in Brighton with your university friend Samira Khan. Talk about your mutual circle of friends, how you stay in touch across different cities, use reciprocal pronouns ("each other"), describe how well your old classmates get along, and discuss plans for a group reunion.',
  communicativeGoals: [
    'Describe friendship circles and communication habits (messaging, video calls, meeting up in person)',
    'Use reciprocal pronoun structures ("each other", "one another") accurately',
    'Use relationship collocations and phrasal verbs ("get along with", "keep in touch", "lose touch", "catch up with")',
    'Inquire about mutual friends and express enthusiasm for future get-togethers',
  ],
  canDoStatements: [
    'Can describe personal relationships, friends, and social routines in detail (CEFR A2)',
    'Can use reciprocal expressions such as "each other" to describe mutual actions',
    'Can discuss methods and frequency of staying in touch with distant friends',
  ],
  characters: [
    {
      id: 'char_samira_khan',
      name: 'Samira Khan',
      role: 'University Friend & UI Designer',
      avatar: '☕',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'keep in touch',
        ipa: '/kiːp ɪn tʌtʃ/',
        partOfSpeech: 'phrase',
        meaning: 'To maintain contact or communication with someone',
        exampleSentence: 'We keep in touch through a weekly group video call.',
        translations: { hi: 'संपर्क में रहना' },
      },
      {
        word: 'get along with',
        ipa: '/ɡɛt əˈlɒŋ wɪð/',
        partOfSpeech: 'phrasal verb',
        meaning: 'To have a friendly relationship with someone',
        exampleSentence: 'I get along really well with all my coworkers and roommates.',
        translations: { hi: 'अच्छे संबंध होना / तालमेल बैठना' },
      },
      {
        word: 'each other',
        ipa: '/iːtʃ ˈʌðər/',
        partOfSpeech: 'pronoun',
        meaning: 'Used to refer to two or more people in a reciprocal relationship or action',
        exampleSentence: 'Tom and Sarah help each other with design projects.',
        translations: { hi: 'एक-दूसरे (आपस में)' },
      },
      {
        word: 'reunion',
        ipa: '/riːˈjuːnjən/',
        partOfSpeech: 'noun',
        meaning: 'A social gathering of people who have not seen each other for some time',
        exampleSentence: 'We are organizing an annual university reunion in July.',
        translations: { hi: 'पुनर्मिलन / रीयूनियन' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'We haven’t seen each other for ages!',
        functionCategory: 'Warm Social Opening',
        exampleSentence: 'Samira, we haven’t seen each other for months!',
      },
      {
        phrase: 'How do you usually keep in touch with...?',
        functionCategory: 'Inquiring About Social Habits',
        exampleSentence: 'How do you keep in touch with our classmates in London?',
      },
      {
        phrase: 'We text each other almost every day.',
        functionCategory: 'Expressing Reciprocal Routine',
        exampleSentence: 'We message each other photos every weekend.',
      },
      {
        phrase: 'We should definitely organize a reunion.',
        functionCategory: 'Suggesting Social Gathering',
        exampleSentence: 'We should definitely plan a weekend get-together in Brighton.',
      },
    ],
    grammar: {
      title: 'Reciprocal Pronouns (Each Other) & Relationship Phrasal Verbs',
      conceptExplanation:
        '1. Reciprocal Action: Use "each other" when two or more people do the same action to/for one another (e.g. "We call each other", "They help each other").\n2. Phrasal Verbs for Relationships: "get along with + person" (have good relations), "keep in touch with" (stay in contact), "catch up with" (hear recent news), "lose touch with" (stop communicating).\n3. Frequency & Habits: Pair with present simple frequency expressions (e.g., "once a week", "every Sunday").',
      patternFormula: 'Subject (plural) + Verb + each other | Subject + get along with + Object',
      contrastExamples: [
        {
          incorrect: 'We see ourselves every weekend (when meaning mutual friends).',
          correct: 'We see each other every weekend.',
          explanation: '"Ourselves" is reflexive (looking in a mirror). "Each other" is reciprocal (two people seeing one another).',
        },
        {
          incorrect: 'I am get along good with him.',
          correct: 'I get along well with him.',
          explanation: '"Get along" is a normal present verb, followed by the adverb "well".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Samira Khan',
        text: 'Alex! It is so wonderful to see you in Brighton! How do you keep in touch with our old study group?',
        translation: 'एलेक्स! ब्राइटन में आपसे मिलकर बहुत अच्छा लगा! आप हमारे पुराने स्टडी ग्रुप के साथ कैसे संपर्क में रहते हैं?',
      },
      {
        speaker: 'You',
        text: 'Samira, great to see you too! We have an active WhatsApp group and we video call each other every couple of weeks to catch up on work and life.',
        translation: 'समीरा, आपसे भी मिलकर बहुत खुशी हुई! हमारा एक सक्रिय व्हाट्सएप ग्रुप है और हम काम और जीवन की ताज़ा खबरें जानने के लिए हर दो सप्ताह में एक-दूसरे को वीडियो कॉल करते हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_107_1',
      type: 'multiple_choice',
      prompt: 'Which pronoun correctly expresses a reciprocal relationship between friends?',
      options: [
        { id: 'opt_1', text: 'We message each other every evening.', isCorrect: true },
        { id: 'opt_2', text: 'We message ourselves every evening.', isCorrect: false },
        { id: 'opt_3', text: 'We message theirselves every evening.', isCorrect: false },
      ],
      correctAnswer: 'We message each other every evening.',
      explanation: 'Use "each other" for mutual actions between friends.',
    },
    {
      id: 'cp_a2_107_2',
      type: 'fill_blank',
      prompt: 'Complete the phrasal verb: "I get ___ very well with my new project manager."',
      options: [
        { id: 'opt_1', text: 'along', isCorrect: true },
        { id: 'opt_2', text: 'around', isCorrect: false },
        { id: 'opt_3', text: 'across', isCorrect: false },
      ],
      correctAnswer: 'along',
      explanation: '"Get along with" means having a positive, friendly relationship.',
    },
    {
      id: 'cp_a2_107_3',
      type: 'multiple_choice',
      prompt: 'What does "lose touch with someone" mean?',
      options: [
        { id: 'opt_1', text: 'To gradually stop communicating with them over time.', isCorrect: true },
        { id: 'opt_2', text: 'To lose their phone hardware.', isCorrect: false },
        { id: 'opt_3', text: 'To argue with them loudly.', isCorrect: false },
      ],
      correctAnswer: 'To gradually stop communicating with them over time.',
      explanation: '"Lose touch" means communication has faded away.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_107_1',
      scenarioContext: 'Describe communication frequency with friends.',
      prompt: 'Build: "We call each other every weekend to catch up."',
      targetStructure: 'Subject + verb + each other + time frequency + infinitive purpose',
      wordBank: ['We', 'call', 'each', 'other', 'every', 'weekend', 'to', 'catch', 'up', 'calling', 'ourselves'],
      acceptableSolutions: [
        'We call each other every weekend to catch up',
        'We call each other every weekend to catch up.',
      ],
      explanation: 'Uses "each other" with frequency and purpose.',
    },
    {
      id: 'sc_a2_107_2',
      scenarioContext: 'Describe a positive relationship with roommates.',
      prompt: 'Build: "I get along very well with my flatmates."',
      targetStructure: 'Subject + get along + adverb + with + object',
      wordBank: ['I', 'get', 'along', 'very', 'well', 'with', 'my', 'flatmates', 'getting', 'am'],
      acceptableSolutions: [
        'I get along very well with my flatmates',
        'I get along very well with my flatmates.',
      ],
      explanation: 'Accurate phrasal verb structure with adverb of degree.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_107_1',
      turnIndex: 1,
      partnerPrompt:
        'Alex! It feels like ages since our university graduation. How have you been? Do you still keep in touch with Marcus and Elena from our design cohort?',
      partnerAudioText:
        'Alex! It feels like ages since our university graduation. How have you been? Do you still keep in touch with Marcus and Elena from our design cohort?',
      partnerQuestionHindi:
        'एलेक्स! हमारे विश्वविद्यालय के ग्रेजुएशन के बाद से काफी समय हो गया है। आप कैसे हैं? क्या आप अभी भी हमारे डिज़ाइन समूह के मार्कस और ऐलेना के संपर्क में हैं?',
      expectedFunction: 'Greet Friend, Share General Update & Explain Communication Habits',
      contextGoal:
        'Greet Samira warmly; say you are doing well; explain that you and your friends text each other regularly in a group chat and have monthly video calls.',
      targetVocabulary: ['great to see you Samira', 'text each other regularly on WhatsApp', 'video call each other once a month', 'keep in touch'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'Samira, so great to see you! I am doing really well. Yes, Marcus, Elena, and I keep in touch all the time. We text each other almost every day in our group chat and have a video call once a month to catch up on our projects!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Greeting & Personal State',
          patterns: ['samira', 'great to see you', 'doing well', 'good', 'ages', 'wonderful'],
          required: true,
        },
        {
          name: 'Keeping in Touch (each other / chat / calls)',
          patterns: ['keep in touch', 'each other', 'chat', 'text', 'video call', 'whatsapp', 'marcus', 'elena'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'ourselves_reciprocal_error',
          pattern: /\bwe call ourselves\b|\bwe text ourselves\b/i,
          errorType: 'grammar',
          message: 'Use "each other" instead of "ourselves" when actions are reciprocal.',
          correctionPattern: 'we call each other / we text each other',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_107_1',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes mutual communication?',
        options: [
          { id: 'opt_1', text: 'We message each other regularly.', isCorrect: true },
          { id: 'opt_2', text: 'We message ourselves regularly.', isCorrect: false },
          { id: 'opt_3', text: 'We are message each other.', isCorrect: false },
        ],
        correctAnswer: 'We message each other regularly.',
        explanation: '"Each other" is used for mutual actions between people.',
      },
    },
    {
      id: 'turn_a2_107_2',
      turnIndex: 2,
      partnerPrompt:
        'That is so heartwarming! I lost touch with Marcus after he moved to Bristol for his new job. How does he get along with his new design agency team there?',
      partnerAudioText:
        'That is so heartwarming! I lost touch with Marcus after he moved to Bristol for his new job. How does he get along with his new design agency team there?',
      partnerQuestionHindi:
        'यह बहुत सुखद है! अपनी नई नौकरी के लिए ब्रिस्टल जाने के बाद मेरा मार्कस से संपर्क टूट गया था। वह वहाँ अपनी नई डिज़ाइन एजेंसी टीम के साथ कैसा तालमेल बिठा रहा है?',
      expectedFunction: 'Describe Relationships & Team Harmony (get along with)',
      contextGoal:
        'Explain that Marcus gets along very well with his teammates, they collaborate on mobile apps, and he loves living near the Bristol harbor.',
      targetVocabulary: ['gets along very well with his team', 'collaborate closely on creative projects', 'loves living in Bristol', 'shares an apartment with friendly roommates'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'Marcus gets along really well with his new colleagues! They collaborate closely on mobile applications, and he loves the creative energy in Bristol. He also shares a flat with two friendly developers and gets along great with them too.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Relationship / Harmony (get along well / colleagues)',
          patterns: ['gets along', 'well', 'colleagues', 'team', 'bristol', 'flat', 'roommates', 'friendly', 'happy'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_107_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "He gets ___ well with all his teammates."',
        options: [
          { id: 'opt_1', text: 'along', isCorrect: true },
          { id: 'opt_2', text: 'through', isCorrect: false },
          { id: 'opt_3', text: 'over', isCorrect: false },
        ],
        correctAnswer: 'along',
        explanation: '"Get along well with" is the set phrasal verb.',
      },
    },
    {
      id: 'turn_a2_107_3',
      turnIndex: 3,
      partnerPrompt:
        'I am so relieved to hear that! Since so many of us live across the UK now, why don’t we organize a summer weekend reunion right here in Brighton? We could rent a cottage near the beach.',
      partnerAudioText:
        'I am so relieved to hear that! Since so many of us live across the UK now, why don’t we organize a summer weekend reunion right here in Brighton? We could rent a cottage near the beach.',
      partnerQuestionHindi:
        'यह सुनकर मुझे बहुत राहत मिली! चूंकि हममें से बहुत से लोग अब पूरे यूके में रहते हैं, तो क्यों न हम यहीं ब्राइटन में एक समर वीकेंड रीयूनियन का आयोजन करें? हम समुद्र तट के पास एक कॉटेज किराए पर ले सकते हैं।',
      expectedFunction: 'Agree Enthusiastically & Propose Specific Planning Action',
      contextGoal:
        'Agree enthusiastically; suggest creating a shared poll or group chat to pick a weekend in July, and offer to contact Marcus and Elena.',
      targetVocabulary: ['that is a brilliant idea', 'organize a summer reunion in July', 'create a group chat to choose dates', 'contact Marcus and Elena'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'That is a fantastic idea, Samira! A summer reunion by the sea would be wonderful. I can create a poll in our group chat to pick a weekend in July, and I will message Marcus and Elena today to invite them!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Enthusiastic Agreement & Idea Support',
          patterns: ['fantastic', 'brilliant', 'great idea', 'wonderful', 'reunion', 'summer', 'brighton', 'beach'],
          required: true,
        },
        {
          name: 'Action Step (poll / July / message / invite)',
          patterns: ['poll', 'july', 'group chat', 'message', 'invite', 'contact', 'marcus', 'elena'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_107_3',
        type: 'multiple_choice',
        prompt: 'Which response agrees enthusiastically and adds a practical plan?',
        options: [
          { id: 'opt_1', text: 'That sounds brilliant! I will set up a poll so we can choose a weekend.', isCorrect: true },
          { id: 'opt_2', text: 'Maybe no beach is bad.', isCorrect: false },
          { id: 'opt_3', text: 'I am agree to meet.', isCorrect: false },
        ],
        correctAnswer: 'That sounds brilliant! I will set up a poll so we can choose a weekend.',
        explanation: 'Natural, enthusiastic agreement with a forward-looking action.',
      },
    },
    {
      id: 'turn_a2_107_4',
      turnIndex: 4,
      partnerPrompt:
        'Awesome! I will research some cozy beachside guesthouses and share the links. It was so lovely catching up today, Alex. Let’s make sure we don’t wait another year to see each other!',
      partnerAudioText:
        'Awesome! I will research some cozy beachside guesthouses and share the links. It was so lovely catching up today, Alex. Let’s make sure we don’t wait another year to see each other!',
      partnerQuestionHindi:
        'बहुत बढ़िया! मैं समुद्र के किनारे कुछ आरामदायक गेस्टहाउस खोजूंगी और लिंक साझा करूंगी। आज बातचीत करके बहुत अच्छा लगा, एलेक्स। आइए सुनिश्चित करें कि हम एक-दूसरे को देखने के लिए एक और साल का इंतज़ार न करें!',
      expectedFunction: 'Conclude Conversation Warmly & Confirm Next Contact',
      contextGoal:
        'Say you loved catching up too; promise to keep in touch on WhatsApp this week and wish her a wonderful evening.',
      targetVocabulary: ['loved catching up with you', 'talk on WhatsApp this week', 'see each other soon in July', 'have a great evening in Brighton'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'I completely agree! It was wonderful catching up with you over coffee Samira. I will text you the group link tonight. Have a lovely evening in Brighton and see you soon!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Continued Contact',
          patterns: ['thank you', 'wonderful', 'loved catching up', 'coffee', 'samira', 'text you', 'see you soon', 'have a lovely evening', 'brighton'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_107_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "It was wonderful to catch ___ with you!"',
        options: [
          { id: 'opt_1', text: 'up', isCorrect: true },
          { id: 'opt_2', text: 'on', isCorrect: false },
          { id: 'opt_3', text: 'off', isCorrect: false },
        ],
        correctAnswer: 'up',
        explanation: '"Catch up with someone" means exchange recent news after time apart.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 75,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 70,
  },
};
