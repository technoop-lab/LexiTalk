import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_192: ConversationDefinition = {
  id: 'conv_a2_192',
  title: 'Photography, Visual Media & Describing Scenes',
  cefr: 'A2',
  unitId: 'unit_a2_13',
  lessonLinks: ['lesson_a2_13_192'],
  estimatedMinutes: 5,
  scenario:
    'You are in a photography exhibition critique with your photo club instructor Leo. You are analyzing your portfolio photograph taken at a mountain lake, describing the foreground, background, focal subject, and using relative clauses (who, which, where).',
  communicativeGoals: [
    'Describe visual compositions using spatial prepositions (in the foreground, in the background, on the left/right, in the center)',
    'Use relative clauses with "who" (for people), "which/that" (for things), and "where" (for places)',
    'Discuss lighting, depth of field, framing, and focal points in photography',
    'Respond constructively to visual critiques and suggest composition adjustments',
  ],
  canDoStatements: [
    'Can describe a photograph or visual scene in detail using spatial position phrases',
    'Can connect visual elements using defining relative clauses (who, which, where)',
    'Can give and receive constructive feedback on visual media in English',
  ],
  characters: [
    {
      id: 'char_leo_photographer',
      name: 'Leo',
      role: 'Photography Instructor & Gallery Curator',
      avatar: '📷',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'foreground',
        ipa: '/ˈfɔːɡraʊnd/',
        partOfSpeech: 'noun',
        meaning: 'The part of a view that is nearest to the observer, especially in a picture or photograph',
        exampleSentence: 'In the foreground, there are colorful wildflowers and a wooden bench.',
        translations: { hi: 'अग्रभूमि / आगे का दृश्य' },
      },
      {
        word: 'background',
        ipa: '/ˈbækɡraʊnd/',
        partOfSpeech: 'noun',
        meaning: 'The area or scenery behind the main object of contemplation',
        exampleSentence: 'Snowy mountain peaks rise high in the background.',
        translations: { hi: 'पृष्ठभूमि / पीछे का दृश्य' },
      },
      {
        word: 'composition',
        ipa: '/ˌkɒmpəˈzɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The artistic arrangement of the visual elements of a picture or photograph',
        exampleSentence: 'The composition has excellent balance between sky and water.',
        translations: { hi: 'रचना / संयोजन' },
      },
      {
        word: 'focus',
        ipa: '/ˈfəʊkəs/',
        partOfSpeech: 'noun',
        meaning: 'The state or quality of having or producing clear visual definition',
        exampleSentence: 'The focal point is the small wooden canoe on the lake.',
        translations: { hi: 'केंद्रबिंदु / फोकस' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'In the foreground, you can see a wooden pier stretching into the water.',
        functionCategory: 'Describing foreground position',
        exampleSentence: 'In the foreground, there is a photographer holding a tripod.',
      },
      {
        phrase: 'In the background, there is a mountain ridge that is covered in mist.',
        functionCategory: 'Describing background with relative clause',
        exampleSentence: 'On the left, there is a lighthouse which shines brightly.',
      },
      {
        phrase: 'This is the lake where we took the sunrise landscape shots.',
        functionCategory: 'Relative clause with where',
        exampleSentence: 'She is the traveler who was rowing the boat.',
      },
      {
        phrase: 'The contrast and natural lighting create a peaceful mood.',
        functionCategory: 'Commenting on lighting and mood',
        exampleSentence: 'The reflection on the water gives great depth to the shot.',
      },
    ],
    grammar: {
      title: 'Describing Visuals with Spatial Phrases & Relative Clauses (who, which, where)',
      conceptExplanation:
        '1. Spatial Composition Phrases:\n   - "In the foreground..." (front)\n   - "In the background..." (back)\n   - "On the left / On the right..."\n   - "In the middle / In the center..."\n2. Defining Relative Pronouns:\n   - "who" for people: "The person who is standing by the shore..."\n   - "which / that" for objects & animals: "The boat which is floating on the lake..."\n   - "where" for locations: "The valley where the fog settled..."',
      patternFormula: '[Spatial Phrase], [Subject] + [who / which / where] + [Clause]',
      contrastExamples: [
        {
          incorrect: 'In foreground there is boat who is green.',
          correct: 'In the foreground, there is a boat which is green.',
          explanation: 'Use "In the foreground" with article "the", and "which" (not "who") for objects.',
        },
        {
          incorrect: 'On the background, you see the house where it was built.',
          correct: 'In the background, you see the house where my grandparents lived.',
          explanation: 'Use preposition "In the background" (not "On"), and correct clause after "where".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Leo',
        text: 'Let’s look at your landscape photograph. What elements did you place in the foreground and background?',
        translation: 'आइए आपकी लैंडस्केप तस्वीर देखें। आपने अग्रभूमि और पृष्ठभूमि में कौन से तत्व रखे हैं?',
      },
      {
        speaker: 'Learner',
        text: 'In the foreground, there are pine trees, and in the background, there is a glacier which reflects the sunrise.',
        translation: 'अग्रभूमि में देवदार के पेड़ हैं, और पृष्ठभूमि में एक ग्लेशियर है जो सूर्योदय को दर्शाता है।',
      },
      {
        speaker: 'Leo',
        text: 'The depth is fantastic! And who is the hiker who is walking along the trail on the right?',
        translation: 'गहराई शानदार है! और दाईं ओर पगडंडी पर चलने वाला वह पदयात्री कौन है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_192_1',
      type: 'fill_blank',
      prompt: 'Complete with the correct relative pronoun: "In the center, there is a small red boat ______ (which / who) is tied to the dock."',
      options: [
        { id: 'opt_1', text: 'which', isCorrect: true },
        { id: 'opt_2', text: 'who', isCorrect: false },
        { id: 'opt_3', text: 'where', isCorrect: false },
      ],
      correctAnswer: 'which',
      explanation: 'Use "which" or "that" to refer to inanimate objects (boat).',
    },
    {
      id: 'cp_192_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes a visual scene?',
      options: [
        { id: 'opt_1', text: 'In the background, there are rugged hills where wild horses graze.', isCorrect: true },
        { id: 'opt_2', text: 'At background, there are rugged hills which where wild horses graze.', isCorrect: false },
        { id: 'opt_3', text: 'On background, there are rugged hills who wild horses graze.', isCorrect: false },
      ],
      correctAnswer: 'In the background, there are rugged hills where wild horses graze.',
      explanation: '"In the background" + place relative adverb "where".',
    },
    {
      id: 'cp_192_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [there is / in the foreground / a wooden dock / which leads to the water]',
      correctAnswer: 'in the foreground there is a wooden dock which leads to the water',
      explanation: 'Spatial phrase + existential clause + relative clause.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_192_1',
      prompt: 'Construct a sentence describing a photographer in the foreground who is holding a camera.',
      scenarioContext: 'Explaining a photo to Leo.',
      targetStructure: 'In the foreground, there is a traveler who is holding a vintage camera.',
      wordBank: ['In the foreground,', 'there is', 'a traveler', 'who is holding', 'a vintage camera', 'by the lake'],
      acceptableSolutions: [
        'In the foreground, there is a traveler who is holding a vintage camera.',
        'In the foreground, there is a person who is holding a camera.',
      ],
      explanation: 'Use "In the foreground" + "who is holding".',
    },
    {
      id: 'sc_192_2',
      prompt: 'Construct a sentence describing mountains in the background that are covered in snow.',
      scenarioContext: 'Critiquing background scenery.',
      targetStructure: 'In the background, there are tall mountains that are covered in snow.',
      wordBank: ['In the background,', 'there are', 'tall mountains', 'that are covered', 'in snow', 'under the clouds'],
      acceptableSolutions: [
        'In the background, there are tall mountains that are covered in snow.',
        'In the background, there are mountains which are covered in snow.',
      ],
      explanation: 'Combine spatial phrase with relative clause "that are covered...".',
    },
  ],
  turns: [
    {
      id: 'turn_192_1',
      turnIndex: 1,
      partnerPrompt:
        'Welcome to our portfolio critique! Let’s display your print on the lightboard. What is the central story of this photograph, and what did you capture in the foreground?',
      partnerAudioText:
        'Welcome to our portfolio critique! Let’s display your print on the lightboard. What is the central story of this photograph, and what did you capture in the foreground?',
      partnerQuestionHindi:
        'हमारी पोर्टफोलियो समीक्षा में आपका स्वागत है! आइए अपने प्रिंट को लाइटबोर्ड पर प्रदर्शित करें। इस तस्वीर की मुख्य कहानी क्या है, और आपने अग्रभूमि में क्या कैद किया है?',
      expectedFunction: 'Describing the photograph and foreground using spatial phrases',
      contextGoal: 'Explain what is in the foreground (e.g. wooden boat, stone pier, wildflowers) and state the scene',
      targetVocabulary: ['in the foreground', 'boat', 'lake', 'pier', 'flowers', 'capture'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'In the foreground, there is an old wooden boat which is tied to a small stone pier.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'In the foreground, you can see colorful wildflowers and a wooden bench by the water.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I wanted to capture the quiet morning mood. In the foreground, there is a wooden dock which leads into the calm lake.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'foreground_phrase',
          patterns: ['in the foreground', 'foreground', 'front'],
          required: true,
        },
        {
          name: 'subject_elements',
          patterns: ['boat', 'pier', 'dock', 'flowers', 'bench', 'lake', 'water', 'which', 'that'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_192_1_prep',
          pattern: /on the foreground/i,
          errorType: 'grammar',
          message: 'The standard preposition is "in the foreground", not "on".',
          correctionPattern: 'in the foreground',
        },
      ],
      remediationPractice: {
        id: 'rem_192_1',
        type: 'fill_blank',
        prompt: 'Fill in the preposition: "______ (In) the foreground, there is a tree."',
        options: [
          { id: 'r1', text: 'In', isCorrect: true },
          { id: 'r2', text: 'On', isCorrect: false },
        ],
        correctAnswer: 'In',
        explanation: 'We say "in the foreground".',
      },
    },
    {
      id: 'turn_192_2',
      turnIndex: 2,
      partnerPrompt:
        'The boat gives great leading lines. Now look at the depth. What is happening in the background, and on the left and right sides of the frame?',
      partnerAudioText:
        'The boat gives great leading lines. Now look at the depth. What is happening in the background, and on the left and right sides of the frame?',
      partnerQuestionHindi:
        'नाव बेहतरीन लीडिंग लाइन्स देती है। अब गहराई को देखिए। पृष्ठभूमि में, और फ्रेम के बाएं और दाएं किनारों पर क्या हो रहा है?',
      expectedFunction: 'Describing background and sides using relative clauses with "which" or "where"',
      contextGoal: 'Describe background mountains, mist, or forests using spatial terms (in the background, on the left/right)',
      targetVocabulary: ['in the background', 'on the left', 'on the right', 'mountains', 'which', 'mist'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'In the background, there are high mountain peaks which are covered with light morning fog.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'On the left, there is a dense pine forest, and in the background, the sunrise lights up the hills.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'In the background, you can see the distant village where fishermen live, framed by snowy peaks on the right.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'spatial_markers',
          patterns: ['in the background', 'on the left', 'on the right', 'background'],
          required: true,
        },
        {
          name: 'scenery_details',
          patterns: ['mountains', 'hills', 'forest', 'trees', 'mist', 'fog', 'sunrise', 'peaks', 'village', 'which', 'where'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_192_2_relative_pronoun',
          pattern: /mountain who is/i,
          errorType: 'grammar',
          message: 'Use "which" or "that" for objects/places: "mountains which are...".',
          correctionPattern: 'mountains which are...',
        },
      ],
      remediationPractice: {
        id: 'rem_192_2',
        type: 'multiple_choice',
        prompt: 'Which relative pronoun refers to mountains?',
        options: [
          { id: 'r1', text: 'which / that', isCorrect: true },
          { id: 'r2', text: 'who', isCorrect: false },
        ],
        correctAnswer: 'which / that',
        explanation: 'We use which/that for inanimate things.',
      },
    },
    {
      id: 'turn_192_3',
      turnIndex: 3,
      partnerPrompt:
        'I also noticed a small figure sitting on the wooden dock. Who is that person who is sitting by the edge, and what effect does their presence have on the photo?',
      partnerAudioText:
        'I also noticed a small figure sitting on the wooden dock. Who is that person who is sitting by the edge, and what effect does their presence have on the photo?',
      partnerQuestionHindi:
        'मैंने लकड़ी के डॉक पर एक छोटी सी आकृति भी देखी। किनारे पर बैठा वह व्यक्ति कौन है, और उनकी उपस्थिति का तस्वीर पर क्या प्रभाव पड़ता है?',
      expectedFunction: 'Explaining a human subject using "who" and expressing emotional effect',
      contextGoal: 'Explain that the person who is sitting is a traveler/friend and adds a sense of scale and peace',
      targetVocabulary: ['who', 'traveler', 'friend', 'scale', 'peaceful', 'mood'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'That is my friend who was watching the sunrise. It adds a peaceful human element to the scene.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'It is a hiker who stopped to rest. Their presence shows the grand scale of the mountains.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'That is a lone traveler who was meditating. Having someone sitting there creates a quiet, reflective mood.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'person_relative',
          patterns: ['friend', 'traveler', 'hiker', 'person', 'who'],
          required: true,
        },
        {
          name: 'photo_impact',
          patterns: ['peaceful', 'scale', 'quiet', 'mood', 'calm', 'human', 'reflective', 'scene'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_192_3_who_which',
          pattern: /friend which was/i,
          errorType: 'grammar',
          message: 'Use "who" to refer to people: "my friend who was...".',
          correctionPattern: 'my friend who was...',
        },
      ],
      remediationPractice: {
        id: 'rem_192_3',
        type: 'fill_blank',
        prompt: 'Fill in: "The person ______ (who) took the photo is an artist."',
        options: [
          { id: 'r1', text: 'who', isCorrect: true },
          { id: 'r2', text: 'which', isCorrect: false },
        ],
        correctAnswer: 'who',
        explanation: 'Use "who" for people.',
      },
    },
    {
      id: 'turn_192_4',
      turnIndex: 4,
      partnerPrompt:
        'The combination of the dock in the foreground and the mist in the background gives this photograph wonderful atmosphere. I would gladly include this in our student exhibition next month! How do you feel about displaying it?',
      partnerAudioText:
        'The combination of the dock in the foreground and the mist in the background gives this photograph wonderful atmosphere. I would gladly include this in our student exhibition next month! How do you feel about displaying it?',
      partnerQuestionHindi:
        'अग्रभूमि में डॉक और पृष्ठभूमि में धुंध का संयोजन इस तस्वीर को एक अद्भुत माहौल देता है। मुझे अगले महीने हमारे छात्र प्रदर्शनी में इसे शामिल करने में खुशी होगी! इसे प्रदर्शित करने के बारे में आप कैसा महसूस करते हैं?',
      expectedFunction: 'Expressing gratitude for positive critique and accepting exhibition invitation',
      contextGoal: 'Thank Leo for the feedback and express excitement about displaying the photo',
      targetVocabulary: ['honored', 'thank you', 'exhibition', 'excited', 'feedback'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I would be honored! Thank you so much for the helpful feedback and advice, Leo.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I am so excited! Thank you for selecting my photo for the exhibition. I really appreciate it.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'That would be fantastic! Thank you for the encouraging critique, Leo. I will prepare a large fine-art print for next month.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'gratitude',
          patterns: ['thank you', 'thanks', 'appreciate', 'grateful'],
          required: true,
        },
        {
          name: 'exhibition_enthusiasm',
          patterns: ['honored', 'excited', 'exhibition', 'display', 'print', 'feedback', 'critique', 'leo'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_192_4_short',
          pattern: /^(ok|yes thanks)$/i,
          errorType: 'interaction',
          message: 'Provide a polite, appreciative closing acknowledging the exhibition opportunity.',
          correctionPattern: 'I would be honored! Thank you for the feedback, Leo.',
        },
      ],
      remediationPractice: {
        id: 'rem_192_4',
        type: 'multiple_choice',
        prompt: 'Which sentence closes a professional art critique warmly?',
        options: [
          { id: 'r1', text: 'I would be thrilled to have it displayed! Thank you for the great feedback.', isCorrect: true },
          { id: 'r2', text: 'Put photo on wall.', isCorrect: false },
        ],
        correctAnswer: 'I would be thrilled to have it displayed! Thank you for the great feedback.',
        explanation: 'Polite and enthusiastic response.',
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
