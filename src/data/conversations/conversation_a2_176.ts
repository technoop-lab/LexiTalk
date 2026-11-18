import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_176: ConversationDefinition = {
  id: 'conv_a2_176',
  title: 'Public Speaking, Tech Keynote & Audience Q&A Management',
  cefr: 'A2',
  unitId: 'unit_a2_12',
  lessonLinks: ['lesson_a2_12_176'],
  estimatedMinutes: 5,
  scenario:
    'You are on stage at the European Tech Innovations Summit in London delivering a keynote talk on artificial intelligence in logistics and fielding questions from conference moderator Dr. Julian Vance and the audience. You will structure your presentation smoothly using discourse signposts ("To begin with", "Turning our attention to", "In conclusion"), handle unexpected audience questions politely using stalling strategies and indirect framing ("That is a fascinating question", "To answer that accurately, let us look at..."), and clarify complex concepts concisely.',
  communicativeGoals: [
    'Deliver structured presentation segments with clear presentation discourse markers',
    'Field challenging and technical questions from an audience with professional poise',
    'Use stalling techniques and framing formulas ("That is an insightful question", "Allow me to address that in two parts")',
    'Clarify technical concepts and synthesize presentation takeaways cleanly',
  ],
  canDoStatements: [
    'Can structure a short professional presentation using discourse markers in English',
    'Can respond politely and confidently to questions from an audience',
    'Can use polite stalling phrases to organize thoughts before answering complex questions',
  ],
  characters: [
    {
      id: 'char_julian_vance',
      name: 'Dr. Julian Vance',
      role: 'Conference Moderator & Industry Analyst',
      avatar: '🎤',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'keynote',
        ipa: '/ˈkiːnəʊt/',
        partOfSpeech: 'noun',
        meaning: 'A prevailing tone or central theme; a primary address at a conference',
        exampleSentence: 'Our keynote presentation focused on real-time autonomous routing algorithms.',
        translations: { hi: 'मुख्य भाषण / मुख्य वक्तव्य' },
      },
      {
        word: 'signpost',
        ipa: '/ˈsaɪnpəʊst/',
        partOfSpeech: 'noun',
        meaning: 'A verbal guide indicating the structure or direction of a speech or presentation',
        exampleSentence: 'Using clear signposts helps the audience follow technical transitions smoothly.',
        translations: { hi: 'मार्गदर्शक संकेत / प्रस्तुति दिशा-संकेत' },
      },
      {
        word: 'clarification',
        ipa: '/ˌklærəfɪˈkeɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The action of making a statement or situation less confused and more comprehensible',
        exampleSentence: 'Thank you for that question; allow me to offer a quick technical clarification.',
        translations: { hi: 'स्पष्टीकरण' },
      },
      {
        word: 'perspective',
        ipa: '/pəˈspektɪv/',
        partOfSpeech: 'noun',
        meaning: 'A particular attitude toward or way of regarding something; a point of view',
        exampleSentence: 'From a logistical perspective, predictive maintenance eliminates supply bottlenecks.',
        translations: { hi: 'दृष्टिकोण / परिप्रेक्ष्य' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'To begin with, I would like to outline our three core operational pillars.',
        functionCategory: 'Presentation Discourse Openers',
        exampleSentence: 'To start off, let us look at the market background.',
      },
      {
        phrase: 'Turning our attention to the question of data privacy in automated fleets...',
        functionCategory: 'Transitioning Between Keynote Topics',
        exampleSentence: 'Moving on to our second main finding...',
      },
      {
        phrase: 'That is a very insightful question, and I would be delighted to address it in two parts.',
        functionCategory: 'Polite Audience Q&A Framing & Stalling',
        exampleSentence: 'Thank you for raising that important point.',
      },
      {
        phrase: 'In conclusion, integrating smart sensors reduces delivery latency by forty percent.',
        functionCategory: 'Synthesizing Keynote Conclusions',
        exampleSentence: 'To summarize our key takeaways today...',
      },
    ],
    grammar: {
      title: 'Discourse Markers for Presentations & Polite Stalling Formulas in Q&A',
      conceptExplanation:
        '1. Structural Signposts: \n   - Opening: "To begin with...", "First of all..."\n   - Transitioning: "Turning our attention to...", "Moving on to...", "This brings me to..."\n   - Concluding: "In conclusion...", "To summarize our findings..."\n2. Q&A Stalling and Framing: Buys thinking time while maintaining executive poise:\n   - "That is a fascinating question; allow me to clarify how our system operates."\n   - "To answer that accurately, we must differentiate between X and Y."\n3. Indirect Clarifications: "What this means in practice is...", "The key factor here is...".',
      patternFormula: '[Signpost: Turning to / In conclusion], Clause | That is a [insightful / great] question; allow me to + [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'Now I talk about privacy and you ask me question why it is slow so I tell you.',
          correct: 'Turning our attention to privacy, our system encrypts all telemetry. That is an insightful question regarding latency; allow me to explain.',
          explanation: 'Use professional transition signposts and polite Q&A framing formulas.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Dr. Julian Vance',
        text: 'Thank you for that stimulating keynote! We will now open the floor to questions. How does your automated routing model handle sudden adverse weather disruption?',
        translation: 'उस प्रेरणादायक मुख्य भाषण के लिए धन्यवाद! अब हम दर्शकों के प्रश्नों के लिए मंच खोलेंगे। आपका स्वचालित रूटिंग मॉडल अचानक प्रतिकूल मौसम के व्यवधान को कैसे संभालता है?',
      },
      {
        speaker: 'You',
        text: 'That is an insightful question, Julian. To answer that accurately: our algorithm ingests real-time meteorological feeds and recalculates optimal dispatch routes within five seconds.',
        translation: 'यह एक बहुत ही व्यावहारिक प्रश्न है, जूलियन। इसका सटीक उत्तर देने के लिए: हमारा एल्गोरिदम रीयल-टाइम मौसम संबंधी डेटा प्राप्त करता है और पांच सेकंड के भीतर इष्टतम प्रेषण मार्गों की पुनर्गणना करता है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_176_1',
      type: 'fill_blank',
      prompt: 'Complete the presentation transition: "___ (Turning our attention to / Turn our attention on) our energy efficiency metrics, power consumption dropped by thirty percent."',
      options: [
        { id: 'opt_1', text: 'Turning our attention to', isCorrect: true },
        { id: 'opt_2', text: 'Turn our attention on', isCorrect: false },
        { id: 'opt_3', text: 'To turning attention', isCorrect: false },
      ],
      correctAnswer: 'Turning our attention to',
      explanation: '"Turning our attention to [topic]" is a standard keynote signpost.',
    },
    {
      id: 'cp_a2_176_2',
      type: 'multiple_choice',
      prompt: 'Which phrase is the most professional stalling technique during audience Q&A?',
      options: [
        { id: 'opt_1', text: 'That is a very insightful question; allow me to address that in two parts.', isCorrect: true },
        { id: 'opt_2', text: 'Wait a minute I forgot what to say.', isCorrect: false },
        { id: 'opt_3', text: 'Why are you asking me this difficult thing?', isCorrect: false },
      ],
      correctAnswer: 'That is a very insightful question; allow me to address that in two parts.',
      explanation: 'Provides a confident, polite structure to buy processing time.',
    },
    {
      id: 'cp_a2_176_3',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly introduces a keynote conclusion?',
      options: [
        { id: 'opt_1', text: 'In conclusion, autonomous logistics will transform supply chain resilience over the next decade.', isCorrect: true },
        { id: 'opt_2', text: 'For concluding, autonomous logistics transforms over next decade.', isCorrect: false },
        { id: 'opt_3', text: 'To conclude with, logistics will transforming.', isCorrect: false },
      ],
      correctAnswer: 'In conclusion, autonomous logistics will transform supply chain resilience over the next decade.',
      explanation: '"In conclusion" is the standard formal presentation signpost.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_176_1',
      scenarioContext: 'Transition to a new keynote topic.',
      prompt: 'Build: "Turning our attention to energy consumption our metrics show rapid improvement."',
      targetStructure: 'Turning our attention to energy consumption our metrics show rapid improvement',
      wordBank: ['Turning', 'our', 'attention', 'to', 'energy', 'consumption', 'our', 'metrics', 'show', 'rapid', 'improvement', 'turned', 'at'],
      acceptableSolutions: [
        'Turning our attention to energy consumption, our metrics show rapid improvement.',
        'Turning our attention to energy consumption our metrics show rapid improvement.',
      ],
      explanation: 'Discourse signpost with "Turning our attention to...".',
    },
    {
      id: 'sc_a2_176_2',
      scenarioContext: 'Frame an audience response politely.',
      prompt: 'Build: "That is an insightful question allow me to address that in two parts."',
      targetStructure: 'That is an insightful question allow me to address that in two parts',
      wordBank: ['That', 'is', 'an', 'insightful', 'question', 'allow', 'me', 'to', 'address', 'that', 'in', 'two', 'parts', 'addressing', 'why'],
      acceptableSolutions: [
        'That is an insightful question, allow me to address that in two parts.',
        'That is an insightful question allow me to address that in two parts.',
      ],
      explanation: 'Q&A stalling and structuring formula.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_176_1',
      turnIndex: 1,
      partnerPrompt:
        'Ladies and gentlemen, welcome to the summit stage! Julian Vance here. Let us begin our keynote Q&A. A member of the executive delegation in Row 2 asks: "How does your automated logistics model handle sudden severe weather disruptions across mountainous transport corridors?"',
      partnerAudioText:
        'Ladies and gentlemen, welcome to the summit stage! Julian Vance here. Let us begin our keynote Q&A. A member of the executive delegation in Row 2 asks: "How does your automated logistics model handle sudden severe weather disruptions across mountainous transport corridors?"',
      partnerQuestionHindi:
        'देवियो और सज्जनो, शिखर सम्मेलन के मंच पर आपका स्वागत है! यहाँ जूलियन वेंस हैं। आइए हम अपना मुख्य भाषण प्रश्नोत्तर शुरू करें। पंक्ति 2 में कार्यकारी प्रतिनिधिमंडल के एक सदस्य पूछते हैं: "आपका स्वचालित लॉजिस्टिक्स मॉडल पहाड़ी परिवहन गलियारों में अचानक गंभीर मौसम के व्यवधानों को कैसे संभालता है?"',
      expectedFunction: 'Frame Response with Polite Stalling Formula & Explain Weather Contingency Mechanisms',
      contextGoal:
        'Acknowledge the question as insightful, then explain that the system ingests satellite weather data to reroute autonomous fleets within seconds.',
      targetVocabulary: ['That is an insightful question', 'allow me to address that in two parts', 'satellite meteorological feeds dynamically reroute fleets'],
      suggestedResponses: [
        {
          label: 'Polite Framing & Technical Explanation',
          text: 'That is a very insightful question; thank you. To address that in two parts: first, our platform ingests real-time meteorological satellite feeds; second, our algorithms dynamically recalculate safe alternate routes within three seconds.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Confident Stalling & Direct Clarification',
          text: 'Thank you for raising that crucial challenge. In practice, our autonomous sensors detect atmospheric changes immediately and automatically divert vehicles before hazardous weather peaks.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Polite Q&A Framing (insightful question / thank you / allow me to address / crucial challenge / great question)',
          patterns: ['insightful question', 'thank you', 'allow me to address', 'crucial challenge', 'great question', 'fascinating question'],
          required: true,
        },
        {
          name: 'Weather Response Tech (meteorological / satellite / algorithms / recalculate / reroute / atmospheric / weather / sensors)',
          patterns: ['meteorological', 'satellite', 'algorithms', 'recalculate', 'reroute', 'atmospheric', 'weather', 'sensors', 'routes'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_qa_framing_grammar',
          pattern: 'that is an insightful question allow me addressing|that is good question i will answering',
          errorType: 'grammar',
          message: 'Use "allow me to + base verb": "allow me to address that in two parts."',
          correctionPattern: 'That is an insightful question; allow me to explain',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_176_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Allow me ___ (to address / address) that point clearly."',
        options: [
          { id: 'opt_1', text: 'to address', isCorrect: true },
          { id: 'opt_2', text: 'address', isCorrect: false },
          { id: 'opt_3', text: 'addressing', isCorrect: false },
        ],
        correctAnswer: 'to address',
        explanation: '"Allow me + to-infinitive (to address)".',
      },
    },
    {
      id: 'turn_a2_176_2',
      turnIndex: 2,
      partnerPrompt:
        'Fascinating answer. We have another question from our online streaming audience: "Turning to cybersecurity, if a single autonomous vehicle is compromised, what prevents lateral intrusion into the central dispatch mainframe?"',
      partnerAudioText:
        'Fascinating answer. We have another question from our online streaming audience: "Turning to cybersecurity, if a single autonomous vehicle is compromised, what prevents lateral intrusion into the central dispatch mainframe?"',
      partnerQuestionHindi:
        'दिलचस्प उत्तर। हमारे ऑनलाइन स्ट्रीमिंग दर्शकों की ओर से एक और प्रश्न है: "साइबर सुरक्षा की बात करें तो, यदि एक भी स्वायत्त वाहन से समझौता किया जाता है, तो केंद्रीय प्रेषण मेनफ्रेम में पार्श्व घुसपैठ को क्या रोकता है?"',
      expectedFunction: 'Use Discourse Signpost ("Turning to...") & Explain Zero-Trust Architecture Clearly',
      contextGoal:
        'Explain that each vehicle operates in an isolated zero-trust sandbox, so a compromised unit is disconnected instantly without mainframe risk.',
      targetVocabulary: ['Turning our attention to cybersecurity architecture', 'isolated zero-trust sandboxes', 'prevent lateral network penetration'],
      suggestedResponses: [
        {
          label: 'Signposted Security Architecture Breakdown',
          text: 'Turning to our security architecture, each autonomous unit operates within an isolated zero-trust sandbox. If anomalies are detected, the connection is instantly severed, preventing any lateral intrusion into the central mainframe.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Clear Technical Distinction',
          text: 'That is a vital concern. We employ hardware-level cryptographic isolation. Even if a vehicle node were penetrated, it possesses zero access privileges to our dispatch core.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Discourse Signpost / Intro (turning to / turning our attention / security architecture / vital concern / that is a)',
          patterns: ['turning to', 'turning our attention', 'security architecture', 'vital concern', 'that is a', 'crucial point'],
          required: true,
        },
        {
          name: 'Zero-Trust / Protection (zero-trust / sandbox / isolated / severed / intrusion / mainframe / cryptographic / privileges)',
          patterns: ['zero-trust', 'sandbox', 'isolated', 'severed', 'intrusion', 'mainframe', 'cryptographic', 'privileges', 'disconnected'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_176_2',
        type: 'multiple_choice',
        prompt: 'Which phrase introduces a technical transition most effectively?',
        options: [
          { id: 'opt_1', text: 'Turning our attention to network isolation, each node is protected.', isCorrect: true },
          { id: 'opt_2', text: 'Turn on network isolation now node protected.', isCorrect: false },
          { id: 'opt_3', text: 'To turning network isolation node is safe.', isCorrect: false },
        ],
        correctAnswer: 'Turning our attention to network isolation, each node is protected.',
        explanation: '"Turning our attention to [topic]" creates an articulate, professional transition.',
      },
    },
    {
      id: 'turn_a2_176_3',
      turnIndex: 3,
      partnerPrompt:
        'Our session time is drawing to a close. Could you deliver a concise, powerful concluding synthesis that highlights the ultimate vision and takeaway for our industry delegates today?',
      partnerAudioText:
        'Our session time is drawing to a close. Could you deliver a concise, powerful concluding synthesis that highlights the ultimate vision and takeaway for our industry delegates today?',
      partnerQuestionHindi:
        'हमारे सत्र का समय समाप्त होने वाला है। क्या आप एक संक्षिप्त, शक्तिशाली समापन संश्लेषण दे सकते हैं जो आज हमारे उद्योग प्रतिनिधियों के लिए अंतिम दृष्टि और सीख को उजागर करता है?',
      expectedFunction: 'Deliver Masterful Keynote Conclusion using "In conclusion" and Future Vision',
      contextGoal:
        'Synthesize the presentation using "In conclusion", stating that intelligent automation makes logistics safer, cleaner, and 40% more efficient.',
      targetVocabulary: ['In conclusion, autonomous logistics transforms efficiency', 'safer, sustainable, and reliable transport', 'the future of global supply chains'],
      suggestedResponses: [
        {
          label: 'Masterful Keynote Conclusion',
          text: 'In conclusion, the convergence of real-time AI routing and zero-trust security will make global logistics forty percent more efficient, sustainable, and resilient. Thank you for your time and vision today!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Visionary Synthesis Close',
          text: 'To summarize our core message: intelligent automation is not simply about speed—it is about creating dependable, carbon-neutral supply chains for future generations. Thank you very much!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Conclusion Signpost (in conclusion / to summarize / to conclude / in summary)',
          patterns: ['in conclusion', 'to summarize', 'to conclude', 'in summary'],
          required: true,
        },
        {
          name: 'Vision & Gratitude (efficiency / sustainable / resilient / future / supply chains / automation / thank you)',
          patterns: ['efficiency', 'sustainable', 'resilient', 'future', 'supply chains', 'automation', 'thank you', 'delegates'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_176_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "___ (In conclusion / In the conclude), sustainable transport will shape our future."',
        options: [
          { id: 'opt_1', text: 'In conclusion', isCorrect: true },
          { id: 'opt_2', text: 'In the conclude', isCorrect: false },
          { id: 'opt_3', text: 'To conclude with', isCorrect: false },
        ],
        correctAnswer: 'In conclusion',
        explanation: '"In conclusion" is the correct signpost.',
      },
    },
    {
      id: 'turn_a2_176_4',
      turnIndex: 4,
      partnerPrompt:
        'A tremendous round of applause for our keynote speaker! Thank you for sharing such profound insights and handling the Q&A with supreme mastery. A true highlight of the summit!',
      partnerAudioText:
        'A tremendous round of applause for our keynote speaker! Thank you for sharing such profound insights and handling the Q&A with supreme mastery. A true highlight of the summit!',
      partnerQuestionHindi:
        'हमारे मुख्य वक्ता के लिए जोरदार तालियाँ! इतने गहन विचार साझा करने और सर्वोच्च कुशलता के साथ प्रश्नोत्तर को संभालने के लिए धन्यवाद। शिखर सम्मेलन का एक वास्तविक आकर्षण!',
      expectedFunction: 'Express Gratitude to Audience and Moderator & Conclude Keynote Event',
      contextGoal:
        'Thank Dr. Julian Vance, thank the summit audience, and invite delegates to connect during the networking break.',
      targetVocabulary: ['thank you Julian and thank you to the audience', 'look forward to connecting during the break', 'enjoy the summit'],
      suggestedResponses: [
        {
          label: 'Gracious Keynote Sign-Off',
          text: 'Thank you, Julian, and thank you to everyone in the hall and online! I look forward to continuing our discussions during the networking break. Enjoy the rest of the summit!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Professional Stage Sign-off',
          text: 'It was an absolute honor speaking here today. Thank you for the wonderful engagement and stimulating questions. Have a fantastic conference!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Respect (thank you / thanks / julian / honor / pleasure / applause)',
          patterns: ['thank you', 'thanks', 'julian', 'honor', 'pleasure', 'applause', 'appreciate'],
          required: true,
        },
        {
          name: 'Networking / Summit Close (networking break / break / summit / conference / enjoy / connecting / delegates)',
          patterns: ['networking break', 'break', 'summit', 'conference', 'enjoy', 'connecting', 'delegates', 'hall'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_176_4',
        type: 'multiple_choice',
        prompt: 'Which statement is most appropriate for ending a keynote on stage?',
        options: [
          { id: 'opt_1', text: 'Thank you, Julian, and thank you to our audience. Enjoy the rest of the summit!', isCorrect: true },
          { id: 'opt_2', text: 'Clapping is done I go away.', isCorrect: false },
          { id: 'opt_3', text: 'Bye everyone stage is finished.', isCorrect: false },
        ],
        correctAnswer: 'Thank you, Julian, and thank you to our audience. Enjoy the rest of the summit!',
        explanation: 'Warm, professional, and gracious stage etiquette.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 2,
    targetVocabularyCoveragePct: 60,
  },
};
