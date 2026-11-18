import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_115: ConversationDefinition = {
  id: 'conv_a2_115',
  title: 'Mid-Unit Review & Communication Challenge: St. Jude Community Town Hall Meeting',
  cefr: 'A2',
  unitId: 'unit_a2_8',
  lessonLinks: ['lesson_a2_8_115'],
  estimatedMinutes: 6,
  scenario:
    'You are taking part in the annual St. Jude Community Town Hall in Bristol, chaired by Brenda Lawson. The local council has been awarded a £15,000 neighborhood improvement grant. You are speaking on the open debate floor to compare two proposals—modernizing the local park playground versus installing traffic-calming speed bumps and solar lighting on Victoria Avenue—and helping the committee reach a fair compromise.',
  communicativeGoals: [
    'Express personal viewpoints and civic opinions using "In my opinion...", "I believe that...", and "From my perspective..."',
    'Compare neighborhood investment options using comparative and superlative structures ("safer than", "the most beneficial", "more urgent than")',
    'Synthesize previous unit skills: reporting problems (108), expressing needs/repairs, making practical suggestions (110), and proposing compromise solutions ("Why don’t we divide the budget...")',
    'Engage actively in a semi-formal town hall debate with minimal prompting scaffolding',
  ],
  canDoStatements: [
    'Can give reasons and explanations for opinions and proposals in a small community meeting (CEFR A2)',
    'Can compare different proposals and justify preferences clearly',
    'Can propose practical compromises to resolve differences of opinion among neighbors',
  ],
  characters: [
    {
      id: 'char_brenda_lawson',
      name: 'Brenda Lawson',
      role: 'Community Council Chairperson',
      avatar: '🏛️',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'proposal',
        ipa: '/prəˈpəʊzəl/',
        partOfSpeech: 'noun',
        meaning: 'A formal plan or suggestion put forward for consideration by others',
        exampleSentence: 'Both proposals have significant benefits for local residents.',
        translations: { hi: 'प्रस्ताव' },
      },
      {
        word: 'compromise',
        ipa: '/ˈkɒmprəmaɪz/',
        partOfSpeech: 'noun',
        meaning: 'An agreement reached by each side making concessions',
        exampleSentence: 'We can reach a sensible compromise by dividing the grant between both projects.',
        translations: { hi: 'समझौता / सुलह' },
      },
      {
        word: 'renovation',
        ipa: '/ˌrɛnəˈveɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'The process of improving a broken, damaged, or outdated structure',
        exampleSentence: 'The playground equipment is rusty and urgently needs renovation.',
        translations: { hi: 'नवीनीकरण / जीर्णोद्धार' },
      },
      {
        word: 'traffic-calming',
        ipa: '/ˈtræfɪk ˈkɑːmɪŋ/',
        partOfSpeech: 'noun',
        meaning: 'Measures such as speed bumps used to slow down motor vehicles in residential streets',
        exampleSentence: 'Traffic-calming bumps on Victoria Avenue would protect children walking to school.',
        translations: { hi: 'यातायात नियंत्रण उपाय (गति कम करना)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'In my opinion, road safety is the most urgent priority.',
        functionCategory: 'Expressing Clear Opinion',
        exampleSentence: 'In my view, upgrading street lighting is essential.',
      },
      {
        phrase: 'While the playground needs repairs, speed bumps are safer for everyone.',
        functionCategory: 'Comparing Priorities (While + contrast)',
        exampleSentence: 'While the park is popular, road safety prevents accidents.',
      },
      {
        phrase: 'Why don’t we allocate £10,000 to safety and £5,000 to the park?',
        functionCategory: 'Proposing Compromise Budget',
        exampleSentence: 'How about splitting the funds between both initiatives?',
      },
      {
        phrase: 'I fully support this balanced plan.',
        functionCategory: 'Building Consensus',
        exampleSentence: 'This proposal satisfies the needs of all residents.',
      },
    ],
    grammar: {
      title: 'Debating Opinions & Comparative Compromises in A2 English',
      conceptExplanation:
        '1. Stating Viewpoints: "In my opinion..." / "I believe that..." / "From my point of view..."\n2. Comparative Justifications: "[Option A] is more important / safer / more cost-effective than [Option B]."\n3. Expressing Necessity & Repairs: "The swings need fixing" (gerund) / "The street needs to be made safer."\n4. Proposing a middle ground: "Could we split the budget so both projects receive funding?"',
      patternFormula: 'In my opinion, [Subject] is [Comparative / Superlative] because [Reason] | Why don\'t we + [Compromise action]?',
      contrastExamples: [
        {
          incorrect: 'I think the street is more safe than park is cheap.',
          correct: 'I believe speed bumps make the street safer than before.',
          explanation: 'Use single comparative form: "safer than" (not "more safe").',
        },
        {
          incorrect: 'Why we not divide the money?',
          correct: 'Why don’t we divide the money between both projects?',
          explanation: 'Standard suggestion pattern: "Why don’t we + verb".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Brenda Lawson',
        text: 'Welcome neighbors! We have £15,000 in council grant funding to allocate. Who would like to open the debate on our two proposals?',
        translation: 'पड़ोसियों का स्वागत है! हमारे पास आवंटित करने के लिए £15,000 का परिषद अनुदान कोष है। हमारे दो प्रस्तावों पर बहस कौन शुरू करना चाहेगा?',
      },
      {
        speaker: 'You',
        text: 'Thank you Brenda. In my opinion, both the playground and Victoria Avenue require attention. However, installing traffic-calming speed bumps is the most urgent priority to protect school children.',
        translation: 'धन्यवाद ब्रेंडा। मेरी राय में, खेल के मैदान और विक्टोरिया एवेन्यू दोनों पर ध्यान देने की आवश्यकता है। हालांकि, स्कूली बच्चों की सुरक्षा के लिए ट्रैफिक-धीमा करने वाले स्पीड बम्प लगाना सबसे ज़रूरी प्राथमिकता है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_115_1',
      type: 'multiple_choice',
      prompt: 'Which phrase introduces a respectful personal opinion in a meeting?',
      options: [
        { id: 'opt_1', text: 'In my opinion, we should prioritize pedestrian safety.', isCorrect: true },
        { id: 'opt_2', text: 'Listen to me because I am right.', isCorrect: false },
        { id: 'opt_3', text: 'Everyone must agree with me.', isCorrect: false },
      ],
      correctAnswer: 'In my opinion, we should prioritize pedestrian safety.',
      explanation: '"In my opinion..." introduces a constructive viewpoint.',
    },
    {
      id: 'cp_a2_115_2',
      type: 'fill_blank',
      prompt: 'Complete the comparative sentence: "Installing solar streetlights is ___ (safe) than leaving dark corners."',
      options: [
        { id: 'opt_1', text: 'safer', isCorrect: true },
        { id: 'opt_2', text: 'more safer', isCorrect: false },
        { id: 'opt_3', text: 'most safe', isCorrect: false },
      ],
      correctAnswer: 'safer',
      explanation: 'Short adjective "safe" takes "-er": "safer than".',
    },
    {
      id: 'cp_a2_115_3',
      type: 'multiple_choice',
      prompt: 'What is the most effective phrasing to suggest a budget compromise?',
      options: [
        { id: 'opt_1', text: 'Why don’t we divide the £15,000 grant between both urgent projects?', isCorrect: true },
        { id: 'opt_2', text: 'Give all money to my street.', isCorrect: false },
        { id: 'opt_3', text: 'Park is useless.', isCorrect: false },
      ],
      correctAnswer: 'Why don’t we divide the £15,000 grant between both urgent projects?',
      explanation: '"Why don’t we divide..." offers a collaborative compromise.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_115_1',
      scenarioContext: 'Express your view on community priorities.',
      prompt: 'Build: "In my opinion road safety is the most urgent priority."',
      targetStructure: 'In my opinion + subject + is the most + adjective + noun',
      wordBank: ['In', 'my', 'opinion', 'road', 'safety', 'is', 'the', 'most', 'urgent', 'priority', 'safer', 'was'],
      acceptableSolutions: [
        'In my opinion road safety is the most urgent priority',
        'In my opinion, road safety is the most urgent priority.',
        'In my opinion road safety is the most urgent priority.',
      ],
      explanation: 'Superlative opinion statement.',
    },
    {
      id: 'sc_a2_115_2',
      scenarioContext: 'Propose dividing funding between two neighborhood needs.',
      prompt: 'Build: "Why don\'t we split the grant between both projects?"',
      targetStructure: 'Why don\'t we + verb + noun phrase + between + both projects',
      wordBank: ['Why', 'don\'t', 'we', 'split', 'the', 'grant', 'between', 'both', 'projects', 'how', 'about'],
      acceptableSolutions: [
        'Why don\'t we split the grant between both projects',
        'Why don\'t we split the grant between both projects?',
        'Why don\'t we split the grant between both projects.',
      ],
      explanation: 'Compromise suggestion structure.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_115_1',
      turnIndex: 1,
      partnerPrompt:
        'Good evening everyone, thank you for attending the St. Jude Town Hall meeting! We have a £15,000 municipal grant to invest. Proposal A is renovating the Victoria Park playground, and Proposal B is installing speed bumps and solar lights on Victoria Avenue. Who would like to share their view first?',
      partnerAudioText:
        'Good evening everyone, thank you for attending the St. Jude Town Hall meeting! We have a £15,000 municipal grant to invest. Proposal A is renovating the Victoria Park playground, and Proposal B is installing speed bumps and solar lights on Victoria Avenue. Who would like to share their view first?',
      partnerQuestionHindi:
        'सभी को शुभ संध्या, सेंट जूड टाउन हॉल बैठक में भाग लेने के लिए धन्यवाद! हमारे पास निवेश करने के लिए £15,000 का नगरपालिका अनुदान है। प्रस्ताव A विक्टोरिया पार्क खेल के मैदान का नवीनीकरण है, और प्रस्ताव B विक्टोरिया एवेन्यू पर स्पीड बम्प और सोलर लाइट लगाना है। कौन सबसे पहले अपने विचार साझा करना चाहेगा?',
      expectedFunction: 'State Civic Opinion & Compare Needs (In my opinion / safety vs park)',
      contextGoal:
        'Speak up from the floor; express that in your opinion both projects are valuable, but road safety on Victoria Avenue is currently more urgent because speeding cars endanger children walking to school.',
      targetVocabulary: ['in my opinion both proposals are valuable', 'road safety on Victoria Avenue is more urgent', 'speeding cars endanger pedestrians and school children', 'installing speed bumps'],
      suggestedResponses: [
        {
          label: 'Challenge Mode',
          text: 'Good evening Brenda and neighbors. In my opinion, both proposals are very important. However, installing speed bumps and solar lighting on Victoria Avenue is currently more urgent because speeding cars make the walk to school dangerous for local children.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Opinion Starter (in my opinion / i believe / view)',
          patterns: ['in my opinion', 'i believe', 'in my view', 'i think', 'perspective'],
          required: true,
        },
        {
          name: 'Comparison & Priority (victoria avenue / safety / speed bumps / children / urgent)',
          patterns: ['victoria avenue', 'safety', 'speed bumps', 'speeding', 'urgent', 'children', 'more important', 'more urgent'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'more_urgent_than_error',
          pattern: /\bmore urgenter\b|\bmore safer\b/i,
          errorType: 'grammar',
          message: 'Use "more urgent" for long adjectives and "safer" for short adjectives.',
          correctionPattern: 'more urgent / safer',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_115_1',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly expresses a comparative priority?',
        options: [
          { id: 'opt_1', text: 'Road safety is more urgent than repainting the fence.', isCorrect: true },
          { id: 'opt_2', text: 'Road safety is more urgenter.', isCorrect: false },
          { id: 'opt_3', text: 'Road safety is much urgent.', isCorrect: false },
        ],
        correctAnswer: 'Road safety is more urgent than repainting the fence.',
        explanation: 'Use "more + long adjective + than".',
      },
    },
    {
      id: 'turn_a2_115_2',
      turnIndex: 2,
      partnerPrompt:
        'Thank you for raising that valid safety concern. However, Mrs. Jenkins from the Parents Association argues that the playground swings are broken and the wooden climbing frame is unsafe for toddlers. How can we balance child recreation with traffic calming?',
      partnerAudioText:
        'Thank you for raising that valid safety concern. However, Mrs. Jenkins from the Parents Association argues that the playground swings are broken and the wooden climbing frame is unsafe for toddlers. How can we balance child recreation with traffic calming?',
      partnerQuestionHindi:
        'उस वैध सुरक्षा चिंता को उठाने के लिए धन्यवाद। हालाँकि, पेरेंट्स एसोसिएशन की श्रीमती जेनकिंस का तर्क है कि खेल के मैदान के झूले टूटे हुए हैं और लकड़ी का चढ़ाई वाला ढांचा छोटे बच्चों के लिए असुरक्षित है। हम बाल मनोरंजन को यातायात नियंत्रण के साथ कैसे संतुलित कर सकते हैं?',
      expectedFunction: 'Propose Practical Budget Compromise (Split £15,000 grant)',
      contextGoal:
        'Acknowledge Mrs. Jenkins\' point about broken equipment; propose a compromise to split the £15,000 grant—spending £9,000 on road safety and £6,000 on repairing and repainting the existing playground equipment.',
      targetVocabulary: ['understand Mrs. Jenkins\' concern about broken swings', 'why don’t we split the £15,000 grant', 'allocate £9,000 for speed bumps and streetlights', 'allocate £6,000 for essential playground repairs'],
      suggestedResponses: [
        {
          label: 'Challenge Mode',
          text: 'I completely understand Mrs. Jenkins’ point—the playground equipment certainly needs repairing. Why don’t we split the £15,000 grant? We could allocate £9,000 for two speed bumps and solar lights on Victoria Avenue, and use the remaining £6,000 to fix the swings and make the playground safe.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Acknowledge Playground Need (swings / repairs / broken / agree)',
          patterns: ['understand', 'agree', 'jenkins', 'playground', 'swings', 'repairs', 'fixing', 'safe'],
          required: true,
        },
        {
          name: 'Split Budget Compromise (split / divide / £9,000 / £6,000 / both)',
          patterns: ['why don’t we', 'split', 'divide', 'share', 'both', '9,000', '6,000', '15,000', 'grant'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_115_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Why don’t we ___ (split) the budget between both projects?"',
        options: [
          { id: 'opt_1', text: 'split', isCorrect: true },
          { id: 'opt_2', text: 'splitting', isCorrect: false },
          { id: 'opt_3', text: 'splits', isCorrect: false },
        ],
        correctAnswer: 'split',
        explanation: 'Use the base verb after "Why don’t we".',
      },
    },
    {
      id: 'turn_a2_115_3',
      turnIndex: 3,
      partnerPrompt:
        'That is a very sensible compromise! Both Mrs. Jenkins and the neighborhood watch team are nodding in agreement. If the council adopts this split budget, could you suggest how we can involve local volunteer residents to help paint the park benches and save labor costs?',
      partnerAudioText:
        'That is a very sensible compromise! Both Mrs. Jenkins and the neighborhood watch team are nodding in agreement. If the council adopts this split budget, could you suggest how we can involve local volunteer residents to help paint the park benches and save labor costs?',
      partnerQuestionHindi:
        'यह एक बहुत ही समझदारी भरा समझौता है! श्रीमती जेनकिंस और नेबरहुड वॉच टीम दोनों सहमति में सिर हिला रहे हैं। यदि परिषद इस विभाजित बजट को अपनाती है, तो क्या आप सुझाव दे सकते हैं कि हम पार्क के बेंचों को पेंट करने और श्रम लागत बचाने में मदद के लिए स्थानीय स्वयंसेवी निवासियों को कैसे शामिल कर सकते हैं?',
      expectedFunction: 'Suggest Community Volunteer Action Day (weekend cleanup & painting)',
      contextGoal:
        'Suggest organizing a Community Volunteer Weekend in May where neighbors bring paintbrushes and tools to paint benches and plant flowers together.',
      targetVocabulary: ['organize a Community Volunteer Weekend', 'neighbors can bring brushes and tools', 'paint the benches and plant flowerbeds', 'foster great community spirit'],
      suggestedResponses: [
        {
          label: 'Challenge Mode',
          text: 'How about organizing a Community Action Weekend next month? We could invite resident volunteers and families to bring paintbrushes and gardening tools to paint the park benches and plant flowers together. It would save labor costs and build fantastic community spirit!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Volunteer Event Suggestion (weekend / community / action day / volunteer)',
          patterns: ['how about', 'organizing', 'weekend', 'volunteer', 'community', 'families', 'event'],
          required: true,
        },
        {
          name: 'Activities & Benefits (paint / benches / flowers / save costs / spirit)',
          patterns: ['paint', 'benches', 'tools', 'flowers', 'plant', 'save', 'costs', 'spirit', 'together'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_115_3',
        type: 'multiple_choice',
        prompt: 'Which suggestion for a community volunteer day is phrased most appropriately?',
        options: [
          { id: 'opt_1', text: 'How about organizing a volunteer painting day on Saturday morning?', isCorrect: true },
          { id: 'opt_2', text: 'All people must come paint.', isCorrect: false },
          { id: 'opt_3', text: 'We make paint now.', isCorrect: false },
        ],
        correctAnswer: 'How about organizing a volunteer painting day on Saturday morning?',
        explanation: '"How about + -ing" is an inviting community suggestion.',
      },
    },
    {
      id: 'turn_a2_115_4',
      turnIndex: 4,
      partnerPrompt:
        'Splendid idea! The motion to split the £15,000 grant and host a volunteer park day has just passed unanimously with 28 votes in favor! Thank you Alex for facilitating such a constructive outcome for St. Jude neighborhood!',
      partnerAudioText:
        'Splendid idea! The motion to split the £15,000 grant and host a volunteer park day has just passed unanimously with 28 votes in favor! Thank you Alex for facilitating such a constructive outcome for St. Jude neighborhood!',
      partnerQuestionHindi:
        'शानदार विचार! £15,000 के अनुदान को विभाजित करने और एक स्वयंसेवी पार्क दिवस आयोजित करने का प्रस्ताव 28 मतों के साथ सर्वसम्मति से पारित हो गया है! सेंट जूड पड़ोस के लिए इतना रचनात्मक परिणाम संभव बनाने के लिए धन्यवाद एलेक्स!',
      expectedFunction: 'Celebrate Democratic Vote & Express Neighborhood Solidarity',
      contextGoal:
        'Thank Brenda and fellow residents for their collaboration, express pride in the neighborhood, and look forward to volunteering on the park cleanup day.',
      targetVocabulary: ['thank you Brenda and everyone', 'thrilled that the compromise passed unanimously', 'look forward to volunteering on park day', 'wonderful outcome for our community'],
      suggestedResponses: [
        {
          label: 'Challenge Mode',
          text: 'Thank you Brenda and all our neighbors! I am thrilled that we reached a unanimous decision that benefits both child safety and our park. I look forward to rolling up my sleeves on our volunteer weekend. Have a wonderful evening everyone!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Thanks & Celebration',
          patterns: ['thank you', 'thanks', 'brenda', 'neighbors', 'unanimous', 'decision', 'volunteer', 'community', 'wonderful evening'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_115_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I am thrilled that we ___ (reach) a unanimous decision!"',
        options: [
          { id: 'opt_1', text: 'reached', isCorrect: true },
          { id: 'opt_2', text: 'reach', isCorrect: false },
          { id: 'opt_3', text: 'reaching', isCorrect: false },
        ],
        correctAnswer: 'reached',
        explanation: 'Use past simple "reached" for the completed vote action.',
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
