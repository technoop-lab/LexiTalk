import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_207: ConversationDefinition = {
  id: 'conv_a2_207',
  title: 'Cultural Etiquette, Politeness Strategies & Social Norms',
  cefr: 'A2',
  unitId: 'unit_a2_14',
  lessonLinks: ['lesson_a2_14_207'],
  estimatedMinutes: 5,
  scenario:
    'You are attending an International Student Orientation workshop led by Advisor Chloe. She discusses everyday British and international social etiquette: queuing discipline, frequent apologies ("sorry" for minor bumps or asking questions), polite indirect feedback, tipping norms at cafes vs restaurants, and respecting personal space.',
  communicativeGoals: [
    'Understand and apply British and international politeness conventions (frequent "sorry", "please", "thank you")',
    'Follow social queuing norms and address queue-jumping politely ("Excuse me, I think there is a queue here")',
    'Express indirect, constructive criticism gently ("It’s quite good, though maybe we could tweak...", "I’m not entirely sure about...")',
    'Explain tipping practices and service charge etiquette across different dining settings',
  ],
  canDoStatements: [
    'Can navigate everyday social etiquette situations with polite English phrasing',
    'Can address minor social misunderstandings (such as queues or accidental bumps) calmly and courteously',
    'Can offer gentle indirect feedback without causing embarrassment',
  ],
  characters: [
    {
      id: 'char_chloe_orientation',
      name: 'Chloe',
      role: 'International Student Experience Officer',
      avatar: '🌍',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'etiquette',
        ipa: '/ˈetɪket/',
        partOfSpeech: 'noun',
        meaning: 'The customary code of polite behavior in society or among members of a particular profession or group',
        exampleSentence: 'Understanding local social etiquette helps international students feel confident and welcome.',
        translations: { hi: 'शिष्टाचार / आचरण के नियम' },
      },
      {
        word: 'queuing',
        ipa: '/ˈkjuːɪŋ/',
        partOfSpeech: 'noun',
        meaning: 'The practice of waiting in an orderly line for service or entry',
        exampleSentence: 'Queuing patiently at bus stops is a fundamental social expectation in the UK.',
        translations: { hi: 'कतार में लगना / लाइन बनाना' },
      },
      {
        word: 'indirect',
        ipa: '/ˌɪndaɪˈrekt/',
        partOfSpeech: 'adjective',
        meaning: 'Not direct; avoiding direct confrontation or bluntness by softening language',
        exampleSentence: 'Using indirect phrasing makes your criticism sound much more constructive.',
        translations: { hi: 'अप्रत्यक्ष / सौम्य' },
      },
      {
        word: 'gratuity',
        ipa: '/ɡrəˈtjuːəti/',
        partOfSpeech: 'noun',
        meaning: 'A tip given to a waiter, driver, or other service worker in addition to the payment due',
        exampleSentence: 'A twelve point five percent gratuity is often included in restaurant bills.',
        translations: { hi: 'बख्शीश / टिप (ग्रैच्युइटी)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Excuse me, sorry, but I think the end of the queue is back there.',
        functionCategory: 'Polite queuing reminder',
        exampleSentence: 'Excuse me, are you in the queue for the coffee counter?',
      },
      {
        phrase: 'It is a really strong draft, though maybe we could adjust the formatting slightly.',
        functionCategory: 'Indirect constructive criticism',
        exampleSentence: 'I’m not entirely sure about this color scheme, but the layout is great.',
      },
      {
        phrase: 'Is the service charge already included on the bill, or should we leave a tip?',
        functionCategory: 'Inquiring about tipping norms',
        exampleSentence: 'In casual cafes, tipping is optional, but ten percent is customary for table service.',
      },
      {
        phrase: 'Sorry, my mistake! / No problem at all.',
        functionCategory: 'Reflexive social apologies',
        exampleSentence: 'Sorry about that! — Don’t mention it.',
      },
    ],
    grammar: {
      title: 'Politeness Strategies, Indirect Feedback & Modality',
      conceptExplanation:
        '1. Reflexive Politeness Markers:\n   - "Excuse me, sorry to bother you, but..."\n   - "Sorry, my fault!" (used even when lightly bumped by accident)\n2. Indirect Criticism / Softened Disagreement:\n   - "I’m not entirely sure if..."\n   - "Maybe we could possibly..."\n   - "It’s quite good, although perhaps..."\n3. Tipping & Service Inquiries:\n   - "Is service included?"\n   - "Would you like to add a tip?"',
      patternFormula: 'Excuse me, [Polite check] | I’m not entirely sure, but perhaps [Gentle suggestion] | Is service charge included?',
      contrastExamples: [
        {
          incorrect: 'You cut line! Go back!',
          correct: 'Excuse me, sorry, but I think there’s a queue forming back here.',
          explanation: 'Use polite indirect reminders rather than aggressive accusations.',
        },
        {
          incorrect: 'Your presentation slide is bad.',
          correct: 'The slides are informative, though perhaps we could simplify the bullet points a little.',
          explanation: 'Praise first, then soften the critique with "perhaps" or "a little".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Chloe',
        text: 'Welcome to our British Culture and Etiquette session! What surprised you most when you first arrived at the student refectory or bus stop?',
        translation: 'हमारे ब्रिटिश संस्कृति और शिष्टाचार सत्र में आपका स्वागत है! जब आप पहली बार छात्र कैंटीन या बस स्टॉप पर पहुंचे तो आपको सबसे अधिक क्या आश्चर्य हुआ?',
      },
      {
        speaker: 'Learner',
        text: 'I noticed people always say "sorry" even when someone else bumps into them, and queuing is very strictly respected!',
        translation: 'मैंने देखा कि लोग हमेशा "सॉरी" कहते हैं, तब भी जब कोई दूसरा उनसे टकराता है, और कतार में खड़े होने का बहुत कड़ाई से सम्मान किया जाता है!',
      },
      {
        speaker: 'Chloe',
        text: 'Spot on! Saying "sorry" in British culture often simply means "pardon me" or "no offense intended".',
        translation: 'बिल्कुल सही! ब्रिटिश संस्कृति में "सॉरी" कहने का अर्थ अक्सर केवल "माफ कीजिए" या "कोई असुविधा न हो" होता है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_207_1',
      type: 'fill_blank',
      prompt: 'Complete with the polite modifier: "It’s a great idea, ______ (perhaps / must) we could try it next week."',
      options: [
        { id: 'opt_1', text: 'perhaps', isCorrect: true },
        { id: 'opt_2', text: 'must', isCorrect: false },
        { id: 'opt_3', text: 'certainly', isCorrect: false },
      ],
      correctAnswer: 'perhaps',
      explanation: '"Perhaps" softens suggestions politely.',
    },
    {
      id: 'cp_207_2',
      type: 'multiple_choice',
      prompt: 'How should you politely ask someone if they are in line for the cafe counter?',
      options: [
        { id: 'opt_1', text: 'Excuse me, are you waiting in the queue?', isCorrect: true },
        { id: 'opt_2', text: 'Hey, move out of my way.', isCorrect: false },
        { id: 'opt_3', text: 'Why you stand there?', isCorrect: false },
      ],
      correctAnswer: 'Excuse me, are you waiting in the queue?',
      explanation: 'Courteous and standard queuing question.',
    },
    {
      id: 'cp_207_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [is service charge / on the bill / included / ?]',
      correctAnswer: 'is service charge included on the bill ?',
      explanation: 'Inversion question: is + subject + past participle + prepositional phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_207_1',
      prompt: 'Construct a polite sentence to remind someone gently that there is a line behind them.',
      scenarioContext: 'Queuing at the campus coffee cart.',
      targetStructure: 'Excuse me, sorry, but I think the queue starts just behind me.',
      wordBank: ['Excuse me,', 'sorry, but I think', 'the queue starts', 'just behind me', 'at the counter.'],
      acceptableSolutions: [
        'Excuse me, sorry, but I think the queue starts just behind me.',
        'Excuse me, I think there is a queue over here.',
      ],
      explanation: 'Polite indirect queuing formula.',
    },
    {
      id: 'sc_207_2',
      prompt: 'Construct an indirect sentence giving gentle feedback on a classmate\'s presentation slide.',
      scenarioContext: 'Offering soft feedback.',
      targetStructure: 'The content is really thorough, though maybe we could reduce the text on slide three.',
      wordBank: ['The content is', 'really thorough,', 'though maybe we could', 'reduce the text', 'on slide three.'],
      acceptableSolutions: [
        'The content is really thorough, though maybe we could reduce the text on slide three.',
        'The slides are great, though perhaps we could use fewer words.',
      ],
      explanation: 'Compliment + "though maybe we could" + gentle tweak.',
    },
  ],
  turns: [
    {
      id: 'turn_207_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi everyone! Welcome to our Living Language cultural etiquette discussion. Let’s imagine you are waiting for coffee in a crowded campus cafe, and someone accidentally walks right in front of you toward the counter. How would you address them politely according to local queuing norms?',
      partnerAudioText:
        'Hi everyone! Welcome to our Living Language cultural etiquette discussion. Let’s imagine you are waiting for coffee in a crowded campus cafe, and someone accidentally walks right in front of you toward the counter. How would you address them politely according to local queuing norms?',
      partnerQuestionHindi:
        'नमस्ते सभी को! हमारी लिविंग लैंग्वेज सांस्कृतिक शिष्टाचार चर्चा में आपका स्वागत है। मान लीजिए कि आप एक भीड़भाड़ वाले कैंपस कैफे में कॉफी का इंतजार कर रहे हैं, और कोई गलती से काउंटर की ओर सीधे आपके सामने आ जाता है। स्थानीय कतार नियमों के अनुसार आप उन्हें विनम्रतापूर्वक कैसे संबोधित करेंगे?',
      expectedFunction: 'Politely pointing out the queue using softeners ("Excuse me, sorry, but...")',
      contextGoal: 'Say "Excuse me, sorry, but I think there is a queue here" or "Excuse me, are you in the queue?"',
      targetVocabulary: ['Excuse me', 'sorry', 'queue', 'waiting', 'line', 'Chloe'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hi Chloe! I would say: "Excuse me, sorry, but I think there is a queue forming back here."',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I would politely say: "Excuse me, are you waiting in the queue for the coffee counter?"',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I’d use a gentle softener: "Excuse me, sorry to interrupt, but the end of the line is actually just behind us."',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'polite_opener',
          patterns: ['excuse me', 'sorry', 'pardon me', 'sorry to interrupt'],
          required: true,
        },
        {
          name: 'queue_concept',
          patterns: ['queue', 'line', 'waiting', 'back here', 'behind', 'counter'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_207_1_aggressive',
          pattern: /^hey, go back/i,
          errorType: 'interaction',
          message: 'British social norms avoid direct confrontation. Start with "Excuse me, sorry, but I think the queue is back here."',
          correctionPattern: 'Excuse me, sorry, but I think there is a queue here.',
        },
      ],
      remediationPractice: {
        id: 'rem_207_1',
        type: 'fill_blank',
        prompt: 'Fill in: "Excuse me, ______ (sorry), but the queue starts back there."',
        options: [
          { id: 'r1', text: 'sorry', isCorrect: true },
          { id: 'r2', text: 'never', isCorrect: false },
        ],
        correctAnswer: 'sorry',
        explanation: '"Excuse me, sorry, but..." is the classic polite British softener.',
      },
    },
    {
      id: 'turn_207_2',
      turnIndex: 2,
      partnerPrompt:
        'Spot on! That avoids any confrontation. Now, what about giving feedback in group projects? If a teammate brings a slide that has way too much text, how can you offer indirect, constructive criticism so they do not feel offended?',
      partnerAudioText:
        'Spot on! That avoids any confrontation. Now, what about giving feedback in group projects? If a teammate brings a slide that has way too much text, how can you offer indirect, constructive criticism so they do not feel offended?',
      partnerQuestionHindi:
        'बिल्कुल सही! यह किसी भी टकराव से बचाता है। अब, समूह परियोजनाओं में प्रतिक्रिया देने के बारे में क्या? यदि कोई टीम साथी ऐसी स्लाइड लाता है जिसमें बहुत अधिक टेक्स्ट है, तो आप अप्रत्यक्ष, रचनात्मक आलोचना कैसे दे सकते हैं ताकि वे बुरा न मानें?',
      expectedFunction: 'Giving gentle, indirect feedback using praising + softening modal ("perhaps we could...")',
      contextGoal: 'Compliment the research first, then suggest simplifying or using bullet points with "maybe we could..."',
      targetVocabulary: ['great work', 'though maybe', 'perhaps', 'could', 'bullet points', 'simplify'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I would say: "The content is really thorough, though perhaps we could use bullet points to make it easier to read on screen."',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I’d start with praise: "You did great research! Maybe we could just shorten the text slightly so the audience can focus on you speaking."',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I’d suggest: "These points are fascinating, although I wonder if turning some paragraphs into a diagram might make them even punchier?"',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'compliment_cushion',
          patterns: ['thorough', 'great research', 'interesting', 'fascinating', 'good points', 'really thorough', 'content is great'],
          required: true,
        },
        {
          name: 'indirect_tweak',
          patterns: ['perhaps', 'maybe', 'could', 'bullet points', 'shorten', 'simplify', 'diagram', 'slightly'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_207_2_blunt_critique',
          pattern: /^your slide is too long/i,
          errorType: 'interaction',
          message: 'Cushion the feedback: praise the work first and use "perhaps we could..."',
          correctionPattern: 'The points are great, though perhaps we could use bullet points.',
        },
      ],
      remediationPractice: {
        id: 'rem_207_2',
        type: 'multiple_choice',
        prompt: 'Which sentence offers constructive criticism most diplomatically?',
        options: [
          { id: 'r1', text: 'The data is fantastic, though perhaps we could summarize the text into bullet points.', isCorrect: true },
          { id: 'r2', text: 'You wrote too much text on this slide.', isCorrect: false },
        ],
        correctAnswer: 'The data is fantastic, though perhaps we could summarize the text into bullet points.',
        explanation: 'Cushioned with positive feedback and a gentle modal suggestion.',
      },
    },
    {
      id: 'turn_207_3',
      turnIndex: 3,
      partnerPrompt:
        'That is the perfect "feedback sandwich"! Next, students often ask about tipping in the UK. When you go to a sit-down restaurant versus a quick counter cafe, what is the customary tipping etiquette, and how do you ask the server about the bill?',
      partnerAudioText:
        'That is the perfect "feedback sandwich"! Next, students often ask about tipping in the UK. When you go to a sit-down restaurant versus a quick counter cafe, what is the customary tipping etiquette, and how do you ask the server about the bill?',
      partnerQuestionHindi:
        'वह एकदम सही "फीडबैक सैंडविच" है! इसके बाद, छात्र अक्सर ब्रिटेन में टिपिंग के बारे में पूछते हैं। जब आप एक त्वरित काउंटर कैफे बनाम एक डाइन-इन रेस्तरां में जाते हैं, तो प्रथागत टिपिंग शिष्टाचार क्या है, और आप वेटर से बिल के बारे में कैसे पूछते हैं?',
      expectedFunction: 'Explaining tipping etiquette (optional in cafes, 10-12.5% in sit-down restaurants) and asking if service is included',
      contextGoal: 'Explain that cafes are optional/loose change while restaurants often include 10-12.5% service charge, and ask "Is service included on the bill?"',
      targetVocabulary: ['service charge', 'bill', 'included', 'tipping', 'optional', 'percent', 'restaurant', 'cafe'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'In counter cafes tipping is optional, but in sit-down restaurants a 10 to 12.5 percent service charge is often added. You can ask: "Is the service charge already included on the bill?"',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'At quick cafes you can leave spare coins, while in restaurants 10% is customary. You can check: "Excuse me, is service included?"',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'In cafes it’s completely discretionary, whereas sit-down dining usually carries a 12.5% optional charge. I always check: "Could you tell me if the gratuity is included in this total?"',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'tipping_distinction',
          patterns: ['optional', 'counter', 'cafe', 'sit-down', 'restaurant', '10', '12.5', 'percent', 'coins'],
          required: true,
        },
        {
          name: 'service_inquiry',
          patterns: ['service charge', 'included', 'bill', 'gratuity', 'check'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_207_3_tip_confusion',
          pattern: /^tipping is always mandatory everywhere/i,
          errorType: 'interaction',
          message: 'Clarify that tipping is optional at cafes and usually 10-12.5% or included in sit-down dining.',
          correctionPattern: 'In cafes it is optional, while in restaurants service charge is often included.',
        },
      ],
      remediationPractice: {
        id: 'rem_207_3',
        type: 'fill_blank',
        prompt: 'Fill in: "Excuse me, is service ______ (included) in the total bill?"',
        options: [
          { id: 'r1', text: 'included', isCorrect: true },
          { id: 'r2', text: 'including', isCorrect: false },
        ],
        correctAnswer: 'included',
        explanation: 'Passive structure: "is service included".',
      },
    },
    {
      id: 'turn_207_4',
      turnIndex: 4,
      partnerPrompt:
        'Brilliant explanation! You have mastered both the linguistic and cultural nuances of everyday interaction. Do you feel ready to put these etiquette habits into practice across campus?',
      partnerAudioText:
        'Brilliant explanation! You have mastered both the linguistic and cultural nuances of everyday interaction. Do you feel ready to put these etiquette habits into practice across campus?',
      partnerQuestionHindi:
        'शानदार स्पष्टीकरण! आपने दैनिक बातचीत की भाषाई और सांस्कृतिक दोनों बारीकियों में महारत हासिल कर ली है। क्या आप परिसर में इन शिष्टाचार की आदतों को व्यवहार में लाने के लिए तैयार महसूस करते हैं?',
      expectedFunction: 'Affirming confidence and thanking the orientation advisor warmly',
      contextGoal: 'Express confidence and enthusiasm, and thank Chloe for the practical guidance',
      targetVocabulary: ['ready', 'confident', 'thank you', 'Chloe', 'etiquette', 'practice', 'session'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Yes, absolutely! I feel much more confident navigating daily interactions now. Thank you so much for this helpful session, Chloe!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I definitely do. Understanding these polite nuances makes living and studying here so much easier. Thanks a lot Chloe!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I certainly do! Practicing these polite formulas gives me great confidence for both academic teamwork and social life. Thank you Chloe!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'readiness_affirmation',
          patterns: ['yes', 'confident', 'ready', 'definitely', 'absolutely', 'certainly'],
          required: true,
        },
        {
          name: 'advisor_gratitude',
          patterns: ['thank you', 'thanks', 'chloe', 'session', 'helpful', 'guidance', 'nuances'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_207_4_short',
          pattern: /^(yes|thanks)$/i,
          errorType: 'interaction',
          message: 'Provide a full confident response acknowledging the value of the etiquette tips.',
          correctionPattern: 'Yes, absolutely! Thank you for the helpful session, Chloe.',
        },
      ],
      remediationPractice: {
        id: 'rem_207_4',
        type: 'multiple_choice',
        prompt: 'Which response closes the orientation workshop politely?',
        options: [
          { id: 'r1', text: 'Yes, absolutely! I feel much more confident now. Thank you so much, Chloe!', isCorrect: true },
          { id: 'r2', text: 'Yes I know everything now bye.', isCorrect: false },
        ],
        correctAnswer: 'Yes, absolutely! I feel much more confident now. Thank you so much, Chloe!',
        explanation: 'Warm, appreciative, and culturally polite.',
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
