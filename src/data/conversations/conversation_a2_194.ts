import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_194: ConversationDefinition = {
  id: 'conv_a2_194',
  title: 'Storytelling, Folk Tales, Urban Legends & Cultural Myths',
  cefr: 'A2',
  unitId: 'unit_a2_13',
  lessonLinks: ['lesson_a2_13_194'],
  estimatedMinutes: 5,
  scenario:
    'You are sitting around an evening campfire with your Scottish tour guide Callum in the Highlands. You are sharing folk stories and mythological tales, using Past Simple and Past Continuous with "while" and "when" to describe mysterious lake creatures and ancient legends.',
  communicativeGoals: [
    'Use narrative past tenses (Past Simple & Past Continuous with while / when) to narrate folk stories and myths',
    'Structure story events with chronological sequencing (Once upon a time, One stormy evening, Suddenly, In the end)',
    'Describe mythical creatures, brave heroes, ancient castles, and mysterious legends',
    'Engage an audience with suspenseful narrative pauses and expressive storytelling',
  ],
  canDoStatements: [
    'Can tell a simple mythological folk story or legend in English using narrative past tenses',
    'Can combine background actions (Past Continuous) and sudden events (Past Simple) with while and when',
    'Can describe ancient legends and mythical creatures with clear descriptive language',
  ],
  characters: [
    {
      id: 'char_callum_guide',
      name: 'Callum',
      role: 'Highland Tour Guide & Storyteller',
      avatar: '🐉',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'legend',
        ipa: '/ˈledʒənd/',
        partOfSpeech: 'noun',
        meaning: 'A traditional story sometimes regarded as historical but unauthenticated',
        exampleSentence: 'The legend of the Loch Ness monster is known across the world.',
        translations: { hi: 'दंतकथा / पौराणिक कथा' },
      },
      {
        word: 'creature',
        ipa: '/ˈkriːtʃə(r)/',
        partOfSpeech: 'noun',
        meaning: 'An animal, as distinct from a human being; an imaginary or mythical being',
        exampleSentence: 'Ancient stories tell of a mythical creature living deep in the mist.',
        translations: { hi: 'जीव / प्राणी' },
      },
      {
        word: 'ancient',
        ipa: '/ˈeɪnʃənt/',
        partOfSpeech: 'adjective',
        meaning: 'Belonging to the very distant past and no longer in existence',
        exampleSentence: 'The brave knight explored the ancient ruins on the island.',
        translations: { hi: 'प्राचीन' },
      },
      {
        word: 'suddenly',
        ipa: '/ˈsʌdənli/',
        partOfSpeech: 'adverb',
        meaning: 'Quickly and unexpectedly',
        exampleSentence: 'While the fishermen were sailing, a giant shadow suddenly appeared.',
        translations: { hi: 'अचानक' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'While the villagers were sleeping, a strange light appeared in the forest.',
        functionCategory: 'Narrative background with while + continuous',
        exampleSentence: 'While they were traveling, the storm started.',
      },
      {
        phrase: 'He was walking near the lake when he heard a mysterious sound.',
        functionCategory: 'Interrupted action with when + past simple',
        exampleSentence: 'She was reading an old book when the lights went out.',
      },
      {
        phrase: 'According to the ancient legend, a brave guardian protected the valley.',
        functionCategory: 'Introducing legendary narrative',
        exampleSentence: 'Folk tales say the castle was built by magic.',
      },
      {
        phrase: 'In the end, peace was restored to the village.',
        functionCategory: 'Concluding a folk story',
        exampleSentence: 'They never saw the mysterious creature again.',
      },
    ],
    grammar: {
      title: 'Narrative Tenses: Past Continuous (Background) + Past Simple (Interrupting Event)',
      conceptExplanation:
        '1. Past Continuous describes a background action in progress:\n   Formula: was / were + Verb-ing\n   Example: "The rain was falling heavily..."\n2. Past Simple describes completed story events and sudden interruptions:\n   Formula: Past form of verb (-ed or irregular)\n   Example: "...when suddenly the dragon appeared."\n3. Connecting words:\n   - While + Past Continuous: "While I was walking..."\n   - When + Past Simple: "...when a loud roar broke the silence."',
      patternFormula: 'While + [Subject + was/were + Verb-ing], [Subject + Past Simple Verb]  |  [Subject + was/were + Verb-ing] + when + [Subject + Past Simple Verb]',
      contrastExamples: [
        {
          incorrect: 'While he walked by the lake, he was seeing a creature.',
          correct: 'While he was walking by the lake, he saw a creature.',
          explanation: 'Background action in progress takes Past Continuous (was walking); completed perception takes Past Simple (saw).',
        },
        {
          incorrect: 'When the knight was sleeping, the dragon attacked.',
          correct: 'While the knight was sleeping, the dragon attacked.',
          explanation: 'Use "While" to introduce longer continuous actions in progress.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Callum',
        text: 'The campfire is warm, and the mist is rising over the loch. Do you know any traditional folk tales or legends from your region?',
        translation: 'अलाव गर्म है, और झील पर धुंध उठ रही है। क्या आप अपने क्षेत्र की कोई पारंपरिक लोककथा या दंतकथा जानते हैं?',
      },
      {
        speaker: 'Learner',
        text: 'Yes! Ancient stories tell of a brave warrior who protected the mountains from a magical beast.',
        translation: 'हाँ! प्राचीन कहानियाँ एक बहादुर योद्धा के बारे में बताती हैं जिसने एक जादुई जानवर से पहाड़ों की रक्षा की थी।',
      },
      {
        speaker: 'Callum',
        text: 'Fascinating! What was happening when the warrior first encountered the beast?',
        translation: 'दिलचस्प! जब योद्धा का पहली बार उस जानवर से सामना हुआ तब क्या हो रहा था?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_194_1',
      type: 'fill_blank',
      prompt: 'Complete with the correct narrative tenses: "While the sailors ______ (row) across the lake, the water suddenly ______ (turn) dark."',
      options: [
        { id: 'opt_1', text: 'were rowing / turned', isCorrect: true },
        { id: 'opt_2', text: 'rowed / was turning', isCorrect: false },
        { id: 'opt_3', text: 'are rowing / turned', isCorrect: false },
      ],
      correctAnswer: 'were rowing / turned',
      explanation: 'Background action (were rowing) interrupted by sudden event (turned).',
    },
    {
      id: 'cp_194_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "while" and "when" for storytelling?',
      options: [
        { id: 'opt_1', text: 'The princess was wandering in the forest when she discovered a glowing crystal.', isCorrect: true },
        { id: 'opt_2', text: 'The princess wandered in the forest while she was discover a crystal.', isCorrect: false },
        { id: 'opt_3', text: 'The princess was wander when she discovered a crystal.', isCorrect: false },
      ],
      correctAnswer: 'The princess was wandering in the forest when she discovered a glowing crystal.',
      explanation: 'Past Continuous (was wandering) + when + Past Simple (discovered).',
    },
    {
      id: 'cp_194_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [heard a roar / while the travelers / were camping / they suddenly]',
      correctAnswer: 'while the travelers were camping they suddenly heard a roar',
      explanation: 'While clause + main clause with sudden past action.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_194_1',
      prompt: 'Construct a story sentence stating that while the village was celebrating, an ancient eagle appeared.',
      scenarioContext: 'Telling a folk tale around the fire.',
      targetStructure: 'While the villagers were celebrating, a giant golden eagle appeared in the sky.',
      wordBank: ['While', 'the villagers', 'were celebrating,', 'a giant golden eagle', 'appeared', 'in the sky'],
      acceptableSolutions: [
        'While the villagers were celebrating, a giant golden eagle appeared in the sky.',
        'While the villagers were celebrating, an ancient eagle appeared in the sky.',
      ],
      explanation: 'While + Past Continuous (were celebrating) followed by Past Simple (appeared).',
    },
    {
      id: 'sc_194_2',
      prompt: 'Construct a sentence stating that the brave hero was crossing the bridge when the storm began.',
      scenarioContext: 'Building dramatic tension.',
      targetStructure: 'The brave hero was crossing the river when the fierce storm began.',
      wordBank: ['The brave hero', 'was crossing', 'the river', 'when', 'the fierce storm', 'began'],
      acceptableSolutions: [
        'The brave hero was crossing the river when the fierce storm began.',
        'The hero was crossing the bridge when the storm began.',
      ],
      explanation: 'Past Continuous + when + Past Simple.',
    },
  ],
  turns: [
    {
      id: 'turn_194_1',
      turnIndex: 1,
      partnerPrompt:
        'Gather around the campfire, my friends! Out here in the misty Highlands, every valley has a legend. Tell me, do you have a famous myth, folk hero, or magical legend from your culture?',
      partnerAudioText:
        'Gather around the campfire, my friends! Out here in the misty Highlands, every valley has a legend. Tell me, do you have a famous myth, folk hero, or magical legend from your culture?',
      partnerQuestionHindi:
        'अलाव के चारों ओर इकट्ठा हो जाइए, दोस्तों! यहाँ धुंधले हाइलैंड्स में, हर घाटी की एक कहानी है। मुझे बताइए, क्या आपकी संस्कृति में कोई प्रसिद्ध मिथक, लोक नायक या जादुई दंतकथा है?',
      expectedFunction: 'Introducing a folk legend or myth using narrative past structures',
      contextGoal: 'Introduce an ancient story (e.g. brave king, mythical dragon/bird, guardian of mountains)',
      targetVocabulary: ['legend', 'ancient', 'brave', 'story', 'hero', 'creature'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Yes! There is an ancient legend about a brave prince who protected our kingdom from a magical beast.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'We have a famous folk tale about a mysterious bird that brought golden light to the valley.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'According to our ancient folklore, a giant guardian lived inside the snowy mountains and protected travelers.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'legend_intro',
          patterns: ['legend', 'folk tale', 'myth', 'ancient', 'story', 'folklore', 'long ago'],
          required: true,
        },
        {
          name: 'hero_or_subject',
          patterns: ['prince', 'king', 'warrior', 'hero', 'beast', 'bird', 'guardian', 'dragon', 'creature', 'brave'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_194_1_legend_tense',
          pattern: /ancient legend is telling/i,
          errorType: 'grammar',
          message: 'Say "An ancient legend tells..." or "According to an ancient legend...".',
          correctionPattern: 'According to an ancient legend...',
        },
      ],
      remediationPractice: {
        id: 'rem_194_1',
        type: 'fill_blank',
        prompt: 'Fill in: "An ancient legend ______ (tell) of a hero."',
        options: [
          { id: 'r1', text: 'tells', isCorrect: true },
          { id: 'r2', text: 'was telling', isCorrect: false },
        ],
        correctAnswer: 'tells',
        explanation: 'We use present "tells" to introduce timeless legends.',
      },
    },
    {
      id: 'turn_194_2',
      turnIndex: 2,
      partnerPrompt:
        'A magical guardian! That sounds captivating. What was happening in the story when the danger or great challenge first began?',
      partnerAudioText:
        'A magical guardian! That sounds captivating. What was happening in the story when the danger or great challenge first began?',
      partnerQuestionHindi:
        'एक जादुई संरक्षक! यह बहुत आकर्षक लगता है। कहानी में तब क्या हो रहा था जब खतरा या बड़ी चुनौती पहली बार शुरू हुई?',
      expectedFunction: 'Narrating background and sudden event with "while" and "when"',
      contextGoal: 'Use Past Continuous and Past Simple (e.g. while the villagers were sleeping, a storm/creature arrived)',
      targetVocabulary: ['while', 'when', 'were', 'was', 'suddenly', 'appeared', 'storm'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'While the villagers were sleeping peacefully, a fierce storm suddenly struck the valley.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'The prince was traveling through the dark forest when he suddenly heard a loud magical roar.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'While everyone was celebrating the autumn harvest, dark clouds gathered and a giant shadow appeared over the castle.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'continuous_background',
          patterns: ['while', 'was', 'were', 'sleeping', 'traveling', 'celebrating', 'walking', 'living'],
          required: true,
        },
        {
          name: 'interrupting_event',
          patterns: ['when', 'suddenly', 'struck', 'appeared', 'heard', 'came', 'arrived', 'began'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_194_2_while_simple',
          pattern: /while the villagers slept, suddenly/i,
          errorType: 'grammar',
          message: 'Use Past Continuous after "while": "While the villagers were sleeping...".',
          correctionPattern: 'While the villagers were sleeping...',
        },
      ],
      remediationPractice: {
        id: 'rem_194_2',
        type: 'multiple_choice',
        prompt: 'Which sentence has the correct narrative grammar?',
        options: [
          { id: 'r1', text: 'While the hero was sleeping, the creature entered.', isCorrect: true },
          { id: 'r2', text: 'When the hero was slept, the creature was enter.', isCorrect: false },
        ],
        correctAnswer: 'While the hero was sleeping, the creature entered.',
        explanation: 'While + Past Continuous followed by Past Simple.',
      },
    },
    {
      id: 'turn_194_3',
      turnIndex: 3,
      partnerPrompt:
        'My heart was pounding just listening to that! How did the hero confront this challenge, and how did the story conclude?',
      partnerAudioText:
        'My heart was pounding just listening to that! How did the hero confront this challenge, and how did the story conclude?',
      partnerQuestionHindi:
        'यह सुनकर मेरा दिल धड़कने लगा! नायक ने इस चुनौती का सामना कैसे किया, और कहानी का अंत कैसे हुआ?',
      expectedFunction: 'Resolving the story plot and concluding with past tenses',
      contextGoal: 'Explain how the hero solved the problem bravely and peace/light was restored in the end',
      targetVocabulary: ['brave', 'fought', 'saved', 'restored', 'in the end', 'peace'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'The brave hero used wisdom and magic to calm the beast, and in the end, peace returned to the land.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'He fought bravely with his golden sword. In the end, he saved the kingdom and became a legendary king.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Instead of fighting, the hero discovered the beast was injured. He healed it, and they became lifelong allies.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'heroic_action',
          patterns: ['brave', 'fought', 'calmed', 'healed', 'used', 'saved', 'discovered', 'helped'],
          required: true,
        },
        {
          name: 'resolution',
          patterns: ['in the end', 'peace', 'returned', 'became', 'saved', 'allies', 'land', 'happy'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_194_3_in_the_end',
          pattern: /at the end he saved/i,
          errorType: 'vocabulary',
          message: 'Use "In the end" to describe the final outcome of a story: "In the end, peace was restored".',
          correctionPattern: 'In the end,',
        },
      ],
      remediationPractice: {
        id: 'rem_194_3',
        type: 'fill_blank',
        prompt: 'Fill in: "______ (In) the end, everyone was safe."',
        options: [
          { id: 'r1', text: 'In', isCorrect: true },
          { id: 'r2', text: 'At', isCorrect: false },
        ],
        correctAnswer: 'In',
        explanation: 'We say "in the end" for narrative conclusions.',
      },
    },
    {
      id: 'turn_194_4',
      turnIndex: 4,
      partnerPrompt:
        'What a marvelous story! It reminds me of the Scottish tale of the water spirits. Storytelling connects people across centuries and continents, doesn’t it?',
      partnerAudioText:
        'What a marvelous story! It reminds me of the Scottish tale of the water spirits. Storytelling connects people across centuries and continents, doesn’t it?',
      partnerQuestionHindi:
        'कितनी शानदार कहानी है! यह मुझे जल आत्माओं की स्कॉटिश कहानी की याद दिलाती है। कहानी कहना सदियों और महाद्वीपों के लोगों को जोड़ता है, है ना?',
      expectedFunction: 'Agreeing warmly with the tag question and celebrating storytelling traditions',
      contextGoal: 'Agree enthusiastically, thank Callum for the campfire session, and enjoy the night',
      targetVocabulary: ['doesn\'t it', 'connects', 'thank you', 'Callum', 'campfire', 'storytelling'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'It really does! Thank you for sharing this wonderful campfire evening with us, Callum.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'It truly does. Stories show how similar all our cultures are. Thanks for the great night!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'It definitely does! Listening to myths by the crackling fire in the Highlands is unforgettable. Thank you Callum!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'tag_agreement',
          patterns: ['does', 'really', 'truly', 'definitely', 'yes', 'agreed'],
          required: true,
        },
        {
          name: 'warm_campfire_closing',
          patterns: ['thank you', 'callum', 'campfire', 'stories', 'night', 'unforgettable', 'cultures'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_194_4_short',
          pattern: /^(yes it does|ok thanks)$/i,
          errorType: 'interaction',
          message: 'Provide an engaging, warm conclusion around the campfire.',
          correctionPattern: 'It really does! Thank you Callum for this memorable evening.',
        },
      ],
      remediationPractice: {
        id: 'rem_194_4',
        type: 'multiple_choice',
        prompt: 'Which response closes the campfire storytelling session with warmth?',
        options: [
          { id: 'r1', text: 'It really does! Thank you Callum for sharing this memorable evening around the fire.', isCorrect: true },
          { id: 'r2', text: 'Yes, story ended.', isCorrect: false },
        ],
        correctAnswer: 'It really does! Thank you Callum for sharing this memorable evening around the fire.',
        explanation: 'Warm, natural, and contextually rich closing.',
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
