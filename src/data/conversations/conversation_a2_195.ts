import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_195: ConversationDefinition = {
  id: 'conv_a2_195',
  title: 'Unit 13 Living Language Synthesis & Cultural Discovery Capstone',
  cefr: 'A2',
  unitId: 'unit_a2_13',
  lessonLinks: ['lesson_a2_13_195'],
  estimatedMinutes: 6,
  scenario:
    'You are attending the end-of-program Cultural Showcase Dinner. You are conversing with Cultural Program Director Dr. Aris Thorne. You synthesize everything from Unit 13: comparing geographic landscapes, discussing weather contingencies with conditionals, explaining culinary recipe steps, analyzing museum heritage with passive voice, reviewing live music and film preferences, sharing social etiquette tips, and narrating a cultural myth.',
  communicativeGoals: [
    'Synthesize Unit 13 language competencies across nature, weather, gastronomy, arts, and social etiquette',
    'Use conditionals (if, unless) and passive voice (is located, was founded) accurately in conversation',
    'Express cultural preferences (prefer ... to, would rather ... than) and question tags (isn\'t it, didn\'t we)',
    'Reflect on personal language progress, cultural appreciation, and intercultural communication readiness',
  ],
  canDoStatements: [
    'Can synthesize diverse cultural, environmental, culinary, and social topics with fluency at CEFR A2',
    'Can accurately employ conditionals, passive voice, sequence adverbs, and narrative tenses in extended dialogue',
    'Can reflect on personal learning milestones and cross-cultural communicative confidence',
  ],
  characters: [
    {
      id: 'char_dr_aris_director',
      name: 'Dr. Aris Thorne',
      role: 'Cultural Exchange Program Director & Polyglot Scholar',
      avatar: '🌍',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'synthesis',
        ipa: '/ˈsɪnθəsɪs/',
        partOfSpeech: 'noun',
        meaning: 'The combination of components or elements to form a connected whole',
        exampleSentence: 'This capstone represents a synthesis of all our cultural learning.',
        translations: { hi: 'संश्लेषण / समग्र एकीकरण' },
      },
      {
        word: 'intercultural',
        ipa: '/ˌɪntəˈkʌltʃərəl/',
        partOfSpeech: 'adjective',
        meaning: 'Taking place between or involving different cultures',
        exampleSentence: 'Intercultural dialogue promotes mutual respect and global friendship.',
        translations: { hi: 'अंतर-सांस्कृतिक' },
      },
      {
        word: 'achievement',
        ipa: '/əˈtʃiːvmənt/',
        partOfSpeech: 'noun',
        meaning: 'A thing done successfully with effort, skill, or courage',
        exampleSentence: 'Completing Unit 13 is an impressive linguistic achievement.',
        translations: { hi: 'उपलब्धि' },
      },
      {
        word: 'perspective',
        ipa: '/pəˈspektɪv/',
        partOfSpeech: 'noun',
        meaning: 'A particular attitude toward or way of regarding something; a point of view',
        exampleSentence: 'Living abroad gave me a broader perspective on global traditions.',
        translations: { hi: 'दृष्टिकोण / परिप्रेक्ष्य' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Throughout this unit, I learned how to describe diverse landscapes and culinary heritage.',
        functionCategory: 'Reflecting on learning scope',
        exampleSentence: 'I can now discuss weather conditionals and museum exhibitions with ease.',
      },
      {
        phrase: 'If I travel to a new country, I will always respect local social etiquette.',
        functionCategory: 'Conditional synthesis with social ethics',
        exampleSentence: 'We shouldn’t hesitate to explore new cuisines and music styles.',
      },
      {
        phrase: 'This historical monument was built centuries ago, wasn’t it?',
        functionCategory: 'Combining passive voice with question tag',
        exampleSentence: 'The painting was created with natural pigments in the foreground.',
      },
      {
        phrase: 'I feel much more confident expressing my opinions in social conversations.',
        functionCategory: 'Stating communicative growth',
        exampleSentence: 'I look forward to continuing my language journey in the next unit.',
      },
    ],
    grammar: {
      title: 'Comprehensive Unit 13 Linguistic Architecture',
      conceptExplanation:
        'Unit 13 brings together key grammar structures:\n1. Comparative & Superlative Geography: "The highest mountain", "more scenic than"\n2. Conditionals with if/unless: "If it rains, we will visit the museum."\n3. Recipe Sequencers & Imperatives: "First, chop... Next, simmer... Finally, garnish."\n4. Modal Requests & Etiquette: "Could we have...", "You must / shouldn\'t..."\n5. Passive Voice: "The castle was founded in 1200."\n6. Preferences & Question Tags: "I prefer art to sports, don\'t you?"\n7. Narrative Past Tenses: "While we were hiking, we saw an eagle."',
      patternFormula: 'Synthesized use of Conditionals + Passive Voice + Preference Formulas + Narrative Tenses',
      contrastExamples: [
        {
          incorrect: 'I prefer cinema than museum and if it rain I stay.',
          correct: 'I prefer cinema to museums, and if it rains, I will stay indoors.',
          explanation: 'Combine correct prepositions (prefer ... to) with conditional rules (if it rains, will stay).',
        },
        {
          incorrect: 'The festival was celebrate while we ate.',
          correct: 'The festival was celebrated while we were sharing traditional sweets.',
          explanation: 'Past passive (was celebrated) + Past Continuous (were sharing).',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Dr. Aris Thorne',
        text: 'Welcome to our Capstone Showcase! Looking back at Unit 13, which cultural or geographical topic inspired you the most?',
        translation: 'हमारे कैपस्टोन शोकेस में आपका स्वागत है! यूनिट 13 को देखते हुए, किस सांस्कृतिक या भौगोलिक विषय ने आपको सबसे अधिक प्रेरित किया?',
      },
      {
        speaker: 'Learner',
        text: 'I loved learning about ancient monuments that were built long ago, and how to discuss weather plans with conditionals.',
        translation: 'मुझे बहुत पहले बने प्राचीन स्मारकों के बारे में जानना और शर्तों (कंडीशनल्स) के साथ मौसम की योजनाओं पर चर्चा करना बहुत पसंद आया।',
      },
      {
        speaker: 'Dr. Aris Thorne',
        text: 'Splendid! You have woven grammar and real-world expression together remarkably.',
        translation: 'शानदार! आपने व्याकरण और वास्तविक जीवन की अभिव्यक्ति को बहुत ही खूबसूरती से एक साथ जोड़ा है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_195_1',
      type: 'fill_blank',
      prompt: 'Combine conditional and preference: "If we visit the capital, I ______ (prefer) exploring historic museums to shopping."',
      options: [
        { id: 'opt_1', text: 'will prefer', isCorrect: true },
        { id: 'opt_2', text: 'would rathered', isCorrect: false },
        { id: 'opt_3', text: 'preferred', isCorrect: false },
      ],
      correctAnswer: 'will prefer',
      explanation: 'First conditional main clause takes will + base verb.',
    },
    {
      id: 'cp_195_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly combines passive voice with a tag question?',
      options: [
        { id: 'opt_1', text: 'This historic bridge was constructed in the fourteenth century, wasn\'t it?', isCorrect: true },
        { id: 'opt_2', text: 'This historic bridge was construct in the fourteenth century, is it?', isCorrect: false },
        { id: 'opt_3', text: 'This historic bridge constructed in the fourteenth century, didn\'t it?', isCorrect: false },
      ],
      correctAnswer: 'This historic bridge was constructed in the fourteenth century, wasn\'t it?',
      explanation: 'Past passive "was constructed" takes tag "wasn\'t it?".',
    },
    {
      id: 'cp_195_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [while we / delicious local food / were traveling / we tasted]',
      correctAnswer: 'while we were traveling we tasted delicious local food',
      explanation: 'While + Past Continuous followed by Past Simple event.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_195_1',
      prompt: 'Construct a sentence stating that if you visit a new country, you will respect local dining etiquette.',
      scenarioContext: 'Reflecting with Dr. Thorne.',
      targetStructure: 'If I travel to a new culture, I will always respect their dining etiquette.',
      wordBank: ['If I travel', 'to a new culture,', 'I will always respect', 'their dining etiquette', 'and traditions'],
      acceptableSolutions: [
        'If I travel to a new culture, I will always respect their dining etiquette.',
        'If I visit a new country, I will respect local etiquette.',
      ],
      explanation: 'First Conditional: If + Present Simple, will + base verb.',
    },
    {
      id: 'sc_195_2',
      prompt: 'Construct a sentence stating that you prefer live music festivals to watching recorded shows.',
      scenarioContext: 'Summarizing cultural leisure preferences.',
      targetStructure: 'I prefer attending live music festivals to watching recorded concerts.',
      wordBank: ['I prefer', 'attending live music festivals', 'to', 'watching recorded concerts', 'at home'],
      acceptableSolutions: [
        'I prefer attending live music festivals to watching recorded concerts.',
        'I prefer live music festivals to watching recorded shows.',
      ],
      explanation: 'Use "prefer [Gerund/Noun] to [Gerund/Noun]".',
    },
  ],
  turns: [
    {
      id: 'turn_195_1',
      turnIndex: 1,
      partnerPrompt:
        'Good evening and welcome to the Unit 13 Cultural Capstone Dinner! I am Dr. Aris Thorne. You have explored geography, weather forecasting, world cuisines, arts, cinema, and social etiquette. Which of these topics did you find most rewarding to express in English?',
      partnerAudioText:
        'Good evening and welcome to the Unit 13 Cultural Capstone Dinner! I am Dr. Aris Thorne. You have explored geography, weather forecasting, world cuisines, arts, cinema, and social etiquette. Which of these topics did you find most rewarding to express in English?',
      partnerQuestionHindi:
        'शुभ संध्या और यूनिट 13 सांस्कृतिक कैपस्टोन डिनर में आपका स्वागत है! मैं डॉ. एरिस थोर्न हूँ। आपने भूगोल, मौसम के पूर्वानुमान, विश्व व्यंजनों, कला, सिनेमा और सामाजिक शिष्टाचार का पता लगाया है। इनमें से कौन सा विषय आपको अंग्रेजी में व्यक्त करने के लिए सबसे अधिक फायदेमंद लगा?',
      expectedFunction: 'Reflecting on rewarding cultural topics using preference and descriptive language',
      contextGoal: 'Explain favorite topics (e.g. world cuisines, museum heritage, or storytelling) and give reasons',
      targetVocabulary: ['rewarding', 'prefer', 'cuisines', 'museums', 'culture', 'because'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Good evening Dr. Thorne! I found discussing world cuisines and museum heritage most rewarding because I love culture.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello! I really enjoyed using conditionals to plan outdoor trips and learning how to describe photographs.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good evening Dr. Thorne! I prefer learning about cultural traditions and sharing folk legends because stories connect all people.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_respectful',
          patterns: ['good evening', 'hello', 'dr. thorne', 'thorne', 'dr.'],
          required: true,
        },
        {
          name: 'topic_reflection',
          patterns: ['cuisines', 'food', 'museums', 'heritage', 'weather', 'conditionals', 'culture', 'traditions', 'legends', 'prefer', 'enjoyed'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_195_1_prefer_than',
          pattern: /prefer .* than/i,
          errorType: 'grammar',
          message: 'Remember: say "I prefer X to Y", not "than".',
          correctionPattern: 'prefer ... to ...',
        },
      ],
      remediationPractice: {
        id: 'rem_195_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I prefer cultural arts ______ (to) sports."',
        options: [
          { id: 'r1', text: 'to', isCorrect: true },
          { id: 'r2', text: 'than', isCorrect: false },
        ],
        correctAnswer: 'to',
        explanation: '"Prefer" takes "to".',
      },
    },
    {
      id: 'turn_195_2',
      turnIndex: 2,
      partnerPrompt:
        'Gastronomy and heritage truly bridge different worlds! When traveling abroad, how do you handle unexpected weather or changing plans? Can you give an example using a conditional sentence?',
      partnerAudioText:
        'Gastronomy and heritage truly bridge different worlds! When traveling abroad, how do you handle unexpected weather or changing plans? Can you give an example using a conditional sentence?',
      partnerQuestionHindi:
        'खान-पान और विरासत सच में विभिन्न दुनियाओं को जोड़ते हैं! विदेश यात्रा करते समय, आप अप्रत्याशित मौसम या बदलती योजनाओं को कैसे संभालते हैं? क्या आप सशर्त वाक्य (कंडीशनल) का उपयोग करके एक उदाहरण दे सकते हैं?',
      expectedFunction: 'Demonstrating a First Conditional sentence for travel/weather contingency',
      contextGoal: 'Formulate a First Conditional (e.g. If it rains heavily, we will visit an art gallery; unless the storm passes, we will rent a cabin)',
      targetVocabulary: ['if', 'will', 'unless', 'rains', 'visit', 'museum', 'indoor'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'If it rains heavily during a trip, we will visit an indoor museum or art exhibition instead.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'We will not go hiking in the mountains unless the weather forecast is clear and safe.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'If there is a thunderstorm, we will stay at a cozy cafe; we won\'t hike unless the fog completely clears.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'conditional_marker',
          patterns: ['if', 'unless'],
          required: true,
        },
        {
          name: 'conditional_contingency',
          patterns: ['will', 'won\'t', 'rains', 'storm', 'museum', 'gallery', 'cafe', 'hiking', 'forecast'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_195_2_will_in_if',
          pattern: /if it will rain/i,
          errorType: 'grammar',
          message: 'Use Present Simple after "if": "If it rains...".',
          correctionPattern: 'If it rains...',
        },
      ],
      remediationPractice: {
        id: 'rem_195_2',
        type: 'multiple_choice',
        prompt: 'Which conditional sentence is correct?',
        options: [
          { id: 'r1', text: 'If the weather improves, we will explore the old town square.', isCorrect: true },
          { id: 'r2', text: 'If the weather will improve, we will explore the square.', isCorrect: false },
        ],
        correctAnswer: 'If the weather improves, we will explore the old town square.',
        explanation: 'Present Simple follows "if" in First Conditional.',
      },
    },
    {
      id: 'turn_195_3',
      turnIndex: 3,
      partnerPrompt:
        'Precise conditional planning! Now, social manners and etiquette are vital when visiting host families or dining in restaurants. What key rules of etiquette should travelers always remember?',
      partnerAudioText:
        'Precise conditional planning! Now, social manners and etiquette are vital when visiting host families or dining in restaurants. What key rules of etiquette should travelers always remember?',
      partnerQuestionHindi:
        'सटीक कंडीशनल प्लानिंग! अब, मेजबान परिवारों से मिलने या रेस्तरां में भोजन करते समय सामाजिक शिष्टाचार और नियम महत्वपूर्ण हैं। यात्रियों को हमेशा शिष्टाचार के कौन से प्रमुख नियम याद रखने चाहिए?',
      expectedFunction: 'Stating etiquette rules using modals (should, must, mustn\'t, have to)',
      contextGoal: 'State rules like bringing a host gift, placing napkin on lap, waiting for host, and avoiding taboo questions',
      targetVocabulary: ['should', 'mustn\'t', 'gift', 'napkin', 'polite', 'table', 'host'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'You should bring a small host gift like chocolates, and you mustn’t use your phone at the dining table.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Guests must wait for the host before eating, and they shouldn’t ask invasive personal financial questions.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Travelers should always be punctual, compliment the cook on delicious dishes, and avoid sensitive taboo topics.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'modal_verbs',
          patterns: ['should', 'must', 'mustn\'t', 'have to', 'shouldn\'t'],
          required: true,
        },
        {
          name: 'etiquette_points',
          patterns: ['gift', 'phone', 'table', 'host', 'napkin', 'polite', 'questions', 'money', 'punctual', 'compliment'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_195_3_mustnt_to',
          pattern: /mustn't to/i,
          errorType: 'grammar',
          message: 'Do not use "to" after mustn\'t: "you mustn\'t use...".',
          correctionPattern: 'you mustn\'t use...',
        },
      ],
      remediationPractice: {
        id: 'rem_195_3',
        type: 'fill_blank',
        prompt: 'Fill in: "You ______ (mustn\'t) speak with your mouth full."',
        options: [
          { id: 'r1', text: 'mustn\'t', isCorrect: true },
          { id: 'r2', text: 'don\'t must', isCorrect: false },
        ],
        correctAnswer: 'mustn\'t',
        explanation: '"Mustn\'t" expresses social prohibition.',
      },
    },
    {
      id: 'turn_195_4',
      turnIndex: 4,
      partnerPrompt:
        'You have demonstrated thorough mastery of Unit 13’s communicative and cultural landscape. How do you feel about your overall confidence in using English for real-world social and travel interactions now?',
      partnerAudioText:
        'You have demonstrated thorough mastery of Unit 13’s communicative and cultural landscape. How do you feel about your overall confidence in using English for real-world social and travel interactions now?',
      partnerQuestionHindi:
        'आपने यूनिट 13 के संवादात्मक और सांस्कृतिक परिदृश्य पर गहन महारत का प्रदर्शन किया है। अब वास्तविक दुनिया के सामाजिक और यात्रा संपर्कों के लिए अंग्रेजी का उपयोग करने में अपने समग्र आत्मविश्वास के बारे में आप कैसा महसूस करते हैं?',
      expectedFunction: 'Synthesizing confidence, expressing gratitude, and concluding the Unit 13 capstone',
      contextGoal: 'Express increased confidence, summarize communicative growth, and thank Dr. Thorne warmly',
      targetVocabulary: ['confident', 'communication', 'progress', 'thank you', 'Dr. Thorne', 'ready'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I feel much more confident! Thank you so much Dr. Thorne. I am ready for real-world conversations and travel!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'My confidence has grown tremendously. I can express opinions, tell stories, and respect customs easily now. Thank you!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I feel completely prepared to navigate new cities, appreciate art, and converse naturally with international friends. Thank you Dr. Thorne for this inspiring milestone!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'confidence_statement',
          patterns: ['confident', 'confidence', 'prepared', 'ready', 'grown', 'progress', 'conversations'],
          required: true,
        },
        {
          name: 'capstone_gratitude',
          patterns: ['thank you', 'thanks', 'dr. thorne', 'thorne', 'milestone', 'unit', 'inspiring'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_195_4_short',
          pattern: /^(thanks bye|ok)$/i,
          errorType: 'interaction',
          message: 'Provide a thoughtful concluding reflection celebrating your Unit 13 milestone.',
          correctionPattern: 'I feel very confident and ready for real-world conversations! Thank you Dr. Thorne.',
        },
      ],
      remediationPractice: {
        id: 'rem_195_4',
        type: 'multiple_choice',
        prompt: 'Which reflection best concludes the Unit 13 capstone dialogue?',
        options: [
          { id: 'r1', text: 'I feel much more confident and ready for real-world travel! Thank you Dr. Thorne.', isCorrect: true },
          { id: 'r2', text: 'Unit finished, bye.', isCorrect: false },
        ],
        correctAnswer: 'I feel much more confident and ready for real-world travel! Thank you Dr. Thorne.',
        explanation: 'Thoughtful, articulate, and celebratory.',
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
