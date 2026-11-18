import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_187: ConversationDefinition = {
  id: 'conv_a2_187',
  title: 'Cinema, Films, Theater & Reviewing Entertainment',
  cefr: 'A2',
  unitId: 'unit_a2_13',
  lessonLinks: ['lesson_a2_13_187'],
  estimatedMinutes: 5,
  scenario:
    'You and your friend Maya are outside an independent cinema deciding what to watch tonight. You are comparing a new historical drama, a comedy, and an animated film using preference structures ("prefer ... to" and "would rather ... than").',
  communicativeGoals: [
    'Express cultural and movie preferences using "prefer ... to" and "would rather ... than"',
    'Discuss film genres (documentary, drama, sci-fi, comedy, thriller)',
    'Review movie features including plot twists, soundtracks, and acting performances',
    'Agree on showtimes, seating preferences, and snack choices',
  ],
  canDoStatements: [
    'Can express and compare preferences about films, books, and theater in English',
    'Can give simple reasons for liking or disliking an entertainment genre',
    'Can discuss cinema showtimes and purchase movie tickets',
  ],
  characters: [
    {
      id: 'char_maya_cinema',
      name: 'Maya',
      role: 'Film Club Friend',
      avatar: '🎬',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'documentary',
        ipa: '/ˌdɒkjuˈmentri/',
        partOfSpeech: 'noun',
        meaning: 'A movie or television program that provides a factual record or report',
        exampleSentence: 'I watched an insightful nature documentary about oceans yesterday.',
        translations: { hi: 'वृत्तचित्र / डॉक्यूमेंट्री' },
      },
      {
        word: 'soundtrack',
        ipa: '/ˈsaʊndtræk/',
        partOfSpeech: 'noun',
        meaning: 'The recorded music accompanying and synchronized to the images of a film',
        exampleSentence: 'The orchestral soundtrack made the emotional scenes very powerful.',
        translations: { hi: 'साउंडट्रैक / फिल्म का संगीत' },
      },
      {
        word: 'plot',
        ipa: '/plɒt/',
        partOfSpeech: 'noun',
        meaning: 'The main events of a play, novel, film, or similar work, devised and presented by the writer',
        exampleSentence: 'The thriller had an unexpected plot twist at the very end.',
        translations: { hi: 'कथानक / कहानी की रूपरेखा' },
      },
      {
        word: 'acting',
        ipa: '/ˈæktɪŋ/',
        partOfSpeech: 'noun',
        meaning: 'The art or occupation of performing in plays or movies',
        exampleSentence: 'The lead actor delivered an award-winning acting performance.',
        translations: { hi: 'अभिनय / अदाकारी' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I prefer dramas to action movies because the stories are deeper.',
        functionCategory: 'Expressing preference with prefer to',
        exampleSentence: 'She prefers reading books to watching television.',
      },
      {
        phrase: 'I would rather watch the 7:00 PM show than wait for the late night one.',
        functionCategory: 'Expressing preference with would rather than',
        exampleSentence: 'We would rather sit near the middle than in the front row.',
      },
      {
        phrase: 'What did you think of the lead actor’s performance?',
        functionCategory: 'Asking for movie review',
        exampleSentence: 'How was the cinematography and soundtrack?',
      },
      {
        phrase: 'The plot was so captivating from beginning to end.',
        functionCategory: 'Describing story quality',
        exampleSentence: 'The dialogue was witty and entertaining.',
      },
    ],
    grammar: {
      title: 'Comparing Preferences: "prefer ... to" vs. "would rather ... than"',
      conceptExplanation:
        '1. Prefer + [Noun / -ing] + to + [Noun / -ing]:\n   - "I prefer documentaries to comedies."\n   - "She prefers watching films at home to going out."\n2. Would rather + [Base Verb] + than + [Base Verb]:\n   - "I would rather see a drama than watch a horror film."\n   - "We would rather book online than queue at the box office."\nNote: Never use "than" with "prefer" (*prefer X than Y is incorrect).',
      patternFormula: 'Prefer [Noun / Gerund] to [Noun / Gerund]  |  Would rather [Base Verb] than [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'I prefer comedies than horror movies.',
          correct: 'I prefer comedies to horror movies.',
          explanation: 'The verb "prefer" takes the preposition "to", never "than".',
        },
        {
          incorrect: 'I would rather to watch a thriller than a drama.',
          correct: 'I would rather watch a thriller than a drama.',
          explanation: '"Would rather" is followed directly by the bare infinitive (watch), not "to watch".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Maya',
        text: 'There are three films starting soon: a space sci-fi, a detective mystery, and a comedy. Which one do you prefer?',
        translation: 'जल्द ही तीन फ़िल्में शुरू हो रही हैं: एक स्पेस साइंस फिक्शन, एक जासूसी रहस्य और एक कॉमेडी। आप किसे पसंद करते हैं?',
      },
      {
        speaker: 'Learner',
        text: 'I prefer mystery films to sci-fi because I love solving the puzzle.',
        translation: 'मुझे साइंस-फाई की तुलना में रहस्यमयी फ़िल्में अधिक पसंद हैं क्योंकि मुझे पहेली सुलझाना पसंद है।',
      },
      {
        speaker: 'Maya',
        text: 'Me too! Would you rather get middle row seats or sit higher up in the back?',
        translation: 'मुझे भी! क्या आप बीच की पंक्ति की सीटें लेना चाहेंगे या पीछे ऊपर बैठना पसंद करेंगे?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_187_1',
      type: 'fill_blank',
      prompt: 'Complete with the correct preposition: "I prefer romantic dramas ______ action movies."',
      options: [
        { id: 'opt_1', text: 'to', isCorrect: true },
        { id: 'opt_2', text: 'than', isCorrect: false },
        { id: 'opt_3', text: 'over', isCorrect: false },
      ],
      correctAnswer: 'to',
      explanation: 'Use "prefer X to Y".',
    },
    {
      id: 'cp_187_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "would rather"?',
      options: [
        { id: 'opt_1', text: 'I would rather watch the film in the original language than read dubbing.', isCorrect: true },
        { id: 'opt_2', text: 'I would rather to watch the film in the original language than reading.', isCorrect: false },
        { id: 'opt_3', text: 'I would rather watching the film than to read.', isCorrect: false },
      ],
      correctAnswer: 'I would rather watch the film in the original language than read dubbing.',
      explanation: '"Would rather + bare verb + than + bare verb".',
    },
    {
      id: 'cp_187_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [than / I would rather / buy popcorn / nachos / get]',
      correctAnswer: 'I would rather buy popcorn than get nachos',
      explanation: 'Subject + would rather + Verb 1 + than + Verb 2.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_187_1',
      prompt: 'Construct a sentence stating you prefer independent films to big Hollywood blockbusters.',
      scenarioContext: 'Sharing movie tastes with Maya.',
      targetStructure: 'I prefer independent films to big blockbusters.',
      wordBank: ['I', 'prefer', 'independent films', 'to', 'big blockbusters', 'because', 'they have heart'],
      acceptableSolutions: [
        'I prefer independent films to big blockbusters.',
        'I prefer independent films to blockbusters.',
      ],
      explanation: 'Use "prefer [X] to [Y]".',
    },
    {
      id: 'sc_187_2',
      prompt: 'Construct a sentence stating you would rather see a movie in the cinema than stream it on a phone.',
      scenarioContext: 'Discussing the cinema experience.',
      targetStructure: 'I would rather see a movie on the big screen than stream it at home.',
      wordBank: ['I would rather', 'see a movie', 'on the big screen', 'than', 'stream it', 'at home'],
      acceptableSolutions: [
        'I would rather see a movie on the big screen than stream it at home.',
        'I would rather watch movies in the cinema than stream at home.',
      ],
      explanation: 'Structure: [would rather + verb + than + verb].',
    },
  ],
  turns: [
    {
      id: 'turn_187_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! Look at the cinema marquee. We have "The Secret Detective" starting at 7:15 PM and a new animated family comedy at 7:30 PM. Which genre do you prefer watching on a Friday evening?',
      partnerAudioText:
        'Hey! Look at the cinema marquee. We have "The Secret Detective" starting at 7:15 PM and a new animated family comedy at 7:30 PM. Which genre do you prefer watching on a Friday evening?',
      partnerQuestionHindi:
        'अरे! सिनेमा बोर्ड देखिए। हमारे पास शाम 7:15 बजे "द सीक्रेट डिटेक्टिव" और 7:30 बजे एक नई एनिमेटेड पारिवारिक कॉमेडी शुरू हो रही है। आप शुक्रवार की शाम को कौन सी शैली देखना पसंद करते हैं?',
      expectedFunction: 'Stating preference using "prefer ... to" with a reason',
      contextGoal: 'State preference for detective mystery or comedy using "prefer ... to" and give a brief reason',
      targetVocabulary: ['prefer', 'to', 'mystery', 'comedy', 'detective', 'because'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I prefer detective mysteries to comedies because I love exciting plots.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I prefer comedies to serious dramas on Fridays because I want to relax and laugh.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I definitely prefer mystery thrillers to animation because the story keeps you guessing until the end.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'prefer_structure',
          patterns: ['prefer', 'to', 'rather'],
          required: true,
        },
        {
          name: 'genre_and_reason',
          patterns: ['detective', 'mystery', 'comedy', 'animated', 'drama', 'because', 'plot', 'story', 'laugh', 'relax'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_187_1_prefer_than',
          pattern: /prefer .* than/i,
          errorType: 'grammar',
          message: 'Remember: use "prefer [A] to [B]", not "than".',
          correctionPattern: 'prefer ... to ...',
        },
      ],
      remediationPractice: {
        id: 'rem_187_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I prefer thrillers ______ (to) comedies."',
        options: [
          { id: 'r1', text: 'to', isCorrect: true },
          { id: 'r2', text: 'than', isCorrect: false },
        ],
        correctAnswer: 'to',
        explanation: '"Prefer" takes "to".',
      },
    },
    {
      id: 'turn_187_2',
      turnIndex: 2,
      partnerPrompt:
        'The mystery movie it is! Reviews say the acting is phenomenal and the soundtrack was recorded by a full orchestra. Would you rather buy tickets at the self-service kiosk or at the counter with the cashier?',
      partnerAudioText:
        'The mystery movie it is! Reviews say the acting is phenomenal and the soundtrack was recorded by a full orchestra. Would you rather buy tickets at the self-service kiosk or at the counter with the cashier?',
      partnerQuestionHindi:
        'तो रहस्यमयी फ़िल्म ही सही! समीक्षाएं कहती हैं कि अभिनय शानदार है और साउंडट्रैक एक पूरे ऑर्केस्ट्रा द्वारा रिकॉर्ड किया गया था। क्या आप सेल्फ-सर्विस कियोस्क पर टिकट खरीदना चाहेंगे या कैशियर के साथ काउंटर पर?',
      expectedFunction: 'Expressing choice using "would rather ... than"',
      contextGoal: 'State preference using "would rather" (e.g. use kiosk to save time vs counter)',
      targetVocabulary: ['would rather', 'than', 'kiosk', 'counter', 'faster', 'tickets'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I would rather use the kiosk than wait in the cashier line because it is faster.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I’d rather buy tickets at the kiosk than queue at the counter.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Let’s use the electronic kiosk; I would rather choose our seats on screen than wait in line.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'rather_structure',
          patterns: ['would rather', 'i\'d rather', 'rather'],
          required: true,
        },
        {
          name: 'ticket_method',
          patterns: ['kiosk', 'counter', 'line', 'queue', 'faster', 'screen', 'than', 'buy'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_187_2_rather_to',
          pattern: /would rather to use/i,
          errorType: 'grammar',
          message: 'Do not use "to" after "would rather". Say "I would rather use...".',
          correctionPattern: 'I would rather use...',
        },
      ],
      remediationPractice: {
        id: 'rem_187_2',
        type: 'multiple_choice',
        prompt: 'Which form is correct?',
        options: [
          { id: 'r1', text: 'I would rather buy tickets online than queue.', isCorrect: true },
          { id: 'r2', text: 'I would rather to buy tickets online than to queue.', isCorrect: false },
        ],
        correctAnswer: 'I would rather buy tickets online than queue.',
        explanation: 'Bare infinitive follows "would rather".',
      },
    },
    {
      id: 'turn_187_3',
      turnIndex: 3,
      partnerPrompt:
        'Great, we have two center seats in row G! Now, what about cinema snacks? Would you prefer sweet caramel popcorn, salted butter popcorn, or fruit snacks?',
      partnerAudioText:
        'Great, we have two center seats in row G! Now, what about cinema snacks? Would you prefer sweet caramel popcorn, salted butter popcorn, or fruit snacks?',
      partnerQuestionHindi:
        'बढ़िया, हमारे पास पंक्ति G में दो केंद्र सीटें हैं! अब, सिनेमा स्नैक्स के बारे में क्या? क्या आप मीठा कारमेल पॉपकॉर्न, नमकीन मक्खन पॉपकॉर्न या फ्रूट स्नैक्स पसंद करेंगे?',
      expectedFunction: 'Stating snack preference and asking Maya what drink she wants',
      contextGoal: 'State popcorn preference and ask Maya what she wants to drink',
      targetVocabulary: ['prefer', 'popcorn', 'salted', 'caramel', 'drink', 'water'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I prefer salted popcorn to sweet caramel. What would you like to drink, Maya?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I’d rather have salted butter popcorn than sweet. Shall we get a sparkling water to share?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I always prefer salted popcorn! What drink do you want? I can get us two sodas.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'snack_preference',
          patterns: ['salted', 'caramel', 'sweet', 'popcorn', 'butter', 'prefer', 'rather'],
          required: true,
        },
        {
          name: 'drink_follow_up',
          patterns: ['drink', 'water', 'soda', 'what would you', 'shall we', 'share', 'maya'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_187_3_popcorn_plural',
          pattern: /popcorns/i,
          errorType: 'vocabulary',
          message: '"Popcorn" is an uncountable noun. Do not say "popcorns".',
          correctionPattern: 'popcorn',
        },
      ],
      remediationPractice: {
        id: 'rem_187_3',
        type: 'fill_blank',
        prompt: 'Fill in: "Let us buy a large tub of ______ (popcorn)."',
        options: [
          { id: 'r1', text: 'popcorn', isCorrect: true },
          { id: 'r2', text: 'popcorns', isCorrect: false },
        ],
        correctAnswer: 'popcorn',
        explanation: 'Popcorn is uncountable.',
      },
    },
    {
      id: 'turn_187_4',
      turnIndex: 4,
      partnerPrompt:
        'A large salted popcorn and two sparkling waters would be perfect! The cinema doors are opening right now. Let’s head in and enjoy the mystery!',
      partnerAudioText:
        'A large salted popcorn and two sparkling waters would be perfect! The cinema doors are opening right now. Let’s head in and enjoy the mystery!',
      partnerQuestionHindi:
        'एक बड़ा नमकीन पॉपकॉर्न और दो स्पार्कलिंग पानी बिल्कुल सही रहेंगे! सिनेमा के दरवाजे अभी खुल रहे हैं। चलिए अंदर चलते हैं और रहस्यमयी फ़िल्म का आनंद लेते हैं!',
      expectedFunction: 'Agreeing enthusiastically, taking snacks, and heading into the theater',
      contextGoal: 'Express excitement, confirm you have tickets ready, and walk in together',
      targetVocabulary: ['excited', 'tickets', 'enjoy', 'film', 'let\'s go'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I have the snacks and tickets ready. Let’s go inside and enjoy the movie!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Awesome! I am so excited to see the plot twist. Let’s find our seats in row G.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Everything is set! I can’t wait to hear the soundtrack in the theater. Let’s go!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'readiness',
          patterns: ['ready', 'set', 'tickets', 'snacks', 'have', 'find'],
          required: true,
        },
        {
          name: 'enthusiasm_closing',
          patterns: ['let\'s go', 'enjoy', 'excited', 'movie', 'film', 'seats', 'inside'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_187_4_closing',
          pattern: /^(ok|yeah)$/i,
          errorType: 'interaction',
          message: 'Provide a full, enthusiastic closing response.',
          correctionPattern: 'Let\'s head inside and enjoy the movie!',
        },
      ],
      remediationPractice: {
        id: 'rem_187_4',
        type: 'multiple_choice',
        prompt: 'Which sentence best concludes entering a movie theater with a friend?',
        options: [
          { id: 'r1', text: 'I have our tickets ready, let\'s head in and enjoy the show!', isCorrect: true },
          { id: 'r2', text: 'I enter now.', isCorrect: false },
        ],
        correctAnswer: 'I have our tickets ready, let\'s head in and enjoy the show!',
        explanation: 'Natural, friendly collaborative closing.',
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
