import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_204: ConversationDefinition = {
  id: 'conv_a2_204',
  title: 'Softening Requests, Asking for Favours & Polite Declining',
  cefr: 'A2',
  unitId: 'unit_a2_14',
  lessonLinks: ['lesson_a2_14_204'],
  estimatedMinutes: 5,
  scenario:
    'You and your postgraduate classmate Hannah are collaborating on a shared research project. You ask her for a small favour (borrowing her statistical textbook and checking a data spreadsheet), use diplomatic softeners to make polite requests, and handle an invitation or extra task by declining gracefully due to prior study commitments.',
  communicativeGoals: [
    'Ask for favours diplomatically using "Would you mind -ing...", "I was wondering if you could...", "Could you possibly..."',
    'Soften direct requests using pragmatic softeners ("just", "a little bit", "by any chance", "if it’s not too much trouble")',
    'Decline requests or social invitations politely without causing offense ("I’d love to, but unfortunately...", "I wish I could, but...")',
    'Negotiate alternative solutions or reschedule mutual assistance smoothly',
  ],
  canDoStatements: [
    'Can ask for favours and assistance using polite, softened language in English',
    'Can decline invitations and requests graciously with valid explanations',
    'Can respond appropriately to requests with "Not at all", "I’d be happy to", or "I’m afraid I can’t"',
  ],
  characters: [
    {
      id: 'char_hannah_colleague',
      name: 'Hannah',
      role: 'Classmate & Research Partner',
      avatar: '🌸',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'favour',
        ipa: '/ˈfeɪvər/',
        partOfSpeech: 'noun',
        meaning: 'An act of kindness beyond what is strictly required or due',
        exampleSentence: 'Could I ask you for a quick favour before you head home?',
        translations: { hi: 'उपकार / मदद / एहसान (फेवर)' },
      },
      {
        word: 'softener',
        ipa: '/ˈsɒfnə(r)/',
        partOfSpeech: 'noun',
        meaning: 'A word or phrase (like just, possibly, maybe) used to make a request less blunt or demanding',
        exampleSentence: 'Adding "by any chance" acts as a polite softener.',
        translations: { hi: 'विनम्रता बढ़ाने वाला शब्द (सॉफ्टनर)' },
      },
      {
        word: 'diplomatic',
        ipa: '/ˌdɪpləˈmætɪk/',
        partOfSpeech: 'adjective',
        meaning: 'Having or showing an ability to deal with people in a sensitive and tactful way',
        exampleSentence: 'She gave a diplomatic response when declining the invitation.',
        translations: { hi: 'कूटनीतिक / सौम्य / शिष्ट' },
      },
      {
        word: 'unfortunately',
        ipa: '/ʌnˈfɔːtʃənətli/',
        partOfSpeech: 'adverb',
        meaning: 'It is a matter of regret or ill fortune that something is the case',
        exampleSentence: 'I would love to help, but unfortunately I have an exam tomorrow morning.',
        translations: { hi: 'दुर्भाग्यवश / खेद है कि' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Would you mind checking this calculation for me when you have a minute?',
        functionCategory: 'Diplomatic favour with "Would you mind -ing"',
        exampleSentence: 'Would you mind closing the study room window?',
      },
      {
        phrase: 'I was wondering if you could possibly lend me your statistics book tonight?',
        functionCategory: 'Indirect past progressive request',
        exampleSentence: 'I was wondering if you had some spare paper.',
      },
      {
        phrase: 'I’d love to join you for dinner, but unfortunately I have a strict deadline.',
        functionCategory: 'Polite refusal with reason',
        exampleSentence: 'I wish I could, but I already have an appointment.',
      },
      {
        phrase: 'No problem at all! / Not at all, I’d be glad to help.',
        functionCategory: 'Agreeing to a favour',
        exampleSentence: 'Sure, I don’t mind at all.',
      },
    ],
    grammar: {
      title: 'Polite Request Structures & Softening Adverbials',
      conceptExplanation:
        '1. "Would you mind + Verb-ing...?":\n   - Note: Answering "No, not at all" means YES (I am happy to do it).\n2. Indirect Softened Openers:\n   - "I was wondering if you could + Base Verb..."\n   - "Could you possibly + Base Verb...?"\n3. Modifying Softeners:\n   - "just", "a little bit", "by any chance"\n4. Graceful Declining Formula:\n   - Positive Desire + "but unfortunately" + Clear Reason + Alternative',
      patternFormula: 'I was wondering if you could [Verb] | Would you mind [Verb-ing]? | I’d love to, but unfortunately [Reason]',
      contrastExamples: [
        {
          incorrect: 'Give me your book now.',
          correct: 'I was wondering if I could borrow your statistics book for an hour?',
          explanation: 'Never use bare imperatives when asking peers for personal favours.',
        },
        {
          incorrect: 'Would you mind to help me? — Yes. (meaning I help)',
          correct: 'Would you mind helping me? — Not at all, I’d be glad to!',
          explanation: '"Would you mind" takes the gerund (-ing), and "Not at all" agrees to help.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Learner',
        text: 'Hi Hannah! I was wondering if you could do me a small favour if you’re not too busy?',
        translation: 'नमस्ते हैना! मैं सोच रहा था कि यदि आप बहुत व्यस्त नहीं हैं तो क्या आप मेरी एक छोटी सी मदद कर सकती हैं?',
      },
      {
        speaker: 'Hannah',
        text: 'Sure thing! What do you need help with?',
        translation: 'बिल्कुल! आपको किस चीज़ में मदद चाहिए?',
      },
      {
        speaker: 'Learner',
        text: 'Would you mind taking a quick look at my Python script by any chance?',
        translation: 'क्या आप किसी तरह मेरे पायथन स्क्रिप्ट पर एक त्वरित नज़र डालने का कष्ट करेंगी?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_204_1',
      type: 'fill_blank',
      prompt: 'Complete with the gerund form: "Would you mind ______ (checking / to check) this formula for me?"',
      options: [
        { id: 'opt_1', text: 'checking', isCorrect: true },
        { id: 'opt_2', text: 'to check', isCorrect: false },
        { id: 'opt_3', text: 'check', isCorrect: false },
      ],
      correctAnswer: 'checking',
      explanation: '"Would you mind" is always followed by a gerund (-ing).',
    },
    {
      id: 'cp_204_2',
      type: 'multiple_choice',
      prompt: 'Which response politely declines an evening movie invitation due to study work?',
      options: [
        { id: 'opt_1', text: 'I’d love to, but unfortunately I have to finish my assignment tonight.', isCorrect: true },
        { id: 'opt_2', text: 'I don’t want to go with you.', isCorrect: false },
        { id: 'opt_3', text: 'Movie is boring for me.', isCorrect: false },
      ],
      correctAnswer: 'I’d love to, but unfortunately I have to finish my assignment tonight.',
      explanation: 'Diplomatic structure: Positive desire + "but unfortunately" + reason.',
    },
    {
      id: 'cp_204_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [if you could / I was wondering / lend me / your notes]',
      correctAnswer: 'I was wondering if you could lend me your notes',
      explanation: 'Softened opener: I was wondering if you could + verb phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_204_1',
      prompt: 'Construct a sentence using "I was wondering if..." to ask Hannah to borrow her textbook.',
      scenarioContext: 'Asking to borrow a book.',
      targetStructure: 'I was wondering if I could borrow your statistics textbook until tomorrow morning?',
      wordBank: ['I was wondering if', 'I could borrow', 'your statistics textbook', 'until tomorrow morning', 'by any chance?'],
      acceptableSolutions: [
        'I was wondering if I could borrow your statistics textbook until tomorrow morning?',
        'I was wondering if you could lend me your statistics textbook tonight?',
      ],
      explanation: 'Indirect request with "I was wondering if...".',
    },
    {
      id: 'sc_204_2',
      prompt: 'Construct a diplomatic sentence declining a party invitation because of an early presentation.',
      scenarioContext: 'Declining an invitation politely.',
      targetStructure: 'I’d love to come, but unfortunately I have an important presentation at 8 AM tomorrow.',
      wordBank: ['I’d love to come,', 'but unfortunately', 'I have an important', 'presentation at 8 AM', 'tomorrow morning.'],
      acceptableSolutions: [
        'I’d love to come, but unfortunately I have an important presentation at 8 AM tomorrow.',
        'I wish I could, but unfortunately I have a presentation tomorrow morning.',
      ],
      explanation: 'Positive interest + "but unfortunately" + reason.',
    },
  ],
  turns: [
    {
      id: 'turn_204_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! I am just packing up my laptop in the study lounge. Did you want to ask me something before I leave?',
      partnerAudioText:
        'Hi there! I am just packing up my laptop in the study lounge. Did you want to ask me something before I leave?',
      partnerQuestionHindi:
        'नमस्ते! मैं अध्ययन कक्ष में अपना लैपटॉप पैक कर रही हूँ। क्या आप मेरे जाने से पहले मुझसे कुछ पूछना चाहते थे?',
      expectedFunction: 'Asking for a favour using softened diplomatic language ("I was wondering if...")',
      contextGoal: 'Ask if she could do you a quick favour by checking your project spreadsheet or lending a book',
      targetVocabulary: ['favour', 'wondering if', 'just', 'by any chance', 'minute', 'Hannah'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hi Hannah! I was wondering if you could do me a small favour if you have just a minute?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Hannah! Could I possibly ask you for a quick favour by any chance before you head off?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Hi Hannah! I was wondering if you’d mind doing me a quick favour? It will only take two minutes.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'favour_formula',
          patterns: ['wondering if', 'favour', 'favor', 'could i possibly', 'would you mind', 'quick favour', 'small favour'],
          required: true,
        },
        {
          name: 'softener_terms',
          patterns: ['just', 'minute', 'by any chance', 'small', 'quick', 'hannah', 'busy'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_204_1_direct_demand',
          pattern: /^help me now/i,
          errorType: 'interaction',
          message: 'Use a softened opener like "I was wondering if you could do me a small favour?"',
          correctionPattern: 'I was wondering if you could do me a quick favour?',
        },
      ],
      remediationPractice: {
        id: 'rem_204_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I was ______ (wondering) if you could help me for a minute."',
        options: [
          { id: 'r1', text: 'wondering', isCorrect: true },
          { id: 'r2', text: 'wondered', isCorrect: false },
        ],
        correctAnswer: 'wondering',
        explanation: 'Formula is "I was wondering if...".',
      },
    },
    {
      id: 'turn_204_2',
      turnIndex: 2,
      partnerPrompt:
        'Of course! I have about ten minutes before my bus arrives. What can I do to help?',
      partnerAudioText:
        'Of course! I have about ten minutes before my bus arrives. What can I do to help?',
      partnerQuestionHindi:
        'बिल्कुल! मेरी बस आने से पहले मेरे पास लगभग दस मिनट हैं। मैं मदद के लिए क्या कर सकती हूँ?',
      expectedFunction: 'Making the specific softened request using "Would you mind -ing...?"',
      contextGoal: 'Ask her if she would mind checking your summary table or spreadsheet for mistakes',
      targetVocabulary: ['Would you mind', 'checking', 'spreadsheet', 'summary', 'take a look', 'mistakes'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Would you mind taking a quick look at my summary table to see if the totals look right?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Would you mind checking these three formulas on my spreadsheet? I want to make sure they are accurate.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Would you mind glancing over my data analysis table just to confirm I haven’t missed anything obvious?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'mind_gerund',
          patterns: ['would you mind checking', 'would you mind taking', 'would you mind glancing', 'would you mind looking', 'could you look'],
          required: true,
        },
        {
          name: 'target_object',
          patterns: ['spreadsheet', 'summary', 'table', 'formulas', 'data', 'totals', 'accurate'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_204_2_mind_infinitive',
          pattern: /would you mind to check/i,
          errorType: 'grammar',
          message: '"Would you mind" requires the -ing form: "Would you mind checking...?"',
          correctionPattern: 'Would you mind checking...?',
        },
      ],
      remediationPractice: {
        id: 'rem_204_2',
        type: 'multiple_choice',
        prompt: 'Which sentence is grammatically correct?',
        options: [
          { id: 'r1', text: 'Would you mind checking my table?', isCorrect: true },
          { id: 'r2', text: 'Would you mind to check my table?', isCorrect: false },
        ],
        correctAnswer: 'Would you mind checking my table?',
        explanation: 'Use the -ing form after "Would you mind".',
      },
    },
    {
      id: 'turn_204_3',
      turnIndex: 3,
      partnerPrompt:
        'Not at all! Let me see... yes, your column totals and averages look spot on! By the way, a few of us are going to the student union pub quiz tonight at 8 PM. Would you like to join our quiz team?',
      partnerAudioText:
        'Not at all! Let me see... yes, your column totals and averages look spot on! By the way, a few of us are going to the student union pub quiz tonight at 8 PM. Would you like to join our quiz team?',
      partnerQuestionHindi:
        'बिल्कुल नहीं (खुशी से)! मुझे देखने दीजिए... हाँ, आपके कॉलम योग और औसत बिल्कुल सही दिख रहे हैं! वैसे, हममें से कुछ लोग आज रात 8 बजे स्टूडेंट यूनियन पब क्विज़ में जा रहे हैं। क्या आप हमारी क्विज़ टीम में शामिल होना चाहेंगे?',
      expectedFunction: 'Declining the invitation diplomatically with a valid reason ("I’d love to, but unfortunately...")',
      contextGoal: 'Thank her for checking the table, express regret, and decline politely due to early morning study/presentation',
      targetVocabulary: ['I’d love to', 'unfortunately', 'deadline', 'exam', 'wish I could', 'rain check', 'thank you'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Thank you so much for checking! I’d love to join the quiz, but unfortunately I have an early morning exam tomorrow.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Thanks a lot for your help! I wish I could come, but unfortunately I have to finish writing my chapter tonight. Can I take a rain check?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'You’re a lifesaver with those formulas! I’d really love to join, but unfortunately I need an early night before my presentation. Good luck with the quiz!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'polite_refusal',
          patterns: ['i’d love to', 'unfortunately', 'wish i could', 'i would love to', 'regret'],
          required: true,
        },
        {
          name: 'valid_reason',
          patterns: ['exam', 'presentation', 'study', 'early', 'deadline', 'finish', 'tonight', 'chapter'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_204_3_blunt_decline',
          pattern: /^no i can't go/i,
          errorType: 'interaction',
          message: 'Soften the refusal with enthusiasm first: "I’d love to, but unfortunately I have to study."',
          correctionPattern: 'I’d love to, but unfortunately I have an exam tomorrow.',
        },
      ],
      remediationPractice: {
        id: 'rem_204_3',
        type: 'fill_blank',
        prompt: 'Fill in: "I’d love to, ______ (but) unfortunately I am busy tonight."',
        options: [
          { id: 'r1', text: 'but', isCorrect: true },
          { id: 'r2', text: 'so', isCorrect: false },
        ],
        correctAnswer: 'but',
        explanation: 'We contrast the desire with reality using "but unfortunately".',
      },
    },
    {
      id: 'turn_204_4',
      turnIndex: 4,
      partnerPrompt:
        'Totally understandable! Good luck with your study session tonight. Let’s definitely catch up for lunch tomorrow after your morning presentation. Have a wonderful evening!',
      partnerAudioText:
        'Totally understandable! Good luck with your study session tonight. Let’s definitely catch up for lunch tomorrow after your morning presentation. Have a wonderful evening!',
      partnerQuestionHindi:
        'पूरी तरह से समझ में आता है! आज रात आपके अध्ययन सत्र के लिए शुभकामनाएँ। कल आपकी सुबह की प्रस्तुति के बाद दोपहर के भोजन के लिए निश्चित रूप से मिलते हैं। आपकी शाम शानदार रहे!',
      expectedFunction: 'Confirming the lunch catch-up and closing warmly',
      contextGoal: 'Accept lunch tomorrow, thank Hannah warmly, and wish her good luck on the pub quiz',
      targetVocabulary: ['lunch tomorrow', 'thank you', 'Hannah', 'good luck', 'catch up', 'evening'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Lunch tomorrow sounds wonderful! Thank you again for all your help, Hannah. Have fun at the quiz!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'That’s a deal! Let’s meet at the cafe around 1 PM. Thanks a million and good luck tonight!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Perfect! I’ll text you right after my presentation finishes. Thanks again Hannah, have a fantastic evening!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'lunch_confirmation',
          patterns: ['lunch', 'tomorrow', 'sounds wonderful', 'meet', 'deal', 'catch up', 'cafe'],
          required: true,
        },
        {
          name: 'warm_closing',
          patterns: ['thank you', 'thanks', 'hannah', 'fun', 'good luck', 'fantastic evening', 'quiz'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_204_4_short',
          pattern: /^(ok|bye|see you)$/i,
          errorType: 'interaction',
          message: 'Provide a warm confirmation and thank your partner.',
          correctionPattern: 'Lunch tomorrow sounds great! Thank you again Hannah, and have fun!',
        },
      ],
      remediationPractice: {
        id: 'rem_204_4',
        type: 'multiple_choice',
        prompt: 'Which response confirms a future social plan warmly?',
        options: [
          { id: 'r1', text: 'Lunch tomorrow sounds wonderful! Thank you again Hannah, and have fun tonight.', isCorrect: true },
          { id: 'r2', text: 'Yes, lunch tomorrow bye.', isCorrect: false },
        ],
        correctAnswer: 'Lunch tomorrow sounds wonderful! Thank you again Hannah, and have fun tonight.',
        explanation: 'Warm, positive, and polite closure.',
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
