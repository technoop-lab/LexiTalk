import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_239: ConversationDefinition = {
  id: 'conv_a2_239',
  title: 'Community Dialogue, Resolving Misunderstandings & Mediation',
  cefr: 'A2',
  unitId: 'unit_a2_16',
  lessonLinks: ['lesson_a2_16_239'],
  estimatedMinutes: 5,
  scenario:
    'You attend a neighborhood mediation circle in the community hall with Anita, a trained community mediator. You discuss resolving noise and parking disputes amicably, expressing needs diplomatically, practicing active listening, and finding constructive compromises.',
  communicativeGoals: [
    'Use diplomatic and polite language to address interpersonal friction ("I understand your perspective, however...", "Could we perhaps consider...?")',
    'Express empathy and active listening using clarifying questions ("What you mean is...", "Am I right in thinking...?")',
    'Propose constructive compromises and mutual agreements using "How about if we..." and "Let’s agree to..."',
    'Demonstrate advanced A2 pragmatic politeness and mediation skills',
  ],
  canDoStatements: [
    'Can mediate minor misunderstandings and neighborly disputes calmly',
    'Can acknowledge other viewpoints and explain personal concerns politely',
    'Can propose compromises and reach mutual, actionable agreements',
  ],
  characters: [
    {
      id: 'char_anita_mediator',
      name: 'Anita',
      role: 'Community Mediator & Conflict Resolution Guide',
      avatar: '🕊️',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'compromise',
        ipa: '/ˈkɒmprəmaɪz/',
        partOfSpeech: 'noun / verb',
        meaning: 'An agreement or settlement of a dispute that is reached by each side making concessions',
        exampleSentence: 'Finding a fair compromise ensures that both neighbors feel respected and heard.',
        translations: { hi: 'समझौता / सुलह (कॉम्प्रोमाइज़)' },
      },
      {
        word: 'perspective',
        ipa: '/pəˈspektɪv/',
        partOfSpeech: 'noun',
        meaning: 'A particular attitude towards or way of regarding something; a point of view',
        exampleSentence: 'Listening to your neighbor’s perspective helps resolve misunderstandings quickly.',
        translations: { hi: 'दृष्टिकोण / नज़रिया (पर्सपेक्टिव)' },
      },
      {
        word: 'amicable',
        ipa: '/ˈæmɪkəbl/',
        partOfSpeech: 'adjective',
        meaning: 'Characterized by friendliness and absence of discord; peaceful and mutually respectful',
        exampleSentence: 'The two residents reached an amicable agreement regarding evening quiet hours.',
        translations: { hi: 'मैत्रीपूर्ण / सौहार्दपूर्ण (एमिकेब्ल)' },
      },
      {
        word: 'misunderstanding',
        ipa: '/ˌmɪsʌndəˈstændɪŋ/',
        partOfSpeech: 'noun',
        meaning: 'A failure to understand something correctly, often causing minor conflict or friction',
        exampleSentence: 'A calm conversation cleared up the misunderstanding about shared parking spaces.',
        translations: { hi: 'गलतफहमी (मिसअंडरस्टैंडिंग)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I understand your perspective; however, we also need to consider quiet hours.',
        functionCategory: 'Diplomatic contrast with "however"',
        exampleSentence: 'I see what you mean, but perhaps we can find a middle ground.',
      },
      {
        phrase: 'Could we perhaps agree on a designated schedule?',
        functionCategory: 'Polite compromise proposal',
        exampleSentence: 'How about if we keep music low after nine in the evening?',
      },
      {
        phrase: 'What I hear you saying is that the noise disturbs your evening study.',
        functionCategory: 'Active listening and summarizing partner concerns',
        exampleSentence: 'Am I correct in understanding that parking access is the main issue?',
      },
      {
        phrase: 'Let’s work together to reach an amicable solution.',
        functionCategory: 'Expressing collaborative goodwill',
        exampleSentence: 'We both want our residential block to remain peaceful and welcoming.',
      },
    ],
    grammar: {
      title: 'Diplomatic Softeners, Conditional Suggestions & "However"',
      conceptExplanation:
        '1. Softening Assertions: Use modals and adverbs like "perhaps", "could we", "would it be possible to..." instead of direct commands.\n2. Contrasting Diplomatically with "However": "[Acknowledgment of other view]; however, [Your concern]."\n3. Proposing Compromises: "How about if we + Present Simple...?" or "What if we agreed to...?"',
      patternFormula: 'I understand [Perspective]; however, [Concern Clause] + Could we perhaps + [Base Verb] to reach a compromise?',
      contrastExamples: [
        {
          incorrect: 'You must stop making noise right now.',
          correct: 'Could we perhaps agree to lower the volume after 10:00 PM?',
          explanation: 'Aggressive commands escalate conflict. Use polite modal suggestions.',
        },
        {
          incorrect: 'I understand you however I am angry.',
          correct: 'I understand your point; however, the late-night noise affects my sleep.',
          explanation: 'Punctuation: use a semicolon or period before "however," followed by a comma.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Anita',
        text: 'Welcome to our Community Mediation workshop! How do you approach misunderstandings when neighbors have conflicting schedules?',
        translation: 'हमारी सामुदायिक मध्यस्थता कार्यशाला में आपका स्वागत है! जब पड़ोसियों के समय में टकराव होता है तो आप गलतफहमियों को कैसे सुलझाते हैं?',
      },
      {
        speaker: 'Learner',
        text: 'Hello Anita! I try to practice active listening. I understand their perspective; however, we need to find an amicable compromise regarding evening noise.',
        translation: 'नमस्ते अनीता! मैं ध्यान से सुनने का अभ्यास करने की कोशिश करता हूँ। मैं उनके दृष्टिकोण को समझता हूँ; हालाँकि, हमें शाम के शोर के संबंध में एक सौहार्दपूर्ण समझौता खोजने की आवश्यकता है।',
      },
      {
        speaker: 'Anita',
        text: 'That is the cornerstone of mediation! Acknowledging the other person’s needs opens the door to mutual respect.',
        translation: 'यही मध्यस्थता की आधारशिला है! दूसरे व्यक्ति की जरूरतों को स्वीकार करने से आपसी सम्मान का रास्ता खुलता है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_239_1',
      type: 'fill_blank',
      prompt: 'Complete with the diplomatic linker: "I understand your point; ______ (however / because), we also need quiet hours."',
      options: [
        { id: 'opt_1', text: 'however', isCorrect: true },
        { id: 'opt_2', text: 'because', isCorrect: false },
        { id: 'opt_3', text: 'so', isCorrect: false },
      ],
      correctAnswer: 'however',
      explanation: 'Use "however" to introduce a polite contrast.',
    },
    {
      id: 'cp_239_2',
      type: 'multiple_choice',
      prompt: 'Which sentence proposes a diplomatic compromise?',
      options: [
        { id: 'opt_1', text: 'Could we perhaps agree on designated quiet hours after 9:30 PM?', isCorrect: true },
        { id: 'opt_2', text: 'You must never make any noise in evening.', isCorrect: false },
        { id: 'opt_3', text: 'Could we agreeing on quiet hours without asking?', isCorrect: false },
      ],
      correctAnswer: 'Could we perhaps agree on designated quiet hours after 9:30 PM?',
      explanation: 'Softening modal "Could we perhaps + base verb" is ideal for mediation.',
    },
    {
      id: 'cp_239_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [Let’s work together / to reach / an amicable compromise / for everyone]',
      correctAnswer: 'Let’s work together to reach an amicable compromise for everyone',
      explanation: 'Collaborative proposal clause.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_239_1',
      prompt: 'Construct a sentence acknowledging your neighbor’s viewpoint while diplomatically expressing your need for evening quiet.',
      scenarioContext: 'Role-playing a neighborly dialogue with Anita.',
      targetStructure: 'I understand your perspective; however, we need to maintain reasonable quiet hours in the evening.',
      wordBank: ['I understand your perspective;', 'however, we need to', 'maintain reasonable quiet hours', 'in the evening,', 'Anita.'],
      acceptableSolutions: [
        'I understand your perspective; however, we need to maintain reasonable quiet hours in the evening.',
        'I see your point; however, we must respect quiet hours.',
      ],
      explanation: 'Diplomatic assertion with "however".',
    },
    {
      id: 'sc_239_2',
      prompt: 'Construct a sentence proposing a mutual compromise where loud activities finish before 9 PM.',
      scenarioContext: 'Reaching a shared agreement.',
      targetStructure: 'Could we perhaps agree that all noisy home repairs conclude before nine o’clock?',
      wordBank: ['Could we perhaps agree', 'that all noisy home', 'repairs conclude before', 'nine o’clock,', 'Anita?'],
      acceptableSolutions: [
        'Could we perhaps agree that all noisy home repairs conclude before nine o’clock?',
        'Could we agree that repairs finish before nine?',
      ],
      explanation: 'Polite modal suggestion with "Could we perhaps agree that...".',
    },
  ],
  turns: [
    {
      id: 'turn_239_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello and welcome to our Community Mediation circle. I’m Anita. In apartment buildings and shared neighborhoods, small misunderstandings over noise or shared spaces happen often. How do you normally handle minor disputes with neighbors?',
      partnerAudioText:
        'Hello and welcome to our Community Mediation circle. I’m Anita. In apartment buildings and shared neighborhoods, small misunderstandings over noise or shared spaces happen often. How do you normally handle minor disputes with neighbors?',
      partnerQuestionHindi:
        'नमस्ते और हमारे सामुदायिक मध्यस्थता सर्कल में आपका स्वागत है। मैं अनीता हूँ। अपार्टमेंट इमारतों और साझा पड़ोस में, शोर या साझा स्थानों पर छोटी-मोटी गलतफहमियाँ अक्सर होती हैं। आप आमतौर पर पड़ोसियों के साथ मामूली विवादों को कैसे संभालते हैं?',
      expectedFunction: 'Greeting Anita and explaining an empathetic, diplomatic approach to resolving misunderstandings',
      contextGoal: 'Greet Anita, explain listening to the neighbor’s perspective first, and using diplomatic communication',
      targetVocabulary: ['Hello Anita', 'misunderstanding', 'perspective', 'however', 'amicable', 'active listening'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello Anita! I believe in calm, direct dialogue. I always listen to the neighbor’s perspective first; however, I explain my concerns politely so that we can reach an amicable compromise.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi Anita! I try to avoid confrontations. Acknowledging their viewpoint and suggesting a fair middle ground usually clears up misunderstandings right away.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good morning, Anita! Active listening and respectful tone are key. Approaching issues with empathy prevents small complaints from turning into big arguments.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_anita',
          patterns: ['hello', 'hi', 'anita', 'good morning'],
          required: true,
        },
        {
          name: 'diplomatic_mediation',
          patterns: ['perspective', 'misunderstanding', 'compromise', 'amicable', 'however', 'listening', 'dialogue', 'polite'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_239_1_however_comma',
          pattern: /however i want/i,
          errorType: 'structure',
          message: 'Punctuate "however" properly: "I understand your point; however, we need quiet hours."',
          correctionPattern: 'I understand their perspective; however, quiet hours are important.',
        },
      ],
      remediationPractice: {
        id: 'rem_239_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I see your point; ______ (however), we must consider our neighbors."',
        options: [
          { id: 'r1', text: 'however', isCorrect: true },
          { id: 'r2', text: 'because of', isCorrect: false },
        ],
        correctAnswer: 'however',
        explanation: 'Use "however" to express contrast.',
      },
    },
    {
      id: 'turn_239_2',
      turnIndex: 2,
      partnerPrompt:
        'Listening with empathy is crucial! Let’s role-play a scenario: A neighbor is practicing the violin late in the evening when you need to sleep for an early morning shift. How would you phrase a polite compromise?',
      partnerAudioText:
        'Listening with empathy is crucial! Let’s role-play a scenario: A neighbor is practicing the violin late in the evening when you need to sleep for an early morning shift. How would you phrase a polite compromise?',
      partnerQuestionHindi:
        'सहानुभूति के साथ सुनना महत्वपूर्ण है! आइए एक परिदृश्य का अभ्यास करें: एक पड़ोसी देर शाम को वायलिन का अभ्यास कर रहा है जब आपको सुबह की जल्दी की पाली के लिए सोने की आवश्यकता होती है। आप एक विनम्र समझौता कैसे करेंगे?',
      expectedFunction: 'Phrasing a diplomatic compromise using "Could we perhaps agree..." or "How about if you..."',
      contextGoal: 'Acknowledge their musical talent, state your early work schedule politely, and propose practicing before 8:30 PM',
      targetVocabulary: ['Could we perhaps agree', 'violin', 'early morning shift', 'how about', 'compromise', 'schedule'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I would say: "Your violin playing is wonderful! However, I have an early morning shift at work. Could we perhaps agree that evening practice finishes by 8:30 PM?"',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: '"I enjoy hearing your music, but I need to sleep early on weekdays. How about if you practice in the late afternoon or use a mute after eight?"',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: '"I understand you need to practice, but could we agree on an earlier time slot so that I can rest for work? That would help immensely."',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'roleplay_compromise',
          patterns: ['could we perhaps agree', 'how about', 'violin', 'early', 'shift', '8:30', '8:00', 'practice', 'compromise'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_239_2_aggressive_tone',
          pattern: /stop playing violin now/i,
          errorType: 'interaction',
          message: 'Use a diplomatic softener: "Could we perhaps agree that violin practice concludes by 8:30 PM?"',
          correctionPattern: 'Could we perhaps agree on an earlier practice schedule?',
        },
      ],
      remediationPractice: {
        id: 'rem_239_2',
        type: 'multiple_choice',
        prompt: 'Which phrase is most diplomatic when resolving a noise complaint?',
        options: [
          { id: 'r1', text: 'Could we perhaps agree to lower the sound after 8:30 PM?', isCorrect: true },
          { id: 'r2', text: 'You have to stop making music immediately.', isCorrect: false },
        ],
        correctAnswer: 'Could we perhaps agree to lower the sound after 8:30 PM?',
        explanation: '"Could we perhaps agree to..." is respectful and collaborative.',
      },
    },
    {
      id: 'turn_239_3',
      turnIndex: 3,
      partnerPrompt:
        'That was phrased with exceptional tact and warmth! Complimenting their music first makes them feel respected rather than attacked. We hold monthly neighborhood mediation role-plays every first Wednesday at 7:00 PM. Would you like to attend the next practice?',
      partnerAudioText:
        'That was phrased with exceptional tact and warmth! Complimenting their music first makes them feel respected rather than attacked. We hold monthly neighborhood mediation role-plays every first Wednesday at 7:00 PM. Would you like to attend the next practice?',
      partnerQuestionHindi:
        'इसे असाधारण चातुर्य और गर्मजोशी के साथ व्यक्त किया गया था! पहले उनके संगीत की प्रशंसा करने से वे खुद को आहत महसूस करने के बजाय सम्मानित महसूस करते हैं। हम हर पहले बुधवार को शाम 7:00 बजे मासिक पड़ोस मध्यस्थता रोल-प्ले आयोजित करते हैं। क्या आप अगले अभ्यास में भाग लेना चाहेंगे?',
      expectedFunction: 'Accepting the mediation circle invite, confirming the Wednesday 7:00 PM schedule, and thanking Anita',
      contextGoal: 'Accept the invite for first Wednesday at 7 PM, express enthusiasm for learning mediation, and thank Anita',
      targetVocabulary: ['Wednesday at 7:00 PM', 'mediation role-play', 'tact', 'Thank you Anita', 'look forward to'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I would be delighted to attend the mediation role-play on the first Wednesday at 7:00 PM! Thank you so much for your guidance and encouragement, Anita.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Count me in for next Wednesday at seven! Practicing diplomatic communication is such a valuable skill for community life. Thanks, Anita!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Thank you, Anita! I look forward to participating on Wednesday at 7:00 PM. Have a wonderful evening!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'acceptance_and_thanks',
          patterns: ['wednesday', '7:00', '7 pm', 'seven', 'delighted', 'thank you', 'anita', 'look forward to'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_239_3_short_reply',
          pattern: /^ok i come wednesday$/i,
          errorType: 'interaction',
          message: 'Provide a complete, courteous closing: "Thank you, Anita! I look forward to Wednesday at 7:00 PM."',
          correctionPattern: 'Thank you, Anita! I would love to join the mediation circle on Wednesday at 7:00 PM.',
        },
      ],
      remediationPractice: {
        id: 'rem_239_3',
        type: 'fill_blank',
        prompt: 'Fill in: "I look forward to ______ (attending) the mediation workshop."',
        options: [
          { id: 'r1', text: 'attending', isCorrect: true },
          { id: 'r2', text: 'attend', isCorrect: false },
        ],
        correctAnswer: 'attending',
        explanation: '"Look forward to" takes a gerund (-ing).',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 70,
  },
};
