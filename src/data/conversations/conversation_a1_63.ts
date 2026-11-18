import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_63: ConversationDefinition = {
  id: 'conv_a1_63',
  title: 'Scheduling Appointments, Confirmations & Rescheduling',
  cefr: 'A1',
  unitId: 'unit_a1_5',
  lessonLinks: ['lesson_a1_5_63'],
  estimatedMinutes: 5,
  scenario:
    'You call the reception desk at a modern dental and healthcare clinic in Leeds. You need to reschedule your routine checkup from Thursday afternoon to Friday morning because of an unexpected workplace meeting, confirm the appointment time, and ask if any medical documents are needed.',
  communicativeGoals: [
    'Request appointment bookings, cancellations, and rescheduling politely ("I would like to reschedule my appointment")',
    'State dates, days of the week, and times clearly ("Friday morning at 10:30 AM")',
    'Provide reasons for rescheduling using simple conjunctions ("...because I have an urgent meeting on Thursday")',
    'Confirm booking details and ask about required documentation or arrival times',
  ],
  canDoStatements: [
    'Can make, change, and confirm appointment dates and times (CEFR A1.2)',
    'Can give a simple reason for rescheduling',
    'Can confirm clinic instructions and appointment details',
  ],
  characters: [
    {
      id: 'char_emily_receptionist',
      name: 'Emily',
      role: 'Dental Clinic Receptionist',
      avatar: '📅',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'reschedule',
        ipa: '/ˌriːˈskɛdʒuːl/',
        partOfSpeech: 'verb',
        meaning: 'Change the time, date, or schedule of a planned event',
        exampleSentence: 'I would like to reschedule my appointment to Friday morning.',
        translations: { hi: 'समय बदलना / पुनर्निर्धारित करना' },
      },
      {
        word: 'checkup',
        ipa: '/ˈtʃɛkʌp/',
        partOfSpeech: 'noun',
        meaning: 'A routine medical or dental examination to ensure good health',
        exampleSentence: 'I have a routine dental checkup booked for this week.',
        translations: { hi: 'नियमित स्वास्थ्य जांच' },
      },
      {
        word: 'slot',
        ipa: '/slɒt/',
        partOfSpeech: 'noun',
        meaning: 'An allocated time in a schedule or calendar',
        exampleSentence: 'We have an open appointment slot at 10:30 AM on Friday.',
        translations: { hi: 'समय अंतराल / स्लॉट' },
      },
      {
        word: 'confirm',
        ipa: '/kənˈfɜːrm/',
        partOfSpeech: 'verb',
        meaning: 'Establish the truth or correctness of; verify a booking',
        exampleSentence: 'Can you please confirm my new appointment time by SMS?',
        translations: { hi: 'पुष्टि करना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I would like to reschedule my appointment.',
        functionCategory: 'Rescheduling Request',
        exampleSentence: 'I would like to reschedule my dental checkup to later this week.',
      },
      {
        phrase: 'Do you have any slots available on...?',
        functionCategory: 'Inquiring Availability',
        exampleSentence: 'Do you have any slots available on Friday morning?',
      },
      {
        phrase: 'That time works perfectly for me.',
        functionCategory: 'Accepting Time',
        exampleSentence: 'Friday at 10:30 AM works perfectly for me.',
      },
      {
        phrase: 'Do I need to bring any documents?',
        functionCategory: 'Clinic Requirements',
        exampleSentence: 'Do I need to bring my insurance card or ID to the appointment?',
      },
    ],
    grammar: {
      title: 'Appointment Modals & Prepositions of Time: would like to + base verb / on [Day] at [Time]',
      conceptExplanation:
        'Use "I would like to reschedule..." for polite scheduling requests. Remember the precise prepositions of time: "on Friday" (days) and "at 10:30 AM" (exact times). Use "because" to state reasons.',
      patternFormula: 'I would like to + [reschedule / book / cancel] + my appointment to + on [Day] at [Time]',
      contrastExamples: [
        {
          incorrect: 'I want change appointment in Friday in 10 AM.',
          correct: 'I would like to reschedule my appointment to Friday at 10 AM.',
          explanation: 'Use "on Friday" (or directly Friday) and "at 10 AM", with polite "would like to".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Emily',
        text: 'Good morning, Leeds Dental Care! How can I help you today?',
        translation: 'शुभ प्रभात, लीड्स डेंटल केयर! आज मैं आपकी क्या मदद कर सकती हूँ?',
      },
      {
        speaker: 'You',
        text: 'Good morning! My name is Alex. I have an appointment on Thursday at 3 PM, but I need to reschedule it because of work.',
        translation: 'शुभ प्रभात! मेरा नाम एलेक्स है। मेरा गुरुवार को दोपहर 3 बजे अपॉइंटमेंट है, लेकिन काम के कारण मुझे इसका समय बदलना होगा।',
      },
      {
        speaker: 'Emily',
        text: 'No problem Alex. We have an opening on Friday at 10:30 AM. Would that work for you?',
        translation: 'कोई बात नहीं एलेक्स। हमारे पास शुक्रवार को सुबह 10:30 बजे एक समय उपलब्ध है। क्या वह आपके लिए ठीक रहेगा?',
      },
      {
        speaker: 'You',
        text: 'Yes, Friday at 10:30 AM works perfectly! Do I need to bring any insurance documents?',
        translation: 'हाँ, शुक्रवार को सुबह 10:30 बजे बिल्कुल सही रहेगा! क्या मुझे कोई बीमा दस्तावेज लाने की आवश्यकता है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_63_1',
      type: 'fill_blank',
      prompt: 'Complete the preposition phrase: "Can we reschedule to Friday ___ 10:30 AM?"',
      options: [
        { id: 'opt_1', text: 'at', isCorrect: true },
        { id: 'opt_2', text: 'on', isCorrect: false },
        { id: 'opt_3', text: 'in', isCorrect: false },
      ],
      correctAnswer: 'at',
      explanation: 'Use preposition "at" for specific clock times.',
    },
    {
      id: 'cp_a1_63_2',
      type: 'multiple_choice',
      prompt: 'Which sentence asks to reschedule an appointment politely?',
      options: [
        { id: 'opt_1', text: 'I would like to reschedule my appointment to Friday.', isCorrect: true },
        { id: 'opt_2', text: 'Change my appointment now to Friday.', isCorrect: false },
        { id: 'opt_3', text: 'I am want reschedule appointment Friday.', isCorrect: false },
      ],
      correctAnswer: 'I would like to reschedule my appointment to Friday.',
      explanation: '"I would like to reschedule..." is polite and natural.',
    },
    {
      id: 'cp_a1_63_3',
      type: 'multiple_choice',
      prompt: 'Choose the correct confirmation response:',
      options: [
        { id: 'opt_1', text: 'Friday at 10:30 AM works perfectly for me.', isCorrect: true },
        { id: 'opt_2', text: 'Friday 10:30 AM is work good.', isCorrect: false },
        { id: 'opt_3', text: 'I am work Friday at 10:30.', isCorrect: false },
      ],
      correctAnswer: 'Friday at 10:30 AM works perfectly for me.',
      explanation: '"works perfectly for me" is standard idiomatic English.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_63_1',
      scenarioContext: 'Ask to change your appointment date politely.',
      prompt: 'Build: "I would like to reschedule my appointment."',
      targetStructure: 'I would like to reschedule my appointment',
      wordBank: ['I', 'would', 'like', 'to', 'reschedule', 'my', 'appointment', 'rescheduling', 'am', 'change'],
      acceptableSolutions: [
        'I would like to reschedule my appointment',
        'I would like to reschedule my appointment.',
      ],
      explanation: 'Polite rescheduling request.',
    },
    {
      id: 'sc_a1_63_2',
      scenarioContext: 'Accept the suggested Friday morning slot.',
      prompt: 'Build: "That time works perfectly for me."',
      targetStructure: 'That time works perfectly for me',
      wordBank: ['That', 'time', 'works', 'perfectly', 'for', 'me', 'working', 'is', 'at'],
      acceptableSolutions: [
        'That time works perfectly for me',
        'That time works perfectly for me.',
      ],
      explanation: 'Confirming appointment slot.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_63_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning, Leeds Dental and Health Clinic! Emily speaking. How may I help you today?',
      partnerAudioText:
        'Good morning, Leeds Dental and Health Clinic! Emily speaking. How may I help you today?',
      partnerQuestionHindi:
        'शुभ प्रभात, लीड्स डेंटल एंड हेल्थ क्लिनिक! एमिली बोल रही हूँ। आज मैं आपकी क्या मदद कर सकती हूँ?',
      expectedFunction: 'Identify Self & Request Rescheduling with Reason (I would like to reschedule...)',
      contextGoal:
        'Give your name, state that you have a checkup on Thursday at 3 PM, and ask to reschedule because of work.',
      targetVocabulary: ['good morning Emily', 'my name is Alex', 'reschedule my appointment', 'Thursday at 3 PM', 'because of work'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Good morning Emily! My name is Alex. I have a dental appointment on Thursday at 3:00 PM, but I would like to reschedule it because of an urgent work meeting.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Prompt Scaffold',
          text: 'Hello Emily! I need to reschedule my Thursday 3 PM appointment because I have a work meeting.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Rescheduling Request & Thursday Reference',
          patterns: [
            'reschedule',
            'appointment',
            'thursday',
            'work',
            'meeting',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'i_want_change_error',
          pattern: /\bi want change appointment\b/i,
          errorType: 'grammar',
          message: 'Say "I would like to reschedule my appointment", to be more polite.',
          correctionPattern: 'I would like to reschedule my appointment',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_63_1',
        type: 'fill_blank',
        prompt: 'Choose the polite request: "I ___ like to reschedule my booking."',
        options: [
          { id: 'opt_1', text: 'would', isCorrect: true },
          { id: 'opt_2', text: 'will to', isCorrect: false },
          { id: 'opt_3', text: 'am', isCorrect: false },
        ],
        correctAnswer: 'would',
        explanation: '"would like to" expresses polite requests.',
      },
    },
    {
      id: 'turn_a1_63_2',
      turnIndex: 2,
      partnerPrompt:
        'I see your booking in the system, Alex. Let’s look at available times: we have an opening on Friday morning at 10:30 AM, or Monday afternoon at 2:00 PM. Which one suits your schedule better?',
      partnerAudioText:
        'I see your booking in the system, Alex. Let’s look at available times: we have an opening on Friday morning at 10:30 AM, or Monday afternoon at 2:00 PM. Which one suits your schedule better?',
      partnerQuestionHindi:
        'मैं सिस्टम में आपकी बुकिंग देख सकती हूँ, एलेक्स। आइए उपलब्ध समय देखें: हमारे पास शुक्रवार सुबह 10:30 बजे या सोमवार दोपहर 2:00 बजे का समय है। कौन सा आपके कार्यक्रम के लिए बेहतर रहेगा?',
      expectedFunction: 'Choose Friday Morning Slot (Friday at 10:30 AM works perfectly)',
      contextGoal:
        'Choose Friday at 10:30 AM and confirm it works perfectly for your schedule.',
      targetVocabulary: ['Friday at 10:30 AM', 'works perfectly for me', 'suits my schedule', 'morning slot', 'thank you'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Friday morning at 10:30 AM works perfectly for me! Please book me for that slot.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Prompt Scaffold',
          text: 'Friday at 10:30 AM is perfect for me. Let’s book that time.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Friday 10:30 Selection',
          patterns: [
            'friday',
            '10:30',
            'ten thirty',
            'works perfectly',
            'perfect',
            'suits',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_63_2',
        type: 'multiple_choice',
        prompt: 'Which sentence accepts the time slot correctly?',
        options: [
          { id: 'opt_1', text: 'Friday at 10:30 AM works perfectly for me.', isCorrect: true },
          { id: 'opt_2', text: 'Friday at 10:30 AM is work for me.', isCorrect: false },
          { id: 'opt_3', text: 'I am like Friday ten thirty.', isCorrect: false },
        ],
        correctAnswer: 'Friday at 10:30 AM works perfectly for me.',
        explanation: 'Natural and correct phrasing.',
      },
    },
    {
      id: 'turn_a1_63_3',
      turnIndex: 3,
      partnerPrompt:
        'Great, I have updated your appointment to Friday, October 24th at 10:30 AM with Dr. Patel. Do you have any questions about arrival times or forms to bring?',
      partnerAudioText:
        'Great, I have updated your appointment to Friday, October 24th at 10:30 AM with Dr. Patel. Do you have any questions about arrival times or forms to bring?',
      partnerQuestionHindi:
        'बहुत बढ़िया, मैंने डॉ. पटेल के साथ आपका अपॉइंटमेंट शुक्रवार, 24 अक्टूबर को सुबह 10:30 बजे अपडेट कर दिया है। क्या आपके पास आगमन के समय या लाने वाले फॉर्म के बारे में कोई प्रश्न हैं?',
      expectedFunction: 'Inquire About Required Documents & Arrival Time',
      contextGoal:
        'Ask if you need to bring your insurance card/ID and how early you should arrive.',
      targetVocabulary: ['do I need to bring', 'insurance card', 'photo ID', 'how early should I arrive', 'arrival time'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Thank you Emily. Do I need to bring any insurance documents or photo ID, and how early should I arrive before the appointment?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Prompt Scaffold',
          text: 'Do I need to bring my ID or insurance card? How early should I arrive?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Documents & Arrival Inquiry',
          patterns: [
            'bring',
            'insurance',
            'id',
            'documents',
            'how early',
            'arrive',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_63_3',
        type: 'fill_blank',
        prompt: 'Complete the inquiry: "How early ___ I arrive?"',
        options: [
          { id: 'opt_1', text: 'should', isCorrect: true },
          { id: 'opt_2', text: 'am', isCorrect: false },
          { id: 'opt_3', text: 'do', isCorrect: false },
        ],
        correctAnswer: 'should',
        explanation: 'Modal "should" asks for recommended guidance.',
      },
    },
    {
      id: 'turn_a1_63_4',
      turnIndex: 4,
      partnerPrompt:
        'Please bring a photo ID and your insurance card, and arrive 10 minutes early to fill out a short health questionnaire. We will also send you a confirmation text. See you on Friday!',
      partnerAudioText:
        'Please bring a photo ID and your insurance card, and arrive 10 minutes early to fill out a short health questionnaire. We will also send you a confirmation text. See you on Friday!',
      partnerQuestionHindi:
        'कृपया एक फोटो आईडी और अपना बीमा कार्ड लाएं, और एक संक्षिप्त स्वास्थ्य प्रश्नावली भरने के लिए 10 मिनट पहले पहुंचें। हम आपको एक पुष्टिकरण टेक्स्ट भी भेजेंगे। शुक्रवार को मिलते हैं!',
      expectedFunction: 'Confirm Instructions & Conclude Call',
      contextGoal:
        'Thank Emily, confirm arriving 10 minutes early with ID and insurance card, and say goodbye.',
      targetVocabulary: ['thank you Emily', 'arrive ten minutes early', 'bring ID and insurance', 'see you on Friday', 'goodbye'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Understood! I will arrive ten minutes early with my photo ID and insurance card. Thank you so much for your help Emily, see you on Friday!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Prompt Scaffold',
          text: 'Got it! I will be there 10 minutes early with my documents. Thank you Emily, goodbye!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Friday Confirmation',
          patterns: [
            'ten minutes early',
            '10 minutes early',
            'insurance',
            'id',
            'see you on friday',
            'thank you',
            'goodbye',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_63_4',
        type: 'multiple_choice',
        prompt: 'Which sentence concludes an appointment phone call politely?',
        options: [
          { id: 'opt_1', text: 'Thank you Emily! I will see you on Friday morning at 10:20. Goodbye!', isCorrect: true },
          { id: 'opt_2', text: 'I am come Friday bye.', isCorrect: false },
          { id: 'opt_3', text: 'No more talk now.', isCorrect: false },
        ],
        correctAnswer: 'Thank you Emily! I will see you on Friday morning at 10:20. Goodbye!',
        explanation: 'Polite, clear, and confirms arrival.',
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
