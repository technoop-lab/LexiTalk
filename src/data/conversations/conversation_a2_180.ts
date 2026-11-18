import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_180: ConversationDefinition = {
  id: 'conv_a2_180',
  title: 'A2 Capstone: The Global Enterprise Summit & Strategic Mastery',
  cefr: 'A2',
  unitId: 'unit_a2_12',
  lessonLinks: ['lesson_a2_12_180'],
  estimatedMinutes: 5,
  scenario:
    'You are in the Grand Hall of the Royal International Centre in London participating in the culminating A2 Capstone Summit before Chief Executive Officer Sir Richard Hawthorne, Senior VP Helena Scott, and an international panel of industry leaders. In this comprehensive evaluation, you will synthesize everything mastered across Units 7–12: negotiating strategic terms, presenting future-proof technical roadmaps using Future Perfect and Continuous, handling unexpected crisis scenarios with passive reporting, and articulating long-term corporate vision with consummate executive fluency.',
  communicativeGoals: [
    'Demonstrate mastery across all core A2 business and technical communication competencies',
    'Synthesize complex operational, financial, and architectural data into an articulate presentation',
    'Switch seamlessly between negotiation counter-proposals, crisis management, and long-term roadmapping',
    'Converse with executive poise, impeccable discourse signposts, and natural communicative fluency',
  ],
  canDoStatements: [
    'Can handle a multi-turn, multi-stakeholder executive conversation covering business negotiations, roadmaps, and crisis response in English',
    'Can use the full range of A2 grammatical structures (Conditionals, Passive Voice, Present Perfect, Future Perfect, Modal Softeners) accurately',
    'Can confidently achieve A2 Living Language CEFR mastery certification',
  ],
  characters: [
    {
      id: 'char_sir_richard_hawthorne',
      name: 'Sir Richard Hawthorne',
      role: 'Group Chief Executive Officer',
      avatar: '👑',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'culmination',
        ipa: '/ˌkʌlmɪˈneɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The highest or climactic point of something, especially as attained after a long time',
        exampleSentence: 'Today’s summit marks the culmination of our global transformation journey.',
        translations: { hi: 'चरमोत्कर्ष / पूर्णता' },
      },
      {
        word: 'transformative',
        ipa: '/trænsˈfɔːmətɪv/',
        partOfSpeech: 'adjective',
        meaning: 'Causing a marked change in someone or something',
        exampleSentence: 'Our multi-year strategy has delivered transformative growth across all business units.',
        translations: { hi: 'परिवर्तनकारी' },
      },
      {
        word: 'resilience',
        ipa: '/rɪˈzɪliəns/',
        partOfSpeech: 'noun',
        meaning: 'The capacity to withstand or to recover quickly from difficulties; toughness',
        exampleSentence: 'Demonstrating operational resilience is essential during unforeseen market volatility.',
        translations: { hi: 'लचीलापन / संकट-सहनशीलता' },
      },
      {
        word: 'visionary',
        ipa: '/ˈvɪʒənri/',
        partOfSpeech: 'adjective',
        meaning: 'Thinking about or planning the future with imagination or wisdom',
        exampleSentence: 'A visionary leader inspires cross-functional teams toward shared excellence.',
        translations: { hi: 'दूरदर्शी' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'To synthesize our journey from foundational architecture to global scale...',
        functionCategory: 'Capstone Synthesis Opener',
        exampleSentence: 'To synthesize our accomplishments across all twelve units...',
      },
      {
        phrase: 'By 2029, we will have established a fully integrated, carbon-neutral enterprise ecosystem.',
        functionCategory: 'Future Perfect Vision Statement',
        exampleSentence: 'By next year, we will have reached our full potential.',
      },
      {
        phrase: 'If unforeseen market disruptions occurred, our zero-trust architecture would safeguard continuity.',
        functionCategory: 'Second Conditional Resilience Formulation',
        exampleSentence: 'If supply chains shifted, we would adapt instantly.',
      },
      {
        phrase: 'I am honored to present this culmination of our strategic achievements to the executive panel.',
        functionCategory: 'Executive Capstone Sign-off & Celebration',
        exampleSentence: 'Thank you for this incredible opportunity.',
      },
    ],
    grammar: {
      title: 'Comprehensive A2 Synthesis: Integration of Conditionals, Passives, Perfects & Discourse Markers',
      conceptExplanation:
        '1. Synthesis of All A2 Tenses: \n   - Present Perfect ("We have transformed our operations")\n   - Second Conditional ("If challenges arose, we would overcome them")\n   - Passive Modals ("Standards must be upheld at all times")\n   - Future Perfect & Continuous ("By 2030, we will have scaled, and our systems will be serving millions")\n2. Discourse Signposting: Seamless transitions ("To begin with", "Turning our attention to", "Furthermore", "In conclusion").\n3. Executive Tone & Fluency: Confident, empathetic, and culturally aware English.',
      patternFormula: '[Discourse Signpost] + [Integrated A2 Grammar Structure (Perfect / Passive / Conditional)]',
      contrastExamples: [
        {
          incorrect: 'I finish all lessons now I am talking to CEO about everything.',
          correct: 'To synthesize our overarching achievements, we have unified our global strategy, and by 2029, we will have established industry-leading resilience.',
          explanation: 'Combine advanced discourse signposts with synthesized tenses for capstone mastery.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Sir Richard Hawthorne',
        text: 'Welcome to the A2 Capstone Summit! Over the past twelve units, you have demonstrated exceptional mastery across international trade, architecture, crisis management, and executive strategy. What is your definitive vision for our global enterprise?',
        translation: 'A2 कैपस्टोन शिखर सम्मेलन में आपका स्वागत है! पिछले बारह इकाइयों में, आपने अंतर्राष्ट्रीय व्यापार, वास्तुकला, संकट प्रबंधन और कार्यकारी रणनीति में असाधारण महारत का प्रदर्शन किया है। हमारे वैश्विक उद्यम के लिए आपका अंतिम दृष्टिकोण क्या है?',
      },
      {
        speaker: 'You',
        text: 'Thank you, Sir Richard. To synthesize our vision: we have established a resilient foundation, and by 2029, we will have expanded across twenty global hubs while maintaining carbon-neutral operations.',
        translation: 'धन्यवाद, सर रिचर्ड। हमारी दृष्टि को संश्लेषित करने के लिए: हमने एक लचीली नींव स्थापित की है, और 2029 तक, हम कार्बन-तटस्थ संचालन को बनाए रखते हुए बीस वैश्विक केंद्रों में विस्तार कर चुके होंगे।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_180_1',
      type: 'fill_blank',
      prompt: 'Complete the capstone synthesis: "Over the past twelve units, we ___ (have mastered / mastered) comprehensive business communication, and by next year, we ___ (will have scaled / will scale) our operations globally."',
      options: [
        { id: 'opt_1', text: 'have mastered / will have scaled', isCorrect: true },
        { id: 'opt_2', text: 'mastered / will scale', isCorrect: false },
        { id: 'opt_3', text: 'are mastering / scale', isCorrect: false },
      ],
      correctAnswer: 'have mastered / will have scaled',
      explanation: 'Integrates Present Perfect for past cumulative learning and Future Perfect for future milestones.',
    },
    {
      id: 'cp_a2_180_2',
      type: 'multiple_choice',
      prompt: 'Which sentence demonstrates the highest level of A2 executive communicative competence?',
      options: [
        { id: 'opt_1', text: 'To synthesize our strategic position: although challenges exist, if we modernized our core systems, we would achieve thirty percent higher efficiency.', isCorrect: true },
        { id: 'opt_2', text: 'Everything is good and I know English very well now.', isCorrect: false },
        { id: 'opt_3', text: 'We make business and get money by doing work.', isCorrect: false },
      ],
      correctAnswer: 'To synthesize our strategic position: although challenges exist, if we modernized our core systems, we would achieve thirty percent higher efficiency.',
      explanation: 'Combines discourse signposts, contrastive conjunctions, and Second Conditional hypothetical reasoning.',
    },
    {
      id: 'cp_a2_180_3',
      type: 'multiple_choice',
      prompt: 'Which statement accurately represents the full A2 Living Language milestone achievement?',
      options: [
        { id: 'opt_1', text: 'I am honored to achieve A2 Living Language certification and am ready to lead global conversations with confidence.', isCorrect: true },
        { id: 'opt_2', text: 'I finished the test now give me paper.', isCorrect: false },
        { id: 'opt_3', text: 'A2 is done bye bye.', isCorrect: false },
      ],
      correctAnswer: 'I am honored to achieve A2 Living Language certification and am ready to lead global conversations with confidence.',
      explanation: 'Reflects authentic communicative pride and readiness for advanced fluency.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_180_1',
      scenarioContext: 'Synthesize overarching strategic vision.',
      prompt: 'Build: "To synthesize our vision we have established a resilient foundation."',
      targetStructure: 'To synthesize our vision we have established a resilient foundation',
      wordBank: ['To', 'synthesize', 'our', 'vision', 'we', 'have', 'established', 'a', 'resilient', 'foundation', 'synthesizing', 'was'],
      acceptableSolutions: [
        'To synthesize our vision, we have established a resilient foundation.',
        'To synthesize our vision we have established a resilient foundation.',
      ],
      explanation: 'Capstone synthesis formula with "To synthesize...".',
    },
    {
      id: 'sc_a2_180_2',
      scenarioContext: 'Project future enterprise scale.',
      prompt: 'Build: "By 2029 we will have expanded across twenty global hubs."',
      targetStructure: 'By 2029 we will have expanded across twenty global hubs',
      wordBank: ['By', '2029', 'we', 'will', 'have', 'expanded', 'across', 'twenty', 'global', 'hubs', 'expanding', 'did'],
      acceptableSolutions: [
        'By 2029 we will have expanded across twenty global hubs.',
        'By 2029, we will have expanded across twenty global hubs.',
      ],
      explanation: 'Future Perfect structure for long-term strategic projection.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_180_1',
      turnIndex: 1,
      partnerPrompt:
        'Welcome to the A2 Grand Capstone Summit, colleagues and distinguished guests! Sir Richard Hawthorne presiding. Today marks your final comprehensive examination. Could you open this session with an overarching synthesis of how your strategic, operational, and technological capabilities have evolved across our enterprise journey?',
      partnerAudioText:
        'Welcome to the A2 Grand Capstone Summit, colleagues and distinguished guests! Sir Richard Hawthorne presiding. Today marks your final comprehensive examination. Could you open this session with an overarching synthesis of how your strategic, operational, and technological capabilities have evolved across our enterprise journey?',
      partnerQuestionHindi:
        'ए2 ग्रैंड कैपस्टोन शिखर सम्मेलन में आपका स्वागत है, सहकर्मियों और विशिष्ट अतिथियों! सर रिचर्ड हॉथोर्न अध्यक्षता कर रहे हैं। आज आपकी अंतिम व्यापक परीक्षा है। क्या आप इस सत्र की शुरुआत इस बात के व्यापक सारांश के साथ कर सकते हैं कि हमारी उद्यम यात्रा के दौरान आपकी रणनीतिक, परिचालन और तकनीकी क्षमताएं कैसे विकसित हुई हैं?',
      expectedFunction: 'Deliver Masterful Capstone Opening Synthesis Integrating Present Perfect & Strategic Signposts',
      contextGoal:
        'Synthesize your comprehensive progression across all 12 units, stating that you have built a resilient, scalable, and cross-culturally inclusive enterprise foundation.',
      targetVocabulary: ['To synthesize our overarching enterprise journey', 'we have established a resilient and scalable foundation', 'fostered cross-cultural collaboration and high performance'],
      suggestedResponses: [
        {
          label: 'Masterful Capstone Opening (Full Synthesis)',
          text: 'Thank you, Sir Richard. To synthesize our journey: over the past twelve units, we have successfully modernized our core infrastructure, forged resilient international partnerships, and fostered a high-trust, culturally inclusive workplace across all global hubs.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Comprehensive Strategic Overview',
          text: 'To summarize our enterprise evolution: we have eliminated operational bottlenecks, achieved record operating margins, and proven our ability to navigate unexpected crises with total transparency and poise.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Synthesis Opener (to synthesize / to summarize / sir richard / journey / evolution / overarching / capstone)',
          patterns: ['to synthesize', 'to summarize', 'sir richard', 'journey', 'evolution', 'overarching', 'capstone'],
          required: true,
        },
        {
          name: 'Comprehensive Capabilities (modernized / infrastructure / international / inclusive / margins / bottlenecks / resilient / foundation)',
          patterns: ['modernized', 'infrastructure', 'international', 'inclusive', 'margins', 'bottlenecks', 'resilient', 'foundation', 'crises'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_capstone_opening_colloquial',
          pattern: 'i finished all units and now i am talking to you sir richard',
          errorType: 'interaction',
          message: 'Elevate your capstone synthesis with formal executive discourse: "To synthesize our journey, we have established..."',
          correctionPattern: 'To synthesize our journey, we have established a resilient foundation',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_180_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "To synthesize our progress, we ___ (have achieved / achieved) record operational efficiency."',
        options: [
          { id: 'opt_1', text: 'have achieved', isCorrect: true },
          { id: 'opt_2', text: 'achieved', isCorrect: false },
          { id: 'opt_3', text: 'are achieve', isCorrect: false },
        ],
        correctAnswer: 'have achieved',
        explanation: 'Use Present Perfect ("have achieved") for cumulative achievements.',
      },
    },
    {
      id: 'turn_a2_180_2',
      turnIndex: 2,
      partnerPrompt:
        'A magnificent opening. Now consider an unexpected scenario: if our main European logistics corridor faced a severe geopolitical disruption, how would your crisis protocols and second conditional contingency plans safeguard continuity?',
      partnerAudioText:
        'A magnificent opening. Now consider an unexpected scenario: if our main European logistics corridor faced a severe geopolitical disruption, how would your crisis protocols and second conditional contingency plans safeguard continuity?',
      partnerQuestionHindi:
        'एक शानदार शुरुआत। अब एक अप्रत्याशित परिदृश्य पर विचार करें: यदि हमारे मुख्य यूरोपीय लॉजिस्टिक्स गलियारे को गंभीर भू-राजनीतिक व्यवधान का सामना करना पड़ता है, तो आपके संकट प्रोटोकॉल और द्वितीय सशर्त आकस्मिक योजनाएं निरंतरता की सुरक्षा कैसे करेंगी?',
      expectedFunction: 'Formulate Second Conditional Crisis Contingency with Passive Safety Safeguards',
      contextGoal:
        'Explain that if a major corridor disruption occurred, freight traffic would be rerouted immediately through secondary maritime hubs with zero supply chain breakdown.',
      targetVocabulary: ['If a major disruption occurred, we would activate', 'freight would be rerouted immediately', 'safeguard complete supply chain continuity'],
      suggestedResponses: [
        {
          label: 'Second Conditional Crisis Contingency',
          text: 'If a major corridor disruption occurred, we would activate our pre-negotiated multimodal routing within thirty minutes. Cargo would be rerouted immediately through secondary maritime hubs, ensuring zero supply chain interruption.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Resilience & Automated Redundancy',
          text: 'If unexpected geopolitical bottlenecks arose, our automated supplier network would dynamically redistribute inventory. Furthermore, all clients would be notified via live status bulletins to maintain absolute transparency.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Second Conditional Formula (if a disruption occurred / if bottlenecks arose / would activate / would be rerouted / would redistribute / occurred)',
          patterns: ['if a disruption occurred', 'if bottlenecks arose', 'would activate', 'would be rerouted', 'would redistribute', 'occurred', 'arose', 'would'],
          required: true,
        },
        {
          name: 'Contingency Actions (multimodal / rerouted / maritime / inventory / transparency / supply chain / thirty minutes / contingency)',
          patterns: ['multimodal', 'rerouted', 'maritime', 'inventory', 'transparency', 'supply chain', 'thirty minutes', 'contingency', 'bulletins'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_second_cond_capstone',
          pattern: 'if a disruption will occur we will reroute|if disruption occurs we would reroute',
          errorType: 'grammar',
          message: 'Second Conditional rule: "If + Past Simple (occurred), Subject + would + Base Verb (reroute / activate)".',
          correctionPattern: 'If a disruption occurred, we would reroute all cargo immediately',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_180_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly formulates a hypothetical contingency plan?',
        options: [
          { id: 'opt_1', text: 'If a corridor closed, we would activate alternate maritime routes immediately.', isCorrect: true },
          { id: 'opt_2', text: 'If a corridor closed, we will activate alternate routes.', isCorrect: false },
          { id: 'opt_3', text: 'If a corridor close, we would activating alternate routes.', isCorrect: false },
        ],
        correctAnswer: 'If a corridor closed, we would activate alternate maritime routes immediately.',
        explanation: 'Accurate Second Conditional: "If + past simple (closed), would + base verb (activate)".',
      },
    },
    {
      id: 'turn_a2_180_3',
      turnIndex: 3,
      partnerPrompt:
        'Flawless strategic agility! Finally, looking out over the next three to five years: what ultimate milestones will this enterprise have achieved under your stewardship by 2030?',
      partnerAudioText:
        'Flawless strategic agility! Finally, looking out over the next three to five years: what ultimate milestones will this enterprise have achieved under your stewardship by 2030?',
      partnerQuestionHindi:
        'त्रुटिहीन रणनीतिक चपलता! अंत में, अगले तीन से पांच वर्षों को देखते हुए: 2030 तक आपके नेतृत्व में यह उद्यम कौन से अंतिम मील के पत्थर हासिल कर चुका होगा?',
      expectedFunction: 'Articulate Future Perfect Vision & Ongoing Future Continuous Excellence',
      contextGoal:
        'State that by 2030, you will have unified operations across 30 nations, and the platform will be operating with 100% net-zero emissions.',
      targetVocabulary: ['By 2030, we will have unified operations', 'will be operating with one hundred percent net-zero emissions', 'sustainable global market leadership'],
      suggestedResponses: [
        {
          label: 'Visionary Future Perfect & Future Continuous Milestones',
          text: 'By 2030, we will have unified our operations across thirty international markets, and our cloud infrastructure will be operating with one hundred percent net-zero carbon emissions, setting the benchmark for sustainable enterprise leadership.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Global Expansion & Innovation Milestone',
          text: 'By the end of the decade, we will have empowered over one million enterprise users, and our global teams will be driving autonomous innovation with unwavering ethical governance.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Future Perfect Milestone (by 2030 / by the end of the decade / will have unified / will have empowered / will have expanded)',
          patterns: ['by 2030', 'by the end of the decade', 'will have unified', 'will have empowered', 'will have expanded', 'will have achieved'],
          required: true,
        },
        {
          name: 'Future Continuous State (will be operating / will be driving / net-zero / carbon emissions / thirty international / thirty nations / sustainable)',
          patterns: ['will be operating', 'will be driving', 'net-zero', 'carbon emissions', 'thirty international', 'thirty nations', 'sustainable', 'governance'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_180_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "By 2030, we ___ (will have unified / will have unify) global operations."',
        options: [
          { id: 'opt_1', text: 'will have unified', isCorrect: true },
          { id: 'opt_2', text: 'will have unify', isCorrect: false },
          { id: 'opt_3', text: 'will unifying', isCorrect: false },
        ],
        correctAnswer: 'will have unified',
        explanation: 'Future Perfect: "will have + past participle (unified)".',
      },
    },
    {
      id: 'turn_a2_180_4',
      turnIndex: 4,
      partnerPrompt:
        'Sensational! On behalf of the Board of Directors, executive leadership, and the entire Living Language panel, I hereby confer upon you the A2 CEFR Living Language Mastery Certification! You have demonstrated true linguistic brilliance, technical precision, and executive leadership. Congratulations!',
      partnerAudioText:
        'Sensational! On behalf of the Board of Directors, executive leadership, and the entire Living Language panel, I hereby confer upon you the A2 CEFR Living Language Mastery Certification! You have demonstrated true linguistic brilliance, technical precision, and executive leadership. Congratulations!',
      partnerQuestionHindi:
        'शानदार! निदेशक मंडल, कार्यकारी नेतृत्व और संपूर्ण लिविंग लैंग्वेज पैनल की ओर से, मैं आपको ए2 सीईएफआर लिविंग लैंग्वेज मास्टरी प्रमाणन प्रदान करता हूँ! आपने वास्तविक भाषाई प्रतिभा, तकनीकी सटीकता और कार्यकारी नेतृत्व का प्रदर्शन किया है। बधाई हो!',
      expectedFunction: 'Accept Certification with Gracious Executive Eloquence & Conclude A2 Living Language Program',
      contextGoal:
        'Accept the A2 Certification with profound gratitude to Sir Richard, the mentors, and express excitement for B1 and beyond.',
      targetVocabulary: ['honored to receive the A2 CEFR Certification', 'thank you Sir Richard and distinguished mentors', 'ready to champion communication at the highest level'],
      suggestedResponses: [
        {
          label: 'Gracious Capstone Certification Acceptance',
          text: 'Thank you very much, Sir Richard, and thank you to the distinguished panel and mentors. I am deeply honored to receive the A2 CEFR Living Language Certification. I look forward to applying these skills and advancing to higher levels of global leadership!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Triumphant Grand Finale',
          text: 'Thank you for this incredible recognition and guidance. This journey across all twelve units has been truly transformative. I am excited to champion communicative excellence in every arena. Have a wonderful day!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Honor (thank you / sir richard / distinguished / honored / receive / recognition / appreciation)',
          patterns: ['thank you', 'sir richard', 'distinguished', 'honored', 'receive', 'recognition', 'appreciation', 'thanks'],
          required: true,
        },
        {
          name: 'Certification & Future Journey (a2 / certification / living language / transformative / global leadership / excellence / journey)',
          patterns: ['a2', 'certification', 'living language', 'transformative', 'global leadership', 'excellence', 'journey', 'twelve units'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_180_4',
        type: 'multiple_choice',
        prompt: 'Which statement is the most fitting response to receiving the A2 Living Language Capstone Certification?',
        options: [
          { id: 'opt_1', text: 'Thank you, Sir Richard. I am deeply honored to receive the A2 Certification and look forward to continued growth.', isCorrect: true },
          { id: 'opt_2', text: 'I am the best speaker now goodbye.', isCorrect: false },
          { id: 'opt_3', text: 'Certificate received bye.', isCorrect: false },
        ],
        correctAnswer: 'Thank you, Sir Richard. I am deeply honored to receive the A2 Certification and look forward to continued growth.',
        explanation: 'Gracious, articulate, and embodies the spirit of lifelong communicative mastery.',
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
