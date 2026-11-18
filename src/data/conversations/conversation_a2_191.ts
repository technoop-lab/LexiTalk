import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_191: ConversationDefinition = {
  id: 'conv_a2_191',
  title: 'Festivals, National Celebrations & Cultural Traditions',
  cefr: 'A2',
  unitId: 'unit_a2_13',
  lessonLinks: ['lesson_a2_13_191'],
  estimatedMinutes: 5,
  scenario:
    'You are talking with your international exchange partner Elena about cultural festivals. You explain how Diwali (the Festival of Lights) is celebrated with clay oil lamps, sweets, family feasts, and colorful fireworks, while comparing traditions.',
  communicativeGoals: [
    'Use Present Simple and Frequency Adverbs (always, usually, often, traditionally) to describe cultural customs and habits',
    'Describe festival decorations, festive foods, traditional attire, and family gatherings',
    'Explain the cultural meaning, history, and symbolism behind celebrations',
    'Ask cross-cultural questions and compare festive traditions respectfully',
  ],
  canDoStatements: [
    'Can describe how a traditional cultural festival is celebrated using Present Simple and frequency adverbs',
    'Can explain typical foods, decorations, and rituals in simple English',
    'Can compare holiday traditions with an international friend',
  ],
  characters: [
    {
      id: 'char_elena_exchange',
      name: 'Elena',
      role: 'International Exchange Student & Cultural Partner',
      avatar: '🪔',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'tradition',
        ipa: '/trəˈdɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The transmission of customs or beliefs from generation to generation',
        exampleSentence: 'Lighting clay lamps is an ancient family tradition.',
        translations: { hi: 'परंपरा' },
      },
      {
        word: 'decorate',
        ipa: '/ˈdekəreɪt/',
        partOfSpeech: 'verb',
        meaning: 'To make something look more attractive by adding extra items or ornaments',
        exampleSentence: 'Families decorate their doorways with vibrant floral rangoli patterns.',
        translations: { hi: 'सजाना' },
      },
      {
        word: 'celebration',
        ipa: '/ˌselɪˈbreɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The action of marking one\'s pleasure at an important event or occasion',
        exampleSentence: 'The celebration lasts for five joyful days with delicious food.',
        translations: { hi: 'उत्सव / समारोह' },
      },
      {
        word: 'symbolize',
        ipa: '/ˈsɪmbəlaɪz/',
        partOfSpeech: 'verb',
        meaning: 'To represent by means of symbols; stand for',
        exampleSentence: 'The small oil lamps symbolize the triumph of light over darkness.',
        translations: { hi: 'प्रतीक होना / दर्शाना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'During Diwali, we always decorate our homes with clay lamps and flowers.',
        functionCategory: 'Habitual festival custom with always',
        exampleSentence: 'We usually gather together for a special festive dinner.',
      },
      {
        phrase: 'People traditionally wear new colorful clothes and exchange sweet gifts.',
        functionCategory: 'Describing cultural attire and sharing',
        exampleSentence: 'Children often enjoy watching colorful fireworks in the evening.',
      },
      {
        phrase: 'What kind of traditional food do you prepare for this celebration?',
        functionCategory: 'Inquiring about festive dishes',
        exampleSentence: 'How do people celebrate New Year in your hometown?',
      },
      {
        phrase: 'The celebration symbolizes peace, prosperity, and new beginnings.',
        functionCategory: 'Explaining cultural symbolism',
        exampleSentence: 'These lanterns symbolize hope and good fortune.',
      },
    ],
    grammar: {
      title: 'Present Simple for Customs & Frequency Adverbs: always, usually, often, traditionally',
      conceptExplanation:
        '1. Present Simple expresses regular cultural traditions and timeless customs:\n   - "We celebrate Diwali in autumn."\n   - "Families cook special sweets."\n2. Placement of Frequency Adverbs:\n   - Between subject and main verb: "We usually visit our relatives." / "People always wear new clothes."\n   - After the verb \'be\': "The streets are always crowded during parades."\n3. Adverbs like \'traditionally\' or \'normally\' can also start a sentence: "Traditionally, we light lamps at dusk."',
      patternFormula: '[Subject] + [always / usually / often / traditionally] + [Present Simple Verb] + [Object / Custom]',
      contrastExamples: [
        {
          incorrect: 'We are usually decorating our house during festival.',
          correct: 'We usually decorate our house during the festival.',
          explanation: 'Use Present Simple (decorate), not Present Continuous (are decorating), for recurring annual customs.',
        },
        {
          incorrect: 'Always we exchange gifts.',
          correct: 'We always exchange gifts.',
          explanation: 'Standard position for "always" is directly before the main verb.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Elena',
        text: 'I saw photos of beautiful oil lamps and colorful floor patterns. What festival are you celebrating this week?',
        translation: 'मैंने सुंदर मिट्टी के दीयों और रंगीन फर्श पैटर्न की तस्वीरें देखीं। आप इस सप्ताह कौन सा त्योहार मना रहे हैं?',
      },
      {
        speaker: 'Learner',
        text: 'We are celebrating Diwali! We always light small clay lamps to bring warmth and good fortune.',
        translation: 'हम दिवाली मना रहे हैं! हम हमेशा सुख-समृद्धि और रोशनी लाने के लिए छोटे मिट्टी के दीये जलाते हैं।',
      },
      {
        speaker: 'Elena',
        text: 'That sounds magical! Do families usually prepare special festive sweets for the holiday?',
        translation: 'यह बहुत जादुई लगता है! क्या परिवार आमतौर पर त्योहार के लिए विशेष मिठाइयाँ बनाते हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_191_1',
      type: 'fill_blank',
      prompt: 'Place the frequency adverb correctly: "Families ______ (always / celebrate) the harvest festival with a community feast."',
      options: [
        { id: 'opt_1', text: 'always celebrate', isCorrect: true },
        { id: 'opt_2', text: 'celebrate always', isCorrect: false },
        { id: 'opt_3', text: 'are always celebrate', isCorrect: false },
      ],
      correctAnswer: 'always celebrate',
      explanation: 'Frequency adverbs come before the main verb.',
    },
    {
      id: 'cp_191_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes an annual cultural tradition?',
      options: [
        { id: 'opt_1', text: 'During the festival, people traditionally wear bright new garments.', isCorrect: true },
        { id: 'opt_2', text: 'During the festival, people traditionally wearing bright new garments.', isCorrect: false },
        { id: 'opt_3', text: 'During the festival, people traditionally are wore bright new garments.', isCorrect: false },
      ],
      correctAnswer: 'During the festival, people traditionally wear bright new garments.',
      explanation: 'Present Simple base verb (wear) expresses regular custom.',
    },
    {
      id: 'cp_191_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [usually / decorate / we / with flowers / our doorways]',
      correctAnswer: 'we usually decorate our doorways with flowers',
      explanation: 'Subject + adverb + verb + object + modifier.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_191_1',
      prompt: 'Construct a sentence stating that people always light clay lamps to symbolize light over darkness.',
      scenarioContext: 'Explaining Diwali to Elena.',
      targetStructure: 'People always light clay oil lamps to symbolize the victory of light.',
      wordBank: ['People', 'always light', 'clay oil lamps', 'to symbolize', 'the victory of light', 'in homes'],
      acceptableSolutions: [
        'People always light clay oil lamps to symbolize the victory of light.',
        'We always light clay lamps to symbolize light.',
      ],
      explanation: 'Use frequency adverb "always" + present verb "light" + infinitive of purpose.',
    },
    {
      id: 'sc_191_2',
      prompt: 'Construct a sentence stating that relatives usually exchange handmade sweets and gift boxes.',
      scenarioContext: 'Describing holiday sharing.',
      targetStructure: 'Relatives usually exchange handmade sweets and gifts with neighbors.',
      wordBank: ['Relatives', 'usually exchange', 'handmade sweets', 'and gifts', 'with neighbors', 'during holidays'],
      acceptableSolutions: [
        'Relatives usually exchange handmade sweets and gifts with neighbors.',
        'Families usually exchange sweets and gifts.',
      ],
      explanation: 'Structure: [Subject + usually + exchange + objects].',
    },
  ],
  turns: [
    {
      id: 'turn_191_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi! I saw amazing photos of your hometown covered in glowing lights and beautiful floor designs. What festival is this, and how do people usually prepare their homes for it?',
      partnerAudioText:
        'Hi! I saw amazing photos of your hometown covered in glowing lights and beautiful floor designs. What festival is this, and how do people usually prepare their homes for it?',
      partnerQuestionHindi:
        'नमस्ते! मैंने आपके गृहनगर की जगमगाती रोशनी और सुंदर फर्श डिजाइनों से सजी अद्भुत तस्वीरें देखीं। यह कौन सा त्योहार है, और लोग आमतौर पर इसके लिए अपने घरों को कैसे तैयार करते हैं?',
      expectedFunction: 'Naming the festival and describing home preparation with Present Simple and adverbs',
      contextGoal: 'Explain that it is Diwali, and families clean and decorate homes with clay lamps (diyas) and rangoli',
      targetVocabulary: ['Diwali', 'decorate', 'usually', 'lamps', 'clean', 'flowers'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'This is Diwali, the Festival of Lights! We usually clean our homes and decorate the doorway with lamps and flowers.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'It is Diwali! Families always clean everything and make colorful rangoli art on the floor.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'That is Diwali! Before the celebration, we usually paint our houses, hang lanterns, and light small clay lamps called diyas.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'festival_name',
          patterns: ['diwali', 'festival of lights', 'celebration'],
          required: true,
        },
        {
          name: 'home_preparation',
          patterns: ['clean', 'decorate', 'lamps', 'diyas', 'flowers', 'rangoli', 'lights', 'usually', 'always'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_191_1_continuous',
          pattern: /we are usually cleaning/i,
          errorType: 'grammar',
          message: 'Use Present Simple for recurring customs: "We usually clean our homes...".',
          correctionPattern: 'We usually clean...',
        },
      ],
      remediationPractice: {
        id: 'rem_191_1',
        type: 'fill_blank',
        prompt: 'Fill in: "We usually ______ (decorate) our house for festivals."',
        options: [
          { id: 'r1', text: 'decorate', isCorrect: true },
          { id: 'r2', text: 'decorating', isCorrect: false },
        ],
        correctAnswer: 'decorate',
        explanation: 'Present Simple expresses regular customs.',
      },
    },
    {
      id: 'turn_191_2',
      turnIndex: 2,
      partnerPrompt:
        'The clay lamps sound so charming! What traditional food or sweet dishes do families usually cook and share with their neighbors during the festival?',
      partnerAudioText:
        'The clay lamps sound so charming! What traditional food or sweet dishes do families usually cook and share with their neighbors during the festival?',
      partnerQuestionHindi:
        'मिट्टी के दीये बहुत आकर्षक लगते हैं! त्योहार के दौरान परिवार आमतौर पर कौन से पारंपरिक भोजन या मीठे व्यंजन बनाते हैं और अपने पड़ोसियों के साथ साझा करते हैं?',
      expectedFunction: 'Describing festive food traditions using frequency adverbs',
      contextGoal: 'Describe traditional sweets (mithai, laddoos, halwa), festive meals, and sharing with neighbors',
      targetVocabulary: ['sweets', 'cook', 'share', 'often', 'traditional', 'family'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'We always prepare sweet treats like milk pedas and laddoos, and we share boxes with neighbors.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Families often cook savory snacks and rich festive sweets to give to friends and relatives.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'We traditionally make homemade desserts, spicy snacks, and grand family feasts to celebrate together.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'food_description',
          patterns: ['sweets', 'desserts', 'laddoos', 'snacks', 'treats', 'feasts', 'dishes', 'food'],
          required: true,
        },
        {
          name: 'sharing_custom',
          patterns: ['share', 'give', 'exchange', 'cook', 'prepare', 'neighbors', 'friends', 'always', 'often'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_191_2_sweets_plural',
          pattern: /make many sweet\b/i,
          errorType: 'grammar',
          message: 'When referring to confectionery treats, use the noun "sweets" or "sweet dishes".',
          correctionPattern: 'make many sweets',
        },
      ],
      remediationPractice: {
        id: 'rem_191_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes sharing food?',
        options: [
          { id: 'r1', text: 'We always share traditional sweets with our relatives.', isCorrect: true },
          { id: 'r2', text: 'We sharing always traditional sweets with relatives.', isCorrect: false },
        ],
        correctAnswer: 'We always share traditional sweets with our relatives.',
        explanation: 'Subject + always + base verb + object.',
      },
    },
    {
      id: 'turn_191_3',
      turnIndex: 3,
      partnerPrompt:
        'Sharing sweets is such a warm gesture! What is the deeper cultural meaning or symbolism behind lighting all those lamps in the evening?',
      partnerAudioText:
        'Sharing sweets is such a warm gesture! What is the deeper cultural meaning or symbolism behind lighting all those lamps in the evening?',
      partnerQuestionHindi:
        'मिठाइयाँ बाँटना बहुत ही आत्मीय भाव है! शाम को उन सभी दीयों को जलाने के पीछे गहरा सांस्कृतिक अर्थ या प्रतीक क्या है?',
      expectedFunction: 'Explaining cultural meaning and symbolism using Present Simple',
      contextGoal: 'Explain that the lights symbolize good over evil, knowledge over ignorance, and hope for a prosperous year',
      targetVocabulary: ['symbolize', 'light', 'hope', 'prosperity', 'good', 'peace'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'The lamps symbolize the victory of light over darkness and hope for a prosperous new year.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'The lights represent knowledge, goodness, and positive new beginnings for every family.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Lighting lamps symbolizes driving away darkness and welcoming peace, prosperity, and joy into every home.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'symbolism_verb',
          patterns: ['symbolize', 'symbolizes', 'represent', 'represents', 'means', 'symbol'],
          required: true,
        },
        {
          name: 'cultural_theme',
          patterns: ['light', 'darkness', 'good', 'hope', 'prosperity', 'peace', 'joy', 'knowledge'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_191_3_symbolize_s',
          pattern: /the lamps symbolizes/i,
          errorType: 'grammar',
          message: 'Plural subject "the lamps" takes plural verb without -s: "the lamps symbolize".',
          correctionPattern: 'the lamps symbolize',
        },
      ],
      remediationPractice: {
        id: 'rem_191_3',
        type: 'fill_blank',
        prompt: 'Fill in: "The light ______ (symbolize) hope."',
        options: [
          { id: 'r1', text: 'symbolizes', isCorrect: true },
          { id: 'r2', text: 'symbolize', isCorrect: false },
        ],
        correctAnswer: 'symbolizes',
        explanation: 'Singular subject "the light" takes "symbolizes".',
      },
    },
    {
      id: 'turn_191_4',
      turnIndex: 4,
      partnerPrompt:
        'That is truly inspiring. In my country, we celebrate Midsummer with flower crowns and bonfires. I love learning about cultural traditions from around the world!',
      partnerAudioText:
        'That is truly inspiring. In my country, we celebrate Midsummer with flower crowns and bonfires. I love learning about cultural traditions from around the world!',
      partnerQuestionHindi:
        'यह सच में प्रेरणादायक है। मेरे देश में, हम फूलों के मुकुट और अलाव के साथ मिडसमर मनाते हैं। मुझे दुनिया भर की सांस्कृतिक परंपराओं के बारे में जानना बहुत पसंद है!',
      expectedFunction: 'Responding to cross-cultural sharing warmly and concluding the conversation',
      contextGoal: 'Express fascination with Midsummer and conclude the cultural exchange warmly',
      targetVocabulary: ['Midsummer', 'fascinating', 'tradition', 'thank you', 'share'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Midsummer sounds beautiful too! Thank you for sharing your traditions with me, Elena.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Flower crowns and bonfires sound wonderful! It is great how traditions bring communities together.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'That sounds like a magical festival Elena! I would love to see photos of Midsummer someday. Thank you for this lovely chat!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'cultural_appreciation',
          patterns: ['midsummer', 'beautiful', 'wonderful', 'magical', 'fascinating', 'great', 'bonfires', 'crowns'],
          required: true,
        },
        {
          name: 'warm_closing',
          patterns: ['thank you', 'thanks', 'sharing', 'chat', 'traditions', 'elena', 'together'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_191_4_short',
          pattern: /^(ok bye|cool)$/i,
          errorType: 'interaction',
          message: 'Show genuine cross-cultural interest and thank your exchange partner.',
          correctionPattern: 'That sounds wonderful, Elena! Thank you for sharing your traditions.',
        },
      ],
      remediationPractice: {
        id: 'rem_191_4',
        type: 'multiple_choice',
        prompt: 'Which response is the most courteous and culturally engaging?',
        options: [
          { id: 'r1', text: 'Midsummer sounds fascinating! Thank you for sharing your tradition with me.', isCorrect: true },
          { id: 'r2', text: 'Okay bye.', isCorrect: false },
        ],
        correctAnswer: 'Midsummer sounds fascinating! Thank you for sharing your tradition with me.',
        explanation: 'Warm, respectful cultural engagement.',
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
