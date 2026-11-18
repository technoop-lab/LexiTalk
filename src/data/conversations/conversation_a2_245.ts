import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_245: ConversationDefinition = {
  id: 'conv_a2_245',
  title: 'Museums, Exhibitions & Historical Places',
  cefr: 'A2',
  unitId: 'unit_a2_17',
  lessonLinks: ['lesson_a2_17_245'],
  estimatedMinutes: 5,
  scenario:
    'You are visiting the City History Museum and speaking with museum guide Arthur at the information desk. You inquire about admission fees, ask about guided tours, discuss historical artifacts and exhibition rooms, and mediate museum etiquette rules for international visitors.',
  communicativeGoals: [
    'Inquire about museum admission fees, opening hours, and audio guide availability in A2 English',
    'Ask for and understand directions to specific historical exhibition halls and artifact displays',
    'Understand and mediate museum regulations (no flash photography, audio guides, cloakroom storage)',
    'Describe a favorite historical object or exhibition section using simple descriptive clauses',
  ],
  canDoStatements: [
    'Can ask for practical visitor information at a museum information desk',
    'Can understand and convey simple museum rules and exhibition schedules to others',
    'Can talk about historical places and ancient artifacts in simple English',
  ],
  characters: [
    {
      id: 'char_arthur_museum_guide',
      name: 'Arthur',
      role: 'Museum Docent & Heritage Guide',
      avatar: '🏛️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'admission fee',
        ipa: '/ədˈmɪʃn fiː/',
        partOfSpeech: 'noun phrase',
        meaning: 'The price or charge required to enter a museum, gallery, or exhibition',
        exampleSentence: 'The standard museum admission fee is eight euros for adults.',
        translations: { hi: 'प्रवेश शुल्क (एडमिशन फी)' },
      },
      {
        word: 'guided tour',
        ipa: '/ˈɡaɪdɪd tʊə/',
        partOfSpeech: 'noun phrase',
        meaning: 'A structured walk through an exhibition led by an expert guide',
        exampleSentence: 'A free guided tour of the medieval gallery starts at two o’clock.',
        translations: { hi: 'मार्गदर्शित दौरा (गाइडेड टूर)' },
      },
      {
        word: 'artifact',
        ipa: '/ˈɑːtɪfækt/',
        partOfSpeech: 'noun',
        meaning: 'An object made by a human being, typically one of cultural or historical interest',
        exampleSentence: 'This ancient bronze artifact is over two thousand years old.',
        translations: { hi: 'प्राचीन कलाकृति / पुरावशेष (आर्टिफैक्ट)' },
      },
      {
        word: 'exhibition',
        ipa: '/ˌeksɪˈbɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'A public display of works of art or items of cultural interest in an art gallery or museum',
        exampleSentence: 'The temporary photography exhibition is on the second floor.',
        translations: { hi: 'प्रदर्शनी (एक्ज़िबिशन)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'How much is the admission fee for...?',
        functionCategory: 'Inquiring about ticket prices',
        exampleSentence: 'How much is the admission fee for students and seniors?',
      },
      {
        phrase: 'Is there a guided tour available today?',
        functionCategory: 'Asking about docent-led tours',
        exampleSentence: 'Is there a guided tour available in English this afternoon?',
      },
      {
        phrase: 'Please note that flash photography is not permitted.',
        functionCategory: 'Stating rules and regulations',
        exampleSentence: 'Please note that flash photography is not permitted in the ancient sculpture gallery.',
      },
      {
        phrase: 'This section dates back to...',
        functionCategory: 'Describing historical age and origins',
        exampleSentence: 'This section dates back to the seventeenth century.',
      },
    ],
    grammar: {
      title: 'Polite Inquiries with "Could you tell me..." & Passive Museum Rules',
      conceptExplanation:
        '1. Polite indirect questions: "Could you tell me what time the museum closes?" (Notice subject-verb order).\n2. Permission and prohibition: "Visitors are allowed to take photos, but flash is not permitted."\n3. Temporal origin: "dates back to [century/year]."',
      patternFormula: 'Could you tell me + [Wh-word / if] + [Subject + Verb]? / [Flash / food] + is not permitted',
      contrastExamples: [
        {
          incorrect: 'Could you tell me where is the ticket desk?',
          correct: 'Could you tell me where the ticket desk is?',
          explanation: 'Indirect question uses statement word order: "where the ticket desk is".',
        },
        {
          incorrect: 'Taking photo is forbidden to everyone.',
          correct: 'Photography is permitted, but flash is not allowed.',
          explanation: 'Standard signage formula: "not permitted / not allowed".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Arthur',
        text: 'Good morning! Welcome to the City Heritage Museum. How may I assist you today?',
        translation: 'शुभ प्रभात! सिटी हेरिटेज म्यूज़ियम में आपका स्वागत है। आज मैं आपकी क्या सहायता कर सकता हूँ?',
      },
      {
        speaker: 'Learner',
        text: 'Good morning! Could you tell me how much the admission fee is, and if there is a guided tour available today?',
        translation: 'शुभ प्रभात! क्या आप मुझे बता सकते हैं कि प्रवेश शुल्क कितना है, और क्या आज कोई गाइडेड टूर उपलब्ध है?',
      },
      {
        speaker: 'Arthur',
        text: 'Certainly! Admission is five euros, and our English guided tour begins in room three at eleven o’clock.',
        translation: 'निश्चित रूप से! प्रवेश शुल्क पाँच यूरो है, और हमारा अंग्रेजी गाइडेड टूर ग्यारह बजे कक्ष तीन में शुरू होता है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_245_1',
      type: 'fill_blank',
      prompt: 'Complete: "Could you please tell me where the ancient artifact gallery ______ (is / does / was)?"',
      options: [
        { id: 'opt_1', text: 'is', isCorrect: true },
        { id: 'opt_2', text: 'does', isCorrect: false },
        { id: 'opt_3', text: 'are', isCorrect: false },
      ],
      correctAnswer: 'is',
      explanation: 'In indirect questions, the verb "is" comes at the end of the clause.',
    },
    {
      id: 'cp_245_2',
      type: 'multiple_choice',
      prompt: 'Which sign explains a museum etiquette rule correctly?',
      options: [
        { id: 'opt_1', text: 'Flash photography is strictly not permitted inside the exhibition rooms.', isCorrect: true },
        { id: 'opt_2', text: 'Flash photography does not permitted to make photos.', isCorrect: false },
        { id: 'opt_3', text: 'Flash is no permit for artifacts.', isCorrect: false },
      ],
      correctAnswer: 'Flash photography is strictly not permitted inside the exhibition rooms.',
      explanation: '"[Noun] is not permitted" is the formal museum rule structure.',
    },
    {
      id: 'cp_245_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [The ancient stone carvings / date back to / the twelfth century]',
      correctAnswer: 'The ancient stone carvings date back to the twelfth century',
      explanation: 'Subject + "date back to" + historical century.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_245_1',
      prompt: 'Construct a polite inquiry asking Arthur if audio guides are included in the ticket price.',
      scenarioContext: 'Asking the museum guide.',
      targetStructure: 'Could you tell me if audio guides are included in the ticket price?',
      wordBank: ['Could you tell me', 'if audio guides are', 'included in the', 'ticket price?', 'admission fee is'],
      acceptableSolutions: [
        'Could you tell me if audio guides are included in the ticket price?',
        'Could you tell me whether audio guides are included in the ticket price?',
      ],
      explanation: 'Indirect polite inquiry with "if... are included".',
    },
    {
      id: 'sc_245_2',
      prompt: 'Construct a sentence stating that these ceramic artifacts date back to the Ming Dynasty.',
      scenarioContext: 'Explaining museum artifacts.',
      targetStructure: 'These ceramic artifacts date back to the Ming Dynasty.',
      wordBank: ['These ceramic artifacts', 'date back to', 'the Ming Dynasty.', 'guided tour', 'admission fee'],
      acceptableSolutions: [
        'These ceramic artifacts date back to the Ming Dynasty.',
        'These ancient artifacts date back to the Ming Dynasty.',
      ],
      explanation: '"date back to + era/dynasty" expresses historical origin.',
    },
  ],
  turns: [
    {
      id: 'turn_245_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning, visitor! Welcome to the Historical Heritage Museum. How can I help you plan your visit today?',
      partnerAudioText:
        'Good morning, visitor! Welcome to the Historical Heritage Museum. How can I help you plan your visit today?',
      partnerQuestionHindi:
        'शुभ प्रभात, आगंतुक! ऐतिहासिक विरासत संग्रहालय में आपका स्वागत है। आज आपकी यात्रा की योजना बनाने में मैं आपकी कैसे मदद कर सकता हूँ?',
      expectedFunction: 'Greeting Arthur politely and asking about admission fees, tickets, and guided tour times',
      contextGoal: 'Greet Arthur, ask about the admission fee and whether there is an English guided tour or audio guide',
      targetVocabulary: ['Good morning Arthur', 'admission fee', 'guided tour', 'audio guide', 'tickets', 'available today'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Good morning, Arthur! Could you tell me how much the admission fee is, and if there is a guided tour in English today?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Arthur! I would like to buy two tickets. Are audio guides available, and what time does the exhibition close?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good morning! How much is admission for students? Also, do you offer guided tours this morning?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_arthur',
          patterns: ['good morning', 'hello', 'hi', 'arthur'],
          required: true,
        },
        {
          name: 'museum_inquiries',
          patterns: ['admission fee', 'ticket', 'guided tour', 'audio guide', 'cost', 'how much', 'available', 'exhibition'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_245_1_how_much_is',
          pattern: /how much cost the ticket/i,
          errorType: 'grammar',
          message: 'Say "How much is the ticket?" or "How much does the ticket cost?".',
          correctionPattern: 'How much is the admission fee?',
        },
      ],
      remediationPractice: {
        id: 'rem_245_1',
        type: 'fill_blank',
        prompt: 'Fill in: "How much ______ (is / does) the admission fee for adults?"',
        options: [
          { id: 'r1', text: 'is', isCorrect: true },
          { id: 'r2', text: 'does', isCorrect: false },
        ],
        correctAnswer: 'is',
        explanation: 'We use "is" with noun phrase: "How much is the fee?".',
      },
    },
    {
      id: 'turn_245_2',
      turnIndex: 2,
      partnerPrompt:
        'Standard tickets are six euros, and our docent tour begins at two o’clock. We have special rooms for ancient Roman coins, medieval weapons, and local folklore. Which exhibition section or historical artifacts are you most eager to explore?',
      partnerAudioText:
        'Standard tickets are six euros, and our docent tour begins at two o’clock. We have special rooms for ancient Roman coins, medieval weapons, and local folklore. Which exhibition section or historical artifacts are you most eager to explore?',
      partnerQuestionHindi:
        'मानक टिकट छह यूरो हैं, और हमारा डोसेंट टूर दो बजे शुरू होता है। हमारे पास प्राचीन रोमन सिक्कों, मध्ययुगीन हथियारों और स्थानीय लोककथाओं के लिए विशेष कमरे हैं। आप किस प्रदर्शनी अनुभाग या ऐतिहासिक कलाकृतियों को देखने के लिए सबसे अधिक उत्सुक हैं?',
      expectedFunction: 'Stating exhibition interests and asking about artifact origins or specific gallery locations',
      contextGoal: 'State interest in ancient coins or medieval artifacts and explain that you enjoy seeing objects that date back centuries',
      targetVocabulary: ['artifacts', 'exhibition', 'date back to', 'ancient coins', 'medieval gallery', 'fascinating'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I am very eager to explore the ancient coin and sculpture collection. I love seeing artifacts that date back to ancient times.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'The medieval weapons and folklore exhibition sounds fascinating! Could you tell me where that gallery is located?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I would like to see the ancient artifacts first. Historical objects tell wonderful stories about how people lived.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'exhibition_interest',
          patterns: ['artifacts', 'coins', 'sculpture', 'medieval', 'folklore', 'exhibition', 'ancient', 'explore', 'see', 'interested'],
          required: true,
        },
        {
          name: 'historical_relevance',
          patterns: ['date back to', 'history', 'fascinating', 'stories', 'ancient times', 'centuries', 'gallery'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_245_2_date_back_in',
          pattern: /date back in/i,
          errorType: 'grammar',
          message: 'Say "dates back to" (use preposition "to").',
          correctionPattern: 'These artifacts date back to the tenth century.',
        },
      ],
      remediationPractice: {
        id: 'rem_245_2',
        type: 'multiple_choice',
        prompt: 'Which phrase correctly expresses historical age?',
        options: [
          { id: 'r1', text: 'These ancient coins date back to the third century.', isCorrect: true },
          { id: 'r2', text: 'These ancient coins date back in third century.', isCorrect: false },
        ],
        correctAnswer: 'These ancient coins date back to the third century.',
        explanation: '"Date back to + era" is the correct standard collocation.',
      },
    },
    {
      id: 'turn_245_3',
      turnIndex: 3,
      partnerPrompt:
        'A tour group behind you has large backpacks and cameras with flash. Could you help mediate our museum rules by explaining that large bags must go in the cloakroom and flash photography is not permitted?',
      partnerAudioText:
        'A tour group behind you has large backpacks and cameras with flash. Could you help mediate our museum rules by explaining that large bags must go in the cloakroom and flash photography is not permitted?',
      partnerQuestionHindi:
        'आपके पीछे एक टूर समूह के पास बड़े बैकपैक और फ्लैश वाले कैमरे हैं। क्या आप यह समझाकर हमारे संग्रहालय के नियमों में मध्यस्थता (mediate) करने में मदद कर सकते हैं कि बड़े बैग क्लॉकरूम में रखे जाने चाहिए और फ्लैश फोटोग्राफी की अनुमति नहीं है?',
      expectedFunction: 'Mediating museum regulations politely and clearly to fellow visitors',
      contextGoal: 'Explain politely that flash photography is not permitted and large backpacks must be left in free lockers/cloakroom',
      targetVocabulary: ['Excuse me', 'museum rules', 'flash photography is not permitted', 'cloakroom', 'lockers', 'thank you'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Excuse me! Just to let you know, flash photography is not permitted inside the galleries, and large backpacks should be stored in the free cloakroom lockers.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello everyone! Please remember that taking photos with flash is not allowed, and bags can be placed safely in the cloakroom by the door.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Hi! The museum guide mentioned that flash photos are not permitted to protect the artifacts, and free lockers are available over there.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'polite_opening',
          patterns: ['excuse me', 'hello', 'hi', 'please', 'just to let you know'],
          required: true,
        },
        {
          name: 'rule_flash_photos',
          patterns: ['flash', 'photography', 'not permitted', 'not allowed', 'photos'],
          required: true,
        },
        {
          name: 'rule_backpacks_cloakroom',
          patterns: ['cloakroom', 'lockers', 'backpacks', 'bags', 'store', 'leave'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_245_3_no_photo',
          pattern: /^no camera here\.$/i,
          errorType: 'structure',
          message: 'Use polite mediation: "Excuse me, flash photography is not permitted, and bags should be stored in the cloakroom."',
          correctionPattern: 'Flash photography is not permitted in the gallery.',
        },
      ],
      remediationPractice: {
        id: 'rem_245_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [Flash photography is not permitted / inside the ancient / artifact exhibition rooms]',
        correctAnswer: 'Flash photography is not permitted inside the ancient artifact exhibition rooms',
        explanation: 'Passive rule statement with location modifier.',
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
