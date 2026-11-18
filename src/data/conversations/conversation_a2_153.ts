import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_153: ConversationDefinition = {
  id: 'conv_a2_153',
  title: 'Handling Misunderstandings & Asking for Clarification',
  cefr: 'A2',
  unitId: 'unit_a2_11',
  lessonLinks: ['lesson_a2_11_153'],
  estimatedMinutes: 5,
  scenario:
    'You are in an international operations call with Elena Rostova, logistics coordinator at TransGlobal Express. There has been a misunderstanding regarding delivery dates and warehouse destinations. You will politely interrupt to ask for clarification ("Could you clarify that?", "What do you mean by...?"), use polite indirect questions ("Could you tell me if...?"), rephrase your understanding, and confirm the resolved plan.',
  communicativeGoals: [
    'Recognize and address misunderstandings in professional and everyday conversations',
    'Use polite clarification formulas ("Could you clarify that?", "What exactly do you mean by...?")',
    'Formulate polite indirect questions ("Could you tell me whether...?")',
    'Rephrase and verify mutual understanding ("What I mean is...", "So you mean that...")',
  ],
  canDoStatements: [
    'Can recognize ambiguity or misunderstanding and request clarification politely',
    'Can ask indirect questions without interrupting abruptly',
    'Can rephrase points to confirm mutual agreement on schedules and locations',
  ],
  characters: [
    {
      id: 'char_elena_rostova',
      name: 'Elena Rostova',
      role: 'International Operations Coordinator',
      avatar: '📦',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'misunderstanding',
        ipa: '/ˌmɪsʌndəˈstændɪŋ/',
        partOfSpeech: 'noun',
        meaning: 'A failure to understand something correctly',
        exampleSentence: 'There was a slight misunderstanding about the delivery schedule.',
        translations: { hi: 'गलतफहमी / भ्रम' },
      },
      {
        word: 'clarify',
        ipa: '/ˈklærɪfaɪ/',
        partOfSpeech: 'verb',
        meaning: 'To make a statement or situation less confused and more comprehensible',
        exampleSentence: 'Could you clarify which warehouse the shipment is going to?',
        translations: { hi: 'स्पष्ट करना / साफ करना' },
      },
      {
        word: 'specifically',
        ipa: '/spəˈsɪfɪkli/',
        partOfSpeech: 'adverb',
        meaning: 'In a way that is exact and clear; in particular',
        exampleSentence: 'Which delivery slot specifically did the client request?',
        translations: { hi: 'विशेष रूप से / स्पष्ट तौर पर' },
      },
      {
        word: 'rephrase',
        ipa: '/ˌriːˈfreɪz/',
        partOfSpeech: 'verb',
        meaning: 'To express an idea in an alternative and clearer way',
        exampleSentence: 'Let me rephrase my point so there is no confusion.',
        translations: { hi: 'दूसरे शब्दों में कहना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Excuse me, could you clarify what you mean by "central hub"?',
        functionCategory: 'Polite Clarification Request',
        exampleSentence: 'Could you clarify what you mean by expedited shipping?',
      },
      {
        phrase: 'Could you tell me whether the cargo arrives on Tuesday or Wednesday?',
        functionCategory: 'Indirect Question for Disambiguation',
        exampleSentence: 'Could you tell me if the invoice has been approved?',
      },
      {
        phrase: 'What I mean is that we have two warehouses in that district.',
        functionCategory: 'Self-Correction & Rephrasing',
        exampleSentence: 'What I mean is that the driver needs gate access.',
      },
      {
        phrase: 'So if I understand correctly, the items will be dispatched to Warehouse B by 10 AM.',
        functionCategory: 'Summarizing and Verifying Confirmation',
        exampleSentence: 'So if I understand correctly, the meeting is postponed.',
      },
    ],
    grammar: {
      title: 'Clarification Frames & Polite Indirect Questions',
      conceptExplanation:
        '1. Polite Clarification: "Excuse me, could you clarify that?" / "What do you mean by [X]?" / "I’m not quite sure I understand."\n2. Indirect Questions: Use "Could you tell me if/whether + [Subject + Verb]..." (no question inversion in the embedded clause: "Could you tell me where the shipment is?").\n3. Rephrasing: "What I mean is..." / "Let me rephrase that."\n4. Checking: "So if I understand correctly, you are saying that..."',
      patternFormula: 'Polite Interruption + Clarification Question | Could you tell me if/whether + S + V',
      contrastExamples: [
        {
          incorrect: 'You speak wrong what hub is that tell me now.',
          correct: 'Excuse me, could you clarify which hub you mean? We have two facilities in that area.',
          explanation: 'Use courteous diplomatic phrasing for resolving misunderstandings.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Elena Rostova',
        text: 'We are routing all twenty pallets to the Central Depot tomorrow morning before noon.',
        translation: 'हम कल दोपहर से पहले सभी बीस पैलेटों को सेंट्रल डिपो में भेज रहे हैं।',
      },
      {
        speaker: 'You',
        text: 'Excuse me, Elena. Could you clarify which facility you mean? We have both the North Central Depot and the South Central Depot.',
        translation: 'माफ़ कीजिए, ऐलेना। क्या आप स्पष्ट कर सकती हैं कि आपका कौन सा डिपो मतलब है? हमारे पास नॉर्थ सेंट्रल डिपो और साउथ सेंट्रल डिपो दोनों हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_153_1',
      type: 'fill_blank',
      prompt: 'Complete the indirect question: "Could you tell me if the driver ___ (has arrived / did arrive / have arrived) at the gate?"',
      options: [
        { id: 'opt_1', text: 'has arrived', isCorrect: true },
        { id: 'opt_2', text: 'did arrive', isCorrect: false },
        { id: 'opt_3', text: 'have arrived', isCorrect: false },
      ],
      correctAnswer: 'has arrived',
      explanation: 'Indirect question follows standard statement word order [Subject + has arrived].',
    },
    {
      id: 'cp_a2_153_2',
      type: 'multiple_choice',
      prompt: 'Which phrase politely indicates you did not catch what someone said?',
      options: [
        { id: 'opt_1', text: 'I’m not quite sure I understand. Could you explain that once more?', isCorrect: true },
        { id: 'opt_2', text: 'Your voice is terrible speak again.', isCorrect: false },
        { id: 'opt_3', text: 'Why are you talking like that?', isCorrect: false },
      ],
      correctAnswer: 'I’m not quite sure I understand. Could you explain that once more?',
      explanation: 'Courteous clarification formula.',
    },
    {
      id: 'cp_a2_153_3',
      type: 'multiple_choice',
      prompt: 'How do you check if your understanding is accurate?',
      options: [
        { id: 'opt_1', text: 'So if I understand correctly, the delivery is rescheduled for Thursday at 10 AM?', isCorrect: true },
        { id: 'opt_2', text: 'I think everything is confusing forever.', isCorrect: false },
        { id: 'opt_3', text: 'You change schedule without my permission.', isCorrect: false },
      ],
      correctAnswer: 'So if I understand correctly, the delivery is rescheduled for Thursday at 10 AM?',
      explanation: 'Verifying mutual alignment using "So if I understand correctly...".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_153_1',
      scenarioContext: 'Ask for clarification politely.',
      prompt: 'Build: "Could you clarify what you mean by priority shipping?"',
      targetStructure: 'Could you clarify + what you mean by + priority shipping',
      wordBank: ['Could', 'you', 'clarify', 'what', 'you', 'mean', 'by', 'priority', 'shipping', 'do'],
      acceptableSolutions: [
        'Could you clarify what you mean by priority shipping',
        'Could you clarify what you mean by priority shipping?',
      ],
      explanation: 'Indirect clarification request.',
    },
    {
      id: 'sc_a2_153_2',
      scenarioContext: 'Rephrase your own point.',
      prompt: 'Build: "What I mean is we need gate access first."',
      targetStructure: 'What I mean is + we need gate access first',
      wordBank: ['What', 'I', 'mean', 'is', 'we', 'need', 'gate', 'access', 'first', 'meaning'],
      acceptableSolutions: [
        'What I mean is we need gate access first',
        'What I mean is we need gate access first.',
      ],
      explanation: 'Rephrasing signpost "What I mean is...".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_153_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! Looking at our dispatch sheet, we will deliver all forty crates directly to the "Central Warehouse" tomorrow by midday. Everything is booked!',
      partnerAudioText:
        'Hi there! Looking at our dispatch sheet, we will deliver all forty crates directly to the "Central Warehouse" tomorrow by midday. Everything is booked!',
      partnerQuestionHindi:
        'नमस्ते! हमारी डिस्पैच शीट को देखते हुए, हम कल दोपहर तक सीधे "सेंट्रल वेयरहाउस" में सभी चालीस क्रेट डिलीवर करेंगे। सब कुछ बुक हो गया है!',
      expectedFunction: 'Polite Interruption & Clarification on Ambiguous Facility (Excuse me Elena, could you clarify which Central Warehouse you mean? We have both North and East facilities)',
      contextGoal:
        'Politely interrupt Elena to point out that there are two facilities (North Central and East Central) and ask which one she means.',
      targetVocabulary: ['Excuse me Elena', 'could you clarify', 'What do you mean by Central Warehouse?', 'North Central or East Central', 'two different locations'],
      suggestedResponses: [
        {
          label: 'Polite Interruption with "Could you clarify"',
          text: 'Excuse me, Elena. Could you clarify which facility you mean specifically? We have both the North Central warehouse and the East Central warehouse in Birmingham.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Polite Question with "What do you mean"',
          text: 'I’m not quite sure I understand. What do you mean by Central Warehouse? We have two different hubs in that district.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Polite Interruption/Clarification Marker (excuse me / could you clarify / not sure I understand / what do you mean / pardon)',
          patterns: ['excuse me', 'could you clarify', 'not sure', 'understand', 'what do you mean', 'pardon', 'sorry to interrupt'],
          required: true,
        },
        {
          name: 'Ambiguity Detail (which / facility / warehouse / north / east / central / two / locations / hubs)',
          patterns: ['which', 'facility', 'warehouse', 'north', 'east', 'central', 'two', 'locations', 'hubs', 'specifically'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_direct_blunt',
          pattern: 'you are wrong|which warehouse you mean without please',
          errorType: 'interaction',
          message: 'Use polite markers like "Excuse me", "Could you clarify...", or "I’m not quite sure I understand".',
          correctionPattern: 'Excuse me, could you clarify which warehouse you mean?',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_153_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Excuse me, could you ___ (clarify / clarifying) which depot you mean?"',
        options: [
          { id: 'opt_1', text: 'clarify', isCorrect: true },
          { id: 'opt_2', text: 'clarifying', isCorrect: false },
          { id: 'opt_3', text: 'clarified', isCorrect: false },
        ],
        correctAnswer: 'clarify',
        explanation: 'Modal "could you" is followed by a base verb ("clarify").',
      },
    },
    {
      id: 'turn_a2_153_2',
      turnIndex: 2,
      partnerPrompt:
        'Oh! I didn’t realize you had two separate warehouses in that area. The dispatch order simply says "Zone 4 Delivery". Could you tell me where the temperature-controlled perishable items are stored?',
      partnerAudioText:
        'Oh! I didn’t realize you had two separate warehouses in that area. The dispatch order simply says "Zone 4 Delivery". Could you tell me where the temperature-controlled perishable items are stored?',
      partnerQuestionHindi:
        'अरे! मुझे नहीं पता था कि आपके पास उस क्षेत्र में दो अलग-अलग गोदाम हैं। डिस्पैच ऑर्डर में केवल "जोन 4 डिलीवरी" लिखा है। क्या आप मुझे बता सकते हैं कि तापमान-नियंत्रित खराब होने वाली वस्तुएं कहाँ संग्रहीत हैं?',
      expectedFunction: 'Rephrase & Specify Proper Facility with Reason ("What I mean is that perishable goods must go to East Central because it has refrigeration")',
      contextGoal:
        'Clarify that perishable crates must go to East Central because North Central has no cold storage.',
      targetVocabulary: ['What I mean is', 'East Central warehouse', 'refrigeration units / cold storage', 'perishable items', 'North Central has only dry storage'],
      suggestedResponses: [
        {
          label: 'Rephrasing with "What I mean is"',
          text: 'What I mean is that all perishable goods must be delivered to East Central because only East Central has cold storage facilities.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Clarification with Reason',
          text: 'Let me explain: East Central handles refrigerated items, whereas North Central is strictly for dry goods.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Clarification Marker (what I mean is / let me explain / specifically / to clarify)',
          patterns: ['what i mean is', 'let me explain', 'specifically', 'to clarify', 'rephrase', 'actually'],
          required: true,
        },
        {
          name: 'Facility & Cold Storage (east / east central / cold storage / refrigerated / temperature / perishable / dry)',
          patterns: ['east', 'east central', 'cold storage', 'refrigerated', 'refrigeration', 'temperature', 'perishable', 'dry'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_153_2',
        type: 'multiple_choice',
        prompt: 'Which sentence rephrases a point clearly and professionally?',
        options: [
          { id: 'opt_1', text: 'What I mean is that East Central has the cold storage units we need.', isCorrect: true },
          { id: 'opt_2', text: 'I said East you do not listen.', isCorrect: false },
          { id: 'opt_3', text: 'Storage is somewhere over there.', isCorrect: false },
        ],
        correctAnswer: 'What I mean is that East Central has the cold storage units we need.',
        explanation: '"What I mean is..." introduces clear rephrasing.',
      },
    },
    {
      id: 'turn_a2_153_3',
      turnIndex: 3,
      partnerPrompt:
        'Thank goodness we caught that mix-up! I will update the delivery address to East Central right away. To make sure the driver doesn’t face delays, could you tell me if there is a specific gate or contact person on site?',
      partnerAudioText:
        'Thank goodness we caught that mix-up! I will update the delivery address to East Central right away. To make sure the driver doesn’t face delays, could you tell me if there is a specific gate or contact person on site?',
      partnerQuestionHindi:
        'भगवान का शुक्र है कि हमने उस भ्रम को पकड़ लिया! मैं तुरंत डिलीवरी का पता ईस्ट सेंट्रल पर अपडेट कर दूँगा। यह सुनिश्चित करने के लिए कि ड्राइवर को देरी का सामना न करना पड़े, क्या आप मुझे बता सकते हैं कि क्या साइट पर कोई विशिष्ट गेट या संपर्क व्यक्ति है?',
      expectedFunction: 'Provide Gate/Contact Details & Ask Delivery Time Confirmation (Use Gate 3 / contact warehouse supervisor Alex / ask for ETA confirmation)',
      contextGoal:
        'Provide gate access details (Gate 3, ask for Alex) and ask Elena to confirm the estimated arrival time.',
      targetVocabulary: ['Gate 3 loading bay', 'Alex the supervisor', 'contact person', 'Could you confirm the estimated arrival time?'],
      suggestedResponses: [
        {
          label: 'Contact Info & Follow-up Question',
          text: 'The driver should enter through Gate 3 and ask for our supervisor, Alex. Could you confirm what time the driver is expected to arrive tomorrow?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Instructions & Time Check',
          text: 'Please tell the driver to go to Gate 3 and report to Alex. What is the driver’s estimated arrival time?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gate & Contact (gate 3 / gate / alex / supervisor / contact / bay / loading)',
          patterns: ['gate 3', 'gate', 'alex', 'supervisor', 'contact', 'bay', 'loading', 'entrance'],
          required: true,
        },
        {
          name: 'Time/Arrival Question (time / when / arrive / arrival / expected / eta / confirm / ?)',
          patterns: ['time', 'when', 'arrive', 'arrival', 'expected', 'eta', 'confirm', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_153_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Could you tell me when the driver ___ (will arrive / does arrive)?"',
        options: [
          { id: 'opt_1', text: 'will arrive', isCorrect: true },
          { id: 'opt_2', text: 'does arrive', isCorrect: false },
          { id: 'opt_3', text: 'arriving', isCorrect: false },
        ],
        correctAnswer: 'will arrive',
        explanation: 'Indirect question word order: [Subject + will arrive].',
      },
    },
    {
      id: 'turn_a2_153_4',
      turnIndex: 4,
      partnerPrompt:
        'The driver is scheduled to arrive at Gate 3 at 10:30 AM tomorrow and will present the paperwork to Alex. Can you summarize our final agreement to make sure we are 100% aligned?',
      partnerAudioText:
        'The driver is scheduled to arrive at Gate 3 at 10:30 AM tomorrow and will present the paperwork to Alex. Can you summarize our final agreement to make sure we are 100% aligned?',
      partnerQuestionHindi:
        'ड्राइवर कल सुबह 10:30 बजे गेट 3 पर पहुंचने के लिए निर्धारित है और एलेक्स को कागजी कार्रवाई प्रस्तुत करेगा। क्या आप हमारे अंतिम समझौते का संक्षेप प्रस्तुत कर सकते हैं ताकि यह सुनिश्चित हो सके कि हम 100% संरेखित हैं?',
      expectedFunction: 'Summarize Resolved Plan & Confirm Alignment (So if I understand correctly, 40 perishable crates go to East Central Gate 3 tomorrow at 10:30 AM for Alex)',
      contextGoal:
        'Summarize the confirmed plan using "So if I understand correctly..." and thank Elena for clearing up the misunderstanding.',
      targetVocabulary: ['So if I understand correctly', '40 crates to East Central warehouse', 'Gate 3 at 10:30 AM', 'Alex will sign the delivery receipt', 'Thank you for clarifying Elena'],
      suggestedResponses: [
        {
          label: 'Comprehensive Verification Summary',
          text: 'So if I understand correctly: all forty crates will be delivered to the East Central warehouse at Gate 3 tomorrow at 10:30 AM, and Alex will receive them. Thank you for clarifying everything, Elena!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Confirmation Summary',
          text: 'To confirm: delivery is at East Central, Gate 3, tomorrow at 10:30 AM with Alex. Thanks for sorting this out so quickly!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Confirmation Marker (so if I understand correctly / to confirm / in summary / so / agreed)',
          patterns: ['so if i understand correctly', 'to confirm', 'in summary', 'so', 'agreed', 'summary'],
          required: true,
        },
        {
          name: 'Key Details (east central / gate 3 / 10:30 / alex / tomorrow / 40 crates / thank you)',
          patterns: ['east central', 'gate 3', '10:30', 'alex', 'tomorrow', '40', 'crates', 'thank you', 'thanks'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_153_4',
        type: 'multiple_choice',
        prompt: 'Which opening formula is best for checking mutual understanding at the end of a call?',
        options: [
          { id: 'opt_1', text: 'So if I understand correctly, the items will arrive at East Central at 10:30 AM.', isCorrect: true },
          { id: 'opt_2', text: 'You do what I said now bye.', isCorrect: false },
          { id: 'opt_3', text: 'I hope you do not fail again.', isCorrect: false },
        ],
        correctAnswer: 'So if I understand correctly, the items will arrive at East Central at 10:30 AM.',
        explanation: 'Polite verification formula.',
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
