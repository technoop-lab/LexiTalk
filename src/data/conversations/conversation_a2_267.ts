import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_267: ConversationDefinition = {
  id: 'conv_a2_267',
  title: 'Mediation: Relaying Practical Information Clearly',
  cefr: 'A2',
  unitId: 'unit_a2_18',
  lessonLinks: ['lesson_a2_18_267'],
  estimatedMinutes: 5,
  scenario:
    'You are at a busy international airport transit lounge with your travel companion Raj, who feels anxious and does not understand the loud English loudspeaker announcement. An urgent announcement just broadcasted changes for your flight (Flight 418 to London): a gate change from Gate 12 to Gate 27B at the far end of Terminal 2, a 30-minute departure delay, and a boarding priority call. You mediate the information and explain the situation clearly to Raj step by step.',
  communicativeGoals: [
    'Perform real-world spoken mediation by relaying announcements accurately in A2 English',
    'Translate complex transit broadcasts into three clear action points',
    'Report changes using clear indirect statements: "The announcer said that our gate has moved to Gate 27B...", "Our departure is delayed by thirty minutes..."',
    'Reassure your companion and provide step-by-step guidance: "Don’t worry, we have plenty of time. First, let’s gather our bags..."',
  ],
  canDoStatements: [
    'Can understand a public transit announcement and relay its main points to someone who didn’t understand',
    'Can clearly explain gate changes, delays, and boarding procedures in simple language',
    'Can organize a calm, sequential plan of action for traveling companions',
  ],
  characters: [
    {
      id: 'char_raj_companion',
      name: 'Raj',
      role: 'Travel Companion',
      avatar: '✈️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'announcement',
        ipa: '/əˈnaʊnsmənt/',
        partOfSpeech: 'noun',
        meaning: 'A formal public statement about a fact, occurrence, or intention',
        exampleSentence: 'Did you hear the airport loudspeaker announcement for our flight?',
        translations: { hi: 'घोषणा / सूचना (अनाउंसमेंट)' },
      },
      {
        word: 'mediate',
        ipa: '/ˈmiːdieɪt/',
        partOfSpeech: 'verb',
        meaning: 'To convey, relay, or explain information from one person or language to another',
        exampleSentence: 'I will mediate the English flight announcement so you know what to do.',
        translations: { hi: 'जानकारी समझाना / मध्यस्थता करना (मीडिएट)' },
      },
      {
        word: 'departure',
        ipa: '/dɪˈpɑːtʃə/',
        partOfSpeech: 'noun',
        meaning: 'The action of leaving, especially on a journey',
        exampleSentence: 'Our flight departure has been delayed by thirty minutes.',
        translations: { hi: 'प्रस्थान / रवानगी (डिपार्चर)' },
      },
      {
        word: 'boarding gate',
        ipa: '/ˈbɔːdɪŋ ɡeɪt/',
        partOfSpeech: 'noun phrase',
        meaning: 'The specific airport gate where passengers get on the airplane',
        exampleSentence: 'Our new boarding gate is Gate 27B at the end of the concourse.',
        translations: { hi: 'बोर्डिंग गेट / विमान में चढ़ने का द्वार (बोर्डिंग गेट)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'The announcement was about our flight to...',
        functionCategory: 'Identifying the subject of the broadcast',
        exampleSentence: 'The announcement was about our flight 418 to London.',
      },
      {
        phrase: 'They said that our departure gate has changed from... to...',
        functionCategory: 'Relaying location changes accurately',
        exampleSentence: 'They said that our departure gate has changed from Gate 12 to Gate 27B.',
      },
      {
        phrase: 'Do not worry, we have about twenty-five minutes, so...',
        functionCategory: 'Reassuring companion and managing time calmly',
        exampleSentence: 'Do not worry, we have about twenty-five minutes, so we do not need to rush.',
      },
      {
        phrase: 'Here is what we need to do right now: first...',
        functionCategory: 'Structuring practical action steps',
        exampleSentence: 'Here is what we need to do right now: first, grab your backpack and follow me.',
      },
    ],
    grammar: {
      title: 'Mediation Grammar: Reported Speech & Sequential Instructions',
      conceptExplanation:
        '1. Reporting what was announced: "The speaker said that our flight is delayed" / "They announced that the gate changed to 27B"\n2. Reassuring companions: "Don’t panic / Don’t worry, we have enough time"\n3. Structuring three immediate actions: "First, let’s [Action 1]. Next, we will [Action 2]. Finally, we should [Action 3]."\n4. Checking companion comprehension: "Are you ready? Let’s head over together."',
      patternFormula: 'The announcement said that [Change Fact]. Don’t worry because [Reassurance]. Here is our plan: First [Step 1], then [Step 2], and finally [Step 3].',
      contrastExamples: [
        {
          incorrect: 'Speaker say gate 27B fast run.',
          correct: 'The speaker said that our flight moved to Gate 27B, but we have plenty of time.',
          explanation: 'Use clear reported speech syntax and calm sequential instructions.',
        },
        {
          incorrect: 'Announcement is telling we delay thirty minute.',
          correct: 'The announcement stated that our flight is delayed by thirty minutes.',
          explanation: 'Use proper past reported verb "stated / said" with preposition "by".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Raj',
        text: 'I could not understand that fast loudspeaker voice! What did they just announce about our flight?',
        translation: 'मैं उस तेज़ लाउडस्पीकर की आवाज़ को नहीं समझ पाया! उन्होंने हमारी उड़ान के बारे में अभी क्या घोषणा की?',
      },
      {
        speaker: 'Learner',
        text: 'Don’t worry Raj, I understood everything. The announcement was for our flight 418. They said our departure gate has changed from Gate 12 to Gate 27B.',
        translation: 'चिंता मत करो राज, मैं सब समझ गया। घोषणा हमारी फ्लाइट 418 के लिए थी। उन्होंने कहा कि हमारा डिपार्चर गेट 12 से बदलकर गेट 27B हो गया है।',
      },
      {
        speaker: 'Raj',
        text: 'Oh no! Is our flight leaving right now? Are we going to miss it?',
        translation: 'अरे नहीं! क्या हमारी उड़ान अभी छूट रही है? क्या हम इसे चूकने वाले हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_267_1',
      type: 'fill_blank',
      prompt: 'Complete: "The airport announcement stated that our departure gate has ______ (changed / change / changing) to Gate 27B."',
      options: [
        { id: 'opt_1', text: 'changed', isCorrect: true },
        { id: 'opt_2', text: 'change', isCorrect: false },
        { id: 'opt_3', text: 'changing', isCorrect: false },
      ],
      correctAnswer: 'changed',
      explanation: 'Present Perfect auxiliary "has" is followed by past participle "changed".',
    },
    {
      id: 'cp_267_2',
      type: 'multiple_choice',
      prompt: 'Which response relays flight information clearly and reassures a worried companion?',
      options: [
        { id: 'opt_1', text: 'Don’t worry Raj, the gate changed to 27B and the flight is delayed by 30 minutes, so we have plenty of time.', isCorrect: true },
        { id: 'opt_2', text: 'Flight gate 27B now we must run very fast oh no.', isCorrect: false },
        { id: 'opt_3', text: 'They say delay run to gate now please.', isCorrect: false },
      ],
      correctAnswer: 'Don’t worry Raj, the gate changed to 27B and the flight is delayed by 30 minutes, so we have plenty of time.',
      explanation: 'Reassurance + clear reported facts + calm temporal logic.',
    },
    {
      id: 'cp_267_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [The announcer said that / our flight is delayed / by thirty minutes due to traffic]',
      correctAnswer: 'The announcer said that our flight is delayed by thirty minutes due to traffic',
      explanation: 'Reported speech clause + passive predicate + prepositional reason phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_267_1',
      prompt: 'Construct a sentence explaining that the announcement said our gate moved from Gate 12 to Gate 27B.',
      scenarioContext: 'Mediating the announcement to Raj.',
      targetStructure: 'The announcement said our boarding gate moved from Gate 12 to Gate 27B.',
      wordBank: ['The announcement said our', 'boarding gate moved from', 'Gate 12 to', 'Gate 27B.', 'announced gate is move', '12 from to 27B'],
      acceptableSolutions: [
        'The announcement said our boarding gate moved from Gate 12 to Gate 27B.',
        'The announcement said that our gate changed from Gate 12 to Gate 27B.',
      ],
      explanation: 'Reported speech clause + prepositional movement phrase ("from... to...").',
    },
    {
      id: 'sc_267_2',
      prompt: 'Construct a sentence reassuring Raj that we have thirty minutes and can walk calmly to Terminal 2.',
      scenarioContext: 'Reassuring your travel companion.',
      targetStructure: 'Don’t worry, we have thirty minutes and can walk calmly to the new gate.',
      wordBank: ['Don’t worry, we have', 'thirty minutes and can', 'walk calmly to', 'the new gate.', 'worry not we', 'calmly walk gate of'],
      acceptableSolutions: [
        'Don’t worry, we have thirty minutes and can walk calmly to the new gate.',
        'Do not worry, we have thirty minutes and can walk calmly to the new gate.',
      ],
      explanation: 'Imperative reassurance + compound coordinate clause.',
    },
  ],
  turns: [
    {
      id: 'turn_267_1',
      turnIndex: 1,
      partnerPrompt:
        'Oh no! That loudspeaker voice was so loud and fast. Did they just call our flight number 418? What did the announcement say, and what happened to our boarding gate?',
      partnerAudioText:
        'Oh no! That loudspeaker voice was so loud and fast. Did they just call our flight number 418? What did the announcement say, and what happened to our boarding gate?',
      partnerQuestionHindi:
        'अरे नहीं! वह लाउडस्पीकर की आवाज़ बहुत तेज़ और तेज़ थी। क्या उन्होंने अभी हमारी उड़ान संख्या 418 को बुलाया? घोषणा में क्या कहा गया, और हमारे बोर्डिंग गेट का क्या हुआ?',
      expectedFunction: 'Mediating the announcement calmly: explaining that flight 418’s boarding gate changed from Gate 12 to Gate 27B',
      contextGoal: 'Reassure Raj, explain that the announcement was for flight 418 to London, and that our gate changed from Gate 12 to Gate 27B across Terminal 2',
      targetVocabulary: ['Don’t worry Raj', 'I listened carefully', 'The announcement was for our flight 418', 'Our boarding gate has changed', 'from Gate 12 to Gate 27B', 'at the other end of Terminal 2'],
      suggestedResponses: [
        {
          label: 'Spontaneous Response',
          text: 'Don’t worry Raj, I understood the announcement completely! It was for our flight 418 to London. The speaker said that our departure gate has changed from Gate 12 to Gate 27B at the far end of Terminal 2.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Structured Response',
          text: 'Calm down Raj, everything is under control. The announcement said our flight 418 moved from Gate 12 to Gate 27B. We just need to walk to the new gate.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'reassurance_raj',
          patterns: ['don’t worry', 'do not worry', 'calm', 'raj', 'understood', 'okay', 'fine'],
          required: true,
        },
        {
          name: 'gate_change_fact',
          patterns: ['announcement', 'flight 418', '418', 'gate', 'changed', 'moved', '12', '27b', 'terminal 2'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_267_1_gate_is_change',
          pattern: /gate is change\b/i,
          errorType: 'grammar',
          message: 'Say "Our gate has changed" or "The gate changed to 27B".',
          correctionPattern: 'Our gate has changed to Gate 27B.',
        },
      ],
      remediationPractice: {
        id: 'rem_267_1',
        type: 'fill_blank',
        prompt: 'Fill in: "The gate has ______ (changed / change) to 27B."',
        options: [
          { id: 'r1', text: 'changed', isCorrect: true },
          { id: 'r2', text: 'change', isCorrect: false },
        ],
        correctAnswer: 'changed',
        explanation: 'Present Perfect uses the past participle "changed".',
      },
    },
    {
      id: 'turn_267_2',
      turnIndex: 2,
      partnerPrompt:
        'Are we going to miss our flight? Are they boarding right now? Did the announcer mention anything about timing or departure delays?',
      partnerAudioText:
        'Are we going to miss our flight? Are they boarding right now? Did the announcer mention anything about timing or departure delays?',
      partnerQuestionHindi:
        'क्या हमारी उड़ान छूटने वाली है? क्या वे अभी बोर्डिंग कर रहे हैं? क्या उद्घोषक ने समय या प्रस्थान में देरी के बारे में कुछ बताया?',
      expectedFunction: 'Explaining the timing details: flight is delayed by 30 minutes due to late incoming aircraft, so boarding begins in 20 minutes',
      contextGoal: 'Explain that the flight is delayed by 30 minutes, boarding will not start for another 20 minutes, so there is plenty of time to walk calmly',
      targetVocabulary: ['We are not going to miss it', 'The flight is delayed by thirty minutes', 'due to the late arrival of the plane', 'Boarding will start in twenty minutes', 'We have plenty of time', 'so we can walk calmly'],
      suggestedResponses: [
        {
          label: 'Spontaneous Response',
          text: 'No, we are definitely not going to miss it! The announcer explained that our flight is delayed by thirty minutes because the incoming aircraft arrived late. Boarding will not begin for another twenty minutes, so we have plenty of time to walk there calmly without running.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Structured Response',
          text: 'Don’t panic Raj! The flight is delayed by half an hour. Boarding starts in twenty minutes, so we have more than enough time to reach Gate 27B.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'delay_explanation',
          patterns: ['delayed', 'delay', 'thirty minutes', '30 minutes', 'half an hour', 'twenty minutes', '20 minutes', 'plenty of time', 'not miss'],
          required: true,
        },
        {
          name: 'calm_walking_pace',
          patterns: ['walk', 'calmly', 'no need to run', 'plenty of time', 'time to reach', 'gate 27b'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_267_2_delay_by_preposition',
          pattern: /delayed with thirty minutes|delayed for thirty minutes/i,
          errorType: 'grammar',
          message: 'Say "delayed by thirty minutes" (preposition "by").',
          correctionPattern: 'Our flight is delayed by thirty minutes.',
        },
      ],
      remediationPractice: {
        id: 'rem_267_2',
        type: 'multiple_choice',
        prompt: 'Which phrase correctly describes a flight delay?',
        options: [
          { id: 'r1', text: 'The flight is delayed by thirty minutes.', isCorrect: true },
          { id: 'r2', text: 'The flight is delay with thirty minutes.', isCorrect: false },
        ],
        correctAnswer: 'The flight is delayed by thirty minutes.',
        explanation: 'The standard collocation is "delayed by [duration]".',
      },
    },
    {
      id: 'turn_267_3',
      turnIndex: 3,
      partnerPrompt:
        'Phew, what a relief! Thank goodness you understand English so well. What three exact steps should we do right now so we get to Gate 27B smoothly?',
      partnerAudioText:
        'Phew, what a relief! Thank goodness you understand English so well. What three exact steps should we do right now so we get to Gate 27B smoothly?',
      partnerQuestionHindi:
        'उफ़, क्या राहत है! भगवान का शुक्र है कि आप अंग्रेजी इतनी अच्छी तरह समझते हैं। हमें अभी कौन से तीन सटीक कदम उठाने चाहिए ताकि हम आसानी से गेट 27B तक पहुँच सकें?',
      expectedFunction: 'Organizing 3 clear sequential action steps (pack bags/passports, follow overhead signs to Concourse B, fill water bottles on the way)',
      contextGoal: 'Detail 3 steps: 1. Collect bags and keep boarding passes ready, 2. Follow signs toward Gate 27B / Concourse B, 3. Stop for water and wait at the gate together',
      targetVocabulary: ['Here are our three steps', 'First let’s pack our bags and get our boarding passes ready', 'Second follow the overhead yellow signs toward Gate 27B', 'Third we can grab a bottle of water on the way', 'Let’s go together Raj'],
      suggestedResponses: [
        {
          label: 'Spontaneous Response',
          text: 'Here are our three clear steps: First, let’s collect our bags and keep our boarding passes and passports in our hands. Second, let’s follow the yellow overhead signs toward Concourse B and Gate 27B. Third, we can grab a bottle of water along the moving walkway and sit near the gate. Ready? Let’s head over together, Raj!',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Structured Response',
          text: 'Step one: pick up your backpack and passport. Step two: follow the signs to Terminal 2B. Step three: we will find seats near Gate 27B and wait for boarding. Let’s go, Raj!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'step_one_bags_passports',
          patterns: ['first', 'step one', 'bags', 'backpack', 'passport', 'boarding pass', 'collect', 'ready'],
          required: true,
        },
        {
          name: 'step_two_follow_signs',
          patterns: ['second', 'step two', 'follow', 'signs', 'overhead', 'concourse b', 'gate 27b', 'walk'],
          required: true,
        },
        {
          name: 'step_three_and_closure',
          patterns: ['third', 'step three', 'water', 'wait', 'seats', 'ready', 'together', 'let us go', 'raj'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_267_3_follow_to_signs',
          pattern: /follow to the signs/i,
          errorType: 'grammar',
          message: 'Transitive verb: "follow the signs" (no "to").',
          correctionPattern: 'Follow the overhead signs toward Gate 27B.',
        },
      ],
      remediationPractice: {
        id: 'rem_267_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [First grab your backpack / then follow the yellow signs / toward Gate 27B]',
        correctAnswer: 'First grab your backpack then follow the yellow signs toward Gate 27B',
        explanation: 'Imperative sequence with sequential linkers "first... then...".',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 75,
  },
};
