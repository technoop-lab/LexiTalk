import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_260: ConversationDefinition = {
  id: 'conv_a2_260',
  title: 'Talking About Change, Progress & Achievements',
  cefr: 'A2',
  unitId: 'unit_a2_18',
  lessonLinks: ['lesson_a2_18_260'],
  estimatedMinutes: 5,
  scenario:
    'You are having a progress review consultation with your language advisor Elena. You reflect on your personal and linguistic journey from when you first began learning English (A1 basics) to where you are today (confident A2 conversational fluency), discussing habits you used to have, key milestones you have achieved, and your next learning goals.',
  communicativeGoals: [
    'Express personal change, progress, and achievements accurately in A2 English',
    'Contrast past habits with present reality using "used to" vs. "now": "I used to feel nervous, but now I speak freely..."',
    'Use Present Perfect with time adverbs to highlight milestones: "I have learned to understand announcements...", "I have completed over 250 lessons..."',
    'State future aspirations: "Next, I want to practice more spontaneous discussions..."',
  ],
  canDoStatements: [
    'Can describe past limitations and habits using "used to"',
    'Can discuss personal progress and achievements using the Present Perfect',
    'Can set realistic future learning targets and ask the advisor for recommendations',
  ],
  characters: [
    {
      id: 'char_elena_advisor',
      name: 'Elena',
      role: 'Learning Progress Advisor',
      avatar: '🌱',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'achievement',
        ipa: '/əˈtʃiːvmənt/',
        partOfSpeech: 'noun',
        meaning: 'A thing done successfully, typically by effort, courage, or skill',
        exampleSentence: 'Speaking in full English conversations is a major personal achievement.',
        translations: { hi: 'उपलब्धि (अचीवमेंट)' },
      },
      {
        word: 'progress',
        ipa: '/ˈprəʊɡres/',
        partOfSpeech: 'noun / verb',
        meaning: 'Forward or onward movement toward a destination or goal',
        exampleSentence: 'You have made noticeable progress in your speaking confidence.',
        translations: { hi: 'प्रगति / सुधार (प्रोग्रेस)' },
      },
      {
        word: 'confidence',
        ipa: '/ˈkɒnfɪdəns/',
        partOfSpeech: 'noun',
        meaning: 'A feeling of self-assurance arising from one’s appreciation of one’s own abilities',
        exampleSentence: 'Regular speaking practice has boosted my communication confidence.',
        translations: { hi: 'आत्मविश्वास (कॉन्फिडेंस)' },
      },
      {
        word: 'milestone',
        ipa: '/ˈmaɪlstəʊn/',
        partOfSpeech: 'noun',
        meaning: 'An action or event marking a significant stage in development',
        exampleSentence: 'Completing the entire A2 curriculum is an important learning milestone.',
        translations: { hi: 'मील का पत्थर / महत्वपूर्ण पड़ाव (माइलस्टोन)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'When I first started, I used to...',
        functionCategory: 'Reflecting on past beginner habits and limitations',
        exampleSentence: 'When I first started, I used to translate every single word in my head.',
      },
      {
        phrase: 'Now, I feel much more confident when...',
        functionCategory: 'Describing present positive transformation',
        exampleSentence: 'Now, I feel much more confident when asking questions and ordering food.',
      },
      {
        phrase: 'Over the past months, I have learned to...',
        functionCategory: 'Highlighting cumulative accomplishments',
        exampleSentence: 'Over the past months, I have learned to solve everyday travel problems.',
      },
      {
        phrase: 'What should my next milestone be?',
        functionCategory: 'Seeking forward-looking guidance',
        exampleSentence: 'What should my next learning milestone be as I prepare for independent speaking?',
      },
    ],
    grammar: {
      title: 'Contrasting Past and Present: "Used to + Base Verb" vs. "Present Perfect for Achievements"',
      conceptExplanation:
        '1. Past habit / former state: "I used to hesitate before speaking" (no longer true).\n2. Current reality: "Now I express my opinions easily" (Present Simple).\n3. Completed achievements with present relevance: "I have practiced...", "I have achieved..." (Present Perfect).\n4. Future target: "My next goal is to + [Base Verb]".',
      patternFormula: 'I used to [Past Limitation], but now I [Present Ability]. I have [Present Perfect Achievement], and my next goal is to [Future Action].',
      contrastExamples: [
        {
          incorrect: 'I am used to be shy when I started.',
          correct: 'I used to be shy when I started learning English.',
          explanation: '"Used to + base verb" expresses past habits or states that are no longer true.',
        },
        {
          incorrect: 'I have complete all lessons last month.',
          correct: 'I completed all lessons last month. / I have completed all the lessons.',
          explanation: 'Use Past Simple with specific past time ("last month") or Present Perfect without a fixed past time.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Elena',
        text: 'Hello! It is wonderful to review your progress today. How has your English changed compared to when you first started?',
        translation: 'नमस्ते! आज आपकी प्रगति की समीक्षा करना बहुत अच्छा लग रहा है। जब आपने पहली बार शुरुआत की थी, तब की तुलना में आपकी अंग्रेजी में क्या बदलाव आया है?',
      },
      {
        speaker: 'Learner',
        text: 'When I first started, I used to get nervous and translate every word. But now, I can speak in connected sentences and understand real-life announcements.',
        translation: 'जब मैंने पहली बार शुरुआत की थी, तो मैं घबरा जाता था और हर शब्द का अनुवाद करता था। लेकिन अब, मैं जुड़े हुए वाक्यों में बोल सकता हूँ और वास्तविक जीवन की घोषणाओं को समझ सकता हूँ।',
      },
      {
        speaker: 'Elena',
        text: 'That is tremendous progress! What specific achievement are you most proud of so far?',
        translation: 'यह जबरदस्त प्रगति है! अब तक आपको किस विशिष्ट उपलब्धि पर सबसे अधिक गर्व है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_260_1',
      type: 'fill_blank',
      prompt: 'Complete: "I used to ______ (worry / worried / worrying) about making small grammar mistakes, but now I speak freely."',
      options: [
        { id: 'opt_1', text: 'worry', isCorrect: true },
        { id: 'opt_2', text: 'worried', isCorrect: false },
        { id: 'opt_3', text: 'worrying', isCorrect: false },
      ],
      correctAnswer: 'worry',
      explanation: '"Used to" is followed by the base form of the verb "worry".',
    },
    {
      id: 'cp_260_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly contrasts a past habit with a present achievement?',
      options: [
        { id: 'opt_1', text: 'I used to hesitate a lot, but I have learned to express my ideas clearly.', isCorrect: true },
        { id: 'opt_2', text: 'I used to hesitated, but I am learn express clearly.', isCorrect: false },
        { id: 'opt_3', text: 'I was use to hesitate but now I learning good.', isCorrect: false },
      ],
      correctAnswer: 'I used to hesitate a lot, but I have learned to express my ideas clearly.',
      explanation: '"Used to hesitate" (past habit) + "have learned" (Present Perfect achievement).',
    },
    {
      id: 'cp_260_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [Over the past months, / I have developed / much greater speaking confidence]',
      correctAnswer: 'Over the past months, I have developed much greater speaking confidence',
      explanation: 'Time frame chunk + Present Perfect clause + object noun phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_260_1',
      prompt: 'Construct a sentence stating that I used to be afraid of speaking, but now I feel confident.',
      scenarioContext: 'Reflecting on personal growth with Elena.',
      targetStructure: 'I used to be afraid of speaking, but now I feel confident.',
      wordBank: ['I used to be', 'afraid of speaking,', 'but now I', 'feel confident.', 'am used to', 'afraid to speak now'],
      acceptableSolutions: [
        'I used to be afraid of speaking, but now I feel confident.',
        'I used to be shy about speaking, but now I feel confident.',
      ],
      explanation: '"Used to be" + prepositional gerund complement + contrast clause.',
    },
    {
      id: 'sc_260_2',
      prompt: 'Construct a sentence stating that I have achieved my goal of understanding everyday English conversations.',
      scenarioContext: 'Sharing your milestone achievement.',
      targetStructure: 'I have achieved my goal of understanding everyday English conversations.',
      wordBank: ['I have achieved', 'my goal of', 'understanding everyday', 'English conversations.', 'achieved to', 'everyday of English'],
      acceptableSolutions: [
        'I have achieved my goal of understanding everyday English conversations.',
        'I have reached my goal of understanding everyday English conversations.',
      ],
      explanation: 'Present Perfect "have achieved" + prepositional phrase with gerund "understanding".',
    },
  ],
  turns: [
    {
      id: 'turn_260_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello! Welcome to your learning milestone review. Looking back at when you first began your English studies, what habits or difficulties did you used to have, and how has that changed today?',
      partnerAudioText:
        'Hello! Welcome to your learning milestone review. Looking back at when you first began your English studies, what habits or difficulties did you used to have, and how has that changed today?',
      partnerQuestionHindi:
        'नमस्ते! आपकी सीखने की प्रगति समीक्षा में आपका स्वागत है। जब आपने पहली बार अंग्रेजी की पढ़ाई शुरू की थी, उस समय आपकी क्या आदतें या कठिनाइयाँ थीं, और आज इसमें क्या बदलाव आया है?',
      expectedFunction: 'Contrasting past beginner difficulties ("I used to...") with present conversational abilities ("Now I can...")',
      contextGoal: 'Greet Elena, explain that you used to translate in your head or feel nervous, but now you speak in full sentences with confidence',
      targetVocabulary: ['Hello Elena', 'when I first started', 'I used to translate in my head', 'feel nervous', 'but now I can speak', 'with greater confidence'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffolding',
          text: 'Hello Elena! When I first started learning English, I used to feel very nervous and translate every single sentence in my head. But now, I can speak in connected sentences and express my thoughts much more naturally.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Independent Production',
          text: 'Hi Elena. I used to struggle with basic grammar and vocabulary. Now, I understand daily conversations, ask follow-up questions, and feel confident speaking with others.',
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
          name: 'past_vs_present_contrast',
          patterns: ['used to', 'translate', 'nervous', 'shy', 'hesitate', 'struggle', 'now', 'speak', 'confidence', 'naturally', 'sentences', 'understand'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_260_1_used_to_past_verb',
          pattern: /i used to felt|i used to translated/i,
          errorType: 'grammar',
          message: 'After "used to", use the base verb: "I used to feel" or "I used to translate".',
          correctionPattern: 'I used to feel nervous, but now I speak with confidence.',
        },
      ],
      remediationPractice: {
        id: 'rem_260_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I used to ______ (hesitate / hesitated) when speaking."',
        options: [
          { id: 'r1', text: 'hesitate', isCorrect: true },
          { id: 'r2', text: 'hesitated', isCorrect: false },
        ],
        correctAnswer: 'hesitate',
        explanation: '"Used to" is always followed by the base form of the verb.',
      },
    },
    {
      id: 'turn_260_2',
      turnIndex: 2,
      partnerPrompt:
        'That is a fantastic transformation! Which specific communicative achievements or skills are you most proud of having mastered across the A2 curriculum?',
      partnerAudioText:
        'That is a fantastic transformation! Which specific communicative achievements or skills are you most proud of having mastered across the A2 curriculum?',
      partnerQuestionHindi:
        'यह एक शानदार परिवर्तन है! पूरे A2 पाठ्यक्रम में आप किन विशिष्ट संवादात्मक उपलब्धियों या कौशलों में महारत हासिल करने पर सबसे अधिक गर्व महसूस करते हैं?',
      expectedFunction: 'Detailing concrete achievements using the Present Perfect ("I have learned to...", "I have practiced...")',
      contextGoal: 'Explain achievements: explaining problems, sharing past memories, giving opinions with reasons, and mediating announcements',
      targetVocabulary: ['I have learned to', 'solve everyday problems', 'give opinions with clear reasons', 'narrate past travel experiences', 'mediate announcements', 'proud of my progress'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffolding',
          text: 'I am most proud that I have learned to solve everyday problems and explain situations clearly. I have also practiced giving my opinions with solid reasons, telling personal stories, and mediating public transit announcements in English.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Independent Production',
          text: 'I have mastered asking follow-up questions, repairing misunderstandings, and discussing cultural topics. I can handle real-world conversations without freezing up.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'present_perfect_achievements',
          patterns: ['have learned', 'have practiced', 'have mastered', 'learned to', 'proud', 'achieved', 'progress', 'can now'],
          required: true,
        },
        {
          name: 'skill_areas',
          patterns: ['problems', 'opinions', 'reasons', 'stories', 'experiences', 'announcements', 'questions', 'travel', 'conversations', 'fluency'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_260_2_have_learn_base',
          pattern: /i have learn to\b/i,
          errorType: 'grammar',
          message: 'Use past participle in Present Perfect: "I have learned to" (or "I have learnt to").',
          correctionPattern: 'I have learned to solve everyday problems.',
        },
      ],
      remediationPractice: {
        id: 'rem_260_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes an achievement using the Present Perfect?',
        options: [
          { id: 'r1', text: 'I have learned to give clear reasons for my opinions.', isCorrect: true },
          { id: 'r2', text: 'I have learn to gave clear reasons for my opinions.', isCorrect: false },
        ],
        correctAnswer: 'I have learned to give clear reasons for my opinions.',
        explanation: 'Present Perfect "have learned" + infinitive "to give".',
      },
    },
    {
      id: 'turn_260_3',
      turnIndex: 3,
      partnerPrompt:
        'You have accomplished so much! As you prepare for complete independent speaking, what is your next personal learning goal, and what advice would you like from me?',
      partnerAudioText:
        'You have accomplished so much! As you prepare for complete independent speaking, what is your next personal learning goal, and what advice would you like from me?',
      partnerQuestionHindi:
        'आपने बहुत कुछ हासिल किया है! जैसे ही आप पूरी तरह से स्वतंत्र बोलने की तैयारी करते हैं, आपका अगला व्यक्तिगत सीखने का लक्ष्य क्या है, और आप मुझसे क्या सलाह लेना चाहेंगे?',
      expectedFunction: 'Stating future learning goals ("My next goal is to...") and asking Elena for her recommendation',
      contextGoal: 'State your next goal (e.g. spontaneous debates, longer storytelling, fluent professional discussions) and ask "What do you recommend for daily practice?"',
      targetVocabulary: ['My next goal is to', 'practice spontaneous speaking', 'participate in longer discussions', 'what would you recommend', 'Elena', 'daily practice routines'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffolding',
          text: 'My next goal is to practice spontaneous speaking without any preparation and participate in longer group debates. What specific daily practice routine would you recommend, Elena, to maintain this momentum?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Independent Production',
          text: 'My next milestone is to talk about complex work and travel topics effortlessly. What tips do you recommend for expanding my active vocabulary every day?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'future_goal',
          patterns: ['next goal', 'next milestone', 'want to', 'aim to', 'practice', 'spontaneous', 'speaking', 'discussions', 'debates', 'fluency'],
          required: true,
        },
        {
          name: 'inquiry_to_elena',
          patterns: ['recommend', 'advice', 'tips', 'routine', 'elena', 'what do you think', 'how can I', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_260_3_recommend_to_me',
          pattern: /what do you recommend to me\b/i,
          errorType: 'structure',
          message: 'Say "What would you recommend?" or "What do you recommend for me?".',
          correctionPattern: 'What daily practice would you recommend for me?',
        },
      ],
      remediationPractice: {
        id: 'rem_260_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [My next goal is to practice / spontaneous conversations / every single day]',
        correctAnswer: 'My next goal is to practice spontaneous conversations every single day',
        explanation: 'Subject phrase + infinitive verb phrase + adverbial frequency phrase.',
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
