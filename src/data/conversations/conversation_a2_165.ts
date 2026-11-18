import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_165: ConversationDefinition = {
  id: 'conv_a2_165',
  title: 'Unit 11 Mastery & Capstone Real-World Simulation',
  cefr: 'A2',
  unitId: 'unit_a2_11',
  lessonLinks: ['lesson_a2_11_165'],
  estimatedMinutes: 6,
  scenario:
    'You are in the examination boardroom at the Cambridge International Language Institute completing your Unit 11 Capstone Oral Mastery Assessment with Chief Examiner Dr. Alistair Montgomery. You will demonstrate complete conversational fluency across all Unit 11 modules: collaborative workplace delegation, constructive feedback with cause linkers, resolving misunderstandings, comparative procurement with intensifiers, social planning, travel narratives with the Past Perfect, environmental forecasts, remote meeting protocols, and diplomatic customer service indirect questions.',
  communicativeGoals: [
    'Demonstrate comprehensive mastery of all communicative and grammatical targets across Unit 11 (Lessons 151–164)',
    'Fluently integrate purpose infinitives ("in order to"), cause linkers ("due to", "since"), and contrastive linkers ("whereas")',
    'Narrate complex sequences using the Past Perfect and narrative time connectors ("by the time", "meanwhile", "eventually")',
    'Employ diplomatic workplace politeness, remote conference management ("be supposed to"), and indirect questions ("Could you tell me if...?") with spontaneous articulation',
  ],
  canDoStatements: [
    'Can confidently perform in multi-turn, multi-topic professional and social real-world simulations at high A2 level',
    'Can accurately switch between past narrative, conditional future, and indirect question registers in spontaneous speech',
    'Can summarize broad conversational achievements and articulate personal language growth with precision',
  ],
  characters: [
    {
      id: 'char_alistair_montgomery',
      name: 'Dr. Alistair Montgomery',
      role: 'Chief Language Examiner',
      avatar: '🎓',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'capstone',
        ipa: '/ˈkæpstəʊn/',
        partOfSpeech: 'noun',
        meaning: 'A crowning achievement or culminating final assessment project',
        exampleSentence: 'This capstone simulation evaluates your complete spoken English competency across Unit 11.',
        translations: { hi: 'चरम उपलब्धि / अंतिम समापन मूल्यांकन' },
      },
      {
        word: 'articulation',
        ipa: '/ɑːˌtɪkjuˈleɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The clear and effective expression of ideas in speech',
        exampleSentence: 'Your clear articulation of indirect questions demonstrated strong proficiency.',
        translations: { hi: 'स्पष्ट अभिव्यक्ति' },
      },
      {
        word: 'competency',
        ipa: '/ˈkɒmpɪtənsi/',
        partOfSpeech: 'noun',
        meaning: 'The ability to do something successfully or efficiently',
        exampleSentence: 'You have shown high communicative competency across professional and daily scenarios.',
        translations: { hi: 'क्षमता / योग्यता' },
      },
      {
        word: 'synthesize',
        ipa: '/ˈsɪnθəsaɪz/',
        partOfSpeech: 'verb',
        meaning: 'To combine a range of different ideas or language structures into a unified whole',
        exampleSentence: 'You can now synthesize past storytelling, future conditionals, and polite negotiation.',
        translations: { hi: 'संश्लेषित करना / समग्र रूप से जोड़ना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'We aligned our team duties in order to launch the platform without delays.',
        functionCategory: 'Workplace Purpose Infinitives (Lesson 151)',
        exampleSentence: 'I organized the files to help the team.',
      },
      {
        phrase: 'By the time we reached the terminal, the flight had already departed.',
        functionCategory: 'Past Perfect Storytelling (Lesson 161)',
        exampleSentence: 'By the time he called, we had left.',
      },
      {
        phrase: 'Could you tell me if the replacement tablet is covered under our warranty?',
        functionCategory: 'Indirect Questions for Customer Service (Lesson 164)',
        exampleSentence: 'Could you tell me when the office opens?',
      },
      {
        phrase: 'We are supposed to keep our microphones muted during remote presentations.',
        functionCategory: 'Remote Meeting Expectations (Lesson 163)',
        exampleSentence: 'You are supposed to arrive early.',
      },
    ],
    grammar: {
      title: 'Unit 11 Full Cumulative Synthesizing Grammar Matrix',
      conceptExplanation:
        '1. Purpose & Reason: "in order to + Base Verb", "due to / because of + Noun Phrase", "since / whereas + Clause".\n2. Comparatives & Intensifiers: "considerably / far / much + Comparative", "not as ... as".\n3. Past Narratives: "By the time + Past Simple, Subject + had + Past Participle", "meanwhile", "eventually".\n4. Environmental & Financial Conditionals: "If + Present Simple, will/might + Base Verb".\n5. Remote Protocols & Indirect Questions: "be supposed to + Base Verb", "Could you tell me if + Subject + Verb?".',
      patternFormula: 'Spontaneous multi-domain application across Unit 11 grammar patterns',
      contrastExamples: [
        {
          incorrect: 'I learned Unit 11 and can speak all lessons together.',
          correct: 'I can organize team projects with purpose infinitives, narrate past travel mishaps using the Past Perfect, and formulate polite indirect questions.',
          explanation: 'Demonstrate articulate mastery across distinct communicative registers.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Dr. Alistair Montgomery',
        text: 'Good day! Welcome to your Unit 11 Capstone Assessment. Let us begin with workplace dynamics: how do you divide responsibilities, resolve misunderstandings, and give constructive feedback?',
        translation: 'शुभ दिन! आपके यूनिट 11 कैपस्टोन मूल्यांकन में आपका स्वागत है। आइए कार्यस्थल की गतिशीलता से शुरुआत करें: आप जिम्मेदारियों को कैसे विभाजित करते हैं, गलतफहमियों को कैसे सुलझाते हैं, और रचनात्मक प्रतिक्रिया कैसे देते हैं?',
      },
      {
        speaker: 'You',
        text: 'I use "in order to" to define shared goals, divide tasks with "whereas", give constructive suggestions using "due to" and "since", and resolve confusion by asking "Could you clarify what you mean by...?"',
        translation: 'मैं साझा लक्ष्यों को परिभाषित करने के लिए "in order to" का उपयोग करता हूँ, "whereas" के साथ कार्यों को विभाजित करता हूँ, "due to" और "since" का उपयोग करके रचनात्मक सुझाव देता हूँ, और "Could you clarify what you mean by...?" पूछकर भ्रम को दूर करता हूँ।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_165_1',
      type: 'fill_blank',
      prompt: 'Complete the synthesis sentence: "We restructured the sprint timeline ___ (in order to / for) launch the app on schedule due to client requests."',
      options: [
        { id: 'opt_1', text: 'in order to', isCorrect: true },
        { id: 'opt_2', text: 'for', isCorrect: false },
        { id: 'opt_3', text: 'so that to', isCorrect: false },
      ],
      correctAnswer: 'in order to',
      explanation: 'Purpose infinitive "in order to + base verb".',
    },
    {
      id: 'cp_a2_165_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly combines a Past Perfect travel narrative with an indirect customer question?',
      options: [
        { id: 'opt_1', text: 'By the time I reached the counter, my train had departed, so I asked: "Could you tell me if I can rebook this ticket?"', isCorrect: true },
        { id: 'opt_2', text: 'By the time I reached, train departed, so I asked could you tell me can I rebook.', isCorrect: false },
        { id: 'opt_3', text: 'Train left when I arrived tell me rebook ticket.', isCorrect: false },
      ],
      correctAnswer: 'By the time I reached the counter, my train had departed, so I asked: "Could you tell me if I can rebook this ticket?"',
      explanation: 'Accurate combination of Past Perfect and indirect question syntax.',
    },
    {
      id: 'cp_a2_165_3',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly states a remote meeting expectation with "be supposed to"?',
      options: [
        { id: 'opt_1', text: 'All participants are supposed to mute their microphones during the keynote address.', isCorrect: true },
        { id: 'opt_2', text: 'All participants suppose to mute.', isCorrect: false },
        { id: 'opt_3', text: 'Participants are supposing to mute.', isCorrect: false },
      ],
      correctAnswer: 'All participants are supposed to mute their microphones during the keynote address.',
      explanation: 'Correct usage of "are supposed to + base verb".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_165_1',
      scenarioContext: 'Form a workplace purpose sentence.',
      prompt: 'Build: "We met in order to finalize our project plan."',
      targetStructure: 'We met in order to finalize + our project plan',
      wordBank: ['We', 'met', 'in', 'order', 'to', 'finalize', 'our', 'project', 'plan', 'finalizing', 'for'],
      acceptableSolutions: [
        'We met in order to finalize our project plan',
        'We met in order to finalize our project plan.',
      ],
      explanation: 'Purpose infinitive "in order to".',
    },
    {
      id: 'sc_a2_165_2',
      scenarioContext: 'Form an indirect inquiry.',
      prompt: 'Build: "Could you tell me if this is covered under warranty?"',
      targetStructure: 'Could you tell me if this is covered + under warranty',
      wordBank: ['Could', 'you', 'tell', 'me', 'if', 'this', 'is', 'covered', 'under', 'warranty', 'do', '?'],
      acceptableSolutions: [
        'Could you tell me if this is covered under warranty',
        'Could you tell me if this is covered under warranty?',
      ],
      explanation: 'Indirect question pattern.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_165_1',
      turnIndex: 1,
      partnerPrompt:
        'Good day! I am Dr. Alistair Montgomery. Welcome to your Unit 11 Capstone Oral Examination. Let us begin with organizational and workplace communication: how do you establish team objectives, provide diplomatic feedback, and resolve interpersonal misunderstandings effectively?',
      partnerAudioText:
        'Good day! I am Dr. Alistair Montgomery. Welcome to your Unit 11 Capstone Oral Examination. Let us begin with organizational and workplace communication: how do you establish team objectives, provide diplomatic feedback, and resolve interpersonal misunderstandings effectively?',
      partnerQuestionHindi:
        'शुभ दिन! मैं डॉ. एलिस्टेयर मोंटगोमरी हूँ। आपके यूनिट 11 कैपस्टोन मौखिक परीक्षा में आपका स्वागत है। आइए संगठनात्मक और कार्यस्थल संचार के साथ शुरुआत करें: आप टीम के उद्देश्यों को कैसे स्थापित करते हैं, राजनयिक प्रतिक्रिया प्रदान करते हैं, और पारस्परिक गलतफहमियों को प्रभावी ढंग से कैसे हल करते हैं?',
      expectedFunction: 'Demonstrate Workplace Collaboration, Cause Linkers & Clarification Strategies (I define goals using "in order to", divide roles with "whereas", give constructive feedback with "due to / since", and clarify misunderstandings with "Could you clarify what you mean by...?")',
      contextGoal:
        'Articulate workplace skills using "in order to", "whereas", "due to / because of", and polite clarification phrases ("Could you clarify what you mean by...?").',
      targetVocabulary: ['purpose infinitives like in order to', 'dividing duties with whereas', 'giving constructive feedback using due to and since', 'Could you clarify what you mean by...?', 'align team objectives'],
      suggestedResponses: [
        {
          label: 'Comprehensive Workplace Synthesis',
          text: 'Good day, Dr. Montgomery. I establish shared objectives using "in order to", divide team responsibilities using "whereas", offer constructive critiques with "due to" and "since", and resolve misunderstandings by politely asking, "Could you clarify what you mean by that?"',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Workplace Synthesis',
          text: 'I use purpose infinitives to plan milestones, contrastive linkers for task delegation, cause markers for feedback, and diplomatic questions to clear up confusion.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Greeting / Professional Framework (good day / dr / montgomery / establish / objectives / goals / collaboration)',
          patterns: ['good day', 'dr', 'montgomery', 'establish', 'objectives', 'goals', 'collaboration', 'workplace', 'team'],
          required: true,
        },
        {
          name: 'Grammar Markers (in order to / whereas / due to / since / clarify / feedback / misunderstandings)',
          patterns: ['in order to', 'whereas', 'due to', 'since', 'clarify', 'feedback', 'misunderstandings', 'purpose', 'roles'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_165_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We aligned our workflow ___ (in order to / for) meet project milestones."',
        options: [
          { id: 'opt_1', text: 'in order to', isCorrect: true },
          { id: 'opt_2', text: 'for', isCorrect: false },
          { id: 'opt_3', text: 'so to', isCorrect: false },
        ],
        correctAnswer: 'in order to',
        explanation: '"In order to" expresses purpose before a base verb.',
      },
    },
    {
      id: 'turn_a2_165_2',
      turnIndex: 2,
      partnerPrompt:
        'Very well articulated. Now, let us examine social coordination and analytical decision-making: how do you compare procurement alternatives using comparative intensifiers, and how do you navigate social event planning and polite refusals?',
      partnerAudioText:
        'Very well articulated. Now, let us examine social coordination and analytical decision-making: how do you compare procurement alternatives using comparative intensifiers, and how do you navigate social event planning and polite refusals?',
      partnerQuestionHindi:
        'बहुत अच्छी तरह से व्यक्त किया गया। अब, आइए सामाजिक समन्वय और विश्लेषणात्मक निर्णय लेने की जांच करें: आप तुलनात्मक गहनताओं का उपयोग करके खरीद विकल्पों की तुलना कैसे करते हैं, और आप सामाजिक कार्यक्रम योजना और विनम्र अस्वीकृति को कैसे प्रबंधित करते हैं?',
      expectedFunction: 'Demonstrate Comparative Intensifiers & Social Etiquette (I compare options using "far / considerably better", arrange gatherings with the Present Continuous, and decline politely using "I’d love to, but I’m afraid...")',
      contextGoal:
        'Explain using "considerably / far better", "not as expensive as", Present Continuous for events ("We are hosting a dinner on Friday"), and polite declines ("I’d love to, but I’m afraid...").',
      targetVocabulary: ['comparative intensifiers like far better and considerably faster', 'not as expensive as', 'Present Continuous for confirmed social events', 'polite excuses with I’d love to but I’m afraid', 'proposing alternative dates'],
      suggestedResponses: [
        {
          label: 'Comparative & Social Synthesis',
          text: 'I compare options using intensifiers like "considerably faster" and "far cheaper", organize gatherings with the Present Continuous like "We are hosting on Friday", and decline invitations diplomatically with "I’d love to, but I’m afraid I have plans."',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Social & Comparative Mastery',
          text: 'I evaluate alternatives using "much better" or "not as costly as", schedule social events with Present Continuous, and offer polite excuses and alternative times.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Comparative Intensifiers (far / considerably / much / not as / better / cheaper / faster / compare)',
          patterns: ['far', 'considerably', 'much', 'not as', 'better', 'cheaper', 'faster', 'compare', 'intensifiers'],
          required: true,
        },
        {
          name: 'Social Planning & Polite Refusals (present continuous / hosting / id love to / afraid / plans / alternative / decline / schedule)',
          patterns: ['present continuous', 'hosting', 'id love to', 'i\'d love to', 'afraid', 'plans', 'alternative', 'decline', 'schedule', 'invitations'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_165_2',
        type: 'multiple_choice',
        prompt: 'Which sentence integrates a comparative intensifier and a polite social decline?',
        options: [
          { id: 'opt_1', text: 'Option A is considerably better, but I’d love to join your dinner if I’m not working late.', isCorrect: true },
          { id: 'opt_2', text: 'Option A is more fast and I come dinner.', isCorrect: false },
          { id: 'opt_3', text: 'I am busy so buy option A.', isCorrect: false },
        ],
        correctAnswer: 'Option A is considerably better, but I’d love to join your dinner if I’m not working late.',
        explanation: 'Accurate pairing of "considerably better" and polite social framing.',
      },
    },
    {
      id: 'turn_a2_165_3',
      turnIndex: 3,
      partnerPrompt:
        'Superb. Moving to past narration and global challenges: how do you structure an engaging travel misadventure using the Past Perfect, and how do you express environmental predictions and personal sustainability commitments?',
      partnerAudioText:
        'Superb. Moving to past narration and global challenges: how do you structure an engaging travel misadventure using the Past Perfect, and how do you express environmental predictions and personal sustainability commitments?',
      partnerQuestionHindi:
        'उत्कृष्ट। पिछले वर्णन और वैश्विक चुनौतियों की ओर बढ़ते हुए: आप पास्ट परफेक्ट का उपयोग करके एक आकर्षक यात्रा दुर्घटना की संरचना कैसे करते हैं, और आप पर्यावरणीय भविष्यवाणियों और व्यक्तिगत स्थिरता प्रतिबद्धताओं को कैसे व्यक्त करते हैं?',
      expectedFunction: 'Demonstrate Past Perfect Narratives & Environmental Predictions (I use "by the time + had departed" for past sequencing, "meanwhile / eventually" for progression, and "will probably / if we compost" for sustainability)',
      contextGoal:
        'Demonstrate Past Perfect narrative structure ("By the time we arrived, the bus had left"), narrative connectors ("meanwhile", "eventually"), and environmental First Conditionals ("If we reduce plastic, oceans will be cleaner").',
      targetVocabulary: ['Past Perfect with by the time the train had departed', 'narrative markers like meanwhile and eventually', 'environmental First Conditionals', 'future trends with will probably and might', 'sustainable daily habits like composting'],
      suggestedResponses: [
        {
          label: 'Past Perfect & Environmental Synthesis',
          text: 'I sequence travel stories using the Past Perfect, such as "By the time we arrived, the train had already departed," and resolve them with "meanwhile" and "eventually." For the environment, I use First Conditionals and modals: "If we compost and eliminate single-use plastics, landfill waste will probably drop by 30%."',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Narrative & Eco Synthesis',
          text: 'I narrate travel misadventures with Past Perfect and "by the time", while using "will probably" and First Conditionals to discuss sustainability and renewable energy.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Past Perfect & Narrative Connectors (past perfect / had / by the time / departed / left / meanwhile / eventually / story / travel)',
          patterns: ['past perfect', 'had', 'by the time', 'departed', 'left', 'meanwhile', 'eventually', 'story', 'travel', 'misadventure'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_165_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "By the time we reached the hostel, the reception ___ (had closed / has closed)."',
        options: [
          { id: 'opt_1', text: 'had closed', isCorrect: true },
          { id: 'opt_2', text: 'has closed', isCorrect: false },
          { id: 'opt_3', text: 'is closed', isCorrect: false },
        ],
        correctAnswer: 'had closed',
        explanation: 'Use Past Perfect for the action preceding arrival.',
      },
    },
    {
      id: 'turn_a2_165_4',
      turnIndex: 4,
      partnerPrompt:
        'Remarkable breadth and precision. To conclude your Capstone: how do you manage remote video conference etiquette and digital troubleshooting, and how do you employ indirect questions in customer service negotiations? Please present your comprehensive Unit 11 summary.',
      partnerAudioText:
        'Remarkable breadth and precision. To conclude your Capstone: how do you manage remote video conference etiquette and digital troubleshooting, and how do you employ indirect questions in customer service negotiations? Please present your comprehensive Unit 11 summary.',
      partnerQuestionHindi:
        'उल्लेखनीय विस्तार और सटीकता। अपने कैपस्टोन को समाप्त करने के लिए: आप दूरस्थ वीडियो कॉन्फ्रेंस शिष्टाचार और डिजिटल समस्या निवारण का प्रबंधन कैसे करते हैं, और आप ग्राहक सेवा बातचीत में अप्रत्यक्ष प्रश्नों का उपयोग कैसे करते हैं? कृपया अपना व्यापक यूनिट 11 सारांश प्रस्तुत करें।',
      expectedFunction: 'Synthesize Remote Protocols, Indirect Questions & Full Unit 11 Summary (We use "be supposed to" and "would you mind" for remote meetings / "Could you tell me if...?" for customer service / Summarize complete Unit 11 mastery)',
      contextGoal:
        'Explain remote etiquette ("be supposed to mute mics", "would you mind sharing screen"), indirect questions ("Could you tell me if I can exchange this tablet?"), summarize Unit 11 mastery, and thank Dr. Montgomery.',
      targetVocabulary: ['remote expectations with be supposed to', 'polite requests with would you mind sharing your screen', 'indirect questions like Could you tell me if...?', 'comprehensive Unit 11 synthesis', 'complete mastery of advanced A2 communication', 'thank you Dr. Montgomery'],
      suggestedResponses: [
        {
          label: 'Capstone Mastery Summary',
          text: 'To summarize my complete Unit 11 mastery: in digital settings, we use "be supposed to" for protocols and "would you mind sharing your screen" to resolve lag. In customer service, I use indirect questions like "Could you tell me if this is covered under warranty?" to negotiate politely. Across all 15 lessons, I have mastered workplace collaboration, comparative procurement, past narratives, environmental forecasts, and diplomatic negotiation. Thank you, Dr. Montgomery!',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Capstone Summary',
          text: 'In summary, I manage remote meetings with "be supposed to", handle customer returns with indirect questions, and integrate all Unit 11 grammar smoothly. Thank you for this assessment, Dr. Montgomery!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Summary Signpost & Capstone (to summarize / in summary / summary / capstone / unit 11 / mastery / so)',
          patterns: ['to summarize', 'in summary', 'summary', 'capstone', 'unit 11', 'mastery', 'so', 'synthesize'],
          required: true,
        },
        {
          name: 'Digital & Customer Skills (supposed to / would you mind / screen / indirect / could you tell me / warranty / thank you / dr / montgomery)',
          patterns: ['supposed to', 'would you mind', 'screen', 'indirect', 'could you tell me', 'warranty', 'thank you', 'dr', 'montgomery', 'thanks'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_165_4',
        type: 'multiple_choice',
        prompt: 'Which capstone summary demonstrates complete mastery across Unit 11?',
        options: [
          { id: 'opt_1', text: 'To summarize, I have mastered workplace collaboration, past travel narratives, environmental conditionals, remote etiquette, and indirect customer questions. Thank you, Dr. Montgomery!', isCorrect: true },
          { id: 'opt_2', text: 'I am done with test bye.', isCorrect: false },
          { id: 'opt_3', text: 'English is okay.', isCorrect: false },
        ],
        correctAnswer: 'To summarize, I have mastered workplace collaboration, past travel narratives, environmental conditionals, remote etiquette, and indirect customer questions. Thank you, Dr. Montgomery!',
        explanation: 'Comprehensive, polished, and polite capstone synthesis.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 85,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 70,
  },
};
