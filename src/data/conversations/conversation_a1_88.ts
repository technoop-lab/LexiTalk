import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_88: ConversationDefinition = {
  id: 'conv_a1_88',
  title: 'Extended Social Gatherings, Networking & Conversational Storytelling',
  cefr: 'A1',
  unitId: 'unit_a1_6',
  lessonLinks: ['lesson_a1_6_88'],
  estimatedMinutes: 5,
  scenario:
    'You attend the London Creative & Tech Networking Gala at Somerset House. You strike up an engaging conversation with Creative Director Oliver Thorne to introduce your professional background, share a brief personal anecdote about moving to the UK and learning English, discuss leisure passions, and exchange digital contact details.',
  communicativeGoals: [
    'Introduce yourself confidently in professional and social settings with background details and current pursuits',
    'Tell a concise narrative anecdote using past time markers ("When I first arrived...", "Last year, I decided to...")',
    'Discuss hobbies, cultural interests, and weekend routines to build rapport',
    'Exchange LinkedIn or digital contact information and propose future coffee catch-ups',
  ],
  canDoStatements: [
    'Can introduce oneself and discuss professional background and personal interests at a networking event',
    'Can tell a brief personal story or travel anecdote in simple past narrative tense',
    'Can exchange contact details and suggest future professional follow-up meetings',
  ],
  characters: [
    {
      id: 'char_oliver_thorne',
      name: 'Oliver Thorne',
      role: 'Creative Director at Studio Thorne',
      avatar: '🎨',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'anecdote',
        ipa: '/ˈænɪkdoʊt/',
        partOfSpeech: 'noun',
        meaning: 'A short amusing or interesting story about a real incident or person',
        exampleSentence: 'Let me share a quick anecdote about my first week in London.',
        translations: { hi: 'किस्सा / संक्षिप्त कहानी' },
      },
      {
        word: 'transition',
        ipa: '/trænˈzɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'The process or a period of changing from one state or condition to another',
        exampleSentence: 'My career transition into software design was very exciting.',
        translations: { hi: 'परिवर्तन / बदलाव' },
      },
      {
        word: 'network',
        ipa: '/ˈnɛtwɜːrk/',
        partOfSpeech: 'verb',
        meaning: 'Interact with others to exchange information and develop professional contacts',
        exampleSentence: 'Networking events are fantastic for meeting inspiring collaborators.',
        translations: { hi: 'संपर्क बनाना / नेटवर्किंग करना' },
      },
      {
        word: 'perspective',
        ipa: '/pərˈspɛktɪv/',
        partOfSpeech: 'noun',
        meaning: 'A particular attitude toward or way of regarding something; a point of view',
        exampleSentence: 'Living abroad gives you an enriching cultural perspective.',
        translations: { hi: 'दृष्टिकोण / नजरिया' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'It is a pleasure to connect with you.',
        functionCategory: 'Professional Greeting',
        exampleSentence: 'It is a pleasure to connect with you this evening, Oliver.',
      },
      {
        phrase: 'When I first moved to London, I realized that...',
        functionCategory: 'Storytelling Narrative',
        exampleSentence: 'When I first moved to London, I realized that everyone loves discussing the weather!',
      },
      {
        phrase: 'In my free time, I am passionate about...',
        functionCategory: 'Sharing Hobbies',
        exampleSentence: 'In my free time, I am passionate about landscape photography and cycling.',
      },
      {
        phrase: 'Let us connect on LinkedIn and grab a coffee sometime.',
        functionCategory: 'Future Follow-Up',
        exampleSentence: 'Let us connect on LinkedIn and grab a coffee next week.',
      },
    ],
    grammar: {
      title: 'Conversational Storytelling: Past Simple Sequencing with "When", "Then", & "In the end"',
      conceptExplanation:
        'Structure personal stories using past narrative markers: "When I arrived [Past Simple], I noticed [Past Simple]. Then, I decided to [Past Simple]. In the end, it was a wonderful experience."',
      patternFormula: 'When I [Past Verb], I [Past Verb] + Then + [Past Verb] + In the end...',
      contrastExamples: [
        {
          incorrect: 'When I come here last year I am not know anyone.',
          correct: 'When I arrived in the UK last year, I did not know anyone, but people were very welcoming.',
          explanation: 'Use consistent Past Simple forms for past narrative storytelling.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Oliver Thorne',
        text: 'Good evening! Fantastic turnout tonight. I am Oliver Thorne from Studio Thorne. What brings you to the creative gala?',
        translation: 'शुभ संध्या! आज रात शानदार भीड़ है। मैं स्टूडियो थोर्न से ओलिवर थोर्न हूँ। आप इस क्रिएटिव गाला में किसलिए आए हैं?',
      },
      {
        speaker: 'You',
        text: 'Good evening Oliver! It is a pleasure to meet you. I work as a digital product designer, and I moved to the UK last year to explore new creative collaborations.',
        translation: 'शुभ संध्या ओलिवर! आपसे मिलकर खुशी हुई। मैं एक डिजिटल उत्पाद डिजाइनर के रूप में काम करता हूँ, और नए रचनात्मक सहयोग तलाशने के लिए पिछले साल यूके आया था।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_88_1',
      type: 'fill_blank',
      prompt: 'Complete the past narrative: "When I first ___ in London, I was amazed by the architecture."',
      options: [
        { id: 'opt_1', text: 'arrived', isCorrect: true },
        { id: 'opt_2', text: 'arriving', isCorrect: false },
        { id: 'opt_3', text: 'arrive', isCorrect: false },
      ],
      correctAnswer: 'arrived',
      explanation: 'Past simple: "arrived".',
    },
    {
      id: 'cp_a1_88_2',
      type: 'multiple_choice',
      prompt: 'Which phrase proposes an informal professional catch-up smoothly?',
      options: [
        { id: 'opt_1', text: 'Let us connect on LinkedIn and grab a coffee next week to continue our discussion.', isCorrect: true },
        { id: 'opt_2', text: 'Give me your job card now.', isCorrect: false },
        { id: 'opt_3', text: 'You drink coffee with me tomorrow or not?', isCorrect: false },
      ],
      correctAnswer: 'Let us connect on LinkedIn and grab a coffee next week to continue our discussion.',
      explanation: 'Polite, professional, and friendly networking formula.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_88_1',
      scenarioContext: 'Share a leisure hobby during a networking mixer.',
      prompt: 'Build: "In my free time I love photography."',
      targetStructure: 'In my free time I love photography',
      wordBank: ['In', 'my', 'free', 'time', 'I', 'love', 'photography', 'loving', 'am', 'a'],
      acceptableSolutions: [
        'In my free time I love photography',
        'In my free time I love photography.',
      ],
      explanation: 'Prepositional phrase opening for leisure passions.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_88_1',
      turnIndex: 1,
      partnerPrompt:
        'Good evening! Wonderful atmosphere here at Somerset House. I am Oliver Thorne, Creative Director at Studio Thorne. What is your background, and what brings you to the networking mixer tonight?',
      partnerAudioText:
        'Good evening! Wonderful atmosphere here at Somerset House. I am Oliver Thorne, Creative Director at Studio Thorne. What is your background, and what brings you to the networking mixer tonight?',
      partnerQuestionHindi:
        'शुभ संध्या! सोमरसेट हाउस में यहाँ अद्भुत माहौल है। मैं स्टूडियो थोर्न में क्रिएटिव डायरेक्टर ओलिवर थोर्न हूँ। आपकी पृष्ठभूमि क्या है, और आज रात आप नेटवर्किंग मिक्सर में किसलिए आए हैं?',
      expectedFunction: 'Introduce Background, Career Focus & Purpose (Integrated Performance)',
      contextGoal:
        'Introduce yourself warmly, explain that you work in digital design/technology, relocated to the UK last year, and are here to connect with inspiring creative leaders.',
      targetVocabulary: ['pleasure to connect with you Oliver', 'work in digital design and tech', 'relocated to the UK last year', 'connect with inspiring creators'],
      suggestedResponses: [
        {
          label: 'Integrated Performance',
          text: 'Good evening Oliver, it is a pleasure to meet you! My name is Alex. I work in digital interface design, and I moved to the UK last year. I came tonight to connect with innovative creative leaders and learn about ongoing design projects in London.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Introduction & Background',
          patterns: [
            'alex',
            'design',
            'digital',
            'moved',
            'relocated',
            'uk',
            'connect',
            'pleasure',
            'oliver',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_88_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "It is a pleasure to ___ you, Oliver."',
        options: [
          { id: 'opt_1', text: 'meet', isCorrect: true },
          { id: 'opt_2', text: 'meeting', isCorrect: false },
          { id: 'opt_3', text: 'met', isCorrect: false },
        ],
        correctAnswer: 'meet',
        explanation: 'Infinitive after "pleasure to": "meet".',
      },
    },
    {
      id: 'turn_a1_88_2',
      turnIndex: 2,
      partnerPrompt:
        'Welcome to London! Relocating to a new country is a huge step. Do you have a favorite memorable moment or funny story from your first few months settling into British life?',
      partnerAudioText:
        'Welcome to London! Relocating to a new country is a huge step. Do you have a favorite memorable moment or funny story from your first few months settling into British life?',
      partnerQuestionHindi:
        'लंदन में आपका स्वागत है! एक नए देश में जाना एक बहुत बड़ा कदम है। क्या ब्रिटिश जीवन में बसने के आपके पहले कुछ महीनों का कोई पसंदीदा यादगार क्षण या मजेदार कहानी है?',
      expectedFunction: 'Tell a Brief Personal Narrative Story (Past Simple Sequencing)',
      contextGoal:
        'Tell a short story about getting lost on the London Underground during week one, asking a friendly commuter for directions, and ending up having tea and making a lifelong friend.',
      targetVocabulary: ['when I first arrived in London', 'got completely lost on the tube', 'asked a kind commuter for directions', 'ended up having tea together'],
      suggestedResponses: [
        {
          label: 'Integrated Performance',
          text: 'During my very first week, I got completely lost on the London Underground switching between the Piccadilly and Central lines! I asked a friendly commuter for directions; he not only guided me to the platform but also invited me for a cup of English breakfast tea. It showed me how warm Londoners truly are.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Storytelling Anecdote',
          patterns: [
            'first week',
            'underground',
            'tube',
            'lost',
            'commuter',
            'directions',
            'tea',
            'warm',
            'friendly',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_88_2',
        type: 'multiple_choice',
        prompt: 'Which past tense form narrates a sequence accurately?',
        options: [
          { id: 'opt_1', text: 'I lost my way on the train, so I asked a passerby who helped me find the station.', isCorrect: true },
          { id: 'opt_2', text: 'I am lose my way and asking guy on train.', isCorrect: false },
          { id: 'opt_3', text: 'I will lose my way tomorrow.', isCorrect: false },
        ],
        correctAnswer: 'I lost my way on the train, so I asked a passerby who helped me find the station.',
        explanation: 'Accurate past simple storytelling verbs.',
      },
    },
    {
      id: 'turn_a1_88_3',
      turnIndex: 3,
      partnerPrompt:
        'That is such a heartwarming story—the Tube can certainly be a labyrinth! Outside of digital design, how do you spend your free time on weekends?',
      partnerAudioText:
        'That is such a heartwarming story—the Tube can certainly be a labyrinth! Outside of digital design, how do you spend your free time on weekends?',
      partnerQuestionHindi:
        'यह बहुत ही दिल को छू लेने वाली कहानी है—ट्यूब निश्चित रूप से एक भूलभुलैया हो सकती है! डिजिटल डिज़ाइन के अलावा, आप सप्ताहांत में अपना खाली समय कैसे बिताते हैं?',
      expectedFunction: 'Describe Weekend Hobbies, Cultural Passions & Leisure Routines',
      contextGoal:
        'Describe your love for exploring modern art galleries (like Tate Modern), visiting local farmers’ markets, and cycling along the Thames river.',
      targetVocabulary: ['in my free time on weekends', 'explore art galleries like Tate Modern', 'browse local weekend farmers markets', 'cycle along the River Thames'],
      suggestedResponses: [
        {
          label: 'Integrated Performance',
          text: 'On weekends, I love visiting modern art exhibitions at Tate Modern, browsing artisanal sourdough at Borough Market, and cycling along the River Thames. I find that visual art and outdoor cycling spark immense creative inspiration for my design work.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Hobbies & Weekend Routine',
          patterns: [
            'weekends',
            'tate modern',
            'galleries',
            'borough market',
            'cycling',
            'thames',
            'inspiration',
            'art',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_88_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "On weekends, I love ___ art galleries."',
        options: [
          { id: 'opt_1', text: 'visiting', isCorrect: true },
          { id: 'opt_2', text: 'visited', isCorrect: false },
          { id: 'opt_3', text: 'visitation', isCorrect: false },
        ],
        correctAnswer: 'visiting',
        explanation: 'Gerund after "love": "love visiting".',
      },
    },
    {
      id: 'turn_a1_88_4',
      turnIndex: 4,
      partnerPrompt:
        'We share very similar passions—I cycle to Borough Market nearly every Saturday! I would love to see your portfolio and discuss potential design collaborations. How can we stay in touch?',
      partnerAudioText:
        'We share very similar passions—I cycle to Borough Market nearly every Saturday! I would love to see your portfolio and discuss potential design collaborations. How can we stay in touch?',
      partnerQuestionHindi:
        'हम बहुत समान शौक साझा करते हैं—मैं लगभग हर शनिवार को बोरो मार्केट में साइकिल से जाता हूँ! मुझे आपका पोर्टफोलियो देखना और संभावित डिज़ाइन सहयोग पर चर्चा करना अच्छा लगेगा। हम संपर्क में कैसे रह सकते हैं?',
      expectedFunction: 'Exchange LinkedIn QR / Digital Contacts & Propose Coffee Catch-Up',
      contextGoal:
        'Exchange LinkedIn QR code/email (alex.designer@email.com), suggest a coffee meeting next Thursday near Covent Garden, and express appreciation.',
      targetVocabulary: ['connect via LinkedIn QR code', 'grab coffee near Covent Garden', 'next Thursday afternoon', 'delighted to collaborate'],
      suggestedResponses: [
        {
          label: 'Integrated Performance',
          text: 'That would be fantastic Oliver! Here is my LinkedIn QR code on my phone, and my email is alex.designer@email.com. Let us grab a coffee next Thursday afternoon near Covent Garden to chat about collaborations. Thank you for a wonderful conversation!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Contact Exchange & Coffee Proposal',
          patterns: [
            'linkedin',
            'qr code',
            'email',
            'coffee',
            'thursday',
            'covent garden',
            'collaborate',
            'thank you',
            'oliver',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_88_4',
        type: 'multiple_choice',
        prompt: 'Which closing phrase arranges a networking follow-up with polish?',
        options: [
          { id: 'opt_1', text: 'Let us connect on LinkedIn and meet for coffee next Thursday. It was wonderful speaking with you Oliver!', isCorrect: true },
          { id: 'opt_2', text: 'Take my phone number bye.', isCorrect: false },
          { id: 'opt_3', text: 'No talk now.', isCorrect: false },
        ],
        correctAnswer: 'Let us connect on LinkedIn and meet for coffee next Thursday. It was wonderful speaking with you Oliver!',
        explanation: 'Polished, professional, and friendly networking closing.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 70,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 60,
  },
};
