import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_196: ConversationDefinition = {
  id: 'conv_a2_196',
  title: 'Official Forms, Personal Details & Applications',
  cefr: 'A2',
  unitId: 'unit_a2_14',
  lessonLinks: ['lesson_a2_14_196'],
  estimatedMinutes: 5,
  scenario:
    'You are at the municipal registration office in Manchester to complete your local residency and library registration form. Administrative Officer Mr. Vance assists you with filling out personal details in BLOCK CAPITALS, verifying your identity fields, and signing the official declaration.',
  communicativeGoals: [
    'Provide personal identity details accurately (surname, forename, date of birth, nationality, occupation)',
    'Understand form completion instructions such as "BLOCK CAPITALS", "delete where inapplicable", and "signature"',
    'Ask for clarification on specific form sections or required supporting documents',
    'Confirm understanding and sign the official declaration',
  ],
  canDoStatements: [
    'Can complete official registration forms and verbally clarify identity fields',
    'Can understand instructions written on administrative forms in English',
    'Can provide full name, address, emergency contact, and nationality with correct spelling and pronunciation',
  ],
  characters: [
    {
      id: 'char_mr_vance_clerk',
      name: 'Mr. Vance',
      role: 'Municipal Registration Officer',
      avatar: '📋',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'surname',
        ipa: '/ˈsɜːneɪm/',
        partOfSpeech: 'noun',
        meaning: 'Your family name or last name',
        exampleSentence: 'Please print your surname first in block capital letters.',
        translations: { hi: 'उपनाम / कुलनाम' },
      },
      {
        word: 'forename',
        ipa: '/ˈfɔːneɪm/',
        partOfSpeech: 'noun',
        meaning: 'Your first name or given name',
        exampleSentence: 'My forename is Priya and my surname is Sharma.',
        translations: { hi: 'प्रथम नाम' },
      },
      {
        word: 'declaration',
        ipa: '/ˌdekləˈreɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'A formal or explicit statement or announcement confirming that details provided are true',
        exampleSentence: 'You must sign and date the declaration at the bottom of the page.',
        translations: { hi: 'घोषणा / औपचारिक पुष्टि' },
      },
      {
        word: 'occupation',
        ipa: '/ˌɒkjuˈpeɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'A job or profession',
        exampleSentence: 'For my occupation, I wrote "university student".',
        translations: { hi: 'व्यवसाय / पेशा' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Please write in BLOCK CAPITALS using a black or blue pen.',
        functionCategory: 'Administrative instruction',
        exampleSentence: 'Remember to fill the form in BLOCK CAPITALS.',
      },
      {
        phrase: 'My date of birth is the fourteenth of August, nineteen ninety-eight.',
        functionCategory: 'Stating birth date',
        exampleSentence: 'My date of birth is the third of May, two thousand.',
      },
      {
        phrase: 'Could you tell me what I should write under "emergency contact"?',
        functionCategory: 'Asking for form clarification',
        exampleSentence: 'Should I write my local address or permanent address?',
      },
      {
        phrase: 'I declare that the information provided is correct and complete.',
        functionCategory: 'Official declaration confirmation',
        exampleSentence: 'I have signed the declaration and attached my ID copy.',
      },
    ],
    grammar: {
      title: 'Administrative Form Conventions & Explicit Identity Phrases',
      conceptExplanation:
        '1. Stating Names & Titles:\n   - Surname (Family Name / Last Name)\n   - Forename / Given Name (First Name)\n   - Title: Mr. / Ms. / Mrs. / Dr.\n2. Dates & Addresses Format:\n   - Date of Birth: DD/MM/YYYY (e.g., 14/08/1998)\n   - Postcode / Postal Code\n3. Imperatives on Forms:\n   - "Print clearly in BLOCK CAPITALS"\n   - "Delete where inapplicable"\n   - "Tick the appropriate box"',
      patternFormula: 'My [detail] is [Value] | Could you tell me what to write in [Field]?',
      contrastExamples: [
        {
          incorrect: 'My last name is John and first name is Smith.',
          correct: 'My forename is John and my surname is Smith.',
          explanation: 'Forename is given name (John); surname is family name (Smith).',
        },
        {
          incorrect: 'I sign in small letters on the block capitals field.',
          correct: 'I printed my name in BLOCK CAPITALS and signed on the signature line.',
          explanation: 'Block capitals means all uppercase printed letters (e.g., SMITH).',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Mr. Vance',
        text: 'Good morning. Welcome to Manchester Municipal Services. Are you here to register your residency form?',
        translation: 'शुभ प्रभात। मैनचेस्टर म्युनिसिपल सर्विसेज में आपका स्वागत है। क्या आप यहाँ अपना निवास पंजीकरण फॉर्म जमा करने आए हैं?',
      },
      {
        speaker: 'Learner',
        text: 'Good morning! Yes, I have filled in most of the form, but I have a quick question about the address section.',
        translation: 'शुभ प्रभात! हाँ, मैंने अधिकांश फॉर्म भर लिया है, लेकिन मुझे पते के भाग के बारे में एक छोटा सा प्रश्न पूछना है।',
      },
      {
        speaker: 'Mr. Vance',
        text: 'Certainly. Let’s review your details together.',
        translation: 'बिल्कुल। आइए साथ में आपके विवरणों की समीक्षा करें।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_196_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct term: "Your family name is also called your ______ (surname / forename)."',
      options: [
        { id: 'opt_1', text: 'surname', isCorrect: true },
        { id: 'opt_2', text: 'forename', isCorrect: false },
        { id: 'opt_3', text: 'occupation', isCorrect: false },
      ],
      correctAnswer: 'surname',
      explanation: 'Surname refers to your family name or last name.',
    },
    {
      id: 'cp_196_2',
      type: 'multiple_choice',
      prompt: 'What does the instruction "WRITE IN BLOCK CAPITALS" mean?',
      options: [
        { id: 'opt_1', text: 'Write every letter clearly in uppercase print (like THIS).', isCorrect: true },
        { id: 'opt_2', text: 'Write in cursive handwriting with a pencil.', isCorrect: false },
        { id: 'opt_3', text: 'Leave the box blank.', isCorrect: false },
      ],
      correctAnswer: 'Write every letter clearly in uppercase print (like THIS).',
      explanation: 'Block capitals requires all uppercase printed letters.',
    },
    {
      id: 'cp_196_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [my date of birth / is the twelfth / of October / nineteen ninety-nine]',
      correctAnswer: 'my date of birth is the twelfth of October nineteen ninety-nine',
      explanation: 'Subject + verb + day + month + year.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_196_1',
      prompt: 'Construct a sentence stating your full name, nationality, and current occupation for an official form.',
      scenarioContext: 'Introducing your personal details to Mr. Vance.',
      targetStructure: 'My forename is Rohit, my surname is Patel, and I am an Indian postgraduate student.',
      wordBank: ['My forename is', 'Rohit,', 'my surname is', 'Patel,', 'and I am', 'an Indian student'],
      acceptableSolutions: [
        'My forename is Rohit, my surname is Patel, and I am an Indian student.',
        'My surname is Patel, my forename is Rohit, and I am a student.',
      ],
      explanation: 'State forename, surname, nationality, and occupation clearly.',
    },
    {
      id: 'sc_196_2',
      prompt: 'Construct a polite question asking what document you should attach as proof of residence.',
      scenarioContext: 'Inquiring at the counter.',
      targetStructure: 'Could you please tell me which proof of address I should attach?',
      wordBank: ['Could you please', 'tell me', 'which proof of address', 'I should attach', 'to this form'],
      acceptableSolutions: [
        'Could you please tell me which proof of address I should attach?',
        'Could you tell me what proof of address I need to attach?',
      ],
      explanation: 'Use polite indirect inquiry "Could you please tell me which...".',
    },
  ],
  turns: [
    {
      id: 'turn_196_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning! Welcome to Counter 4. Please hand me your registration form. Before I stamp it, could you state your full name and spell your surname for the record?',
      partnerAudioText:
        'Good morning! Welcome to Counter 4. Please hand me your registration form. Before I stamp it, could you state your full name and spell your surname for the record?',
      partnerQuestionHindi:
        'शुभ प्रभात! काउंटर 4 पर आपका स्वागत है। कृपया मुझे अपना पंजीकरण फॉर्म दें। इस पर मुहर लगाने से पहले, क्या आप रिकॉर्ड के लिए अपना पूरा नाम बता सकते हैं और अपने उपनाम की स्पेलिंग बोल सकते हैं?',
      expectedFunction: 'Stating full name and spelling surname clearly',
      contextGoal: 'State forename and surname, spelling the surname letter by letter',
      targetVocabulary: ['forename', 'surname', 'my name is', 'spelled'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Good morning! My forename is Rohit and my surname is Patel, spelled P-A-T-E-L.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello. My full name is Rohit Patel. That is P-A-T-E-L.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good morning Officer Vance. My first name is Rohit and my family name is Patel, P-A-T-E-L.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'name_intro',
          patterns: ['my name is', 'forename', 'surname', 'full name', 'first name', 'patel', 'rohit'],
          required: true,
        },
        {
          name: 'spelling_letters',
          patterns: ['p-a-t-e-l', 'patel', 'spelled', 'spelt', 'letters'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_196_1_surname_swap',
          pattern: /my surname is rohit/i,
          errorType: 'vocabulary',
          message: 'Rohit is your forename (given name); Patel is your surname (family name).',
          correctionPattern: 'My forename is Rohit and my surname is Patel.',
        },
      ],
      remediationPractice: {
        id: 'rem_196_1',
        type: 'fill_blank',
        prompt: 'Fill in: "My ______ (forename) is Rohit and my surname is Patel."',
        options: [
          { id: 'r1', text: 'forename', isCorrect: true },
          { id: 'r2', text: 'title', isCorrect: false },
        ],
        correctAnswer: 'forename',
        explanation: 'Forename is your first name.',
      },
    },
    {
      id: 'turn_196_2',
      turnIndex: 2,
      partnerPrompt:
        'Thank you, Mr. Patel. I see you wrote your current Manchester address, but section 3 requires your date of birth, nationality, and current occupation. Could you give me those details now?',
      partnerAudioText:
        'Thank you, Mr. Patel. I see you wrote your current Manchester address, but section 3 requires your date of birth, nationality, and current occupation. Could you give me those details now?',
      partnerQuestionHindi:
        'धन्यवाद, मिस्टर पटेल। मैं देख रहा हूँ कि आपने अपना वर्तमान मैनचेस्टर पता लिखा है, लेकिन खंड 3 में आपकी जन्म तिथि, राष्ट्रीयता और वर्तमान व्यवसाय की आवश्यकता है। क्या आप मुझे वे विवरण अभी दे सकते हैं?',
      expectedFunction: 'Providing date of birth, nationality, and occupation',
      contextGoal: 'State birth date (day/month/year), nationality (e.g. Indian), and occupation (e.g. student)',
      targetVocabulary: ['date of birth', 'nationality', 'occupation', 'student', 'born'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'My date of birth is the twelfth of May, nineteen ninety-nine. I am Indian, and my occupation is student.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I was born on May twelfth, 1999. My nationality is Indian and I am a university student.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'My date of birth is 12/05/1999, my nationality is Indian, and I am currently studying as a postgraduate student.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'dob',
          patterns: ['date of birth', 'born', 'may', 'nineteen', '1999', '1998', '2000', 'twelfth'],
          required: true,
        },
        {
          name: 'nationality_and_job',
          patterns: ['indian', 'nationality', 'occupation', 'student', 'studying'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_196_2_country_for_nat',
          pattern: /my nationality is india\b/i,
          errorType: 'grammar',
          message: 'Use the nationality adjective "Indian", not the country noun "India".',
          correctionPattern: 'My nationality is Indian.',
        },
      ],
      remediationPractice: {
        id: 'rem_196_2',
        type: 'multiple_choice',
        prompt: 'Which form states nationality correctly?',
        options: [
          { id: 'r1', text: 'My nationality is Indian.', isCorrect: true },
          { id: 'r2', text: 'My nationality is India.', isCorrect: false },
        ],
        correctAnswer: 'My nationality is Indian.',
        explanation: 'Use the nationality word (Indian).',
      },
    },
    {
      id: 'turn_196_3',
      turnIndex: 3,
      partnerPrompt:
        'Great, I have entered those in the system. Now look at section 5: Emergency Contact. Who should we contact in case of an emergency, and what is their relationship to you and telephone number?',
      partnerAudioText:
        'Great, I have entered those in the system. Now look at section 5: Emergency Contact. Who should we contact in case of an emergency, and what is their relationship to you and telephone number?',
      partnerQuestionHindi:
        'बहुत बढ़िया, मैंने उन्हें सिस्टम में दर्ज कर दिया है। अब खंड 5 देखें: आपातकालीन संपर्क। आपात स्थिति में हमें किससे संपर्क करना चाहिए, और आपके साथ उनका क्या संबंध है और उनका टेलीफोन नंबर क्या है?',
      expectedFunction: 'Providing emergency contact details, relationship, and contact number',
      contextGoal: 'State emergency contact person (e.g. brother, cousin, friend), name, and phone number',
      targetVocabulary: ['emergency contact', 'relationship', 'brother', 'cousin', 'phone number', 'contact'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'My emergency contact is my brother, Amit Patel. His telephone number is 07700 900123.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'You can contact my cousin Sunita. She lives in Manchester and her mobile number is 07890 123456.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'For emergency contact, please list my brother Amit Patel. His relationship is brother, and his phone is 07700 900123.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'contact_person',
          patterns: ['brother', 'cousin', 'friend', 'sister', 'amit', 'sunita', 'patel', 'emergency contact'],
          required: true,
        },
        {
          name: 'phone_or_details',
          patterns: ['number', 'phone', 'mobile', '07', 'telephone', 'call'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_196_3_no_rel',
          pattern: /^07/i,
          errorType: 'interaction',
          message: 'Please state the person\'s name and their relationship to you along with the number.',
          correctionPattern: 'My emergency contact is my brother Amit Patel, phone 07700 900123.',
        },
      ],
      remediationPractice: {
        id: 'rem_196_3',
        type: 'fill_blank',
        prompt: 'Fill in: "His ______ (relationship) to me is brother."',
        options: [
          { id: 'r1', text: 'relationship', isCorrect: true },
          { id: 'r2', text: 'surname', isCorrect: false },
        ],
        correctAnswer: 'relationship',
        explanation: 'Relationship indicates how the contact is related to you.',
      },
    },
    {
      id: 'turn_196_4',
      turnIndex: 4,
      partnerPrompt:
        'All sections are now complete. Please read the declaration at the bottom stating all information is accurate, then print today’s date and sign your name right here. Do you have any final questions about your registration card?',
      partnerAudioText:
        'All sections are now complete. Please read the declaration at the bottom stating all information is accurate, then print today’s date and sign your name right here. Do you have any final questions about your registration card?',
      partnerQuestionHindi:
        'सभी खंड अब पूरे हो चुके हैं। कृपया नीचे दी गई घोषणा पढ़ें जिसमें कहा गया है कि सभी जानकारी सटीक है, फिर आज की तारीख लिखें और यहाँ अपने हस्ताक्षर करें। क्या आपके पास अपने पंजीकरण कार्ड के बारे में कोई अंतिम प्रश्न है?',
      expectedFunction: 'Confirming declaration, signing, and politely asking when the card will be ready',
      contextGoal: 'Sign the declaration, confirm details are true, and ask when the registration card will arrive or be collected',
      targetVocabulary: ['declaration', 'signed', 'date', 'ready', 'card', 'thank you'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I have signed the declaration and dated it. When will my registration card be ready to collect?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I declare that everything is accurate. I have signed here. How long does it take to receive the card?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I have signed and dated the declaration. Thank you for your help, Mr. Vance! Will you post the card to my address?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'signed_declaration',
          patterns: ['signed', 'declaration', 'date', 'signed here', 'signed it'],
          required: true,
        },
        {
          name: 'card_inquiry',
          patterns: ['card', 'ready', 'collect', 'receive', 'post', 'how long', 'when', 'thank you'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_196_4_short',
          pattern: /^(done|signed)$/i,
          errorType: 'interaction',
          message: 'Provide a polite confirmation and ask when your card will be available.',
          correctionPattern: 'I have signed the declaration. When will my registration card be ready?',
        },
      ],
      remediationPractice: {
        id: 'rem_196_4',
        type: 'multiple_choice',
        prompt: 'Which sentence confirms an official declaration politely?',
        options: [
          { id: 'r1', text: 'I have signed and dated the declaration. When will the card be ready?', isCorrect: true },
          { id: 'r2', text: 'I sign paper, give card now.', isCorrect: false },
        ],
        correctAnswer: 'I have signed and dated the declaration. When will the card be ready?',
        explanation: 'Polite and clear administrative closing.',
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
