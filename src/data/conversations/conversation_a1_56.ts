import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_56: ConversationDefinition = {
  id: 'conv_a1_56',
  title: 'Hobbies, Free Time, Entertainment & Creative Passions',
  cefr: 'A1',
  unitId: 'unit_a1_4',
  lessonLinks: ['lesson_a1_4_56'],
  estimatedMinutes: 5,
  scenario:
    'You attend a community arts and leisure club mixer in Edinburgh. You chat with member Chloe about your creative hobbies (watercolor painting, acoustic guitar, photography), how often you practice them, what sports you play on weekends, and your favorite weekend entertainment.',
  communicativeGoals: [
    'Describe personal hobbies, artistic pastimes, and sports using verbs followed by gerunds (enjoy painting, love playing guitar, keen on photography)',
    'State frequency of leisure activities using adverbs of frequency (usually, twice a week, on weekends, every evening)',
    'Express enthusiasm and creative preferences ("I find painting very relaxing", "I’m really into live music")',
    'Ask conversation partner about their creative passions and hobbies ("What do you do in your free time?")',
  ],
  canDoStatements: [
    'Can describe hobbies and free time interests in simple detail (CEFR A1.2)',
    'Can use gerunds (-ing forms) after verbs of preference (like, love, enjoy, hate)',
    'Can express how frequently they engage in leisure activities',
  ],
  characters: [
    {
      id: 'char_chloe_artist',
      name: 'Chloe',
      role: 'Creative Arts Club Member',
      avatar: '🎨',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'passion',
        ipa: '/ˈpæʃən/',
        partOfSpeech: 'noun',
        meaning: 'An intense enthusiasm or devotion toward an activity, subject, or hobby',
        exampleSentence: 'Acoustic guitar has been my biggest creative passion for years.',
        translations: { hi: 'जुनून / गहरी रुचि' },
      },
      {
        word: 'relaxing',
        ipa: '/rɪˈlæksɪŋ/',
        partOfSpeech: 'adjective',
        meaning: 'Reducing tension or anxiety; restful and soothing',
        exampleSentence: 'I find watercolor painting very relaxing after a busy day.',
        translations: { hi: 'आरामदेह / सुकून देने वाला' },
      },
      {
        word: 'photography',
        ipa: '/fəˈtɒɡrəfi/',
        partOfSpeech: 'noun',
        meaning: 'The art or practice of taking and processing photographs',
        exampleSentence: 'She practices landscape photography every Sunday morning.',
        translations: { hi: 'फोटोग्राफी / छायांकन' },
      },
      {
        word: 'leisure',
        ipa: '/ˈlɛʒər/',
        partOfSpeech: 'noun',
        meaning: 'Time when one is not working or occupied; free time',
        exampleSentence: 'What do you enjoy doing during your leisure time?',
        translations: { hi: 'फुर्सत / खाली समय' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I really enjoy painting watercolors.',
        functionCategory: 'Stating Creative Hobbies',
        exampleSentence: 'I really enjoy painting watercolors of landscapes and flowers.',
      },
      {
        phrase: 'How often do you practice...?',
        functionCategory: 'Frequency Inquiry',
        exampleSentence: 'How often do you practice playing the acoustic guitar?',
      },
      {
        phrase: 'I usually play badminton twice a week.',
        functionCategory: 'Sports & Routines',
        exampleSentence: 'I usually play badminton with friends twice a week.',
      },
      {
        phrase: 'What are your favorite creative hobbies?',
        functionCategory: 'Inquiring About Hobbies',
        exampleSentence: 'What are your favorite creative hobbies in your spare time?',
      },
    ],
    grammar: {
      title: 'Verbs of Preference + Gerund (-ing): enjoy / love / like + [Verb-ing]',
      conceptExplanation:
        'When expressing likes and leisure habits, follow verbs such as "enjoy", "love", "like", and "dislike" with a gerund (verb + -ing): "I enjoy painting", "I love playing", "I like taking photos". Pair with frequency adverbs (always, often, twice a week).',
      patternFormula: 'Subject + [enjoy / love / like] + [Verb + -ing] + [Object] + [Frequency Expression]',
      contrastExamples: [
        {
          incorrect: 'I enjoy to paint landscapes on Sunday.',
          correct: 'I enjoy painting landscapes on Sunday.',
          explanation: '"enjoy" is followed by a gerund (-ing), never the full infinitive "to paint".',
        },
        {
          incorrect: 'I play guitar two time a week.',
          correct: 'I play guitar twice a week.',
          explanation: 'Use "twice a week", not "two time a week".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Chloe',
        text: 'Hi there! Welcome to the arts and hobbies club mixer. What creative things do you enjoy doing in your spare time?',
        translation: 'नमस्ते! कला और शौक क्लब मिलन समारोह में आपका स्वागत है। आप अपने खाली समय में कौन सी रचनात्मक चीजें करना पसंद करते हैं?',
      },
      {
        speaker: 'You',
        text: 'Hello Chloe! I really enjoy watercolor painting and playing the acoustic guitar. I also love taking nature photography.',
        translation: 'नमस्ते क्लोई! मुझे वाटरकलर पेंटिंग करना और अकौस्टिक गिटार बजाना बहुत पसंद है। मुझे प्रकृति की फोटोग्राफी करना भी बहुत पसंद है।',
      },
      {
        speaker: 'Chloe',
        text: 'That sounds amazing! How often do you practice your painting, and do you play any sports too?',
        translation: 'यह अद्भुत लगता है! आप अपनी पेंटिंग का अभ्यास कितनी बार करते हैं, और क्या आप कोई खेल भी खेलते हैं?',
      },
      {
        speaker: 'You',
        text: 'I paint twice a week in the evenings, and I play badminton with friends every Saturday morning.',
        translation: 'मैं शाम को सप्ताह में दो बार पेंटिंग करता हूँ, और हर शनिवार सुबह दोस्तों के साथ बैडमिंटन खेलता हूँ।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_56_1',
      type: 'fill_blank',
      prompt: 'Complete with the correct gerund: "In my free time, I really enjoy ___ watercolor landscapes."',
      options: [
        { id: 'opt_1', text: 'painting', isCorrect: true },
        { id: 'opt_2', text: 'paint', isCorrect: false },
        { id: 'opt_3', text: 'to paint', isCorrect: false },
      ],
      correctAnswer: 'painting',
      explanation: 'The verb "enjoy" is followed by the gerund "painting".',
    },
    {
      id: 'cp_a1_56_2',
      type: 'multiple_choice',
      prompt: 'Which sentence uses the correct frequency expression?',
      options: [
        { id: 'opt_1', text: 'I play the guitar twice a week.', isCorrect: true },
        { id: 'opt_2', text: 'I play the guitar two times week.', isCorrect: false },
        { id: 'opt_3', text: 'I play guitar two week.', isCorrect: false },
      ],
      correctAnswer: 'I play the guitar twice a week.',
      explanation: '"twice a week" is the idiomatic frequency expression.',
    },
    {
      id: 'cp_a1_56_3',
      type: 'multiple_choice',
      prompt: 'Choose the sentence with correct gerund usage after "love":',
      options: [
        { id: 'opt_1', text: 'She loves taking nature photography on weekends.', isCorrect: true },
        { id: 'opt_2', text: 'She loves takes nature photography on weekends.', isCorrect: false },
        { id: 'opt_3', text: 'She loves taken nature photography.', isCorrect: false },
      ],
      correctAnswer: 'She loves taking nature photography on weekends.',
      explanation: '"loves taking" pairs the verb with gerund.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_56_1',
      scenarioContext: 'Describe your creative hobby and how relaxing it is.',
      prompt: 'Build: "I enjoy painting because it is very relaxing."',
      targetStructure: 'Subject + enjoy + gerund + conjunction + clause',
      wordBank: ['I', 'enjoy', 'painting', 'because', 'it', 'is', 'very', 'relaxing', 'to paint', 'am', 'relax'],
      acceptableSolutions: [
        'I enjoy painting because it is very relaxing',
        'I enjoy painting because it is very relaxing.',
      ],
      explanation: 'Gerund after enjoy with explanatory reason clause.',
    },
    {
      id: 'sc_a1_56_2',
      scenarioContext: 'Ask Chloe about her favorite leisure pastime.',
      prompt: 'Build: "What do you enjoy doing in your free time?"',
      targetStructure: 'What do you enjoy doing in your free time?',
      wordBank: ['What', 'do', 'you', 'enjoy', 'doing', 'in', 'your', 'free', 'time', 'does', 'to do', 'are'],
      acceptableSolutions: [
        'What do you enjoy doing in your free time',
        'What do you enjoy doing in your free time?',
      ],
      explanation: 'Question pattern with "enjoy doing".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_56_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! Welcome to the Edinburgh Community Arts Club! I’m Chloe. We are getting to know new members today. What creative hobbies or pastimes do you enjoy doing the most?',
      partnerAudioText:
        'Hi there! Welcome to the Edinburgh Community Arts Club! I’m Chloe. We are getting to know new members today. What creative hobbies or pastimes do you enjoy doing the most?',
      partnerQuestionHindi:
        'नमस्ते! एडिनबर्ग कम्युनिटी आर्ट्स क्लब में आपका स्वागत है! मैं क्लोई हूँ। हम आज नए सदस्यों को जान रहे हैं। आप सबसे अधिक किन रचनात्मक शौकों या गतिविधियों का आनंद लेते हैं?',
      expectedFunction: 'Describe Creative Hobbies with Gerunds (enjoy painting, love playing guitar)',
      contextGoal:
        'State that you enjoy watercolor painting, love playing the acoustic guitar, and find painting very relaxing.',
      targetVocabulary: ['enjoy painting', 'love playing guitar', 'watercolor', 'relaxing', 'creative hobbies'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hello Chloe! Nice to meet you. I really enjoy watercolor painting landscapes, and I love playing the acoustic guitar. I find creative painting very relaxing after work.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hi Chloe! I enjoy watercolor painting and playing guitar. It is very relaxing.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I love painting watercolors and playing guitar!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Creative Hobbies & Feelings',
          patterns: [
            'enjoy painting',
            'love playing guitar',
            'watercolor',
            'guitar',
            'relaxing',
            'hobbies',
            'photography',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'enjoy_to_paint_error',
          pattern: /\bi enjoy to paint\b/i,
          errorType: 'grammar',
          message: 'Say "I enjoy painting", using the -ing gerund form.',
          correctionPattern: 'I enjoy painting',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_56_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "She enjoys ___ guitar."',
        options: [
          { id: 'opt_1', text: 'playing', isCorrect: true },
          { id: 'opt_2', text: 'to play', isCorrect: false },
          { id: 'opt_3', text: 'play', isCorrect: false },
        ],
        correctAnswer: 'playing',
        explanation: '"enjoy" takes the gerund "-ing" form.',
      },
    },
    {
      id: 'turn_a1_56_2',
      turnIndex: 2,
      partnerPrompt:
        'Acoustic guitar and watercolors make a wonderful artistic combination! How often do you practice, and do you also enjoy active sports or outdoor activities on weekends?',
      partnerAudioText:
        'Acoustic guitar and watercolors make a wonderful artistic combination! How often do you practice, and do you also enjoy active sports or outdoor activities on weekends?',
      partnerQuestionHindi:
        'ध्वनिक गिटार और वाटरकलर एक अद्भुत कलात्मक संयोजन बनाते हैं! आप कितनी बार अभ्यास करते हैं, और क्या आप सप्ताहांत पर सक्रिय खेलों या बाहरी गतिविधियों का भी आनंद लेते हैं?',
      expectedFunction: 'State Practice Frequency & Sports Habits (twice a week, play badminton)',
      contextGoal:
        'State that you practice guitar twice a week, paint on Sundays, and play badminton or go hiking on weekends.',
      targetVocabulary: ['twice a week', 'on weekends', 'play badminton', 'go hiking', 'practice regularly'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I practice playing the guitar twice a week in the evenings, paint on Sunday afternoons, and usually play badminton with friends every Saturday morning.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I practice twice a week and play badminton on Saturday mornings.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Twice a week! And I play badminton on Saturdays.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Frequency & Sports',
          patterns: [
            'twice a week',
            'on saturdays',
            'on sundays',
            'play badminton',
            'badminton',
            'hiking',
            'practice',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_56_2',
        type: 'multiple_choice',
        prompt: 'Which expression correctly states a frequency of two times in seven days?',
        options: [
          { id: 'opt_1', text: 'twice a week', isCorrect: true },
          { id: 'opt_2', text: 'two times weekly days', isCorrect: false },
          { id: 'opt_3', text: 'second time a week', isCorrect: false },
        ],
        correctAnswer: 'twice a week',
        explanation: '"twice a week" is standard English.',
      },
    },
    {
      id: 'turn_a1_56_3',
      turnIndex: 3,
      partnerPrompt:
        'Badminton is such fun! In our club, I teach a pottery and ceramic sculpture workshop every Wednesday evening. What about you, Chloe asked—what kind of live entertainment or music concerts do you like attending?',
      partnerAudioText:
        'Badminton is such fun! In our club, I teach a pottery and ceramic sculpture workshop every Wednesday evening. What about you, Chloe asked—what kind of live entertainment or music concerts do you like attending?',
      partnerQuestionHindi:
        'बैडमिंटन बहुत मजेदार है! हमारे क्लब में, मैं हर बुधवार शाम को मिट्टी के बर्तन और सिरेमिक मूर्तिकला कार्यशाला सिखाती हूँ। आपके बारे में क्या, क्लोई ने पूछा—आप किस तरह के लाइव मनोरंजन या संगीत समारोहों में भाग लेना पसंद करते हैं?',
      expectedFunction: 'Describe Entertainment Preferences & Ask Partner',
      contextGoal:
        'State you love acoustic indie concerts and art galleries, and ask Chloe what her favorite art style is.',
      targetVocabulary: ['love attending live concerts', 'art galleries', 'indie music', 'what is your favorite', 'pottery'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I love attending live acoustic concerts and visiting modern art galleries on weekends! Pottery sounds fascinating—what is your favorite thing to sculpt, Chloe?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I love going to live concerts and art galleries. What kind of pottery do you make?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I love live music! What do you like to make in pottery, Chloe?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Entertainment & Reciprocal Question',
          patterns: [
            'live concerts',
            'live music',
            'art galleries',
            'pottery',
            'what is your favorite',
            'what do you make',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_56_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I love ___ to live music concerts."',
        options: [
          { id: 'opt_1', text: 'going', isCorrect: true },
          { id: 'opt_2', text: 'go', isCorrect: false },
          { id: 'opt_3', text: 'went', isCorrect: false },
        ],
        correctAnswer: 'going',
        explanation: '"love going" uses the gerund.',
      },
    },
    {
      id: 'turn_a1_56_4',
      turnIndex: 4,
      partnerPrompt:
        'I specialize in handmade ceramic coffee mugs and plant pots! We have an open studio session this Wednesday at 6 PM. You are very welcome to join us and bring your guitar or sketchbook!',
      partnerAudioText:
        'I specialize in handmade ceramic coffee mugs and plant pots! We have an open studio session this Wednesday at 6 PM. You are very welcome to join us and bring your guitar or sketchbook!',
      partnerQuestionHindi:
        'मैं हस्तनिर्मित सिरेमिक कॉफी मग और पौधों के गमलों में विशेषज्ञता रखती हूँ! हमारे पास इस बुधवार शाम 6 बजे एक खुला स्टूडियो सत्र है। हमारे साथ शामिल होने और अपना गिटार या स्केचबुक लाने के लिए आपका बहुत स्वागत है!',
      expectedFunction: 'Accept Invitation & Conclude Mixer Conversation',
      contextGoal:
        'Thank Chloe enthusiastically, accept the Wednesday invitation, and confirm you will bring your sketchbook.',
      targetVocabulary: ['thank you so much Chloe', 'would love to come', 'bring my sketchbook', 'see you on Wednesday', 'at six o\'clock'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you so much Chloe! I would love to come to the studio session this Wednesday at six o\'clock, and I will definitely bring my sketchbook. See you then!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I’d love to come on Wednesday at 6 PM! I’ll bring my sketchbook. See you then, Chloe!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I’d love to! I’ll bring my sketchbook on Wednesday at 6. See you!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Wednesday Confirmation',
          patterns: [
            'thank you',
            'love to come',
            'wednesday',
            'six o\'clock',
            '6 pm',
            'sketchbook',
            'see you',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_56_4',
        type: 'multiple_choice',
        prompt: 'Which sentence accepts an invitation politely?',
        options: [
          { id: 'opt_1', text: 'I would love to join on Wednesday at 6 PM! Thank you.', isCorrect: true },
          { id: 'opt_2', text: 'I am must come Wednesday bye.', isCorrect: false },
          { id: 'opt_3', text: 'No talk until six.', isCorrect: false },
        ],
        correctAnswer: 'I would love to join on Wednesday at 6 PM! Thank you.',
        explanation: 'Polite and enthusiastic acceptance.',
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
