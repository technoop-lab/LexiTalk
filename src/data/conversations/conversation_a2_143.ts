import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_143: ConversationDefinition = {
  id: 'conv_a2_143',
  title: 'Medical Consultations, Prescriptions & Describing Symptoms',
  cefr: 'A2',
  unitId: 'unit_a2_10',
  lessonLinks: ['lesson_a2_10_143'],
  estimatedMinutes: 5,
  scenario:
    'You are in a consultation room at St. Jude’s Community Health Clinic in Newcastle. Speak with general practitioner Dr. Rachel Evans. Describe your physical symptoms (a persistent chest cough, fever, and extreme fatigue) and their duration using the Present Perfect Continuous ("I have been feeling dizzy for three days"), state your allergy history, and ask about prescription dosage instructions.',
  communicativeGoals: [
    'Describe physical symptoms, pain levels, and illness duration using Present Perfect Continuous ("have/has been + verb-ing")',
    'Explain medical history, existing medications, and drug allergies clearly',
    'Understand doctor instructions, treatment plans, and rest recommendations',
    'Ask clarifying questions about medication dosage, frequency, and side effects',
  ],
  canDoStatements: [
    'Can describe illness symptoms and how long they have lasted to a doctor',
    'Can explain medical allergies and current prescriptions accurately',
    'Can ask for dosage instructions and understand medical advice',
  ],
  characters: [
    {
      id: 'char_dr_rachel_evans',
      name: 'Dr. Rachel Evans',
      role: 'General Practitioner',
      avatar: '🩺',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'symptom',
        ipa: '/ˈsɪmptəm/',
        partOfSpeech: 'noun',
        meaning: 'A physical or mental sign indicating a condition of disease or illness',
        exampleSentence: 'My main symptoms are a severe chest cough and fever.',
        translations: { hi: 'लक्षण' },
      },
      {
        word: 'prescription',
        ipa: '/prɪˈskrɪpʃn/',
        partOfSpeech: 'noun',
        meaning: 'An instruction written by a medical practitioner authorizing medicine',
        exampleSentence: 'The doctor wrote a prescription for amoxicillin antibiotics.',
        translations: { hi: 'दवा का पर्चा / नुस्खा' },
      },
      {
        word: 'dosage',
        ipa: '/ˈdəʊsɪdʒ/',
        partOfSpeech: 'noun',
        meaning: 'The size or frequency of a dose of a medicine or drug',
        exampleSentence: 'The recommended dosage is one capsule twice a day after meals.',
        translations: { hi: 'खुराक / दवा की मात्रा' },
      },
      {
        word: 'allergy',
        ipa: '/ˈælədʒi/',
        partOfSpeech: 'noun',
        meaning: 'A damaging immune response by the body to a substance like penicillin',
        exampleSentence: 'I have a mild allergy to penicillin.',
        translations: { hi: 'एलर्जी' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I have been coughing and feeling exhausted for four days.',
        functionCategory: 'Describing Ongoing Symptoms with Present Perfect Continuous',
        exampleSentence: 'I have been having headaches since Monday.',
      },
      {
        phrase: 'I am allergic to penicillin, but I have no other medical conditions.',
        functionCategory: 'Stating Drug Allergies & Medical History',
        exampleSentence: 'I am allergic to aspirin and dairy products.',
      },
      {
        phrase: 'How often should I take this medication, and should I take it with food?',
        functionCategory: 'Asking About Prescription Instructions & Dosage',
        exampleSentence: 'Should I take the tablets before or after meals?',
      },
      {
        phrase: 'Are there any common side effects I should be aware of?',
        functionCategory: 'Inquiring About Medication Side Effects',
        exampleSentence: 'Does this syrup cause drowsiness?',
      },
    ],
    grammar: {
      title: 'Present Perfect Continuous for Duration of Symptoms: have/has been + verb-ing',
      conceptExplanation:
        '1. Structure: Subject + have/has been + [Verb-ing] + for / since...\n- Example: "I have been coughing for five days."\n- Example: "She has been feeling feverish since yesterday morning."\n2. Note: Use "for" with a duration of time (e.g. "for 3 days") and "since" with a starting point (e.g. "since Tuesday").',
      patternFormula: 'Subject + have/has been + [Verb-ing] + for/since [Time Expression]',
      contrastExamples: [
        {
          incorrect: 'I am coughing since four days.',
          correct: 'I have been coughing for four days.',
          explanation: 'Use Present Perfect Continuous ("have been coughing") with "for" for ongoing duration.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Dr. Rachel Evans',
        text: 'Good morning. Come on in and take a seat. What seems to be the problem today?',
        translation: 'शुभ प्रभात। अंदर आएं और बैठें। आज क्या समस्या लग रही है?',
      },
      {
        speaker: 'You',
        text: 'Good morning, Doctor. I have been feeling unwell for four days. I have been coughing constantly, and I have had a mild fever and body aches since Friday.',
        translation: 'शुभ प्रभात, डॉक्टर। मैं चार दिनों से अस्वस्थ महसूस कर रहा हूँ। मुझे लगातार खांसी हो रही है, और मुझे शुक्रवार से हल्का बुखार और शरीर में दर्द है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_143_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "I ___ (have been feeling / am feeling) dizzy for three days."',
      options: [
        { id: 'opt_1', text: 'have been feeling', isCorrect: true },
        { id: 'opt_2', text: 'am feeling', isCorrect: false },
        { id: 'opt_3', text: 'feel', isCorrect: false },
      ],
      correctAnswer: 'have been feeling',
      explanation: 'Use Present Perfect Continuous ("have been feeling") for an ongoing condition over a time period.',
    },
    {
      id: 'cp_a2_143_2',
      type: 'multiple_choice',
      prompt: 'Which preposition correctly indicates duration with a period of time?',
      options: [
        { id: 'opt_1', text: 'I have had this sore throat for a week.', isCorrect: true },
        { id: 'opt_2', text: 'I have had this sore throat since a week.', isCorrect: false },
        { id: 'opt_3', text: 'I have had this sore throat from a week.', isCorrect: false },
      ],
      correctAnswer: 'I have had this sore throat for a week.',
      explanation: 'Use "for" with periods of time ("for a week", "for four days").',
    },
    {
      id: 'cp_a2_143_3',
      type: 'multiple_choice',
      prompt: 'How do you ask a doctor about drug dosage correctly?',
      options: [
        { id: 'opt_1', text: 'How often should I take this medicine, and should I take it with food?', isCorrect: true },
        { id: 'opt_2', text: 'How many times I eat pill now?', isCorrect: false },
        { id: 'opt_3', text: 'Medicine eating time tell please.', isCorrect: false },
      ],
      correctAnswer: 'How often should I take this medicine, and should I take it with food?',
      explanation: 'Natural and standard clinical question formula.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_143_1',
      scenarioContext: 'Describe coughing duration to a doctor.',
      prompt: 'Build: "I have been coughing for four days."',
      targetStructure: 'Subject + have been + verb-ing + preposition + number + noun',
      wordBank: ['I', 'have', 'been', 'coughing', 'for', 'four', 'days', 'since', 'am', 'cough'],
      acceptableSolutions: [
        'I have been coughing for four days',
        'I have been coughing for four days.',
      ],
      explanation: 'Present Perfect Continuous showing ongoing symptom duration.',
    },
    {
      id: 'sc_a2_143_2',
      scenarioContext: 'State a penicillin allergy.',
      prompt: 'Build: "I am allergic to penicillin and aspirin."',
      targetStructure: 'Subject + am + adjective + to + noun + and + noun',
      wordBank: ['I', 'am', 'allergic', 'to', 'penicillin', 'and', 'aspirin', 'have', 'allergy'],
      acceptableSolutions: [
        'I am allergic to penicillin and aspirin',
        'I am allergic to penicillin and aspirin.',
      ],
      explanation: 'Medical safety statement indicating drug allergies.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_143_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello there, please come in and take a seat. I’m Dr. Evans. What brings you to the clinic today, and how long have you had these symptoms?',
      partnerAudioText:
        'Hello there, please come in and take a seat. I’m Dr. Evans. What brings you to the clinic today, and how long have you had these symptoms?',
      partnerQuestionHindi:
        'नमस्ते, कृपया अंदर आएं और बैठें। मैं डॉ. इवांस हूँ। आज आप क्लिनिक में किस वजह से आए हैं, और आपको ये लक्षण कब से हैं?',
      expectedFunction: 'Describe Symptoms & Duration with Present Perfect Continuous (coughing for four days / fever / chest tightness)',
      contextGoal:
        'Describe your main symptoms (chesty cough, mild fever, fatigue) and state that you have been feeling unwell for four days using Present Perfect Continuous.',
      targetVocabulary: ['have been feeling unwell for four days', 'have been coughing constantly', 'fever and sore throat', 'chest tightness and fatigue'],
      suggestedResponses: [
        {
          label: 'Detailed Clinical Description',
          text: 'Good morning Dr. Evans. I have been feeling unwell for four days. I have been coughing heavily, especially at night, and I have had a mild fever and extreme fatigue since Thursday.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Description',
          text: 'Hello Doctor. I have been coughing and having a fever for four days, and my chest feels quite tight.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Present Perfect Continuous / Duration (have been / feeling / coughing / having / four days / since / days)',
          patterns: ['have been', 'feeling', 'coughing', 'having', 'four days', 'since', 'days', 'started'],
          required: true,
        },
        {
          name: 'Symptoms (cough / fever / temperature / throat / fatigue / tired / chest / aches / unwell)',
          patterns: ['cough', 'fever', 'temperature', 'throat', 'fatigue', 'tired', 'chest', 'aches', 'unwell', 'sick'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'since_four_days_rule',
          pattern: /\bsince four days\b|\bsince 4 days\b/i,
          errorType: 'grammar',
          message: 'Use "for four days" with duration, not "since four days".',
          correctionPattern: 'for four days',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_143_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I have been having a headache ___ (for / since) three days."',
        options: [
          { id: 'opt_1', text: 'for', isCorrect: true },
          { id: 'opt_2', text: 'since', isCorrect: false },
          { id: 'opt_3', text: 'from', isCorrect: false },
        ],
        correctAnswer: 'for',
        explanation: 'Use "for" with numerical periods of time.',
      },
    },
    {
      id: 'turn_a2_143_2',
      turnIndex: 2,
      partnerPrompt:
        'I see. Let me listen to your chest and check your throat... There is some mild bronchial congestion. Before I prescribe an antibiotic and an inhaler, do you have any allergies or take any regular medications?',
      partnerAudioText:
        'I see. Let me listen to your chest and check your throat... There is some mild bronchial congestion. Before I prescribe an antibiotic and an inhaler, do you have any allergies or take any regular medications?',
      partnerQuestionHindi:
        'मैं समझती हूँ। मुझे आपकी छाती की जांच करने दें और आपका गला देखने दें... कुछ हल्का ब्रोंकियल जमाव (कंजेशन) है। इससे पहले कि मैं एंटीबायोटिक और इनहेलर लिखूं, क्या आपको कोई एलर्जी है या आप कोई नियमित दवाएं लेते हैं?',
      expectedFunction: 'State Drug Allergies & Medical History (allergic to penicillin / no regular medications / asthma)',
      contextGoal:
        'State clearly whether you have allergies (e.g., allergic to penicillin, or no known allergies) and confirm you are not taking other regular prescription drugs.',
      targetVocabulary: ['I am allergic to penicillin', 'no other known drug allergies', 'do not take any regular medication', 'sometimes take paracetamol for headaches'],
      suggestedResponses: [
        {
          label: 'Complete Medical History',
          text: 'I am allergic to penicillin—it gives me a mild rash. Aside from that, I have no other allergies and I do not take any regular prescription medications.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Allergy Statement',
          text: 'I am allergic to penicillin, but I don’t take any other regular medicines.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Allergy Information (allergic / allergy / penicillin / no allergies / rash / reaction)',
          patterns: ['allergic', 'allergy', 'penicillin', 'no allergies', 'rash', 'reaction', 'none'],
          required: true,
        },
        {
          name: 'Current Medications (no regular / no medication / paracetamol / don\'t take / none)',
          patterns: ['no regular', 'no medication', 'paracetamol', 'don\'t take', 'none', 'medicines', 'drugs'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_143_2',
        type: 'multiple_choice',
        prompt: 'Which sentence is grammatically correct for stating an allergy?',
        options: [
          { id: 'opt_1', text: 'I am allergic to penicillin.', isCorrect: true },
          { id: 'opt_2', text: 'I have allergy of penicillin.', isCorrect: false },
          { id: 'opt_3', text: 'I allergic with penicillin.', isCorrect: false },
        ],
        correctAnswer: 'I am allergic to penicillin.',
        explanation: 'Formula: "Subject + be + allergic to + [Substance]".',
      },
    },
    {
      id: 'turn_a2_143_3',
      turnIndex: 3,
      partnerPrompt:
        'Thank you for letting me know. I will prescribe clarithromycin instead of penicillin, along with a soothing cough syrup. Here is your electronic prescription. Do you have any questions regarding the dosage or instructions?',
      partnerAudioText:
        'Thank you for letting me know. I will prescribe clarithromycin instead of penicillin, along with a soothing cough syrup. Here is your electronic prescription. Do you have any questions regarding the dosage or instructions?',
      partnerQuestionHindi:
        'मुझे बताने के लिए धन्यवाद। मैं पेनिसिलिन के बजाय क्लैरिथ्रोमाइसिन और एक सुखदायक कफ सिरप लिखूंगी। यह आपका इलेक्ट्रॉनिक नुस्खा है। क्या खुराक या निर्देशों के संबंध में आपका कोई प्रश्न है?',
      expectedFunction: 'Inquire About Dosage, Frequency & Side Effects (How often should I take... / with food / side effects)',
      contextGoal:
        'Ask how many times a day you should take the antibiotic, whether it should be taken with food, and if there are any common side effects.',
      targetVocabulary: ['How often should I take the tablets?', 'Should I take them before or after meals?', 'Are there any side effects?', 'complete the full course'],
      suggestedResponses: [
        {
          label: 'Detailed Dosage Inquiry',
          text: 'Thank you, Doctor. How often should I take the clarithromycin tablets, and should I take them with food? Also, are there any common side effects like drowsiness?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Dosage Questions',
          text: 'How many times a day should I take this, and does it cause drowsiness? Should I take it with meals?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Dosage & Frequency (how often / how many / times / day / take / tablets / dosage / meals / food / with food)',
          patterns: ['how often', 'how many', 'times', 'day', 'take', 'tablets', 'dosage', 'meals', 'food', 'with food', 'water'],
          required: true,
        },
        {
          name: 'Side Effects / Question Structure (side effects / drowsy / drowsiness / should / can / ?)',
          patterns: ['side effects', 'drowsy', 'drowsiness', 'should', 'can', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_143_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Should I take this medicine ___ (with / at) food?"',
        options: [
          { id: 'opt_1', text: 'with', isCorrect: true },
          { id: 'opt_2', text: 'at', isCorrect: false },
          { id: 'opt_3', text: 'by', isCorrect: false },
        ],
        correctAnswer: 'with',
        explanation: 'Standard medical expression: "take with food".',
      },
    },
    {
      id: 'turn_a2_143_4',
      turnIndex: 4,
      partnerPrompt:
        'Take one 500mg tablet twice daily with meals for seven days, and make sure to finish the full course. Drink plenty of water and rest. If your fever doesn’t improve within 48 hours, please book a follow-up visit.',
      partnerAudioText:
        'Take one 500mg tablet twice daily with meals for seven days, and make sure to finish the full course. Drink plenty of water and rest. If your fever doesn’t improve within 48 hours, please book a follow-up visit.',
      partnerQuestionHindi:
        'सात दिनों के लिए भोजन के साथ दिन में दो बार एक 500mg की गोली लें, और पूरा कोर्स समाप्त करना सुनिश्चित करें। खूब पानी पिएं और आराम करें। यदि आपका बुखार 48 घंटों के भीतर ठीक नहीं होता है, तो कृपया फॉलो-अप विज़िट बुक करें।',
      expectedFunction: 'Confirm Treatment Instructions & Express Gratitude (Thank you Dr. Evans / finish the course / have a nice day)',
      contextGoal:
        'Confirm you understand the instructions (finish the full 7-day course with meals), thank Dr. Evans, and leave the consultation.',
      targetVocabulary: ['Thank you very much Dr. Evans', 'I will take it twice daily with meals', 'finish the full 7-day course', 'rest and drink water'],
      suggestedResponses: [
        {
          label: 'Polite Clinical Confirmation',
          text: 'Understood, Dr. Evans. I will take one tablet twice daily with meals and finish the complete 7-day course. Thank you so much for your help!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Confirmation',
          text: 'I understand. I will finish the full course and get plenty of rest. Thank you Doctor!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Confirmation & Gratitude (understood / understand / finish / course / thank you / thanks / doctor / dr evans)',
          patterns: ['understood', 'understand', 'finish', 'course', 'thank you', 'thanks', 'doctor', 'dr evans', 'rest', 'goodbye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_143_4',
        type: 'multiple_choice',
        prompt: 'Which response demonstrates that you understood the doctor’s instructions?',
        options: [
          { id: 'opt_1', text: 'I understand. I will finish the full course and rest. Thank you!', isCorrect: true },
          { id: 'opt_2', text: 'I will stop taking medicine when I feel happy.', isCorrect: false },
          { id: 'opt_3', text: 'I drink all pills right now.', isCorrect: false },
        ],
        correctAnswer: 'I understand. I will finish the full course and rest. Thank you!',
        explanation: 'Demonstrates medical compliance and clear A2 communication.',
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
