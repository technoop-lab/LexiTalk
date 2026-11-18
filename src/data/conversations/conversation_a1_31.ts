import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_31: ConversationDefinition = {
  id: 'conv_a1_31',
  title: 'Making, Accepting & Declining Invitations',
  cefr: 'A1',
  unitId: 'unit_a1_3',
  lessonLinks: ['lesson_a1_3_31'],
  estimatedMinutes: 5,
  scenario:
    'Your colleague Maya invites you to join some coworkers for lunch and coffee this Friday. You discuss the plan, check your schedule, accept the coffee invitation, and politely decline the lunch because of a prior appointment.',
  communicativeGoals: [
    'Extend and respond to social invitations using "Would you like to...?" and "Let\'s..."',
    'Accept invitations warmly ("I\'d love to, thank you!")',
    'Decline invitations courteously with reasons ("I\'m afraid I can\'t; I have a meeting")',
    'Propose alternative meeting times and activities ("How about we grab coffee after 2 PM?")',
  ],
  canDoStatements: [
    'Can understand and respond politely to informal and semi-formal invitations (CEFR A1.2)',
    'Can accept an invitation with enthusiasm and decline with a brief reason',
    'Can suggest an alternative time or place for a social meetup',
  ],
  characters: [
    {
      id: 'char_maya',
      name: 'Maya',
      role: 'Colleague',
      avatar: '💼',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'invitation',
        ipa: '/ˌɪnvɪˈteɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'A written or verbal request inviting someone to go somewhere or to do something',
        exampleSentence: 'Thank you for the warm invitation.',
        translations: { hi: 'निमंत्रण / न्योता' },
      },
      {
        word: 'join',
        ipa: '/dʒɔɪn/',
        partOfSpeech: 'verb',
        meaning: 'To participate with someone in an activity or gathering',
        exampleSentence: 'Would you like to join us for lunch?',
        translations: { hi: 'शामिल होना / साथ चलना' },
      },
      {
        word: 'afraid',
        ipa: '/əˈfreɪd/',
        partOfSpeech: 'adjective',
        meaning: 'Used politely to express regret or introduce an apology (I am afraid...)',
        exampleSentence: "I'm afraid I cannot make it today.",
        translations: { hi: 'खेद है / मुझे डर है कि...' },
      },
      {
        word: 'instead',
        ipa: '/ɪnˈstɛd/',
        partOfSpeech: 'adverb',
        meaning: 'As an alternative or substitute',
        exampleSentence: 'Can we meet tomorrow instead?',
        translations: { hi: 'इसके बजाय' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Would you like to join us?',
        functionCategory: 'Polite Invitation',
        exampleSentence: 'Would you like to join us for coffee?',
      },
      {
        phrase: "I'd love to, thank you!",
        functionCategory: 'Enthusiastic Acceptance',
        exampleSentence: "I'd love to, thank you for inviting me!",
      },
      {
        phrase: "I'm afraid I can't.",
        functionCategory: 'Polite Refusal',
        exampleSentence: "I'm afraid I can't come because of work.",
      },
      {
        phrase: 'How about... instead?',
        functionCategory: 'Proposing Alternative',
        exampleSentence: 'How about we meet at three o’clock instead?',
      },
    ],
    grammar: {
      title: 'Invitations & Polite Responses: Would you like to + Verb & Modals',
      conceptExplanation:
        'To invite someone politely, use "Would you like to + [base verb]?". To accept, use "I would love to!" (or "I\'d love to!"). To decline, start with a softening phrase: "I\'m sorry / I\'m afraid I can\'t because..." followed by a reason.',
      patternFormula: 'Would you like to + [Base Verb]? | I\'d love to! | I\'m afraid I can\'t because + [Reason]',
      contrastExamples: [
        {
          incorrect: 'Do you want coming with us?',
          correct: 'Would you like to come with us?',
          explanation: 'Use "Would you like to" + base verb "come" for polite invitations.',
        },
        {
          incorrect: 'I cannot because I am busy.',
          correct: "I'm afraid I can't because I have an appointment.",
          explanation: 'Add polite markers like "I\'m afraid" or "I\'m sorry" when declining.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Maya',
        text: 'Hi! A few of us are going for lunch at the Italian bistro this Friday. Would you like to join us?',
        translation: 'नमस्ते! हममें से कुछ लोग इस शुक्रवार को इटालियन बिस्टरो में लंच के लिए जा रहे हैं। क्या आप हमारे साथ चलना चाहेंगे?',
      },
      {
        speaker: 'You',
        text: "I'm afraid I can't join for lunch because I have a client meeting, but I'd love to join you for coffee afterwards!",
        translation: 'मुझे खेद है कि मैं लंच में शामिल नहीं हो सकता क्योंकि मेरी क्लाइंट मीटिंग है, लेकिन मुझे बाद में आपके साथ कॉफी पीने में बहुत खुशी होगी!',
      },
      {
        speaker: 'Maya',
        text: 'That sounds perfect! How about we meet at the café across the street around two thirty?',
        translation: 'यह बहुत बढ़िया रहेगा! सड़क के उस पार वाले कैफ़े में लगभग ढाई बजे मिलना कैसा रहेगा?',
      },
      {
        speaker: 'You',
        text: 'Two thirty works great for me. See you there on Friday!',
        translation: 'ढाई बजे मेरे लिए बिल्कुल ठीक रहेगा। शुक्रवार को वहाँ मिलते हैं!',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_31_1',
      type: 'fill_blank',
      prompt: 'Complete the polite invitation: "___ you like to join us for dinner tonight?"',
      options: [
        { id: 'opt_1', text: 'Would', isCorrect: true },
        { id: 'opt_2', text: 'Are', isCorrect: false },
        { id: 'opt_3', text: 'Did', isCorrect: false },
      ],
      correctAnswer: 'Would',
      explanation: '"Would you like to..." is the standard polite formula for inviting someone.',
    },
    {
      id: 'cp_a1_31_2',
      type: 'multiple_choice',
      prompt: 'Which response politely declines an invitation with a valid reason?',
      options: [
        { id: 'opt_1', text: "I'm afraid I can't; I have a doctor's appointment.", isCorrect: true },
        { id: 'opt_2', text: 'No, I don\'t want to see you.', isCorrect: false },
        { id: 'opt_3', text: 'I am not like to come today.', isCorrect: false },
      ],
      correctAnswer: "I'm afraid I can't; I have a doctor's appointment.",
      explanation: '"I\'m afraid I can\'t" softens the refusal and provides a polite reason.',
    },
    {
      id: 'cp_a1_31_3',
      type: 'multiple_choice',
      prompt: 'How do you suggest meeting on Friday instead?',
      options: [
        { id: 'opt_1', text: 'How about we meet on Friday afternoon instead?', isCorrect: true },
        { id: 'opt_2', text: 'Why we not meeting Friday instead of?', isCorrect: false },
        { id: 'opt_3', text: 'Are we meet Friday instead?', isCorrect: false },
      ],
      correctAnswer: 'How about we meet on Friday afternoon instead?',
      explanation: '"How about we meet..." is a natural, friendly suggestion.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_31_1',
      scenarioContext: 'Accept an invitation enthusiastically.',
      prompt: 'Build: "I would love to join you for coffee."',
      targetStructure: 'Subject + would love to + base verb + object + for noun',
      wordBank: ['I', 'would', 'love', 'to', 'join', 'you', 'for', 'coffee', 'am', 'joining', 'like'],
      acceptableSolutions: [
        'I would love to join you for coffee',
        'I would love to join you for coffee.',
      ],
      explanation: '"I would love to" expresses warm, eager acceptance.',
    },
    {
      id: 'sc_a1_31_2',
      scenarioContext: 'Decline lunch politely due to a meeting.',
      prompt: 'Build: "I am afraid I cannot join you for lunch."',
      targetStructure: 'Subject + am afraid + subject + cannot + base verb + object + for noun',
      wordBank: ['I', 'am', 'afraid', 'I', 'cannot', 'join', 'you', 'for', 'lunch', 'do', 'not', 'have'],
      acceptableSolutions: [
        'I am afraid I cannot join you for lunch',
        'I am afraid I cannot join you for lunch.',
      ],
      explanation: 'Polite refusal with "I am afraid I cannot".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_31_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! A few of us from the team are going to the new Italian restaurant this Friday for lunch. Would you like to join us?',
      partnerAudioText:
        'Hi there! A few of us from the team are going to the new Italian restaurant this Friday for lunch. Would you like to join us?',
      partnerQuestionHindi:
        'नमस्ते! टीम के कुछ लोग इस शुक्रवार को नए इतालवी रेस्तरां में दोपहर के भोजन के लिए जा रहे हैं। क्या आप हमारे साथ आना चाहेंगे?',
      expectedFunction: 'Polite Response to Lunch Invitation',
      contextGoal:
        'Acknowledge the invitation and state politely whether you can come or decline with a reason (e.g. busy / have a meeting).',
      targetVocabulary: ['would like to', 'afraid', "can't", 'love to', 'meeting', 'lunch', 'friday'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: "I'm really sorry, but I'm afraid I can't join for lunch because I have a project meeting at noon.",
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: "Thank you for the invitation! I'm afraid I have a meeting at lunch time.",
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: "I'd love to, but I'm tied up with a meeting at twelve.",
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Invitation Response',
          patterns: [
            'afraid i can',
            'sorry',
            'have a meeting',
            'love to',
            'would love to',
            'busy at noon',
            'have plans',
            'thank you for the invitation',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'no_i_cant_rude',
          pattern: /^no i cant\b/i,
          errorType: 'interaction',
          message: 'Softened language like "I\'m afraid I can\'t" sounds more polite in English.',
          correctionPattern: "I'm afraid I can't because...",
        },
      ],
      remediationPractice: {
        id: 'rem_a1_31_1',
        type: 'multiple_choice',
        prompt: 'Which phrase is the most courteous way to start declining an invitation?',
        options: [
          { id: 'opt_1', text: "I'm afraid I can't make it because...", isCorrect: true },
          { id: 'opt_2', text: "I refuse your invitation because...", isCorrect: false },
          { id: 'opt_3', text: "I don't care to go because...", isCorrect: false },
        ],
        correctAnswer: "I'm afraid I can't make it because...",
        explanation: '"I\'m afraid I can\'t make it" is polite and courteous.',
      },
    },
    {
      id: 'turn_a1_31_2',
      turnIndex: 2,
      partnerPrompt:
        'Oh, that is too bad about lunch! But we are also grabbing coffee together right after our team review at two thirty. Would you like to come for coffee instead?',
      partnerAudioText:
        'Oh, that is too bad about lunch! But we are also grabbing coffee together right after our team review at two thirty. Would you like to come for coffee instead?',
      partnerQuestionHindi:
        'अरे, दोपहर के भोजन के लिए नहीं आ पाना दुखद है! लेकिन हम ढाई बजे टीम समीक्षा के ठीक बाद साथ में कॉफी भी पी रहे हैं। क्या आप इसके बजाय कॉफी के लिए आना चाहेंगे?',
      expectedFunction: 'Accept Second Invitation Enthusiastically',
      contextGoal:
        'Accept the coffee invitation enthusiastically using "I\'d love to" and confirm that two thirty works.',
      targetVocabulary: ["i'd love to", 'coffee', 'sounds great', 'two thirty', 'perfect', 'join you'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: "I'd love to join you for coffee at two thirty! That sounds wonderful.",
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Yes, I would love to! Two thirty works perfectly for me.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Count me in for coffee! Two thirty is great.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Acceptance & Time Confirmation',
          patterns: [
            'love to',
            'would love to',
            'sounds great',
            'sounds wonderful',
            'two thirty',
            'perfect',
            'works for me',
            'join you',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_31_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank to accept: "I would ___ to come with you!"',
        options: [
          { id: 'opt_1', text: 'love', isCorrect: true },
          { id: 'opt_2', text: 'loving', isCorrect: false },
          { id: 'opt_3', text: 'loved', isCorrect: false },
        ],
        correctAnswer: 'love',
        explanation: 'Use base verb "love" after modal "would": "I would love to".',
      },
    },
    {
      id: 'turn_a1_31_3',
      turnIndex: 3,
      partnerPrompt:
        'Awesome! We are thinking of going to the café on Maple Street or the one in the lobby. Which one do you prefer?',
      partnerAudioText:
        'Awesome! We are thinking of going to the café on Maple Street or the one in the lobby. Which one do you prefer?',
      partnerQuestionHindi:
        'शानदार! हम मेपल स्ट्रीट वाले कैफ़े या लॉबी वाले कैफ़े में जाने की सोच रहे हैं। आप किसे पसंद करते हैं?',
      expectedFunction: 'Express Preference & Suggest Venue',
      contextGoal:
        'State your preference between the two venues clearly with a reason (e.g. quieter / closer / better pastries).',
      targetVocabulary: ['prefer', 'maple street', 'lobby', 'because', 'quiet', 'closer', 'coffee'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I prefer the café on Maple Street because it has plenty of seating and great coffee.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Let\'s go to Maple Street. It is very cozy and quiet.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Maple Street café for sure! Their espresso is much better.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Preference Expression',
          patterns: ['prefer', 'maple', 'lobby', 'let\'s go', 'because', 'better', 'like the', 'closer'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_31_3',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly expresses a preference between two places?',
        options: [
          { id: 'opt_1', text: 'I prefer the café on Maple Street because it is quiet.', isCorrect: true },
          { id: 'opt_2', text: 'I am prefer Maple Street coffee shop.', isCorrect: false },
          { id: 'opt_3', text: 'I more like lobby café than it.', isCorrect: false },
        ],
        correctAnswer: 'I prefer the café on Maple Street because it is quiet.',
        explanation: '"I prefer [place] because..." is grammatically correct and natural.',
      },
    },
    {
      id: 'turn_a1_31_4',
      turnIndex: 4,
      partnerPrompt:
        'Maple Street it is! I will send an invite to your calendar for two thirty on Friday. See you then!',
      partnerAudioText:
        'Maple Street it is! I will send an invite to your calendar for two thirty on Friday. See you then!',
      partnerQuestionHindi:
        'तो मेपल स्ट्रीट ही सही! मैं शुक्रवार दोपहर ढाई बजे के लिए आपके कैलेंडर पर आमंत्रण भेज दूँगी। तब मिलते हैं!',
      expectedFunction: 'Acknowledge Confirmation & Part Politely',
      contextGoal:
        'Thank Maya for organizing, confirm you will accept the calendar invite, and say a friendly goodbye.',
      targetVocabulary: ['thank you', 'see you', 'friday', 'calendar', 'looking forward', 'bye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you so much, Maya! I will accept the invite. Looking forward to seeing you on Friday!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Sounds great, thanks Maya! See you on Friday at two thirty.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Perfect! Thanks Maya, see you Friday!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Farewell & Confirmation',
          patterns: ['thank you', 'thanks', 'see you', 'friday', 'looking forward', 'sounds great', 'perfect'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_31_4',
        type: 'multiple_choice',
        prompt: 'What is a polite closing remark when finalizing a plan with a colleague?',
        options: [
          { id: 'opt_1', text: 'Thanks Maya, looking forward to seeing you on Friday!', isCorrect: true },
          { id: 'opt_2', text: 'I am stopping now goodbye.', isCorrect: false },
          { id: 'opt_3', text: 'You must come Friday.', isCorrect: false },
        ],
        correctAnswer: 'Thanks Maya, looking forward to seeing you on Friday!',
        explanation: 'Warm, professional, and courteous.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 2,
    targetVocabularyCoveragePct: 70,
  },
};
