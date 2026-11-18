import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_43: ConversationDefinition = {
  id: 'conv_a1_43',
  title: 'Giving Advice, Suggestions & Recommendations (Should / Shouldn\'t, Why don\'t we...?)',
  cefr: 'A1',
  unitId: 'unit_a1_3',
  lessonLinks: ['lesson_a1_3_43'],
  estimatedMinutes: 5,
  scenario:
    'Your friend Liam is preparing for his first 10k charity run this coming weekend, but he feels exhausted and unsure about his training and nutrition. You give him constructive advice using "should", "shouldn\'t", and propose helpful ideas with "Why don\'t we...?" and "Let\'s...".',
  communicativeGoals: [
    'Give supportive health and lifestyle advice using "should" and "shouldn\'t + base verb"',
    'Make collaborative suggestions using "Why don\'t we / you...?" and "Let\'s + base verb"',
    'Ask for recommendations and advice ("What should I eat before the race?", "Should I stretch?")',
    'Respond politely to advice and formulate a sensible pre-race preparation plan',
  ],
  canDoStatements: [
    'Can give and ask for simple advice using modal "should" (CEFR A1.2)',
    'Can suggest joint activities and solutions using "Why don\'t we..." and "Let\'s..."',
    'Can discuss health, rest, and workout routines with a friend',
  ],
  characters: [
    {
      id: 'char_liam_run',
      name: 'Liam',
      role: 'Friend & Runner',
      avatar: '🏃‍♂️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'hydrate',
        ipa: '/ˈhaɪdreɪt/',
        partOfSpeech: 'verb',
        meaning: 'Cause to absorb water or other liquid; drink enough fluids',
        exampleSentence: 'You should hydrate well throughout the day before the race.',
        translations: { hi: 'पानी पीना / हाइड्रेट रहना' },
      },
      {
        word: 'stretch',
        ipa: '/strɛtʃ/',
        partOfSpeech: 'verb',
        meaning: 'Straighten or extend one\'s body or a part of one\'s body to full length',
        exampleSentence: 'You should stretch your calves and hamstrings after every run.',
        translations: { hi: 'खिंचाव करना / स्ट्रेच करना' },
      },
      {
        word: 'exhausted',
        ipa: '/ɪɡˈzɔːstɪd/',
        partOfSpeech: 'adjective',
        meaning: 'Completely drained of physical or mental energy',
        exampleSentence: 'I feel exhausted because I ran ten miles yesterday.',
        translations: { hi: 'पूरी तरह से थका हुआ' },
      },
      {
        word: 'rest',
        ipa: '/rɛst/',
        partOfSpeech: 'verb / noun',
        meaning: 'Cease work or movement in order to relax or recover strength',
        exampleSentence: 'You shouldn\'t run hard tomorrow; you should rest.',
        translations: { hi: 'आराम करना / विश्राम' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'You should drink plenty of water.',
        functionCategory: 'Health Advice',
        exampleSentence: 'You should drink lots of water and electrolytes.',
      },
      {
        phrase: 'You shouldn’t run too fast at the start.',
        functionCategory: 'Precautionary Advice',
        exampleSentence: 'You shouldn’t sprint in the first kilometer.',
      },
      {
        phrase: 'Why don’t we go for a light walk?',
        functionCategory: 'Gentle Suggestion',
        exampleSentence: 'Why don’t we do some gentle yoga together?',
      },
      {
        phrase: 'Let’s get a healthy pasta dinner.',
        functionCategory: 'Collaborative Proposal',
        exampleSentence: 'Let’s eat carbs together on Friday evening.',
      },
    ],
    grammar: {
      title: 'Giving Advice & Making Suggestions: Should + Verb / Shouldn\'t + Verb & Why don\'t we...?',
      conceptExplanation:
        'Use "should + base verb" to give recommendations or say what is a good idea (You should sleep early). Use "shouldn\'t + base verb" to advise against something (You shouldn\'t stay up late). For interactive proposals, use "Why don\'t we + base verb?" or "Let\'s + base verb". Never put "to" after "should" or "let\'s".',
      patternFormula: 'Subject + should / shouldn\'t + [Base Verb] | Why don\'t you / we + [Base Verb]? | Let\'s + [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'You should to drink more water.',
          correct: 'You should drink more water.',
          explanation: 'Never use "to" after modal "should": "should drink", not "should to drink".',
        },
        {
          incorrect: 'Let’s to eat pasta tonight.',
          correct: 'Let’s eat pasta tonight.',
          explanation: '"Let\'s" is followed directly by the base verb without "to".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Liam',
        text: 'Hey! My 10k charity run is in three days, but my legs feel so tight and I\'m completely exhausted from training. What should I do?',
        translation: 'अरे! मेरी 10 किलोमीटर चैरिटी दौड़ तीन दिनों में है, लेकिन मेरी टांगें बहुत कसी हुई लग रही हैं और मैं ट्रेनिंग से पूरी तरह थक गया हूँ। मुझे क्या करना चाहिए?',
      },
      {
        speaker: 'You',
        text: 'You shouldn\'t do any intense runs now. You should rest your muscles and drink plenty of water.',
        translation: 'आपको अब कोई तीव्र दौड़ नहीं लगानी चाहिए। आपको अपनी मांसपेशियों को आराम देना चाहिए और भरपूर पानी पीना चाहिए।',
      },
      {
        speaker: 'Liam',
        text: 'That makes sense. What about food on the night before the race? What should I eat?',
        translation: 'यह समझ में आता है। दौड़ से एक रात पहले भोजन के बारे में क्या? मुझे क्या खाना चाहिए?',
      },
      {
        speaker: 'You',
        text: 'You should eat healthy carbohydrates like pasta or rice, and why don\'t we do some gentle stretching together tomorrow?',
        translation: 'आपको पास्ता या चावल जैसे स्वस्थ कार्बोहाइड्रेट खाने चाहिए, और क्यों न हम कल एक साथ कुछ हल्का खिंचाव करें?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_43_1',
      type: 'fill_blank',
      prompt: 'Complete the advice: "You ___ sleep at least eight hours before race day."',
      options: [
        { id: 'opt_1', text: 'should', isCorrect: true },
        { id: 'opt_2', text: 'should to', isCorrect: false },
        { id: 'opt_3', text: 'are should', isCorrect: false },
      ],
      correctAnswer: 'should',
      explanation: '"Should" is followed directly by the base verb "sleep".',
    },
    {
      id: 'cp_a1_43_2',
      type: 'multiple_choice',
      prompt: 'How do you advise someone NOT to skip breakfast?',
      options: [
        { id: 'opt_1', text: 'You shouldn\'t skip breakfast on race morning.', isCorrect: true },
        { id: 'opt_2', text: 'You should not to skip breakfast.', isCorrect: false },
        { id: 'opt_3', text: 'You don\'t should skip breakfast.', isCorrect: false },
      ],
      correctAnswer: 'You shouldn\'t skip breakfast on race morning.',
      explanation: 'Use "shouldn\'t + base verb" for negative advice.',
    },
    {
      id: 'cp_a1_43_3',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly proposes a joint activity?',
      options: [
        { id: 'opt_1', text: 'Why don\'t we go for an easy jog in the morning?', isCorrect: true },
        { id: 'opt_2', text: 'Why don\'t we to go for an easy jog?', isCorrect: false },
        { id: 'opt_3', text: 'Why we not go for easy jog?', isCorrect: false },
      ],
      correctAnswer: 'Why don\'t we go for an easy jog in the morning?',
      explanation: '"Why don\'t we + base verb" is the correct suggestion pattern.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_43_1',
      scenarioContext: 'Give advice on resting and hydration.',
      prompt: 'Build: "You should rest and drink plenty of water."',
      targetStructure: 'Subject + should + base verb + coordinator + base verb + quantifier + prepositional phrase',
      wordBank: ['You', 'should', 'rest', 'and', 'drink', 'plenty', 'of', 'water', 'to', 'resting', 'shouldn\'t'],
      acceptableSolutions: [
        'You should rest and drink plenty of water',
        'You should rest and drink plenty of water.',
      ],
      explanation: 'Coordinates two base verbs after modal "should".',
    },
    {
      id: 'sc_a1_43_2',
      scenarioContext: 'Propose dinner together.',
      prompt: 'Build: "Why don\'t we eat pasta together on Friday?"',
      targetStructure: 'Why don\'t we + base verb + object + adverb + prepositional phrase?',
      wordBank: ['Why', 'don\'t', 'we', 'eat', 'pasta', 'together', 'on', 'Friday', 'eating', 'to', 'should'],
      acceptableSolutions: [
        'Why don\'t we eat pasta together on Friday',
        'Why don\'t we eat pasta together on Friday?',
      ],
      explanation: 'Suggestion structure with "Why don\'t we...".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_43_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! I really need your advice. My 10k run is on Sunday morning, but my legs feel heavy and I am thinking about running 12 kilometers tonight to practice. What do you think?',
      partnerAudioText:
        'Hey! I really need your advice. My 10k run is on Sunday morning, but my legs feel heavy and I am thinking about running 12 kilometers tonight to practice. What do you think?',
      partnerQuestionHindi:
        'अरे! मुझे वास्तव में आपकी सलाह की आवश्यकता है। मेरी 10 किमी दौड़ रविवार सुबह है, लेकिन मेरी टांगें भारी लग रही हैं और मैं अभ्यास के लिए आज रात 12 किमी दौड़ने की सोच रहा हूँ। आप क्या सोचते हैं?',
      expectedFunction: 'Give Strong Negative Advice (shouldn\'t run) & Positive Recommendation (should rest)',
      contextGoal:
        'Advise Liam that he shouldn\'t do a long run tonight, and that he should rest his legs and hydrate instead.',
      targetVocabulary: ["shouldn't run", 'should rest', 'hydrate', 'water', 'muscles', 'tired'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'You definitely shouldn’t run 12 kilometers tonight! Your legs need to recover. You should rest at home and drink plenty of water instead.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'You shouldn’t do a long run now. You should rest your muscles and hydrate well before Sunday.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'No way! You shouldn’t run tonight. You should rest and hydrate!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Rest & Caution Advice',
          patterns: [
            "shouldn't run",
            'should not run',
            'should rest',
            'hydrate',
            'drink water',
            'recover',
            'relax',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'should_to_rest',
          pattern: /\bshould to rest\b/i,
          errorType: 'grammar',
          message: 'Say "should rest", without "to".',
          correctionPattern: 'should rest',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_43_1',
        type: 'fill_blank',
        prompt: 'Choose the correct advice verb form: "You should ___ your legs tonight."',
        options: [
          { id: 'opt_1', text: 'rest', isCorrect: true },
          { id: 'opt_2', text: 'to rest', isCorrect: false },
          { id: 'opt_3', text: 'resting', isCorrect: false },
        ],
        correctAnswer: 'rest',
        explanation: '"Should" is followed by base verb "rest".',
      },
    },
    {
      id: 'turn_a1_43_2',
      turnIndex: 2,
      partnerPrompt:
        'You are totally right; I would probably injure myself! What about food the night before the race? What should I eat for dinner on Saturday evening?',
      partnerAudioText:
        'You are totally right; I would probably injure myself! What about food the night before the race? What should I eat for dinner on Saturday evening?',
      partnerQuestionHindi:
        'आप बिल्कुल सही कह रहे हैं; मैं शायद खुद को चोट पहुँचा लूँगा! दौड़ से एक रात पहले भोजन के बारे में क्या? मुझे शनिवार शाम को रात के खाने में क्या खाना चाहिए?',
      expectedFunction: 'Recommend Pre-Race Meal with "should eat" & Suggest Pasta',
      contextGoal:
        'Advise him to eat healthy carbohydrates (e.g. pasta, rice) and avoid greasy fast food or heavy spices.',
      targetVocabulary: ['should eat', 'pasta', 'carbohydrates', 'rice', "shouldn't eat", 'greasy food', 'energy'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'You should eat easily digestible carbs like pasta or brown rice with lean chicken. You shouldn’t eat oily fast food or heavy spices.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'You should eat pasta with light tomato sauce. You shouldn’t eat anything too greasy.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'You should eat pasta or rice for energy, and avoid spicy or oily foods.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Meal Recommendation',
          patterns: ['should eat', 'pasta', 'carbs', 'rice', "shouldn't eat", 'spicy', 'oily', 'energy'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_43_2',
        type: 'multiple_choice',
        prompt: 'Which advice sentence is phrased correctly?',
        options: [
          { id: 'opt_1', text: 'You should eat pasta for energy on Saturday night.', isCorrect: true },
          { id: 'opt_2', text: 'You should to eating pasta on Saturday.', isCorrect: false },
          { id: 'opt_3', text: 'You are should eat pasta Saturday.', isCorrect: false },
        ],
        correctAnswer: 'You should eat pasta for energy on Saturday night.',
        explanation: 'Should + base verb "eat".',
      },
    },
    {
      id: 'turn_a1_43_3',
      turnIndex: 3,
      partnerPrompt:
        'Pasta sounds delicious and easy to digest! What about tomorrow afternoon? I really want to do some light warm-up and stretching so my muscles don\'t stiffen up.',
      partnerAudioText:
        'Pasta sounds delicious and easy to digest! What about tomorrow afternoon? I really want to do some light warm-up and stretching so my muscles don\'t stiffen up.',
      partnerQuestionHindi:
        'पास्ता स्वादिष्ट और पचाने में आसान लगता है! कल दोपहर के बारे में क्या? मैं वास्तव में कुछ हल्का वार्म-अप और स्ट्रेचिंग करना चाहता हूँ ताकि मेरी मांसपेशियाँ अकड़ न जाएँ।',
      expectedFunction: 'Propose Joint Activity with "Why don\'t we...?" or "Let\'s..."',
      contextGoal:
        'Suggest doing gentle yoga or light stretching together in the park tomorrow afternoon.',
      targetVocabulary: ["why don't we", "let's", 'stretch together', 'park', 'gentle yoga', 'tomorrow afternoon'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Why don’t we meet at the park tomorrow at four and do some gentle stretching and yoga together? Let’s take it very easy!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Why don’t we do some light stretching together in the park tomorrow afternoon?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Let’s do a 20-minute stretching session together at the park tomorrow!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Joint Activity Suggestion',
          patterns: ["why don't we", "let's", 'stretch', 'yoga', 'park', 'together', 'meet at'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'lets_to_error',
          pattern: /\blet's to\b/i,
          errorType: 'grammar',
          message: 'Say "Let\'s stretch", not "Let\'s to stretch".',
          correctionPattern: "Let's stretch",
        },
      ],
      remediationPractice: {
        id: 'rem_a1_43_3',
        type: 'fill_blank',
        prompt: 'Fill in the suggestion: "Why don’t we ___ stretching in the park?"',
        options: [
          { id: 'opt_1', text: 'do some', isCorrect: true },
          { id: 'opt_2', text: 'to do', isCorrect: false },
          { id: 'opt_3', text: 'doing', isCorrect: false },
        ],
        correctAnswer: 'do some',
        explanation: '"Why don\'t we + base verb" (do).',
      },
    },
    {
      id: 'turn_a1_43_4',
      turnIndex: 4,
      partnerPrompt:
        'That would be fantastic! Meeting at the park tomorrow at four sounds perfect. I feel so much more confident and relaxed now. Thank you so much for the wonderful advice!',
      partnerAudioText:
        'That would be fantastic! Meeting at the park tomorrow at four sounds perfect. I feel so much more confident and relaxed now. Thank you so much for the wonderful advice!',
      partnerQuestionHindi:
        'यह शानदार रहेगा! कल चार बजे पार्क में मिलना बिल्कुल सही है। अब मैं बहुत अधिक आश्वस्त और तनावमुक्त महसूस कर रहा हूँ। इतनी बढ़िया सलाह के लिए आपका बहुत-बहुत धन्यवाद!',
      expectedFunction: 'Offer Encouragement & Conclude Planning',
      contextGoal:
        'Encourage Liam, express faith in his run, and confirm meeting at 4:00 PM tomorrow.',
      targetVocabulary: ['you’re welcome', 'do great', 'see you tomorrow', 'four o’clock', 'good luck', 'cheer for you'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'You are so welcome, Liam! You have trained hard and you will do great on Sunday. See you at the park tomorrow at four!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'You are welcome! You are going to do amazing. See you tomorrow at four o’clock!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Anytime! You’ll crush the 10k. See you at four tomorrow!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Encouragement & Farewell',
          patterns: ['welcome', 'do great', 'do amazing', 'see you tomorrow', 'four', 'good luck', 'crush it'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_43_4',
        type: 'multiple_choice',
        prompt: 'Which response closes the conversation with warm encouragement?',
        options: [
          { id: 'opt_1', text: 'You’re very welcome Liam, you will do great! See you tomorrow at four.', isCorrect: true },
          { id: 'opt_2', text: 'I am stopping talking now bye.', isCorrect: false },
          { id: 'opt_3', text: 'You run fast Sunday.', isCorrect: false },
        ],
        correctAnswer: 'You’re very welcome Liam, you will do great! See you tomorrow at four.',
        explanation: 'Supportive, natural, and polite.',
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
