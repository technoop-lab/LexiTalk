import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_94: ConversationDefinition = {
  id: 'conv_a2_94',
  title: 'Storytelling & Narrative Sequencing Connectors',
  cefr: 'A2',
  unitId: 'unit_a2_7',
  lessonLinks: ['lesson_a2_7_94'],
  estimatedMinutes: 5,
  scenario:
    'You are taking part in a friendly community storytelling workshop in Edinburgh with coordinator Chloe Bennett. Chloe asks you to recount a personal anecdote about an unexpected travel mishap or surprising event. Tell your story step-by-step using narrative connectors (first, then, suddenly, after that, finally), react to questions, and ask about her stories.',
  communicativeGoals: [
    'Structure a clear personal anecdote in chronological order using narrative sequencing connectors (first, then, next, suddenly, after that, finally)',
    'Build narrative tension using "suddenly", "meanwhile", or "to my surprise"',
    'Explain how the problem was resolved and what lesson you learned',
    'Engage the listener with interactive questions and natural storytelling reactions',
  ],
  canDoStatements: [
    'Can tell a simple story or describe an unexpected event in a coherent sequence of points (CEFR A2)',
    'Can use temporal connectors (first, then, after that, suddenly, finally) appropriately',
    'Can express feelings and reactions during a narrative exchange',
  ],
  characters: [
    {
      id: 'char_chloe_bennett',
      name: 'Chloe Bennett',
      role: 'Community Storytelling Host',
      avatar: '🎭',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'suddenly',
        ipa: '/ˈsʌdənli/',
        partOfSpeech: 'adverb',
        meaning: 'Quickly and unexpectedly',
        exampleSentence: 'Suddenly, the station lights flickered and the train stopped.',
        translations: { hi: 'अचानक / एकाएक' },
      },
      {
        word: 'anecdote',
        ipa: '/ˈænɪkdoʊt/',
        partOfSpeech: 'noun',
        meaning: 'A short interesting or amusing real story about an event',
        exampleSentence: 'Alex shared a hilarious anecdote about getting lost in the fog.',
        translations: { hi: 'लघु कथा / व्यक्तिगत किस्सा' },
      },
      {
        word: 'meanwhile',
        ipa: '/ˈmiːnwaɪl/',
        partOfSpeech: 'adverb',
        meaning: 'In the intervening period of time; at the same time',
        exampleSentence: 'I searched for the ticket; meanwhile, the conductor was waiting.',
        translations: { hi: 'इसी बीच / इस दौरान' },
      },
      {
        word: 'eventually',
        ipa: '/ɪˈvɛntʃuəli/',
        partOfSpeech: 'adverb',
        meaning: 'In the end, especially after a long time or a lot of effort',
        exampleSentence: 'Eventually, we found our way back to the main road.',
        translations: { hi: 'अंततः / आखिरकार' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'It all started when...',
        functionCategory: 'Story Opening',
        exampleSentence: 'It all started when our GPS lost signal in the highlands.',
      },
      {
        phrase: 'Suddenly, out of nowhere...',
        functionCategory: 'Introducing Unexpected Twist',
        exampleSentence: 'Suddenly, out of nowhere, heavy fog rolled across the road.',
      },
      {
        phrase: 'After that, we decided to...',
        functionCategory: 'Narrative Action Sequencing',
        exampleSentence: 'After that, we decided to pull over at a roadside café.',
      },
      {
        phrase: 'In the end, everything turned out fine.',
        functionCategory: 'Story Resolution',
        exampleSentence: 'In the end, everything turned out fine and we made great friends.',
      },
    ],
    grammar: {
      title: 'Narrative Linkers (First, Then, After that, Suddenly, Meanwhile, Finally)',
      conceptExplanation:
        'Narrative linkers guide the listener through chronological events. Start with "First" or "In the beginning", progress with "Then", "Next", or "After that", insert tension with "Suddenly" or "Meanwhile", and conclude with "Finally", "In the end", or "Eventually". Always place a comma after introductory sentence connectors.',
      patternFormula: '[Connector], + Subject + [Past Simple Action]',
      contrastExamples: [
        {
          incorrect: 'Suddenly train arrived then I am happy.',
          correct: 'Suddenly, the train arrived. After that, we were very relieved.',
          explanation: 'Use proper punctuation and past simple verbs with connectors.',
        },
        {
          incorrect: 'Finally we first went home.',
          correct: 'First, we explored the town, and finally, we went home.',
          explanation: 'Respect the chronological sequence of connectors.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Chloe Bennett',
        text: 'Welcome to the circle! Can you tell us about a memorable surprise that happened during one of your journeys?',
        translation: 'सर्कल में आपका स्वागत है! क्या आप हमें किसी ऐसी यादगार घटना के बारे में बता सकते हैं जो आपकी यात्रा के दौरान अप्रत्याशित रूप से घटी?',
      },
      {
        speaker: 'You',
        text: 'Certainly! It all started last autumn when I took the coastal train to Aberdeen. First, the weather was beautiful, but suddenly, the locomotive halted in the middle of the countryside!',
        translation: 'ज़रूर! यह सब पिछली शरद ऋतु में शुरू हुआ जब मैंने एबरडीन के लिए तटीय ट्रेन ली। पहले तो मौसम बहुत खूबसूरत था, लेकिन अचानक ग्रामीण इलाके के बीच में ट्रेन रुक गई!',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_94_1',
      type: 'multiple_choice',
      prompt: 'Which connector best introduces an unexpected surprise in a narrative?',
      options: [
        { id: 'opt_1', text: 'Suddenly,', isCorrect: true },
        { id: 'opt_2', text: 'Firstly,', isCorrect: false },
        { id: 'opt_3', text: 'Usually,', isCorrect: false },
      ],
      correctAnswer: 'Suddenly,',
      explanation: '"Suddenly" introduces sudden or unexpected events that create narrative interest.',
    },
    {
      id: 'cp_a2_94_2',
      type: 'fill_blank',
      prompt: 'Complete the sequence: "First we bought tickets, ___ we boarded the ferry."',
      options: [
        { id: 'opt_1', text: 'then', isCorrect: true },
        { id: 'opt_2', text: 'before that', isCorrect: false },
        { id: 'opt_3', text: 'suddenly earlier', isCorrect: false },
      ],
      correctAnswer: 'then',
      explanation: '"First... then..." establishes direct chronological progression.',
    },
    {
      id: 'cp_a2_94_3',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly concludes a personal story?',
      options: [
        { id: 'opt_1', text: 'Finally, the friendly locals helped us find our way back.', isCorrect: true },
        { id: 'opt_2', text: 'First, the friendly locals helped us find our way back.', isCorrect: false },
        { id: 'opt_3', text: 'Meanwhile, the story starts now.', isCorrect: false },
      ],
      correctAnswer: 'Finally, the friendly locals helped us find our way back.',
      explanation: '"Finally" or "In the end" marks the closing resolution of a story.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_94_1',
      scenarioContext: 'Start a narrative with chronological connectors.',
      prompt: 'Build: "First the sun was shining, but suddenly it started to rain."',
      targetStructure: 'Connector + past clause + but + connector + past clause',
      wordBank: ['First', 'the', 'sun', 'was', 'shining', 'but', 'suddenly', 'it', 'started', 'to', 'rain', 'sudden'],
      acceptableSolutions: [
        'First the sun was shining, but suddenly it started to rain',
        'First the sun was shining, but suddenly it started to rain.',
        'First, the sun was shining, but suddenly it started to rain.',
      ],
      explanation: 'Connects initial state with sudden disruption.',
    },
    {
      id: 'sc_a2_94_2',
      scenarioContext: 'Conclude your anecdote with a positive resolution.',
      prompt: 'Build: "In the end we reached the village safely."',
      targetStructure: 'Time phrase + subject + past verb + object + adverb',
      wordBank: ['In', 'the', 'end', 'we', 'reached', 'the', 'village', 'safely', 'reach', 'safe'],
      acceptableSolutions: [
        'In the end we reached the village safely',
        'In the end, we reached the village safely.',
      ],
      explanation: 'Resolves the story using "In the end" and past verb "reached".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_94_1',
      turnIndex: 1,
      partnerPrompt:
        'Welcome everyone to our storytelling workshop! Alex, you have the floor first. How did your memorable travel incident begin? Set the scene for us!',
      partnerAudioText:
        'Welcome everyone to our storytelling workshop! Alex, you have the floor first. How did your memorable travel incident begin? Set the scene for us!',
      partnerQuestionHindi:
        'हमारी कहानी कार्यशाला में सभी का स्वागत है! एलेक्स, पहले आपकी बारी है। आपकी यादगार यात्रा की घटना कैसे शुरू हुई? हमारे लिए दृश्य प्रस्तुत करें!',
      expectedFunction: 'Open Personal Anecdote with Narrative Setting & Initial Sequence',
      contextGoal:
        'Begin your story: taking a scenic mountain train last winter; first the views were clear, but suddenly thick snowfall blanketed the tracks.',
      targetVocabulary: ['it all started last winter', 'first the journey was smooth', 'suddenly heavy snowfall began', 'train halted on the tracks'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'Thank you Chloe! It all started last winter during a mountain train trip to the Scottish Highlands. First, the morning was calm and sunny. But suddenly, thick snowfall began and the train came to an unexpected stop in the middle of nowhere!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'It began on a train trip last winter. First everything was peaceful, but suddenly a blizzard started and our train halted on the tracks!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Story Opening & Setting',
          patterns: ['started', 'began', 'winter', 'train', 'trip', 'journey', 'mountains', 'highlands', 'scotland'],
          required: true,
        },
        {
          name: 'Narrative Connectors (First & Suddenly)',
          patterns: ['first', 'suddenly', 'thick snow', 'snowfall', 'stopped', 'halted', 'blizzard'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_94_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "First we felt calm, but ___ the engine stopped."',
        options: [
          { id: 'opt_1', text: 'suddenly', isCorrect: true },
          { id: 'opt_2', text: 'usually', isCorrect: false },
          { id: 'opt_3', text: 'often', isCorrect: false },
        ],
        correctAnswer: 'suddenly',
        explanation: '"Suddenly" introduces the unexpected turning point.',
      },
    },
    {
      id: 'turn_a2_94_2',
      turnIndex: 2,
      partnerPrompt:
        'Oh wow, stranded in the snowy Highlands! What happened next? How did the passengers and conductor react?',
      partnerAudioText:
        'Oh wow, stranded in the snowy Highlands! What happened next? How did the passengers and conductor react?',
      partnerQuestionHindi:
        'अरे वाह, बर्फीले हाइलैंड्स में फंसे हुए! इसके बाद क्या हुआ? यात्रियों और कंडक्टर ने कैसी प्रतिक्रिया दी?',
      expectedFunction: 'Sequence Middle Actions using Connectors (Then, Meanwhile, After that)',
      contextGoal:
        'Explain that the conductor made an announcement; meanwhile, passengers shared warm tea and biscuits, and after that, everyone started singing Scottish folk songs.',
      targetVocabulary: ['then the conductor explained the delay', 'meanwhile passengers shared hot tea', 'after that we started singing', 'brought everyone together'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'Then, the conductor explained that snowplows were clearing the tracks ahead. Meanwhile, a kind family beside me shared thermos flasks of hot Earl Grey tea and shortbread. After that, someone pulled out an acoustic guitar, and the whole carriage began singing!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Then the conductor gave us updates. Meanwhile, we shared hot tea and snacks, and after that, we sang songs together to pass the time.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Connectors (Then / Meanwhile / After that)',
          patterns: ['then', 'meanwhile', 'after that', 'next'],
          required: true,
        },
        {
          name: 'Actions & Community Spirit',
          patterns: ['conductor', 'tea', 'shared', 'biscuits', 'guitar', 'singing', 'songs', 'passengers'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_94_2',
        type: 'multiple_choice',
        prompt: 'Which connector describes two events occurring simultaneously?',
        options: [
          { id: 'opt_1', text: 'Meanwhile,', isCorrect: true },
          { id: 'opt_2', text: 'Firstly,', isCorrect: false },
          { id: 'opt_3', text: 'Yesterday,', isCorrect: false },
        ],
        correctAnswer: 'Meanwhile,',
        explanation: '"Meanwhile" signals simultaneous ongoing activities.',
      },
    },
    {
      id: 'turn_a2_94_3',
      turnIndex: 3,
      partnerPrompt:
        'Turning a train delay into an impromptu concert is wonderful! How did the story end, and how long were you stuck before moving again?',
      partnerAudioText:
        'Turning a train delay into an impromptu concert is wonderful! How did the story end, and how long were you stuck before moving again?',
      partnerQuestionHindi:
        'ट्रेन की देरी को एक संगीत कार्यक्रम में बदलना शानदार है! कहानी कैसे समाप्त हुई, और दोबारा आगे बढ़ने से पहले आप कितनी देर तक फंसे रहे?',
      expectedFunction: 'Conclude Story with Resolution (Finally, In the end) & Ask Follow-up',
      contextGoal:
        'Explain that after two hours the snowplow cleared the path; finally the train arrived in Inverness; ask Chloe if she has ever experienced a similar travel delay.',
      targetVocabulary: ['finally after two hours', 'snowplow cleared the tracks', 'arrived safely in Inverness', 'have you ever had a similar experience'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'Finally, after about two hours, the snowplows cleared the railway line and our train moved forward. In the end, we arrived safely in Inverness with brand-new friends! Have you ever experienced an unexpected travel adventure like that, Chloe?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Finally, the tracks were cleared after two hours and we reached our destination safely. What about you, Chloe? Have you had any travel surprises?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Resolution Connectors (Finally / In the end)',
          patterns: ['finally', 'in the end', 'eventually', 'two hours', 'cleared', 'arrived', 'safely', 'destination'],
          required: true,
        },
        {
          name: 'Follow-up Question',
          patterns: ['have you ever', 'what about you', 'did you ever', 'chloe', 'and you'],
          required: false,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_94_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "___, the train arrived safely at the station."',
        options: [
          { id: 'opt_1', text: 'Finally', isCorrect: true },
          { id: 'opt_2', text: 'Firstly', isCorrect: false },
          { id: 'opt_3', text: 'Always', isCorrect: false },
        ],
        correctAnswer: 'Finally',
        explanation: '"Finally" indicates the ultimate resolution of events.',
      },
    },
    {
      id: 'turn_a2_94_4',
      turnIndex: 4,
      partnerPrompt:
        'I was once stuck on a ferry near the Isle of Skye for three hours during a storm! Your story captured suspense, warmth, and great pacing. Thank you for sharing such a vivid memory with our group. What is your key takeaway from that snowy day?',
      partnerAudioText:
        'I was once stuck on a ferry near the Isle of Skye for three hours during a storm! Your story captured suspense, warmth, and great pacing. Thank you for sharing such a vivid memory with our group. What is your key takeaway from that snowy day?',
      partnerQuestionHindi:
        'मैं एक बार तूफान के दौरान आइल ऑफ स्काई के पास एक नौका पर तीन घंटे तक फंसी रही थी! आपकी कहानी ने रहस्य, गर्मजोशी और बेहतरीन गति को कैद किया। हमारे समूह के साथ इतनी जीवंत याद साझा करने के लिए धन्यवाद। उस बर्फीले दिन से आपकी मुख्य सीख क्या है?',
      expectedFunction: 'Reflect on Story Moral & Thank the Group',
      contextGoal:
        'Reflect that staying positive and helping others can turn any setback into a joyful memory; thank Chloe and the workshop group.',
      targetVocabulary: ['staying calm and positive', 'unexpected challenges bring people together', 'thank you Chloe', 'great listening to everyone'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'My biggest takeaway is that staying calm and positive can turn unexpected obstacles into wonderful memories. When people help each other, any delay becomes an adventure. Thank you so much Chloe and everyone for listening!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I learned that unexpected problems bring people together if you stay positive. Thank you Chloe for hosting this great workshop!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Moral / Reflection',
          patterns: ['positive', 'calm', 'memories', 'people', 'help', 'adventure', 'lesson', 'learned'],
          required: true,
        },
        {
          name: 'Appreciation',
          patterns: ['thank you', 'thanks', 'chloe', 'listening', 'workshop', 'group'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_94_4',
        type: 'multiple_choice',
        prompt: 'Which sentence expresses a thoughtful reflection on a past experience?',
        options: [
          { id: 'opt_1', text: 'I learned that staying optimistic turns setbacks into great memories.', isCorrect: true },
          { id: 'opt_2', text: 'Story finish goodbye now.', isCorrect: false },
          { id: 'opt_3', text: 'I was forget everything.', isCorrect: false },
        ],
        correctAnswer: 'I learned that staying optimistic turns setbacks into great memories.',
        explanation: 'Reflective, coherent closing sentence.',
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
