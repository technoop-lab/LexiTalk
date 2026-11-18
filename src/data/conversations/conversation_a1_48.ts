import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_48: ConversationDefinition = {
  id: 'conv_a1_48',
  title: 'Customer Service, Returns, Exchanges & Store Policies',
  cefr: 'A1',
  unitId: 'unit_a1_4',
  lessonLinks: ['lesson_a1_4_48'],
  estimatedMinutes: 5,
  scenario:
    'You bought a wireless Bluetooth speaker yesterday at an electronics store, but when you got home, the power button was defective and would not turn on. You return to the store customer service counter to speak with the clerk Jason to request an exchange or full refund with your receipt.',
  communicativeGoals: [
    'Explain a product defect or shopping problem clearly ("It doesn\'t work", "It is damaged", "The button is broken")',
    'Request a refund or an exchange using "I would like to return / exchange this..."',
    'Present proof of purchase and discuss store return policies ("Here is my receipt", "Is it within 30 days?")',
    'Choose a replacement item or confirm payment refund method (card vs cash)',
  ],
  canDoStatements: [
    'Can explain what is wrong with a purchased item in simple terms (CEFR A1.2)',
    'Can ask for a refund or exchange presenting a valid receipt',
    'Can understand basic store return policies and timeframes',
  ],
  characters: [
    {
      id: 'char_jason_clerk',
      name: 'Jason',
      role: 'Customer Service Representative',
      avatar: '🛍️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'receipt',
        ipa: '/rɪˈsiːt/',
        partOfSpeech: 'noun',
        meaning: 'A written or printed statement acknowledging that something has been paid for or received',
        exampleSentence: 'I have the original purchase receipt in my wallet.',
        translations: { hi: 'रसीद' },
      },
      {
        word: 'refund',
        ipa: '/ˈriːfʌnd/',
        partOfSpeech: 'noun / verb',
        meaning: 'A repayment of a sum of money, or to pay back money to a customer',
        exampleSentence: 'Could I please get a full refund onto my credit card?',
        translations: { hi: 'धनवापसी / रिफंड' },
      },
      {
        word: 'exchange',
        ipa: '/ɪksˈtʃeɪndʒ/',
        partOfSpeech: 'verb / noun',
        meaning: 'An act of giving one thing and receiving another (especially of the same type) in return',
        exampleSentence: 'Would you prefer a refund or an exchange for a working model?',
        translations: { hi: 'बदलना / एक्सचेंज' },
      },
      {
        word: 'defective',
        ipa: '/dɪˈfɛktɪv/',
        partOfSpeech: 'adjective',
        meaning: 'Imperfect or faulty; not functioning properly',
        exampleSentence: 'The power switch on this speaker is defective.',
        translations: { hi: 'खराब / दोषपूर्ण' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I would like to return this...',
        functionCategory: 'Return Request',
        exampleSentence: 'I would like to return this wireless speaker.',
      },
      {
        phrase: 'It doesn’t work properly.',
        functionCategory: 'Defect Explanation',
        exampleSentence: 'It doesn’t work properly when I press the power button.',
      },
      {
        phrase: 'Here is my original receipt.',
        functionCategory: 'Proof of Purchase',
        exampleSentence: 'Here is my original receipt from yesterday afternoon.',
      },
      {
        phrase: 'Can I exchange it for a new one?',
        functionCategory: 'Product Replacement',
        exampleSentence: 'Can I exchange it for a new one in black?',
      },
    ],
    grammar: {
      title: 'Describing Defects & Polite Requests: I would like to + [Base Verb] / It doesn\'t + [Verb]',
      conceptExplanation:
        'Use "I would like to return / exchange [item]" for polite customer service requests. Use "It doesn\'t work" or "It is broken/defective" to describe product faults. Note that "receipt" has a silent "p" (/rɪˈsiːt/).',
      patternFormula: 'I would like to + [return / exchange / get a refund for] + [Noun] | It doesn\'t + [work / turn on / fit]',
      contrastExamples: [
        {
          incorrect: 'I want return this speaker.',
          correct: 'I would like to return this speaker.',
          explanation: 'Use "I would like to return" for polite, natural customer service communication.',
        },
        {
          incorrect: 'It no work since yesterday.',
          correct: 'It doesn\'t work properly.',
          explanation: 'Use "It doesn\'t work", not "It no work".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Jason',
        text: 'Hello! Welcome to customer service. How can I help you today?',
        translation: 'नमस्ते! ग्राहक सेवा में आपका स्वागत है। आज मैं आपकी क्या मदद कर सकता हूँ?',
      },
      {
        speaker: 'You',
        text: 'Hello. I would like to return this Bluetooth speaker. I bought it yesterday, but the power button doesn\'t work.',
        translation: 'नमस्ते। मैं इस ब्लूटूथ स्पीकर को वापस करना चाहता हूँ। मैंने इसे कल खरीदा था, लेकिन पावर बटन काम नहीं कर रहा है।',
      },
      {
        speaker: 'Jason',
        text: 'I am so sorry to hear that! Do you have your purchase receipt with you?',
        translation: 'यह सुनकर मुझे बहुत खेद है! क्या आपके पास आपकी खरीद रसीद है?',
      },
      {
        speaker: 'You',
        text: 'Yes, here is my original receipt. Would it be possible to exchange it for a new working unit?',
        translation: 'हाँ, यह मेरी मूल रसीद है। क्या इसे एक नई चालू यूनिट से बदलना संभव होगा?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_48_1',
      type: 'fill_blank',
      prompt: 'Complete the polite return request: "I would like to ___ this damaged item."',
      options: [
        { id: 'opt_1', text: 'return', isCorrect: true },
        { id: 'opt_2', text: 'returning', isCorrect: false },
        { id: 'opt_3', text: 'returned', isCorrect: false },
      ],
      correctAnswer: 'return',
      explanation: '"would like to" is followed by base verb "return".',
    },
    {
      id: 'cp_a1_48_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes a broken electronic item?',
      options: [
        { id: 'opt_1', text: 'It doesn\'t turn on at all.', isCorrect: true },
        { id: 'opt_2', text: 'It not is turn on.', isCorrect: false },
        { id: 'opt_3', text: 'It no turning on yesterday.', isCorrect: false },
      ],
      correctAnswer: 'It doesn\'t turn on at all.',
      explanation: '"It doesn\'t turn on" is the correct negative Present Simple form.',
    },
    {
      id: 'cp_a1_48_3',
      type: 'multiple_choice',
      prompt: 'How do you offer proof of purchase to the cashier?',
      options: [
        { id: 'opt_1', text: 'Here is my receipt from yesterday.', isCorrect: true },
        { id: 'opt_2', text: 'I am holding my ticket buying.', isCorrect: false },
        { id: 'opt_3', text: 'Receipt is here to take you.', isCorrect: false },
      ],
      correctAnswer: 'Here is my receipt from yesterday.',
      explanation: 'Natural expression: "Here is my receipt".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_48_1',
      scenarioContext: 'Politely state that you would like to exchange a defective item.',
      prompt: 'Build: "I would like to exchange this speaker for a new one."',
      targetStructure: 'Subject + would like to + base verb + object + prepositional phrase',
      wordBank: ['I', 'would', 'like', 'to', 'exchange', 'this', 'speaker', 'for', 'a', 'new', 'one', 'returning'],
      acceptableSolutions: [
        'I would like to exchange this speaker for a new one',
        'I would like to exchange this speaker for a new one.',
      ],
      explanation: 'Standard customer service formula with "would like to exchange".',
    },
    {
      id: 'sc_a1_48_2',
      scenarioContext: 'Explain that the item does not work and show receipt.',
      prompt: 'Build: "The power button does not work and here is my receipt."',
      targetStructure: 'Subject + does not work + coordinator + here is my receipt',
      wordBank: ['The', 'power', 'button', 'does', 'not', 'work', 'and', 'here', 'is', 'my', 'receipt', 'no'],
      acceptableSolutions: [
        'The power button does not work and here is my receipt',
        'The power button does not work and here is my receipt.',
      ],
      explanation: 'States the issue and provides proof of purchase.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_48_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello! Welcome to tech customer service. How can I assist you today with your purchase?',
      partnerAudioText:
        'Hello! Welcome to tech customer service. How can I assist you today with your purchase?',
      partnerQuestionHindi:
        'नमस्ते! टेक ग्राहक सेवा में आपका स्वागत है। आज मैं आपकी खरीद में क्या सहायता कर सकता हूँ?',
      expectedFunction: 'State Return Intent & Explain Defect (I would like to return... It doesn\'t work)',
      contextGoal:
        'State that you bought a speaker yesterday, but it is defective and does not turn on.',
      targetVocabulary: ['would like to return', 'speaker', 'bought yesterday', 'does not work', 'defective', 'turn on'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hello! I would like to return this wireless speaker. I bought it yesterday, but the power button is defective and it does not turn on.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hi, I’d like to return this speaker. I bought it yesterday and it doesn’t work.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Hello! I would like to return this speaker because it doesn’t turn on.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Return Request & Defect Reason',
          patterns: [
            'would like to return',
            'want to return',
            'like to exchange',
            'speaker',
            'bought yesterday',
            'does not work',
            "doesn't work",
            'defective',
            'turn on',
            'broken',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'no_work_error',
          pattern: /\bit no work\b/i,
          errorType: 'grammar',
          message: 'Say "It doesn\'t work", not "It no work".',
          correctionPattern: "It doesn't work.",
        },
      ],
      remediationPractice: {
        id: 'rem_a1_48_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "The power button ___ work at all."',
        options: [
          { id: 'opt_1', text: "doesn't", isCorrect: true },
          { id: 'opt_2', text: 'no', isCorrect: false },
          { id: 'opt_3', text: 'not is', isCorrect: false },
        ],
        correctAnswer: "doesn't",
        explanation: '"doesn\'t + base verb" is the correct negative auxiliary.',
      },
    },
    {
      id: 'turn_a1_48_2',
      turnIndex: 2,
      partnerPrompt:
        'I am very sorry for the inconvenience! Under our store policy, items can be exchanged or refunded within 30 days. Do you have the purchase receipt or the order barcode?',
      partnerAudioText:
        'I am very sorry for the inconvenience! Under our store policy, items can be exchanged or refunded within 30 days. Do you have the purchase receipt or the order barcode?',
      partnerQuestionHindi:
        'असुविधा के लिए मुझे बहुत खेद है! हमारी स्टोर नीति के तहत, 30 दिनों के भीतर वस्तुओं का आदान-प्रदान या धनवापसी की जा सकती है। क्या आपके पास खरीद रसीद या ऑर्डर बारकोड है?',
      expectedFunction: 'Present Receipt & Inquire About Exchange Option',
      contextGoal:
        'Provide your receipt and ask if you can exchange the defective speaker for a brand new one.',
      targetVocabulary: ['here is my receipt', 'exchange', 'brand new one', 'is that possible', 'original receipt'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes, here is my original receipt from yesterday! Would it be possible to exchange this for a brand new working speaker?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Here is the receipt. Can I exchange it for a new one please?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Yes, here is my receipt! I’d prefer an exchange for a new one.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Receipt Presentation & Exchange Request',
          patterns: [
            'here is my receipt',
            'here is the receipt',
            'have my receipt',
            'exchange',
            'new one',
            'replacement',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_48_2',
        type: 'multiple_choice',
        prompt: 'Which phrase is standard when handing a receipt to a cashier?',
        options: [
          { id: 'opt_1', text: 'Here is my receipt.', isCorrect: true },
          { id: 'opt_2', text: 'Take my paper buying.', isCorrect: false },
          { id: 'opt_3', text: 'Receipt am here now.', isCorrect: false },
        ],
        correctAnswer: 'Here is my receipt.',
        explanation: 'Idiomatic and polite.',
      },
    },
    {
      id: 'turn_a1_48_3',
      turnIndex: 3,
      partnerPrompt:
        'Thank you, the receipt is valid! I have checked our stock room, and we have the exact same model in black and in navy blue. Which color would you prefer?',
      partnerAudioText:
        'Thank you, the receipt is valid! I have checked our stock room, and we have the exact same model in black and in navy blue. Which color would you prefer?',
      partnerQuestionHindi:
        'धन्यवाद, रसीद मान्य है! मैंने हमारे स्टॉक रूम की जाँच की है, और हमारे पास काले और नेवी ब्लू रंग में बिल्कुल वही मॉडल है। आप कौन सा रंग पसंद करेंगे?',
      expectedFunction: 'Choose Color Preference & Inquire About Warranty',
      contextGoal:
        'State your color choice (e.g., black or navy blue) and ask if the new speaker comes with a 1-year warranty.',
      targetVocabulary: ['i would prefer', 'in black', 'in navy blue', 'warranty', 'guarantee', 'new speaker'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'I would prefer the black one, please! Does the new replacement speaker also include the standard one-year warranty?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I would prefer black, please. Does it have a one-year warranty?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Black please! Does it come with a warranty?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Color Selection & Warranty Question',
          patterns: [
            'prefer the black',
            'prefer navy blue',
            'black please',
            'navy blue',
            'warranty',
            'guarantee',
            'one year',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_48_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I would prefer the ___ model, please."',
        options: [
          { id: 'opt_1', text: 'black', isCorrect: true },
          { id: 'opt_2', text: 'blackly', isCorrect: false },
          { id: 'opt_3', text: 'more black', isCorrect: false },
        ],
        correctAnswer: 'black',
        explanation: 'Simple adjective "black" modifies "model".',
      },
    },
    {
      id: 'turn_a1_48_4',
      turnIndex: 4,
      partnerPrompt:
        'Yes, absolutely! The one-year warranty starts today on your replacement receipt. I’ve tested the unit right here, and the power switch works perfectly. Here is your new box and updated receipt. Is there anything else I can do for you today?',
      partnerAudioText:
        'Yes, absolutely! The one-year warranty starts today on your replacement receipt. I’ve tested the unit right here, and the power switch works perfectly. Here is your new box and updated receipt. Is there anything else I can do for you today?',
      partnerQuestionHindi:
        'हाँ, बिल्कुल! एक साल की वारंटी आपकी बदली हुई रसीद पर आज से शुरू होती है। मैंने यहाँ यूनिट का परीक्षण किया है, और पावर स्विच पूरी तरह से काम कर रहा है। यह आपका नया बॉक्स और अपडेट की गई रसीद है। क्या आज मैं आपके लिए कुछ और कर सकता हूँ?',
      expectedFunction: 'Express Gratitude & Conclude Interaction',
      contextGoal:
        'Thank Jason for his quick and helpful assistance, confirm you have everything, and say goodbye.',
      targetVocabulary: ['thank you so much', 'helpful', 'that is all', 'have a great day', 'goodbye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you so much for your excellent and fast help, Jason! That is all I need today. Have a wonderful day!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thank you very much for your help! That is everything. Have a great day!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Thanks a lot, Jason! That’s all. Have a good day!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Appreciation',
          patterns: [
            'thank you',
            'thanks',
            'all i need',
            'that is everything',
            'have a great day',
            'have a good day',
            'goodbye',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_48_4',
        type: 'multiple_choice',
        prompt: 'Which sentence warmly ends a customer service interaction?',
        options: [
          { id: 'opt_1', text: 'Thank you for your help, Jason! Have a great day.', isCorrect: true },
          { id: 'opt_2', text: 'I am go away now bye.', isCorrect: false },
          { id: 'opt_3', text: 'No talk to me again.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for your help, Jason! Have a great day.',
        explanation: 'Polite and professional conclusion.',
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
