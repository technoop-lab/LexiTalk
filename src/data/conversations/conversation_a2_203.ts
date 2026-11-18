import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_203: ConversationDefinition = {
  id: 'conv_a2_203',
  title: 'Conversational Repair: Clarifying, Paraphrasing & Checking',
  cefr: 'A2',
  unitId: 'unit_a2_14',
  lessonLinks: ['lesson_a2_14_203'],
  estimatedMinutes: 5,
  scenario:
    'You are in a project planning meeting with your senior course coordinator, Dr. Elena Ramos. She explains the requirements for the interdisciplinary research proposal quickly. You practice conversational repair strategies: asking her to rephrase technical points, paraphrasing instructions to verify accuracy, clarifying your own statements, and checking mutual understanding.',
  communicativeGoals: [
    'Ask a fast or technical speaker to slow down, repeat, or explain a term simply',
    'Paraphrase heard instructions using "If I understand correctly...", "So in other words...", "Do you mean that..."',
    'Clarify your own statements when a misunderstanding occurs ("What I actually meant was...", "Let me put it another way")',
    'Check that the listener is following your explanation ("Does that make sense?", "Are you with me so far?")',
  ],
  canDoStatements: [
    'Can ask for repetition, clarification, or slower speech in professional and academic settings',
    'Can paraphrase instructions to confirm mutual understanding',
    'Can repair conversational misunderstandings smoothly without embarrassment',
  ],
  characters: [
    {
      id: 'char_dr_ramos_coordinator',
      name: 'Dr. Ramos',
      role: 'Postgraduate Project Coordinator',
      avatar: '🔄',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'clarify',
        ipa: '/ˈklærəfaɪ/',
        partOfSpeech: 'verb',
        meaning: 'To make a statement or situation less confused and more clearly understood',
        exampleSentence: 'Could you please clarify what you mean by "secondary data sources"?',
        translations: { hi: 'स्पष्ट करना / साफ करना' },
      },
      {
        word: 'paraphrase',
        ipa: '/ˈpærəfreɪz/',
        partOfSpeech: 'verb',
        meaning: 'To express the meaning of something written or spoken using different words, especially to achieve greater clarity',
        exampleSentence: 'So, if I can paraphrase, our proposal must focus only on local case studies.',
        translations: { hi: 'अपने शब्दों में व्यक्त करना (पैराफ़्रेज़)' },
      },
      {
        word: 'breakdown',
        ipa: '/ˈbreɪkdaʊn/',
        partOfSpeech: 'noun',
        meaning: 'A failure of a relationship, system, or discussion, especially a temporary misunderstanding',
        exampleSentence: 'Strategic conversational repair prevents communication breakdowns.',
        translations: { hi: 'बाधा / समझ में रुकावट' },
      },
      {
        word: 'rephrase',
        ipa: '/ˌriːˈfreɪz/',
        partOfSpeech: 'verb',
        meaning: 'To express an idea in an alternative way',
        exampleSentence: 'Let me rephrase that so it is clearer.',
        translations: { hi: 'दोबारा दूसरे शब्दों में कहना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Could you say that once more a little more slowly, please?',
        functionCategory: 'Requesting repetition and pacing',
        exampleSentence: 'Sorry, could you repeat that last point?',
      },
      {
        phrase: 'If I understand correctly, we need to submit three separate drafts before November.',
        functionCategory: 'Paraphrasing to check understanding',
        exampleSentence: 'In other words, the survey sample should be at least fifty participants.',
      },
      {
        phrase: 'What I actually meant was that we could combine the interviews with online questionnaires.',
        functionCategory: 'Clarifying own statement',
        exampleSentence: 'Let me rephrase my point.',
      },
      {
        phrase: 'Does that make sense, or should I explain the diagram again?',
        functionCategory: 'Checking listener comprehension',
        exampleSentence: 'Are you following me so far?',
      },
    ],
    grammar: {
      title: 'Formulas for Conversational Repair & Comprehension Checks',
      conceptExplanation:
        '1. Asking for Repetition & Clarification:\n   - "Could you possibly repeat that last sentence?"\n   - "What exactly do you mean by [Term]?"\n2. Paraphrasing & Confirming:\n   - "So, if I understand correctly, [Paraphrase]"\n   - "In other words, [Summary], is that right?"\n3. Self-Correction & Clarifying Intent:\n   - "What I meant was [Clarification]"\n   - "Sorry, let me rephrase that."\n4. Checking if Listener Follows:\n   - "Does that make sense?" / "Is that clear?"',
      patternFormula: 'If I understand correctly, [Paraphrase] | What I actually meant was [Clarification] | Does that make sense?',
      contrastExamples: [
        {
          incorrect: 'What? I no hear.',
          correct: 'I’m sorry, could you repeat that last part a bit more slowly?',
          explanation: 'Use polite repair phrases rather than blunt interjections.',
        },
        {
          incorrect: 'You understand me yes?',
          correct: 'Does that make sense so far, or should I clarify?',
          explanation: '"Does that make sense?" is the idiomatic way to check listener comprehension.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Dr. Ramos',
        text: 'For methodology, you must triangulate empirical observations with quantitative survey datasets by week six.',
        translation: 'पद्धति के लिए, आपको सप्ताह छह तक मात्रात्मक सर्वेक्षण डेटासेट के साथ अनुभवजन्य टिप्पणियों का मिलान करना होगा।',
      },
      {
        speaker: 'Learner',
        text: 'Sorry, Dr. Ramos, could you rephrase that? If I understand correctly, we need to combine student interviews with survey numbers?',
        translation: 'माफ कीजिए, डॉ. रामोस, क्या आप इसे दोबारा कह सकती हैं? अगर मैं सही समझ रहा हूँ, तो हमें सर्वेक्षण के आंकड़ों के साथ छात्रों के साक्षात्कारों को जोड़ना होगा?',
      },
      {
        speaker: 'Dr. Ramos',
        text: 'Precisely! You have captured the exact requirement.',
        translation: 'बिल्कुल सही! आपने बिल्कुल सटीक आवश्यकता को समझा है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_203_1',
      type: 'fill_blank',
      prompt: 'Complete the repair phrase: "If I ______ (understand / understood) correctly, we only need to write two thousand words."',
      options: [
        { id: 'opt_1', text: 'understand', isCorrect: true },
        { id: 'opt_2', text: 'understanding', isCorrect: false },
        { id: 'opt_3', text: 'understands', isCorrect: false },
      ],
      correctAnswer: 'understand',
      explanation: 'Formula: "If I understand correctly, ...".',
    },
    {
      id: 'cp_203_2',
      type: 'multiple_choice',
      prompt: 'How do you politely clarify your own words when someone misinterprets you?',
      options: [
        { id: 'opt_1', text: 'Sorry, what I actually meant was we should test the prototype first.', isCorrect: true },
        { id: 'opt_2', text: 'You are wrong listening to me.', isCorrect: false },
        { id: 'opt_3', text: 'No, why you think that bad.', isCorrect: false },
      ],
      correctAnswer: 'Sorry, what I actually meant was we should test the prototype first.',
      explanation: '"What I actually meant was..." is the diplomatic self-repair formula.',
    },
    {
      id: 'cp_203_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [does that / or should I / make sense / explain again]',
      correctAnswer: 'does that make sense or should I explain again',
      explanation: 'Comprehension check: does that make sense + or should I...',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_203_1',
      prompt: 'Construct a sentence asking Dr. Ramos to repeat a deadline because the audio connection was quiet.',
      scenarioContext: 'Asking for repetition during meeting.',
      targetStructure: 'Could you please repeat the submission deadline once more a bit more slowly?',
      wordBank: ['Could you please', 'repeat the submission deadline', 'once more', 'a bit more slowly?', 'for the team'],
      acceptableSolutions: [
        'Could you please repeat the submission deadline once more a bit more slowly?',
        'Could you repeat the deadline once more, please?',
      ],
      explanation: 'Polite repetition request.',
    },
    {
      id: 'sc_203_2',
      prompt: 'Construct a paraphrasing statement to check if the proposal requires two academic supervisor signatures.',
      scenarioContext: 'Paraphrasing requirements.',
      targetStructure: 'In other words, do we need signatures from both project supervisors before submitting?',
      wordBank: ['In other words,', 'do we need signatures', 'from both project supervisors', 'before submitting', 'the document?'],
      acceptableSolutions: [
        'In other words, do we need signatures from both project supervisors before submitting?',
        'If I understand correctly, we need signatures from both supervisors.',
      ],
      explanation: 'Paraphrase with "In other words" or "If I understand correctly".',
    },
  ],
  turns: [
    {
      id: 'turn_203_1',
      turnIndex: 1,
      partnerPrompt:
        'Good afternoon! Thank you for coming. In short, your capstone submission involves synthesizing cross-disciplinary stakeholder feedback with multi-tiered quantitative performance metrics by Friday at noon.',
      partnerAudioText:
        'Good afternoon! Thank you for coming. In short, your capstone submission involves synthesizing cross-disciplinary stakeholder feedback with multi-tiered quantitative performance metrics by Friday at noon.',
      partnerQuestionHindi:
        'शुभ दोपहर! आने के लिए धन्यवाद। संक्षेप में, आपके कैपस्टोन सबमिशन में शुक्रवार दोपहर तक बहु-स्तरीय मात्रात्मक प्रदर्शन मेट्रिक्स के साथ क्रॉस-डिसिप्लिनरी स्टेकहोल्डर फीडबैक का संश्लेषण करना शामिल है।',
      expectedFunction: 'Politely requesting Dr. Ramos to slow down and paraphrasing her instructions',
      contextGoal: 'Ask her to slow down and paraphrase (e.g. "If I understand correctly, we need user feedback and performance numbers by Friday noon?") ',
      targetVocabulary: ['repeat', 'slowly', 'understand correctly', 'in other words', 'feedback', 'Friday noon', 'Dr. Ramos'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Good afternoon Dr. Ramos. Could you say that a little more slowly? If I understand correctly, we need to collect user feedback and project test numbers by Friday noon?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Sorry Dr. Ramos, could you repeat that last part? In other words, our team must submit survey responses and performance data by Friday?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Could you rephrase that slightly, please? If I understand correctly, we are combining interview quotes with statistical benchmarks before Friday at 12 PM.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'repair_request',
          patterns: ['slowly', 'repeat', 'rephrase', 'say that once more', 'a bit more slowly', 'could you'],
          required: true,
        },
        {
          name: 'paraphrase_attempt',
          patterns: ['understand correctly', 'in other words', 'mean that', 'feedback', 'friday', 'metrics', 'data'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_203_1_blunt',
          pattern: /^what\? i don't understand/i,
          errorType: 'interaction',
          message: 'Use a polite repair phrase like "Could you say that a little more slowly, please?"',
          correctionPattern: 'Could you say that a little more slowly, please?',
        },
      ],
      remediationPractice: {
        id: 'rem_203_1',
        type: 'fill_blank',
        prompt: 'Fill in: "If I ______ (understand) correctly, we need to submit by Friday."',
        options: [
          { id: 'r1', text: 'understand', isCorrect: true },
          { id: 'r2', text: 'understood', isCorrect: false },
        ],
        correctAnswer: 'understand',
        explanation: 'Use present tense "understand" in this formula.',
      },
    },
    {
      id: 'turn_203_2',
      turnIndex: 2,
      partnerPrompt:
        'Yes, exactly that! User feedback from your pilot testing and the numeric speed metrics. Now, did you mean that your team wants to exclude mobile device users from the survey sample?',
      partnerAudioText:
        'Yes, exactly that! User feedback from your pilot testing and the numeric speed metrics. Now, did you mean that your team wants to exclude mobile device users from the survey sample?',
      partnerQuestionHindi:
        'हाँ, बिल्कुल वही! आपके पायलट परीक्षण से उपयोगकर्ताओं की प्रतिक्रिया और संख्यात्मक गति मेट्रिक्स। अब, क्या आपका मतलब यह था कि आपकी टीम सर्वेक्षण नमूने से मोबाइल डिवाइस उपयोगकर्ताओं को बाहर करना चाहती है?',
      expectedFunction: 'Clarifying own statement / Self-repairing a misunderstanding',
      contextGoal: 'Clarify that you do NOT want to exclude mobile users; you only meant testing desktop first',
      targetVocabulary: ['actually meant', 'what I meant was', 'rephrase', 'mobile users', 'desktop', 'include'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Oh, sorry for the confusion! What I actually meant was that we will test desktop first, but we definitely want to include mobile users too.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Let me clarify that point: we are not excluding mobile users; we are just rolling out the mobile survey two days later.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Let me rephrase that, Dr. Ramos. We certainly intend to survey mobile users, but our initial pilot run will focus on desktop devices.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'self_repair_formula',
          patterns: ['what i actually meant', 'what i meant was', 'let me clarify', 'let me rephrase', 'sorry for the confusion'],
          required: true,
        },
        {
          name: 'clarification_content',
          patterns: ['desktop', 'include', 'mobile', 'first', 'not excluding', 'survey'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_203_2_blunt_no',
          pattern: /^no you misunderstood/i,
          errorType: 'interaction',
          message: 'Take polite ownership: "What I actually meant was..." instead of blaming the listener.',
          correctionPattern: 'Sorry, what I actually meant was...',
        },
      ],
      remediationPractice: {
        id: 'rem_203_2',
        type: 'multiple_choice',
        prompt: 'Which phrase is most diplomatic for clarifying your own misunderstood point?',
        options: [
          { id: 'r1', text: 'Sorry for the confusion! What I actually meant was...', isCorrect: true },
          { id: 'r2', text: 'You did not listen to me correctly.', isCorrect: false },
        ],
        correctAnswer: 'Sorry for the confusion! What I actually meant was...',
        explanation: 'Polite self-repair formula.',
      },
    },
    {
      id: 'turn_203_3',
      turnIndex: 3,
      partnerPrompt:
        'Ah, I see! That makes much more sense. How do you plan to present the weekly progress updates to your industry sponsor?',
      partnerAudioText:
        'Ah, I see! That makes much more sense. How do you plan to present the weekly progress updates to your industry sponsor?',
      partnerQuestionHindi:
        'ओह, समझ गई! यह बहुत अधिक समझ में आता है। आप अपने उद्योग प्रायोजक (sponsor) के समक्ष साप्ताहिक प्रगति अपडेट कैसे प्रस्तुत करने की योजना बना रहे हैं?',
      expectedFunction: 'Explaining your plan and checking if the listener is following ("Does that make sense?")',
      contextGoal: 'Explain a simple plan (e.g. weekly dashboard email + 10-min call) and ask "Does that make sense?"',
      targetVocabulary: ['weekly', 'dashboard', 'email', 'call', 'does that make sense', 'sponsor'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'We plan to send a one-page summary email every Monday and hold a quick ten-minute video call. Does that make sense?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'We will share a live dashboard link and a brief bullet-point report each Friday. Are you following me so far?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Our approach is to provide an interactive dashboard alongside a fortnightly briefing. Does that sound reasonable to you, Dr. Ramos?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'plan_presentation',
          patterns: ['email', 'summary', 'call', 'dashboard', 'report', 'monday', 'friday', 'weekly'],
          required: true,
        },
        {
          name: 'comprehension_check',
          patterns: ['does that make sense', 'are you following', 'sound reasonable', 'is that clear', 'make sense'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_203_3_no_check',
          pattern: /dashboard email\.$/i,
          errorType: 'interaction',
          message: 'Remember to check listener comprehension at the end (e.g. "Does that make sense?").',
          correctionPattern: 'Does that make sense?',
        },
      ],
      remediationPractice: {
        id: 'rem_203_3',
        type: 'fill_blank',
        prompt: 'Fill in: "We will email a weekly summary. Does that ______ (make) sense?"',
        options: [
          { id: 'r1', text: 'make', isCorrect: true },
          { id: 'r2', text: 'do', isCorrect: false },
        ],
        correctAnswer: 'make',
        explanation: 'We say "make sense".',
      },
    },
    {
      id: 'turn_203_4',
      turnIndex: 4,
      partnerPrompt:
        'That makes total sense and is very professional! You have a very clear communication strategy. I will sign off on your plan right now. Is there anything else you would like to clarify before we wrap up?',
      partnerAudioText:
        'That makes total sense and is very professional! You have a very clear communication strategy. I will sign off on your plan right now. Is there anything else you would like to clarify before we wrap up?',
      partnerQuestionHindi:
        'यह पूरी तरह से समझ में आता है और बहुत पेशेवर है! आपकी संचार रणनीति बहुत स्पष्ट है। मैं अभी आपकी योजना पर हस्ताक्षर कर दूंगी। क्या बैठक समाप्त करने से पहले आप कुछ और स्पष्ट करना चाहेंगे?',
      expectedFunction: 'Confirming mutual alignment and thanking coordinator warmly',
      contextGoal: 'Confirm everything is clear, thank Dr. Ramos for her guidance, and say goodbye',
      targetVocabulary: ['everything is clear', 'thank you', 'Dr. Ramos', 'guidance', 'time', 'wrap up'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Everything is crystal clear now! Thank you so much for your time and guidance, Dr. Ramos. Have a great day!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'No other questions. Thank you for clarifying the requirements and signing off our plan. See you next week!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'We are completely aligned. Thank you for your valuable feedback and support, Dr. Ramos. Have a wonderful afternoon!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'clarity_confirmation',
          patterns: ['clear', 'crystal clear', 'aligned', 'no other questions', 'everything is clear'],
          required: true,
        },
        {
          name: 'gratitude_closing',
          patterns: ['thank you', 'thanks', 'dr. ramos', 'guidance', 'time', 'great day', 'afternoon'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_203_4_short',
          pattern: /^(no|bye|clear)$/i,
          errorType: 'interaction',
          message: 'Provide a complete polite closing expressing gratitude.',
          correctionPattern: 'Everything is clear! Thank you very much for your time, Dr. Ramos.',
        },
      ],
      remediationPractice: {
        id: 'rem_203_4',
        type: 'multiple_choice',
        prompt: 'Which response closes an advising meeting politely?',
        options: [
          { id: 'r1', text: 'Everything is crystal clear now! Thank you so much for your time and guidance, Dr. Ramos.', isCorrect: true },
          { id: 'r2', text: 'No question bye.', isCorrect: false },
        ],
        correctAnswer: 'Everything is crystal clear now! Thank you so much for your time and guidance, Dr. Ramos.',
        explanation: 'Polite and professional wrap-up.',
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
