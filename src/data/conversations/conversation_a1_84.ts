import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_84: ConversationDefinition = {
  id: 'conv_a1_84',
  title: 'Academic Discussions, Assignment Instructions & Study Collaborations',
  cefr: 'A1',
  unitId: 'unit_a1_6',
  lessonLinks: ['lesson_a1_6_84'],
  estimatedMinutes: 5,
  scenario:
    'You meet with your university study partner, Hannah Clarke, at the central library in Oxford. You review the syllabus guidelines for a 2,000-word group case study assignment, divide secondary research chapters, verify academic citations, and establish a shared writing schedule.',
  communicativeGoals: [
    'Comprehend and discuss academic assignment requirements (word count, structure, submission deadlines)',
    'Divide research sub-topics and source gathering responsibilities',
    'Discuss academic references and citations ("According to the syllabus...", "We must include at least five peer-reviewed sources")',
    'Establish a collaborative timeline and draft review deadlines',
  ],
  canDoStatements: [
    'Can discuss university coursework guidelines and assignment rubrics with a peer',
    'Can negotiate project topic division and source sharing',
    'Can set up study deadlines and draft exchange dates using clear temporal connectors',
  ],
  characters: [
    {
      id: 'char_hannah_clarke',
      name: 'Hannah Clarke',
      role: 'University Study Partner',
      avatar: '🎓',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'syllabus',
        ipa: '/ˈsɪləbəs/',
        partOfSpeech: 'noun',
        meaning: 'An outline or summary of the subjects in a course of study or teaching',
        exampleSentence: 'According to the syllabus, our research paper is due on November 15th.',
        translations: { hi: 'पाठ्यक्रम / विवरणिका' },
      },
      {
        word: 'citation',
        ipa: '/saɪˈteɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'A quotation from or reference to a book, paper, or author in a scholarly work',
        exampleSentence: 'We must include formal APA citations for every academic source.',
        translations: { hi: 'उद्धरण / संदर्भ' },
      },
      {
        word: 'deadline',
        ipa: '/ˈdɛdlaɪn/',
        partOfSpeech: 'noun',
        meaning: 'The latest time or date by which something should be completed',
        exampleSentence: 'Our primary draft deadline is this coming Friday at midnight.',
        translations: { hi: 'अंतिम समय सीमा' },
      },
      {
        word: 'collaborate',
        ipa: '/kəˈlæbəreɪt/',
        partOfSpeech: 'verb',
        meaning: 'Work jointly on an intellectual activity or academic assignment',
        exampleSentence: 'Let us collaborate on the introduction and conclusion sections.',
        translations: { hi: 'सहयोग करना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'According to the assignment guidelines...',
        functionCategory: 'Referencing Rules',
        exampleSentence: 'According to the assignment guidelines, the paper should be 2,000 words.',
      },
      {
        phrase: 'We are required to include at least...',
        functionCategory: 'Academic Requirements',
        exampleSentence: 'We are required to include at least six academic journal references.',
      },
      {
        phrase: 'Shall we split the sections evenly?',
        functionCategory: 'Task Division',
        exampleSentence: 'Shall we split the case study sections evenly between us?',
      },
      {
        phrase: 'Let us aim to complete the first draft by...',
        functionCategory: 'Goal Setting',
        exampleSentence: 'Let us aim to complete the first draft by Tuesday evening.',
      },
    ],
    grammar: {
      title: 'Academic Obligation & Rules: "We are required to...", "Must", & "Need to"',
      conceptExplanation:
        'Express course rules with "We are required to + [Base Verb]", "We must + [Base Verb]", or "We need to + [Base Verb]".',
      patternFormula: 'We are required to + [Base Verb] / We must + [Base Verb] + by [Date / Time]',
      contrastExamples: [
        {
          incorrect: 'We must to writing 2000 words yesterday.',
          correct: 'We are required to submit a 2,000-word essay by Friday.',
          explanation: 'Use base verb after "must" or "are required to".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Hannah Clarke',
        text: 'Hi Alex! Have you reviewed Professor Evans’s assignment rubric for the international business case study?',
        translation: 'नमस्ते एलेक्स! क्या आपने अंतर्राष्ट्रीय व्यापार केस स्टडी के लिए प्रोफेसर इवांस के असाइनमेंट रूब्रिक की समीक्षा की है?',
      },
      {
        speaker: 'You',
        text: 'Hi Hannah! Yes, we are required to submit a 2,000-word report with at least five academic citations by next Monday.',
        translation: 'नमस्ते हन्ना! हाँ, हमें अगले सोमवार तक कम से कम पाँच अकादमिक उद्धरणों के साथ 2,000 शब्दों की रिपोर्ट जमा करनी आवश्यक है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_84_1',
      type: 'fill_blank',
      prompt: 'Complete the academic rule: "We are required to ___ six journal articles."',
      options: [
        { id: 'opt_1', text: 'cite', isCorrect: true },
        { id: 'opt_2', text: 'citing', isCorrect: false },
        { id: 'opt_3', text: 'cited', isCorrect: false },
      ],
      correctAnswer: 'cite',
      explanation: 'Base verb "cite" follows "are required to".',
    },
    {
      id: 'cp_a1_84_2',
      type: 'multiple_choice',
      prompt: 'Which sentence states a study timeline clearly?',
      options: [
        { id: 'opt_1', text: 'Let us complete our literature review by Wednesday and exchange drafts on Friday.', isCorrect: true },
        { id: 'opt_2', text: 'We do homework whenever maybe.', isCorrect: false },
        { id: 'opt_3', text: 'Paper written fast now.', isCorrect: false },
      ],
      correctAnswer: 'Let us complete our literature review by Wednesday and exchange drafts on Friday.',
      explanation: 'Clear milestones with specific target days.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_84_1',
      scenarioContext: 'Explain an assignment rule from the syllabus.',
      prompt: 'Build: "We are required to submit by Friday."',
      targetStructure: 'We are required to submit by Friday',
      wordBank: ['We', 'are', 'required', 'to', 'submit', 'by', 'Friday', 'submitting', 'must', 'on'],
      acceptableSolutions: [
        'We are required to submit by Friday',
        'We are required to submit by Friday.',
      ],
      explanation: 'Passive obligation structure.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_84_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi Alex! Thanks for meeting at the library. What are the key requirements outlined in the syllabus for our marketing case study?',
      partnerAudioText:
        'Hi Alex! Thanks for meeting at the library. What are the key requirements outlined in the syllabus for our marketing case study?',
      partnerQuestionHindi:
        'नमस्ते एलेक्स! लाइब्रेरी में मिलने के लिए धन्यवाद। हमारे मार्केटिंग केस स्टडी के लिए पाठ्यक्रम में उल्लिखित मुख्य आवश्यकताएं क्या हैं?',
      expectedFunction: 'Summarize Coursework Guidelines (Word Count, Structure, Academic Sources)',
      contextGoal:
        'Explain that the paper must be 2,000 words, include an executive summary, analysis, and recommendations, with at least five academic citations.',
      targetVocabulary: ['2,000-word case study', 'executive summary and analysis', 'five peer-reviewed citations', 'due next Monday'],
      suggestedResponses: [
        {
          label: 'Spontaneous Multi-Turn',
          text: 'Hi Hannah! According to the syllabus, we are required to write a 2,000-word case study covering market analysis and strategic recommendations, citing at least five peer-reviewed academic sources.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Requirements & Word Count',
          patterns: [
            '2,000',
            'syllabus',
            'analysis',
            'recommendations',
            'citations',
            'sources',
            'required',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_84_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "According to the ___, the essay is due on Monday."',
        options: [
          { id: 'opt_1', text: 'syllabus', isCorrect: true },
          { id: 'opt_2', text: 'recipe', isCorrect: false },
          { id: 'opt_3', text: 'menu', isCorrect: false },
        ],
        correctAnswer: 'syllabus',
        explanation: '"syllabus" refers to academic course guidelines.',
      },
    },
    {
      id: 'turn_a1_84_2',
      turnIndex: 2,
      partnerPrompt:
        'That is very clear. How should we divide the research and writing so both of us have an equal workload?',
      partnerAudioText:
        'That is very clear. How should we divide the research and writing so both of us have an equal workload?',
      partnerQuestionHindi:
        'वह बहुत स्पष्ट है। हमें शोध और लेखन को कैसे विभाजित करना चाहिए ताकि हम दोनों के पास समान कार्यभार हो?',
      expectedFunction: 'Propose Topic Division (Market Analysis vs. Strategic Recommendations)',
      contextGoal:
        'Suggest that you research and write the company background and market analysis, while Hannah focuses on competitor benchmarking and future recommendations.',
      targetVocabulary: ['divide sections evenly', 'company background and market analysis', 'competitor benchmarking', 'future recommendations'],
      suggestedResponses: [
        {
          label: 'Spontaneous Multi-Turn',
          text: 'I can research the company background and write the market analysis (1,000 words), while you handle competitor benchmarking and recommendations (1,000 words). Then we will write the executive summary together.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Task Division',
          patterns: [
            'background',
            'market analysis',
            'competitor',
            'recommendations',
            '1,000 words',
            'executive summary',
            'together',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_84_2',
        type: 'multiple_choice',
        prompt: 'Which proposal ensures balanced academic collaboration?',
        options: [
          { id: 'opt_1', text: 'I will write the market analysis section while you write the recommendations, then we combine them.', isCorrect: true },
          { id: 'opt_2', text: 'I write one word you write 1999 words.', isCorrect: false },
          { id: 'opt_3', text: 'We copy from internet no writing.', isCorrect: false },
        ],
        correctAnswer: 'I will write the market analysis section while you write the recommendations, then we combine them.',
        explanation: 'Balanced and collaborative academic distribution.',
      },
    },
    {
      id: 'turn_a1_84_3',
      turnIndex: 3,
      partnerPrompt:
        'I love that structure! When should we set our internal draft exchange deadline so we have enough time for peer review and reference checks?',
      partnerAudioText:
        'I love that structure! When should we set our internal draft exchange deadline so we have enough time for peer review and reference checks?',
      partnerQuestionHindi:
        'मुझे वह संरचना बहुत पसंद है! हमें अपनी आंतरिक ड्राफ्ट विनिमय समय सीमा कब निर्धारित करनी चाहिए ताकि हमारे पास सहकर्मी समीक्षा और संदर्भ जांच के लिए पर्याप्त समय हो?',
      expectedFunction: 'Establish Draft Milestones & Peer Review Timeline (Thursday 6:00 PM)',
      contextGoal:
        'Propose finishing individual drafts by Thursday at 6:00 PM, swapping sections for peer review on Friday, and assembling the final document on Saturday.',
      targetVocabulary: ['exchange drafts on Thursday at 6:00 PM', 'peer review on Friday', 'reference citations check', 'assemble final document on Saturday'],
      suggestedResponses: [
        {
          label: 'Spontaneous Multi-Turn',
          text: 'Let us finish our individual drafts by Thursday at 6:00 PM. We can exchange them on Friday to check citations, and meet on Saturday to merge and finalize everything.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Milestones & Timeline',
          patterns: [
            'thursday',
            '6:00',
            'drafts',
            'friday',
            'citations',
            'saturday',
            'finalize',
            'merge',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_84_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We will exchange drafts to check all academic ___."',
        options: [
          { id: 'opt_1', text: 'citations', isCorrect: true },
          { id: 'opt_2', text: 'receipts', isCorrect: false },
          { id: 'opt_3', text: 'tickets', isCorrect: false },
        ],
        correctAnswer: 'citations',
        explanation: '"citations" refers to source references.',
      },
    },
    {
      id: 'turn_a1_84_4',
      turnIndex: 4,
      partnerPrompt:
        'Perfect schedule. I have created a shared Google Doc and added the syllabus rubric at the top. Let us do great work on this project!',
      partnerAudioText:
        'Perfect schedule. I have created a shared Google Doc and added the syllabus rubric at the top. Let us do great work on this project!',
      partnerQuestionHindi:
        'बिल्कुल सही समय सारिणी। मैंने एक साझा Google डॉक बनाया है और शीर्ष पर पाठ्यक्रम रूब्रिक जोड़ा है। आइए इस परियोजना पर शानदार काम करें!',
      expectedFunction: 'Acknowledge Shared Doc, Express Motivation & Close Study Session',
      contextGoal:
        'Thank Hannah for organizing the shared document, express confidence in getting a top grade, and agree to start researching immediately.',
      targetVocabulary: ['shared doc access confirmed', 'aim for top grade', 'start research right away', 'see you on Friday'],
      suggestedResponses: [
        {
          label: 'Spontaneous Multi-Turn',
          text: 'I have the shared document open on my laptop! Thank you Hannah for setting this up so cleanly. I am excited for this project and will start research right now. See you on Friday!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Motivation',
          patterns: [
            'document',
            'shared doc',
            'thank you',
            'hannah',
            'research',
            'friday',
            'excited',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_84_4',
        type: 'multiple_choice',
        prompt: 'Which closing remark conveys positive academic teamwork?',
        options: [
          { id: 'opt_1', text: 'Thank you Hannah, I have the doc open and will start researching right away. See you Friday!', isCorrect: true },
          { id: 'opt_2', text: 'I close computer no study.', isCorrect: false },
          { id: 'opt_3', text: 'Book closed bye bye.', isCorrect: false },
        ],
        correctAnswer: 'Thank you Hannah, I have the doc open and will start researching right away. See you Friday!',
        explanation: 'Enthusiastic and cooperative study partner closure.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 70,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 60,
  },
};
