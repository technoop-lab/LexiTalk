import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_223: ConversationDefinition = {
  id: 'conv_a2_223',
  title: 'Short Presentations & Explaining Simple Information',
  cefr: 'A2',
  unitId: 'unit_a2_15',
  lessonLinks: ['lesson_a2_15_223'],
  estimatedMinutes: 5,
  scenario:
    'You are in the campus seminar room practicing a 3-minute oral presentation in front of your classmate Emily before delivering it to the full class. You use presentation signposting phrases ("Today I am going to talk about...", "Moving on to my next point...", "To conclude..."), explain key information clearly, and answer Emily’s audience questions.',
  communicativeGoals: [
    'Open a presentation with a clear introduction and roadmap ("Today I would like to talk about effective study habits")',
    'Use transition signposts to guide the listener ("Moving on to my next point", "As you can see from this slide")',
    'Summarize main ideas and close with a structured conclusion ("To conclude", "In summary", "Thank you for listening")',
    'Invite and respond to audience questions politely in A2 English',
  ],
  canDoStatements: [
    'Can give a structured short presentation on a familiar educational topic',
    'Can use presentation signposting language to transition between points',
    'Can answer simple follow-up questions from listeners',
  ],
  characters: [
    {
      id: 'char_emily_peer',
      name: 'Emily',
      role: 'Classmate & Presentation Partner',
      avatar: '🎤',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'signposting',
        ipa: '/ˈsaɪnpəʊstɪŋ/',
        partOfSpeech: 'noun',
        meaning: 'Words and phrases that indicate the structure and direction of a speech or presentation',
        exampleSentence: 'Clear signposting helps your audience follow your main arguments.',
        translations: { hi: 'प्रस्तुति दिशा-संकेत सूत्र (साइनपोस्टिंग)' },
      },
      {
        word: 'conclude',
        ipa: '/kənˈkluːd/',
        partOfSpeech: 'verb',
        meaning: 'To bring something to an end; arrive at a final opinion or summary',
        exampleSentence: 'To conclude, daily consistency is the key to language fluency.',
        translations: { hi: 'निष्कर्ष निकालना / समाप्त करना (कन्क्लूड)' },
      },
      {
        word: 'overview',
        ipa: '/ˈəʊvəvjuː/',
        partOfSpeech: 'noun',
        meaning: 'A general review or summary of a subject',
        exampleSentence: 'First, I will give you a brief overview of the project.',
        translations: { hi: 'सिंहावलोकन / संक्षिप्त विवरण (ओवरव्यू)' },
      },
      {
        word: 'audience',
        ipa: '/ˈɔːdiəns/',
        partOfSpeech: 'noun',
        meaning: 'The assembled spectators or listeners at a public event or talk',
        exampleSentence: 'Always make eye contact with your audience while presenting.',
        translations: { hi: 'श्रोता / दर्शक (ऑडियंस)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Today, I would like to talk about the benefits of active study habits.',
        functionCategory: 'Presentation opening formula',
        exampleSentence: 'Today, I am going to present our campus survey results.',
      },
      {
        phrase: 'Moving on to my next point, let us look at time management techniques.',
        functionCategory: 'Transition signpost',
        exampleSentence: 'Moving on to the second part of my talk...',
      },
      {
        phrase: 'To conclude, combining active recall with regular breaks leads to top results.',
        functionCategory: 'Presentation conclusion formula',
        exampleSentence: 'In conclusion, small daily steps create huge progress.',
      },
      {
        phrase: 'Thank you for your attention. I would be happy to answer any questions.',
        functionCategory: 'Closing and inviting questions',
        exampleSentence: 'Thank you for listening. Does anyone have any questions?',
      },
    ],
    grammar: {
      title: 'Presentation Signposting Formulas & Discourse Markers',
      conceptExplanation:
        '1. Introductions:\n   - "Today I would like to talk about [Topic]."\n   - "First, I will discuss X, and then I will focus on Y."\n2. Transitions / Moving Points:\n   - "Moving on to my next point, ..."\n   - "Now let us turn to ..."\n   - "As you can see on the slide, ..."\n3. Conclusions & Q&A:\n   - "To conclude, [Summary sentence]."\n   - "Thank you for listening. Are there any questions?"',
      patternFormula: '[Signpost: Today I would like to talk about...] -> [Moving on to...] -> [To conclude... / Thank you]',
      contrastExamples: [
        {
          incorrect: 'I talk about study today.',
          correct: 'Today, I would like to talk about effective study habits.',
          explanation: 'Use formal presentation opening formulas.',
        },
        {
          incorrect: 'Finish now. Bye.',
          correct: 'To conclude, thank you for your attention. I’d be happy to take any questions.',
          explanation: 'Professional concluding and question invite formulas.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Emily',
        text: 'I’m ready with my stopwatch! Whenever you’re ready, start your practice presentation.',
        translation: 'मैं अपने स्टॉपवॉच के साथ तैयार हूँ! जब भी आप तैयार हों, अपनी अभ्यास प्रस्तुति शुरू करें।',
      },
      {
        speaker: 'Learner',
        text: 'Good morning, everyone. Today I would like to talk about why active recall is the most effective study strategy.',
        translation: 'शुभ प्रभात, सभी को। आज मैं इस बारे में बात करना चाहूँगा कि सक्रिय स्मरण सबसे प्रभावी अध्ययन रणनीति क्यों है।',
      },
      {
        speaker: 'Emily',
        text: 'Great opening! What is your first main point?',
        translation: 'शानदार शुरुआत! आपका पहला मुख्य बिंदु क्या है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_223_1',
      type: 'fill_blank',
      prompt: 'Complete with the signposting chunk: "______ (Moving on to / Move on to) my next point, let us look at the survey results."',
      options: [
        { id: 'opt_1', text: 'Moving on to', isCorrect: true },
        { id: 'opt_2', text: 'Move on to', isCorrect: false },
      ],
      correctAnswer: 'Moving on to',
      explanation: 'Presentation transition participle phrase: "Moving on to...".',
    },
    {
      id: 'cp_223_2',
      type: 'multiple_choice',
      prompt: 'Which phrase is the most professional way to conclude a presentation?',
      options: [
        { id: 'opt_1', text: 'To conclude, thank you for your attention. I’d be happy to take questions.', isCorrect: true },
        { id: 'opt_2', text: 'I am finished now so you can ask.', isCorrect: false },
        { id: 'opt_3', text: 'That is all bye.', isCorrect: false },
      ],
      correctAnswer: 'To conclude, thank you for your attention. I’d be happy to take questions.',
      explanation: 'Polite, structured, and invites audience participation.',
    },
    {
      id: 'cp_223_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [today, / I would like to talk about / effective time management / for students]',
      correctAnswer: 'today, I would like to talk about effective time management for students',
      explanation: 'Time signpost + polite intention + topic phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_223_1',
      prompt: 'Construct a presentation opening introducing the topic of digital flashcards.',
      scenarioContext: 'Starting your practice presentation with Emily.',
      targetStructure: 'Good morning, everyone. Today I would like to talk about using digital flashcards for vocabulary learning.',
      wordBank: ['Good morning, everyone.', 'Today I would like to', 'talk about using', 'digital flashcards for', 'vocabulary learning.'],
      acceptableSolutions: [
        'Good morning, everyone. Today I would like to talk about using digital flashcards for vocabulary learning.',
        'Today I would like to talk about using digital flashcards for vocabulary learning.',
      ],
      explanation: 'Formal presentation opening formula.',
    },
    {
      id: 'sc_223_2',
      prompt: 'Construct a transition sentence moving to the second point about spaced repetition.',
      scenarioContext: 'Transitioning between presentation slides.',
      targetStructure: 'Moving on to my next point, let us examine how spaced repetition improves memory retention.',
      wordBank: ['Moving on to my next point,', 'let us examine how', 'spaced repetition improves', 'memory retention,', 'Emily.'],
      acceptableSolutions: [
        'Moving on to my next point, let us examine how spaced repetition improves memory retention.',
        'Moving on to my next point, let us look at spaced repetition.',
      ],
      explanation: 'Presentation transition formula.',
    },
  ],
  turns: [
    {
      id: 'turn_223_1',
      turnIndex: 1,
      partnerPrompt:
        'Alright, the room is quiet and the projector is ready! I have the timer set for three minutes. Take a deep breath and start your presentation introduction whenever you are ready.',
      partnerAudioText:
        'Alright, the room is quiet and the projector is ready! I have the timer set for three minutes. Take a deep breath and start your presentation introduction whenever you are ready.',
      partnerQuestionHindi:
        'ठीक है, कमरा शांत है और प्रोजेक्टर तैयार है! मैंने तीन मिनट का टाइमर सेट कर दिया है। एक गहरी सांस लें और जब भी आप तैयार हों, अपनी प्रस्तुति का परिचय शुरू करें।',
      expectedFunction: 'Delivering a formal presentation opening with greeting, topic statement, and agenda overview',
      contextGoal: 'Greet the audience, state your presentation topic (effective study methods), and give a 2-point overview (active recall and time management)',
      targetVocabulary: ['Good morning', 'Today I would like to talk about', 'effective study habits', 'First', 'Then', 'Emily'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Good morning, everyone! Today I would like to talk about effective study habits. First, I will explain active recall, and then I will discuss time management.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello everyone. In today’s presentation, I am going to share three proven learning techniques: spaced repetition, flashcards, and the Pomodoro method.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good morning. Today I’d like to present a practical roadmap for language learning. I’ll begin with daily active recall before moving to structured revision schedules.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'formal_greeting',
          patterns: ['good morning', 'hello everyone', 'good afternoon'],
          required: true,
        },
        {
          name: 'presentation_starter',
          patterns: ['today i would like to talk about', 'in today’s presentation', 'i am going to share', 'today i’d like to present'],
          required: true,
        },
        {
          name: 'topic_overview',
          patterns: ['study habits', 'learning techniques', 'active recall', 'time management', 'first', 'then', 'roadmap'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_223_1_no_signpost',
          pattern: /^i talk study now\.$/i,
          errorType: 'structure',
          message: 'Use formal opening: "Good morning everyone. Today I would like to talk about effective study habits."',
          correctionPattern: 'Good morning! Today I would like to talk about effective study habits.',
        },
      ],
      remediationPractice: {
        id: 'rem_223_1',
        type: 'fill_blank',
        prompt: 'Fill in: "Today I ______ (would like) to talk about study habits."',
        options: [
          { id: 'r1', text: 'would like', isCorrect: true },
          { id: 'r2', text: 'am want', isCorrect: false },
        ],
        correctAnswer: 'would like',
        explanation: 'Polite presentation phrase: "I would like to...".',
      },
    },
    {
      id: 'turn_223_2',
      turnIndex: 2,
      partnerPrompt:
        'That was a very confident and structured opening! Now, can you deliver the transition to your second point and explain the main benefit?',
      partnerAudioText:
        'That was a very confident and structured opening! Now, can you deliver the transition to your second point and explain the main benefit?',
      partnerQuestionHindi:
        'वह बहुत ही आत्मविश्वासी और संरचित शुरुआत थी! अब, क्या आप अपने दूसरे बिंदु पर बदलाव ला सकते हैं और मुख्य लाभ की व्याख्या कर सकते हैं?',
      expectedFunction: 'Using transition signpost "Moving on to my next point..." and explaining the second concept clearly',
      contextGoal: 'Use "Moving on to my next point..." to transition to the Pomodoro 25-minute timer technique and explain why it prevents burnout',
      targetVocabulary: ['Moving on to my next point', 'Pomodoro technique', 'twenty-five minutes', 'short break', 'prevents burnout', 'focus'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Moving on to my next point, let us look at the Pomodoro technique. Studying for twenty-five minutes followed by a five-minute break prevents burnout and maintains focus.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Now let’s turn to my second point: time management. Using timed study blocks ensures high concentration without mental exhaustion.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Moving on to my second key point, regular scheduled intervals are vital. The Pomodoro method optimizes attention span and eliminates procrastination.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'transition_signpost',
          patterns: ['moving on to my next point', 'now let’s turn to', 'moving on to my second', 'next point'],
          required: true,
        },
        {
          name: 'point_and_benefit',
          patterns: ['pomodoro', 'twenty-five minutes', 'break', 'focus', 'burnout', 'concentration', 'time management'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_223_2_abrupt',
          pattern: /^point two is pomodoro\.$/i,
          errorType: 'structure',
          message: 'Use signpost: "Moving on to my next point, let us look at the Pomodoro technique."',
          correctionPattern: 'Moving on to my next point, let’s look at the Pomodoro method.',
        },
      ],
      remediationPractice: {
        id: 'rem_223_2',
        type: 'multiple_choice',
        prompt: 'Which phrase is the most natural presentation transition?',
        options: [
          { id: 'r1', text: 'Moving on to my next point, let us look at the Pomodoro technique.', isCorrect: true },
          { id: 'r2', text: 'Next thing I speak is Pomodoro.', isCorrect: false },
        ],
        correctAnswer: 'Moving on to my next point, let us look at the Pomodoro technique.',
        explanation: 'Standard academic presentation signposting.',
      },
    },
    {
      id: 'turn_223_3',
      turnIndex: 3,
      partnerPrompt:
        'Excellent pacing! Now bring your presentation to a close with a structured conclusion, thank the audience, and invite questions.',
      partnerAudioText:
        'Excellent pacing! Now bring your presentation to a close with a structured conclusion, thank the audience, and invite questions.',
      partnerQuestionHindi:
        'उत्कृष्ट गति! अब एक संरचित निष्कर्ष के साथ अपनी प्रस्तुति को समाप्त करें, दर्शकों को धन्यवाद दें और प्रश्नों को आमंत्रित करें।',
      expectedFunction: 'Delivering a formal conclusion using "To conclude...", thanking the audience, and opening the floor to questions',
      contextGoal: 'Conclude by summarizing that combining active recall and short breaks yields success, thank everyone, and invite questions',
      targetVocabulary: ['To conclude', 'In summary', 'active recall', 'consistency', 'Thank you for your attention', 'questions'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'To conclude, combining active recall with regular Pomodoro breaks creates long-term success. Thank you for your attention. I’d be happy to answer any questions!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'In summary, consistent daily habits beat cramming every time. Thank you so much for listening. Does anyone have any questions?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'To wrap up, adopting evidence-based study methods saves time and boosts grades. Thank you very much for listening. I welcome any questions or comments!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'concluding_signpost',
          patterns: ['to conclude', 'in summary', 'to wrap up', 'in conclusion'],
          required: true,
        },
        {
          name: 'audience_thanks_and_qa',
          patterns: ['thank you for your attention', 'thank you so much for listening', 'questions', 'answer any questions', 'welcome any questions'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_223_3_no_qa_invite',
          pattern: /^to conclude thanks bye\.$/i,
          errorType: 'interaction',
          message: 'Invite questions: "To conclude, thank you for your attention. I’d be happy to answer any questions!"',
          correctionPattern: 'To conclude, thank you for listening. Are there any questions?',
        },
      ],
      remediationPractice: {
        id: 'rem_223_3',
        type: 'fill_blank',
        prompt: 'Fill in: "To ______, (conclude) thank you for your attention."',
        options: [
          { id: 'r1', text: 'conclude', isCorrect: true },
          { id: 'r2', text: 'concluding to', isCorrect: false },
        ],
        correctAnswer: 'conclude',
        explanation: 'Infinitive phrase: "To conclude,".',
      },
    },
    {
      id: 'turn_223_4',
      turnIndex: 4,
      partnerPrompt:
        'I have a question! You mentioned taking 5-minute breaks during study sessions. What do you recommend doing during those 5 minutes to rest your eyes?',
      partnerAudioText:
        'I have a question! You mentioned taking 5-minute breaks during study sessions. What do you recommend doing during those 5 minutes to rest your eyes?',
      partnerQuestionHindi:
        'मेरा एक प्रश्न है! आपने अध्ययन सत्रों के दौरान 5 मिनट का ब्रेक लेने का उल्लेख किया था। अपनी आँखों को आराम देने के लिए उन 5 मिनटों के दौरान आप क्या करने की सलाह देते हैं?',
      expectedFunction: 'Thanking the listener for the question and providing a clear, practical answer',
      contextGoal: 'Thank Emily for the question, recommend drinking water and looking out the window away from screens, and ask if that answers her question',
      targetVocabulary: ['That is a great question', 'Emily', 'look out the window', 'drink water', 'away from screens', 'Does that answer your question'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'That is a great question, Emily! I recommend standing up, drinking a glass of water, and looking out the window away from screens. Does that answer your question?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Thank you for asking, Emily. The best thing is to step away from all digital devices, stretch, and get some fresh air.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Thanks for that question, Emily! I always advise doing light stretches and resting your eyes on distant objects rather than checking your smartphone.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'question_acknowledgment',
          patterns: ['great question', 'thank you for asking', 'thanks for that question', 'emily'],
          required: true,
        },
        {
          name: 'break_activity_answer',
          patterns: ['drink', 'water', 'window', 'screens', 'stretch', 'fresh air', 'devices', 'eyes'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_223_4_no_thank_question',
          pattern: /^drink water\.$/i,
          errorType: 'interaction',
          message: 'Acknowledge the question first: "That is a great question, Emily! I recommend drinking water and stepping away from screens."',
          correctionPattern: 'That is a great question, Emily! I recommend resting your eyes and drinking water.',
        },
      ],
      remediationPractice: {
        id: 'rem_223_4',
        type: 'multiple_choice',
        prompt: 'Which response handles audience Q&A most professionally?',
        options: [
          { id: 'r1', text: 'That is a great question, Emily! I recommend stepping away from screens and drinking water.', isCorrect: true },
          { id: 'r2', text: 'Just drink water.', isCorrect: false },
        ],
        correctAnswer: 'That is a great question, Emily! I recommend stepping away from screens and drinking water.',
        explanation: 'Courteous acknowledgment followed by practical answer.',
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
