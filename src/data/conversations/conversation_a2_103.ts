import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_103: ConversationDefinition = {
  id: 'conv_a2_103',
  title: 'Future Predictions & Probability (will probably, might, may, I think...)',
  cefr: 'A2',
  unitId: 'unit_a2_7',
  lessonLinks: ['lesson_a2_7_103'],
  estimatedMinutes: 5,
  scenario:
    'You are attending a future-trends tech mixer in Newcastle, discussing artificial intelligence and sustainable tech with tech journalist Elena Vance. Exchange predictions about emerging green technology, evaluate probability using "will probably", "might", and "may", discuss weather forecasts for tomorrow’s outdoor exhibition, and express reasonable degree of certainty.',
  communicativeGoals: [
    'Make future predictions with varying degrees of certainty using "will definitely", "will probably", "might", and "may"',
    'Express personal predictions using "I think it will..." and "I don\'t think it will..."',
    'Discuss technological trends and probability of everyday adoption',
    'Ask Elena for her expert forecasts on electric vehicle infrastructure and battery breakthroughs',
  ],
  canDoStatements: [
    'Can make simple predictions about future events and weather using will, might, and may (CEFR A2)',
    'Can express different degrees of probability (certain, probable, possible)',
    'Can discuss future developments and trends in everyday conversations',
  ],
  characters: [
    {
      id: 'char_elena_vance',
      name: 'Elena Vance',
      role: 'Tech & Environmental Journalist',
      avatar: '🔮',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'prediction',
        ipa: '/prɪˈdɪkʃən/',
        partOfSpeech: 'noun',
        meaning: 'A statement about what you think will happen in the future',
        exampleSentence: 'My prediction is that renewable energy prices will continue to drop.',
        translations: { hi: 'भविष्यवाणी / पूर्वानुमान' },
      },
      {
        word: 'probably',
        ipa: '/ˈprɒbəbli/',
        partOfSpeech: 'adverb',
        meaning: 'Almost certainly; as far as one knows or can tell (high probability ~70-80%)',
        exampleSentence: 'It will probably rain tomorrow afternoon according to the radar.',
        translations: { hi: 'संभवतः / शायद' },
      },
      {
        word: 'might',
        ipa: '/maɪt/',
        partOfSpeech: 'modal verb',
        meaning: 'Expressing possibility or probability (~40-50% chance)',
        exampleSentence: 'We might see electric planes within the next decade.',
        translations: { hi: 'शायद हो सकता है' },
      },
      {
        word: 'breakthrough',
        ipa: '/ˈbreɪkθruː/',
        partOfSpeech: 'noun',
        meaning: 'A sudden, dramatic, and important discovery or development',
        exampleSentence: 'Solid-state batteries will be a massive technological breakthrough.',
        translations: { hi: 'बड़ी सफलता / क्रांतिकारी खोज' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I think it will probably...',
        functionCategory: 'Expressing High Probability Prediction',
        exampleSentence: 'I think solar power will probably become the cheapest energy source.',
      },
      {
        phrase: 'It might take several years before...',
        functionCategory: 'Expressing Possibility / Uncertainty',
        exampleSentence: 'It might take several years before quantum computers become common.',
      },
      {
        phrase: 'I don’t think that will happen anytime soon.',
        functionCategory: 'Negative Prediction',
        exampleSentence: 'I don’t think flying cars will happen anytime soon.',
      },
      {
        phrase: 'What do you predict will happen with...?',
        functionCategory: 'Inquiring About Predictions',
        exampleSentence: 'Elena, what do you predict will happen with battery technology?',
      },
    ],
    grammar: {
      title: 'Probability & Prediction Scales: Will vs. Will Probably vs. Might / May',
      conceptExplanation:
        '1. 100% Certainty: "Will / Won\'t + [base verb]" (e.g., "The sun will rise tomorrow").\n2. 70-80% Probability: "Will probably + [base verb]" / "Probably won\'t + [base verb]" (Note: "probably" comes AFTER "will", but BEFORE "won\'t"!).\n3. 40-50% Possibility: "Might / May + [base verb]" (e.g., "It might rain later today").\n4. Opinion framing: "I think it will..." / "I don\'t think it will..." (Never: *"I think it won\'t"*).',
      patternFormula: 'High: Subject + will probably + [Verb] | Low: Subject + probably won\'t + [Verb] | Possible: Subject + might + [Verb]',
      contrastExamples: [
        {
          incorrect: 'It won\'t probably rain.',
          correct: 'It probably won\'t rain. / It will probably rain.',
          explanation: '"Probably" comes before "won\'t" in negative probability sentences.',
        },
        {
          incorrect: 'I think robots will not replacing humans.',
          correct: 'I don\'t think robots will replace humans.',
          explanation: 'Transfer the negative to the main thinking verb: "I don\'t think... will".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Elena Vance',
        text: 'Hi Alex! Do you think renewable energy will completely replace fossil fuels in the next twenty years?',
        translation: 'नमस्ते एलेक्स! क्या आपको लगता है कि अगले बीस वर्षों में नवीकरणीय ऊर्जा पूरी तरह से जीवाश्म ईंधन की जगह ले लेगी?',
      },
      {
        speaker: 'You',
        text: 'Hi Elena! I think solar and wind will definitely grow, but complete transition will probably take longer because grid infrastructure requires huge upgrades. What is your prediction?',
        translation: 'नमस्ते ऐलेना! मुझे लगता है कि सौर और पवन निश्चित रूप से बढ़ेंगे, लेकिन पूर्ण परिवर्तन में संभवतः अधिक समय लगेगा क्योंकि ग्रिड बुनियादी ढांचे को बड़े उन्नयन की आवश्यकता है। आपकी भविष्यवाणी क्या है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_103_1',
      type: 'fill_blank',
      prompt: 'Where does "probably" go in a negative prediction: "It ___ (probably / not) be finished by noon."',
      options: [
        { id: 'opt_1', text: 'probably won\'t', isCorrect: true },
        { id: 'opt_2', text: 'won\'t probably', isCorrect: false },
        { id: 'opt_3', text: 'not will probably', isCorrect: false },
      ],
      correctAnswer: 'probably won\'t',
      explanation: '"Probably" sits before the negative modal "won\'t".',
    },
    {
      id: 'cp_a2_103_2',
      type: 'multiple_choice',
      prompt: 'Which modal expresses roughly 50% possibility about future weather?',
      options: [
        { id: 'opt_1', text: 'It might rain tomorrow afternoon, so take an umbrella.', isCorrect: true },
        { id: 'opt_2', text: 'It will definitely rain 100%.', isCorrect: false },
        { id: 'opt_3', text: 'It rains yesterday afternoon.', isCorrect: false },
      ],
      correctAnswer: 'It might rain tomorrow afternoon, so take an umbrella.',
      explanation: '"Might" indicates a plausible possibility (~50% chance).',
    },
    {
      id: 'cp_a2_103_3',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly structures a negative personal opinion prediction?',
      options: [
        { id: 'opt_1', text: 'I don\'t think electric cars will be expensive in five years.', isCorrect: true },
        { id: 'opt_2', text: 'I think electric cars will not be expensive.', isCorrect: false },
        { id: 'opt_3', text: 'I am not think cars will cheap.', isCorrect: false },
      ],
      correctAnswer: 'I don\'t think electric cars will be expensive in five years.',
      explanation: 'Native English prefers negative transfer: "I don\'t think [subject] will...".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_103_1',
      scenarioContext: 'Make a future prediction about solar energy prices.',
      prompt: 'Build: "Solar panel costs will probably decrease next year."',
      targetStructure: 'Subject + will probably + base verb + time adverb',
      wordBank: ['Solar', 'panel', 'costs', 'will', 'probably', 'decrease', 'next', 'year', 'decreasing', 'might'],
      acceptableSolutions: [
        'Solar panel costs will probably decrease next year',
        'Solar panel costs will probably decrease next year.',
      ],
      explanation: 'High probability prediction using "will probably".',
    },
    {
      id: 'sc_a2_103_2',
      scenarioContext: 'Express a possibility regarding tomorrow\'s weather.',
      prompt: 'Build: "It might rain during the outdoor exhibition tomorrow."',
      targetStructure: 'Subject + might + base verb + prepositional phrase + time noun',
      wordBank: ['It', 'might', 'rain', 'during', 'the', 'outdoor', 'exhibition', 'tomorrow', 'will', 'raining'],
      acceptableSolutions: [
        'It might rain during the outdoor exhibition tomorrow',
        'It might rain during the outdoor exhibition tomorrow.',
      ],
      explanation: 'Uses "might" for weather possibility.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_103_1',
      turnIndex: 1,
      partnerPrompt:
        'Welcome to the Newcastle Clean Tech Mixer! I am Elena Vance from TechForward. We are interviewing innovators today: Do you think AI and smart grids will revolutionize renewable energy within the next five years, or will it take much longer?',
      partnerAudioText:
        'Welcome to the Newcastle Clean Tech Mixer! I am Elena Vance from TechForward. We are interviewing innovators today: Do you think AI and smart grids will revolutionize renewable energy within the next five years, or will it take much longer?',
      partnerQuestionHindi:
        'न्यूकैसल क्लीन टेक मिक्सर में आपका स्वागत है! मैं टेकफॉरवर्ड से ऐलेना वेंस हूँ। आज हम नवप्रवर्तकों का साक्षात्कार कर रहे हैं: क्या आपको लगता है कि एआई और स्मार्ट ग्रिड अगले पांच वर्षों के भीतर नवीकरणीय ऊर्जा में क्रांति लाएंगे, या इसमें अधिक समय लगेगा?',
      expectedFunction: 'Express Future Prediction with Probability (will probably / might)',
      contextGoal:
        'State your prediction: smart grids will probably optimize energy distribution quickly, but full transition might take ten years due to infrastructure costs; ask Elena for her forecast on electric vehicles.',
      targetVocabulary: ['smart grids will probably optimize energy storage', 'complete transition might take ten years', 'I think AI will accelerate efficiency', 'what is your prediction on electric vehicles'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'Hi Elena! In my opinion, AI will probably optimize smart grid distribution very quickly within three to five years. However, replacing old infrastructure might take closer to ten years because of high installation costs. What do you predict will happen with electric vehicle adoption?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Prediction & Probability (will probably / might / may)',
          patterns: ['will probably', 'might take', 'may take', 'will optimize', 'i think', 'five years', 'ten years', 'smart grids'],
          required: true,
        },
        {
          name: 'Follow-up Question (Elena / EVs)',
          patterns: ['what do you predict', 'what is your prediction', 'electric vehicles', 'evs', 'elena', 'and you'],
          required: false,
        },
      ],
      commonMistakeRules: [
        {
          id: 'won\'t_probably_order_error',
          pattern: /\bit will not probably\b|\bit won't probably\b/i,
          errorType: 'grammar',
          message: 'Place "probably" before "won\'t": "It probably won\'t happen".',
          correctionPattern: 'probably won\'t',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_103_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Grid updates ___ (probably / not) happen overnight."',
        options: [
          { id: 'opt_1', text: 'probably won\'t', isCorrect: true },
          { id: 'opt_2', text: 'won\'t probably', isCorrect: false },
          { id: 'opt_3', text: 'will not probably', isCorrect: false },
        ],
        correctAnswer: 'probably won\'t',
        explanation: 'Adverb placement: "probably won\'t".',
      },
    },
    {
      id: 'turn_a2_103_2',
      turnIndex: 2,
      partnerPrompt:
        'I predict that solid-state batteries will probably cut EV charging times down to 10 minutes by 2028! Speaking of tomorrow’s outdoor exhibition in the park: The forecast shows gray clouds. Do you think it will rain during the keynote presentation?',
      partnerAudioText:
        'I predict that solid-state batteries will probably cut EV charging times down to 10 minutes by 2028! Speaking of tomorrow’s outdoor exhibition in the park: The forecast shows gray clouds. Do you think it will rain during the keynote presentation?',
      partnerQuestionHindi:
        'मेरा अनुमान है कि सॉलिड-स्टेट बैटरियां 2028 तक ईवी चार्जिंग समय को घटाकर 10 मिनट कर देंगी! पार्क में कल की बाहरी प्रदर्शनी की बात करें तो: पूर्वानुमान में भूरे बादल दिखाई दे रहे हैं। क्या आपको लगता है कि मुख्य प्रस्तुति के दौरान बारिश होगी?',
      expectedFunction: 'Predict Weather with Modals of Possibility (might rain / probably won\'t)',
      contextGoal:
        'Predict that it might drizzle in the early morning, but it probably won’t rain heavily during the afternoon keynote; advise bringing light jackets just in case.',
      targetVocabulary: ['it might drizzle in the morning', 'it probably won’t rain during the keynote', 'we should bring a raincoat just in case', 'the afternoon will probably stay dry'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'According to the latest meteorological radar, it might drizzle a little in the early morning, but it probably won’t rain heavily during the afternoon keynote. Still, everyone should probably bring a light waterproof jacket just in case!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Weather Prediction (might / probably won’t)',
          patterns: ['might drizzle', 'might rain', 'probably won\'t rain', 'probably stay dry', 'clouds', 'radar', 'afternoon', 'keynote'],
          required: true,
        },
        {
          name: 'Practical Advice (jacket / umbrella / just in case)',
          patterns: ['jacket', 'umbrella', 'just in case', 'waterproof', 'bring', 'prepared'],
          required: false,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_103_2',
        type: 'multiple_choice',
        prompt: 'Which prediction correctly expresses moderate uncertainty about rain?',
        options: [
          { id: 'opt_1', text: 'It might rain later, but it probably won\'t be heavy.', isCorrect: true },
          { id: 'opt_2', text: 'It is must to rain later.', isCorrect: false },
          { id: 'opt_3', text: 'Rain is happen yesterday.', isCorrect: false },
        ],
        correctAnswer: 'It might rain later, but it probably won\'t be heavy.',
        explanation: '"Might" + "probably won\'t" expresses nuanced probability.',
      },
    },
    {
      id: 'turn_a2_103_3',
      turnIndex: 3,
      partnerPrompt:
        'Bringing a raincoat is smart advice in Newcastle! If the weather stays clear, we might also see a live drone demonstration. Will you be attending tomorrow’s panel on green urban architecture at 2:00 PM?',
      partnerAudioText:
        'Bringing a raincoat is smart advice in Newcastle! If the weather stays clear, we might also see a live drone demonstration. Will you be attending tomorrow’s panel on green urban architecture at 2:00 PM?',
      partnerQuestionHindi:
        'न्यूकैसल में रेनकोट लाना समझदारी भरी सलाह है! यदि मौसम साफ रहता है, तो हम एक लाइव ड्रोन प्रदर्शन भी देख सकते हैं। क्या आप कल दोपहर 2:00 बजे ग्रीन अर्बन आर्किटेक्चर पर होने वाले पैनल में भाग लेंगे?',
      expectedFunction: 'Express Probability of Attendance & Mention Keynote Interest',
      contextGoal:
        'State that you will definitely attend the 2:00 PM panel because sustainable architecture is your passion, and you might meet your team members there.',
      targetVocabulary: ['I will definitely attend the 2:00 PM panel', 'green architecture is a big interest of mine', 'I might meet my colleagues there', 'look forward to the discussion'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'I will definitely be there at 2:00 PM! Sustainable architecture and solar buildings are major interests of mine. My colleagues might join me as well, so I look forward to hearing your insights on the panel, Elena.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Attendance Certainty (will definitely / will be there)',
          patterns: ['will definitely', 'will be there', 'attend', '2:00', 'panel', 'architecture', 'colleagues', 'might join'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_103_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I ___ (definitely / attend) the green tech panel tomorrow."',
        options: [
          { id: 'opt_1', text: 'will definitely attend', isCorrect: true },
          { id: 'opt_2', text: 'definitely will attend to', isCorrect: false },
          { id: 'opt_3', text: 'am definitely attend', isCorrect: false },
        ],
        correctAnswer: 'will definitely attend',
        explanation: 'Certain future prediction: "will definitely + base verb".',
      },
    },
    {
      id: 'turn_a2_103_4',
      turnIndex: 4,
      partnerPrompt:
        'Fantastic! I am moderating that session, so I will make sure to save time for questions from the audience. It was a pleasure discussing future trends with you Alex. Enjoy the rest of the mixer tonight!',
      partnerAudioText:
        'Fantastic! I am moderating that session, so I will make sure to save time for questions from the audience. It was a pleasure discussing future trends with you Alex. Enjoy the rest of the mixer tonight!',
      partnerQuestionHindi:
        'शानदार! मैं उस सत्र का संचालन कर रही हूँ, इसलिए मैं दर्शकों के सवालों के लिए समय बचाना सुनिश्चित करूँगी। आपके साथ भविष्य के रुझानों पर चर्चा करना खुशी की बात थी एलेक्स। आज रात शेष मिक्सर का आनंद लें!',
      expectedFunction: 'Conclude Conversation & Express Anticipation for Tomorrow',
      contextGoal:
        'Thank Elena, mention that you look forward to her moderation tomorrow, and wish her a successful evening.',
      targetVocabulary: ['thank you Elena for the insightful conversation', 'look forward to your panel moderation tomorrow', 'see you at 2:00 PM', 'have a great evening'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'Thank you so much Elena for the fascinating conversation! I really look forward to your panel tomorrow at 2:00 PM. Enjoy the rest of the tech mixer tonight and see you tomorrow!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing Appreciation & Tomorrow Outlook',
          patterns: ['thank you', 'thanks', 'elena', 'conversation', 'panel', 'tomorrow', '2:00', 'see you', 'mixer'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_103_4',
        type: 'multiple_choice',
        prompt: 'Which closing remark is most polished for a professional conference setting?',
        options: [
          { id: 'opt_1', text: 'Thank you for the insightful discussion Elena, see you at tomorrow\'s panel!', isCorrect: true },
          { id: 'opt_2', text: 'Good bye I see you maybe.', isCorrect: false },
          { id: 'opt_3', text: 'Talk finished bye.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for the insightful discussion Elena, see you at tomorrow\'s panel!',
        explanation: 'Polite, professional, and forward-looking.',
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
