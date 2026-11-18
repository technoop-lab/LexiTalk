import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_124: ConversationDefinition = {
  id: 'conv_a2_124',
  title: 'Present Perfect with "Just", "Already", and "Yet" (Daily Task Status & Updates)',
  cefr: 'A2',
  unitId: 'unit_a2_9',
  lessonLinks: ['lesson_a2_9_124'],
  estimatedMinutes: 5,
  scenario:
    'You are in the production office at the Bristol Harbourside Pavilion preparing for an evening design showcase. Senior event coordinator Sarah Jenkins comes over for an urgent task status check. Give real-time status reports using "just" (moments ago), "already" (completed earlier than expected), and "yet" (questions and pending tasks).',
  communicativeGoals: [
    'Report very recent completions using "have/has just + past participle" (e.g. "I have just spoken with the caterer")',
    'Express early or completed deliverables using "have/has already + past participle" (e.g. "I have already printed the badges")',
    'Inquire about and state pending items using "yet" at the end of sentences (e.g. "Has the technician arrived yet? / Not yet")',
    'Coordinate next immediate steps in a fast-paced work environment',
  ],
  canDoStatements: [
    'Can report very recent events using "have/has just + past participle" (CEFR A2)',
    'Can confirm finished work using "already" and state pending tasks using "yet"',
    'Can deliver clear, structured project status updates during a team check-in',
  ],
  characters: [
    {
      id: 'char_sarah_jenkins',
      name: 'Sarah Jenkins',
      role: 'Senior Event Producer & Operations Lead',
      avatar: '📋',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'just',
        ipa: '/dʒʌst/',
        partOfSpeech: 'adverb',
        meaning: 'A very short time ago (moments ago)',
        exampleSentence: 'I have just sent the final presentation slides to the keynote speaker.',
        translations: { hi: 'अभी-अभी / कुछ ही क्षण पहले' },
      },
      {
        word: 'already',
        ipa: '/ɔːlˈrɛdi/',
        partOfSpeech: 'adverb',
        meaning: 'Before now or earlier than expected',
        exampleSentence: 'I have already set up all fifty attendee welcome bags.',
        translations: { hi: 'पहले ही / उम्मीद से पहले' },
      },
      {
        word: 'yet',
        ipa: '/jɛt/',
        partOfSpeech: 'adverb',
        meaning: 'Up to the present time (used in questions and negative statements at the end)',
        exampleSentence: 'The lighting technician hasn’t arrived at the stage yet.',
        translations: { hi: 'अभी तक (प्रश्नों और नकारात्मक वाक्यों में)' },
      },
      {
        word: 'caterer',
        ipa: '/ˈkeɪtərər/',
        partOfSpeech: 'noun',
        meaning: 'A person or company that provides food and drinks for an event',
        exampleSentence: 'I have just called the caterer to confirm vegetarian options.',
        translations: { hi: 'खानपान प्रबंधक / कैटरर' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I have already printed all the attendee badges.',
        functionCategory: 'Reporting Completed Deliverables (already)',
        exampleSentence: 'We have already confirmed the venue booking.',
      },
      {
        phrase: 'I have just spoken to the caterer on the phone.',
        functionCategory: 'Reporting Immediate Recent Action (just)',
        exampleSentence: 'She has just walked into the building.',
      },
      {
        phrase: 'Have the deliveries arrived yet?',
        functionCategory: 'Asking Pending Status Question (yet)',
        exampleSentence: 'Has the client signed the agreement yet?',
      },
      {
        phrase: 'No, they haven’t arrived yet, but they are five minutes away.',
        functionCategory: 'Stating Negative Pending Status (haven’t... yet)',
        exampleSentence: 'We haven’t tested the microphone yet.',
      },
    ],
    grammar: {
      title: 'Present Perfect Time Adverbs: Just, Already & Yet',
      conceptExplanation:
        '1. Just (very recent action): Placed between have/has and the Past Participle. "I have just sent the email".\n2. Already (completed earlier than expected): Placed between have/has and the Past Participle (or at the end). "I have already printed the files".\n3. Yet (expected action): Used only in NEGATIVE sentences and QUESTIONS, placed at the VERY END of the sentence.\n- Question: "Have you called the client yet?"\n- Negative: "No, I haven\'t called them yet".\n- Never use "yet" in affirmative sentences (e.g. do NOT say "I have yet finished").',
      patternFormula: 'Affirmative: Subject + have/has + [just / already] + [Past Participle] | Question: Have/Has + Subject + [Past Participle] + yet? | Negative: Subject + haven\'t/hasn\'t + [Past Participle] + yet',
      contrastExamples: [
        {
          incorrect: 'I have yet called the caterer.',
          correct: 'I haven\'t called the caterer yet. / I have already called the caterer.',
          explanation: '"Yet" cannot be used in standard affirmative A2 statements; use "already" for completed tasks or "haven\'t... yet" for pending tasks.',
        },
        {
          incorrect: 'I have finished just the report.',
          correct: 'I have just finished the report.',
          explanation: 'Adverb "just" goes between "have/has" and the past participle ("have just finished").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Sarah Jenkins',
        text: 'Hi Alex! Doors open in two hours and we have a lot to finalize. Have you printed the name badges yet?',
        translation: 'नमस्ते एलेक्स! दो घंटे में दरवाजे खुलेंगे और हमें बहुत कुछ अंतिम रूप देना है। क्या आपने अभी तक नाम के बैज प्रिंट कर लिए हैं?',
      },
      {
        speaker: 'You',
        text: 'Hi Sarah! Yes, I have already printed all 150 attendee badges and sorted them alphabetically. Also, I have just received the guest list update from marketing!',
        translation: 'नमस्ते सारा! हाँ, मैंने पहले ही सभी 150 प्रतिभागियों के बैज प्रिंट कर लिए हैं और उन्हें वर्णानुक्रम में व्यवस्थित कर दिया है। इसके अलावा, मुझे अभी-अभी मार्केटिंग से अतिथि सूची का अपडेट मिला है!',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_124_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "I have ___ (already / yet) printed all the schedules."',
      options: [
        { id: 'opt_1', text: 'already', isCorrect: true },
        { id: 'opt_2', text: 'yet', isCorrect: false },
        { id: 'opt_3', text: 'ever', isCorrect: false },
      ],
      correctAnswer: 'already',
      explanation: 'Use "already" in affirmative sentences to show completion.',
    },
    {
      id: 'cp_a2_124_2',
      type: 'multiple_choice',
      prompt: 'Where should "yet" be placed in a negative Present Perfect sentence?',
      options: [
        { id: 'opt_1', text: 'At the end of the sentence: "We haven’t checked the microphones yet."', isCorrect: true },
        { id: 'opt_2', text: 'Between have and verb: "We have yet not checked."', isCorrect: false },
        { id: 'opt_3', text: 'At the start: "Yet we have not checked."', isCorrect: false },
      ],
      correctAnswer: 'At the end of the sentence: "We haven’t checked the microphones yet."',
      explanation: '"Yet" goes at the end of negative sentences and questions.',
    },
    {
      id: 'cp_a2_124_3',
      type: 'multiple_choice',
      prompt: 'Which sentence indicates an action completed moments ago?',
      options: [
        { id: 'opt_1', text: 'I have just spoken to the caterer on the phone.', isCorrect: true },
        { id: 'opt_2', text: 'I have yet spoken to the caterer.', isCorrect: false },
        { id: 'opt_3', text: 'I just speaking to caterer.', isCorrect: false },
      ],
      correctAnswer: 'I have just spoken to the caterer on the phone.',
      explanation: '"have just + past participle" expresses immediate recent completion.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_124_1',
      scenarioContext: 'Report early completion of badges.',
      prompt: 'Build: "I have already printed all the attendee badges."',
      targetStructure: 'Subject + have + already + participle + object phrase',
      wordBank: ['I', 'have', 'already', 'printed', 'all', 'the', 'attendee', 'badges', 'yet', 'just', 'printing'],
      acceptableSolutions: [
        'I have already printed all the attendee badges',
        'I have already printed all the attendee badges.',
      ],
      explanation: 'Completed action statement with "already".',
    },
    {
      id: 'sc_a2_124_2',
      scenarioContext: 'Ask about the sound technician’s arrival.',
      prompt: 'Build: "Has the audio technician arrived at the venue yet?"',
      targetStructure: 'Has + subject + past participle + prepositional phrase + yet',
      wordBank: ['Has', 'the', 'audio', 'technician', 'arrived', 'at', 'the', 'venue', 'yet', 'Have', 'already', 'arrive'],
      acceptableSolutions: [
        'Has the audio technician arrived at the venue yet',
        'Has the audio technician arrived at the venue yet?',
        'Has the audio technician arrived at the venue yet.',
      ],
      explanation: 'Status question ending with "yet".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_124_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi Alex! The showcase starts in two hours and our VIP guests are arriving early. Could you give me a quick status update? Have you printed the badges, and have you checked the welcome gift bags yet?',
      partnerAudioText:
        'Hi Alex! The showcase starts in two hours and our VIP guests are arriving early. Could you give me a quick status update? Have you printed the badges, and have you checked the welcome gift bags yet?',
      partnerQuestionHindi:
        'नमस्ते एलेक्स! शोकेस दो घंटे में शुरू होगा और हमारे वीआईपी मेहमान जल्दी आ रहे हैं। क्या आप मुझे त्वरित स्थिति अपडेट दे सकते हैं? क्या आपने बैज प्रिंट कर लिए हैं, और क्या आपने अभी तक स्वागत उपहार बैग चेक कर लिए हैं?',
      expectedFunction: 'Report Task Completion with "Already" & "Just" (already printed badges / just finished gift bags)',
      contextGoal:
        'Confirm that you have already printed all 150 attendee badges; add that you have just finished packing and checking the VIP gift bags.',
      targetVocabulary: ['have already printed all 150 name badges', 'have just finished packing the VIP gift bags', 'everything is arranged on the reception desk', 'ready for check-in'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Hi Sarah! I have already printed all 150 attendee badges and arranged them alphabetically. Also, I have just finished checking the VIP gift bags, and they are ready on the reception table.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Already Completed (already printed / badges / 150 / sorted)',
          patterns: ['already printed', 'printed', 'badges', '150', 'arranged', 'alphabetically', 'reception'],
          required: true,
        },
        {
          name: 'Just Finished (have just finished / gift bags / packed / ready)',
          patterns: ['have just', 'just finished', 'just checked', 'gift bags', 'vip', 'ready', 'packed'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'yet_in_affirmative_error',
          pattern: /\bi have yet printed\b|\bi have yet checked\b/i,
          errorType: 'grammar',
          message: 'Use "already" or "just" in affirmative sentences: "I have already printed the badges".',
          correctionPattern: 'I have already printed all the badges',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_124_1',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly confirms a finished task?',
        options: [
          { id: 'opt_1', text: 'I have already prepared all the badges.', isCorrect: true },
          { id: 'opt_2', text: 'I have yet prepared all the badges.', isCorrect: false },
          { id: 'opt_3', text: 'I already preparing badges.', isCorrect: false },
        ],
        correctAnswer: 'I have already prepared all the badges.',
        explanation: '"Already" indicates an early or completed task in the affirmative.',
      },
    },
    {
      id: 'turn_a2_124_2',
      turnIndex: 2,
      partnerPrompt:
        'Brilliant work on the badges and bags! What about the food and refreshments? Has the catering manager delivered the canapés and coffee urns yet?',
      partnerAudioText:
        'Brilliant work on the badges and bags! What about the food and refreshments? Has the catering manager delivered the canapés and coffee urns yet?',
      partnerQuestionHindi:
        'बैज और बैग पर शानदार काम! भोजन और अल्पाहार के बारे में क्या? क्या कैटरिंग मैनेजर ने अभी तक स्नैक्स और कॉफी के बर्तन डिलीवर कर दिए हैं?',
      expectedFunction: 'State Recent Phone Update with "Just" & Pending Delivery with "Yet" (just called caterer / hasn’t arrived yet)',
      contextGoal:
        'Explain that you have just spoken to the caterer on the phone; the van hasn’t arrived yet, but the driver is five minutes away and unloading shortly.',
      targetVocabulary: ['have just spoken to the catering manager', 'van hasn’t arrived at the loading dock yet', 'driver is five minutes away', 'setting up the hot coffee station immediately'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'I have just spoken to the catering manager on the phone. The delivery van hasn’t arrived at the loading bay yet, but the driver is only five minutes away in city traffic.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Just Called (have just spoken / called / phone / caterer)',
          patterns: ['have just', 'just spoken', 'just called', 'phone', 'caterer', 'catering', 'manager'],
          required: true,
        },
        {
          name: 'Not Yet Arrived (hasn’t arrived yet / van / five minutes / traffic)',
          patterns: ['hasn’t arrived yet', 'not arrived yet', 'haven’t arrived yet', 'five minutes', 'van', 'traffic', 'loading bay', 'shortly'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_124_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "The catering van hasn’t arrived ___ (yet / already)."',
        options: [
          { id: 'opt_1', text: 'yet', isCorrect: true },
          { id: 'opt_2', text: 'already', isCorrect: false },
          { id: 'opt_3', text: 'just', isCorrect: false },
        ],
        correctAnswer: 'yet',
        explanation: '"Yet" completes negative expectation clauses.',
      },
    },
    {
      id: 'turn_a2_124_3',
      turnIndex: 3,
      partnerPrompt:
        'Great, I will direct the security team to open the delivery gates. What about the stage equipment? Have you tested the wireless microphones and projector screen yet?',
      partnerAudioText:
        'Great, I will direct the security team to open the delivery gates. What about the stage equipment? Have you tested the wireless microphones and projector screen yet?',
      partnerQuestionHindi:
        'बहुत बढ़िया, मैं सुरक्षा टीम को डिलीवरी गेट खोलने का निर्देश दूंगी। स्टेज उपकरण के बारे में क्या? क्या आपने अभी तक वायरलेस माइक्रोफोन और प्रोजेक्टर स्क्रीन का परीक्षण कर लिया है?',
      expectedFunction: 'Report AV Testing Status (have already tested projector / haven’t checked handheld mics yet)',
      contextGoal:
        'State that you have already calibrated the main projector and slides, but you haven’t tested the handheld microphones yet because the AV engineer just plugged them in.',
      targetVocabulary: ['have already calibrated the projector screen and slides', 'haven’t tested the wireless handheld microphones yet', 'audio engineer has just plugged in the soundboard', 'will test them now'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'I have already tested the main projector and presentation slides. However, we haven’t tested the wireless microphones yet because the sound engineer has just plugged in the mixer. We will test them right now!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Already Tested (already tested / checked / projector / slides / screen)',
          patterns: ['already tested', 'already checked', 'projector', 'slides', 'screen', 'working'],
          required: true,
        },
        {
          name: 'Not Yet & Just (haven’t tested microphones yet / just plugged in / sound)',
          patterns: ['haven’t tested', 'not tested', 'microphones', 'mics', 'yet', 'just plugged in', 'sound engineer', 'right now'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_124_3',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly combines "already" and "yet"?',
        options: [
          { id: 'opt_1', text: 'I have already checked the screen, but I haven’t tested the sound yet.', isCorrect: true },
          { id: 'opt_2', text: 'I have yet checked screen, but I already not tested.', isCorrect: false },
          { id: 'opt_3', text: 'I checked already, but tested not yet.', isCorrect: false },
        ],
        correctAnswer: 'I have already checked the screen, but I haven’t tested the sound yet.',
        explanation: 'Accurate and natural usage of both Present Perfect adverbs.',
      },
    },
    {
      id: 'turn_a2_124_4',
      turnIndex: 4,
      partnerPrompt:
        'Fantastic coordination, Alex! You have handled this timeline brilliantly. The caterer just pulled into the bay, and the venue looks spotless. Let’s do a quick sound test together and open the doors!',
      partnerAudioText:
        'Fantastic coordination, Alex! You have handled this timeline brilliantly. The caterer just pulled into the bay, and the venue looks spotless. Let’s do a quick sound test together and open the doors!',
      partnerQuestionHindi:
        'शानदार समन्वय, एलेक्स! आपने इस समय-सीमा को बहुत ही शानदार ढंग से संभाला है। कैटरर अभी-अभी बे में आया है, और स्थल बेदाग लग रहा है। आइए एक साथ एक त्वरित ध्वनि परीक्षण करें और दरवाजे खोलें!',
      expectedFunction: 'Acknowledge Praise, Confirm Final Prep & Transition to Live Event',
      contextGoal:
        'Thank Sarah; hand her a microphone to test audio levels, and confirm that everything is under control for the doors opening.',
      targetVocabulary: ['thank you Sarah', 'let’s do the microphone sound check now', 'everything is on track for doors opening at 6:30', 'let’s have a fantastic event'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Thank you Sarah! Here is the main wireless microphone—let’s do the sound check together now. Everything is running right on schedule for the doors opening at 6:30 PM. Let’s make this showcase a success!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Sound Check & Readiness (sound check / microphone / test / ready / schedule / doors)',
          patterns: ['sound check', 'microphone', 'test', 'ready', 'schedule', '6:30', 'doors', 'success', 'thank you', 'sarah'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_124_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Everything is running ___ (on / at) schedule."',
        options: [
          { id: 'opt_1', text: 'on', isCorrect: true },
          { id: 'opt_2', text: 'at', isCorrect: false },
          { id: 'opt_3', text: 'in', isCorrect: false },
        ],
        correctAnswer: 'on',
        explanation: 'The fixed idiom is "on schedule".',
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
