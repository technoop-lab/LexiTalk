import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_138: ConversationDefinition = {
  id: 'conv_a2_138',
  title: 'Scheduling Meetings, Appointments & Resolving Conflicts',
  cefr: 'A2',
  unitId: 'unit_a2_10',
  lessonLinks: ['lesson_a2_10_138'],
  estimatedMinutes: 5,
  scenario:
    'You are in the office at Vertex Media in Leeds. You need to reschedule your quarterly performance review with department coordinator Marcus Vance because an urgent offsite client workshop was booked at the same time. Propose alternative time slots, compare availability using present continuous and future forms, and confirm the new appointment.',
  communicativeGoals: [
    'Politely explain a scheduling conflict and request to move a meeting',
    'Propose alternative dates and times using "Are you free on...?", "How about...?", and "Would... suit you?"',
    'Describe future availability using Present Continuous for fixed arrangements ("I am meeting...", "I am attending...")',
    'Confirm calendar invites and meeting locations (in person vs. video call)',
  ],
  canDoStatements: [
    'Can explain why an appointment cannot be kept and ask for a postponement',
    'Can propose and negotiate alternative meeting times politely',
    'Can confirm calendar updates and meeting details clearly',
  ],
  characters: [
    {
      id: 'char_marcus_vance',
      name: 'Marcus Vance',
      role: 'Department Coordinator',
      avatar: '📅',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'reschedule',
        ipa: '/ˌriːˈskedʒuːl/',
        partOfSpeech: 'verb',
        meaning: 'To change the time or date of a planned event or meeting',
        exampleSentence: 'Could we reschedule our 2:00 PM meeting to Thursday morning?',
        translations: { hi: 'नया समय या तारीख तय करना / पुनर्निर्धारित करना' },
      },
      {
        word: 'conflict',
        ipa: '/ˈkɒnflɪkt/',
        partOfSpeech: 'noun',
        meaning: 'A clash between two events scheduled for the same time',
        exampleSentence: 'I have a calendar conflict because of an offsite client workshop.',
        translations: { hi: 'समय का टकराव / अंतर्विरोध' },
      },
      {
        word: 'availability',
        ipa: '/əˌveɪləˈbɪləti/',
        partOfSpeech: 'noun',
        meaning: 'The state of being free or unoccupied to attend a meeting',
        exampleSentence: 'Please let me know your availability for next Wednesday.',
        translations: { hi: 'उपलब्धता / खाली समय' },
      },
      {
        word: 'convenient',
        ipa: '/kənˈviːniənt/',
        partOfSpeech: 'adjective',
        meaning: 'Fitting in well with a person’s needs, activities, and plans',
        exampleSentence: 'Would Wednesday afternoon be convenient for you?',
        translations: { hi: 'सुविधाजनक / अनुकूल' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I’m afraid I have a scheduling clash on Tuesday morning.',
        functionCategory: 'Stating a Calendar Conflict',
        exampleSentence: 'I have a clash with a dentist appointment.',
      },
      {
        phrase: 'Would Wednesday at 3:00 PM suit you, or are you tied up then?',
        functionCategory: 'Proposing Alternative Times',
        exampleSentence: 'Does Friday morning suit you better?',
      },
      {
        phrase: 'I am attending a client workshop all morning on Thursday.',
        functionCategory: 'Present Continuous for Fixed Arrangements',
        exampleSentence: 'I am travelling to Manchester tomorrow.',
      },
      {
        phrase: 'I will send over an updated calendar invite right away.',
        functionCategory: 'Confirming Action & Next Steps',
        exampleSentence: 'I will book the meeting room now.',
      },
    ],
    grammar: {
      title: 'Scheduling Formulas & Present Continuous for Fixed Arrangements',
      conceptExplanation:
        '1. Proposing Times: "Would [Time] suit you?", "How about [Day/Time]?", "Are you free on [Day]?"\n2. Fixed Future Plans: Use Present Continuous (e.g., "I am facilitating a workshop on Tuesday", "We are meeting the director").\n3. Politeness & Indirect Requests: "Could we possibly move our review to Wednesday?"',
      patternFormula: 'I am afraid I am [verb-ing] on [Day] -> Would [Alternative Time] suit you?',
      contrastExamples: [
        {
          incorrect: 'I will can’t come because I am do a workshop.',
          correct: 'I won’t be able to make it because I am attending a workshop.',
          explanation: 'Never combine "will" and "can\'t"; use "won\'t be able to" and Present Continuous for planned events.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Marcus Vance',
        text: 'Hi! Just checking our calendar—we have our quarterly review booked for Tuesday at 10:00 AM. Does that still work for you?',
        translation: 'नमस्ते! बस हमारा कैलेंडर देख रहा हूँ—हमारी तिमाही समीक्षा मंगलवार को सुबह 10:00 बजे निर्धारित है। क्या यह समय आपके लिए अभी भी ठीक है?',
      },
      {
        speaker: 'You',
        text: 'I’m afraid I have a calendar conflict on Tuesday morning because I am attending an offsite client workshop. Would Wednesday at 2:00 PM suit you instead?',
        translation: 'मुझे डर है कि मंगलवार की सुबह मेरा समय टकरा रहा है क्योंकि मैं एक बाहरी क्लाइंट वर्कशॉप में भाग ले रहा हूँ। क्या इसके बजाय बुधवार को दोपहर 2:00 बजे आपके लिए अनुकूल रहेगा?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_138_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "I’m sorry, but I ___ (am attending / will attending) a training session on Tuesday."',
      options: [
        { id: 'opt_1', text: 'am attending', isCorrect: true },
        { id: 'opt_2', text: 'will attending', isCorrect: false },
        { id: 'opt_3', text: 'attended', isCorrect: false },
      ],
      correctAnswer: 'am attending',
      explanation: 'Use Present Continuous ("am attending") for fixed future plans.',
    },
    {
      id: 'cp_a2_138_2',
      type: 'multiple_choice',
      prompt: 'Which phrase is the most natural way to suggest a meeting time?',
      options: [
        { id: 'opt_1', text: 'Would Wednesday afternoon suit you?', isCorrect: true },
        { id: 'opt_2', text: 'You come Wednesday afternoon must.', isCorrect: false },
        { id: 'opt_3', text: 'Wednesday afternoon is mandatory for you?', isCorrect: false },
      ],
      correctAnswer: 'Would Wednesday afternoon suit you?',
      explanation: '"Would [Time] suit you?" is the standard polite business formula.',
    },
    {
      id: 'cp_a2_138_3',
      type: 'multiple_choice',
      prompt: 'What does "tied up" mean in a scheduling conversation?',
      options: [
        { id: 'opt_1', text: 'Busy or committed with another task or meeting', isCorrect: true },
        { id: 'opt_2', text: 'Bound with physical rope', isCorrect: false },
        { id: 'opt_3', text: 'Completely free and available', isCorrect: false },
      ],
      correctAnswer: 'Busy or committed with another task or meeting',
      explanation: '"Tied up" is an idiom meaning busy with work or appointments.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_138_1',
      scenarioContext: 'Explain a calendar conflict.',
      prompt: 'Build: "I have a scheduling clash on Tuesday morning."',
      targetStructure: 'Subject + have + article + adjective + noun + prepositional phrase',
      wordBank: ['I', 'have', 'a', 'scheduling', 'clash', 'on', 'Tuesday', 'morning', 'am', 'having'],
      acceptableSolutions: [
        'I have a scheduling clash on Tuesday morning',
        'I have a scheduling clash on Tuesday morning.',
      ],
      explanation: 'States a meeting conflict clearly.',
    },
    {
      id: 'sc_a2_138_2',
      scenarioContext: 'Propose Wednesday at 2:00 PM.',
      prompt: 'Build: "Would Wednesday at two suit your schedule?"',
      targetStructure: 'Modal + day + time + base verb + possessive + noun',
      wordBank: ['Would', 'Wednesday', 'at', 'two', 'suit', 'your', 'schedule', 'suiting', 'is'],
      acceptableSolutions: [
        'Would Wednesday at two suit your schedule',
        'Would Wednesday at two suit your schedule?',
      ],
      explanation: 'Polite suggestion using "suit your schedule".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_138_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! I am going through this week’s calendar. We have our quarterly review scheduled for Tuesday at 10:00 AM. Does that still work for you, or do you have any conflicts?',
      partnerAudioText:
        'Hi there! I am going through this week’s calendar. We have our quarterly review scheduled for Tuesday at 10:00 AM. Does that still work for you, or do you have any conflicts?',
      partnerQuestionHindi:
        'नमस्ते! मैं इस सप्ताह का कैलेंडर देख रहा हूँ। हमारी तिमाही समीक्षा मंगलवार को सुबह 10:00 बजे निर्धारित है। क्या वह समय आपके लिए अभी भी ठीक है, या आपका कोई टकराव है?',
      expectedFunction: 'State Conflict & Request Postponement (scheduling conflict / clash / offsite workshop / reschedule)',
      contextGoal:
        'Explain that you have an unexpected calendar clash because you are attending an offsite client workshop on Tuesday morning, and politely ask to reschedule.',
      targetVocabulary: ['I’m afraid I have a scheduling clash', 'attending an offsite client workshop', 'could we reschedule', 'not available on Tuesday morning'],
      suggestedResponses: [
        {
          label: 'Polite Explanation',
          text: 'I’m afraid I have a scheduling clash on Tuesday morning because I am attending an offsite client workshop. Could we possibly reschedule our review for another day?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Request',
          text: 'Unfortunately, I have a clash with a client meeting on Tuesday. Would it be possible to move our review to Wednesday or Thursday?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Conflict & Reschedule (clash / conflict / busy / workshop / client / reschedule / move / another day / tuesday)',
          patterns: ['clash', 'conflict', 'busy', 'workshop', 'client', 'reschedule', 'move', 'another day', 'tuesday', 'tied up'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'will_cant_rule',
          pattern: /\bwill can't\b|\bwill cannot\b/i,
          errorType: 'grammar',
          message: 'Do not say "will can\'t". Say "I won’t be able to attend" or "I am busy".',
          correctionPattern: 'I won’t be able to attend',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_138_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I ___ (won’t be able to / will can’t) make it on Tuesday."',
        options: [
          { id: 'opt_1', text: 'won’t be able to', isCorrect: true },
          { id: 'opt_2', text: 'will can’t', isCorrect: false },
          { id: 'opt_3', text: 'am not can', isCorrect: false },
        ],
        correctAnswer: 'won’t be able to',
        explanation: 'Use "won\'t be able to" for future inability.',
      },
    },
    {
      id: 'turn_a2_138_2',
      turnIndex: 2,
      partnerPrompt:
        'No problem at all, client workshops take priority. Let’s look at Wednesday and Thursday. I have availability on Wednesday after 2:00 PM, and Thursday morning before 11:30 AM. What looks best on your end?',
      partnerAudioText:
        'No problem at all, client workshops take priority. Let’s look at Wednesday and Thursday. I have availability on Wednesday after 2:00 PM, and Thursday morning before 11:30 AM. What looks best on your end?',
      partnerQuestionHindi:
        'कोई बात नहीं, क्लाइंट वर्कशॉप को प्राथमिकता मिलती है। आइए बुधवार और गुरुवार को देखें। मेरे पास बुधवार को दोपहर 2:00 बजे के बाद और गुरुवार की सुबह 11:30 बजे से पहले उपलब्धता है। आपके लिए क्या सबसे अच्छा रहेगा?',
      expectedFunction: 'Propose Specific Alternative Time (Wednesday at 2:30 PM / Would... suit you? / Thursday morning)',
      contextGoal:
        'Select a specific slot (e.g. Wednesday at 2:30 PM or 3:00 PM) and check if that suits Marcus.',
      targetVocabulary: ['Wednesday at 2:30 PM would suit me perfectly', 'I am free all Wednesday afternoon', 'Would 3:00 PM work for you?', 'lock in the time'],
      suggestedResponses: [
        {
          label: 'Specific Suggestion',
          text: 'Wednesday at 2:30 PM would suit me perfectly. I am completely free Wednesday afternoon, so that gives us plenty of time to discuss everything.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Alternative Option',
          text: 'How about Wednesday at 3:00 PM? That works well with my schedule if that is convenient for you.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Day & Time Selection (wednesday / thursday / 2:00 / 2:30 / 3:00 / morning / afternoon / suit / works / free)',
          patterns: ['wednesday', 'thursday', '2:00', '2:30', '3:00', 'morning', 'afternoon', 'suit', 'works', 'free', 'convenient', 'good'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_138_2',
        type: 'multiple_choice',
        prompt: 'Which phrase is most natural?',
        options: [
          { id: 'opt_1', text: 'Wednesday at 2:30 PM would suit me perfectly.', isCorrect: true },
          { id: 'opt_2', text: 'Wednesday at 2:30 PM is suiting to me.', isCorrect: false },
          { id: 'opt_3', text: 'I suit Wednesday 2:30 PM.', isCorrect: false },
        ],
        correctAnswer: 'Wednesday at 2:30 PM would suit me perfectly.',
        explanation: 'Standard idiom: "[Time] suits [Person]".',
      },
    },
    {
      id: 'turn_a2_138_3',
      turnIndex: 3,
      partnerPrompt:
        'Wednesday at 2:30 PM works wonderfully. Should we hold the meeting in Conference Room B, or would you prefer to do it via video conference since you might be traveling back from the workshop?',
      partnerAudioText:
        'Wednesday at 2:30 PM works wonderfully. Should we hold the meeting in Conference Room B, or would you prefer to do it via video conference since you might be traveling back from the workshop?',
      partnerQuestionHindi:
        'बुधवार दोपहर 2:30 बजे बहुत अच्छा रहेगा। क्या हमें सम्मेलन कक्ष बी में बैठक करनी चाहिए, या क्या आप वीडियो कॉन्फ्रेंस के माध्यम से करना पसंद करेंगे क्योंकि आप वर्कशॉप से वापस यात्रा कर रहे होंगे?',
      expectedFunction: 'Express Meeting Preference & Ask Confirmation Question (prefer in person / video call / Room B / send invite?)',
      contextGoal:
        'State your preference (e.g. Conference Room B in person, or video link) and ask Marcus if he will send the updated calendar invite.',
      targetVocabulary: ['I would prefer to meet in person', 'Conference Room B is great', 'video call works too', 'Will you send the calendar invite?'],
      suggestedResponses: [
        {
          label: 'Clear Preference with Question',
          text: 'I will be back in the office by Wednesday noon, so I would prefer to meet in person in Conference Room B. Will you send over the updated calendar invite?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Choice',
          text: 'Let’s meet in Conference Room B. Could you send the calendar invitation with the updated room details?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Preference (in person / conference room / room b / video / online / prefer / meet)',
          patterns: ['in person', 'conference room', 'room b', 'video', 'online', 'prefer', 'meet', 'face to face'],
          required: true,
        },
        {
          name: 'Follow-up / Invite (calendar invite / invitation / send / email / link / ?)',
          patterns: ['calendar', 'invite', 'invitation', 'send', 'email', 'link', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_138_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I would prefer ___ (to meet / meeting) in person."',
        options: [
          { id: 'opt_1', text: 'to meet', isCorrect: true },
          { id: 'opt_2', text: 'meeting', isCorrect: false },
          { id: 'opt_3', text: 'meet', isCorrect: false },
        ],
        correctAnswer: 'to meet',
        explanation: 'Use "would prefer to + base verb".',
      },
    },
    {
      id: 'turn_a2_138_4',
      turnIndex: 4,
      partnerPrompt:
        'Terrific! I’ve just updated our Google Calendar invitation for Wednesday at 2:30 PM in Conference Room B and booked the room. Looking forward to our discussion then!',
      partnerAudioText:
        'Terrific! I’ve just updated our Google Calendar invitation for Wednesday at 2:30 PM in Conference Room B and booked the room. Looking forward to our discussion then!',
      partnerQuestionHindi:
        'शानदार! मैंने सम्मेलन कक्ष बी में बुधवार को दोपहर 2:30 बजे के लिए हमारा गूगल कैलेंडर आमंत्रण अपडेट कर दिया है और कमरा बुक कर दिया है। तब हमारी चर्चा का इंतजार रहेगा!',
      expectedFunction: 'Acknowledge, Confirm & Close Cordially (Thank you Marcus / looking forward to it / see you Wednesday)',
      contextGoal:
        'Thank Marcus for accommodating the change, confirm receipt of the invite, and close cordially.',
      targetVocabulary: ['Thank you Marcus', 'I received the invite', 'looking forward to it', 'see you on Wednesday at 2:30 PM'],
      suggestedResponses: [
        {
          label: 'Polite Closing',
          text: 'Thank you very much for your flexibility, Marcus. I have just accepted the calendar invite and I look forward to seeing you on Wednesday at 2:30 PM!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Short Closing',
          text: 'Thank you for adjusting the schedule. See you Wednesday at 2:30 PM!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Appreciation (thank you / thanks / accepted / see you / wednesday / looking forward / 2:30)',
          patterns: ['thank you', 'thanks', 'accepted', 'see you', 'wednesday', 'looking forward', '2:30', 'appreciate'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_138_4',
        type: 'multiple_choice',
        prompt: 'Which closing phrase is polite and natural?',
        options: [
          { id: 'opt_1', text: 'Thank you for your flexibility, see you Wednesday!', isCorrect: true },
          { id: 'opt_2', text: 'I am finished now goodbye.', isCorrect: false },
          { id: 'opt_3', text: 'Meeting is locked you must come.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for your flexibility, see you Wednesday!',
        explanation: 'Courteous and professional closure for scheduling.',
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
