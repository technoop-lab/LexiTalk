import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_216: ConversationDefinition = {
  id: 'conv_a2_216',
  title: 'Asking for Clarification & Understanding Explanations',
  cefr: 'A2',
  unitId: 'unit_a2_15',
  lessonLinks: ['lesson_a2_15_216'],
  estimatedMinutes: 5,
  scenario:
    'You are in Professor Hayes’s office during consultation hours. You need clarification on a complex essay assignment prompt. You practice polite indirect questions, asking the professor to elaborate or give examples, and checking mutual understanding using "If I understand correctly..." and paraphrasing.',
  communicativeGoals: [
    'Ask for clarification politely using indirect questions ("Could you explain what you mean by...?", "Could you elaborate on...?")',
    'Check and confirm mutual understanding using "If I understand correctly...", "In other words...", and "Do you mean...?"',
    'Ask for concrete examples when an explanation is abstract or difficult',
    'Express understanding and acknowledge explanations with clear feedback rejoinders',
  ],
  canDoStatements: [
    'Can ask a teacher or peer politely for clarification and further explanation',
    'Can paraphrase instructions to check understanding in an academic setting',
    'Can request examples when concepts are unclear',
  ],
  characters: [
    {
      id: 'char_prof_hayes',
      name: 'Professor Hayes',
      role: 'Course Instructor',
      avatar: '👨‍🏫',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'clarification',
        ipa: '/ˌklærəfɪˈkeɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The action of making a statement or instruction less confused and more comprehensible',
        exampleSentence: 'I asked the professor for clarification on the final essay topic.',
        translations: { hi: 'स्पष्टीकरण (क्लैरिफिकेशन)' },
      },
      {
        word: 'elaborate',
        ipa: '/ɪˈlæbəreɪt/',
        partOfSpeech: 'verb',
        meaning: 'To develop or explain an idea in further detail',
        exampleSentence: 'Could you elaborate on the second grading requirement, please?',
        translations: { hi: 'विस्तार से बताना (इलैबोरेट)' },
      },
      {
        word: 'paraphrase',
        ipa: '/ˈpærəfreɪz/',
        partOfSpeech: 'verb',
        meaning: 'To express the meaning of something in different words to achieve clarity',
        exampleSentence: 'Let me paraphrase the instructions to make sure I understood.',
        translations: { hi: 'अपने शब्दों में दोहराना / अर्थ स्पष्ट करना (पैराफ्रेज़)' },
      },
      {
        word: 'requirement',
        ipa: '/rɪˈkwaɪəmənt/',
        partOfSpeech: 'noun',
        meaning: 'A thing that is needed or wanted; a condition that must be met',
        exampleSentence: 'Is word count a strict requirement for this assignment?',
        translations: { hi: 'अनिवार्य शर्त / आवश्यकता (रिक्वायरमेंट)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Could you elaborate on what you mean by "critical analysis"?',
        functionCategory: 'Polite request for elaboration',
        exampleSentence: 'Could you explain how the data should be formatted?',
      },
      {
        phrase: 'If I understand correctly, we need to compare two different case studies.',
        functionCategory: 'Checking understanding / paraphrasing',
        exampleSentence: 'In other words, the deadline has been moved to Monday.',
      },
      {
        phrase: 'Could you give me a concrete example of that point?',
        functionCategory: 'Requesting an example',
        exampleSentence: 'Could you show me an example of a good thesis statement?',
      },
      {
        phrase: 'That is much clearer now, thank you for explaining.',
        functionCategory: 'Confirming comprehension and thanking',
        exampleSentence: 'I understand the assignment criteria completely now.',
      },
    ],
    grammar: {
      title: 'Indirect Questions for Polite Clarification',
      conceptExplanation:
        '1. Polite Indirect Question Starters:\n   - "Could you explain what [Subject] + [Verb]?"\n   - "Could you tell me how [Subject] + [Verb]?"\n2. Note word order (no "do/does/did" inversion inside the clause):\n   - "Could you explain what this word means?" (NOT "what does this word mean")\n3. Checking Formulas:\n   - "If I understand correctly, [Sentence]"\n   - "Do you mean that [Sentence]?"',
      patternFormula: 'Could you [explain / clarify / elaborate on] [Topic] + [If I understand correctly, ...]',
      contrastExamples: [
        {
          incorrect: 'What you mean by this? I don’t get.',
          correct: 'Could you explain what you mean by this point, Professor Hayes?',
          explanation: 'Use polite indirect formulas with academic instructors.',
        },
        {
          incorrect: 'Could you explain me what is the deadline?',
          correct: 'Could you explain to me what the deadline is?',
          explanation: 'Indirect question word order: question word + subject + verb.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Professor Hayes',
        text: 'Come in! How can I help you with your coursework draft today?',
        translation: 'अंदर आइए! आज मैं आपके कोर्सवर्क ड्राफ्ट में आपकी किस प्रकार सहायता कर सकता हूँ?',
      },
      {
        speaker: 'Learner',
        text: 'Good morning, Professor Hayes. Could you explain what you mean by "comparative case studies" in question three?',
        translation: 'शुभ प्रभात, प्रोफेसर हेस। क्या आप समझा सकते हैं कि प्रश्न तीन में "तुलनात्मक केस अध्ययन" से आपका क्या तात्पर्य है?',
      },
      {
        speaker: 'Professor Hayes',
        text: 'Certainly! It means you should evaluate both Company A and Company B, showing their differences.',
        translation: 'निश्चित रूप से! इसका मतलब है कि आपको कंपनी A और कंपनी B दोनों का मूल्यांकन करना चाहिए और उनके अंतर दिखाने चाहिए।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_216_1',
      type: 'fill_blank',
      prompt: 'Complete with the correct word order: "Could you tell me ______ (what the deadline is / what is the deadline)?"',
      options: [
        { id: 'opt_1', text: 'what the deadline is', isCorrect: true },
        { id: 'opt_2', text: 'what is the deadline', isCorrect: false },
      ],
      correctAnswer: 'what the deadline is',
      explanation: 'Indirect questions use statement word order: subject + verb.',
    },
    {
      id: 'cp_216_2',
      type: 'multiple_choice',
      prompt: 'Which phrase is the most professional way to check understanding of an assignment?',
      options: [
        { id: 'opt_1', text: 'If I understand correctly, we need to interview three participants.', isCorrect: true },
        { id: 'opt_2', text: 'You said 3 people yes?', isCorrect: false },
        { id: 'opt_3', text: 'I understand nothing.', isCorrect: false },
      ],
      correctAnswer: 'If I understand correctly, we need to interview three participants.',
      explanation: '"If I understand correctly..." is the standard polite paraphrasing formula.',
    },
    {
      id: 'cp_216_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [could you elaborate / on the second requirement / please / Professor Hayes?]',
      correctAnswer: 'could you elaborate on the second requirement please Professor Hayes?',
      explanation: 'Indirect request + on the requirement + politeness marker + name.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_216_1',
      prompt: 'Construct an indirect question asking Professor Hayes to clarify the word count requirement.',
      scenarioContext: 'Asking your professor during office hours.',
      targetStructure: 'Could you please clarify what the word count requirement is for this essay?',
      wordBank: ['Could you please clarify', 'what the word count requirement is', 'for this essay,', 'Professor Hayes?', 'in the class'],
      acceptableSolutions: [
        'Could you please clarify what the word count requirement is for this essay?',
        'Could you clarify what the word count is for this essay?',
      ],
      explanation: 'Indirect question formula: Could you clarify what [Subject] is?',
    },
    {
      id: 'sc_216_2',
      prompt: 'Construct a sentence checking understanding by asking for a concrete example.',
      scenarioContext: 'Asking for an example of a good research question.',
      targetStructure: 'Could you give me a concrete example of a strong research question?',
      wordBank: ['Could you give me', 'a concrete example of', 'a strong research question,', 'please?', 'in the book'],
      acceptableSolutions: [
        'Could you give me a concrete example of a strong research question?',
        'Could you please give me an example of a good research question?',
      ],
      explanation: 'Example request structure: Could you give me a concrete example of...?',
    },
  ],
  turns: [
    {
      id: 'turn_216_1',
      turnIndex: 1,
      partnerPrompt:
        'Good afternoon! Please, take a seat. I see you booked this consultation slot for assignment guidance. What aspect of the essay prompt would you like clarification on?',
      partnerAudioText:
        'Good afternoon! Please, take a seat. I see you booked this consultation slot for assignment guidance. What aspect of the essay prompt would you like clarification on?',
      partnerQuestionHindi:
        'शुभ दोपहर! कृपया बैठिए। मैं देख रहा हूँ कि आपने असाइनमेंट मार्गदर्शन के लिए यह परामर्श स्लॉट बुक किया है। आप निबंध संकेत के किस पहलू पर स्पष्टीकरण चाहते हैं?',
      expectedFunction: 'Greeting the professor formally and asking for clarification using an indirect question',
      contextGoal: 'Greet Professor Hayes and ask him politely to clarify what is meant by "evaluating primary sources" in the essay prompt',
      targetVocabulary: ['Good afternoon', 'Professor Hayes', 'clarification', 'explain', 'primary sources', 'essay prompt'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Good afternoon, Professor Hayes. Could you please clarify what you mean by "evaluating primary sources" in section two of the prompt?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Professor Hayes. I was hoping you could explain what kind of primary sources we are expected to include in our research.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good afternoon, Professor Hayes. Could you elaborate on the source requirements? I want to make sure I select the right materials.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'formal_greeting',
          patterns: ['good afternoon', 'hello', 'professor hayes', 'prof hayes'],
          required: true,
        },
        {
          name: 'clarification_request',
          patterns: ['clarification', 'clarify', 'explain', 'elaborate', 'what you mean', 'primary sources', 'prompt', 'sources'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_216_1_blunt',
          pattern: /^i don’t know what primary sources is\.$/i,
          errorType: 'interaction',
          message: 'Use a polite indirect question: "Could you please explain what you mean by primary sources?"',
          correctionPattern: 'Could you please explain what you mean by primary sources, Professor Hayes?',
        },
      ],
      remediationPractice: {
        id: 'rem_216_1',
        type: 'fill_blank',
        prompt: 'Fill in: "Could you please ______ (clarify) this requirement?"',
        options: [
          { id: 'r1', text: 'clarify', isCorrect: true },
          { id: 'r2', text: 'clarification to', isCorrect: false },
        ],
        correctAnswer: 'clarify',
        explanation: 'Base verb after "Could you please".',
      },
    },
    {
      id: 'turn_216_2',
      turnIndex: 2,
      partnerPrompt:
        'By primary sources, I mean original historical documents, published interviews, or firsthand survey data collected by you, rather than just textbook summaries.',
      partnerAudioText:
        'By primary sources, I mean original historical documents, published interviews, or firsthand survey data collected by you, rather than just textbook summaries.',
      partnerQuestionHindi:
        'प्राथमिक स्रोतों से, मेरा मतलब केवल पाठ्यपुस्तक के सारांशों के बजाय आपके द्वारा एकत्र किए गए मूल ऐतिहासिक दस्तावेज, प्रकाशित साक्षात्कार या प्रत्यक्ष सर्वेक्षण डेटा है।',
      expectedFunction: 'Paraphrasing the explanation using "If I understand correctly..." and asking for a concrete example',
      contextGoal: 'Paraphrase using "If I understand correctly..." (e.g. we can conduct our own student survey or use real interview archives) and ask for a concrete example',
      targetVocabulary: ['understand correctly', 'In other words', 'survey data', 'interviews', 'concrete example', 'Professor Hayes'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'If I understand correctly, conducting a short survey among university students would count as a valid primary source? Could you give me an example?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'In other words, we can analyze recorded interviews or collect our own data. Could you give me a concrete example of a suitable topic?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'So if I understand correctly, using published transcripts from industry experts is acceptable? Could you give an example of how to cite them properly?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'paraphrasing_formula',
          patterns: ['if i understand correctly', 'in other words', 'so if i understand', 'do you mean'],
          required: true,
        },
        {
          name: 'example_request',
          patterns: ['concrete example', 'example', 'survey', 'interviews', 'data', 'topic'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_216_2_no_paraphrase',
          pattern: /^give me example\.$/i,
          errorType: 'interaction',
          message: 'Paraphrase first: "If I understand correctly, we can use our own survey? Could you give me an example?"',
          correctionPattern: 'If I understand correctly, we can use our own survey. Could you give an example?',
        },
      ],
      remediationPractice: {
        id: 'rem_216_2',
        type: 'multiple_choice',
        prompt: 'Which response correctly paraphrases and requests an example?',
        options: [
          { id: 'r1', text: 'If I understand correctly, we can use survey data. Could you give me an example?', isCorrect: true },
          { id: 'r2', text: 'You mean surveys? Give example now.', isCorrect: false },
        ],
        correctAnswer: 'If I understand correctly, we can use survey data. Could you give me an example?',
        explanation: 'Polite, professional, and confirms comprehension.',
      },
    },
    {
      id: 'turn_216_3',
      turnIndex: 3,
      partnerPrompt:
        'Exactly! For instance, if your essay is about campus study habits, you could survey 20 classmates about their library hours. That counts as your own primary data! Does that clarify things for your outline?',
      partnerAudioText:
        'Exactly! For instance, if your essay is about campus study habits, you could survey 20 classmates about their library hours. That counts as your own primary data! Does that clarify things for your outline?',
      partnerQuestionHindi:
        'बिल्कुल! उदाहरण के लिए, यदि आपका निबंध परिसर में अध्ययन की आदतों के बारे में है, तो आप 20 सहपाठियों के पुस्तकालय घंटों के बारे में सर्वेक्षण कर सकते हैं। यह आपके अपने प्राथमिक डेटा के रूप में गिना जाता है! क्या यह आपकी रूपरेखा के लिए चीजों को स्पष्ट करता है?',
      expectedFunction: 'Expressing gratitude for the clarity and asking one quick final question about submission format or deadline',
      contextGoal: 'Acknowledge that the example makes everything crystal clear, and ask about the submission format (e.g. PDF upload or printed copy)',
      targetVocabulary: ['crystal clear', 'clarified', 'submission format', 'PDF', 'portal', 'Professor Hayes', 'thank you'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'That makes it crystal clear, thank you! Could you also tell me if the final essay should be submitted as a PDF on the portal?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'That example is extremely helpful! Just to confirm, do we upload the assignment in PDF format by next Friday at 5 PM?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Everything makes total sense now. Could you confirm whether the bibliography should follow APA or Harvard referencing style?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'comprehension_acknowledgment',
          patterns: ['crystal clear', 'makes sense', 'helpful', 'clarified', 'understand', 'thank you', 'thanks'],
          required: true,
        },
        {
          name: 'final_technical_check',
          patterns: ['pdf', 'portal', 'submission', 'upload', 'referencing', 'apa', 'harvard', 'format', 'deadline'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_216_3_no_final_check',
          pattern: /^yes i know now\.$/i,
          errorType: 'interaction',
          message: 'Express appreciation and ask a practical question: "That is crystal clear, thank you! Should we submit in PDF format?"',
          correctionPattern: 'That is crystal clear, thank you! Could you confirm the submission format?',
        },
      ],
      remediationPractice: {
        id: 'rem_216_3',
        type: 'fill_blank',
        prompt: 'Fill in: "That makes it ______ (crystal) clear, thank you!"',
        options: [
          { id: 'r1', text: 'crystal', isCorrect: true },
          { id: 'r2', text: 'glass', isCorrect: false },
        ],
        correctAnswer: 'crystal',
        explanation: 'Idiomatic collocation: "crystal clear".',
      },
    },
    {
      id: 'turn_216_4',
      turnIndex: 4,
      partnerPrompt:
        'Yes, upload a single PDF file to the course portal before Friday at 5 PM. You have asked very insightful questions today. Best of luck with your survey and essay drafting!',
      partnerAudioText:
        'Yes, upload a single PDF file to the course portal before Friday at 5 PM. You have asked very insightful questions today. Best of luck with your survey and essay drafting!',
      partnerQuestionHindi:
        'हाँ, शुक्रवार को शाम 5 बजे से पहले पाठ्यक्रम पोर्टल पर एक एकल पीडीएफ फाइल अपलोड करें। आपने आज बहुत ज्ञानवर्धक प्रश्न पूछे हैं। आपके सर्वेक्षण और निबंध प्रारूपण के लिए शुभकामनाएँ!',
      expectedFunction: 'Closing the consultation with polite academic gratitude',
      contextGoal: 'Thank Professor Hayes warmly for his time and guidance, and wish him a pleasant afternoon',
      targetVocabulary: ['Thank you very much', 'Professor Hayes', 'time', 'guidance', 'pleasant afternoon', 'have a great day'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Thank you very much for your time and guidance today, Professor Hayes! Have a wonderful afternoon.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I really appreciate your helpful explanations, Professor Hayes. Thank you, and have a great day!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Thank you for clarifying all my questions so thoroughly, Professor Hayes. I look forward to working on the draft. Have a great week!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'formal_thanks',
          patterns: ['thank you', 'appreciate', 'professor hayes', 'time', 'guidance', 'explanations', 'thanks'],
          required: true,
        },
        {
          name: 'polite_closing',
          patterns: ['have a wonderful afternoon', 'have a great day', 'have a great week', 'goodbye', 'afternoon'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_216_4_short',
          pattern: /^(thanks bye|bye)$/i,
          errorType: 'interaction',
          message: 'Close with formal courtesy: "Thank you for your guidance, Professor Hayes. Have a wonderful afternoon!"',
          correctionPattern: 'Thank you very much for your time, Professor Hayes. Have a great day!',
        },
      ],
      remediationPractice: {
        id: 'rem_216_4',
        type: 'multiple_choice',
        prompt: 'Which response is the most appropriate closing for a professor consultation?',
        options: [
          { id: 'r1', text: 'Thank you very much for your time and guidance, Professor Hayes! Have a great afternoon.', isCorrect: true },
          { id: 'r2', text: 'Thanks mate see ya later.', isCorrect: false },
        ],
        correctAnswer: 'Thank you very much for your time and guidance, Professor Hayes! Have a great afternoon.',
        explanation: 'Respectful, professional, and appreciative.',
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
