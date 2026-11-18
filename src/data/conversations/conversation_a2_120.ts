import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_120: ConversationDefinition = {
  id: 'conv_a2_120',
  title: 'Unit 8 Capstone Challenge: Real-World Communication Simulation (The Full Journey)',
  cefr: 'A2',
  unitId: 'unit_a2_8',
  lessonLinks: ['lesson_a2_8_120'],
  estimatedMinutes: 6,
  scenario:
    'You are attending the York Cultural & Tech Residency Welcome Dinner in the historic Merchant Adventurers’ Hall, speaking with residency director Dr. Evelyn Sterling. In this comprehensive capstone simulation, synthesize all Unit 8 skills: recount your travel delay caused by severe weather (109, 118), report a minor flat maintenance fix (108), discuss your creative tech project and future career ambitions (112, 117, 119), and recommend an inspiring film or book set in the region (110, 116).',
  communicativeGoals: [
    'Synthesize past narratives with "when/while" and cause-and-effect ("due to", "because of", "as a result")',
    'Report household and accommodation details with passive descriptors and repair structures ("needs fixing", "leaking")',
    'Express professional project updates, tech workflow ("back up", "set up"), and First Conditional ambitions ("If I complete..., I will...")',
    'Recommend cultural media using passive expressions ("set in", "directed by") and finalize scheduling with confidence',
  ],
  canDoStatements: [
    'Can handle a complex, multi-topic social and professional conversation across all CEFR A2 domains',
    'Can fluidly integrate past narratives, future conditional goals, and polite requests with minimal scaffolding',
    'Can participate effectively in an extended conversation with native speakers on familiar lifestyle and work topics',
  ],
  characters: [
    {
      id: 'char_dr_evelyn_sterling',
      name: 'Dr. Evelyn Sterling',
      role: 'Residency Program Director',
      avatar: '🏛️',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'residency',
        ipa: '/ˈrɛzɪdənsi/',
        partOfSpeech: 'noun',
        meaning: 'A program supporting artists, scholars, or professionals to live and work together',
        exampleSentence: 'Welcome to our annual York Innovation Residency!',
        translations: { hi: 'रेजिडेंसी / शोध-कार्य निवास' },
      },
      {
        word: 'trajectory',
        ipa: '/trəˈdʒɛktəri/',
        partOfSpeech: 'noun',
        meaning: 'The path and progression of growth or career development',
        exampleSentence: 'This residency will have a huge impact on your career trajectory.',
        translations: { hi: 'प्रगति का मार्ग / दिशा' },
      },
      {
        word: 'first-rate',
        ipa: '/ˌfɜːstˈreɪt/',
        partOfSpeech: 'adjective',
        meaning: 'Of the highest quality; excellent',
        exampleSentence: 'The historical archives and facilities here are first-rate.',
        translations: { hi: 'प्रथम श्रेणी / उत्कृष्ट' },
      },
      {
        word: 'comprehensive',
        ipa: '/ˌkɒmprɪˈhɛnsɪv/',
        partOfSpeech: 'adjective',
        meaning: 'Including or dealing with all or nearly all elements or aspects of something',
        exampleSentence: 'We have planned a comprehensive schedule of workshops.',
        translations: { hi: 'व्यापक / समग्र' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'While I was travelling from Manchester, trains were delayed due to flooding.',
        functionCategory: 'Narrating Travel & Weather Cause',
        exampleSentence: 'While we were transferring, our train was delayed.',
      },
      {
        phrase: 'The studio flat is lovely, although the radiator needed bleeding.',
        functionCategory: 'Describing Accommodation & Minor Maintenance',
        exampleSentence: 'The flat is great, but the faucet was leaking.',
      },
      {
        phrase: 'If I finish our prototype by Friday, I will present the live demo.',
        functionCategory: 'First Conditional Project Milestone',
        exampleSentence: 'If tests succeed, we will launch next week.',
      },
      {
        phrase: 'I highly recommend a historical drama set in Yorkshire.',
        functionCategory: 'Recommending Cultural Media',
        exampleSentence: 'The film was directed by a renowned local director.',
      },
    ],
    grammar: {
      title: 'Unit 8 Comprehensive Grammar Synthesis',
      conceptExplanation:
        '1. Past Continuous vs Simple: "While I was traveling, the storm hit..."\n2. Cause & Effect: "...delayed due to flooding. As a result, I arrived late."\n3. Problems & Repairs: "The bathroom pipe was leaking and needed to be fixed."\n4. Technology & Daily Life: "I backed up all my research files onto cloud storage."\n5. First Conditional: "If I finish the prototype, I will present it to the board."',
      patternFormula: 'While + [Past Cont], [Past Simple] due to [Noun] | If + [Present Simple], [Subject] + will + [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'While I traveled, it was storm. If I will present, everyone like it.',
          correct: 'While I was traveling, there was a storm. If I present my work, everyone will like it.',
          explanation: 'Use past continuous with "while" and avoid "will" in the First Conditional if-clause.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Dr. Evelyn Sterling',
        text: 'Good evening Alex! Welcome to the York Residency Opening Dinner. How was your journey across Yorkshire today?',
        translation: 'शुभ संध्या एलेक्स! यॉर्क रेजिडेंसी ओपनिंग डिनर में आपका स्वागत है। आज यॉर्कशायर में आपकी यात्रा कैसी रही?',
      },
      {
        speaker: 'You',
        text: 'Good evening Dr. Sterling! Thank you for having me. While I was traveling from Manchester this morning, my train was delayed due to heavy flooding on the tracks. Fortunately, everything was resolved and I arrived safely!',
        translation: 'शुभ संध्या डॉ. स्टर्लिंग! मुझे आमंत्रित करने के लिए धन्यवाद। आज सुबह जब मैं मैनचेस्टर से यात्रा कर रहा था, पटरियों पर भारी बाढ़ के कारण मेरी ट्रेन में देरी हो गई थी। सौभाग्य से, सब कुछ हल हो गया और मैं सुरक्षित पहुंच गया!',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_120_1',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly combines a travel narrative with a weather cause?',
      options: [
        { id: 'opt_1', text: 'While I was taking the train, we were delayed due to severe flooding.', isCorrect: true },
        { id: 'opt_2', text: 'While I took train, delay due to it flooded.', isCorrect: false },
        { id: 'opt_3', text: 'When I am travel, train stopped because rain.', isCorrect: false },
      ],
      correctAnswer: 'While I was taking the train, we were delayed due to severe flooding.',
      explanation: 'Past continuous ("was taking") + past simple passive ("were delayed") + "due to + noun".',
    },
    {
      id: 'cp_a2_120_2',
      type: 'fill_blank',
      prompt: 'Complete the First Conditional: "If I ___ (complete) the research prototype, I will share the results."',
      options: [
        { id: 'opt_1', text: 'complete', isCorrect: true },
        { id: 'opt_2', text: 'will complete', isCorrect: false },
        { id: 'opt_3', text: 'completed', isCorrect: false },
      ],
      correctAnswer: 'complete',
      explanation: 'Use Present Simple in the if-clause.',
    },
    {
      id: 'cp_a2_120_3',
      type: 'multiple_choice',
      prompt: 'Which phrase describes a film’s location and director accurately in passive voice?',
      options: [
        { id: 'opt_1', text: 'The documentary is set in York and was directed by an acclaimed filmmaker.', isCorrect: true },
        { id: 'opt_2', text: 'The documentary setting York and direct by someone.', isCorrect: false },
        { id: 'opt_3', text: 'Film is make in York.', isCorrect: false },
      ],
      correctAnswer: 'The documentary is set in York and was directed by an acclaimed filmmaker.',
      explanation: 'Correct passive participles: "is set in" and "was directed by".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_120_1',
      scenarioContext: 'Recount travel disrupted by bad weather.',
      prompt: 'Build: "While I was traveling the train stopped due to flooding."',
      targetStructure: 'While + subject + was verb-ing + subject + verb + due to + noun',
      wordBank: ['While', 'I', 'was', 'traveling', 'the', 'train', 'stopped', 'due', 'to', 'flooding', 'is', 'because'],
      acceptableSolutions: [
        'While I was traveling the train stopped due to flooding',
        'While I was traveling, the train stopped due to flooding.',
        'While I was traveling the train stopped due to flooding.',
      ],
      explanation: 'Synthesizes past continuous with "due to" cause.',
    },
    {
      id: 'sc_a2_120_2',
      scenarioContext: 'Formulate an ambitious First Conditional capstone statement.',
      prompt: 'Build: "If I finish the project I will present it tomorrow."',
      targetStructure: 'If + subject + verb + object + subject + will + verb + object + time',
      wordBank: ['If', 'I', 'finish', 'the', 'project', 'I', 'will', 'present', 'it', 'tomorrow', 'would', 'am'],
      acceptableSolutions: [
        'If I finish the project I will present it tomorrow',
        'If I finish the project, I will present it tomorrow.',
        'If I finish the project I will present it tomorrow.',
      ],
      explanation: 'First Conditional capstone milestone.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_120_1',
      turnIndex: 1,
      partnerPrompt:
        'Good evening Alex! A very warm welcome to the York Cultural & Innovation Residency dinner in Merchant Adventurers’ Hall. We heard the trans-Pennine railways faced terrible weather today. How was your journey from Manchester?',
      partnerAudioText:
        'Good evening Alex! A very warm welcome to the York Cultural & Innovation Residency dinner in Merchant Adventurers’ Hall. We heard the trans-Pennine railways faced terrible weather today. How was your journey from Manchester?',
      partnerQuestionHindi:
        'शुभ संध्या एलेक्स! मर्चेंट एडवेंचरर्स हॉल में यॉर्क सांस्कृतिक और नवाचार रेजिडेंसी डिनर में आपका बहुत-बहुत स्वागत है। हमने सुना कि ट्रांस-पेनाइन रेलवे को आज भयानक मौसम का सामना करना पड़ा। मैनचेस्टर से आपकी यात्रा कैसी रही?',
      expectedFunction: 'Recount Travel Journey & Weather Interruption (when/while & due to/as a result)',
      contextGoal:
        'Explain that while you were traveling this morning, your train was stopped near Leeds due to track flooding caused by heavy torrential rain; as a result, you were delayed by an hour, but you arrived safely.',
      targetVocabulary: ['while I was traveling from Manchester this morning', 'delayed due to localized track flooding', 'heavy torrential storms', 'as a result arrived an hour late but safely'],
      suggestedResponses: [
        {
          label: 'Challenge Mode',
          text: 'Good evening Dr. Sterling! Thank you for the warm welcome! While I was taking the train from Manchester this morning, we were delayed due to heavy track flooding near Leeds. As a result, the trip took an extra hour, but fortunately I arrived safely and checked in smoothly.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Past Continuous & Travel (while I was traveling / taking train / coming)',
          patterns: ['while', 'taking', 'traveling', 'travelling', 'train', 'manchester', 'journey'],
          required: true,
        },
        {
          name: 'Cause & Impact (due to flooding / rain / delayed / as a result)',
          patterns: ['due to', 'flooding', 'rain', 'delayed', 'as a result', 'storm', 'hour', 'safely'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'due_to_verb_error',
          pattern: /\bdue to it was flooded\b|\bbecause it was flood\b/i,
          errorType: 'grammar',
          message: 'Say "due to heavy flooding" (use a noun phrase after "due to").',
          correctionPattern: 'due to heavy flooding',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_120_1',
        type: 'multiple_choice',
        prompt: 'Which sentence connects travel and weather correctly?',
        options: [
          { id: 'opt_1', text: 'While we were traveling, the train was delayed due to flash flooding.', isCorrect: true },
          { id: 'opt_2', text: 'While we traveled, delay because rain it happened.', isCorrect: false },
          { id: 'opt_3', text: 'When we are travel, train stop.', isCorrect: false },
        ],
        correctAnswer: 'While we were traveling, the train was delayed due to flash flooding.',
        explanation: 'Accurate past continuous narrative clause with cause phrase.',
      },
    },
    {
      id: 'turn_a2_120_2',
      turnIndex: 2,
      partnerPrompt:
        'What an eventful journey! I am glad you made it safely. How are you settling into your residency studio apartment on Micklegate? Is everything comfortable, or did you notice any maintenance issues that need fixing?',
      partnerAudioText:
        'What an eventful journey! I am glad you made it safely. How are you settling into your residency studio apartment on Micklegate? Is everything comfortable, or did you notice any maintenance issues that need fixing?',
      partnerQuestionHindi:
        'कितनी घटनाओं से भरी यात्रा थी! मुझे खुशी है कि आप सुरक्षित पहुंचे। आप मिकलगेट पर अपने रेजिडेंसी स्टूडियो अपार्टमेंट में कैसे बस रहे हैं? क्या सब कुछ आरामदायक है, या आपने किसी रखरखाव संबंधी समस्या पर ध्यान दिया जिसे ठीक करने की आवश्यकता है?',
      expectedFunction: 'Describe Apartment & Report Minor Resolved Fault (radiator bled / helpful caretaker)',
      contextGoal:
        'Describe the studio as spacious and bright; mention that the living room radiator was cold and made a noise, but the caretaker Keith was very friendly, bled the radiator, and fixed it immediately.',
      targetVocabulary: ['studio is bright and spacious', 'radiator was making a rattling sound and needed bleeding', 'caretaker Keith was extremely helpful and punctual', 'everything is now working perfectly'],
      suggestedResponses: [
        {
          label: 'Challenge Mode',
          text: 'The studio is lovely, bright, and very quiet! When I arrived, the radiator in the study was cold and making a noise, so it needed bleeding. However, the caretaker Keith was incredibly helpful and friendly—he fixed it within twenty minutes, and now the flat is wonderfully warm.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Apartment Impression (studio / lovely / bright / comfortable)',
          patterns: ['studio', 'apartment', 'flat', 'lovely', 'bright', 'comfortable', 'quiet', 'settling'],
          required: true,
        },
        {
          name: 'Maintenance & Caretaker (radiator / noise / fixed / bleeding / Keith / friendly)',
          patterns: ['radiator', 'needed', 'fixing', 'bled', 'bleeding', 'noise', 'keith', 'caretaker', 'helpful', 'warm'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_120_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "The radiator was cold and needed ___ (fix)."',
        options: [
          { id: 'opt_1', text: 'fixing', isCorrect: true },
          { id: 'opt_2', text: 'fix', isCorrect: false },
          { id: 'opt_3', text: 'fixedly', isCorrect: false },
        ],
        correctAnswer: 'fixing',
        explanation: '"Needed fixing" (need + gerund) expresses passive repair requirement.',
      },
    },
    {
      id: 'turn_a2_120_3',
      turnIndex: 3,
      partnerPrompt:
        'Keith is wonderful at keeping our properties in top shape! Now, looking forward to your three-month residency project: what are your primary technical milestones, and what do you hope to achieve if everything goes according to plan?',
      partnerAudioText:
        'Keith is wonderful at keeping our properties in top shape! Now, looking forward to your three-month residency project: what are your primary technical milestones, and what do you hope to achieve if everything goes according to plan?',
      partnerQuestionHindi:
        'कीथ हमारी संपत्तियों को बेहतरीन स्थिति में रखने में बहुत अच्छे हैं! अब, आपके तीन महीने के रेजिडेंसी प्रोजेक्ट को देखते हुए: आपके प्राथमिक तकनीकी मील के पत्थर क्या हैं, और यदि सब कुछ योजना के अनुसार होता है तो आप क्या हासिल करने की उम्मीद करते हैं?',
      expectedFunction: 'Outline Tech Project Milestones & First Conditional Ambition (back up / set up / if I complete... will launch)',
      contextGoal:
        'Explain that you backed up all your data and set up your development environment today; if you complete the design prototype by month two, you will launch an interactive cultural heritage app for York visitors.',
      targetVocabulary: ['set up my development workstation and cloud backup', 'building an interactive cultural heritage web application', 'if I complete the user testing by month two', 'will launch a public beta demo for tourists'],
      suggestedResponses: [
        {
          label: 'Challenge Mode',
          text: 'Today I backed up all my project repositories and set up my cloud development environment. My main project is building an interactive cultural map application. If I complete user testing by month two, I will launch a live public prototype for museum visitors across York!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Tech Setup & Workflow (backed up / set up / repositories / cloud / map)',
          patterns: ['backed up', 'back up', 'set up', 'cloud', 'environment', 'workstation', 'interactive', 'app', 'map'],
          required: true,
        },
        {
          name: 'First Conditional Milestone (if I complete / pass / will launch / present)',
          patterns: ['if i complete', 'if i finish', 'if', 'will launch', 'will present', 'will show', 'month two', 'prototype', 'tourists'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_120_3',
        type: 'multiple_choice',
        prompt: 'Which First Conditional sentence correctly outlines a project goal?',
        options: [
          { id: 'opt_1', text: 'If I finish the prototype next month, I will present it at the exhibition.', isCorrect: true },
          { id: 'opt_2', text: 'If I will finish prototype, I present.', isCorrect: false },
          { id: 'opt_3', text: 'If finish, I am present.', isCorrect: false },
        ],
        correctAnswer: 'If I finish the prototype next month, I will present it at the exhibition.',
        explanation: 'Present Simple in the condition + will in the outcome.',
      },
    },
    {
      id: 'turn_a2_120_4',
      turnIndex: 4,
      partnerPrompt:
        'A cultural heritage application for York is a magnificent project! On Saturday evening, we are hosting a welcoming film night for all international fellows. Could you recommend a great movie or series set in northern England that our group should watch together?',
      partnerAudioText:
        'A cultural heritage application for York is a magnificent project! On Saturday evening, we are hosting a welcoming film night for all international fellows. Could you recommend a great movie or series set in northern England that our group should watch together?',
      partnerQuestionHindi:
        'यॉर्क के लिए एक सांस्कृतिक विरासत ऐप एक शानदार प्रोजेक्ट है! शनिवार शाम को, हम सभी अंतरराष्ट्रीय अध्येताओं के लिए एक स्वागत फिल्म रात की मेजबानी कर रहे हैं। क्या आप उत्तरी इंग्लैंड में सेट की गई किसी बेहतरीन फिल्म या श्रृंखला की सिफारिश कर सकते हैं जिसे हमारे समूह को एक साथ देखना चाहिए?',
      expectedFunction: 'Recommend Regional Media with Passive Descriptors (set in Yorkshire / directed by / recommend)',
      contextGoal:
        'Recommend "The Secret Garden" or a historical drama set in the Yorkshire moors and directed by a celebrated British filmmaker; express excitement about attending Saturday’s film night.',
      targetVocabulary: ['recommend the classic drama set in the Yorkshire countryside', 'directed by an acclaimed British director', 'breathtaking landscapes and heartwarming storyline', 'look forward to joining the film night on Saturday'],
      suggestedResponses: [
        {
          label: 'Challenge Mode',
          text: 'I highly recommend "The Secret Garden". It is set in the historic Yorkshire countryside and was directed by an acclaimed British filmmaker. The cinematography of the moors is breathtaking! I would love to join everyone for film night on Saturday evening.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Recommendation & Passive Details (recommend / set in Yorkshire / directed by / movie)',
          patterns: ['recommend', 'set in', 'yorkshire', 'directed by', 'film', 'movie', 'drama', 'secret garden', 'cinematography'],
          required: true,
        },
        {
          name: 'Closing Enthusiasm (join / saturday / film night / look forward / thank you)',
          patterns: ['join', 'saturday', 'film night', 'look forward', 'thank you', 'dr sterling', 'delighted'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_120_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "The film is ___ (set) in the Yorkshire moors."',
        options: [
          { id: 'opt_1', text: 'set', isCorrect: true },
          { id: 'opt_2', text: 'setting', isCorrect: false },
          { id: 'opt_3', text: 'sat', isCorrect: false },
        ],
        correctAnswer: 'set',
        explanation: '"Is set in" uses the past participle "set".',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 70,
  },
};
