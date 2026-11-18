import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_183: ConversationDefinition = {
  id: 'conv_a2_183',
  title: 'World Cuisines, Flavors, Ingredients & Cooking Techniques',
  cefr: 'A2',
  unitId: 'unit_a2_13',
  lessonLinks: ['lesson_a2_13_183'],
  estimatedMinutes: 5,
  scenario:
    'You are in a weekend cooking workshop taught by Chef Marco. You are learning how to prepare a traditional Mediterranean pasta sauce using fresh aromatic herbs, garlic, ripe tomatoes, and step-by-step culinary sequencers.',
  communicativeGoals: [
    'Explain recipe steps using sequence adverbs (First, Next, Then, After that, Finally)',
    'Use cooking imperative verbs (chop, slice, heat, stir, simmer, garnish)',
    'Describe flavor profiles (savory, spicy, fresh, aromatic, rich)',
    'Ask clarifying questions about cooking time, heat levels, and ingredients',
  ],
  canDoStatements: [
    'Can describe a cooking recipe step-by-step using sequence connectors',
    'Can use culinary imperatives to give and follow kitchen instructions',
    'Can discuss taste preferences and ingredients in everyday English',
  ],
  characters: [
    {
      id: 'char_chef_marco',
      name: 'Chef Marco',
      role: 'Culinary Workshop Instructor',
      avatar: '🍲',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'ingredient',
        ipa: '/ɪnˈɡriːdiənt/',
        partOfSpeech: 'noun',
        meaning: 'Any of the foods or substances that are combined to make a particular dish',
        exampleSentence: 'Fresh basil is an essential ingredient in this sauce.',
        translations: { hi: 'सामग्री / घटक' },
      },
      {
        word: 'simmer',
        ipa: '/ˈsɪmə(r)/',
        partOfSpeech: 'verb',
        meaning: 'To cook gently in a liquid just below the boiling point',
        exampleSentence: 'Simmer the sauce on low heat for fifteen minutes.',
        translations: { hi: 'धीमी आँच पर पकाना' },
      },
      {
        word: 'savory',
        ipa: '/ˈseɪvəri/',
        partOfSpeech: 'adjective',
        meaning: 'Belonging to the category that is salty or spicy rather than sweet',
        exampleSentence: 'This savory dish is packed with herbs and garlic.',
        translations: { hi: 'स्वादिष्ट / नमकीन-मसालेदार' },
      },
      {
        word: 'garnish',
        ipa: '/ˈɡɑːnɪʃ/',
        partOfSpeech: 'verb',
        meaning: 'To decorate or embellish something, especially food',
        exampleSentence: 'Finally, garnish the plate with freshly grated cheese.',
        translations: { hi: 'सजाना (भोजन पर डालना)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'First, chop the onions and garlic finely.',
        functionCategory: 'Initial recipe instruction',
        exampleSentence: 'First, wash all vegetables thoroughly.',
      },
      {
        phrase: 'Next, heat two tablespoons of olive oil in the pan.',
        functionCategory: 'Subsequent step with quantity',
        exampleSentence: 'Next, add the sliced mushrooms.',
      },
      {
        phrase: 'How long should we let the sauce simmer?',
        functionCategory: 'Asking cooking duration',
        exampleSentence: 'How long does this take to bake?',
      },
      {
        phrase: 'Finally, sprinkle fresh basil on top before serving.',
        functionCategory: 'Concluding culinary step',
        exampleSentence: 'Finally, serve the soup hot with crusty bread.',
      },
    ],
    grammar: {
      title: 'Sequencers & Imperatives in Recipe Instructions',
      conceptExplanation:
        '1. Sequence Adverbs establish chronological order:\n   - "First, ..."\n   - "Next, ..." / "Then, ..."\n   - "After that, ..."\n   - "Finally, ..."\n2. Imperative Verbs give direct instructions (Base form of verb without subject):\n   - "Chop the tomatoes."\n   - "Do not overheat the oil."\n   - "Add a pinch of black pepper."',
      patternFormula: '[Sequence Adverb], [Base Verb / Imperative] + [Object / Ingredient] + [Modifier]',
      contrastExamples: [
        {
          incorrect: 'First you are chopping onions and next you frying.',
          correct: 'First, chop the onions, and next, fry them in olive oil.',
          explanation: 'Use the base imperative verb form when giving instructions.',
        },
        {
          incorrect: 'After that, simmering the tomatoes.',
          correct: 'After that, simmer the tomatoes on low heat.',
          explanation: 'Imperatives use bare infinitive (simmer), not gerund (-ing).',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Chef Marco',
        text: 'Welcome everyone! Today we are making classic tomato basil sauce. Who can tell me the first step?',
        translation: 'आप सभी का स्वागत है! आज हम क्लासिक टमाटर तुलसी सॉस बना रहे हैं। मुझे पहला कदम कौन बता सकता है?',
      },
      {
        speaker: 'Learner',
        text: 'First, heat the olive oil and gently fry the chopped garlic.',
        translation: 'सबसे पहले, जैतून का तेल गर्म करें और कटे हुए लहसुन को धीरे से भूनें।',
      },
      {
        speaker: 'Chef Marco',
        text: 'Exactly! Then we add the crushed tomatoes and simmer on low heat.',
        translation: 'बिल्कुल सही! फिर हम पिसे हुए टमाटर डालते हैं और धीमी आँच पर पकाते हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_183_1',
      type: 'fill_blank',
      prompt: 'Complete the sequence: "______, heat the olive oil in a large skillet."',
      options: [
        { id: 'opt_1', text: 'First', isCorrect: true },
        { id: 'opt_2', text: 'Finally', isCorrect: false },
        { id: 'opt_3', text: 'Last', isCorrect: false },
      ],
      correctAnswer: 'First',
      explanation: 'Use "First" to introduce the initial step of a recipe.',
    },
    {
      id: 'cp_183_2',
      type: 'multiple_choice',
      prompt: 'Which sentence uses an imperative correctly for cooking?',
      options: [
        { id: 'opt_1', text: 'Stir the sauce continuously for five minutes.', isCorrect: true },
        { id: 'opt_2', text: 'You stirring the sauce continuously for five minutes.', isCorrect: false },
        { id: 'opt_3', text: 'To stir the sauce continuously for five minutes.', isCorrect: false },
      ],
      correctAnswer: 'Stir the sauce continuously for five minutes.',
      explanation: 'Imperative sentences start directly with the base verb "Stir".',
    },
    {
      id: 'cp_183_3',
      type: 'chunk_order',
      prompt: 'Put the instructions in order: [the pasta / boil / in salted water / then]',
      correctAnswer: 'then boil the pasta in salted water',
      explanation: 'Sequencer + imperative verb + object + prepositional phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_183_1',
      prompt: 'Construct a recipe instruction using "Next" to add crushed tomatoes and stir.',
      scenarioContext: 'Explaining a cooking step to Chef Marco.',
      targetStructure: 'Next, add the crushed tomatoes and stir gently.',
      wordBank: ['Next,', 'add', 'the crushed', 'tomatoes', 'and', 'stir gently', 'in the pot'],
      acceptableSolutions: [
        'Next, add the crushed tomatoes and stir gently.',
        'Next, add crushed tomatoes and stir.',
      ],
      explanation: 'Start with sequencer "Next," followed by base verbs "add" and "stir".',
    },
    {
      id: 'sc_183_2',
      prompt: 'Construct a final step using "Finally" to garnish the dish with fresh basil.',
      scenarioContext: 'Finishing the Mediterranean dish.',
      targetStructure: 'Finally, garnish the dish with fresh basil leaves.',
      wordBank: ['Finally,', 'garnish', 'the dish', 'with', 'fresh basil', 'leaves', 'before serving'],
      acceptableSolutions: [
        'Finally, garnish the dish with fresh basil leaves.',
        'Finally, garnish with fresh basil.',
      ],
      explanation: '"Finally," introduces the concluding step of the culinary process.',
    },
  ],
  turns: [
    {
      id: 'turn_183_1',
      turnIndex: 1,
      partnerPrompt:
        'Welcome to our Mediterranean kitchen class! We have fresh garlic, ripe tomatoes, olive oil, and herbs on our prep table. How should we begin preparing our signature sauce?',
      partnerAudioText:
        'Welcome to our Mediterranean kitchen class! We have fresh garlic, ripe tomatoes, olive oil, and herbs on our prep table. How should we begin preparing our signature sauce?',
      partnerQuestionHindi:
        'हमारी मेडिटेरेनियन किचन क्लास में आपका स्वागत है! हमारी टेबल पर ताजा लहसुन, पके टमाटर, जैतून का तेल और जड़ी-बूटियाँ हैं। हमें अपनी सॉस तैयार करना कैसे शुरू करना चाहिए?',
      expectedFunction: 'Giving the initial step using "First" and an imperative verb',
      contextGoal: 'Explain the first step (e.g. peel and chop the garlic, heat olive oil in the pan)',
      targetVocabulary: ['first', 'chop', 'garlic', 'oil', 'heat'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'First, chop the garlic finely and heat two spoons of olive oil.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'First, we should slice the garlic and warm the pan gently.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'First, chop the garlic and onions, then heat the olive oil on medium heat.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'first_sequencer',
          patterns: ['first', 'begin', 'start', 'firstly'],
          required: true,
        },
        {
          name: 'initial_prep',
          patterns: ['chop', 'slice', 'cut', 'garlic', 'oil', 'heat', 'pan', 'onions'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_183_1_verb_form',
          pattern: /first chopping/i,
          errorType: 'grammar',
          message: 'Use the base form of the verb for instructions: "First, chop...".',
          correctionPattern: 'First, chop...',
        },
      ],
      remediationPractice: {
        id: 'rem_183_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "First, ______ (wash) the vegetables."',
        options: [
          { id: 'r1', text: 'wash', isCorrect: true },
          { id: 'r2', text: 'washing', isCorrect: false },
        ],
        correctAnswer: 'wash',
        explanation: 'Imperative instructions use the base verb.',
      },
    },
    {
      id: 'turn_183_2',
      turnIndex: 2,
      partnerPrompt:
        'Great technique! The garlic smells delicious. Now, what do we do next with the ripe tomatoes and seasonings?',
      partnerAudioText:
        'Great technique! The garlic smells delicious. Now, what do we do next with the ripe tomatoes and seasonings?',
      partnerQuestionHindi:
        'बढ़िया तकनीक! लहसुन की खुशबू बहुत अच्छी आ रही है। अब, पके टमाटर और मसालों के साथ हमें आगे क्या करना चाहिए?',
      expectedFunction: 'Giving the next step using "Next" or "Then" with cooking verbs',
      contextGoal: 'Instruct to add the tomatoes, add a pinch of salt/pepper, and stir',
      targetVocabulary: ['next', 'then', 'add', 'tomatoes', 'salt', 'stir'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Next, add the chopped tomatoes and a pinch of salt, then stir well.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Then, put the ripe tomatoes into the pan and mix everything together.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Next, add the crushed tomatoes with black pepper and stir on medium heat.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'subsequent_sequencer',
          patterns: ['next', 'then', 'after that'],
          required: true,
        },
        {
          name: 'add_and_stir',
          patterns: ['add', 'put', 'tomatoes', 'salt', 'pepper', 'stir', 'mix'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_183_2_pinch',
          pattern: /a punch of salt/i,
          errorType: 'vocabulary',
          message: 'The correct expression for a small quantity of seasoning is "a pinch of salt".',
          correctionPattern: 'a pinch of salt',
        },
      ],
      remediationPractice: {
        id: 'rem_183_2',
        type: 'multiple_choice',
        prompt: 'Which phrase describes a tiny amount of spice?',
        options: [
          { id: 'r1', text: 'a pinch of salt', isCorrect: true },
          { id: 'r2', text: 'a punch of salt', isCorrect: false },
        ],
        correctAnswer: 'a pinch of salt',
        explanation: 'We say "a pinch of salt".',
      },
    },
    {
      id: 'turn_183_3',
      turnIndex: 3,
      partnerPrompt:
        'The sauce is bubbling nicely. After adding the seasonings, how long should we let it simmer on the stove, and at what heat level?',
      partnerAudioText:
        'The sauce is bubbling nicely. After adding the seasonings, how long should we let it simmer on the stove, and at what heat level?',
      partnerQuestionHindi:
        'सॉस अच्छी तरह पक रही है। मसाले डालने के बाद, हमें इसे चूल्हे पर कितनी देर और किस आँच पर पकने देना चाहिए?',
      expectedFunction: 'Giving duration and heat instructions using "After that" and "simmer"',
      contextGoal: 'Explain that the sauce should simmer on low heat for 15 to 20 minutes',
      targetVocabulary: ['after that', 'simmer', 'low heat', 'minutes', 'cover'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'After that, reduce the heat and let the sauce simmer for fifteen minutes.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'We should simmer it on low heat for about twenty minutes until thick.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'After that, turn the flame to low, cover the pan, and simmer for fifteen to twenty minutes.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'simmer_action',
          patterns: ['simmer', 'cook', 'boil', 'heat', 'flame', 'low'],
          required: true,
        },
        {
          name: 'time_frame',
          patterns: ['minutes', '15', '20', 'fifteen', 'twenty', 'thick', 'time'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_183_3_heat_prep',
          pattern: /in low heat/i,
          errorType: 'grammar',
          message: 'Use the preposition "on" with cooking heat levels (on low heat).',
          correctionPattern: 'on low heat',
        },
      ],
      remediationPractice: {
        id: 'rem_183_3',
        type: 'fill_blank',
        prompt: 'Fill in the preposition: "Cook the sauce ______ low heat."',
        options: [
          { id: 'r1', text: 'on', isCorrect: true },
          { id: 'r2', text: 'in', isCorrect: false },
        ],
        correctAnswer: 'on',
        explanation: 'We say "on low heat" / "on medium heat".',
      },
    },
    {
      id: 'turn_183_4',
      turnIndex: 4,
      partnerPrompt:
        'Look at that rich, savory red color! The sauce is finished. How do we present and garnish our pasta dish before serving it to our guests?',
      partnerAudioText:
        'Look at that rich, savory red color! The sauce is finished. How do we present and garnish our pasta dish before serving it to our guests?',
      partnerQuestionHindi:
        'उस समृद्ध, स्वादिष्ट लाल रंग को देखिए! सॉस तैयार है। मेहमानों को परोसने से पहले हम अपने पास्ता को कैसे सजाएँ और प्रस्तुत करें?',
      expectedFunction: 'Giving final garnishing and serving steps using "Finally"',
      contextGoal: 'Explain the final step with "Finally" (e.g. mix with pasta, garnish with fresh basil and cheese)',
      targetVocabulary: ['finally', 'garnish', 'basil', 'cheese', 'serve'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Finally, mix with warm pasta, garnish with fresh basil, and serve immediately.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Finally, sprinkle grated Parmesan cheese and fresh basil leaves on top.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Finally, pour the sauce over fresh pasta and garnish with basil leaves before serving. Bon appétit!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'final_step',
          patterns: ['finally', 'lastly', 'end', 'serve'],
          required: true,
        },
        {
          name: 'garnish_elements',
          patterns: ['garnish', 'basil', 'cheese', 'parmesan', 'serve', 'top', 'leaves', 'plate'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_183_4_finally',
          pattern: /at final/i,
          errorType: 'vocabulary',
          message: 'Use "Finally," or "Lastly," to introduce the concluding step.',
          correctionPattern: 'Finally,',
        },
      ],
      remediationPractice: {
        id: 'rem_183_4',
        type: 'multiple_choice',
        prompt: 'Which word properly introduces the final step?',
        options: [
          { id: 'r1', text: 'Finally', isCorrect: true },
          { id: 'r2', text: 'At last moment', isCorrect: false },
        ],
        correctAnswer: 'Finally',
        explanation: '"Finally" is the standard sequence adverb for the last step.',
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
