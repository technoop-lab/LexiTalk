import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_264: ConversationDefinition = {
  id: 'conv_a2_264',
  title: 'Connected Listening & Responding Naturally',
  cefr: 'A2',
  unitId: 'unit_a2_18',
  lessonLinks: ['lesson_a2_18_264'],
  estimatedMinutes: 5,
  scenario:
    'You are in a community radio discussion with podcast producer Sarah. You listen to short spoken reports about a new city rooftop community garden project, confirm your understanding of connected speech details, react naturally with conversational discourse markers, and share your personal thoughts.',
  communicativeGoals: [
    'Demonstrate comprehension of natural, connected spoken English in A2 conversations',
    'Use natural reaction markers: "Really?", "That makes total sense!", "What caught my attention was...", "I was surprised to hear that..."',
    'Summarize key spoken details accurately: "They mentioned that volunteers plant vegetables every weekend..."',
    'Formulate open questions about community initiatives: "How can neighborhood residents participate?"',
  ],
  canDoStatements: [
    'Can identify the main points and key facts from connected spoken audio reports',
    'Can react spontaneously with appropriate conversational listening tokens',
    'Can summarize heard facts and express a personal reaction',
  ],
  characters: [
    {
      id: 'char_sarah_podcaster',
      name: 'Sarah',
      role: 'Community Radio Podcast Host',
      avatar: '🎧',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'initiative',
        ipa: '/ɪˈnɪʃətɪv/',
        partOfSpeech: 'noun',
        meaning: 'An act or strategy intended to resolve a problem or improve a situation',
        exampleSentence: 'The rooftop garden is an inspiring neighborhood green initiative.',
        translations: { hi: 'पहल / नई योजना (इनिशिएटिव)' },
      },
      {
        word: 'volunteer',
        ipa: '/ˌvɒlənˈtɪə/',
        partOfSpeech: 'noun / verb',
        meaning: 'A person who freely offers to take part in an enterprise or undertake a task',
        exampleSentence: 'Over fifty local volunteers gathered on Saturday morning.',
        translations: { hi: 'स्वयंसेवक (वॉलंटियर)' },
      },
      {
        word: 'harvest',
        ipa: '/ˈhɑːvɪst/',
        partOfSpeech: 'noun / verb',
        meaning: 'The process or period of gathering in crops',
        exampleSentence: 'They harvest fresh tomatoes and herbs every month.',
        translations: { hi: 'फसल की कटाई / उपज (हार्वेस्ट)' },
      },
      {
        word: 'sustainable',
        ipa: '/səˈsteɪnəbl/',
        partOfSpeech: 'adjective',
        meaning: 'Able to be maintained at a certain rate or level without depleting natural resources',
        exampleSentence: 'Growing local food on rooftops creates a sustainable city lifestyle.',
        translations: { hi: 'टिकाऊ / पर्यावरण अनुकूल (सस्टेनेबल)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'What caught my attention in the report was...',
        functionCategory: 'Highlighting a specific heard detail',
        exampleSentence: 'What caught my attention in the report was that the garden produces 200 kilos of fresh food.',
      },
      {
        phrase: 'I was really surprised to hear that...',
        functionCategory: 'Expressing spontaneous reaction to a heard fact',
        exampleSentence: 'I was really surprised to hear that school children manage the beehives.',
      },
      {
        phrase: 'That makes total sense because...',
        functionCategory: 'Affirming logical understanding',
        exampleSentence: 'That makes total sense because fresh vegetables reduce grocery expenses.',
      },
      {
        phrase: 'How can local residents get involved?',
        functionCategory: 'Asking a practical community follow-up question',
        exampleSentence: 'How can local residents sign up to volunteer on weekends?',
      },
    ],
    grammar: {
      title: 'Connected Listening Discourse Markers & Reported Gist Sentences',
      conceptExplanation:
        '1. Highlighting heard details: "What stood out / caught my attention was + [Noun / That-clause]"\n2. Emotional reaction markers: "I was surprised to hear that...", "That sounds amazing!"\n3. Summarizing heard speech: "The report mentioned that [Subject + Past Verb]"\n4. Interactive question tag / inquiry: "Does the city provide grants for projects like this?"',
      patternFormula: 'What caught my attention was that [Reported Detail]. I was surprised that [Reaction Detail]. How can [Community Action]?',
      contrastExamples: [
        {
          incorrect: 'I hear report they make tomato.',
          correct: 'I heard in the report that they harvest organic tomatoes every month.',
          explanation: 'Use Past Simple "heard" and standard that-clause syntax for reporting spoken information.',
        },
        {
          incorrect: 'That is make sense to me.',
          correct: 'That makes total sense to me!',
          explanation: 'Present simple with singular agreement: "That makes sense".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Sarah',
        text: 'Welcome to City Voices! We just broadcasted a story on the new green rooftop garden on Elm Street. What was your initial reaction to the broadcast?',
        translation: 'सिटी वॉयस में आपका स्वागत है! हमने अभी एल्म स्ट्रीट पर नए ग्रीन रूफटॉप गार्डन पर एक कहानी प्रसारित की है। प्रसारण पर आपकी प्रारंभिक प्रतिक्रिया क्या थी?',
      },
      {
        speaker: 'Learner',
        text: 'Hello Sarah! What caught my attention was that over fifty neighbors volunteer every weekend. It sounds like a wonderful way to bring the community together.',
        translation: 'नमस्ते सारा! मेरा ध्यान इस बात ने आकर्षित किया कि पचास से अधिक पड़ोसी हर सप्ताहांत स्वयंसेवा करते हैं। यह समुदाय को एक साथ लाने का एक शानदार तरीका लगता है।',
      },
      {
        speaker: 'Sarah',
        text: 'Indeed! They also donate 30% of their harvest to a local food pantry. What do you think about that aspect?',
        translation: 'वास्तव में! वे अपनी फसल का 30% स्थानीय खाद्य बैंक को भी दान करते हैं। आप उस पहलू के बारे में क्या सोचते हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_264_1',
      type: 'fill_blank',
      prompt: 'Complete: "What caught my ______ (attention / attend / attentive) was the high number of volunteers."',
      options: [
        { id: 'opt_1', text: 'attention', isCorrect: true },
        { id: 'opt_2', text: 'attend', isCorrect: false },
        { id: 'opt_3', text: 'attentive', isCorrect: false },
      ],
      correctAnswer: 'attention',
      explanation: 'Noun "attention" is used in the idiom "caught my attention".',
    },
    {
      id: 'cp_264_2',
      type: 'multiple_choice',
      prompt: 'Which response demonstrates natural listening engagement and accurate detail summary?',
      options: [
        { id: 'opt_1', text: 'That makes total sense! I was surprised to hear that they donate thirty percent of the harvest to families in need.', isCorrect: true },
        { id: 'opt_2', text: 'I am listen radio and food is good yesterday.', isCorrect: false },
        { id: 'opt_3', text: 'Radio say 30 percent vegetable give away.', isCorrect: false },
      ],
      correctAnswer: 'That makes total sense! I was surprised to hear that they donate thirty percent of the harvest to families in need.',
      explanation: 'Natural conversational discourse marker + reported fact.',
    },
    {
      id: 'cp_264_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [I was really surprised to hear that / local school children / built the rainwater tanks]',
      correctAnswer: 'I was really surprised to hear that local school children built the rainwater tanks',
      explanation: 'Reaction clause + subject noun phrase + past verb phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_264_1',
      prompt: 'Construct a sentence stating that what caught my attention was that volunteers harvest fresh vegetables every month.',
      scenarioContext: 'Reacting to the radio broadcast.',
      targetStructure: 'What caught my attention was that volunteers harvest fresh vegetables every month.',
      wordBank: ['What caught my attention', 'was that volunteers', 'harvest fresh vegetables', 'every month.', 'caught attention of', 'volunteering fresh'],
      acceptableSolutions: [
        'What caught my attention was that volunteers harvest fresh vegetables every month.',
        'What caught my eye was that volunteers harvest fresh vegetables every month.',
      ],
      explanation: 'Pseudo-cleft clause + that-complement clause.',
    },
    {
      id: 'sc_264_2',
      prompt: 'Construct a sentence stating that this project brings neighbors together and promotes sustainable living.',
      scenarioContext: 'Sharing your personal view on the initiative.',
      targetStructure: 'This project brings neighbors together and promotes sustainable living.',
      wordBank: ['This project brings', 'neighbors together and', 'promotes sustainable', 'living.', 'brought neighbor', 'sustainable of living'],
      acceptableSolutions: [
        'This project brings neighbors together and promotes sustainable living.',
        'The project brings neighbors together and promotes sustainable living.',
      ],
      explanation: 'Subject + compound third-person singular predicate.',
    },
  ],
  turns: [
    {
      id: 'turn_264_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! Welcome to City Voices Live. We just aired a short audio report about the green rooftop garden in our downtown district. What key detail caught your attention from the broadcast?',
      partnerAudioText:
        'Hi there! Welcome to City Voices Live. We just aired a short audio report about the green rooftop garden in our downtown district. What key detail caught your attention from the broadcast?',
      partnerQuestionHindi:
        'नमस्ते! सिटी वॉयस लाइव में आपका स्वागत है। हमने अभी हमारे डाउनटाउन जिले में ग्रीन रूफटॉप गार्डन के बारे में एक छोटी ऑडियो रिपोर्ट प्रसारित की है। प्रसारण से किस मुख्य विवरण ने आपका ध्यान आकर्षित किया?',
      expectedFunction: 'Reacting with natural discourse markers and stating a specific detail heard (50 volunteers, rooftop vegetables, solar water pumps)',
      contextGoal: 'Greet Sarah, state that what caught your attention was that over 50 local volunteers turned an empty concrete roof into a green garden',
      targetVocabulary: ['Hello Sarah', 'What caught my attention was', 'over fifty volunteers', 'transformed an empty concrete rooftop', 'fresh organic vegetables', 'community spirit'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Prompt',
          text: 'Hello Sarah! What caught my attention in the report was that over fifty neighborhood volunteers worked together to transform an empty concrete rooftop into a flourishing organic garden. It shows how strong community spirit can be!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Spontaneous Response',
          text: 'Hi Sarah. I was amazed to hear that local residents grow fresh herbs and vegetables right in the middle of downtown. It is an inspiring initiative.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_sarah',
          patterns: ['hello', 'hi', 'sarah', 'good morning', 'good afternoon'],
          required: true,
        },
        {
          name: 'heard_detail',
          patterns: ['caught my attention', 'surprised', 'amazed', 'volunteers', 'rooftop', 'garden', 'vegetables', 'herbs', 'organic', 'concrete', 'fifty', '50'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_264_1_what_caught_my_eye_clause',
          pattern: /what catch my attention/i,
          errorType: 'grammar',
          message: 'Use past tense: "What caught my attention was that..."',
          correctionPattern: 'What caught my attention was the dedication of the volunteers.',
        },
      ],
      remediationPractice: {
        id: 'rem_264_1',
        type: 'fill_blank',
        prompt: 'Fill in: "What ______ (caught / catch) my attention was the community support."',
        options: [
          { id: 'r1', text: 'caught', isCorrect: true },
          { id: 'r2', text: 'catch', isCorrect: false },
        ],
        correctAnswer: 'caught',
        explanation: 'Past tense "caught" is required when referring to a past broadcast.',
      },
    },
    {
      id: 'turn_264_2',
      turnIndex: 2,
      partnerPrompt:
        'Yes, and did you hear the speaker mention that they donate thirty percent of every monthly harvest to local low-income families and elderly residents? How does that impact our city?',
      partnerAudioText:
        'Yes, and did you hear the speaker mention that they donate thirty percent of every monthly harvest to local low-income families and elderly residents? How does that impact our city?',
      partnerQuestionHindi:
        'हाँ, और क्या आपने वक्ता को यह उल्लेख करते हुए सुना कि वे प्रत्येक मासिक फसल का तीस प्रतिशत स्थानीय कम आय वाले परिवारों और बुजुर्ग निवासियों को दान करते हैं? यह हमारे शहर को कैसे प्रभावित करता है?',
      expectedFunction: 'Reacting with affirmation ("That makes total sense!"), evaluating the social benefit, and highlighting healthy food access',
      contextGoal: 'Express that donating 30% provides nutritious fresh produce to families in need and strengthens neighborhood solidarity',
      targetVocabulary: ['That makes total sense', 'I was really pleased to hear that', 'donating thirty percent of the harvest', 'nutritious fresh food', 'low-income families', 'reduces food waste'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Prompt',
          text: 'That makes total sense, and I was so pleased to hear that detail! Donating fresh produce directly to families in need ensures everyone has access to healthy food, while reducing hunger and building deep trust in the neighborhood.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Spontaneous Response',
          text: 'That is truly wonderful! It provides fresh, nutritious meals to elderly neighbors who might not be able to shop easily. It creates real social impact.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'listening_reaction',
          patterns: ['makes total sense', 'pleased to hear', 'wonderful', 'amazing', 'great', 'inspiring', 'impressed'],
          required: true,
        },
        {
          name: 'social_impact',
          patterns: ['donate', '30%', 'thirty percent', 'families', 'elderly', 'nutritious', 'healthy food', 'hunger', 'neighborhood', 'trust', 'impact'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_264_2_donate_to_infinitive',
          pattern: /donate for low-income/i,
          errorType: 'grammar',
          message: 'Say "donate to low-income families" (preposition "to").',
          correctionPattern: 'They donate fresh vegetables to local families.',
        },
      ],
      remediationPractice: {
        id: 'rem_264_2',
        type: 'multiple_choice',
        prompt: 'Which sentence connects listening comprehension with social evaluation correctly?',
        options: [
          { id: 'r1', text: 'That makes total sense because fresh food improves community health.', isCorrect: true },
          { id: 'r2', text: 'That is make sense because food donate is very good.', isCorrect: false },
        ],
        correctAnswer: 'That makes total sense because fresh food improves community health.',
        explanation: 'Correct verb agreement and causal reasoning.',
      },
    },
    {
      id: 'turn_264_3',
      turnIndex: 3,
      partnerPrompt:
        'We hope to see more rooftop projects like this across every district. How could more listeners get involved, and do you have a closing question for our radio audience?',
      partnerAudioText:
        'We hope to see more rooftop projects like this across every district. How could more listeners get involved, and do you have a closing question for our radio audience?',
      partnerQuestionHindi:
        'हम हर जिले में इस तरह के और रूफटॉप प्रोजेक्ट्स देखने की उम्मीद करते हैं। अधिक श्रोता कैसे शामिल हो सकते हैं, और क्या हमारे रेडियो दर्शकों के लिए आपका कोई समापन प्रश्न है?',
      expectedFunction: 'Suggesting practical participation steps (signing up online, weekend workshops) and posing an open question to the audience',
      contextGoal: 'Suggest signing up on the city website to volunteer on weekends, and ask "Would you support a green rooftop garden in your own apartment building?"',
      targetVocabulary: ['Listeners can sign up online', 'attend weekend workshops', 'bring seeds and gardening tools', 'Would you support a garden in your building', 'Sarah', 'thank you for having me'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Prompt',
          text: 'Listeners can easily get involved by signing up on the city community portal to volunteer for weekend planting sessions. My closing question for the audience is: Would you like to start a shared green garden on your own building’s rooftop? Thank you for having me on the show, Sarah!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Spontaneous Response',
          text: 'People can join the weekend workshops or donate gardening tools. To all our listeners: what green project would you like to see in your neighborhood? Thanks Sarah!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'get_involved_suggestions',
          patterns: ['sign up', 'online', 'website', 'volunteer', 'weekend', 'workshops', 'plant', 'tools', 'involved'],
          required: true,
        },
        {
          name: 'audience_question_and_close',
          patterns: ['question', 'audience', 'listeners', 'rooftop', 'building', 'neighborhood', 'thank you', 'sarah', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_264_3_thank_you_for_have_me',
          pattern: /thank you for have me/i,
          errorType: 'grammar',
          message: 'Use gerund after preposition: "Thank you for having me on the show".',
          correctionPattern: 'Thank you for having me on the show, Sarah!',
        },
      ],
      remediationPractice: {
        id: 'rem_264_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [Listeners can register online / to join weekend gardening sessions / and help their community]',
        correctAnswer: 'Listeners can register online to join weekend gardening sessions and help their community',
        explanation: 'Modal subject + infinitive purpose + compound predicate.',
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
