import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_248: ConversationDefinition = {
  id: 'conv_a2_248',
  title: 'Travel Culture & Respectful Communication',
  cefr: 'A2',
  unitId: 'unit_a2_17',
  lessonLinks: ['lesson_a2_17_248'],
  estimatedMinutes: 5,
  scenario:
    'You are attending a pre-departure travel workshop with cultural advisor Kenji. You discuss respectful travel etiquette, ask about appropriate dress codes for sacred and cultural sites, learn how to handle minor cross-cultural misunderstandings politely, and mediate etiquette tips for fellow travelers.',
  communicativeGoals: [
    'Inquire about and explain cultural etiquette and polite social customs in A2 English',
    'Use polite modal structures: "is it customary to...", "you should make sure to...", "it is considered polite to..."',
    'Ask about dress codes, shoe removal, and respectful behavior at historic or religious sites',
    'Mediate intercultural etiquette tips diplomatically to help other travelers feel confident',
  ],
  canDoStatements: [
    'Can ask about and explain appropriate social etiquette and dress codes when traveling',
    'Can understand and give polite advice on how to behave respectfully in different cultures',
    'Can handle simple intercultural questions with courtesy and sensitivity',
  ],
  characters: [
    {
      id: 'char_kenji_cultural_coach',
      name: 'Kenji',
      role: 'Cross-Cultural Travel Advisor',
      avatar: '🎎',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'etiquette',
        ipa: '/ˈetɪket/',
        partOfSpeech: 'noun',
        meaning: 'The customary code of polite behavior in society or among members of a particular culture',
        exampleSentence: 'Learning local etiquette shows respect for the community you are visiting.',
        translations: { hi: 'शिष्टाचार / आचार-व्यवहार (एटिक्वेट)' },
      },
      {
        word: 'customary',
        ipa: '/ˈkʌstəməri/',
        partOfSpeech: 'adjective',
        meaning: 'According to the customs or usual practices associated with a particular culture',
        exampleSentence: 'In many homes, it is customary to remove your shoes at the entrance.',
        translations: { hi: 'प्रथागत / पारंपरिक (कस्टमरी)' },
      },
      {
        word: 'respectful',
        ipa: '/rɪˈspektfl/',
        partOfSpeech: 'adjective',
        meaning: 'Feeling or showing deference and good manners toward others and their traditions',
        exampleSentence: 'Speaking in a calm, respectful tone helps avoid misunderstandings.',
        translations: { hi: 'सम्मानजनक / आदरयुक्त (रिस्पेक्टफुल)' },
      },
      {
        word: 'dress code',
        ipa: '/ˈdres kəʊd/',
        partOfSpeech: 'noun phrase',
        meaning: 'A set of rules about what clothes people should wear in a particular place or event',
        exampleSentence: 'Historic temples often have a modest dress code covering shoulders and knees.',
        translations: { hi: 'पोशाक नियम (ड्रेस कोड)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Is it customary to remove shoes when entering?',
        functionCategory: 'Asking about traditional hospitality customs',
        exampleSentence: 'Is it customary to remove shoes when entering someone’s home?',
      },
      {
        phrase: 'It is considered polite to...',
        functionCategory: 'Explaining social norms and manners',
        exampleSentence: 'It is considered polite to accept a cup of tea with both hands.',
      },
      {
        phrase: 'What is the appropriate dress code for...?',
        functionCategory: 'Inquiring about site clothing expectations',
        exampleSentence: 'What is the appropriate dress code for visiting ancient shrines?',
      },
      {
        phrase: 'To show respect, travelers should...',
        functionCategory: 'Giving intercultural travel guidance',
        exampleSentence: 'To show respect, travelers should always ask before taking portraits of locals.',
      },
    ],
    grammar: {
      title: 'Polite Norms: "It is customary to..." & Modals of Obligation (Should / Must)',
      conceptExplanation:
        '1. Impersonal evaluation of manners: "It is customary to + [base verb]" / "It is considered polite to + [base verb]."\n2. Advice and necessity: "You should cover your shoulders", "Visitors must not speak loudly."\n3. Indirect polite questions: "Could you tell me if tipping is expected?"',
      patternFormula: 'It is customary to + [Base Verb] / Travelers should + [Base Verb] + in order to show respect',
      contrastExamples: [
        {
          incorrect: 'It is customary for remove shoes.',
          correct: 'It is customary to remove shoes at the door.',
          explanation: '"It is customary" takes the infinitive "to remove".',
        },
        {
          incorrect: 'You must to respect local culture.',
          correct: 'You must respect local culture.',
          explanation: 'Modal "must" is followed directly by base verb without "to".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Kenji',
        text: 'Welcome to our cross-cultural workshop! When traveling abroad, why is understanding local etiquette so essential?',
        translation: 'हमारी क्रॉस-सांस्कृतिक कार्यशाला में आपका स्वागत है! विदेश यात्रा करते समय, स्थानीय शिष्टाचार को समझना इतना आवश्यक क्यों है?',
      },
      {
        speaker: 'Learner',
        text: 'Because following local etiquette shows respect to the community and helps prevent cultural misunderstandings.',
        translation: 'क्योंकि स्थानीय शिष्टाचार का पालन करना समुदाय के प्रति सम्मान दिखाता है और सांस्कृतिक गलतफहमियों को रोकने में मदद करता है।',
      },
      {
        speaker: 'Kenji',
        text: 'Exactly right! What should visitors remember when entering sacred or historic sites?',
        translation: 'बिल्कुल सही! पवित्र या ऐतिहासिक स्थलों में प्रवेश करते समय आगंतुकों को क्या याद रखना चाहिए?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_248_1',
      type: 'fill_blank',
      prompt: 'Complete: "In many cultures, it is considered polite ______ (to / for / of) bow or greet elders with a smile."',
      options: [
        { id: 'opt_1', text: 'to', isCorrect: true },
        { id: 'opt_2', text: 'for', isCorrect: false },
        { id: 'opt_3', text: 'of', isCorrect: false },
      ],
      correctAnswer: 'to',
      explanation: '"It is considered polite to + verb".',
    },
    {
      id: 'cp_248_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly advises on dress codes?',
      options: [
        { id: 'opt_1', text: 'Visitors should follow a modest dress code and cover their shoulders.', isCorrect: true },
        { id: 'opt_2', text: 'Visitors should to dress code modest covering.', isCorrect: false },
        { id: 'opt_3', text: 'It is customary for dress clothes without respectful.', isCorrect: false },
      ],
      correctAnswer: 'Visitors should follow a modest dress code and cover their shoulders.',
      explanation: 'Modal "should follow" + noun phrase.',
    },
    {
      id: 'cp_248_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [It is customary to remove shoes / before entering / a traditional dining room]',
      correctAnswer: 'It is customary to remove shoes before entering a traditional dining room',
      explanation: 'Formula: It is customary to remove shoes + prepositional clause.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_248_1',
      prompt: 'Construct a sentence stating that it is customary to remove your shoes before entering someone’s home.',
      scenarioContext: 'Explaining hospitality etiquette to Kenji.',
      targetStructure: 'It is customary to remove your shoes before entering someone’s home.',
      wordBank: ['It is customary to', 'remove your shoes', 'before entering', 'someone’s home.', 'respectful to'],
      acceptableSolutions: [
        'It is customary to remove your shoes before entering someone’s home.',
        'It is customary to take off your shoes before entering someone’s home.',
      ],
      explanation: '"It is customary to remove..." followed by the setting.',
    },
    {
      id: 'sc_248_2',
      prompt: 'Construct a sentence stating that to show respect, travelers should follow local dress codes at historic monuments.',
      scenarioContext: 'Giving cultural advice.',
      targetStructure: 'To show respect, travelers should follow local dress codes at historic monuments.',
      wordBank: ['To show respect,', 'travelers should follow', 'local dress codes', 'at historic monuments.', 'customary for'],
      acceptableSolutions: [
        'To show respect, travelers should follow local dress codes at historic monuments.',
        'Travelers should follow local dress codes at historic monuments to show respect.',
      ],
      explanation: 'Purpose phrase + modal advice with "should follow".',
    },
  ],
  turns: [
    {
      id: 'turn_248_1',
      turnIndex: 1,
      partnerPrompt:
        'Konnichiwa and welcome to our Travel Etiquette Seminar! When you visit a new country or community, how do you make sure your communication and behavior remain respectful?',
      partnerAudioText:
        'Konnichiwa and welcome to our Travel Etiquette Seminar! When you visit a new country or community, how do you make sure your communication and behavior remain respectful?',
      partnerQuestionHindi:
        'कोन्निचिवा और हमारे यात्रा शिष्टाचार संगोष्ठी में आपका स्वागत है! जब आप किसी नए देश या समुदाय की यात्रा करते हैं, तो आप यह कैसे सुनिश्चित करते हैं कि आपका संचार और व्यवहार सम्मानजनक बना रहे?',
      expectedFunction: 'Greeting Kenji and explaining strategies for respectful cultural communication and observing local manners',
      contextGoal: 'Greet Kenji, state that you research local customs in advance, speak politely, and observe how locals behave',
      targetVocabulary: ['Hello Kenji', 'respectful', 'etiquette', 'customs', 'polite tone', 'observe locals'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello Kenji! Before traveling, I always research local customs and basic greetings. I try to speak in a calm, respectful tone and observe how local people interact.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi Kenji! I make sure to learn important polite phrases like "please" and "thank you", and I respect local dining and greeting traditions.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good morning! I listen carefully, smile warmly, and always ask politely if I am unsure about what is considered respectful.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_kenji',
          patterns: ['hello', 'hi', 'kenji', 'good morning', 'good afternoon', 'konnichiwa'],
          required: true,
        },
        {
          name: 'respectful_behavior',
          patterns: ['respectful', 'etiquette', 'customs', 'research', 'polite', 'observe', 'greetings', 'listen', 'learn'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_248_1_respectful_adverb',
          pattern: /i speak respectful/i,
          errorType: 'grammar',
          message: 'Say "I speak respectfully" (adverb) or "in a respectful tone".',
          correctionPattern: 'I speak in a respectful tone with locals.',
        },
      ],
      remediationPractice: {
        id: 'rem_248_1',
        type: 'fill_blank',
        prompt: 'Fill in: "It is important to speak ______ (respectfully / respectful) with community elders."',
        options: [
          { id: 'r1', text: 'respectfully', isCorrect: true },
          { id: 'r2', text: 'respectful', isCorrect: false },
        ],
        correctAnswer: 'respectfully',
        explanation: 'The verb "speak" is modified by the adverb "respectfully".',
      },
    },
    {
      id: 'turn_248_2',
      turnIndex: 2,
      partnerPrompt:
        'Very perceptive! Now consider sacred heritage sites such as ancient temples, monasteries, or cathedrals. What is customary regarding dress codes, shoe removal, and photography?',
      partnerAudioText:
        'Very perceptive! Now consider sacred heritage sites such as ancient temples, monasteries, or cathedrals. What is customary regarding dress codes, shoe removal, and photography?',
      partnerQuestionHindi:
        'बहुत समझदारी भरा! अब प्राचीन मंदिरों, मठों, या गिरजाघरों जैसे पवित्र विरासत स्थलों पर विचार करें। पोशाक नियमों (ड्रेस कोड), जूते उतारने और फोटोग्राफी के संबंध में क्या प्रथागत है?',
      expectedFunction: 'Explaining rules for sacred sites: modest dress codes, removing shoes, speaking quietly, asking before taking photos',
      contextGoal: 'Explain that it is customary to remove shoes, cover shoulders and knees, and ask permission before taking photos',
      targetVocabulary: ['customary to remove shoes', 'dress code', 'cover shoulders', 'speak softly', 'sacred sites', 'photography'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'At sacred sites, it is customary to remove your shoes at the entrance and wear a modest dress code that covers shoulders and knees. Visitors should also speak softly and avoid flash photography.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'You should always check the dress code. It is considered polite to cover your shoulders, take off your shoes where requested, and ask before taking pictures.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'It is customary to take off your shoes and keep your voice low. Showing reverence for sacred spaces makes everyone feel respected.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'shoes_dress_code',
          patterns: ['remove shoes', 'take off shoes', 'shoes', 'dress code', 'cover shoulders', 'knees', 'modest', 'attire'],
          required: true,
        },
        {
          name: 'decorum_and_photo',
          patterns: ['softly', 'quietly', 'flash', 'photography', 'photos', 'sacred', 'respect', 'customary'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_248_2_must_to',
          pattern: /must to remove shoes/i,
          errorType: 'grammar',
          message: 'Say "must remove shoes" without "to".',
          correctionPattern: 'Visitors must remove their shoes at the entrance.',
        },
      ],
      remediationPractice: {
        id: 'rem_248_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes sacred site etiquette?',
        options: [
          { id: 'r1', text: 'It is customary to remove your shoes and follow the modest dress code.', isCorrect: true },
          { id: 'r2', text: 'It is customary for removing shoes and wear shorts inside.', isCorrect: false },
        ],
        correctAnswer: 'It is customary to remove your shoes and follow the modest dress code.',
        explanation: 'Infinitive phrase: "customary to remove shoes and follow".',
      },
    },
    {
      id: 'turn_248_3',
      turnIndex: 3,
      partnerPrompt:
        'A fellow traveler in our group accidentally entered a traditional tea house with their shoes on and felt very embarrassed. Could you mediate by explaining the custom gently and reassuring both the traveler and the host politely?',
      partnerAudioText:
        'A fellow traveler in our group accidentally entered a traditional tea house with their shoes on and felt very embarrassed. Could you mediate by explaining the custom gently and reassuring both the traveler and the host politely?',
      partnerQuestionHindi:
        'हमारे समूह का एक साथी यात्री गलती से जूते पहनकर एक पारंपरिक चाय की दुकान में चला गया और बहुत शर्मिंदा महसूस कर रहा था। क्या आप धीरे से प्रथा को समझाकर और यात्री तथा मेज़बान दोनों को विनम्रतापूर्वक आश्वस्त करके मध्यस्थता (mediate) कर सकते हैं?',
      expectedFunction: 'Mediating a cross-cultural misunderstanding diplomatically with apologies and polite reassurance',
      contextGoal: 'Apologize politely to the host, explain to the traveler that shoes belong on the entry rack, and resolve the situation calmly',
      targetVocabulary: ['Excuse us', 'sincere apologies', 'customary to leave shoes', 'misunderstanding', 'respectful', 'thank you for your patience'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Excuse us! Sincere apologies for the misunderstanding. In traditional tea houses, it is customary to leave shoes on the wooden rack at the entrance. We will take them off immediately and thank you for your kind patience.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello! Please do not worry. It is a simple mistake. It is customary to take off shoes here at the door. Let’s place them on the shelf and apologize politely to our host.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'We are very sorry for the confusion! We will remove our shoes right away. Thank you for welcoming us so graciously.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'polite_apology_reassurance',
          patterns: ['apologies', 'sorry', 'excuse us', 'worry', 'mistake', 'misunderstanding', 'patience'],
          required: true,
        },
        {
          name: 'mediation_action',
          patterns: ['remove shoes', 'take off', 'rack', 'entrance', 'door', 'shelf', 'customary', 'host'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_248_3_rude_handling',
          pattern: /^no problem shoes ok\.$/i,
          errorType: 'interaction',
          message: 'Show diplomatic politeness: "We apologize for the misunderstanding; it is customary to take off shoes at the door."',
          correctionPattern: 'We apologize for the misunderstanding; we will remove our shoes immediately.',
        },
      ],
      remediationPractice: {
        id: 'rem_248_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [We apologize for the misunderstanding / and will remove our shoes / right away]',
        correctAnswer: 'We apologize for the misunderstanding and will remove our shoes right away',
        explanation: 'Diplomatic mediation formula.',
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
