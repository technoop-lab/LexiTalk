import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_39: ConversationDefinition = {
  id: 'conv_a1_39',
  title: 'Talking About the Past (Regular Simple Past Verbs -ed)',
  cefr: 'A1',
  unitId: 'unit_a1_3',
  lessonLinks: ['lesson_a1_3_39'],
  estimatedMinutes: 5,
  scenario:
    'On Monday morning, you and your coworker Rachel catch up by the office kitchen. You describe what you worked on, cleaned, cooked, and watched over the weekend using regular simple past verbs ending in -ed.',
  communicativeGoals: [
    'Use regular past tense verbs with "-ed" correctly (worked, cleaned, cooked, watched, visited, walked, played)',
    'Pronounce regular -ed endings properly (/t/, /d/, /ɪd/)',
    'Narrate a sequence of completed past weekend activities and chores',
    'Ask follow-up questions about a coworker\'s past actions',
  ],
  canDoStatements: [
    'Can describe past activities and routines using regular simple past verbs (CEFR A1.2)',
    'Can tell a simple chronological story of yesterday or last weekend',
    'Can ask and answer questions about past tasks and leisure activities',
  ],
  characters: [
    {
      id: 'char_rachel',
      name: 'Rachel',
      role: 'Coworker',
      avatar: '☕',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'cooked',
        ipa: '/kʊkt/',
        partOfSpeech: 'verb (past)',
        meaning: 'Prepared food, a dish, or a meal by combining and heating the ingredients',
        exampleSentence: 'I cooked a homemade pasta dinner on Saturday.',
        translations: { hi: 'पकाया / खाना बनाया' },
      },
      {
        word: 'cleaned',
        ipa: '/kliːnd/',
        partOfSpeech: 'verb (past)',
        meaning: 'Made free of dirt, marks, or clutter',
        exampleSentence: 'We cleaned the entire apartment on Sunday morning.',
        translations: { hi: 'साफ किया' },
      },
      {
        word: 'watched',
        ipa: '/wɑːtʃt/',
        partOfSpeech: 'verb (past)',
        meaning: 'Looked at or observed attentively over a period of time',
        exampleSentence: 'I watched an exciting movie on Netflix.',
        translations: { hi: 'देखा' },
      },
      {
        word: 'walked',
        ipa: '/wɔːkt/',
        partOfSpeech: 'verb (past)',
        meaning: 'Moved at a regular pace by lifting and setting down each foot in turn',
        exampleSentence: 'We walked in the botanical garden for two hours.',
        translations: { hi: 'टहला / पैदल चला' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'On Saturday morning, I cleaned...',
        functionCategory: 'Past Narrative Opening',
        exampleSentence: 'On Saturday morning, I cleaned my room and washed the dishes.',
      },
      {
        phrase: 'In the afternoon, we walked...',
        functionCategory: 'Sequence of Past Events',
        exampleSentence: 'In the afternoon, we walked around the lake.',
      },
      {
        phrase: 'In the evening, I cooked...',
        functionCategory: 'Describing Past Meal Preparation',
        exampleSentence: 'In the evening, I cooked dinner for my family.',
      },
      {
        phrase: 'What did you do yesterday?',
        functionCategory: 'Past Inquiry',
        exampleSentence: 'What did you do yesterday afternoon?',
      },
    ],
    grammar: {
      title: 'Regular Simple Past: Base Verb + -ed / -d & Time Expressions',
      conceptExplanation:
        'To describe completed past actions with regular verbs, add "-ed" to the base form (clean → cleaned, cook → cooked, watch → watched, walk → walked). If the verb already ends in -e, just add -d (live → lived, like → liked). For consonant + y, change y to -ied (study → studied).',
      patternFormula: 'Subject + [Verb + -ed] + [Time / Object] (e.g. yesterday, on Saturday, last night)',
      contrastExamples: [
        {
          incorrect: 'Yesterday I cook dinner for friends.',
          correct: 'Yesterday I cooked dinner for friends.',
          explanation: 'Use the past tense form "cooked" for completed past actions.',
        },
        {
          incorrect: 'I was clean my room on Sunday.',
          correct: 'I cleaned my room on Sunday.',
          explanation: 'Do not use "was" with base or regular verbs in simple past.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Rachel',
        text: 'Morning! Happy Monday! Did you have a productive weekend, or did you get to relax?',
        translation: 'शुभ प्रभात! मंडे की शुभकामनाएँ! क्या आपका वीकेंड उत्पादक रहा, या आपको आराम करने का मौका मिला?',
      },
      {
        speaker: 'You',
        text: 'Good morning, Rachel! It was a great weekend. On Saturday, I cleaned the house and cooked a delicious meal.',
        translation: 'शुभ प्रभात, राचेल! यह एक शानदार सप्ताहांत था। शनिवार को, मैंने घर साफ किया और एक स्वादिष्ट भोजन पकाया।',
      },
      {
        speaker: 'Rachel',
        text: 'That sounds lovely! What did you do on Sunday afternoon?',
        translation: 'यह बहुत प्यारा लग रहा है! आपने रविवार दोपहर को क्या किया?',
      },
      {
        speaker: 'You',
        text: 'On Sunday afternoon, I walked in the park with a friend and watched a fantastic documentary in the evening.',
        translation: 'रविवार दोपहर को, मैं एक दोस्त के साथ पार्क में टहला और शाम को एक शानदार वृत्तचित्र देखा।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_39_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the past tense of "clean": "On Saturday, I ___ my entire kitchen."',
      options: [
        { id: 'opt_1', text: 'cleaned', isCorrect: true },
        { id: 'opt_2', text: 'cleaning', isCorrect: false },
        { id: 'opt_3', text: 'cleans', isCorrect: false },
      ],
      correctAnswer: 'cleaned',
      explanation: 'Add "-ed" to "clean" to form the regular simple past "cleaned".',
    },
    {
      id: 'cp_a1_39_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes past cooking and watching a movie?',
      options: [
        { id: 'opt_1', text: 'I cooked dinner and watched a movie last night.', isCorrect: true },
        { id: 'opt_2', text: 'I cook dinner and watch movie last night.', isCorrect: false },
        { id: 'opt_3', text: 'I was cook dinner and watched movie yesterday.', isCorrect: false },
      ],
      correctAnswer: 'I cooked dinner and watched a movie last night.',
      explanation: 'Both regular verbs take "-ed": "cooked" and "watched".',
    },
    {
      id: 'cp_a1_39_3',
      type: 'multiple_choice',
      prompt: 'What is the past tense form of the verb "study"?',
      options: [
        { id: 'opt_1', text: 'studied', isCorrect: true },
        { id: 'opt_2', text: 'studyed', isCorrect: false },
        { id: 'opt_3', text: 'studying', isCorrect: false },
      ],
      correctAnswer: 'studied',
      explanation: 'Consonant + y changes to "-ied": study → studied.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_39_1',
      scenarioContext: 'Describe Saturday chores and cooking.',
      prompt: 'Build: "On Saturday I cleaned my room and cooked dinner."',
      targetStructure: 'Prepositional phrase + subject + regular past + object + coordinator + regular past + object',
      wordBank: ['On', 'Saturday', 'I', 'cleaned', 'my', 'room', 'and', 'cooked', 'dinner', 'clean', 'cook', 'was'],
      acceptableSolutions: [
        'On Saturday I cleaned my room and cooked dinner',
        'On Saturday, I cleaned my room and cooked dinner.',
      ],
      explanation: 'Compound regular past sentence with "cleaned" and "cooked".',
    },
    {
      id: 'sc_a1_39_2',
      scenarioContext: 'Describe Sunday leisure activities.',
      prompt: 'Build: "We walked in the park and watched a movie."',
      targetStructure: 'Subject + regular past + prepositional phrase + coordinator + regular past + object',
      wordBank: ['We', 'walked', 'in', 'the', 'park', 'and', 'watched', 'a', 'movie', 'walk', 'watching'],
      acceptableSolutions: [
        'We walked in the park and watched a movie',
        'We walked in the park and watched a movie.',
      ],
      explanation: 'Coordinates two regular past verbs: "walked" and "watched".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_39_1',
      turnIndex: 1,
      partnerPrompt:
        'Morning! Happy Monday. How was your weekend? Did you do anything fun or relaxing?',
      partnerAudioText:
        'Morning! Happy Monday. How was your weekend? Did you do anything fun or relaxing?',
      partnerQuestionHindi:
        'शुभ प्रभात! मंडे की शुभकामनाएँ। आपका वीकेंड कैसा रहा? क्या आपने कुछ मजेदार या आरामदायक किया?',
      expectedFunction: 'Describe Saturday Activities with Regular Past Verbs',
      contextGoal:
        'State how your weekend was and describe your Saturday activities using regular verbs (e.g. cleaned, cooked, worked, played).',
      targetVocabulary: ['cleaned', 'cooked', 'worked', 'on saturday', 'weekend was good', 'relaxed'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Good morning, Rachel! My weekend was wonderful. On Saturday, I cleaned my apartment and cooked a big dinner for my family.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'It was great! On Saturday I cleaned my room and cooked some homemade pasta.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Really relaxing! I cleaned the house on Saturday and cooked a great meal.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Saturday Regular Past Verbs',
          patterns: [
            'cleaned',
            'cooked',
            'worked',
            'relaxed',
            'played',
            'visited',
            'on saturday',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'clean_base_error',
          pattern: /\bi clean my\b/i,
          errorType: 'grammar',
          message: 'Use the past tense form "cleaned" when talking about the weekend.',
          correctionPattern: 'I cleaned my...',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_39_1',
        type: 'fill_blank',
        prompt: 'Select the past tense form: "I ___ my living room on Saturday."',
        options: [
          { id: 'opt_1', text: 'cleaned', isCorrect: true },
          { id: 'opt_2', text: 'clean', isCorrect: false },
          { id: 'opt_3', text: 'clean-ed', isCorrect: false },
        ],
        correctAnswer: 'cleaned',
        explanation: 'Clean + ed = cleaned.',
      },
    },
    {
      id: 'turn_a1_39_2',
      turnIndex: 2,
      partnerPrompt:
        'Homemade dinner sounds delicious! And what did you do on Sunday? Did you stay home or go outside?',
      partnerAudioText:
        'Homemade dinner sounds delicious! And what did you do on Sunday? Did you stay home or go outside?',
      partnerQuestionHindi:
        'घर का बना खाना बहुत स्वादिष्ट लगता है! और आपने रविवार को क्या किया? क्या आप घर पर ही रहे या बाहर गए?',
      expectedFunction: 'Describe Sunday Outing & Entertainment with Regular Past',
      contextGoal:
        'Describe going outside on Sunday (e.g. "walked in the park", "visited friends") and evening entertainment ("watched a movie").',
      targetVocabulary: ['walked', 'park', 'visited', 'watched', 'movie', 'on sunday', 'enjoyed'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'On Sunday afternoon, I walked around the lake in the sunny park with a friend, and in the evening, I watched an exciting movie.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I walked in the park for two hours and then watched a movie at home.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Walked in the park with friends, then watched a funny comedy on Sunday night!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Sunday Past Verbs',
          patterns: ['walked', 'watched', 'visited', 'played', 'stayed', 'enjoyed', 'park', 'movie'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'watch_base_error',
          pattern: /\bi watch a movie\b/i,
          errorType: 'grammar',
          message: 'Say "I watched a movie" using regular past "-ed".',
          correctionPattern: 'I watched a movie.',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_39_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes a past walk and film?',
        options: [
          { id: 'opt_1', text: 'We walked in the park and watched a movie.', isCorrect: true },
          { id: 'opt_2', text: 'We walk in park and watch movie.', isCorrect: false },
          { id: 'opt_3', text: 'We walking park watched movie.', isCorrect: false },
        ],
        correctAnswer: 'We walked in the park and watched a movie.',
        explanation: 'Both actions use the regular simple past suffix "-ed".',
      },
    },
    {
      id: 'turn_a1_39_3',
      turnIndex: 3,
      partnerPrompt:
        'That sounds like a balanced and restorative weekend! What about your project presentation for this afternoon? Have you prepared your slides already?',
      partnerAudioText:
        'That sounds like a balanced and restorative weekend! What about your project presentation for this afternoon? Have you prepared your slides already?',
      partnerQuestionHindi:
        'यह एक बहुत ही संतुलित और तरोताजा करने वाला वीकेंड लगता है! आज दोपहर के आपके प्रोजेक्ट प्रेजेंटेशन के बारे में क्या? क्या आपने अपनी स्लाइड पहले ही तैयार कर ली हैं?',
      expectedFunction: 'Discuss Completed Work Prep (worked / finished / prepared)',
      contextGoal:
        'State that you worked on and prepared your presentation slides on Friday or over the weekend.',
      targetVocabulary: ['worked', 'prepared', 'finished', 'slides', 'ready', 'presentation'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes, I worked on the presentation on Friday afternoon and finished all the slides. Everything is ready for today!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Yes, I prepared the slides and practiced my talk on Sunday.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Already finished! I worked on them on Friday.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Work Preparation Past Verbs',
          patterns: ['worked', 'prepared', 'finished', 'completed', 'practiced', 'ready', 'slides'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_39_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I ___ on the report until five o\'clock."',
        options: [
          { id: 'opt_1', text: 'worked', isCorrect: true },
          { id: 'opt_2', text: 'work', isCorrect: false },
          { id: 'opt_3', text: 'workt', isCorrect: false },
        ],
        correctAnswer: 'worked',
        explanation: 'Work + ed = worked.',
      },
    },
    {
      id: 'turn_a1_39_4',
      turnIndex: 4,
      partnerPrompt:
        'You are so well organized! Let’s grab our coffees and head to the morning team briefing. Good luck with the presentation later!',
      partnerAudioText:
        'You are so well organized! Let’s grab our coffees and head to the morning team briefing. Good luck with the presentation later!',
      partnerQuestionHindi:
        'आप कितने व्यवस्थित हैं! आइए अपनी कॉफी लेते हैं और सुबह की टीम ब्रीफिंग के लिए चलते हैं। बाद में प्रेजेंटेशन के लिए शुभकामनाएँ!',
      expectedFunction: 'Acknowledge Encouragement & Conclude Conversation',
      contextGoal:
        'Thank Rachel for the encouragement, ask how her weekend was, and head to the meeting.',
      targetVocabulary: ['thank you', 'thanks rachel', 'appreciate it', 'let’s go', 'meeting', 'briefing'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you very much, Rachel! I really appreciate your support. Let’s head to the team meeting now!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thanks Rachel! Let’s grab our coffee and go to the briefing.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Thanks a lot! Ready for the meeting, let’s go!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing Support',
          patterns: ['thank you', 'thanks', 'appreciate', 'let’s go', 'meeting', 'briefing'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_39_4',
        type: 'multiple_choice',
        prompt: 'Which response closes the chat professionally with a colleague?',
        options: [
          { id: 'opt_1', text: 'Thanks Rachel, let’s head over to the team briefing!', isCorrect: true },
          { id: 'opt_2', text: 'I am stopping talking coffee.', isCorrect: false },
          { id: 'opt_3', text: 'Work is started now go.', isCorrect: false },
        ],
        correctAnswer: 'Thanks Rachel, let’s head over to the team briefing!',
        explanation: 'Positive, collaborative, and natural.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 2,
    targetVocabularyCoveragePct: 70,
  },
};
