import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_209: ConversationDefinition = {
  id: 'conv_a2_209',
  title: 'Narrative Flow & Conversational Storytelling',
  cefr: 'A2',
  unitId: 'unit_a2_14',
  lessonLinks: ['lesson_a2_14_209'],
  estimatedMinutes: 5,
  scenario:
    'You are in the campus courtyard with your friend Zoe having an informal coffee break. You share a lighthearted story about a memorable travel mishap or first day on campus. You practice structuring narratives with sequential markers (One day, Suddenly, Meanwhile, In the end), using vivid details, and exchanging energetic conversational reactions ("No way!", "What happened next?").',
  communicativeGoals: [
    'Structure an engaging personal anecdote using temporal narrative linkers (In the beginning, Suddenly, Meanwhile, In the end)',
    'Incorporate vivid descriptive details and past simple/continuous tense combinations for narrative backgrounding',
    'Use dramatic pauses and pacing to maintain listener interest',
    'React actively to storytelling with expressive conversational rejoinders ("No way!", "You’re kidding!", "What happened next?")',
  ],
  canDoStatements: [
    'Can tell a simple personal story or anecdote in past tenses with clear chronological flow',
    'Can use narrative sequencing markers to guide the listener through a story',
    'Can react enthusiastically to peer stories with active listening interjections',
  ],
  characters: [
    {
      id: 'char_zoe_storyteller',
      name: 'Zoe',
      role: 'Friend & Literature Classmate',
      avatar: '📖',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'narrative',
        ipa: '/ˈnærətɪv/',
        partOfSpeech: 'noun',
        meaning: 'A spoken or written account of connected events; a story',
        exampleSentence: 'She told a captivating personal narrative about getting lost in Edinburgh.',
        translations: { hi: 'कहानी / वृत्तांत (नैरेटिव)' },
      },
      {
        word: 'suddenly',
        ipa: '/ˈsʌdənli/',
        partOfSpeech: 'adverb',
        meaning: 'Quickly and unexpectedly',
        exampleSentence: 'Suddenly, the train came to a complete halt in the tunnel.',
        translations: { hi: 'अचानक / एकाएक' },
      },
      {
        word: 'meanwhile',
        ipa: '/ˈmiːnwaɪl/',
        partOfSpeech: 'adverb',
        meaning: 'In the intervening period of time; at the same time in another place',
        exampleSentence: 'I was looking for my passport; meanwhile, the boarding gate was closing.',
        translations: { hi: 'इस दौरान / इसी बीच' },
      },
      {
        word: 'mishap',
        ipa: '/ˈmɪshæp/',
        partOfSpeech: 'noun',
        meaning: 'An unlucky accident or minor misfortune',
        exampleSentence: 'Despite the luggage mishap, we had a fantastic holiday.',
        translations: { hi: 'दुर्घटना / छोटी मुसीबत / गड़बड़' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'It all started a few months ago when I was traveling to York.',
        functionCategory: 'Narrative opening hook',
        exampleSentence: 'The funniest thing happened on my first day on campus.',
      },
      {
        phrase: 'Suddenly, the lights flickered and my laptop battery died completely!',
        functionCategory: 'Dramatic turning point',
        exampleSentence: 'All of a sudden, I realized I was on the wrong bus.',
      },
      {
        phrase: 'No way! What did you do next?',
        functionCategory: 'Story listener reaction',
        exampleSentence: 'You’re kidding! Did you manage to catch it in time?',
      },
      {
        phrase: 'In the end, everything worked out fine and we had a great laugh about it.',
        functionCategory: 'Narrative resolution & moral',
        exampleSentence: 'Finally, a kind stranger helped us find the right platform.',
      },
    ],
    grammar: {
      title: 'Narrative Tenses & Sequential Connectors',
      conceptExplanation:
        '1. Past Continuous for Scene Setting / Background Action:\n   - "I was waiting for the bus when..."\n   - "It was raining heavily and we were walking..."\n2. Past Simple for Main Sequence of Events:\n   - "Suddenly, the phone rang, I answered it, and..."\n3. Chronological Flow Markers:\n   - Beginning: "First of all / It all started when..."\n   - Development: "After that / Next / Meanwhile..."\n   - Surprise/Shift: "Suddenly / Out of the blue..."\n   - Conclusion: "In the end / Eventually / Finally..."',
      patternFormula: 'It all started when I was [Action] ➔ Suddenly, [Event] ➔ Meanwhile, [Parallel action] ➔ In the end, [Resolution]',
      contrastExamples: [
        {
          incorrect: 'I walk in street. Dog bark. I run. Finish.',
          correct: 'I was walking down the street when suddenly a huge dog began barking, so I ran as fast as I could!',
          explanation: 'Combine Past Continuous with Past Simple and dynamic connectors for narrative flow.',
        },
        {
          incorrect: 'In the finish, we are happy.',
          correct: 'In the end, everything turned out wonderfully.',
          explanation: 'Use "In the end" or "Finally", not "In the finish".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Zoe',
        text: 'Tell me that story about your very first day in the university accommodation!',
        translation: 'मुझे विश्वविद्यालय के आवास में अपने पहले दिन के बारे में वह कहानी सुनाओ!',
      },
      {
        speaker: 'Learner',
        text: 'It all started when I arrived with three giant suitcases. While I was unlocking my room door, suddenly the key snapped in half!',
        translation: 'यह सब तब शुरू हुआ जब मैं तीन विशाल सूटकेस लेकर पहुँचा। जब मैं अपने कमरे का दरवाजा खोल रहा था, तभी अचानक चाबी बीच में से टूट गई!',
      },
      {
        speaker: 'Zoe',
        text: 'No way! What on earth did you do next?',
        translation: 'बिल्कुल नहीं! आपने उसके बाद क्या किया?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_209_1',
      type: 'fill_blank',
      prompt: 'Complete the narrative link: "I was looking for my ticket; ______ (meanwhile / finish), the train was pulling out of the station."',
      options: [
        { id: 'opt_1', text: 'meanwhile', isCorrect: true },
        { id: 'opt_2', text: 'finish', isCorrect: false },
        { id: 'opt_3', text: 'start', isCorrect: false },
      ],
      correctAnswer: 'meanwhile',
      explanation: '"Meanwhile" connects simultaneous actions occurring in a narrative.',
    },
    {
      id: 'cp_209_2',
      type: 'multiple_choice',
      prompt: 'Which phrase is the natural English resolution for concluding a personal story?',
      options: [
        { id: 'opt_1', text: 'In the end, the security guard arrived with a spare key and saved the day.', isCorrect: true },
        { id: 'opt_2', text: 'In the finish the story is over.', isCorrect: false },
        { id: 'opt_3', text: 'At last end we go.', isCorrect: false },
      ],
      correctAnswer: 'In the end, the security guard arrived with a spare key and saved the day.',
      explanation: '"In the end," is the standard narrative conclusion phrase.',
    },
    {
      id: 'cp_209_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [suddenly / when / the bus broke down / I was travelling to London]',
      correctAnswer: 'I was travelling to London when suddenly the bus broke down',
      explanation: 'Background continuous + when suddenly + past simple event.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_209_1',
      prompt: 'Construct a dramatic narrative opening using "It all started when..." and past continuous.',
      scenarioContext: 'Starting a story about an unexpected rainstorm.',
      targetStructure: 'It all started when I was walking across the campus without an umbrella.',
      wordBank: ['It all started when', 'I was walking across', 'the campus courtyard', 'without an umbrella', 'last Tuesday.'],
      acceptableSolutions: [
        'It all started when I was walking across the campus without an umbrella.',
        'It all started when I was walking to the library without an umbrella.',
      ],
      explanation: 'Formula: It all started when I was [Action].',
    },
    {
      id: 'sc_209_2',
      prompt: 'Construct a sentence showing an active listener reaction to a dramatic story point.',
      scenarioContext: 'Reacting to a funny twist.',
      targetStructure: 'No way! Did you really manage to find your lost passport?',
      wordBank: ['No way!', 'Did you really manage', 'to find your lost passport', 'before boarding', 'the flight?'],
      acceptableSolutions: [
        'No way! Did you really manage to find your lost passport?',
        'No way! What happened next?',
      ],
      explanation: 'Conversational rejoinder: No way! + question.',
    },
  ],
  turns: [
    {
      id: 'turn_209_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! Grab your tea. You promised you would tell me that hilarious story about what happened on your first train trip from London to campus. How did it all begin?',
      partnerAudioText:
        'Hey! Grab your tea. You promised you would tell me that hilarious story about what happened on your first train trip from London to campus. How did it all begin?',
      partnerQuestionHindi:
        'अरे! अपनी चाय लो। आपने वादा किया था कि आप मुझे लंदन से कैंपस तक की अपनी पहली ट्रेन यात्रा में जो हुआ था, उसकी मज़ेदार कहानी सुनाएँगे। यह सब कैसे शुरू हुआ?',
      expectedFunction: 'Setting the narrative scene with past continuous and an opening hook',
      contextGoal: 'Start with "It all started when I was traveling..." with heavy luggage and boarded what you thought was the direct train',
      targetVocabulary: ['It all started when', 'was traveling', 'luggage', 'train', 'first time', 'London', 'Zoe'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'It all started when I was boarding the train at King’s Cross with two gigantic suitcases and a heavy backpack.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Well, it all began on my first morning in the UK. I was happily sitting on the train listening to music, thinking I was on the direct express to campus.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'The funniest thing happened! I was rushing through the station with my luggage, and I hopped onto what I thought was the express train just as the doors were closing.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'narrative_hook',
          patterns: ['it all started', 'it all began', 'funniest thing', 'first morning', 'first time'],
          required: true,
        },
        {
          name: 'scene_setting',
          patterns: ['boarding', 'sitting', 'traveling', 'rushing', 'suitcases', 'train', 'king’s cross', 'london', 'luggage'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_209_1_simple_past_only',
          pattern: /^i went train/i,
          errorType: 'grammar',
          message: 'Set the scene with past continuous: "It all started when I was traveling on the train..."',
          correctionPattern: 'It all started when I was boarding the train...',
        },
      ],
      remediationPractice: {
        id: 'rem_209_1',
        type: 'fill_blank',
        prompt: 'Fill in: "It all started when I ______ (was traveling) to campus."',
        options: [
          { id: 'r1', text: 'was traveling', isCorrect: true },
          { id: 'r2', text: 'am traveling', isCorrect: false },
        ],
        correctAnswer: 'was traveling',
        explanation: 'Use past continuous for setting the scene.',
      },
    },
    {
      id: 'turn_209_2',
      turnIndex: 2,
      partnerPrompt:
        'Oh no, I have a feeling something went wrong! What happened while the train was moving?',
      partnerAudioText:
        'Oh no, I have a feeling something went wrong! What happened while the train was moving?',
      partnerQuestionHindi:
        'ओह नहीं, मुझे लग रहा है कि कुछ गलत हो गया! जब ट्रेन चल रही थी तब क्या हुआ?',
      expectedFunction: 'Introducing the complication/turning point using "Suddenly" or "Meanwhile"',
      contextGoal: 'Explain: "Suddenly, the conductor announced the next stop was Oxford, which was completely the wrong direction!"',
      targetVocabulary: ['Suddenly', 'Meanwhile', 'conductor', 'announced', 'wrong direction', 'Oxford', 'realized'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Suddenly, the conductor made an announcement: "Next stop: Oxford!" I looked up and realized I had boarded the wrong train completely!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Suddenly, the conductor checked my ticket, smiled, and said: "Mate, you are on the train to Oxford, not Cambridge!"',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Out of the blue, the automated voice announced the destination. Meanwhile, my phone battery was down to 2%, so I couldn’t even check the map!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'dramatic_connector',
          patterns: ['suddenly', 'meanwhile', 'out of the blue', 'all of a sudden'],
          required: true,
        },
        {
          name: 'the_twist',
          patterns: ['conductor', 'oxford', 'wrong train', 'announcement', 'ticket', 'realized', 'wrong direction'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_209_2_no_connector',
          pattern: /^conductor said oxford/i,
          errorType: 'vocabulary',
          message: 'Add dramatic momentum with "Suddenly, the conductor announced..."',
          correctionPattern: 'Suddenly, the conductor announced we were heading to Oxford!',
        },
      ],
      remediationPractice: {
        id: 'rem_209_2',
        type: 'multiple_choice',
        prompt: 'Which sentence adds dynamic storytelling suspense?',
        options: [
          { id: 'r1', text: 'Suddenly, the conductor announced that we were heading in the wrong direction!', isCorrect: true },
          { id: 'r2', text: 'Train moved and person talked.', isCorrect: false },
        ],
        correctAnswer: 'Suddenly, the conductor announced that we were heading in the wrong direction!',
        explanation: 'Uses "Suddenly" to mark the turning point.',
      },
    },
    {
      id: 'turn_209_3',
      turnIndex: 3,
      partnerPrompt:
        'No way! Oxford?! That is hilarious! You must have panicked with 2% battery and all those suitcases! What did you do next?',
      partnerAudioText:
        'No way! Oxford?! That is hilarious! You must have panicked with 2% battery and all those suitcases! What did you do next?',
      partnerQuestionHindi:
        'बिल्कुल नहीं! ऑक्सफोर्ड?! यह बहुत मज़ेदार है! 2% बैटरी और उन सभी सूटकेस के साथ आप घबरा गए होंगे! आपने उसके बाद क्या किया?',
      expectedFunction: 'Explaining the unfolding actions and peer assistance using sequential linkers',
      contextGoal: 'Describe getting off at the next station, meeting a helpful passenger, and finding the correct connecting line',
      targetVocabulary: ['After that', 'Luckily', 'passenger', 'helped', 'platform', 'connection', 'charger'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Luckily, a friendly passenger sitting next to me lent me her power bank and showed me where to change trains at the next stop.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'After that, I hopped off at the very next station. The station master helped me carry my bags and pointed me to the right platform.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Fortunately, another international student heard the announcement, laughed, and said: "Follow me, I made the exact same mistake last term!"',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'sequence_connector',
          patterns: ['after that', 'luckily', 'fortunately', 'then', 'next', 'so'],
          required: true,
        },
        {
          name: 'action_resolution_steps',
          patterns: ['passenger', 'power bank', 'station', 'helped', 'platform', 'change trains', 'student', 'hopped off'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_209_3_flat_action',
          pattern: /^i go off train/i,
          errorType: 'grammar',
          message: 'Use past tense: "After that, I got off the train and asked for help."',
          correctionPattern: 'After that, I got off at the next station and found help.',
        },
      ],
      remediationPractice: {
        id: 'rem_209_3',
        type: 'fill_blank',
        prompt: 'Fill in: "______ (Luckily), a kind stranger helped me find the platform."',
        options: [
          { id: 'r1', text: 'Luckily', isCorrect: true },
          { id: 'r2', text: 'Sad', isCorrect: false },
        ],
        correctAnswer: 'Luckily',
        explanation: '"Luckily" frames a positive turning event.',
      },
    },
    {
      id: 'turn_209_4',
      turnIndex: 4,
      partnerPrompt:
        'People can be so kind! How did the whole adventure end up in the end? Did you make it to your student flat in time?',
      partnerAudioText:
        'People can be so kind! How did the whole adventure end up in the end? Did you make it to your student flat in time?',
      partnerQuestionHindi:
        'लोग कितने दयालु हो सकते हैं! अंत में यह पूरा साहसिक सफर कैसे समाप्त हुआ? क्या आप समय पर अपने छात्र फ्लैट पर पहुंच गए?',
      expectedFunction: 'Providing a satisfying narrative conclusion using "In the end..." and reflection',
      contextGoal: 'Conclude with "In the end, I reached campus two hours late, but I made a great new friend and learned to check the departure board twice!"',
      targetVocabulary: ['In the end', 'reached', 'two hours late', 'friend', 'laugh', 'learned', 'Zoe'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'In the end, I arrived at campus two hours late, but I made a great friend on the journey and now I always check the platform board twice!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'In the end, everything worked out perfectly. My flatmates were waiting with hot pizza, and we had a huge laugh about my detour to Oxford!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Finally, I arrived just before the accommodation office closed. It was quite an adventure for day one, but it taught me to read British train signs carefully!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'conclusion_marker',
          patterns: ['in the end', 'finally', 'eventually', 'everything worked out'],
          required: true,
        },
        {
          name: 'final_reflection',
          patterns: ['arrived', 'campus', 'two hours', 'friend', 'pizza', 'flatmates', 'laugh', 'learned', 'signs', 'adventure'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_209_4_short',
          pattern: /^(in the end it finished|yes i arrived)$/i,
          errorType: 'interaction',
          message: 'Provide a rich narrative resolution with "In the end..." and what you learned or enjoyed.',
          correctionPattern: 'In the end, I arrived safely and we had a great laugh about it!',
        },
      ],
      remediationPractice: {
        id: 'rem_209_4',
        type: 'multiple_choice',
        prompt: 'Which sentence provides the best narrative resolution?',
        options: [
          { id: 'r1', text: 'In the end, I arrived safely and we had a great laugh about my detour!', isCorrect: true },
          { id: 'r2', text: 'Story is finish now.', isCorrect: false },
        ],
        correctAnswer: 'In the end, I arrived safely and we had a great laugh about my detour!',
        explanation: 'Satisfying narrative conclusion with reflection.',
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
