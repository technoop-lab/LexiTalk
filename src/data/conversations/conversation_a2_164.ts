import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_164: ConversationDefinition = {
  id: 'conv_a2_164',
  title: 'Customer Service, Product Inquiries, Returns & Politeness Strategies',
  cefr: 'A2',
  unitId: 'unit_a2_11',
  lessonLinks: ['lesson_a2_11_164'],
  estimatedMinutes: 5,
  scenario:
    'You are at the customer support desk at Apex Electronics in Manchester speaking with senior representative Rachel Vance. You recently received an online order for a graphics tablet, but the screen is unresponsive and damaged. You will explain the defect politely, use indirect questions to ask about warranty policy ("Could you tell me if this is covered under the 1-year guarantee?", "Do you know how long a replacement takes?"), present your proof of purchase, and negotiate a replacement or store credit.',
  communicativeGoals: [
    'Explain a product defect and order issue politely without aggressive language',
    'Formulate indirect questions for polite inquiries ("Could you tell me if...?", "Do you know whether...?")',
    'Inquire about return policies, exchange procedures, and warranty terms',
    'Reach an agreeable solution (replacement dispatch, refund, or store credit) and confirm next steps',
  ],
  canDoStatements: [
    'Can describe a faulty product and explain a purchase issue politely in English',
    'Can use indirect questions ("Could you tell me...?", "I was wondering if...?") to inquire about customer service policies',
    'Can handle a return, exchange, or refund transaction smoothly at A2 level',
  ],
  characters: [
    {
      id: 'char_rachel_vance',
      name: 'Rachel Vance',
      role: 'Senior Customer Service Representative',
      avatar: '🎧',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'defective',
        ipa: '/dɪˈfektɪv/',
        partOfSpeech: 'adjective',
        meaning: 'Imperfect, faulty, or not functioning as intended',
        exampleSentence: 'The tablet is defective because the touch sensor does not respond.',
        translations: { hi: 'दोषपूर्ण / खराब' },
      },
      {
        word: 'warranty',
        ipa: '/ˈwɒrənti/',
        partOfSpeech: 'noun',
        meaning: 'A written guarantee promising to repair or replace an article within a specified period',
        exampleSentence: 'All electronics purchased at our store come with a two-year manufacturer warranty.',
        translations: { hi: 'वारंटी / गारंटी' },
      },
      {
        word: 'refund',
        ipa: '/ˈriːfʌnd/',
        partOfSpeech: 'noun',
        meaning: 'A repayment of a sum of money to a dissatisfied customer',
        exampleSentence: 'You are entitled to a full refund if the item is returned within thirty days.',
        translations: { hi: 'धनवापसी / रिफंड' },
      },
      {
        word: 'exchange',
        ipa: '/ɪksˈtʃeɪndʒ/',
        partOfSpeech: 'verb',
        meaning: 'To return a purchased product and receive a replacement or alternative item',
        exampleSentence: 'I was wondering if I could exchange this damaged tablet for a new one.',
        translations: { hi: 'बदलना / एक्सचेंज करना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Could you tell me if this device is covered under the store warranty?',
        functionCategory: 'Indirect Questions with "Could you tell me if"',
        exampleSentence: 'Could you tell me where customer returns are handled?',
      },
      {
        phrase: 'I was wondering if I could exchange this for a new unit or request a refund.',
        functionCategory: 'Polite Requests with "I was wondering if"',
        exampleSentence: 'I was wondering if you have this in blue.',
      },
      {
        phrase: 'I’m afraid the screen was already cracked when I opened the box.',
        functionCategory: 'Explaining Product Issues Politely with "I’m afraid"',
        exampleSentence: 'I’m afraid the power cable is missing.',
      },
      {
        phrase: 'Do you know how long it takes to process the replacement order?',
        functionCategory: 'Indirect Questions with "Do you know"',
        exampleSentence: 'Do you know when the manager will arrive?',
      },
    ],
    grammar: {
      title: 'Indirect Questions & Diplomatic Customer Politeness',
      conceptExplanation:
        '1. Indirect Questions use polite introductory phrases followed by normal statement word order (Subject + Verb) rather than question inversion:\n   - "Could you tell me if / whether [Subject + Verb]?" (e.g., "Could you tell me if the warranty is valid?")\n   - "Do you know how long [Subject + Verb]?" (e.g., "Do you know how long the refund takes?") (NOT: "Do you know how long does the refund take?").\n2. Diplomatic Framing: "I was wondering if I could...", "I’m afraid there is an issue with...".',
      patternFormula: 'Could you tell me + if/whether + Subject + Verb | Do you know + Wh-word + Subject + Verb | I was wondering if + I could + [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'Tell me is the warranty valid and how much time it takes! Give me money.',
          correct: 'Could you tell me if the warranty is valid? I was wondering if I could request an exchange or refund.',
          explanation: 'Use indirect question framing with normal word order and polite phrases.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Rachel Vance',
        text: 'Good afternoon! Welcome to Apex Customer Care. How may I assist you with your purchase today?',
        translation: 'शुभ दोपहर! एपेक्स कस्टमर केयर में आपका स्वागत है। आज मैं आपकी खरीदारी में आपकी किस प्रकार सहायता कर सकती हूँ?',
      },
      {
        speaker: 'You',
        text: 'Good afternoon. I’m afraid the graphics tablet I ordered online is defective. Could you tell me if I can exchange it for a working unit?',
        translation: 'शुभ दोपहर। मुझे डर है कि मैंने ऑनलाइन जो ग्राफिक्स टैबलेट ऑर्डर किया था वह दोषपूर्ण है। क्या आप मुझे बता सकते हैं कि क्या मैं इसे एक चालू यूनिट से बदल सकता हूँ?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_164_1',
      type: 'fill_blank',
      prompt: 'Complete the indirect question: "Could you tell me if the replacement ___ (is / is it) in stock?"',
      options: [
        { id: 'opt_1', text: 'is', isCorrect: true },
        { id: 'opt_2', text: 'is it', isCorrect: false },
        { id: 'opt_3', text: 'it is being', isCorrect: false },
      ],
      correctAnswer: 'is',
      explanation: 'In indirect questions, the subject comes before the verb: "if the replacement is in stock".',
    },
    {
      id: 'cp_a2_164_2',
      type: 'multiple_choice',
      prompt: 'Which sentence forms a polite indirect question correctly without inverted question order?',
      options: [
        { id: 'opt_1', text: 'Do you know how long the refund process takes?', isCorrect: true },
        { id: 'opt_2', text: 'Do you know how long does the refund process take?', isCorrect: false },
        { id: 'opt_3', text: 'Do you know how long takes refund process?', isCorrect: false },
      ],
      correctAnswer: 'Do you know how long the refund process takes?',
      explanation: 'Normal statement order ("the refund process takes") inside the indirect question.',
    },
    {
      id: 'cp_a2_164_3',
      type: 'multiple_choice',
      prompt: 'Which phrase introduces a customer defect politely?',
      options: [
        { id: 'opt_1', text: 'I’m afraid the screen has a hairline fracture and does not respond to touch.', isCorrect: true },
        { id: 'opt_2', text: 'Your company scammed me with broken junk.', isCorrect: false },
        { id: 'opt_3', text: 'Screen broken give cash now.', isCorrect: false },
      ],
      correctAnswer: 'I’m afraid the screen has a hairline fracture and does not respond to touch.',
      explanation: 'Diplomatic phrasing using "I\'m afraid".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_164_1',
      scenarioContext: 'Form an indirect question.',
      prompt: 'Build: "Could you tell me if you have a receipt?"',
      targetStructure: 'Could you tell me if + you have a receipt',
      wordBank: ['Could', 'you', 'tell', 'me', 'if', 'have', 'a', 'receipt', 'do', 'having'],
      acceptableSolutions: [
        'Could you tell me if you have a receipt',
        'Could you tell me if you have a receipt?',
      ],
      explanation: 'Indirect question pattern.',
    },
    {
      id: 'sc_a2_164_2',
      scenarioContext: 'Polite customer request.',
      prompt: 'Build: "I was wondering if I could exchange this tablet."',
      targetStructure: 'I was wondering if I could exchange + this tablet',
      wordBank: ['I', 'was', 'wondering', 'if', 'could', 'exchange', 'this', 'tablet', 'exchanged', 'can'],
      acceptableSolutions: [
        'I was wondering if I could exchange this tablet',
        'I was wondering if I could exchange this tablet.',
      ],
      explanation: '"I was wondering if I could + base verb".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_164_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello and welcome to Apex Electronics Support! My name is Rachel. How can I assist you with your order today?',
      partnerAudioText:
        'Hello and welcome to Apex Electronics Support! My name is Rachel. How can I assist you with your order today?',
      partnerQuestionHindi:
        'नमस्ते और एपेक्स इलेक्ट्रॉनिक्स सपोर्ट में आपका स्वागत है! मेरा नाम रेचल है। आज मैं आपके ऑर्डर में आपकी किस प्रकार सहायता कर सकती हूँ?',
      expectedFunction: 'Explain Defect & Ask Indirect Question (I’m afraid my newly delivered graphics tablet is defective / Could you tell me if I can exchange it?)',
      contextGoal:
        'Politely state that the graphics tablet you ordered online arrived with a cracked/unresponsive screen, and use an indirect question with "Could you tell me if I can exchange it under warranty?"',
      targetVocabulary: ['I’m afraid the graphics tablet is defective', 'the screen is unresponsive to touch', 'Could you tell me if this is covered by warranty?', 'I was wondering if I could exchange it', 'order confirmation receipt'],
      suggestedResponses: [
        {
          label: 'Polite Defect Report & Indirect Question',
          text: 'Good afternoon, Rachel. I’m afraid the graphics tablet I received yesterday is defective; the screen is cracked and unresponsive. Could you tell me if I can exchange it for a replacement unit under warranty?',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Defect Inquiry',
          text: 'Hi Rachel. I received a faulty tablet with a damaged screen. I was wondering if I could get an exchange or refund under the store policy.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Polite Intro & Defect (afraid / tablet / defective / cracked / damaged / screen / unresponsive / faulty / broken)',
          patterns: ['afraid', 'tablet', 'defective', 'cracked', 'damaged', 'screen', 'unresponsive', 'faulty', 'broken', 'issue'],
          required: true,
        },
        {
          name: 'Indirect Question / Request (could you tell me if / was wondering if / can i exchange / warranty / replace / refund)',
          patterns: ['could you tell me if', 'was wondering if', 'can i exchange', 'exchange', 'warranty', 'replace', 'refund', 'replacement'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_direct_inversion_indirect',
          pattern: 'could you tell me can i exchange|could you tell me is it covered',
          errorType: 'grammar',
          message: 'Use statement word order in indirect questions: "Could you tell me if I can exchange...", "Could you tell me if it is covered...".',
          correctionPattern: 'Could you tell me if I can exchange this tablet',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_164_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Could you tell me if I ___ (can exchange / can I exchange) this device?"',
        options: [
          { id: 'opt_1', text: 'can exchange', isCorrect: true },
          { id: 'opt_2', text: 'can I exchange', isCorrect: false },
          { id: 'opt_3', text: 'exchanging', isCorrect: false },
        ],
        correctAnswer: 'can exchange',
        explanation: 'Indirect questions use subject + verb order ("I can exchange").',
      },
    },
    {
      id: 'turn_a2_164_2',
      turnIndex: 2,
      partnerPrompt:
        'I’m very sorry to hear that your tablet arrived damaged! We certainly cover transit damage and manufacturing defects under our two-year warranty. Do you have your order number and digital receipt with you?',
      partnerAudioText:
        'I’m very sorry to hear that your tablet arrived damaged! We certainly cover transit damage and manufacturing defects under our two-year warranty. Do you have your order number and digital receipt with you?',
      partnerQuestionHindi:
        'मुझे यह सुनकर बहुत खेद है कि आपका टैबलेट क्षतिग्रस्त अवस्था में पहुंचा! हम निश्चित रूप से हमारी दो साल की वारंटी के तहत पारगमन क्षति और विनिर्माण दोषों को कवर करते हैं। क्या आपके पास आपका ऑर्डर नंबर और डिजिटल रसीद है?',
      expectedFunction: 'Provide Proof of Purchase & Inquire on Processing Time (Yes, my order number is APX-9821 / Do you know how long the replacement delivery takes?)',
      contextGoal:
        'Provide your order number (e.g., APX-9821) and digital receipt, then ask an indirect question with "Do you know how long the replacement will take to dispatch?"',
      targetVocabulary: ['Here is my order number APX-9821', 'digital receipt on my phone', 'Do you know how long the replacement takes?', 'dispatch a brand new unit'],
      suggestedResponses: [
        {
          label: 'Provide Receipt & Indirect Question',
          text: 'Yes, here is my digital receipt on my phone; the order number is APX-9821. Do you know how long the replacement process usually takes?',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Receipt Handover & Question',
          text: 'Here is order number APX-9821 and the email receipt. Could you tell me when the new unit will be dispatched?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Order Number / Receipt (receipt / order number / apx / 9821 / email / phone / here is / proof)',
          patterns: ['receipt', 'order number', 'apx', '9821', 'email', 'phone', 'here is', 'proof', 'order'],
          required: true,
        },
        {
          name: 'Indirect Processing Question (do you know / could you tell me / how long / takes / dispatch / delivery / when / ?)',
          patterns: ['do you know', 'could you tell me', 'how long', 'takes', 'dispatch', 'delivery', 'when', 'replacement', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_164_2',
        type: 'multiple_choice',
        prompt: 'Which indirect question correctly asks about delivery duration?',
        options: [
          { id: 'opt_1', text: 'Do you know how long the delivery takes?', isCorrect: true },
          { id: 'opt_2', text: 'Do you know how long does delivery take?', isCorrect: false },
          { id: 'opt_3', text: 'Do you know how long taking delivery?', isCorrect: false },
        ],
        correctAnswer: 'Do you know how long the delivery takes?',
        explanation: 'Standard word order in indirect questions.',
      },
    },
    {
      id: 'turn_a2_164_3',
      turnIndex: 3,
      partnerPrompt:
        'I’ve verified order APX-9821 in our system. We have a replacement unit in our stockroom right now, or I can process an immediate full refund to your original payment card. Which option would you prefer?',
      partnerAudioText:
        'I’ve verified order APX-9821 in our system. We have a replacement unit in our stockroom right now, or I can process an immediate full refund to your original payment card. Which option would you prefer?',
      partnerQuestionHindi:
        'मैंने अपने सिस्टम में ऑर्डर APX-9821 को सत्यापित कर दिया है। हमारे पास अभी हमारे स्टॉक रूम में एक प्रतिस्थापन इकाई है, या मैं आपके मूल भुगतान कार्ड में तत्काल पूर्ण धनवापसी की प्रक्रिया कर सकती हूँ। आप कौन सा विकल्प पसंद करेंगे?',
      expectedFunction: 'Select Replacement Option & Inquire on Testing (I would prefer the replacement unit / Could you tell me if we can test it before I leave?)',
      contextGoal:
        'Choose the brand-new replacement unit and ask Rachel if you can unbox and test it at the counter before leaving the store.',
      targetVocabulary: ['I would prefer the brand-new replacement unit', 'Could you tell me if we can test the touch screen here?', 'unbox it at the counter', 'ensure it functions perfectly'],
      suggestedResponses: [
        {
          label: 'Choose Replacement & Polite Testing Request',
          text: 'I would prefer the new replacement unit, please. Could you tell me if we can unbox and test the screen together at the counter before I take it home?',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Choice & Question',
          text: 'I will take the replacement tablet. Can we please test it here to verify that the touch pen works?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Option Selection (replacement / prefer / new unit / exchange / tablet / take)',
          patterns: ['replacement', 'prefer', 'new unit', 'exchange', 'tablet', 'take', 'new one'],
          required: true,
        },
        {
          name: 'Testing / Verification Request (test / check / unbox / screen / counter / work / pen / could you tell me if / ?)',
          patterns: ['test', 'check', 'unbox', 'screen', 'counter', 'work', 'pen', 'could you tell me if', 'can we', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_164_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Could you tell me if we ___ (can test / can we test) the tablet now?"',
        options: [
          { id: 'opt_1', text: 'can test', isCorrect: true },
          { id: 'opt_2', text: 'can we test', isCorrect: false },
          { id: 'opt_3', text: 'testing', isCorrect: false },
        ],
        correctAnswer: 'can test',
        explanation: 'Subject ("we") precedes modal ("can test").',
      },
    },
    {
      id: 'turn_a2_164_4',
      turnIndex: 4,
      partnerPrompt:
        'Of course! I’ve unboxed the replacement, plugged it in, and confirmed the pressure sensors and screen are flawless. Here is your updated receipt with the remaining 23 months of warranty. Could you summarize our resolution today?',
      partnerAudioText:
        'Of course! I’ve unboxed the replacement, plugged it in, and confirmed the pressure sensors and screen are flawless. Here is your updated receipt with the remaining 23 months of warranty. Could you summarize our resolution today?',
      partnerQuestionHindi:
        'बिल्कुल! मैंने प्रतिस्थापन को अनबॉक्स किया है, इसे प्लग इन किया है, और पुष्टि की है कि दबाव सेंसर और स्क्रीन त्रुटिहीन हैं। यहाँ शेष 23 महीने की वारंटी के साथ आपकी अद्यतन रसीद है। क्या आप आज के हमारे समाधान का संक्षेप प्रस्तुत कर सकते हैं?',
      expectedFunction: 'Summarize Customer Resolution & Express Gratitude (To summarize, we exchanged the defective tablet for a tested new unit with full 23-month warranty coverage)',
      contextGoal:
        'Summarize the resolution: defective tablet exchanged for a tested new unit, updated warranty receipt received, and thank Rachel for the excellent service.',
      targetVocabulary: ['To summarize our resolution today', 'exchanged the defective unit for a tested new tablet', 'updated receipt with 23-month warranty', 'thank you for your fast and courteous support, Rachel'],
      suggestedResponses: [
        {
          label: 'Comprehensive Customer Service Summary',
          text: 'To summarize: you exchanged my defective tablet for a brand-new tested unit and provided an updated receipt with 23 months of warranty. Thank you so much for your fast, professional, and courteous help, Rachel!',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Customer Summary',
          text: 'In summary, I received a tested replacement tablet and an updated warranty receipt. Thank you for resolving this so smoothly, Rachel!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Summary Signpost (to summarize / in summary / summary / resolved / resolution / so)',
          patterns: ['to summarize', 'in summary', 'summary', 'resolved', 'resolution', 'so'],
          required: true,
        },
        {
          name: 'Resolution Details (exchanged / replacement / tablet / warranty / receipt / tested / thank you / rachel)',
          patterns: ['exchanged', 'replacement', 'tablet', 'warranty', 'receipt', 'tested', 'thank you', 'rachel', 'thanks'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_164_4',
        type: 'multiple_choice',
        prompt: 'Which closing statement demonstrates excellent customer politeness and clear summary?',
        options: [
          { id: 'opt_1', text: 'To summarize, we replaced the damaged tablet with a tested new unit under warranty. Thank you for your wonderful assistance, Rachel!', isCorrect: true },
          { id: 'opt_2', text: 'Whatever I am taking the box bye.', isCorrect: false },
          { id: 'opt_3', text: 'Your store was okay.', isCorrect: false },
        ],
        correctAnswer: 'To summarize, we replaced the damaged tablet with a tested new unit under warranty. Thank you for your wonderful assistance, Rachel!',
        explanation: 'Professional, appreciative, and clear summary of customer transaction.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 65,
  },
};
