import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_230: ConversationDefinition = {
  id: 'conv_a2_230',
  title: 'Community Life, Neighborhood Events & Local Information',
  cefr: 'A2',
  unitId: 'unit_a2_16',
  lessonLinks: ['lesson_a2_16_230'],
  estimatedMinutes: 5,
  scenario:
    'You meet Geeta, your residential association coordinator, near the lobby bulletin board. You discuss upcoming neighborhood events, including a park cleanup and a community garden project. You learn how to take part as a volunteer and find local civic information.',
  communicativeGoals: [
    'Use "there is / there are" with quantifiers ("several", "a lot of", "a few") to describe community facilities and resources',
    'Express willingness to volunteer and join civic initiatives using "take part in"',
    'Ask for and provide local information regarding neighborhood notice boards and council meetings',
    'Demonstrate neighborly communication and community awareness in A2 English',
  ],
  canDoStatements: [
    'Can understand and talk about local community projects, notices, and neighborhood facilities',
    'Can offer to volunteer and participate in local neighborhood activities',
    'Can use "there is / there are" with various quantifiers accurately',
  ],
  characters: [
    {
      id: 'char_geeta_coordinator',
      name: 'Geeta',
      role: 'Community Association Representative',
      avatar: '🏡',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'volunteer',
        ipa: '/ˌvɒlənˈtɪə(r)/',
        partOfSpeech: 'verb / noun',
        meaning: 'A person who freely offers to help with community tasks or work without payment',
        exampleSentence: 'Many local residents volunteer to plant trees in the public park.',
        translations: { hi: 'स्वयंसेवक / स्वयंसेवा करना (वॉलंटियर)' },
      },
      {
        word: 'bulletin board',
        ipa: '/ˈbʊlətɪn bɔːd/',
        partOfSpeech: 'noun',
        meaning: 'A display board where public notices, schedules, and community news are posted',
        exampleSentence: 'I saw the notice for the neighborhood cleanup on the bulletin board.',
        translations: { hi: 'सूचना पट्ट (बुलेटिन बोर्ड)' },
      },
      {
        word: 'neighborly',
        ipa: '/ˈneɪbəli/',
        partOfSpeech: 'adjective',
        meaning: 'Helpful, friendly, and considerate towards people living nearby',
        exampleSentence: 'Checking on elderly neighbors during winter is a neighborly act.',
        translations: { hi: 'मिलनसार / पड़ोसी जैसा (नेबरली)' },
      },
      {
        word: 'initiative',
        ipa: '/ɪˈnɪʃətɪv/',
        partOfSpeech: 'noun',
        meaning: 'An act or strategy intended to resolve a problem or improve a community situation',
        exampleSentence: 'The green garden initiative has transformed our residential block.',
        translations: { hi: 'पहल / नई योजना (इनिशिएटिव)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I would like to take part in the neighborhood cleanup.',
        functionCategory: 'Expressing desire to participate in an initiative',
        exampleSentence: 'Many families take part in the annual charity drive.',
      },
      {
        phrase: 'There are several community gardens nearby.',
        functionCategory: 'Describing local amenities with quantifiers',
        exampleSentence: 'There is a lot of green space behind the library.',
      },
      {
        phrase: 'How can residents sign up to volunteer?',
        functionCategory: 'Inquiring about civic volunteering',
        exampleSentence: 'Where can I sign up to help on Saturday morning?',
      },
      {
        phrase: 'Please check the bulletin board for regular updates.',
        functionCategory: 'Directing attention to local information sources',
        exampleSentence: 'We post the monthly recycling schedule on the lobby bulletin board.',
      },
    ],
    grammar: {
      title: 'There is / There are with Quantifiers in Community Contexts',
      conceptExplanation:
        '1. "There is" + singular countable or uncountable nouns: "There is a bulletin board in the lobby", "There is a lot of enthusiasm among neighbors."\n2. "There are" + plural nouns with quantifiers: "There are several volunteers", "There are a few tasks left", "There are many trees to plant."\n3. "Take part in" is followed by a noun or gerund (-ing): "take part in the cleanup".',
      patternFormula: 'There is + [Singular / Uncountable] / There are + [many / several / a few] + [Plural Noun] + [take part in + Noun]',
      contrastExamples: [
        {
          incorrect: 'There is many people helping at the park.',
          correct: 'There are many people helping at the park.',
          explanation: '"People" is a plural noun, so use "there are", not "there is".',
        },
        {
          incorrect: 'I want to take part on the garden project.',
          correct: 'I want to take part in the garden project.',
          explanation: 'The correct preposition with "take part" is always "in".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Geeta',
        text: 'Hello! Did you see the new flyers on the community bulletin board about this weekend’s park initiative?',
        translation: 'नमस्ते! क्या आपने इस सप्ताहांत की पार्क पहल के बारे में सामुदायिक सूचना पट्ट पर नए पर्चे देखे?',
      },
      {
        speaker: 'Learner',
        text: 'Hi Geeta! Yes, I saw it. There are several exciting projects listed, and I’d love to take part in the cleanup.',
        translation: 'नमस्ते गीता! हाँ, मैंने देखा। कई रोमांचक परियोजनाएँ सूचीबद्ध हैं, और मैं सफाई में भाग लेना पसंद करूँगा।',
      },
      {
        speaker: 'Geeta',
        text: 'That’s wonderful! There are a lot of tasks available, from planting flowers to organizing recycling bins.',
        translation: 'यह बहुत बढ़िया है! फूलों के पौधे लगाने से लेकर रीसाइक्लिंग डिब्बे व्यवस्थित करने तक बहुत सारे काम उपलब्ध हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_230_1',
      type: 'fill_blank',
      prompt: 'Complete with the correct verb: "There ______ (is / are) several flyers posted on the bulletin board."',
      options: [
        { id: 'opt_1', text: 'are', isCorrect: true },
        { id: 'opt_2', text: 'is', isCorrect: false },
        { id: 'opt_3', text: 'be', isCorrect: false },
      ],
      correctAnswer: 'are',
      explanation: 'Use "are" with plural nouns like "several flyers".',
    },
    {
      id: 'cp_230_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "take part in"?',
      options: [
        { id: 'opt_1', text: 'We decided to take part in the community garden project.', isCorrect: true },
        { id: 'opt_2', text: 'We decided to take part for the community garden project.', isCorrect: false },
        { id: 'opt_3', text: 'We decided to take part at the community garden project.', isCorrect: false },
      ],
      correctAnswer: 'We decided to take part in the community garden project.',
      explanation: '"Take part in" is the standard collocated phrase.',
    },
    {
      id: 'cp_230_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [There are / several volunteers / who want to / take part in the cleanup]',
      correctAnswer: 'There are several volunteers who want to take part in the cleanup',
      explanation: '"There are" + quantifier + noun + relative clause.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_230_1',
      prompt: 'Construct a sentence stating that there are several notices on the bulletin board about volunteering.',
      scenarioContext: 'Talking to Geeta in the lobby.',
      targetStructure: 'There are several interesting notices on the bulletin board about community volunteering.',
      wordBank: ['There are several', 'interesting notices on', 'the bulletin board about', 'community volunteering,', 'Geeta.'],
      acceptableSolutions: [
        'There are several interesting notices on the bulletin board about community volunteering.',
        'There are many notices on the bulletin board about volunteering.',
      ],
      explanation: '"There are several + plural noun" construction.',
    },
    {
      id: 'sc_230_2',
      prompt: 'Construct a sentence expressing your eagerness to take part in the Saturday park cleanup.',
      scenarioContext: 'Signing up to help.',
      targetStructure: 'I would love to take part in the Saturday park cleanup as a volunteer.',
      wordBank: ['I would love to', 'take part in the Saturday', 'park cleanup as', 'a volunteer,', 'Geeta.'],
      acceptableSolutions: [
        'I would love to take part in the Saturday park cleanup as a volunteer.',
        'I want to take part in the cleanup as a volunteer.',
      ],
      explanation: '"Take part in + noun" with volunteer commitment.',
    },
  ],
  turns: [
    {
      id: 'turn_230_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning! I’m just pinning up our monthly neighborhood association newsletter on the lobby bulletin board. Have you had a chance to read about our upcoming community events?',
      partnerAudioText:
        'Good morning! I’m just pinning up our monthly neighborhood association newsletter on the lobby bulletin board. Have you had a chance to read about our upcoming community events?',
      partnerQuestionHindi:
        'शुभ प्रभात! मैं लॉबी बुलेटिन बोर्ड पर हमारा मासिक पड़ोस संघ समाचार पत्र लगा रही हूँ। क्या आपको हमारे आगामी सामुदायिक कार्यक्रमों के बारे में पढ़ने का मौका मिला है?',
      expectedFunction: 'Greeting Geeta, acknowledging the bulletin board, and commenting on the events using "there are several..."',
      contextGoal: 'Greet Geeta, mention that there are several interesting notices on the bulletin board, and express curiosity',
      targetVocabulary: ['Good morning Geeta', 'bulletin board', 'there are several', 'community events', 'notices'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Good morning, Geeta! Yes, I was just looking at the bulletin board. There are several exciting community initiatives listed for this month.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Geeta! I noticed the new notices on the board. There are a lot of interesting events, especially the park cleanup.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good morning, Geeta! It’s great to see so many updates. There are several projects that caught my eye.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_geeta',
          patterns: ['good morning', 'hello', 'hi', 'geeta'],
          required: true,
        },
        {
          name: 'bulletin_board_notices',
          patterns: ['bulletin board', 'there are several', 'there are a lot', 'notices', 'events', 'initiatives'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_230_1_there_is_plural',
          pattern: /there is several events/i,
          errorType: 'grammar',
          message: 'Use "there are" with plural nouns: "There are several events listed."',
          correctionPattern: 'There are several interesting notices on the board.',
        },
      ],
      remediationPractice: {
        id: 'rem_230_1',
        type: 'fill_blank',
        prompt: 'Fill in: "There ______ (are) many volunteers helping today."',
        options: [
          { id: 'r1', text: 'are', isCorrect: true },
          { id: 'r2', text: 'is', isCorrect: false },
        ],
        correctAnswer: 'are',
        explanation: 'Use "are" for plural subjects.',
      },
    },
    {
      id: 'turn_230_2',
      turnIndex: 2,
      partnerPrompt:
        'We are organizing a neighborhood park cleanup this Saturday at 9:00 AM, and we are also starting a shared community herb garden behind the library. We need a few more volunteers to help out.',
      partnerAudioText:
        'We are organizing a neighborhood park cleanup this Saturday at 9:00 AM, and we are also starting a shared community herb garden behind the library. We need a few more volunteers to help out.',
      partnerQuestionHindi:
        'हम इस शनिवार सुबह 9:00 बजे एक मोहल्ला पार्क सफाई अभियान आयोजित कर रहे हैं, और हम पुस्तकालय के पीछे एक साझा सामुदायिक जड़ी-बूटी उद्यान भी शुरू कर रहे हैं। हमें मदद के लिए कुछ और स्वयंसेवकों की आवश्यकता है।',
      expectedFunction: 'Expressing eagerness to volunteer and take part in the cleanup or garden project',
      contextGoal: 'Offer to volunteer, use "take part in the cleanup", and ask what supplies are needed',
      targetVocabulary: ['volunteer', 'take part in', 'park cleanup', 'herb garden', 'Saturday at 9', 'neighborly'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I would love to volunteer! I am very happy to take part in the park cleanup this Saturday morning at nine. Do we need to bring any tools?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'That is a wonderful neighborly initiative, Geeta. I want to take part in planting the community herb garden on Saturday.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Please sign me up as a volunteer! Taking part in local environmental projects is something I really care about.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'volunteer_and_participate',
          patterns: ['volunteer', 'take part in', 'cleanup', 'herb garden', 'saturday', 'sign me up', 'tools'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_230_2_take_part_preposition',
          pattern: /take part on the cleanup/i,
          errorType: 'grammar',
          message: 'Use the preposition "in" with "take part": "take part in the cleanup."',
          correctionPattern: 'I want to take part in the park cleanup.',
        },
      ],
      remediationPractice: {
        id: 'rem_230_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly expresses community participation?',
        options: [
          { id: 'r1', text: 'I would love to take part in the neighborhood initiative.', isCorrect: true },
          { id: 'r2', text: 'I would love to take part for the neighborhood initiative.', isCorrect: false },
        ],
        correctAnswer: 'I would love to take part in the neighborhood initiative.',
        explanation: '"Take part in" is the correct collocated expression.',
      },
    },
    {
      id: 'turn_230_3',
      turnIndex: 3,
      partnerPrompt:
        'Thank you so much! All gardening tools, gloves, and trash bags will be provided at the entrance. I’ve written your name down on our volunteer roster for Saturday at 9:00 AM. See you there!',
      partnerAudioText:
        'Thank you so much! All gardening tools, gloves, and trash bags will be provided at the entrance. I’ve written your name down on our volunteer roster for Saturday at 9:00 AM. See you there!',
      partnerQuestionHindi:
        'बहुत बहुत धन्यवाद! प्रवेश द्वार पर सभी बागवानी उपकरण, दस्ताने और कचरा बैग प्रदान किए जाएंगे। मैंने शनिवार सुबह 9:00 बजे के लिए अपने स्वयंसेवक रोस्टर में आपका नाम लिख लिया है। मिलते हैं!',
      expectedFunction: 'Expressing appreciation, confirming the Saturday 9 AM meeting, and ending the conversation with a neighborly farewell',
      contextGoal: 'Thank Geeta, confirm Saturday at 9 AM, and wish her a great day',
      targetVocabulary: ['Thank you Geeta', 'Saturday at 9', 'volunteer roster', 'neighborly', 'Have a great day'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Thank you very much, Geeta! I look forward to taking part on Saturday at nine. Have a wonderful day!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Thanks for organizing this great initiative, Geeta. See you on Saturday morning at the park entrance!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Awesome! Thank you for the information. I’ll see you and the other volunteers on Saturday at nine.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'gratitude_and_farewell',
          patterns: ['thank you', 'thanks', 'geeta', 'saturday', 'nine', 'see you', 'great day', 'taking part'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_230_3_brief_ack',
          pattern: /^ok bye$/i,
          errorType: 'interaction',
          message: 'Close with neighborly warmth: "Thank you, Geeta! I look forward to Saturday morning."',
          correctionPattern: 'Thank you so much, Geeta! See you on Saturday at nine.',
        },
      ],
      remediationPractice: {
        id: 'rem_230_3',
        type: 'fill_blank',
        prompt: 'Fill in: "Thank you for the ______ (neighborly) support."',
        options: [
          { id: 'r1', text: 'neighborly', isCorrect: true },
          { id: 'r2', text: 'neighboring to', isCorrect: false },
        ],
        correctAnswer: 'neighborly',
        explanation: '"Neighborly" is the adjective meaning friendly and helpful.',
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
