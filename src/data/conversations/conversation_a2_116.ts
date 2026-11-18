import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_116: ConversationDefinition = {
  id: 'conv_a2_116',
  title: 'Entertainment, Hobbies & Media Preferences (directed by, set in, into)',
  cefr: 'A2',
  unitId: 'unit_a2_8',
  lessonLinks: ['lesson_a2_8_116'],
  estimatedMinutes: 5,
  scenario:
    'You are attending a monthly film and literature discussion club at a café in Manchester, speaking with club organizer Sean Gallagher. Share your favorite entertainment genres, discuss a compelling mystery series you recently watched, use passive descriptors (directed by, set in, written by), and recommend an intriguing crime novel for next month’s reading list.',
  communicativeGoals: [
    'Express enthusiasm for media and cultural hobbies using "I am into...", "I find it fascinating / gripping", and "I tend to prefer..."',
    'Describe films and books using passive background phrases ("directed by", "written by", "set in [location]")',
    'Compare genres (psychological thrillers, historical documentaries, science fiction, biographical drama)',
    'Recommend titles for a group reading or viewing list with reasoned justifications',
  ],
  canDoStatements: [
    'Can discuss films, books, and TV series they like and explain why (CEFR A2)',
    'Can use passive expressions to state who created or directed a film and where it is set',
    'Can recommend entertainment to peers in a relaxed social discussion',
  ],
  characters: [
    {
      id: 'char_sean_gallagher',
      name: 'Sean Gallagher',
      role: 'Film & Book Club Organizer',
      avatar: '🎬',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'directed by',
        ipa: '/dɪˈrɛktɪd baɪ/',
        partOfSpeech: 'phrase',
        meaning: 'Supervised and guided in making by a specific film director',
        exampleSentence: 'The thriller was directed by Christopher Nolan.',
        translations: { hi: 'द्वारा निर्देशित' },
      },
      {
        word: 'set in',
        ipa: '/sɛt ɪn/',
        partOfSpeech: 'phrase',
        meaning: 'Taking place in a specific geographic location or time period',
        exampleSentence: 'The historical drama is set in Victorian London.',
        translations: { hi: 'की पृष्ठभूमि में स्थित' },
      },
      {
        word: 'gripping',
        ipa: '/ˈɡrɪpɪŋ/',
        partOfSpeech: 'adjective',
        meaning: 'Holding one\'s attention completely; intensely interesting',
        exampleSentence: 'The crime series has a truly gripping storyline from start to finish.',
        translations: { hi: 'रोमांचक / बांधे रखने वाला' },
      },
      {
        word: 'into',
        ipa: '/ˈɪntuː/',
        partOfSpeech: 'preposition',
        meaning: 'Enthusiastic about or deeply interested in a subject or hobby',
        exampleSentence: 'I am really into Nordic crime fiction and investigative podcasts.',
        translations: { hi: 'में रुचि रखने वाला' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am really into psychological thrillers.',
        functionCategory: 'Expressing Strong Interest (into + genre)',
        exampleSentence: 'I am really into biographical documentaries.',
      },
      {
        phrase: 'It is set in Edinburgh during the 1990s.',
        functionCategory: 'Describing Setting (set in + place/time)',
        exampleSentence: 'The movie is set in a quiet seaside town.',
      },
      {
        phrase: 'It was written by an award-winning Scottish author.',
        functionCategory: 'Stating Creator (written by)',
        exampleSentence: 'The screenplay was written by Aaron Sorkin.',
      },
      {
        phrase: 'What made it so gripping was the unexpected plot twist.',
        functionCategory: 'Explaining Story Appeal',
        exampleSentence: 'The acting was superb and very convincing.',
      },
    ],
    grammar: {
      title: 'Describing Media: Passive Participles (Set in / Directed by / Written by) & "Into"',
      conceptExplanation:
        '1. Passive Setting & Authorship: "The film is set in..." (present state of story) / "The movie was directed by..." (completed past creation).\n2. Informal Interest: "I am into + Noun / Verb-ing" = "I really enjoy / like" (e.g. "I am into watching documentaries").\n3. Evaluative Adjectives: gripping, captivating, predictable, thought-provoking, suspenseful.\n4. Recommending: "If you like mystery, you should definitely watch..."',
      patternFormula: 'It is set in [Place/Time] | It was directed / written by [Creator] | I am really into [Genre]',
      contrastExamples: [
        {
          incorrect: 'The film set in London by Spielberg.',
          correct: 'The film is set in London and was directed by Spielberg.',
          explanation: 'Include the auxiliary "is" for setting and "was" for past director action.',
        },
        {
          incorrect: 'I am into watch horror films.',
          correct: 'I am into watching horror films. / I am into horror films.',
          explanation: 'The preposition "into" requires a noun or gerund (-ing).',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Sean Gallagher',
        text: 'Hi Alex! Welcome to the Manchester Film & Book Social. What kind of movies or television series have you been watching recently?',
        translation: 'नमस्ते एलेक्स! मैनचेस्टर फिल्म एंड बुक सोशल में आपका स्वागत है। आप हाल ही में किस तरह की फिल्में या टेलीविजन श्रृंखलाएं देख रहे हैं?',
      },
      {
        speaker: 'You',
        text: 'Hi Sean! Lately, I have been really into crime mystery dramas. I just finished a gripping Scottish series set in Edinburgh and directed by a new filmmaker. The cinematography was superb.',
        translation: 'नमस्ते शॉन! हाल ही में, मुझे क्राइम मिस्ट्री ड्रामा में बहुत दिलचस्पी रही है। मैंने अभी-अभी एडिनबर्ग में स्थित और एक नए फिल्म निर्माता द्वारा निर्देशित एक मनोरंजक स्कॉटिश श्रृंखला समाप्त की है। सिनेमैटोग्राफी शानदार थी।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_116_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "The detective novel is ___ in a small Scottish coastal village."',
      options: [
        { id: 'opt_1', text: 'set', isCorrect: true },
        { id: 'opt_2', text: 'sit', isCorrect: false },
        { id: 'opt_3', text: 'setting', isCorrect: false },
      ],
      correctAnswer: 'set',
      explanation: '"Is set in" describes the setting of a story.',
    },
    {
      id: 'cp_a2_116_2',
      type: 'multiple_choice',
      prompt: 'Which phrase correctly expresses enthusiasm for a genre?',
      options: [
        { id: 'opt_1', text: 'I am really into historical documentaries and biographies.', isCorrect: true },
        { id: 'opt_2', text: 'I am into watch documentaries.', isCorrect: false },
        { id: 'opt_3', text: 'I into historical books.', isCorrect: false },
      ],
      correctAnswer: 'I am really into historical documentaries and biographies.',
      explanation: '"Be into + noun phrase" expresses deep personal interest.',
    },
    {
      id: 'cp_a2_116_3',
      type: 'multiple_choice',
      prompt: 'Who created the film in the sentence: "The movie was directed by Greta Gerwig"?',
      options: [
        { id: 'opt_1', text: 'Greta Gerwig was the film director.', isCorrect: true },
        { id: 'opt_2', text: 'The movie watched Greta Gerwig.', isCorrect: false },
        { id: 'opt_3', text: 'Greta Gerwig was only an extra actor.', isCorrect: false },
      ],
      correctAnswer: 'Greta Gerwig was the film director.',
      explanation: '"Was directed by [name]" identifies the film director.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_116_1',
      scenarioContext: 'Describe where a film is set and who directed it.',
      prompt: 'Build: "The film is set in London and directed by Nolan."',
      targetStructure: 'The film is set in + place + and directed by + person',
      wordBank: ['The', 'film', 'is', 'set', 'in', 'London', 'and', 'directed', 'by', 'Nolan', 'was', 'setting'],
      acceptableSolutions: [
        'The film is set in London and directed by Nolan',
        'The film is set in London and directed by Nolan.',
      ],
      explanation: 'Passive descriptive construction for film media.',
    },
    {
      id: 'sc_a2_116_2',
      scenarioContext: 'Share your favorite entertainment preference.',
      prompt: 'Build: "I am really into watching psychological thrillers."',
      targetStructure: 'Subject + be + into + gerund + noun phrase',
      wordBank: ['I', 'am', 'really', 'into', 'watching', 'psychological', 'thrillers', 'watch', 'is', 'for'],
      acceptableSolutions: [
        'I am really into watching psychological thrillers',
        'I am really into watching psychological thrillers.',
      ],
      explanation: 'Expresses genre enthusiasm with "into + gerund".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_116_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi Alex! Great to see you at our Manchester Film & Book meetup. We always kick off by sharing what we are currently watching or reading. What media genres are you most into at the moment?',
      partnerAudioText:
        'Hi Alex! Great to see you at our Manchester Film & Book meetup. We always kick off by sharing what we are currently watching or reading. What media genres are you most into at the moment?',
      partnerQuestionHindi:
        'नमस्ते एलेक्स! हमारी मैनचेस्टर फिल्म एंड बुक मीटअप में आपको देखकर बहुत अच्छा लगा। हम हमेशा यह साझा करके शुरुआत करते हैं कि हम वर्तमान में क्या देख या पढ़ रहे हैं। इस समय आप किस मीडिया शैली में सबसे अधिक रुचि रखते हैं?',
      expectedFunction: 'Express Genre Preference (into psychological thrillers & crime fiction)',
      contextGoal:
        'State that you are really into psychological thrillers and crime investigative series; explain that you love stories with complex characters and unexpected plot twists.',
      targetVocabulary: ['really into psychological thrillers and crime mysteries', 'love gripping storylines with plot twists', 'fascinated by character psychology', 'enjoy binge-watching detective series'],
      suggestedResponses: [
        {
          label: 'Rich Scaffold',
          text: 'Hi Sean! Great to be here! At the moment, I am really into psychological thrillers and crime mystery series. I love stories with complex, realistic characters and unexpected plot twists that keep you guessing until the very end.',
          scaffoldingLevel: 'high',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Genre & Enthusiasm (into / thrillers / crime / mystery / series)',
          patterns: ['into', 'thrillers', 'crime', 'mystery', 'detective', 'series', 'films', 'psychological'],
          required: true,
        },
        {
          name: 'Reasons / Story Elements (plot twists / characters / gripping)',
          patterns: ['plot twists', 'characters', 'guessing', 'gripping', 'complex', 'story', 'love'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'into_base_verb_error',
          pattern: /\bi am into watch\b|\bi into thriller\b/i,
          errorType: 'grammar',
          message: 'Say "I am into watching [genre]" or "I am into thrillers".',
          correctionPattern: 'I am into thrillers',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_116_1',
        type: 'multiple_choice',
        prompt: 'Which expression correctly shows enthusiasm for a movie genre?',
        options: [
          { id: 'opt_1', text: 'I am really into detective series and mystery novels.', isCorrect: true },
          { id: 'opt_2', text: 'I into detective novels.', isCorrect: false },
          { id: 'opt_3', text: 'I am into read books.', isCorrect: false },
        ],
        correctAnswer: 'I am really into detective series and mystery novels.',
        explanation: '"Be into + noun phrase" is grammatically accurate.',
      },
    },
    {
      id: 'turn_a2_116_2',
      turnIndex: 2,
      partnerPrompt:
        'Psychological thrillers are wonderful when written well! Have you seen any particular movie or mini-series recently that really stood out to you? Tell me about the plot and setting!',
      partnerAudioText:
        'Psychological thrillers are wonderful when written well! Have you seen any particular movie or mini-series recently that really stood out to you? Tell me about the plot and setting!',
      partnerQuestionHindi:
        'अच्छी तरह से लिखे जाने पर मनोवैज्ञानिक थ्रिलर अद्भुत होते हैं! क्या आपने हाल ही में कोई ऐसी फिल्म या मिनी-सीरीज़ देखी है जो वास्तव में अलग हटकर रही हो? मुझे कथानक और पृष्ठभूमि के बारे में बताएं!',
      expectedFunction: 'Describe Film/Series Using Passive Forms (set in / directed by / plot)',
      contextGoal:
        'Describe a mini-series called "Dark Waters": explain that it is set in a rainy coastal town in Scotland and was directed by an acclaimed Scottish director; the story follows a detective reopening a cold case.',
      targetVocabulary: ['mini-series titled Dark Waters', 'set in a foggy coastal town in Scotland', 'directed by an award-winning filmmaker', 'follows a detective investigating a twenty-year-old cold case'],
      suggestedResponses: [
        {
          label: 'Rich Scaffold',
          text: 'I recently watched a fantastic six-part mini-series called "Dark Waters". It is set in a foggy coastal town in northern Scotland and was directed by an acclaimed Scottish filmmaker. The story follows a retired detective who investigates a 20-year-old unsolved mystery.',
          scaffoldingLevel: 'high',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Setting & Creation (set in / directed by / Scotland / coastal)',
          patterns: ['set in', 'directed by', 'scotland', 'coastal', 'town', 'series', 'dark waters', 'filmmaker'],
          required: true,
        },
        {
          name: 'Plot Overview (detective / mystery / cold case / crime)',
          patterns: ['detective', 'investigates', 'mystery', 'cold case', 'story', 'unsolved', 'plot'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_116_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "The drama was ___ (direct) by an award-winning filmmaker."',
        options: [
          { id: 'opt_1', text: 'directed', isCorrect: true },
          { id: 'opt_2', text: 'directing', isCorrect: false },
          { id: 'opt_3', text: 'direction', isCorrect: false },
        ],
        correctAnswer: 'directed',
        explanation: 'Use the past participle "directed" in the passive voice.',
      },
    },
    {
      id: 'turn_a2_116_3',
      turnIndex: 3,
      partnerPrompt:
        'That sounds gripping! I love atmospheric Scottish settings. For our book club next month, we are picking our next mystery novel. Do you have a book recommendation that matches this kind of suspenseful mood?',
      partnerAudioText:
        'That sounds gripping! I love atmospheric Scottish settings. For our book club next month, we are picking our next mystery novel. Do you have a book recommendation that matches this kind of suspenseful mood?',
      partnerQuestionHindi:
        'यह बहुत रोमांचक लगता है! मुझे वायुमंडलीय स्कॉटिश पृष्ठभूमि बहुत पसंद है। अगले महीने हमारे बुक क्लब के लिए, हम अपना अगला रहस्य उपन्यास चुन रहे हैं। क्या आपके पास कोई ऐसी पुस्तक सिफारिश है जो इस तरह के रहस्यमय माहौल से मेल खाती हो?',
      expectedFunction: 'Recommend Book with Passive Descriptors (written by / set in Edinburgh / compelling theme)',
      contextGoal:
        'Recommend the novel "The Midnight Shadow": explain it was written by Ian Rankin, is set in the historic Old Town of Edinburgh, and explores secrets hidden inside old libraries.',
      targetVocabulary: ['recommend the novel The Midnight Shadow', 'written by Ian Rankin', 'set in the cobblestone alleys of Edinburgh', 'fascinating examination of hidden family secrets'],
      suggestedResponses: [
        {
          label: 'Rich Scaffold',
          text: 'I highly recommend the novel "The Midnight Shadow". It was written by Ian Rankin and is set in the atmospheric Old Town of Edinburgh. The pacing is gripping, and it explores long-buried historical secrets in underground vaults. The club members would love it!',
          scaffoldingLevel: 'high',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Book Title & Author (Midnight Shadow / Ian Rankin / written by)',
          patterns: ['recommend', 'midnight shadow', 'ian rankin', 'rankin', 'written by', 'novel', 'book'],
          required: true,
        },
        {
          name: 'Setting & Appeal (Edinburgh / Old Town / gripping / secrets / vaults)',
          patterns: ['set in', 'edinburgh', 'old town', 'gripping', 'secrets', 'vaults', 'suspense', 'pacing'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_116_3',
        type: 'multiple_choice',
        prompt: 'Which sentence presents a book recommendation clearly with passive details?',
        options: [
          { id: 'opt_1', text: 'I recommend this novel; it was written by Ian Rankin and is set in Edinburgh.', isCorrect: true },
          { id: 'opt_2', text: 'I recommend book because he write good.', isCorrect: false },
          { id: 'opt_3', text: 'Book is make in Scotland.', isCorrect: false },
        ],
        correctAnswer: 'I recommend this novel; it was written by Ian Rankin and is set in Edinburgh.',
        explanation: 'Accurate passive descriptions.',
      },
    },
    {
      id: 'turn_a2_116_4',
      turnIndex: 4,
      partnerPrompt:
        'Ian Rankin in Edinburgh is an absolute classic choice! I am adding "The Midnight Shadow" straight to the top of our voting poll for next Thursday. Thank you so much for the brilliant recommendation, Alex!',
      partnerAudioText:
        'Ian Rankin in Edinburgh is an absolute classic choice! I am adding "The Midnight Shadow" straight to the top of our voting poll for next Thursday. Thank you so much for the brilliant recommendation, Alex!',
      partnerQuestionHindi:
        'एडिनबर्ग में इयान रैनकिन एक बिल्कुल क्लासिक विकल्प है! मैं "द मिडनाइट शैडो" को अगले गुरुवार के हमारे मतदान पोल में सबसे ऊपर जोड़ रहा हूँ। शानदार सिफारिश के लिए बहुत-बहुत धन्यवाद, एलेक्स!',
      expectedFunction: 'Acknowledge Selection & Conclude Meetup Enthusiastically',
      contextGoal:
        'Express delight that the novel is on the voting ballot, say you look forward to reading everyone\'s thoughts next month, and wish Sean a great evening.',
      targetVocabulary: ['delighted to hear it is on the ballot', 'look forward to next month’s lively discussion', 'see everyone on Thursday', 'have a wonderful evening'],
      suggestedResponses: [
        {
          label: 'Rich Scaffold',
          text: 'I am delighted to hear that! I think everyone will really enjoy discussing the plot twists. I look forward to next month’s meeting on Thursday. Have a wonderful evening, Sean!',
          scaffoldingLevel: 'high',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Farewell & Anticipation',
          patterns: ['delighted', 'glad', 'enjoy', 'look forward', 'next month', 'thursday', 'meeting', 'wonderful evening', 'sean'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_116_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I look forward to ___ (discuss) the book next month."',
        options: [
          { id: 'opt_1', text: 'discussing', isCorrect: true },
          { id: 'opt_2', text: 'discuss', isCorrect: false },
          { id: 'opt_3', text: 'discussed', isCorrect: false },
        ],
        correctAnswer: 'discussing',
        explanation: '"Look forward to" is followed by a gerund (-ing).',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 75,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 70,
  },
};
