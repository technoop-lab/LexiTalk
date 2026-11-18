import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_262: ConversationDefinition = {
  id: 'conv_a2_262',
  title: 'Conversation Repair, Follow-Up Questions & Keeping a Conversation Going',
  cefr: 'A2',
  unitId: 'unit_a2_18',
  lessonLinks: ['lesson_a2_18_262'],
  estimatedMinutes: 5,
  scenario:
    'You are in a lively coffee break conversation with your international project colleague Julian. You practice natural conversation repair strategies when a word or phrase is unclear, asking relevant follow-up questions to keep the dialogue flowing, and actively expanding on your own ideas without conversational dead ends.',
  communicativeGoals: [
    'Execute conversational repair and clarification smoothly in A2 English',
    'Use repair chunks: "Sorry, I didn’t catch that...", "Could you explain what you mean by...?", "What I mean is..."',
    'Ask open follow-up questions to maintain conversational momentum: "That sounds fascinating! How did you get started with that?"',
    'Demonstrate active listening cues: "Really?", "That makes total sense!", "I see what you mean."',
  ],
  canDoStatements: [
    'Can ask a speaker to repeat, rephrase, or explain an unfamiliar expression politely',
    'Can clarify one’s own meaning when misunderstood',
    'Can ask relevant follow-up questions and use active listening reactions to sustain a natural dialogue',
  ],
  characters: [
    {
      id: 'char_julian_colleague',
      name: 'Julian',
      role: 'International Project Colleague',
      avatar: '☕',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'clarify',
        ipa: '/ˈklærəfaɪ/',
        partOfSpeech: 'verb',
        meaning: 'To make an idea, statement, or situation clear and easily understood',
        exampleSentence: 'Could you please clarify what you mean by that technical term?',
        translations: { hi: 'स्पष्ट करना (क्लैरिफाइ)' },
      },
      {
        word: 'rephrase',
        ipa: '/ˌriːˈfreɪz/',
        partOfSpeech: 'verb',
        meaning: 'To express an idea or sentence in an alternative, simpler way',
        exampleSentence: 'Let me rephrase my point so it is easier to follow.',
        translations: { hi: 'अन्य शब्दों में कहना / सरल रूप में व्यक्त करना (रीफ्रेज़)' },
      },
      {
        word: 'momentum',
        ipa: '/məˈmentəm/',
        partOfSpeech: 'noun',
        meaning: 'The impetus and flow that keeps an activity or conversation developing smoothly',
        exampleSentence: 'Asking open follow-up questions keeps conversational momentum going.',
        translations: { hi: 'प्रवाह / गति (मोमेंटम)' },
      },
      {
        word: 'unfamiliar',
        ipa: '/ˌʌnfəˈmɪliə/',
        partOfSpeech: 'adjective',
        meaning: 'Not known, recognized, or previously experienced',
        exampleSentence: 'If a word is unfamiliar, it is completely fine to ask for its meaning.',
        translations: { hi: 'अपरिचित / नया (अनफ़मिलियर)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Sorry, I didn’t quite catch that last part.',
        functionCategory: 'Polite request to repeat acoustic audio',
        exampleSentence: 'Sorry, I didn’t quite catch that last part because of background noise.',
      },
      {
        phrase: 'Could you explain what you mean by...?',
        functionCategory: 'Requesting conceptual clarification',
        exampleSentence: 'Could you explain what you mean by "blended learning"?',
      },
      {
        phrase: 'What I mean is that...',
        functionCategory: 'Repairing and rephrasing one’s own sentence',
        exampleSentence: 'What I mean is that we can combine online videos with live classroom practice.',
      },
      {
        phrase: 'That sounds really interesting! Tell me more about...',
        functionCategory: 'Keeping conversation going and deepening interest',
        exampleSentence: 'That sounds really interesting! Tell me more about your experience in Madrid.',
      },
    ],
    grammar: {
      title: 'Conversational Repair & Follow-up Question Mechanics',
      conceptExplanation:
        '1. Acoustic repair: "Sorry, I didn’t catch that. Could you say it again?"\n2. Meaning repair: "Do you mean [Concept] or [Concept]?"\n3. Self-repair: "What I meant to say was..." / "Let me rephrase that..."\n4. Follow-up extensions: "That makes sense! How did you...?" / "Why did you choose that?"',
      patternFormula: '[Acoustic / Meaning Clarification Request] → [Partner Explanation] → [Active Reaction] + [Follow-up Question]',
      contrastExamples: [
        {
          incorrect: 'What you say? I not understand.',
          correct: 'Sorry, I didn’t catch that. Could you say it again a little slower?',
          explanation: 'Use polite repair phrases instead of abrupt blunt questions.',
        },
        {
          incorrect: 'I mean is that we go.',
          correct: 'What I mean is that we should start earlier.',
          explanation: 'Formula: "What I mean is that + [Clause]".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Julian',
        text: 'Hey! I recently started doing a lot of "asynchronous remote sprints" for our team project.',
        translation: 'अरे! मैंने हाल ही में हमारे प्रोजेक्ट के लिए बहुत सारे "अतुल्यकालिक रिमोट स्प्रिंट्स" करना शुरू किया है।',
      },
      {
        speaker: 'Learner',
        text: 'Sorry Julian, I didn’t quite catch that phrase. Could you explain what you mean by "asynchronous sprints"?',
        translation: 'माफ़ करना जूलियन, मैं वह वाक्यांश ठीक से समझ नहीं पाया। क्या आप समझा सकते हैं कि "एसिंक्रोनस स्प्रिंट्स" से आपका क्या तात्पर्य है?',
      },
      {
        speaker: 'Julian',
        text: 'Of course! It means teammates work on tasks at their own time without needing to be on a live call simultaneously.',
        translation: 'बिल्कुल! इसका मतलब है कि टीम के साथी एक साथ लाइव कॉल पर आए बिना अपने समय पर कार्यों पर काम करते हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_262_1',
      type: 'fill_blank',
      prompt: 'Complete: "Sorry, I didn’t quite ______ (catch / caught / catching) that last sentence."',
      options: [
        { id: 'opt_1', text: 'catch', isCorrect: true },
        { id: 'opt_2', text: 'caught', isCorrect: false },
        { id: 'opt_3', text: 'catching', isCorrect: false },
      ],
      correctAnswer: 'catch',
      explanation: 'Auxiliary "didn’t" is followed by base form "catch".',
    },
    {
      id: 'cp_262_2',
      type: 'multiple_choice',
      prompt: 'Which sentence best repairs a misunderstanding and clarifies your own intended meaning?',
      options: [
        { id: 'opt_1', text: 'What I mean is that we can test the new software on Friday morning.', isCorrect: true },
        { id: 'opt_2', text: 'You misunderstand me because I speak good.', isCorrect: false },
        { id: 'opt_3', text: 'I mean is Friday testing software now.', isCorrect: false },
      ],
      correctAnswer: 'What I mean is that we can test the new software on Friday morning.',
      explanation: 'Standard self-repair formula: "What I mean is that + [Clause]".',
    },
    {
      id: 'cp_262_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [That sounds really interesting! / How did you learn / to manage your project schedule?]',
      correctAnswer: 'That sounds really interesting! How did you learn to manage your project schedule?',
      explanation: 'Active reaction + open follow-up question.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_262_1',
      prompt: 'Construct a sentence asking Julian to explain what he means by that unfamiliar term.',
      scenarioContext: 'Clarifying an unfamiliar expression during coffee break.',
      targetStructure: 'Could you please explain what you mean by that term?',
      wordBank: ['Could you please explain', 'what you mean by', 'that term?', 'mean of that', 'explained to you'],
      acceptableSolutions: [
        'Could you please explain what you mean by that term?',
        'Could you explain what you mean by that phrase?',
      ],
      explanation: 'Polite modal request + embedded question clause "what you mean by...".',
    },
    {
      id: 'sc_262_2',
      prompt: 'Construct a sentence reacting with interest and asking Julian how he found his new hobby.',
      scenarioContext: 'Keeping the conversation moving forward.',
      targetStructure: 'That sounds wonderful! How did you discover that hobby?',
      wordBank: ['That sounds wonderful!', 'How did you', 'discover that hobby?', 'sounded wonder', 'discovered you hobby'],
      acceptableSolutions: [
        'That sounds wonderful! How did you discover that hobby?',
        'That sounds great! How did you discover that hobby?',
      ],
      explanation: 'Active listening reaction + past simple open question.',
    },
  ],
  turns: [
    {
      id: 'turn_262_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey there! Grab a seat. I was just telling the team that our upcoming community workshop needs to adopt a "hybrid micro-engagement format" so we do not overburden the attendees. What do you think?',
      partnerAudioText:
        'Hey there! Grab a seat. I was just telling the team that our upcoming community workshop needs to adopt a "hybrid micro-engagement format" so we do not overburden the attendees. What do you think?',
      partnerQuestionHindi:
        'अरे! बैठिए। मैं अभी टीम को बता रहा था कि हमारी आगामी सामुदायिक कार्यशाला को "हाइब्रिड माइक्रो-एंगेजमेंट फॉर्मेट" अपनाना चाहिए ताकि हम उपस्थित लोगों पर अधिक बोझ न डालें। आप क्या सोचते हैं?',
      expectedFunction: 'Using repair and clarification: politely asking Julian to clarify the unfamiliar phrase "hybrid micro-engagement"',
      contextGoal: 'Greet Julian, state that you didn’t catch that phrase or ask what he means by "hybrid micro-engagement format"',
      targetVocabulary: ['Hi Julian', 'Sorry I didn’t quite catch that', 'Could you explain what you mean by', 'hybrid micro-engagement', 'in simpler terms'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Prompt',
          text: 'Hi Julian! Sorry, I didn’t quite catch that phrase. Could you explain what you mean by a "hybrid micro-engagement format" in simpler terms?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Spontaneous Response',
          text: 'Hey Julian! That sounds intriguing, but could you clarify what you mean by that? Are you talking about short online tasks combined with brief in-person meetings?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_julian',
          patterns: ['hi', 'hey', 'julian', 'good morning', 'hello'],
          required: true,
        },
        {
          name: 'repair_and_clarification',
          patterns: ['catch', 'mean', 'explain', 'clarify', 'hybrid', 'micro', 'phrase', 'term', 'simpler', 'what do you mean'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_262_1_what_you_mean_by',
          pattern: /what you mean with that/i,
          errorType: 'grammar',
          message: 'Say "What do you mean by that?" (preposition "by").',
          correctionPattern: 'Could you explain what you mean by that phrase?',
        },
      ],
      remediationPractice: {
        id: 'rem_262_1',
        type: 'fill_blank',
        prompt: 'Fill in: "What do you mean ______ (by / with) that term?"',
        options: [
          { id: 'r1', text: 'by', isCorrect: true },
          { id: 'r2', text: 'with', isCorrect: false },
        ],
        correctAnswer: 'by',
        explanation: 'The standard collocation is "mean by [noun]".',
      },
    },
    {
      id: 'turn_262_2',
      turnIndex: 2,
      partnerPrompt:
        'Exactly! I mean instead of a six-hour continuous lecture, we do twenty-minute interactive modules online followed by a short discussion in person. Does that make more sense?',
      partnerAudioText:
        'Exactly! I mean instead of a six-hour continuous lecture, we do twenty-minute interactive modules online followed by a short discussion in person. Does that make more sense?',
      partnerQuestionHindi:
        'बिल्कुल! मेरा मतलब है कि छह घंटे के निरंतर व्याख्यान के बजाय, हम ऑनलाइन बीस मिनट के इंटरैक्टिव मॉड्यूल करते हैं और उसके बाद व्यक्तिगत रूप से एक छोटी चर्चा करते हैं। क्या अब यह अधिक समझ में आता है?',
      expectedFunction: 'Reacting positively ("That makes total sense!"), sharing your own insight, and asking a follow-up question',
      contextGoal: 'Affirm understanding, express why you like the idea (keeps participants engaged), and ask how attendees will submit their feedback',
      targetVocabulary: ['That makes total sense', 'interactive modules', 'keeps participants focused', 'much more engaging', 'How will we collect feedback', 'What do you think Julian'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Prompt',
          text: 'Ah, that makes total sense now! Breaking a long workshop into twenty-minute interactive sessions is much more engaging and prevents fatigue. How are we planning to collect participant feedback between sessions?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Spontaneous Response',
          text: 'That sounds like a brilliant approach! It gives people time to absorb the material. How will we organize the group discussions afterwards, Julian?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'active_reaction',
          patterns: ['makes sense', 'sounds great', 'brilliant', 'understand', 'clear now', 'good idea', 'engaging'],
          required: true,
        },
        {
          name: 'insight_and_followup_question',
          patterns: ['feedback', 'sessions', 'fatigue', 'how will we', 'how do you plan', 'discussions', 'organize', 'julian', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_262_2_that_make_sense_verb',
          pattern: /that make sense\b/i,
          errorType: 'grammar',
          message: 'Third-person singular: "That makes sense" (with "s").',
          correctionPattern: 'That makes total sense now!',
        },
      ],
      remediationPractice: {
        id: 'rem_262_2',
        type: 'multiple_choice',
        prompt: 'Which reaction phrase is grammatically correct?',
        options: [
          { id: 'r1', text: 'That makes total sense, and I really like the idea!', isCorrect: true },
          { id: 'r2', text: 'That make total sense and I am like idea.', isCorrect: false },
        ],
        correctAnswer: 'That makes total sense, and I really like the idea!',
        explanation: '"That makes sense" takes singular verb agreement.',
      },
    },
    {
      id: 'turn_262_3',
      turnIndex: 3,
      partnerPrompt:
        'We can use a quick mobile polling app right after each module! By the way, how is your own presentation for next week coming along? Are you feeling ready?',
      partnerAudioText:
        'We can use a quick mobile polling app right after each module! By the way, how is your own presentation for next week coming along? Are you feeling ready?',
      partnerQuestionHindi:
        'हम प्रत्येक मॉड्यूल के ठीक बाद एक त्वरित मोबाइल पोलिंग ऐप का उपयोग कर सकते हैं! वैसे, अगले सप्ताह के लिए आपकी अपनी प्रस्तुति कैसी चल रही है? क्या आप तैयार महसूस कर रहे हैं?',
      expectedFunction: 'Responding to Julian’s question, clarifying your own preparation status, and asking Julian for practice feedback',
      contextGoal: 'Explain that your slides are almost finished, you are practicing your timing, and ask Julian if he would be free for a 10-minute dry run',
      targetVocabulary: ['My slides are almost ready', 'I am practicing the timing', 'What I mean is that', 'Would you have ten minutes', 'to do a quick practice dry run', 'thanks Julian'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Prompt',
          text: 'Thanks for asking! My slides are almost finished, and I have outlined my key talking points. What I need now is to practice my timing. Would you have ten minutes tomorrow afternoon to listen to a quick dry run and give me your feedback?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Spontaneous Response',
          text: 'It is going very well! I finished the draft yesterday. Could we do a quick ten-minute rehearsal together over coffee tomorrow? I would love your feedback.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'preparation_status',
          patterns: ['slides', 'finished', 'draft', 'ready', 'practicing', 'timing', 'going well', 'prepared'],
          required: true,
        },
        {
          name: 'invitation_and_closing',
          patterns: ['dry run', 'rehearsal', 'feedback', 'ten minutes', 'tomorrow', 'practice', 'thanks', 'julian', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_262_3_would_you_have_to',
          pattern: /would you have ten minutes for listen/i,
          errorType: 'grammar',
          message: 'Say "to listen" (infinitive) or "for listening".',
          correctionPattern: 'Would you have ten minutes to listen to my practice run?',
        },
      ],
      remediationPractice: {
        id: 'rem_262_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [Would you have ten minutes tomorrow / to listen to my practice run / and give feedback?]',
        correctAnswer: 'Would you have ten minutes tomorrow to listen to my practice run and give feedback?',
        explanation: 'Polite modal invitation + purpose infinitive phrase.',
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
