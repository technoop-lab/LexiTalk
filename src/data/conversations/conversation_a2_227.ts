import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_227: ConversationDefinition = {
  id: 'conv_a2_227',
  title: 'Social Plans, Making Invitations & Declining Politely',
  cefr: 'A2',
  unitId: 'unit_a2_16',
  lessonLinks: ['lesson_a2_16_227'],
  estimatedMinutes: 5,
  scenario:
    'You meet your colleague Priya in the office cafeteria during lunch. She invites you to join a weekend photography walk and an exhibition downtown. You check your schedule, politely decline the Saturday morning session due to a prior commitment using "I’d love to, but...", and arrange an alternative time to meet on Sunday afternoon.',
  communicativeGoals: [
    'Extend and respond to social invitations using polite conditional structures ("Would you like to join...?", "I’d love to, but...")',
    'Decline invitations tactfully with sincere reasons using "due to a prior commitment" and "I’m tied up"',
    'Propose alternative times and reschedule social activities using "How about...?" and "Would Sunday suit you?"',
    'Demonstrate social tact and pragmatic competence in everyday English',
  ],
  canDoStatements: [
    'Can make, accept, and politely decline invitations to social events',
    'Can give clear, polite reasons when turning down an invitation',
    'Can negotiate and agree on alternative meeting times and venues',
  ],
  characters: [
    {
      id: 'char_priya_colleague',
      name: 'Priya',
      role: 'Colleague & Photography Club Organizer',
      avatar: '📸',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'commitment',
        ipa: '/kəˈmɪtmənt/',
        partOfSpeech: 'noun',
        meaning: 'An engagement, obligation, or prior arrangement that restricts one’s freedom',
        exampleSentence: 'I cannot attend on Saturday because I have a prior family commitment.',
        translations: { hi: 'पूर्व प्रतिबद्धता / तयशुदा काम (कमिटमेंट)' },
      },
      {
        word: 'tentative',
        ipa: '/ˈtentətɪv/',
        partOfSpeech: 'adjective',
        meaning: 'Not certain or fixed; provisional',
        exampleSentence: 'Let us make a tentative plan to meet for coffee on Sunday afternoon.',
        translations: { hi: 'अस्थायी / अनंतिम (टेंटेटिव)' },
      },
      {
        word: 'tied up',
        ipa: '/taɪd ʌp/',
        partOfSpeech: 'idiom / adjective',
        meaning: 'Very busy or occupied with other work or tasks',
        exampleSentence: 'I will be tied up with household chores all Saturday morning.',
        translations: { hi: 'व्यस्त होना (टाइड अप)' },
      },
      {
        word: 'alternative',
        ipa: '/ɔːlˈtɜːnətɪv/',
        partOfSpeech: 'noun / adjective',
        meaning: 'Another option or possibility that can be chosen instead',
        exampleSentence: 'If Saturday is not suitable, Sunday afternoon is a great alternative.',
        translations: { hi: 'विकल्प (ऑल्टरनेटिव)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I’d love to, but I have a prior engagement on Saturday.',
        functionCategory: 'Declining politely with a reason',
        exampleSentence: 'I’d love to join, but I am tied up with study revision.',
      },
      {
        phrase: 'Would Sunday afternoon suit you instead?',
        functionCategory: 'Proposing an alternative schedule',
        exampleSentence: 'Would next Tuesday work better for our lunch meetup?',
      },
      {
        phrase: 'Let’s pencil in Sunday at three o’clock.',
        functionCategory: 'Making a provisional agreement',
        exampleSentence: 'Let’s confirm the exact location over text this evening.',
      },
      {
        phrase: 'Thank you for thinking of me!',
        functionCategory: 'Expressing social appreciation',
        exampleSentence: 'Thank you for the kind invite, Priya!',
      },
    ],
    grammar: {
      title: 'Polite Declining and Rescheduling Formulas',
      conceptExplanation:
        '1. The "Soft Decline" Formula: Always start with appreciation/desire ("I’d love to..."), add a gentle contrast ("...but I have..."), and give a brief reason ("...a prior commitment").\n2. Making Alternatives: Use "How about + [Day/Time]?" or "Would [Time] work/suit you?"\n3. Future arrangements with Present Continuous: "I am meeting my cousin on Saturday" (fixed future plan).',
      patternFormula: 'I’d love to + [Base Verb], but I am + [-ing / tied up] + [How about / Would + Alternative + suit you?]',
      contrastExamples: [
        {
          incorrect: 'No, I cannot come to your photo walk.',
          correct: 'I’d love to come, but I have a prior commitment on Saturday morning.',
          explanation: 'Direct "no" sounds abrupt in social English. Soften with "I’d love to, but...".',
        },
        {
          incorrect: 'Would Sunday suits you?',
          correct: 'Would Sunday suit you?',
          explanation: 'After modal auxiliary "would", use the base form of the verb ("suit").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Priya',
        text: 'Would you like to join our weekend photography walk in the heritage park this Saturday morning?',
        translation: 'क्या आप इस शनिवार सुबह हेरिटेज पार्क में हमारे सप्ताहांत फोटोग्राफी वॉक में शामिल होना चाहेंगे?',
      },
      {
        speaker: 'Learner',
        text: 'I’d love to, Priya, but I am tied up with a family event on Saturday morning. Would Sunday afternoon suit you instead?',
        translation: 'मुझे बहुत अच्छा लगता, प्रिया, लेकिन मैं शनिवार की सुबह एक पारिवारिक कार्यक्रम में व्यस्त हूँ। क्या इसके बजाय रविवार दोपहर आपके अनुकूल रहेगा?',
      },
      {
        speaker: 'Priya',
        text: 'Sunday afternoon works perfectly! The lighting at the botanical pavilion will be gorgeous.',
        translation: 'रविवार दोपहर बिल्कुल सही रहेगा! बॉटनिकल पवेलियन में रोशनी बहुत खूबसूरत होगी।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_227_1',
      type: 'fill_blank',
      prompt: 'Complete the polite decline: "I’d love to join, ______ (but / because) I am tied up this Saturday."',
      options: [
        { id: 'opt_1', text: 'but', isCorrect: true },
        { id: 'opt_2', text: 'so', isCorrect: false },
        { id: 'opt_3', text: 'and', isCorrect: false },
      ],
      correctAnswer: 'but',
      explanation: 'Use "but" to introduce a polite contrast when declining.',
    },
    {
      id: 'cp_227_2',
      type: 'multiple_choice',
      prompt: 'Which question correctly proposes an alternative meeting time?',
      options: [
        { id: 'opt_1', text: 'Would Sunday afternoon suit you instead?', isCorrect: true },
        { id: 'opt_2', text: 'Would Sunday afternoon suits you instead?', isCorrect: false },
        { id: 'opt_3', text: 'Do Sunday afternoon will suit you?', isCorrect: false },
      ],
      correctAnswer: 'Would Sunday afternoon suit you instead?',
      explanation: '"Would [Subject] suit you?" is the correct polite modal structure.',
    },
    {
      id: 'cp_227_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [I’d love to come / but / I have / a prior commitment]',
      correctAnswer: 'I’d love to come but I have a prior commitment',
      explanation: 'Polite decline formula with contrast and reason.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_227_1',
      prompt: 'Construct a sentence politely declining Saturday morning due to a family appointment and asking if Sunday works.',
      scenarioContext: 'Replying to Priya’s weekend invitation.',
      targetStructure: 'I’d love to join, but I have a prior commitment on Saturday. Would Sunday suit you instead?',
      wordBank: ['I’d love to join,', 'but I have a prior', 'commitment on Saturday.', 'Would Sunday suit you instead,', 'Priya?'],
      acceptableSolutions: [
        'I’d love to join, but I have a prior commitment on Saturday. Would Sunday suit you instead?',
        'I’d love to come, but I am busy Saturday. Would Sunday work?',
      ],
      explanation: 'Soft decline followed by alternative rescheduling question.',
    },
    {
      id: 'sc_227_2',
      prompt: 'Construct a sentence confirming that meeting at 3 PM at the botanical pavilion is a great plan.',
      scenarioContext: 'Agreeing on the rescheduled time.',
      targetStructure: 'Sunday at three o’clock at the botanical pavilion sounds wonderful.',
      wordBank: ['Sunday at three o’clock', 'at the botanical pavilion', 'sounds wonderful,', 'Priya.'],
      acceptableSolutions: [
        'Sunday at three o’clock at the botanical pavilion sounds wonderful.',
        'Meeting on Sunday at three sounds great.',
      ],
      explanation: 'Confirmation and positive agreement formula.',
    },
  ],
  turns: [
    {
      id: 'turn_227_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! The weather this weekend is going to be clear and sunny. A few of us are organizing a photography walk in the historic quarter this Saturday morning at 10:00 AM. Would you like to come along?',
      partnerAudioText:
        'Hi there! The weather this weekend is going to be clear and sunny. A few of us are organizing a photography walk in the historic quarter this Saturday morning at 10:00 AM. Would you like to come along?',
      partnerQuestionHindi:
        'नमस्ते! इस सप्ताहांत मौसम साफ और धूप वाला रहने वाला है। हम में से कुछ लोग इस शनिवार सुबह 10:00 बजे ऐतिहासिक इलाके में फोटोग्राफी वॉक आयोजित कर रहे हैं। क्या आप साथ आना चाहेंगे?',
      expectedFunction: 'Politely declining the Saturday invitation with a soft opener, stating a prior commitment, and proposing Sunday as an alternative',
      contextGoal: 'Decline Saturday morning due to being tied up/prior commitment, and ask if Sunday afternoon works instead',
      targetVocabulary: ['I’d love to, but', 'prior commitment', 'tied up', 'Would Sunday suit you', 'alternative', 'Priya'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hi Priya! Thank you for the invite. I’d love to join, but I am tied up with a prior family commitment on Saturday morning. Would Sunday afternoon suit you instead?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Priya! That sounds like a wonderful idea. Unfortunately, I have an appointment on Saturday at ten. How about meeting on Sunday afternoon for a walk?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Thanks for thinking of me, Priya! I can’t make Saturday because of previous plans, but I am completely free on Sunday afternoon if that works for you.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_appreciation',
          patterns: ['hi priya', 'hello priya', 'thank you', 'thanks for the invite'],
          required: true,
        },
        {
          name: 'polite_decline_reason',
          patterns: ['love to but', 'prior commitment', 'tied up', 'busy', 'appointment', 'unfortunately'],
          required: true,
        },
        {
          name: 'alternative_proposal',
          patterns: ['sunday', 'afternoon', 'suit you', 'how about', 'work for you', 'free on sunday'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_227_1_abrupt_no',
          pattern: /^no i can not come saturday\.$/i,
          errorType: 'interaction',
          message: 'Soften your decline politely: "I’d love to come, Priya, but I have a prior commitment on Saturday."',
          correctionPattern: 'I’d love to, Priya, but I have a prior commitment on Saturday.',
        },
      ],
      remediationPractice: {
        id: 'rem_227_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I’d love to join, ______ (but) I have another appointment."',
        options: [
          { id: 'r1', text: 'but', isCorrect: true },
          { id: 'r2', text: 'because of', isCorrect: false },
        ],
        correctAnswer: 'but',
        explanation: 'Use "but" to introduce a polite contrast.',
      },
    },
    {
      id: 'turn_227_2',
      turnIndex: 2,
      partnerPrompt:
        'Sunday afternoon is actually even better! The afternoon golden light by the riverside promenade and the botanical gardens will be stunning for photos. What time on Sunday would suit your schedule best?',
      partnerAudioText:
        'Sunday afternoon is actually even better! The afternoon golden light by the riverside promenade and the botanical gardens will be stunning for photos. What time on Sunday would suit your schedule best?',
      partnerQuestionHindi:
        'रविवार दोपहर वास्तव में और भी बेहतर है! नदी के किनारे के सैरगाह और बॉटनिकल गार्डन में दोपहर की सुनहरी रोशनी तस्वीरों के लिए शानदार होगी। रविवार को कौन सा समय आपके शेड्यूल के लिए सबसे उपयुक्त रहेगा?',
      expectedFunction: 'Suggesting a specific meeting time (e.g. 3:00 PM) and meeting location',
      contextGoal: 'Suggest meeting at 3:00 PM at the botanical gardens entrance and checking what gear to bring',
      targetVocabulary: ['three o’clock', '3 PM', 'botanical gardens', 'suit', 'camera', 'meet'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'How about three o’clock at the main entrance of the botanical gardens? That will give us plenty of time to catch the afternoon sunlight.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Would 3:30 PM work for you? We could meet by the riverside café near the promenade and start our photo walk from there.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Let’s plan for 3:00 PM at the botanical pavilion. I will bring my digital camera and a spare memory card!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'time_and_location',
          patterns: ['three', '3', '3:00', '3:30', 'pm', 'o’clock', 'botanical', 'entrance', 'riverside', 'meet'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_227_2_preposition',
          pattern: /meet on 3 pm/i,
          errorType: 'grammar',
          message: 'Use the preposition "at" with clock times: "at 3:00 PM".',
          correctionPattern: 'How about meeting at 3:00 PM?',
        },
      ],
      remediationPractice: {
        id: 'rem_227_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly specifies meeting time and place?',
        options: [
          { id: 'r1', text: 'Let’s meet at 3:00 PM outside the botanical gardens.', isCorrect: true },
          { id: 'r2', text: 'Let’s meet on 3:00 PM at Sunday.', isCorrect: false },
        ],
        correctAnswer: 'Let’s meet at 3:00 PM outside the botanical gardens.',
        explanation: '"At" for specific time, "outside/at" for location.',
      },
    },
    {
      id: 'turn_227_3',
      turnIndex: 3,
      partnerPrompt:
        'Three o’clock at the botanical pavilion is locked in! I’ll text our group chat so everyone knows the updated plan. I’m really looking forward to our Sunday photo session!',
      partnerAudioText:
        'Three o’clock at the botanical pavilion is locked in! I’ll text our group chat so everyone knows the updated plan. I’m really looking forward to our Sunday photo session!',
      partnerQuestionHindi:
        'बॉटनिकल पवेलियन में 3:00 बजे का समय पक्का हो गया! मैं हमारे ग्रुप चैट में संदेश भेज दूँगी ताकि सभी को अपडेटेड प्लान पता चल जाए। मैं वास्तव में हमारे रविवार के फोटो सेशन के लिए उत्सुक हूँ!',
      expectedFunction: 'Expressing shared enthusiasm, confirming contact details, and bidding a polite farewell',
      contextGoal: 'Confirm the plan, say you look forward to Sunday, and wish Priya a great afternoon',
      targetVocabulary: ['locked in', 'look forward to', 'see you Sunday', 'Priya', 'have a great day'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Perfect, Priya! I really look forward to Sunday afternoon. Thank you for coordinating everything, and have a wonderful day!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'That sounds great! I’ll see you on Sunday at three. Let me know if anything changes on the chat.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Awesome! Sunday at three it is. Thanks again, Priya, and see you this weekend!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'closing_and_confirmation',
          patterns: ['look forward to', 'see you sunday', 'see you', 'perfect', 'thank you', 'priya', 'great day'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_227_3_short_bye',
          pattern: /^bye$/i,
          errorType: 'interaction',
          message: 'Close with social warmth: "Thank you, Priya! See you on Sunday at three o’clock."',
          correctionPattern: 'Thank you, Priya! I look forward to seeing everyone on Sunday.',
        },
      ],
      remediationPractice: {
        id: 'rem_227_3',
        type: 'fill_blank',
        prompt: 'Fill in: "I look forward to ______ (seeing) you on Sunday."',
        options: [
          { id: 'r1', text: 'seeing', isCorrect: true },
          { id: 'r2', text: 'see', isCorrect: false },
        ],
        correctAnswer: 'seeing',
        explanation: '"Look forward to" requires a gerund (-ing).',
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
