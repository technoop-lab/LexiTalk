import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_184: ConversationDefinition = {
  id: 'conv_a2_184',
  title: 'Ordering at Local Eateries, Food Markets & Dining Traditions',
  cefr: 'A2',
  unitId: 'unit_a2_13',
  lessonLinks: ['lesson_a2_13_184'],
  estimatedMinutes: 5,
  scenario:
    'You are exploring an outdoor evening food street market in Southeast Asia with a friend. You approach a popular noodle and dumpling stall run by vendor Mei to order dinner, ask about spicy levels, and specify dietary requirements.',
  communicativeGoals: [
    'Make polite orders and requests using "would like" and "could we have"',
    'Declare dietary preferences and allergies (vegetarian, gluten-free, dairy-free, no peanuts)',
    'Ask about ingredients, spice levels, and chef recommendations',
    'Ask for the bill and payment methods politely',
  ],
  canDoStatements: [
    'Can order food and drinks politely at food stalls and restaurants in English',
    'Can explain dietary requirements and allergies simply and clearly',
    'Can ask about ingredients and prices at a street food market',
  ],
  characters: [
    {
      id: 'char_mei_vendor',
      name: 'Mei',
      role: 'Street Food Stall Chef',
      avatar: '🍽️',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'vegetarian',
        ipa: '/ˌvedʒəˈteəriən/',
        partOfSpeech: 'adjective',
        meaning: 'Not eating or containing meat or fish',
        exampleSentence: 'Do you have any vegetarian noodle dishes?',
        translations: { hi: 'शाकाहारी' },
      },
      {
        word: 'allergy',
        ipa: '/ˈælədʒi/',
        partOfSpeech: 'noun',
        meaning: 'A damaging immune response to a particular food or substance',
        exampleSentence: 'I have a severe peanut allergy.',
        translations: { hi: 'एलर्जी' },
      },
      {
        word: 'spicy',
        ipa: '/ˈspaɪsi/',
        partOfSpeech: 'adjective',
        meaning: 'Flavored with or containing strong spices that produce a hot burning sensation',
        exampleSentence: 'Could you make this dish not too spicy, please?',
        translations: { hi: 'तीखा / मसालेदार' },
      },
      {
        word: 'recommendation',
        ipa: '/ˌrekəmenˈdeɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'A suggestion or proposal as to the best course of action or choice',
        exampleSentence: 'What is your specialty recommendation today?',
        translations: { hi: 'सुझाव / सिफ़ारिश' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'We would like two bowls of vegetable noodles, please.',
        functionCategory: 'Polite ordering with would like',
        exampleSentence: 'I would like a fresh mango juice, please.',
      },
      {
        phrase: 'Could we have that without any chili or peanuts?',
        functionCategory: 'Modifying dishes politely',
        exampleSentence: 'Could we have extra napkins and two glasses of water?',
      },
      {
        phrase: 'Does this broth contain any meat or shellfish?',
        functionCategory: 'Inquiring about ingredients',
        exampleSentence: 'Is this soup suitable for vegetarians?',
      },
      {
        phrase: 'Could we get the bill, please? Do you take card payments?',
        functionCategory: 'Requesting bill and payment',
        exampleSentence: 'Can we pay with cash or digital card?',
      },
    ],
    grammar: {
      title: 'Polite Modal Requests ("would like", "could we have") & Dietary Phrases',
      conceptExplanation:
        '1. Polite Requests:\n   - Use "I would like / We would like + [Noun / to Verb]"\n     Example: "I would like a bowl of soup, please."\n   - Use "Could I have / Could we have + [Noun]?"\n     Example: "Could we have the menu, please?"\n2. Dietary Declarations:\n   - "I am vegetarian / vegan."\n   - "I am allergic to peanuts / dairy / seafood."\n   - "Please make it without [ingredient]."',
      patternFormula: '[Would like / Could we have] + [Item / Quantity] + [without / with] + [Modifier] + please',
      contrastExamples: [
        {
          incorrect: 'Give me noodles and no spice.',
          correct: 'Could I have the noodles with mild spice, please?',
          explanation: 'Use modal "Could I have..." or "I would like..." for polite customer requests.',
        },
        {
          incorrect: 'I have allergy for peanuts.',
          correct: 'I have an allergy to peanuts / I am allergic to peanuts.',
          explanation: 'Say "allergic to [noun]" or "an allergy to [noun]".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Mei',
        text: 'Hi there! Welcome to Mei’s Noodle House. What can I get for you today?',
        translation: 'नमस्ते! मेई नूडल हाउस में आपका स्वागत है। आज आपके लिए क्या लाऊँ?',
      },
      {
        speaker: 'Learner',
        text: 'Hello! Could we have two vegetable noodle bowls, please? Is it very spicy?',
        translation: 'नमस्ते! क्या हमें दो वेजिटेबल नूडल बाउल मिल सकते हैं? क्या यह बहुत तीखा है?',
      },
      {
        speaker: 'Mei',
        text: 'We can make it mild for you! Any allergies I should know about?',
        translation: 'हम इसे आपके लिए कम तीखा बना सकते हैं! क्या कोई एलर्जी है जिसके बारे में मुझे जानना चाहिए?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_184_1',
      type: 'fill_blank',
      prompt: 'Complete the polite request: "______ we have two bottles of mineral water, please?"',
      options: [
        { id: 'opt_1', text: 'Could', isCorrect: true },
        { id: 'opt_2', text: 'Must', isCorrect: false },
        { id: 'opt_3', text: 'Should', isCorrect: false },
      ],
      correctAnswer: 'Could',
      explanation: 'Use "Could we have..." for courteous ordering.',
    },
    {
      id: 'cp_184_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly declares a peanut allergy?',
      options: [
        { id: 'opt_1', text: 'I am allergic to peanuts, so please make it without nuts.', isCorrect: true },
        { id: 'opt_2', text: 'I am allergic with peanuts, please make without.', isCorrect: false },
        { id: 'opt_3', text: 'I allergy peanuts so no nut please.', isCorrect: false },
      ],
      correctAnswer: 'I am allergic to peanuts, so please make it without nuts.',
      explanation: 'The adjective "allergic" takes the preposition "to".',
    },
    {
      id: 'cp_184_3',
      type: 'chunk_order',
      prompt: 'Order the words: [two vegetable dumplings / like / we / would / please]',
      correctAnswer: 'we would like two vegetable dumplings please',
      explanation: 'Subject + would like + object + polite marker.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_184_1',
      prompt: 'Construct a polite sentence ordering steamed dumplings without spicy chili oil.',
      scenarioContext: 'Ordering from Mei at the food stall.',
      targetStructure: 'We would like steamed dumplings without spicy chili oil, please.',
      wordBank: ['We', 'would like', 'steamed dumplings', 'without', 'spicy chili oil,', 'please'],
      acceptableSolutions: [
        'We would like steamed dumplings without spicy chili oil, please.',
        'I would like steamed dumplings without spicy chili oil, please.',
        'Could we have steamed dumplings without spicy chili oil, please?',
      ],
      explanation: 'Polite frame "would like / could we have" with modifier "without...".',
    },
    {
      id: 'sc_184_2',
      prompt: 'Construct a sentence asking for the bill and payment method.',
      scenarioContext: 'Finishing the meal.',
      targetStructure: 'Could we have the bill, please? Can we pay by card?',
      wordBank: ['Could we have', 'the bill,', 'please?', 'Can we pay', 'by card', 'or cash?'],
      acceptableSolutions: [
        'Could we have the bill, please? Can we pay by card or cash?',
        'Could we have the bill, please? Can we pay by card?',
      ],
      explanation: 'Use polite question forms to request the bill.',
    },
  ],
  turns: [
    {
      id: 'turn_184_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello and welcome! Take a seat by the lantern. Here is our market menu. What would you and your friend like to eat tonight?',
      partnerAudioText:
        'Hello and welcome! Take a seat by the lantern. Here is our market menu. What would you and your friend like to eat tonight?',
      partnerQuestionHindi:
        'नमस्ते और स्वागत है! लालटेन के पास बैठ जाइए। यह रहा हमारा बाज़ार मेनू। आज रात आप और आपके दोस्त क्या खाना पसंद करेंगे?',
      expectedFunction: 'Politely ordering dishes using "would like" or "could we have"',
      contextGoal: 'Greet Mei and order noodle or dumpling dishes politely',
      targetVocabulary: ['would like', 'could we have', 'noodles', 'dumplings', 'please'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello! We would like one bowl of noodles and steamed dumplings, please.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Good evening! Could we have the handmade noodles and fresh spring rolls, please?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Hi! Everything looks delicious. We would like two portions of your specialty noodles, please.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'polite_request',
          patterns: ['would like', 'could we have', 'could i have', 'can we get', 'please'],
          required: true,
        },
        {
          name: 'food_items',
          patterns: ['noodles', 'dumplings', 'rolls', 'soup', 'rice', 'dishes', 'portions', 'specialty'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_184_1_rudeness',
          pattern: /^(give me noodles|i want food)$/i,
          errorType: 'interaction',
          message: 'Always use polite phrases: "I would like..." or "Could I have...".',
          correctionPattern: 'I would like..., please.',
        },
      ],
      remediationPractice: {
        id: 'rem_184_1',
        type: 'fill_blank',
        prompt: 'Make it polite: "I ______ (would like) a bowl of soup, please."',
        options: [
          { id: 'r1', text: 'would like', isCorrect: true },
          { id: 'r2', text: 'wanting', isCorrect: false },
        ],
        correctAnswer: 'would like',
        explanation: '"Would like" is polite and natural.',
      },
    },
    {
      id: 'turn_184_2',
      turnIndex: 2,
      partnerPrompt:
        'Great choice! Our house noodles come with crushed peanuts, fresh coriander, and spicy chili broth. Do you have any dietary restrictions or preferences with spice?',
      partnerAudioText:
        'Great choice! Our house noodles come with crushed peanuts, fresh coriander, and spicy chili broth. Do you have any dietary restrictions or preferences with spice?',
      partnerQuestionHindi:
        'शानदार पसंद! हमारे घरेलू नूडल्स में पिसी हुई मूँगफली, ताजा धनिया और तीखा मिर्च का सूप आता है। क्या आपकी कोई आहार संबंधी पाबंदी या तीखेपन की पसंद है?',
      expectedFunction: 'Declaring dietary preferences or allergies and adjusting spice level',
      contextGoal: 'Explain dietary restriction (e.g., vegetarian, peanut allergy) and request mild spice',
      targetVocabulary: ['allergic', 'peanuts', 'vegetarian', 'mild', 'spicy'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'My friend is allergic to peanuts, and could you make the soup mild, not too spicy?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'We are vegetarian, so please make sure there is no meat broth, and please make it mild.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Please prepare both bowls without peanuts because of an allergy, and medium spice is perfect for us!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'dietary_statement',
          patterns: ['allergic', 'allergy', 'peanuts', 'nuts', 'vegetarian', 'vegan', 'meat'],
          required: true,
        },
        {
          name: 'spice_level',
          patterns: ['mild', 'spicy', 'not too spicy', 'medium', 'chili', 'hot'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_184_2_allergic',
          pattern: /allergic with/i,
          errorType: 'grammar',
          message: 'Say "allergic to peanuts", not "allergic with".',
          correctionPattern: 'allergic to peanuts',
        },
      ],
      remediationPractice: {
        id: 'rem_184_2',
        type: 'multiple_choice',
        prompt: 'Which preposition follows "allergic"?',
        options: [
          { id: 'r1', text: 'to', isCorrect: true },
          { id: 'r2', text: 'with', isCorrect: false },
          { id: 'r3', text: 'from', isCorrect: false },
        ],
        correctAnswer: 'to',
        explanation: 'We say "allergic to [substance]".',
      },
    },
    {
      id: 'turn_184_3',
      turnIndex: 3,
      partnerPrompt:
        'Understood! No peanuts at all, vegetable broth, and mild spice. Would you like any fresh herbal tea, iced lime juice, or coconut water to drink with your meal?',
      partnerAudioText:
        'Understood! No peanuts at all, vegetable broth, and mild spice. Would you like any fresh herbal tea, iced lime juice, or coconut water to drink with your meal?',
      partnerQuestionHindi:
        'समझ गई! बिल्कुल भी मूँगफली नहीं, सब्जी का सूप और हल्का तीखापन। क्या आप अपने भोजन के साथ कोई ताजा हर्बल चाय, आइस्ड लाइम जूस या नारियल पानी पीना पसंद करेंगे?',
      expectedFunction: 'Ordering drinks and confirming the complete order',
      contextGoal: 'Choose a drink (e.g., coconut water or iced lime juice) politely',
      targetVocabulary: ['coconut water', 'lime juice', 'tea', 'please', 'two'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'We would love two fresh coconut waters, please.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Could we have one iced lime juice and one herbal tea, please?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Two glasses of iced lime juice would be wonderful. Thank you!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'drink_choice',
          patterns: ['coconut', 'juice', 'tea', 'water', 'lime', 'drink'],
          required: true,
        },
        {
          name: 'polite_confirmation',
          patterns: ['please', 'thank you', 'would love', 'could we have', 'wonderful'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_184_3_please',
          pattern: /^(give coconut water|2 lime juice)$/i,
          errorType: 'interaction',
          message: 'Add "please" to your drink order.',
          correctionPattern: 'Could we have two coconut waters, please?',
        },
      ],
      remediationPractice: {
        id: 'rem_184_3',
        type: 'fill_blank',
        prompt: 'Complete: "Could we have two coconut waters, ______?"',
        options: [
          { id: 'r1', text: 'please', isCorrect: true },
          { id: 'r2', text: 'now', isCorrect: false },
        ],
        correctAnswer: 'please',
        explanation: 'Always include "please" when ordering.',
      },
    },
    {
      id: 'turn_184_4',
      turnIndex: 4,
      partnerPrompt:
        'Here are your two steaming noodle bowls, dumplings, and cold drinks! Everything is fresh from the wok. Let me know when you are ready for the check.',
      partnerAudioText:
        'Here are your two steaming noodle bowls, dumplings, and cold drinks! Everything is fresh from the wok. Let me know when you are ready for the check.',
      partnerQuestionHindi:
        'यह रहे आपके दो गर्मागर्म नूडल बाउल, पकौड़े और ठंडे पेय! सब कुछ कड़ाही से ताजा बना है। जब आप बिल के लिए तैयार हों तो मुझे बताइएगा।',
      expectedFunction: 'Complimenting the food, requesting the bill, and asking payment method',
      contextGoal: 'Praise the delicious food, ask for the bill politely, and check if cash or card is accepted',
      targetVocabulary: ['delicious', 'bill', 'check', 'pay', 'card', 'cash'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'This food was delicious! Could we have the bill, please? Do you accept cards?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Thank you Mei, the noodles were wonderful! May we have the check, please?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'The meal was amazing, thank you so much! Could we get the bill? Can we pay with cash?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'compliment',
          patterns: ['delicious', 'wonderful', 'amazing', 'great', 'good', 'thank you'],
          required: true,
        },
        {
          name: 'bill_and_payment',
          patterns: ['bill', 'check', 'pay', 'card', 'cash', 'how much'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_184_4_bill',
          pattern: /give bill/i,
          errorType: 'interaction',
          message: 'Say "Could we have the bill, please?" or "May we have the check, please?".',
          correctionPattern: 'Could we have the bill, please?',
        },
      ],
      remediationPractice: {
        id: 'rem_184_4',
        type: 'multiple_choice',
        prompt: 'Which is the standard polite phrase for asking to pay at an eatery?',
        options: [
          { id: 'r1', text: 'Could we have the bill, please?', isCorrect: true },
          { id: 'r2', text: 'Give me the cost now.', isCorrect: false },
        ],
        correctAnswer: 'Could we have the bill, please?',
        explanation: '"Could we have the bill, please?" is universally polite and natural.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 75,
  },
};
