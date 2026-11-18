import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_160: ConversationDefinition = {
  id: 'conv_a2_160',
  title: 'Unit 11 Review & Mid-Unit Progress Check',
  cefr: 'A2',
  unitId: 'unit_a2_11',
  lessonLinks: ['lesson_a2_11_160'],
  estimatedMinutes: 5,
  scenario:
    'You are in the tutorial room at Oxford Language Institute meeting with Academy Mentor Victoria Sterling for your Unit 11 Mid-Unit Oral Review. Victoria will assess your fluency across the first nine lessons of Unit 11: collaborative team dynamics, constructive feedback with cause linkers, resolving misunderstandings politely, comparative procurement, social event planning, news reporting, budgeting conditionals, and wellness advice.',
  communicativeGoals: [
    'Synthesize communicative skills across professional, social, media, and wellness domains',
    'Demonstrate accurate use of purpose infinitives, cause linkers ("due to", "since"), and comparative intensifiers',
    'Apply polite clarification and social excuse strategies fluently',
    'Review personal language milestones and inquire about upcoming advanced A2 topics',
  ],
  canDoStatements: [
    'Can demonstrate cumulative communicative competence across all Unit 11 mid-unit themes',
    'Can integrate cause linkers, purpose clauses, and comparative structures smoothly in conversation',
    'Can self-evaluate learning progress and identify areas for further practice',
  ],
  characters: [
    {
      id: 'char_victoria_sterling',
      name: 'Victoria Sterling',
      role: 'Academy Review Mentor',
      avatar: '👩‍🏫',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'consolidate',
        ipa: '/kənˈsɒlɪdeɪt/',
        partOfSpeech: 'verb',
        meaning: 'To make something physically stronger or more solid; to combine and strengthen learning',
        exampleSentence: 'This mid-unit review helps consolidate our grammar and conversational skills.',
        translations: { hi: 'मजबूत करना / सुदृढ़ करना' },
      },
      {
        word: 'proficiency',
        ipa: '/prəˈfɪʃnsi/',
        partOfSpeech: 'noun',
        meaning: 'A high degree of competence or skill; expertise',
        exampleSentence: 'You have shown great proficiency in using complex linkers and modal verbs.',
        translations: { hi: 'दक्षता / प्रवीणता' },
      },
      {
        word: 'milestone',
        ipa: '/ˈmaɪlstəʊn/',
        partOfSpeech: 'noun',
        meaning: 'A significant stage or event in the development of something',
        exampleSentence: 'Reaching Lesson 160 marks an important milestone in your A2 journey.',
        translations: { hi: 'मील का पत्थर / महत्वपूर्ण पड़ाव' },
      },
      {
        word: 'synthesis',
        ipa: '/ˈsɪnθəsɪs/',
        partOfSpeech: 'noun',
        meaning: 'The combination of ideas or components to form a connected whole',
        exampleSentence: 'The review requires a synthesis of workplace and social English.',
        translations: { hi: 'संश्लेषण / समग्र संयोजन' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'We organized our team duties in order to meet tight project deadlines.',
        functionCategory: 'Reviewing Purpose Infinitives (Lesson 151)',
        exampleSentence: 'I called the coordinator to confirm the date.',
      },
      {
        phrase: 'The cloud software is considerably faster, but we adjusted the layout due to user feedback.',
        functionCategory: 'Combining Comparatives with Cause Linkers (Lessons 152 & 154)',
        exampleSentence: 'Option A is far better due to speed.',
      },
      {
        phrase: 'If I cut down on unnecessary spending, I will put aside an emergency fund.',
        functionCategory: 'Reviewing Financial Conditionals & Phrasal Verbs (Lesson 158)',
        exampleSentence: 'If I save money, I will pay off debt.',
      },
      {
        phrase: 'What topics and narrative skills will we explore in the second half of Unit 11?',
        functionCategory: 'Inquiring About Future Curriculum Milestones',
        exampleSentence: 'What are our next learning goals?',
      },
    ],
    grammar: {
      title: 'Unit 11 Mid-Unit Synthesizing Framework',
      conceptExplanation:
        '1. Purpose & Causes: "in order to + Base Verb", "due to / because of + Noun Phrase", "since + Clause".\n2. Comparatives & Intensifiers: "much / far / considerably + Comparative", "not as ... as".\n3. Social & Workplace Politeness: "I’d love to, but I’m afraid...", "Could you clarify what you mean by...?", "Shall we...?".\n4. Conditionals & Modals: "If + Present Simple, will + Base Verb", "ought to", "had better".',
      patternFormula: 'Cumulative Integration across Lessons 151–159 structures',
      contrastExamples: [
        {
          incorrect: 'I learned many grammar and I can talk everything fast.',
          correct: 'I have consolidated my ability to explain purpose, compare options with intensifiers, and give polite feedback.',
          explanation: 'Synthesize concrete skills clearly and accurately.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Victoria Sterling',
        text: 'Welcome to your Unit 11 progress review! How would you summarize your ability to coordinate workplace tasks and give constructive feedback to colleagues?',
        translation: 'आपकी यूनिट 11 प्रगति समीक्षा में आपका स्वागत है! आप कार्यस्थल के कार्यों का समन्वय करने और सहकर्मियों को रचनात्मक प्रतिक्रिया देने की अपनी क्षमता का संक्षेप कैसे देंगे?',
      },
      {
        speaker: 'You',
        text: 'I can explain project objectives using "in order to", divide roles with "whereas", and offer constructive feedback using "due to" and "you could consider".',
        translation: 'मैं "in order to" का उपयोग करके परियोजना के उद्देश्यों को समझा सकता हूँ, "whereas" के साथ भूमिकाओं को विभाजित कर सकता हूँ, और "due to" और "you could consider" का उपयोग करके रचनात्मक प्रतिक्रिया दे सकता हूँ।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_160_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "We adjusted the layout ___ (due to / because) accessibility guidelines in order to improve reading speed."',
      options: [
        { id: 'opt_1', text: 'due to', isCorrect: true },
        { id: 'opt_2', text: 'because', isCorrect: false },
        { id: 'opt_3', text: 'since', isCorrect: false },
      ],
      correctAnswer: 'due to',
      explanation: 'Use "due to" before the noun phrase "accessibility guidelines".',
    },
    {
      id: 'cp_a2_160_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly combines a comparative intensifier with a purpose clause?',
      options: [
        { id: 'opt_1', text: 'The new server is considerably faster in order to support high user traffic.', isCorrect: true },
        { id: 'opt_2', text: 'The new server is more fast for supporting traffic.', isCorrect: false },
        { id: 'opt_3', text: 'The server is fast as possible to traffic.', isCorrect: false },
      ],
      correctAnswer: 'The new server is considerably faster in order to support high user traffic.',
      explanation: 'Combines intensifier "considerably faster" with purpose infinitive "in order to support".',
    },
    {
      id: 'cp_a2_160_3',
      type: 'multiple_choice',
      prompt: 'Which phrase demonstrates polite social decline and alternative proposal?',
      options: [
        { id: 'opt_1', text: 'I’d love to join, but I’m afraid I have plans; how about Sunday afternoon instead?', isCorrect: true },
        { id: 'opt_2', text: 'No I am not coming see you never.', isCorrect: false },
        { id: 'opt_3', text: 'I am busy so you come Sunday.', isCorrect: false },
      ],
      correctAnswer: 'I’d love to join, but I’m afraid I have plans; how about Sunday afternoon instead?',
      explanation: 'Polite refusal with excuse and alternative proposal.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_160_1',
      scenarioContext: 'Integrate purpose and cause.',
      prompt: 'Build: "We met in order to resolve the issue due to delays."',
      targetStructure: 'We met in order to resolve the issue + due to delays',
      wordBank: ['We', 'met', 'in', 'order', 'to', 'resolve', 'the', 'issue', 'due', 'to', 'delays', 'because'],
      acceptableSolutions: [
        'We met in order to resolve the issue due to delays',
        'We met in order to resolve the issue due to delays.',
      ],
      explanation: 'Integrates "in order to" and "due to".',
    },
    {
      id: 'sc_a2_160_2',
      scenarioContext: 'Conditional saving formula.',
      prompt: 'Build: "If I cut down expenses, I will put aside savings."',
      targetStructure: 'If I cut down expenses + I will put aside savings',
      wordBank: ['If', 'I', 'cut', 'down', 'expenses', 'will', 'put', 'aside', 'savings', 'would'],
      acceptableSolutions: [
        'If I cut down expenses I will put aside savings',
        'If I cut down expenses, I will put aside savings.',
        'If I cut down expenses, I will put aside savings',
      ],
      explanation: 'First conditional with financial phrasal verbs.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_160_1',
      turnIndex: 1,
      partnerPrompt:
        'Good day! Welcome to your Unit 11 Progress Check. Over the first nine lessons, we explored workplace collaboration, constructive critiques, and resolving misunderstandings. How do you feel about dividing team roles and explaining causes of design changes?',
      partnerAudioText:
        'Good day! Welcome to your Unit 11 Progress Check. Over the first nine lessons, we explored workplace collaboration, constructive critiques, and resolving misunderstandings. How do you feel about dividing team roles and explaining causes of design changes?',
      partnerQuestionHindi:
        'शुभ दिन! आपकी यूनिट 11 प्रगति जांच में आपका स्वागत है। पहले नौ पाठों में, हमने कार्यस्थल सहयोग, रचनात्मक आलोचना और गलतफहमियों को सुलझाने का पता लगाया। टीम की भूमिकाओं को विभाजित करने और डिज़ाइन परिवर्तनों के कारणों को समझाने के बारे में आप कैसा महसूस करते हैं?',
      expectedFunction: 'Synthesize Purpose, Contrast & Cause Linkers (I feel confident using "in order to" for objectives, "whereas" for roles, and "due to / since" for feedback)',
      contextGoal:
        'Summarize your confidence using "in order to", "whereas", "due to", and polite clarification questions ("Could you clarify what you mean by...?").',
      targetVocabulary: ['purpose infinitives like in order to', 'dividing duties with whereas', 'explaining causes using due to and since', 'asking for clarification politely', 'constructive feedback'],
      suggestedResponses: [
        {
          label: 'Comprehensive Workplace Synthesis',
          text: 'Good day, Victoria! I feel very confident using "in order to" to explain objectives, "whereas" to divide team roles, and "due to" or "since" when giving constructive feedback.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Synthesis',
          text: 'I can organize team projects using purpose infinitives and contrastive linkers, and I can resolve misunderstandings politely.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Greeting / Confidence (good day / confident / feel / good / comfortable / learned)',
          patterns: ['good day', 'confident', 'feel', 'good', 'comfortable', 'learned', 'understand', 'progress'],
          required: true,
        },
        {
          name: 'Target Grammar / Functions (in order to / whereas / due to / since / purpose / roles / feedback / clarify)',
          patterns: ['in order to', 'whereas', 'due to', 'since', 'purpose', 'roles', 'feedback', 'clarify', 'constructive', 'misunderstandings'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_160_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I learned to divide tasks using ___ (whereas / because) and explain purposes with \'in order to\'."',
        options: [
          { id: 'opt_1', text: 'whereas', isCorrect: true },
          { id: 'opt_2', text: 'because', isCorrect: false },
          { id: 'opt_3', text: 'although', isCorrect: false },
        ],
        correctAnswer: 'whereas',
        explanation: '"Whereas" contrasts duties between individuals.',
      },
    },
    {
      id: 'turn_a2_160_2',
      turnIndex: 2,
      partnerPrompt:
        'Excellent! Now, looking at social and economic communication: how comfortably can you compare alternative options using intensifiers, organize social gatherings, and navigate financial budgeting?',
      partnerAudioText:
        'Excellent! Now, looking at social and economic communication: how comfortably can you compare alternative options using intensifiers, organize social gatherings, and navigate financial budgeting?',
      partnerQuestionHindi:
        'बहुत बढ़िया! अब, सामाजिक और आर्थिक संचार को देखते हुए: आप कितनी सहजता से गहनताओं का उपयोग करके वैकल्पिक विकल्पों की तुलना कर सकते हैं, सामाजिक समारोहों का आयोजन कर सकते हैं और वित्तीय बजट का प्रबंधन कर सकते हैं?',
      expectedFunction: 'Synthesize Comparatives, Social Plans & Budgeting Conditionals (I can compare options with "considerably / far better", plan events with "Present Continuous", and use First Conditionals to save money)',
      contextGoal:
        'Explain that you can compare options ("far cheaper", "considerably faster"), arrange events ("We are hosting on Friday"), decline politely ("I’d love to, but..."), and budget with First Conditionals ("If I cut down on...").',
      targetVocabulary: ['comparatives with far and considerably', 'not as expensive as', 'Present Continuous for social arrangements', 'polite excuses with I’m afraid', 'First Conditionals to put aside money'],
      suggestedResponses: [
        {
          label: 'Social & Budgeting Synthesis',
          text: 'I can compare options using "far better" or "not as expensive as", arrange events with the Present Continuous, decline invitations politely, and use First Conditionals with "cut down on" to manage my budget.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Functional Summary',
          text: 'I use intensifiers to compare hardware options, organize social celebrations with "Shall we", and budget effectively using financial conditionals.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Comparative / Social Skills (far / considerably / not as / compare / events / hosting / shall we / decline / invitations / afraid)',
          patterns: ['far', 'considerably', 'not as', 'compare', 'events', 'hosting', 'shall we', 'decline', 'invitations', 'afraid', 'present continuous'],
          required: true,
        },
        {
          name: 'Budgeting / Health (budget / condition / if / save / cut down / put aside / ought to / had better)',
          patterns: ['budget', 'condition', 'if', 'save', 'cut down', 'put aside', 'ought to', 'had better', 'money', 'finance'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_160_2',
        type: 'multiple_choice',
        prompt: 'Which sentence represents a financial conditional learned in Unit 11?',
        options: [
          { id: 'opt_1', text: 'If I cut down on dining out, I will put aside £200 monthly.', isCorrect: true },
          { id: 'opt_2', text: 'If I will cut down dining out, I save.', isCorrect: false },
          { id: 'opt_3', text: 'I cut down money for yesterday.', isCorrect: false },
        ],
        correctAnswer: 'If I cut down on dining out, I will put aside £200 monthly.',
        explanation: 'First conditional with "cut down on" and "put aside".',
      },
    },
    {
      id: 'turn_a2_160_3',
      turnIndex: 3,
      partnerPrompt:
        'You have mastered these core functional structures remarkably well. As we look forward to Lessons 161 through 165, what questions do you have about the upcoming travel, environmental, digital, and customer service topics?',
      partnerAudioText:
        'You have mastered these core functional structures remarkably well. As we look forward to Lessons 161 through 165, what questions do you have about the upcoming travel, environmental, digital, and customer service topics?',
      partnerQuestionHindi:
        'आपने इन मुख्य कार्यात्मक संरचनाओं में बहुत अच्छी तरह से महारत हासिल की है। जैसे ही हम पाठ 161 से 165 की ओर देखते हैं, आगामी यात्रा, पर्यावरण, डिजिटल और ग्राहक सेवा विषयों के बारे में आपके क्या प्रश्न हैं?',
      expectedFunction: 'Inquire About Upcoming Unit 11 Topics (What grammar structures will we use for travel stories, environmental trends, and remote video meetings?)',
      contextGoal:
        'Ask Victoria what grammar and communication skills will be taught in Lessons 161–165 (e.g. Past Perfect for travel, modals for green habits, remote etiquette).',
      targetVocabulary: ['What grammar structures will we learn in Lessons 161–165?', 'Past Perfect for travel stories', 'environmental conditionals', 'remote communication etiquette', 'customer service indirect questions'],
      suggestedResponses: [
        {
          label: 'Inquiry on Upcoming Curriculum',
          text: 'What key grammar patterns will we learn for narrating travel stories in Lesson 161 and discussing sustainability and digital meetings in the upcoming lessons?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Curriculum Question',
          text: 'What new topics and grammar rules will we cover in the second half of Unit 11?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Upcoming Curriculum Question (what / grammar / topics / travel / lesson 161 / second half / learn / cover / ?)',
          patterns: ['what', 'grammar', 'topics', 'travel', '161', 'second half', 'learn', 'cover', 'upcoming', 'next', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_160_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "What grammar structures ___ (will we cover / do we cover) in Lesson 161?"',
        options: [
          { id: 'opt_1', text: 'will we cover', isCorrect: true },
          { id: 'opt_2', text: 'do we cover', isCorrect: false },
          { id: 'opt_3', text: 'we will cover', isCorrect: false },
        ],
        correctAnswer: 'will we cover',
        explanation: 'Direct question inversion with future "will": "will we cover".',
      },
    },
    {
      id: 'turn_a2_160_4',
      turnIndex: 4,
      partnerPrompt:
        'In the next section, you will master the Past Perfect for travel misadventures, environmental modals for green habits, "be supposed to" for virtual meetings, and indirect questions for customer service! Could you summarize your mid-unit progress and readiness?',
      partnerAudioText:
        'In the next section, you will master the Past Perfect for travel misadventures, environmental modals for green habits, "be supposed to" for virtual meetings, and indirect questions for customer service! Could you summarize your mid-unit progress and readiness?',
      partnerQuestionHindi:
        'अगले भाग में, आप यात्रा की दुर्घटनाओं के लिए पास्ट परफेक्ट, हरित आदतों के लिए पर्यावरण मोडाल्स, वर्चुअल बैठकों के लिए "be supposed to", और ग्राहक सेवा के लिए अप्रत्यक्ष प्रश्नों में महारत हासिल करेंगे! क्या आप अपनी मध्य-इकाई प्रगति और तैयारी का संक्षेप प्रस्तुत कर सकते हैं?',
      expectedFunction: 'Summarize Mid-Unit Mastery & State Readiness (To summarize, I have consolidated workplace and social skills, and I am excited to tackle Past Perfect travel stories and environmental topics)',
      contextGoal:
        'Summarize your learning across Lessons 151–159 and express enthusiasm and readiness for Lessons 161–165.',
      targetVocabulary: ['To summarize my mid-unit progress', 'consolidated workplace collaboration and feedback', 'comparatives, event planning, and budgeting', 'ready for Past Perfect and customer service in Lesson 161', 'thank you Victoria'],
      suggestedResponses: [
        {
          label: 'Comprehensive Mid-Unit Summary',
          text: 'To summarize my progress: I have consolidated workplace collaboration, constructive feedback, comparative recommendations, social planning, and budgeting conditionals. I am fully ready to learn Past Perfect travel stories and customer service in the next lessons. Thank you, Victoria!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Progress Summary',
          text: 'In summary, I feel confident across all mid-unit topics and look forward to mastering travel narratives and digital etiquette in Lesson 161. Thanks for your mentorship!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Summary Signpost (to summarize / in summary / summary / progress / ready / so)',
          patterns: ['to summarize', 'in summary', 'summary', 'progress', 'ready', 'so', 'consolidated'],
          required: true,
        },
        {
          name: 'Key Themes & Readiness (workplace / feedback / comparatives / budget / travel / lesson 161 / thank you / victoria)',
          patterns: ['workplace', 'feedback', 'comparatives', 'budget', 'travel', '161', 'thank you', 'victoria', 'thanks'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_160_4',
        type: 'multiple_choice',
        prompt: 'Which closing statement demonstrates confident synthesis and readiness for advanced lessons?',
        options: [
          { id: 'opt_1', text: 'To summarize, I have consolidated our mid-unit topics and feel prepared for the travel and digital lessons ahead.', isCorrect: true },
          { id: 'opt_2', text: 'I stop studying now because I am tired.', isCorrect: false },
          { id: 'opt_3', text: 'English is too difficult so goodbye.', isCorrect: false },
        ],
        correctAnswer: 'To summarize, I have consolidated our mid-unit topics and feel prepared for the travel and digital lessons ahead.',
        explanation: 'Reflective, positive summary of learning milestones.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 65,
  },
};
