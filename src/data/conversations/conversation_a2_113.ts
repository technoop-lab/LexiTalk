import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_113: ConversationDefinition = {
  id: 'conv_a2_113',
  title: 'Appointments, Scheduling & Rescheduling Meetings (push back, bring forward, would it be possible)',
  cefr: 'A2',
  unitId: 'unit_a2_8',
  lessonLinks: ['lesson_a2_8_113'],
  estimatedMinutes: 5,
  scenario:
    'You are calling St. Jude Health Clinic in Bristol to reschedule your dental checkup and hygienist appointment originally booked for Thursday at 11:00 AM. Because of an urgent client meeting, you need to push the appointment back to Friday afternoon or early next week. Speak with clinic receptionist Keith Higgins to select a new slot and confirm preparation details.',
  communicativeGoals: [
    'Reschedule an existing medical or professional appointment politely',
    'Use calendar adjustment phrasal verbs ("push back", "bring forward", "call off")',
    'Use polite inquiry structures ("Would it be possible to...", "Could we reschedule for...")',
    'Confirm updated dates, times, clinic room locations, and SMS reminder notifications',
  ],
  canDoStatements: [
    'Can arrange, reschedule, and confirm appointment times over the phone (CEFR A2)',
    'Can use polite modal questions to negotiate suitable calendar openings',
    'Can understand and repeat date and time details accurately',
  ],
  characters: [
    {
      id: 'char_keith_higgins',
      name: 'Keith Higgins',
      role: 'Clinic Receptionist',
      avatar: '📅',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'reschedule',
        ipa: '/ˌriːˈʃɛdjuːl/',
        partOfSpeech: 'verb',
        meaning: 'To arrange a new time or date for a planned event',
        exampleSentence: 'Would it be possible to reschedule my appointment for Friday?',
        translations: { hi: 'नया समय निर्धारित करना / रीशेड्यूल करना' },
      },
      {
        word: 'push back',
        ipa: '/pʊʃ bæk/',
        partOfSpeech: 'phrasal verb',
        meaning: 'To postpone or move an event to a later time or date',
        exampleSentence: 'Could we push back the checkup by two days?',
        translations: { hi: 'आगे बढ़ाना (देरी से करना)' },
      },
      {
        word: 'bring forward',
        ipa: '/brɪŋ ˈfɔːwəd/',
        partOfSpeech: 'phrasal verb',
        meaning: 'To move an event to an earlier time or date',
        exampleSentence: 'We can bring forward the consultation to 9:00 AM if you prefer.',
        translations: { hi: 'पहले कर लेना (समय पूर्व करना)' },
      },
      {
        word: 'confirmation',
        ipa: '/ˌkɒnfəˈmeɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'A statement or letter that confirms that something is true or settled',
        exampleSentence: 'I will send an SMS confirmation with your new booking time.',
        translations: { hi: 'पुष्टिकरण / कन्फर्मेशन' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am calling to reschedule my appointment.',
        functionCategory: 'Stating Purpose of Call',
        exampleSentence: 'I am calling to reschedule my Thursday checkup.',
      },
      {
        phrase: 'Would it be possible to move it to Friday afternoon?',
        functionCategory: 'Polite Rescheduling Request',
        exampleSentence: 'Would it be possible to push back the appointment to Friday?',
      },
      {
        phrase: 'Does 3:30 PM on Friday suit you?',
        functionCategory: 'Offering Time Slot',
        exampleSentence: 'Does Friday at 3:30 PM work for you?',
      },
      {
        phrase: 'That suits me perfectly, thank you.',
        functionCategory: 'Confirming Selected Time',
        exampleSentence: 'Friday at 3:30 PM suits me very well.',
      },
    ],
    grammar: {
      title: 'Polite Inquiries: Would it be possible to & Calendar Phrasal Verbs',
      conceptExplanation:
        '1. Polite Request Formula: "Would it be possible to + Base Verb...?" (e.g. "Would it be possible to reschedule?").\n2. Phrasal Verbs: "push back" = move later; "bring forward" = move earlier; "call off" = cancel entirely.\n3. Agreeing on a slot: "That works for me" / "That suits me perfectly" / "Could you make it slightly later?"\n4. Prepositions with dates and times: "at 3:30 PM", "on Friday", "on the 24th".',
      patternFormula: 'Would it be possible to + [Verb] + on [Day] at [Time]? | Could we push back / bring forward the [Event]?',
      contrastExamples: [
        {
          incorrect: 'I want change appointment time now.',
          correct: 'Would it be possible to reschedule my appointment?',
          explanation: 'Use polite modal framing for professional phone etiquette.',
        },
        {
          incorrect: 'I meet you in Friday on 3 PM.',
          correct: 'I will see you on Friday at 3 PM.',
          explanation: 'Use "on" with days of the week, and "at" with clock times.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Keith Higgins',
        text: 'Good morning, St. Jude Health Clinic. Keith speaking. How can I help you today?',
        translation: 'शुभ प्रभात, सेंट जूड हेल्थ क्लिनिक। कीथ बात कर रहा हूँ। आज मैं आपकी क्या मदद कर सकता हूँ?',
      },
      {
        speaker: 'You',
        text: 'Good morning Keith. This is Alex Turner. I have a dental checkup booked for this Thursday at 11:00 AM, but I have an urgent work conflict. Would it be possible to push it back to Friday afternoon?',
        translation: 'शुभ प्रभात कीथ। मैं एलेक्स टर्नर बात कर रहा हूँ। मेरा इस गुरुवार सुबह 11:00 बजे का डेंटल चेकअप बुक है, लेकिन मुझे काम का एक ज़रूरी काम आ गया है। क्या इसे शुक्रवार दोपहर के लिए आगे बढ़ाना संभव होगा?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_113_1',
      type: 'fill_blank',
      prompt: 'Complete the polite inquiry: "Would it be ___ to reschedule for Friday?"',
      options: [
        { id: 'opt_1', text: 'possible', isCorrect: true },
        { id: 'opt_2', text: 'possibly', isCorrect: false },
        { id: 'opt_3', text: 'possibility', isCorrect: false },
      ],
      correctAnswer: 'possible',
      explanation: '"Would it be possible to..." is the standard polite inquiry form.',
    },
    {
      id: 'cp_a2_113_2',
      type: 'multiple_choice',
      prompt: 'If you need to move an appointment from 10 AM to 3 PM on the same day, what phrasal verb describes this?',
      options: [
        { id: 'opt_1', text: 'Push back (move to a later time)', isCorrect: true },
        { id: 'opt_2', text: 'Bring forward (move to an earlier time)', isCorrect: false },
        { id: 'opt_3', text: 'Call off (cancel completely)', isCorrect: false },
      ],
      correctAnswer: 'Push back (move to a later time)',
      explanation: '"Push back" means postpone or schedule for a later time.',
    },
    {
      id: 'cp_a2_113_3',
      type: 'multiple_choice',
      prompt: 'Which sentence has the correct prepositions for date and time?',
      options: [
        { id: 'opt_1', text: 'The appointment is on Friday at 3:30 PM.', isCorrect: true },
        { id: 'opt_2', text: 'The appointment is at Friday on 3:30 PM.', isCorrect: false },
        { id: 'opt_3', text: 'The appointment is in Friday in 3:30 PM.', isCorrect: false },
      ],
      correctAnswer: 'The appointment is on Friday at 3:30 PM.',
      explanation: '"On" + days, "at" + clock times.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_113_1',
      scenarioContext: 'Request to reschedule an appointment politely.',
      prompt: 'Build: "Would it be possible to push back the appointment to Friday?"',
      targetStructure: 'Would it be possible to + push back + noun phrase + to + day',
      wordBank: ['Would', 'it', 'be', 'possible', 'to', 'push', 'back', 'the', 'appointment', 'to', 'Friday', 'can', 'is'],
      acceptableSolutions: [
        'Would it be possible to push back the appointment to Friday',
        'Would it be possible to push back the appointment to Friday?',
        'Would it be possible to push back the appointment to Friday.',
      ],
      explanation: 'Standard polite rescheduling formula.',
    },
    {
      id: 'sc_a2_113_2',
      scenarioContext: 'Confirm that an offered time slot is acceptable.',
      prompt: 'Build: "Friday at half past three suits me perfectly."',
      targetStructure: 'Day + at + time + suits me + adverb',
      wordBank: ['Friday', 'at', 'half', 'past', 'three', 'suits', 'me', 'perfectly', 'on', 'suit'],
      acceptableSolutions: [
        'Friday at half past three suits me perfectly',
        'Friday at half past three suits me perfectly.',
      ],
      explanation: 'Expresses clear satisfaction with a proposed time.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_113_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning! St. Jude Health and Dental Clinic, Keith speaking. How can I assist you with your booking today?',
      partnerAudioText:
        'Good morning! St. Jude Health and Dental Clinic, Keith speaking. How can I assist you with your booking today?',
      partnerQuestionHindi:
        'शुभ प्रभात! सेंट जूड हेल्थ एंड डेंटल क्लिनिक, कीथ बात कर रहा हूँ। आज मैं आपकी बुकिंग में क्या मदद कर सकता हूँ?',
      expectedFunction: 'Identify Yourself & State Rescheduling Request (Thursday 11 AM to Friday)',
      contextGoal:
        'State your name (Alex Turner); explain you have a dental checkup booked for Thursday at 11:00 AM; ask if it would be possible to push it back to Friday afternoon due to work.',
      targetVocabulary: ['dental checkup on Thursday at 11 AM', 'urgent work commitment', 'would it be possible to push it back', 'Friday afternoon slot'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'Good morning Keith. My name is Alex Turner. I have a dental checkup booked for this Thursday at 11:00 AM, but I have an urgent client meeting then. Would it be possible to push the appointment back to Friday afternoon?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Caller Name & Current Appointment (Alex / Thursday / 11 AM / dental)',
          patterns: ['alex', 'turner', 'thursday', '11:00', '11 am', 'dental', 'checkup', 'booking'],
          required: true,
        },
        {
          name: 'Rescheduling Request (push back / reschedule / friday afternoon)',
          patterns: ['push back', 'reschedule', 'move', 'friday', 'afternoon', 'possible', 'urgent'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'bring_vs_push_confusion',
          pattern: /\bbring forward to later\b/i,
          errorType: 'vocabulary',
          message: 'Use "push back" to move an appointment later, and "bring forward" to move it earlier.',
          correctionPattern: 'push back to Friday',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_113_1',
        type: 'multiple_choice',
        prompt: 'Which request politely asks to postpone an appointment?',
        options: [
          { id: 'opt_1', text: 'Would it be possible to push back my appointment to Friday afternoon?', isCorrect: true },
          { id: 'opt_2', text: 'I am bring forward to Friday late.', isCorrect: false },
          { id: 'opt_3', text: 'Change my hour now.', isCorrect: false },
        ],
        correctAnswer: 'Would it be possible to push back my appointment to Friday afternoon?',
        explanation: '"Push back" means move to a later time.',
      },
    },
    {
      id: 'turn_a2_113_2',
      turnIndex: 2,
      partnerPrompt:
        'Let me look at Dr. Vance’s calendar for Friday... On Friday afternoon, we have an opening with Dr. Vance at 3:30 PM, or with our hygienist at 4:15 PM. Would 3:30 PM on Friday work for your checkup?',
      partnerAudioText:
        'Let me look at Dr. Vance’s calendar for Friday... On Friday afternoon, we have an opening with Dr. Vance at 3:30 PM, or with our hygienist at 4:15 PM. Would 3:30 PM on Friday work for your checkup?',
      partnerQuestionHindi:
        'मुझे शुक्रवार के लिए डॉ. वेंस का कैलेंडर देखने दें... शुक्रवार दोपहर को, हमारे पास डॉ. वेंस के साथ दोपहर 3:30 बजे या हमारे हाइजीनिस्ट के साथ शाम 4:15 बजे का समय खाली है। क्या आपके चेकअप के लिए शुक्रवार दोपहर 3:30 बजे का समय सही रहेगा?',
      expectedFunction: 'Accept Proposed Slot (Friday 3:30 PM) & Inquire About Session Length',
      contextGoal:
        'Accept Friday at 3:30 PM enthusiastically; ask approximately how long the checkup and cleaning will take so you can plan your commute.',
      targetVocabulary: ['Friday at 3:30 PM suits me perfectly', 'how long will the checkup take', 'approximately 30 to 45 minutes', 'plan my travel'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'Friday at 3:30 PM suits me perfectly! Could you let me know approximately how long the checkup and cleaning session will take so I can plan my travel back to the office?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Acceptance (Friday at 3:30 PM / suits me / works)',
          patterns: ['friday', '3:30', 'suits me', 'works', 'perfect', 'take that slot'],
          required: true,
        },
        {
          name: 'Duration Inquiry (how long / duration / minutes / time)',
          patterns: ['how long', 'duration', 'minutes', 'take', 'session', 'commute', 'travel'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_113_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Could you tell me how long the appointment ___ (take)?"',
        options: [
          { id: 'opt_1', text: 'will take', isCorrect: true },
          { id: 'opt_2', text: 'taking', isCorrect: false },
          { id: 'opt_3', text: 'is took', isCorrect: false },
        ],
        correctAnswer: 'will take',
        explanation: 'Indirect future question: "how long the appointment will take".',
      },
    },
    {
      id: 'turn_a2_113_3',
      turnIndex: 3,
      partnerPrompt:
        'The full examination and polish will take about 40 minutes, so you should be finished by 4:10 PM. Please arrive 10 minutes early to update your medical registration form. Would you like me to send an SMS reminder to your mobile phone?',
      partnerAudioText:
        'The full examination and polish will take about 40 minutes, so you should be finished by 4:10 PM. Please arrive 10 minutes early to update your medical registration form. Would you like me to send an SMS reminder to your mobile phone?',
      partnerQuestionHindi:
        'पूरी जांच और पॉलिश में लगभग 40 मिनट लगेंगे, इसलिए आप शाम 4:10 बजे तक फ्री हो जाएंगे। कृपया अपने मेडिकल पंजीकरण फॉर्म को अपडेट करने के लिए 10 मिनट पहले पहुंचें। क्या आप चाहेंगे कि मैं आपके मोबाइल फोन पर एक एसएमएस रिमाइंडर भेजूं?',
      expectedFunction: 'Confirm Arrival Time & Request SMS Confirmation',
      contextGoal:
        'Confirm you will arrive at 3:20 PM; request the SMS reminder; confirm your mobile number ending in 543.',
      targetVocabulary: ['arrive 10 minutes early at 3:20 PM', 'please send an SMS reminder to my mobile', 'mobile number ending in 543', 'update registration details'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'Yes please! An SMS confirmation would be very helpful. I will make sure to arrive 10 minutes early at 3:20 PM to complete the medical form. You have my mobile number on file.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'SMS Request (sms / text / reminder / mobile)',
          patterns: ['sms', 'text', 'reminder', 'mobile', 'phone', 'helpful', 'yes please'],
          required: true,
        },
        {
          name: 'Arrival Time Confirmation (3:20 PM / 10 minutes early / form)',
          patterns: ['3:20', '10 minutes', 'early', 'arrive', 'form', 'registration'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_113_3',
        type: 'multiple_choice',
        prompt: 'Which sentence confirms an early arrival time clearly?',
        options: [
          { id: 'opt_1', text: 'I will make sure to arrive at 3:20 PM to fill in the form.', isCorrect: true },
          { id: 'opt_2', text: 'I am arrive 3:20 on clock.', isCorrect: false },
          { id: 'opt_3', text: 'Form I do fast.', isCorrect: false },
        ],
        correctAnswer: 'I will make sure to arrive at 3:20 PM to fill in the form.',
        explanation: 'Accurate and natural confirmation.',
      },
    },
    {
      id: 'turn_a2_113_4',
      turnIndex: 4,
      partnerPrompt:
        'All updated! Your appointment with Dr. Vance is confirmed for Friday at 3:30 PM in Room 3. The SMS confirmation has just been dispatched to your phone. We look forward to seeing you on Friday, Alex!',
      partnerAudioText:
        'All updated! Your appointment with Dr. Vance is confirmed for Friday at 3:30 PM in Room 3. The SMS confirmation has just been dispatched to your phone. We look forward to seeing you on Friday, Alex!',
      partnerQuestionHindi:
        'सब अपडेट हो गया! डॉ. वेंस के साथ आपका अपॉइंटमेंट शुक्रवार दोपहर 3:30 बजे कमरा 3 में कन्फर्म हो गया है। एसएमएस पुष्टिकरण अभी आपके फोन पर भेजा गया है। हम शुक्रवार को आपसे मिलने के लिए उत्सुक हैं, एलेक्स!',
      expectedFunction: 'Thank Receptionist & Conclude Booking Phone Call',
      contextGoal:
        'Thank Keith for his help and polite service, say you have received the text, and wish him a great day.',
      targetVocabulary: ['thank you Keith for your help', 'received the text confirmation', 'see you on Friday at 3:30 PM', 'have a great day'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'Thank you Keith for your great help with rescheduling! I just received the text confirmation on my phone. Have a wonderful day and I will see you on Friday!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Thanks & Farewell',
          patterns: ['thank you', 'thanks', 'keith', 'rescheduling', 'received', 'text', 'see you friday', 'have a wonderful day', 'great day'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_113_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I look forward to ___ (see) you on Friday!"',
        options: [
          { id: 'opt_1', text: 'seeing', isCorrect: true },
          { id: 'opt_2', text: 'see', isCorrect: false },
          { id: 'opt_3', text: 'saw', isCorrect: false },
        ],
        correctAnswer: 'seeing',
        explanation: '"Look forward to" is followed by a gerund (-ing): "look forward to seeing you".',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 75,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 70,
  },
};
