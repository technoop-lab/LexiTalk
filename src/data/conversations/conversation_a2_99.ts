import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_99: ConversationDefinition = {
  id: 'conv_a2_99',
  title: 'Health, Symptoms & Advice (should / shouldn\'t, aches, remedies)',
  cefr: 'A2',
  unitId: 'unit_a2_7',
  lessonLinks: ['lesson_a2_7_99'],
  estimatedMinutes: 5,
  scenario:
    'You are seeking advice at a community pharmacy in Glasgow, speaking with pharmacist Fiona MacLeod. Explain that you have had a persistent sore throat, mild dry cough, and headache for two days. Inquire about over-the-counter remedies, ask for guidance using "should" and "shouldn\'t", understand dosage instructions, and check when you ought to see a doctor.',
  communicativeGoals: [
    'Describe physical health symptoms and duration clearly (have a headache, sore throat, dry cough for two days)',
    'Ask for and comprehend health advice using modal verbs (should I take..., you shouldn\'t drive if drowsy)',
    'Understand medication dosage, frequency, and cautionary instructions (after meals, twice daily)',
    'Inquire about red-flag warning signs and when to book a doctor\'s appointment',
  ],
  canDoStatements: [
    'Can describe common ailments, symptoms, and health conditions in simple terms (CEFR A2)',
    'Can give and understand simple advice using "should" and "shouldn\'t"',
    'Can understand basic medical instructions and ask for clarification on dosages',
  ],
  characters: [
    {
      id: 'char_fiona_macleod',
      name: 'Fiona MacLeod',
      role: 'Community Pharmacist',
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
        meaning: 'A physical or mental feature indicating a condition of disease',
        exampleSentence: 'My main symptoms are a persistent sore throat and a slight fever.',
        translations: { hi: 'लक्षण' },
      },
      {
        word: 'dosage',
        ipa: '/ˈdoʊsɪdʒ/',
        partOfSpeech: 'noun',
        meaning: 'The size or frequency of a dose of a medicine or drug',
        exampleSentence: 'What is the recommended dosage for these lozenges?',
        translations: { hi: 'खुराक की मात्रा' },
      },
      {
        word: 'prescription',
        ipa: '/prɪˈskrɪpʃən/',
        partOfSpeech: 'noun',
        meaning: 'An instruction written by a medical practitioner that authorizes a patient to be provided a medicine',
        exampleSentence: 'You do not need a doctor\'s prescription for these throat lozenges.',
        translations: { hi: 'नुस्खा / डॉक्टर का पर्चा' },
      },
      {
        word: 'hydrated',
        ipa: '/ˈhaɪdreɪtɪd/',
        partOfSpeech: 'adjective',
        meaning: 'Absorbing or containing plenty of water or moisture',
        exampleSentence: 'You should stay well hydrated by drinking warm water and lemon.',
        translations: { hi: 'हाइड्रेटेड / पर्याप्त पानी पीना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I have had a... for the past two days.',
        functionCategory: 'Describing Duration of Symptoms',
        exampleSentence: 'I have had a sore throat and mild headache for the past two days.',
      },
      {
        phrase: 'What should I take to relieve the pain?',
        functionCategory: 'Asking for Health Advice',
        exampleSentence: 'What should I take to relieve the sore throat pain?',
      },
      {
        phrase: 'You should take one tablet every six hours.',
        functionCategory: 'Giving Dosage Instructions',
        exampleSentence: 'You should take one tablet every six hours after meals.',
      },
      {
        phrase: 'You shouldn’t take this on an empty stomach.',
        functionCategory: 'Cautionary Advice with Shouldn’t',
        exampleSentence: 'You shouldn’t take ibuprofen on an empty stomach.',
      },
    ],
    grammar: {
      title: 'Modals for Advice (Should / Shouldn’t + Bare Infinitive)',
      conceptExplanation:
        'Use "should + [base verb]" to give or ask for recommendations and advice (e.g., "You should rest and drink warm fluids"). Use "shouldn\'t + [base verb]" to warn against harmful actions (e.g., "You shouldn\'t stay up late or drink icy liquids"). For health complaints, use "have a + [noun]" (have a headache, have a sore throat, have a cold).',
      patternFormula: 'Advice: Subject + should / shouldn\'t + [Base Verb] | Symptom: I have a + [Ailment]',
      contrastExamples: [
        {
          incorrect: 'You should to rest more.',
          correct: 'You should rest more.',
          explanation: 'Never use "to" after modal verbs like "should".',
        },
        {
          incorrect: 'I am having headache since morning.',
          correct: 'I have a headache / I have had a headache since morning.',
          explanation: 'Use simple or present perfect structures for ongoing pain symptoms.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Fiona MacLeod',
        text: 'Hello, how can I help you today at the pharmacy counter?',
        translation: 'नमस्ते, आज फ़ार्मेसी काउंटर पर मैं आपकी क्या मदद कर सकती हूँ?',
      },
      {
        speaker: 'You',
        text: 'Hello Fiona. I have had a painful sore throat and a dry cough for two days. What should I take to soothe the irritation?',
        translation: 'नमस्ते फिओना। मुझे दो दिनों से गले में दर्द और सूखी खांसी है। जलन को शांत करने के लिए मुझे क्या लेना चाहिए?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_99_1',
      type: 'fill_blank',
      prompt: 'Complete the advice: "You ___ (should / not) drink ice-cold beverages when your throat hurts."',
      options: [
        { id: 'opt_1', text: 'shouldn\'t', isCorrect: true },
        { id: 'opt_2', text: 'shouldn\'t to', isCorrect: false },
        { id: 'opt_3', text: 'not should', isCorrect: false },
      ],
      correctAnswer: 'shouldn\'t',
      explanation: 'Use "shouldn\'t" followed directly by the base verb "drink".',
    },
    {
      id: 'cp_a2_99_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes a health symptom with proper grammar?',
      options: [
        { id: 'opt_1', text: 'I have a sore throat and a slight fever.', isCorrect: true },
        { id: 'opt_2', text: 'I am having sore throat and fevering.', isCorrect: false },
        { id: 'opt_3', text: 'I have throat paining since yesterday.', isCorrect: false },
      ],
      correctAnswer: 'I have a sore throat and a slight fever.',
      explanation: 'Use the standard idiom: "I have a sore throat / headache / fever".',
    },
    {
      id: 'cp_a2_99_3',
      type: 'multiple_choice',
      prompt: 'Which question correctly asks a pharmacist for medication advice?',
      options: [
        { id: 'opt_1', text: 'How often should I take this cough syrup?', isCorrect: true },
        { id: 'opt_2', text: 'How often should I to take this syrup?', isCorrect: false },
        { id: 'opt_3', text: 'How many times I am taking syrup?', isCorrect: false },
      ],
      correctAnswer: 'How often should I take this cough syrup?',
      explanation: 'Question formula: WH- + should + subject + base verb?',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_99_1',
      scenarioContext: 'Explain your symptoms and how long they have lasted.',
      prompt: 'Build: "I have a sore throat and headache for two days."',
      targetStructure: 'Subject + have + compound ailments + time phrase',
      wordBank: ['I', 'have', 'a', 'sore', 'throat', 'and', 'headache', 'for', 'two', 'days', 'having', 'am'],
      acceptableSolutions: [
        'I have a sore throat and headache for two days',
        'I have a sore throat and headache for two days.',
      ],
      explanation: 'States symptoms and duration clearly.',
    },
    {
      id: 'sc_a2_99_2',
      scenarioContext: 'Ask for the pharmacist\'s advice on medication.',
      prompt: 'Build: "What medicine should I take for this cough?"',
      targetStructure: 'Question noun phrase + should + subject + base verb + prepositional phrase',
      wordBank: ['What', 'medicine', 'should', 'I', 'take', 'for', 'this', 'cough', 'to', 'taking'],
      acceptableSolutions: [
        'What medicine should I take for this cough',
        'What medicine should I take for this cough?',
      ],
      explanation: 'Correct modal question asking for health recommendations.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_99_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello there, welcome to Glasgow Care Pharmacy. How can I help you today? Are you experiencing any particular symptoms or looking for advice?',
      partnerAudioText:
        'Hello there, welcome to Glasgow Care Pharmacy. How can I help you today? Are you experiencing any particular symptoms or looking for advice?',
      partnerQuestionHindi:
        'नमस्ते, ग्लासगो केयर फ़ार्मेसी में आपका स्वागत है। आज मैं आपकी क्या मदद कर सकती हूँ? क्या आप किसी विशेष लक्षण का अनुभव कर रहे हैं या सलाह की तलाश में हैं?',
      expectedFunction: 'Describe Symptoms & Duration (Sore Throat, Cough, Headache)',
      contextGoal:
        'Explain that you have had a scratchy sore throat, dry cough, and mild headache for the past two days; ask what over-the-counter medicine you should take.',
      targetVocabulary: ['sore throat and dry cough for two days', 'mild headache', 'what over-the-counter remedy should I take', 'help soothe the irritation'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'Hello Fiona. For the past two days, I have had a painful sore throat, a dry cough, and a mild headache. I don’t have a high fever, but swallowing feels difficult. What over-the-counter remedy should I take?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Hello! I have had a sore throat, dry cough, and headache for two days. What should I take to relieve the symptoms?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Symptoms (Sore throat / cough / headache)',
          patterns: ['sore throat', 'cough', 'headache', 'throat', 'pain', 'fever', 'swallowing', 'two days'],
          required: true,
        },
        {
          name: 'Advice Request with Should',
          patterns: ['what should I', 'what medicine', 'should I take', 'remedy', 'relieve', 'recommend'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'should_to_error',
          pattern: /\bwhat should i to take\b|\bwhat should i to do\b/i,
          errorType: 'grammar',
          message: 'Say "What should I take?", not "What should I to take?". Do not use "to" after "should".',
          correctionPattern: 'what should I take',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_99_1',
        type: 'multiple_choice',
        prompt: 'Which advice request has correct modal grammar?',
        options: [
          { id: 'opt_1', text: 'What should I take for this sore throat?', isCorrect: true },
          { id: 'opt_2', text: 'What should I to take for this sore throat?', isCorrect: false },
          { id: 'opt_3', text: 'What I should taking for this sore throat?', isCorrect: false },
        ],
        correctAnswer: 'What should I take for this sore throat?',
        explanation: 'Modal "should" takes the bare infinitive "take".',
      },
    },
    {
      id: 'turn_a2_99_2',
      turnIndex: 2,
      partnerPrompt:
        'I recommend these antiseptic throat lozenges with honey and lemon to soothe your vocal cords, along with paracetamol for the headache. You should dissolve one lozenge slowly every three hours, but you shouldn’t exceed eight lozenges in 24 hours. Do you have any allergies to pain relievers?',
      partnerAudioText:
        'I recommend these antiseptic throat lozenges with honey and lemon to soothe your vocal cords, along with paracetamol for the headache. You should dissolve one lozenge slowly every three hours, but you shouldn’t exceed eight lozenges in 24 hours. Do you have any allergies to pain relievers?',
      partnerQuestionHindi:
        'मैं आपके स्वर रज्जु को शांत करने के लिए शहद और नींबू वाली इन एंटीसेप्टिक थ्रोट लोजेंजेस की सलाह देती हूँ, साथ ही सिरदर्द के लिए पेरासिटामोल की। आपको हर तीन घंटे में एक लोजेंज धीरे-धीरे चूसना चाहिए, लेकिन आपको 24 घंटों में आठ लोजेंजेस से अधिक नहीं लेना चाहिए। क्या आपको दर्द निवारक दवाओं से कोई एलर्जी है?',
      expectedFunction: 'Clarify Allergies, Paracetamol Dosage & Food Instructions',
      contextGoal:
        'Confirm you have no allergies; ask how often you should take the paracetamol and whether it should be taken with or after food.',
      targetVocabulary: ['no known allergies to medications', 'how often should I take the paracetamol', 'should I take it after meals', 'staying hydrated with warm water'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'I do not have any allergies to medications. Regarding the paracetamol, how many tablets should I take per dose, and should I take them with food or plenty of water?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I have no medication allergies. How often should I take the paracetamol, and should it be taken after meals?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'No Allergies Confirmation',
          patterns: ['no allergies', 'don\'t have allergies', 'not allergic', 'no known allergies'],
          required: true,
        },
        {
          name: 'Dosage / Food Instruction Inquiry',
          patterns: ['how often', 'paracetamol', 'tablets', 'food', 'meals', 'water', 'dose', 'how many'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_99_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "You ___ take more than the recommended dose."',
        options: [
          { id: 'opt_1', text: 'shouldn\'t', isCorrect: true },
          { id: 'opt_2', text: 'should to', isCorrect: false },
          { id: 'opt_3', text: 'not should', isCorrect: false },
        ],
        correctAnswer: 'shouldn\'t',
        explanation: '"Shouldn\'t" gives cautionary medical advice.',
      },
    },
    {
      id: 'turn_a2_99_3',
      turnIndex: 3,
      partnerPrompt:
        'You should take one to two 500mg tablets every four to six hours with a full glass of water, up to a maximum of four times a day. You should also drink warm tea with honey and get plenty of rest. When should you contact a GP? If your fever rises above 38.5°C or symptoms last more than five days, you must see a doctor. Does that sound clear?',
      partnerAudioText:
        'You should take one to two 500mg tablets every four to six hours with a full glass of water, up to a maximum of four times a day. You should also drink warm tea with honey and get plenty of rest. When should you contact a GP? If your fever rises above 38.5°C or symptoms last more than five days, you must see a doctor. Does that sound clear?',
      partnerQuestionHindi:
        'आपको एक पूरा गिलास पानी के साथ हर चार से छह घंटे में एक से दो 500 मिलीग्राम की गोलियां लेनी चाहिए, दिन में अधिकतम चार बार। आपको शहद वाली गर्म चाय भी पीनी चाहिए और खूब आराम करना चाहिए। आपको डॉक्टर (GP) से कब संपर्क करना चाहिए? यदि आपका बुखार 38.5°C से ऊपर बढ़ जाता है या लक्षण पांच दिनों से अधिक समय तक रहते हैं, तो आपको डॉक्टर को दिखाना होगा। क्या यह स्पष्ट लगता है?',
      expectedFunction: 'Demonstrate Comprehension of Instructions & Confirm Warnings',
      contextGoal:
        'Acknowledge the instructions: take paracetamol with water, dissolve lozenges slowly, rest, and contact a GP if fever increases or symptoms persist beyond five days.',
      targetVocabulary: ['everything is completely clear', 'take paracetamol with water every six hours', 'see a GP if fever persists past five days', 'rest and warm fluids'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'That is completely clear Fiona. I will take paracetamol with water every six hours, use the lozenges, and drink warm tea. If my symptoms persist past five days or my fever spikes, I will immediately contact my GP.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Yes, everything makes total sense. I will rest, follow the dosage, and call a GP if the fever rises or lasts more than five days.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Comprehension & Plan',
          patterns: ['clear', 'makes sense', 'understand', 'paracetamol', 'water', 'lozenges', 'rest', 'tea'],
          required: true,
        },
        {
          name: 'GP Warning Awareness',
          patterns: ['gp', 'doctor', 'five days', 'fever', 'contact', 'persist', 'call'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_99_3',
        type: 'multiple_choice',
        prompt: 'Which statement accurately confirms medical advice comprehension?',
        options: [
          { id: 'opt_1', text: 'I understand: I should rest and contact a doctor if symptoms worsen.', isCorrect: true },
          { id: 'opt_2', text: 'I am must to take 20 tablets now.', isCorrect: false },
          { id: 'opt_3', text: 'Doctor is not needed never.', isCorrect: false },
        ],
        correctAnswer: 'I understand: I should rest and contact a doctor if symptoms worsen.',
        explanation: 'Accurate and safe health communication.',
      },
    },
    {
      id: 'turn_a2_99_4',
      turnIndex: 4,
      partnerPrompt:
        'Spot on! The lozenges and paracetamol together come to £6.80. You can pay here at the terminal. Please get straight into bed with a hot herbal brew tonight, and I hope you feel much better very soon!',
      partnerAudioText:
        'Spot on! The lozenges and paracetamol together come to £6.80. You can pay here at the terminal. Please get straight into bed with a hot herbal brew tonight, and I hope you feel much better very soon!',
      partnerQuestionHindi:
        'बिल्कुल सही! लोजेंजेस और पेरासिटामोल कुल मिलाकर £6.80 के हैं। आप यहाँ टर्मिनल पर भुगतान कर सकते हैं। कृपया आज रात गर्म हर्बल चाय के साथ सीधे बिस्तर पर जाएं, और मुझे आशा है कि आप बहुत जल्द बेहतर महसूस करेंगे!',
      expectedFunction: 'Complete Pharmacy Payment & Express Gratitude for Health Advice',
      contextGoal:
        'Pay £6.80 by card, thank Fiona for her professional guidance and care, and wish her a pleasant evening.',
      targetVocabulary: ['thank you Fiona for your helpful advice and care', 'pay £6.80 by card', 'appreciate your guidance', 'have a lovely evening'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'Thank you so much Fiona for your kind guidance and professional advice! Let me tap my card for the £6.80. I will head straight home to rest. Have a lovely evening!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Thank you Fiona for all your helpful advice! I’m tapping my card for £6.80 now. Have a wonderful evening!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Payment & Gratitude',
          patterns: ['thank you', 'thanks', 'fiona', 'card', 'tap', '6.80', 'pay', 'advice', 'rest', 'evening'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_99_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Thank you for your helpful ___!"',
        options: [
          { id: 'opt_1', text: 'advice', isCorrect: true },
          { id: 'opt_2', text: 'advices', isCorrect: false },
          { id: 'opt_3', text: 'advising', isCorrect: false },
        ],
        correctAnswer: 'advice',
        explanation: '"Advice" is uncountable in English and never takes plural -s (*advices is incorrect).',
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
