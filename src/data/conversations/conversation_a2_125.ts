import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_125: ConversationDefinition = {
  id: 'conv_a2_125',
  title: 'Expressing Duration: Present Perfect with "For" and "Since" (How long have you...?)',
  cefr: 'A2',
  unitId: 'unit_a2_9',
  lessonLinks: ['lesson_a2_9_125'],
  estimatedMinutes: 5,
  scenario:
    'You are joining the Cambridge Community Allotment & Urban Garden initiative on Mill Road. Meet volunteer coordinator Marcus Reed for your garden orientation. Talk about how long you have lived in Cambridge using "for + duration" and "since + starting point", describe your gardening experience, and ask Marcus about the history of the community garden project.',
  communicativeGoals: [
    'Ask about the duration of ongoing states and habits using "How long have you + past participle?"',
    'State a duration of time using "for + time period" (for two years, for eight months, for a long time)',
    'State a specific past starting point using "since + date/event" (since 2022, since I graduated, since last October)',
    'Avoid confusing Present Continuous with Present Perfect for ongoing states (e.g. "I have lived here for two years", not "I am living here for two years")',
  ],
  canDoStatements: [
    'Can describe how long an ongoing situation has lasted using the Present Perfect (CEFR A2)',
    'Can use "for" and "since" accurately with time expressions',
    'Can ask duration questions naturally during a community introduction',
  ],
  characters: [
    {
      id: 'char_marcus_reed',
      name: 'Marcus Reed',
      role: 'Community Garden & Allotment Coordinator',
      avatar: '🌻',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'for',
        ipa: '/fɔːr/',
        partOfSpeech: 'preposition',
        meaning: 'Used to indicate the total duration or length of time an ongoing state has lasted',
        exampleSentence: 'I have lived in this neighborhood for three years.',
        translations: { hi: 'से (समय की कुल अवधि के लिए)' },
      },
      {
        word: 'since',
        ipa: '/sɪns/',
        partOfSpeech: 'preposition / conjunction',
        meaning: 'Used to indicate the specific starting point in time when an ongoing state began',
        exampleSentence: 'Marcus has managed the community garden since 2018.',
        translations: { hi: 'से (समय के निश्चित प्रारंभिक बिंदु के लिए)' },
      },
      {
        word: 'allotment',
        ipa: '/əˈlɒtmənt/',
        partOfSpeech: 'noun',
        meaning: 'A small piece of ground rented to an individual for growing fruit and vegetables',
        exampleSentence: 'We grow tomatoes, herbs, and strawberries in our community allotment.',
        translations: { hi: 'सब्जी उगाने का छोटा बगीचा / प्लॉट' },
      },
      {
        word: 'how long',
        ipa: '/haʊ lɒŋ/',
        partOfSpeech: 'question phrase',
        meaning: 'Used to ask about duration of time',
        exampleSentence: 'How long have you studied sustainable agriculture?',
        translations: { hi: 'कितने समय से / कितनी देर' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'How long have you lived in Cambridge?',
        functionCategory: 'Asking Duration Question (How long have you...?)',
        exampleSentence: 'How long have you worked at the university?',
      },
      {
        phrase: 'I have lived in Cambridge for eighteen months.',
        functionCategory: 'Stating Duration (for + time period)',
        exampleSentence: 'I have known him for ten years.',
      },
      {
        phrase: 'I have been interested in gardening since childhood.',
        functionCategory: 'Stating Starting Point (since + point in time)',
        exampleSentence: 'We have lived here since 2021.',
      },
      {
        phrase: 'How long has this community project existed?',
        functionCategory: 'Inquiring About Project History',
        exampleSentence: 'How long has the allotment been open?',
      },
    ],
    grammar: {
      title: 'For vs. Since with Present Perfect for Unbroken Duration',
      conceptExplanation:
        '1. Formula: "Subject + have/has + Past Participle + for / since".\n2. For + Period of Time (total duration): for two hours, for three days, for six months, for five years, for a long time.\n3. Since + Starting Point (specific moment/date): since 2020, since yesterday, since Monday, since 9:00 AM, since I moved here.\n4. Critical distinction: In English, ongoing states that started in the past use Present Perfect, NOT Present Continuous (say "I have lived here for two years", NOT "I am living here for two years").',
      patternFormula: 'How long have you + [Past Participle]? | Subject + have/has + [Past Participle] + for [Period] / since [Starting Point]',
      contrastExamples: [
        {
          incorrect: 'I am living in Cambridge since two years.',
          correct: 'I have lived in Cambridge for two years. / I have lived in Cambridge since 2022.',
          explanation: 'Use Present Perfect ("have lived") and "for" with a duration of time ("for two years").',
        },
        {
          incorrect: 'I have this plot since three months.',
          correct: 'I have had this plot for three months.',
          explanation: 'Use Present Perfect ("have had") + "for + duration".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Marcus Reed',
        text: 'Welcome to the Mill Road Allotments! It is always great to see new green thumbs. How long have you lived here in Cambridge?',
        translation: 'मिल रोड अलॉटमेंट्स में आपका स्वागत है! नए बागवानों को देखना हमेशा बहुत अच्छा लगता है। आप यहाँ कैम्ब्रिज में कितने समय से रह रहे हैं?',
      },
      {
        speaker: 'You',
        text: 'Hi Marcus! I have lived in Cambridge for eighteen months, ever since I moved here for my research job in October 2022. I have loved this neighborhood since my first week!',
        translation: 'नमस्ते मार्कस! मैं अठारह महीने से कैम्ब्रिज में रह रहा हूँ, जब से मैं अक्टूबर 2022 में अपनी रिसर्च जॉब के लिए यहाँ आया था। मुझे अपने पहले हफ्ते से ही यह पड़ोस बहुत पसंद है!',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_125_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "I have lived in this apartment ___ (for / since) three years."',
      options: [
        { id: 'opt_1', text: 'for', isCorrect: true },
        { id: 'opt_2', text: 'since', isCorrect: false },
        { id: 'opt_3', text: 'from', isCorrect: false },
      ],
      correctAnswer: 'for',
      explanation: 'Use "for" with a period/duration of time ("three years").',
    },
    {
      id: 'cp_a2_125_2',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "Marcus has coordinated the garden ___ (for / since) 2018."',
      options: [
        { id: 'opt_1', text: 'since', isCorrect: true },
        { id: 'opt_2', text: 'for', isCorrect: false },
        { id: 'opt_3', text: 'during', isCorrect: false },
      ],
      correctAnswer: 'since',
      explanation: 'Use "since" with a specific starting date ("2018").',
    },
    {
      id: 'cp_a2_125_3',
      type: 'multiple_choice',
      prompt: 'Which question correctly asks about duration in the Present Perfect?',
      options: [
        { id: 'opt_1', text: 'How long have you had an interest in gardening?', isCorrect: true },
        { id: 'opt_2', text: 'How long time you are having interest in gardening?', isCorrect: false },
        { id: 'opt_3', text: 'Since when did you had interest?', isCorrect: false },
      ],
      correctAnswer: 'How long have you had an interest in gardening?',
      explanation: '"How long have you + past participle" is the standard duration inquiry.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_125_1',
      scenarioContext: 'State duration of residence.',
      prompt: 'Build: "I have lived in Cambridge for two years."',
      targetStructure: 'Subject + have + participle + place + for + period',
      wordBank: ['I', 'have', 'lived', 'in', 'Cambridge', 'for', 'two', 'years', 'since', 'am', 'living'],
      acceptableSolutions: [
        'I have lived in Cambridge for two years',
        'I have lived in Cambridge for two years.',
      ],
      explanation: 'Standard Present Perfect duration sentence.',
    },
    {
      id: 'sc_a2_125_2',
      scenarioContext: 'State interest since a past date.',
      prompt: 'Build: "I have grown herbs on my balcony since March."',
      targetStructure: 'Subject + have + participle + object + place + since + month',
      wordBank: ['I', 'have', 'grown', 'herbs', 'on', 'my', 'balcony', 'since', 'March', 'for', 'grow'],
      acceptableSolutions: [
        'I have grown herbs on my balcony since March',
        'I have grown herbs on my balcony since March.',
      ],
      explanation: 'Uses "since" with a specific month.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_125_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! Welcome to the Cambridge Mill Road Allotments. It is fantastic to welcome a new volunteer gardener. How long have you lived in Cambridge, and how long have you been interested in growing plants?',
      partnerAudioText:
        'Hi there! Welcome to the Cambridge Mill Road Allotments. It is fantastic to welcome a new volunteer gardener. How long have you lived in Cambridge, and how long have you been interested in growing plants?',
      partnerQuestionHindi:
        'नमस्ते! कैम्ब्रिज मिल रोड अलॉटमेंट्स में आपका स्वागत है। एक नए स्वयंसेवक माली का स्वागत करते हुए बहुत खुशी हो रही है। आप कैम्ब्रिज में कितने समय से रह रहे हैं, और आपको पौधे उगाने में कितने समय से रुचि है?',
      expectedFunction: 'Express Duration with "For" & "Since" (have lived here for two years / since October 2022)',
      contextGoal:
        'Explain that you have lived in Cambridge for eighteen months (since October 2022); you have grown herbs on your balcony since last spring, but you want a real garden bed.',
      targetVocabulary: ['have lived in Cambridge for eighteen months', 'moved here since October 2022', 'have grown potted herbs since last spring', 'want a proper garden bed'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Hi Marcus! I have lived in Cambridge for eighteen months, since moving here for work in October 2022. I have grown potted herbs on my balcony since last spring, but I have wanted a real garden plot for a long time.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Living Duration (have lived / eighteen months / two years / since October / 2022)',
          patterns: ['have lived', 'eighteen months', 'two years', 'year', 'since october', 'since 2022', 'for 18 months', 'cambridge'],
          required: true,
        },
        {
          name: 'Gardening Interest (grown / herbs / balcony / since spring / wanted / plot / for a long time)',
          patterns: ['grown', 'herbs', 'balcony', 'since spring', 'since last year', 'wanted', 'for a long time', 'plants'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'continuous_for_duration_error',
          pattern: /\bi am living in cambridge since\b|\bi am living here for\b/i,
          errorType: 'grammar',
          message: 'Use the Present Perfect: "I have lived in Cambridge for eighteen months".',
          correctionPattern: 'I have lived in Cambridge for eighteen months',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_125_1',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly expresses duration?',
        options: [
          { id: 'opt_1', text: 'I have lived in Cambridge for nearly two years.', isCorrect: true },
          { id: 'opt_2', text: 'I am living in Cambridge since two years.', isCorrect: false },
          { id: 'opt_3', text: 'I live here for two years.', isCorrect: false },
        ],
        correctAnswer: 'I have lived in Cambridge for nearly two years.',
        explanation: 'Present Perfect + "for + duration" is the standard English construction.',
      },
    },
    {
      id: 'turn_a2_125_2',
      turnIndex: 2,
      partnerPrompt:
        'Balcony herbs are the best way to start! This allotment has a rich history. I have coordinated this community garden project since 2018, and several of our older members have farmed these plots for over twenty years! What kind of vegetables have you always wanted to harvest yourself?',
      partnerAudioText:
        'Balcony herbs are the best way to start! This allotment has a rich history. I have coordinated this community garden project since 2018, and several of our older members have farmed these plots for over twenty years! What kind of vegetables have you always wanted to harvest yourself?',
      partnerQuestionHindi:
        'बालकनी की जड़ी-बूटियाँ शुरुआत करने का सबसे अच्छा तरीका हैं! इस अलॉटमेंट का एक समृद्ध इतिहास है। मैं 2018 से इस सामुदायिक उद्यान परियोजना का समन्वय कर रहा हूँ, और हमारे कई पुराने सदस्यों ने बीस से अधिक वर्षों से इन भूखंडों पर खेती की है! आप हमेशा से किस तरह की सब्जियां खुद काटना चाहते थे?',
      expectedFunction: 'Express Long-Term Desires with "Have Always Wanted" & Vegetables',
      contextGoal:
        'Explain that you have always wanted to grow heirloom tomatoes and sweet peppers; ask Marcus how long it takes for tomato plants to bear fruit from seeds.',
      targetVocabulary: ['have always wanted to grow heirloom tomatoes', 'love cooking with fresh sweet peppers', 'how long does it take from seed to harvest?', 'organic compost'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'I have always wanted to grow organic heirloom tomatoes and sweet peppers! Fresh homegrown tomatoes taste so much better than supermarket ones. How long does it usually take from planting seeds to harvest?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Vegetable Preferences (tomatoes / peppers / carrots / vegetables / always wanted / organic)',
          patterns: ['tomatoes', 'peppers', 'vegetables', 'always wanted', 'organic', 'grow', 'harvest'],
          required: true,
        },
        {
          name: 'Growth Duration Inquiry (how long / take / seeds / harvest / months)',
          patterns: ['how long', 'take', 'seeds', 'harvest', 'grow', 'weeks', 'months'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_125_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I have always ___ (want) to harvest my own tomatoes."',
        options: [
          { id: 'opt_1', text: 'wanted', isCorrect: true },
          { id: 'opt_2', text: 'wanting', isCorrect: false },
          { id: 'opt_3', text: 'want', isCorrect: false },
        ],
        correctAnswer: 'wanted',
        explanation: 'Use the past participle "wanted" with "have always".',
      },
    },
    {
      id: 'turn_a2_125_3',
      turnIndex: 3,
      partnerPrompt:
        'Tomatoes take about three months from seedlings to ripe fruit, especially in our warm south-facing polytunnels. We have reserved Plot 14 for you, right next to the compost heaps. Have you used communal composting systems before, or is this new for you?',
      partnerAudioText:
        'Tomatoes take about three months from seedlings to ripe fruit, especially in our warm south-facing polytunnels. We have reserved Plot 14 for you, right next to the compost heaps. Have you used communal composting systems before, or is this new for you?',
      partnerQuestionHindi:
        'टमाटर को पौध से पके फल तक लगभग तीन महीने लगते हैं, खासकर हमारे गर्म दक्षिण-मुखी पॉलीटनल में। हमने आपके लिए कम्पोस्ट के ढेरों के ठीक बगल में प्लॉट 14 आरक्षित किया है। क्या आपने पहले कभी सामुदायिक खाद प्रणाली का उपयोग किया है, या यह आपके लिए नया है?',
      expectedFunction: 'Describe Composting Experience & Duration (have separated compost since 2021)',
      contextGoal:
        'State that you have separated food scraps for composting since 2021, but you have never maintained a large outdoor three-bin compost heap before.',
      targetVocabulary: ['have composted kitchen food scraps since 2021', 'have never managed a large three-bin system', 'eager to learn how to aerate the soil', 'Plot 14 sounds ideal'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'I have separated kitchen food scraps for composting at home since 2021, but I have never worked with a large three-bin outdoor compost system. I am very eager to learn how you turn the compost here!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Compost Experience (composted / scraps / since 2021 / at home / never used large system)',
          patterns: ['compost', 'composted', 'since 2021', 'since', 'food scraps', 'home', 'never worked', 'never used', 'learn'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_125_3',
        type: 'multiple_choice',
        prompt: 'Which sentence uses "since" correctly?',
        options: [
          { id: 'opt_1', text: 'I have composted organic waste since 2021.', isCorrect: true },
          { id: 'opt_2', text: 'I have composted organic waste since three years.', isCorrect: false },
          { id: 'opt_3', text: 'I compost since 2021.', isCorrect: false },
        ],
        correctAnswer: 'I have composted organic waste since 2021.',
        explanation: '"Since" points to the starting year 2021.',
      },
    },
    {
      id: 'turn_a2_125_4',
      turnIndex: 4,
      partnerPrompt:
        'We have volunteer workshop sessions every Saturday morning at 10:00 AM, where we turn the compost and share gardening tips over tea. Here is your shed key for Plot 14. Welcome to the community, Alex!',
      partnerAudioText:
        'We have volunteer workshop sessions every Saturday morning at 10:00 AM, where we turn the compost and share gardening tips over tea. Here is your shed key for Plot 14. Welcome to the community, Alex!',
      partnerQuestionHindi:
        'हमारे पास हर शनिवार सुबह 10:00 बजे स्वयंसेवक कार्यशाला सत्र होते हैं, जहाँ हम खाद पलटते हैं और चाय पर बागवानी के सुझाव साझा करते हैं। यहाँ प्लॉट 14 के लिए आपकी शेड की चाबी है। समुदाय में आपका स्वागत है, एलेक्स!',
      expectedFunction: 'Accept Key, Confirm Saturday Attendance & Conclude Friendly Exchange',
      contextGoal:
        'Thank Marcus warmly for the key and orientation; confirm you will attend Saturday’s 10:00 AM session and bring your gardening tools.',
      targetVocabulary: ['thank you Marcus for the orientation and the key', 'will see you on Saturday at 10:00 AM', 'excited to start planting in Plot 14', 'have a wonderful day'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Thank you so much Marcus for the warm orientation and the shed key! I will see you on Saturday morning at 10:00 AM with my gardening trowel and gloves. I am thrilled to be part of the allotment!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Saturday Confirmation (thank you / marcus / key / saturday / 10:00 / plot 14)',
          patterns: ['thank you', 'thanks', 'marcus', 'key', 'saturday', '10:00', '10 am', 'gloves', 'allotment', 'thrilled'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_125_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I am thrilled to be ___ (part / party) of this garden community."',
        options: [
          { id: 'opt_1', text: 'part', isCorrect: true },
          { id: 'opt_2', text: 'party', isCorrect: false },
          { id: 'opt_3', text: 'parted', isCorrect: false },
        ],
        correctAnswer: 'part',
        explanation: 'The standard phrase is "to be part of".',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 75,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 70,
  },
};
