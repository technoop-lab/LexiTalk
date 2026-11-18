import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_198: ConversationDefinition = {
  id: 'conv_a2_198',
  title: 'Postal Services, Packages, Customs & Declarations',
  cefr: 'A2',
  unitId: 'unit_a2_14',
  lessonLinks: ['lesson_a2_14_198'],
  estimatedMinutes: 5,
  scenario:
    'You are at the central post office in Edinburgh to send an international parcel containing gifts, woollen sweaters, and tea to your family in India. Postal Clerk Marcus guides you through weighing the box, choosing standard vs express tracked postage, declaring item values on customs form CN22, and adding a "FRAGILE" label.',
  communicativeGoals: [
    'Send international parcels and letters at the post office counter',
    'Compare delivery speeds, tracking services, and postage costs (standard airmail vs tracked express)',
    'Complete customs declaration forms accurately (item description, quantity, weight, and monetary value)',
    'Request special handling labels such as "FRAGILE" or "THIS WAY UP"',
  ],
  canDoStatements: [
    'Can post a parcel internationally and understand postage options',
    'Can complete an international customs declaration form (CN22) in English',
    'Can ask about delivery times, tracking numbers, and insurance coverage',
  ],
  characters: [
    {
      id: 'char_marcus_postal_clerk',
      name: 'Marcus',
      role: 'Post Office Customer Service Specialist',
      avatar: '📦',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'parcel',
        ipa: '/ˈpɑːsl/',
        partOfSpeech: 'noun',
        meaning: 'An object or collection of objects wrapped in paper or packed in a box to be sent by post',
        exampleSentence: 'I would like to send this parcel to New Delhi by tracked airmail.',
        translations: { hi: 'पार्सल / डाक का बंडल' },
      },
      {
        word: 'customs',
        ipa: '/ˈkʌstəmz/',
        partOfSpeech: 'noun',
        meaning: 'The official department that administers and collects duties levied by a government on imported goods',
        exampleSentence: 'You need to declare the exact contents and value on the customs form.',
        translations: { hi: 'सीमा शुल्क / कस्टम' },
      },
      {
        word: 'tracking',
        ipa: '/ˈtrækɪŋ/',
        partOfSpeech: 'noun',
        meaning: 'The monitoring of the location and status of a package during transit',
        exampleSentence: 'The tracking number allows you to follow the shipment online.',
        translations: { hi: 'ट्रैकिंग (निगरानी)' },
      },
      {
        word: 'fragile',
        ipa: '/ˈfrædʒaɪl/',
        partOfSpeech: 'adjective',
        meaning: 'Easily broken or damaged',
        exampleSentence: 'Please stick a "FRAGILE" label on the box because there is pottery inside.',
        translations: { hi: 'नाजुक / टूटने योग्य' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I would like to send this parcel to India by tracked delivery.',
        functionCategory: 'Stating postal request',
        exampleSentence: 'I want to post this package to Mumbai.',
      },
      {
        phrase: 'How much is standard delivery compared to express tracked delivery?',
        functionCategory: 'Comparing postage options',
        exampleSentence: 'How long does express shipping take?',
      },
      {
        phrase: 'Do I need to fill in a customs declaration form for these goods?',
        functionCategory: 'Inquiring about customs',
        exampleSentence: 'The contents are gifts with a value of thirty pounds.',
      },
      {
        phrase: 'Could you please stamp this with a "FRAGILE" sticker?',
        functionCategory: 'Special handling request',
        exampleSentence: 'Please handle with care.',
      },
    ],
    grammar: {
      title: 'Postal Inquiries & Customs Valuation Declarations',
      conceptExplanation:
        '1. Stating Shipping Goals:\n   - "I would like to send / post [Item] to [Destination]"\n   - "How much does it cost to send [Item] by [Service]?"\n2. Comparing Delivery Times:\n   - Standard Airmail: "takes 7–10 working days"\n   - Express Tracked: "takes 3–5 working days with signature"\n3. Customs Form CN22 Declarations:\n   - Category: Gift / Commercial / Documents\n   - Description: e.g. "2 Woollen scarves, 1 Box of Scottish tea"\n   - Value: e.g. "£45.00"',
      patternFormula: 'I would like to send this [parcel/letter] to [Country] by [Service] | The parcel contains [Items] worth [Value]',
      contrastExamples: [
        {
          incorrect: 'I want post this box India fast cheap.',
          correct: 'I would like to send this parcel to India by tracked airmail, please.',
          explanation: 'Use polite modal "would like to send" with specific postal service name.',
        },
        {
          incorrect: 'On customs paper I write nothing because is present.',
          correct: 'On the customs declaration, I ticked "Gift" and declared a value of thirty pounds.',
          explanation: 'All international mail outside the customs territory requires item declaration even for gifts.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Marcus',
        text: 'Good afternoon! Please place your package on the weighing scales. Where is this heading today?',
        translation: 'शुभ दोपहर! कृपया अपना पैकेज वजन करने वाले तराजू पर रखें। आज यह कहाँ भेजा जा रहा है?',
      },
      {
        speaker: 'Learner',
        text: 'Good afternoon! I would like to send this parcel to India. It weighs about one point five kilograms.',
        translation: 'शुभ दोपहर! मैं यह पार्सल भारत भेजना चाहता हूँ। इसका वजन लगभग 1.5 किलोग्राम है।',
      },
      {
        speaker: 'Marcus',
        text: 'Perfect. Would you prefer standard international airmail or tracked express delivery with insurance?',
        translation: 'उत्कृष्ट। क्या आप मानक अंतरराष्ट्रीय एयरमेल पसंद करेंगे या बीमा के साथ ट्रैक्ड एक्सप्रेस डिलीवरी?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_198_1',
      type: 'fill_blank',
      prompt: 'Complete with the postal term: "If you want an online reference to follow your package, choose ______ (tracking / stamp)."',
      options: [
        { id: 'opt_1', text: 'tracking', isCorrect: true },
        { id: 'opt_2', text: 'envelope', isCorrect: false },
        { id: 'opt_3', text: 'counter', isCorrect: false },
      ],
      correctAnswer: 'tracking',
      explanation: 'Tracking provides a code to monitor shipment progress online.',
    },
    {
      id: 'cp_198_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly declares parcel contents for international customs?',
      options: [
        { id: 'opt_1', text: 'The parcel contains two woollen sweaters and tea, with a total value of £40.', isCorrect: true },
        { id: 'opt_2', text: 'The parcel is containing things money forty.', isCorrect: false },
        { id: 'opt_3', text: 'I no declare because gift.', isCorrect: false },
      ],
      correctAnswer: 'The parcel contains two woollen sweaters and tea, with a total value of £40.',
      explanation: 'Clear description of items and stated monetary value.',
    },
    {
      id: 'cp_198_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [to send this parcel / by express tracked mail / I would like / to India]',
      correctAnswer: 'I would like to send this parcel to India by express tracked mail',
      explanation: 'Subject + would like to send + object + destination + service.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_198_1',
      prompt: 'Construct a sentence asking how much express delivery to India costs and how long it takes.',
      scenarioContext: 'Inquiring about shipping rates.',
      targetStructure: 'How much does express tracked shipping cost, and how long will it take to arrive?',
      wordBank: ['How much does', 'express tracked shipping', 'cost,', 'and how long', 'will it take', 'to arrive in India?'],
      acceptableSolutions: [
        'How much does express tracked shipping cost, and how long will it take to arrive in India?',
        'How much does express shipping cost, and how long does it take?',
      ],
      explanation: 'Ask cost and transit duration.',
    },
    {
      id: 'sc_198_2',
      prompt: 'Construct a sentence asking the clerk to add a "FRAGILE" label on the box.',
      scenarioContext: 'Protecting delicate items.',
      targetStructure: 'Could you please attach a "FRAGILE" sticker because there are glass jars inside?',
      wordBank: ['Could you please', 'attach a "FRAGILE" sticker', 'because there are', 'ceramic mugs inside', 'the parcel?'],
      acceptableSolutions: [
        'Could you please attach a "FRAGILE" sticker because there are ceramic mugs inside the parcel?',
        'Could you please put a FRAGILE label on the box?',
      ],
      explanation: 'Polite request with "Could you please attach...".',
    },
  ],
  turns: [
    {
      id: 'turn_198_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello! Welcome to the Royal Mail counter. Please place your box on the scale. Where would you like to post this parcel today, and what service are you looking for?',
      partnerAudioText:
        'Hello! Welcome to the Royal Mail counter. Please place your box on the scale. Where would you like to post this parcel today, and what service are you looking for?',
      partnerQuestionHindi:
        'नमस्ते! रॉयल मेल काउंटर पर आपका स्वागत है। कृपया अपना डिब्बा तराजू पर रखें। आज आप इस पार्सल को कहाँ भेजना चाहते हैं, और आप किस सेवा की तलाश में हैं?',
      expectedFunction: 'Stating parcel destination and requesting tracked delivery',
      contextGoal: 'State that you want to send the parcel to India (or Delhi) by tracked delivery',
      targetVocabulary: ['send', 'parcel', 'India', 'tracked', 'post', 'delivery'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Good afternoon! I would like to send this parcel to India by international tracked delivery, please.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello! I want to post this box to my family in India. Is tracked express available?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good afternoon Marcus. I’d like to send this 1.5kg parcel to New Delhi using tracked airmail with a signature.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'postal_intent',
          patterns: ['send', 'post', 'parcel', 'box', 'package', 'mail'],
          required: true,
        },
        {
          name: 'destination_service',
          patterns: ['india', 'delhi', 'tracked', 'express', 'airmail', 'international'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_198_1_send_to',
          pattern: /send this parcel in india/i,
          errorType: 'grammar',
          message: 'Use the preposition "to" for direction: "send this parcel to India".',
          correctionPattern: 'send this parcel to India',
        },
      ],
      remediationPractice: {
        id: 'rem_198_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I want to send this parcel ______ (to) India."',
        options: [
          { id: 'r1', text: 'to', isCorrect: true },
          { id: 'r2', text: 'at', isCorrect: false },
        ],
        correctAnswer: 'to',
        explanation: 'We send items "to" a destination.',
      },
    },
    {
      id: 'turn_198_2',
      turnIndex: 2,
      partnerPrompt:
        'The box weighs exactly 1.4 kilograms. Standard International takes 7 to 10 working days and costs £18.50. International Tracked takes 4 to 6 working days with online tracking and costs £24.00. Which option would you prefer?',
      partnerAudioText:
        'The box weighs exactly 1.4 kilograms. Standard International takes 7 to 10 working days and costs £18.50. International Tracked takes 4 to 6 working days with online tracking and costs £24.00. Which option would you prefer?',
      partnerQuestionHindi:
        'डिब्बे का वजन ठीक 1.4 किलोग्राम है। स्टैंडर्ड इंटरनेशनल में 7 से 10 कार्य दिवस लगते हैं और इसकी कीमत £18.50 है। इंटरनेशनल ट्रैक्ड में ऑनलाइन ट्रैकिंग के साथ 4 से 6 कार्य दिवस लगते हैं और इसकी कीमत £24.00 है। आप कौन सा विकल्प पसंद करेंगे?',
      expectedFunction: 'Choosing a postal option and stating reason (speed/tracking)',
      contextGoal: 'Choose International Tracked (£24) for security/tracking or state preference',
      targetVocabulary: ['prefer', 'tracked', 'International Tracked', 'twenty-four pounds', 'tracking number', 'faster'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I prefer the International Tracked option for twenty-four pounds because I want a tracking number.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I will take the tracked service please. It is faster and safer for my family’s gifts.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I’d rather use International Tracked for £24.00. Having an online tracking number gives great peace of mind.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'selected_service',
          patterns: ['tracked', 'international tracked', '24', 'twenty-four', 'faster', 'prefer'],
          required: true,
        },
        {
          name: 'reason_tracking',
          patterns: ['tracking number', 'tracking', 'safe', 'faster', 'peace of mind', 'gifts'],
          required: false,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_198_2_prefer_than',
          pattern: /i prefer tracked than standard/i,
          errorType: 'grammar',
          message: 'Say "I prefer tracked to standard" or "I would rather choose tracked".',
          correctionPattern: 'I prefer tracked to standard',
        },
      ],
      remediationPractice: {
        id: 'rem_198_2',
        type: 'multiple_choice',
        prompt: 'Which response is correct when selecting a service?',
        options: [
          { id: 'r1', text: 'I prefer International Tracked for £24, please.', isCorrect: true },
          { id: 'r2', text: 'I prefer than standard £24.', isCorrect: false },
        ],
        correctAnswer: 'I prefer International Tracked for £24, please.',
        explanation: 'Clear and natural choice.',
      },
    },
    {
      id: 'turn_198_3',
      turnIndex: 3,
      partnerPrompt:
        'International Tracked it is! Because India is outside the UK customs area, you must complete this green CN22 customs sticker. What items are inside the box, what is the total estimated value in pounds, and are they gifts?',
      partnerAudioText:
        'International Tracked it is! Because India is outside the UK customs area, you must complete this green CN22 customs sticker. What items are inside the box, what is the total estimated value in pounds, and are they gifts?',
      partnerQuestionHindi:
        'इंटरनेशनल ट्रैक्ड तय हुआ! क्योंकि भारत यूके कस्टम क्षेत्र से बाहर है, आपको यह हरा CN22 कस्टम स्टिकर भरना होगा। डिब्बे के अंदर क्या वस्तुएं हैं, पाउंड में कुल अनुमानित मूल्य क्या है, और क्या वे उपहार हैं?',
      expectedFunction: 'Declaring customs contents (sweaters, tea, souvenirs), total value (£45), and gift category',
      contextGoal: 'State that the parcel contains woollen sweaters and tea, worth around £45, and tick "Gift"',
      targetVocabulary: ['customs', 'sweaters', 'tea', 'gifts', 'value', 'forty-five pounds'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'The parcel contains two woollen sweaters and three tins of Scottish tea. They are gifts worth forty-five pounds.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'These are birthday gifts: Scottish shortbread and a warm scarf. The total value is about £40.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I will tick "Gift". It contains woollen apparel and specialty tea with a total declared value of £45.00.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'item_descriptions',
          patterns: ['sweaters', 'tea', 'scarf', 'shortbread', 'gifts', 'apparel', 'souvenirs', 'box'],
          required: true,
        },
        {
          name: 'value_declaration',
          patterns: ['pounds', 'value', '£45', '45', 'forty-five', '40', 'worth', 'declared'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_198_3_no_value',
          pattern: /only tea and sweater/i,
          errorType: 'interaction',
          message: 'Remember to state the estimated monetary value (e.g. £45) for the customs declaration.',
          correctionPattern: 'They are gifts worth forty-five pounds.',
        },
      ],
      remediationPractice: {
        id: 'rem_198_3',
        type: 'fill_blank',
        prompt: 'Fill in: "The declared ______ (value) of the gifts is £45."',
        options: [
          { id: 'r1', text: 'value', isCorrect: true },
          { id: 'r2', text: 'ticket', isCorrect: false },
        ],
        correctAnswer: 'value',
        explanation: 'Customs requires the declared value in currency.',
      },
    },
    {
      id: 'turn_198_4',
      turnIndex: 4,
      partnerPrompt:
        'I have stuck the CN22 sticker on the front. Here is your receipt with tracking number RN 482 910 334 GB. You can track it online at royalmail.com. Is there anything else you need before you head out?',
      partnerAudioText:
        'I have stuck the CN22 sticker on the front. Here is your receipt with tracking number RN 482 910 334 GB. You can track it online at royalmail.com. Is there anything else you need before you head out?',
      partnerQuestionHindi:
        'मैंने सामने CN22 स्टिकर चिपका दिया है। यह रही ट्रैकिंग नंबर RN 482 910 334 GB वाली आपकी रसीद। आप इसे royalmail.com पर ऑनलाइन ट्रैक कर सकते हैं। आपके जाने से पहले क्या आपको किसी और चीज़ की ज़रूरत है?',
      expectedFunction: 'Thanking the clerk and asking for a FRAGILE sticker or polite closing',
      contextGoal: 'Thank Marcus, ask if he can put a FRAGILE sticker on the box, and say goodbye',
      targetVocabulary: ['fragile', 'sticker', 'thank you', 'receipt', 'tracking', 'Marcus'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Thank you Marcus! Could you please attach a "FRAGILE" sticker to the box as well? Have a great day!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Thanks a lot! Could you put a "FRAGILE" label on top? I really appreciate your help.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'That is wonderful! Please stick a "FRAGILE" tape around the corners if possible. Thank you for the quick service!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'gratitude',
          patterns: ['thank you', 'thanks', 'appreciate', 'grateful'],
          required: true,
        },
        {
          name: 'fragile_or_closing',
          patterns: ['fragile', 'sticker', 'label', 'marcus', 'receipt', 'great day', 'goodbye', 'service'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_198_4_short',
          pattern: /^(thanks|ok)$/i,
          errorType: 'interaction',
          message: 'Provide a polite closing and ask for a FRAGILE sticker if desired.',
          correctionPattern: 'Thank you Marcus! Could you put a FRAGILE sticker on the box? Have a great day!',
        },
      ],
      remediationPractice: {
        id: 'rem_198_4',
        type: 'multiple_choice',
        prompt: 'Which response closes a post office visit politely?',
        options: [
          { id: 'r1', text: 'Thank you so much! Could you please add a FRAGILE sticker? Have a great day.', isCorrect: true },
          { id: 'r2', text: 'Give receipt bye.', isCorrect: false },
        ],
        correctAnswer: 'Thank you so much! Could you please add a FRAGILE sticker? Have a great day.',
        explanation: 'Polite and functional closing.',
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
