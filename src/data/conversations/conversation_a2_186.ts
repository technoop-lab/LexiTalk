import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_186: ConversationDefinition = {
  id: 'conv_a2_186',
  title: 'Music, Concerts, Festivals & Live Performances',
  cefr: 'A2',
  unitId: 'unit_a2_13',
  lessonLinks: ['lesson_a2_13_186'],
  estimatedMinutes: 5,
  scenario:
    'You are standing in the outdoor arena at a summer music festival with your friend Alex. You are discussing the live indie bands, the energetic crowd atmosphere, and using question tags to confirm details and share musical reactions.',
  communicativeGoals: [
    'Use question tags (isn\'t it, aren\'t they, didn\'t we, don\'t you) to keep social conversations lively',
    'Describe musical instruments, stage lighting, and sound atmosphere',
    'Confirm performance schedules, ticket types, and headliner set times',
    'Share musical preferences and react to live band performances',
  ],
  canDoStatements: [
    'Can use question tags to confirm information and invite agreement in social conversations',
    'Can discuss music styles, live performances, and concert atmospheres in English',
    'Can understand and check festival schedules and performance times',
  ],
  characters: [
    {
      id: 'char_alex_friend',
      name: 'Alex',
      role: 'Music Enthusiast & Festival Companion',
      avatar: '🎷',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'festival',
        ipa: '/ˈfestɪvl/',
        partOfSpeech: 'noun',
        meaning: 'A day or period of celebration, typically including musical performances',
        exampleSentence: 'The open-air music festival attracts thousands of fans.',
        translations: { hi: 'संगीत समारोह / उत्सव' },
      },
      {
        word: 'acoustic',
        ipa: '/əˈkuːstɪk/',
        partOfSpeech: 'adjective',
        meaning: 'Relating to sound or the sense of hearing; not having electrical amplification',
        exampleSentence: 'The lead singer played a beautiful acoustic guitar solo.',
        translations: { hi: 'ध्वनिक / गैर-विद्युत' },
      },
      {
        word: 'headliner',
        ipa: '/ˈhedlaɪnə(r)/',
        partOfSpeech: 'noun',
        meaning: 'The main performer or band in a concert or festival',
        exampleSentence: 'The headliner takes the main stage at 9:00 PM.',
        translations: { hi: 'मुख्य कलाकार / हेडलाइनर' },
      },
      {
        word: 'atmosphere',
        ipa: '/ˈætməsfɪə(r)/',
        partOfSpeech: 'noun',
        meaning: 'The pervading tone or mood of a place, situation, or creative work',
        exampleSentence: 'The concert atmosphere was energetic and vibrant.',
        translations: { hi: 'माहौल / वातावरण' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'The sound system is incredible tonight, isn’t it?',
        functionCategory: 'Tag question for agreement',
        exampleSentence: 'The guitarist played amazingly, didn’t he?',
      },
      {
        phrase: 'You bought tickets for the main stage, didn’t you?',
        functionCategory: 'Confirming facts with tag question',
        exampleSentence: 'They are playing our favorite song, aren’t they?',
      },
      {
        phrase: 'What time does the headline act start playing?',
        functionCategory: 'Inquiring festival schedule',
        exampleSentence: 'Where is the food stall area located?',
      },
      {
        phrase: 'I really love the rhythm and tempo of this track.',
        functionCategory: 'Expressing music review',
        exampleSentence: 'The melody is so catchy and cheerful.',
      },
    ],
    grammar: {
      title: 'Question Tags: isn\'t it, aren\'t you, didn\'t they, don\'t you',
      conceptExplanation:
        '1. Question Tags are short questions added to the end of statements to confirm facts or check agreement:\n   - Positive statement → Negative tag:\n     "The music is loud, isn\'t it?"\n     "You like indie rock, don\'t you?"\n     "We saw them last year, didn\'t we?"\n   - Negative statement → Positive tag:\n     "It isn\'t raining, is it?"\n     "They didn\'t cancel the show, did they?"\n2. Match the auxiliary verb and tense with the main sentence!',
      patternFormula: '[Positive Statement] + , [Negative Auxiliary + Pronoun]?',
      contrastExamples: [
        {
          incorrect: 'The band is great, is it?',
          correct: 'The band is great, isn\'t it?',
          explanation: 'A positive statement requires a negative tag to invite agreement.',
        },
        {
          incorrect: 'You bought the passes, don\'t you?',
          correct: 'You bought the passes, didn\'t you?',
          explanation: 'The main verb "bought" is in Past Simple, so use past auxiliary "didn\'t".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Alex',
        text: 'The crowd here is unbelievable, isn’t it?',
        translation: 'यहाँ की भीड़ अविश्वसनीय है, है ना?',
      },
      {
        speaker: 'Learner',
        text: 'Yes! The stage lighting looks fantastic too, doesn’t it?',
        translation: 'हाँ! स्टेज की लाइटिंग भी शानदार लग रही है, है ना?',
      },
      {
        speaker: 'Alex',
        text: 'It really does. The headline band starts in twenty minutes, doesn’t it?',
        translation: 'यह सच में है। मुख्य बैंड बीस मिनट में शुरू होगा, है ना?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_186_1',
      type: 'fill_blank',
      prompt: 'Add the correct tag: "The acoustic guitar sounded beautiful, ______?"',
      options: [
        { id: 'opt_1', text: 'didn\'t it', isCorrect: true },
        { id: 'opt_2', text: 'isn\'t it', isCorrect: false },
        { id: 'opt_3', text: 'doesn\'t it', isCorrect: false },
      ],
      correctAnswer: 'didn\'t it',
      explanation: '"Sounded" is Past Simple, so we use the past tag "didn\'t it".',
    },
    {
      id: 'cp_186_2',
      type: 'multiple_choice',
      prompt: 'Which sentence has the correct tag question?',
      options: [
        { id: 'opt_1', text: 'You love live jazz festivals, don\'t you?', isCorrect: true },
        { id: 'opt_2', text: 'You love live jazz festivals, aren\'t you?', isCorrect: false },
        { id: 'opt_3', text: 'You love live jazz festivals, doesn\'t you?', isCorrect: false },
      ],
      correctAnswer: 'You love live jazz festivals, don\'t you?',
      explanation: 'Subject "You" + Present Simple "love" pairs with "don\'t you".',
    },
    {
      id: 'cp_186_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [is / fantastic / the festival atmosphere / isn\'t it? / really]',
      correctAnswer: 'the festival atmosphere is really fantastic isn\'t it?',
      explanation: 'Statement + comma + tag question.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_186_1',
      prompt: 'Construct a sentence with a tag question confirming that the singer has an amazing voice.',
      scenarioContext: 'Reacting to a live song with Alex.',
      targetStructure: 'The lead singer has an amazing voice, doesn\'t she?',
      wordBank: ['The lead singer', 'has', 'an amazing voice,', 'doesn\'t she?', 'on stage'],
      acceptableSolutions: [
        'The lead singer has an amazing voice, doesn\'t she?',
        'The lead singer has an amazing voice, doesn\'t he?',
      ],
      explanation: '"Has" (present 3rd person) takes negative tag "doesn\'t she/he?".',
    },
    {
      id: 'sc_186_2',
      prompt: 'Construct a sentence confirming that we arrived at the arena on time.',
      scenarioContext: 'Talking about festival timing.',
      targetStructure: 'We arrived before the sunset, didn\'t we?',
      wordBank: ['We', 'arrived', 'before the sunset,', 'didn\'t we?', 'at the arena'],
      acceptableSolutions: [
        'We arrived before the sunset, didn\'t we?',
        'We got here on time, didn\'t we?',
      ],
      explanation: 'Past tense "arrived" takes tag "didn\'t we?".',
    },
  ],
  turns: [
    {
      id: 'turn_186_1',
      turnIndex: 1,
      partnerPrompt:
        'Listen to that bass line! The festival atmosphere is so energetic tonight, isn’t it?',
      partnerAudioText:
        'Listen to that bass line! The festival atmosphere is so energetic tonight, isn’t it?',
      partnerQuestionHindi:
        'उस बास की धुन सुनिए! आज रात संगीत समारोह का माहौल बहुत ऊर्जावान है, है ना?',
      expectedFunction: 'Agreeing and adding a tag question or comment about the sound/stage',
      contextGoal: 'Agree with Alex and remark on the live band or stage lighting with an appropriate tag question',
      targetVocabulary: ['isn\'t it', 'music', 'band', 'stage', 'energetic'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Yes, it is amazing! The stage lighting looks fantastic too, doesn’t it?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Totally! The sound quality is so clear, isn’t it?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'It really is! Everyone in the crowd is dancing to the beat, aren’t they?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'agreement',
          patterns: ['yes', 'totally', 'really', 'definitely', 'agree', 'amazing'],
          required: true,
        },
        {
          name: 'tag_or_music_detail',
          patterns: ['isn\'t it', 'doesn\'t it', 'aren\'t they', 'sound', 'stage', 'lighting', 'crowd', 'band'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_186_1_tag',
          pattern: /looks fantastic, is it\?/i,
          errorType: 'grammar',
          message: 'Use a negative tag for a positive statement: "looks fantastic, doesn\'t it?".',
          correctionPattern: 'looks fantastic, doesn\'t it?',
        },
      ],
      remediationPractice: {
        id: 'rem_186_1',
        type: 'fill_blank',
        prompt: 'Add the tag: "The stage looks great, ______ (doesn\'t it)?"',
        options: [
          { id: 'r1', text: 'doesn\'t it', isCorrect: true },
          { id: 'r2', text: 'isn\'t it', isCorrect: false },
        ],
        correctAnswer: 'doesn\'t it',
        explanation: 'Action verb "looks" takes auxiliary "doesn\'t".',
      },
    },
    {
      id: 'turn_186_2',
      turnIndex: 2,
      partnerPrompt:
        'The drummer is playing with so much power! You prefer live concerts to listening on headphones at home, don’t you?',
      partnerAudioText:
        'The drummer is playing with so much power! You prefer live concerts to listening on headphones at home, don’t you?',
      partnerQuestionHindi:
        'ड्रमर बहुत ताकत के साथ बजा रहा है! आप घर पर हेडफ़ोन पर सुनने की तुलना में लाइव कॉन्सर्ट पसंद करते हैं, है ना?',
      expectedFunction: 'Responding to a preference tag question and explaining why',
      contextGoal: 'Answer the question about preferring live concerts and give a simple reason (energy, sound, crowd)',
      targetVocabulary: ['prefer', 'live', 'energy', 'crowd', 'sound'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Yes, I do! I prefer live music because the live energy and crowd are so exciting.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Definitely. The live acoustic sound feels so much more real than headphones.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Of course! Nothing compares to feeling the rhythm with thousands of other fans.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'preference_answer',
          patterns: ['yes', 'i do', 'definitely', 'of course', 'prefer', 'live'],
          required: true,
        },
        {
          name: 'reason',
          patterns: ['energy', 'crowd', 'sound', 'exciting', 'real', 'feel', 'atmosphere', 'fans'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_186_2_prefer_to',
          pattern: /prefer live concerts than/i,
          errorType: 'grammar',
          message: 'Say "prefer live concerts to listening at home" (prefer X to Y).',
          correctionPattern: 'prefer live concerts to...',
        },
      ],
      remediationPractice: {
        id: 'rem_186_2',
        type: 'multiple_choice',
        prompt: 'Which preposition follows "prefer"?',
        options: [
          { id: 'r1', text: 'to (I prefer coffee to tea)', isCorrect: true },
          { id: 'r2', text: 'than (I prefer coffee than tea)', isCorrect: false },
        ],
        correctAnswer: 'to (I prefer coffee to tea)',
        explanation: 'We use the pattern "prefer [A] to [B]".',
      },
    },
    {
      id: 'turn_186_3',
      turnIndex: 3,
      partnerPrompt:
        'I totally agree with you! By the way, the headliner band comes on stage at 9:30 PM, doesn’t it? Should we grab some food and drinks before the main act starts?',
      partnerAudioText:
        'I totally agree with you! By the way, the headliner band comes on stage at 9:30 PM, doesn’t it? Should we grab some food and drinks before the main act starts?',
      partnerQuestionHindi:
        'मैं आपसे पूरी तरह सहमत हूँ! वैसे, मुख्य हेडलाइनर बैंड रात 9:30 बजे मंच पर आएगा, है ना? क्या हमें मुख्य शो शुरू होने से पहले कुछ खाना और पेय लेना चाहिए?',
      expectedFunction: 'Confirming set time and agreeing on food/drink break',
      contextGoal: 'Confirm that 9:30 PM is correct and suggest getting cold drinks or snacks quickly',
      targetVocabulary: ['headliner', 'time', 'drinks', 'snacks', 'before'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Yes, that’s right! Let’s get some lemonade and snacks before the headliner starts.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Yes, 9:30 PM is correct. We have thirty minutes to visit the food stalls.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Exactly! Let us grab some cold drinks quickly so we don’t lose our spot near the stage.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'time_confirmation',
          patterns: ['yes', 'right', 'correct', 'exactly', '9:30', 'time'],
          required: true,
        },
        {
          name: 'break_suggestion',
          patterns: ['food', 'drinks', 'snacks', 'lemonade', 'stalls', 'grab', 'get', 'let\'s'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_186_3_lets',
          pattern: /let we grab/i,
          errorType: 'grammar',
          message: 'Say "Let\'s grab" (short for "Let us").',
          correctionPattern: 'Let\'s grab...',
        },
      ],
      remediationPractice: {
        id: 'rem_186_3',
        type: 'fill_blank',
        prompt: 'Fill in: "______ (Let\'s) get some snacks."',
        options: [
          { id: 'r1', text: 'Let\'s', isCorrect: true },
          { id: 'r2', text: 'Let we', isCorrect: false },
        ],
        correctAnswer: 'Let\'s',
        explanation: 'We use "Let\'s + verb" for suggestions.',
      },
    },
    {
      id: 'turn_186_4',
      turnIndex: 4,
      partnerPrompt:
        'I got us two fresh lemonades! The lights on the main stage are dimming now. This is going to be the best concert of the year, isn’t it?',
      partnerAudioText:
        'I got us two fresh lemonades! The lights on the main stage are dimming now. This is going to be the best concert of the year, isn’t it?',
      partnerQuestionHindi:
        'मैं हमारे लिए दो ताज़ा नींबू पानी ले आया! मुख्य मंच की लाइटें अब धीमी हो रही हैं। यह साल का सबसे अच्छा कॉन्सर्ट होने वाला है, है ना?',
      expectedFunction: 'Enthusiastically agreeing with the final tag question and celebrating the concert start',
      contextGoal: 'Affirm enthusiasm, thank Alex for the drink, and enjoy the start of the headline show',
      targetVocabulary: ['isn\'t it', 'best', 'year', 'thanks', 'enjoy'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'It definitely is! Thanks for the lemonade, Alex. Let’s enjoy the show!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Without a doubt! Here comes the band. Let’s sing along!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Yes it is! Thank you so much for getting the drinks. The opening song is starting right now!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'enthusiastic_affirmation',
          patterns: ['is', 'definitely', 'without a doubt', 'yes', 'absolutely'],
          required: true,
        },
        {
          name: 'show_enjoyment',
          patterns: ['thanks', 'lemonade', 'enjoy', 'show', 'band', 'song', 'sing'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_186_4_short_ans',
          pattern: /^(yes|ok)$/i,
          errorType: 'interaction',
          message: 'Respond naturally to Alex with enthusiasm and friendly closing words.',
          correctionPattern: 'It definitely is! Thanks for the drinks, let\'s enjoy the show!',
        },
      ],
      remediationPractice: {
        id: 'rem_186_4',
        type: 'multiple_choice',
        prompt: 'Which response is the most natural and engaging?',
        options: [
          { id: 'r1', text: 'It definitely is! Thanks for the drinks, let\'s enjoy the show!', isCorrect: true },
          { id: 'r2', text: 'Yes.', isCorrect: false },
        ],
        correctAnswer: 'It definitely is! Thanks for the drinks, let\'s enjoy the show!',
        explanation: 'Enthusiastic and complete conversational response.',
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
