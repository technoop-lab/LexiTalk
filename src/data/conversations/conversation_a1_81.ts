import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_81: ConversationDefinition = {
  id: 'conv_a1_81',
  title: 'Healthcare Consultations, Medical Advice & Prescription Instructions',
  cefr: 'A1',
  unitId: 'unit_a1_6',
  lessonLinks: ['lesson_a1_6_81'],
  estimatedMinutes: 5,
  scenario:
    'You attend an in-person medical consultation at City Health Clinic in Birmingham. You speak with Dr. Neil Patel to describe your symptoms (fever, sore throat, persistent cough) and their duration, comprehend prescription dosage instructions, and clarify medication side effects.',
  communicativeGoals: [
    'Describe physical symptoms and ailments clearly (fever, sore throat, cough, fatigue)',
    'Express duration and onset using "for [duration]" and "since [time point]" ("for three days", "since Sunday")',
    'Understand doctor recommendations and prescription dosage rules ("take two tablets daily after meals")',
    'Ask clarifying questions about medication side effects and when to schedule a follow-up',
  ],
  canDoStatements: [
    'Can describe common health symptoms and illness duration to a medical doctor',
    'Can understand and follow basic prescription and dosage instructions',
    'Can ask questions about medication effects and recovery timelines',
  ],
  characters: [
    {
      id: 'char_dr_neil_patel',
      name: 'Dr. Neil Patel',
      role: 'General Practitioner at City Health Clinic',
      avatar: '🩺',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'symptom',
        ipa: '/ˈsɪmptəm/',
        partOfSpeech: 'noun',
        meaning: 'A physical or mental feature indicating a condition of disease',
        exampleSentence: 'My main symptoms are a persistent dry cough and mild fever.',
        translations: { hi: 'लक्षण' },
      },
      {
        word: 'prescription',
        ipa: '/prɪˈskrɪpʃən/',
        partOfSpeech: 'noun',
        meaning: 'An instruction written by a medical practitioner that authorizes a patient to be provided a medicine',
        exampleSentence: 'I will write a prescription for an antibiotic and throat spray.',
        translations: { hi: 'दवा का नुस्खा / पर्चा' },
      },
      {
        word: 'dosage',
        ipa: '/ˈdoʊsɪdʒ/',
        partOfSpeech: 'noun',
        meaning: 'The size or frequency of a dose of a medicine or drug',
        exampleSentence: 'The recommended dosage is one capsule twice a day after meals.',
        translations: { hi: 'खुराक / मात्रा' },
      },
      {
        word: 'duration',
        ipa: '/djʊˈreɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'The time during which something continues',
        exampleSentence: 'I have had this sore throat for the duration of five days.',
        translations: { hi: 'अवधि / समयकाल' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I have been feeling unwell for...',
        functionCategory: 'Describing Illness',
        exampleSentence: 'I have been feeling unwell for three days.',
      },
      {
        phrase: 'It started on... and my throat hurts when...',
        functionCategory: 'Explaining Onset',
        exampleSentence: 'It started on Sunday, and my throat hurts when I swallow.',
      },
      {
        phrase: 'How many times a day should I take this?',
        functionCategory: 'Inquiring Dosage',
        exampleSentence: 'How many times a day should I take this antibiotic?',
      },
      {
        phrase: 'Are there any common side effects?',
        functionCategory: 'Side Effects Query',
        exampleSentence: 'Are there any common side effects, such as drowsiness?',
      },
    ],
    grammar: {
      title: 'Expressing Duration: "For [Period]" vs. "Since [Point in Time]"',
      conceptExplanation:
        'Use "for" with a duration of time (for three days, for a week), and "since" with a specific starting point (since Monday, since yesterday morning).',
      patternFormula: 'I have had [Symptom] for [Number of days/hours] / since [Day / Time]',
      contrastExamples: [
        {
          incorrect: 'I have fever since three days.',
          correct: 'I have had a fever for three days / since Monday.',
          explanation: 'Use "for" with a time quantity (three days), and "since" with a named starting moment (Monday).',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Dr. Neil Patel',
        text: 'Good morning Alex. Please take a seat. What seems to be the trouble today?',
        translation: 'शुभ प्रभात एलेक्स। कृपया बैठिए। आज क्या परेशानी लग रही है?',
      },
      {
        speaker: 'You',
        text: 'Good morning Dr. Patel. I have had a sore throat, headache, and mild fever for three days, since Monday morning. It hurts especially when I swallow.',
        translation: 'शुभ प्रभात डॉ. पटेल। मुझे सोमवार सुबह से, तीन दिनों से गले में खराश, सिरदर्द और हल्का बुखार है। खासकर जब मैं निगलता हूँ तो दर्द होता है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_81_1',
      type: 'fill_blank',
      prompt: 'Choose the correct duration preposition: "I have had this cough ___ five days."',
      options: [
        { id: 'opt_1', text: 'for', isCorrect: true },
        { id: 'opt_2', text: 'since', isCorrect: false },
        { id: 'opt_3', text: 'at', isCorrect: false },
      ],
      correctAnswer: 'for',
      explanation: 'Use "for" with time durations (five days).',
    },
    {
      id: 'cp_a1_81_2',
      type: 'multiple_choice',
      prompt: 'Which sentence asks about medication instructions correctly?',
      options: [
        { id: 'opt_1', text: 'Should I take this medicine before or after meals?', isCorrect: true },
        { id: 'opt_2', text: 'How pills eat when food time?', isCorrect: false },
        { id: 'opt_3', text: 'Bottle medicine water now.', isCorrect: false },
      ],
      correctAnswer: 'Should I take this medicine before or after meals?',
      explanation: 'Grammatically accurate and clear medical inquiry.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_81_1',
      scenarioContext: 'Describe symptoms and time duration to your doctor.',
      prompt: 'Build: "I have had a fever for three days."',
      targetStructure: 'I have had a fever for three days',
      wordBank: ['I', 'have', 'had', 'a', 'fever', 'for', 'three', 'days', 'since', 'having'],
      acceptableSolutions: [
        'I have had a fever for three days',
        'I have had a fever for three days.',
      ],
      explanation: 'Present perfect duration structure with "for".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_81_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning Alex, please come in and have a seat. What symptoms have brought you into the clinic today, and how long have you felt this way?',
      partnerAudioText:
        'Good morning Alex, please come in and have a seat. What symptoms have brought you into the clinic today, and how long have you felt this way?',
      partnerQuestionHindi:
        'शुभ प्रभात एलेक्स, कृपया अंदर आइए और बैठिए। आज आपको क्लिनिक में कौन से लक्षण लाए हैं, और आप कब से ऐसा महसूस कर रहे हैं?',
      expectedFunction: 'Describe Symptoms (Fever, Sore Throat, Cough) & Duration ("for 3 days")',
      contextGoal:
        'Explain that you have had a painful sore throat, dry cough, and mild fever for three days, starting on Monday morning.',
      targetVocabulary: ['sore throat and dry cough', 'mild fever and fatigue', 'for three days', 'since Monday morning'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'Good morning Dr. Patel. I have had a painful sore throat, a dry cough, and a mild fever for three days, since Monday morning. It hurts when I swallow and I feel very tired.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Symptoms & Duration',
          patterns: [
            'sore throat',
            'throat',
            'cough',
            'fever',
            'three days',
            'monday',
            'swallow',
            'tired',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_81_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "My throat hurts when I ___ food."',
        options: [
          { id: 'opt_1', text: 'swallow', isCorrect: true },
          { id: 'opt_2', text: 'swallowing', isCorrect: false },
          { id: 'opt_3', text: 'swallowed', isCorrect: false },
        ],
        correctAnswer: 'swallow',
        explanation: 'Base verb after "when I": "swallow".',
      },
    },
    {
      id: 'turn_a1_81_2',
      turnIndex: 2,
      partnerPrompt:
        'Let me examine your throat and take your temperature... Your temperature is 38.2°C and your tonsils are inflamed. It is an upper respiratory bacterial infection. Do you have any known drug allergies before I prescribe an antibiotic?',
      partnerAudioText:
        'Let me examine your throat and take your temperature... Your temperature is 38.2°C and your tonsils are inflamed. It is an upper respiratory bacterial infection. Do you have any known drug allergies before I prescribe an antibiotic?',
      partnerQuestionHindi:
        'मुझे आपका गला देखने दीजिए और आपका तापमान लेने दीजिए... आपका तापमान 38.2°C है और आपके टॉन्सिल में सूजन है। यह ऊपरी श्वसन पथ का जीवाणु संक्रमण है। क्या एंटीबायोटिक लिखने से पहले आपको कोई ज्ञात दवा एलर्जी है?',
      expectedFunction: 'Disclose Medical/Drug Allergy Status & Inquire About Prescription',
      contextGoal:
        'Confirm you have no drug allergies (or mention penicillin allergy status) and ask what antibiotic he is prescribing.',
      targetVocabulary: ['no known drug allergies', 'penicillin allergy check', 'antibiotic prescription', 'treatment plan'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'I have no known allergies to penicillin or any other medications. What antibiotic are you prescribing, and for how many days should I take it?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Allergy Status & Prescription Inquiry',
          patterns: [
            'no allergies',
            'allergies',
            'penicillin',
            'antibiotic',
            'prescribing',
            'how many days',
            'take it',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_81_2',
        type: 'multiple_choice',
        prompt: 'Which response confirms no medical allergies clearly?',
        options: [
          { id: 'opt_1', text: 'I have no known drug or medicine allergies, doctor.', isCorrect: true },
          { id: 'opt_2', text: 'No pills hurt me ever in life.', isCorrect: false },
          { id: 'opt_3', text: 'I drink all medicine no problem.', isCorrect: false },
        ],
        correctAnswer: 'I have no known drug or medicine allergies, doctor.',
        explanation: 'Accurate clinical response.',
      },
    },
    {
      id: 'turn_a1_81_3',
      turnIndex: 3,
      partnerPrompt:
        'I am prescribing Amoxicillin 500mg. You need to take one capsule three times a day after meals for seven full days. Also drink plenty of warm water. Do you have any questions about side effects?',
      partnerAudioText:
        'I am prescribing Amoxicillin 500mg. You need to take one capsule three times a day after meals for seven full days. Also drink plenty of warm water. Do you have any questions about side effects?',
      partnerQuestionHindi:
        'मैं एमोक्सिसिलिन 500 मिलीग्राम लिख रहा हूँ। आपको सात पूरे दिनों के लिए भोजन के बाद दिन में तीन बार एक कैप्सूल लेना होगा। खूब सारा गर्म पानी भी पिएं। क्या आपके पास दुष्प्रभावों के बारे में कोई प्रश्न हैं?',
      expectedFunction: 'Clarify Potential Side Effects & Work Rest Advice',
      contextGoal:
        'Ask if the medicine causes drowsiness and if you should take two days off work to rest.',
      targetVocabulary: ['does this cause drowsiness', 'take time off work', 'rest for two days', 'common side effects'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'Does this antibiotic cause any drowsiness or stomach upset? And would you recommend that I take two days off work to rest and recover?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Side Effects & Rest Advice',
          patterns: [
            'drowsiness',
            'stomach',
            'side effects',
            'work',
            'rest',
            'two days',
            'recover',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_81_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Does this medicine make patients feel ___?"',
        options: [
          { id: 'opt_1', text: 'drowsy', isCorrect: true },
          { id: 'opt_2', text: 'drowsily', isCorrect: false },
          { id: 'opt_3', text: 'drowsiness of', isCorrect: false },
        ],
        correctAnswer: 'drowsy',
        explanation: 'Adjective: "feel drowsy".',
      },
    },
    {
      id: 'turn_a1_81_4',
      turnIndex: 4,
      partnerPrompt:
        'It may cause mild stomach upset if taken on an empty stomach, so always take it after meals. It does not cause drowsiness, but I will sign a medical certificate for three days of bed rest. If your fever persists past Friday, please come back.',
      partnerAudioText:
        'It may cause mild stomach upset if taken on an empty stomach, so always take it after meals. It does not cause drowsiness, but I will sign a medical certificate for three days of bed rest. If your fever persists past Friday, please come back.',
      partnerQuestionHindi:
        'खाली पेट लेने पर यह पेट में हल्की खराबी पैदा कर सकता है, इसलिए इसे हमेशा भोजन के बाद ही लें। इससे उनींदापन नहीं होता है, लेकिन मैं तीन दिनों के बेड रेस्ट के लिए एक मेडिकल सर्टिफिकेट पर हस्ताक्षर करूंगा। यदि आपका बुखार शुक्रवार के बाद भी बना रहता है, तो कृपया वापस आएं।',
      expectedFunction: 'Thank Doctor, Confirm Understanding & Collect Medical Note',
      contextGoal:
        'Thank Dr. Patel, confirm you will take the medicine after meals for 7 days, take the medical certificate, and follow up if needed.',
      targetVocabulary: ['thank you Dr. Patel', 'take after meals for seven days', 'medical certificate for work', 'follow up if fever persists'],
      suggestedResponses: [
        {
          label: 'Semi-Independent',
          text: 'Thank you very much Dr. Patel! I will pick up the prescription at the pharmacy, take one capsule after meals for seven days, and rest at home until Friday. Have a great day!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Treatment Confirmation',
          patterns: [
            'thank you',
            'dr. patel',
            'prescription',
            'pharmacy',
            'seven days',
            'meals',
            'rest',
            'friday',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_81_4',
        type: 'multiple_choice',
        prompt: 'Which closing shows complete medical comprehension and politeness?',
        options: [
          { id: 'opt_1', text: 'Thank you Dr. Patel; I understand the dosage and will rest for three days. Have a great day!', isCorrect: true },
          { id: 'opt_2', text: 'Pills eaten now I go.', isCorrect: false },
          { id: 'opt_3', text: 'Doctor bye no fever.', isCorrect: false },
        ],
        correctAnswer: 'Thank you Dr. Patel; I understand the dosage and will rest for three days. Have a great day!',
        explanation: 'Clear, polite, and reassuring response.',
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
