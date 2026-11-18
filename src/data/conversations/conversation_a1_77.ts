import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_77: ConversationDefinition = {
  id: 'conv_a1_77',
  title: 'Professional Follow-Ups, Rescheduling & Calendar Adjustments',
  cefr: 'A1',
  unitId: 'unit_a1_6',
  lessonLinks: ['lesson_a1_6_77'],
  estimatedMinutes: 5,
  scenario:
    'You are coordinating project schedules with your team lead, Marcus Reed, in London. Due to an urgent client delivery conflict on Wednesday morning, you need to reschedule your team design sync, propose alternative calendar slots, and confirm the adjusted meeting details.',
  communicativeGoals: [
    'Apologize for an unexpected scheduling conflict politely',
    'Propose alternative meeting days and times using "Would... work for you?" and "How about...?"',
    'Confirm agreed calendar appointments with specific times and locations',
    'Retrieve earlier A1 calendar days, times of day, and polite email/messaging chunks',
  ],
  canDoStatements: [
    'Can politely notify a colleague about a schedule conflict',
    'Can propose alternative meeting times and check availability',
    'Can summarize and confirm a rescheduled appointment clearly',
  ],
  characters: [
    {
      id: 'char_marcus_reed',
      name: 'Marcus Reed',
      role: 'Design Team Lead',
      avatar: '📆',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'reschedule',
        ipa: '/ˌriːˈskɛdʒuːl/',
        partOfSpeech: 'verb',
        meaning: 'Change the time of a planned event',
        exampleSentence: 'Could we reschedule our meeting to Thursday afternoon?',
        translations: { hi: 'पुनर्निर्धारित करना / समय बदलना' },
      },
      {
        word: 'conflict',
        ipa: '/ˈkɒnflɪkt/',
        partOfSpeech: 'noun',
        meaning: 'A clash or incompatibility between schedules or commitments',
        exampleSentence: 'I apologize for the schedule conflict on Wednesday.',
        translations: { hi: 'टकराव / समय का विरोध' },
      },
      {
        word: 'availability',
        ipa: '/əˌveɪləˈbɪləti/',
        partOfSpeech: 'noun',
        meaning: 'The state of being available or free to meet',
        exampleSentence: 'Please let me know your availability for tomorrow.',
        translations: { hi: 'उपलब्धता' },
      },
      {
        word: 'calendar',
        ipa: '/ˈkælɪndər/',
        partOfSpeech: 'noun',
        meaning: 'A chart or app showing days and scheduled appointments',
        exampleSentence: 'I will send an updated calendar invite right away.',
        translations: { hi: 'कैलेंडर / कार्यसूची' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am writing to apologize for the conflict.',
        functionCategory: 'Apologizing',
        exampleSentence: 'I am writing to apologize for the conflict with Wednesday’s sync.',
      },
      {
        phrase: 'Would Thursday at 2:00 PM suit you?',
        functionCategory: 'Proposing Time',
        exampleSentence: 'Would Thursday at 2:00 PM suit you instead?',
      },
      {
        phrase: 'How does your schedule look on Friday?',
        functionCategory: 'Checking Availability',
        exampleSentence: 'How does your schedule look on Friday morning?',
      },
      {
        phrase: 'I will send a revised calendar invite.',
        functionCategory: 'Confirming Action',
        exampleSentence: 'I will send a revised calendar invite with the new video link.',
      },
    ],
    grammar: {
      title: 'Polite Rescheduling: Modals "Would" & "Could"',
      conceptExplanation:
        'Use "Would [day/time] work for you?" or "Could we meet at [time]?" to offer alternative appointment times politely.',
      patternFormula: 'Would + [Day / Time] + work for you / suit you? / Could we reschedule to [Day] at [Time]?',
      contrastExamples: [
        {
          incorrect: 'Change meeting now to Friday 2 o\'clock.',
          correct: 'Would Friday at 2:00 PM work for you instead?',
          explanation: 'Use modal "Would" for professional flexibility.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Marcus Reed',
        text: 'Hi Alex! I received your note about Wednesday’s design sync. Are you still able to make 10:00 AM?',
        translation: 'नमस्ते एलेक्स! मुझे बुधवार के डिज़ाइन सिंक के बारे में आपका नोट मिला। क्या आप अभी भी सुबह 10:00 बजे आ सकते हैं?',
      },
      {
        speaker: 'You',
        text: 'Hi Marcus. I apologize, but an urgent client review came up at 10:00 AM. Could we reschedule to Thursday at 2:00 PM instead?',
        translation: 'नमस्ते मार्कस। मैं क्षमा चाहता हूँ, लेकिन सुबह 10:00 बजे एक तत्काल क्लाइंट समीक्षा आ गई है। क्या हम इसके बजाय गुरुवार को दोपहर 2:00 बजे पुनर्निर्धारित कर सकते हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_77_1',
      type: 'fill_blank',
      prompt: 'Complete the polite proposal: "___ Thursday at 3:00 PM suit your schedule?"',
      options: [
        { id: 'opt_1', text: 'Would', isCorrect: true },
        { id: 'opt_2', text: 'Did', isCorrect: false },
        { id: 'opt_3', text: 'Have', isCorrect: false },
      ],
      correctAnswer: 'Would',
      explanation: 'Use modal "Would" to propose times.',
    },
    {
      id: 'cp_a1_77_2',
      type: 'multiple_choice',
      prompt: 'Which phrase explains a schedule conflict politely?',
      options: [
        { id: 'opt_1', text: 'I apologize, but I have a prior client commitment at that time.', isCorrect: true },
        { id: 'opt_2', text: 'No meeting today I am busy bye.', isCorrect: false },
        { id: 'opt_3', text: 'I do not want to talk at ten.', isCorrect: false },
      ],
      correctAnswer: 'I apologize, but I have a prior client commitment at that time.',
      explanation: 'Professional and courteous explanation.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_77_1',
      scenarioContext: 'Propose a new meeting slot.',
      prompt: 'Build: "Could we meet on Friday at ten?"',
      targetStructure: 'Could we meet on Friday at ten',
      wordBank: ['Could', 'we', 'meet', 'on', 'Friday', 'at', 'ten', 'meeting', 'will', 'in'],
      acceptableSolutions: [
        'Could we meet on Friday at ten',
        'Could we meet on Friday at ten?',
      ],
      explanation: 'Modal "Could we meet on [Day] at [Time]".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_77_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi Alex! I saw your message about Wednesday morning. What is the conflict with our 10:00 AM design sync?',
      partnerAudioText:
        'Hi Alex! I saw your message about Wednesday morning. What is the conflict with our 10:00 AM design sync?',
      partnerQuestionHindi:
        'नमस्ते एलेक्स! मैंने बुधवार की सुबह के बारे में आपका संदेश देखा। हमारे सुबह 10:00 बजे के डिज़ाइन सिंक के साथ क्या समस्या है?',
      expectedFunction: 'Apologize for Schedule Conflict & Explain Reason',
      contextGoal:
        'Apologize for the conflict and explain that an urgent client product demo has been booked at 10:00 AM on Wednesday.',
      targetVocabulary: ['apologize for the conflict', 'urgent client demo', 'at 10:00 AM on Wednesday', 'need to reschedule'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffolding',
          text: 'Hi Marcus! I apologize for the conflict, but our client scheduled an urgent product demo for Wednesday at 10:00 AM, so I need to reschedule our sync.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Apology & Conflict Explanation',
          patterns: [
            'apologize',
            'sorry',
            'conflict',
            'client',
            'demo',
            'wednesday',
            'reschedule',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_77_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I apologize ___ the short notice."',
        options: [
          { id: 'opt_1', text: 'for', isCorrect: true },
          { id: 'opt_2', text: 'with', isCorrect: false },
          { id: 'opt_3', text: 'on', isCorrect: false },
        ],
        correctAnswer: 'for',
        explanation: 'Collocation: "apologize for [something]".',
      },
    },
    {
      id: 'turn_a1_77_2',
      turnIndex: 2,
      partnerPrompt:
        'No problem at all—client demos always take priority. What alternative slots do you have available later this week?',
      partnerAudioText:
        'No problem at all—client demos always take priority. What alternative slots do you have available later this week?',
      partnerQuestionHindi:
        'कोई बात नहीं—क्लाइंट डेमो हमेशा प्राथमिकता लेते हैं। इस सप्ताह के अंत में आपके पास कौन से वैकल्पिक स्लॉट उपलब्ध हैं?',
      expectedFunction: 'Propose Specific Alternative Dates & Times',
      contextGoal:
        'Propose Thursday at 2:00 PM or Friday morning at 10:30 AM, and ask if either of those fits Marcus’s calendar.',
      targetVocabulary: ['would Thursday at 2:00 PM suit you', 'Friday at 10:30 AM', 'available slots', 'work for your calendar'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffolding',
          text: 'Would Thursday at 2:00 PM suit you? If not, I am also completely free on Friday morning at 10:30 AM.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Proposed Slots',
          patterns: [
            'thursday',
            '2:00',
            'friday',
            '10:30',
            'suit you',
            'work for you',
            'free',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_77_2',
        type: 'multiple_choice',
        prompt: 'Which question offers two clear options politely?',
        options: [
          { id: 'opt_1', text: 'Would Thursday at 2:00 PM or Friday at 10:30 AM work best for you?', isCorrect: true },
          { id: 'opt_2', text: 'You pick time Friday Thursday whatever.', isCorrect: false },
          { id: 'opt_3', text: 'Meet when I say.', isCorrect: false },
        ],
        correctAnswer: 'Would Thursday at 2:00 PM or Friday at 10:30 AM work best for you?',
        explanation: 'Clear and polite offering of choices.',
      },
    },
    {
      id: 'turn_a1_77_3',
      turnIndex: 3,
      partnerPrompt:
        'Thursday at 2:00 PM is perfect for me. Let’s do a 45-minute video call. What agenda items should we cover?',
      partnerAudioText:
        'Thursday at 2:00 PM is perfect for me. Let’s do a 45-minute video call. What agenda items should we cover?',
      partnerQuestionHindi:
        'गुरुवार को दोपहर 2:00 बजे मेरे लिए एकदम सही है। आइए 45 मिनट का वीडियो कॉल करें। हमें किन एजेंडा मदों को शामिल करना चाहिए?',
      expectedFunction: 'Outline Agenda Items & Objectives',
      contextGoal:
        'Explain that the agenda will cover the updated mobile UI wireframes, user testing feedback, and sprint task allocations.',
      targetVocabulary: ['cover mobile UI wireframes', 'user testing feedback', 'sprint task allocation', 'agenda items'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffolding',
          text: 'Great! In our 45 minutes, we can review the mobile UI wireframes, discuss user testing feedback, and allocate our next sprint tasks.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Agenda Topics',
          patterns: [
            'wireframes',
            'user testing',
            'feedback',
            'sprint',
            'tasks',
            'review',
            'mobile',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_77_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We will review the wireframes and ___ next sprint tasks."',
        options: [
          { id: 'opt_1', text: 'assign', isCorrect: true },
          { id: 'opt_2', text: 'sleep', isCorrect: false },
          { id: 'opt_3', text: 'cancel', isCorrect: false },
        ],
        correctAnswer: 'assign',
        explanation: '"assign" fits workplace task management.',
      },
    },
    {
      id: 'turn_a1_77_4',
      turnIndex: 4,
      partnerPrompt:
        'Excellent agenda. Please update the calendar invite so everyone gets the new link and agenda notes.',
      partnerAudioText:
        'Excellent agenda. Please update the calendar invite so everyone gets the new link and agenda notes.',
      partnerQuestionHindi:
        'उत्कृष्ट एजेंडा। कृपया कैलेंडर आमंत्रण अपडेट करें ताकि सभी को नया लिंक और एजेंडा नोट्स मिल सकें।',
      expectedFunction: 'Confirm Calendar Invite Update & Conclude Interaction',
      contextGoal:
        'Confirm you will send the revised calendar invite with the video link right away and thank Marcus for his flexibility.',
      targetVocabulary: ['send revised calendar invite', 'video call link', 'thank you for your flexibility', 'see you on Thursday at 2:00 PM'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffolding',
          text: 'I will send the revised calendar invite with the video call link right now. Thank you for your flexibility Marcus, and see you on Thursday at 2:00 PM!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Confirmation & Thanks',
          patterns: [
            'calendar invite',
            'link',
            'thank you',
            'flexibility',
            'see you',
            'thursday',
            '2:00',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_77_4',
        type: 'multiple_choice',
        prompt: 'Which closing effectively confirms a calendar follow-up?',
        options: [
          { id: 'opt_1', text: 'I will send the updated calendar invite right now. Thank you for your flexibility!', isCorrect: true },
          { id: 'opt_2', text: 'I do not care about calendar.', isCorrect: false },
          { id: 'opt_3', text: 'Calendar is broken no link.', isCorrect: false },
        ],
        correctAnswer: 'I will send the updated calendar invite right now. Thank you for your flexibility!',
        explanation: 'Polite, active, and reassuring follow-up.',
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
