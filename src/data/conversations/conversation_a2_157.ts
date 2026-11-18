import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_157: ConversationDefinition = {
  id: 'conv_a2_157',
  title: 'Discussing Current News, Local Events & Media Reports',
  cefr: 'A2',
  unitId: 'unit_a2_11',
  lessonLinks: ['lesson_a2_11_157'],
  estimatedMinutes: 5,
  scenario:
    'You are in the community café at the Newcastle Arts Hub chatting with local journalist Hannah Jenkins. Hannah is covering community development projects for the regional paper. You will discuss recent local news using passive reporting frames ("According to the paper...", "It is reported that...", "The old market hall was restored"), recount past events with the Past Continuous and Past Simple, and share community perspectives.',
  communicativeGoals: [
    'Discuss recent community news, public projects, and municipal developments',
    'Use passive reporting expressions ("According to the news...", "It is reported that...", "The cycle lane was built")',
    'Narrate background events using the Past Continuous paired with the Past Simple ("While volunteers were planting trees, the council announced...")',
    'Express opinions on local initiatives and ask about upcoming newspaper coverage',
  ],
  canDoStatements: [
    'Can report local events and news stories using simple passive and attribution frames',
    'Can combine Past Continuous and Past Simple to describe events occurring simultaneously or interrupted',
    'Can share personal viewpoints on community developments in conversational English',
  ],
  characters: [
    {
      id: 'char_hannah_jenkins',
      name: 'Hannah Jenkins',
      role: 'Local Community Journalist',
      avatar: '📰',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'coverage',
        ipa: '/ˈkʌvərɪdʒ/',
        partOfSpeech: 'noun',
        meaning: 'The treatment of an issue, event, or person in journalism or media',
        exampleSentence: 'The newspaper provided excellent coverage of the new cycling lanes.',
        translations: { hi: 'कवरेज / समाचार प्रसारण' },
      },
      {
        word: 'restore',
        ipa: '/rɪˈstɔːr/',
        partOfSpeech: 'verb',
        meaning: 'To bring back to a former, original, or normal state',
        exampleSentence: 'The Victorian market hall was restored by local craftsmen.',
        translations: { hi: 'पुनर्निर्मित करना / बहाल करना' },
      },
      {
        word: 'infrastructure',
        ipa: '/ˈɪnfrəstrʌktʃə/',
        partOfSpeech: 'noun',
        meaning: 'The basic physical and organizational structures needed for the operation of a community',
        exampleSentence: 'The city council invested in green transport infrastructure.',
        translations: { hi: 'बुनियादी ढांचा' },
      },
      {
        word: 'resident',
        ipa: '/ˈrezɪdənt/',
        partOfSpeech: 'noun',
        meaning: 'A person who lives somewhere permanently or on a long-term basis',
        exampleSentence: 'Local residents welcomed the addition of pedestrian walkways.',
        translations: { hi: 'निवासी' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'According to the local news, the new green cycle path was opened on Monday.',
        functionCategory: 'Attributing News Sources & Passive Reporting',
        exampleSentence: 'According to the radio, roadworks will finish next week.',
      },
      {
        phrase: 'It is reported that over five hundred residents attended the opening ceremony.',
        functionCategory: 'Impersonal Passive News Frames',
        exampleSentence: 'It is reported that funding has increased.',
      },
      {
        phrase: 'While volunteers were planting trees, the mayor arrived to cut the ribbon.',
        functionCategory: 'Combining Past Continuous with Past Simple',
        exampleSentence: 'While they were discussing the budget, the lights went out.',
      },
      {
        phrase: 'When will your article about the town hall project be published?',
        functionCategory: 'Inquiring About Media Publication Timelines',
        exampleSentence: 'When will this story appear online?',
      },
    ],
    grammar: {
      title: 'Passive Reporting Frames & Narrative Time Clauses',
      conceptExplanation:
        '1. Passive Reporting: Use "According to [Source], [Clause]" or "It is reported that [Clause]".\n2. Simple Past Passive: [was/were + past participle] (e.g., "The market was restored", "New cycle lanes were constructed").\n3. Past Continuous + Past Simple: "While [Subject + was/were + Verb-ing], [Subject + Past Simple]" (e.g., "While residents were touring the building, rain started").',
      patternFormula: 'According to [Source], Subject + was/were + Past Participle | While S + was/were [Verb-ing], S + Past Simple',
      contrastExamples: [
        {
          incorrect: 'According news the market restored and while people walked mayor came.',
          correct: 'According to the news, the market was restored; while residents were walking through, the mayor arrived.',
          explanation: 'Include "to" with "according to", use passive "was restored", and continuous "were walking".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Hannah Jenkins',
        text: 'Hi! I’m interviewing locals about recent developments in Newcastle. Have you heard about the new transport and market initiatives in the city centre?',
        translation: 'नमस्ते! मैं न्यूकैसल में हाल के घटनाक्रमों के बारे में स्थानीय लोगों का साक्षात्कार ले रही हूँ। क्या आपने शहर के केंद्र में नए परिवहन और बाजार की पहलों के बारे में सुना है?',
      },
      {
        speaker: 'You',
        text: 'Yes! According to the local news, the historic market hall was fully restored last month, and a new green cycle lane was built along the river.',
        translation: 'हाँ! स्थानीय समाचारों के अनुसार, ऐतिहासिक मार्केट हॉल को पिछले महीने पूरी तरह से बहाल किया गया था, और नदी के किनारे एक नया हरा साइकिल ट्रैक बनाया गया था।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_157_1',
      type: 'fill_blank',
      prompt: 'Complete the passive report: "According to the morning paper, the old bridge ___ (was repaired / repaired / was repairing) by council engineers."',
      options: [
        { id: 'opt_1', text: 'was repaired', isCorrect: true },
        { id: 'opt_2', text: 'repaired', isCorrect: false },
        { id: 'opt_3', text: 'was repairing', isCorrect: false },
      ],
      correctAnswer: 'was repaired',
      explanation: 'Passive voice with "was + past participle" ("was repaired").',
    },
    {
      id: 'cp_a2_157_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly combines Past Continuous with Past Simple?',
      options: [
        { id: 'opt_1', text: 'While volunteers were planting saplings, the mayor delivered an inspiring speech.', isCorrect: true },
        { id: 'opt_2', text: 'While volunteers planted saplings, the mayor was delivering speech.', isCorrect: false },
        { id: 'opt_3', text: 'While volunteers are planting, the mayor delivered speech.', isCorrect: false },
      ],
      correctAnswer: 'While volunteers were planting saplings, the mayor delivered an inspiring speech.',
      explanation: 'Past Continuous ("were planting") for ongoing action, Past Simple ("delivered") for completed event.',
    },
    {
      id: 'cp_a2_157_3',
      type: 'multiple_choice',
      prompt: 'Which phrase introduces a media report source correctly?',
      options: [
        { id: 'opt_1', text: 'According to the regional news bulletin, traffic delays decreased by 20%.', isCorrect: true },
        { id: 'opt_2', text: 'According of the regional news bulletin...', isCorrect: false },
        { id: 'opt_3', text: 'Accord to regional news bulletin...', isCorrect: false },
      ],
      correctAnswer: 'According to the regional news bulletin, traffic delays decreased by 20%.',
      explanation: 'The fixed prepositional phrase is "According to [Source]".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_157_1',
      scenarioContext: 'Report news using passive voice.',
      prompt: 'Build: "The new cycle path was opened on Monday."',
      targetStructure: 'The new cycle path + was opened + on Monday',
      wordBank: ['The', 'new', 'cycle', 'path', 'was', 'opened', 'on', 'Monday', 'opened', 'is'],
      acceptableSolutions: [
        'The new cycle path was opened on Monday',
        'The new cycle path was opened on Monday.',
      ],
      explanation: 'Past simple passive: "was opened".',
    },
    {
      id: 'sc_a2_157_2',
      scenarioContext: 'Describe simultaneous past events.',
      prompt: 'Build: "While people were celebrating, rain started falling."',
      targetStructure: 'While people were celebrating + rain started falling',
      wordBank: ['While', 'people', 'were', 'celebrating', 'rain', 'started', 'falling', 'celebrated', 'was'],
      acceptableSolutions: [
        'While people were celebrating rain started falling',
        'While people were celebrating, rain started falling.',
        'While people were celebrating, rain started falling',
      ],
      explanation: 'Past Continuous with "While".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_157_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! I’m Hannah from the Newcastle Chronicle. I’m gathering opinions from residents on the city centre changes. What have you heard in the news about the new cycling infrastructure and the Victorian market hall?',
      partnerAudioText:
        'Hi there! I’m Hannah from the Newcastle Chronicle. I’m gathering opinions from residents on the city centre changes. What have you heard in the news about the new cycling infrastructure and the Victorian market hall?',
      partnerQuestionHindi:
        'नमस्ते! मैं न्यूकैसल क्रॉनिकल से हन्ना हूँ। मैं शहर के केंद्र में हुए परिवर्तनों पर निवासियों से राय जुटा रही हूँ। आपने नए साइकिलिंग बुनियादी ढांचे और विक्टोरियन मार्केट हॉल के बारे में समाचारों में क्या सुना है?',
      expectedFunction: 'Report News with Passive & Attribution (According to the news, the Victorian market was restored and a new cycle path was opened)',
      contextGoal:
        'Report news using "According to the news..." or "It is reported that..." stating the market was restored and new cycle lanes were built.',
      targetVocabulary: ['According to the local news', 'the market was restored', 'new cycle path was constructed', 'residents welcomed the changes', 'green transport'],
      suggestedResponses: [
        {
          label: 'Passive Reporting with "According to"',
          text: 'Hi Hannah! According to the local news, the historic Victorian market hall was beautifully restored last month, and a new protected cycle path was opened along the river.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct News Report',
          text: 'It was reported on the radio that the market was renovated and new cycle lanes were built to reduce city traffic.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Source Attribution (according to / reported / news / radio / read / heard / paper)',
          patterns: ['according to', 'reported', 'news', 'radio', 'read', 'heard', 'paper', 'chronicle'],
          required: true,
        },
        {
          name: 'Passive Events (market / restored / renovated / cycle path / lane / opened / built / constructed)',
          patterns: ['market', 'restored', 'renovated', 'cycle', 'path', 'lane', 'opened', 'built', 'constructed', 'infrastructure'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_active_for_passive',
          pattern: 'the market restored last month|cycle path opened itself',
          errorType: 'grammar',
          message: 'Use passive voice: "the market was restored" and "the path was opened".',
          correctionPattern: 'the market was restored / the path was opened',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_157_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "The old market hall ___ (was restored / restored) by local builders."',
        options: [
          { id: 'opt_1', text: 'was restored', isCorrect: true },
          { id: 'opt_2', text: 'restored', isCorrect: false },
          { id: 'opt_3', text: 'is restoring', isCorrect: false },
        ],
        correctAnswer: 'was restored',
        explanation: 'Passive voice: "was + past participle".',
      },
    },
    {
      id: 'turn_a2_157_2',
      turnIndex: 2,
      partnerPrompt:
        'Did you attend the opening festival last weekend? I heard there was a large community gathering when the council officially reopened the square.',
      partnerAudioText:
        'Did you attend the opening festival last weekend? I heard there was a large community gathering when the council officially reopened the square.',
      partnerQuestionHindi:
        'क्या आप पिछले सप्ताहांत उद्घाटन समारोह में शामिल हुए थे? मैंने सुना है कि जब परिषद ने आधिकारिक तौर पर चौराहे को फिर से खोला तो वहां एक बड़ा सामुदायिक जमावड़ा था।',
      expectedFunction: 'Narrate Event with Past Continuous & Past Simple (Yes, while musicians were playing, the mayor cut the ceremonial ribbon)',
      contextGoal:
        'Describe what happened using Past Continuous + Past Simple (e.g. while musicians were performing, crowds cheered / while volunteers were guiding cyclists, the ribbon was cut).',
      targetVocabulary: ['While musicians were playing', 'the mayor cut the ribbon', 'crowds were cheering', 'festive atmosphere', 'community spirit'],
      suggestedResponses: [
        {
          label: 'Narrative with "While" and Past Continuous',
          text: 'Yes, I was there! While local musicians were playing on stage, the mayor officially cut the ribbon, and hundreds of residents were cheering.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Past Narrative',
          text: 'It was fantastic! While volunteers were handing out free maps, families were testing the new bike lanes.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Past Continuous Time Clause (while / were playing / was playing / were cheering / were walking / was happening / were testing)',
          patterns: ['while', 'were playing', 'was playing', 'were cheering', 'were walking', 'was happening', 'were testing', 'were handing', 'was visiting'],
          required: true,
        },
        {
          name: 'Past Simple Interruption/Event (cut / arrived / opened / spoke / cheered / started / attended)',
          patterns: ['cut', 'arrived', 'opened', 'spoke', 'cheered', 'started', 'attended', 'saw'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_157_2',
        type: 'multiple_choice',
        prompt: 'Which sentence connects ongoing action with a completed past event correctly?',
        options: [
          { id: 'opt_1', text: 'While the band was playing, the mayor cut the ceremonial ribbon.', isCorrect: true },
          { id: 'opt_2', text: 'While band played, mayor was cutting ribbon.', isCorrect: false },
          { id: 'opt_3', text: 'While band is playing, mayor cutted ribbon.', isCorrect: false },
        ],
        correctAnswer: 'While the band was playing, the mayor cut the ceremonial ribbon.',
        explanation: 'Past Continuous for background, Past Simple for key event.',
      },
    },
    {
      id: 'turn_a2_157_3',
      turnIndex: 3,
      partnerPrompt:
        'What a lively atmosphere! How do you feel these new public investments will impact local businesses and residents over the coming year? And do you have any questions about our newspaper feature?',
      partnerAudioText:
        'What a lively atmosphere! How do you feel these new public investments will impact local businesses and residents over the coming year? And do you have any questions about our newspaper feature?',
      partnerQuestionHindi:
        'कितना जीवंत माहौल है! आपको क्या लगता है कि ये नए सार्वजनिक निवेश आने वाले वर्ष में स्थानीय व्यवसायों और निवासियों को कैसे प्रभावित करेंगे? और क्या आपके पास हमारे अखबार के फीचर के बारे में कोई प्रश्न हैं?',
      expectedFunction: 'Express Opinion on Community Impact & Inquire on Publication (I think it will attract tourists and boost local trade / When will your article be published?)',
      contextGoal:
        'Share that the investment will boost local shops and reduce car pollution, and ask Hannah when her report will be published.',
      targetVocabulary: ['boost local trade and tourism', 'reduce traffic pollution', 'create vibrant public spaces', 'When will your article be published in the Chronicle?'],
      suggestedResponses: [
        {
          label: 'Impact Opinion & Publication Inquiry',
          text: 'I believe this project will boost local trade and reduce traffic pollution significantly. When will your article be published in the Chronicle?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Viewpoint & Question',
          text: 'It will definitely attract more visitors to local cafes. When will this story be printed in the newspaper?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Positive Impact (boost / business / trade / shops / tourists / traffic / cleaner / pollution / vibrant / believe)',
          patterns: ['boost', 'business', 'trade', 'shops', 'tourists', 'traffic', 'cleaner', 'pollution', 'vibrant', 'believe', 'think'],
          required: true,
        },
        {
          name: 'Publication Question (when / article / published / printed / chronicle / paper / story / ?)',
          patterns: ['when', 'article', 'published', 'printed', 'chronicle', 'paper', 'story', 'online', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_157_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "When will the report ___ (be published / published)?"',
        options: [
          { id: 'opt_1', text: 'be published', isCorrect: true },
          { id: 'opt_2', text: 'published', isCorrect: false },
          { id: 'opt_3', text: 'is publishing', isCorrect: false },
        ],
        correctAnswer: 'be published',
        explanation: 'Future passive with modal "will + be + past participle".',
      },
    },
    {
      id: 'turn_a2_157_4',
      turnIndex: 4,
      partnerPrompt:
        'Our full feature will be published this Thursday in print and online! Thank you so much for your insightful interview. Could you summarize the main community points we discussed today?',
      partnerAudioText:
        'Our full feature will be published this Thursday in print and online! Thank you so much for your insightful interview. Could you summarize the main community points we discussed today?',
      partnerQuestionHindi:
        'हमारा पूरा फीचर इस गुरुवार को प्रिंट और ऑनलाइन प्रकाशित किया जाएगा! आपके व्यावहारिक साक्षात्कार के लिए बहुत-बहुत धन्यवाद। क्या आप उन मुख्य सामुदायिक बिंदुओं का संक्षेप प्रस्तुत कर सकते हैं जिन पर हमने आज चर्चा की?',
      expectedFunction: 'Summarize Discussion & Conclude (To summarize, we discussed the restored market, the new cycle paths, and their positive impact on local trade)',
      contextGoal:
        'Summarize the conversation: the restored market hall, the green cycle lanes, positive business impact, and thank Hannah for the interview.',
      targetVocabulary: ['To summarize our interview', 'the restored Victorian market', 'the new riverside cycle path', 'positive boost for local economy', 'thank you Hannah'],
      suggestedResponses: [
        {
          label: 'Comprehensive News Summary',
          text: 'To summarize: we discussed the newly restored market hall, the river cycle paths, and how these green investments will boost local businesses and community health. Thank you, Hannah!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct News Summary',
          text: 'In summary, the market was restored, cycle lanes were opened, and residents are optimistic about future trade. Looking forward to reading your article on Thursday!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Summary Signpost (to summarize / in summary / summary / discussed / so)',
          patterns: ['to summarize', 'in summary', 'summary', 'discussed', 'so', 'we talked about'],
          required: true,
        },
        {
          name: 'Key Points (market / restored / cycle path / business / thurs / thank you / hannah)',
          patterns: ['market', 'restored', 'cycle', 'path', 'business', 'trade', 'thursday', 'thank you', 'hannah', 'thanks'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_157_4',
        type: 'multiple_choice',
        prompt: 'Which summary captures the interview topics effectively?',
        options: [
          { id: 'opt_1', text: 'To summarize, we covered the restored market, the new cycle lanes, and their economic benefits.', isCorrect: true },
          { id: 'opt_2', text: 'News is boring and everything is bad.', isCorrect: false },
          { id: 'opt_3', text: 'I am finished speaking now bye.', isCorrect: false },
        ],
        correctAnswer: 'To summarize, we covered the restored market, the new cycle lanes, and their economic benefits.',
        explanation: 'Structured, polite summary of media interview topics.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 65,
  },
};
