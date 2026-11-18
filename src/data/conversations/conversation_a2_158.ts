import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_158: ConversationDefinition = {
  id: 'conv_a2_158',
  title: 'Personal Finance, Budgeting, Spending Habits & Smart Shopping',
  cefr: 'A2',
  unitId: 'unit_a2_11',
  lessonLinks: ['lesson_a2_11_158'],
  estimatedMinutes: 5,
  scenario:
    'You are in a personal financial consultation at MoneyWise Advisory in Edinburgh meeting with counselor Arthur Pendelton. You are reviewing your monthly income, living expenses, and savings strategy. You will analyze spending habits using financial phrasal verbs ("cut down on", "put aside", "pay off", "shop around"), form First Conditionals to project savings ("If I cook at home more often, I will put aside £250 monthly"), and establish a practical financial plan.',
  communicativeGoals: [
    'Analyze household income, recurring expenses, and budgeting categories',
    'Use financial phrasal verbs accurately ("cut down on", "put aside", "pay off", "run out of")',
    'Form First Conditional sentences to evaluate money-saving choices ("If I cancel unused subscriptions, I will save money")',
    'Establish concrete financial goals and ask about emergency fund guidelines',
  ],
  canDoStatements: [
    'Can discuss personal budgeting, monthly expenses, and saving habits at A2 level',
    'Can use First Conditional sentences to explain financial outcomes and goals',
    'Can apply essential financial phrasal verbs in conversational dialogues',
  ],
  characters: [
    {
      id: 'char_arthur_pendelton',
      name: 'Arthur Pendelton',
      role: 'Personal Financial Counselor',
      avatar: '📊',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'budget',
        ipa: '/ˈbʌdʒɪt/',
        partOfSpeech: 'noun',
        meaning: 'An estimate of income and expenditure for a set period of time',
        exampleSentence: 'Creating a monthly budget helps track unnecessary spending.',
        translations: { hi: 'बजट / आय-व्यय का लेखा-जोखा' },
      },
      {
        word: 'put aside',
        ipa: '/pʊt əˈsaɪd/',
        partOfSpeech: 'phrasal_verb',
        meaning: 'To save or keep something (especially money) for a specific purpose or emergency',
        exampleSentence: 'I try to put aside twenty percent of my salary each month.',
        translations: { hi: 'बचत करके अलग रखना' },
      },
      {
        word: 'cut down on',
        ipa: '/kʌt daʊn ɒn/',
        partOfSpeech: 'phrasal_verb',
        meaning: 'To reduce the quantity or frequency of something consumed or spent',
        exampleSentence: 'If I cut down on takeout meals, I will save £150 a month.',
        translations: { hi: 'खर्च या खपत में कटौती करना' },
      },
      {
        word: 'pay off',
        ipa: '/peɪ ɒf/',
        partOfSpeech: 'phrasal_verb',
        meaning: 'To finish paying all the money that you owe for a debt or loan',
        exampleSentence: 'My priority is to pay off my credit card balance this year.',
        translations: { hi: 'कर्ज पूरी तरह चुकता करना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'If I cut down on dining out, I will put aside an extra £200 every month.',
        functionCategory: 'First Conditional for Financial Projections',
        exampleSentence: 'If you cook at home, you will spend less.',
      },
      {
        phrase: 'I want to shop around for cheaper utility providers to lower my bills.',
        functionCategory: 'Smart Shopping & Expense Reduction',
        exampleSentence: 'Always shop around before buying insurance.',
      },
      {
        phrase: 'My primary goal is to pay off high-interest debts before investing.',
        functionCategory: 'Prioritizing Financial Goals',
        exampleSentence: 'He wants to pay off student loans.',
      },
      {
        phrase: 'How many months of living expenses should I keep in an emergency fund?',
        functionCategory: 'Inquiring About Financial Guidance',
        exampleSentence: 'How much should I save for emergencies?',
      },
    ],
    grammar: {
      title: 'First Conditionals for Financial Planning & Financial Phrasal Verbs',
      conceptExplanation:
        '1. First Conditional for Financial Outcomes: "If + Present Simple, will + Base Verb" (e.g., "If I reduce utility bills, I will save £50 monthly").\n2. Financial Phrasal Verbs:\n   - "cut down on" = reduce consumption/spending\n   - "put aside" = save for future\n   - "pay off" = eliminate debt\n   - "run out of" = exhaust funds\n   - "shop around" = compare prices before buying.',
      patternFormula: 'If + Subject + Present Simple, Subject + will + [Base Verb] / Phrasal Verb',
      contrastExamples: [
        {
          incorrect: 'If I will cut down dining out, I put aside money.',
          correct: 'If I cut down on dining out, I will put aside £200 a month.',
          explanation: 'Use Present Simple in the if-clause ("if I cut down") and "will + base verb" in the result clause.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Arthur Pendelton',
        text: 'Welcome to MoneyWise! Looking at your preliminary budget sheet, what are your major monthly expenses, and where do you think you can reduce costs?',
        translation: 'मनीवाइज़ में आपका स्वागत है! अपनी प्रारंभिक बजट शीट को देखते हुए, आपके प्रमुख मासिक खर्च क्या हैं, और आपको क्या लगता है कि आप लागत कहाँ कम कर सकते हैं?',
      },
      {
        speaker: 'You',
        text: 'My largest expenses are rent and dining out. If I cut down on restaurant meals and cook at home, I will put aside £200 every month.',
        translation: 'मेरे सबसे बड़े खर्च किराया और बाहर खाना हैं। यदि मैं रेस्तरां के भोजन में कटौती करता हूँ और घर पर खाना बनाता हूँ, तो मैं हर महीने £200 अलग रखूँगा।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_158_1',
      type: 'fill_blank',
      prompt: 'Complete the First Conditional: "If I ___ (cancel / will cancel) unnecessary subscriptions, I will save £40 each month."',
      options: [
        { id: 'opt_1', text: 'cancel', isCorrect: true },
        { id: 'opt_2', text: 'will cancel', isCorrect: false },
        { id: 'opt_3', text: 'cancelling', isCorrect: false },
      ],
      correctAnswer: 'cancel',
      explanation: 'Use the Present Simple in the "if" clause of the First Conditional.',
    },
    {
      id: 'cp_a2_158_2',
      type: 'multiple_choice',
      prompt: 'Which phrasal verb means "to compare prices across multiple stores before purchasing"?',
      options: [
        { id: 'opt_1', text: 'shop around', isCorrect: true },
        { id: 'opt_2', text: 'run out of', isCorrect: false },
        { id: 'opt_3', text: 'pay off', isCorrect: false },
      ],
      correctAnswer: 'shop around',
      explanation: '"Shop around" means to compare alternative sellers and prices.',
    },
    {
      id: 'cp_a2_158_3',
      type: 'multiple_choice',
      prompt: 'Which sentence uses financial phrasal verbs accurately?',
      options: [
        { id: 'opt_1', text: 'I plan to cut down on entertainment spending so I can put aside an emergency fund.', isCorrect: true },
        { id: 'opt_2', text: 'I plan to cut up on spending so I put down an emergency fund.', isCorrect: false },
        { id: 'opt_3', text: 'I run off money every week.', isCorrect: false },
      ],
      correctAnswer: 'I plan to cut down on entertainment spending so I can put aside an emergency fund.',
      explanation: 'Correct usage of "cut down on" and "put aside".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_158_1',
      scenarioContext: 'Form a conditional saving sentence.',
      prompt: 'Build: "If I cook at home, I will save money."',
      targetStructure: 'If I cook at home + I will save money',
      wordBank: ['If', 'I', 'cook', 'at', 'home', 'will', 'save', 'money', 'cooking', 'would'],
      acceptableSolutions: [
        'If I cook at home I will save money',
        'If I cook at home, I will save money.',
        'If I cook at home, I will save money',
      ],
      explanation: 'First Conditional: [If + Present Simple, will + Base Verb].',
    },
    {
      id: 'sc_a2_158_2',
      scenarioContext: 'State a debt payoff goal.',
      prompt: 'Build: "I want to pay off my credit card debt."',
      targetStructure: 'I want to pay off + my credit card debt',
      wordBank: ['I', 'want', 'to', 'pay', 'off', 'my', 'credit', 'card', 'debt', 'paying'],
      acceptableSolutions: [
        'I want to pay off my credit card debt',
        'I want to pay off my credit card debt.',
      ],
      explanation: 'Phrasal verb "pay off".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_158_1',
      turnIndex: 1,
      partnerPrompt:
        'Good afternoon! I’m Arthur. Let’s look at your monthly income and expenditures. What are your biggest spending categories, and how could you adjust your habits to save more money?',
      partnerAudioText:
        'Good afternoon! I’m Arthur. Let’s look at your monthly income and expenditures. What are your biggest spending categories, and how could you adjust your habits to save more money?',
      partnerQuestionHindi:
        'शुभ दोपहर! मैं आर्थर हूँ। आइए आपकी मासिक आय और व्यय पर नज़र डालें। आपकी सबसे बड़ी खर्च श्रेणियां क्या हैं, और अधिक पैसे बचाने के लिए आप अपनी आदतों को कैसे समायोजित कर सकते हैं?',
      expectedFunction: 'Explain Expenses & Conditional Savings with Phrasal Verbs (My biggest expenses are rent and groceries / If I cut down on takeout, I will put aside £200 monthly)',
      contextGoal:
        'State that major expenses are rent and eating out, and use a First Conditional with "cut down on" and "put aside" (e.g. If I cut down on dining out, I will put aside £200).',
      targetVocabulary: ['major expenses are rent and dining out', 'If I cut down on takeout', 'I will put aside £200 every month', 'monthly budget', 'cook meals at home'],
      suggestedResponses: [
        {
          label: 'Conditional Savings with Phrasal Verbs',
          text: 'Good afternoon, Arthur. My biggest expenses are rent and dining out. If I cut down on takeout coffee and restaurant meals, I will put aside an extra £200 each month.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Budget Evaluation',
          text: 'Rent and entertainment take most of my salary. If I cook at home and shop around for groceries, I will save £250 monthly.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Expenses Stated (rent / dining / food / entertainment / bills / groceries / expenses / spending)',
          patterns: ['rent', 'dining', 'food', 'entertainment', 'bills', 'groceries', 'expenses', 'spending', 'takeout'],
          required: true,
        },
        {
          name: 'First Conditional & Phrasal Verbs (if / cut down / put aside / save / will / cook / reduce / shop around)',
          patterns: ['if', 'cut down', 'put aside', 'save', 'will', 'cook', 'reduce', 'shop around', 'less'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_will_in_if',
          pattern: 'if i will cut down|if i will cook',
          errorType: 'grammar',
          message: 'Do not use "will" in the if-clause. Use Present Simple: "If I cut down on...", "If I cook...".',
          correctionPattern: 'If I cut down on dining out, I will save money',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_158_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "If I ___ (cut / will cut) down on subscriptions, I will put aside more savings."',
        options: [
          { id: 'opt_1', text: 'cut', isCorrect: true },
          { id: 'opt_2', text: 'will cut', isCorrect: false },
          { id: 'opt_3', text: 'cutting', isCorrect: false },
        ],
        correctAnswer: 'cut',
        explanation: 'Present Simple follows "If" in First Conditional.',
      },
    },
    {
      id: 'turn_a2_158_2',
      turnIndex: 2,
      partnerPrompt:
        'Putting aside £200 every month is a realistic and powerful target. Now, what about your liabilities? Do you have any credit card balances or personal loans that you want to pay off?',
      partnerAudioText:
        'Putting aside £200 every month is a realistic and powerful target. Now, what about your liabilities? Do you have any credit card balances or personal loans that you want to pay off?',
      partnerQuestionHindi:
        'हर महीने £200 अलग रखना एक यथार्थवादी और शक्तिशाली लक्ष्य है। अब, आपकी देनदारियों के बारे में क्या? क्या आपके पास कोई क्रेडिट कार्ड बैलेंस या व्यक्तिगत ऋण है जिसे आप चुकाना चाहते हैं?',
      expectedFunction: 'Explain Debt Strategy with Phrasal Verbs (I have a £1,200 credit card balance that I want to pay off within six months)',
      contextGoal:
        'State your goal to pay off a credit card balance using "pay off" and conditional reasoning (e.g. If I allocate £200 monthly, I will pay it off by autumn).',
      targetVocabulary: ['pay off my credit card balance', 'allocate £200 each month', 'avoid high interest charges', 'debt-free in six months'],
      suggestedResponses: [
        {
          label: 'Debt Payoff Plan with Conditional',
          text: 'Yes, I have a £1,200 credit card balance. If I allocate £200 each month, I will pay it off completely in six months and avoid heavy interest fees.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Debt Strategy',
          text: 'My priority is to pay off my £1,200 credit card balance over the next six months by cutting down unnecessary expenses.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Debt & Payoff (pay off / credit card / balance / debt / loan / 1,200 / interest)',
          patterns: ['pay off', 'credit card', 'balance', 'debt', 'loan', '1200', '1,200', 'interest', 'clear'],
          required: true,
        },
        {
          name: 'Timeline or Monthly Allocation (six months / monthly / allocate / 200 / per month / soon)',
          patterns: ['six months', '6 months', 'monthly', 'allocate', '200', 'per month', 'soon', 'year'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_158_2',
        type: 'multiple_choice',
        prompt: 'Which sentence uses "pay off" correctly to describe eliminating debt?',
        options: [
          { id: 'opt_1', text: 'I want to pay off my loan as quickly as possible.', isCorrect: true },
          { id: 'opt_2', text: 'I want to pay on my loan as quickly.', isCorrect: false },
          { id: 'opt_3', text: 'I want to pay over loan.', isCorrect: false },
        ],
        correctAnswer: 'I want to pay off my loan as quickly as possible.',
        explanation: '"Pay off" is the phrasal verb meaning to fully settle a debt.',
      },
    },
    {
      id: 'turn_a2_158_3',
      turnIndex: 3,
      partnerPrompt:
        'Paying off high-interest debt within six months will save you a lot of interest charges. After that, building an emergency fund is crucial. Do you have any questions about how much emergency savings you ought to keep?',
      partnerAudioText:
        'Paying off high-interest debt within six months will save you a lot of interest charges. After that, building an emergency fund is crucial. Do you have any questions about how much emergency savings you ought to keep?',
      partnerQuestionHindi:
        'छह महीने के भीतर उच्च-ब्याज वाले ऋण का भुगतान करने से आपका बहुत सारा ब्याज खर्च बचेगा। उसके बाद, एक आपातकालीन निधि बनाना महत्वपूर्ण है। क्या आपके पास कोई प्रश्न है कि आपको कितनी आपातकालीन बचत रखनी चाहिए?',
      expectedFunction: 'Ask Financial Advisor on Emergency Fund Guidelines (How many months of living expenses should I keep in my emergency savings fund?)',
      contextGoal:
        'Ask Arthur how many months of living expenses you should keep in an emergency fund and whether it should be in a high-yield savings account.',
      targetVocabulary: ['How many months of expenses should I put aside?', 'emergency fund', 'high-yield savings account', 'accessible cash'],
      suggestedResponses: [
        {
          label: 'Emergency Fund Question',
          text: 'How many months of living expenses should I put aside in an emergency fund, and do you recommend a high-interest savings account?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Question',
          text: 'How much money should I keep in an emergency fund for unexpected costs?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Emergency Fund Inquiry (how many / how much / emergency fund / expenses / savings / put aside / months / ?)',
          patterns: ['how many', 'how much', 'emergency fund', 'expenses', 'savings', 'put aside', 'months', 'keep', '?'],
          required: true,
        },
        {
          name: 'Account or Strategy (account / interest / where / advice / recommend)',
          patterns: ['account', 'interest', 'where', 'advice', 'recommend', 'costs', 'safe'],
          required: false,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_158_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "How much money should I ___ (put aside / put down on) for emergencies?"',
        options: [
          { id: 'opt_1', text: 'put aside', isCorrect: true },
          { id: 'opt_2', text: 'put down on', isCorrect: false },
          { id: 'opt_3', text: 'putting aside', isCorrect: false },
        ],
        correctAnswer: 'put aside',
        explanation: '"Put aside" means save for future needs.',
      },
    },
    {
      id: 'turn_a2_158_4',
      turnIndex: 4,
      partnerPrompt:
        'I recommend keeping three to six months of essential living expenses in an accessible high-yield account. You have a solid, practical strategy! Could you summarize your personal financial plan?',
      partnerAudioText:
        'I recommend keeping three to six months of essential living expenses in an accessible high-yield account. You have a solid, practical strategy! Could you summarize your personal financial plan?',
      partnerQuestionHindi:
        'मैं एक सुलभ उच्च-उपज वाले खाते में तीन से छह महीने के आवश्यक रहने के खर्च को रखने की सलाह देता हूँ। आपके पास एक ठोस, व्यावहारिक रणनीति है! क्या आप अपनी व्यक्तिगत वित्तीय योजना का संक्षेप प्रस्तुत कर सकते हैं?',
      expectedFunction: 'Summarize Budget Strategy & Goals (To summarize, I will cut down on dining out to save £200 monthly, pay off my credit card in six months, and build an emergency fund)',
      contextGoal:
        'Summarize your plan: cut down on dining out, put aside £200/month, pay off £1,200 credit card in 6 months, build a 3-6 month emergency fund, and thank Arthur.',
      targetVocabulary: ['To summarize my financial plan', 'cut down on takeout and dining out', 'put aside £200 monthly', 'pay off £1,200 credit card in six months', 'build 3-6 months emergency fund', 'thank you Arthur'],
      suggestedResponses: [
        {
          label: 'Comprehensive Financial Summary',
          text: 'To summarize my plan: I will cut down on restaurant spending to put aside £200 monthly, pay off my £1,200 credit card in six months, and then build a three-to-six-month emergency fund. Thank you for your expert advice, Arthur!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Financial Summary',
          text: 'In summary, I will save £200 monthly by cooking at home, pay off my credit card within six months, and save for emergencies. Thanks for your help, Arthur!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Summary Signpost (to summarize / in summary / summary / plan / agreed / so)',
          patterns: ['to summarize', 'in summary', 'summary', 'plan', 'agreed', 'so'],
          required: true,
        },
        {
          name: 'Key Plan Actions (cut down / 200 / pay off / credit card / emergency fund / thank you / arthur)',
          patterns: ['cut down', '200', 'pay off', 'credit card', 'emergency', 'fund', 'thank you', 'arthur', 'thanks'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_158_4',
        type: 'multiple_choice',
        prompt: 'Which summary captures the financial consultation outcomes clearly?',
        options: [
          { id: 'opt_1', text: 'To summarize, I will cut down expenses to save £200 monthly, pay off debt, and build an emergency fund.', isCorrect: true },
          { id: 'opt_2', text: 'I spend all money today bye.', isCorrect: false },
          { id: 'opt_3', text: 'Money is too confusing so whatever.', isCorrect: false },
        ],
        correctAnswer: 'To summarize, I will cut down expenses to save £200 monthly, pay off debt, and build an emergency fund.',
        explanation: 'Accurate, well-structured financial summary.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 65,
  },
};
