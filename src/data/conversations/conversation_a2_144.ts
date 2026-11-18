import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_144: ConversationDefinition = {
  id: 'conv_a2_144',
  title: 'Health Insurance, Claim Processes & Pharmacy Interactions',
  cefr: 'A2',
  unitId: 'unit_a2_10',
  lessonLinks: ['lesson_a2_10_144'],
  estimatedMinutes: 5,
  scenario:
    'You are at the dispensing counter at Boots Pharmacy in Sheffield. Speak with chief pharmacist Julian Hayes about picking up your prescription for clarithromycin and cough syrup. Present your health insurance card, clarify your co-payment and policy coverage, inquire if a generic equivalent is available, and request an itemized receipt for your insurer reimbursement claim.',
  communicativeGoals: [
    'Present a medical prescription and health insurance card at a pharmacy counter',
    'Understand and clarify insurance terms: co-pay, deductible, policy number, in-network',
    'Inquire about generic equivalents vs. brand-name medicines to save on out-of-pocket costs',
    'Request an itemized official receipt and reimbursement claim form',
  ],
  canDoStatements: [
    'Can interact at a pharmacy counter to collect prescription medications',
    'Can discuss health insurance coverage, co-payments, and generic alternatives',
    'Can ask for official itemized documentation to claim insurance reimbursement',
  ],
  characters: [
    {
      id: 'char_julian_hayes',
      name: 'Julian Hayes',
      role: 'Chief Pharmacist & Medical Claims Advisor',
      avatar: '💳',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'co-payment',
        ipa: '/ˈkəʊ peɪmənt/',
        partOfSpeech: 'noun',
        meaning: 'A fixed payment made by a patient at the time of receiving medical service/drugs',
        exampleSentence: 'My insurance policy requires a £10 co-payment per prescription.',
        translations: { hi: 'सह-भुगतान / को-पेमेंट' },
      },
      {
        word: 'deductible',
        ipa: '/dɪˈdʌktəbl/',
        partOfSpeech: 'noun',
        meaning: 'The amount of money you must pay before an insurance company starts paying',
        exampleSentence: 'I have already reached my annual insurance deductible.',
        translations: { hi: 'डिडक्टिबल / बीमा दावा पूर्व देय राशि' },
      },
      {
        word: 'generic',
        ipa: '/dʒəˈnerɪk/',
        partOfSpeech: 'adjective',
        meaning: 'A medication sold under its chemical name rather than an expensive brand name',
        exampleSentence: 'Is there a generic alternative for this brand-name antibiotic?',
        translations: { hi: 'जेनेरिक (बिना ब्रांड वाली दवा)' },
      },
      {
        word: 'reimbursement',
        ipa: '/ˌriːɪmˈbɜːsmənt/',
        partOfSpeech: 'noun',
        meaning: 'Repayment for expenses that an individual has already paid out-of-pocket',
        exampleSentence: 'I submitted an itemized receipt to my insurer for reimbursement.',
        translations: { hi: 'प्रतिपूर्ति / भरपाई' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I would like to collect my prescription and use my private health insurance.',
        functionCategory: 'Presenting Prescription & Insurance',
        exampleSentence: 'Here is my policy number and ID card.',
      },
      {
        phrase: 'Is this medication covered by my insurance policy?',
        functionCategory: 'Inquiring About Coverage',
        exampleSentence: 'Is there an extra co-pay for brand-name drugs?',
      },
      {
        phrase: 'Could I get the generic version instead if it is cheaper?',
        functionCategory: 'Requesting Generic Alternatives',
        exampleSentence: 'Does the generic form have the same active ingredients?',
      },
      {
        phrase: 'Could you please provide an itemized receipt for my insurance claim?',
        functionCategory: 'Requesting Documentation for Claims',
        exampleSentence: 'I need a stamped invoice for reimbursement.',
      },
    ],
    grammar: {
      title: 'Conditional Inquiries & Passive Phrases (is covered by / if it is cheaper)',
      conceptExplanation:
        '1. Passive Coverage: "Is this medication covered by insurance?" / "The costs are reimbursed by the insurer."\n2. First Conditional in Pharmacy Inquiries: "If I choose the generic brand, will my co-payment be lower?"\n3. Polite Requests: "Could you provide an itemized receipt?"',
      patternFormula: 'Is [Medication] covered by [Insurance]? / If I take the generic, how much does it cost?',
      contrastExamples: [
        {
          incorrect: 'Does insurance covers this pill?',
          correct: 'Does insurance cover this medication? / Is this medication covered by insurance?',
          explanation: 'Use base verb "cover" with auxiliary "does", or the passive "is covered by".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Julian Hayes',
        text: 'Hello! Welcome to Boots Pharmacy. Are you collecting a prescription today?',
        translation: 'नमस्ते! बूट्स फार्मेसी में आपका स्वागत है। क्या आप आज कोई नुस्खा लेने आए हैं?',
      },
      {
        speaker: 'You',
        text: 'Hello! Yes, my doctor sent an electronic prescription for clarithromycin. Here is my health insurance card. Could you check if this medication is covered by my policy?',
        translation: 'नमस्ते! हाँ, मेरे डॉक्टर ने क्लैरिथ्रोमाइसिन के लिए एक इलेक्ट्रॉनिक नुस्खा भेजा है। यह मेरा स्वास्थ्य बीमा कार्ड है। क्या आप जांच सकते हैं कि क्या यह दवा मेरी पॉलिसी द्वारा कवर की गई है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_144_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "Is this antibiotic ___ (covered by / covers by) my health insurance?"',
      options: [
        { id: 'opt_1', text: 'covered by', isCorrect: true },
        { id: 'opt_2', text: 'covers by', isCorrect: false },
        { id: 'opt_3', text: 'covering from', isCorrect: false },
      ],
      correctAnswer: 'covered by',
      explanation: 'Use the passive participle: "is covered by".',
    },
    {
      id: 'cp_a2_144_2',
      type: 'multiple_choice',
      prompt: 'What does a "generic medication" mean?',
      options: [
        { id: 'opt_1', text: 'A medicine with identical active ingredients sold under its chemical name at a lower price', isCorrect: true },
        { id: 'opt_2', text: 'An expired or unsafe drug', isCorrect: false },
        { id: 'opt_3', text: 'Medicine that requires no prescription at all', isCorrect: false },
      ],
      correctAnswer: 'A medicine with identical active ingredients sold under its chemical name at a lower price',
      explanation: 'Generic medicines have the same active ingredients as brand-name drugs but cost less.',
    },
    {
      id: 'cp_a2_144_3',
      type: 'multiple_choice',
      prompt: 'How do you ask for a receipt for insurance reimbursement?',
      options: [
        { id: 'opt_1', text: 'Could you give me an itemized receipt for my insurance claim?', isCorrect: true },
        { id: 'opt_2', text: 'Paper of money give to me quick.', isCorrect: false },
        { id: 'opt_3', text: 'You must pay my insurance now.', isCorrect: false },
      ],
      correctAnswer: 'Could you give me an itemized receipt for my insurance claim?',
      explanation: 'Polite and clear request for documentation.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_144_1',
      scenarioContext: 'Inquire if generic brand is available.',
      prompt: 'Build: "Could I get the generic version instead?"',
      targetStructure: 'Could I get + the generic version + instead',
      wordBank: ['Could', 'I', 'get', 'the', 'generic', 'version', 'instead', 'getting', 'can'],
      acceptableSolutions: [
        'Could I get the generic version instead',
        'Could I get the generic version instead?',
      ],
      explanation: 'Polite request for affordable generic alternative.',
    },
    {
      id: 'sc_a2_144_2',
      scenarioContext: 'Request an itemized receipt.',
      prompt: 'Build: "Please provide an itemized receipt for reimbursement."',
      targetStructure: 'Please provide + article + adjective + noun + preposition + noun',
      wordBank: ['Please', 'provide', 'an', 'itemized', 'receipt', 'for', 'reimbursement', 'reimbursing', 'give'],
      acceptableSolutions: [
        'Please provide an itemized receipt for reimbursement',
        'Please provide an itemized receipt for reimbursement.',
      ],
      explanation: 'Formal request for medical insurance documentation.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_144_1',
      turnIndex: 1,
      partnerPrompt:
        'Good afternoon! Welcome to the Boots Pharmacy dispensing counter. May I have your name and date of birth to look up your electronic prescription?',
      partnerAudioText:
        'Good afternoon! Welcome to the Boots Pharmacy dispensing counter. May I have your name and date of birth to look up your electronic prescription?',
      partnerQuestionHindi:
        'शुभ दोपहर! बूट्स फार्मेसी डिस्पेंसिंग काउंटर पर आपका स्वागत है। क्या मैं आपके इलेक्ट्रॉनिक नुस्खे को देखने के लिए आपका नाम और जन्म तिथि जान सकता हूँ?',
      expectedFunction: 'Provide Patient Info & Present Insurance Card (prescription from Dr. Evans / clarithromycin / health insurance)',
      contextGoal:
        'Provide your details, state that Dr. Evans sent an electronic prescription for clarithromycin and cough syrup, and present your health insurance card.',
      targetVocabulary: ['collecting a prescription from Dr. Evans', 'prescribed clarithromycin and syrup', 'here is my health insurance card', 'policy number'],
      suggestedResponses: [
        {
          label: 'Complete Identification & Insurance',
          text: 'Good afternoon. My name is Alex Taylor, born 14th June 1992. Dr. Evans from St. Jude’s Clinic sent over an electronic prescription for clarithromycin and cough syrup. Here is my private health insurance card.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Identification',
          text: 'Hello! I am collecting an electronic prescription from Dr. Evans for antibiotics. Here is my insurance card and photo ID.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Identification & Prescription (name / prescription / doctor / evans / clarithromycin / antibiotic / medicine)',
          patterns: ['name', 'prescription', 'doctor', 'evans', 'clarithromycin', 'antibiotic', 'medicine', 'alex', 'syrup'],
          required: true,
        },
        {
          name: 'Insurance Card (insurance / card / policy / private / bupa / health insurance)',
          patterns: ['insurance', 'card', 'policy', 'private', 'health insurance', 'cover'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_144_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Here is my health insurance ___ (card / ticket)."',
        options: [
          { id: 'opt_1', text: 'card', isCorrect: true },
          { id: 'opt_2', text: 'ticket', isCorrect: false },
          { id: 'opt_3', text: 'paper', isCorrect: false },
        ],
        correctAnswer: 'card',
        explanation: '"Insurance card" is standard terminology.',
      },
    },
    {
      id: 'turn_a2_144_2',
      turnIndex: 2,
      partnerPrompt:
        'I have found your file. The brand-name antibiotic is in stock, but your insurance policy has a £25 co-pay for brand names. However, we have an identical generic version with a £5 co-pay. Which would you prefer?',
      partnerAudioText:
        'I have found your file. The brand-name antibiotic is in stock, but your insurance policy has a £25 co-pay for brand names. However, we have an identical generic version with a £5 co-pay. Which would you prefer?',
      partnerQuestionHindi:
        'मुझे आपकी फ़ाइल मिल गई है। ब्रांड-नाम एंटीबायोटिक स्टॉक में है, लेकिन आपकी बीमा पॉलिसी में ब्रांड नामों के लिए £25 का सह-भुगतान (co-pay) है। हालाँकि, हमारे पास £5 के सह-भुगतान के साथ एक समान जेनेरिक संस्करण है। आप किसे प्राथमिकता देंगे?',
      expectedFunction: 'Choose Generic Alternative & Inquire About Equality (prefer the generic / £5 co-pay / same active ingredients?)',
      contextGoal:
        'Choose the generic version to save on co-pay costs and confirm that it has the exact same active ingredients and effectiveness.',
      targetVocabulary: ['I would prefer the generic alternative', 'save on the co-payment', 'Does it have the exact same active ingredients?', 'identical effectiveness'],
      suggestedResponses: [
        {
          label: 'Generic Preference with Question',
          text: 'I would definitely prefer the generic version, please. A £5 co-pay is much better. Just to be sure, does the generic medicine have the exact same active ingredients and dosage as the brand name?',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Choice',
          text: 'I will take the generic one for £5. It has the same ingredients, right?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Generic Choice (generic / 5 / cheaper / prefer / alternative / version)',
          patterns: ['generic', '5', 'cheaper', 'prefer', 'alternative', 'version', 'take'],
          required: true,
        },
        {
          name: 'Ingredients / Confirmation (ingredients / same / active / effective / dose / ?)',
          patterns: ['ingredients', 'same', 'active', 'effective', 'dose', 'safe', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_144_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly chooses a generic drug?',
        options: [
          { id: 'opt_1', text: 'I would prefer the generic version with the lower co-pay.', isCorrect: true },
          { id: 'opt_2', text: 'I am taking generic because is cheaping.', isCorrect: false },
          { id: 'opt_3', text: 'Give generic pill now.', isCorrect: false },
        ],
        correctAnswer: 'I would prefer the generic version with the lower co-pay.',
        explanation: 'Natural phrasing using "would prefer".',
      },
    },
    {
      id: 'turn_a2_144_3',
      turnIndex: 3,
      partnerPrompt:
        'Yes, it is chemically identical and manufactured to the exact same British pharmacopeia standards. Your total today is £5 for the antibiotic co-pay plus £4.50 for the cough syrup. How would you like to pay?',
      partnerAudioText:
        'Yes, it is chemically identical and manufactured to the exact same British pharmacopeia standards. Your total today is £5 for the antibiotic co-pay plus £4.50 for the cough syrup. How would you like to pay?',
      partnerQuestionHindi:
        'हाँ, यह रासायनिक रूप से समान है और बिल्कुल समान ब्रिटिश फार्माकोपिया मानकों के अनुसार निर्मित है। आज आपका कुल बिल एंटीबायोटिक को-पे के लिए £5 और कफ सिरप के लिए £4.50 है। आप कैसे भुगतान करना चाहेंगे?',
      expectedFunction: 'Offer Payment & Request Itemized Claim Receipt (pay by contactless card / need an itemized receipt for insurance reimbursement)',
      contextGoal:
        'State that you will pay by contactless debit card (total £9.50) and politely request an official itemized receipt to claim reimbursement from your insurance provider.',
      targetVocabulary: ['pay with contactless card', 'total of £9.50', 'Could you provide an itemized receipt?', 'claim reimbursement from my insurance'],
      suggestedResponses: [
        {
          label: 'Payment & Claim Request',
          text: 'I will pay by contactless card, please. Also, could you provide an itemized receipt with the pharmacy stamp so I can submit a claim for reimbursement to my insurer?',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Request',
          text: 'I will pay by card. Please give me an itemized receipt for my insurance claim.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Payment Method (card / contactless / pay / 9.50 / debit / credit)',
          patterns: ['card', 'contactless', 'pay', '9.50', 'debit', 'credit'],
          required: true,
        },
        {
          name: 'Itemized Receipt & Insurance (itemized receipt / receipt / claim / reimbursement / insurance / stamp / invoice)',
          patterns: ['itemized receipt', 'receipt', 'claim', 'reimbursement', 'insurance', 'stamp', 'invoice', 'proof'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_144_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I need an ___ (itemized / items) receipt for my claim."',
        options: [
          { id: 'opt_1', text: 'itemized', isCorrect: true },
          { id: 'opt_2', text: 'items', isCorrect: false },
          { id: 'opt_3', text: 'iteming', isCorrect: false },
        ],
        correctAnswer: 'itemized',
        explanation: '"Itemized receipt" lists each individual product and charge.',
      },
    },
    {
      id: 'turn_a2_144_4',
      turnIndex: 4,
      partnerPrompt:
        'Here is your card receipt and a stamped itemized invoice with our pharmacy license code. Your medicines and dosage instructions are bagged together. Feel better soon!',
      partnerAudioText:
        'Here is your card receipt and a stamped itemized invoice with our pharmacy license code. Your medicines and dosage instructions are bagged together. Feel better soon!',
      partnerQuestionHindi:
        'यह आपकी कार्ड रसीद और हमारे फार्मेसी लाइसेंस कोड के साथ एक मुहरबंद आइटमयुक्त चालान है। आपकी दवाएं और खुराक निर्देश एक साथ पैक किए गए हैं। जल्द ही ठीक हो जाएं!',
      expectedFunction: 'Express Gratitude & Conclude Counter Interaction (Thank you Julian / appreciate your help / have a nice day)',
      contextGoal:
        'Thank Julian for his clear advice and paperwork, take your medication bag, and wish him a good day.',
      targetVocabulary: ['Thank you very much Julian', 'appreciate the paperwork and guidance', 'have a wonderful day', 'goodbye'],
      suggestedResponses: [
        {
          label: 'Courteous Closing',
          text: 'Thank you very much for your help and for printing the itemized receipt, Julian. I really appreciate your assistance. Have a wonderful day!',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Closing',
          text: 'Thank you for your help, Julian. Have a great day!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Farewell (thank you / thanks / julian / appreciate / have a nice day / have a great day / goodbye / bye)',
          patterns: ['thank you', 'thanks', 'julian', 'appreciate', 'have a nice day', 'have a great day', 'have a good day', 'goodbye', 'bye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_144_4',
        type: 'multiple_choice',
        prompt: 'Which response is most polite when concluding at a pharmacy counter?',
        options: [
          { id: 'opt_1', text: 'Thank you very much for your help, Julian. Have a wonderful day!', isCorrect: true },
          { id: 'opt_2', text: 'I take pills now bye.', isCorrect: false },
          { id: 'opt_3', text: 'Give bag I go.', isCorrect: false },
        ],
        correctAnswer: 'Thank you very much for your help, Julian. Have a wonderful day!',
        explanation: 'Polite, standard customer-pharmacist farewell.',
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
