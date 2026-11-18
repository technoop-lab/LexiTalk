import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_231: ConversationDefinition = {
  id: 'conv_a2_231',
  title: 'Cultural Festivals & Comparing Traditions',
  cefr: 'A2',
  unitId: 'unit_a2_16',
  lessonLinks: ['lesson_a2_16_231'],
  estimatedMinutes: 5,
  scenario:
    'You meet your coworker Aisha in the staff lounge during a cultural exchange week at work. You compare how harvest festivals, spring celebrations, and holiday traditions are observed across different cultures and regions, using comparative and superlative structures.',
  communicativeGoals: [
    'Compare cultural celebrations and festive customs using comparative adjectives ("more colorful than", "longer than", "as festive as")',
    'Express similarities and differences using "both", "neither", "whereas", and "similar to"',
    'Explain the cultural meaning behind traditional foods, music, and decorations',
    'Demonstrate intercultural curiosity and respectful communicative exchange in A2 English',
  ],
  canDoStatements: [
    'Can compare different cultural festivals and traditions',
    'Can use comparative and superlative forms to discuss customs and events',
    'Can express similarities and contrasts between regional practices',
  ],
  characters: [
    {
      id: 'char_aisha_colleague',
      name: 'Aisha',
      role: 'Coworker & Cultural Exchange Organizer',
      avatar: '🏮',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'harvest',
        ipa: '/ˈhɑːvɪst/',
        partOfSpeech: 'noun / verb',
        meaning: 'The process or period of gathering in crops, often celebrated with food festivals',
        exampleSentence: 'The harvest festival brings families together to give thanks for abundant food.',
        translations: { hi: 'फसल / कटाई का उत्सव (हार्वेस्ट)' },
      },
      {
        word: 'significance',
        ipa: '/sɪɡˈnɪfɪkəns/',
        partOfSpeech: 'noun',
        meaning: 'The meaning, importance, or cultural value of an event or symbol',
        exampleSentence: 'Lighting candles has a deep cultural significance in our festival.',
        translations: { hi: 'महत्व / सांस्कृतिक अर्थ (सिग्निफिकेंस)' },
      },
      {
        word: 'resemblance',
        ipa: '/rɪˈzembləns/',
        partOfSpeech: 'noun',
        meaning: 'A similarity in appearance, feature, or character between two things',
        exampleSentence: 'There is a strong resemblance between spring festivals across Asia.',
        translations: { hi: 'समानता / सादृश्य (रिज़ेंबलेंस)' },
      },
      {
        word: 'elaborate',
        ipa: '/ɪˈlæbərət/',
        partOfSpeech: 'adjective',
        meaning: 'Involving many carefully arranged parts or details; complex and decorative',
        exampleSentence: 'They wore elaborate traditional costumes with handcrafted embroidery.',
        translations: { hi: 'विस्तृत / भव्य / बारीक सजावट वाला (इलैबोरेट)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Both festivals celebrate the arrival of new beginnings.',
        functionCategory: 'Stating cultural similarities with "both"',
        exampleSentence: 'Both traditions emphasize sharing food with family.',
      },
      {
        phrase: 'Our spring festival is much more colorful than winter holidays.',
        functionCategory: 'Comparing celebrations with comparatives',
        exampleSentence: 'This parade is more elaborate than last year’s event.',
      },
      {
        phrase: 'In contrast to city events, village festivals last for three days.',
        functionCategory: 'Highlighting cultural contrasts',
        exampleSentence: 'Whereas some regions cook sweet rice, others prepare savory pies.',
      },
      {
        phrase: 'What is the main significance behind the lantern ceremony?',
        functionCategory: 'Inquiring about cultural meaning',
        exampleSentence: 'What does the golden drum symbolize during the dance?',
      },
    ],
    grammar: {
      title: 'Comparing Traditions with Comparatives, "Both", and "Whereas"',
      conceptExplanation:
        '1. Comparatives of Multi-syllable Adjectives: "more + adjective + than" ("more elaborate than", "more colorful than").\n2. Comparing Similarities: "Both [A] and [B] share...", "[A] is similar to [B] in that..."\n3. Contrasting with "whereas" / "while": "[A] happens in autumn, whereas [B] is celebrated in spring."',
      patternFormula: 'Both [Festivals] + [Verb] / [Festival A] is more [Adjective] than [Festival B], whereas [Contrast Clause]',
      contrastExamples: [
        {
          incorrect: 'Festival A is more older than Festival B.',
          correct: 'Festival A is older than Festival B.',
          explanation: 'Short one-syllable adjectives take "-er" (older), not "more older".',
        },
        {
          incorrect: 'Both festival has good food.',
          correct: 'Both festivals have delicious food.',
          explanation: '"Both" takes a plural noun ("festivals") and plural verb ("have").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Aisha',
        text: 'During our Cultural Exchange week, we’re comparing festivals. How is your regional harvest festival celebrated?',
        translation: 'हमारे सांस्कृतिक आदान-प्रदान सप्ताह के दौरान, हम त्योहारों की तुलना कर रहे हैं। आपका क्षेत्रीय फसल उत्सव कैसे मनाया जाता है?',
      },
      {
        speaker: 'Learner',
        text: 'Both our festivals celebrate gratitude and family. However, our harvest festival is more focused on traditional folk dances and sweet delicacies.',
        translation: 'हमारे दोनों त्योहार कृतज्ञता और परिवार का जश्न मनाते हैं। हालाँकि, हमारा फसल उत्सव पारंपरिक लोक नृत्यों और मीठे व्यंजनों पर अधिक केंद्रित है।',
      },
      {
        speaker: 'Aisha',
        text: 'That sounds delightful! In our hometown, the celebrations are equally elaborate, with colorful lantern processions.',
        translation: 'यह बहुत आनंददायक लगता है! हमारे गृहनगर में, रंग-बिरंगे लालटेन के जुलूसों के साथ उत्सव समान रूप से भव्य होते हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_231_1',
      type: 'fill_blank',
      prompt: 'Complete with the comparative: "The spring carnival is ______ (more colorful / colorfuller) than the winter market."',
      options: [
        { id: 'opt_1', text: 'more colorful', isCorrect: true },
        { id: 'opt_2', text: 'colorfuller', isCorrect: false },
        { id: 'opt_3', text: 'most colorful', isCorrect: false },
      ],
      correctAnswer: 'more colorful',
      explanation: 'Three-syllable adjective "colorful" takes "more colorful".',
    },
    {
      id: 'cp_231_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses a cultural similarity?',
      options: [
        { id: 'opt_1', text: 'Both festivals celebrate the arrival of the new season with traditional food.', isCorrect: true },
        { id: 'opt_2', text: 'Both festival celebrates the arrival of new season.', isCorrect: false },
        { id: 'opt_3', text: 'Both of festival is very celebrate.', isCorrect: false },
      ],
      correctAnswer: 'Both festivals celebrate the arrival of the new season with traditional food.',
      explanation: '"Both" is followed by a plural noun and plural verb.',
    },
    {
      id: 'cp_231_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [Both cultures / share a tradition of / lighting lanterns / during the celebration]',
      correctAnswer: 'Both cultures share a tradition of lighting lanterns during the celebration',
      explanation: '"Both + plural noun + share a tradition of + gerund phrase".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_231_1',
      prompt: 'Construct a sentence stating that both festivals celebrate community unity with elaborate feasts.',
      scenarioContext: 'Comparing traditions with Aisha.',
      targetStructure: 'Both festivals celebrate community unity and feature elaborate traditional meals.',
      wordBank: ['Both festivals celebrate', 'community unity and feature', 'elaborate traditional meals,', 'Aisha.'],
      acceptableSolutions: [
        'Both festivals celebrate community unity and feature elaborate traditional meals.',
        'Both festivals celebrate community with elaborate feasts.',
      ],
      explanation: 'Comparative structure using "both" and descriptive adjectives.',
    },
    {
      id: 'sc_231_2',
      prompt: 'Construct a sentence contrasting autumn harvest rituals with spring lantern ceremonies.',
      scenarioContext: 'Explaining seasonal contrasts.',
      targetStructure: 'Harvest festivals focus on gratitude, whereas spring festivals celebrate renewal and blossoms.',
      wordBank: ['Harvest festivals focus', 'on gratitude, whereas spring', 'festivals celebrate renewal', 'and blossoms,', 'Aisha.'],
      acceptableSolutions: [
        'Harvest festivals focus on gratitude, whereas spring festivals celebrate renewal and blossoms.',
        'Harvest festivals celebrate food, whereas spring festivals celebrate flowers.',
      ],
      explanation: 'Contrasting clause with "whereas".',
    },
  ],
  turns: [
    {
      id: 'turn_231_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! For our Cultural Exchange week in the office, I’m putting together a display comparing seasonal festivals from around the world. How does your favorite festival compare to other celebrations you know?',
      partnerAudioText:
        'Hi there! For our Cultural Exchange week in the office, I’m putting together a display comparing seasonal festivals from around the world. How does your favorite festival compare to other celebrations you know?',
      partnerQuestionHindi:
        'नमस्ते! कार्यालय में हमारे सांस्कृतिक आदान-प्रदान सप्ताह के लिए, मैं दुनिया भर के मौसमी त्योहारों की तुलना करने वाला एक प्रदर्शन तैयार कर रही हूँ। आपका पसंदीदा त्योहार आपके द्वारा जाने जाने वाले अन्य त्योहारों की तुलना में कैसा है?',
      expectedFunction: 'Greeting Aisha and comparing two festivals using comparative adjectives or "both"',
      contextGoal: 'Greet Aisha, mention a harvest or spring celebration, and use "both" or "more elaborate than"',
      targetVocabulary: ['Hi Aisha', 'harvest festival', 'both festivals', 'more colorful than', 'elaborate', 'celebrate'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hi Aisha! That sounds like a wonderful project. Both our harvest festival and New Year celebrations focus on family reunions, but the harvest festival is much more colorful and features elaborate folk dances.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Aisha! Our regional festival is very similar to other harvest celebrations. Both share traditional feasts, whereas ours has a larger street fair.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Hi Aisha! I love our autumn festival because it is more vibrant and festive than winter holidays, with beautiful outdoor lanterns.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_aisha',
          patterns: ['hi', 'hello', 'aisha', 'good morning'],
          required: true,
        },
        {
          name: 'comparative_festivals',
          patterns: ['both', 'more colorful', 'more elaborate', 'harvest', 'festival', 'similar', 'whereas'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_231_1_double_comparative',
          pattern: /more better|more cooler/i,
          errorType: 'grammar',
          message: 'Do not use "more" with short comparative adjectives: use "better" or "more colorful".',
          correctionPattern: 'Our harvest festival is more elaborate and colorful.',
        },
      ],
      remediationPractice: {
        id: 'rem_231_1',
        type: 'fill_blank',
        prompt: 'Fill in: "The celebration is ______ (more elaborate) than last year."',
        options: [
          { id: 'r1', text: 'more elaborate', isCorrect: true },
          { id: 'r2', text: 'more elaborater', isCorrect: false },
        ],
        correctAnswer: 'more elaborate',
        explanation: 'Use "more" with multi-syllable adjectives.',
      },
    },
    {
      id: 'turn_231_2',
      turnIndex: 2,
      partnerPrompt:
        'The folk dances and feasts sound incredible! What is the deeper cultural significance behind the traditional foods and symbols used during the celebration?',
      partnerAudioText:
        'The folk dances and feasts sound incredible! What is the deeper cultural significance behind the traditional foods and symbols used during the celebration?',
      partnerQuestionHindi:
        'लोक नृत्य और दावतें अविश्वसनीय लगती हैं! उत्सव के दौरान उपयोग किए जाने वाले पारंपरिक खाद्य पदार्थों और प्रतीकों के पीछे गहरा सांस्कृतिक महत्व क्या है?',
      expectedFunction: 'Explaining the cultural meaning and symbolism behind traditional dishes and rituals',
      contextGoal: 'Explain that special dishes symbolize prosperity, health, and gratitude for a bountiful harvest',
      targetVocabulary: ['significance', 'symbolize', 'prosperity', 'gratitude', 'sweet dishes', 'traditional'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'The special sweet dishes symbolize prosperity and sweet beginnings for the upcoming year. Sharing them with neighbors represents mutual gratitude and strong community bonds.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'The traditional rice pudding has great cultural significance; it represents abundance and thanksgiving for nature’s generosity.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Lighting lamps symbolizes hope, while sharing festive sweets brings good fortune and joy to every household.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'cultural_significance',
          patterns: ['significance', 'symbolize', 'prosperity', 'gratitude', 'sweets', 'traditional', 'community', 'abundance'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_231_2_symbolize_form',
          pattern: /food is symbolize/i,
          errorType: 'grammar',
          message: 'Use active verb "symbolizes": "The special dish symbolizes prosperity."',
          correctionPattern: 'The traditional food symbolizes abundance and joy.',
        },
      ],
      remediationPractice: {
        id: 'rem_231_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly explains the cultural significance?',
        options: [
          { id: 'r1', text: 'Sharing sweets symbolizes prosperity and strong family bonds.', isCorrect: true },
          { id: 'r2', text: 'Sharing sweets is symbolize for happiness.', isCorrect: false },
        ],
        correctAnswer: 'Sharing sweets symbolizes prosperity and strong family bonds.',
        explanation: 'Active verb "symbolizes" + abstract nouns.',
      },
    },
    {
      id: 'turn_231_3',
      turnIndex: 3,
      partnerPrompt:
        'Thank you so much for sharing that! It will make our Cultural Exchange bulletin board so rich and engaging. Would you like to bring some photos or a recipe card to include on our display table?',
      partnerAudioText:
        'Thank you so much for sharing that! It will make our Cultural Exchange bulletin board so rich and engaging. Would you like to bring some photos or a recipe card to include on our display table?',
      partnerQuestionHindi:
        'वह साझा करने के लिए आपका बहुत-बहुत धन्यवाद! यह हमारे सांस्कृतिक आदान-प्रदान बुलेटिन बोर्ड को बहुत समृद्ध और आकर्षक बना देगा। क्या आप हमारे प्रदर्शन टेबल पर शामिल करने के लिए कुछ तस्वीरें या एक रेसिपी कार्ड लाना चाहेंगे?',
      expectedFunction: 'Agreeing enthusiastically to contribute photos or recipes and thanking Aisha for organizing the project',
      contextGoal: 'Offer to bring photos and a traditional sweet recipe, and thank Aisha for her hard work',
      targetVocabulary: ['photos', 'recipe card', 'traditional sweets', 'display table', 'Thank you Aisha', 'delighted'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I would be delighted to bring some festival photos and a traditional sweet recipe card tomorrow morning! Thank you for organizing this wonderful exchange, Aisha.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Certainly! I have some great photos of the lantern procession and the recipe for our festive dish. I’ll bring them tomorrow.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I’d love to contribute! I’ll prepare a recipe card and print a few festival pictures for the display table.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'contribution_and_thanks',
          patterns: ['photos', 'recipe', 'bring', 'tomorrow', 'thank you', 'aisha', 'delighted', 'display'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_231_3_short_yes',
          pattern: /^yes i bring\.$/i,
          errorType: 'interaction',
          message: 'Provide a complete, polite response: "I’d love to bring festival photos and a recipe card, Aisha!"',
          correctionPattern: 'I would be delighted to bring photos and a recipe card tomorrow.',
        },
      ],
      remediationPractice: {
        id: 'rem_231_3',
        type: 'fill_blank',
        prompt: 'Fill in: "I would be delighted ______ (to contribute) to the display."',
        options: [
          { id: 'r1', text: 'to contribute', isCorrect: true },
          { id: 'r2', text: 'contributing for', isCorrect: false },
        ],
        correctAnswer: 'to contribute',
        explanation: '"Delighted" is followed by a to-infinitive.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 70,
  },
};
