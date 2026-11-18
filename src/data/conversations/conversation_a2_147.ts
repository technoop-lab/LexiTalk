import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_147: ConversationDefinition = {
  id: 'conv_a2_147',
  title: 'Community Volunteering, Local Initiatives & Neighborhood Projects',
  cefr: 'A2',
  unitId: 'unit_a2_10',
  lessonLinks: ['lesson_a2_10_147'],
  estimatedMinutes: 5,
  scenario:
    'You are in the meeting room at St. Mark’s Community Centre in Manchester. Speak with community projects coordinator Maya Patel. Propose neighborhood initiatives (a community park cleanup and a food donation drive) using suggestion formulas ("Why don’t we...", "How about...", "Let’s..."), sign up for a weekend volunteer shift, and coordinate tasks with other volunteers.',
  communicativeGoals: [
    'Propose community initiatives using collaborative suggestion formulas ("Why don’t we...", "How about...", "Let’s...", "We could...")',
    'Describe volunteer opportunities (park cleanup, food bank donation drive, youth mentoring)',
    'Sign up for specific volunteer shifts and coordinate responsibilities with team members',
    'Explain the social and environmental benefits of local neighborhood action',
  ],
  canDoStatements: [
    'Can propose ideas and make suggestions during community and team meetings',
    'Can sign up for volunteer activities and agree on task division',
    'Can describe the positive impact of civic initiatives on the local neighborhood',
  ],
  characters: [
    {
      id: 'char_maya_patel',
      name: 'Maya Patel',
      role: 'Community Projects Coordinator',
      avatar: '🤝',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'volunteer',
        ipa: '/ˌvɒlənˈtɪə/',
        partOfSpeech: 'noun',
        meaning: 'A person who freely offers to take part in an enterprise or undertake a task',
        exampleSentence: 'Over thirty volunteers signed up for the park cleanup day.',
        translations: { hi: 'स्वयंसेवक' },
      },
      {
        word: 'initiative',
        ipa: '/ɪˈnɪʃətɪv/',
        partOfSpeech: 'noun',
        meaning: 'An act or strategy intended to resolve a difficulty or improve a situation',
        exampleSentence: 'Our new food drive initiative will support elderly residents.',
        translations: { hi: 'पहल / नई योजना' },
      },
      {
        word: 'collaborate',
        ipa: '/kəˈlæbəreɪt/',
        partOfSpeech: 'verb',
        meaning: 'To work jointly on an activity or project to produce something',
        exampleSentence: 'We can collaborate with local schools to collect books and canned food.',
        translations: { hi: 'सहयोग करना / मिलकर काम करना' },
      },
      {
        word: 'donation',
        ipa: '/dəʊˈneɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'Something that is given to a charity, especially a sum of money or goods',
        exampleSentence: 'Residents dropped off generous donations of warm coats and dry food.',
        translations: { hi: 'दान / योगदान' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Why don’t we organize a neighborhood park cleanup this Saturday?',
        functionCategory: 'Making Suggestions with "Why don’t we + base verb"',
        exampleSentence: 'Why don’t we create an online signup sheet?',
      },
      {
        phrase: 'How about setting up a collection box for the local food pantry?',
        functionCategory: 'Making Suggestions with "How about + verb-ing"',
        exampleSentence: 'How about inviting nearby business owners to sponsor refreshments?',
      },
      {
        phrase: 'Let’s coordinate the morning shift from 9:00 AM to 1:00 PM.',
        functionCategory: 'Proposing Actions with "Let’s + base verb"',
        exampleSentence: 'Let’s divide the park into four cleaning zones.',
      },
      {
        phrase: 'I would be happy to volunteer for the logistics and registration table.',
        functionCategory: 'Offering Personal Volunteering Support',
        exampleSentence: 'I can volunteer to drive the collection van.',
      },
    ],
    grammar: {
      title: 'Suggestion Formulas: Why don’t we... / How about... / Let’s... / We could...',
      conceptExplanation:
        '1. "Why don\'t we + [Base Verb]...?": e.g., "Why don\'t we clean the garden?"\n2. "How about + [Verb-ing]...?": e.g., "How about organizing a food drive?"\n3. "Let\'s + [Base Verb]": e.g., "Let\'s put up posters around the neighbourhood."\n4. "We could + [Base Verb]": e.g., "We could partner with the local youth club."',
      patternFormula: 'Why don’t we + [Verb] / How about + [Verb-ing] / Let’s + [Verb]',
      contrastExamples: [
        {
          incorrect: 'How about to clean the park and why don’t we cleaning?',
          correct: 'How about cleaning the park, and why don’t we organize a team?',
          explanation: '"How about" takes "-ing" while "Why don\'t we" takes a base verb.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Maya Patel',
        text: 'Welcome everyone! We have our spring neighborhood planning session today. What community initiatives should we launch this month?',
        translation: 'सभी का स्वागत है! आज हमारा वसंत ऋतु का पड़ोस योजना सत्र है। हमें इस महीने कौन सी सामुदायिक पहल शुरू करनी चाहिए?',
      },
      {
        speaker: 'You',
        text: 'Why don’t we organize a community park cleanup this Saturday? We could also set up a food drive collection box in the lobby to support families in need.',
        translation: 'क्यों न हम इस शनिवार को एक सामुदायिक पार्क सफाई का आयोजन करें? हम जरूरतमंद परिवारों की सहायता के लिए लॉबी में एक खाद्य दान संग्रह बॉक्स भी स्थापित कर सकते हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_147_1',
      type: 'fill_blank',
      prompt: 'Complete the suggestion: "How about ___ (organizing / organize / to organize) a charity run?"',
      options: [
        { id: 'opt_1', text: 'organizing', isCorrect: true },
        { id: 'opt_2', text: 'organize', isCorrect: false },
        { id: 'opt_3', text: 'to organize', isCorrect: false },
      ],
      correctAnswer: 'organizing',
      explanation: 'Use the "-ing" form after "How about".',
    },
    {
      id: 'cp_a2_147_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "Why don’t we"?',
      options: [
        { id: 'opt_1', text: 'Why don’t we set up a donation box near the library?', isCorrect: true },
        { id: 'opt_2', text: 'Why don’t we setting up a donation box near the library?', isCorrect: false },
        { id: 'opt_3', text: 'Why don’t we to set up a donation box near the library?', isCorrect: false },
      ],
      correctAnswer: 'Why don’t we set up a donation box near the library?',
      explanation: '"Why don’t we" is followed by a base verb ("set up").',
    },
    {
      id: 'cp_a2_147_3',
      type: 'multiple_choice',
      prompt: 'How do you volunteer for a specific task politely?',
      options: [
        { id: 'opt_1', text: 'I would be delighted to manage the volunteer registration desk.', isCorrect: true },
        { id: 'opt_2', text: 'I must take the desk because I want.', isCorrect: false },
        { id: 'opt_3', text: 'Desk is mine now.', isCorrect: false },
      ],
      correctAnswer: 'I would be delighted to manage the volunteer registration desk.',
      explanation: 'Polite and collaborative offering of service.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_147_1',
      scenarioContext: 'Propose a park cleanup day.',
      prompt: 'Build: "Why don’t we organize a park cleanup?"',
      targetStructure: 'Why don’t we + organize + a park cleanup',
      wordBank: ['Why', 'don’t', 'we', 'organize', 'a', 'park', 'cleanup', 'organizing', 'how'],
      acceptableSolutions: [
        'Why don’t we organize a park cleanup',
        'Why don’t we organize a park cleanup?',
      ],
      explanation: 'Uses "Why don’t we + base verb".',
    },
    {
      id: 'sc_a2_147_2',
      scenarioContext: 'Suggest a food drive using How about.',
      prompt: 'Build: "How about collecting canned food for the pantry?"',
      targetStructure: 'How about + verb-ing + noun phrase + prepositional phrase',
      wordBank: ['How', 'about', 'collecting', 'canned', 'food', 'for', 'the', 'pantry', 'collect', 'why'],
      acceptableSolutions: [
        'How about collecting canned food for the pantry',
        'How about collecting canned food for the pantry?',
      ],
      explanation: 'Uses "How about + verb-ing".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_147_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi everyone! Thanks for joining our spring neighborhood committee meeting. We want to run two new community projects this month. What ideas do you have for engaging local residents?',
      partnerAudioText:
        'Hi everyone! Thanks for joining our spring neighborhood committee meeting. We want to run two new community projects this month. What ideas do you have for engaging local residents?',
      partnerQuestionHindi:
        'नमस्ते सभी को! हमारी वसंत पड़ोस समिति की बैठक में शामिल होने के लिए धन्यवाद। हम इस महीने दो नई सामुदायिक परियोजनाएं चलाना चाहते हैं। स्थानीय निवासियों को जोड़ने के लिए आपके पास क्या विचार हैं?',
      expectedFunction: 'Propose Initiatives Using Suggestion Formulas (Why don’t we organize a park cleanup / How about a food pantry drive)',
      contextGoal:
        'Propose two initiatives using suggestion formulas: organizing a weekend park cleanup and starting a food drive collection for the local pantry.',
      targetVocabulary: ['Why don’t we organize a community park cleanup?', 'How about setting up a food donation drive?', 'support local families', 'engage youth and elderly residents'],
      suggestedResponses: [
        {
          label: 'Collaborative Proposals',
          text: 'Why don’t we organize a community park cleanup this Saturday? In addition, how about setting up a food drive collection in the centre lobby to support the local food bank?',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Proposals',
          text: 'Why don’t we do a park cleanup day, and how about collecting food donations for families in need?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Suggestion Formulas (why don\'t we / how about / let\'s / we could / propose / suggest)',
          patterns: ['why don\'t we', 'how about', 'let\'s', 'we could', 'propose', 'suggest', 'idea'],
          required: true,
        },
        {
          name: 'Initiatives (park / cleanup / clean / food / drive / pantry / bank / donations / cans)',
          patterns: ['park', 'cleanup', 'clean', 'food', 'drive', 'pantry', 'bank', 'donations', 'cans', 'litter'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'how_about_base_verb_rule',
          pattern: /\bhow about organize\b|\bhow about set up\b/i,
          errorType: 'grammar',
          message: 'Use "-ing" after "how about" (e.g., "how about organizing", "how about setting up").',
          correctionPattern: 'how about organizing',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_147_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "How about ___ (planting / plant) flowers in the square?"',
        options: [
          { id: 'opt_1', text: 'planting', isCorrect: true },
          { id: 'opt_2', text: 'plant', isCorrect: false },
          { id: 'opt_3', text: 'to plant', isCorrect: false },
        ],
        correctAnswer: 'planting',
        explanation: '"How about" takes the "-ing" participle.',
      },
    },
    {
      id: 'turn_a2_147_2',
      turnIndex: 2,
      partnerPrompt:
        'Those are both fantastic ideas! The green space really needs care and the food bank is running low on essentials. When should we hold the park cleanup, and what supplies will we need?',
      partnerAudioText:
        'Those are both fantastic ideas! The green space really needs care and the food bank is running low on essentials. When should we hold the park cleanup, and what supplies will we need?',
      partnerQuestionHindi:
        'वे दोनों शानदार विचार हैं! हरे भरे क्षेत्र को वास्तव में देखभाल की आवश्यकता है और खाद्य बैंक में आवश्यक वस्तुओं की कमी हो रही है। हमें पार्क की सफाई कब करनी चाहिए, और हमें किन आपूर्तियों की आवश्यकता होगी?',
      expectedFunction: 'Propose Date, Time & Supplies (Let’s do Saturday from 10:00 AM to 1:00 PM / gloves / litter pickers / bin bags)',
      contextGoal:
        'Suggest holding the cleanup this Saturday from 10:00 AM to 1:00 PM, and list supplies needed (gardening gloves, litter pickers, and heavy-duty rubbish bags).',
      targetVocabulary: ['Let’s do it this Saturday morning', 'from 10:00 AM to 1:00 PM', 'gardening gloves and litter pickers', 'heavy-duty trash bags'],
      suggestedResponses: [
        {
          label: 'Structured Plan & Equipment',
          text: 'Let’s schedule it for this Saturday from 10:00 AM to 1:00 PM. We will need heavy-duty bin bags, protective gloves, and litter pickers. We could ask the local council to supply the equipment.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Plan',
          text: 'Let’s hold it on Saturday at 10:00 AM. We need gloves, trash bags, and litter pickers.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Schedule (saturday / 10 / morning / 1:00 / weekend / time / schedule)',
          patterns: ['saturday', '10', 'morning', '1:00', 'weekend', 'time', 'schedule', 'let\'s'],
          required: true,
        },
        {
          name: 'Supplies & Tools (gloves / bags / bin bags / litter pickers / pickers / equipment / tools / supplies)',
          patterns: ['gloves', 'bags', 'bin bags', 'litter pickers', 'pickers', 'equipment', 'tools', 'supplies', 'trash bags'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_147_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly uses "Let’s"?',
        options: [
          { id: 'opt_1', text: 'Let’s meet at the park entrance at 10:00 AM.', isCorrect: true },
          { id: 'opt_2', text: 'Let’s to meet at the park entrance at 10:00 AM.', isCorrect: false },
          { id: 'opt_3', text: 'Let’s meeting at the park entrance at 10:00 AM.', isCorrect: false },
        ],
        correctAnswer: 'Let’s meet at the park entrance at 10:00 AM.',
        explanation: '"Let’s" takes a base verb ("meet").',
      },
    },
    {
      id: 'turn_a2_147_3',
      turnIndex: 3,
      partnerPrompt:
        'I will email the council’s environmental department today for the litter pickers and bags. Which volunteer role would you personally like to take on this Saturday?',
      partnerAudioText:
        'I will email the council’s environmental department today for the litter pickers and bags. Which volunteer role would you personally like to take on this Saturday?',
      partnerQuestionHindi:
        'मैं कचरा उठाने वाले चिमटे और बैग के लिए आज ही परिषद के पर्यावरण विभाग को ईमेल करूँगी। आप इस शनिवार को व्यक्तिगत रूप से कौन सी स्वयंसेवी भूमिका निभाना चाहेंगे?',
      expectedFunction: 'Volunteer for Specific Role & Coordinate Team Duties (I would be happy to manage the registration table / distribute tools)',
      contextGoal:
        'Volunteer to manage the registration and welcome table, hand out equipment to arriving volunteers, and coordinate the food donation drop-offs.',
      targetVocabulary: ['I would be happy to manage the registration table', 'welcome arriving volunteers', 'hand out gloves and equipment', 'organize the food collection boxes'],
      suggestedResponses: [
        {
          label: 'Volunteer Role Commitment',
          text: 'I would be delighted to manage the welcome and registration desk. I can hand out the gloves and litter pickers, register attendees, and supervise the food pantry collection boxes.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Role Choice',
          text: 'I can manage the registration desk and hand out equipment to the volunteers.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Volunteer Commitment (i would / i can / happy / volunteer / delighted / manage / take / run)',
          patterns: ['i would', 'i can', 'happy', 'volunteer', 'delighted', 'manage', 'take', 'run', 'help'],
          required: true,
        },
        {
          name: 'Role & Tasks (registration / desk / welcome / table / gloves / hand out / tools / food boxes / attendees)',
          patterns: ['registration', 'desk', 'welcome', 'table', 'gloves', 'hand out', 'tools', 'food boxes', 'attendees', 'sign up'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_147_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I would be happy ___ (to manage / managing) the registration desk."',
        options: [
          { id: 'opt_1', text: 'to manage', isCorrect: true },
          { id: 'opt_2', text: 'managing', isCorrect: false },
          { id: 'opt_3', text: 'manage', isCorrect: false },
        ],
        correctAnswer: 'to manage',
        explanation: 'Use "would be happy to + base verb".',
      },
    },
    {
      id: 'turn_a2_147_4',
      turnIndex: 4,
      partnerPrompt:
        'That would be wonderful! You’ll be great at welcoming people. I’ll print the signup sheets and set up our social media announcements. Thank you so much for your community spirit. See you Saturday at 9:30 AM!',
      partnerAudioText:
        'That would be wonderful! You’ll be great at welcoming people. I’ll print the signup sheets and set up our social media announcements. Thank you so much for your community spirit. See you Saturday at 9:30 AM!',
      partnerQuestionHindi:
        'वह अद्भुत होगा! आप लोगों का स्वागत करने में बहुत अच्छे होंगे। मैं साइनअप शीट प्रिंट करूँगी और हमारी सोशल मीडिया घोषणाएं सेट करूँगी। आपकी सामुदायिक भावना के लिए बहुत-बहुत धन्यवाद। शनिवार को सुबह 9:30 बजे मिलते हैं!',
      expectedFunction: 'Confirm Saturday Schedule & Close Warmly (Thank you Maya / see you Saturday at 9:30 AM / looking forward to it)',
      contextGoal:
        'Confirm you will arrive at 9:30 AM to set up the desk, express enthusiasm for the project, and thank Maya.',
      targetVocabulary: ['Thank you very much Maya', 'I will be there at 9:30 AM to set up', 'looking forward to a productive day', 'see you on Saturday'],
      suggestedResponses: [
        {
          label: 'Enthusiastic Confirmation & Close',
          text: 'Thank you very much, Maya! I will arrive at 9:30 AM to help set up the tables and banners. I am really looking forward to a fantastic community day. See you on Saturday!',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Confirmation',
          text: 'Thank you, Maya! I’ll see you Saturday at 9:30 AM. Have a great week!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Confirmation & Warm Farewell (thank you / thanks / maya / 9:30 / saturday / see you / looking forward / great day)',
          patterns: ['thank you', 'thanks', 'maya', '9:30', 'saturday', 'see you', 'looking forward', 'great day', 'goodbye', 'bye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_147_4',
        type: 'multiple_choice',
        prompt: 'Which response shows enthusiastic community participation?',
        options: [
          { id: 'opt_1', text: 'Thank you Maya! I will be there at 9:30 AM to help set up. See you Saturday!', isCorrect: true },
          { id: 'opt_2', text: 'I might come if I wake up early.', isCorrect: false },
          { id: 'opt_3', text: 'Work is too hard but okay.', isCorrect: false },
        ],
        correctAnswer: 'Thank you Maya! I will be there at 9:30 AM to help set up. See you Saturday!',
        explanation: 'Enthusiastic and reliable community volunteer response.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 75,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 60,
  },
};
