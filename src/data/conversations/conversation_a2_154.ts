import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_154: ConversationDefinition = {
  id: 'conv_a2_154',
  title: 'Recommending Options & Comparing Alternatives',
  cefr: 'A2',
  unitId: 'unit_a2_11',
  lessonLinks: ['lesson_a2_11_154'],
  estimatedMinutes: 5,
  scenario:
    'You are in the IT procurement office at Crestview Financial in London meeting with Procurement Specialist Marcus Vance. The company is deciding which equipment and cloud storage package to purchase for the remote team. You will compare alternative options using intensifiers ("much more expensive", "far better", "considerably faster") and equality comparisons ("not as portable as", "just as reliable as"), recommend the best option, and finalize the purchase decision.',
  communicativeGoals: [
    'Compare alternative products and services using intensifiers ("much / far / considerably + comparative")',
    'Use "not as ... as" and "just as ... as" to evaluate differences in performance, battery life, and price',
    'Recommend the most cost-effective solution based on user requirements and budget constraints',
    'Synthesize pros and cons into a final procurement recommendation',
  ],
  canDoStatements: [
    'Can compare two or more options in detail using intensifiers and equality comparative structures',
    'Can evaluate pros and cons regarding price, quality, and convenience at A2 level',
    'Can recommend a suitable choice and explain the reasoning behind it clearly',
  ],
  characters: [
    {
      id: 'char_marcus_vance',
      name: 'Marcus Vance',
      role: 'IT Procurement Specialist',
      avatar: '💻',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'alternative',
        ipa: '/ɔːlˈtɜːnətɪv/',
        partOfSpeech: 'noun',
        meaning: 'One of two or more available possibilities or choices',
        exampleSentence: 'The NovaBook is a reliable alternative to the heavier desktop models.',
        translations: { hi: 'विकल्प' },
      },
      {
        word: 'considerably',
        ipa: '/kənˈsɪdərəbli/',
        partOfSpeech: 'adverb',
        meaning: 'To a noteworthy or marked extent; much',
        exampleSentence: 'The cloud backup plan is considerably faster than local disk storage.',
        translations: { hi: 'काफी हद तक / बहुत अधिक' },
      },
      {
        word: 'portable',
        ipa: '/ˈpɔːtəbl/',
        partOfSpeech: 'adjective',
        meaning: 'Easily carried or moved, especially because of being of a lighter and smaller version',
        exampleSentence: 'The Apex laptop is not as portable as the Nova tablet.',
        translations: { hi: 'ले जाने में आसान / सुवाह्य' },
      },
      {
        word: 'cost-effective',
        ipa: '/ˌkɒst ɪˈfektɪv/',
        partOfSpeech: 'adjective',
        meaning: 'Effective or productive in relation to its cost; good value for money',
        exampleSentence: 'The enterprise annual plan is far more cost-effective than monthly billing.',
        translations: { hi: 'लागत प्रभावी / किफायती' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'The Apex Pro is considerably faster, but it is much more expensive than the NovaBook.',
        functionCategory: 'Comparing Options with Intensifiers',
        exampleSentence: 'Model A is far better than Model B.',
      },
      {
        phrase: 'The standard model is not as portable as the slim edition.',
        functionCategory: 'Equality Comparisons with "Not as... as"',
        exampleSentence: 'The bus is not as convenient as the express train.',
      },
      {
        phrase: 'I would recommend the second option because it offers better value for money.',
        functionCategory: 'Making Product Recommendations with Justification',
        exampleSentence: 'I recommend the annual plan because it includes 24/7 technical support.',
      },
      {
        phrase: 'How soon can the supplier deliver the hardware if we place the order today?',
        functionCategory: 'Inquiring About Procurement Timelines',
        exampleSentence: 'When can we expect shipment?',
      },
    ],
    grammar: {
      title: 'Comparative Intensifiers & Equality Comparisons',
      conceptExplanation:
        '1. Intensifiers + Comparatives: Use "much", "far", "a lot", "considerably", or "slightly" before comparatives to express degree (e.g., "far cheaper", "much more powerful", "considerably faster").\n2. Equality Comparisons: Use "not as + adjective + as" to show that one item has less of a quality than another (e.g., "The NovaBook is not as heavy as the Apex Pro").\n3. Recommendations: "I would recommend [Noun / -ing] because..."',
      patternFormula: 'Option A + is [much / far / considerably] + Comparative Adj + than Option B | Option A + is not as [Adj] as Option B',
      contrastExamples: [
        {
          incorrect: 'The laptop is more much expensive and not portable like other.',
          correct: 'The laptop is much more expensive and not as portable as the other model.',
          explanation: 'Place the intensifier before the comparative ("much more expensive") and use "not as... as".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Marcus Vance',
        text: 'We are choosing between the Apex Pro and the NovaBook 14 for our thirty remote accountants. How do you compare their performance and price?',
        translation: 'हम अपने तीस दूरस्थ लेखाकारों के लिए एपेक्स प्रो और नोवाबुक 14 के बीच चयन कर रहे हैं। आप उनके प्रदर्शन और कीमत की तुलना कैसे करते हैं?',
      },
      {
        speaker: 'You',
        text: 'The Apex Pro is considerably faster, but the NovaBook is far cheaper and not as heavy to carry.',
        translation: 'एपेक्स प्रो काफी तेज है, लेकिन नोवाबुक बहुत सस्ता है और ले जाने में उतना भारी नहीं है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_154_1',
      type: 'fill_blank',
      prompt: 'Complete the comparison: "The enterprise cloud package is ___ (considerably / more considerably) faster than our previous server."',
      options: [
        { id: 'opt_1', text: 'considerably', isCorrect: true },
        { id: 'opt_2', text: 'more considerably', isCorrect: false },
        { id: 'opt_3', text: 'as considerably', isCorrect: false },
      ],
      correctAnswer: 'considerably',
      explanation: 'Use the adverb intensifier "considerably" directly before the comparative adjective "faster".',
    },
    {
      id: 'cp_a2_154_2',
      type: 'multiple_choice',
      prompt: 'Which sentence uses "not as ... as" correctly to compare portability?',
      options: [
        { id: 'opt_1', text: 'The 17-inch workstation is not as portable as the 13-inch laptop.', isCorrect: true },
        { id: 'opt_2', text: 'The workstation is not so portable than the laptop.', isCorrect: false },
        { id: 'opt_3', text: 'The workstation is not as more portable as the laptop.', isCorrect: false },
      ],
      correctAnswer: 'The 17-inch workstation is not as portable as the 13-inch laptop.',
      explanation: 'Structure: "not as + base adjective + as".',
    },
    {
      id: 'cp_a2_154_3',
      type: 'multiple_choice',
      prompt: 'How do you justify a purchase recommendation politely and logically?',
      options: [
        { id: 'opt_1', text: 'I recommend the NovaBook because it is far more cost-effective and lighter for travel.', isCorrect: true },
        { id: 'opt_2', text: 'Buy the cheap one because I said so.', isCorrect: false },
        { id: 'opt_3', text: 'Everything is too expensive do not buy anything.', isCorrect: false },
      ],
      correctAnswer: 'I recommend the NovaBook because it is far more cost-effective and lighter for travel.',
      explanation: 'Clear recommendation supported by intensifiers and specific reasons.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_154_1',
      scenarioContext: 'Compare two storage options with an intensifier.',
      prompt: 'Build: "The cloud plan is considerably faster than the local drive."',
      targetStructure: 'The cloud plan is + considerably faster than + the local drive',
      wordBank: ['The', 'cloud', 'plan', 'is', 'considerably', 'faster', 'than', 'the', 'local', 'drive', 'more'],
      acceptableSolutions: [
        'The cloud plan is considerably faster than the local drive',
        'The cloud plan is considerably faster than the local drive.',
      ],
      explanation: 'Intensifier "considerably" modifying comparative "faster".',
    },
    {
      id: 'sc_a2_154_2',
      scenarioContext: 'Compare weight using equality structure.',
      prompt: 'Build: "The tablet is not as heavy as the laptop."',
      targetStructure: 'The tablet is not as + heavy + as the laptop',
      wordBank: ['The', 'tablet', 'is', 'not', 'as', 'heavy', 'as', 'the', 'laptop', 'than'],
      acceptableSolutions: [
        'The tablet is not as heavy as the laptop',
        'The tablet is not as heavy as the laptop.',
      ],
      explanation: '"Not as + base adjective + as".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_154_1',
      turnIndex: 1,
      partnerPrompt:
        'Welcome! We need to order thirty new laptops for our remote accounting staff. We have two shortlisted options: the Apex Pro at £1,200 each and the NovaBook 14 at £750 each. How do you evaluate their specifications, portability, and cost?',
      partnerAudioText:
        'Welcome! We need to order thirty new laptops for our remote accounting staff. We have two shortlisted options: the Apex Pro at £1,200 each and the NovaBook 14 at £750 each. How do you evaluate their specifications, portability, and cost?',
      partnerQuestionHindi:
        'स्वागत है! हमें अपने दूरस्थ लेखा कर्मचारियों के लिए तीस नए लैपटॉप ऑर्डर करने हैं। हमारे पास दो विकल्प हैं: £1,200 प्रत्येक पर एपेक्स प्रो और £750 प्रत्येक पर नोवाबुक 14। आप उनके विनिर्देशों, पोर्टेबिलिटी और लागत का मूल्यांकन कैसे करते हैं?',
      expectedFunction: 'Compare Hardware Options with Intensifiers & "Not as... as" (Apex Pro is considerably faster / NovaBook is far cheaper and not as heavy)',
      contextGoal:
        'Compare the two laptops using intensifiers (much, far, considerably) and explain that while Apex Pro is faster, NovaBook is far cheaper and lighter.',
      targetVocabulary: ['Apex Pro is considerably faster', 'much more expensive', 'NovaBook is far cheaper', 'not as heavy as', 'cost-effective'],
      suggestedResponses: [
        {
          label: 'Detailed Comparative with Intensifiers',
          text: 'The Apex Pro is considerably faster with a better processor, but it is much more expensive. The NovaBook is far more affordable, has great battery life, and is not as heavy to carry.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Comparison',
          text: 'The Apex is far more powerful, but the NovaBook is considerably cheaper and just as reliable for accounting spreadsheets.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Hardware Comparison & Intensifiers (much / far / considerably / faster / cheaper / expensive / powerful / more)',
          patterns: ['much', 'far', 'considerably', 'faster', 'cheaper', 'expensive', 'powerful', 'more', 'better', 'price'],
          required: true,
        },
        {
          name: 'Equality or Portability (not as heavy as / not as expensive as / portable / battery / lighter / weight)',
          patterns: ['not as', 'portable', 'battery', 'lighter', 'weight', 'carry', 'just as'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_more_cheap',
          pattern: 'more cheaper|more fast|much expensive without more',
          errorType: 'grammar',
          message: 'Use "cheaper" (not "more cheaper"), "faster" (not "more fast"), and "much more expensive".',
          correctionPattern: 'far cheaper / considerably faster / much more expensive',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_154_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "The NovaBook is ___ (far cheaper / far more cheap) than the Apex Pro."',
        options: [
          { id: 'opt_1', text: 'far cheaper', isCorrect: true },
          { id: 'opt_2', text: 'far more cheap', isCorrect: false },
          { id: 'opt_3', text: 'as cheaper', isCorrect: false },
        ],
        correctAnswer: 'far cheaper',
        explanation: '"Far cheaper" combines intensifier "far" with 1-syllable comparative "cheaper".',
      },
    },
    {
      id: 'turn_a2_154_2',
      turnIndex: 2,
      partnerPrompt:
        'Given that our accountants mainly work with cloud spreadsheets, video calls, and database entries, which laptop model would you ultimately recommend, and why?',
      partnerAudioText:
        'Given that our accountants mainly work with cloud spreadsheets, video calls, and database entries, which laptop model would you ultimately recommend, and why?',
      partnerQuestionHindi:
        'यह देखते हुए कि हमारे लेखाकार मुख्य रूप से क्लाउड स्प्रेडशीट, वीडियो कॉल और डेटाबेस प्रविष्टियों के साथ काम करते हैं, आप अंततः किस लैपटॉप मॉडल की सिफारिश करेंगे, और क्यों?',
      expectedFunction: 'Recommend Best Model with Justification (I would recommend the NovaBook because it is far more cost-effective and fully meets our software requirements)',
      contextGoal:
        'Recommend the NovaBook 14, justifying that it saves £13,500 across thirty units and meets all daily work needs.',
      targetVocabulary: ['I would recommend the NovaBook 14', 'far more cost-effective', 'saves our budget', 'handles spreadsheets and calls perfectly'],
      suggestedResponses: [
        {
          label: 'Justified Recommendation',
          text: 'I would definitely recommend the NovaBook 14 because it is far more cost-effective and meets all our software requirements while saving thousands of pounds.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Recommendation',
          text: 'I recommend the NovaBook because it is much cheaper and perfectly suitable for daily spreadsheets and video meetings.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Recommendation (recommend / choose / vote for / suggest / go with / novabook)',
          patterns: ['recommend', 'choose', 'vote for', 'suggest', 'go with', 'novabook', 'option b'],
          required: true,
        },
        {
          name: 'Justification (cost-effective / cheaper / budget / save / money / meets / requirements / enough / suitable)',
          patterns: ['cost-effective', 'cheaper', 'budget', 'save', 'money', 'meets', 'requirements', 'enough', 'suitable', 'software'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_154_2',
        type: 'multiple_choice',
        prompt: 'Which phrase states a business recommendation clearly?',
        options: [
          { id: 'opt_1', text: 'I would recommend the NovaBook because it offers the best value for our budget.', isCorrect: true },
          { id: 'opt_2', text: 'NovaBook is what you must buy immediately.', isCorrect: false },
          { id: 'opt_3', text: 'I don’t care whatever you want.', isCorrect: false },
        ],
        correctAnswer: 'I would recommend the NovaBook because it offers the best value for our budget.',
        explanation: 'Polite and justified recommendation formula.',
      },
    },
    {
      id: 'turn_a2_154_3',
      turnIndex: 3,
      partnerPrompt:
        'That makes total business sense; we will go with the NovaBook 14! Now, what about our cloud backup subscription? Should we choose the Standard 1TB tier at £8 per user, or the Premium 5TB encrypted tier at £14 per user?',
      partnerAudioText:
        'That makes total business sense; we will go with the NovaBook 14! Now, what about our cloud backup subscription? Should we choose the Standard 1TB tier at £8 per user, or the Premium 5TB encrypted tier at £14 per user?',
      partnerQuestionHindi:
        'यह पूरी तरह से व्यावसायिक समझ में आता है; हम नोवाबुक 14 के साथ जाएंगे! अब, हमारे क्लाउड बैकअप सदस्यता के बारे में क्या? क्या हमें £8 प्रति उपयोगकर्ता पर स्टैंडर्ड 1TB टियर चुनना चाहिए, या £14 प्रति उपयोगकर्ता पर प्रीमियम 5TB एन्क्रिप्टेड टियर चुनना चाहिए?',
      expectedFunction: 'Compare Storage Plans & Inquire on Delivery Timeline (Premium tier is considerably safer due to encryption / ask Marcus when supplier can deliver)',
      contextGoal:
        'Recommend the Premium tier due to data security and encryption, and ask Marcus when the hardware can be delivered.',
      targetVocabulary: ['Premium tier is considerably safer', 'advanced encryption', 'protect financial data', 'How soon can the supplier deliver the laptops?'],
      suggestedResponses: [
        {
          label: 'Storage Recommendation & Delivery Question',
          text: 'I recommend the Premium tier because it is considerably more secure with end-to-end encryption for client financial data. How soon can the supplier deliver all thirty units?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Advice & Timeline Inquiry',
          text: 'The Premium tier is far better for financial data security. When can the supplier deliver the order?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Storage Plan Choice & Intensifier (premium / 5tb / secure / safer / encryption / financial data / protection / considerably / far)',
          patterns: ['premium', '5tb', 'secure', 'safer', 'encryption', 'financial data', 'protection', 'considerably', 'far', 'better'],
          required: true,
        },
        {
          name: 'Delivery Question (delivery / deliver / when / how soon / arrive / supplier / timeline / ?)',
          patterns: ['delivery', 'deliver', 'when', 'how soon', 'arrive', 'supplier', 'timeline', 'ship', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_154_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "The Premium plan is ___ (considerably more / considerably) secure."',
        options: [
          { id: 'opt_1', text: 'considerably more', isCorrect: true },
          { id: 'opt_2', text: 'considerably', isCorrect: false },
          { id: 'opt_3', text: 'much', isCorrect: false },
        ],
        correctAnswer: 'considerably more',
        explanation: 'For multi-syllable adjective "secure", use "considerably more secure".',
      },
    },
    {
      id: 'turn_a2_154_4',
      turnIndex: 4,
      partnerPrompt:
        'The supplier can deliver thirty NovaBooks by next Tuesday, and I will activate the Premium Cloud accounts simultaneously. Could you summarize our final procurement order?',
      partnerAudioText:
        'The supplier can deliver thirty NovaBooks by next Tuesday, and I will activate the Premium Cloud accounts simultaneously. Could you summarize our final procurement order?',
      partnerQuestionHindi:
        'आपूर्तिकर्ता अगले मंगलवार तक तीस नोवाबुक वितरित कर सकता है, और मैं साथ ही प्रीमियम क्लाउड खाते सक्रिय कर दूंगा। क्या आप हमारे अंतिम खरीद आदेश का संक्षेप प्रस्तुत कर सकते हैं?',
      expectedFunction: 'Summarize Procurement Decisions & Close (To summarize, we are purchasing thirty NovaBook 14s and thirty Premium Cloud accounts for Tuesday delivery)',
      contextGoal:
        'Summarize the decision: 30 NovaBook 14 laptops, 30 Premium Cloud backup accounts, scheduled for Tuesday delivery, and thank Marcus.',
      targetVocabulary: ['To summarize our procurement order', '30 NovaBook 14 laptops', '30 Premium 5TB Cloud backup licenses', 'delivery by next Tuesday', 'thank you Marcus'],
      suggestedResponses: [
        {
          label: 'Comprehensive Procurement Summary',
          text: 'To summarize: we are ordering thirty NovaBook 14 laptops and thirty Premium Cloud backup accounts, with delivery confirmed for next Tuesday. Thank you for your assistance, Marcus!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Order Summary',
          text: 'In summary: 30 NovaBooks and 30 Premium cloud licenses arriving next Tuesday. Thanks for helping us make the best decision!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Summary Signpost (to summarize / in summary / summary / agreed / so / order)',
          patterns: ['to summarize', 'in summary', 'summary', 'agreed', 'so', 'order'],
          required: true,
        },
        {
          name: 'Key Order Items (30 / novabook / laptops / premium / cloud / tuesday / thank you)',
          patterns: ['30', 'thirty', 'novabook', 'laptops', 'premium', 'cloud', 'tuesday', 'thank you', 'thanks'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_154_4',
        type: 'multiple_choice',
        prompt: 'Which summary captures the procurement agreement accurately?',
        options: [
          { id: 'opt_1', text: 'To summarize, we are ordering thirty NovaBooks and thirty Premium cloud licenses for Tuesday delivery.', isCorrect: true },
          { id: 'opt_2', text: 'Order whatever and call me next year.', isCorrect: false },
          { id: 'opt_3', text: 'I forgot all things we talked about.', isCorrect: false },
        ],
        correctAnswer: 'To summarize, we are ordering thirty NovaBooks and thirty Premium cloud licenses for Tuesday delivery.',
        explanation: 'Accurate and structured procurement summary.',
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
