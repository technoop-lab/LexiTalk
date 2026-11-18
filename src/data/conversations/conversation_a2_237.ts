import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_237: ConversationDefinition = {
  id: 'conv_a2_237',
  title: 'Digital Habits, Screen Time & Online Well-Being',
  cefr: 'A2',
  unitId: 'unit_a2_16',
  lessonLinks: ['lesson_a2_16_237'],
  estimatedMinutes: 5,
  scenario:
    'You meet your coworker Maya in the company wellness lounge. You discuss digital habits, managing excessive screen time, setting boundary limits with notification timers, practicing "digital detox" evenings, and achieving healthy work-life balance.',
  communicativeGoals: [
    'Describe personal digital routines and screen habits using frequency adverbs and time expressions ("constantly", "rarely", "from time to time")',
    'Express habits in the past and present using "used to" versus present routines ("I used to check emails late at night, but now I...")',
    'Recommend digital well-being techniques like app timers, notification silencers, and screen-free bedroom zones',
    'Demonstrate fluent, empathetic conversation on digital lifestyle management in A2 English',
  ],
  canDoStatements: [
    'Can describe daily screen time and digital device habits',
    'Can compare past digital routines with current habits using "used to"',
    'Can give and receive advice on digital well-being and reducing distractions',
  ],
  characters: [
    {
      id: 'char_maya_wellness',
      name: 'Maya',
      role: 'Wellness Committee Leader & Coworker',
      avatar: '📱',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'screen time',
        ipa: '/ˈskriːn taɪm/',
        partOfSpeech: 'noun',
        meaning: 'Time spent using a device with a screen, such as a smartphone, computer, or television',
        exampleSentence: 'Limiting screen time before bed improves the quality of deep sleep.',
        translations: { hi: 'स्क्रीन का समय / फोन या कंप्यूटर पर बिताया गया समय (स्क्रीन टाइम)' },
      },
      {
        word: 'detox',
        ipa: '/ˈdiːtɒks/',
        partOfSpeech: 'noun / verb',
        meaning: 'A period during which one refrains from using electronic devices such as smartphones or computers',
        exampleSentence: 'I take a weekend digital detox to read physical books and hike outdoors.',
        translations: { hi: 'डिजिटल डिटॉक्स / उपकरणों से दूरी (डिटॉक्स)' },
      },
      {
        word: 'distraction',
        ipa: '/dɪˈstrækʃn/',
        partOfSpeech: 'noun',
        meaning: 'A thing that prevents someone from giving full attention to something else',
        exampleSentence: 'Constant notification pings are a major workplace distraction.',
        translations: { hi: 'ध्यान भटकाव / विकर्षण (डिस्ट्रैक्शन)' },
      },
      {
        word: 'boundaries',
        ipa: '/ˈbaʊndriz/',
        partOfSpeech: 'noun plural',
        meaning: 'Limits that define acceptable behavior and protect personal time and mental space',
        exampleSentence: 'Setting clear digital boundaries between work hours and personal life is vital.',
        translations: { hi: 'सीमाएं / मर्यादाएं (बाउंड्रीज़)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I used to check notifications constantly, but now I turn them off.',
        functionCategory: 'Contrasting past habit with present routine using "used to"',
        exampleSentence: 'I used to scroll late at night, but now I read a printed novel.',
      },
      {
        phrase: 'Setting app timers helps me manage daily screen time.',
        functionCategory: 'Describing self-regulation tools with gerunds',
        exampleSentence: 'Turning off push alerts prevents unnecessary distractions.',
      },
      {
        phrase: 'Having screen-free evenings gives my mind space to relax.',
        functionCategory: 'Explaining wellbeing outcomes',
        exampleSentence: 'Leaving my smartphone outside the bedroom improved my sleep.',
      },
      {
        phrase: 'What strategies work best for you when unplugging from work?',
        functionCategory: 'Inquiring about digital wellness tips',
        exampleSentence: 'How do you avoid checking emails during vacations?',
      },
    ],
    grammar: {
      title: 'Contrasting Past & Present Habits: "Used to" vs. Present Simple',
      conceptExplanation:
        '1. Past Habits with "Used to": Use "used to + base verb" to describe past routines that are no longer true ("I used to spend 5 hours on social media").\n2. Present Routine Contrast: Add "but now + Present Simple" ("...but now I restrict it to one hour").\n3. Gerunds as Subjects: "Setting boundaries is essential", "Unplugging on weekends helps me recharge."',
      patternFormula: 'Subject + used to + [Base Verb], but now + [Subject] + [Present Simple Clause]',
      contrastExamples: [
        {
          incorrect: 'I used to checking my phone every five minutes.',
          correct: 'I used to check my phone every five minutes.',
          explanation: '"Used to" is followed by a bare base infinitive ("check"), not a gerund.',
        },
        {
          incorrect: 'Now I am use app timer.',
          correct: 'Now I use an app timer to monitor screen time.',
          explanation: 'Use present simple ("I use") for current daily routines.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Maya',
        text: 'Welcome to our Digital Wellness circle! How do you feel about your daily screen time lately?',
        translation: 'हमारे डिजिटल वेलनेस सर्कल में आपका स्वागत है! हाल ही में आप अपने दैनिक स्क्रीन समय के बारे में कैसा महसूस करते हैं?',
      },
      {
        speaker: 'Learner',
        text: 'Hello Maya! I used to check work emails late at night, but now I set strict app timers and enjoy screen-free evenings.',
        translation: 'नमस्ते माया! मैं देर रात काम के ईमेल देखा करता था, लेकिन अब मैं सख्त ऐप टाइमर सेट करता हूँ और स्क्रीन-मुक्त शाम का आनंद लेता हूँ।',
      },
      {
        speaker: 'Maya',
        text: 'That is such a healthy habit! Establishing digital boundaries prevents burnout and boosts focus.',
        translation: 'यह बहुत ही स्वस्थ आदत है! डिजिटल सीमाएं स्थापित करने से मानसिक थकान से बचा जा सकता है और ध्यान केंद्रित करने में सुधार होता है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_237_1',
      type: 'fill_blank',
      prompt: 'Complete with the base verb: "I used to ______ (scroll / scrolling) on social media for hours."',
      options: [
        { id: 'opt_1', text: 'scroll', isCorrect: true },
        { id: 'opt_2', text: 'scrolling', isCorrect: false },
        { id: 'opt_3', text: 'scrolled', isCorrect: false },
      ],
      correctAnswer: 'scroll',
      explanation: '"Used to" is followed by a base verb ("scroll").',
    },
    {
      id: 'cp_237_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly contrasts past and present digital habits?',
      options: [
        { id: 'opt_1', text: 'I used to keep notifications on all night, but now I mute my phone at nine.', isCorrect: true },
        { id: 'opt_2', text: 'I used to kept notifications on night but now I muted.', isCorrect: false },
        { id: 'opt_3', text: 'I was used to keep notifications but now I am muting.', isCorrect: false },
      ],
      correctAnswer: 'I used to keep notifications on all night, but now I mute my phone at nine.',
      explanation: '"Used to + base verb" contrasted with present simple "now I mute".',
    },
    {
      id: 'cp_237_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [Setting digital boundaries / helps me / maintain healthy / work-life balance]',
      correctAnswer: 'Setting digital boundaries helps me maintain healthy work-life balance',
      explanation: 'Gerund subject phrase + singular verb + object.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_237_1',
      prompt: 'Construct a sentence stating that you used to check emails late at night, but now you set app limits.',
      scenarioContext: 'Sharing digital habits with Maya.',
      targetStructure: 'I used to check emails late at night, but now I set daily app limits.',
      wordBank: ['I used to check', 'emails late at night,', 'but now I set', 'daily app limits,', 'Maya.'],
      acceptableSolutions: [
        'I used to check emails late at night, but now I set daily app limits.',
        'I used to check messages late, but now I use app timers.',
      ],
      explanation: 'Contrast formula with "used to" and present simple.',
    },
    {
      id: 'sc_237_2',
      prompt: 'Construct a sentence stating that having screen-free evenings gives the mind space to relax.',
      scenarioContext: 'Discussing wellness benefits.',
      targetStructure: 'Having screen-free evenings allows my mind to relax and recharges my focus.',
      wordBank: ['Having screen-free evenings', 'allows my mind to', 'relax and recharges', 'my focus,', 'Maya.'],
      acceptableSolutions: [
        'Having screen-free evenings allows my mind to relax and recharges my focus.',
        'Screen-free evenings allow my mind to relax.',
      ],
      explanation: 'Gerund subject + verb + infinitive phrase.',
    },
  ],
  turns: [
    {
      id: 'turn_237_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! Welcome to our weekly Digital Wellbeing corner in the wellness lounge. We’re discussing how our screen habits have changed over the past year. How do your current screen habits compare to the past?',
      partnerAudioText:
        'Hi there! Welcome to our weekly Digital Wellbeing corner in the wellness lounge. We’re discussing how our screen habits have changed over the past year. How do your current screen habits compare to the past?',
      partnerQuestionHindi:
        'नमस्ते! वेलनेस लाउंज में हमारे साप्ताहिक डिजिटल वेलबीइंग कॉर्नर में आपका स्वागत है। हम चर्चा कर रहे हैं कि पिछले वर्ष में हमारी स्क्रीन की आदतें कैसे बदल गई हैं। आपकी वर्तमान स्क्रीन की आदतें अतीत की तुलना में कैसी हैं?',
      expectedFunction: 'Greeting Maya and contrasting past screen habits with present routines using "used to" and "but now"',
      contextGoal: 'Greet Maya, mention that you used to scroll constantly late at night, but now you set screen limits or turn off notifications',
      targetVocabulary: ['Hi Maya', 'used to check', 'screen time', 'but now I set', 'digital detox', 'boundaries'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hi Maya! In the past, I used to check my smartphone constantly late at night, but now I set a strict 9:00 PM screen limit and practice screen-free evenings.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Maya! I used to get distracted by endless notification alerts, but now I silence my phone during work hours to protect my focus.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good afternoon, Maya! I’ve become much more mindful. I used to spend hours scrolling, but now I dedicate evenings to reading and family time.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_maya',
          patterns: ['hi', 'hello', 'maya', 'good afternoon'],
          required: true,
        },
        {
          name: 'used_to_screen_contrast',
          patterns: ['used to', 'screen time', 'notifications', 'but now', 'limits', 'timers', 'scrolling', 'detox'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_237_1_used_to_ing',
          pattern: /used to checking|used to scrolling/i,
          errorType: 'grammar',
          message: 'Use base verb after "used to": "I used to check my phone."',
          correctionPattern: 'I used to check notifications late at night.',
        },
      ],
      remediationPractice: {
        id: 'rem_237_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I used to ______ (browse) the web for hours."',
        options: [
          { id: 'r1', text: 'browse', isCorrect: true },
          { id: 'r2', text: 'browsing', isCorrect: false },
        ],
        correctAnswer: 'browse',
        explanation: '"Used to" takes a base verb.',
      },
    },
    {
      id: 'turn_237_2',
      turnIndex: 2,
      partnerPrompt:
        'That is an inspiring transition! Many coworkers struggle with digital fatigue because work notifications keep buzzing on their personal phones. What boundaries or tools do you recommend to disconnect peacefully?',
      partnerAudioText:
        'That is an inspiring transition! Many coworkers struggle with digital fatigue because work notifications keep buzzing on their personal phones. What boundaries or tools do you recommend to disconnect peacefully?',
      partnerQuestionHindi:
        'यह एक प्रेरणादायक बदलाव है! कई सहकर्मी डिजिटल थकान से जूझते हैं क्योंकि उनके व्यक्तिगत फोन पर काम के संदेश आते रहते हैं। शांति से डिस्कनेक्ट करने के लिए आप किन सीमाओं या उपकरणों की सिफारिश करते हैं?',
      expectedFunction: 'Recommending digital boundary strategies (app timers, do not disturb mode, charging outside bedroom)',
      contextGoal: 'Recommend "Do Not Disturb" mode, app timers, and keeping devices outside the bedroom at night',
      targetVocabulary: ['boundaries', 'app timers', 'Do Not Disturb', 'digital fatigue', 'disconnect', 'bedroom'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I highly recommend activating "Do Not Disturb" after work hours and setting app timers. Leaving your phone to charge outside the bedroom also creates a peaceful environment for sleep.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Turning off non-essential notifications is a great first step. Establishing clear digital boundaries helps prevent work stress from invading personal relaxation time.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Using grayscale mode and scheduling daily screen-free walks helps recharge mental energy and eliminate digital distractions.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'wellness_recommendations',
          patterns: ['boundaries', 'timers', 'do not disturb', 'notifications', 'charge', 'bedroom', 'disconnect', 'fatigue'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_237_2_recommend_structure',
          pattern: /i recommend to turn off/i,
          errorType: 'grammar',
          message: 'Use gerund after recommend: "I recommend turning off notifications" or "I recommend that you turn off notifications."',
          correctionPattern: 'I recommend turning off non-essential alerts.',
        },
      ],
      remediationPractice: {
        id: 'rem_237_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly advises on digital well-being?',
        options: [
          { id: 'r1', text: 'I recommend setting daily app timers to reduce digital fatigue.', isCorrect: true },
          { id: 'r2', text: 'I recommend to set daily app timers for reduce fatigue.', isCorrect: false },
        ],
        correctAnswer: 'I recommend setting daily app timers to reduce digital fatigue.',
        explanation: '"Recommend + gerund (-ing)" is grammatically standard.',
      },
    },
    {
      id: 'turn_237_3',
      turnIndex: 3,
      partnerPrompt:
        'Charging the phone outside the bedroom is such a brilliant tip! We’re launching a 7-day "Evening Unplugged" challenge next Monday for all team members. Would you like to sign up and share your tips with the group?',
      partnerAudioText:
        'Charging the phone outside the bedroom is such a brilliant tip! We’re launching a 7-day "Evening Unplugged" challenge next Monday for all team members. Would you like to sign up and share your tips with the group?',
      partnerQuestionHindi:
        'बेडरूम के बाहर फोन चार्ज करना इतना शानदार सुझाव है! हम अगले सोमवार को सभी टीम सदस्यों के लिए 7-दिवसीय "ईवनिंग अनप्लग्ड" चुनौती शुरू कर रहे हैं। क्या आप साइन अप करना चाहेंगे और समूह के साथ अपने सुझाव साझा करना चाहेंगे?',
      expectedFunction: 'Accepting the challenge invitation enthusiastically, confirming participation for next Monday, and thanking Maya',
      contextGoal: 'Accept the 7-day challenge, confirm starting Monday, and thank Maya for promoting wellness',
      targetVocabulary: ['Evening Unplugged', 'challenge', 'next Monday', 'sign up', 'Thank you Maya', 'look forward to'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I would love to join the Evening Unplugged challenge starting next Monday! Thank you for organizing this wonderful wellness initiative, Maya.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Count me in for the 7-day challenge next Monday! I look forward to supporting our colleagues in building healthy digital habits. Thanks, Maya!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'That sounds fantastic! Sign me up for Monday. Thank you for prioritizing employee wellbeing, Maya.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'challenge_acceptance',
          patterns: ['monday', 'challenge', 'sign up', 'unplugged', 'thank you', 'maya', 'look forward to', 'count me in'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_237_3_short_ok',
          pattern: /^ok i join monday\.$/i,
          errorType: 'interaction',
          message: 'Provide a complete, polite response: "I would love to sign up for the challenge next Monday, Maya!"',
          correctionPattern: 'Thank you, Maya! I look forward to participating in the challenge on Monday.',
        },
      ],
      remediationPractice: {
        id: 'rem_237_3',
        type: 'fill_blank',
        prompt: 'Fill in: "I look forward to ______ (joining) the challenge."',
        options: [
          { id: 'r1', text: 'joining', isCorrect: true },
          { id: 'r2', text: 'join', isCorrect: false },
        ],
        correctAnswer: 'joining',
        explanation: '"Look forward to" takes a gerund (-ing).',
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
