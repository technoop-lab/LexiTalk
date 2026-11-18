import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_161: ConversationDefinition = {
  id: 'conv_a2_161',
  title: 'Narrating Personal Journeys, Memorable Trips & Travel Misadventures',
  cefr: 'A2',
  unitId: 'unit_a2_11',
  lessonLinks: ['lesson_a2_11_161'],
  estimatedMinutes: 5,
  scenario:
    'You are in the Travelers’ Hub Café in York having coffee with your friend and fellow backpacker Julian Hayes. You are swapping travel stories about unforgettable journeys and unexpected mishaps. You will recount a travel misadventure in the Scottish Highlands using the Past Perfect ("had already left", "had forgotten the map"), contrast it with the Past Simple ("arrived", "realized"), use narrative discourse markers ("by the time", "meanwhile", "eventually"), and express relief at the final outcome.',
  communicativeGoals: [
    'Narrate a detailed personal journey and travel misadventure chronologically',
    'Use the Past Perfect ("had + past participle") to show which past event occurred earlier',
    'Sequence story milestones using narrative markers ("by the time", "meanwhile", "eventually", "all of a sudden")',
    'Express reactions of shock, problem resolution, and relief at the story conclusion',
  ],
  canDoStatements: [
    'Can use the Past Perfect correctly to sequence two past actions during a travel narrative',
    'Can connect narrative stages with "by the time", "already", "meanwhile", and "eventually"',
    'Can describe travel mishaps (missed trains, flat tires, lost reservations) and their resolutions at A2 level',
  ],
  characters: [
    {
      id: 'char_julian_hayes',
      name: 'Julian Hayes',
      role: 'Travel Companion & Backpacker',
      avatar: '🎒',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'misadventure',
        ipa: '/ˌmɪsədˈventʃə/',
        partOfSpeech: 'noun',
        meaning: 'An unfortunate incident or piece of bad luck during a journey or activity',
        exampleSentence: 'Our mountain hike turned into quite a misadventure when the fog rolled in.',
        translations: { hi: 'दुर्घटना / यात्रा में गड़बड़ी' },
      },
      {
        word: 'eventually',
        ipa: '/ɪˈventʃuəli/',
        partOfSpeech: 'adverb',
        meaning: 'In the end, especially after a long delay, dispute, or series of problems',
        exampleSentence: 'Eventually, a local farmer towed our car out of the mud.',
        translations: { hi: 'अंततः / आखिरकार' },
      },
      {
        word: 'stranded',
        ipa: '/ˈstrændɪd/',
        partOfSpeech: 'adjective',
        meaning: 'Left without the means to move from somewhere; stuck',
        exampleSentence: 'We were stranded at the remote station because the last train had already departed.',
        translations: { hi: 'फंसा हुआ / बेसहारा' },
      },
      {
        word: 'by the time',
        ipa: '/baɪ ðə taɪm/',
        partOfSpeech: 'phrase',
        meaning: 'At the moment when something happened or will happen',
        exampleSentence: 'By the time we reached the hostel, the reception had already closed.',
        translations: { hi: 'जब तक / उस समय तक' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'By the time we arrived at the ferry port, the last boat had already departed.',
        functionCategory: 'Sequencing with Past Perfect & "By the time"',
        exampleSentence: 'By the time I checked my bag, the flight had boarded.',
      },
      {
        phrase: 'I suddenly realized that I had left my passport in the hotel safe.',
        functionCategory: 'Realizations in Past Perfect',
        exampleSentence: 'He realized he had forgotten the tickets.',
      },
      {
        phrase: 'Meanwhile, heavy rain was pouring down and our phone battery died.',
        functionCategory: 'Describing Parallel Misfortunes with "Meanwhile"',
        exampleSentence: 'Meanwhile, the temperature dropped rapidly.',
      },
      {
        phrase: 'Eventually, a friendly local family gave us a warm lift to the village.',
        functionCategory: 'Resolving the Narrative with "Eventually"',
        exampleSentence: 'Eventually, we found our way back to the main road.',
      },
    ],
    grammar: {
      title: 'Past Perfect for Sequencing Past Actions & Narrative Connectors',
      conceptExplanation:
        '1. Past Perfect ("had + past participle"): Use to show that an action occurred BEFORE another past action (e.g., "The train had already left when we reached the platform").\n2. "By the time + Past Simple, Subject + had + Past Participle" (e.g., "By the time we reached the cabin, the sun had set").\n3. Discourse Markers: "All of a sudden" (sudden change), "Meanwhile" (at the same time), "Eventually" (final outcome).',
      patternFormula: 'By the time + Subject + Past Simple, Subject + had (already) + Past Participle',
      contrastExamples: [
        {
          incorrect: 'When we arrived at the station, the train already left before.',
          correct: 'By the time we arrived at the station, the last train had already left.',
          explanation: 'Use the Past Perfect "had already left" to establish that the departure preceded our arrival.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Julian Hayes',
        text: 'I heard you had quite an eventful road trip in the Scottish Highlands last month! What happened when you tried to reach the mountain lodge?',
        translation: 'मैंने सुना है कि पिछले महीने स्कॉटिश हाइलैंड्स में आपकी एक बहुत ही घटनापूर्ण सड़क यात्रा थी! जब आपने माउंटेन लॉज तक पहुँचने की कोशिश की तो क्या हुआ?',
      },
      {
        speaker: 'You',
        text: 'It was unforgettable! By the time we reached the mountain pass, heavy snow had started, and we realized we had taken the wrong trail.',
        translation: 'यह अविस्मरणीय था! जब तक हम पहाड़ के दर्रे पर पहुँचे, भारी बर्फबारी शुरू हो चुकी थी, और हमें एहसास हुआ कि हमने गलत रास्ता चुन लिया था।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_161_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "By the time we arrived at the ferry dock, the boat ___ (had already departed / already departed / has departed)."',
      options: [
        { id: 'opt_1', text: 'had already departed', isCorrect: true },
        { id: 'opt_2', text: 'already departed', isCorrect: false },
        { id: 'opt_3', text: 'has departed', isCorrect: false },
      ],
      correctAnswer: 'had already departed',
      explanation: 'Use the Past Perfect ("had already departed") for an action that happened before another past event ("arrived").',
    },
    {
      id: 'cp_a2_161_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly shows a past realization of an earlier action?',
      options: [
        { id: 'opt_1', text: 'I realized that I had left my wallet at the restaurant.', isCorrect: true },
        { id: 'opt_2', text: 'I realized that I have left my wallet at restaurant.', isCorrect: false },
        { id: 'opt_3', text: 'I realized that I leave my wallet.', isCorrect: false },
      ],
      correctAnswer: 'I realized that I had left my wallet at the restaurant.',
      explanation: 'Past Simple "realized" followed by Past Perfect "had left" for the earlier event.',
    },
    {
      id: 'cp_a2_161_3',
      type: 'multiple_choice',
      prompt: 'Which narrative marker indicates a final positive resolution after delays?',
      options: [
        { id: 'opt_1', text: 'Eventually, a local park ranger arrived and guided us to safety.', isCorrect: true },
        { id: 'opt_2', text: 'All of a sudden, we were lost.', isCorrect: false },
        { id: 'opt_3', text: 'Meanwhile, the car broke down.', isCorrect: false },
      ],
      correctAnswer: 'Eventually, a local park ranger arrived and guided us to safety.',
      explanation: '"Eventually" marks the culmination and resolution of the story.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_161_1',
      scenarioContext: 'Describe an earlier event with Past Perfect.',
      prompt: 'Build: "By the time we arrived the train had left."',
      targetStructure: 'By the time we arrived + the train had left',
      wordBank: ['By', 'the', 'time', 'we', 'arrived', 'train', 'had', 'left', 'has', 'leaving'],
      acceptableSolutions: [
        'By the time we arrived the train had left',
        'By the time we arrived, the train had left.',
        'By the time we arrived, the train had left',
      ],
      explanation: 'Past Perfect with "By the time".',
    },
    {
      id: 'sc_a2_161_2',
      scenarioContext: 'Describe a final resolution.',
      prompt: 'Build: "Eventually, we found a cozy village inn."',
      targetStructure: 'Eventually + we found a cozy village inn',
      wordBank: ['Eventually', 'we', 'found', 'a', 'cozy', 'village', 'inn', 'find', 'meanwhile'],
      acceptableSolutions: [
        'Eventually we found a cozy village inn',
        'Eventually, we found a cozy village inn.',
        'Eventually, we found a cozy village inn',
      ],
      explanation: 'Narrative connector "Eventually".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_161_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! It’s great to see you. I heard your hiking trip to the Scottish Highlands became quite an adventure. How did the journey start, and what happened when you tried to catch your connecting transport?',
      partnerAudioText:
        'Hey! It’s great to see you. I heard your hiking trip to the Scottish Highlands became quite an adventure. How did the journey start, and what happened when you tried to catch your connecting transport?',
      partnerQuestionHindi:
        'अरे! आपसे मिलकर बहुत अच्छा लगा। मैंने सुना है कि स्कॉटिश हाइलैंड्स में आपकी लंबी पैदल यात्रा काफी रोमांचक बन गई थी। यात्रा कैसे शुरू हुई, और जब आपने अपने कनेक्टिंग वाहन को पकड़ने की कोशिश की तो क्या हुआ?',
      expectedFunction: 'Narrate Beginning with Past Perfect & "By the time" (By the time we reached Fort William, our bus had already departed, and we realized we had lost the trail map)',
      contextGoal:
        'Recount the initial mishap: by the time you arrived, the connecting bus/ferry had already departed, and you realized you had forgotten or lost your map.',
      targetVocabulary: ['By the time we arrived at Fort William', 'the last bus had already left', 'I realized I had left the map behind', 'stranded at the station', 'misadventure'],
      suggestedResponses: [
        {
          label: 'Narrative with Past Perfect and "By the time"',
          text: 'It really was a wild misadventure! By the time our train arrived at Fort William, the connecting bus to the mountain pass had already left, and I realized I had left our paper trail map in Edinburgh.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Travel Narrative',
          text: 'By the time we got to the station, the bus had already departed, and we discovered we had forgotten our backup map!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Time Marker & Past Simple (by the time / when / arrived / reached / got / started / train)',
          patterns: ['by the time', 'when', 'arrived', 'reached', 'got', 'started', 'train', 'station'],
          required: true,
        },
        {
          name: 'Past Perfect Event (had already left / had departed / had forgotten / had left / had lost / had gone)',
          patterns: ['had already left', 'had departed', 'had forgotten', 'had left', 'had lost', 'had gone', 'had missed'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_simple_past_for_earlier',
          pattern: 'the bus already left when we arrived|i forgot the map before',
          errorType: 'grammar',
          message: 'Use the Past Perfect ("had already left", "had forgotten") for the earlier action in past narratives.',
          correctionPattern: 'the bus had already left / I had forgotten the map',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_161_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "By the time we reached the terminal, the boat ___ (had already left / has left)."',
        options: [
          { id: 'opt_1', text: 'had already left', isCorrect: true },
          { id: 'opt_2', text: 'has left', isCorrect: false },
          { id: 'opt_3', text: 'was left', isCorrect: false },
        ],
        correctAnswer: 'had already left',
        explanation: 'Use Past Perfect for the action completed before the past arrival.',
      },
    },
    {
      id: 'turn_a2_161_2',
      turnIndex: 2,
      partnerPrompt:
        'Oh no! Missing the connection and losing the map in the Highlands is terrifying! What did you do next, and how did the weather turn while you were trying to find shelter?',
      partnerAudioText:
        'Oh no! Missing the connection and losing the map in the Highlands is terrifying! What did you do next, and how did the weather turn while you were trying to find shelter?',
      partnerQuestionHindi:
        'अरे नहीं! हाइलैंड्स में कनेक्शन छूटना और नक्शा खोना भयानक है! आपने आगे क्या किया, और जब आप आश्रय खोजने की कोशिश कर रहे थे तो मौसम कैसा हो गया?',
      expectedFunction: 'Narrate Complications with "Meanwhile" & "All of a sudden" (Meanwhile, heavy rain was pouring down, and all of a sudden our phone battery died)',
      contextGoal:
        'Describe the rising tension: heavy rain started, darkness fell, and your mobile phone battery died while you were walking.',
      targetVocabulary: ['Meanwhile, heavy rain started pouring down', 'All of a sudden, our phone battery died', 'we were completely stranded in the dark', 'no mobile signal'],
      suggestedResponses: [
        {
          label: 'Dramatic Narrative with Connectors',
          text: 'We decided to walk along the valley road. Meanwhile, heavy rain was pouring down, and all of a sudden, both of our mobile phone batteries died because we hadn’t charged them.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Complications Narrative',
          text: 'Meanwhile, thick fog rolled in and it got freezing cold. All of a sudden, our GPS turned off because the battery died!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Narrative Connectors (meanwhile / all of a sudden / suddenly / while / then)',
          patterns: ['meanwhile', 'all of a sudden', 'suddenly', 'while', 'then', 'as'],
          required: true,
        },
        {
          name: 'Misfortunes (rain / pouring / snow / fog / battery / died / cold / dark / lost / signal)',
          patterns: ['rain', 'pouring', 'snow', 'fog', 'battery', 'died', 'cold', 'dark', 'lost', 'signal', 'phone'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_161_2',
        type: 'multiple_choice',
        prompt: 'Which connector describes an unexpected sudden event in a story?',
        options: [
          { id: 'opt_1', text: 'All of a sudden, the lights flickered and went out.', isCorrect: true },
          { id: 'opt_2', text: 'In order to, the lights went out.', isCorrect: false },
          { id: 'opt_3', text: 'Whereas, lights went out.', isCorrect: false },
        ],
        correctAnswer: 'All of a sudden, the lights flickered and went out.',
        explanation: '"All of a sudden" introduces sudden, dramatic occurrences.',
      },
    },
    {
      id: 'turn_a2_161_3',
      turnIndex: 3,
      partnerPrompt:
        'With no battery and freezing rain, that sounds like a true survival story! How did you get out of that situation, and what was the turning point?',
      partnerAudioText:
        'With no battery and freezing rain, that sounds like a true survival story! How did you get out of that situation, and what was the turning point?',
      partnerQuestionHindi:
        'बिना बैटरी और जमने वाली बारिश के साथ, यह एक वास्तविक जीवित रहने की कहानी लगती है! आप उस स्थिति से कैसे बाहर निकले, और महत्वपूर्ण मोड़ क्या था?',
      expectedFunction: 'Narrate Resolution with "Eventually" & Relief (Eventually, we saw a chimney light from a mountain cottage and a kind shepherd gave us hot tea and a lift)',
      contextGoal:
        'Describe the resolution using "Eventually": finding a warm village pub or being rescued by a local shepherd/driver who gave you hot soup and a ride to your hostel.',
      targetVocabulary: ['Eventually, we saw a warm light in the distance', 'a friendly local shepherd gave us a lift', 'we reached a cozy village inn', 'huge sense of relief'],
      suggestedResponses: [
        {
          label: 'Resolution with "Eventually" & Relief',
          text: 'Eventually, after hiking for an hour in the dark, we spotted a warm chimney light from a farm cottage. A kind shepherd invited us in, made us hot tea, and gave us a lift to our hostel!',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Resolution',
          text: 'Eventually, a local farmer drove past and stopped his truck. He gave us a ride to the nearest village inn. We were so relieved!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Resolution Marker (eventually / in the end / finally / after that)',
          patterns: ['eventually', 'in the end', 'finally', 'after that', 'at last'],
          required: true,
        },
        {
          name: 'Rescue / Relief (saw / light / shepherd / farmer / cottage / inn / tea / lift / ride / hostel / relieved / safe)',
          patterns: ['saw', 'light', 'shepherd', 'farmer', 'cottage', 'inn', 'tea', 'lift', 'ride', 'hostel', 'relieved', 'safe', 'helped'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_161_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "___ (Eventually / In order to), we found a cozy inn and were safe from the storm."',
        options: [
          { id: 'opt_1', text: 'Eventually', isCorrect: true },
          { id: 'opt_2', text: 'In order to', isCorrect: false },
          { id: 'opt_3', text: 'Whereas', isCorrect: false },
        ],
        correctAnswer: 'Eventually',
        explanation: '"Eventually" marks the final positive resolution.',
      },
    },
    {
      id: 'turn_a2_161_4',
      turnIndex: 4,
      partnerPrompt:
        'Scottish hospitality to the rescue! That is a story you’ll remember for the rest of your life. Could you summarize what that travel misadventure taught you about planning trips?',
      partnerAudioText:
        'Scottish hospitality to the rescue! That is a story you’ll remember for the rest of your life. Could you summarize what that travel misadventure taught you about planning trips?',
      partnerQuestionHindi:
        'स्कॉटिश आतिथ्य बचाव के लिए आया! यह एक ऐसी कहानी है जिसे आप जीवन भर याद रखेंगे। क्या आप संक्षेप में बता सकते हैं कि इस यात्रा की दुर्घटना ने आपको यात्राओं की योजना बनाने के बारे में क्या सिखाया?',
      expectedFunction: 'Summarize Travel Misadventure & Lessons Learned (To summarize, always bring a backup power bank and paper map, because unexpected delays happen)',
      contextGoal:
        'Summarize the journey and key takeaway: always carry a charged power bank, download offline maps, double check connection times, and thank Julian for listening.',
      targetVocabulary: ['To summarize my takeaway', 'always carry a portable power bank and printed map', 'check transport timetables carefully', 'Scottish kindness saved the day', 'thanks Julian'],
      suggestedResponses: [
        {
          label: 'Comprehensive Story Summary & Lesson',
          text: 'To summarize the misadventure: although missing our bus and having dead batteries put us in danger, a generous local rescued us. It taught me to always carry a physical map and a charged power bank! Thanks for listening, Julian!',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Takeaway Summary',
          text: 'In summary, always double check connection times and keep a backup battery. It was quite an adventure! Great chatting with you, Julian!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Summary Signpost (to summarize / in summary / summary / takeaway / lesson / so)',
          patterns: ['to summarize', 'in summary', 'summary', 'takeaway', 'lesson', 'so', 'taught me'],
          required: true,
        },
        {
          name: 'Lesson & Gratitude (map / battery / power bank / check / times / thank you / julian / thanks)',
          patterns: ['map', 'battery', 'power bank', 'check', 'times', 'thank you', 'julian', 'thanks', 'plan'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_161_4',
        type: 'multiple_choice',
        prompt: 'Which summary reflects the narrative takeaway well?',
        options: [
          { id: 'opt_1', text: 'To summarize, the misadventure taught me to always pack a backup power bank and double check bus schedules.', isCorrect: true },
          { id: 'opt_2', text: 'I hate travel and will never leave home again.', isCorrect: false },
          { id: 'opt_3', text: 'Story is finished bye.', isCorrect: false },
        ],
        correctAnswer: 'To summarize, the misadventure taught me to always pack a backup power bank and double check bus schedules.',
        explanation: 'Reflective and articulate narrative conclusion.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 65,
  },
};
