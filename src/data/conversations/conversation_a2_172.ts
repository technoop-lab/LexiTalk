import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_172: ConversationDefinition = {
  id: 'conv_a2_172',
  title: 'Cross-Cultural Etiquette, Global Collaboration & Diplomatic Nuance',
  cefr: 'A2',
  unitId: 'unit_a2_12',
  lessonLinks: ['lesson_a2_12_172'],
  estimatedMinutes: 5,
  scenario:
    'You are in the international operations lounge at Global Horizons in London with Senior People & Culture Director Maya Tanaka. Your multi-regional team comprises engineers from Tokyo, design strategists from Berlin, and account leads from San Francisco. You need to discuss cultural communication styles, manage indirect versus direct feedback norms, use diplomatic hedging and softening language ("It might be helpful to...", "We could perhaps consider..."), and establish inclusive team norms across time zones.',
  communicativeGoals: [
    'Discuss cross-cultural workplace dynamics and communication styles respectfully',
    'Use diplomatic hedging phrases and softeners ("It might be beneficial to...", "Perhaps we could...")',
    'Address direct versus indirect feedback sensitivities in diverse global teams',
    'Establish inclusive meeting schedules, async communication norms, and cross-cultural protocols',
  ],
  canDoStatements: [
    'Can discuss cultural differences in workplace communication politely in English',
    'Can use hedging language and modal softeners to make diplomatic suggestions',
    'Can collaborate effectively with international colleagues respecting time zones and cultural norms',
  ],
  characters: [
    {
      id: 'char_maya_tanaka',
      name: 'Maya Tanaka',
      role: 'Director of Global People & Culture',
      avatar: '🌏',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'etiquette',
        ipa: '/ˈetɪket/',
        partOfSpeech: 'noun',
        meaning: 'The customary code of polite behavior in society or among members of a particular profession',
        exampleSentence: 'Observing international business etiquette helps build long-term trust.',
        translations: { hi: 'शिष्टाचार / कार्यस्थल शिष्टाचार' },
      },
      {
        word: 'diplomatic',
        ipa: '/ˌdɪpləˈmætɪk/',
        partOfSpeech: 'adjective',
        meaning: 'Having or showing an ability to deal with people in a sensitive and tactful way',
        exampleSentence: 'Using diplomatic phrasing prevents unnecessary misunderstandings in multi-regional teams.',
        translations: { hi: 'कूटनीतिक / विनम्र एवं विचारशील' },
      },
      {
        word: 'nuance',
        ipa: '/ˈnjuːɑːns/',
        partOfSpeech: 'noun',
        meaning: 'A subtle difference in or shade of meaning, expression, or sound',
        exampleSentence: 'Recognizing cultural nuances makes cross-border communication much smoother.',
        translations: { hi: 'बारीकी / सूक्ष्म अंतर' },
      },
      {
        word: 'inclusive',
        ipa: '/ɪnˈkluːsɪv/',
        partOfSpeech: 'adjective',
        meaning: 'Including or encompassing different groups, cultures, and viewpoints',
        exampleSentence: 'We created an inclusive schedule that accommodates Tokyo, Berlin, and California time zones.',
        translations: { hi: 'समावेशी / सभी को शामिल करने वाला' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'It might be helpful to establish asynchronous update channels for our Tokyo colleagues.',
        functionCategory: 'Diplomatic Suggestions with "It might be helpful to"',
        exampleSentence: 'It might be useful to share meeting notes in advance.',
      },
      {
        phrase: 'Perhaps we could consider rotating our meeting times to ensure fairness across time zones.',
        functionCategory: 'Hedging and Softening with "Perhaps we could consider"',
        exampleSentence: 'Perhaps we could try a weekly recorded video update.',
      },
      {
        phrase: 'Some team cultures prefer indirect, gentle feedback over blunt direct critique.',
        functionCategory: 'Describing Cultural Communication Norms',
        exampleSentence: 'Colleagues value consensus before making final decisions.',
      },
      {
        phrase: 'Could we possibly clarify the decision-making process to avoid ambiguity?',
        functionCategory: 'Polite Inquiries on Team Protocols',
        exampleSentence: 'Could we possibly define the handover rules?',
      },
    ],
    grammar: {
      title: 'Diplomatic Softeners, Hedging Modals & Subjunctive Politeness',
      conceptExplanation:
        '1. Hedging Phrases with Impersonal Subjects: Soften recommendations using "It might be + Adjective + to + Base Verb":\n   - "It might be beneficial to review the feedback guidelines."\n   - "It would be prudent to rotate call schedules."\n2. Modal Softeners: "Perhaps we could consider + Gerund (-ing)" (e.g., "Perhaps we could consider adopting asynchronous standups").\n3. Minimizers & Polite Modifiers: "slightly", "a bit", "possibly", "rather" to soften direct disagreement (e.g., "That approach might be slightly challenging for remote members").',
      patternFormula: 'It might be [adjective: helpful / prudent / beneficial] + to [Base Verb] | Perhaps we could consider + [Verb-ing]',
      contrastExamples: [
        {
          incorrect: 'You must change meeting time because Tokyo people hate direct feedback and late hours.',
          correct: 'It might be beneficial to rotate our call times, as our Tokyo colleagues might prefer asynchronous updates.',
          explanation: 'Use impersonal hedging and diplomatic qualifiers rather than blunt generalizations.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Maya Tanaka',
        text: 'Welcome! Our global distributed team has grown across three continents. How can we ensure our communication remains respectful, inclusive, and culturally sensitive?',
        translation: 'स्वागत है! हमारी वैश्विक वितरित टीम तीन महाद्वीपों में बढ़ गई है। हम यह कैसे सुनिश्चित कर सकते हैं कि हमारा संचार सम्मानजनक, समावेशी और सांस्कृतिक रूप से संवेदनशील बना रहे?',
      },
      {
        speaker: 'You',
        text: 'It might be helpful to rotate our weekly sync times, and perhaps we could establish written async documentation to support different cultural communication styles.',
        translation: 'हमारे साप्ताहिक सिंक समय को घुमाना मददगार हो सकता है, और शायद हम विभिन्न सांस्कृतिक संचार शैलियों का समर्थन करने के लिए लिखित एसिंक्रोनस दस्तावेज़ीकरण स्थापित कर सकते हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_172_1',
      type: 'fill_blank',
      prompt: 'Complete the diplomatic recommendation: "It might be ___ (helpful to adopt / helpful adopt) written briefs before each cross-regional call."',
      options: [
        { id: 'opt_1', text: 'helpful to adopt', isCorrect: true },
        { id: 'opt_2', text: 'helpful adopt', isCorrect: false },
        { id: 'opt_3', text: 'help adopting', isCorrect: false },
      ],
      correctAnswer: 'helpful to adopt',
      explanation: 'Formula: "It might be + adjective + to + base verb".',
    },
    {
      id: 'cp_a2_172_2',
      type: 'multiple_choice',
      prompt: 'Which sentence uses modal hedging and gerund correctly?',
      options: [
        { id: 'opt_1', text: 'Perhaps we could consider rotating our global meeting slots.', isCorrect: true },
        { id: 'opt_2', text: 'Perhaps we could consider to rotate our global meeting slots.', isCorrect: false },
        { id: 'opt_3', text: 'Perhaps we can considering rotating meeting slots.', isCorrect: false },
      ],
      correctAnswer: 'Perhaps we could consider rotating our global meeting slots.',
      explanation: '"consider + gerund (-ing)" is the correct grammatical structure.',
    },
    {
      id: 'cp_a2_172_3',
      type: 'multiple_choice',
      prompt: 'Which phrase describes feedback differences with diplomatic tact?',
      options: [
        { id: 'opt_1', text: 'It might be prudent to frame constructive feedback gently to respect varied communication norms.', isCorrect: true },
        { id: 'opt_2', text: 'Some people are too sensitive and cannot take direct criticism.', isCorrect: false },
        { id: 'opt_3', text: 'Everyone must speak loud and aggressive in meetings.', isCorrect: false },
      ],
      correctAnswer: 'It might be prudent to frame constructive feedback gently to respect varied communication norms.',
      explanation: 'Demonstrates professional cultural sensitivity and diplomatic vocabulary.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_172_1',
      scenarioContext: 'Make a diplomatic suggestion using "It might be beneficial to".',
      prompt: 'Build: "It might be beneficial to rotate our meeting schedules."',
      targetStructure: 'It might be beneficial to rotate our meeting schedules',
      wordBank: ['It', 'might', 'be', 'beneficial', 'to', 'rotate', 'our', 'meeting', 'schedules', 'rotating', 'is'],
      acceptableSolutions: [
        'It might be beneficial to rotate our meeting schedules.',
      ],
      explanation: 'Hedging structure with impersonal "It might be beneficial to...".',
    },
    {
      id: 'sc_a2_172_2',
      scenarioContext: 'Propose asynchronous updates using "Perhaps we could consider".',
      prompt: 'Build: "Perhaps we could consider introducing asynchronous updates."',
      targetStructure: 'Perhaps we could consider introducing asynchronous updates',
      wordBank: ['Perhaps', 'we', 'could', 'consider', 'introducing', 'asynchronous', 'updates', 'to', 'introduce', 'can'],
      acceptableSolutions: [
        'Perhaps we could consider introducing asynchronous updates.',
      ],
      explanation: '"Perhaps we could consider + gerund".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_172_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello! With team members spread between Japan, Germany, and the United States, we are experiencing some friction regarding meeting times and speaking styles. How might we improve our team coordination diplomatically?',
      partnerAudioText:
        'Hello! With team members spread between Japan, Germany, and the United States, we are experiencing some friction regarding meeting times and speaking styles. How might we improve our team coordination diplomatically?',
      partnerQuestionHindi:
        'नमस्ते! जापान, जर्मनी और संयुक्त राज्य अमेरिका के बीच फैले टीम के सदस्यों के साथ, हम बैठक के समय और बोलने की शैली के संबंध में कुछ घर्षण का अनुभव कर रहे हैं। हम कूटनीतिक रूप से अपने टीम समन्वय में कैसे सुधार कर सकते हैं?',
      expectedFunction: 'Propose Diplomatic Solutions with "It might be helpful to" and "Perhaps we could consider"',
      contextGoal:
        'Suggest rotating meeting schedules and adopting asynchronous written summaries to respect all time zones.',
      targetVocabulary: ['It might be helpful to rotate meeting times', 'Perhaps we could consider asynchronous updates', 'respect time zones'],
      suggestedResponses: [
        {
          label: 'Diplomatic Hedging & Time Zone Rotation',
          text: 'Hello, Maya. It might be helpful to rotate our weekly sync schedule so no single region is forced into late-night calls. Furthermore, perhaps we could consider adopting asynchronous video standups.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Inclusive Communication Suggestion',
          text: 'It would be beneficial to record all key presentations and provide detailed written agendas in advance. That way, team members across all time zones can participate equally.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Hedging / Softener (it might be / it would be / perhaps we could / consider / helpful to / beneficial)',
          patterns: ['it might be', 'it would be', 'perhaps we could', 'consider', 'helpful to', 'beneficial', 'prudent'],
          required: true,
        },
        {
          name: 'Coordination Solution (rotate / meeting times / async / asynchronous / time zones / agendas / recorded)',
          patterns: ['rotate', 'meeting times', 'async', 'asynchronous', 'time zones', 'agendas', 'recorded', 'schedule'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_hedging_infinitive',
          pattern: 'it might be helpful rotate|it might be beneficial rotate',
          errorType: 'grammar',
          message: 'Remember the "to-infinitive" after adjectives: "It might be helpful to rotate..."',
          correctionPattern: 'It might be helpful to rotate our meeting times',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_172_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "It might be prudent ___ (to record / record) all plenary sessions."',
        options: [
          { id: 'opt_1', text: 'to record', isCorrect: true },
          { id: 'opt_2', text: 'record', isCorrect: false },
          { id: 'opt_3', text: 'recording', isCorrect: false },
        ],
        correctAnswer: 'to record',
        explanation: 'Use "to + base verb" following "It might be prudent".',
      },
    },
    {
      id: 'turn_a2_172_2',
      turnIndex: 2,
      partnerPrompt:
        'That addresses time zones nicely. Now regarding feedback: some colleagues express their opinions very directly, which can feel blunt or confrontational to colleagues who value consensus and indirect harmony. How can we bridge this gap?',
      partnerAudioText:
        'That addresses time zones nicely. Now regarding feedback: some colleagues express their opinions very directly, which can feel blunt or confrontational to colleagues who value consensus and indirect harmony. How can we bridge this gap?',
      partnerQuestionHindi:
        'यह समय क्षेत्रों को अच्छी तरह से संबोधित करता है। अब फीडबैक के संबंध में: कुछ सहयोगी अपनी राय बहुत सीधे व्यक्त करते हैं, जो उन सहयोगियों के लिए कुंद या टकराव जैसा लग सकता है जो सर्वसम्मति और अप्रत्यक्ष सद्भाव को महत्व देते हैं। हम इस अंतर को कैसे पाट सकते हैं?',
      expectedFunction: 'Address Feedback Styles Diplomatically and Suggest Feedback Frameworks',
      contextGoal:
        'Explain that introducing structured, positive-first feedback guidelines and softeners will prevent misunderstandings.',
      targetVocabulary: ['structured constructive feedback guidelines', 'use diplomatic softening language', 'balance directness with empathy'],
      suggestedResponses: [
        {
          label: 'Diplomatic Feedback Framework',
          text: 'It might be prudent to establish shared feedback guidelines where we frame critiques constructively and use diplomatic softeners like "Could we explore..." rather than blunt statements.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Cultural Workshop & Empathy',
          text: 'Perhaps we could hold a short interactive workshop on cultural communication styles. Understanding that direct feedback is intended to be efficient rather than personal helps build mutual trust.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Feedback / Guidelines (guidelines / feedback / constructive / softeners / workshop / framing)',
          patterns: ['guidelines', 'feedback', 'constructive', 'softeners', 'workshop', 'framing', 'consensus'],
          required: true,
        },
        {
          name: 'Cultural Empathy (diplomatic / mutual trust / communication styles / bridge / respectful / understand)',
          patterns: ['diplomatic', 'mutual trust', 'communication styles', 'bridge', 'respectful', 'understand', 'empathy'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_consider_gerund_feedback',
          pattern: 'perhaps we could consider to hold|perhaps we could consider to establish',
          errorType: 'grammar',
          message: '"Consider" takes a gerund (-ing): "Perhaps we could consider establishing guidelines..."',
          correctionPattern: 'Perhaps we could consider establishing team feedback guidelines',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_172_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly follows "consider"?',
        options: [
          { id: 'opt_1', text: 'Perhaps we could consider hosting a cultural workshop.', isCorrect: true },
          { id: 'opt_2', text: 'Perhaps we could consider to host a cultural workshop.', isCorrect: false },
          { id: 'opt_3', text: 'Perhaps we could consider host a workshop.', isCorrect: false },
        ],
        correctAnswer: 'Perhaps we could consider hosting a cultural workshop.',
        explanation: '"consider + gerund (-ing)".',
      },
    },
    {
      id: 'turn_a2_172_3',
      turnIndex: 3,
      partnerPrompt:
        'These recommendations are thoughtful and actionable. How should we formalize these principles in our team charter so everyone feels included?',
      partnerAudioText:
        'These recommendations are thoughtful and actionable. How should we formalize these principles in our team charter so everyone feels included?',
      partnerQuestionHindi:
        'ये सिफारिशें विचारशील और कार्रवाई योग्य हैं। हमें इन सिद्धांतों को अपने टीम चार्टर में कैसे औपचारिक रूप देना चाहिए ताकि हर कोई शामिल महसूस करे?',
      expectedFunction: 'Propose Collaborative Team Charter Drafting and Co-creation Process',
      contextGoal:
        'Suggest co-authoring a shared Global Team Charter with input from all regional hubs.',
      targetVocabulary: ['co-create a Global Team Charter', 'include rotating schedule rules', 'asynchronous decision making'],
      suggestedResponses: [
        {
          label: 'Co-Create Team Charter',
          text: 'We could draft a collaborative Global Team Charter outlining our rotating schedule rules, async communication standards, and respectful feedback norms for team review.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Shared Document & Feedback Loop',
          text: 'I suggest creating a shared document where members from Tokyo, Berlin, and San Francisco can add their input, ensuring true ownership across all regions.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Charter / Document (charter / shared document / guidelines / principles / standards / rules)',
          patterns: ['charter', 'shared document', 'guidelines', 'principles', 'standards', 'rules', 'draft'],
          required: true,
        },
        {
          name: 'Co-creation & Inclusivity (co-create / collaborative / input / ownership / tokyo / berlin / san francisco / all regions)',
          patterns: ['co-create', 'collaborative', 'input', 'ownership', 'tokyo', 'berlin', 'san francisco', 'all regions', 'everyone'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_172_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We ___ (could draft / could to draft) a shared charter this week."',
        options: [
          { id: 'opt_1', text: 'could draft', isCorrect: true },
          { id: 'opt_2', text: 'could to draft', isCorrect: false },
          { id: 'opt_3', text: 'could drafting', isCorrect: false },
        ],
        correctAnswer: 'could draft',
        explanation: 'Modal "could" is followed directly by the base verb.',
      },
    },
    {
      id: 'turn_a2_172_4',
      turnIndex: 4,
      partnerPrompt:
        'I will schedule a charter co-creation session on our shared workspace board. Thank you for championing cross-cultural empathy and diplomatic communication in our organization!',
      partnerAudioText:
        'I will schedule a charter co-creation session on our shared workspace board. Thank you for championing cross-cultural empathy and diplomatic communication in our organization!',
      partnerQuestionHindi:
        'मैं हमारे साझा कार्यक्षेत्र बोर्ड पर एक चार्टर सह-निर्माण सत्र निर्धारित करूँगी। हमारे संगठन में अंतर-सांस्कृतिक सहानुभूति और कूटनीतिक संचार का समर्थन करने के लिए धन्यवाद!',
      expectedFunction: 'Express Gratitude, Reaffirm Inclusivity Values & Conclude Discussion',
      contextGoal:
        'Thank Maya, affirm your commitment to an inclusive workplace culture, and conclude warmly.',
      targetVocabulary: ['thank you Maya', 'commitment to an inclusive culture', 'look forward to the charter session'],
      suggestedResponses: [
        {
          label: 'Warm Professional Sign-Off',
          text: 'Thank you, Maya. Fostering an inclusive and empathetic culture is vital for our global success. I look forward to participating in the charter session!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Acknowledge Partnership',
          text: 'It was a pleasure discussing this with you. I am excited to see our international team thrive under these new norms. Have a wonderful day!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Respect (thank you / thanks / maya / pleasure / appreciate / wonderful)',
          patterns: ['thank you', 'thanks', 'maya', 'pleasure', 'appreciate', 'wonderful', 'great'],
          required: true,
        },
        {
          name: 'Inclusivity & Forward Look (inclusive / culture / charter / session / look forward / international / thrive)',
          patterns: ['inclusive', 'culture', 'charter', 'session', 'look forward', 'international', 'thrive', 'success'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_172_4',
        type: 'multiple_choice',
        prompt: 'Which closing sentence is most appropriate for a culture and inclusion meeting?',
        options: [
          { id: 'opt_1', text: 'Thank you, Maya. I look forward to building an inclusive culture together.', isCorrect: true },
          { id: 'opt_2', text: 'Culture done bye.', isCorrect: false },
          { id: 'opt_3', text: 'I talk to you later ok.', isCorrect: false },
        ],
        correctAnswer: 'Thank you, Maya. I look forward to building an inclusive culture together.',
        explanation: 'Courteous and reinforces shared values of cultural inclusion.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 2,
    targetVocabularyCoveragePct: 60,
  },
};
