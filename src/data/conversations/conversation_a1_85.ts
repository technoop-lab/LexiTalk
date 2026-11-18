import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_85: ConversationDefinition = {
  id: 'conv_a1_85',
  title: 'Community Inquiries, Civic Services & Local Governance',
  cefr: 'A1',
  unitId: 'unit_a1_6',
  lessonLinks: ['lesson_a1_6_85'],
  estimatedMinutes: 5,
  scenario:
    'You visit the Bristol City Council Civic Service Center in central Bristol. You speak with Customer Service Officer David Evans to report a broken streetlamp on your residential street, register your household for organic food-waste composting bins, and inquire about local council tax discount eligibility.',
  communicativeGoals: [
    'Report neighborhood infrastructure defects clearly with street names and landmarks',
    'Register for municipal environmental and recycling services (green food-waste bin, garden collection)',
    'Inquire about local council tax discounts and single-person resident rebates',
    'Retrieve earlier housing, neighborhood, civic, and numerical language in a real-world municipal setting',
  ],
  canDoStatements: [
    'Can report public infrastructure issues to local council representatives',
    'Can fill out and request local municipal utility and waste collection services',
    'Can inquire about council tax bands, residential rebates, and collection schedules',
  ],
  characters: [
    {
      id: 'char_david_evans',
      name: 'David Evans',
      role: 'Civic Customer Service Officer',
      avatar: '🏛️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'municipal',
        ipa: '/mjuːˈnɪsɪpəl/',
        partOfSpeech: 'adjective',
        meaning: 'Relating to a city or town or its governing body',
        exampleSentence: 'The municipal council provides weekly recycling collection.',
        translations: { hi: 'नगरपालिका / नागरिक' },
      },
      {
        word: 'infrastructure',
        ipa: '/ˈɪnfrəˌstrʌktʃər/',
        partOfSpeech: 'noun',
        meaning: 'The basic physical and organizational structures (e.g. roads, lighting, power)',
        exampleSentence: 'We are reporting a defect in the local street lighting infrastructure.',
        translations: { hi: 'बुनियादी ढांचा / सार्वजनिक व्यवस्था' },
      },
      {
        word: 'compost',
        ipa: '/ˈkɒmpoʊst/',
        partOfSpeech: 'noun',
        meaning: 'Decayed organic material used as a plant fertilizer and soil conditioner',
        exampleSentence: 'Residents receive a small brown bin for organic food compost.',
        translations: { hi: 'जैविक खाद / कम्पोस्ट' },
      },
      {
        word: 'rebate',
        ipa: '/ˈriːbeɪt/',
        partOfSpeech: 'noun',
        meaning: 'A partial refund to someone who has paid or owes money (e.g. council tax discount)',
        exampleSentence: 'Single occupants are entitled to a twenty-five percent council tax rebate.',
        translations: { hi: 'छूट / कर में वापसी' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I would like to report an issue with...',
        functionCategory: 'Civic Reporting',
        exampleSentence: 'I would like to report an issue with a broken streetlamp on Park Street.',
      },
      {
        phrase: 'How can I register for the green waste program?',
        functionCategory: 'Service Registration',
        exampleSentence: 'How can I register for the weekly green food-waste collection bin?',
      },
      {
        phrase: 'Am I eligible for a single-occupant discount?',
        functionCategory: 'Tax Inquiry',
        exampleSentence: 'Am I eligible for a twenty-five percent single-person council tax discount?',
      },
      {
        phrase: 'Thank you for updating the municipal records.',
        functionCategory: 'Polite Closing',
        exampleSentence: 'Thank you for updating my municipal records today.',
      },
    ],
    grammar: {
      title: 'Civic Inquiries: Indirect Questions with "Could you tell me how / whether..."',
      conceptExplanation:
        'Use indirect question structures to inquire about civic procedures politely: "Could you tell me how I can register?" or "Could you explain whether I am eligible for a discount?".',
      patternFormula: 'Could you tell me how / where / whether + Subject + Verb?',
      contrastExamples: [
        {
          incorrect: 'Tell where is garbage bin now.',
          correct: 'Could you please tell me where I can request a food-waste bin?',
          explanation: 'Use courteous indirect phrasing for official public services.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'David Evans',
        text: 'Good morning! Welcome to the Bristol City Council Helpdesk. How may I assist you with local civic services today?',
        translation: 'शुभ प्रभात! ब्रिस्टल सिटी काउंसिल हेल्पडेस्क में आपका स्वागत है। आज मैं स्थानीय नागरिक सेवाओं में आपकी क्या मदद कर सकता हूँ?',
      },
      {
        speaker: 'You',
        text: 'Good morning David. I live on Clifton Road, and I would like to report a broken streetlight outside number 42, and also register for the green compost bin.',
        translation: 'शुभ प्रभात डेविड। मैं क्लिफ्टन रोड पर रहता हूँ, और मैं नंबर 42 के बाहर टूटी हुई स्ट्रीटलाइट की रिपोर्ट करना चाहता हूँ, और ग्रीन कम्पोस्ट बिन के लिए पंजीकरण भी करना चाहता हूँ।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_85_1',
      type: 'fill_blank',
      prompt: 'Complete the civic request: "Could you tell me ___ I can register for waste collection?"',
      options: [
        { id: 'opt_1', text: 'how', isCorrect: true },
        { id: 'opt_2', text: 'which of', isCorrect: false },
        { id: 'opt_3', text: 'because', isCorrect: false },
      ],
      correctAnswer: 'how',
      explanation: 'Use "how" to ask for procedure.',
    },
    {
      id: 'cp_a1_85_2',
      type: 'multiple_choice',
      prompt: 'Which sentence reports a broken public utility with sufficient clarity?',
      options: [
        { id: 'opt_1', text: 'The streetlamp outside 14 Victoria Road has been flickering and dark for two nights.', isCorrect: true },
        { id: 'opt_2', text: 'Light outside is dead fix now.', isCorrect: false },
        { id: 'opt_3', text: 'Street is black.', isCorrect: false },
      ],
      correctAnswer: 'The streetlamp outside 14 Victoria Road has been flickering and dark for two nights.',
      explanation: 'Provides specific location and clear defect details.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_85_1',
      scenarioContext: 'Inquire about civic recycling bins.',
      prompt: 'Build: "Could you tell me how to request a bin?"',
      targetStructure: 'Could you tell me how to request a bin',
      wordBank: ['Could', 'you', 'tell', 'me', 'how', 'to', 'request', 'a', 'bin', 'requesting', 'can'],
      acceptableSolutions: [
        'Could you tell me how to request a bin',
        'Could you tell me how to request a bin?',
      ],
      explanation: 'Polite indirect inquiry structure.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_85_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning! Welcome to the Bristol Civic Center. What municipal services or neighborhood inquiries can I help you with today?',
      partnerAudioText:
        'Good morning! Welcome to the Bristol Civic Center. What municipal services or neighborhood inquiries can I help you with today?',
      partnerQuestionHindi:
        'शुभ प्रभात! ब्रिस्टल सिविक सेंटर में आपका स्वागत है। आज मैं स्थानीय नगरपालिका सेवाओं या पड़ोस की किस पूछताछ में आपकी मदद कर सकता हूँ?',
      expectedFunction: 'Report Broken Streetlamp with Specific Street & House Location (Independent A1)',
      contextGoal:
        'State you live on Clifton Road and want to report a broken streetlamp outside house number 42 that has been out for three days.',
      targetVocabulary: ['live on Clifton Road', 'report broken streetlamp', 'outside number 42', 'dark for three days'],
      suggestedResponses: [
        {
          label: 'Independent A1',
          text: 'Good morning David! I live on Clifton Road, and I would like to report a broken streetlamp outside number 42. The light has been completely dark for three nights.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Streetlamp Defect & Location',
          patterns: [
            'clifton road',
            'streetlamp',
            'streetlight',
            'broken',
            '42',
            'dark',
            'three nights',
            'three days',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_85_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I live ___ Clifton Road."',
        options: [
          { id: 'opt_1', text: 'on', isCorrect: true },
          { id: 'opt_2', text: 'in to', isCorrect: false },
          { id: 'opt_3', text: 'at to', isCorrect: false },
        ],
        correctAnswer: 'on',
        explanation: 'Use "on" with street names (on Clifton Road).',
      },
    },
    {
      id: 'turn_a1_85_2',
      turnIndex: 2,
      partnerPrompt:
        'I have logged reference ticket #SL-884 for Clifton Road; our electrical repairs team will inspect it within 48 hours. What other household service would you like to arrange?',
      partnerAudioText:
        'I have logged reference ticket #SL-884 for Clifton Road; our electrical repairs team will inspect it within 48 hours. What other household service would you like to arrange?',
      partnerQuestionHindi:
        'मैंने क्लिफ्टन रोड के लिए संदर्भ टिकट #SL-884 दर्ज कर लिया है; हमारी विद्युत मरम्मत टीम 48 घंटों के भीतर इसका निरीक्षण करेगी। आप कौन सी अन्य घरेलू सेवा की व्यवस्था करना चाहेंगे?',
      expectedFunction: 'Register for Organic Food-Waste Composting Caddy & Green Bin',
      contextGoal:
        'Request an indoor kitchen food-waste caddy and an outdoor green composting bin, and ask what day organic waste is collected.',
      targetVocabulary: ['register for food-waste caddy', 'outdoor green composting bin', 'collection day schedule', 'organic recycling'],
      suggestedResponses: [
        {
          label: 'Independent A1',
          text: 'Thank you! I would also like to register for a kitchen food-waste caddy and an outdoor green compost bin. Could you please tell me which day waste is collected on Clifton Road?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Compost Registration & Schedule',
          patterns: [
            'caddy',
            'green',
            'compost',
            'bin',
            'waste',
            'collection',
            'which day',
            'schedule',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_85_2',
        type: 'multiple_choice',
        prompt: 'Which question asks about neighborhood collection schedules politely?',
        options: [
          { id: 'opt_1', text: 'Could you tell me which day organic waste is collected in our neighborhood?', isCorrect: true },
          { id: 'opt_2', text: 'Truck comes when for food garbage?', isCorrect: false },
          { id: 'opt_3', text: 'Give truck schedule fast.', isCorrect: false },
        ],
        correctAnswer: 'Could you tell me which day organic waste is collected in our neighborhood?',
        explanation: 'Polite and clear municipal inquiry.',
      },
    },
    {
      id: 'turn_a1_85_3',
      turnIndex: 3,
      partnerPrompt:
        'Organic waste and recycling are collected every Tuesday morning by 7:00 AM, and your new caddy will be delivered this Thursday. Finally, do you have any queries regarding your council tax account?',
      partnerAudioText:
        'Organic waste and recycling are collected every Tuesday morning by 7:00 AM, and your new caddy will be delivered this Thursday. Finally, do you have any queries regarding your council tax account?',
      partnerQuestionHindi:
        'जैविक कचरा और पुनर्चक्रण हर मंगलवार सुबह 7:00 बजे तक एकत्र किया जाता है, और आपका नया कैडी इस गुरुवार को वितरित किया जाएगा। अंत में, क्या आपके पास अपने काउंसिल टैक्स खाते के बारे में कोई प्रश्न हैं?',
      expectedFunction: 'Inquire About Single-Occupant Council Tax Rebate (25% Discount)',
      contextGoal:
        'Ask whether you are eligible for the 25% single-person council tax discount since you live alone in your flat.',
      targetVocabulary: ['eligible for single-occupant discount', 'twenty-five percent rebate', 'live alone in flat', 'council tax deduction'],
      suggestedResponses: [
        {
          label: 'Independent A1',
          text: 'Yes! Since I live alone in my flat, am I eligible for the 25% single-person council tax discount? How do I submit proof of residency?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Council Tax Discount',
          patterns: [
            '25%',
            'discount',
            'single',
            'live alone',
            'eligible',
            'rebate',
            'proof',
            'council tax',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_85_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Single occupants receive a 25% ___ on council tax."',
        options: [
          { id: 'opt_1', text: 'discount', isCorrect: true },
          { id: 'opt_2', text: 'penalty', isCorrect: false },
          { id: 'opt_3', text: 'recipe', isCorrect: false },
        ],
        correctAnswer: 'discount',
        explanation: '"discount" or "rebate" indicates reduction.',
      },
    },
    {
      id: 'turn_a1_85_4',
      turnIndex: 4,
      partnerPrompt:
        'Yes, you qualify! I have applied the 25% single-occupancy discount to your account immediately. Your revised monthly direct debit will be £98 starting next month. Here is your confirmation receipt.',
      partnerAudioText:
        'Yes, you qualify! I have applied the 25% single-occupancy discount to your account immediately. Your revised monthly direct debit will be £98 starting next month. Here is your confirmation receipt.',
      partnerQuestionHindi:
        'हाँ, आप योग्य हैं! मैंने आपके खाते में तुरंत 25% एकल-अधिभोग छूट लागू कर दी है। अगले महीने से आपका संशोधित मासिक डायरेक्ट डेबिट £98 होगा। यह आपकी पुष्टि रसीद है।',
      expectedFunction: 'Thank Officer, Confirm Record Updates & Conclude Visit',
      contextGoal:
        'Thank David for solving the streetlight ticket, delivering the bin on Thursday, and applying the tax rebate efficiently.',
      targetVocabulary: ['thank you David for wonderful help', 'confirmed all updates', 'efficient service', 'have a great day'],
      suggestedResponses: [
        {
          label: 'Independent A1',
          text: 'Thank you so much David! You have resolved the streetlamp ticket, arranged the compost bin delivery, and applied the tax discount so smoothly. Have a wonderful day!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Appreciation',
          patterns: [
            'thank you',
            'david',
            'streetlamp',
            'compost',
            'discount',
            'efficient',
            'have a wonderful day',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_85_4',
        type: 'multiple_choice',
        prompt: 'Which closing remark summarizes civic satisfaction courteously?',
        options: [
          { id: 'opt_1', text: 'Thank you for your efficient help with my bins and tax discount David, have a great day!', isCorrect: true },
          { id: 'opt_2', text: 'Council paper taken I walk out.', isCorrect: false },
          { id: 'opt_3', text: 'Done bye bye money.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for your efficient help with my bins and tax discount David, have a great day!',
        explanation: 'Courteous and clear closing.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 70,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 60,
  },
};
