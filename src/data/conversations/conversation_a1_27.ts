import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_27: ConversationDefinition = {
  id: 'conv_a1_27',
  title: 'Consulting a Pharmacist for Cold and Fever Symptoms',
  cefr: 'A1',
  unitId: 'unit_a1_2',
  lessonLinks: ['lesson_a1_2_27'],
  estimatedMinutes: 5,
  scenario:
    'You are feeling unwell with a cold, mild fever, and sore throat. You visit a neighborhood pharmacy where the pharmacist, Dr. Sharma, helps assess your symptoms and recommends appropriate medication.',
  communicativeGoals: [
    'Describe physical health symptoms using "I have a + [symptom]" (headache, fever, cough, sore throat, stomach ache)',
    'State how long you have felt sick ("since yesterday", "for two days")',
    'Understand dosage instructions and advice (take twice a day after meals, drink warm water, get plenty of rest)',
    'Ask about side effects or how to take the medicine',
  ],
  canDoStatements: [
    'Can describe basic illness symptoms to a doctor or pharmacist (CEFR A1)',
    'Can understand simple dosage instructions ("twice a day", "after meals")',
    'Can ask questions about medication use and thank the healthcare provider',
  ],
  characters: [
    {
      id: 'char_sharma',
      name: 'Dr. Sharma',
      role: 'Pharmacist',
      avatar: '🩺',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'headache',
        ipa: '/ˈhɛdeɪk/',
        partOfSpeech: 'noun',
        meaning: 'A continuous pain in the head',
        exampleSentence: 'I have a terrible headache and feel very tired.',
        translations: { hi: 'सिरदर्द' },
      },
      {
        word: 'fever',
        ipa: '/ˈfiːvər/',
        partOfSpeech: 'noun',
        meaning: 'An abnormally high body temperature',
        exampleSentence: 'Do you have a mild fever or chills?',
        translations: { hi: 'बुखार' },
      },
      {
        word: 'sore throat',
        ipa: '/sɔːr θroʊt/',
        partOfSpeech: 'noun phrase',
        meaning: 'A painful or inflamed throat',
        exampleSentence: 'I have a sore throat and it hurts to swallow.',
        translations: { hi: 'गले में खराश / दर्द' },
      },
      {
        word: 'medicine',
        ipa: '/ˈmɛdɪsɪn/',
        partOfSpeech: 'noun',
        meaning: 'A substance used in treating disease or relieving pain',
        exampleSentence: 'Take this medicine twice a day with water.',
        translations: { hi: 'दवा' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I have a...',
        functionCategory: 'Symptom Description',
        exampleSentence: 'I have a bad cough and a runny nose.',
      },
      {
        phrase: 'I don\'t feel well.',
        functionCategory: 'General Health State',
        exampleSentence: 'I don\'t feel well since this morning.',
      },
      {
        phrase: 'How often should I take this?',
        functionCategory: 'Dosage Inquiry',
        exampleSentence: 'How often should I take these tablets?',
      },
      {
        phrase: 'Take it twice a day after meals.',
        functionCategory: 'Dosage Instruction',
        exampleSentence: 'Take one tablet twice a day after meals.',
      },
    ],
    grammar: {
      title: 'Health Expressions with "I have a + [Ailment]" & Frequency Instructions',
      conceptExplanation:
        'Use "I have a + [noun]" for countable ailments (a headache, a fever, a cough, a sore throat, a cold, a stomach ache). Note: "I have flu" often drops the article in British English, but "a cold" keeps it. For frequency, use "once a day", "twice a day", "three times a day".',
      patternFormula: 'I have + a + [Ailment] | Take + [Medicine] + [Frequency] + [Condition]',
      contrastExamples: [
        {
          incorrect: 'I am having headache.',
          correct: 'I have a headache. / I have a bad headache.',
          explanation: 'Use simple present "I have a headache", not the progressive "I am having".',
        },
        {
          incorrect: 'Take tablet two times in day.',
          correct: 'Take the tablet twice a day.',
          explanation: 'Use "twice a day" rather than "two times in day".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Dr. Sharma',
        text: 'Hello! How can I help you today? You do not look very well.',
        translation: 'नमस्ते! आज मैं आपकी क्या मदद कर सकता हूँ? आप ठीक नहीं लग रहे हैं।',
      },
      {
        speaker: 'You',
        text: 'Hello doctor. I don\'t feel well. I have a sore throat, a fever, and a headache.',
        translation: 'नमस्ते डॉक्टर। मैं ठीक महसूस नहीं कर रहा हूँ। मुझे गले में खराश, बुखार और सिरदर्द है।',
      },
      {
        speaker: 'Dr. Sharma',
        text: 'I see. How long have you had these symptoms?',
        translation: 'मैं समझ गया। आपको ये लक्षण कब से हैं?',
      },
      {
        speaker: 'You',
        text: 'Since yesterday evening. Do you have any medicine for this?',
        translation: 'कल शाम से। क्या आपके पास इसके लिए कोई दवा है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_27_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "I ___ a bad headache and a cough."',
      options: [
        { id: 'opt_1', text: 'have', isCorrect: true },
        { id: 'opt_2', text: 'am have', isCorrect: false },
        { id: 'opt_3', text: 'having', isCorrect: false },
      ],
      correctAnswer: 'have',
      explanation: 'Use "I have a [symptom]".',
    },
    {
      id: 'cp_a1_27_2',
      type: 'multiple_choice',
      prompt: 'Which phrase means two times in twenty-four hours?',
      options: [
        { id: 'opt_1', text: 'twice a day', isCorrect: true },
        { id: 'opt_2', text: 'secondly day', isCorrect: false },
        { id: 'opt_3', text: 'two day once', isCorrect: false },
      ],
      correctAnswer: 'twice a day',
      explanation: '"twice a day" means two times each day.',
    },
    {
      id: 'cp_a1_27_3',
      type: 'multiple_choice',
      prompt: 'How do you describe pain in your throat?',
      options: [
        { id: 'opt_1', text: 'I have a sore throat.', isCorrect: true },
        { id: 'opt_2', text: 'My neck is paining.', isCorrect: false },
        { id: 'opt_3', text: 'I have throat broken.', isCorrect: false },
      ],
      correctAnswer: 'I have a sore throat.',
      explanation: '"a sore throat" is the standard medical expression.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_27_1',
      scenarioContext: 'Describe your symptoms to the pharmacist.',
      prompt: 'Build: "I don\'t feel well. I have a fever and a sore throat."',
      targetStructure: 'Negative state + compound symptom clause',
      wordBank: ['I', 'don\'t', 'feel', 'well', 'I', 'have', 'a', 'fever', 'and', 'a', 'sore', 'throat', 'am', 'having'],
      acceptableSolutions: [
        'I don\'t feel well I have a fever and a sore throat',
        'I don\'t feel well. I have a fever and a sore throat.',
      ],
      explanation: 'Clear and natural reporting of illness symptoms.',
    },
    {
      id: 'sc_a1_27_2',
      scenarioContext: 'Ask how often to take the prescribed tablets.',
      prompt: 'Build: "How often should I take this medicine?"',
      targetStructure: 'WH-frequency question + modal should + subject + base verb + noun phrase',
      wordBank: ['How', 'often', 'should', 'I', 'take', 'this', 'medicine', 'do', 'much', 'taking'],
      acceptableSolutions: [
        'How often should I take this medicine',
        'How often should I take this medicine?',
      ],
      explanation: 'Accurate dosage question at a pharmacy.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_27_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello! Welcome to the pharmacy. How can I help you today? You look a bit pale.',
      partnerAudioText:
        'Hello! Welcome to the pharmacy. How can I help you today? You look a bit pale.',
      partnerQuestionHindi:
        'नमस्ते! फार्मेसी में आपका स्वागत है। आज मैं आपकी क्या मदद कर सकता हूँ? आप थोड़े अस्वस्थ लग रहे हैं।',
      expectedFunction: 'Report Symptoms & Sickness',
      contextGoal:
        'Explain that you do not feel well and describe symptoms (e.g. "I have a fever, a sore throat, and a headache").',
      targetVocabulary: ['don\'t feel well', 'headache', 'fever', 'sore throat', 'cough', 'have a'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hello doctor. I don\'t feel well. I have a bad headache, a sore throat, and a mild fever.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hi, I have a cold and a bad cough since yesterday.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I feel sick with a fever and body ache. Can you help me?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Symptom Report',
          patterns: ['have a headache', 'have a fever', 'have a sore throat', 'have a cough', 'have a cold', 'don\'t feel well', 'feel sick', 'stomach ache'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'am_having_headache_error',
          pattern: /\bi am having (a )?(headache|fever|cough)\b/i,
          errorType: 'grammar',
          message: 'Say "I have a headache", not "I am having a headache".',
          correctionPattern: 'I have a [symptom]...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_27_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "I ___ a sore throat and a cough."',
        options: [
          { id: 'opt_1', text: 'have', isCorrect: true },
          { id: 'opt_2', text: 'am with', isCorrect: false },
          { id: 'opt_3', text: 'am having of', isCorrect: false },
        ],
        correctAnswer: 'have',
        explanation: 'Say "I have a sore throat".',
      },
    },
    {
      id: 'turn_a1_27_2',
      turnIndex: 2,
      partnerPrompt:
        'I am sorry to hear that. I recommend these pain relief tablets and a soothing throat syrup. Do you have any questions about how to take them?',
      partnerAudioText:
        'I am sorry to hear that. I recommend these pain relief tablets and a soothing throat syrup. Do you have any questions about how to take them?',
      partnerQuestionHindi:
        'यह सुनकर मुझे दुख हुआ। मैं इन दर्द निवारक गोलियों और गले के एक सुखदायक सिरप की सलाह देता हूँ। क्या आपके पास इन्हें लेने के तरीके के बारे में कोई सवाल है?',
      expectedFunction: 'Inquire About Dosage & Frequency',
      contextGoal:
        'Ask how many times a day to take the medicine and whether to take it with food.',
      targetVocabulary: ['how often', 'take', 'twice a day', 'after meals', 'with food', 'should i'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'How often should I take this medicine, and should I take it before or after meals?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'How many tablets should I take each day?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Should I take it twice a day with water?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Dosage / Timing Inquiry',
          patterns: ['how often', 'how many tablets', 'twice a day', 'after meals', 'before meals', 'with food', 'how to take'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_27_2',
        type: 'multiple_choice',
        prompt: 'Which is the natural question to ask about medicine dosage?',
        options: [
          { id: 'opt_1', text: 'How often should I take this medicine?', isCorrect: true },
          { id: 'opt_2', text: 'How much times I eat pills?', isCorrect: false },
          { id: 'opt_3', text: 'What is pill clocking time?', isCorrect: false },
        ],
        correctAnswer: 'How often should I take this medicine?',
        explanation: '"How often should I take this medicine?" is standard medical English.',
      },
    },
    {
      id: 'turn_a1_27_3',
      turnIndex: 3,
      partnerPrompt:
        'Take one tablet twice a day after meals, and two spoonfuls of syrup before bed. Make sure to drink plenty of warm water and rest for a couple of days!',
      partnerAudioText:
        'Take one tablet twice a day after meals, and two spoonfuls of syrup before bed. Make sure to drink plenty of warm water and rest for a couple of days!',
      partnerQuestionHindi:
        'भोजन के बाद दिन में दो बार एक गोली लें, और सोने से पहले दो चम्मच सिरप लें। खूब गुनगुना पानी पिएं और दो दिन आराम करें!',
      expectedFunction: 'Confirm Understanding, Thank & Conclude',
      contextGoal:
        'Acknowledge the instructions (twice a day, drink water, rest), ask for the price, and thank the doctor.',
      targetVocabulary: ['understand', 'twice a day', 'rest', 'thank you', 'how much is it'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Understood: twice a day after meals and plenty of rest. How much is the total, and thank you doctor!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Got it. I will rest and drink warm water. Thank you very much, Dr. Sharma!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Thank you for your help! How much do I owe you?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Instruction Confirmation & Gratitude',
          patterns: ['twice a day', 'rest', 'understood', 'got it', 'thank you', 'thanks', 'how much'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_27_3',
        type: 'multiple_choice',
        prompt: 'Which response confirms instructions and thanks the pharmacist?',
        options: [
          { id: 'opt_1', text: 'Understood. Thank you very much for your advice!', isCorrect: true },
          { id: 'opt_2', text: 'I am understand doctoring.', isCorrect: false },
          { id: 'opt_3', text: 'Okay pills taking bye.', isCorrect: false },
        ],
        correctAnswer: 'Understood. Thank you very much for your advice!',
        explanation: 'Polite and clear acknowledgment.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 70,
  },
};
