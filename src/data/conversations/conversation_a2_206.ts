import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_206: ConversationDefinition = {
  id: 'conv_a2_206',
  title: 'Formal vs Informal Register, Email Correspondence & Digital Civility',
  cefr: 'A2',
  unitId: 'unit_a2_14',
  lessonLinks: ['lesson_a2_14_206'],
  estimatedMinutes: 5,
  scenario:
    'You are consulting University Career and Academic Skills Coach Arthur. You are preparing two emails: one formal email to Professor Higgins inquiring about an extension and attaching a medical note, and another informal email to a study group member. Arthur guides you through selecting appropriate salutations, professional subject lines, polite statement formulas, and respectful sign-offs.',
  communicativeGoals: [
    'Distinguish between formal academic/professional register and informal peer register',
    'Choose appropriate email salutations (Dear Professor Higgins vs Hi Alex) and sign-offs (Yours sincerely vs Best regards / Cheers)',
    'Formulate clear subject lines and polite purpose statements ("I am writing to inquire about...", "I would appreciate it if you could...")',
    'Reference email attachments appropriately ("Please find attached my medical certificate")',
  ],
  canDoStatements: [
    'Can write and verbally discuss formal and informal emails in English',
    'Can choose suitable greetings, opening sentences, and closings based on audience',
    'Can attach files and describe email attachments clearly and politely',
  ],
  characters: [
    {
      id: 'char_arthur_coach',
      name: 'Arthur',
      role: 'Academic & Career Skills Coach',
      avatar: '✉️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'salutation',
        ipa: '/ˌsæljʊˈteɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'A greeting in words or writing, especially at the start of an email or letter',
        exampleSentence: 'Use "Dear Professor Higgins" as a formal salutation in academic emails.',
        translations: { hi: 'अभिवादन / संबोधन' },
      },
      {
        word: 'attachment',
        ipa: '/əˈtætʃmənt/',
        partOfSpeech: 'noun',
        meaning: 'A computer file sent together with an email message',
        exampleSentence: 'Please find attached the draft of our group proposal.',
        translations: { hi: 'संलग्नक / संलग्न फाइल (अटैचमेंट)' },
      },
      {
        word: 'register',
        ipa: '/ˈredʒɪstə(r)/',
        partOfSpeech: 'noun',
        meaning: 'The level of formality in speech or writing, determined by the social context',
        exampleSentence: 'In academic correspondence, maintain a polite formal register.',
        translations: { hi: 'भाषा-शैली / औपचारिकता का स्तर (रजिस्टर)' },
      },
      {
        word: 'sincerely',
        ipa: '/sɪnˈsɪəli/',
        partOfSpeech: 'adverb',
        meaning: 'In a sincere or genuine way, used in formal sign-offs when the recipient is known by name',
        exampleSentence: 'End your formal letter with "Yours sincerely," followed by your full name.',
        translations: { hi: 'भवदीय / निष्ठापूर्वक' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Subject: Request for Assignment Extension — Rohit Patel (ID: 90214)',
        functionCategory: 'Professional subject line',
        exampleSentence: 'Subject: Inquiry Regarding Module Registration — Sarah Lee',
      },
      {
        phrase: 'I am writing to inquire about the possibility of a two-day extension.',
        functionCategory: 'Formal purpose statement',
        exampleSentence: 'I am writing to request a meeting regarding my thesis topic.',
      },
      {
        phrase: 'Please find attached my medical certificate for your consideration.',
        functionCategory: 'Referring to attachments',
        exampleSentence: 'Please find attached the completed application form.',
      },
      {
        phrase: 'Thank you for your time and assistance. Yours sincerely, Rohit Patel.',
        functionCategory: 'Formal closing formula',
        exampleSentence: 'Best regards, Rohit.',
      },
    ],
    grammar: {
      title: 'Formal Email Architecture & Register Contrast',
      conceptExplanation:
        '1. Formal vs Informal Salutations:\n   - Formal: "Dear Dr. / Professor [Surname],"\n   - Informal: "Hi [First Name]," / "Hey [Name],"\n2. Purpose Statements:\n   - Formal: "I am writing to inquire about / request..."\n   - Informal: "Just checking in about..."\n3. Attachments Phrasing:\n   - Formal: "Please find attached [Document]."\n   - Informal: "Here is the file!"\n4. Sign-offs:\n   - Formal (Named recipient): "Yours sincerely," / "Kind regards,"\n   - Informal: "Best," / "Cheers," / "See you soon,"',
      patternFormula: 'Dear [Title + Surname] ➔ I am writing to [Purpose] ➔ Please find attached [File] ➔ Yours sincerely, [Full Name]',
      contrastExamples: [
        {
          incorrect: 'Hey prof, give me more time for paper. Here doctor note.',
          correct: 'Dear Professor Higgins, I am writing to request a short extension. Please find attached my medical note.',
          explanation: 'Use formal salutations and polite requests when writing to faculty.',
        },
        {
          incorrect: 'Yours sincerely, to best friend in WhatsApp message.',
          correct: 'Hi Alex, see you at the library at 3! Cheers, Rohit.',
          explanation: 'Match informal register for peer chats and formal register for official requests.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Arthur',
        text: 'Good afternoon! Let’s review your email draft to Professor Higgins. What subject line and salutation did you choose?',
        translation: 'शुभ दोपहर! आइए प्रोफेसर हिगिंस को आपके ईमेल मसौदे की समीक्षा करें। आपने कौन सी विषय पंक्ति और अभिवादन चुना?',
      },
      {
        speaker: 'Learner',
        text: 'I wrote: "Subject: Request for Assignment Extension — Rohit Patel (ID: 90214)" and "Dear Professor Higgins,".',
        translation: 'मैंने लिखा: "विषय: असाइनमेंट विस्तार का अनुरोध — रोहित पटेल (आईडी: 90214)" और "प्रिय प्रोफेसर हिगिंस,"।',
      },
      {
        speaker: 'Arthur',
        text: 'That is impeccably clear and respectful! How did you state the purpose of your email?',
        translation: 'यह पूरी तरह से स्पष्ट और सम्मानजनक है! आपने अपने ईमेल का उद्देश्य कैसे बताया?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_206_1',
      type: 'fill_blank',
      prompt: 'Complete with the formal formula: "Please find ______ (attached / attaching) my research proposal."',
      options: [
        { id: 'opt_1', text: 'attached', isCorrect: true },
        { id: 'opt_2', text: 'attaching', isCorrect: false },
        { id: 'opt_3', text: 'attachment', isCorrect: false },
      ],
      correctAnswer: 'attached',
      explanation: 'Formula: "Please find attached [Document]".',
    },
    {
      id: 'cp_206_2',
      type: 'multiple_choice',
      prompt: 'Which sign-off is most appropriate for a formal email to a professor whose name you know?',
      options: [
        { id: 'opt_1', text: 'Yours sincerely, [Your Full Name]', isCorrect: true },
        { id: 'opt_2', text: 'Later dude, [Your Name]', isCorrect: false },
        { id: 'opt_3', text: 'Cheers, bye', isCorrect: false },
      ],
      correctAnswer: 'Yours sincerely, [Your Full Name]',
      explanation: '"Yours sincerely" is the standard formal sign-off for named recipients.',
    },
    {
      id: 'cp_206_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [to request / a two-day extension / I am writing / on my paper]',
      correctAnswer: 'I am writing to request a two-day extension on my paper',
      explanation: 'Subject + am writing to + request + object + prepositional phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_206_1',
      prompt: 'Construct a formal email opening sentence stating the reason for writing to your lecturer.',
      scenarioContext: 'Opening a formal academic email.',
      targetStructure: 'I am writing to inquire about the feedback on my midterm examination.',
      wordBank: ['I am writing', 'to inquire about', 'the feedback on', 'my midterm examination', 'from last week.'],
      acceptableSolutions: [
        'I am writing to inquire about the feedback on my midterm examination.',
        'I am writing to request feedback on my midterm examination.',
      ],
      explanation: 'Formal purpose opener "I am writing to inquire about...".',
    },
    {
      id: 'sc_206_2',
      prompt: 'Construct a sentence politely referencing an attached medical note in an email.',
      scenarioContext: 'Explaining an email attachment.',
      targetStructure: 'Please find attached the official medical certificate from the university clinic.',
      wordBank: ['Please find attached', 'the official medical certificate', 'from the university clinic', 'for your records.'],
      acceptableSolutions: [
        'Please find attached the official medical certificate from the university clinic.',
        'Please find attached my medical certificate for your consideration.',
      ],
      explanation: 'Use "Please find attached...".',
    },
  ],
  turns: [
    {
      id: 'turn_206_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello! Welcome to our academic email workshop. You mentioned you need to write an urgent email to Professor Higgins to request a two-day extension because you were unwell. What subject line and formal salutation should we use?',
      partnerAudioText:
        'Hello! Welcome to our academic email workshop. You mentioned you need to write an urgent email to Professor Higgins to request a two-day extension because you were unwell. What subject line and formal salutation should we use?',
      partnerQuestionHindi:
        'नमस्ते! हमारी अकादमिक ईमेल कार्यशाला में आपका स्वागत है। आपने उल्लेख किया कि अस्वस्थ होने के कारण आपको दो दिन के विस्तार का अनुरोध करने के लिए प्रोफेसर हिगिंस को एक जरूरी ईमेल लिखना होगा। हमें कौन सी विषय पंक्ति और औपचारिक अभिवादन का उपयोग करना चाहिए?',
      expectedFunction: 'Providing professional subject line and formal salutation',
      contextGoal: 'Provide a clear subject line with module name / student ID and formal greeting "Dear Professor Higgins,"',
      targetVocabulary: ['Subject', 'Extension Request', 'Student ID', 'Dear Professor Higgins', 'Arthur', 'formal'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Good afternoon Arthur! I would write: "Subject: Request for Assignment Extension — Rohit Patel (ID: 90214)" and start with "Dear Professor Higgins,".',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Arthur. The subject line should be "COMP501: Extension Request - Rohit Patel", followed by the salutation "Dear Professor Higgins,".',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I suggest "Subject: Assignment Extension Request — Rohit Patel, Student #90214", opening formally with "Dear Professor Higgins,".',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'subject_line_clarity',
          patterns: ['subject', 'extension', 'rohit patel', 'request', 'id', 'comp501', 'assignment'],
          required: true,
        },
        {
          name: 'formal_salutation',
          patterns: ['dear professor higgins', 'dear prof higgins', 'dear dr higgins', 'dear professor'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_206_1_informal_salutation',
          pattern: /hi higgins/i,
          errorType: 'vocabulary',
          message: 'Use title and surname: "Dear Professor Higgins," not "Hi Higgins".',
          correctionPattern: 'Dear Professor Higgins,',
        },
      ],
      remediationPractice: {
        id: 'rem_206_1',
        type: 'fill_blank',
        prompt: 'Fill in: "______ (Dear) Professor Higgins,"',
        options: [
          { id: 'r1', text: 'Dear', isCorrect: true },
          { id: 'r2', text: 'Hey', isCorrect: false },
        ],
        correctAnswer: 'Dear',
        explanation: '"Dear" is the standard formal salutation.',
      },
    },
    {
      id: 'turn_206_2',
      turnIndex: 2,
      partnerPrompt:
        'Excellent! That subject line includes your name, course, and student ID immediately. Now, how will you formulate your opening sentence and clearly explain the reason for your extension request?',
      partnerAudioText:
        'Excellent! That subject line includes your name, course, and student ID immediately. Now, how will you formulate your opening sentence and clearly explain the reason for your extension request?',
      partnerQuestionHindi:
        'उत्कृष्ट! उस विषय पंक्ति में तुरंत आपका नाम, पाठ्यक्रम और छात्र आईडी शामिल है। अब, आप अपना शुरुआती वाक्य कैसे तैयार करेंगे और अपने विस्तार अनुरोध के कारण को स्पष्ट रूप से कैसे समझाएंगे?',
      expectedFunction: 'Drafting formal purpose statement and stating illness/reason politely',
      contextGoal: 'Write "I am writing to request a two-day extension on the database assignment due to unexpected illness"',
      targetVocabulary: ['I am writing to', 'request', 'extension', 'due to', 'illness', 'assignment', 'two days'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I am writing to politely request a two-day extension on our database project due to an unexpected illness this week.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I am writing to inquire if it would be possible to have a 48-hour extension because I have been unwell with a severe fever.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I am writing to respectfully request a short extension until Sunday evening, as I was bedridden with the flu for three days.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'formal_purpose',
          patterns: ['i am writing to', 'request', 'inquire', 'extension', 'two-day', '48-hour', 'short extension'],
          required: true,
        },
        {
          name: 'valid_reason',
          patterns: ['illness', 'unwell', 'fever', 'flu', 'sick', 'medical', 'unexpected'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_206_2_informal_opener',
          pattern: /^i want extension/i,
          errorType: 'interaction',
          message: 'Use the standard formal opener: "I am writing to request an extension..."',
          correctionPattern: 'I am writing to request a two-day extension...',
        },
      ],
      remediationPractice: {
        id: 'rem_206_2',
        type: 'multiple_choice',
        prompt: 'Which opening sentence is most appropriate for a formal email to a professor?',
        options: [
          { id: 'r1', text: 'I am writing to request a two-day extension due to illness.', isCorrect: true },
          { id: 'r2', text: 'I need two more days because I was sick.', isCorrect: false },
        ],
        correctAnswer: 'I am writing to request a two-day extension due to illness.',
        explanation: 'Polite and formal purpose statement.',
      },
    },
    {
      id: 'turn_206_3',
      turnIndex: 3,
      partnerPrompt:
        'Very courteous and clear! You also have a medical certificate from the university clinic. How will you reference this attached document in your email body?',
      partnerAudioText:
        'Very courteous and clear! You also have a medical certificate from the university clinic. How will you reference this attached document in your email body?',
      partnerQuestionHindi:
        'बहुत विनम्र और स्पष्ट! आपके पास विश्वविद्यालय क्लिनिक से एक मेडिकल प्रमाण पत्र भी है। आप अपने ईमेल में इस संलग्न दस्तावेज़ का उल्लेख कैसे करेंगे?',
      expectedFunction: 'Referencing an email attachment using formal phrasing ("Please find attached...")',
      contextGoal: 'Write "Please find attached the official medical certificate from the university clinic for your consideration"',
      targetVocabulary: ['Please find attached', 'medical certificate', 'clinic', 'consideration', 'records', 'attached'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Please find attached the official medical certificate from the university health centre for your consideration.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'For your reference, please find attached my doctor’s note confirming my diagnosis and recommended rest.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I have attached the signed medical note from the campus clinic for your verification.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'attachment_formula',
          patterns: ['please find attached', 'have attached', 'attached', 'find attached'],
          required: true,
        },
        {
          name: 'document_description',
          patterns: ['medical certificate', 'doctor’s note', 'clinic', 'health centre', 'note', 'consideration', 'reference'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_206_3_casual_attachment',
          pattern: /see attached/i,
          errorType: 'vocabulary',
          message: 'In academic writing, use the complete polite phrase: "Please find attached my medical certificate."',
          correctionPattern: 'Please find attached my medical certificate.',
        },
      ],
      remediationPractice: {
        id: 'rem_206_3',
        type: 'fill_blank',
        prompt: 'Fill in: "Please find ______ (attached) my medical certificate."',
        options: [
          { id: 'r1', text: 'attached', isCorrect: true },
          { id: 'r2', text: 'attaching', isCorrect: false },
        ],
        correctAnswer: 'attached',
        explanation: 'We use past participle "attached".',
      },
    },
    {
      id: 'turn_206_4',
      turnIndex: 4,
      partnerPrompt:
        'Now for the closing! What final polite sentence, formal sign-off, and signature block should conclude this email?',
      partnerAudioText:
        'Now for the closing! What final polite sentence, formal sign-off, and signature block should conclude this email?',
      partnerQuestionHindi:
        'अब समापन के लिए! इस ईमेल को समाप्त करने के लिए कौन सा अंतिम विनम्र वाक्य, औपचारिक समापन और हस्ताक्षर ब्लॉक होना चाहिए?',
      expectedFunction: 'Providing formal closing sentence, sign-off ("Yours sincerely,"), and full name signature block',
      contextGoal: 'Write "Thank you for your time and understanding. Yours sincerely, Rohit Patel (Student ID: 90214)"',
      targetVocabulary: ['Thank you for your time', 'understanding', 'Yours sincerely', 'Rohit Patel', 'Student ID'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Thank you very much for your time and understanding. Yours sincerely, Rohit Patel.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I appreciate your time and consideration. Kind regards, Rohit Patel (Student ID: 90214).',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Thank you for your support and understanding. Yours sincerely, Rohit Patel, MSc Data Science.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'gratitude_closing',
          patterns: ['thank you', 'time', 'understanding', 'consideration', 'appreciate', 'support'],
          required: true,
        },
        {
          name: 'formal_signoff',
          patterns: ['yours sincerely', 'kind regards', 'sincerely', 'rohit patel', 'rohit'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_206_4_casual_signoff',
          pattern: /(cheers|bye|later)/i,
          errorType: 'vocabulary',
          message: 'Do not use casual sign-offs like "Cheers" or "Bye" in formal emails to professors. Use "Yours sincerely,".',
          correctionPattern: 'Yours sincerely, Rohit Patel.',
        },
      ],
      remediationPractice: {
        id: 'rem_206_4',
        type: 'multiple_choice',
        prompt: 'Which sign-off is most appropriate for a formal email to a named professor?',
        options: [
          { id: 'r1', text: 'Thank you for your time and understanding. Yours sincerely, Rohit Patel.', isCorrect: true },
          { id: 'r2', text: 'Thanks mate, see ya Rohit.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for your time and understanding. Yours sincerely, Rohit Patel.',
        explanation: 'Polite and professional sign-off.',
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
