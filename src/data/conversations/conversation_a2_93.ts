import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_93: ConversationDefinition = {
  id: 'conv_a2_93',
  title: 'Past Experiences & Completed Events (Past Simple)',
  cefr: 'A2',
  unitId: 'unit_a2_7',
  lessonLinks: ['lesson_a2_7_93'],
  estimatedMinutes: 5,
  scenario:
    'You are catching up over coffee with your friend Liam Murphy in Dublin. Liam is curious about your recent weekend trip to the Lake District. Recount your travel journey, describe completed activities and sights, explain what you didn’t get time to do, and ask Liam about his recent travels.',
  communicativeGoals: [
    'Narrate completed travel experiences using accurate regular (-ed) and irregular past verbs (went, saw, stayed, hiked, visited, drove)',
    'Use negative past simple forms (didn’t have, didn’t rain, didn’t manage) without double-marking errors',
    'Ask engaging past simple follow-up questions using "Did you...?" and WH- structures',
    'React naturally to travel stories with conversational reactions (Really?, That sounds amazing!, What happened next?)',
  ],
  canDoStatements: [
    'Can describe a past holiday, trip, or completed event in simple chronological sentences (CEFR A2)',
    'Can use regular and common irregular past simple verbs correctly',
    'Can form past questions and negative statements accurately with did/didn\'t',
  ],
  characters: [
    {
      id: 'char_liam_murphy',
      name: 'Liam Murphy',
      role: 'Friend & Travel Blogger',
      avatar: '🎒',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'journey',
        ipa: '/ˈdʒɜːrni/',
        partOfSpeech: 'noun',
        meaning: 'An act of traveling from one place to another',
        exampleSentence: 'Our train journey through the hills was scenic and peaceful.',
        translations: { hi: 'यात्रा / सफर' },
      },
      {
        word: 'explore',
        ipa: '/ɪkˈsplɔːr/',
        partOfSpeech: 'verb',
        meaning: 'To travel through an unfamiliar area in order to learn about it (past: explored)',
        exampleSentence: 'We explored the historic village and lakeside trails.',
        translations: { hi: 'खोजबीन करना / घूमना' },
      },
      {
        word: 'scenery',
        ipa: '/ˈsiːnəri/',
        partOfSpeech: 'noun',
        meaning: 'The natural features of a landscape considered in terms of their appearance',
        exampleSentence: 'The mountain scenery was absolutely breathtaking.',
        translations: { hi: 'प्राकृतिक दृश्य / नज़ारा' },
      },
      {
        word: 'memorable',
        ipa: '/ˈmɛmərəbl/',
        partOfSpeech: 'adjective',
        meaning: 'Easily remembered, especially because of being special or unusual',
        exampleSentence: 'Our sunset boat tour was the most memorable moment of the trip.',
        translations: { hi: 'यादगार' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Last weekend, I went to...',
        functionCategory: 'Past Narrative Opening',
        exampleSentence: 'Last weekend, I went to the Lake District with friends.',
      },
      {
        phrase: 'We decided to... because...',
        functionCategory: 'Giving Reasons for Past Actions',
        exampleSentence: 'We decided to hike early because the morning weather was clear.',
      },
      {
        phrase: 'Unfortunately, we didn’t have time to...',
        functionCategory: 'Past Negative / Missed Activity',
        exampleSentence: 'Unfortunately, we didn’t have time to visit the museum.',
      },
      {
        phrase: 'Did you get a chance to...?',
        functionCategory: 'Inquiring About Past Actions',
        exampleSentence: 'Did you get a chance to try local food there?',
      },
    ],
    grammar: {
      title: 'Past Simple: Regular (-ed), Irregular Verbs & Did/Didn’t',
      conceptExplanation:
        'Use the Past Simple for events completed at a specific time in the past. Regular verbs add -ed (visited, explored, stayed). Irregular verbs change form (go → went, see → saw, take → took, buy → bought). For negatives and questions, use auxiliary "did / didn\'t" + bare base verb (e.g., "I didn\'t buy", NOT *"I didn\'t bought").',
      patternFormula: 'Affirmative: Subject + [Past Verb] | Negative: Subject + didn\'t + [Base Verb] | Question: Did + Subject + [Base Verb]?',
      contrastExamples: [
        {
          incorrect: 'I didn\'t went to the castle.',
          correct: 'I didn\'t go to the castle.',
          explanation: 'After "didn\'t", always use the base form "go", not the past form "went".',
        },
        {
          incorrect: 'Did you saw the mountains?',
          correct: 'Did you see the mountains?',
          explanation: 'After auxiliary "Did", use the base verb "see".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Liam Murphy',
        text: 'Hey Alex! How was your weekend trip to the Lake District? What did you do first when you arrived?',
        translation: 'अरे एलेक्स! लेक डिस्ट्रिक्ट की आपकी सप्ताहांत यात्रा कैसी रही? जब आप पहुंचे तो सबसे पहले आपने क्या किया?',
      },
      {
        speaker: 'You',
        text: 'Hey Liam! It was fantastic. We arrived on Friday evening, checked into a cozy cottage, and took a peaceful stroll by Lake Windermere. What about your weekend?',
        translation: 'अरे लियाम! यह शानदार था। हम शुक्रवार शाम को पहुंचे, एक आरामदायक कॉटेज में चेक-इन किया, और विंडरमेयर झील के किनारे शांति से टहले। आपका सप्ताहांत कैसा रहा?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_93_1',
      type: 'fill_blank',
      prompt: 'Complete the negative past sentence: "We ___ (not / have) enough time to climb the peak."',
      options: [
        { id: 'opt_1', text: 'didn\'t have', isCorrect: true },
        { id: 'opt_2', text: 'didn\'t had', isCorrect: false },
        { id: 'opt_3', text: 'not had', isCorrect: false },
      ],
      correctAnswer: 'didn\'t have',
      explanation: 'Use auxiliary "didn\'t" followed by the base infinitive "have".',
    },
    {
      id: 'cp_a2_93_2',
      type: 'multiple_choice',
      prompt: 'Which question correctly asks about a completed past experience?',
      options: [
        { id: 'opt_1', text: 'Did you take photos of the sunset?', isCorrect: true },
        { id: 'opt_2', text: 'Did you took photos of the sunset?', isCorrect: false },
        { id: 'opt_3', text: 'Were you take photos of the sunset?', isCorrect: false },
      ],
      correctAnswer: 'Did you take photos of the sunset?',
      explanation: '"Did you + [base verb]" is the correct past simple question structure.',
    },
    {
      id: 'cp_a2_93_3',
      type: 'multiple_choice',
      prompt: 'Which sentence has all irregular past verbs in correct forms?',
      options: [
        { id: 'opt_1', text: 'We drove to the lake, ate fresh trout, and bought local honey.', isCorrect: true },
        { id: 'opt_2', text: 'We drived to the lake, eated fresh trout, and buyed honey.', isCorrect: false },
        { id: 'opt_3', text: 'We drove and eat fresh trout yesterday.', isCorrect: false },
      ],
      correctAnswer: 'We drove to the lake, ate fresh trout, and bought local honey.',
      explanation: 'Drive → drove, eat → ate, buy → bought are all correct irregular forms.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_93_1',
      scenarioContext: 'Describe your arrival and evening walk.',
      prompt: 'Build: "We arrived on Friday and took a walk by the lake."',
      targetStructure: 'Subject + past verb + time phrase + and + past verb + prepositional phrase',
      wordBank: ['We', 'arrived', 'on', 'Friday', 'and', 'took', 'a', 'walk', 'by', 'the', 'lake', 'taking'],
      acceptableSolutions: [
        'We arrived on Friday and took a walk by the lake',
        'We arrived on Friday and took a walk by the lake.',
      ],
      explanation: 'Uses regular past "arrived" and irregular past "took" coordinated by "and".',
    },
    {
      id: 'sc_a2_93_2',
      scenarioContext: 'Ask your friend about their past travels.',
      prompt: 'Build: "Did you visit the coast during your holiday?"',
      targetStructure: 'Did + subject + base verb + object + time phrase',
      wordBank: ['Did', 'you', 'visit', 'the', 'coast', 'during', 'your', 'holiday', 'visited', 'were'],
      acceptableSolutions: [
        'Did you visit the coast during your holiday',
        'Did you visit the coast during your holiday?',
      ],
      explanation: 'Correct question syntax with auxiliary "Did" and base verb "visit".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_93_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey Alex! Good to see you. I saw your photos from the Lake District online and they looked stunning! When did you leave, and where did you stay during the weekend?',
      partnerAudioText:
        'Hey Alex! Good to see you. I saw your photos from the Lake District online and they looked stunning! When did you leave, and where did you stay during the weekend?',
      partnerQuestionHindi:
        'अरे एलेक्स! आपसे मिलकर अच्छा लगा। मैंने ऑनलाइन लेक डिस्ट्रिक्ट की आपकी तस्वीरें देखीं और वे बहुत खूबसूरत लग रही थीं! आप कब निकले, और सप्ताहांत में आप कहाँ रुके थे?',
      expectedFunction: 'Narrate Departure, Journey & Accommodation (Past Simple)',
      contextGoal:
        'State that you drove there on Friday afternoon, stayed in a traditional stone cottage near Lake Windermere, and enjoyed the peaceful view.',
      targetVocabulary: ['drove on Friday afternoon', 'stayed in a traditional cottage', 'near Lake Windermere', 'peaceful and scenic'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Hey Liam! We drove up on Friday afternoon. The traffic was light, so we arrived in four hours. We stayed in a charming stone cottage right near Lake Windermere with incredible views!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'We left on Friday around 2:00 PM and rented a cozy cottage by the lake. The scenery was absolutely beautiful!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'We drove there on Friday and stayed in a lovely lakeside cottage. Did you have a good weekend too?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Departure & Journey',
          patterns: ['drove', 'left', 'arrived', 'went', 'friday', 'afternoon', 'travel', 'journey'],
          required: true,
        },
        {
          name: 'Accommodation',
          patterns: ['stayed', 'cottage', 'hotel', 'cabin', 'windermere', 'lake', 'views', 'cozy'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'past_irregular_error',
          pattern: /\bwe drived\b|\bwe leaved\b/i,
          errorType: 'grammar',
          message: 'Use irregular past forms: "drove" (not "drived") and "left" (not "leaved").',
          correctionPattern: 'we drove / we left',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_93_1',
        type: 'fill_blank',
        prompt: 'Choose the correct past verb: "We ___ (drive) to the national park on Friday."',
        options: [
          { id: 'opt_1', text: 'drove', isCorrect: true },
          { id: 'opt_2', text: 'drived', isCorrect: false },
          { id: 'opt_3', text: 'was drive', isCorrect: false },
        ],
        correctAnswer: 'drove',
        explanation: '"Drove" is the irregular past tense of "drive".',
      },
    },
    {
      id: 'turn_a2_93_2',
      turnIndex: 2,
      partnerPrompt:
        'Staying near Windermere sounds idyllic! What activities did you do on Saturday? Did the weather stay sunny, or did it rain on you during your hike?',
      partnerAudioText:
        'Staying near Windermere sounds idyllic! What activities did you do on Saturday? Did the weather stay sunny, or did it rain on you during your hike?',
      partnerQuestionHindi:
        'विंडरमेयर के पास रुकना बहुत सुखद लगता है! आपने शनिवार को क्या गतिविधियाँ कीं? क्या मौसम धूपदार रहा, या आपकी हाइक के दौरान बारिश हुई?',
      expectedFunction: 'Recount Saturday Activities & Describe Weather (Positive & Negative Past)',
      contextGoal:
        'Explain that Saturday morning was sunny so you hiked up a mountain trail, but in the afternoon clouds appeared; fortunately, it didn’t rain heavily.',
      targetVocabulary: ['hiked along the mountain trail', 'it didn’t rain heavily', 'took a boat across the lake', 'ate lunch at a local pub'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'On Saturday morning, the weather was sunny, so we hiked a five-mile mountain trail. In the afternoon, it turned cloudy, but fortunately it didn’t rain at all. Afterwards, we had a delicious hot meal at an ancient pub.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'We hiked up to a panoramic viewpoint on Saturday. It got cloudy, but it didn’t rain. We also took a scenic boat ride in the afternoon.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'We hiked in the morning and took a boat tour. It didn’t rain, so we were very lucky!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Activities (Past Verbs)',
          patterns: ['hiked', 'walked', 'boat', 'took', 'ate', 'visited', 'toured', 'pub'],
          required: true,
        },
        {
          name: 'Weather Observation (with didn’t or was)',
          patterns: ['didn\'t rain', 'did not rain', 'sunny', 'cloudy', 'weather was', 'lucky'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'didnt_rained_error',
          pattern: /\bdidn't rained\b|\bdid not rained\b/i,
          errorType: 'grammar',
          message: 'Say "it didn\'t rain", not "it didn\'t rained". Use base verb after didn\'t.',
          correctionPattern: 'didn\'t rain',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_93_2',
        type: 'multiple_choice',
        prompt: 'Which sentence is grammatically correct?',
        options: [
          { id: 'opt_1', text: 'Fortunately, it didn\'t rain during our hike.', isCorrect: true },
          { id: 'opt_2', text: 'Fortunately, it didn\'t rained during our hike.', isCorrect: false },
          { id: 'opt_3', text: 'Fortunately, it not rained during our hike.', isCorrect: false },
        ],
        correctAnswer: 'Fortunately, it didn\'t rain during our hike.',
        explanation: '"Didn\'t + rain" (base verb) is correct.',
      },
    },
    {
      id: 'turn_a2_93_3',
      turnIndex: 3,
      partnerPrompt:
        'A five-mile hike without rain in England is definitely a victory! Was there anything you wanted to do but didn’t have enough time for before heading back home?',
      partnerAudioText:
        'A five-mile hike without rain in England is definitely a victory! Was there anything you wanted to do but didn’t have enough time for before heading back home?',
      partnerQuestionHindi:
        'इंग्लैंड में बिना बारिश के पांच मील की हाइक निश्चित रूप से एक जीत है! क्या ऐसा कुछ था जो आप करना चाहते थे लेकिन घर वापस आने से पहले आपके पास पर्याप्त समय नहीं था?',
      expectedFunction: 'Explain Unfinished or Missed Past Plans & Ask Follow-up Question',
      contextGoal:
        'Explain that you wanted to visit the Beatrix Potter gallery and kayak on the lake, but didn’t manage to because the queues were long, and ask Liam about his recent adventures.',
      targetVocabulary: ['wanted to rent kayaks', 'didn’t have enough time', 'queues were too long', 'where did you travel recently'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes, we really wanted to rent kayaks on Sunday morning, but we didn’t have enough time because the queues were quite long. We decided to visit a tea room instead. Where did you go on your last holiday, Liam?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'We planned to visit the literary museum, but we didn’t manage to go. We bought some local gingerbread instead. Did you travel anywhere exciting recently, Liam?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'We didn’t have time for kayaking, so we relaxed in town. What about your recent trips, Liam?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Missed Activity (didn’t have / didn’t manage)',
          patterns: ['didn\'t have time', 'didn\'t manage', 'wanted to', 'planned to', 'kayak', 'museum', 'queues'],
          required: true,
        },
        {
          name: 'Follow-up Question to Liam',
          patterns: ['where did you', 'did you travel', 'what about your', 'where did you go', 'and you'],
          required: false,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_93_3',
        type: 'fill_blank',
        prompt: 'Complete the question: "Where ___ you go on your last holiday?"',
        options: [
          { id: 'opt_1', text: 'did', isCorrect: true },
          { id: 'opt_2', text: 'were', isCorrect: false },
          { id: 'opt_3', text: 'have', isCorrect: false },
        ],
        correctAnswer: 'did',
        explanation: 'Use auxiliary "did" for past simple questions with an action verb ("go").',
      },
    },
    {
      id: 'turn_a2_93_4',
      turnIndex: 4,
      partnerPrompt:
        'I went to County Kerry in Ireland two weeks ago and hiked the Ring of Kerry—it was magical! Next time you go to the Lake District, let me know and I can recommend a secret trail that is never crowded. Ready to order another coffee?',
      partnerAudioText:
        'I went to County Kerry in Ireland two weeks ago and hiked the Ring of Kerry—it was magical! Next time you go to the Lake District, let me know and I can recommend a secret trail that is never crowded. Ready to order another coffee?',
      partnerQuestionHindi:
        'मैं दो सप्ताह पहले आयरलैंड के काउंटी केरी गया था और रिंग ऑफ केरी में हाइक किया था—यह जादुई था! अगली बार जब आप लेक डिस्ट्रिक्ट जाएं, तो मुझे बताएं और मैं एक गुप्त रास्ते की सिफारिश कर सकता हूँ जहाँ कभी भीड़ नहीं होती। क्या आप एक और कॉफ़ी ऑर्डर करने के लिए तैयार हैं?',
      expectedFunction: 'React to Liam’s Trip, Accept Recommendation & Conclude Stroll',
      contextGoal:
        'React enthusiastically to the Ring of Kerry (sounds breathtaking), gladly accept the trail recommendation for your next visit, and agree to get another cappuccino.',
      targetVocabulary: ['sounds absolutely breathtaking', 'would love your trail recommendation', 'let us get another coffee', 'thanks for the great chat'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'The Ring of Kerry sounds breathtaking! I would love your secret trail recommendation for my next trip. And yes, absolutely—let us grab another round of cappuccinos!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'That sounds amazing Liam! I will definitely ask you for tips next time. Yes, let us order another coffee!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Kerry sounds wonderful! I’d love those tips. Let’s get another coffee now!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Reaction to Kerry',
          patterns: ['sounds amazing', 'sounds breathtaking', 'wonderful', 'magical', 'great', 'kerry'],
          required: true,
        },
        {
          name: 'Accept Tips & Order Coffee',
          patterns: ['recommendation', 'tips', 'coffee', 'cappuccino', 'order', 'yes', 'grab'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_93_4',
        type: 'multiple_choice',
        prompt: 'Which phrase expresses natural, friendly enthusiasm in conversational English?',
        options: [
          { id: 'opt_1', text: 'That sounds absolutely wonderful!', isCorrect: true },
          { id: 'opt_2', text: 'I am sound nice.', isCorrect: false },
          { id: 'opt_3', text: 'Your travel is good past.', isCorrect: false },
        ],
        correctAnswer: 'That sounds absolutely wonderful!',
        explanation: '"That sounds + [adjective]" is the standard natural reaction formula.',
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
