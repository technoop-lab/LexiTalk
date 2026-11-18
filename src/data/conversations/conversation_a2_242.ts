import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_242: ConversationDefinition = {
  id: 'conv_a2_242',
  title: 'Movies, Series & Describing Stories',
  cefr: 'A2',
  unitId: 'unit_a2_17',
  lessonLinks: ['lesson_a2_17_242'],
  estimatedMinutes: 5,
  scenario:
    'You are in a community cinema cafe chatting with film club organizer Maya. You discuss recent movies and streaming series, describe the plot of a documentary, mention who directed it and who stars in it, and give your personal recommendation.',
  communicativeGoals: [
    'Describe film genres, plot summaries, and main characters in simple A2 English',
    'Use passive and descriptive formulas: "it was directed by...", "it stars...", "the plot is about..."',
    'Express personal reviews and recommendations using adjectives (gripping, entertaining, inspiring)',
    'Ask a conversation partner about their favorite film genres and streaming habits',
  ],
  canDoStatements: [
    'Can describe what a movie or television series is about in simple connected sentences',
    'Can state who directed or stars in a movie and explain why they recommend it',
    'Can express opinions and preferences about different entertainment genres',
  ],
  characters: [
    {
      id: 'char_maya_cinephile',
      name: 'Maya',
      role: 'Film Club Organizer',
      avatar: '🎬',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'plot',
        ipa: '/plɒt/',
        partOfSpeech: 'noun',
        meaning: 'The main sequence of events or storyline in a play, novel, or film',
        exampleSentence: 'The plot of the movie was very exciting and full of surprises.',
        translations: { hi: 'कथानक / कहानी (प्लॉट)' },
      },
      {
        word: 'directed by',
        ipa: '/daɪˈrektɪd baɪ/',
        partOfSpeech: 'verb phrase',
        meaning: 'Managed or guided in artistic creation by a specific director',
        exampleSentence: 'The documentary was directed by an award-winning filmmaker.',
        translations: { hi: 'द्वारा निर्देशित (डायरेक्टेड बाय)' },
      },
      {
        word: 'stars',
        ipa: '/stɑːz/',
        partOfSpeech: 'verb',
        meaning: 'Features a specific actor or actress as a principal performer',
        exampleSentence: 'The adventure film stars two famous young actors.',
        translations: { hi: 'मुख्य भूमिका में है (स्टार्स)' },
      },
      {
        word: 'soundtrack',
        ipa: '/ˈsaʊndtræk/',
        partOfSpeech: 'noun',
        meaning: 'The recorded music accompanying and synchronized to the images of a motion picture',
        exampleSentence: 'The film has a beautiful acoustic soundtrack.',
        translations: { hi: 'फिल्म संगीत / साउंडट्रैक (साउंडट्रैक)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'The plot revolves around...',
        functionCategory: 'Explaining the central storyline',
        exampleSentence: 'The plot revolves around a young doctor working in a remote village.',
      },
      {
        phrase: 'It is based on a true story.',
        functionCategory: 'Describing the origin of a narrative',
        exampleSentence: 'I love this drama because it is based on a true story.',
      },
      {
        phrase: 'I would definitely recommend it because...',
        functionCategory: 'Giving a persuasive movie recommendation',
        exampleSentence: 'I would definitely recommend it because the acting is superb.',
      },
      {
        phrase: 'What kind of movies do you enjoy?',
        functionCategory: 'Asking about cinematic preferences',
        exampleSentence: 'What kind of movies do you usually watch on weekends?',
      },
    ],
    grammar: {
      title: 'Describing Films: Passive "Directed by" & Present Simple Plot Summaries',
      conceptExplanation:
        '1. When describing what a movie is about, use Present Simple: "The story follows a family who moves to an island."\n2. Use the passive voice for production details: "It was directed by Christopher Nolan."\n3. Use "stars" as an active verb: "It stars Leonardo DiCaprio."',
      patternFormula: '[Title] + [is directed by / stars...] + [The plot is about / follows + Noun]',
      contrastExamples: [
        {
          incorrect: 'The movie is direct by Spielberg and star Tom Hanks.',
          correct: 'The movie was directed by Spielberg and stars Tom Hanks.',
          explanation: 'Use past participle "directed by" and 3rd person singular "stars".',
        },
        {
          incorrect: 'The plot is revolve of a detective.',
          correct: 'The plot revolves around a brave detective.',
          explanation: '"Revolves around" takes the preposition "around".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Maya',
        text: 'Welcome to our film club! What is the best movie or series you watched recently?',
        translation: 'हमारे फिल्म क्लब में आपका स्वागत है! आपने हाल ही में कौन सी बेहतरीन फिल्म या सीरीज़ देखी है?',
      },
      {
        speaker: 'Learner',
        text: 'I recently watched an inspiring documentary. It was directed by a local filmmaker and the plot revolves around wildlife conservation.',
        translation: 'मैंने हाल ही में एक प्रेरणादायक डॉक्यूमेंट्री देखी। यह एक स्थानीय फिल्म निर्माता द्वारा निर्देशित थी और कथानक वन्यजीव संरक्षण के इर्द-गिर्द घूमता है।',
      },
      {
        speaker: 'Maya',
        text: 'That sounds fascinating! Would you recommend it to our club members?',
        translation: 'यह बहुत दिलचस्प लगता है! क्या आप हमारे क्लब के सदस्यों को इसकी सिफारिश करेंगे?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_242_1',
      type: 'fill_blank',
      prompt: 'Complete: "The new mystery film was ______ (directed / directing / director) by a talented young artist."',
      options: [
        { id: 'opt_1', text: 'directed', isCorrect: true },
        { id: 'opt_2', text: 'directing', isCorrect: false },
        { id: 'opt_3', text: 'director', isCorrect: false },
      ],
      correctAnswer: 'directed',
      explanation: 'Passive structure: "was directed by".',
    },
    {
      id: 'cp_242_2',
      type: 'multiple_choice',
      prompt: 'Which phrase correctly describes the story line?',
      options: [
        { id: 'opt_1', text: 'The plot revolves around two friends building a solar car.', isCorrect: true },
        { id: 'opt_2', text: 'The plot is revolve to two friends building solar.', isCorrect: false },
        { id: 'opt_3', text: 'The plot revolving on friends.', isCorrect: false },
      ],
      correctAnswer: 'The plot revolves around two friends building a solar car.',
      explanation: '"The plot revolves around..." is the standard idiom.',
    },
    {
      id: 'cp_242_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [I highly recommend this series / because the acting / is truly inspiring]',
      correctAnswer: 'I highly recommend this series because the acting is truly inspiring',
      explanation: 'Recommendation clause followed by reason with because.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_242_1',
      prompt: 'Construct a sentence stating that the movie was directed by Sarah Jenkins and stars two famous actors.',
      scenarioContext: 'Describing a film to Maya.',
      targetStructure: 'The movie was directed by Sarah Jenkins and stars two famous actors.',
      wordBank: ['The movie was', 'directed by Sarah Jenkins', 'and stars two', 'famous actors.', 'revolving'],
      acceptableSolutions: [
        'The movie was directed by Sarah Jenkins and stars two famous actors.',
        'This movie was directed by Sarah Jenkins and stars two famous actors.',
      ],
      explanation: 'Use "was directed by" (passive) and "stars" (present simple).',
    },
    {
      id: 'sc_242_2',
      prompt: 'Construct a sentence explaining that the plot revolves around an ocean researcher saving coral reefs.',
      scenarioContext: 'Summarizing the storyline.',
      targetStructure: 'The plot revolves around an ocean researcher saving coral reefs.',
      wordBank: ['The plot revolves', 'around an ocean researcher', 'saving coral reefs.', 'directed on', 'soundtrack'],
      acceptableSolutions: [
        'The plot revolves around an ocean researcher saving coral reefs.',
        'The plot is about an ocean researcher saving coral reefs.',
      ],
      explanation: '"The plot revolves around..." correctly introduces the protagonist and mission.',
    },
  ],
  turns: [
    {
      id: 'turn_242_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! Welcome to the community film cafe. We are selecting movies for this month’s screening. What kind of movies or series do you enjoy watching most?',
      partnerAudioText:
        'Hi there! Welcome to the community film cafe. We are selecting movies for this month’s screening. What kind of movies or series do you enjoy watching most?',
      partnerQuestionHindi:
        'नमस्ते! सामुदायिक फिल्म कैफे में आपका स्वागत है। हम इस महीने की स्क्रीनिंग के लिए फिल्मों का चयन कर रहे हैं। आप किस प्रकार की फिल्में या सीरीज़ देखना सबसे अधिक पसंद करते हैं?',
      expectedFunction: 'Greeting Maya and describing preferred genres and recent viewing experiences',
      contextGoal: 'Greet Maya, state favourite genres (e.g. documentaries, historical dramas, mysteries), and mention a recent favorite',
      targetVocabulary: ['Hello Maya', 'documentaries', 'drama', 'mystery', 'enjoy watching', 'recent series'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello Maya! I really enjoy watching nature documentaries and mystery series because they are both educational and exciting.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi Maya! I love historical dramas and science fiction films. I recently watched an excellent mini-series on streaming.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good afternoon! I enjoy comedies and documentaries. They are relaxing to watch after a busy work day.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_maya',
          patterns: ['hello', 'hi', 'maya', 'good afternoon', 'good morning'],
          required: true,
        },
        {
          name: 'genre_preferences',
          patterns: ['documentar', 'drama', 'mystery', 'comedy', 'sci-fi', 'fiction', 'series', 'movies', 'enjoy', 'like', 'love'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_242_1_enjoy_to',
          pattern: /enjoy to watch/i,
          errorType: 'grammar',
          message: 'Use "enjoy watching" (gerund) instead of "enjoy to watch".',
          correctionPattern: 'I enjoy watching documentaries and dramas.',
        },
      ],
      remediationPractice: {
        id: 'rem_242_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I enjoy ______ (watching / to watch) historical films."',
        options: [
          { id: 'r1', text: 'watching', isCorrect: true },
          { id: 'r2', text: 'to watch', isCorrect: false },
        ],
        correctAnswer: 'watching',
        explanation: 'The verb "enjoy" is followed by a gerund (-ing).',
      },
    },
    {
      id: 'turn_242_2',
      turnIndex: 2,
      partnerPrompt:
        'Oh, that sounds great! Tell me about the story of that film or series. Who directed it, and what does the plot revolve around?',
      partnerAudioText:
        'Oh, that sounds great! Tell me about the story of that film or series. Who directed it, and what does the plot revolve around?',
      partnerQuestionHindi:
        'अरे, यह बहुत अच्छा लगता है! मुझे उस फिल्म या सीरीज़ की कहानी के बारे में बताएं। इसे किसने निर्देशित किया, और कथानक किसके इर्द-गिर्द घूमता है?',
      expectedFunction: 'Describing director, actors, and summarizing the plot using "directed by" and "the plot revolves around"',
      contextGoal: 'Explain who directed the movie and summarize the main storyline clearly in A2 English',
      targetVocabulary: ['directed by', 'stars', 'plot revolves around', 'main character', 'based on'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'It was directed by an independent director and stars two talented actors. The plot revolves around a family who builds a renewable energy farm in the mountains.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'The film was directed by David Attenborough’s team. The plot is about protecting marine wildlife, and it has breathtaking ocean cinematography.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'It was directed by a local filmmaker. The plot follows a young detective who solves community mysteries.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'director_production',
          patterns: ['directed by', 'stars', 'director', 'filmmaker', 'team', 'made by'],
          required: true,
        },
        {
          name: 'plot_summary',
          patterns: ['plot', 'revolves around', 'about', 'story', 'follows', 'character', 'family', 'wildlife', 'detective'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_242_2_revolve_on',
          pattern: /revolves on/i,
          errorType: 'grammar',
          message: 'Say "the plot revolves around" rather than "revolves on".',
          correctionPattern: 'The plot revolves around a young researcher.',
        },
      ],
      remediationPractice: {
        id: 'rem_242_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes a film plot?',
        options: [
          { id: 'r1', text: 'The plot revolves around a team of ocean researchers.', isCorrect: true },
          { id: 'r2', text: 'The plot is revolve on a team of ocean researchers.', isCorrect: false },
        ],
        correctAnswer: 'The plot revolves around a team of ocean researchers.',
        explanation: '"The plot revolves around + noun phrase" is the correct structure.',
      },
    },
    {
      id: 'turn_242_3',
      turnIndex: 3,
      partnerPrompt:
        'That would be wonderful for our monthly community movie night! Why would you recommend it, and what did you think of the soundtrack and visuals?',
      partnerAudioText:
        'That would be wonderful for our monthly community movie night! Why would you recommend it, and what did you think of the soundtrack and visuals?',
      partnerQuestionHindi:
        'यह हमारी मासिक सामुदायिक फिल्म रात के लिए शानदार रहेगा! आप इसकी सिफारिश क्यों करेंगे, और साउंडट्रैक और दृश्यों के बारे में आपकी क्या राय थी?',
      expectedFunction: 'Giving a recommendation and evaluating aesthetic elements (soundtrack, acting, visuals)',
      contextGoal: 'Recommend the film with reasons: inspiring message, memorable soundtrack, and stunning visual cinematography',
      targetVocabulary: ['highly recommend', 'soundtrack', 'visuals', 'inspiring', 'acting', 'entertaining'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I would highly recommend it because the message is deeply inspiring. Also, the soundtrack is beautiful and the camera work makes the landscapes look stunning.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I definitely recommend it for film night! The acting is natural, the acoustic soundtrack is memorable, and audiences of all ages will love it.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I recommend it because it is very entertaining and well-made. The music and visuals create a magical atmosphere.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'recommendation_phrase',
          patterns: ['recommend', 'definitely recommend', 'highly recommend', 'suggest', 'great choice'],
          required: true,
        },
        {
          name: 'evaluation_elements',
          patterns: ['soundtrack', 'music', 'visuals', 'cinematography', 'acting', 'inspiring', 'entertaining', 'stunning', 'beautiful'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_242_3_recommend_to_you',
          pattern: /recommend you this/i,
          errorType: 'structure',
          message: 'Say "I recommend it to you" or "I recommend this movie".',
          correctionPattern: 'I highly recommend this movie because it is inspiring.',
        },
      ],
      remediationPractice: {
        id: 'rem_242_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [I highly recommend it / because the soundtrack / is truly beautiful]',
        correctAnswer: 'I highly recommend it because the soundtrack is truly beautiful',
        explanation: 'Recommendation with causal clause.',
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
