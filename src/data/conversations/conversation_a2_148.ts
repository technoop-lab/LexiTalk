import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_148: ConversationDefinition = {
  id: 'conv_a2_148',
  title: 'Cultural Etiquette, Invitations & Social Gatherings',
  cefr: 'A2',
  unitId: 'unit_a2_10',
  lessonLinks: ['lesson_a2_10_148'],
  estimatedMinutes: 5,
  scenario:
    'You are talking with your colleague and friend Charlotte Bennett in Cambridge. Charlotte invites you to a traditional British Sunday roast dinner and garden gathering at her family home. Accept the invitation warmly, ask polite etiquette questions regarding dress code and dietary preferences (mentioning any vegetarian preferences), inquire what gift or dessert you should bring for the hosts, and confirm timing.',
  communicativeGoals: [
    'Accept social invitations with enthusiasm and polite conversational formulas',
    'Ask culturally appropriate etiquette questions regarding host gifts, dress code, and arrival timing',
    'Politely communicate dietary restrictions and preferences without causing inconvenience',
    'Confirm social gathering arrangements, transport, and offer assistance with cleanup or preparation',
  ],
  canDoStatements: [
    'Can accept or politely decline social invitations with appropriate etiquette',
    'Can discuss cultural norms, host gifts, and dress expectations for family gatherings',
    'Can explain personal dietary preferences clearly in social dining settings',
  ],
  characters: [
    {
      id: 'char_charlotte_bennett',
      name: 'Charlotte Bennett',
      role: 'Colleague & Dinner Host',
      avatar: '🍽️',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'etiquette',
        ipa: '/ˈetɪket/',
        partOfSpeech: 'noun',
        meaning: 'The customary code of polite behavior in society or among members of a profession',
        exampleSentence: 'Bringing a small host gift is customary British dinner etiquette.',
        translations: { hi: 'शिष्टाचार / सामाजिक आचार-व्यवहार' },
      },
      {
        word: 'hospitality',
        ipa: '/ˌhɒspɪˈtæləti/',
        partOfSpeech: 'noun',
        meaning: 'The friendly and generous reception and entertainment of guests or strangers',
        exampleSentence: 'Thank you so much for your warm hospitality and wonderful cooking.',
        translations: { hi: 'आतिथ्य सत्कार / मेहमाननवाज़ी' },
      },
      {
        word: 'roast',
        ipa: '/rəʊst/',
        partOfSpeech: 'noun',
        meaning: 'A traditional British meal of roasted meat and vegetables, typically eaten on Sunday',
        exampleSentence: 'Sunday roast is served with Yorkshire pudding and roasted potatoes.',
        translations: { hi: 'संडे रोस्ट (पारंपरिक ब्रिटिश भोजन)' },
      },
      {
        word: 'dietary',
        ipa: '/ˈdaɪətəri/',
        partOfSpeech: 'adjective',
        meaning: 'Relating to a person’s diet or food restrictions',
        exampleSentence: 'Please let me know if you have any dietary requirements.',
        translations: { hi: 'खान-पान / आहार संबंधी' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I would love to come! Thank you so much for inviting me.',
        functionCategory: 'Accepting Social Invitations Warmly',
        exampleSentence: 'That sounds delightful, I would be thrilled to join.',
      },
      {
        phrase: 'What should I bring? Can I bring a dessert or a bouquet of flowers?',
        functionCategory: 'Inquiring About Host Gifts',
        exampleSentence: 'Please let me bring a bottle of sparkling apple cider or chocolates.',
      },
      {
        phrase: 'What is the dress code for the afternoon?',
        functionCategory: 'Asking About Dress Code',
        exampleSentence: 'Is it smart casual or relaxed?',
      },
      {
        phrase: 'I should mention that I am vegetarian, but please do not make anything special.',
        functionCategory: 'Communicating Dietary Preferences Politely',
        exampleSentence: 'I am gluten-free, but I can easily bring my own side dish.',
      },
    ],
    grammar: {
      title: 'Polite Inquiries with "Would", "Should", and "Could"',
      conceptExplanation:
        '1. Accepting Warmly: "I would love to + [Base Verb]" / "I would be delighted to..."\n2. Etiquette Inquiries: "What should I bring?" / "Could I bring a dessert?"\n3. Dietary Information: "I should mention that I don\'t eat meat / I am vegetarian."',
      patternFormula: 'I would love to + [Verb]! + What should I bring? + What is the dress code?',
      contrastExamples: [
        {
          incorrect: 'I will come to your house and I want eating vegetarian only.',
          correct: 'I would love to join you! Just to mention, I am vegetarian, but please don’t go to any trouble.',
          explanation: 'Use polite modal expressions ("would love to", "just to mention") rather than blunt demands.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Charlotte Bennett',
        text: 'Hi there! We are hosting a traditional Sunday roast dinner at our home this Sunday at 2:00 PM. Would you like to join us?',
        translation: 'नमस्ते! हम इस रविवार को दोपहर 2:00 बजे अपने घर पर एक पारंपरिक संडे रोस्ट डिनर की मेजबानी कर रहे हैं। क्या आप हमारे साथ शामिल होना चाहेंगे?',
      },
      {
        speaker: 'You',
        text: 'I would love to come, Charlotte! Thank you so much for the invitation. What should I bring for the hosts, and what is the dress code?',
        translation: 'मुझे आना बहुत पसंद आएगा, चार्लोट! निमंत्रण के लिए बहुत-बहुत धन्यवाद। मुझे मेजबानों के लिए क्या लाना चाहिए, और ड्रेस कोड क्या है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_148_1',
      type: 'fill_blank',
      prompt: 'Complete the response: "I ___ (would love to / want) come! Thank you for inviting me."',
      options: [
        { id: 'opt_1', text: 'would love to', isCorrect: true },
        { id: 'opt_2', text: 'want', isCorrect: false },
        { id: 'opt_3', text: 'must', isCorrect: false },
      ],
      correctAnswer: 'would love to',
      explanation: '"I would love to come" is the standard polite acceptance phrase.',
    },
    {
      id: 'cp_a2_148_2',
      type: 'multiple_choice',
      prompt: 'What is a polite question to ask a dinner host about contributions?',
      options: [
        { id: 'opt_1', text: 'What can I bring? May I bring a dessert or some flowers?', isCorrect: true },
        { id: 'opt_2', text: 'How much food are you cooking for me?', isCorrect: false },
        { id: 'opt_3', text: 'Will you pay me to eat your food?', isCorrect: false },
      ],
      correctAnswer: 'What can I bring? May I bring a dessert or some flowers?',
      explanation: 'Polite, considerate etiquette inquiry for social dinner invitations.',
    },
    {
      id: 'cp_a2_148_3',
      type: 'multiple_choice',
      prompt: 'How should you politely inform a host of a dietary restriction?',
      options: [
        { id: 'opt_1', text: 'Just to let you know, I am vegetarian, but please don’t go to any extra trouble.', isCorrect: true },
        { id: 'opt_2', text: 'You must cook separate vegan feast for me.', isCorrect: false },
        { id: 'opt_3', text: 'Meat is bad so don’t serve it.', isCorrect: false },
      ],
      correctAnswer: 'Just to let you know, I am vegetarian, but please don’t go to any extra trouble.',
      explanation: 'Considerate phrasing that communicates dietary needs without imposing.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_148_1',
      scenarioContext: 'Accept an invitation enthusiastically.',
      prompt: 'Build: "I would love to join your family for dinner."',
      targetStructure: 'Subject + would love to join + noun phrase',
      wordBank: ['I', 'would', 'love', 'to', 'join', 'your', 'family', 'for', 'dinner', 'joining'],
      acceptableSolutions: [
        'I would love to join your family for dinner',
        'I would love to join your family for dinner.',
      ],
      explanation: 'Polite modal acceptance of a dinner invitation.',
    },
    {
      id: 'sc_a2_148_2',
      scenarioContext: 'Inquire about dress code.',
      prompt: 'Build: "Is the dress code smart casual?"',
      targetStructure: 'Is the dress code + adjective phrase',
      wordBank: ['Is', 'the', 'dress', 'code', 'smart', 'casual', 'wearing', 'clothes'],
      acceptableSolutions: [
        'Is the dress code smart casual',
        'Is the dress code smart casual?',
      ],
      explanation: 'Etiquette inquiry regarding clothing expectations.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_148_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi! A few friends from the department are coming over to our house in Cambridge this Sunday at 2:00 PM for a traditional Sunday roast dinner. Would you like to come?',
      partnerAudioText:
        'Hi! A few friends from the department are coming over to our house in Cambridge this Sunday at 2:00 PM for a traditional Sunday roast dinner. Would you like to come?',
      partnerQuestionHindi:
        'नमस्ते! इस रविवार दोपहर 2:00 बजे हमारे विभाग के कुछ दोस्त पारंपरिक संडे रोस्ट डिनर के लिए कैम्ब्रिज में हमारे घर आ रहे हैं। क्या आप आना चाहेंगे?',
      expectedFunction: 'Accept Invitation Enthusiastically & Ask Etiquette Questions (would love to come / thank you / What should I bring / dress code)',
      contextGoal:
        'Accept the invitation warmly with "I would love to come!", thank Charlotte, and ask what gift/item you can bring and what the dress code is.',
      targetVocabulary: ['I would love to come, thank you so much', 'sounds delightful', 'What can I bring for the hosts?', 'What is the dress code?'],
      suggestedResponses: [
        {
          label: 'Warm Acceptance with Inquiries',
          text: 'I would love to come, Charlotte! Thank you so much for inviting me. That sounds wonderful. What should I bring—perhaps a dessert or some flowers? Also, what is the dress code for the afternoon?',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Acceptance',
          text: 'I would love to come! Thank you, Charlotte. What can I bring, and is the dress code casual?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Acceptance & Gratitude (would love / love to / thank you / thanks / delight / join / accept / invite)',
          patterns: ['would love', 'love to', 'thank you', 'thanks', 'delight', 'join', 'accept', 'invite', 'charlotte'],
          required: true,
        },
        {
          name: 'Etiquette / Contribution / Dress (bring / dessert / wine / flowers / gift / dress code / wear / casual / smart)',
          patterns: ['bring', 'dessert', 'wine', 'flowers', 'gift', 'dress code', 'wear', 'casual', 'smart', 'clothes'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_148_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I would love ___ (to / for) join you this Sunday."',
        options: [
          { id: 'opt_1', text: 'to', isCorrect: true },
          { id: 'opt_2', text: 'for', isCorrect: false },
          { id: 'opt_3', text: 'with', isCorrect: false },
        ],
        correctAnswer: 'to',
        explanation: 'Formula: "would love to + base verb".',
      },
    },
    {
      id: 'turn_a2_148_2',
      turnIndex: 2,
      partnerPrompt:
        'The dress code is very relaxed—smart casual or comfortable jeans and a jumper are fine. A bakery dessert or some fresh flowers would be lovely! Before I finalize the menu, do you have any dietary requirements or allergies?',
      partnerAudioText:
        'The dress code is very relaxed—smart casual or comfortable jeans and a jumper are fine. A bakery dessert or some fresh flowers would be lovely! Before I finalize the menu, do you have any dietary requirements or allergies?',
      partnerQuestionHindi:
        'ड्रेस कोड बहुत ही सहज है—स्मार्ट कैजुअल या आरामदायक जींस और जंपर ठीक हैं। एक बेकरी मिठाई या कुछ ताजे फूल प्यारे लगेंगे! इससे पहले कि मैं मेनू को अंतिम रूप दूं, क्या आपकी कोई आहार संबंधी आवश्यकताएं या एलर्जी हैं?',
      expectedFunction: 'Communicate Dietary Preferences Politely (vegetarian preference / no allergies / don’t go to extra trouble)',
      contextGoal:
        'Explain your dietary preference politely (e.g. vegetarian, nut allergy, or no restrictions) and reassure Charlotte that she does not need to prepare anything complicated.',
      targetVocabulary: ['Just to let you know, I am vegetarian', 'eat roast vegetables and potatoes', 'no food allergies', 'please do not go to any extra trouble'],
      suggestedResponses: [
        {
          label: 'Polite Dietary Communication',
          text: 'Just to mention, I am vegetarian, but I love roast potatoes, Yorkshire puddings, and seasonal vegetables! Please don’t go to any extra trouble for me. I don’t have any allergies.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Dietary Statement',
          text: 'I am vegetarian, but roasted vegetables and potatoes are perfect. No allergies at all!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Dietary Preference (vegetarian / vegan / meat / vegetables / potatoes / diet / allergies / no allergy / nut)',
          patterns: ['vegetarian', 'vegan', 'meat', 'vegetables', 'potatoes', 'diet', 'allergies', 'no allergy', 'nut', 'eat'],
          required: true,
        },
        {
          name: 'Politeness / Reassurance (no trouble / don\'t worry / fine / love / perfect / easy)',
          patterns: ['no trouble', 'don\'t worry', 'fine', 'love', 'perfect', 'easy', 'trouble'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_148_2',
        type: 'multiple_choice',
        prompt: 'Which phrase politely communicates a vegetarian preference?',
        options: [
          { id: 'opt_1', text: 'I am vegetarian, but please don’t go to any extra trouble.', isCorrect: true },
          { id: 'opt_2', text: 'I hate meat so you must throw it away.', isCorrect: false },
          { id: 'opt_3', text: 'Cook vegetarian feast for me now.', isCorrect: false },
        ],
        correctAnswer: 'I am vegetarian, but please don’t go to any extra trouble.',
        explanation: 'Polite British dinner etiquette phrase.',
      },
    },
    {
      id: 'turn_a2_148_3',
      turnIndex: 3,
      partnerPrompt:
        'Oh, that’s so easy! We’re making a delicious mushroom and chestnut Wellington alongside the roast potatoes and parsnips, so you’ll have a hearty plate. Our house is at 12 Mill Lane in Trumpington. Do you know how to get there, or do you need directions?',
      partnerAudioText:
        'Oh, that’s so easy! We’re making a delicious mushroom and chestnut Wellington alongside the roast potatoes and parsnips, so you’ll have a hearty plate. Our house is at 12 Mill Lane in Trumpington. Do you know how to get there, or do you need directions?',
      partnerQuestionHindi:
        'अरे, यह तो बहुत आसान है! हम भुने हुए आलू और पार्सनिप के साथ एक स्वादिष्ट मशरूम और चेस्टनट वेलिंगटन बना रहे हैं, इसलिए आपके पास एक शानदार थाली होगी। हमारा घर ट्रम्पिंगटन में 12 मिल लेन पर है। क्या आप जानते हैं कि वहां कैसे पहुंचना है, या आपको दिशा-निर्देश चाहिए?',
      expectedFunction: 'Confirm Location / Transport & Offer Contribution (know the bus route / bring artisan fruit tart / help with setup)',
      contextGoal:
        'State that you can easily take the Park & Ride bus or cycle to Mill Lane, confirm you will bring an artisan tart or flowers, and offer to arrive 15 minutes early to help set the table.',
      targetVocabulary: ['I can easily take the bus or cycle', 'know Mill Lane well', 'I will bring an artisan bakery tart', 'happy to help set the table'],
      suggestedResponses: [
        {
          label: 'Detailed Logistics & Offer of Help',
          text: 'That menu sounds incredible! I know Mill Lane—I can take the number 7 bus straight there. I will bring an artisan apple and blackberry tart from the local bakery. Would you like me to arrive a little early to help set the table?',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Logistics',
          text: 'I know Trumpington well and will take the bus. I’ll bring a fresh bakery tart. Let me know if you need any help setting up!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Transport / Location (bus / cycle / bike / train / car / know / directions / mill lane / trumpington / arrive)',
          patterns: ['bus', 'cycle', 'bike', 'train', 'car', 'know', 'directions', 'mill lane', 'trumpington', 'arrive', 'easy'],
          required: true,
        },
        {
          name: 'Gift / Help (tart / dessert / bakery / flowers / cake / help / set / table / early)',
          patterns: ['tart', 'dessert', 'bakery', 'flowers', 'cake', 'help', 'set', 'table', 'early', 'bring'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_148_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I can ___ (cycle / cycling) to your house in 15 minutes."',
        options: [
          { id: 'opt_1', text: 'cycle', isCorrect: true },
          { id: 'opt_2', text: 'cycling', isCorrect: false },
          { id: 'opt_3', text: 'to cycle', isCorrect: false },
        ],
        correctAnswer: 'cycle',
        explanation: 'Use modal "can + base verb".',
      },
    },
    {
      id: 'turn_a2_148_4',
      turnIndex: 4,
      partnerPrompt:
        'An apple and blackberry tart sounds divine! No need to come early, just relax and arrive at 2:00 PM. We have a cozy garden fire pit for after dinner too. We’re really looking forward to having you over!',
      partnerAudioText:
        'An apple and blackberry tart sounds divine! No need to come early, just relax and arrive at 2:00 PM. We have a cozy garden fire pit for after dinner too. We’re really looking forward to having you over!',
      partnerQuestionHindi:
        'सेब और ब्लैकबेरी तीखा (टार्ट) दिव्य लगता है! जल्दी आने की कोई आवश्यकता नहीं है, बस आराम करें और दोपहर 2:00 बजे पहुंचें। रात के खाने के बाद हमारे पास एक आरामदायक बगीचा अलाव (फायर पिट) भी है। हम वास्तव में आपके आने का बेसब्री से इंतजार कर रहे हैं!',
      expectedFunction: 'Express Warm Anticipation & Conclude (Thank you Charlotte / looking forward to Sunday / see you at 2)',
      contextGoal:
        'Express warm anticipation for the meal and garden fire pit, thank Charlotte again for the invitation, and say goodbye until Sunday.',
      targetVocabulary: ['Thank you very much Charlotte', 'really looking forward to Sunday at 2:00 PM', 'sounds like a lovely afternoon', 'see you then'],
      suggestedResponses: [
        {
          label: 'Warm Social Closing',
          text: 'Thank you so much, Charlotte! I am really looking forward to a lovely Sunday afternoon with everyone. See you on Sunday at 2:00 PM with the tart!',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Closing',
          text: 'Thank you, Charlotte! I’m really looking forward to it. See you Sunday at 2:00 PM!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Sunday Anticipation (thank you / thanks / charlotte / looking forward / sunday / 2:00 / see you / lovely / tart / goodbye)',
          patterns: ['thank you', 'thanks', 'charlotte', 'looking forward', 'sunday', '2:00', 'see you', 'lovely', 'tart', 'goodbye', 'bye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_148_4',
        type: 'multiple_choice',
        prompt: 'Which closing phrase is warmest and most natural among friends?',
        options: [
          { id: 'opt_1', text: 'Thank you so much, Charlotte! I’m really looking forward to Sunday. See you at 2:00 PM!', isCorrect: true },
          { id: 'opt_2', text: 'I come eat your food bye.', isCorrect: false },
          { id: 'opt_3', text: 'Meeting is finished now.', isCorrect: false },
        ],
        correctAnswer: 'Thank you so much, Charlotte! I’m really looking forward to Sunday. See you at 2:00 PM!',
        explanation: 'Warm, friendly, and socially appropriate closing.',
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
