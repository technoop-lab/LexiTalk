import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_142: ConversationDefinition = {
  id: 'conv_a2_142',
  title: 'Managing Utility Bills, Energy Usage & Home Automation',
  cefr: 'A2',
  unitId: 'unit_a2_10',
  lessonLinks: ['lesson_a2_10_142'],
  estimatedMinutes: 5,
  scenario:
    'You are on the telephone with customer service advisor Fiona MacLeod from British Energy. Your latest winter utility bill is significantly higher than usual. Query the estimated charges against your actual smart meter reading, compare energy usage with previous months using comparative structures, and ask for energy conservation advice.',
  communicativeGoals: [
    'Query unexpected billing charges and compare estimated vs. actual meter readings',
    'Compare energy consumption using comparative adjectives and adverbs ("higher than", "more expensive", "lower")',
    'Discuss smart thermostat automation and eco-friendly settings',
    'Ask for advice on reducing household heating and electricity costs using modal verbs ("should", "ought to")',
  ],
  canDoStatements: [
    'Can understand and discuss utility bills, tariffs, and smart meter readings',
    'Can query billing discrepancies politely with a utility company representative',
    'Can compare seasonal energy usage and discuss energy conservation habits',
  ],
  characters: [
    {
      id: 'char_fiona_macleod',
      name: 'Fiona MacLeod',
      role: 'Utility Services & Energy Advisor',
      avatar: '💡',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'utility',
        ipa: '/juːˈtɪləti/',
        partOfSpeech: 'noun',
        meaning: 'A public service such as electricity, gas, or water supply',
        exampleSentence: 'Our monthly utility expenses increased during the winter freeze.',
        translations: { hi: 'उपयोगिता सेवा (बिजली/पानी/गैस)' },
      },
      {
        word: 'tariff',
        ipa: '/ˈtærɪf/',
        partOfSpeech: 'noun',
        meaning: 'A fixed rate or pricing structure charged by a utility company',
        exampleSentence: 'We switched to a fixed-rate energy tariff to lower our bills.',
        translations: { hi: 'टैरिफ / शुल्क दर' },
      },
      {
        word: 'thermostat',
        ipa: '/ˈθɜːməstæt/',
        partOfSpeech: 'noun',
        meaning: 'An automatic device that regulates temperature in a heating system',
        exampleSentence: 'Lowering the smart thermostat by one degree saves energy.',
        translations: { hi: 'थर्मोस्टेट / तापमान नियंत्रक' },
      },
      {
        word: 'consumption',
        ipa: '/kənˈsʌmpʃn/',
        partOfSpeech: 'noun',
        meaning: 'The amount of electricity, gas, or fuel that is used',
        exampleSentence: 'Our electricity consumption was higher in January than in December.',
        translations: { hi: 'खपत / उपभोग' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'My latest bill is much higher than my previous monthly statements.',
        functionCategory: 'Comparing Billing Amounts with Comparatives',
        exampleSentence: 'Gas is more expensive in winter than in autumn.',
      },
      {
        phrase: 'I would like to submit an accurate smart meter reading.',
        functionCategory: 'Providing Meter Readings',
        exampleSentence: 'The reading on my electricity meter is 4,820 kWh.',
      },
      {
        phrase: 'What can I do to reduce my heating consumption?',
        functionCategory: 'Asking for Energy Saving Advice',
        exampleSentence: 'How should we program the smart thermostat?',
      },
      {
        phrase: 'Could you explain why this bill was based on an estimate?',
        functionCategory: 'Querying Billing Methodology',
        exampleSentence: 'Why is there an extra connection charge on my account?',
      },
    ],
    grammar: {
      title: 'Comparatives & Modals of Advice (higher than / more expensive / should)',
      conceptExplanation:
        '1. Comparatives: Short adjectives + -er + than (e.g., "higher than", "colder than"), Long adjectives: "more + adjective + than" (e.g., "more expensive than").\n2. Modals of Advice: "You should / ought to + [Base Verb]" (e.g., "You should lower your thermostat at night").\n3. Clarifying amounts: "much higher than", "a bit lower than".',
      patternFormula: '[Current Bill] is + comparative adjective + than + [Previous Bill] -> What should I do?',
      contrastExamples: [
        {
          incorrect: 'My bill is more high than last month and I must to pay it?',
          correct: 'My bill is higher than last month. What should I do to reduce it?',
          explanation: '"high" becomes "higher", not "more high", and do not use "to" after modals.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Fiona MacLeod',
        text: 'Thank you for calling British Energy. Fiona speaking. How can I assist you with your account today?',
        translation: 'ब्रिटिश एनर्जी को कॉल करने के लिए धन्यवाद। फियोना बात कर रही हूँ। आज आपके खाते में मैं आपकी क्या मदद कर सकती हूँ?',
      },
      {
        speaker: 'You',
        text: 'Hello Fiona. I am calling to query my January utility bill. It is £185, which is much higher than my December statement. I believe this bill was based on an estimated reading rather than my actual smart meter.',
        translation: 'नमस्ते फियोना। मैं अपने जनवरी के उपयोगिता बिल के बारे में पूछताछ करने के लिए कॉल कर रहा हूँ। यह £185 है, जो मेरे दिसंबर के विवरण से बहुत अधिक है। मेरा मानना है कि यह बिल मेरे वास्तविक स्मार्ट मीटर के बजाय अनुमानित रीडिंग पर आधारित था।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_142_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "Electricity in winter is usually ___ (higher than / more high than) in summer."',
      options: [
        { id: 'opt_1', text: 'higher than', isCorrect: true },
        { id: 'opt_2', text: 'more high than', isCorrect: false },
        { id: 'opt_3', text: 'highest than', isCorrect: false },
      ],
      correctAnswer: 'higher than',
      explanation: 'Comparative form of "high" is "higher than".',
    },
    {
      id: 'cp_a2_142_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly asks for energy-saving recommendations?',
      options: [
        { id: 'opt_1', text: 'What should we do to lower our monthly electricity consumption?', isCorrect: true },
        { id: 'opt_2', text: 'What we must do to making electricity lower?', isCorrect: false },
        { id: 'opt_3', text: 'How should to lower electricity bill?', isCorrect: false },
      ],
      correctAnswer: 'What should we do to lower our monthly electricity consumption?',
      explanation: 'Standard grammatical modal question: "What should + subject + base verb...?"',
    },
    {
      id: 'cp_a2_142_3',
      type: 'multiple_choice',
      prompt: 'What is an "estimated bill"?',
      options: [
        { id: 'opt_1', text: 'A bill calculated from predicted usage rather than an exact meter reading', isCorrect: true },
        { id: 'opt_2', text: 'A bill that is completely free of charge', isCorrect: false },
        { id: 'opt_3', text: 'A bill that includes penalty fees only', isCorrect: false },
      ],
      correctAnswer: 'A bill calculated from predicted usage rather than an exact meter reading',
      explanation: 'Estimated bills are approximations based on historical data.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_142_1',
      scenarioContext: 'Compare current bill with previous month.',
      prompt: 'Build: "This bill is much higher than last month."',
      targetStructure: 'Subject + is + modifier + comparative + than + time phrase',
      wordBank: ['This', 'bill', 'is', 'much', 'higher', 'than', 'last', 'month', 'more', 'high'],
      acceptableSolutions: [
        'This bill is much higher than last month',
        'This bill is much higher than last month.',
      ],
      explanation: 'Uses "much higher than" for comparison.',
    },
    {
      id: 'sc_a2_142_2',
      scenarioContext: 'Ask for advice on smart thermostat settings.',
      prompt: 'Build: "How should I program the smart thermostat?"',
      targetStructure: 'Question word + should + subject + base verb + object',
      wordBank: ['How', 'should', 'I', 'program', 'the', 'smart', 'thermostat', 'programming', 'must'],
      acceptableSolutions: [
        'How should I program the smart thermostat',
        'How should I program the smart thermostat?',
      ],
      explanation: 'Modal question for advice using "should".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_142_1',
      turnIndex: 1,
      partnerPrompt:
        'Thank you for calling British Energy customer support. My name is Fiona. How may I help you with your gas and electricity account today?',
      partnerAudioText:
        'Thank you for calling British Energy customer support. My name is Fiona. How may I help you with your gas and electricity account today?',
      partnerQuestionHindi:
        'ब्रिटिश एनर्जी ग्राहक सहायता को कॉल करने के लिए धन्यवाद। मेरा नाम फियोना है। आज आपके गैस और बिजली खाते में मैं आपकी क्या मदद कर सकती हूँ?',
      expectedFunction: 'Query Bill Discrepancy with Comparatives (January bill / higher than usual / estimated reading / £185)',
      contextGoal:
        'Explain that your January bill is £185, which is much higher than previous months, and that you want to check if it was based on an estimate.',
      targetVocabulary: ['query my recent utility bill', 'much higher than previous months', 'bill is £185', 'based on an estimated reading'],
      suggestedResponses: [
        {
          label: 'Clear Comparison',
          text: 'Hello Fiona. I am calling to query my January utility bill. It is £185, which is significantly higher than my normal bill of £95. I noticed that the bill says "estimated". Can I provide my actual reading?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Query',
          text: 'Hi, my January bill is much higher than last month. I think it is an estimate. Can you check my account?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Bill & Amount (bill / 185 / 95 / january / account / charge / statement / expensive)',
          patterns: ['bill', '185', '95', 'january', 'account', 'charge', 'statement', 'expensive', 'cost'],
          required: true,
        },
        {
          name: 'Comparative / Estimate (higher than / more than / higher / estimated / estimate / actual / reading)',
          patterns: ['higher than', 'more than', 'higher', 'estimated', 'estimate', 'actual', 'reading', 'smart meter'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'more_high_rule',
          pattern: /\bmore high than\b/i,
          errorType: 'grammar',
          message: 'Say "higher than", not "more high than".',
          correctionPattern: 'higher than',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_142_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "My electricity bill is ___ (higher / more high) this month."',
        options: [
          { id: 'opt_1', text: 'higher', isCorrect: true },
          { id: 'opt_2', text: 'more high', isCorrect: false },
          { id: 'opt_3', text: 'highest', isCorrect: false },
        ],
        correctAnswer: 'higher',
        explanation: 'Comparative form of "high" is "higher".',
      },
    },
    {
      id: 'turn_a2_142_2',
      turnIndex: 2,
      partnerPrompt:
        'I see the account here. You are right—because of the cold snap, our automated system generated an estimated reading of 520 kWh. Do you have the actual reading from your smart meter display?',
      partnerAudioText:
        'I see the account here. You are right—because of the cold snap, our automated system generated an estimated reading of 520 kWh. Do you have the actual reading from your smart meter display?',
      partnerQuestionHindi:
        'मैं यहाँ खाता देख रही हूँ। आप सही हैं—अत्यधिक ठंड के कारण, हमारे स्वचालित सिस्टम ने 520 kWh की अनुमानित रीडिंग तैयार की। क्या आपके पास अपने स्मार्ट मीटर डिस्प्ले से वास्तविक रीडिंग है?',
      expectedFunction: 'Provide Exact Meter Reading & Ask for Recalculation (actual reading is 380 kWh / recalculate bill)',
      contextGoal:
        'Provide your actual smart meter reading (e.g. 380 kWh) and ask Fiona to recalculate your bill based on true consumption.',
      targetVocabulary: ['my actual smart meter reading is 380 kWh', '140 kWh lower than your estimate', 'recalculate the invoice', 'issue an adjusted bill'],
      suggestedResponses: [
        {
          label: 'Specific Data & Request',
          text: 'Yes! My smart meter display shows 380 kWh, which is 140 kWh lower than your estimate. Could you please update my account and recalculate my bill based on this actual figure?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Meter Reading',
          text: 'My meter reading is 380 kWh. Could you update the bill with the correct amount?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Meter Reading (380 / kwh / reading / meter / smart meter / number / display)',
          patterns: ['380', 'kwh', 'reading', 'meter', 'smart meter', 'number', 'display', 'actual'],
          required: true,
        },
        {
          name: 'Recalculation Request (update / recalculate / adjust / lower / correct / bill / account / ?)',
          patterns: ['update', 'recalculate', 'adjust', 'lower', 'correct', 'bill', 'account', 'invoice', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_142_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly presents a meter reading?',
        options: [
          { id: 'opt_1', text: 'My actual smart meter reading is 380 kWh.', isCorrect: true },
          { id: 'opt_2', text: 'I am reading 380 kWh on the meter nowing.', isCorrect: false },
          { id: 'opt_3', text: 'Meter is 380 kWh I tell.', isCorrect: false },
        ],
        correctAnswer: 'My actual smart meter reading is 380 kWh.',
        explanation: 'Accurate and natural phrasing for utility customer service.',
      },
    },
    {
      id: 'turn_a2_142_3',
      turnIndex: 3,
      partnerPrompt:
        'I have entered 380 kWh into the system. Your adjusted bill is now £128, which creates a £57 credit balance. Would you like some practical advice on how to use smart thermostat settings to keep your heating costs lower?',
      partnerAudioText:
        'I have entered 380 kWh into the system. Your adjusted bill is now £128, which creates a £57 credit balance. Would you like some practical advice on how to use smart thermostat settings to keep your heating costs lower?',
      partnerQuestionHindi:
        'मैंने सिस्टम में 380 kWh दर्ज कर दिया है। आपका समायोजित बिल अब £128 है, जिससे £57 का क्रेडिट बैलेंस बनता है। क्या आप अपने हीटिंग खर्च को कम रखने के लिए स्मार्ट थर्मोस्टेट सेटिंग्स का उपयोग करने के बारे में कुछ व्यावहारिक सलाह चाहेंगे?',
      expectedFunction: 'Accept Advice & Inquire About Optimal Temperature (Yes please / What temperature should I set / eco-mode)',
      contextGoal:
        'Enthusiastically accept the advice and ask Fiona what temperature you should set the thermostat to during the day and night.',
      targetVocabulary: ['Yes please, I would love some tips', 'What temperature should I set the thermostat to?', 'eco-mode and scheduling', 'save energy during winter'],
      suggestedResponses: [
        {
          label: 'Advice Inquiry with Modals',
          text: 'Yes please, that would be very helpful! What temperature should I set on the smart thermostat during the day, and ought we to turn it down overnight?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Advice Request',
          text: 'Yes, please give me some tips. What temperature should I keep the heating at to save money?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Accept Advice (yes / please / love tips / helpful / advice / recommend)',
          patterns: ['yes', 'please', 'love tips', 'helpful', 'advice', 'recommend', 'certainly', 'sure'],
          required: true,
        },
        {
          name: 'Temperature / Settings (temperature / degrees / thermostat / setting / night / day / eco / save / ?)',
          patterns: ['temperature', 'degrees', 'thermostat', 'setting', 'night', 'day', 'eco', 'save', 'should', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_142_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "You ___ (should / ought) set your thermostat to 19 degrees."',
        options: [
          { id: 'opt_1', text: 'should', isCorrect: true },
          { id: 'opt_2', text: 'ought', isCorrect: false },
          { id: 'opt_3', text: 'must to', isCorrect: false },
        ],
        correctAnswer: 'should',
        explanation: 'Use "should + base verb" or "ought to + base verb".',
      },
    },
    {
      id: 'turn_a2_142_4',
      turnIndex: 4,
      partnerPrompt:
        'Setting your thermostat to 19°C during the day and 16°C overnight can reduce your annual heating bill by up to 10%. I’ve also applied the £57 credit to your online profile. Is there anything else I can help you with?',
      partnerAudioText:
        'Setting your thermostat to 19°C during the day and 16°C overnight can reduce your annual heating bill by up to 10%. I’ve also applied the £57 credit to your online profile. Is there anything else I can help you with?',
      partnerQuestionHindi:
        'दिन के दौरान अपने थर्मोस्टेट को 19°C और रात में 16°C पर सेट करने से आपके वार्षिक हीटिंग बिल में 10% तक की कमी आ सकती है। मैंने आपकी ऑनलाइन प्रोफ़ाइल में £57 का क्रेडिट भी लागू कर दिया है। क्या मैं आपकी किसी और चीज़ में मदद कर सकती हूँ?',
      expectedFunction: 'Express Gratitude & Conclude Call (Thank you Fiona / everything is resolved / have a wonderful day)',
      contextGoal:
        'Thank Fiona for recalculating the bill and sharing useful energy-saving tips, confirm that everything is resolved, and say goodbye.',
      targetVocabulary: ['Thank you very much Fiona', 'appreciate the energy-saving tips', 'everything is sorted now', 'have a great day'],
      suggestedResponses: [
        {
          label: 'Appreciative Closing',
          text: 'Thank you very much, Fiona! That is excellent advice, and I am glad the bill is sorted out. You have answered all my questions. Have a wonderful day!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Closing',
          text: 'Thank you for your help and the great tips. Everything is clear now. Have a nice day!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Farewell (thank you / thanks / fiona / tips / sorted / resolved / have a nice day / have a great day / goodbye)',
          patterns: ['thank you', 'thanks', 'fiona', 'tips', 'sorted', 'resolved', 'have a nice day', 'have a great day', 'have a good day', 'goodbye', 'bye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_142_4',
        type: 'multiple_choice',
        prompt: 'Which closing phrase is polite and friendly?',
        options: [
          { id: 'opt_1', text: 'Thank you for all your help and the great tips. Have a wonderful day!', isCorrect: true },
          { id: 'opt_2', text: 'I am hang up now.', isCorrect: false },
          { id: 'opt_3', text: 'You gave money back good.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for all your help and the great tips. Have a wonderful day!',
        explanation: 'Friendly and professional customer service closure.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 75,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 60,
  },
};
