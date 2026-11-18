import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_243: ConversationDefinition = {
  id: 'conv_a2_243',
  title: 'Books, Reading Preferences & Simple Reviews',
  cefr: 'A2',
  unitId: 'unit_a2_17',
  lessonLinks: ['lesson_a2_17_243'],
  estimatedMinutes: 5,
  scenario:
    'You are in the neighborhood library book swap club talking with librarian Elena. You discuss your reading habits, favorite genres, talk about a book written by your favorite author, give a simple review, and mediate a recommendation for another book lover.',
  communicativeGoals: [
    'Discuss literary genres, favorite authors, and daily reading habits in A2 English',
    'Use descriptive review chunks: "written by...", "it is set in...", "I found it easy to read"',
    'Express opinions and ratings on books using simple evaluative language',
    'Recommend books to friends with reasons supporting your view',
  ],
  canDoStatements: [
    'Can describe what kinds of books they like reading and why',
    'Can state who wrote a book and summarize its main theme or setting',
    'Can give a simple, clear book review with a positive recommendation',
  ],
  characters: [
    {
      id: 'char_elena_librarian',
      name: 'Elena',
      role: 'Community Librarian',
      avatar: '📚',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'genre',
        ipa: '/ˈʒɒnrə/',
        partOfSpeech: 'noun',
        meaning: 'A style or category of art, music, or literature (e.g. mystery, biography, fantasy)',
        exampleSentence: 'Historical fiction is my favorite literary genre.',
        translations: { hi: 'शैली / विधा (शॉनरा)' },
      },
      {
        word: 'written by',
        ipa: '/ˈrɪtn baɪ/',
        partOfSpeech: 'verb phrase',
        meaning: 'Authored or composed by a specific writer',
        exampleSentence: 'This short novel was written by a famous author.',
        translations: { hi: 'द्वारा लिखित (रिटन बाय)' },
      },
      {
        word: 'page-turner',
        ipa: '/ˈpeɪdʒˌtɜːnə/',
        partOfSpeech: 'noun',
        meaning: 'A book that is so exciting that you want to read it quickly',
        exampleSentence: 'The mystery novel was a real page-turner from start to finish.',
        translations: { hi: 'रोमांचक किताब (पेज-टर्नर)' },
      },
      {
        word: 'recommendation',
        ipa: '/ˌrekəmenˈdeɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'A suggestion or proposal as to the best course of action or reading choice',
        exampleSentence: 'Thank you for the wonderful book recommendation!',
        translations: { hi: 'सिफारिश / सुझाव (रेकमेंडेशन)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'It was written by...',
        functionCategory: 'Stating author attribution',
        exampleSentence: 'The book was written by an Indian author living in London.',
      },
      {
        phrase: 'It is set in...',
        functionCategory: 'Describing book setting and time period',
        exampleSentence: 'The story is set in a small coastal town in the 1950s.',
      },
      {
        phrase: 'I found it really easy to read.',
        functionCategory: 'Evaluating readability and style',
        exampleSentence: 'Even though it is long, I found it really easy to read.',
      },
      {
        phrase: 'If you enjoy mysteries, you will love...',
        functionCategory: 'Making a tailored recommendation with conditional',
        exampleSentence: 'If you enjoy travel stories, you will love this memoir.',
      },
    ],
    grammar: {
      title: 'Reviewing Books: Participle Modifiers & "Find it + Adjective"',
      conceptExplanation:
        '1. Passive author attribution: "The novel was written by George Orwell."\n2. Setting: "It is set in Japan during the spring."\n3. Evaluation structure: "I found the ending surprising" / "I found it easy to read."\n4. Conditional recommendation: "If you like historical books, you will enjoy this."',
      patternFormula: '[Title] + [was written by Author] + [is set in Place/Time] + [I found it + Adj]',
      contrastExamples: [
        {
          incorrect: 'The book wrote by Ruskin Bond is set at India.',
          correct: 'The book was written by Ruskin Bond and is set in India.',
          explanation: 'Use passive "was written by" and preposition "in" for countries.',
        },
        {
          incorrect: 'I found it easily to read.',
          correct: 'I found it easy to read.',
          explanation: '"Find + object + adjective" requires the adjective form "easy".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Elena',
        text: 'Welcome to our monthly book swap! Have you read anything inspiring lately?',
        translation: 'हमारी मासिक पुस्तक विनिमय में आपका स्वागत है! क्या आपने हाल ही में कुछ प्रेरणादायक पढ़ा है?',
      },
      {
        speaker: 'Learner',
        text: 'Yes! I recently read a memoir written by a botanist. It is set in the Himalayan foothills.',
        translation: 'हाँ! मैंने हाल ही में एक वनस्पतिशास्त्री द्वारा लिखित संस्मरण पढ़ा। यह हिमालय की तलहटी में स्थापित है।',
      },
      {
        speaker: 'Elena',
        text: 'How wonderful! Did you find it easy to read?',
        translation: 'कितना शानदार! क्या आपको इसे पढ़ना आसान लगा?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_243_1',
      type: 'fill_blank',
      prompt: 'Complete: "The novel was ______ (written / wrote / write) by a celebrated poet."',
      options: [
        { id: 'opt_1', text: 'written', isCorrect: true },
        { id: 'opt_2', text: 'wrote', isCorrect: false },
        { id: 'opt_3', text: 'write', isCorrect: false },
      ],
      correctAnswer: 'written',
      explanation: 'Passive past participle: "was written by".',
    },
    {
      id: 'cp_243_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses personal evaluation of a book?',
      options: [
        { id: 'opt_1', text: 'I found the book very interesting and easy to read.', isCorrect: true },
        { id: 'opt_2', text: 'I found it easily reading and interest.', isCorrect: false },
        { id: 'opt_3', text: 'I found the book to be read easy.', isCorrect: false },
      ],
      correctAnswer: 'I found the book very interesting and easy to read.',
      explanation: '"I found [noun] [adjective]" is the standard evaluation pattern.',
    },
    {
      id: 'cp_243_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [The story is set in / a quiet coastal village / during the winter]',
      correctAnswer: 'The story is set in a quiet coastal village during the winter',
      explanation: 'Subject + "is set in" + location phrase + time phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_243_1',
      prompt: 'Construct a sentence stating that the book was written by Jane Austen and is set in nineteenth-century England.',
      scenarioContext: 'Sharing book details with Elena.',
      targetStructure: 'The book was written by Jane Austen and is set in nineteenth-century England.',
      wordBank: ['The book was', 'written by Jane Austen', 'and is set in', 'nineteenth-century England.', 'writing by'],
      acceptableSolutions: [
        'The book was written by Jane Austen and is set in nineteenth-century England.',
        'This novel was written by Jane Austen and is set in nineteenth-century England.',
      ],
      explanation: 'Combines "was written by" with "is set in".',
    },
    {
      id: 'sc_243_2',
      prompt: 'Construct a sentence stating that if you like mysteries, you will love this exciting page-turner.',
      scenarioContext: 'Giving a book recommendation.',
      targetStructure: 'If you like mysteries, you will love this exciting page-turner.',
      wordBank: ['If you like mysteries,', 'you will love this', 'exciting page-turner.', 'recommendation', 'found easily'],
      acceptableSolutions: [
        'If you like mysteries, you will love this exciting page-turner.',
        'If you enjoy mysteries, you will love this exciting page-turner.',
      ],
      explanation: 'First conditional structure for tailoring book recommendations.',
    },
  ],
  turns: [
    {
      id: 'turn_243_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello and welcome to the community library! We are updating our reading recommendations shelf. What genre of books do you usually read, and how often do you read?',
      partnerAudioText:
        'Hello and welcome to the community library! We are updating our reading recommendations shelf. What genre of books do you usually read, and how often do you read?',
      partnerQuestionHindi:
        'नमस्ते और सामुदायिक पुस्तकालय में आपका स्वागत है! हम अपनी पुस्तक सिफारिशों की शेल्फ को अपडेट कर रहे हैं। आप आमतौर पर किस शैली की किताबें पढ़ते हैं, और आप कितनी बार पढ़ते हैं?',
      expectedFunction: 'Greeting Elena and stating reading preferences, genres, and frequency of reading',
      contextGoal: 'Greet Elena, state favorite book genres (biography, fiction, mystery, sci-fi), and describe reading routine',
      targetVocabulary: ['Hello Elena', 'genre', 'biographies', 'fiction', 'read every day', 'free time'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello Elena! I mostly read biographies and historical fiction. I try to read for thirty minutes every evening before going to sleep.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi Elena! My favorite genre is mystery novels. I read on the train while commuting to work and on Sunday afternoons.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good morning! I love reading non-fiction and science books. I read two or three books every month.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_elena',
          patterns: ['hello', 'hi', 'elena', 'good morning', 'good afternoon'],
          required: true,
        },
        {
          name: 'reading_genre_habits',
          patterns: ['biograph', 'fiction', 'mystery', 'novel', 'non-fiction', 'science', 'read', 'every day', 'evening', 'books', 'genre'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_243_1_read_frequency',
          pattern: /i read everyday book/i,
          errorType: 'structure',
          message: 'Say "I read books every day" (two words for frequency).',
          correctionPattern: 'I read historical fiction every day.',
        },
      ],
      remediationPractice: {
        id: 'rem_243_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I read for half an hour ______ (every day / everyday)."',
        options: [
          { id: 'r1', text: 'every day', isCorrect: true },
          { id: 'r2', text: 'everyday to', isCorrect: false },
        ],
        correctAnswer: 'every day',
        explanation: '"Every day" (adverbial phrase) describes frequency.',
      },
    },
    {
      id: 'turn_243_2',
      turnIndex: 2,
      partnerPrompt:
        'That is a wonderful reading habit! Tell me about the most memorable book you have read recently. Who wrote it, where is it set, and what is the story about?',
      partnerAudioText:
        'That is a wonderful reading habit! Tell me about the most memorable book you have read recently. Who wrote it, where is it set, and what is the story about?',
      partnerQuestionHindi:
        'यह पढ़ने की एक शानदार आदत है! मुझे उस सबसे यादगार किताब के बारे में बताएं जो आपने हाल ही में पढ़ी है। इसे किसने लिखा, यह कहाँ स्थापित है, और कहानी किस बारे में है?',
      expectedFunction: 'Describing a specific book with author attribution ("written by"), setting ("is set in"), and main theme',
      contextGoal: 'State author, setting, and plot theme clearly in simple A2 English',
      targetVocabulary: ['written by', 'set in', 'story is about', 'page-turner', 'author', 'main character'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'It was written by a famous travel writer and is set in a peaceful mountain village. The story is about an architect who rebuilds ancient stone houses.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'The book was written by Ruskin Bond and is set in northern India. It is a heartwarming collection of short stories about nature and friendship.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'It was written by a contemporary author and is set in London. The plot revolves around a young scientist solving an environmental mystery.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'author_attribution',
          patterns: ['written by', 'author', 'wrote', 'by'],
          required: true,
        },
        {
          name: 'setting_and_theme',
          patterns: ['set in', 'story is about', 'plot', 'village', 'nature', 'mountains', 'city', 'character'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_243_2_set_at',
          pattern: /is set at india/i,
          errorType: 'grammar',
          message: 'Use "is set in" for countries, cities, and regions.',
          correctionPattern: 'The story is set in India.',
        },
      ],
      remediationPractice: {
        id: 'rem_243_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes a book setting?',
        options: [
          { id: 'r1', text: 'The novel is set in a quiet mountain town.', isCorrect: true },
          { id: 'r2', text: 'The novel is set at mountain town.', isCorrect: false },
        ],
        correctAnswer: 'The novel is set in a quiet mountain town.',
        explanation: 'Use "set in" with places and historical eras.',
      },
    },
    {
      id: 'turn_243_3',
      turnIndex: 3,
      partnerPrompt:
        'That sounds like a true gem! If a fellow library reader is looking for something engaging to read this weekend, how would you review and recommend it to them?',
      partnerAudioText:
        'That sounds like a true gem! If a fellow library reader is looking for something engaging to read this weekend, how would you review and recommend it to them?',
      partnerQuestionHindi:
        'यह सचमुच एक अनमोल किताब लगती है! यदि कोई साथी पाठक इस सप्ताहांत कुछ आकर्षक पढ़ने की तलाश में है, तो आप उनके लिए इसकी समीक्षा और सिफारिश कैसे करेंगे?',
      expectedFunction: 'Giving a book review and making a clear recommendation using evaluation adjectives and "easy to read"',
      contextGoal: 'Provide a concise review (easy to read, page-turner) and give a clear recommendation for library visitors',
      targetVocabulary: ['highly recommend', 'easy to read', 'page-turner', 'inspiring', 'recommendation', 'enjoy reading'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I highly recommend this book! I found it very easy to read and beautifully written. It is a genuine page-turner that will inspire anyone who loves nature.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'If you want a relaxing weekend read, I strongly recommend it. The chapters are short, the language is clear, and the characters are memorable.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I give it five stars! It is engaging and easy to follow. You will definitely enjoy it from the very first page.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'review_evaluation',
          patterns: ['easy to read', 'page-turner', 'inspiring', 'engaging', 'beautifully written', 'clear', 'relaxing', 'stars'],
          required: true,
        },
        {
          name: 'recommendation_phrase',
          patterns: ['recommend', 'highly recommend', 'strongly recommend', 'suggest', 'love', 'enjoy'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_243_3_easy_to_reading',
          pattern: /easy to reading/i,
          errorType: 'grammar',
          message: 'Use base verb "easy to read" instead of "easy to reading".',
          correctionPattern: 'I found the book very easy to read.',
        },
      ],
      remediationPractice: {
        id: 'rem_243_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [I highly recommend this book / because it is / very easy to read]',
        correctAnswer: 'I highly recommend this book because it is very easy to read',
        explanation: 'Standard review recommendation formula.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 75,
  },
};
