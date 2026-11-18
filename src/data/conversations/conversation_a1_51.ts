import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_51: ConversationDefinition = {
  id: 'conv_a1_51',
  title: 'Emergencies, Urgent Help, Safety & Reporting Incidents',
  cefr: 'A1',
  unitId: 'unit_a1_4',
  lessonLinks: ['lesson_a1_4_51'],
  estimatedMinutes: 5,
  scenario:
    'You are at a central transit station and realize you left your blue canvas backpack on the suburban train or a bench near the ticket hall. You approach station transit officer Sarah to report the lost item, describe its contents (passport, keys, phone charger), and leave your contact details.',
  communicativeGoals: [
    'Report a lost or misplaced personal item urgently and clearly ("I lost my backpack", "I left it on the train")',
    'Describe personal belongings with colors, sizes, and specific contents ("It is a dark blue backpack with two side pockets")',
    'State locations and times accurately ("About twenty minutes ago on Platform 3")',
    'Provide contact details (phone number, email address) calmly in English',
  ],
  canDoStatements: [
    'Can report a lost or stolen personal possession to security or station staff (CEFR A1.2)',
    'Can describe lost belongings simply with descriptive adjectives and locations',
    'Can provide emergency contact numbers and names clearly',
  ],
  characters: [
    {
      id: 'char_sarah_officer',
      name: 'Officer Sarah',
      role: 'Transit Safety Officer',
      avatar: '🚨',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'emergency',
        ipa: '/ɪˈmɜːrdʒənsi/',
        partOfSpeech: 'noun',
        meaning: 'A serious, unexpected, and often dangerous situation requiring immediate action',
        exampleSentence: 'For a medical emergency, call 999 or 112 immediately.',
        translations: { hi: 'आपातकाल / इमरजेंसी' },
      },
      {
        word: 'lost',
        ipa: '/lɒst/',
        partOfSpeech: 'adjective / verb (past)',
        meaning: 'Unable to be found; past tense of lose',
        exampleSentence: 'I lost my dark blue backpack near the ticket counter.',
        translations: { hi: 'खोया हुआ / खो गया' },
      },
      {
        word: 'belongings',
        ipa: '/bɪˈlɒŋɪŋz/',
        partOfSpeech: 'noun (plural)',
        meaning: 'One\'s movable personal possessions',
        exampleSentence: 'Please do not leave your personal belongings unattended.',
        translations: { hi: 'सामान / निजी वस्तुएँ' },
      },
      {
        word: 'incident',
        ipa: '/ˈɪnsɪdənt/',
        partOfSpeech: 'noun',
        meaning: 'An event or occurrence, typically one that is unusual or unpleasant',
        exampleSentence: 'I need to report a lost property incident.',
        translations: { hi: 'घटना / मामला' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I need to report a lost item.',
        functionCategory: 'Incident Reporting',
        exampleSentence: 'Excuse me officer, I need to report a lost backpack.',
      },
      {
        phrase: 'I left it on the train...',
        functionCategory: 'Location Description',
        exampleSentence: 'I left it on the train from Cambridge about fifteen minutes ago.',
      },
      {
        phrase: 'Inside the bag, there is...',
        functionCategory: 'Contents Listing',
        exampleSentence: 'Inside the bag, there is my passport, a notebook, and my house keys.',
      },
      {
        phrase: 'You can reach me at this phone number.',
        functionCategory: 'Contact Information',
        exampleSentence: 'You can reach me at this phone number anytime.',
      },
    ],
    grammar: {
      title: 'Reporting Incidents: Past Simple for Events & There is/are for Contents',
      conceptExplanation:
        'Use Past Simple ("I lost", "I left", "I forgot") to report past occurrences with specific time markers ("fifteen minutes ago", "at 2 PM"). Use "There is [singular item]" and "There are [plural items]" to describe the bag\'s contents.',
      patternFormula: 'I lost / left my [item] at [Location] [Time ago] | Inside, there is a [item] and there are [items]',
      contrastExamples: [
        {
          incorrect: 'I am lose my backpack ten minutes ago.',
          correct: 'I lost my backpack ten minutes ago.',
          explanation: 'Use Past Simple "I lost", not Present Continuous "I am lose".',
        },
        {
          incorrect: 'Inside the bag there is keys and money.',
          correct: 'Inside the bag there are keys and some money.',
          explanation: 'Use "There are" with plural nouns like "keys".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Officer Sarah',
        text: 'Hello! I am Officer Sarah. You look concerned—how can I help you right now?',
        translation: 'नमस्ते! मैं ऑफिसर सारा हूँ। आप चिंतित लग रहे हैं—मैं अभी आपकी क्या मदद कर सकती हूँ?',
      },
      {
        speaker: 'You',
        text: 'Excuse me officer, I need to report a lost item. I think I left my blue backpack on the train at Platform 3 ten minutes ago.',
        translation: 'माफ़ कीजिये अधिकारी, मुझे एक खोई हुई वस्तु की रिपोर्ट करनी है। मुझे लगता है कि मैं दस मिनट पहले प्लेटफॉर्म 3 पर ट्रेन में अपना नीला बैकपैक भूल गया।',
      },
      {
        speaker: 'Officer Sarah',
        text: 'Do not panic! Can you describe the backpack and tell me what is inside it?',
        translation: 'घबराएं नहीं! क्या आप बैकपैक का वर्णन कर सकते हैं और मुझे बता सकते हैं कि उसके अंदर क्या है?',
      },
      {
        speaker: 'You',
        text: 'It is a dark blue canvas bag. Inside, there is my passport, a black notebook, and my house keys.',
        translation: 'यह गहरे नीले रंग का कैनवास बैग है। अंदर, मेरा पासपोर्ट, एक काली नोटबुक और मेरे घर की चाबियां हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_51_1',
      type: 'fill_blank',
      prompt: 'Complete the lost property report: "I ___ my bag on the train ten minutes ago."',
      options: [
        { id: 'opt_1', text: 'lost', isCorrect: true },
        { id: 'opt_2', text: 'lose', isCorrect: false },
        { id: 'opt_3', text: 'am losing', isCorrect: false },
      ],
      correctAnswer: 'lost',
      explanation: 'Use Past Simple "lost" with time marker "ten minutes ago".',
    },
    {
      id: 'cp_a1_51_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes plural contents inside a bag?',
      options: [
        { id: 'opt_1', text: 'Inside the bag, there are two notebooks and some keys.', isCorrect: true },
        { id: 'opt_2', text: 'Inside the bag, there is two notebooks and some keys.', isCorrect: false },
        { id: 'opt_3', text: 'Inside the bag, it have two notebooks.', isCorrect: false },
      ],
      correctAnswer: 'Inside the bag, there are two notebooks and some keys.',
      explanation: '"There are" agrees with plural subjects "two notebooks and some keys".',
    },
    {
      id: 'cp_a1_51_3',
      type: 'multiple_choice',
      prompt: 'How do you politely give your telephone contact to an officer?',
      options: [
        { id: 'opt_1', text: 'You can contact me at this phone number.', isCorrect: true },
        { id: 'opt_2', text: 'Call me phone now.', isCorrect: false },
        { id: 'opt_3', text: 'I am ring phone for you.', isCorrect: false },
      ],
      correctAnswer: 'You can contact me at this phone number.',
      explanation: 'Polite and clear expression.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_51_1',
      scenarioContext: 'Report a misplaced bag on platform three.',
      prompt: 'Build: "I left my blue backpack on Platform 3."',
      targetStructure: 'Subject + past verb + possessive + noun phrase + prepositional phrase',
      wordBank: ['I', 'left', 'my', 'blue', 'backpack', 'on', 'Platform', '3', 'leave', 'at', 'leaving'],
      acceptableSolutions: [
        'I left my blue backpack on Platform 3',
        'I left my blue backpack on Platform 3.',
      ],
      explanation: 'Past event reporting with location.',
    },
    {
      id: 'sc_a1_51_2',
      scenarioContext: 'Describe important items inside the backpack.',
      prompt: 'Build: "Inside the bag there is my passport and keys."',
      targetStructure: 'Inside the bag + there is / are + noun phrase',
      wordBank: ['Inside', 'the', 'bag', 'there', 'is', 'my', 'passport', 'and', 'keys', 'are', 'having'],
      acceptableSolutions: [
        'Inside the bag there is my passport and keys',
        'Inside the bag there is my passport and keys.',
      ],
      explanation: 'Describing contents clearly.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_51_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello, transit security. You look very stressed—is everything alright? How can I help you right now?',
      partnerAudioText:
        'Hello, transit security. You look very stressed—is everything alright? How can I help you right now?',
      partnerQuestionHindi:
        'नमस्ते, ट्रांजिट सुरक्षा। आप बहुत तनाव में लग रहे हैं—क्या सब ठीक है? मैं अभी आपकी क्या मदद कर सकती हूँ?',
      expectedFunction: 'Report Lost Item & State Location / Time (I lost / I left...)',
      contextGoal:
        'State that you lost your blue backpack about 15 minutes ago, probably on the train at Platform 3.',
      targetVocabulary: ['excuse me officer', 'lost my backpack', 'fifteen minutes ago', 'platform 3', 'on the train'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Excuse me officer! I need urgent help. I lost my dark blue backpack about fifteen minutes ago. I think I left it on the train at Platform 3.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I lost my blue backpack fifteen minutes ago on the train at Platform 3. Can you help me?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I left my blue backpack on the train at Platform 3!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Lost Bag & Location',
          patterns: [
            'lost my backpack',
            'lost my bag',
            'left my backpack',
            'platform 3',
            'on the train',
            'minutes ago',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'am_lose_bag_error',
          pattern: /\bi am lose my bag\b/i,
          errorType: 'grammar',
          message: 'Say "I lost my bag", not "I am lose".',
          correctionPattern: 'I lost my bag.',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_51_1',
        type: 'fill_blank',
        prompt: 'Choose the correct past verb: "I ___ my keys on the bench."',
        options: [
          { id: 'opt_1', text: 'left', isCorrect: true },
          { id: 'opt_2', text: 'leave', isCorrect: false },
          { id: 'opt_3', text: 'am leave', isCorrect: false },
        ],
        correctAnswer: 'left',
        explanation: 'Past tense of "leave" is "left".',
      },
    },
    {
      id: 'turn_a1_51_2',
      turnIndex: 2,
      partnerPrompt:
        'Don’t worry, the cleaning crew is currently inspecting that train at Platform 3. Can you describe the backpack in detail and tell me what valuable items are inside it?',
      partnerAudioText:
        'Don’t worry, the cleaning crew is currently inspecting that train at Platform 3. Can you describe the backpack in detail and tell me what valuable items are inside it?',
      partnerQuestionHindi:
        'चिंता मत करो, सफाई दल वर्तमान में प्लेटफॉर्म 3 पर उस ट्रेन का निरीक्षण कर रहा है। क्या आप बैकपैक का विस्तार से वर्णन कर सकते हैं और मुझे बता सकते हैं कि इसके अंदर कौन सी मूल्यवान वस्तुएं हैं?',
      expectedFunction: 'Describe Appearance & List Bag Contents',
      contextGoal:
        'Describe the bag (medium dark blue canvas) and state that your passport, black notebook, and house keys are inside.',
      targetVocabulary: ['dark blue canvas', 'passport', 'black notebook', 'house keys', 'inside there is', 'valuable'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'It is a medium dark blue canvas backpack with two side pockets. Inside the main zipper, there is my passport, a black notebook, and my metal house keys.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'It is a dark blue bag. Inside, there is my passport, a notebook, and my keys.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Dark blue backpack! Inside is my passport, keys, and a black notebook.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Description & Contents',
          patterns: [
            'blue',
            'dark blue',
            'canvas',
            'passport',
            'keys',
            'notebook',
            'inside',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_51_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes what is inside?',
        options: [
          { id: 'opt_1', text: 'Inside the bag, there are keys and my passport.', isCorrect: true },
          { id: 'opt_2', text: 'Inside bag have keys and passport.', isCorrect: false },
          { id: 'opt_3', text: 'Inside are is keys.', isCorrect: false },
        ],
        correctAnswer: 'Inside the bag, there are keys and my passport.',
        explanation: 'Standard "there are + items" structure.',
      },
    },
    {
      id: 'turn_a1_51_3',
      turnIndex: 3,
      partnerPrompt:
        'I am radioing the train team right now... Good news! A train supervisor just found a dark blue bag matching that description in carriage 4! What is your full name and phone number so I can register the return report?',
      partnerAudioText:
        'I am radioing the train team right now... Good news! A train supervisor just found a dark blue bag matching that description in carriage 4! What is your full name and phone number so I can register the return report?',
      partnerQuestionHindi:
        'मैं अभी ट्रेन टीम को रेडियो कर रही हूँ... अच्छी खबर! एक ट्रेन सुपरवाइजर को बोगी 4 में उस विवरण से मेल खाता एक गहरा नीला बैग मिला है! आपका पूरा नाम और फोन नंबर क्या है ताकि मैं वापसी रिपोर्ट दर्ज कर सकूँ?',
      expectedFunction: 'Provide Full Name & Contact Number Clearly',
      contextGoal:
        'Express immense relief, state your full name, and provide your phone number clearly.',
      targetVocabulary: ['thank goodness', 'my name is', 'phone number is', 'so relieved', 'contact number'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank goodness, what a relief! My name is Alex Morgan, and my mobile phone number is 07700 900123.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thank you so much! My name is Alex Morgan, and my number is 07700 900123.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'That’s wonderful! My name is Alex Morgan, phone number is 07700 900123.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Name & Phone Number',
          patterns: [
            'name is',
            'phone number',
            '07700',
            'relief',
            'thank goodness',
            'thank you',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_51_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "My full name ___ Alex Morgan."',
        options: [
          { id: 'opt_1', text: 'is', isCorrect: true },
          { id: 'opt_2', text: 'are', isCorrect: false },
          { id: 'opt_3', text: 'am', isCorrect: false },
        ],
        correctAnswer: 'is',
        explanation: 'Singular subject "My full name" takes verb "is".',
      },
    },
    {
      id: 'turn_a1_51_4',
      turnIndex: 4,
      partnerPrompt:
        'The train supervisor is bringing your backpack right here to the security desk. It will be here in two minutes! Please have your photo ID ready to sign the collection receipt. Stay safe!',
      partnerAudioText:
        'The train supervisor is bringing your backpack right here to the security desk. It will be here in two minutes! Please have your photo ID ready to sign the collection receipt. Stay safe!',
      partnerQuestionHindi:
        'ट्रेन सुपरवाइजर आपके बैकपैक को यहीं सुरक्षा डेस्क पर ला रहा है। यह दो मिनट में यहाँ होगा! कृपया रसीद पर हस्ताक्षर करने के लिए अपना फोटो पहचान पत्र तैयार रखें। सुरक्षित रहें!',
      expectedFunction: 'Confirm ID Ready & Express Sincere Gratitude',
      contextGoal:
        'Thank Officer Sarah sincerely for her swift help and confirm that you have your driver\'s license / ID card in your hand.',
      targetVocabulary: ['thank you so much', 'have my ID ready', 'appreciate your help', 'stay safe', 'officer Sarah'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I have my photo ID card right here in my hand! Thank you so much for your incredible and fast assistance, Officer Sarah. I truly appreciate your help!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I have my ID card ready. Thank you so much for your help, Officer Sarah!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'My ID is ready! Thank you so much for saving my bag!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'ID Confirmation & Gratitude',
          patterns: [
            'photo id',
            'id ready',
            'id card',
            'thank you',
            'thanks so much',
            'appreciate',
            'officer',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_51_4',
        type: 'multiple_choice',
        prompt: 'Which response thanks the officer and confirms ID politely?',
        options: [
          { id: 'opt_1', text: 'I have my photo ID ready. Thank you so much for your help!', isCorrect: true },
          { id: 'opt_2', text: 'Give my bag quick now.', isCorrect: false },
          { id: 'opt_3', text: 'I am no have papers.', isCorrect: false },
        ],
        correctAnswer: 'I have my photo ID ready. Thank you so much for your help!',
        explanation: 'Polite and clear.',
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
