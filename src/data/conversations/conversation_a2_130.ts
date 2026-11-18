import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_130: ConversationDefinition = {
  id: 'conv_a2_130',
  title: 'Making Complaints & Seeking Solutions in Customer Service (Hotel Front Desk)',
  cefr: 'A2',
  unitId: 'unit_a2_9',
  lessonLinks: ['lesson_a2_9_130'],
  estimatedMinutes: 5,
  scenario:
    'You are staying at the Royal Crescent Heritage Hotel in Bath. Upon entering Room 204, you discovered that the bathroom has not been cleaned (used damp towels on the floor) and the hot water shower is not running. Furthermore, your advance checkout bill includes an incorrect £45 minibar fee that you never consumed. Speak with assistant manager Liam Scott at the reception desk to make a polite yet firm complaint, request an immediate room upgrade or cleaning, and insist on removing the unauthorized minibar charge.',
  communicativeGoals: [
    'Initiate a polite and formal complaint using "I’m afraid there is a serious issue with..."',
    'Describe service failures and billing discrepancies clearly without aggressive language',
    'Demand specific corrective actions (room reassignment, bill correction, manager discount)',
    'Negotiate solutions and reach an amicable, professional resolution',
  ],
  canDoStatements: [
    'Can make a polite, structured complaint about accommodation and billing issues (CEFR A2)',
    'Can explain discrepancies between promised services and actual conditions',
    'Can request refunds, replacements, or room changes assertively and courteously',
  ],
  characters: [
    {
      id: 'char_liam_scott',
      name: 'Liam Scott',
      role: 'Assistant General Manager & Guest Relations Lead',
      avatar: '🛎️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'discrepancy',
        ipa: '/dɪsˈkrɛpənsi/',
        partOfSpeech: 'noun',
        meaning: 'A difference or inconsistency between two things that should be identical',
        exampleSentence: 'There is a £45 billing discrepancy on my room invoice.',
        translations: { hi: 'विसंगति / बिल में अंतर' },
      },
      {
        word: 'refund',
        ipa: '/ˈriːfʌnd/',
        partOfSpeech: 'noun / verb',
        meaning: 'A repayment of a sum of money to an unsatisfied customer',
        exampleSentence: 'I would like a full refund for the unauthorized minibar charge.',
        translations: { hi: 'रिफंड / धनवापसी' },
      },
      {
        word: 'unacceptable',
        ipa: '/ˌʌnəkˈsɛptəbəl/',
        partOfSpeech: 'adjective',
        meaning: 'Not satisfactory; inadequate to an intolerable degree',
        exampleSentence: 'Finding used towels in a four-star hotel room is unacceptable.',
        translations: { hi: 'अस्वीकार्य / जो स्वीकार्य न हो' },
      },
      {
        word: 'compensation',
        ipa: '/ˌkɒmpɛnˈseɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'Something, typically money, given to make amends for loss, damage, or inconvenience',
        exampleSentence: 'The hotel offered complimentary breakfast as compensation for the delay.',
        translations: { hi: 'मुआवजा / असुविधा की भरपाई' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I’m afraid there is a problem with my room and my bill.',
        functionCategory: 'Polite Complaint Opening',
        exampleSentence: 'I’m afraid there has been a mistake with our booking.',
      },
      {
        phrase: 'The bathroom hasn’t been cleaned and there is no hot water.',
        functionCategory: 'Describing Subpar Service',
        exampleSentence: 'The air conditioning is making a loud noise.',
      },
      {
        phrase: 'I noticed an extra £45 charge that I did not authorize.',
        functionCategory: 'Reporting Billing Discrepancy',
        exampleSentence: 'I was charged twice for the dinner.',
      },
      {
        phrase: 'Could you please move us to an upgraded room and correct the invoice?',
        functionCategory: 'Demanding Redress & Resolution',
        exampleSentence: 'Could you please refund the extra amount?',
      },
    ],
    grammar: {
      title: 'Polite Complaint Formulas: Softening Language & Assertive Demands',
      conceptExplanation:
        '1. Softening Opening: Use "I\'m afraid there is an issue with..." or "I\'m sorry to complain, but...". This establishes high politeness while remaining firm.\n2. Stating Negative Facts (Present Perfect / Simple Present): "The room hasn\'t been serviced yet" / "There is no hot water" / "The invoice includes an incorrect fee".\n3. Requesting Action with Modals: "Could you please arrange...", "I would appreciate if you could...", "I would like to request...".\n4. Insisting on Redress: "I expect this charge to be removed immediately".',
      patternFormula: 'I\'m afraid there is an issue with [Room/Bill] | [Item] has not been [V3] and I was charged for [Discrepancy] | Could you please [Action]?',
      contrastExamples: [
        {
          incorrect: 'Your hotel is terrible! Give me my money back right now!',
          correct: 'I’m afraid the condition of Room 204 is unacceptable. I would like to request a room change and a refund for the extra charge.',
          explanation: 'Maintain professional British/international politeness while expressing firm consumer boundaries.',
        },
        {
          incorrect: 'I am charged for minibar yesterday.',
          correct: 'I have been charged £45 for minibar items that I did not consume.',
          explanation: 'Present Perfect passive ("have been charged") accurately reflects current billing status.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Liam Scott',
        text: 'Good afternoon, welcome to the front desk. How may I help you today?',
        translation: 'शुभ दोपहर, फ्रंट डेस्क पर आपका स्वागत है। आज मैं आपकी क्या मदद कर सकता हूँ?',
      },
      {
        speaker: 'You',
        text: 'Good afternoon. I’m afraid there is a serious issue with Room 204. When we unlocked the door, the bathroom had not been cleaned, the towels were damp on the floor, and there was no hot water. Also, my account shows a £45 minibar fee that we never touched.',
        translation: 'शुभ दोपहर। मुझे डर है कि कमरा 204 में एक गंभीर समस्या है। जब हमने दरवाजा खोला, तो बाथरूम साफ नहीं था, फर्श पर तौलिए गीले थे, और गर्म पानी नहीं आ रहा था। इसके अलावा, मेरे खाते में £45 का मिनीबार शुल्क दिख रहा है जिसे हमने कभी छुआ तक नहीं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_130_1',
      type: 'fill_blank',
      prompt: 'Complete the polite complaint formula: "I’m ___ (afraid / scary) there is a mistake on my hotel invoice."',
      options: [
        { id: 'opt_1', text: 'afraid', isCorrect: true },
        { id: 'opt_2', text: 'scary', isCorrect: false },
        { id: 'opt_3', text: 'fear', isCorrect: false },
      ],
      correctAnswer: 'afraid',
      explanation: '"I’m afraid there is..." is the standard polite English phrase to introduce a complaint or problem.',
    },
    {
      id: 'cp_a2_130_2',
      type: 'multiple_choice',
      prompt: 'Which request is both polite and firm when seeking a room change?',
      options: [
        { id: 'opt_1', text: 'Given these issues, could you please move us to an upgraded room on a higher floor?', isCorrect: true },
        { id: 'opt_2', text: 'Change my room immediately you bad hotel!', isCorrect: false },
        { id: 'opt_3', text: 'I want other room now.', isCorrect: false },
      ],
      correctAnswer: 'Given these issues, could you please move us to an upgraded room on a higher floor?',
      explanation: 'Uses formal courteous phrasing ("Given these issues, could you please...") while stating a clear requirement.',
    },
    {
      id: 'cp_a2_130_3',
      type: 'multiple_choice',
      prompt: 'How do you ask for an incorrect minibar charge to be removed?',
      options: [
        { id: 'opt_1', text: 'Could you please remove the £45 minibar charge from my final bill, as we did not consume anything from it?', isCorrect: true },
        { id: 'opt_2', text: 'Minibar money delete please.', isCorrect: false },
        { id: 'opt_3', text: 'Why you steal £45?', isCorrect: false },
      ],
      correctAnswer: 'Could you please remove the £45 minibar charge from my final bill, as we did not consume anything from it?',
      explanation: 'Clear, polite, and provides the factual reason ("as we did not consume anything").',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_130_1',
      scenarioContext: 'Open complaint about uncleaned room.',
      prompt: 'Build: "I am afraid our bathroom has not been cleaned."',
      targetStructure: 'Subject + am afraid + subject + has not been cleaned',
      wordBank: ['I', 'am', 'afraid', 'our', 'bathroom', 'has', 'not', 'been', 'cleaned', 'did', 'cleaning', 'was'],
      acceptableSolutions: [
        'I am afraid our bathroom has not been cleaned',
        'I am afraid our bathroom has not been cleaned.',
        'I\'m afraid our bathroom has not been cleaned.',
      ],
      explanation: 'Polite passive complaint sentence.',
    },
    {
      id: 'sc_a2_130_2',
      scenarioContext: 'Request removal of incorrect charge.',
      prompt: 'Build: "Could you please remove the forty-five pound charge from my bill?"',
      targetStructure: 'Could + you + please + remove + object + from + my bill',
      wordBank: ['Could', 'you', 'please', 'remove', 'the', 'forty-five', 'pound', 'charge', 'from', 'my', 'bill', 'removing', 'did'],
      acceptableSolutions: [
        'Could you please remove the forty-five pound charge from my bill',
        'Could you please remove the forty-five pound charge from my bill?',
        'Could you please remove the forty-five pound charge from my bill.',
      ],
      explanation: 'Polite redress demand structure.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_130_1',
      turnIndex: 1,
      partnerPrompt:
        'Good afternoon, sir/madam. Welcome to the reception at The Royal Crescent Hotel. How can I assist you today?',
      partnerAudioText:
        'Good afternoon, sir/madam. Welcome to the reception at The Royal Crescent Hotel. How can I assist you today?',
      partnerQuestionHindi:
        'शुभ दोपहर, महोदय/महोदया। द रॉयल क्रिसेंट होटल के रिसेप्शन में आपका स्वागत है। आज मैं आपकी क्या मदद कर सकता हूँ?',
      expectedFunction: 'Open Formal Complaint & State Room Failures (bathroom not cleaned / no hot water)',
      contextGoal:
        'Explain politely yet firmly that there is a problem with Room 204: the bathroom has not been cleaned, damp towels are on the floor, and the shower has no hot water.',
      targetVocabulary: ['I’m afraid there is a serious problem with Room 204', 'bathroom has not been serviced or cleaned', 'used damp towels left on the bathroom floor', 'shower is running completely cold water'],
      suggestedResponses: [
        {
          label: 'Spontaneous A2 Scaffold',
          text: 'Good afternoon. I’m afraid there is a serious issue with Room 204. When we entered, the bathroom had not been cleaned, used damp towels were left on the floor, and the shower has no hot water at all.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Polite Complaint Opening (afraid / issue / problem / room 204)',
          patterns: ['afraid', 'issue', 'problem', 'room 204', 'complain', 'matter'],
          required: true,
        },
        {
          name: 'Room Defects (not cleaned / towels / floor / damp / hot water / shower / cold)',
          patterns: ['not cleaned', 'towels', 'floor', 'damp', 'hot water', 'cold', 'shower', 'bathroom', 'uncleaned'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'aggressive_tone_rule',
          pattern: /\byou are a terrible hotel\b|\byou idiots\b/i,
          errorType: 'interaction',
          message: 'Maintain professional courtesy: use "I’m afraid the room condition is unacceptable".',
          correctionPattern: 'I’m afraid the condition of Room 204 is unacceptable',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_130_1',
        type: 'multiple_choice',
        prompt: 'Which opening phrase is best when making a hotel complaint?',
        options: [
          { id: 'opt_1', text: 'I’m afraid there is an issue with Room 204.', isCorrect: true },
          { id: 'opt_2', text: 'You people made terrible room!', isCorrect: false },
          { id: 'opt_3', text: 'Room 204 bad now.', isCorrect: false },
        ],
        correctAnswer: 'I’m afraid there is an issue with Room 204.',
        explanation: 'Standard polite formal complaint opening.',
      },
    },
    {
      id: 'turn_a2_130_2',
      turnIndex: 2,
      partnerPrompt:
        'I am terribly sorry to hear that. That certainly falls far below our four-star standards, and I sincerely apologize for the housekeeping failure. Let me investigate right away. Did you notice any other issues with your stay or billing?',
      partnerAudioText:
        'I am terribly sorry to hear that. That certainly falls far below our four-star standards, and I sincerely apologize for the housekeeping failure. Let me investigate right away. Did you notice any other issues with your stay or billing?',
      partnerQuestionHindi:
        'यह सुनकर मुझे बहुत खेद है। यह निश्चित रूप से हमारे चार सितारा मानकों से बहुत नीचे है, और हाउसकीपिंग की विफलता के लिए मैं ईमानदारी से माफी मांगता हूँ। मुझे तुरंत जांच करने दें। क्या आपने अपने ठहरने या बिलिंग के साथ कोई अन्य समस्या देखी?',
      expectedFunction: 'Present Billing Discrepancy (incorrect £45 minibar charge never consumed)',
      contextGoal:
        'Explain that your digital app account shows an incorrect £45 charge for minibar champagne and snacks that you never opened or consumed; demand that this charge be removed.',
      targetVocabulary: ['invoice shows an unauthorized £45 minibar charge', 'we did not open or consume any minibar items', 'could you please remove this charge from our bill immediately?', 'billing discrepancy'],
      suggestedResponses: [
        {
          label: 'Spontaneous A2 Scaffold',
          text: 'Yes, furthermore, my hotel app invoice shows an unauthorized £45 charge for minibar snacks and drinks. We did not open or consume anything from the minibar, so could you please remove this charge immediately?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Minibar Discrepancy (45 / forty-five / minibar / charge / invoice / bill / unauthorized)',
          patterns: ['45', 'forty-five', 'minibar', 'charge', 'invoice', 'bill', 'unauthorized', 'fee', 'app'],
          required: true,
        },
        {
          name: 'Removal Demand (did not consume / not touched / remove / cancel / refund)',
          patterns: ['not consume', 'did not open', 'never touched', 'remove', 'cancel', 'refund', 'delete', 'correct'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_130_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We did not ___ (consume / consuming) any items from the minibar."',
        options: [
          { id: 'opt_1', text: 'consume', isCorrect: true },
          { id: 'opt_2', text: 'consuming', isCorrect: false },
          { id: 'opt_3', text: 'consumed', isCorrect: false },
        ],
        correctAnswer: 'consume',
        explanation: 'After "did not", use the base verb "consume".',
      },
    },
    {
      id: 'turn_a2_130_3',
      turnIndex: 3,
      partnerPrompt:
        'I have already credited the £45 back to your account—that was an erroneous charge from the previous occupant that housekeeping forgot to clear. Regarding Room 204, I have an Executive Garden Suite available on the fourth floor (Room 412), fully sanitized with a jacuzzi bath. Would that be acceptable as a complimentary upgrade?',
      partnerAudioText:
        'I have already credited the £45 back to your account—that was an erroneous charge from the previous occupant that housekeeping forgot to clear. Regarding Room 204, I have an Executive Garden Suite available on the fourth floor (Room 412), fully sanitized with a jacuzzi bath. Would that be acceptable as a complimentary upgrade?',
      partnerQuestionHindi:
        'मैंने आपके खाते में पहले ही £45 वापस जमा कर दिए हैं—यह पिछले रहने वाले का एक गलत शुल्क था जिसे हाउसकीपिंग क्लियर करना भूल गया था। कमरा 204 के संबंध में, मेरे पास चौथी मंजिल (कमरा 412) पर एक कार्यकारी गार्डन सुइट उपलब्ध है, जो जकूज़ी बाथ के साथ पूरी तरह से साफ-सुथरा है। क्या यह मानार्थ अपग्रेड के रूप में स्वीकार्य होगा?',
      expectedFunction: 'Accept Upgrade & Request Luggage Assistance & Key Cards',
      contextGoal:
        'Accept Room 412 gratefully; request that a porter assist with transferring your suitcases to the fourth floor and hand over the new room keys.',
      targetVocabulary: ['Executive Suite in Room 412 sounds wonderful', 'thank you for removing the £45 charge', 'could a porter help us move our luggage upstairs?', 'new key cards'],
      suggestedResponses: [
        {
          label: 'Spontaneous A2 Scaffold',
          text: 'Thank you for removing the charge so quickly. The Executive Garden Suite in Room 412 sounds wonderful and we gladly accept the upgrade. Could you please send a porter to help us move our luggage upstairs?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Upgrade Acceptance (suite / room 412 / wonderful / accept / thank you / upgrade)',
          patterns: ['suite', '412', 'wonderful', 'accept', 'thank you', 'upgrade', 'executive', 'gladly'],
          required: true,
        },
        {
          name: 'Luggage Request (porter / luggage / bags / move / upstairs / keys)',
          patterns: ['porter', 'luggage', 'bags', 'suitcases', 'move', 'upstairs', 'keys', 'help'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_130_3',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly requests luggage assistance?',
        options: [
          { id: 'opt_1', text: 'Could a porter please assist us with our bags?', isCorrect: true },
          { id: 'opt_2', text: 'Could porter assisting bags?', isCorrect: false },
          { id: 'opt_3', text: 'Porter to help now bags.', isCorrect: false },
        ],
        correctAnswer: 'Could a porter please assist us with our bags?',
        explanation: '"Could + subject + please + base verb" is the correct modal structure.',
      },
    },
    {
      id: 'turn_a2_130_4',
      turnIndex: 4,
      partnerPrompt:
        'Our concierge, James, is right here and will carry your bags up to Room 412 immediately. Here are your new electronic key cards, and I have also added complimentary champagne and full English breakfast for both mornings of your stay. Thank you for your patience and understanding.',
      partnerAudioText:
        'Our concierge, James, is right here and will carry your bags up to Room 412 immediately. Here are your new electronic key cards, and I have also added complimentary champagne and full English breakfast for both mornings of your stay. Thank you for your patience and understanding.',
      partnerQuestionHindi:
        'हमारे दरबान, जेम्स, यहीं हैं और तुरंत आपके बैग को कमरा 412 में ले जाएंगे। यहाँ आपके नए इलेक्ट्रॉनिक की-कार्ड हैं, और मैंने आपके ठहरने की दोनों सुबह के लिए मुफ्त शैंपेन और पूरा अंग्रेजी नाश्ता भी शामिल कर दिया है। आपके धैर्य और समझ के लिए धन्यवाद।',
      expectedFunction: 'Express Sincere Appreciation for Resolution & Close Interaction',
      contextGoal:
        'Thank Liam for his professional conflict resolution, the complimentary breakfast, and the suite upgrade; take the keys and head upstairs.',
      targetVocabulary: ['thank you Liam for resolving this so professionally', 'appreciate the complimentary breakfast and suite upgrade', 'looking forward to enjoying our stay in Bath', 'have a wonderful day'],
      suggestedResponses: [
        {
          label: 'Spontaneous A2 Scaffold',
          text: 'Thank you very much, Liam, for resolving this issue so professionally and quickly! We really appreciate the suite upgrade and the complimentary breakfast. We look forward to enjoying our stay. Have a wonderful day!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Appreciation & Resolution (thank you / liam / professional / quickly / breakfast / upgrade / stay / wonderful day)',
          patterns: ['thank you', 'thanks', 'liam', 'professional', 'quickly', 'breakfast', 'upgrade', 'stay', 'enjoy', 'wonderful day'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_130_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Thank you for resolving this ___ (professionally / professional)."',
        options: [
          { id: 'opt_1', text: 'professionally', isCorrect: true },
          { id: 'opt_2', text: 'professional', isCorrect: false },
          { id: 'opt_3', text: 'professed', isCorrect: false },
        ],
        correctAnswer: 'professionally',
        explanation: 'Use the adverb "professionally" to modify the verb "resolving".',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 75,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 70,
  },
};
