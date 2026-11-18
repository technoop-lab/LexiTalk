import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_67: ConversationDefinition = {
  id: 'conv_a1_67',
  title: 'Describing Symptoms, Pharmacy & Healthcare Consultations',
  cefr: 'A1',
  unitId: 'unit_a1_5',
  lessonLinks: ['lesson_a1_5_67'],
  estimatedMinutes: 5,
  scenario:
    'You are visiting a community pharmacy in Oxford because you have been feeling unwell for the past two days. You consult with pharmacist Priya, describe your physical symptoms (a persistent headache, sore throat, and mild fever), ask for over-the-counter medicine, understand dosage instructions, and check for possible side effects like drowsiness.',
  communicativeGoals: [
    'Describe physical ailments and symptoms clearly ("I have a bad headache and a sore throat", "I have had a fever since yesterday")',
    'Inquire about suitable over-the-counter medications ("What do you recommend for a cold?")',
    'Understand dosage, frequency, and administration instructions ("Take two tablets every six hours with water")',
    'Ask about side effects and precautions ("Does this medicine make you drowsy?", "Should I take it before or after meals?")',
  ],
  canDoStatements: [
    'Can describe common illness symptoms to a pharmacist or doctor (CEFR A1.2)',
    'Can ask for over-the-counter medication and understand basic dosage instructions',
    'Can inquire about precautions and side effects',
  ],
  characters: [
    {
      id: 'char_priya_pharmacist',
      name: 'Priya',
      role: 'Community Pharmacist',
      avatar: '💊',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'symptom',
        ipa: '/ˈsɪmptəm/',
        partOfSpeech: 'noun',
        meaning: 'A physical or mental feature indicating a condition of disease or illness',
        exampleSentence: 'My main symptoms are a sore throat and a high temperature.',
        translations: { hi: 'लक्षण' },
      },
      {
        word: 'dosage',
        ipa: '/ˈdoʊsɪdʒ/',
        partOfSpeech: 'noun',
        meaning: 'The size or frequency of a dose of a medicine or drug',
        exampleSentence: 'The recommended dosage is one tablet twice a day.',
        translations: { hi: 'खुराक / मात्रा' },
      },
      {
        word: 'drowsy',
        ipa: '/ˈdraʊzi/',
        partOfSpeech: 'adjective',
        meaning: 'Sleepy and lethargic; feeling tired as a side effect of medication',
        exampleSentence: 'This allergy medicine will not make you drowsy.',
        translations: { hi: 'सुस्ती आना / उनींदापन' },
      },
      {
        word: 'prescription',
        ipa: '/prɪˈskrɪpʃən/',
        partOfSpeech: 'noun',
        meaning: 'An instruction written by a medical doctor authorizing a patient to be provided a medicine',
        exampleSentence: 'Do I need a doctor\'s prescription for this cough syrup?',
        translations: { hi: 'चिकित्सक का पर्चा / प्रिस्क्रिप्शन' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I have a headache and a sore throat.',
        functionCategory: 'Describing Symptoms',
        exampleSentence: 'I have had a bad headache and a sore throat for two days.',
      },
      {
        phrase: 'How often should I take this?',
        functionCategory: 'Dosage Inquiry',
        exampleSentence: 'How often should I take these pain relief tablets?',
      },
      {
        phrase: 'Should I take it with food?',
        functionCategory: 'Administration Instructions',
        exampleSentence: 'Should I take this medicine before meals or after food?',
      },
      {
        phrase: 'Are there any side effects?',
        functionCategory: 'Safety Check',
        exampleSentence: 'Are there any common side effects, like feeling sleepy?',
      },
    ],
    grammar: {
      title: 'Health Expressions & Imperative Dosage: I have a [Symptom] / Take [Number] tablets every [Time]',
      conceptExplanation:
        'To express symptoms, use "I have a headache / fever / cold / cough / sore throat". Dosage instructions use imperatives: "Take two tablets every four hours after meals".',
      patternFormula: 'I have a [headache / sore throat / fever] | How many tablets should I take [frequency]?',
      contrastExamples: [
        {
          incorrect: 'I am pain in my head.',
          correct: 'I have a headache.',
          explanation: 'Use the standard symptom formula "I have a [headache/stomachache/cold]".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Priya',
        text: 'Hello! How can I help you today at the pharmacy counter?',
        translation: 'नमस्ते! आज फ़ार्मेसी काउंटर पर मैं आपकी क्या मदद कर सकती हूँ?',
      },
      {
        speaker: 'You',
        text: 'Hello Priya. I have not been feeling well for two days. I have a sore throat, a dry cough, and a mild headache. What do you recommend?',
        translation: 'नमस्ते प्रिया। मैं दो दिनों से ठीक महसूस नहीं कर रहा हूँ। मुझे गले में खराश, सूखी खांसी और हल्का सिरदर्द है। आप क्या सलाह देती हैं?',
      },
      {
        speaker: 'Priya',
        text: 'I recommend this throat lozenge and paracetamol. Take one tablet every six hours after meals with a glass of water.',
        translation: 'मैं इस गले की गोली और पेरासिटामोल की सलाह देती हूँ। भोजन के बाद एक गिलास पानी के साथ हर छह घंटे में एक गोली लें।',
      },
      {
        speaker: 'You',
        text: 'Thank you. Does this medicine cause drowsiness, or can I drive to work?',
        translation: 'धन्यवाद। क्या इस दवा से उनींदापन होता है, या क्या मैं काम पर ड्राइव कर सकता हूँ?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_67_1',
      type: 'fill_blank',
      prompt: 'Complete the symptom phrase: "I have had a sore ___ since yesterday."',
      options: [
        { id: 'opt_1', text: 'throat', isCorrect: true },
        { id: 'opt_2', text: 'head', isCorrect: false },
        { id: 'opt_3', text: 'teeth', isCorrect: false },
      ],
      correctAnswer: 'throat',
      explanation: '"sore throat" is the standard medical compound.',
    },
    {
      id: 'cp_a1_67_2',
      type: 'multiple_choice',
      prompt: 'Which sentence asks for dosage instructions correctly?',
      options: [
        { id: 'opt_1', text: 'How many tablets should I take each day?', isCorrect: true },
        { id: 'opt_2', text: 'How much pills I am eating now?', isCorrect: false },
        { id: 'opt_3', text: 'How tablets count for my mouth?', isCorrect: false },
      ],
      correctAnswer: 'How many tablets should I take each day?',
      explanation: 'Clear and grammatically accurate.',
    },
    {
      id: 'cp_a1_67_3',
      type: 'multiple_choice',
      prompt: 'Choose the correct way to ask about side effects:',
      options: [
        { id: 'opt_1', text: 'Does this medicine cause drowsiness?', isCorrect: true },
        { id: 'opt_2', text: 'Is this pill make sleep to me?', isCorrect: false },
        { id: 'opt_3', text: 'Does medicine do sleepy head?', isCorrect: false },
      ],
      correctAnswer: 'Does this medicine cause drowsiness?',
      explanation: 'Standard health inquiry.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_67_1',
      scenarioContext: 'Describe your symptoms to the pharmacist.',
      prompt: 'Build: "I have a sore throat and a headache."',
      targetStructure: 'I have a sore throat and a headache',
      wordBank: ['I', 'have', 'a', 'sore', 'throat', 'and', 'a', 'headache', 'having', 'am', 'in'],
      acceptableSolutions: [
        'I have a sore throat and a headache',
        'I have a sore throat and a headache.',
      ],
      explanation: 'Symptom report.',
    },
    {
      id: 'sc_a1_67_2',
      scenarioContext: 'Ask about dosage frequency.',
      prompt: 'Build: "How often should I take this medicine?"',
      targetStructure: 'How often should I take this medicine?',
      wordBank: ['How', 'often', 'should', 'I', 'take', 'this', 'medicine', 'taking', 'do', 'are'],
      acceptableSolutions: [
        'How often should I take this medicine',
        'How often should I take this medicine?',
      ],
      explanation: 'Dosage frequency question.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_67_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello there! Welcome to Oxford Care Pharmacy. You don’t look quite yourself today—how can I help you, and what symptoms are you experiencing?',
      partnerAudioText:
        'Hello there! Welcome to Oxford Care Pharmacy. You don’t look quite yourself today—how can I help you, and what symptoms are you experiencing?',
      partnerQuestionHindi:
        'नमस्ते! ऑक्सफोर्ड केयर फ़ार्मेसी में आपका स्वागत है। आज आप ठीक नहीं लग रहे हैं—मैं आपकी क्या मदद कर सकती हूँ, और आप क्या लक्षण अनुभव कर रहे हैं?',
      expectedFunction: 'Describe Symptoms (I have had a sore throat, cough, and headache for two days)',
      contextGoal:
        'Explain that you have had a painful sore throat, a dry cough, and a mild headache for two days, and ask what medicine she recommends.',
      targetVocabulary: ['sore throat', 'headache', 'dry cough', 'for two days', 'what do you recommend'],
      suggestedResponses: [
        {
          label: 'Spontaneous Interaction',
          text: 'Hello Priya! I have not been feeling well for the last two days. I have a bad sore throat, a dry cough, and a mild headache. What do you recommend for these symptoms?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Symptoms Description',
          patterns: [
            'sore throat',
            'headache',
            'cough',
            'two days',
            'recommend',
            'feeling well',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'i_have_pain_head_error',
          pattern: /\bi have pain in my head\b/i,
          errorType: 'vocabulary',
          message: 'Say "I have a headache", which is more natural.',
          correctionPattern: 'I have a headache',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_67_1',
        type: 'fill_blank',
        prompt: 'Complete the sentence: "I have a ___ throat."',
        options: [
          { id: 'opt_1', text: 'sore', isCorrect: true },
          { id: 'opt_2', text: 'sour', isCorrect: false },
          { id: 'opt_3', text: 'pain', isCorrect: false },
        ],
        correctAnswer: 'sore',
        explanation: '"sore throat" is correct.',
      },
    },
    {
      id: 'turn_a1_67_2',
      turnIndex: 2,
      partnerPrompt:
        'I am sorry to hear that. I recommend these soothing honey-lemon throat lozenges along with paracetamol tablets for your headache and mild fever. Are you taking any other medications or do you have any allergies to pain relievers?',
      partnerAudioText:
        'I am sorry to hear that. I recommend these soothing honey-lemon throat lozenges along with paracetamol tablets for your headache and mild fever. Are you taking any other medications or do you have any allergies to pain relievers?',
      partnerQuestionHindi:
        'मुझे यह सुनकर खेद हुआ। मैं आपके सिरदर्द और हल्के बुखार के लिए पेरासिटामोल की गोलियों के साथ-साथ शहद-नींबू के गले की गोलियों की सलाह देती हूँ। क्या आप कोई अन्य दवा ले रहे हैं या आपको दर्द निवारक दवाओं से कोई एलर्जी है?',
      expectedFunction: 'Deny Allergies & Inquire About Dosage / Frequency',
      contextGoal:
        'State that you have no allergies to medication, and ask how many tablets you should take and how often.',
      targetVocabulary: ['no drug allergies', 'not taking any medication', 'how many tablets', 'how often should I take it', 'dosage'],
      suggestedResponses: [
        {
          label: 'Spontaneous Interaction',
          text: 'No, I have no allergies and I am not taking any other medicine. How many paracetamol tablets should I take, and how often?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Allergies & Dosage Inquiry',
          patterns: [
            'no allergies',
            'not taking',
            'how many tablets',
            'how often',
            'dosage',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_67_2',
        type: 'multiple_choice',
        prompt: 'Which sentence asks for dosage guidance accurately?',
        options: [
          { id: 'opt_1', text: 'How often should I take this medication?', isCorrect: true },
          { id: 'opt_2', text: 'How time I am swallow pill?', isCorrect: false },
          { id: 'opt_3', text: 'What is hour count for pill eat?', isCorrect: false },
        ],
        correctAnswer: 'How often should I take this medication?',
        explanation: 'Natural and grammatically sound.',
      },
    },
    {
      id: 'turn_a1_67_3',
      turnIndex: 3,
      partnerPrompt:
        'Take one to two paracetamol tablets every four to six hours with water, but do not exceed eight tablets in 24 hours. Dissolve one lozenge slowly in your mouth every three hours for your throat. Make sure to drink plenty of warm liquids!',
      partnerAudioText:
        'Take one to two paracetamol tablets every four to six hours with water, but do not exceed eight tablets in 24 hours. Dissolve one lozenge slowly in your mouth every three hours for your throat. Make sure to drink plenty of warm liquids!',
      partnerQuestionHindi:
        'पानी के साथ हर चार से छह घंटे में एक से दो पेरासिटामोल की गोलियां लें, लेकिन 24 घंटों में आठ गोलियों से अधिक न लें। अपने गले के लिए हर तीन घंटे में एक गोली मुंह में धीरे-धीरे घुलने दें। बहुत सारे गर्म तरल पदार्थ पीना सुनिश्चित करें!',
      expectedFunction: 'Ask About Drowsiness Side Effects & Taking with Food',
      contextGoal:
        'Ask if the medicine causes drowsiness and whether you should take it before or after eating food.',
      targetVocabulary: ['cause drowsiness', 'make me sleepy', 'take with food', 'after meals', 'side effects'],
      suggestedResponses: [
        {
          label: 'Spontaneous Interaction',
          text: 'Understood. Does this paracetamol cause drowsiness, and should I take the tablets before or after meals?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Side Effects & Food Inquiry',
          patterns: [
            'drowsiness',
            'drowsy',
            'sleepy',
            'food',
            'meals',
            'after meals',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_67_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Does this medicine cause ___?"',
        options: [
          { id: 'opt_1', text: 'drowsiness', isCorrect: true },
          { id: 'opt_2', text: 'sleepily', isCorrect: false },
          { id: 'opt_3', text: 'drowsied', isCorrect: false },
        ],
        correctAnswer: 'drowsiness',
        explanation: 'Noun "drowsiness" after verb "cause".',
      },
    },
    {
      id: 'turn_a1_67_4',
      turnIndex: 4,
      partnerPrompt:
        'Paracetamol is non-drowsy, so you will be completely alert. It is best taken after a light meal or snack with a full glass of water. That comes to £6.50 in total. If your symptoms don’t improve in three days, please see a general practitioner (GP). Get well soon!',
      partnerAudioText:
        'Paracetamol is non-drowsy, so you will be completely alert. It is best taken after a light meal or snack with a full glass of water. That comes to £6.50 in total. If your symptoms don’t improve in three days, please see a general practitioner (GP). Get well soon!',
      partnerQuestionHindi:
        'पेरासिटामोल गैर-उनींदापन वाली है, इसलिए आप पूरी तरह से सतर्क रहेंगे। इसे पूरे गिलास पानी के साथ हल्के भोजन या नाश्ते के बाद लेना सबसे अच्छा है। कुल मिलाकर यह £6.50 होता है। यदि आपके लक्षणों में तीन दिनों में सुधार नहीं होता है, तो कृपया एक सामान्य चिकित्सक (जीपी) से मिलें। जल्दी ठीक हो जाइए!',
      expectedFunction: 'Pay for Medication, Thank Pharmacist & Conclude Consultation',
      contextGoal:
        'Pay the £6.50 by contactless card, thank Priya for her thorough advice, and say goodbye.',
      targetVocabulary: ['six pounds fifty', 'pay by card', 'thank you for your advice', 'get well soon', 'goodbye Priya'],
      suggestedResponses: [
        {
          label: 'Spontaneous Interaction',
          text: 'Here is my contactless card for £6.50. Thank you so much for your helpful advice and guidance, Priya. Have a great day, goodbye!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Payment & Pharmacy Closing',
          patterns: [
            'card',
            '6.50',
            'six pounds fifty',
            'thank you',
            'priya',
            'advice',
            'goodbye',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_67_4',
        type: 'multiple_choice',
        prompt: 'Which sentence ends a pharmacy consultation politely?',
        options: [
          { id: 'opt_1', text: 'Thank you Priya for your advice! Have a good day, goodbye.', isCorrect: true },
          { id: 'opt_2', text: 'I take pills and run away.', isCorrect: false },
          { id: 'opt_3', text: 'Pharmacy bye now.', isCorrect: false },
        ],
        correctAnswer: 'Thank you Priya for your advice! Have a good day, goodbye.',
        explanation: 'Polite closing.',
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
