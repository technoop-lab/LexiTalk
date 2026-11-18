import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_96: ConversationDefinition = {
  id: 'conv_a2_96',
  title: 'Shopping, Quantities & Transactions (how much/many, some/any)',
  cefr: 'A2',
  unitId: 'unit_a2_7',
  lessonLinks: ['lesson_a2_7_96'],
  estimatedMinutes: 5,
  scenario:
    'You are shopping for organic kitchen supplies and regional gifts at an artisanal market in Oxford run by shopkeeper Arthur Pendelton. Inquire about quantities and prices using "how much" and "how many", use quantifiers (some, any, a few, a bottle of, a jar of), ask about multi-buy discounts, and complete a contactless card payment with an itemized receipt.',
  communicativeGoals: [
    'Use countable and uncountable quantifiers accurately (how much vs. how many, some, any, a few, a little)',
    'Inquire about product origins, sizes, jar weights, and prices per unit',
    'Ask about promotional discounts and store refund/exchange policies',
    'Execute a smooth transaction using contactless card payment and request a paper receipt',
  ],
  canDoStatements: [
    'Can ask for and provide information about goods, quantities, and prices in shops (CEFR A2)',
    'Can use count and non-count quantifiers (some/any/much/many/a few/a jar of) accurately',
    'Can complete basic retail transactions, inquire about discounts, and request receipts',
  ],
  characters: [
    {
      id: 'char_arthur_pendelton',
      name: 'Arthur Pendelton',
      role: 'Artisanal Market Shopkeeper',
      avatar: '🏪',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'quantity',
        ipa: '/ˈkwɒntəti/',
        partOfSpeech: 'noun',
        meaning: 'The amount or number of a material or abstract thing',
        exampleSentence: 'What quantity of local honey would you like?',
        translations: { hi: 'मात्रा' },
      },
      {
        word: 'discount',
        ipa: '/ˈdɪskaʊnt/',
        partOfSpeech: 'noun',
        meaning: 'A deduction from the usual cost of something',
        exampleSentence: 'There is a ten percent discount if you buy three jars.',
        translations: { hi: 'छूट / बट्टा' },
      },
      {
        word: 'receipt',
        ipa: '/rɪˈsiːt/',
        partOfSpeech: 'noun',
        meaning: 'A written or printed acknowledgment of having received a specified amount of money',
        exampleSentence: 'Could I have a paper receipt for my records, please?',
        translations: { hi: 'रसीद / पावती' },
      },
      {
        word: 'contactless',
        ipa: '/ˈkɒntæktləs/',
        partOfSpeech: 'adjective',
        meaning: 'Relating to electronic payment made by tapping a card against a reader',
        exampleSentence: 'Do you accept contactless card payment here?',
        translations: { hi: 'कॉन्टैक्टलेस / बिना छुए भुगतान' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'How much is this jar of...?',
        functionCategory: 'Inquiring About Price / Uncountable',
        exampleSentence: 'How much is this jar of organic wildflower honey?',
      },
      {
        phrase: 'Do you have any... left in stock?',
        functionCategory: 'Asking for Availability with "any"',
        exampleSentence: 'Do you have any herbal tea boxes left in stock?',
      },
      {
        phrase: 'I would like a few...',
        functionCategory: 'Specifying Countable Quantity',
        exampleSentence: 'I would like a few artisanal chocolate bars, please.',
      },
      {
        phrase: 'Can I pay by contactless card?',
        functionCategory: 'Payment Method Transaction',
        exampleSentence: 'Can I pay by contactless card? Also, may I have a receipt?',
      },
    ],
    grammar: {
      title: 'Countable vs. Uncountable Quantifiers (how much / how many, some / any, a few / a little)',
      conceptExplanation:
        'Use "How many" with countable nouns in plural form (bottles, apples, jars, boxes). Use "How much" with uncountable nouns (honey, tea, milk, money, advice). Use "some" in positive statements and polite offers/requests ("I would like some honey"). Use "any" in negative sentences and general questions ("Do you have any loose-leaf tea?"). Use "a few" for countable items and "a little" for uncountable goods.',
      patternFormula: 'How many + [Countable Plural Nouns]? | How much + [Uncountable Noun]?',
      contrastExamples: [
        {
          incorrect: 'How many honey do you want?',
          correct: 'How much honey do you want? / How many jars of honey do you want?',
          explanation: '"Honey" is uncountable. Count the containers (jars) or use "how much".',
        },
        {
          incorrect: 'I don\'t have some tea left.',
          correct: 'I don\'t have any tea left.',
          explanation: 'Use "any" in negative statements.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Arthur Pendelton',
        text: 'Good afternoon! Welcome to Oxford Artisanal Pantry. How can I help you today?',
        translation: 'शुभ दोपहर! ऑक्सफ़ोर्ड कारीगर पेंट्री में आपका स्वागत है। आज मैं आपकी क्या मदद कर सकता हूँ?',
      },
      {
        speaker: 'You',
        text: 'Good afternoon! Do you have any local honey, and how much is a large jar?',
        translation: 'शुभ दोपहर! क्या आपके पास स्थानीय शहद है, और एक बड़े जार की कीमत कितनी है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_96_1',
      type: 'fill_blank',
      prompt: 'Complete the question: "How ___ loaves of sourdough bread are left?"',
      options: [
        { id: 'opt_1', text: 'many', isCorrect: true },
        { id: 'opt_2', text: 'much', isCorrect: false },
        { id: 'opt_3', text: 'any', isCorrect: false },
      ],
      correctAnswer: 'many',
      explanation: '"Loaves" is a countable plural noun; use "how many".',
    },
    {
      id: 'cp_a2_96_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "any" in a question?',
      options: [
        { id: 'opt_1', text: 'Do you have any organic olive oil in stock?', isCorrect: true },
        { id: 'opt_2', text: 'Do you have some organic olive oil in stock usually?', isCorrect: false },
        { id: 'opt_3', text: 'Are you have any olive oil?', isCorrect: false },
      ],
      correctAnswer: 'Do you have any organic olive oil in stock?',
      explanation: 'Use "any" for general questions regarding availability.',
    },
    {
      id: 'cp_a2_96_3',
      type: 'multiple_choice',
      prompt: 'Which phrase expresses a small quantity of an uncountable food item?',
      options: [
        { id: 'opt_1', text: 'a little cheese', isCorrect: true },
        { id: 'opt_2', text: 'a few cheese', isCorrect: false },
        { id: 'opt_3', text: 'many cheese', isCorrect: false },
      ],
      correctAnswer: 'a little cheese',
      explanation: '"A little" is used with uncountable nouns like cheese.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_96_1',
      scenarioContext: 'Ask for the price of three jars of honey.',
      prompt: 'Build: "How much are these three jars of honey?"',
      targetStructure: 'How much + be verb + demonstrative + count container + of + noun',
      wordBank: ['How', 'much', 'are', 'these', 'three', 'jars', 'of', 'honey', 'many', 'is'],
      acceptableSolutions: [
        'How much are these three jars of honey',
        'How much are these three jars of honey?',
      ],
      explanation: 'Plural verb "are" agrees with "three jars".',
    },
    {
      id: 'sc_a2_96_2',
      scenarioContext: 'Request to pay by contactless card.',
      prompt: 'Build: "Can I pay with contactless card please?"',
      targetStructure: 'Modal + subject + verb + preposition + adjective + noun + polite marker',
      wordBank: ['Can', 'I', 'pay', 'with', 'contactless', 'card', 'please', 'am', 'paying'],
      acceptableSolutions: [
        'Can I pay with contactless card please',
        'Can I pay with contactless card, please?',
        'Can I pay by contactless card please?',
      ],
      explanation: 'Natural retail transaction question.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_96_1',
      turnIndex: 1,
      partnerPrompt:
        'Good afternoon and welcome to our pantry! Everything here is locally harvested across Oxfordshire. Are you looking for anything in particular today—perhaps some farm honey, fresh sourdough, or specialty teas?',
      partnerAudioText:
        'Good afternoon and welcome to our pantry! Everything here is locally harvested across Oxfordshire. Are you looking for anything in particular today—perhaps some farm honey, fresh sourdough, or specialty teas?',
      partnerQuestionHindi:
        'शुभ दोपहर और हमारी पेंट्री में आपका स्वागत है! यहाँ सब कुछ ऑक्सफ़ोर्डशायर भर से स्थानीय रूप से काटा जाता है। क्या आप आज विशेष रूप से कुछ ढूंढ रहे हैं—शायद कुछ फार्म शहद, ताज़ा खट्टा आटा ब्रेड, या विशेष चाय?',
      expectedFunction: 'Inquire About Product Availability & Price using "How much" and "any"',
      contextGoal:
        'Ask if he has any raw wildflower honey in stock, and inquire how much a 500g jar costs.',
      targetVocabulary: ['do you have any raw wildflower honey', 'how much is a 500g jar', 'looking for local honey', 'what varieties do you have'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'Good afternoon! Yes, do you have any raw wildflower honey in stock? I would like to buy a jar as a gift. How much is the 500-gram size?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Hello! Do you have any local honey? How much is a 500g jar of wildflower honey?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Honey Inquiry (with any)',
          patterns: ['honey', 'wildflower', 'local', 'stock', 'have any', 'looking for'],
          required: true,
        },
        {
          name: 'Price & Size Inquiry (How much / 500g)',
          patterns: ['how much', 'jar', '500g', '500 gram', 'cost', 'price', 'size'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'how_many_uncountable_error',
          pattern: /\bhow many honey\b/i,
          errorType: 'grammar',
          message: 'Say "How much honey" or "How many jars of honey". "Honey" is uncountable.',
          correctionPattern: 'How much honey / How many jars',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_96_1',
        type: 'multiple_choice',
        prompt: 'Which question correctly asks for the price of honey?',
        options: [
          { id: 'opt_1', text: 'How much is this jar of wildflower honey?', isCorrect: true },
          { id: 'opt_2', text: 'How many is this jar of wildflower honey?', isCorrect: false },
          { id: 'opt_3', text: 'How much jars of honey is there?', isCorrect: false },
        ],
        correctAnswer: 'How much is this jar of wildflower honey?',
        explanation: '"How much is [item]" is the correct pricing question.',
      },
    },
    {
      id: 'turn_a2_96_2',
      turnIndex: 2,
      partnerPrompt:
        'The 500-gram jar of raw wildflower honey is £7.50, and it is harvested just five miles from here! We also have an offer today: if you purchase three jars of preserves or honey, you receive a 15% discount. Would you like a few jars, or just the one?',
      partnerAudioText:
        'The 500-gram jar of raw wildflower honey is £7.50, and it is harvested just five miles from here! We also have an offer today: if you purchase three jars of preserves or honey, you receive a 15% discount. Would you like a few jars, or just the one?',
      partnerQuestionHindi:
        'कच्चे वाइल्डफ्लावर शहद का 500 ग्राम का जार £7.50 का है, और इसे यहाँ से केवल पांच मील दूर काटा जाता है! आज हमारे पास एक ऑफर भी है: यदि आप प्रिजर्व या शहद के तीन जार खरीदते हैं, तो आपको 15% की छूट मिलती है। क्या आप कुछ जार लेना चाहेंगे, या सिर्फ एक?',
      expectedFunction: 'Order Quantities with Countable Terms (two jars, one box) & Ask About Tea',
      contextGoal:
        'Take advantage of the offer: choose two jars of wildflower honey, one jar of raspberry jam, and ask if he has any Earl Grey loose-leaf tea.',
      targetVocabulary: ['I will take two jars of honey', 'one jar of raspberry jam', 'take advantage of the 15% discount', 'do you have any loose-leaf Earl Grey tea'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'That 15% discount sounds wonderful! I will take two jars of the wildflower honey and one jar of raspberry jam. Also, do you have any loose-leaf Earl Grey tea available?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I will take three items for the discount: two jars of honey and one raspberry jam. Do you have any Earl Grey tea as well?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Quantity Selection (two jars / three items)',
          patterns: ['two jars', 'three jars', 'jam', 'honey', 'discount', 'take', 'buy'],
          required: true,
        },
        {
          name: 'Tea Inquiry (with any / Earl Grey)',
          patterns: ['tea', 'earl grey', 'loose-leaf', 'available', 'have any', 'box'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_96_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I would like ___ jars of honey, please."',
        options: [
          { id: 'opt_1', text: 'two', isCorrect: true },
          { id: 'opt_2', text: 'much', isCorrect: false },
          { id: 'opt_3', text: 'a little', isCorrect: false },
        ],
        correctAnswer: 'two',
        explanation: '"Jars" is countable, so use a numeral or "a few".',
      },
    },
    {
      id: 'turn_a2_96_3',
      turnIndex: 3,
      partnerPrompt:
        'Yes indeed! We have tins of organic Bergamot Earl Grey tea for £5.00 each. Adding that tin to your three jars brings your total to £24.00 after the 15% multi-buy discount is applied. How would you prefer to pay today?',
      partnerAudioText:
        'Yes indeed! We have tins of organic Bergamot Earl Grey tea for £5.00 each. Adding that tin to your three jars brings your total to £24.00 after the 15% multi-buy discount is applied. How would you prefer to pay today?',
      partnerQuestionHindi:
        'जी बिल्कुल! हमारे पास प्रत्येक £5.00 में ऑर्गेनिक बर्गामोट अर्ल ग्रे चाय के डिब्बे हैं। उस डिब्बे को आपके तीन जारों में जोड़ने पर 15% मल्टी-बाय छूट लागू होने के बाद आपका कुल योग £24.00 हो जाता है। आज आप कैसे भुगतान करना पसंद करेंगे?',
      expectedFunction: 'Specify Payment Method (Contactless Card) & Request Receipt',
      contextGoal:
        'State that you will pay by contactless credit card, tap your card on the terminal, and politely ask for an itemized receipt.',
      targetVocabulary: ['pay by contactless card', 'tap my card on the reader', 'could I please have a paper receipt', 'itemized receipt'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'That is great value, thank you! I will pay by contactless card. Let me tap my card here on the reader. Could I please have an itemized paper receipt as well?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I will pay with contactless card. Can I get a printed receipt for my records, please?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Contactless Card Payment',
          patterns: ['contactless', 'card', 'tap', 'pay by', 'pay with', 'credit card'],
          required: true,
        },
        {
          name: 'Receipt Request',
          patterns: ['receipt', 'paper receipt', 'printed', 'copy', 'records'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_96_3',
        type: 'multiple_choice',
        prompt: 'Which request for a receipt is most polite and natural?',
        options: [
          { id: 'opt_1', text: 'Could I please have a printed receipt for my purchase?', isCorrect: true },
          { id: 'opt_2', text: 'Give me paper bill now.', isCorrect: false },
          { id: 'opt_3', text: 'I am want receipt.', isCorrect: false },
        ],
        correctAnswer: 'Could I please have a printed receipt for my purchase?',
        explanation: 'Polite modal request "Could I please have...".',
      },
    },
    {
      id: 'turn_a2_96_4',
      turnIndex: 4,
      partnerPrompt:
        'The payment went through instantly, and here is your itemized receipt along with your carefully wrapped bag. If you ever need to exchange an unopened jar, simply bring it back with this receipt within 30 days. Have a wonderful afternoon exploring Oxford!',
      partnerAudioText:
        'The payment went through instantly, and here is your itemized receipt along with your carefully wrapped bag. If you ever need to exchange an unopened jar, simply bring it back with this receipt within 30 days. Have a wonderful afternoon exploring Oxford!',
      partnerQuestionHindi:
        'भुगतान तुरंत हो गया, और यह आपकी सावधानीपूर्वक पैक की गई थैली के साथ आपकी विस्तृत रसीद है। यदि आपको कभी भी न खुले जार को बदलने की आवश्यकता हो, तो बस 30 दिनों के भीतर इस रसीद के साथ इसे वापस लाएं। ऑक्सफ़ोर्ड घूमने के लिए एक शानदार दोपहर बिताएं!',
      expectedFunction: 'Acknowledge Exchange Policy, Express Gratitude & Farewell',
      contextGoal:
        'Thank Arthur for the pleasant service and careful packaging, note the 30-day exchange policy, and wish him a successful trading day.',
      targetVocabulary: ['thank you for the wonderful service', 'careful packaging', 'noted regarding the 30-day exchange policy', 'have a great day'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'Thank you very much Arthur for the excellent service and careful packaging! That 30-day exchange policy is very helpful to know. Have a wonderful rest of your day in Oxford!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Thank you for your help Arthur! I appreciate the receipt and great service. Have a wonderful afternoon!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Appreciation & Farewell',
          patterns: ['thank you', 'thanks', 'arthur', 'service', 'packaging', 'exchange', 'have a wonderful', 'goodbye', 'great day'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_96_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Thank you for the ___ service!"',
        options: [
          { id: 'opt_1', text: 'excellent', isCorrect: true },
          { id: 'opt_2', text: 'excellently', isCorrect: false },
          { id: 'opt_3', text: 'excelled', isCorrect: false },
        ],
        correctAnswer: 'excellent',
        explanation: 'Adjective "excellent" modifies the noun "service".',
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
