import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_RESCHEDULE: ConversationDefinition = {
  id: 'conv_a2_reschedule',
  title: 'Rescheduling a Project Meeting with a Colleague',
  cefr: 'A2',
  unitId: 'unit_12',
  lessonLinks: ['lesson_a2_12_1', 'lesson_a2_12_2', 'lesson_a2_18_1'],
  estimatedMinutes: 6,
  scenario:
    'You had a project planning meeting scheduled for Tuesday at 2:00 PM with your teammate Sarah. However, you have an urgent dentist appointment at that time. Call Sarah to explain the conflict, apologize politely, suggest an alternative time, and confirm the new schedule.',
  communicativeGoals: [
    'Explain the scheduling problem politely using modal/polite forms',
    'Give a clear, simple reason for the conflict (dentist appointment/urgent task)',
    'Suggest alternative days and times (e.g. Wednesday afternoon or Thursday morning)',
    'Negotiate and agree upon a mutually convenient meeting slot',
    'Reiterate and confirm the final time with polite closing',
  ],
  canDoStatements: [
    'Can make and respond to suggestions for meeting times (CEFR A2 Speaking)',
    'Can give simple reasons for changes in plans and appointments',
    'Can handle brief social exchanges and arrange routine matters at work or school',
  ],
  characters: [
    {
      id: 'char_sarah',
      name: 'Sarah',
      role: 'Project Teammate',
      avatar: '👩‍💼',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'reschedule',
        ipa: '/ˌriːˈskɛdʒuːl/',
        partOfSpeech: 'verb',
        meaning: 'To change the time or date of a planned event',
        exampleSentence: 'Could we reschedule our meeting?',
        translations: { hi: 'समय बदलना' },
      },
      {
        word: 'available',
        ipa: '/əˈveɪləbl/',
        partOfSpeech: 'adjective',
        meaning: 'Free to see someone or do something',
        exampleSentence: 'Are you available on Thursday at 3 PM?',
        translations: { hi: 'उपलब्ध / खाली' },
      },
      {
        word: 'conflict',
        ipa: '/ˈkɒnflɪkt/',
        partOfSpeech: 'noun',
        meaning: 'A clash between two events scheduled at the same time',
        exampleSentence: 'I have a schedule conflict on Tuesday.',
        translations: { hi: 'समय का टकराव' },
      },
      {
        word: 'convenient',
        ipa: '/kənˈviːniənt/',
        partOfSpeech: 'adjective',
        meaning: 'Fitting in well with a persons needs, activities, and plans',
        exampleSentence: 'Does Thursday work for you?',
        translations: { hi: 'सुविधाजनक' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am afraid I cannot make it...',
        functionCategory: 'Polite Refusal',
        exampleSentence: 'I am afraid I cannot make it on Tuesday.',
      },
      {
        phrase: 'Could we reschedule to...?',
        functionCategory: 'Proposing Alternative',
        exampleSentence: 'Could we reschedule to Thursday afternoon?',
      },
      {
        phrase: 'Does that work for you?',
        functionCategory: 'Checking Availability',
        exampleSentence: 'I can meet at 3:00 PM. Does that work for you?',
      },
      {
        phrase: 'That sounds perfect.',
        functionCategory: 'Agreement & Confirmation',
        exampleSentence: 'Thursday at 3:00 PM sounds perfect.',
      },
    ],
    grammar: {
      title: 'Polite Modals & Prepositions of Time (at / on / in)',
      conceptExplanation:
        'Use "Could we...?" or "Would you be able to...?" for polite requests. Use "on" with specific days (on Tuesday) and "at" with clock times (at 2:00 PM).',
      patternFormula: 'Could we + [Base Verb] + on [Day] + at [Time]?',
      contrastExamples: [
        {
          incorrect: 'I am agree with Thursday.',
          correct: 'I agree with Thursday. / That works for me.',
          explanation: '"Agree" is a verb, not an adjective. Never say "I am agree".',
        },
        {
          incorrect: 'Let us meet in Tuesday in 3 PM.',
          correct: 'Let us meet on Tuesday at 3 PM.',
          explanation: 'Use "on" for days of the week, and "at" for specific hours/times.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Sarah',
        text: 'Hi! Are we still good for our project review on Tuesday at 2:00 PM?',
        translation: 'नमस्ते! क्या हम मंगलवार दोपहर 2:00 बजे अपने प्रोजेक्ट रिव्यू के लिए तैयार हैं?',
      },
      {
        speaker: 'You',
        text: 'Hi Sarah! I am so sorry, but I have a dentist appointment. Could we reschedule to Thursday?',
        translation: 'नमस्ते सारा! मुझे बहुत अफ़सोस है, लेकिन मेरा डेंटिस्ट का अपॉइंटमेंट है। क्या हम इसे गुरुवार के लिए बदल सकते हैं?',
      },
      {
        speaker: 'Sarah',
        text: 'No problem at all! Would Thursday at 3:00 PM suit you?',
        translation: 'कोई बात नहीं! क्या गुरुवार दोपहर 3:00 बजे आपके लिए ठीक रहेगा?',
      },
      {
        speaker: 'You',
        text: 'Yes, Thursday at 3:00 PM sounds perfect. I will see you then!',
        translation: 'हाँ, गुरुवार दोपहर 3:00 बजे बिल्कुल सही रहेगा। मैं आपसे तभी मिलूँगा!',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_1',
      type: 'multiple_choice',
      prompt: 'Which preposition correctly fits: "Let us meet ___ Thursday ___ 4:00 PM."',
      options: [
        { id: 'opt_1', text: 'on / at', isCorrect: true },
        { id: 'opt_2', text: 'in / on', isCorrect: false },
        { id: 'opt_3', text: 'at / on', isCorrect: false },
      ],
      correctAnswer: 'on / at',
      explanation: 'Use "on" for days of the week (on Thursday) and "at" for clock times (at 4:00 PM).',
    },
    {
      id: 'cp_a2_2',
      type: 'fill_blank',
      prompt: 'Complete the polite suggestion: "Could we ___ our meeting to tomorrow?"',
      options: [
        { id: 'opt_1', text: 'reschedule', isCorrect: true },
        { id: 'opt_2', text: 'to reschedule', isCorrect: false },
        { id: 'opt_3', text: 'rescheduling', isCorrect: false },
      ],
      correctAnswer: 'reschedule',
      explanation: 'Modal verb "could" is followed by the bare infinitive base verb "reschedule".',
    },
    {
      id: 'cp_a2_3',
      type: 'multiple_choice',
      prompt: 'Which phrase is grammatically correct when agreeing to a time proposal?',
      options: [
        { id: 'opt_1', text: 'That works for me.', isCorrect: true },
        { id: 'opt_2', text: 'I am agree with that.', isCorrect: false },
        { id: 'opt_3', text: 'I am agree for that time.', isCorrect: false },
      ],
      correctAnswer: 'That works for me.',
      explanation: '"That works for me" or "I agree" are standard. Avoid "I am agree".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_1',
      scenarioContext: 'Politely apologize and suggest moving the meeting day.',
      prompt: 'Build: "I am sorry but could we reschedule our meeting to Thursday?"',
      targetStructure: 'Apology + Polite Modal + Reschedule verb + Day',
      wordBank: ['I', 'am', 'sorry', 'but', 'could', 'we', 'reschedule', 'our', 'meeting', 'to', 'Thursday', 'on', 'agree'],
      acceptableSolutions: [
        'I am sorry but could we reschedule our meeting to Thursday',
        'I am sorry, but could we reschedule our meeting to Thursday?',
        'Sorry, could we reschedule our meeting to Thursday?',
      ],
      explanation: 'Uses polite apology and "could we reschedule" pattern.',
    },
    {
      id: 'sc_a2_2',
      scenarioContext: 'Confirm that the proposed time is suitable.',
      prompt: 'Build: "Thursday at 3:00 PM works perfectly for me."',
      targetStructure: 'Time specification + Agreement verb phrase',
      wordBank: ['Thursday', 'at', '3:00', 'PM', 'works', 'perfectly', 'for', 'me', 'is', 'agree'],
      acceptableSolutions: [
        'Thursday at 3:00 PM works perfectly for me',
        'Thursday at 3:00 PM works perfectly for me.',
        'Thursday at 3 PM works for me.',
      ],
      explanation: 'Correct time prepositions and natural idiomatic agreement.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi! Just checking in about our project meeting scheduled for Tuesday at 2:00 PM. Are you ready for it?',
      partnerAudioText: 'Hi! Just checking in about our project meeting scheduled for Tuesday at 2:00 PM. Are you ready for it?',
      partnerQuestionHindi: 'नमस्ते! मंगलवार दोपहर 2:00 बजे निर्धारित हमारी प्रोजेक्ट मीटिंग के बारे में पूछ रही थी। क्या आप इसके लिए तैयार हैं?',
      expectedFunction: 'Polite Apology & Stating Conflict',
      contextGoal: 'Apologize politely and explain that you have an appointment or conflict on Tuesday.',
      targetVocabulary: ['sorry', 'afraid', 'appointment', 'conflict', 'reschedule'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hi Sarah! I am so sorry, but I have a dentist appointment on Tuesday at 2. Could we please reschedule?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I am afraid I have a conflict on Tuesday at that time. Would it be okay to change our time?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Sorry Sarah, I cannot make Tuesday afternoon due to an urgent appointment.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Polite Apology',
          patterns: ['sorry', 'i am sorry', 'i m sorry', 'apologize', 'i am afraid', 'unfortunately'],
          required: true,
        },
        {
          name: 'Conflict / Reason',
          patterns: ['appointment', 'dentist', 'conflict', 'cannot make it', 'can not make it', 'busy', 'clash'],
          required: true,
        },
        {
          name: 'Reschedule Request',
          patterns: ['reschedule', 'change', 'move', 'another time', 'different time'],
          required: false,
        },
      ],
      commonMistakeRules: [
        {
          id: 'agree_mistake',
          pattern: /\bi am agree\b/i,
          errorType: 'grammar',
          message: 'Say "I agree", not "I am agree".',
          correctionPattern: 'I agree',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_1',
        type: 'multiple_choice',
        prompt: 'How should you politely inform a coworker that you cannot attend?',
        options: [
          { id: 'opt_1', text: 'I am afraid I cannot make it because I have an appointment.', isCorrect: true },
          { id: 'opt_2', text: 'I am not coming Tuesday.', isCorrect: false },
          { id: 'opt_3', text: 'I will absent Tuesday.', isCorrect: false },
        ],
        correctAnswer: 'I am afraid I cannot make it because I have an appointment.',
        explanation: '"I am afraid I cannot make it..." is a polite, professional way to decline.',
      },
    },
    {
      id: 'turn_a2_2',
      turnIndex: 2,
      partnerPrompt:
        'Oh, don\'t worry about it at all! Health and appointments come first. What days and times work best for you later this week?',
      partnerAudioText: 'Oh, don\'t worry about it at all! Health and appointments come first. What days and times work best for you later this week?',
      partnerQuestionHindi: 'अरे, बिल्कुल चिंता मत कीजिए! स्वास्थ्य और अपॉइंटमेंट पहले आते हैं। इस सप्ताह बाद में आपके लिए कौन सा दिन और समय सबसे अच्छा रहेगा?',
      expectedFunction: 'Propose Alternative Day & Time',
      contextGoal: 'Propose Wednesday afternoon or Thursday with specific time using proper prepositions.',
      targetVocabulary: ['thursday', 'wednesday', 'afternoon', 'available', 'could', 'meet'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you for understanding! Could we meet on Thursday afternoon around 3:00 PM?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I am completely free on Thursday after 2:00 PM. How does Thursday at 3 sound?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Would Thursday morning or afternoon suit you better?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Alternative Day Proposal',
          patterns: ['thursday', 'wednesday', 'friday', 'tomorrow', 'later this week'],
          required: true,
        },
        {
          name: 'Time Specification or Inquiry',
          patterns: ['at 3', 'at 2', 'at 4', 'afternoon', 'morning', 'pm', 'free', 'available', 'suit you', 'work for you'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'preposition_day_error',
          pattern: /\bin thursday\b|\bin wednesday\b/i,
          errorType: 'grammar',
          message: 'Use "on" with days of the week (e.g., "on Thursday"), not "in".',
          correctionPattern: 'on Thursday',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_2',
        type: 'fill_blank',
        prompt: 'Choose the correct preposition: "Are you available ___ Thursday afternoon?"',
        options: [
          { id: 'opt_1', text: 'on', isCorrect: true },
          { id: 'opt_2', text: 'in', isCorrect: false },
          { id: 'opt_3', text: 'at', isCorrect: false },
        ],
        correctAnswer: 'on',
        explanation: 'Days of the week take "on".',
      },
    },
    {
      id: 'turn_a2_3',
      turnIndex: 3,
      partnerPrompt:
        'Thursday at 3:00 PM works great for me! I have an open slot between 3:00 and 4:30 PM. Shall we book 3:00 PM in the calendar?',
      partnerAudioText: 'Thursday at 3:00 PM works great for me! I have an open slot between 3:00 and 4:30 PM. Shall we book 3:00 PM in the calendar?',
      partnerQuestionHindi: 'गुरुवार दोपहर 3:00 बजे मेरे लिए बहुत अच्छा रहेगा! 3:00 से 4:30 बजे के बीच मेरा स्लॉट खाली है। क्या हम कैलेंडर में 3:00 बजे का समय बुक कर लें?',
      expectedFunction: 'Confirm Time & Final Agreement',
      contextGoal: 'Agree enthusiastically, confirm Thursday at 3:00 PM, and thank Sarah for her flexibility.',
      targetVocabulary: ['perfect', 'works', 'thank', 'calendar', 'see'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes, Thursday at 3:00 PM sounds perfect! Thank you so much for your flexibility. I will send the calendar invite.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'That works great for me. Thanks Sarah, I will see you on Thursday at 3:00 PM!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Perfect! See you on Thursday at three. Thanks again!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Agreement Confirmation',
          patterns: ['perfect', 'sounds perfect', 'works for me', 'great', 'yes', 'that works', 'sounds good'],
          required: true,
        },
        {
          name: 'Time or Meeting Reference',
          patterns: ['thursday', '3', '3:00', 'see you', 'invite', 'calendar'],
          required: true,
        },
        {
          name: 'Gratitude',
          patterns: ['thank you', 'thanks', 'appreciate', 'flexibility'],
          required: false,
        },
      ],
      commonMistakeRules: [
        {
          id: 'i_am_agree_error',
          pattern: /\bi am agree\b/i,
          errorType: 'grammar',
          message: 'Do not say "I am agree". Say "I agree" or "That sounds perfect".',
          correctionPattern: 'I agree / That works',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_3',
        type: 'multiple_choice',
        prompt: 'Which response is correct when confirming a meeting time?',
        options: [
          { id: 'opt_1', text: 'Thursday at 3:00 PM sounds perfect.', isCorrect: true },
          { id: 'opt_2', text: 'I am agree for Thursday at 3.', isCorrect: false },
          { id: 'opt_3', text: 'Thursday in 3:00 PM is agree.', isCorrect: false },
        ],
        correctAnswer: 'Thursday at 3:00 PM sounds perfect.',
        explanation: '"[Time] sounds perfect" is natural and correct.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 75,
  },
};
