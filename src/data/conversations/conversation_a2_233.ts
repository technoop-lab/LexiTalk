import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_233: ConversationDefinition = {
  id: 'conv_a2_233',
  title: 'Local Environment, Nature & Conservation',
  cefr: 'A2',
  unitId: 'unit_a2_16',
  lessonLinks: ['lesson_a2_16_233'],
  estimatedMinutes: 5,
  scenario:
    'You meet Elena, a local wildlife reserve ranger, at the community conservation center near the bird sanctuary. You talk about regional flora and fauna, discuss environmental threats like habitat loss and water pollution, and explain why community-driven conservation matters.',
  communicativeGoals: [
    'Describe natural habitats, local wildlife, and endangered ecosystems using clear descriptive adjectives',
    'Express environmental consequence using conditional structures ("If wetlands disappear, migrating birds will lose their nesting grounds")',
    'Discuss conservation initiatives such as tree planting, wetland restoration, and nature walks',
    'Demonstrate nature vocabulary and ecological awareness in A2 English',
  ],
  canDoStatements: [
    'Can describe local nature reserves, animals, and plant habitats',
    'Can explain cause and effect regarding environmental conservation using "if" clauses',
    'Can discuss human impact on natural environments and propose protective measures',
  ],
  characters: [
    {
      id: 'char_elena_ranger',
      name: 'Elena',
      role: 'Nature Reserve Ranger & Wildlife Educator',
      avatar: '🌲',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'habitat',
        ipa: '/ˈhæbɪtæt/',
        partOfSpeech: 'noun',
        meaning: 'The natural home or environment of an animal, plant, or organism',
        exampleSentence: 'The wetland reserve provides a vital habitat for rare migratory birds.',
        translations: { hi: 'प्राकृतिक आवास / वासस्थान (हैबिटेट)' },
      },
      {
        word: 'biodiversity',
        ipa: '/ˌbaɪəʊdaɪˈvɜːsəti/',
        partOfSpeech: 'noun',
        meaning: 'The variety of plant and animal life in a particular habitat or in the world',
        exampleSentence: 'Protecting native forests preserves rich biodiversity and clean air.',
        translations: { hi: 'जैव विविधता (बायोडाइवर्सिटी)' },
      },
      {
        word: 'endangered',
        ipa: '/ɪnˈdeɪndʒəd/',
        partOfSpeech: 'adjective',
        meaning: 'Seriously at risk of extinction due to human activity or climate changes',
        exampleSentence: 'Several endangered bird species nest along the protected riverbanks.',
        translations: { hi: 'लुप्तप्राय / संकटग्रस्त (एनडेंजर्ड)' },
      },
      {
        word: 'conservation',
        ipa: '/ˌkɒnsəˈveɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The prevention of wasteful use or destruction of natural resources and wildlife',
        exampleSentence: 'Local volunteers are actively engaged in wetland conservation.',
        translations: { hi: 'संरक्षण / संवर्धन (कंजर्वेशन)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'If we protect the wetlands, migratory birds will return every spring.',
        functionCategory: 'Real conditional for ecological cause and effect',
        exampleSentence: 'If we plant native trees, local wildlife will thrive.',
      },
      {
        phrase: 'Habitat loss is one of the biggest threats to wildlife.',
        functionCategory: 'Explaining environmental challenges',
        exampleSentence: 'Plastic pollution harms river ecosystems and marine animals.',
      },
      {
        phrase: 'Our community organizes guided nature trails on weekends.',
        functionCategory: 'Describing local outdoor education',
        exampleSentence: 'Volunteers conduct wildlife bird-watching surveys every month.',
      },
      {
        phrase: 'What can visitors do to minimize their impact on the reserve?',
        functionCategory: 'Asking about reserve rules and ethics',
        exampleSentence: 'How can we help clean up the riverbank trails?',
      },
    ],
    grammar: {
      title: 'First Conditional for Environmental Consequences & Causes',
      conceptExplanation:
        '1. First Conditional Formula: "If + present simple, will + base verb" expresses real future outcomes based on current ecological actions ("If we reduce pollution, the river will recover").\n2. In negative conditions: "Unless we protect habitats, biodiversity will decline" (= "If we do not protect...").\n3. Cause and Effect connectives: "because of habitat loss", "leads to extinction".',
      patternFormula: 'If + [Present Simple Clause], [Subject] will + [Base Verb] / Unless + [Present Simple], [Subject] will + [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'If we will protect nature, birds will return.',
          correct: 'If we protect nature, birds will return.',
          explanation: 'Never use "will" inside the if-clause.',
        },
        {
          incorrect: 'Habitat loss lead to endangered animals.',
          correct: 'Habitat loss leads to endangered animals.',
          explanation: 'Third-person singular agreement: "Habitat loss leads".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Elena',
        text: 'Welcome to the Lakeside Wildlife Reserve! Have you had a chance to explore our nature trails and wetland habitats?',
        translation: 'लेकसाइड वन्यजीव अभयारण्य में आपका स्वागत है! क्या आपको हमारे प्रकृति ट्रेल्स और आर्द्रभूमि आवासों का पता लगाने का अवसर मिला है?',
      },
      {
        speaker: 'Learner',
        text: 'Hello Elena! Yes, I walked by the wetlands. If we protect these habitats, endangered migratory birds will continue nesting here safely.',
        translation: 'नमस्ते ऐलेना! हाँ, मैं आर्द्रभूमि के पास से गुज़रा। यदि हम इन आवासों की रक्षा करते हैं, तो लुप्तप्राय प्रवासी पक्षी यहाँ सुरक्षित रूप से घोंसला बनाना जारी रखेंगे।',
      },
      {
        speaker: 'Elena',
        text: 'Exactly! Community conservation efforts make a huge difference in preserving local biodiversity.',
        translation: 'बिल्कुल! सामुदायिक संरक्षण प्रयास स्थानीय जैव विविधता के संरक्षण में बहुत बड़ा अंतर लाते हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_233_1',
      type: 'fill_blank',
      prompt: 'Complete with the correct conditional form: "If we ______ (protect / will protect) the forest, native deer will thrive."',
      options: [
        { id: 'opt_1', text: 'protect', isCorrect: true },
        { id: 'opt_2', text: 'will protect', isCorrect: false },
        { id: 'opt_3', text: 'protected', isCorrect: false },
      ],
      correctAnswer: 'protect',
      explanation: 'In a first conditional, the if-clause uses present simple.',
    },
    {
      id: 'cp_233_2',
      type: 'multiple_choice',
      prompt: 'Which word means animals or plants that are in danger of dying out?',
      options: [
        { id: 'opt_1', text: 'Endangered', isCorrect: true },
        { id: 'opt_2', text: 'Enthusiastic', isCorrect: false },
        { id: 'opt_3', text: 'Considerate', isCorrect: false },
      ],
      correctAnswer: 'Endangered',
      explanation: '"Endangered" refers to species at risk of extinction.',
    },
    {
      id: 'cp_233_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [If we keep trails clean / local wildlife / will remain safe / and healthy]',
      correctAnswer: 'If we keep trails clean local wildlife will remain safe and healthy',
      explanation: 'First conditional clause structure.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_233_1',
      prompt: 'Construct a sentence explaining that if we conserve natural wetlands, endangered bird species will thrive.',
      scenarioContext: 'Talking to Ranger Elena.',
      targetStructure: 'If we conserve local wetlands, endangered birds will thrive and nest safely.',
      wordBank: ['If we conserve local', 'wetlands, endangered birds', 'will thrive and nest safely,', 'Elena.'],
      acceptableSolutions: [
        'If we conserve local wetlands, endangered birds will thrive and nest safely.',
        'If we protect wetlands, endangered birds will thrive.',
      ],
      explanation: 'First conditional with environmental vocabulary.',
    },
    {
      id: 'sc_233_2',
      prompt: 'Construct a sentence stating that community tree planting helps restore damaged wildlife habitats.',
      scenarioContext: 'Discussing volunteer conservation.',
      targetStructure: 'Community tree planting helps restore damaged habitats and preserves biodiversity.',
      wordBank: ['Community tree planting', 'helps restore damaged habitats', 'and preserves biodiversity,', 'Elena.'],
      acceptableSolutions: [
        'Community tree planting helps restore damaged habitats and preserves biodiversity.',
        'Tree planting helps restore natural habitats and protects biodiversity.',
      ],
      explanation: 'Present simple statement of environmental action and consequence.',
    },
  ],
  turns: [
    {
      id: 'turn_233_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello there! Welcome to the Lakeside Wildlife Reserve. I’m Ranger Elena. Are you here for birdwatching or exploring our natural wetland habitats today?',
      partnerAudioText:
        'Hello there! Welcome to the Lakeside Wildlife Reserve. I’m Ranger Elena. Are you here for birdwatching or exploring our natural wetland habitats today?',
      partnerQuestionHindi:
        'नमस्ते! लेकसाइड वन्यजीव अभयारण्य में आपका स्वागत है। मैं रेंजर ऐलेना हूँ। क्या आप आज पक्षी देखने या हमारे प्राकृतिक आर्द्रभूमि आवासों की खोज करने आए हैं?',
      expectedFunction: 'Greeting Elena and discussing interest in the reserve’s biodiversity and endangered wildlife',
      contextGoal: 'Greet Elena, mention exploring the wetlands, and state that preserving habitats is important for endangered species',
      targetVocabulary: ['Hello Elena', 'wetlands', 'habitat', 'biodiversity', 'endangered species', 'birdwatching'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello Elena! I came to explore the nature trails and observe the wetland birds. Protecting this natural habitat is so vital for preserving local biodiversity.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi Elena! I love birdwatching here. If we protect these wetlands, endangered migratory birds will continue returning every season.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good morning, Elena! It’s wonderful to visit. I’m really interested in your wildlife conservation and habitat restoration projects.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_elena',
          patterns: ['hello', 'hi', 'elena', 'good morning'],
          required: true,
        },
        {
          name: 'nature_and_habitat',
          patterns: ['wetlands', 'habitat', 'biodiversity', 'endangered', 'birds', 'birdwatching', 'conservation'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_233_1_if_will',
          pattern: /if we will protect/i,
          errorType: 'grammar',
          message: 'Use present simple in the if-clause: "If we protect these wetlands, birds will thrive."',
          correctionPattern: 'If we protect these wetlands, migratory birds will thrive.',
        },
      ],
      remediationPractice: {
        id: 'rem_233_1',
        type: 'fill_blank',
        prompt: 'Fill in: "If we ______ (conserve) the lake, fish will survive."',
        options: [
          { id: 'r1', text: 'conserve', isCorrect: true },
          { id: 'r2', text: 'will conserve', isCorrect: false },
        ],
        correctAnswer: 'conserve',
        explanation: 'Present simple in if-clause.',
      },
    },
    {
      id: 'turn_233_2',
      turnIndex: 2,
      partnerPrompt:
        'You are absolutely right! Sadly, littering and water pollution from upstream pose serious threats to our endangered kingfishers and freshwater turtles. What conservation steps do you think are most effective to tackle this?',
      partnerAudioText:
        'You are absolutely right! Sadly, littering and water pollution from upstream pose serious threats to our endangered kingfishers and freshwater turtles. What conservation steps do you think are most effective to tackle this?',
      partnerQuestionHindi:
        'आप बिल्कुल सही कह रहे हैं! दुख की बात है कि ऊपर से कचरा फेंकना और जल प्रदूषण हमारे लुप्तप्राय किंगफिशर और मीठे पानी के कछुओं के लिए गंभीर खतरा पैदा करता है। आपके विचार से इससे निपटने के लिए कौन से संरक्षण कदम सबसे प्रभावी हैं?',
      expectedFunction: 'Proposing conservation solutions using conditionals and modal verbs ("should organize cleanups", "if we install bins")',
      contextGoal: 'Suggest volunteer cleanups, warning signs, and regular river monitoring to reduce pollution',
      targetVocabulary: ['pollution', 'cleanups', 'should organize', 'if we reduce waste', 'conserve', 'wildlife'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'We should organize regular volunteer cleanups along the riverbank. If we install clear recycling bins and educational signs, visitors will keep the trails clean.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I think community cleanups and strict anti-littering rules are essential. If everyone does their part, the river ecosystem will recover quickly.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Educational nature walks and volunteer river patrols can make a big difference in preventing water pollution and protecting habitats.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'conservation_solutions',
          patterns: ['cleanups', 'bins', 'signs', 'should', 'if we', 'protect', 'pollution', 'volunteer', 'ecosystem'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_233_2_should_to',
          pattern: /we should to organize/i,
          errorType: 'grammar',
          message: 'Do not use "to" after modal "should": "We should organize cleanups."',
          correctionPattern: 'We should organize community cleanups along the riverbank.',
        },
      ],
      remediationPractice: {
        id: 'rem_233_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly suggests a conservation action?',
        options: [
          { id: 'r1', text: 'We should install protective fences along sensitive nesting zones.', isCorrect: true },
          { id: 'r2', text: 'We should to install protective fences sensitive.', isCorrect: false },
        ],
        correctAnswer: 'We should install protective fences along sensitive nesting zones.',
        explanation: 'Modal "should + base verb".',
      },
    },
    {
      id: 'turn_233_3',
      turnIndex: 3,
      partnerPrompt:
        'Those suggestions are brilliant! We are actually hosting a guided riverbank cleanup and bird-ringing demonstration this Sunday morning at 8:30 AM. Would you like to join our conservation team?',
      partnerAudioText:
        'Those suggestions are brilliant! We are actually hosting a guided riverbank cleanup and bird-ringing demonstration this Sunday morning at 8:30 AM. Would you like to join our conservation team?',
      partnerQuestionHindi:
        'वे सुझाव शानदार हैं! हम वास्तव में इस रविवार सुबह 8:30 बजे एक निर्देशित रिवरबैंक सफाई और पक्षी-रिंगिंग प्रदर्शन की मेजबानी कर रहे हैं। क्या आप हमारी संरक्षण टीम में शामिल होना चाहेंगे?',
      expectedFunction: 'Accepting the invitation warmly, confirming time (Sunday 8:30 AM), and thanking Ranger Elena',
      contextGoal: 'Accept Sunday 8:30 AM invite, express excitement for bird-ringing demo, and thank Elena',
      targetVocabulary: ['Sunday at 8:30 AM', 'conservation team', 'bird-ringing', 'Thank you Elena', 'look forward to'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I would love to join the conservation team this Sunday at 8:30 AM! The bird-ringing demonstration sounds fascinating. Thank you, Elena!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Count me in for Sunday morning at 8:30! I look forward to helping with the riverbank cleanup and learning more about our local wildlife.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'That sounds fantastic! I will see you on Sunday at 8:30 AM. Thank you for your dedication to protecting our natural reserve.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'acceptance_and_gratitude',
          patterns: ['sunday', '8:30', 'love to join', 'thank you', 'elena', 'count me in', 'cleanup', 'bird-ringing'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_233_3_short_bye',
          pattern: /^ok i come$/i,
          errorType: 'interaction',
          message: 'Respond with communicative politeness: "I would love to join the team on Sunday at 8:30 AM, Elena!"',
          correctionPattern: 'I would love to join the conservation team on Sunday at 8:30 AM!',
        },
      ],
      remediationPractice: {
        id: 'rem_233_3',
        type: 'fill_blank',
        prompt: 'Fill in: "I look forward to ______ (joining) the team."',
        options: [
          { id: 'r1', text: 'joining', isCorrect: true },
          { id: 'r2', text: 'join to', isCorrect: false },
        ],
        correctAnswer: 'joining',
        explanation: '"Look forward to" takes a gerund (-ing).',
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
