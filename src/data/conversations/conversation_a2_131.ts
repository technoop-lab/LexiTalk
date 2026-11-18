import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_131: ConversationDefinition = {
  id: 'conv_a2_131',
  title: 'Health, Minor Illnesses, Pharmacies & Medical Consultations (Symptoms & Dosage)',
  cefr: 'A2',
  unitId: 'unit_a2_9',
  lessonLinks: ['lesson_a2_9_131'],
  estimatedMinutes: 5,
  scenario:
    'You are in Brighton visiting St. James Community Pharmacy on a rainy Tuesday morning. You have been feeling under the weather for the past three days with a sore throat, a dry cough, and a mild fever. Speak with consulting pharmacist Priya Sharma to describe your physical symptoms, state their duration using Present Perfect ("I have had this cough since Sunday"), ask for suitable over-the-counter medicines, understand dosage instructions ("Take two tablets after food"), and check for drowsiness side effects.',
  communicativeGoals: [
    'Describe common physical symptoms clearly (sore throat, throbbing headache, dry cough, mild fever)',
    'Express symptom duration using the Present Perfect ("I have felt unwell for three days / since Sunday")',
    'Inquire about over-the-counter medications, dosage schedules, and side effects (drowsiness, taking with food)',
    'Ask for advice on when to book an appointment with a GP (General Practitioner)',
  ],
  canDoStatements: [
    'Can describe minor illnesses and physical symptoms at a pharmacy (CEFR A2)',
    'Can ask for over-the-counter remedies and understand dosage frequency instructions',
    'Can understand warnings about side effects (e.g. "may cause drowsiness")',
  ],
  characters: [
    {
      id: 'char_priya_sharma',
      name: 'Priya Sharma',
      role: 'Consulting Pharmacist & Healthcare Advisor',
      avatar: '💊',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'sore throat',
        ipa: '/sɔːr θrəʊt/',
        partOfSpeech: 'noun phrase',
        meaning: 'A painful or scratchy inflammation of the throat, often caused by a cold',
        exampleSentence: 'I have had a painful sore throat since yesterday evening.',
        translations: { hi: 'गले में खराश / दर्द' },
      },
      {
        word: 'dosage',
        ipa: '/ˈdəʊsɪdʒ/',
        partOfSpeech: 'noun',
        meaning: 'The size or frequency of a dose of a medicine',
        exampleSentence: 'The recommended dosage is two tablets every eight hours with water.',
        translations: { hi: 'दवा की खुराक / मात्रा' },
      },
      {
        word: 'drowsy',
        ipa: '/ˈdraʊzi/',
        partOfSpeech: 'adjective',
        meaning: 'Feeling sleepy, tired, or sluggish as a side effect of medicine',
        exampleSentence: 'This cough syrup is non-drowsy, so you can drive safely.',
        translations: { hi: 'सुस्त / नींद लाने वाला' },
      },
      {
        word: 'over-the-counter',
        ipa: '/ˌəʊvə ðə ˈkaʊntər/',
        partOfSpeech: 'adjective phrase',
        meaning: 'Medicines sold directly to a customer without a doctor’s prescription',
        exampleSentence: 'You can buy these pain relief tablets over-the-counter.',
        translations: { hi: 'बिना पर्चे के मिलने वाली दवा (OTC)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I have had a sore throat and a dry cough for three days.',
        functionCategory: 'Describing Symptoms & Duration',
        exampleSentence: 'I have had a bad headache since this morning.',
      },
      {
        phrase: 'What do you recommend for pain relief and fever?',
        functionCategory: 'Asking for Medicine Recommendation',
        exampleSentence: 'What do you recommend for an allergy?',
      },
      {
        phrase: 'How many times a day should I take this syrup?',
        functionCategory: 'Inquiring About Dosage Frequency',
        exampleSentence: 'How often should I take these capsules?',
      },
      {
        phrase: 'Does this medication cause any drowsiness?',
        functionCategory: 'Inquiring About Side Effects',
        exampleSentence: 'Can I take this medicine with food?',
      },
    ],
    grammar: {
      title: 'Health Expressions: "I have had + symptoms for/since" & Modal Instructions ("Should take")',
      conceptExplanation:
        '1. Stating illness duration: Use Present Perfect "I have had [symptom] for [duration] / since [day]" (e.g. "I have had a fever since Sunday", NOT "I have a fever since Sunday").\n2. Sickness states: "I have felt dizzy / exhausted / congested for two days".\n3. Asking for advice: "What should I take for...?" / "How often should I take this?".\n4. Imperative dosage instructions: "Take one tablet every four to six hours", "Do not exceed four doses in 24 hours".',
      patternFormula: 'I have had a [Symptom] for [Period] / since [Day] | What do you recommend for [Condition]? | How often should I take [Medicine]?',
      contrastExamples: [
        {
          incorrect: 'I have cough since three days.',
          correct: 'I have had a cough for three days. / I have had a cough since Monday.',
          explanation: 'Use Present Perfect ("have had") + "for three days" (duration) or "since Monday" (starting point).',
        },
        {
          incorrect: 'How many tablets I must to drink?',
          correct: 'How many tablets should I take per day?',
          explanation: 'Tablets are "taken" (swallowed with water), not "drunk", and "should I take" is the correct modal form.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Priya Sharma',
        text: 'Hello! Welcome to St. James Pharmacy. How can I help you today? Are you looking for any particular medication?',
        translation: 'नमस्ते! सेंट जेम्स फ़ार्मेसी में आपका स्वागत है। आज मैं आपकी क्या मदद कर सकती हूँ? क्या आप किसी विशेष दवा की तलाश कर रहे हैं?',
      },
      {
        speaker: 'You',
        text: 'Hello! I have felt unwell for the past three days. I have had a painful sore throat, a dry cough, and a mild headache since Sunday. What over-the-counter medicine would you recommend?',
        translation: 'नमस्ते! मैं पिछले तीन दिनों से अस्वस्थ महसूस कर रहा हूँ। मुझे रविवार से गले में खराश, सूखी खांसी और हल्का सिरदर्द है। आप बिना पर्चे के मिलने वाली किस दवा की सिफारिश करेंगे?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_131_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "I have ___ (had / have) a sore throat for three days."',
      options: [
        { id: 'opt_1', text: 'had', isCorrect: true },
        { id: 'opt_2', text: 'have', isCorrect: false },
        { id: 'opt_3', text: 'having', isCorrect: false },
      ],
      correctAnswer: 'had',
      explanation: 'Use the past participle "had" after "have" in the Present Perfect.',
    },
    {
      id: 'cp_a2_131_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly asks about medication side effects?',
      options: [
        { id: 'opt_1', text: 'Does this cough syrup cause any drowsiness or dizziness?', isCorrect: true },
        { id: 'opt_2', text: 'Is this syrup making sleep to me?', isCorrect: false },
        { id: 'opt_3', text: 'Does syrup sleep?', isCorrect: false },
      ],
      correctAnswer: 'Does this cough syrup cause any drowsiness or dizziness?',
      explanation: 'Accurate vocabulary ("cause drowsiness") and natural grammatical structure.',
    },
    {
      id: 'cp_a2_131_3',
      type: 'multiple_choice',
      prompt: 'What does "Do not exceed eight tablets in 24 hours" mean?',
      options: [
        { id: 'opt_1', text: 'You must not take more than 8 tablets in one day.', isCorrect: true },
        { id: 'opt_2', text: 'You should take exactly 8 tablets all at once.', isCorrect: false },
        { id: 'opt_3', text: 'You cannot take tablets for 24 hours.', isCorrect: false },
      ],
      correctAnswer: 'You must not take more than 8 tablets in one day.',
      explanation: '"Do not exceed" means never take more than the maximum stated limit.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_131_1',
      scenarioContext: 'State symptom duration.',
      prompt: 'Build: "I have had a sore throat for three days."',
      targetStructure: 'Subject + have + had + a sore throat + for + period',
      wordBank: ['I', 'have', 'had', 'a', 'sore', 'throat', 'for', 'three', 'days', 'since', 'having', 'am'],
      acceptableSolutions: [
        'I have had a sore throat for three days',
        'I have had a sore throat for three days.',
      ],
      explanation: 'Standard Present Perfect duration of symptoms.',
    },
    {
      id: 'sc_a2_131_2',
      scenarioContext: 'Inquire about dosage frequency.',
      prompt: 'Build: "How often should I take this cough medicine?"',
      targetStructure: 'How often + should + subject + take + object',
      wordBank: ['How', 'often', 'should', 'I', 'take', 'this', 'cough', 'medicine', 'taking', 'do', 'must'],
      acceptableSolutions: [
        'How often should I take this cough medicine',
        'How often should I take this cough medicine?',
        'How often should I take this cough medicine.',
      ],
      explanation: 'Dosage frequency question formula.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_131_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning, welcome to St. James Pharmacy. I am Priya, the pharmacist. How can I help you today? You look a bit pale.',
      partnerAudioText:
        'Good morning, welcome to St. James Pharmacy. I am Priya, the pharmacist. How can I help you today? You look a bit pale.',
      partnerQuestionHindi:
        'शुभ प्रभात, सेंट जेम्स फ़ार्मेसी में आपका स्वागत है। मैं प्रिया हूँ, फार्मासिस्ट। आज मैं आपकी क्या मदद कर सकती हूँ? आप थोड़े पीले/कमजोर दिख रहे हैं।',
      expectedFunction: 'Describe Health Symptoms & Duration (Present Perfect: had sore throat & cough for 3 days)',
      contextGoal:
        'Explain that you have felt unwell for the past three days; you have had a painful sore throat, a persistent dry cough, and a mild fever since Sunday; ask Priya what medicine she recommends.',
      targetVocabulary: ['have felt unwell for the past three days', 'have had a painful sore throat and persistent dry cough since Sunday', 'feeling slightly feverish and congested', 'what over-the-counter medicine do you recommend?'],
      suggestedResponses: [
        {
          label: 'Spontaneous A2 Scaffold',
          text: 'Good morning Priya. I have felt unwell for the past three days. I have had a painful sore throat, a dry cough, and a mild headache since Sunday. What over-the-counter medicine would you recommend?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Symptoms & Duration (unwell / sore throat / dry cough / headache / fever / three days / since Sunday)',
          patterns: ['unwell', 'sore throat', 'cough', 'headache', 'fever', 'three days', 'since sunday', 'for 3 days', 'pain'],
          required: true,
        },
        {
          name: 'Recommendation Inquiry (what medicine / recommend / over-the-counter / suggest)',
          patterns: ['recommend', 'medicine', 'over-the-counter', 'suggest', 'what should i take', 'tablets', 'help'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'have_sore_throat_since_3_days',
          pattern: /\bi have sore throat since three days\b/i,
          errorType: 'grammar',
          message: 'Say "I have had a sore throat for three days" (use "for" with durations).',
          correctionPattern: 'I have had a sore throat for three days',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_131_1',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes symptom duration?',
        options: [
          { id: 'opt_1', text: 'I have had a headache for three days.', isCorrect: true },
          { id: 'opt_2', text: 'I have headache since three days.', isCorrect: false },
          { id: 'opt_3', text: 'I am having headache since three days.', isCorrect: false },
        ],
        correctAnswer: 'I have had a headache for three days.',
        explanation: 'Present Perfect "have had" + "for + duration".',
      },
    },
    {
      id: 'turn_a2_131_2',
      turnIndex: 2,
      partnerPrompt:
        'I see. For your headache and fever, paracetamol 500mg tablets will help reduce the temperature and ease the throat pain. For the dry cough, I recommend this soothing honey and glycerin herbal syrup. Are you taking any other prescription medications, or do you have any allergies?',
      partnerAudioText:
        'I see. For your headache and fever, paracetamol 500mg tablets will help reduce the temperature and ease the throat pain. For the dry cough, I recommend this soothing honey and glycerin herbal syrup. Are you taking any other prescription medications, or do you have any allergies?',
      partnerQuestionHindi:
        'मैं समझती हूँ। आपके सिरदर्द और बुखार के लिए, पेरासिटामोल 500mg की गोलियां तापमान को कम करने और गले के दर्द को कम करने में मदद करेंगी। सूखी खांसी के लिए, मैं इस शहद और ग्लिसरीन हर्बल सिरप की सलाह देती हूँ। क्या आप कोई अन्य प्रिस्क्रिप्शन दवा ले रहे हैं, या आपको कोई एलर्जी है?',
      expectedFunction: 'Disclose Medical Status & Allergies (no other meds / no drug allergies)',
      contextGoal:
        'State clearly that you are not taking any other prescription medications and you have no known drug allergies; ask about dosage and side effects for both the paracetamol and the syrup.',
      targetVocabulary: ['not taking any other prescription medications', 'have no known allergies to medicines', 'how many times a day should I take the tablets and syrup?', 'does the syrup cause any drowsiness?'],
      suggestedResponses: [
        {
          label: 'Spontaneous A2 Scaffold',
          text: 'No, I am not taking any other prescription medications and I have no drug allergies. How often should I take the paracetamol tablets and the syrup, and does the cough syrup cause any drowsiness?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Allergies & Prescriptions (no prescription / no other meds / no allergies / not taking anything)',
          patterns: ['no other', 'no prescription', 'no allergies', 'not taking', 'no drug allergies', 'none'],
          required: true,
        },
        {
          name: 'Dosage & Drowsiness Inquiry (how often / dosage / take / drowsiness / side effects)',
          patterns: ['how often', 'dosage', 'how many', 'take', 'drowsiness', 'drowsy', 'side effects', 'tablets', 'syrup'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_131_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Does this medicine cause ___ (drowsiness / drowsy)?"',
        options: [
          { id: 'opt_1', text: 'drowsiness', isCorrect: true },
          { id: 'opt_2', text: 'drowsy', isCorrect: false },
          { id: 'opt_3', text: 'drowsily', isCorrect: false },
        ],
        correctAnswer: 'drowsiness',
        explanation: 'Use the noun "drowsiness" after the verb "cause".',
      },
    },
    {
      id: 'turn_a2_131_3',
      turnIndex: 3,
      partnerPrompt:
        'This cough syrup is completely non-drowsy, so you can work and drive safely. Take two 5ml spoonfuls three times daily after meals. For paracetamol, take one or two tablets every 4 to 6 hours with a glass of water, but never exceed eight tablets in 24 hours. If your fever persists for more than five days or you develop difficulty breathing, you should call 111 or see a GP.',
      partnerAudioText:
        'This cough syrup is completely non-drowsy, so you can work and drive safely. Take two 5ml spoonfuls three times daily after meals. For paracetamol, take one or two tablets every 4 to 6 hours with a glass of water, but never exceed eight tablets in 24 hours. If your fever persists for more than five days or you develop difficulty breathing, you should call 111 or see a GP.',
      partnerQuestionHindi:
        'यह कफ सिरप पूरी तरह से गैर-सुस्त (non-drowsy) है, इसलिए आप सुरक्षित रूप से काम कर सकते हैं और गाड़ी चला सकते हैं। भोजन के बाद दिन में तीन बार दो 5ml चम्मच लें। पेरासिटामोल के लिए, एक गिलास पानी के साथ हर 4 से 6 घंटे में एक या दो गोलियां लें, लेकिन 24 घंटे में कभी भी आठ गोलियों से अधिक न लें। यदि आपका बुखार पांच दिनों से अधिक समय तक बना रहता है या सांस लेने में कठिनाई होती है, तो आपको 111 पर कॉल करना चाहिए या जीपी से मिलना चाहिए।',
      expectedFunction: 'Confirm Understanding of Dosage Instructions & Add Throat Lozenges',
      contextGoal:
        'Confirm that you understand the dosage: max 8 paracetamol per 24 hours and syrup 3 times a day after meals; ask to add a pack of honey-lemon throat lozenges.',
      targetVocabulary: ['understand the instructions clearly', 'max eight paracetamol tablets in 24 hours', 'cough syrup three times a day after meals', 'could I also add a pack of honey-lemon throat lozenges?'],
      suggestedResponses: [
        {
          label: 'Spontaneous A2 Scaffold',
          text: 'I understand clearly: take paracetamol every four to six hours, never exceeding eight tablets in 24 hours, and syrup three times daily after food. Could I also add a pack of honey and lemon throat lozenges, please?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Dosage Confirmation (understand / paracetamol / eight tablets / 24 hours / syrup / meals / four to six hours)',
          patterns: ['understand', 'paracetamol', 'eight tablets', '8 tablets', '24 hours', 'syrup', 'three times', 'after food', 'after meals'],
          required: true,
        },
        {
          name: 'Lozenges Request (throat lozenges / honey / lemon / pack / add / also)',
          patterns: ['lozenges', 'honey', 'lemon', 'throat', 'pack', 'add', 'please', 'also'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_131_3',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly confirms dosage rules?',
        options: [
          { id: 'opt_1', text: 'I will never exceed eight tablets in 24 hours.', isCorrect: true },
          { id: 'opt_2', text: 'I will not exceeding eight tablets.', isCorrect: false },
          { id: 'opt_3', text: 'I never exceed than eight tablets.', isCorrect: false },
        ],
        correctAnswer: 'I will never exceed eight tablets in 24 hours.',
        explanation: 'Accurate syntax and proper usage of "exceed".',
      },
    },
    {
      id: 'turn_a2_131_4',
      turnIndex: 4,
      partnerPrompt:
        'Certainly! Here are your honey-lemon lozenges, the paracetamol, and the cough syrup. That comes to £11.40 altogether. You can tap your contactless card on the card reader. Drink plenty of warm water, get lots of rest, and feel better soon, Alex!',
      partnerAudioText:
        'Certainly! Here are your honey-lemon lozenges, the paracetamol, and the cough syrup. That comes to £11.40 altogether. You can tap your contactless card on the card reader. Drink plenty of warm water, get lots of rest, and feel better soon, Alex!',
      partnerQuestionHindi:
        'ज़रूर! यहाँ आपके शहद-नींबू के लोज़ेंज, पेरासिटामोल और कफ सिरप हैं। कुल मिलाकर यह £11.40 हुआ। आप कार्ड रीडर पर अपना कॉन्टैक्टलेस कार्ड टैप कर सकते हैं। खूब सारा गर्म पानी पिएं, खूब आराम करें, और जल्दी ठीक हो जाएं, एलेक्स!',
      expectedFunction: 'Pay with Contactless Card, Thank Pharmacist & Conclude Visit',
      contextGoal:
        'Tap your card to pay £11.40; thank Priya warmly for her professional medical advice and wish her a pleasant day.',
      targetVocabulary: ['tapping my contactless card now', 'thank you so much Priya for your helpful medical advice', 'will get plenty of rest and fluids', 'have a wonderful day'],
      suggestedResponses: [
        {
          label: 'Spontaneous A2 Scaffold',
          text: 'I am tapping my contactless card now. Thank you so much, Priya, for your helpful advice and clear instructions! I will drink plenty of warm fluids and get some rest. Have a lovely day!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Payment & Gratitude (tap / card / contactless / 11.40 / thank you / priya / rest / lovely day)',
          patterns: ['tap', 'card', 'contactless', 'thank you', 'thanks', 'priya', 'advice', 'rest', 'fluids', 'lovely day', 'good day'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_131_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I am tapping my card ___ (on / in) the contactless reader."',
        options: [
          { id: 'opt_1', text: 'on', isCorrect: true },
          { id: 'opt_2', text: 'in', isCorrect: false },
          { id: 'opt_3', text: 'at', isCorrect: false },
        ],
        correctAnswer: 'on',
        explanation: 'We tap a contactless card "on" the reader.',
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
