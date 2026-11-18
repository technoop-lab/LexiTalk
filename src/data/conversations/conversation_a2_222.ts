import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_222: ConversationDefinition = {
  id: 'conv_a2_222',
  title: 'Giving Recommendations About Courses, Books & Resources',
  cefr: 'A2',
  unitId: 'unit_a2_15',
  lessonLinks: ['lesson_a2_15_222'],
  estimatedMinutes: 5,
  scenario:
    'You are in the campus academic bookstore and library resource centre with new exchange student Julian. He asks for your recommendations on the best grammar reference books, vocabulary apps, and podcast resources for English learners. You evaluate materials, use recommendation structures ("I recommend reading...", "It is well worth buying...", "You ought to try..."), and explain why certain tools are indispensable.',
  communicativeGoals: [
    'Give strong recommendations using "recommend / suggest + verb-ing" and "recommend that + clause"',
    'Use "it is well worth + verb-ing" to emphasize valuable learning materials',
    'Advise peers using modal expressions ("you ought to check out...", "you should definitely get...")',
    'Evaluate study materials explaining why they are indispensable or user-friendly',
  ],
  canDoStatements: [
    'Can recommend books, apps, and educational resources to a classmate',
    'Can use recommendation patterns (recommend + -ing, worth + -ing, ought to)',
    'Can justify why specific materials are helpful for language learning',
  ],
  characters: [
    {
      id: 'char_julian_exchange',
      name: 'Julian',
      role: 'Exchange Student & Friend',
      avatar: '📖',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'recommendation',
        ipa: '/ˌrekəmenˈdeɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'A suggestion or proposal as to the best course of action or choice of item',
        exampleSentence: 'Thanks to your recommendation, I found an amazing grammar guide.',
        translations: { hi: 'सिफारिश / सुझाव (रेकमेंडेशन)' },
      },
      {
        word: 'indispensable',
        ipa: '/ˌɪndɪˈspensəbl/',
        partOfSpeech: 'adjective',
        meaning: 'Absolutely necessary; impossible to be without',
        exampleSentence: 'A reliable learner’s dictionary is indispensable for daily revision.',
        translations: { hi: 'अत्यंत आवश्यक / अनिवार्य (इंडिस्पेंसेबल)' },
      },
      {
        word: 'comprehensive',
        ipa: '/ˌkɒmprɪˈhensɪv/',
        partOfSpeech: 'adjective',
        meaning: 'Including or dealing with all or nearly all elements or aspects of something',
        exampleSentence: 'This textbook provides a comprehensive overview of practical grammar.',
        translations: { hi: 'व्यापक / विस्तृत (कॉम्प्रिहेंसिव)' },
      },
      {
        word: 'resource',
        ipa: '/rɪˈsɔːs/',
        partOfSpeech: 'noun',
        meaning: 'A stock or supply of money, materials, staff, or other assets that can be drawn on',
        exampleSentence: 'The library has fantastic online audio resources.',
        translations: { hi: 'संसाधन (रिसोर्स)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I strongly recommend getting English Grammar in Use by Raymond Murphy.',
        functionCategory: 'Recommending a specific book with recommend + -ing',
        exampleSentence: 'I recommend downloading a spaced repetition app.',
      },
      {
        phrase: 'It is well worth buying the student edition because it includes online audio.',
        functionCategory: 'Recommending with well worth + -ing',
        exampleSentence: 'It is well worth listening to short daily news podcasts.',
      },
      {
        phrase: 'You ought to subscribe to the British Council learning podcast.',
        functionCategory: 'Giving advice with ought to',
        exampleSentence: 'You ought to practice shadowing every evening.',
      },
      {
        phrase: 'This dictionary app is indispensable for looking up collocations.',
        functionCategory: 'Describing an essential tool',
        exampleSentence: 'Flashcards are indispensable for exam revision.',
      },
    ],
    grammar: {
      title: 'Recommendation Structures: Recommend + Gerund, Ought to & Worth + -ing',
      conceptExplanation:
        '1. "Recommend / Suggest + Verb-ing":\n   - "I recommend BUYING this book." (NOT "I recommend you to buy")\n   - "I suggest LISTENING to English radio."\n2. "It is (well) worth + Verb-ing":\n   - "It is well worth VISITING the language lab."\n   - "This guide is worth READING."\n3. "Ought to + Base Verb" (advisory modal = should):\n   - "You ought to practice speaking every day."',
      patternFormula: 'I recommend [Verb-ing] + because [Reason]. It is well worth [Verb-ing] | You ought to [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'I recommend you to buy this dictionary.',
          correct: 'I recommend buying this dictionary. / I recommend that you buy this dictionary.',
          explanation: '"Recommend" is followed by a gerund (-ing) or a "that" clause, NOT "to-infinitive".',
        },
        {
          incorrect: 'This book is worth to read.',
          correct: 'This book is well worth reading.',
          explanation: '"Worth" is followed by a gerund (-ing).',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Julian',
        text: 'I want to improve my grammar this semester. Which reference book would you recommend?',
        translation: 'मैं इस सेमेस्टर में अपना व्याकरण सुधारना चाहता हूँ। आप किस संदर्भ पुस्तक की सिफारिश करेंगे?',
      },
      {
        speaker: 'Learner',
        text: 'I strongly recommend getting English Grammar in Use. It is indispensable for A2 learners and well worth reading.',
        translation: 'मैं दृढ़ता से इंग्लिश ग्रामर इन यूज़ लेने की सलाह देता हूँ। यह A2 शिक्षार्थियों के लिए अत्यंत आवश्यक है और पढ़ने लायक है।',
      },
      {
        speaker: 'Julian',
        text: 'That sounds great! Does it include exercise answers in the back?',
        translation: 'यह बहुत अच्छा लगता है! क्या इसमें पीछे अभ्यास उत्तर शामिल हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_222_1',
      type: 'fill_blank',
      prompt: 'Complete with the correct form: "I recommend ______ (downloading / to download / download) this dictionary app."',
      options: [
        { id: 'opt_1', text: 'downloading', isCorrect: true },
        { id: 'opt_2', text: 'to download', isCorrect: false },
        { id: 'opt_3', text: 'download', isCorrect: false },
      ],
      correctAnswer: 'downloading',
      explanation: 'Use the gerund "downloading" directly after the verb "recommend".',
    },
    {
      id: 'cp_222_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "worth"?',
      options: [
        { id: 'opt_1', text: 'This podcast is well worth listening to every morning.', isCorrect: true },
        { id: 'opt_2', text: 'This podcast is well worth to listen every morning.', isCorrect: false },
        { id: 'opt_3', text: 'This podcast is worth listen.', isCorrect: false },
      ],
      correctAnswer: 'This podcast is well worth listening to every morning.',
      explanation: '"worth + verb-ing" is the accurate structure.',
    },
    {
      id: 'cp_222_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [you ought to / install / a reliable dictionary / on your smartphone]',
      correctAnswer: 'you ought to install a reliable dictionary on your smartphone',
      explanation: 'Subject + ought to + base verb + object + location.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_222_1',
      prompt: 'Construct a sentence recommending that Julian buy the blue grammar book because it is indispensable.',
      scenarioContext: 'Recommending study material in the bookstore.',
      targetStructure: 'I recommend buying this blue grammar book because it is indispensable for self-study.',
      wordBank: ['I recommend buying', 'this blue grammar book', 'because it is indispensable', 'for self-study,', 'Julian.'],
      acceptableSolutions: [
        'I recommend buying this blue grammar book because it is indispensable for self-study.',
        'I recommend buying this grammar book because it is indispensable.',
      ],
      explanation: 'Recommendation formula: I recommend buying [Item] because [Reason].',
    },
    {
      id: 'sc_222_2',
      prompt: 'Construct a sentence stating that listening to the 6-Minute English podcast is well worth trying.',
      scenarioContext: 'Recommending a podcast resource.',
      targetStructure: 'Listening to the 6-Minute English podcast is well worth trying every day.',
      wordBank: ['Listening to the', '6-Minute English podcast', 'is well worth trying', 'every day,', 'Julian.'],
      acceptableSolutions: [
        'Listening to the 6-Minute English podcast is well worth trying every day.',
        'The 6-Minute English podcast is well worth listening to.',
      ],
      explanation: 'Expression with "well worth + -ing".',
    },
  ],
  turns: [
    {
      id: 'turn_222_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi! Thanks for showing me around the campus bookstore. Since I am an exchange student, I want to invest in the best study materials. Which English grammar book would you recommend for clear explanations and self-practice?',
      partnerAudioText:
        'Hi! Thanks for showing me around the campus bookstore. Since I am an exchange student, I want to invest in the best study materials. Which English grammar book would you recommend for clear explanations and self-practice?',
      partnerQuestionHindi:
        'नमस्ते! मुझे परिसर के बुकस्टोर को दिखाने के लिए धन्यवाद। चूंकि मैं एक एक्सचेंज छात्र हूँ, मैं सर्वोत्तम अध्ययन सामग्री में निवेश करना चाहता हूँ। स्पष्ट व्याख्या और आत्म-अभ्यास के लिए आप किस अंग्रेजी व्याकरण पुस्तक की सिफारिश करेंगे?',
      expectedFunction: 'Recommending a specific grammar book using "recommend + -ing" or "recommend that" with justification',
      contextGoal: 'Recommend English Grammar in Use (blue book) and explain why it is indispensable (clear rules on left, exercises on right)',
      targetVocabulary: ['recommend buying', 'English Grammar in Use', 'indispensable', 'exercises', 'clear explanations', 'Julian', 'hello'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hi Julian! I strongly recommend buying "English Grammar in Use". It is indispensable because it has clear rules on the left and practical exercises on the right.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Julian. I recommend getting the blue Raymond Murphy grammar book. It’s well worth the price for self-study and has answer keys in the back.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Hi Julian! "English Grammar in Use" is by far the most comprehensive guide for A2 learners. The two-page layout makes practicing specific grammar points effortless.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_julian',
          patterns: ['hi', 'hello', 'julian', 'good morning'],
          required: true,
        },
        {
          name: 'book_recommendation',
          patterns: ['recommend', 'english grammar in use', 'raymond murphy', 'blue book', 'grammar book'],
          required: true,
        },
        {
          name: 'justification',
          patterns: ['indispensable', 'exercises', 'explanations', 'self-study', 'rules', 'layout', 'worth'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_222_1_recommend_to',
          pattern: /recommend you to buy/i,
          errorType: 'grammar',
          message: 'Say "I recommend buying" or "I recommend that you buy".',
          correctionPattern: 'I recommend buying English Grammar in Use.',
        },
      ],
      remediationPractice: {
        id: 'rem_222_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I recommend ______ (buying) this book."',
        options: [
          { id: 'r1', text: 'buying', isCorrect: true },
          { id: 'r2', text: 'to buy', isCorrect: false },
        ],
        correctAnswer: 'buying',
        explanation: 'Gerund after "recommend".',
      },
    },
    {
      id: 'turn_222_2',
      turnIndex: 2,
      partnerPrompt:
        'I see the blue book right here on the shelf! I will definitely buy it. What about digital resources? Do you know any good apps or websites for expanding vocabulary and looking up pronunciations?',
      partnerAudioText:
        'I see the blue book right here on the shelf! I will definitely buy it. What about digital resources? Do you know any good apps or websites for expanding vocabulary and looking up pronunciations?',
      partnerQuestionHindi:
        'मैं नीली किताब यहीं शेल्फ़ पर देख रहा हूँ! मैं इसे निश्चित रूप से खरीदूंगा। डिजिटल संसाधनों के बारे में क्या? क्या आप शब्दावली बढ़ाने और उच्चारण खोजने के लिए कोई अच्छा ऐप या वेबसाइट जानते हैं?',
      expectedFunction: 'Recommending a digital dictionary/app using "ought to" or "it is well worth + -ing"',
      contextGoal: 'Recommend Oxford Learner’s Dictionary or Anki flashcards and explain why it is indispensable for audio pronunciations',
      targetVocabulary: ['ought to', 'well worth downloading', 'Oxford Learner’s Dictionary', 'Anki', 'audio pronunciation', 'indispensable'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'You ought to download the Oxford Learner’s Dictionary app. It is indispensable for checking British and American audio pronunciations.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'It is well worth installing Anki and Cambridge Dictionary on your phone. You get instant phonetic audio and example sentences.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'You ought to check out the Oxford Collocations app and Anki flashcards. Combining them provides the most effective digital vocabulary setup.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'advice_formula',
          patterns: ['ought to', 'well worth', 'recommend', 'suggest', 'should'],
          required: true,
        },
        {
          name: 'digital_resource_name',
          patterns: ['oxford', 'cambridge', 'dictionary', 'anki', 'app', 'audio pronunciation', 'phonetic'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_222_2_worth_to',
          pattern: /worth to download/i,
          errorType: 'grammar',
          message: 'Say "well worth downloading", using a gerund.',
          correctionPattern: 'It is well worth downloading the dictionary app.',
        },
      ],
      remediationPractice: {
        id: 'rem_222_2',
        type: 'multiple_choice',
        prompt: 'Which sentence recommends a digital tool correctly?',
        options: [
          { id: 'r1', text: 'You ought to download the Oxford Dictionary app for audio pronunciations.', isCorrect: true },
          { id: 'r2', text: 'You ought download dictionary to audio.', isCorrect: false },
        ],
        correctAnswer: 'You ought to download the Oxford Dictionary app for audio pronunciations.',
        explanation: '"ought to + base verb" gives clear advice.',
      },
    },
    {
      id: 'turn_222_3',
      turnIndex: 3,
      partnerPrompt:
        'Downloading the Oxford app right now! Finally, what about listening practice during my commute? Are there any student-friendly podcasts you would recommend?',
      partnerAudioText:
        'Downloading the Oxford app right now! Finally, what about listening practice during my commute? Are there any student-friendly podcasts you would recommend?',
      partnerQuestionHindi:
        'अभी ऑक्सफ़ोर्ड ऐप डाउनलोड कर रहा हूँ! अंत में, मेरे आने-जाने के दौरान सुनने के अभ्यास के बारे में क्या? क्या कोई छात्र-अनुकूल पॉडकास्ट है जिसकी आप सिफारिश करेंगे?',
      expectedFunction: 'Recommending a podcast using "suggest listening to" or "well worth checking out" and asking Julian about his daily commute',
      contextGoal: 'Recommend BBC 6 Minute English or British Council podcast, explain it has transcripts, and ask how long Julian’s commute is',
      targetVocabulary: ['suggest listening to', '6 Minute English', 'transcripts', 'well worth', 'commute', 'How long is', 'Julian'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I suggest listening to "BBC 6 Minute English". It is well worth trying because it includes full transcripts. How long is your daily commute, Julian?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'You ought to listen to the British Council LearnEnglish podcast. Each episode is short and comes with vocabulary quizzes. How do you travel to campus, Julian?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I recommend subscribing to "6 Minute English". It covers fascinating topics at an accessible pace with transcripts. How much time do you spend commuting each day, Julian?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'podcast_recommendation',
          patterns: ['suggest listening', 'recommend', 'ought to listen', '6 minute english', 'british council', 'podcast'],
          required: true,
        },
        {
          name: 'commute_inquiry',
          patterns: ['commute', 'how long', 'how do you travel', 'julian', 'how much time'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_222_3_no_inquiry',
          pattern: /^listen 6 minute english\.$/i,
          errorType: 'interaction',
          message: 'Recommend and ask Julian: "I suggest listening to 6 Minute English. How long is your commute, Julian?"',
          correctionPattern: 'I suggest listening to 6 Minute English. How long is your commute, Julian?',
        },
      ],
      remediationPractice: {
        id: 'rem_222_3',
        type: 'fill_blank',
        prompt: 'Fill in: "I suggest ______ (listening) to this podcast."',
        options: [
          { id: 'r1', text: 'listening', isCorrect: true },
          { id: 'r2', text: 'to listen', isCorrect: false },
        ],
        correctAnswer: 'listening',
        explanation: '"suggest + verb-ing".',
      },
    },
    {
      id: 'turn_222_4',
      turnIndex: 4,
      partnerPrompt:
        'I take the bus for 25 minutes each way, so a 6-minute podcast with transcripts will be perfect! With this grammar book, dictionary app, and podcast, I feel completely set up for success. Thank you so much for all these recommendations!',
      partnerAudioText:
        'I take the bus for 25 minutes each way, so a 6-minute podcast with transcripts will be perfect! With this grammar book, dictionary app, and podcast, I feel completely set up for success. Thank you so much for all these recommendations!',
      partnerQuestionHindi:
        'मैं दोनों तरफ 25 मिनट बस से जाता हूँ, इसलिए प्रतिलेख (transcripts) के साथ 6 मिनट का पॉडकास्ट बिल्कुल सही रहेगा! इस व्याकरण पुस्तक, शब्दकोश ऐप और पॉडकास्ट के साथ, मैं सफलता के लिए पूरी तरह से तैयार महसूस करता हूँ। इन सभी सिफारिशों के लिए बहुत-बहुत धन्यवाद!',
      expectedFunction: 'Closing the bookstore visit warmly and wishing Julian success in his exchange semester',
      contextGoal: 'Say you are delighted to help, tell Julian to let you know if he needs any more tips, and head to the cashier together',
      targetVocabulary: ['You’re very welcome', 'delighted to help', 'cashier', 'exchange semester', 'enjoy studying', 'Julian'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'You’re very welcome, Julian! I’m delighted to help. Let’s head to the cashier to buy your book. Enjoy your studies!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Happy to help anytime, Julian! You have all the best tools now. Let’s pay at the counter and grab a coffee!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Anytime, Julian! Those resources will make a massive difference to your fluency. Let’s head over to the checkout counter!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'welcome_and_delight',
          patterns: ['you’re very welcome', 'delighted to help', 'happy to help', 'anytime', 'welcome'],
          required: true,
        },
        {
          name: 'store_action_wrapup',
          patterns: ['cashier', 'counter', 'checkout', 'buy', 'pay', 'coffee', 'julian', 'studies'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_222_4_short',
          pattern: /^(welcome|bye)$/i,
          errorType: 'interaction',
          message: 'Close warmly: "You’re very welcome, Julian! Let’s head to the cashier."',
          correctionPattern: 'You’re very welcome, Julian! Let’s go to the cashier.',
        },
      ],
      remediationPractice: {
        id: 'rem_222_4',
        type: 'multiple_choice',
        prompt: 'Which sentence provides a friendly conclusion in a bookstore setting?',
        options: [
          { id: 'r1', text: 'You’re very welcome, Julian! Let’s head to the cashier to pay for your book.', isCorrect: true },
          { id: 'r2', text: 'Ok buy it now bye.', isCorrect: false },
        ],
        correctAnswer: 'You’re very welcome, Julian! Let’s head to the cashier to pay for your book.',
        explanation: 'Warm, cooperative, and natural conclusion.',
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
