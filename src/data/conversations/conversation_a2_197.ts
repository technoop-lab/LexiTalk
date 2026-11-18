import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_197: ConversationDefinition = {
  id: 'conv_a2_197',
  title: 'Appointments, Public Offices & Administrative Requests',
  cefr: 'A2',
  unitId: 'unit_a2_14',
  lessonLinks: ['lesson_a2_14_197'],
  estimatedMinutes: 5,
  scenario:
    'You are at the municipal civic centre to renew your student transport pass and inquire about council tax exemption. You speak with Front Desk Officer Sarah to check your ticket number, reschedule an upcoming appointment, and make polite formal administrative inquiries.',
  communicativeGoals: [
    'Book, reschedule, or check appointment times at public administrative offices',
    'Understand queue ticket numbers and counter calling announcements (e.g. "Ticket B42 to Counter 3")',
    'Use polite administrative formulas ("Could I possibly...", "I would like to enquire about...", "May I ask...")',
    'Explain service requirements and receive instructions on official procedures',
  ],
  canDoStatements: [
    'Can book, confirm, or reschedule appointments at public offices in English',
    'Can make polite requests and inquiries at customer service counters',
    'Can understand ticket queue numbers and follow administrative instructions',
  ],
  characters: [
    {
      id: 'char_sarah_officer',
      name: 'Sarah',
      role: 'Civic Centre Customer Service Officer',
      avatar: '🏛️',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'appointment',
        ipa: '/əˈpɔɪntmənt/',
        partOfSpeech: 'noun',
        meaning: 'An arrangement to meet someone at a particular time and place',
        exampleSentence: 'I have an appointment with the housing officer at two o’clock.',
        translations: { hi: 'मुलाकात का समय / अपॉइंटमेंट' },
      },
      {
        word: 'queue',
        ipa: '/kjuː/',
        partOfSpeech: 'noun',
        meaning: 'A line or sequence of people or vehicles awaiting their turn to be attended to',
        exampleSentence: 'Please take a ticket and join the queue for counter five.',
        translations: { hi: 'कतार / लाइन' },
      },
      {
        word: 'counter',
        ipa: '/ˈkaʊntə(r)/',
        partOfSpeech: 'noun',
        meaning: 'A long flat-topped fixture across which business is conducted with customers in a public office or bank',
        exampleSentence: 'Ticket number forty-two, please proceed to counter three.',
        translations: { hi: 'सेवा पटल / काउंटर' },
      },
      {
        word: 'reschedule',
        ipa: '/ˌriːˈʃedjuːl/',
        partOfSpeech: 'verb',
        meaning: 'To change the time of a planned event or appointment',
        exampleSentence: 'Could I possibly reschedule my appointment for next Tuesday morning?',
        translations: { hi: 'समय बदलना / पुनर्निर्धारित करना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Could I possibly make an inquiry about student tax exemption?',
        functionCategory: 'Polite formal request',
        exampleSentence: 'Could I possibly see an advisor today?',
      },
      {
        phrase: 'I have an appointment booked under the reference number A-204.',
        functionCategory: 'Stating booking reference',
        exampleSentence: 'My reference number is on this confirmation email.',
      },
      {
        phrase: 'Would it be possible to reschedule this for Friday morning?',
        functionCategory: 'Requesting rescheduling',
        exampleSentence: 'Could we change the time to ten thirty?',
      },
      {
        phrase: 'Please take a seat in the waiting area until your number is called.',
        functionCategory: 'Administrative direction',
        exampleSentence: 'Your number will be displayed on the electronic screen.',
      },
    ],
    grammar: {
      title: 'Polite Formal Requests & Indirect Inquiry Structures',
      conceptExplanation:
        '1. Softened Requests:\n   - "Could I possibly + Base Verb...?" (Very polite)\n   - "I would like to enquire about + Noun / -ing..."\n   - "Would it be possible to + Base Verb...?"\n2. Stating Appointments & Queues:\n   - "I have an appointment at [Time] with [Person/Department]"\n   - "My ticket / reference number is [Number]"\n3. Rescheduling & Cancelling:\n   - "Could I move / reschedule my appointment to [Day]?"',
      patternFormula: 'Could I possibly [Verb] | I would like to enquire about [Topic]',
      contrastExamples: [
        {
          incorrect: 'I want that you change my appointment now.',
          correct: 'Could I possibly reschedule my appointment for Friday?',
          explanation: 'Use polite indirect formulas ("Could I possibly...") at administrative desks.',
        },
        {
          incorrect: 'Where is counter? Give me number.',
          correct: 'May I take a queue ticket for Counter 3, please?',
          explanation: 'Use "May I take..." and polite greeting phrases.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Sarah',
        text: 'Hello, welcome to the Civic Centre. How may I assist you today?',
        translation: 'नमस्ते, सिविक सेंटर में आपका स्वागत है। आज मैं आपकी क्या सहायता कर सकती हूँ?',
      },
      {
        speaker: 'Learner',
        text: 'Good morning! Could I possibly enquire about renewing my student travel card and checking my appointment?',
        translation: 'शुभ प्रभात! क्या मैं अपने छात्र यात्रा कार्ड के नवीनीकरण और अपने अपॉइंटमेंट की जांच के बारे में पूछताछ कर सकता हूँ?',
      },
      {
        speaker: 'Sarah',
        text: 'Of course. Do you already have a booking reference number?',
        translation: 'बिल्कुल। क्या आपके पास पहले से कोई बुकिंग संदर्भ संख्या (रेफरेंस नंबर) है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_197_1',
      type: 'fill_blank',
      prompt: 'Complete with the polite modal phrase: "Could I ______ (possibly / possible) speak with a housing advisor?"',
      options: [
        { id: 'opt_1', text: 'possibly', isCorrect: true },
        { id: 'opt_2', text: 'possible', isCorrect: false },
        { id: 'opt_3', text: 'to possible', isCorrect: false },
      ],
      correctAnswer: 'possibly',
      explanation: 'We use the adverb "possibly" after "Could I...".',
    },
    {
      id: 'cp_197_2',
      type: 'multiple_choice',
      prompt: 'Which request is the most polite for changing an administrative appointment?',
      options: [
        { id: 'opt_1', text: 'Would it be possible to reschedule my appointment for Thursday morning?', isCorrect: true },
        { id: 'opt_2', text: 'Change my appointment Thursday morning fast.', isCorrect: false },
        { id: 'opt_3', text: 'I reschedule Thursday.', isCorrect: false },
      ],
      correctAnswer: 'Would it be possible to reschedule my appointment for Thursday morning?',
      explanation: '"Would it be possible to reschedule..." is the standard polite administrative phrase.',
    },
    {
      id: 'cp_197_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [I would like / about student / to enquire / tax exemption]',
      correctAnswer: 'I would like to enquire about student tax exemption',
      explanation: 'Subject + would like to enquire about + noun phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_197_1',
      prompt: 'Construct a sentence stating that you have an appointment at two o\'clock with reference number B-42.',
      scenarioContext: 'Checking in at the front desk.',
      targetStructure: 'I have an appointment at two o\'clock under reference number B-42.',
      wordBank: ['I have', 'an appointment', 'at two o\'clock', 'under reference number', 'B-42', 'with the officer'],
      acceptableSolutions: [
        'I have an appointment at two o\'clock under reference number B-42.',
        'I have an appointment at two o\'clock, reference number B-42.',
      ],
      explanation: 'State the appointment time and reference number clearly.',
    },
    {
      id: 'sc_197_2',
      prompt: 'Construct a polite inquiry asking if you could possibly reschedule your appointment to Friday.',
      scenarioContext: 'Asking Sarah to change your time.',
      targetStructure: 'Could I possibly reschedule my appointment for Friday morning?',
      wordBank: ['Could I possibly', 'reschedule', 'my appointment', 'for Friday morning', 'at ten o\'clock'],
      acceptableSolutions: [
        'Could I possibly reschedule my appointment for Friday morning?',
        'Would it be possible to reschedule my appointment for Friday morning?',
      ],
      explanation: 'Use "Could I possibly reschedule..." with time phrase.',
    },
  ],
  turns: [
    {
      id: 'turn_197_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning, welcome to Manchester Civic Services! Please step up to the information counter. Do you have a pre-booked appointment today, or do you need to take a queue ticket?',
      partnerAudioText:
        'Good morning, welcome to Manchester Civic Services! Please step up to the information counter. Do you have a pre-booked appointment today, or do you need to take a queue ticket?',
      partnerQuestionHindi:
        'शुभ प्रभात, मैनचेस्टर सिविक सर्विसेज में आपका स्वागत है! कृपया सूचना काउंटर पर आएं। क्या आपके पास आज पहले से बुक किया गया अपॉइंटमेंट है, या आपको कतार का टिकट लेने की आवश्यकता है?',
      expectedFunction: 'Stating existing appointment and booking reference number',
      contextGoal: 'State that you have an appointment at 11:30 under reference number REF-804 for pass renewal',
      targetVocabulary: ['appointment', 'reference number', 'booked', 'renew', 'good morning'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Good morning! I have a pre-booked appointment at eleven thirty. My reference number is REF-804.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello. I already have an appointment today under reference number REF-804 to renew my student travel pass.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good morning! Yes, I booked an appointment for 11:30 AM. Here is my confirmation reference number, REF-804.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'appointment_affirmation',
          patterns: ['appointment', 'booked', 'pre-booked', 'yes', 'eleven thirty', '11:30'],
          required: true,
        },
        {
          name: 'reference_detail',
          patterns: ['ref-804', '804', 'reference number', 'reference', 'confirmation'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_197_1_have_appointment',
          pattern: /i am having appointment/i,
          errorType: 'grammar',
          message: 'Say "I have an appointment", not "I am having an appointment".',
          correctionPattern: 'I have an appointment',
        },
      ],
      remediationPractice: {
        id: 'rem_197_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I ______ (have) an appointment at 11:30."',
        options: [
          { id: 'r1', text: 'have', isCorrect: true },
          { id: 'r2', text: 'am having', isCorrect: false },
        ],
        correctAnswer: 'have',
        explanation: 'We use simple present "have" for scheduled appointments.',
      },
    },
    {
      id: 'turn_197_2',
      turnIndex: 2,
      partnerPrompt:
        'Yes, I see your booking in the system for Counter 6. However, your document verification slot is at 11:30, but your advisor has a brief delay. Would you like to wait 15 minutes, or could I possibly reschedule this for another day this week?',
      partnerAudioText:
        'Yes, I see your booking in the system for Counter 6. However, your document verification slot is at 11:30, but your advisor has a brief delay. Would you like to wait 15 minutes, or could I possibly reschedule this for another day this week?',
      partnerQuestionHindi:
        'हाँ, मैं काउंटर 6 के लिए सिस्टम में आपकी बुकिंग देख रही हूँ। हालाँकि, आपका दस्तावेज़ सत्यापन स्लॉट 11:30 बजे है, लेकिन आपके सलाहकार को थोड़ी देर हो रही है। क्या आप 15 मिनट इंतजार करना चाहेंगे, या क्या मैं इसे इस सप्ताह किसी अन्य दिन के लिए पुनर्निर्धारित कर सकती हूँ?',
      expectedFunction: 'Choosing to wait or politely requesting a reschedule',
      contextGoal: 'Choose to wait in the waiting area, or ask if Friday morning is available',
      targetVocabulary: ['wait', 'waiting area', 'reschedule', 'Friday', 'possible', 'minutes'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I am happy to wait fifteen minutes in the waiting area. Thank you Sarah.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I don’t mind waiting a few minutes. Is there an electronic display screen showing ticket numbers?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I have free time today, so I will gladly wait in the waiting area. Please call my number when the advisor is ready.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'decision_wait_or_reschedule',
          patterns: ['wait', 'waiting area', 'fifteen minutes', '15 minutes', 'reschedule', 'happy to wait', 'gladly wait'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_197_2_wait_for',
          pattern: /i will wait the advisor/i,
          errorType: 'grammar',
          message: 'Remember the preposition: "wait for the advisor" or "wait in the waiting area".',
          correctionPattern: 'wait in the waiting area',
        },
      ],
      remediationPractice: {
        id: 'rem_197_2',
        type: 'multiple_choice',
        prompt: 'Which sentence is grammatically correct?',
        options: [
          { id: 'r1', text: 'I am happy to wait in the waiting area.', isCorrect: true },
          { id: 'r2', text: 'I am happy to wait the waiting area.', isCorrect: false },
        ],
        correctAnswer: 'I am happy to wait in the waiting area.',
        explanation: 'We say "wait in the waiting area".',
      },
    },
    {
      id: 'turn_197_3',
      turnIndex: 3,
      partnerPrompt:
        'Wonderful! Here is your queue ticket: Ticket B-42. While you wait, could I possibly check which supporting documents you brought with you today for your student pass renewal?',
      partnerAudioText:
        'Wonderful! Here is your queue ticket: Ticket B-42. While you wait, could I possibly check which supporting documents you brought with you today for your student pass renewal?',
      partnerQuestionHindi:
        'बहुत बढ़िया! यह रहा आपका कतार टिकट: टिकट B-42। जब तक आप इंतजार करते हैं, क्या मैं यह देख सकती हूँ कि आज आप अपने छात्र पास के नवीनीकरण के लिए कौन से सहायक दस्तावेज साथ लाए हैं?',
      expectedFunction: 'Listing supporting documents (passport, student ID, proof of address)',
      contextGoal: 'Explain that you brought your student ID card, passport, and proof of address letter',
      targetVocabulary: ['passport', 'student ID', 'proof of address', 'documents', 'brought', 'letter'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I brought my university student ID card, my passport, and a recent proof of address letter.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I have my student enrollment certificate, my original passport, and my tenancy agreement.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I brought all required paperwork: my university ID card, valid passport, and bank statement as proof of address.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'identity_docs',
          patterns: ['student id', 'passport', 'id card', 'enrollment', 'certificate', 'university id'],
          required: true,
        },
        {
          name: 'address_docs',
          patterns: ['proof of address', 'letter', 'tenancy', 'bank statement', 'paperwork', 'documents'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_197_3_bring_past',
          pattern: /i have bring/i,
          errorType: 'grammar',
          message: 'Use past simple "I brought" or present perfect "I have brought".',
          correctionPattern: 'I have brought',
        },
      ],
      remediationPractice: {
        id: 'rem_197_3',
        type: 'fill_blank',
        prompt: 'Fill in: "I have ______ (brought) my passport and ID card."',
        options: [
          { id: 'r1', text: 'brought', isCorrect: true },
          { id: 'r2', text: 'bring', isCorrect: false },
        ],
        correctAnswer: 'brought',
        explanation: 'Past participle of bring is "brought".',
      },
    },
    {
      id: 'turn_197_4',
      turnIndex: 4,
      partnerPrompt:
        'All three documents are in perfect order! Please take a seat in Zone B. When "B-42" flashes on the screen with a chime, proceed directly to Counter 6. Is there anything else I can assist you with before you sit down?',
      partnerAudioText:
        'All three documents are in perfect order! Please take a seat in Zone B. When "B-42" flashes on the screen with a chime, proceed directly to Counter 6. Is there anything else I can assist you with before you sit down?',
      partnerQuestionHindi:
        'तीनों दस्तावेज बिल्कुल सही क्रम में हैं! कृपया जोन B में बैठें। जब स्क्रीन पर "B-42" घंटी की आवाज के साथ चमकेगा, तो सीधे काउंटर 6 पर जाएं। आपके बैठने से पहले क्या मैं आपकी कोई और सहायता कर सकती हूँ?',
      expectedFunction: 'Thanking the officer politely and closing the front-desk exchange',
      contextGoal: 'Thank Sarah for her clear instructions and take a seat in the waiting area',
      targetVocabulary: ['thank you', 'clear', 'helpful', 'Sarah', 'take a seat', 'have a good day'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'That is everything! Thank you very much for your help and clear instructions, Sarah.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'No, that’s all. Thank you for checking my documents. I’ll take a seat in Zone B now.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Everything is crystal clear. Thank you for your assistance, Sarah! Have a wonderful day.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'gratitude',
          patterns: ['thank you', 'thanks', 'appreciate', 'grateful'],
          required: true,
        },
        {
          name: 'closing_acknowledgment',
          patterns: ['everything', 'zone b', 'seat', 'instructions', 'help', 'sarah', 'have a good day', 'clear'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_197_4_short',
          pattern: /^(thanks|ok)$/i,
          errorType: 'interaction',
          message: 'Provide a complete polite closing thanking the officer.',
          correctionPattern: 'Thank you very much for your help, Sarah!',
        },
      ],
      remediationPractice: {
        id: 'rem_197_4',
        type: 'multiple_choice',
        prompt: 'Which response closes a front-desk interaction courteously?',
        options: [
          { id: 'r1', text: 'Thank you very much for your help, Sarah! I will wait in Zone B.', isCorrect: true },
          { id: 'r2', text: 'Okay, I go now.', isCorrect: false },
        ],
        correctAnswer: 'Thank you very much for your help, Sarah! I will wait in Zone B.',
        explanation: 'Courteous and clear closing response.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 75,
  },
};
