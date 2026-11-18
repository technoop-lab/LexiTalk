import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_254: ConversationDefinition = {
  id: 'conv_a2_254',
  title: 'Cross-Cultural Communication & Resolving Misunderstandings',
  cefr: 'A2',
  unitId: 'unit_a2_17',
  lessonLinks: ['lesson_a2_17_254'],
  estimatedMinutes: 5,
  scenario:
    'You are taking part in an international cultural exchange center simulation with counselor Tariq. You examine a cultural misunderstanding involving punctuality and body language, practice diplomatic clarification strategies, use polite repair expressions, and mediate a harmonious resolution between international project teammates.',
  communicativeGoals: [
    'Handle cross-cultural differences in communication, time concepts, and gestures in A2 English',
    'Use diplomatic repair chunks: "Please don’t misunderstand...", "I didn’t mean to cause any offense...", "Could we clarify what happened?"',
    'Explain differing cultural attitudes toward punctuality and directness calmly',
    'Mediate a friendly, respectful agreement between two international colleagues',
  ],
  canDoStatements: [
    'Can recognize and explain simple cultural misunderstandings involving time, tone, or gestures',
    'Can apologize politely and clarify one’s true intention without causing embarrassment',
    'Can mediate a peaceful conversation between two people from different cultural backgrounds',
  ],
  characters: [
    {
      id: 'char_tariq_cultural_counselor',
      name: 'Tariq',
      role: 'Cross-Cultural Communication Facilitator',
      avatar: '🤝',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'misunderstanding',
        ipa: '/ˌmɪsʌndəˈstændɪŋ/',
        partOfSpeech: 'noun',
        meaning: 'A failure to understand something correctly; a disagreement caused by differing interpretations',
        exampleSentence: 'Cultural differences in body language often lead to harmless misunderstandings.',
        translations: { hi: 'गलतफहमी (मिसअंडरस्टैंडिंग)' },
      },
      {
        word: 'clarify',
        ipa: '/ˈklærəfaɪ/',
        partOfSpeech: 'verb',
        meaning: 'To make a statement or situation clear, less confusing, and easily understandable',
        exampleSentence: 'Let us sit down together and clarify our project expectations.',
        translations: { hi: 'स्पष्ट करना (क्लैरिफाइ)' },
      },
      {
        word: 'offense',
        ipa: '/əˈfens/',
        partOfSpeech: 'noun',
        meaning: 'Annoyance or resentment brought about by a perceived insult or breach of etiquette',
        exampleSentence: 'I meant no offense at all; it was simply a difference in cultural habits.',
        translations: { hi: 'बुरा लगना / नाराज़गी / अपमान (ऑफेंस)' },
      },
      {
        word: 'punctuality',
        ipa: '/ˌpʌŋktʃuˈæləti/',
        partOfSpeech: 'noun',
        meaning: 'The quality or habit of adhering to appointed times and arriving promptly',
        exampleSentence: 'Different cultures have slightly different expectations regarding meeting punctuality.',
        translations: { hi: 'समय की पाबंदी (पंक्चुअलिटी)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I didn’t mean to cause any offense...',
        functionCategory: 'Politely apologizing for unintended friction',
        exampleSentence: 'I didn’t mean to cause any offense; I was simply speaking directly.',
      },
      {
        phrase: 'Please allow me to clarify what happened.',
        functionCategory: 'Introducing a calm factual clarification',
        exampleSentence: 'Please allow me to clarify what happened during yesterday’s meeting.',
      },
      {
        phrase: 'In some cultures, it is normal to..., whereas in others...',
        functionCategory: 'Explaining cultural diversity neutrally',
        exampleSentence: 'In some cultures, it is normal to arrive early, whereas in others a ten-minute window is standard.',
      },
      {
        phrase: 'Let’s find a shared agreement moving forward.',
        functionCategory: 'Proposing cooperative alignment',
        exampleSentence: 'Let’s find a shared agreement moving forward so our team communicates smoothly.',
      },
    ],
    grammar: {
      title: 'Diplomatic Language: Past Intentions ("mean to + Verb") & Contrastive Cultural Clauses',
      conceptExplanation:
        '1. Expressing harmless intention: "I didn’t mean to + [base verb]" (e.g. "I didn’t mean to interrupt.")\n2. Neutral cultural explanations: "In culture A... whereas in culture B..."\n3. Polite requests for repair: "Could we clarify...?", "Would you mind if we discussed...?"',
      patternFormula: 'I didn’t mean to + [Base Verb]. In my culture, [Norm A], whereas here [Norm B]. Let us [Action].',
      contrastExamples: [
        {
          incorrect: 'I didn’t meant to be rude.',
          correct: 'I didn’t mean to be rude.',
          explanation: 'After auxiliary "didn’t", use the base form "mean".',
        },
        {
          incorrect: 'He is wrong for being late.',
          correct: 'There was a misunderstanding about meeting times and punctuality.',
          explanation: 'Use constructive neutral phrasing rather than blaming individuals.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Tariq',
        text: 'Welcome to our mediation workshop! Why do cross-cultural misunderstandings occur even when people have good intentions?',
        translation: 'हमारी मध्यस्थता कार्यशाला में आपका स्वागत है! जब लोगों के नेक इरादे होते हैं तब भी क्रॉस-सांस्कृतिक गलतफहमियां क्यों होती हैं?',
      },
      {
        speaker: 'Learner',
        text: 'Because different cultures have diverse habits regarding direct eye contact, punctuality, and formal greetings.',
        translation: 'क्योंकि विभिन्न संस्कृतियों में सीधे आँख मिलाने, समय की पाबंदी और औपचारिक अभिवादन के संबंध में विविध आदतें होती हैं।',
      },
      {
        speaker: 'Tariq',
        text: 'Exactly! How can we resolve such situations with warmth and diplomacy?',
        translation: 'बिल्कुल! हम गर्मजोशी और कूटनीति के साथ ऐसी स्थितियों को कैसे हल कर सकते हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_254_1',
      type: 'fill_blank',
      prompt: 'Complete: "I didn’t ______ (mean / meant / meaning) to cause any offense during our group discussion."',
      options: [
        { id: 'opt_1', text: 'mean', isCorrect: true },
        { id: 'opt_2', text: 'meant', isCorrect: false },
        { id: 'opt_3', text: 'meaning', isCorrect: false },
      ],
      correctAnswer: 'mean',
      explanation: '"Didn’t mean to" uses the base verb form.',
    },
    {
      id: 'cp_254_2',
      type: 'multiple_choice',
      prompt: 'Which sentence best clarifies a cultural misunderstanding diplomatically?',
      options: [
        { id: 'opt_1', text: 'Please allow me to clarify: in my hometown, a firm nod is a sign of deep respect.', isCorrect: true },
        { id: 'opt_2', text: 'You misunderstood me and you are offended for nothing.', isCorrect: false },
        { id: 'opt_3', text: 'I didn’t meant offense you make mistake.', isCorrect: false },
      ],
      correctAnswer: 'Please allow me to clarify: in my hometown, a firm nod is a sign of deep respect.',
      explanation: 'Polite clarification phrase + cultural context explanation.',
    },
    {
      id: 'cp_254_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [Let us find a shared agreement / to ensure smooth communication / across our team]',
      correctAnswer: 'Let us find a shared agreement to ensure smooth communication across our team',
      explanation: 'Action chunk + purpose infinitive + prepositional scope.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_254_1',
      prompt: 'Construct a sentence stating that I didn’t mean to cause offense, so let us clarify our expectations.',
      scenarioContext: 'Diplomatic repair with Tariq.',
      targetStructure: 'I didn’t mean to cause offense, so let us clarify our expectations.',
      wordBank: ['I didn’t mean to', 'cause offense, so', 'let us clarify', 'our expectations.', 'meant to'],
      acceptableSolutions: [
        'I didn’t mean to cause offense, so let us clarify our expectations.',
        'I did not mean to cause offense, so let us clarify our expectations.',
      ],
      explanation: '"I didn’t mean to cause offense" + coordinating clause.',
    },
    {
      id: 'sc_254_2',
      prompt: 'Construct a sentence stating that different cultures have different expectations regarding punctuality.',
      scenarioContext: 'Explaining cultural variation.',
      targetStructure: 'Different cultures have different expectations regarding punctuality.',
      wordBank: ['Different cultures have', 'different expectations', 'regarding punctuality.', 'misunderstandings', 'caused offense'],
      acceptableSolutions: [
        'Different cultures have different expectations regarding punctuality.',
        'Different communities have different expectations regarding punctuality.',
      ],
      explanation: '"regarding [noun]" specifies the topic of cultural variation.',
    },
  ],
  turns: [
    {
      id: 'turn_254_1',
      turnIndex: 1,
      partnerPrompt:
        'Greetings! I am Tariq, your intercultural dialogue coach. In multicultural teams, small differences in tone, gestures, or punctuality can sometimes cause friction. Have you ever experienced or observed a cultural misunderstanding?',
      partnerAudioText:
        'Greetings! I am Tariq, your intercultural dialogue coach. In multicultural teams, small differences in tone, gestures, or punctuality can sometimes cause friction. Have you ever experienced or observed a cultural misunderstanding?',
      partnerQuestionHindi:
        'नमस्कार! मैं तारिक हूँ, आपका अंतर-सांस्कृतिक संवाद कोच। बहुसांस्कृतिक टीमों में, लहजे, हावभाव, या समय की पाबंदी में छोटे अंतर कभी-कभी घर्षण पैदा कर सकते हैं। क्या आपने कभी किसी सांस्कृतिक गलतफहमी का अनुभव या अवलोकन किया है?',
      expectedFunction: 'Greeting Tariq and describing a cultural misunderstanding scenario (punctuality, directness, or body language)',
      contextGoal: 'Greet Tariq, mention a scenario where differing expectations about meeting times or direct communication caused minor confusion',
      targetVocabulary: ['Hello Tariq', 'cultural misunderstanding', 'punctuality', 'differing expectations', 'tone and gestures', 'clarify'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello Tariq! Yes, I observed a situation where team members had different expectations about meeting punctuality. One colleague arrived exactly on the minute, while another thought a ten-minute arrival window was customary.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi Tariq! I once saw a misunderstanding about communication style. A direct email was interpreted as rude, although the writer simply intended to be clear and concise.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good afternoon! I have seen misunderstandings around greetings and eye contact. Different cultures show respect in different ways.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_tariq',
          patterns: ['hello', 'hi', 'tariq', 'good afternoon', 'good morning', 'greetings'],
          required: true,
        },
        {
          name: 'misunderstanding_example',
          patterns: ['misunderstanding', 'punctuality', 'time', 'meeting', 'direct', 'email', 'tone', 'gestures', 'eye contact', 'expectations', 'colleague'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_254_1_punctuality_prep',
          pattern: /punctuality of time/i,
          errorType: 'structure',
          message: 'Use "punctuality" on its own or "meeting punctuality".',
          correctionPattern: 'They had different expectations regarding punctuality.',
        },
      ],
      remediationPractice: {
        id: 'rem_254_1',
        type: 'fill_blank',
        prompt: 'Fill in: "They discussed their expectations regarding ______ (punctuality / punctual)."',
        options: [
          { id: 'r1', text: 'punctuality', isCorrect: true },
          { id: 'r2', text: 'punctual', isCorrect: false },
        ],
        correctAnswer: 'punctuality',
        explanation: 'Noun form "punctuality" after preposition "regarding".',
      },
    },
    {
      id: 'turn_254_2',
      turnIndex: 2,
      partnerPrompt:
        'When tension arises, how can someone apologize and explain their intention without being defensive? What diplomatic phrases work best?',
      partnerAudioText:
        'When tension arises, how can someone apologize and explain their intention without being defensive? What diplomatic phrases work best?',
      partnerQuestionHindi:
        'जब तनाव उत्पन्न होता है, तो कोई व्यक्ति रक्षात्मक (defensive) हुए बिना माफी कैसे मांग सकता है और अपने इरादे को कैसे समझा सकता है? कौन से कूटनीतिक वाक्यांश सबसे अच्छा काम करते हैं?',
      expectedFunction: 'Demonstrating diplomatic repair phrases: "I didn’t mean to cause offense", "Please allow me to clarify", and listening actively',
      contextGoal: 'Explain that using phrases like "I didn’t mean to cause offense" and "Please allow me to clarify" opens a calm dialogue',
      targetVocabulary: ['I didn’t mean to cause any offense', 'Please allow me to clarify', 'open and calm dialogue', 'listen with empathy', 'respectful tone'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'The best approach is to speak calmly and say: "I didn’t mean to cause any offense; please allow me to clarify what I intended." Listening with empathy and asking open questions helps reassure the other person.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'You can say: "I apologize if my words sounded sharp, I meant no disrespect at all. Let us talk through this together so we understand each other."',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'It helps to say: "I did not mean to offend you. Let me explain my perspective, and I would love to hear yours."',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'diplomatic_repair_phrases',
          patterns: ['mean to cause offense', 'allow me to clarify', 'meant no disrespect', 'apologize', 'clarify', 'perspective', 'calmly'],
          required: true,
        },
        {
          name: 'empathy_and_listening',
          patterns: ['listen', 'empathy', 'together', 'understand', 'respectful', 'open questions', 'tone'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_254_2_didnt_meant',
          pattern: /didn't meant/i,
          errorType: 'grammar',
          message: 'Use base verb: "didn’t mean to" (not "didn’t meant").',
          correctionPattern: 'I didn’t mean to cause any offense.',
        },
      ],
      remediationPractice: {
        id: 'rem_254_2',
        type: 'multiple_choice',
        prompt: 'Which sentence uses correct diplomatic grammar?',
        options: [
          { id: 'r1', text: 'I didn’t mean to cause any offense; let us clarify.', isCorrect: true },
          { id: 'r2', text: 'I didn’t meant to causing offense with you.', isCorrect: false },
        ],
        correctAnswer: 'I didn’t mean to cause any offense; let us clarify.',
        explanation: '"Didn’t mean to cause" is the correct structure.',
      },
    },
    {
      id: 'turn_254_3',
      turnIndex: 3,
      partnerPrompt:
        'In our simulation, team member Anna (from Sweden) is upset because teammate Carlos (from Brazil) arrived twenty minutes late to their project planning call. Carlos felt Anna was overly strict. Could you mediate a gentle reconciliation between them?',
      partnerAudioText:
        'In our simulation, team member Anna (from Sweden) is upset because teammate Carlos (from Brazil) arrived twenty minutes late to their project planning call. Carlos felt Anna was overly strict. Could you mediate a gentle reconciliation between them?',
      partnerQuestionHindi:
        'हमारे सिमुलेशन में, टीम की सदस्य अन्ना (स्वीडन से) परेशान हैं क्योंकि टीम के साथी कार्लोस (ब्राजील से) उनकी परियोजना योजना कॉल में बीस मिनट देरी से पहुंचे। कार्लोस को लगा कि अन्ना बहुत सख्त थीं। क्या आप उनके बीच एक सौम्य सुलह की मध्यस्थता (mediate) कर सकते हैं?',
      expectedFunction: 'Mediating a cross-cultural resolution diplomatically, explaining both perspectives and establishing a team agreement',
      contextGoal: 'Explain both sides neutrally: Anna values precise scheduling, Carlos had a different cultural concept of flexibility, and propose a 5-minute update rule',
      targetVocabulary: ['Hello Anna and Carlos', 'cultural misunderstanding', 'different time expectations', 'Carlos meant no disrespect', 'shared team agreement', 'smooth collaboration'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello Anna and Carlos! This is a classic cultural misunderstanding. In Sweden, exact punctuality is a sign of respect, whereas in Brazil, time schedules are often more flexible. Carlos meant no disrespect, and Anna was simply trying to protect team productivity. Moving forward, let’s agree to send a quick text if anyone is delayed by more than five minutes.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello both! Anna values strict time management, while Carlos is used to a more flexible routine. Both intentions are good! Let’s set a clear team guideline so everyone feels respected.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Carlos did not mean to offend Anna, and Anna only wants our project to run on time. Let us agree on meeting times clearly in advance.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'mediation_neutrality',
          patterns: ['anna', 'carlos', 'misunderstanding', 'punctuality', 'respect', 'disrespect', 'flexible', 'sweden', 'brazil', 'intentions'],
          required: true,
        },
        {
          name: 'shared_agreement',
          patterns: ['agree', 'moving forward', 'guideline', 'shared agreement', 'text', 'minutes', 'collaboration', 'advance'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_254_3_blame_assignment',
          pattern: /^carlos is guilty\.$/i,
          errorType: 'interaction',
          message: 'Mediate objectively: "This is a cultural misunderstanding; Anna values punctuality and Carlos meant no disrespect. Let’s establish a shared team rule."',
          correctionPattern: 'Carlos meant no disrespect; let us agree on clear team meeting rules.',
        },
      ],
      remediationPractice: {
        id: 'rem_254_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [Carlos meant no disrespect, / and Anna values punctuality, / so let us establish a shared rule]',
        correctAnswer: 'Carlos meant no disrespect, and Anna values punctuality, so let us establish a shared rule',
        explanation: 'Balanced mediation clause + solution proposal.',
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
