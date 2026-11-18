import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_136: ConversationDefinition = {
  id: 'conv_a2_136',
  title: 'Work Responsibilities, Team Roles & Daily Tasks',
  cefr: 'A2',
  unitId: 'unit_a2_10',
  lessonLinks: ['lesson_a2_10_136'],
  estimatedMinutes: 5,
  scenario:
    'You are in the project planning room at Nova Retail Logistics in Birmingham. Your senior project lead, David Thorne, is reviewing the weekly workload. Discuss your daily job responsibilities, clarify mandatory tasks versus optional choices using "have to", "need to", "must", and "don’t have to", and delegate tasks across the team.',
  communicativeGoals: [
    'Describe daily job responsibilities and project routines with clarity',
    'Distinguish between strict obligations ("have to", "must") and optional actions ("don’t have to")',
    'Delegate tasks politely and ask follow-up questions about team deadlines',
    'Explain who is responsible for different operational areas',
  ],
  canDoStatements: [
    'Can describe work duties, obligations, and daily routines using modal expressions of necessity',
    'Can politely ask questions to clarify task ownership and deadlines',
    'Can collaborate with colleagues to distribute project responsibilities',
  ],
  characters: [
    {
      id: 'char_david_thorne',
      name: 'David Thorne',
      role: 'Senior Project Lead',
      avatar: '💼',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'responsibility',
        ipa: '/rɪˌspɒnsəˈbɪləti/',
        partOfSpeech: 'noun',
        meaning: 'A duty to deal with or take care of a particular task',
        exampleSentence: 'My main responsibility is monitoring inventory and client orders.',
        translations: { hi: 'जिम्मेदारी / उत्तरदायित्व' },
      },
      {
        word: 'delegate',
        ipa: '/ˈdelɪɡeɪt/',
        partOfSpeech: 'verb',
        meaning: 'To entrust a task or responsibility to another team member',
        exampleSentence: 'I delegate data entry so that I can focus on client reports.',
        translations: { hi: 'काम सौंपना' },
      },
      {
        word: 'deadline',
        ipa: '/ˈdedlaɪn/',
        partOfSpeech: 'noun',
        meaning: 'The latest time or date by which something must be finished',
        exampleSentence: 'We have a strict deadline for the logistics audit this Friday.',
        translations: { hi: 'अंतिम समय-सीमा' },
      },
      {
        word: 'priority',
        ipa: '/praɪˈɒrəti/',
        partOfSpeech: 'noun',
        meaning: 'Something that is regarded as more important than other things',
        exampleSentence: 'Resolving warehouse dispatch errors is our top priority today.',
        translations: { hi: 'प्राथमिकता' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I have to finalize the shipping schedule by noon.',
        functionCategory: 'Expressing Work Obligation (have to)',
        exampleSentence: 'I have to email the revised invoice today.',
      },
      {
        phrase: 'You don’t have to print the report, but you need to send the digital copy.',
        functionCategory: 'Contrasting Lack of Obligation with Necessity',
        exampleSentence: 'We don’t have to attend in person, but we must log in online.',
      },
      {
        phrase: 'Who is responsible for checking the supplier invoices?',
        functionCategory: 'Inquiring About Task Ownership',
        exampleSentence: 'Who is in charge of training new staff?',
      },
      {
        phrase: 'Could you explain the priority for this afternoon?',
        functionCategory: 'Asking for Clarification / Direction',
        exampleSentence: 'Could you tell me which task comes first?',
      },
    ],
    grammar: {
      title: 'Expressing Obligation & Necessity: have to / must / need to / don’t have to',
      conceptExplanation:
        '1. Obligation / External Rule: "have to + base verb" (e.g., "I have to verify the logs").\n2. Urgent Necessity: "must / need to + base verb" (e.g., "We must submit the audit").\n3. Absence of Obligation (Not necessary, optional): "don\'t have to + base verb" (e.g., "You don\'t have to stay late").\nNote: "Don\'t have to" means optional, whereas "must not" means strictly forbidden.',
      patternFormula: 'Subject + have to / need to / don’t have to + [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'I must to write the report and I haven\'t to print it.',
          correct: 'I have to write the report and I don\'t have to print it.',
          explanation: 'Never use "to" after "must", and use "don\'t have to" for optional actions.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'David Thorne',
        text: 'Morning! We have a busy week ahead. Can you walk me through your key responsibilities for today?',
        translation: 'शुभ प्रभात! हमारे आगे एक व्यस्त सप्ताह है। क्या आप मुझे आज की अपनी प्रमुख जिम्मेदारियों के बारे में बता सकते हैं?',
      },
      {
        speaker: 'You',
        text: 'Good morning, David. My main responsibility is managing the regional shipments. I have to verify the inventory list by 11:00 AM, and I need to coordinate with the warehouse team.',
        translation: 'शुभ प्रभात, डेविड। मेरी मुख्य जिम्मेदारी क्षेत्रीय शिपमेंट का प्रबंधन करना है। मुझे सुबह 11:00 बजे तक इन्वेंटरी सूची सत्यापित करनी है, और मुझे गोदाम टीम के साथ समन्वय करने की आवश्यकता है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_136_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "You ___ (don’t have to / must not) work overtime today; it is completely optional."',
      options: [
        { id: 'opt_1', text: 'don’t have to', isCorrect: true },
        { id: 'opt_2', text: 'must not', isCorrect: false },
        { id: 'opt_3', text: 'haven’t to', isCorrect: false },
      ],
      correctAnswer: 'don’t have to',
      explanation: '"Don’t have to" indicates that an action is not required (optional).',
    },
    {
      id: 'cp_a2_136_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses an obligation for a team task?',
      options: [
        { id: 'opt_1', text: 'I have to review the client feedback before the team meeting.', isCorrect: true },
        { id: 'opt_2', text: 'I have review the client feedback before meeting.', isCorrect: false },
        { id: 'opt_3', text: 'I must to review client feedback.', isCorrect: false },
      ],
      correctAnswer: 'I have to review the client feedback before the team meeting.',
      explanation: 'Use "have to + base verb" ("have to review").',
    },
    {
      id: 'cp_a2_136_3',
      type: 'multiple_choice',
      prompt: 'How do you politely ask a coworker about task ownership?',
      options: [
        { id: 'opt_1', text: 'Could you tell me who is responsible for updating the tracking sheet?', isCorrect: true },
        { id: 'opt_2', text: 'Who do the tracking sheet now immediately?', isCorrect: false },
        { id: 'opt_3', text: 'You must do the tracking sheet right now.', isCorrect: false },
      ],
      correctAnswer: 'Could you tell me who is responsible for updating the tracking sheet?',
      explanation: 'Polite indirect question form suitable for professional collaboration.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_136_1',
      scenarioContext: 'Describe your urgent morning duty.',
      prompt: 'Build: "I have to verify the inventory list before noon."',
      targetStructure: 'Subject + have to + base verb + object + time expression',
      wordBank: ['I', 'have', 'to', 'verify', 'the', 'inventory', 'list', 'before', 'noon', 'verifying', 'must to'],
      acceptableSolutions: [
        'I have to verify the inventory list before noon',
        'I have to verify the inventory list before noon.',
      ],
      explanation: 'Expresses mandatory task using "have to".',
    },
    {
      id: 'sc_a2_136_2',
      scenarioContext: 'Ask about a project deadline.',
      prompt: 'Build: "Could you explain the deadline for this report?"',
      targetStructure: 'Modal question + base verb + noun phrase',
      wordBank: ['Could', 'you', 'explain', 'the', 'deadline', 'for', 'this', 'report', 'explaining', 'when'],
      acceptableSolutions: [
        'Could you explain the deadline for this report',
        'Could you explain the deadline for this report?',
      ],
      explanation: 'Polite question to clarify project timeframes.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_136_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning! We have several urgent shipments going out today. Could you outline your main responsibilities for this morning and tell me what you have to finish first?',
      partnerAudioText:
        'Good morning! We have several urgent shipments going out today. Could you outline your main responsibilities for this morning and tell me what you have to finish first?',
      partnerQuestionHindi:
        'शुभ प्रभात! आज हमारे कई आवश्यक शिपमेंट बाहर जा रहे हैं। क्या आप आज सुबह की अपनी मुख्य जिम्मेदारियों की रूपरेखा बता सकते हैं और मुझे बता सकते हैं कि आपको सबसे पहले क्या पूरा करना है?',
      expectedFunction: 'Describe Responsibilities & Priorities (have to / need to / main responsibility)',
      contextGoal:
        'Explain that your main responsibility is managing the dispatch schedule; state that you have to inspect the inventory list and coordinate with the drivers first.',
      targetVocabulary: ['main responsibility is', 'have to inspect the inventory', 'need to coordinate with drivers', 'finish before noon'],
      suggestedResponses: [
        {
          label: 'Structured Response',
          text: 'Good morning David. My main responsibility is managing the morning dispatches. First, I have to verify the inventory checklist, and then I need to confirm the delivery routes with our drivers.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Direct Response',
          text: 'Good morning! I have to inspect the inventory list first, and my main duty is organizing the shipping schedule before lunch.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Responsibilities & Obligation (responsibility / have to / need to / must / duty / verify / inspect / inventory / dispatch)',
          patterns: ['responsibility', 'have to', 'need to', 'must', 'duty', 'verify', 'inspect', 'inventory', 'dispatch', 'schedule'],
          required: true,
        },
        {
          name: 'First / Priority (first / priority / morning / before noon / lunch)',
          patterns: ['first', 'priority', 'morning', 'before noon', 'lunch', 'start with'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'must_to_rule',
          pattern: /\bmust to\b/i,
          errorType: 'grammar',
          message: 'Do not use "to" after "must". Say "I must verify" or "I have to verify".',
          correctionPattern: 'I have to verify the inventory',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_136_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I ___ (have to / must to) check the invoices first."',
        options: [
          { id: 'opt_1', text: 'have to', isCorrect: true },
          { id: 'opt_2', text: 'must to', isCorrect: false },
          { id: 'opt_3', text: 'am having', isCorrect: false },
        ],
        correctAnswer: 'have to',
        explanation: 'Use "have to + base verb".',
      },
    },
    {
      id: 'turn_a2_136_2',
      turnIndex: 2,
      partnerPrompt:
        'That sounds like a solid plan. What about the weekly analytics report? Do you need to complete that today as well, or can we delegate it to Sarah?',
      partnerAudioText:
        'That sounds like a solid plan. What about the weekly analytics report? Do you need to complete that today as well, or can we delegate it to Sarah?',
      partnerQuestionHindi:
        'यह एक ठोस योजना लगती है। साप्ताहिक विश्लेषण रिपोर्ट के बारे में क्या? क्या आपको इसे आज ही पूरा करने की आवश्यकता है, या क्या हम इसे सारा को सौंप सकते हैं?',
      expectedFunction: 'Clarify Optional Tasks & Delegation (don’t have to / can delegate / Sarah)',
      contextGoal:
        'Clarify that you don’t have to do the analytics report today because the deadline is Thursday, and agree that we can delegate the data entry part to Sarah.',
      targetVocabulary: ['don’t have to finish it today', 'deadline is Thursday', 'can delegate the data entry to Sarah', 'free up time for dispatch'],
      suggestedResponses: [
        {
          label: 'Detailed Delegation',
          text: 'I don’t have to submit the analytics report today because the deadline is Thursday. We can certainly delegate the data entry to Sarah so I can focus on urgent dispatches.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Direct Answer',
          text: 'We don’t have to finish it today. That makes sense—let’s delegate that task to Sarah.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Lack of Obligation (don\'t have to / not necessary / thursday / optional / later)',
          patterns: ['don\'t have to', 'not necessary', 'thursday', 'optional', 'later', 'can wait'],
          required: true,
        },
        {
          name: 'Delegation (delegate / sarah / data entry / assign / share)',
          patterns: ['delegate', 'sarah', 'data entry', 'assign', 'give to', 'share'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'havent_to_rule',
          pattern: /\bhaven't to\b|\bhave not to\b/i,
          errorType: 'grammar',
          message: 'Say "I don’t have to finish it", not "I haven’t to".',
          correctionPattern: 'I don’t have to finish it today',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_136_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly states that a task is optional?',
        options: [
          { id: 'opt_1', text: 'You don’t have to finish the report today.', isCorrect: true },
          { id: 'opt_2', text: 'You haven’t to finish the report today.', isCorrect: false },
          { id: 'opt_3', text: 'You must not to finish the report today.', isCorrect: false },
        ],
        correctAnswer: 'You don’t have to finish the report today.',
        explanation: '"Don\'t have to" expresses absence of obligation.',
      },
    },
    {
      id: 'turn_a2_136_3',
      turnIndex: 3,
      partnerPrompt:
        'Great, I will brief Sarah on the data entry. By the way, who is responsible for contacting the international supplier about the delayed shipment from Rotterdam?',
      partnerAudioText:
        'Great, I will brief Sarah on the data entry. By the way, who is responsible for contacting the international supplier about the delayed shipment from Rotterdam?',
      partnerQuestionHindi:
        'बहुत बढ़िया, मैं डेटा प्रविष्टि पर सारा को जानकारी दूंगा। वैसे, रॉटरडैम से विलंबित शिपमेंट के बारे में अंतर्राष्ट्रीय आपूर्तिकर्ता से संपर्क करने के लिए कौन जिम्मेदार है?',
      expectedFunction: 'Identify Task Ownership & Ask Follow-up Question (is responsible for / in charge of / Could you explain...?)',
      contextGoal:
        'Explain that Marcus is responsible for international supplier communications, and ask David a follow-up question about the revised tracking number or meeting time.',
      targetVocabulary: ['Marcus is responsible for', 'in charge of supplier relations', 'Could you tell me...', 'What is the updated tracking status?'],
      suggestedResponses: [
        {
          label: 'Clarification with Follow-up Question',
          text: 'Marcus is responsible for supplier communications. He has already emailed them this morning. Could you tell me if we have received an updated tracking number yet?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Direct Answer with Question',
          text: 'Marcus is in charge of that account. Could you explain when the client expects the final delivery update?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Ownership (marcus / responsible / in charge / handles / supplier)',
          patterns: ['marcus', 'responsible', 'in charge', 'handles', 'supplier', 'takes care'],
          required: true,
        },
        {
          name: 'Follow-up Question (could you / what / when / would / tracking / update / deadline / time)',
          patterns: ['could you', 'what', 'when', 'would', 'tracking', 'update', 'status', 'time', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_136_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Marcus is responsible ___ (for / to) supplier relations."',
        options: [
          { id: 'opt_1', text: 'for', isCorrect: true },
          { id: 'opt_2', text: 'to', isCorrect: false },
          { id: 'opt_3', text: 'with', isCorrect: false },
        ],
        correctAnswer: 'for',
        explanation: 'Use the preposition "for" after "responsible" ("responsible for something").',
      },
    },
    {
      id: 'turn_a2_136_4',
      turnIndex: 4,
      partnerPrompt:
        'The client expects an update by 3:00 PM, and Marcus just forwarded the tracking code. Thanks for keeping everything organized. Let’s reconvene at 4:30 PM for a quick wrap-up.',
      partnerAudioText:
        'The client expects an update by 3:00 PM, and Marcus just forwarded the tracking code. Thanks for keeping everything organized. Let’s reconvene at 4:30 PM for a quick wrap-up.',
      partnerQuestionHindi:
        'ग्राहक दोपहर 3:00 बजे तक अपडेट की उम्मीद करता है, और मार्कस ने अभी ट्रैकिंग कोड अग्रेषित किया है। सब कुछ व्यवस्थित रखने के लिए धन्यवाद। आइए त्वरित समापन के लिए शाम 4:30 बजे फिर से मिलें।',
      expectedFunction: 'Acknowledge, Confirm Schedule & Close Professionally (That sounds good / I will see you at 4:30 / keep you posted)',
      contextGoal:
        'Acknowledge the update, confirm that you will prepare your summary for the 4:30 PM meeting, and close with a professional remark.',
      targetVocabulary: ['That sounds good', 'I will have the dispatch summary ready', 'see you at 4:30 PM', 'keep you updated'],
      suggestedResponses: [
        {
          label: 'Professional Closing',
          text: 'That sounds perfect, David. I will make sure all dispatches are processed and have the summary ready for our 4:30 PM meeting. See you then!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Brief Closing',
          text: 'Understood. I will see you at 4:30 PM with the completed checklist. Thank you!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Confirmation & Time (sounds good / understood / perfect / see you / 4:30 / ready / meeting)',
          patterns: ['sounds good', 'understood', 'perfect', 'see you', '4:30', 'ready', 'meeting', 'summary', 'thank you'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_136_4',
        type: 'multiple_choice',
        prompt: 'Which phrase is most natural for confirming a meeting time?',
        options: [
          { id: 'opt_1', text: 'That sounds good, I will see you at 4:30 PM.', isCorrect: true },
          { id: 'opt_2', text: 'I am seeing you on 4:30 PM sharp.', isCorrect: false },
          { id: 'opt_3', text: 'Meeting is 4:30 PM I must go.', isCorrect: false },
        ],
        correctAnswer: 'That sounds good, I will see you at 4:30 PM.',
        explanation: 'Natural conversational confirmation of a future scheduled appointment.',
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
