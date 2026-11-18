import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_38: ConversationDefinition = {
  id: 'conv_a1_38',
  title: 'Superlative Adjectives (The Biggest, The Best, The Most...)',
  cefr: 'A1',
  unitId: 'unit_a1_3',
  lessonLinks: ['lesson_a1_3_38'],
  estimatedMinutes: 5,
  scenario:
    'You are visiting a tourist information center in Edinburgh. You ask travel guide Fiona for recommendations on the most famous landmarks, the oldest castle, the best seafood restaurant, and the highest viewpoint in the city.',
  communicativeGoals: [
    'Form and use short superlative adjectives with "the -est" (the oldest, the tallest, the highest, the best)',
    'Form and use long superlative adjectives with "the most..." (the most famous, the most beautiful, the most popular)',
    'Ask for recommendations using superlatives ("What is the best way to...?", "Which museum is the most interesting?")',
    'Compare multiple city sights and plan a sightseeing route',
  ],
  canDoStatements: [
    'Can ask for and understand recommendations using superlative adjectives (CEFR A1.2)',
    'Can describe extreme qualities of places, objects, and attractions using "the best", "the most", etc.',
    'Can select top sightseeing destinations based on superlative advice',
  ],
  characters: [
    {
      id: 'char_fiona',
      name: 'Fiona',
      role: 'Tourist Information Officer',
      avatar: '🏰',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'landmark',
        ipa: '/ˈlændˌmɑːrk/',
        partOfSpeech: 'noun',
        meaning: 'An object or feature of a landscape or town that is easily seen and recognized',
        exampleSentence: 'Edinburgh Castle is the most famous landmark in the city.',
        translations: { hi: 'प्रसिद्ध स्थल / लैंडमार्क' },
      },
      {
        word: 'oldest',
        ipa: '/ˈoʊldɪst/',
        partOfSpeech: 'adjective (superlative)',
        meaning: 'Having existed for the longest time',
        exampleSentence: 'St. Margaret\'s Chapel is the oldest building in the city.',
        translations: { hi: 'सबसे पुराना' },
      },
      {
        word: 'highest',
        ipa: '/ˈhaɪɪst/',
        partOfSpeech: 'adjective (superlative)',
        meaning: 'Of greatest extent upwards; situated at the top',
        exampleSentence: 'Arthur\'s Seat is the highest hill in the park.',
        translations: { hi: 'सबसे ऊँचा' },
      },
      {
        word: 'popular',
        ipa: '/ˈpɒpjələr/',
        partOfSpeech: 'adjective',
        meaning: 'Liked, admired, or enjoyed by many people',
        exampleSentence: 'This is the most popular walking tour in Scotland.',
        translations: { hi: 'लोकप्रिय / प्रसिद्ध' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'What is the most famous...?',
        functionCategory: 'Superlative Inquiry',
        exampleSentence: 'What is the most famous museum in Edinburgh?',
      },
      {
        phrase: 'Where can I find the best...?',
        functionCategory: 'Recommendation Request',
        exampleSentence: 'Where can I find the best traditional Scottish food?',
      },
      {
        phrase: 'It is the highest point in the city.',
        functionCategory: 'Superlative Description',
        exampleSentence: 'Arthur’s Seat is the highest hill with the best view.',
      },
      {
        phrase: 'Which route is the fastest?',
        functionCategory: 'Navigation Comparison',
        exampleSentence: 'Which bus route is the fastest to the harbor?',
      },
    ],
    grammar: {
      title: 'Superlative Adjectives: The + [-est] / The most + [Adjective]',
      conceptExplanation:
        'Always place "the" before superlatives. For 1-syllable adjectives (old, high, big, fast), use "the [adj]-est" (the oldest, the highest, the biggest, the fastest). For 2+ syllable adjectives (famous, beautiful, popular), use "the most [adj]" (the most famous, the most beautiful). Irregulars: good → the best, bad → the worst.',
      patternFormula: 'the + [Short Adj + -est] | the most + [Long Adj] | the best / the worst',
      contrastExamples: [
        {
          incorrect: 'This is most famous castle.',
          correct: 'This is the most famous castle.',
          explanation: 'Never omit the definite article "the" before a superlative.',
        },
        {
          incorrect: 'Arthur’s Seat is the most high hill.',
          correct: 'Arthur’s Seat is the highest hill.',
          explanation: 'Use "-est" for single-syllable adjectives: "the highest", not "the most high".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Fiona',
        text: 'Welcome to Edinburgh Visitor Hub! How can I help you explore our historic city today?',
        translation: 'एडिनबर्ग विज़िटर हब में आपका स्वागत है! आज हमारे ऐतिहासिक शहर को देखने में मैं आपकी क्या मदद कर सकती हूँ?',
      },
      {
        speaker: 'You',
        text: 'Hello! I have only one day here. What is the most famous landmark, and where is the oldest building?',
        translation: 'नमस्ते! मेरे पास यहाँ केवल एक दिन है। सबसे प्रसिद्ध लैंडमार्क कौन सा है, और सबसे पुरानी इमारत कहाँ है?',
      },
      {
        speaker: 'Fiona',
        text: 'The most famous landmark is Edinburgh Castle at the top of the Royal Mile, and inside you will find the oldest building in the city.',
        translation: 'सबसे प्रसिद्ध ऐतिहासिक स्थल रॉयल माइल के शीर्ष पर स्थित एडिनबर्ग कैसल है, और इसके अंदर आपको शहर की सबसे पुरानी इमारत मिलेगी।',
      },
      {
        speaker: 'You',
        text: 'Wonderful! And where can I find the best viewpoint to take photographs?',
        translation: 'शानदार! और तस्वीरें लेने के लिए मुझे सबसे बेहतरीन व्यू पॉइंट कहाँ मिल सकता है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_38_1',
      type: 'fill_blank',
      prompt: 'Complete the superlative sentence: "Edinburgh Castle is ___ most famous attraction in Scotland."',
      options: [
        { id: 'opt_1', text: 'the', isCorrect: true },
        { id: 'opt_2', text: 'a', isCorrect: false },
        { id: 'opt_3', text: 'an', isCorrect: false },
      ],
      correctAnswer: 'the',
      explanation: 'Superlatives always take the definite article "the".',
    },
    {
      id: 'cp_a1_38_2',
      type: 'multiple_choice',
      prompt: 'What is the correct superlative of the adjective "old"?',
      options: [
        { id: 'opt_1', text: 'the oldest', isCorrect: true },
        { id: 'opt_2', text: 'the most old', isCorrect: false },
        { id: 'opt_3', text: 'the older', isCorrect: false },
      ],
      correctAnswer: 'the oldest',
      explanation: 'Single-syllable "old" becomes "the oldest".',
    },
    {
      id: 'cp_a1_38_3',
      type: 'multiple_choice',
      prompt: 'Which question correctly asks for the best restaurant in town?',
      options: [
        { id: 'opt_1', text: 'Where is the best seafood restaurant in the city?', isCorrect: true },
        { id: 'opt_2', text: 'Where is the goodest seafood restaurant in city?', isCorrect: false },
        { id: 'opt_3', text: 'Where is the most good restaurant seafood?', isCorrect: false },
      ],
      correctAnswer: 'Where is the best seafood restaurant in the city?',
      explanation: '"Good" has the irregular superlative form "the best".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_38_1',
      scenarioContext: 'Inquire about the most famous castle.',
      prompt: 'Build: "What is the most famous castle in Scotland?"',
      targetStructure: 'What is + the most + adjective + noun + prepositional phrase?',
      wordBank: ['What', 'is', 'the', 'most', 'famous', 'castle', 'in', 'Scotland', 'famousest', 'a'],
      acceptableSolutions: [
        'What is the most famous castle in Scotland',
        'What is the most famous castle in Scotland?',
      ],
      explanation: 'Superlative question with multi-syllable adjective "famous".',
    },
    {
      id: 'sc_a1_38_2',
      scenarioContext: 'Describe the hill with the best view.',
      prompt: 'Build: "Arthur’s Seat is the highest hill with the best view."',
      targetStructure: 'Subject + is + the + superlative + noun + prepositional phrase + the + superlative + noun',
      wordBank: ['Arthur’s', 'Seat', 'is', 'the', 'highest', 'hill', 'with', 'the', 'best', 'view', 'most', 'high'],
      acceptableSolutions: [
        'Arthur’s Seat is the highest hill with the best view',
        'Arthur’s Seat is the highest hill with the best view.',
      ],
      explanation: 'Combines regular "-est" and irregular "the best" superlatives.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_38_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello and welcome to Edinburgh! It is lovely to meet you. Are you looking to visit our historic landmarks or scenic nature spots first?',
      partnerAudioText:
        'Hello and welcome to Edinburgh! It is lovely to meet you. Are you looking to visit our historic landmarks or scenic nature spots first?',
      partnerQuestionHindi:
        'नमस्ते और एडिनबर्ग में आपका स्वागत है! आपसे मिलकर बहुत अच्छा लगा। क्या आप पहले हमारे ऐतिहासिक स्थलों को देखना चाहते हैं या प्राकृतिक नज़ारों को?',
      expectedFunction: 'Ask for Top Landmark Recommendations using Superlatives',
      contextGoal:
        'State that you want to see the most famous landmarks and ask where the oldest castle or building is located.',
      targetVocabulary: ['most famous', 'oldest', 'landmark', 'castle', 'first', 'recommend'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hello! I would like to see the most famous historic landmarks first. Where is the oldest castle in the city?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hi Fiona! What is the most famous landmark and where can I find the oldest building?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Historic spots first! What is the most famous castle to visit today?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Superlative Landmark Request',
          patterns: [
            'most famous',
            'oldest',
            'landmark',
            'castle',
            'historic',
            'what is the',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'missing_the_superlative',
          pattern: /\bmost famous\b(?!\s+\w+)/i,
          errorType: 'grammar',
          message: 'Always use "the most famous" with the definite article "the".',
          correctionPattern: 'the most famous',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_38_1',
        type: 'fill_blank',
        prompt: 'Select the article: "This is ___ oldest castle in the country."',
        options: [
          { id: 'opt_1', text: 'the', isCorrect: true },
          { id: 'opt_2', text: 'a', isCorrect: false },
          { id: 'opt_3', text: 'some', isCorrect: false },
        ],
        correctAnswer: 'the',
        explanation: 'Superlatives always take the definite article "the".',
      },
    },
    {
      id: 'turn_a1_38_2',
      turnIndex: 2,
      partnerPrompt:
        'Edinburgh Castle is by far the most famous landmark in Scotland, perched right at the top of the Royal Mile. Inside, you can see St. Margaret’s Chapel, which is the oldest building in the city! What else would you like to see?',
      partnerAudioText:
        'Edinburgh Castle is by far the most famous landmark in Scotland, perched right at the top of the Royal Mile. Inside, you can see St. Margaret’s Chapel, which is the oldest building in the city! What else would you like to see?',
      partnerQuestionHindi:
        'एडिनबर्ग कैसल रॉयल माइल के शीर्ष पर स्थित स्कॉटलैंड का सबसे प्रसिद्ध स्थल है। इसके अंदर, आप सेंट मार्गरेट चैपल देख सकते हैं, जो शहर की सबसे पुरानी इमारत है! आप और क्या देखना चाहेंगे?',
      expectedFunction: 'Inquire About the Highest Viewpoint (highest / best view)',
      contextGoal:
        'Ask where to find the highest viewpoint or hill to get the best view of the city.',
      targetVocabulary: ['highest', 'best view', 'viewpoint', 'hill', 'photographs', 'arthur’s seat'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'That sounds amazing! Where is the highest viewpoint in the city to get the best panoramic view?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'What is the highest hill around here with the best view for photos?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Where is the highest hill to see the best city views?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Highest View Inquiry',
          patterns: ['highest', 'best view', 'viewpoint', 'photos', 'hill', 'where is the'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'most_high_error',
          pattern: /\bmost high\b/i,
          errorType: 'grammar',
          message: 'Say "the highest", not "the most high".',
          correctionPattern: 'the highest view',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_38_2',
        type: 'multiple_choice',
        prompt: 'Which phrase correctly describes the top elevation?',
        options: [
          { id: 'opt_1', text: 'Arthur’s Seat is the highest hill.', isCorrect: true },
          { id: 'opt_2', text: 'Arthur’s Seat is the most high hill.', isCorrect: false },
          { id: 'opt_3', text: 'Arthur’s Seat is the higherest hill.', isCorrect: false },
        ],
        correctAnswer: 'Arthur’s Seat is the highest hill.',
        explanation: 'High (1 syllable) → the highest.',
      },
    },
    {
      id: 'turn_a1_38_3',
      turnIndex: 3,
      partnerPrompt:
        'You must climb Arthur’s Seat in Holyrood Park! It is an ancient volcano and the highest point in central Edinburgh with the most breathtaking 360-degree views. Are you also looking for somewhere to eat after your walk?',
      partnerAudioText:
        'You must climb Arthur’s Seat in Holyrood Park! It is an ancient volcano and the highest point in central Edinburgh with the most breathtaking 360-degree views. Are you also looking for somewhere to eat after your walk?',
      partnerQuestionHindi:
        'आपको होलीरूड पार्क में आर्थर सीट पर जरूर चढ़ना चाहिए! यह एक प्राचीन ज्वालामुखी है और केंद्रीय एडिनबर्ग का सबसे ऊंचा बिंदु है जहाँ से सबसे शानदार 360-डिग्री दृश्य दिखाई देते हैं। क्या आप अपनी सैर के बाद खाने के लिए कोई जगह भी ढूंढ रहे हैं?',
      expectedFunction: 'Ask for Best Dining Recommendation (the best / the most popular)',
      contextGoal:
        'Ask Fiona for the best traditional Scottish restaurant or the most popular local bakery.',
      targetVocabulary: ['the best', 'restaurant', 'traditional', 'most popular', 'recommend', 'dinner'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes, please! Where can I find the best traditional Scottish restaurant for fresh seafood and local dishes?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Where is the best place to eat traditional food nearby?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'What is the most popular restaurant for Scottish seafood near the center?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Best Dining Request',
          patterns: ['the best', 'best place', 'most popular', 'restaurant', 'traditional', 'seafood', 'food'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'goodest_restaurant',
          pattern: /\bgoodest\b/i,
          errorType: 'grammar',
          message: 'The superlative of "good" is "the best", not "goodest".',
          correctionPattern: 'the best restaurant',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_38_3',
        type: 'fill_blank',
        prompt: 'Fill in the irregular superlative: "This pub serves the ___ fish and chips in town."',
        options: [
          { id: 'opt_1', text: 'best', isCorrect: true },
          { id: 'opt_2', text: 'goodest', isCorrect: false },
          { id: 'opt_3', text: 'most good', isCorrect: false },
        ],
        correctAnswer: 'best',
        explanation: 'Good → better → the best.',
      },
    },
    {
      id: 'turn_a1_38_4',
      turnIndex: 4,
      partnerPrompt:
        'Try "The Mussel Inn" on Rose Street—it has the freshest seafood in the Old Town! Here is a free map with the castle, Arthur’s Seat, and the restaurant marked. Enjoy your day in Edinburgh!',
      partnerAudioText:
        'Try "The Mussel Inn" on Rose Street—it has the freshest seafood in the Old Town! Here is a free map with the castle, Arthur’s Seat, and the restaurant marked. Enjoy your day in Edinburgh!',
      partnerQuestionHindi:
        'रोज़ स्ट्रीट पर "द मसेल इन" आज़माएँ—यहाँ ओल्ड टाउन में सबसे ताज़ा सीफ़ूड मिलता है! यहाँ कैसल, आर्थर्स सीट और रेस्तरां के निशान वाला एक मुफ़्त नक्शा है। एडिनबर्ग में अपने दिन का आनंद लें!',
      expectedFunction: 'Express Gratitude & Conclude Interaction',
      contextGoal:
        'Thank Fiona for the map and recommendations, express excitement, and say goodbye.',
      targetVocabulary: ['thank you', 'map', 'recommendations', 'appreciate', 'have a wonderful day', 'goodbye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you so much, Fiona! This map is extremely helpful. I am going to have the best day exploring Edinburgh!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thank you for all the wonderful recommendations! Have a great day.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Thanks a million Fiona! Off to the castle now, goodbye!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Farewell & Gratitude',
          patterns: ['thank you', 'thanks', 'map', 'recommendations', 'best day', 'have a great day', 'goodbye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_38_4',
        type: 'multiple_choice',
        prompt: 'Which response closes the interaction warmly?',
        options: [
          { id: 'opt_1', text: 'Thank you so much for the recommendations and map, have a great day!', isCorrect: true },
          { id: 'opt_2', text: 'I am taking paper map bye.', isCorrect: false },
          { id: 'opt_3', text: 'You gave me castle paper.', isCorrect: false },
        ],
        correctAnswer: 'Thank you so much for the recommendations and map, have a great day!',
        explanation: 'Warm, appreciative, and natural.',
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
