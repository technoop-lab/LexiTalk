import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_193: ConversationDefinition = {
  id: 'conv_a2_193',
  title: 'Social Etiquette, Dining Manners & Cultural Taboos',
  cefr: 'A2',
  unitId: 'unit_a2_13',
  lessonLinks: ['lesson_a2_13_193'],
  estimatedMinutes: 5,
  scenario:
    'You are invited to a formal dinner at the home of your host family in the UK. Before attending, you talk with intercultural advisor Hannah to discuss table manners, gift-giving customs, tipping etiquette, and social taboos.',
  communicativeGoals: [
    'Use modals of obligation and advice (must, mustn\'t, should, shouldn\'t, have to, don\'t have to) for social etiquette',
    'Explain polite host gift etiquette (bringing flowers, chocolates, or tea)',
    'Understand dining customs, table manners, and polite conversation topics',
    'Ask about cultural do\'s and don\'ts to avoid embarrassing misunderstandings',
  ],
  canDoStatements: [
    'Can understand and give advice on social etiquette and cultural manners using modals',
    'Can discuss dining customs and polite behavior in English',
    'Can ask about cultural taboos and appropriate host gifts',
  ],
  characters: [
    {
      id: 'char_hannah_advisor',
      name: 'Hannah',
      role: 'Intercultural Communications Advisor',
      avatar: '🍵',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'etiquette',
        ipa: '/ˈetɪket/',
        partOfSpeech: 'noun',
        meaning: 'The customary code of polite behavior in society or among members of a particular profession',
        exampleSentence: 'Table etiquette includes waiting for everyone to be served before eating.',
        translations: { hi: 'शिष्टाचार' },
      },
      {
        word: 'polite',
        ipa: '/pəˈlaɪt/',
        partOfSpeech: 'adjective',
        meaning: 'Having or showing behavior that is respectful and considerate of other people',
        exampleSentence: 'It is polite to send a thank-you note the day after a dinner party.',
        translations: { hi: 'विनम्र / शिष्ट' },
      },
      {
        word: 'taboo',
        ipa: '/təˈbuː/',
        partOfSpeech: 'noun',
        meaning: 'A social or religious custom prohibiting or forbidding discussion of a particular practice',
        exampleSentence: 'Asking personal financial questions is considered a social taboo in many cultures.',
        translations: { hi: 'सामाजिक वर्जना / मनाही' },
      },
      {
        word: 'host',
        ipa: '/həʊst/',
        partOfSpeech: 'noun',
        meaning: 'A person who receives or entertains other people as guests',
        exampleSentence: 'Always thank your host for the delicious dinner.',
        translations: { hi: 'मेजबान' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'You should bring a small gift like flowers or chocolates for the host.',
        functionCategory: 'Advising with should',
        exampleSentence: 'You shouldn’t arrive more than ten minutes late.',
      },
      {
        phrase: 'You mustn’t start eating until the host invites everyone to begin.',
        functionCategory: 'Strong prohibition with mustn\'t',
        exampleSentence: 'You must remember to say please and thank you.',
      },
      {
        phrase: 'Do I have to remove my shoes when entering the house?',
        functionCategory: 'Asking obligation with have to',
        exampleSentence: 'Is it customary to leave a tip at the restaurant?',
      },
      {
        phrase: 'What topics should we avoid during polite dinner conversation?',
        functionCategory: 'Inquiring about social taboos',
        exampleSentence: 'Keep conversations positive and lighthearted.',
      },
    ],
    grammar: {
      title: 'Modals of Obligation, Prohibition & Advice: must, mustn\'t, have to, should',
      conceptExplanation:
        '1. Strong Obligation & Necessity:\n   - "must + Base Verb" (Personal/Strong): "You must thank your host."\n   - "have to + Base Verb" (Rule/Custom): "You have to follow the house rules."\n2. Prohibition:\n   - "mustn\'t + Base Verb" (Do not do this!): "You mustn\'t place your phone on the dinner table."\n3. Advice & Good Manners:\n   - "should + Base Verb" (Good idea): "You should bring a small dessert."\n   - "shouldn\'t + Base Verb" (Bad idea): "You shouldn\'t talk with food in your mouth."\n4. Lack of Obligation:\n   - "don\'t have to + Base Verb" (Optional): "You don\'t have to dress formally."',
      patternFormula: '[Subject] + [must / mustn\'t / should / shouldn\'t / have to] + [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'You mustn\'t to arrive late.',
          correct: 'You mustn\'t arrive late.',
          explanation: 'Modal verbs (must, should) take the bare infinitive without "to".',
        },
        {
          incorrect: 'You don\'t have to be rude to guests.',
          correct: 'You mustn\'t be rude to guests.',
          explanation: '"Don\'t have to" means not necessary (optional); use "mustn\'t" for forbidden actions.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Hannah',
        text: 'Going to your first British dinner party is exciting! What questions do you have about dining etiquette?',
        translation: 'अपनी पहली ब्रिटिश डिनर पार्टी में जाना रोमांचक है! भोजन के शिष्टाचार के बारे में आपके क्या प्रश्न हैं?',
      },
      {
        speaker: 'Learner',
        text: 'Should I bring a small gift for the host family when I arrive?',
        translation: 'जब मैं पहुँचूँ तो क्या मुझे मेजबान परिवार के लिए कोई छोटा उपहार लाना चाहिए?',
      },
      {
        speaker: 'Hannah',
        text: 'Yes, definitely! You should bring a box of nice chocolates or fresh flowers.',
        translation: 'हाँ, बिल्कुल! आपको अच्छे चॉकलेट का एक डिब्बा या ताजे फूल लाने चाहिए।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_193_1',
      type: 'fill_blank',
      prompt: 'Choose the correct modal for polite advice: "You ______ (should / must) bring a bouquet of flowers for the host."',
      options: [
        { id: 'opt_1', text: 'should', isCorrect: true },
        { id: 'opt_2', text: 'mustn\'t', isCorrect: false },
        { id: 'opt_3', text: 'have not to', isCorrect: false },
      ],
      correctAnswer: 'should',
      explanation: 'Use "should" to offer polite cultural recommendations.',
    },
    {
      id: 'cp_193_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses a prohibition?',
      options: [
        { id: 'opt_1', text: 'You mustn\'t check your phone constantly at the dinner table.', isCorrect: true },
        { id: 'opt_2', text: 'You don\'t have to check your phone because it is forbidden.', isCorrect: false },
        { id: 'opt_3', text: 'You mustn\'t to check your phone at the table.', isCorrect: false },
      ],
      correctAnswer: 'You mustn\'t check your phone constantly at the dinner table.',
      explanation: '"Mustn\'t + bare verb" expresses strong social prohibition.',
    },
    {
      id: 'cp_193_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [wait / until everyone is served / you should / before eating]',
      correctAnswer: 'you should wait until everyone is served before eating',
      explanation: 'Subject + should + verb + time clause + prepositional phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_193_1',
      prompt: 'Construct a sentence giving advice that guests should arrive on time or five minutes late.',
      scenarioContext: 'Advising on arrival timing.',
      targetStructure: 'You should arrive on time or a few minutes after the invitation time.',
      wordBank: ['You should', 'arrive on time', 'or a few minutes', 'after the invitation time', 'at their home'],
      acceptableSolutions: [
        'You should arrive on time or a few minutes after the invitation time.',
        'You should arrive on time.',
      ],
      explanation: 'Use "should + arrive on time".',
    },
    {
      id: 'sc_193_2',
      prompt: 'Construct a sentence stating that you mustn\'t discuss controversial arguments during dinner.',
      scenarioContext: 'Explaining conversation taboos.',
      targetStructure: 'You mustn\'t discuss sensitive money or argument topics at dinner.',
      wordBank: ['You mustn\'t', 'discuss', 'sensitive money', 'or argument topics', 'at dinner'],
      acceptableSolutions: [
        'You mustn\'t discuss sensitive money or argument topics at dinner.',
        'You shouldn\'t discuss money topics at dinner.',
      ],
      explanation: 'Modal "mustn\'t + discuss" indicates taboo.',
    },
  ],
  turns: [
    {
      id: 'turn_193_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello! I understand you are invited to a dinner party at a British family’s home this Friday. What would you like to know about arrival etiquette and gift-giving customs?',
      partnerAudioText:
        'Hello! I understand you are invited to a dinner party at a British family’s home this Friday. What would you like to know about arrival etiquette and gift-giving customs?',
      partnerQuestionHindi:
        'नमस्ते! मैं समझता हूँ कि आपको इस शुक्रवार को एक ब्रिटिश परिवार के घर डिनर पार्टी में आमंत्रित किया गया है। आप आगमन शिष्टाचार और उपहार देने के रिवाजों के बारे में क्या जानना चाहेंगे?',
      expectedFunction: 'Asking about host gifts and arrival timing using "should" or "have to"',
      contextGoal: 'Ask whether you should bring a gift (like sweets or flowers) and when to arrive',
      targetVocabulary: ['should', 'gift', 'arrive', 'flowers', 'chocolates', 'time'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hi Hannah! Should I bring a gift like chocolates or flowers, and what time should I arrive?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello! Do I have to bring a host gift, and is it rude if I arrive a few minutes late?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Hi Hannah! What kind of small gift should guests bring, and what is the polite arrival etiquette?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'gift_inquiry',
          patterns: ['gift', 'flowers', 'chocolates', 'bring', 'present'],
          required: true,
        },
        {
          name: 'timing_inquiry',
          patterns: ['arrive', 'time', 'late', 'early', 'should', 'have to'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_193_1_should_to',
          pattern: /should i to bring/i,
          errorType: 'grammar',
          message: 'Do not use "to" after should: "Should I bring...".',
          correctionPattern: 'Should I bring...',
        },
      ],
      remediationPractice: {
        id: 'rem_193_1',
        type: 'fill_blank',
        prompt: 'Fill in: "Should I ______ (bring) a small gift?"',
        options: [
          { id: 'r1', text: 'bring', isCorrect: true },
          { id: 'r2', text: 'to bring', isCorrect: false },
        ],
        correctAnswer: 'bring',
        explanation: 'Bare infinitive follows "should".',
      },
    },
    {
      id: 'turn_193_2',
      turnIndex: 2,
      partnerPrompt:
        'A box of chocolates or wrapped bakery treats is perfect! Arrive on time or 5–10 minutes after, but never early. Now, what about table manners during the meal? What rules should you keep in mind?',
      partnerAudioText:
        'A box of chocolates or wrapped bakery treats is perfect! Arrive on time or 5–10 minutes after, but never early. Now, what about table manners during the meal? What rules should you keep in mind?',
      partnerQuestionHindi:
        'चॉकलेट का डिब्बा या बेकरी के व्यंजन बिल्कुल सही हैं! समय पर या 5-10 मिनट बाद पहुँचें, लेकिन कभी जल्दी नहीं। अब, भोजन के दौरान टेबल के शिष्टाचार के बारे में क्या? आपको कौन से नियम ध्यान में रखने चाहिए?',
      expectedFunction: 'Listing dining table manners using "should" and "mustn\'t"',
      contextGoal: 'Mention waiting for the host, placing napkin on lap, and not using phone at the table',
      targetVocabulary: ['should', 'mustn\'t', 'napkin', 'phone', 'wait', 'eat'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'You should place your napkin on your lap, and you mustn’t use your mobile phone at the table.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'We should wait until everyone is served, and we mustn’t speak with food in our mouths.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'You should always wait for the host to start eating, and you mustn’t put elbows on the table.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'modals_used',
          patterns: ['should', 'mustn\'t', 'must', 'have to', 'shouldn\'t'],
          required: true,
        },
        {
          name: 'table_manners',
          patterns: ['napkin', 'phone', 'wait', 'served', 'mouth', 'eat', 'table', 'elbows', 'start'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_193_2_mustnt_mean',
          pattern: /don't have to use phone/i,
          errorType: 'vocabulary',
          message: 'Use "mustn\'t" for things that are rude or forbidden: "You mustn\'t use your phone".',
          correctionPattern: 'You mustn\'t use your phone...',
        },
      ],
      remediationPractice: {
        id: 'rem_193_2',
        type: 'multiple_choice',
        prompt: 'Which modal expresses that something is impolite and forbidden?',
        options: [
          { id: 'r1', text: 'mustn\'t (You mustn\'t interrupt)', isCorrect: true },
          { id: 'r2', text: 'don\'t have to (You don\'t have to pay)', isCorrect: false },
        ],
        correctAnswer: 'mustn\'t (You mustn\'t interrupt)',
        explanation: '"Mustn\'t" expresses prohibition.',
      },
    },
    {
      id: 'turn_193_3',
      turnIndex: 3,
      partnerPrompt:
        'Spot on! Place your napkin on your lap and keep phones away. What about conversation topics? What should you talk about, and what sensitive subjects should you avoid?',
      partnerAudioText:
        'Spot on! Place your napkin on your lap and keep phones away. What about conversation topics? What should you talk about, and what sensitive subjects should you avoid?',
      partnerQuestionHindi:
        'बिल्कुल सही! नैपकिन को अपनी गोद में रखें और फोन दूर रखें। बातचीत के विषयों के बारे में क्या? आपको किस बारे में बात करनी चाहिए, और किन संवेदनशील विषयों से बचना चाहिए?',
      expectedFunction: 'Identifying polite conversation topics and taboos using "should" and "shouldn\'t"',
      contextGoal: 'Explain that travel, weather, and food are good, while salary, politics, or personal money shouldn\'t be discussed',
      targetVocabulary: ['should', 'shouldn\'t', 'travel', 'weather', 'money', 'avoid'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'We should talk about travel, hobbies, and the weather, but we shouldn’t ask about salaries or money.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'You should discuss culture and delicious food, and you shouldn’t debate heated politics.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Keep it light: you should compliment the food and talk about travel, but avoid asking personal financial questions.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'good_topics',
          patterns: ['travel', 'weather', 'food', 'hobbies', 'culture', 'compliment', 'should'],
          required: true,
        },
        {
          name: 'taboo_topics',
          patterns: ['money', 'salary', 'politics', 'arguments', 'financial', 'personal', 'shouldn\'t', 'avoid'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_193_3_salary_plural',
          pattern: /ask how much they earn money/i,
          errorType: 'interaction',
          message: 'Phrasing tip: Say "we shouldn\'t ask about personal finances or income".',
          correctionPattern: 'we shouldn\'t ask about personal finances',
        },
      ],
      remediationPractice: {
        id: 'rem_193_3',
        type: 'fill_blank',
        prompt: 'Fill in: "You ______ (shouldn\'t) ask people how much money they earn."',
        options: [
          { id: 'r1', text: 'shouldn\'t', isCorrect: true },
          { id: 'r2', text: 'must to not', isCorrect: false },
        ],
        correctAnswer: 'shouldn\'t',
        explanation: 'Use "shouldn\'t" for polite social advice.',
      },
    },
    {
      id: 'turn_193_4',
      turnIndex: 4,
      partnerPrompt:
        'Excellent advice. After the meal, always compliment the host on the delicious food, and send a short thank-you message the next day. You are thoroughly prepared for your dinner!',
      partnerAudioText:
        'Excellent advice. After the meal, always compliment the host on the delicious food, and send a short thank-you message the next day. You are thoroughly prepared for your dinner!',
      partnerQuestionHindi:
        'उत्कृष्ट सलाह। भोजन के बाद, हमेशा स्वादिष्ट भोजन के लिए मेजबान की तारीफ करें, और अगले दिन एक छोटा धन्यवाद संदेश भेजें। आप अपने डिनर के लिए पूरी तरह से तैयार हैं!',
      expectedFunction: 'Expressing gratitude for the etiquette guidance and closing with confidence',
      contextGoal: 'Thank Hannah for the helpful advice and express confidence for the dinner',
      targetVocabulary: ['thank you', 'helpful', 'confident', 'advice', 'Hannah'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Thank you so much Hannah! Your advice is really helpful. I feel very confident now.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Thanks Hannah! I will buy a box of chocolates and remember all these tips. Have a great day!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I really appreciate this guidance! I know exactly what to do and what to avoid. Thank you and goodbye!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'gratitude',
          patterns: ['thank you', 'thanks', 'appreciate', 'grateful'],
          required: true,
        },
        {
          name: 'confidence_farewell',
          patterns: ['helpful', 'confident', 'tips', 'advice', 'hannah', 'goodbye', 'have a great day'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_193_4_short',
          pattern: /^(thanks|ok bye)$/i,
          errorType: 'interaction',
          message: 'Provide a complete closing thanking your advisor.',
          correctionPattern: 'Thank you so much Hannah for the helpful advice!',
        },
      ],
      remediationPractice: {
        id: 'rem_193_4',
        type: 'multiple_choice',
        prompt: 'Which response closes an advisory session politely?',
        options: [
          { id: 'r1', text: 'Thank you so much for the helpful etiquette tips, Hannah!', isCorrect: true },
          { id: 'r2', text: 'Bye tips done.', isCorrect: false },
        ],
        correctAnswer: 'Thank you so much for the helpful etiquette tips, Hannah!',
        explanation: 'Courteous and complete.',
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
