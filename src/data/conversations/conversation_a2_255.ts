import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_255: ConversationDefinition = {
  id: 'conv_a2_255',
  title: 'Unit 17 Review & Media / Culture Fluency Check',
  cefr: 'A2',
  unitId: 'unit_a2_17',
  lessonLinks: ['lesson_a2_17_255'],
  estimatedMinutes: 6,
  scenario:
    'You are in your final Unit 17 Fluency Assessment with language mentor Sarah. You demonstrate comprehensive mastery across media literacy, cultural heritage, travel recommendations, public notices, and intercultural mediation. You synthesize everything you have learned throughout Lessons 241–254.',
  communicativeGoals: [
    'Integrate all Unit 17 communicative competencies: news reporting, cultural traditions, landmark reviews, and public notices in fluent A2 English',
    'Use compound discourse markers: "In my view...", "According to official sources...", "It is customary to...", "A fair compromise would be..."',
    'Demonstrate cross-cultural empathy and diplomatic mediation across complex scenarios',
    'Demonstrate self-correction, conversational repair, and active communicative confidence',
  ],
  canDoStatements: [
    'Can discuss and summarize news, media, books, movies, and festivals fluently in CEFR A2 English',
    'Can understand and relay public announcements, weather warnings, and museum etiquette rules',
    'Can successfully mediate cross-cultural differences and propose polite compromises in discussions',
  ],
  characters: [
    {
      id: 'char_sarah_mentor',
      name: 'Sarah',
      role: 'Senior Language Mentor',
      avatar: '🌟',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'fluency',
        ipa: '/ˈfluːənsi/',
        partOfSpeech: 'noun',
        meaning: 'The ability to speak or write a language easily, smoothly, and accurately',
        exampleSentence: 'Consistent conversation practice builds confidence and natural fluency.',
        translations: { hi: 'प्रवाह / धाराप्रवाहता (फ्लूएंसी)' },
      },
      {
        word: 'mediation',
        ipa: '/ˌmiːdiˈeɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The process of conveying, explaining, or summarizing information to help others understand each other',
        exampleSentence: 'Linguistic mediation helps international visitors navigate new cities comfortably.',
        translations: { hi: 'मध्यस्थता (मीडिएशन)' },
      },
      {
        word: 'heritage',
        ipa: '/ˈherɪtɪdʒ/',
        partOfSpeech: 'noun',
        meaning: 'Valued objects, traditions, and historic sites passed down through generations',
        exampleSentence: 'Preserving our cultural heritage enriches the entire community.',
        translations: { hi: 'विरासत / धरोहर (हेरिटेज)' },
      },
      {
        word: 'synthesis',
        ipa: '/ˈsɪnθəsɪs/',
        partOfSpeech: 'noun',
        meaning: 'The combination of different ideas, facts, or sources into a unified whole',
        exampleSentence: 'A good summary is a clear synthesis of the verified facts.',
        translations: { hi: 'संश्लेषण / संयोजन (सिंथेसिस)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Throughout this unit, I have learned to...',
        functionCategory: 'Reflecting on learning outcomes',
        exampleSentence: 'Throughout this unit, I have learned to mediate announcements and news reports in English.',
      },
      {
        phrase: 'In my view, the most important aspect of...',
        functionCategory: 'Synthesizing personal insights and evaluation',
        exampleSentence: 'In my view, the most important aspect of cross-cultural communication is active listening.',
      },
      {
        phrase: 'When bridging different perspectives, it helps to...',
        functionCategory: 'Explaining mediation strategies',
        exampleSentence: 'When bridging different perspectives, it helps to find common ground and speak politely.',
      },
      {
        phrase: 'Whether visiting historic monuments or attending festivals...',
        functionCategory: 'Integrating diverse cultural contexts',
        exampleSentence: 'Whether visiting historic monuments or attending festivals, respecting local customs is key.',
      },
    ],
    grammar: {
      title: 'Unit 17 Capstone Grammar: Complex Discourse Linkers & Multi-Clause Synthesis',
      conceptExplanation:
        '1. Stance & Source Attribution: "According to Source A...", "In my view..."\n2. Passive public advisories: "Passengers are requested to...", "Flash is not permitted."\n3. Polite mediation formulas: "I didn’t mean to cause offense", "A fair compromise would be to..."\n4. Conditional suggestions: "If you enjoy history, you will love..."',
      patternFormula: '[Source Attribution / Stance Marker] + [Fact / Evaluation] + while [Counterpoint / Compromise]',
      contrastExamples: [
        {
          incorrect: 'I am agree that cultural rules is easy.',
          correct: 'I agree that understanding cultural rules makes communication much smoother.',
          explanation: 'Use "I agree" and subject-verb agreement ("rules make").',
        },
        {
          incorrect: 'Due to repair, the train is late for 20 minutes.',
          correct: 'Due to track repairs, the train is delayed by twenty minutes.',
          explanation: 'Use noun phrase after "due to" and preposition "by" for duration of delay.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Sarah',
        text: 'Congratulations on completing Unit 17! Are you ready for our comprehensive capstone review?',
        translation: 'यूनिट 17 पूरा करने पर बधाई! क्या आप हमारे व्यापक कैपस्टोन समीक्षा के लिए तैयार हैं?',
      },
      {
        speaker: 'Learner',
        text: 'Yes, Sarah! I am ready to discuss media news, cultural heritage, public notices, and mediation skills.',
        translation: 'हाँ, सारा! मैं मीडिया समाचार, सांस्कृतिक विरासत, सार्वजनिक नोटिस और मध्यस्थता कौशल पर चर्चा करने के लिए तैयार हूँ।',
      },
      {
        speaker: 'Sarah',
        text: 'Splendid! Let us begin with your favorite cultural experience and how you share it with others.',
        translation: 'शानदार! आइए आपके पसंदीदा सांस्कृतिक अनुभव से शुरू करें और आप इसे दूसरों के साथ कैसे साझा करते हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_255_1',
      type: 'fill_blank',
      prompt: 'Complete: "Effective intercultural communication requires empathy, patience, and active ______ (listening / listen / listened)."',
      options: [
        { id: 'opt_1', text: 'listening', isCorrect: true },
        { id: 'opt_2', text: 'listen', isCorrect: false },
        { id: 'opt_3', text: 'listened', isCorrect: false },
      ],
      correctAnswer: 'listening',
      explanation: 'Parallel noun forms: empathy, patience, and active listening.',
    },
    {
      id: 'cp_255_2',
      type: 'multiple_choice',
      prompt: 'Which sentence best demonstrates comprehensive Unit 17 fluency?',
      options: [
        { id: 'opt_1', text: 'In my view, respecting local customs and cross-checking news sources are essential skills for global citizens.', isCorrect: true },
        { id: 'opt_2', text: 'In my view I am agree respecting customs is cross-check sources good.', isCorrect: false },
        { id: 'opt_3', text: 'From perspective of me, news and customs is easily to do.', isCorrect: false },
      ],
      correctAnswer: 'In my view, respecting local customs and cross-checking news sources are essential skills for global citizens.',
      explanation: 'Flawless syntax combining stance marker, parallel gerund subjects, and evaluative predicate.',
    },
    {
      id: 'cp_255_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [A fair compromise would be to / establish clear team guidelines / that respect both viewpoints]',
      correctAnswer: 'A fair compromise would be to establish clear team guidelines that respect both viewpoints',
      explanation: 'Compromise formula + infinitive complement + relative clause.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_255_1',
      prompt: 'Construct a sentence stating that in my view, respecting local customs helps prevent misunderstandings.',
      scenarioContext: 'Capstone synthesis statement.',
      targetStructure: 'In my view, respecting local customs helps prevent misunderstandings.',
      wordBank: ['In my view,', 'respecting local customs', 'helps prevent', 'misunderstandings.', 'am agreeing that'],
      acceptableSolutions: [
        'In my view, respecting local customs helps prevent misunderstandings.',
        'In my opinion, respecting local customs helps prevent misunderstandings.',
      ],
      explanation: 'Stance marker + gerund subject + singular verb "helps".',
    },
    {
      id: 'sc_255_2',
      prompt: 'Construct a sentence stating that we should cross-check facts and propose fair compromises in discussions.',
      scenarioContext: 'Demonstrating mediation and critical thinking.',
      targetStructure: 'We should cross-check facts and propose fair compromises in discussions.',
      wordBank: ['We should cross-check facts', 'and propose fair compromises', 'in discussions.', 'due of repairs', 'out from service'],
      acceptableSolutions: [
        'We should cross-check facts and propose fair compromises in discussions.',
        'We must cross-check facts and propose fair compromises in discussions.',
      ],
      explanation: 'Modal "should" governing two coordinated verb phrases: cross-check and propose.',
    },
  ],
  turns: [
    {
      id: 'turn_255_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello and welcome to your Unit 17 Capstone Fluency Check! Over the past fifteen lessons, we have explored news headlines, cinema and books, live music, museums, cultural festivals, weather safety, and public transit notices. Which cultural or media topic did you find most engaging, and why?',
      partnerAudioText:
        'Hello and welcome to your Unit 17 Capstone Fluency Check! Over the past fifteen lessons, we have explored news headlines, cinema and books, live music, museums, cultural festivals, weather safety, and public transit notices. Which cultural or media topic did you find most engaging, and why?',
      partnerQuestionHindi:
        'नमस्ते और आपके यूनिट 17 कैपस्टोन प्रवाह जांच में आपका स्वागत है! पिछले पंद्रह पाठों में, हमने समाचार सुर्खियों, सिनेमा और पुस्तकों, लाइव संगीत, संग्रहालयों, सांस्कृतिक त्योहारों, मौसम सुरक्षा और सार्वजनिक पारगमन नोटिसों का पता लगाया है। आपको कौन सा सांस्कृतिक या मीडिया विषय सबसे आकर्षक लगा और क्यों?',
      expectedFunction: 'Greeting Sarah and summarizing top learning highlights across Unit 17 using evaluative language',
      contextGoal: 'Greet Sarah, state your favorite topic (e.g. cultural festivals, book reviews, or transit notices), and explain why using "In my view" or "I found it fascinating"',
      targetVocabulary: ['Hello Sarah', 'Unit 17 review', 'In my view', 'cultural festivals and traditions', 'museum artifacts', 'I found it fascinating', 'communicating clearly'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello Sarah! I am very excited for our capstone check. In my view, learning how to describe cultural festivals and historical artifacts was the most engaging topic. I loved explaining symbolic traditions, ceremonial food, and traditional attire in clear English.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi Sarah! I found comparing news sources and decoding public transit announcements most useful. It gives me practical confidence to travel and navigate real-life situations.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good morning Sarah! I really enjoyed reviewing books and movies. It is wonderful to express opinions and recommend great stories to friends.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_sarah',
          patterns: ['hello', 'hi', 'sarah', 'good morning', 'good afternoon'],
          required: true,
        },
        {
          name: 'unit_topics_synthesis',
          patterns: ['festivals', 'traditions', 'museum', 'artifacts', 'news', 'transit', 'notices', 'books', 'movies', 'engaging', 'fascinating', 'useful', 'in my view'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_255_1_most_engagingest',
          pattern: /most engagingest/i,
          errorType: 'grammar',
          message: 'Say "the most engaging topic" (multi-syllable adjective).',
          correctionPattern: 'This was the most engaging topic in Unit 17.',
        },
      ],
      remediationPractice: {
        id: 'rem_255_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I found this topic the ______ (most engaging / more engagingest)."',
        options: [
          { id: 'r1', text: 'most engaging', isCorrect: true },
          { id: 'r2', text: 'more engagingest', isCorrect: false },
        ],
        correctAnswer: 'most engaging',
        explanation: 'Superlative with multi-syllable adjectives uses "most".',
      },
    },
    {
      id: 'turn_255_2',
      turnIndex: 2,
      partnerPrompt:
        'Outstanding! Now let us test your linguistic mediation skills. Imagine you are at an international airport terminal. A weather alert announces that all coastal flights are delayed due to high winds, and a nearby passenger who does not speak English looks confused. How would you mediate the announcement and reassure them politely?',
      partnerAudioText:
        'Outstanding! Now let us test your linguistic mediation skills. Imagine you are at an international airport terminal. A weather alert announces that all coastal flights are delayed due to high winds, and a nearby passenger who does not speak English looks confused. How would you mediate the announcement and reassure them politely?',
      partnerQuestionHindi:
        'उत्कृष्ट! अब आइए आपके भाषाई मध्यस्थता कौशल का परीक्षण करें। कल्पना कीजिए कि आप एक अंतर्राष्ट्रीय हवाईअड्डा टर्मिनल पर हैं। एक मौसम चेतावनी घोषणा करती है कि तेज़ हवाओं के कारण सभी तटीय उड़ानें विलंबित हैं, और पास में एक यात्री जो अंग्रेजी नहीं बोलता है, भ्रमित दिखता है। आप घोषणा की मध्यस्थता कैसे करेंगे और उन्हें विनम्रतापूर्वक आश्वस्त कैसे करेंगे?',
      expectedFunction: 'Mediating a critical announcement combining weather alerts, transit delays, and polite reassurance',
      contextGoal: 'Explain the announcement clearly: strong winds cause flight delays, advise waiting in the departures lounge, and offer calm reassurance',
      targetVocabulary: ['Hello', 'the announcement said that', 'flights are delayed due to strong winds', 'please do not worry', 'safe to wait in the lounge', 'airline update'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello! Please do not worry. The loudspeaker announcement said that flights are delayed due to strong gale winds along the coast. It is safest to wait comfortably here in the departure lounge, and the airline will provide another update in thirty minutes.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi there! The notice explained that our flight is delayed because of bad weather and heavy wind. Let us sit down together and check the digital screen for updates.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Hello! The announcement mentions a flight delay due to high winds. Everything is safe, and we will board as soon as the weather clears.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'polite_reassurance',
          patterns: ['hello', 'hi', 'please', 'worry', 'comfortable', 'safe', 'help'],
          required: true,
        },
        {
          name: 'announcement_mediation',
          patterns: ['announcement said', 'delayed', 'due to', 'winds', 'weather', 'flights', 'departure lounge', 'update', 'screen'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_255_2_delayed_because_wind',
          pattern: /delayed because wind/i,
          errorType: 'grammar',
          message: 'Say "delayed due to strong winds" or "delayed because of strong winds".',
          correctionPattern: 'Flights are delayed due to strong winds.',
        },
      ],
      remediationPractice: {
        id: 'rem_255_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly explains the reason for a flight delay?',
        options: [
          { id: 'r1', text: 'Flights are delayed due to severe gale winds.', isCorrect: true },
          { id: 'r2', text: 'Flights are delay because wind strong.', isCorrect: false },
        ],
        correctAnswer: 'Flights are delayed due to severe gale winds.',
        explanation: '"Are delayed due to [noun phrase]" is correct.',
      },
    },
    {
      id: 'turn_255_3',
      turnIndex: 3,
      partnerPrompt:
        'To conclude your Unit 17 capstone, what is your key takeaway about cross-cultural communication, respecting heritage, and reaching fair compromises in group discussions?',
      partnerAudioText:
        'To conclude your Unit 17 capstone, what is your key takeaway about cross-cultural communication, respecting heritage, and reaching fair compromises in group discussions?',
      partnerQuestionHindi:
        'अपने यूनिट 17 कैपस्टोन को समाप्त करने के लिए, अंतर-सांस्कृतिक संचार, विरासत का सम्मान करने और समूह चर्चाओं में उचित समझौते तक पहुंचने के बारे में आपका मुख्य निष्कर्ष (key takeaway) क्या है?',
      expectedFunction: 'Synthesizing core lessons on cultural respect, empathy, and diplomatic compromise into a closing statement',
      contextGoal: 'Synthesize insights: respecting cultural differences, listening actively, verifying facts, and proposing fair compromises creates harmonious communication',
      targetVocabulary: ['In conclusion', 'cross-cultural communication', 'respecting heritage', 'active listening', 'fair compromise', 'confidence and empathy'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'In conclusion, my key takeaway is that successful cross-cultural communication relies on active listening, empathy, and mutual respect. When we understand cultural traditions, cross-check information, and propose fair compromises, we can build meaningful connections across diverse communities.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'My main takeaway is that speaking politely, observing local customs, and finding common ground in debates help us communicate with confidence anywhere in the world.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I learned that respecting different cultures and listening with an open mind allows us to solve misunderstandings and connect with everyone.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'conclusion_marker',
          patterns: ['in conclusion', 'my key takeaway', 'main takeaway', 'i learned', 'summary'],
          required: true,
        },
        {
          name: 'core_values_synthesis',
          patterns: ['cross-cultural', 'respect', 'heritage', 'empathy', 'active listening', 'fair compromise', 'connections', 'traditions', 'confidence', 'customs'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_255_3_in_conclusion_for',
          pattern: /in conclusion for me/i,
          errorType: 'structure',
          message: 'Say "In conclusion, my key takeaway is..." instead of "in conclusion for me".',
          correctionPattern: 'In conclusion, my key takeaway is mutual respect and active listening.',
        },
      ],
      remediationPractice: {
        id: 'rem_255_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [In conclusion, mutual respect and active listening / are the foundation of / successful cross-cultural communication]',
        correctAnswer: 'In conclusion, mutual respect and active listening are the foundation of successful cross-cultural communication',
        explanation: 'Introductory phrase + subject + predicate noun clause.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 85,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 80,
  },
};
