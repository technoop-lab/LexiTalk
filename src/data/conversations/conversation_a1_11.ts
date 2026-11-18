import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_11: ConversationDefinition = {
  id: 'conv_a1_11',
  title: 'Dietary Preferences & Lifestyle Habits (Don’t / Doesn’t)',
  cefr: 'A1',
  unitId: 'unit_a1_1',
  lessonLinks: ['lesson_a1_1_11'],
  estimatedMinutes: 5,
  scenario:
    'You are attending a potluck dinner hosted by your friend Chloe. She asks about your dietary habits and what your family members do not eat or drink.',
  communicativeGoals: [
    'State personal negative habits using "I don\'t + [base verb]" (e.g. "I don\'t drink coffee", "I don\'t eat meat")',
    'State third-person negative habits using "He / She doesn\'t + [base verb]" (e.g. "My brother doesn\'t drink milk")',
    'Express negative food and lifestyle preferences clearly',
    'Recycle family members, food vocabulary, and routines from Lessons 3, 8, & 9',
  ],
  canDoStatements: [
    'Can express negative statements in Present Simple using "don\'t" and "doesn\'t" (CEFR A1)',
    'Can specify dietary restrictions and food dislikes',
    'Can talk about what other people do not eat or drink',
  ],
  characters: [
    {
      id: 'char_chloe',
      name: 'Chloe',
      role: 'Dinner Host & Friend',
      avatar: '🥗',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'eat',
        ipa: '/iːt/',
        partOfSpeech: 'verb',
        meaning: 'To put food into the mouth, chew and swallow it',
        exampleSentence: 'I don’t eat red meat.',
        translations: { hi: 'खाना' },
      },
      {
        word: 'drink',
        ipa: '/drɪŋk/',
        partOfSpeech: 'verb',
        meaning: 'To take liquid into the mouth and swallow',
        exampleSentence: 'She doesn’t drink coffee in the evening.',
        translations: { hi: 'पीना' },
      },
      {
        word: 'sugar',
        ipa: '/ˈʃʊɡər/',
        partOfSpeech: 'noun',
        meaning: 'A sweet crystalline substance obtained from sugarcane or sugar beet',
        exampleSentence: 'I don’t take sugar in my tea.',
        translations: { hi: 'चीनी / शक्कर' },
      },
      {
        word: 'vegetarian',
        ipa: '/ˌvedʒəˈteəriən/',
        partOfSpeech: 'noun',
        meaning: 'A person who does not eat meat or fish',
        exampleSentence: 'My sister is a vegetarian.',
        translations: { hi: 'शाकाहारी' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I don’t eat / drink...',
        functionCategory: 'Stating Personal Dislikes',
        exampleSentence: 'I don’t drink sugary soda.',
      },
      {
        phrase: 'He / She doesn’t like...',
        functionCategory: 'Stating Others’ Dislikes',
        exampleSentence: 'My brother doesn’t like spicy food.',
      },
      {
        phrase: 'We don’t usually...',
        functionCategory: 'Negative Frequency Habit',
        exampleSentence: 'We don’t usually eat dinner late.',
      },
      {
        phrase: 'Do you have any dietary restrictions?',
        functionCategory: 'Inquiring Restrictions',
        exampleSentence: 'Do you have any food allergies?',
      },
    ],
    grammar: {
      title: 'Present Simple Negation: Don’t vs. Doesn’t + Base Verb',
      conceptExplanation:
        'Use "don\'t" with I/You/We/They. Use "doesn\'t" with He/She/It. After don\'t and doesn\'t, ALWAYS use the base form of the verb (say "She doesn\'t drink", NOT "She doesn\'t drinks").',
      patternFormula: 'I/You/We/They + don’t + [Base Verb] | He/She/It + doesn’t + [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'He doesn’t drinks milk.',
          correct: 'He doesn’t drink milk.',
          explanation: 'The auxiliary "doesn\'t" already carries third-person marking; the main verb remains base.',
        },
        {
          incorrect: 'I am not eat meat.',
          correct: 'I don’t eat meat.',
          explanation: 'Use auxiliary "don\'t", not "am not", for action verbs in Present Simple.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Chloe',
        text: 'Welcome to the potluck! We have pasta, chicken, and fresh salad. Do you eat meat?',
        translation: 'पॉटलक में आपका स्वागत है! हमारे पास पास्ता, चिकन और ताज़ा सलाद है। क्या आप मांस खाते हैं?',
      },
      {
        speaker: 'You',
        text: 'Thank you Chloe! I don’t eat meat, so I will have some pasta and salad.',
        translation: 'धन्यवाद क्लोई! मैं मांस नहीं खाता, इसलिए मैं थोड़ा पास्ता और सलाद लूँगा।',
      },
      {
        speaker: 'Chloe',
        text: 'Good to know! Would you like coffee or tea? We have oat milk too.',
        translation: 'जानकर अच्छा लगा! क्या आप कॉफ़ी या चाय पसंद करेंगे? हमारे पास ओट मिल्क भी है।',
      },
      {
        speaker: 'You',
        text: 'Tea please! I don’t drink coffee at night because I don’t sleep well afterwards.',
        translation: 'चाय कृपया! मैं रात में कॉफ़ी नहीं पीता क्योंकि उसके बाद मुझे अच्छी नींद नहीं आती।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_11_1',
      type: 'multiple_choice',
      prompt: 'Select the correct negative sentence:',
      options: [
        { id: 'opt_1', text: 'I don’t eat seafood.', isCorrect: true },
        { id: 'opt_2', text: 'I am not eat seafood.', isCorrect: false },
        { id: 'opt_3', text: 'I doesn’t eat seafood.', isCorrect: false },
      ],
      correctAnswer: 'I don’t eat seafood.',
      explanation: 'Subject "I" takes "don’t" + base verb "eat".',
    },
    {
      id: 'cp_a1_11_2',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "My sister ___ drink cow’s milk."',
      options: [
        { id: 'opt_1', text: 'doesn’t', isCorrect: true },
        { id: 'opt_2', text: 'don’t', isCorrect: false },
        { id: 'opt_3', text: 'isn’t', isCorrect: false },
      ],
      correctAnswer: 'doesn’t',
      explanation: 'Third-person singular "My sister" takes "doesn’t".',
    },
    {
      id: 'cp_a1_11_3',
      type: 'multiple_choice',
      prompt: 'Which verb form follows "doesn’t"?',
      options: [
        { id: 'opt_1', text: 'He doesn’t like spicy food.', isCorrect: true },
        { id: 'opt_2', text: 'He doesn’t likes spicy food.', isCorrect: false },
        { id: 'opt_3', text: 'He doesn’t liking spicy food.', isCorrect: false },
      ],
      correctAnswer: 'He doesn’t like spicy food.',
      explanation: 'Always use the base form (like) after "doesn’t".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_11_1',
      scenarioContext: 'State your negative dietary preference clearly.',
      prompt: 'Build: "I don’t eat meat and I don’t drink coffee."',
      targetStructure: 'Subject + auxiliary don’t + verb 1 + object + conjunction + subject + don’t + verb 2 + object',
      wordBank: ['I', 'don’t', 'eat', 'meat', 'and', 'I', 'don’t', 'drink', 'coffee', 'am', 'doesn’t', 'not'],
      acceptableSolutions: [
        'I don’t eat meat and I don’t drink coffee',
        'I don’t eat meat and I don’t drink coffee.',
        'I do not eat meat and I do not drink coffee.',
      ],
      explanation: 'Uses "don’t eat" and "don’t drink" in parallel clauses.',
    },
    {
      id: 'sc_a1_11_2',
      scenarioContext: 'State what your roommate does not consume.',
      prompt: 'Build: "He doesn’t take sugar in his tea."',
      targetStructure: 'Subject + auxiliary doesn’t + base verb + noun + prepositional phrase',
      wordBank: ['He', 'doesn’t', 'take', 'sugar', 'in', 'his', 'tea', 'takes', 'don’t', 'is'],
      acceptableSolutions: [
        'He doesn’t take sugar in his tea',
        'He doesn’t take sugar in his tea.',
        'He does not take sugar in his tea.',
      ],
      explanation: 'Demonstrates third-person "doesn’t" with base verb "take".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_11_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi! So glad you could make it to dinner! We have grilled chicken and vegetarian pasta. Do you eat meat or have any food restrictions?',
      partnerAudioText: 'Hi! So glad you could make it to dinner! We have grilled chicken and vegetarian pasta. Do you eat meat or have any food restrictions?',
      partnerQuestionHindi: 'नमस्ते! बहुत खुशी हुई कि आप डिनर पर आ सके! हमारे पास ग्रिल्ड चिकन और शाकाहारी पास्ता है। क्या आप मांस खाते हैं या कोई परहेज़ है?',
      expectedFunction: 'Express Negative Diet Preference (Don’t)',
      contextGoal: 'Explain what you don\'t eat (e.g. "I don\'t eat meat", "I don\'t eat spicy food") and choose a meal.',
      targetVocabulary: ['don\'t', 'eat', 'meat', 'pasta', 'salad', 'vegetarian'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hi Chloe! I don’t eat meat, so the vegetarian pasta is perfect for me.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Hello! I eat chicken, but I don’t eat beef.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I don’t eat meat. I will have pasta please!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Negative Food Statement',
          patterns: [
            'don’t eat meat',
            "don't eat meat",
            'do not eat meat',
            'vegetarian pasta',
            'vegetarian',
            'no meat',
            'dont eat',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'am_not_eat_verb',
          pattern: /\bi am not eat\b|\bi not eat\b/i,
          errorType: 'grammar',
          message: 'Use "I don\'t eat", not "I am not eat" or "I not eat".',
          correctionPattern: 'I don’t eat [Food]',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_11_1',
        type: 'multiple_choice',
        prompt: 'Choose the correct negative sentence:',
        options: [
          { id: 'opt_1', text: 'I don’t eat pork or beef.', isCorrect: true },
          { id: 'opt_2', text: 'I am not eat pork or beef.', isCorrect: false },
          { id: 'opt_3', text: 'I no eat pork or beef.', isCorrect: false },
        ],
        correctAnswer: 'I don’t eat pork or beef.',
        explanation: 'Use auxiliary "don\'t" for Present Simple negation.',
      },
    },
    {
      id: 'turn_a1_11_2',
      turnIndex: 2,
      partnerPrompt:
        'Pasta it is! And what can I pour you to drink? I have hot coffee, herbal green tea, and soda.',
      partnerAudioText: 'Pasta it is! And what can I pour you to drink? I have hot coffee, herbal green tea, and soda.',
      partnerQuestionHindi: 'पास्ता ही सही! और आपके लिए पीने के लिए क्या डालूँ? मेरे पास गर्म कॉफ़ी, हर्बल ग्रीन टी और सोडा है।',
      expectedFunction: 'Express Drink Preference & Negative Habit',
      contextGoal: 'Ask for tea/water and mention that you don\'t drink coffee or soda in the evening.',
      targetVocabulary: ['don\'t', 'drink', 'coffee', 'tea', 'sugar', 'night', 'evening'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Herbal green tea please! I don’t drink coffee in the evening.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Tea would be lovely. I don’t drink sugary soda.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Water or tea please. I do not drink coffee at night.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Beverage Choice & Negative Habit',
          patterns: [
            'green tea',
            'tea please',
            'water please',
            "don't drink coffee",
            'don’t drink coffee',
            "don't drink soda",
            'do not drink coffee',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'dont_drinks_s',
          pattern: /\bi don't drinks\b|\bi don’t drinks\b/i,
          errorType: 'grammar',
          message: 'After "don\'t", always use the base form "drink" without "-s".',
          correctionPattern: 'I don’t drink [Beverage]',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_11_2',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "I don’t ___ coffee after 6 pm."',
        options: [
          { id: 'opt_1', text: 'drink', isCorrect: true },
          { id: 'opt_2', text: 'drinks', isCorrect: false },
          { id: 'opt_3', text: 'drinking', isCorrect: false },
        ],
        correctAnswer: 'drink',
        explanation: 'The verb following "don’t" must remain in its base form.',
      },
    },
    {
      id: 'turn_a1_11_3',
      turnIndex: 3,
      partnerPrompt:
        'Here is a hot cup of herbal tea and your delicious pasta. Please make yourself at home and enjoy the evening!',
      partnerAudioText: 'Here is a hot cup of herbal tea and your delicious pasta. Please make yourself at home and enjoy the evening!',
      partnerQuestionHindi: 'यह रही एक गर्म कप हर्बल चाय और आपका स्वादिष्ट पास्ता। कृपया इसे अपना ही घर समझें और शाम का आनंद लें!',
      expectedFunction: 'Warm Gratitude & Politeness',
      contextGoal: 'Thank Chloe warmly for the meal and hospitality.',
      targetVocabulary: ['thank', 'looks', 'delicious', 'wonderful', 'evening'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you so much Chloe! Everything looks delicious. Have a wonderful evening!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'This looks fantastic, thanks Chloe!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Thank you! Appreciate the warm hospitality.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Appreciation & Thanks',
          patterns: ['thank you', 'thanks', 'looks delicious', 'looks great', 'have a wonderful evening', 'enjoy'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_11_3',
        type: 'multiple_choice',
        prompt: 'Which phrase is polite when a host serves your food?',
        options: [
          { id: 'opt_1', text: 'Thank you so much, everything looks delicious!', isCorrect: true },
          { id: 'opt_2', text: 'Give food fast.', isCorrect: false },
          { id: 'opt_3', text: 'I am taking meal is now.', isCorrect: false },
        ],
        correctAnswer: 'Thank you so much, everything looks delicious!',
        explanation: 'Expresses genuine gratitude and appreciation for the food.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 75,
  },
};
