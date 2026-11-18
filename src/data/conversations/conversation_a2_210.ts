import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_210: ConversationDefinition = {
  id: 'conv_a2_210',
  title: 'Comprehensive Social & Administrative Fluency',
  cefr: 'A2',
  unitId: 'unit_a2_14',
  lessonLinks: ['lesson_a2_14_210'],
  estimatedMinutes: 6,
  scenario:
    'You are in the Senior Academic Registry office speaking with Administrator Mr. Thorne. You need to resolve a multi-step administrative situation: clarifying an official registration notification, presenting proof of your module prerequisites, politely requesting an official stamped transcript for an exchange application, asking for repetition/clarification when needed, and summarizing your future academic study plan.',
  communicativeGoals: [
    'Integrate official administrative terminology (transcripts, prerequisites, stamped letters, registration deadlines)',
    'Apply conversational repair techniques (paraphrasing, clarifying meaning, asking for slower pace)',
    'Use diplomatic softeners when requesting official documentation and asking for administrative exceptions',
    'Synthesize academic goals, study habits, and clear narrative explanations in fluent A2 English',
  ],
  canDoStatements: [
    'Can handle complex administrative procedures at a university or public office in English',
    'Can negotiate solutions diplomatically and request official documents courteously',
    'Can repair misunderstandings and confirm instructions accurately',
  ],
  characters: [
    {
      id: 'char_mr_thorne_administrator',
      name: 'Mr. Thorne',
      role: 'Senior Academic Registry Administrator',
      avatar: '🏛️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'transcript',
        ipa: '/ˈtrænskrɪpt/',
        partOfSpeech: 'noun',
        meaning: 'An official record of a student’s work, showing courses taken and grades achieved',
        exampleSentence: 'I need an official stamped academic transcript for my scholarship application.',
        translations: { hi: 'अकादमिक अंकतालिका / प्रतिलेख (ट्रांसक्रिप्ट)' },
      },
      {
        word: 'prerequisite',
        ipa: '/ˌpriːˈrekwəzɪt/',
        partOfSpeech: 'noun',
        meaning: 'A thing that is required as a prior condition for something else to happen or exist',
        exampleSentence: 'Advanced Statistics requires Introductory Mathematics as a prerequisite.',
        translations: { hi: 'अनिवार्य पूर्व-शर्त (प्री-रेक्विज़िट)' },
      },
      {
        word: 'administrative',
        ipa: '/ədˈmɪnɪstrətɪv/',
        partOfSpeech: 'adjective',
        meaning: 'Relating to the running of a business, organization, or institution',
        exampleSentence: 'The registry handles all administrative matters regarding enrollment.',
        translations: { hi: 'प्रशासनिक / प्रबंधकीय' },
      },
      {
        word: 'endorsement',
        ipa: '/ɪnˈdɔːsmənt/',
        partOfSpeech: 'noun',
        meaning: 'An official mark, stamp, or signature authorizing a document',
        exampleSentence: 'The visa office requires an official institutional endorsement stamp.',
        translations: { hi: 'आधिकारिक पुष्टि / मुहर / पृष्ठांकन' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I was wondering if it might be possible to obtain an official stamped transcript today?',
        functionCategory: 'Diplomatic official request',
        exampleSentence: 'Could you possibly verify my course enrollment status?',
      },
      {
        phrase: 'If I understand correctly, I need to submit the supervisor form before Friday noon.',
        functionCategory: 'Administrative paraphrasing',
        exampleSentence: 'In other words, the fee has already been cleared on my account.',
      },
      {
        phrase: 'What I meant was that I completed the equivalent calculus module at my previous university.',
        functionCategory: 'Conversational repair of background',
        exampleSentence: 'Let me clarify my previous grades.',
      },
      {
        phrase: 'Thank you very much for your time and administrative guidance, Mr. Thorne.',
        functionCategory: 'Formal institutional gratitude',
        exampleSentence: 'I really appreciate your assistance with this matter.',
      },
    ],
    grammar: {
      title: 'Integrated Communicative Architecture: Administrative & Social Fluency',
      conceptExplanation:
        '1. Layer 1: Diplomatic Openers & Softening:\n   - "I was wondering if I could possibly [Request]"\n   - "Would you mind checking [Record]?"\n2. Layer 2: Comprehension & Repair:\n   - "Could you repeat that last requirement?"\n   - "If I understand correctly, [Paraphrase]"\n   - "What I actually meant was [Clarification]"\n3. Layer 3: Formal Closings & Gratitude:\n   - "Thank you for clarifying everything."\n   - "I appreciate your prompt assistance."',
      patternFormula: 'Diplomatic Request ➔ Repair/Paraphrase Confirmation ➔ Justification with Connectors ➔ Formal Appreciation',
      contrastExamples: [
        {
          incorrect: 'Give me my paper now I need it quick.',
          correct: 'I was wondering if it would be possible to request an official stamped copy of my transcript today?',
          explanation: 'Use indirect polite formulas in high-stakes administrative offices.',
        },
        {
          incorrect: 'I no know what you say.',
          correct: 'Pardon me, could you explain that requirement once more a bit more slowly?',
          explanation: 'Apply professional repair strategies rather than abrupt negatives.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Mr. Thorne',
        text: 'Good morning. Welcome to the Academic Registry. How may I assist you with your student file today?',
        translation: 'शुभ प्रभात। अकादमिक रजिस्ट्री में आपका स्वागत है। आज मैं आपकी छात्र फ़ाइल में आपकी किस प्रकार सहायता कर सकता हूँ?',
      },
      {
        speaker: 'Learner',
        text: 'Good morning, Mr. Thorne. I was wondering if it might be possible to obtain an official stamped transcript for my exchange program application?',
        translation: 'शुभ प्रभात, मिस्टर थॉर्न। मैं सोच रहा था कि क्या मेरे एक्सचेंज प्रोग्राम आवेदन के लिए एक आधिकारिक मुहर लगी प्रतिलेख (ट्रांसक्रिप्ट) प्राप्त करना संभव हो सकता है?',
      },
      {
        speaker: 'Mr. Thorne',
        text: 'Certainly! Let me look up your student record in our system.',
        translation: 'निश्चित रूप से! मुझे अपने सिस्टम में आपका छात्र रिकॉर्ड देखने दीजिए।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_210_1',
      type: 'fill_blank',
      prompt: 'Complete with the formal request: "I was wondering if I ______ (could / can) request an official transcript?"',
      options: [
        { id: 'opt_1', text: 'could', isCorrect: true },
        { id: 'opt_2', text: 'shall', isCorrect: false },
        { id: 'opt_3', text: 'will', isCorrect: false },
      ],
      correctAnswer: 'could',
      explanation: 'Use modal "could" with "I was wondering if...".',
    },
    {
      id: 'cp_210_2',
      type: 'multiple_choice',
      prompt: 'Which phrase is the most effective and polite way to paraphrase a complex registry procedure?',
      options: [
        { id: 'opt_1', text: 'If I understand correctly, I just need to upload my syllabus and collect the signed letter tomorrow.', isCorrect: true },
        { id: 'opt_2', text: 'You tell me easy things.', isCorrect: false },
        { id: 'opt_3', text: 'Paper is done.', isCorrect: false },
      ],
      correctAnswer: 'If I understand correctly, I just need to upload my syllabus and collect the signed letter tomorrow.',
      explanation: 'Accurate paraphrasing confirming administrative instructions.',
    },
    {
      id: 'cp_210_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [for your prompt assistance / thank you / Mr. Thorne / very much]',
      correctAnswer: 'thank you very much for your prompt assistance Mr. Thorne',
      explanation: 'Formal gratitude: thank you very much for + noun phrase + name.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_210_1',
      prompt: 'Construct an indirect diplomatic request to Mr. Thorne asking for an official stamped letter of enrollment.',
      scenarioContext: 'Requesting official university documentation.',
      targetStructure: 'I was wondering if you could possibly provide me with an official stamped letter of enrollment?',
      wordBank: ['I was wondering if', 'you could possibly provide', 'me with an official', 'stamped letter of enrollment?', 'for my visa.'],
      acceptableSolutions: [
        'I was wondering if you could possibly provide me with an official stamped letter of enrollment?',
        'I was wondering if I could obtain an official stamped letter of enrollment?',
      ],
      explanation: 'Diplomatic softened request formula.',
    },
    {
      id: 'sc_210_2',
      prompt: 'Construct a sentence clarifying that you completed the prerequisite module with a high grade last year.',
      scenarioContext: 'Explaining academic prerequisites.',
      targetStructure: 'What I meant was that I completed the mathematics prerequisite with an A grade last year.',
      wordBank: ['What I meant was', 'that I completed', 'the mathematics prerequisite', 'with an A grade', 'last year.'],
      acceptableSolutions: [
        'What I meant was that I completed the mathematics prerequisite with an A grade last year.',
        'To clarify, I completed the prerequisite module with an A grade last year.',
      ],
      explanation: 'Clarification formula with "What I meant was...".',
    },
  ],
  turns: [
    {
      id: 'turn_210_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning. Welcome to the Senior Registry. My name is Mr. Thorne. How may I assist you with your academic records today?',
      partnerAudioText:
        'Good morning. Welcome to the Senior Registry. My name is Mr. Thorne. How may I assist you with your academic records today?',
      partnerQuestionHindi:
        'शुभ प्रभात। वरिष्ठ रजिस्ट्री में आपका स्वागत है। मेरा नाम मिस्टर थॉर्न है। आज मैं आपके अकादमिक रिकॉर्ड में आपकी किस प्रकार सहायता कर सकता हूँ?',
      expectedFunction: 'Greeting the administrator formally and making a softened diplomatic request for an official stamped transcript',
      contextGoal: 'Greet formally: "Good morning Mr. Thorne. I was wondering if it might be possible to obtain an official stamped academic transcript for my exchange program application?"',
      targetVocabulary: ['Good morning Mr. Thorne', 'wondering if', 'official stamped transcript', 'exchange program', 'academic records', 'student ID'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Good morning Mr. Thorne! I was wondering if it might be possible to request an official stamped transcript for my study abroad application?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Good morning Mr. Thorne. Could I possibly request an official stamped copy of my academic transcript today? Here is my student ID card.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good morning Mr. Thorne. I was wondering if you could assist me with obtaining an embossed official transcript for an international exchange scholarship.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'formal_greeting',
          patterns: ['good morning', 'mr. thorne', 'mr thorne', 'hello mr. thorne'],
          required: true,
        },
        {
          name: 'diplomatic_request',
          patterns: ['wondering if', 'could i possibly', 'transcript', 'stamped', 'official', 'exchange', 'records'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_210_1_blunt',
          pattern: /^give me transcript/i,
          errorType: 'interaction',
          message: 'Use a diplomatic opener: "Good morning Mr. Thorne. I was wondering if I could request an official stamped transcript?"',
          correctionPattern: 'Good morning Mr. Thorne. I was wondering if I could request an official transcript?',
        },
      ],
      remediationPractice: {
        id: 'rem_210_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I was ______ (wondering) if I could get my transcript stamped."',
        options: [
          { id: 'r1', text: 'wondering', isCorrect: true },
          { id: 'r2', text: 'wanting', isCorrect: false },
        ],
        correctAnswer: 'wondering',
        explanation: '"I was wondering if..." is the standard polite request structure.',
      },
    },
    {
      id: 'turn_210_2',
      turnIndex: 2,
      partnerPrompt:
        'I see. Looking at our database, there appears to be a prerequisite flag on your advanced machine learning module because the introductory statistics equivalence has not been validated by the department chair.',
      partnerAudioText:
        'I see. Looking at our database, there appears to be a prerequisite flag on your advanced machine learning module because the introductory statistics equivalence has not been validated by the department chair.',
      partnerQuestionHindi:
        'मैं देख रहा हूँ। हमारे डेटाबेस को देखने पर, आपके उन्नत मशीन लर्निंग मॉड्यूल पर एक पूर्व-शर्त (prerequisite) ध्वज प्रतीत होता है क्योंकि परिचयात्मक सांख्यिकी समानता को विभागाध्यक्ष द्वारा मान्य नहीं किया गया है।',
      expectedFunction: 'Applying conversational repair, asking for clarification, and explaining prerequisite completion',
      contextGoal: 'Clarify: "Sorry, could you explain that? If I understand correctly, I just need the department chair’s signature to confirm my prior statistics course?"',
      targetVocabulary: ['understand correctly', 'prerequisite', 'department chair', 'statistics', 'signature', 'validated', 'clarify'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Sorry Mr. Thorne, could you clarify that? If I understand correctly, I just need the department chair to sign a waiver confirming my statistics background?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'In other words, do I need to bring a signed syllabus from my previous university to show that I completed the statistics prerequisite?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Let me make sure I follow: if I obtain written confirmation from Dr. Evans regarding my prior statistics grade, will you be able to remove the flag and stamp the transcript?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'repair_paraphrase',
          patterns: ['understand correctly', 'in other words', 'clarify', 'make sure i follow', 'sorry', 'could you explain'],
          required: true,
        },
        {
          name: 'prerequisite_resolution',
          patterns: ['department chair', 'signature', 'waiver', 'statistics', 'prerequisite', 'prior', 'syllabus', 'confirm'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_210_2_unclear_repair',
          pattern: /^i did study statistics\.$/i,
          errorType: 'interaction',
          message: 'Paraphrase the administrative requirement: "If I understand correctly, I need the department chair\'s sign-off?"',
          correctionPattern: 'If I understand correctly, I need the department chair to validate my statistics course.',
        },
      ],
      remediationPractice: {
        id: 'rem_210_2',
        type: 'multiple_choice',
        prompt: 'Which response effectively repairs and paraphrases the administrative requirement?',
        options: [
          { id: 'r1', text: 'If I understand correctly, I just need the department chair to validate my statistics prerequisite?', isCorrect: true },
          { id: 'r2', text: 'Why your computer say flag?', isCorrect: false },
        ],
        correctAnswer: 'If I understand correctly, I just need the department chair to validate my statistics prerequisite?',
        explanation: 'Polite and clear paraphrasing.',
      },
    },
    {
      id: 'turn_210_3',
      turnIndex: 3,
      partnerPrompt:
        'Precisely! An email confirmation from Dr. Evans sent directly to our registry inbox will suffice. Furthermore, if you send that by 2 PM today, I can have the official sealed transcript ready for collection by 4 PM. How does that sound for your schedule?',
      partnerAudioText:
        'Precisely! An email confirmation from Dr. Evans sent directly to our registry inbox will suffice. Furthermore, if you send that by 2 PM today, I can have the official sealed transcript ready for collection by 4 PM. How does that sound for your schedule?',
      partnerQuestionHindi:
        'बिल्कुल सही! डॉ. इवांस द्वारा सीधे हमारे रजिस्ट्री इनबॉक्स में भेजा गया एक ईमेल पुष्टिकरण पर्याप्त होगा। इसके अलावा, यदि आप इसे आज दोपहर 2 बजे तक भेज देते हैं, तो मैं शाम 4 बजे तक संग्रह के लिए आधिकारिक सीलबंद प्रतिलेख तैयार रख सकता हूँ। आपके शेड्यूल के लिए यह कैसा रहेगा?',
      expectedFunction: 'Accepting the timeline, explaining prompt action, and asking about payment/collection requirements',
      contextGoal: 'Confirm schedule ("That sounds perfect!"), state you will visit Dr. Evans right now, and ask if any fee or ID is required at 4 PM',
      targetVocabulary: ['sounds perfect', 'Dr. Evans', 'right now', '2 PM', '4 PM', 'collection', 'fee', 'Mr. Thorne'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'That sounds perfect! I will visit Dr. Evans’s office right now so she can email you before two. Do I need to pay any administrative fee when I collect it at four?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'That suits me brilliantly! I’ll see Dr. Evans immediately. Is there any paperwork or fee required when I return at 4 PM?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'That works seamlessly with my timetable. I’ll ensure Dr. Evans emails the clearance before lunch. Would you like me to bring proof of ID for the 4 PM pickup?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'schedule_agreement',
          patterns: ['sounds perfect', 'suits me', 'works', 'brilliantly', 'perfect', 'great'],
          required: true,
        },
        {
          name: 'immediate_action_and_check',
          patterns: ['dr. evans', 'right now', 'immediately', 'before two', 'fee', 'id', 'collect', '4 pm', 'four'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_210_3_short_ok',
          pattern: /^ok 4 pm\.$/i,
          errorType: 'interaction',
          message: 'Confirm enthusiastically, outline your immediate next step, and check collection details.',
          correctionPattern: 'That sounds perfect! I will see Dr. Evans right now and return at 4 PM.',
        },
      ],
      remediationPractice: {
        id: 'rem_210_3',
        type: 'fill_blank',
        prompt: 'Fill in: "That ______ (sounds) perfect! I will contact Dr. Evans right away."',
        options: [
          { id: 'r1', text: 'sounds', isCorrect: true },
          { id: 'r2', text: 'hears', isCorrect: false },
        ],
        correctAnswer: 'sounds',
        explanation: 'Formula: "That sounds perfect!".',
      },
    },
    {
      id: 'turn_210_4',
      turnIndex: 4,
      partnerPrompt:
        'There is no fee for official transcripts for current students, just bring your student card. You have handled this administrative issue with great clarity and professional courtesy. I will look out for Dr. Evans’s email!',
      partnerAudioText:
        'There is no fee for official transcripts for current students, just bring your student card. You have handled this administrative issue with great clarity and professional courtesy. I will look out for Dr. Evans’s email!',
      partnerQuestionHindi:
        'वर्तमान छात्रों के लिए आधिकारिक प्रतिलेखों के लिए कोई शुल्क नहीं है, बस अपना छात्र कार्ड लाएँ। आपने इस प्रशासनिक मुद्दे को बहुत स्पष्टता और पेशेवर शिष्टाचार के साथ संभाला है। मैं डॉ. इवांस के ईमेल का इंतजार करूंगा!',
      expectedFunction: 'Delivering formal closing gratitude and confirming return at 4 PM',
      contextGoal: 'Thank Mr. Thorne warmly for his outstanding guidance and confirm you will see him at 4 PM with your student card',
      targetVocabulary: ['Thank you very much', 'Mr. Thorne', 'guidance', 'student card', 'see you at four', 'have a great day'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Thank you very much for your outstanding guidance and patience, Mr. Thorne! I will see you at four o’clock with my student card. Have a wonderful day!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I really appreciate all your help and quick assistance today, Mr. Thorne. I’ll be back at 4 PM to collect the transcript. Have a great afternoon!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Thank you immensely for resolving this so efficiently, Mr. Thorne. I look forward to seeing you at 4 PM. Have a productive day ahead!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'formal_gratitude_closing',
          patterns: ['thank you', 'appreciate', 'mr. thorne', 'guidance', 'assistance', 'patience', 'efficiently'],
          required: true,
        },
        {
          name: 'return_confirmation',
          patterns: ['see you', 'four', '4 pm', 'student card', 'wonderful day', 'afternoon', 'collect'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_210_4_short',
          pattern: /^(thanks bye|see you)$/i,
          errorType: 'interaction',
          message: 'Close with formal courtesy: "Thank you very much for your assistance, Mr. Thorne. See you at four o’clock!"',
          correctionPattern: 'Thank you very much for your help, Mr. Thorne. See you at 4 PM!',
        },
      ],
      remediationPractice: {
        id: 'rem_210_4',
        type: 'multiple_choice',
        prompt: 'Which response closes this administrative meeting with maximum formal courtesy?',
        options: [
          { id: 'r1', text: 'Thank you very much for your guidance and patience, Mr. Thorne. See you at 4 PM!', isCorrect: true },
          { id: 'r2', text: 'Thanks mate see ya.', isCorrect: false },
        ],
        correctAnswer: 'Thank you very much for your guidance and patience, Mr. Thorne. See you at 4 PM!',
        explanation: 'Polite, respectful, and confirms the agreed return time.',
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
